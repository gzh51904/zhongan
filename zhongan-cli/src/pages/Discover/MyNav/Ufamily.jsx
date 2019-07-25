import React,{Component} from 'react'
import {connect} from 'react-redux'

// function Ufamily(){
//     console.log('navsabc',this.props.navsabc)
//     return <div>
//         {
//             this.props.navsabc.map(item=><img key={item.name} src={item.imgurl} alt={item.name}/>)
//         }
        
//     </div>
// }
// class定义，extends继承
class Ufamily extends Component{
    constructor(){
        super();

        this.state = {}
    }
    render(){
        // console.log('navsabc',this.props.navsabc)
        let Ufamilypic = this.props.navsabc[2].imgurl
        return(
            <div style={{padding:'10px 20px 0px 20px',height:'114px'}}>
                <img src={Ufamilypic} alt="Ufamily" style={{width:'100%'}}/>
            </div>
        )
    }
}

let mapStateToProps=(state)=>{
    return {
        navsabc:state.navs
    }
}

Ufamily = connect(mapStateToProps)(Ufamily)



export default Ufamily;