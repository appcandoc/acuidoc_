(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{121:function(o,n,t){"use strict";var s=t(54);t.n(s).a},122:function(o,n,t){(o.exports=t(10)(!1)).push([o.i,"\n.demo-coupon-list .van-popup {\r\n    height: 100%;\n}\r\n",""])},338:function(o,n,t){"use strict";t.r(n);var s=t(2),e={i18n:{"zh-CN":{coupon:{name:"优惠券名称",reason:"优惠券不可用原因"},exchange:"兑换成功"},"en-US":{coupon:{name:"Coupon name",reason:"Coupon unavailable reason"},exchange:"Success"}},data:function(){return{showList:!1,chosenCoupon:-1,exchangedCoupons:[]}},computed:{coupons:function(){return[this.coupon,this.discountCoupon].concat(this.exchangedCoupons)},disabledCoupons:function(){return[this.disabledCoupon,this.disabledDiscountCoupon]},coupon:function(){return{id:1,available:1,discount:0,denominations:150,originCondition:0,reason:"",value:150,name:this.$t("coupon.name"),startAt:1489104e3,endAt:1514592e3}},discountCoupon:function(){return Object(s.a)({},this.coupon,{id:2,discount:88,denominations:0,originCondition:50,value:12})},disabledCoupon:function(){return Object(s.a)({},this.coupon,{id:3,available:0,reason:this.$t("coupon.reason")})},disabledDiscountCoupon:function(){return Object(s.a)({},this.discountCoupon,{discount:10,id:4,available:0,reason:this.$t("coupon.reason")})}},methods:{onChange:function(o){this.showList=!1,this.chosenCoupon=o},onExchange:function(o){this.$toast(this.$t("exchange")),this.exchangedCoupons.push(Object(s.a)({},this.coupon,{id:this.randomId()}))},randomId:function(o){return void 0===o&&(o=999999),Math.floor(Math.random()*o)+1}}},i=(t(121),t(0)),u=Object(i.a)(e,function(){var o=this,n=o.$createElement,t=o._self._c||n;return t("demo-section",[t("demo-block",{attrs:{title:o.$t("basicUsage")}},[t("van-coupon-cell",{attrs:{coupons:o.coupons,"chosen-coupon":o.chosenCoupon},on:{click:function(n){o.showList=!0}}}),t("van-popup",{attrs:{position:"bottom"},model:{value:o.showList,callback:function(n){o.showList=n},expression:"showList"}},[t("van-coupon-list",{attrs:{coupons:o.coupons,"chosen-coupon":o.chosenCoupon,"disabled-coupons":o.disabledCoupons},on:{change:o.onChange,exchange:o.onExchange}})],1)],1)],1)},[],!1,null,null,null);u.options.__file="index.vue";n.default=u.exports},54:function(o,n,t){var s=t(122);"string"==typeof s&&(s=[[o.i,s,""]]);var e={hmr:!0,transform:void 0,insertInto:void 0};t(11)(s,e);s.locals&&(o.exports=s.locals)}}]);