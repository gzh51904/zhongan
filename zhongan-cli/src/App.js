import React from 'react';
import { Route, Redirect, Switch, withRouter } from "react-router-dom";

import Home from './pages/Home';
import News from './pages/News';
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
        name: 'News',
        path: '/news',
        title: '头条'
      }, {
        name: 'Discover',
        path: '/discover',
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
            <Route path={'/home'} component={Home} />
            <Route path={'/news'} component={News} />
            <Route path={'/discover'} component={Discover} />
            <Route path={'/mine'} component={Mine} />
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
