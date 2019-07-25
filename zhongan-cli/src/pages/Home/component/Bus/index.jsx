import React from 'react'
import '../../scss/Gcomponent.scss'
class Bus extends React.Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return <div className='g_blank'>
        <div className="g_twotab">
            <span>二手汽车</span>

        </div>
        <ul className='g_baoxian'>
            <h3>汽车</h3>
            <li>
                <img src="https://open-cdn.zhongan.com/dm/assembler/ea514c5f763b24fabd6be714456d61d4.png" alt=""/>
                <div className="miaoshu">
                    <h5>保骉车险</h5>
                    <p>众安平安联合车险 | 先赔付再修车</p>
                    <p><span></span><span>立即询价</span></p>
                </div>
            </li>
        </ul>
    </div>
    }
}

export default Bus;