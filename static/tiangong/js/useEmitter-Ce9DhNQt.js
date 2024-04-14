function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
var e,t,r,n,i,s,o,a,l,c,u,h,d,p,f,m,g,_,v,k,b,y,w,x,C,A,S,E,D,z,I,T,L,F,q,M,O,R,B,N,j,P,H,U,W,V,G,$,Z,K,J=Object.defineProperty,Y=(e,t,r)=>(((e,t,r)=>{t in e?J(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!=typeof t?t+"":t,r),r),X=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)},Q=(e,t,r)=>(X(e,t,"read from private field"),r?r.call(e):t.get(e)),ee=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},te=(e,t,r,n)=>(X(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),re=(e,t,r,n)=>({set _(n){te(e,t,n,r)},get _(){return Q(e,t,n)}}),ne=(e,t,r)=>(X(e,t,"access private method"),r);import{ck as ie,cl as se,cm as oe,aI as ae,cn as le,y as ce,co as ue,cp as he,u as de,B as pe,C as fe,K as me,i as ge,cq as _e,a as ve,g as ke,j as be,D as ye,c as we,_ as xe,E as Ce,S as Ae,P as Se,cr as Ee}from"../index-CR06pHgF.js";import{f as De}from"./_flatRest-Ds6aPXmo.js";import{k as ze,A as Ie,P as Te,B as Le,Q as Fe,F as qe,f as Me,e as Oe,w as Re,I as Be,r as Ne,n as je,s as Pe,d as He,aa as Ue,l as We,T as Ve,S as Ge,p as $e,W as Ze,M as Ke,u as Je,m as Ye,ah as Xe,X as Qe,C as et,ac as tt,ad as rt,J as nt,ab as it,a0 as st,Y as ot,c as at}from"./vue-CmQldkW7.js";import"./el-tooltip-l0sNRNKZ.js";import{u as lt}from"./fetch-I3PI3dyF.js";import{C as ct}from"./clipboard-DPkvDTpg.js";import{c as ut}from"./cloneDeep-a86zWJ9A.js";var ht=ie&&new ie;function dt(){}var pt=4294967295;function ft(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=pt,this.__views__=[]}ft.prototype=se(dt.prototype),ft.prototype.constructor=ft;var mt=ht?function(e){return ht.get(e)}:function(){},gt={},_t=Object.prototype.hasOwnProperty;function vt(e){for(var t=e.name+"",r=gt[t],n=_t.call(gt,t)?r.length:0;n--;){var i=r[n],s=i.func;if(null==s||s==e)return i.name}return t}function kt(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=void 0}kt.prototype=se(dt.prototype),kt.prototype.constructor=kt;var bt=Object.prototype.hasOwnProperty;function yt(e){if(ae(e)&&!le(e)&&!(e instanceof ft)){if(e instanceof kt)return e;if(bt.call(e,"__wrapped__"))return function(e){if(e instanceof ft)return e.clone();var t=new kt(e.__wrapped__,e.__chain__);return t.__actions__=oe(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}(e)}return new kt(e)}function wt(e){var t=vt(e),r=yt[t];if("function"!=typeof r||!(t in ft.prototype))return!1;if(e===r)return!0;var n=mt(r);return!!n&&e===n[0]}yt.prototype=dt.prototype,yt.prototype.constructor=yt;var xt,Ct=De((function(e){var t=e.length,r=t,n=kt.prototype.thru;for(xt&&e.reverse();r--;){var i=e[r];if("function"!=typeof i)throw new TypeError("Expected a function");if(n&&!s&&"wrapper"==vt(i))var s=new kt([],!0)}for(r=s?r:t;++r<t;){var o=vt(i=e[r]),a="wrapper"==o?mt(i):void 0;s=a&&wt(a[0])&&424==a[1]&&!a[4].length&&1==a[9]?s[vt(a[0])].apply(s,a[3]):1==i.length&&wt(i)?s[o]():s.thru(i)}return function(){var r=arguments,n=r[0];if(s&&1==r.length&&le(n))return s.plant(n).value();for(var i=0,o=t?e[i].apply(this,r):n;++i<t;)o=e[i].call(this,o);return o}}));const At="md-editor",St="https://cdnjs.cloudflare.com/ajax/libs",Et="".concat(St,"/highlight.js/11.9.0/highlight.min.js"),Dt={"zh-CN":{toolbarTips:{bold:"加粗",underline:"下划线",italic:"斜体",strikeThrough:"删除线",title:"标题",sub:"下标",sup:"上标",quote:"引用",unorderedList:"无序列表",orderedList:"有序列表",task:"任务列表",codeRow:"行内代码",code:"块级代码",link:"链接",image:"图片",table:"表格",mermaid:"mermaid图",katex:"katex公式",revoke:"后退",next:"前进",save:"保存",prettier:"美化",pageFullscreen:"浏览器全屏",fullscreen:"屏幕全屏",preview:"预览",htmlPreview:"html代码预览",catalog:"目录",github:"源码地址"},titleItem:{h1:"一级标题",h2:"二级标题",h3:"三级标题",h4:"四级标题",h5:"五级标题",h6:"六级标题"},imgTitleItem:{link:"添加链接",upload:"上传图片",clip2upload:"裁剪上传"},linkModalTips:{linkTitle:"添加链接",imageTitle:"添加图片",descLabel:"链接描述：",descLabelPlaceHolder:"请输入描述...",urlLabel:"链接地址：",urlLabelPlaceHolder:"请输入链接...",buttonOK:"确定"},clipModalTips:{title:"裁剪图片上传",buttonUpload:"上传"},copyCode:{text:"复制代码",successTips:"已复制！",failTips:"复制失败！"},mermaid:{flow:"流程图",sequence:"时序图",gantt:"甘特图",class:"类图",state:"状态图",pie:"饼图",relationship:"关系图",journey:"旅程图"},katex:{inline:"行内公式",block:"块级公式"},footer:{markdownTotal:"字数",scrollAuto:"同步滚动"}},"en-US":{toolbarTips:{bold:"bold",underline:"underline",italic:"italic",strikeThrough:"strikeThrough",title:"title",sub:"subscript",sup:"superscript",quote:"quote",unorderedList:"unordered list",orderedList:"ordered list",task:"task list",codeRow:"inline code",code:"block-level code",link:"link",image:"image",table:"table",mermaid:"mermaid",katex:"formula",revoke:"revoke",next:"undo revoke",save:"save",prettier:"prettier",pageFullscreen:"fullscreen in page",fullscreen:"fullscreen",preview:"preview",htmlPreview:"html preview",catalog:"catalog",github:"source code"},titleItem:{h1:"Lv1 Heading",h2:"Lv2 Heading",h3:"Lv3 Heading",h4:"Lv4 Heading",h5:"Lv5 Heading",h6:"Lv6 Heading"},imgTitleItem:{link:"Add Img Link",upload:"Upload Img",clip2upload:"Clip Upload"},linkModalTips:{linkTitle:"Add Link",imageTitle:"Add Image",descLabel:"Desc:",descLabelPlaceHolder:"Enter a description...",urlLabel:"Link:",urlLabelPlaceHolder:"Enter a link...",buttonOK:"OK"},clipModalTips:{title:"Crop Image",buttonUpload:"Upload"},copyCode:{text:"Copy",successTips:"Copied!",failTips:"Copy failed!"},mermaid:{flow:"flow",sequence:"sequence",gantt:"gantt",class:"class",state:"state",pie:"pie",relationship:"relationship",journey:"journey"},katex:{inline:"inline",block:"block"},footer:{markdownTotal:"Word Count",scrollAuto:"Scroll Auto"}}},zt="".concat(St,"/mermaid/10.6.1/mermaid.esm.min.mjs"),It={js:"".concat(St,"/KaTeX/0.16.9/katex.min.js"),css:"".concat(St,"/KaTeX/0.16.9/katex.min.css")},Tt={a11y:{light:"".concat(St,"/highlight.js/11.9.0/styles/a11y-light.min.css"),dark:"".concat(St,"/highlight.js/11.9.0/styles/a11y-dark.min.css")},atom:{light:"".concat(St,"/highlight.js/11.9.0/styles/atom-one-light.min.css"),dark:"".concat(St,"/highlight.js/11.9.0/styles/atom-one-dark.min.css")},github:{light:"".concat(St,"/highlight.js/11.9.0/styles/github.min.css"),dark:"".concat(St,"/highlight.js/11.9.0/styles/github-dark.min.css")},gradient:{light:"".concat(St,"/highlight.js/11.9.0/styles/gradient-light.min.css"),dark:"".concat(St,"/highlight.js/11.9.0/styles/gradient-dark.min.css")},kimbie:{light:"".concat(St,"/highlight.js/11.9.0/styles/kimbie-light.min.css"),dark:"".concat(St,"/highlight.js/11.9.0/styles/kimbie-dark.min.css")},paraiso:{light:"".concat(St,"/highlight.js/11.9.0/styles/paraiso-light.min.css"),dark:"".concat(St,"/highlight.js/11.9.0/styles/paraiso-dark.min.css")},qtcreator:{light:"".concat(St,"/highlight.js/11.9.0/styles/qtcreator-light.min.css"),dark:"".concat(St,"/highlight.js/11.9.0/styles/qtcreator-dark.min.css")},stackoverflow:{light:"".concat(St,"/highlight.js/11.9.0/styles/stackoverflow-light.min.css"),dark:"".concat(St,"/highlight.js/11.9.0/styles/stackoverflow-dark.min.css")}},Lt={editorExtensions:{},editorConfig:{},codeMirrorExtensions:(e,t)=>t,markdownItConfig:()=>{},markdownItPlugins:e=>e,iconfontType:"svg",mermaidConfig:e=>e},Ft=(e,t=200)=>{let r=0;return(...n)=>new Promise((i=>{r&&(clearTimeout(r),i("cancel")),r=window.setTimeout((()=>{e.apply(void 0,n),r=0,i("done")}),t)}))};var qt=Object.defineProperty,Mt=(e,t,r)=>(((e,t,r)=>{t in e?qt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!=typeof t?t+"":t,r),r);const Ot=new class{constructor(){Mt(this,"pools",{})}
// 移除事件监听
remove(e,t,r){const n=this.pools[e]&&this.pools[e][t];n&&(this.pools[e][t]=n.filter((e=>e!==r)))}
// 清空全部事件，由于单一实例，多次注册会被共享内容
clear(e){this.pools[e]={}}
// 注册事件监听
on(e,t){return this.pools[e]||(this.pools[e]={}),this.pools[e][t.name]||(this.pools[e][t.name]=[]),this.pools[e][t.name].push(t.callback),this.pools[e][t.name].includes(t.callback)}
// 触发事件
emit(e,t,...r){this.pools[e]||(this.pools[e]={});const n=this.pools[e][t];n&&n.forEach((e=>{try{e(...r)}catch(t){}}))}},Rt="catalogChanged",Bt=(e,t="")=>{const r=document.getElementById(e.id),n=e.onload;e.onload=null;const i=function(t){"function"==typeof n&&n.bind(this)(t),e.removeEventListener("load",i)};r?""!==t&&(r.addEventListener("load",i),Reflect.get(window,t)&&r.dispatchEvent(new Event("load"))):(e.addEventListener("load",i),document.head.appendChild(e))},Nt=Ft(((e,t,r)=>{const n=document.getElementById(e);n&&n.setAttribute(t,r)}),10),jt=1024;let Pt=0;class Ht{
/**
  Create a new node prop type.
  */
constructor(e={}){this.id=Pt++,this.perNode=!!e.perNode,this.deserialize=e.deserialize||(()=>{throw new Error("This node type doesn't define a deserialize function")})}
/**
  This is meant to be used with
  [`NodeSet.extend`](#common.NodeSet.extend) or
  [`LRParser.configure`](#lr.ParserConfig.props) to compute
  prop values for each node type in the set. Takes a [match
  object](#common.NodeType^match) or function that returns undefined
  if the node type doesn't get this prop, and the prop's value if
  it does.
  */add(e){if(this.perNode)throw new RangeError("Can't add per-node props to node types");return"function"!=typeof e&&(e=Vt.match(e)),t=>{let r=e(t);return void 0===r?null:[this,r]}}}Ht.closedBy=new Ht({deserialize:e=>e.split(" ")}),Ht.openedBy=new Ht({deserialize:e=>e.split(" ")}),Ht.group=new Ht({deserialize:e=>e.split(" ")}),Ht.isolate=new Ht({deserialize:e=>{if(e&&"rtl"!=e&&"ltr"!=e&&"auto"!=e)throw new RangeError("Invalid value for isolate: "+e);return e||"auto"}}),Ht.contextHash=new Ht({perNode:!0}),Ht.lookAhead=new Ht({perNode:!0}),Ht.mounted=new Ht({perNode:!0});class Ut{constructor(e,t,r){this.tree=e,this.overlay=t,this.parser=r}
/**
  @internal
  */static get(e){return e&&e.props&&e.props[Ht.mounted.id]}}const Wt=Object.create(null);class Vt{
/**
  @internal
  */
constructor(e,t,r,n=0){this.name=e,this.props=t,this.id=r,this.flags=n}
/**
  Define a node type.
  */static define(e){let t=e.props&&e.props.length?Object.create(null):Wt,r=(e.top?1:0)|(e.skipped?2:0)|(e.error?4:0)|(null==e.name?8:0),n=new Vt(e.name||"",t,e.id,r);if(e.props)for(let i of e.props)if(Array.isArray(i)||(i=i(n)),i){if(i[0].perNode)throw new RangeError("Can't store a per-node prop on a node type");t[i[0].id]=i[1]}return n}
/**
  Retrieves a node prop for this type. Will return `undefined` if
  the prop isn't present on this node.
  */prop(e){return this.props[e.id]}
/**
  True when this is the top node of a grammar.
  */get isTop(){return(1&this.flags)>0}
/**
  True when this node is produced by a skip rule.
  */get isSkipped(){return(2&this.flags)>0}
/**
  Indicates whether this is an error node.
  */get isError(){return(4&this.flags)>0}
/**
  When true, this node type doesn't correspond to a user-declared
  named node, for example because it is used to cache repetition.
  */get isAnonymous(){return(8&this.flags)>0}
/**
  Returns true when this node's name or one of its
  [groups](#common.NodeProp^group) matches the given string.
  */is(e){if("string"==typeof e){if(this.name==e)return!0;let t=this.prop(Ht.group);return!!t&&t.indexOf(e)>-1}return this.id==e}
/**
  Create a function from node types to arbitrary values by
  specifying an object whose property names are node or
  [group](#common.NodeProp^group) names. Often useful with
  [`NodeProp.add`](#common.NodeProp.add). You can put multiple
  names, separated by spaces, in a single property name to map
  multiple node names to a single value.
  */static match(e){let t=Object.create(null);for(let r in e)for(let n of r.split(" "))t[n]=e[r];return e=>{for(let r=e.prop(Ht.group),n=-1;n<(r?r.length:0);n++){let i=t[n<0?e.name:r[n]];if(i)return i}}}}Vt.none=new Vt("",
Object.create(null),0,8
/* NodeFlag.Anonymous */);const Gt=new WeakMap,$t=new WeakMap;var Zt,Kt;(Kt=Zt||(Zt={}))[Kt.ExcludeBuffers=1]="ExcludeBuffers",Kt[Kt.IncludeAnonymous=2]="IncludeAnonymous",Kt[Kt.IgnoreMounts=4]="IgnoreMounts",Kt[Kt.IgnoreOverlays=8]="IgnoreOverlays";class Jt{
/**
  Construct a new tree. See also [`Tree.build`](#common.Tree^build).
  */
constructor(e,t,r,n,i){if(this.type=e,this.children=t,this.positions=r,this.length=n,this.props=null,i&&i.length){this.props=Object.create(null);for(let[e,t]of i)this.props["number"==typeof e?e:e.id]=t}}
/**
  @internal
  */toString(){let e=Ut.get(this);if(e&&!e.overlay)return e.tree.toString();let t="";for(let r of this.children){let e=r.toString();e&&(t&&(t+=","),t+=e)}return this.type.name?(/\W/.test(this.type.name)&&!this.type.isError?JSON.stringify(this.type.name):this.type.name)+(t.length?"("+t+")":""):t}
/**
  Get a [tree cursor](#common.TreeCursor) positioned at the top of
  the tree. Mode can be used to [control](#common.IterMode) which
  nodes the cursor visits.
  */cursor(e=0){return new cr(this.topNode,e)}
/**
  Get a [tree cursor](#common.TreeCursor) pointing into this tree
  at the given position and side (see
  [`moveTo`](#common.TreeCursor.moveTo).
  */cursorAt(e,t=0,r=0){let n=Gt.get(this)||this.topNode,i=new cr(n);return i.moveTo(e,t),Gt.set(this,i._tree),i}
/**
  Get a [syntax node](#common.SyntaxNode) object for the top of the
  tree.
  */get topNode(){return new rr(this,0,0,null)}
/**
  Get the [syntax node](#common.SyntaxNode) at the given position.
  If `side` is -1, this will move into nodes that end at the
  position. If 1, it'll move into nodes that start at the
  position. With 0, it'll only enter nodes that cover the position
  from both sides.
  
  Note that this will not enter
  [overlays](#common.MountedTree.overlay), and you often want
  [`resolveInner`](#common.Tree.resolveInner) instead.
  */resolve(e,t=0){let r=er(Gt.get(this)||this.topNode,e,t,!1);return Gt.set(this,r),r}
/**
  Like [`resolve`](#common.Tree.resolve), but will enter
  [overlaid](#common.MountedTree.overlay) nodes, producing a syntax node
  pointing into the innermost overlaid tree at the given position
  (with parent links going through all parent structure, including
  the host trees).
  */resolveInner(e,t=0){let r=er($t.get(this)||this.topNode,e,t,!0);return $t.set(this,r),r}
/**
  In some situations, it can be useful to iterate through all
  nodes around a position, including those in overlays that don't
  directly cover the position. This method gives you an iterator
  that will produce all nodes, from small to big, around the given
  position.
  */resolveStack(e,t=0){return function(e,t,r){let n=e.resolveInner(t,r),i=null;for(let s=n instanceof rr?n:n.context.parent;s;s=s.parent)if(s.index<0){let e=s.parent;(i||(i=[n])).push(e.resolve(t,r)),s=e}else{let e=Ut.get(s.tree);if(e&&e.overlay&&e.overlay[0].from<=t&&e.overlay[e.overlay.length-1].to>=t){let o=new rr(e.tree,e.overlay[0].from+s.from,-1,s);(i||(i=[n])).push(er(o,t,r,!1))}}return i?ar(i):n}(this,e,t)}
/**
  Iterate over the tree and its children, calling `enter` for any
  node that touches the `from`/`to` region (if given) before
  running over such a node's children, and `leave` (if given) when
  leaving the node. When `enter` returns `false`, that node will
  not have its children iterated over (or `leave` called).
  */iterate(e){let{enter:t,leave:r,from:n=0,to:i=this.length}=e,s=e.mode||0,o=(s&Zt.IncludeAnonymous)>0;for(let a=this.cursor(s|Zt.IncludeAnonymous);;){let e=!1;if(a.from<=i&&a.to>=n&&(!o&&a.type.isAnonymous||!1!==t(a))){if(a.firstChild())continue;e=!0}for(;e&&r&&(o||!a.type.isAnonymous)&&r(a),!a.nextSibling();){if(!a.parent())return;e=!0}}}
/**
  Get the value of the given [node prop](#common.NodeProp) for this
  node. Works with both per-node and per-type props.
  */prop(e){return e.perNode?this.props?this.props[e.id]:void 0:this.type.prop(e)}
/**
  Returns the node's [per-node props](#common.NodeProp.perNode) in a
  format that can be passed to the [`Tree`](#common.Tree)
  constructor.
  */get propValues(){let e=[];if(this.props)for(let t in this.props)e.push([+t,this.props[t]]);return e}
/**
  Balance the direct children of this tree, producing a copy of
  which may have children grouped into subtrees with type
  [`NodeType.none`](#common.NodeType^none).
  */balance(e={}){return this.children.length<=8?this:pr(Vt.none,this.children,this.positions,0,this.children.length,0,this.length,((e,t,r)=>new Jt(this.type,e,t,r,this.propValues)),e.makeTree||((e,t,r)=>new Jt(Vt.none,e,t,r)))}
/**
  Build a tree from a postfix-ordered buffer of node information,
  or a cursor over such a buffer.
  */static build(e){return function(e){var t;let{buffer:r,nodeSet:n,maxBufferLength:i=jt,reused:s=[],minRepeatType:o=n.types.length}=e,a=Array.isArray(r)?new Yt(r,r.length):r,l=n.types,c=0,u=0;function h(e,t,r,v,k,b){let{id:y,start:w,end:x,size:C}=a,A=u;for(;C<0;){if(a.next(),-1==C){let t=s[y];return r.push(t),void v.push(w-e)}if(-3==C)return void(c=y);if(-4==C)return void(u=y);throw new RangeError("Unrecognized record size: ".concat(C))}let S,E,D=l[y],z=w-e;if(x-w<=i&&(E=g(a.pos-t,k))){let t=new Uint16Array(E.size-E.skip),r=a.pos-E.size,i=t.length;for(;a.pos>r;)i=_(E.start,t,i);S=new Xt(t,x-E.start,n),z=E.start-e}else{let e=a.pos-C;a.next();let t=[],r=[],n=y>=o?y:-1,s=0,l=x;for(;a.pos>e;)n>=0&&a.id==n&&a.size>=0?(a.end<=l-i&&(f(t,r,w,s,a.end,l,n,A),s=t.length,l=a.end),a.next()):b>2500?d(w,e,t,r):h(w,e,t,r,n,b+1);if(n>=0&&s>0&&s<t.length&&f(t,r,w,s,w,l,n,A),t.reverse(),r.reverse(),n>-1&&s>0){let e=p(D);S=pr(D,t,r,0,t.length,0,x-w,e,e)}else S=m(D,t,r,x-w,A-x)}r.push(S),v.push(z)}function d(e,t,r,s){let o=[],l=0,c=-1;for(;a.pos>t;){let{id:e,start:t,end:r,size:n}=a;if(n>4)a.next();else{if(c>-1&&t<c)break;c<0&&(c=r-i),o.push(e,t,r),l++,a.next()}}if(l){let t=new Uint16Array(4*l),i=o[o.length-2];for(let e=o.length-3,r=0;e>=0;e-=3)t[r++]=o[e],t[r++]=o[e+1]-i,t[r++]=o[e+2]-i,t[r++]=r;r.push(new Xt(t,o[2]-i,n)),s.push(i-e)}}function p(e){return(t,r,n)=>{let i,s,o=0,a=t.length-1;if(a>=0&&(i=t[a])instanceof Jt){if(!a&&i.type==e&&i.length==n)return i;(s=i.prop(Ht.lookAhead))&&(o=r[a]+i.length+s)}return m(e,t,r,n,o)}}function f(e,t,r,i,s,o,a,l){let c=[],u=[];for(;e.length>i;)c.push(e.pop()),u.push(t.pop()+r-s);e.push(m(n.types[a],c,u,o-s,l-o)),t.push(s-r)}function m(e,t,r,n,i=0,s){if(c){let e=[Ht.contextHash,c];s=s?[e].concat(s):[e]}if(i>25){let e=[Ht.lookAhead,i];s=s?[e].concat(s):[e]}return new Jt(e,t,r,n,s)}function g(e,t){let r=a.fork(),n=0,s=0,l=0,c=r.end-i,u={size:0,start:0,skip:0};e:for(let i=r.pos-e;r.pos>i;){let e=r.size;if(r.id==t&&e>=0){u.size=n,u.start=s,u.skip=l,l+=4,n+=4,r.next();continue}let a=r.pos-e;if(e<0||a<i||r.start<c)break;let h=r.id>=o?4:0,d=r.start;for(r.next();r.pos>a;){if(r.size<0){if(-3!=r.size)break e;h+=4}else r.id>=o&&(h+=4);r.next()}s=d,n+=e,l+=h}return(t<0||n==e)&&(u.size=n,u.start=s,u.skip=l),u.size>4?u:void 0}function _(e,t,r){let{id:n,start:i,end:s,size:l}=a;if(a.next(),l>=0&&n<o){let o=r;if(l>4){let n=a.pos-(l-4);for(;a.pos>n;)r=_(e,t,r)}t[--r]=o,t[--r]=s-e,t[--r]=i-e,t[--r]=n}else-3==l?c=n:-4==l&&(u=n);return r}let v=[],k=[];for(;a.pos>0;)h(e.start||0,e.bufferStart||0,v,k,-1,0);let b=null!==(t=e.length)&&void 0!==t?t:v.length?k[0]+v[0].length:0;return new Jt(l[e.topID],v.reverse(),k.reverse(),b)}(e)}}Jt.empty=new Jt(Vt.none,[],[],0);class Yt{constructor(e,t){this.buffer=e,this.index=t}get id(){return this.buffer[this.index-4]}get start(){return this.buffer[this.index-3]}get end(){return this.buffer[this.index-2]}get size(){return this.buffer[this.index-1]}get pos(){return this.index}next(){this.index-=4}fork(){return new Yt(this.buffer,this.index)}}class Xt{
/**
  Create a tree buffer.
  */
constructor(e,t,r){this.buffer=e,this.length=t,this.set=r}
/**
  @internal
  */get type(){return Vt.none}
/**
  @internal
  */toString(){let e=[];for(let t=0;t<this.buffer.length;)e.push(this.childString(t)),t=this.buffer[t+3];return e.join(",")}
/**
  @internal
  */childString(e){let t=this.buffer[e],r=this.buffer[e+3],n=this.set.types[t],i=n.name;if(/\W/.test(i)&&!n.isError&&(i=JSON.stringify(i)),r==(e+=4))return i;let s=[];for(;e<r;)s.push(this.childString(e)),e=this.buffer[e+3];return i+"("+s.join(",")+")"}
/**
  @internal
  */findChild(e,t,r,n,i){let{buffer:s}=this,o=-1;for(let a=e;a!=t&&!(Qt(i,n,s[a+1],s[a+2])&&(o=a,r>0));a=s[a+3]);return o}
/**
  @internal
  */slice(e,t,r){let n=this.buffer,i=new Uint16Array(t-e),s=0;for(let o=e,a=0;o<t;){i[a++]=n[o++],i[a++]=n[o++]-r;let t=i[a++]=n[o++]-r;i[a++]=n[o++]-e,s=Math.max(s,t)}return new Xt(i,s,this.set)}}function Qt(e,t,r,n){switch(e){case-2:return r<t;case-1:return n>=t&&r<t;case 0:return r<t&&n>t;case 1:return r<=t&&n>t;case 2:return n>t;case 4:return!0}}function er(e,t,r,n){for(var i;e.from==e.to||(r<1?e.from>=t:e.from>t)||(r>-1?e.to<=t:e.to<t);){let t=!n&&e instanceof rr&&e.index<0?null:e.parent;if(!t)return e;e=t}let s=n?0:Zt.IgnoreOverlays;if(n)for(let o=e,a=o.parent;a;o=a,a=o.parent)o instanceof rr&&o.index<0&&(null===(i=a.enter(t,r,s))||void 0===i?void 0:i.from)!=o.from&&(e=a);for(;;){let n=e.enter(t,r,s);if(!n)return e;e=n}}class tr{cursor(e=0){return new cr(this,e)}getChild(e,t=null,r=null){let n=nr(this,e,t,r);return n.length?n[0]:null}getChildren(e,t=null,r=null){return nr(this,e,t,r)}resolve(e,t=0){return er(this,e,t,!1)}resolveInner(e,t=0){return er(this,e,t,!0)}matchContext(e){return ir(this,e)}enterUnfinishedNodesBefore(e){let t=this.childBefore(e),r=this;for(;t;){let e=t.lastChild;if(!e||e.to!=t.to)break;e.type.isError&&e.from==e.to?(r=t,t=e.prevSibling):t=e}return r}get node(){return this}get next(){return this.parent}}class rr extends tr{constructor(e,t,r,n){super(),this._tree=e,this.from=t,this.index=r,this._parent=n}get type(){return this._tree.type}get name(){return this._tree.type.name}get to(){return this.from+this._tree.length}nextChild(e,t,r,n,i=0){for(let s=this;;){for(let{children:o,positions:a}=s._tree,l=t>0?o.length:-1;e!=l;e+=t){let l=o[e],c=a[e]+s.from;if(Qt(n,r,c,c+l.length))if(l instanceof Xt){if(i&Zt.ExcludeBuffers)continue;let o=l.findChild(0,l.buffer.length,t,r-c,n);if(o>-1)return new or(new sr(s,l,e,c),null,o)}else if(i&Zt.IncludeAnonymous||!l.type.isAnonymous||ur(l)){let o;if(!(i&Zt.IgnoreMounts)&&(o=Ut.get(l))&&!o.overlay)return new rr(o.tree,c,e,s);let a=new rr(l,c,e,s);return i&Zt.IncludeAnonymous||!a.type.isAnonymous?a:a.nextChild(t<0?l.children.length-1:0,t,r,n)}}if(i&Zt.IncludeAnonymous||!s.type.isAnonymous)return null;if(e=s.index>=0?s.index+t:t<0?-1:s._parent._tree.children.length,s=s._parent,!s)return null}}get firstChild(){return this.nextChild(0,1,0,4
/* Side.DontCare */)}get lastChild(){return this.nextChild(this._tree.children.length-1,-1,0,4
/* Side.DontCare */)}childAfter(e){return this.nextChild(0,1,e,2
/* Side.After */)}childBefore(e){return this.nextChild(this._tree.children.length-1,-1,e,-2
/* Side.Before */)}enter(e,t,r=0){let n;if(!(r&Zt.IgnoreOverlays)&&(n=Ut.get(this._tree))&&n.overlay){let r=e-this.from;for(let{from:e,to:i}of n.overlay)if((t>0?e<=r:e<r)&&(t<0?i>=r:i>r))return new rr(n.tree,n.overlay[0].from+this.from,-1,this)}return this.nextChild(0,1,e,t,r)}nextSignificantParent(){let e=this;for(;e.type.isAnonymous&&e._parent;)e=e._parent;return e}get parent(){return this._parent?this._parent.nextSignificantParent():null}get nextSibling(){return this._parent&&this.index>=0?this._parent.nextChild(this.index+1,1,0,4
/* Side.DontCare */):null}get prevSibling(){return this._parent&&this.index>=0?this._parent.nextChild(this.index-1,-1,0,4
/* Side.DontCare */):null}get tree(){return this._tree}toTree(){return this._tree}
/**
  @internal
  */toString(){return this._tree.toString()}}function nr(e,t,r,n){let i=e.cursor(),s=[];if(!i.firstChild())return s;if(null!=r)for(let o=!1;!o;)if(o=i.type.is(r),!i.nextSibling())return s;for(;;){if(null!=n&&i.type.is(n))return s;if(i.type.is(t)&&s.push(i.node),!i.nextSibling())return null==n?s:[]}}function ir(e,t,r=t.length-1){for(let n=e.parent;r>=0;n=n.parent){if(!n)return!1;if(!n.type.isAnonymous){if(t[r]&&t[r]!=n.name)return!1;r--}}return!0}class sr{constructor(e,t,r,n){this.parent=e,this.buffer=t,this.index=r,this.start=n}}class or extends tr{get name(){return this.type.name}get from(){return this.context.start+this.context.buffer.buffer[this.index+1]}get to(){return this.context.start+this.context.buffer.buffer[this.index+2]}constructor(e,t,r){super(),this.context=e,this._parent=t,this.index=r,this.type=e.buffer.set.types[e.buffer.buffer[r]]}child(e,t,r){let{buffer:n}=this.context,i=n.findChild(this.index+4,n.buffer[this.index+3],e,t-this.context.start,r);return i<0?null:new or(this.context,this,i)}get firstChild(){return this.child(1,0,4
/* Side.DontCare */)}get lastChild(){return this.child(-1,0,4
/* Side.DontCare */)}childAfter(e){return this.child(1,e,2
/* Side.After */)}childBefore(e){return this.child(-1,e,-2
/* Side.Before */)}enter(e,t,r=0){if(r&Zt.ExcludeBuffers)return null;let{buffer:n}=this.context,i=n.findChild(this.index+4,n.buffer[this.index+3],t>0?1:-1,e-this.context.start,t);return i<0?null:new or(this.context,this,i)}get parent(){return this._parent||this.context.parent.nextSignificantParent()}externalSibling(e){return this._parent?null:this.context.parent.nextChild(this.context.index+e,e,0,4
/* Side.DontCare */)}get nextSibling(){let{buffer:e}=this.context,t=e.buffer[this.index+3];return t<(this._parent?e.buffer[this._parent.index+3]:e.buffer.length)?new or(this.context,this._parent,t):this.externalSibling(1)}get prevSibling(){let{buffer:e}=this.context,t=this._parent?this._parent.index+4:0;return this.index==t?this.externalSibling(-1):new or(this.context,this._parent,e.findChild(t,this.index,-1,0,4
/* Side.DontCare */))}get tree(){return null}toTree(){let e=[],t=[],{buffer:r}=this.context,n=this.index+4,i=r.buffer[this.index+3];if(i>n){let s=r.buffer[this.index+1];e.push(r.slice(n,i,s)),t.push(0)}return new Jt(this.type,e,t,this.to-this.from)}
/**
  @internal
  */toString(){return this.context.buffer.childString(this.index)}}function ar(e){if(!e.length)return null;let t=0,r=e[0];for(let s=1;s<e.length;s++){let n=e[s];(n.from>r.from||n.to<r.to)&&(r=n,t=s)}let n=r instanceof rr&&r.index<0?null:r.parent,i=e.slice();return n?i[t]=n:i.splice(t,1),new lr(i,r)}class lr{constructor(e,t){this.heads=e,this.node=t}get next(){return ar(this.heads)}}class cr{
/**
  Shorthand for `.type.name`.
  */
get name(){return this.type.name}
/**
  @internal
  */constructor(e,t=0){if(this.mode=t,this.buffer=null,this.stack=[],this.index=0,this.bufferNode=null,e instanceof rr)this.yieldNode(e);else{this._tree=e.context.parent,this.buffer=e.context;for(let t=e._parent;t;t=t._parent)this.stack.unshift(t.index);this.bufferNode=e,this.yieldBuf(e.index)}}yieldNode(e){return!!e&&(this._tree=e,this.type=e.type,this.from=e.from,this.to=e.to,!0)}yieldBuf(e,t){this.index=e;let{start:r,buffer:n}=this.buffer;return this.type=t||n.set.types[n.buffer[e]],this.from=r+n.buffer[e+1],this.to=r+n.buffer[e+2],!0}
/**
  @internal
  */yield(e){return!!e&&(e instanceof rr?(this.buffer=null,this.yieldNode(e)):(this.buffer=e.context,this.yieldBuf(e.index,e.type)))}
/**
  @internal
  */toString(){return this.buffer?this.buffer.buffer.childString(this.index):this._tree.toString()}
/**
  @internal
  */enterChild(e,t,r){if(!this.buffer)return this.yield(this._tree.nextChild(e<0?this._tree._tree.children.length-1:0,e,t,r,this.mode));let{buffer:n}=this.buffer,i=n.findChild(this.index+4,n.buffer[this.index+3],e,t-this.buffer.start,r);return!(i<0)&&(this.stack.push(this.index),this.yieldBuf(i))}
/**
  Move the cursor to this node's first child. When this returns
  false, the node has no child, and the cursor has not been moved.
  */firstChild(){return this.enterChild(1,0,4
/* Side.DontCare */)}
/**
  Move the cursor to this node's last child.
  */lastChild(){return this.enterChild(-1,0,4
/* Side.DontCare */)}
/**
  Move the cursor to the first child that ends after `pos`.
  */childAfter(e){return this.enterChild(1,e,2
/* Side.After */)}
/**
  Move to the last child that starts before `pos`.
  */childBefore(e){return this.enterChild(-1,e,-2
/* Side.Before */)}
/**
  Move the cursor to the child around `pos`. If side is -1 the
  child may end at that position, when 1 it may start there. This
  will also enter [overlaid](#common.MountedTree.overlay)
  [mounted](#common.NodeProp^mounted) trees unless `overlays` is
  set to false.
  */enter(e,t,r=this.mode){return this.buffer?!(r&Zt.ExcludeBuffers)&&this.enterChild(1,e,t):this.yield(this._tree.enter(e,t,r))}
/**
  Move to the node's parent node, if this isn't the top node.
  */parent(){if(!this.buffer)return this.yieldNode(this.mode&Zt.IncludeAnonymous?this._tree._parent:this._tree.parent);if(this.stack.length)return this.yieldBuf(this.stack.pop());let e=this.mode&Zt.IncludeAnonymous?this.buffer.parent:this.buffer.parent.nextSignificantParent();return this.buffer=null,this.yieldNode(e)}
/**
  @internal
  */sibling(e){if(!this.buffer)return!!this._tree._parent&&this.yield(this._tree.index<0?null:this._tree._parent.nextChild(this._tree.index+e,e,0,4,this.mode));let{buffer:t}=this.buffer,r=this.stack.length-1;if(e<0){let e=r<0?0:this.stack[r]+4;if(this.index!=e)return this.yieldBuf(t.findChild(e,this.index,-1,0,4
/* Side.DontCare */))}else{let e=t.buffer[this.index+3];if(e<(r<0?t.buffer.length:t.buffer[this.stack[r]+3]))return this.yieldBuf(e)}return r<0&&this.yield(this.buffer.parent.nextChild(this.buffer.index+e,e,0,4,this.mode))}
/**
  Move to this node's next sibling, if any.
  */nextSibling(){return this.sibling(1)}
/**
  Move to this node's previous sibling, if any.
  */prevSibling(){return this.sibling(-1)}atLastNode(e){let t,r,{buffer:n}=this;if(n){if(e>0){if(this.index<n.buffer.buffer.length)return!1}else for(let e=0;e<this.index;e++)if(n.buffer.buffer[e+3]<this.index)return!1;({index:t,parent:r}=n)}else({index:t,_parent:r}=this._tree);for(;r;({index:t,_parent:r}=r))if(t>-1)for(let n=t+e,i=e<0?-1:r._tree.children.length;n!=i;n+=e){let e=r._tree.children[n];if(this.mode&Zt.IncludeAnonymous||e instanceof Xt||!e.type.isAnonymous||ur(e))return!1}return!0}move(e,t){if(t&&this.enterChild(e,0,4
/* Side.DontCare */))return!0;for(;;){if(this.sibling(e))return!0;if(this.atLastNode(e)||!this.parent())return!1}}
/**
  Move to the next node in a
  [pre-order](https://en.wikipedia.org/wiki/Tree_traversal#Pre-order,_NLR)
  traversal, going from a node to its first child or, if the
  current node is empty or `enter` is false, its next sibling or
  the next sibling of the first parent node that has one.
  */next(e=!0){return this.move(1,e)}
/**
  Move to the next node in a last-to-first pre-order traveral. A
  node is followed by its last child or, if it has none, its
  previous sibling or the previous sibling of the first parent
  node that has one.
  */prev(e=!0){return this.move(-1,e)}
/**
  Move the cursor to the innermost node that covers `pos`. If
  `side` is -1, it will enter nodes that end at `pos`. If it is 1,
  it will enter nodes that start at `pos`.
  */moveTo(e,t=0){for(;(this.from==this.to||(t<1?this.from>=e:this.from>e)||(t>-1?this.to<=e:this.to<e))&&this.parent(););for(;this.enterChild(1,e,t););return this}
/**
  Get a [syntax node](#common.SyntaxNode) at the cursor's current
  position.
  */get node(){if(!this.buffer)return this._tree;let e=this.bufferNode,t=null,r=0;if(e&&e.context==this.buffer)e:for(let n=this.index,i=this.stack.length;i>=0;){for(let s=e;s;s=s._parent)if(s.index==n){if(n==this.index)return s;t=s,r=i+1;break e}n=this.stack[--i]}for(let n=r;n<this.stack.length;n++)t=new or(this.buffer,t,this.stack[n]);return this.bufferNode=new or(this.buffer,t,this.index)}
/**
  Get the [tree](#common.Tree) that represents the current node, if
  any. Will return null when the node is in a [tree
  buffer](#common.TreeBuffer).
  */get tree(){return this.buffer?null:this._tree._tree}
/**
  Iterate over the current node and all its descendants, calling
  `enter` when entering a node and `leave`, if given, when leaving
  one. When `enter` returns `false`, any children of that node are
  skipped, and `leave` isn't called for it.
  */iterate(e,t){for(let r=0;;){let n=!1;if(this.type.isAnonymous||!1!==e(this)){if(this.firstChild()){r++;continue}this.type.isAnonymous||(n=!0)}for(;n&&t&&t(this),n=this.type.isAnonymous,!this.nextSibling();){if(!r)return;this.parent(),r--,n=!0}}}
/**
  Test whether the current node matches a given context—a sequence
  of direct parent node names. Empty strings in the context array
  are treated as wildcards.
  */matchContext(e){if(!this.buffer)return ir(this.node,e);let{buffer:t}=this.buffer,{types:r}=t.set;for(let n=e.length-1,i=this.stack.length-1;n>=0;i--){if(i<0)return ir(this.node,e,n);let s=r[t.buffer[this.stack[i]]];if(!s.isAnonymous){if(e[n]&&e[n]!=s.name)return!1;n--}}return!0}}function ur(e){return e.children.some((e=>e instanceof Xt||!e.type.isAnonymous||ur(e)))}const hr=new WeakMap;function dr(e,t){if(!e.isAnonymous||t instanceof Xt||t.type!=e)return 1;let r=hr.get(t);if(null==r){r=1;for(let n of t.children){if(n.type!=e||!(n instanceof Jt)){r=1;break}r+=dr(e,n)}hr.set(t,r)}return r}function pr(e,t,r,n,i,s,o,a,l){let c=0;for(let p=n;p<i;p++)c+=dr(e,t[p]);let u=Math.ceil(1.5*c/8
/* Balance.BranchFactor */),h=[],d=[];return function t(r,n,i,o,a){for(let c=i;c<o;){let i=c,p=n[c],f=dr(e,r[c]);for(c++;c<o;c++){let t=dr(e,r[c]);if(f+t>=u)break;f+=t}if(c==i+1){if(f>u){let e=r[i];t(e.children,e.positions,0,e.children.length,n[i]+a);continue}h.push(r[i])}else{let t=n[c-1]+r[c-1].length-p;h.push(pr(e,r,n,i,c,p,t,null,l))}d.push(p+a-s)}}(t,r,n,i,0),(a||l)(h,d,o)}new Ht({perNode:!0});let fr=0;class mr{
/**
  @internal
  */
constructor(e,t,r){this.set=e,this.base=t,this.modified=r,this.id=fr++}
/**
  Define a new tag. If `parent` is given, the tag is treated as a
  sub-tag of that parent, and
  [highlighters](#highlight.tagHighlighter) that don't mention
  this tag will try to fall back to the parent tag (or grandparent
  tag, etc).
  */static define(e){if(null==e?void 0:e.base)throw new Error("Can not derive from a modified tag");let t=new mr([],null,[]);if(t.set.push(t),e)for(let r of e.set)t.set.push(r);return t}
/**
  Define a tag _modifier_, which is a function that, given a tag,
  will return a tag that is a subtag of the original. Applying the
  same modifier to a twice tag will return the same value (`m1(t1)
  == m1(t1)`) and applying multiple modifiers will, regardless or
  order, produce the same tag (`m1(m2(t1)) == m2(m1(t1))`).
  
  When multiple modifiers are applied to a given base tag, each
  smaller set of modifiers is registered as a parent, so that for
  example `m1(m2(m3(t1)))` is a subtype of `m1(m2(t1))`,
  `m1(m3(t1)`, and so on.
  */static defineModifier(){let e=new _r;return t=>t.modified.indexOf(e)>-1?t:_r.get(t.base||t,t.modified.concat(e).sort(((e,t)=>e.id-t.id)))}}let gr=0;class _r{constructor(){this.instances=[],this.id=gr++}static get(e,t){if(!t.length)return e;let r=t[0].instances.find((r=>{return r.base==e&&(n=t,i=r.modified,n.length==i.length&&n.every(((e,t)=>e==i[t])));var n,i}));if(r)return r;let n=[],i=new mr(n,e,t);for(let o of t)o.instances.push(i);let s=function(e){let t=[[]];for(let r=0;r<e.length;r++)for(let n=0,i=t.length;n<i;n++)t.push(t[n].concat(e[r]));return t.sort(((e,t)=>t.length-e.length))}(t);for(let o of e.set)if(!o.modified.length)for(let e of s)n.push(_r.get(o,e));return i}}new Ht;const vr=mr.define,kr=vr(),br=vr(),yr=vr(br),wr=vr(br),xr=vr(),Cr=vr(xr),Ar=vr(xr),Sr=vr(),Er=vr(Sr),Dr=vr(),zr=vr(),Ir=vr(),Tr=vr(Ir),Lr=vr(),Fr={
/**
  A comment.
  */
comment:kr,
/**
  A line [comment](#highlight.tags.comment).
  */
lineComment:vr(kr),
/**
  A block [comment](#highlight.tags.comment).
  */
blockComment:vr(kr),
/**
  A documentation [comment](#highlight.tags.comment).
  */
docComment:vr(kr),
/**
  Any kind of identifier.
  */
name:br,
/**
  The [name](#highlight.tags.name) of a variable.
  */
variableName:vr(br),
/**
  A type [name](#highlight.tags.name).
  */
typeName:yr,
/**
  A tag name (subtag of [`typeName`](#highlight.tags.typeName)).
  */
tagName:vr(yr),
/**
  A property or field [name](#highlight.tags.name).
  */
propertyName:wr,
/**
  An attribute name (subtag of [`propertyName`](#highlight.tags.propertyName)).
  */
attributeName:vr(wr),
/**
  The [name](#highlight.tags.name) of a class.
  */
className:vr(br),
/**
  A label [name](#highlight.tags.name).
  */
labelName:vr(br),
/**
  A namespace [name](#highlight.tags.name).
  */
namespace:vr(br),
/**
  The [name](#highlight.tags.name) of a macro.
  */
macroName:vr(br),
/**
  A literal value.
  */
literal:xr,
/**
  A string [literal](#highlight.tags.literal).
  */
string:Cr,
/**
  A documentation [string](#highlight.tags.string).
  */
docString:vr(Cr),
/**
  A character literal (subtag of [string](#highlight.tags.string)).
  */
character:vr(Cr),
/**
  An attribute value (subtag of [string](#highlight.tags.string)).
  */
attributeValue:vr(Cr),
/**
  A number [literal](#highlight.tags.literal).
  */
number:Ar,
/**
  An integer [number](#highlight.tags.number) literal.
  */
integer:vr(Ar),
/**
  A floating-point [number](#highlight.tags.number) literal.
  */
float:vr(Ar),
/**
  A boolean [literal](#highlight.tags.literal).
  */
bool:vr(xr),
/**
  Regular expression [literal](#highlight.tags.literal).
  */
regexp:vr(xr),
/**
  An escape [literal](#highlight.tags.literal), for example a
  backslash escape in a string.
  */
escape:vr(xr),
/**
  A color [literal](#highlight.tags.literal).
  */
color:vr(xr),
/**
  A URL [literal](#highlight.tags.literal).
  */
url:vr(xr),
/**
  A language keyword.
  */
keyword:Dr,
/**
  The [keyword](#highlight.tags.keyword) for the self or this
  object.
  */
self:vr(Dr),
/**
  The [keyword](#highlight.tags.keyword) for null.
  */
null:vr(Dr),
/**
  A [keyword](#highlight.tags.keyword) denoting some atomic value.
  */
atom:vr(Dr),
/**
  A [keyword](#highlight.tags.keyword) that represents a unit.
  */
unit:vr(Dr),
/**
  A modifier [keyword](#highlight.tags.keyword).
  */
modifier:vr(Dr),
/**
  A [keyword](#highlight.tags.keyword) that acts as an operator.
  */
operatorKeyword:vr(Dr),
/**
  A control-flow related [keyword](#highlight.tags.keyword).
  */
controlKeyword:vr(Dr),
/**
  A [keyword](#highlight.tags.keyword) that defines something.
  */
definitionKeyword:vr(Dr),
/**
  A [keyword](#highlight.tags.keyword) related to defining or
  interfacing with modules.
  */
moduleKeyword:vr(Dr),
/**
  An operator.
  */
operator:zr,
/**
  An [operator](#highlight.tags.operator) that dereferences something.
  */
derefOperator:vr(zr),
/**
  Arithmetic-related [operator](#highlight.tags.operator).
  */
arithmeticOperator:vr(zr),
/**
  Logical [operator](#highlight.tags.operator).
  */
logicOperator:vr(zr),
/**
  Bit [operator](#highlight.tags.operator).
  */
bitwiseOperator:vr(zr),
/**
  Comparison [operator](#highlight.tags.operator).
  */
compareOperator:vr(zr),
/**
  [Operator](#highlight.tags.operator) that updates its operand.
  */
updateOperator:vr(zr),
/**
  [Operator](#highlight.tags.operator) that defines something.
  */
definitionOperator:vr(zr),
/**
  Type-related [operator](#highlight.tags.operator).
  */
typeOperator:vr(zr),
/**
  Control-flow [operator](#highlight.tags.operator).
  */
controlOperator:vr(zr),
/**
  Program or markup punctuation.
  */
punctuation:Ir,
/**
  [Punctuation](#highlight.tags.punctuation) that separates
  things.
  */
separator:vr(Ir),
/**
  Bracket-style [punctuation](#highlight.tags.punctuation).
  */
bracket:Tr,
/**
  Angle [brackets](#highlight.tags.bracket) (usually `<` and `>`
  tokens).
  */
angleBracket:vr(Tr),
/**
  Square [brackets](#highlight.tags.bracket) (usually `[` and `]`
  tokens).
  */
squareBracket:vr(Tr),
/**
  Parentheses (usually `(` and `)` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
paren:vr(Tr),
/**
  Braces (usually `{` and `}` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
brace:vr(Tr),
/**
  Content, for example plain text in XML or markup documents.
  */
content:Sr,
/**
  [Content](#highlight.tags.content) that represents a heading.
  */
heading:Er,
/**
  A level 1 [heading](#highlight.tags.heading).
  */
heading1:vr(Er),
/**
  A level 2 [heading](#highlight.tags.heading).
  */
heading2:vr(Er),
/**
  A level 3 [heading](#highlight.tags.heading).
  */
heading3:vr(Er),
/**
  A level 4 [heading](#highlight.tags.heading).
  */
heading4:vr(Er),
/**
  A level 5 [heading](#highlight.tags.heading).
  */
heading5:vr(Er),
/**
  A level 6 [heading](#highlight.tags.heading).
  */
heading6:vr(Er),
/**
  A prose separator (such as a horizontal rule).
  */
contentSeparator:vr(Sr),
/**
  [Content](#highlight.tags.content) that represents a list.
  */
list:vr(Sr),
/**
  [Content](#highlight.tags.content) that represents a quote.
  */
quote:vr(Sr),
/**
  [Content](#highlight.tags.content) that is emphasized.
  */
emphasis:vr(Sr),
/**
  [Content](#highlight.tags.content) that is styled strong.
  */
strong:vr(Sr),
/**
  [Content](#highlight.tags.content) that is part of a link.
  */
link:vr(Sr),
/**
  [Content](#highlight.tags.content) that is styled as code or
  monospace.
  */
monospace:vr(Sr),
/**
  [Content](#highlight.tags.content) that has a strike-through
  style.
  */
strikethrough:vr(Sr),
/**
  Inserted text in a change-tracking format.
  */
inserted:vr(),
/**
  Deleted text.
  */
deleted:vr(),
/**
  Changed text.
  */
changed:vr(),
/**
  An invalid or unsyntactic element.
  */
invalid:vr(),
/**
  Metadata or meta-instruction.
  */
meta:Lr,
/**
  [Metadata](#highlight.tags.meta) that applies to the entire
  document.
  */
documentMeta:vr(Lr),
/**
  [Metadata](#highlight.tags.meta) that annotates or adds
  attributes to a given syntactic element.
  */
annotation:vr(Lr),
/**
  Processing instruction or preprocessor directive. Subtag of
  [meta](#highlight.tags.meta).
  */
processingInstruction:vr(Lr),
/**
  [Modifier](#highlight.Tag^defineModifier) that indicates that a
  given element is being defined. Expected to be used with the
  various [name](#highlight.tags.name) tags.
  */
definition:mr.defineModifier(),
/**
  [Modifier](#highlight.Tag^defineModifier) that indicates that
  something is constant. Mostly expected to be used with
  [variable names](#highlight.tags.variableName).
  */
constant:mr.defineModifier(),
/**
  [Modifier](#highlight.Tag^defineModifier) used to indicate that
  a [variable](#highlight.tags.variableName) or [property
  name](#highlight.tags.propertyName) is being called or defined
  as a function.
  */
function:mr.defineModifier(),
/**
  [Modifier](#highlight.Tag^defineModifier) that can be applied to
  [names](#highlight.tags.name) to indicate that they belong to
  the language's standard environment.
  */
standard:mr.defineModifier(),
/**
  [Modifier](#highlight.Tag^defineModifier) that indicates a given
  [names](#highlight.tags.name) is local to some scope.
  */
local:mr.defineModifier(),
/**
  A generic variant [modifier](#highlight.Tag^defineModifier) that
  can be used to tag language-specific alternative variants of
  some common tag. It is recommended for themes to define special
  forms of at least the [string](#highlight.tags.string) and
  [variable name](#highlight.tags.variableName) tags, since those
  come up a lot.
  */
special:mr.defineModifier()};!function(e,t){let r=Object.create(null);for(let s of e)if(Array.isArray(s.tag))for(let e of s.tag)r[e.id]=s.class;else r[s.tag.id]=s.class;let{scope:n,all:i=null}=t||{}}([{tag:Fr.link,class:"tok-link"},{tag:Fr.heading,class:"tok-heading"},{tag:Fr.emphasis,class:"tok-emphasis"},{tag:Fr.strong,class:"tok-strong"},{tag:Fr.keyword,class:"tok-keyword"},{tag:Fr.atom,class:"tok-atom"},{tag:Fr.bool,class:"tok-bool"},{tag:Fr.url,class:"tok-url"},{tag:Fr.labelName,class:"tok-labelName"},{tag:Fr.inserted,class:"tok-inserted"},{tag:Fr.deleted,class:"tok-deleted"},{tag:Fr.literal,class:"tok-literal"},{tag:Fr.string,class:"tok-string"},{tag:Fr.number,class:"tok-number"},{tag:[Fr.regexp,Fr.escape,Fr.special(Fr.string)],class:"tok-string2"},{tag:Fr.variableName,class:"tok-variableName"},{tag:Fr.local(Fr.variableName),class:"tok-variableName tok-local"},{tag:Fr.definition(Fr.variableName),class:"tok-variableName tok-definition"},{tag:Fr.special(Fr.variableName),class:"tok-variableName2"},{tag:Fr.definition(Fr.propertyName),class:"tok-propertyName tok-definition"},{tag:Fr.typeName,class:"tok-typeName"},{tag:Fr.namespace,class:"tok-namespace"},{tag:Fr.className,class:"tok-className"},{tag:Fr.macroName,class:"tok-macroName"},{tag:Fr.propertyName,class:"tok-propertyName"},{tag:Fr.operator,class:"tok-operator"},{tag:Fr.comment,class:"tok-comment"},{tag:Fr.meta,class:"tok-meta"},{tag:Fr.invalid,class:"tok-invalid"},{tag:Fr.punctuation,class:"tok-punctuation"}]);
/*! medium-zoom 1.1.0 | MIT License | https://github.com/francoischalifour/medium-zoom */
var qr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Mr=function(e){return"IMG"===e.tagName},Or=function(e){return e&&1===e.nodeType},Rr=function(e){return".svg"===(e.currentSrc||e.src).substr(-4).toLowerCase()},Br=function(e){try{return Array.isArray(e)?e.filter(Mr):function(e){return NodeList.prototype.isPrototypeOf(e)}(e)?[].slice.call(e).filter(Mr):Or(e)?[e].filter(Mr):"string"==typeof e?[].slice.call(document.querySelectorAll(e)).filter(Mr):[]}catch(t){throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom")}},Nr=function(e,t){var r=qr({bubbles:!1,cancelable:!1,detail:void 0},t);if("function"==typeof window.CustomEvent)return new CustomEvent(e,r);var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,r.bubbles,r.cancelable,r.detail),n};!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===r&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}");const jr=function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=window.Promise||function(e){function t(){}e(t,t)},i=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=t.reduce((function(e,t){return[].concat(e,Br(t))}),[]);return n.filter((function(e){return-1===l.indexOf(e)})).forEach((function(e){l.push(e),e.classList.add("medium-zoom-image")})),c.forEach((function(e){var t=e.type,r=e.listener,i=e.options;n.forEach((function(e){e.addEventListener(t,r,i)}))})),m},s=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).target,t=function(){var e={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},t=void 0,r=void 0;if(d.container)if(d.container instanceof Object)t=(e=qr({},e,d.container)).width-e.left-e.right-2*d.margin,r=e.height-e.top-e.bottom-2*d.margin;else{var n=(Or(d.container)?d.container:document.querySelector(d.container)).getBoundingClientRect(),i=n.width,s=n.height,o=n.left,a=n.top;e=qr({},e,{width:i,height:s,left:o,top:a})}t=t||e.width-2*d.margin,r=r||e.height-2*d.margin;var l=p.zoomedHd||p.original,c=Rr(l)?t:l.naturalWidth||t,u=Rr(l)?r:l.naturalHeight||r,h=l.getBoundingClientRect(),f=h.top,m=h.left,g=h.width,_=h.height,v=Math.min(Math.max(g,c),t)/g,k=Math.min(Math.max(_,u),r)/_,b=Math.min(v,k),y="scale("+b+") translate3d("+((t-g)/2-m+d.margin+e.left)/b+"px, "+((r-_)/2-f+d.margin+e.top)/b+"px, 0)";p.zoomed.style.transform=y,p.zoomedHd&&(p.zoomedHd.style.transform=y)};return new n((function(r){if(e&&-1===l.indexOf(e))r(m);else{if(p.zoomed)r(m);else{if(e)p.original=e;else{if(!(l.length>0))return void r(m);var n=l;p.original=n[0]}if(p.original.dispatchEvent(Nr("medium-zoom:open",{detail:{zoom:m}})),h=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,u=!0,p.zoomed=function(e){var t=e.getBoundingClientRect(),r=t.top,n=t.left,i=t.width,s=t.height,o=e.cloneNode(),a=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,l=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return o.removeAttribute("id"),o.style.position="absolute",o.style.top=r+a+"px",o.style.left=n+l+"px",o.style.width=i+"px",o.style.height=s+"px",o.style.transform="",o}(p.original),document.body.appendChild(f),d.template){var i=Or(d.template)?d.template:document.querySelector(d.template);p.template=document.createElement("div"),p.template.appendChild(i.content.cloneNode(!0)),document.body.appendChild(p.template)}if(p.original.parentElement&&"PICTURE"===p.original.parentElement.tagName&&p.original.currentSrc&&(p.zoomed.src=p.original.currentSrc),document.body.appendChild(p.zoomed),window.requestAnimationFrame((function(){document.body.classList.add("medium-zoom--opened")})),p.original.classList.add("medium-zoom-image--hidden"),p.zoomed.classList.add("medium-zoom-image--opened"),p.zoomed.addEventListener("click",o),p.zoomed.addEventListener("transitionend",(function e(){u=!1,p.zoomed.removeEventListener("transitionend",e),p.original.dispatchEvent(Nr("medium-zoom:opened",{detail:{zoom:m}})),r(m)})),p.original.getAttribute("data-zoom-src")){p.zoomedHd=p.zoomed.cloneNode(),p.zoomedHd.removeAttribute("srcset"),p.zoomedHd.removeAttribute("sizes"),p.zoomedHd.removeAttribute("loading"),p.zoomedHd.src=p.zoomed.getAttribute("data-zoom-src"),p.zoomedHd.onerror=function(){clearInterval(s),p.zoomedHd=null,t()};var s=setInterval((function(){p.zoomedHd.complete&&(clearInterval(s),p.zoomedHd.classList.add("medium-zoom-image--opened"),p.zoomedHd.addEventListener("click",o),document.body.appendChild(p.zoomedHd),t())}),10)}else if(p.original.hasAttribute("srcset")){p.zoomedHd=p.zoomed.cloneNode(),p.zoomedHd.removeAttribute("sizes"),p.zoomedHd.removeAttribute("loading");var a=p.zoomedHd.addEventListener("load",(function(){p.zoomedHd.removeEventListener("load",a),p.zoomedHd.classList.add("medium-zoom-image--opened"),p.zoomedHd.addEventListener("click",o),document.body.appendChild(p.zoomedHd),t()}))}else t()}}}))},o=function(){return new n((function(e){if(!u&&p.original){u=!0,document.body.classList.remove("medium-zoom--opened"),p.zoomed.style.transform="",p.zoomedHd&&(p.zoomedHd.style.transform=""),p.template&&(p.template.style.transition="opacity 150ms",p.template.style.opacity=0),p.original.dispatchEvent(Nr("medium-zoom:close",{detail:{zoom:m}})),p.zoomed.addEventListener("transitionend",(function t(){p.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(p.zoomed),p.zoomedHd&&document.body.removeChild(p.zoomedHd),document.body.removeChild(f),p.zoomed.classList.remove("medium-zoom-image--opened"),p.template&&document.body.removeChild(p.template),u=!1,p.zoomed.removeEventListener("transitionend",t),p.original.dispatchEvent(Nr("medium-zoom:closed",{detail:{zoom:m}})),p.original=null,p.zoomed=null,p.zoomedHd=null,p.template=null,e(m)}))}else e(m)}))},a=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).target;return p.original?o():s({target:e})},l=[],c=[],u=!1,h=0,d=r,p={original:null,zoomed:null,zoomedHd:null,template:null};"[object Object]"===Object.prototype.toString.call(t)?d=t:(t||"string"==typeof t)&&i(t);var f=function(e){var t=document.createElement("div");return t.classList.add("medium-zoom-overlay"),t.style.background=e,t}((d=qr({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},d)).background);document.addEventListener("click",(function(e){var t=e.target;t!==f?-1!==l.indexOf(t)&&a({target:t}):o()})),document.addEventListener("keyup",(function(e){var t=e.key||e.keyCode;"Escape"!==t&&"Esc"!==t&&27!==t||o()})),document.addEventListener("scroll",(function(){if(!u&&p.original){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(h-e)>d.scrollOffset&&setTimeout(o,150)}})),window.addEventListener("resize",o);var m={open:s,close:o,toggle:a,update:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e;if(e.background&&(f.style.background=e.background),e.container&&e.container instanceof Object&&(t.container=qr({},d.container,e.container)),e.template){var r=Or(e.template)?e.template:document.querySelector(e.template);t.template=r}return d=qr({},d,t),l.forEach((function(e){e.dispatchEvent(Nr("medium-zoom:update",{detail:{zoom:m}}))})),m},clone:function(){return e(qr({},d,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}))},attach:i,detach:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];p.zoomed&&o();var n=t.length>0?t.reduce((function(e,t){return[].concat(e,Br(t))}),[]):l;return n.forEach((function(e){e.classList.remove("medium-zoom-image"),e.dispatchEvent(Nr("medium-zoom:detach",{detail:{zoom:m}}))})),l=l.filter((function(e){return-1===n.indexOf(e)})),m},on:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return l.forEach((function(n){n.addEventListener("medium-zoom:"+e,t,r)})),c.push({type:"medium-zoom:"+e,listener:t,options:r}),m},off:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return l.forEach((function(n){n.removeEventListener("medium-zoom:"+e,t,r)})),c=c.filter((function(r){return!(r.type==="medium-zoom:"+e&&r.listener.toString()===t.toString())})),m},getOptions:function(){return d},getImages:function(){return l},getZoomedImage:function(){return p.original}};return m};var Pr=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],n=0;n<e.rangeCount;n++)r.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach((function(t){e.addRange(t)})),t&&t.focus()}},Hr={"text/plain":"Text","text/html":"Url",default:"Text"};const Ur=ce((function(e,t){var r,n,i,s,o,a=!1;t||(t={}),t.debug;try{if(n=Pr(),i=document.createRange(),s=document.getSelection(),(o=document.createElement("span")).textContent=e,o.ariaHidden="true",o.style.all="unset",o.style.position="fixed",o.style.top=0,o.style.clip="rect(0, 0, 0, 0)",o.style.whiteSpace="pre",o.style.webkitUserSelect="text",o.style.MozUserSelect="text",o.style.msUserSelect="text",o.style.userSelect="text",o.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),void 0===r.clipboardData){window.clipboardData.clearData();var n=Hr[t.format]||Hr.default;window.clipboardData.setData(n,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(o),i.selectNodeContents(o),s.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");a=!0}catch(l){try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),a=!0}catch(c){r=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(r,e)}}finally{s&&("function"==typeof s.removeRange?s.removeRange(i):s.removeAllRanges()),o&&document.body.removeChild(o),n()}return a}));var Wr={};var Vr={Aacute:"Á",aacute:"á",Abreve:"Ă",abreve:"ă",ac:"∾",acd:"∿",acE:"∾̳",Acirc:"Â",acirc:"â",acute:"´",Acy:"А",acy:"а",AElig:"Æ",aelig:"æ",af:"⁡",Afr:"𝔄",afr:"𝔞",Agrave:"À",agrave:"à",alefsym:"ℵ",aleph:"ℵ",Alpha:"Α",alpha:"α",Amacr:"Ā",amacr:"ā",amalg:"⨿",amp:"&",AMP:"&",andand:"⩕",And:"⩓",and:"∧",andd:"⩜",andslope:"⩘",andv:"⩚",ang:"∠",ange:"⦤",angle:"∠",angmsdaa:"⦨",angmsdab:"⦩",angmsdac:"⦪",angmsdad:"⦫",angmsdae:"⦬",angmsdaf:"⦭",angmsdag:"⦮",angmsdah:"⦯",angmsd:"∡",angrt:"∟",angrtvb:"⊾",angrtvbd:"⦝",angsph:"∢",angst:"Å",angzarr:"⍼",Aogon:"Ą",aogon:"ą",Aopf:"𝔸",aopf:"𝕒",apacir:"⩯",ap:"≈",apE:"⩰",ape:"≊",apid:"≋",apos:"'",ApplyFunction:"⁡",approx:"≈",approxeq:"≊",Aring:"Å",aring:"å",Ascr:"𝒜",ascr:"𝒶",Assign:"≔",ast:"*",asymp:"≈",asympeq:"≍",Atilde:"Ã",atilde:"ã",Auml:"Ä",auml:"ä",awconint:"∳",awint:"⨑",backcong:"≌",backepsilon:"϶",backprime:"‵",backsim:"∽",backsimeq:"⋍",Backslash:"∖",Barv:"⫧",barvee:"⊽",barwed:"⌅",Barwed:"⌆",barwedge:"⌅",bbrk:"⎵",bbrktbrk:"⎶",bcong:"≌",Bcy:"Б",bcy:"б",bdquo:"„",becaus:"∵",because:"∵",Because:"∵",bemptyv:"⦰",bepsi:"϶",bernou:"ℬ",Bernoullis:"ℬ",Beta:"Β",beta:"β",beth:"ℶ",between:"≬",Bfr:"𝔅",bfr:"𝔟",bigcap:"⋂",bigcirc:"◯",bigcup:"⋃",bigodot:"⨀",bigoplus:"⨁",bigotimes:"⨂",bigsqcup:"⨆",bigstar:"★",bigtriangledown:"▽",bigtriangleup:"△",biguplus:"⨄",bigvee:"⋁",bigwedge:"⋀",bkarow:"⤍",blacklozenge:"⧫",blacksquare:"▪",blacktriangle:"▴",blacktriangledown:"▾",blacktriangleleft:"◂",blacktriangleright:"▸",blank:"␣",blk12:"▒",blk14:"░",blk34:"▓",block:"█",bne:"=⃥",bnequiv:"≡⃥",bNot:"⫭",bnot:"⌐",Bopf:"𝔹",bopf:"𝕓",bot:"⊥",bottom:"⊥",bowtie:"⋈",boxbox:"⧉",boxdl:"┐",boxdL:"╕",boxDl:"╖",boxDL:"╗",boxdr:"┌",boxdR:"╒",boxDr:"╓",boxDR:"╔",boxh:"─",boxH:"═",boxhd:"┬",boxHd:"╤",boxhD:"╥",boxHD:"╦",boxhu:"┴",boxHu:"╧",boxhU:"╨",boxHU:"╩",boxminus:"⊟",boxplus:"⊞",boxtimes:"⊠",boxul:"┘",boxuL:"╛",boxUl:"╜",boxUL:"╝",boxur:"└",boxuR:"╘",boxUr:"╙",boxUR:"╚",boxv:"│",boxV:"║",boxvh:"┼",boxvH:"╪",boxVh:"╫",boxVH:"╬",boxvl:"┤",boxvL:"╡",boxVl:"╢",boxVL:"╣",boxvr:"├",boxvR:"╞",boxVr:"╟",boxVR:"╠",bprime:"‵",breve:"˘",Breve:"˘",brvbar:"¦",bscr:"𝒷",Bscr:"ℬ",bsemi:"⁏",bsim:"∽",bsime:"⋍",bsolb:"⧅",bsol:"\\",bsolhsub:"⟈",bull:"•",bullet:"•",bump:"≎",bumpE:"⪮",bumpe:"≏",Bumpeq:"≎",bumpeq:"≏",Cacute:"Ć",cacute:"ć",capand:"⩄",capbrcup:"⩉",capcap:"⩋",cap:"∩",Cap:"⋒",capcup:"⩇",capdot:"⩀",CapitalDifferentialD:"ⅅ",caps:"∩︀",caret:"⁁",caron:"ˇ",Cayleys:"ℭ",ccaps:"⩍",Ccaron:"Č",ccaron:"č",Ccedil:"Ç",ccedil:"ç",Ccirc:"Ĉ",ccirc:"ĉ",Cconint:"∰",ccups:"⩌",ccupssm:"⩐",Cdot:"Ċ",cdot:"ċ",cedil:"¸",Cedilla:"¸",cemptyv:"⦲",cent:"¢",centerdot:"·",CenterDot:"·",cfr:"𝔠",Cfr:"ℭ",CHcy:"Ч",chcy:"ч",check:"✓",checkmark:"✓",Chi:"Χ",chi:"χ",circ:"ˆ",circeq:"≗",circlearrowleft:"↺",circlearrowright:"↻",circledast:"⊛",circledcirc:"⊚",circleddash:"⊝",CircleDot:"⊙",circledR:"®",circledS:"Ⓢ",CircleMinus:"⊖",CirclePlus:"⊕",CircleTimes:"⊗",cir:"○",cirE:"⧃",cire:"≗",cirfnint:"⨐",cirmid:"⫯",cirscir:"⧂",ClockwiseContourIntegral:"∲",CloseCurlyDoubleQuote:"”",CloseCurlyQuote:"’",clubs:"♣",clubsuit:"♣",colon:":",Colon:"∷",Colone:"⩴",colone:"≔",coloneq:"≔",comma:",",commat:"@",comp:"∁",compfn:"∘",complement:"∁",complexes:"ℂ",cong:"≅",congdot:"⩭",Congruent:"≡",conint:"∮",Conint:"∯",ContourIntegral:"∮",copf:"𝕔",Copf:"ℂ",coprod:"∐",Coproduct:"∐",copy:"©",COPY:"©",copysr:"℗",CounterClockwiseContourIntegral:"∳",crarr:"↵",cross:"✗",Cross:"⨯",Cscr:"𝒞",cscr:"𝒸",csub:"⫏",csube:"⫑",csup:"⫐",csupe:"⫒",ctdot:"⋯",cudarrl:"⤸",cudarrr:"⤵",cuepr:"⋞",cuesc:"⋟",cularr:"↶",cularrp:"⤽",cupbrcap:"⩈",cupcap:"⩆",CupCap:"≍",cup:"∪",Cup:"⋓",cupcup:"⩊",cupdot:"⊍",cupor:"⩅",cups:"∪︀",curarr:"↷",curarrm:"⤼",curlyeqprec:"⋞",curlyeqsucc:"⋟",curlyvee:"⋎",curlywedge:"⋏",curren:"¤",curvearrowleft:"↶",curvearrowright:"↷",cuvee:"⋎",cuwed:"⋏",cwconint:"∲",cwint:"∱",cylcty:"⌭",dagger:"†",Dagger:"‡",daleth:"ℸ",darr:"↓",Darr:"↡",dArr:"⇓",dash:"‐",Dashv:"⫤",dashv:"⊣",dbkarow:"⤏",dblac:"˝",Dcaron:"Ď",dcaron:"ď",Dcy:"Д",dcy:"д",ddagger:"‡",ddarr:"⇊",DD:"ⅅ",dd:"ⅆ",DDotrahd:"⤑",ddotseq:"⩷",deg:"°",Del:"∇",Delta:"Δ",delta:"δ",demptyv:"⦱",dfisht:"⥿",Dfr:"𝔇",dfr:"𝔡",dHar:"⥥",dharl:"⇃",dharr:"⇂",DiacriticalAcute:"´",DiacriticalDot:"˙",DiacriticalDoubleAcute:"˝",DiacriticalGrave:"`",DiacriticalTilde:"˜",diam:"⋄",diamond:"⋄",Diamond:"⋄",diamondsuit:"♦",diams:"♦",die:"¨",DifferentialD:"ⅆ",digamma:"ϝ",disin:"⋲",div:"÷",divide:"÷",divideontimes:"⋇",divonx:"⋇",DJcy:"Ђ",djcy:"ђ",dlcorn:"⌞",dlcrop:"⌍",dollar:"$",Dopf:"𝔻",dopf:"𝕕",Dot:"¨",dot:"˙",DotDot:"⃜",doteq:"≐",doteqdot:"≑",DotEqual:"≐",dotminus:"∸",dotplus:"∔",dotsquare:"⊡",doublebarwedge:"⌆",DoubleContourIntegral:"∯",DoubleDot:"¨",DoubleDownArrow:"⇓",DoubleLeftArrow:"⇐",DoubleLeftRightArrow:"⇔",DoubleLeftTee:"⫤",DoubleLongLeftArrow:"⟸",DoubleLongLeftRightArrow:"⟺",DoubleLongRightArrow:"⟹",DoubleRightArrow:"⇒",DoubleRightTee:"⊨",DoubleUpArrow:"⇑",DoubleUpDownArrow:"⇕",DoubleVerticalBar:"∥",DownArrowBar:"⤓",downarrow:"↓",DownArrow:"↓",Downarrow:"⇓",DownArrowUpArrow:"⇵",DownBreve:"̑",downdownarrows:"⇊",downharpoonleft:"⇃",downharpoonright:"⇂",DownLeftRightVector:"⥐",DownLeftTeeVector:"⥞",DownLeftVectorBar:"⥖",DownLeftVector:"↽",DownRightTeeVector:"⥟",DownRightVectorBar:"⥗",DownRightVector:"⇁",DownTeeArrow:"↧",DownTee:"⊤",drbkarow:"⤐",drcorn:"⌟",drcrop:"⌌",Dscr:"𝒟",dscr:"𝒹",DScy:"Ѕ",dscy:"ѕ",dsol:"⧶",Dstrok:"Đ",dstrok:"đ",dtdot:"⋱",dtri:"▿",dtrif:"▾",duarr:"⇵",duhar:"⥯",dwangle:"⦦",DZcy:"Џ",dzcy:"џ",dzigrarr:"⟿",Eacute:"É",eacute:"é",easter:"⩮",Ecaron:"Ě",ecaron:"ě",Ecirc:"Ê",ecirc:"ê",ecir:"≖",ecolon:"≕",Ecy:"Э",ecy:"э",eDDot:"⩷",Edot:"Ė",edot:"ė",eDot:"≑",ee:"ⅇ",efDot:"≒",Efr:"𝔈",efr:"𝔢",eg:"⪚",Egrave:"È",egrave:"è",egs:"⪖",egsdot:"⪘",el:"⪙",Element:"∈",elinters:"⏧",ell:"ℓ",els:"⪕",elsdot:"⪗",Emacr:"Ē",emacr:"ē",empty:"∅",emptyset:"∅",EmptySmallSquare:"◻",emptyv:"∅",EmptyVerySmallSquare:"▫",emsp13:" ",emsp14:" ",emsp:" ",ENG:"Ŋ",eng:"ŋ",ensp:" ",Eogon:"Ę",eogon:"ę",Eopf:"𝔼",eopf:"𝕖",epar:"⋕",eparsl:"⧣",eplus:"⩱",epsi:"ε",Epsilon:"Ε",epsilon:"ε",epsiv:"ϵ",eqcirc:"≖",eqcolon:"≕",eqsim:"≂",eqslantgtr:"⪖",eqslantless:"⪕",Equal:"⩵",equals:"=",EqualTilde:"≂",equest:"≟",Equilibrium:"⇌",equiv:"≡",equivDD:"⩸",eqvparsl:"⧥",erarr:"⥱",erDot:"≓",escr:"ℯ",Escr:"ℰ",esdot:"≐",Esim:"⩳",esim:"≂",Eta:"Η",eta:"η",ETH:"Ð",eth:"ð",Euml:"Ë",euml:"ë",euro:"€",excl:"!",exist:"∃",Exists:"∃",expectation:"ℰ",exponentiale:"ⅇ",ExponentialE:"ⅇ",fallingdotseq:"≒",Fcy:"Ф",fcy:"ф",female:"♀",ffilig:"ﬃ",fflig:"ﬀ",ffllig:"ﬄ",Ffr:"𝔉",ffr:"𝔣",filig:"ﬁ",FilledSmallSquare:"◼",FilledVerySmallSquare:"▪",fjlig:"fj",flat:"♭",fllig:"ﬂ",fltns:"▱",fnof:"ƒ",Fopf:"𝔽",fopf:"𝕗",forall:"∀",ForAll:"∀",fork:"⋔",forkv:"⫙",Fouriertrf:"ℱ",fpartint:"⨍",frac12:"½",frac13:"⅓",frac14:"¼",frac15:"⅕",frac16:"⅙",frac18:"⅛",frac23:"⅔",frac25:"⅖",frac34:"¾",frac35:"⅗",frac38:"⅜",frac45:"⅘",frac56:"⅚",frac58:"⅝",frac78:"⅞",frasl:"⁄",frown:"⌢",fscr:"𝒻",Fscr:"ℱ",gacute:"ǵ",Gamma:"Γ",gamma:"γ",Gammad:"Ϝ",gammad:"ϝ",gap:"⪆",Gbreve:"Ğ",gbreve:"ğ",Gcedil:"Ģ",Gcirc:"Ĝ",gcirc:"ĝ",Gcy:"Г",gcy:"г",Gdot:"Ġ",gdot:"ġ",ge:"≥",gE:"≧",gEl:"⪌",gel:"⋛",geq:"≥",geqq:"≧",geqslant:"⩾",gescc:"⪩",ges:"⩾",gesdot:"⪀",gesdoto:"⪂",gesdotol:"⪄",gesl:"⋛︀",gesles:"⪔",Gfr:"𝔊",gfr:"𝔤",gg:"≫",Gg:"⋙",ggg:"⋙",gimel:"ℷ",GJcy:"Ѓ",gjcy:"ѓ",gla:"⪥",gl:"≷",glE:"⪒",glj:"⪤",gnap:"⪊",gnapprox:"⪊",gne:"⪈",gnE:"≩",gneq:"⪈",gneqq:"≩",gnsim:"⋧",Gopf:"𝔾",gopf:"𝕘",grave:"`",GreaterEqual:"≥",GreaterEqualLess:"⋛",GreaterFullEqual:"≧",GreaterGreater:"⪢",GreaterLess:"≷",GreaterSlantEqual:"⩾",GreaterTilde:"≳",Gscr:"𝒢",gscr:"ℊ",gsim:"≳",gsime:"⪎",gsiml:"⪐",gtcc:"⪧",gtcir:"⩺",gt:">",GT:">",Gt:"≫",gtdot:"⋗",gtlPar:"⦕",gtquest:"⩼",gtrapprox:"⪆",gtrarr:"⥸",gtrdot:"⋗",gtreqless:"⋛",gtreqqless:"⪌",gtrless:"≷",gtrsim:"≳",gvertneqq:"≩︀",gvnE:"≩︀",Hacek:"ˇ",hairsp:" ",half:"½",hamilt:"ℋ",HARDcy:"Ъ",hardcy:"ъ",harrcir:"⥈",harr:"↔",hArr:"⇔",harrw:"↭",Hat:"^",hbar:"ℏ",Hcirc:"Ĥ",hcirc:"ĥ",hearts:"♥",heartsuit:"♥",hellip:"…",hercon:"⊹",hfr:"𝔥",Hfr:"ℌ",HilbertSpace:"ℋ",hksearow:"⤥",hkswarow:"⤦",hoarr:"⇿",homtht:"∻",hookleftarrow:"↩",hookrightarrow:"↪",hopf:"𝕙",Hopf:"ℍ",horbar:"―",HorizontalLine:"─",hscr:"𝒽",Hscr:"ℋ",hslash:"ℏ",Hstrok:"Ħ",hstrok:"ħ",HumpDownHump:"≎",HumpEqual:"≏",hybull:"⁃",hyphen:"‐",Iacute:"Í",iacute:"í",ic:"⁣",Icirc:"Î",icirc:"î",Icy:"И",icy:"и",Idot:"İ",IEcy:"Е",iecy:"е",iexcl:"¡",iff:"⇔",ifr:"𝔦",Ifr:"ℑ",Igrave:"Ì",igrave:"ì",ii:"ⅈ",iiiint:"⨌",iiint:"∭",iinfin:"⧜",iiota:"℩",IJlig:"Ĳ",ijlig:"ĳ",Imacr:"Ī",imacr:"ī",image:"ℑ",ImaginaryI:"ⅈ",imagline:"ℐ",imagpart:"ℑ",imath:"ı",Im:"ℑ",imof:"⊷",imped:"Ƶ",Implies:"⇒",incare:"℅",in:"∈",infin:"∞",infintie:"⧝",inodot:"ı",intcal:"⊺",int:"∫",Int:"∬",integers:"ℤ",Integral:"∫",intercal:"⊺",Intersection:"⋂",intlarhk:"⨗",intprod:"⨼",InvisibleComma:"⁣",InvisibleTimes:"⁢",IOcy:"Ё",iocy:"ё",Iogon:"Į",iogon:"į",Iopf:"𝕀",iopf:"𝕚",Iota:"Ι",iota:"ι",iprod:"⨼",iquest:"¿",iscr:"𝒾",Iscr:"ℐ",isin:"∈",isindot:"⋵",isinE:"⋹",isins:"⋴",isinsv:"⋳",isinv:"∈",it:"⁢",Itilde:"Ĩ",itilde:"ĩ",Iukcy:"І",iukcy:"і",Iuml:"Ï",iuml:"ï",Jcirc:"Ĵ",jcirc:"ĵ",Jcy:"Й",jcy:"й",Jfr:"𝔍",jfr:"𝔧",jmath:"ȷ",Jopf:"𝕁",jopf:"𝕛",Jscr:"𝒥",jscr:"𝒿",Jsercy:"Ј",jsercy:"ј",Jukcy:"Є",jukcy:"є",Kappa:"Κ",kappa:"κ",kappav:"ϰ",Kcedil:"Ķ",kcedil:"ķ",Kcy:"К",kcy:"к",Kfr:"𝔎",kfr:"𝔨",kgreen:"ĸ",KHcy:"Х",khcy:"х",KJcy:"Ќ",kjcy:"ќ",Kopf:"𝕂",kopf:"𝕜",Kscr:"𝒦",kscr:"𝓀",lAarr:"⇚",Lacute:"Ĺ",lacute:"ĺ",laemptyv:"⦴",lagran:"ℒ",Lambda:"Λ",lambda:"λ",lang:"⟨",Lang:"⟪",langd:"⦑",langle:"⟨",lap:"⪅",Laplacetrf:"ℒ",laquo:"«",larrb:"⇤",larrbfs:"⤟",larr:"←",Larr:"↞",lArr:"⇐",larrfs:"⤝",larrhk:"↩",larrlp:"↫",larrpl:"⤹",larrsim:"⥳",larrtl:"↢",latail:"⤙",lAtail:"⤛",lat:"⪫",late:"⪭",lates:"⪭︀",lbarr:"⤌",lBarr:"⤎",lbbrk:"❲",lbrace:"{",lbrack:"[",lbrke:"⦋",lbrksld:"⦏",lbrkslu:"⦍",Lcaron:"Ľ",lcaron:"ľ",Lcedil:"Ļ",lcedil:"ļ",lceil:"⌈",lcub:"{",Lcy:"Л",lcy:"л",ldca:"⤶",ldquo:"“",ldquor:"„",ldrdhar:"⥧",ldrushar:"⥋",ldsh:"↲",le:"≤",lE:"≦",LeftAngleBracket:"⟨",LeftArrowBar:"⇤",leftarrow:"←",LeftArrow:"←",Leftarrow:"⇐",LeftArrowRightArrow:"⇆",leftarrowtail:"↢",LeftCeiling:"⌈",LeftDoubleBracket:"⟦",LeftDownTeeVector:"⥡",LeftDownVectorBar:"⥙",LeftDownVector:"⇃",LeftFloor:"⌊",leftharpoondown:"↽",leftharpoonup:"↼",leftleftarrows:"⇇",leftrightarrow:"↔",LeftRightArrow:"↔",Leftrightarrow:"⇔",leftrightarrows:"⇆",leftrightharpoons:"⇋",leftrightsquigarrow:"↭",LeftRightVector:"⥎",LeftTeeArrow:"↤",LeftTee:"⊣",LeftTeeVector:"⥚",leftthreetimes:"⋋",LeftTriangleBar:"⧏",LeftTriangle:"⊲",LeftTriangleEqual:"⊴",LeftUpDownVector:"⥑",LeftUpTeeVector:"⥠",LeftUpVectorBar:"⥘",LeftUpVector:"↿",LeftVectorBar:"⥒",LeftVector:"↼",lEg:"⪋",leg:"⋚",leq:"≤",leqq:"≦",leqslant:"⩽",lescc:"⪨",les:"⩽",lesdot:"⩿",lesdoto:"⪁",lesdotor:"⪃",lesg:"⋚︀",lesges:"⪓",lessapprox:"⪅",lessdot:"⋖",lesseqgtr:"⋚",lesseqqgtr:"⪋",LessEqualGreater:"⋚",LessFullEqual:"≦",LessGreater:"≶",lessgtr:"≶",LessLess:"⪡",lesssim:"≲",LessSlantEqual:"⩽",LessTilde:"≲",lfisht:"⥼",lfloor:"⌊",Lfr:"𝔏",lfr:"𝔩",lg:"≶",lgE:"⪑",lHar:"⥢",lhard:"↽",lharu:"↼",lharul:"⥪",lhblk:"▄",LJcy:"Љ",ljcy:"љ",llarr:"⇇",ll:"≪",Ll:"⋘",llcorner:"⌞",Lleftarrow:"⇚",llhard:"⥫",lltri:"◺",Lmidot:"Ŀ",lmidot:"ŀ",lmoustache:"⎰",lmoust:"⎰",lnap:"⪉",lnapprox:"⪉",lne:"⪇",lnE:"≨",lneq:"⪇",lneqq:"≨",lnsim:"⋦",loang:"⟬",loarr:"⇽",lobrk:"⟦",longleftarrow:"⟵",LongLeftArrow:"⟵",Longleftarrow:"⟸",longleftrightarrow:"⟷",LongLeftRightArrow:"⟷",Longleftrightarrow:"⟺",longmapsto:"⟼",longrightarrow:"⟶",LongRightArrow:"⟶",Longrightarrow:"⟹",looparrowleft:"↫",looparrowright:"↬",lopar:"⦅",Lopf:"𝕃",lopf:"𝕝",loplus:"⨭",lotimes:"⨴",lowast:"∗",lowbar:"_",LowerLeftArrow:"↙",LowerRightArrow:"↘",loz:"◊",lozenge:"◊",lozf:"⧫",lpar:"(",lparlt:"⦓",lrarr:"⇆",lrcorner:"⌟",lrhar:"⇋",lrhard:"⥭",lrm:"‎",lrtri:"⊿",lsaquo:"‹",lscr:"𝓁",Lscr:"ℒ",lsh:"↰",Lsh:"↰",lsim:"≲",lsime:"⪍",lsimg:"⪏",lsqb:"[",lsquo:"‘",lsquor:"‚",Lstrok:"Ł",lstrok:"ł",ltcc:"⪦",ltcir:"⩹",lt:"<",LT:"<",Lt:"≪",ltdot:"⋖",lthree:"⋋",ltimes:"⋉",ltlarr:"⥶",ltquest:"⩻",ltri:"◃",ltrie:"⊴",ltrif:"◂",ltrPar:"⦖",lurdshar:"⥊",luruhar:"⥦",lvertneqq:"≨︀",lvnE:"≨︀",macr:"¯",male:"♂",malt:"✠",maltese:"✠",Map:"⤅",map:"↦",mapsto:"↦",mapstodown:"↧",mapstoleft:"↤",mapstoup:"↥",marker:"▮",mcomma:"⨩",Mcy:"М",mcy:"м",mdash:"—",mDDot:"∺",measuredangle:"∡",MediumSpace:" ",Mellintrf:"ℳ",Mfr:"𝔐",mfr:"𝔪",mho:"℧",micro:"µ",midast:"*",midcir:"⫰",mid:"∣",middot:"·",minusb:"⊟",minus:"−",minusd:"∸",minusdu:"⨪",MinusPlus:"∓",mlcp:"⫛",mldr:"…",mnplus:"∓",models:"⊧",Mopf:"𝕄",mopf:"𝕞",mp:"∓",mscr:"𝓂",Mscr:"ℳ",mstpos:"∾",Mu:"Μ",mu:"μ",multimap:"⊸",mumap:"⊸",nabla:"∇",Nacute:"Ń",nacute:"ń",nang:"∠⃒",nap:"≉",napE:"⩰̸",napid:"≋̸",napos:"ŉ",napprox:"≉",natural:"♮",naturals:"ℕ",natur:"♮",nbsp:" ",nbump:"≎̸",nbumpe:"≏̸",ncap:"⩃",Ncaron:"Ň",ncaron:"ň",Ncedil:"Ņ",ncedil:"ņ",ncong:"≇",ncongdot:"⩭̸",ncup:"⩂",Ncy:"Н",ncy:"н",ndash:"–",nearhk:"⤤",nearr:"↗",neArr:"⇗",nearrow:"↗",ne:"≠",nedot:"≐̸",NegativeMediumSpace:"​",NegativeThickSpace:"​",NegativeThinSpace:"​",NegativeVeryThinSpace:"​",nequiv:"≢",nesear:"⤨",nesim:"≂̸",NestedGreaterGreater:"≫",NestedLessLess:"≪",NewLine:"\n",nexist:"∄",nexists:"∄",Nfr:"𝔑",nfr:"𝔫",ngE:"≧̸",nge:"≱",ngeq:"≱",ngeqq:"≧̸",ngeqslant:"⩾̸",nges:"⩾̸",nGg:"⋙̸",ngsim:"≵",nGt:"≫⃒",ngt:"≯",ngtr:"≯",nGtv:"≫̸",nharr:"↮",nhArr:"⇎",nhpar:"⫲",ni:"∋",nis:"⋼",nisd:"⋺",niv:"∋",NJcy:"Њ",njcy:"њ",nlarr:"↚",nlArr:"⇍",nldr:"‥",nlE:"≦̸",nle:"≰",nleftarrow:"↚",nLeftarrow:"⇍",nleftrightarrow:"↮",nLeftrightarrow:"⇎",nleq:"≰",nleqq:"≦̸",nleqslant:"⩽̸",nles:"⩽̸",nless:"≮",nLl:"⋘̸",nlsim:"≴",nLt:"≪⃒",nlt:"≮",nltri:"⋪",nltrie:"⋬",nLtv:"≪̸",nmid:"∤",NoBreak:"⁠",NonBreakingSpace:" ",nopf:"𝕟",Nopf:"ℕ",Not:"⫬",not:"¬",NotCongruent:"≢",NotCupCap:"≭",NotDoubleVerticalBar:"∦",NotElement:"∉",NotEqual:"≠",NotEqualTilde:"≂̸",NotExists:"∄",NotGreater:"≯",NotGreaterEqual:"≱",NotGreaterFullEqual:"≧̸",NotGreaterGreater:"≫̸",NotGreaterLess:"≹",NotGreaterSlantEqual:"⩾̸",NotGreaterTilde:"≵",NotHumpDownHump:"≎̸",NotHumpEqual:"≏̸",notin:"∉",notindot:"⋵̸",notinE:"⋹̸",notinva:"∉",notinvb:"⋷",notinvc:"⋶",NotLeftTriangleBar:"⧏̸",NotLeftTriangle:"⋪",NotLeftTriangleEqual:"⋬",NotLess:"≮",NotLessEqual:"≰",NotLessGreater:"≸",NotLessLess:"≪̸",NotLessSlantEqual:"⩽̸",NotLessTilde:"≴",NotNestedGreaterGreater:"⪢̸",NotNestedLessLess:"⪡̸",notni:"∌",notniva:"∌",notnivb:"⋾",notnivc:"⋽",NotPrecedes:"⊀",NotPrecedesEqual:"⪯̸",NotPrecedesSlantEqual:"⋠",NotReverseElement:"∌",NotRightTriangleBar:"⧐̸",NotRightTriangle:"⋫",NotRightTriangleEqual:"⋭",NotSquareSubset:"⊏̸",NotSquareSubsetEqual:"⋢",NotSquareSuperset:"⊐̸",NotSquareSupersetEqual:"⋣",NotSubset:"⊂⃒",NotSubsetEqual:"⊈",NotSucceeds:"⊁",NotSucceedsEqual:"⪰̸",NotSucceedsSlantEqual:"⋡",NotSucceedsTilde:"≿̸",NotSuperset:"⊃⃒",NotSupersetEqual:"⊉",NotTilde:"≁",NotTildeEqual:"≄",NotTildeFullEqual:"≇",NotTildeTilde:"≉",NotVerticalBar:"∤",nparallel:"∦",npar:"∦",nparsl:"⫽⃥",npart:"∂̸",npolint:"⨔",npr:"⊀",nprcue:"⋠",nprec:"⊀",npreceq:"⪯̸",npre:"⪯̸",nrarrc:"⤳̸",nrarr:"↛",nrArr:"⇏",nrarrw:"↝̸",nrightarrow:"↛",nRightarrow:"⇏",nrtri:"⋫",nrtrie:"⋭",nsc:"⊁",nsccue:"⋡",nsce:"⪰̸",Nscr:"𝒩",nscr:"𝓃",nshortmid:"∤",nshortparallel:"∦",nsim:"≁",nsime:"≄",nsimeq:"≄",nsmid:"∤",nspar:"∦",nsqsube:"⋢",nsqsupe:"⋣",nsub:"⊄",nsubE:"⫅̸",nsube:"⊈",nsubset:"⊂⃒",nsubseteq:"⊈",nsubseteqq:"⫅̸",nsucc:"⊁",nsucceq:"⪰̸",nsup:"⊅",nsupE:"⫆̸",nsupe:"⊉",nsupset:"⊃⃒",nsupseteq:"⊉",nsupseteqq:"⫆̸",ntgl:"≹",Ntilde:"Ñ",ntilde:"ñ",ntlg:"≸",ntriangleleft:"⋪",ntrianglelefteq:"⋬",ntriangleright:"⋫",ntrianglerighteq:"⋭",Nu:"Ν",nu:"ν",num:"#",numero:"№",numsp:" ",nvap:"≍⃒",nvdash:"⊬",nvDash:"⊭",nVdash:"⊮",nVDash:"⊯",nvge:"≥⃒",nvgt:">⃒",nvHarr:"⤄",nvinfin:"⧞",nvlArr:"⤂",nvle:"≤⃒",nvlt:"<⃒",nvltrie:"⊴⃒",nvrArr:"⤃",nvrtrie:"⊵⃒",nvsim:"∼⃒",nwarhk:"⤣",nwarr:"↖",nwArr:"⇖",nwarrow:"↖",nwnear:"⤧",Oacute:"Ó",oacute:"ó",oast:"⊛",Ocirc:"Ô",ocirc:"ô",ocir:"⊚",Ocy:"О",ocy:"о",odash:"⊝",Odblac:"Ő",odblac:"ő",odiv:"⨸",odot:"⊙",odsold:"⦼",OElig:"Œ",oelig:"œ",ofcir:"⦿",Ofr:"𝔒",ofr:"𝔬",ogon:"˛",Ograve:"Ò",ograve:"ò",ogt:"⧁",ohbar:"⦵",ohm:"Ω",oint:"∮",olarr:"↺",olcir:"⦾",olcross:"⦻",oline:"‾",olt:"⧀",Omacr:"Ō",omacr:"ō",Omega:"Ω",omega:"ω",Omicron:"Ο",omicron:"ο",omid:"⦶",ominus:"⊖",Oopf:"𝕆",oopf:"𝕠",opar:"⦷",OpenCurlyDoubleQuote:"“",OpenCurlyQuote:"‘",operp:"⦹",oplus:"⊕",orarr:"↻",Or:"⩔",or:"∨",ord:"⩝",order:"ℴ",orderof:"ℴ",ordf:"ª",ordm:"º",origof:"⊶",oror:"⩖",orslope:"⩗",orv:"⩛",oS:"Ⓢ",Oscr:"𝒪",oscr:"ℴ",Oslash:"Ø",oslash:"ø",osol:"⊘",Otilde:"Õ",otilde:"õ",otimesas:"⨶",Otimes:"⨷",otimes:"⊗",Ouml:"Ö",ouml:"ö",ovbar:"⌽",OverBar:"‾",OverBrace:"⏞",OverBracket:"⎴",OverParenthesis:"⏜",para:"¶",parallel:"∥",par:"∥",parsim:"⫳",parsl:"⫽",part:"∂",PartialD:"∂",Pcy:"П",pcy:"п",percnt:"%",period:".",permil:"‰",perp:"⊥",pertenk:"‱",Pfr:"𝔓",pfr:"𝔭",Phi:"Φ",phi:"φ",phiv:"ϕ",phmmat:"ℳ",phone:"☎",Pi:"Π",pi:"π",pitchfork:"⋔",piv:"ϖ",planck:"ℏ",planckh:"ℎ",plankv:"ℏ",plusacir:"⨣",plusb:"⊞",pluscir:"⨢",plus:"+",plusdo:"∔",plusdu:"⨥",pluse:"⩲",PlusMinus:"±",plusmn:"±",plussim:"⨦",plustwo:"⨧",pm:"±",Poincareplane:"ℌ",pointint:"⨕",popf:"𝕡",Popf:"ℙ",pound:"£",prap:"⪷",Pr:"⪻",pr:"≺",prcue:"≼",precapprox:"⪷",prec:"≺",preccurlyeq:"≼",Precedes:"≺",PrecedesEqual:"⪯",PrecedesSlantEqual:"≼",PrecedesTilde:"≾",preceq:"⪯",precnapprox:"⪹",precneqq:"⪵",precnsim:"⋨",pre:"⪯",prE:"⪳",precsim:"≾",prime:"′",Prime:"″",primes:"ℙ",prnap:"⪹",prnE:"⪵",prnsim:"⋨",prod:"∏",Product:"∏",profalar:"⌮",profline:"⌒",profsurf:"⌓",prop:"∝",Proportional:"∝",Proportion:"∷",propto:"∝",prsim:"≾",prurel:"⊰",Pscr:"𝒫",pscr:"𝓅",Psi:"Ψ",psi:"ψ",puncsp:" ",Qfr:"𝔔",qfr:"𝔮",qint:"⨌",qopf:"𝕢",Qopf:"ℚ",qprime:"⁗",Qscr:"𝒬",qscr:"𝓆",quaternions:"ℍ",quatint:"⨖",quest:"?",questeq:"≟",quot:'"',QUOT:'"',rAarr:"⇛",race:"∽̱",Racute:"Ŕ",racute:"ŕ",radic:"√",raemptyv:"⦳",rang:"⟩",Rang:"⟫",rangd:"⦒",range:"⦥",rangle:"⟩",raquo:"»",rarrap:"⥵",rarrb:"⇥",rarrbfs:"⤠",rarrc:"⤳",rarr:"→",Rarr:"↠",rArr:"⇒",rarrfs:"⤞",rarrhk:"↪",rarrlp:"↬",rarrpl:"⥅",rarrsim:"⥴",Rarrtl:"⤖",rarrtl:"↣",rarrw:"↝",ratail:"⤚",rAtail:"⤜",ratio:"∶",rationals:"ℚ",rbarr:"⤍",rBarr:"⤏",RBarr:"⤐",rbbrk:"❳",rbrace:"}",rbrack:"]",rbrke:"⦌",rbrksld:"⦎",rbrkslu:"⦐",Rcaron:"Ř",rcaron:"ř",Rcedil:"Ŗ",rcedil:"ŗ",rceil:"⌉",rcub:"}",Rcy:"Р",rcy:"р",rdca:"⤷",rdldhar:"⥩",rdquo:"”",rdquor:"”",rdsh:"↳",real:"ℜ",realine:"ℛ",realpart:"ℜ",reals:"ℝ",Re:"ℜ",rect:"▭",reg:"®",REG:"®",ReverseElement:"∋",ReverseEquilibrium:"⇋",ReverseUpEquilibrium:"⥯",rfisht:"⥽",rfloor:"⌋",rfr:"𝔯",Rfr:"ℜ",rHar:"⥤",rhard:"⇁",rharu:"⇀",rharul:"⥬",Rho:"Ρ",rho:"ρ",rhov:"ϱ",RightAngleBracket:"⟩",RightArrowBar:"⇥",rightarrow:"→",RightArrow:"→",Rightarrow:"⇒",RightArrowLeftArrow:"⇄",rightarrowtail:"↣",RightCeiling:"⌉",RightDoubleBracket:"⟧",RightDownTeeVector:"⥝",RightDownVectorBar:"⥕",RightDownVector:"⇂",RightFloor:"⌋",rightharpoondown:"⇁",rightharpoonup:"⇀",rightleftarrows:"⇄",rightleftharpoons:"⇌",rightrightarrows:"⇉",rightsquigarrow:"↝",RightTeeArrow:"↦",RightTee:"⊢",RightTeeVector:"⥛",rightthreetimes:"⋌",RightTriangleBar:"⧐",RightTriangle:"⊳",RightTriangleEqual:"⊵",RightUpDownVector:"⥏",RightUpTeeVector:"⥜",RightUpVectorBar:"⥔",RightUpVector:"↾",RightVectorBar:"⥓",RightVector:"⇀",ring:"˚",risingdotseq:"≓",rlarr:"⇄",rlhar:"⇌",rlm:"‏",rmoustache:"⎱",rmoust:"⎱",rnmid:"⫮",roang:"⟭",roarr:"⇾",robrk:"⟧",ropar:"⦆",ropf:"𝕣",Ropf:"ℝ",roplus:"⨮",rotimes:"⨵",RoundImplies:"⥰",rpar:")",rpargt:"⦔",rppolint:"⨒",rrarr:"⇉",Rrightarrow:"⇛",rsaquo:"›",rscr:"𝓇",Rscr:"ℛ",rsh:"↱",Rsh:"↱",rsqb:"]",rsquo:"’",rsquor:"’",rthree:"⋌",rtimes:"⋊",rtri:"▹",rtrie:"⊵",rtrif:"▸",rtriltri:"⧎",RuleDelayed:"⧴",ruluhar:"⥨",rx:"℞",Sacute:"Ś",sacute:"ś",sbquo:"‚",scap:"⪸",Scaron:"Š",scaron:"š",Sc:"⪼",sc:"≻",sccue:"≽",sce:"⪰",scE:"⪴",Scedil:"Ş",scedil:"ş",Scirc:"Ŝ",scirc:"ŝ",scnap:"⪺",scnE:"⪶",scnsim:"⋩",scpolint:"⨓",scsim:"≿",Scy:"С",scy:"с",sdotb:"⊡",sdot:"⋅",sdote:"⩦",searhk:"⤥",searr:"↘",seArr:"⇘",searrow:"↘",sect:"§",semi:";",seswar:"⤩",setminus:"∖",setmn:"∖",sext:"✶",Sfr:"𝔖",sfr:"𝔰",sfrown:"⌢",sharp:"♯",SHCHcy:"Щ",shchcy:"щ",SHcy:"Ш",shcy:"ш",ShortDownArrow:"↓",ShortLeftArrow:"←",shortmid:"∣",shortparallel:"∥",ShortRightArrow:"→",ShortUpArrow:"↑",shy:"­",Sigma:"Σ",sigma:"σ",sigmaf:"ς",sigmav:"ς",sim:"∼",simdot:"⩪",sime:"≃",simeq:"≃",simg:"⪞",simgE:"⪠",siml:"⪝",simlE:"⪟",simne:"≆",simplus:"⨤",simrarr:"⥲",slarr:"←",SmallCircle:"∘",smallsetminus:"∖",smashp:"⨳",smeparsl:"⧤",smid:"∣",smile:"⌣",smt:"⪪",smte:"⪬",smtes:"⪬︀",SOFTcy:"Ь",softcy:"ь",solbar:"⌿",solb:"⧄",sol:"/",Sopf:"𝕊",sopf:"𝕤",spades:"♠",spadesuit:"♠",spar:"∥",sqcap:"⊓",sqcaps:"⊓︀",sqcup:"⊔",sqcups:"⊔︀",Sqrt:"√",sqsub:"⊏",sqsube:"⊑",sqsubset:"⊏",sqsubseteq:"⊑",sqsup:"⊐",sqsupe:"⊒",sqsupset:"⊐",sqsupseteq:"⊒",square:"□",Square:"□",SquareIntersection:"⊓",SquareSubset:"⊏",SquareSubsetEqual:"⊑",SquareSuperset:"⊐",SquareSupersetEqual:"⊒",SquareUnion:"⊔",squarf:"▪",squ:"□",squf:"▪",srarr:"→",Sscr:"𝒮",sscr:"𝓈",ssetmn:"∖",ssmile:"⌣",sstarf:"⋆",Star:"⋆",star:"☆",starf:"★",straightepsilon:"ϵ",straightphi:"ϕ",strns:"¯",sub:"⊂",Sub:"⋐",subdot:"⪽",subE:"⫅",sube:"⊆",subedot:"⫃",submult:"⫁",subnE:"⫋",subne:"⊊",subplus:"⪿",subrarr:"⥹",subset:"⊂",Subset:"⋐",subseteq:"⊆",subseteqq:"⫅",SubsetEqual:"⊆",subsetneq:"⊊",subsetneqq:"⫋",subsim:"⫇",subsub:"⫕",subsup:"⫓",succapprox:"⪸",succ:"≻",succcurlyeq:"≽",Succeeds:"≻",SucceedsEqual:"⪰",SucceedsSlantEqual:"≽",SucceedsTilde:"≿",succeq:"⪰",succnapprox:"⪺",succneqq:"⪶",succnsim:"⋩",succsim:"≿",SuchThat:"∋",sum:"∑",Sum:"∑",sung:"♪",sup1:"¹",sup2:"²",sup3:"³",sup:"⊃",Sup:"⋑",supdot:"⪾",supdsub:"⫘",supE:"⫆",supe:"⊇",supedot:"⫄",Superset:"⊃",SupersetEqual:"⊇",suphsol:"⟉",suphsub:"⫗",suplarr:"⥻",supmult:"⫂",supnE:"⫌",supne:"⊋",supplus:"⫀",supset:"⊃",Supset:"⋑",supseteq:"⊇",supseteqq:"⫆",supsetneq:"⊋",supsetneqq:"⫌",supsim:"⫈",supsub:"⫔",supsup:"⫖",swarhk:"⤦",swarr:"↙",swArr:"⇙",swarrow:"↙",swnwar:"⤪",szlig:"ß",Tab:"\t",target:"⌖",Tau:"Τ",tau:"τ",tbrk:"⎴",Tcaron:"Ť",tcaron:"ť",Tcedil:"Ţ",tcedil:"ţ",Tcy:"Т",tcy:"т",tdot:"⃛",telrec:"⌕",Tfr:"𝔗",tfr:"𝔱",there4:"∴",therefore:"∴",Therefore:"∴",Theta:"Θ",theta:"θ",thetasym:"ϑ",thetav:"ϑ",thickapprox:"≈",thicksim:"∼",ThickSpace:"  ",ThinSpace:" ",thinsp:" ",thkap:"≈",thksim:"∼",THORN:"Þ",thorn:"þ",tilde:"˜",Tilde:"∼",TildeEqual:"≃",TildeFullEqual:"≅",TildeTilde:"≈",timesbar:"⨱",timesb:"⊠",times:"×",timesd:"⨰",tint:"∭",toea:"⤨",topbot:"⌶",topcir:"⫱",top:"⊤",Topf:"𝕋",topf:"𝕥",topfork:"⫚",tosa:"⤩",tprime:"‴",trade:"™",TRADE:"™",triangle:"▵",triangledown:"▿",triangleleft:"◃",trianglelefteq:"⊴",triangleq:"≜",triangleright:"▹",trianglerighteq:"⊵",tridot:"◬",trie:"≜",triminus:"⨺",TripleDot:"⃛",triplus:"⨹",trisb:"⧍",tritime:"⨻",trpezium:"⏢",Tscr:"𝒯",tscr:"𝓉",TScy:"Ц",tscy:"ц",TSHcy:"Ћ",tshcy:"ћ",Tstrok:"Ŧ",tstrok:"ŧ",twixt:"≬",twoheadleftarrow:"↞",twoheadrightarrow:"↠",Uacute:"Ú",uacute:"ú",uarr:"↑",Uarr:"↟",uArr:"⇑",Uarrocir:"⥉",Ubrcy:"Ў",ubrcy:"ў",Ubreve:"Ŭ",ubreve:"ŭ",Ucirc:"Û",ucirc:"û",Ucy:"У",ucy:"у",udarr:"⇅",Udblac:"Ű",udblac:"ű",udhar:"⥮",ufisht:"⥾",Ufr:"𝔘",ufr:"𝔲",Ugrave:"Ù",ugrave:"ù",uHar:"⥣",uharl:"↿",uharr:"↾",uhblk:"▀",ulcorn:"⌜",ulcorner:"⌜",ulcrop:"⌏",ultri:"◸",Umacr:"Ū",umacr:"ū",uml:"¨",UnderBar:"_",UnderBrace:"⏟",UnderBracket:"⎵",UnderParenthesis:"⏝",Union:"⋃",UnionPlus:"⊎",Uogon:"Ų",uogon:"ų",Uopf:"𝕌",uopf:"𝕦",UpArrowBar:"⤒",uparrow:"↑",UpArrow:"↑",Uparrow:"⇑",UpArrowDownArrow:"⇅",updownarrow:"↕",UpDownArrow:"↕",Updownarrow:"⇕",UpEquilibrium:"⥮",upharpoonleft:"↿",upharpoonright:"↾",uplus:"⊎",UpperLeftArrow:"↖",UpperRightArrow:"↗",upsi:"υ",Upsi:"ϒ",upsih:"ϒ",Upsilon:"Υ",upsilon:"υ",UpTeeArrow:"↥",UpTee:"⊥",upuparrows:"⇈",urcorn:"⌝",urcorner:"⌝",urcrop:"⌎",Uring:"Ů",uring:"ů",urtri:"◹",Uscr:"𝒰",uscr:"𝓊",utdot:"⋰",Utilde:"Ũ",utilde:"ũ",utri:"▵",utrif:"▴",uuarr:"⇈",Uuml:"Ü",uuml:"ü",uwangle:"⦧",vangrt:"⦜",varepsilon:"ϵ",varkappa:"ϰ",varnothing:"∅",varphi:"ϕ",varpi:"ϖ",varpropto:"∝",varr:"↕",vArr:"⇕",varrho:"ϱ",varsigma:"ς",varsubsetneq:"⊊︀",varsubsetneqq:"⫋︀",varsupsetneq:"⊋︀",varsupsetneqq:"⫌︀",vartheta:"ϑ",vartriangleleft:"⊲",vartriangleright:"⊳",vBar:"⫨",Vbar:"⫫",vBarv:"⫩",Vcy:"В",vcy:"в",vdash:"⊢",vDash:"⊨",Vdash:"⊩",VDash:"⊫",Vdashl:"⫦",veebar:"⊻",vee:"∨",Vee:"⋁",veeeq:"≚",vellip:"⋮",verbar:"|",Verbar:"‖",vert:"|",Vert:"‖",VerticalBar:"∣",VerticalLine:"|",VerticalSeparator:"❘",VerticalTilde:"≀",VeryThinSpace:" ",Vfr:"𝔙",vfr:"𝔳",vltri:"⊲",vnsub:"⊂⃒",vnsup:"⊃⃒",Vopf:"𝕍",vopf:"𝕧",vprop:"∝",vrtri:"⊳",Vscr:"𝒱",vscr:"𝓋",vsubnE:"⫋︀",vsubne:"⊊︀",vsupnE:"⫌︀",vsupne:"⊋︀",Vvdash:"⊪",vzigzag:"⦚",Wcirc:"Ŵ",wcirc:"ŵ",wedbar:"⩟",wedge:"∧",Wedge:"⋀",wedgeq:"≙",weierp:"℘",Wfr:"𝔚",wfr:"𝔴",Wopf:"𝕎",wopf:"𝕨",wp:"℘",wr:"≀",wreath:"≀",Wscr:"𝒲",wscr:"𝓌",xcap:"⋂",xcirc:"◯",xcup:"⋃",xdtri:"▽",Xfr:"𝔛",xfr:"𝔵",xharr:"⟷",xhArr:"⟺",Xi:"Ξ",xi:"ξ",xlarr:"⟵",xlArr:"⟸",xmap:"⟼",xnis:"⋻",xodot:"⨀",Xopf:"𝕏",xopf:"𝕩",xoplus:"⨁",xotime:"⨂",xrarr:"⟶",xrArr:"⟹",Xscr:"𝒳",xscr:"𝓍",xsqcup:"⨆",xuplus:"⨄",xutri:"△",xvee:"⋁",xwedge:"⋀",Yacute:"Ý",yacute:"ý",YAcy:"Я",yacy:"я",Ycirc:"Ŷ",ycirc:"ŷ",Ycy:"Ы",ycy:"ы",yen:"¥",Yfr:"𝔜",yfr:"𝔶",YIcy:"Ї",yicy:"ї",Yopf:"𝕐",yopf:"𝕪",Yscr:"𝒴",yscr:"𝓎",YUcy:"Ю",yucy:"ю",yuml:"ÿ",Yuml:"Ÿ",Zacute:"Ź",zacute:"ź",Zcaron:"Ž",zcaron:"ž",Zcy:"З",zcy:"з",Zdot:"Ż",zdot:"ż",zeetrf:"ℨ",ZeroWidthSpace:"​",Zeta:"Ζ",zeta:"ζ",zfr:"𝔷",Zfr:"ℨ",ZHcy:"Ж",zhcy:"ж",zigrarr:"⇝",zopf:"𝕫",Zopf:"ℤ",Zscr:"𝒵",zscr:"𝓏",zwj:"‍",zwnj:"‌"},Gr=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,$r={},Zr={};function Kr(e,t,r){var n,i,s,o,a,l="";for("string"!=typeof t&&(r=t,t=Kr.defaultChars),void 0===r&&(r=!0),a=function(e){var t,r,n=Zr[e];if(n)return n;for(n=Zr[e]=[],t=0;t<128;t++)r=String.fromCharCode(t),/^[0-9a-z]$/i.test(r)?n.push(r):n.push("%"+("0"+t.toString(16).toUpperCase()).slice(-2));for(t=0;t<e.length;t++)n[e.charCodeAt(t)]=e[t];return n}(t),n=0,i=e.length;n<i;n++)if(s=e.charCodeAt(n),r&&37===s&&n+2<i&&/^[0-9a-f]{2}$/i.test(e.slice(n+1,n+3)))l+=e.slice(n,n+3),n+=2;else if(s<128)l+=a[s];else if(s>=55296&&s<=57343){if(s>=55296&&s<=56319&&n+1<i&&(o=e.charCodeAt(n+1))>=56320&&o<=57343){l+=encodeURIComponent(e[n]+e[n+1]),n++;continue}l+="%EF%BF%BD"}else l+=encodeURIComponent(e[n]);return l}Kr.defaultChars=";/?:@&=+$,-_.!~*'()#",Kr.componentChars="-_.!~*'()";var Jr=Kr,Yr={};function Xr(e,t){var r;return"string"!=typeof t&&(t=Xr.defaultChars),r=function(e){var t,r,n=Yr[e];if(n)return n;for(n=Yr[e]=[],t=0;t<128;t++)r=String.fromCharCode(t),n.push(r);for(t=0;t<e.length;t++)n[r=e.charCodeAt(t)]="%"+("0"+r.toString(16).toUpperCase()).slice(-2);return n}(t),e.replace(/(%[a-f0-9]{2})+/gi,(function(e){var t,n,i,s,o,a,l,c="";for(t=0,n=e.length;t<n;t+=3)(i=parseInt(e.slice(t+1,t+3),16))<128?c+=r[i]:192==(224&i)&&t+3<n&&128==(192&(s=parseInt(e.slice(t+4,t+6),16)))?(c+=(l=i<<6&1984|63&s)<128?"��":String.fromCharCode(l),t+=3):224==(240&i)&&t+6<n&&(s=parseInt(e.slice(t+4,t+6),16),o=parseInt(e.slice(t+7,t+9),16),128==(192&s)&&128==(192&o))?(c+=(l=i<<12&61440|s<<6&4032|63&o)<2048||l>=55296&&l<=57343?"���":String.fromCharCode(l),t+=6):240==(248&i)&&t+9<n&&(s=parseInt(e.slice(t+4,t+6),16),o=parseInt(e.slice(t+7,t+9),16),a=parseInt(e.slice(t+10,t+12),16),128==(192&s)&&128==(192&o)&&128==(192&a))?((l=i<<18&1835008|s<<12&258048|o<<6&4032|63&a)<65536||l>1114111?c+="����":(l-=65536,c+=String.fromCharCode(55296+(l>>10),56320+(1023&l))),t+=9):c+="�";return c}))}Xr.defaultChars=";/?:@&=+$,#",Xr.componentChars="";var Qr=Xr;function en(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}var tn=/^([a-z0-9.+-]+:)/i,rn=/:[0-9]*$/,nn=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,sn=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),on=["'"].concat(sn),an=["%","/","?",";","#"].concat(on),ln=["/","?","#"],cn=/^[+a-z0-9A-Z_-]{0,63}$/,un=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,hn={javascript:!0,"javascript:":!0},dn={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};en.prototype.parse=function(e,t){var r,n,i,s,o,a=e;if(a=a.trim(),!t&&1===e.split("#").length){var l=nn.exec(a);if(l)return this.pathname=l[1],l[2]&&(this.search=l[2]),this}var c=tn.exec(a);if(c&&(i=(c=c[0]).toLowerCase(),this.protocol=c,a=a.substr(c.length)),(t||c||a.match(/^\/\/[^@\/]+@[^@\/]+/))&&(!(o="//"===a.substr(0,2))||c&&hn[c]||(a=a.substr(2),this.slashes=!0)),!hn[c]&&(o||c&&!dn[c])){var u,h,d=-1;for(r=0;r<ln.length;r++)-1!==(s=a.indexOf(ln[r]))&&(-1===d||s<d)&&(d=s);for(-1!==(h=-1===d?a.lastIndexOf("@"):a.lastIndexOf("@",d))&&(u=a.slice(0,h),a=a.slice(h+1),this.auth=u),d=-1,r=0;r<an.length;r++)-1!==(s=a.indexOf(an[r]))&&(-1===d||s<d)&&(d=s);-1===d&&(d=a.length),":"===a[d-1]&&d--;var p=a.slice(0,d);a=a.slice(d),this.parseHost(p),this.hostname=this.hostname||"";var f="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!f){var m=this.hostname.split(/\./);for(r=0,n=m.length;r<n;r++){var g=m[r];if(g&&!g.match(cn)){for(var _="",v=0,k=g.length;v<k;v++)g.charCodeAt(v)>127?_+="x":_+=g[v];if(!_.match(cn)){var b=m.slice(0,r),y=m.slice(r+1),w=g.match(un);w&&(b.push(w[1]),y.unshift(w[2])),y.length&&(a=y.join(".")+a),this.hostname=b.join(".");break}}}}this.hostname.length>255&&(this.hostname=""),f&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}var x=a.indexOf("#");-1!==x&&(this.hash=a.substr(x),a=a.slice(0,x));var C=a.indexOf("?");return-1!==C&&(this.search=a.substr(C),a=a.slice(0,C)),a&&(this.pathname=a),dn[i]&&this.hostname&&!this.pathname&&(this.pathname=""),this},en.prototype.parseHost=function(e){var t=rn.exec(e);t&&(":"!==(t=t[0])&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)};var pn=function(e,t){if(e&&e instanceof en)return e;var r=new en;return r.parse(e,t),r};$r.encode=Jr,$r.decode=Qr,$r.format=function(e){var t="";return t+=e.protocol||"",t+=e.slashes?"//":"",t+=e.auth?e.auth+"@":"",e.hostname&&-1!==e.hostname.indexOf(":")?t+="["+e.hostname+"]":t+=e.hostname||"",t+=e.port?":"+e.port:"",t+=e.pathname||"",t+=e.search||"",t+=e.hash||""},$r.parse=pn;var fn,mn,gn,_n,vn,kn,bn,yn,wn,xn={};function Cn(){return mn?fn:(mn=1,fn=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/)}function An(){return _n?gn:(_n=1,gn=/[\0-\x1F\x7F-\x9F]/)}function Sn(){return yn?bn:(yn=1,bn=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/)}function En(){return wn||(wn=1,xn.Any=Cn(),xn.Cc=An(),xn.Cf=kn?vn:(kn=1,vn=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/),xn.P=Gr,xn.Z=Sn()),xn}!function(e){var t=Object.prototype.hasOwnProperty;function r(e,r){return t.call(e,r)}function n(e){return!(e>=55296&&e<=57343)&&(!(e>=64976&&e<=65007)&&(65535!=(65535&e)&&65534!=(65535&e)&&(!(e>=0&&e<=8)&&(11!==e&&(!(e>=14&&e<=31)&&(!(e>=127&&e<=159)&&!(e>1114111)))))))}function i(e){if(e>65535){var t=55296+((e-=65536)>>10),r=56320+(1023&e);return String.fromCharCode(t,r)}return String.fromCharCode(e)}var s=/\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,o=new RegExp(s.source+"|"+/&([a-z#][a-z0-9]{1,31});/gi.source,"gi"),a=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i,l=Vr;var c=/[&<>"]/,u=/[&<>"]/g,h={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function d(e){return h[e]}var p=/[.?*+^$[\]\\(){}|-]/g;var f=Gr;e.lib={},e.lib.mdurl=$r,e.lib.ucmicro=En(),e.assign=function(e){return Array.prototype.slice.call(arguments,1).forEach((function(t){if(t){if("object"!=typeof t)throw new TypeError(t+"must be object");Object.keys(t).forEach((function(r){e[r]=t[r]}))}})),e},e.isString=function(e){return"[object String]"===function(e){return Object.prototype.toString.call(e)}(e)},e.has=r,e.unescapeMd=function(e){return e.indexOf("\\")<0?e:e.replace(s,"$1")},e.unescapeAll=function(e){return e.indexOf("\\")<0&&e.indexOf("&")<0?e:e.replace(o,(function(e,t,s){return t||function(e,t){var s;return r(l,t)?l[t]:35===t.charCodeAt(0)&&a.test(t)&&n(s="x"===t[1].toLowerCase()?parseInt(t.slice(2),16):parseInt(t.slice(1),10))?i(s):e}(e,s)}))},e.isValidEntityCode=n,e.fromCodePoint=i,e.escapeHtml=function(e){return c.test(e)?e.replace(u,d):e},e.arrayReplaceAt=function(e,t,r){return[].concat(e.slice(0,t),r,e.slice(t+1))},e.isSpace=function(e){switch(e){case 9:case 32:return!0}return!1},e.isWhiteSpace=function(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1},e.isMdAsciiPunct=function(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}},e.isPunctChar=function(e){return f.test(e)},e.escapeRE=function(e){return e.replace(p,"\\$&")},e.normalizeReference=function(e){return e=e.trim().replace(/\s+/g," "),"Ṿ"==="ẞ".toLowerCase()&&(e=e.replace(/ẞ/g,"ß")),e.toLowerCase().toUpperCase()}}(Wr);var Dn={},zn=Wr.unescapeAll,In=Wr.unescapeAll;Dn.parseLinkLabel=function(e,t,r){var n,i,s,o,a=-1,l=e.posMax,c=e.pos;for(e.pos=t+1,n=1;e.pos<l;){if(93===(s=e.src.charCodeAt(e.pos))&&0===--n){i=!0;break}if(o=e.pos,e.md.inline.skipToken(e),91===s)if(o===e.pos-1)n++;else if(r)return e.pos=c,-1}return i&&(a=e.pos),e.pos=c,a},Dn.parseLinkDestination=function(e,t,r){var n,i,s=t,o={ok:!1,pos:0,lines:0,str:""};if(60===e.charCodeAt(s)){for(s++;s<r;){if(10===(n=e.charCodeAt(s)))return o;if(60===n)return o;if(62===n)return o.pos=s+1,o.str=zn(e.slice(t+1,s)),o.ok=!0,o;92===n&&s+1<r?s+=2:s++}return o}for(i=0;s<r&&32!==(n=e.charCodeAt(s))&&!(n<32||127===n);)if(92===n&&s+1<r){if(32===e.charCodeAt(s+1))break;s+=2}else{if(40===n&&++i>32)return o;if(41===n){if(0===i)break;i--}s++}return t===s||0!==i||(o.str=zn(e.slice(t,s)),o.pos=s,o.ok=!0),o},Dn.parseLinkTitle=function(e,t,r){var n,i,s=0,o=t,a={ok:!1,pos:0,lines:0,str:""};if(o>=r)return a;if(34!==(i=e.charCodeAt(o))&&39!==i&&40!==i)return a;for(o++,40===i&&(i=41);o<r;){if((n=e.charCodeAt(o))===i)return a.pos=o+1,a.lines=s,a.str=In(e.slice(t+1,o)),a.ok=!0,a;if(40===n&&41===i)return a;10===n?s++:92===n&&o+1<r&&(o++,10===e.charCodeAt(o)&&s++),o++}return a};var Tn=Wr.assign,Ln=Wr.unescapeAll,Fn=Wr.escapeHtml,qn={};function Mn(){this.rules=Tn({},qn)}qn.code_inline=function(e,t,r,n,i){var s=e[t];return"<code"+i.renderAttrs(s)+">"+Fn(s.content)+"</code>"},qn.code_block=function(e,t,r,n,i){var s=e[t];return"<pre"+i.renderAttrs(s)+"><code>"+Fn(e[t].content)+"</code></pre>\n"},qn.fence=function(e,t,r,n,i){var s,o,a,l,c,u=e[t],h=u.info?Ln(u.info).trim():"",d="",p="";return h&&(d=(a=h.split(/(\s+)/g))[0],p=a.slice(2).join("")),0===(s=r.highlight&&r.highlight(u.content,d,p)||Fn(u.content)).indexOf("<pre")?s+"\n":h?(o=u.attrIndex("class"),l=u.attrs?u.attrs.slice():[],o<0?l.push(["class",r.langPrefix+d]):(l[o]=l[o].slice(),l[o][1]+=" "+r.langPrefix+d),c={attrs:l},"<pre><code"+i.renderAttrs(c)+">"+s+"</code></pre>\n"):"<pre><code"+i.renderAttrs(u)+">"+s+"</code></pre>\n"},qn.image=function(e,t,r,n,i){var s=e[t];return s.attrs[s.attrIndex("alt")][1]=i.renderInlineAsText(s.children,r,n),i.renderToken(e,t,r)},qn.hardbreak=function(e,t,r){return r.xhtmlOut?"<br />\n":"<br>\n"},qn.softbreak=function(e,t,r){return r.breaks?r.xhtmlOut?"<br />\n":"<br>\n":"\n"},qn.text=function(e,t){return Fn(e[t].content)},qn.html_block=function(e,t){return e[t].content},qn.html_inline=function(e,t){return e[t].content},Mn.prototype.renderAttrs=function(e){var t,r,n;if(!e.attrs)return"";for(n="",t=0,r=e.attrs.length;t<r;t++)n+=" "+Fn(e.attrs[t][0])+'="'+Fn(e.attrs[t][1])+'"';return n},Mn.prototype.renderToken=function(e,t,r){var n,i="",s=!1,o=e[t];return o.hidden?"":(o.block&&-1!==o.nesting&&t&&e[t-1].hidden&&(i+="\n"),i+=(-1===o.nesting?"</":"<")+o.tag,i+=this.renderAttrs(o),0===o.nesting&&r.xhtmlOut&&(i+=" /"),o.block&&(s=!0,1===o.nesting&&t+1<e.length&&("inline"===(n=e[t+1]).type||n.hidden||-1===n.nesting&&n.tag===o.tag)&&(s=!1)),i+=s?">\n":">")},Mn.prototype.renderInline=function(e,t,r){for(var n,i="",s=this.rules,o=0,a=e.length;o<a;o++)void 0!==s[n=e[o].type]?i+=s[n](e,o,t,r,this):i+=this.renderToken(e,o,t);return i},Mn.prototype.renderInlineAsText=function(e,t,r){for(var n="",i=0,s=e.length;i<s;i++)"text"===e[i].type?n+=e[i].content:"image"===e[i].type?n+=this.renderInlineAsText(e[i].children,t,r):"softbreak"===e[i].type&&(n+="\n");return n},Mn.prototype.render=function(e,t,r){var n,i,s,o="",a=this.rules;for(n=0,i=e.length;n<i;n++)"inline"===(s=e[n].type)?o+=this.renderInline(e[n].children,t,r):void 0!==a[s]?o+=a[s](e,n,t,r,this):o+=this.renderToken(e,n,t,r);return o};var On=Mn;function Rn(){this.__rules__=[],this.__cache__=null}Rn.prototype.__find__=function(e){for(var t=0;t<this.__rules__.length;t++)if(this.__rules__[t].name===e)return t;return-1},Rn.prototype.__compile__=function(){var e=this,t=[""];e.__rules__.forEach((function(e){e.enabled&&e.alt.forEach((function(e){t.indexOf(e)<0&&t.push(e)}))})),e.__cache__={},t.forEach((function(t){e.__cache__[t]=[],e.__rules__.forEach((function(r){r.enabled&&(t&&r.alt.indexOf(t)<0||e.__cache__[t].push(r.fn))}))}))},Rn.prototype.at=function(e,t,r){var n=this.__find__(e),i=r||{};if(-1===n)throw new Error("Parser rule not found: "+e);this.__rules__[n].fn=t,this.__rules__[n].alt=i.alt||[],this.__cache__=null},Rn.prototype.before=function(e,t,r,n){var i=this.__find__(e),s=n||{};if(-1===i)throw new Error("Parser rule not found: "+e);this.__rules__.splice(i,0,{name:t,enabled:!0,fn:r,alt:s.alt||[]}),this.__cache__=null},Rn.prototype.after=function(e,t,r,n){var i=this.__find__(e),s=n||{};if(-1===i)throw new Error("Parser rule not found: "+e);this.__rules__.splice(i+1,0,{name:t,enabled:!0,fn:r,alt:s.alt||[]}),this.__cache__=null},Rn.prototype.push=function(e,t,r){var n=r||{};this.__rules__.push({name:e,enabled:!0,fn:t,alt:n.alt||[]}),this.__cache__=null},Rn.prototype.enable=function(e,t){Array.isArray(e)||(e=[e]);var r=[];return e.forEach((function(e){var n=this.__find__(e);if(n<0){if(t)return;throw new Error("Rules manager: invalid rule name "+e)}this.__rules__[n].enabled=!0,r.push(e)}),this),this.__cache__=null,r},Rn.prototype.enableOnly=function(e,t){Array.isArray(e)||(e=[e]),this.__rules__.forEach((function(e){e.enabled=!1})),this.enable(e,t)},Rn.prototype.disable=function(e,t){Array.isArray(e)||(e=[e]);var r=[];return e.forEach((function(e){var n=this.__find__(e);if(n<0){if(t)return;throw new Error("Rules manager: invalid rule name "+e)}this.__rules__[n].enabled=!1,r.push(e)}),this),this.__cache__=null,r},Rn.prototype.getRules=function(e){return null===this.__cache__&&this.__compile__(),this.__cache__[e]||[]};var Bn=Rn,Nn=/\r\n?|\n/g,jn=/\0/g,Pn=Wr.arrayReplaceAt;function Hn(e){return/^<\/a\s*>/i.test(e)}var Un=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,Wn=/\((c|tm|r)\)/i,Vn=/\((c|tm|r)\)/gi,Gn={c:"©",r:"®",tm:"™"};function $n(e,t){return Gn[t.toLowerCase()]}function Zn(e){var t,r,n=0;for(t=e.length-1;t>=0;t--)"text"!==(r=e[t]).type||n||(r.content=r.content.replace(Vn,$n)),"link_open"===r.type&&"auto"===r.info&&n--,"link_close"===r.type&&"auto"===r.info&&n++}function Kn(e){var t,r,n=0;for(t=e.length-1;t>=0;t--)"text"!==(r=e[t]).type||n||Un.test(r.content)&&(r.content=r.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/gm,"$1—").replace(/(^|\s)--(?=\s|$)/gm,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/gm,"$1–")),"link_open"===r.type&&"auto"===r.info&&n--,"link_close"===r.type&&"auto"===r.info&&n++}var Jn=Wr.isWhiteSpace,Yn=Wr.isPunctChar,Xn=Wr.isMdAsciiPunct,Qn=/['"]/,ei=/['"]/g;function ti(e,t,r){return e.slice(0,t)+r+e.slice(t+1)}function ri(e,t){var r,n,i,s,o,a,l,c,u,h,d,p,f,m,g,_,v,k,b,y,w;for(b=[],r=0;r<e.length;r++){for(n=e[r],l=e[r].level,v=b.length-1;v>=0&&!(b[v].level<=l);v--);if(b.length=v+1,"text"===n.type){o=0,a=(i=n.content).length;e:for(;o<a&&(ei.lastIndex=o,s=ei.exec(i));){if(g=_=!0,o=s.index+1,k="'"===s[0],u=32,s.index-1>=0)u=i.charCodeAt(s.index-1);else for(v=r-1;v>=0&&("softbreak"!==e[v].type&&"hardbreak"!==e[v].type);v--)if(e[v].content){u=e[v].content.charCodeAt(e[v].content.length-1);break}if(h=32,o<a)h=i.charCodeAt(o);else for(v=r+1;v<e.length&&("softbreak"!==e[v].type&&"hardbreak"!==e[v].type);v++)if(e[v].content){h=e[v].content.charCodeAt(0);break}if(d=Xn(u)||Yn(String.fromCharCode(u)),p=Xn(h)||Yn(String.fromCharCode(h)),f=Jn(u),(m=Jn(h))?g=!1:p&&(f||d||(g=!1)),f?_=!1:d&&(m||p||(_=!1)),34===h&&'"'===s[0]&&u>=48&&u<=57&&(_=g=!1),g&&_&&(g=d,_=p),g||_){if(_)for(v=b.length-1;v>=0&&(c=b[v],!(b[v].level<l));v--)if(c.single===k&&b[v].level===l){c=b[v],k?(y=t.md.options.quotes[2],w=t.md.options.quotes[3]):(y=t.md.options.quotes[0],w=t.md.options.quotes[1]),n.content=ti(n.content,s.index,w),e[c.token].content=ti(e[c.token].content,c.pos,y),o+=w.length-1,c.token===r&&(o+=y.length-1),a=(i=n.content).length,b.length=v;continue e}g?b.push({token:r,pos:s.index,single:k,level:l}):_&&k&&(n.content=ti(n.content,s.index,"’"))}else k&&(n.content=ti(n.content,s.index,"’"))}}}}function ni(e,t,r){this.type=e,this.tag=t,this.attrs=null,this.map=null,this.nesting=r,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}ni.prototype.attrIndex=function(e){var t,r,n;if(!this.attrs)return-1;for(r=0,n=(t=this.attrs).length;r<n;r++)if(t[r][0]===e)return r;return-1},ni.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e]},ni.prototype.attrSet=function(e,t){var r=this.attrIndex(e),n=[e,t];r<0?this.attrPush(n):this.attrs[r]=n},ni.prototype.attrGet=function(e){var t=this.attrIndex(e),r=null;return t>=0&&(r=this.attrs[t][1]),r},ni.prototype.attrJoin=function(e,t){var r=this.attrIndex(e);r<0?this.attrPush([e,t]):this.attrs[r][1]=this.attrs[r][1]+" "+t};var ii=ni,si=ii;function oi(e,t,r){this.src=e,this.env=r,this.tokens=[],this.inlineMode=!1,this.md=t}oi.prototype.Token=si;var ai=oi,li=Bn,ci=[["normalize",function(e){var t;t=(t=e.src.replace(Nn,"\n")).replace(jn,"�"),e.src=t}],["block",function(e){var t;e.inlineMode?((t=new e.Token("inline","",0)).content=e.src,t.map=[0,1],t.children=[],e.tokens.push(t)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}],["inline",function(e){var t,r,n,i=e.tokens;for(r=0,n=i.length;r<n;r++)"inline"===(t=i[r]).type&&e.md.inline.parse(t.content,e.md,e.env,t.children)}],["linkify",function(e){var t,r,n,i,s,o,a,l,c,u,h,d,p,f,m,g,_,v,k=e.tokens;if(e.md.options.linkify)for(r=0,n=k.length;r<n;r++)if("inline"===k[r].type&&e.md.linkify.pretest(k[r].content))for(p=0,t=(i=k[r].children).length-1;t>=0;t--)if("link_close"!==(o=i[t]).type){if("html_inline"===o.type&&(v=o.content,/^<a[>\s]/i.test(v)&&p>0&&p--,Hn(o.content)&&p++),!(p>0)&&"text"===o.type&&e.md.linkify.test(o.content)){for(c=o.content,_=e.md.linkify.match(c),a=[],d=o.level,h=0,_.length>0&&0===_[0].index&&t>0&&"text_special"===i[t-1].type&&(_=_.slice(1)),l=0;l<_.length;l++)f=_[l].url,m=e.md.normalizeLink(f),e.md.validateLink(m)&&(g=_[l].text,g=_[l].schema?"mailto:"!==_[l].schema||/^mailto:/i.test(g)?e.md.normalizeLinkText(g):e.md.normalizeLinkText("mailto:"+g).replace(/^mailto:/,""):e.md.normalizeLinkText("http://"+g).replace(/^http:\/\//,""),(u=_[l].index)>h&&((s=new e.Token("text","",0)).content=c.slice(h,u),s.level=d,a.push(s)),(s=new e.Token("link_open","a",1)).attrs=[["href",m]],s.level=d++,s.markup="linkify",s.info="auto",a.push(s),(s=new e.Token("text","",0)).content=g,s.level=d,a.push(s),(s=new e.Token("link_close","a",-1)).level=--d,s.markup="linkify",s.info="auto",a.push(s),h=_[l].lastIndex);h<c.length&&((s=new e.Token("text","",0)).content=c.slice(h),s.level=d,a.push(s)),k[r].children=i=Pn(i,t,a)}}else for(t--;i[t].level!==o.level&&"link_open"!==i[t].type;)t--}],["replacements",function(e){var t;if(e.md.options.typographer)for(t=e.tokens.length-1;t>=0;t--)"inline"===e.tokens[t].type&&(Wn.test(e.tokens[t].content)&&Zn(e.tokens[t].children),Un.test(e.tokens[t].content)&&Kn(e.tokens[t].children))}],["smartquotes",function(e){var t;if(e.md.options.typographer)for(t=e.tokens.length-1;t>=0;t--)"inline"===e.tokens[t].type&&Qn.test(e.tokens[t].content)&&ri(e.tokens[t].children,e)}],
// `text_join` finds `text_special` tokens (for escape sequences)
// and joins them with the rest of the text
["text_join",function(e){var t,r,n,i,s,o,a=e.tokens;for(t=0,r=a.length;t<r;t++)if("inline"===a[t].type){for(s=(n=a[t].children).length,i=0;i<s;i++)"text_special"===n[i].type&&(n[i].type="text");for(i=o=0;i<s;i++)"text"===n[i].type&&i+1<s&&"text"===n[i+1].type?n[i+1].content=n[i].content+n[i+1].content:(i!==o&&(n[o]=n[i]),o++);i!==o&&(n.length=o)}}]];function ui(){this.ruler=new li;for(var e=0;e<ci.length;e++)this.ruler.push(ci[e][0],ci[e][1])}ui.prototype.process=function(e){var t,r,n;for(t=0,r=(n=this.ruler.getRules("")).length;t<r;t++)n[t](e)},ui.prototype.State=ai;var hi=ui,di=Wr.isSpace;function pi(e,t){var r=e.bMarks[t]+e.tShift[t],n=e.eMarks[t];return e.src.slice(r,n)}function fi(e){var t,r=[],n=0,i=e.length,s=!1,o=0,a="";for(t=e.charCodeAt(n);n<i;)124===t&&(s?(a+=e.substring(o,n-1),o=n):(r.push(a+e.substring(o,n)),a="",o=n+1)),s=92===t,n++,t=e.charCodeAt(n);return r.push(a+e.substring(o)),r}var mi=Wr.isSpace,gi=Wr.isSpace,_i=Wr.isSpace;function vi(e,t){var r,n,i,s;return n=e.bMarks[t]+e.tShift[t],i=e.eMarks[t],42!==(r=e.src.charCodeAt(n++))&&45!==r&&43!==r||n<i&&(s=e.src.charCodeAt(n),!_i(s))?-1:n}function ki(e,t){var r,n=e.bMarks[t]+e.tShift[t],i=n,s=e.eMarks[t];if(i+1>=s)return-1;if((r=e.src.charCodeAt(i++))<48||r>57)return-1;for(;;){if(i>=s)return-1;if(!((r=e.src.charCodeAt(i++))>=48&&r<=57)){if(41===r||46===r)break;return-1}if(i-n>=10)return-1}return i<s&&(r=e.src.charCodeAt(i),!_i(r))?-1:i}var bi=Wr.normalizeReference,yi=Wr.isSpace,wi={},xi="<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\x00-\\x20]+|'[^']*'|\"[^\"]*\"))?)*\\s*\\/?>",Ci="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",Ai=new RegExp("^(?:"+xi+"|"+Ci+"|\x3c!----\x3e|\x3c!--(?:-?[^>-])(?:-?[^-])*--\x3e|<[?][\\s\\S]*?[?]>|<![A-Z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)"),Si=new RegExp("^(?:"+xi+"|"+Ci+")");wi.HTML_TAG_RE=Ai,wi.HTML_OPEN_CLOSE_TAG_RE=Si;var Ei=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","section","source","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Di=wi.HTML_OPEN_CLOSE_TAG_RE,zi=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+Ei.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(Di.source+"\\s*$"),/^$/,!1]],Ii=Wr.isSpace,Ti=ii,Li=Wr.isSpace;function Fi(e,t,r,n){var i,s,o,a,l,c,u,h;for(this.src=e,this.md=t,this.env=r,this.tokens=n,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0,this.result="",h=!1,o=a=c=u=0,l=(s=this.src).length;a<l;a++){if(i=s.charCodeAt(a),!h){if(Li(i)){c++,9===i?u+=4-u%4:u++;continue}h=!0}10!==i&&a!==l-1||(10!==i&&a++,this.bMarks.push(o),this.eMarks.push(a),this.tShift.push(c),this.sCount.push(u),this.bsCount.push(0),h=!1,c=0,u=0,o=a+1)}this.bMarks.push(s.length),this.eMarks.push(s.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}Fi.prototype.push=function(e,t,r){var n=new Ti(e,t,r);return n.block=!0,r<0&&this.level--,n.level=this.level,r>0&&this.level++,this.tokens.push(n),n},Fi.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]},Fi.prototype.skipEmptyLines=function(e){for(var t=this.lineMax;e<t&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e},Fi.prototype.skipSpaces=function(e){for(var t,r=this.src.length;e<r&&(t=this.src.charCodeAt(e),Li(t));e++);return e},Fi.prototype.skipSpacesBack=function(e,t){if(e<=t)return e;for(;e>t;)if(!Li(this.src.charCodeAt(--e)))return e+1;return e},Fi.prototype.skipChars=function(e,t){for(var r=this.src.length;e<r&&this.src.charCodeAt(e)===t;e++);return e},Fi.prototype.skipCharsBack=function(e,t,r){if(e<=r)return e;for(;e>r;)if(t!==this.src.charCodeAt(--e))return e+1;return e},Fi.prototype.getLines=function(e,t,r,n){var i,s,o,a,l,c,u,h=e;if(e>=t)return"";for(c=new Array(t-e),i=0;h<t;h++,i++){for(s=0,u=a=this.bMarks[h],l=h+1<t||n?this.eMarks[h]+1:this.eMarks[h];a<l&&s<r;){if(o=this.src.charCodeAt(a),Li(o))9===o?s+=4-(s+this.bsCount[h])%4:s++;else{if(!(a-u<this.tShift[h]))break;s++}a++}c[i]=s>r?new Array(s-r+1).join(" ")+this.src.slice(a,l):this.src.slice(a,l)}return c.join("")},Fi.prototype.Token=Ti;var qi=Fi,Mi=Bn,Oi=[
// First 2 params - rule name & source. Secondary array - list of rules,
// which can be terminated by this one.
["table",function(e,t,r,n){var i,s,o,a,l,c,u,h,d,p,f,m,g,_,v,k,b,y;if(t+2>r)return!1;if(c=t+1,e.sCount[c]<e.blkIndent)return!1;if(e.sCount[c]-e.blkIndent>=4)return!1;if((o=e.bMarks[c]+e.tShift[c])>=e.eMarks[c])return!1;if(124!==(b=e.src.charCodeAt(o++))&&45!==b&&58!==b)return!1;if(o>=e.eMarks[c])return!1;if(124!==(y=e.src.charCodeAt(o++))&&45!==y&&58!==y&&!di(y))return!1;if(45===b&&di(y))return!1;for(;o<e.eMarks[c];){if(124!==(i=e.src.charCodeAt(o))&&45!==i&&58!==i&&!di(i))return!1;o++}for(u=(s=pi(e,t+1)).split("|"),p=[],a=0;a<u.length;a++){if(!(f=u[a].trim())){if(0===a||a===u.length-1)continue;return!1}if(!/^:?-+:?$/.test(f))return!1;58===f.charCodeAt(f.length-1)?p.push(58===f.charCodeAt(0)?"center":"right"):58===f.charCodeAt(0)?p.push("left"):p.push("")}if(-1===(s=pi(e,t).trim()).indexOf("|"))return!1;if(e.sCount[t]-e.blkIndent>=4)return!1;if((u=fi(s)).length&&""===u[0]&&u.shift(),u.length&&""===u[u.length-1]&&u.pop(),0===(h=u.length)||h!==p.length)return!1;if(n)return!0;for(_=e.parentType,e.parentType="table",k=e.md.block.ruler.getRules("blockquote"),(d=e.push("table_open","table",1)).map=m=[t,0],(d=e.push("thead_open","thead",1)).map=[t,t+1],(d=e.push("tr_open","tr",1)).map=[t,t+1],a=0;a<u.length;a++)d=e.push("th_open","th",1),p[a]&&(d.attrs=[["style","text-align:"+p[a]]]),(d=e.push("inline","",0)).content=u[a].trim(),d.children=[],d=e.push("th_close","th",-1);for(d=e.push("tr_close","tr",-1),d=e.push("thead_close","thead",-1),c=t+2;c<r&&!(e.sCount[c]<e.blkIndent);c++){for(v=!1,a=0,l=k.length;a<l;a++)if(k[a](e,c,r,!0)){v=!0;break}if(v)break;if(!(s=pi(e,c).trim()))break;if(e.sCount[c]-e.blkIndent>=4)break;for((u=fi(s)).length&&""===u[0]&&u.shift(),u.length&&""===u[u.length-1]&&u.pop(),c===t+2&&((d=e.push("tbody_open","tbody",1)).map=g=[t+2,0]),(d=e.push("tr_open","tr",1)).map=[c,c+1],a=0;a<h;a++)d=e.push("td_open","td",1),p[a]&&(d.attrs=[["style","text-align:"+p[a]]]),(d=e.push("inline","",0)).content=u[a]?u[a].trim():"",d.children=[],d=e.push("td_close","td",-1);d=e.push("tr_close","tr",-1)}return g&&(d=e.push("tbody_close","tbody",-1),g[1]=c),d=e.push("table_close","table",-1),m[1]=c,e.parentType=_,e.line=c,!0},["paragraph","reference"]],["code",function(e,t,r){var n,i,s;if(e.sCount[t]-e.blkIndent<4)return!1;for(i=n=t+1;n<r;)if(e.isEmpty(n))n++;else{if(!(e.sCount[n]-e.blkIndent>=4))break;i=++n}return e.line=i,(s=e.push("code_block","code",0)).content=e.getLines(t,i,4+e.blkIndent,!1)+"\n",s.map=[t,e.line],!0}],["fence",function(e,t,r,n){var i,s,o,a,l,c,u,h=!1,d=e.bMarks[t]+e.tShift[t],p=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;if(d+3>p)return!1;if(126!==(i=e.src.charCodeAt(d))&&96!==i)return!1;if(l=d,(s=(d=e.skipChars(d,i))-l)<3)return!1;if(u=e.src.slice(l,d),o=e.src.slice(d,p),96===i&&o.indexOf(String.fromCharCode(i))>=0)return!1;if(n)return!0;for(a=t;!(++a>=r)&&!((d=l=e.bMarks[a]+e.tShift[a])<(p=e.eMarks[a])&&e.sCount[a]<e.blkIndent);)if(e.src.charCodeAt(d)===i&&!(e.sCount[a]-e.blkIndent>=4||(d=e.skipChars(d,i))-l<s||(d=e.skipSpaces(d))<p)){h=!0;break}return s=e.sCount[t],e.line=a+(h?1:0),(c=e.push("fence","code",0)).info=o,c.content=e.getLines(t+1,a,s,!0),c.markup=u,c.map=[t,e.line],!0},["paragraph","reference","blockquote","list"]],["blockquote",function(e,t,r,n){var i,s,o,a,l,c,u,h,d,p,f,m,g,_,v,k,b,y,w,x,C=e.lineMax,A=e.bMarks[t]+e.tShift[t],S=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;if(62!==e.src.charCodeAt(A))return!1;if(n)return!0;for(p=[],f=[],_=[],v=[],y=e.md.block.ruler.getRules("blockquote"),g=e.parentType,e.parentType="blockquote",h=t;h<r&&(x=e.sCount[h]<e.blkIndent,!((A=e.bMarks[h]+e.tShift[h])>=(S=e.eMarks[h])));h++)if(62!==e.src.charCodeAt(A++)||x){if(c)break;for(b=!1,o=0,l=y.length;o<l;o++)if(y[o](e,h,r,!0)){b=!0;break}if(b){e.lineMax=h,0!==e.blkIndent&&(p.push(e.bMarks[h]),f.push(e.bsCount[h]),v.push(e.tShift[h]),_.push(e.sCount[h]),e.sCount[h]-=e.blkIndent);break}p.push(e.bMarks[h]),f.push(e.bsCount[h]),v.push(e.tShift[h]),_.push(e.sCount[h]),e.sCount[h]=-1}else{for(a=e.sCount[h]+1,32===e.src.charCodeAt(A)?(A++,a++,i=!1,k=!0):9===e.src.charCodeAt(A)?(k=!0,(e.bsCount[h]+a)%4==3?(A++,a++,i=!1):i=!0):k=!1,d=a,p.push(e.bMarks[h]),e.bMarks[h]=A;A<S&&(s=e.src.charCodeAt(A),mi(s));)9===s?d+=4-(d+e.bsCount[h]+(i?1:0))%4:d++,A++;c=A>=S,f.push(e.bsCount[h]),e.bsCount[h]=e.sCount[h]+1+(k?1:0),_.push(e.sCount[h]),e.sCount[h]=d-a,v.push(e.tShift[h]),e.tShift[h]=A-e.bMarks[h]}for(m=e.blkIndent,e.blkIndent=0,(w=e.push("blockquote_open","blockquote",1)).markup=">",w.map=u=[t,0],e.md.block.tokenize(e,t,h),(w=e.push("blockquote_close","blockquote",-1)).markup=">",e.lineMax=C,e.parentType=g,u[1]=e.line,o=0;o<v.length;o++)e.bMarks[o+t]=p[o],e.tShift[o+t]=v[o],e.sCount[o+t]=_[o],e.bsCount[o+t]=f[o];return e.blkIndent=m,!0},["paragraph","reference","blockquote","list"]],["hr",function(e,t,r,n){var i,s,o,a,l=e.bMarks[t]+e.tShift[t],c=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;if(42!==(i=e.src.charCodeAt(l++))&&45!==i&&95!==i)return!1;for(s=1;l<c;){if((o=e.src.charCodeAt(l++))!==i&&!gi(o))return!1;o===i&&s++}return!(s<3)&&(n||(e.line=t+1,(a=e.push("hr","hr",0)).map=[t,e.line],a.markup=Array(s+1).join(String.fromCharCode(i))),!0)},["paragraph","reference","blockquote","list"]],["list",function(e,t,r,n){var i,s,o,a,l,c,u,h,d,p,f,m,g,_,v,k,b,y,w,x,C,A,S,E,D,z,I,T=t,L=!1,F=!0;if(e.sCount[T]-e.blkIndent>=4)return!1;if(e.listIndent>=0&&e.sCount[T]-e.listIndent>=4&&e.sCount[T]<e.blkIndent)return!1;if(n&&"paragraph"===e.parentType&&e.sCount[T]>=e.blkIndent&&(L=!0),(A=ki(e,T))>=0){if(u=!0,E=e.bMarks[T]+e.tShift[T],g=Number(e.src.slice(E,A-1)),L&&1!==g)return!1}else{if(!((A=vi(e,T))>=0))return!1;u=!1}if(L&&e.skipSpaces(A)>=e.eMarks[T])return!1;if(n)return!0;for(m=e.src.charCodeAt(A-1),f=e.tokens.length,u?(I=e.push("ordered_list_open","ol",1),1!==g&&(I.attrs=[["start",g]])):I=e.push("bullet_list_open","ul",1),I.map=p=[T,0],I.markup=String.fromCharCode(m),S=!1,z=e.md.block.ruler.getRules("list"),b=e.parentType,e.parentType="list";T<r;){for(C=A,_=e.eMarks[T],c=v=e.sCount[T]+A-(e.bMarks[T]+e.tShift[T]);C<_;){if(9===(i=e.src.charCodeAt(C)))v+=4-(v+e.bsCount[T])%4;else{if(32!==i)break;v++}C++}if((l=(s=C)>=_?1:v-c)>4&&(l=1),a=c+l,(I=e.push("list_item_open","li",1)).markup=String.fromCharCode(m),I.map=h=[T,0],u&&(I.info=e.src.slice(E,A-1)),x=e.tight,w=e.tShift[T],y=e.sCount[T],k=e.listIndent,e.listIndent=e.blkIndent,e.blkIndent=a,e.tight=!0,e.tShift[T]=s-e.bMarks[T],e.sCount[T]=v,s>=_&&e.isEmpty(T+1)?e.line=Math.min(e.line+2,r):e.md.block.tokenize(e,T,r,!0),e.tight&&!S||(F=!1),S=e.line-T>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=k,e.tShift[T]=w,e.sCount[T]=y,e.tight=x,(I=e.push("list_item_close","li",-1)).markup=String.fromCharCode(m),T=e.line,h[1]=T,T>=r)break;if(e.sCount[T]<e.blkIndent)break;if(e.sCount[T]-e.blkIndent>=4)break;for(D=!1,o=0,d=z.length;o<d;o++)if(z[o](e,T,r,!0)){D=!0;break}if(D)break;if(u){if((A=ki(e,T))<0)break;E=e.bMarks[T]+e.tShift[T]}else if((A=vi(e,T))<0)break;if(m!==e.src.charCodeAt(A-1))break}return(I=u?e.push("ordered_list_close","ol",-1):e.push("bullet_list_close","ul",-1)).markup=String.fromCharCode(m),p[1]=T,e.line=T,e.parentType=b,F&&function(e,t){var r,n,i=e.level+2;for(r=t+2,n=e.tokens.length-2;r<n;r++)e.tokens[r].level===i&&"paragraph_open"===e.tokens[r].type&&(e.tokens[r+2].hidden=!0,e.tokens[r].hidden=!0,r+=2)}(e,f),!0},["paragraph","reference","blockquote"]],["reference",function(e,t,r,n){var i,s,o,a,l,c,u,h,d,p,f,m,g,_,v,k,b=0,y=e.bMarks[t]+e.tShift[t],w=e.eMarks[t],x=t+1;if(e.sCount[t]-e.blkIndent>=4)return!1;if(91!==e.src.charCodeAt(y))return!1;for(;++y<w;)if(93===e.src.charCodeAt(y)&&92!==e.src.charCodeAt(y-1)){if(y+1===w)return!1;if(58!==e.src.charCodeAt(y+1))return!1;break}for(a=e.lineMax,v=e.md.block.ruler.getRules("reference"),p=e.parentType,e.parentType="reference";x<a&&!e.isEmpty(x);x++)if(!(e.sCount[x]-e.blkIndent>3||e.sCount[x]<0)){for(_=!1,c=0,u=v.length;c<u;c++)if(v[c](e,x,a,!0)){_=!0;break}if(_)break}for(w=(g=e.getLines(t,x,e.blkIndent,!1).trim()).length,y=1;y<w;y++){if(91===(i=g.charCodeAt(y)))return!1;if(93===i){d=y;break}(10===i||92===i&&++y<w&&10===g.charCodeAt(y))&&b++}if(d<0||58!==g.charCodeAt(d+1))return!1;for(y=d+2;y<w;y++)if(10===(i=g.charCodeAt(y)))b++;else if(!yi(i))break;if(!(f=e.md.helpers.parseLinkDestination(g,y,w)).ok)return!1;if(l=e.md.normalizeLink(f.str),!e.md.validateLink(l))return!1;for(s=y=f.pos,o=b+=f.lines,m=y;y<w;y++)if(10===(i=g.charCodeAt(y)))b++;else if(!yi(i))break;for(f=e.md.helpers.parseLinkTitle(g,y,w),y<w&&m!==y&&f.ok?(k=f.str,y=f.pos,b+=f.lines):(k="",y=s,b=o);y<w&&(i=g.charCodeAt(y),yi(i));)y++;if(y<w&&10!==g.charCodeAt(y)&&k)for(k="",y=s,b=o;y<w&&(i=g.charCodeAt(y),yi(i));)y++;return!(y<w&&10!==g.charCodeAt(y))&&(!!(h=bi(g.slice(1,d)))&&(n||(void 0===e.env.references&&(e.env.references={}),void 0===e.env.references[h]&&(e.env.references[h]={title:k,href:l}),e.parentType=p,e.line=t+b+1),!0))}],["html_block",function(e,t,r,n){var i,s,o,a,l=e.bMarks[t]+e.tShift[t],c=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;if(!e.md.options.html)return!1;if(60!==e.src.charCodeAt(l))return!1;for(a=e.src.slice(l,c),i=0;i<zi.length&&!zi[i][0].test(a);i++);if(i===zi.length)return!1;if(n)return zi[i][2];if(s=t+1,!zi[i][1].test(a))for(;s<r&&!(e.sCount[s]<e.blkIndent);s++)if(l=e.bMarks[s]+e.tShift[s],c=e.eMarks[s],a=e.src.slice(l,c),zi[i][1].test(a)){0!==a.length&&s++;break}return e.line=s,(o=e.push("html_block","",0)).map=[t,s],o.content=e.getLines(t,s,e.blkIndent,!0),!0},["paragraph","reference","blockquote"]],["heading",function(e,t,r,n){var i,s,o,a,l=e.bMarks[t]+e.tShift[t],c=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;if(35!==(i=e.src.charCodeAt(l))||l>=c)return!1;for(s=1,i=e.src.charCodeAt(++l);35===i&&l<c&&s<=6;)s++,i=e.src.charCodeAt(++l);return!(s>6||l<c&&!Ii(i))&&(n||(c=e.skipSpacesBack(c,l),(o=e.skipCharsBack(c,35,l))>l&&Ii(e.src.charCodeAt(o-1))&&(c=o),e.line=t+1,(a=e.push("heading_open","h"+String(s),1)).markup="########".slice(0,s),a.map=[t,e.line],(a=e.push("inline","",0)).content=e.src.slice(l,c).trim(),a.map=[t,e.line],a.children=[],(a=e.push("heading_close","h"+String(s),-1)).markup="########".slice(0,s)),!0)},["paragraph","reference","blockquote"]],["lheading",function(e,t,r){var n,i,s,o,a,l,c,u,h,d,p=t+1,f=e.md.block.ruler.getRules("paragraph");if(e.sCount[t]-e.blkIndent>=4)return!1;for(d=e.parentType,e.parentType="paragraph";p<r&&!e.isEmpty(p);p++)if(!(e.sCount[p]-e.blkIndent>3)){if(e.sCount[p]>=e.blkIndent&&(l=e.bMarks[p]+e.tShift[p])<(c=e.eMarks[p])&&(45===(h=e.src.charCodeAt(l))||61===h)&&(l=e.skipChars(l,h),(l=e.skipSpaces(l))>=c)){u=61===h?1:2;break}if(!(e.sCount[p]<0)){for(i=!1,s=0,o=f.length;s<o;s++)if(f[s](e,p,r,!0)){i=!0;break}if(i)break}}return!!u&&(n=e.getLines(t,p,e.blkIndent,!1).trim(),e.line=p+1,(a=e.push("heading_open","h"+String(u),1)).markup=String.fromCharCode(h),a.map=[t,e.line],(a=e.push("inline","",0)).content=n,a.map=[t,e.line-1],a.children=[],(a=e.push("heading_close","h"+String(u),-1)).markup=String.fromCharCode(h),e.parentType=d,!0)}],["paragraph",function(e,t,r){var n,i,s,o,a,l,c=t+1,u=e.md.block.ruler.getRules("paragraph");for(l=e.parentType,e.parentType="paragraph";c<r&&!e.isEmpty(c);c++)if(!(e.sCount[c]-e.blkIndent>3||e.sCount[c]<0)){for(i=!1,s=0,o=u.length;s<o;s++)if(u[s](e,c,r,!0)){i=!0;break}if(i)break}return n=e.getLines(t,c,e.blkIndent,!1).trim(),e.line=c,(a=e.push("paragraph_open","p",1)).map=[t,e.line],(a=e.push("inline","",0)).content=n,a.map=[t,e.line],a.children=[],a=e.push("paragraph_close","p",-1),e.parentType=l,!0}]];function Ri(){this.ruler=new Mi;for(var e=0;e<Oi.length;e++)this.ruler.push(Oi[e][0],Oi[e][1],{alt:(Oi[e][2]||[]).slice()})}Ri.prototype.tokenize=function(e,t,r){for(var n,i,s,o=this.ruler.getRules(""),a=o.length,l=t,c=!1,u=e.md.options.maxNesting;l<r&&(e.line=l=e.skipEmptyLines(l),!(l>=r))&&!(e.sCount[l]<e.blkIndent);){if(e.level>=u){e.line=r;break}for(s=e.line,i=0;i<a;i++)if(n=o[i](e,l,r,!1)){if(s>=e.line)throw new Error("block rule didn't increment state.line");break}if(!n)throw new Error("none of the block rules matched");e.tight=!c,e.isEmpty(e.line-1)&&(c=!0),(l=e.line)<r&&e.isEmpty(l)&&(c=!0,l++,e.line=l)}},Ri.prototype.parse=function(e,t,r,n){var i;e&&(i=new this.State(e,t,r,n),this.tokenize(i,i.line,i.lineMax))},Ri.prototype.State=qi;var Bi=Ri;function Ni(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}for(var ji=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i,Pi=Wr.isSpace,Hi=Wr.isSpace,Ui=[],Wi=0;Wi<256;Wi++)Ui.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach((function(e){Ui[e.charCodeAt(0)]=1}));var Vi={};function Gi(e,t){var r,n,i,s,o,a=[],l=t.length;for(r=0;r<l;r++)126===(i=t[r]).marker&&-1!==i.end&&(s=t[i.end],(o=e.tokens[i.token]).type="s_open",o.tag="s",o.nesting=1,o.markup="~~",o.content="",(o=e.tokens[s.token]).type="s_close",o.tag="s",o.nesting=-1,o.markup="~~",o.content="","text"===e.tokens[s.token-1].type&&"~"===e.tokens[s.token-1].content&&a.push(s.token-1));for(;a.length;){for(n=(r=a.pop())+1;n<e.tokens.length&&"s_close"===e.tokens[n].type;)n++;r!==--n&&(o=e.tokens[n],e.tokens[n]=e.tokens[r],e.tokens[r]=o)}}Vi.tokenize=function(e,t){var r,n,i,s,o=e.pos,a=e.src.charCodeAt(o);if(t)return!1;if(126!==a)return!1;if(i=(n=e.scanDelims(e.pos,!0)).length,s=String.fromCharCode(a),i<2)return!1;for(i%2&&(e.push("text","",0).content=s,i--),r=0;r<i;r+=2)e.push("text","",0).content=s+s,e.delimiters.push({marker:a,length:0,
// disable "rule of 3" length checks meant for emphasis
token:e.tokens.length-1,end:-1,open:n.can_open,close:n.can_close});return e.pos+=n.length,!0},Vi.postProcess=function(e){var t,r=e.tokens_meta,n=e.tokens_meta.length;for(Gi(e,e.delimiters),t=0;t<n;t++)r[t]&&r[t].delimiters&&Gi(e,r[t].delimiters)};var $i={};function Zi(e,t){var r,n,i,s,o,a;for(r=t.length-1;r>=0;r--)95!==(n=t[r]).marker&&42!==n.marker||-1!==n.end&&(i=t[n.end],a=r>0&&t[r-1].end===n.end+1&&// check that first two markers match and adjacent
t[r-1].marker===n.marker&&t[r-1].token===n.token-1&&// check that last two markers are adjacent (we can safely assume they match)
t[n.end+1].token===i.token+1,o=String.fromCharCode(n.marker),(s=e.tokens[n.token]).type=a?"strong_open":"em_open",s.tag=a?"strong":"em",s.nesting=1,s.markup=a?o+o:o,s.content="",(s=e.tokens[i.token]).type=a?"strong_close":"em_close",s.tag=a?"strong":"em",s.nesting=-1,s.markup=a?o+o:o,s.content="",a&&(e.tokens[t[r-1].token].content="",e.tokens[t[n.end+1].token].content="",r--))}$i.tokenize=function(e,t){var r,n,i=e.pos,s=e.src.charCodeAt(i);if(t)return!1;if(95!==s&&42!==s)return!1;for(n=e.scanDelims(e.pos,42===s),r=0;r<n.length;r++)e.push("text","",0).content=String.fromCharCode(s),e.delimiters.push({
// Char code of the starting marker (number).
marker:s,
// Total length of these series of delimiters.
length:n.length,
// A position of the token this delimiter corresponds to.
token:e.tokens.length-1,
// If this delimiter is matched as a valid opener, `end` will be
// equal to its position, otherwise it's `-1`.
end:-1,
// Boolean flags that determine if this delimiter could open or close
// an emphasis.
open:n.can_open,close:n.can_close});return e.pos+=n.length,!0},$i.postProcess=function(e){var t,r=e.tokens_meta,n=e.tokens_meta.length;for(Zi(e,e.delimiters),t=0;t<n;t++)r[t]&&r[t].delimiters&&Zi(e,r[t].delimiters)};var Ki=Wr.normalizeReference,Ji=Wr.isSpace,Yi=Wr.normalizeReference,Xi=Wr.isSpace,Qi=/^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,es=/^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/,ts=wi.HTML_TAG_RE;var rs=Vr,ns=Wr.has,is=Wr.isValidEntityCode,ss=Wr.fromCodePoint,os=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,as=/^&([a-z][a-z0-9]{1,31});/i;function ls(e){var t,r,n,i,s,o,a,l,c={},u=e.length;if(u){var h=0,d=-2,p=[];for(t=0;t<u;t++)if(n=e[t],p.push(0),e[h].marker===n.marker&&d===n.token-1||(h=t),d=n.token,n.length=n.length||0,n.close){for(c.hasOwnProperty(n.marker)||(c[n.marker]=[-1,-1,-1,-1,-1,-1]),s=c[n.marker][(n.open?3:0)+n.length%3],o=r=h-p[h]-1;r>s;r-=p[r]+1)if((i=e[r]).marker===n.marker&&i.open&&i.end<0&&(a=!1,(i.close||n.open)&&(i.length+n.length)%3==0&&(i.length%3==0&&n.length%3==0||(a=!0)),!a)){l=r>0&&!e[r-1].open?p[r-1]+1:0,p[t]=t-r+l,p[r]=l,n.open=!1,i.end=t,i.close=!1,o=-1,d=-2;break}-1!==o&&(c[n.marker][(n.open?3:0)+(n.length||0)%3]=o)}}}var cs=ii,us=Wr.isWhiteSpace,hs=Wr.isPunctChar,ds=Wr.isMdAsciiPunct;function ps(e,t,r,n){this.src=e,this.env=r,this.md=t,this.tokens=n,this.tokens_meta=Array(n.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}ps.prototype.pushPending=function(){var e=new cs("text","",0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending="",e},ps.prototype.push=function(e,t,r){this.pending&&this.pushPending();var n=new cs(e,t,r),i=null;return r<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),n.level=this.level,r>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],i={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(n),this.tokens_meta.push(i),n},ps.prototype.scanDelims=function(e,t){var r,n,i,s,o,a,l,c,u,h=e,d=!0,p=!0,f=this.posMax,m=this.src.charCodeAt(e);for(r=e>0?this.src.charCodeAt(e-1):32;h<f&&this.src.charCodeAt(h)===m;)h++;return i=h-e,n=h<f?this.src.charCodeAt(h):32,l=ds(r)||hs(String.fromCharCode(r)),u=ds(n)||hs(String.fromCharCode(n)),a=us(r),(c=us(n))?d=!1:u&&(a||l||(d=!1)),a?p=!1:l&&(c||u||(p=!1)),t?(s=d,o=p):(s=d&&(!p||l),o=p&&(!d||u)),{can_open:s,can_close:o,length:i}},ps.prototype.Token=cs;var fs=ps,ms=Bn,gs=[["text",function(e,t){for(var r=e.pos;r<e.posMax&&!Ni(e.src.charCodeAt(r));)r++;return r!==e.pos&&(t||(e.pending+=e.src.slice(e.pos,r)),e.pos=r,!0)}],["linkify",function(e,t){var r,n,i,s,o,a,l;return!!e.md.options.linkify&&(!(e.linkLevel>0)&&(!((r=e.pos)+3>e.posMax)&&(58===e.src.charCodeAt(r)&&(47===e.src.charCodeAt(r+1)&&(47===e.src.charCodeAt(r+2)&&(!!(n=e.pending.match(ji))&&(i=n[1],!!(s=e.md.linkify.matchAtStart(e.src.slice(r-i.length)))&&(!((o=s.url).length<=i.length)&&(o=o.replace(/\*+$/,""),a=e.md.normalizeLink(o),!!e.md.validateLink(a)&&(t||(e.pending=e.pending.slice(0,-i.length),(l=e.push("link_open","a",1)).attrs=[["href",a]],l.markup="linkify",l.info="auto",(l=e.push("text","",0)).content=e.md.normalizeLinkText(o),(l=e.push("link_close","a",-1)).markup="linkify",l.info="auto"),e.pos+=o.length-i.length,!0))))))))))}],["newline",function(e,t){var r,n,i,s=e.pos;if(10!==e.src.charCodeAt(s))return!1;if(r=e.pending.length-1,n=e.posMax,!t)if(r>=0&&32===e.pending.charCodeAt(r))if(r>=1&&32===e.pending.charCodeAt(r-1)){for(i=r-1;i>=1&&32===e.pending.charCodeAt(i-1);)i--;e.pending=e.pending.slice(0,i),e.push("hardbreak","br",0)}else e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0);else e.push("softbreak","br",0);for(s++;s<n&&Pi(e.src.charCodeAt(s));)s++;return e.pos=s,!0}],["escape",function(e,t){var r,n,i,s,o,a=e.pos,l=e.posMax;if(92!==e.src.charCodeAt(a))return!1;if(++a>=l)return!1;if(10===(r=e.src.charCodeAt(a))){for(t||e.push("hardbreak","br",0),a++;a<l&&(r=e.src.charCodeAt(a),Hi(r));)a++;return e.pos=a,!0}return s=e.src[a],r>=55296&&r<=56319&&a+1<l&&(n=e.src.charCodeAt(a+1))>=56320&&n<=57343&&(s+=e.src[a+1],a++),i="\\"+s,t||(o=e.push("text_special","",0),r<256&&0!==Ui[r]?o.content=s:o.content=i,o.markup=i,o.info="escape"),e.pos=a+1,!0}],["backticks",function(e,t){var r,n,i,s,o,a,l,c,u=e.pos;if(96!==e.src.charCodeAt(u))return!1;for(r=u,u++,n=e.posMax;u<n&&96===e.src.charCodeAt(u);)u++;if(l=(i=e.src.slice(r,u)).length,e.backticksScanned&&(e.backticks[l]||0)<=r)return t||(e.pending+=i),e.pos+=l,!0;for(a=u;-1!==(o=e.src.indexOf("`",a));){for(a=o+1;a<n&&96===e.src.charCodeAt(a);)a++;if((c=a-o)===l)return t||((s=e.push("code_inline","code",0)).markup=i,s.content=e.src.slice(u,o).replace(/\n/g," ").replace(/^ (.+) $/,"$1")),e.pos=a,!0;e.backticks[c]=o}return e.backticksScanned=!0,t||(e.pending+=i),e.pos+=l,!0}],["strikethrough",Vi.tokenize],["emphasis",$i.tokenize],["link",function(e,t){var r,n,i,s,o,a,l,c,u="",h="",d=e.pos,p=e.posMax,f=e.pos,m=!0;if(91!==e.src.charCodeAt(e.pos))return!1;if(o=e.pos+1,(s=e.md.helpers.parseLinkLabel(e,e.pos,!0))<0)return!1;if((a=s+1)<p&&40===e.src.charCodeAt(a)){for(m=!1,a++;a<p&&(n=e.src.charCodeAt(a),Ji(n)||10===n);a++);if(a>=p)return!1;if(f=a,(l=e.md.helpers.parseLinkDestination(e.src,a,e.posMax)).ok){for(u=e.md.normalizeLink(l.str),e.md.validateLink(u)?a=l.pos:u="",f=a;a<p&&(n=e.src.charCodeAt(a),Ji(n)||10===n);a++);if(l=e.md.helpers.parseLinkTitle(e.src,a,e.posMax),a<p&&f!==a&&l.ok)for(h=l.str,a=l.pos;a<p&&(n=e.src.charCodeAt(a),Ji(n)||10===n);a++);}(a>=p||41!==e.src.charCodeAt(a))&&(m=!0),a++}if(m){if(void 0===e.env.references)return!1;if(a<p&&91===e.src.charCodeAt(a)?(f=a+1,(a=e.md.helpers.parseLinkLabel(e,a))>=0?i=e.src.slice(f,a++):a=s+1):a=s+1,i||(i=e.src.slice(o,s)),!(c=e.env.references[Ki(i)]))return e.pos=d,!1;u=c.href,h=c.title}return t||(e.pos=o,e.posMax=s,e.push("link_open","a",1).attrs=r=[["href",u]],h&&r.push(["title",h]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,e.push("link_close","a",-1)),e.pos=a,e.posMax=p,!0}],["image",function(e,t){var r,n,i,s,o,a,l,c,u,h,d,p,f,m="",g=e.pos,_=e.posMax;if(33!==e.src.charCodeAt(e.pos))return!1;if(91!==e.src.charCodeAt(e.pos+1))return!1;if(a=e.pos+2,(o=e.md.helpers.parseLinkLabel(e,e.pos+1,!1))<0)return!1;if((l=o+1)<_&&40===e.src.charCodeAt(l)){for(l++;l<_&&(n=e.src.charCodeAt(l),Xi(n)||10===n);l++);if(l>=_)return!1;for(f=l,(u=e.md.helpers.parseLinkDestination(e.src,l,e.posMax)).ok&&(m=e.md.normalizeLink(u.str),e.md.validateLink(m)?l=u.pos:m=""),f=l;l<_&&(n=e.src.charCodeAt(l),Xi(n)||10===n);l++);if(u=e.md.helpers.parseLinkTitle(e.src,l,e.posMax),l<_&&f!==l&&u.ok)for(h=u.str,l=u.pos;l<_&&(n=e.src.charCodeAt(l),Xi(n)||10===n);l++);else h="";if(l>=_||41!==e.src.charCodeAt(l))return e.pos=g,!1;l++}else{if(void 0===e.env.references)return!1;if(l<_&&91===e.src.charCodeAt(l)?(f=l+1,(l=e.md.helpers.parseLinkLabel(e,l))>=0?s=e.src.slice(f,l++):l=o+1):l=o+1,s||(s=e.src.slice(a,o)),!(c=e.env.references[Yi(s)]))return e.pos=g,!1;m=c.href,h=c.title}return t||(i=e.src.slice(a,o),e.md.inline.parse(i,e.md,e.env,p=[]),(d=e.push("image","img",0)).attrs=r=[["src",m],["alt",""]],d.children=p,d.content=i,h&&r.push(["title",h])),e.pos=l,e.posMax=_,!0}],["autolink",function(e,t){var r,n,i,s,o,a,l=e.pos;if(60!==e.src.charCodeAt(l))return!1;for(o=e.pos,a=e.posMax;;){if(++l>=a)return!1;if(60===(s=e.src.charCodeAt(l)))return!1;if(62===s)break}return r=e.src.slice(o+1,l),es.test(r)?(n=e.md.normalizeLink(r),!!e.md.validateLink(n)&&(t||((i=e.push("link_open","a",1)).attrs=[["href",n]],i.markup="autolink",i.info="auto",(i=e.push("text","",0)).content=e.md.normalizeLinkText(r),(i=e.push("link_close","a",-1)).markup="autolink",i.info="auto"),e.pos+=r.length+2,!0)):!!Qi.test(r)&&(n=e.md.normalizeLink("mailto:"+r),!!e.md.validateLink(n)&&(t||((i=e.push("link_open","a",1)).attrs=[["href",n]],i.markup="autolink",i.info="auto",(i=e.push("text","",0)).content=e.md.normalizeLinkText(r),(i=e.push("link_close","a",-1)).markup="autolink",i.info="auto"),e.pos+=r.length+2,!0))}],["html_inline",function(e,t){var r,n,i,s,o,a=e.pos;return!!e.md.options.html&&(i=e.posMax,!(60!==e.src.charCodeAt(a)||a+2>=i)&&(!(33!==(r=e.src.charCodeAt(a+1))&&63!==r&&47!==r&&!function(e){var t=32|e;return t>=97&&t<=122}(r))&&(!!(n=e.src.slice(a).match(ts))&&(t||((s=e.push("html_inline","",0)).content=n[0],o=s.content,/^<a[>\s]/i.test(o)&&e.linkLevel++,function(e){return/^<\/a\s*>/i.test(e)}(s.content)&&e.linkLevel--),e.pos+=n[0].length,!0))))}],["entity",function(e,t){var r,n,i,s=e.pos,o=e.posMax;if(38!==e.src.charCodeAt(s))return!1;if(s+1>=o)return!1;if(35===e.src.charCodeAt(s+1)){if(n=e.src.slice(s).match(os))return t||(r="x"===n[1][0].toLowerCase()?parseInt(n[1].slice(1),16):parseInt(n[1],10),(i=e.push("text_special","",0)).content=is(r)?ss(r):ss(65533),i.markup=n[0],i.info="entity"),e.pos+=n[0].length,!0}else if((n=e.src.slice(s).match(as))&&ns(rs,n[1]))return t||((i=e.push("text_special","",0)).content=rs[n[1]],i.markup=n[0],i.info="entity"),e.pos+=n[0].length,!0;return!1}]],_s=[["balance_pairs",function(e){var t,r=e.tokens_meta,n=e.tokens_meta.length;for(ls(e.delimiters),t=0;t<n;t++)r[t]&&r[t].delimiters&&ls(r[t].delimiters)}],["strikethrough",Vi.postProcess],["emphasis",$i.postProcess],
// rules for pairs separate '**' into its own text tokens, which may be left unused,
// rule below merges unused segments back with the rest of the text
["fragments_join",function(e){var t,r,n=0,i=e.tokens,s=e.tokens.length;for(t=r=0;t<s;t++)i[t].nesting<0&&n--,i[t].level=n,i[t].nesting>0&&n++,"text"===i[t].type&&t+1<s&&"text"===i[t+1].type?i[t+1].content=i[t].content+i[t+1].content:(t!==r&&(i[r]=i[t]),r++);t!==r&&(i.length=r)}]];function vs(){var e;for(this.ruler=new ms,e=0;e<gs.length;e++)this.ruler.push(gs[e][0],gs[e][1]);for(this.ruler2=new ms,e=0;e<_s.length;e++)this.ruler2.push(_s[e][0],_s[e][1])}vs.prototype.skipToken=function(e){var t,r,n=e.pos,i=this.ruler.getRules(""),s=i.length,o=e.md.options.maxNesting,a=e.cache;if(void 0===a[n]){if(e.level<o){for(r=0;r<s;r++)if(e.level++,t=i[r](e,!0),e.level--,t){if(n>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}else e.pos=e.posMax;t||e.pos++,a[n]=e.pos}else e.pos=a[n]},vs.prototype.tokenize=function(e){for(var t,r,n,i=this.ruler.getRules(""),s=i.length,o=e.posMax,a=e.md.options.maxNesting;e.pos<o;){if(n=e.pos,e.level<a)for(r=0;r<s;r++)if(t=i[r](e,!1)){if(n>=e.pos)throw new Error("inline rule didn't increment state.pos");break}if(t){if(e.pos>=o)break}else e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()},vs.prototype.parse=function(e,t,r,n){var i,s,o,a=new this.State(e,t,r,n);for(this.tokenize(a),o=(s=this.ruler2.getRules("")).length,i=0;i<o;i++)s[i](a)},vs.prototype.State=fs;var ks,bs,ys=vs;function ws(e){return Array.prototype.slice.call(arguments,1).forEach((function(t){t&&Object.keys(t).forEach((function(r){e[r]=t[r]}))})),e}function xs(e){return Object.prototype.toString.call(e)}function Cs(e){return"[object Function]"===xs(e)}function As(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}var Ss={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};var Es={"http:":{validate:function(e,t,r){var n=e.slice(t);return r.re.http||(r.re.http=new RegExp("^\\/\\/"+r.re.src_auth+r.re.src_host_port_strict+r.re.src_path,"i")),r.re.http.test(n)?n.match(r.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(e,t,r){var n=e.slice(t);return r.re.no_http||(r.re.no_http=new RegExp("^"+r.re.src_auth+// Don't allow single-level domains, because of false positives like '//test'
// with code comments
"(?:localhost|(?:(?:"+r.re.src_domain+")\\.)+"+r.re.src_domain_root+")"+r.re.src_port+r.re.src_host_terminator+r.re.src_path,"i")),r.re.no_http.test(n)?t>=3&&":"===e[t-3]||t>=3&&"/"===e[t-3]?0:n.match(r.re.no_http)[0].length:0}},"mailto:":{validate:function(e,t,r){var n=e.slice(t);return r.re.mailto||(r.re.mailto=new RegExp("^"+r.re.src_email_name+"@"+r.re.src_host_strict,"i")),r.re.mailto.test(n)?n.match(r.re.mailto)[0].length:0}}},Ds="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",zs="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function Is(e){var t=e.re=(bs?ks:(bs=1,ks=function(e){var t={};e=e||{},t.src_Any=Cn().source,t.src_Cc=An().source,t.src_Z=Sn().source,t.src_P=Gr.source,t.src_ZPCc=[t.src_Z,t.src_P,t.src_Cc].join("|"),t.src_ZCc=[t.src_Z,t.src_Cc].join("|");var r="[><｜]";return t.src_pseudo_letter="(?:(?![><｜]|"+t.src_ZPCc+")"+t.src_Any+")",t.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",t.src_auth="(?:(?:(?!"+t.src_ZCc+"|[@/\\[\\]()]).)+@)?",t.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",t.src_host_terminator="(?=$|[><｜]|"+t.src_ZPCc+")(?!"+(e["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+t.src_ZPCc+"))",t.src_path="(?:[/?#](?:(?!"+t.src_ZCc+"|"+r+"|[()[\\]{}.,\"'?!\\-;]).|\\[(?:(?!"+t.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+t.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+t.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+t.src_ZCc+'|["]).)+\\"|\\\'(?:(?!'+t.src_ZCc+"|[']).)+\\'|\\'(?="+t.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+t.src_ZCc+"|[.]|$)|"+(e["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+t.src_ZCc+"|$)|;(?!"+t.src_ZCc+"|$)|\\!+(?!"+t.src_ZCc+"|[!]|$)|\\?(?!"+t.src_ZCc+"|[?]|$))+|\\/)?",t.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',t.src_xn="xn--[a-z0-9\\-]{1,59}",t.src_domain_root=// Allow letters & digits (http://test1)
"(?:"+t.src_xn+"|"+t.src_pseudo_letter+"{1,63})",t.src_domain="(?:"+t.src_xn+"|(?:"+t.src_pseudo_letter+")|(?:"+t.src_pseudo_letter+"(?:-|"+t.src_pseudo_letter+"){0,61}"+t.src_pseudo_letter+"))",t.src_host="(?:(?:(?:(?:"+t.src_domain+")\\.)*"+t.src_domain+"))",t.tpl_host_fuzzy="(?:"+t.src_ip4+"|(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%)))",t.tpl_host_no_ip_fuzzy="(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%))",t.src_host_strict=t.src_host+t.src_host_terminator,t.tpl_host_fuzzy_strict=t.tpl_host_fuzzy+t.src_host_terminator,t.src_host_port_strict=t.src_host+t.src_port+t.src_host_terminator,t.tpl_host_port_fuzzy_strict=t.tpl_host_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_port_no_ip_fuzzy_strict=t.tpl_host_no_ip_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+t.src_ZPCc+"|>|$))",t.tpl_email_fuzzy='(^|[><｜]|"|\\(|'+t.src_ZCc+")("+t.src_email_name+"@"+t.tpl_host_fuzzy_strict+")",t.tpl_link_fuzzy=// Fuzzy link can't be prepended with .:/\- and non punctuation.
// but can start with > (markdown blockquote)
"(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_fuzzy_strict+t.src_path+")",t.tpl_link_no_ip_fuzzy=// Fuzzy link can't be prepended with .:/\- and non punctuation.
// but can start with > (markdown blockquote)
"(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_no_ip_fuzzy_strict+t.src_path+")",t}))(e.__opts__),r=e.__tlds__.slice();function n(e){return e.replace("%TLDS%",t.src_tlds)}e.onCompile(),e.__tlds_replaced__||r.push(Ds),r.push(t.src_xn),t.src_tlds=r.join("|"),t.email_fuzzy=RegExp(n(t.tpl_email_fuzzy),"i"),t.link_fuzzy=RegExp(n(t.tpl_link_fuzzy),"i"),t.link_no_ip_fuzzy=RegExp(n(t.tpl_link_no_ip_fuzzy),"i"),t.host_fuzzy_test=RegExp(n(t.tpl_host_fuzzy_test),"i");var i=[];function s(e,t){throw new Error('(LinkifyIt) Invalid schema "'+e+'": '+t)}e.__compiled__={},Object.keys(e.__schemas__).forEach((function(t){var r=e.__schemas__[t];if(null!==r){var n={validate:null,link:null};if(e.__compiled__[t]=n,"[object Object]"===xs(r))return!function(e){return"[object RegExp]"===xs(e)}(r.validate)?Cs(r.validate)?n.validate=r.validate:s(t,r):n.validate=function(e){return function(t,r){var n=t.slice(r);return e.test(n)?n.match(e)[0].length:0}}(r.validate),void(Cs(r.normalize)?n.normalize=r.normalize:r.normalize?s(t,r):n.normalize=function(e,t){t.normalize(e)});!function(e){return"[object String]"===xs(e)}(r)?s(t,r):i.push(t)}})),i.forEach((function(t){e.__compiled__[e.__schemas__[t]]&&(e.__compiled__[t].validate=e.__compiled__[e.__schemas__[t]].validate,e.__compiled__[t].normalize=e.__compiled__[e.__schemas__[t]].normalize)})),e.__compiled__[""]={validate:null,normalize:function(e,t){t.normalize(e)}};var o=Object.keys(e.__compiled__).filter((function(t){return t.length>0&&e.__compiled__[t]})).map(As).join("|");e.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+t.src_ZPCc+"))("+o+")","i"),e.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+t.src_ZPCc+"))("+o+")","ig"),e.re.schema_at_start=RegExp("^"+e.re.schema_search.source,"i"),e.re.pretest=RegExp("("+e.re.schema_test.source+")|("+e.re.host_fuzzy_test.source+")|@","i"),function(e){e.__index__=-1,e.__text_cache__=""}(e)}function Ts(e,t){var r=e.__index__,n=e.__last_index__,i=e.__text_cache__.slice(r,n);this.schema=e.__schema__.toLowerCase(),this.index=r+t,this.lastIndex=n+t,this.raw=i,this.text=i,this.url=i}function Ls(e,t){var r=new Ts(e,t);return e.__compiled__[r.schema].normalize(r,e),r}function Fs(e,t){if(!(this instanceof Fs))return new Fs(e,t);var r;t||(r=e,Object.keys(r||{}).reduce((function(e,t){return e||Ss.hasOwnProperty(t)}),!1)&&(t=e,e={})),this.__opts__=ws({},Ss,t),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=ws({},Es,e),this.__compiled__={},this.__tlds__=zs,this.__tlds_replaced__=!1,this.re={},Is(this)}Fs.prototype.add=function(e,t){return this.__schemas__[e]=t,Is(this),this},Fs.prototype.set=function(e){return this.__opts__=ws(this.__opts__,e),this},Fs.prototype.test=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return!1;var t,r,n,i,s,o,a,l;if(this.re.schema_test.test(e))for((a=this.re.schema_search).lastIndex=0;null!==(t=a.exec(e));)if(i=this.testSchemaAt(e,t[2],a.lastIndex)){this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+i;break}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(l=e.search(this.re.host_fuzzy_test))>=0&&(this.__index__<0||l<this.__index__)&&null!==(r=e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))&&(s=r.index+r[1].length,(this.__index__<0||s<this.__index__)&&(this.__schema__="",this.__index__=s,this.__last_index__=r.index+r[0].length)),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&e.indexOf("@")>=0&&null!==(n=e.match(this.re.email_fuzzy))&&(s=n.index+n[1].length,o=n.index+n[0].length,(this.__index__<0||s<this.__index__||s===this.__index__&&o>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=s,this.__last_index__=o)),this.__index__>=0},Fs.prototype.pretest=function(e){return this.re.pretest.test(e)},Fs.prototype.testSchemaAt=function(e,t,r){return this.__compiled__[t.toLowerCase()]?this.__compiled__[t.toLowerCase()].validate(e,r,this):0},Fs.prototype.match=function(e){var t=0,r=[];this.__index__>=0&&this.__text_cache__===e&&(r.push(Ls(this,t)),t=this.__last_index__);for(var n=t?e.slice(t):e;this.test(n);)r.push(Ls(this,t)),n=n.slice(this.__last_index__),t+=this.__last_index__;return r.length?r:null},Fs.prototype.matchAtStart=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return null;var t=this.re.schema_at_start.exec(e);if(!t)return null;var r=this.testSchemaAt(e,t[2],t[0].length);return r?(this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+r,Ls(this,0)):null},Fs.prototype.tlds=function(e,t){return e=Array.isArray(e)?e:[e],t?(this.__tlds__=this.__tlds__.concat(e).sort().filter((function(e,t,r){return e!==r[t-1]})).reverse(),Is(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,Is(this),this)},Fs.prototype.normalize=function(e){e.schema||(e.url="http://"+e.url),"mailto:"!==e.schema||/^mailto:/i.test(e.url)||(e.url="mailto:"+e.url)},Fs.prototype.onCompile=function(){};var qs=Fs;const Ms=2147483647,Os=36,Rs=/^xn--/,Bs=/[^\0-\x7F]/,Ns=/[\x2E\u3002\uFF0E\uFF61]/g,js={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},Ps=Math.floor,Hs=String.fromCharCode;function Us(e){throw new RangeError(js[e])}function Ws(e,t){const r=e.split("@");let n="";r.length>1&&(n=r[0]+"@",e=r[1]);const i=function(e,t){const r=[];let n=e.length;for(;n--;)r[n]=t(e[n]);return r}((e=e.replace(Ns,".")).split("."),t).join(".");return n+i}function Vs(e){const t=[];let r=0;const n=e.length;for(;r<n;){const i=e.charCodeAt(r++);if(i>=55296&&i<=56319&&r<n){const n=e.charCodeAt(r++);56320==(64512&n)?t.push(((1023&i)<<10)+(1023&n)+65536):(t.push(i),r--)}else t.push(i)}return t}const Gs=e=>String.fromCodePoint(...e),$s=function(e,t){return e+22+75*(e<26)-((0!=t)<<5)},Zs=function(e,t,r){let n=0;for(e=r?Ps(e/700):e>>1,e+=Ps(e/t);e>455;n+=Os)e=Ps(e/35);return Ps(n+36*e/(e+38))},Ks=function(e){const t=[],r=e.length;let n=0,i=128,s=72,o=e.lastIndexOf("-");o<0&&(o=0);for(let l=0;l<o;++l)e.charCodeAt(l)>=128&&Us("not-basic"),t.push(e.charCodeAt(l));for(let l=o>0?o+1:0;l<r;){const o=n;for(let t=1,i=Os;;i+=Os){l>=r&&Us("invalid-input");const o=(a=e.charCodeAt(l++))>=48&&a<58?a-48+26:a>=65&&a<91?a-65:a>=97&&a<123?a-97:Os;o>=Os&&Us("invalid-input"),o>Ps((Ms-n)/t)&&Us("overflow"),n+=o*t;const c=i<=s?1:i>=s+26?26:i-s;if(o<c)break;const u=Os-c;t>Ps(Ms/u)&&Us("overflow"),t*=u}const c=t.length+1;s=Zs(n-o,c,0==o),Ps(n/c)>Ms-i&&Us("overflow"),i+=Ps(n/c),n%=c,t.splice(n++,0,i)}var a;return String.fromCodePoint(...t)},Js=function(e){const t=[],r=(e=Vs(e)).length;let n=128,i=0,s=72;for(const l of e)l<128&&t.push(Hs(l));const o=t.length;let a=o;for(o&&t.push("-");a<r;){let r=Ms;for(const t of e)t>=n&&t<r&&(r=t);const l=a+1;r-n>Ps((Ms-i)/l)&&Us("overflow"),i+=(r-n)*l,n=r;for(const c of e)if(c<n&&++i>Ms&&Us("overflow"),c===n){let e=i;for(let r=Os;;r+=Os){const n=r<=s?1:r>=s+26?26:r-s;if(e<n)break;const i=e-n,o=Os-n;t.push(Hs($s(n+i%o,0))),e=Ps(i/o)}t.push(Hs($s(e,0))),s=Zs(i,l,a===o),i=0,++a}++i,++n}return t.join("")},Ys=function(e){return Ws(e,(function(e){return Rs.test(e)?Ks(e.slice(4).toLowerCase()):e}))},Xs=function(e){return Ws(e,(function(e){return Bs.test(e)?"xn--"+Js(e):e}))},Qs={
/**
   * A string representing the current Punycode.js version number.
   * @memberOf punycode
   * @type String
   */
version:"2.3.1",
/**
   * An object of methods to convert from JavaScript's internal character
   * representation (UCS-2) to Unicode code points, and back.
   * @see <https://mathiasbynens.be/notes/javascript-encoding>
   * @memberOf punycode
   * @type Object
   */
ucs2:{decode:Vs,encode:Gs},decode:Ks,encode:Js,toASCII:Xs,toUnicode:Ys},eo=Object.freeze(Object.defineProperty({__proto__:null,decode:Ks,default:Qs,encode:Js,toASCII:Xs,toUnicode:Ys,ucs2decode:Vs,ucs2encode:Gs},Symbol.toStringTag,{value:"Module"}));var to=Wr,ro=Dn,no=On,io=hi,so=Bi,oo=ys,ao=qs,lo=$r,co=ue(eo),uo={default:{options:{html:!1,
// Enable HTML tags in source
xhtmlOut:!1,
// Use '/' to close single tags (<br />)
breaks:!1,
// Convert '\n' in paragraphs into <br>
langPrefix:"language-",
// CSS language prefix for fenced blocks
linkify:!1,
// autoconvert URL-like texts to links
// Enable some language-neutral replacements + quotes beautification
typographer:!1,
// Double + single quotes replacement pairs, when typographer enabled,
// and smartquotes on. Could be either a String or an Array.
// For example, you can use '«»„“' for Russian, '„“‚‘' for German,
// and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
quotes:"“”‘’",
/* “”‘’ */
// Highlighter function. Should return escaped HTML,
// or '' if the source string is not changed and should be escaped externaly.
// If result starts with <pre... internal wrapper is skipped.
// function (/*str, lang*/) { return ''; }
highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},zero:{options:{html:!1,
// Enable HTML tags in source
xhtmlOut:!1,
// Use '/' to close single tags (<br />)
breaks:!1,
// Convert '\n' in paragraphs into <br>
langPrefix:"language-",
// CSS language prefix for fenced blocks
linkify:!1,
// autoconvert URL-like texts to links
// Enable some language-neutral replacements + quotes beautification
typographer:!1,
// Double + single quotes replacement pairs, when typographer enabled,
// and smartquotes on. Could be either a String or an Array.
// For example, you can use '«»„“' for Russian, '„“‚‘' for German,
// and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
quotes:"“”‘’",
/* “”‘’ */
// Highlighter function. Should return escaped HTML,
// or '' if the source string is not changed and should be escaped externaly.
// If result starts with <pre... internal wrapper is skipped.
// function (/*str, lang*/) { return ''; }
highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},commonmark:{options:{html:!0,
// Enable HTML tags in source
xhtmlOut:!0,
// Use '/' to close single tags (<br />)
breaks:!1,
// Convert '\n' in paragraphs into <br>
langPrefix:"language-",
// CSS language prefix for fenced blocks
linkify:!1,
// autoconvert URL-like texts to links
// Enable some language-neutral replacements + quotes beautification
typographer:!1,
// Double + single quotes replacement pairs, when typographer enabled,
// and smartquotes on. Could be either a String or an Array.
// For example, you can use '«»„“' for Russian, '„“‚‘' for German,
// and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
quotes:"“”‘’",
/* “”‘’ */
// Highlighter function. Should return escaped HTML,
// or '' if the source string is not changed and should be escaped externaly.
// If result starts with <pre... internal wrapper is skipped.
// function (/*str, lang*/) { return ''; }
highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}}},ho=/^(vbscript|javascript|file|data):/,po=/^data:image\/(gif|png|jpeg|webp);/;function fo(e){var t=e.trim().toLowerCase();return!ho.test(t)||!!po.test(t)}var mo=["http:","https:","mailto:"];function go(e){var t=lo.parse(e,!0);if(t.hostname&&(!t.protocol||mo.indexOf(t.protocol)>=0))try{t.hostname=co.toASCII(t.hostname)}catch(r){}return lo.encode(lo.format(t))}function _o(e){var t=lo.parse(e,!0);if(t.hostname&&(!t.protocol||mo.indexOf(t.protocol)>=0))try{t.hostname=co.toUnicode(t.hostname)}catch(r){}return lo.decode(lo.format(t),lo.decode.defaultChars+"%")}function vo(e,t){if(!(this instanceof vo))return new vo(e,t);t||to.isString(e)||(t=e||{},e="default"),this.inline=new oo,this.block=new so,this.core=new io,this.renderer=new no,this.linkify=new ao,this.validateLink=fo,this.normalizeLink=go,this.normalizeLinkText=_o,this.utils=to,this.helpers=to.assign({},ro),this.options={},this.configure(e),t&&this.set(t)}vo.prototype.set=function(e){return to.assign(this.options,e),this},vo.prototype.configure=function(e){var t,r=this;if(to.isString(e)&&!(e=uo[t=e]))throw new Error('Wrong `markdown-it` preset "'+t+'", check name');if(!e)throw new Error("Wrong `markdown-it` preset, can't be empty");return e.options&&r.set(e.options),e.components&&Object.keys(e.components).forEach((function(t){e.components[t].rules&&r[t].ruler.enableOnly(e.components[t].rules),e.components[t].rules2&&r[t].ruler2.enableOnly(e.components[t].rules2)})),this},vo.prototype.enable=function(e,t){var r=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach((function(t){r=r.concat(this[t].ruler.enable(e,!0))}),this),r=r.concat(this.inline.ruler2.enable(e,!0));var n=e.filter((function(e){return r.indexOf(e)<0}));if(n.length&&!t)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+n);return this},vo.prototype.disable=function(e,t){var r=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach((function(t){r=r.concat(this[t].ruler.disable(e,!0))}),this),r=r.concat(this.inline.ruler2.disable(e,!0));var n=e.filter((function(e){return r.indexOf(e)<0}));if(n.length&&!t)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+n);return this},vo.prototype.use=function(e){var t=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,t),this},vo.prototype.parse=function(e,t){if("string"!=typeof e)throw new Error("Input data should be a String");var r=new this.core.State(e,this,t);return this.core.process(r),r.tokens},vo.prototype.render=function(e,t){return t=t||{},this.renderer.render(this.parse(e,t),this.options,t)},vo.prototype.parseInline=function(e,t){var r=new this.core.State(e,this,t);return r.inlineMode=!0,this.core.process(r),r.tokens},vo.prototype.renderInline=function(e,t){return t=t||{},this.renderer.render(this.parseInline(e,t),this.options,t)};const ko=ce(vo),bo=new Set([!0,!1,"alt","title"]);function yo(e,t){return(Array.isArray(e)?e:[]).filter((([e])=>e!==t))}function wo(e,t){e&&e.attrs&&(e.attrs=yo(e.attrs,t))}function xo(e,t){if(!bo.has(e))throw new TypeError("figcaption must be one of: ".concat([...bo],"."));if("alt"===e)return t.content;const r=t.attrs.find((([e])=>"title"===e));return Array.isArray(r)&&r[1]?(wo(t,"title"),r[1]):void 0}function Co(e,t){t=t||{},e.core.ruler.before("linkify","image_figures",(function(r){let n=1;for(let i=1,s=r.tokens.length;i<s-1;++i){const o=r.tokens[i];if("inline"!==o.type)continue;if(!o.children||1!==o.children.length&&3!==o.children.length)continue;if(1===o.children.length&&"image"!==o.children[0].type)continue;if(3===o.children.length){const[e,t,r]=o.children;if("link_open"!==e.type||"image"!==t.type||"link_close"!==r.type)continue}if(0!==i&&"paragraph_open"!==r.tokens[i-1].type)continue;if(i!==s-1&&"paragraph_close"!==r.tokens[i+1].type)continue;const a=r.tokens[i-1];let l;if(a.type="figure_open",a.tag="figure",r.tokens[i+1].type="figure_close",r.tokens[i+1].tag="figure",t.dataType&&r.tokens[i-1].attrPush(["data-type","image"]),t.link&&1===o.children.length){[l]=o.children;const e=new r.Token("link_open","a",1);e.attrPush(["href",l.attrGet("src")]),o.children.unshift(e),o.children.push(new r.Token("link_close","a",-1))}if(l=1===o.children.length?o.children[0]:o.children[1],t.figcaption){const n=xo(t.figcaption,l);if(n){const[t]=e.parseInline(n,r.env);o.children.push(new r.Token("figcaption_open","figcaption",1)),o.children.push(...t.children),o.children.push(new r.Token("figcaption_close","figcaption",-1)),l.attrs&&(l.attrs=yo(l.attrs,"title"))}}if(t.copyAttrs&&l.attrs){const e=!0===t.copyAttrs?"":t.copyAttrs;a.attrs=l.attrs.filter((([t])=>t.match(e))).map((e=>Array.from(e)))}if(t.tabindex&&(r.tokens[i-1].attrPush(["tabindex",n]),n++),t.lazy&&(l.attrs.some((([e])=>"loading"===e))||l.attrs.push(["loading","lazy"])),t.async&&(l.attrs.some((([e])=>"decoding"===e))||l.attrs.push(["decoding","async"])),t.classes&&"string"==typeof t.classes){let e=!1;for(let r=0,n=l.attrs.length;r<n&&!e;r++){const n=l.attrs[r];"class"===n[0]&&(n[1]="".concat(n[1]," ").concat(t.classes),e=!0)}e||l.attrs.push(["class",t.classes])}if(t.removeSrc){const e=l.attrs.find((([e])=>"src"===e));l.attrs.push(["data-src",e[1]]),wo(l,"src")}}}))}var Ao=!0,So=!1,Eo=!1;function Do(e,t,r){var n=e.attrIndex(t),i=[t,r];n<0?e.attrPush(i):e.attrs[n]=i}function zo(e,t){for(var r=e[t].level-1,n=t-1;n>=0;n--)if(e[n].level===r)return n;return-1}function Io(e,t){return"inline"===e[t].type&&function(e){return"paragraph_open"===e.type}(e[t-1])&&function(e){return"list_item_open"===e.type}(e[t-2])&&function(e){return 0===e.content.indexOf("[ ] ")||0===e.content.indexOf("[x] ")||0===e.content.indexOf("[X] ")}(e[t])}function To(e,t){if(e.children.unshift(function(e,t){var r=new t("html_inline","",0),n=Ao?' disabled="" ':"";0===e.content.indexOf("[ ] ")?r.content='<input class="task-list-item-checkbox"'+n+'type="checkbox">':0!==e.content.indexOf("[x] ")&&0!==e.content.indexOf("[X] ")||(r.content='<input class="task-list-item-checkbox" checked=""'+n+'type="checkbox">');return r}(e,t)),e.children[1].content=e.children[1].content.slice(3),e.content=e.content.slice(3),So)if(Eo){e.children.pop();var r="task-item-"+Math.ceil(1e7*Math.random()-1e3);e.children[0].content=e.children[0].content.slice(0,-1)+' id="'+r+'">',e.children.push(function(e,t,r){var n=new r("html_inline","",0);return n.content='<label class="task-list-item-label" for="'+t+'">'+e+"</label>",n.attrs=[{for:t}],n}(e.content,r,t))}else e.children.unshift(function(e){var t=new e("html_inline","",0);return t.content="<label>",t}(t)),e.children.push(function(e){var t=new e("html_inline","",0);return t.content="</label>",t}(t))}const Lo=ce((function(e,t){t&&(Ao=!t.enabled,So=!!t.label,Eo=!!t.labelAfter),e.core.ruler.after("inline","github-task-lists",(function(e){for(var t=e.tokens,r=2;r<t.length;r++)Io(t,r)&&(To(t[r],e.Token),Do(t[r-2],"class","task-list-item"+(Ao?"":" enabled")),Do(t[zo(t,r-2)],"class","contains-task-list"))}))})),Fo="object"==typeof performance&&performance&&"function"==typeof performance.now?performance:Date,qo=new Set,Mo=e=>e&&e===Math.floor(e)&&e>0&&isFinite(e),Oo=e=>Mo(e)?e<=Math.pow(2,8)?Uint8Array:e<=Math.pow(2,16)?Uint16Array:e<=Math.pow(2,32)?Uint32Array:e<=Number.MAX_SAFE_INTEGER?Ro:null:null;class Ro extends Array{constructor(e){super(e),this.fill(0)}}const Bo=class t{constructor(r,n){if(Y(this,"heap"),Y(this,"length"),!Q(t,e))throw new TypeError("instantiate Stack using Stack.create(n)");this.heap=new n(r),this.length=0}static create(r){const n=Oo(r);if(!n)return[];te(t,e,!0);const i=new t(r,n);return te(t,e,!1),i}push(e){this.heap[this.length++]=e}pop(){return this.heap[--this.length]}};e=new WeakMap,
// private constructor
ee(Bo,e,!1);let No=Bo;const jo=class e{constructor(M){ee(this,x),ee(this,z),ee(this,q),ee(this,O),ee(this,B),ee(this,j),ee(this,H),ee(this,W),ee(this,G),ee(this,Z),
// properties coming in from the options of these, only max and maxSize
// really *need* to be protected. The rest can be modified, as they just
// set defaults for various methods.
ee(this,t,void 0),ee(this,r,void 0),ee(this,n,void 0),ee(this,i,void 0),ee(this,s,void 0),
/**
     * {@link LRUCache.OptionsBase.ttl}
     */
Y(this,"ttl"),
/**
     * {@link LRUCache.OptionsBase.ttlResolution}
     */
Y(this,"ttlResolution"),
/**
     * {@link LRUCache.OptionsBase.ttlAutopurge}
     */
Y(this,"ttlAutopurge"),
/**
     * {@link LRUCache.OptionsBase.updateAgeOnGet}
     */
Y(this,"updateAgeOnGet"),
/**
     * {@link LRUCache.OptionsBase.updateAgeOnHas}
     */
Y(this,"updateAgeOnHas"),
/**
     * {@link LRUCache.OptionsBase.allowStale}
     */
Y(this,"allowStale"),
/**
     * {@link LRUCache.OptionsBase.noDisposeOnSet}
     */
Y(this,"noDisposeOnSet"),
/**
     * {@link LRUCache.OptionsBase.noUpdateTTL}
     */
Y(this,"noUpdateTTL"),
/**
     * {@link LRUCache.OptionsBase.maxEntrySize}
     */
Y(this,"maxEntrySize"),
/**
     * {@link LRUCache.OptionsBase.sizeCalculation}
     */
Y(this,"sizeCalculation"),
/**
     * {@link LRUCache.OptionsBase.noDeleteOnFetchRejection}
     */
Y(this,"noDeleteOnFetchRejection"),
/**
     * {@link LRUCache.OptionsBase.noDeleteOnStaleGet}
     */
Y(this,"noDeleteOnStaleGet"),
/**
     * {@link LRUCache.OptionsBase.allowStaleOnFetchAbort}
     */
Y(this,"allowStaleOnFetchAbort"),
/**
     * {@link LRUCache.OptionsBase.allowStaleOnFetchRejection}
     */
Y(this,"allowStaleOnFetchRejection"),
/**
     * {@link LRUCache.OptionsBase.ignoreFetchAbort}
     */
Y(this,"ignoreFetchAbort"),
// computed properties
ee(this,o,void 0),ee(this,a,void 0),ee(this,l,void 0),ee(this,c,void 0),ee(this,u,void 0),ee(this,h,void 0),ee(this,d,void 0),ee(this,p,void 0),ee(this,f,void 0),ee(this,m,void 0),ee(this,g,void 0),ee(this,_,void 0),ee(this,v,void 0),ee(this,k,void 0),ee(this,b,void 0),ee(this,y,void 0),ee(this,w,void 0),
// conditionally set private methods related to TTL
ee(this,A,(()=>{})),ee(this,S,(()=>{})),ee(this,E,(()=>{})),
/* c8 ignore stop */
ee(this,D,(()=>!1)),ee(this,T,(e=>{})),ee(this,L,((e,t,r)=>{})),ee(this,F,((e,t,r,n)=>{if(r||n)throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");return 0}));const{max:R=0,ttl:N,ttlResolution:P=1,ttlAutopurge:U,updateAgeOnGet:V,updateAgeOnHas:$,allowStale:K,dispose:J,disposeAfter:X,noDisposeOnSet:re,noUpdateTTL:ie,maxSize:se=0,maxEntrySize:oe=0,sizeCalculation:ae,fetchMethod:le,noDeleteOnFetchRejection:ce,noDeleteOnStaleGet:ue,allowStaleOnFetchRejection:he,allowStaleOnFetchAbort:de,ignoreFetchAbort:pe}=M;if(0!==R&&!Mo(R))throw new TypeError("max option must be a nonnegative integer");const fe=R?Oo(R):Array;if(!fe)throw new Error("invalid max value: "+R);if(te(this,t,R),te(this,r,se),this.maxEntrySize=oe||Q(this,r),this.sizeCalculation=ae,this.sizeCalculation){if(!Q(this,r)&&!this.maxEntrySize)throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");if("function"!=typeof this.sizeCalculation)throw new TypeError("sizeCalculation set to non-function")}if(void 0!==le&&"function"!=typeof le)throw new TypeError("fetchMethod must be a function if specified");if(te(this,s,le),te(this,y,!!le),te(this,l,new Map),te(this,c,new Array(R).fill(void 0)),te(this,u,new Array(R).fill(void 0)),te(this,h,new fe(R)),te(this,d,new fe(R)),te(this,p,0),te(this,f,0),te(this,m,No.create(R)),te(this,o,0),te(this,a,0),"function"==typeof J&&te(this,n,J),"function"==typeof X?(te(this,i,X),te(this,g,[])):(te(this,i,void 0),te(this,g,void 0)),te(this,b,!!Q(this,n)),te(this,w,!!Q(this,i)),this.noDisposeOnSet=!!re,this.noUpdateTTL=!!ie,this.noDeleteOnFetchRejection=!!ce,this.allowStaleOnFetchRejection=!!he,this.allowStaleOnFetchAbort=!!de,this.ignoreFetchAbort=!!pe,0!==this.maxEntrySize){if(0!==Q(this,r)&&!Mo(Q(this,r)))throw new TypeError("maxSize must be a positive integer if specified");if(!Mo(this.maxEntrySize))throw new TypeError("maxEntrySize must be a positive integer if specified");ne(this,z,I).call(this)}if(this.allowStale=!!K,this.noDeleteOnStaleGet=!!ue,this.updateAgeOnGet=!!V,this.updateAgeOnHas=!!$,this.ttlResolution=Mo(P)||0===P?P:1,this.ttlAutopurge=!!U,this.ttl=N||0,this.ttl){if(!Mo(this.ttl))throw new TypeError("ttl must be a positive integer if specified");ne(this,x,C).call(this)}if(0===Q(this,t)&&0===this.ttl&&0===Q(this,r))throw new TypeError("At least one of max, maxSize, or ttl is required");if(!this.ttlAutopurge&&!Q(this,t)&&!Q(this,r)){const t="LRU_CACHE_UNBOUNDED";if((e=>!qo.has(e))(t)){qo.add(t);((e,t,r,n)=>{"object"==typeof process&&process&&"function"==typeof process.emitWarning&&process.emitWarning(e,t,r,n)})("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.","UnboundedCacheWarning",t,e)}}}
/**
   * Do not call this method unless you need to inspect the
   * inner workings of the cache.  If anything returned by this
   * object is modified in any way, strange breakage may occur.
   *
   * These fields are private for a reason!
   *
   * @internal
   */static unsafeExposeInternals(e){return{
// properties
starts:Q(e,v),ttls:Q(e,k),sizes:Q(e,_),keyMap:Q(e,l),keyList:Q(e,c),valList:Q(e,u),next:Q(e,h),prev:Q(e,d),get head(){return Q(e,p)},get tail(){return Q(e,f)},free:Q(e,m),
// methods
isBackgroundFetch:t=>{var r;return ne(r=e,W,V).call(r,t)},backgroundFetch:(t,r,n,i)=>{var s;return ne(s=e,H,U).call(s,t,r,n,i)},moveToTail:t=>{var r;return ne(r=e,Z,K).call(r,t)},indexes:t=>{var r;return ne(r=e,q,M).call(r,t)},rindexes:t=>{var r;return ne(r=e,O,R).call(r,t)},isStale:t=>{var r;return Q(r=e,D).call(r,t)}}}
// Protected read-only members
/**
   * {@link LRUCache.OptionsBase.max} (read-only)
   */
get max(){return Q(this,t)}
/**
   * {@link LRUCache.OptionsBase.maxSize} (read-only)
   */get maxSize(){return Q(this,r)}
/**
   * The total computed size of items in the cache (read-only)
   */get calculatedSize(){return Q(this,a)}
/**
   * The number of items stored in the cache (read-only)
   */get size(){return Q(this,o)}
/**
   * {@link LRUCache.OptionsBase.fetchMethod} (read-only)
   */get fetchMethod(){return Q(this,s)}
/**
   * {@link LRUCache.OptionsBase.dispose} (read-only)
   */get dispose(){return Q(this,n)}
/**
   * {@link LRUCache.OptionsBase.disposeAfter} (read-only)
   */get disposeAfter(){return Q(this,i)}
/**
   * Return the remaining TTL time for a given entry key
   */getRemainingTTL(e){return Q(this,l).has(e)?1/0:0}
/**
   * Return a generator yielding `[key, value]` pairs,
   * in order from most recently used to least recently used.
   */*entries(){for(const e of ne(this,q,M).call(this))void 0===Q(this,u)[e]||void 0===Q(this,c)[e]||ne(this,W,V).call(this,Q(this,u)[e])||(yield[Q(this,c)[e],Q(this,u)[e]])}
/**
   * Inverse order version of {@link LRUCache.entries}
   *
   * Return a generator yielding `[key, value]` pairs,
   * in order from least recently used to most recently used.
   */*rentries(){for(const e of ne(this,O,R).call(this))void 0===Q(this,u)[e]||void 0===Q(this,c)[e]||ne(this,W,V).call(this,Q(this,u)[e])||(yield[Q(this,c)[e],Q(this,u)[e]])}
/**
   * Return a generator yielding the keys in the cache,
   * in order from most recently used to least recently used.
   */*keys(){for(const e of ne(this,q,M).call(this)){const t=Q(this,c)[e];void 0===t||ne(this,W,V).call(this,Q(this,u)[e])||(yield t)}}
/**
   * Inverse order version of {@link LRUCache.keys}
   *
   * Return a generator yielding the keys in the cache,
   * in order from least recently used to most recently used.
   */*rkeys(){for(const e of ne(this,O,R).call(this)){const t=Q(this,c)[e];void 0===t||ne(this,W,V).call(this,Q(this,u)[e])||(yield t)}}
/**
   * Return a generator yielding the values in the cache,
   * in order from most recently used to least recently used.
   */*values(){for(const e of ne(this,q,M).call(this)){void 0===Q(this,u)[e]||ne(this,W,V).call(this,Q(this,u)[e])||(yield Q(this,u)[e])}}
/**
   * Inverse order version of {@link LRUCache.values}
   *
   * Return a generator yielding the values in the cache,
   * in order from least recently used to most recently used.
   */*rvalues(){for(const e of ne(this,O,R).call(this)){void 0===Q(this,u)[e]||ne(this,W,V).call(this,Q(this,u)[e])||(yield Q(this,u)[e])}}
/**
   * Iterating over the cache itself yields the same results as
   * {@link LRUCache.entries}
   */[Symbol.iterator](){return this.entries()}
/**
   * Find a value for which the supplied fn method returns a truthy value,
   * similar to Array.find().  fn is called as fn(value, key, cache).
   */find(e,t={}){for(const r of ne(this,q,M).call(this)){const n=Q(this,u)[r],i=ne(this,W,V).call(this,n)?n.__staleWhileFetching:n;if(void 0!==i&&e(i,Q(this,c)[r],this))return this.get(Q(this,c)[r],t)}}
/**
   * Call the supplied function on each item in the cache, in order from
   * most recently used to least recently used.  fn is called as
   * fn(value, key, cache).  Does not update age or recenty of use.
   * Does not iterate over stale values.
   */forEach(e,t=this){for(const r of ne(this,q,M).call(this)){const n=Q(this,u)[r],i=ne(this,W,V).call(this,n)?n.__staleWhileFetching:n;void 0!==i&&e.call(t,i,Q(this,c)[r],this)}}
/**
   * The same as {@link LRUCache.forEach} but items are iterated over in
   * reverse order.  (ie, less recently used items are iterated over first.)
   */rforEach(e,t=this){for(const r of ne(this,O,R).call(this)){const n=Q(this,u)[r],i=ne(this,W,V).call(this,n)?n.__staleWhileFetching:n;void 0!==i&&e.call(t,i,Q(this,c)[r],this)}}
/**
   * Delete any stale entries. Returns true if anything was removed,
   * false otherwise.
   */purgeStale(){let e=!1;for(const t of ne(this,O,R).call(this,{allowStale:!0}))Q(this,D).call(this,t)&&(this.delete(Q(this,c)[t]),e=!0);return e}
/**
   * Return an array of [key, {@link LRUCache.Entry}] tuples which can be
   * passed to cache.load()
   */dump(){const e=[];for(const t of ne(this,q,M).call(this,{allowStale:!0})){const r=Q(this,c)[t],n=Q(this,u)[t],i=ne(this,W,V).call(this,n)?n.__staleWhileFetching:n;if(void 0===i||void 0===r)continue;const s={value:i};if(Q(this,k)&&Q(this,v)){s.ttl=Q(this,k)[t];const e=Fo.now()-Q(this,v)[t];s.start=Math.floor(Date.now()-e)}Q(this,_)&&(s.size=Q(this,_)[t]),e.unshift([r,s])}return e}
/**
   * Reset the cache and load in the items in entries in the order listed.
   * Note that the shape of the resulting cache may be different if the
   * same options are not used in both caches.
   */load(e){this.clear();for(const[t,r]of e){if(r.start){const e=Date.now()-r.start;r.start=Fo.now()-e}this.set(t,r.value,r)}}
/**
   * Add a value to the cache.
   */set(e,r,s={}){var a,p,_;const{ttl:v=this.ttl,start:A,noDisposeOnSet:D=this.noDisposeOnSet,sizeCalculation:z=this.sizeCalculation,status:I}=s;let{noUpdateTTL:q=this.noUpdateTTL}=s;const M=Q(this,F).call(this,e,r,s.size||0,z);if(this.maxEntrySize&&M>this.maxEntrySize)return I&&(I.set="miss",I.maxEntrySizeExceeded=!0),this.delete(e),this;let O=0===Q(this,o)?void 0:Q(this,l).get(e);if(void 0===O)O=0===Q(this,o)?Q(this,f):0!==Q(this,m).length?Q(this,m).pop():Q(this,o)===Q(this,t)?ne(this,j,P).call(this,!1):Q(this,o),Q(this,c)[O]=e,Q(this,u)[O]=r,Q(this,l).set(e,O),Q(this,h)[Q(this,f)]=O,Q(this,d)[O]=Q(this,f),te(this,f,O),re(this,o)._++,Q(this,L).call(this,O,M,I),I&&(I.set="add"),q=!1;else{ne(this,Z,K).call(this,O);const t=Q(this,u)[O];if(r!==t){if(Q(this,y)&&ne(this,W,V).call(this,t)?t.__abortController.abort(new Error("replaced")):D||(Q(this,b)&&(null==(a=Q(this,n))||a.call(this,t,e,"set")),Q(this,w)&&(null==(p=Q(this,g))||p.push([t,e,"set"]))),Q(this,T).call(this,O),Q(this,L).call(this,O,M,I),Q(this,u)[O]=r,I){I.set="replace";const e=t&&ne(this,W,V).call(this,t)?t.__staleWhileFetching:t;void 0!==e&&(I.oldValue=e)}}else I&&(I.set="update")}if(0===v||Q(this,k)||ne(this,x,C).call(this),Q(this,k)&&(q||Q(this,E).call(this,O,v,A),I&&Q(this,S).call(this,I,O)),!D&&Q(this,w)&&Q(this,g)){const e=Q(this,g);let t;for(;t=null==e?void 0:e.shift();)null==(_=Q(this,i))||_.call(this,...t)}return this}
/**
   * Evict the least recently used item, returning its value or
   * `undefined` if cache is empty.
   */pop(){var e;try{for(;Q(this,o);){const e=Q(this,u)[Q(this,p)];if(ne(this,j,P).call(this,!0),ne(this,W,V).call(this,e)){if(e.__staleWhileFetching)return e.__staleWhileFetching}else if(void 0!==e)return e}}finally{if(Q(this,w)&&Q(this,g)){const t=Q(this,g);let r;for(;r=null==t?void 0:t.shift();)null==(e=Q(this,i))||e.call(this,...r)}}}
/**
   * Check if a key is in the cache, without updating the recency of use.
   * Will return false if the item is stale, even though it is technically
   * in the cache.
   *
   * Will not update item age unless
   * {@link LRUCache.OptionsBase.updateAgeOnHas} is set.
   */has(e,t={}){const{updateAgeOnHas:r=this.updateAgeOnHas,status:n}=t,i=Q(this,l).get(e);if(void 0!==i){const e=Q(this,u)[i];if(ne(this,W,V).call(this,e)&&void 0===e.__staleWhileFetching)return!1;if(!Q(this,D).call(this,i))return r&&Q(this,A).call(this,i),n&&(n.has="hit",Q(this,S).call(this,n,i)),!0;n&&(n.has="stale",Q(this,S).call(this,n,i))}else n&&(n.has="miss");return!1}
/**
   * Like {@link LRUCache#get} but doesn't update recency or delete stale
   * items.
   *
   * Returns `undefined` if the item is stale, unless
   * {@link LRUCache.OptionsBase.allowStale} is set.
   */peek(e,t={}){const{allowStale:r=this.allowStale}=t,n=Q(this,l).get(e);if(void 0!==n&&(r||!Q(this,D).call(this,n))){const e=Q(this,u)[n];return ne(this,W,V).call(this,e)?e.__staleWhileFetching:e}}async fetch(e,t={}){const{allowStale:
// get options
r=this.allowStale,updateAgeOnGet:n=this.updateAgeOnGet,noDeleteOnStaleGet:i=this.noDeleteOnStaleGet,ttl:
// set options
s=this.ttl,noDisposeOnSet:o=this.noDisposeOnSet,size:a=0,sizeCalculation:c=this.sizeCalculation,noUpdateTTL:h=this.noUpdateTTL,noDeleteOnFetchRejection:
// fetch exclusive options
d=this.noDeleteOnFetchRejection,allowStaleOnFetchRejection:p=this.allowStaleOnFetchRejection,ignoreFetchAbort:f=this.ignoreFetchAbort,allowStaleOnFetchAbort:m=this.allowStaleOnFetchAbort,context:g,forceRefresh:_=!1,status:v,signal:k}=t;if(!Q(this,y))return v&&(v.fetch="get"),this.get(e,{allowStale:r,updateAgeOnGet:n,noDeleteOnStaleGet:i,status:v});const b={allowStale:r,updateAgeOnGet:n,noDeleteOnStaleGet:i,ttl:s,noDisposeOnSet:o,size:a,sizeCalculation:c,noUpdateTTL:h,noDeleteOnFetchRejection:d,allowStaleOnFetchRejection:p,allowStaleOnFetchAbort:m,ignoreFetchAbort:f,status:v,signal:k};let w=Q(this,l).get(e);if(void 0===w){v&&(v.fetch="miss");const t=ne(this,H,U).call(this,e,w,b,g);return t.__returned=t}{const t=Q(this,u)[w];if(ne(this,W,V).call(this,t)){const e=r&&void 0!==t.__staleWhileFetching;return v&&(v.fetch="inflight",e&&(v.returnedStale=!0)),e?t.__staleWhileFetching:t.__returned=t}const i=Q(this,D).call(this,w);if(!_&&!i)return v&&(v.fetch="hit"),ne(this,Z,K).call(this,w),n&&Q(this,A).call(this,w),v&&Q(this,S).call(this,v,w),t;const s=ne(this,H,U).call(this,e,w,b,g),o=void 0!==s.__staleWhileFetching&&r;return v&&(v.fetch=i?"stale":"refresh",o&&i&&(v.returnedStale=!0)),o?s.__staleWhileFetching:s.__returned=s}}
/**
   * Return a value from the cache. Will update the recency of the cache
   * entry found.
   *
   * If the key is not found, get() will return `undefined`.
   */get(e,t={}){const{allowStale:r=this.allowStale,updateAgeOnGet:n=this.updateAgeOnGet,noDeleteOnStaleGet:i=this.noDeleteOnStaleGet,status:s}=t,o=Q(this,l).get(e);if(void 0!==o){const t=Q(this,u)[o],a=ne(this,W,V).call(this,t);return s&&Q(this,S).call(this,s,o),Q(this,D).call(this,o)?(s&&(s.get="stale"),a?(s&&r&&void 0!==t.__staleWhileFetching&&(s.returnedStale=!0),r?t.__staleWhileFetching:void 0):(i||this.delete(e),s&&r&&(s.returnedStale=!0),r?t:void 0)):(s&&(s.get="hit"),a?t.__staleWhileFetching:(ne(this,Z,K).call(this,o),n&&Q(this,A).call(this,o),t))}s&&(s.get="miss")}
/**
   * Deletes a key out of the cache.
   * Returns true if the key was deleted, false otherwise.
   */delete(e){var t,r,s,a;let _=!1;if(0!==Q(this,o)){const i=Q(this,l).get(e);if(void 0!==i)if(_=!0,1===Q(this,o))this.clear();else{Q(this,T).call(this,i);const s=Q(this,u)[i];ne(this,W,V).call(this,s)?s.__abortController.abort(new Error("deleted")):(Q(this,b)||Q(this,w))&&(Q(this,b)&&(null==(t=Q(this,n))||t.call(this,s,e,"delete")),Q(this,w)&&(null==(r=Q(this,g))||r.push([s,e,"delete"]))),Q(this,l).delete(e),Q(this,c)[i]=void 0,Q(this,u)[i]=void 0,i===Q(this,f)?te(this,f,Q(this,d)[i]):i===Q(this,p)?te(this,p,Q(this,h)[i]):(Q(this,h)[Q(this,d)[i]]=Q(this,h)[i],Q(this,d)[Q(this,h)[i]]=Q(this,d)[i]),re(this,o)._--,Q(this,m).push(i)}}if(Q(this,w)&&(null==(s=Q(this,g))?void 0:s.length)){const e=Q(this,g);let t;for(;t=null==e?void 0:e.shift();)null==(a=Q(this,i))||a.call(this,...t)}return _}
/**
   * Clear the cache entirely, throwing away all values.
   */clear(){var e,t,r;for(const i of ne(this,O,R).call(this,{allowStale:!0})){const r=Q(this,u)[i];if(ne(this,W,V).call(this,r))r.__abortController.abort(new Error("deleted"));else{const s=Q(this,c)[i];Q(this,b)&&(null==(e=Q(this,n))||e.call(this,r,s,"delete")),Q(this,w)&&(null==(t=Q(this,g))||t.push([r,s,"delete"]))}}if(Q(this,l).clear(),Q(this,u).fill(void 0),Q(this,c).fill(void 0),Q(this,k)&&Q(this,v)&&(Q(this,k).fill(0),Q(this,v).fill(0)),Q(this,_)&&Q(this,_).fill(0),te(this,p,0),te(this,f,0),Q(this,m).length=0,te(this,a,0),te(this,o,0),Q(this,w)&&Q(this,g)){const e=Q(this,g);let t;for(;t=null==e?void 0:e.shift();)null==(r=Q(this,i))||r.call(this,...t)}}};t=new WeakMap,r=new WeakMap,n=new WeakMap,i=new WeakMap,s=new WeakMap,o=new WeakMap,a=new WeakMap,l=new WeakMap,c=new WeakMap,u=new WeakMap,h=new WeakMap,d=new WeakMap,p=new WeakMap,f=new WeakMap,m=new WeakMap,g=new WeakMap,_=new WeakMap,v=new WeakMap,k=new WeakMap,b=new WeakMap,y=new WeakMap,w=new WeakMap,x=new WeakSet,C=function(){const e=new Ro(Q(this,t)),r=new Ro(Q(this,t));te(this,k,e),te(this,v,r),te(this,E,((t,n,i=Fo.now())=>{if(r[t]=0!==n?i:0,e[t]=n,0!==n&&this.ttlAutopurge){const e=setTimeout((()=>{Q(this,D).call(this,t)&&this.delete(Q(this,c)[t])}),n+1);e.unref&&e.unref()}})),te(this,A,(t=>{r[t]=0!==e[t]?Fo.now():0})),te(this,S,((t,s)=>{if(e[s]){const o=e[s],a=r[s];t.ttl=o,t.start=a,t.now=n||i(),t.remainingTTL=t.now+o-a}}));let n=0;const i=()=>{const e=Fo.now();if(this.ttlResolution>0){n=e;const t=setTimeout((()=>n=0),this.ttlResolution);t.unref&&t.unref()}return e};this.getRemainingTTL=t=>{const s=Q(this,l).get(t);return void 0===s?0:0===e[s]||0===r[s]?1/0:r[s]+e[s]-(n||i())},te(this,D,(t=>0!==e[t]&&0!==r[t]&&(n||i())-r[t]>e[t]))},A=new WeakMap,S=new WeakMap,E=new WeakMap,D=new WeakMap,z=new WeakSet,I=function(){const e=new Ro(Q(this,t));te(this,a,0),te(this,_,e),te(this,T,(t=>{te(this,a,Q(this,a)-e[t]),e[t]=0})),te(this,F,((e,t,r,n)=>{if(ne(this,W,V).call(this,t))return 0;if(!Mo(r)){if(!n)throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");if("function"!=typeof n)throw new TypeError("sizeCalculation must be a function");if(r=n(t,e),!Mo(r))throw new TypeError("sizeCalculation return invalid (expect positive integer)")}return r})),te(this,L,((t,n,i)=>{if(e[t]=n,Q(this,r)){const n=Q(this,r)-e[t];for(;Q(this,a)>n;)ne(this,j,P).call(this,!0)}te(this,a,Q(this,a)+e[t]),i&&(i.entrySize=n,i.totalCalculatedSize=Q(this,a))}))},T=new WeakMap,L=new WeakMap,F=new WeakMap,q=new WeakSet,M=function*({allowStale:e=this.allowStale}={}){if(Q(this,o))for(let t=Q(this,f);ne(this,B,N).call(this,t)&&(!e&&Q(this,D).call(this,t)||(yield t),t!==Q(this,p));)t=Q(this,d)[t]},O=new WeakSet,R=function*({allowStale:e=this.allowStale}={}){if(Q(this,o))for(let t=Q(this,p);ne(this,B,N).call(this,t)&&(!e&&Q(this,D).call(this,t)||(yield t),t!==Q(this,f));)t=Q(this,h)[t]},B=new WeakSet,N=function(e){return void 0!==e&&Q(this,l).get(Q(this,c)[e])===e},j=new WeakSet,P=function(e){var t,r;const i=Q(this,p),s=Q(this,c)[i],a=Q(this,u)[i];return Q(this,y)&&ne(this,W,V).call(this,a)?a.__abortController.abort(new Error("evicted")):(Q(this,b)||Q(this,w))&&(Q(this,b)&&(null==(t=Q(this,n))||t.call(this,a,s,"evict")),Q(this,w)&&(null==(r=Q(this,g))||r.push([a,s,"evict"]))),Q(this,T).call(this,i),e&&(Q(this,c)[i]=void 0,Q(this,u)[i]=void 0,Q(this,m).push(i)),1===Q(this,o)?(te(this,p,te(this,f,0)),Q(this,m).length=0):te(this,p,Q(this,h)[i]),Q(this,l).delete(s),re(this,o)._--,i},H=new WeakSet,U=function(e,t,r,n){const i=void 0===t?void 0:Q(this,u)[t];if(ne(this,W,V).call(this,i))return i;const o=new AbortController,{signal:a}=r;null==a||a.addEventListener("abort",(()=>o.abort(a.reason)),{signal:o.signal});const c={signal:o.signal,options:r,context:n},h=(n,i=!1)=>{const{aborted:s}=o.signal,a=r.ignoreFetchAbort&&void 0!==n;if(r.status&&(s&&!i?(r.status.fetchAborted=!0,r.status.fetchError=o.signal.reason,a&&(r.status.fetchAbortIgnored=!0)):r.status.fetchResolved=!0),s&&!a&&!i)return d(o.signal.reason);const l=p;return Q(this,u)[t]===p&&(void 0===n?l.__staleWhileFetching?Q(this,u)[t]=l.__staleWhileFetching:this.delete(e):(r.status&&(r.status.fetchUpdated=!0),this.set(e,n,c.options))),n},d=n=>{const{aborted:i}=o.signal,s=i&&r.allowStaleOnFetchAbort,a=s||r.allowStaleOnFetchRejection,l=a||r.noDeleteOnFetchRejection,c=p;if(Q(this,u)[t]===p){!l||void 0===c.__staleWhileFetching?this.delete(e):s||(Q(this,u)[t]=c.__staleWhileFetching)}if(a)return r.status&&void 0!==c.__staleWhileFetching&&(r.status.returnedStale=!0),c.__staleWhileFetching;if(c.__returned===c)throw n};r.status&&(r.status.fetchDispatched=!0);const p=new Promise(((t,n)=>{var a;const l=null==(a=Q(this,s))?void 0:a.call(this,e,i,c);l&&l instanceof Promise&&l.then((e=>t(e)),n),o.signal.addEventListener("abort",(()=>{r.ignoreFetchAbort&&!r.allowStaleOnFetchAbort||(t(),r.allowStaleOnFetchAbort&&(t=e=>h(e,!0)))}))})).then(h,(e=>(r.status&&(r.status.fetchRejected=!0,r.status.fetchError=e),d(e)))),f=Object.assign(p,{__abortController:o,__staleWhileFetching:i,__returned:void 0});return void 0===t?(this.set(e,f,{...c.options,status:void 0}),t=Q(this,l).get(e)):Q(this,u)[t]=f,f},W=new WeakSet,V=function(e){if(!Q(this,y))return!1;const t=e;return!!t&&t instanceof Promise&&t.hasOwnProperty("__staleWhileFetching")&&t.__abortController instanceof AbortController},G=new WeakSet,$=function(e,t){Q(this,d)[t]=e,Q(this,h)[e]=t},Z=new WeakSet,K=function(e){e!==Q(this,f)&&(e===Q(this,p)?te(this,p,Q(this,h)[e]):ne(this,G,$).call(this,Q(this,d)[e],Q(this,h)[e]),ne(this,G,$).call(this,Q(this,f),e),te(this,f,e))};let Po=jo;const Ho=(e,t)=>{const r=Le("editorId"),{noImgZoomIn:n}=e,i=Ft((()=>{const e=document.querySelectorAll("#".concat(r,"-preview img"));0!==e.length&&jr(e,{background:"#00000073"})}));Oe((()=>{!n&&i()})),Re([t,Be(e.setting,"preview")],(()=>{!n&&i()}))},Uo=(e,t)=>{const r=Le("editorId"),n=Le("usedLanguageText"),i=Le("customIcon"),s=()=>{document.querySelectorAll("#".concat(r,"-preview pre")).forEach((t=>{var r,s;let o=-1;null==(r=t.querySelector(".copy-button"))||r.remove();const a=(null==(s=n.value.copyCode)?void 0:s.text)||"复制代码",l=document.createElement("span");l.setAttribute("class","copy-button"),l.dataset.tips=a,l.innerHTML=((e,t)=>{if("string"==typeof t[e])return t[e];const r='<i class="'.concat(At,"-iconfont ").concat(At,"-icon-").concat(e,'"></i>');return"svg"===Lt.iconfontType?'<svg class="'.concat(At,'-icon" aria-hidden="true"><use xlink:href="#').concat(At,"-icon-").concat(e,'"></use></svg>'):r})("copy",i.value),l.addEventListener("click",(()=>{var r,i;clearTimeout(o);const s=t.querySelector("code").innerText,c=Ur(e.formatCopiedText(s)),u=(null==(r=n.value.copyCode)?void 0:r.successTips)||"已复制！",h=(null==(i=n.value.copyCode)?void 0:i.failTips)||"已复制！";l.dataset.tips=c?u:h,o=window.setTimeout((()=>{l.dataset.tips=a}),1500)})),t.appendChild(l)}))},o=e=>{e&&je(s)};Re((()=>t.value),(()=>{je(s)})),Re((()=>e.setting.preview),o),Re((()=>e.setting.htmlPreview),o),Re((()=>n.value),s),Oe(s)},Wo=e=>{var t;const r=null==(t=Lt.editorExtensions)?void 0:t.highlight,n=null==r?void 0:r.instance,i=Le("highlight"),s=Pe(n);return Oe((()=>{if(!e.noHighlight&&!s.value){const e=document.createElement("script");e.src=i.value.js,e.onload=()=>{s.value=window.hljs},e.id="".concat(At,"-hljs"),Bt(e,"hljs");const t=document.createElement("link");t.rel="stylesheet",t.href=i.value.css,t.id="".concat(At,"-hlCss"),Bt(t)}})),Re((()=>i.value.css),(e=>{Nt("".concat(At,"-hlCss"),"href",e)})),s},Vo=e=>{const t=Le("theme"),{editorExtensions:r,mermaidConfig:n}=Lt,i=null==r?void 0:r.mermaid,s=Pe(null==i?void 0:i.instance),o=Pe(-1),a=new Po({max:1e3,
// 缓存10分钟
ttl:6e5}),l=()=>{const r=s.value;!e.noMermaid&&r&&(r.initialize(n({startOnLoad:!1,theme:"dark"===t.value?"dark":"default"})),o.value=o.value+1)};return Re((()=>t.value),(()=>{a.clear(),l()})),Oe((()=>{if(!(e.noMermaid||null!=i&&i.instance)){const e=(null==i?void 0:i.js)||zt;if(/\.mjs/.test(e))he((()=>import(
/* @vite-ignore */
/* webpackIgnore: true */
e)),__vite__mapDeps([])).then((e=>{s.value=e.default,l()}));else{const t=document.createElement("script");t.id="".concat(At,"-mermaid"),t.src=e,t.onload=()=>{s.value=window.mermaid,l()},Bt(t,"mermaid")}}})),{mermaidRef:s,reRenderRef:o,replaceMermaid:()=>{je((()=>{if(!e.noMermaid&&s.value){const t=document.querySelectorAll("div.".concat(At,"-mermaid")),r=document.createElement("div");r.style.width=document.body.offsetWidth+"px",r.style.height=document.body.offsetHeight+"px",r.style.position="fixed",r.style.zIndex="-10000",r.style.top="-10000";let n=t.length;n>0&&document.body.appendChild(r),t.forEach((async t=>{let i=a.get(t.innerText);if(!i){const n="".concat(Date.now().toString(36)).concat(Math.random().toString(36).substring(2)),o=s.value.renderAsync||s.value.render;let c="";try{c=await o(n,t.innerText,r)}catch(l){}i=await e.sanitizeMermaid("string"==typeof c?c:c.svg),a.set(t.innerText,i)}const o=document.createElement("p");o.className="".concat(At,"-mermaid"),o.setAttribute("data-processed",""),o.innerHTML=i,void 0!==t.dataset.line&&(o.dataset.line=t.dataset.line),t.replaceWith(o),0==--n&&r.remove()}))}}))}}},Go=e=>{var t;const r=null==(t=Lt.editorExtensions)?void 0:t.katex,n=null==r?void 0:r.instance,i=Pe(n);return Oe((()=>{if(!e.noKatex&&!i.value){const e=document.createElement("script");e.src=(null==r?void 0:r.js)||It.js,e.onload=()=>{i.value=window.katex},e.id="".concat(At,"-katex");const t=document.createElement("link");t.rel="stylesheet",t.href=(null==r?void 0:r.css)||It.css,t.id="".concat(At,"-katexCss"),Bt(e,"katex"),Bt(t)}})),i},$o=(e,t)=>{const r=e.renderer.rules.fence.bind(e.renderer.rules);e.renderer.rules.fence=(e,n,i,s,o)=>{const a=e[n],l=a.content.trim();if("mermaid"===a.info){let r;return e[n].map&&0===e[n].level&&(r=e[n].map[0],e[n].attrSet("data-line",String(r))),'<div class="'.concat(At,'-mermaid" ').concat(void 0!==r?"data-line="+r:""," data-mermaid-theme=").concat(t.themeRef.value,">").concat(l,"</div>")}return r(e,n,i,s,o)}},Zo=(e,t)=>{let r=!0,n=!0;const i=e.posMax,s=t>0?e.src.charCodeAt(t-1):-1,o=t+1<=i?e.src.charCodeAt(t+1):-1;return(32===s||9===s||o>=48&&o<=57)&&(n=!1),(32===o||9===o)&&(r=!1),{can_open:r,can_close:n}},Ko=(e,t)=>{let r,n,i,s;if("$"!==e.src[e.pos])return!1;if(i=Zo(e,e.pos),!i.can_open)return t||(e.pending+="$"),e.pos+=1,!0;const o=e.pos+1;for(r=o;-1!==(r=e.src.indexOf("$",r));){for(s=r-1;"\\"===e.src[s];)s-=1;if((r-s)%2==1)break;r+=1}return-1===r?(t||(e.pending+="$"),e.pos=o,!0):r-o==0?(t||(e.pending+="$$"),e.pos=o+1,!0):(i=Zo(e,r),i.can_close?(t||(n=e.push("math_inline","math",0),n.markup="$",n.content=e.src.slice(o,r)),e.pos=r+1,!0):(t||(e.pending+="$"),e.pos=o,!0))},Jo=(e,t,r,n)=>{let i,s,o,a,l=!1,c=e.bMarks[t]+e.tShift[t],u=e.eMarks[t];if(c+2>u||"$$"!==e.src.slice(c,c+2))return!1;if(c+=2,i=e.src.slice(c,u),n)return!0;for("$$"===i.trim().slice(-2)&&(i=i.trim().slice(0,-2),l=!0),o=t;!(l||(o++,o>=r||(c=e.bMarks[o]+e.tShift[o],u=e.eMarks[o],c<u&&e.tShift[o]<e.blkIndent)));)"$$"===e.src.slice(c,u).trim().slice(-2)&&(a=e.src.slice(0,u).lastIndexOf("$$"),s=e.src.slice(c,a),l=!0);e.line=o+1;const h=e.push("math_block","math",0);return h.block=!0,h.content=(i&&i.trim()?i+"\n":"")+e.getLines(t+1,o,e.tShift[t],!0)+(s&&s.trim()?s:""),h.map=[t,e.line],h.markup="$$",!0},Yo=(e,t)=>{e.inline.ruler.after("escape","math_inline",Ko),e.block.ruler.after("blockquote","math_block",Jo,{alt:["paragraph","reference","blockquote","list"]}),e.renderer.rules.math_inline=(e,r)=>(e=>{if(t.katexRef.value){const r=t.katexRef.value.renderToString(e,{throwOnError:!1});return'<span class="'.concat(At,'-katex-inline" data-processed>').concat(r,"</span>")}return'<span class="'.concat(At,'-katex-inline">').concat(e,"</span>")})(e[r].content),e.renderer.rules.math_block=(e,r)=>((e,r)=>{if(t.katexRef.value){const n=t.katexRef.value.renderToString(e,{throwOnError:!1,displayMode:!0});return'<p class="'.concat(At,'-katex-block" data-line=').concat(r," data-processed>").concat(n,"</p>")}return'<p class="'.concat(At,'-katex-block" data-line=').concat(r,">").concat(e,"</p>")})(e[r].content,e[r].map[0])+"\n"},Xo=(e,t)=>{const r=(t=t||{}).marker||"!",n=r.charCodeAt(0),i=r.length;let s="",o="";const a=(e,t,r,n,i)=>{const s=e[t];return"admonition_open"===s.type?(e[t].attrPush(["class","".concat(At,"-admonition ").concat(At,"-admonition-").concat(s.info)]),e[t].attrSet("data-line",String(e[t].map[0]))):"admonition_title_open"===s.type&&e[t].attrPush(["class","".concat(At,"-admonition-title")]),i.renderToken(e,t,r)};e.block.ruler.before("code","admonition",((e,t,a,l)=>{let c,u,h,d=!1,p=e.bMarks[t]+e.tShift[t],f=e.eMarks[t];if(n!==e.src.charCodeAt(p))return!1;for(c=p+1;c<=f&&r[(c-p)%i]===e.src[c];c++);const m=Math.floor((c-p)/i);if(3!==m)return!1;c-=(c-p)%i;const g=e.src.slice(p,c);if((e=>{const t=e.trim().split(" ",2);o="",s=t[0],t.length>1&&(o=e.substring(s.length+2)),(""===o||!o)&&(o=s)})(e.src.slice(c,f)),l)return!0;for(u=t;u++,!(u>=a||(p=e.bMarks[u]+e.tShift[u],f=e.eMarks[u],p<f&&e.sCount[u]<e.blkIndent));)if(n===e.src.charCodeAt(p)&&!(e.sCount[u]-e.blkIndent>=4)){for(c=p+1;c<=f&&r[(c-p)%i]===e.src[c];c++);if(!(Math.floor((c-p)/i)<m||(c-=(c-p)%i,c=e.skipSpaces(c),c<f))){d=!0;break}}const _=e.parentType,v=e.lineMax;return e.parentType="root",e.lineMax=u,h=e.push("admonition_open","div",1),h.markup=g,h.block=!0,h.info=s,h.map=[t,u],h=e.push("admonition_title_open","p",1),h.markup=g+" "+s,h.map=[t,u],h=e.push("inline","",0),h.content=o,h.map=[t,e.line-1],h.children=[],h=e.push("admonition_title_close","p",-1),h.markup=g+" "+s,e.md.block.tokenize(e,t+1,u),h=e.push("admonition_close","div",-1),h.markup=e.src.slice(p,c),h.block=!0,e.parentType=_,e.lineMax=v,e.line=u+(d?1:0),!0}),{alt:["paragraph","reference","blockquote","list"]}),e.renderer.rules.admonition_open=a,e.renderer.rules.admonition_title_open=a,e.renderer.rules.admonition_title_close=a,e.renderer.rules.admonition_close=a},Qo=(e,t)=>{e.renderer.rules.heading_open=(r,n)=>{var i;const s=r[n],o=(null==(i=r[n+1].children)?void 0:i.reduce(((e,t)=>e+(t.content||"")),""))||"",a=s.markup.length;return t.headsRef.value.push({text:o,level:a}),s.map&&0===s.level&&(s.attrSet("data-line",String(s.map[0])),s.attrSet("id",t.mdHeadingId(o,a,t.headsRef.value.length))),e.renderer.renderToken(r,n,t)},e.renderer.rules.heading_close=(e,t,r,n,i)=>i.renderToken(e,t,r)},ea=(e,t)=>{const r=e.renderer.rules.fence,n=e.utils.unescapeAll,i=/\[(\w*)(?::([\w ]*))?\]/;function s(e){return e.info?n(e.info).trim():""}function o(e){const t=s(e),[r=null,n=""]=(i.exec(t)||[]).slice(1);return[r,n]}function a(e){const t=s(e);return t?t.split(/(\s+)/g)[0]:""}e.renderer.rules.fence=(e,n,s,l,c)=>{if(e[n].hidden)return"";const[u,h]=o(e[n]);if(null===u)return r(e,n,s,l,c);let d,p,f,m,g="",_="";for(let v=n;v<e.length&&(d=e[v],[p,f]=o(d),p===u);v++)d.info=d.info.replace(i,""),d.hidden=!0,m=v-n>0?"":" checked",g+='<li><input type="radio" name="label-group-'.concat(t.editorId,"-").concat(n,'"').concat(m,'><label for="group-').concat(t.editorId,"-").concat(n,"-tab-").concat(v-n,'" onclick="this.previousElementSibling.click()">').concat(f||a(d),"</label></li>\n"),_+='<input type="radio" id="group-'.concat(t.editorId,"-").concat(n,"-tab-").concat(v-n,'" name="group-').concat(t.editorId,"-").concat(n,'"').concat(m,">\n")+r(e,v,s,l,c);return'<div class="code-tabs">\n<ul>\n'+g+"</ul>\n"+_+"</div>"}},ta=(e,t)=>{const{editorConfig:r,markdownItConfig:n,markdownItPlugins:i}=Lt,s=Le("editorId"),o=Le("showCodeRowNumber"),a=Le("theme"),l=Ne([]),c=Wo(e),u=Go(e),{reRenderRef:h,replaceMermaid:d}=Vo(e),p=ko({html:!0,breaks:!0});n(p,{editorId:s});const f=[{type:"katex",plugin:Yo,options:{katexRef:u}},{type:"image",plugin:Co,options:{figcaption:!0,classes:"md-zoom"}},{type:"admonition",plugin:Xo,options:{}},{type:"taskList",plugin:Lo,options:{}},{type:"heading",plugin:Qo,options:{mdHeadingId:e.mdHeadingId,headsRef:l}},{type:"codeTabs",plugin:ea,options:{editorId:s}}];e.noMermaid||f.push({type:"mermaid",plugin:$o,options:{themeRef:a}}),i(f,{editorId:s}).forEach((e=>{p.use(e.plugin,e.options)}));const m=p.options.highlight;p.set({highlight:(t,r,n)=>{if(m){const e=m(t,r,n);if(e)return e}let i;i=!e.noHighlight&&c.value?c.value.getLanguage(r)?c.value.highlight(t,{language:r,ignoreIllegals:!0}).value:c.value.highlightAuto(t).value:p.utils.escapeHtml(t);const s=o?(e=>{if(!e)return e;const t=e.split("\n"),r=['<span rn-wrapper aria-hidden="true">'];return t.forEach((()=>{r.push("<span></span>")})),r.push("</span>"),'<span class="code-block">'.concat(e,"</span>").concat(r.join(""))})(i.replace(/^\n+|\n+$/g,"")):'<span class="code-block">'.concat(i.replace(/^\n+|\n+$/g,""),"</span>");return'<pre><code class="language-'.concat(r,'" language=').concat(r,">").concat(s,"</code></pre>")}}),(e=>{["paragraph_open","table_open","ordered_list_open","bullet_list_open","blockquote_open","hr","html_block","fence"].forEach((t=>{const r=e.renderer.rules[t];e.renderer.rules[t]=r?(e,t,n,i,s)=>{let o;const a=r(e,t,n,i,s);return e[t].map&&0===e[t].level&&!/^<!--/.test(a)?(o=e[t].map[0],a.replace(/^(<[^>]*)/,'$1 data-line="'.concat(o,'"'))):a}:(e,t,r,n,i)=>{let s;return e[t].map&&0===e[t].level&&(s=e[t].map[0],e[t].attrSet("data-line",String(s))),i.renderToken(e,t,r)}}))})(p);const g=Ne(e.sanitize(p.render(e.modelValue))),_=()=>{Ot.emit(s,"buildFinished",g.value),e.onHtmlChanged(g.value),e.onGetCatalog(l.value),Ot.emit(s,Rt,l.value),d()};Oe(_);const v=Ft((async()=>{l.value=[],g.value=e.sanitize(p.render(e.modelValue)),_()}),void 0!==(null==r?void 0:r.renderDelay)?null==r?void 0:r.renderDelay:t?0:500),k=Me((()=>(e.noKatex||u.value)&&(e.noHighlight||c.value)));return Re([Be(e,"modelValue"),k,h],v),Oe((()=>{Ot.on(s,{name:"pushCatalog",callback(){Ot.emit(s,Rt,l.value)}})})),{html:g}},ra={modelValue:{type:String,default:""},setting:{type:Object,default:()=>({})},onHtmlChanged:{type:Function,default:()=>{}},onGetCatalog:{type:Function,default:()=>{}},mdHeadingId:{type:Function,default:()=>""},noMermaid:{type:Boolean,default:!1},sanitize:{type:Function,default:e=>e},
// 不使用该函数功能
noKatex:{type:Boolean,default:!1},formatCopiedText:{type:Function,default:e=>e},noHighlight:{type:Boolean,default:!1},previewOnly:{type:Boolean,default:!1},noImgZoomIn:{type:Boolean},sanitizeMermaid:{type:Function}};Boolean,Boolean,Boolean,Boolean,Boolean,Boolean,Boolean;const na=ze({name:"ContentPreview",props:ra,setup(e){const t=Le("editorId"),r=Le("previewTheme"),n=Le("showCodeRowNumber"),{html:i}=ta(e,e.previewOnly);return Uo(e,i),Ho(e,i),()=>Te(Fe,null,[Te("div",{id:"".concat(t,"-preview-wrapper"),class:"".concat(At,"-preview-wrapper"),"data-show":e.setting.preview,key:"content-preview-wrapper"},[Te("article",{id:"".concat(t,"-preview"),class:["".concat(At,"-preview"),"".concat(null==r?void 0:r.value,"-theme"),n&&"".concat(At,"-scrn")],innerHTML:i.value},null)]),!e.previewOnly&&Te("div",{id:"".concat(t,"-html-wrapper"),class:"".concat(At,"-preview-wrapper"),"data-show":e.setting.htmlPreview,key:"html-preview-wrapper"},[Te("div",{class:"".concat(At,"-html")},[i.value])])])}}),ia={
/**
   * markdown content.
   *
   * @default ''
   */
modelValue:{type:String,default:""},
/**
   * 主题，支持light和dark
   *
   * @default 'light'
   */
theme:{type:String,default:"light"},
/**
   * 外层类名
   *
   * @default ''
   */
class:{type:String,default:""},
/**
   * 预设语言名称
   *
   * @default 'zh-CN'
   */
language:{type:String,default:"zh-CN"},
/**
   * html变化事件
   */
onHtmlChanged:{type:Function},
/**
   * 获取目录结构
   */
onGetCatalog:{type:Function},
/**
   * 编辑器唯一标识
   *
   * @default 'md-editor-v3'
   */
editorId:{type:String,default:"md-editor-v3"},
/**
   * 预览中代码是否显示行号
   *
   * @default false
   */
showCodeRowNumber:{type:Boolean,default:!1},
/**
   * 预览内容样式
   *
   * @default 'default'
   */
previewTheme:{type:String,default:"default"},
/**
   * 编辑器样式
   */
style:{type:Object,default:()=>({})},
/**
   * 标题的id生成方式
   *
   * @default (text: string) => text
   */
mdHeadingId:{type:Function,default:e=>e},
/**
   *
   * 不能保证文本正确的情况，在marked编译md文本后通过该方法处理
   * 推荐DOMPurify、sanitize-html
   *
   * @default (text: string) => text
   */
sanitize:{type:Function,default:e=>e},
/**
   * 不使用该mermaid
   *
   * @default false
   */
noMermaid:{type:Boolean,default:!1},
/**
   * 不使用katex
   *
   * @default false
   */
noKatex:{type:Boolean,default:!1},
/**
   * 代码主题
   *
   * @default 'atom'
   */
codeTheme:{type:String,default:"atom"},
/**
   * 不插入iconfont链接
   *
   * @default false
   */
noIconfont:{type:Boolean},
/**
   * 复制代码格式化方法
   *
   * @default (text) => text
   */
formatCopiedText:{type:Function,default:e=>e},
/**
   * 某些预览主题的代码模块背景是暗色系
   * 将这个属性设置为true，会自动在该主题下的light模式下使用暗色系的代码风格
   *
   * @default true
   */
codeStyleReverse:{type:Boolean,default:!0},
/**
   * 需要自动调整的预览主题
   *
   * @default ['default', 'mk-cute']
   */
codeStyleReverseList:{type:Array,default:["default","mk-cute"]},noHighlight:{type:Boolean,default:!1},
/**
   * 是否关闭编辑器默认的放大缩小功能
   */
noImgZoomIn:{type:Boolean,default:!1},
/**
   * 自定义的图标
   */
customIcon:{type:Object,default:{}},sanitizeMermaid:{type:Function,default:e=>Promise.resolve(e)}};Boolean,Boolean,Boolean,Boolean,Boolean,Boolean,Boolean,Boolean,Boolean,Boolean,Boolean;const sa=["onHtmlChanged","onGetCatalog"],oa=ze({name:"MdPreview",props:ia,emits:sa,setup(e,t){const{editorId:r,noKatex:n,noMermaid:i,noHighlight:s}=e;return(e=>{var t,r;const{editorId:n}=e,i=null==(r=null==(t=Lt)?void 0:t.editorExtensions)?void 0:r.highlight;qe("editorId",n),qe("theme",Me((()=>e.theme))),qe("language",Me((()=>e.language))),qe("highlight",Me((()=>{const t={...Tt,...null==i?void 0:i.css},r=e.codeStyleReverse&&e.codeStyleReverseList.includes(e.previewTheme)?"dark":e.theme;return{js:(null==i?void 0:i.js)||Et,css:t[e.codeTheme]?t[e.codeTheme][r]:Tt.atom[r]}}))),qe("showCodeRowNumber",e.showCodeRowNumber);const s=Me((()=>{var t,r;const n={...Dt,...null==(r=null==(t=Lt)?void 0:t.editorConfig)?void 0:r.languageUserDefined};return n[e.language]?n[e.language]:Dt["zh-CN"]}));qe("usedLanguageText",s),qe("previewTheme",Me((()=>e.previewTheme))),qe("customIcon",Me((()=>e.customIcon)))})(e),(e=>{Oe((()=>{var t,r;if(!e.noIconfont)if("svg"===Lt.iconfontType){const e=document.createElement("script");e.src=(null==(t=Lt.editorExtensions)?void 0:t.iconfont)||"https://at.alicdn.com/t/c/font_2605852_prouiefeic.js",e.id="".concat(At,"-icon"),Bt(e)}else{const e=document.createElement("link");e.rel="stylesheet",e.href=(null==(r=Lt.editorExtensions)?void 0:r.iconfontClass)||"https://at.alicdn.com/t/c/font_2605852_prouiefeic.css",e.id="".concat(At,"-icon-class"),Bt(e)}}))})(e),Ie((()=>{Ot.clear(r)})),()=>Te("div",{id:r,class:[At,e.class,"dark"===e.theme&&"".concat(At,"-dark"),"".concat(At,"-previewOnly")],style:e.style},[Te(na,{modelValue:e.modelValue,onHtmlChanged:r=>{e.onHtmlChanged?e.onHtmlChanged(r):t.emit("onHtmlChanged",r)},onGetCatalog:r=>{e.onGetCatalog?e.onGetCatalog(r):t.emit("onGetCatalog",r)},mdHeadingId:e.mdHeadingId,noMermaid:i,sanitize:e.sanitize,noKatex:n,formatCopiedText:e.formatCopiedText,noHighlight:s,noImgZoomIn:e.noImgZoomIn,previewOnly:!0,sanitizeMermaid:e.sanitizeMermaid},null)])}});oa.install=e=>(e.component(oa.name,oa),e);const aa=[{title:"答案存在错误",items:["结果、事实错误","未发现问题错误","答案和问题无关联","未充分理解问题","图片或视频无关"]},{title:"语法问题",items:["答案看不懂、逻辑冲突","答案出现重复、乱码等","结构、格式错误","语句不通畅、连贯性问题"]},{title:"违法/敏感信息",items:["出现种族、性别等歧视信息","出现色情、暴力等不良信息","出现违法、违规信息","不良价值观"]}],la=He("feedbackStore",(()=>{const e=Ne(!1),t=Ne([]),{currentAgentId:r}=Ue(de());return{curOptionGroups:Me((()=>{var e,n,i;const s=null==(n=(e=t.value).find)?void 0:n.call(e,(e=>e.agent===r.value));return s?s.groups:t.value.length>0?null==(i=t.value[0])?void 0:i.groups:aa})),getDislikeConfig:async function(){if(e.value||t.value.length>0)return;e.value=!0;const{data:r,code:n}=await pe.get(fe.getDislikeOptions);200===n&&r&&(t.value=(null==r?void 0:r.dislike_config)||[]),e.value=!1}}})),ca=(e=>(tt("data-v-5f8142cb"),e=e(),rt(),e))((()=>$e("p",{class:"feedBackHeader text-left text-[20px]"},"您的反馈将帮助天工进步提升",-1))),ua={class:"text-[14px]"},ha={class:"mb-[14px] font-medium"},da=["onClick"],pa={class:"dialog-footer flex justify-end"},fa=ve(ze({__name:"FeedbackDialog",props:{visible:{type:Boolean,default:!1}},emits:["update:visible","submitUnLike"],setup(e,{emit:t}){const r=Me({get:()=>a.visible,set:e=>{l("update:visible",e)}}),n=Me((()=>!c.value.length&&!u.value.trim())),i=la(),{curOptionGroups:s}=Ue(i),{getDislikeConfig:o}=i,a=e,l=t,c=Ne([]),u=Ne("");Oe((()=>{o()}));const h=()=>{l("update:visible",!1),u.value="",c.value=[]},d=()=>{n.value||(l("submitUnLike",{reason:c.value,content:u.value.trim()}),h())};return(e,t)=>{const i=me,o=ge,a=_e;return We(),Ve(a,{class:"feedBackDialog rounded-xl p-5 text-secondary",modelValue:Je(r),"onUpdate:modelValue":t[1]||(t[1]=e=>et(r)?r.value=e:null),top:"10vh",style:{width:"566px"},onClosed:h},{header:Ge((()=>[ca])),footer:Ge((()=>[$e("span",pa,[$e("div",{class:"font-['PingFang SC'] mr-3 flex !h-[40px] w-[110px] cursor-pointer items-center justify-center rounded-lg bg-neutral-100 px-5 py-3 !text-[15px] font-medium leading-normal text-primary",onClick:h}," 取消 "),Te(o,{class:Ke(["font-['PingFang SC'] mr-3 flex !h-[40px] w-[110px] cursor-pointer items-center justify-center rounded-lg bg-neutral-100 px-5 py-3 !text-[15px] font-medium leading-normal text-primary",Je(n)?"!border-[#6DAEFC] !bg-[#6DAEFC]":"!border-[#007CF8] !bg-[#007CF8] !text-[#fff]"]),type:"primary",disabled:Je(n),onClick:d},{default:Ge((()=>[Ze(" 提交 ")])),_:1},8,["class","disabled"])])])),default:Ge((()=>[$e("div",ua,[(We(!0),Ye(Fe,null,Xe(Je(s),(e=>(We(),Ye("div",{class:"dialogItem mb-[12px]",key:e.title},[$e("p",ha,Qe(e.title),1),$e("div",null,[(We(!0),Ye(Fe,null,Xe(e.items,(e=>(We(),Ye("a",{class:Ke(["selected hover:border-blue mb-[10px] mr-[10px] inline-block cursor-pointer whitespace-nowrap rounded-[4px] border-[1px] border-[#E5E6EB] px-[12px] py-[8px]",{selectedReson:Je(c).includes(e)}]),key:e,onClick:t=>(e=>{const t=c.value.indexOf(e);-1!==t?c.value.splice(t,1):c.value.push(e)})(e)},Qe(e),11,da)))),128))])])))),128)),Te(i,{class:"feedBackInput w-[100%]",modelValue:Je(u),"onUpdate:modelValue":t[0]||(t[0]=e=>et(u)?u.value=e:null),size:"large","show-word-limit":"",maxlength:"50",rows:3,type:"textarea",placeholder:"其他",resize:"none"},null,8,["modelValue"])])])),_:1},8,["modelValue"])}}}),[["__scopeId","data-v-5f8142cb"]]),ma={class:"flex items-center justify-between pt-2 text-secondary"},ga={class:"flex items-center space-x-5"},_a=(e=>(tt("data-v-558cde60"),e=e(),rt(),e))((()=>$e("span",{class:"text-[14px] leading-[1.7] text-secondary group-hover:text-blue"},"分享",-1))),va={class:"text-[14px] leading-[1.7] text-secondary group-hover:text-blue"},ka={class:"flex items-center space-x-[20px]"},ba=ve(ze({__name:"OprBar",props:{canRefresh:Boolean,canShare:{type:Boolean,default:!0},like:Boolean,conversationId:String,askId:String,
// agentId
source:String,ask:String,docId:String,type:{type:String,require:!1},level:Number,origin:{type:String,default:"search_page"}},emits:["askAgain","update:share-visible"],setup(e,{emit:t}){const{currentAgentInfo:r,currentAgentConfig:n,currentAgentId:i}=Ue(de()),{updateLikeStatus:s,updateRelateDocId:o}=de(),a=lt(),{createDocWithAsk:l,checkDocById:c}=a,u=Me((()=>{const e=r.value.detailList.find((e=>e.askId===p.askId));if(!e||!e.data)return"";if(e.searchPattern===Ae.research){const t=ut(e.data.filter((e=>"markdown"===e.type)));return Array.isArray(t)?t.map((e=>{try{return"string"==typeof e.content&&(e.content=JSON.parse(e.content)),Se(e,"content[0].messages[0].text","")}catch(t){return""}})).join("\n"):""}let t=Ee(null==e?void 0:e.data,(e=>"markdown"===e.type));if(!t)return"";const n=ut(t);"string"==typeof n.content&&(n.content=JSON.parse(n.content));return Se(n,"content[0].messages[0].text","")})),h=Me((()=>{var e;const t=r.value.detailList.find((e=>e.askId===p.askId));let n=null==(e=null==t?void 0:t.data)?void 0:e.find((e=>e.type===ye.image_gen_text||e.type===ye.read_file));if(!n)return;const i=ut(n);"string"==typeof i.content&&(i.content=JSON.parse(i.content));const{id:s,sha1:o}=Se(i,"content[0].messages[0].fileInfos[0]",{id:"",sha1:""}),a=Se(i,"content[0].messages[0].images[0].id","");return s||a?[{docId:s||a||"",sign:o||""}]:[]})),d=Me((()=>"search_page"===p.origin?{level:+p.level+1}:{agent_id:i.value})),p=e,f=Ne(!1),m=t;async function g(e){let t=1===e||2!==e&&null;(p.like&&t||!1===p.like&&!1===t)&&(t=null),!1===t&&(f.value=!0),t?be().reportImmediate({event:"".concat(p.origin,"_thumbsup_click"),event_info:{...d.value,origin:p.origin,entity:"thumbsup",event:"click",ask_id:p.askId,conversation_id:p.conversationId,action:1}}):null===t?be().reportImmediate({event:"".concat(p.origin,1===e?"_thumbsup_click":"_thumbsdown_click"),event_info:{...d.value,origin:p.origin,entity:1===e?"thumbsup":"thumbsdown",event:"click",ask_id:p.askId,conversation_id:p.conversationId,action:0}}):be().reportImmediate({event:"".concat(p.origin,"_thumbsdown_click"),event_info:{...d.value,origin:p.origin,entity:"thumbsdown",event:"click",ask_id:p.askId,conversation_id:p.conversationId,action:1}});200===(await pe.post(fe.toggleLikeStatus,{conversationId:p.conversationId,askId:p.askId,source:p.source,like:t,reason:"",content:"",platform:3,
// 端，1:安卓、2:iOS、3:pc
deviceType:"",appVersion:"",systemVersion:""})).code&&(t&&ke("感谢您的反馈",{icon:"success"}),s({askId:p.askId,like:t}))}const _=()=>{m("update:share-visible"),be().reportImmediate({event:"agent_chat_page"===p.origin?"agent_chat_page_answer_share_click":"search_page_share_button_click",event_info:{...d.value,origin:p.origin,entity:"agent_chat_page"===p.origin?"answer_share":"share_button",event:"click",ask_id:p.askId,conversation_id:p.conversationId,query:p.ask}})},v=()=>{m("askAgain",{ask_id:p.askId,content:p.ask,action:"repeat",file:h.value}),be().reportImmediate({event:"".concat(p.origin,"_rewrite_button_click"),event_info:{...d.value,origin:p.origin,entity:"rewrite_button",event:"click",ask_id:p.askId,conversation_id:p.conversationId}}),"search_page"==p.origin&&we("ask_question",{content:"search"}),"agent_chat_page"==p.origin&&we("ask_question",{content:"agent",agent_id:d.value.agent_id})},k=()=>{f.value=!1},b=async({reason:e,content:t})=>{200===(await pe.post(fe.toggleLikeStatus,{conversationId:p.conversationId,askId:p.askId,source:p.source,like:!1,reason:e.join(","),content:t,platform:3,
// 端，1:安卓、2:iOS、3:pc
deviceType:"",appVersion:"",systemVersion:""})).code&&(ke("感谢您的反馈",{icon:"success"}),s({askId:p.askId,like:!1}),be().reportImmediate({event:"".concat(p.origin,"_thumbsdown_submit_click"),event_info:{...d.value,origin:p.origin,entity:"thumbsdown_submit",event:"click",ask_id:p.askId,conversation_id:p.conversationId}}))},y=new ct(".copy-".concat(p.askId),{text:function(){return(e=u.value)?e.replace(/(!\[.*?\]\((https:\/\/picture-search\.tiangong.cn[^\s\\[\]]+)\))+/g,"").replace(/<audio src="(.+)"><\/audio>/g,"").replace(/<tiangong type="audio" id=".+" \/>/g,"").replace(/<tiangong type="image" id="\d+" \/>/g,"").replace(/#+ (.+)/g,"$1").replace(/(`{3}[\s\S]*?`{3}(?:(?!.)))|(`{3}[\s\S]*)|(`[\s\S]*?`{1}?)|(`[\s\S]*)|(?:\[(?:(?:number )|\^)?([\d]{1,2})\])/g,((e,t,r,n,i)=>t||r||n||i||"")).replace(/\n+/g,"\n"):"";var e}});y.on("success",(function(){ke("复制成功",{icon:"success"}),be().reportImmediate({event:"".concat(p.origin,"_copy_button_click"),event_info:{...d.value,origin:p.origin,entity:"copy_button",event:"click",ask_id:p.askId,conversation_id:p.conversationId}})})),y.on("error",(function(){ke("不支持复制",{icon:"error"})})),nt((()=>{y.destroy()}));const w=()=>{p.docId?(c(p.docId),be().reportImmediate({event:"".concat(p.origin,"_edit_view_button_click"),event_info:{...d.value,origin:p.origin,entity:"edit_view_button",event:"click",ask_id:p.askId,query:p.ask,client_id:200002,doc_id:p.docId,conversation_id:p.conversationId}})):(!async function(){if(!u.value)return;const e=await l({content:u.value,ask_id:p.askId,conversation_id:p.conversationId});o({askId:p.askId,docId:e})}(),be().reportImmediate({event:"".concat(p.origin,"_edit_button_click"),event_info:{...d.value,origin:p.origin,entity:"edit_button",event:"click",ask_id:p.askId,query:p.ask,client_id:200002,doc_id:p.docId,conversation_id:p.conversationId}}))};return(t,r)=>{var s,o;const a=xe,l=Ce,c=it("login");return We(),Ye("div",ma,[$e("div",ga,[e.canShare?st((We(),Ye("div",{key:0,class:"group flex cursor-pointer select-none items-center space-x-0.5",onClick:_},[Te(a,{class:"group-hover:text-blue",name:"i-share"}),_a])),[[c]]):ot("",!0),e.canRefresh?st((We(),Ye("div",{key:1,class:"group flex cursor-pointer select-none items-center space-x-0.5",onClick:v},[st(Te(a,{class:"group-hover:text-blue",name:"i-refresh"},null,512),[[c]]),$e("span",va,Qe(e.type===Je(ye).text_gen_picture?"重画":"重写"),1)])),[[c]]):ot("",!0)]),$e("div",ka,[Te(l,{effect:"dark",content:"喜欢",placement:"top","show-after":100},{default:Ge((()=>[st(Te(a,{class:"svg-btn",name:!0===e.like?"i-up-fill":"i-like",onClick:r[0]||(r[0]=e=>g(1))},null,8,["name"]),[[c]])])),_:1}),Te(l,{effect:"dark",content:"不喜欢",placement:"top","show-after":100},{default:Ge((()=>[st(Te(a,{class:"svg-btn",name:!1===e.like?"i-down-fill":"i-dislike",onClick:r[1]||(r[1]=e=>g(2))},null,8,["name"]),[[c]])])),_:1}),e.type!==Je(ye).text_gen_picture?(We(),Ve(l,{key:0,effect:"dark",content:"复制",placement:"top","show-after":100},{default:Ge((()=>[Te(a,{class:Ke(["svg-btn","copy-"+e.askId]),name:"i-copy"},null,8,["class"])])),_:1})):ot("",!0),"001"===Je(i)||(null==(o=null==(s=Je(n))?void 0:s.configs)?void 0:o.enable_document)?(We(),Ye(Fe,{key:1},[e.docId?(We(),Ve(l,{key:0,effect:"dark",content:"查看文档",placement:"top","show-after":100},{default:Ge((()=>[st(Te(a,{class:"svg-btn",onClick:w,name:"i-doc-view"},null,512),[[c]])])),_:1})):(We(),Ve(l,{key:1,effect:"dark",content:"编辑",placement:"top","show-after":100},{default:Ge((()=>[st(Te(a,{class:"svg-btn",name:"i-rewrite",onClick:w},null,512),[[c]])])),_:1}))],64)):ot("",!0)]),Te(fa,{visible:Je(f),"onUpdate:visible":k,onSubmitUnLike:b},null,8,["visible"])])}}}),[["__scopeId","data-v-558cde60"]]),ya=()=>{const e=Ne([]),t=Ne(!1);return{checked:e,checkedChange:t=>{if(e.value.includes(t)){const r=e.value.indexOf(t);e.value.splice(r,1)}else e.value.length>=5?ke("最多仅支持5组问答",{icon:"info"}):e.value.push(t)},checkAll:r=>{const n=[];for(let e=r.length-1;e>=0;e--){if(n.length>=5){ke("最多仅支持5组问答",{icon:"info"});break}n.unshift(r[e])}e.value=n,t.value=!t.value},isCheckAll:t}};function wa(){return at().appContext.config.globalProperties.emitter}export{oa as N,ba as O,ya as a,Ct as f,wa as u};
