(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{159:function(t,e,n){"use strict";var o=n(91);n.n(o).a},160:function(t,e,n){(t.exports=n(4)(!1)).push([t.i,"\n.demo-dialog .van-doc-demo-block > .van-button {\n    margin-left: 15px;\n}\n",""])},285:function(t,e,n){"use strict";n.r(e);var o={i18n:{"zh-CN":{alert1:"消息提示",alert2:"无标题提示",confirm:"消息确认",content:"有赞是一家零售科技公司，致力于成为商家服务领域里最被信任的引领者"},"en-US":{alert1:"Alert",alert2:"Alert without title",confirm:"Confirm dialog"}},data:function(){return{show:!1,username:"",password:""}},methods:{onClickAlert:function(){this.$dialog.alert({title:this.$t("title"),message:this.$t("content")})},onClickAlert2:function(){this.$dialog.alert({message:this.$t("content")})},onClickConfirm:function(){this.$dialog.confirm({title:this.$t("title"),message:this.$t("content")})},beforeClose:function(t,e){"confirm"===t?setTimeout(e,1e3):e()}}},a=(n(159),n(0)),l=Object(a.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("demo-section",[n("demo-block",{attrs:{title:t.$t("alert1")}},[n("van-button",{attrs:{type:"primary",plain:""},on:{click:t.onClickAlert}},[t._v(t._s(t.$t("alert1")))]),n("van-button",{attrs:{type:"primary",plain:""},on:{click:t.onClickAlert2}},[t._v(t._s(t.$t("alert2")))])],1),n("demo-block",{attrs:{title:t.$t("confirm")}},[n("van-button",{attrs:{type:"primary",plain:""},on:{click:t.onClickConfirm}},[t._v(t._s(t.$t("confirm")))])],1),n("demo-block",{attrs:{title:t.$t("advancedUsage")}},[n("van-button",{attrs:{type:"danger",plain:""},on:{click:function(e){t.show=!0}}},[t._v(t._s(t.$t("advancedUsage")))]),n("van-dialog",{attrs:{"show-cancel-button":"","before-close":t.beforeClose},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("van-field",{attrs:{label:t.$t("username"),placeholder:t.$t("usernamePlaceholder")},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),n("van-field",{attrs:{type:"password",label:t.$t("password"),placeholder:t.$t("passwordPlaceholder")},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1)],1)},[],!1,null,null,null);l.options.__file="index.vue";e.default=l.exports},91:function(t,e,n){var o=n(160);"string"==typeof o&&(o=[[t.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(5)(o,a);o.locals&&(t.exports=o.locals)}}]);