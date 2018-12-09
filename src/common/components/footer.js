import React,{Component} from 'react';
import {Layout} from "antd";
export default class PageFooter extends Component{
    render(){
        return(<Layout.Footer className="page-footer">
            这就是页面底部了
        </Layout.Footer>)
    }
}