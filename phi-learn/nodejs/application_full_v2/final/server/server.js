var express = require('express')
  , app = express()
  , TracksCollection = require('./tracks/collection')

app.use(express.static('application'))

app.get('/tracks', function (req, res) {
  res.json(TracksCollection.getTracksTree())
})

app.get('/track/:trackId', function(req, res) {
  var trackData = TracksCollection.getTrackById(req.params.trackId)

  if (trackData != null && req.params.trackId != 3) {
    res.json(trackData)
  } else {
    res.status(404).send('No track with such ID found')
  }
})

app.listen(3000)
