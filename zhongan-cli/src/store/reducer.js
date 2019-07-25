// import store from "./index";
import {CHANGE_BANNER} from './Actions'

//初始化仓库
let initState = {
    username:'guo',
    navcolor:'#67D1DE'
}

//仓库reducer
let reducer = (state=initState,action)=>{
    switch(action.type){
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