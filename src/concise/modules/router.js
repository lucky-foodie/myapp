import router from '@/router';

function query(url, data) {
    var ta = router.app._route.fullPath;

    if ('/' + url == ta) {
        console.log('不可重复跳转');
    } else {
        router.push({
            path: '/' + url,
            query: {
                tdata: JSON.stringify(data),
            },

        });
    }
}

function params(url, data) {
    var ta = router.app._route.fullPath;
    if ('/' + url == ta) {
        console.log('不可重复跳转');
    } else {
        router.push({
            path: '/' + url,
            param: {
                tdata: JSON.stringify(data),
            },
        });
    }
}

function routequery() {
    console.log(router.app._route.query.tdata);
    var Data = JSON.parse(router.app._route.query.tdata);
    return Data;
}

function routeparam() {
    console.log(router.app._route.query.tdata);
    var Data = JSON.parse(router.app._route.param.tdata);
    return Data;
}



export default {
    query,
    params,
    routequery,
    routeparam,
};