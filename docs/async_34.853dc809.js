(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{164:function(t,n,o){"use strict";var e=o(75);o.n(e).a},165:function(t,n,o){(t.exports=o(10)(!1)).push([t.i,"\n.demo-actionsheet .van-button {\n    margin-left: 15px;\n}\n.demo-actionsheet p {\n    padding: 20px;\n}\n",""])},299:function(t,n,o){"use strict";o.r(n);var e={i18n:{"zh-CN":{button1:"弹出 Actionsheet",button2:"弹出带取消按钮的 Actionsheet",button3:"弹出带标题的 Actionsheet",title2:"带取消按钮的 Actionsheet",title3:"带标题的 Actionsheet",description:"描述信息",disabledOption:"禁用选项"},"en-US":{button1:"Show Actionsheet",button2:"Show Actionsheet with cancel button",button3:"Show Actionsheet with title",title2:"Actionsheet with cancel button",title3:"Actionsheet with title",description:"Description",disabledOption:"Disabled Option"}},data:function(){return{show1:!1,show2:!1,show3:!1}},computed:{actions:function(){return[{name:this.$t("option")},{name:this.$t("option"),subname:this.$t("description")},{loading:!0},{name:this.$t("disabledOption"),disabled:!0}]}},methods:{onSelect:function(t){this.show1=!1,this.show2=!1,this.$toast(t.name)},onCancel:function(){this.$toast("cancel")}}},i=(o(164),o(0)),s=Object(i.a)(e,function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("demo-section",[o("demo-block",{attrs:{title:t.$t("basicUsage")}},[o("van-button",{on:{click:function(n){t.show1=!0}}},[t._v(t._s(t.$t("button1")))]),o("van-actionsheet",{attrs:{actions:t.actions},on:{select:t.onSelect},model:{value:t.show1,callback:function(n){t.show1=n},expression:"show1"}})],1),o("demo-block",{attrs:{title:t.$t("title2")}},[o("van-button",{on:{click:function(n){t.show2=!0}}},[t._v(t._s(t.$t("button2")))]),o("van-actionsheet",{attrs:{actions:t.actions,"cancel-text":t.$t("cancel")},on:{cancel:t.onCancel,select:t.onSelect},model:{value:t.show2,callback:function(n){t.show2=n},expression:"show2"}})],1),o("demo-block",{attrs:{title:t.$t("title3")}},[o("van-button",{on:{click:function(n){t.show3=!0}}},[t._v(t._s(t.$t("button3")))]),o("van-actionsheet",{attrs:{title:t.$t("title")},model:{value:t.show3,callback:function(n){t.show3=n},expression:"show3"}},[o("p",[t._v(t._s(t.$t("content")))])])],1)],1)},[],!1,null,null,null);s.options.__file="index.vue";n.default=s.exports},75:function(t,n,o){var e=o(165);"string"==typeof e&&(e=[[t.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};o(11)(e,i);e.locals&&(t.exports=e.locals)}}]);