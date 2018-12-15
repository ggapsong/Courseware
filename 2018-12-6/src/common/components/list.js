import React,{Component} from "react";
import Li from "./li";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
class List extends Component {
    render(){
        let {data,location} = this.props;
        let path = location.pathname;
        if(path === "/done"){
            data = data.filter(item=>item.done);
        } else if(path === "/undone"){
            data = data.filter(item=>!item.done);
        }
        return (<ul className={"list"}>
            {data.map((item)=>{
                return (<Li
                    key={item.id}
                    {...this.props}
                    data={item}
                />);
            })}
        </ul>);
    }
}
export default connect((state)=>{
    return {
        data: state.todo
    }
})(withRouter(List))