import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './DocsApp';
import routes from './router';
import VantDoc, { progress } from 'vant-doc';
import { isMobile } from './utils';

import paths from './utils/route.json'

const baseUrl = '/dist/index.html#/pages';
let currenPath = location.hash.split('/');

Vue.use(VueRouter).use(VantDoc);

const router = new VueRouter({
  mode: 'hash',
  routes: routes()
});

router.beforeEach((route, redirect, next) => {
  // if (isMobile) {
  //   location.replace(`${baseUrl}/${paths[currenPath[currenPath.length-1]]}`);
  // }
  progress.start();
  document.title = route.meta.title || document.title;
  next();
});

router.afterEach(() => {
  progress.done();
  window.scrollTo(0, 0);
  Vue.nextTick(() => window.syncPath());
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
