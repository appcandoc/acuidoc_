###蓝牙适配器接口

###appcan.openBluetoothAdapter(OBJECT)

初始化蓝牙适配器

### OBJECT参数说明：

|参数	|类型	|必填	|说明|
|---|---|---|---|
|success|	Function|	是|	成功则返回成功初始化信息|
|fail|	Function|	否|	接口调用失败的回调函数|
|complete|	Function|	否	|接口调用结束的回调函数（调用成功、失败都会执行）|

### 示例代码：

```javascript
appcan.openBluetoothAdapter({
  success: function (res) {
    console.log(res)
  }
})
```

### Bug & Tip
**tip**: 目前只支持真机蓝牙调试

### appcan.closeBluetoothAdapter(OBJECT)

关闭蓝牙模块。调用该方法将断开所有已建立的链接并释放系统资源

### OBJECT参数说明：

|参数|	类型|	必填|	说明|
|---|---|---|---|
|success|	Function|	是	|成功则返回成功关闭模块信息|
|fail|	Function	|否	|接口调用失败的回调函数|
|complete|	Function|	否	|接口调用结束的回调函数（调用成功、失败都会执行）|

### 示例代码：

```javascript
appcan.closeBluetoothAdapter({
  success: function (res) {
    console.log(res)
  }
})
```

### appcan.getBluetoothAdapterState(OBJECT)

获取本机蓝牙适配器状态

### OBJECT参数说明：

|参数	|类型	|必填	|说明|
|---|---|---|---|
|success|	Function|	是	|成功则返回本机蓝牙适配器状态|
|fail|	Function	|否|	接口调用失败的回调函数|
|complete|	Function|	否|	接口调用结束的回调函数（调用成功、失败都会执行）|

### success返回参数：

|参数	|类型	|说明|
|---|---|---|
|discovering	|Boolean|	是否正在搜索设备|
|available|	Boolean|	蓝牙适配器是否可用|
|errMsg|	String	|成功：ok，错误：详细信息|

### 示例代码：
```javascript
appcan.getBluetoothAdapterState({
  success: function (res) {
    console.log(res)
  }
})
```

### appcan.onBluetoothAdapterStateChange(CALLBACK)

监听蓝牙适配器状态变化事件

### CALLBACK参数说明：

|参数	|类型	|说明|
|---|---|---|
|available|	boolean|	蓝牙适配器是否可用|
|discovering|	boolean|	蓝牙适配器是否处于搜索状态|

### 示例代码：

```javascript
appcan.onBluetoothAdapterStateChange(function(res) {
  console.log(`adapterState changed, now is`, res)
})
```

### appcan.startBluetoothDevicesDiscovery(OBJECT)

开始搜寻附近的蓝牙外围设备。注意，该操作比较耗费系统资源，请在搜索并连接到设备后调用 stop 方法停止搜索。

### OBJECT参数说明：

|参数	|类型	|必填|	说明|
|---|---|----|---|
|services	|Array	|否|	蓝牙设备主 service 的 uuid 列表|
|allowDuplicatesKey	|boolean	|否|	是否允许重复上报同一设备， 如果允许重复上报，则onDeviceFound 方法会多次上报同一设备，但是 RSSI 值会有不同|
|interval|	integer|	否	|上报设备的间隔，默认为0，意思是找到新设备立即上报，否则根据传入的间隔上报|
|success|	Function|	是	|成功则返回本机蓝牙适配器状态|
|fail|	Function|	否	|接口调用失败的回调函数|
|complete	|Function|	否|	接口调用结束的回调函数（调用成功、失败都会执行）|

**services**参数说明：某些蓝牙设备会广播自己的主 service 的 uuid。如果这里传入该数组，那么根据该 uuid 列表，只搜索有这个主服务的设备。

### success返回参数：

|参数|	类型|	说明|
|---|---|---|
|errMsg|	string	|成功：ok，错误：详细信息|
|isDiscovering|	boolean|	当前蓝牙适配器是否处于搜索状态|

### 示例代码：

```javascript
// 以微信硬件平台的蓝牙智能灯为例，主服务的 UUID 是 FEE7。传入这个参数，只搜索主服务 UUID 为 FEE7 的设备
appcan.startBluetoothDevicesDiscovery({
  services: ['FEE7'],
  success: function (res) {
    console.log(res)
  }
})
```

### appcan.stopBluetoothDevicesDiscovery(OBJECT)

停止搜寻附近的蓝牙外围设备。请在确保找到需要连接的设备后调用该方法停止搜索。

### OBJECT参数说明：

|参数	|类型	|必填	|说明|
|---|----|----|---|
|success	|Function|	是	|成功则返回本机蓝牙适配器状态|
|fail|	Function|	否|	接口调用失败的回调函数|
|complete|	Function|	否|	接口调用结束的回调函数（调用成功、失败都会执行）|

### success返回参数：

|参数	|类型	|说明|
|---|---|---|
|errMsg|	string|	成功：ok，错误：详细信息|

### adapterState

蓝牙适配器状态信息

|参数	|类型|	说明|
|---|---|---|
|discovering|	boolean	|是否正在搜索设备|
|available	|boolean|	蓝牙适配器是否可用|

### 示例代码：

