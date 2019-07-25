import React from 'react'
import '../../scss/Gcomponent.scss'
class Treasure extends React.Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return <div className='g_blank'>
        <div className="g_twotab">
            <span>固定资产</span>
            <span>资金安全</span>
            <span>家人保障</span>
            
        </div>
        <ul className='g_baoxian'>
            <h3>固定资产</h3>
            <li>
                <img src="https://static.zhongan.com/website/assembler/search/1555059208812_电信诈骗资金损失险.png" alt=""/>
                <div className="miaoshu">
                    <h5>电信诈骗资金损失险</h5>
                    <p>责保障电话和短信诈骗造成的资金损失</p>
                    <p><span>￥</span><span>9.9</span>   起</p>
                </div>
            </li>
        </ul>
    </div>
    }
}

export default Treasure;