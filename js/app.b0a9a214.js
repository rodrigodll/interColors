(function(t){function r(r){for(var o,s,c=r[0],i=r[1],l=r[2],h=0,p=[];h<c.length;h++)s=c[h],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);u&&u(r);while(p.length)p.shift()();return a.push.apply(a,l||[]),e()}function e(){for(var t,r=0;r<a.length;r++){for(var e=a[r],o=!0,c=1;c<e.length;c++){var i=e[c];0!==n[i]&&(o=!1)}o&&(a.splice(r--,1),t=s(s.s=e[0]))}return t}var o={},n={app:0},a=[];function s(r){if(o[r])return o[r].exports;var e=o[r]={i:r,l:!1,exports:{}};return t[r].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=o,s.d=function(t,r,e){s.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,r){if(1&r&&(t=s(t)),8&r)return t;if(4&r&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)s.d(e,o,function(r){return t[r]}.bind(null,o));return e},s.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(r,"a",r),r},s.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},s.p="/interColors/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=r,c=c.slice();for(var l=0;l<c.length;l++)r(c[l]);var u=i;a.push([0,"chunk-vendors"]),e()})({0:function(t,r,e){t.exports=e("56d7")},"034f":function(t,r,e){"use strict";var o=e("85ec"),n=e.n(o);n.a},"56d7":function(t,r,e){"use strict";e.r(r);e("e260"),e("e6cf"),e("cca6"),e("a79d");var o=e("2b0e"),n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{attrs:{id:"app"}},[e("main",[e("div",{staticClass:"tools"},[e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.color1,expression:"color1"}],style:{background:t.color1},attrs:{type:"color"},domProps:{value:t.color1},on:{input:function(r){r.target.composing||(t.color1=r.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.color1,expression:"color1"}],style:{borderColor:t.color1},attrs:{type:"text"},domProps:{value:t.color1},on:{input:function(r){r.target.composing||(t.color1=r.target.value)}}})]),e("div",[e("div",{staticClass:"vertical-range"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.steps,expression:"steps"}],style:t.setStyleRange(t.color1,t.color2),attrs:{type:"range",min:t.min,max:t.max},domProps:{value:t.steps},on:{__r:function(r){t.steps=r.target.value}}})]),e("div",{staticClass:"steps",attrs:{v:""}},[t._v(t._s(t.visualSteps)+" "+t._s(t.visualStepsLabel))])]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.color2,expression:"color2"}],style:{background:t.color2},attrs:{type:"color"},domProps:{value:t.color2},on:{input:function(r){r.target.composing||(t.color2=r.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.color2,expression:"color2"}],style:{borderColor:t.color2},attrs:{type:"text"},domProps:{value:t.color2},on:{input:function(r){r.target.composing||(t.color2=r.target.value)}}})])]),e("div",{staticClass:"colors"},t._l(t.colors,(function(r){return e("button",{key:r,staticClass:"color",style:t.setStyles(r)},[t._v(" "+t._s(t.colorName(r)))])})),0)]),e("h1",[t._v("teste")]),e("h1",[t._v("teste")]),e("h1",[t._v("teste")]),e("h1",[t._v("teste")]),e("h1",[t._v("teste")]),e("h1",[t._v("teste")]),e("h1",[t._v("teste")]),e("h1",[t._v("teste")])])},a=[],s=(e("99af"),e("d81d"),e("fb6a"),e("a9e3"),e("d3b7"),e("ac1f"),e("25f0"),{created:function(){},methods:{randomHex:function(){return"#"+("00"+Math.floor(16777216*Math.random()).toString(16)).substr(-6)},hexArray:function(t){return/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t)},rgbObjectFromHex:function(t){var r=this.hexArray(t);return r?{r:parseInt(r[1],16),g:parseInt(r[2],16),b:parseInt(r[3],16)}:null},rgbArrayFromHex:function(t){var r=this.rgbObjectFromHex(t);return[r.r,r.g,r.b]},hslObjectFromHex:function(t){var r={},e=this.rgbObjectFromHex(t);e.r/=255,e.g/=255,e.b/=255;var o=Math.max(e.r,e.g,e.b),n=Math.min(e.r,e.g,e.b);if(r.l=(o+n)/2,o==n)r.h=r.s=0;else{var a=o-n;switch(r.s=r.l>.5?a/(2-o-n):a/(o+n),o){case e.r:r.h=(e.g-e.b)/a+(e.g<e.b?6:0);break;case e.g:r.h=(e.b-e.r)/a+2;break;case e.b:r.h=(e.r-e.g)/a+4;break}r.h/=6}return{h:Math.round(360*r.h),s:Math.round(100*r.s),l:Math.round(100*r.l)}},hslArrayFromHex:function(t){var r=this.hslObjectFromHex(t);return[r.h,r.s,r.l]},hexToRgb:function(t){var r=this.rgbObjectFromHex(t);return"rgb(".concat(r.r,",").concat(r.g,",").concat(r.b,")")},hexToHsl:function(t){var r=this.hslObjectFromHex(t);return"hsl(".concat(r.h,",").concat(r.s,"%,").concat(r.l,"%)")},rgbChannelToHex:function(t){var r=t.toString(16);return 1==r.length?"0".concat(r):r},rgbToHex:function(t,r,e){return"#".concat(this.rgbChannelToHex(t)).concat(this.rgbChannelToHex(r)).concat(this.rgbChannelToHex(e))},rgbArrayToHex:function(t){return this.rgbToHex(t[0],t[1],t[2])},hslToRgbObject:function(t,r,e){var o,n,a;if(0==r)o=n=a=e;else{var s=function(t,r,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?t+6*(r-t)*e:e<.5?r:e<2/3?t+(r-t)*(2/3-e)*6:t},c=e<.5?e*(1+r):e+r-e*r,i=2*e-c;o=s(i,c,t+1/3),n=s(i,c,t),a=s(i,c,t-1/3)}return{r:Math.round(255*o),g:Math.round(255*n),b:Math.round(255*a)}},hslToRgb:function(t,r,e){var o=this.hslToRgbObject(t,r,e);return"rgb(".concat(o.r,", ").concat(o.g,", ").concat(o.b,")")},hslToHex:function(t,r,e){var o=this.hslToRgbObject(t,r,e);return this.rgbToHex(o.r,o.g,o.b)},brightness:function(t){var r=this.rgbObjectFromHex(t);return(299*r.r+587*r.g+114*r.b)/1e3},foregroundAdjust:function(t,r,e,o){return console.log(t,r,e,o),r=r||154,e=e||"#fff",o=o||"#000",this.brightness(t)<r?e:o},interpolateColor:function(t,r,e){arguments.length<3&&(e=.5);for(var o=t.slice(),n=0;n<3;n++)o[n]=Math.round(o[n]+e*(r[n]-t[n]));return console.log("result >>",o),o},interpolateColors:function(t,r,e){var o=1/(e-1),n=[];t=this.rgbArrayFromHex(t).map(Number),r=this.rgbArrayFromHex(r).map(Number);for(var a=0;a<e;a++)n.push(this.interpolateColor(t,r,o*a));return n}}}),c={el:"main",mixins:[s],data:function(){return{min:3,max:11,delta:7,steps:7,color1:"#491b8d",color2:"#0cc6c6"}},computed:{colors:function(){return this.interpolateColors(this.color1,this.color2,this.steps)},visualSteps:function(){return this.steps-2},visualStepsLabel:function(){return 1===this.visualSteps?"step":"steps"}},methods:{adjust:function(t){var r=this.rgbToHex(t[0],t[1],t[2]);return this.foregroundAdjust(r)},setStyles:function(t){return"background: rgb(".concat(t,"); color: ").concat(this.adjust(t))},setStyleRange:function(t,r){return"background: linear-gradient(90deg, ".concat(t,", ").concat(r,")")},colorName:function(t){return this.rgbArrayToHex(t)}}},i=c,l=(e("034f"),e("2877")),u=Object(l["a"])(i,n,a,!1,null,null,null),h=u.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(h)}}).$mount("#app")},"85ec":function(t,r,e){}});
//# sourceMappingURL=app.b0a9a214.js.map