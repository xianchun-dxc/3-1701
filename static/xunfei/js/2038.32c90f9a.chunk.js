"use strict";(self.webpackChunkxfgpt=self.webpackChunkxfgpt||[]).push([[2038],{17819:function(e,n,t){t.d(n,{R_:function(){return v},ez:function(){return y}});var r=t(2144),a=t(86144),i=2,f=.16,o=.05,c=.05,u=.15,d=5,l=4,s=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function h(e){var n=e.r,t=e.g;e=e.b;return{h:360*(n=(0,r.py)(n,t,e)).h,s:n.s,v:n.v}}function g(e){var n=e.r,t=e.g;e=e.b;return"#".concat((0,r.vq)(n,t,e,!1))}function b(e,n,t){return(t=60<=Math.round(e.h)&&Math.round(e.h)<=240?t?Math.round(e.h)-i*n:Math.round(e.h)+i*n:t?Math.round(e.h)+i*n:Math.round(e.h)-i*n)<0?t+=360:360<=t&&(t-=360),t}function p(e,n,t){return 0===e.h&&0===e.s?e.s:(1<(e=t?e.s-f*n:n===l?e.s+f:e.s+o*n)&&(e=1),(e=t&&n===d&&.1<e?.1:e)<.06&&(e=.06),Number(e.toFixed(2)))}function m(e,n,t){return 1<(t=t?e.v+c*n:e.v-u*n)&&(t=1),Number(t.toFixed(2))}function v(e){for(var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},t=[],r=(0,a.uA)(e),i=d;0<i;--i){var f=h(r);f=g((0,a.uA)({h:b(f,i,!0),s:p(f,i,!0),v:m(f,i,!0)}));t.push(f)}t.push(g(r));for(var o=1;o<=l;o+=1){var c=h(r);c=g((0,a.uA)({h:b(c,o),s:p(c,o),v:m(c,o)}));t.push(c)}return"dark"===n.theme?s.map((function(e){var r,i=e.index;e=e.opacity;return g((r=(0,a.uA)(n.backgroundColor||"#141414"),e*=100,e/=100,{r:((i=(0,a.uA)(t[i])).r-r.r)*e+r.r,g:(i.g-r.g)*e+r.g,b:(i.b-r.b)*e+r.b}))})):t}var y={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1890FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},k={},x={};Object.keys(y).forEach((function(e){k[e]=v(y[e]),k[e].primary=k[e][5],x[e]=v(y[e],{theme:"dark",backgroundColor:"#141414"}),x[e].primary=x[e][5]}))},42841:function(e,n,t){t=t(47313),n.Z=(0,t.createContext)({})},62038:function(e,n,t){t.d(n,{C3:function(){return m},H9:function(){return b},Kp:function(){return d},R_:function(){return h},pw:function(){return g},r:function(){return l},vD:function(){return p}});var r=t(1413),a=t(71002),i=t(17819),f=t(47313),o=t(48240),c=t(50170),u=t(42841);function d(e,n){(0,o.ZP)(e,"[@ant-design/icons] ".concat(n))}function l(e){return"object"===(0,a.Z)(e)&&"string"==typeof e.name&&"string"==typeof e.theme&&("object"===(0,a.Z)(e.icon)||"function"==typeof e.icon)}function s(e){var n=0<arguments.length&&void 0!==e?e:{};return Object.keys(n).reduce((function(e,t){var r=n[t];return"class"===t?(e.className=r,delete e.class):e[t]=r,e}),{})}function h(e,n,t){return t?f.createElement(e.tag,(0,r.Z)((0,r.Z)({key:n},s(e.attrs)),t),(e.children||[]).map((function(t,r){return h(t,"".concat(n,"-").concat(e.tag,"-").concat(r))}))):f.createElement(e.tag,(0,r.Z)({key:n},s(e.attrs)),(e.children||[]).map((function(t,r){return h(t,"".concat(n,"-").concat(e.tag,"-").concat(r))})))}function g(e){return(0,i.R_)(e)[0]}function b(e){return e?Array.isArray(e)?e:[e]:[]}var p={width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",focusable:"false"},m=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n",n=(0,f.useContext)(u.Z).csp;(0,f.useEffect)((function(){(0,c.hq)(e,"@ant-design-icons",{prepend:!0,csp:n})}),[])}},2144:function(e,n,t){t.d(n,{T6:function(){return h},VD:function(){return g},WE:function(){return u},Yt:function(){return b},lC:function(){return i},py:function(){return c},rW:function(){return a},s:function(){return l},ve:function(){return o},vq:function(){return d}});var r=t(43777);function a(e,n,t){return{r:255*(0,r.sh)(e,255),g:255*(0,r.sh)(n,255),b:255*(0,r.sh)(t,255)}}function i(e,n,t){e=(0,r.sh)(e,255),n=(0,r.sh)(n,255),t=(0,r.sh)(t,255);var a=Math.max(e,n,t),i=Math.min(e,n,t),f=0,o=0,c=(a+i)/2;if(a===i)f=o=0;else{var u=a-i;o=.5<c?u/(2-a-i):u/(a+i);switch(a){case e:f=(n-t)/u+(n<t?6:0);break;case n:f=(t-e)/u+2;break;case t:f=(e-n)/u+4}f/=6}return{h:f,s:o,l:c}}function f(e,n,t){return t<0&&(t+=1),1<t&&--t,t<1/6?e+6*t*(n-e):t<.5?n:t<2/3?e+(n-e)*(2/3-t)*6:e}function o(e,n,t){var a,i,o;return e=(0,r.sh)(e,360),n=(0,r.sh)(n,100),t=(0,r.sh)(t,100),0===n?a=o=i=t:(a=f(n=2*t-(t=t<.5?t*(1+n):t+n-t*n),t,e+1/3),i=f(n,t,e),o=f(n,t,e-1/3)),{r:255*a,g:255*i,b:255*o}}function c(e,n,t){e=(0,r.sh)(e,255),n=(0,r.sh)(n,255),t=(0,r.sh)(t,255);var a=Math.max(e,n,t),i=Math.min(e,n,t),f=0,o=a,c=a-i,u=0===a?0:c/a;if(a===i)f=0;else{switch(a){case e:f=(n-t)/c+(n<t?6:0);break;case n:f=(t-e)/c+2;break;case t:f=(e-n)/c+4}f/=6}return{h:f,s:u,v:o}}function u(e,n,t){e=6*(0,r.sh)(e,360),n=(0,r.sh)(n,100),t=(0,r.sh)(t,100);var a=Math.floor(e),i=t*(1-n),f=t*(1-(e=e-a)*n);return{r:255*[t,f,i,i,e=t*(1-(1-e)*n),t][n=a%6],g:255*[e,t,t,f,i,i][n],b:255*[i,i,e,t,t,f][n]}}function d(e,n,t,a){return e=[(0,r.FZ)(Math.round(e).toString(16)),(0,r.FZ)(Math.round(n).toString(16)),(0,r.FZ)(Math.round(t).toString(16))],a&&e[0].startsWith(e[0].charAt(1))&&e[1].startsWith(e[1].charAt(1))&&e[2].startsWith(e[2].charAt(1))?e[0].charAt(0)+e[1].charAt(0)+e[2].charAt(0):e.join("")}function l(e,n,t,a,i){return e=[(0,r.FZ)(Math.round(e).toString(16)),(0,r.FZ)(Math.round(n).toString(16)),(0,r.FZ)(Math.round(t).toString(16)),(0,r.FZ)(s(a))],i&&e[0].startsWith(e[0].charAt(1))&&e[1].startsWith(e[1].charAt(1))&&e[2].startsWith(e[2].charAt(1))&&e[3].startsWith(e[3].charAt(1))?e[0].charAt(0)+e[1].charAt(0)+e[2].charAt(0)+e[3].charAt(0):e.join("")}function s(e){return Math.round(255*parseFloat(e)).toString(16)}function h(e){return g(e)/255}function g(e){return parseInt(e,16)}function b(e){return{r:e>>16,g:(65280&e)>>8,b:255&e}}},64929:function(e,n,t){t.d(n,{R:function(){return r}});var r={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"}},86144:function(e,n,t){t.d(n,{uA:function(){return f}});var r=t(2144),a=t(64929),i=t(43777);function f(e){var n,t={r:0,g:0,b:0},f=1,o=null,d=!1,l=!1;return"object"==typeof(e="string"==typeof e?function(e){if(0!==(e=e.trim().toLowerCase()).length){var n=!1;if(a.R[e])e=a.R[e],n=!0;else if("transparent"===e)return{r:0,g:0,b:0,a:0,format:"name"};var t=c.rgb.exec(e);if(t)return{r:t[1],g:t[2],b:t[3]};if(t=c.rgba.exec(e))return{r:t[1],g:t[2],b:t[3],a:t[4]};if(t=c.hsl.exec(e))return{h:t[1],s:t[2],l:t[3]};if(t=c.hsla.exec(e))return{h:t[1],s:t[2],l:t[3],a:t[4]};if(t=c.hsv.exec(e))return{h:t[1],s:t[2],v:t[3]};if(t=c.hsva.exec(e))return{h:t[1],s:t[2],v:t[3],a:t[4]};if(t=c.hex8.exec(e))return{r:(0,r.VD)(t[1]),g:(0,r.VD)(t[2]),b:(0,r.VD)(t[3]),a:(0,r.T6)(t[4]),format:n?"name":"hex8"};if(t=c.hex6.exec(e))return{r:(0,r.VD)(t[1]),g:(0,r.VD)(t[2]),b:(0,r.VD)(t[3]),format:n?"name":"hex"};if(t=c.hex4.exec(e))return{r:(0,r.VD)(t[1]+t[1]),g:(0,r.VD)(t[2]+t[2]),b:(0,r.VD)(t[3]+t[3]),a:(0,r.T6)(t[4]+t[4]),format:n?"name":"hex8"};if(t=c.hex3.exec(e))return{r:(0,r.VD)(t[1]+t[1]),g:(0,r.VD)(t[2]+t[2]),b:(0,r.VD)(t[3]+t[3]),format:n?"name":"hex"}}return!1}(e):e)&&(u(e.r)&&u(e.g)&&u(e.b)?(t=(0,r.rW)(e.r,e.g,e.b),d=!0,l="%"===String(e.r).substr(-1)?"prgb":"rgb"):u(e.h)&&u(e.s)&&u(e.v)?(o=(0,i.JX)(e.s),n=(0,i.JX)(e.v),t=(0,r.WE)(e.h,o,n),d=!0,l="hsv"):u(e.h)&&u(e.s)&&u(e.l)&&(o=(0,i.JX)(e.s),n=(0,i.JX)(e.l),t=(0,r.ve)(e.h,o,n),d=!0,l="hsl"),Object.prototype.hasOwnProperty.call(e,"a"))&&(f=e.a),f=(0,i.Yq)(f),{ok:d,format:e.format||l,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:f}}n="(?:".concat("[-\\+]?\\d*\\.\\d+%?",")|(?:").concat("[-\\+]?\\d+%?",")"),t="[\\s|\\(]+(".concat(n,")[,|\\s]+(").concat(n,")[,|\\s]+(").concat(n,")\\s*\\)?");var o="[\\s|\\(]+(".concat(n,")[,|\\s]+(").concat(n,")[,|\\s]+(").concat(n,")[,|\\s]+(").concat(n,")\\s*\\)?"),c={CSS_UNIT:new RegExp(n),rgb:new RegExp("rgb"+t),rgba:new RegExp("rgba"+o),hsl:new RegExp("hsl"+t),hsla:new RegExp("hsla"+o),hsv:new RegExp("hsv"+t),hsva:new RegExp("hsva"+o),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function u(e){return Boolean(c.CSS_UNIT.exec(String(e)))}},43777:function(e,n,t){function r(e,n){"string"==typeof(t=e)&&-1!==t.indexOf(".")&&1===parseFloat(t)&&(e="100%");var t="string"==typeof(t=e)&&-1!==t.indexOf("%");return e=360===n?e:Math.min(n,Math.max(0,parseFloat(e))),t&&(e=parseInt(String(e*n),10)/100),Math.abs(e-n)<1e-6?1:360===n?(e<0?e%n+n:e%n)/parseFloat(String(n)):e%n/parseFloat(String(n))}function a(e){return Math.min(1,Math.max(0,e))}function i(e){return e=parseFloat(e),isNaN(e)||e<0||1<e?1:e}function f(e){return e<=1?"".concat(100*Number(e),"%"):e}function o(e){return 1===e.length?"0"+e:String(e)}t.d(n,{FZ:function(){return o},JX:function(){return f},V2:function(){return a},Yq:function(){return i},sh:function(){return r}})},73233:function(e,n,t){function r(){return!("undefined"==typeof window||!window.document||!window.document.createElement)}t.d(n,{Z:function(){return r}})},47882:function(e,n,t){function r(e,n){if(e){if(e.contains)return e.contains(n);for(var t=n;t;){if(t===e)return!0;t=t.parentNode}}return!1}t.d(n,{Z:function(){return r}})},50170:function(e,n,t){t.d(n,{hq:function(){return s}});var r=t(73233),a=t(47882),i="data-rc-order",f="rc-util-key",o=new Map;function c(e){return(e=(0<arguments.length&&void 0!==e?e:{}).mark)?e.startsWith("data-")?e:"data-".concat(e):f}function u(e){return e.attachTo||document.querySelector("head")||document.body}function d(e){return Array.from((o.get(e)||e).children).filter((function(e){return"STYLE"===e.tagName}))}function l(e,n){if(n=1<arguments.length&&void 0!==n?n:{},!(0,r.Z)())return null;var t=n.csp,a=n.prepend,f=document.createElement("style"),o=(f.setAttribute(i,"queue"===(o=a)?"prependQueue":o?"prepend":"append"),null!=t&&t.nonce&&(f.nonce=null==t?void 0:t.nonce),f.innerHTML=e,u(n));t=o.firstChild;if(a){if("queue"===a&&(e=d(o).filter((function(e){return["prepend","prependQueue"].includes(e.getAttribute(i))}))).length)return o.insertBefore(f,e[e.length-1].nextSibling),f;o.insertBefore(f,t)}else o.appendChild(f);return f}function s(e,n){var t,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},i=u(r),f=(f=r,(t=o.get(i))&&(0,a.Z)(document,t)||(f=(t=l("",f)).parentNode,o.set(i,f),i.removeChild(t)),function(e,n){var t=1<arguments.length&&void 0!==n?n:{};return d(u(t)).find((function(n){return n.getAttribute(c(t))===e}))}(n,r));return f?(null!=(i=r.csp)&&i.nonce&&f.nonce!==(null==(t=r.csp)?void 0:t.nonce)&&(f.nonce=null==(i=r.csp)?void 0:i.nonce),f.innerHTML!==e&&(f.innerHTML=e),f):((t=l(e,r)).setAttribute(c(r),n),t)}}}]);