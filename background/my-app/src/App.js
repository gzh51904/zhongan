import React, {Component} from 'react';
import { Switch, Route, withRouter, Redirect} from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.scss';

import { Layout, Menu, Icon, message, Form, Input, Button } from 'antd';

import Userinfo from './pages/Userinfo/index.jsx';
import Adduser from './pages/Adduser/index.jsx';
import Goodsinfo from './pages/Goodsinfo/index.jsx';
import Addgoods from './pages/Addgoods/index.jsx';
import Modifygoods from './pages/Modifygoods/index.jsx';

import {setCookie,getCookie,clearCookie} from './pages/Cookie'
import axios from 'axios';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class NormalLoginForm  extends Component{
    constructor(){
        super();
        this.state = {
            navlists:[
                {
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
                 }
            ],
            collapsed: false,
            islogined : false
        }
        this.goto = this.goto.bind(this);
        this.leaveInterFace = this.leaveInterFace.bind(this);
    }  
    onCollapse = collapsed => {
        // console.log(collapsed);
        this.setState({
            collapsed 
        })
    }
    goto(path){
        // console.log(path)
        // // let current = this.state.navlists.lists.filter(item=>item.path==path)
        // // let current = this.state.navlists.map(item=>item.lists.filter(item=>item.path==path))
        // let current = this.state.navlists.map(item=>item.lists.map(item=>item.path==path))
        // console.log(current) 
        let dataid = window.localStorage.getItem("param"); 
        let thePath = path;
        if(thePath !== "/modifygoods"){
            window.localStorage.removeItem('param');
        }
        if(thePath === "/modifygoods" && dataid===null){
            message.warning('请从商品信息点击修改进入，3秒后自动跳转', 3);
            setTimeout(()=>{
                this.props.history.push('/goodsinfo')
            },3000)
        }
        let {history} = this.props
        history.push({
            pathname:thePath
        })
    }
    handleSubmit = e => {//提交函数，在此函数中你可以通过getFieldsValue方法拿到表单数据
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            let info = values;
            console.log("info",info)
            axios.get('http://47.94.157.240:2017/adm',{params:{AdmName:info.username,AdmPassword:info.password}})
            .then( (response) =>{
                // message.success('用户添加成功！', 1.5)
                // 重置表单输入为空
                // this.props.form.resetFields();
                console.log("response",response)
                setCookie('islogined',true)
                this.setState({
                    islogined:true
                })
            }) 
            .catch(function (error) {
              console.log(error)
            });
          }
        });
      };
    componentWillMount(){
        if(getCookie('islogined')==="true"){
            console.log(666)
            this.setState({
                islogined:true
            })
        }else{
            this.setState({
                islogined:false
            })
        }
    }
    leaveInterFace(){
        clearCookie('islogined');
        this.setState({
            islogined:false
        })
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        // console.log("this.props",this.props);
        let islogined = this.state.islogined;
        return (
        !islogined?
        <div className="LoginInterFace">
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            className="usernameContent"
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            className="passwordContent"
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>    
        :        
        <div className="app">
            <div className="aside">
                <Layout className="asideLayout" style={{ minHeight: '100vh' }}>
                    <Sider className="asideSider" collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} >
                        <Menu className="asideMenu" theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item className="asideMenuItem" key="1" style={{ margin:0, height:64, paddingTop:12 }}>
                                <Icon className="asideMenuItemIcon" style={{ fontSize:20 }} type="cloud" theme="twoTone" />
                                <span className="asideMenuItemSpan" style={{ fontSize:20 }}>后台管理系统</span>
                            </Menu.Item>
                            {
                            this.state.navlists.map(item=>{
                                return (
                                <SubMenu key={item.id} title={
                                // <SubMenu onClick={this.removelocalStorage.bind(this)} key={item.id} title={
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
                        <Header style={{ background: '#fff', padding: 0 }}>
                            <Button shape="round" icon="rollback" style={{background:'#ff9900',color:'#fff',float:'right',margin:'15px 15px'}} onClick={this.leaveInterFace}>
                                退出
                            </Button>
                        </Header>
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

let App = Form.create({ name: 'normal_login' })(NormalLoginForm);

App = withRouter(App);

export default App;
