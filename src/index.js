import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initializeFirebase } from './pushNotification';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
initializeFirebase();
registerServiceWorker();
