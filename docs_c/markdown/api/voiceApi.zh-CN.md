### appcan.playVoice(OBJECT)
开始播放语音，同时只允许一个语音文件正在播放，如果前一个语音文件还没播放完，将中断前一个语音播放。

网络音频文件需要先下载再播放。

**OBJECT参数说明：**

参数 | 类型 | 必填 | 说明
---|---|---|---
filePath | String | 是 | 需要播放的语音文件的文件路径
success | Function | 否 | 接口调用成功的回调函数
fail | Function | 否 | 接口调用失败的回调函数
complete | Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）

**示例代码：**

```javascript
appcan.startRecord({
  success: function (res) {
    var tempFilePath = res.tempFilePath
    appcan.playVoice({
      filePath: tempFilePath,
      complete: function () {
      }
    })
  }
})
```
### appcan.pauseVoice()

暂停正在播放的语音。再次调用ui.playVoice播放同一个文件时，会从暂停处开始播放。如果想从头开始播放，需要先调用 appcan.stopVoice。

**示例代码：**

```javascript
appcan.startRecord({
  success: function (res) {
    var tempFilePath = res.tempFilePath
    appcan.playVoice({
      filePath: tempFilePath
    })
    setTimeout(function () {
      //暂停播放
      appcan.pauseVoice()
    }, 5000)
  }
})
```
### appcan.stopVoice()

结束播放语音。

**示例代码：**

```javascript
appcan.startRecord({
  success: function (res) {
    var tempFilePath = res.tempFilePath
    appcan.playVoice({
      filePath: tempFilePath
    })
    setTimeout(function () {
      appcan.stopVoice()
    }, 5000)
  }
})
```
**完整示例**

这里模仿了微信语音消息的播放方式。


```html
<ac-view class="win">
  <ac-view class="sample_win">
    <ac-view class="sample_title">每次点击从头播放</ac-view>
    <ac-view class="sample_content">
      <ac-view class="voice" @tap="playVoice" v-show="voice">
        <ac-row type="flex">
          <ac-col>
            <ac-text>54''</ac-text>
          </ac-col>
          <ac-col width="50" align="right" vertical-align="middle">
            <ac-view class="icon_voice" :class="voiceClass"></ac-view>
          </ac-col>
        </ac-row>
      </ac-view>
      <ac-view>{{ voice ? '' : '下载中...' }}</ac-view>
    </ac-view>
  </ac-view>
  <ac-view class="sample_win">
    <ac-view class="sample_title">每次点击从暂停处继续播放</ac-view>
    <ac-view class="sample_content">
      <ac-view class="voice2" @tap="playVoice2" v-show="voice2">
        <ac-row type="flex">
          <ac-col>
            <ac-text>58''</ac-text>
          </ac-col>
          <ac-col width="50" align="right" vertical-align="middle">
            <ac-view class="icon_voice" :class="voiceClass2"></ac-view>
          </ac-col>
        </ac-row>
      </ac-view>
      <ac-view>{{ voice2 ? '' : '下载中...' }}</ac-view>
    </ac-view>
  </ac-view>
</ac-view>
```
**JS部分**

```javascript
export default {
  data () {
    return {
      voiceClass: '',
      downUrl: 'http://h6apptest.duapp.com/xjl.mp3',
      downUrl2: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46',
      voicePath: '',
      voicePath2: '',
      isPlay: false,

      voiceClass2: '',
      isPlay2: false,
      voice:false,
      voice2:false
    }
  },
  //
  methods: {
    playVoice () {
      var that = this
      this.isPlay2 = false
      this.voiceClass2 = ''
      if (this.isPlay) {
        this.stopVoice()
        this.isPlay = false
      } else {
        this.voiceClass = 'icon_voice_action'
        appcan.playVoice({
          filePath: that.voicePath,
          success: function (res) {
            console.log('播放成功')
          },
          fail () {
            console.log('播放失败')
          },
          complete: function () {
            console.log('播放失败/成功')
          }
        })
        this.isPlay = true
      }
    },
    playVoice2 () {
      var that = this
      this.isPlay = false
      this.voiceClass = ''
      if (this.isPlay2) {
        this.pauseVoice()
        this.isPlay2 = false
      } else {
        this.voiceClass2 = 'icon_voice_action'
        appcan.playVoice({
          filePath: that.voicePath2,
          success: function (res) {
            console.log('播放成功')
          },
          fail () {
            console.log('播放失败')
          },
          complete: function () {
            console.log('播放失败/成功')
          }
        })
        this.isPlay2 = true
      }
    },
    pauseVoice () {
      appcan.pauseVoice()
      this.voiceClass2 = ''
    },
    stopVoice () {
      appcan.stopVoice()
      this.voiceClass = ''
    },
    downloadVoice () {
      var that = this
      appcan.downloadFile({
        url: that.downUrl,
        success: function (res) {
          that.voicePath = res.tempFilePath
          console.log('下载成功')
          that.voice=true
        },
        fail: function ({ errMsg }) {
          console.log('下载失败')
        },
        complete: function () {
          console.log('下载完成')
        }
      })
    },
    downloadVoice2 () {
      var that = this
      appcan.downloadFile({
        url: that.downUrl2,
        success: function (res) {
          that.voicePath2 = res.tempFilePath
          console.log('下载成功')
          that.voice2=true
        },
        fail: function ({ errMsg }) {
          console.log('下载失败')
        },
        complete: function () {
          console.log('下载完成')
        }
      })
    }

  },
  mounted () {
    this.downloadVoice()
    this.downloadVoice2()
  }

}
```
**LESS部分**

```less
.win{
  background-color: #fff;
}

.voice,
.voice2{
  width: 150px;
  border-radius:7px;
  border: 1px solid #dcdada;
  padding: 8px 10px;
  .ui-text{
    line-height: 15px;
    font-size: 14px;
    line-height: 20px;
  }
  .icon_voice{
    width: 20px;
    height: 20px;
    background: url(icon_voice.png) no-repeat center center;
    background-position: 0px -40px;
    background-size: 20px;
  }
  .icon_voice_action{
    -webkit-animation: voiceplay 1s infinite step-start;
    -moz-animation: voiceplay 1s infinite step-start;
    -o-animation: voiceplay 1s infinite step-start;
    animation: voiceplay 1s infinite step-start;
  }
}
@-webkit-keyframes voiceplay {
  0%{
    background-position: 0px -40px;
  }
  33.333333% {
    background-position: 0px -60px;
  }
  66.666666% {
    background-position: 0px 0px;
  }
  100% {
    background-position: 0px -20px;
  }
}

.sample_title{
  background-color: #F7F9FB;
  font-size: 14px;
  font-weight: bold;
  line-height: 50px;
  padding-left: 20px;
}
.sample_content{
  padding: 10px 20px;
  line-height: 50px;
}
```