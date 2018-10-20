### slider
滑动条组件。

| 属性  | 类型   | 默认值 | 描述             |
| ----- | ------ | ---- | -------------- |
|width	| Number, String|	260 |	设置slider的宽度 |
|min	| Number, String |	0 |	最小值 |
|max	| Number, String |	100 |	最大值 |
|step	| Number |	1	| 步长，取值必须大于 0，并且可被(max - min)整除 |
|value	| Number |	0	| 当前取值 |
|buffer-value |	Number	| -1 |	Slider可以被用作播放器的进度条. 可以进行缓存条的制作,传入值即可显示缓存 |
|buffer-color |	String	| #999999	| 缓存条颜色 |
|tooltip-class |	String |	''	| 为tooltip自定义样式 |
|thumb-style |	Object	| |	为滑块进行自定义的样式|
|thumb-down-style|	Object	| |	为滑块进行自定义按下的动画样式|
|tooltip-style |	Object| |		为tooltip自定义样式|
|active-color |	String	|#1aad19|	已选择的颜色|
|background-color|	String|	#e9e9e9	|背景条的颜色|
|show-value|	Boolean	|false	|是否显示当前 value|
|show-max-value	|Boolean|	false|	是否显示当前 maxValue|
|value-pos|	String|	'right'|	当前值的位置，默认在右边。如果和总值同时出现，则当前值默认会在左边，总值在右边|
|show-tooltip|	Boolean|	false|	是否显示Tooltip|
|slider-weight|	Number,String|	2	|线条粗细|
|bar-border-radius|	Number,String|	4	|背景条两端圆角的程度|
|scale-line|	String| |		是否显示刻度,如：'10'|
|key-scale-line|	String,Number| |		是否显示大刻度,如：'20'|
|scale-position|	String|	under|	设置刻度在滑动条的上方/下方。under为下方，over上方|
|scale-margin|	String|	0	|设置刻度距离滑动条的位置|
|unlimited|	Boolean|	false|	最大值设置无上限。必须设置max、key-scale-line、step，并且key-scale-line与step必须一致。|
|max-format|	Function|  |		为max设置数据格式|
|value-format|	Function|  |		为value设置数据格式|
|tooltip-format|	Function| |		为tooltip设置数据格式|
|@change	|EventHandle|  |		完成一次拖动后触发的事件。返回值为拖动后的value值|

#### Bug & Tip
slider在popup中使用时，由于一开始slider在popup之前渲染，会导致点击slider时滑块移动位置计算不准确。 需要使ac:if让slider在popup弹出后渲染。例如：

<ac-slider ac:if="show"></ac-slider>

示例代码

```script
<template>
<ac-view >
    <ac-slider name="slider"
               :show-max-value="true"
               :show-value="true"
               :width="width"
               :show-tooltip="true"
               :thumb-style="tbObj1"
               :thumb-down-style="tbdObj2"
               :tooltip-style="tooltipStyle"
               :max-format="formatval"
               :value-format="formatval"
               :tooltip-format="tooltipformat"></ac-slider>
  </ac-view>

</template>

<script type="text/babel">
export default {
  config: {
    window:{
    navigationBarTitleText: "Slider",
    disableScroll:true
    }
  },
  data() {
    return{
      title: 'Slider',
      width: window.innerWidth,
      tbObj1: {
        'position': 'absolute',
        'width': '10px',
        'height': '10px',
        'background-color': '#3399FF',
        'border': '0',
        'border-radius': '5px',
        'top': '9px',
        'left': '15px',
        'z-index': '2',
        'box-shadow': '0px 0px 0px'
        },
      tbdObj2: {
        'width': '20px',
        'height': '20px',
        'background-color': '#3399FF',
        'border-radius': '10px',
        'top': '4px',
        'left': '10px'
      },
      tooltipStyle:{
        'top':'-20px'
      },
      formatval: this.getformatval,
      tooltipformat: this.gettooltipformat,
    }
  },
  methods: {
    getformatval (num) {
      return parseInt(num / 60) + ':' + parseInt((num % 60 >= 10 ? '' : '0') + (num % 60))
    },
    gettooltipformat (num) {
      return parseInt(num / 60) + ':' + (num % 60 >= 10 ? '' : '0') + (num % 60)
    }
  }
}
</script>

<style lang="less">

</style>
```

 效果
 
 ![](./img/slider/slider.gif)
