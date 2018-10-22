 ### 事件
什么是事件
事件是视图层到逻辑层的通讯方式。
事件可以将用户的行为反馈到逻辑层进行处理。
事件可以绑定在组件上，当达到触发事件，就会执行逻辑层中对应的事件处理函数。
事件的使用方式
在组件中绑定一个事件处理函数。 如@tap，当用户点击该组件的时候会在该.vue页面对应的js中找到相应的事件处理函数。

<ac-view @tap="handleTap"> Tap me! </ac-view>

在相应的vue定义中写上相应的事件处理函数，参数是event。

```script
export default {
  methods: {
    handleTap: function(e) {
      console.log(e)
    }
  }
}
```

可以看到log出来的信息大致如下：
 ![](./img/event/events1.png)

 #### 事件详解
 
 #### 事件分类

事件分为冒泡事件和非冒泡事件：

冒泡事件：当一个组件上的事件被触发后，该事件会向父节点传递。
非冒泡事件：当一个组件上的事件被触发后，该事件不会向父节点传递。
WeTouch的冒泡事件列表：

|类型	| 触发条件	| 最低版本|
|-----|----------|---------|
|touchstart|	手指触摸动作开始	| |
|touchmove|	手指触摸后移动 | |
|touchcancel|	手指触摸动作被打断，如来电提醒，弹窗	| |
|touchend	|手指触摸动作结束	| |
|tap	|手指触摸后马上离开	| |
|longtap	|手指触摸后，超过350ms再离开，如果指定了事件回调函数并触发了这个事件，tap事件将不被触发| |

注：除上表之外的其他组件自定义事件如无特殊申明都是非冒泡事件，如<ac-form/>的submit事件，<ac-input/>的input事件，<ac-scroll-view/>的scroll事件，(详见各个[组件)

事件绑定和冒泡
事件绑定的写法同组件的属性，以 key、value 的形式。

key 以@开头，然后跟上事件的类型，如@tap、@touchstart。
value 是一个字符串，需要在对应的 js 中methods节点定义同名的函数。不然当触发事件的时候会报错。
事件对象
如无特殊说明，当组件触发事件时，逻辑层绑定该事件的处理函数会收到一个事件对象。

BaseEvent 基础事件对象属性列表：

|属性	| 类型	| 说明 |
|-----|-------|------|
|type	| String	| 事件类型 |
|timeStamp |	Integer	|事件生成时的时间戳|
|target |	Object|	触发事件的DOM元素属性值集合|


#### CustomEvent自定义事件对象属性列表（继承 BaseEvent）：

|属性	 | 类型	|说明　｜
|------|------|------|
｜detail｜	Object　｜	额外的信息｜

TouchEvent 触摸事件对象属性列表（继承 BaseEvent）：

|属性	 | 类型	| 说明 |
|touches |	Array |	触摸事件，当前停留在屏幕中的触摸点信息的数组 |
|changedTouches	| Array	| 触摸事件，当前变化的触摸点信息的数组 |

type
代表事件的类型。

timeStamp
页面打开到触发事件所经过的毫秒数。

target
触发事件的源组件。

|属性	| 类型 |	说明 |
|-----|-----|-------|
|id	| String |	事件源元素的id |
|tagName	| String |	当前元素的标签类型|
|parentNode	| Object	|当前元素的父元素 |
|childNodes	 | Array	| 当前元素的子元素集合 |

touches
touches 是一个数组，每个元素为一个 Touch 对象（canvas 触摸事件中携带的 touches 是 CanvasTouch 数组）。 表示当前停留在屏幕上的触摸点。

#### Touch 对象

|属性	| 类型	| 说明 |
|-----|-----|-------|
|identifier	| Number |	触摸点的标识符 |
|pageX, pageY	| Number	距离文档左上角的距离，文档的左上角为原点 ，横向为X轴，纵向为Y轴 |
|clientX, clientY	| Number	| 距离页面可显示区域（屏幕除去导航条）左上角距离，横向为X轴，纵向为Y轴|

####  CanvasTouch 对象

|属性	| 类型	| 说明 |
|-----|-----|-------|
|identifier |	Number |	触摸点的标识符 |
|x, y |	Number |	距离 Canvas 左上角的距离，Canvas 的左上角为原点 ，横向为X轴，纵向为Y轴|

#### changedTouches
changedTouches 数据格式同 touches。 表示有变化的触摸点，如从无变有（touchstart），位置变化（touchmove），从有变无（touchend、touchcancel）。

#### detail
自定义事件所携带的数据，如表单组件的提交事件会携带用户的输入，媒体的错误事件会携带错误信息，详见组件定义中各个事件的定义。 点击事件的detail 带有的 x, y 同 pageX, pageY 代表距离文档左上角的距离。


示例：

1点击事件

```script

<template>
    <div>
        <ac-view @tap='handleTap'>
                点击
            <i>{{tapText}}</i>
        </ac-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tapText:''
        }
    },
  methods:{
    handleTap(e){
        var that = this
        this.tapText = 'tap'
        setTimeout(function () {
            that.tapText = ''
        }, 1000)
    }
  }
}
</script>

```

效果

 ![](./img/event/tap1.gif)


 2长按事件

 ```script
<template>
    <div>
        <ac-view @longtap="bindlongtap">
            长按
            <i>{{longtapText}}</i>
        </ac-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            longtapText:''
        }
    },
  methods:{
    bindlongtap () {
    var that = this
    this.longtapText = 'longtap'
    setTimeout(function () {
        that.longtapText = ''
    }, 1000)
    }
  }
}
</script>

 ```

 效果
  ![](./img/event/longtap1.gif)

  3触摸事件

 ```script
<template>
    <div>
        <div class="demo-text" @touchstart="bindtouchstart" @touchmove="bindtouchmove" @touchend="bindtouchend">
  触摸
  <i>{{touchText}}</i>
</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            touchText:''
        }
    },
  methods:{
    bindtouchstart (e) {
    this.touchText = 'touchstart'
    },
    bindtouchmove (e) {
    this.touchText = 'touchmove'
    },
    bindtouchend () {
        var that = this
        this.touchText = 'touchend'
        setTimeout(function () {
        that.touchText = ''
        }, 1000)
    }
  }
}
</script>
 ```

 效果
 ![](./img/event/touch1.gif)
