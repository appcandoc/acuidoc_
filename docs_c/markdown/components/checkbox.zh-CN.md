 #### checkbox
 checkbox-group
多项选择器，内部由多个checkbox组成。


|属性名	| 类型	| 默认值	| 说明 |
|-------|------|---------|-----|
|@change	| EventHandle	|	|选中项发生改变时触发change事件。返回值包含current 和 value两个参数。 current为对象，里面包含两个值，checked：当前点击的是否选中，value：当前点击的value值； value为数组，返回checkbox-group里选中的所有value值。 |
checkbox
多选项目。

|属性名	| 类型	| 默认值	| 说明 |
|-------|------|---------|-------|
|value	| String	|  |	<checkbox/>标识，选中时触发<ac-checkbox-group/>的change事件，并携带<checkbox/>的value |
|disabled	| Boolean	| false	| 是否禁用 |
|checked	| Boolean	| false	| 当前是否选中，可用来设置默认选中 |
|color |	String	|  |	checkbox的颜色，同css的color |
|type	| String	|	checkbox的样式，默认为方形。指定type="circle"，则为圆形；指定type="plain"，则没有边框 |

典型示例

```script
<template>
<ac-view >
    <ac-view class="demo">
  <ac-view class="demo-block">
    <ac-view class="sample_title">单独使用</ac-view>
    <ac-view class="demo-content" style="margin-left:20px;padding:10px 0;font-size:14px;">
      <ac-checkbox checked></ac-checkbox>选中
      <ac-checkbox></ac-checkbox>未选中
    </ac-view>
  </ac-view>
</ac-view>


<ac-view class="demo">
  <ac-view class="demo-block">
    <ac-view class="sample_title">change事件</ac-view>
    <ac-view class="demo-content">
      <ac-checkbox-group @change="checkboxChange">
        <ac-label class="checkbox" ac:for="(item, index) in items"  :key="index">
          <ac-checkbox :value="item.name" :checked="item.checked" ></ac-checkbox> {{item.value}}
        </ac-label>
      </ac-checkbox-group>
    </ac-view>
  </ac-view>
</ac-view>

</ac-view>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { name: 'USA', value: '美国' },
        { name: 'CHN', value: '中国', checked: true },
        { name: 'BRA', value: '巴西', checked: true }
      ]
    }
  },
   methods: {
    checkboxChange (obj) {
        // alert(obj.value);
        this.toast(obj.value);
    }
  },
      handleTap(e){
      console.log(e);
    }
}
</script>


<style lang="less">
.demo-content {
  .ac-checkbox-group {
    background-color: #fff;
  }

  .checkbox {
    display: block;
    margin-left: 0.75rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-size: 0.7rem;
  }
}
</style>


```

<!-- 效果

 ![](./img/checkbox/checkbox.png) -->
