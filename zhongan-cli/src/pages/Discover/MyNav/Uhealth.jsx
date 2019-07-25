import React,{Component} from 'react'
import {connect} from 'react-redux'

// function Uhealth(){
//     console.log('navsabc',this.props.navsabc)
//     return <div>
//         {
//             this.props.navsabc.map(item=><img key={item.name} src={item.imgurl} alt={item.name}/>)
//         }
        
//     </div>
// }
// class定义，extends继承
class Uhealth extends Component{
    constructor(){
        super();

        this.state = {}
    }
    render(){
        // console.log('navsabc',this.props.navsabc)
        let Uhealthpic = this.props.navsabc[0].imgurl
        return(
            <div style={{padding:'10px 20px 0px 20px',height:'114px'}}>
                <img src={Uhealthpic} alt="Uhealth" style={{width:'100%'}}/>
            </div>
        )
    }
}

let mapStateToProps=(state)=>{
    return {
        navsabc:state.navs
    }
}

Uhealth = connect(mapStateToProps)(Uhealth)



export default Uhealth;