'use strict'

const _ = require('lodash')
const {Types} = require("mongoose")

const getInfoData = ({ fields = [], obj = {} }) => {
  console.log('Pick Object::', obj)
  return _.pick(obj, fields)
}

const registerStrategy = (objTypes, registerFactory) => {
  _.forEach(objTypes, (classRef, type) => {
    registerFactory[type] = classRef
  })

  return registerFactory
}

const getSelectData = (select = []) => {
  return Object.fromEntries(select.map((el => [el, 1])))
}

const unGetSelectData = (select = []) => {
  return Object.fromEntries(select.map((el => [el, 0])))
}

const checkEnable = (value) => {
  return value === 'true'
}

const convert2ObjectId = id => {
  return new Types.ObjectId(id)
}

const removeAttrUndefined = (object) => {
  Object.keys(object).forEach(key => {
      if (object[key] === undefined
          || object[key] === null) delete object[key]
  })

  return object
}

const updateNestedObjectParser = obj => {
  const final = {}
  Object.keys(obj).forEach(i => {
      if (typeof obj[i] === 'object' && !Array.isArray(obj[i])) {
          const response = updateNestedObjectParser(obj[i])
          Object.keys(obj[i]).forEach(j => {
              final[`${i}.${j}`] = response[j]
          })
      } else {
          final[i] = obj[i]
      }
  })

  return final
}

module.exports = {
  getInfoData,
  registerStrategy
}
