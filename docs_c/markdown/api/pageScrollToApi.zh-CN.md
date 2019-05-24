### pageScrollTo(OBJECT)

滚动页面到某位置。

**OBJECT参数说明：**

参数 | 类型 | 默认值 | 必填 | 说明
---|---|---|---|---
scrollTop | number| | 是 | 滚动到页面的目标位置，单位 px
duration | number | 300 | 否 | 滚动动画的时长，单位 ms



```javascript
    appcan.pageScrollTo({
        scrollTop: 0,
        duration: 300
    })
```


