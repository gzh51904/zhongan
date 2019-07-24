import React,{Component} from 'react';

class Mine extends Component{
    render(){
        return <div>
            Mine {this.props.match.params.id}
        </div>
    }
}

export default Mine;