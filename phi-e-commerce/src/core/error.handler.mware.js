'use strict'

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const initErrorHandler = async (req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404

  next(error)
}

/**
 *
 * @param {*} error
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
const errorHandler = async (error, req, res, next) => {
  const statusCode = error.status || 500
  return res.status(statusCode).json({
    status: 'error',
    code: statusCode,
    stack: error.stack,
    message: error.message || 'Internal Server Error'
  })
}

module.exports = {
  initErrorHandler,
  errorHandler
}
