// This file is auto gererated by build/build-entry.js
import Lazyload from './lazyload';
import Locale from './locale';

const version = '1.0.0';
const components = [
  Locale
];

const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  version,
  Lazyload,
  Locale
};

export default {
  install,
  version
};
