### appcan.downloadFile(OBJECT)

下载文件资源到本地。客户端直接发起一个 HTTP GET 请求，返回文件的本地临时路径。

### OBJECT参数说明：

|参数	|类型	|必填	|必填|
|---|----|----|----|
|url|	String|	是	|下载资源的 url|
|header|	Object|	否	|HTTP 请求 Header|
|success	|Function|	否	|下载成功后以 tempFilePath 的形式传给页面，res = {tempFilePath: '文件的临时路径'}|
|fail	|Function|	否	|接口调用失败的回调函数|
|complete	|Function|	否	|接口调用结束的回调函数（调用成功、失败都会执行）|

**注：文件的临时路径，在APP本次启动期间可以正常使用，如需持久保存，需在主动调用 appcan.saveFile，在APP下次启动时才能访问得到。**

### success返回参数说明：

|参数	|类型	|说明|
|----|----|----|
|tempFilePath|	String	|临时文件路径，下载后的文件会存储到一个临时文件|
|statusCode	|Number|	开发者服务器返回的 HTTP 状态码|

### 示例代码:

```javascript
appcan.downloadFile({
  url: 'https://example.com/audio/123', //仅为示例，并非真实的资源
  success: function (res) {
    appcan.playVoice({
      filePath: res.tempFilePath
    })
  }
})
```

### 返回值：

返回一个 **downloadTask** 对象，通过 **downloadTask**，可监听下载进度变化事件，以及取消下载任务。

### downloadTask

####downloadTask 对象的方法列表：

|方法	|参数	|说明|
|----|----|-----|
|onProgressUpdate|	callback	|监听下载进度变化|
|abort|		|中断下载任务|

### onProgressUpdate 返回参数说明：

|参数|	类型|	说明|
|----|-----|----|
|progress	|Number|	下载进度百分比|
|totalBytesWritten|	Number|	已经下载的数据长度，单位 Bytes|
|totalBytesExpectedToWrite|	Number|	预期需要下载的数据总长度，单位 Bytes

### 示例代码：

```javascript
const downloadTask = appcan.downloadFile({
  url: 'http://example.com/audio/123', //仅为示例，并非真实的资源
  success: function (res) {
    appcan.playVoice({
      filePath: res.tempFilePath
    })
  }
})
downloadTask.onProgressUpdate((res) => {
  console.log('下载进度', res.progress)
  console.log('已经下载的数据长度', res.totalBytesWritten)
  console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
})
downloadTask.abort() // 取消下载任务
```

### Bug & Tip

**tip**: 最大并发限制是 10 个
**tip**: 默认超时时间和最大超时时间都是 60s
**tip**: 网络请求的 referer 是不可以设置的

完整示例
此示例综合演示了上传和下载功能，可以上传一个图片后，下载刚才上传的图片并显示出来。


```html
<!--fileUpDownload.ac-->
<template>
  <ac-page>
    <ac-tabs class="type-common" index="{{ current1 }}" bounce="false" bindchange="handleChange($event, 'current1')"  ink-bar>
      <ac-tab>选项卡一</ac-tab>
      <ac-tab>选项卡二</ac-tab>
    </ac-tabs>

    <ac-mini-swiper class="content" index="{{ current1 }}" bindchange="handleContentChange($event, 'current1')">
      <ac-mini-swiper-item>
        <ac-view class="songList">
          <ac-view class="list_content">
            <ac-view ui:for="{{musicList}}">
              <ac-view class="song_name" :class="{nowSong:index===curIndex}">
                <ac-row space-bottom="0">
                  <ac-col vertical-align="middle">
                    <ac-view class="songname">{{musicList[index].epname}}</ac-view>
                    <ac-text class="singername">{{musicList[index].singer}}</ac-text>
                  </ac-col>
                  <ac-col width="85">
                    <ac-button type="primary"  bindtap="downFile(index)" disabled={{musicList[index].disabled}}>{{musicList[index].disabled ? '已' : ''}}下载</ac-button>
                  </ac-col>
                </ac-row>
                <ac-view class="progress_win">
                  <ac-progress percent="{{ progress }}" stroke-width="3" color="#ff4949"></ac-progress>
                </ac-view>
              </ac-view>
            </ac-view>
          </ac-view>
        </ac-view>
      </ac-mini-swiper-item>
      <ac-mini-swiper-item>
        <ac-view class="songList">
          <ac-view class="list_content">
            <ac-view ui:for="{{musicList2}}">
              <ac-view class="song_name" :class="{nowSong:index===curIndex}">
                <ac-row type="flex">
                  <ac-col vertical-align="middle">
                    <ac-view class="songname">{{musicList2[index].epname}}</ac-view>
                    <ac-text class="singername">{{musicList2[index].singer}}</ac-text>
                  </ac-col>
                  <ac-col width="90">
                    <ac-button type="primary" bindtap="playMusic(index)">{{isPlay ? '暂停' : '播放'}}</ac-button>
                  </ac-col>
                  <ac-col width="90">
                    <ac-button type="primary" bindtap="deleteSong">删除</ac-button>
                  </ac-col>
                </ac-row>
              </ac-view>
            </ac-view>
          </ac-view>
        </ac-view>
      </ac-mini-swiper-item>
    </ac-mini-swiper>


  </ac-page>
</template>
```

