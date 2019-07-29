import React from 'react';
import './NewsItem.scss';
import api from '../../../../api';
import { Player, BigPlayButton } from 'video-react';
class NewsItem extends React.Component {
    constructor() {
        super();
        this.state = {
            List: []
        }
        this.goto = this.goto.bind(this);
    }
    componentWillMount() {
        //按点赞数排序
        let b = (obj1, obj2) => {
            let o1 = Number(obj1.labels[0].labelId);
            let o2 = Number(obj2.labels[0].labelId);
            if (o1 < o2) { return 1 }
            else if (o1 > o2) { return -1 }
            else return 0
        }
        let ListId = window.location.hash.split('=')[1];
        api.get('http://47.94.157.240:2017/FeHelper', {
            params: {
                type: ListId
            }
        }).then(res => {
            let path = window.location.hash.replace(/(#\/\w+)(\/\w+)(\?\w+=\w+)/, '$2');
            this.setState({
                List: res.data[0].list.sort(b)
            })
            //路径为视频时，过滤出数据列表中的视频
            if (path === '/video') {
                this.setState({
                    List: res.data[0].list.sort(b).filter(item => item.video)
                })
            }
        })
    }
    //取消异步操作
    componentWillUnmount() {
        this.setState = (state, callback) => {
            return
        }
    }
    goto(id){
        // console.log(this.props);
        // console.log(window.location.hash.slice(-1),id);
        let ListId = window.location.hash.slice(-1);
        this.props.props.history.push({
            pathname:'/news/newsdetail',
            params:'',
            search: '?ListId=' + ListId + '&articleId=' + id
        })
    }
    render() {
        let List = this.state.List;
        return <ul style={{ padding: '0.625rem', background: '#fff' }}>
            {
                List.map(item => {
                    return (
                        <li className='NewsItem' key={item.articleId} onClick={()=>{this.goto(item.articleId)}}>
                            {item.video ? <div className="NewsVideo">
                                <h1>【{item.labels[0].labelName}】{item.title}</h1>
                                <Player src={item.videoUrl} poster={item.poster}>
                                    <BigPlayButton position="center" />
                                </Player>
                                <p className='guanchashi'>
                                    {item.origin === '热点观察室' ? <span><i className='iconfont icon-miaozhun'></i>{item.origin}</span> : null}
                                    {item.origin === '勤劳的搬运工' ? <span><i className='iconfont icon-nanbaobao'></i>{item.origin}</span> : <span><i className='zatoutiao'></i>{item.origin}</span>}
                                    <span><i className='iconfont icon-pinglun'></i>2123</span>
                                    <span><i className='iconfont icon-chakan'></i>{item.labels[0].labelId}</span>
                                    <span><i className='iconfont icon-zhuanfa1'></i>223</span>
                                </p>
                            </div> : <figure className='NewsItemBox'>
                                    <figcaption className='NewsItemLeft'>{item.title}</figcaption>
                                    <img className='NewsItemRight' src={item.coverImage} alt="" />
                                    <p className='guanchashi'>
                                        {item.origin === '热点观察室' ? <span><i className='iconfont icon-miaozhun'></i>{item.origin}</span> : null}
                                        {item.origin === '勤劳的搬运工' ? <span><i className='iconfont icon-nanbaobao'></i>{item.origin}</span> : <span><i className='zatoutiao'></i>{item.origin}</span>}
                                        <span><i className='iconfont icon-pinglun'></i>2123</span>
                                        <span><i className='iconfont icon-chakan'></i>{item.labels[0].labelId}</span>
                                        <span><i className='iconfont icon-zhuanfa1'></i>223</span>
                                    </p>
                                </figure>}


                            <div className="reping">
                                <h1>
                                    <span><i className='iconfont icon-remen'></i>热门</span>
                                    <span><i className='iconfont icon-like'></i>{item.labels[0].labelId}</span>
                                </h1>
                                <p>1332***4980:<span>{item.origin}</span></p>
                            </div>

                        </li>)

                })
            }
        </ul>
    }
}

export default NewsItem;