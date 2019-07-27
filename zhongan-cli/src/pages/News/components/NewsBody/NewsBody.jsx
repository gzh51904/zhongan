import React from "react";
import './NewsBody.scss';
import { Route, Redirect, Switch, withRouter } from "react-router-dom";

import Advance from "../public/Advance/Advance";
import Video from "../public/Video/Video";
import Course from "../public/Course/Course";
import Insurance from "../public/Insurance/Insurance";
import Health from "../public/Health/Health";
import Car from "../public/Car/Car";
import Travel from "../public/Travel/Travel";
import Finance from "../public/Finance/Finance";

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
                List:AdvList,
                showban:true
            }, {
                name: 'Video',
                path: '/video',
                title: '视频',
                component: Video,
                List:VideoList
            }, {
                name: 'Course',
                path: '/course',
                title: '课程',
                component: Course,
                List:CourseList
            }, {
                name: 'Insurance',
                path: '/insurance',
                title: '保险',
                component: Insurance,
                List:VideoList
            }, {
                name: 'Health',
                path: '/health',
                title: '健康',
                component: Health,
                List:CarList
            }, {
                name: 'Car',
                path: '/car',
                title: '汽车',
                component: Car,
                List:CourseList
            }, {
                name: 'Travel',
                path: '/travel',
                title: '出行',
                component: Travel,
                List:CarList
            }, {
                name: 'Finance',
                path: '/finance',
                title: '金融',
                component: Finance,
                List:AdvList
            }],
            actNav: 'Advance'
        }
        this.changeActNav = this.changeActNav.bind(this)
    }
    changeActNav(name) {
        this.setState({ actNav: name });
        let path = this.state.navs.filter(item=>item.name===name)[0].path;
        let List = this.state.navs.filter(item=>item.name===name)[0].List;
        let showban = this.state.navs.filter(item=>item.name===name)[0].showban;
        this.props.history.push({
            pathname:'/news'+path,
            params:{
                List:List,
                showban:showban
            }
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
                                    <Route path={ParentPath+item.path} component={Advance} key={item.name}/>
                                )
                            })
                        }
                        <Route path={'/news/404'} render={() => <div>页面不存在！</div>} />
                        <Redirect from="/news/" to="/news" exact/>
                        <Redirect from="/news/*" to="/news/404" />
                    </Switch>
                </div>
            </div>
        )
    }
}
NewsBody = withRouter(NewsBody);

export default NewsBody;