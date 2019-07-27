import React, {Component} from 'react';
import 'antd/dist/antd.css';
import './App.scss';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import { Switch, Route, withRouter, Redirect} from 'react-router-dom';

import Userinfo from './pages/Userinfo/index.jsx';
import Adduser from './pages/Adduser/index.jsx';
import Goodsinfo from './pages/Goodsinfo/index.jsx';
import Addgoods from './pages/Addgoods/index.jsx';
import Modifygoods from './pages/Modifygoods/index.jsx';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class App extends Component{
    constructor(){
        super();
        this.state = {
        navlists:[{
                id:'sub1',
                title:'用户管理',
                icon:'user',
                lists:[
                    {title:'用户信息',icon:'user',name:'Userinfo',path:'/userinfo'},
                    {title:'添加用户信息',icon:'user-add',name:'Adduser',path:'/adduser'}
                ]
            },{
                id:'sub2',
                title:'商品管理',
                icon:'file-done',
                lists:[
                    {title:'商品信息',icon:'ordered-list',name:'Goodsinfo',path:'/goodsinfo'},
                    {title:'添加商品',icon:'file-add',name:'Addgoods',path:'/addgoods'},
                    {title:'修改商品',icon:'radius-upright',name:'Modifygoods',path:'/modifygoods'}
                ]
            }],
            collapsed: false
        }
        this.goto = this.goto.bind(this)
    }  
    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({
            collapsed 
        })
    }
    goto(path){
        // console.log(path)
        // // let current = this.state.navlists.lists.filter(item=>item.path==path)
        // // let current = this.state.navlists.map(item=>item.lists.filter(item=>item.path==path))
        // let current = this.state.navlists.map(item=>item.lists.map(item=>item.path==path))
        //     console.log(current)
        
        let {history} = this.props
        history.push({
            pathname:path
        })
    }
    render(){
        // console.log("this.props",this.props);
        return (
        <div className="app">
            <div className="aside">
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1">
                            <Icon type="cloud" theme="twoTone" />
                            <span>后台管理系统</span>
                            </Menu.Item>
                            {
                            this.state.navlists.map(item=>{
                                return (
                                <SubMenu key={item.id} title={
                                    <span>
                                    <Icon type={item.icon} />
                                    <span>{item.title}</span>
                                    </span>
                                }>
                                {
                                    item.lists.map(item=>{
                                        return (
                                            <Menu.Item key={item.name} onClick={this.goto.bind(this,item.path)}><Icon type={item.icon}/>{item.title}</Menu.Item>
                                        )
                                    })

                                }
                                </SubMenu>
                                )
                            })
                            }
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }} />
                        <Content style={{ margin: '0 16px' }}>
                            <div className="luyou">
                                <Switch>
                                    <Route path="/userinfo" component={Userinfo}/>    
                                    <Route path="/Adduser" component={Adduser}/>    
                                    <Route path="/Goodsinfo" component={Goodsinfo}/>    
                                    <Route path="/Addgoods" component={Addgoods}/>    
                                    <Route path="/Modifygoods" component={Modifygoods}/>    
                                    <Route path={'/404'} render={() => <div>页面不存在！</div>} />
                                    <Redirect from="/" to="/userinfo" />
                                    <Redirect from="/*" to="/404" />
                                </Switch>
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Design ©2018 Created by Monster</Footer>
                    </Layout>
                </Layout>
            </div>
        </div>
        );
    }
}

App = withRouter(App);


export default App;
