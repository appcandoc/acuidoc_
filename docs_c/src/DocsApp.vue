<template>
  <div class="app">
    <van-doc
      :base="base"
      :config="config"
      :active="navName"
      :simulators="false"
      :current-simulator="currentSimulator"
    >
      <router-view @changeDemoURL="onChangeDemoURL" />
    </van-doc>
  </div>
</template>

<script>
import docConfig from './doc.config';

export default {
  data() {
    return {
      simulators: [`mobile.html${location.hash}`],
      demoURL: '',
      navName:'介绍',
    };
  },

  computed: {
    base() {
      return `/${this.$vantLang}`;
    },

    config() {
        let routeName = this.$route.name || 'zh-CN/introIntr';
        let retObj = {
            header:docConfig[this.$vantLang].header,
            nav:[]
        };
        let regApi = routeName.search(/Api/);
        let intrApi = routeName.search(/ntro/);
        if(regApi !== -1){
            retObj.nav.push(docConfig[this.$vantLang].nav.docApi);
            this.navName = 'api 接口'
        }
        if(intrApi !== -1){
            retObj.nav.push(docConfig[this.$vantLang].nav.intro)
                this.navName = '介绍'
        }
        if(regApi === -1 && intrApi === -1){
            retObj.nav.push(docConfig[this.$vantLang].nav.components)
                this.navName = 'Vue 组件'
        }
        return retObj;

    },

    currentSimulator() {
      const { name } = this.$route;
      return name && name.indexOf('demo') !== -1 ? 1 : 0;
    }
  },

  methods: {
    onChangeDemoURL(url) {
      this.simulators = [this.simulators[0], url];
    }
  }
};
</script>

<style lang="postcss">
.van-doc-intro {
  text-align: center;
  font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;

  &__youzan {
    width: 32px;
    height: 32px;
    display: block;
    margin: 25px 0 0;
  }

  &__logo {
    width: 120px;
    height: 120px;
  }

  h2 {
    font-size: 36px;
    line-height: 60px;
    font-weight: normal;
  }

  p {
    font-size: 15px;
    color: #455a64;
  }
}
</style>
