## image
属性名 | 类型 | 默认值 | 说明
---|---|---|---
src | String  | | 图片资源地址
width | [Number, String] |  | 	图片宽度，可以是数字或百分比，数字后不加单位
height | [Number, String] |  | 	图片高度，可以是数字或百分比，数字后不加单位
mode | String | 'scaleToFill' | 图片裁剪、缩放的模式
load-effect | String | none | 第一次加载的效果，可选值为none/fade/blur
lazy-load | Boolean | false | 图片懒加载。只针对scroll-view下的image有效。懒加载的图片必须要设置width和height
offset | [Number, String] | 0 | 图片懒加载距离页面底部为offset距离时触发
@error | HandleEvent |  | 图片载入错误时的事件
@load | HandleEvent |  | 图片载入完毕时的事件

<!-- data-preview-src | String |  | 图片预览时设置大图路径，需要和 previewer一起使用
data-preview-group | [Number, String] |  | 图片预览时设置图片预览分组，需要和 previewer一起使用 -->

### mode 有效值：
mode 有 14 种模式，其中 4 种是缩放模式，9 种是裁剪模式，1种是简单模式。

模式 | 值 | 说明
---|---|---
缩放 | scaleToFill | 不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素
缩放 | aspectFit | 保持纵横比缩放图片，完整地将图片显示出来，短边区域会留白
缩放 | aspectFill | 保持纵横比缩放图片，图片完全填满 image 元素，超出部分截取
缩放 | widthFix | 宽度不变，高度自动变化，保持原图宽高比不变
裁剪 | top | 不缩放图片，只显示图片的顶部区域
裁剪 | bottom | 不缩放图片，只显示图片的底部区域
裁剪 | center | 不缩放图片，只显示图片的中间区域
裁剪 | left | 不缩放图片，只显示图片的左边区域
裁剪 | right | 不缩放图片，只显示图片的右边区域
裁剪 | top | left | 不缩放图片，只显示图片的左上边区域
裁剪 | top | right | 不缩放图片，只显示图片的右上边区域
裁剪 | bottom | left | 不缩放图片，只显示图片的左下边区域
裁剪 | bottom | right | 不缩放图片，只显示图片的右下边区域
简单模式 | simple | 简单模式等于html中的img标签

### 路径引入
**引入远程图片：**
直接给src赋值即可。

**引入本地图片：**
使用requre方式赋值给src。例如require('./test1.jpg')，其中./代表这个图片的位置跟当前文件在同一个目录。如果图片在其他位置，可以用../的这种相对路径；
如果把图片放到根目录下的static目录下，则不需要使用requre就可以使用。
**Bug&Tip**
1. 1、使用图片懒加载必须要设置宽高，这是为了防止当初始化时图片未加载时容器高度没有被撑开，导致懒加载计算不准确。


### 典型示例
**缩放示例**

**scaleToFill**
默认模式。不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素


```html
<ac-image :src="img1" width="200" height="200"></ac-image>
```
**aspectFit**
保持纵横比缩放图片，完整地将图片显示出来，短边区域会留白


```html
<ac-image :src="img1" mode="aspectFit" width="200" height="200"></ac-image>
```
**aspectFill**
保持纵横比缩放图片，图片完全填满 image 元素，超出部分截取


```html
<ac-image :src="img1" mode="aspectFill" width="200" height="200"></ac-image>
```
**widthFix**
宽度不变，高度自动，保持原图宽高比


```html
<ac-image :src="img1" mode="widthFix" width="200"></ac-image>
```
宽度100%，高度固定，scaleToFill缩放变形

```html
<ac-image :src="img1" mode="scaleToFill" width="100%" height="100"></ac-image>
```
宽度100%，高度固定，aspectFill超出部分裁剪

```html
<ac-image :src="img1" mode="aspectFill" width="100%" height="100"></ac-image>
```
### 填充容器
**默认填充容器效果**
这里设置容器宽度为200px，高度200px


```html
<ac-view class="img_view1">
  <ac-image :src="img1" width="100%"></ac-image>
</ac-view>
```
```less
.img_view1{
  width: 200px;
  height:200px;
  overflow: hidden;
  background-color: #999;
}
```
**宽度自适应容器，裁剪高度，保持比例**
这里设置容器宽度为100%，高度100px


```html
<ac-view class="img_view2">
  <ac-image :src="img1" width="100%"></ac-image>
</ac-view>
```
```less
.img_view2{
  width: 100%;
  height:100px;
  overflow: hidden;
}
```
**高度自适应容器，裁剪宽度，保持比例**
这里设置容器宽度为100px，高度200px
```html
<ac-view class="img_view3">
  <ac-image src="{{ img1 }}" height="100%"></ac-image>
</ac-view>
```
```less
.img_view3{
  width:100px;
  height:200px;
  overflow: hidden;
}
```

