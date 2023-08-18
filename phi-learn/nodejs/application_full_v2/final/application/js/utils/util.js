define([], function() {
  return {
    clone: function(obj) {
      var objClone = {}
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          objClone[key] = obj[key]
        }
      }

      return objClone
    }

  , mixFromTo: function(From, To) {
      for (var key in From) {
        if (From.hasOwnProperty(key)) {
          To[key] = From[key]
        }
      }
    }

  , proxy: function(fn, context) {
      return function() {
        return fn.apply(context, arguments)
      }
    }

    // Checks 2 objects' contents for equality
  , equal: function(obj1, obj2) {
      var key

      for (key in obj1) {
        if (obj1.hasOwnProperty(key)) {
          if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
            return false
          }
        }
      }

      for (key in obj2) {
        if (obj2.hasOwnProperty(key)) {
          if (!obj1.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
            return false
          }
        }
      }

      return true
    }
  }
})
