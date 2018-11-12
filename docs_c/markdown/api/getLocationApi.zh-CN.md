### appcan.getLocation(OBJECT)
获取当前的地理位置、速度。当用户离开APP后，此接口无法调用。

由于新版本浏览器的特性要求，如果是h5应用要获取定位信息，该h5应用需要通过https来访问。

**OBJECT参数说明：**

参数 | 类型 | 必填 | 说明
---|---|---|---
type | String | 否 | 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于appcan.openLocation的坐标
provider | String | 否 | 使用的定位方式 ，可选system：系统定位（仅APP内可用）、 web：浏览器定位 、tencent：腾讯定位（仅APP内可用）、ip: IP粗略定位 ，缺省为智能判断
success | Function | 是 | 接口调用成功的回调函数，返回内容详见返回参数说明。
fail | Function | 否 | 接口调用失败的回调函数
complete | Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）

**success返回参数说明：**

参数 | 说明
---|---
latitude | 纬度，浮点数，范围为-90~90，负数表示南纬
longitude | 经度，浮点数，范围为-180~180，负数表示西经
speed | 速度，浮点数，单位m/s
accuracy | 位置的精确度
altitude | 高度，单位 m
verticalAccuracy | 垂直精度，单位 m（Android 无法获取，返回 0）
horizontalAccuracy | 水平精度，单位 m
provider | 当前使用的定位方式

**示例代码：**

appcan.getLocation({
  type: 'wgs84',
  success: function (res) {
    var latitude = res.latitude
    var longitude = res.longitude
    var speed = res.speed
    var accuracy = res.accuracy
  }
})

**完整示例**

```html
<ac-layout>
    <ac-view class="container">
      <ac-view class="page-body">
        <ac-view class="page-section">
          <ac-view class="page-body-info">
            <ac-view class="page-body-text-small">当前位置经纬度</ac-view>
            <ac-view ac:if="hasLocation === false">
              <ac-view class="page-body-text">未获取</ac-view>
            </ac-view>
            <ac-view ac:if="hasLocation === true">
              <ac-view class="page-body-text-location">
                <ac-view>E: {{location.longitude[0]}}°{{location.longitude[1]}}′</ac-view>
                <ac-view>N: {{location.latitude[0]}}°{{location.latitude[1]}}′</ac-view>
              </ac-view>
            </ac-view>
          </ac-view>
          <ac-view class="btn-area">
            <ac-button type="primary" @tap="getLocation">获取位置</ac-button>
            <ac-button @tap="clear">清空</ac-button>
          </ac-view>
        </ac-view>
      </ac-view>
    </ac-view>
  </ac-layout>
```
**JS部分**

```javascript
const util = require('@/utils/util')
  const formatLocation = util.formatLocation
  export default {
    config: {
        navigationBarTitleText: '获取位置',
        disableScroll: true
    },
    data() {
      return {
          hasLocation: false,
          location: ''
      }
    },
    methods: {
        getLocation: function () {
            var that = this
            appcan.getLocation({
                success: function (res) {
                    console.log(res)
                    that.setData({
                        hasLocation: true,
                        location: formatLocation(res.longitude, res.latitude)
                    })
                }
            })
        },
        clear: function () {
            this.setData({
                hasLocation: false
            })
        }
    },
    mounted () {
    }
  }
```