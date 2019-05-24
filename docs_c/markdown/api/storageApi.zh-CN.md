### 数据缓存

每个APP都可以有自己的本地缓存，可以通过 appcan.setStorage（appcan.setStorageSync）、appcan.getStorage（appcan.getStorageSync）、appcan.clearStorage（appcan.clearStorageSync）可以对本地缓存进行设置、获取和清理。同一个APP storage 上限为 5MB。

**注意**： localStorage 是永久存储的，但是我们不建议将关键信息全部存在 localStorage，以防用户换设备的情况。

### appcan.setStorage(OBJECT)

将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个异步接口。

### OBJECT参数说明：

|参数	|类型	|必填	|说明|
|-----|-----|-----|-----|
|key|	String	|是|	本地缓存中的指定的 key|
|data	|Object/String|	是|	需要存储的内容|
|success|	Function|	否|	接口调用成功的回调函数|
|fail|	Function|	否	|接口调用失败的回调函数|
|complete|	Function|	否|	接口调用结束的回调函数（调用成功、失败都会执行）|

### 示例代码：

```javascript
appcan.setStorage({
  key: "key",
  data: "value"
})
```

### appcan.setStorageSync(KEY,DATA)

将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个同步接口。

### 参数说明：

|参数	|类型	|必填	|说明|
|----|-----|-----|-----|
|key|	String|	是	|本地缓存中的指定的 key|
|data	|Object/String|	是|	需要存储的内容|


### 示例代码

```javascript
try {
  appcan.setStorageSync('key', 'value')
} catch (e) {
  console.log(e)
}
```

### appcan.getStorage(OBJECT)

从本地缓存中异步获取指定 key 对应的内容。

### OBJECT参数说明：

|参数	|类型	|必填	|说明|
|-----|-----|-----|-----|
|key|	String	|是|	本地缓存中的指定的 key|
|success|	Function	|是|	接口调用的回调函数,res = {data: key对应的内容}|
|fail	|Function	|否	|接口调用失败的回调函数|
|complete|	Function|	否	|接口调用结束的回调函数（调用成功、失败都会执行）|

### success返回参数说明：

|参数	|类型|	说明|
|---|-----|----|
|data|	String|	key对应的内容|

### 示例代码：

```javascript
appcan.getStorage({
  key: 'key',
  success: function (res) {
    console.log(res.data)
  }
})
```


### appcan.getStorageSync(KEY)

从本地缓存中同步获取指定 key 对应的内容。

### 参数说明：

|参数	|类型	|必填	|说明|
|---|-----|-----|----|
|key|	String|	是|	本地缓存中的指定的 key|

### 示例代码：

```javascript
try {
  var value = appcan.getStorageSync('key')
  if (value) {
    // Do something with return value
  }
} catch (e) {
  // Do something when catch error
}
```

### appcan.getStorageInfo(OBJECT)

异步获取当前storage的相关信息

### OBJECT参数说明：

|参数	|类型	|必填	|说明|
|-----|-----|-----|-----|
|success|	Function|	是	|接口调用的回调函数，详见返回参数说明|
|fail	|Function|	否|	接口调用失败的回调函数|
|complete|	Function|	否	|接口调用结束的回调函数（调用成功、失败都会执行）|

### success返回参数说明：

|参数	|类型	|说明|
|-----|-----|-----|
|keys	|String Array	|当前storage中所有的key|
|currentSize|	Number|	当前占用的空间大小, 单位kb|
|limitSize	|Number|	限制的空间大小，单位kb|

### 示例代码：

````javascript
appcan.getStorageInfo({
  success: function (res) {
    console.log(res.keys)
    console.log(res.currentSize)
    console.log(res.limitSize)
  }
})
````

### appcan.getStorageInfoSync

同步获取当前storage的相关信息

### 示例代码：

```javascript
try {
  var res = appcan.getStorageInfoSync()
  console.log(res.keys)
  console.log(res.currentSize)
  console.log(res.limitSize)
} catch (e) {
  // Do something when catch error
}
```

### appcan.removeStorage(OBJECT)

从本地缓存中异步移除指定 key 。

### OBJECT参数说明：

