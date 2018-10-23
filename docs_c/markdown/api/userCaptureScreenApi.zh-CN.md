### appcan.onUserCaptureScreen(CALLBACK)

监听用户主动截屏事件，用户使用系统截屏按键截屏时触发此事件

### CALLBACK返回参数： 无

### 示例代码：

```javascript
appcan.onUserCaptureScreen(function (res) {
  appcan.showToast({
    title: '已成功截屏'
  })
})
```

