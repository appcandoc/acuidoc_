### 微应用开发指南

到这一步就说明开发工具和基础工程都已经搭建好了，下面就来一步一步的学习如何在AppCanUI框架上开发。

AppCanUI是基于vue.js构建了一套基础的移动端框架。除了保留了vue.js所有的优秀特性，我们还根据移动端特性做了大量的扩充和优化，所以在使用AppCanUI之前建议对Vue框架做些了解。

1、资源文件的引用：AppCanUI的所有资源（图片，图标，字体，less文件，js文件）等都可以放在AppCanUI基础框架下的static目录，然后用相对路径的方式去引入，如：./static/logo.png；

2、新建页面：AppCanUI新建页面的时候可以在IDE左侧面板要创建页面的文件夹上右击点击创建页面，会提示输入页面名称，页面标题，输入完成后会在该文件目录下生成页面。

3、路由配置： AppCanUI所有的路由都通过start(路由配置)方法开启，路由配置可以参考Vue的 路由配置 <a href=https://www.cnblogs.com/GainLoss/p/6795225.html target=_blank>路由配置</a>。

4、组件命名规范：组件名应该始终是多个单词的，根组件 App 除外，这样做可以避免跟现有的以及未来的 HTML 元素 <a href=http://w3c.github.io/webcomponents/spec/custom/#valid-custom-element-name target=_blank>相冲突</a>，因为所有的 HTML 元素名称都是单个单词的。

5、组件样式规范： 为组件样式设置作用域。对于应用来说，顶级 App 组件和布局组件中的样式可以是全局的，但是其它所有组件都应该是有作用域的。这条规则只和单文件组件有关。你不一定要使用 scoped 特性。设置作用域也可以通过 <a href=https://vue-loader-v14.vuejs.org/zh-cn/features/css-modules.html target=_blank>CSS Modules</a> ，那是一个基于 class 的类似 <a href=http://getbem.com/ target=_blank>BEM</a> 的策略，当然你也可以使用其它的库或约定。<br>    如果你和其他开发者一起开发一个大型工程，或有时引入三方 HTML/CSS (比如来自 Auth0)，设置一致的作用域会确保你的样式只会运用在它们想要作用的组件上。不止要使用 scoped 特性，使用唯一的 class 名可以帮你确保那些三方库的 CSS 不会运用在你自己的 HTML 上。比如许多工程都使用了 button、btn 或 icon class 名，所以即便你不使用类似 BEM 的策略，添加一个 app 专属或组件专属的前缀 (比如 ButtonClose-icon) 也可以提供很多保护。

6、启动工程：AppCanUI启动项目可以在IDE左侧面板右击选择编译并启动开发服务；

7、工程打包：AppCanUI启动项目可以在IDE左侧面板右击选择编译并导出web工程；

8、暂停工程：AppCanUI启动项目可以在IDE左侧面板右击选择暂停开发服务；