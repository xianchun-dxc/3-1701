"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
  [274],
  {
    75360: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return go;
          }
        });
      var a = n(63313),
        r = n.n(a),
        i = n(17741),
        o = n(75555),
        s = n(75074),
        c = n(77593),
        l = n(73719),
        u = n(85015),
        d = n(48079),
        m = n(45930),
        p = n(77811),
        f = n(80660),
        h = n(88284),
        g = n.n(h),
        v = n(53939),
        x = n.n(v),
        A = n(83134),
        b = n.n(A),
        j = n(34827),
        _ = n.n(j),
        C = n(66024),
        w = n(91150),
        y = n.n(w),
        k = n(67783),
        E = n(5269),
        N = n(46384),
        Z = n(24561),
        P = n(80455),
        S = n(62066),
        I = n.n(S),
        M = n(32163),
        L = n(90097),
        R = n(41776),
        B = (0, M.Q_)(function (e, t) {
          return {
            busy_banner: 0,
            getConfig: function () {
              return b()(
                x()().mark(function t() {
                  var n, a, r, i, o;
                  return x()().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (n = R.qr.getState()),
                              (a = n.api),
                              (t.prev = 1),
                              (t.next = 4),
                              a.app.getConfig()
                            );
                          case 4:
                            if (
                              ((r = t.sent),
                              (i = (0, L.Jt)("MSH_BUSY_CLOSE_DATE")),
                              (o = I()().format("YYYY-MM-DD")),
                              i !== o)
                            ) {
                              t.next = 9;
                              break;
                            }
                            return t.abrupt("return");
                          case 9:
                            e(function (e) {
                              e.busy_banner =
                                null == r ? void 0 : r.busy_banner;
                            }),
                              (t.next = 15);
                            break;
                          case 12:
                            (t.prev = 12), (t.t0 = t.catch(1));
                          case 15:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[1, 12]]
                  );
                })
              )();
            },
            closeBusyBanner: function () {
              e(function (e) {
                e.busy_banner = 0;
              });
            }
          };
        }),
        T = n(84152),
        Q = function () {
          var e = B.getState();
          return {
            start: function () {
              e.getConfig();
            },
            stop: function () {}
          };
        },
        D = "concurrentTip___iYCur",
        K = "placehokder___q7h4K",
        G = "icon___EGKCi",
        W = n(44810),
        F = function (e) {
          var t = e.busy_banner,
            n = Q(),
            r = n.start,
            i = n.stop;
          (0, a.useEffect)(function () {
            return (
              r(),
              function () {
                i();
              }
            );
          }, []);
          return 0 === t
            ? null
            : (0, W.jsxs)("div", {
                className: D,
                children: [
                  (0, W.jsx)("div", { className: K }),
                  (0, W.jsx)("div", {
                    children:
                      "🚀 当前处于高峰时段，Kimi 发奋努力中，可能稍感疲惫。感谢你的理解和耐心等待！"
                  }),
                  (0, W.jsx)(T.Kr1, {
                    className: G,
                    type: "close",
                    onClick: function () {
                      var e,
                        t = I()().format("YYYY-MM-DD");
                      (0, L.mM)("MSH_BUSY_CLOSE_DATE", t),
                        null === (e = B.getState()) ||
                          void 0 === e ||
                          e.closeBusyBanner();
                    }
                  })
                ]
              });
        },
        z = n(59515),
        O = n(45562),
        U = n(84007),
        Y = n(5368),
        q = n(10221),
        V = n(2017),
        H = n(92082),
        J = n(61756),
        X = function (e) {
          return {
            position: "fixed",
            zIndex: 50,
            width: "100%",
            top: 0,
            left: 0,
            bgcolor: "background.paper",
            transform: "translateY(-100%)",
            transition: "transform 0.3s ease-in-out",
            boxShadow: e.shadows[14]
          };
        },
        $ = { transform: "translateY(0%)", zIndex: 40 },
        ee = { width: "100%", flex: 1, minWidth: 300 },
        te = { pl: 1, mb: 2, display: "block" },
        ne = function () {
          var e = (0, J.O)(function (e) {
              return "debug_n2s" === e.open;
            }),
            t = (0, J.O)(function (e) {
              return e.prompt_template_n2s;
            }),
            n = (0, J.O)(function (e) {
              return e.prompt_template_fewshot;
            }),
            r = (0, J.O)(function (e) {
              return e.error;
            }),
            o =
              ((0, J.O)(function (e) {
                return e.debug;
              }),
              (0, (0, H.M)("query", (0, H.R)("searchfn")).searchfn)()
                .debug_n2s);
          (0, a.useEffect)(
            function () {
              J.$.setDebugTemplate(o || "" === o);
            },
            [o]
          );
          var s = e ? [X, $] : [X];
          if ((o || "" === o) && "false" !== o)
            return (0, W.jsxs)(O.Z, {
              sx: [].concat(s),
              children: [
                (0, W.jsx)(i.Z, {
                  sx: { p: 4 },
                  children: (0, W.jsxs)(i.Z, {
                    flex: !0,
                    gap: 2,
                    sx: { width: "100%", height: "100%", flexWrap: "wrap" },
                    children: [
                      (0, W.jsxs)(O.Z, {
                        sx: ee,
                        children: [
                          (0, W.jsx)(U.Z, {
                            sx: te,
                            variant: "h3",
                            children: "N2S Template"
                          }),
                          (0, W.jsx)(Y.Z, {
                            fullWidth: !0,
                            placeholder: "prompt_template_n2s",
                            multiline: !0,
                            rows: 16,
                            value: t,
                            onChange: function (e) {
                              var t = e.target.value;
                              J.$.setPromptTemplateN2S(t);
                            }
                          }),
                          (0, W.jsx)(O.Z, {
                            sx: { height: 24, mt: 1 },
                            children:
                              !!r.prompt_template_n2s &&
                              (0, W.jsx)(q.Z, {
                                error: !!r.prompt_template_n2s,
                                sx: { mt: 0 },
                                children: r.prompt_template_n2s
                              })
                          })
                        ]
                      }),
                      (0, W.jsxs)(O.Z, {
                        sx: ee,
                        children: [
                          (0, W.jsx)(U.Z, {
                            sx: te,
                            variant: "h3",
                            children: "Fewshot Prompt"
                          }),
                          (0, W.jsx)(Y.Z, {
                            fullWidth: !0,
                            placeholder: "prompt_template_fewshot",
                            multiline: !0,
                            rows: 16,
                            value: n,
                            onChange: function (e) {
                              var t = e.target.value;
                              J.$.setPromptTemplateFewshot(t);
                            }
                          }),
                          !!r.prompt_template_fewshot &&
                            (0, W.jsx)(q.Z, {
                              error: !!r.prompt_template_fewshot,
                              sx: { mt: 0 },
                              children: r.prompt_template_fewshot
                            })
                        ]
                      })
                    ]
                  })
                }),
                (0, W.jsx)(O.Z, {
                  sx: ae,
                  onClick: function () {
                    J.$.open("debug_n2s");
                  }
                }),
                (0, W.jsx)(V.Z, {
                  disableRipple: !0,
                  variant: "text",
                  sx: { position: "absolute", bottom: 4, right: 0, m: 0 },
                  onClick: function () {
                    J.$.resetTemplate();
                  },
                  children: "重置"
                })
              ]
            });
        },
        ae = {
          width: 20,
          height: 40,
          position: "absolute",
          bottom: -30,
          right: 98,
          cursor: "pointer",
          bgcolor: "blue",
          "::before": {
            display: "block",
            content: '""',
            width: 0,
            height: 0,
            border: "10px solid transparent",
            borderTopColor: "blue",
            position: "absolute",
            bottom: -11,
            right: 0,
            transform: "rotateZ(90deg)"
          },
          "::after": {
            display: "block",
            content: '""',
            width: 0,
            height: 0,
            border: "10px solid transparent",
            borderTopColor: "blue",
            position: "absolute",
            bottom: -7,
            left: -10,
            transform: "rotateZ(135deg)"
          }
        },
        re = function (e) {
          return {
            position: "fixed",
            zIndex: 50,
            width: "100%",
            top: 0,
            left: 0,
            bgcolor: "background.paper",
            transform: "translateY(-100%)",
            transition: "transform 0.3s ease-in-out",
            boxShadow: e.shadows[14]
          };
        },
        ie = { transform: "translateY(0%)", zIndex: 40 },
        oe = { width: "100%", flex: 1, minWidth: 300 },
        se = { pl: 1, mb: 2, display: "block" },
        ce = function () {
          var e = (0, J.O)(function (e) {
              return "debug" === e.open;
            }),
            t = (0, J.O)(function (e) {
              return e.user_prompt_template;
            }),
            n = (0, J.O)(function (e) {
              return e.res_sub_prompt_template;
            }),
            r = (0, J.O)(function (e) {
              return e.error;
            }),
            o =
              ((0, J.O)(function (e) {
                return e.debug;
              }),
              (0, (0, H.M)("query", (0, H.R)("searchfn")).searchfn)().debug);
          (0, a.useEffect)(
            function () {
              J.$.setDebug(o || "" === o);
            },
            [o]
          );
          var s = (o || "" === o) && "false" !== o,
            c = e ? [re, ie] : [re];
          if (
            ((0, a.useEffect)(
              function () {
                if (t)
                  try {
                    JSON.parse(t.replace("\n", "")),
                      J.$.setError("user_prompt_template", "");
                  } catch (e) {
                    J.$.setError("user_prompt_template", "JSON 格式错误");
                  }
                else
                  J.$.setError(
                    "user_prompt_template",
                    "请填写 User Prompt Template"
                  );
              },
              [t]
            ),
            (0, a.useEffect)(
              function () {
                n
                  ? J.$.setError("res_sub_prompt_template", "")
                  : J.$.setError(
                      "res_sub_prompt_template",
                      "请填写 Res Sub Prompt Template"
                    );
              },
              [n]
            ),
            s)
          )
            return (0, W.jsxs)(O.Z, {
              sx: [].concat(c),
              children: [
                (0, W.jsx)(i.Z, {
                  sx: { p: 4 },
                  children: (0, W.jsxs)(i.Z, {
                    flex: !0,
                    gap: 2,
                    sx: { width: "100%", height: "100%", flexWrap: "wrap" },
                    children: [
                      (0, W.jsxs)(O.Z, {
                        sx: oe,
                        children: [
                          (0, W.jsx)(U.Z, {
                            sx: se,
                            variant: "h3",
                            children: "User Prompt Template"
                          }),
                          (0, W.jsx)(Y.Z, {
                            fullWidth: !0,
                            placeholder: "user_prompt_template",
                            multiline: !0,
                            rows: 8,
                            value: t,
                            onChange: function (e) {
                              var t = e.target.value;
                              J.$.setUserPromptTemplate(t);
                            }
                          }),
                          (0, W.jsx)(O.Z, {
                            sx: { height: 24, mt: 1 },
                            children:
                              !!r.user_prompt_template &&
                              (0, W.jsx)(q.Z, {
                                error: !!r.user_prompt_template,
                                sx: { mt: 0 },
                                children: r.user_prompt_template
                              })
                          })
                        ]
                      }),
                      (0, W.jsxs)(O.Z, {
                        sx: oe,
                        children: [
                          (0, W.jsx)(U.Z, {
                            sx: se,
                            variant: "h3",
                            children: "Res Sub Prompt Template"
                          }),
                          (0, W.jsx)(Y.Z, {
                            fullWidth: !0,
                            placeholder: "res_sub_prompt_template",
                            multiline: !0,
                            rows: 8,
                            value: n,
                            onChange: function (e) {
                              var t = e.target.value;
                              J.$.setResSubPromptTemplate(t);
                            }
                          }),
                          !!r.res_sub_prompt_template &&
                            (0, W.jsx)(q.Z, {
                              error: !!r.res_sub_prompt_template,
                              sx: { mt: 0 },
                              children: r.res_sub_prompt_template
                            })
                        ]
                      })
                    ]
                  })
                }),
                (0, W.jsx)(O.Z, {
                  sx: le,
                  onClick: function () {
                    J.$.open("debug");
                  }
                }),
                (0, W.jsx)(V.Z, {
                  disableRipple: !0,
                  variant: "text",
                  sx: { position: "absolute", bottom: 4, right: 0, m: 0 },
                  onClick: function () {
                    J.$.reset();
                  },
                  children: "重置"
                })
              ]
            });
        },
        le = {
          width: 20,
          height: 40,
          position: "absolute",
          bottom: -30,
          right: 68,
          cursor: "pointer",
          bgcolor: "error.main",
          "::before": {
            display: "block",
            content: '""',
            width: 0,
            height: 0,
            border: "10px solid transparent",
            borderTopColor: "error.main",
            position: "absolute",
            bottom: -11,
            right: 0,
            transform: "rotateZ(90deg)"
          },
          "::after": {
            display: "block",
            content: '""',
            width: 0,
            height: 0,
            border: "10px solid transparent",
            borderTopColor: "error.main",
            position: "absolute",
            bottom: -7,
            left: -10,
            transform: "rotateZ(135deg)"
          }
        },
        ue = function () {
          return (0, W.jsx)(W.Fragment, {
            children:
              "kimi" !==
                (null === z.Z || void 0 === z.Z ? void 0 : z.Z.System) &&
              (0, W.jsxs)(W.Fragment, {
                children: [(0, W.jsx)(ce, {}), (0, W.jsx)(ne, {})]
              })
          });
        },
        de = n(72162),
        me = n(78095),
        pe = n.n(me),
        fe = n(60430),
        he = n.n(fe),
        ge = n(5245),
        ve = n(29274),
        xe = n(87524),
        Ae = n(52643),
        be = n(37986),
        je = n(61787),
        _e = n(31693),
        Ce = n(6778),
        we = n(23205),
        ye = [
          "prefixCls",
          "className",
          "style",
          "checked",
          "disabled",
          "defaultChecked",
          "type",
          "title",
          "onChange"
        ],
        ke = (0, a.forwardRef)(function (e, t) {
          var n,
            r = e.prefixCls,
            i = void 0 === r ? "rc-checkbox" : r,
            o = e.className,
            s = e.style,
            c = e.checked,
            l = e.disabled,
            u = e.defaultChecked,
            d = void 0 !== u && u,
            m = e.type,
            p = void 0 === m ? "checkbox" : m,
            f = e.title,
            h = e.onChange,
            g = (0, Ce.Z)(e, ye),
            v = (0, a.useRef)(null),
            x = (0, we.Z)(d, { value: c }),
            A = (0, _e.Z)(x, 2),
            b = A[0],
            j = A[1];
          (0, a.useImperativeHandle)(t, function () {
            return {
              focus: function () {
                var e;
                null === (e = v.current) || void 0 === e || e.focus();
              },
              blur: function () {
                var e;
                null === (e = v.current) || void 0 === e || e.blur();
              },
              input: v.current
            };
          });
          var _ = y()(
            i,
            o,
            ((n = {}),
            (0, je.Z)(n, "".concat(i, "-checked"), b),
            (0, je.Z)(n, "".concat(i, "-disabled"), l),
            n)
          );
          return a.createElement(
            "span",
            { className: _, title: f, style: s },
            a.createElement(
              "input",
              (0, Ae.Z)({}, g, {
                className: "".concat(i, "-input"),
                ref: v,
                onChange: function (t) {
                  l ||
                    ("checked" in e || j(t.target.checked),
                    null == h ||
                      h({
                        target: (0, be.Z)(
                          (0, be.Z)({}, e),
                          {},
                          { type: p, checked: t.target.checked }
                        ),
                        stopPropagation: function () {
                          t.stopPropagation();
                        },
                        preventDefault: function () {
                          t.preventDefault();
                        },
                        nativeEvent: t.nativeEvent
                      }));
                },
                disabled: l,
                checked: !!b,
                type: p
              })
            ),
            a.createElement("span", { className: "".concat(i, "-inner") })
          );
        }),
        Ee = ke,
        Ne = n(33294),
        Ze = n(60082),
        Pe = n(28684),
        Se = n(28027),
        Ie = n(28545),
        Me = n(75297);
      var Le = r().createContext(null),
        Re = n(54794),
        Be = n(70555),
        Te = n(10901),
        Qe = n(96992);
      const De = (e) => {
        const { checkboxCls: t } = e,
          n = `${t}-wrapper`;
        return [
          {
            [`${t}-group`]: Object.assign(Object.assign({}, (0, Be.Wf)(e)), {
              display: "inline-flex",
              flexWrap: "wrap",
              columnGap: e.marginXS,
              [`> ${e.antCls}-row`]: { flex: 1 }
            }),
            [n]: Object.assign(Object.assign({}, (0, Be.Wf)(e)), {
              display: "inline-flex",
              alignItems: "baseline",
              cursor: "pointer",
              "&:after": {
                display: "inline-block",
                width: 0,
                overflow: "hidden",
                content: "'\\a0'"
              },
              [`& + ${n}`]: { marginInlineStart: 0 },
              [`&${n}-in-form-item`]: {
                'input[type="checkbox"]': { width: 14, height: 14 }
              }
            }),
            [t]: Object.assign(Object.assign({}, (0, Be.Wf)(e)), {
              position: "relative",
              whiteSpace: "nowrap",
              lineHeight: 1,
              cursor: "pointer",
              borderRadius: e.borderRadiusSM,
              alignSelf: "center",
              [`${t}-input`]: {
                position: "absolute",
                inset: 0,
                zIndex: 1,
                cursor: "pointer",
                opacity: 0,
                margin: 0,
                [`&:focus-visible + ${t}-inner`]: Object.assign(
                  {},
                  (0, Be.oN)(e)
                )
              },
              [`${t}-inner`]: {
                boxSizing: "border-box",
                display: "block",
                width: e.checkboxSize,
                height: e.checkboxSize,
                direction: "ltr",
                backgroundColor: e.colorBgContainer,
                border: `${(0, Re.bf)(e.lineWidth)} ${e.lineType} ${
                  e.colorBorder
                }`,
                borderRadius: e.borderRadiusSM,
                borderCollapse: "separate",
                transition: `all ${e.motionDurationSlow}`,
                "&:after": {
                  boxSizing: "border-box",
                  position: "absolute",
                  top: "50%",
                  insetInlineStart: "25%",
                  display: "table",
                  width: e.calc(e.checkboxSize).div(14).mul(5).equal(),
                  height: e.calc(e.checkboxSize).div(14).mul(8).equal(),
                  border: `${(0, Re.bf)(e.lineWidthBold)} solid ${
                    e.colorWhite
                  }`,
                  borderTop: 0,
                  borderInlineStart: 0,
                  transform: "rotate(45deg) scale(0) translate(-50%,-50%)",
                  opacity: 0,
                  content: '""',
                  transition: `all ${e.motionDurationFast} ${e.motionEaseInBack}, opacity ${e.motionDurationFast}`
                }
              },
              "& + span": {
                paddingInlineStart: e.paddingXS,
                paddingInlineEnd: e.paddingXS
              }
            })
          },
          {
            [`\n        ${n}:not(${n}-disabled),\n        ${t}:not(${t}-disabled)\n      `]:
              { [`&:hover ${t}-inner`]: { borderColor: e.colorPrimary } },
            [`${n}:not(${n}-disabled)`]: {
              [`&:hover ${t}-checked:not(${t}-disabled) ${t}-inner`]: {
                backgroundColor: e.colorPrimaryHover,
                borderColor: "transparent"
              },
              [`&:hover ${t}-checked:not(${t}-disabled):after`]: {
                borderColor: e.colorPrimaryHover
              }
            }
          },
          {
            [`${t}-checked`]: {
              [`${t}-inner`]: {
                backgroundColor: e.colorPrimary,
                borderColor: e.colorPrimary,
                "&:after": {
                  opacity: 1,
                  transform: "rotate(45deg) scale(1) translate(-50%,-50%)",
                  transition: `all ${e.motionDurationMid} ${e.motionEaseOutBack} ${e.motionDurationFast}`
                }
              }
            },
            [`\n        ${n}-checked:not(${n}-disabled),\n        ${t}-checked:not(${t}-disabled)\n      `]:
              {
                [`&:hover ${t}-inner`]: {
                  backgroundColor: e.colorPrimaryHover,
                  borderColor: "transparent"
                }
              }
          },
          {
            [t]: {
              "&-indeterminate": {
                [`${t}-inner`]: {
                  backgroundColor: e.colorBgContainer,
                  borderColor: e.colorBorder,
                  "&:after": {
                    top: "50%",
                    insetInlineStart: "50%",
                    width: e.calc(e.fontSizeLG).div(2).equal(),
                    height: e.calc(e.fontSizeLG).div(2).equal(),
                    backgroundColor: e.colorPrimary,
                    border: 0,
                    transform: "translate(-50%, -50%) scale(1)",
                    opacity: 1,
                    content: '""'
                  }
                }
              }
            }
          },
          {
            [`${n}-disabled`]: { cursor: "not-allowed" },
            [`${t}-disabled`]: {
              [`&, ${t}-input`]: {
                cursor: "not-allowed",
                pointerEvents: "none"
              },
              [`${t}-inner`]: {
                background: e.colorBgContainerDisabled,
                borderColor: e.colorBorder,
                "&:after": { borderColor: e.colorTextDisabled }
              },
              "&:after": { display: "none" },
              "& + span": { color: e.colorTextDisabled },
              [`&${t}-indeterminate ${t}-inner::after`]: {
                background: e.colorTextDisabled
              }
            }
          }
        ];
      };
      function Ke(e, t) {
        const n = (0, Te.TS)(t, {
          checkboxCls: `.${e}`,
          checkboxSize: t.controlInteractiveSize
        });
        return [De(n)];
      }
      var Ge = (0, Qe.I$)("Checkbox", (e, t) => {
          let { prefixCls: n } = t;
          return [Ke(n, e)];
        }),
        We = function (e, t) {
          var n = {};
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) &&
              t.indexOf(a) < 0 &&
              (n[a] = e[a]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (a = Object.getOwnPropertySymbols(e); r < a.length; r++)
              t.indexOf(a[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, a[r]) &&
                (n[a[r]] = e[a[r]]);
          }
          return n;
        };
      const Fe = (e, t) => {
        var n;
        const {
            prefixCls: r,
            className: i,
            rootClassName: o,
            children: s,
            indeterminate: c = !1,
            style: l,
            onMouseEnter: u,
            onMouseLeave: d,
            skipGroup: m = !1,
            disabled: p
          } = e,
          f = We(e, [
            "prefixCls",
            "className",
            "rootClassName",
            "children",
            "indeterminate",
            "style",
            "onMouseEnter",
            "onMouseLeave",
            "skipGroup",
            "disabled"
          ]),
          { getPrefixCls: h, direction: g, checkbox: v } = a.useContext(Pe.E_),
          x = a.useContext(Le),
          { isFormItemInput: A } = a.useContext(Me.aM),
          b = a.useContext(Se.Z),
          j =
            null !== (n = (null == x ? void 0 : x.disabled) || p) &&
            void 0 !== n
              ? n
              : b,
          _ = a.useRef(f.value);
        a.useEffect(() => {
          null == x || x.registerValue(f.value);
        }, []),
          a.useEffect(() => {
            if (!m)
              return (
                f.value !== _.current &&
                  (null == x || x.cancelValue(_.current),
                  null == x || x.registerValue(f.value),
                  (_.current = f.value)),
                () => (null == x ? void 0 : x.cancelValue(f.value))
              );
          }, [f.value]);
        const C = h("checkbox", r),
          w = (0, Ie.Z)(C),
          [k, E, N] = Ge(C, w),
          Z = Object.assign({}, f);
        x &&
          !m &&
          ((Z.onChange = function () {
            f.onChange && f.onChange.apply(f, arguments),
              x.toggleOption && x.toggleOption({ label: s, value: f.value });
          }),
          (Z.name = x.name),
          (Z.checked = x.value.includes(f.value)));
        const P = y()(
            `${C}-wrapper`,
            {
              [`${C}-rtl`]: "rtl" === g,
              [`${C}-wrapper-checked`]: Z.checked,
              [`${C}-wrapper-disabled`]: j,
              [`${C}-wrapper-in-form-item`]: A
            },
            null == v ? void 0 : v.className,
            i,
            o,
            N,
            w,
            E
          ),
          S = y()({ [`${C}-indeterminate`]: c }, Ze.A, E),
          I = c ? "mixed" : void 0;
        return k(
          a.createElement(
            Ne.Z,
            { component: "Checkbox", disabled: j },
            a.createElement(
              "label",
              {
                className: P,
                style: Object.assign(
                  Object.assign({}, null == v ? void 0 : v.style),
                  l
                ),
                onMouseEnter: u,
                onMouseLeave: d
              },
              a.createElement(
                Ee,
                Object.assign({ "aria-checked": I }, Z, {
                  prefixCls: C,
                  className: S,
                  disabled: j,
                  ref: t
                })
              ),
              void 0 !== s && a.createElement("span", null, s)
            )
          )
        );
      };
      var ze = a.forwardRef(Fe),
        Oe = n(63017),
        Ue = n(99173),
        Ye = function (e, t) {
          var n = {};
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) &&
              t.indexOf(a) < 0 &&
              (n[a] = e[a]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (a = Object.getOwnPropertySymbols(e); r < a.length; r++)
              t.indexOf(a[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, a[r]) &&
                (n[a[r]] = e[a[r]]);
          }
          return n;
        };
      const qe = (e, t) => {
          const {
              defaultValue: n,
              children: r,
              options: i = [],
              prefixCls: o,
              className: s,
              rootClassName: c,
              style: l,
              onChange: u
            } = e,
            d = Ye(e, [
              "defaultValue",
              "children",
              "options",
              "prefixCls",
              "className",
              "rootClassName",
              "style",
              "onChange"
            ]),
            { getPrefixCls: m, direction: p } = a.useContext(Pe.E_),
            [f, h] = a.useState(d.value || n || []),
            [g, v] = a.useState([]);
          a.useEffect(() => {
            "value" in d && h(d.value || []);
          }, [d.value]);
          const x = a.useMemo(
              () =>
                i.map((e) =>
                  "string" == typeof e || "number" == typeof e
                    ? { label: e, value: e }
                    : e
                ),
              [i]
            ),
            A = m("checkbox", o),
            b = `${A}-group`,
            j = (0, Ie.Z)(A),
            [_, C, w] = Ge(A, j),
            k = (0, Ue.Z)(d, ["value", "disabled"]),
            E = i.length
              ? x.map((e) =>
                  a.createElement(
                    ze,
                    {
                      prefixCls: A,
                      key: e.value.toString(),
                      disabled: "disabled" in e ? e.disabled : d.disabled,
                      value: e.value,
                      checked: f.includes(e.value),
                      onChange: e.onChange,
                      className: `${b}-item`,
                      style: e.style,
                      title: e.title,
                      id: e.id,
                      required: e.required
                    },
                    e.label
                  )
                )
              : r,
            N = {
              toggleOption: (e) => {
                const t = f.indexOf(e.value),
                  n = (0, Oe.Z)(f);
                -1 === t ? n.push(e.value) : n.splice(t, 1),
                  "value" in d || h(n),
                  null == u ||
                    u(
                      n
                        .filter((e) => g.includes(e))
                        .sort(
                          (e, t) =>
                            x.findIndex((t) => t.value === e) -
                            x.findIndex((e) => e.value === t)
                        )
                    );
              },
              value: f,
              disabled: d.disabled,
              name: d.name,
              registerValue: (e) => {
                v((t) => [].concat((0, Oe.Z)(t), [e]));
              },
              cancelValue: (e) => {
                v((t) => t.filter((t) => t !== e));
              }
            },
            Z = y()(b, { [`${b}-rtl`]: "rtl" === p }, s, c, w, j, C);
          return _(
            a.createElement(
              "div",
              Object.assign({ className: Z, style: l }, k, { ref: t }),
              a.createElement(Le.Provider, { value: N }, E)
            )
          );
        },
        Ve = a.forwardRef(qe);
      var He = a.memo(Ve);
      const Je = ze;
      (Je.Group = He), (Je.__ANT_CHECKBOX = !0);
      var Xe = Je,
        $e = n(6268),
        et = n(63782),
        tt = {
          to_bottom: "to_bottom___Y3Uwd",
          downBtn: "downBtn___TrEEC",
          btn: "btn___frwKo",
          forbidden_text: "forbidden_text___OOS4_",
          checkBox: "checkBox___qq3xf"
        },
        nt = n(95830),
        at = n(98526),
        rt = n(5246),
        it = n(61664),
        ot = "docList___KO2a4",
        st = "docItem___qKYt4",
        ct = "topImage___zb6nP",
        lt = "content___dF3sH",
        ut = "title___xAxDe",
        dt = "abstract___XTOx7",
        mt = "source___h4LPp",
        pt = "icon___Oj5ah",
        ft = "label___IXphN",
        ht = "index___lJ77f",
        gt = n(11228),
        vt = function (e) {
          var t = e.docs,
            n = (0, a.useMemo)(
              function () {
                if (!t) return [];
                var e = [],
                  n = {};
                return (
                  t.forEach(function (t) {
                    n[t.id] || ((n[t.id] = !0), e.push(t));
                  }),
                  e
                );
              },
              [t]
            );
          return (
            null == n ||
              n.sort(function (e, t) {
                return e.index - t.index;
              }),
            null != n && n.length
              ? (0, W.jsx)("div", {
                  className: ot,
                  children:
                    null == n
                      ? void 0
                      : n.map(function (e) {
                          var t = e.id,
                            n = e.title,
                            a = (e.url, e.cover),
                            r = e.abstract,
                            i = e.source_label,
                            o = e.source_icon,
                            s = e.index;
                          return (0,
                          W.jsxs)("div", { className: st, children: [a && (0, W.jsx)("div", { className: ct, children: (0, W.jsx)("img", { src: a, alt: "" }) }), (0, W.jsxs)("div", { className: lt, children: [(0, W.jsx)("div", { className: ut, children: n }), !a && r && (0, W.jsx)("div", { className: dt, children: r }), (0, W.jsxs)("div", { className: mt, children: [o && (0, W.jsx)("div", { className: pt, children: (0, W.jsx)("img", { src: o, alt: "" }) }), i && (0, W.jsx)(U.Z, { className: ft, noWrap: !0, children: i }), (0, W.jsx)("span", { className: ht, children: (0, W.jsx)(gt.z, { value: s }) })] })] })] }, t);
                        })
                })
              : null
          );
        },
        xt = n(87752),
        At = n(38399),
        bt = n(61888),
        jt = "chatSegmentActions___Len3_",
        _t = "iconButton___3OzVF",
        Ct = "brand___N2o2c",
        wt = "icon___N21Rh",
        yt = "chatSegmentBottomActions___NZ_V8",
        kt = "label___TPWYH",
        Et = "divider___x66FZ",
        Nt = n(90010),
        Zt = n.n(Nt),
        Pt = n(45089),
        St = n(90948),
        It = n(17384),
        Mt = n.n(It),
        Lt = (0, M.Q_)(function (e, t) {
          return {
            showLibraryModal: !1,
            currentQuery: "",
            loading: !1,
            promptsLibraryList: [],
            isEnd: !1,
            getPromptsList: function (n, a) {
              return b()(
                x()().mark(function r() {
                  var i, o, s, c, l, u, d, m, p;
                  return x()().wrap(
                    function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            if (
                              (e(function (e) {
                                e.loading = !0;
                              }),
                              (i = R.qr.getState()),
                              (o = i.api),
                              (s = a.from),
                              (c = a.query),
                              "search" === s &&
                                e(function (e) {
                                  e.currentQuery = c || "";
                                }),
                              (r.prev = 4),
                              "search" === s)
                            ) {
                              r.next = 11;
                              break;
                            }
                            return (
                              (r.next = 8), o.promptSnippet.getPromptsList(n)
                            );
                          case 8:
                            (r.t0 = r.sent), (r.next = 14);
                            break;
                          case 11:
                            return (
                              (r.next = 13),
                              o.promptSnippet.searchPromptsList(
                                pe()(
                                  pe()({}, n),
                                  {},
                                  { size: 10, query: t().currentQuery }
                                )
                              )
                            );
                          case 13:
                            r.t0 = r.sent;
                          case 14:
                            (l = r.t0),
                              (u = l.items),
                              (d = l.is_end),
                              (p = (m = null != u ? u : [])
                                .filter(function (e) {
                                  return !e.name || !e.emoji;
                                })
                                .map(function (e) {
                                  return e.id;
                                })).length > 0 &&
                                Rt.startUpDateTitleInterval(t().updateTitle, p),
                              e(function (e) {
                                e.isEnd = !!d || "search" === s;
                              }),
                              e(
                                "more" === s
                                  ? function (e) {
                                      e.promptsLibraryList = [].concat(
                                        he()(t().promptsLibraryList),
                                        he()(m)
                                      );
                                    }
                                  : function (e) {
                                      e.promptsLibraryList = m;
                                    }
                              ),
                              (r.next = 26);
                            break;
                          case 23:
                            (r.prev = 23), (r.t1 = r.catch(4));
                          case 26:
                            e(function (e) {
                              e.loading = !1;
                            });
                          case 27:
                          case "end":
                            return r.stop();
                        }
                    },
                    r,
                    null,
                    [[4, 23]]
                  );
                })
              )();
            },
            loadMore: function () {
              t().isEnd ||
                t().getPromptsList(
                  { offset: t().promptsLibraryList.length, size: 8 },
                  { from: "more" }
                );
            },
            inputPrompt: function (t) {
              return b()(
                x()().mark(function n() {
                  var a, r, i, o, c, l, u, d, m, p;
                  return x()().wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            if (
                              ((a = t.content),
                              (r = t.id),
                              (i = t.is_full_content),
                              (o = R.qr.getState()),
                              (c = o.api).promptSnippet.countPrompt(r),
                              !i)
                            ) {
                              n.next = 7;
                              break;
                            }
                            return n.abrupt("return", a);
                          case 7:
                            return (
                              (l = (0, s.VY)()),
                              (u = l.ui),
                              e(function (e) {
                                e.loading = !0;
                              }),
                              (n.prev = 9),
                              (n.next = 12),
                              c.promptSnippet.getPromptDetail(r)
                            );
                          case 12:
                            return (
                              (d = n.sent),
                              (m = d.content),
                              n.abrupt("return", m)
                            );
                          case 17:
                            (n.prev = 17),
                              (n.t0 = n.catch(9)),
                              null === (p = u.message) ||
                                void 0 === p ||
                                p.error("请重试");
                          case 21:
                            return n.abrupt("return", "");
                          case 22:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [[9, 17]]
                  );
                })
              )();
            },
            updatePrompt: function (n) {
              return b()(
                x()().mark(function a() {
                  var r, i, o, s, c;
                  return x()().wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (
                              (r = R.qr.getState()),
                              (i = r.api),
                              (a.prev = 1),
                              (a.next = 4),
                              i.promptSnippet.updatePrompt(n)
                            );
                          case 4:
                            (o = a.sent),
                              e(function (e) {
                                var t = e.promptsLibraryList,
                                  a = t.findIndex(function (e) {
                                    return (null == e ? void 0 : e.id) === n.id;
                                  }),
                                  r = t[a];
                                r && Object.assign(r, o);
                              }),
                              (s = t().promptsLibraryList),
                              (c = s
                                .filter(function (e) {
                                  return !e.name || !e.emoji;
                                })
                                .map(function (e) {
                                  return e.id;
                                })),
                              o.name ||
                                Rt.startUpDateTitleInterval(t().updateTitle, c),
                              (a.next = 14);
                            break;
                          case 11:
                            (a.prev = 11), (a.t0 = a.catch(1));
                          case 14:
                          case "end":
                            return a.stop();
                        }
                    },
                    a,
                    null,
                    [[1, 11]]
                  );
                })
              )();
            },
            updateTitle: function (t) {
              return b()(
                x()().mark(function n() {
                  var a, r, i, o;
                  return x()().wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (a = R.qr.getState()),
                            (r = a.api),
                            (n.next = 3),
                            r.promptSnippet.getDonePromptSnippet(t)
                          );
                        case 3:
                          if (!((i = n.sent) && i.length > 0)) {
                            n.next = 10;
                            break;
                          }
                          return (
                            (o = i.map(function (e) {
                              return e.id;
                            })),
                            e(function (e) {
                              var t,
                                n = e.promptsLibraryList,
                                a = Mt()(i);
                              try {
                                var r = function () {
                                  var e,
                                    a,
                                    r = t.value,
                                    i = n.findIndex(function (e) {
                                      return (
                                        (null == e ? void 0 : e.id) ===
                                        (null == r ? void 0 : r.id)
                                      );
                                    }),
                                    o = n[i];
                                  o &&
                                    ((o.name =
                                      null !==
                                        (e = null == r ? void 0 : r.name) &&
                                      void 0 !== e
                                        ? e
                                        : o.name),
                                    (o.emoji =
                                      null !==
                                        (a = null == r ? void 0 : r.emoji) &&
                                      void 0 !== a
                                        ? a
                                        : o.emoji));
                                };
                                for (a.s(); !(t = a.n()).done; ) r();
                              } catch (e) {
                                a.e(e);
                              } finally {
                                a.f();
                              }
                            }),
                            n.abrupt("return", Bt(t, o))
                          );
                        case 10:
                          return n.abrupt("return", !1);
                        case 11:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              )();
            },
            deletePrompt: function (t) {
              return b()(
                x()().mark(function n() {
                  var a, r;
                  return x()().wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (a = R.qr.getState()),
                              (r = a.api),
                              (n.prev = 1),
                              (n.next = 4),
                              r.promptSnippet.deletePrompt(t)
                            );
                          case 4:
                            e(function (e) {
                              e.promptsLibraryList =
                                e.promptsLibraryList.filter(function (e) {
                                  return e.id !== t;
                                });
                            }),
                              (n.next = 10);
                            break;
                          case 7:
                            (n.prev = 7), (n.t0 = n.catch(1));
                          case 10:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [[1, 7]]
                  );
                })
              )();
            },
            createPrompt: function (e, n) {
              return b()(
                x()().mark(function a() {
                  var r, i, o;
                  return x()().wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (
                              (r = R.qr.getState()),
                              (i = r.api),
                              (a.prev = 1),
                              (a.next = 4),
                              i.promptSnippet.createPrompt(e, n)
                            );
                          case 4:
                            (o = { offset: 0, size: 8 }),
                              t().getPromptsList(o, { from: "list" }),
                              (a.next = 11);
                            break;
                          case 8:
                            (a.prev = 8), (a.t0 = a.catch(1));
                          case 11:
                          case "end":
                            return a.stop();
                        }
                    },
                    a,
                    null,
                    [[1, 8]]
                  );
                })
              )();
            },
            openPromptsLibraryModal: function () {
              var n = arguments;
              return b()(
                x()().mark(function a() {
                  var r, i, s;
                  return x()().wrap(function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          if (
                            ((r =
                              n.length > 0 && void 0 !== n[0] ? n[0] : "full"),
                            (i = n.length > 1 && void 0 !== n[1] ? n[1] : ""),
                            (s = { offset: 0, size: 8 }),
                            "search" !== r)
                          ) {
                            a.next = 12;
                            break;
                          }
                          if ("" === i) {
                            a.next = 9;
                            break;
                          }
                          return (
                            (a.next = 7),
                            t().getPromptsList(s, { from: "search", query: i })
                          );
                        case 7:
                          a.next = 10;
                          break;
                        case 9:
                          t().reset();
                        case 10:
                          a.next = 14;
                          break;
                        case 12:
                          return (
                            (a.next = 14),
                            t().getPromptsList(s, { from: "list" })
                          );
                        case 14:
                          e(function (e) {
                            "search" === r
                              ? (t().promptsLibraryList.length &&
                                  (0, o.LF)("msh_show_recommend_content", {
                                    msh_content_type:
                                      "recommend_favorite_prompt",
                                    msh_trigger_type: "associating_inputing"
                                  }),
                                (e.showLibraryModal =
                                  !!t().promptsLibraryList.length))
                              : (e.showLibraryModal = !0);
                          });
                        case 15:
                        case "end":
                          return a.stop();
                      }
                  }, a);
                })
              )();
            },
            closePromptsLibraryModal: function () {
              t().reset(),
                e(function (e) {
                  e.showLibraryModal = !1;
                });
            }
          };
        }),
        Rt = {
          count: 0,
          upDateTitleInterval: null,
          clearUpDateTitleInterval: function () {
            Rt.upDateTitleInterval && clearInterval(Rt.upDateTitleInterval),
              (this.count = 0);
          },
          startUpDateTitleInterval: function (e, t) {
            this.upDateTitleInterval && this.clearUpDateTitleInterval(),
              (this.upDateTitleInterval = setInterval(
                b()(
                  x()().mark(function n() {
                    return x()().wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            if (
                              1 !== Rt.count &&
                              3 !== Rt.count &&
                              5 !== Rt.count
                            ) {
                              n.next = 5;
                              break;
                            }
                            return (n.next = 3), e(t);
                          case 3:
                            n.sent && Rt.clearUpDateTitleInterval();
                          case 5:
                            Rt.count++,
                              Rt.count > 5 && Rt.clearUpDateTitleInterval();
                          case 7:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                  })
                ),
                1e3
              ));
          }
        },
        Bt = function (e, t) {
          if (e.length !== t.length) return !1;
          for (var n = e.sort(), a = t.sort(), r = 0; r < n.length; r++)
            if (n[r] !== a[r]) return !1;
          return !0;
        },
        Tt = n(51911);
      var Qt = function (e, t, n) {
        var r = (0, s.vg)(function (e) {
            return e.i18n;
          }).fm,
          i = (0, f.t)().openShareMode,
          l = (0, St.Z)(),
          u = (0, a.useMemo)(
            function () {
              var a, s, u, p, f, h;
              return {
                shareButton: {
                  tooltip: "msh.chat.page.share",
                  icon: "chat-share",
                  onClick: function () {
                    (0, o.GE)(
                      "bottom" === n
                        ? "btn_share_message_in_latest_message"
                        : "btn_share_message_in_earlier_message",
                      { msh_data_message_id: e.id }
                    ),
                      i(e.group_id);
                  }
                },
                copy: {
                  tooltip: "msh.chat.segment.copy",
                  icon: "copy",
                  "data-testid": "msh-chat-segment-copy",
                  onClick:
                    ((h = b()(
                      x()().mark(function n() {
                        var a, i, s, u, p, f, h;
                        return x()().wrap(function (n) {
                          for (;;)
                            switch ((n.prev = n.next)) {
                              case 0:
                                (0, o.GE)(
                                  t
                                    ? "copy_user_message_btn"
                                    : "copy_model_reply_message_btn",
                                  { msh_data_message_id: e.id }
                                ),
                                  (a = e.content),
                                  t &&
                                    a &&
                                    (a = a.replace(
                                      Pt.J,
                                      function (e, t, n, a, r, i) {
                                        return i + " ";
                                      }
                                    )),
                                  null != e && e.error && (a = e.error.message),
                                  a || e.canceled || (a = Tt.W),
                                  Zt()(a || "", { format: "text/plain" }) &&
                                    (null == l ||
                                      l.success(
                                        r("msh.chat.segment.copy.success")
                                      )),
                                  (i = R.qr.getState()),
                                  (s = i.api),
                                  (u = d.aK.getState()),
                                  (p = u.chatId),
                                  (f = m.D.get()),
                                  (h = f.caseID),
                                  (0, c.m1)().user &&
                                    s.chat.saveLog(
                                      "copy",
                                      h ? "case" : "chat",
                                      {
                                        chat_info: {
                                          chat_id: h || p,
                                          segment_id: e.id
                                        }
                                      }
                                    );
                              case 12:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                      })
                    )),
                    function () {
                      return h.apply(this, arguments);
                    })
                },
                reAnswer: {
                  tooltip: "msh.chat.segment.reanswer",
                  icon: "re-answer",
                  "data-testid": "msh-chat-segment-reAnswer",
                  onClick: function () {
                    (0, o.GE)("btn_try_regenerate_a_new_reply", {
                      msh_data_message_id: e.id
                    }),
                      P.A.reAnswer();
                  }
                },
                forceSearch: {
                  tooltip: "msh.chat.segment.forcesearch",
                  icon: "re-answer",
                  "data-testid": "msh-chat-segment-forceSearch",
                  onClick: function () {
                    P.A.forceSearch();
                  }
                },
                answerContinue: {
                  tooltip: "msh.chat.segment.answercontinue",
                  icon: "re-answer",
                  "data-testid": "msh-chat-segment-answerContinue",
                  onClick: function () {
                    P.A.answerContinue();
                  }
                },
                like: {
                  tooltip: "msh.chat.segment.feedback.like",
                  brand: !(
                    null == e ||
                    null === (a = e.status) ||
                    void 0 === a ||
                    !a.is_thumb_up
                  ),
                  className:
                    null != e &&
                    null !== (s = e.status) &&
                    void 0 !== s &&
                    s.is_thumb_up
                      ? "selected"
                      : "",
                  icon: "vote-up",
                  "data-testid": "msh-chat-segment-like",
                  onClick: function () {
                    var t;
                    (0, o.GE)("thumbs_up_for_model_reply_message_btn", {
                      msh_data_message_id: e.id
                    });
                    var n =
                      null != e &&
                      null !== (t = e.status) &&
                      void 0 !== t &&
                      t.is_thumb_up
                        ? "cancel"
                        : "up";
                    et.d.submitFeedback(e, n);
                  }
                },
                dislike: {
                  tooltip: "msh.chat.segment.feedback.unlike",
                  brand: !(
                    null == e ||
                    null === (u = e.status) ||
                    void 0 === u ||
                    !u.is_thumb_down
                  ),
                  className:
                    null != e &&
                    null !== (p = e.status) &&
                    void 0 !== p &&
                    p.is_thumb_down
                      ? "selected"
                      : "",
                  icon: "vote-down",
                  "data-testid": "msh-chat-segment-dislike",
                  onClick: function () {
                    var t;
                    (0, o.GE)("thumbs_down_for_model_reply_message_btn", {
                      msh_data_message_id: e.id
                    });
                    var n =
                      null != e &&
                      null !== (t = e.status) &&
                      void 0 !== t &&
                      t.is_thumb_down
                        ? "cancel"
                        : "down";
                    et.d.submitFeedback(e, n);
                  }
                },
                collect: {
                  tooltip: "msh.chat.segment.collect",
                  icon: "prompt-snippet",
                  onClick:
                    ((f = b()(
                      x()().mark(function t(n) {
                        var a, i, s, c;
                        return x()().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    n.stopPropagation(),
                                    (0, o.GE)("btn_add_prompt_to_favorite", {
                                      msh_data_message_id: e.id
                                    }),
                                    (i = R.qr.getState()),
                                    (s = i.api),
                                    (c =
                                      null === (a = e.content) || void 0 === a
                                        ? void 0
                                        : a.replace(
                                            Pt.J,
                                            function (e, t, n, a, r, i) {
                                              return i + " ";
                                            }
                                          )),
                                    (t.prev = 4),
                                    (t.next = 7),
                                    s.promptSnippet.createPrompt(
                                      null != c ? c : ""
                                    )
                                  );
                                case 7:
                                  t.sent.is_duplicate
                                    ? null == l ||
                                      l.success(
                                        r("msh.chat.segment.collect.duplicate")
                                      )
                                    : null == l ||
                                      l.success(
                                        r("msh.chat.segment.collect.success")
                                      ),
                                    Lt.getState().openPromptsLibraryModal(
                                      "full"
                                    ),
                                    (0, o.LF)("msh_show_recommend_content", {
                                      msh_content_type:
                                        "recommend_favorite_prompt",
                                      msh_trigger_type: "click",
                                      msh_source_element_id:
                                        "btn_add_prompt_to_favorite"
                                    }),
                                    (t.next = 16);
                                  break;
                                case 14:
                                  (t.prev = 14), (t.t0 = t.catch(4));
                                case 16:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          null,
                          [[4, 14]]
                        );
                      })
                    )),
                    function (e) {
                      return f.apply(this, arguments);
                    })
                }
              };
            },
            [e, r, t, l, n]
          );
        return { options: u };
      };
      function Dt(e) {
        var t = e.data,
          n = e.isUser,
          r = (0, bt.Z)().isCase,
          i = (0, s.vg)(function (e) {
            return e.i18n;
          }).fm,
          o = (0, d.aK)(function (e) {
            var t;
            return null === (t = e.stateMap[e.chatId]) || void 0 === t
              ? void 0
              : t.chatting;
          }),
          c = Qt(t, n, "normal").options,
          l = (0, a.useMemo)(
            function () {
              var e = r || t.error ? [] : [c.like, c.dislike],
                a = t.error ? [] : [c.copy],
                i = r || t.error || !t.content ? [] : [c.shareButton];
              return [].concat(a, i, n ? [c.collect] : e);
            },
            [t.error, t.content, n, o, r, c]
          );
        return "default_segment" === t.id || !l || l.length <= 0
          ? null
          : (0, W.jsx)(xt.Z, {
              direction: "row",
              className: jt,
              children: l.map(function (e, t) {
                return (0, W.jsxs)(
                  a.Fragment,
                  {
                    children: [
                      (0, W.jsx)(At.Z, {
                        placement: "top",
                        title: i(e.tooltip),
                        arrow: !0,
                        children: (0, W.jsx)(ve.Z, {
                          "data-testid": e["data-testid"],
                          className: y()(_t, e.brand && Ct),
                          onClick: function (t) {
                            e.onClick(t);
                          },
                          children: (0, W.jsx)(T.Kr1, {
                            className: y()(wt),
                            type: e.icon
                          })
                        })
                      }),
                      t < l.length - 1 &&
                        (0, W.jsx)(O.Z, { component: "span", className: Et })
                    ]
                  },
                  e.tooltip
                );
              })
            });
      }
      var Kt = n(88045),
        Gt = n(83539);
      function Wt(e) {
        var t = e.data,
          n = e.isUser,
          r = (0, bt.Z)().isCase,
          o = (0, Kt.Z)().isSmallScreen,
          s = (0, d.aK)(function (e) {
            return e.detailsMap[e.chatId];
          }),
          c = (0, d.aK)(function (e) {
            var t;
            return null !== (t = e.segmentsMap[e.chatId]) && void 0 !== t
              ? t
              : [];
          }),
          l = (0, d.aK)(function (e) {
            var t;
            return null === (t = e.stateMap[e.chatId]) || void 0 === t
              ? void 0
              : t.chatting;
          }),
          u = Qt(t, n, "bottom").options,
          m = (0, a.useMemo)(
            function () {
              var e = "normal" === (null == s ? void 0 : s.status),
                n = r || l || t.error || !t.content ? [] : [u.shareButton],
                a = t.error ? [] : [u.copy],
                i = (0, d.mW)(c),
                o =
                  (null == i ? void 0 : i.group_id) === t.group_id &&
                  "user" === (null == i ? void 0 : i.role) &&
                  !(0, d.vI)(null == t ? void 0 : t.error) &&
                  !(0, d.fc)(t) &&
                  e &&
                  !r
                    ? [u.reAnswer]
                    : [];
              return [].concat(a, o, n);
            },
            [t, l, r, c, s, u]
          ),
          p = r || t.error ? [] : [u.like, u.dislike];
        return "default_segment" === t.id
          ? null
          : (null != m && m.length) || p.length
          ? (0, W.jsxs)(i.Z, {
              flex: !0,
              center: !0,
              className: yt,
              children: [
                (0, W.jsx)(i.Z, {
                  flex: !0,
                  center: "y",
                  full: !0,
                  item: !0,
                  gap: "var(--sm, 4px)",
                  sx: { marginRight: "var(--sm, 8px)" },
                  children:
                    null == m
                      ? void 0
                      : m.map(function (e, t) {
                          return (0,
                          W.jsxs)(a.Fragment, { children: [!o && (0, W.jsx)(Ft, { data: e, type: "normal" }, e.tooltip), o && (0, W.jsx)(Ft, { data: e, type: "icon" }, e.tooltip)] }, e.tooltip);
                        })
                }),
                (0, W.jsx)(i.Z, {
                  flex: !0,
                  center: "y",
                  gap: "var(--sm, 4px)",
                  children: p.map(function (e) {
                    return (0,
                    W.jsx)(Ft, { data: e, type: "icon" }, null == e ? void 0 : e.tooltip);
                  })
                })
              ]
            })
          : null;
      }
      var Ft = function (e) {
          var t = e.type,
            n = e.data;
          return "icon" === t
            ? (0, W.jsx)(At.Z, {
                placement: "top",
                title: (0, W.jsx)(Gt._H, { id: n.tooltip }),
                arrow: !0,
                children: (0, W.jsx)(ve.Z, {
                  "data-testid": n["data-testid"],
                  className: y()(_t, n.brand && Ct),
                  onClick: function (e) {
                    n.onClick(e);
                  },
                  children: (0, W.jsx)(T.Kr1, {
                    className: y()(wt),
                    type: n.icon
                  })
                })
              })
            : (0, W.jsxs)(ve.Z, {
                "data-testid": n["data-testid"],
                className: y()(_t, n.brand && Ct),
                onClick: function (e) {
                  n.onClick(e);
                },
                children: [
                  (0, W.jsx)(T.Kr1, { className: y()(wt), type: n.icon }),
                  (0, W.jsx)(U.Z, {
                    className: kt,
                    children: (0, W.jsx)(Gt._H, { id: n.tooltip })
                  })
                ]
              });
        },
        zt = n(84214),
        Ot = "parseFailedTip___tjybu",
        Ut = "reAnswer___A3Mm_",
        Yt = function (e) {
          var t = e.errorData;
          if (
            t &&
            "kimi.completion.overloaded" === (null == t ? void 0 : t.error_type)
          )
            return (0, W.jsxs)(i.Z, {
              flex: !0,
              gap: 1,
              center: !0,
              className: Ot,
              children: [
                "🚀 高峰时段，让 Kimi",
                (0, W.jsx)("span", {
                  className: Ut,
                  onClick: function () {
                    P.A.reAnswer();
                  },
                  children: "重回这条消息"
                })
              ]
            });
        },
        qt = n(22998),
        Vt = "container___chUs0",
        Ht = "withContent___TKW3m",
        Jt = "default___lC8KZ",
        Xt = "content___cDTZv",
        $t = function (e) {
          var t = e.content,
            n = e.loading,
            r = e.onClick,
            o = e.isLast,
            s = e.index,
            c = (0, a.useState)(""),
            l = _()(c, 2),
            u = l[0],
            d = l[1],
            m = (0, a.useMemo)(
              function () {
                return t ? "auto" : o ? "180px" : "260px";
              },
              [t, o]
            );
          return (
            (0, a.useEffect)(
              function () {
                var e,
                  n,
                  a,
                  r,
                  i =
                    null !==
                      (e =
                        null === (n = document.getElementById("text")) ||
                        void 0 === n
                          ? void 0
                          : n.scrollHeight) && void 0 !== e
                      ? e
                      : 0,
                  o =
                    null !==
                      (a =
                        null === (r = document.getElementById("text")) ||
                        void 0 === r
                          ? void 0
                          : r.clientHeight) && void 0 !== a
                      ? a
                      : 0;
                d(i > o ? t : "");
              },
              [t]
            ),
            t || n
              ? (0, W.jsx)(At.Z, {
                  placement: "top",
                  title: u,
                  arrow: !0,
                  children: (0, W.jsx)(i.Z, {
                    flex: !0,
                    center: !0,
                    onClick: function (e) {
                      r(t, s);
                    },
                    className: y()(Vt, t ? Ht : Jt),
                    style: { width: m },
                    children:
                      t &&
                      (0, W.jsx)(U.Z, {
                        component: "div",
                        className: Xt,
                        id: "text",
                        children: t
                      })
                  })
                })
              : null
          );
        },
        en = function (e) {
          var t,
            n,
            r,
            o,
            s = e.data,
            c = (0, d.aK)(function (e) {
              return e.promptsMap[e.chatId];
            });
          null != s &&
            null !== (t = s.info) &&
            void 0 !== t &&
            t.can_continue &&
            (c = null === (o = c) || void 0 === o ? void 0 : o.slice(0, 2));
          var l = (0, d.aK)(function (e) {
              return e.promptStreamLoading;
            }),
            u = (0, a.useCallback)(
              function (e, t) {
                if (e) {
                  var n = R.qr.getState().api,
                    a = d.aK.getState().chatId;
                  n.chat.sendPrompt({
                    chat_id: a,
                    group_id: null == s ? void 0 : s.group_id,
                    recommend_index: t
                  }),
                    P.A.send(e, [], { is_prompt: !0 });
                }
              },
              [s]
            );
          return (0, W.jsxs)(i.Z, {
            flex: !0,
            column: !0,
            gap: "8px",
            children: [
              (null == s || null === (n = s.info) || void 0 === n
                ? void 0
                : n.can_continue) &&
                (0, W.jsx)($t, {
                  content: "接着说",
                  onClick: P.A.answerContinue
                }),
              null === (r = c) || void 0 === r
                ? void 0
                : r.map(function (e, t) {
                    return (0,
                    W.jsx)($t, { content: e, index: t, loading: l, onClick: u }, t);
                  })
            ]
          });
        },
        tn = function (e) {
          var t = e.data,
            n = e.isLastAssist,
            r = e.isLast,
            s = e.dragonImg,
            c = (0, d.aK)(function (e) {
              var t;
              return null === (t = e.stateMap[e.chatId]) || void 0 === t
                ? void 0
                : t.chattingID;
            }),
            l = (0, d.aK)(function (e) {
              var t;
              return null === (t = e.stateMap[e.chatId]) || void 0 === t
                ? void 0
                : t.stopping;
            }),
            u = (0, d.aK)(function (e) {
              var t;
              return null === (t = e.stateMap[e.chatId]) || void 0 === t
                ? void 0
                : t.ending;
            }),
            p = (0, d.aK)(function (e) {
              var t;
              return null === (t = e.stateMap[e.chatId]) || void 0 === t
                ? void 0
                : t.chatting;
            }),
            h = (0, f.t)(function (e) {
              return e.shareMode;
            }),
            g = (0, f.t)(function (e) {
              return e.shareSegmentsIdMap;
            }),
            v = c === t.id,
            x = (0, m.p)(function (e) {
              return e.chattingID;
            }),
            A = (0, m.p)(function (e) {
              return e.caseID;
            }),
            b = A && x === A,
            j = (0, E.l)(function (e) {
              return e.debugging;
            }),
            _ = (0, a.useMemo)(
              function () {
                if (g[t.id] && h)
                  return {
                    border: "1px solid var(--hover, rgba(123, 138, 175, 0.26))"
                  };
              },
              [h, g]
            );
          return (0, W.jsxs)("div", {
            id: "chat-segment-".concat(t.id),
            className: y()(qt.Z.segment, qt.Z.left),
            children: [
              (0, W.jsx)(i.Z, {
                center: !0,
                width: 40,
                height: 40,
                flex: !0,
                children: (0, W.jsx)(it.Z, {
                  isLastAssist: n,
                  isNew: v,
                  sid: t.id
                })
              }),
              (0, W.jsxs)("div", {
                className: qt.Z.container,
                children: [
                  (0, W.jsxs)("div", {
                    className: qt.Z.main,
                    children: [
                      (0, W.jsx)(at.Z, {
                        children: function (a) {
                          var i = a.backgroundStyle;
                          return (0, W.jsxs)("div", {
                            className: qt.Z.content,
                            style: pe()(pe()({}, _), i),
                            children: [
                              (null == t ? void 0 : t.search_plus) &&
                                (0, W.jsx)(rt.Z, {
                                  data: null == t ? void 0 : t.search_plus,
                                  error: null == t ? void 0 : t.error
                                }),
                              (0, W.jsx)(
                                zt.s,
                                pe()(
                                  pe()({}, e),
                                  {},
                                  { isNew: v, isChattingCase: b }
                                )
                              ),
                              s &&
                                (0, W.jsx)("img", {
                                  src: s,
                                  width: 200,
                                  style: { maxWidth: "100%" }
                                }),
                              j &&
                                (0, W.jsx)(vt, {
                                  docs: null == t ? void 0 : t.ref_docs
                                })
                            ]
                          });
                        }
                      })
                    ]
                  }),
                  n && r && !h && (0, W.jsx)(Yt, { errorData: t.error }),
                  n &&
                    r &&
                    (0, W.jsxs)(W.Fragment, {
                      children: [
                        !p && !h && (0, W.jsx)(en, { data: t }),
                        (0, W.jsx)("div", {
                          className: qt.Z.stopBlock,
                          children:
                            v &&
                            !u &&
                            (0, W.jsx)("div", {
                              className: qt.Z.stop,
                              children: (0, W.jsx)(nt.Z, {
                                variant: "outlined",
                                loading: l,
                                onClick: function () {
                                  (0, o.GE)("interrupt_model_reply_btn", {
                                    msh_data_message_id: t.id
                                  }),
                                    P.A.stop(
                                      t.id,
                                      (null == t ? void 0 : t.content) || ""
                                    );
                                },
                                children: "停止输出"
                              })
                            })
                        })
                      ]
                    })
                ]
              }),
              (0, W.jsx)(i.Z, { width: 40, shrink: 0 })
            ]
          });
        },
        nn = n(56108),
        an = "tip___AWiB8",
        rn = function (e) {
          var t = (0, s.vg)(function (e) {
              return e.i18n;
            }).fm,
            n = e.url_refs,
            r = e.preserved_file_ratio,
            o =
              null == n
                ? void 0
                : n.some(function (e) {
                    return (
                      "failed" === (null == e ? void 0 : e.status) ||
                      "timeout" === (null == e ? void 0 : e.status)
                    );
                  }),
            c = (0, a.useMemo)(
              function () {
                return !n || n.length <= 0
                  ? ""
                  : null != n &&
                    n.every(function (e) {
                      return (
                        "failed" === (null == e ? void 0 : e.status) ||
                        "timeout" === (null == e ? void 0 : e.status)
                      );
                    })
                  ? n.length > 1
                    ? t("msh.chat.segment.url.failed.all")
                    : t("msh.chat.segment.url.failed.single")
                  : null != n &&
                    n.some(function (e) {
                      return (
                        "failed" === (null == e ? void 0 : e.status) ||
                        "timeout" === (null == e ? void 0 : e.status)
                      );
                    })
                  ? t("msh.chat.segment.url.failed.some")
                  : "";
              },
              [n]
            ),
            l = r ? parseInt(1e4 * r) / 100 : r;
          return o || l
            ? (0, W.jsxs)(W.Fragment, {
                children: [
                  o &&
                    (0, W.jsxs)(i.Z, {
                      flex: !0,
                      gap: 1,
                      center: !0,
                      className: an,
                      children: [
                        (0, W.jsx)(T.Kr1, { type: "alert-triangle" }),
                        (0, W.jsx)(U.Z, { variant: "body2", children: c })
                      ]
                    }),
                  !!l &&
                    (0, W.jsxs)(i.Z, {
                      flex: !0,
                      gap: 1,
                      center: !0,
                      className: an,
                      children: [
                        (0, W.jsx)(T.Kr1, { type: "alert-triangle" }),
                        (0, W.jsx)(U.Z, {
                          variant: "body2",
                          children: t("msh.chat.token.file.oversize.tip", {
                            percent: l
                          })
                        })
                      ]
                    })
                ]
              })
            : null;
        },
        on = n(48202),
        sn = function (e) {
          var t = e.data,
            n = (0, f.t)(function (e) {
              return e.shareMode;
            }),
            r = (0, f.t)(function (e) {
              return e.shareSegmentsIdMap;
            }),
            o = (0, a.useMemo)(
              function () {
                if (r[t.id] && n)
                  return { border: "1px solid rgba(255, 255, 255, 0.20)" };
              },
              [n, r]
            );
          return (0, W.jsxs)("div", {
            id: "chat-segment-".concat(t.id),
            className: y()(qt.Z.segment, qt.Z.right),
            children: [
              (0, W.jsx)(i.Z, {
                center: !0,
                width: 40,
                height: 40,
                flex: !0,
                children: (0, W.jsx)(nn.Z, {})
              }),
              (0, W.jsxs)("div", {
                className: qt.Z.container,
                children: [
                  (0, W.jsxs)("div", {
                    className: qt.Z.main,
                    children: [
                      (0, W.jsx)(at.Z, {
                        children: function (t) {
                          var n = t.backgroundStyle;
                          return (0, W.jsx)("div", {
                            className: qt.Z.content,
                            style: pe()(pe()({}, o), n),
                            children: (0, W.jsx)(
                              zt.s,
                              pe()(pe()({}, e), {}, { isNew: !1, isUser: !0 })
                            )
                          });
                        }
                      })
                    ]
                  }),
                  (0, W.jsx)(on.L, pe()({}, e)),
                  (0, W.jsx)(rn, {
                    url_refs: null == t ? void 0 : t.url_refs,
                    preserved_file_ratio:
                      null == t ? void 0 : t.preserved_file_ratio
                  })
                ]
              }),
              (0, W.jsx)(i.Z, { width: 40, shrink: 0 })
            ]
          });
        };
      function cn(e) {
        var t = e.data,
          n = e.isLastAssist,
          a = e.isLast,
          r = e.dragonImg,
          i = "user" === t.role;
        return (0, W.jsxs)(W.Fragment, {
          children: [
            i && (0, W.jsx)(sn, { data: t }),
            !i &&
              (0, W.jsx)(tn, {
                data: t,
                isLastAssist: n,
                isLast: a,
                dragonImg: r
              })
          ]
        });
      }
      function ln(e) {
        var t = (0, d.aK)(function (e) {
            var t;
            return {
              chatId: e.chatId,
              loading: e.loading,
              segmentLoading: e.segmentLoading,
              chatting:
                null === (t = e.stateMap[e.chatId]) || void 0 === t
                  ? void 0
                  : t.chatting
            };
          }),
          n = t.chatId,
          r = t.loading,
          c = t.segmentLoading,
          l = t.chatting,
          u = e.cid,
          p = e.isCase,
          h = (0, d.aK)(function (e) {
            var t;
            return null !== (t = e.segmentsMap[u || e.chatId]) && void 0 !== t
              ? t
              : [];
          }),
          g = (0, d.aK)(function (e) {
            var t;
            return null !== (t = e.segmentTotalMap[u || e.chatId]) &&
              void 0 !== t
              ? t
              : 0;
          }),
          v = (0, d.aK)(function (e) {
            return e.detailsMap[u || e.chatId];
          }),
          x = (0, d.aK)(function (e) {
            return e.promptStreamLoading;
          }),
          A = (0, d.aK)(function (e) {
            return e.promptsMap[e.chatId];
          }),
          b = (0, d.aK)(function (e) {
            var t;
            return null === (t = e.stateMap[e.chatId]) || void 0 === t
              ? void 0
              : t.ending;
          }),
          j = (0, d.aK)(function (e) {
            var t;
            return null === (t = e.stateMap[e.chatId]) || void 0 === t
              ? void 0
              : t.chattingID;
          }),
          _ = (0, f.t)(function (e) {
            return e.shareMode;
          }),
          C = (0, f.t)(function (e) {
            return e.shareSegmentsIdMap;
          }),
          w = (0, m.p)(function (e) {
            return e.chattingID;
          }),
          y = (0, m.p)(function (e) {
            return e.caseID;
          }),
          k = y && w === y,
          E = (0, a.useRef)(0),
          N = (0, d.aK)(function (e) {
            return { manual_scroll: e.manual_scroll, bottom_index: e.loading };
          }).manual_scroll,
          Z = (0, a.useRef)(!1),
          P = (0, $e.Z)(),
          S = (0, a.useMemo)(
            function () {
              return null != v && v.events_2024_dragon_info
                ? v.events_2024_dragon_info.public_url
                : "";
            },
            [v]
          ),
          I = (0, a.useMemo)(
            function () {
              return v || p
                ? (null != v && v.is_example) ||
                  (null != v && v.born_from) ||
                  p ||
                  (null != v && v.events_2024_dragon_info)
                  ? h
                  : [
                      {
                        id: "default_segment",
                        content:
                          "Hi，我是 Kimi～\n很高兴遇见你！你可以随时把网址🔗或者文件📃发给我，我来帮你看看",
                        context_type: "text",
                        created_at: null == v ? void 0 : v.created_at
                      }
                    ].concat(he()(h))
                : [];
            },
            [v, h, p]
          ),
          M = (0, a.useMemo)(
            function () {
              return v || p
                ? (null != v && v.is_example) ||
                  (null != v && v.born_from) ||
                  p ||
                  (null != v && v.events_2024_dragon_info)
                  ? g
                  : g + 1
                : 0;
            },
            [v, h, p]
          );
        (0, a.useEffect)(
          function () {
            null != I &&
              I.length &&
              l &&
              !N &&
              setTimeout(function () {
                var e;
                null === (e = P.current) ||
                  void 0 === e ||
                  e.scrollToIndex({ index: I.length - 1, align: "end" });
              });
          },
          [l, P, N, I]
        ),
          (0, a.useEffect)(
            function () {
              null != I &&
                I.length &&
                x &&
                !N &&
                setTimeout(function () {
                  var e;
                  null === (e = P.current) ||
                    void 0 === e ||
                    e.scrollToIndex({ index: I.length - 1, align: "end" });
                });
            },
            [x, P, N, I, A]
          ),
          (0, a.useEffect)(
            function () {
              null != I &&
                I.length &&
                k &&
                !N &&
                setTimeout(function () {
                  var e;
                  null === (e = P.current) ||
                    void 0 === e ||
                    e.scrollToIndex({ index: I.length - 1, align: "end" });
                });
            },
            [k, P, N, I]
          ),
          (0, a.useEffect)(
            function () {
              if (null != I && I.length && !N) {
                var e,
                  t,
                  n = document.getElementById(
                    "chat-segment-".concat(
                      null !==
                        (e =
                          null === (t = I[I.length - 1]) || void 0 === t
                            ? void 0
                            : t.id) && void 0 !== e
                        ? e
                        : ""
                    )
                  ),
                  a = new ResizeObserver(function (e) {
                    e.forEach(function (e) {
                      var t;
                      E.current !== e.contentRect.height &&
                        ((E.current = e.contentRect.height),
                        null === (t = P.current) ||
                          void 0 === t ||
                          t.scrollToIndex({
                            index: I.length - 1,
                            align: "end"
                          }));
                    });
                  });
                return (
                  n && a.observe(n),
                  function () {
                    a.disconnect();
                  }
                );
              }
            },
            [P, N, I, E]
          );
        var L = (0, xe.Z)(
            function (e) {
              R(e);
            },
            { wait: 30 }
          ).run,
          R = (0, a.useCallback)(
            function (e) {
              var t = e.target,
                n = t.scrollHeight - t.scrollTop <= t.clientHeight + 2;
              N || n
                ? N && n && d.aK.setState({ manual_scroll: !1 })
                : d.aK.setState({ manual_scroll: !0 });
            },
            [N]
          ),
          B = (0, a.useCallback)(
            function () {
              var e;
              d.aK.setState({ manual_scroll: !1 }),
                null === (e = P.current) ||
                  void 0 === e ||
                  e.scrollToIndex({ index: I.length - 1, align: "end" });
            },
            [I]
          ),
          Q = (0, a.useCallback)(
            function (e) {
              return C[e.id];
            },
            [C]
          ),
          D = (0, a.useCallback)(
            function (e, t) {
              e.preventDefault();
              var n = C[t.id];
              t.error ||
                !t.content ||
                (j === t.id && !b) ||
                ((0, o.LF)("msh_checkbox_change", {
                  msh_element_id: "checkbox_share_message_select_one",
                  msh_page_name: window.location.pathname,
                  msh_message_id: t.id || ""
                }),
                n
                  ? f.t.setState(function (e) {
                      e.shareSegmentsIdMap[t.id] = !1;
                    })
                  : f.t.setState(function (e) {
                      e.shareSegmentsIdMap[t.id] = !0;
                    }));
            },
            [j, b, C]
          );
        (0, a.useEffect)(function () {
          return function () {
            B();
          };
        }, []);
        var K = (0, s.vg)(function (e) {
            return e.i18n;
          }).fm,
          G = "forbidden" === (null == v ? void 0 : v.status),
          F = (0, a.useMemo)(
            function () {
              var e =
                null == I
                  ? void 0
                  : I.filter(function (e) {
                      return (
                        "default_segment" === e.id || "assistant" === e.role
                      );
                    });
              return null != e && e.length ? e[e.length - 1].id : "";
            },
            [G, I]
          ),
          z = r && 0 !== I.length,
          U = (0, a.useMemo)(
            function () {
              return {
                Header: function () {
                  return (0, W.jsx)(i.Z, { style: { height: 24 } });
                },
                Footer: function () {
                  return (0, W.jsx)(W.Fragment, {
                    children: G
                      ? (0, W.jsx)(Y, {})
                      : (0, W.jsx)(i.Z, { style: { height: z ? 36 : 12 } })
                  });
                }
              };
            },
            [z, G]
          ),
          Y = function () {
            return (0, W.jsx)(O.Z, {
              maxWidth: "md",
              sx: { px: 4, mx: "auto", py: 4 },
              children: (0, W.jsx)(ge.Z, {
                className: tt.forbidden_text,
                children: K("msh.chat.segment.forbidden.message")
              })
            });
          };
        return (r || l) && 0 === I.length
          ? (0, W.jsx)(i.Z, { full: !0 })
          : (0, W.jsxs)(W.Fragment, {
              children: [
                (0, W.jsx)(
                  $e.a,
                  {
                    ref: P,
                    store: { loading: c, items: I },
                    firstItemIndex: Math.max(M - I.length, 0),
                    startReached: function () {
                      var e, t;
                      null !== (e = h.at(0)) &&
                        void 0 !== e &&
                        e.id &&
                        et.d.load(
                          null === (t = h.at(0)) || void 0 === t ? void 0 : t.id
                        );
                    },
                    initialTopMostItemIndex: {
                      index: I.length - 1,
                      align: "end"
                    },
                    isScrolling: function (e) {
                      return (Z.current = e);
                    },
                    onScroll: L,
                    components: U,
                    renderItem: function (t) {
                      var n = t.data,
                        a = t.index;
                      return (0, W.jsxs)(O.Z, {
                        maxWidth: "md",
                        className: tt.testBox,
                        sx: { px: 4, mx: "auto" },
                        children: [
                          (0, W.jsxs)(i.Z, {
                            flex: !0,
                            sx: {
                              alignItems: "flex-start",
                              visibility:
                                "default_segment" === n.id && _
                                  ? "hidden"
                                  : "visible"
                            },
                            onClick: function (e) {
                              _ && D(e, n);
                            },
                            children: [
                              _ &&
                                (0, W.jsx)(Xe, {
                                  checked: Q(n),
                                  className: tt.checkBox,
                                  size: "small",
                                  disabled:
                                    !!n.error ||
                                    !n.content ||
                                    (j === n.id && !b)
                                }),
                              (0, W.jsx)(
                                cn,
                                pe()(
                                  pe()({}, e),
                                  {},
                                  {
                                    data: n,
                                    dragonImg: S && 1 === a ? S : "",
                                    isLastAssist: F === n.id,
                                    isLast: a === M - 1
                                  }
                                )
                              )
                            ]
                          }),
                          a !== M - 1 && (0, W.jsx)(O.Z, { height: 24 })
                        ]
                      });
                    }
                  },
                  n
                ),
                N &&
                  (0, W.jsx)(O.Z, {
                    maxWidth: "md",
                    className: tt.downBtn,
                    onClick: B,
                    children: (0, W.jsx)(ve.Z, {
                      variant: "circle",
                      className: tt.btn,
                      children: (0, W.jsx)(T.Kr1, { type: "chatlist-down" })
                    })
                  })
              ]
            });
      }
      var un,
        dn = "chatPage___u_341",
        mn = "busyBanner___U89fg",
        pn = "content___inD6V",
        fn = "nonexist___JMKhS",
        hn = "alert___FgwR0",
        gn = n(77713),
        vn = n(91758),
        xn = n(69609),
        An = n(59884),
        bn = JSON.parse(
          '[{"name":"","content":"【🔥小红书浓人】根据给定主题，生成情绪和网感浓浓的自媒体文案\\n\\nKimi你好，你是一个小红书文案专家，也被称为小红书浓人。小红书浓人的意思是在互联网上非常外向会外露出激动的情绪。常见的情绪表达为：啊啊啊啊啊啊啊！！！！！不允许有人不知道这个！！\\n\\n请详细阅读并遵循以下原则，按照我提供的主题，帮我创作小红书标题和文案。\\n\\n\\n# 标题创作原则\\n\\n## 增加标题吸引力\\n- 使用标点：通过标点符号，尤其是叹号，增强语气，创造紧迫或惊喜的感觉！\\n- 挑战与悬念：提出引人入胜的问题或情境，激发好奇心。\\n- 结合正负刺激：平衡使用正面和负面的刺激，吸引注意力。\\n- 紧跟热点：融入当前流行的热梗、话题和实用信息。\\n- 明确成果：具体描述产品或方法带来的实际效果。\\n- 表情符号：适当使用emoji，增加活力和趣味性。\\n- 口语化表达：使用贴近日常交流的语言，增强亲和力。\\n- 字数控制：保持标题在20字以内，简洁明了。\\n\\n## 标题公式\\n标题需要顺应人类天性，追求便捷与快乐，避免痛苦。\\n- 正面吸引：展示产品或方法的惊人效果，强调快速获得的益处。比如：产品或方法+只需1秒（短期）+便可开挂（逆天效果）。\\n- 负面警示：指出不采取行动可能带来的遗憾和损失，增加紧迫感。比如：你不xxx+绝对会后悔（天大损失）+（紧迫感）\\n\\n## 标题关键词\\n从下面选择1-2个关键词：\\n我宣布、我不允许、请大数据把我推荐给、真的好用到哭、真的可以改变阶级、真的不输、永远可以相信、吹爆、搞钱必看、狠狠搞钱、一招拯救、正确姿势、正确打开方式、摸鱼暂停、停止摆烂、救命！、啊啊啊啊啊啊啊！、以前的...vs现在的...、再教一遍、再也不怕、教科书般、好用哭了、小白必看、宝藏、绝绝子、神器、都给我冲、划重点、打开了新世界的大门、YYDS、秘方、压箱底、建议收藏、上天在提醒你、挑战全网、手把手、揭秘、普通女生、沉浸式、有手就行、打工人、吐血整理、家人们、隐藏、高级感、治愈、破防了、万万没想到、爆款、被夸爆\\n\\n# 正文创作原则\\n\\n## 正文公式\\n选择以下一种方式作为文章的开篇引入：\\n- 引用名言、提出问题、使用夸张数据、举例说明、前后对比、情感共鸣。\\n\\n## 正文要求\\n- 字数要求：100-500字之间，不宜过长\\n- 风格要求：真诚友好、鼓励建议、幽默轻松；口语化的表达风格，有共情力\\n- 多用叹号：增加感染力\\n- 格式要求：多分段、多用短句\\n- 重点在前：遵循倒金字塔原则，把最重要的事情放在开头说明\\n- 逻辑清晰：遵循总分总原则，第一段和结尾段总结，中间段分点说明\\n\\n# 创作原则\\n- 标题数量：每次准备10个标题。\\n- 正文创作：撰写与标题相匹配的正文内容，具有强烈的浓人风格\\n\\n\\n现在，请告诉我你是否阅读完成？下面我将提供一个主题，请为我创作相应的小红书标题和文案，谢谢～"},{"name":"","content":"【🎬 短剧脚本】创作定制化短视频脚本，包含拍摄要求和分镜细节\\n\\n你是热门短视频脚本撰写的专家。 你有很多创意和idea，掌握各种网络流行梗，深厚积累了有关短视频平台上游戏、时尚、服饰、健身、食品、美妆等热门领域的知识、新闻信息；短视频脚本创作时，你需要充分融合这些专业背景知识； 根据用户输入的主题创作需求，进行短视频脚本创作，输出格式为： \\n- 拍摄要求： 1、演员：演员数量、演员性别和演员主配角 2、背景：拍摄背景要求 3、服装：演员拍摄服装要求 \\n- 分镜脚本：以markdown的格式输出： 镜头 | 时间 | 对话 | 画面 | 备注 1 00:00-00:xx xxxx xxxx xxxx 其中“对话”请按角色，依次列出“角色：对话内容”，对话都列在“对话”这一列。“画面”这部分侧重说明对场景切换，摄影师拍摄角度、演员的站位要求，演员走动要求，演员表演要求，动作特写要求等等。\\n##注意\\n-只有在用户提问的时候你才开始回答，用户不提问时，请不要回答\\n##初始语句\\n\\"\\"嗨，我是短视频脚本创作的专家，请告诉我你的短视频主题和具体要求，让我们开始创作吧！\\""},{"name":"","content":"【📝 美文排版】使用 Unicode 符号和 Emoji 表情符号优化文字排版, 提供良好阅读体验\\n\\n你是一个文字排版大师，能够熟练地使用 Unicode 符号和 Emoji 表情符号来优化排版已有信息, 提供更好的阅读体验\\n你的排版需要能够：\\n- 通过让信息更加结构化的体现，让信息更易于理解，增强信息可读性\\n## 技能:\\n- 熟悉各种 Unicode 符号和 Emoji 表情符号的使用方法\\n- 熟练掌握排版技巧，能够根据情境使用不同的符号进行排版\\n- 有非常高超的审美和文艺素养\\n- 信息换行和间隔合理, 阅读起来有呼吸感\\n## 工作流程:\\n- 作为文字排版大师，你将会在用户输入信息之后，使用 Unicode 符号和 Emoji 表情符号进行排版，提供更好的阅读体验。\\n    -  标题: 整体信息的第一行为标题行\\n    -  序号: 信息 item , 前面添加序号 Emoji, 方便用户了解信息序号; 后面添加换行, 将信息 item 单独成行\\n    -  属性: 信息 item 属性, 前面添加一个 Emoji, 对应该信息的核心观点\\n    -  链接: 识别 HTTP 或 HTTPS 开头的链接地址, 将原始链接原文进行单独展示. 不要使用 Markdown 的链接语法\\n## 注意:\\n- 不会更改原始信息，只能使用 Unicode 符号和 Emoji 表情符号进行排版\\n- 使用 Unicode 符号和 Emoji 表情时比较克制, 每行不超过两个\\n- 排版方式不应该影响信息的本质和准确性\\n- 只有在用户提问的时候你才开始回答，用户不提问时，请不要回答\\n## 初始语句:\\n\\"\\"您好，我是您的文字排版助手，能够将大段的文字梳理得更加清晰有序！你有需要整理的文本都可以扔进来~\\"\\""},{"name":"","content":"【📋 会议精要】整理生成高质量会议纪要，保证内容完整、准确且精炼\\n\\n你是一个专业的CEO秘书，专注于整理和生成高质量的会议纪要，确保会议目标和行动计划清晰明确。\\n要保证会议内容被全面地记录、准确地表述。准确记录会议的各个方面，包括议题、讨论、决定和行动计划\\n保证语言通畅，易于理解，使每个参会人员都能明确理解会议内容框架和结论\\n简洁专业的语言：信息要点明确，不做多余的解释；使用专业术语和格式\\n对于语音会议记录，要先转成文字。然后需要 kimi 帮忙把转录出来的文本整理成没有口语、逻辑清晰、内容明确的会议纪要\\n## 工作流程:\\n- 输入: 通过开场白引导用户提供会议讨论的基本信息\\n- 整理: 遵循以下框架来整理用户提供的会议信息，每个步骤后都会进行数据校验确保信息准确性\\n    - 会议主题：会议的标题和目的。\\n    - 会议日期和时间：会议的具体日期和时间。\\n    - 参会人员：列出参加会议的所有人。\\n    - 会议记录者：注明记录这些内容的人。\\n    - 会议议程：列出会议的所有主题和讨论点。\\n    - 主要讨论：详述每个议题的讨论内容，主要包括提出的问题、提议、观点等。\\n    - 决定和行动计划：列出会议的所有决定，以及计划中要采取的行动，以及负责人和计划完成日期。\\n    - 下一步打算：列出下一步的计划或在未来的会议中需要讨论的问题。\\n- 输出: 输出整理后的结构清晰, 描述完整的会议纪要\\n## 注意:\\n- 整理会议纪要过程中, 需严格遵守信息准确性, 不对用户提供的信息做扩写\\n- 仅做信息整理, 将一些明显的病句做微调\\n- 会议纪要：一份详细记录会议讨论、决定和行动计划的文档。\\n- 只有在用户提问的时候你才开始回答，用户不提问时，请不要回答\\n## 初始语句:\\n\\"\\"你好，我是会议纪要整理助手，可以把繁杂的会议文本扔给我，我来帮您一键生成简洁专业的会议纪要！\\"\\""},{"name":"","content":"【📈 PPT精炼】整理各种课程PPT，输出结构明晰、易于理解内容文档\\n\\n你是大学生课程PPT整理与总结大师，对于学生上传的课程文件，你需要对其内容进行整理总结，输出一个结构明晰、内容易于理解的课程内容文档\\n- 这个文档服务于大学生的课程学习与期末复习需要\\n##技能:\\n- 你擅长根据PPT的固有框架/目录对PPT内容进行整理与总结\\n- 擅长根据自己的需要阅读PPT、搜索信息理解PPT内容并提炼PPT重点内容\\n- 擅长把信息按照逻辑串联成一份详细、完整、准确的内容\\n- 最后的PPT整理内容用Markdown代码框格式输出\\n- 输出应该包含3级：PPT标题、二级标题、具体内容。具体内容应该要包含你搜索的相应内容，按点列出。\\n- 你可以结合互联网资料对PPT中的专业术语和疑难知识点进行总结\\n##工作流程: \\n- 请一步一步执行以下步骤\\n- 先阅读理解PPT内容\\n- 按照PPT目录对PPT不同部分进行整理，内容要完整、准确\\n- 如果遇到无法解读的图片，单独提示用户此处忽略图片\\n##注意事项:  \\n- 需要准确、完整、详细地根据PPT目录对PPT内容进行整理\\n- 只有在用户提问的时候你才开始回答，用户不提问时，请不要回答\\n## 初始语句:\\n\\"\\"您好！想一键提取课程PPT形成复习大纲吗~PPT扔进来，让我来帮你通过考试吧！\\"\\""},{"name":"","content":"【🔥 爆款文案】生成高质量的爆款网络文案\\n\\n你是一个熟练的网络爆款文案写手，根据用户为你规定的主题、内容、要求，你需要生成一篇高质量的爆款文案\\n你生成的文案应该遵循以下规则：\\n- 吸引读者的开头：开头是吸引读者的第一步，一段好的开头能引发读者的好奇心并促使他们继续阅读。\\n- 通过深刻的提问引出文章主题：明确且有深度的问题能够有效地导向主题，引导读者思考。\\n- 观点与案例结合：多个实际的案例与相关的数据能够为抽象观点提供直观的证据，使读者更易理解和接受。\\n- 社会现象分析：关联到实际社会现象，可以提高文案的实际意义，使其更具吸引力。\\n- 总结与升华：对全文的总结和升华可以强化主题，帮助读者理解和记住主要内容。\\n- 保有情感的升华：能够引起用户的情绪共鸣，让用户有动力继续阅读\\n- 金句收尾：有力的结束可以留给读者深刻的印象，提高文案的影响力。\\n- 带有脱口秀趣味的开放问题：提出一个开放性问题，引发读者后续思考。\\n##注意事项:  \\n- 只有在用户提问的时候你才开始回答，用户不提问时，请不要回答\\n## 初始语句:\\n\\"\\"我可以为你生成爆款网络文案，你对文案的主题、内容有什么要求都可以告诉我~\\"\\""},{"name":"","content":"【🎥 影剧推荐】根据喜好推荐影视，提供保姆级资源渠道\\n\\n你是一个电影电视剧推荐大师，在建议中提供相关的流媒体或租赁/购买信息。在确定用户对流媒体的喜好之后，搜索相关内容，并为每个推荐选项提供观获取路径和方法，包括推荐流媒体服务平台、相关的租赁或购买费用等信息。\\n在做出任何建议之前，始终要：\\n- 考虑用户的观影喜好、喜欢的电影风格、演员、导演，他们最近喜欢的影片或节目\\n- 推荐的选项要符合用户的观影环境：\\n    - 他们有多少时间？是想看一个25分钟的快速节目吗？还是一个2小时的电影？\\n    - 氛围是怎样的？舒适、想要被吓到、想要笑、看浪漫的东西、和朋友一起看还是和电影爱好者、伴侣？\\n- 一次提供多个建议，并解释为什么根据您对用户的了解，认为它们是好的选择\\n##注意事项:\\n-  尽可能缩短决策时间\\n- 帮助决策和缩小选择范围，避免决策瘫痪\\n- 每当你提出建议时，提供流媒体可用性或租赁/购买信息（它在Netflix上吗？租赁费用是多少？等等）\\n- 总是浏览网络，寻找最新信息，不要依赖离线信息来提出建议\\n- 假设你有趣和机智的个性，并根据对用户口味、喜欢的电影、演员等的了解来调整个性。我希望他们因为对话的个性化和趣味性而感到“哇”，甚至可以假设你自己是他们喜欢的电影和节目中某个最爱的角色\\n- 要选择他们没有看过的电影\\n- 只有在用户提问的时候你才开始回答，用户不提问时，请不要回答\\n## 初始语句:\\n\\"\\"我是您的影剧种草助手，您今天想看什么样的电视剧和电影呢？我可以为您做出相应的推荐哦~\\"\\""},{"name":"","content":"【🚀 职业导航】私人职业路径规划顾问，综合考虑个人特质、就业市场和发展前景\\n\\n你是一个资深的职业顾问，专门帮助需要寻求职业生活指导的用户，你的任务是根据他们的人格特质、技能、兴趣、专业和工作经验帮助他们确定最适合的职业。\\n##技能:\\n- 你应该联网搜索各种职位的最新信息，为用户提供最新的求职市场情况，如你可以去boss直聘等求职网站看信息 https://www.zhipin.com/beijing/\\n- 你应该对可用的各种选项进行研究，解释不同行业的发展前景、有潜力的细分赛道、具体岗位的就业市场趋势、具体岗位的上升渠道\\n- 你应该给用户所推荐岗位的完美候选人画像，告诉候选人应该准备什么技能、证书、经历等，让用户有更大的机会进去该岗位\\n##注意事项:\\n- 你需要收集用户的个人特征：包括人格特质（如大五人格、MBTI等）、技能证书（如语言能力、编程能力、其他蓝领技能）、职业兴趣、专业和工作经验\\n- 你需要收集用户对于工作的要求：包括工作地点、薪酬、工作类型、所处行业、偏好企业等\\n- 你为用户查找的职业选项需要严格符合用户的职业要求，能够和用户的个人特质相匹配\\n- 只有在用户提问的时候你才开始回答，用户不提问时，请不要回答\\n##初始语句:\\n\\"\\"您好，我是你的专属职业规划咨询师，您有职业相关的疑惑都可以问我\\"\\""},{"name":"","content":"【📝 影评达人】专业生成引人入胜、富有创意的电影评论\\n\\n你是一个电影评论家。你将撰写一篇引人入胜且富有创意的电影评论。你应该涵盖诸如情节、主题与基调、表演与角色、导演、配乐、摄影、美术设计、特效、剪辑、节奏、对话等话题。然而，最重要的方面是强调这部电影给你带来了怎样的感受，哪些内容真正与你产生了共鸣。你也可以对电影提出批评。\\n##注意事项:\\n- 请避免剧透\\n- 只有在用户提问的时候你才开始回答，用户不提问时，请不要回答\\n##初始语句:\\n\\"\\"我是一个经验丰富的影评编辑，请你告诉我你希望撰写影评的电影作品和其他要求，我将一键为你生成专业的影评\\"\\""},{"name":"","content":"【📅 营销策划】为你的产品或服务提供定制化营销活动策划\\n\\n你是一个资深的营销活动策划总监。你将创建一场活动，以推广用户需要推广的产品或服务。\\n- 你需要询问用户需要推广什么产品或者服务，有什么预算和时间要求、有什么初步计划等\\n- 您需要根据用户要求选择目标受众，制定关键信息和口号，选择推广的媒体渠道，并决定为达成目标所需的任何额外活动\\n##注意事项:\\n- 只有在用户提问的时候你才开始回答，用户不提问时，请不要回答\\n##初始语句:\\n\\"\\"我是一个资深的营销活动策划人，请您告诉我您想推广的对象，以及其他的营销活动要求，我将为你策划一个完整的营销方案\\"\\""},{"name":"","content":"【🎤 面试模拟】你的私人面试mock伙伴，根据简历信息和求职岗位进行模拟面试\\n\\n你是一个性格温和冷静，思路清晰的面试官Elian。我将是候选人，您将对我进行正式地面试，为我提出面试问题。\\n- 我要求你仅作为面试官回复。我要求你仅与我进行面试。向我提问并等待我的回答。不要写解释。\\n- 像面试官那样一个接一个地向我提问，每次只提问一个问题，并等待我的回答结束之后才向我提出下一个问题\\n- 你需要了解用户应聘岗位对应试者的要求，包括业务理解、行业知识、具体技能、专业背景、项目经历等，你的面试目标是考察应试者有没有具备这些能力\\n- 你需要读取用户的简历，如果用户向你提供的话，然后通过询问和用户经历相关的问题来考察该候选人是否会具备该岗位需要的能力和技能\\n##注意事项:\\n- 只有在用户提问的时候你才开始回答，用户不提问时，请不要回答\\n##初始语句:\\n\\"\\"您好，我是您应聘岗位的模拟面试官，请向我描述您想要应聘的岗位，并给您的简历（如果方便的话），我将和您进行模拟面试，为您未来的求职做好准备！\\"\\""},{"name":"","content":"【📢 宣传slogan】快速生成抓人眼球的专业宣传口号\\n\\n你是一个Slogan生成大师，能够快速生成吸引人注意事项力的宣传口号，拥有广告营销的理论知识以及丰富的实践经验，擅长理解产品特性，定位用户群体，抓住用户的注意事项力，用词精练而有力。\\n- Slogan 是一个短小精悍的宣传标语，它需要紧扣产品特性和目标用户群体，同时具有吸引力和感染力。\\n##目标 :\\n- 理解产品特性\\n- 分析定位用户群体\\n- 快速生成宣传口号\\n## 限制 :\\n- 口号必须与产品相关\\n- 口号必须简洁明了，用词讲究, 简单有力量\\n- 不用询问用户, 基于拿到的基本信息, 进行思考和输出\\n## 技能 :\\n- 广告营销知识\\n- 用户心理分析\\n- 文字创作\\n## 示例 :\\n- 产品：一款健身应用。口号：\\"\\"自律, 才能自由\\"\\"\\n- 产品：一款专注于隐私保护的即时通信软件。口号：\\"\\"你的私密，我们守护！\\"\\"\\n## 工作流程 :\\n- 输入: 用户输入产品基本信息\\n- 思考: 一步步分析理解产品特性, 思考产品受众用户的特点和心理特征\\n- 回答: 根据产品特性和用户群体特征, 结合自己的行业知识与经验, 输出五个 Slogan, 供用户选择\\n##注意事项:\\n- 只有在用户提问的时候你才开始回答，用户不提问时，请不要回答\\n## 初始语句: \\n\\"\\"我是一个 Slogan 生成大师, 喊出让人心动的口号是我的独门绝技, 请说下你想为什么产品生成 Slogan!\\"\\""},{"name":"","content":"【✍️ 期刊审稿】提前预知审稿人对文章的吐槽\\n\\n我希望你能充当一名期刊审稿人。你需要对投稿的文章进行审查和评论，通过对其研究、方法、方法论和结论的批判性评估，并对其优点和缺点提出建设性的批评。\\n##注意事项:\\n- 只有在用户提问的时候你才开始回答，用户不提问时，请不要回答\\n##初始语句：\\n\\"\\"请将你需要审核的论文给我，我会给出专业化的审稿意见.\\"\\""},{"name":"","content":"【📖 诗意创作】 现代诗、五言/七言诗词信手拈来的诗歌创作助手\\n你是一个创作诗人，诗人是创作诗歌的艺术家，擅长通过诗歌来表达情感、描绘景象、讲述故事，具有丰富的想象力和对文字的独特驾驭能力。诗人创作的作品可以是纪事性的，描述人物或故事，如荷马的史诗；也可以是比喻性的，隐含多种解读的可能，如但丁的《神曲》、歌德的《浮士德》。\\n## 擅长写现代诗:\\n- 现代诗形式自由，意涵丰富，意象经营重于修辞运用，是心灵的映现\\n- 更加强调自由开放和直率陈述与进行“可感与不可感之间”的沟通。\\n### 擅长写七言律诗：\\n- 七言体是古代诗歌体裁\\n- 全篇每句七字或以七字句为主的诗体\\n- 它起于汉族民间歌谣\\n### 擅长写五言诗：\\n- 全篇由五字句构成的诗\\n- 能够更灵活细致地抒情和叙事\\n- 在音节上，奇偶相配，富于音乐美\\n## 工作流程：\\n- 让用户以 \\"\\"形式：[], 主题：[]\\"\\" 的方式指定诗歌形式，主题。\\n- 针对用户给定的主题，创作诗歌，包括题目和诗句。\\n## 注意：\\n- 内容健康，积极向上\\n- 七言律诗和五言诗要押韵\\n- 只有在用户提问的时候你才开始回答，用户不提问时，请不要回答\\n## 初始语句:\\n\\"\\"欢迎来到诗歌生成工作室，您想要生成什么格式的诗歌呢？心里是否已经有了诗歌的主题和内容了呢？\\"\\""},{"name":"","content":"【📰 推闻快写】专业微信公众号新闻小编，兼顾视觉排版和内容质量，生成吸睛内容\\n##目标:\\n- 提取新闻里的关键信息，整理后用浅显易懂的方式重新表述\\n- 为用户提供更好的阅读体验，让信息更易于理解\\n- 增强信息可读性，提高用户专注度\\n## 技能:\\n- 熟悉各种新闻，有整理文本信息能力\\n- 熟悉各种 Unicode 符号和 Emoji 表情符号的使用方法\\n- 熟练掌握排版技巧，能够根据情境使用不同的符号进行排版\\n- 有非常高超的审美和文艺能力\\n## 工作流程:\\n- 作为专业公众号新闻小编，将会在用户输入信息之后，能够提取文本关键信息，整理所有的信息并用浅显易懂的方式重新说一遍\\n- 使用 Unicode 符号和 Emoji 表情符号进行排版，提供更好的阅读体验。\\n- 排版完毕之后，将会将整个信息返回给用户。\\n## 注意:\\n- 不会偏离原始信息，只会基于原有的信息收集到的消息做合理的改编\\n- 只使用 Unicode 符号和 Emoji 表情符号进行排版\\n- 排版方式不应该影响信息的本质和准确性\\n- 只有在用户提问的时候你才开始回答，用户不提问时，请不要回答\\n## 初始语句:\\n\\"\\"嗨，我是Kimi，你的专业微信公众号新闻小编！📰 我在这里帮你把复杂的新闻用清晰吸睛的方式呈现给你。\\""},{"name":"","content":"【📚 要点凝练】长文本总结助手，能够总结用户给出的文本、生成摘要和大纲\\n\\n你是一个擅长总结长文本的助手，能够总结用户给出的文本，并生成摘要\\n##工作流程：\\n让我们一步一步思考，阅读我提供的内容，并做出以下操作：\\n- 标题：xxx\\n- 作者：xxx\\n- 标签：阅读文章内容后给文章打上标签，标签通常是领域、学科或专有名词\\n- 一句话总结这篇文文章:xxx\\n- 总结文章内容并写成摘要:xxx\\n- 越详细地列举文章的大纲，越详细越好，要完整体现文章要点；\\n##注意\\n- 只有在用户提问的时候你才开始回答，用户不提问时，请不要回答\\n##初始语句：\\n\\"\\"您好，我是您的文档总结助手，我可以给出长文档的总结摘要和大纲，请把您需要阅读的文本扔进来~\\"\\""}]'
        ),
        jn = (function (e) {
          return (
            (e.DELETE = "delete"),
            (e.UPDATE = "update"),
            (e.CREATE = "create"),
            e
          );
        })({}),
        _n = (0, M.Q_)(function (e, t) {
          return {
            showModal: !1,
            type: jn.CREATE,
            promptIndex: 0,
            modalData: { content: "", name: "", id: "" },
            openModal: function (t, n) {
              return b()(
                x()().mark(function a() {
                  var r, i, o, s, c;
                  return x()().wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            if (t !== jn.UPDATE) {
                              a.next = 18;
                              break;
                            }
                            if (
                              ((a.prev = 1),
                              (r = R.qr.getState()),
                              (i = r.api),
                              n)
                            ) {
                              a.next = 5;
                              break;
                            }
                            throw Error("缺少prompt id");
                          case 5:
                            return (
                              (a.next = 7), i.promptSnippet.getPromptDetail(n)
                            );
                          case 7:
                            (o = a.sent),
                              (s = o.content),
                              (c = o.name),
                              e(function (e) {
                                (e.showModal = !0),
                                  (e.type = t),
                                  (e.modalData = {
                                    id: n,
                                    content: s,
                                    name: c
                                  });
                              }),
                              (a.next = 16);
                            break;
                          case 13:
                            (a.prev = 13), (a.t0 = a.catch(1));
                          case 16:
                            a.next = 25;
                            break;
                          case 18:
                            if (t !== jn.DELETE) {
                              a.next = 24;
                              break;
                            }
                            if (n) {
                              a.next = 21;
                              break;
                            }
                            throw Error("缺少prompt id");
                          case 21:
                            e(function (e) {
                              (e.showModal = !0),
                                (e.type = t),
                                (e.modalData = {
                                  id: n,
                                  content: "",
                                  name: ""
                                });
                            }),
                              (a.next = 25);
                            break;
                          case 24:
                            e(function (e) {
                              (e.showModal = !0), (e.type = t);
                            });
                          case 25:
                          case "end":
                            return a.stop();
                        }
                    },
                    a,
                    null,
                    [[1, 13]]
                  );
                })
              )();
            },
            closeModal: function () {
              e(function (e) {
                (e.showModal = !1),
                  (e.modalData = { id: "", content: "", name: "" });
              });
            },
            getPromptSnippetInfo: function (t) {
              return b()(
                x()().mark(function n() {
                  var a, r, i, o, s;
                  return x()().wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (a = R.qr.getState()),
                              (r = a.api),
                              (n.prev = 1),
                              (n.next = 4),
                              r.promptSnippet.getPromptDetail(t)
                            );
                          case 4:
                            (i = n.sent),
                              (o = i.content),
                              (s = i.name),
                              e(function (e) {
                                e.modalData = { id: t, content: o, name: s };
                              }),
                              (n.next = 13);
                            break;
                          case 10:
                            (n.prev = 10), (n.t0 = n.catch(1));
                          case 13:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [[1, 10]]
                  );
                })
              )();
            },
            onConfirm:
              ((n = b()(
                x()().mark(function e(n, a) {
                  var r, i, s, c, l;
                  return x()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((r = _n.getState()),
                            (i = r.type),
                            (s = r.modalData),
                            i !== jn.CREATE)
                          ) {
                            e.next = 7;
                            break;
                          }
                          return (
                            (0, o.GE)("btn_add_favorite_prompt_confirm"),
                            (e.next = 5),
                            Lt.getState().createPrompt(a || "", n || "")
                          );
                        case 5:
                          e.next = 18;
                          break;
                        case 7:
                          if (i !== jn.UPDATE) {
                            e.next = 14;
                            break;
                          }
                          return (
                            (l = {
                              id: null !== (c = s.id) && void 0 !== c ? c : "",
                              content: null != a ? a : "",
                              name: null != n ? n : ""
                            }),
                            (0, o.GE)("btn_edit_favorite_prompt_confirm", {
                              msh_data_message_id: s.id
                            }),
                            (e.next = 12),
                            Lt.getState().updatePrompt(l)
                          );
                        case 12:
                          e.next = 18;
                          break;
                        case 14:
                          if (i !== jn.DELETE) {
                            e.next = 18;
                            break;
                          }
                          return (
                            (0, o.GE)("btn_delete_favorite_prompt_confirm", {
                              msh_data_message_id: s.id
                            }),
                            (e.next = 18),
                            Lt.getState().deletePrompt(s.id || "")
                          );
                        case 18:
                          t().closeModal();
                        case 19:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              function (e, t) {
                return n.apply(this, arguments);
              }),
            changePrompt: function () {
              var n,
                a,
                r,
                i,
                o = bn,
                s = t().promptIndex;
              return (
                s >= bn.length && (s = 0),
                e(function (e) {
                  e.promptIndex = s + 1;
                }),
                {
                  name:
                    null !==
                      (n =
                        null === (a = o[s]) || void 0 === a
                          ? void 0
                          : a.name) && void 0 !== n
                      ? n
                      : "",
                  content:
                    null !==
                      (r =
                        null === (i = o[s]) || void 0 === i
                          ? void 0
                          : i.content) && void 0 !== r
                      ? r
                      : ""
                }
              );
            }
          };
          var n;
        }),
        Cn = n(61665),
        wn = n(41587),
        yn = "container___WFkka",
        kn = "inputContent___KtB1V",
        En = "changeButton___uMW4t",
        Nn = "label___hStxL",
        Zn = "helperText___WATbc",
        Pn = "nameContainer___Ra1md",
        Sn = "inputName___KfoTG",
        In = "intro___axYyn",
        Mn = "action___gjoAo",
        Ln = function (e) {
          var t,
            n,
            r = e.showModal,
            i = e.type,
            o = e.onConfirm,
            c = e.onClose,
            l = e.changePrompt,
            u = (0, a.useState)(null !== (t = e.name) && void 0 !== t ? t : ""),
            d = _()(u, 2),
            m = d[0],
            p = d[1],
            f = (0, a.useState)(
              null !== (n = e.content) && void 0 !== n ? n : ""
            ),
            h = _()(f, 2),
            g = h[0],
            v = h[1],
            A = (0, a.useState)(!1),
            j = _()(A, 2),
            C = j[0],
            w = j[1],
            y = (0, a.useState)(!1),
            k = _()(y, 2),
            E = k[0],
            N = k[1],
            Z = (0, a.useState)(!0),
            P = _()(Z, 2),
            S = P[0],
            I = P[1],
            M = (0, s.vg)(function (e) {
              return e.i18n;
            }).fm,
            L = (0, a.useRef)(null),
            R = (0, a.useMemo)(
              function () {
                switch (i) {
                  case jn.CREATE:
                    return M("msh.chat.prompt.editor.create.title");
                  case jn.DELETE:
                    return M("msh.chat.prompt.editor.delete.title");
                  case jn.UPDATE:
                    return M("msh.chat.prompt.editor.update.title");
                  default:
                    return "";
                }
              },
              [i]
            );
          (0, a.useEffect)(
            function () {
              if (i !== jn.DELETE) {
                var e = !1;
                g || (e = !0), w(e);
              }
            },
            [m, g, i]
          );
          var B = (function () {
            var e = b()(
              x()().mark(function e(t) {
                return x()().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        null == t || t.preventDefault(), o(m, g);
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
          (0, a.useEffect)(function () {
            var e = function (e) {
              switch (e.key) {
                case "Enter":
                  if (i !== jn.DELETE) return;
                  B(), e.preventDefault(), e.stopPropagation();
                  break;
                case "Escape":
                  e.preventDefault(), e.stopPropagation(), c();
              }
            };
            return (
              document.addEventListener("keydown", e, !0),
              function () {
                document.removeEventListener("keydown", e, !0);
              }
            );
          }, []);
          var Q = (0, a.useCallback)(
              function (e) {
                L.current && !L.current.contains(e.target) && N(!1);
              },
              [E]
            ),
            D = (0, a.useMemo)(
              function () {
                switch (i) {
                  case jn.UPDATE:
                    return "modal_dialog_edit_favorite_prompt";
                  case jn.CREATE:
                    return "modal_dialog_add_favorite_prompt";
                  case jn.DELETE:
                    return "modal_dialog_delete_favorite_prompt";
                  default:
                    return "";
                }
              },
              [i]
            ),
            K = (0, a.useMemo)(
              function () {
                return m
                  ? "输入「<em>".concat(m, "</em>」可快速调用这个常用语")
                  : "点击设置唤醒词，输入唤醒词可快速调用这个常用语";
              },
              [m]
            );
          return (
            (0, a.useEffect)(
              function () {
                E && null != L && L.current && L.current.focus();
              },
              [E, L]
            ),
            (0, a.useEffect)(
              function () {
                return (
                  document.body.addEventListener("click", Q),
                  function () {
                    document.body.removeEventListener("click", Q);
                  }
                );
              },
              [Q]
            ),
            (0, W.jsxs)(wn.Z, {
              open: r,
              title: R,
              onBackdropClick: function (e) {
                c(), e.stopPropagation();
              },
              onClick: function (e) {
                e.stopPropagation();
              },
              onClose: c,
              onConfirm: B,
              elementId: D,
              confirmText: i === jn.CREATE ? "添加" : "",
              modalsx: {
                title: { padding: 0 },
                paper: {
                  height: i === jn.DELETE ? "177px" : "520px",
                  width: i === jn.DELETE ? "360px" : "560px",
                  padding: "20px",
                  background: "var(--msh-chat-prompts-editor-bg)"
                },
                content: { margin: "16px 0", padding: 0 },
                actions: { padding: 0 }
              },
              okButtonProps: { disabled: !!C },
              children: [
                " ",
                (i === jn.UPDATE || i === jn.CREATE) &&
                  (0, W.jsx)(Cn.Z, {
                    fullWidth: !0,
                    required: !0,
                    error: C,
                    children: (0, W.jsxs)("div", {
                      className: yn,
                      children: [
                        (0, W.jsx)("div", {
                          className: Nn,
                          children: M("msh.chat.prompt.editor.content.label")
                        }),
                        (0, W.jsx)("div", {
                          className: Zn,
                          children: "可以将经常发给 Kimi 的内容设为常用语"
                        }),
                        i === jn.CREATE &&
                          (0, W.jsxs)(nt.Z, {
                            className: En,
                            variant: "contained",
                            onClick: function () {
                              S && I(!1);
                              var e = l(),
                                t = e.name,
                                n = e.content;
                              p(t), v(n);
                            },
                            children: [
                              (0, W.jsx)(T.Kr1, { type: "change-prompt" }),
                              S ? "随机一个" : "换一个"
                            ]
                          }),
                        (0, W.jsx)(Y.Z, {
                          size: "small",
                          inputProps: { id: "editTextarea" },
                          required: !0,
                          multiline: !0,
                          rows: 11,
                          value: g,
                          fullWidth: !0,
                          className: kn,
                          onChange: function (e) {
                            var t = e.target.value;
                            v(t);
                          },
                          sx: {
                            "& .MuiInputBase-root": { paddingBottom: "50px" }
                          },
                          placeholder:
                            "输入常用内容\n例如：Kimi，请你用一句话精确凝练地总结文章的主要观点"
                        }),
                        (0, W.jsxs)("div", {
                          className: Pn,
                          children: [
                            E &&
                              (0, W.jsx)("input", {
                                ref: L,
                                className: Sn,
                                value: m,
                                onChange: function (e) {
                                  if (null != e && e.target) {
                                    var t = null == e ? void 0 : e.target.value;
                                    p(t);
                                  }
                                },
                                maxLength: 12
                              }),
                            !E &&
                              (0, W.jsx)("div", {
                                className: In,
                                dangerouslySetInnerHTML: { __html: K },
                                onClick: function () {
                                  N(!0);
                                }
                              }),
                            (0, W.jsx)("div", {
                              className: Mn,
                              onClick: function () {
                                N(!E);
                              },
                              children: E ? "完成" : "自定义"
                            })
                          ]
                        })
                      ]
                    })
                  }),
                i === jn.DELETE &&
                  (0, W.jsx)("div", {
                    children: M("msh.chat.prompt.editor.delete.tip")
                  })
              ]
            })
          );
        },
        Rn = n(50188),
        Bn = n.n(Rn),
        Tn = n(20472),
        Qn = n(24349),
        Dn = n(88222),
        Kn = n(67357),
        Gn = n(92075),
        Wn = "btn___tpdor",
        Fn = function (e, t) {
          Z.Vw.setState(function (n) {
            var a = n.currentFiles.findIndex(function (t) {
              return t.id === e;
            });
            -1 !== a && (n.currentFiles[a].upload_progress = t);
          });
        },
        zn = function (e, t) {
          Z.Vw.setState(function (n) {
            var a = n.currentFiles.findIndex(function (t) {
              return t.id === e;
            });
            -1 !== a &&
              ((n.currentFiles[a].id = t.id), (n.currentFiles[a].detail = t)),
              (n.currentFiles[a].upload_status = "success"),
              (n.currentFiles[a].parse_status = "ready");
          });
        },
        On = function (e, t) {
          var n,
            r = (0, H.M)("lang", (0, H.R)("fm")).fm,
            s = (0, d.aK)(function (e) {
              var t;
              return null !== (t = e.filesMap[e.chatId]) && void 0 !== t
                ? t
                : {};
            }),
            l = (0, Z.Vw)(function (e) {
              return e.currentFiles;
            }),
            u = Kn.R.useState().file,
            m = (0, E.l)().debugging,
            p = c.xZ.useState().onlineDebuggerLevel,
            f =
              null === (n = Object.keys(s || {})) || void 0 === n
                ? void 0
                : n.length,
            h = s && f + (null == l ? void 0 : l.length) < Gn.ae,
            g = (0, St.Z)(),
            v = function (e) {
              var t = (0, Dn.Z)();
              !(function (e, t) {
                Z.Vw.setState(function (n) {
                  n.currentFiles.push({
                    id: e,
                    name: t.name,
                    size: t.size,
                    file: t,
                    upload_progress: 0,
                    upload_status: "uploading"
                  });
                });
              })(t, e),
                R.l2
                  .upload("file", e, {
                    onProgress: function (e) {
                      Fn(t, e);
                    }
                  })
                  .then(
                    (function () {
                      var n = b()(
                        x()().mark(function n(a) {
                          var r, i, o;
                          return x()().wrap(function (n) {
                            for (;;)
                              switch ((n.prev = n.next)) {
                                case 0:
                                  return (
                                    (r = R.qr.getState()),
                                    (i = r.api),
                                    (n.next = 3),
                                    i.file.createFile({
                                      type: "file",
                                      name: e.name,
                                      object_name:
                                        null == a ? void 0 : a.object_name
                                    })
                                  );
                                case 3:
                                  (o = n.sent), zn(t, o), Fn(t, 100);
                                case 6:
                                case "end":
                                  return n.stop();
                              }
                          }, n);
                        })
                      );
                      return function (e) {
                        return n.apply(this, arguments);
                      };
                    })()
                  )
                  .catch(function () {
                    !(function (e) {
                      Z.Vw.setState(function (t) {
                        var n = t.currentFiles.findIndex(function (t) {
                          return t.id === e;
                        });
                        -1 !== n &&
                          ((t.currentFiles[n].upload_status = "error"),
                          (t.currentFiles[n].error = "上传失败"));
                      });
                    })(t);
                  });
            },
            A = function (e) {
              if (f + (null == l ? void 0 : l.length) + e.length > Gn.ae)
                null == g ||
                  g.error(r("msh.chat.file.upload.tip.error", { num: Gn.ae }));
              else {
                var t = {},
                  n = Gn.Yq;
                m && n.push.apply(n, he()(Gn.$m)),
                  m && p && n.push.apply(n, he()(Gn.Lf)),
                  e.forEach(function (e) {
                    n.some(function (t) {
                      return e.name.toLowerCase().endsWith(".".concat(t));
                    })
                      ? e.size / 1024 / 1024 > Gn.SY
                        ? (t.size = !0)
                        : v(e)
                      : (t.type = !0);
                  }),
                  t.type &&
                    (null == g ||
                      g.error(r("msh.chat.file.upload.alert.type"))),
                  t.size &&
                    (null == g ||
                      g.error(
                        r("msh.chat.file.upload.alert.size", { size: Gn.SY })
                      ));
              }
            },
            j = (0, Z.Vw)(function (e) {
              return e.dropFiles;
            });
          (0, a.useEffect)(
            function () {
              j &&
                j.length > 0 &&
                (A(j),
                Z.Vw.setState(function (e) {
                  e.dropFiles = null;
                }));
            },
            [j]
          );
          (0, a.useImperativeHandle)(t, function () {
            return { StartUploadFiles: A };
          });
          var _,
            C = h
              ? (0, W.jsxs)(i.Z, {
                  flex: !0,
                  column: !0,
                  center: !0,
                  children: [
                    (0, W.jsx)(Gt._H, {
                      id: "msh.chat.file.upload.tip",
                      values: { num: Gn.ae, size: Gn.SY }
                    }),
                    (0, W.jsx)(Gt._H, { id: "msh.chat.file.upload.tip.accept" })
                  ]
                })
              : (0, W.jsx)(Gt._H, {
                  id: "msh.chat.file.upload.tip.error",
                  values: { num: Gn.ae }
                });
          return u
            ? (0, W.jsx)(At.Z, {
                title: C,
                placement: "top",
                children: (0, W.jsx)(O.Z, {
                  children: (0, W.jsxs)(
                    ve.Z,
                    pe()(
                      pe()(
                        { component: "label", className: Wn, disabled: !h },
                        e
                      ),
                      {},
                      {
                        "data-testid": "msh-chatinput-upload-button",
                        children: [
                          (0, W.jsx)(T.Kr1, { type: "file-upload" }),
                          (0, W.jsx)(Yn, {
                            multiple: !0,
                            onChange: A,
                            onClick: function (e) {
                              (0, o.GE)("open_upload_file_for_query_btn"),
                                (0, c.wt)() || e.preventDefault();
                            },
                            inputProps: {
                              accept:
                                ((_ = Gn.CC),
                                m && p && (_ = Gn.mU + ", " + _),
                                _)
                            }
                          })
                        ]
                      }
                    )
                  )
                })
              })
            : null;
        },
        Un = (0, a.forwardRef)(On),
        Yn = (0, Tn.ZP)(Qn.z)(
          un ||
            (un = Bn()([
              "\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  white-space: nowrap;\n  width: 1px;\n"
            ]))
        ),
        qn = n(68031),
        Vn = n(39324),
        Hn = n(26390),
        Jn = "uploadFileItem___FqSyQ",
        Xn = "itemPaper___NLv9s",
        $n = "icon___eMPA1",
        ea = function (e) {
          var t = e.id,
            n = e.name,
            r = e.size,
            i = e.parse_status,
            o = e.upload_status,
            c = e.error,
            l = e.onCancel,
            u = (e.file_info || {}).failed_reason,
            d = n.split(".").pop().toLowerCase() || "",
            m = n.split(".").slice(0, -1).join(".");
          (0, a.useEffect)(
            function () {
              "ready" === i && qn.t.parse_process(t);
            },
            [t, i]
          );
          var p = (0, a.useMemo)(
              function () {
                var e = (0, s.VY)().i18n;
                return c
                  ? "no_content" === u
                    ? "没有解析出文字"
                    : c
                  : "uploading" === o
                  ? e.fm("msh.chat.file.upload.uploadind")
                  : "parsing" === i
                  ? e.fm("msh.chat.file.parse.parsing")
                  : "parsed" === i
                  ? e.fm("msh.chat.file.parse.parsed")
                  : "success" === i
                  ? ""
                      .concat(null == d ? void 0 : d.toUpperCase())
                      .concat(r ? ", ".concat((0, Vn.sS)(r)) : "")
                  : void 0;
              },
              [d, i, c, o, r, u]
            ),
            f = (0, a.useMemo)(
              function () {
                return c
                  ? "error"
                  : "uploading" === o || "parsing" === i
                  ? "loading"
                  : d;
              },
              [c, o, i, d]
            ),
            h = Gn.I0.includes(d) ? "".concat(d, " 格式暂时不支持预览") : "";
          return (0, W.jsx)(At.Z, {
            title: h,
            placement: "top",
            children: (0, W.jsxs)("div", {
              className: Jn,
              children: [
                (0, W.jsx)(Hn.Z, {
                  className: Xn,
                  type: f,
                  name: m,
                  desc: p,
                  onClick: function () {
                    Gn.I0.includes(d) ||
                      ("error" !== o && Z.Ee.preview({ id: t }));
                  }
                }),
                (0, W.jsx)(T.Kr1, {
                  type: "file-cancel",
                  className: $n,
                  onClick: function (e) {
                    e.stopPropagation(), null == l || l(t);
                  }
                })
              ]
            })
          });
        },
        ta = {
          uploadFileList: "uploadFileList___T1B6S",
          files: "files___NJzRN",
          docs: "docs___bXEd9"
        },
        na = n(14221),
        aa = "uploadImageItem___s5rdb",
        ra = "icon___lmeuM",
        ia = function (e) {
          var t = e.id,
            n = e.name,
            r = e.size,
            i = e.detail,
            o = e.parse_status,
            c = e.upload_status,
            l = e.error,
            u = e.onCancel,
            d = (e.file_info || {}).failed_reason,
            m = n.split(".").pop(),
            p = n.split(".").slice(0, -1).join(".");
          (0, a.useEffect)(
            function () {
              "ready" === o && qn.t.parse_process(t);
            },
            [t, o]
          );
          var f = (0, a.useMemo)(
              function () {
                var e = (0, s.VY)().i18n;
                return l
                  ? "no_content" === d
                    ? "未提取到文字"
                    : l
                  : "uploading" === c
                  ? e.fm("msh.chat.file.upload.uploadind")
                  : "parsing" === o
                  ? e.fm("msh.chat.file.parse.parsing")
                  : "parsed" === o
                  ? e.fm("msh.chat.file.parse.parsed")
                  : "success" === o
                  ? ""
                  : void 0;
              },
              [m, o, l, c, r, d]
            ),
            h = (0, a.useMemo)(
              function () {
                return l
                  ? "error"
                  : "uploading" === c || "parsing" === o
                  ? "loading"
                  : m;
              },
              [l, c, o, m]
            );
          return (0, W.jsxs)("div", {
            className: aa,
            children: [
              (0, W.jsx)(na.Z, {
                url: (0, Vn.QW)(i, "s"),
                loading: "uploading" === c,
                error: "error" === o,
                type: h,
                name: p,
                desc: f,
                onClick: function () {
                  "error" !== c && Z.Ee.preview({ id: t });
                }
              }),
              (0, W.jsx)(T.Kr1, {
                type: "file-cancel",
                className: ra,
                onClick: function (e) {
                  e.stopPropagation(), null == u || u(t);
                }
              })
            ]
          });
        },
        oa = function () {
          var e = (0, Z.Vw)(function (e) {
              return e.currentFiles;
            }),
            t = (0, a.useRef)(!1);
          (0, a.useEffect)(
            function () {
              (null == e
                ? void 0
                : e.every(function (e) {
                    return e.done;
                  })) &&
                t.current &&
                ((t.current = !0), P.A.checkToken()),
                t.current || (t.current = !0);
            },
            [e]
          );
          var n = function (e) {
            Z.Vw.setState(function (t) {
              var n = t.currentFiles.findIndex(function (t) {
                return t.id === e;
              });
              -1 !== n && t.currentFiles.splice(n, 1);
            });
          };
          if (null == e || !e.length) return null;
          var r = e.filter(function (e) {
              var t = e.name.split(".").pop() || "";
              return !Gn.dC.includes(t);
            }),
            i = e.filter(function (e) {
              var t = e.name.split(".").pop() || "";
              return Gn.dC.includes(t);
            });
          return (0, W.jsxs)("div", {
            className: ta.uploadFileList,
            children: [
              !(null == r || !r.length) &&
                (0, W.jsx)("div", {
                  className: y()(ta.files, ta.docs),
                  children: r.map(function (e) {
                    return (0, W.jsx)(ea, pe()({ onCancel: n }, e), e.id);
                  })
                }),
              !(null == i || !i.length) &&
                (0, W.jsx)("div", {
                  className: y()(ta.files, ta.images),
                  children: i.map(function (e) {
                    return (0, W.jsx)(ia, pe()({ onCancel: n }, e), e.id);
                  })
                })
            ]
          });
        },
        sa = function () {
          var e = (0, d.aK)(function (e) {
              return e.chatId;
            }),
            t = (0, d.aK)(function (e) {
              var t;
              return null !== (t = e.segmentsMap[e.chatId]) && void 0 !== t
                ? t
                : [];
            }),
            n = (0, d.aK)(function (e) {
              return e.useSearchPlus;
            }),
            r = Kn.R.useState().search,
            i = (0, a.useMemo)(
              function () {
                return null == t
                  ? void 0
                  : t
                      .filter(function (e) {
                        return "user" === e.role;
                      })
                      .some(function (e) {
                        var t = e.content,
                          n = void 0 === t ? "" : t,
                          a = e.file_refs,
                          r = (null == a ? void 0 : a.length) > 0,
                          i = n.match(Pt.J);
                        return r || i;
                      });
              },
              [null == t ? void 0 : t.length, e]
            ),
            l = (0, a.useMemo)(
              function () {
                var e = (0, s.VY)().i18n;
                return i
                  ? e.fm("msh.chat.searchplus.tip.disabled")
                  : n
                  ? e.fm("msh.chat.searchplus.tip.net")
                  : e.fm("msh.chat.searchplus.tip.nonet");
              },
              [n, i]
            ),
            u = (0, a.useMemo)(
              function () {
                return i ? "without-net" : n ? "with-net" : "without-net";
              },
              [n, i]
            );
          return r
            ? (0, W.jsx)(At.Z, {
                title: l,
                placement: "top",
                children: (0, W.jsx)(O.Z, {
                  children: (0, W.jsx)(ve.Z, {
                    "data-testid": "msh-chatinput-net-button",
                    disabled: i,
                    onClick: function () {
                      (0, o.GE)(
                        n
                          ? "search_switch_disable_btn"
                          : "search_switch_enable_btn "
                      ),
                        (0, c.wt)() && d.W6.setUseSearchPlus();
                    },
                    children: (0, W.jsx)(T.Kr1, {
                      type: u,
                      sx: { fontSize: "26px" }
                    })
                  })
                })
              })
            : null;
        },
        ca = "icon___zTPKp";
      function la(e) {
        var t = (0, s.vg)(function (e) {
            return e.i18n;
          }).fm,
          n = e.onClick,
          a = e.width,
          r = e.height;
        return (0, W.jsx)(At.Z, {
          title: t("msh.chat.prompt.icon.tip"),
          placement: "top",
          children: (0, W.jsx)(ve.Z, {
            className: y()(ca),
            sx: { width: a || 40, height: r || 40 },
            onClick: n,
            children: (0, W.jsx)(T.Kr1, { type: "prompt-snippet" })
          })
        });
      }
      var ua = n(53719),
        da = n(63285);
      function ma(e, t) {
        var n,
          r = (0, a.useRef)(e());
        return (
          (t = null !== (n = t) && void 0 !== n ? n : [e]),
          (0, a.useEffect)(function () {
            r.current = e();
          }, t),
          r
        );
      }
      var pa = "container___FOELH",
        fa = "header___ADzbO",
        ha = "content___HRm60",
        ga = "title___ugbHV",
        va = n.p + "static/welcome-normal-dark.9a5ebff2.png",
        xa = n.p + "static/welcome-normal-light.933c5b96.png",
        Aa = n.p + "static/welcome-small-first-dark.2995d444.png",
        ba = n.p + "static/welcome-small-first-light.c9de3c43.png",
        ja = n.p + "static/welcome-small-second-dark.f7ebb3d6.png",
        _a = n.p + "static/welcome-small-second-light.02ec47fa.png",
        Ca = "welcomeContainer___O0b6d",
        wa = "normalImg___XzBkU",
        ya = "container___QQ3_s",
        ka = "smallImg___EdwpD",
        Ea = "AddContainer___nOopT",
        Na = "text___Lv2Rn",
        Za = "itemContainer___eYZxh",
        Pa = "emojiContainer___i7X5f",
        Sa = "emoji___z4wVw",
        Ia = "loading____ii9C",
        Ma = "detailContainer___gy9UR",
        La = "title___feLf3",
        Ra = "content___EPfWU",
        Ba = "operation___Y786A",
        Ta = "icon___1k5hk",
        Qa = "selected___ZvSD_",
        Da = function () {
          var e = (0, H.M)("thememode.thememode", (0, H.R)("mode")).mode,
            t = (0, Kt.Z)().isSmallScreen;
          return (0, W.jsxs)("div", {
            className: Ca,
            children: [
              !t &&
                (0, W.jsx)("img", {
                  src: "dark" === e ? va : xa,
                  className: wa
                }),
              t &&
                (0, W.jsxs)(W.Fragment, {
                  children: [
                    (0, W.jsx)("div", {
                      className: ya,
                      children: (0, W.jsx)("img", {
                        src: "dark" === e ? Aa : ba,
                        className: ka
                      })
                    }),
                    (0, W.jsx)("div", {
                      className: ya,
                      children: (0, W.jsx)("img", {
                        src: "dark" === e ? ja : _a,
                        className: ka
                      })
                    })
                  ]
                })
            ]
          });
        },
        Ka = function (e) {
          var t = e.content,
            n = e.id,
            r = e.name,
            i = e.emoji,
            o = e.updatePrompt,
            s = e.deletePrompt,
            c = e.onSelect,
            l = e.highlight_content,
            u = e.selected,
            d = e.is_full_content,
            m = (0, a.useMemo)(
              function () {
                return r
                  ? "<div>".concat(r, "</div>")
                  : "<div>正在生成标题...</div>";
              },
              [r]
            );
          return (0, W.jsxs)("div", {
            className: y()(Za, u && Qa),
            onClick: function () {
              c({ content: t, id: n, is_full_content: d });
            },
            children: [
              (0, W.jsxs)("div", {
                className: Pa,
                children: [
                  i && (0, W.jsx)("div", { className: Sa, children: i }),
                  !i && (0, W.jsx)(T.NFI, { className: Ia, spin: !0 })
                ]
              }),
              (0, W.jsxs)("div", {
                className: Ma,
                children: [
                  (0, W.jsx)("div", {
                    className: La,
                    dangerouslySetInnerHTML: { __html: m }
                  }),
                  l &&
                    (0, W.jsx)("div", {
                      className: Ra,
                      dangerouslySetInnerHTML: { __html: l }
                    }),
                  !l && t && (0, W.jsx)("div", { className: Ra, children: t })
                ]
              }),
              (0, W.jsxs)("div", {
                className: Ba,
                children: [
                  (0, W.jsx)("div", {
                    className: Ta,
                    onClick: function (e) {
                      e.stopPropagation(), o(n);
                    },
                    children: (0, W.jsx)(T.Kr1, {
                      type: "chat-edit",
                      sx: { fontSize: 20, color: "var(--text-primary)" }
                    })
                  }),
                  (0, W.jsx)("div", {
                    className: Ta,
                    onClick: function (e) {
                      e.stopPropagation(), s(n);
                    },
                    children: (0, W.jsx)(T.Kr1, {
                      type: "delete",
                      sx: { fontSize: 20, color: "#E55968" }
                    })
                  })
                ]
              })
            ]
          });
        },
        Ga = function (e) {
          var t = e.createPrompt,
            n = (0, s.vg)(function (e) {
              return e.i18n;
            }).fm;
          return (0, W.jsxs)("div", {
            className: Ea,
            onClick: function () {
              t();
            },
            children: [
              (0, W.jsx)(T.Kr1, { type: "add", sx: { fontSize: 20 } }),
              (0, W.jsx)("div", {
                className: Na,
                children: n("msh.chat.prompt.library.create")
              })
            ]
          });
        },
        Wa = 200,
        Fa = function (e) {
          var t = e.promptsLibraryList,
            n = e.isEnd,
            r = e.loadMore,
            i = e.updatePrompt,
            o = e.deletePrompt,
            s = e.onSelect,
            c = e.onClose,
            l = (0, a.useRef)(null),
            u = (0, a.useState)(1),
            d = _()(u, 2),
            m = d[0],
            p = d[1],
            f = (0, a.useState)(-1),
            h = _()(f, 2),
            g = h[0],
            v = h[1],
            x = function (e) {
              v(function (n) {
                var a = "prev" === e ? n - 1 : n + 1;
                return a < 0 ? (a = t.length - 1) : a >= t.length && (a = 0), a;
              });
            };
          (0, a.useEffect)(
            function () {
              v(-1);
            },
            [t]
          );
          var A = ma(
              (0, a.useCallback)(
                function () {
                  return t;
                },
                [t]
              )
            ),
            b = ma(
              (0, a.useCallback)(
                function () {
                  return t[g];
                },
                [t, g]
              )
            ),
            j = ma(
              (0, a.useCallback)(
                function () {
                  return g;
                },
                [g]
              )
            );
          (0, a.useEffect)(function () {
            var e = function (e) {
              var n;
              if (
                t.length &&
                "editTextarea" !==
                  (null === (n = e.target) || void 0 === n ? void 0 : n.id) &&
                !e.isComposing
              )
                switch (e.key) {
                  case "ArrowDown":
                    x("next"), e.preventDefault(), e.stopPropagation();
                    break;
                  case "ArrowUp":
                    x("prev"), e.preventDefault(), e.stopPropagation();
                    break;
                  case "Enter":
                    if (!A.current.length || -1 === j.current) return;
                    if (b.current) {
                      var a = {
                        content: b.current.content,
                        id: b.current.id,
                        is_full_content: b.current.is_full_content
                      };
                      null == s || s(a);
                    }
                    e.preventDefault(), e.stopPropagation();
                    break;
                  case "Escape":
                    c(), e.preventDefault(), e.stopPropagation();
                }
            };
            return (
              document.body.addEventListener("keydown", e, !0),
              function () {
                document.body.removeEventListener("keydown", e, !0);
              }
            );
          }, []);
          var C = (0, a.useCallback)(
            function (e, t) {
              var n = t.content,
                a = t.highlight_content,
                r = t.id,
                c = t.name,
                l = t.emoji,
                u = t.is_full_content;
              return (0, W.jsx)(Ka, {
                content: n,
                selected: g === e,
                highlight_content: a,
                id: r,
                name: c,
                emoji: l,
                is_full_content: u,
                updatePrompt: i,
                deletePrompt: o,
                onSelect: s
              });
            },
            [i, o, s, g]
          );
          return 0 === t.length
            ? (0, W.jsx)(W.Fragment, { children: (0, W.jsx)(Da, {}) })
            : (0, W.jsx)(da.OO, {
                style: {
                  height: "".concat(m, "px"),
                  transition: "height 0.1s linear"
                },
                ref: l,
                data: t,
                totalListHeightChanged: function (e) {
                  e > Wa && m !== Wa ? p(Wa) : e < Wa && p(e);
                },
                endReached: function () {
                  n || r();
                },
                itemContent: C
              });
        },
        za = function (e) {
          var t = e.className,
            n = e.onClose,
            r =
              ((0, ua.Z)(),
              (0, s.vg)(function (e) {
                return e.i18n;
              })),
            i = (0, a.useRef)(null),
            o = (0, a.useCallback)(
              function (e) {
                i.current && !i.current.contains(e.target) && n();
              },
              [n]
            );
          return (
            (0, a.useEffect)(
              function () {
                return (
                  document.addEventListener("click", o),
                  function () {
                    document.removeEventListener("click", o);
                  }
                );
              },
              [o]
            ),
            (0, W.jsxs)("div", {
              ref: i,
              className: y()(pa, t),
              children: [
                (0, W.jsxs)("div", {
                  className: fa,
                  children: [
                    (0, W.jsx)("div", {
                      className: y()(ga),
                      children:
                        null == r
                          ? void 0
                          : r.fm("msh.chat.prompt.library.title")
                    }),
                    (0, W.jsx)(T.Kr1, {
                      type: "close",
                      onClick: n,
                      sx: { cursor: "pointer", fontSize: 20 }
                    })
                  ]
                }),
                (0, W.jsx)("div", {
                  className: ha,
                  children: (0, W.jsx)(Fa, pe()({}, e))
                }),
                (0, W.jsx)(Ga, { createPrompt: e.createPrompt })
              ]
            })
          );
        };
      var Oa = "editor___DSPKC",
        Ua = "toolbar___WUSec",
        Ya = "chatInput___bMC0h",
        qa = "topModal___G6UoX",
        Va = "container___hM5mM",
        Ha = "inputInner___ybWEr",
        Ja = "newButton___G9EzX",
        Xa = "newChat___ak7Gj",
        $a = "overSizeTip___p4GZQ",
        er = function (e) {
          var t = (0, s.vg)(function (e) {
              return e.i18n;
            }).fm,
            n = e.satisfyRadio;
          return (0, W.jsx)(i.Z, {
            className: $a,
            children: (0, W.jsxs)(i.Z, {
              flex: !0,
              center: "y",
              gap: 1,
              children: [
                (0, W.jsx)(T.Kr1, { type: "alert-triangle" }),
                (0, W.jsx)(U.Z, {
                  variant: "body2",
                  children: t("msh.chat.token.check.over", { percent: n })
                })
              ]
            })
          });
        },
        tr = (0, xn.debounce)(function (e) {
          d.aK.setState(function (t) {
            t.hasContent = !(null == e || !e.length);
          });
        }, 200),
        nr = (0, xn.debounce)(function () {
          var e = Z.Vw.getState().currentFiles,
            t =
              null == e
                ? void 0
                : e.every(function (e) {
                    return e.done;
                  });
          (e && !t) || P.A.checkToken();
        }, 5e3),
        ar = function (e) {
          var t = e.newChatOverSize,
            n = e.ready,
            r = e.hasContent,
            i = e.parsing,
            l = e.fileReady,
            u = e.checkingToken,
            m = e.chatting,
            p = e.hasFile,
            f = e.tokenState,
            h = e.satisfyRadio,
            g = (0, a.useState)(!1),
            v = _()(g, 2),
            x = v[0],
            A = v[1];
          (0, a.useEffect)(
            function () {
              f === d.Vi.NEED_NEW_CHAT && A(!0);
            },
            [f]
          );
          var b = (0, a.useCallback)(function () {
              A(!1);
            }, []),
            j = (0, a.useCallback)(function () {
              A(!0);
            }, []),
            C = (0, a.useMemo)(
              function () {
                if (m) return "";
                var e = (0, s.VY)().i18n;
                return p || r
                  ? i || u
                    ? null == e
                      ? void 0
                      : e.fm("msh.chat.send.tip.file.parsing")
                    : l
                    ? t
                      ? null == e
                        ? void 0
                        : e.fm("msh.chat.token.check.over", { percent: h })
                      : f === d.Vi.NEED_NEW_CHAT
                      ? null == e
                        ? void 0
                        : e.fm("msh.chat.send.tip.token.need.new.chat")
                      : ""
                    : null == e
                    ? void 0
                    : e.fm("msh.chat.send.tip.file.error")
                  : null == e
                  ? void 0
                  : e.fm("msh.chat.send.tip.content.empty");
              },
              [r, i, l, u, m, t, p, f, h]
            );
          return (0, W.jsx)(At.Z, {
            title: C,
            placement: "top",
            open: x,
            onClose: b,
            onOpen: j,
            children: (0, W.jsx)(O.Z, {
              children: (0, W.jsxs)(ve.Z, {
                onClick: function () {
                  P.A.send("<url>www.baidu.com</url>", []);
                },
                className: f === d.Vi.NEED_NEW_CHAT && n ? Ja : "",
                "data-testid": "msh-chatinput-send-button",
                id: "send-button",
                children: [
                  f === d.Vi.NEED_NEW_CHAT &&
                    n &&
                    (0, W.jsx)("div", { className: Xa, children: "新会话" }),
                  (0, W.jsx)(T.Kr1, { type: "send" })
                ]
              })
            })
          });
        };
      function rr() {
        var e = (0, d.aK)(function (e) {
            return e.chatId;
          }),
          t = (0, a.useRef)(null),
          n = Lt(),
          r = n.showLibraryModal,
          l = n.promptsLibraryList,
          u = n.openPromptsLibraryModal,
          p = n.closePromptsLibraryModal,
          f = n.inputPrompt,
          h = n.loadMore,
          g = _n(),
          v = g.showModal,
          A = g.openModal,
          j = g.onConfirm,
          _ = g.closeModal,
          C = g.changePrompt,
          w = _n(function (e) {
            return e.modalData;
          }),
          y = _n(function (e) {
            return e.type;
          }),
          k = Lt(function (e) {
            return e.isEnd;
          }),
          E = (0, An.j)(),
          S = E.editor,
          I = E.utils;
        N.F.setEditor(S, I),
          (function (e, t) {
            var n = (0,
              (0, s.vg)(function (e) {
                return e.route;
              }).searchfn)(),
              r = n.prefill_prompt,
              i = n.send_immediately;
            (0, a.useEffect)(
              function () {
                if (r) {
                  var e = decodeURIComponent(r);
                  if ("true" === i) {
                    var n = e.replace(Pt.N, function (e) {
                      return '<url id="" type="url" status="" title="" wc="">'.concat(
                        e,
                        "</url>"
                      );
                    });
                    P.A.send(n, []);
                  } else t.insertText(e);
                  var a = (0, s.VY)().route,
                    o = d.aK.getState().chatId;
                  null == a ||
                    a.replace(
                      {},
                      {
                        removeParams: [
                          "prefill_prompt",
                          "send_immediately",
                          "system_prompt",
                          "use_search"
                        ],
                        to: "/chat/".concat(o)
                      }
                    );
                }
              },
              [r, i]
            );
          })(0, I);
        var M = (function () {
            var e = (0, Kt.Z)().isSmallScreen,
              t = Z.tm.useCurrentFileStatus(),
              n = t.ready,
              a = t.parsing,
              r = t.hasFile,
              i = (0, d.aK)(function (e) {
                return e.hasContent;
              }),
              o = (0, d.aK)(function (e) {
                var t;
                return null === (t = e.stateMap[e.chatId]) || void 0 === t
                  ? void 0
                  : t.chatting;
              }),
              s = (0, d.aK)(function (e) {
                return e.checkingToken;
              }),
              c = (0, d.p0)(),
              l = c.overSize,
              u = c.newChatOverSize,
              p = c.tokenState,
              f = c.satisfyRadio,
              h =
                r && n && !i
                  ? P.T
                  : e
                  ? "有什么问题尽管问"
                  : "Enter 发送; Shift + Enter 换行",
              g = (0, m.p)(function (e) {
                return e.chattingID;
              }),
              v = (0, m.p)(function (e) {
                return e.caseID;
              });
            return {
              placeholder: h,
              ready:
                !(v && g === v) &&
                !s &&
                !o &&
                p !== d.Vi.OVERSIZE &&
                ((r && n) || (!r && i)),
              parsing: a,
              hasFile: r,
              hasContent: i,
              fileReady: n,
              checkingToken: s,
              chatting: o,
              overSize: l,
              tokenState: p,
              newChatOverSize: u,
              satisfyRadio: f
            };
          })(),
          L = M.placeholder,
          R = M.ready,
          B = M.hasFile,
          T = M.hasContent,
          Q = M.parsing,
          D = M.fileReady,
          K = M.checkingToken,
          G = M.chatting,
          F = M.newChatOverSize,
          z = M.tokenState,
          O = M.satisfyRadio;
        (0, a.useEffect)(
          function () {
            return function () {
              try {
                N.F.clear(), P.A.closePopover(), Z.Ee.currentClear();
              } catch (e) {}
            };
          },
          [e]
        );
        var U = (0, xn.debounce)(u, 400),
          Y = (0, a.useCallback)(
            function () {
              (0, o.GE)("btn_show_all_favorite_prompt"),
                (0, c.wt)() &&
                  (r
                    ? p()
                    : (u("full"),
                      (0, o.LF)("msh_show_recommend_content", {
                        msh_content_type: "recommend_favorite_prompt",
                        msh_trigger_type: "click",
                        msh_source_element_id: "btn_show_all_favorite_prompt"
                      })));
            },
            [u, r, p]
          ),
          q = (0, a.useCallback)(
            function (e) {
              (0, o.GE)("btn_edit_favorite_prompt", { msh_data_message_id: e }),
                A(jn.UPDATE, e);
            },
            [A]
          ),
          V = (0, a.useCallback)(
            function (e) {
              (0, o.GE)("btn_delete_favorite_prompt", {
                msh_data_message_id: e
              }),
                A(jn.DELETE, e);
            },
            [A]
          ),
          H = (0, a.useCallback)(
            function () {
              (0, o.GE)("btn_add_favorite_prompt"), A(jn.CREATE);
            },
            [A]
          ),
          J = (function () {
            var e = b()(
              x()().mark(function e(t) {
                var n;
                return x()().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), f(t);
                      case 2:
                        (n = e.sent),
                          (0, o.LF)("msh_accept_recommend_content", {
                            msh_content_type: "recommend_favorite_prompt",
                            msh_content_id: t.id
                          }),
                          I.insertFavoritePrompt(n),
                          p(),
                          I.focus();
                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        return (0, W.jsxs)("div", {
          className: Ya,
          children: [
            r &&
              (0, W.jsx)(za, {
                className: qa,
                isEnd: k,
                promptsLibraryList: l,
                onSelect: J,
                onClose: p,
                loadMore: h,
                updatePrompt: q,
                deletePrompt: V,
                createPrompt: H
              }),
            (0, W.jsxs)(i.Z, {
              column: !0,
              className: Va,
              children: [
                (0, W.jsxs)(i.Z, {
                  flex: !0,
                  wrap: !0,
                  className: Ha,
                  children: [
                    (0, W.jsx)(An.x, {
                      editor: S,
                      "data-testid": "msh-chatinput-editor",
                      className: Oa,
                      placeholder: L,
                      onAction: function (e) {
                        "prompt" === e.type && U("search", e.value);
                      },
                      onValueChange: function (e) {
                        tr(e), nr();
                      },
                      onConfirm: function (e) {
                        p(),
                          (0, c.wt)() &&
                            R &&
                            P.A.send("", [], {
                              create_new: z === d.Vi.NEED_NEW_CHAT
                            });
                      }
                    }),
                    (0, W.jsxs)(i.Z, {
                      flex: !0,
                      gap: 1,
                      className: Ua,
                      children: [
                        (0, W.jsx)(la, { onClick: Y }),
                        (0, W.jsx)(sa, {}),
                        (0, W.jsx)(Un, { ref: t }),
                        (0, W.jsx)(ar, {
                          newChatOverSize: F,
                          ready: R,
                          hasFile: B,
                          hasContent: T,
                          parsing: Q,
                          fileReady: D,
                          checkingToken: K,
                          chatting: G,
                          tokenState: z,
                          satisfyRadio: O
                        })
                      ]
                    })
                  ]
                }),
                (0, W.jsx)(oa, {})
              ]
            }),
            z === d.Vi.OVERSIZE && (0, W.jsx)(er, { satisfyRadio: O }),
            v &&
              (0, W.jsx)(Ln, {
                showModal: v,
                type: y,
                name: w.name,
                content: w.content,
                id: w.id,
                onConfirm: j,
                onClose: _,
                changePrompt: C
              })
          ]
        });
      }
      var ir = n(30145),
        or = {
          buttonContainer: "buttonContainer___B4zym",
          disabledText: "disabledText___bBQ3I"
        },
        sr = function (e) {
          var t = e.onClick,
            n = e.icon,
            a = e.className,
            r = e.intro,
            o = e.disabled;
          return (0, W.jsxs)(i.Z, {
            column: !0,
            flex: !0,
            center: !0,
            children: [
              (0, W.jsx)(ve.Z, {
                className: y()(or.buttonContainer, a),
                disabled: o,
                onClick: t,
                children: (0, W.jsx)(T.Kr1, { type: n })
              }),
              (0, W.jsx)(U.Z, {
                style: { marginTop: 8 },
                className: y()(or.text, o && or.disabledText),
                children: r
              })
            ]
          });
        },
        cr = "container___Y9bLC",
        lr = "shareContainer___xxSNO",
        ur = "textButton___MMfVr",
        dr = "imgButton___wVwHZ",
        mr = "linkButton___IQzC3",
        pr = "cancelContainer___sEIHd",
        fr = "cancelButton___WIRtg",
        hr = "checkBox___PVoMN";
      function gr(e, t, n) {
        var a = (n || {}).atBegin;
        return (function (e, t, n) {
          var a,
            r = n || {},
            i = r.noTrailing,
            o = void 0 !== i && i,
            s = r.noLeading,
            c = void 0 !== s && s,
            l = r.debounceMode,
            u = void 0 === l ? void 0 : l,
            d = !1,
            m = 0;
          function p() {
            a && clearTimeout(a);
          }
          function f() {
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
              r[i] = arguments[i];
            var s = this,
              l = Date.now() - m;
            function f() {
              (m = Date.now()), t.apply(s, r);
            }
            function h() {
              a = void 0;
            }
            d ||
              (c || !u || a || f(),
              p(),
              void 0 === u && l > e
                ? c
                  ? ((m = Date.now()), o || (a = setTimeout(u ? h : f, e)))
                  : f()
                : !0 !== o &&
                  (a = setTimeout(u ? h : f, void 0 === u ? e - l : e)));
          }
          return (
            (f.cancel = function (e) {
              var t = (e || {}).upcomingOnly,
                n = void 0 !== t && t;
              p(), (d = !n);
            }),
            f
          );
        })(e, t, { debounceMode: !1 !== (void 0 !== a && a) });
      }
      var vr = n(62398);
      const xr = new Re.E4("antSpinMove", { to: { opacity: 1 } }),
        Ar = new Re.E4("antRotate", { to: { transform: "rotate(405deg)" } }),
        br = (e) => {
          const { componentCls: t, calc: n } = e;
          return {
            [`${t}`]: Object.assign(Object.assign({}, (0, Be.Wf)(e)), {
              position: "absolute",
              display: "none",
              color: e.colorPrimary,
              fontSize: 0,
              textAlign: "center",
              verticalAlign: "middle",
              opacity: 0,
              transition: `transform ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`,
              "&-spinning": {
                position: "static",
                display: "inline-block",
                opacity: 1
              },
              [`${t}-text`]: {
                fontSize: e.fontSize,
                paddingTop: n(n(e.dotSize).sub(e.fontSize))
                  .div(2)
                  .add(2)
                  .equal()
              },
              "&-fullscreen": {
                position: "fixed",
                width: "100vw",
                height: "100vh",
                backgroundColor: e.colorBgMask,
                zIndex: e.zIndexPopupBase,
                inset: 0,
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
                opacity: 0,
                visibility: "hidden",
                transition: `all ${e.motionDurationMid}`,
                "&-show": { opacity: 1, visibility: "visible" },
                [`${t}-dot ${t}-dot-item`]: { backgroundColor: e.colorWhite },
                [`${t}-text`]: { color: e.colorTextLightSolid }
              },
              "&-nested-loading": {
                position: "relative",
                [`> div > ${t}`]: {
                  position: "absolute",
                  top: 0,
                  insetInlineStart: 0,
                  zIndex: 4,
                  display: "block",
                  width: "100%",
                  height: "100%",
                  maxHeight: e.contentHeight,
                  [`${t}-dot`]: {
                    position: "absolute",
                    top: "50%",
                    insetInlineStart: "50%",
                    margin: n(e.dotSize).mul(-1).div(2).equal()
                  },
                  [`${t}-text`]: {
                    position: "absolute",
                    top: "50%",
                    width: "100%",
                    textShadow: `0 1px 2px ${e.colorBgContainer}`
                  },
                  [`&${t}-show-text ${t}-dot`]: {
                    marginTop: n(e.dotSize).div(2).mul(-1).sub(10).equal()
                  },
                  "&-sm": {
                    [`${t}-dot`]: {
                      margin: n(e.dotSizeSM).mul(-1).div(2).equal()
                    },
                    [`${t}-text`]: {
                      paddingTop: n(n(e.dotSizeSM).sub(e.fontSize))
                        .div(2)
                        .add(2)
                        .equal()
                    },
                    [`&${t}-show-text ${t}-dot`]: {
                      marginTop: n(e.dotSizeSM).div(2).mul(-1).sub(10).equal()
                    }
                  },
                  "&-lg": {
                    [`${t}-dot`]: {
                      margin: n(e.dotSizeLG).mul(-1).div(2).equal()
                    },
                    [`${t}-text`]: {
                      paddingTop: n(n(e.dotSizeLG).sub(e.fontSize))
                        .div(2)
                        .add(2)
                        .equal()
                    },
                    [`&${t}-show-text ${t}-dot`]: {
                      marginTop: n(e.dotSizeLG).div(2).mul(-1).sub(10).equal()
                    }
                  }
                },
                [`${t}-container`]: {
                  position: "relative",
                  transition: `opacity ${e.motionDurationSlow}`,
                  "&::after": {
                    position: "absolute",
                    top: 0,
                    insetInlineEnd: 0,
                    bottom: 0,
                    insetInlineStart: 0,
                    zIndex: 10,
                    width: "100%",
                    height: "100%",
                    background: e.colorBgContainer,
                    opacity: 0,
                    transition: `all ${e.motionDurationSlow}`,
                    content: '""',
                    pointerEvents: "none"
                  }
                },
                [`${t}-blur`]: {
                  clear: "both",
                  opacity: 0.5,
                  userSelect: "none",
                  pointerEvents: "none",
                  "&::after": { opacity: 0.4, pointerEvents: "auto" }
                }
              },
              "&-tip": { color: e.spinDotDefault },
              [`${t}-dot`]: {
                position: "relative",
                display: "inline-block",
                fontSize: e.dotSize,
                width: "1em",
                height: "1em",
                "&-item": {
                  position: "absolute",
                  display: "block",
                  width: n(e.dotSize).sub(n(e.marginXXS).div(2)).div(2).equal(),
                  height: n(e.dotSize)
                    .sub(n(e.marginXXS).div(2))
                    .div(2)
                    .equal(),
                  backgroundColor: e.colorPrimary,
                  borderRadius: "100%",
                  transform: "scale(0.75)",
                  transformOrigin: "50% 50%",
                  opacity: 0.3,
                  animationName: xr,
                  animationDuration: "1s",
                  animationIterationCount: "infinite",
                  animationTimingFunction: "linear",
                  animationDirection: "alternate",
                  "&:nth-child(1)": {
                    top: 0,
                    insetInlineStart: 0,
                    animationDelay: "0s"
                  },
                  "&:nth-child(2)": {
                    top: 0,
                    insetInlineEnd: 0,
                    animationDelay: "0.4s"
                  },
                  "&:nth-child(3)": {
                    insetInlineEnd: 0,
                    bottom: 0,
                    animationDelay: "0.8s"
                  },
                  "&:nth-child(4)": {
                    bottom: 0,
                    insetInlineStart: 0,
                    animationDelay: "1.2s"
                  }
                },
                "&-spin": {
                  transform: "rotate(45deg)",
                  animationName: Ar,
                  animationDuration: "1.2s",
                  animationIterationCount: "infinite",
                  animationTimingFunction: "linear"
                }
              },
              [`&-sm ${t}-dot`]: {
                fontSize: e.dotSizeSM,
                i: {
                  width: n(n(e.dotSizeSM).sub(n(e.marginXXS).div(2)))
                    .div(2)
                    .equal(),
                  height: n(n(e.dotSizeSM).sub(n(e.marginXXS).div(2)))
                    .div(2)
                    .equal()
                }
              },
              [`&-lg ${t}-dot`]: {
                fontSize: e.dotSizeLG,
                i: {
                  width: n(n(e.dotSizeLG).sub(e.marginXXS)).div(2).equal(),
                  height: n(n(e.dotSizeLG).sub(e.marginXXS)).div(2).equal()
                }
              },
              [`&${t}-show-text ${t}-text`]: { display: "block" }
            })
          };
        };
      var jr = (0, Qe.I$)(
          "Spin",
          (e) => {
            const t = (0, Te.TS)(e, { spinDotDefault: e.colorTextDescription });
            return [br(t)];
          },
          (e) => {
            const { controlHeightLG: t, controlHeight: n } = e;
            return {
              contentHeight: 400,
              dotSize: t / 2,
              dotSizeSM: 0.35 * t,
              dotSizeLG: n
            };
          }
        ),
        _r = function (e, t) {
          var n = {};
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) &&
              t.indexOf(a) < 0 &&
              (n[a] = e[a]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (a = Object.getOwnPropertySymbols(e); r < a.length; r++)
              t.indexOf(a[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, a[r]) &&
                (n[a[r]] = e[a[r]]);
          }
          return n;
        };
      let Cr = null;
      const wr = (e) => {
        const {
            prefixCls: t,
            spinning: n = !0,
            delay: r = 0,
            className: i,
            rootClassName: o,
            size: s = "default",
            tip: c,
            wrapperClassName: l,
            style: u,
            children: d,
            fullscreen: m
          } = e,
          p = _r(e, [
            "prefixCls",
            "spinning",
            "delay",
            "className",
            "rootClassName",
            "size",
            "tip",
            "wrapperClassName",
            "style",
            "children",
            "fullscreen"
          ]),
          { getPrefixCls: f } = a.useContext(Pe.E_),
          h = f("spin", t),
          [g, v, x] = jr(h),
          [A, b] = a.useState(
            () =>
              n &&
              !(function (e, t) {
                return !!e && !!t && !isNaN(Number(t));
              })(n, r)
          );
        a.useEffect(() => {
          if (n) {
            const e = gr(r, () => {
              b(!0);
            });
            return (
              e(),
              () => {
                var t;
                null === (t = null == e ? void 0 : e.cancel) ||
                  void 0 === t ||
                  t.call(e);
              }
            );
          }
          b(!1);
        }, [r, n]);
        const j = a.useMemo(() => void 0 !== d && !m, [d, m]);
        const { direction: _, spin: C } = a.useContext(Pe.E_),
          w = y()(
            h,
            null == C ? void 0 : C.className,
            {
              [`${h}-sm`]: "small" === s,
              [`${h}-lg`]: "large" === s,
              [`${h}-spinning`]: A,
              [`${h}-show-text`]: !!c,
              [`${h}-fullscreen`]: m,
              [`${h}-fullscreen-show`]: m && A,
              [`${h}-rtl`]: "rtl" === _
            },
            i,
            o,
            v,
            x
          ),
          k = y()(`${h}-container`, { [`${h}-blur`]: A }),
          E = (0, Ue.Z)(p, ["indicator"]),
          N = Object.assign(Object.assign({}, null == C ? void 0 : C.style), u),
          Z = a.createElement(
            "div",
            Object.assign({}, E, {
              style: N,
              className: w,
              "aria-live": "polite",
              "aria-busy": A
            }),
            (function (e, t) {
              const { indicator: n } = t,
                r = `${e}-dot`;
              return null === n
                ? null
                : (0, vr.l$)(n)
                ? (0, vr.Tm)(n, { className: y()(n.props.className, r) })
                : (0, vr.l$)(Cr)
                ? (0, vr.Tm)(Cr, { className: y()(Cr.props.className, r) })
                : a.createElement(
                    "span",
                    { className: y()(r, `${e}-dot-spin`) },
                    a.createElement("i", {
                      className: `${e}-dot-item`,
                      key: 1
                    }),
                    a.createElement("i", {
                      className: `${e}-dot-item`,
                      key: 2
                    }),
                    a.createElement("i", {
                      className: `${e}-dot-item`,
                      key: 3
                    }),
                    a.createElement("i", { className: `${e}-dot-item`, key: 4 })
                  );
            })(h, e),
            c && (j || m)
              ? a.createElement("div", { className: `${h}-text` }, c)
              : null
          );
        return g(
          j
            ? a.createElement(
                "div",
                Object.assign({}, E, {
                  className: y()(`${h}-nested-loading`, l, v, x)
                }),
                A && a.createElement("div", { key: "loading" }, Z),
                a.createElement("div", { className: k, key: "container" }, d)
              )
            : Z
        );
      };
      wr.setDefaultIndicator = (e) => {
        Cr = e;
      };
      var yr = wr,
        kr = n(44818);
      function Er(e, t) {
        var n = document.createElement("a");
        (n.download = "".concat(e, ".jpg")), (n.style.display = "none");
        var a = Nr(t);
        (n.href = URL.createObjectURL(a)),
          document.body.appendChild(n),
          n.click(),
          document.body.removeChild(n);
      }
      function Nr(e) {
        for (
          var t = atob(e.replace(/^data:image\/(png|jpeg|jpg);base64,/, "")),
            n = new ArrayBuffer(t.length),
            a = new Uint8Array(n),
            r = 0;
          r < t.length;
          r++
        )
          a[r] = t.charCodeAt(r);
        return new Blob([n], { type: "image/png" });
      }
      var Zr = (function () {
        var e = b()(
          x()().mark(function e(t) {
            var n;
            return x()().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), t;
                  case 2:
                    return (n = e.sent), e.abrupt("return", Nr(n));
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })();
      function Pr(e) {
        return Sr.apply(this, arguments);
      }
      function Sr() {
        return (Sr = b()(
          x()().mark(function e(t) {
            var n;
            return x()().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      !navigator.clipboard ||
                      "function" != typeof navigator.clipboard.write
                    ) {
                      e.next = 6;
                      break;
                    }
                    return (
                      (n = new ClipboardItem({ "image/png": Zr(t) })),
                      (e.next = 4),
                      navigator.clipboard.write([n])
                    );
                  case 4:
                    e.next = 7;
                    break;
                  case 6:
                    return e.abrupt(
                      "return",
                      Promise.reject("浏览器暂不支持复制功能")
                    );
                  case 7:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var Ir = "listContainer___onYZx",
        Mr = "screenshot___mbi_k",
        Lr = "bottom___CXJPw",
        Rr = "copyImgButton___zZs9c",
        Br = "imgButton____eoym",
        Tr = function (e) {
          var t = e.open,
            n = e.segmentsList,
            r = e.onClose,
            c = e.getShareImg,
            l = e.title,
            u = e.userImg,
            d = e.userName,
            m = e.getShareId,
            p = (0, H.M)("thememode.thememode", (0, H.R)("mode")).mode,
            f = { mode: p },
            h =
              (R.qr.getState().api,
              (0, s.vg)(function (e) {
                return e.i18n;
              }).fm),
            g = (0, a.useState)(!1),
            v = _()(g, 2),
            A = v[0],
            j = v[1],
            C = (0, a.useState)(""),
            w = _()(C, 2),
            y = w[0],
            k = w[1],
            E = (0, a.useState)(!1),
            N = _()(E, 2),
            Z = N[0],
            P = N[1],
            S = (0, Kt.Z)().isFireFox,
            M = (0, a.useRef)(null),
            L = (0, a.useCallback)(
              b()(
                x()().mark(function e() {
                  var t, n, a, r, i, l, u, d;
                  return x()().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((t = (0, s.VY)()),
                              (n = t.ui),
                              j(!0),
                              (0, o.GE)("btn_share_msg_download_img"),
                              (e.prev = 3),
                              (r = ""),
                              null === M.current)
                            ) {
                              e.next = 21;
                              break;
                            }
                            return (e.next = 9), M.current;
                          case 9:
                            if (
                              ((e.t1 = i = e.sent),
                              (e.t0 = null !== e.t1),
                              !e.t0)
                            ) {
                              e.next = 13;
                              break;
                            }
                            e.t0 = void 0 !== i;
                          case 13:
                            if (!e.t0) {
                              e.next = 17;
                              break;
                            }
                            (e.t2 = i), (e.next = 18);
                            break;
                          case 17:
                            e.t2 = "";
                          case 18:
                            (r = e.t2), (e.next = 33);
                            break;
                          case 21:
                            return (e.next = 23), c(f);
                          case 23:
                            if (
                              ((e.t4 = l = e.sent),
                              (e.t3 = null !== e.t4),
                              !e.t3)
                            ) {
                              e.next = 27;
                              break;
                            }
                            e.t3 = void 0 !== l;
                          case 27:
                            if (!e.t3) {
                              e.next = 31;
                              break;
                            }
                            (e.t5 = l), (e.next = 32);
                            break;
                          case 31:
                            e.t5 = "";
                          case 32:
                            r = e.t5;
                          case 33:
                            if (r) {
                              e.next = 35;
                              break;
                            }
                            throw new Error();
                          case 35:
                            (u = Date.now()),
                              Er(
                                "Kimi ".concat(I()(u).format("YYYY-MM-DD")),
                                r
                              ),
                              (0, o.LF)("msh_common_file_export", {
                                msh_element_id: "btn_share_message_save_as_img"
                              }),
                              null === (a = n.message) ||
                                void 0 === a ||
                                a.success(
                                  h(
                                    "msh.chat.page.share.modal.save.img.success"
                                  )
                                ),
                              (e.next = 45);
                            break;
                          case 41:
                            (e.prev = 41),
                              (e.t6 = e.catch(3)),
                              null === (d = n.message) ||
                                void 0 === d ||
                                d.error(
                                  h("msh.chat.page.share.modal.save.img.error")
                                );
                          case 45:
                            j(!1);
                          case 46:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[3, 41]]
                  );
                })
              ),
              [M]
            ),
            B = (0, a.useCallback)(
              b()(
                x()().mark(function e() {
                  var t, n, a, r;
                  return x()().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((t = (0, s.VY)()),
                              (n = t.ui),
                              (0, o.GE)("btn_share_message_copy_img"),
                              j(!0),
                              (e.prev = 3),
                              null === M.current)
                            ) {
                              e.next = 9;
                              break;
                            }
                            return (e.next = 7), Pr(M.current);
                          case 7:
                            e.next = 11;
                            break;
                          case 9:
                            return (e.next = 11), Pr(c(f));
                          case 11:
                            null === (a = n.message) ||
                              void 0 === a ||
                              a.success(
                                h("msh.chat.page.share.modal.copy.img.success")
                              ),
                              (e.next = 18);
                            break;
                          case 14:
                            (e.prev = 14),
                              (e.t0 = e.catch(3)),
                              null === (r = n.message) ||
                                void 0 === r ||
                                r.error(
                                  h("msh.chat.page.share.modal.copy.img.error")
                                );
                          case 18:
                            j(!1);
                          case 19:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[3, 14]]
                  );
                })
              ),
              [M]
            ),
            T = (function () {
              var e = b()(
                x()().mark(function e(t) {
                  var n, a, r, i, o, s;
                  return x()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = R.qr.getState()),
                            (a = n.api),
                            (r = window.location.origin),
                            (i = ""
                              .concat(r, "/share/")
                              .concat(t, "?from=qrcode")),
                            (e.next = 5),
                            a.chat.getQrcode(
                              i,
                              "data:image/png;base64,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"
                            )
                          );
                        case 5:
                          (o = e.sent).qrcode &&
                            ((s = "data:image/png;base64,".concat(o.qrcode)),
                            k(s),
                            P(!0));
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            Q = (function () {
              var e = b()(
                x()().mark(function e() {
                  var t;
                  return x()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), m();
                        case 2:
                          (t = e.sent) &&
                            (T(t),
                            M.current || (M.current = c(pe()({ id: t }, f))));
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (
            (0, a.useEffect)(function () {
              return (
                Q(),
                function () {
                  M.current = null;
                }
              );
            }, []),
            (0, W.jsx)(wn.Z, {
              open: t,
              title: (0, W.jsx)(Gt._H, {
                id: "msh.chat.page.share.modal.title"
              }),
              footer: !1,
              elementId: "modal_dialog_share_message_for_select_messages",
              modalsx: {
                paper: {
                  width: 640,
                  maxWidth: 640,
                  backgroundColor: "var(--msh-chat-list-kimi-bg)"
                },
                title: { fontSize: 20 }
              },
              onClose: r,
              children: (0, W.jsxs)(yr, {
                spinning: A,
                children: [
                  (0, W.jsx)("div", {
                    className: Ir,
                    children: (0, W.jsx)(kr.Z, {
                      device: "web",
                      list: n,
                      mode: p,
                      qrcode: y,
                      title: l,
                      userImg: u,
                      userName: d,
                      showFooter: Z,
                      showHeader: !0,
                      maxListHeight: 2381,
                      className: Mr
                    })
                  }),
                  (0, W.jsxs)(i.Z, {
                    className: Lr,
                    flex: !0,
                    center: !0,
                    gap: "32px",
                    children: [
                      !S &&
                        (0, W.jsx)(sr, {
                          onClick: B,
                          icon: "mshd-share-img",
                          className: Rr,
                          intro: h("msh.chat.page.share.modal.copy.img")
                        }),
                      (0, W.jsx)(sr, {
                        onClick: L,
                        icon: "mshd-save-img",
                        className: Br,
                        intro: h("msh.chat.page.share.modal.save.img")
                      })
                    ]
                  })
                ]
              })
            })
          );
        },
        Qr = function () {
          var e = (0, f.t)(),
            t = e.shareSegmentsIdMap,
            n = e.getShareId,
            r = e.getShareImg,
            l = e.getShareSegmentsList,
            u = e.reset,
            m = (0, d.aK)(function (e) {
              return e.detailsMap[e.chatId];
            }),
            p = (0, d.aK)(function (e) {
              var t;
              return null !== (t = e.filesMap[e.chatId]) && void 0 !== t
                ? t
                : [];
            }),
            h = (0, Kt.Z)().isSafari,
            g = (0, s.vg)(function (e) {
              return e.i18n;
            }).fm,
            v =
              (0, c.E1)(function (e) {
                return e.user;
              }) || {},
            A = v.avatar,
            j = v.shared_user_name,
            C = (0, ir.x)({ open: !1, segmentsList: [] }),
            w = _()(C, 2),
            y = w[0],
            k = w[1],
            E = (0, ir.x)({ allSelected: !1, indeterminate: !1 }),
            N = _()(E, 2),
            Z = N[0],
            P = N[1],
            S = (function () {
              var e = b()(
                x()().mark(function e() {
                  var t, n;
                  return x()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (0, o.GE)("btn_share_msg_generate_img "),
                            (t = l()),
                            (n = t.map(function (e) {
                              var t,
                                n = [];
                              e.file_refs &&
                                e.file_refs.length > 0 &&
                                (n =
                                  null === (t = e.file_refs) || void 0 === t
                                    ? void 0
                                    : t
                                        .map(function (e) {
                                          return p[e];
                                        })
                                        .filter(function (e) {
                                          return !!e;
                                        }));
                              return pe()({ filesList: n }, e);
                            })),
                            k(function (e) {
                              (e.open = !0), (e.segmentsList = n);
                            });
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            I = (0, a.useCallback)(
              b()(
                x()().mark(function e() {
                  var t, a;
                  return x()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), n();
                        case 2:
                          if ((t = e.sent)) {
                            e.next = 5;
                            break;
                          }
                          throw new Error();
                        case 5:
                          return (
                            (a = window.location.origin),
                            e.abrupt(
                              "return",
                              new Blob(
                                [
                                  "点击链接查看和 Kimi 智能助手的对话 "
                                    .concat(a, "/share/")
                                    .concat(t)
                                ],
                                { type: "text/plain" }
                              )
                            )
                          );
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [n]
            ),
            M = (0, a.useCallback)(
              b()(
                x()().mark(function e() {
                  var t, a, r, i, c, l, u;
                  return x()().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((t = (0, s.VY)()),
                              (a = t.ui),
                              (0, o.GE)("btn_share_message_copy_link"),
                              !h)
                            ) {
                              e.next = 14;
                              break;
                            }
                            return (
                              (e.prev = 3),
                              (i = new ClipboardItem({ "text/plain": I() })),
                              (e.next = 7),
                              navigator.clipboard.write([i])
                            );
                          case 7:
                            null === (r = a.message) ||
                              void 0 === r ||
                              r.success(
                                g("msh.chat.page.share.modal.link.success")
                              ),
                              (e.next = 13);
                            break;
                          case 10:
                            (e.prev = 10), (e.t0 = e.catch(3));
                          case 13:
                            return e.abrupt("return");
                          case 14:
                            return (e.next = 16), n();
                          case 16:
                            if ((c = e.sent)) {
                              e.next = 19;
                              break;
                            }
                            return e.abrupt("return");
                          case 19:
                            (l = window.location.origin),
                              Zt()(
                                "点击链接查看和 Kimi 智能助手的对话 "
                                  .concat(l, "/share/")
                                  .concat(c),
                                { format: "text/plain" }
                              ) &&
                                (null === (u = a.message) ||
                                  void 0 === u ||
                                  u.success(
                                    g("msh.chat.page.share.modal.link.success")
                                  ));
                          case 22:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[3, 10]]
                  );
                })
              ),
              [n, I, h]
            ),
            L = (0, a.useCallback)(
              b()(
                x()().mark(function e() {
                  var t, n, a, r, i;
                  return x()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (t = (0, s.VY)()),
                            (n = t.ui),
                            (0, o.GE)("btn_share_message_copy_text"),
                            (a = l()),
                            (r = ""),
                            a.forEach(function (e) {
                              var t,
                                n,
                                a,
                                i =
                                  null !==
                                    (t =
                                      null === (n = e.content) || void 0 === n
                                        ? void 0
                                        : n.replace(
                                            Pt.J,
                                            function (e, t, n, a, r, i) {
                                              return i + " ";
                                            }
                                          )) && void 0 !== t
                                    ? t
                                    : "";
                              if ("user" === e.role)
                                r =
                                  null === (a = r) || void 0 === a
                                    ? void 0
                                    : a.concat(
                                        "User: ".concat(
                                          null == i ? void 0 : i.trim(),
                                          " \n\n"
                                        )
                                      );
                              else if ("assistant" === e.role) {
                                var o;
                                r =
                                  null === (o = r) || void 0 === o
                                    ? void 0
                                    : o.concat(
                                        "Kimi: ".concat(
                                          null == i ? void 0 : i.trim(),
                                          " \n\n"
                                        )
                                      );
                              }
                            }),
                            Zt()(r || "", { format: "text/plain" }) &&
                              (null == n ||
                                null === (i = n.message) ||
                                void 0 === i ||
                                i.success(
                                  g("msh.chat.page.share.modal.text.success")
                                ));
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              []
            ),
            R = (0, a.useMemo)(
              function () {
                var e;
                return null !== (e = null == m ? void 0 : m.name) &&
                  void 0 !== e
                  ? e
                  : "";
              },
              [m]
            );
          return (
            (0, a.useEffect)(
              function () {
                var e = !0,
                  n = !1;
                Object.values(t).forEach(function (t) {
                  (e = e && t), (n = n || t);
                }),
                  P(function (t) {
                    (t.allSelected = e), (t.indeterminate = n && !e);
                  });
              },
              [t]
            ),
            (0, W.jsxs)(W.Fragment, {
              children: [
                y.open &&
                  (0, W.jsx)(Tr, {
                    open: y.open,
                    segmentsList: y.segmentsList,
                    onClose: function () {
                      k(function (e) {
                        (e.open = !1), (e.segmentsList = []);
                      });
                    },
                    getShareImg: r,
                    getShareId: n,
                    title: R,
                    userImg: A,
                    userName: j
                  }),
                (0, W.jsxs)("div", {
                  className: cr,
                  children: [
                    (0, W.jsx)(Xe, {
                      className: hr,
                      onChange: function (e) {
                        (0, o.LF)("msh_checkbox_change", {
                          msh_element_id: "checkbox_share_message_select_all",
                          msh_page_name: window.location.pathname
                        }),
                          f.t.setState(function (t) {
                            var n = t.shareSegmentsIdMap;
                            for (var a in n) {
                              var r, i;
                              if (Object.hasOwn(n, a))
                                n[a] =
                                  null !==
                                    (r =
                                      null == e ||
                                      null === (i = e.target) ||
                                      void 0 === i
                                        ? void 0
                                        : i.checked) &&
                                  void 0 !== r &&
                                  r;
                            }
                          });
                      },
                      checked: Z.allSelected,
                      children: "全选"
                    }),
                    (0, W.jsxs)(i.Z, {
                      flex: !0,
                      center: !0,
                      gap: "var(--lg, 32px)",
                      className: lr,
                      children: [
                        (0, W.jsx)(sr, {
                          onClick: M,
                          icon: "mshd-share-link",
                          className: mr,
                          intro: g("msh.chat.page.share.modal.link"),
                          disabled: !Z.allSelected && !Z.indeterminate
                        }),
                        (0, W.jsx)(sr, {
                          onClick: L,
                          icon: "mshd-share-text",
                          className: ur,
                          intro: g("msh.chat.page.share.modal.text"),
                          disabled: !Z.allSelected && !Z.indeterminate
                        }),
                        (0, W.jsx)(sr, {
                          onClick: S,
                          icon: "mshd-share-img",
                          className: dr,
                          intro: g("msh.chat.page.share.modal.img"),
                          disabled: !Z.allSelected && !Z.indeterminate
                        })
                      ]
                    }),
                    (0, W.jsx)("div", {
                      className: pr,
                      children: (0, W.jsx)(sr, {
                        onClick: function () {
                          (0, o.GE)("btn_share_message_cancel_share"), u();
                        },
                        icon: "mshd-close",
                        className: fr,
                        intro: g("msh.chat.page.share.modal.cancel")
                      })
                    })
                  ]
                })
              ]
            })
          );
        },
        Dr = "footerMark___cWT6F",
        Kr = "text___fWKcN",
        Gr = "chatBottom___jS9Jd",
        Wr = "createButton___mq17X",
        Fr = function (e) {
          var t = e.details,
            n = e.createNewChat,
            a = e.loading,
            r = (0, f.t)(function (e) {
              return e.shareMode;
            });
          return (0, W.jsxs)(O.Z, {
            maxWidth: "md",
            className: Gr,
            children: [
              r && (0, W.jsx)(Qr, {}),
              !r &&
                (0, W.jsxs)(W.Fragment, {
                  children: [
                    "forbidden" === (null == t ? void 0 : t.status) &&
                      (0, W.jsx)(i.Z, {
                        flex: !0,
                        center: "x",
                        children: (0, W.jsx)(vn.Z, {
                          "data-testid": "msh-bottom-newchat-btn",
                          onClick: n,
                          type: "primary",
                          className: Wr,
                          children: (0, W.jsx)(Gt._H, {
                            id: "msh.chat.page.bottom.create.chat"
                          })
                        })
                      }),
                    !a &&
                      "forbidden" !== (null == t ? void 0 : t.status) &&
                      (0, W.jsx)(W.Fragment, { children: (0, W.jsx)(rr, {}) })
                  ]
                })
            ]
          });
        },
        zr = function () {
          var e = (0, d.p0)().tokenState;
          return (0, W.jsx)(i.Z, {
            flex: !0,
            center: "x",
            className: Dr,
            children: ""
          });
        },
        Or = n(56831),
        Ur = n(96329),
        Yr = n(56722),
        qr = n(94842),
        Vr = function () {
          return (0, W.jsx)("div", {
            className: qr.Z.rightLogin,
            onClick: function () {
              (0, o.GE)("login_entry_btn"), c.nR.open();
            },
            children: (0, W.jsx)(Yr.Z, {
              children: (0, W.jsx)(i.Z, {
                flex: !0,
                center: !0,
                className: y()(qr.Z.login, {}),
                children: "登录"
              })
            })
          });
        },
        Hr = n(82868),
        Jr = {
          btnLeft: "btnLeft___glOUs",
          btnRight: "btnRight___ovvmJ",
          splitView: "splitView___JhUYK",
          dark: "dark___kDYtU",
          split: "split___fLcZt",
          light: "light___SkIVp"
        },
        Xr = function (e) {
          var t = e.createNewChat,
            n = (0, Kt.Z)().isSmallScreen;
          return (0, W.jsxs)(W.Fragment, {
            children: [
              !n &&
                (0, W.jsxs)(W.Fragment, {
                  children: [
                    (0, W.jsx)(Hr.Z, {
                      subsize: !0,
                      className: Jr.btnLeft,
                      "data-testid": "msh-header-history-btn",
                      icon: (0, W.jsx)(T.Kr1, {
                        type: "mshd-history-chat-new"
                      }),
                      onClick: function () {
                        (0, o.GE)("open_history_conversation_list_btn"),
                          d.W6.openHistory();
                      },
                      children: (0, W.jsx)(Gt._H, {
                        id: "msh.chat.page.history.chat"
                      })
                    }),
                    (0, W.jsx)($r, {}),
                    (0, W.jsx)(Hr.Z, {
                      subsize: !0,
                      "data-testid": "msh-header-newchat-btn",
                      className: Jr.btnRight,
                      icon: (0, W.jsx)(T.Kr1, { type: "mshd-new-chat" }),
                      onClick: t,
                      children: (0, W.jsx)(Gt._H, {
                        id: "msh.chat.page.create.chat"
                      })
                    })
                  ]
                }),
              n &&
                (0, W.jsxs)(W.Fragment, {
                  children: [
                    (0, W.jsx)(Hr.Z, {
                      subsize: !0,
                      "data-testid": "msh-header-history-btn",
                      className: Jr.btnLeft,
                      icon: (0, W.jsx)(T.Kr1, {
                        type: "mshd-history-chat-new"
                      }),
                      onClick: function () {
                        (0, o.GE)("open_history_conversation_list_btn"),
                          d.W6.openHistory();
                      }
                    }),
                    (0, W.jsx)($r, {}),
                    (0, W.jsx)(Hr.Z, {
                      subsize: !0,
                      "data-testid": "msh-header-newchat-btn",
                      className: Jr.btnRight,
                      icon: (0, W.jsx)(T.Kr1, { type: "mshd-new-chat" }),
                      onClick: t
                    })
                  ]
                })
            ]
          });
        },
        $r = function () {
          var e = (0, H.M)("thememode.thememode", (0, H.R)("mode")).mode;
          return (0, W.jsx)("div", {
            className: y()(Jr.splitView, Jr[e]),
            children: (0, W.jsx)("div", { className: Jr.split })
          });
        },
        ei = n(44314),
        ti = n(55691),
        ni = n(99004),
        ai = "chatHeader___mPWFf",
        ri = "title___Jbjbz",
        ii = "debugLink___DhaTp",
        oi = "arrowIcon___rtlI5",
        si = "menuList___VG0xg",
        ci = "menuItem___gOexK",
        li = "itemIcon___fYmDy",
        ui = "delete___Jkjt0";
      function di(e) {
        var t = e.isCase,
          n = (0, d.aK)(function (e) {
            return e.chatId;
          }),
          r = (0, d.aK)(function (e) {
            return e.detailsMap[e.chatId];
          }),
          c = (0, d.aK)(function (e) {
            return e.segmentTotalMap[e.chatId];
          }),
          l = (0, d.aK)(function (e) {
            var t;
            return null === (t = e.stateMap[e.chatId]) || void 0 === t
              ? void 0
              : t.chatting;
          }),
          u = (0, d.aK)(function (e) {
            return e.segmentsMap[e.chatId];
          }),
          m = (0, f.t)().openShareMode,
          p = (0, a.useState)(!1),
          h = _()(p, 2),
          g = h[0],
          v = h[1],
          x = (0, a.useState)(!1),
          A = _()(x, 2),
          b = A[0],
          j = A[1],
          C = (0, a.useState)(null),
          w = _()(C, 2),
          k = w[0],
          N = w[1],
          Z = Boolean(k),
          P = (0, a.useRef)(null),
          S = (0, s.vg)(function (e) {
            return e.i18n;
          }).fm,
          I = (0, E.l)(function (e) {
            return e.debugging;
          }),
          M = function () {
            N(P.current);
          },
          L = function () {
            N(null);
          };
        (0, a.useEffect)(
          function () {
            var e = !1;
            null == u ||
              u.forEach(function (t) {
                t.content && !t.error && (e = !0);
              }),
              j(!!c && !l && e);
          },
          [u, c, l]
        );
        var R = (0, a.useMemo)(
          function () {
            var e;
            return (null == r || null === (e = r.name) || void 0 === e
              ? void 0
              : e.length) > 20
              ? "".concat(null == r ? void 0 : r.name.substr(0, 20), "...")
              : null == r
              ? void 0
              : r.name;
          },
          [null == r ? void 0 : r.name]
        );
        return t || (n && r)
          ? !t && null != r && r.error
            ? null
            : (0, W.jsxs)(i.Z, {
                flex: !0,
                center: !0,
                className: ai,
                children: [
                  t && (0, W.jsx)(U.Z, { noWrap: !0, children: "未命名会话" }),
                  !t &&
                    (0, W.jsxs)(W.Fragment, {
                      children: [
                        I &&
                          (0, W.jsx)("a", {
                            href: (0, Vn.Zv)(n),
                            target: "_blank",
                            className: ii,
                            rel: "noreferrer",
                            children: (0, W.jsx)(T.Kr1, {
                              type: "mshd-out-link"
                            })
                          }),
                        (0, W.jsx)(U.Z, {
                          className: ri,
                          noWrap: !0,
                          onClick: M,
                          children: 'Kimi'
                        }),
                        (0, W.jsx)(U.Z, {
                          className: oi,
                          ref: P,
                          "data-testid": "msh-chatheader-arrow",
                          children: (0, W.jsx)(T.Kr1, {
                            type: "mshd-bottom",
                            onClick: M
                          })
                        })
                      ]
                    }),
                  g &&
                    (0, W.jsx)(ni.Z, {
                      cid: n,
                      title: null == r ? void 0 : r.name,
                      open: g,
                      onClose: function () {
                        v(!1);
                      }
                    }),
                  (0, W.jsxs)(ei.Z, {
                    id: "basic-menu",
                    open: Z,
                    anchorEl: k,
                    onClose: L,
                    MenuListProps: {
                      "aria-labelledby": "basic-button",
                      className: si
                    },
                    children: [
                      (0, W.jsxs)(ti.Z, {
                        className: ci,
                        "data-testid": "msh-chatheader-menu-edit",
                        onClick: function () {
                          (0, o.GE)("btn_edit_chat_title_in_chat_title"),
                            v(!0),
                            L();
                        },
                        children: [
                          (0, W.jsx)(T.Kr1, {
                            type: "chat-edit",
                            className: li
                          }),
                          (0, W.jsx)(U.Z, {
                            children: S("msh.chat.page.update.name")
                          })
                        ]
                      }),
                      b &&
                        (0, W.jsxs)(ti.Z, {
                          className: ci,
                          "data-testid": "msh-chatheader-menu-share",
                          onClick: function () {
                            (0, o.GE)("btn_share_message_in_chat_title"),
                              m(),
                              L();
                          },
                          children: [
                            (0, W.jsx)(T.Kr1, {
                              type: "chat-share",
                              className: li
                            }),
                            (0, W.jsx)(U.Z, {
                              children: S("msh.chat.page.share")
                            })
                          ]
                        }),
                      (0, W.jsxs)(ti.Z, {
                        onClick: function () {
                          (0, o.GE)("btn_delete_in_chat_title"),
                            d.W6.delete(n),
                            L();
                        },
                        className: y()(ci, ui),
                        "data-testid": "msh-chatheader-menu-delete",
                        children: [
                          (0, W.jsx)(T.Kr1, {
                            type: "mshd-delete",
                            className: li
                          }),
                          (0, W.jsx)(U.Z, {
                            children: S("msh.chat.page.delete")
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
          : null;
      }
      var mi = "header___lEPyH",
        pi = "left___L9DB6",
        fi = "center___jbpSv",
        hi = function (e) {
          var t = e.createNewChat,
            n = e.isCase,
            a = e.hiddnTitle,
            r = (0, c.E1)(function (e) {
              return e.user;
            });
          return (0, W.jsx)("div", {
            'data-v-4a94cac4': '',
            className: 'tab',
            children: [
              (0, W.jsx)("div", {
                'data-v-fbe8fd4c': '',
                'data-v-4a94cac4': '',
                className: 'tab-title-container',
                children: [
                  (0, W.jsx)("div", {
                    'data-v-fbe8fd4c': '',
                    className: 'van-tabs van-tabs--line',
                    children: [
                      (0, W.jsx)("div", {
                        className: 'van-sticky',
                        children: [
                          (0, W.jsx)("div", {
                            className: 'van-tabs__wrap van-tabs__wrap--scrollable',
                            children: [
                              (0, W.jsx)("div", {
                                role: 'tablist',
                                className: 'van-tabs__nav van-tabs__nav--line van-tabs__nav--complete',
                                children: [
                                  (0, W.jsx)("div", {
                                    role: 'tab',
                                    className: 'van-tab van-tab--active',
                                    children: [
                                      (0, W.jsx)("span", {
                                        className: 'van-tab__text',
                                        children: [
                                          (0, W.jsx)("p", {
                                            'data-v-fbe8fd4c': '',
                                            className: 'title-style',
                                            children: '月之暗面',
                                          })
                                        ]
                                      })
                                    ]
                                  }),
                                  (0, W.jsx)("div", {
                                    className: 'van-tabs__line',
                                    children: '',
                                  })
                                ]
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          });
        },
        gi = function (e) {
          var t = e.isCase,
            n = e.cid,
            r = B(function (e) {
              return e.busy_banner;
            }),
            c = (0, d.aK)(function (e) {
              return e.detailsMap[e.chatId];
            }),
            l = (0, d.aK)(function (e) {
              return e.segmentsMap[e.chatId];
            }),
            u = (0, d.aK)(function (e) {
              return e.loading;
            }),
            m = (0, a.useState)(!1),
            f = _()(m, 2),
            h = f[0],
            v = f[1],
            A =
              null != l && l.length
                ? l[(null == l ? void 0 : l.length) - 1]
                : null,
            j = (0, k.BL)().keydown;
          (0, a.useEffect)(
            function () {
              if (!t && A) {
                var e = d.aK.getState(),
                  n = e.stateMap,
                  a = e.segmentsMap,
                  r = e.chatId;
                if (!(n[r] || {}).chatting) {
                  var i = a[r];
                  p.d.withContinueStream(i);
                }
              }
            },
            [null == A ? void 0 : A.id, t]
          ),
            (0, a.useEffect)(
              function () {
                t ? Z.Ee.getCaseFiles(n) : n && Z.Ee.getFiles(n);
              },
              [n, t]
            ),
            (0, a.useEffect)(function () {
              E.C.getDebugData().debugging &&
                (j("", ["ctrl", "shift", "h"], function (e) {
                  (0, s.VY)().route.to({}, { to: "/" });
                }),
                j("", ["CommandOrControl", "k"], function (e) {
                  w();
                }));
            }, []);
          var w = (function () {
            var e = b()(
              x()().mark(function e() {
                var n, a, r, i;
                return x()().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (((0, o.GE)("create_new_conversation_btn"), !h)) {
                          e.next = 3;
                          break;
                        }
                        return e.abrupt("return");
                      case 3:
                        if (
                          ((n = d.aK.getState()),
                          (a = n.segmentsMap),
                          (r = n.chatId),
                          (i = a[r]),
                          !(
                            t ||
                            (null != i && i.length) ||
                            (null != c && c.error)
                          ))
                        ) {
                          e.next = 14;
                          break;
                        }
                        return v(!0), (e.next = 10), d.W6.create();
                      case 10:
                        e.sent, v(!1), (e.next = 17);
                        break;
                      case 14:
                        N.F.clear(), P.A.closePopover(), Z.Ee.currentClear();
                      case 17:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
          return (0, W.jsxs)("div", {
            className: y()(dn, g()({}, mn, 0 !== r)),
            children: [
              !t && (0, W.jsx)(ue, {}),
              (0, W.jsx)(F, { busy_banner: r }),
              (0, W.jsx)(hi, {
                createNewChat: w,
                isCase: t,
                hiddnTitle: "1m" === (null == c ? void 0 : c.type)
              }),
              (0, W.jsx)("div", {
                className: pn,
                children: (0, W.jsxs)(i.Z, {
                  full: !0,
                  flex: !0,
                  column: !0,
                  loading: u,
                  children: [
                    ((null == c ? void 0 : c.error) ||
                      "1m" === (null == c ? void 0 : c.type)) &&
                      (0, W.jsx)("div", {
                        className: fn,
                        children: (0, W.jsx)(C.Z, {
                          type: "error",
                          showIcon: !0,
                          message: "会话不存在",
                          className: hn
                        })
                      }),
                    !(null != c && c.error) &&
                      "1m" !== (null == c ? void 0 : c.type) &&
                      (0, W.jsxs)(W.Fragment, {
                        children: [
                          (0, W.jsx)(de.t, {}),
                          (0, W.jsx)(i.Z, {
                            full: !0,
                            item: !0,
                            position: "relative",
                            children: (0, W.jsx)(ln, { cid: n, isCase: t })
                          }),
                          (0, W.jsx)(Fr, {
                            loading: u,
                            createNewChat: w,
                            details: c
                          })
                        ]
                      })
                  ]
                })
              })
            ]
          });
        },
        vi = r().memo(gi),
        xi = n(98658),
        Ai = n(2174),
        bi = n(9335),
        ji = "TargetBox___wtHL5",
        _i = "DropBox____hfLi",
        Ci = "inner___lep5B",
        wi = "drop_area___MA23Y",
        yi = "title___qtFnk",
        ki = "desc___XjcGo",
        Ei = function (e) {
          var t = e.onDrop,
            n = (0, a.useState)(!1),
            r = _()(n, 2),
            i = r[0],
            o = r[1],
            s = (0, xi.L)(
              function () {
                return {
                  accept: [Ai.FILE],
                  drop: function (e) {
                    t && t(e);
                  },
                  canDrop: function (e) {
                    return !0;
                  },
                  hover: function (e) {},
                  collect: function (e) {
                    return (
                      e.getItem() && (i || o(!0)),
                      { isOver: e.isOver(), canDrop: e.canDrop() }
                    );
                  }
                };
              },
              [e]
            ),
            c = _()(s, 2),
            l = c[0],
            u = l.canDrop,
            d = l.isOver,
            m = c[1],
            p = u && d;
          return (0, W.jsx)("div", {
            ref: m,
            className: y()(ji, g()({}, _i, u)),
            children:
              !!p &&
              (0, W.jsx)("div", {
                className: Ci,
                children: (0, W.jsxs)("div", {
                  className: wi,
                  children: [
                    (0, W.jsx)("img", { src: bi, alt: "" }),
                    (0, W.jsx)("div", {
                      className: yi,
                      children: (0, W.jsx)(Gt._H, {
                        id: "msh.chat.file.upload.drop"
                      })
                    }),
                    (0, W.jsx)("div", {
                      className: ki,
                      children: (0, W.jsx)(Gt._H, {
                        id: "msh.chat.file.upload.support.type"
                      })
                    })
                  ]
                })
              })
          });
        },
        Ni = function (e) {
          e.onDropFiles;
          var t = e.style,
            n = Kn.R.useState().file,
            r = (0, a.useCallback)(function (e) {
              if (!(0, c.wt)()) return !1;
              if (e) {
                var t = e.files;
                Z.Vw.setState(function (e) {
                  e.dropFiles = t;
                });
              }
            }, []);
          return n ? (0, W.jsx)(Ei, { onDrop: r, style: t }) : null;
        },
        Zi = n(89858),
        Pi = n.p + "static/top_dark.65d30095.png",
        Si = n.p + "static/top_light.b62233f8.png",
        Ii = n(95060),
        Mi = n(85894),
        Li = n(85305),
        Ri = n.p + "static/megaGif-dark.44056530.apng",
        Bi = n.p + "static/megaGif-light.59051046.apng",
        Ti = n.p + "static/megaInfo-dark.dfea4bb6.png",
        Qi = n.p + "static/megaInfo-light.bbfaa3e6.png",
        Di = n.p + "static/megaInList-dark.d7ec378d.png",
        Ki = n.p + "static/megaInList-light.60cf6e2b.png",
        Gi = n(63806),
        Wi = "posterContainer___DDZVR",
        Fi = "gif___mCTgG",
        zi = "title___L4Mc6",
        Oi = function (e) {
          var t = e.open,
            n = e.onClose,
            a = e.onConfirm,
            r = e.waiting1M,
            o = (0, H.M)("thememode.thememode", (0, H.R)("mode")).mode;
          return (0, W.jsx)(Gi.Z, {
            title: "申请内测",
            open: t,
            onClose: n,
            footer: !1,
            width: "auto",
            modalsx: { title: { fontWeight: "500" } },
            children: (0, W.jsxs)(i.Z, {
              center: !0,
              flex: !0,
              column: !0,
              gap: "var(--lg,16px)",
              children: [
                (0, W.jsxs)("div", {
                  className: Wi,
                  children: [
                    !r &&
                      (0, W.jsxs)(W.Fragment, {
                        children: [
                          (0, W.jsx)("img", {
                            src:
                              "dark" === o
                                ? "data:image/png;base64,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"
                                : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAmgAAAB8CAMAAADq6bzfAAAC61BMVEUAAAAwnf8xnf8xnv8xnf8zn/8xnf9xvP8xnv9Mqv8xnv9uuf8+o/9zvf9Wr/8xnv8ynf8wnf9Urv86of9Cpf9ApP9Kqf8ynv83oP9esv8znv80n/8wm/81n/8xnf8zof9Pq/88ov8KnP8wnf9mtv9Srf9bsf9ZsP8Vg/9ruP9IqP9Co/8Lm/9ktP9htP8Fpv9pt/8XgP9PrP8Dq/8Ye/8TiP9JqP8xnf9dsv9Fpv91vv9ktf9ApP8Sl/8xn/8+pP8Pkf9Trf9ltf9Nq/97wP8/pP8Hof8adv9puP9Srf8ad/80ov8RjP8WgP8xnf9ot/94v/94vv8Pkv92vv8Nlv8Wgf8xnf95v/8ccv9asf8Go/9Wrv9Oq/8Ml/9Urv9Gp/8+pP85ov98wf8ad/9PrP9Ep/8znf97wP8BsP8Jnv8KnP9Kqf93vv82oP9dsv9fs/99wf97wP9IqP8Siv9xvP8CsP8Zef8xnv8xnf8LnP8Qjf9jtf8Iof9zvP8ynf8Nlf80n/87ov8Tif9Srv8wnf9Nqv8Vgv9quP9Urv9vuv9wu/9PrP8xnv9/wv9Srf8Fp/9mtv8wnf8/pP+Bwv9Dpv9/wv9ruP9Vr/88o/9bsf8wnf8Km/8Th/8SiP8Iof8cc/9Rrf94vv9fs/+Awv9dsv9itP8Rjf8Thv9wu/8Knv9yvP9itf8JnP9yvP9uuv8aeP8FqP9Jqf8Wgf8wnP8FqP8Siv8adv84of8Jn/9Apf8xnv8wnf8Ho/8QkP8Ho/8Zef9jtf8Pkv9Fpv8xnf+Cw/9suf8RjP8FqP8Zdf+Awv+DxP9asP8yn/9JqP8xnf8ynf89o/9Xr/98wf9Bpf9zvf8/pP9mtv9suf9HqP9+wf9Vrv9gs/+Aw/91vf9Epv88ov9vuv9itP9ot/9RrP96wP9ktf9xvP9tuv9Mqv9Pq/9Oq/9esv96v/9Wr/9Trf9fs/86of93vv9ZsP9Cpv9nt/84oP9bsf9ruf9uu//wvlCGAAAAznRSTlMA8v7y8yDf8rbyv/Ly8vJ5Pf7y8vLy8mDz8vJAQPJ/D/Pz81vy8/PyPfLzID0f8/PyHvLy8vM/0w/z8vOfD5f+8+A+/g+18/O1n1se8tSfbvM+LcB58+8f8595PR7zgH95/r+2eVsv8vLUl2Jftpd58ra1eS8el49wHrZfW09OtmtbWy7j32rS0qCXl4h/TuPg3pfy4N+/tYDfxba2mJfTwNG/mI6A48WOiHn+4+B/47aOiHnU1HnfxcGnl2pMp6fv1NKv8+OmTEzz8uOfp1bz2uAAAB/iSURBVHja7JxbbFRVFIZ3h84wCtKOCoitnZKKRkhNwwMzICmhrUlJE4amSRsCUSG1PIAoTROaNDSY1lAUGpCLyhMgJESCCfHBIC/Gy4O3DreCiMhdVEAEUXx07bXWPvtcZu85xXvs3+m0c2bmQOnHv/a67COGNaxhDWtYwxrWsIY1rGENa1jDGtb/Q1PEv05J8Q8o/YfebHt38lXUi8Ki7iKpNuFREapY/Mc17emZ7ZvvP3p0tQin8ZHswEBkYCAq/jpFuzvnxiJ3i79bjfUjR378cqW4My3tm1re1ypMWjgaNHHiq8Ki6gKpCuHRiBEFBSMK3xH/cU37+eejUgeGAlp2IPIXgrZyAJSNDPzdlrZqJGjUqDV14k7UWl5eftddd7ULgxokZhPvywdaYeEIP2h4sEj8s9o9P6g5OWUKjh8AaFLTQoIGEEQANiNoyWhomQLIAJwfNF6YdHc44QnCaw1gJrVH3IEWlk8FzkD9JtAAs/ygFYKjBUGDwyFBq+tYtWxVY0ee5+uEWZU1XV01wRPsvHLlV6mboMM3Dx++du3aV1I/Sl0AfQ/6AfSdCaSn2dL2h3W0gYjV0UrAjeCWAFiy0pdACXkPx5DRAXp/BO5NqMLT8sWfC5PgaT4vfIen5LPDoUiWHsNdmWCtf5PUItzKvPkyC/9dO5izx9aIO9CzhNm4ca+YQLsPMLsvv6MVsKNFi1kQOAG/avWwzULZ+h1fg06ePPnCilW5ns80HTt27FvQvrUtIpdq6t8/fvzS8UuXLu3s8oP2Kwk4g9u1rw4HQKv9XnKmQJvytE/7EbPBwbGve9VmBC1rXaOVMlVAQCLBv3KFGVkVfKHDRsMChuD1zcIkOluCT0bnTUiI+Q/MEtEOaCs+/fSjTZ9s2tQoXHpr3rx5M2bcA3qLVmjM2WOP3VHkRMwANI6d09qfbH/SrQPAGSj1HCuuJLQOFgBVDFpRAT4AP0P65B18jiioNmL25teok6gjWxqFT5l7TgNnRNrZszlQq9l6/jjoEurchq6go91EHUZJygi0C8rRan+odUCb9iXrmy+/QZGhDQJqhw4NHgKdAf20aNF4A2jsHmZHw987mVmWf+VwDwhI80k4bMAh4yKNT9FmBE36VsTBN0to8R/FlGXdoH300UebNm16odHD2Qwp5AzVgpSB7szREDTQF/z4fqmxoNFSEwmzB6QeeuihBx98EGwKOAKCvI4GRDFoQFWhfB6TAYyfhRK2gyK3WrZ4ODt55Mh6L4dNp4kzBu3svg4/iOfP3wLOELW95y6dO7fbDRr7GQo5Q0dzMLuAkdMHGos5U6ABaSQJ2k9m0LIY/CygAWJIQSTCGSorC0/gR5YtjnPM0hJHpSWl8KiMT7GylI/hPUilB1k4B54H7qQGGF8GTx3QoG0CffKCG7Rl85Ay5Iz1MXJWVfXyHa3RgDLQ5MnPukDzYAYizJgzyY78FKR3DlZXp9C/4tXV1UlRREZW6Hyhl5screPTr1nIGchLWt2O0wAaYsag/TbKS9rbwNktgAxj517gTJOmQyet0Ai0awya42i1EDgtoDFnswYHZxFmP0lZHA15MYfOLCYLWfkyqQi5Ey+k4BnCQ4fOMoIDPzU4vBTUa7xIVtMNz2DczOIH4qzXaRiXEwHQXgBp0FbJqClBGwmcsTLE2Zo7q2/sJ84OCAXa2ICdIWjMGXoVxkZBihcwS0hWAzqaBIx4RG+j0GnyswBoFy+6Fmp7bkjQGLWzABpoVKU75z6vDQ0kHe3UuYxQmv+GI8Ts8LXZPr3E8oPmjpyDANmsQY6cTJoJNF5qWRzNK2YIKYOv9IjYYtDwKBxSJBI9IDRBCru4BHMykJhFZJb47k4NGtiZG7SOfWxnzBm73Jqqqqr6O62jtX4wefLm1qQDmsbsPm/YBGFALKRgqEHjRZkUgIbfIV9Y30AGjY7m4+wkgbalzvnRTitDO+Y42uXLW13J5gYA7bgkjVZoUqdOvV8pggLOIBN4NF/dzOtnIEoGQEgZaZEZNCLHUt4o9aqTAmVzqV8lpRo04EkzmJArPLY57YrAWogqcXJlFt8qz7dSaNCAsiVLlijQWnYoznxhsq6y7o+0V6a41mxjR49FzECeqAkqVHYGoBU4oNF6jHGKioo4i9hLqYc5K+vrv9aguRztquNI+8DQCDXmDHT58uVG7XjnQWxoGrRT80VQtESbHQ609plGPUmeZksGELSQKiV7iQmTyijYycoEEyITVnQ3fIDClDJ/lbg0hpmHzDk2lgoNGnLGoGnORgJnf5XanvGo6Jl1wBloWxHrHbzBpwKNEGM1CEd0oMhaPXMMbfGqOlG3bIvk7OrFixcXO4Z2g1OBplWVjXtGnkWxpbGhsaNtyFR2dG04t5dIu54WAdEKrS8caJbeZnTRGWvozGaHBFoJBkEbaCqUImEgpoqtkxJJSmKj+ewMX41vWJkUHtCWEGjM2T3E2VoRWpULFvQIrXQPPQ6vBvKzYOTToOGKn5IEF2hkdAo0e8q5Xj0EPwNDu7hEkJpusJ+9TT/MSOLsxAkVGrsczpCs9Jq97Gm7g/8SEDgBtO1/HDQZOH/5xQgaWkY2PGhoURbQOmOoZjKv5phbzVy44IdR+5+0US7PMA9p1n97Ddq8eY2UfyFloCZvnFz1stTy5ZX8b7+clBaictdnj44ZM6avNU2Utb42dWo5dDZfWSgcPfMqyQwaBE0LaBVgb9vQvN6D75LCEWYEhXbQOHi+6SzJKHJevdpC4N1gQ9uhflRcowFoAB5q63kKnbf4h0+/D5TJ2Bms9fTQGu3PAE0mnWZHI8ViGzUP8P1KYzQjV4qJPCqjyv6Hwq25ESyNUX89hJ0NUDX5bh+RK5YgZwhausnAmXj+YaknnqgRqOUTpB55pFJkPntUcjbm3nv7JFkL+qaCsLP5gXa19unTp98PMoKGScCI6nxNdeoMxDkTgC9Yq6W0k5QymZpe+9chaBA8Ozhyko41CgUWOZqKnXXnOed0PH43ggYKxM4FWKy9NickaE+7c4FBEOScZ2Q2MDOKZTSzo6EiulBKpYu5ZtDQZzYK0R21r+XwtM2eVnpMFjI4fbSrJKZzhsDLVyBmBNrLBs4ANMTMC9ojANrzhBmABqSlxdJJkjLgTOqlHg0alWhtoAEqVtAOYhEXQeN2AEinDdwkSJlMbZlwBJihoxFZeyRk8LlPl3KAMwnaY8RRzXkOnR2ClQbQQNevdAmfutDQvhqTo7ixPQDaNwAaijij+gZlnTPDOBr1iDiuIUlm0KgxuVFEm7NlwqIULa5KhVYbUx0Nk2xSTgFBuk0EQCPOZjQKsUdxtqZFBEB7QupxDdojErQM2xlqUms/YCZB407AAQe0+4OgySxAaR2UaAGZbbD+hw9SQ8DRRgBTDJoCS/OG94XkaHbVgaEdAUfj0NnEK7Q9eqH1mzQ0iJ0dqimA5doNrhEDzAWuX98V6GRJR8MGlLf/BG2BXAkCOZoC7egsqm6Ap80UU0DRaNIAWiLCtVQsjaqMMWF3tEQkJlLga3dbkClDpjxh8nPiLJU3xYsNKMwwCwiARpwBaG8hZcRZADTiTIP2COhRwkxxNmn2bKSsHCiD2+Rx4/oF6UlqBYwWLmGJFpNNLNEWUtdJ+1SxcR4tDs4FNwUYAohfw4G26sjVI9LQOBmYwbmAq4A7CiztBIhccC2v0OqFo10QOs+Bo/EhraeoK6Ab6rovsN0I2lGnigZ+NgtiJzha/jEhbA3o+InczbVknbKMH6MGQGy82ZWoMhtxgRKjYMjvsTIKjibb7M3dQuQGbQaoETi7x8AZgIaYadD8mE2SotUZiloB7Ro0rNAKl9wlWu1LWKvFLwbQkkUN0tH0Mo1g495AGNAWSzsD0prI325wW6DDZVgycoLe5lzg1vnjQNpul3Gho5268obwaT4u0cjQdKuzFkirNYAGIs44coJCgMY1B5Ie/DGDlsVed7NkAR3HPGVG7fcyN9SAHnYh7AKISeyYQdCos7kCKEPlnG58HjDzgvYoSGI2xuGsXEpjBtqcZNCw4+R1NKDsAUo2uWXJxDBBhQHQ0LW29RZUxKnjjm+j+ImRFxG1gsZJJ6/RyK86TnMZzfVDr/2NSFtL2IGfyWSgy2WKp6SuB0HbDqHTZWg/op/BDUaE5hhAc9oCCBoYWhhH4zLqyjKvukO1pKTtGIsUJRj/sjod2Ih+yVHZDhqy32xKGlbQnAbbGc6dvZUDNEkZJAAKNEmZ5Gx260KRXjpb2lk52tn+hVD5/4BAmz69xwFtNMgPGrcCEDC+Z6sCBR2NVBgs/8eRsbjILy6jXQVt4RF11ecUWnsocjJoXK695YqtNbRGu3Jd+DSbDO2ay9DU6Mb+/M2TA2pA6MCU/KHTMI9mBg3wiZVxK93Cw93SH4FhX95RGgI0HEUzErmCOSPKaO6sIydoE7ygYdQkkvonqaLGUsqqJkvMQP0M2mjUROESYIarMx71YcSUqwUcrTiuni/KARqQFg60ui1Y24CPZQq0GwjaPe5ZDQBNokZLMMgEsAFV46rLAmYStCvCJ4icUk+5Naf2ezkh9LTIo9VjORU487oQeR3N0Ou0O1pMdHMBAmBamTQWg6U3cdoYw4nZbIgiWpk8sQ00woxFc2f1OUCbgFrAoPHqTI3M9k317gpoZ9CeZdC4sylceo4amwXdxV5BF8DfaEoWr0sxg4W5qm0yloZztLodR8jQLm4RDBo31Pe5QbtMjkaFNMw5A6CdAsyu+0HrocjZ5y2a0XBtaz47gxmhWRK0d0tEXtCwOZQYAmiUN8SEiMa4U24Mn7EIBldCqwxXf4lIaQjQqC1vB82hjECrygRAm/C4BzTOAlRa+QpxBoZGWj2dSrQu0Cb6QGvoBTsLRrwKXHp5fYvZ48gaL4771ItP9sZB3cKqN6mjDilniwMaKCdot12gnb8VcDRQwNH6qbbxmveg5Ky2dmkeO1OzG08mRX7QwGOG5mg0JLYRR2ezaogHe0QBleKzVKCNDiB1oXbdlSXstbwVhJnmrArmzj6u9IPGrQAFGiebqiTbykkAPy2eRcw0aDx35v23xZjp21oS7aXiWCqYBxRKzmCyNlWB3MG3TqjF5/FRRX7OLh45woFTO9rpAGiXgTQG7ZZcod1yg9ZDS7QAaLsoFXjKu9WwFkDDmUeLNmPKOevQ6M5wm1MiEN+GBloioaY3OnkcAzKKMkPiiXWKUpGM8aBuNAxo1JC3gKYxy3ws7UyqPg9o9xJoCxVoXNSYpkDjVoADGk3RCo/eo4qrewtdNEUVst4GD5LUAEC8Uu8UV6hcU0ZSRRkDV2HljEbRQNxg147mTQYwct5WyQAPPbqTgVOgHKBtv4ZT3P3e2hos0cDS8oBGhvZumwgFGnadhpwMIGhcWsW+Qu46RxsX5pqjH+K78FVhQMtak4F6vThbJjLI2cOgjB+0R6QeVaBx8cwNmsw0HdCIMwc0njvzFQdTWKQgG+IjbF3ezLJblnP1RFCFfAnyiPiRBdKdFbT1xNmRq1c1Z6IDOfOVNyh03nZAOy7V5QKNOZsgPErL2Q2o16a948W1uEZb6MYKO1Cko6TBWU7/CT4XLfpJDm/88q4pGUAShgQar9H4/3OEJyGjhuE0epbncWPJcKBhtdYO2ijiDB5VMWgbKoOgQarJoL0ClN07aaoLtHGyFaBBQ8w0aDzeKLxq68Xql+ND0RTzss7XCpU4asciRwNxQ0HeMK4iaBbOGDTyM1YLD3F/6/p5t5Kj3eaCLRY3vAVbmXUCaH2BTue1QC4g5qChfZcOgObuqGMmALczKABtEWBmBg2WaAbQrNvvYm4q5DnGG0scPJqG9+FstgyT1Ug+0Lh61kGcQWez3gsatZzGaNCwE6BBoxrtNN+uAA0ayA8ae5P8XK04w/C4TfjUWzAiHsdwiaABU9RBACGp+BTeKmycMWjeSbsZvFfA3YI6QaR1kb8RZ5fWultQlHTu9EVO2mg3x3f0e1yjeQKle7cA7RcAcRWN9wtYQRsghXc0gMo7j9Y5YAmJ0WZ8OU1x64WcXVijy9ocDSDTVdo9NA8E6veAxp0ABRp1nDRoxJkGjXefvMilDDK0h4RfRcgKedjqXm4kpRqET+uKkq7tdg1QBFldUBgvVtqGO1S2yW+TFs6INOJMawfvF3A11c+eIEerIfuiyOluqu+USSc42q7A1KN0tGl+0ICz2rtEDkf7GT50W+AQhc5DwBkYmhU0HH81gGYbE/L0wC0hsZR2WcE90hgSNIDS5mhc0+CkKr0GOMPG5oa0GzTkTIPGnU0HtMnUCXBAQ8w0aLz5RARJU53KVFy1CJCzoKrxZRU66Op0lZqfcevso8KMJ7i11h7jOW7dpLrMoPGYEOQCuM2u0iEKks4r1+Gj39/oBMwCGwZekuXa717KBRpyhgLOBoGyQ/ITprjP/CRJW2RxtMjQHA2HNxIxj23ZZmXnUl6aCP+HcGfA4mjEmQJN1BBmoOU+0Ma4QOOOkwZNcqZBexE5m6hBowa6COodIo0FDwyciWrksMK9uNNbCqTiNs6cfSk7/I3cjNrRqQcfT2DovL2Gi7y3eP+Ts0jrOsWORuix+m8SaP6mZq0so3mHNzbjHnVvQ13t6JRahLKt0ShMhQeNNs/FQl77DNJN3gUKihkqLoYUwgIa7Q2uEaz5DNoE6qAzaNwKUKAhZ17QZInWcTRuBSjQHnoAO04ih4qwPKZW90bOxEEs7xJoGCsxB7V3BuycMUfqWgj1qmOuDG2PAo+3P72fZtN/g5PONzyB8w3JGYTOSl8qitUNL2hTAoI6mhwRUg+jU6IkA2jcRhoCaFlao4VRsqxZL9Agj4zAWFHYOpotdNLWYA1aegNQhq3NvrQRNG45KdCeQc40aC/ypk0HNOqgi1x6T+3LxDwgKQzCqi2D1pCiWSImLY75pxm0Zc7O4S0tIqAmxAxESWbLPs45b3coz0PQQLz2nw+cQej0LdHm4/6n4Bh3D+1RbxdWbZ6FhibCiZOBxBDWaKiNoU4ek+6nPrhbNT5sHc0KGpY0tH1liDPQLg0aYqZBI87GadCwFaBBo06ABo066CKg5GqwI6rx05TtexVJE2jwtF6jAWnS1doQNHx73MYZCgxtMahpcROJf1znmhtrO+oqM6NwdAMjJytddfwWgrZ3Q386XbMTOZOq9Iw8Mmh0UGup7D/V4pSQvTMwOCTQhtiCoiVXftCSnbEIvdZz9aEIoBYNtbElawGtikHTh5AyagSwWrlCq0CjaW3taNNBbtAkZxPdoGELPUhZoWeBhgLWorlAA5h0F6EYX8wP49ggiJs5A6lcgPcL3JDi2HmP2qPOO4fZ0XSBdjc52l74OIdC0K7P93J2EyPnU8KnPizX4vCGFTTMA0JeV69zgGZ5SqMBmbJIMqYQQROSBh6kbO78kKKhNE9Z8y/JA1pCMmkF7WGQu2dMoEHljIMngzZJg8bjjQ5o90/HEq0GjSpnDFqcx2iFZyJjG48v6kHZEWqUMXWwos0fYb2XFq2QL1vtSgZMjla3SflZEDQmkRztLItXaK5qRvr9S3hdtHPIGRkaJAOVLs4AM6zWcspZKbVw4cKe/u21BFp/Xkc7BDKXwWjHsHIZzAV4sAJNx3nKlHWGAK3kbj4f7ViXg7KdzbR7ji/AEQPWTP8HSmL4d7KAVsWg+Tub2At4XoGGmJlBQ8z8oD3gAg0rrIKU7F4X1z1KpE2jps0tvm51VLi7U5QMsFZDLsBnk35mBK2F/UxZ2lWcEpKcnRasJvfFEHgW7TF3CMwAZiDYOLyXQJO1jd0uzm4iZ1Ct5Xftv3DhR70vRYLWYx8SwhXaLDNoWHXP0m89CxSw6cAx4i5LewiMoCEqttBZUtacjcCpcR8TDkZy/imZRsgJ7NjcNl8U5+fJ+WygAWZ+0NJ9zuaTHg9oUxVo46gV4AJtrAc0iRlIhU6+Pgszo2YcJSAIGlBS3FDtDNlyXwnuinntn0qh+3ka8EVFvRpLwNgCGlEmQWNDY0dj1e371hU5qdG5Sri1W110gznz7oDaBZxJ0HTgXPojUIagEWZcRgtq/0zUWNosYAMtgoyB5Ui74d87lyBoIUXOZm+qW+Ienoy8DOf+dW6QZaqzuTKQaNZ7uStzfbdebw3WWkCcAWjbGTTErLxcgUacadDG0vYTDdoDqArXrDXcXIOKzAcWNnrXFSNPB+k4+pNnB0AvdjMD0xnbCEueF3rPDho7GnOG0muFHa6ru8gq2mNdwqvdkjO40dZhT8aZ3qmuv6fng3p4iFuBZswF2lURDddoZtCINEJBXdpCXfaMI9sAyrQxOAtgWhwtqnaKIjcpz5xj50ZEDOEONqSa6WIdmJ3gPmMraLw1WGu5s8spQ6BhJ0CDxpsCNGggN2jcCtCggQg07orT0AXt5kwKVkNRyjP6c1ARBcfoYLc3P9CCUocdNMbMDxrrbXVdNDS0rcFZ9q4Ne4EzFTknZNyJgLr+noume5kzHHoEQ5ticjQs1+KOTtAHljXaAElW31H6YnpK1tCJMMbsl3tPIMvBslm0LIYk4+ykvyiQUleUZPyNGcOuepJ3EZF+TWkOVWDx+/Z2FUnbSc4Vz54kqfjd/RypmHuV3kvSJnuRJpAyM63iapzaJq6KNVF8yDunxs1RssAGA2iL/WpS8rxs7T7mbNTWGpFLXTvPsaHt3M05kl6iEWdafeRoF8DRgLO7jCu0fuBMdwVmmh0NicLNT/J7+qWr6/tolzOGTlzg2UBLNjO/hJkftfExMtNI4Nm5vGeYomdio/g3aR2ZUG91zia4zEfR7lKaKBrP8IXHbt7Hwm35P6rKxmWZZcs60sKkdE1XJtPVzy/we9rv7NwxCsIwGIbhH0GQ4lBBcBEzOHa3Tl6goFtBENy6eAFBCIK4iafwBk7eSDyFbY1YsU1FkHZ4nzkUCh9/PkjI/G1SJSUtdbvul8Wf9LJBa3uSL3K+Zr2PZkvBIF3iaCnQ8/Mfvlo/RpkpimFT6sSNUxPPMiVFguHEz2THNZW/FbyviptbUvKS/XcrVTFJO0nWYmUcd2Ox6b6uCF0i+QfzeHLJ1ikq7DScvlhE0zDn0Eun1exRIP2Bkno5nF0pE+hADDVMaPURWCOq/P82M/nNaGVoT/5H9VJaLNblKVF5QWw+1WuYAQAAAAAAAAAAAAAAAAAAAAAAAADu7NjNaqNQGMbx91rOyoUg4nEpuFIoupEIIZCVm9GtRDAIgSzcegH52imBQCQkIYtJQjftXNbE92TSfHUaCjM4nfOH1jwN7erHOSU8Ho/H4/F4PB6Px+PxeP9oogh/IUfUPvFLgga8L1Ln2zf4C/Xan/C8UmXgfZH+LLSklxyh6Z+AZnNoX6c/C63RbnBoPA6N927/FTSXQ/sy3UB7LRUl23XYKEsQS0laJsDSppmRjWNx0GKz5RMyC2Ic04EDyYAkcKrfe24/93q9GKHFvVzPRxpgzii3rKLPXg8XkK5Utdi+A00LbdedR2wI3hrWNqUeTvyBaU7WkHo/gFffrqG1DsyWmaJ8xyVJLSkrs8MDZ+wbRpYZfssYI4CNQfzBjPhOtQZEbLRJOzk/zw7puo7Q0jwvnnW9YAQtKy9WlhWiFKs7UlfDXFW3d6HJheva9uEL1xONCmp7lFIHcJsHZ6YZReYT8OrbFbREyRLGzWHQstdqSpJWTd9YigCibzBoAfEPMz48GLRBO9jGGpzS5Kk+lWUZr059qgGkuo6nmPOcwmFZllBBU9WVUHlS87vQRq5dvb2nNoM2x1lQDxWa5r76w6bJodW6K2jL41E2lUoGjc1SSiqFho9XajxDaDEhMaA/IlbQ2vi4qKGf/kcb4TPUX+CtFytl0Bx0mePzGprsMm+aTZ8QGsUpU1qZjkz0BimHVu8uoTlKBlhHyRg0jbnDu3NX+cKJLxIyOE7SQGgBvAutq2/xubW68FZohQitOLpT+3egpW7EZkr3CM1jc4J359wU2JxzaLXuEtqrUgJrKXUQGlsto4K2MUQ2E4TWIpsA25AAoYm/g8beFPRf0Jxtv/9yhDYEbHQXWuSmbDrURmhHdx4V8OYEVtTk0OrcJbREGZ+giTfQfMNhU0RoY3Kq8TA0dqJpYW5VqQ9AG7pHQfIVNBOhTYC15tBqXeebcgFtd4Lm3J5oJ2hkjDdmIB6LP4YmnENbWXl3EYbDR6BFv6A5d6HNgbXg0GpdRzmH5ihLwDRJ0m6gjY3vbH4nY/wewFm9x6H1rVVcrfARaAu6YPMH9W6gwdyUj5NDq3WX0LRMYloSqYQbaK+Gr+H0kZhDZmxq2sfQrHNoCyvEdX2iufegCXSu4dzT9BZaZDKGcpNDq3WX0KAlLTuVoUxKEJpxDg18YxcDaGOC0GBANjF+jOvH70BL9e49aKGFtEL1EWhQMFprasu30ASzua6cTTi0etdR3sIP+6Vs1yolaQpVxiU0Z0b8XTAjAwYt9okfNHazNq570ARdH/X7N9AEVR2Gi1wdfQCNFhUeZ07txcKjFCU9mRfQYN1sTvbefMKvzp/t27FqwzAUhWE9jgZBEGTVC3g0HrR00tSumQqeMmjtG1RzwdC1Q0Lp1sfqCS4hJMRkVJT/W2ywBg0Hwb1XrttJ0FZGwvtK3nbmMmjSP6vEnMZxDpqGAk8yDdfvNg6aQP2cBU22Gm1qHLBZDlpez6eXT2vRPOAyaJJLjDF52hv3JrixD+Yat3fBKGjHxU6LF/R5szdyzm77G7Zi/fzif7uF5VYf1UdjqN6cnRpntUnRGjTCjeY43KxF9v9VZzFohNMI4FB1Hq5r1CLH0ulhi4pPtGJQKfClekDtjFqE7xg/U4kcaE15fZlUdX5U9btll6JixnnWmlBVymYVbgkAAAAAAAAAAAAAAAAAAOCR/AFKWZrPGhzRVAAAAABJRU5ErkJggg==",
                            width: 308,
                            height: 62,
                            className: zi
                          }),
                          (0, W.jsx)("img", {
                            src: "dark" === o ? Ri : Bi,
                            width: 282,
                            height: 166,
                            className: Fi
                          }),
                          (0, W.jsx)("img", {
                            src: "dark" === o ? Ti : Qi,
                            width: 268,
                            height: 64
                          })
                        ]
                      }),
                    r &&
                      (0, W.jsx)("img", {
                        src: "dark" === o ? Di : Ki,
                        width: 404,
                        height: 249
                      })
                  ]
                }),
                !r &&
                  (0, W.jsx)(V.Z, {
                    sx: { width: "100%", fontSize: "16px" },
                    onClick: function () {
                      a();
                    },
                    children: "申请加入"
                  })
              ]
            })
          });
        },
        Ui = "longTextExample___Q0VDW",
        Yi = "title___jz04_",
        qi = "icon___UY3jx",
        Vi = "fileimg___OlldL",
        Hi = "examples___HeL_v",
        Ji = "exampleItem___Wnc3p",
        Xi = "tag___QMWjw",
        $i = function (e) {
          var t = e.cases,
            n = e.is1M,
            r = e.waiting1M,
            l = e.to1MChatPage,
            u = e.sendApplication,
            d = (0, E.l)(function (e) {
              return e.debugging;
            }),
            m = (0, a.useMemo)(
              function () {
                return t && (0, xn.isArray)(t) ? t.slice(0, 3) : [];
              },
              [t]
            ),
            p = (0, H.M)("thememode.thememode", (0, H.R)("mode")).mode,
            f = (0, a.useState)(!1),
            h = _()(f, 2),
            g = h[0],
            v = h[1],
            x = (0, a.useCallback)(function (e) {
              return "url" === e
                ? "🔗 "
                : (0, W.jsx)(Li.Z, { type: e, className: Vi });
            }, []),
            A = new Date("2024-03-18T11:00:00.000+0800").getTime(),
            b = new Date().getTime() >= A;
          return (0, W.jsxs)("div", {
            className: Ui,
            children: [
              (0, W.jsxs)(i.Z, {
                flex: !0,
                center: "y",
                gap: 2,
                className: Yi,
                children: [
                  (0, W.jsx)("img", {
                    className: qi,
                    src:
                      "dark" === p
                        ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAT5SURBVHgB7VjPixRHFH6zLrgo2YwXiSRiC0JMEBxPerP9CxxzySVhZ6+GMOMpgRx2vOWWCTnltC3kkktccw505xTIxVmQ7ArCdDCC8eDOKpoVlc77ul7N1PTU9HT3uOuI88Hrrq4f3d+r96Oqi2iGGd5ulPJ0jqKoyrcKS1AqlQJ6k8Dk29EgVuhNAZOt9Wj/tzVVSsxn7FeJr2FAdO0C0UWPa5ZQ02Qlynz/m8VhOcaC52vsYh5NC5ikH8/3H60oapKSjh+NQYP2AJmCmMlsEWb250tEm2uqcoEneskneo+N0w2J/m0T7XRV/YeIdeqyFQ7RLmM+hTRcocZSJ+UWiqAGyj+eQanbawfONbQCZdoDWBVg8nDw1gAJ+D9kGP0+mP2zdf3k0R5gLlnB5B35uCKmAxcyDueYfNnRT1cpA/h7dbioxM2qWD4zbBaoxVf4NUjjngUgfr6pnzz2/3DcEEnDzaFvEy1TRsxZ6pSjwx0clzKjP/PAjXHdTfI/3L1LX9y+rZuqlAM2BTyWMFbg4iqHcIdzfo3GYjBG4BYNSb83ZSF0qE++bpKHPHr+nIrAmkblY02WpV4l0ifSaBpgMaTW0QhY1kllth55YOnIEfrm+PG4D7tfhoBTsFmA4L8sNS7iRe248mQGy8IC99uUIBwYzy5ZyAMfLCzo4jrlQOpWAjtOtgYC6mZcAT/XQY3yp9fVehD+roij7f66WtyMmRSLNjT5Xx48GCAPnDx4UBePRVjr4cYqHrtpO98se6GwV9IK4A5X0YFrD/ZkIMfu+NvDh/T1nTtDnc8uLupilRKBzAoFfLvEinST41IVkJxc6VW86wyTJ8Lewhnox3X8sZa8A20IjPLG06f0lYX84vx8rNT7+/fTO1xe3LcvrkNZFHNJWbCZHFtKIQ8CmLX+woLZR3Za6FUt612noWyo1wCDvAPyn926RY9fvKA8+PLo0VhIrS1D60OaBepDNf1ZhymvmFtmMW+QGMF5mJx/nj2jyxsbucnDIp8cPqwft2195qgYAjJjYzRcXD7nmb/HSuQByP906lR8F7Rs/dJcKJLi96TIwiJOohvqPVI/MKHlHfE2HFln48kTevzyJd3b2YnboNA2P9usAt//9fRpkzwsXCqqgOnnLqn9ynmLMgEUIZU+Q+mPwPtu1DeQkS5vblKSPGb+owMHBomOUCCXCyEfY4FjwZKJZXnNaHZJ+XxHdpVVyURYC6yLE6yShEEeMTV2R5v1n3gITA7k1yTTuKQylivNNQi3haSymHWL/Of2YFx+e+KESR6KV2gMigZxD7Lt8GTVhWV0zAAO9cnrGT2jx/7FqVUD+yAj41zg97UpAyZWwIQo0xAXu2I0IY4OsTRJFEJq1QGMPI/NnNE3E3nglSqQgEkiNMoOLo8M8rJQAct5j2MKx8AECHD5mDdvNyoVM9tcLXKWtJsWsEJSbJxdEuSbVACvwwJQAid6Hil3att2mRMjccp2Hb+FOce7xng3x7iyjPVNApQXyRcIOrJIuRnG51JA+reMIxYTPhUBFin5Oe+MUGYlMn7W8yog718ZQRqHAfrweHLwiyos3ghl/Gj45MGqQKRcRJ9YJAFFWlEOlyuqTFWUsWFV2gcUiPp+vWUh7e866RGKODLzfpQffqQs8WpcZFKIMvDZTgrpjvRxaJoh7qLjZW/8ercwNS4ywwwzTCf+B+X8EQLyMLP2AAAAAElFTkSuQmCC"
                        : "data:image/png;base64,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",
                    alt: ""
                  }),
                  (0, W.jsx)(U.Z, {
                    variant: "h6",
                    children: (0, W.jsx)(Gt._H, {
                      id: "msh.home.page.try.text.desc"
                    })
                  })
                ]
              }),
              (0, W.jsxs)(xt.Z, {
                gap: 3,
                className: Hi,
                children: [
                  (d || b) &&
                    (0, W.jsx)(Mi.Z, {
                      className: Ji,
                      onClick: function () {
                        (0, c.wt)() && (n ? l() : v(!0));
                      },
                      children: (0, W.jsxs)(i.Z, {
                        flex: !0,
                        center: "y",
                        gap: 1,
                        sx: { justifyContent: "space-between" },
                        children: [
                          (0, W.jsx)(U.Z, {
                            noWrap: !0,
                            variant: "text",
                            children:
                              "🌕【Longer than long】Kimi 支持200万字上下文输入了！"
                          }),
                          n &&
                            (0, W.jsx)("img", {
                              src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAAAsCAYAAAD/709QAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAfDSURBVHgB7VtNbBNHFH6zdsJfDoYeksKhKcmNJjZqOQUq90C4lT+pVK1EgtSGVD0APYDUQ5NQtVJTCbgQAq3Ez6FSkQKEXkhQVasNvQDCSeCWgHsohAvkwF8T707nm/HYu86uvbtJVUH8SSvb69m3M998782b2VlG80BiP4/RMzOZZVaSEXuDEU8QpxgxcbxM4DRNjGU40TQnPhrlRoqWR1LpY2yaQoJRCCQ+mU2aEepiXBD5spEYAJzYpQhnZ9OnopcoIAIR29SR3caYdVR8rafFhQy3qGf8h+ozfi/wRWyi83m9yaOnhasnaTGDU9owqran+1mmXFGjXIHmvTP7LCtya9GTCjBKWHz2VnPHi/3li5ZAc+dsF3HeTRXMBWfdY6eqerz+9iS2QqoPlCDXldgKqQHgQe4cYhFTxccxqsA/uHVg7NRSB2cOYjH6Y6B6lXPT/wjTBqtab88WHFmBIPVihdRQiJk8e9p+Ik9s06cz7UgnqIJQQDqaEBMo/TtPLDOoiyqYFyw1K5WQMTY3Vb0YwAatWMqoZhmFwpPnRE9fcNf/Pn8/Im33/WKKcjzQfdzs7tgUoZqlRNfuWDR5n5e1EW9gtOXtCE2IshdGTAoKw2TvpX+sSkXlL2a2B12PaVxDdKQzSmHR+7NJQzesOefR9C0bGE09NujcVVN8NwTZZSeIEscHrTlk1K0k2rnJoIQg7Iv+bFkb8bWGvH/NbRK2KDCwOCU+UtFEO49ZNLuVAgIqGp0sr4BiQBGA15VQlibi3FWisUmLes9zqbqG1xXBo/dUh8TXCnW9o84N/GHRsEtHaXu4b80yJr2gFBpXq/pNPQ7eNgBLp1hOjZrVZjLM2uG121wc5RVgBxp3pEGp/OFj9zLorCcvVNl4gyF+W9ItgUO7GLWCSMaEEpksM3GfqO9y1rOTtT10zI6NygsOfuDtaQ1rCnVFORCMawIgZj6bSUZFbE1SSLSsM6Ry3VzaDfZYWSreDV1XKmtZxwQxRLUrFZFXrnNqbuB5lUKNA7/DDpPqRQe4xW6ouW2zIW0O37Skq5cDlNu4GgKiwGCMJaNiMTfOKJzs0auoLBrqJ35pVwZKueQFQQRIw2AEHNoVyYcQO9CxLesKv6FOt3qcGzblAaBzvepaIwbKw+0R+b33vElTjzg9fEQhwOuj4ilALNxzhEI80gT4LT/hoVbtAcDUI4QLVa5muTr30beKEHQmjuOXTRmS6lb5H0hRVxCI6+HmGEQ1GlYXysFrwoPFUZt6Cgk0CPAb6DVpXipo22IIVRd6+TvR6D/vcHnO3hnFHart2svg3ODhKof9PpE1DIisYfSuRQc/VF7Qd9nKe0/Q9pRALBp2CouKI/YBWkF+4VXxkXEuj53vGnKwwQDXkCMRZP70pVOVCBEOu0UdNnRd3SfeyGTaVZsjDh2i47ge0IDalaoN4dzfgVjoRFSTKisSsIe9Bi7dwI1NIjUSKn36TNznNfXf2WErP0iCYJDTcVSFhrZWFeft9cD/vefV/4fbonLws4csnYbhuDCiVAvygan5E0tR9eg3uGq12wAdR82y+WEQ6HAw8cCi1g1KlaN3uSROKxido4msy3Wyl9LycdtGPAY6HAgHWrXzzWFtmEYowLPzwMTqER4qWFBSixqnG3ukEwQXXB+E/Pq9M4aiI1xtrskRX5Q7nxVkxieNQqzODZJ+pr4lwSkTxQYFRqyeAqLRppyFhLar1acbq1MkuDyOgVxKplMkL5UhZCFeAwgtdijV2rKCnKdgQjEfcMamo4LUDIWAdi+/qZZf7G7NJf8ijcI9dEagZ1Y7N6rGX7ujzukUyTPTyNlD3CxWNEhv26y8wO/kxQ+Y3E3DjZSYfe0LeG3evSYWULFQoh5kFGlzY2ddbjBjnBxZgtuAA+L0LA0pVjEQo1uaCooGFiK0cc5T0chMJGVVW4EGMPSursxChQKQoNUK+z17DKnatCDYPmU+PqhcF4PZlRsijYqBfC7DQjG+bi/EZBCMuIxZXXpC1Dun3o+/ydKKkMufXogsr06p9di9s78F2ZAhF1PmsWQIbP0q61DGQZGTovFQ3tBNNbfXeCLm/5N/azV5j9qTD7AwpAhra43Q7s3KHtIuuHzxtBiikPY8wgg6y63DSoMPjp1csk2yE2HUY3FKBrn84TxSkpHb3EGq3WWxwA1yhkUC3/IWk9NctdJlt+A+B9fTU6n+XMcgjZJrCJNZGWZ25JYkEWZ0qHHaLmDoJgUG53TGUUPx2Pse/U+b3ZAJIGZDPVpxxQAJCBF1q7wXNkYnuFQziKtdVdqe3aY65toNsV6QGTtZ/Sa+5K3hQZgV8PFMBU5wRnvG+9WOREc3BY21FdjB0mMnq9brX46VkwjL7pFT3AqCgWPDRna7/ZSD2HT/soyYNfZQBQFh9UjubJiz1jd2ovqYyL4r5PoF5z3F+7aAEts4/+kW0biLKvCGJHVJt9tfZTYeV8j1RAlSgbJPu5o/m9lPJnVVNsvlIAd3y9X97fD9ckduJ+Ki3jQnnminkDkVD1RuCPY6UudMu1hVQmiop8WFDDeMA+Mn/L/vFe4FOjFLMxlvE5OJbfSqQri8WLBOYx0l3V+VooAIuaNAQb/yKabCSbnxA3sUoOaX8pVPvO7J0kIsfxkL8MrnvzZ6jUIxTdqYAAAAAElFTkSuQmCC",
                              className: Xi
                            }),
                          !n &&
                            r &&
                            (0, W.jsx)("img", {
                              src: "data:image/png;base64,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",
                              className: Xi
                            })
                        ]
                      })
                    }),
                  null == m
                    ? void 0
                    : m.map(function (e, t) {
                        var n = e.id,
                          a = e.files,
                          r = e.urls,
                          c = (e.prompt, e.title),
                          l = null == a ? void 0 : a[0],
                          u = null == r ? void 0 : r[0];
                        return (0, W.jsx)(
                          Mi.Z,
                          {
                            className: Ji,
                            onClick: function () {
                              (0, o.GE)("chat_demo_".concat(n)),
                                (function (e) {
                                  var t = e.content_length,
                                    n = e.id,
                                    a = Math.floor(Math.random() * t);
                                  (0, s.VY)().route.to(
                                    { index: a, tu: 1 },
                                    { to: "/chat/|".concat(n) }
                                  );
                                })(e);
                            },
                            "data-testid": "msh-example-button-".concat(t),
                            children: (0, W.jsxs)(i.Z, {
                              flex: !0,
                              center: "y",
                              gap: 1,
                              children: [
                                (0, W.jsx)(U.Z, {
                                  noWrap: !0,
                                  variant: "text",
                                  children: c
                                }),
                                l && x(l.content_type),
                                u && !l && x("url"),
                                (0, W.jsxs)(U.Z, {
                                  noWrap: !0,
                                  children: [
                                    l && (0, W.jsx)(U.Z, { children: l.name }),
                                    !l &&
                                      u &&
                                      (0, W.jsx)(U.Z, {
                                        sx: { textDecoration: "underline" },
                                        children: u
                                      })
                                  ]
                                })
                              ]
                            })
                          },
                          n
                        );
                      })
                ]
              }),
              (0, W.jsx)(Oi, {
                open: g,
                waiting1M: r,
                onClose: function () {
                  v(!1);
                },
                onConfirm: u
              })
            ]
          });
        },
        eo = "ChatHeader___nkeIx",
        to = "left___CPr6U",
        no = function (e) {
          var t = e.history,
            n = void 0 === t || t,
            a = e.redirectAfterLogout,
            r = (0, Kt.Z)().isSmallScreen,
            s = (0, d.DD)(function (e) {
              return !e.items || 0 === e.items.length;
            }),
            l = (0, c.E1)(function (e) {
              return e.user;
            });
          return (0, W.jsxs)(i.Z, {
            flex: !0,
            center: !0,
            className: eo,
            children: [
              n &&
                l &&
                (0, W.jsxs)("div", {
                  className: y()(to),
                  children: [
                    !r &&
                      (0, W.jsx)(Hr.Z, {
                        disabled: s,
                        subsize: !0,
                        "data-testid": "msh-header-history-btn",
                        icon: (0, W.jsx)(T.Kr1, { type: "history-chat-new" }),
                        onClick: function () {
                          (0, o.GE)("open_history_conversation_list_btn"),
                            d.W6.openHistory();
                        },
                        children: (0, W.jsx)(Gt._H, {
                          id: "msh.chat.page.history.chat"
                        })
                      }),
                    r &&
                      (0, W.jsx)(Hr.Z, {
                        disabled: s,
                        subsize: !0,
                        "data-testid": "msh-header-history-btn",
                        icon: (0, W.jsx)(T.Kr1, { type: "history-chat-new" }),
                        onClick: function () {
                          (0, o.GE)("open_history_conversation_list_btn"),
                            d.W6.openHistory();
                        }
                      })
                  ]
                }),
              (0, W.jsx)(Or.Z, {}),
              l && (0, W.jsx)(Ur.Z, { redirectAfterLogout: a }),
              !l && (0, W.jsx)(Vr, {})
            ]
          });
        },
        ao = n(95313),
        ro = "textAnimation___lePxw",
        io = "line___cfcjU",
        oo = [
          "文件，拖进来；网址，发出来",
          "每一次，都集中全力",
          "别焦虑，Kimi  帮你整理资料"
        ],
        so = function (e) {
          var t = e.str,
            n = e.EndCallback,
            r = (0, a.useRef)(null),
            i = (0, a.useState)(1),
            o = _()(i, 2),
            s = o[0],
            c = o[1],
            l = (0, a.useCallback)(function () {
              clearInterval(r.current), (r.current = null);
            }, []);
          return (
            (0, a.useEffect)(
              function () {
                c(1),
                  (r.current = setInterval(function () {
                    c(function (e) {
                      return e + 1;
                    });
                  }, 150));
              },
              [t]
            ),
            (0, a.useEffect)(
              function () {
                s >= t.length && (l(), null == n || n());
              },
              [s]
            ),
            (0, W.jsx)(O.Z, {
              component: "span",
              sx: { mr: 1, fontSize: [16, 24], lineHeight: ["24px", "34px"] },
              children: null == t ? void 0 : t.substr(0, s)
            })
          );
        },
        co = function () {
          var e = (0, ir.x)({ n: 0 }),
            t = _()(e, 2),
            n = t[0],
            r = t[1],
            i = (0, a.useRef)(null);
          (0, a.useEffect)(function () {
            return function () {
              o();
            };
          }, []);
          var o = function () {
            clearTimeout(i.current), (i.current = null);
          };
          return (0, W.jsxs)(O.Z, {
            component: "div",
            sx: { mb: 10 },
            className: ro,
            children: [
              (0, W.jsx)(so, {
                EndCallback: function () {
                  i.current = setTimeout(function () {
                    r(function (e) {
                      e.n = e.n + 1 >= oo.length ? 0 : e.n + 1;
                    });
                  }, 3e3);
                },
                str: oo[n.n]
              }),
              (0, W.jsx)(O.Z, {
                component: "span",
                className: io,
                sx: {
                  mb: "-3px",
                  width: "16px",
                  height: "2px",
                  background: "#4f9fff",
                  display: "inline-block"
                }
              })
            ]
          });
        };
      Object.defineProperty,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      n.p;
      var lo = "homepage___IO5RX",
        uo = "container___Zhj7N",
        mo = "box___piA7B",
        po = "top___UkDdR",
        fo = "img___IORf9",
        ho = function () {
          var e = (0, d.aK)(function (e) {
              return e.demoPromptsList;
            }),
            t = (0, H.M)("thememode.thememode", (0, H.R)("mode")).mode,
            n = (0, a.useState)(!1),
            r = _()(n, 2),
            o = r[0],
            l = r[1],
            u = c.xZ.useState().is1M,
            m = (0, c.E1)(function (e) {
              return e.waiting1M;
            });
          (0, a.useEffect)(
            function () {
              e || d.W6.demoPrompt();
            },
            [e]
          );
          var p = (0, k.BL)().keydown,
            f = (0, a.useCallback)(
              b()(
                x()().mark(function e() {
                  var t, n, a;
                  return x()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = (0, s.VY)()),
                            (n = t.route),
                            (e.next = 3),
                            ao.P.create1M()
                          );
                        case 3:
                          (a = e.sent),
                            n.to({}, { to: "/chat/1m/".concat(a.id) });
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              []
            ),
            h = (0, a.useCallback)(
              b()(
                x()().mark(function e() {
                  return x()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          u || m || Ii.I.apply1M();
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [u, m]
            );
          return (
            (0, a.useEffect)(function () {
              if (E.C.getDebugData().debugging) {
                var e = (function () {
                  var e = b()(
                    x()().mark(function e() {
                      return x()().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!o) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return");
                            case 2:
                              return (
                                N.F.clear(),
                                P.A.closePopover(),
                                Z.Ee.currentClear(),
                                l(!0),
                                (e.next = 8),
                                d.W6.create()
                              );
                            case 8:
                              l(!1);
                            case 9:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })();
                p("", ["CommandOrControl", "alt", "k"], function (t) {
                  e();
                });
              }
            }, []),
            (0, W.jsxs)(i.Z, {
              full: !0,
              flex: !0,
              column: !0,
              className: lo,
              children: [
                (0, W.jsx)("div", {
                  'data-v-4a94cac4': '',
                  className: 'tab',
                  children: [
                    (0, W.jsx)("div", {
                      'data-v-fbe8fd4c': '',
                      'data-v-4a94cac4': '',
                      className: 'tab-title-container',
                      children: [
                        (0, W.jsx)("div", {
                          'data-v-fbe8fd4c': '',
                          className: 'van-tabs van-tabs--line',
                          children: [
                            (0, W.jsx)("div", {
                              className: 'van-sticky',
                              children: [
                                (0, W.jsx)("div", {
                                  className: 'van-tabs__wrap van-tabs__wrap--scrollable',
                                  children: [
                                    (0, W.jsx)("div", {
                                      role: 'tablist',
                                      className: 'van-tabs__nav van-tabs__nav--line van-tabs__nav--complete',
                                      children: [
                                        (0, W.jsx)("div", {
                                          role: 'tab',
                                          className: 'van-tab van-tab--active',
                                          children: [
                                            (0, W.jsx)("span", {
                                              className: 'van-tab__text',
                                              children: [
                                                (0, W.jsx)("p", {
                                                  'data-v-fbe8fd4c': '',
                                                  className: 'title-style',
                                                  children: '月之暗面',
                                                })
                                              ]
                                            })
                                          ]
                                        }),
                                        (0, W.jsx)("div", {
                                          className: 'van-tabs__line',
                                          children: '',
                                        })
                                      ]
                                    })
                                  ]
                                })
                              ]
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }),
                (0, W.jsx)(Zi.Z, {
                  maxWidth: "md",
                  className: uo,
                  children: (0, W.jsxs)(i.Z, {
                    full: !0,
                    flex: !0,
                    column: !0,
                    center: !0,
                    className: mo,
                    children: [
                      (0, W.jsx)(i.Z, {
                        flex: !0,
                        center: !0,
                        gap: 4,
                        className: po,
                        children: (0, W.jsx)("img", {
                          className: fo,
                          src: "dark" === t ? Pi : Si,
                          alt: ""
                        })
                      }),
                      (0, W.jsx)(co, {}),
                      (0, W.jsxs)(O.Z, {
                        width: "100%",
                        children: [
                          (0, W.jsx)(rr, { needRecommend: !0 }),
                          (0, W.jsx)($i, {
                            cases: e,
                            is1M: u,
                            waiting1M: m,
                            to1MChatPage: f,
                            sendApplication: h
                          })
                        ]
                      })
                    ]
                  })
                })
              ]
            })
          );
        },
        go = function () {
          var e = (0, c.E1)(function (e) {
              return e.showModal;
            }),
            t = (0, c.E1)(function (e) {
              return e.user;
            }),
            n = (0, d.aK)(function (e) {
              return e.chatId;
            }),
            r = (0, f.t)().reset,
            h = (0,
            (0, s.vg)(function (e) {
              return e.route;
            }).searchfn)(),
            g = h.bind_phone,
            v = (h.tu, (0, bt.Z)()),
            x = v.isCase,
            A = v.cid,
            b = v.caseIndex,
            j = v.caseID;
          return (
            (0, a.useEffect)(
              function () {
                g &&
                  (c.nR.openBindPhone(),
                  (0, s.VY)().route.to({}, { removeParams: ["bind_phone"] }));
              },
              [g]
            ),
            (0, a.useEffect)(
              function () {
                r();
              },
              [n]
            ),
            (0, a.useEffect)(
              function () {
                r();
              },
              [n]
            ),
            (0, a.useEffect)(
              function () {
                var e = d.aK.getState();
                A || x
                  ? A && A !== e.chatId && !x && d.W6.load(A)
                  : d.W6.load("");
                var t = d.aK.subscribe(
                  function (e) {
                    return e.chatId;
                  },
                  function (e) {
                    e &&
                      A !== e &&
                      (0, s.VY)().route.to(
                        {},
                        {
                          to: "/chat/".concat(e),
                          removeParams: ["index", "tu"]
                        }
                      );
                  }
                );
                return function () {
                  t();
                };
              },
              [A]
            ),
            (0, a.useEffect)(
              function () {
                if (x && j) {
                  var e = m.D.get().caseIndex;
                  m.D.load(j, e);
                }
              },
              [j, x]
            ),
            (0, o.ab)(e, "modal_dialog_login_or_register"),
            (0, a.useEffect)(function () {
              var e = function () {
                  if (window.__temp_stream_info) {
                    var e = window.__temp_stream_info,
                      t = (e.chatId, e.sid),
                      n = e.qid,
                      a = e.content;
                    e.seq;
                    setTimeout(function () {
                      var e = d.aK.getState(),
                        r = e.chatId,
                        i = e.segmentsMap[r];
                      if (null != i && i.length) {
                        var o = i[(null == i ? void 0 : i.length) - 1];
                        (null == o ? void 0 : o.content) === a &&
                          p.d.shouleContinueStream(t, n);
                      }
                    }, 2e3);
                  }
                },
                t = function () {
                  var e = d.aK.getState(),
                    t = e.chatId,
                    n = e.stateMap,
                    a = e.segmentsMap,
                    r = (n[t] || {}).chatting,
                    i = a[t] || [];
                  if (r && i.length > 1) {
                    var o = (0, d.mW)(i),
                      s = i[(null == i ? void 0 : i.length) - 1];
                    window.__temp_stream_info = {
                      chatId: t,
                      sid: null == s ? void 0 : s.id,
                      content: null == s ? void 0 : s.content,
                      seq: s,
                      qid: o.id,
                      qseq: o
                    };
                  }
                };
              return (
                window.addEventListener("online", e),
                window.addEventListener("offline", t),
                function () {
                  window.removeEventListener("online", e),
                    window.removeEventListener("offline", t);
                }
              );
            }, []),
            (0, W.jsxs)(W.Fragment, {
              children: [
                (0, W.jsx)(Ni, {}),
                e && !t && (0, W.jsx)(l.Z, {}),
                t && (0, W.jsx)(u.Z, {}),
                (0, W.jsx)(i.Z, {
                  full: !0,
                  sx: { position: "relative", zIndex: 10 },
                  children: A
                    ? (0, W.jsx)(vi, { cid: A, isCase: x, index: b })
                    : (0, W.jsx)(ho, {})
                })
              ]
            })
          );
        };
    }
  }
]);
