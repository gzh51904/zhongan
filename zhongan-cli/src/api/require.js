import axios from "axios";

let instance = axios.create({
    baseURL:'http://47.94.157.240:2017'
})

const get = (url='',params={})=>{
    return instance.get(url,params)
}
const post = (url='',params={},data={})=>{
    return instance.post(url,params,data)
}

export default {get,post}