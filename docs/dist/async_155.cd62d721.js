(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{107:function(e,t,c){"use strict";var n=c(47);c.n(n).a},108:function(e,t,c){(e.exports=c(10)(!1)).push([e.i,"\n.demo-switch .van-switch {\n    margin: 0 15px;\n}\n",""])},394:function(e,t,c){"use strict";c.r(t);var n={i18n:{"zh-CN":{title:"提醒",message:"是否切换开关？"},"en-US":{title:"Confirm",message:"Are you sure to toggle switch?"}},data:function(){return{checked:!0,checked2:!0}},methods:{onInput:function(e){var t=this;this.$dialog.confirm({title:this.$t("title"),message:this.$t("message")}).then(function(){t.checked2=e})}}},i=(c(107),c(0)),s=Object(i.a)(n,function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("demo-section",[c("demo-block",{attrs:{title:e.$t("basicUsage")}},[c("van-switch",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}})],1),c("demo-block",{attrs:{title:e.$t("disabled")}},[c("van-switch",{attrs:{disabled:""},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}})],1),c("demo-block",{attrs:{title:e.$t("loading")}},[c("van-switch",{attrs:{loading:""},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}})],1),c("demo-block",{attrs:{title:e.$t("advancedUsage")}},[c("van-switch",{attrs:{value:e.checked2,size:"36px"},on:{input:e.onInput}})],1)],1)},[],!1,null,null,null);s.options.__file="index.vue";t.default=s.exports},47:function(e,t,c){var n=c(108);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};c(11)(n,i);n.locals&&(e.exports=n.locals)}}]);