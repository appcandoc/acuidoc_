### app配置

dist目录的app.json文件中，通过JS部分的config来对App进行配置，设置APP的导航条、标题、窗口背景色。 等。 以下是一个包含了常用配置选项的 config 

**注：AppCanUI只支持十六进制颜色值（UI组件，API插件参数），如"#ff00ff"； 指定类型的除外如：navigationBarTextStyle**

```json
{
    "config" : {
        "window": {
        "navigationBarTitleText": "AppCan官方组件展示",
        "navigationBarBackgroundColor": "#000000",
        "navigationBarTextStyle": "black",
        "pullDownRefresh": false
        },
        "tabbar": {
        "showTabbar": false,
        "color": "#3399FF",
        "selectedColor": "#000000",
        "borderStyle": "black",
        "backgroudColor": "#ffffff",
        "list": [
            {
            "pagePath": "/",
            "iconPath": "./static/1.png",
            "selecedIconPath": "./static/1-2.png",
            "text": "组件"
            },
            {
            "pagePath": "/port",
            "iconPath": "./static/2.png",
            "selecedIconPath": "./static/2-2.png",
            "text": "接口"
            }
        ]
        }
    }
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
|delay|	Boolean|	true|	app中页面内容是否延迟加载，默认是采用延迟加载，这样的效果就是切换界面时可以让页面先及时的切入再加载页面内容，对于安卓提升操作体验很明显。如果设置false，点击切换时，会先在后台加载好页面再切入进来。|
|title|	String|	|	web端网页标题|
|pullDownRefresh|	String|true	|	是否全局开启下拉刷新|


dist目录的config.xml文件中，通过xml格式来配置app的一些基本信息

1、 &lt;widget appId="C0000000000001"&gt;appId 配置app的id，以C开头13位

2、 &lt;icon src="./static/120.png"/&gt; src 配置 app 的图标

3、 &lt;content encoding="utf-8" src="index.html"/&gt; src 配置真机同步过去的入口，可以是网络路径，也可以是本机起的服务 如：http://0.0.0.0:8080, utf-8格式


```xml
<?xml version="1.0" encoding="utf-8" standalone="no"?>
<widget appId="C0000000000001" channelCode="0000" height="480" pid="" sreensize="4.5" version="00.00.0000" viewmode="application" widgetId="" width="320">
    
    <name>demo111</name>
    <description/>
    <author email=""> </author>
    <icon src="./static/120.png"/>
    <license href=""/>
    <content encoding="utf-8" src="index.html"/>
    <updateurl/>
    <logserverip/>
    <showmyspace>false</showmyspace>
    <obfuscation>true</obfuscation>
    <bgcolor>#fefefe</bgcolor>
    <orientation>1</orientation>
    <debug enable="true" verbose="true">true</debug>
    <partobfuscation>false</partobfuscation>
    </widget>
    
    
```
