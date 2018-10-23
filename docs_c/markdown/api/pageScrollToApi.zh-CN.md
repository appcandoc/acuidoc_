### pageScrollTo

滚动页面到某位置。

有两个参数，第一个参数可以是元素的id，代表滚动到这个元素的位置；也可以是数值，代表滚动到距离顶部的位置。例如：

```javascript
    appcan.pageScrollTo('#suggestion-title')
```

第二个参数是滚动的动画时间，当为0时无动画直接到某个位置。