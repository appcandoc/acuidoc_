(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{202:function(t,s,e){"use strict";var o=e(94);e.n(o).a},203:function(t,s,e){(t.exports=e(10)(!1)).push([t.i,"\n.demo-toast .van-button {\r\n    margin-left: 15px;\n}\r\n",""])},237:function(t,s,e){"use strict";e.r(s);var o={i18n:{"zh-CN":{loading:"加载中",title1:"文字提示",title2:"加载提示",title3:"成功/失败提示",success:"成功提示",fail:"失败提示",text1:"我是提示文案，建议不超过十五字~",text2:"成功文案",text3:"失败文案",text4:function(t){return"倒计时 "+t+" 秒"}},"en-US":{title1:"Text",title2:"Loading",title3:"Success/Fail",success:"Success",fail:"Fail",text1:"Some messages",text2:"Success",text3:"Fail",text4:function(t){return t+" seconds"}}},methods:{showToast:function(){this.$toast(this.$t("text1"))},showLoadingToast:function(){this.$toast.loading({mask:!0,message:this.$t("loading")+"..."})},showSuccessToast:function(){this.$toast.success(this.$t("text2"))},showFailToast:function(){this.$toast.fail(this.$t("text3"))},showCustomizedToast:function(t){var s=this,e=this.$toast.loading({duration:0,forbidClick:!0,loadingType:"spinner",message:this.$t("text4",3)}),o=3,n=setInterval(function(){--o?e.message=s.$t("text4",o):(clearInterval(n),s.$toast.clear())},1e3)}}},n=(e(202),e(0)),i=Object(n.a)(o,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("demo-section",[e("demo-block",{attrs:{title:t.$t("title1")}},[e("van-button",{on:{click:t.showToast}},[t._v(t._s(t.$t("title1")))])],1),e("demo-block",{attrs:{title:t.$t("title2")}},[e("van-button",{on:{click:t.showLoadingToast}},[t._v(t._s(t.$t("title2")))])],1),e("demo-block",{attrs:{title:t.$t("title3")}},[e("van-button",{on:{click:t.showSuccessToast}},[t._v(t._s(t.$t("success")))]),e("van-button",{on:{click:t.showFailToast}},[t._v(t._s(t.$t("fail")))])],1),e("demo-block",{attrs:{title:t.$t("advancedUsage")}},[e("van-button",{on:{click:t.showCustomizedToast}},[t._v(t._s(t.$t("advancedUsage")))])],1)],1)},[],!1,null,null,null);i.options.__file="index.vue";s.default=i.exports},94:function(t,s,e){var o=e(203);"string"==typeof o&&(o=[[t.i,o,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e(11)(o,n);o.locals&&(t.exports=o.locals)}}]);