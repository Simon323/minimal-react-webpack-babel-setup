import React from 'react';
import ReactDOM from 'react-dom';
import ExamplePage from './containers/ExamplePage';

import App from './App';

const title = 'My Minimal React Webpack Babel Setup 2000';

ReactDOM.render(
  <ExamplePage title={title} />,
  document.getElementById('app')
);

module.hot.accept();
