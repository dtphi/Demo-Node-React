'use strict'

const initErrorHandler = async (req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  
  next(error)
}

const errorHandler = async (error, req, res, next) => {
  //console.log('Middleware error handle:::', error)
  const statusCode = error.status || 500
  return res.status(statusCode).json({
    status: 'error',
    code: statusCode,
    message: error.message || 'Internal Server Error'
  })
}

module.exports = {
  initErrorHandler,
  errorHandler
}
