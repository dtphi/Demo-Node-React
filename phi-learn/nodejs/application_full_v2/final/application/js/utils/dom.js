define([], function(){
  var elementHandlers = {
    tr: function(parent) {
      if (parent != null) return parent.insertRow()
      else return this['*'](parent, 'tr')
    }
  , td: function(parent) {
      if (parent != null) return parent.insertCell()
      else return this['*'](parent, 'td')
    }
  , text: function(parent) {
      var textNode = document.createTextNode("New Node Inserted Here")
      if (parent != null) parent.appendChild(textNode)
      return textNode
    }
  , '*': function(parent, elementName) {
      var element = document.createElement(elementName)
      if (parent != null) parent.appendChild(element)
      return element
    }
  }

  function createElement(elementName, options) {
    options = options || {}
    var element = null

    if (elementHandlers.hasOwnProperty(elementName)) {
      element = elementHandlers[elementName](options.parent)
    } else {
      element = elementHandlers['*'](options.parent, elementName)
    }

    decorateElement(element, options)

    return element
  }

  function decorateElement(element, options) {
    options = options || {}

    if (options.text != null) {
      setTextToElement(element, options.text)
    }
    if (options.className != null) {
      element.className = options.className
    }
  }

  function setTextToElement(element, text) {
    // Modern browsers
    if (element.nodeName == 'INPUT') {
      element.value = text
    } else if (element.textContent != null) {
      element.textContent = text
    } else {
      element.innerHTML = text
    }
  }

  function addClassName(element, className) {
    var classes = element.className.split(' ')

    if (!~classes.indexOf(className)) {
      classes.push(className)
      element.className = classes.join(' ')
    }
  }

  function removeClassName(element, className) {
    var classes = element.className.split(' ')

    if (~classes.indexOf(className)) {
      classes.splice(classes.indexOf(className), 1)
      element.className = classes.join(' ')
    }
  }

  // Calling without second parameter will enable default display
  function display(element, state) {
    state = state || null
    element.style.display = state
  }

  function setStyle(element, style, value) {
    element.style[style] = value
  }

  function setAttribute(element, attribute, value) {
    element[attribute] = value
  }

  function addEventListener(element, type, cb) {
    if (window.addEventListener) {
      element.addEventListener(type, cb, false)
    } else if (window.attachEvent){
      element.attachEvent('on' + type, cb)
    } else {
      element['on' + type] = cb
    }
  }

  function removeEventListener(element, type, cb) {
    if (window.addEventListener) {
      element.removeEventListener(type, cb, false)
    } else if (window.attachEvent){
      element.detachEvent('on' + type, cb)
    } else {
      delete element['on' + type]
    }
  }

  return {
    create: createElement
  , text: setTextToElement
  , addClass: addClassName
  , removeClass: removeClassName
  , display: display
  , css: setStyle
  , attr: setAttribute
  , on: addEventListener
  , off: removeEventListener
  }
})
