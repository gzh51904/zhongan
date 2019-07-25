import React from 'react'
import {Icon,Input, Tooltip,Menu,Carousel} from 'antd'

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
      //轮播图切换的回调函数
      beforeChange(from,to){
        this.setState({
            // navcolor:navColor[to]
        })
        this.props.changeBanner(navColor[to])
    }
    render(){
        return <div>
             <div style={{background:this.state.navcolor}} className='banner'>
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
        </div>
    }
}

let mapStateToProps = (state,ownprops)=>{
    return {}
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