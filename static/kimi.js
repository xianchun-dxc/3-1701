"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
  [1717],
  {
    45562: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return v;
        }
      });
      var n = r(52643),
        o = r(30254),
        i = r(63313),
        a = r(83715),
        s = r(69782),
        u = r(98235),
        c = r(84075),
        l = r(19751),
        d = r(44810);
      const m = ["className", "component"];
      var h = r(47976),
        f = r(8375),
        p = r(30003);
      var g = (0, r(93980).Z)("MuiBox", ["root"]);
      const b = (0, f.Z)(),
        y = (function (e = {}) {
          const {
              themeId: t,
              defaultTheme: r,
              defaultClassName: h = "MuiBox-root",
              generateClassName: f
            } = e,
            p = (0, s.ZP)("div", {
              shouldForwardProp: (e) =>
                "theme" !== e && "sx" !== e && "as" !== e
            })(u.Z);
          return i.forwardRef(function (e, i) {
            const s = (0, l.Z)(r),
              u = (0, c.Z)(e),
              { className: g, component: b = "div" } = u,
              y = (0, o.Z)(u, m);
            return (0,
            d.jsx)(p, (0, n.Z)({ as: b, ref: i, className: (0, a.Z)(g, f ? f(h) : h), theme: (t && s[t]) || s }, y));
          });
        })({
          themeId: p.Z,
          defaultTheme: b,
          defaultClassName: g.root,
          generateClassName: h.Z.generate
        });
      var v = y;
    },
    2185: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return w;
        }
      });
      var n = r(30254),
        o = r(52643),
        i = r(63313),
        a = r(83715),
        s = r(37096),
        u = r(33091),
        c = r(91419),
        l = r(3034),
        d = r(20472),
        m = r(93980),
        h = r(18548);
      function f(e) {
        return (0, h.Z)("MuiCircularProgress", e);
      }
      (0, m.Z)("MuiCircularProgress", [
        "root",
        "determinate",
        "indeterminate",
        "colorPrimary",
        "colorSecondary",
        "svg",
        "circle",
        "circleDeterminate",
        "circleIndeterminate",
        "circleDisableShrink"
      ]);
      var p = r(44810);
      const g = [
        "className",
        "color",
        "disableShrink",
        "size",
        "style",
        "thickness",
        "value",
        "variant"
      ];
      let b,
        y,
        v,
        S,
        P = (e) => e;
      const T = 44,
        x = (0, u.F4)(
          b ||
            (b = P`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)
        ),
        O = (0, u.F4)(
          y ||
            (y = P`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)
        ),
        k = (0, d.ZP)("span", {
          name: "MuiCircularProgress",
          slot: "Root",
          overridesResolver: (e, t) => {
            const { ownerState: r } = e;
            return [t.root, t[r.variant], t[`color${(0, c.Z)(r.color)}`]];
          }
        })(
          ({ ownerState: e, theme: t }) =>
            (0, o.Z)(
              { display: "inline-block" },
              "determinate" === e.variant && {
                transition: t.transitions.create("transform")
              },
              "inherit" !== e.color && {
                color: (t.vars || t).palette[e.color].main
              }
            ),
          ({ ownerState: e }) =>
            "indeterminate" === e.variant &&
            (0, u.iv)(
              v ||
                (v = P`
      animation: ${0} 1.4s linear infinite;
    `),
              x
            )
        ),
        _ = (0, d.ZP)("svg", {
          name: "MuiCircularProgress",
          slot: "Svg",
          overridesResolver: (e, t) => t.svg
        })({ display: "block" }),
        C = (0, d.ZP)("circle", {
          name: "MuiCircularProgress",
          slot: "Circle",
          overridesResolver: (e, t) => {
            const { ownerState: r } = e;
            return [
              t.circle,
              t[`circle${(0, c.Z)(r.variant)}`],
              r.disableShrink && t.circleDisableShrink
            ];
          }
        })(
          ({ ownerState: e, theme: t }) =>
            (0, o.Z)(
              { stroke: "currentColor" },
              "determinate" === e.variant && {
                transition: t.transitions.create("stroke-dashoffset")
              },
              "indeterminate" === e.variant && {
                strokeDasharray: "80px, 200px",
                strokeDashoffset: 0
              }
            ),
          ({ ownerState: e }) =>
            "indeterminate" === e.variant &&
            !e.disableShrink &&
            (0, u.iv)(
              S ||
                (S = P`
      animation: ${0} 1.4s ease-in-out infinite;
    `),
              O
            )
        );
      var w = i.forwardRef(function (e, t) {
        const r = (0, l.Z)({ props: e, name: "MuiCircularProgress" }),
          {
            className: i,
            color: u = "primary",
            disableShrink: d = !1,
            size: m = 40,
            style: h,
            thickness: b = 3.6,
            value: y = 0,
            variant: v = "indeterminate"
          } = r,
          S = (0, n.Z)(r, g),
          P = (0, o.Z)({}, r, {
            color: u,
            disableShrink: d,
            size: m,
            thickness: b,
            value: y,
            variant: v
          }),
          x = ((e) => {
            const { classes: t, variant: r, color: n, disableShrink: o } = e,
              i = {
                root: ["root", r, `color${(0, c.Z)(n)}`],
                svg: ["svg"],
                circle: [
                  "circle",
                  `circle${(0, c.Z)(r)}`,
                  o && "circleDisableShrink"
                ]
              };
            return (0, s.Z)(i, f, t);
          })(P),
          O = {},
          w = {},
          Z = {};
        if ("determinate" === v) {
          const e = 2 * Math.PI * ((T - b) / 2);
          (O.strokeDasharray = e.toFixed(3)),
            (Z["aria-valuenow"] = Math.round(y)),
            (O.strokeDashoffset = `${(((100 - y) / 100) * e).toFixed(3)}px`),
            (w.transform = "rotate(-90deg)");
        }
        return (0,
        p.jsx)(k, (0, o.Z)({ className: (0, a.Z)(x.root, i), style: (0, o.Z)({ width: m, height: m }, w, h), ownerState: P, ref: t, role: "progressbar" }, Z, S, { children: (0, p.jsx)(_, { className: x.svg, ownerState: P, viewBox: "22 22 44 44", children: (0, p.jsx)(C, { className: x.circle, style: O, ownerState: P, cx: T, cy: T, r: (T - b) / 2, fill: "none", strokeWidth: b }) }) }));
      });
    },
    17741: function (e, t, r) {
      var n = r(78095),
        o = r.n(n),
        i = r(74266),
        a = r.n(i),
        s = r(45562),
        u = r(2185),
        c = r(63313),
        l = r(44810),
        d = [
          "loading",
          "flex",
          "full",
          "item",
          "gap",
          "wrap",
          "column",
          "center",
          "shrink",
          "sx"
        ],
        m = (0, c.forwardRef)(function (e, t) {
          var r = e.loading,
            n = e.flex,
            i = e.full,
            m = e.item,
            h = e.gap,
            f = e.wrap,
            p = e.column,
            g = e.center,
            b = e.shrink,
            y = e.sx,
            v = a()(e, d),
            S = (0, c.useMemo)(
              function () {
                var e = {};
                return (
                  n && (e.display = "flex"),
                  i && (m && (e.flex = 1), (e.height = "100%")),
                  h && (e.gap = h),
                  p && (e.flexDirection = "column"),
                  f && (e.flexWrap = "wrap"),
                  (b || 0 === b) && (e.flexShrink = b),
                  !0 === g
                    ? ((e.justifyContent = "center"), (e.alignItems = "center"))
                    : "x" === g
                    ? (e.justifyContent = "center")
                    : "y" === g && (e.alignItems = "center"),
                  e
                );
              },
              [n, i, h, p, g, m, b, f]
            );
          return (0,
          l.jsxs)(s.Z, o()(o()({ ref: t, sx: [y, S] }, v), {}, { children: [r && (0, l.jsx)(s.Z, { sx: { width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }, children: (0, l.jsx)(u.Z, { style: { fontSize: "38px" } }) }), !r && v.children] }));
        });
      t.Z = m;
    },
    75555: function (e, t, r) {
      r.d(t, {
        GE: function () {
          return n.G;
        },
        LF: function () {
          return n.L;
        },
        ab: function () {
          return u;
        }
      });
      var n = r(44406),
        o = r(78095),
        i = r.n(o),
        a = r(63313);
      r(48079);
      var s = function () {
        return {
          reportMessage: (0, a.useCallback)(function (e, t) {
            window.collectEvent && e && window.collectEvent(e, i()({}, t));
          }, [])
        };
      };
      var u = function (e, t, r) {
        var n = (0, a.useRef)(!0),
          o = s().reportMessage;
        (0, a.useEffect)(
          function () {
            (n.current && ((n.current = !1), !e)) ||
              (t &&
                o(
                  e ? "msh_show_modal_box" : "msh_close_modal_box",
                  i()(
                    {
                      msh_page_name: window.location.pathname,
                      msh_element_id: t
                    },
                    r
                  )
                ));
          },
          [e]
        );
      };
    },
    93663: function (e, t, r) {
      r.r(t),
        r.d(t, {
          default: function () {
            return Y;
          }
        });
      var n = r(41987),
        o = r(63313);
      const i = (0, o.createContext)(null),
        a = { didCatch: !1, error: null };
      class s extends o.Component {
        constructor(e) {
          super(e),
            (this.resetErrorBoundary = this.resetErrorBoundary.bind(this)),
            (this.state = a);
        }
        static getDerivedStateFromError(e) {
          return { didCatch: !0, error: e };
        }
        resetErrorBoundary() {
          const { error: e } = this.state;
          if (null !== e) {
            for (
              var t, r, n = arguments.length, o = new Array(n), i = 0;
              i < n;
              i++
            )
              o[i] = arguments[i];
            null === (t = (r = this.props).onReset) ||
              void 0 === t ||
              t.call(r, { args: o, reason: "imperative-api" }),
              this.setState(a);
          }
        }
        componentDidCatch(e, t) {
          var r, n;
          null === (r = (n = this.props).onError) ||
            void 0 === r ||
            r.call(n, e, t);
        }
        componentDidUpdate(e, t) {
          const { didCatch: r } = this.state,
            { resetKeys: n } = this.props;
          var o, i;
          r &&
            null !== t.error &&
            (function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : [];
              return (
                e.length !== t.length || e.some((e, r) => !Object.is(e, t[r]))
              );
            })(e.resetKeys, n) &&
            (null === (o = (i = this.props).onReset) ||
              void 0 === o ||
              o.call(i, { next: n, prev: e.resetKeys, reason: "keys" }),
            this.setState(a));
        }
        render() {
          const {
              children: e,
              fallbackRender: t,
              FallbackComponent: r,
              fallback: n
            } = this.props,
            { didCatch: a, error: s } = this.state;
          let u = e;
          if (a) {
            const e = { error: s, resetErrorBoundary: this.resetErrorBoundary };
            if ("function" == typeof t) u = t(e);
            else if (r) u = (0, o.createElement)(r, e);
            else {
              if (null !== n && !(0, o.isValidElement)(n)) throw s;
              u = n;
            }
          }
          return (0, o.createElement)(
            i.Provider,
            {
              value: {
                didCatch: a,
                error: s,
                resetErrorBoundary: this.resetErrorBoundary
              }
            },
            u
          );
        }
      }
      var u = r(59515),
        c = r(75074),
        l = r(92082),
        d = r(95060),
        m = r(77593),
        h = r(44810),
        f = function (e) {
          var t = (0, n.useLocation)(),
            r = u.Z.auth.escape_auth(t.pathname),
            i = (0, m.E1)(function (e) {
              return e.user;
            }),
            a = (0, m.E1)(function (e) {
              return e.token;
            });
          return (
            (0, o.useEffect)(
              function () {
                a && !i && (d.I.getUser(), d.I.get1MStatus());
              },
              [a, i]
            ),
            r || a || "/" === t.pathname
              ? (0, h.jsx)(n.Outlet, {})
              : (0, h.jsx)(n.Navigate, { to: "/", replace: !0 })
          );
        },
        p = r(78095),
        g = r.n(p),
        b = r(53939),
        y = r.n(b),
        v = r(83134),
        S = r.n(v);
      function P(e) {
        var t = e.url,
          r = e.params,
          n = e.query;
        return (
          r &&
            Object.keys(r).forEach(function (e) {
              var n = null == r ? void 0 : r[e];
              n && (t = t.replace(":".concat(e), n));
            }),
          n && (t += "?" + new URLSearchParams(n).toString()),
          t
        );
      }
      function T(e, t) {
        return x.apply(this, arguments);
      }
      function x() {
        return (x = S()(
          y()().mark(function e(t, r) {
            var n, o, i, a, s, u, c, l, d;
            return y()().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (i =
                        null !==
                          (n =
                            null == r ||
                            null === (o = r.onBefore) ||
                            void 0 === o
                              ? void 0
                              : o.call(r, t)) && void 0 !== n
                          ? n
                          : t),
                      (a = P(i)),
                      (s = g()(
                        { "Content-Type": "application/json" },
                        i.headers
                      )),
                      (e.next = 5),
                      console.log(JSON.stringify(i.body)),
                      fetch(
                        a,
                        g()(
                          g()({}, i),
                          {},
                          { headers: s, body: JSON.stringify(i.body) }
                        )
                      )
                    );
                  case 5:
                    if (
                      ((u = e.sent),
                      null == (c = u.headers.get("Content-Type")) ||
                        !c.includes("json"))
                    ) {
                      e.next = 13;
                      break;
                    }
                    return (e.next = 10), u.json();
                  case 10:
                    (e.t0 = e.sent), (e.next = 14);
                    break;
                  case 13:
                    e.t0 = null;
                  case 14:
                    if (((l = e.t0), u.ok)) {
                      e.next = 29;
                      break;
                    }
                    if (401 !== u.status || null == r || !r.onRefreshToken) {
                      e.next = 20;
                      break;
                    }
                    return (e.next = 19), r.onRefreshToken();
                  case 19:
                    return e.abrupt(
                      "return",
                      T(t, g()(g()({}, r), {}, { onRefreshToken: void 0 }))
                    );
                  case 20:
                    if (
                      !(d = {
                        401: function () {
                          var e;
                          return null == r ||
                            null === (e = r.onUnauthorized) ||
                            void 0 === e
                            ? void 0
                            : e.call(r);
                        },
                        403: function () {
                          return null == r ? void 0 : r.onForbidden;
                        }
                      }[u.status])
                    ) {
                      e.next = 26;
                      break;
                    }
                    d(), (e.next = 28);
                    break;
                  case 26:
                    if (400 !== u.status) {
                      e.next = 28;
                      break;
                    }
                    return e.abrupt("return", Promise.reject(l));
                  case 28:
                    return e.abrupt("return", Promise.reject(u));
                  case 29:
                    return e.abrupt("return", null != l ? l : u);
                  case 30:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function O(e) {
        return {
          getUploadConfig: function (t) {
            return e({ url: "/pre-sign-url", method: "POST", body: t });
          },
          getConfig: function () {
            return e({
              url: "/config",
              method: "POST",
              body: { keys: ["busy_banner"] }
            });
          }
        };
      }
      function k(e) {
        return {
          sendPhoneVerifyCode: function (t, r, n) {
            return e({
              url: "/user/sms/verify-code",
              method: "POST",
              body: { action: t, phone: r, source: n }
            });
          },
          sendEmailVerifyCode: function (t, r) {
            return e({
              url: "/user/email/verify-code",
              method: "POST",
              body: { action: t, email: r }
            });
          },
          register: function (t) {
            return e({ url: "/user/register/trial", method: "POST", body: t });
          },
          login: function (t, r) {
            return e({
              url: {
                phone: "/auth/login/sms",
                account: "/auth/login",
                wechat: "x"
              }[t],
              method: "POST",
              body: r
            });
          },
          wxLogin: function (t, r) {
            return e({ url: "/auth/login/wechat", method: "POST", body: r });
          },
          registerLogin: function (t, r) {
            return e({ url: "/user/register/trial", method: "POST", body: r });
          },
          getUser: function () {
            return e({ url: "/user", keepalive: !0 });
          },
          updateUser: function (t) {
            return e({ url: "/user", method: "PUT", body: t });
          },
          resetPassword: function (t, r) {
            return e({
              url: {
                phone: "/user/sms/reset-password",
                email: "/user/email/reset-password"
              }[t],
              method: "POST",
              body: r
            });
          },
          bindEmail: function (t, r) {
            return e({
              url: "/user/email/bind",
              method: "POST",
              body: { email: t, verify_code: r }
            });
          },
          unbindEmail: function () {
            return e({ url: "/user/email/unbind", method: "POST" });
          },
          application: function (t) {
            return e({
              url: "/user/send_application",
              method: "POST",
              body: t
            });
          },
          get1MStatus: function () {
            return e({ url: "/chat_1m/user/status", method: "GET" });
          },
          apply1M: function () {
            return e({ url: "/chat_1m/apply", method: "POST", body: {} });
          }
        };
      }
      function _(e) {
        return {
          getCase: function (t, r) {
            return e({
              url: "/show_case/content",
              method: "POST",
              body: { id: t, index: r }
            });
          },
          createChat: function (t, r) {
            return e({
              url: "/chat/create-chat-by-case",
              method: "POST",
              body: { case_id: t, content_index: r }
            });
          }
        };
      }
      var C = r(74266),
        w = r.n(C),
        Z = r(5269),
        j = ["sid"];
      function E(e) {
        return {
          getCaseList: function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              r = Z.C.getDebugData(),
              n = r.debugging,
              o = "/show_case/list".concat(n ? "?debug_query=case" : ""),
              i = g()(
                { offset: 0, size: 4, enable_cache: !0, order: "asc" },
                t
              );
            return e({ url: o, method: "POST", body: i });
          },
          listChats: function (t) {
            return e({ url: "/chat/list", method: "POST", body: t });
          },
          getChat: function (t) {
            return e({ url: "/chat/:id", params: { id: t } });
          },
          getDemoPropmts: function () {
            return e({ url: "/chat/demo_prompt_list", method: "POST" });
          },
          createChat: function (t, r, n, o) {
            return e({
              url: "/chat",
              method: "POST",
              body: g()({ name: t, is_example: !!r, born_from: n }, o || {})
            });
          },
          updateChat: function (t, r) {
            return e({
              url: "/chat/:id",
              method: "PUT",
              params: { id: t },
              body: { name: r }
            });
          },
          deleteChat: function (t) {
            return e({ url: "/chat/:id", method: "DELETE", params: { id: t } });
          },
          listChatSegments: function (t) {
            var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return e({
              url: "/chat/:id/segment/scroll",
              method: "POST",
              params: { id: t },
              body: r
            });
          },
          feedback: function (t, r, n) {
            return e({
              url: "/chat/:cid/segment/:id/:action",
              method: "POST",
              params: { cid: t, id: r, action: n }
            });
          },
          deleteChatSegments: function (t, r) {
            return e({
              url: "/chat/:id/segment/delete",
              method: "POST",
              params: { id: t },
              body: { segment_ids: r }
            });
          },
          sendMessage: function (t, r, n) {
            return e({
              url: "/chat/:id/completion/stream",
              method: "POST",
              params: { id: t },
              body: r,
              signal: n
            });
          },
          getContinueMessage: function (t, r, n) {
            var o = r,
              i = o.sid,
              a = w()(o, j);
            return e({
              url: "/chat/:id/completion/stream-continue",
              method: "POST",
              params: { id: t },
              body: g()({ segment_id: i }, a),
              signal: n
            });
          },
          checkToken: function (t, r) {
            return e({
              url: "/chat/:id/token_size",
              method: "POST",
              params: { id: t || "0" },
              body: r
            });
          },
          getChatPrompt: function (t) {
            return e({ url: "/chat/find-chat/:id", params: { id: t } });
          },
          getFilterLst: function (t) {
            var r = t.offset,
              n = t.size;
            return e({
              url: "/admin/chat/filter/list",
              method: "POST",
              body: { offset: null != r ? r : 0, size: null != n ? n : 1e3 }
            });
          },
          saveLog: function (t, r, n) {
            return e({
              url: "/user/action/log",
              method: "POST",
              body: g()({ action: t, category: r }, n)
            });
          },
          stop: function (t, r, n) {
            return e({
              url: "/chat/:id/cancel",
              method: "POST",
              params: { id: t },
              body: g()({ segment_id: r }, n)
            });
          },
          getShareDetail: function (t) {
            return e({ url: "/chat/share/:id", params: { id: t } });
          },
          createShareId: function (t) {
            return e({
              url: "/chat/share/create",
              method: "POST",
              body: g()({}, t)
            });
          },
          shareScreenShot: function (t, r, n) {
            return e({
              url: "/chat/share/screenshot",
              method: "POST",
              body: { id: t, device: "web", theme: r, url: n }
            });
          },
          contentApproval: function (t) {
            return e({
              url: "/v1/moderation",
              method: "POST",
              body: { text_list: t }
            });
          },
          getQrcode: function (t, r) {
            return e({
              url: "/tools/qrcode",
              method: "POST",
              body: { content: t, logo: r }
            });
          },
          getWechatSign: function (t) {
            return e({
              url: "/wechat/jssdk",
              method: "POST",
              body: { url: t }
            });
          },
          getQrcodeWithColor: function (t, r) {
            return e({
              url: "/tools/qrcode_with_color",
              method: "POST",
              body: { content: t, color: r }
            });
          },
          getChatIdFromShare: function (t, r) {
            return e({
              url: "/chat/create-chat-by-share",
              method: "POST",
              body: { share_id: t, options: r }
            });
          },
          recordPrefill: function (t) {
            return e({ url: "/chat/record/prefill", method: "POST", body: t });
          },
          generatePromptStream: function (t, r) {
            return e({
              url: "/chat/recommend-prompt",
              method: "POST",
              body: { chat_id: t, group_id: r }
            });
          },
          getPromptList: function (t, r) {
            return e({
              url: "/chat/get-recommend-prompt",
              method: "POST",
              body: { chat_id: t, group_id: r }
            });
          },
          sendPrompt: function (t) {
            return e({
              url: "/chat/use-recommend-prompt",
              method: "POST",
              body: t
            });
          },
          getRagDetail: function (t) {
            return e({
              url: "/chat/segment/rag-refs",
              method: "POST",
              body: t
            });
          }
        };
      }
      function M(e) {
        return {
          create1MChat: function () {
            return e({ url: "/chat_1m", method: "POST", body: {} });
          },
          getChat: function (t) {
            return e({ url: "/chat/:id", params: { id: t } });
          },
          getChatStatus: function (t) {
            return e({ url: "/chat_1m/:id/task/status", params: { id: t } });
          },
          clearHistory: function (t, r) {
            return e({
              url: "chat_1m/:id/clear",
              method: "POST",
              params: { id: t },
              body: { segment_id: r }
            });
          },
          sendMessage: function (t, r, n) {
            return e({
              url: "/chat_1m/:id/completion",
              method: "POST",
              params: { id: t },
              body: r,
              signal: n
            });
          }
        };
      }
      function D(e) {
        return {
          getDirTree: function () {
            return e({ url: "/file/tree" });
          },
          getDirPath: function (t) {
            return e({ url: "/file/:id/path", params: { id: t } });
          },
          listFiles: function (t) {
            return e({ url: "/file/search", method: "POST", body: t });
          },
          getFile: function (t) {
            return e({ url: "/file/:id", params: { id: t } });
          },
          createFile: function (t) {
            return e({ url: "/file", method: "POST", body: t });
          },
          updateFile: function (t, r) {
            return e({
              url: "/file/:id",
              method: "PUT",
              params: { id: t },
              body: { name: r }
            });
          },
          moveFile: function (t, r) {
            return e({
              url: "/file/batch/update",
              method: "POST",
              body: { ids: t, parent_id: r }
            });
          },
          deleteFile: function (t) {
            return e({
              url: "/file/batch/delete",
              method: "POST",
              body: { ids: t }
            });
          },
          parseFile: function (t) {
            return e({ url: "/file/parse", method: "POST", body: { ids: t } });
          },
          parseFileProcess: function (t) {
            return e({
              url: "/file/parse_process",
              method: "POST",
              body: { ids: t }
            });
          },
          getFilesByChatId: function (t) {
            return e({
              url: "/chat/:id/segment/files",
              method: "POST",
              params: { id: t }
            });
          },
          getFilesByCaseId: function (t) {
            return e({ url: "/show_case/:id/files", params: { id: t } });
          }
        };
      }
      function F(e) {
        return {
          listPromptTemplates: function (t) {
            return e({
              url: "/prompt-template/search",
              method: "POST",
              body: t
            });
          },
          createPromptTemplate: function (t) {
            return e({ url: "/prompt-template", method: "POST", body: t });
          },
          updatePromptTemplate: function (t, r) {
            return e({
              url: "/prompt-template/:id",
              params: { id: t },
              method: "PUT",
              body: r
            });
          },
          deletePromptTemplate: function (t) {
            return e({
              url: "/prompt-template/:id",
              method: "DELETE",
              params: { id: t }
            });
          }
        };
      }
      function L(e) {
        return {
          listModels: function () {
            return e({ url: "/space/models" });
          }
        };
      }
      function U(e) {
        return {
          sendUserFeedback: function (t) {
            return e({ url: "/user/feedback", method: "POST", body: t });
          }
        };
      }
      function R(e) {
        return {
          listModels: function () {
            return e({ url: "/admin/llm/models" });
          }
        };
      }
      function I(e) {
        return {
          listSpaces: function (t) {
            return e({ url: "/admin/space/search", method: "POST", body: t });
          },
          getSpace: function (t) {
            return e({ url: "/admin/space/:id", params: { id: t } });
          },
          listModels: function (t) {
            return e({ url: "/admin/space/:id/llm", params: { id: t } });
          },
          bindModel: function (t, r) {
            return e({
              url: "/admin/space-llm/bind",
              method: "POST",
              body: { space_id: t, llm_id: r }
            });
          },
          unbindModel: function (t, r) {
            return e({
              url: "/admin/space-llm/unbind",
              method: "DELETE",
              body: { space_id: t, llm_id: r }
            });
          }
        };
      }
      function B(e) {
        return {
          listUsers: function (t) {
            return e({ url: "/admin/user/search", method: "POST", body: t });
          },
          createUser: function (t) {
            return e({ url: "/admin/user", method: "POST", body: t });
          },
          updateUser: function (t, r) {
            return e({
              url: "/admin/user/:id",
              method: "PUT",
              params: { id: t },
              body: r
            });
          },
          updateUserStatus: function (t, r) {
            return e({
              url: "/admin/user/status/:action",
              method: "PUT",
              params: { action: r },
              body: { user_ids: t }
            });
          },
          deleteUser: function (t) {
            return e({
              url: "/admin/user/:id",
              method: "DELETE",
              params: { id: t }
            });
          }
        };
      }
      function N(e) {
        return {
          createPrompt: function (t, r) {
            return e({
              url: "/prompt-snippet/add",
              method: "POST",
              body: { content: t, name: r || "" }
            });
          },
          getPromptsList: function (t) {
            return e({
              url: "/prompt-snippet/list",
              method: "POST",
              body: g()({}, t)
            });
          },
          searchPromptsList: function (t) {
            return e({
              url: "/prompt-snippet/instance",
              method: "POST",
              body: g()({}, t)
            });
          },
          getPromptDetail: function (t) {
            return e({ url: "/prompt-snippet/:id", params: { id: t } });
          },
          deletePrompt: function (t) {
            return e({
              url: "/prompt-snippet/:id",
              method: "DELETE",
              params: { id: t }
            });
          },
          updatePrompt: function (t) {
            var r = t.id,
              n = t.name,
              o = t.content;
            return e({
              url: "/prompt-snippet/:id",
              method: "PUT",
              params: { id: r },
              body: { name: n, content: o }
            });
          },
          getDonePromptSnippet: function (t) {
            return e({
              url: "/prompt-snippet/get-done-prompt-snippets",
              method: "POST",
              body: { ids: t }
            });
          },
          countPrompt: function (t) {
            return e({
              url: "/prompt-snippet/use-prompt-snippet/:id",
              method: "POST",
              params: { id: t }
            });
          }
        };
      }
      var z = r(90097);
      function q() {
        var e = (0, m.m1)().token,
          t =
            (Object.fromEntries(new URLSearchParams(window.location.search)),
            {});
        return (
          e && (t.Authorization = "Bearer ".concat(e)),
          Object.assign(
            t,
            (function () {
              var e = {},
                t = Z.C.getDebugData().debugging;
              t &&
                ((e["MSH-Pangolin"] = "true"),
                (e["X-Msh-Kylin-Debug"] = "true"));
              var r = (0, ((0, c.VY)().route || {}).searchfn)(),
                n = r.ac,
                o = r.rf;
              (e["R-Timezone"] =
                Intl.DateTimeFormat().resolvedOptions().timeZone),
                t && n && (e["x-msh-ac-expire-duration"] = n),
                t && o && (e["x-msh-rf-expire-duration"] = o);
              var i = Object.keys(localStorage).find(function (e) {
                return e.includes("cache_tokens");
              });
              return i && (e["X-Traffic-Id"] = (0, z.Jt)(i).user_unique_id), e;
            })()
          ),
          t
        );
      }
      var $ = r(41776),
        V = r(84007),
        K = r(2017),
        W = r(17741),
        A = r(75555),
        G = function () {
          return (
            (0, o.useEffect)(function () {
              (0,
              A.LF)("msh_client_exception", { msh_exception_type: "page_display_failed", msh_content: "显示错误" });
            }, []),
            (0, h.jsx)(W.Z, {
              full: !0,
              flex: !0,
              center: !0,
              children: (0, h.jsxs)(W.Z, {
                flex: !0,
                column: !0,
                gap: 5,
                children: [
                  (0, h.jsx)(V.Z, {
                    variant: "h5",
                    children:
                      "出错啦~ 请按 Ctrl + F5 或 Command + Shift + R 刷新重试"
                  }),
                  (0, h.jsx)(K.Z, {
                    variant: "outlined",
                    onClick: function () {
                      location.reload(!0);
                    },
                    children: "重试"
                  })
                ]
              })
            })
          );
        },
        H = r(20300),
        J = function () {
          var e = H.V.get("layoutInitComponent");
          return e
            ? (0, h.jsx)(h.Fragment, {
                children: Object.keys(e).map(function (t) {
                  var r = e[t];
                  return (0, h.jsx)(o.Fragment, { children: r }, t);
                })
              })
            : (0, h.jsx)(h.Fragment, {});
        },
        Q = function (e) {
          var t = H.V.get("layoutInjection"),
            r = e.children;
          if (null == t || !t.length) return r;
          for (var n = t.length - 1; n >= 0; n -= 1) {
            var o = t[n];
            o && (r = (0, h.jsx)(o, { children: r }));
          }
          return r;
        },
        X = function () {
          var e,
            t = (0, n.useLocation)(),
            r = {
              app: O(
                (e = (0, o.useCallback)(function (e) {
                  return T(e, {
                    onBefore: function (e) {
                      return g()(
                        g()({}, e),
                        {},
                        { url: "/api" + e.url, headers: q() }
                      );
                    },
                    onUnauthorized: d.I.logout,
                    onRefreshToken: d.I.refreshToken
                  });
                }, []))
              ),
              auth: k(e),
              user: U(e),
              chat: E(e),
              chat1m: M(e),
              case: _(e),
              file: D(e),
              space: L(e),
              promptSnippet: N(e),
              promptTemplate: F(e),
              adminLLM: R(e),
              adminSpace: I(e),
              adminUser: B(e)
            },
            i = (0, $.qr)(function (e) {
              return e.api;
            }),
            a = (0, l.M)("query", (0, l.R)("location", "setLocation")),
            m = (a.location, a.setLocation);
          return (
            (0, o.useEffect)(
              function () {
                m(t);
              },
              [t, m]
            ),
            Object.keys(i).length || $.qr.setState({ api: r }),
            "platform" ===
            (null === u.Z || void 0 === u.Z ? void 0 : u.Z.System)
              ? (0, h.jsx)(s, {
                  fallback: (0, h.jsx)(G, {}),
                  children: (0, h.jsxs)(c.MB, {
                    children: [J(), (0, h.jsx)(n.Outlet, {})]
                  })
                })
              : (0, h.jsx)(s, {
                  fallback: (0, h.jsx)(G, {}),
                  children: (0, h.jsxs)(c.MB, {
                    children: [
                      J(),
                      (0, h.jsx)(f, { children: (0, h.jsx)(n.Outlet, {}) })
                    ]
                  })
                })
          );
        };
      function Y() {
        return "homelite" ===
          (null === u.Z || void 0 === u.Z ? void 0 : u.Z.System)
          ? (0, h.jsx)(n.Outlet, {})
          : (0, h.jsx)(Q, { children: (0, h.jsx)(X, {}) });
      }
    }
  }
]);
