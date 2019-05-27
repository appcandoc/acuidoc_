# 1、数据赋值：

Appcan UI中，如果需要更新视图。

```
this.变量名 = xxx。
```


小程序中，如果需要更新视图。


```
this.setData({
  变量名:xxx
})
```


# 2、表达式转换：
Appcan UI中，可以识别以下写法


```
:class="'grey-bg': index % 2 == 0"
```

小程序中，上面的写法会在微信开发者工具中报错。需要改为以下写法：


```
class="{{index % 2 == 0 ? 'grey-bg':''}}"
```


# 3、pages根据路由生成，需要把首页放到路由的首位。


```
import Index from '@/pages/demo/ACIndex'
import ACAPI from '@/pages/demo/ACAPIindex'
import ACAPIpageScrollTo from '@/pages/demo/ACAPIpageScrollTo'
import ACAPIbackground from '@/pages/demo/ACAPIbackground'
import ACAPIpullDownRefresh from '@/pages/demo/ACAPIpullDownRefresh'
```


```
routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/ACAPI',
      name: 'ACapi-index',
      component: ACAPI
    },
    {
      path: '/pageScrollTo',
      name: 'pageScrollTo',
      component: ACAPIpageScrollTo
    },
    {
      path: '/background',
      name: 'ACAPIbackground',
      component: ACAPIbackground
    },
    {
      path: '/pullDownRefresh',
      name: 'pullDownRefresh',
      component: ACAPIpullDownRefresh
    }
]
```

生成后

```
pages: [
  'pages/demo/ACIndex',
  'pages/demo/ACAPIindex',
  'pages/demo/ACAPIpageScrollTo',
  'pages/demo/ACAPIbackground',
  'pages/demo/ACAPIpullDownRefresh'
]
```

# 4、模板语法
## 不支持纯-HTML
小程序里所有的 BOM／DOM 都不能用，也就是说 v-html 指令不能用。

## 不支持部分复杂的 JavaScript 渲染表达式
我们会把 template 中的 {{}} 双花括号的部分，直接编码到 wxml 文件中，由于微信小程序的能力限制(数据绑定)，所以无法支持复杂的 JavaScript 表达式。

目前可以使用的有 + - * % ?: ! == === > < [] .，剩下的还待完善。


```
<!-- 这种就不支持，建议写 computed -->
<ac-view>{{ message.split('').reverse().join('') }}</ac-view>

<!-- 但写在 @event 里面的表达式是都支持的，因为这部分的计算放在了 vdom 里面 -->
<ac-view>
    <ac-block ac-for="item in list">
        <ac-text @tap="clickHandle(item, index, $event)">{{ item.value }}</ac-text>
    </ac-block>
</ac-view>
```


## 不支持过滤器
渲染部分会转成 wxml ，wxml 不支持过滤器，所以这部分功能不支持。

# 5、不支持函数
不支持在 template 内使用 methods 中的函数。

# 6、不支持ac:for
需要手动转换。


# 7、不支持自定义组件

# 8、保留方法名称

```
onLoad，监听页面加载
onShow，监听页面显示
onReady，监听页面初次渲染完成
onHide，监听页面隐藏
onUnload，监听页面卸载
onPullDownRefresh，监听用户下拉动作
onReachBottom，页面上拉触底事件的处理函数
onShareAppMessage，用户点击右上角分享
onPageScroll，页面滚动
onTabItemTap, 当前是 tab 页时，点击 tab 时触发
```

# 9、app.json和main.js文件中的config配置要一致。

# 10、data()函数中不能进行全局变量赋值

转换前

```
data() {
    that = this;
    return {
        orgId: "",
        contactName: "",
        contactPhone: "",
        contactFax: "",
        contactLink: "",
        communityName: "",
        communityCode: "",
        community:[]
    }
},
```

转换后

```
data: {
    orgId: "",
    contactName: "",
    contactPhone: "",
    contactFax: "",
    contactLink: "",
    communityName: "",
    communityCode: "",
    community:[]
},
```
# 11、appcan.onload需要手动修改

appcan.onload方法小程序中没有此方法，转换后需要手动将此方法内的内容手动添加到page的生命周期onReady回调中

# 12、路由跳转

在appcanUI中路由跳转，传入path时如下：

```javascript

appcan.navigateTo({
  url: '/path'
})

```
或者

```javascript

appcan.navigateTo({
  url: 'path'
})

```
url中的path前面可以有`/`,也可以不写这个`/`,但是在小程序中这个`/`一定不能有，推荐在开发代码过程中都不带。

特别注意：tabBar上的路径在appcanUI中需要带上`/`

# 13、获取页面传的参数

appcanUI：

```javascript
let query = appcan.getUrlQuery
```
小程序：
```javascript
Page({
  onLoad(query) {
    // query即为传过来的参数对象
  }
})
```
# 14、函数传参

appcanUI：

```HTML
<ac-button @tap="share('0','1')" type="primary">分享</ac-button>
```
```javascript
share(id, param){
  console.log(id, param)
}
```

小程序中：
```HTML
<button bindtap="share" data-arg0="0" data-arg1="1" type="primary">分享</button>
```
```javascript
share(e){
  // 需要手动改写获取参数的代码
  let id = e.target.dataset.arg0
  let param = e.target.dataset.arg1
  console.log(id, param)
}
```

# 15、less的引用编译

在转成小程序过程中，程序会将less文件进行转换，但是css文件则不会转换，因此不要引用css文件而要less文件

# 16、static中js文件的引用

在static文件中，不能直接将js文件放到此文件夹下，需要添加一层文件夹

# 17、不支持在data中直接将变量赋值为一个函数【使用this.函数名】

appcanUI：
```javascript
export default {
  // 数据选项
  data () {
    return {
      value: this.getVal()
    }
  },
  // 方法选项
  methods: {
    getVal () {
      return 'value'
    }
  }
}
```
小程序中必须在生命周期中进行赋值调用

```javascript
export default {
  data: {
    value: null
  },
  onReady: function() {
    this.setData({
      value:this.getVal()
    })
  },
  getVal(){
    return 'value'
  }
}
```

# 18、引入的js中需要手动替换appcan.到wx.

开发过程中，我们会引入一些js文件，在这部分js文件中使用appcan的api方法，小程序中需要手动将这部分js中的appcan替换为wx

# 19、iconfont图标

appcanUI中iconfont图标引入`.ttf`文件，但是在小程序中需要把这个文件转为base64内容，直接在font-family的src部分引入 base64