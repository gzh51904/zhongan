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
import { connect } from 'react-redux'

import { change_login_status } from '../../store/Actions'


// 引入插件video-react
import { Player, BigPlayButton } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css";

let AllRouter = {
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
            loginstatus: false
        }
        this.handleClick = this.handleClick.bind(this)
        this.denglu = this.denglu.bind(this)
    }

    handleClick(data) {
        // console.log("data",data)//  先配置高阶组件withRouter
        let { history } = this.props;
        this.setState({
            current: data.key
        });
        let currentRouter = this.props.navsabc.filter(item => item.name === data.key)[0]
        // let currentRouter = this.state.navs.filter(item=>item.name === data.key)[0]
        // console.log('currentRouter',currentRouter)
        // console.log('history',history)
        history.push({
            pathname: '/discover' + currentRouter.path
        })
    }

    denglu() {
        console.log(this.props);
        let { history } = this.props;
        history.push({
            pathname: '/Mine'
        })
    }

    componentWillMount() {
        let { changeloginstatus } = this.props
        // console.log("this.props:",this.props)
        this.props.history.push({
            pathname: '/discover/uhealth'
        })

        if (localStorage.getItem('Authorization')) {
            changeloginstatus(true)
            this.setState({
                loginstatus: true
            })
        }
    }


    render() {
        // console.log('navsabc',this.props.navsabc)
        return (
            <div className="DisMain" style={{ width: '100%', height: '100%' }}>
                <div className="DisNotLogin">
                    <div className="mainTop">
                        <span>发现</span>
                    </div>
                    <img src={require("../../assets/img/notLogin.png")} alt="登录享受权益" />
                    {
                        localStorage.getItem("Authorization") ? (
                            <div className="member">
                                <span className='vip'>V1 会员</span><span className="exp">还需80经验升级为V2</span>
                                <h2>会员权益：18积分生日礼 <span>升级V2积分送更多</span></h2>
                                <div className="mission">
                                    <a href="aa:;">
                                        <h4><strong>首次登录App</strong></h4>
                                        <p>奖励：<span>5积分</span></p>
                                        <p>经验值：<span>0</span></p>
                                        <p><button>领取奖励</button></p>
                                    </a>
                                    <a href="aa:;">
                                        <h4><strong>实名认证</strong></h4>
                                        <p>奖励：<span>99积分</span></p>
                                        <p>经验值：<span>20</span></p>
                                        <p><button>去完成</button></p>
                                    </a>
                                    <a href="aa:;">
                                        <h4><strong>绑定银行卡</strong></h4>
                                        <p>奖励：<span>99积分</span></p>
                                        <p>经验值：<span>10</span></p>
                                        <p><button>去完成</button></p>
                                    </a>
                                </div>
                            </div>
                        ) : (
                                <Button onClick={this.denglu.bind(this)} className="DisNotLogin" >登录查看会员权益</Button>
                            )
                    }
                </div>
                <div className="DisMainCarousel">
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
                <div style={{ height: "10px", background: "#eeeeee" }}></div>
                <div className="navsBox">
                    <h3>U享会员</h3>
                    <Menu className="navsParent" onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                        {
                            this.props.navsabc.map(item => <Menu.Item className="navsItem" key={item.name}>{item.title}</Menu.Item>)
                            // this.state.navs.map(item=><Menu.Item className="navsItem" key={item.name}>{item.title}</Menu.Item>)
                        }
                    </Menu>
                </div>
                <div>
                    <Switch>
                        {
                            this.props.navsabc.map(item => <Route key={item.name} path={'/discover' + item.path} component={AllRouter[item.name]} />)
                            // this.state.navs.map(item=><Route key={item.name} path={'/discover'+item.path} component={AllRouter[item.name]} />)
                        }
                        {/* <Route path="/uhealth" component={Uhealth}/>
                    <Route path="/utrip" component={Utrip}/>
                    <Route path="/ufamily" component={Ufamily}/>
                    <Route path="/ucarowner" component={Ucarowner}/> */}
                    </Switch>
                </div>
                <div style={{ height: "10px", background: "#eeeeee" }}></div>
                <div className="Dislingqulibao">
                    <h3>新人专区</h3>
                    <img className="DislingqulibaoPic" src={require("../../assets/img/newpeople.jpg")} alt="点击领取礼包" />
                </div>
                <div style={{ height: "10px", background: "#eeeeee" }}></div>
                <div className="Disfuli">
                    <h3>福利专区</h3>
                    <div>
                        <a href="aa:;">
                            <img alt='' src='https://open-cdn.zhongan.com/dm-instrument/images/ri3sn9juaqb53ghosgevsvjbv72kl59ovlxjccjw.png' alt="qiandaofuli" />
                        </a>
                    </div>
                    <div>
                        <a href="aa:;">
                            <img alt='' src='https://open-cdn.zhongan.com/dm-instrument/images/pbk9ij4ja3ra8atqrx7smc0c85feeurlhppmwisa.png' alt="fuli" />
                        </a>
                    </div>
                    <div>
                        <a href="aa:;">
                            <img alt='' src='https://open-cdn.zhongan.com/dm-instrument/images/y9orqvoxqbbyfoerll9ve2czeovakvmdn8aw7dzx.png' alt="hangkong" />
                        </a>
                    </div>
                </div>
                <div style={{ height: "10px", background: "#eeeeee" }}></div>
                <div className="Disjifen">
                    <h3>积分商城</h3>
                    <div>
                        <a href="aa:;">
                            <img alt='' src='https://open-cdn.zhongan.com/dm-instrument/images/vtgvkjfpkntciverunx8ifmztyjfbkc6j4mwkavn.png' />
                        </a>
                    </div>
                    <div>
                        <a href="aa:;">
                            <img alt='' src='https://open-cdn.zhongan.com/dm-instrument/images/l6rg8htieprwh3tsonzut9hjqaqs0dcdl1pwaqtr.png' />
                        </a>
                    </div>
                    <div>
                        <a href="aa:;">
                            <img alt='' src='https://open-cdn.zhongan.com/dm-instrument/images/vypiknp7dp9n3x59uxwhojcl377fmkb2kaovz6kv.png' />
                        </a>
                    </div> <div>
                        <a href="aa:;">
                            <img alt='' src='https://open-cdn.zhongan.com/dm-instrument/images/y1bwzfspbktnqv5td4rgqv25wplkankxlxeskibo.png' />
                        </a>
                    </div> <div>
                        <a href="aa:;">
                            <img alt='' src='https://open-cdn.zhongan.com/dm-instrument/images/b4ajklbrhfbddet7zjssxswbehob4g8d0fkzdeu6.png' />
                        </a>
                    </div>
                </div>
                <div className="Disvideo">
                    <h3>尊享e生2019版</h3>
                    {/* <Player ref="player" videoId="video-1" poster="https://open-cdn.zhongan.com/dm/assembler/6a84eac653401dc265337a6c4ed0aff3.jpg">
                        <source src="https://static-insurance-cdn.zhongan.com/video/5020772111140532.mp4"/>
                    </Player> */}
                    <Player src="https://static-insurance-cdn.zhongan.com/video/5020772111140532.mp4" poster="https://open-cdn.zhongan.com/dm/assembler/6a84eac653401dc265337a6c4ed0aff3.jpg">
                        <BigPlayButton position="center" />
                    </Player>
                </div>
            </div>
        )
    }
}

// Discover = withRouter(Discover) // 只用在最外层app.js引用就行了

// react-redux使组件与store直接联系，无关父子关系了
let mapStateToProps = (state) => {  // 在组件定义一个方法返回store的数据
    return {
        navsabc: state.navs,
        Carouselpic: state.Carouselimg
    }
}
let mapDispatchToProps = (dispatch, ownprops) => {
    return {
        changeloginstatus(buerzhi) {
            dispatch(change_login_status(buerzhi))
        }
    }
}

Discover = connect(mapStateToProps, mapDispatchToProps)(Discover) // 把数据注入组件

export default Discover;