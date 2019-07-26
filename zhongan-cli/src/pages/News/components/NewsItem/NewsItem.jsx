import React from 'react';

import './NewsItem.scss';
// import defaultList from '../../data/FeHelper.json';

class NewsItem extends React.Component {
    render() {
        let List = this.props.NewsList.list;
        return <ul style={{ padding: '0.625rem', background: '#fff' }}>
            {
                List.map(item => {
                    console.log(item.labels[0].labelId)
                    return (
                        <li className='NewsItem' key={item.articleId}>
                            <figure className='NewsItemBox'>
                                <figcaption className='NewsItemLeft'>{item.title}</figcaption>
                                <img className='NewsItemRight' src={item.coverImage} alt="" />
                                <p className='guanchashi'>热点观察室
                                    <span><i className='iconfont icon-pinglun'></i>2123</span>
                                    <span><i className='iconfont icon-chakan'></i>{item.labels[0].labelId}</span>
                                    <span><i className='iconfont icon-zhuanfa1'></i>223</span>
                                </p>
                            </figure>

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