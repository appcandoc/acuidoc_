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
|@cancel|	EventHandle| |		取消选择时触发|
|disabled|Boolean|false	|	是否禁用|

多列选择器：mode = multiSelector

| 属性  | 类型   | 默认值 | 描述             |
| ----- | ------ | ---- | -------------- |
|is-chain	|Boolean|false	|	是否联动|
|range-key	|String|	|	通过 range-key 来指定 Object 中 key 的值作为选择器显示内容|
|range	|二维Array|	[]|	选择器的数据,如[["a","b"], ["c","d"]]|
|value	|Array	|	[]		|value 每一项的值表示选择了 range 对应项中的第几个（下标从 0 开始）|
|@change|	EventHandle| |		value 改变时触发 change 事件|
|@cancel|	EventHandle| |		取消选择时触发|
|disabled|Boolean|false	|	是否禁用|

时间选择器：mode = time

| 属性  | 类型   | 默认值 | 描述             |
| ----- | ------ | ---- | -------------- |
|value	|String|	|	表示选中的时间，格式为"hh:mm"|
|start	|String|	|	表示有效时间范围的开始，字符串格式为"hh:mm"|
|end	|String	|			|表示有效时间范围的结束，字符串格式为"hh:mm"|
|@change|	EventHandle| |		value 改变时触发 change 事件|
|@cancel|	EventHandle| |		取消选择时触发|
|disabled|Boolean|false	|	是否禁用|

时间选择器：mode = date

| 属性  | 类型   | 默认值 | 描述             |
| ----- | ------ | ---- | -------------- |
|value	|String	|0|	表示选中的日期，格式为"YYYY-MM-DD"|	
|start	|String	| |表示有效日期范围的开始，字符串格式为"YYYY-MM-DD"|	
|end|	String| |		表示有效日期范围的结束，字符串格式为"YYYY-MM-DD"|	
|@change|	EventHandle| |		value 改变时触发 change 事件，event.detail = {value: value}	|
|@cancel|	EventHandle|	|	取消选择时触发|
|disabled|	Boolean	|false	|是否禁用|
|date-format|	String|	"YYYY-MM-DD"|	以"YYYY-MM-DD"格式显示日期|

省市区选择器：mode = region

| 属性  | 类型   | 默认值 | 描述             |
| ----- | ------ | ---- | -------------- |
|range	|Array|	[]|	选择器的数据|
|value	|Array|	[]	|表示选中的省市区，默认选中每一列的第一个值|
|hideDistrict | Boolean | false | 是否隐藏区|
|@change|	EventHandle| |		value 改变时触发 change 事件|
|@cancel|	EventHandle| |		取消选择时触发|
|disabled|Boolean|false	|	是否禁用|

示例

代码
 ```script
<template>
  <ac-layout>
    <ACTopText :text="title"></ACTopText>
    <ac-view class="page-body">
      <ac-view class="page-section">
        <ac-view class="padding-common">单列选择器</ac-view>
        <ac-picker
          class="acpicker"
          title="当前选择"
          :range="list"
          :value="value"
          @change="handleChange"
        ></ac-picker>
      </ac-view>
      <ac-view class="page-section">
        <ac-view class="padding-common">多列选择器</ac-view>
        <ac-picker
          mode="multiSelector"
          class="acpicker"
          title="当前选择"
          :range="departments"
          :value="value1"
          is-chain
          range-key="text"
          @change="handleChange3"
        ></ac-picker>
      </ac-view>
      <ac-view class="page-section">
        <ac-view class="padding-common">时间选择器</ac-view>
        <ac-picker
          class="acpicker"
          mode="time"
          title="当前选择"
          :value="timeValue"
          @change="handleChange1"
        ></ac-picker>
      </ac-view>
      <ac-view class="page-section">
        <ac-view class="padding-common">日期选择器</ac-view>
        <ac-picker
          class="acpicker"
          title="当前选择"
          mode="date"
          start="2017-09-01"
          end="2018-09-30"
          :value="dataValue"
          @change="handleChange2"
        ></ac-picker>
      </ac-view>
    </ac-view>
  </ac-layout>
</template>

<script>
import ACTopText from "./ACTopText";

export default {
  components: { ACTopText },
  config: {
    navigationBarTitleText: "Picker"
  },
  data() {
    return {
        departments: [
        {
          text: "采购部",
          value: "DP_01",
          children: [
            { text: "采购一科", value: "DP_0101" },
            { text: "采购二科", value: "DP_0102" },
            { text: "采购三科", value: "DP_0103" }
          ]
        },
        {
          text: "制造部",
          value: "DP_02",
          children: [
            { text: "制造一科", value: "DP_0201" },
            { text: "制造二科", value: "DP_0202" },
            { text: "制造三科", value: "DP_0203" }
          ]
        }
      ],
      title: "Picker",
      list: ["中国", "美国", "巴西", "日本"],
      value: 1,
      value1: ["DP_01","DP_0101"],
      timeValue: "00:00",
      dataValue: "2017-09-05"
    };
  },
  methods: {
    handleChange(val) {
      this.value = val;
    },
    handleChange1(val) {
      this.timeValue = val;
    },
    handleChange2(val) {
      this.dataValue = val;
    },
     handleChange3(val) {
      this.value1 = val;
    },
  }
};
</script>

<style lang="less">
@import "../../common/app.less";

.sample_content {
  line-height: inherit;
}

.padding-common {
  color: #999999;
  padding: 0.5rem 0.75rem;
}

.acpicker .weac-cell {
  background-color: white;
  border-top: 1px solid #c7c7c7;
  border-bottom: 1px solid #c7c7c7;
}
</style>


 ```

 <!-- 效果
 
 ![](./img/picker/picker1.gif) -->
