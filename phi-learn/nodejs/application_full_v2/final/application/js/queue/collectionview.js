define([], function(){
  function TracksView() {}

  TracksView.prototype.render = function(tracksIterator) {
    var track
    while(track = tracksIterator.next().value) {
      track.show()
    }
    tracksIterator.reset()
  }

  return TracksView
})
