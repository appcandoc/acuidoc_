 ### if && else if && else
条件渲染 if

在框架中，使用 ac:if、ac:else-if、ac:else 来判断是否需要渲染该代码块：

<span ac:if="tog == 1">ac-if</span>
<span ac:else-if="tog == 2">ac-else-if</span>
<span ac:else>ac-else</span>

典型示例

代码
```javascript
<template>
   <ac-layout class="ac-content">
      <ac-view class="win">
        <ac-button type="primary" icon="search" @tap="togChange">主要操作</ac-button>
      </ac-view>
      <ac-view>
        <span ac:if="tog == 1">ac-if</span>
        <span ac:else-if="tog == 2">ac-else-if</span>
        <span ac:else>ac-else</span>
      </ac-view>
    </ac-layout>
</template>

<script>
export default {
  config: {
    window: {
      'navigationBarTitleText': 'button'
    }
  },
  data () {
    return {
      tog:true
    }
  },
  methods: {
    togChange(){
      this.tog+=1;
      if(this.tog>3) this.tog = 1;
    },
  }
}

</script>

<style lang="less" scoped>

</style>


```
