### appcan.showActionSheet(OBJECT)
打开操作菜单

**OBJECT参数说明：**

参数 | 类型 | 必填 | 说明
---|---|---|---
itemList | Object | 是 | 按钮的文字数组
showCancel | Boolean | 否 | 是否显示取消项，默认为true
success | Function | 否 | 接口调用成功的回调函数，详见返回参数说明

**itemList（Object）参数**

参数 | 类型 | 必填 | 说明
---|---|---|---
text | String | 是 | 按钮的文字
color | String | 是 | 按钮的文字颜色

**success返回参数说明：**

参数 | 类型 | 说明
---|---|---
tapIndex | Number | 用户点击的按钮，从上到下的顺序，从0开始，点击取消项返回-1


**基本使用**

```javascript
appcan.showActionSheet({
  itemList: [
    {
        text: '选项1',
        color: '#ff0000'
    },
    {
        text: '选项2',
        color: '#00ff00'
    },
  ],
  success: (index) => {
    appcan.showToast({
      title: `index: ${index.tapIndex}`
    })
  }
})
```


**不显示取消项**

```javascript
appcan.showActionSheet({
  itemList: [
    {
        text: '选项1',
        color: '#000000'
    },
    {
        text: '选项2',
        color: '#00ff00'
    }
  ],
  showCancel: false,
  success: (index) => {
    appcan.showToast({
      title: `index: ${index.tapIndex}`
    })
  }
})
```


**显示提示文字**

```javascript
appcan.showActionSheet({
  header: '确定吗?删除后就无法撤消了哦',
  itemList: [
      {
        text: '删除',
        color: '#ff0000'
      }
  ],
  success: (index) => {
    appcan.showToast({
      title: `index: ${index.tapIndex}`
    })
  }
})
```
