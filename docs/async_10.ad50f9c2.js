(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{337:function(s,a,n){"use strict";n.r(a);var t={created:function(){this.content=unescape("%3Ch2%3ECustom%20Theme%3C/h2%3E%0A%3Cp%3E%3Ccode%3EVant%3C/code%3E%20provides%20a%20set%20of%20default%20themes%2C%20if%20you%20want%20to%20custom%20the%20theme%20color%20or%20other%20styles%2C%20you%20can%20use%20the%20following%20methods%3A%3C/p%3E%0A%3Ch3%3EOption%201.%20PostCSS%20Plugin%3C/h3%3E%0A%3Cp%3EYou%20can%20import%20the%20postcss%20source%20code%20in%20your%20own%20project%2C%20then%20use%20%3Ca%20href%3D%22https%3A//www.npmjs.com/package/postcss-theme-variables%22%3Epostcss-theme-variables%3C/a%3E%20to%20replace%20the%20postcss%20variable.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-comment%22%3E//%20import%20base%20style%3C/span%3E%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27vant/packages/vant-css/src/base.css%27%3C/span%3E%3B%0A%0A%3Cspan%20class%3D%22hljs-comment%22%3E//%20import%20component%20style%3C/span%3E%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27vant/packages/vant-css/src/button.css%27%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27vant/packages/vant-css/src/checkbox.css%27%3C/span%3E%3B%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EThen%20require%20the%20plugin%20in%20the%20postcss.config.js%2C%20and%20configure%20the%20variables%20according%20to%20project%20needs%2C%20you%20can%20view%20all%20the%20available%20variables%20in%20%3Ca%20href%3D%22https%3A//github.com/youzan/vant/blob/dev/packages/vant-css/src/common/var.css%22%3Eprofile%3C/a%3E.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-built_in%22%3Emodule%3C/span%3E.exports%20%3D%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eplugins%3C/span%3E%3A%20%5B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-built_in%22%3Erequire%3C/span%3E%28%3Cspan%20class%3D%22hljs-string%22%3E%27postcss-easy-import%27%3C/span%3E%29%28%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eextensions%3C/span%3E%3A%20%5B%3Cspan%20class%3D%22hljs-string%22%3E%27pcss%27%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-string%22%3E%27css%27%3C/span%3E%5D%0A%20%20%20%20%7D%29%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-built_in%22%3Erequire%3C/span%3E%28%3Cspan%20class%3D%22hljs-string%22%3E%27postcss-theme-variables%27%3C/span%3E%29%28%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Evars%3C/span%3E%3A%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ered%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27%23F60%27%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Egray%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27%23CCC%27%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eblue%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27%2303A9F4%27%3C/span%3E%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eprefix%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27%24%27%3C/span%3E%0A%20%20%20%20%7D%29%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-built_in%22%3Erequire%3C/span%3E%28%3Cspan%20class%3D%22hljs-string%22%3E%27precss%27%3C/span%3E%29%28%29%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-built_in%22%3Erequire%3C/span%3E%28%3Cspan%20class%3D%22hljs-string%22%3E%27postcss-calc%27%3C/span%3E%29%28%29%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-built_in%22%3Erequire%3C/span%3E%28%3Cspan%20class%3D%22hljs-string%22%3E%27autoprefixer%27%3C/span%3E%29%28%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ebrowsers%3C/span%3E%3A%20%5B%3Cspan%20class%3D%22hljs-string%22%3E%27Android%20%26gt%3B%3D%204.0%27%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-string%22%3E%27iOS%20%26gt%3B%3D%207%27%3C/span%3E%5D%0A%20%20%20%20%7D%29%0A%20%20%5D%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%3EOption%202.%20Local%20build%3C/h3%3E%0A%3Cp%3EVant%20also%20support%20local%20build%20to%20custom%20themes.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-bash%22%3E%3Cspan%20class%3D%22hljs-comment%22%3E%23%20Clone%20the%20repository%3C/span%3E%0Agit%20%3Cspan%20class%3D%22hljs-built_in%22%3Eclone%3C/span%3E%20git@github.com%3Ayouzan/vant.git%0A%3Cspan%20class%3D%22hljs-built_in%22%3Ecd%3C/span%3E%20packages/vant-css%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EIn%20the%20local%20vant-css%20repository%2C%20modify%20the%20variables%20in%20src/common/var.css%2C%20then%20execute%20the%20following%20build%20command%20to%20generate%20the%20style%20file.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-bash%22%3Enpm%20run%20build%0A%3C/code%3E%3C/pre%3E%0A")}},e=n(0),p=Object(e.a)(t,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this.$createElement;return(this._self._c||s)("section",{domProps:{innerHTML:this._s(this.content)}})}],!1,null,null,null);p.options.__file="habitIntro.en-US.md";a.default=p.exports}}]);