### appcan.showToast(OBJECT)
显示消息提示框，默认1.5秒后自动关闭

**OBJECT参数说明：**

参数 | 类型 | 必填 | 说明
---|---|---|---
title | String | 是 | 提示的内容
icon | String | 否 | 图标，有效值 "success", "loading"
duration | Number | 否 | 提示的延迟时间，单位毫秒，默认：1500

**纯文本提示**

```javascript
appcan.showToast({ title: '默认Toast' })
```

**成功提示**

```javascript
appcan.showToast({ title: '成功Toast', icon: 'success' })
```

**自定义提示时间**

```javascript
appcan.showToast({ title: '成功Toast显示为3秒', icon: 'success', duration: 3000 })
```
**加载提示**

```javascript
appcan.showToast({ title: '加载中', icon: 'loading' })
```

### appcan.hideToast()

手动关闭消息提示框

