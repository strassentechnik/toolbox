function getCurrentScript() {
  const scripts = document.getElementsByTagName('script')
  return scripts[scripts.length - 1]
}

;(function createIFrame() {
  const currentScript = document.currentScript || getCurrentScript()

  const mode = currentScript.getAttribute('mode') || 'production'

  const iframe = document.createElement('iframe')
  console.log(mode)
  const iframeSrc =
    mode === 'production' || mode === 'staging'
      ? 'https://strassentechnik.github.io/toolbox/toolbox.html'
      : 'http://localhost:8080/toolbox/toolbox.html'

  iframe.scrolling = 'no'
  iframe.setAttribute('allowTransparency', true)
  iframe.frameBorder = '0'
  iframe.src = `${iframeSrc}?theme=amtec&mode=${mode}`

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

  document.body.appendChild(iframe)
})()
