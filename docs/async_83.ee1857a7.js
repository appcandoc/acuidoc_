(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{335:function(t,e,a){"use strict";a.r(e);var r={i18n:{"zh-CN":{title1:"选择完整时间",title2:"选择日期（年月日）",title3:"选择日期（年月）",title4:"选择时间",year:"年",month:"月"},"en-US":{title1:"Choose DateTime",title2:"Choose Date",title3:"Choose Year-Month",title4:"Choose Time",year:" Year",month:" Month"}},data:function(){return{minHour:10,maxHour:20,minDate:new Date(2018,0,1),maxDate:new Date(2019,10,1),currentDate1:new Date(2018,0,1),currentDate2:null,currentDate3:new Date(2018,0,1),currentDate4:"12:00"}},methods:{formatter:function(t,e){return"year"===t?e+this.$t("year"):"month"===t?e+this.$t("month"):e}}},n=a(0),i=Object(n.a)(r,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("demo-section",[a("demo-block",{attrs:{title:t.$t("title1")}},[a("van-datetime-picker",{attrs:{type:"datetime","min-date":t.minDate,"max-date":t.maxDate},model:{value:t.currentDate1,callback:function(e){t.currentDate1=e},expression:"currentDate1"}})],1),a("demo-block",{attrs:{title:t.$t("title2")}},[a("van-datetime-picker",{attrs:{type:"date","min-date":t.minDate},model:{value:t.currentDate2,callback:function(e){t.currentDate2=e},expression:"currentDate2"}})],1),a("demo-block",{attrs:{title:t.$t("title3")}},[a("van-datetime-picker",{attrs:{type:"year-month","min-date":t.minDate,formatter:t.formatter},model:{value:t.currentDate3,callback:function(e){t.currentDate3=e},expression:"currentDate3"}})],1),a("demo-block",{attrs:{title:t.$t("title4")}},[a("van-datetime-picker",{attrs:{type:"time","min-hour":t.minHour,"max-hour":t.maxHour},model:{value:t.currentDate4,callback:function(e){t.currentDate4=e},expression:"currentDate4"}})],1)],1)},[],!1,null,null,null);i.options.__file="index.vue";e.default=i.exports}}]);