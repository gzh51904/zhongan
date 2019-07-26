import React,{Component} from 'react';
import './Goods.scss'
import {Icon} from 'antd'

class Goods extends Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return <div className='goods_bg'>
            <div className="good_top"><Icon type='left' style={{position:'absolute',fontSize:'1.75rem',top:'.85rem',left:'1rem',color:'rgb(51, 138, 209)'}} />尊享一生2019版</div>
            <div className="good_img">
                <img src="https://open-cdn.zhongan.com/dm/assembler/6a84eac653401dc265337a6c4ed0aff3.jpg" alt=""/>
                <img src="https://open-prd.oss-cn-hzfinance.aliyuncs.com/1554802863720.png" alt=""/>
            </div>        
             <div className="mod-details">
                 <h2>尊享e生2019版<span>医疗险</span></h2>
                 <p><span>保障期限:1年</span><span>投保年龄:30天至60周岁</span></p>
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
                <h2>保障详情</h2>
                <div className="good_plan">
                    <a href="xxx:;">
                        <p>个人版</p>
                        <span>被保人数不限</span>
                    </a>
                    <p></p>
                    <a href="xxx:;">
                        <p>家庭版</p>
                        <span>被保人数需>2</span>
                    </a>
                </div>
                <ul className='plans-clause'>
                    <li>
                        
                    </li>
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
        </div>
    }
}

export default Goods;