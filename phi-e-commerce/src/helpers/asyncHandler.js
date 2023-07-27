/**
 * Middleware handler for error.
 * @param {*} fn
 * @returns
 */
const asyncHandler = fn => {
  return (req, res, next) => {
    fn(req, res, next).catch(next)
  }
}

module.exports = asyncHandler
