import React from "react";
import {connect} from "react-redux";
class App2 extends React.Component{
    render(){
        let {checked,dispatch} = this.props;
        console.log(checked);
        return (<div>
            <input
                type={"checkbox"}
                checked = {checked}
                onChange={(e)=>{
                    dispatch({
                        type:"CHANGE",
                        checked:e.target.checked
                    });
                }}
            />
            <span>{checked?"选中":"未选中"}</span>
        </div>)
    }
}
export default connect((state)=>{
    return {checked:state.checked}
})(App2);