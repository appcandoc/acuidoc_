(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{147:function(e,c,t){"use strict";var o=t(85);t.n(o).a},148:function(e,c,t){(e.exports=t(4)(!1)).push([e.i,"\n.demo-checkbox .van-checkbox {\n    margin: 10px 0 0 20px;\n}\n.demo-checkbox .van-cell .van-checkbox {\n      margin: 0;\n}\n.demo-checkbox img {\n    width: 20px;\n    display: block;\n}\n",""])},291:function(e,c,t){"use strict";t.r(c);var o={i18n:{"zh-CN":{checkbox:"复选框",customIcon:"自定义图标",title3:"Checkbox 组",title4:"设置最大可选数",title5:"与 Cell 组件一起使用"},"en-US":{checkbox:"Checkbox",customIcon:"Custom Icon",title3:"Checkbox Group",title4:"Maximum amount of checked options",title5:"Inside a Cell"}},data:function(){return{checkbox1:!0,checkbox2:!0,list:["a","b","c"],result:["a","b"],result2:[],result3:[],icon:{normal:"https://img.yzcdn.cn/public_files/2017/10/13/c547715be149dd3faa817e4a948b40c4.png",active:"https://img.yzcdn.cn/public_files/2017/10/13/793c77793db8641c4c325b7f25bf130d.png"}}},methods:{toggle:function(e){this.$refs.checkboxes[e].toggle()}}},n=(t(147),t(0)),l=Object(n.a)(o,function(){var e=this,c=e.$createElement,t=e._self._c||c;return t("demo-section",[t("demo-block",{attrs:{title:e.$t("basicUsage")}},[t("van-checkbox",{model:{value:e.checkbox1,callback:function(c){e.checkbox1=c},expression:"checkbox1"}},[e._v(e._s(e.$t("checkbox")))])],1),t("demo-block",{attrs:{title:e.$t("disabled")}},[t("van-checkbox",{attrs:{value:!1,disabled:""}},[e._v(e._s(e.$t("checkbox")))]),t("van-checkbox",{attrs:{value:!0,disabled:""}},[e._v(e._s(e.$t("checkbox")))])],1),t("demo-block",{attrs:{title:e.$t("customIcon")}},[t("van-checkbox",{scopedSlots:e._u([{key:"icon",fn:function(c){return t("img",{attrs:{src:c.checked?e.icon.active:e.icon.normal}})}}]),model:{value:e.checkbox2,callback:function(c){e.checkbox2=c},expression:"checkbox2"}},[e._v("\n      "+e._s(e.$t("customIcon"))+"\n      ")])],1),t("demo-block",{attrs:{title:e.$t("title3")}},[t("van-checkbox-group",{model:{value:e.result,callback:function(c){e.result=c},expression:"result"}},e._l(e.list,function(c,o){return t("van-checkbox",{key:o,attrs:{name:c}},[e._v("\n        "+e._s(e.$t("checkbox"))+" "+e._s(c)+"\n      ")])}))],1),t("demo-block",{attrs:{title:e.$t("title4")}},[t("van-checkbox-group",{attrs:{max:2},model:{value:e.result2,callback:function(c){e.result2=c},expression:"result2"}},e._l(e.list,function(c,o){return t("van-checkbox",{key:o,attrs:{name:c}},[e._v("\n        "+e._s(e.$t("checkbox"))+" "+e._s(c)+"\n      ")])}))],1),t("demo-block",{attrs:{title:e.$t("title5")}},[t("van-checkbox-group",{model:{value:e.result3,callback:function(c){e.result3=c},expression:"result3"}},[t("van-cell-group",e._l(e.list,function(c,o){return t("van-cell",{key:o,attrs:{clickable:"",title:e.$t("checkbox")+c},on:{click:function(c){e.toggle(o)}}},[t("van-checkbox",{ref:"checkboxes",refInFor:!0,attrs:{name:c}})],1)}))],1)],1)],1)},[],!1,null,null,null);l.options.__file="index.vue";c.default=l.exports},85:function(e,c,t){var o=t(148);"string"==typeof o&&(o=[[e.i,o,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};t(5)(o,n);o.locals&&(e.exports=o.locals)}}]);