```javascript
appcan.stopBluetoothDevicesDiscovery({
  success: function (res) {
    console.log(res)
  }
})
```

### appcan.getBluetoothDevices(OBJECT)

获取所有已发现的蓝牙设备，包括已经和本机处于连接状态的设备

### OBJECT参数说明：

|参数	|类型	|必填	|说明|
|---|---|---|---|
|success|	Function|	是|	成功则返回本机蓝牙适配器状态|
|fail|	Function|	否	|接口调用失败的回调函数|
|complete|	Function	|否|	接口调用结束的回调函数（调用成功、失败都会执行）|

### success返回参数：

|参数|	类型|	说明|
|----|---|---|
|devices|	Array	|uuid 对应的的已连接设备列表|
|errMsg	|string|	成功：ok，错误：详细信息|

### device 对象

蓝牙设备信息

|参数	|类型	|说明|
|---|---|---|
|name|	string	|蓝牙设备名称，某些设备可能没有|
|localName|	string	|低功耗设备广播名称，某些设备可能没有|
|deviceId|	string|	用于区分设备的 id|
|RSSI	|int|	当前蓝牙设备的信号强度|
|advertisData	|ArrayBuffer|	当前蓝牙设备的广播内容注意：vConsole 无法打印出 ArrayBuffer 类型数据|

### 示例代码：

```javascript
appcan.getBluetoothDevices({
  success: function (res) {
    console.log(res)
  }
})
```

### Bug & Tip

**tip**: **Android** 上获取到的deviceId为设备 MAC 地址，iOS 上则为设备 uuid。因此deviceId不能硬编码到代码中

### appcan.onBluetoothDeviceFound(CALLBACK)

监听寻找到新设备的事件

### CALLBACK参数说明：

|参数|	类型	|说明|
|--|---|---|
|devices|	Array	|新搜索到的设备列表|

###device对象

|参数	|类型	|说明|
|---|---|---|
|name|	string	|蓝牙设备名称，某些设备可能没有|
|localName|	string	|低功耗设备广播名称，某些设备可能没有|
|deviceId|	string|	用于区分设备的 id|
|RSSI	|int|	当前蓝牙设备的信号强度|
|advertisData	|ArrayBuffer|	当前蓝牙设备的广播内容注意：vConsole 无法打印出 ArrayBuffer 类型数据|

### 示例代码：

```javascript
appcan.onBluetoothDeviceFound(function(devices) {
  console.log('new device list has founded')
  console.dir(devices)
})
```

### Bug & Tip

**tip**: **Android** 上获取到的deviceId为设备 MAC 地址，iOS 上则为设备 uuid。因此deviceId不能硬编码到代码中

### appcan.getConnectedBluetoothDevices(OBJECT)

根据 uuid 获取处于已连接状态的设备

### OBJECT参数说明：

|参数|	类型	|必填	|说明|
|---|---|---|---|
|services|	Array|	是|	蓝牙设备主 service 的 uuid 列表|
|success|	Function	|是|	成功则返回本机蓝牙适配器状态|
|fail	|Function|	否|	接口调用失败的回调函数|
|complete|	Function|	否	|接口调用结束的回调函数（调用成功、失败都会执行）|

### success返回参数：

|参数|	类型	|说明|
|---|---|---|
|devices|	Array|	搜索到的设备列表|
|errMsg	|string|	成功：ok，错误：详细信息|

### device对象

蓝牙设备信息

|参数	|类型	|说明|
|---|---|---|
|name|	string	|蓝牙设备名称，某些设备可能没有|
|deviceId|	string	|用于区分设备的 id|

### 示例代码：

```javascript
appcan.getConnectedBluetoothDevices({
  success: function (res) {
    console.log(res)
  }
})
```

### Bug & Tip

**tip**: 开发者工具和 Android 上获取到的deviceId为设备 MAC 地址，iOS 上则为设备 uuid。因此deviceId不能硬编码到代码中

## 低功耗蓝牙接口

### appcan.createBLEConnection(OBJECT)

连接低功耗蓝牙设备

### OBJECT参数说明：

|参数	|类型	|必填	|说明|
|---|---|---|---|
|deviceId|	string|	是|	蓝牙设备 id，参考 getDevices 接口|
|success|	Function|	是|	成功则返回本机蓝牙适配器状态|
|fail|	Function|	否|	接口调用失败的回调函数|
|complete	|Function	|否|	接口调用结束的回调函数（调用成功、失败都会执行）|

### success返回参数：

|参数	|类型	|说明|
|---|---|---|
|errMsg|	string	|成功：ok，错误：详细信息|

### 示例代码：

```javascript
appcan.createBLEConnection({
  // 这里的 deviceId 需要在上面的 getBluetoothDevices 或 onBluetoothDeviceFound 接口中获取
  deviceId: deviceId,
  success: function (res) {
    console.log(res)
  }
})
```

### Bug & Tip
**tip**: 安卓手机上如果多次调用create创建连接，有可能导致系统持有同一设备多个连接的实例，导致调用close的时候并不能真正的断开与设备的连接。因此请保证尽量成对的调用create和close接口

### appcan.closeBLEConnection(OBJECT)

断开与低功耗蓝牙设备的连接

### OBJECT参数说明：

