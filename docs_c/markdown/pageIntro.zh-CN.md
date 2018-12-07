### page配置

每一个.vue页面中使用config来对本页面的窗口表现进行配置。

页面中配置项会覆盖 app.json中相同的配置项。

页面的配置只能设置 window 相关的配置项，以决定本页面的窗口表现

```json
    config : {
            "navigationBarBackgroundColor": "#ffffff",
            "navigationBarBackgroundGradient": "linear-gradient(45deg, #508EFF, #37B9FC)",
            "navigationBarTextStyle": "black",
            "navigationBarTitleText": "参数配置演示",
            "backgroundColor": "#eeeeee"
      }

```


|属性	|类型	|默认值	|描述|
|----|-----|---------|----|
|navigationBarTitleText|	String|	  	|导航栏标题文字内容。当其他页面自身设置了标题栏文字则以页面设置的优先。|
|navigationStyle|	String|	default|     	导航栏样式，仅支持 default/custom。custom 模式可自定义导航栏。|
|navigationBarBackgroundColor|	HexColor|	  	|导航栏背景颜色，如"#000000"|
|navigationBarBackgroundGradient|	   String|		|导航栏渐变背景色，如"linear-gradient(45deg, #508EFF, #37B9FC)"|
|navigationBarBorderColor|	String|		|导航栏下边框的颜色， 例如black、white或者 rgba(231, 231, 231, 0.6)|
|navigationBarTextStyle|	String|	white|	状态栏文字颜色和导航栏文字颜色，只支持black、white|
|backgroundColor|	HexColor|	#ffffff	|窗口的背景色|
|scrollType|	String|	div	|默认全局为区域滚动，如果设置为 body则全局为整页滚动|
|showScroller|	Boolean|	false|	整页滚动模式下是否显示滚动条（在APP端有效）|
|delay|	Boolean|	true|	app中页面内容是否延迟加载，默认是采用延迟加载，这样的效果就是切换界面时可以让页面先及时的切入再加载页面内容，对于安卓提升操作体验很明显。如果设置false，点击切换时，会先在后台加载好页面再切入进来。|
|title|	String|	|	web端网页标题|
|cache|	Boolean|	false|	是否开启全局缓存|


**Bug**&**Tip**

1、如果要实现当前页面不出现nav-bar，设置页面配置项 navigationStyle 为“custom”。

2、页面禁用滚动后，IOS端默认的弹性也随之消失。所以使用disableScroll也是禁用页面弹性的方式。
