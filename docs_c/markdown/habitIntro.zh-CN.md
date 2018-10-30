## 需要舍弃的pc端开发习惯

### 不要使用a链接跳转页面

框架提供了navigator组件用来跳转新页面，你可以把它理解为一个a链接。

另外框架还提供了多个API用于页面之间的不同跳转，详见文档的“API>>界面>>界面跳转”部分。

### 不要使用click处理点击事件

在移动端开发不能用click事件，click在移动端会造成300毫秒延迟。框架提供了bindtap事件代替click。详见文档的“vue 组件>>事件>>事件”部分

### 不要使用jquery等库操作dom

框架采用MVVM这种数据驱动的开发方式，界面绑定数据，数据变化时界面会随之变化。当你习惯这种开发方式时不但开发很高效，而且性能也是最优的。

不要使用jquery等库查找节点，在移动端这样很耗性能。万不得已也不要用document.getElementById等方法获取和操作dom节点

### 不要使用width/height/top/left相关的css动画

这些属性的css动画在移动端非常消耗性能，不要使用。建议使用translate动画做位移，scale变换做形变。

###不要直接使用border作为一像素边线

如果要为容器添加一像素细线，不能使用border，因为border的一像素在移动端会显得很粗。框架的样式库提供了一像素细线的样式函数，直接使用即可。


### 尽量不要使用原始HTML标签

框架提供了一整套ac-开头的组件标签，几乎能满足所有的移动开发需要，所以不到不得已请不要自己写html+css来开发WeTouch工程（即使是写一个div或者i标签也是不推荐的）。主要出于两点考虑：

1、 HTML语法过于宽松，导致规范性很差，代码可读和可维护性差。而且最重要的是如果经验不足很容易导致移动端不兼容。移动端大量的机型和系统版本，要考虑的兼容情况特别多，WeTouch提供的组件已经尽可能的做了兼容处理。

2、 WeTouch的ac-开头的组件和微信/支付宝小程序拥有统一的规范，与小程序相互转换时需要用的。

### 组件属性的true和false

在html5标准中，如果属性名写了就生效，例如

```html
<button disabled>按钮</button>
```

如果指定了true或false，例如

```html
<button disabled="true">按钮</button>
<button disabled="false">按钮</button>
```

都会识别为字符串，代表该属性可用，按钮会被禁用。

在ACUI中也同样遵循这个标准，例如以下3种写法作用一样：

```html
<ac-button disabled>按钮</ac-button>
<ac-button disabled="true">按钮</ac-button>
<ac-button disabled="false">按钮</ac-button>
```

如果要对某个属性设为真正的false，需要用{{ }}的写法，例如

```html
<ac-button :disabled="false">按钮</ac-button>
```

### 推荐的编程规范

当你写JS时，每一行结尾不加分号，字符串用单引号

当写.json文件时，需要引号的部分用双引号

文件夹命名，个单词用小写字母，双单词用驼峰方式命名

文件命名，一个单词用小写字母，双单词用驼峰方式命名
