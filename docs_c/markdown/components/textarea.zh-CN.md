### textarea
多行输入框。

| 属性  | 类型   | 默认值 | 描述             |
| ----- | ------ | ---- | -------------- |
|value	|String| |		输入框的内容|
|name	|String| |		用于提交表单|
|rows	|[Number,String]| |		输入框的可见行数|
|cols	|[Number,String]|   |		规定文本区的宽度（以平均字符数计）。|
|height	|[Number,String]|  |		输入框的高度|
|width	|[Number,String]|  |		输入框的宽度|
|title	|String|	“”|	输入框的标题|
|readonly|	Boolean|	false|	是否只读|
|disabled|	Boolean|	false|	是否禁用|
|show-counter	|Boolean|	true|	是否显示计数器|
|placeholder	|String	|	|输入框为空时占位符|
|placeholder-style	|String	|  |	指定 placeholder 的样式|
|placeholder-class	|String|	|	指定 placeholder 的样式类|
|maxlength	|Number	|140|	最大输入长度，设置为 -1 的时候不限制最大长度|
|auto-height|	Boolean	|false|	是否自动增高，设置auto-height时，style.height不生效|
|@focus	|EventHandle|   |		输入框聚焦时触发|
|@blur	|EventHandle|	|	输入框失去焦点时触发|
|@input	|EventHandle|	|	当键盘输入时，触发input事件|

示例代码

```script
<template>
    <ac-view>

   <ac-textarea placeholder="蓝色placeholder" placeholder-class="blue-placeholder"></ac-textarea>
    </ac-view>
</template>

<script type="text/babel">

</script>
<style lang="less">
.blue-placeholder::-webkit-input-placeholder {
  color: rgb(58, 47, 207);
}
</style>

</script>

```

 效果
 
 ![](./img/textarea/textarea.png)