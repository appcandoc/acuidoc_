### 微信支付
ac.requestPayment(OBJECT)

**OBJECT参数说明**


|参数	|类型	|必填	|说明|
|-----|----------|-----|-----|
|target|	String|	是|	支付方式 wxpay|
|statement	|Object|	是|	支付订单信息，不同的支付方式不同（支付宝订单参数、微信订单参数）|
|success	|Function|	否	|接口调用成功的回调|
|fail|	Function	|否|	接口调用失败的回调函数|
|complete|	Function|	否	|接口调用结束的回调函数（调用成功、失败都会执行）|

**支付平台开发文档 **

[微信支付](https://pay.weixin.qq.com/wiki/doc/api/index.html) <br/>
[支付宝支付](https://docs.open.alipay.com/204/)

**注意事项**
支付成功的回调不能作为认定支付成功的最终判断依据，需要服务端二次验证
支付成功和失败的回调可能由于某些操作无法触发，可通过监听应用返回前台继续运行的事件（ui.onAppResume(CALLBACK)）通过服务端查询支付状态。


示例
```javascript
ac.requestPayment({
    target: 'wxpay',
    statement: {
        'appid': 'wxxxxxxx',
        'partnerid': '1xxxxx1',
        'prepayid': 'wxxxxxxxx',
        'package': 'Sign=WXPay',
        'noncestr': 'xxxx',
        'timestamp': 0,
        'sign': 'xxx',
        'retcode': 0,
        'retmsg': 'OK'
    },
    success: function() {
        console.log('支付成功')
    },
    fail: function() {
        console.log('支付失败')
    }
})
ui.onAppResume(function() {
    // APP 返回前台，从服务器查询支付结果...
})
```
