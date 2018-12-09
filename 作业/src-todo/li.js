import React,{Component} from "react";
export default class Li extends Component {
    state={
        showEdit:false,
        val:this.props.data.val
    }
    render(){
        let {data,handleCheck,del,reName} = this.props;
        let {showEdit,val} = this.state;
        return (
            <li >
            <div >
              <div style = {{
                    display:showEdit?"none":"block"
                }}>
                <input
                  className="check" 
                  type="checkbox"
                  checked={data.checked}
                  onChange={(e)=>{
                     handleCheck(data.id,e.target
                     .checked)
                  }}
                />
                <div 
                className="todo-content"
                onDoubleClick={()=>{
                    this.setState({
                        showEdit:true,
                    })
                }}
                >{data.val}</div>
                <span 
                className="todo-destroy"
                onClick={()=>{
                    del(data.id)
                }}
                ></span>
              </div>
              <div className="editing" style={{display:showEdit?"block":"none"}}>
                <input 
                  className="todo-input" 
                  type="text"
                  value={val}
                  onChange ={(e)=>{
                    this.setState({
                        val:e.target.value
                    })
                  }}
                  onBlur={()=>{
                    let {val} = this.state;
                    if(val.trim()===""){
                        val=this.props.data.val
                    }
                    this.setState({
                        showEdit:false,
                        val
                    })
                    reName(data.id,val)
                  }}
                />
              </div>
            </div>
          </li>
        )
    }
}