### canvas
为了适配手机屏幕的各种dpi,在使用所有关于canvas实现的图形化时,应使用ac-canvas组件

h5中直接使用canvas绘图在真机中，会变得模糊。ac-canvas是对canvas做的一层封装，保留了canvas的所有特性，并解决了模糊问题。

| 属性  | 类型   | 默认值 | 描述             |
| ----- | ------ | ---- | -------------- |
|canvas-id|	String	|无, 必填	|设置唯一一个canvas的id以区分其他canvas|
|width|	String, Number|	无, 必填|	设置宽度|
|height|	String, Number|	无, 必填|	设置高度|

示例代码

```script
<template>
  <ac-view >
    <ac-view class="canvas_wrap" :style="{height:width}">
      <ac-canvas
        canvas-id="myCanvas"
        :width="width"
        :height="width"
      ></ac-canvas>
      <ac-view class="text" >
        <ac-view class="text1">80分</ac-view>
        <ac-view class="text2">APPCAN</ac-view>
        <ac-view class="text2">超越全国80%团队</ac-view>
      </ac-view>
    </ac-view>
  </ac-view>
</template>

<script>
  export default {
    config: {
      window: {
        navigationBarTitleText: "Canvas"
      }
    },
    data () {
      return {
        width: window.innerWidth,
        value: 80,
        centerLeft: window.innerWidth,
        centerTop: window.innerWidth,
        ctx: null,
        radius: window.innerWidth - 10,
        lineWidth: 30,
        i: 0,
        textShow: false
      }
    },
    mounted () {
      // document.body.addEventListener('load', () => {

      // })

      setTimeout(() => {
        this.ctx = document.getElementById('myCanvas').getContext('2d')
        this.drawAnimationBackground()
        this.textShow = true
      }, 1000)
    },
    methods: {
      drawAnimationBackground () {
        let i = 1
        let j = 1
        let t = 1
        // let animatedFlag = false
        this.circularAni = setInterval(() => {
          var a = Math.tween.Elastic.easeOut(t, 0, this.radius, 93)
          this.ctx.clearRect(0, 0, this.centerLeft * 4, this.centerTop * 4)
          this.drawACircular(2, '', 'rgba(255, 255, 255, 0.2)', 100, t * 1.5 * this.radius / 60)
          this.drawACircular(4, '', 'rgba(255, 255, 255, 0.5)', 100, t * 1.5 * this.radius * 0.9 / 60)
          this.drawACircle('rgba(255, 255, 255, 0.1)', 100, a * 0.7)
          this.drawACircle('rgba(255, 255, 255, 0.1)', 100, a * 0.5)
          t++
          if (t * 1.5 * this.radius / 60 >= this.radius) {
            clearInterval(this.circularAni)
            this.setBounceCircularValue(this.value)
          }
        }, 1000 / 60)
      },
      drawBounceBackground () {
        this.drawACircular(1, '', 'rgba(255, 255, 255, 0.2)', 100, this.radius)
        this.drawACircular(2, '', 'rgba(255, 255, 255, 0.5)', 100, this.radius * 0.9)
        this.drawACircle('rgba(255, 255, 255, 0.1)', 100, this.radius * 0.5)
        this.drawACircle('rgba(255, 255, 255, 0.1)', 100, this.radius * 0.7)
      },
      drawACircular (lineWidth, lineCap, color, percent, radius) {
        this.ctx.setLineWidth(lineWidth)
        this.ctx.setStrokeStyle(color)
        this.ctx.setLineCap(lineCap)
        this.ctx.beginPath()
        this.ctx.arc(this.centerLeft, this.centerTop, radius, -Math.PI * 2 / 4, Math.PI * 2 * percent / 100 - Math.PI * 2 / 4, false)
        this.ctx.stroke()
      },
      drawACircle (color, percent, radius) {
        this.ctx.setLineWidth(1)
        this.ctx.setFillStyle(color)
        this.ctx.beginPath()
        this.ctx.arc(this.centerLeft, this.centerTop, radius, -Math.PI * 2 / 4, Math.PI * 2 * percent / 100 - Math.PI * 2 / 4, false)
        this.ctx.fill()
      },
      setBounceCircularValue (value) {
        if (value > 100) {
          value = 100
          this.i = 100
        }
        if (value < 0) {
          value = 0
          this.i = 0
        }
        this.value = value
        if (this.circularAni) {
          clearInterval(this.circularAni)
        }
        var isNegative = (this.value - this.i) < 0
        this.circularAni = setInterval(() => {
          this.ctx.clearRect(0, 0, this.centerLeft * 4, this.centerTop * 4)
          this.drawBounceBackground()

          this.drawACircular(this.lineWidth, '', 'rgba(255, 255, 255, 0.6)', this.i, this.radius * 0.9 - this.lineWidth / 2)
          if (this.i === this.value) {
            clearInterval(this.circularAni)
            return
          } else {
            this.i = isNegative ? this.i - 1 : this.i + 1
          }
        }, 1000 / 60)
      }
    }
  }

</script>

<style lang="less">
  // canvas.less
  .canvas_wrap{
    background-color: #39f;
    // height: 300px;
    position: relative;
    .text{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      .ac-view{
        text-align: center;
        margin-bottom: 10px;
        &.text1{
          color: #fff;
          font-size: 18px;
        }
        &.text2{
          font-size: 12px;
          color: #eaeaea;
        }
      }
    }
  }
</style>


```

 效果
 
 ![](./img/canvas/canvas.gif)
