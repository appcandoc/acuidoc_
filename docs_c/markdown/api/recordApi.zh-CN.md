### appcan.startRecord(OBJECT)
开始录音。当主动调用appcan.stopRecord，或者录音超过1分钟时自动结束录音，返回录音文件的临时文件路径。当用户离开APP时，此接口无法调用。

**OBJECT参数说明：**

参数 | 类型 | 必填 | 说明
---|---|---|---
success | Function | 否 | 录音成功后调用，返回录音文件的临时文件路径，res = {tempFilePath: '录音文件的临时路径'}
fail | Function | 否 | 接口调用失败的回调函数
complete | Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）

**注：文件的临时路径，在APP本次启动期间可以正常使用，如需持久保存，需在主动调用appcan.saveFile，在APP下次启动时才能访问得到。**

**success返回参数说明：**

参数 | 说明
---|---
tempFilePath | 录音文件的临时路径

### appcan.stopRecord()

​ 主动调用停止录音。

**示例代码：**

```javascript
appcan.startRecord({
  success: function (res) {
    var tempFilePath = res.tempFilePath
  },
  fail: function (res) {
    //录音失败
  }
})
setTimeout(function () {
  // 结束录音  
  apcpan.stopRecord()
}, 10000)
```
**Bug & Tip**

1. tip: appcan.startRecord 接口需要用户授权，请兼容用户拒绝授权的场景。

**完整示例**

这里综合演示了录音与播放功能。

  
```html
<ac-view class="container">
  <ac-view class="page-body">
    <ac-view class="page-section">
      <div ac:if="recording === false && playing === false && hasRecord === false">
        <ac-view class="page-body-time">
          <ac-text class="time-big">{{ formatedRecordTime }}</ac-text>
        </ac-view>
        <ac-view class="page-body-buttons">
          <ac-view class="page-body-button"></ac-view>
          <ac-view class="page-body-button" @tap="startRecord">
            <img src="./record.png"></img>
          </ac-view>
          <ac-view class="page-body-button"></ac-view>
        </ac-view>
      </div>

      <div ac:if="recording === true">
        <ac-view class="page-body-time">
          <ac-text class="time-big">{{ formatedRecordTime }}</ac-text>
        </ac-view>
        <ac-view class="page-body-buttons">
          <ac-view class="page-body-button"></ac-view>
          <ac-view class="page-body-button" @tap="stopRecord">
            <ac-view class="button-stop-record"></ac-view>
          </ac-view>
          <ac-view class="page-body-button"></ac-view>
        </ac-view>
      </div>

      <div ac:if="hasRecord === true && playing === false">
        <ac-view class="page-body-time">
          <ac-text class="time-big">{{ formatedPlayTime }}</ac-text>
          <ac-text class="time-small">{{ formatedRecordTime }}</ac-text>
        </ac-view>
        <ac-view class="page-body-buttons">
          <ac-view class="page-body-button"></ac-view>
          <ac-view class="page-body-button" @tap="playVoice">
            <img src="./play.png"></img>
          </ac-view>
          <ac-view class="page-body-button" @tap="clear">
            <img src="./trash.png"></img>
          </ac-view>
        </ac-view>
      </div>

      <div ac:if="hasRecord === true && playing === true">
        <ac-view class="page-body-time">
          <ac-text class="time-big">{{ formatedPlayTime }}</ac-text>
          <ac-text class="time-small">{{ formatedRecordTime }}</ac-text>
        </ac-view>
        <ac-view class="page-body-buttons">
          <ac-view class="page-body-button" @tap="stopVoice">
            <img src="./stop.png"></img>
          </ac-view>
          <ac-view class="page-body-button" @tap="clear">
            <img src="./trash.png"></img>
          </ac-view>
        </ac-view>
      </div>
    </ac-view>
  </ac-view>
</ac-view>
```
**LESS部分**

```less
img {
  width: 80px;
  height: 80px;
}

.page-body-wrapper {
  justify-content: space-between;
  flex-grow: 1;
  margin-bottom: 300/20rem;
}

.page-body-time {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.time-big {
  font-size: 30px;
  margin: 1rem;
}

.time-small {
  font-size: 1.5rem;
}

.page-body-buttons {
  margin-top: 3rem;
  display: flex;
  justify-content: space-around;
}

.button-stop-record {
  width: 5.5rem;
  height: 110/20rem;
  border: 20/20rem solid #fff;
  background-color: #f55c23;
  border-radius: 130/20rem;
  margin: 0 auto;
}
```
**JS部分**

```javascript
var util = require('@/utils/util')
var playTimeInterval
var recordTimeInterval
export default {
  data () {
    return {
      recording: false,
      playing: false,
      hasRecord: false,
      recordTime: 0,
      playTime: 0,
      formatedRecordTime: '00:00:00',
      formatedPlayTime: '00:00:00',
      tempFilePath: ''
    }
  },
  methods: {
    onHide () {
      if (this.$data.playing) {
        this.stopVoice()
      } else if (this.$data.recording) {
        this.stopRecordUnexpectedly()
      }
    },
    startRecord () {
      this.setData({ recording: true })

      var that = this
      recordTimeInterval = setInterval(function () {
        var recordTime = that.$data.recordTime += 1
        that.setData({
          formatedRecordTime: util.formatTime(that.$data.recordTime),
          recordTime: recordTime
        })
      }, 1000)
      appcan.startRecord({
        success: function (res) {
          that.setData({
            hasRecord: true,
            tempFilePath: res.tempFilePath,
            formatedPlayTime: util.formatTime(that.$data.playTime)
          })
        },
        complete: function () {
          that.setData({ recording: false })
          clearInterval(recordTimeInterval)
        }
      })
    },
    stopRecord () {
      appcan.stopRecord()
    },
    stopRecordUnexpectedly () {
      var that = this
      appcan.stopRecord({
        success: function () {
          console.log('stop record success')
          clearInterval(recordTimeInterval)
          that.setData({
            recording: false,
            hasRecord: false,
            recordTime: 0,
            formatedRecordTime: util.formatTime(0)
          })
        }
      })
    },
    playVoice () {
      var that = this
      playTimeInterval = setInterval(function () {
        var playTime = that.$data.playTime + 1
        console.log('update playTime', playTime)
        that.setData({
          playing: true,
          formatedPlayTime: util.formatTime(playTime),
          playTime: playTime
        })
      }, 1000)
      appcan.playVoice({
        filePath: this.$data.tempFilePath,
        success: function () {
          clearInterval(playTimeInterval)
          var playTime = 0
          console.log('play voice finished')
          that.setData({
            playing: false,
            formatedPlayTime: util.formatTime(playTime),
            playTime: playTime
          })
        }
      })
    },
    pauseVoice () {
      clearInterval(playTimeInterval)
      appcan.pauseVoice()
      this.setData({
        playing: false
      })
    },
    stopVoice () {
      clearInterval(playTimeInterval)
      this.setData({
        playing: false,
        formatedPlayTime: util.formatTime(0),
        playTime: 0
      })
      appcan.stopVoice()
    },
    clear () {
      clearInterval(playTimeInterval)
      appcan.stopVoice()
      this.setData({
        playing: false,
        hasRecord: false,
        tempFilePath: '',
        formatedRecordTime: util.formatTime(0),
        recordTime: 0,
        playTime: 0
      })
    }
  }
}
```
