// import store from "./index";
import {CHANGE_BANNER} from './Actions'

//初始化仓库
let initState = {
    username:'guo',
    goodlist:[]
}

//仓库reducer
let reducer = (state=initState,action)=>{
    // store.dispath({type:'ADD_GOOD',payload:{username}})
    // console.log(action)
    switch(action.type){
        // store.dispath({type:'add_to_cart',payload:{id,name,price}})
        case CHANGE_BANNER:
            return {
                ...state,
                navcolor:action.payload
            }
        default:
        return state;
    }
}
 


export default reducer;