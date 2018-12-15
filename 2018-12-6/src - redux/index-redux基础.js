import React from "react";
import ReactDOM from "react-dom";
import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";

function increase(state,action) {
    let newState = {...state};
    ++newState.nub;
    return newState;
}
function increaseEvery(state,action) {
    let newState = {...state};
    newState.nub += action.dis;
    return newState;
}
function decrease(state,action) {
    let newState = {...state};
    if(newState.nub > 0){
        newState.nub--;
    }
    return newState;
}
function reducer(state={nub:0},action){
    switch (action.type) {
        case  "INCREASE":
            return increase(state,action);
        case  "DECREASE":
            return  decrease(state,action);
        case  "INCREASEEVERY":
            return  increaseEvery(state,action);
    }
    return {...state};
}
let store = createStore(reducer,applyMiddleware(thunk));
function In() {
    return {type:"INCREASE"};
}
function De() {
    return {type:"DECREASE"}
}
function async() {
    return function (dispatch,getState) {
        dispatch({
            type:"INCREASEEVERY",
            dis: 50
        });
        setTimeout(()=>{
            dispatch({
                type:"INCREASEEVERY",
                dis: 100
            });
        },2000)
    }
}
class  App extends React.Component{
    render(){
        let {store} = this.props;
        return (<div>
            <button
                onClick={()=>{
                    store.dispatch(In())
                }}
            >+</button>
            <span> {store.getState().nub} </span>
            <button
                onClick={()=>{
                    store.dispatch(De())
                }}
            >-</button>
            <button
                onClick={()=>{
                    store.dispatch({
                        type:"INCREASEEVERY",
                        dis: 5
                    })
                }}
            >+5</button>
            <button
                onClick={()=>{
                    store.dispatch(async());
                }}
            >延迟2秒+100</button>
        </div>)
    }
}
store.subscribe(()=>{
    render();
});

// let arr = [1,2,3,4];
//
// arr.reduce(function(prev,item) {
//     console.log(prev,item);
//     return prev + item;
// },0)

render();
function render(){
    ReactDOM.render(
        <App store = {store} />,
        document.getElementById("root")
    )
}
