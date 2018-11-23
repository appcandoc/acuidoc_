### appcan.chooseVideo(Object object)

拍摄视频或从手机相册中选视频。

####参数

***Object object***

|属性|	类型|	默认值|	必填|	说明|
|-----|-----|-----|-----|-----|
|sourceType|	Array.<string>|	['album', 'camera']	|否|	视频选择的来源	|   |
|compressed|	boolean|	true	|否|	是否压缩所选择的视频文件|
|maxDuration|	number|	60|	否	|拍摄视频最长拍摄时间，单位秒|	
|camera	|string	|'back'	|否|	默认拉起的是前置或者后置摄像头。部分 Android 手机下由于系统 ROM 不支持无法生效	|
|success|	function|	|	否|	接口调用成功的回调函数|	
|fail	|function|	|	否|	接口调用失败的回调函数|	
|complete|	function|	|	否	|接口调用结束的回调函数（调用成功、失败都会执行）	|

#### object.sourceType 值

|值	|说明|
|-----|----|
|album|	从相册选择视频|
|camera|	使用相机拍摄视频|
|object.camera |的合法值|

#### object.camera 的合法值

|值	|说明|
|----|----|
|back|	默认拉起后置摄像头|
|front|	默认拉起前置摄像头|

### object.success 回调函数 参数

|属性	|类型|	说明	|最低版本|
|----|-----|-----|------|
|tempFilePath|	string|	选定视频的临时文件路径|
|duration|	number|	选定视频的时间长度|	
|size|	number|	选定视频的数据量大小|	
|height	|number|	返回选定视频的高度	|
|width|	number|	返回选定视频的宽度|
	
### 示例代码

```javascript
appcan.chooseVideo({
  sourceType: ['album','camera'],
  maxDuration: 60,
  camera: 'back',
  success(res) {
    console.log(res.tempFilePath)
  }
})
```

### appcan.createVideoContext(string id, Object this)

创建 video 上下文 VideoContext 对象。

#### 参数

string id
<video/> 组件的 id

Object this

在自定义组件下，当前组件实例的this，以操作组件内 <video/> 组件

#### 返回值

VideoContext

#### 方法

***VideoContext.play() 播放视频***

***VideoContext.pause() 暂停视频***

***VideoContext.stop() 停止视频***

***VideoContext.seek(number position) 跳转到指定位置***

参数 

number position
跳转到的位置，单位 s

***VideoContext.sendDanmu(Object data) 发送弹幕***

参数 

Object data

弹幕内容

|属性|	类型|	默认值|	必填|	说明|
|-----|----|-----|-----|----|
|text	|string|		|是|	弹幕文字|	
|color|	string|		|否	|弹幕颜色|

***VideoContext.playbackRate(number rate) 设置倍速播放***

参数

number rate

倍率，支持 0.5/0.8/1.0/1.25/1.5

***VideoContext.requestFullScreen(Object object) 进入全屏***

参数

Object object

|属性	|类型|	默认值	|必填	|说明	|
|----|-----|-----|-----|-----|
|direction|	number|		|否|	设置全屏时视频的方向，不指定则根据宽高比自动判断。|

****object.direction 值****

|值|	说明|
|----|----|
|0|	正常竖向|
|90|	屏幕逆时针90度|
|-90|	屏幕顺时针90度|

***VideoContext.exitFullScreen() 退出全屏***

***VideoContext.showStatusBar() 显示状态栏，仅在iOS全屏下有效***

***VideoContext.hideStatusBar() 隐藏状态栏，仅在iOS全屏下有效***


### appcan.saveVideoToPhotosAlbum(Object object)

保存视频到系统相册

#### 参数 Object object

|属性	|类型|	默认值	|必填|	说明|	最低版本|
|----|-----|-----|-----|-----|----|
|filePath|	string|		|是|	视频文件路径，可以是临时文件路径也可以是永久文件路径	|
|success|	function|		|否|	接口调用成功的回调函数	|
|fail	|function|		|否|	接口调用失败的回调函数|	
|complete|	function|		|否|	接口调用结束的回调函数（调用成功、失败都会执行）	|

####示例代码

appcan.saveVideoToPhotosAlbum({
  filePath: 'wxfile://xxx',
  success (res) {
    console.log(res.errMsg)
  }
})
