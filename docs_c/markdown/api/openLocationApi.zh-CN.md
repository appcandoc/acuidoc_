### appcan.openLocation(OBJECT)
​ 使用内置地图查看位置

**OBJECT参数说明：**

参数 | 类型 | 必填 | 说明
---|---|---|---
latitude | Float | 是 | 纬度，范围为-90~90，负数表示南纬
longitude | Float | 是 | 经度，范围为-180~180，负数表示西经
scale | INT | 否 | 缩放比例，范围5~18，默认为18
name | String | 否 | 位置名
backgroundColor | String | 否 | 标题栏背景颜色
color | String | 否 | 标题栏文字颜色
address | String | 否 | 地址的详细说明
success | Function | 否 | 接口调用成功的回调函数
fail | Function | 否 | 接口调用失败的回调函数
complete | Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）

**示例代码：**

```javascript
appcan.getLocation({
  type: 'gcj02', //返回可以用于appcan.openLocation的经纬度
  success: function (res) {
    var latitude = res.latitude
    var longitude = res.longitude
    appcan.openLocation({
      latitude: latitude,
      longitude: longitude,
      scale: 28
    })
  }
})
```
**Bug & Tip**

1. tip: appcan.getLocation、appcan.chooseLocation 接口需要用户授权，请兼容用户拒绝授权的场景。

**完整示例**

点击右下角图标，会调用系统导航。如果你的手机安装了第三方导航APP，会弹出列表供选择。

   
```html
<ac-view class="content">
  <ac-row height="40" space="10">
    <ac-col span="3" vertical-align="middle">
      经度：
    </ac-col>
    <ac-col span="9">
        <ac-input class="input" type="string" name="input" :value="longitude"></ac-input>
    </ac-col>
  </ac-row>
  <ac-row height="40" space="10">
    <ac-col span="3" vertical-align="middle">
      纬度：
    </ac-col>
    <ac-col span="9">
        <ac-input class="input" type="string" name="input" :value="latitude"></ac-input>
    </ac-col>
  </ac-row>
  <ac-row height="40" space="10">
    <ac-col span="3" vertical-align="middle">
      位置名称：
    </ac-col>
    <ac-col span="9">
        <ac-input class="input" type="string" name="input" :value="name"></ac-input>
    </ac-col>
  </ac-row>
  <ac-row height="40" space="10">
    <ac-col span="3" vertical-align="middle">
      详细位置：
    </ac-col>
    <ac-col span="9">
        <ac-input class="input" type="string" name="input" :value="address"></ac-input>
    </ac-col>
  </ac-row>
  <ac-button type="primary" @tap="openLocation">查看位置</ac-button>
</ac-view>
```
**JS部分**


```javascript
export default {
  data () {
    return {
      longitude: 116.407495,
      latitude: 40.015434,
      name: '正益移动',
      address: '北京市朝阳区慧忠北里222号'
    }
  },
  methods: {
    openLocation: function () {
      appcan.openLocation({
        longitude: this.longitude,
        latitude: this.latitude,
        name: this.name,
        address: this.address,
        backgroundColor:"#3699FD",
        success:function(){

        },
        fail: function (res) {
          console.log('fail:', res)
        }
      })

    }
  }
}
```
