(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{212:function(e,t,n){"use strict";var l=n(99);n.n(l).a},213:function(e,t,n){(e.exports=n(10)(!1)).push([e.i,"\n.demo-waterfall ul {\n    max-height: 360px;\n    overflow: scroll;\n    border-top: 1px solid #e5e5e5;\n}\n.demo-waterfall li {\n    line-height: 50px;\n    border-bottom: 1px solid #e5e5e5;\n    background: #fff;\n    text-align: center;\n}\n.demo-waterfall .page-desc {\n    padding: 5px 0;\n    line-height: 1.4;\n    font-size: 14px;\n    text-align: center;\n    color: #666;\n}\n",""])},333:function(e,t,n){"use strict";n.r(t);var l=n(6),i={i18n:{"zh-CN":{text:"当即将滚动到元素底部时，会自动加载更多",tips:"注意：Waterfall 已被废弃，请使用 List 组件代替"},"en-US":{text:"This list will load items will scroll to bottom.",tips:"Waterfall is deprecated and no longer maintained, please use the List component instead."}},data:function(){return{list:[0,1,2,3,4,5,6,7,8,9],disabled:!1}},directives:{WaterfallLower:Object(l.d)("lower")},methods:{loadMore:function(){var e=this;this.disabled=!0,setTimeout(function(){for(var t=0;t<5;t++)e.list.push(e.list.length);e.disabled=!1},200)}}},a=(n(212),n(0)),o=Object(a.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("demo-section",[n("van-notice-bar",[e._v(e._s(e.$t("tips")))]),n("demo-block",{attrs:{title:e.$t("basicUsage")}},[n("p",{staticClass:"page-desc"},[e._v(e._s(e.$t("text")))]),n("ul",{directives:[{name:"waterfall-lower",rawName:"v-waterfall-lower",value:e.loadMore,expression:"loadMore"}],attrs:{"waterfall-disabled":"disabled","waterfall-offset":"400"}},e._l(e.list,function(t){return n("li",[e._v(e._s(t))])}))])],1)},[],!1,null,null,null);o.options.__file="index.vue";t.default=o.exports},99:function(e,t,n){var l=n(213);"string"==typeof l&&(l=[[e.i,l,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(11)(l,i);l.locals&&(e.exports=l.locals)}}]);