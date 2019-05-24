### form
表单，将组件内的用户输入的<ac-switch/> <ac-input/> <ac-checkbox/> <ac-slider/> <ac-radio/>提交。

| 属性  | 类型   | 默认值 | 描述             |
| ----- | ------ | ---- | -------------- |
|@submit|	EventHandle|  |	携带 form 中的数据触发 submit 事件。|
|@reset|	EventHandle|  |	表单重置时会触发 reset 事件|
|action| 	String| |	该属性当使用搜索时，需要指定（可以使键盘出现搜索按钮）。其他场景并不是必要的。|

Bug&Tip
1、当form表单组件的form-type 设置为 submit时，点击form里面的 button 组件，会将表单组件中的 value 值进行提交，需要在表单内的组件中加上 name 来作为 key。/
2、@submit触发后，返回值为数据内容组成的对象。返回格式如下：

 ![](./img/form/form1.png)


示例代码

```script
<template>
   <ac-layout>
         <ac-form @submit="formSubmit" @reset="formReset">
            <ac-cell-item>
                <span slot="left">用户名：</span>
                <ac-input slot="right"  name="input" max="20" placeholder="请输入用户名"></ac-input>
            </ac-cell-item>

        <ac-cell-item>
          <span slot="left">开关</span>
              <ac-switch slot="right" name="switch" title="开关"></ac-switch>
        </ac-cell-item>

        <ac-cell-item>
          <span slot="left">checkbox</span>
                <ac-checkbox-group name="checkbox" slot="right" style="padding: .3rem 0;">
                <ac-checkbox value="checkbox1" ></ac-checkbox>选项一
                <ac-checkbox value="checkbox2" ></ac-checkbox>选项二
                </ac-checkbox-group>
        </ac-cell-item>

        <ac-cell-item>
                <ac-radio-group name="radio" slot="left" style="padding: .3rem 0;">
                    <ac-radio value="radio1"></ac-radio>选项1
                    <ac-radio value="radio2"></ac-radio>选项2
                    <ac-radio value="radio3"></ac-radio>选项3
                </ac-radio-group>
        </ac-cell-item>

        <ac-cell-item>
          <span slot="left">slider</span>
              <ac-label slot="right">
                <ac-slider :width="300" show-value="true" name="slider"></ac-slider>
              </ac-label>
        </ac-cell-item>

        <ac-cell-group title="">
          <ac-button form-type="submit" type="primary">Submit</ac-button>
          <ac-button form-type="reset">Reset</ac-button>
        </ac-cell-group>
         </ac-form>
    </ac-layout>
</template>

<script>
export default {
  config: {
    "navigationBarTitleText": "表单"
  },
  data () {
    return { 
      left: 0,
      sliderValue: 20
    }
  },
  methods: {
    formSubmit (e) {
      console.log(e)
    },
    formReset (e) {
    }
  }
}

</script>

<style lang="less">
  .sample_content{
    line-height: inherit;
  }
</style>

```

 <!-- 效果
 
 ![](./img/form/form2.png) -->