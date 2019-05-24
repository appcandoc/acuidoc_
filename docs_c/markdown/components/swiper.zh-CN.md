 ### swiper
 滑块视图容器。

| 属性名 |	类型 |	默认值	| 说明	| 备注 |
|--------|-------|---------|-------|-------|
|indicator-dots	| Boolean	| false |	是否显示面板指示点	|
|indicator-color |	Color	| rgba(0, 0, 0, .3)	| 指示点颜色 |
|indicator-active-color	| Color	| #000000	|当前选中的指示点颜色	|
|autoplay |	Boolean	| false	| 是否自动切换	|
|current	| Number	| 0	| 当前所在滑块的 index	|
|interval	| Number |	5000	| 自动切换时间间隔	|
|duration	| Number |	500	| 滑动动画时长	|
|circular	| Boolean	| false	| 是否采用衔接滑动	|
|@change	| EventHandle	|	 | current 改变时会触发 change 事件，返回当前index	|
|@animationfinish |	EventHandle | 	|	动画结束时会触发 animationfinish 事件，返回当前index|  

#### 前端代码
```script
<template>
<ac-layout>
  <ACTopText :text="title"></ACTopText>
  <ac-view class="container">

    <ac-view class="page-body">
      <ac-view class="page-section page-section-spacing swiper">
        <ac-swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :circular="true" :interval="interval" :duration="duration">
          <ac-swiper-item ac:for="(item, id) in background" :key="id">
            <ac-view class="swiper-item" :class="item"></ac-view>
          </ac-swiper-item>
        </ac-swiper>
      </ac-view>

      <ac-view class="page-section" style="margin-top: 1rem;margin-bottom: 0;">
        <ac-view class="weui-cells weui-cells_after-title">
        <ac-view class="weui-cell weui-cell_switch">
          <ac-view class="weui-cell__bd">指示点</ac-view>
          <ac-view class="weui-cell__ft">
            <ac-switch v-model="indicatorDots"  @change="changeIndicatorDots" ></ac-switch>

          </ac-view>
        </ac-view>

      </ac-view>

    </ac-view>
    </ac-view>
  </ac-view>
</ac-layout>
</template>

<script>
  import ACTopText from './ACTopText'
  export default {
    components: {ACTopText},
    config: {
        navigationBarTitleText: "swiper基本使用"
    },
    data() {
      return {
        background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 2000,
        duration: 500,
        title: 'swiper',
        width: window.innerWidth - window.rem*3
      }

    },
    methods: {
      changeIndicatorDots(index) {
        this.indicatorDots = !this.indicatorDots
      }
    }
  }
</script>


<style scoped lang="less">
 @import '../../common/acui.less';
  .swiper-item {
    display: block;
    height: 300rpx;
  }

  .page-section-title{
    padding: 0;
  }

  .info{
    position: absolute;
    right: 0;
    color: #353535;
    font-size: 30/20rem;
  }
  .page-foot{
    margin-top: 50/20rem;
  }

  .page-section-title{
    margin-top: 3rem;
    position: relative;
  }
</style>


```

