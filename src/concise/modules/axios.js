import axios from 'axios';
import qs from 'qs';
import { Toast } from 'vant';
axios.interceptors.response.use(
  res => {
    if (res) {
      Toast.clear();
    }
    return res;
  },
  error => {
    Toast.fail('加载失败');
    return Promise.reject(error);
  },
);

function getp(url, params) {
  return new Promise((resolve, reject) => {
    Toast.loading({
      message: '加载中...',
      duration: 0,
    });
    axios
      .get(url + '?' + decodeURIComponent(qs.stringify(params)))
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      });
  });
}

function postp(url, params) {
  return new Promise((resolve, reject) => {
    Toast.loading({
      message: '加载中...',
      duration: 0,
    });
    axios
      .post(url + '?' + decodeURIComponent(qs.stringify(params)))
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      });
  });
}

function get(url, data = {}) {
  return new Promise((resolve, reject) => {
    Toast.loading({
      message: '加载中...',
      duration: 0,
    });
    axios
      .get(url, {
        data: data,
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}
/* 封装 Promise的post请求 */
function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    Toast.loading({
      message: '加载中...',
      duration: 0,
    });
    axios.post(url, data).then(
      res => {
        resolve(res.data);
      },
      err => {
        reject(err);
      },
    );
  });
}

export default {
  postp,
  post,
  getp,
  get,
};
