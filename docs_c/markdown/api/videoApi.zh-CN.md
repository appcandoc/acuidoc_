### appcan.chooseVideo(OBJECT)
拍摄视频或从手机相册中选视频，返回视频的临时文件路径。

**OBJECT参数说明：**

参数 | 类型 | 必填 | 说明
---|---|---|---
sourceType | StringArray | 否 | album 从相册选视频，camera 使用相机拍摄，默认为：['album', 'camera']
maxDuration | Number | 否 | 拍摄视频最长拍摄时间，单位秒。最长支持 60 秒
camera | String | 否 | 默认调起的为前置还是后置摄像头。front: 前置，back: 后置，默认 back
success | Function | 否 | 接口调用成功，返回视频文件的临时文件路径，详见返回参数说明
fail | Function | 否 | 接口调用失败的回调函数
complete | Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）

**success返回参数说明：**

参数 | 说明
---|---
tempFilePath | 选定视频的临时文件路径
duration | 选定视频的时间长度
size | 选定视频的数据量大小
height | 返回选定视频的长
width | 返回选定视频的宽

**注：文件的临时路径，在APP本次启动期间可以正常使用，如需持久保存，需在主动调用 appcan.saveFile，在APP下次启动时才能访问得到。**

**完整示例**
这里综合演示了摄像或从相册选择视频，选择完后显示出来并播放。

   
```html
<ac-view class="content">
  <ac-row height="40">
    <ac-col span="3" vertical-align="middle">
      视频来源：
    </ac-col>
    <ac-col span="9">
        <ac-input :value="sourceType[sourceTypeIndex]"></ac-input>
    </ac-col>
  </ac-row>
  <ac-row height="40">
    <ac-col span="3" vertical-align="middle">
      摄像头：
    </ac-col>
    <ac-col span="9">
        <ac-input value="camera[cameraIndex]"></ac-input>
    </ac-col>
  </ac-row>
  <ac-video class="video" controls :src="src"></ac-video>
  <ac-button ac:if="!src" type="primary" @tap="chooseVideo">选择视频</ac-button>
</ac-view>
```
**JS部分**

```javascript
var sourceType = [['camera'], ['album'], ['camera', 'album']]
var camera = [['front'], ['back'], ['front', 'back']]
var duration = Array.apply(null, { length: 60 }).map(function (n, i) {
  return i + 1
})
export default {
  data () {
    return {
      sourceTypeIndex: 2,
      sourceType: ['拍摄', '相册', '拍摄或相册'],
      cameraIndex: 2,
      camera: ['前置', '后置', '前置或后置'],
      durationIndex: 59,
      duration: duration.map(function (t) { return t + '秒' }),
      src: ''
    }
  },
  methods: {
    sourceTypeChange: function (e) {
      this.setData({
        sourceTypeIndex: e.detail.value
      })
    },
    cameraChange: function (e) {
      this.setData({
        cameraIndex: e.detail.value
      })
    },
    durationChange: function (e) {
      this.setData({
        durationIndex: e.detail.value
      })
    },
    chooseVideo: function () {
      var that = this
      appcan.chooseVideo({
        sourceType: sourceType[this.$data.sourceTypeIndex],
        camera: camera[this.$data.cameraIndex],
        maxDuration: duration[this.$data.durationIndex],
        success: function (res) {
          console.log(res)
          that.setData({
            src: res.tempFilePath
          })
        }
      })
    }
  }
}
```
### appcan.saveVideoToPhotosAlbum(OBJECT)
保存视频到系统相册，需要用户授权。如果是网络视频，需要先下载得到临时路径再保存到相册。

**OBJECT参数说明：**

参数名 | 类型 | 必填 | 说明
---|---|---|---
filePath | String | 是 | 视频文件路径，可以是临时文件路径也可以是永久文件路径
success | Function | 否 | 接口调用成功的回调函数
fail | Function | 否 | 接口调用失败的回调函数
complete | Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）

**success返回参数说明：**

参数名 | 类型 | 说明
---|---|---
errMsg | String | 调用结果

**完整示例**
这里演示了网络视频的播放、发射弹幕和保存到相册功能。

  
```html
<ac-view class="win">
  <ac-view class="img_win">
    <ac-video id="myVideo" style="width:100%" :src="videoSrc"
    :danmu-list="danmuList" enable-danmu danmu-btn controls></ac-video>
  </ac-view>
  <ac-view class="btn-area">
    <ac-button type="primary" @tap="bindSendDanmu">发送弹幕</ac-button>
  </ac-view>
  <ac-view class="btn-area">
    <ac-button type="primary" @tap="saveVideo">保存到手机相册</ac-button>
  </ac-view>
</ac-view>
```
**JS部分**

```javascript
var videoContext
function getRandomColor () {
  const rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}
export default {
  data () {
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
    saveVideo () {
      var self = this
      appcan.downloadFile({
        url: self.videoSrc,
        success: function (res) {
          console.log("视频下载成功")
          appcan.showToast({
            title: '视频下载成功'
          })
          appcan.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success: function (res) {
              appcan.showToast({
                title: '已保存到相册'
              })
            },
            fail () {
              appcan.showToast({
                title: '保存失败'
              })
            },
            complete () {

            }
          })
        },
        fail: function ({ errMsg }) {
          appcan.showToast({
            title: '视频下载失败'
          })
        },
        complete: function () {

        }
      })
    },
    onReady: function (res) {
      videoContext = appcan.createVideoContext('myVideo')
    },
    bindSendDanmu () {
      videoContext.sendDanmu({
        text: '测试弹幕',
        color: getRandomColor()
      })
    }
  },
  mounted () {
    this.onReady()
  }

}
```
