### appcan.onCompassChange(CALLBACK)

监听罗盘数据，频率：5次/秒，接口调用后会自动开始监听，可使用appcan.stopCompass停止监听。

### CALLBACK返回参数：

|参数|	类型|	说明|
|---|----|---|
|direction|	Number|	面对的方向度数|

### 示例代码：

````javascript
appcan.onCompassChange(function (res) {
  console.log(res.direction)
})
````

### appcan.startCompass(OBJECT)

开始监听罗盘数据。

### OBJECT参数说明：

|参数	|类型|	必填|	说明|
|----|----|----|----|
|success|	Function|	否	|接口调用成功的回调函数|
|fail|	Function|	否	|接口调用失败的回调函数|
|complete|	Function|	否|	接口调用结束的回调函数（调用成功、失败都会执行）|

### 示例代码：

```javascript
appcan.startCompass()
```


### appcan.stopCompass(OBJECT)

停止监听罗盘数据。

### OBJECT参数说明：

|参数	|类型|	必填|	说明|
|----|----|----|----|
|success|	Function|	否	|接口调用成功的回调函数|
|fail|	Function|	否	|接口调用失败的回调函数|
|complete|	Function|	否|	接口调用结束的回调函数（调用成功、失败都会执行）|

### 示例代码：

```javascript
appcan.stopCompass()
```

### 示例
```html
<ac-layout>
        <ac-view class="page-body">
            <ac-view class="page-section page-section_center">
                <ac-view class="page-body-div">旋转手机即可获取方位信息</ac-view>
                <ac-view class="direction">
                    <ac-view class="bg-compass-line"></ac-view>
                    <ac-image class="bg-compass" :src="imgSrc" height="100%"
                              :style="{transform:'rotate(disableScroll+deg)'}"></ac-image>
                    <ac-view class="direction-value">
                        {{direction}}
                    </ac-view>
                </ac-view>
            </ac-view>
            <ac-button type="primary" @tap="onReady">注册监听罗盘数据</ac-button>
            <ac-button type="primary" @tap="startCompass">开始监听罗盘数据</ac-button>
            <ac-button type="primary" @tap="stopCompass">停止监听罗盘数据</ac-button>
        </ac-view>
    </ac-layout>
```

### JS部分

```javascript
export default {
        config: {
            navigationBarTitleText: '罗盘'
        },
        data() {
            return {
                direction: 0,
                imgSrc: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3581792254,1787772481&fm=173&app=25&f=JPEG?w=218&h=146&s=DBACB7475B8662D2062E5B6D0300E068'
            }
        },
        methods: {
            startCompass() {
                appcan.startCompass({
                    success: function (res) {
                        alert('成功的执行的回调')
                    },
                    fail: function (res) {
                        alert('失败的执行的回调')
                    }
                })
            },
            stopCompass() {
                appcan.stopCompass({
                    success: function (res) {
                        alert('成功的执行的回调')
                    },
                    fail: function (res) {
                        alert('失败的执行的回调')
                    }
                })
            },
            onReady() {
                appcan.onCompassChange((res) => {
                    this.direction = parseInt(res.direction)
                })
            },
        },
        mounted() {
        }
    }
```

