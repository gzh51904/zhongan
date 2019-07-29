import React from 'react';
import { Route, Redirect, Switch, withRouter } from "react-router-dom";

import Home from './pages/Home';
import News from './pages/News';
import Discover from './pages/Discover/index';
import Mine from './pages/Mine';
import Goods from './pages/Goods';

import { connect } from 'react-redux';

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
        img: require('./assets/img/home.png'),
        img_on: require('./assets/img/home_on.png')
      }, {
        name: 'News',
        path: '/news',
        title: '头条',
        img: require('./assets/img/toutiao.png'),
        img_on: require('./assets/img/toutiao_on.png')
      }, {
        name: 'Discover',
        path: '/discover',
        title: '发现',
        img: require('./assets/img/find.png'),
        img_on: require('./assets/img/find_on.png')
      }, {
        name: 'Mine',
        path: '/mine',
        title: '我的',
        img: require('./assets/img/my.png'),
        img_on: require('./assets/img/my_on.png')
      }],
      actBottomItem: 'Home'
    }
    this.goto = this.goto.bind(this);
  }
  goto(path) {
    let name = this.state.navs.filter(item => item.path === path)[0].name;
    this.props.history.push({
      pathname: path
    })

    this.setState({
      actBottomItem: name
    })
  }
  componentWillMount() {
    //刷新高亮
    let name;
    this.state.navs.forEach(item=>{
      if (this.props.location.pathname.indexOf(item.path) !== -1){
        name = item.name
        return
      }
    })
    this.setState({
      actBottomItem: name
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
            <Route path={'/goods/:goodsCode'} component={Goods} />
            <Route path={'/404'} render={() => <div>页面不存在！</div>} />
            <Redirect from="/" to="/home" exact />
            <Redirect from="/*" to="/404" />
          </Switch>
        </div>
        <div className="mainBottom" style={{ display: this.props.showMainBottom }}>
          {
            this.state.navs.map(item => {
              return (
                <a key={item.name} href='aa:;'
                  onClick={this.goto.bind(this, item.path)}
                  className='mainBottomItem'
                >
                  {this.state.actBottomItem === item.name ? <span><img src={item.img_on} alt='' /></span> : <span><img src={item.img} alt='' /></span>}
                  <p style={this.state.actBottomItem === item.name ? { color: '#12c287' } : { color: '#404040' }}>{item.title}</p>
                </a>
              )
            })
          }
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    showMainBottom: state.isShowMainBottom
  }
}

App = withRouter(App);
App = connect(mapStateToProps)(App)
export default App;
