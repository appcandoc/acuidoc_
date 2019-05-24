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
<ac-layout>
        <ac-view class="win">在下方输入剪切的内容</ac-view>
        <ac-block class="input-demo">
            <ac-input v-model="co"></ac-input>
        </ac-block>
        <ac-button type="primary" @tap="setClipboardData">设置系统剪贴板的内容</ac-button>
        <ac-button type="primary" @tap="getClipboardData">获取系统剪贴板内容</ac-button>
    </ac-layout>
```

### JS部分

```javascript
 export default {
        config: {
            navigationBarTitleText: "剪切"
        },
        data() {
            return {
                co: '设置系统剪贴板的内容'
            }
        },
        methods: {
            setClipboardData() {
                appcan.setClipboardData({
                    data: this.co,
                    success: function (res) {
                        appcan.getClipboardData({
                            success: function (res) {
                                alert(JSON.stringify(res));
                            }
                        })
                    }
                })
            },
            getClipboardData() {
                appcan.getClipboardData({
                    success: function (res) {
                        alert(JSON.stringify(res));
                    }
                })
            },
        }
    }

```

### less 部分

```less
.ac-button.is-full-width{
    width: 100%;
    margin-bottom: 50px;
  }
  .ac-content .win {
    padding: 10px;
    color:#999;
  }
  .input-demo{
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
    background-color: #fff;
    padding: 4px 12px;
  }
```
