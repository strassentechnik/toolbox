import React from 'react';
import ReactDOM from 'react-dom';
import queryString from 'query-string';

import Configurator from './Configurator';
import './assets/styles/main.scss';

const params = queryString.parse(location.search);

function watchy() {
  const container = document.body;
  let watcher;
  let lastScrollHeight;

  const watch = () => {
    cancelAnimationFrame(watcher);

    if (lastScrollHeight !== container.scrollHeight) {
      lastScrollHeight = container.scrollHeight;
      window.parent.postMessage({ height: container.scrollHeight }, '*');
    }

    watcher = requestAnimationFrame(watch);
  };

  watcher = window.requestAnimationFrame(watch);
}

watchy();

ReactDOM.render(
  <div className="o-wrapper">
    <Configurator {...params} />
  </div>,
  document.getElementById('app'),
);

module.hot.accept();
