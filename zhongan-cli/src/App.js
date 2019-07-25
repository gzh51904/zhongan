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
        title: '首页',
        img:require('./assets/img/home.png'),
        img_on:require('./assets/img/home_on.png')
      }, {
        name: 'News',
        path: '/news',
        title: '头条',
        img:require('./assets/img/toutiao.png'),
        img_on:require('./assets/img/toutiao_on.png')
      }, {
        name: 'Discover',
        path: '/discover',
        title: '发现',
        img:require('./assets/img/find.png'),
        img_on:require('./assets/img/find_on.png')
      }, {
        name: 'Mine',
        path: '/mine',
        title: '我的',
        img:require('./assets/img/my.png'),
        img_on:require('./assets/img/my_on.png')
      }],
      actBottomItem:'Home'
    }
    this.goto = this.goto.bind(this);
  }
  goto(path) {
    let name = this.state.navs.filter(item=>item.path===path)[0].name;
    this.props.history.push({
      pathname: path
    })

    this.setState({
      actBottomItem:name
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
            this.state.navs.map(item => {
              return (
                <a key={item.name} 
                  onClick={this.goto.bind(this, item.path)} 
                  className='mainBottomItem'
                >
                  {this.state.actBottomItem==item.name?<span><img src={item.img_on}/></span>:<span><img src={item.img}/></span>}       
                  <p style={this.state.actBottomItem==item.name?{color:'#12c287'}:{color:'#404040'}}>{item.title}</p>
                </a>
              )
            })
          }
        </div>
      </div>
    );
  }
}
App = withRouter(App);
export default App;
