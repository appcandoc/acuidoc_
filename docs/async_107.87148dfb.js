(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{166:function(e,n,s){"use strict";var t=s(76);s.n(t).a},167:function(e,n,s){(e.exports=s(10)(!1)).push([e.i,"\n.demo-pull-refresh .van-pull-refresh,\r\n    .demo-pull-refresh .van-pull-refresh__track {\r\n      height: calc(100vh - 50px);\n}\n.demo-pull-refresh p {\r\n    margin: 10px 0 0 15px;\n}\r\n",""])},290:function(e,n,s){"use strict";s.r(n);var t={i18n:{"zh-CN":{text:"刷新次数",success:"刷新成功"},"en-US":{text:"Refresh Count",success:"Refresh success"}},data:function(){return{count:0,isLoading:!1}},methods:{onRefresh:function(){var e=this;setTimeout(function(){e.$toast(e.$t("success")),e.isLoading=!1,e.count++},500)}}},r=(s(166),s(0)),o=Object(r.a)(t,function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("demo-section",{attrs:{name:"pull-refresh"}},[s("van-pull-refresh",{on:{refresh:e.onRefresh},model:{value:e.isLoading,callback:function(n){e.isLoading=n},expression:"isLoading"}},[s("demo-block",{attrs:{title:e.$t("basicUsage")}},[s("p",[e._v(e._s(e.$t("text"))+": "+e._s(e.count))])])],1)],1)},[],!1,null,null,null);o.options.__file="index.vue";n.default=o.exports},76:function(e,n,s){var t=s(167);"string"==typeof t&&(t=[[e.i,t,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};s(11)(t,r);t.locals&&(e.exports=t.locals)}}]);