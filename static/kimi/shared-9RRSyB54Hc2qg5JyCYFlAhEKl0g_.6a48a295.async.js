(self.webpackChunk=self.webpackChunk||[]).push([[5368],{5245:function(e,t,n){"use strict";var r=n(30254),o=n(52643),i=n(63313),a=n(83715),c=n(37096),s=n(50989),u=n(20472),l=n(3034),f=n(68120),d=n(44810);const v=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],h=(0,u.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.absolute&&t.absolute,t[n.variant],n.light&&t.light,"vertical"===n.orientation&&t.vertical,n.flexItem&&t.flexItem,n.children&&t.withChildren,n.children&&"vertical"===n.orientation&&t.withChildrenVertical,"right"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignRight,"left"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignLeft]}})((({theme:e,ownerState:t})=>(0,o.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:(0,s.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"})),(({ownerState:e})=>(0,o.Z)({},e.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}})),(({theme:e,ownerState:t})=>(0,o.Z)({},t.children&&"vertical"!==t.orientation&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`}})),(({theme:e,ownerState:t})=>(0,o.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(e.vars||e).palette.divider}`}})),(({ownerState:e})=>(0,o.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),p=(0,u.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.wrapper,"vertical"===n.orientation&&t.wrapperVertical]}})((({theme:e,ownerState:t})=>(0,o.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`}))),m=i.forwardRef((function(e,t){const n=(0,l.Z)({props:e,name:"MuiDivider"}),{absolute:i=!1,children:s,className:u,component:m=(s?"div":"hr"),flexItem:y=!1,light:g=!1,orientation:C="horizontal",role:w=("hr"!==m?"separator":void 0),textAlign:k="center",variant:b="fullWidth"}=n,F=(0,r.Z)(n,v),x=(0,o.Z)({},n,{absolute:i,component:m,flexItem:y,light:g,orientation:C,role:w,textAlign:k,variant:b}),A=(e=>{const{absolute:t,children:n,classes:r,flexItem:o,light:i,orientation:a,textAlign:s,variant:u}=e,l={root:["root",t&&"absolute",u,i&&"light","vertical"===a&&"vertical",o&&"flexItem",n&&"withChildren",n&&"vertical"===a&&"withChildrenVertical","right"===s&&"vertical"!==a&&"textAlignRight","left"===s&&"vertical"!==a&&"textAlignLeft"],wrapper:["wrapper","vertical"===a&&"wrapperVertical"]};return(0,c.Z)(l,f.V,r)})(x);return(0,d.jsx)(h,(0,o.Z)({as:m,className:(0,a.Z)(A.root,u),role:w,ref:t,ownerState:x},F,{children:s?(0,d.jsx)(p,{className:A.wrapper,ownerState:x,children:s}):null}))}));m.muiSkipListHighlight=!0,t.Z=m},68120:function(e,t,n){"use strict";n.d(t,{V:function(){return i}});var r=n(93980),o=n(18548);function i(e){return(0,o.Z)("MuiDivider",e)}const a=(0,r.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=a},41587:function(e,t,n){"use strict";var r=n(78095),o=n.n(r),i=n(74266),a=n.n(i),c=n(63313),s=n(75555),u=n(63806),l=n(44810),f=["open","children","elementId","customParam"],d=function(e,t){var n=e.open,r=e.children,i=e.elementId,c=e.customParam,d=a()(e,f),v=o()({open:n},d);return(0,s.ab)(n,i,c),(0,l.jsx)(u.Z,o()(o()({},v),{},{children:r}))};t.Z=(0,c.forwardRef)(d)},96425:function(e,t,n){"use strict";n.d(t,{kP:function(){return u},o7:function(){return s}});var r=n(60430),o=n.n(r),i=n(52949),a=n.n(i);var c=function(e,t){for(var n=!1,r=n?e:"%c".concat(e),i=arguments.length,a=new Array(i>2?i-2:0),c=2;c<i;c++)a[c-2]=arguments[c];var s,u=n?a:[t].concat(a);console&&console.log&&(s=console).log.apply(s,[r].concat(o()(u)))};function s(e){for(var t="background-color:#49a9ee;color:white;padding:2px 4px;border-radius: 2px;",n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];c.apply(void 0,[e,t].concat(r))}var u=function(e){return[a()(e),a().enabled(e)]}},67783:function(e,t,n){"use strict";n.d(t,{BL:function(){return ee}});var r=n(17384),o=n.n(r),i=n(63313),a=n(52351),c=n.n(a),s=n(12841),u=n.n(s),l=n(88284),f=n.n(l),d=n(34827),v=n.n(d),h="undefined";typeof document!==h&&document;function p(e){return e&&"object"==typeof e}function m(e){return Array.isArray(e)}function y(e){return"string"==typeof e}function g(e,t,n){void 0===n&&(n=-1);for(var r=e.length,o=0;o<r;++o)if(t(e[o],o,e))return o;return n}function C(e,t,n,r){e.addEventListener(t,n,r)}function w(e,t,n,r){e.removeEventListener(t,n,r)}var k=function(){return k=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},k.apply(this,arguments)};var b=function(){function e(){this._events={}}var t=e.prototype;return t.on=function(e,t){if(p(e))for(var n in e)this.on(n,e[n]);else this._addEvent(e,t,{});return this},t.off=function(e,t){if(e)if(p(e))for(var n in e)this.off(n);else if(t){var r=this._events[e];if(r){var o=g(r,(function(e){return e.listener===t}));o>-1&&r.splice(o,1)}}else this._events[e]=[];else this._events={};return this},t.once=function(e,t){var n=this;return t&&this._addEvent(e,t,{once:!0}),new Promise((function(t){n._addEvent(e,t,{once:!0})}))},t.emit=function(e,t){var n=this;void 0===t&&(t={});var r=this._events[e];if(!e||!r)return!0;var o=!1;return t.eventType=e,t.stop=function(){o=!0},t.currentTarget=this,function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,c=i.length;a<c;a++,o++)r[o]=i[a];return r}(r).forEach((function(r){r.listener(t),r.once&&n.off(e,r.listener)})),!o},t.trigger=function(e,t){return void 0===t&&(t={}),this.emit(e,t)},t._addEvent=function(e,t,n){var r=this._events;r[e]=r[e]||[],r[e].push(k({listener:t},n))},e}(),F=b,x=function(e,t){return x=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},x(e,t)};var A,E,K,I=(A=function(e,t){function n(e){if(e&&"object"==typeof e){var t=e.which||e.keyCode||e.charCode;t&&(e=t)}if("number"==typeof e)return a[e];var n,i=String(e);return(n=r[i.toLowerCase()])?n:(n=o[i.toLowerCase()])||(1===i.length?i.charCodeAt(0):void 0)}n.isEventKey=function(e,t){if(e&&"object"==typeof e){var n=e.which||e.keyCode||e.charCode;if(null==n)return!1;if("string"==typeof t){var i;if(i=r[t.toLowerCase()])return i===n;if(i=o[t.toLowerCase()])return i===n}else if("number"==typeof t)return t===n;return!1}};var r=(t=e.exports=n).code=t.codes={backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,"pause/break":19,"caps lock":20,esc:27,space:32,"page up":33,"page down":34,end:35,home:36,left:37,up:38,right:39,down:40,insert:45,delete:46,command:91,"left command":91,"right command":93,"numpad *":106,"numpad +":107,"numpad -":109,"numpad .":110,"numpad /":111,"num lock":144,"scroll lock":145,"my computer":182,"my calculator":183,";":186,"=":187,",":188,"-":189,".":190,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222},o=t.aliases={windows:91,"⇧":16,"⌥":18,"⌃":17,"⌘":91,ctl:17,control:17,option:18,pause:19,break:19,caps:20,return:13,escape:27,spc:32,spacebar:32,pgup:33,pgdn:34,ins:45,del:46,cmd:91};for(i=97;i<123;i++)r[String.fromCharCode(i)]=i-32;for(var i=48;i<58;i++)r[i-48]=i;for(i=1;i<13;i++)r["f"+i]=i+111;for(i=0;i<10;i++)r["numpad "+i]=i+96;var a=t.names=t.title={};for(i in r)a[r[i]]=i;for(var c in o)r[c]=o[c]},A(E={exports:{}},E.exports),E.exports),L=(I.code,I.codes,I.aliases,I.names),S=(I.title,{"+":"plus","left command":"meta","right command":"meta"}),Z={shift:1,ctrl:2,alt:3,meta:4};function _(e,t){var n=(L[e]||t||"").toLowerCase();for(var r in S)n=n.replace(r,S[r]);return n.replace(/\s/g,"")}function O(e,t){void 0===t&&(t=_(e.keyCode,e.key));var n=function(e){var t=[e.shiftKey&&"shift",e.ctrlKey&&"ctrl",e.altKey&&"alt",e.metaKey&&"meta"];return t.filter(Boolean)}(e);return-1===n.indexOf(t)&&n.push(t),n.filter(Boolean)}function R(e){var t=e.slice();return t.sort((function(e,t){return(Z[e]||5)-(Z[t]||5)})),t}var j=function(e){function t(t){void 0===t&&(t=window);var n=e.call(this)||this;return n.container=t,n.ctrlKey=!1,n.altKey=!1,n.shiftKey=!1,n.metaKey=!1,n.clear=function(){return n.ctrlKey=!1,n.altKey=!1,n.shiftKey=!1,n.metaKey=!1,n},n.keydownEvent=function(e){n.triggerEvent("keydown",e)},n.keyupEvent=function(e){n.triggerEvent("keyup",e)},n.blur=function(){n.clear(),n.trigger("blur")},C(t,"blur",n.blur),C(t,"keydown",n.keydownEvent),C(t,"keyup",n.keyupEvent),n}!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}x(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e);var n=t.prototype;return Object.defineProperty(t,"global",{get:function(){return K||(K=new t)},enumerable:!1,configurable:!0}),t.setGlobal=function(){return this.global},n.destroy=function(){var e=this.container;this.clear(),this.off(),w(e,"blur",this.blur),w(e,"keydown",this.keydownEvent),w(e,"keyup",this.keyupEvent)},n.keydown=function(e,t){return this.addEvent("keydown",e,t)},n.offKeydown=function(e,t){return this.removeEvent("keydown",e,t)},n.offKeyup=function(e,t){return this.removeEvent("keyup",e,t)},n.keyup=function(e,t){return this.addEvent("keyup",e,t)},n.addEvent=function(e,t,n){return m(t)?this.on("".concat(e,".").concat(R(t).join(".")),n):y(t)?this.on("".concat(e,".").concat(t),n):this.on(e,t),this},n.removeEvent=function(e,t,n){return m(t)?this.off("".concat(e,".").concat(R(t).join(".")),n):y(t)?this.off("".concat(e,".").concat(t),n):this.off(e,t),this},n.triggerEvent=function(e,t){this.ctrlKey=t.ctrlKey,this.shiftKey=t.shiftKey,this.altKey=t.altKey,this.metaKey=t.metaKey;var n=_(t.keyCode,t.key),r={key:n,isToggle:"ctrl"===n||"shift"===n||"meta"===n||"alt"===n,inputEvent:t,keyCode:t.keyCode,ctrlKey:t.ctrlKey,altKey:t.altKey,shiftKey:t.shiftKey,metaKey:t.metaKey};this.trigger(e,r),this.trigger("".concat(e,".").concat(n),r);var o=O(t,n);o.length>1&&this.trigger("".concat(e,".").concat(o.join(".")),r)},t}(F);var P=j,M=n(49520),N=n(96425),V=new P,z=(0,N.kP)("vh:infra:keymaster"),$=v()(z,2),T=$[0],W=$[1],B=(0,N.kP)("vh:infra:keymaster:debug"),D=v()(B,2),U=D[0],J=D[1],G=(0,N.kP)("vh:infra:keymaster:verbose"),q=v()(G,2),H=q[0],X=q[1],Y=function(){function e(){c()(this,e),f()(this,"zones",void 0),f()(this,"keyfns",void 0),f()(this,"activeZone",void 0),f()(this,"globalImmunity",void 0),this.zones={},this.keyfns={},this.globalImmunity={classImmunities:{}},this.activeZone={id:"",key:"",dom:null}}return u()(e,[{key:"setActive",value:function(e){if(null!==e){var t=this.zones[e];t?this.activeZone={id:"",key:e,dom:t[0].dom}:W&&T("ERROR: Zone ".concat(e," not found!"))}else this.activeZone={id:"",key:"",dom:null}}},{key:"onKey",value:function(e,t,n){}},{key:"setup",value:function(e,t){var n=this;if(W&&T("setup ".concat(e),t),t){var r=function(t){J&&U("on [".concat(e,"]::click > "),t,e),n.setActive(e)};this.zones[e]=[{name:"click",event:r,dom:t}],t.addEventListener("click",r)}}},{key:"unmount",value:function(e,t){var n=this.zones[e];if(W&&T("unmount ".concat(e),n),n){var r,i=o()(n);try{for(i.s();!(r=i.n()).done;){var a=r.value;if(null==a||!a.dom||!a.event)return;a.dom.removeEventListener(a.name,a.event)}}catch(e){i.e(e)}finally{i.f()}}var c=this.keyfns[e];if(c)for(var s in c){if(!c[s])return;var u=c[s],l=u.keys,f=u.keyAction,d=u.fn;"keydown"===f?V.offKeydown(l,d):"keyup"===f&&V.offKeyup(l,d)}}},{key:"keydown",value:function(e,t,n,r){this._keyAction(e,t,n,r,"keydown")}},{key:"keyup",value:function(e,t,n,r){this._keyAction(e,t,n,r,"keyup")}},{key:"_keyAction",value:function(e,t,n,r,i){var a=this,c=Array.isArray(n)?null==n?void 0:n.map((function(e){return"CommandOrControl"===e?(0,M.V5)()?"meta":"ctrl":e})):n,s=this.keyfns[t];s||(s={},this.keyfns[t]=s);var u=e||JSON.stringify(c);s[u]&&(X&&H("UnRegisterKeyAction for ".concat(t,"::").concat(e,"::").concat(c)),"keydown"===i?V.offKeydown(c,s[u].fn):"keyup"===i&&V.offKeyup(c,s[u].fn));var l=function(e){var n,i=t,c=r;if((null===(n=a.activeZone)||void 0===n?void 0:n.key)===i||""===t){var s=document.activeElement;if(s){if("TEXTAREA"===s.tagName||"INPUT"===s.tagName)return;var u,l=o()(s.classList);try{for(l.s();!(u=l.n()).done;){var f=u.value;if((f.startsWith("immute_")||"ql-editor"===f)&&a.globalImmunity.classImmunities[f])return void(X&&H("Key ".concat(1," is ignored because GlobalImmute for ",f)))}}catch(e){l.e(e)}finally{l.f()}}null==c||c(e)}};X&&H("RegisterKeyAction for ".concat(t,"::").concat(e,"::").concat(c)),"keydown"===i?V.keydown(c,l):"keyup"===i&&V.keyup(c,l),s[u]={keys:c,keyAction:i,fn:l}}},{key:"immunizeClass",value:function(e){if(!e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var a=i[o];this.globalImmunity.classImmunities[a]=!0}}}},{key:"unImmunizeClass",value:function(e){if(!e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var a=i[o];delete this.globalImmunity.classImmunities[a]}}}}]),e}(),Q=new Y;var ee=function(e,t,n){var r=(n||{}).init,o=void 0===r||r,a=e||"",c=(0,i.useCallback)((function(){Q.setup(a,(null==t?void 0:t.current)||document)}),[]);(0,i.useLayoutEffect)((function(){var e=(null==t?void 0:t.current)||document;return o&&Q.setup(a,e),function(){Q.unmount(a,e)}}),[]);var s=(0,i.useCallback)((function(e,t,n){Q.keydown(e,a,t,n)}),[a]),u=(0,i.useCallback)((function(e,t,n){Q.keyup(e,a,t,n)}),[a]);return{keymaster:Q,keydown:s,keyup:u,enable:c}}},90948:function(e,t,n){"use strict";var r=n(52370);t.Z=function(){var e=(0,r.VY)().ui;return null==e?void 0:e.message}},49520:function(e,t,n){"use strict";n.d(t,{V5:function(){return r},b5:function(){return o}});var r=function(){return"Mac"==(navigator.userAgent.indexOf("Window")>0?"Windows":navigator.userAgent.indexOf("Mac OS X")>0?"Mac":navigator.userAgent.indexOf("Linux")>0?"Linux":"NULL")},o=function(){return"/"===window.location.pathname?"":encodeURIComponent(window.location.pathname)}},52949:function(e,t,n){var r,o=n(84425);t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;var n="color: "+this.color;t.splice(1,0,n,"color: inherit");var r=0,o=0;t[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(r++,"%c"===e&&(o=r))})),t.splice(o,0,n)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(e){}},t.load=function(){var e;try{e=t.storage.getItem("debug")}catch(e){}!e&&void 0!==o&&"env"in o&&(e={NODE_ENV:"production",PUBLIC_PATH:"//statics.moonshot.cn/kimi-chat/"}.DEBUG);return e},t.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage=function(){try{return localStorage}catch(e){}}(),t.destroy=(r=!1,function(){r||(r=!0)}),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.log=console.debug||console.log||function(){},e.exports=n(3397)(t),e.exports.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}},3397:function(e,t,n){var r=n(60430).default;e.exports=function(e){function t(e){var n,r,i,a=null;function c(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];if(c.enabled){var i=c,a=Number(new Date),s=a-(n||a);i.diff=s,i.prev=n,i.curr=a,n=a,r[0]=t.coerce(r[0]),"string"!=typeof r[0]&&r.unshift("%O");var u=0;r[0]=r[0].replace(/%([a-zA-Z%])/g,(function(e,n){if("%%"===e)return"%";u++;var o=t.formatters[n];if("function"==typeof o){var a=r[u];e=o.call(i,a),r.splice(u,1),u--}return e})),t.formatArgs.call(i,r);var l=i.log||t.log;l.apply(i,r)}}return c.namespace=e,c.useColors=t.useColors(),c.color=t.selectColor(e),c.extend=o,c.destroy=t.destroy,Object.defineProperty(c,"enabled",{enumerable:!0,configurable:!1,get:function(){return null!==a?a:(r!==t.namespaces&&(r=t.namespaces,i=t.enabled(e)),i)},set:function(e){a=e}}),"function"==typeof t.init&&t.init(c),c}function o(e,n){var r=t(this.namespace+(void 0===n?":":n)+e);return r.log=this.log,r}function i(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return t.debug=t,t.default=t,t.coerce=function(e){if(e instanceof Error)return e.stack||e.message;return e},t.disable=function(){var e=[].concat(r(t.names.map(i)),r(t.skips.map(i).map((function(e){return"-"+e})))).join(",");return t.enable(""),e},t.enable=function(e){var n;t.save(e),t.namespaces=e,t.names=[],t.skips=[];var r=("string"==typeof e?e:"").split(/[\s,]+/),o=r.length;for(n=0;n<o;n++)r[n]&&("-"===(e=r[n].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.slice(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){if("*"===e[e.length-1])return!0;var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(38514),t.destroy=function(){},Object.keys(e).forEach((function(n){t[n]=e[n]})),t.names=[],t.skips=[],t.formatters={},t.selectColor=function(e){for(var n=0,r=0;r<e.length;r++)n=(n<<5)-n+e.charCodeAt(r),n|=0;return t.colors[Math.abs(n)%t.colors.length]},t.enable(t.load()),t}},38514:function(e){var t=1e3,n=60*t,r=60*n,o=24*r,i=7*o,a=365.25*o;function c(e,t,n,r){var o=t>=1.5*n;return Math.round(e/n)+" "+r+(o?"s":"")}e.exports=function(e,s){s=s||{};var u=typeof e;if("string"===u&&e.length>0)return function(e){if((e=String(e)).length>100)return;var c=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(!c)return;var s=parseFloat(c[1]);switch((c[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return s*a;case"weeks":case"week":case"w":return s*i;case"days":case"day":case"d":return s*o;case"hours":case"hour":case"hrs":case"hr":case"h":return s*r;case"minutes":case"minute":case"mins":case"min":case"m":return s*n;case"seconds":case"second":case"secs":case"sec":case"s":return s*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}(e);if("number"===u&&isFinite(e))return s.long?function(e){var i=Math.abs(e);if(i>=o)return c(e,i,o,"day");if(i>=r)return c(e,i,r,"hour");if(i>=n)return c(e,i,n,"minute");if(i>=t)return c(e,i,t,"second");return e+" ms"}(e):function(e){var i=Math.abs(e);if(i>=o)return Math.round(e/o)+"d";if(i>=r)return Math.round(e/r)+"h";if(i>=n)return Math.round(e/n)+"m";if(i>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},30145:function(e,t,n){"use strict";n.d(t,{x:function(){return i}});var r=n(64461),o=n(63313);function i(e){var t=(0,o.useState)((function(){return(0,r.vV)("function"==typeof e?e():e,!0)})),n=t[1];return[t[0],(0,o.useCallback)((function(e){n("function"==typeof e?(0,r.Uy)(e):(0,r.vV)(e))}),[])]}}}]);