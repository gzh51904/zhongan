import React from 'react'
import '../../scss/Gcomponent.scss'
class Parent_child extends React.Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return <div className='g_blank'>
        <div className="g_twotab">
            <span>儿童重疾</span>
            <span>儿童意外</span>
        </div>
        <ul className='g_baoxian'>
            <h3>儿童意外</h3>
            <li>
                <img src="https://static.zhongan.com/website/assembler/search/1556158292665_乐活e生重疾险少儿版.png" alt=""/>
                <div className="miaoshu">
                    <h5>乐活e生重大疾病保险</h5>
                    <p>100种重疾+50种轻症 | 特定疾病保额翻倍</p>
                    <p><span>￥</span><span>50</span>   起</p>
                </div>
            </li>
        </ul>
    </div>
    }
}

export default Parent_child;