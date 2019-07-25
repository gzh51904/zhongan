import React from 'react'
import '../../scss/Gcomponent.scss'
class Penates extends React.Component{
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
            <h3>资金安全</h3>
            <li>
                <img src="https://static.zhongan.com/website/assembler/search/1555059269789_银行卡盗刷险.png" alt=""/>
                <div className="miaoshu">
                    <h5>银行卡盗刷险</h5>
                    <p>承保银行账户资金安全</p>
                    <p><span>￥</span><span>5</span>   起</p>
                </div>
            </li>
        </ul>
    </div>
    }
}

export default Penates;
