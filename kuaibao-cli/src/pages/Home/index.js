import React,{Component} from 'react';
<<<<<<< HEAD
import './Home.scss'
=======
import './Home.scss';
import 'antd/dist/antd.css';
import './guo_icon/iconfont.css'
import {Icon,Input, Tooltip,Menu,Carousel} from 'antd'
import { Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux';  //通过react-redux引入store

import MyHome from './component/MyHome/index.jsx'
import Health from './component/Health'
import Bus from './component/Bus'
import Tourist from './component/Tourist'
import Treasure from './component/Treasure'
import Penates from './component/Penates'
import Parent_child from './component/Parent_child'

const allRouter={MyHome,Health,Bus,Tourist,Treasure,Penates,Parent_child}


>>>>>>> 14e5bca11294ffcd5456cb239a12c009b3f6086d
class Home extends Component{
    constructor(){
        super();
        this.state={
            navList:[{
                name:'MyHome',
                path:'/myhome',
                title:'首页'
            },{
                name:'Health',
                path:'/health',
                title:'健康'
            },{
                name:'Bus',
                path:'/bus',
                title:'汽车'
            },{
                name:'Tourist',
                path:'/tourist',
                title:'出行'
            },{
                name:'Treasure',
                path:'/treasure',
                title:'财富'
            },{
                name:'Penates',
                path:'/penates',
                title:'家财'
            },{
                name:'Parent_child',
                path:'/parent_child',
                title:'亲子'
            },],
            navcolor:'#67D1DE',
            current:'Home'
        }
        // this.beforeChange=this.beforeChange.bind(this)
    }
  
    //导航点击
    handleClick = e => {
        let {history} = this.props
        this.setState({
            current: e.key,
          });
        let id=(this.state.navList.filter(item=>item.name===e.key))[0].path
        console.log(id)
        history.push('/Home'+id)
        // console.log('click ', e);
      
      };
    render(){
        return <div>
            <div  style={{background: this.props.navscolor}} className='top'>
                <div className='search'> 
                    <a href=''><i className='iconfont icon-erji'></i></a>
                    <Input
                        placeholder="Enter your username"
                        prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        suffix={
                        <Tooltip title="Extra information">
                            <Icon type="smile" theme="twoTone" twoToneColor="#eb2f96" />
                        </Tooltip>
                        }
                    />
                    <a href=''><i className='iconfont icon-riqi'></i></a>
                    <a href=''><i className='iconfont icon-xiaoxi'></i></a>
                </div>
                <div className='navs'>
                    <div className='navs_box'>
                    <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                        {
                            this.state.navList.map(item=>{
                                return(
                                    <Menu.Item key={item.name}>
                                    {item.title}
                                    </Menu.Item>
                                ) 
                            })
                        }
                    </Menu>
                    </div>
                </div>
            </div>
         
           
            <Switch>
                {
                    this.state.navList.map(item=><Route key={item.name} path={'/Home'+item.path} component={allRouter[item.name]}/>)
                }
            </Switch>
           
            
            <p style={{height:'500px',background:'red'}}>首页</p>
            <p style={{height:'500px',background:'yellow'}}>首页</p>
            <p style={{height:'500px',background:'red'}}>首页</p>
            <p style={{height:'500px',background:'green'}}>首页</p>
            <p style={{height:'500px',background:'red'}}>首页</p>
           
        </div>
    }
}

let mapStateToProps = (state)=>{
    // console.log(state,state.props)
    return {
      navscolor:state.navcolor
    }
  }

Home=connect(mapStateToProps)(Home)
export default Home;