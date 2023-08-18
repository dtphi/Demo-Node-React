define([
  'queue/controller'
, 'player/controller'
, 'header/view'
, 'utils/timer'
, 'utils/pubsub'
], function(QueueController, PlayerController, HeaderView, Timer, PubSub){
  var queueController = new QueueController({autoplay: true, autorender: true, autoload: true})

  Timer.setTimeout(3, function(){
    PubSub.trigger('request:player:pause')
  })
})
