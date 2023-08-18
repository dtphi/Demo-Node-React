define(['player/hero_view', 'utils/dom'], function(HeroView, D$) {
  var HeroSingleView = Object.create(HeroView)

  HeroSingleView.showOriginalYear = function(value) {
    if (value) {
      D$.removeClass(this.playerDataOriginalYear, 'hide')
      D$.text(this.playerDataOriginalYear, 'Original Single Year: ' + value)
    } else {
      D$.addClass(this.playerDataOriginalYear, 'hide')
    }
  }

  HeroSingleView.setCover = function(value) {
    if (value) {
      D$.css(this.jumbotron, 'background-image', 'url(' + value + ')')
    } else {
      D$.css(this.jumbotron, 'background-image', null)
    }
    D$.addClass(this.playerDataCover, 'hide')
  }

  return HeroSingleView
})
