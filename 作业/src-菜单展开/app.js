import React, {Component} from 'react';
import List from './list';


export default class App extends Component {
  state = {
    isShow:[
      true, 
      false,
      false
    ]
  }
  changeshow=(index)=>{
    let {isShow} = this.state;
    let nowState = isShow[index];
    isShow = isShow.map(()=>false);
    isShow[index] = !nowState;
    this.setState({
      isShow
    })
  }
  render() {
    let {data} = this.props;
    let {isShow} = this.state;
    return ( <div className = "panel" > {
      Object.values(data).map((e, index) => {
        return ( < List  
                  key = {index}
                  data = {e}
                  index = {index}
                  show = {isShow[index]}
                  changeshow = {this.changeshow}
                  / > )
                })}
            </div> 
    );
  }
}