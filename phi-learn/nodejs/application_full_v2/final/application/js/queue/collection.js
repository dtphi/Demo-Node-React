define([
  'track/controller'
, 'utils/iterator_mixin'
, 'utils/util'
], function(TrackController, IteratorMixin, Util){
  function TracksIterator() {
    this.init()
  }

  Util.mixFromTo(IteratorMixin, TracksIterator.prototype)

  TracksIterator.prototype.loadFrom = function(url, callback) {
    var that = this
    var promise = new Promise(function(resolve, reject) {
      var client = new XMLHttpRequest()

      client.open('GET', url)
      client.send()
      client.onload = function () {
        if (this.status == 200) {
          var objectsArray = JSON.parse(this.response)
          addObjectsAsModels(objectsArray, that)

          resolve(JSON.parse(this.response))
        } else {
          reject(this.statusText)
        }
      }
      client.onerror = function () {
        reject(this.statusText)
      }
    })

    return promise
  }

  function addObjectsAsModels(objectsArray, parent) {
    var trackController
      , childTracks

    for (var i = 0; i < objectsArray.length; i++) {
      if (objectsArray[i].tracks) {
        childTracks = objectsArray[i].tracks
        delete objectsArray[i].tracks
      } else {
        childTracks = []
      }

      trackController = new TrackController(objectsArray[i].type || 'track', objectsArray[i])
      parent.addChild(trackController)
      addObjectsAsModels(childTracks, trackController)
    }
  }

  var tracksCollection = new TracksIterator()

  return function() {
    return tracksCollection
  }
})
