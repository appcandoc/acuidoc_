

## ACUI


### 全局配置
app.js文件是用来对appcan微应用进行全局配置，决定窗口表现、 tab 等。
以下是一个包含了部分常用配置选项的 app.json ：

```script
{
    window: {
        navigationBarTitleText: "DefaultTitle",
        navigationBarBackgroundColor: '#FF6453',
        navigationBarTextStyle: '#ffff',
        showNavbar: true
    },
    tabbar: {
        showTabbar:true,
        color:"#7A7E83",
        selectedColor:"#0074E8",
        borderStyle:"black",
        backgroudColor:"#ffffff",
        list:[
            {
            pagePath:"/hello",
            iconPath:"home",
            selecedIconPath:"home",
            text:"首页"
            },
            {
            pagePath:"/test",
            iconPath:"ucenter-outline",
            selecedIconPath:"ucenter-outline",
            text:"个人中心"
            }
        ]
    }
}
```

app.json 配置项列表



| 属性  | 类型   | 必选 | 描述             |
| ----- | ------ | ---- | -------------- |
| window | Object | 否    | 全局的默认窗口表现 |
| tabbar | Object | 否    | 底部 tab 栏的表现 |

window

用于设置小程序的状态栏、导航条、标题、窗口背景色。

| 属性  | 类型   | 默认值 | 描述             |
| ----- | ------ | ---- | -------------- |
| navigationBarBackgroundColor | String | #ffffff   | 导航栏背景颜色，如 #ffffff |
| navigationBarTitleText | String |     | 导航栏标题文字内容 |
| navigationBarTextStyle | String |  #000000   | 导航栏文字颜色，如 #000000 |
| showNavbar | boolean |  true   | 导航栏是否显示 |

tabbar

用于设置小程序的tabbar。

| 属性  | 类型   | 默认值 | 描述             |
| ----- | ------ | ---- | -------------- |
| color | String | #ffffff   | 设置tabbar中选项item颜色|
| selectedColor | String |     | 设置tabbar中选项item选中颜色 |
| backgroudColor | String |  #000000   | 设置tabbar背景颜色 |
| list |array | []   | 设置 tabbar 每项的内容 |

tabbar->list

用于设置小程序的tabbar的选项内容。

| 属性  | 类型   | 默认值 | 描述             |
| ----- | ------ | ---- | -------------- |
| pagePath | String |    | 设置选项的路由|
| iconPath | String |     | 设置设置选项的图片 |
| selecedIconPath | String |     | 设置选项的选中的图片 |
| text |String |   | 设置选项的文本 |


如 app.json ：

```javascript
    {
        window: {
            navigationBarTitleText: "DefaultTitle",
            navigationBarBackgroundColor: '#FF6453',
            navigationBarTextStyle: '#ffff',
            showNavbar: true
        }
    }
```

