### 支付宝支付
appcan.requestPayment(OBJECT)

**OBJECT参数说明**


|参数	|类型	|必填	|说明|
|-----|----------|-----|-----|
|target|	String|	是|	支付方式 alipay|
|statement	|Object|	是|	支付订单信息，不同的支付方式不同（支付宝订单参数、微信订单参数）|
|success	|Function|	否	|接口调用成功的回调|
|fail|	Function	|否|	接口调用失败的回调函数|
|complete|	Function|	否	|接口调用结束的回调函数（调用成功、失败都会执行）|

**支付平台开发文档 **

[微信支付](https://pay.weixin.qq.com/wiki/doc/api/index.html) <br/>
[支付宝支付](https://docs.open.alipay.com/204/)

**注意事项**
支付成功的回调不能作为认定支付成功的最终判断依据，需要服务端二次验证
支付成功和失败的回调可能由于某些操作无法触发，可通过监听应用返回前台继续运行的事件（appcan.onAppResume(CALLBACK)）通过服务端查询支付状态。


示例
```javascript
appcan.requestPayment({
    target: 'wxpay',
    statement:'biz_content=%7B%22out_trade_no%22%3A%221543304102951%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22seller_id%22%3A%22kakatour%40qq.com%22%2C%22subject%22%3A%22%E6%94%AF%E4%BB%98%E5%AE%9D%E6%B5%8B%E8%AF%95%22%2C%22timeout_express%22%3A%2230m%22%2C%22total_amount%22%3A%220.01%22%7D&method=alipay.trade.app.pay&charset=utf-8&version=1.0&notify_url=http%3A%2F%2F115.28.92.161%3A1337%2Fparse%2Falipay&app_id=2016122804687398&timestamp=2018-11-27+15%3A35%3A02&sign_type=RSA&sign=EShklz7ce1YVaiNdgAIRwKaSSOJm78LlZo9c6MjwSDyDFeXCuuGioboObn5Rd1XR8dU%2FnALYXkCEDQRWMDuyjKHUeTTpgYB56H%2Fz5bcwJwLMtEzX6gxrTeP7xC4NV27WtZy7BTqu4pI0YmWHqPRtxUL%2B4OA0YU2LP5BtEL9zdrnYhUL8PFQqB0wLknwnu5K9NqE%2Fkw7jIX4V0xvDQ2xKpZtizo%2BFSuRukHg2NQr%2Fd1ALaCLdWKW%2B2%2BX77cJ8gI%2F5gmuz84S0nY%2BKKq%2FEne0QleUBXxp1b7Vj5e%2FGT7eDnWyFlmuK8gofbNU7uxgfuQUisXOnuekyzvfc8tFCP4uPnA%3D%3D',
    success: function() {
        console.log('支付成功')
    },
    fail: function() {
        console.log('支付失败')
    }
})
appcan.onAppResume(function() {
    // APP 返回前台，从服务器查询支付结果...
})
```
