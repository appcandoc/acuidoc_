### appcan.uploadFile(OBJECT)


将本地资源上传到开发者服务器。如页面通过 appcan.chooseImage 等接口获取到一个本地资源的临时文件路径后，可通过此接口将本地资源上传到指定服务器。客户端发起一个 HTTPS POST 请求，其中 **content-type** 为 **multipart/form-data** 。

### BJECT参数说明：

|参数	|类型	|必填	|说明|
|---|---|----|----|
|url|	String|	是	|开发者服务器 url|
|filePath	|String|	是	|要上传文件资源的路径|
|name|	String|	是	|文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容|
|header|	Object|	否|	HTTP 请求 Header , header 中不能设置 Referer|
|formData|	Object	|否|	HTTP 请求中其他额外的 form data|
|success|	Function	|否|	接口调用成功的回调函数|
|fail	|Function|	否|	接口调用失败的回调函数|
|complete|	Function	|否|	接口调用结束的回调函数（调用成功、失败都会执行）|

### success返回参数说明：

|参数|	类型|	说明|
|----|----|----|
|data|	String|	开发者服务器返回的数据|
|statusCode|	Number|	HTTP状态码|

### 示例代码：

````javascript
appcan.chooseImage({
  success: function (res) {
    var tempFilePaths = res.tempFilePaths
    appcan.uploadFile({
      url: 'http://zjj.appcan.cn:8095/webApi/upTest', //仅为示例，非真实的接口地址
      filePath: tempFilePaths[0],
      name: 'file',
      formData: {
        'user': 'test'
      },
      success: function (res) {
        var data = res.data
        //do something
      }
    })
  }
})
````

### 返回值：

返回一个 **uploadTask** 对象，通过 **uploadTask**，可监听上传进度变化事件，以及取消上传任务。

## uploadTask

uploadTask 对象的方法列表：

|方法|	参数|	说明|
|----|----|----|
|onProgressUpdate|	callback|	监听上传进度变化|
|abort	|	|中断上传任务|

### onProgressUpdate 返回参数说明：

|参数	|类型	|说明|
|-----|----|----|
|progress	|Number|	上传进度百分比|
|totalBytesSent|	Number|	已经上传的数据长度，单位 Bytes|
|totalBytesExpectedToSend	|Number|	预期需要上传的数据总长度，单位 Bytes|

### 示例代码：

```javascript
const uploadTask = appcan.uploadFile({
  url: 'http://zjj.appcan.cn:8095/webApi/upTest', //仅为示例，非真实的接口地址
  filePath: tempFilePaths[0],
  name: 'file',
  formData: {
    'user': 'test'
  },
  success: function (res) {
    var data = res.data
    //do something
  }
})
uploadTask.onProgressUpdate((res) => {
  console.log('上传进度', res.progress)
  console.log('已经上传的数据长度', res.totalBytesSent)
  console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend)
})
uploadTask.abort() // 取消上传任务
```

### Bug & Tip
**tip**: 最大并发限制是 10 个
**tip**: 默认超时时间和最大超时时间都是 60s
