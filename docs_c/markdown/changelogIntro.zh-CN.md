## 第一个应用

在安装好需要的开发工具后，就可以开始创建我们的第一个应用啦！

使用 AppCanUI 创建基础工程 创建应用

1、首先需要手动创建一个文件夹，作为我们的项目工程。作为演示，我们创建一个appcanui_basic文件夹。

2、创建完成后，使用Visual Studio Code打开。打开后，在项目展开的情况下，在空白处点击右键，选择 AppCanUI 创建基础工程。

<img src='./static/createBasic.png' width='250' />

创建完成后在该目录下生成基础工程如下：

<img src='./static/basic.png' width='250' />

3、安装项目依赖，windows电脑可以通过cmd，macOS可以通过终端，进入到该文件夹的目录下，执行npm install，依赖安装完之后执行npm update升级依赖包，确保依赖包的版本都是最新的

4、在项目展开的情况下，在空白处点击右键，选择 AppCanUI 下载应用调试器，会在你的浏览器弹出应用调试器的下载页面，拿出手机扫描二维码下载安装。

<img src='./static/downrunner.png' width='250' />

5、 IP地址和端口号：在项目展开的情况下，在空白处点击右键，选择 AppCanUI 查看WIFI真机同步IP和端口号

<img src='./static/ipPort.png' width='250' />

6、 安装好调试器后打开，点击红色圈着的小圆点，在弹出的框内输入IP地址和端口号
点击连接，提示<img src='./static/wifi.png' width='150' />说明连接成功

**小圆点**：红色表示已连接，灰色表示未连接

<img src='./static/runnerScoket.png' width='250' />

7、 windows电脑可以通过cmd，macOS可以通过终端，进入到该文件夹的目录下，执行npm run build，执行完成后会生成dist文件目录，config.xml文件是配置页面的入口，appId 应用的配置，app.json 配置文件详见 [app配置](https://appcandoc.github.io/acuidoc_/#/zh-CN/appconfigIntro)

<img src='./static/dist.png' width='250' />

8、在项目展开的情况下，在空白处点击右键，选择 AppCanUI WIFI真机同步,会把dist目录下的代码同步到调试器上。

**在页面中写的console.log会输出到vscode的控制台，以便调试代码**

<img src='./static/wifiSync.png' width='250' />
