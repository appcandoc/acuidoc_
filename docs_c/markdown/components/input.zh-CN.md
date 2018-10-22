### input
原生输入框

| 属性  | 类型   | 默认值 | 描述  |
| ----- | ------ | ---- | ------|
|type| String|text| 文本狂类型,为以下类型：'text', 'password', 'search', 'email', 'number', 'tel', 'datetime-local', 'date', 'time'|
|required| Boolean| false| 是否必须输入|
|disabled| Boolean| | 禁用|
|readonly| Boolean| false| 是否只读|
|value	|String|		|输入框的初始内容。也可以使用model来绑定初始值。|
|placeholder| String| | 输入要提示|
|regex| String| | 自定义正则表达式,email、mobile、银行卡bankcard|
|showClearIcon|Boolean| true| 清除输入图标,内容非空时显示|
|showErrorIcon|Boolean| true| 校验不通过时显示|
|showSuccessIcon|Boolean| true| 校验通过时显示|
|showRequiredIcon|Boolean| true| 必须输入图标|



示例代码：
```script
<template>
    <ac-layout navigationBarTitleText="input" navigationBarBackgroundColor='#FF6453' navigationBarTextStyle='#ffffff'>

        <ac-cell-group class="demo-small-pitch">
            <ac-cell-item>
                <span slot="left">用户名：</span>
                <ac-input slot="right" required v-model="input1" max="20" placeholder="请输入用户名"></ac-input>
            </ac-cell-item>
            <ac-cell-item>
                <span slot="left">密码：</span>
                <ac-input slot="right" type="password" v-model="input2" placeholder="请输入密码"></ac-input>
            </ac-cell-item>
        </ac-cell-group>

        <ac-cell-group title="验证 - 内置正则">
            <ac-cell-item>
                <span slot="left">邮箱：</span>
                <ac-input slot="right" v-model="input3" regex="email" placeholder="请输入邮箱地址"></ac-input>
            </ac-cell-item>

            <ac-cell-item>
                <span slot="left">手机号：</span>
                <ac-input slot="right" v-model="input4" regex="mobile" placeholder="请输入手机号码"></ac-input>
            </ac-cell-item>

            <ac-cell-item>
                <span slot="left">银行卡号：</span>
                <ac-input slot="right" v-model="input5" regex="bankcard" placeholder="请输入银行卡号"></ac-input>
            </ac-cell-item>
        </ac-cell-group>

        <ac-cell-group title="验证 - 自定义正则">
            <ac-cell-item>
                <span slot="left">QQ：</span>
                <ac-input slot="right" v-model="input6" regex="^\d{5,12}$" placeholder="请输入您的QQ号码"></ac-input>
            </ac-cell-item>
        </ac-cell-group>

        <ac-cell-group title="不显示清空图标">
            <ac-cell-item>
                <span slot="left">姓名：</span>
                <ac-input slot="right" v-model="input7" required :showClearIcon="false" placeholder="请输入您的姓名"></ac-input>
            </ac-cell-item>
        </ac-cell-group>

        <ac-cell-group title="不显示正确或错误图标">
            <ac-cell-item>
                <span slot="left">手机号：</span>
                <ac-input slot="right" v-model="input8" required :showSuccessIcon="false" :showErrorIcon="false" regex="mobile" placeholder="请输入手机号码"></ac-input>
            </ac-cell-item>
        </ac-cell-group>

        <ac-cell-group title="获取验证结果">
            <ac-cell-item>
                <span slot="left">手机号：</span>
                <ac-input slot="right" v-model="input9" ref="input9" required regex="mobile" placeholder="请输入手机号码"></ac-input>
            </ac-cell-item>
            <p slot="bottom" style="color:#F00;padding: 0 .3rem;" v-html="result"></p>
        </ac-cell-group>

        <ac-button-group>
            <ac-button size="large" @click.native="clickHander">显示上方手机号验证结果</ac-button>
        </ac-button-group>
    </ac-layout>

</template>

<script type="text/babel">
    export default {
        data() {
            return {
                input1: '',
                input2: '',
                input3: 'appcanui@qq.com',
                input4: '',
                input5: '',
                input6: '',
                input7: '',
                input8: '',
                input9: '',
                result: ''
            }
        },
        methods: {
            clickHander() {
                const input = this.$refs.input9;
                this.result = `{<br />&nbsp;&nbsp;valid：${input.valid}，<br />&nbsp;&nbsp;errorMes：'${input.errorMsg}'，<br />&nbsp;&nbsp;errorCode：'${input.errorCode}'<br />}`;
            }
        }
    }
</script>

<style lang="less">
.ac-button.is-full-width{
    width: 100%;
    margin-bottom: 50px;
}
</style>



```

效果
 ![](./img/input/input.png)
