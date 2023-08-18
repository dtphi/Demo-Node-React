define(['utils/dom', 'utils/util'], function(D$, Util){
  function TrackView(onEvent) {
    this.onEvent = onEvent
    this.isRendered = false
    this.isEditing = false
    this.$row = null
  }

  TrackView.prototype.render = function(data) {
    var cell2, cell4
      , tracksContainer = document.getElementById('tracks')
      , className = data.isActive ? 'success' : ''

    // Update title and class name
    if (this.isRendered) {
      if (data.isActive) {
        D$.addClass(this.$row, 'success')
      } else {
        D$.removeClass(this.$row, 'success')
      }

      D$.text(this.title, data.title)
      if (!this.isEditing) {D$.text(this.input, data.title)}

    } else {
      this.$row = D$.create('tr', {parent: tracksContainer, className: className})
      D$.create('td', {parent: this.$row, text: data.id})
      cell2 = D$.create('td', {parent: this.$row})
      D$.create('td', {parent: this.$row, text: data.duration})
      cell4 = D$.create('td', {parent: this.$row})

      this.renderTitle(cell2, data.title)
      this.renderButtons(cell4)
      this.renderNestingLevel(cell2, data.nestingLevel || 1)
      this.isRendered = true
    }

  }

  TrackView.prototype.renderTitle = function(inputContainer, text) {
    var button = null

    this.title = D$.create('span', {parent: inputContainer, text: text})
    this.input = D$.create('input', {parent: inputContainer, text: text})
    button = D$.create('button', {parent: inputContainer, text: 'Done editing'})

    if (this.isEditing) {
      D$.display(this.title, 'none')
    } else {
      D$.display(this.input, 'none')
      D$.display(button, 'none')
    }

    D$.on(inputContainer, 'click', Util.proxy(function(ev) {
      if (ev.target == button) {return false}
      this.isEditing = true
      D$.display(this.title, 'none')
      D$.display(this.input)
      D$.display(button)
    }, this))

    D$.on(button, 'click', Util.proxy(function() {
      this.isEditing = false
      D$.display(this.title)
      D$.display(this.input, 'none')
      D$.display(button, 'none')
    }, this))

    D$.on(this.input, 'keyup', Util.proxy(function(ev) {
      this.onEvent('input', this.input.value)
    }, this))
  }

  TrackView.prototype.renderButtons = function(buttonsContainer) {
    var button1, button2
      , that = this

    button1 = D$.create('button', {parent: buttonsContainer, className: 'btn btn-xs btn-danger'})
    D$.create('span', {parent: button1, className: 'glyphicon glyphicon-remove'})

    D$.on(button1, 'click', function() {
      that.onEvent('remove')
    })

    button2 = D$.create('button', {parent: buttonsContainer, className: 'btn btn-xs btn-primary'})
    D$.create('span', {parent: button2, className: 'glyphicon glyphicon-play'})

    D$.on(button2, 'click', function() {
      that.onEvent('play')
    })
  }

  TrackView.prototype.renderNestingLevel = function(cell2, level) {
    if (level > 1) {
      D$.addClass(this.$row, 'padded')
      D$.css(cell2, 'padding-left', (level - 1) * 15 + 'px')
    }
  }

  TrackView.prototype.destroy = function() {
    this.$row.parentNode.removeChild(this.$row)
  }

  return TrackView
})
