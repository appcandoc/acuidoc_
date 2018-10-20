(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{316:function(s,t,C){"use strict";C.r(t);var E={created:function(){this.content=unescape("%3Ch2%3EImagePreview%3C/h2%3E%0A%3Ch3%3EInstall%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20ImagePreview%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27vant%27%3C/span%3E%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%3EUsage%3C/h3%3E%0A%3Ch4%3EBasic%20Usage%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3EImagePreview%28%5B%0A%20%20%3Cspan%20class%3D%22hljs-string%22%3E%27https%3A//img.yzcdn.cn/1.jpg%27%3C/span%3E%2C%0A%20%20%3Cspan%20class%3D%22hljs-string%22%3E%27https%3A//img.yzcdn.cn/2.jpg%27%3C/span%3E%0A%5D%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3ECustom%20config%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3EImagePreview%28%7B%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eimages%3C/span%3E%3A%20%5B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-string%22%3E%27https%3A//img.yzcdn.cn/1.jpg%27%3C/span%3E%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-string%22%3E%27https%3A//img.yzcdn.cn/2.jpg%27%3C/span%3E%0A%20%20%5D%2C%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3EstartPosition%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E1%3C/span%3E%2C%0A%20%20onClose%28%29%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20do%20something%3C/span%3E%0A%20%20%7D%0A%7D%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3EClose%20Manually%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20instance%20%3D%20ImagePreview%28%5B%0A%20%20%3Cspan%20class%3D%22hljs-string%22%3E%27https%3A//img.yzcdn.cn/1.jpg%27%3C/span%3E%2C%0A%20%20%3Cspan%20class%3D%22hljs-string%22%3E%27https%3A//img.yzcdn.cn/2.jpg%27%3C/span%3E%0A%5D%29%3B%0A%0AsetTimeout%28%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-params%22%3E%28%29%3C/span%3E%20%3D%26gt%3B%3C/span%3E%20%7B%0A%20%20instance.close%28%29%3B%0A%7D%2C%20%3Cspan%20class%3D%22hljs-number%22%3E1000%3C/span%3E%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%3EArguments%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EAttribute%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EType%3C/th%3E%0A%3Cth%3EDefault%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Eimages%3C/td%3E%0A%3Ctd%3EImages%20URL%20list%3C/td%3E%0A%3Ctd%3E%3Ccode%3EArray%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%5B%5D%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EstartPosition%3C/td%3E%0A%3Ctd%3EStart%20position%3C/td%3E%0A%3Ctd%3E%3Ccode%3ENumber%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E0%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EshowIndex%3C/td%3E%0A%3Ctd%3EWhether%20to%20show%20index%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Etrue%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EonClose%3C/td%3E%0A%3Ctd%3EClose%20callback%3C/td%3E%0A%3Ctd%3E%3Ccode%3EFunction%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A")}},e=C(0),n=Object(e.a)(E,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this.$createElement;return(this._self._c||s)("section",{domProps:{innerHTML:this._s(this.content)}})}],!1,null,null,null);n.options.__file="en-US.md";t.default=n.exports}}]);