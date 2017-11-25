import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import registerServiceWorker from './utils/register-service-worker';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
