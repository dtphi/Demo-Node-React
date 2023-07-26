'use strict'

const _ = require('lodash')

const getInfoData = ({ fields = [], obj = {}}) => {
    console.log('Pick Object::', obj)
    return _.pick(obj, fields)
}

module.exports = {
    getInfoData,
}