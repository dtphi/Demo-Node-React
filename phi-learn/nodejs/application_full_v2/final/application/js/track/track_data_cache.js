define(['utils/util'], function(Util) {
  var tracksCacheUnique = {}
    , tracksCacheCommon = []

  function getCachedTrackData(track) {
    var promise = new Promise(function(resolve, reject) {
      // If available in cache
      if (tracksCacheUnique.hasOwnProperty(track.id)) {
        var fullTrackData = Util.clone(tracksCacheUnique[track.id])
        Util.mixFromTo(fullTrackData._common, fullTrackData)
        delete fullTrackData._common

        resolve(fullTrackData)
      } else {
        reject('No cache for given track')
      }
    })

    // Return promise
    return promise
  }

  function getCommonDataObject(data) {
    for (var i = 0; i < tracksCacheCommon.length; i++) {
      if (Util.equal(tracksCacheCommon[i], data)) {
        return tracksCacheCommon[i]
      }
    }

    // If not found then add to cache
    tracksCacheCommon.push(data)
    return tracksCacheCommon[tracksCacheCommon.length - 1]
  }

  function getCommonAndUniqueParts(trackData) {
    var data = Util.clone(trackData)
      , commonData = {
          originalYear: data.originalYear
        , cover: data.cover
        }

    delete data.originalYear
    delete data.cover

    return [commonData, data]
  }

  function addTrackToCache(id, trackData) {
    var dataParts = getCommonAndUniqueParts(trackData)
      , uniqueData = dataParts[1]

    uniqueData._common = getCommonDataObject(dataParts[0])

    tracksCacheUnique[id] = uniqueData
  }

  return {
    get: getCachedTrackData
  , set: addTrackToCache
  }
})
