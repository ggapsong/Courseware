import React,{Component} from 'react';
import {Layout,Row, Col, Menu, Dropdown, Button, Icon} from "antd";
import {Link,NavLink,withRouter} from "react-router-dom";
import router from "../../router/router";
import ColumnGroup from 'antd/lib/table/ColumnGroup';

function PageHeader(props){
    let {pathname} = props.location
    let {className} = props
    return(
        <Layout.Header className="page-header">
            <div className="page-header-con">
                <Row gutter={16}>
                    <Col lg={6} xs={24}>
                        <h1 id="logo">
                            <Link to='/index'>
                                <img src={require("../static/img/logo.svg")} alt="node.js"/>
                            </Link>
                        </h1>
                    </Col>
                    <Col lg={18} xs={0}>
                        <Menu
                            mode="horizontal"
                            theme="dark"
                            style={{lineHeight:"64px"}}
                            selectable={false}
                        >
                            {
                                router.map((e,i)=>{
                                    if(e.title){
                                        return  (<Menu.Item 
                                                    className={(pathname&&pathname.indexOf(e.path)>-1)?"ant-menu-item-selected":""}
                                                    key={i}
                                                >
                                                    <Link to={e.path}>
                                                        {e.title}
                                                    </Link>
                                                </Menu.Item>)
                                    }
                                })
                            }
                        </Menu>
                    </Col>
                    <Col lg={0} xs={24} className="menu-xs">
                        <Dropdown
                            overlay={
                                <Menu
                                    style={{width:"120px"}}
                                >
                                {
                                    router.map((e,i)=>{
                                        if(e.title){
                                            return  (<Menu.Item
                                                        className={(pathname&&pathname.indexOf(e.path)>-1)?"ant-menu-item-selected":""}
                                                        key={i}
                                                    >
                                                        <Link to={e.path}>
                                                            {e.title}
                                                        </Link>
                                                    </Menu.Item>)
                                        }
                                    })
                                }
                            </Menu>}
                        >
                            <Button><Icon type="bars" /></Button>
                        </Dropdown>
                    </Col>
                </Row>
            </div>
        </Layout.Header>
    )
}
export default withRouter(PageHeader)