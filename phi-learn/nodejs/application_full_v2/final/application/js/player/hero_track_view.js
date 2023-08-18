define(['player/hero_view', 'utils/dom'], function(HeroView, D$) {
  var HeroTrackView = Object.create(HeroView)

  HeroTrackView.showOriginalYear = function(value) {
    if (value) {
      D$.removeClass(this.playerDataOriginalYear, 'hide')
      D$.text(this.playerDataOriginalYear, 'Original Year: ' + value)
    } else {
      D$.addClass(this.playerDataOriginalYear, 'hide')
    }
  }

  HeroTrackView.setCover = function(value) {
    D$.css(this.jumbotron, 'background-image', null)

    if (value) {
      D$.removeClass(this.playerDataCover, 'hide')
      D$.attr(this.playerDataCoverImage, 'src', value)
    } else {
      D$.addClass(this.playerDataCover, 'hide')
    }
  }

  return HeroTrackView
})
