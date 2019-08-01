/**
 * 设置cookie
 * param name cookie的名称
 * param value cookie的值
 * param day cookie的过期时间
 */
export function setCookie(cname, cvalue, exdays=1) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

/**
 * 获取对应名称的cookie
 * param name cookie的名称
 * returns {null} 不存在时，返回null
 */
export function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) === 0)
            return c.substring(name.length, c.length);
    }
    return "";
}

//清除cookie
export function clearCookie(name) {
    setCookie(name, "", -1);
}