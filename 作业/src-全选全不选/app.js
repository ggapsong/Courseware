import React, {Component} from 'react';
export default class App extends Component {
  state = {
    data:[
        {
            id: 0,
            name: "玉溪",
            price: 23,
            sum: 0,
            checked: false
        },{
            id: 1,
            name: "南京95至尊",
            price: 95,
            sum: 0,
            checked: false
        },{
            id: 3,
            name: "白沙和天下",
            price: 100,
            sum: 0,
            checked: false
        },{
            id: 4,
            name: "黄金叶大天叶",
            price: 80,
            sum: 0,
            checked: false
        }
    ]
}
  //自身Checked的改变
  itemChecked = ((id,checked)=>{
    let {data} = this.state
    data.map((e)=> {
      if(e.id==id){
        e.checked = checked 
      }
    });
    this.setState({
      data
    })
  })
  //全选全不选
  changeChecked = ((checked)=>{
    let {data} = this.state
    data.forEach((e)=>{
        e.checked = checked
    })
    this.setState({
      data
    })
  })
  //求和
  getSum = (()=>{
    let {data} = this.state
    let sum = 0;
    data.forEach((e)=>{
        if(e.checked){
          sum += e.sum*e.price;
        }
    })
    return sum
  })
  //自身sum改变
  changeSum=((id,sum)=>{
    let {data} = this.state
    data.forEach((e)=>{
      if(e.id==id){
        e.sum = sum
      }
    })
    this.setState({data})
  })
  
  render() {
    let {data} = this.state;
    let isAll = data.every(Item=>Item.checked);
    return ( 
    <table id="table">
      <thead>
        <tr>
          <th>
            <input 
            type="checkbox"
            checked = {isAll}
            onChange={(e)=>{
              this.changeChecked(e.target.checked);
              }}
            />
          </th>
          <th>商品</th>
          <th>单价</th>
          <th>数量</th>
        </tr>
        </thead>
          <tbody>
              {
                data.map((item,i)=>{
                  return (
                  <tr key={i}>
                    <th>
                    <input 
                    type="checkbox"
                    checked={item.checked}
                    onChange = {(e)=>{
                      this.itemChecked(item.id,e.target.checked)
                    }}
                    />
                  </th>
                  <th>{item.name}</th>
                  <th>{item.price}</th>
                  <th>
                    <input
                    type="number"
                    min="0"
                    onChange ={(e)=>{
                        this.changeSum(item.id,e.target.value)
                      }}
                    />
                  </th>
                  </tr>)
                })
              }
           </tbody>
           <tfoot>
            <tr><th colSpan="4">总计：{this.getSum()}元</th></tr>
            </tfoot>
        </table>
    );
  }
}