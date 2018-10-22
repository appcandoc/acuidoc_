### picker-view
嵌入页面的滚动选择器，现支持五种选择器，分别是普通选择器，多列选择器，时间选择器，日期选择器，省市区选择器，默认是普通选择器。需要通过属性mode来指定不同的选择器。

#### mode属性表
|属性名	| 说明 |
|-------|------|
|selector|	默认项。普通选择器。|
|multiSelector |	多列选择器|
|time|	时间选择器|
|date|	日期选择器（同ac-picker）|
|region	|省市区选择器|

普通选择器：mode = selector

| 属性  | 类型   | 默认值 | 描述             |
| ----- | ------ | ---- | -------------- |
|title|	String| |	"当前选择"	选择器的标题|
|range|	Array|	[]|	选择器的数据|
|range-key|	String| |		当 range 是一个 Object Array 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容|
|value|	Number|	0	|value 的值表示选择了 range 中的第几个（下标从 0 开始）|
|disabled|	Boolean|	false	|是否禁用|
|@change	|EventHandle|		|value 改变时触发 change 事件|
|@cancel	|EventHandle|		|取消选择或点遮罩层收起 picker 时触发|

示例

代码
 ```script
<template>
<ac-view>
<ac-view class="sample_title">单列选择器</ac-view>
<ac-view class="sample_content">
  <ac-picker title="单列选择器" :range="list" :value="value" @change="handleChange"></ac-picker>
  <ac-button @tap="resetPicker00">将选项重置为第一项</ac-button>
</ac-view>
</ac-view>
</template>

<script>

export default {
  methods: {
    handleChange (val) {
      this.value = val
    },
    resetPicker00 () {
      this.value = 0
    },
  },
  data() {
    return {
      list: ['中国', '美国', '巴西', '日本'],
      value: 1
    }
  }
}
</script>


<style lang="less">

</style>



 ```

 效果
 
 ![](./img/picker/picker.gif)
