function formatDate(date, fmt) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
}

function padLeftZero(str) {
    return ('00' + str).substr(str.length);
}


function getNowFormatDate() {
    var date = new Date(); //获取时间
    var year = date.getFullYear(); //年
    var month = date.getMonth() + 1; //月
    var strDate = date.getDate(); //日
    var hours = date.getHours(); //时
    var minutes = date.getMinutes(); //分
    var second = date.getSeconds(); //秒
    var currentdate = year + '-' +
        (month > 9 ? month : '0' + month) + '-' +
        (strDate > 9 ? strDate : '0' + strDate) + ' ' +
        (hours > 9 ? hours : '0' + hours) + ':' +
        (minutes > 9 ? minutes : '0' + minutes) + ':' +
        (second > 9 ? second : '0' + second);

    console.log(currentdate)
    return currentdate;
}

export default { formatDate, getNowFormatDate }