import React from "react";
import ReactDOM from "react-dom";
import {createStore,combineReducers} from "redux";
import thunk from "redux-thunk";
// reducer 的拆分
function nub(nub=0,action) {
    switch (action.type) {
        case  "INCREASE":
            return ++nub;
        case  "DECREASE":
            return --nub;
    }
    return nub;
}
/* {
    type:"CHANGE",
    checked: true
}*/
function checked(checked=false,action) {
    switch (action.type) {
        case "CHANGE":
            checked =  action.checked
            return checked;
    }
    return checked;
}
// function rootReducer (state={},action){
//   return {
//       nub:nub(state.nub,action),
//       checked:checked(state.checked,action)
//   }
// }
let rootReducer = combineReducers({
    nub,
    checked
});

let store = createStore(rootReducer);
store.subscribe(()=>{
    render();
});

class  App extends React.Component{
    render(){
        let {store} = this.props;
        return (<div>
            <button
                onClick={()=>{
                    store.dispatch({
                        type: "INCREASE"
                    })
                }}
            >+</button>
            <span> {store.getState().nub} </span>
            <button
                onClick={()=>{
                    store.dispatch({
                        type: "DECREASE"
                    })
                }}
            >-</button>
        </div>)
    }
}
class App2 extends React.Component{
    render(){
        let {store} = this.props;
        return (<div>
            <input
                type={"checkbox"}
                checked={store.getState().checked}
                onChange = {(e)=>{
                    store.dispatch({
                        type: "CHANGE",
                        checked:e.target.checked
                    })
                }}
            />
            <span>{store.getState().checked?"选中了":"还没有选中"}</span>
        </div>)
    }
}


render();


function render(){
    ReactDOM.render(
        <div>
            <App store = {store} />
            <App2 store = {store} />
        </div>,
        document.getElementById("root")
    )
}
