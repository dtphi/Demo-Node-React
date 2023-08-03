'use strict'

const { unGetSelectData, getSelectData } = require("../../utils")

/**
 * 
 * @param {*} param0 
 * @returns 
 */
const findAllDiscountCodesUnSelect = async ({ limit = 50, page = 1, sort = 'ctime', filter, unSelect, model }) => {
    const skip = (page - 1) * limit
    const sortBy = sort === 'ctime' ? { _id: -1 } : { _id: 1 }

    return await model.find(filter)
        .sort(sortBy)
        .skip(skip)
        .limit(limit)
        .select(unGetSelectData(unSelect))
        .lean()
}

/**
 * 
 * @param {*} param0 
 * @returns 
 */
const findAllDiscountCodesSelect = async ({ limit = 50, page = 1, sort = 'ctime', filter, select, model }) => {
    const skip = (page - 1) * limit
    const sortBy = sort === 'ctime' ? { _id: -1 } : { _id: 1 }

    return await model.find(filter)
        .sort(sortBy)
        .skip(skip)
        .limit(limit)
        .select(getSelectData(select))
        .lean()
}

/**
 * 
 * @param {*} param0 
 * @returns 
 */
const checkDiscountExists = async ({ model, filter }) => {
    return await model.findOne(filter).lean()
}

module.exports = {
    findAllDiscountCodesUnSelect,
    findAllDiscountCodesSelect,
    checkDiscountExists
}