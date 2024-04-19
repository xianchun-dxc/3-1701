/*! For license information please see 116.b6733d34.js.LICENSE.txt */
(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([["116"],{55866:function(t,e,n){"use strict";n.d(e,{useBlockUser:function(){return f}});var r=n("92769"),o=n("40509"),i=n("88802"),a=n("33434"),s=n("78597"),u=n("62920"),c=n("53268"),l=n("76185"),d=n("72676"),f=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.onBlockedSuccess,f=e.onDeletedSuccess,v=(0,d.useTranslateFn)(),h=(0,o._)((0,u.useChatStore)(function(t){return[t.removeConversationsFromLinks,t.removeConversationsFromMap]},a.shallow),2),p=h[0],g=h[1],_=(0,s.useRequest)(function(t){return l.apiService.setting.CreateBlocklistUser({blocklist_user_id:t})},{manual:!0}),C=_.runAsync,m=_.loading,S=(0,s.useRequest)(function(t){return l.apiService.setting.DeleteBlocklistUser({blocklist_user_id:t})},{manual:!0}),b=S.runAsync,y=S.loading;return{createBlockUser:function(t){c.Modal.warning({title:"".concat(v("confirm")," ?"),okText:v("confirm"),cancelText:v("cancel"),content:v("warning"),okButtonProps:{type:"danger"},onOk:(0,r._)(function(){var e,r,o,a;return(0,i.__generator)(this,function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,C(t)];case 1:return(null===(e=(o=void 0===(r=i.sent().data)?{}:r).deleted_conversation_id_list)||void 0===e?void 0:e.length)&&(p({conversationIds:o.deleted_conversation_id_list}),g({conversationIds:o.deleted_conversation_id_list})),c.Toast.success(v("blocked")),null==n||n(o),[3,3];case 2:return i.sent(),c.Toast.error(v("block_failed")),[3,3];case 3:return[2]}})})})},deleteBlockUser:(t=(0,r._)(function(t){var e;return(0,i.__generator)(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,b(t)];case 1:return e.sent(),c.Toast.success(v("unblocked")),null==f||f(),[3,3];case 2:return e.sent(),c.Toast.error(v("unblock_failed")),[3,3];case 3:return[2]}})}),function(e){return t.apply(this,arguments)}),createLoading:m,deleteLoading:y}}},99547:function(t,e,n){"use strict";n.d(e,{useConversationIdFromUrl:function(){return M},usePinnedConversation:function(){return B},useRemoveConversation:function(){return T}});var r=n("92769"),o=n("9161"),i=n("16044"),a=n("40509"),s=n("88802"),u=n("33434"),c=n("87382"),l=n("53370"),d=n("43850"),f=n("62920"),v=n("75761"),h=n("9668"),p=n("87681"),g=n("26689"),_=n("66080"),C=n("32208"),m=n("53268"),S=n("99956"),b=n("59240"),y=n("76185"),I=n("72676"),L=n("58416"),w=n("2738"),T=function(t){var e,n=t.isCocoSub,o=t.conversationId,i=t.botId,d=t.exts,h=(0,C.useNavigate)(),p=(0,I.useTranslateFn)(),_=(0,w.getChatIdFromURL)(),T=(0,a._)((0,f.useChatStore)(function(t){return[t.removeConversationFromLinks,t.removeConversationFromMap]},u.shallow),2),B=T[0],M=T[1],k=(0,a._)((0,S.useBotStore)(function(t){return[t.updateBot,t.deleteBotInChoicenessBotLinks]},u.shallow),2),x=k[0],P=k[1];return[(e=(0,r._)(function(){var t,e;return(0,s.__generator)(this,function(r){switch(r.label){case 0:(0,b.trackEvent)("remove_chat",{bot_id:(0,v.getBotIdByConversationId)(o)||i,chat_type:(0,v.getChatTypeForTea)(o)||"other_default",click_from:null==d?void 0:d.click_from}),t=(0,c.createReportEvent)({eventName:"remove_conversation",meta:{from:null==d?void 0:d.from,type:o?"conversation":"choiceness"}}),r.label=1;case 1:if(r.trys.push([1,9,,10]),!o)return[3,6];if(!n)return[3,3];return[4,y.apiService.samantha.ThreadDelete({conversation_id:o})];case 2:return r.sent(),[3,5];case 3:return[4,y.apiService.conversation.ConversationArchive({conversation_id:o})];case 4:r.sent(),r.label=5;case 5:return B({conversationId:o}),M({conversationId:o}),[3,8];case 6:return[4,y.apiService.conversation.ConversationArchive({bot_id:i})];case 7:r.sent(),P(null!=i?i:""),r.label=8;case 8:return x({bot_id:(0,v.getBotIdByConversationId)(o)||i,conversation_id:"",has_conversation:!1,action:{action_type:g.BotActionType.CreateConversation,action_path:""}}),(0,w.checkAndPauseMusicOnDeleteConversation)(o),t.success(),(o&&_===o||i&&_===i)&&(h(L.CHAT_PAGE_ROUTE),l.useChatLayoutStore.getState().setActiveKey(void 0)),[3,10];case 9:return e=r.sent(),m.Toast.error({content:p("remove_recent_chat_failed"),showClose:!1}),t.error({error:e,reason:"remove conversation or bot fail"}),[3,10];case 10:return[2]}})}),function(){return e.apply(this,arguments)})]},B=function(t){var e,n,l,d=t.conversationId,p=t.bot,g=t.exts,m=(0,C.useNavigate)(),I=(0,a._)((0,f.useChatStore)(function(t){return[t.insertConversationToLinks,t.updateConversationIdInLinks,t.fetchUpdateConversationInfo]},u.shallow),3),L=I[0],w=I[1],T=I[2],B=(0,a._)((0,S.useBotStore)(function(t){return[t.updateBot,t.setLocalConversationIdForBot]},u.shallow),2),M=B[0],k=B[1],x=function(){var t=f.useChatStore.getState().addNewLocalConversation();(null==p?void 0:p.bot_id)&&k({botId:p.bot_id,localConversationId:t});var e={name:null==p?void 0:p.name,icon_url:null==p?void 0:p.icon_url,pinned:!0,bot_id:null==p?void 0:p.bot_id,conversation_id:"".concat(t),conversation_type:_.ConversationType.Bot};return f.useChatStore.getState().updateLocalConversation(t,(0,o._)({},e)),t};var P=(e=(0,r._)(function(t,e){var n,r;return(0,s.__generator)(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,T(e)];case 1:return n.sent(),w(t,e),(null==p?void 0:p.bot_id)&&location.pathname.includes(p.bot_id)&&m("./".concat(e)),[3,3];case 2:return n.sent(),r=f.useChatStore.getState().localConversationMap[t],f.useChatStore.getState().updateLocalConversation(t,(0,i._)((0,o._)({},r),{local:{createStatus:h.CreateConversationStatus.Done},conversation_id:e}),!0),w(t,e),L({conversationId:e,index:1,pinOperation:!0,isLocalConversation:!0}),[3,3];case 3:return[2]}})}),function(t,n){return e.apply(this,arguments)});return[(n=(0,r._)(function(){var t,e,n,r,o,i,a,u,l;return(0,s.__generator)(this,function(s){switch(s.label){case 0:(0,b.trackEvent)("pin_chat",{bot_id:(0,v.getBotIdByConversationId)(d)||(null==p?void 0:p.bot_id),chat_type:(0,v.getChatTypeForTea)(d)||"other_default",click_from:null==g?void 0:g.click_from}),t=(0,c.createReportEvent)({eventName:"pin_conversation",meta:{from:null==g?void 0:g.from,type:d?"conversation":"choiceness"}}),e="",s.label=1;case 1:if(s.trys.push([1,6,,7]),!d)return[3,3];return e=d,L({conversationId:d,index:1,pinOperation:!0}),[4,y.apiService.conversation.ConversationPin({conversation_id:d})];case 2:return s.sent(),[3,5];case 3:return e=o=x(),L({conversationId:o,index:1,pinOperation:!0,isLocalConversation:!0}),[4,y.apiService.conversation.ConversationPin({bot_id:null==p?void 0:p.bot_id,local_conversation_id:o})];case 4:(null===(n=(i=s.sent()).data)||void 0===n?void 0:n.local_conversation_id)&&(null===(r=i.data)||void 0===r?void 0:r.conversation_id)&&(a=i.data.local_conversation_id,P(a,u=i.data.conversation_id),M({bot_id:null==p?void 0:p.bot_id,has_conversation:!0,conversation_id:u})),s.label=5;case 5:return t.success(),[3,7];case 6:return l=s.sent(),L({conversationId:e,index:1,pinOperation:!0,isLocalConversation:!d}),t.error({error:l,reason:"pin conversation or bot fail"}),[3,7];case 7:return[2]}})}),function(){return n.apply(this,arguments)}),(l=(0,r._)(function(){var t,e;return(0,s.__generator)(this,function(n){switch(n.label){case 0:(0,b.trackEvent)("unpin_chat",{bot_id:(0,v.getBotIdByConversationId)(d)||(null==p?void 0:p.bot_id),chat_type:(0,v.getChatTypeForTea)(d)||"other_default",click_from:null==g?void 0:g.click_from}),t=(0,c.createReportEvent)({eventName:"unpin_conversation",meta:{from:null==g?void 0:g.from,type:d?"conversation":"other_default"}}),n.label=1;case 1:if(n.trys.push([1,4,,5]),!d)return[3,3];return[4,y.apiService.conversation.ConversationUnpin({conversation_id:d})];case 2:n.sent(),L({conversationId:d,index:1,pinOperation:!0}),t.success(),n.label=3;case 3:return[3,5];case 4:return e=n.sent(),t.error({error:e,reason:"unpin conversation fail"}),[3,5];case 5:return[2]}})}),function(){return l.apply(this,arguments)})]},M=function(){var t=(0,d.useChatViewConfigFromUrl)();if(t){var e=t.chatType,n=t.chatId;if(e===p.ChatType.Conversation&&(0,w.isNumeric)(n))return n}}},26686:function(t,e,n){"use strict";n.d(e,{useBlockUser:function(){return i.useBlockUser},useConversationIdFromUrl:function(){return r.useConversationIdFromUrl},usePinnedConversation:function(){return r.usePinnedConversation},useRemoveConversation:function(){return r.useRemoveConversation},useSocketBannerInitDelay:function(){return o.useSocketBannerInitDelay},useSocketStatusTextWithDelay:function(){return o.useSocketStatusTextWithDelay}});var r=n("99547"),o=n("70411"),i=n("55866")},70411:function(t,e,n){"use strict";n.d(e,{useSocketBannerInitDelay:function(){return d},useSocketStatusTextWithDelay:function(){return f}});var r=n("9161"),o=n("16044"),i=n("40509"),a=n("52983"),s=n("33434"),u=n("62920"),c=n("62966"),l=n("72676"),d=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).delay,e=(0,i._)((0,c.useGlobalStore)(function(t){return[t.setHideNetworkStatus]},s.shallow),1)[0],n=(0,a.useRef)(),r=function(){clearTimeout(n.current),n.current=void 0,e(!1)},o=function(){e(!0),n.current=setTimeout(function(){r()},t)};(0,a.useEffect)(function(){o();var t=function(){"visible"===document.visibilityState?o():e(!0)};return window.addEventListener("visibilitychange",t),function(){r(),window.removeEventListener("visibilitychange",t)}},[])},f=function(t){var e=v(),n=(0,a.useRef)({timer:0}),s=(0,a.useRef)(!1),u=(0,i._)((0,a.useState)(0),2),c=(u[0],u[1]),l={clear:function(){var t;clearTimeout(null===(t=n.current)||void 0===t?void 0:t.timer),n.current.timer=0,c(function(t){return t+1})},start:function(){var e=this;!n.current.timer&&(s.current=!0,n.current.timer=setTimeout(function(){e.clear()},t))}};return!function(){var t=e.loading,n=e.offline;if((t||n)&&!s.current)return l.start();s.current=!1}(),(0,o._)((0,r._)({},e),{getText:function(){var t=e.getText();return n.current.timer?"":t}})},v=function(){var t=(0,l.useTranslateFn)(),e=(0,i._)((0,c.useGlobalStore)(function(t){return[t.isOffline]},s.shallow),1)[0],n=(0,u.useChatStore)(function(t){return t.socketStatus},s.shallow),r=n.connected,o=n.loading;return{getText:function(){return!e||r||o?o?t("internet_connecting"):"":t("internet_connection_failed")},loading:o,connected:r,offline:e}}},1176:function(t,e,n){"use strict";n.d(e,{checkAndPauseMusicOnDeleteConversation:function(){return i},isNumeric:function(){return o}}),n("99956");var r=n("90222");function o(t){return!!t&&/^\d+$/.test(t)}function i(t){var e=(0,r.getOrCreateMusicPlayerManager)();if(!!t&&!!e&&!!e.playerProperties.isPlaying)t===(e.currentMusicInfo||{}).conversationId&&e.requestPlayerHandler().pause()}},28504:function(t,e,n){"use strict";n.d(e,{handleContentUnavailableError:function(){return a}});var r=n("26498"),o=n("53268"),i=n("72676"),a=function(t){return String(t.errorOption.code)===String(r.ErrorCodes.CONTENT_UNAVAILABLE)&&(o.Toast.error({content:t.errorOption.message||(0,i.getUnreactiveTranslate)("illegal_content"),showClose:!1}),!0)}},2738:function(t,e,n){"use strict";n.d(e,{canInitChatAppConversationReport:function(){return i.canInitChatAppConversationReport},checkAndPauseMusicOnDeleteConversation:function(){return r.checkAndPauseMusicOnDeleteConversation},checkIsCurrentActivedChat:function(){return i.checkIsCurrentActivedChat},getChatIdFromURL:function(){return i.getChatIdFromURL},getTagIdFromURL:function(){return i.getTagIdFromURL},handleContentUnavailableError:function(){return o.handleContentUnavailableError},isNumeric:function(){return r.isNumeric},setTagIdToURL:function(){return i.setTagIdToURL},useIsChatLandingPage:function(){return i.useIsChatLandingPage},useIsChatPage:function(){return i.useIsChatPage},useIsChatPageOther:function(){return i.useIsChatPageOther}});var r=n("1176"),o=n("28504"),i=n("90780")},90222:function(t,e,n){"use strict";n.d(e,{destroyMusicPlayerManager:function(){return o},getOrCreateMusicPlayerManager:function(){return r}});var r=function(){return window.thirdXgPlayerManager},o=function(){window.thirdXgPlayerManager&&(window.thirdXgPlayerManager.destroy(),window.thirdXgPlayerManager=null)}},90780:function(t,e,n){"use strict";n.d(e,{canInitChatAppConversationReport:function(){return C},checkIsCurrentActivedChat:function(){return h},getChatIdFromURL:function(){return l},getChatTypeFromURL:function(){return d},getTagIdFromURL:function(){return f},setTagIdToURL:function(){return v},useIsChatLandingPage:function(){return g},useIsChatPage:function(){return p},useIsChatPageOther:function(){return _}});var r=n("40509"),o=n("37903"),i=n("45194"),a=n("66792"),s=n("9029"),u=n("32208"),c=n("1924");n("58416");var l=function(){var t=(0,s.matchPath)("/chat/:id",window.location.pathname),e=((null==t?void 0:t.params)||{}).id;return!(0,o.default)(e)&&(0,a.isNumeric)(e)?e:void 0},d=function(){return Number(new URLSearchParams(window.location.search).get("type"))},f=function(){return Number(new URLSearchParams(window.location.search).get("tagId"))},v=function(t){var e=new URLSearchParams(window.location.search);e.set("tagId",t),history.pushState({},"","?".concat(e.toString()))},h=function(t){return(0,r._)(t.split("./"),2)[1]===(0,r._)(location.pathname.split("/chat/"),2)[1]},p=function(){var t=(0,u.useLocation)();return/\/chat(\/\d*)?$/.test(t.pathname)},g=function(){return(0,u.useLocation)().pathname.endsWith("/chat/")},_=function(){var t=(0,u.useLocation)();return!p()&&/\/chat\/.*$/.test(t.pathname)},C=function(){var t,e=(0,i.parseHashOrQuery)(location.search),n=(0,c.hasUGRedirectQuery)(),r=e.from_login,o=e.guest_landing,a=e.token;return!!(null===(t=window)||void 0===t?void 0:t.performance)&&"1"!==o&&"1"!==r&&!a&&!n&&!0}},36579:function(t,e,n){"use strict";n.d(e,{createBotsSlice:function(){return b}});var r=n("92769"),o=n("9161"),i=n("16044"),a=n("40509"),s=n("6462"),u=n("88802"),c=n("73934"),l=n("60032"),d=n("23898"),f=n("78493"),v=n("97176"),h=n("87382"),p=n("5890"),g=n("26689"),_=n("78142"),C=n("76185"),m=n("40025"),S={discoveryBotCachedList:{},discoveryBotLinks:[],discoveryBotListStatus:{loading:!1,failed:!1,count:0,hasMore:!0,tagList:[],selectedTagId:-1,error:void 0},choicenessBotLinks:[],choicenessBotListStatus:{loading:!1,failed:!1,count:0,hasMore:!0},profileBotLinks:[],profileBotListStatus:{loading:!1,failed:!1,count:0,hasMore:!0,last_index:"0"}},b=function(){for(var t,e=arguments.length,n=Array(e),f=0;f<e;f++)n[f]=arguments[f];var b=(0,a._)(n,2),I=b[0],L=b[1];return p.resetStoreManager.push(function(){return I(S)}),(0,i._)((0,o._)({},S,m.createBotMapSlice.apply(void 0,(0,s._)(n))),{initRecommendBotList:function(t){var e=t.size,n=t.recommendType,r=t.tagId;L().loadRecommendBotList({index:1,size:e,recommendType:n,tagId:r})},loadRecommendBotList:(t=(0,r._)(function(t){var e,n,r,i,a,s,f,p,C,m,S,b,w,T,B,M,k,x,P,F,R,N,E,O;return(0,u.__generator)(this,function(u){switch(u.label){case 0:e=t.index,n=t.size,r=t.recommendType,i=t.tagId,s=(a=r===g.BotRecommendType.Discovery)?"discoveryBotListStatus":"choicenessBotListStatus",f=a?"discoveryBotLinks":"choicenessBotLinks",p=1===e,C=L()[f],p&&a&&I((0,v.produce)(function(t){var e,n=null!==(e=t.discoveryBotCachedList[null!=i?i:""])&&void 0!==e?e:[];t.discoveryBotLinks=n,t.discoveryBotListStatus.count=n.length})),I((0,v.produce)(function(t){var e=t[s];a?Object.assign(e,{loading:!0,selectedTagId:i||t.discoveryBotListStatus.selectedTagId}):Object.assign(e,{loading:!0})})),u.label=1;case 1:return u.trys.push([1,3,,4]),m={recommend_type:r,page_index:e,page_size:n},i&&(m.tag_id=i),[4,_.FlowApi.apiService.bot.RecommendBots(m)];case 2:if(w=void 0===(b=(S=u.sent().data||{}).bot_list)?[]:b,B=void 0!==(T=S.has_more)&&T,k=void 0===(M=S.tag_list)?[]:M,x=S.selected_tag_id,P=S.trace_map,F=L().discoveryBotListStatus.selectedTagId,x&&-1!==F&&x!==F)return[2];return R=(P||{}).request_id,N=(0,c.default)((0,l.default)(w||[],"bot_id"),function(t){return{botID:t.bot_id||""}}),E=y(p?[]:C,N),I((0,v.produce)(function(t){if(a){var e,n=null!==(e=t.discoveryBotListStatus.tagList)&&void 0!==e?e:[],r=k.every(function(t,e){var r;return t.tag_id===(null===(r=n[e])||void 0===r?void 0:r.tag_id)}),u=t.discoveryBotListStatus.selectedTagId,c={loading:!1,failed:!1,count:E.length,hasMore:B,tagList:r?n:k,selectedTagId:-1===u?x:u};w.map(function(e){e.bot_id&&(t.botIdToRequestIdMap[e.bot_id]=R)}),Object.assign(t[s],c)}else Object.assign(t[s],{loading:!1,failed:!1,count:E.length,hasMore:B});t[f]=E,"discoveryBotLinks"===f&&i&&(t.discoveryBotCachedList[i]=E),t.botMap=(0,d.default)(w||[],function(t,e){return e.bot_id&&(t[e.bot_id]=e),t},(0,o._)({},t.botMap))})),[3,4];case 3:throw O=u.sent(),I((0,v.produce)(function(t){Object.assign(t[s],{failed:!0,loading:!1,error:O})})),O instanceof Error&&h.logger.persist.error({message:"loadBotList failed size:".concat(n," index:").concat(e,", type: ").concat(r),error:O}),O;case 4:return[2]}})}),function(e){return t.apply(this,arguments)}),initProfileBotList:function(t){var e=t.size,n=t.visit_id;L().loadProfileBotList({index:"0",size:e,visit_id:n})},loadProfileBotList:function(t){var e=t.index,n=t.size,a=t.visit_id;return(0,r._)(function(){var t,r,s,f,p,g,_,m,S,b,w,T;return(0,u.__generator)(this,function(u){switch(u.label){case 0:t=L().profileBotLinks,r="0"===e,I((0,v.produce)(function(t){t.profileBotListStatus.loading=!0})),u.label=1;case 1:return u.trys.push([1,3,,4]),[4,C.apiService.profile.ProfileBotList({index:e,limit:n,visit_id:a})];case 2:return p=void 0===(f=(s=u.sent().data||{}).profile_bot_list)?[]:f,_=void 0!==(g=s.has_more)&&g,m=s.last_index,S=(p||[]).map(function(t){var e;return(0,i._)((0,o._)({},t),{icon_url:null===(e=t.icon_image)||void 0===e?void 0:e.tiny_url})}),b=(0,c.default)((0,l.default)(S||[],"bot_id"),function(t){return{botID:t.bot_id||""}}),w=y(r?[]:t,b),I((0,v.produce)(function(t){Object.assign(t.profileBotListStatus,{loading:!1,failed:!1,count:w.length,hasMore:_,last_index:m}),t.profileBotLinks=w,t.botMap=(0,d.default)(S||[],function(t,e){return e.bot_id&&(t[e.bot_id]=e),t},(0,o._)({},t.botMap))})),[3,4];case 3:throw T=u.sent(),I((0,v.produce)(function(t){Object.assign(t.profileBotListStatus,{failed:!0,loading:!1})})),T instanceof Error&&h.logger.persist.error({message:"loadBotList failed size:".concat(n," index:").concat(e,", type: profileBotLinks"),error:T}),T;case 4:return[2]}})})()},resetProfileBotListStatus:function(){I((0,v.produce)(function(t){Object.assign(t.profileBotListStatus,S.profileBotListStatus)}))},deleteBotInChoicenessBotLinks:function(t){I((0,v.produce)(function(e){e.choicenessBotLinks=e.choicenessBotLinks.filter(function(e){return e.botID!==t})}))}})},y=function(t,e){return(0,f.default)(t.concat(e),"botID")}},99956:function(t,e,n){"use strict";n.d(e,{getRequestIdByBotId:function(){return f},useBotInfo:function(){return d},useBotStore:function(){return c},useGuestBotStore:function(){return l}});var r=n("33434"),o=n("37222"),i=n("85205"),a=n("45431"),s=n("36579"),u=function(t){return(0,a.isEnableDebug)()?(0,i.create)()((0,o.devtools)((0,o.subscribeWithSelector)(s.createBotsSlice),{name:t})):(0,i.create)()((0,o.subscribeWithSelector)(s.createBotsSlice))},c=u("flow-web-bot-store"),l=u("flow-web-guest-bot-store"),d=function(t){var e=c(function(e){return t?e.botMap[t]:void 0},r.shallow),n=l(function(e){return t?e.botMap[t]:void 0},r.shallow);return e||n},f=function(t){return c.getState().botIdToRequestIdMap[t||""]}},40025:function(t,e,n){"use strict";n.d(e,{createBotMapSlice:function(){return f}});var r=n("92769"),o=n("9161"),i=n("16044"),a=n("88802"),s=n("97176"),u=n("87382"),c=n("5890"),l=n("76185"),d={botMap:{},botIdToLocalConversationMap:{},botIdToRequestIdMap:{}},f=function(t,e){var n;return c.resetStoreManager.push(function(){return t(d)}),(0,i._)((0,o._)({},d),{updateBot:function(e){var n=e.bot_id,r=e.id,i=n||r;if(!i){u.logger.persist.warning({message:"invalid botInfo to update",meta:{botInfo:e}});return}t((0,s.produce)(function(t){t.botMap[i]=(0,o._)({},t.botMap[i]||{},e)}))},overrideBots:function(e){e.length&&t((0,s.produce)(function(t){e.forEach(function(e){var n=e.bot_id,r=e.id,i=n||r;i&&(t.botMap[i]=(0,o._)({},t.botMap[i]||{},e))})}))},setLocalConversationIdForBot:function(e){var n=e.botId,r=e.localConversationId;t((0,s.produce)(function(t){t.botIdToLocalConversationMap[n]=r}))},clearConversationIdForBot:function(e){var n=e.botId;t((0,s.produce)(function(t){if(n){var e=t.botMap[n];e&&(e.conversation_id="",e.has_conversation=!1)}}))},fetchToUpdateBot:(n=(0,r._)(function(e){var n,r,o;return(0,a.__generator)(this,function(i){switch(i.label){case 0:return n=e.botId,[4,l.apiService.bot.RecommendBots({bot_ids:[n]})];case 1:return o=i.sent().data,t((0,s.produce)(function(t){var e;(null==o?void 0:null===(e=o.bot_list)||void 0===e?void 0:e.length)&&(t.botMap[n]=null==o?void 0:o.bot_list[0])})),[2,null==o?void 0:null===(r=o.bot_list)||void 0===r?void 0:r[0]]}})}),function(t){return n.apply(this,arguments)}),getBot:function(t){return e().botMap[t]},getBotIdFromLocalConversation:function(t){var n=e().botIdToLocalConversationMap;for(var r in n)if(n[r]===t)return r},getBotIdToLocalConversationMap:function(){return e().botIdToLocalConversationMap},getBotIdToRequestIdMap:function(){return e().botIdToRequestIdMap}})}},90113:function(t,e,n){"use strict";n.d(e,{useIsLaunchLoading:function(){return o},useIsLaunchSuccess:function(){return i}});var r=n("90009"),o=function(){return(0,r.useGlobalStore)(function(t){return t.launchStatus===r.LaunchStatus.Loading})},i=function(){return(0,r.useGlobalStore)(function(t){return t.launchStatus===r.LaunchStatus.Success})}},62966:function(t,e,n){"use strict";n.d(e,{FetchLaunchType:function(){return r.FetchLaunchType},LaunchStatus:function(){return r.LaunchStatus},useGlobalStore:function(){return r.useGlobalStore},useIsLaunchLoading:function(){return o.useIsLaunchLoading},useIsLaunchSuccess:function(){return o.useIsLaunchSuccess}});var r=n("90009"),o=n("90113")},90009:function(t,e,n){"use strict";n.d(e,{FetchLaunchType:function(){return l},LaunchStatus:function(){return c},useGlobalStore:function(){return f}});var r,o,i=n("9161"),a=n("16044"),s=n("37222"),u=n("85205");var c=((r={})[r.NotStarted=0]="NotStarted",r[r.Loading=1]="Loading",r[r.Success=2]="Success",r[r.Failed=3]="Failed",r);var l=((o={}).Config="config",o.Other="other",o),d={isOffline:!1,isHideNetworkStatus:!1,launchStatus:c.NotStarted,discordLink:""},f=(0,u.create)()((0,s.subscribeWithSelector)(function(t){return(0,a._)((0,i._)({},d),{setIsOffline:function(e){return t(function(){return{isOffline:e}})},setHideNetworkStatus:function(e){return t(function(){return{isHideNetworkStatus:e}})}})}))},45457:function(t,e,n){"use strict";n.d(e,{getIsNarrowScreen:function(){return s},listenScreenWideTypeChange:function(){return u},useIsNarrowScreen:function(){return c}});var r,o=n("78597"),i=null===(r=window)||void 0===r?void 0:r.matchMedia("(min-width:880px)"),a=null==i?void 0:i.matches,s=function(){return!a},u=function(){var t=function(t){return a=t.matches};return i.addEventListener?(i.addEventListener("change",t),function(){return i.removeEventListener("change",t)}):(i.addListener(t),function(){return i.removeListener(t)})},c=function(){return(0,o.useMedia)({maxWidth:599})}},65801:function(t,e,n){"use strict";n.d(e,{retryToast:function(){return s}});var r=n("97458"),o=n("53268"),i=n("15457"),a=n("86902"),s=function(t){var e=t.onClick,n=t.text;return o.Toast.error({content:(0,r.jsxs)("span",{children:[(0,r.jsx)("span",{children:n}),(0,r.jsx)("a",{className:a["retry-button"],onClick:e,children:(0,i.getUnreactiveTranslate)("retry")})]}),duration:8,showClose:!0})}},43850:function(t,e,n){"use strict";n.d(e,{useChatViewConfig:function(){return F},useChatViewConfigFromUrl:function(){return k},useCreateConversationHelper:function(){return B},useIsNewThreadFromURL:function(){return x}});var r=n("9161"),o=n("16044"),i=n("40509"),a=n("52983"),s=n("33434"),u=n("87382"),c=n("78597"),l=n("10630"),d=n("62920"),f=n("53641"),v=n("87575"),h=n("31566"),p=n("87681"),g=n("52420"),_=n("11068"),C=n("25026"),m=n("9707"),S=n("32208"),b=n("62560"),y=n("53268"),I=n("9317"),L=n("53370"),w=n("15457"),T=n("65801"),B=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=(0,d.useChatStore)(function(t){return t.fetchConversationAndUpdateLocalStatus},s.shallow),n=(0,a.useRef)(),i=(0,w.useTranslateFn)();return{initCreateConversation:function(a){var s=a.conversationId,c=a.messageId,l=a.token,p=a.botId,g=a.localConversationId,C=a.localConversationInfo,S=a.reportProps,b=a.scene,I=a.createFrom,w=a.click_from,B=void 0===w?t.click_from:w,M=(0,u.createReportEvent)(S),k=g||d.useChatStore.getState().addNewLocalConversation({reportEvent:M,conversation:C});p&&f.FlowBot.actions.setLocalConversationIdForBot({botId:p,localConversationId:k});var x=function(t){if(n.current&&y.Toast.close(n.current),s){var a=d.useChatStore.getState().conversationMap[s];if(!a||!(0,v.isCocoConversation)(a)){var f=Error("expect coco conversation but not found");return t.error({error:f,reason:"non_coco_conversation"}),y.Toast.error({content:i("system_error_toast"),showClose:!1}),Promise.reject(f)}h.FlowTea.trackEvent("create_new_chat",{click_from:B,conversation_id:s,bot_id:a.bot_id})}return e({conversationId:s,messageId:c,localConversationId:k,token:l,botId:p,scene:b,createFrom:I}).then(function(t){return L.useChatLayoutStore.getState().setActiveKey(void 0),t}).catch(function(t){var e,a,s=i("create_new_chat_failed");throw(0,_.isApiErrorWithI18n)(t)&&(null==t?void 0:null===(e=t.errorOption)||void 0===e?void 0:e.message)&&(s=null==t?void 0:null===(a=t.errorOption)||void 0===a?void 0:a.message),m.isApiError,n.current=(0,T.retryToast)({text:s,onClick:function(){x((0,u.createReportEvent)({eventName:S.eventName,meta:(0,o._)((0,r._)({},S.meta),{retry:!0})}))}}),t})};return{newLocalConversationId:k,createConversation:function(){return x(M)}}}}},M=function(t){var e=(t||{}).onGetId,n=(0,a.useRef)();return(0,a.useEffect)(function(){var t=d.useChatStore.subscribe(l.useMainConversationLink.raw,function(r){(null==r?void 0:r.conversationId)&&(n.current=r.conversationId,null==e||e(),null==t||t())},{fireImmediately:!0,equalityFn:s.shallow});return t},[]),n},k=function(){var t=(0,S.useParams)().id,e=Number((0,i._)((0,b.useSearchParams)(),1)[0].get("type"));if(t&&(0,c.isNumeric)(t))return{chatId:t,chatType:e}},x=function(){var t=k(),e=(0,i._)((0,b.useSearchParams)(),1)[0],n=(0,S.useMatches)();return t?(null==t?void 0:t.chatType)===p.ChatType.NewThread:n.some(function(t){return"main_chat/(id$)/page"===t.id})&&"1"!==e.get("first_login_app")},P=function(t){var e,n=t.cocoConversationId,r=t.chatViewConfigFromUrl,o=(0,w.useTranslateFn)(),i=I.landingConfig.currentConversationId,a=B({click_from:"enter_landing_page"}),s=(null!==(e=(0,l.useMainConversationLink)())&&void 0!==e?e:{}).conversationId;if(i&&l.useLocalConversation.raw(d.useChatStore.getState(),i))return i;if(n||r)return I.landingConfig.markFirstEnterPage(),"";var u=a.initCreateConversation({conversationId:s,localConversationInfo:{conversation_type:C.ConversationType.CocoWebSub,name:o("sidebar_newChat_placeholder")},reportProps:{eventName:"create_conversation",meta:{from:"header"}},click_from:I.landingConfig.firstEnterPage?"enter_landing_page":"fallback_root_page"}).newLocalConversationId;return I.landingConfig.updateCurrentConversationId(u),u},F=function(){var t=(0,i._)((0,a.useReducer)(function(t){return t+1},0),2)[1],e=(0,S.useLocation)(),n=(e.state||{}).cocoConversationId,o=k(),u=(0,c.parseHashOrQuery)(e.search).first_login_app,f=P({cocoConversationId:n,chatViewConfigFromUrl:o}),v=M({onGetId:function(){!o&&t()}});return(0,c.useCompareMemo)(function(){if(n)return{chatId:String(n),chatType:p.ChatType.Conversation};if(null===g.FlowConfig||void 0===g.FlowConfig?void 0:g.FlowConfig.isGuest){var t,e,i=null!==(e=null===(t=l.useMainConversationLink.raw(d.useChatStore.getState()))||void 0===t?void 0:t.conversationId)&&void 0!==e?e:"",a=d.useChatStore.getState().conversationMap[i];return{chatId:i,chatType:a?p.ChatType.Conversation:p.ChatType.NewThread}}return o?(0,r._)({},o):"1"!==u&&f?{chatId:f,chatType:p.ChatType.NewThread}:v.current?{chatId:v.current,chatType:p.ChatType.Conversation}:void 0}(),s.shallow)}},15457:function(t,e,n){"use strict";n.d(e,{getUnreactiveLanguage:function(){return c},getUnreactiveTranslate:function(){return u},useTranslateFn:function(){return s}});var r=n("40521"),o=n("82298"),i=n("49503"),a={},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.memo,n=void 0===e||e,i=(0,o.useTranslation)().t;return function(t,e,o){return o||e||(0,r.default)(t)||!n?i(t,e,o):(!a[t]&&(a[t]=i(t)),a[t])}},u=i.I18n.t,c=function(){return i.I18n.language}},53370:function(t,e,n){"use strict";n.d(e,{TemplatePageStatus:function(){return d},useChatLayoutCurrentState:function(){return h},useChatLayoutStore:function(){return v}});var r,o=n("83316"),i=n("9161"),a=n("16044"),s=n("6462"),u=n("85205"),c=n("50002"),l=n("97176");var d=((r={}).CLOSE="close",r.OPEN="open",r),f={routesStack:[],routesStateMap:{},payload:{},activeKey:void 0,state:"replace",lastShowStatus:{},mode:""},v=(0,u.create)()(function(t){return(0,a._)((0,i._)({},f),{changeMode:function(e){return t(function(){return{mode:e}})},setPayload:function(e){return t(function(){return{payload:e}})},setStack:function(e){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];t(function(){return{routesStack:e,state:"replace",routesStateMap:(0,l.produce)({},function(t){for(var n=0;n<Math.min(r.length,e.length);n+=1)t[n]=r[n]})}})},setActiveKey:function(e){return t(function(){return{activeKey:e||void 0}})},goBack:function(){return t(function(t){var e=t.routesStack,n=t.routesStateMap;return{routesStack:(0,s._)(e.slice(0,-1)),state:"pop",routesStateMap:(0,l.produce)(n,function(t){delete t[e.length-1]})}})},push:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.state;t(function(t){var n=t.routesStack,o=t.routesStateMap;return{routesStack:(0,s._)(n).concat([e]),state:"push",routesStateMap:(0,l.produce)(o,function(t){r&&(t[n.length]=r)})}})},setLastShowStatus:function(e,n){return t(function(t){return{lastShowStatus:(0,a._)((0,i._)({},t.lastShowStatus),(0,o._)({},e,n))}})}})}),h=function(){var t,e=v(function(t){return{routesStateMap:t.routesStateMap,routesStack:t.routesStack}}),n=e.routesStateMap,r=e.routesStack;return null!==(t=(0,c.default)(n,r.length-1))&&void 0!==t?t:{}}},9317:function(t,e,n){"use strict";n.d(e,{landingConfig:function(){return a}});var r=n("69420"),o=n("29048");function i(t,e,n){return(e=function(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==(void 0===e?"undefined":(0,o._)(e))?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a=new(function(){function t(){(0,r._)(this,t),i(this,"firstEnterPage",!0),i(this,"currentConversationId","")}var e=t.prototype;return e.markFirstEnterPage=function(){this.firstEnterPage=!1},e.updateCurrentConversationId=function(t){this.currentConversationId=t},e.reset=function(){this.firstEnterPage=!0,this.currentConversationId=""},t}())},76865:function(t,e,n){"use strict";n("47767"),n("69420"),n("73209");var r=n("29048"),o=n("67941");n("26379");(0,o._)(Error)},38258:function(t,e,n){"use strict";n.d(e,{isApiError:function(){return r.isApiError},isAxiosError:function(){return o.isAxiosError}}),n("76865");var r=n("72182"),o=n("68413")},9707:function(t,e,n){"use strict";n.d(e,{isApiError:function(){return r.isApiError},isAxiosError:function(){return r.isAxiosError}});var r=n("38258")},82924:function(t,e,n){"use strict";n.d(e,{CenterFullMode:function(){return o}});var r=n("97458"),o=function(t){var e=t.children;return(0,r.jsx)(r.Fragment,{children:e})}},5051:function(t,e,n){"use strict";n.d(e,{CenterScrollMode:function(){return o}});var r=n("97458"),o=function(t){var e=t.children;return(0,r.jsx)(r.Fragment,{children:e})}},31714:function(t,e,n){"use strict";n.d(e,{LeftSide:function(){return o}});var r=n("97458"),o=function(t){var e=t.children;return(0,r.jsx)(r.Fragment,{children:e})}},72128:function(t,e,n){"use strict";n.d(e,{MaxWidthLayoutProvider:function(){return i},useMaxWidthLayoutContext:function(){return a}});var r=n("52983"),o=(0,r.createContext)({leftVisible:!1,rightVisible:!1,contentVisible:!1,rightWidth:0,leftWidth:0}),i=o.Provider,a=function(){return(0,r.useContext)(o)}},26218:function(t,e,n){"use strict";n.d(e,{MaxWidthLayout:function(){return v}});var r=n("83316"),o=n("9161"),i=n("16044"),a=n("89334"),s=n("97458"),u=n("52983"),c=n("87608"),l=n.n(c),d=n("72128"),f=n("47611"),v=(0,u.forwardRef)(function(t,e){var n,u=t.children,c=t.paddingWrapperClassName,v=t.className,h=(0,a._)(t,["children","paddingWrapperClassName","className"]),p=(0,d.useMaxWidthLayoutContext)(),g=p.leftVisible,_=p.rightVisible,C=p.contentVisible,m=p.rightWidth,S=p.leftWidth;return(0,s.jsx)("div",{className:l()(f.container,c,(n={},(0,r._)(n,f.leftVisible,g),(0,r._)(n,f.rightVisible,_),(0,r._)(n,f.contentVisible,C),n)),style:{"--right-side-width":"".concat(m,"px"),"--left-side-width":"".concat(S,"px")},ref:e,children:(0,s.jsx)("div",(0,i._)((0,o._)({className:l()(f.inner,v)},h),{children:u}))})})},48712:function(t,e,n){"use strict";n.d(e,{RightSide:function(){return o}});var r=n("97458"),o=function(t){var e=t.children;return(0,r.jsx)(r.Fragment,{children:e})}},32156:function(t,e,n){"use strict";n.d(e,{SamanthaLayout:function(){return _}});var r=n("83316"),o=n("97458"),i=n("78597"),a=n("52983"),s=n("87608"),u=n.n(s),c=n("79070"),l=n("31714"),d=n("48712"),f=n("82924"),v=n("5051"),h=n("72128"),p=n("26218"),g=n("95620"),_=function(t){var e=t.className,n=t.style,s=t.innerLayoutClassName,p=t.children,_=function(t){return(0,c.default)(p).find(function(e){return e.type===t})},C=(0,a.useMemo)(function(){return _(l.LeftSide)},[p]),m=(0,a.useMemo)(function(){return _(d.RightSide)},[p]),S=(0,a.useMemo)(function(){return _(f.CenterFullMode)},[p]),b=(0,a.useMemo)(function(){return _(v.CenterScrollMode)},[p]),y=!!C,I=!!m,L=!!(S||b),w=(0,a.useRef)(null),T=(0,a.useRef)(null),B=(0,i.useResizeObserver)({ref:w}).width,M=(0,i.useResizeObserver)({ref:T}).width;return(0,o.jsx)(h.MaxWidthLayoutProvider,{value:{leftVisible:y,rightVisible:I,contentVisible:L,rightWidth:void 0===M?0:M,leftWidth:void 0===B?0:B},children:(0,o.jsxs)("div",{className:u()(g.containerWrapper,e),style:n,children:[(0,o.jsxs)("div",{className:g.panelWrapper,children:[S&&(0,o.jsx)("div",{className:u()(g.fullMode),children:S}),b&&(0,o.jsx)("div",{className:u()(g.scrollMode),children:b})]}),(0,o.jsx)("div",{className:g.container,children:(0,o.jsxs)("div",{className:u()(g.layout,s,(0,r._)({},g.leftVisible,y)),children:[C&&(0,o.jsx)("aside",{className:g.leftSide,ref:w,children:C}),m&&(0,o.jsx)("div",{className:g.rightSide,ref:T,children:m})]})})]})})};_.LeftSide=l.LeftSide,_.RightSide=d.RightSide,_.CenterFullMode=f.CenterFullMode,_.CenterScrollMode=v.CenterScrollMode,_.MaxWidthLayout=p.MaxWidthLayout},86902:function(t){"use strict";t.exports={"retry-button":"retry-button-_4441d",retryButton:"retry-button-_4441d"}},47611:function(t){"use strict";t.exports={container:"container-_740ad",inner:"inner-_6bf2c",leftVisible:"leftVisible-_9eee2",rightVisible:"rightVisible-_463e0"}},95620:function(t){"use strict";t.exports={container:"container-_5347b",containerWrapper:"containerWrapper-_25ae3",fullMode:"fullMode-_792a5",layout:"layout-d226f6",leftSide:"leftSide-ea2027",leftVisible:"leftVisible-aa881f",panelWrapper:"panelWrapper-_2714d",rightSide:"rightSide-_469c0",scrollMode:"scrollMode-a783c6"}}}]);