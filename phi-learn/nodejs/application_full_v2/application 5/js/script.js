(function() {
  var tracks = []

  tracks.push({
    id: 1
  , title: 'First track'
  , duration: 7
  })
  tracks.push({
    id: 2
  , title: 'Best track'
  , duration: 12
  })
  tracks.push({
    id: 3
  , title: 'New track'
  , duration: 23
  })

  var tracksContainer = document.getElementById('tracks')

  var i, row, cell1, cell2, cell3, cell4, button1, button1icon, button2, button2icon;
  for(i = 0; i < tracks.length; i++) {
    row = D$.create('tr', {parent: tracksContainer})
    cell1 = D$.create('td', {parent: row, text: tracks[i].id})
    cell2 = D$.create('td', {parent: row, text: tracks[i].title})
    cell3 = D$.create('td', {parent: row, text: tracks[i].duration})
    cell4 = D$.create('td', {parent: row})

    button1 = D$.create('button', {parent: cell4, className: 'btn btn-xs btn-danger'})
    D$.create('span', {parent: button1, className: 'glyphicon glyphicon-remove'})

    button2 = D$.create('button', {parent: cell4, className: 'btn btn-xs btn-primary'})
    D$.create('span', {parent: button2, className: 'glyphicon glyphicon-play'})
  }

  var playerProgressBar = (function(){
    var playerProgressElement = document.getElementById('player-progress')
      , playerProgress = 0

    function setPlayerProgress(floatValue){
      playerProgress = floatValue
      playerProgressElement.style.width = Math.round(floatValue * 10000)/100 + '%'
    }

    return {
      set: function(value) {
        setPlayerProgress(value)
      }
    , get: function() {
        return playerProgress
      }
    }
  }())

  var playerController = (function(){
    var playerTitle = document.getElementById('player-title')
      , playerButtonPlay = document.getElementById('player-button-play')
      , playerState = {
          track: null
        , isPlaying: false
        , progress: 0
        , interval: null
        }

    function playTrack(track){
      // Do nothing if it is the same track and player is already playing
      if (track === playerState.track && playerState.isPlaying) return false;

      // If same track, just play forward
      if (track !== playerState.track) {
        playerState.track = track
        playerTitle.innerHTML = track.title
        playerProgressBar.set(0)
      }

      playerState.isPlaying = true

      playerProgressBar.set(playerState.progress / playerState.track.duration)
      playerState.interval = setInterval(function(){
        playerState.progress += 0.5

        if (playerState.progress <= playerState.track.duration){
          playerProgressBar.set(playerState.progress / playerState.track.duration)
        } else {
          clearInterval(playerState.interval)
          playerState.interval = null
          playerState.progress = 0

          playNextTrack()
        }
      }, 500)
    }

    function pauseTrack(){
      if (!playerState.isPlaying) return false;

      playerState.isPlaying = false
      clearInterval(playerState.interval)
      playerState.interval = null
    }

    function playNextTrack(){
      for (var i = 0; i < tracks.length; i++) {
        // Find current track
        if (tracks[i] === playerState.track) {
          // Check if next song is available
          if (i < tracks.length - 1) {
            playTrack(tracks[i + 1])
          }
          break;
        }
      }
    }

    D$.on(playerButtonPlay, 'click', function(ev){
      ev.preventDefault()
      if (playerState.isPlaying) {
        pauseTrack()
      } else {
        playTrack(playerState.track || tracks[0])
      }
    })

    return {
      play: function() {
        playTrack(playerState.track || tracks[0])
      }
    , pause: function() {
        pauseTrack()
      }
    }
  }())

  playerController.play()

  setTimeout(function(){
    playerController.pause()
  }, 2000)
}())
