define(['utils/dom'], function(D$) {
  var HeroView = {}

  HeroView.playerDataOriginalYear = document.getElementById('player-data-original-year')
  HeroView.playerDataCover = document.getElementById('player-data-cover')
  HeroView.playerDataCoverImage = HeroView.playerDataCover.children[0]
  HeroView.jumbotron = document.getElementsByClassName('jumbotron')[0]

  HeroView.show = function(trackData) {
    this.showOriginalYear((trackData && trackData.originalYear) || null)
    this.setCover((trackData && trackData.cover) || null)
  }

  HeroView.showOriginalYear = function() {
    console.log('showOriginalYear not implemented')
  }

  HeroView.setCover = function() {
    console.log('setCover not implemented')
  }

  return HeroView
})