|参数|	类型	|必填	|说明|
|---|---|---|---|
|deviceId	|string|	是	|蓝牙设备 id，参考 getDevices 接口|
|success	|Function	|是|	成功则返回本机蓝牙适配器状态|
|fail|	Function	|否|	接口调用失败的回调函数|
|complete	|Function|	否	|接口调用结束的回调函数（调用成功、失败都会执行）|

### success返回参数：

|参数	|类型	|说明|
|---|---|---|
|errMsg|	string|	成功：ok，错误：详细信息|

### 示例代码：

```javascript
appcan.closeBLEConnection({
  success: function (res) {
    console.log(res)
  }
})
```

### appcan.getBLEDeviceServices(OBJECT)

获取蓝牙设备所有 service（服务）

### OBJECT参数说明：

|参数	|类型	|必填	|说明|
|---|---|---|---|
|deviceId	|string	|是|	蓝牙设备 id，参考 getDevices 接口|
|success|	Function	|是|	成功则返回本机蓝牙适配器状态|
|fail|	Function|	否	|接口调用失败的回调函数|
|complete|	Function|	否	|接口调用结束的回调函数（调用成功、失败都会执行）|

### success返回参数：

|参数	|类型|	说明|
|---|---|---|
|services	|array|	设备服务列表|
|errMsg	|string|	成功：ok，错误：详细信息|

### service对象

蓝牙设备service(服务)信息

|参数	|类型	|说明|
|---|---|---|
|uuid	|string|	蓝牙设备服务的 uuid|
|isPrimary|	boolean|	该服务是否为主服务|

### 示例代码：

```javascript
appcan.getBLEDeviceServices({
  // 这里的 deviceId 需要在上面的 getBluetoothDevices 或 onBluetoothDeviceFound 接口中获取
  deviceId: deviceId,
  success: function (res) {
    console.log('device services:', res.services)
  }
})
```

### appcan.getBLEDeviceCharacteristics(OBJECT)

获取蓝牙设备所有 characteristic（特征值）

### OBJECT参数说明：

|参数	|类型|	必填|	说明|
|---|---|---|---|
|deviceId|	string|	是|	蓝牙设备 id，参考 device 对象|
|serviceId|	string	|是|	蓝牙服务 uuid|
|success	|Function|	是	|成功则返回本机蓝牙适配器状态|
|fail|	Function|	否	|接口调用失败的回调函数|
|complete|	Function|	否|	接口调用结束的回调函数（调用成功、失败都会执行）|

### success返回参数：

|参数	|类型	|说明|
|---|---|---|
|characteristics|	array|	设备特征值列表|
|errMsg|	string|	成功：ok，错误：详细信息|

### characteristic对象

蓝牙设备characteristic(特征值)信息

|参数	|类型	|说明|
|---|---|---|
|uuid	|string|	蓝牙设备特征值的 uuid|
|properties|	object|	该特征值支持的操作类型|

### properties对象

|参数|	类型	|说明|
|---|---|---|
|read	|boolean|	该特征值是否支持 read 操作|
|write|	boolean|	该特征值是否支持 write 操作|
|notify	|boolean	|该特征值是否支持 notify 操作|
|indicate|	boolean|	该特征值是否支持 indicate 操作|

### 示例代码：

```javascript
appcan.getBLEDeviceCharacteristics({
  // 这里的 deviceId 需要在上面的 getBluetoothDevices 或 onBluetoothDeviceFound 接口中获取
  deviceId: deviceId,
  // 这里的 serviceId 需要在上面的 getBLEDeviceServices 接口中获取
  serviceId: serviceId,
  success: function (res) {
    console.log('device getBLEDeviceCharacteristics:', res.characteristics)
  }
})
```

### appcan.readBLECharacteristicValue(OBJECT)

读取低功耗蓝牙设备的特征值的二进制数据值。注意：必须设备的特征值支持read才可以成功调用，具体参照 characteristic 的 properties 属性

### OBJECT参数说明：

|参数	|类型	|必填	|说明|
|---|---|---|----|
|deviceId	|string|	是|	蓝牙设备 id，参考 device 对象|
|serviceId|	string	|是|	蓝牙特征值对应服务的 uuid|
|characteristicId|	string	|是	|蓝牙特征值的 uuid|
|success	|Function	|是|	成功则返回本机蓝牙适配器状态|
|fail|	Function|	否	|接口调用失败的回调函数|
|complete|	Function	|否|	接口调用结束的回调函数（调用成功、失败都会执行）|

### success返回参数：

|参数	|类型|	说明|
|---|---|---|
|characteristic|	object|	设备特征值信息|
|errMsg	|string	|成功：ok，错误：详细信息|

### characteristic对象

蓝牙设备characteristic(特征值)信息

|参数	|类型	|说明|
|---|---|---|
|characteristicId|	string	|蓝牙设备特征值的 uuid|
|serviceId|	object|	蓝牙设备特征值对应服务的 uuid|
|value	|ArrayBuffer|	蓝牙设备特征值对应的二进制值（注意：vConsole 无法打印出 ArrayBuffer 类型数据）|

### 示例代码：

