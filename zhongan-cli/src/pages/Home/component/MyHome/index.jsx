import React from 'react'
import {Carousel,Icon} from 'antd'

import {connect} from 'react-redux';
import {change_banner} from '../../../../store/Actions'

import './MyHome.scss'

const navColor=['#67D1DE','#1DDBBE','#61D0FE','#BCE9F9']

class MyHome extends React.Component{
    constructor(){
        super();
        this.state={

        }
        this.beforeChange=this.beforeChange.bind(this)
    }
    //字体轮播图的切换函数
    componentDidMount(){
        setInterval(() => {
            if(this.refs.basg){
                this.refs.basg.next();
            }
        }, 2500);
    }
      //轮播图切换的回调函数
      beforeChange(from,to){
        this.props.changeBanner(navColor[to])
    }
    render(){
        return <div>
             <div style={{background:this.props.navscolor}} className='banner'>
                <div className='banner_nav'>
                     <Carousel  autoplay beforeChange={this.beforeChange.bind(this)}>
                     
                        <img src='https://open-cdn.zhongan.com/dm-instrument/images/8vqyn476zlnhdm2kjss4ojtyvubktwiuw3mzhksg.jpg' alt=''/>
                   
                 
                        <img src='https://open-cdn.zhongan.com/dm-instrument/images/yodeqydd98kt8o00nrpamvyvhsyeqyr4vxzwesas.png'  alt='' />
                                        
                        <img src='https://open-cdn.zhongan.com/dm-instrument/images/pc0y1gv7zgo1sbe1kqm6muezclne14qhhymjq7tt.jpg'  alt='' />
                    
                        <img src='https://open-cdn.zhongan.com/dm-instrument/images/ujg6hv8xssu2of18vntfj80yrvqfs1pupsnfl9gu.jpg'  alt='' />
                   
                    </Carousel>
                </div>
            </div>
            <div className='dayday'>
               <ul>
                   <li>
                       <h4>天天健康</h4>
                       <p>100现金待领取</p>
                       <button className='b_one'>去领取</button> 
                       <img src='https://open-cdn.zhongan.com/dm-instrument/images/jx1rxttbejhzve6kuhax2h4s0crjq4oewgsse1ui.png'  alt=''/>  
                   </li>
                   <li>
                       <h4>天天送油</h4>
                       <p>价值6元新人礼</p>
                       <button className='b_two'>去领油</button>   
                        <img src='https://open-cdn.zhongan.com/dm-instrument/images/lvsqt1xtkcld98zwyhufjcyaeizul555l2y3gumf.png'  alt=''/>  
                   </li>  
                   <li>
                       <h4>金融服务</h4>
                       <p>5万最高承保额</p>
                       <button className='b_three'>去申请</button>   
                       <img src='https://open-cdn.zhongan.com/dm-instrument/images/zqk0njd1uqsdlxjr0dfu64tzy1lrou5eixqfq7tm.png'  alt=''/>  
                   </li>
                </ul>
            </div>
            <div className='g_recommend'>
                <h2>为你推荐</h2>
                <div className='g_ul'>
                   <a href='xxx:;' >
                       <img src="https://open-cdn.zhongan.com/dm-instrument/images/k045uublwbl5ntg4ap41miru1ipmmudahskujrr8.png" alt=""/>
                        <div className='g_info'>
                            <h4>尊享e生</h4>
                            <p>100种重疾0免赔，送智能体脂管理服务</p>
                        </div>
                        <div className='g_price'>
                            <div className="g_money">
                                <span>￥133</span>起
                            </div>
                            <div className="g_buy">
                                <button>立即投保</button>
                            </div>
                        </div>
                   </a>
                   <a href='./' >
                       <img src="https://open-cdn.zhongan.com/dm-instrument/images/33hf3v2p6xz0lezzvy9xlutvpxr3pfk3bm0eknvv.png" alt=""/>
                        <div className='g_info'>
                            <h4>众享e家 家庭共享</h4>
                            <p>全家一起保，最高713万意外保障,花呗免息分期</p>
                        </div>
                        <div className='g_price'>
                            <div className="g_money">
                                <span>￥33/月</span>起
                            </div>
                            <div className="g_buy">
                                <button>立即投保</button>
                            </div>
                        </div>
                   </a>
                </div>
            </div>
            <div className="g_elves">
                <h2>智能助手</h2>
                <img src="./g_images/elves.jpg" alt=""/>
                <div className="g_tip">
                    暑假将至，宝贝们的假期安全别忽视
                </div>
                <a href='xxx:;' className="g_learn">了解一下<Icon type="right-circle" /></a>
            </div>
            <div className="g_choose">
                <h2>众安优选</h2>
               <div className="youxuan">
                   <img src="./g_images/youxuan.png" alt=""/>
                   <div className="g_tip">
                    <span>保险课堂</span>
                    <div className="fontnav">
                    <Carousel ref='basg' dots={false} dotPosition='left'>
                        <p>1分钟get！长期重疾险挑选秘籍</p>                          
                        <p>买重疾险，长期还是短期的划算？</p>                                         
                        <p>轻疾、中疾、重疾，傻傻分不清楚？</p>
                    </Carousel>
                        
                    </div>
                </div>
               </div> 
            </div>
            <div className="g_read">
                <h2>每日一读</h2>
                <div className="video">
                    <video src="./g_images/langqiu.mp4" muted autoPlay controls></video>
                </div>
                <div className="describe">这种版本的蔡徐坤打篮球，你见过吗？</div>
                <div className="introduce">
                    <a className="pipa" href="xxx:;">
                        <h3>驾驶员意外险</h3>
                        <p>每天只需2毛钱</p>
                        <button type='warning'>￥1起</button>
                    </a>
                    <span></span>
                    <a  className='pipi' href="xxx:;">
                        <h3>新全保通少儿版</h3>
                        <p>儿童高发意外均可保障</p>
                        <button type='danger'>￥38起</button>
                    </a>
                </div>
            </div>
            <div className="g_zone">
                <h2>企业专区</h2>
                <div className="zones">
                    <a href="xxx:;">
                        <img src="https://open-cdn.zhongan.com/dm-instrument/images/ggcoharenuhwspoyxjyrnkdz2l937opbkqj2wohi.png" alt=""/>
                       <h4>员工保险定制</h4>
                       <p>多种套餐 任意选择</p>
                    </a>
                    <a href="xxx:;">
                        <img src="https://open-cdn.zhongan.com/dm-instrument/images/gvrer8yoom9ifyrcbypcxvg8zzwwr0yuousj5fls.png" alt=""/>
                        <h4>最福利</h4>
                       <p>一战式员工福利</p>
                    </a>
                    <a href="xxx:;">
                        <img src="https://open-cdn.zhongan.com/dm-instrument/images/79ptflhz5qk7tkfhhqvbsczkfis1tp5aykwaz3az.png" alt=""/>
                        <h4>开放平台</h4>
                       <p>场景保险 定制合作</p>
                    </a>
                </div>
            </div>
        </div>
    }
}


let mapStateToProps = (state)=>{
    return {
      navscolor:state.navcolor
    }
  }
let mapDispatchToPro=(dispatch,ownprops)=>{
    return {
        changeBanner(data){
            dispatch(change_banner(data))
        }
    }
}

MyHome = connect(mapStateToProps,mapDispatchToPro)(MyHome)

export default MyHome;