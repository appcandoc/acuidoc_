### appcan.scanCode(OBJECT)

调起客户端扫码界面，扫码成功后返回对应的结果

### Object 参数说明：

|参数	|类型|	必填|	说明|
|---|----|-----|----|
|onlyFromCamera|	Boolean|	否	|是否只能从相机扫码，不允许从相册选择图片|
|scanType|	Array|	否|	扫码类型，参数类型是数组，二维码是'qrCode'，一维码是'barCode'，DataMatrix是‘datamatrix’，pdf417是‘pdf417’。|
|backgroundColor|	String	|否|	标题栏背景颜色|
|color|	String	|否|	标题栏文字颜色|
|success|	Function|	否	|接口调用成功的回调函数，返回内容详见返回参数说明。|
|fail|	Function|	否	|接口调用失败的回调函数|
|complete|	Function|	否|	接口调用结束的回调函数（调用成功、失败都会执行）|

### success返回参数说明：


|参数	|说明|
|-----|----|
|result|	所扫码的内容|
|scanType	|所扫码的类型|
|charSet|	所扫码的字符集|
|path	|当所扫的码为当前APP的合法二维码时，会返回此字段，内容为二维码携带的 path|

### 示例代码：

```javascript
// 允许从相机和相册扫码
appcan.scanCode({
  success: (res) => {
    console.log(res)
  }
})
// 只允许从相机扫码
appcan.scanCode({
  onlyFromCamera: true,
  success: (res) => {
    console.log(res)
  }
})
```
