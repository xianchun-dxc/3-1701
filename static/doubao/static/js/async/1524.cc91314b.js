/*! For license information please see 1524.cc91314b.js.LICENSE.txt */
(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([["1524"],{16459:function(e,t,n){"use strict";n.d(t,{ReactComponent:function(){return s}});var i=n("9161"),a=n("16044"),r=n("97458");n("52983");var s=function(e){return(0,r.jsx)("svg",(0,a._)((0,i._)({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24"},e),{children:(0,r.jsx)("path",{fill:"currentColor",fillOpacity:.9,d:"M7.5 20.648q-1.266 0-1.914-.64-.649-.64-.649-1.899v-7.687q0-1.25.649-1.89.648-.65 1.914-.65h2.266v1.54H7.594q-.547 0-.836.289-.281.28-.281.851v7.415q0 .57.28.851.29.29.837.29h8.804q.54 0 .829-.29.296-.28.296-.851v-7.414q0-.57-.296-.852-.29-.29-.829-.29h-2.164V7.884H16.5q1.266 0 1.914.648.648.641.648 1.89v7.688q0 1.25-.648 1.891-.648.648-1.914.648zm4.5-6.226a.72.72 0 0 1-.516-.211.68.68 0 0 1-.21-.5V5.844l.062-1.164-.492.57L9.75 6.422a.62.62 0 0 1-.484.21.66.66 0 0 1-.461-.171.61.61 0 0 1-.18-.453q0-.25.195-.461l2.625-2.524a1 1 0 0 1 .282-.195.7.7 0 0 1 .546 0q.133.055.274.195l2.625 2.524q.203.21.203.46a.6.6 0 0 1-.195.454.65.65 0 0 1-.453.172.63.63 0 0 1-.485-.211L13.148 5.25l-.484-.57.063 1.164v7.867q0 .29-.22.5a.7.7 0 0 1-.507.21"})}))}},50355:function(e,t,n){"use strict";n.d(t,{ReactComponent:function(){return s}});var i=n("9161"),a=n("16044"),r=n("97458");n("52983");var s=function(e){return(0,r.jsx)("svg",(0,a._)((0,i._)({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24"},e),{children:(0,r.jsx)("path",{fill:"currentColor",fillOpacity:.9,d:"M9.828 17.846a.55.55 0 0 1-.393-.141.55.55 0 0 1-.156-.386l-.222-7.65a.48.48 0 0 1 .14-.379.53.53 0 0 1 .393-.148q.246 0 .393.148a.5.5 0 0 1 .163.37l.223 7.652q0 .237-.148.386a.53.53 0 0 1-.393.148m2.172 0a.57.57 0 0 1-.4-.141.52.52 0 0 1-.149-.386V9.67q0-.238.149-.379a.56.56 0 0 1 .4-.148q.252 0 .4.148.156.141.156.378v7.651a.5.5 0 0 1-.156.386.56.56 0 0 1-.4.14m2.18 0a.54.54 0 0 1-.4-.148.5.5 0 0 1-.141-.386l.222-7.644a.52.52 0 0 1 .156-.378.53.53 0 0 1 .393-.148q.252 0 .393.148.147.141.14.378l-.215 7.651a.53.53 0 0 1-.163.386.54.54 0 0 1-.385.14M8.545 6.977V5.405q0-.875.534-1.364.54-.49 1.505-.49h2.825q.963 0 1.497.49.541.49.541 1.364v1.572h-1.512V5.472a.52.52 0 0 0-.178-.415.64.64 0 0 0-.46-.163h-2.602a.66.66 0 0 0-.467.163.54.54 0 0 0-.17.415v1.505zm-3.218.971a.72.72 0 0 1-.518-.207.7.7 0 0 1-.215-.52q0-.304.215-.51a.72.72 0 0 1 .518-.209H18.68q.304 0 .512.208a.67.67 0 0 1 .215.512q0 .31-.208.519a.7.7 0 0 1-.52.207zm3.263 12.5q-.897 0-1.431-.497-.534-.496-.571-1.393L6.084 7.8h1.49L8.07 18.26a.8.8 0 0 0 .2.526q.192.2.497.2h6.457a.64.64 0 0 0 .497-.2q.192-.192.207-.526L16.411 7.8h1.513l-.504 10.75q-.037.904-.579 1.401-.534.497-1.423.497z"})}))}},74307:function(e,t,n){"use strict";n.d(t,{ChatItemMenu:function(){return N}});var i=n("92769"),a=n("9161"),r=n("40509"),s=n("88802"),o=n("97458"),c=n("52983"),u=n("87608"),d=n.n(u),l=n("78597"),m=n("50355"),v=n("16459"),_=n("54769"),h=n("53277"),f=n("87575"),g=n("75761"),p=n("96317"),x=n("2628"),b=n("32208"),y=n("53268"),w=n("59240"),C=n("72676"),T=n("49226"),L=n("31746"),M=n("26686"),j=n("91815"),N=function(e){var t,n,u,N=e.conversation,I=e.bot,k=e.menuType,S=e.className,P=e.trigger,E=e.trackParams,D=(0,C.useTranslateFn)(),q=(0,b.useParams)().id,R=(0,c.useRef)(null),A=(0,T.useShareThreadModal)({conversationId:null!==(t=null==N?void 0:N.conversation_id)&&void 0!==t?t:"",conversationName:null!==(n=null==N?void 0:N.name)&&void 0!==n?n:""}),F=A.shareModal,H=A.setVisible,V=(0,_.useMessageLinks)(null!==(u=null==N?void 0:N.conversation_id)&&void 0!==u?u:"").filter(function(e){return e.isLocalMessage}).map(function(e){var t;return(0,h.getMessageFromStore)(null!==(t=null==N?void 0:N.conversation_id)&&void 0!==t?t:"",e)}).some(function(e){return!(0,f.isMessageFinished)(e)}),B=(0,r._)((0,c.useState)({visible:!1}),2),U=B[0],z=B[1],O=(0,r._)((0,M.useRemoveConversation)({conversationId:null==N?void 0:N.conversation_id,isCocoSub:(0,f.isCocoSubConversation)(N),botId:(null==I?void 0:I.bot_id)||(null==N?void 0:N.bot_id),exts:{from:"sidebar",click_from:"chat_list"}}),1)[0],Y=(0,r._)((0,M.usePinnedConversation)({conversationId:null==N?void 0:N.conversation_id,bot:I||{},exts:{from:"sidebar",click_from:"chat_list"}}),2),G=Y[0],K=Y[1],W=(0,r._)((0,c.useState)(!1),2),J=W[0],Q=W[1];(0,c.useEffect)(function(){(null==N?void 0:N.conversation_id)!==q&&Q(!1)},[null==N?void 0:N.conversation_id,q]);var X=function(e){(0,w.trackEvent)("botlist_more_options",(0,a._)({bot_id:(null==N?void 0:N.bot_id)||(null==I?void 0:I.bot_id),conversation_id:null==N?void 0:N.conversation_id,conversation_type:null==N?void 0:N.conversation_type,chat_type:(0,g.getChatTypeForTea)(null==N?void 0:N.conversation_id,I)||"other_default"},e,E||null))},Z=(0,l.useDebounceFn)(function(){H(!0),Q(!1)},{leading:!0,trailing:!1}).run,$=(0,l.useRequest)((0,i._)(function(){return(0,s.__generator)(this,function(e){switch(e.label){case 0:return X({option_name:"delete"}),[4,O()];case 1:return[2,e.sent()]}})}),{manual:!0}),ee=$.run,et=$.loading;return(0,o.jsx)("div",{className:d()(j["chat-item-menu-wrapper"],void 0===S?"":S),children:(0,o.jsxs)("div",{ref:R,className:j["chat-item-menu-button-outline"],onClick:function(e){return e.stopPropagation()},onTouchEnd:function(e){return e.stopPropagation()},children:[(0,o.jsx)(x.PopoverI18n,{position:"bottomRight",clickToHide:!0,trigger:void 0===P?"click":P,visible:J,onVisibleChange:function(e){return Q(e)},getPopupContainer:function(){return document.body},className:j["chat-item-menu-dropdown"],content:(0,o.jsx)("div",{className:"rounded-12 overflow-hidden",onClick:function(e){return e.stopPropagation(),e.preventDefault()},children:(0,o.jsxs)(y.Dropdown.Menu,{children:[!(0,f.isCocoSubConversation)(N)&&(0,o.jsx)(y.Dropdown.Item,{className:"select-none",icon:(null==N?void 0:N.pinned)?(0,o.jsx)(p.UnpinnedConversationIcon,{"data-testid":"chat_item_menu_unpin_icon"}):(0,o.jsx)(p.PinConversationIcon,{"data-testid":"chat_item_menu_pin_icon"}),onClick:function(){(null==N?void 0:N.pinned)?(X({option_name:"unpin"}),K()):(X({option_name:"pin"}),G()),Q(!1)},children:D("".concat((null==N?void 0:N.pinned)?"unpin_chat":"pin_chat"))}),(0,f.isCocoSubConversation)(N)&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(y.Dropdown.Item,{className:d()("select-none"),icon:(0,o.jsx)(v.ReactComponent,{className:d()("text-24",{"text-s-color-text-primary":!V})}),onClick:Z,disabled:V,children:D("sidebar_thread_share")}),(0,o.jsx)(y.Dropdown.Item,{className:"select-none",icon:(0,o.jsx)(p.EditConversationNameIcon,{"data-testid":"chat_item_menu_edit_name_icon"}),onClick:function(){var e="long_press_bot";X({option_name:"rename"}),(0,w.trackEvent)("click_edit_chat_name",{bot_id:(null==N?void 0:N.bot_id)||(null==I?void 0:I.bot_id),click_from:e,conversation_id:null==N?void 0:N.conversation_id}),z({visible:!0,click_from:e})},children:D("sidebar_thread_rename")})]}),(0,o.jsx)(y.Dropdown.Item,{className:d()(j["remove-btn"],"select-none"),icon:(0,o.jsx)(m.ReactComponent,{"data-testid":"chat_item_menu_remove_icon",className:"text-24"}),onClick:function(){!et&&ee()},children:D("sidebar_thread_delete")})]})}),children:(0,o.jsx)("div",{onClick:function(e){return e.stopPropagation(),e.preventDefault()},children:"thread"===k?(0,o.jsx)(p.ThreadActionIcon,{"data-testid":"chat_item_dropdown_entry",className:d()(j["chat-item-menu-button"])}):(0,o.jsx)(p.MoreIcon,{"data-testid":"chat_item_dropdown_entry",className:d()(j["more-icon"])})})}),U.visible&&N&&(0,o.jsx)(L.EditConversationDialog,{exts:U,onHide:function(){z({visible:!1})},conversationId:N.conversation_id}),F]})})}},53214:function(e,t,n){"use strict";n.d(t,{LastMsgSummary:function(){return x}});var i=n("97458"),a=n("24837"),r=n("87608"),s=n.n(r),o=n("87575"),c=n("4899"),u=n("54769"),d=n("53277"),l=n("63964"),m=n("72676"),v=n("52080"),_=function(e){if(!e)return(0,m.getUnreactiveTranslate)("im_list_message_placeholder");if((0,o.isLocalMessage)(e)&&!(0,o.isMessageFailed)(e)){if((0,o.isMessagePreprocessing)(e)||(0,o.isMessageSending)(e))return(0,m.getUnreactiveTranslate)("chat_list_subtitle_sending");if((0,o.isMessageReceiving)(e))return(0,m.getUnreactiveTranslate)("chat_list_subtitle_answering")}if(!(0,o.isSupportedReceiveMessage)(e))return(0,m.getUnreactiveTranslate)("chat_unsupported_message_type");var t,n,i=null===(t=e.ext)||void 0===t?void 0:t.brief;if(i)return i;if((0,o.isImageMessage)(e))return(0,m.getUnreactiveTranslate)("chat_list_subtitle_image");if((0,o.isFileMessage)(e))return(0,m.getUnreactiveTranslate)("file_subtitle");if((0,o.isCompositeMessage)(e))return(null==e?void 0:null===(n=e.contentObj)||void 0===n?void 0:n.text)||"";var a=(0,c.getTextFromTextMessage)(e);return a?a:(0,m.getUnreactiveTranslate)("im_list_message_placeholder")};function h(e){return e&&(0,o.isMessageAvailable)(e)&&(!(0,o.isMessageFailed)(e)||(0,c.getTextFromTextMessage)(e)||(0,o.isImageMessage)(e))}var f=function(e){var t=e.text,n=e.className,a=(0,l.useGetLanguageDirectionOfText)(t);return(0,i.jsx)("p",{className:s()([v.msg,n]),dir:a,children:t})},g=function(e){for(var t,n=e.conversationId,a=e.className,r=(0,u.useMessageLinks)(n),s=(0,u.useMessageMap)(n),o=(0,u.useLocalMessageMap)(n),c=r.length-1;c>=0;c--){var d=r[c],l=d.isLocalMessage?o[d.messageId]:s[d.messageId];if(h(l)){t=l;break}}return(0,i.jsx)(f,{className:a,text:_(t)})},p=function(e){var t=e.conversationId,n=e.className,r=(0,u.useMessageLinks)(t),s=(0,d.findLastAvailableMessageLinkFromStore)(t,r),o=(0,u.useMessage)(t,s),c=(0,u.useLastMessage)(t),l=(0,a.default)([c,o],function(e){return(null==e?void 0:e.index)||-1});return h(l)?(0,i.jsx)(f,{className:n,text:_(l)}):(0,i.jsx)(g,{className:n,conversationId:t})},x=function(e){var t=e.conversationId,n=e.summary,a=e.fallbackSummary,r=e.className;if(n)return(0,i.jsx)(f,{className:r,text:n});if(t)return(0,i.jsx)(p,{className:r,conversationId:t});if(a)return(0,i.jsx)(f,{className:r,text:a});else return(0,i.jsx)(i.Fragment,{})}},58781:function(e,t,n){"use strict";n.d(t,{useLoadThreadListNextPage:function(){return C}});var i=n("92769"),a=n("88802"),r=n("97458"),s=n("52983"),o=n("37247"),c=n("90396"),u=n("87382"),d=n("40789"),l=n("32156"),m=n("46750"),v=n("10630"),_=n("8012"),h=n("62920"),f=n("97530"),g=n("53268"),p=n("59240"),x=n("72676"),b=n("96608"),y=n("89678"),w=n("73558"),C=function(){var e,t=(0,s.useMemo)(function(){return new o.default({concurrency:1})},[]),n=(0,v.useThreadList)(),r=n.threadListStatus,c=n.loadThreadList,d=(0,s.useRef)(0);return{loadThreadListNextPage:(e=(0,i._)(function(){var e,n,i;return(0,a.__generator)(this,function(a){switch(a.label){case 0:if(r.loading||r.initiated&&!r.hasMore)return[2];e=(0,u.createReportEvent)({eventName:"load_more_thread_list"}),a.label=1;case 1:return a.trys.push([1,4,,5]),[4,c({size:20,index:r.nextIndex})];case 2:return n=a.sent(),e.addDurationPoint("fetch_success"),d.current+=1,[4,(0,_.loadConversationListMessage)({reportEvent:void 0,conversationPriorityList:n.map(function(e,t){return{conversation:e,priority:100*d.current-t}}),queue:t})];case 3:return a.sent(),e.success(),[3,5];case 4:return i=a.sent(),e.error({reason:"load_more_thread_list_failed",error:i instanceof Error?i:Error(String(i))}),[3,5];case 5:return[2]}})}),function(){return e.apply(this,arguments)})}};t.default=function(e){var t=e.height,n=e.onScroll,i=e.onLeaveScroll,a=(0,x.useTranslateFn)(),o=(0,s.useRef)(null),u=(0,h.useChatStore)(function(e){return(0,c.default)(e,"conversationMap")}).conversationMap,_=(0,v.useThreadList)(),T=_.threadLinks,L=_.threadListStatus,M=C().loadThreadListNextPage,j=(0,s.useMemo)(function(){var e=[],t={timezone:"",timeText:"",links:[]};return T.forEach(function(n){if(!(0,m.isLocalThreadId)(n.threadId)){var i=u[n.conversationId],r=(0,b.funcCalculateTimeText)(Number(i.update_time),!1),s=b.TimeLineTextStarlingKey[r],o=s?a(s):"";t.timezone!==r&&(t={timezone:r,timeText:o,links:[]},e.push(t)),t.links.push(i)}},[]),e},[T,u]);(0,s.useEffect)(function(){!L.initiated&&!L.loading&&M()},[L.initiated,L.loading]),(0,s.useEffect)(function(){d.usePageHistoryStore.getState().setCurrentPage(d.VisitPage.THREAD_PAGE),(0,p.trackEvent)("enter_page")},[]);var N=(0,s.useRef)(new Set),I=function(e){if(!N.current.has(null==e?void 0:e.conversation_id)){N.current.add(null==e?void 0:e.conversation_id);var t=e.name,n=e.conversation_id,i=e.conversation_type,a=(0,v.getThreadLinksFromConversationLinks)(h.useChatStore.getState()).findIndex(function(t){return t.conversationId===(null==e?void 0:e.conversation_id)});(0,p.trackEvent)("historic_thread_single_show",{current_page:d.VisitPage.THREAD_PAGE,thread_rnk:a>-1?a+1:void 0,thread_topic:t,conversation_id:n,conversation_type:i,chat_type:"default_new"})}};return(0,r.jsx)(f.ScrollView,{style:{height:t},reachBottomThreshold:30,ref:o,onReachBottom:function(){return M()},className:w.container,onScroll:function(){var e,t;(null===(t=o.current)||void 0===t?void 0:null===(e=t.getScrollTop)||void 0===e?void 0:e.call(t))===0?i():n()},children:(0,r.jsxs)(l.SamanthaLayout.MaxWidthLayout,{children:[j.map(function(e,t){return(0,r.jsxs)(s.Fragment,{children:[e.timezone!==b.TimeLineTextEnum.Pined?(0,r.jsx)("p",{className:w["timeline-text"],children:e.timeText}):null,e.links.map(function(e){return(0,r.jsx)(y.default,{"data-testid":"thread_detail_item",onShow:I,item:e},e.conversation_id)})]},"".concat(e.timezone,"_").concat(t))}),L.initiated&&L.loading?(0,r.jsx)("div",{className:"text-center my-20",children:(0,r.jsx)(g.Spin,{})}):null]})})}},89678:function(e,t,n){"use strict";var i=n("83316"),a=n("9161"),r=n("16044"),s=n("89334"),o=n("40509"),c=n("97458"),u=n("28377"),d=n("52983"),l=n("33434"),m=n("87608"),v=n.n(m),_=n("40789"),h=n("78597"),f=n("91165"),g=n("10630"),p=n("62920"),x=n("54769"),b=n("75761"),y=n("53277"),w=n("87575"),C=n("32208"),T=n("45457"),L=n("99956"),M=n("59240"),j=n("53214"),N=n("74307"),I=n("73558");t.default=function(e){var t=e.item,n=e.onShow,m=(0,s._)(e,["item","onShow"]),k=(0,d.useRef)(null),S=(0,o._)((0,d.useState)(!1),2),P=S[0],E=S[1];(0,h.useHover)(k,{onChange:E});var D=(0,C.useNavigate)(),q=(0,T.useIsNarrowScreen)(),R=(0,p.useChatStore)(function(e){return e.lastMessageIndexMap[t.conversation_id||""]},l.shallow),A=(0,x.useMessageLinks)(t.conversation_id||""),F=(0,g.useConversation)(t.conversation_id||""),H=(0,L.useBotInfo)(null==F?void 0:F.bot_id),V=R?(0,b.getUnreadCount)({message_index:(0,y.getLastMessageIndexForUnreadCount)(t.conversation_id||"",A,R),read_message_index:null==R?void 0:R.read_message_index}):0,B=(0,o._)((0,u.useInView)({triggerOnce:!0,initialInView:!1,threshold:1}),2),U=B[0],z=B[1],O=function(){if(F&&(0,w.isCocoSubConversation)(F)){var e=F.name,n=F.conversation_id,i=F.conversation_type,a=(0,b.getChatTypeForTea)(null==F?void 0:F.conversation_id),r=(0,g.getThreadLinksFromConversationLinks)(p.useChatStore.getState()).findIndex(function(e){return e.conversationId===(null==F?void 0:F.conversation_id)});(0,M.trackEvent)("historic_thread_single_click",{current_page:_.VisitPage.THREAD_PAGE,thread_rnk:r>-1?r+1:void 0,conversation_id:n,conversation_type:i,thread_topic:e,chat_type:a,click_from:_.VisitPage.THREAD_PAGE})}D("/chat/".concat(t.conversation_id))};(0,d.useEffect)(function(){z&&F&&n(F)},[z]);var Y=(0,d.useRef)(0);return(0,d.useEffect)(function(){z&&V&&(null==F?void 0:F.conversation_id)&&(null==R?void 0:R.message_index)&&R.message_index>Y.current&&(Y.current=R.message_index,(0,M.trackEvent)("red_dot_show",{bot_id:null==F?void 0:F.bot_id,conversation_id:null==F?void 0:F.conversation_id,conversation_type:null==F?void 0:F.conversation_type,show_from:"thread_page",chat_type:(0,b.getChatTypeForTea)(null==F?void 0:F.conversation_id,H),red_dot_cnt:V}))},[z,V,null==F?void 0:F.conversation_id,null==R?void 0:R.message_index]),(0,c.jsxs)("div",(0,r._)((0,a._)({className:"flex items-center w-full cursor-pointer justify-between ".concat(I["thread-item"]),onClick:function(){return O()},ref:U},m),{children:[(0,c.jsxs)("div",{className:"max-w-628 grow w-0",children:[(0,c.jsx)("h4",{className:"text-16 font-medium my-0 flex items-center",children:(0,c.jsx)("div",{"data-testid":"thread_detail_item_title",className:v()("text-ellipsis overflow-hidden whitespace-nowrap",(0,i._)({},I["thread-title-hover"],!P)),children:t.name})}),(0,c.jsx)("div",{"data-testid":"thread_detail_item_description",className:"text-14 text-[#00000080] leading-[150%]",children:(0,c.jsx)(j.LastMsgSummary,{className:v()((0,i._)({},I["thread-msg-two-line"],!q)),conversationId:t.conversation_id})})]}),(0,c.jsxs)("div",{className:"flex w-72 text-[#00000080] relative justify-between items-center",children:[(0,c.jsx)("div",{className:"w-32 px-8",children:(0,c.jsx)(f.Badge,{className:I["thread-badge"],count:V})}),(0,c.jsx)("div",{ref:k,children:(0,c.jsx)(N.ChatItemMenu,{conversation:t,menuType:"thread",className:I["thread-item-menu"],trackParams:{click_from:"thread_page"}})})]})]}))}},96608:function(e,t,n){"use strict";n.d(t,{TimeLineTextEnum:function(){return c},TimeLineTextStarlingKey:function(){return u},funcCalculateTimeText:function(){return d}});var i,a,r=n("83316"),s=n("27860"),o=n.n(s);var c=((i={}).Pined="pinned",i.Yesterday="Yesterday",i.Previous7Days="Previous 7 days",i.Previous30Days="Previous 30 days",i.LastYear="Last year",i.Earlier="Earlier",i),u=(a={},(0,r._)(a,c.Yesterday,"allChats_timestamp_yesterday"),(0,r._)(a,c.Previous7Days,"allChats_timestamp_previous7Days"),(0,r._)(a,c.Previous30Days,"allChats_timestamp_previous30Days"),(0,r._)(a,c.LastYear,"allChats_timestamp_lastYear"),(0,r._)(a,c.Earlier,"allChats_timestamp_earlier"),a),d=function(e,t){var n=o()(),i=o()(1e3*e);switch(!0){case!!t||i.isSame(n,"day"):return c.Pined;case i.isSame(n.subtract(1,"day"),"day"):return c.Yesterday;case i.isAfter(n.subtract(7,"day")):return c.Previous7Days;case i.isAfter(n.subtract(30,"day")):return c.Previous30Days;case i.isAfter(n.subtract(1,"year")):return c.LastYear;default:return c.Earlier}}},91165:function(e,t,n){"use strict";n.d(t,{Badge:function(){return o}});var i=n("97458"),a=n("87608"),r=n.n(a),s=n("18343"),o=function(e){var t=e.className,n=e.count,a=e.onClick;return n?(0,i.jsx)("div",{className:r()(s.badge,t),onClick:a,children:n>99?"99+":n}):null}},91815:function(e){"use strict";e.exports={"chat-item-menu-button":"chat-item-menu-button-_7c503",chatItemMenuButton:"chat-item-menu-button-_7c503","chat-item-menu-button-outline":"chat-item-menu-button-outline-_4ad3f",chatItemMenuButtonOutline:"chat-item-menu-button-outline-_4ad3f","chat-item-menu-dropdown":"chat-item-menu-dropdown-_97709",chatItemMenuDropdown:"chat-item-menu-dropdown-_97709","chat-item-menu-wrapper":"chat-item-menu-wrapper-fb1774",chatItemMenuWrapper:"chat-item-menu-wrapper-fb1774","more-icon":"more-icon-_81bb6",moreIcon:"more-icon-_81bb6","remove-btn":"remove-btn-_8eac7",removeBtn:"remove-btn-_8eac7"}},52080:function(e){"use strict";e.exports={msg:"msg-_8a90b",summary:"summary-_1cfd7"}},73558:function(e){"use strict";e.exports={container:"container-e98138","thread-badge":"thread-badge-bbec40",threadBadge:"thread-badge-bbec40","thread-item":"thread-item-_67e57",threadItem:"thread-item-_67e57","thread-msg-two-line":"thread-msg-two-line-aea6cd",threadMsgTwoLine:"thread-msg-two-line-aea6cd","thread-title-hover":"thread-title-hover-a906bc",threadTitleHover:"thread-title-hover-a906bc","timeline-text":"timeline-text-bf7864",timelineText:"timeline-text-bf7864"}},18343:function(e){"use strict";e.exports={badge:"badge-_131a4"}}}]);