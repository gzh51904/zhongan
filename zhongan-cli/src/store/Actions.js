export const CHANGE_BANNER = 'CHANGE_BANNER'
export const CHANGE_MAINBOTTOM = 'CHANGE_MAINBOTTOM'
export const CHANGE_LOGIN_STATUS = 'CHANGE_LOGIN_STATUS'



export function change_banner(data){
    return{
        type:CHANGE_BANNER,
        payload:data
    }
}
export function change_mainbottom(data){
    return{
        type:CHANGE_MAINBOTTOM,
        payload:data
    }
}
export function change_login_status(data){
    return {
        type:CHANGE_LOGIN_STATUS,
        payload:data
    }
}

export default {
    change_banner,
    change_mainbottom,
    change_login_status
}