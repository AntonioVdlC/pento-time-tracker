import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import store from './store';

import registerServiceWorker from './utils/register-service-worker';

store.init();

ReactDOM.render(<App store={store} />, document.getElementById('root'));

registerServiceWorker();
