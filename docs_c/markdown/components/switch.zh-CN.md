### switch
开关选择器，支持v-model双向绑定指令。

| 属性  | 类型   | 默认值 | 描述             |
| ----- | ------ | ---- | -------------- |
|v-model|	Boolean	| false	| 是否选中|
|disabled|	Boolean|	false|	是否禁用|
|color |	Color	| '#4CD864'|默认为主题色	switch 的颜色，同 css 的 color |
|trueValue| String, Number, Boolean|true| 自定义打开时的值|
|falseValue| String, Number, Boolean|false| 自定义关闭时的值|

示例代码

```script
<template>
    <ac-layout >

        <div class="demo-cr demo-small-pitch">
            <ac-switch v-model="switch1"></ac-switch>
            <span>值为：{{switch1}}</span>
        </div>

        <div class="demo-cr demo-small-pitch">
            <ac-switch v-model="switch2" disabled></ac-switch>
            <span>禁用：{{switch2}}</span>
        </div>

        <div class="demo-cr demo-small-pitch">
            <ac-switch v-model="switch3" color="#F00"></ac-switch>
            <span>自定义颜色：{{switch3}}</span>
        </div>

        <div class="demo-cr demo-small-pitch">
            <ac-switch v-model="switch4" true-value="aaaaa" false-value="bbbbb"></ac-switch>
            <span>true-value & false-value：{{switch4}}</span>
        </div>

        <ac-cell-group title="结合Cell组件" class="demo-small-pitch">
            <ac-cell-item type="label">
                <span slot="left">值为：{{switch5}}</span>
                <ac-switch slot="right" v-model="switch5"></ac-switch>
            </ac-cell-item>
            <p slot="bottom" style="text-align:right;padding: .05rem .24rem;color:#555;">设置属性type为label即可点击整行控制switch组件</p>
        </ac-cell-group>
    </ac-layout>

</template>

<script type="text/babel">
    export default {
        data() {
            return {
                switch1: false,
                switch2: true,
                switch3: true,
                switch4: 'aaaaa',
                switch5: true,
            }
        }
    }
</script>


```

 效果
 
 ![](./img/switch/switch.gif)