**mode事例**
```html
<ac-view class="section section_gap" ac:for="item in array">
  <ac-view class="section__title">{{item.text}}</ac-view>
  <ac-view class="section__ctn">
    <ac-image style="background-color: #eeeeee;" :mode="item.mode" :width="width" :height="height" :src="src"></ac-image>
  </ac-view>
</ac-view>
```
```javascript
export default {
  methods: {
  },
  data () {
    return {
      array: [{
        mode: 'top',
        text: 'top：不缩放图片，只显示图片的顶部区域'
      }, {
        mode: 'bottom',
        text: 'bottom：不缩放图片，只显示图片的底部区域'
      }, {
        mode: 'center',
        text: 'center：不缩放图片，只显示图片的中间区域'
      }, {
        mode: 'left',
        text: 'left：不缩放图片，只显示图片的左边区域'
      }, {
        mode: 'right',
        text: 'right：不缩放图片，只显示图片的右边边区域'
      }, {
        mode: 'top left',
        text: 'top left：不缩放图片，只显示图片的左上边区域'
      }, {
        mode: 'top right',
        text: 'top right：不缩放图片，只显示图片的右上边区域'
      }, {
        mode: 'bottom left',
        text: 'bottom left：不缩放图片，只显示图片的左下边区域'
      }, {
        mode: 'bottom right',
        text: 'bottom right：不缩放图片，只显示图片的右下边区域'
      }],
      src: require('../images/cat.jpg'),
      width: 200,
      height: 200
    }
  }
}
```
**图片懒加载**
默认是一个淡灰色的背景。
```html
<ac-scroll-view scroll-y style="height:100%">
  <ac-image
    ac:for="(item, index) in list"
    :key="index"
    class="img"
    :src="item.src"
    lazy-load
    width="300"
    height="200"
    >
  </ac-image>
</ac-scroll-view>
```
```javascript
export default {
  data () {
    return {
      list: [
        {
          src: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2075656774,2708770842&fm=173&app=25&f=JPEG?w=639&h=458&s=2F415B6E5BB1A6595CDC150B0000E0C1'
        }, {
          src: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=899324191,1495050524&fm=173&app=25&f=JPEG?w=639&h=426&s=07D15A824FFF9ADC0251B89503001080'
        },
        {
          src: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2075656774,2708770842&fm=173&app=25&f=JPEG?w=639&h=458&s=2F415B6E5BB1A6595CDC150B0000E0C1'
        }, {
          src: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=899324191,1495050524&fm=173&app=25&f=JPEG?w=639&h=426&s=07D15A824FFF9ADC0251B89503001080'
        },
        {
          src: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2075656774,2708770842&fm=173&app=25&f=JPEG?w=639&h=458&s=2F415B6E5BB1A6595CDC150B0000E0C1'
        }, {
          src: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=899324191,1495050524&fm=173&app=25&f=JPEG?w=639&h=426&s=07D15A824FFF9ADC0251B89503001080'
        },
        {
          src: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2075656774,2708770842&fm=173&app=25&f=JPEG?w=639&h=458&s=2F415B6E5BB1A6595CDC150B0000E0C1'
        }, {
          src: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=899324191,1495050524&fm=173&app=25&f=JPEG?w=639&h=426&s=07D15A824FFF9ADC0251B89503001080'
        },{
          src: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2075656774,2708770842&fm=173&app=25&f=JPEG?w=639&h=458&s=2F415B6E5BB1A6595CDC150B0000E0C1'
        }, {
          src: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=899324191,1495050524&fm=173&app=25&f=JPEG?w=639&h=426&s=07D15A824FFF9ADC0251B89503001080'
        },{
          src: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2075656774,2708770842&fm=173&app=25&f=JPEG?w=639&h=458&s=2F415B6E5BB1A6595CDC150B0000E0C1'
        }, {
          src: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=899324191,1495050524&fm=173&app=25&f=JPEG?w=639&h=426&s=07D15A824FFF9ADC0251B89503001080'
        }
      ]
    }
  },
  methods: {}
}
```

可以设置背景色和文字样式，实现一个简单的水印


```html
<ac-scroll-view scroll-y style="height:100%">
  <ac-image
    ac:for="(item, index) in list"
    :key="index"
    class="img"
    :src="item.src"
    lazy-load
    width="300"
    height="200"
    >
    <ac-view class="custom-placeholder">
      <ac-view class="text">appcan</ac-view>
    </ac-view>
  </ac-image>

</ac-scroll-view>
```
JS部分同上例。
```less
.img{
  margin: 0 auto;
}

.custom-placeholder{
  height: 100%;
  background-color: #F7F9FB;
  text-align: center;
  padding-top: 30px;
  .text{
    font-size: 20px;
    color: #e6e6e6;
  }
}
```
可以设置背景图片，实现复杂的水印

```html
<ac-scroll-view scroll-y style="height:100%">
  <ac-image
    ac:for="(item, index) in list"
    :key="index"
    class="img"
    :src="item.src"
    lazy-load
    width="300"
    height="200"
    >
    <ac-view class="custom-placeholder">

    </ac-view>
  </ac-image>
</ac-scroll-view>
```
JS部分同上例。
```less
.img{
  margin: 0 auto;
}

.custom-placeholder{
  height: 100%;
  background: #F7F7F7 url('mt.png') no-repeat center 0;

}
```

