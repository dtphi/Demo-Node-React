define([], function() {
  function getFallbackData(track) {
    var promise = new Promise(function(resolve, reject) {
      // Try to infere original year from model data
      var trackYear = track.originalYear || 'No year'
      trackYear = track.albumYear || trackYear
      trackYear = track.year || trackYear

      resolve({
        originalYear: trackYear
      , cover: 'images/cover-fallback.jpg'
      })
    })

    // Return the promise
    return promise
  }

  return {
    get: getFallbackData
  }
})
