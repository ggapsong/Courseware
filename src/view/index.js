import React,{Component} from 'react';
import {Menu,Row,Col} from "antd";
import {Link,withRouter} from "react-router-dom";
import IndexRouter from '../router/index-router'
import ListPage from '../common/components/List'
function getMenu(mode,path){
    return(
        <Menu
            mode={mode}
            selectable={false}
        >
        {IndexRouter.map((item,index)=>{
            return(
                <Menu.Item
                    key={index}
                    className={path==item.path?
                        "ant-menu-item-selected":""
                    }
                >
                    <Link to={item.path}>
                        {item.title}
                    </Link>
                </Menu.Item>
            )
        })
        }
        </Menu>
    )
}



export default class About extends Component{
    render(){
        const {pathname} = this.props.location
        return(
            <div className="wrap">
                <Row>
                    <Col lg={4} xs={0}>
                        {getMenu("inline",pathname)}
                    </Col>
                    <Col lg={0} xs={24}>
                        {getMenu("horizontal",pathname)}
                    </Col>
                    <Col lg={20} xs={24}>
                        <ListPage path={pathname}/>
                    </Col>
                </Row>
            </div>
        )
    }
}