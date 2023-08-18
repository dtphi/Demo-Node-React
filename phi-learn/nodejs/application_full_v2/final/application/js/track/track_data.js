define([
  'track/track_data_cache'
, 'track/track_data_server'
, 'track/track_data_fallback'
], function(TrackDataCache, TrackDataServer, TrackDataFallback) {
  var tracksCache = {}

  function getTrackData(track) {
    var promise = new Promise(function(resolve, reject) {
      // Try in cache
      TrackDataCache.get(track)
        .then(resolve)
        .catch(function(err) {
          console.log(err)

          // Try from server
          TrackDataServer.get(track)
            .then(function(data) {
              TrackDataCache.set(track.id, data)
              resolve(data)
            })
            .catch(function(err) {
              console.log(err)

              // Try to infer data
              TrackDataFallback.get(track)
                .then(resolve)
                .catch(reject)
            })
        })
    })

    return promise
  }

  return getTrackData
})
