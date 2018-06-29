function getCurrentScript() {
  const scripts = document.getElementsByTagName('script')
  return scripts[scripts.length - 1]
}

;(function createIFrame() {
  const currentScript = document.currentScript || getCurrentScript()
  const mode = currentScript.getAttribute('mode') || 'production'
  const debug = currentScript.getAttribute('debug') || false

  const iframe = document.createElement('iframe')

  const iframeSrc =
    mode === 'production' || mode === 'staging'
      ? 'https://strassentechnik.github.io/toolbox/toolbox.html'
      : 'http://localhost:8080/toolbox/toolbox.html'

  iframe.scrolling = 'no'
  iframe.setAttribute('allowTransparency', true)
  iframe.frameBorder = '0'
  iframe.src = `${iframeSrc}?theme=amtec&mode=${mode}`

  if (debug) {
    console.log('[nadler-tools]', mode, iframeSrc)
    iframe.src = `${iframeSrc}?theme=amtec&mode=${mode}&debug=true`
  } else {
    iframe.src = `${iframeSrc}?theme=amtec&mode=${mode}`
  }

  window.addEventListener(
    'message',
    ({ data }) => {
      if (data.height) {
        iframe.style.width = '100%'
        iframe.style.height = data.height + 'px'
      }
    },
    false
  )

  currentScript.parentNode.insertBefore(iframe, currentScript.nextSibling)
})()
