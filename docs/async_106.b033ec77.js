(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{101:function(n,e,t){var i=t(181);"string"==typeof i&&(i=[[n.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};t(5)(i,s);i.locals&&(n.exports=i.locals)},180:function(n,e,t){"use strict";var i=t(101);t.n(i).a},181:function(n,e,t){(n.exports=t(4)(!1)).push([n.i,"\n.demo-list .van-cell {\n    text-align: center;\n}\n.demo-list .page-desc {\n    padding: 5px 0;\n    line-height: 1.4;\n    font-size: 14px;\n    text-align: center;\n    color: #666;\n}\n",""])},273:function(n,e,t){"use strict";t.r(e);var i={i18n:{"zh-CN":{text:"当即将滚动到元素底部时，会自动加载更多"},"en-US":{text:"This list will load items will scroll to bottom."}},data:function(){return{list:[],refreshing:!1,loading:!1,finished:!1}},methods:{onLoad:function(){var n=this;setTimeout(function(){for(var e=0;e<10;e++){var t=n.list.length+1;n.list.push(t<10?"0"+t:t)}n.loading=!1,n.list.length>=40&&(n.finished=!0)},500)},onRefresh:function(){var n=this;setTimeout(function(){n.list=[],n.finished=!1,n.refreshing=!1,window.scrollTo(0,10)},1e3)}}},s=(t(180),t(0)),o=Object(s.a)(i,function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("demo-section",[t("demo-block",{attrs:{title:n.$t("basicUsage")}},[t("p",{staticClass:"page-desc"},[n._v(n._s(n.$t("text")))]),t("van-pull-refresh",{on:{refresh:n.onRefresh},model:{value:n.refreshing,callback:function(e){n.refreshing=e},expression:"refreshing"}},[t("van-list",{attrs:{finished:n.finished},on:{load:n.onLoad},model:{value:n.loading,callback:function(e){n.loading=e},expression:"loading"}},n._l(n.list,function(n){return t("van-cell",{key:n,attrs:{title:n+""}})}))],1)],1)],1)},[],!1,null,null,null);o.options.__file="index.vue";e.default=o.exports}}]);