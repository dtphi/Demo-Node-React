window.D$ = (function() {
  function createElement(elementName, options) {
    options = options || {}
    var element = document.createElement(elementName)

    if (options.parent != null) {
      options.parent.appendChild(element)
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
    if (element.textContent != null) {
      element.textContent = text
    } else {
      element.innerHTML = text
    }
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
  , on: addEventListener
  , off: removeEventListener
  }
}())
