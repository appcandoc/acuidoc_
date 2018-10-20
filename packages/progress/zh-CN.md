###  progress
进度条。

| 属性名	| 类型	| 默认值	| 说明 |
|---------|-------|--------|------|
|percent |	Float	| 无	| 设置百分比的数值，范围0～100 |
|show-info	| Boolean	| false	| 在进度条右侧显示百分比 |
|stroke-width	| Number |	6	| 进度条线的宽度，单位px |
|active-color	| String	|	进度条的颜色,可以传两个颜色显示渐变。例如： active-color="#9266FB,#F55691" |
|background-color	| String	|	进度条背景色 |
|active	| Boolean	| false	| 进度条初始动画 |
| animate-after-show	| Boolean	| true	| 默认为true，在屏幕外不显示动画，出现在屏幕中才显示动画 |
|border-radius	| Number |	0	| 默认为直角，通过该属性设置圆角 |

代码

```script
<template>
<ac-view class="sample_block">
  <ac-view class="sample_title">渐变色</ac-view>
  <ac-view class="sample_content">
    <ac-progress percent="70" stroke-width="10" active-color="#9266FB,#F55691"></ac-progress>
    <ac-progress percent="80" stroke-width="10" active-color="#FC8609, #f40" background-color="#FCD9C1"></ac-progress>
  </ac-view>
</ac-view>
</template>

<script type="text/babel">

</script>

<style lang="less">
.sample_block {
  font-size: 0.5rem;
}

.ac-progress {
  margin: 0.75rem 0;
}
</style>


```

效果

 ![](./img/progress/progress.png)
