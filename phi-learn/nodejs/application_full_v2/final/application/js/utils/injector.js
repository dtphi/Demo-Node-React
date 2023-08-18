define([], function() {
  var Injector = {}

  Injector.resolve = function(dependencies, fn) {
    return function() {
      var fnArguments = Array.prototype.slice.apply(arguments)

      require(dependencies, function() {
        var dependenciesArguments = Array.prototype.slice.apply(arguments)
          , compositeArguments = dependenciesArguments.concat(fnArguments)

        fn.apply(null, compositeArguments)
      })
    }
  }

  Injector.validate = function(fn) {
    var argumentsString = fn.toString().match(/^function\s*[^\(]*\(\s*([^\)]*)\)/m)[1]
      , separatedArguments = argumentsString.split(/\s*\,+\s/g)
      , argumentNames = separatedArguments.map(function(arg) {
          return arg.match(/^\w+/)
        })
      , argumentTypes = separatedArguments.map(function(arg){
          return arg.match(/\/\*(\w+)\*\//) && arg.match(/\/\*(\w+)\*\//)[1]
        })

    return function() {
      for (var i = 0; i < argumentTypes.length; i++) {
        if (argumentTypes[i] && typeof arguments[i] != argumentTypes[i]) {
          throw new Error('Provided argument <' + argumentNames[i] + '> should be of type ' + argumentTypes[i])
        }
      }

      return fn.apply(arguments)
    }
  }

  return Injector
})
