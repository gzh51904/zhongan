import React,{Component} from 'react'
import {connect} from 'react-redux'

// function Ucarowner(){
//     console.log('navsabc',this.props.navsabc)
//     return <div>
//         {
//             this.props.navsabc.map(item=><img key={item.name} src={item.imgurl} alt={item.name}/>)
//         }
        
//     </div>
// }
// class定义，extends继承
class Ucarowner extends Component{
    constructor(){
        super();

        this.state = {}
    }
    render(){
        // console.log('navsabc',this.props.navsabc)
        let Ucarownerpic = this.props.navsabc[3].imgurl
        return(
            <div>
                <img src={Ucarownerpic} alt="Ucarowner" style={{width:'100%',padding:'10px 20px 0px 20px'}}/>
            </div>
        )
    }
}

let mapStateToProps=(state)=>{
    return {
        navsabc:state.navs
    }
}

Ucarowner = connect(mapStateToProps)(Ucarowner)



export default Ucarowner;