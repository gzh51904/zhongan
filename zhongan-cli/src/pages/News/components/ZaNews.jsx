import React,{Component} from 'react';
import NewsTop from '../components/NewsTop/newsTop';
import NewsBody from '../components/NewsBody/NewsBody';


class ZaNews extends Component{
    render(){
        return <div className='News'>
            <NewsTop props={this.props}/>
            <NewsBody/>        
        </div>
    }
}
export default ZaNews;