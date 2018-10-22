### ac.onAccelerometerChange(CALLBACK)

监听加速度数据，频率：5次/秒，接口调用后会自动开始监听，可使用 ac.stopAccelerometer 停止监听。

### CALLBACK返回参数：

|参数|	类型	|说明|
|---|-----|-----|
|x	|Number|	X 轴|
|y	|Number|	Y 轴|
|z	|Number|	Z 轴|

### 示例代码：

```javascript
ac.onAccelerometerChange(function (res) {
  console.log(res.x)
  console.log(res.y)
  console.log(res.z)
})
```

### ac.startAccelerometer(OBJECT)

开始监听加速度数据。

### OBJECT参数说明：

| 参数|	类型|	必填|	说明|
|----|---|---|---|
|success|	Function|	否	|接口调用成功的回调函数|
|fail|	Function|	否	|接口调用失败的回调函数|
|complete|	Function	|否|	接口调用结束的回调函数（调用成功、失败都会执行）|

### 示例代码：

```javascript
ac.startAccelerometer()
```

### ac.stopAccelerometer(OBJECT)

停止监听加速度数据。

### OBJECT参数说明：

| 参数|	类型|	必填|	说明|
|----|----|---|----|
|success|	Function|	否|	接口调用成功的回调函数|
|fail|	Function|	否|	接口调用失败的回调函数|
|complete|	Function|	否	|接口调用结束的回调函数（调用成功、失败都会执行）|

### 示例代码：

```javascript
ac.stopAccelerometer()
```

### 完整示例

```html
<ac-view class="content">
  <ac-row height="40" space-bottom="10">
    <ac-col span="4" vertical-align="middle" space-bottom="10">
      X轴加速度：
    </ac-col>
    <ac-col span="8">
        <ac-input class="input" type="string" name="input" value="{{x}}"></ac-input>
    </ac-col>
  </ac-row>
  <ac-row height="40" space-bottom="10">
    <ac-col span="4" vertical-align="middle">
      Y轴加速度：
    </ac-col>
    <ac-col span="8">
        <ac-input class="input" type="string" name="input" value="{{y}}"></ac-input>
    </ac-col>
  </ac-row>
  <ac-row height="40" space-bottom="10">
    <ac-col span="4" vertical-align="middle">
      Z轴加速度：
    </ac-col>
    <ac-col span="8">
        <ac-input class="input" type="string" name="input" value="{{z}}"></ac-input>
    </ac-col>
  </ac-row>
  <ac-button bindtap="stop">停止监听</ac-button>
  <ac-button bindtap="start">继续监听</ac-button>
</ac-view>
```

### JS部分：

```javascript
export default {
  data () {
    return {
      x: 0,
      y: 0,
      z: 0
    }
  },
  methods: {
    onReady: function () {
      var that = this
      ac.onAccelerometerChange(function (res) {
        that.setData({
          x: res.x.toFixed(2),
          y: res.y.toFixed(2),
          z: res.z.toFixed(2)
        })
      })
    },
    start () {
      ac.startAccelerometer()
    },
    stop () {
      ac.stopAccelerometer()
    }
  },
  mounted () {
    this.onReady()
  }
}
```

