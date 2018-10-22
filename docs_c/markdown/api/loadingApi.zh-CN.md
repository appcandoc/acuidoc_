### appcan.showLoading(OBJECT)
打开加载框，除非调用appcan.hideLoading()，否则不会自动关闭。

**OBJECT参数说明：**

参数 | 类型 | 必填 | 说明
---|---|---|---
text | String | 否 | Loading的文字内容
top | Number | 否 | Loading到遮罩层顶部的距离，默认是垂直居中
maskStyle | Object | 否 | 遮罩层样式，可以设置高度、背景色、背景透明度
content | String | 否 | 自定义html内容，使用content时，text属性无效。用于自定义loading动画效果


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
**自定义内容-仿美团**

```javascript
appcan.showLoading({
  content: '<div class="mt-mascot"></div>',
  maskStyle:{
    backgroundColor:'#fff'
  }
})
```
**LESS部分**

```less
.mt-mascot {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 82px;
  height: 107px;
  background: url('mt_run.png') no-repeat;
  animation: mt-loading steps(8, end) .3s infinite;
  zoom: 0.5;
}

@keyframes mt-loading {
  100% {
    background-position: -656px 0;
  }
}
```
**自定义内容-仿支付宝**

```javascript
appcan.showLoading({
  content: `<div class="alipay-loading">
              <svg width="40" height="40" viewBox="0 0 50 50">
                <circle class="item" cx="25" cy="25" r="20" fill="none" />
                <circle class="item" cx="25" cy="25" r="20" fill="none" />
              </svg>
              <div class="text">
                加载中...
              </div>
            </div>`
})
```
**LESS部分**

```less
.alipay-loading {
  width: 100px;
  height: 100px;
  background-color: #2c2c2c;
  border-radius: 8px;
  padding-top: 15px;
  svg {
    display: block;
    margin: 0 auto;
    animation: loading 1s linear infinite;
  }
  .item:nth-child(1) {
    stroke: #bcbcbc;
    stroke-width: 2px;
    stroke-linecap: round;
  }
  .item:nth-child(2) {
    stroke: rgb(24, 120, 222);
    stroke-width: 2px;
    stroke-dasharray: 10, 300;
    stroke-linecap: round;
  }
  .text {
    margin-top: 10px;
    text-align: center;
    color: #bcbcbc;
    font-size: 14px;
  }
}
```

**自定义内容-图片旋转**

```javascript
appcan.showLoading({
  content: `<div class="img-loading">
              <div class="img-loading-circle"></div>
              <div class="text">
                加载中...
              </div>
            </div>`
})
```
**LESS部分**

```less
.img-loading {
  width: 100px;
  height: 100px;
  background-color: #2c2c2c;
  border-radius: 8px;
  padding-top: 15px;
  .img-loading-circle{
    width: 40px;
    height: 40px;
    margin: 0 auto;
    background: url(rotate_img.png) no-repeat center center;
    background-size: 100%;
    animation: loading .9s linear infinite;
  }
  .text {
    margin-top: 10px;
    text-align: center;
    color: #bcbcbc;
    font-size: 14px;
  }
}
@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```