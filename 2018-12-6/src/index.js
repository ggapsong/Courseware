import React from "react";
import ReactDOM from "react-dom";
import {Provider}from "react-redux";
import App from "./app";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/store"
import "./common/static/css/index.css";
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>  ,
    document.getElementById("root")
)
