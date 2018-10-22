 ### for
列表渲染 for

在组件上使用 ac:for 控制属性绑定一个数组，即可使用数组中各项的数据重复渲染该组件。 默认数组的当前项的下标变量名默认为 index

<ac-view ac:for="item in array">
  {{item.message}}
</ac-view>

  <ac-view ac:for="(item,index) in array">
    {{ index }}: {{item.message}}
  </ac-view>

典型示例

代码
```script
<template>
  <ac-view>
    <ac-view ac:for="(item,index) in array">
      {{ index }}: {{item.message}}
    </ac-view>
  </ac-view>
</template>

<script>
export default {
  config: {
    window: {
      navigationBarTitleText: 'For',
      navigationBarBackgroundColor: '#3399FF',
      navigationBarTextStyle: '#ffff',
      showNavbar: true
    }
  },
  name: 'for',
  data () {
    return {
      array:[
        {message:'hello'},
        {message:'appcanui'},
        {message:'end>>'}
        ]
    }
  }
}
</script>

```
