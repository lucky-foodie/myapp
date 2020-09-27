import axios from 'axios';
import Vue from 'vue';
import taxios from '@/concise/modules/axios.js';
import tz from '@/concise/modules/router.js';
/* 未装qs，如果post后台接收不到用qs转换传输 */
// axios.defaults.baseURL = '/Api'
// axios.defaults.baseURL = 'http://192.168.0.105:8080/'
/* 配置请求头 */
// axios.defaults.headers.post['Content-type'] = 'application/x-www-form-urlencoded'
// axios.defaults.headers.get['Content-type'] = 'application/x-www-form-urlencoded'
// axios.defaults.headers.get['X-Requested-With'] = 'xmlhttprequest'
axios.defaults.headers.post['Content-Type'] = 'application/json';

// axios.defaults.headers.post = {
//     "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
// }
axios.interceptors.request.use(config => {
  // config.headers.common.token = localStorage.getItem('token');
  config.headers.common['token'] = '2e4a56c3-c437-446b-8268-1cc2259cb240';
  return config;
});
export default {
  taxios,
};
/* 配置请求头 */
Vue.prototype.$task = taxios;
Vue.prototype.$troute = tz;
