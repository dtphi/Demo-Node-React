define(['track/model_track', 'utils/util'], function(TrackModel, Util) {
  var SingleModel = Object.create(TrackModel)

  SingleModel.toJSON = function() {
    var data = Util.clone(this.attributes)
    data.title = '[' + data.year + '] ' + data.name
    return data
  }

  return SingleModel
})
