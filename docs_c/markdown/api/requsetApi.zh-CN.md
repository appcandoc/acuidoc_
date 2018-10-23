### appcan.request(OBJECT)

发送网络请求。

### OBJECT参数说明：

|参数名	|类型	|必填	|说明|
|---|----|----|---|
|url|	String|	是|	开发者服务器接口地址|
|data	|Object、String	|否|	请求的参数|
|header	|Object	|否	|设置请求的 header , header 中不能设置 Referer|
|method	|String	|否	|默认为 GET，有效值：OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT|
|dataType|	String|	否|	默认为 json。如果设置了 dataType 为 json，则会尝试对响应的数据做一次 JSON.parse|
|success	|Function|	否|	收到开发者服务成功返回的回调函数，res = {data: '开发者服务器返回的内容'}|
|fail	|Function|	否	|接口调用失败的回调函数|
|complete|	Function	|否|	接口调用结束的回调函数（调用成功、失败都会执行）|

### success返回参数说明：

|参数	|说明|
|---|---|
|data|	开发者服务器返回的数据|
|statusCode|	开发者服务器返回的状态码|
|header	|开发者服务器返回的 HTTP Response Header|


### data 数据说明

最终发送给服务器的数据是 String 类型，如果传入的 data 不是 String 类型，会被转换成 String 。转换规则如下：
对于 header['content-type'] 为 'application/json' 的数据，会对数据进行 JSON 序列化
对于 header['content-type'] 为 'application/x-www-form-urlencoded' 的数据，会将数据转换成 query string （encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...）

### 示例代码：

```javascript
appcan.request({
  url: 'test.php', //仅为示例，并非真实的接口地址
  data: {
    x: '',
    y: ''
  },
  header: {
    'content-type': 'application/json'
  },
  success: function (res) {
    console.log(res.data)
  }
})
```

### 返回值：

返回一个 **requestTask** 对象，通过 **requestTask**，可中断请求任务。

## requestTask 对象的方法列表：

|方法|	参数	|说明|
|----|----|---|
|abort|		|中断请求任务|

### 示例代码：

```javascript
const requestTask = appcan.request({
  url: 'test.php', //仅为示例，并非真实的接口地址
  data: {
    x: '',
    y: ''
  },
  header: {
    'content-type': 'application/json'
  },
  success: function (res) {
    console.log(res.data)
  }
})
requestTask.abort() // 取消请求任务
```


### Bug & Tip
1. content-type 默认为 'application/json'
2. 客户端的 HTTPS TLS 版本为1.2，但 Android 的部分机型还未支持 TLS 1.2，所以请确保 HTTPS 服务器的 TLS 版本支持1.2及以下版本；
3. 要注意 method 的 value 必须为大写（例如：GET）；
4. request 的默认超时时间和最大超时时间都是 60s
5. request 的最大并发数是 10
6. 网络请求的 referer 是不可以设置的
7. 如果出现两次相同请求，请自行百度跨域相关知识

### 完整示例

这里综合演示了request请求的使用方法。

````html
<ac-view class="page-body">
  <ac-view class="page-body-wording">
    <ac-view class="page-body-div">
      点击向服务器发起请求
    </ac-view>
    <ac-view class="code">
      <ac-view class="title">服务器返回：</ac-view>
      <pre>{{res}}</pre>
    </ac-view>
  </ac-view>
  <ac-view class="btn-area">
    <ac-button bindtap="makeRequest" type="primary" disabled="{{loading}}" loading="{{loading}}">request</ac-button>
  </ac-view>
</ac-view>
````


JS部分

```javascript
const requestUrl = 'http://www.uileader.com/touchac-backstage/testRequest.do'
export default {
  data () {
    return {
      loading: false,
      res: ''
    }
  },
  methods: {
    makeRequest () {
      var self = this
      self.loading = true
      appcan.request({
        url: requestUrl,
        data: {
          // noncestr: Date.now()
          x: '',
          y: ''
        },
        success: function (result) {
          self.loading = false
          console.log('request success', result)
          self.res = JSON.stringify(result, null, 4)
        },
        fail: function ({ errMsg }) {
          console.log('request fail', errMsg)
          self.loading = false
        }
      })
    }
  }
}
```

