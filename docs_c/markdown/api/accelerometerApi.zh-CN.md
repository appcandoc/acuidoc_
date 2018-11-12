### appcan.onAccelerometerChange(CALLBACK)

监听加速度数据，频率：5次/秒，接口调用后会自动开始监听，可使用 appcan.stopAccelerometer 停止监听。

### CALLBACK返回参数：

|参数|	类型	|说明|
|---|-----|-----|
|x	|Number|	X 轴|
|y	|Number|	Y 轴|
|z	|Number|	Z 轴|

### 示例代码：

```javascript
appcan.onAccelerometerChange(function (res) {
  console.log(res.x)
  console.log(res.y)
  console.log(res.z)
})
```

### appcan.startAccelerometer(OBJECT)

开始监听加速度数据。

### OBJECT参数说明：

| 参数|	类型|	必填|	说明|
|----|---|---|---|
|success|	Function|	否	|接口调用成功的回调函数|
|fail|	Function|	否	|接口调用失败的回调函数|
|complete|	Function	|否|	接口调用结束的回调函数（调用成功、失败都会执行）|

### 示例代码：

```javascript
appcan.startAccelerometer()
```

### appcan.stopAccelerometer(OBJECT)

停止监听加速度数据。

### OBJECT参数说明：

| 参数|	类型|	必填|	说明|
|----|----|---|----|
|success|	Function|	否|	接口调用成功的回调函数|
|fail|	Function|	否|	接口调用失败的回调函数|
|complete|	Function|	否	|接口调用结束的回调函数（调用成功、失败都会执行）|

### 示例代码：

```javascript
appcan.stopAccelerometer()
```

### 完整示例

```html
<ac-layout>
        <ac-view class="content">
            <ac-row height="40" space-bottom="10">
                <ac-col span="4" vertical-align="middle" space-bottom="10">
                    X轴加速度：
                </ac-col>
                <ac-col span="8">
                    <ac-input v-model="x"></ac-input>
                </ac-col>
            </ac-row>
            <ac-row height="40" space-bottom="10">
                <ac-col span="4" vertical-align="middle">
                    Y轴加速度：
                </ac-col>
                <ac-col span="8">
                    <ac-input v-model="y"></ac-input>
                </ac-col>
            </ac-row>
            <ac-row height="40" space-bottom="10">
                <ac-col span="4" vertical-align="middle">
                    Z轴加速度：
                </ac-col>
                <ac-col span="8">
                    <ac-input v-model="z"></ac-input>
                </ac-col>
            </ac-row>
            <ac-button @tap="stop">停止监听</ac-button>
            <ac-button @tap="start">继续监听</ac-button>
            <ac-button @tap="onReady">on</ac-button>
        </ac-view>
    </ac-layout>
```

### JS部分：

```javascript
export default {
        config: {
            navigationBarTitleText: '加速度计',
            disableScroll: true
        },
        data() {
            return {
                x: 0,
                y: 0,
                z: 0
            }
        },
        created() {
        },
        methods: {
            onReady: function () {
                var that = this
                appcan.onAccelerometerChange(function (res) {
                    that.x = res.x.toFixed(2)
                    that.y = res.y.toFixed(2)
                    that.z = res.z.toFixed(2)

                })
            },
            start() {
                appcan.startAccelerometer()
            },
            stop() {
                appcan.stopAccelerometer()
            }
        },
        mounted() {
            this.onReady()
        }
    }
```

