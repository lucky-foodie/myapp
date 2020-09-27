import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './font/iconfont.css';
import ViewUI from 'view-design';
import AOS from 'aos';

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.use(AOS);
import 'aos/dist/aos.css';
import 'view-design/dist/styles/iview.css';
import './concise/index.js';
import './data/api';
import data from './data/database';
import api2 from './data/api';
Vue.use(api2);
import './mock/index.js';
Vue.use(data);
Vue.config.productionTip = false;
Vue.use(ViewUI);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
