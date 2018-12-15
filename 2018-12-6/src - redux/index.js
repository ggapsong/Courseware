import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";
import {Provider} from "react-redux";
import App from "./app";
import App2 from "./app2";
ReactDOM.render(
    <Provider store={store}>
        <div>
            <App />
            <App2 />
        </div>
    </Provider>,
    document.getElementById("root")
)
