### appcan.chooseLocation(OBJECT)
打开地图选择位置

**OBJECT参数说明：**

参数 | 类型 | 必填 | 说明
---|---|---|---
backgroundColor | String | 否 | 标题栏背景颜色
color | String | 否 | 标题栏文字颜色
success | Function | 是 | 接口调用成功的回调函数，返回内容详见返回参数说明。
cancel | Function | 否 | 用户取消时调用
fail | Function | 否 | 接口调用失败的回调函数
complete | Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）

**success返回参数说明：**

参数 | 说明
---|---
name | 位置名称
address | 详细地址
latitude | 纬度，浮点数，范围为-90~90，负数表示南纬
longitude | 经度，浮点数，范围为-180~180，负数表示西经

**完整示例**
  
```html
<ac-layout>
        <ac-view class="content">
            <ac-row height="40" space="10">
                <ac-col span="5" vertical-align="middle">
                    地址：
                </ac-col>
                <ac-col span="7">
                    <ac-input :value="hasLocation?locationAddress:'未选择位置'"></ac-input>
                </ac-col>
            </ac-row>
            <ac-row height="40" space="10">
                <ac-col span="5" vertical-align="middle">
                    经纬度：
                </ac-col>
                <ac-col span="7">
                    <ac-input
                            :value="hasLocation?'E:'+ location.longitude[0]+'°'+location.longitude[1]+'′ N:'+location.latitude[0]+'°'+location.latitude[1]+'′':'未选择位置'"></ac-input>
                </ac-col>
            </ac-row>
            <ac-button type="primary" @tap="chooseLocation">选择位置</ac-button>
            <ac-button @tap="clear">清空</ac-button>
        </ac-view>
    </ac-layout>
```
**JS部分**

```javascript
const util = require('@/utils/util')
    const formatLocation = util.formatLocation

    export default {
        config: {
            navigationBarTitleText: '选择位置',
            disableScroll: true
        },
        data() {
            return {
                hasLocation: false,
                location: '',
                locationAddress: ''
            }
        },
        methods: {
            chooseLocation: function () {
                var that = this
                appcan.chooseLocation({
                    backgroundColor: '#3399ff',
                    success: (res) => {
                        this.hasLocation = true
                        this.location = formatLocation(res.longitude, res.latitude)
                        this.locationAddress = res.address
                    },
                    fail: (res) => {
                        console.log('fail:', res)
                    }
                })
            },
            clear: function()  {
                this.hasLocation = false
            }
        },
        mounted() {
        }
    }
```
