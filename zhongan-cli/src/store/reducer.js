// import store from "./index";
import {CHANGE_BANNER,CHANGE_MAINBOTTOM} from './Actions'

//初始化仓库
let initState = {
    username:'guo',
    navcolor:'#67D1DE',
    isShowMainBottom:'flex',
    navs:[{
        title:"U享健康",
        name:'Uhealth',
        path:'/uhealth',
        // imgurl:'https://dm.zacdn.cn/m/u-member/static/img/package/health/banner_jk.png'
        imgurl:'https://open-cdn.zhongan.com/dm-instrument/images/rinb2afvxptov43kzlsaeatbx4wz43rjph34pxzl.png'
    },{
        title:"U享出行",
        name:'Utrip',
        path:'/utrip',
        // imgurl:'https://dm.zacdn.cn/m/u-member/static/img/package/trip/banner.png'
        imgurl:'https://open-cdn.zhongan.com/dm-instrument/images/h4hyslsi81hlhhgdzfrnr14iimwyp1rzjqczbvlo.png'
    },{
        title:"U享家庭",
        name:'Ufamily',
        path:'/ufamily',
        // imgurl:'https://dm.zacdn.cn/m/u-member/static/img/package/family/banner_family.png'
        imgurl:'https://open-cdn.zhongan.com/dm-instrument/images/s6crp3btewvhfivg62quozcv13yu5oia9flq3fcd.png'
    },{
        title:"U享车主",
        name:'Ucarowner',
        path:'/ucarowner',
        // imgurl:'https://dm.zacdn.cn/m/u-member/static/img/package/auto/banner_auto.png'
        imgurl:'https://open-cdn.zhongan.com/dm-instrument/images/wxfqcmhxhxkrc31msyxx6dmpqyrcux8wronmunhw.png'
    }],
    Carouselimg: [{
        name: 'pic1',
        imgurl: 'https://open-cdn.zhongan.com/dm/assembler/5ff8b5624db4e51e8a3a376a9925dfae.png'
    }, {
        name: 'pic2',
        imgurl: 'https://open-cdn.zhongan.com/dm/assembler/0a9cc7ad9ab358ee9ccdbedefe9343b1.png'
    }, {
        name: 'pic3',
        imgurl: 'https://static.zhongan.com/website/assembler/main/1541383770640_详情页主图.png'
    }, {
        name: 'pic4',
        imgurl: 'https://open-cdn.zhongan.com/dm/assembler/4738fd7d072be38f628ea0b554c657c3.png'
    }],
}

//仓库reducer
let reducer = (state=initState,action)=>{
    switch(action.type){
        case CHANGE_BANNER:
            return {
                ...state,
                navcolor:action.payload
            }
        case CHANGE_MAINBOTTOM:
            return {
                ...state,
                isShowMainBottom:action.payload
            }
        default:
        return state;
    }
}
 


export default reducer;