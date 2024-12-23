//存储数据 setCookie  name 定义的是存储的名称  value存储的是值  daysToLive是有效期为多少天
function setCookie(name, value, daysToLive) {
    let cookie = name + "=" + encodeURIComponent(value);
    if (typeof daysToLive === "number") {
        cookie += "; max-age=" + (daysToLive*24*60*60); // 将天数转换为秒数
    }
    document.cookie = cookie;
}

function getCookie(name) {
    let cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].split("=");
        if (cookie[0] === name) {
            return decodeURIComponent(cookie[1]);
        }
    }
    return "";
}

function clearCookie(cookieName) {
    document.cookie = cookieName + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
export default{
    setCookie,
    getCookie,
    clearCookie
}