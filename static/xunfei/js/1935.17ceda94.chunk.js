"use strict";
(self.webpackChunkxfgpt = self.webpackChunkxfgpt || []).push([
  [1935],
  {
    43695: function (e, t, n) {
      function s() {
        var e = (0, i.useState)(),
          t = (e = (0, c.Z)(e, 2))[0],
          n = e[1],
          s = ((e = (0, a.FV)(r.YT)), (0, c.Z)(e, 2)[1]),
          l = ((e = (0, i.useState)([])), (e = (0, c.Z)(e, 2))[0]),
          o = e[1],
          d = ((e = (0, i.useState)(4)), (e = (0, c.Z)(e, 2))[0]),
          g = e[1],
          f = (0, i.useRef)();
        return (
          (0, i.useEffect)(
            function () {
              t && t.slideTo(Math.floor(d / 2), 100, !1);
            },
            [t, d]
          ),
          (0, i.useEffect)(
            function () {
              var e =
                  null == (e = document.getElementById("swiperChat"))
                    ? void 0
                    : e.clientHeight,
                t = Number(
                  null == (t = document.querySelector("html"))
                    ? void 0
                    : t.style.fontSize.split("px")[0]
                );
              e && g(e / (9 * t));
            },
            [
              null == (e = document.querySelector("html"))
                ? void 0
                : e.style.fontSize
            ]
          ),
          (0, i.useEffect)(function () {
            (0, T.mo)().then(function (e) {
              console.log(e);
              var t = [];
              e.pageList.map(function (e) {
                var n;
                t.push({
                  botId: null == e || null == (n = e.bot) ? void 0 : n.botId,
                  botName:
                    null == e || null == (n = e.bot) ? void 0 : n.botName,
                  chatId: null == e ? void 0 : e.chatId
                });
              }),
                o(Object.values(t).flat());
            }),
              (0, b.x)()
                .then(function (e) {
                  s(e);
                })
                .catch(function (e) {
                  var t;
                  80003 !==
                    (null == e || null == (t = e.detail) ? void 0 : t.code) &&
                    u.FN.show(
                      e.msg ||
                        "\u83b7\u53d6\u63a8\u8350\u5217\u8868\u5931\u8d25\uff01"
                    );
                });
          }, []),
          (0, y.jsxs)("div", {
            className: I,
            id: "swiperChat",
            children: [
              (0, y.jsx)("div", {
                className: C,
                children: (0, y.jsx)(j.tq, {
                  direction: "vertical",
                  slidesPerView: d,
                  loop: !0,
                  centeredSlides: !0,
                  slideToClickedSlide: !0,
                  modules: [S.pt],
                  onSwiper: function (e) {
                    return n(e);
                  },
                  autoplay: {
                    delay: 3e3,
                    disableOnInteraction: !1,
                    stopOnLastSlide: !1
                  },
                  children:
                    null == l
                      ? void 0
                      : l.map(function (e, t) {
                          return (0, y.jsx)(
                            j.o5,
                            {
                              children: (0, y.jsx)("div", {
                                className: V,
                                onClick: function () {
                                  var t, n;
                                  f.current ||
                                    ((f.current = !0),
                                    (t = e.botId),
                                    (n = null == e ? void 0 : e.chatId),
                                    console.log(t, n),
                                    n
                                      ? ((f.current = !1),
                                        (window.location.href = "/chat?id="
                                          .concat(n, "&botId=")
                                          .concat(t)))
                                      : (0, T.Lk)({ botId: Number(t) }).then(
                                          function (e) {
                                            console.log(e),
                                              (f.current = !1),
                                              (window.location.href =
                                                "/chat?id="
                                                  .concat(
                                                    null == e ? void 0 : e.id,
                                                    "&botId="
                                                  )
                                                  .concat(t));
                                          }
                                        ));
                                },
                                style: {
                                  background: Q[t % 3],
                                  color: E[t % 3]
                                },
                                children: (0, y.jsx)("p", {
                                  children: e.botName
                                })
                              })
                            },
                            t
                          );
                        })
                })
              }),
              (0, y.jsx)("div", { className: Z })
            ]
          })
        );
      }
      n.r(t),
        n.d(t, {
          default: function () {
            return B;
          }
        });
      var l = n(74165),
        o = n(15861),
        c = n(29439),
        i = n(47313),
        a = n(58804),
        u = n(92715),
        r = n(64649),
        d = n(92454),
        g = n(2135),
        f = n(58467),
        p = (n(80100), "pages_home_page__v+EbL"),
        v = "pages_tips__lkmHx",
        m = (n(86353), n(69983)),
        x = n(43751),
        h = n(77679),
        A = n(92247),
        N = n(33013),
        w = n(71963),
        j = n(32787),
        S = n(41802),
        b = (n(83151), n(83623)),
        T = n(2147),
        I = "swiperChat_chat_example__2IHn3",
        Z = "swiperChat_footerShade__-ff6d",
        V = "swiperChat_swiper_item__iHKmO",
        C = "swiperChat_swiper_container__7NoTV",
        y = n(46417),
        Q = [
          "linear-gradient(270deg,#e4e0ff, #e5edfe)",
          "linear-gradient(90deg,#e6f3ff, #dcebfc)",
          "linear-gradient(90deg,#e9f0ff, #d9e2ff)"
        ],
        E = ["#6C6DF8", "#00B2FD", "#3287F2"],
        G = n(9889),
        q = n(99353),
        K = n(80552),
        z = n(3364),
        J = n(52873),
        Y = n(21114),
        B = function () {
          function e() {
            var e = document.getElementById("hiddenTextArea");
            oe.current &&
              e &&
              (oe.current.style.height = e.scrollHeight + "px");
          }
          function t(e) {
            V(e), I(!1);
          }
          var n = (0, i.useState)(""),
            j = (n = (0, c.Z)(n, 2))[0],
            S = n[1],
            b = ((n = (0, i.useState)(!1)), (n = (0, c.Z)(n, 2))[0]),
            I = n[1],
            Z = ((n = (0, i.useState)()), (n = (0, c.Z)(n, 2))[0]),
            V = n[1],
            C = ((n = (0, i.useState)(!1)), (n = (0, c.Z)(n, 2))[0]),
            Q = n[1],
            E = ((n = (0, i.useState)("text")), (n = (0, c.Z)(n, 2))[0]),
            B = n[1],
            R = ((n = (0, i.useState)(!1)), (n = (0, c.Z)(n, 2))[0]),
            L = n[1],
            O = ((n = (0, i.useState)("")), (n = (0, c.Z)(n, 2))[0]),
            k = n[1],
            D = ((n = i.useState(1)), (n = (0, c.Z)(n, 2))[0]),
            F = n[1],
            P = ((n = (0, i.useState)(!1)), (n = (0, c.Z)(n, 2))[0]),
            U = n[1],
            H = ((n = (0, g.lr)()), (0, c.Z)(n, 1)[0]),
            X = ((n = i.useState("pause")), (n = (0, c.Z)(n, 2))[0]),
            M = n[1],
            W = ((n = (0, a.FV)(r.eI)), (n = (0, c.Z)(n, 2))[0]),
            _ = n[1],
            $ = ((n = (0, a.FV)(r.sO)), (n = (0, c.Z)(n, 2))[0]),
            ee = n[1],
            te = ((n = (0, a.FV)(r.YX)), (0, c.Z)(n, 2)[1]),
            ne = ((n = (0, a.FV)(r.JB)), (0, c.Z)(n, 2)[1]),
            se = ((n = (0, a.FV)(r.x2)), (0, c.Z)(n, 2)[1]),
            le = (0, f.s0)(),
            oe = (0, i.useRef)(null),
            ce = (0, i.useRef)(null),
            ie = (function () {
              var e = (0, o.Z)(
                (0, l.Z)().mark(function e() {
                  var t, n;
                  return (0, l.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((t = (0, Y.Wz)("botId"))) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt("return");
                          case 3:
                            return (e.prev = 3), (e.next = 6), (0, T.wq)();
                          case 6:
                            (n = e.sent),
                              t &&
                                ((n = n.find(function (e) {
                                  return (null == e ? void 0 : e.botId) == t;
                                }))
                                  ? le(
                                      "/chat?id="
                                        .concat(n.id)
                                        .concat(
                                          n.botId ? "&botId=" + n.botId : ""
                                        )
                                    )
                                  : (function (e) {
                                      (0, T.Lk)({ botId: e })
                                        .then(function (t) {
                                          u.FN.show({
                                            content: "\u521b\u5efa\u6210\u529f",
                                            icon: "success"
                                          }),
                                            le(
                                              "/chat?id="
                                                .concat(
                                                  null == t ? void 0 : t.id,
                                                  "&botId="
                                                )
                                                .concat(e)
                                            );
                                        })
                                        .catch(function (e) {
                                          var t;
                                          100 !==
                                            (null == e ? void 0 : e.code) &&
                                            (console.error(e),
                                            "80003" !=
                                              (null == e ||
                                              null == (t = e.detail)
                                                ? void 0
                                                : t.code)) &&
                                            null != e &&
                                            e.msg &&
                                            u.FN.show({
                                              content: e.msg,
                                              icon: "fail"
                                            });
                                        });
                                    })(t)),
                              (e.next = 13);
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e.catch(3)),
                              100 !==
                                (null === e.t0 || void 0 === e.t0
                                  ? void 0
                                  : e.t0.code) &&
                                (console.error(e.t0),
                                "80003" !==
                                  (null === e.t0 ||
                                  void 0 === e.t0 ||
                                  null == (n = e.t0.detail)
                                    ? void 0
                                    : n.code)) &&
                                null !== e.t0 &&
                                void 0 !== e.t0 &&
                                e.t0.msg &&
                                u.FN.show({ content: e.t0.msg, icon: "fail" });
                          case 13:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[3, 10]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (
            (0, i.useEffect)(
              function () {
                var e = H.get("prompt");
                e && (t(e), le("/desk", { replace: !0 }));
              },
              [H.get("prompt")]
            ),
            (0, i.useEffect)(
              function () {
                var e = H.get("ch") || (0, A.f)();
                console.log(e), (0, A.p)(e || "");
              },
              [H.get("ch")]
            ),
            (0, i.useEffect)(function () {
              ie();
            }, []),
            i.useEffect(function () {
              ee(null);
              var e = (0, A.f)(),
                t =
                  ((e = (S(e || ""), H.get("personalityId") || "")),
                  H.get("shareKey") || "");
              t && le("/aiFriend/share?shareKey=".concat(t)),
                e && le("/aiFriend/share?personalityId=".concat(e));
            }, []),
            i.useEffect(
              function () {
                var e = setInterval(function () {
                  F(5 <= D ? 1 : D + 1);
                }, 6e3);
                return function () {
                  return clearInterval(e);
                };
              },
              [D]
            ),
            (0, y.jsxs)("div", {
              className: p,
              children: [
                (0, y.jsx)(w.Z, {
                  show: b,
                  closePanel: function () {
                    return I(!1);
                  },
                  selectNewPrompt: function (e) {
                    t(e);
                  }
                }),
                (0, y.jsx)(z.Z, {
                  showPopup: P,
                  closePopup: function () {
                    return U(!1);
                  }
                }),
                (0, y.jsx)(N.Z, {
                  show: b,
                  switchPanel: function () {
                    I(function (e) {
                      return !e;
                    });
                  }
                }),
                (0, y.jsxs)("div", {
                  className: "pages_content__OJmRA",
                  children: [
                    (0, y.jsxs)("div", {
                      className: "pages_topContent__xhzfx",
                      children: [
                        (0, y.jsx)("img", {
                          src: "data:image/png;base64,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",
                          alt: "\u8baf\u98de\u661f\u706b\u5927\u6a21\u578b",
                          className: "pages_imageLogo__ML+nv"
                        }),
                        (0, y.jsx)("div", { className: "pages_logo__osYbJ" }),
                        (0, y.jsx)("p", {
                          className: v,
                          children:
                            "\u80fd\u591f\u5b66\u4e60\u548c\u7406\u89e3\u4eba\u7c7b\u7684\u8bed\u8a00\uff0c\u8fdb\u884c\u591a\u8f6e\u5bf9\u8bdd"
                        }),
                        (0, y.jsx)("p", {
                          className: v,
                          children:
                            "\u56de\u7b54\u95ee\u9898\uff0c\u9ad8\u6548\u4fbf\u6377\u5730\u5e2e\u52a9\u4eba\u4eec\u83b7\u53d6\u4fe1\u606f\u3001\u77e5\u8bc6\u548c\u7075\u611f"
                        })
                      ]
                    }),
                    (0, y.jsx)(s, {})
                  ]
                }),
                (0, y.jsx)("div", { className: "pages_fix_clear__+VgnJ" }),
                (0, y.jsxs)("div", {
                  className: "pages_bottomWrapper__MjSeI",
                  children: [
                    (0, y.jsx)("div", {
                      className: "pages_bottomBar__wCwt3",
                      children:
                        (null == W ? void 0 : W.fileUrl) &&
                        (0, y.jsxs)("div", {
                          className: "pages_imgWrapper__NzcYg",
                          children: [
                            (0, y.jsx)("div", {
                              className: "pages_closeBtn__W0ctF",
                              onClick: function () {
                                return _({});
                              }
                            }),
                            (0, y.jsx)("img", {
                              src: null == W ? void 0 : W.fileUrl
                            })
                          ]
                        })
                    }),
                    (0, y.jsxs)("div", {
                      className: "pages_user_options__OGvtf",
                      children: [
                        (0, y.jsxs)("div", {
                          className: "pages_switch_voice__05BCh",
                          onClick: function () {
                            "text" === E
                              ? "play" === X
                                ? u.FN.show(
                                    "\u5f55\u97f3\u4e2d\uff0c\u8bf7\u52ff\u5207\u6362\u8f93\u5165\u65b9\u5f0f"
                                  )
                                : (B("audio"), V(""), window.scroll(0, 0), e())
                              : (B("text"), window.scroll(0, 0), e());
                          },
                          children: [
                            "text" !== E || j
                              ? null
                              : (0, y.jsx)("img", {
                                  src: m,
                                  alt: "\u8baf\u98de\u661f\u706b\u5927\u6a21\u578b",
                                  className: "pages_audioIcon__uTZLN"
                                }),
                            "audio" !== E || j
                              ? null
                              : (0, y.jsx)("img", {
                                  src: x,
                                  alt: "\u8baf\u98de\u661f\u706b\u5927\u6a21\u578b",
                                  className: "pages_textIcon__RQNAL"
                                })
                          ]
                        }),
                        (0, y.jsxs)("div", {
                          className: ""
                            .concat("pages_input_area__mAAIU", " ")
                            .concat(j ? "pages_channelInput__ZyOga" : null),
                          children: [
                            "text" === E &&
                              (0, y.jsxs)(y.Fragment, {
                                children: [
                                  (0, y.jsxs)("div", {
                                    className: "pages_uploadWrapper__fkqTu",
                                    children: [
                                      (0, y.jsx)("img", {
                                        src: J,
                                        alt: "\u4e0a\u4f20\u56fe\u7247",
                                        className: "pages_uploadIcon__V1LTm"
                                      }),
                                      (0, y.jsx)(h.Z, {
                                        isFile: !0,
                                        accept: "jpg,png,jpeg",
                                        needFile: !0,
                                        classType: !0,
                                        onUploaded: function (e) {
                                          _(e);
                                        },
                                        shouldResize: !0,
                                        size: 20
                                      })
                                    ]
                                  }),
                                  (0, y.jsx)("div", {
                                    className: "pages_line__GSQqi"
                                  })
                                ]
                              }),
                            "text" === E
                              ? (0, y.jsxs)(y.Fragment, {
                                  children: [
                                    (0, y.jsxs)("div", {
                                      className: "pages_textAreaWrapper__3IFli",
                                      children: [
                                        (0, y.jsx)("textarea", {
                                          ref: oe,
                                          autoComplete: "off",
                                          value: Z,
                                          disabled: R,
                                          style: { height: "3rem" },
                                          maxLength: 7e3,
                                          onChange: function (t) {
                                            var n, s;
                                            "@" ===
                                              (s =
                                                null !=
                                                (n =
                                                  null == t ||
                                                  null == (n = t.target)
                                                    ? void 0
                                                    : n.value)
                                                  ? n
                                                  : "") &&
                                              (oe &&
                                                null != oe &&
                                                null != (s = oe.current) &&
                                                s.blur(),
                                              U(!0)),
                                              7e3 <= t.target.value.length
                                                ? u.FN.show(
                                                    "\u8f93\u5165\u5185\u5bb9\u5df2\u8d85\u4e0a\u9650\uff01"
                                                  )
                                                : (0 ===
                                                    t.target.value.length &&
                                                    (t.target.style.height =
                                                      "3rem"),
                                                  V(t.target.value),
                                                  k(t.target.value),
                                                  e());
                                          },
                                          onFocus: function () {
                                            e();
                                          },
                                          onBlur: function () {
                                            window.scroll(0, 0), e();
                                          },
                                          placeholder:
                                            "play" === X
                                              ? "\u652f\u6301\u4e2d\u82f1\u6587\u8f93\u5165"
                                              : "\u8bf7\u5728\u6b64\u8f93\u5165\u60a8\u8981\u63d0\u95ee\u7684\u5185\u5bb9"
                                        }),
                                        "play" === X
                                          ? (0, y.jsxs)("div", {
                                              className:
                                                "pages_stopPlayIcon__U2le8",
                                              onClick: function () {
                                                ce.current &&
                                                  ce.current.stopAudio();
                                              },
                                              children: [
                                                (0, y.jsx)(q.uJ, {
                                                  style: {
                                                    pointerEvents: "none"
                                                  }
                                                }),
                                                (0, y.jsx)(K.Z, {})
                                              ]
                                            })
                                          : null
                                      ]
                                    }),
                                    (0, y.jsx)("div", {
                                      className: C
                                        ? "chat_send__dBrgV"
                                        : "chat_send__dBrgV",
                                      onClick: function () {
                                        V(localStorage.getItem('inputValue'));
                                        k(localStorage.getItem('inputValue'));
                                        if ([void 0, ""].includes(Z)) {
                                          return;
                                        }
                                        var e;
                                        ce.current &&
                                          null != (e = ce.current) &&
                                          e.stopAudio(),
                                          (null != W && W.fileUrl) ||
                                          ![void 0, ""].includes(Z)
                                            ? (Q(!0),
                                              (0, d.U4)({})
                                                .then(function (e) {
                                                  (null == e
                                                    ? void 0
                                                    : e.id) === Number($) &&
                                                  null != e &&
                                                  e.oldBlankList
                                                    ? u.FN.show(
                                                        "\u8bf7\u5148\u5c1d\u8bd5\u95ee\u6211\u4e00\u4e2a\u95ee\u9898\uff0c\u518d\u65b0\u5efa\u5bf9\u8bdd\u7a97\u53e3\u5427\uff01"
                                                      )
                                                    : (void 0 !==
                                                        (null == e
                                                          ? void 0
                                                          : e.id) && ee(e.id),
                                                      te("send"),
                                                      ne(Z),
                                                      se(
                                                        e.title ||
                                                          "\u65b0\u5efa\u804a\u5929"
                                                      ),
                                                      le(
                                                        "/chat?id=".concat(
                                                          null == e
                                                            ? void 0
                                                            : e.id,
                                                          "&pre=desk"
                                                        )
                                                      ));
                                                })
                                                .catch(function (e) {
                                                  console.error(e),
                                                    null != e &&
                                                      e.msg &&
                                                      u.FN.show({
                                                        content: e.msg,
                                                        icon: "fail"
                                                      });
                                                })
                                                .finally(function () {
                                                  Q(!1);
                                                }))
                                            : void(0);
                                      },
                                      children: "\u53d1\u9001"
                                    })
                                  ]
                                })
                              : null,
                            (0, y.jsx)(G.Z, {
                              styles: "text" === E ? { display: "none" } : null,
                              ref: ce,
                              setLoading: function (e) {
                                L(e);
                              },
                              changeInputType: function () {
                                return B("text");
                              },
                              send: function (t) {
                                V(t),
                                  k(t),
                                  e(),
                                  setTimeout(function () {
                                    oe.current &&
                                      (oe.current.scrollTop =
                                        oe.current.scrollHeight);
                                  });
                              },
                              changeStatus: function (e) {
                                M(e);
                              }
                            })
                          ]
                        }),
                        (0, y.jsx)("textarea", {
                          id: "hiddenTextArea",
                          value: O,
                          style: {
                            position: "absolute",
                            top: 0,
                            zIndex: -1,
                            width: "26.1rem",
                            height: "2.1rem",
                            visibility: "hidden",
                            fontSize: "1.5rem"
                          }
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          );
        };
    }
  }
]);
