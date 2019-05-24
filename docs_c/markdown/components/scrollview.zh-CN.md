### ac-scroll-view
可滚动视图区域。

| 属性  | 类型   | 默认值 | 描述             |
| ----- | ------ | ---- | -------------- |
| scroll-x | Boolean |  false  | 允许横向滚动|
| scroll-y | Boolean |   false  | 允许纵向滚动 |
| scroll-top | Number |    | 设置竖向滚动条位置|
| scroll-left| Number |     | 设置横向滚动条位置 |
| scroll-into-view | String |     | 值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素 |
| height | [Number, String] |    | 滚动视图高度|
| scroll | EventHandle |     | 滚动时触发 |
| scrollstart | EventHandle |     | 滚动开始时触发 |
| scrollend | EventHandle |   | 滚动结束后触发 |
| probe | String |  "0"  | 触发scroll事件的条件|
| pull-down | Object |     | 下拉刷新的处理 |
| pull-left | Object |     | 左拉 |
| pull-up |Object |   | 上拉加载 |
| scroll-with-animation | Boolean |   true  | 在设置滚动条位置时使用动画过渡 |
| enable-reach-bottom-load | Boolean |  false   | 是否到底加载 |
| on-load-more |Function |   | 到底时的处理，此时一般用于请求数据并渲染到页面上 |

#### probe有效值

| 值  |                  说明                |
| ----- | ------ | ---- | -------------- |
| "0" | 始终触发scroll事件 |
| "1" | scroll-top、scroll-left变化时，不触发scroll事件 |
| "2" | 外部变更 scroll-into-view时，不触发scroll事件 |
| 其他值 | 始终不触发scroll事件 |

#### pull-up属性表
|属性	  |  默认值	  |          说明                       |
|-------| --------- | ------------------------------------- |
|distance	|50	| 上拉多少高度时触发加载 |
|onBegin	 | EventHandle |	上拉时触发，一般可用于自定义上拉动画。返回值对象包含distance【拉动的距离】、direction【拉动的方向】 |
|onActive |	EventHandle	 | 上拉开始时触发，一般请求写在这里 |
|onAfter	| EventHandle	 | 上拉结束后触发，一般用于请求结束后，把数据显示出来。如果成功触发刷新，返回值为1，否则没有返回值。|


#### pull-down属性表

|属性	  |  默认值	  |          说明                       |
|-------| --------- | ------------------------------------- |
|distance	|50	| 下拉多少高度时触发刷新 |
|onBegin	| EventHandle	| 下拉时触发，一般可用于自定义下拉动画。返回值对象包含distance【拉动的距离】、direction【拉动的方向】|
|onActive	| EventHandle	| 下拉开始时触发，一般请求写在这里 |
|onAfter	| EventHandle	| 下拉结束后触发，一般用于请求结束后，把数据显示出来。如果成功触发刷新，返回值为1，否则没有返回值。|


#### pull-left属性表

|属性	  |  默认值	  |          说明                       |
|-------| --------- | ------------------------------------- |
|distance |	50|	左拉多少高度时触发刷新 |
|onBegin |	EventHandle	| 左拉时触发，一般可用于自定义下拉动画。返回值对象包含distance【拉动的距离】、direction【拉动的方向】。|
|onActive |	EventHandle	| 左拉开始时触发，一般请求写在这里 |
|onAfter |	EventHandle |	左拉结束后触发，一般用于请求结束后，把数据显示出来。如果成功触发刷新，返回值为1，否则没有返回值。|

#### 纵向滚动：基本示例
前端示例代码
 ```script
<template>
  <ac-view>
    <ac-scroll-view scroll-y  height="300"
    :scroll-top.sync="scrollTop" :enable-back-to-top="true"
    :scroll-into-view.sync="toView"
    :probe="2" :enable-reach-bottom-load="true" :on-load-more="onloadmore" :pull-down="pullDown" :scroll-with-animation="true">
      <ac-view class="content">
        <ac-view id="green" class="green flex-item">1</ac-view>
        <ac-view id="blue" class="blue flex-item">2</ac-view>
        <ac-view id="yellow" class="yellow flex-item">3</ac-view>
      </ac-view>
    </ac-scroll-view>
    <ac-view>
      <ac-button type="primary" @tap="toGreen">点击我滚动到视图1</ac-button>
      <ac-button type="primary" @tap="toYellow">点击我滚动到视图3</ac-button>
    </ac-view>
  </ac-view>
</template>

<script>
export default {
  config: {
    navigationBarTitleText: "scrollView基本使用",
    disableScroll:true
  },
  data () {
    return {
      toView: 'blue',
      scrollTop: 0,
      pullDown:{
        distance: 60,
        onBegin: this.handleBegin,
        onActive: this.handleActive,
        onAfter: this.handleAfter
      }
    }
  },
  methods: { 
    onloadmore(){
    console.log('loadmore')
    },
    handleBegin({ distance, direction }){
      console.log(distance,direction)
    },
    handleActive () {
      console.log('active')
    },
    handleAfter (flag) {
      console.log(flag)
    },
    toYellow () {
      this.toView = 'yellow'
    },
    toGreen () {
      this.toView = 'green'
    },
    backTop () {
      this.scrollTop = 0
      this.scrollTop = this.scrollTop + 1
    },
    bindscrolltoupper(){
      console.log('1231312')
    }
  }

}

</script>
 ```
less代码

 ```script
<style lang="less">
.content{
  .flex-item{
    display:flex;
    justify-content: center;
    align-items: center;
    color:#fff
  }
  .blue{
    background-color: #46D1E4;
    height: 15rem;
  }
  .green{
    background-color: #7CC422;
    height: 15rem;
  }
  .yellow{
    background-color: #FFA060;
    height: 15rem;
  }

}

</style>
 ```
<!-- 效果

 ![](./img/views/scrollview01.gif) -->