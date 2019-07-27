import React from "react";

import { Carousel } from "antd";
import './Advance.scss';
import NewsItem from '../../NewsItem/NewsItem';
import AdvList from '../../../data/FeHelper.json';

let imgList = [{
    imgurl: require('../../../img/Advance/ban1.png'),
    title: '失眠多梦睡不好觉？你可能是得了病！',
    id: 1,
    icon: 'iconfont icon-icon3'
}, {
    imgurl: require('../../../img/Advance/ban2.png'),
    title: '全网首发！尊享e生城市版上线！',
    id: 2,
    icon: 'iconfont icon-zhangdan'
}, {
    imgurl: require('../../../img/Advance/ban3.jpg'),
    title: '保险大咖手把手教你买保险',
    id: 3,
    icon: 'iconfont icon-bofang'
}, {
    imgurl: require('../../../img/Advance/ban4.jpg'),
    title: '甲状腺也可投保！！',
    id: 4,
    icon: 'iconfont icon-icon3'
}]

// imgList.map(item=>{
//     item.imgurl = require('../../../'+item.imgurl);
//     return item
// })

class Advance extends React.Component {
    render() {
        // console.log('Adv',this.props)
        // let List = this.props.location.params.List.list;
        // let showban = this.props.location.params.showban?true:false;
        let showban = true;
        return (
            <div >
                {showban?<div className='NewsBan'>
                    <Carousel >
                        {
                            imgList.map(item => {
                                return (
                                    <img key={item.id} src={item.imgurl} alt="" />
                                )
                            })
                        }
                    </Carousel>
                </div>:null}
                <NewsItem NewsList={AdvList}></NewsItem>
            </div>
        )
    }
}

export default Advance;