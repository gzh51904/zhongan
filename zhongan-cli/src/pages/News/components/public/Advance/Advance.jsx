import React from "react";

import { Carousel } from "antd";
import './Advance.scss';
import NewsItem from '../../NewsItem/NewsItem';
import AdvList from '../../../data/FeHelper.json';

import "../../../../../../node_modules/video-react/dist/video-react.css";

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





class Advance extends React.Component {

    render() {
        // let List = this.props.location.params ? this.props.location.params.List : AdvList;
        let showban = this.props.location.pathname.slice(6);
        let flg = (showban) => {
            switch (showban) {
                case 'advance': return true
                default: return false
            }
        }
        // console.log('List', showban, flg(showban),this.props)
        return (
            <div >
                {flg(showban) ? <div className='NewsBan'>
                    <Carousel autoplay>
                        {
                            imgList.map(item => {
                                return (
                                    <img key={item.id} src={item.imgurl} alt="" />
                                )
                            })
                        }
                    </Carousel>
                </div> : null}
                {/* <div className="NewsVideo"><Player src="http://oss-cn-hzfinance.aliyuncs.com/open-prd/2ffe6c8d-a5c2-4857-a059-c8348025e568.mp4" poster="https://open-cdn.zhongan.com/dm/assembler/6a84eac653401dc265337a6c4ed0aff3.jpg">
                    <BigPlayButton position="center" />
                </Player></div> */}
                {/* <video src="http://oss-cn-hzfinance.aliyuncs.com/open-prd/2ffe6c8d-a5c2-4857-a059-c8348025e568.mp4" muted="muted" autoPlay={false} controls loop></video> */}
                <NewsItem NewsList={AdvList} props={this.props}></NewsItem>
            </div>
        )
    }
}

export default Advance;