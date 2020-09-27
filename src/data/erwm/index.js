/*Ӧ�÷��ع��� 
������pager  1���˳�Ӧ�ã����ص�APP
            0: ������ҳ��һ����ҳ�����û���ϲ�ҳ�棬����APP
*/
var and_js_goback = function(pager) {

    var browser = navigator.userAgent;

    if (browser.indexOf('client-iOS') > 0) {

        and_oc_goBack(pager);

    } else {

        window.ecloud.and_oc_goBack(pager);

    }

};
/*���ñ�����
������barParam
    {
    'title': '���ӱ���',
    'backfun': 'goback()',
    'rightbutton': [{
        'iconurl': ��http://xxxxxx/xxx.png',
        'fun': 'search()'
    }],
    'morebutton': [{
        'iconurl': ��http://xxx./xxxx.png',
        'menu': [{
            'meunname': 'ɸѡ',
            'meunfun': 'filter()'
        }]
    }]
};

*/
var and_js_baronload = function(barParam) {

    var browser = navigator.userAgent;

    if (browser.indexOf('client-iOS') > 0) {

        and_oc_baronload(barParam);

    } else {

        window.ecloud.and_oc_baronload(barParam);

    }

};

/*��ȡ�ֻ���һЩ��Ϣ
������infoCallback   ����app�ص���js��������
                    infoCallback(info) 
                        info��ʽ:
                        {"ip":"IP��ַ";"imei":"imei��";"phone":"�ֻ�����";"terminalName":"�ֻ��ͺ�";"osversion":"�ֻ�ϵͳ�汾"}
   
*/
var and_js_mobileInfo = function(infoCallback) {
    var browser = navigator.userAgent;

    if (browser.indexOf('client-iOS') > 0) {
        and_oc_mobileInfo(infoCallback);
    } else {

        window.ecloud.and_oc_mobileInfo(infoCallback);
    }
};

/*��ȡ����λ��
getLocagtionCallback    ����app�ص���js��������
                        getLocagtionCallback(Locagtion) 
                        Locagtion��ʽ:
                        {"longitude":����ֵ,"latitude":γ��ֵ,"addrStr":"��ǰ����λ������"}
   
*/
var and_js_getLocationLocation = function(getLocagtionCallback) {
    var browser = navigator.userAgent;

    if (browser.indexOf('client-iOS') > 0) {
        and_oc_getLocationLocation(getLocagtionCallback);
    } else {

        window.ecloud.and_oc_getLocation(getLocagtionCallback);
    }
};

/*������ά��ɨ��
scanCallback    ����app�ص���js��������
                        scanCallback(info) 
                        info��ʽ:
                        {"QrCodeInfo":"��ά����Ϣ"}
*/
var and_js_scan = function(scanCallback) {
    var browser = navigator.userAgent;
    if (browser.indexOf('client-iOS') > 0) {
        and_oc_scan(scanCallback);
    } else {

        window.ecloud.and_oc_scan(scanCallback);
    }
};

/*�����û���Ϣҳ��
userid    �û�id��ͳһ�����û�ϵͳ�е��û�id��
*/
var and_js_userInfo = function(userid) {
    var browser = navigator.userAgent;

    if (browser.indexOf('client-iOS') > 0) {
        and_oc_userInfo(userid);
    } else {
        window.ecloud.and_oc_userInfo(userid);
    }
};

/**
 * ˢ��
 */
var and_js_refreshUrl = function() {
    var browser = navigator.userAgent;

    if (browser.indexOf('client-iOS') > 0) {
        and_oc_refreshUrl();
    } else {
        window.ecloud.and_oc_refreshUrl();
    }
};


export default { and_js_scan }