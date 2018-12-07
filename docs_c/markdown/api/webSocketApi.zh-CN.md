### appcan.connectSocket(OBJECT)

创建一个 WebSocket 连接；

#### 支持存在多个 WebSokcet 连接，每次成功调用 appcan.connectSocket 会返回一个新的 SocketTask。

### OBJECT参数说明：

|参数	|类型	|必填|	说明|
|----|-----|-----|----|
|url	|String|	是|	开发者服务器接口地址，必须是 wss 协议，且域名必须是后台配置的合法域名|
|protocols|	StringArray|	否|	子协议数组|
|success|	Function|	否	|接口调用成功的回调函数|
|fail|	Function	|否	|接口调用失败的回调函数|
|complete|	Function|	否|	接口调用结束的回调函数（调用成功、失败都会执行）|

### 示例代码：

```javascript
appcan.connectSocket({
  url: 'test.php',
  protocols: ['protocol1']
})
```

### appcan.onSocketOpen(CALLBACK)

监听WebSocket连接打开事件。

### 示例代码：

```javascript
appcan.connectSocket({
  url: 'test.php'
})
appcan.onSocketOpen(function (res) {
  console.log('WebSocket连接已打开！')
})
```


### appcan.onSocketError(CALLBACK)

监听WebSocket错误。

### 示例代码：

```javascript
appcan.connectSocket({
  url: 'test.php'
})
appcan.onSocketOpen(function (res) {
  console.log('WebSocket连接已打开！')
})
appcan.onSocketError(function (res) {
  console.log('WebSocket连接打开失败，请检查！')
})
```

### appcan.sendSocketMessage(OBJECT)

通过 WebSocket 连接发送数据，需要先 appcan.connectSocket，并在 appcan.onSocketOpen 回调之后才能发送。

### OBJECT参数说明：

|参数	|类型	|必填	|说明|
|----|-----|-----|-----|
|data|	String/ArrayBuffer|	是|	需要发送的内容|
|success	|Function	|否|	接口调用成功的回调函数|
|fail|	Function|	否	|接口调用失败的回调函数|
|complete|	Function|	否	|接口调用结束的回调函数（调用成功、失败都会执行）|

### 示例代码：

```javascript
var socketOpen = false
var socketMsgQueue = []
appcan.connectSocket({
  url: 'test.php'
})
appcan.onSocketOpen(function (res) {
  socketOpen = true
  for (var i = 0; i < socketMsgQueue.length; i++) {
    sendSocketMessage(socketMsgQueue[i])
  }
  socketMsgQueue = []
})
function sendSocketMessage (msg) {
  if (socketOpen) {
    appcan.sendSocketMessage({
      data: msg
    })
  } else {
    socketMsgQueue.push(msg)
  }
}
```

### appcan.onSocketMessage(CALLBACK)

监听WebSocket接受到服务器的消息事件。

### CALLBACK返回参数：

|参数	|类型	|说明|
|-----|-----|-----|
|data|	String/ArrayBuffer|	服务器返回的消息|

### 示例代码：

```javascript
appcan.connectSocket({
  url: 'test.php'
})
appcan.onSocketMessage(function (res) {
  console.log('收到服务器内容：' + res.data)
})
```

### appcan.closeSocket(OBJECT)

关闭WebSocket连接。

### OBJECT参数说明：

|参数	|类型	|必填	|说明|
|-----|-----|-----|----|
|code|	Number|	否|	一个数字值表示关闭连接的状态号，表示连接被关闭的原因。如果这个参数没有被指定，默认的取值是1000 （表示正常连接关闭）|
|reason|	String|	否|	一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于123字节的UTF-8 文本（不是字符）|
|success|	Function|	否	|接口调用成功的回调函数|
|fail|	Function|	否	|接口调用失败的回调函数|
|complete	|Function|	否|	接口调用结束的回调函数（调用成功、失败都会执行）|

### appcan.onSocketClose(CALLBACK)

监听WebSocket关闭。

```javascript
appcan.connectSocket({
  url: 'test.php'
})
//注意这里有时序问题，
//如果 appcan.connectSocket 还没回调 appcan.onSocketOpen，而先调用 appcan.closeSocket，那么就做不到关闭 WebSocket 的目的。
//必须在 WebSocket 打开期间调用 appcan.closeSocket 才能关闭。
appcan.onSocketOpen(function () {
  appcan.closeSocket()
})
appcan.onSocketClose(function (res) {
  console.log('WebSocket 已关闭！')
})
```

### Bug & Tip
**tip**: createSocket 链接默认和最大超时时间都是 60s
**tip**: 网络请求的 referer 是不可以设置的

### 完整示例

这里综合演示了webSocket的建立连接、发送数据、关闭连接等功能。

```html
 <ac-layout>
        <ac-view class="content">
            <ac-button @tap="establish">创建 WebSocket 连接</ac-button>
            <ac-button @tap="close">关闭 WebSocket 连接</ac-button>
            <ac-input :value="exampleText" @input="handleInputChange" placeholder="请输入文字测试" :disabled="!open"></ac-input>
            <ac-button @tap='sendSocketMessage' type="primary" :disabled="!disabled">通过 WebSocket 连接发送数据</ac-button>
            <ac-textarea :value="text" class="info"></ac-textarea>
        </ac-view>
    </ac-layout>
```


### JS部分

```javascript
const sendUrl = 'http://192.168.89.35:56717'
  export default {
    data () {
      return {
        loading: false,
        disabled: false,
        open: false,
        text: '',
        socketOpen: false,
        exampleText: '',
        socketMsgQueue: []
      }
    },
    methods: {
      handleInputChange (val) {
        this.exampleText = val
        // console.log(this.exampleText)
      },
      establish () {
        var that = this
        that.loading = true
        appcan.connectSocket({
          url: sendUrl,
          success: function (res) {
            appcan.showToast({
              title: 'WebSocket创建成功！'
            })
            that.loading = false
            that.socketOpen = true
            that.disabled = true
            that.open = true

            appcan.onSocketOpen(function (res) {
              appcan.showToast({
                title: 'WebSocket连接已打开！'
              })
              for (var i = 0; i < that.socketMsgQueue.length; i++) {
                that.sendSocketMessage(that.socketMsgQueue[i])
              }
              that.socketMsgQueue = []
            })
            appcan.onSocketError(function (res) {
              appcan.showToast({
                title: 'WebSocket连接打开失败，请检查！'
              })
            })
            appcan.onSocketMessage(function (res) {
              that.text += '收到服务器返回内容：' + res.data + '\n'
            })
          },
          fail: function (res) {
            appcan.showToast({
              title: 'WebSocket创建失败！'
            })
            that.loading = false
            that.socketOpen = false
            that.disabled = false
            that.open = false
          }
        })
      },
      sendSocketMessage () {
        var that = this
        var msg = that.exampleText
        if (that.socketOpen) {
          appcan.sendSocketMessage({
            data: msg,
            success: function (res) {
              console.log(res)
            },
            fail: function (res) {
              appcan.showToast({
                title: '发送失败！'
              })
            }
          })
        } else {
          that.socketMsgQueue.push(msg)
        }
      },
      close () {
        var that = this
        that.loading = true
        appcan.closeSocket({
          success: function (res) {
            that.socketOpen = false
            that.disabled = false
            that.open = false
            appcan.showToast({
              title: '关闭WebSocket连接'
            })
            appcan.onSocketClose(function (res) {
              appcan.showToast({
                title: 'WebSocket 已关闭！'
              })
            })
          },
          fail: function () {
            appcan.showToast({
              title: 'WebSocket 关闭失败'
            })
          }
        })
      }
    }
  }
```

