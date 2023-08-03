const { product } = require('../product.model')
const { Types } = require("mongoose")
const { convert2ObjectId } = require("../../utils")

/**
 * 
 * @param {*} param0 
 * @returns 
 */
const publishProductByShop = async ({ product_shop, product_id }) => {
    // find one
    const foundShop = await product.findOne({
        product_shop: new Types.ObjectId(product_shop),
        _id: new Types.ObjectId(product_id),
    })

    if (!foundShop) return foundShop

    // update isDraft, isPublish
    foundShop.isDraft = false
    foundShop.isPublished = true

    // if update success is mongoose will return modifiedCount = 1 else return modifiedCount = 0. 
    const { modifiedCount } = await foundShop.update(foundShop)

    return modifiedCount
}

/**
 * 
 * @param {*} param0 
 * @returns 
 */
const unPublishProductByShop = async ({ product_shop, product_id }) => {
    // find one
    const foundShop = await product.findOne({
        product_shop: new Types.ObjectId(product_shop),
        _id: new Types.ObjectId(product_id),
    })

    if (!foundShop) return foundShop

    // update isDraft, isPublish
    foundShop.isDraft = true
    foundShop.isPublished = false

    // if update success is mongoose will return modifiedCount = 1 else return modifiedCount = 0. 
    const { modifiedCount } = await foundShop.update(foundShop)

    return modifiedCount;
}

/**
 * 
 * @param {*} param0 
 * @returns 
 */
const findAllDraftsForShop = async ({ query, limit, skip }) => {
    return await queryProduct({ query, limit, skip })
}

/**
 * 
 * @param {*} param0 
 * @returns 
 */
const queryProduct = async ({ query, limit, skip }) => {
    return await product.find(query)
        .populate('product_shop', 'name email -_id')
        .sort({ updateAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean()
        .exec()
}

/**
 * 
 * @param {*} param0 
 * @returns 
 */
const findAllPublishForShop = async ({ query, limit, skip }) => {
    return await queryProduct({ query, limit, skip })
}

/**
 * 
 * @param {*} param0 
 * @returns 
 */
// search full text must isPublished = true
const searchProductByUser = async ({ keySearch }) => {
    const regexSearch = new RegExp(keySearch)
    return await product.find({
        isPublished: true,
        $text: { $search: regexSearch }
    }, { score: { $meta: 'textScore' } })
        .sort({ score: { $meta: 'textScore' } })
        .lean()
}

/**
 * 
 * @param {*} productId 
 * @returns 
 */
const getProductById = async (productId) => {
    return await product.findOne({ _id: convert2ObjectId(productId) }).lean()
}

/**
 * 
 * @param {*} param0 
 * @returns 
 */
const findAllProducts = async ({ limit, sort, page, filter, select }) => {
    const skip = (page - 1) * limit
    const sortBy = sort === 'ctime' ? { _id: -1 } : { _id: 1 }

    return await product.find(filter)
        .sort(sortBy)
        .skip(skip)
        .limit(limit)
        .select(select)
        .lean()
}

/**
 * 
 * @param {*} product_id 
 * @param {*} unSelect 
 * @returns 
 */
const findById = async (product_id, unSelect) => {
    return await product.findById(product_id).select(unSelect)
}

/**
 * 
 * @param {*} param0 
 * @returns 
 */
const updateProductById = async ({
    productId,
    bodyUpdate,
    model,
    isNew = true
}) => {
    return await model.findByIdAndUpdate(productId, bodyUpdate, {
        new: isNew
    })
}

/**
 * 
 * @param {*} products 
 * @returns 
 */
const checkProductByServer = async (products) => {
    return await Promise.all(
        products.map(async product => {
            const foundProduct = await getProductById(product.productId)
            if (foundProduct) {
                return {
                    price: foundProduct.product_price,
                    quantity: product.quantity,
                    productId: product.productId
                }
            }
        })
    )
}

module.exports = {
    findAllDraftsForShop,
    findAllPublishForShop,
    publishProductByShop,
    unPublishProductByShop,
    searchProductByUser,
    findAllProducts,
    findById,
    updateProductById,
    getProductById,
    checkProductByServer
}
