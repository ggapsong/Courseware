import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import data from './data';
ReactDOM.render(<App data={data}/>, document.getElementById('root'));
