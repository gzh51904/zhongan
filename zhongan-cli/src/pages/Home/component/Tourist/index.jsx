import React from 'react'
import '../../scss/Gcomponent.scss'
class Tourist extends React.Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return <div className='g_blank'>
        <div className="g_twotab">
            <span>空中飞行</span>
            <span>境外旅游</span>
        </div>
        <ul className='g_baoxian'>
            <h3>境外旅游</h3>
            <li>
                <img src="https://open-cdn.zhongan.com/dm/assembler/4052f79d0fc03696ab5a4b535190ffff.png" alt=""/>
                <div className="miaoshu">
                    <h5>陪你等航班延误险</h5>
                    <p>提前一天购买 最高保72元</p>
                    <p><span>￥</span><span>29.9</span>   起</p>
                </div>
            </li>
            <li>
                <img src="https://open-cdn.zhongan.com/dm/assembler/586c48f7ed27bc01c29afee437bd811e.png" alt=""/>
                <div className="miaoshu">
                    <h5>全球航空意外险</h5>
                    <p>1次购买全年无忧，覆盖全球所有航班</p>
                    <p><span>￥</span><span>38</span>   起</p>
                </div>
            </li>
        </ul>
    </div>
    }
}

export default Tourist;