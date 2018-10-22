### appcan.navigateTo(OBJECT)

保留当前页面，跳转到应用内的某个页面，使用appcan.navigateBack可以返回到原页面。

**OBJECT 参数说明：**

参数 | 类型 | 必填 | 说明
---|---|---|---
url | String | 是 | 需要跳转的应用内非 tabBar 的页面的路径 , 路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2'
success | Function | 否 | 接口调用成功的回调函数
fail | Function | 否 | 接口调用失败的回调函数
complete | Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）

**示例代码：**

```javascript
appcan.navigateTo({
  url: 'test?id=1'
})
```
### appcan.redirectTo(OBJECT)

关闭当前页面，跳转到应用内的某个页面。

**OBJECT 参数说明：**

参数 | 类型 | 必填 | 说明
---|---|---|---
url | String | 是 | 需要跳转的应用内非 tabBar 的页面的路径，路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2'
success | Function | 否 | 接口调用成功的回调函数
fail | Function | 否 | 接口调用失败的回调函数
complete | Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）

**示例代码：**

```javascript
appcan.redirectTo({
  url: 'test?id=1'
})
```

### appcan.switchTab(OBJECT)

跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。

在App端，只允许同级的tabBar之间使用此api进行切换，不允许其他界面直接跳转到某tabBar页面。

web端无此限制。

**OBJECT 参数说明：**

参数 | 类型 | 必填 | 说明
---|---|---|---
url | String | 是 | 需要跳转的 tabBar 页面的路径（需在 app.json config 的tabBar 字段定义的页面），路径后不能带参数
success | Function | 否 | 接口调用成功的回调函数
fail | Function | 否 | 接口调用失败的回调函数
complete | Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）

**示例代码：**

```javascript
{
  "tabBar": {
    "list": [{
      "pagePath": "index",
      "text": "首页"
    },{
      "pagePath": "other",
      "text": "其他"
    }]
  }
}
appcan.switchTab({
  url: '/index'
})
```
### appcan.navigateBack(OBJECT)
关闭当前页面，返回上一页面。

**示例代码：**

```javascript
appcan.navigateBack()
```
**Tip**

1.  appcan.navigateTo 和 appcan.redirectTo 不允许跳转到 tabbar 页面，只能用 appcan.switchTab 跳转到 tabbar 页面
