import React,{Component} from "react";
import Li from "./li"
export default class App extends Component {
    state = {
        val:"",
        data:[

        ]
    }
    //添加数据
    addData=()=>{
        if(this.state.val===''){
            alert("请输入事项");
            return false
        }
        let {data} = this.state;
        data.push({
            id:Date.now(),
            val:this.state.val,
            checked:false
        })
        this.setState({
            data,
            val:""
        })
    }
    //删除单个
    del=(id)=>{
        let {data} = this.state
        data.map((e)=>{
            if(e.id===id){
                data.splice(e,1)
            }
        })
        this.setState({
            data
        })
    }
    //删除多个
    delEvery=()=>{
        let {data} = this.state
       for(let i=0;i<data.length;i++){
        const e = data[i]
        if(e.checked){
            data.splice(e,1)
            i--
        }
       }
        this.setState({
            data
        })
    }
    //改变checked状态
    handleCheck=(id,status)=>{
        let {data} = this.state
        data.map((e)=>{
            if(e.id===id){
                e.checked = status
            }
        })
        this.setState({
            data
        })
    }
    reName=(id,val)=>{
        let {data} = this.state;
        data.map((e)=>{
            if(e.id = id){
                e.val = val
            }
        })
        this.setState({
            data
        })
    }
    //已完成
    noCheck=()=>{
        let {data} = this.state;
        data.filter((e)=>{
            return e.checked
        })
    } 
    //未完成
    noCheck=()=>{
        let {data} = this.state;
        data.filter((e)=>{
            return e.checked
        })
    } 
    render(){
        let {data} = this.state;
        
        return (
            <div id="todoapp">
                    <div className="title">
                        <h1>Todos</h1>
                </div>
                <div className="content">
                    <div id="create-todo">
                    <input 
                        id="new-todo"
                        placeholder="What needs to be done?" 
                        type="text"
                        value = {this.state.val}
                        onChange = {(e)=>{
                            this.setState({
                                val:e.target.value
                            })
                        }}
                        onKeyDown={(ev)=>{
                            if(ev.keyCode===13){
                                this.addData()
                            }
                        }}
                    />   
                </div>
                    <div id="todos">
                        <ul id="todo-list">
                            {
                                data.map((e,i)=>{
                                    return (
                                        <Li 
                                            key ={e.id}
                                            data ={e}
                                            handleCheck = {this.handleCheck.bind(this)}
                                            del = {this.del.bind(this)}
                                            reName ={this.reName.bind(this)} 
                                        />
                                        
                                    )
                                  
                                })     
                            } 
                        </ul>
                    </div>
                    <div id="todo-stats" >
                        <span className="todo-count" style={{display:data.length>0?"block":"none"}}>
                            <span 
                            className="number" 
                            >{data.length-noCheck.length} </span>
                            <span className="word">item</span> left.
                        </span>
                        <span 
                        className="todo-clear" 
                        style={{
                            display:noCheck.length>0?"block":"none"
                        }}
                        onClick ={()=>{
                            this.delEvery()
                        }}>
                            <a href="#">
                                Clear <span className="number-done">{noCheck.length} </span> 
                                completed <span className="word-done">items</span>
                            </a>
                        </span>
                    </div>
                    </div>
                </div>
        )
    }
}