define([], function() {
  return {
    setInterval: function(interval, cb) {
      return setInterval(cb, interval * 1000)
    }
  , setTimeout: function(timeout, cb) {
      return setTimeout(cb, timeout * 1000)
    }
  }
})
