define(['utils/dom', 'utils/pubsub'], function(D$, PubSub){
  var headerStateElement = document.getElementById('header-state')
    , headerStateTextElement = document.getElementById('header-state-text')
    , headerStateIconElement = document.getElementById('header-state-icon')

  PubSub.on('player:play', function(track){
    D$.display(headerStateElement)
    D$.text(headerStateTextElement, track.title)
    D$.removeClass(headerStateIconElement, 'glyphicon-pause')
    D$.addClass(headerStateIconElement, 'glyphicon-play')
  })

  PubSub.on('player:pause', function(){
    D$.removeClass(headerStateIconElement, 'glyphicon-play')
    D$.addClass(headerStateIconElement, 'glyphicon-pause')
  })
})
