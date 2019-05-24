### radio-group

#### 单项选择器，内部由多个<ac-radio><ac-radio/>组成。

|属性名	| 类型	| 默认值 |	说明|
|-------|-------|-------|------|
|@change |	EventHandle|	|	`<ac-radio-group/>` 中的选中项发生变化时触发 change 事件 |

### radio

#### 单选项目

|属性名	| 类型	| 默认值 |	说明|
|-------|-------|-------|------|
|value	| String	|	`<ac-radio/> `标识。当该`<ac-radio/>` 选中时，`<ac-radio-group/>` 的change事件会携带`<ac-radio/>`的value|
|checked |	Boolean |	false	| 当前是否选中|
|disabled |	Boolean |	false	| 是否禁用|
|color |	Color	|	| radio的颜色，同css的color|

示例

代码
 ```script
<template>
    <ac-layout>

        <ac-cell-group class="demo-small-pitch">
            <div class="ac-cell-title">值和标签一致 - 【值：{{value1}}】</div>
            <ac-cell-item>
            <ac-radio-group @change="handleChange1" slot='left'>
                <ac-label class="radio">
                 <ac-radio value="3"></ac-radio>选项1
                </ac-label>
                <ac-label class="radio">
                选项2 <ac-radio value="6" checked ></ac-radio>
                </ac-label>
                <ac-label class="radio">
                选项3 <ac-radio value="9" ></ac-radio>
                </ac-label>
                <ac-label class="radio">
                选项4 <ac-radio value="12" disabled></ac-radio>
                </ac-label>
            </ac-radio-group>
            </ac-cell-item>
        </ac-cell-group>
    </ac-layout>
</template>

<script type="text/babel">
export default {
  data () {
    return {
        value1: ''
        }
  },
  methods: {
    handleChange1 (value) {
      this.value1 = value
    }
  }
}
</script>


 ```
<!-- 
 效果
 
 ![](./img/radio/radio.png) -->