```javascript
// 必须在这里的回调才能获取
appcan.onBLECharacteristicValueChange(function(characteristic) {
  console.log('characteristic value comed:', characteristic)
})
appcan.readBLECharacteristicValue({
  // 这里的 deviceId 需要在上面的 getBluetoothDevices 或 onBluetoothDeviceFound 接口中获取
  deviceId: deviceId,
  // 这里的 serviceId 需要在上面的 getBLEDeviceServices 接口中获取
  serviceId: serviceId,
  // 这里的 characteristicId 需要在上面的 getBLEDeviceCharacteristics 接口中获取
  characteristicId: characteristicId,
  success: function (res) {
    console.log('readBLECharacteristicValue:', res.characteristic.value)
  }
})
```

### Bug & Tip

1.**tip**: 并行调用多次读写接口存在读写失败的可能性。
2.**tip**:**read**接口读取到的信息需要在**onBLECharacteristicValueChange**方法注册的回调中获取。

### appcan.writeBLECharacteristicValue(OBJECT)

向低功耗蓝牙设备特征值中写入二进制数据。注意：必须设备的特征值支持**write**才可以成功调用，具体参照 characteristic 的 properties 属性

tips: 并行调用多次读写接口存在读写失败的可能性

### OBJECT参数说明：

|参数	|类型	|必填	|说明|
|---|---|---|---|
|deviceId	|string|	是|	蓝牙设备 id，参考 device 对象|
|serviceId	|string|	是	|蓝牙特征值对应服务的 uuid|
|characteristicId|	string|	是|	蓝牙特征值的 uuid|
|value	|ArrayBuffer|	是|	蓝牙设备特征值对应的二进制值（注意：vConsole 无法打印出 ArrayBuffer 类型数据）|
|success	|Function|	是|	成功则返回本机蓝牙适配器状态|
|fail	|Function|	否	|接口调用失败的回调函数|
|complete|	Function|	否	|接口调用结束的回调函数（调用成功、失败都会执行）|

### success返回参数：

|参数	|类型	|说明|
|---|---|---|
|errMsg|	string|	成功：ok，错误：详细信息|

### 示例代码：

```javascript
// 这里的回调可以获取到 write 导致的特征值改变
appcan.onBLECharacteristicValueChange(function(characteristic) {
  console.log('characteristic value changed:', characteristic)
})
// 向蓝牙设备发送一个0x00的16进制数据
let buffer = new ArrayBuffer(1)
let dataView = new DataView(buffer)
dataView.setUint8(0, 0)
appcan.writeBLECharacteristicValue({
  // 这里的 deviceId 需要在上面的 getBluetoothDevices 或 onBluetoothDeviceFound 接口中获取
  deviceId: deviceId,
  // 这里的 serviceId 需要在上面的 getBLEDeviceServices 接口中获取
  serviceId: serviceId,
  // 这里的 characteristicId 需要在上面的 getBLEDeviceCharacteristics 接口中获取
  characteristicId: characteristicId,
  // 这里的value是ArrayBuffer类型
  value: buffer,
  success: function (res) {
    console.log('writeBLECharacteristicValue success', res.errMsg)
  }
})
```

### appcan.notifyBLECharacteristicValueChange(OBJECT)

启用低功耗蓝牙设备特征值变化时的 **notify** 功能。注意：必须设备的特征值支持**notify**才可以成功调用，具体参照 characteristic 的 properties 属性 另外，必须先启用notify才能监听到设备 characteristicValueChange 事件

### OBJECT参数说明：

|参数	|类型	|必填	|说明|
|---|---|---|---|
|deviceId	|string|	是	|蓝牙设备 id，参考 device 对象|
|serviceId|	string	|是	|蓝牙特征值对应服务的 uuid|
|characteristicId	|string	|是|	蓝牙特征值的 uuid|
|state|	boolean|	是	|true: 启用 notify; false: 停用 notify|
|success	|Function	|是|	成功则返回本机蓝牙适配器状态|
|fail|	Function	|否|	接口调用失败的回调函数|
|complete|	Function	|否|	接口调用结束的回调函数（调用成功、失败都会执行）|

### success返回参数：

|参数	|类型	|说明|
|---|---|---|
|errMsg|	string|	成功：ok，错误：详细信息|

示例代码：

```javascript
appcan.notifyBLECharacteristicValueChange({
  state: true, // 启用 notify 功能
  // 这里的 deviceId 需要在上面的 getBluetoothDevices 或 onBluetoothDeviceFound 接口中获取
  deviceId: deviceId,
  // 这里的 serviceId 需要在上面的 getBLEDeviceServices 接口中获取
  serviceId: serviceId,
  // 这里的 characteristicId 需要在上面的 getBLEDeviceCharacteristics 接口中获取
  characteristicId: characteristicId,
  success: function (res) {
    console.log('notifyBLECharacteristicValueChange success', res.errMsg)
  }
})
```


### appcan.onBLEConnectionStateChange(CALLBACK)

监听低功耗蓝牙连接的错误事件，包括设备丢失，连接异常断开等等。

### CALLBACK参数说明：

|参数	|类型	|说明|
|---|---|---|
|deviceId	|string|	蓝牙设备 id，参考 device 对象|
|connected|	boolean|	连接目前的状态|

### 示例代码：

```javascript
appcan.onBLEConnectionStateChange(function(res) {
  // 该方法回调中可以用于处理连接意外断开等异常情况
  console.log(`device ${res.deviceId} state has changed, connected: ${res.connected}`)
})
```

