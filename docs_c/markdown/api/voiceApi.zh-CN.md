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

暂停正在播放的语音。再次调用appcan.playVoice播放同一个文件时，会从暂停处开始播放。如果想从头开始播放，需要先调用 appcan.stopVoice。

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
<ac-layout>
        <ac-button type="primary" @tap="playVoice">playVoice</ac-button>
        <ac-button type="primary" @tap="pauseVoice">pauseVoice</ac-button>
        <ac-button type="primary" @tap="stopVoice">stopVoice</ac-button>
    </ac-layout>
```
**JS部分**

```javascript
export default {
        config: {
            navigationBarTitleText: '音频播放'
        },
        data() {
            return {}
        },
        methods: {
            playVoice: function () {
                appcan.playVoice({
                    filePath: 'https://engineersong.github.io/musicList/shake_match.mp3',
                    complete: () => {

                    }
                })
            },
            pauseVoice: function () {
                appcan.pauseVoice()
            },
            stopVoice: function () {
                appcan.stopVoice()
            }
        },
        mounted() {
        }
    }
```
**LESS部分**

```less

```
