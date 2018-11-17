### appcan.showLoading(OBJECT)
打开加载框，除非调用appcan.hideLoading()，否则不会自动关闭。

**OBJECT参数说明：**

参数 | 类型 | 必填 | 说明
---|---|---|---
text | String | 否 | Loading的文字内容
top | Number | 否 | Loading到遮罩层顶部的距离，默认是垂直居中
maskStyle | Object | 否 | 遮罩层样式，可以设置高度、背景色、背景透明度


### appcan.hideLoading()
关闭加载框。

**示例**

**基本样式**
```javascript
appcan.showLoading()
```
**指定Loading文字**
```javascript
appcan.showLoading({
  text: '正在查询机构'
})
```
**自定义背景**
这里设置背景色为透明。

```javascript
appcan.showLoading({
  text: '正在加载...',
  maskStyle: { 
    'background-color': 'rgba(231,231,231,0)' 
  }
})
```


