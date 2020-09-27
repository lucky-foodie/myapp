import Vue from 'vue';
import VueRouter from 'vue-router';
import modules from './modules';
// import modules from './main.js';

const children = modules;
Vue.use(VueRouter);
export const createRouter = () =>
  new VueRouter({
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        if (from.meta.keepAlive) {
          from.meta.savedPosition = document.body.scrollTop;
        }
        return {
          x: 0,
          y: to.meta.savedPosition || 0,
        };
      }
    },
    routes: [...children],
  });
export function resetRouter() {
  const newRouter = createRouter();
  console.log(newRouter);
  Router.matcher = newRouter.matcher;
}

console.log(this);
const Router = createRouter();
Router.addRoutes([...children]);
console.log(Router);
export default Router;
