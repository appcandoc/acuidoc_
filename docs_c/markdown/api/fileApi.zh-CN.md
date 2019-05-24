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
              that.tempFilePath = savedFilePath
                alert(savedFilePath)
            }
        })
    }
})
```

### bug & tip
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
        if (res.fileList.length > 0) {
            appcan.removeSavedFile({
                filePath: res.fileList[0].filePath,
                complete: function (res) {
                  alert(JSON.stringify(res))
                }
            })
        }
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
    filePath: this.tempFilePath,
    success: function (res) {
        alert(res.size)
      alert(res.createTime)
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
appcan.openDocument({
  filePath: 'http://bmob-cdn-6725.b0.upaiyun.com/2018/11/22/cb5d0d5c40e8136e803c23b2bacf01f3.pdf',
  fileType: 'pdf',
  success: function (res) {
  alert('打开文档成功')
}
})
```

### 完整示例

这里综合演示了音频文件的下载、下载进度显示、保存和删除。下载后在断网的环境下音频文件依然能够播放，因为它存在了本地沙箱中。

```html
<!--fileUpDownload.ac-->
 <ac-layout>
        <ac-button type="primary" @tap="saveFile">saveFile</ac-button>
        <ac-button type="primary" @tap="getSavedFileList">getSavedFileList</ac-button>
        <ac-button type="primary" @tap="getSavedFileInfo">getSavedFileInfo</ac-button>
        <ac-button type="primary" @tap="removeSavedFile">removeSavedFile</ac-button>
        <ac-button type="primary" @tap="openDocument">openDocument2</ac-button>
    </ac-layout>

```

```javascript
var downloadTask
  var backgroundAudioManager
  export default {
    config: {
      "navigationBarTitleText": "文件的下载、保存与移除"
    },
    data() {
      return {
        tempFilePath: ''
      }
    },
    methods: {
      saveFile() {
        let that = this
        appcan.chooseImage({
          success: function (res) {
            var tempFilePaths = res.tempFilePaths
            appcan.saveFile({
              tempFilePath: tempFilePaths[0],
              success: function (res) {
                var savedFilePath = res.savedFilePath
                that.tempFilePath = savedFilePath
                alert(savedFilePath)
              }
            })
          }
        })
      },
      getSavedFileList() {
        appcan.getSavedFileList({
          success: function (res) {
            alert(JSON.stringify(res))
          }
        })
      },
      getSavedFileInfo() {
        appcan.getSavedFileInfo({
          filePath: this.tempFilePath,
          success: function (res) {
            alert(JSON.stringify(res))
          }
        })
      },
      removeSavedFile() {
        appcan.getSavedFileList({
          success: function (res) {
            if (res.fileList.length > 0) {
              appcan.removeSavedFile({
                filePath: res.fileList[0].filePath,
                complete: function (res) {
                  alert(JSON.stringify(res))
                }
              })
            }
          }
        })

      },
      openDocument() {
        appcan.downloadFile({
          url: 'http://bmob-cdn-6725.b0.upaiyun.com/2018/11/22/cb5d0d5c40e8136e803c23b2bacf01f3.pdf',
          success: (res) => {
            alert('下载完成'+ JSON.stringify(res))
            appcan.saveFile({
              tempFilePath:res.tempFilePath,
              success:(res)=>{
                alert('保存至本地'+ JSON.stringify(res))
                appcan.openDocument({
                  filePath: res.savedFilePath,
                  fileType: 'pdf',
                  success: function (res) {
                    alert('打开文档成功')
                  }
                })
              }
            })
          }
        })
      }
    },
    mounted() {
    }
  }
````

