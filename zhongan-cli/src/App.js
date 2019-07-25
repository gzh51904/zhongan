import React from 'react';
import { Route, Redirect, Switch, withRouter } from "react-router-dom";

import Home from './pages/Home';
import Order from './pages/Order';
import Discover from './pages/Discover/index';
import Mine from './pages/Mine';

import "./css/App.scss";
import "./css/base.css";
import 'antd/dist/antd.css';


// @withRouter
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      navs: [{
        name: 'Home',
        path: '/home',
        title: '首页'
      }, {
        name: 'Order',
        path: '/Order',
        title: '订单'
      }, {
        name: 'Discover',
        path: '/Discover',
        title: '发现'
      }, {
        name: 'Mine',
        path: '/mine',
        title: '我的'
      }]
    }
    this.goto = this.goto.bind(this);
  }
  goto(path){
    this.props.history.push({
      pathname:path
    })
  }
  render() {
    return (
      <div className="App">
        <div className="mainBody">
          <Switch>
            <Route path={'/Home'} component={Home} />
            <Route path={'/Order'} component={Order} />
            <Route path={'/Discover'} component={Discover} />
            <Route path={'/Mine'} component={Mine} />
            <Route path={'/404'} render={() => <div>页面不存在！</div>} />
            <Redirect from="/" to="/home" />
            <Redirect from="/*" to="/404" />
          </Switch>
        </div>
        <div className="mainBottom">
          {
            this.state.navs.map(item=>{
              return <span key={item.name} onClick={this.goto.bind(this,item.path)} style={{marginRight:'15px'}}>{item.title}</span>
            })
          }
        </div>
      </div>
    );
  }
}
App = withRouter(App);
export default App;
