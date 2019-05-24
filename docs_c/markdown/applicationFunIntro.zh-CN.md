### appcan.loginAuth(OBJECT，CALLBACK) 获取code

获取微应用授权code。

#### OBJECT参数说明

|参数|	类型|	必填	|说明|
|----|-----|-----|----|
|scope|	String|	是	|snsapi_userinfo|
|clientId|	String|	是	|服务id|

#### CALLBACK 回调函数，返回code值

### appcan.openMicroApp(OBJECT) 

#### OBJECT 调取微应用的信息

### appcan.IS_APP 判断当前设备是否为app

### 示例：

```javascript

if(appcan.IS_APP) console.log('当前设备是app')

```

### appcan.IS_ANDROID 判断当前设备是否为android

### 示例：

```javascript

if(appcan.IS_ANDROID) console.log('当前设备是android')

```

### appcan.IS_IOS 判断当前设备是否为ios

### 示例：

```javascript

if(appcan.IS_IOS) console.log('当前设备是ios')

```

### appcan.showMicroAppBackButton(OBJECT) 是否显示左上角返回按钮

#### OBJECT参数说明

|参数|	类型|	必填	|
|----|-----|-----|
|backButton|	boole |	是	

### appcan.closeCurrentMicroApp() 关闭当前微应用


