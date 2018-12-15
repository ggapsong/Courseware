import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from "react-router-dom";
import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import reducer from "./reducers/index";
import axios from "axios";
const store = createStore(reducer,applyMiddleware(thunk));
axios.get("/p/rank/list")
.then((e)=>{
    console.log(e);
})
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store} >
        <App />
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