```javascript
// fileUpDownload.js
var downloadTask
var backgroundAudioManager
export default {
  data () {
    return {
      curIndex: 0,
      current: 0,
      disabled: false,
      musicList: [
        {
          id: '123',
          src: 'http://h6apptest.duapp.com/xjl.mp3',
          startTime: 0,
          coverImgUrl: 'http://images.uileader.com/20170927/ca859f0e-68ab-416a-a4d7-7324a98c7479.jpg',
          epname: '小精灵',
          singer: 'TFBOYS',
          duration: 112.770,
          webUrl: 'http://uileader.com',
          disabled: false
        }
      ],
      musicList2: [],
      filePath: '',
      fristDown: true,
      key: 'song',
      isPlay: false,
      firstStart: true,
      progress: 0,
      current1: 0
    }
  },
  methods: {
    changeSwiper (index) {
      // this.current = index
    },
    handlechange (index) {

    },
    handleChange (index, key) {
      this[key] = index
    },
    handleContentChange (index, key) {
      this[key] = index
    },

    downFile (index) {
      var self = this
      // 下载文件
      downloadTask = appcan.downloadFile({
        url: self.musicList[index].src,
        success: function (res) {
          // 下载成功后得到临时路径，
          // 保存为本地存储区（app应用沙箱）
          appcan.saveFile({
            tempFilePath: res.tempFilePath,
            success: function (res) {
              // 保存成功后返回本地文件路径
              var obj = {}
              obj.id = self.musicList[index].id
              obj.src = res.savedFilePath
              obj.epname = self.musicList[index].epname
              obj.singer = self.musicList[index].singer
              self.musicList2.push(obj)
              self.musicList[index].disabled = true
              appcan.showToast({
                title: '下载成功', icon: 'success'
              })
              // 保存到本地缓存
              self.storage(self.key, obj)
              // 获取本地文件列表
              self.getSavedFileList()
            }
          })
        },
        fail: function ({ errMsg }) {
          appcan.showToast({
            title: '文件下载失败'
          })
        },
        complete: function () {

        }
      })
      downloadTask.onProgressUpdate((res) => {
        self.progress = res.progress
      })
    },
    // 获取本地已保存的文件列表
    getSavedFileList () {
      appcan.getSavedFileList({
        success: function (res) {
        }
      })
    },
    // 存入缓存
    storage (song, content) {
      appcan.setStorageSync(song, content)
    },
    // 获取缓存
    getStorage (index) {
      var that = this
      var songContent = appcan.getStorageSync(index)
      if (songContent !== null) {
        if (songContent.id === this.musicList[0].id) {
          this.musicList[0].disabled = true
        } else {
          this.musicList[0].disabled = false
        }
        this.musicList2.push(songContent)
      }
      backgroundAudioManager = appcan.getBackgroundAudioManager()
      // 监听音乐播放。
      appcan.onBackgroundAudioPlay(function () {
        that.isPlay = true
      })
      // 监听音乐暂停。
      appcan.onBackgroundAudioPause(function () {
        that.isPlay = false
      })
      // 监听音乐停止。
      appcan.onBackgroundAudioStop(function () {
        that.isPlay = false
        that.firstStart = true
      })
    },
    // 播放/暂停
    playMusic (index) {
      if (this.isPlay) {
        backgroundAudioManager.pause()
      } else {
        if (this.firstStart) {
          this.setInfo(this.curIndex)
        } else {
          backgroundAudioManager.play()
        }
      }
    },
    deleteSong () {
      var that = this
      // 删除本地缓存
      appcan.removeStorageSync(this.key)
      // 根据当前路径删除本地文件
      appcan.removeSavedFile({
        filePath: that.musicList2[0].src,
        success: function (res) {
          // 获取本地文件列表
          that.getSavedFileList()
          that.progress = 0
          that.musicList[0].disabled = false
          that.musicList2.splice(0, that.musicList2.length)
          appcan.showToast({
            title: '已删除'
          })
        },
        fail: function () {
        },
        complete: function (res) {
        }
      })
    },
    getBackgroundAudioManager: function () {
      var propertys = ['duration', 'currentTime', 'paused', 'src', 'startTime', 'buffered', 'title', 'epname', 'singer', 'coverImgUrl', 'webUrl']
      propertys.forEach(property => {
        this.info = property + ':' + backgroundAudioManager[property]
      })
    },
    setInfo: function (songindex) {
      this.firstStart = false
      this.songName = this.musicList2[songindex].epname
      this.singerName = this.musicList2[songindex].singer
      this.imgSrc = this.musicList2[songindex].coverImgUrl
      this.curIndex = songindex

      backgroundAudioManager.src = this.musicList2[songindex].src
      backgroundAudioManager.startTime = this.musicList2[songindex].startTime
      backgroundAudioManager.coverImgUrl = this.musicList2[songindex].coverImgUrl
      backgroundAudioManager.epname = this.musicList2[songindex].epname
      backgroundAudioManager.singer = this.musicList2[songindex].singer
    }
  },
  mounted () {
    this.getStorage(this.key)
  }
}
```

