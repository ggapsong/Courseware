import React, { Component } from 'react';
import {Layout} from "antd";
import {Switch,Route,Redirect} from "react-router-dom";
import PageHeader from "./common/components/header";
import PageFooter from "./common/components/footer";
import Index from "./view/index"; 
import Book from "./view/book";
import About from "./view/about";
import Page404 from "./view/page404";
export default class App extends Component {
  render() {
    let {Content} = Layout;
    return (
        <div>
          <Layout>
            <PageHeader />
            <Content className="page-main">
                <Switch>
                  <Redirect from='/' exact to="/index"/>
                  <Route path="/index" component={Index}/>
                  <Route path="/getstart" component={Book}/>
                  <Route path="/about" component={About}/>
                  <Route path="" component={Page404}/>
                </Switch>
            </Content>
            <PageFooter />
          </Layout>
        </div>
    );
  }
}


