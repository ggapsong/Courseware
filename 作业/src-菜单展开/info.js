import React, { Component } from 'react';
export default class Info extends Component {
  render() {
    let {data} = this.props;
    return (
        <ul>
            {data.map((e,i)=>{
                return (
                    <li key={i}>
                    <p className={e.vip?"vip":""}>{e.username}</p>
                    <p className="message">{e.message}</p>
                    </li>
                )
            })}
        </ul>
    )
  }
}