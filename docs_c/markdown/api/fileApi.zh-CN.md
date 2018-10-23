### appcan.saveFile(OBJECT)

保存文件到本地。如果是网络资源，需要先下载得到临时路径再保存。保存后，文件存储到该APP的本地沙箱中。

### OBJECT参数说明：

|参数	|类型	|必填	|说明|
|----|----|---|----|
|tempFilePath|	String|	是|	需要保存的文件的临时路径|
|success|	Function|	否	|返回文件的保存路径，res = {savedFilePath: '文件的保存路径'}|
|fail	|Function	|否	|接口调用失败的回调函数|
|complete	|Function|	否	|接口调用结束的回调函数（调用成功、失败都会执行）|

### success返回参数说明：

| 参数|	说明|
|---|----|
|savedFilePath|	文件的保存路径|

### 示例代码：

```javascript
appcan.chooseImage({
  success: function (res) {
    var tempFilePaths = res.tempFilePaths
    appcan.saveFile({
      tempFilePath: tempFilePaths[0],
      success: function (res) {
        var savedFilePath = res.savedFilePath
      }
    })
  }
})
```

### ug & tip
**tip**: 本地文件存储的大小限制为 10M

### appcan.getSavedFileList(OBJECT)

获取本地已保存的文件列表

### OBJECT参数说明：

|参数	|类型	|必填	|说明|
|----|----|----|---|
|success|	Function	|否	|接口调用成功的回调函数，返回结果见success返回参数说明|
|fail	|Function|	否	|接口调用失败的回调函数|
|complete|	Function|	否|	接口调用结束的回调函数（调用成功、失败都会执行）|

### success返回参数说明：

|参数	|类型	|说明|
|----|----|-----|
|errMsg|	String|	接口调用结果|
|fileList|	Object Array|	文件列表|

### fileList中的项目说明：

|键	|类型	|说明|
|---|----|----|
|filePath|	String|	文件的本地路径|
|createTime	|Number	|文件的保存时的时间戳，从1970/01/01 08:00:00 到当前时间的秒数|
|size|	Number	|文件大小，单位B|

示例代码：
```javascript
appcan.getSavedFileList({
  success: function (res) {
    console.log(res.fileList)
  }
})
```

### appcan.getSavedFileInfo(OBJECT)

获取本地文件的文件信息。此接口只能用于获取已保存到本地的文件，若需要获取临时文件信息，请使用 appcan.getFileInfo 接口。

### OBJECT参数说明：

|参数|	类型	|必填	|说明|
|-----|----|----|----|
|filePath|	String|	是	|文件路径|
|success|	Function|	否|	接口调用成功的回调函数，返回结果见success返回参数说明|
|fail|	Function|	否	|接口调用失败的回调函数|
|complete|	Function|	否	|接口调用结束的回调函数（调用成功、失败都会执行）|

### success返回参数说明：

|参数	|类型	|说明|
|----|-----|----|
|errMsg|	String	|接口调用结果|
|size	|Number|	文件大小，单位B|
|createTime|	Number|	文件的保存是的时间戳，从1970/01/01 08:00:00 到当前时间的秒数|

### 示例代码：

```javascript
appcan.getSavedFileInfo({
  filePath: 'file://somefile', //仅做示例用，非真正的文件路径
  success: function (res) {
    console.log(res.size)
    console.log(res.createTime)
  }
})
```

### appcan.removeSavedFile(OBJECT)

删除本地存储的文件

### OBJECT参数说明：

|参数	|类型	|必填	|说明|
|----|----|----|----|
|filePath|	String|	是	|需要删除的文件路径|
|success|	Function	|否|	接口调用成功的回调函数|
|fail|	Function|	否	|接口调用失败的回调函数|
|complete	|Function|	否|	接口调用结束的回调函数（调用成功、失败都会执行）|

### 示例代码：

```javascript
appcan.getSavedFileList({
  success: function (res) {
    if (res.fileList.length > 0) {
      appcan.removeSavedFile({
        filePath: res.fileList[0].filePath,
        complete: function (res) {
          console.log(res)
        }
      })
    }
  }
})
```

### appcan.openDocument(OBJECT)

使用外部APP打开文档

### OBJECT参数说明：

|参数	|说明	|必填	|说明|
|----|----|-----|----|
|filePath|	String	|是|	文件路径，可通过 downFile 获得|
|fileType|	String|	否|	文件类型，指定文件类型打开文件，有效值 doc, xls, ppt, pdf, docx, xlsx, pptx （暂未支持）|
|success|	Function|	否	|接口调用成功的回调函数|
|fail	|Function	|否|	接口调用失败的回调函数|
|complete|	Function|	否|	接口调用结束的回调函数（调用成功、失败都会执行）|

### 示例代码

```javascript
appcan.downloadFile({
  url: 'http://example.com/somefile.pdf',
  success: function (res) {
    var filePath = res.tempFilePath
    appcan.openDocument({
      filePath: filePath,
      success: function (res) {
        console.log('打开文档成功')
      }
    })
  }
})
```

### 完整示例

这里综合演示了音频文件的下载、下载进度显示、保存和删除。下载后在断网的环境下音频文件依然能够播放，因为它存在了本地沙箱中。

```html
<!--fileUpDownload.ac-->
<template>
    <ac-page>
      <ac-tabs class="type-common" index="{{ current1 }}" bounce="{{false}}" bindchange="handleChange($event, 'current1')"  ink-bar>
        <ac-tab>未下载</ac-tab>
        <ac-tab>已下载</ac-tab>
      </ac-tabs>


          <ac-view class="songList" ui:show="{{show}}">
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
          <ac-view class="songList" ui:show="{{!show}}">
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


    </ac-page>
  </template>

```

```javascript
<script>
  // fileUpDownload.js
var downloadTask
var backgroundAudioManager
export default {
  config: {
    "navigationBarTitleText": "文件的下载、保存与移除"
  },
  data () {
    return {
      show:true,
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
      // this[key] = index
      if(index === 1){
        this.show = false        
      }else{
        this.show = true
      }
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
          console.log(res,'downloadFile')
          // 下载成功后得到临时路径，
          // 保存为本地存储区（app应用沙箱）
          appcan.saveFile({
            tempFilePath: res.tempFilePath,
            success: function (res) {
              console.log('保存')
              console.log(res,'saveFile')
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

</script>
````
```less
<style lang="less">
  // fileUpDownload.less
.ac-tabs {
  background-color: #f5f5f5;
  &.type-common {
    .swiper-slide {
      padding: 10px;
      transition: color .1s;
    }
  }
  &.type-common {
    .active {
      border-bottom: 1px solid #39f;
      color: #39f;
    }
  }

}
.content {
  // height: 60px;
  // line-height: 60px;

  .swiper-slide {
    padding-left: 1em;
    padding-right: 1em;
  }
}




.songList {
  padding: 10px;
  .list_content{
    height: 250px;
    overflow: hidden;
  }
  .song_name{
    width: 100%;
    padding: 10px 0;
    // border: 1px solid red;
    position: relative;
    .songname{
      font-size: 14px;
      color: #1E1E1E;
    }
    .singername{
      font-size: 12px;
      color: #8C8C8C;
    }
    .progress_win{
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
      padding: 0 3px;
    }
  }
  .nowSong{
    .songname{
      color: #FF7000;
    }
    .singername{
      color: #FF7000;
    }
  }
  .ac-button{
    width: 80px;
    margin-left: 5px;
  }
}

</style>

```

