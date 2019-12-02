function getCurrentScript() {
  const scripts = document.getElementsByTagName('script');
  return scripts[scripts.length - 1];
}

(function createIFrame() {
  const currentScript = document.currentScript || getCurrentScript();
  const productId = currentScript.getAttribute('product_id') || null;
  const target = currentScript.getAttribute('target') || null;
  const mode = currentScript.getAttribute('mode') || 'production';
  const debug = currentScript.getAttribute('debug') || false;
  const iframe = document.createElement('iframe');

  const iframeSrc =
    mode === 'production' || mode === 'staging'
      ? 'https://strassentechnik.github.io/toolbox/toolbox.html'
      : 'http://localhost:8080/toolbox/toolbox.html';

  iframe.scrolling = 'yes';
  iframe.setAttribute('allowTransparency', true);
  iframe.frameBorder = '0';
  const productIdParam = !!productId ? `&product_id=${productId}` : '';
  const iframeParams = `?theme=amtec&mode=${mode}&target=${target}${debug ? '&debug=true' : ''}${productIdParam}`;
  iframe.src = `${iframeSrc}${iframeParams}`;

  if (debug) {
    console.log('[nadler-tools]', mode, iframeSrc, iframeParams);
  }

  window.addEventListener(
    'message',
    ({data}) => {
      if (data.height) {
        iframe.style.width = '100%';
        iframe.style.height = data.height + 'px';
      }
    },
    false,
  );

  currentScript.parentNode.insertBefore(iframe, currentScript.nextSibling);
})();
