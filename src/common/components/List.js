import React, { Component } from 'react'
import {List,Avatar,Button,message} from 'antd'
import axios from 'axios'
import '../static/css/list.css'
axios.defaults.baseURL = 'https://cnodejs.org/api/v1';
export default class ListPage extends Component {
    state = {
        page:1,
        limit:10,
        list:[],
        loading:false,
        path:this.props.path
    }
    componentDidMount = () => {
        this.getDate();
    }
    componentWillUpdate(nextProps, nextState, nextContext){
        if(this.props.path!==nextProps.path){
            this.setState({
                page:1,
                path:nextProps.path
            },()=>{
                this.getDate()
            })
        }
        return true;
    }
    getDate(){
        const {path} = this.state;
        const {page,limit} = this.state
        let tab = path.split('/')[2];
        this.setState({
            loading:true
        })
        axios({
            url:"/topics",
            params:{
                tab:tab,
                page:page,
                limit:limit
            }
        }).then((data)=>{
            console.log(data.data.data);
            if(data.status===200&&data.data.data.length>0){
                this.setState({
                    list:data.data.data,
                   
                    page:this.state.page + 1
                })
                console.log(data.data.data);
            }else{
                message.error('好像出错了');
            }
            this.setState({
                loading:false
            })
        })
    }
    getMore(){
        const {path} = this.state;
        const {page,limit} = this.state
        let tab = path.split('/')[2];
        this.setState({
            loading:true
        })
        axios({
            url:"/topics",
            params:{
                tab,
                page,
                limit
            }
        }).then((data)=>{
            if(data.status===200){
                console.log(data.data.data);
                this.setState({
                    list:[...this.state.list,...data.data.data],
                    page:this.state.page + 1
                })
            };
            this.setState({
                loading:false
            })
        })
    }
    render() {
        let loadMore = (
            <div style={{
                textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px',
            }}
            >
                <Button
                    loading={this.state.loading}
                    onClick={()=>{
                        this.getMore();
                    }}
                >loading more</Button>
            </div>
        );
        let {list,loading} = this.state
        return (
            <div className="list-box">
                <List
                    itemLayout={"vertical"}
                    loading={loading}
                    dataSource={list}
                    loadMore={loadMore}
                    renderItem={ e => (
                        <List.Item.Meta
                            key={e.id}
                            avatar={<Avatar src={e.author.avatar_url} />}
                            title={<div><div data-show="true" className="ant-tag">{e.tab}</div><a>{e.loginname}</a></div>}
                            description={e.title}
                        />
                    )}
                />
            </div>
        )
    }
}