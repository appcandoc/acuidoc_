### appcan.getSystemInfo(OBJECT)
获取系统信息。异步接口，调用时不会阻塞其他功能的运行。

OBJECT参数说明：

参数	类型	必填	说明
success	Function	是	接口调用成功的回调
fail	Function	否	接口调用失败的回调函数
complete	Function	否	接口调用结束的回调函数（调用成功、失败都会执行）
success回调参数说明：

参数	说明
brand	手机品牌【App生效】
model	手机型号
pixelRatio	设备像素比
screenWidth	屏幕宽度
screenHeight	屏幕高度
windowWidth	可使用窗口宽度
windowHeight	可使用窗口高度
statusBarHeight	状态栏的高度
language	系统设置的语言
version	版本号【App生效】
system	操作系统版本
platform	客户端平台
SDKVersion	客户端基础库版本【App生效】
ui.getSystemInfoSync()
获取系统信息同步接口，调用时成功之后才继续执行下一个功能。

同步返回参数说明：

参数	说明
brand	手机品牌【App生效】
model	手机型号
pixelRatio	设备像素比
screenWidth	屏幕宽度
screenHeight	屏幕高度
windowWidth	可使用窗口宽度
windowHeight	可使用窗口高度
statusBarHeight	状态栏的高度
language	系统设置的语言
version	版本号【App生效】
system	操作系统版本
platform	客户端平台
SDKVersion	客户端基础库版本【App生效】
示例

<ui-view class="content">
    <ui-row height="40" space-bottom="10">
    <ui-col span="4"  vertical-align="middle">
        手机型号
    </ui-col>
    <ui-col span="8">
        <ui-input class="input" type="string" name="input" value="{{systemInfo.model}}"></ui-input>
    </ui-col>
    </ui-row>
    <ui-row height="40" space-bottom="10">
    <ui-col span="4"  vertical-align="middle">
        操作系统版本
    </ui-col>
    <ui-col span="8">
        <ui-input class="input" type="string" name="input" value="{{systemInfo.system}}"></ui-input>
    </ui-col>
    </ui-row>
    <ui-row height="40" space-bottom="10">
    <ui-col span="4"  vertical-align="middle">
        客户端平台
    </ui-col>
    <ui-col span="8">
        <ui-input class="input" type="string" name="input" value="{{systemInfo.platform}}"></ui-input>
    </ui-col>
    </ui-row>
    <ui-row height="40" space-bottom="10">
    <ui-col span="4"  vertical-align="middle">
        APP语言
    </ui-col>
    <ui-col span="8">
        <ui-input class="input" type="string" name="input" value="{{systemInfo.language}}"></ui-input>
    </ui-col>
    </ui-row>
    <ui-row height="40" space-bottom="10">
    <ui-col span="4"  vertical-align="middle">
        APP版本
    </ui-col>
    <ui-col span="8">
        <ui-input class="input" type="string" name="input" value="{{systemInfo.version}}"></ui-input>
    </ui-col>
    </ui-row>
    <ui-row height="40" space-bottom="10">
    <ui-col span="4"  vertical-align="middle">
        客户端基础库版本
    </ui-col>
    <ui-col span="8">
        <ui-input class="input" type="string" name="input" value="{{systemInfo.SDKVersion}}"></ui-input>
    </ui-col>
    </ui-row>
    <ui-row height="40" space-bottom="10">
    <ui-col span="4"  vertical-align="middle">
        屏幕宽度
    </ui-col>
    <ui-col span="8">
        <ui-input class="input" type="string" name="input" value="{{systemInfo.screenWidth}}"></ui-input>
    </ui-col>
    </ui-row>
    <ui-row height="40" space-bottom="10">
    <ui-col span="4"  vertical-align="middle">
        屏幕高度
    </ui-col>
    <ui-col span="8">
        <ui-input class="input" type="string" name="input" value="{{systemInfo.screenHeight}}"></ui-input>
    </ui-col>
    </ui-row>
    <ui-row height="40" space-bottom="10">
    <ui-col span="4"  vertical-align="middle">
        可使用窗口宽度
    </ui-col>
    <ui-col span="8">
        <ui-input class="input" type="string" name="input" value="{{systemInfo.windowWidth}}"></ui-input>
    </ui-col>
    </ui-row>
    <ui-row height="40" space-bottom="10">
    <ui-col span="4"  vertical-align="middle">
        可使用窗口高度
    </ui-col>
    <ui-col span="8">
        <ui-input class="input" type="string" name="input" value="{{systemInfo.windowHeight}}"></ui-input>
    </ui-col>
    </ui-row>

    <ui-row height="40" space-bottom="10">
    <ui-col span="4"  vertical-align="middle">
        DPI
    </ui-col>
    <ui-col span="8">
        <ui-input class="input" type="string" name="input" value="{{systemInfo.pixelRatio}}"></ui-input>
    </ui-col>
    </ui-row>
    <ui-button type="primary" bindtap="getSystemInfo">获取手机系统信息</ui-button>
</ui-view>
JS部分

export default {
  data() {
    return {
      systemInfo: {}
    }
  },
  methods: {
    getSystemInfo() {
      var that = this
      ui.getSystemInfo({
        success: function (res) {
          that.systemInfo = res
        }
      })
    }
  }
}

