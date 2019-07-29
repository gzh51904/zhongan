import React,{Component} from 'react';
import MyNews from './components/MyNews/MyNews';
import ZaNews from "./components/ZaNews";
import {withRouter,Route,Switch} from "react-router-dom";
import "./iconfont/iconfont.css";
import './News.scss';

class Order extends Component{
    render(){
        return <div 
            className='News'            
        >
            <Switch>
                <Route path={'/news/mynews'} component={MyNews} />
                <Route path={'/news'} component={ZaNews} />
            </Switch>
        </div>
    }
}
Order = withRouter(Order);
export default Order;