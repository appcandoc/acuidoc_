import '../../packages/vant-css/src/index.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './WapApp';
import routes from './router';
import { progress } from 'vant-doc';
import 'vant-doc/helper/touch-simulator';

import paths from './utils/route.json'

const baseUrl = '/dist/index.html#/pages';
let currenPath = location.hash.split('/');

const router = new VueRouter({
  mode: 'hash',
  routes: routes(true),
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 };
  }
});

router.beforeEach((route, redirect, next) => {
  // location.replace(`${baseUrl}/${paths[currenPath[currenPath.length-1]]}`);
  progress.start();
  next();
});

router.afterEach(() => {
  progress.done();
  if (!router.currentRoute.redirectedFrom) {
    Vue.nextTick(() => window.syncPath());
  }
});

window.vueRouter = router;

if (process.env.NODE_ENV !== 'production') {
  Vue.config.productionTip = false;
}

new Vue({ // eslint-disable-line
  render: h => h(App),
  router,
  el: '#app'
});
