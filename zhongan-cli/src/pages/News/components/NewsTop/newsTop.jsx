import React from "react";
import './NewsTop.scss';

class NewsTop extends React.Component {
    constructor(){
        super();
        this.gotoNews = this.gotoNews.bind(this);
    }
    gotoNews(){
        // console.log(this.props);
        let history = this.props.props.history;
        history.push({
            pathname:'/news/mynews'
        })
    }
    render() {
        return (
            <div className='NewsTop'>
                <i className='MyNews iconfont icon-wodeqian' onClick={this.gotoNews}></i>
                <h1>众安头条</h1>
                <i className='NewsPacket iconfont icon-hongbao'></i>
            </div>
        )
    }
}
export default NewsTop;