### appcan.onBLECharacteristicValueChange(CALLBACK)
监听低功耗蓝牙设备的特征值变化。必须先启用**notify**接口才能接收到设备推送的notification。

### CALLBACK参数说明：

|参数	|类型	|说明|
|---|---|---|
|deviceId|	string	|蓝牙设备 id，参考 device 对象|
|serviceId	|string|	特征值所属服务 uuid|
|characteristicId|	string	|特征值 uuid|
|value	|ArrayBuffer|	特征值最新的值 （注意：vConsole 无法打印出 ArrayBuffer 类型数据）|

### 示例代码：

```javascript
appcan.onBLECharacteristicValueChange(function(res) {
  console.log(`characteristic ${res.characteristicId} has changed, now is ${res.value}`)
})
```

### 蓝牙错误码(errCode)列表

|错误码|	说明|	备注|
|---|---|---|
|0	|ok|	正常|
|10000|	not  init|	未初始化蓝牙适配器|
|10001|	not available|	当前蓝牙适配器不可用|
|10002|	no device|	没有找到指定设备|
|10003|	connection fail	|连接失败|
|10004|	no service|	没有找到指定服务|
|10005|	no characteristic|	没有找到指定特征值|
|10006|	no connection	|当前连接已断开|
|10007|	property not support|	当前特征值不支持此操作|
|10008|	system error|	其余所有系统上报的异常|
|10009	|system not support	|Android 系统特有，系统版本低于 4.3 不支持BLE
|10010	|no descriptor	|没有找到指定描述符
|10011	|location not turned	|Android6.0以上系统因未打开定位导致搜寻蓝牙设备（startBluetoothDevicesDiscovery ）失败

完整示例

这里演示的是APP通过蓝牙连接小米手环的综合示例。

```html
<ac-view class="win">
  <ac-view class="btn-area">
    <ac-view class="title">本机蓝牙开关状态</ac-view>
    <ac-button type="primary" bindtap="openBluetoothAdapter('初始化蓝牙适配器')">初始化蓝牙适配器</ac-button>
    <ac-button type="primary" disabled="{{!open}}" bindtap="closeBluetoothAdapter('关闭蓝牙模块')">关闭蓝牙模块</ac-button>
    <ac-button type="primary" disabled="{{!open}}" bindtap="getBluetoothAdapterState('获取本机蓝牙适配器状态')">获取本机蓝牙适配器状态</ac-button>
    <ac-button type="primary" disabled="{{!open}}" loading="{{stateChange}}" bindtap="onBluetoothAdapterStateChange('监听蓝牙适配器状态变化事件')">监听蓝牙适配器状态变化事件</ac-button>

    <ac-view class="title">扫描蓝牙设备</ac-view>
    <ac-button type="primary" disabled="{{!available||discovering}}" loading="{{discovering}}" bindtap="startBluetoothDevicesDiscovery('开始搜寻附近的蓝牙外围设备')">开始搜寻附近的蓝牙外围设备</ac-button>
    <ac-button type="primary" disabled="{{!discovering}}" bindtap="stopBluetoothDevicesDiscovery('停止搜寻附近的蓝牙外围设备')">停止搜寻附近的蓝牙外围设备</ac-button>
    <ac-button type="primary" disabled="{{!available||!mainServices.length}}" bindtap="getConnectedBluetoothDevices('根据 uuid 获取处于已连接状态的设备')">根据 uuid 获取处于已连接状态的设备</ac-button>
    <ac-button type="primary" disabled="{{!available}}" bindtap="getBluetoothDevices('获取所有已发现的蓝牙设备')">获取所有已发现的蓝牙设备</ac-button>
    <ac-button type="primary" disabled="{{!available}}" loading="{{deviceFound}}" bindtap="onBluetoothDeviceFound('监听寻找到新设备的事件')">监听寻找到新设备的事件</ac-button>

    <ac-view class="title">连接设备</ac-view>
    <ac-button type="primary" disabled="{{!deviceId}}" loading="{{connecting}}" bindtap="createBLEConnection('连接低功耗蓝牙设备')">连接低功耗蓝牙设备</ac-button>
    <ac-button type="primary" disabled="{{!connected}}" bindtap="closeBLEConnection('断开与低功耗蓝牙设备的连接')">断开与低功耗蓝牙设备的连接</ac-button>
    <ac-button type="primary" disabled="{{!connected}}" bindtap="getBLEDeviceServices('获取蓝牙设备所有服务')">获取蓝牙设备所有服务</ac-button>
    <ac-button type="primary" disabled="{{!connected||!services.length}}" bindtap="getBLEDeviceCharacteristics('获取蓝牙设备所有特征值')">获取蓝牙设备所有特征值</ac-button>

    <ac-view class="title">读写数据</ac-view>
    <!-- <ac-button type="primary" bindtap="readBLECharacteristicValue">读取低功耗蓝牙设备的特征值的二进制数据值</ac-button> -->
    <ac-button type="primary" disabled="{{!connected||!electricity}}" bindtap="readElectricity('读取电量')">读取电量</ac-button>
    <ac-button type="primary" disabled="{{!connected||!steps}}" bindtap="readSteps('读取步数')">读取步数</ac-button>
    <ac-button type="primary" disabled="{{!connected||!currentTime}}" bindtap="readCurrentTime('读取时间')">读取时间</ac-button>
    <!-- <ac-button type="primary" bindtap="writeBLECharacteristicValue">向低功耗蓝牙设备特征值中写入二进制数据</ac-button> -->
    <ac-button type="primary" disabled="{{!connected||!shock}}" bindtap="writeShock('发送振动指令')">发送振动指令</ac-button>
    <!-- <ac-button type="primary" bindtap="notifyBLECharacteristicValueChange">启用低功耗蓝牙设备特征值变化时的 notify 功能</ac-button> -->

    <ac-view class="title">其他事件</ac-view>
    <ac-button type="primary" disabled="{{!connected||!steps}}" loading="{{stepsNotify}}" bindtap="notifySteps('监听步数')">监听步数</ac-button>
    <ac-button type="primary" disabled="{{!available}}" loading="{{connectionStateChange}}" bindtap="onBLEConnectionStateChange('监听低功耗蓝牙连接的错误事件')">监听低功耗蓝牙连接的错误事件</ac-button>
    <ac-button type="primary" disabled="{{!available}}" loading="{{valueChange}}" bindtap="onBLECharacteristicValueChange('监听低功耗蓝牙设备的特征值变化')">监听低功耗蓝牙设备的特征值变化</ac-button>
  </ac-view>
</ac-view>
```
  