|参数	|类型	|必填	|说明|
|-----|-----|------|-----|
|key|	String	|是|	本地缓存中的指定的 key|
|success|	Function|	是	|接口调用的回调函数|
|fail	|Function	|否|	接口调用失败的回调函数|
|complete	|Function|	否|	接口调用结束的回调函数（调用成功、失败都会执行）|

### 示例代码：

```javascript
appcan.removeStorage({
  key: 'key',
  success: function (res) {
    console.log(res.data)
  }
})
```

### appcan.removeStorageSync(KEY)

从本地缓存中同步移除指定 key 。

### 参数说明：

|参数	|类型	|必填	|说明|
|-----|-----|-----|----|
|key|	String|	是	|本地缓存中的指定的 key|

### 示例代码：

````javascript
try {
  appcan.removeStorageSync('key')
} catch (e) {
  // Do something when catch error
}
````

### appcan.clearStorage()

清理本地数据缓存。

### 示例代码：

```javascript
appcan.clearStorage()
```

### appcan.clearStorageSync()

同步清理本地数据缓存

### 示例代码：

```javascript
try {
  appcan.clearStorageSync()
} catch (e) {
  // Do something when catch error
}
```

### Bug & Tip

**tip**: 本地数据存储的大小限制为 5MB

### 完整示例

这里综合演示了数据缓存的添加、获取、删除与清空。

```html
<ac-layout>
        <ac-view class="demo-title">写入缓存</ac-view>
        <ac-view class="demo-content">
            <ac-row height="45" space-bottom="10">
                <ac-col span="2" vertical-align="middle">
                    key：
                </ac-col>
                <ac-col span="10" vertical-align="middle">
                    <ac-input placeholder="请输入缓存的key" v-model="key"></ac-input>
                </ac-col>
            </ac-row>
            <ac-row height="45" space-bottom="10">
                <ac-col span="2" vertical-align="middle">
                    value：
                </ac-col>
                <ac-col span="10" vertical-align="middle">
                    <ac-input placeholder="请输入缓存的内容" v-model="text"></ac-input>
                </ac-col>
            </ac-row>
            <ac-button @tap="storage">写入缓存</ac-button>
        </ac-view>

        <ac-view class="demo-title">获取缓存</ac-view>
        <ac-view class="demo-content">
            <ac-picker title="" :range=" list " :value="val" @change="handleChange"></ac-picker>
            <ac-button @tap="getStorage">获取缓存</ac-button>
        </ac-view>

        <ac-view class="demo-title">移除缓存</ac-view>
        <ac-view class="demo-content">
            <ac-input placeholder="缓存的内容" v-model="gettext"></ac-input>
            <ac-row>
                <ac-col span="6" space-right="5">
                    <ac-button @tap="removeStorage">移除缓存的key</ac-button>
                </ac-col>
                <ac-col span="6" space-left="5">
                    <ac-button @tap="clearStorage">清理本地数据缓存</ac-button>
                </ac-col>
            </ac-row>
        </ac-view>
    </ac-layout>
    
```


### JS部分

```javascript
export default {
        config: {
            navigationBarTitleText: 'storage'
        },
        data() {
            return {
                key: '',
                text: '',
                gettext: '',
                list: ['请选择'],
                val: 0
            }
        },
        methods: {
            handleChange (val) {
              this.val = val
            },
            storage () {
              appcan.setStorageSync(this.key, this.text)
              if (!this.contains(this.list, this.key)) {
                this.list.push(this.key)
              }
              appcan.showToast({
                title: '已缓存'
              })
            },
            contains (arr, obj) {
              var i = arr.length
              while (i--) {
                if (arr[i] === obj) {
                  return true
                }
              }
              return false
            },
            getStorage () {
              var value = appcan.getStorageSync(this.list[this.val])
              this.gettext = value
            },
            removeStorage () {
              appcan.removeStorageSync(this.list[this.val])
              this.removePicker(this.list[this.val])
              appcan.showToast({
                title: '已移除'
              })
            },
            removePicker (val) {
              var index = this.val
              if (index > -1) { this.list.splice(index, 1) }
            },
            clearStorage () {
              appcan.clearStorageSync()
              console.log(this.list)
              this.list = ['请选择']
              console.log(this.list)
              appcan.showToast({
                title: '已清理'
              })
            }
        }
    }
```

