### ac.onCompassChange(CALLBACK)

监听罗盘数据，频率：5次/秒，接口调用后会自动开始监听，可使用ac.stopCompass停止监听。

### CALLBACK返回参数：

|参数|	类型|	说明|
|---|----|---|
|direction|	Number|	面对的方向度数|

### 示例代码：

````javascript
ac.onCompassChange(function (res) {
  console.log(res.direction)
})
````

### ac.startCompass(OBJECT)

开始监听罗盘数据。

### OBJECT参数说明：

|参数	|类型|	必填|	说明|
|----|----|----|----|
|success|	Function|	否	|接口调用成功的回调函数|
|fail|	Function|	否	|接口调用失败的回调函数|
|complete|	Function|	否|	接口调用结束的回调函数（调用成功、失败都会执行）|

### 示例代码：

```javascript
ac.startCompass()
```


### ac.stopCompass(OBJECT)

停止监听罗盘数据。

### OBJECT参数说明：

|参数	|类型|	必填|	说明|
|----|----|----|----|
|success|	Function|	否	|接口调用成功的回调函数|
|fail|	Function|	否	|接口调用失败的回调函数|
|complete|	Function|	否|	接口调用结束的回调函数（调用成功、失败都会执行）|

### 示例代码：

```javascript
ac.stopCompass()
```

### 示例
```html
<ac-view class="page-body">
  <ac-view class="page-section page-section_center">
    <ac-view class="page-body-div">旋转手机即可获取方位信息</ac-view>
    <ac-view class="direction">
      <ac-view class="bg-compass-line"></ac-view>
      <ac-image class="bg-compass" src="{{ imgSrc }}" height="100%" style="{{'transform: rotate('+direction+'deg)'}}"></ac-image>
      <ac-view class="direction-value">
        {{direction}}
      </ac-view>
    </ac-view>
  </ac-view>
</ac-view>
```

### JS部分

```javascript
export default {
  data () {
    return {
      direction: 0,
      imgSrc:reqacre('./compass.png')
    }
  },
  mounted () {
    var that = this
    ac.onCompassChange(function (res) {
      that.direction = parseInt(res.direction)
    })
  }
}
```

