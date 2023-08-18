function TracksCollection() {
  this.inlineTracks = {}
  this.nestedTracks = []
  this.maxTrackId = 0
}

TracksCollection.prototype.add = function(track) {
  if (track.parentId != null && this.inlineTracks[track.parentId] != null) {
    // Check if parent has tracks field
    if (this.inlineTracks[track.parentId].tracks == null) {
      this.inlineTracks[track.parentId].tracks = []
    }

    this.inlineTracks[track.parentId].tracks.push(track)
  } else {
    this.nestedTracks.push(track)
  }

  this.inlineTracks[track.id] = track
}

TracksCollection.prototype.getTracksTree = function() {
  return this.nestedTracks
}

TracksCollection.prototype.getTrackById = function(id) {
  var trackData = this.inlineTracks[id]

  if (trackData != null) {
    trackData.originalYear = 2000 + (trackData.id % 2)

    if (trackData.id % 4 !== 0) {
      trackData.cover = 'images/cover' + (trackData.id % 4) + '.jpg'
    }

    return trackData
  } else {
    return null
  }
}

module.exports = TracksCollection
