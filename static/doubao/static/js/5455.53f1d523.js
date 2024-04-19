/*! For license information please see 5455.53f1d523.js.LICENSE.txt */
(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([["5455"],{76185:function(e,n,t){"use strict";t.d(n,{apiService:function(){return i.apiService},initFlowApi:function(){return i.initFlowApi},rawAxiosInstance:function(){return r.rawAxiosInstance}});var r=t("82182"),i=t("74175");t("48817")},82182:function(e,n,t){"use strict";t.d(n,{rawAxiosInstance:function(){return a}});var r=t("9161"),i=t("72662"),o=t("80812"),a=i.default.create({timeout:1e4});a.interceptors.request.use(function(e){return e.params=(0,r._)({},(0,o.getCommonParams)(),e.params),e.headers=(0,r._)({},(0,o.getCommonHeaders)(),e.headers),e})},59240:function(e,n,t){"use strict";t.r(n),t.d(n,{SamanthaCiciTeaAppId:function(){return q},SamanthaDoubaoTeaAppId:function(){return V},checkAndGetTeaToken:function(){return H},configTeaUserId:function(){return Q},getIsSoftLinkForTea:function(){return Z},getMessageLength:function(){return Y},getMessageTypeForTea:function(){return $},initTeaConfig:function(){return X},isRepeatTracking:function(){return er},resetTeaToken:function(){return M},trackEvent:function(){return en},uidExists:function(){return x},updateTeaGuestUid:function(){return F}});var r,i,o,a=t("92769"),u=t("69420"),s=t("9161"),c=t("16044"),l=t("29048"),d=t("88802"),f=t("2945"),g=t("24682"),_=t("73706"),v=t.n(_),h=t("87382"),p=t("89066"),m=t("40789"),w=t("82373"),y=t("51635"),T=t("65042"),b=t("25363"),O=t("87575"),S=t("1924"),A=t("17789"),E=t("6314"),U=t("89293"),k=t("45431"),P=t("96535"),R=t("58416"),L=t("76185"),C=t("26107");function I(e,n,t){return(n=function(e){var n=function(e,n){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==(void 0===n?"undefined":(0,l._)(n))?n:String(n)}(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var D={tokens:{},meanKeys:["user_unique_id","web_id"]},N=function(){if(window.Tea&&!window.fetchingTeaToken){window.fetchingTeaToken=!0;var e=(0,b.schedule)(function(){window.fetchingTeaToken=!1},5e3);window.Tea.getToken(function(n){e.exec(),D.tokens=n})}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return!e&&D.meanKeys.some(function(e){return!D.tokens[e]})&&N(),D.tokens},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.Tea;return new Promise(function(n){setTimeout(function(){var t;null==e||null===(t=e.clearEventCache)||void 0===t||t.call(e),Q(e,void 0),n()})})},x=new(function(){function e(){(0,u._)(this,e),I(this,"_promise",null),I(this,"_cachedResult",!1),I(this,"_resolvePromise",f.default)}var n=e.prototype;return n.setResult=function(e){this._cachedResult=e,this._resolvePromise(e),this._promise=null,this._resolvePromise=f.default},n.markFetching=function(){var e=this;!this._promise&&(this._promise=new Promise(function(n){e._resolvePromise=n}))},n.getResult=function(){var e=this;return(0,a._)(function(){return(0,d.__generator)(this,function(n){return[2,e._promise||e._cachedResult]})})()},n.getResultSync=function(){return this._promise?"fetching":this._cachedResult},e}()),Q=function(e,n,t){var r,i,o=!t&&!!n;null===(r=e.getABconfig)||void 0===r||r.call(e,{user_id:n},f.default),null===(i=e.config)||void 0===i||i.call(e,{user_id:n,user_is_login:o,evtParams:{biz_user_id:n}}),n&&x.setResult(!!n),n&&!t?localStorage.setItem("flow_tea_user_id",n):localStorage.removeItem("flow_tea_user_id"),e.event("login_status",{status:o?"logined":"unlogin"}),H(!0)},B=function(e){return null==e?void 0:e.getConfig("user_id")},j=function(e,n,t){return"0"===e&&h.logger.persist.warning({message:"exceptional guest uid",meta:{reportStep:"".concat(n,"_uid"),logId:t}})};var F=(r=(0,a._)(function(){var e,n,t,r,i,o,u;return(0,d.__generator)(this,function(s){switch(s.label){case 0:if(n=B(e=window.Tea))return j(n,"exist"),x.setResult(!0),[2];null==e||e.stop(),t="init_ttwid",x.markFetching(),s.label=1;case 1:return s.trys.push([1,4,,5]),[4,window[C.PromiseName.TTWid]];case 2:return s.sent(),t="fetch_uid",[4,(0,y.retryAsync)((0,a._)(function(){var e;return(0,d.__generator)(this,function(n){switch(n.label){case 0:return[4,L.apiService.setting.GetWebAnonID()];case 1:if(!(null==(e=n.sent())?void 0:e.uid)||"0"===e.uid||String(e.web_id)===e.uid)throw Error("guest uid is empty");return[2,e]}})}),3,function(e){return 800*e})];case 3:return o=(i=s.sent()).uid,e&&!B(e)&&Q(e,o,!0),j(o,"fetch",null===(r=i._meta)||void 0===r?void 0:r.logId),h.logger.persist.info({message:"guest uid fetched"}),x.setResult(!0),[3,5];case 4:return u=s.sent(),h.logger.persist.error({message:"set guest uid error",error:u,meta:{reportStep:t}}),x.setResult(!1),[3,5];case 5:return null==e||e.reStart(),null==e||e.clearEventCache(),[2]}})}),function(){return r.apply(this,arguments)}),K=function(){var e=location.origin,n=location.pathname,t=location.search,r="".concat(e).concat(n).concat(t);if(!Object.values(R.AUTH_CALLBACK_ROUTE).includes(n))return r;try{var i=(0,U.parseOAuthUrl)(location).state;if("string"!=typeof i.navigatePath)return r;var o=new URL("".concat(e).concat(i.navigatePath)).search,a=new URLSearchParams(o).get(S.QueryKeys.ORIGIN_LANDING);return a?decodeURIComponent(a):r}catch(e){return r}},W=function(){var e=K();return(0,p.saveTeaLandingUrl)(e),{header:(0,s._)({},(0,w.getDoubaoUTMHeadersFromUrl)(e)),event:{landing_page_url:e,app_id:482431}}},G=function(e,n){return{event_name:e,event_ts:Math.floor((n||Date.now())/1e3),growth_deepevent:"4"}},q=582465,V=582478,J=function(){switch((0,T.getSamanthaClientType)()){case"Cici":return q;case"Doubao":return V;default:return 497858}};var z=(i=(0,a._)(function(){var e,n,t,r,i,o;return(0,d.__generator)(this,function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,null===(t=window)||void 0===t?void 0:null===(n=t.neotix)||void 0===n?void 0:null===(e=n.device)||void 0===e?void 0:e.getDeviceInfo()];case 1:if(i=null==(r=o.sent())?void 0:r.deviceId)return[2,{device_id:i,user_unique_id:i}];return[2,{}];case 2:return o.sent(),[2,{}];case 3:return[2]}})}),function(){return i.apply(this,arguments)});var X=(o=(0,a._)(function(e,n){var t,r,i,o,a,u,l,f,g,_,h,p,m,w;return(0,d.__generator)(this,function(d){switch(d.label){case 0:return t=n.email,r=n.appId,i=n.user_unique_id,l=localStorage.getItem("flow_tea_user_id"),f="undefined"==typeof window?{}:{screen_width:window.innerWidth,screen_height:window.innerHeight},_=(g=W()).header,h=g.event,p=!!l,[4,z()];case 1:return m=d.sent(),e.config((0,s._)((0,c._)((0,s._)({user_unique_id:i,app_id:null!=r?r:J(),_staging_flag:0,samantha_version_client:(0,T.getSamanthaClientVersion)(),train_version:"sprint14",is_test_env:window.location.hostname.startsWith("www")?0:1,is_samantha_client:(0,T.isSamanthaClient)()?"1":"0",evtParams:(0,s._)({email:t,env:(0,P.getEnv)(),region:"cn",isDevMode:!1,isEnableDebug:(0,k.isEnableDebug)(),isReleaseVersion:!0,scmVersion:(0,R.scmVersion)(),init_id:"".concat(Math.floor(null!==(w=null===(o=performance)||void 0===o?void 0:o.timeOrigin)&&void 0!==w?w:Date.now()),"_").concat(t),os:"web",os_name:"web",web_device:v().getParser(navigator.userAgent).getOSName(!0),inner_region:(0,E.getCountry)()||void 0},f,h)},l?{user_id:l||""}:{}),{user_is_login:p,is_pwa:(0,T.isPWA)()?"1":"0",samantha_web:"1",prefers_color_scheme:(null===(a=(u=window).matchMedia)||void 0===a?void 0:a.call(u,"(prefers-color-scheme: dark)").matches)?"dark":"light"}),_,m)),e.event("login_status",{status:p?"logined":"unlogin"}),e.filterEvent(function(e){var n=e[0];return n?(n.events.forEach(function(e){if("predefine_pageview"===e.event){var n=(0,s._)({},JSON.parse(e.params||"null"),G(e.event,e.local_time_ms));e.params=JSON.stringify(n)}}),e):e}),[2]}})}),function(e,n){return o.apply(this,arguments)}),Y=function(e){if(e&&(0,O.isTextMessage)(e)){var n=(e.contentObj||{}).text;return(0,g.default)(n)?n.length:0}return 0},Z=function(e){if(e&&(0,O.isTextMessage)(e)){var n=(e.contentObj||{}).text;return(0,g.default)(n)&&n.includes("coco://sendMessage")?1:0}return 0},$=function(e){if(!e)return"text";if((0,O.isImageMessage)(e))return"pic";if((0,O.isMusicMessage)(e))return"music";if((0,O.isFileMessage)(e))return"file";return(0,O.isCardListMessage)(e)?"search_card":"text"},ee=["enter_page","click_login","login_result","login_type_show"],en=function(e,n,t){if(!!window.Tea){if(!(void 0!==t&&er(e,t))){var r=m.usePageHistoryStore.getState().getCurPrevPage(),i=r.curPage,o=r.prevPage,a=(0,A.getSeoParams)();try{var u,c=(0,s._)({current_page:i||"other",previous_page:o||"other"},ee.includes(e)?a:{},n,G(e));null===(u=window.Tea)||void 0===u||u.event(e,c),ei(t)&&h.logger.persist.log({eventName:e,meta:c})}catch(t){h.logger.persist.error({eventName:"track_event_error",error:t,meta:{event:e,params:n}})}}}},et=new Map(["picture_message_show","show_suggested_prompt_single_question","show_suggested_prompt","video_card_show","show_onboarding_card_single_question","show_onboarding_card","music_card_show"].map(function(e){return[e,0]})),er=function(e,n){if(!e||!et.has(e))return!1;var t,r,i,o=300;"string"==typeof n?i=n:"object"==typeof n&&(i=null==n?void 0:n.key,o=null!==(t=null==n?void 0:n.duration)&&void 0!==t?t:o);var a=Date.now(),u=void 0===i?e:"".concat(e,"_").concat(i);return!!et.has(u)&&!(a-(null!==(r=null==et?void 0:et.get(u))&&void 0!==r?r:0)>o)||(et.set(u,a),!1)},ei=function(e){return"object"==typeof e&&e.withSlardar}},97213:function(e,n,t){"use strict";function r(e){var n,t;if(e)return(null===(n=e.icon_image)||void 0===n?void 0:n.tiny_url)||(null===(t=e.icon_image)||void 0===t?void 0:t.origin_url)||e.icon_url}t.d(n,{canTreatAsObject:function(){return i},getBotListAvatarUrl:function(){return r}});var i=function(e){return null!=e}},96535:function(e,n,t){"use strict";t.d(n,{featureEnableChat:function(){return r},getEnv:function(){return a},isBetaEnv:function(){return u}}),t("65042");var r=!0,i="online",o={BOE:"BOE",TEST:"TEST",PROD:"PROD",LOCAL:"LOCAL",UNKNOWN:"UNKNOWN"},a=function(){!0;return o.PROD},u=!1},89293:function(e,n,t){"use strict";t.d(n,{parseOAuthUrl:function(){return u}});var r=t("24682"),i=t("45194");t("1924");var o=t("97213"),a=function(e){var n=window.atob(e);try{var t,i=JSON.parse(n);if(t=i,(0,o.canTreatAsObject)(t)&&(0,r.default)(t.platform)&&(0,r.default)(t.navigatePath)&&(0,r.default)(t.type))return i;throw Error("Wrong structure of json stringified Oauth2String")}catch(e){if(e instanceof SyntaxError)return n;throw e}},u=function(e){var n,t=(0,i.parseHashOrQuery)(e.hash||e.search);if(n=t,!((0,o.canTreatAsObject)(n)&&((0,r.default)(n.access_token)||(0,r.default)(n.code))&&(0,r.default)(n.state)))throw Error("Wrong structure of oauth2 callback parameter");var u=a(t.state);if((0,r.default)(u))throw Error("OAuth2 state in flow third party login must not be string");return{access_token:t.access_token,code:t.code,state:u}}},17789:function(e,n,t){"use strict";t.d(n,{getSeoParams:function(){return i}});var r=t("45194");function i(){var e=(0,r.parseHashOrQuery)(location.search).channel;return{url:window.location.href,url_path:window.location.pathname,traffic_type:"baidu"===e||"360"===e?"sem":"organic"}}},1924:function(e,n,t){"use strict";t.d(n,{QueryKeys:function(){return c},addHideHomepageUrl:function(){return p},addLoginSuccessBackUrl:function(){return d},getGuestHideHomepageUrl:function(){return f},getLoginSourceQuery:function(){return v},getLoginSuccessBackUrl:function(){return l},getSemChannel:function(){return h},hasDouyinRedirectQuery:function(){return _},hasUGRedirectQuery:function(){return g},useFirstRouteEffect:function(){return m}});var r,i=t("52983"),o=t("87382"),a=t("45194"),u=t("32208"),s=t("58416");var c=((r={}).ORIGIN_LANDING="origin_landing",r),l=function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:location.search;return(null===(e=(0,a.parseHashOrQuery)(n||""))||void 0===e?void 0:e.loginSuccessBackUrl)||""},d=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location.pathname,t=n+location.search;return![s.CHAT_NEW_ROUTE].find(function(e){return t.includes(e)})||e.includes("loginSuccessBackUrl")?e:(0,a.addQuery)(e,{loginSuccessBackUrl:t})},f=function(){try{var e;return(null===(e=(0,a.parseHashOrQuery)(location.search||""))||void 0===e?void 0:e.ghh)==="1"}catch(e){return o.logger.persist.error({eventName:"uri_error",message:"URI Error: ".concat(location.search),meta:{search:location.search},error:e}),!1}},g=function(){var e;return!!(null===(e=(0,a.parseHashOrQuery)(location.search||""))||void 0===e?void 0:e.keyword)},_=function(){var e;return!!(null===(e=(0,a.parseHashOrQuery)(location.search||""))||void 0===e?void 0:e.open_from_douyin)},v=function(e){var n;return(0,a.parseHashOrQuery)(null===(n=e||location)||void 0===n?void 0:n.search).login_source},h=function(e){var n;return(0,a.parseHashOrQuery)(null===(n=e||location)||void 0===n?void 0:n.search).channel},p=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return(0,a.addQuery)(e,n?{ghh:"1",hh:"1"}:{hh:"1"})},m=function(e){var n=(0,u.useLocation)(),t=(0,i.useRef)(!1);(0,i.useEffect)(function(){if(!t.current)!Object.values(s.AUTH_CALLBACK_ROUTE).includes(n.pathname)&&(e(n),t.current=!0)},[n])}},82373:function(e,n,t){"use strict";t.d(n,{getDoubaoUTMHeadersFromUrl:function(){return r}});var r=function(e){if(!e)return{};var n={ug_landing_url:e};try{var t=new URL(e).searchParams.get("channel");t&&(n.utm_source=t)}catch(e){}return n}}}]);