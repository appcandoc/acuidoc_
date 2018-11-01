## 主题色

### 默认主题色

ac-ui中默认包含一套颜色，主题主要是色值为 #3188e9的颜色，主要控制ac-switch，ac-radio，ac-checkbox，ac-slider，ac-progress组件。如下图所示：

![](./static/theme.png)
### 主题文件

ac-ui提供一个主题文件，内涵所有可更改的样式，开发者可以修改文件中的样式进行主题修改，包括主题色。开发者只需要把要修改的样式放到主题文件中，不需要修改的可以删除。

[点击获取主题文件](./static/theme.less)

### 主题文件使用方式

替换主题的原理主要是在编译时，覆盖主题文件已有的不同内容,此代码在`acui-theme`插件中实现。
开发者可以在webpack编译的base文件中调用，如在webpack.base.conf.js中添加如下代码：

```javascript

const acuiTheme = require('acui-theme')
acuiTheme.theme({ theme: 'src/assets/theme.less' })

```

`acui-theme`插件下的theme方法，传入参数对象{theme: path}, path为替换的主题文件，需要是在根目录下的相对路径
