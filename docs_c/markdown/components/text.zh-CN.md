### text

 文本，该组件有内联元素和块级元素两种。

属性表

| 属性名	| 类型	| 默认 |	说明 |
|---------|-------|------|------|
|block	| Boolean	| false	| 是否块级元素 |
|space	| String	| false	| 显示连续空格 |
|decode	| Boolean	| false	| 是否解码 |
|selectable |	Boolean	| false	| 是否允许长按选择 |

#### 典型示例
基础示例（内联）
 ```script
<template>
<ac-view class="sample_content">
  <ac-text class="price">6元</ac-text>
  <ac-text class="price2">门市价:10元</ac-text>
</ac-view>
</template>

<style lang="less">
.price{
    font-size: 1rem;
    color: #0ff;
}
</style>

 ```

<!-- 效果

 ![](./img/text/text.png) -->
