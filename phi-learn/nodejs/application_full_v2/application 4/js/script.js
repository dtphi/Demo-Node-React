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
    row = tracksContainer.insertRow(i)
    cell1 = row.insertCell(0)
    cell2 = row.insertCell(1)
    cell3 = row.insertCell(2)
    cell4 = row.insertCell(3)

    cell1.innerHTML = tracks[i].id
    cell2.innerHTML = tracks[i].title
    cell3.innerHTML = tracks[i].duration

    button1icon = document.createElement('SPAN')
    button1icon.className = 'glyphicon glyphicon-remove'
    button1 = document.createElement('BUTTON')
    button1.className = 'btn btn-xs btn-danger'
    button1.appendChild(button1icon)
    cell4.appendChild(button1)

    button2icon = document.createElement('SPAN')
    button2icon.className = 'glyphicon glyphicon-play'
    button2 = document.createElement('BUTTON')
    button2.className = 'btn btn-xs btn-primary'
    button2.appendChild(button2icon)
    cell4.appendChild(button2)
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

    playerButtonPlay.addEventListener('click', function(ev){
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
