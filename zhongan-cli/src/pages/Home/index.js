import React,{Component} from 'react';
import './scss/Home.scss';
import 'antd/dist/antd.css';
import './guo_icon/iconfont.css'
import {Icon,Input, Tooltip,Menu} from 'antd'
import { Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux';  //通过react-redux引入store

import MyHome from './component/MyHome/index.jsx'
import Health from './component/Health/index.jsx'
import Bus from './component/Bus/index.jsx'
import Tourist from './component/Tourist/index.jsx'
import Treasure from './component/Treasure/index.jsx'
import Penates from './component/Penates/index.jsx'
import Parent_child from './component/Parent_child/index.jsx'

const allRouter={MyHome,Health,Bus,Tourist,Treasure,Penates,Parent_child}


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
            // navcolor:'#67D1DE',
            current:'MyHome',
            judge:true,
        }
        // this.beforeChange=this.beforeChange.bind(this)
    }
    componentWillMount(){
        if(window.location.hash.slice(6)==='/'){
            window.location.hash = '/home/myhome'
        }
        else{
            let zero = this.state.navList.filter(item=>item.path===window.location.hash.slice(6));
            this.setState({
                current:zero[0].name
            })
        }  
    }
    componentDidUpdate(){
        if(this.state.judge===false){
            this.refs.g_tiao.focus();
        }
        
    }
    //导航点击
    handleClick = e => {
        let {history} = this.props
        // console.log("e",e)
        this.setState({
            current: e.key,
          });
        let id=(this.state.navList.filter(item=>item.name===e.key))[0].path
        // console.log(id)
        history.push('/home'+id)
        // console.log('click ', e);
      
      };
    render(){
        return (
            this.state.judge?<div>
            <div  style={{background: this.props.navscolor}} className='top'>
                <div className='search'> 
                    <a href='xxx:;'><i className='iconfont icon-erji'></i></a>
                    <Input
                        placeholder="甲状腺结节百万医疗险"
                        prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        suffix={
                        <Tooltip title="Extra information">
                            <Icon type="smile" theme="twoTone" twoToneColor="#eb2f96" />
                        </Tooltip>
                        }
                        onFocus={()=>{
                            this.setState({
                                judge:false
                            })
                        }}
                    />
                    <a href='xxx:;'><i className='iconfont icon-riqi'></i></a>
                    <a href='xxx:;'><i className='iconfont icon-xiaoxi'></i></a>
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
            <div className='g_tops'></div>
                        
            <Switch>
                {
                    this.state.navList.map(item=><Route key={item.name} path={'/home'+item.path} component={allRouter[item.name]}/>)
                }
            </Switch>
           
        </div>
        :
        <>
        <div  style={{background: '#fff'}} className='top'>
             <div className='search'> 
                <Input
                    ref='g_tiao'
                    placeholder="甲状腺结节百万医疗险"
                    prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
                />
                <a href='xxx:;'onClick={()=>{
                        this.setState({
                        judge:true
                    })
                }}>取消</a>
            </div>
            <div className="g_type">
                <a href='xxx:;'>
                    <img src='https://static-insurance-cdn.zhongan.com/assembler/img/icon-liab-res1.png' alt=''/>
                    <p>健康</p>
                </a>
                <a href='xxx:;'>
                    <img src='https://static-insurance-cdn.zhongan.com/assembler/img/icon-liab-res3.png' alt=''/>
                    <p>意外</p>
                </a>
                <a href='xxx:;'>
                    <img src='https://static-insurance-cdn.zhongan.com/assembler/img/icon-liab-res2.png' alt=''/>
                    <p>亲子</p>
                </a>
                <a href='xxx:;'>
                    <img src='https://static-insurance-cdn.zhongan.com/assembler/img/icon-liab-res4.png' alt=''/>
                    <p>汽车</p>
                </a>
                <a href='xxx:;'>
                    <img src='https://open-cdn.zhongan.com/dm-instrument/images/jtzzc7swuzd9gu8iyu2jy2z8dkkqfdp3ntqfcoip.png' alt=''/>
                    <p>旅行</p>
                </a>
                <a href='xxx:;'>
                    <img src='https://open-cdn.zhongan.com/dm-instrument/images/nph6pl4r4ru6wmqrtak4tikqe6mrumwjtwjwiqtl.png' alt=''/>
                    <p>家财</p>
                </a>
                <a href='xxx:;'>
                    <img src='https://open-cdn.zhongan.com/dm-instrument/images/79ptflhz5qk7tkfhhqvbsczkfis1tp5aykwaz3az.png' alt=''/>
                    <p>众安经济</p>
                </a>
                <a href='xxx:;'>
                    <img src='https://open-cdn.zhongan.com/dm-instrument/images/ggcoharenuhwspoyxjyrnkdz2l937opbkqj2wohi.png' alt=''/>
                    <p>特色服务</p>
                </a>
               
            
            </div>
            <div className='g_hot'>
                <h2 onClick={()=>{
                    console.log(555)
                    this.props.history.push('/goods')
                }}>热门搜索</h2>
                <div className='sousuo'>
                    <span>甲状腺结节百万医疗险</span>
                    <span>尊享e生</span>
                    <span>定制保险</span>
                    <span>百姓保住院医疗险</span>
                    <span>撒医疗</span>
                    <span>众享e家</span>
                    <span>住院</span>
                </div>
            </div>
        </div>
           
            </>
        )
    }
}

let mapStateToProps = (state)=>{
    return {
      navscolor:state.navcolor
    }
  }

Home=connect(mapStateToProps)(Home)
export default Home;