// Switches the favicon when the browser changes between the light and dark
// color schemes. It reads every <link rel="icon" media="..."> in the <head>
// and keeps a single active icon that follows the matching media query.
(function () {
  if (typeof window.matchMedia !== 'function') {
    return
  }

  var links = Array.prototype.slice.call(
    document.head.querySelectorAll('link[rel*="icon"]')
  )

  if (links.length === 0) {
    return
  }

  var queries = links.map(function (link) {
    return window.matchMedia(link.media || 'all')
  })

  var current = document.createElement('link')
  current.setAttribute('rel', 'icon')

  function apply() {
    // The last matching icon wins; fall back to the last icon if none matches.
    var matched = links[links.length - 1]

    queries.forEach(function (query, index) {
      if (query.matches) {
        matched = links[index]
      }
    })

    if (current.getAttribute('href') !== matched.getAttribute('href')) {
      current.setAttribute('type', matched.getAttribute('type') || 'image/png')
      current.setAttribute('href', matched.getAttribute('href'))
    }
  }

  links.forEach(function (link) {
    document.head.removeChild(link)
  })
  document.head.appendChild(current)
  apply()

  queries.forEach(function (query) {
    if (typeof query.addEventListener === 'function') {
      query.addEventListener('change', apply)
    } else if (typeof query.addListener === 'function') {
      query.addListener(apply)
    }
  })
})()
