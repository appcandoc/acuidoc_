### video
 
视频。

### 属性名

|属性名|	类型|	默认值	|说明|
|----|-----|-----|----|
|src|	String|		|要播放视频的资源地址|
|initial-time|	Number|		|指定视频初始播放位置|
|duration|	Number|		|指定视频时长|
|controls|	Boolean|	true|	是否显示默认播放控件（播放/暂停按钮、播放进度、时间）|
|danmu-list|	Object Array|		|弹幕列表|
|danmu-btn|	Boolean	|false|	是否显示弹幕按钮，只在初始化时有效，不能动态变更|
|enable-danmu	|Boolean|	false|	是否展示弹幕，只在初始化时有效，不能动态变更|
|autoplay	|Boolean|	false|	是否自动播放|
|loop	|Boolean	|false|	是否循环播放|
|muted	|Boolean|	false|	是否静音播放|
|page-gesture|	Boolean	|false|	在非全屏模式下，是否开启亮度与音量调节手势【App支持】|
|direction	|Number|		|设置全屏时视频的方向，不指定则根据宽高比自动判断。有效值为 0（正常竖向）, 90（屏幕顺时针90度）|
|show-fullscreen-btn|	Boolean|	true|	是否显示全屏按钮|
|show-play-btn|	Boolean|	true	|是否显示视频底部控制栏的播放按钮|
|enable-progress-gesture|	Boolean|	true|	是否开启控制进度的手势|
|objectFit	|String|	contain|	当视频大小与 video 容器大小不一致时，视频的表现形式。contain：包含，fill：填充，cover：覆盖|
|poster	|String|		|默认控件上的音频封面的图片资源地址，如果 controls 属性值为 false 则设置 poster 无效|
|bindplay|	EventHandle|	|	当开始/继续播放时触发play事件|
|bindpause|	EventHandle|		|当暂停播放时触发 pause 事件|
|bindended	|EventHandle|		|当播放到末尾时触发 ended 事件|
|bindtimeupdate|	EventHandle|		|播放进度变化时触发，event.detail = {currentTime: '当前播放时间'} 。触发频率应该在 250ms 一次|
|bindfullscreenchange	|EventHandle|		|当视频进入和退出全屏是触发，event.detail = {fullScreen: '当前全屏状态'}|
|bindcontrolschange	|EventHandle|		|当播放控件显示或隐藏时触发，event.detail = {show: '控件显示状态'}|
|bindwaiting|	EventHandle	|	|视频出现缓冲时触发|
|binderror|	EventHandle	|	|视频播放出错时触发|

video标签认宽度300px、高度225px，设置宽高需要通过wxss设置width和height。

相关api：appcan.createVideoContext

### appcan.createVideoContext(videoId)

创建并返回 video 上下文 videoContext 对象

### videoContext

**videoContext** 通过 videoId 跟一个 video 组件绑定，通过它可以操作一个 video 组件。

### videoContext 对象的方法列表：

|方法	|参数	|说明|
|----|-----|----|
|play	|无	|播放|
|pause	|无|	暂停|
|seek	|position|	跳转到指定位置，单位 s|
|sendDanmu	|danmu|	发送弹幕，danmu 包含两个属性 text, color。|
|playbackRate|	rate|	设置倍速播放，支持的倍率有 0.5/0.8/1.0/1.25/1.5|
|requestFullScreen	|无|	进入全屏，可传入{direction}参数，详见video组件文档|
|exitFullScreen	|无|	退出全屏|

### Bug & Tip

在很多第三方移动浏览器中，如UC、QQ浏览器、微信X5内核等会自动劫持video标签，从而导致video组件表现不一致。例如在UC浏览器中，会自动增加一个圆形播放按钮、播放时自动全屏、滚动时覆盖其他ui元素、暂停后会出现广告等等。AC UI无法控制的。

但你可能会发现有些webapp的视频不会受到影响，例如爱奇艺。这是因为它们跟这些第三方厂家合作，加入到他们的白名单中，这样video就不会受到劫持了。

### 典型示例

#### 示例代码：

```html
<template>
    <ac-view className="btn-area">
      <ac-view>
        <ac-video :initial-time="5" :page-gesture="true" :enable-progress-gesture="false" id="myVideo"
                  style="width:100%" :src="videoSrc"
                  :danmu-list="danmuList" enable-danmu danmu-btn controls @bindwaiting="bindwaiting"
                  @binderror="binderror" @bindfullscreenchange="bindfullscreenchange"></ac-video>
      </ac-view>
      <ac-button type="primary" @tap="bindSendDanmu">发送弹幕</ac-button>
    </ac-view>
</template>
```

```javascript
<script>
  import appcan from 'acui-api';
  var videoContext

  function getRandomColor() {
    const rgb = []
    for (let i = 0; i < 3; ++i) {
      let color = Math.floor(Math.random() * 256).toString(16)
      color = color.length == 1 ? '0' + color : color
      rgb.push(color)
    }
    return '#' + rgb.join('')
  }

  export default {
    config: {
      "navigationBarTitleText": "视频组件"
    },
    data() {
      return {
        videoSrc: 'http://images.uileader.com/20171024/392f790e-4c5b-4909-83dd-d13e94bcd64f.mp4',
        danmuList: [{
          text: '第 1s 出现的弹幕',
          color: '#ff0000',
          time: 1
        },
          {
            text: '第 3s 出现的弹幕',
            color: '#ff00ff',
            time: 3
          }]
      }
    },
    methods: {
      onReady: function (res) {
        videoContext = appcan.createVideoContext('myVideo')
      },
      binderror(e) {
      },
      bindplay(e) {
      },
      bindpause(e) {
      },
      bindended(e) {
      },
      bindtimeupdate(e) {
      },
      bindfullscreenchange(e) {
        console.log(e)
      },
      bindSendDanmu() {
        videoContext.sendDanmu({
          text: '弹幕',
          color: getRandomColor()
        })
      },
      bindwaiting() {
        console.log('bindwaiting缓冲')
      },
      binderror() {
        console.log('binderror缓冲')
      }
    },
    mounted() {
      this.onReady()
    }
  }

</script>
```

```less
<style lang="less">
  // video.less
.btn-area {
  padding: 0px 15px;
}
</style>
```


