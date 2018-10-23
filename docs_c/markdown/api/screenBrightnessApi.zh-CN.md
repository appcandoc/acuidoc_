### appcan.setScreenBrightness(OBJECT)

设置屏幕亮度。

### OBJECT参数说明：

|参数|	类型|	必填	|说明|
|----|---|---|---|
|value	|Number|	是	|屏幕亮度值，范围 0~1，0 最暗，1 最亮|
|success|	Function|	否|	接口调用成功|
|fail|	Function|	否	|接口调用失败的回调函数|
|complete|	Function|	否	|接口调用结束的回调函数（调用成功、失败都会执行）|

### appcan.getScreenBrightness(OBJECT)

获取屏幕亮度。

### OBJECT参数说明：

|参数	|类型	|必填	|说明|
|----|----|----|---|
|success|	Function|	否|	接口调用成功|
|fail|	Function|	否|	接口调用失败的回调函数|
|complete	|Function	|否|	接口调用结束的回调函数（调用成功、失败都会执行）|

### success返回参数说明：

|参数	|类型|	说明|
|----|---|---|
|value	|Number|	屏幕亮度值，范围 0~1，0 最暗，1 最亮|

### Bug & Tip

**tip**: **getScreenBrightness** 接口若安卓系统设置中开启了自动调节亮度功能，则屏幕亮度会根据光线自动调整，该接口仅能获取自动调节亮度之前的值，而非实时的亮度值。

### appcan.setKeepScreenOn(OBJECT)

设置是否保持常亮状态。仅在当前APP生效，离开APP后设置失效。一般用于视频播放等场景，生效后手机不会自动息屏。

### OBJECT参数说明：

|参数名	|类型	|必填	|说明|
|---|----|---|---|
|keepScreenOn|	Boolean|	是	|是否保持屏幕常亮|
|success|	Function|	否	|接口调用成功的回调函数|
|fail|	Function|	否|	接口调用失败的回调函数|
|complete|	Function|	否|	接口调用结束的回调函数（调用成功、失败都会执行）|

### success返回参数说明：

|参数名	|类型|	说明|
|---|---|---|
|errMsg|	String|	调用结果|

示例代码：
```html
<ac-view class="content">
  <ac-row height="40" space-bottom="30">
    <ac-col span="2" vertical-align="middle">
      当前亮度：
    </ac-col>
    <ac-col span="10">
        <ac-input class="input" type="string" name="input" value="{{value+'%'}}"></ac-input>
    </ac-col>
  </ac-row>
  <ac-view class="slider_win">
    <ac-slider ui:model="value" bindchange="sliderchange"></ac-slider>
  </ac-view>
  <ac-row height="40" space-top="30">
    <ac-col span="2" vertical-align="middle">
      常亮：
    </ac-col>
    <ac-col span="10">
        <ac-input class="input" type="string" name="input" value="{{isKeep?'是':'否'}}"></ac-input>
    </ac-col>
  </ac-row>
  <ac-button type="primary" bindtap="keep">设置屏幕常亮</ac-button>
  <ac-button type="primary" bindtap="cancel">取消屏幕常亮</ac-button>
</ac-view>
```

### JS部分

```javascript
export default {
  data () {
    return {
      value: 0,
      isKeep: false,
      sliderMax: 100,
      sliderMin: 0
    }
  },
  methods: {
    get () {
       appcan.getScreenBrightness({
         success: ({ value }) => {
           this.value = value * 100
         }
       })
    },
    set (value) {
      appcan.setScreenBrightness({
        value
      })
    },
    keep () {
      appcan.setKeepScreenOn({
        keepScreenOn: true,
        success: () => {
          this.isKeep = true
        }
      })
    },
    cancel () {
      appcan.setKeepScreenOn({
        keepScreenOn: false,
        success: () => {
          this.isKeep = false
        }
      })
    },
    sliderchange (value) {
      console.log(value)
      this.set(value / 100)
    }
  },
  mounted () {
    this.get()
  }
}
```

