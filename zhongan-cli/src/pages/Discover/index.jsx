import React, { Component } from 'react';
import "./Discover.scss";
// import { Skeleton } from 'antd';
// <Skeleton active />
import { Switch, Route } from 'react-router-dom';

import { Carousel, Button, Menu } from 'antd';

import Uhealth from './MyNav/Uhealth';
import Utrip from './MyNav/Utrip';
import Ufamily from './MyNav/Ufamily';
import Ucarowner from './MyNav/Ucarowner';

import {connect} from 'react-redux'

let AllRouter={
    Uhealth,
    Utrip,
    Ufamily,
    Ucarowner
  }

class Discover extends Component {
    constructor() {
       super();

        this.state = {
            // img: [{
            //     name: 'pic1',
            //     imgurl: 'https://open-cdn.zhongan.com/dm/assembler/5ff8b5624db4e51e8a3a376a9925dfae.png'
            // }, {
            //     name: 'pic2',
            //     imgurl: 'https://open-cdn.zhongan.com/dm/assembler/0a9cc7ad9ab358ee9ccdbedefe9343b1.png'
            // }, {
            //     name: 'pic3',
            //     imgurl: 'https://static.zhongan.com/website/assembler/main/1541383770640_详情页主图.png'
            // }, {
            //     name: 'pic4',
            //     imgurl: 'https://open-cdn.zhongan.com/dm/assembler/4738fd7d072be38f628ea0b554c657c3.png'
            // }],
            // navs:[{
            //     title:"U享健康",
            //     name:'Uhealth',
            //     path:'/uhealth',
            //     imgurl:'https://dm.zacdn.cn/m/u-member/static/img/package/health/banner_jk.png'
            // },{
            //     title:"U享出行",
            //     name:'Utrip',
            //     path:'/utrip',
            //     imgurl:'https://dm.zacdn.cn/m/u-member/static/img/package/trip/banner.png'
            // },{
            //     title:"U享家庭",
            //     name:'Ufamily',
            //     path:'/ufamily',
            //     imgurl:'https://dm.zacdn.cn/m/u-member/static/img/package/family/banner_family.png'
            // },{
            //     title:"U享车主",
            //     name:'Ucarowner',
            //     path:'/ucarowner',
            //     imgurl:'https://dm.zacdn.cn/m/u-member/static/img/package/auto/banner_auto.png'
            // }],
            current: 'Uhealth',
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(data){
        // console.log("data",data)//  先配置高阶组件withRouter
        let {history} = this.props;
        this.setState({
            current:data.key
        });
        let currentRouter = this.props.navsabc.filter(item=>item.name === data.key)[0]
        // let currentRouter = this.state.navs.filter(item=>item.name === data.key)[0]
        // console.log('currentRouter',currentRouter)
        // console.log('history',history)
        history.push({
            pathname:'/discover'+currentRouter.path
        })

    }
    render() {
        // console.log('navsabc',this.props.navsabc)
        return (
            <div className="DisMain" style={{ width: '100%', height: '100%' }}>
                <div className="mainTop">
                    <header>我是顶部</header>
                </div>
                <div className="DisNotLogin">
                    <img src={require("../../assets/img/notLogin.png")} alt="登录享受权益"/>
                    <Button className="DisNotLogin" >登录查看会员权益</Button>
                </div>
                <div  className="DisMainCarousel">
                    <Carousel effect="fade" autoplay>
                    {
                        this.props.Carouselpic.map(item => {
                        // this.state.img.map(item => {
                            return (
                                <img key={item.name} src={item.imgurl} alt={item.name} style={{ width: '100%', height: '100%' }} />
                            )
                        })
                    }
                </Carousel>
                </div >
                <div style={{height:"10px",background: "#eeeeee"}}></div>
                <div className="navsBox">
                    <h3>U享会员</h3>
                    <Menu className="navsParent" onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                        {
                            this.props.navsabc.map(item=><Menu.Item className="navsItem" key={item.name}>{item.title}</Menu.Item>)
                            // this.state.navs.map(item=><Menu.Item className="navsItem" key={item.name}>{item.title}</Menu.Item>)
                        }
                    </Menu>
                </div>
                <div>
                    <Switch>
                    {
                        this.props.navsabc.map(item=><Route key={item.name} path={'/discover'+item.path} component={AllRouter[item.name]} />)
                        // this.state.navs.map(item=><Route key={item.name} path={'/discover'+item.path} component={AllRouter[item.name]} />)
                    }
                    {/* <Route path="/uhealth" component={Uhealth}/>
                    <Route path="/utrip" component={Utrip}/>
                    <Route path="/ufamily" component={Ufamily}/>
                    <Route path="/ucarowner" component={Ucarowner}/> */}
                </Switch>
                </div>
                <div style={{height:"10px",background: "#eeeeee"}}></div>
                <div className="Dislingqulibao">
                    <h3>新人专区</h3>
                    <img className="DislingqulibaoPic" src={require("../../assets/img/newpeople.jpg")} alt="点击领取礼包"/>
                </div>
                <div style={{height:"10px",background: "#eeeeee"}}></div>
                <div className="Disfuli">
                    <h3>福利专区</h3>
                    <div>
                        <a href="#">
                            <img src='https://open-cdn.zhongan.com/dm-instrument/images/ri3sn9juaqb53ghosgevsvjbv72kl59ovlxjccjw.png'/>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <img src='https://open-cdn.zhongan.com/dm-instrument/images/pbk9ij4ja3ra8atqrx7smc0c85feeurlhppmwisa.png'/>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <img src='https://open-cdn.zhongan.com/dm-instrument/images/y9orqvoxqbbyfoerll9ve2czeovakvmdn8aw7dzx.png'/>
                        </a>
                    </div>
                </div>
                <div style={{height:"10px",background: "#eeeeee"}}></div>
                <div className="Disjifen">
                    <h3>积分商城</h3>
                    <div>
                        <a href="#">
                            <img src='https://open-cdn.zhongan.com/dm-instrument/images/vtgvkjfpkntciverunx8ifmztyjfbkc6j4mwkavn.png'/>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <img src='https://open-cdn.zhongan.com/dm-instrument/images/l6rg8htieprwh3tsonzut9hjqaqs0dcdl1pwaqtr.png'/>
                        </a>
                    </div>   
                    <div>
                        <a href="#">
                            <img src='https://open-cdn.zhongan.com/dm-instrument/images/vypiknp7dp9n3x59uxwhojcl377fmkb2kaovz6kv.png'/>
                        </a>
                    </div> <div>
                        <a href="#">
                            <img src='https://open-cdn.zhongan.com/dm-instrument/images/y1bwzfspbktnqv5td4rgqv25wplkankxlxeskibo.png'/>
                        </a>
                    </div> <div>
                        <a href="#">
                            <img src='https://open-cdn.zhongan.com/dm-instrument/images/b4ajklbrhfbddet7zjssxswbehob4g8d0fkzdeu6.png'/>
                        </a>
                    </div>  
                </div>   
            </div>
        )
    }
}

// Discover = withRouter(Discover) // 只用在最外层app.js引用就行了

// react-redux使组件与store直接联系，无关父子关系了
let mapStateToProps=(state)=>{  // 在组件定义一个方法返回store的数据
    return {
        navsabc:state.navs,
        Carouselpic:state.Carouselimg
    }
}

Discover=connect(mapStateToProps)(Discover) // 把数据注入组件

export default Discover;