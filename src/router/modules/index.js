const manageFiles = require.context('.', true, /\.js$/);
let configRouters = [];
let routlist = [];
manageFiles.keys().forEach(key => {
  if (key === './index.js') return;
  if (key === './navigation-2.js') return; //    如果是当前文件，则跳过
  routlist.push(manageFiles(key).default);
  configRouters = configRouters.concat(manageFiles(key).default); // 读取出文件中的default模块
});

import Vue from 'vue';
Vue.prototype.$rmodules = routlist;

export default configRouters;

// 抛出一个Vue-router期待的结构的数组
