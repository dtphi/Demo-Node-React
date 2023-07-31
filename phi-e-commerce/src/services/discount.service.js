'use strict'

const { BadRequestError, NotFoundError } = require("../core/error.response")
const { convert2ObjectId } = require("../utils")
const { discount } = require('../models/discount.model')
const { findAllProducts } = require("../models/repositories/product.repo")
const { findAllDiscountCodesSelect, findAllDiscountCodesUnSelect, checkDiscountExists } = require("../models/repositories/discount.repo")

class DiscountService {

    /**
     * Create discount for product
     * @param {*} payload 
     * @returns 
     */
    static async createDiscountCode(payload) {
        const {
            code, start_date, end_date, is_active, shopId, min_order_value,
            product_ids, applies_to, name, description, type, users_used,
            value, max_value, max_users, users_count, max_uses_per_user
        } = payload

        // validate
        if (new Date() > new Date(start_date) || new Date() > new Date(end_date)) {
            throw new BadRequestError('Discount code has expired')
        }

        if (new Date(end_date) < new Date(start_date)) {
            throw new BadRequestError('End date more than start date')
        }

        // create index for discount code
        const foundDiscount = discount.findOne({
            discount_code: code,
            discount_shop_id: convert2ObjectId(shopId)
        }).lean()

        if (foundDiscount && foundDiscount.discount_is_active) {
            throw new BadRequestError('Discount exists')
        }

        const discountCreated = await discount.create({
            discount_name: name,
            discount_description: description,
            discount_type: type,
            discount_code: code,
            discount_value: value,
            discount_min_order_value: min_order_value || 0,
            discount_max_value: max_value,
            discount_start_day: new Date(start_date),
            discount_end_day: new Date(end_date),
            discount_max_uses: max_users,
            discount_uses_count: users_count,
            discount_users_used: users_used,
            discount_shop_id: shopId,
            discount_max_uses_per_user: max_uses_per_user,
            discount_is_active: is_active,
            discount_applies_to: applies_to,
            discount_product_ids: applies_to === 'all' ? [] : product_ids
        })

        return discountCreated
    }

    static async updateDiscountCode(payload) {
        const {
            code, start_date, end_date, is_active, shopId, min_order_value,
            product_ids, applies_to, name, description, type,
            value, max_value, max_users
        } = payload


    }

    /**
     * Get all discount code with product.
     * @param {*} param0 
     * @returns 
     */
    static async getAllDiscountCodesWithProduct({ code, shopId, userId, limit, page }) {
        // create index for discount_code
        const foundDiscount = await discount.findOne({
            discount_code: code,
            discount_shop_id: convert2ObjectId(shopId)
        })

        if (!foundDiscount || !foundDiscount.discount_is_active) {
            throw new BadRequestError('Discount not exists')
        }

        const { discount_applies_to, discount_product_ids } = foundDiscount
        let filter
        if (discount_applies_to === 'all') {
            // get all
            filter = {
                product_shop: convert2ObjectId(shopId),
                isPublished: true
            }
        }

        if (discount_applies_to === 'specific') {
            // get by product ids
            filter = {
                _id: { $in: discount_product_ids },
                isPublished: true
            }
        }

        const discountAllProduct = await findAllProducts({
            filter,
            limit: +limit,
            page: +page,
            sort: 'ctime',
            select: ['product_name']
        })

        return discountAllProduct
    }

    /**
     * Get all discount code by shop
     * @param {*} param0 
     * @returns 
     */
    static async getAllDiscountCodesByShop({ limit, page, shopId }) {
        const discountAll = await findAllDiscountCodesUnSelect(
            {
                limit: +limit,
                page: +page,
                filter: {
                    discount_shopId: convert2ObjectId(shopId),
                    discount_is_active: true
                },
                unSelect: ['__v', 'discount_shop_id'],
                model: discount
            }
        )

        return discountAll
    }

    /**
     * Get all discount code by shop
     * @param {*} param0 
     * @returns 
     */
    static async getAllDiscountCodesSelectByShop({ limit, page, shopId }) {
        const discountAll = await findAllDiscountCodesSelect(
            {
                limit: +limit,
                page: +page,
                filter: {
                    discount_shopId: convert2ObjectId(shopId),
                    discount_is_active: true
                },
                select: ['discount_code', 'discount_name'],
                model: discount
            }
        )

        return discountAll
    }

    /**
     * Get discount amount
     * @param {*} param0 
     * @returns 
     */
    static async getDiscountAmount({ codeId, userId, shopId, products }) {
        const foundDiscount = await checkDiscountExists({
            model: discount,
            filter: {
                discount_code: codeId,
                discount_shop_id: convert2ObjectId(shopId)
            }
        })

        if (!foundDiscount) {
            throw new BadRequestError('Discount not exists')
        }

        const {
            discount_is_active,
            discount_max_uses,
            discount_start_date,
            discount_end_date,
            discount_min_order_value,
            discount_max_order_value,
            discount_users_used,
            discount_type,
            discount_value
        } = foundDiscount

        if (!discount_is_active) throw new BadRequestError('Discount expired')
        if (discount_max_uses === 0) throw new BadRequestError('Discount are out')

        if (new Date() < new Date(discount_start_date)
            || new Date() > new Date(discount_end_date)) throw new BadRequestError('Discount code has expired')

        // check xem cos et gia tri toi thieu hay k
        let totalOrder = 0
        if (discount_min_order_value > 0) {
            // get total
            totalOrder = products.reduce((acc, product) => {
                return acc + (product.quantity * product.price)
            }, 0)

            if (totalOrder < discount_min_order_value) {
                throw new BadRequestError(`Discount requires a minium order value of ${discount_min_order_value}`)
            }
        }

        if (discount_max_order_value > 0) {
            const userDiscount = discount_users_used.find(user => user.userId === userId)
            if (userDiscount) {
                // ..
            }
        }

        // check xem discount nay la fixed amount
        const amount = discount_type === 'fixed_amount' ? discount_value : (totalOrder * (discount_value / 100))

        return {
            totalOrder,
            discount: amount,
            totalPrice: totalOrder - amount
        }
    }

    /**
     * Delete discount.
     * delete voucher , Nen tao schema moi de chua data xoa, neu su dung status delete se ton index.
     * @param {*} param0 
     * @returns 
     */
    static async deleteDiscountCode({ shopId, codeId }) {
        // kiem tra xem co dk su dung o dau khong, neu k co thi xoa
        const foundDiscount = ''
        if (foundDiscount) {
            // Deleted.
        }

        return await discount.findOneAndDelete({
            discount_code: codeId,
            discount_shop_id: convert2ObjectId(shopId)
        })
    }

    /**
     * User Cancel discount code.
     * @param {*} param0 
     * @returns 
     */
    static async cancelDiscountCode({ codeId, shopId, userId }) {
        // check exists
        const foundDiscount = await checkDiscountExists({
            model: discount,
            filter: {
                discount_code: codeId,
                discount_shop_id: convert2ObjectId(shopId)
            }
        })

        if (!discount) throw new NotFoundError('Discount not exists')

        const discountUpdate = await discount.findByIdAndUpdate(foundDiscount._id, {
            $pull: {
                discount_users_used: userId,
            },
            $inc: {
                discount_max_users: 1,
                discount_uses_count: -1
            }
        })

        return discountUpdate
    }

}

module.exports = DiscountService