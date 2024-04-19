/*! For license information please see page.5a0fcb6a.js.LICENSE.txt */
(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([["3904"],{97114:function(e,t,n){"use strict";n.d(t,{CodeInputContent:function(){return c}});var r=n("92769"),o=n("88802"),i=n("52983"),a=n("37884"),c=(0,n("54650").withSuspense)(i.lazy((0,r._)(function(){var e;return(0,o.__generator)(this,function(t){switch(t.label){case 0:return e={},[4,a.FlowAccount.FlowAccountComponents.CodeInputContent];case 1:return[2,(e.default=t.sent(),e)]}})})))},15280:function(e,t,n){"use strict";n.d(t,{MobileInput:function(){return c}});var r=n("92769"),o=n("88802"),i=n("52983"),a=n("37884"),c=(0,n("54650").withSuspense)(i.lazy((0,r._)(function(){var e;return(0,o.__generator)(this,function(t){switch(t.label){case 0:return e={},[4,a.FlowAccount.FlowAccountComponents.MobileInput];case 1:return[2,(e.default=t.sent(),e)]}})})))},54650:function(e,t,n){"use strict";n.d(t,{withSuspense:function(){return a}});var r=n("9161"),o=n("97458"),i=n("52983"),a=function(e,t){var n,a=function(n){return(0,o.jsx)(i.Suspense,{fallback:t&&(0,o.jsx)(t,(0,r._)({},n)),children:(0,o.jsx)(e,(0,r._)({},n))})};return a.displayName=null!==(n=e.displayName)&&void 0!==n?n:null==t?void 0:t.displayName,a}},33440:function(e,t,n){"use strict";n.d(t,{ChatHeaderTitle:function(){return p},ChatHeaderTitleInChat:function(){return _}});var r=n("83316"),o=n("8831"),i=n("52935"),a=n("9161"),c=n("16044"),u=n("97458"),s=n("87608"),l=n.n(s),f=n("65042"),d=n("43582"),_=function(e){var t=(0,o._)({},(0,i._)(e));return(0,u.jsx)(p,(0,c._)((0,a._)({},t),{innerClassName:l()(d.center,(0,r._)({},d.mobile,(0,f.isMobile)())),className:d.leftTitle,titleClassName:d.titleText}))},p=function(e){var t=e.subTitle,n=e.title,r=e.onClick,o=e.onInnerClick,i=e.className,a=e.innerClassName,c=e.titleClassName;return(0,u.jsx)("div",{className:l()(d.container,i),onClick:r,style:{cursor:r?"pointer":"auto"},children:(0,u.jsxs)("div",{className:l()(d.inner,a),onClick:o,children:[n&&(0,u.jsx)("span",{className:l()(d.title,c,d["auto-ellipsis"]),children:n}),t&&(0,u.jsx)("span",{className:l()(d["sub-title"],d["auto-ellipsis"]),children:t})]})})}},86759:function(e,t,n){"use strict";n.d(t,{useAccountInfo:function(){return v}});var r=n("92769"),o=n("6462"),i=n("88802"),a=n("52983"),c=n("83911"),u=n("6397"),s=n("23813"),l=n("87382"),f=n("29794"),d=n("53268"),_=n("94686"),p=n("40852"),h=n("73704"),m=n("76185"),g=n("72676"),v=function(){var e,t=(0,g.useTranslateFn)(),n=(0,_.useUserInfo)(),v=(0,h.useConnectAccountInfo)(),b=function(){if(!((0,c.default)(n)||(0,c.default)(n.mobile)||(0,c.default)(n.country_code))&&0!==n.country_code){var e=n.mobile.replace("+".concat(n.country_code),"");return"+".concat(n.country_code," ").concat(e)}},C=function(e){if(!(0,c.default)(v))return v.find(function(t){return t.platform===e})},I=function(e){var t;return null===(t=C(e))||void 0===t?void 0:t.platform_screen_name},A=function(e){var t;return null===(t=C(e))||void 0===t?void 0:t.platform_email},w=(0,a.useMemo)(function(){var e=Object.keys(f.thirdLoginInfo),t=(0,u.default)(e.map(function(e){var t;return[e,{info:(null===(t=f.thirdLoginInfo[e])||void 0===t?void 0:t.isUseEmail)?A(e):I(e),bind:!(0,c.default)(C(e))}]}));return t.mobile={info:b(),bind:!(0,c.default)(n)&&n.country_code>0},t},[v,n]),y=function(e,t){if(!((0,c.default)(n)||(0,c.default)(t))){var r,i,a=null!==(i=null===(r=t.connect_account_info)||void 0===r?void 0:r.find(function(t){return t.platform===e}))&&void 0!==i?i:{},u=a.platform_email,s=a.platform_screen_name;if(!(((0,c.default)(u)||0===u.length)&&((0,c.default)(s)||0===s.length))){var l=(0,c.default)(n.connects)?[]:(0,o._)(n.connects),f=null==l?void 0:l.find(function(t){return t.platform===e});return(0,c.default)(f)?{platform:e,platform_email:u,platform_screen_name:s}:(!(0,c.default)(u)&&u.length>0&&(f.platform_email=u),!(0,c.default)(s)&&s.length>0&&(f.platform_screen_name=s),f)}}};var N=(e=(0,r._)(function(){var e,n,r,a,c,u,f,_;return(0,i.__generator)(this,function(i){switch(i.label){case 0:e=(0,l.createReportEvent)({eventName:"get_account_info"}),i.label=1;case 1:return i.trys.push([1,3,,4]),[4,m.apiService.setting.GetAccountInfo()];case 2:return r=i.sent().data,a=(0,p.getThirdLoginKeyList)(),u=null!==(c=null==r?void 0:null===(n=r.connect_account_info)||void 0===n?void 0:n.map(function(e){return e.platform}).filter(function(e){return!!e}))&&void 0!==c?c:[],f=(0,s.default)((0,o._)(a).concat((0,o._)(u))).map(function(e){return y(e,r)}).filter(function(e){return!!e}),(0,h.updateConnectAccountInfo)(f),e.success(),[2,f];case 3:return _=i.sent(),e.error({reason:"get account info failed",error:_}),d.Toast.error({content:t("system_error_toast"),showClose:!1}),[3,4];case 4:return[2]}})}),function(){return e.apply(this,arguments)});return(0,a.useEffect)(function(){!(0,c.default)(n)&&!(0,c.default)(n.connects)&&N()},[n]),{accountInfo:w,fetchAccountInfo:N}}},772:function(e,t,n){"use strict";n.r(t);var r=n("92769"),o=n("83316"),i=n("9161"),a=n("16044"),c=n("40509"),u=n("88802"),s=n("97458"),l=n("52983"),f=n("83911"),d=n("87608"),_=n.n(d),p=n("29794"),h=n("99766"),m=n("11361"),g=n("18545"),v=n("65042"),b=n("32156"),C=n("71383"),I=n("96317"),A=n("32208"),w=n("53268"),y=n("94686"),N=n("40852"),T=n("59240"),x=n("37884"),k=n("72676"),S=n("58416"),L=n("86759"),E=n("76628"),O=n("45646"),j=n("33440");t.default=function(){var e,t,n=(0,L.useAccountInfo)().accountInfo;(0,x.useFetchThirdLoginKeys)();var d=(0,k.useTranslateFn)(),F=(0,A.useNavigate)(),P=(0,y.useUserInfo)(),B=(0,y.useUserInfoAction)().updateUserInfo,R=(0,N.getThirdLoginKeyList)(),D=(0,N.useAuthStore)(function(e){return e.thirdLoginListLoaded}),U=(0,A.useLocation)(),M=(0,h.usePlatformRouteFromOAuth2)(U),W=(0,h.useAuthLoginDataRouteFromOAuth2)("bind",U),H=(0,c._)((0,l.useState)(!1),2),K=H[0],Z=H[1];var z=(e=(0,r._)(function(e){var t,n;return(0,u.__generator)(this,function(r){switch(r.label){case 0:if(!(W&&!K))return[3,1];return Z(!0),(0,m.resetAuthLoginDataFromRoute)(),[2,W];case 1:if(!e)return[3,3];return t="aweme_v2"===e?{scope:"user_info",optionalScope:""}:{},[4,x.FlowAccount.flowAccount.third.thirdPartyAuth(e,{oauth2Config:(0,i._)({type:"bind"},t)})];case 2:if(!(n=r.sent()))throw Error("Auth data is undefined");return[2,n];case 3:throw Error("bind error");case 4:return[2]}})}),function(t){return e.apply(this,arguments)});var G=(t=(0,r._)(function(e){var t,n,r,o,c,s,l,_,h;return(0,u.__generator)(this,function(u){switch(u.label){case 0:return[4,z(e)];case 1:n=(t=u.sent()).code,r=t.access_token,o=t.access_token_secret,c=t.platform_app_id,s=t.extra_params,u.label=2;case 2:return u.trys.push([2,4,,5]),[4,x.FlowAccount.passportApi.authBind({code:n,accessToken:r,accessTokenSecret:o,platformAppId:c,extraParams:s})];case 3:return l=u.sent(),(0,T.trackEvent)("bind_with_account",{type:"aweme_v2"===e?"douyin":e}),B((0,f.default)(null==P?void 0:P.connects)?l:(0,a._)((0,i._)({},l),{connects:l.connects.map(function(e){var t;return(0,a._)((0,i._)({},e),{platform_email:null==P?void 0:null===(t=P.connects.find(function(t){return t.platform===e.platform}))||void 0===t?void 0:t.platform_email})})})),[3,5];case 4:if(_=u.sent(),(0,g.isPassportApiError)(_)&&(_.code===g.PassportErrorCodes.ALREADY_BIND_CONFLICT||_.code===g.PassportErrorCodes.TARGET_BIND_CONFLICT)&&(e||M)){if(h=null!=e?e:M,(0,f.default)(h))throw Error("targetPlatform is undefined");w.Toast.warning({content:d(p.thirdLoginInfo[h].conflictTextKey),showClose:!1})}return[3,5];case 5:return[2]}})}),function(e){return t.apply(this,arguments)});return(0,s.jsx)(b.SamanthaLayout.MaxWidthLayout,{children:(0,s.jsxs)("div",{className:O.container,"data-testid":"setup_account_app",children:[(0,s.jsx)(C.ChatHeaderUI,{left:(0,s.jsx)(w.Button,{onClick:function(){return F(S.SETTINGS_PAGE)},icon:(0,s.jsx)(I.ArrowLeftIcon,{}),className:"icon-button"}),center:(0,s.jsx)(j.ChatHeaderTitle,{title:d("account_settings_title")})}),(0,s.jsx)("div",{className:_()(O.content,(0,o._)({},O["content-webkit"],(0,v.getIsIPhoneOrIPad)())),children:(0,s.jsx)(E.WebSettingComponents.AccountSettingContent,{userInfo:P,onUpdateUserInfo:B,thirdLoginKeys:R,thirdLoginListLoaded:D,mobileBindRoute:S.MOBILE_BIND_ROUTE,onConfirmDeleteAccount:function(){(0,T.trackEvent)("click_clear_account_confirm"),F(S.DELETE_ACCOUNT_ROUTE)},bindThirdAuth:G,accountInfo:n,blockClassName:O["setting-block"]})})]})})}},76628:function(e,t,n){"use strict";n.d(t,{WebSettingComponents:function(){return I},useSettingConfig:function(){return A}});var r=n("69420"),o=n("6462"),i=n("29048"),a=n("87382"),c=n("29794"),u=n("75995"),s=n("49503"),l=n("45431"),f=n("59240"),d=n("37884"),_=n("76185"),p=n("72676"),h=n("15280"),m=n("97114");function g(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==(void 0===t?"undefined":(0,i._)(t))?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=new function e(){var t;(0,r._)(this,e),g(this,"getLanguage",function(){return s.I18n.language}),g(this,"getTranslate",function(e){for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return(t=s.I18n).t.apply(t,[e].concat((0,o._)(r)))}),g(this,"useTranslateFn",p.useTranslateFn)},b=u.useFeatureConfigStore.getState().featureConfig,C=(0,c.initSettingKit)({i18n:v,logger:a.logger,trackEvent:f.trackEvent,ApiService:_.apiService,launchData:b,rawAxiosInstance:_.rawAxiosInstance,isEnableDebug:l.isEnableDebug,passportApi:d.FlowAccount.passportApi,flowAccount:d.FlowAccount.flowAccount,FlowAccountComponents:{MobileInput:h.MobileInput,CodeInputContent:m.CodeInputContent}}),I=C.WebSettingComponents,A=C.useSettingConfig;C.useSettingStore},73704:function(e,t,n){"use strict";n.d(t,{updateConnectAccountInfo:function(){return f},useConnectAccountInfo:function(){return l}});var r=n("9161"),o=n("16044"),i=n("33434"),a=n("37222"),c=n("85205"),u={baseAccountInfo:{},connectAccountInfo:[]},s=(0,c.create)()((0,a.subscribeWithSelector)(function(e){return(0,o._)((0,r._)({},u),{updateBaseAccountInfo:function(t){return e(function(){return{baseAccountInfo:t}})},updateConnectAccountInfo:function(t){return e(function(){return{connectAccountInfo:t}})}})})),l=function(){return s(function(e){return e.connectAccountInfo},i.shallow)},f=function(e){s.getState().updateConnectAccountInfo(e)}},39749:function(e,t,n){"use strict";n.d(t,{FileBizType:function(){return o}});var r,o=((r={})[r.BIZ_UNKNOWN=0]="BIZ_UNKNOWN",r[r.BIZ_BOT_ICON=1]="BIZ_BOT_ICON",r[r.BIZ_PROFILE_ICON=2]="BIZ_PROFILE_ICON",r[r.BIZ_AUDIO=3]="BIZ_AUDIO",r)},99766:function(e,t,n){"use strict";n.d(t,{useAuthLoginDataRouteFromOAuth2:function(){return g},useHandleAuthCallback:function(){return m},usePlatformRouteFromOAuth2:function(){return v}});var r=n("92769"),o=n("9161"),i=n("16044"),a=n("89334"),c=n("40509"),u=n("88802"),s=n("52983"),l=n("3820"),f=n("46593"),d=n("87382"),_=n("17997"),p=n("78597"),h=n("11361"),m=function(e){var t=e.location,n=e.navigate,f=e.context,m=f.logger,g=f.flowAccount,v=(0,d.createReportEvent)({logger:m,eventName:"third_party_auth_complete"}),b=(0,c._)((0,s.useState)(!1),2),C=b[0],I=b[1];return(0,s.useLayoutEffect)(function(){(0,p.execute)((0,r._)(function(){var e,r,c,s,f,d,p,b,C,A,w,y,N,T,x,k;return(0,u.__generator)(this,function(u){switch(u.label){case 0:try{r=(0,h.parseOAuthUrl)(t)}catch(e){return m.persist.error({message:"oauth2_callback_parameter_error",error:e}),I(!0),[2]}return c=r.access_token,s=r.code,d=(f=r.state).platform,p=f.navigatePath,b=f.type,C=f.entry,A=f.method,w=(0,a._)(f,["platform","navigatePath","type","entry","method"]),[4,g.third.getThirdPlatform(d)];case 1:if(!(y=u.sent()))return m.warning({message:"not_support_platform",error:Error("Not support platform from oauth2 callback parameter state."),meta:{parsedState:f}}),I(!0),[2];if(T=(N=y.config).platformId,x=N.extraParams,k={authLoginData:{platform_app_id:T,access_token:c,code:s,extra_params:x},type:b,platform:d},"google"===d&&!T)return m.persist.error({message:"not_support_google_region",error:Error("Not support region to auth google platform from oauth2 route parameter.")}),v.error({reason:"not_support",meta:{platform:"google",from:"redirect"}}),I(!0),[2];if(v.success({meta:{platform:d,from:"redirect"}}),(0,h.isPostMessageRedirect)(A)&&(0,l.default)(null===(e=window.opener)||void 0===e?void 0:e.postMessage))window.opener.postMessage((0,i._)((0,o._)({},w),{oauth2:k}),window.location.origin),window.close();else if(!(0,h.isPostMessageRedirect)(A)){if(!(0,_.isCurrentEntry)(C))return window.location.href="".concat(window.location.origin).concat((0,_.getFullPath)(t.pathname,(0,_.getBasename)(C))).concat(t.search).concat(t.hash),[2];n(p,{state:(0,i._)((0,o._)({},w),{oauth2:k})})}return[2]}})}))},[]),{error:C}},g=function(e,t){var n,r,o,i=(0,s.useRef)(null===(n=t.state)||void 0===n?void 0:n.oauth2);if((null===(r=t.state)||void 0===r?void 0:r.oauth2)&&(i.current=null===(o=t.state)||void 0===o?void 0:o.oauth2),i.current&&window.history.replaceState((0,f.default)(t.state,"oauth2"),""),!!(0,h.isOAuth2RouteParameter)(i.current)){if(i.current.type===e)return i.current.authLoginData}},v=function(e){var t,n=null===(t=e.state)||void 0===t?void 0:t.oauth2;if((0,h.isOAuth2RouteParameter)(n))return n.platform}},3123:function(e,t,n){"use strict";n.d(t,{ImageCrop:function(){return d}});var r=n("92769"),o=n("40509"),i=n("88802"),a=n("97458"),c=n("64650"),u=n("52983"),s=n("78597"),l=n("53268"),f=n("75662"),d=function(e){var t,n=e.visible,d=e.title,_=e.image,p=e.loading,h=e.okText,m=e.cancelText,g=e.onCancel,v=e.onCropComplete,b=e.onComplete,C=(0,o._)((0,u.useState)(null),2),I=C[0],A=C[1],w=(0,o._)((0,u.useState)(null),2),y=w[0],N=w[1],T=(0,o._)((0,u.useState)(null),2),x=T[0],k=T[1],S=(0,o._)((0,u.useState)({x:0,y:0}),2),L=S[0],E=S[1],O=(0,o._)((0,u.useState)(1),2),j=O[0],F=O[1];var P=(t=(0,r._)(function(e,t){var n,r;return(0,i.__generator)(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,(0,s.getCroppedImg)(_,t)];case 1:return(n=e.sent())&&(A(n.base64),N(n.blob),k(n.fileType),null==v||v(n)),[3,3];case 2:return e.sent(),[3,3];case 3:return[2]}})}),function(e,n){return t.apply(this,arguments)});return(0,a.jsx)(l.Modal,{visible:n,centered:!0,motion:!1,title:d,width:450,onCancel:function(){A(""),null==g||g()},onOk:function(){I&&x&&(null==b||b({blob:y,base64:I,fileType:x}))},confirmLoading:p,okButtonProps:{disabled:!I||!x,"data-testid":"profile_upload_ok"},className:f.modal,okText:h,cancelText:m,children:(0,a.jsx)("div",{className:f["crop-container"],children:(0,a.jsx)(c.default,{image:_,objectFit:"contain",crop:L,zoom:j,aspect:1,cropShape:"round",onCropChange:E,onZoomChange:F,onCropComplete:P})})})}},71383:function(e,t,n){"use strict";n.d(t,{ChatHeaderUI:function(){return f}});var r=n("83316"),o=n("40509"),i=n("97458"),a=n("52983"),c=n("87608"),u=n.n(c),s=n("78597"),l=n("55734"),f=function(e){var t=e.left,n=e.center,c=e.right,f=e.className,d=e.innerClassName,_=e.backgroundVisible,p=e.autoCenter,h=void 0===p||p,m=e.leftClassName,g=(0,o._)((0,a.useState)(!h),2),v=g[0],b=g[1];(0,a.useEffect)(function(){h&&b(!0)},[h]);var C=(0,s.useResizeObserver)(),I=C.ref,A=C.width,w=(0,s.useResizeObserver)(),y=w.ref,N=w.width,T=Math.max(void 0===A?0:A,void 0===N?0:N),x=function(e){var r=e.leftContainerRef,o=e.rightContainerRef,a=e.leftMinWidth,s=e.rightMinWidth;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{ref:r,className:u()(l.left,m),style:{minWidth:s},children:t}),n&&(0,i.jsx)("div",{className:l.center,children:n}),(0,i.jsx)("div",{ref:o,className:l.right,style:{minWidth:a},children:c})]})};return(0,i.jsxs)("div",{className:u()(l.container,f,(0,r._)({},l["hide-background"],!(void 0===_||_))),children:[h&&(0,i.jsx)("div",{className:u()(l.inner,l.hidden),children:x({leftContainerRef:I,rightContainerRef:y})}),(0,i.jsx)("div",{className:u()(l.inner,d,(0,r._)({},l.hidden,!v)),children:x({leftMinWidth:h?T:void 0,rightMinWidth:h?T:void 0})})]})}},43582:function(e){"use strict";e.exports={"auto-ellipsis":"auto-ellipsis-_210c1",autoEllipsis:"auto-ellipsis-_210c1",center:"center-_5216a",container:"container-_736b0",hoverable:"hoverable-_3cf02",inner:"inner-_5528d",left:"left-_16dab",leftTitle:"leftTitle-_7d1fa",mobile:"mobile-_72791","sub-title":"sub-title-_85fe5",subTitle:"sub-title-_85fe5",title:"title-f1a5e2",titleText:"titleText-_9e5a3"}},45646:function(e){"use strict";e.exports={"chat-header":"chat-header-_870cf",chatHeader:"chat-header-_870cf",container:"container-_6f8ee",content:"content-_9c78b","conversation-header":"conversation-header-_6df8a",conversationHeader:"conversation-header-_6df8a",footer:"footer-f1c9bf","icon-terminal":"icon-terminal-_69c64",iconTerminal:"icon-terminal-_69c64",img:"img-_1d57d",inner:"inner-_8f0b2",left:"left-_4e79c",line:"line-_27783","min-hide-btn":"min-hide-btn-_63ffd",minHideBtn:"min-hide-btn-_63ffd","not-oversea":"not-oversea-_63d76",notOversea:"not-oversea-_63d76","profile-content":"profile-content-_24e9d",profileContent:"profile-content-_24e9d","profile-header":"profile-header-_2d971",profileHeader:"profile-header-_2d971","setting-block":"setting-block-cd094c",settingBlock:"setting-block-cd094c","setting-content":"setting-content-_835e0",settingContent:"setting-content-_835e0","setting-footer":"setting-footer-_2f606",settingFooter:"setting-footer-_2f606","setting-footer-line":"setting-footer-line-_54e7f",settingFooterLine:"setting-footer-line-_54e7f","setting-footer-line__clickable":"setting-footer-line__clickable-_3add0",settingFooterLineClickable:"setting-footer-line__clickable-_3add0","show-scrollbar-thumb":"show-scrollbar-thumb-_0e2fd",showScrollbarThumb:"show-scrollbar-thumb-_0e2fd",subTitle:"subTitle-_0336d",title:"title-_9d8f3",userProfile:"userProfile-_722b2",webkit:"webkit-_93362"}},75662:function(e){"use strict";e.exports={"crop-container":"crop-container-dfff60",cropContainer:"crop-container-dfff60",modal:"modal-b93de2"}},55734:function(e){"use strict";e.exports={center:"center-_18dc0",container:"container-aa7d3a",hidden:"hidden-f8a6fd","hide-background":"hide-background-_0e21e",hideBackground:"hide-background-_0e21e",inner:"inner-b033aa",left:"left-ffede3",right:"right-_1888b"}}}]);