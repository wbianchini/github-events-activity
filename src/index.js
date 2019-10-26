import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import 'font-awesome/css/font-awesome.min.css';

const root = document.getElementById('app');
ReactDOM.render(<App />, root);

serviceWorker.unregister();
