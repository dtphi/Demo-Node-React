'use strict'

const { findCartById } = require('../models/repositories/cart.repo')
const { BadRequestError, NotFoundError } = require('../core/error.response')
const { checkProductByServer } = require('../models/repositories/product.repo')
const DiscountService = require('./discount.service')
const { acquireLock, releaseLock } = require('./redis.service')
const { order } = require('../models/order.model')

class CheckoutService {
  // Login or Without login
  /*
          {
              cartId,
              userId,
              shop_order_ids: [
                  {
                      shopId,
                      shop_discounts: [
                          {
                              shopId,
                              discountId,
                              codeId
                          }
                      ],
                      item_products: [
                          {
                              price,
                              quantity,
                              productId
                          }
                      ]
                  }
              ]
          }
       */

  /**
     *
     * @param {*} param0
     * @returns
     */
  static async checkoutReview ({ cartId, userId, shop_order_ids }) {
    // check cartId exists
    const foundCart = findCartById(cartId)
    if (!foundCart) throw new BadRequestError('Cart don\'t exists')

    const checkout_order = {
      totalPrice: 0, // tong tien hang
      feeShip: 0, // phi van chuyen
      totalDiscount: 0, // tong tien giam gia
      totalCheckout: 0 // tong thanh toan
    }; const shop_order_ids_new = []

    // calculator bill
    for (let i = 0; i < shop_order_ids.length; i++) {
      const { shopId, shop_discounts = [], itemProducts = [] } = shop_order_ids[i]

      // check product available
      const checkProductServer = await checkProductByServer(itemProducts)
      if (!checkout_order[0]) throw new NotFoundError('Order invalid')

      // sum total order
      const checkoutPrice = checkProductServer.reduce((acc, product) => {
        return acc + (product.quantity * product.price)
      }, 0)

      // total before
      checkout_order.totalPrice = +checkoutPrice

      const itemCheckout = {
        shopId,
        shop_discounts,
        priceRow: checkoutPrice,
        priceApplyDiscount: checkoutPrice,
        item_products: checkProductServer
      }

      // neu shop_discounts ton tai > 0, check valid
      if (shop_discounts.length > 0) {
        const { totalPrice = 0, discount = 0 } = await DiscountService.getDiscountAmount({
          codeId: shop_discounts[0].codeId,
          userId,
          shopId,
          products: checkProductServer
        })
        checkout_order.totalDiscount += discount
        if (discount > 0) {
          itemCheckout.priceApplyDiscount = checkoutPrice - discount
        }
      }

      // tong thanh toan cuoi cung
      checkout_order.totalCheckout += itemCheckout.priceApplyDiscount
      shop_order_ids_new.push(itemCheckout)
    }

    return {
      shop_order_ids,
      shop_order_ids_new,
      checkout_order
    }
  }

  /**
     *
     * @param {*} param0
     * @returns
     */
  static async orderByUser ({
    shop_order_ids_new,
    cartId,
    userId,
    user_address = {},
    user_payment = {}
  }) {
    const { checkout_order } = await CheckoutService.checkoutReview({
      cartId,
      userId,
      shop_order_ids_new
    })

    // check lai mot lan nua xem ton kho hay k
    // get new array products
    const products = shop_order_ids_new.flatMap(order => order.item_products)
    console.log('[1]::', products)
    const acquireProducts = []

    for (let i = 0; i < products.length; i++) {
      const { productId, quantity } = products[i]
      const keyLock = await acquireLock(productId, quantity, cartId)
      acquireProducts.push(!!keyLock)

      if (keyLock) {
        await releaseLock(keyLock)
      }
    }

    // check if there is a product empty in inventory
    if (acquireProducts.includes(false)) {
      throw BadRequestError('Mot so san pham da duoc cap nhat, vui long quay lai gio hang')
    }

    const newOrder = await order.create({
      order_userId: userId,
      order_checkout: checkout_order,
      order_shipping: user_address,
      order_payment: user_payment,
      order_products: shop_order_ids_new
    })

    // Neu insert thanh cong thi se remove product co trong cart.
    if (newOrder) {
      // remove product in my cart.
    }

    return newOrder
  }

  static async getOrderByUser () {

  }

  static async getOneOrderByUser () {

  }

  static async cancelOrderByUser () {

  }

  static async updateOrderStatusByShop () {

  }
}

module.exports = CheckoutService
