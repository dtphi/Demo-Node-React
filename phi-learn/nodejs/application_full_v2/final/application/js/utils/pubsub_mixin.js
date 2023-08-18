define([], function() {
  return {
    init: function() {
      this._observers = {}
      return this
    }

  , destroy: function() {
      delete this._observers
    }

  , ensureTopicExist: function(topic) {
      if (!this._observers.hasOwnProperty(topic)) {
        this._observers[topic] = []
      }
    }

  , on: function(topic, cb, context) {
      context = context || null
      this.ensureTopicExist(topic)
      this._observers[topic].push({cb: cb, context: context})
      return this
    }

  , off: function(topic, cb) {
      this.ensureTopicExist(topic)
      for (var i = this._observers[topic].length - 1; i >= 0; i--) {
        if (this._observers[topic][i].cb === cb) {
          this._observers[topic].splice(i, 1)
        }
      }
      return this
    }

  , trigger: function(topic) {
      if (this._observers.hasOwnProperty(topic))
      for (var i = 0; i < this._observers[topic].length; i++) {
        this._observers[topic][i].cb.apply(this._observers[topic][i].context, Array.prototype.slice.call(arguments, 1))
      }
      return this
    }
  }
})
