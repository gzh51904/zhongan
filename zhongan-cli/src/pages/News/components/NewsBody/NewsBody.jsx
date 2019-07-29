import React from "react";
import './NewsBody.scss';
import { Route, Redirect, Switch, withRouter } from "react-router-dom";

import Advance from "../public/Advance/Advance";
import Course from "../public/Course/Course";


import AdvList from '../../data/FeHelper.json';
import VideoList from '../../data/FeHelper2.json';
import CourseList from '../../data/FeHelper3.json';
import CarList from '../../data/FeHelper4.json';


class NewsBody extends React.Component {
    constructor() {
        super();
        this.state = {
            navs: [{
                name: 'Advance',
                path: '/advance',
                title: '推荐',
                component: Advance,
                List: AdvList,
                ListId: 1,
                showban: true
            }, {
                name: 'Video',
                path: '/video',
                title: '视频',
                component: Advance,
                List: VideoList,
                ListId: 3
            }, {
                name: 'Course',
                path: '/course',
                title: '课程',
                component: Course,
                List: CourseList,
                ListId: 2
            }, {
                name: 'Insurance',
                path: '/insurance',
                title: '保险',
                component: Advance,
                List: VideoList,
                ListId: 1
            }, {
                name: 'Health',
                path: '/health',
                title: '健康',
                component: Advance,
                List: CarList,
                ListId: 4
            }, {
                name: 'Car',
                path: '/car',
                title: '汽车',
                component: Advance,
                List: CourseList,
                ListId: 3
            }, {
                name: 'Travel',
                path: '/travel',
                title: '出行',
                component: Advance,
                List: CarList,
                ListId: 2
            }, {
                name: 'Finance',
                path: '/finance',
                title: '金融',
                component: Advance,
                List: AdvList,
                ListId: 1
            }],
            actNav: 'Advance'
        }
        this.changeActNav = this.changeActNav.bind(this)
    }
    componentWillMount() {
        //刷新高亮
        let path = this.props.location.pathname.replace(/(\/)(\w+)(\/)(\w+)/, '$3$4');
        if (path === '/news') {
            this.setState({
                actNav: 'Advance'
            })
            this.props.history.push({
                pathname: '/news/advance' ,
                params: {
                    List: 1
                },
                search: '?ListId=1'
            });
        } else if (path === '/mynews' || path === '/404') {
            return false
        } else {
            let actname = this.state.navs.filter(item => item.path === path)[0].name;
            this.setState({
                actNav: actname
            })
        }
    }
    //切换高亮
    changeActNav(name) {
        this.setState({ actNav: name });
        let path = this.state.navs.filter(item => item.name === name)[0].path;
        let List = this.state.navs.filter(item => item.name === name)[0].List;
        let ListId = this.state.navs.filter(item => item.name === name)[0].ListId;
        this.props.history.push({
            pathname: '/news' + path,
            params: {
                List: List
            },
            search: '?ListId=' + ListId
        });
    }
    render() {
        let ParentPath = this.props.match.path;
        return (
            <div className='NewsBody'>
                <div className='NewsNav'>
                    <ul className='NewsNav_ul'>
                        {
                            this.state.navs.map(item => {
                                return (
                                    <li
                                        className={this.state.actNav === item.name ? 'actNavLi NewsNavItem' : 'NewsNavItem'}
                                        key={item.name}
                                        onClick={() => { this.changeActNav(item.name) }}>
                                        <a
                                            href='aa:;'
                                            // href={'/#' + ParentPath + "" + item.path}
                                            className={this.state.actNav === item.name ? 'actNav' : null}>
                                            {item.title}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="NewsRender">
                    <Switch>
                        {
                            this.state.navs.map(item => {
                                return (
                                    <Route path={ParentPath + item.path} component={item.component} key={item.name} />
                                )
                            })
                        }
                        <Route path={'/news/404'} render={() => <div>页面不存在！</div>} />
                        {/* <Redirect from="/news/" to="/news/advance" exact /> */}
                        <Redirect from="/news/*" to="/news/404" />
                    </Switch>
                </div>
            </div>
        )
    }
}
NewsBody = withRouter(NewsBody);

export default NewsBody;