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
