# 自动转换机制

> 这里介绍插件自动进行转换时，内部实现了哪些转换。这部分内容有利于你更全面的了解转换。

## 1、页面html转换

### AppCan UI标签转换为微信小程序内置标签

以下AppCan UI标签将被转换为小程序的内置标签：

> ac-view, ac-scroll-view, ac-swiper, ac-image, ac-text, ac-rich-text, ac-progress
ac-button, ac-checkbox, ac-form, ac-input, ac-label, ac-picker, ac-picker-view
ac-radio, ac-switch, ac-textarea, ac-navigator, ac-audio, ac-image, ac-video, ac-map

转换前


```
<ac-view></ac-view>
<ac-scroll-view></ac-scroll-view>
<ac-swiper>
  <ac-swiper-item></ac-swiper-item>
  <ac-swiper-item></ac-swiper-item>
</ac-swiper>
```

转换后


```
<view></view>
<scroll-view></scroll-view>
<swiper>
  <swiper-item></swiper-item>
  <swiper-item></swiper-item>
</swiper>
```

### ac-layout标签
小程序没有layout组件，ac-layout标签被转换为view标签

转换前


```
<ac-layout class="login_page">
</ac-layout>
```

转换后


```
<view class="login_page">
</view>
```

### @ 事件
小程序不支持@，需要改为bind

转换前


```
<ac-button @tap="onReady">注册监听</ac-button>
<ac-button @tap="stop">停止监听</ac-button>
<ac-button @tap="start">继续监听</ac-button>
```

转换后


```
<button bindtap="onReady">注册监听</button>
<button bindtap="stop">停止监听</button>
<button bindtap="start">继续监听</button>
```

### :变量
小程序不支持:

转换前

```
<ac-button type="primary" :loading="true">提交中</ac-button>
<ac-button type="primary" :plain="true">不可点击的按钮</ac-button>
```

转换后

```
<button type="primary" loading="{{ true }}">提交中</button>
<button type="primary" plain="{{ true }}">不可点击的按钮</button>
```


### ac-input标签
Appcan UI的ac-input标签支持type="password"，而小程序则是指定password属性。

转换前


```
<ac-input type="password"></ac-input>
```

转换后


```
<input password></input>
```

### 条件和循环指令转换

以下ac:指令都会被转换为wx:指令：

ac:if, ac:else, ac:for

转换前


```
<ac-swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :circular="true" :interval="interval" :duration="duration">
  <ac-swiper-item ac:for="(item, id) in background" :key="id">
    <ac-view class="swiper-item" :class="item"></ac-view>
  </ac-swiper-item>
</ac-swiper>
```

转换后


```
<swiper indicator-dots="{{ indicatorDots }}" autoplay="{{ autoplay }}" circular="{{ true }}" interval="{{ interval }}" duration="{{ duration }}">
  <swiper-item wx:for="(item, id) in background" key="{{ id }}">
    <view class="swiper-item" :class="item"></ac-view>
  </swiper-item>
</swiper>
```

wx:for与vue写法不一样，需要手动调整。

小程序写法

```
<swiper indicator-dots="{{ indicatorDots }}" autoplay="{{ autoplay }}" circular="{{ true }}" interval="{{ interval }}" duration="{{ duration }}">
  <swiper-item wx:for="{{ background }}">
    <view class="swiper-item {{ item }}"></ac-view>
  </swiper-item>
</swiper>
```

### 双向绑定转换

Appcan UI部分组件支持v-model双向绑定的写法，小程序不支持该写法。转换为小程序时，v-model会转成小程序组件的属性绑定写法。

转换前


```
<ac-input v-model="value1"></ac-input>
<ac-switch v-model="value2"></ac-switch>
```

转换后


```
<input value="{{ value1 }}"></input>
<switch checked="{{ value3 }}"></switch>
```


### 事件传参转换

多数情况下，Appcan UI组件的事件不需要传递参数。但有些场景不得不传递参数到对应的事件函数中。

而小程序是不支持在事件函数中直接传递参数的，因此Appcan UI的事件传参会按照以下方式进行转换：

转换前


```
<!--多参数传递示例，省略了应用场景-->
<ac-view bindtap="handleTap(arg1, arg2, arg3)"></ac-view>
```

转换后


```
<!--多参数传递示例，省略了应用场景-->
<view bindtap="handleTap" data-arg1="arg1" data-arg2="arg2" data-arg3="arg3"></view>
```

## 2、页面css转换

### 转换为小程序内置标签选择器
当在Appcan UI中，使用以下名称作为类选择器的名称时，最终这些类选择器将转换为小程序内置的标签选择器

> ac-view, ac-scroll-view, ac-swiper, ac-swiper-item, ac-image, ac-text, ac-rich-text
> ac-progress, ac-button, ac-checkbox, ac-form, ac-input, ac-label, ac-picker, ac-picker-view
> ac-radio, ac-switch, ac-textarea, ac-navigator, ac-audio, ac-image, ac-video, ac-map

转换前


```
  .ac-view {
    color: #f00;
  }

  .ac-swiper {
    height: 300px;
  }
```

转换后


```
  view {
    color: #f00;
  }

  swiper {
    height: 300px;
  }
```

## 3、页面js转换

### data属性

转换前


```
data () {
  return {
    count: 1,
    name: 'Appcan UI'
  }
}
```

转换后


```
data: {
  count: 1,
  name: 'Appcan UI'
}
```

### mounted函数

Appcan UI的mounted生命周期函数对应小程序的onReady函数

转换前


```
mounted () {

}
```

转换后


```
onReady () {

}
```

### methods属性

Appcan UI的页面函数都放在methods属性下，而小程序没有methods属性，它的页面函数都放在根节点下。

转换前

```
export default {
  methods: {
    handleInputChange () {

    },
    handleCheckboxChange () {

    }
  }
}
```

转换后


```
export default {
  handleInputChange () {

  },
  handleCheckboxChange () {

  }
}
```

### appcan.转换为wx.
Appcan UI中的全局对象为appcan，而小程序的全局对象为wx，因此Appcan UI转换为小程序时，appcan.会被转换为wx.。

另外，Appcan UI有部分API，小程序是不支持的，在Appcan UI中使用这些API时，转换后会被自动注释掉，这些API的名称如下：

> openDatabase executeSql executetTansaction selectSql closeDatabase onAppResume loginAuth openMicroApp onload setEvent


转换前


```
appcan.chooseImage({
  count: 3,
  success: function () {
    console.log('选择了3张图片！')
  }
})
appcan.openMicroApp()
```

转换后


```
wx.chooseImage({
  count: 3,
  success: function () {
    console.log('选择了3张图片！')
  }
})
/** Appcan UI Tip:小程序不支持此API
  * wx.openMicroApp()
*/
```
