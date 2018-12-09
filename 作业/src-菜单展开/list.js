import React, { Component } from 'react';
import Info from './info';
export default class List extends Component {
  componentDidMount() {
    this.moveHeight();
}
moveHeight(){
    let {list} = this.refs;
    let {show} = this.props;
    list.style.height = show?list.scrollHeight + "px":0;
}
componentDidUpdate() {
    this.moveHeight();
}
  render() {
    let {data,index,changeshow} = this.props;
    return (
        <div>
          <h2 
          className = "title"
          onClick = {()=>{
            changeshow(index)
          }}
          >{data.name}
          </h2>
            <div className="list" ref="list">
              {<Info data={data.list}/>}
            </div>
        </div>
    )
  }
}