### JS部分

```javascript
// bluetooth.js
// bluetooth.js
var api = require('touchac-api')
var deviceId = ''
var mainServices = []
var NAME = 'MI'
// var NAME = 'MI Band 2'

// 心率控制 2a39
// var HEART_RATE_CONTROL_POINT
// 心率通知 2a37
// var HEART_RATE_MEASUREMENT
// 警报控制 2a44
// var ALERT_NOTIFICATION_CONTROL_POINT
// 新警报 2a46
// var NEW_ALERT
// 当前时间 2a2b
var CURRENT_TIME = '00002a2b'
var currentTime = {}
// 剩余电量ID
var ELECTRICITY = '0000ff0c'
var electricity = {
  serviceId: '',
  characteristicId: ''
}
// 震动ID
var SHOCK = '00002a06'
var shock = {
  serviceId: '',
  characteristicId: ''
}
// 步数
var STEPS = '0000ff06'
var steps = {
  serviceId: '',
  characteristicId: ''
}
var services = []
export default {
  data () {
    return {
      // 开启状态
      open: false,
      // 可用状态
      available: false,
      // 搜索状态
      discovering: false,
      // 状态变化监听
      stateChange: false,
      // 新设备监听
      deviceFound: false,
      // 正在连接
      connecting: false,
      // 设备ID
      deviceId: '',
      // 连接状态
      connected: false,
      // 服务列表
      services: [],
      // 主服务列表
      mainServices: [],
      // 电量信息
      electricity: false,
      // 振动信息
      shock: false,
      // 步数信息
      steps: false,
      // 时间信息
      currentTime: false,
      // 步数监听
      stepsNotify: false,
      // 连接错误状态监听
      connectionStateChange: false,
      // 特征值变化监听
      valueChange: false
    }
  },
  methods: {
    // 弹窗显示结果
    showAlert (title,content) {
      appcan.showAlert({
        title: title,
        content: content,
        butonText: '确定'
      })
    },
    // 初始化蓝牙适配器
    openBluetoothAdapter (title) {
      var self = this
      api.openBluetoothAdapter({
        success (res) {
          console.log('openBluetoothAdapter success', res)
          self.showAlert(title,res)
          self.setData({
            open: true
          })
        },
        fail (e) {
          console.log('openBluetoothAdapter fail', e)
        }
      })
    },
    // 关闭蓝牙模块。
    closeBluetoothAdapter (title) {
      var self = this
      api.closeBluetoothAdapter({
        success (res) {
          console.log('closeBluetoothAdapter success', res)
          self.showAlert(title,res)
          self.setData({
            open: false,
            available: false,
            discovering: false,
            connecting: false,
            deviceId: '',
            connected: false,
            services: [],
            mainServices: [],
            electricity: false,
            shock: false,
            steps: false,
            currentTime: false,
            stepsNotify: false
          })
        },
        fail (e) {
          console.log('closeBluetoothAdapter fail', e)
        }
      })
    },
    // 获取本机蓝牙适配器状态
    getBluetoothAdapterState (title) {
      var self = this
      api.getBluetoothAdapterState({
        success (res) {
          console.log('getBluetoothAdapterState success', res)
          self.showAlert(title,res)
          self.setData({
            available: res.available,
            discovering: res.discovering
          })
        },
        fail (e) {
          console.log('getBluetoothAdapterState fail', e)
        }
      })
    },
    // 监听蓝牙适配器状态变化事件
    onBluetoothAdapterStateChange (title) {
      var self = this
      api.onBluetoothAdapterStateChange(function (res) {
        console.log('onBluetoothAdapterStateChange res', res)
        self.showAlert(title,res)
        self.setData({
          available: res.available,
          discovering: res.discovering
        })
      })
      this.setData({
        stateChange: true
      })
    },
    // 开始搜寻附近的蓝牙外围设备
    startBluetoothDevicesDiscovery (title) {
      var self = this
      api.startBluetoothDevicesDiscovery({
        success (res) {
          console.log('startBluetoothDevicesDiscovery success', res)
          self.showAlert(title,res)
          self.setData({
            discovering: true
          })
        },
        fail (e) {
          console.log('startBluetoothDevicesDiscovery fail', e)
        }
      })
    },
    // 停止搜寻附近的蓝牙外围设备
    stopBluetoothDevicesDiscovery (title) {
      var self = this
      api.stopBluetoothDevicesDiscovery({
        success (res) {
          console.log('stopBluetoothDevicesDiscovery success', res)
          self.showAlert(title,res)
          self.setData({
            discovering: false
          })
        },
        fail (e) {
          console.log('stopBluetoothDevicesDiscovery fail', e)
        }
      })
    },
    // 根据 uuid 获取处于已连接状态的设备
    getConnectedBluetoothDevices (title) {
      var self = this
      api.getConnectedBluetoothDevices({
        services: mainServices,
        success (res) {
          console.log('getConnectedBluetoothDevices success', res)
          self.showAlert(title,res)
          var devices = res.devices
          if (devices && devices.length) {
            deviceId = devices[0].deviceId
            self.setData({
              deviceId
            })
          }
        },
        fail (e) {
          console.log('getConnectedBluetoothDevices fail', e)
        }
      })
    },
    // 获取所有已发现的蓝牙设备
    getBluetoothDevices (title) {
      var self = this
      api.getBluetoothDevices({
        success (res) {
          console.log('getBluetoothDevices success', res)
          self.showAlert(title,res)
          var devices = res.devices
          function pick () {
            var items = []
            var end = 0
            for (var i = 0; i < 6 && i + start < itemList.length; i++) {
              items.push(itemList[i + start])
              end = i + start
            }
            function fail () {
              if (end < itemList.length) {
                start += 6
                pick()
              }
            }
            if (items.length) {
              api.showActionSheet({
                itemList: items,
                success: function (res) {
                  var index = res.tapIndex
                  // 此处微信web开发工具有bug，取消会触发成功的回调
                  if (typeof index !== 'number') {
                    return
                  }
                  deviceId = devices[index + start].deviceId
                  self.setData({
                    deviceId
                  })
                },
                fail: function (res) {
                  console.log(res.errMsg)
                  self.showAlert(title,res)
                  fail()
                }
              })
            }
          }
          if (devices.length) {
            var itemList = []
            var start = 0

            devices.forEach(device => {
              var name = device.name || device.deviceId
              itemList.push(name)
              console.log('device.name', name)
              self.showAlert(title,name)
              if (!api.showActionSheet) {
                if (device.name === NAME || device.localName === NAME) {
                  deviceId = device.deviceId
                  self.setData({
                    deviceId
                  })
                }
              }
            })
            if (api.showActionSheet) {
              pick()
            }
          }
        },
        fail (e) {
          console.log('getBluetoothDevices fail', e)
        }
      })
    },
    // 监听寻找到新设备的事件
    onBluetoothDeviceFound (title) {
      var self = this
      api.onBluetoothDeviceFound(res => {
        console.log('onBluetoothDeviceFound res', res)
        self.showAlert(title,res)
        var devices = res.devices
        devices.forEach(device => {
          // 此处开发者工具和真机表现不一致，需判断
          if (Array.isArray(device)) {
            device = device[0]
          }
          var name = device.name || device.deviceId
          console.log('device.name', name)
          if (api.showToast) {
            api.showToast({
              title: name
            })
          } else if (name === NAME || device.localName === NAME) {
            deviceId = device.deviceId
            self.setData({
              deviceId
            })
          }
        })
      })
      this.setData({
        deviceFound: true
      })
    },
    // 连接低功耗蓝牙设备
    createBLEConnection (title) {
      var self = this
      api.createBLEConnection({
        deviceId,
        success (res) {
          console.log('createBLEConnection success', res)
          self.showAlert(title,res)
          self.setData({
            connected: true,
            connecting: false
          })
        },
        fail (e) {
          console.log('createBLEConnection fail', e)
          self.setData({
            connecting: false
          })
        }
      })
      this.setData({
        connecting: true
      })
    },
    // 断开与低功耗蓝牙设备的连接
    closeBLEConnection (title) {
      var self = this
      api.closeBLEConnection({
        deviceId,
        success (res) {
          console.log('closeBLEConnection success', res)
          self.showAlert(title,res)
          self.setData({
            connected: false,
            stepsNotify: false
          })
        },
        fail (e) {
          console.log('closeBLEConnection fail', e)
        }
      })
    },
    // 获取蓝牙设备所有 service
    getBLEDeviceServices (title) {
      var self = this
      api.getBLEDeviceServices({
        deviceId,
        success (res) {
          console.log('getBLEDeviceServices success', res)
          self.showAlert(title,res)
          services = res.services
          services.forEach(service => {
            if (service.isPrimary) {
              mainServices.push(service.uuid)
            }
          })
          api.setStorageSync('mainServices', mainServices)
          self.setData({
            services,
            mainServices
          })
        },
        fail (e) {
          console.log('getBLEDeviceServices fail', e)
        }
      })
    },
    onLoad () {
      mainServices = api.getStorageSync('mainServices') || []
      this.setData({
        mainServices: mainServices
      })
    },
    // 获取蓝牙设备所有 characteristic（特征值）
    getBLEDeviceCharacteristics (title) {
      var self = this
      services.forEach(service => {
        api.getBLEDeviceCharacteristics({
          deviceId,
          serviceId: service.uuid,
          success (res) {
            console.log('getBLEDeviceCharacteristics success', res)
            self.showAlert(title,res)
            var characteristics = res.characteristics
            characteristics.forEach(characteristic => {
              var uuid = characteristic.uuid
              var type = 'other'
              function setType (type_, type__) {
                type_.characteristicId = uuid
                type_.serviceId = service.uuid
                type = type__
                var data = {}
                data[type__] = true
                self.setData(data)
              }
              switch (uuid.toLowerCase().substr(0, 8)) {
                case ELECTRICITY: {
                  setType(electricity, 'electricity')
                  break
                }
                case SHOCK: {
                  setType(shock, 'shock')
                  break
                }
                case STEPS: {
                  setType(steps, 'steps')
                  break
                }
                case CURRENT_TIME: {
                  setType(currentTime, 'currentTime')
                  break
                }
              }

              console.log(type + ' ' + 'characteristicId:', uuid)
            })
          },
          fail (e) {
            console.log('getBLEDeviceCharacteristics fail', e)
          }
        })
      })
    },
    // 读取低功耗蓝牙设备的特征值的二进制数据值。
    readBLECharacteristicValue (title,type) {
      var self = this
      api.readBLECharacteristicValue({
        deviceId,
        serviceId: type.serviceId,
        characteristicId: type.characteristicId,
        success (res) {
          console.log('readBLECharacteristicValue success', res)
          self.showAlert(title,res)
        },
        fail (e) {
          console.log('readBLECharacteristicValue fail', e)
        }
      })
    },
    // 读取电量
    readElectricity (title) {
      this.readBLECharacteristicValue(title,electricity)
    },
    // 读取步数
    readSteps (title) {
      this.readBLECharacteristicValue(title,steps)
    },
    // 读取时间
    readCurrentTime (title) {
      this.readBLECharacteristicValue(title,currentTime)
    },
    // 向低功耗蓝牙设备特征值中写入二进制数据。
    writeBLECharacteristicValue (title, type, value) {
      var self = this
      api.writeBLECharacteristicValue({
        deviceId,
        serviceId: type.serviceId,
        characteristicId: type.characteristicId,
        value,
        success (res) {
          console.log('writeBLECharacteristicValue success', res)
          self.showAlert(title,res)
        },
        fail (e) {
          console.log('writeBLECharacteristicValue fail', e)
        }
      })
    },
    // 发送振动指令
    writeShock (title) {
      var buffer = new ArrayBuffer(1)
      var dataView = new DataView(buffer)
      dataView.setUint8(0, 1)
      this.writeBLECharacteristicValue(title,shock, buffer)
    },
    // 启用低功耗蓝牙设备特征值变化时的 notify 功能
    notifyBLECharacteristicValueChange (title,type, state, success, fail) {
      var self = this
      api.notifyBLECharacteristicValueChange({
        deviceId,
        serviceId: type.serviceId,
        characteristicId: type.characteristicId,
        state: typeof state === 'boolean' ? state : true,
        success (res) {
          console.log('notifyBLECharacteristicValueChange success', res)
          self.showAlert(title,res)
          if (typeof success === 'function') {
            success(res)
          }
        },
        fail (e) {
          console.log('notifyBLECharacteristicValueChange fail', e)
          if (typeof fail === 'function') {
            fail(e)
          }
        }
      })
    },
    // 监听步数
    notifySteps (title) {
      this.notifyBLECharacteristicValueChange(title,steps, true, res => {
        this.setData({
          stepsNotify: true
        })
      })
    },
    // 监听低功耗蓝牙连接的错误事件
    onBLEConnectionStateChange (title) {
      var self = this
      api.onBLEConnectionStateChange(res => {
        console.log('onBLEConnectionStateChange res', res)
        self.showAlert(title,res)
        if (!res.connected) {
          self.setData({
            connected: false,
            stepsNotify: false
          })
        }
      })
      this.setData({
        connectionStateChange: true
      })
    },
    // 监听低功耗蓝牙设备的特征值变化
    onBLECharacteristicValueChange (title) {
      api.onBLECharacteristicValueChange(res => {
        console.log('onBLECharacteristicValueChange res', res)
        this.showAlert(title,res)
        if (res.value) {
          var dataView = new DataView(res.value)
          var value = []
          for (var i = 0; i < dataView.byteLength; i++) {
            value.push(dataView.getUint8(i))
          }
          if (res.characteristicId.toLowerCase().substr(0, 8) === CURRENT_TIME) {
            value = `${value[2]}-${value[3]} ${value[4]}:${value[5]}:${value[6]}`
          } else {
            value = value.splice(',')
          }
          console.log(value)
          if (api.showToast) {
            api.showToast({
              title: String(value)
            })
          }
        }
      })
      this.setData({
        valueChange: true
      })
    }
  },
  mounted () {
    this.onLoad()
  }
}
```

