### picker
从底部弹起的滚动选择器，现支持五种选择器，分别是普通选择器，多列选择器，时间选择器，日期选择器，省市区选择器，默认是普通选择器。需要通过属性mode来指定不同的选择器。

#### mode属性表
|属性名	| 说明 |
|-------|------|
|selector|	默认项。普通选择器。|
|multiSelector |	多列选择器|
|time|	时间选择器|
|date|	日期选择器|
|region	|省市区选择器|

普通选择器：mode = selector

| 属性  | 类型   | 默认值 | 描述             |
| ----- | ------ | ---- | -------------- |
|range	|Array|	[]|	选择器的数据|
|value	|Number|	0	|value 的值表示选择了 range 中的第几个（下标从 0 开始）|
|@change|	EventHandle| |		value 改变时触发 change 事件|

时间选择器：mode = date

| 属性  | 类型   | 默认值 | 描述             |
| ----- | ------ | ---- | -------------- |
|value	|String	|0|	表示选中的日期，格式为"YYYY-MM-DD"|	
|start	|String	| |表示有效日期范围的开始，字符串格式为"YYYY-MM-DD"|	
|end|	String| |		表示有效日期范围的结束，字符串格式为"YYYY-MM-DD"|	
fields|	String	|day	|有效值 year,month,day，表示选择器的粒度	|
|bindchange|	EventHandle| |		value 改变时触发 change 事件，event.detail = {value: value}	|
|change|	EventHandle| |		value 改变时触发 change 事件，event.detail = {value: value}	|
|cancel|	EventHandle|	|	取消选择时触发|
|disabled|	Boolean	|false	|是否禁用|

示例

代码
 ```script
<template>
  <ac-view>
    <ac-view class="sample_title">日期选择器</ac-view>
    <ac-view class="sample_content">
      <ac-button  @tap="resetPicker3">将日期设置为今天</ac-button>
      <div>format：YYYY-MM-DD</div>
      <ac-picker  fields="year" mode="date" start="2017-09-01" disabled end="2018-09-30" :value="dataValue" @change="handleChange5" @bindcancel="cancel"></ac-picker>

      <div>format：YYYY/MM/DD</div>
      <ac-picker mode="date" start="2017-09-01" end="2018-09-30" :value="dataValue" date-format="YYYY/MM/DD" @bindchange="handleChange5" @cancel="cancel"></ac-picker>

      <div>format：YYYY年MM月DD日</div>
      <ac-picker mode="date" start="2017-09-01" end="2018-09-30" :value="dataValue" date-format="YYYY年MM月DD日" @bindchange="handleChange5"></ac-picker>

      <div>format：YYYY年M月D日</div>
      <ac-picker mode="date" start="2017-09-01" end="2018-09-30" :value="dataValue" date-format="YYYY年M月D日" @bindchange="handleChange5"></ac-picker>

      <div>format：MMMM Do, YYYY</div>
      <ac-picker mode="date" start="2017-09-01" end="2018-09-30" :value="dataValue" date-format="MMMM Do, YYYY" @bindchange="handleChange5"></ac-picker>

      <div>format：dddd MMMM Do, YYYY</div>
      <ac-picker mode="date" start="2017-09-01" end="2018-09-30" :value="dataValue" date-format="dddd MMMM Do, YYYY" @bindchange="handleChange5"></ac-picker>

    </ac-view>
  </ac-view>

</template>

<script>
  const getDoubleNumber = function (num) {
    return num < 10 ? '0' + num : '' + num
  }

  export default {
    methods: {
      handleChange5 (val) {
        this.dataValue = val
      },
      cancel (val) {
        alert('this is cancel!');
      },
      resetPicker3 () {
        let today = new Date()
        let year = today.getFullYear() + ''
        let month = getDoubleNumber(today.getMonth() + 1)
        let day = getDoubleNumber(today.getDate())

        this.dataValue = year + '-' + month + '-' + day
      },
    },
    data () {
      return {
        dataValue: '2017-09-05'
      }
    }
  }
</script>


<style lang="less">

</style>




 ```

 效果
 
 ![](./img/picker/picker1.gif)
