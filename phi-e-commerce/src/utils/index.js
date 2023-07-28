'use strict'

const _ = require('lodash')

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

module.exports = {
  getInfoData,
  registerStrategy
}
