## 框架

为了让开发者便捷的进行移动开发，AppCanUI基于vue.js构建了一套基础的移动框架。除了保留了vue.js所有的优秀特性，我们还根据移动端特性做了大量的扩充和优化。这里大致列举一下新增了哪些特性：

1、 通过简单的json配置即可搭建出主要的界面框架；

2、 抹平移动端浏览器、Android端和 IOS端的渲染差别，让一套代码可以完全兼容3端；

3、 封装了移动端事件，包括按下、长按、手指滑动等；

4、 提供样式隔离机制，每个页面有独立的css不会相互干扰；

5、 提供rpx单位方便做屏幕适配；

6、 提供主题色机制；

7、 与App环境深入配合，例如根据状态栏是否为沉浸式自动计算高度、根据环境自动判断使用web路由切换还是App的webView切换、使用遮罩组件时自动阻止安卓的回退键和IOS的侧滑返回等等；

8、 开发体验优化，使用组件时直接写标签而不需要声明或引入脚本；


9、 输出体积优化，编译输出后首次访问只需要加载几百K公用资源，访问其他页面时会差量加载资源。

10、 语法与开发方式跟微信/支付宝小程序保持很大的一致性，这么做主要有两个目的：

（1）降低学习成本。会开发小程序就会使用AppCanUI，学会了AppCanUI就会开发微信小程序；


（2）可以方便代码复用，微信/支付宝小程序拿过来可以很快移植为AppCanUI工程，发布为web或App，开发了AppCanUI工程可以方便的移植为小程序运行在微信/支付宝端。

