### 微应用开发指南

到这一步就说明开发工具和基础工程都已经搭建好了，下面就来一步一步的学习如何在AppCanUI框架上开发。

AppCanUI是基于vue.js构建了一套基础的移动端框架。除了保留了vue.js所有的优秀特性，我们还根据移动端特性做了大量的扩充和优化，所以在使用AppCanUI之前建议对Vue框架做些了解。

#### 注：AppCanUI 框架只支持16进制色值。如：#ffffff；

1、目录结构，一个完整的AppCanUI项目应包含以下目录：

<img src='./static/base_.png' width='200' />

2、新建页面：AppCanUI新建页面的时候可以在IDE左侧面板要创建页面的文件夹上右击点击创建页面，会提示输入页面名称，页面标题，输入完成后会在该文件目录下生成页面。

<img src='./static/cre_page.png' width='200' /> <br>

<img src='./static/page_name.png' width='400' /> <br>

<img src='./static/page_title.png' width='400' /> <br>

<img src='./static/page.png' width='400' />

3、路由配置： AppCanUI所有的路由都在src目录下的man.js通过start(路由配置)方法开启，路由配置可以参考Vue的 路由配置 <a href=https://www.cnblogs.com/GainLoss/p/6795225.html target=_blank>路由配置</a>。

<img src='./static/hello_appcan.png' width='400' /> <br>

4、路由跳转参数传递：AppCanUI内置navigator组件来实现页面跳转，可以在路由地址后边带上要传递的参数，如：/xxx?xxx=xxx&xxx=xxx 

<img src='./static/navigator_to.png' width='400' />

5、路由跳转参数获取：AppCanUI内置getUrlQuery方法实现路由参数的获取，如：appcan.getUrlQuery()

<img src='./static/getnavigator.png' width='400' />

6、组件样式规范： 为组件样式设置作用域。对于应用来说，顶级 App 组件和布局组件中的样式可以是全局的，但是其它所有组件都应该是有作用域的。这条规则只和单文件组件有关。你不一定要使用 scoped 特性。设置作用域也可以通过 <a href=https://vue-loader-v14.vuejs.org/zh-cn/features/css-modules.html target=_blank>CSS Modules</a> ，那是一个基于 class 的类似 <a href=http://getbem.com/ target=_blank>BEM</a> 的策略，当然你也可以使用其它的库或约定。<br>    如果你和其他开发者一起开发一个大型工程，或有时引入三方 HTML/CSS (比如来自 Auth0)，设置一致的作用域会确保你的样式只会运用在它们想要作用的组件上。不止要使用 scoped 特性，使用唯一的 class 名可以帮你确保那些三方库的 CSS 不会运用在你自己的 HTML 上。比如许多工程都使用了 button、btn 或 icon class 名，所以即便你不使用类似 BEM 的策略，添加一个 app 专属或组件专属的前缀 (比如 ButtonClose-icon) 也可以提供很多保护。

<img src='./static/moudule_style.png' width='400' />

7、 资源文件引用：AppCanUI的所有资源（图片，图标，字体，less文件，js文件）等都可以放在AppCanUI基础框架下的static目录，然后用相对路径的方式去引入，如：./static/logo.png；

<img src='./static/img_.png' width='400' />

8、启动工程：AppCanUI启动项目可以在IDE左侧面板右击选择编译并启动开发服务；

<img src='./static/start_.png' width='180' />

9、工程打包：AppCanUI启动项目可以在IDE左侧面板右击选择编译并导出web工程,打包完成会在根目录下生成dist目录；

<img src='./static/daochu_.png' width='180' />
<br>
<img src='./static/dist_.png' width='230' />

10、暂停服务：AppCanUI启动项目可以在IDE左侧面板右击选择暂停开发服务；

<img src='./static/stop_.png' width='180' />


####  <a href="./static/appcanui-basics.zip" download="appcanui-basics">实例下载</a>