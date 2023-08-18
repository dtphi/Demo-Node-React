define([], function() {
  return {
    init: function() {
      this.childTracks = []
      this.currentIndex = -1
    }

  , addChild: function(track) {
      this.childTracks.push(track)
    }

  , hasNext: function() {
      var currentChildHasNext = this.currentIndex >= 0 && this.currentIndex < this.childTracks.length && this.childTracks[this.currentIndex].hasNext()
        , nextTrackAvailable = this.currentIndex + 1 < this.childTracks.length

      return currentChildHasNext || nextTrackAvailable
    }

  , next: function() {
      if (this.hasNext()) {
        var currentChildHasNext = this.currentIndex >= 0 && this.currentIndex < this.childTracks.length && this.childTracks[this.currentIndex].hasNext()
          , nextTrackAvailable = this.currentIndex + 1 < this.childTracks.length

        if (currentChildHasNext) {
          return {value: this.childTracks[this.currentIndex].next().value, done: false}
        } else {
          this.currentIndex++
          return {value: this.childTracks[this.currentIndex], done: false}
        }
      } else {
        return {value: undefined, done: true}
      }
    }

  , current: function() {
      if (this.currentIndex >= 0 && this.currentIndex < this.childTracks.length) {
        var currentTrack = this.childTracks[this.currentIndex]

        if (currentTrack && !currentTrack.current().done && currentTrack.current().value) {
          return {value: this.childTracks[this.currentIndex].current().value, done: false}
        } else {
          return {value: this.childTracks[this.currentIndex], done: false}
        }
      } else {
        return {value: undefined, done: true}
      }
    }

  , reset: function() {
      this.currentIndex = -1
      for (var i = 0; i < this.childTracks.length; i++) {
        this.childTracks[i].reset()
      }
    }

  , removeById: function(id) {
      for (var i = 0; i < this.childTracks.length; i++) {
        if (this.childTracks[i].model.get('id') == id) {
          this.childTracks[i].destroy()
          this.childTracks.splice(i, 1)

          if (i < this.currentIndex) {
            this.currentIndex -= 1
          }

          break
        } else {
          this.childTracks[i].removeById(id)
        }
      }
    }
  }
})
