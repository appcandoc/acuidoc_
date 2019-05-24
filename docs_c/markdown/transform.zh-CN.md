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