![](https://gitee.com/CorMobi-docs/CorMobi-Dev-Site/raw/master/md-component/img/acui_001.png)

### 页面配置

每一个小程序页面也可以使用.json文件来对本页面的窗口表现进行配置。
页面中配置项会覆盖 app.json 中相同的配置项。
页面配置项列表app.js完全相同

如 test.js ：

```javascript
    {
        window: {
            navigationBarTitleText: "CustomTitle",
            navigationBarBackgroundColor: '#007f54',
            navigationBarTextStyle: '#ffff',
            showNavbar: true
          }
    }
```
![](https://gitee.com/CorMobi-docs/CorMobi-Dev-Site/raw/master/md-component/img/acui_002.png)


###组件


####  rich-text
富文本，在富文本组件内可放任意html内容。

属性表

| 属性	| 类型 |	默认 |	说明 |
|-------|------|------|--------|
|selectable	| Boolean	| false	| 是否允许长按选择 |
| decode	| Boolean	| false	| 设为true时，当渲染html字符串时，指定decode可以将字符串解析为DOM |

##### Bug && Tip
1、富文本里不可以放组件标签
2、如果从服务端获取html片段，需要添加decode属性，因为从服务端传递的html片段为字符串。

####  progress
进度条。

| 属性名	| 类型	| 默认值	| 说明 |
|---------|-------|--------|------|
|percent |	Float	| 无	| 设置百分比的数值，范围0～100 |
|show-info	| Boolean	| false	| 在进度条右侧显示百分比 |
|stroke-width	| Number |	6	| 进度条线的宽度，单位px |
|active-color	| String	|	进度条的颜色,可以传两个颜色显示渐变。例如： active-color="#9266FB,#F55691" |
|background-color	| String	|	进度条背景色 |
|active	| Boolean	| false	| 进度条初始动画 |
| animate-after-show	| Boolean	| true	| 默认为true，在屏幕外不显示动画，出现在屏幕中才显示动画 |
|border-radius	| Number |	0	| 默认为直角，通过该属性设置圆角 |

代码

```script
<template>
<ac-view class="sample_block">
  <ac-view class="sample_title">渐变色</ac-view>
  <ac-view class="sample_content">
    <ac-progress percent="70" stroke-width="10" active-color="#9266FB,#F55691"></ac-progress>
    <ac-progress percent="80" stroke-width="10" active-color="#FC8609, #f40" background-color="#FCD9C1"></ac-progress>
  </ac-view>
</ac-view>
</template>

<script type="text/babel">

</script>

<style lang="less">
.sample_block {
  font-size: 14px;
}

.ac-progress {
  margin: 15px 0;
}
</style>


```

效果

 ![](./img/progress/progress.png)


 #### button
 按钮。

|属性名	| 类型	| 默认值	|  说明  |
|--------|-------|--------|-------------------|
|size |	String	| default	| 按钮的大小 |
|type	| String |	default	| 按钮的样式类型 |
|plain	| Boolean	| false	| 按钮是否镂空，背景色透明 |
|disabled	| Boolean	| false	 | 是否禁用 |
|loading	|Boolean |	false	| 名称前是否带 loading 图标 |
|icon  |	String	| ''	| 名称前的图标，需使用iconfont图标 |
|full-width	| Boolean	| true |	是否100%宽度 |
|form-type	| String |	|	用于 <ac-form/> 组件，点击分别会触发 <ac-form/> 组件的 submit/reset 事件 |
|hover-class	| String |	button-hover |	指定按钮按下去的样式类。当 hover-class="none" 时，没有点击态效果 |
|hover-stop-propagation	| Boolean	| false	 | 指定是否阻止本节点的祖先节点出现点击态 |
|hover-start-time	| Number |	20	| 按住后多久出现点击态，单位毫秒 |
|hover-stay-time |	Number |	70	| 手指松开后点击态保留时间，单位毫秒|

size 有效值：

|值	   | 说明  |
|-------|-----------|
|default	| 默认 |
|mini	 | 超小 |


type 有效值：
|  值	 |  说明  |
|------|--------|
|primary |	主要 |
|default	| 默认 |
|warn	 | 警告 |

form-type 有效值：
|值	 |   说明  |
|-----|--------|
|submit	| 提交表单 |
| reset	| 重置表单 |

典型示例

代码
```script
    <ac-view>
      <ac-button type="primary" @tap="tapMove">点击我滚动</ac-button>
      <ac-button type="primary" @tap="toYellow">点击我滚动到视图3</ac-button>
    </ac-view>
  </ac-view>

```

效果

 ![](./img/button/button.png)

 #### checkbox
 checkbox-group
多项选择器，内部由多个checkbox组成。


|属性名	| 类型	| 默认值	| 说明 |
|-------|------|---------|-----|
|@change	| EventHandle	|	|选中项发生改变时触发change事件。返回值包含current 和 value两个参数。 current为对象，里面包含两个值，checked：当前点击的是否选中，value：当前点击的value值； value为数组，返回checkbox-group里选中的所有value值。 |
checkbox
多选项目。

|属性名	| 类型	| 默认值	| 说明 |
|-------|------|---------|-------|
|value	| String	|  |	<checkbox/>标识，选中时触发<ac-checkbox-group/>的change事件，并携带<checkbox/>的value |
|disabled	| Boolean	| false	| 是否禁用 |
|checked	| Boolean	| false	| 当前是否选中，可用来设置默认选中 |
|color |	String	|  |	checkbox的颜色，同css的color |
|type	| String	|	checkbox的样式，默认为方形。指定type="circle"，则为圆形；指定type="plain"，则没有边框 |

典型示例

```script
<template>
<ac-view >
    <ac-view class="demo">
  <ac-view class="demo-block">
    <ac-view class="sample_title">单独使用</ac-view>
    <ac-view class="demo-content" style="margin-left:20px;padding:10px 0;font-size:14px;">
      <ac-checkbox checked></ac-checkbox>选中
      <ac-checkbox></ac-checkbox>未选中
    </ac-view>
  </ac-view>
</ac-view>

<ac-view class="demo">
  <ac-view class="demo-block">
    <ac-view class="sample_title">change事件</ac-view>
    <ac-view class="demo-content">
      <ac-checkbox-group @change="checkboxChange">
        <ac-label class="checkbox" ac:for="item in items">
          <ac-checkbox :value="item.name" :checked="item.checked"></ac-checkbox> {{item.value}}
        </ac-label>
      </ac-checkbox-group>
    </ac-view>
  </ac-view>
</ac-view>

</ac-view>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { name: 'USA', value: '美国' },
        { name: 'CHN', value: '中国', checked: true },
        { name: 'BRA', value: '巴西', checked: true }
      ]
    }
  },
   methods: {
    checkboxChange (obj) {
        alert(obj.value);
    }
  }
}
</script>


<style lang="less">
.demo-content {
  .ac-checkbox-group {
    background-color: #fff;
  }

  .checkbox {
    display: block;
    margin-left: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 14px;
  }
}
</style>

```

<!-- 效果

 ![](./img/checkbox/checkbox.png) -->


