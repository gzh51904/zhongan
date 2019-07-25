import {createStore} from 'redux'
import reducer from './reducer.js'

//定义仓库
let store = createStore(reducer)

export default store;