import React from "react";
import './NewsDetail.scss';
import api from '../../../../api';
import { Player, BigPlayButton } from 'video-react';
import {connect} from 'react-redux';
import {change_bottom_show} from "../../../../store/Actions";

class NewsDetail extends React.Component {
    constructor() {
        super();
        this.state = {
            video: false,
            List: [],
            VideoList: []
        }
        this.gotoNews = this.gotoNews.bind(this);
        this.goto = this.goto.bind(this);
        this.gotoVideo = this.gotoVideo.bind(this);
    }
    componentWillMount() {
        // console.log(this.props,change_bottom_show);
        let {changebottom} = this.props;
        changebottom(false);
        let ListId = window.location.hash.split('?')[1].split('&')[0].slice(-1);
        let articleId = window.location.hash.split('?')[1].split('&')[1].split('=')[1];
        api.get('http://47.94.157.240:2017/FeHelper', {
            params: {
                type: ListId
            }
        }).then(res => {
            // console.log(res);
            let list = res.data[0].list.filter(item => item.articleId === articleId);
            // console.log(list);
            this.setState({
                List: list,
                VideoList: res.data[0].list.filter(item => item.video)
            })
            // console.log('挂载后', this.state.List); console.log('aa', this.state.List[0].title);
        })
    }
    componentWillUnmount(){
        let {changebottom} = this.props;
        changebottom(true);
    }
    gotoNews() {
        this.props.history.push('/news')
    }
    goto(path) {
        this.props.history.push({ pathname: '/news/mynews' + path })
    }
    gotoVideo(id) {
        // console.log(this.props);
        let ListId = window.location.hash.split('?')[1].split('&')[0].slice(-1);
        // console.log(ListId ,id,this.props);
        this.props.history.push({
            pathname: '/news/newsdetail',
            params: '',
            search: '?ListId=' + ListId + '&articleId=' + id
        })
        window.location.reload();
    }
    render() {
        let List = this.state.List;
        return (
            <div style={{ height: '100%' }}>
                {
                    List.map(item => {
                        let da = new Date();
                        let date = da.toLocaleDateString();
                        let tim = da.toLocaleTimeString();
                        // console.log(tim);
                        return (
                            <div key={item.articleId} className='NewsDetailBox'>
                                <div className='NewsDetailTop'>
                                    <h1>
                                        {this.state.List[0].title}
                                        <i className='iconfont icon-xiazai6' onClick={this.gotoNews}></i>
                                        <i className='iconfont icon-zhuanfa' onClick={this.gotoNews}></i>
                                    </h1>
                                    {item.video ? <div className="NewsDetailImg">
                                        <Player src={item.videoUrl} poster={item.poster}>
                                            <BigPlayButton position="center" />
                                        </Player>
                                    </div> : <div className="NewsDetailImg">
                                            <img src={item.coverImage} alt="" />
                                        </div>}
                                </div>
                                <div className='NewsDetailBody'>

                                    {/* {item.video ? <div className="NewsDetailImg">
                                        <Player src={item.videoUrl} poster={item.poster}>
                                            <BigPlayButton position="center" />
                                        </Player>
                                    </div> : <div className="NewsDetailImg">
                                            <img src={item.coverImage} alt="" />
                                        </div>} */}

                                    <p className='guanchashi'>
                                        {item.origin === '热点观察室' ? <span><i className='iconfont icon-miaozhun'></i>{item.origin}</span> : null}
                                        {item.origin === '勤劳的搬运工' ? <span><i className='iconfont icon-nanbaobao'></i>{item.origin}</span> : <span><i className='zatoutiao'></i>{item.origin}</span>}
                                        <span><i className='iconfont icon-pinglun'></i>2123</span>
                                        <span><i className='iconfont icon-chakan'></i>{item.labels[0].labelId}</span>
                                        <span><i className='iconfont icon-zhuanfa1'></i>223</span>
                                    </p>

                                    <h2>{item.title}</h2>
                                    <p className='detailTip'>
                                        <span>{date}</span>
                                        <span>{tim}</span>
                                        <span>|</span>
                                        <span>{item.labels[0].labelId}次播放</span>
                                    </p>

                                    <p className='detailLabel'>
                                        <span>减脂</span>
                                        <span>减重</span>
                                    </p>

                                    <div className='MetionVideo'>
                                        <h3>相关视频</h3>
                                        <ul>
                                            {
                                                this.state.VideoList.map(item => {
                                                    return (
                                                        <li className='VideoItem' key={item.articleId} onClick={() => { this.gotoVideo(item.articleId) }}>
                                                            <div>
                                                                <img src={item.coverImage} alt="" />
                                                            </div>
                                                            <p>{item.title}</p>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>

                                    <div className='detailComment'>
                                        <h3>评论</h3>
                                        <img src={require("../../img/mynews_comment.png")} alt="" />
                                    </div>

                                </div>
                                <div className='NewsDetailInput'>
                                    <div className='DetailInput'>
                                        <i className='iconfont icon-shuxiebianji'></i>
                                        <input type="text"/>
                                    </div>
                                    <div className='DetailInputBtn'>
                                        <span>
                                            <i className='iconfont icon-pinglun'></i>
                                            <span>评论</span>
                                        </span>
                                        <span>
                                            <i className='iconfont icon-like'></i>
                                            <span>喜欢</span>
                                        </span>
                                        <span>
                                            <i className='iconfont icon-hongbao'></i>
                                            <span>分享赚积分</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

let mapDispatchToProps = (dispatch,ownprops)=>{
    return{
        changebottom:(flg)=>{
            dispatch(change_bottom_show(flg))
        }
    }
}
NewsDetail = connect(()=>{
    return{

    }
},mapDispatchToProps)(NewsDetail)

export default NewsDetail;