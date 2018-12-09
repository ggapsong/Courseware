import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import "./common/static/css/index.css";
ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    , 
    document.getElementById('root')
);
