### appcan.showLoading(OBJECT)
打开加载框，除非调用appcan.hideLoading()，否则不会自动关闭。

**OBJECT参数说明：**

参数 | 类型 | 默认值|必填 | 说明
---|---|---|---|---
title | String | | 否 | Loading的文字内容
mask | Boolean |false |否 | 是否显示透明蒙层，防止触摸穿透（仅ios支持）
|success	|function|		|否	|接口调用成功的回调函数|	
|fail	|function|		|否|	接口调用失败的回调函数|	
|complete|	function	|	|否	|接口调用结束的回调函数（调用成功、失败都会执行）	|

### appcan.hideLoading()
关闭加载框。

**示例**


```javascript
appcan.showLoading({
  title: '加载中',
})

setTimeout(function () {
  appcan.hideLoading()
}, 2000)
```


