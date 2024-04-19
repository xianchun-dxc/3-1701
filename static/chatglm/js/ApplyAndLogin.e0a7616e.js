(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ApplyAndLogin"],{2447:function(e,t,i){},5043:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"mSelectUniversity"},[i("div",{staticClass:"welcome"},[e._v("欢迎使用校园版GLM")]),i("div",{staticClass:"discription"},[e._v("请选择您所就读的学校")]),i("div",{staticClass:"selectUniversity"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedUniversity,expression:"selectedUniversity"}],staticClass:"input",attrs:{type:"text",placeholder:"选择学校",readonly:""},domProps:{value:e.selectedUniversity},on:{click:e.setShowUniversitySelectedList,input:function(t){t.target.composing||(e.selectedUniversity=t.target.value)}}}),i("span",{class:e.arrowDirection,on:{click:e.setReverseShowUniversitySelectedList}})]),i("MSelectModel",{attrs:{visible:e.showUniversitySelectedList,title:"选择学校",dataList:e.universityList},on:{"update:visible":function(t){e.showUniversitySelectedList=t},"update:selectedUniversity":e.handleSelectedUniversityUpdate}}),i("div",{staticClass:"btn",on:{click:e.jumpTo}},[e._v("确定")])],1)},n=[],o=i("ca39"),r=i("2360"),c=i("9781"),a=i("3191"),l=i("1607"),u=i("6c71"),d={components:{MSelectModel:c["a"]},inheritAttrs:!1,props:["visible"],computed:Object(o["a"])(Object(o["a"])({},Object(u["e"])("Home",["userInfo","sharedConversationId"])),{},{selectedUniversity:{get:function(){return Object(r["a"])(this.university,r["b"])},set:function(e){this.university=e}}}),watch:{showUniversitySelectedList:function(e){this.arrowDirection=e?"upArrow":"downArrow"}},data:function(){return{universityList:r["b"],university:"",showUniversitySelectedList:!1,arrowDirection:"downArrow"}},methods:{closeDialog:function(){this.$emit("update:visible",!1)},setShowUniversitySelectedList:function(){this.showUniversitySelectedList=!0,this.arrowDirection="upArrow"},setHideUniversitySelectedList:function(){this.showUniversitySelectedList=!1,this.arrowDirection="downArrow"},selectUniversity:function(e){this.$store.commit("Home/SET_INSTITUTION",e),this.university=e,this.showUniversitySelectedList=!1,this.arrowDirection="downArrow",Object(l["e"])("university",e),Object(a["N"])(this.university),this.closeDialog()},setReverseShowUniversitySelectedList:function(){this.showUniversitySelectedList?this.setHideUniversitySelectedList():this.setShowUniversitySelectedList()},jumpTo:function(){var e;this.university?(this.$store.commit("Home/SET_INSTITUTION",this.university),Object(l["e"])("university",this.university),Object(a["N"])(this.university),this.closeDialog(),null!==(e=this.userInfo)&&void 0!==e&&e.agree_experience?this.sharedConversationId?this.$router.push({path:"detail",query:{source:"share",convo:this.sharedConversationId}}):this.$router.push("detail"):(this.$emit("update:visible",!1),this.$store.commit("Home/SET_SHOWTRYDIALOG",!0))):this.$message.success("请选择学校")},handleSelectedUniversityUpdate:function(e){this.selectedUniversity=e}}},v=d,h=(i("d777"),i("d30c")),p=Object(h["a"])(v,s,n,!1,null,"004add33",null);t["a"]=p.exports},"6b2f":function(e,t,i){},"6f6a":function(e,t,i){},9781:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"popup-container",on:{click:e.handleClickOutside}},[i("div",{staticClass:"content"},[i("div",{staticClass:"header"},[e._v(" "+e._s(e.title)+" "),i("div",{staticClass:"close",on:{click:e.closeModal}})]),i("div",{staticClass:"body"},[i("ul",e._l(e.dataList,(function(t,s){return i("li",{key:s,staticClass:"singleUniversityItem",on:{click:function(i){return e.selectUniversity(t.univ)}}},[i("div",{staticClass:"text",class:{selectedFont:e.university===t.univ}},[e._v(" "+e._s(t.name)+" ")]),e.university===t.univ?i("div",{staticClass:"onSelected"}):e._e()])})),0)])])])},n=[],o={inheritAttrs:!1,props:["visible","dataList","title"],data:function(){return{university:localStorage.getItem("university")||""}},methods:{selectUniversity:function(e){this.university=e,this.$emit("update:selectedUniversity",e),this.closeModal()},closeModal:function(){this.$emit("update:visible",!1),event.stopPropagation()},handleClickOutside:function(){var e=event.target,t=this.$el.querySelector(".content");t.contains(e)||this.$emit("update:visible",!1)}}},r=o,c=(i("d757"),i("d30c")),a=Object(c["a"])(r,s,n,!1,null,"31eb41b6",null);t["a"]=a.exports},c9ae:function(e,t,i){"use strict";i("6b2f")},d757:function(e,t,i){"use strict";i("2447")},d777:function(e,t,i){"use strict";i("6f6a")},ff5d:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("LoginLayout",{attrs:{type:"apply"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:!e.showSelectUniv,expression:"!showSelectUniv"}],staticClass:"apply-login-container"},[i("div",{staticClass:"content-wrap"},[0===e.selectIndex?i("Login",{ref:"login",attrs:{phone:e.phone},on:{loginResult:e.loginResult,changeSelectIndex:e.changeSelectIndex}}):e._e()],1)]),i("SelectUniversity",{attrs:{visible:e.showSelectUniv},on:{"update:visible":function(t){e.showSelectUniv=t}}})],1)},n=[],o=i("ca39"),r=(i("ef53"),i("c2a1"),i("6c71")),c=i("b663"),a=i("588e"),l=i("1607"),u=i("93f3"),d=i("5043"),v=i("c913"),h=i("4f8a"),p={data:function(){return{selectIndex:0,selectList:["用户登录"],phone:"",showSelectUniv:!1}},components:{LoginLayout:c["a"],Login:a["a"],SelectUniversity:d["a"]},computed:Object(o["a"])({},Object(r["e"])("Home",["institution","userInfo","sharedConversationId"])),watch:{selectIndex:function(e){var t=Object(v["b"])("source");"share"===t?this.sendPv({md:"return",ct:e?"login_pop":"apply_pop"}):this.sendPv({md:"home",ct:e?"login_pop":"apply_pop"})}},mounted:function(){var e=Object(v["b"])("source");"share"===e?this.sendPv({md:"return",ct:this.selectIndex?"login_pop":"apply_pop"}):this.sendPv({md:"home",ct:this.selectIndex?"login_pop":"apply_pop"})},methods:Object(o["a"])(Object(o["a"])({},Object(r["b"])("Home",["GetUserInfo"])),{},{select:function(e){var t=Object(v["b"])("source");this.selectIndex=e,"share"===t?this.sendCl({md:"return",ct:0===e?"apply":"login"}):this.sendCl({md:"home",ct:0===e?"apply":"login"})},changeSelectIndex:function(e,t){var i=this;this.selectIndex=e,this.phone=t,1===e&&(this.$message.error({message:"该账号已获得内测资格，可直接登录体验",duration:2e3}),this.$nextTick((function(){i.$refs.login.handelGetCode()})))},applyResult:function(e){if(e){Object(l["e"])(l["a"],"");var t="/detail";this.$router.push({path:t,query:{from:"apply"}})}},loginResult:function(e){var t=this;if(e){Object(l["e"])(l["a"],"");var i=h["p"]?"/gdetailweb":"/miniapp/home";this.GetUserInfo({forceUpdate:!0}).then((function(e){if(!u["a"]||null!==e&&void 0!==e&&e.institution){var s;Object(l["e"])("university",null===e||void 0===e?void 0:e.institution);var n,o,r=Object(v["b"])("from");if("miniapp"===r)return void(null===(n=window.wx)||void 0===n||null===(o=n.miniProgram)||void 0===o||o.reLaunch({url:"/pages/index/index"}));null!==(s=t.$route.query)&&void 0!==s&&s.redirect?t.$router.replace(t.$route.query.redirect):t.sharedConversationId?t.$router.push({path:i,query:{source:"share",convo:t.sharedConversationId}}):t.$router.push(i)}else t.showSelectUniv=!0}))}}})},y=p,f=(i("c9ae"),i("d30c")),m=Object(f["a"])(y,s,n,!1,null,"7e888e8d",null);t["default"]=m.exports}}]);