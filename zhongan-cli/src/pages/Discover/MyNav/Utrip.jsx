import React,{Component} from 'react'
import {connect} from 'react-redux'

// function Utrip(){
//     console.log('navsabc',this.props.navsabc)
//     return <div>
//         {
//             this.props.navsabc.map(item=><img key={item.name} src={item.imgurl} alt={item.name}/>)
//         }
        
//     </div>
// }
// class定义，extends继承
class Utrip extends Component{
    constructor(){
        super();

        this.state = {}
    }
    render(){
        // console.log('navsabc',this.props.navsabc)
        let Utrippic = this.props.navsabc[1].imgurl
        return(
            <div>
                <img src={Utrippic} alt="Utrip" style={{width:'100%',padding:'10px 20px 0px 20px'}}/>
            </div>
        )
    }
}

let mapStateToProps=(state)=>{
    return {
        navsabc:state.navs
    }
}

Utrip = connect(mapStateToProps)(Utrip)



export default Utrip;