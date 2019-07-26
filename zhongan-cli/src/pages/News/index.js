import React,{Component} from 'react';
import NewsTop from './components/NewsTop/newsTop';
import NewsBody from './components/NewsBody/NewsBody';
import "./iconfont/iconfont.css";

class Order extends Component{
    render(){
        return <div 
            className='News_Top'
            style={{background:'rgb(242, 242, 242)'}}
        >
            <NewsTop/>
            <NewsBody/>
        </div>
    }
}

export default Order;