export const CHANGE_BANNER = 'CHANGE_BANNER'


export function change_banner(data){
    return{
        type:CHANGE_BANNER,
        payload:data
    }
}

export default {
    change_banner
}