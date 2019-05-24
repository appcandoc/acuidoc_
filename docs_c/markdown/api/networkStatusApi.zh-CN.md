### appcan.getNetworkType(OBJECT)

获取网络类型。

### OBJECT参数说明：

|参数|	类型|	必填|	说明|
|---|---|---|---|
|success|	Function|	是	|接口调用成功，返回网络类型 networkType|
|fail|	Function|	否|	接口调用失败的回调函数|
|complete|	Function|	否	|接口调用结束的回调函数（调用成功、失败都会执行）|

### success返回参数说明：

|参数|	说明|
|---|---|
|networkType|	网络类型|


### 示例：

```html
 <ac-layout>
        <ac-view class="page-body-info">
            <ac-view class="page-body-title">网络状态</ac-view>
            <ac-view ac:if="hasNetworkType === false">
                <ac-view class="page-body-text">未获取</ac-view>
                <!--<ac-view class="page-body-text">点击蓝色按钮可获取网络状态</ac-view>-->
            </ac-view>
            <ac-view ac:if="hasNetworkType === true">
                <ac-view class="page-body-text-network-type">{{networkType}}</ac-view>
            </ac-view>
        </ac-view>
        <ac-view class="btn-area">
            <ac-button type="primary" @tap="getNetworkType">获取手机网络状态</ac-button>
            <ac-button type="primary" @tap="onNetworkStatusChange">监听手机网络状态</ac-button>
            <ac-button @tap="clear">清空</ac-button>
        </ac-view>
    </ac-layout>
```

**JS部分**

````javascript
export default {
        config: {
            navigationBarTitleText: '网络状态'
        },
        data() {
            return {
                hasNetworkType: false,
                networkType: ''
            }
        },
        methods: {
            onNetworkStatusChange: function () {
                appcan.onNetworkStatusChange(function (res) {
                    alert(res.isConnected)
                    alert(res.networkType)
                })
            },
            getNetworkType() {
                var that = this
                appcan.getNetworkType({
                    success: function (res) {
                        console.log(111, res);
                        alert(JSON.stringify(res))
                        that.hasNetworkType = true
                        that.networkType = res.subtype || res.networkType
                    }
                })
            },
            clear() {
                this.hasNetworkType = false
                this.networkType = ''
            }
        }
    }
````



### appcan.onNetworkStatusChange(CALLBACK)
监听网络状态变化。

### CALLBACK返回参数：

|参数	|类型	|说明|
|---|---|---|
|isConnected|	Boolean|	当前是否有网络连接|
|networkType|	String	|网络类型|

### networkType 有效值：


|参数	|说明	|
|---|---|
|wifi|	wifi 网络|
|2g	|2g 网络|
|3g|	3g 网络|
|4g|	4g 网络|
|none|	无网络|
|unknown|	Android下不常见的网络类型|


###示例代码：

```javascript
appcan.onNetworkStatusChange(function (res) {
  console.log(res.isConnected)
  console.log(res.networkType)
})
```

