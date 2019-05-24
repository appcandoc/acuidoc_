 ### button
 按钮。

|属性名	| 类型	| 默认值	|  说明  |
|--------|-------|--------|-------------------|
|size |	String	| default	| 按钮的大小 |
|type	| String |	default	| 按钮的样式类型 |
|plain	| Boolean	| false	| 按钮是否镂空，背景色透明 |
|disabled	| Boolean	| false	 | 是否禁用 |
|loading	|Boolean |	false	| 名称前是否带 loading 图标 |
|icon  |	String	| ''	| 名称前的图标，需使用iconfont图标 |
|full-width	| Boolean	| true |	是否100%宽度 |
|form-type	| String |	|	用于 <ac-form/> 组件，点击分别会触发 <ac-form/> 组件的 submit/reset 事件 |
|hover-class	| String |	button-hover |	指定按钮按下去的样式类。当 hover-class="none" 时，没有点击态效果 |
|hover-stop-propagation	| Boolean	| false	 | 指定是否阻止本节点的祖先节点出现点击态 |
|hover-start-time	| Number |	20	| 按住后多久出现点击态，单位毫秒 |
|hover-stay-time |	Number |	70	| 手指松开后点击态保留时间，单位毫秒|

size 有效值：

|值	   | 说明  |
|-------|-----------|
|default	| 默认 |
|mini	 | 超小 |


type 有效值：

|  值	 |  说明  |
|------|--------|
|primary |	主要 |
|default	| 默认 |
|warn	 | 警告 |

form-type 有效值：

|值	 |   说明  |
|-----|--------|
|submit	| 提交表单 |
| reset	| 重置表单 |

典型示例

代码
```script
  <template>
    <ac-layout class="ac-content">
      <ac-view class="win">
        <ac-button type="primary" @tap="aa" :loading="false">主要操作</ac-button>
        <ac-button type="primary" :loading="true">提交中</ac-button>
        <ac-button type="primary" disabled>主要操作-禁用</ac-button>
        <ac-button icon="search">次要操作</ac-button>
        <ac-button disabled icon="like">次要操作-禁用</ac-button>
        <ac-button type="warn" icon="phone3">警告操作</ac-button>
        <ac-button type="warn" disabled>警告操作-禁用</ac-button>
        <ac-button type="primary" :plain="true">主要操作-镂空</ac-button>
        <ac-button :plain="true">次要操作-镂空</ac-button>
        <ac-button type="warn" :plain="true">警告操作-镂空</ac-button>
      </ac-view>
      <ac-view class="button-sp-area">
        <ac-button type="primary">按钮</ac-button>
        <ac-button type="primary" disabled="true">不可点击的按钮</ac-button>
  
        <ac-button type="default">按钮</ac-button>
        <ac-button type="default" disabled="true">按钮</ac-button>
  
        <ac-button class="mini-btn" type="primary" size="mini">按钮</ac-button>
        <ac-button class="mini-btn" type="default" size="mini">按钮</ac-button>
        <ac-button class="mini-btn" type="warn" size="mini">按钮</ac-button>
      </ac-view>
    </ac-layout>
  </template>
  
  <script>
    export default {
      config: {
        window: {
          'navigationBarTitleText': 'button'
        }
      },
      data () {
        return {
          left: 0,
          sliderValue: 20
        }
      },
      methods: {
        aa (e) {
          console.log(e)
        },
        formReset (e) {
        }
      }
    }
  
  </script>
  
  <style lang="less" scoped>
  
  </style>



```
<!-- 
效果

 ![](./img/button/button.png) -->
