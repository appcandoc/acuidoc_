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

#### downloadTask 对象的方法列表：

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
<ac-layout>
        <ac-button @tap="downloadFile" type="primary">下载</ac-button>
    </ac-layout>
    
```

```javascript
export default {
      config: {
            navigationBarTitleText: "下载文件"
        },
        data() {
            return {

            }
        },
        methods: {
          downloadFile () {
            appcan.chooseImage({
              success: function (res) {
                var tempFilePaths = res.tempFilePaths
                const uploadTask = appcan.uploadFile({
                  url: 'http://zjj.appcan.cn:8095/webApi/upTest', //仅为示例，非真实的接口地址
                  filePath: tempFilePaths[0],
                  name: 'file',
                  formData: {
                    'user': 'test'
                  },
                  success: function (res) {
                    var data = res.data
                    alert('上传成功'+JSON.stringify(res))
                    const downloadMr = appcan.downloadFile({
                      url: data.path,
                      success: function (res) {
                        alert('下载成功'+JSON.stringify(res))
                      }
                    })
                    downloadMr.onProgressUpdate((res)=>{
                      alert('监听下载的进度'+JSON.stringify(res))
                    })
                    downloadMr.abort((res)=>{
                      alert('取消下载'+JSON.stringify(res))
                    })
                  }
                })

              }
            })

          }
        }
    }
```

