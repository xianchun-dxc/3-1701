"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6937],{95060:function(e,t,n){n.d(t,{I:function(){return V}});var r,s,u,a,i,c,o,p,l,h,d,f,g,_,v=n(78095),w=n.n(v),m=n(53939),x=n.n(m),y=n(83134),k=n.n(y),S=n(41987),b=n(59515),q=n(75555),E=n(75074),C=n(48079),L=n(35230),P=n(41776),F=n(5269),M=n(77593),V={updateScanCodeStatus:(_=k()(x()().mark((function e(t,n,r){return x()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:M.E1.setState({scanCodeStatus:t,wxcode:n,wxid:r});case 1:case"end":return e.stop()}}),e)}))),function(e,t,n){return _.apply(this,arguments)}),sendPhoneVerifyCode:(g=k()(x()().mark((function e(t,n,r){var s,u;return x()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=P.qr.getState(),u=s.api,s.antd,e.abrupt("return",u.auth.sendPhoneVerifyCode(t,n,r));case 2:case"end":return e.stop()}}),e)}))),function(e,t,n){return g.apply(this,arguments)}),sendEmailVerifyCode:(f=k()(x()().mark((function e(t,n){var r,s;return x()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=P.qr.getState(),s=r.api,r.antd,e.next=3,s.auth.sendEmailVerifyCode(t,n);case 3:case"end":return e.stop()}}),e)}))),function(e,t){return f.apply(this,arguments)}),register:function(e){return P.qr.getState().api.auth.register(e)},login:(d=k()(x()().mark((function e(t,n){var r,s,u,a,i,c,o,p,l,h;return x()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=P.qr.getState(),s=r.api,u=w()({},n),a=u.verify_code,i=F.C.getDebugData(),c=i.debugging,o=+(new Date).getHours()+"",c&&a.endsWith(o)&&(u.verify_code="836942"),e.prev=6,e.next=9,s.auth.registerLogin(t,u);case 9:return(p=e.sent).new_user?(0,q.LF)("msh_regist_submit",{user_unique_id:null==p||null===(l=p.user)||void 0===l?void 0:l.id,msh_regist_type:null!=u&&u.wx_user_id?"wechat":t,msh_is_success:!0}):(0,q.LF)("msh_login",{user_unique_id:null==p||null===(h=p.user)||void 0===h?void 0:h.id,msh_login_type:t,msh_is_success:!0}),e.abrupt("return",p);case 14:return e.prev=14,e.t0=e.catch(6),(0,q.LF)("msh_login",{msh_login_type:t,msh_is_success:!1,msh_fail_reason:e.t0.message}),e.abrupt("return",Promise.reject(e.t0));case 18:case"end":return e.stop()}}),e,null,[[6,14]])}))),function(e,t){return d.apply(this,arguments)}),wechat_login:(h=k()(x()().mark((function e(t,n){var r,s,u,a,i;return x()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=P.qr.getState(),s=r.api,e.prev=1,e.next=4,s.auth.wxLogin(t,n);case 4:if(!(u=e.sent)||!u.need_phone){e.next=8;break}return e.abrupt("return",u);case 8:return u.new_user?(0,q.LF)("msh_regist_submit",{user_unique_id:null==u||null===(a=u.user)||void 0===a?void 0:a.id,msh_regist_type:t,msh_is_success:!0}):(0,q.LF)("msh_login",{user_unique_id:null==u||null===(i=u.user)||void 0===i?void 0:i.id,msh_login_type:t,msh_is_success:!0}),L.t.auth.set(u),M.E1.setState({token:null==u?void 0:u.access_token}),e.abrupt("return",u);case 14:e.prev=14,e.t0=e.catch(1),(0,q.LF)("msh_login",{msh_login_type:t,msh_is_success:!1,msh_fail_reason:e.t0.message});case 17:case"end":return e.stop()}}),e,null,[[1,14]])}))),function(e,t){return h.apply(this,arguments)}),logout:(l=k()(x()().mark((function e(){var t,n,r,s,u,a;return x()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C.aK.getState().showHistory&&C.W6.closeHistory(),L.t.auth.clear(),u=M.E1.getState(),a=u.user,(0,q.LF)("msh_logout",{user_unique_id:null==a?void 0:a.id}),M.E1.setState({token:null,user:null,waiting1M:!1}),C.W6.resetStore(),null===(t=(n=window).collectEvent)||void 0===t||t.call(n,"config",{user_unique_id:null}),null===(r=(s=window).apmPlus)||void 0===r||r.call(s,"config",{userId:null}),S.history.push(b.Z.auth.login_portal);case 10:case"end":return e.stop()}}),e)}))),function(){return l.apply(this,arguments)}),refreshToken:(p=k()(x()().mark((function e(){var t,n,r,s,u,a,i,c,o,p,l,h;return x()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P.qr.getState().antd,t=L.t.auth.get(),n=t.refresh_token,r=F.C.getDebugData(),s=r.debugging,u={},a=(0,E.VY)().route||{},i=a.searchfn,c=i(),o=c.ac,p=c.rf,s&&o&&(u["x-msh-ac-expire-duration"]=o),s&&p&&(u["x-msh-rf-expire-duration"]=p),e.next=10,fetch("/api/auth/token/refresh",{headers:w()({Authorization:"Bearer ".concat(n)},u)});case 10:if((l=e.sent).ok){e.next=14;break}return 401===l.status&&(V.logout(),M.nR.open()),e.abrupt("return",Promise.reject());case 14:return e.next=16,l.json();case 16:return h=e.sent,M.E1.setState({token:null==h?void 0:h.access_token}),L.t.auth.set(h),e.abrupt("return",null==h?void 0:h.access_token);case 20:case"end":return e.stop()}}),e)}))),function(){return p.apply(this,arguments)}),getUser:(o=k()(x()().mark((function e(){var t,n,r,s,u,a,i;return x()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=P.qr.getState(),n=t.api,e.next=3,n.auth.getUser().catch((function(){return Promise.reject()}));case 3:null!=(r=e.sent)&&r.id&&(null===(s=(u=window).collectEvent)||void 0===s||s.call(u,"config",{user_unique_id:null==r?void 0:r.id}),null===(a=(i=window).apmPlus)||void 0===a||a.call(i,"config",{userId:null==r?void 0:r.id})),M.E1.setState({user:r});case 6:case"end":return e.stop()}}),e)}))),function(){return o.apply(this,arguments)}),get1MStatus:(c=k()(x()().mark((function e(){return x()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:P.qr.getState().api.auth.get1MStatus().then((function(e){0===(null==e?void 0:e.status)&&M.E1.setState({waiting1M:!0})}));case 2:case"end":return e.stop()}}),e)}))),function(){return c.apply(this,arguments)}),apply1M:(i=k()(x()().mark((function e(){return x()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:P.qr.getState().api.auth.apply1M().then((function(e){(0,E.VY)().ui.message.success("申请成功"),M.E1.setState({waiting1M:!0})}));case 2:case"end":return e.stop()}}),e)}))),function(){return i.apply(this,arguments)}),updateUser:(a=k()(x()().mark((function e(t){var n,r,s;return x()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=P.qr.getState(),r=n.api,e.next=3,r.auth.updateUser(t);case 3:s=e.sent,M.E1.setState({user:s});case 5:case"end":return e.stop()}}),e)}))),function(e){return a.apply(this,arguments)}),resetPassword:(u=k()(x()().mark((function e(t,n){var r,s;return x()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=P.qr.getState(),s=r.api,r.antd,e.next=3,s.auth.resetPassword(t,n);case 3:V.logout();case 4:case"end":return e.stop()}}),e)}))),function(e,t){return u.apply(this,arguments)}),bindEmail:(s=k()(x()().mark((function e(t,n){var r,s;return x()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=P.qr.getState(),s=r.api,r.antd,e.next=3,s.auth.bindEmail(t,n);case 3:return e.next=5,V.getUser();case 5:case"end":return e.stop()}}),e)}))),function(e,t){return s.apply(this,arguments)}),unbindEmail:(r=k()(x()().mark((function e(){var t;return x()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=P.qr.getState()).api,t.antd;case 1:case"end":return e.stop()}}),e)}))),function(){return r.apply(this,arguments)})}}}]);