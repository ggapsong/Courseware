import React from "react";
import {connect} from "react-redux";
class  App extends React.Component{
    render(){
        let {nub,dispatch} = this.props;
        return (<div>
            <button
                onClick={()=>{
                    dispatch({
                        type: "INCREASE"
                    })
                }}
            >+</button>
            <span> {nub} </span>
            <button
                onClick={()=>{
                    dispatch({
                        type: "DECREASE"
                    })
                }}
            >-</button>
        </div>)
    }
}
export default connect(function(state,props) {
    return {
        nub:state.nub
    }
})(App);
// connect(function(state,props){},function(dispatch,props){})(App);