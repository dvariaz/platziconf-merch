import React from 'react';
import ReactDOM from 'react-dom';

import './styles/libs/tailwind.css';
import './styles/App.scss';

import App from './routes/App';

console.log(process.NODE_ENV);

ReactDOM.render(<App />, document.getElementById('app'));
