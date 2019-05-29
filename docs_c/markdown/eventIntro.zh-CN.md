### appcan.setEvent(OBJECT)

设置自定义上报事件

### OBJECT参数说明：

|参数名|	类型|	必填|	说明|
|---|---|---|---|
|eventId|	String|	是|	注册的自定义事件ID|
|attri	| Object	|是|	上报的自定义参数|

**示例代码：**

```JavaScript
appcan.setEvent({
  eventId: 'loginEventId', // 事件ID
  attri: {
    time: '2019',
    username: 'zhangsan'
  } // 自定义参数
})
```


