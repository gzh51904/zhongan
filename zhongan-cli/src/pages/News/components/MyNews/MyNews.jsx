import React from "react";
import './MyNews.scss';
import { Route, Redirect, Switch } from "react-router-dom";

import Course from './pages/course';
import Comment from './pages/comment';
import PK from './pages/pk';
import Video from './pages/video';

class MyNews extends React.Component {
    constructor() {
        super();
        this.state = {
            navs: [{
                title: '我的评论',
                path: '/mycomment',
                name: 'MyComment',
                component:Course
            }, {
                title: '我的PK',
                path: '/mypk',
                name: 'MyPK',
                component:Comment
            }, {
                title: '我的课程',
                path: '/mycourse',
                name: 'MyCourse',
                component:PK
            }, {
                title: '我的视频',
                path: '/myvideo',
                name: 'MyVideo',
                component:Video
            }]
        }
        this.gotoNews = this.gotoNews.bind(this);
        this.goto = this.goto.bind(this);
    }
    gotoNews() {
        this.props.history.push('/news')
    }
    goto(path){
        this.props.history.push({pathname:'/news/mynews'+path})
    }
    render() {
        let ParentPath = this.props.match.path;
        return (
            <div className='MyNewsBox'>
                <div className='MyNewsTop'>
                    <h1>我的头条<i className='iconfont icon-xiazai6' onClick={this.gotoNews}></i></h1>
                </div>
                <div className='MyNewsBody'>
                    <ul>
                        {
                            this.state.navs.map(item => {
                                return (
                                    <li key={item.name} onClick={()=>{this.goto(item.path)}}>{item.title}</li>
                                )
                            })
                        }
                    </ul>
                    <div className="MyNewsRender">
                        <Switch>
                            {
                                this.state.navs.map(item => {
                                    return (
                                        <Route path={ParentPath + item.path}  component={item.component} key={item.name} />
                                    )
                                })
                            }
                            <Route path={'/news/mynews/404'} render={() => <div>页面不存在！</div>} />
                            <Redirect from="/news/mynews" to="/news/mynews/mycomment" exact />
                            <Redirect from="/news/mynews/*" to="/news/mynews/404" />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyNews;