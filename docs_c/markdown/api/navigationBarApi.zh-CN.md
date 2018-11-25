### appcan.setNavigationBarTitle(OBJECT)

动态设置当前页面的标题。

### OBJECT参数说明：

|参数|	类型|	默认值	|说明|
|----|---|----|---|
|title|	String|	无	|页面标题|


### 示例代码：

```javascript
appcan.setNavigationBarTitle({
title: 'Hello!'
})
````


### appcan.setNavigationBarColor(OBJECT)    

动态设置当前页面导航栏颜色。

### OBJECT参数说明：

|参数	|类型	|默认值	|说明|
|----|----|----|----|
|frontColor|	String|	#ffffff|	前景颜色值，有效值为十六进制颜色|
|backgroundColor	|String|	主题色	|背景颜色值，有效值为十六进制颜色|
|gradient|	Function|	无|	导航栏渐变背景色，如'linear-gradient(45deg, #FF8E00, #FF4F00)'|

### 示例代码：

```javascript
appcan.setNavigationBarColor({
    frontColor: '#666',
    backgroundColor: '#eee'
})
```
```javascript
appcan.setNavigationBarColor({
    gradient: 'linear-gradient(45deg, #FF8E00, #FF4F00)'
})
```

### appcan.showNavigationBarLoading(OBJECT)

在当前页面显示导航条加载动画。

###  OBJECT参数说明：

|参数|	类型|	默认值|	说明|
|---|----|----|----|
|color|	String|	light	|loading 图的样式，仅支持 dark/light|


### 示例代码：

```javascript
appcan.showNavigationBarLoading({
    color: 'dark'
})
```



### appcan.hideNavigationBarLoading()

隐藏导航条加载动画。

示例代码：

```javascript
appcan.hideNavigationBarLoading()
```

