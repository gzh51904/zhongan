import React,{Component} from 'react';
import { connect } from 'react-redux';
import {change_mainbottom} from '../../store/Actions'
import axios from 'axios'
import './Goods.scss'
import {Icon} from 'antd'

class Goods extends Component{
    constructor(){
        super();
        this.state={
            animation:'',
            isShow:'none',
            toubao:'立即投保',
            anasync:false,
            goodsMessage:{},
            guoName:'',
            familyShow:'none'
        }
        this.changeShowMainBottom=this.changeShowMainBottom.bind(this);
        this.changeIsShow=this.changeIsShow.bind(this)
    }
    changeIsShow(judge){
        if(judge&&!this.state.anasync){
           this.setState({
                animation:'guo-show-hidden 0.3s linear',
                isShow:'block',
                toubao:'确认投保',
                anasync:true
            }) 
            setTimeout(()=>{
                this.setState({
                    animation:'',
                }) 
            },500)
        }
        else if(!judge&&this.state.anasync){
            this.setState({
                animation:'guo-show-hidden reverse 0.3s linear',
                toubao:'立即投保',
                anasync:false
               
            })  
            setTimeout(()=>{
                this.setState({
                    isShow:'none'
                }) 
            },200)
        }
        else if(judge&&this.state.anasync){
            console.log('进入购买支付等其他页面的操作')
        }
        
    }
    changeShowMainBottom(data){
        if(data){
            this.props.changeMainBottom('flex');
            this.props.history.push('/home');
        }
        else{
            this.props.changeMainBottom('none');
        }
        
    }
    async componentWillMount(){
        
        this.changeShowMainBottom();
        // console.log(this.props.match.params)
        let {goodsCode} = this.props.match.params;
        let {data} = await axios.get('http://47.94.157.240:2017/zhongangoods',{
            params:{goodsCode}
        });
        this.setState({ goodsMessage:data[0]})
    }
    componentDidMount(){
        this.node.scrollIntoView();
    }
    render(){
        let good = this.state.goodsMessage;
        return <div className='goods_bg'>
            <div ref={node => this.node = node} />
            <div className="good_top"><Icon type='left' onClick={this.changeShowMainBottom.bind(this,true)}style={{position:'absolute',fontSize:'1.75rem',top:'.85rem',left:'1rem',color:'rgb(51, 138, 209)'}} />{good.title}</div>
            <div className="good_img">
                <img src={good.imageUrl} alt=""/>
                <img src="https://open-prd.oss-cn-hzfinance.aliyuncs.com/1554802863720.png" alt=""/>
            </div>        
             <div className="mod-details">
                 <h2>{good.title}<span>医疗险</span></h2>
                 <p><span>{good.summary}</span><span>投保年龄:30天至60周岁</span></p>
            </div> 
            <div className="mod-details">
                <a href='xxx:;' className='good_flex'>
                    <span>福利</span>
                    <p>走路领红包</p>
                    <span>1个福利<Icon type='right'/></span>
                </a>
                <a href='xxx:;' className='good_flex'>
                    <span>服务</span>
                    <p>术后家庭护理服务 | 肿瘤特药服务..</p>
                    <span>5个服务<Icon type='right'/></span>
                </a>
            </div>  
            <div className="mod-details good_server">
                <h2 style={{zIndex:1}}>保障详情</h2>
                <div className="good_plan">
                    <a href="xxx:;" className={this.state.guoName} onClick={()=>{
                        this.setState({guoName:'',familyShow:'none'})
                    }}>
                        <p>个人版</p>
                        <span>被保人数不限</span>
                    </a>
                    <p></p>
                    <a href="xxx:;"  className={this.state.guoName===''?'goodActived':''} onClick={()=>{
                        this.setState({guoName:'goodActived',familyShow:'flex'})
                    }}>
                        <p>家庭版</p>
                        <span>被保人数需>2</span>
                    </a>
                </div>
                <ul className='plans-clause'>
                    <li>
                        <div className="plans-clause-left">
                            <h6>一般医疗保险金</h6>
                            <p>免赔额：10000元</p>
                        </div>
                        <div className="plans-clause-price-black">
                            300万元
                        </div>
                    </li>
                    <li>
                        <div className="plans-clause-left">
                            <h6>一重大疾病医疗保险金</h6>
                            <p>免赔额：0元</p>
                        </div>
                        <div className="plans-clause-price-black">
                            300万元
                        </div>
                    </li>
                    <li style={{display:this.state.familyShow}}>
                        <div className="plans-clause-left">
                            <h6>免赔额豁免</h6>
                            <p>多人投保共享1万元免赔额</p>
                        </div>
                        <div className="plans-clause-price-black">
                        </div>
                    </li>
                    <li style={{display:this.state.familyShow}}>
                        <div className="plans-clause-left">
                            <h6>法律费用</h6>
                            <p>免赔付比例100%</p>
                        </div>
                        <div className="plans-clause-price-black">
                            6000元
                        </div>
                    </li>
                    <a href="xxx:;">查看保障详情<Icon type='right'/></a>
                </ul>
            </div>
            <img src="https://open-cdn.zhongan.com/dm/assembler/13f321af1608ef0820b217e183f2e05b.jpg" alt=""/>
            <img src="https://open-cdn.zhongan.com/dm/assembler/64e8e9aa13e9a28983057edaebd8ba64.jpg" alt=""/>
            <img src="https://open-cdn.zhongan.com/dm/assembler/0673cfc18b1d1f6c55b3d8f2b72efe55.jpg" alt=""/>
            <img src="https://open-cdn.zhongan.com/dm/assembler/0ebb74dccbbdc2b9b82b1621398b5b1d.jpg" alt=""/>
            <img src="https://open-cdn.zhongan.com/dm/assembler/6cc770623887ca141f181248c0ec6eda.jpg" alt=""/>
            <img src="https://open-cdn.zhongan.com/dm/assembler/29fb493e0862586b761e8c94ae8a40d7.jpg" alt=""/>
            <img src="https://open-cdn.zhongan.com/dm/assembler/9dda63230414c2ee7a8f8c2161155699.jpg" alt=""/>
            <img src="https://open-cdn.zhongan.com/dm/assembler/a34576e189c47b85d0d8d16d4b5644ac.jpg" alt=""/>
            <div className="footer-box-inner">
                <Icon type="phone" style={{lineHeight:'4rem',fontSize:'2.25rem',color:'#12c286',margin:'0.25rem 1.5rem'}}/>
                <div className="good_price">
                <span>￥</span>
                    {good.price}.00
                    <span>起</span>
                </div>
                <div className="goods_buy">
                    <button onClick={this.changeIsShow.bind(this,true)}>{this.state.toubao}</button>
                </div>
            </div>
            {/* 弹窗部分 */}
            <div className="good_aside" style={{display:this.state.isShow}}>
            </div>
            <div className="goods_alert" style={{animation:this.state.animation,display:this.state.isShow}}>
            <div className="mod-details good_server">
                <h2>保障详情<Icon type="close-circle" onClick={this.changeIsShow.bind(this,false)}/></h2>
                {/* <div class='good_box'> */}
                <div className="good_plan">
                <a href="xxx:;" className={this.state.guoName} onClick={()=>{
                        this.setState({guoName:'',familyShow:'none'})
                    }}>
                        <p>个人版</p>
                        <span>被保人数不限</span>
                    </a>
                    <p></p>
                    <a href="xxx:;"  className={this.state.guoName===''?'goodActived':''} onClick={()=>{
                        this.setState({guoName:'goodActived',familyShow:'flex'})
                    }}>
                        <p>家庭版</p>
                        <span>被保人数需>2</span>
                    </a>
                </div>
                <ul className='plans-clause good_scroll'>
                    <li>
                        <div className="plans-clause-left">
                            <h6>一般医疗保险金</h6>
                            <p>免赔额：10000元</p>
                        </div>
                        <div className="plans-clause-price-black">
                            300万元
                        </div>
                    </li>
                    <li>
                        <div className="plans-clause-left">
                            <h6>一重大疾病医疗保险金</h6>
                            <p>免赔额：0元</p>
                        </div>
                        <div className="plans-clause-price-black">
                            300万元
                        </div>
                    </li>
                    <li style={{display:this.state.familyShow}}>
                        <div className="plans-clause-left">
                            <h6>免赔额豁免</h6>
                            <p>多人投保共享1万元免赔额</p>
                        </div>
                        <div className="plans-clause-price-black">
                        </div>
                    </li>
                    <li style={{display:this.state.familyShow}}>
                        <div className="plans-clause-left">
                            <h6>法律费用</h6>
                            <p>免赔付比例100%</p>
                        </div>
                        <div className="plans-clause-price-black">
                            6000元
                        </div>
                    </li>
                    <a href="xxx:;">查看保障详情<Icon type='right'/></a>
                </ul>
                </div>
                
            </div>
            {/* </div> */}
        </div>
    }
}
let mapStateToProps = (state)=>{
    return {
      showMainBottom:state.isShowMainBottom
    }
  }
let mapDispatchToProps=(dispatch)=>{
    return {
        changeMainBottom(data){
            dispatch(change_mainbottom(data))
        }
    }
}
Goods=connect(mapStateToProps,mapDispatchToProps)(Goods)
export default Goods;