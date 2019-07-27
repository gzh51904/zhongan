import React,{Component} from 'react';
import NewsTop from './components/NewsTop/newsTop';
import NewsBody from './components/NewsBody/NewsBody';
import "./iconfont/iconfont.css";
import './News.scss';

class Order extends Component{
    render(){
        return <div 
            className='News'            
        >
            <NewsTop/>
            <NewsBody/>
        </div>
    }
}

export default Order;