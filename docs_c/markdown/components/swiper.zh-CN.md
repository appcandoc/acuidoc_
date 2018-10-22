 ### swiper
 滑块视图容器。

| 属性名 |	类型 |	默认值	| 说明	| 备注 |
|--------|-------|---------|-------|-------|
|indicator-dots	| Boolean	| false |	是否显示面板指示点	|
|indicator-color |	Color	| rgba(0, 0, 0, .3)	| 指示点颜色 |
|indicator-active-color	| Color	| #000000	|当前选中的指示点颜色	|
|autoplay |	Boolean	| false	| 是否自动切换	|
|current	| Number	| 0	| 当前所在滑块的 index	|
|current-item-id |	String |	""	|当前所在滑块的 item-id ，不能与 current 被同时指定	| 未实现
|interval	| Number |	5000	| 自动切换时间间隔	|
|duration	| Number |	500	| 滑动动画时长	|
|circular	| Boolean	| false	| 是否采用衔接滑动	|
|vertical	| Boolean	| false	| 滑动方向是否为纵向	|  未实现
|previous-margin	| String	| "0px"	| 前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值	| 未实现
|next-margin	| String	| "0px"	| 后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值	|  未实现
|display-multiple-items	| Number |	1	| 同时显示的滑块数量 |  未实现
|skip-hidden-item-layout |	Boolean	| false	| 是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息|  未实现
|@change	| EventHandle	|	current | 改变时会触发 change 事件，event.detail = {current: current, source: source}	|  未实现
|@animationfinish |	EventHandle | 	|	动画结束时会触发 animationfinish 事件，event.detail 同上|  未实现
|@bindchange	| EventHandle	|	 | current 改变时会触发 change 事件，event.detail = {current: current, source: source}	|
|@bindanimationfinish |	EventHandle | 	|	动画结束时会触发 animationfinish 事件，event.detail 同上|  

#### 前端代码
```script
<template>
  <ac-swiper pagination class="three_swiper" autoplay indicator-dots>
    <ac-swiper-item>
      <ac-view class="swiper_item">
        <ac-image :src="items2[1].src"></ac-image>
        <ac-image :src="items2[2].src"></ac-image>
        <ac-image :src="items2[3].src" ></ac-image>
      </ac-view>
    </ac-swiper-item>
    <ac-swiper-item>
      <ac-view class="swiper_item">
        <ac-image :src="items2[4].src"></ac-image>
        <ac-image :src="items2[5].src"></ac-image>
        <ac-image :src="items2[6].src" ></ac-image>
      </ac-view>
    </ac-swiper-item>
    <ac-swiper-item>
      <ac-view class="swiper_item">
        <ac-image :src="items2[7].src"></ac-image>
        <ac-image :src="items2[8].src"></ac-image>
        <ac-image :src="items2[9].src" ></ac-image>
      </ac-view>
    </ac-swiper-item>
    <ac-swiper-item>
      <ac-view class="swiper_item">
        <ac-image :src="items2[10].src"></ac-image>
        <ac-image :src="items2[11].src"></ac-image>
        <ac-image :src="items2[12].src" ></ac-image>
      </ac-view>
    </ac-swiper-item>
  </ac-swiper>
</template>

<script>
export default {
  data () {
    return {
      items2: [
        {
          title: 'Glow',
          score: 9.7,
          src: 'http://images.uileader.com/20171103/5c7dfdc3-c6ed-4968-82f7-4d55c191dead.jpg'
        },
        {
          title: 'Got ',
          score: 7.8,
          src: 'http://images.uileader.com/20171103/dd760606-ab0f-45b2-a030-bab65e0b2a56.jpg'
        },
        {
          title: 'MISS SLOANE',
          score: 8.9,
          src: 'http://images.uileader.com/20171103/14feebf0-3061-4681-bb45-fa27d76af891.jpg'
        },
        {
          title: 'gifted',
          score: 8.8,
          src: 'http://images.uileader.com/20171103/7d89142f-b88d-4001-8196-7fd6834c2630.jpg'
        },
        {
          title: 'BORN LEADER',
          score: 9.2,
          src: 'http://images.uileader.com/20171103/5fce28ba-fd02-48cb-a1c2-ce0ff3801844.jpg'
        },
        {
          title: 'Big Little Lies',
          score: 7.1,
          src: 'http://images.uileader.com/20171103/2cdb945d-349d-4d19-8347-629675adde76.jpg'
        },
        {
          title: 'MANCHESTER SEA',
          score: 9.7,
          src: 'http://images.uileader.com/20171103/727a3953-fafb-44e7-8fd8-92e84e11442f.jpg'
        },
        {
          title: '金刚',
          score: 8.8,
          src: 'http://images.uileader.com/20171103/4ac53f4c-1e62-40ce-87d9-2b7638cf00be.jpg'
        },
        {
          title: 'THE CIRCLE',
          score: 8.3,
          src: 'http://images.uileader.com/20171103/b13d8fbd-bb0e-4510-b680-4a559b79407c.jpg'
        },
        {
          title: 'UNITED KINDOM',
          score: 8.6,
          src: 'http://images.uileader.com/20171103/f5d59af6-c4af-4faa-b36a-3473b78a7612.jpg'
        },
        {
          title: 'UNITED KINDOM',
          score: 8.6,
          src: 'http://images.uileader.com/20171103/aa1b5858-8d6d-4e8b-9723-87fd802c78d9.jpg'
        },
        {
          title: 'UNITED KINDOM',
          score: 9.3,
          src: 'http://images.uileader.com/20171103/6439465c-bac6-4d4f-bfd2-4376d0465b95.jpg'
        },
        {
          title: 'UNITED KINDOM',
          score: 9.6,
          src: 'http://images.uileader.com/20171103/9e65711d-c1dc-450f-878a-fab40bd09b55.jpg'
        }
      ]
  }
  },
  methods: {

  }
}
</script>
<style lang="less">
  .three_swiper{
    .ac-swiper-indicator{
      bottom: 0;
    }
    .swiper_item{
      display: flex;
      height: 200px;
      .ac-image-container{
        flex: 1;
        margin-right: 5px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
</style>

```

#### 效果
 ![](./img/swiper/swiper.gif)
