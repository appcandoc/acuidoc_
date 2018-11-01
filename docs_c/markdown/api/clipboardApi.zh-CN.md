### appcan.setClipboardData(OBJECT)

设置系统剪贴板的内容

### OBJECT参数说明：

|参数	|类型|	必填	|说明|
|---|---|---|---|
|data|	String	|是	|需要设置的内容|
|success|	Function|	否|	接口调用成功的回调函数|
|fail	|Function|	否	|接口调用失败的回调函数|
|complete|	Function	|否|	接口调用结束的回调函数（调用成功、失败都会执行）|

### 示例代码：

```javascript
appcan.setClipboardData({
  data: 'data',
  success: function (res) {
    appcan.getClipboardData({
      success: function (res) {
        console.log(res.data) // data
      }
    })
  }
})
```

### appcan.getClipboardData(OBJECT)

获取系统剪贴板内容

### OBJECT参数说明：

|参数|	类型	|必填	|说明|
|----|---|----|----|
|success	|Function|	否	|接口调用成功的回调函数|
|fail|	Function|	否|	接口调用失败的回调函数|
|complete|	Function|	否|	接口调用结束的回调函数（调用成功、失败都会执行）|

### success返回参数说明:

|参数	|类型	|说明|
|---|---|---|
|data|	String|	剪贴板的内容|

### 示例代码：

```javascript
appcan.getClipboardData({
  success: function (res) {
    console.log(res.data)
  }
})
```

### 示例

```html
<ac-view class="content">
  <ac-row height="40">
    <ac-col span="3" vertical-align="middle">
      示例文字：
    </ac-col>
    <ac-col span="9">
        <ac-input value="{{exampleText}}" bindinput="handleInputChange"></ac-input>
    </ac-col>
  </ac-row>
  <ac-button type="primary" bindtap="set">复制到剪贴板</ac-button>
  <ac-row height="40">
    <ac-col span="3" vertical-align="middle">
      获取到的文字：
    </ac-col>
    <ac-col span="9">
        <ac-input ui:model="clipboardText"></ac-input>
    </ac-col>
  </ac-row>
  <ac-button type="primary" bindtap="get">从剪贴板获取</ac-button>
</ac-view>
```

### JS部分

```javascript
export default {
  data () {
    return {
      exampleText: 'acui 是一套非常好用的框架☺',
      clipboardText: ''
    }
  },
  methods: {
    handleInputChange (val) {
      this.exampleText = val
    },
    get () {
      var self = this
      appcan.getClipboardData({
        success: function (res) {
          self.clipboardText = res.data
        }
      })
    },
    set () {
      appcan.setClipboardData({
        data: this.exampleText
      })
    }
  }
}

```
