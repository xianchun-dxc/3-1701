"use strict";
(self.webpackChunkxfgpt = self.webpackChunkxfgpt || []).push([
  [3447],
  {
    83610: function (e, t, n) {
      function i(e) {
        var t = e.setInputValue,
          n = ((e = (0, d.useState)("1")), (e = (0, u.Z)(e, 2))[0]),
          i = ((e = (e[1], (0, p.FV)(m.YT))), (e = (0, u.Z)(e, 2))[0]),
          r = e[1],
          s = ((e = (0, d.useState)([])), (e = (0, u.Z)(e, 2))[0]),
          l = e[1],
          o = ((e = (0, d.useState)(!1)), (e = (0, u.Z)(e, 2))[0]),
          c = e[1];
        return (
          (0, d.useEffect)(function () {
            (0, T.x)()
              .then(function (e) {
                r(e), l(Object.values(e).flat());
              })
              .catch(function (e) {
                100 !== e.code &&
                  g.FN.show(
                    "\u83b7\u53d6\u63a8\u8350\u5217\u8868\u5931\u8d25\uff01"
                  );
              });
          }, []),
          (0, P.jsxs)("div", {
            className: F,
            children: [
              (0, P.jsx)("div", {
                className: S,
                children: (0, P.jsx)("img", {
                  src: q,
                  alt: "",
                  onClick: function () {
                    c(!0);
                  }
                })
              }),
              (0, P.jsxs)(g.GI, {
                visible: o,
                onMaskClick: function () {
                  c(!1);
                },
                bodyClassName: L,
                bodyStyle: {
                  height: "75vh",
                  boxSizing: "border-box",
                  overflowX: "hidden"
                },
                children: [
                  (0, P.jsx)("div", {
                    className: V,
                    onClick: function () {
                      c(!1);
                    }
                  }),
                  (0, P.jsxs)("div", {
                    className: A,
                    children: [
                      (0, P.jsx)("div", {
                        children: "\u5c1d\u8bd5\u8fd9\u6837\u95ee\u6211\uff1a"
                      }),
                      (0, P.jsxs)("div", {
                        className: E,
                        onClick: function () {
                          return (
                            window &&
                            window.open("https://www.xfyun.cn/instruction")
                          );
                        },
                        children: [
                          "\u67e5\u770b\u66f4\u591a",
                          " ",
                          (0, P.jsx)(B.Z, {
                            style: {
                              fontSize: "1rem",
                              transform: "translateY(-0.2rem)"
                            }
                          })
                        ]
                      })
                    ]
                  }),
                  null == s
                    ? void 0
                    : s.map(function (e) {
                        return (0, P.jsx)(
                          "div",
                          {
                            className: R,
                            onClick: function () {
                              t(e.prompt), c(!1);
                            },
                            children: e.prompt
                          },
                          e.prompt
                        );
                      })
                ]
              }),
              null == i || null == (e = i[n])
                ? void 0
                : e.map(function (e) {
                    return (0, P.jsx)(
                      "span",
                      {
                        onClick: function () {
                          t(e.prompt);
                        },
                        className: C,
                        children: e.prompt
                      },
                      e.prompt
                    );
                  })
            ]
          })
        );
      }
      n.r(t),
        n.d(t, {
          default: function () {
            return ne;
          }
        });
      var r,
        s,
        l = n(1413),
        o = n(93433),
        c = n(74165),
        a = n(15861),
        u = n(29439),
        d = n(47313),
        h = n(2135),
        f = n(58467),
        p = n(58804),
        m = n(64649),
        g = n(92715),
        v = n(95295),
        x = n(15292),
        _ = n(10025),
        w = n(92454),
        Z = n(2147),
        b = n(85340),
        j = n(24944),
        N = n(21114),
        y = n(92247),
        k = n(77679),
        I = n(45613),
        T = n(83623),
        F = "recommendList_recommendList__vGOOc",
        S = "recommendList_showPopup__YNJQ3",
        C = "recommendList_listitem__-qKzi",
        L = "recommendList_popupList__lPSCL",
        V = "recommendList_line__clQV7",
        A = "recommendList_tips__1cID0",
        E = "recommendList_lookmore__MiIYb",
        R = "recommendList_promptItem__BVAeY",
        q = n.p + "static/media/showPrompt.644b11e7db1823c5e130.png",
        B = n(5186),
        P = n(46417),
        O = n(33013),
        z = n(71963),
        U = n(9889),
        D = n(99353),
        H = n(80552),
        Y = n(3364),
        W = n(79243),
        G = n(94352),
        J = n(38080),
        Q = n(18121),
        M = n(69983),
        X = n(43751),
        K = n(52873),
        $ = "chat_chatItem__Tzhhf",
        ee = "chat_userImage__kuyi0",
        te = "chat_gptContent__QPxAh",
        ne = function () {
          function e() {
            try {
              (0, j.f)(function (t) {
                (r = t)
                  .onSuccess(function () {
                    var t = r.getValidate();
                    console.log("validateResult", t),
                      t
                        ? (e(),
                          Te(""),
                          jt(
                            De.current.url,
                            De.current.form,
                            De.current.oldList,
                            De.current.token,
                            t
                          ))
                        : g.FN.show("\u8bf7\u5b8c\u6210\u9a8c\u8bc1");
                  })
                  .onError(function (t) {
                    console.warn(t),
                      setTimeout(function () {
                        e();
                      });
                  }),
                  setTimeout(function () {
                    var e;
                    null != (e = r) && e.verify();
                  });
              });
            } catch (C) {
              console.error(C, "initGeetest catch");
            }
          }
          function t() {
            var e;
            Re.current &&
              qe.current !==
                (null == (e = Re.current) ? void 0 : e.clientHeight) &&
              ((qe.current =
                null == (e = Re.current) ? void 0 : e.clientHeight),
              xt());
          }
          function n() {
            (0, w.Ag)()
              .then(function (e) {
                rt(e);
              })
              .catch(function (e) {
                console.error(e),
                  null != e &&
                    e.msg &&
                    g.FN.show({ content: e.msg, icon: "fail" });
              });
          }
          function T() {
            var e,
              t,
              n = tt || "";
            "send" === $e
              ? ((e =
                  "" === n ? "\u65b0\u5bf9\u8bdd\u7a97\u53e3" : n.slice(0, 15)),
                _t(e),
                (e = []),
                "#sparktalking" ===
                  (null == n ||
                  null == (t = n.trim()) ||
                  null == (t = t.replace(/\s/g, ""))
                    ? void 0
                    : t.toLowerCase()) && "sparkTalk" !== B
                  ? (wt(n, !1),
                    setTimeout(function () {
                      ne("sparkTalk"), ce("audio"), Se("");
                    }))
                  : ((t = { message: n, origin: "req", uid: (0, x.Z)() }),
                    null != at &&
                      at.fileUrl &&
                      ((t.type = 1),
                      (t.url = null == at ? void 0 : at.fileUrl)),
                    e.push(t),
                    ot(n.slice(0, 15)),
                    re(e),
                    bt(n, e),
                    et(null),
                    nt(null)))
              : "input" === $e && Pe.current && (Se(n), et(null), nt(null));
          }
          function F(e) {
            (e = [
              {
                message:
                  "\u5f53\u524d\u5df2\u5524\u9192\u7eaf\u4eab\u8bed\u97f3\u5bf9\u8bdd\u6a21\u5f0f\uff0c\u4f60\u53ef\u4ee5\u8f93\u5165\u8bed\u97f3\u8fdb\u884c\u6d4b\u8bd5",
                origin: "chatType",
                id: (0, x.Z)()
              },
              {
                message:
                  "\u8f93\u5165#callback\u53ef\u56de\u5230\u901a\u7528\u6a21\u5f0f",
                origin: "chatType",
                id: (0, x.Z)()
              },
              {
                message:
                  "\u4f60\u597d\uff0c\u6709\u4ec0\u4e48\u53ef\u4ee5\u5e2e\u4f60\u7684\u5417\uff1f",
                origin: "resp",
                noReAnswer: !0,
                language: "cn",
                id: e
              }
            ]),
              (e = [].concat((0, o.Z)(ie), e)),
              re(e),
              xt();
          }
          function S() {
            var e = document.getElementById("hiddenTextArea");
            e &&
              setTimeout(function () {
                var t = e.scrollHeight;
                Pe.current && (Pe.current.style.height = t + "px");
              });
          }
          var C = (0, d.useState)(""),
            L = (C = (0, u.Z)(C, 2))[0],
            V = C[1],
            A = ((C = (0, d.useState)("")), (C = (0, u.Z)(C, 2))[0]),
            E = C[1],
            R = ((C = (0, d.useState)(!1)), (C = (0, u.Z)(C, 2))[0]),
            q = C[1],
            B = ((C = (0, d.useState)("")), (C = (0, u.Z)(C, 2))[0]),
            ne = C[1],
            ie = ((C = (0, d.useState)([])), (C = (0, u.Z)(C, 2))[0]),
            re = C[1],
            se = ((C = (0, d.useState)(!1)), (C = (0, u.Z)(C, 2))[0]),
            le = C[1],
            oe = ((C = (0, d.useState)("text")), (C = (0, u.Z)(C, 2))[0]),
            ce = C[1],
            ae = ((C = (0, d.useState)(1)), (C = (0, u.Z)(C, 2))[0]),
            ue = C[1],
            de = ((C = (0, d.useState)("")), (C = (0, u.Z)(C, 2))[0]),
            he = C[1],
            fe = ((C = (0, d.useState)(!1)), (C = (0, u.Z)(C, 2))[0]),
            pe = C[1],
            me = ((C = (0, d.useState)(!1)), (C = (0, u.Z)(C, 2))[0]),
            ge = C[1],
            ve = ((C = (0, d.useState)("")), (C = (0, u.Z)(C, 2))[0]),
            xe = C[1],
            _e = ((C = (0, d.useState)(!1)), (C = (0, u.Z)(C, 2))[0]),
            we = C[1],
            Ze =
              ((C = (0, d.useState)({ status: 1 })), (C = (0, u.Z)(C, 2))[0]),
            be = C[1],
            je = ((C = (0, d.useState)()), (C = (0, u.Z)(C, 2))[0]),
            Ne = C[1],
            ye = ((C = (0, d.useState)({})), (C = (0, u.Z)(C, 2))[0]),
            ke = C[1],
            Ie = ((C = (0, d.useState)("")), (C = (0, u.Z)(C, 2))[0]),
            Te = C[1],
            Fe = ((C = (0, d.useState)("")), (C = (0, u.Z)(C, 2))[0]),
            Se = C[1],
            Ce = ((C = (0, d.useState)()), (C = (0, u.Z)(C, 2))[0]),
            Le = C[1],
            Ve = ((C = d.useState("pause")), (C = (0, u.Z)(C, 2))[0]),
            Ae = C[1],
            Ee = (0, d.useRef)(!1),
            Re = (0, d.useRef)(null),
            qe = (0, d.useRef)(0),
            Be = (0, d.useRef)(null),
            Pe = (0, d.useRef)(null),
            Oe = (0, d.useRef)({ text: null, sid: null }),
            ze = (0, d.useRef)(),
            Ue = (0, d.useRef)(!1),
            De = (0, d.useRef)({
              url: "",
              form: null,
              oldList: null,
              token: ""
            }),
            He = (0, d.useRef)(),
            Ye = (0, d.useRef)(null),
            We =
              ((C = (0, p.FV)(m.ri)), (C = (0, u.Z)(C, 1)[0]), (0, p.FV)(m.sO)),
            Ge = (We = (0, u.Z)(We, 2))[0],
            Je = We[1],
            Qe = ((We = (0, p.FV)(m.Z0)), (We = (0, u.Z)(We, 2))[0]),
            Me = We[1],
            Xe = ((We = (0, p.FV)(m.Qw)), (We = (0, u.Z)(We, 2))[0]),
            Ke = We[1],
            $e = ((We = (0, p.FV)(m.YX)), (We = (0, u.Z)(We, 2))[0]),
            et = We[1],
            tt = ((We = (0, p.FV)(m.JB)), (We = (0, u.Z)(We, 2))[0]),
            nt = We[1],
            it = ((We = (0, p.FV)(m.X3)), (We = (0, u.Z)(We, 2))[0]),
            rt = We[1],
            st = ((We = (0, p.FV)(m.Z3)), (We = (0, u.Z)(We, 2))[0]),
            lt = We[1],
            ot = ((We = (0, p.FV)(m.x2)), (0, u.Z)(We, 2)[1]),
            ct = ((We = (0, d.useState)(!1)), (0, u.Z)(We, 2)[1]),
            at = ((We = (0, p.FV)(m.eI)), (We = (0, u.Z)(We, 2))[0]),
            ut = We[1],
            dt = ((We = (0, h.lr)()), (0, u.Z)(We, 1)[0]),
            ht = (0, f.s0)(),
            ft = ((We = (0, d.useState)(!1)), (We = (0, u.Z)(We, 2))[0]),
            pt = We[1],
            mt = ((We = (0, d.useState)()), (We = (0, u.Z)(We, 2))[0]),
            gt = We[1],
            vt =
              ((We =
                (["story", "mctts"].includes(A) || !dt.get("botId")) &&
                "text" === oe),
              (function () {
                var e = (0, a.Z)(
                  (0, c.Z)().mark(function e() {
                    var t, n, i;
                    return (0, c.Z)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.prev = 0), (e.next = 3), (0, Z.QG)(Ge);
                            case 3:
                              (i = e.sent),
                                (t = i.channel),
                                (n = i.bot_desc),
                                (i = i.bot_name),
                                E(null != t ? t : ""),
                                gt(n),
                                dt.get("botId") &&
                                  ot(i || "\u661f\u706b\u52a9\u624b"),
                                (e.next = 16);
                              break;
                            case 13:
                              (e.prev = 13),
                                (e.t0 = e.catch(0)),
                                console.warn(e.t0);
                            case 16:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 13]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
            xt = function () {
              setTimeout(function () {
                var e;
                Be &&
                  null != (e = Be.current) &&
                  e.scrollIntoView({ behavior: "smooth" });
              }, 100);
            },
            _t = function (e) {
              (0, w.W3)({ chatListId: Ge, chatListName: e })
                .then(function () {
                  ot(e), n();
                })
                .catch(function (e) {
                  100 !== e.code &&
                    g.FN.show(e.msg || "\u91cd\u547d\u540d\u5931\u8d25");
                });
            },
            wt =
              ((0, d.useEffect)(function () {
                var t;
                (t = document.querySelector("#watermark-wrapper")) &&
                  (t = t.firstChild) &&
                  ((t.style.width = "100%"), (t.style.height = "100%")),
                  e(),
                  Le(
                    new I.Z({
                      voiceName: "x4_lingxiaoqi",
                      engineType: "intp65",
                      tte: "UTF8",
                      speed: 50,
                      voice: 5,
                      pitch: 50,
                      text: "\u61c2\u4f60\u6240\u8a00\uff0c\u7b54\u4f60\u6240\u95ee\uff0c\u6211\u662f\u4f60\u7684\u8baf\u98de\u661f\u706b\u5c0f\u52a9\u7406",
                      close: function () {
                        var e;
                        return null == (e = He.current) ? void 0 : e.setFalse();
                      },
                      onError: function () {
                        return ne("text");
                      }
                    })
                  ),
                  Zt();
              }, []),
              (0, d.useEffect)(
                function () {
                  return (
                    null != Ce && Ce.resetAudio(),
                    function () {
                      console.warn(
                        "\u9875\u9762\u79bb\u5f00\u9500\u6bc1\u97f3\u9891\u5b9e\u4f8b\u5bf9\u8c61"
                      ),
                        null != Ce && Ce.resetAudio();
                    }
                  );
                },
                [Ge, Ce]
              ),
              (0, d.useEffect)(
                function () {
                  var e;
                  "desk" !== dt.get("pre") && ut({}),
                    re([]),
                    pe(!1),
                    Ke(!0),
                    ge(!1),
                    re([]),
                    ue(1),
                    (Ue.current = !1),
                    Se(""),
                    (Oe.current = { sid: null, content: null }),
                    (e = (0, y.f)()),
                    V(e || ""),
                    Ge && vt();
                },
                [Ge]
              ),
              (0, d.useEffect)(
                function () {
                  var e;
                  Ge &&
                    0 < (null == it ? void 0 : it.length) &&
                    ((e =
                      null == (e = dt.get("botId") ? st : it)
                        ? void 0
                        : e.find(function (e) {
                            return e.id === Number(Ge);
                          })),
                    ke(e));
                },
                [Ge, it, st]
              ),
              (0, d.useEffect)(
                function () {
                  dt.get("botId") ||
                    ot(
                      (null == ye ? void 0 : ye.title) ||
                        "\u65b0\u5efa\u804a\u5929"
                    ),
                    ue(null == ye ? void 0 : ye.enable);
                },
                [ye]
              ),
              (0, d.useEffect)(
                function () {
                  var e;
                  dt.getAll("id")[0]
                    ? (Je(dt.getAll("id")[0]),
                      (e = dt.getAll("id")[0]),
                      re([]),
                      (0, w.$i)(e)
                        .then(function (e) {
                          var t;
                          (e = e.historyList) && 0 < e.length
                            ? ((e = e.map(function (e) {
                                return (
                                  e &&
                                    (null != e && e.reqId
                                      ? (e.origin = "resp")
                                      : (e.origin = "req")),
                                  e
                                );
                              })),
                              (Oe.current = {
                                text:
                                  null == (t = e[e.length - 2])
                                    ? void 0
                                    : t.message,
                                sid:
                                  (null == (t = e[e.length - 1])
                                    ? void 0
                                    : t.sid) || null
                              }),
                              re(e))
                            : T(),
                            xt();
                        })
                        .catch(function (e) {
                          var t;
                          100 !== e.code &&
                            ([30002, 99996, 30012].includes(
                              null == e || null == (t = e.detail)
                                ? void 0
                                : t.code
                            )
                              ? g.FN.show(e.msg)
                              : g.FN.show(
                                  "\u83b7\u53d6\u4f1a\u8bdd\u5386\u53f2\u5f02\u5e38"
                                ),
                            setTimeout(function () {
                              ht("/desk");
                            }, 1e3));
                        }))
                    : setTimeout(function () {
                        ht("/desk");
                      });
                },
                [dt.getAll("id")[0]]
              ),
              (0, d.useEffect)(
                function () {
                  var e = !!dt.get("botId");
                  ct(function (t) {
                    return (
                      !t &&
                        e &&
                        g.FN.show(
                          "\u60a8\u5df2\u7ecf\u8fdb\u5165\u52a9\u624b\u6a21\u5f0f\uff01"
                        ),
                      e
                    );
                  });
                },
                [dt.get("botId")]
              ),
              (0, d.useEffect)(
                function () {
                  var e, t, n;
                  "sparkTalk" === B
                    ? ((n = (0, N.qx)()),
                      (e = (0, x.Z)()),
                      (t = e + "_" + (ie.length + 2)),
                      !R && n
                        ? g.u_.confirm({
                            className: "panel_modal",
                            content:
                              "\u60a8\u786e\u5b9a\u8fdb\u5165\u7545\u542c\u6a21\u5f0f\u5417\uff01",
                            onConfirm: function () {
                              F(e),
                                q(!0),
                                setTimeout(function () {
                                  He.current.playClick(t);
                                }, 500);
                            },
                            onCancel: function () {
                              ne("text");
                            }
                          })
                        : (F(e),
                          q(!0),
                          setTimeout(function () {
                            He.current.playClick(t);
                          }, 500)))
                    : "text" !== B ||
                      dt.get("botId") ||
                      ((n = {
                        message:
                          "\u5df2\u5207\u6362\u81f3\u901a\u7528\u6a21\u5f0f",
                        origin: "chatType",
                        id: (0, x.Z)()
                      }),
                      (n = [].concat((0, o.Z)(ie), [n])),
                      re(n),
                      xt());
                },
                [B]
              ),
              function (e, t) {
                Oe.current = (0, l.Z)(
                  (0, l.Z)({}, Oe.current),
                  {},
                  { text: e }
                );
                var n = (0, o.Z)(ie),
                  i =
                    (0 === n.length && _t(e.slice(0, 15)),
                    { message: e, origin: "req", uid: (0, x.Z)() });
                null != at &&
                  at.fileUrl &&
                  ((i.type = 1), (i.url = null == at ? void 0 : at.fileUrl)),
                  n.push(i),
                  re(n),
                  t &&
                    setTimeout(function () {
                      bt(e, n);
                    }),
                  xt();
              }),
            Zt = function () {
              (0, Z.wq)()
                .then(function (e) {
                  lt(e);
                })
                .catch(function (e) {
                  console.error(e),
                    null != e &&
                      e.msg &&
                      g.FN.show({ content: e.msg, icon: "fail" });
                });
            },
            bt =
              ((A = (function () {
                var e = (0, a.Z)(
                  (0, c.Z)().mark(function e() {
                    var t, n, i, r;
                    return (0, c.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (Ue.current) return e.abrupt("return");
                            e.next = 2;
                            break;
                          case 2:
                            if (
                              ((Ue.current = !0),
                              Ce.audioPause(),
                              null != (n = He.current) && n.setFalse(),
                              ge(!1),
                              (t = (0, o.Z)(ie)),
                              (n = t[t.length - 2]),
                              (Oe.current.text =
                                null == n ? void 0 : n.message),
                              1 === n.type)
                            )
                              return (e.next = 12), fetch(n.url);
                            e.next = 18;
                            break;
                          case 12:
                            return (i = e.sent), (e.next = 15), i.blob();
                          case 15:
                            (i = e.sent),
                              (r = new File([i], "image.jpg", {
                                type: i.type
                              })),
                              (Oe.current = (0, l.Z)(
                                (0, l.Z)({}, Oe.current),
                                {},
                                { fileUrl: n.url, fileObj: r, type: 1 }
                              ));
                          case 18:
                            "resp" === t[t.length - 1].origin && t.pop(),
                              re(t),
                              setTimeout(function () {
                                bt("", t, !0, !1), (Ue.current = !1);
                              });
                          case 21:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
              function (e, t, n, i) {
                Me(!0);
                var r,
                  s = (s = String(+new Date())).substring(s.length - 6),
                  l = (xe(s), new FormData());
                null != l && l.append("fd", s),
                  null != l && l.append("clientType", "2"),
                  n
                    ? ((r = "iflygpt-chat/u/chat_message/reAnswer"),
                      l.append("chatId", Ge),
                      l.append("edit", "".concat(i)),
                      null != (s = Oe.current) &&
                        s.sid &&
                        l.append("sid", Oe.current.sid),
                      null != (n = Oe.current) &&
                        n.text &&
                        l.append("text", Oe.current.text),
                      1 === (null == (i = Oe.current) ? void 0 : i.type) &&
                        (l.append(
                          "file",
                          null == (s = Oe.current) ? void 0 : s.fileObj
                        ),
                        l.append(
                          "fileUrl",
                          null == (n = Oe.current) ? void 0 : n.fileUrl
                        )))
                    : ((r = "/iflygpt-chat/u/chat_message/chat"),
                      null != (i = Oe.current) &&
                        i.sid &&
                        l.append("sid", Oe.current.sid),
                      l.append("chatId", Ge),
                      l.append("text", e),
                      null != at &&
                        at.fileUrl &&
                        (l.append("file", null == at ? void 0 : at.fileObj),
                        l.append("fileUrl", null == at ? void 0 : at.fileUrl),
                        ut({}))),
                  console.log("chatId: ".concat(Ge)),
                  (s = window);
                try {
                  s.initGeeGuard(
                    { appId: "ihuqg3dmuzcr2kmghumvivsk7c3l4joe" },
                    function (e) {
                      jt(
                        r,
                        l,
                        t,
                        null == e || null == (e = e.data) ? void 0 : e.gee_token
                      );
                    }
                  );
                } catch (e) {
                  console.warn(e), jt(r, l, t, "");
                }
              }),
            jt = function (e, i, c, a, u) {
              s && clearTimeout(s);
              var d = {
                  message: "",
                  origin: "resp",
                  sid: "",
                  id: (0, x.Z)(),
                  language: "false",
                  end: !0,
                  brotherIds: []
                },
                h = "",
                f = "",
                p = "",
                m = !1,
                g =
                  ((u =
                    (Te(""),
                    Me(!0),
                    Ke(!1),
                    i.append("GtToken", a),
                    {
                      Challenge: null == u ? void 0 : u.geetest_challenge,
                      Seccode: v.DS.encode(
                        null == u ? void 0 : u.geetest_seccode
                      ),
                      Validate: null == u ? void 0 : u.geetest_validate
                    })),
                  new AbortController());
              (ze.current = g),
                xt(),
                (0, _.L)(e, {
                  method: "POST",
                  headers: (0, l.Z)({}, u),
                  body: i,
                  signal: g.signal,
                  openWhenHidden: !0,
                  onopen: function (e) {
                    return (
                      401 === e.status && (0, N.Lh)(),
                      Me(!1),
                      (e = [].concat((0, o.Z)(c), [d])),
                      re(e),
                      Promise.resolve()
                    );
                  },
                  onmessage: function (s) {
                    var l, u;
                    console.log(s.data),
                      "<end>" !== s.data || f || p
                        ? "<end>" === s.data && f
                          ? ((d.end = !1),
                            20002 === (u = JSON.parse(f.slice(7))).key &&
                              (n(), ue(0)),
                            (d.message = u.descr),
                            console.log(d),
                            ((u = [].concat((0, o.Z)(c), [d]))[u.length - 1] =
                              d),
                            re(u),
                            g.abort("\u7ed3\u675f"),
                            Ke(!0),
                            t())
                          : "<end>" === s.data && p
                          ? (console.log(p.slice(10)),
                            (u = JSON.parse(p.slice(10))),
                            Te(u.descr),
                            g.abort("\u7ed3\u675f"),
                            Ke(!0),
                            null != (u = r) && u.verify(),
                            t())
                          : "[error]" === s.data
                          ? (f += s.data)
                          : "[belongerr]" === s.data
                          ? setTimeout(function () {
                              ht("/desk");
                            })
                          : "<kx>" === s.data
                          ? (ue(0), n())
                          : "[geeError]" === s.data
                          ? ((u = (0, o.Z)(c)),
                            re(u),
                            (De.current = {
                              url: e,
                              form: i,
                              oldList: c,
                              token: a
                            }),
                            (p += s.data))
                          : (p || f || m
                              ? !f && m && -1 !== s.data.indexOf("<sid>")
                                ? ((d.sid = s.data.split("<sid>")[0]),
                                  (Oe.current.sid = s.data.split("<sid>")[0]),
                                  (l = new FormData()).append(
                                    "text",
                                    d.message
                                  ),
                                  (0, w.BY)(d.sid)
                                    .then(function (e) {
                                      var t = (0, o.Z)(c),
                                        n = c[c.length - 1],
                                        i =
                                          (t.pop(),
                                          (n.brotherIds = e.reqBrotherIds),
                                          (n.sameReqId =
                                            e.reqBrotherIds[
                                              (null == (i = e.reqBrotherIds)
                                                ? void 0
                                                : i.length) - 1
                                            ]),
                                          (d.brotherIds = e.respBrotherIds),
                                          (d.reqId =
                                            e.respBrotherIds[
                                              e.respBrotherIds.length - 1
                                            ]),
                                          t.push(n),
                                          [].concat((0, o.Z)(t), [d]));
                                      re(i),
                                        (0, b.wy)(l)
                                          .then(function (e) {
                                            d.language = e.language;
                                          })
                                          .catch(function (e) {
                                            console.warn(e);
                                          })
                                          .finally(function () {
                                            console.log(d);
                                            var e = [].concat((0, o.Z)(t), [d]);
                                            re(e),
                                              "sparkTalk" === B &&
                                                setTimeout(function () {
                                                  var t = e.length - 1;
                                                  t =
                                                    (null == d
                                                      ? void 0
                                                      : d.id) +
                                                    "_" +
                                                    t;
                                                  He.current.playClick(t);
                                                }, 400),
                                              g.abort("\u7ed3\u675f");
                                          });
                                    })
                                    .catch(function (e) {
                                      console.warn(e);
                                    }))
                                : !f && m && -1 === s.data.indexOf("<sid>")
                                ? g.abort("\u7ed3\u675f")
                                : p
                                ? (p += s.data)
                                : (f += s.data)
                              : ((h = "".concat(h).concat(v.DS.decode(s.data))),
                                (d.message = h),
                                (u = [].concat((0, o.Z)(c), [d])),
                                re(u)),
                            t())
                        : ((m = !0), (d.end = !1), Ke(!0), t());
                  },
                  onerror: function (e) {
                    console.warn(e, "fetchError"),
                      Me(!1),
                      Ke(!0),
                      (d.message =
                        "\u7f51\u7edc\u597d\u50cf\u51fa\u4e86\u4e2a\u5c0f\u5dee\uff0c\u53ef\u4ee5\u5237\u65b0\u9875\u9762\u8bd5\u4e00\u4e0b\u3002"),
                      (e = [].concat((0, o.Z)(c), [d])),
                      re(e),
                      g.abort("\u7ed3\u675f");
                  }
                })
                  .then(function (e) {
                    console.log(e),
                      Ke(!0),
                      g.abort("\u7ed3\u675f"),
                      (s = setTimeout(function () {
                        ne(function (e) {
                          return "" === e ? "" : "text";
                        }),
                          ce("text");
                      }, 3e5));
                  })
                  .catch(function (e) {
                    console.warn(e, "chat\u63a5\u53e3\u5f02\u5e38\u4e2d\u65ad"),
                      Ke(!0),
                      g.abort("\u7ed3\u675f");
                  });
            };
          return (0, P.jsxs)("div", {
            className: "chat_chatContainer__PEdkm",
            children: [
              (0, P.jsx)(z.Z, {
                show: se,
                closePanel: function () {
                  return le(!1);
                },
                selectNewPrompt: function (e) {
                  if (dt.get("botId"))
                    return Qe || !Xe
                      ? (g.FN.show(
                          "\u5bf9\u8bdd\u8fdb\u884c\u4e2d\uff0c\u8bf7\u52ff\u64cd\u4f5c"
                        ),
                        void le(!1))
                      : (ht("/desk?prompt=".concat(e)),
                        void g.FN.show(
                          "\u60a8\u5df2\u7ecf\u9000\u51fa\u52a9\u624b\u6a21\u5f0f\uff01"
                        ));
                  Se(e), le(!1);
                },
                stop: function () {
                  return Ce.resetAudio();
                },
                botModeFlag: !!dt.get("botId")
              }),
              ft &&
                (0, P.jsx)(Y.Z, {
                  showPopup: ft,
                  closePopup: function () {
                    return pt(!1);
                  }
                }),
              (0, P.jsx)(O.Z, {
                show: se,
                switchPanel: function () {
                  return le(!se);
                },
                botModeFlag: !!dt.get("botId")
              }),
              (0, P.jsxs)("div", {
                className: "chat_chatContent__Far4j",
                children: [
                  null !== dt.get("botId") &&
                    (0, P.jsxs)("div", {
                      className: $,
                      children: [
                        (0, P.jsx)("img", {
                          className: ee,
                          src: Q,
                          alt: "\u8baf\u98de\u661f\u706b\u5927\u6a21\u578b"
                        }),
                        (0, P.jsx)("div", { className: te, children: mt })
                      ]
                    }),
                  (0, P.jsx)(G.Z, {
                    ref: function (e) {
                      return (He.current = e);
                    },
                    chatType: B,
                    $answerRef: Re,
                    list: ie,
                    editType: me,
                    tempInputContent: de,
                    enable: ae,
                    avatarImg: C,
                    answerLoading: Qe,
                    answerComplete: Xe,
                    experienceObj: Ce,
                    editTextChange: function () {
                      var e = document.getElementById("editTextarea"),
                        t = document.getElementById("hiddenEditTextArea");
                      e &&
                        t &&
                        ((t.style.width = e.clientWidth + "px"),
                        setTimeout(function () {
                          var n = t.scrollHeight;
                          e.style.height = n + "px";
                        }));
                    },
                    reAnswerEvent: A,
                    setEditType: function (e) {
                      return ge(e);
                    },
                    setTempInputContent: function (e) {
                      return he(e);
                    },
                    reSubmit: function (e) {
                      return (
                        Ce.audioPause(),
                        null != (t = He.current) && t.setFalse(),
                        e &&
                          ((Oe.current.text = de),
                          (n = (0, o.Z)(ie)).pop(),
                          n.pop(),
                          n.push({
                            message: de,
                            origin: "req",
                            uid: (0, x.Z)()
                          }),
                          re(n),
                          setTimeout(function () {
                            bt(de, n, !0, !0);
                          }),
                          xt()),
                        ge(!1),
                        void he("")
                      );
                      var t, n;
                    },
                    judge: function (e, t, n) {
                      return (
                        be({ sid: e.sid, chatId: Number(Ge), status: t }),
                        Ne(n),
                        void we(!0)
                      );
                    },
                    reloadHistory: function (e, t) {
                      return new Promise(function (n) {
                        (0, w.sp)(e, t)
                          .then(function (e) {
                            var t;
                            console.log(e),
                              (e = e.historyList) && 0 < e.length
                                ? ((e = e.map(function (e) {
                                    return (
                                      e &&
                                        (null != e && e.reqId
                                          ? (e.origin = "resp")
                                          : (e.origin = "req")),
                                      e
                                    );
                                  })),
                                  (Oe.current = {
                                    text:
                                      null == (t = e[e.length - 2])
                                        ? void 0
                                        : t.message,
                                    sid:
                                      (null == (t = e[e.length - 1])
                                        ? void 0
                                        : t.sid) || null
                                  }),
                                  re(e))
                                : T(),
                              xt(),
                              n();
                          })
                          .catch(function (e) {
                            var t;
                            100 !== e.code &&
                              ([30002, 99996, 30012].includes(
                                null == e || null == (t = e.detail)
                                  ? void 0
                                  : t.code
                              )
                                ? g.FN.show(e.msg)
                                : g.FN.show(
                                    "\u83b7\u53d6\u4f1a\u8bdd\u5386\u53f2\u5f02\u5e38"
                                  ),
                              setTimeout(function () {
                                ht("/desk");
                              }, 1e3));
                          });
                      });
                    }
                  }),
                  Ie &&
                    (0, P.jsxs)("div", {
                      className: $,
                      children: [
                        (0, P.jsx)("img", {
                          className: ee,
                          src: Q,
                          alt: "\u8baf\u98de\u661f\u706b\u5927\u6a21\u578b"
                        }),
                        (0, P.jsx)("div", {
                          className: te,
                          children: (0, P.jsx)(W.Z, { mdText: Ie })
                        })
                      ]
                    }),
                  Qe &&
                    (0, P.jsxs)("div", {
                      className: $,
                      children: [
                        (0, P.jsx)("div", {
                          className: te,
                          children: Qe
                            ? (0, P.jsxs)(P.Fragment, {
                                children: [
                                  (0, P.jsx)("div", {
                                    className: "chat_loading__7JVR1",
                                    children: (0, P.jsx)("div", {
                                      className: "chat_loadingInner__3cAvI"
                                    })
                                  }),
                                  "\u56de\u7b54\u4e2d..."
                                ]
                              })
                            : null
                        })
                      ]
                    }),
                  !Xe &&
                    !Qe &&
                    (0, P.jsx)("div", {
                      className: "chat_stopBtn__+wCD+",
                      onClick: function () {
                        var e = new FormData();
                        e.append("fd", ve),
                          e.append("chatId", Ge),
                          (0, w.I5)(e)
                            .then(function () {
                              Oe.current.sid = null;
                            })
                            .catch(function (e) {
                              console.warn(e);
                            })
                            .finally(function () {});
                      },
                      children: "\u505c\u6b62\u8f93\u51fa"
                    }),
                  (0, P.jsx)("div", {
                    ref: Be,
                    className: "chat_fixClear__fLKV8"
                  })
                ]
              }),
              (0, P.jsxs)("div", {
                className: "chat_bottomWrapper__lbzza",
                children: [
                  (0, P.jsx)("div", {
                    className: "chat_userOptions__6gPOe",
                    children:
                      0 !== ae
                        ? (0, P.jsxs)(P.Fragment, {
                            children: [
                              (0, P.jsxs)("div", {
                                className: "chat_switchVoice__Idf0P",
                                onClick: function () {
                                  "play" === Ve
                                    ? g.FN.show(
                                        "\u5f55\u97f3\u4e2d\uff0c\u8bf7\u52ff\u5207\u6362\u8f93\u5165\u65b9\u5f0f"
                                      )
                                    : (window.scroll(0, 0),
                                      Se(""),
                                      he(""),
                                      ce("text" === oe ? "audio" : "text"));
                                },
                                children: [
                                  "text" !== oe || L
                                    ? null
                                    : (0, P.jsx)("img", {
                                        src: M,
                                        alt: "\u8baf\u98de\u661f\u706b\u5927\u6a21\u578b",
                                        className: "chat_audioIcon__ZFauw"
                                      }),
                                  "audio" !== oe || L
                                    ? null
                                    : (0, P.jsx)("img", {
                                        src: X,
                                        alt: "\u8baf\u98de\u661f\u706b\u5927\u6a21\u578b",
                                        className: "chat_textIcon__uFFYB"
                                      })
                                ]
                              }),
                              (0, P.jsxs)("div", {
                                className: ""
                                  .concat("chat_inputArea__ntZoe", " ")
                                  .concat(
                                    L ? "chat_channelInput__ezI-Q" : null
                                  ),
                                children: [
                                  We &&
                                    (0, P.jsxs)(P.Fragment, {
                                      children: [
                                        (0, P.jsxs)("div", {
                                          className:
                                            "chat_uploadWrapper__T7uSj",
                                          children: [
                                            (0, P.jsx)("img", {
                                              src: K,
                                              alt: "\u4e0a\u4f20\u56fe\u7247",
                                              className:
                                                "chat_uploadIcon__YkXb-"
                                            }),
                                            (0, P.jsx)(k.Z, {
                                              isFile: !0,
                                              accept: "jpg,png,jpeg",
                                              needFile: !0,
                                              classType: !0,
                                              onUploaded: function (e) {
                                                ut(e);
                                              },
                                              shouldResize: !0,
                                              size: 20
                                            })
                                          ]
                                        }),
                                        (0, P.jsx)("div", {
                                          className: "chat_line__E6f4p"
                                        })
                                      ]
                                    }),
                                  "text" === oe
                                    ? (0, P.jsxs)(P.Fragment, {
                                        children: [
                                          (0, P.jsxs)("div", {
                                            className:
                                              "chat_textAreaWrapper__H3e95",
                                            children: [
                                              (0, P.jsx)("textarea", {
                                                ref: Pe,
                                                value: Fe,
                                                maxLength: 7e3,
                                                disabled: 0 === ae || fe,
                                                style: {
                                                  height: "3rem",
                                                  minWidth: We ? "" : "24.5rem"
                                                },
                                                onChange: function (e) {
                                                  var t, n;
                                                  "@" ===
                                                    (n =
                                                      null !=
                                                      (t =
                                                        null == e ||
                                                        null == (t = e.target)
                                                          ? void 0
                                                          : t.value)
                                                        ? t
                                                        : "") &&
                                                    (Pe &&
                                                      null != Pe &&
                                                      null !=
                                                        (n = Pe.current) &&
                                                      n.blur(),
                                                    pt(!0)),
                                                    7e3 <=
                                                      e.target.value.length &&
                                                      g.FN.show(
                                                        "\u8f93\u5165\u5185\u5bb9\u5df2\u8d85\u4e0a\u9650\uff01"
                                                      ),
                                                    "" === e.target.value &&
                                                      setTimeout(function () {
                                                        Pe.current &&
                                                          (Pe.current.style.height =
                                                            "3rem");
                                                      }),
                                                    Se(e.target.value),
                                                    he(e.target.value),
                                                    S();
                                                },
                                                onFocus: function () {
                                                  ge(!1), S();
                                                },
                                                onBlur: function () {
                                                  window.scroll(0, 0), S();
                                                },
                                                placeholder:
                                                  "play" === Ve
                                                    ? "\u652f\u6301\u4e2d\u82f1\u6587\u8f93\u5165"
                                                    : "\u8bf7\u5728\u6b64\u8f93\u5165\u60a8\u8981\u63d0\u95ee\u7684\u5185\u5bb9"
                                              }),
                                              "play" === Ve
                                                ? (0, P.jsxs)("div", {
                                                    className:
                                                      "chat_stopPlayIcon__LVP+O",
                                                    onClick: function () {
                                                      Ye.current &&
                                                        Ye.current.stopAudio();
                                                    },
                                                    children: [
                                                      (0, P.jsx)(D.uJ, {
                                                        style: {
                                                          pointerEvents: "none"
                                                        }
                                                      }),
                                                      (0, P.jsx)(H.Z, {})
                                                    ]
                                                  })
                                                : null
                                            ]
                                          }),
                                          (0, P.jsx)("div", {
                                            className:
                                              0 === ae
                                                ? "chat_disabled__ZcRH6"
                                                : "chat_send__dBrgV",
                                            onClick: function () {
                                              Se(localStorage.getItem('inputValue'));
                                              he(localStorage.getItem('inputValue'));
                                              if (!Ye || !Ye.current) {
                                                return;
                                              }
                                              var e, t;
                                              Ye.current &&
                                                "play" === Ve &&
                                                null != (e = Ye.current) &&
                                                e.stopAudio(),
                                                1 === ae &&
                                                  ((e = Fe),
                                                  console.log(e),
                                                  Ge || 0 === Ge
                                                    ? Xe
                                                      ? e ||
                                                        (null != at &&
                                                          at.fileUrl)
                                                        ? (null != Ce &&
                                                            Ce.resetAudio(),
                                                          "play" === Ve &&
                                                            ce("audio"),
                                                          null !=
                                                            (t = He.current) &&
                                                            t.setFalse(),
                                                          "#callback" ===
                                                            (null == e ||
                                                            null ==
                                                              (t = e.trim()) ||
                                                            null ==
                                                              (t = t.replace(
                                                                /\s/g,
                                                                ""
                                                              ))
                                                              ? void 0
                                                              : t.toLowerCase()) &&
                                                          "sparkTalk" === B
                                                            ? (wt(e, !1),
                                                              setTimeout(
                                                                function () {
                                                                  ne("text"),
                                                                    ce("text"),
                                                                    Se("");
                                                                }
                                                              ))
                                                            : "#sparktalking" ===
                                                                (null == e ||
                                                                null ==
                                                                  (t =
                                                                    e.trim()) ||
                                                                null ==
                                                                  (t =
                                                                    t.replace(
                                                                      /\s/g,
                                                                      ""
                                                                    ))
                                                                  ? void 0
                                                                  : t.toLowerCase()) &&
                                                              "sparkTalk" !== B
                                                            ? (wt(e, !1),
                                                              setTimeout(
                                                                function () {
                                                                  ne(
                                                                    "sparkTalk"
                                                                  ),
                                                                    ce("audio"),
                                                                    Se("");
                                                                }
                                                              ))
                                                            : ("sparkTalk" ===
                                                                B &&
                                                                ce("audio"),
                                                              wt(e, !0),
                                                              Pe.current &&
                                                                (Se(""),
                                                                he(""),
                                                                (Pe.current.style.height =
                                                                  "3rem"))))
                                                        :  void(0)
                                                      : g.FN.show(
                                                          "\u8bf7\u7b49\u56de\u7b54\u5b8c\u6210\u540e\u518d\u53d1\u9001\u95ee\u9898"
                                                        )
                                                    : g.FN.show(
                                                        "\u4f1a\u8bddID\u5931\u6548\uff0c\u8bf7\u91cd\u65b0\u521b\u5efa\u5bf9\u8bdd"
                                                      ));
                                            },
                                            children: "\u53d1\u9001"
                                          })
                                        ]
                                      })
                                    : (0, P.jsx)("div", {}),
                                  (0, P.jsx)(U.Z, {
                                    styles:
                                      "text" === oe
                                        ? { display: "none" }
                                        : null,
                                    ref: Ye,
                                    setLoading: function (e) {
                                      pe(e);
                                    },
                                    changeInputType: function () {
                                      return ce("text");
                                    },
                                    send: function (e) {
                                      Se(e),
                                        he(e),
                                        S(),
                                        setTimeout(function () {
                                          Pe.current &&
                                            (Pe.current.scrollTop =
                                              Pe.current.scrollHeight);
                                        });
                                    },
                                    changeStatus: function (e) {
                                      Ae(e);
                                    }
                                  })
                                ]
                              })
                            ]
                          })
                        : (0, P.jsxs)("div", {
                            className: "chat_reCreate__nzLNq",
                            children: [
                              (0, P.jsx)("span", {
                                onClick: dt.get("botId")
                                  ? function () {
                                      (0, w.F)({ chatListId: dt.get("id") })
                                        .then(function () {
                                          (0, w.U4)({
                                            botId: dt.get("botId")
                                          }).then(function (e) {
                                            Zt(),
                                              ht(
                                                "/chat?id="
                                                  .concat(
                                                    null == e ? void 0 : e.id,
                                                    "&botId="
                                                  )
                                                  .concat(
                                                    null == e ? void 0 : e.botId
                                                  )
                                              ),
                                              ue(1),
                                              g.FN.show({
                                                content:
                                                  "\u5237\u65b0\u6210\u529f\uff01",
                                                icon: "success"
                                              });
                                          });
                                        })
                                        .catch(function (e) {
                                          console.error(e),
                                            g.FN.show({
                                              content:
                                                "\u5237\u65b0\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\uff01",
                                              icon: "fail"
                                            });
                                        });
                                    }
                                  : function () {
                                      Qe || !Xe
                                        ? g.FN.show(
                                            "\u5bf9\u8bdd\u8fdb\u884c\u4e2d\uff0c\u8bf7\u52ff\u64cd\u4f5c"
                                          )
                                        : Ee.current ||
                                          ((0, w.U4)({})
                                            .then(function (e) {
                                              (null == e ? void 0 : e.id) ===
                                                Number(Ge) &&
                                              null != e &&
                                              e.oldBlankList
                                                ? g.FN.show(
                                                    "\u8bf7\u5148\u5c1d\u8bd5\u95ee\u6211\u4e00\u4e2a\u95ee\u9898\uff0c\u518d\u65b0\u5efa\u5bf9\u8bdd\u7a97\u53e3\u5427\uff01"
                                                  )
                                                : (null != e &&
                                                    e.id &&
                                                    Je(e.id),
                                                  n(),
                                                  ot(
                                                    e.title ||
                                                      "\u65b0\u5efa\u804a\u5929"
                                                  ),
                                                  ht(
                                                    "/chat?id=".concat(
                                                      null == e ? void 0 : e.id
                                                    )
                                                  ));
                                            })
                                            .catch(function (e) {
                                              100 !== e.code &&
                                                null != e &&
                                                e.msg &&
                                                g.FN.show(e.msg);
                                            })
                                            .finally(function () {
                                              Ee.current = !1;
                                            }),
                                          (Ee.current = !0));
                                    },
                                children: "\u70b9\u8fd9\u91cc"
                              }),
                              "\uff0c",
                              dt.get("botId")
                                ? "\u6e05\u7a7a\u4f1a\u8bdd\u5386\u53f2\u63a5\u7740\u804a"
                                : "\u6362\u4e2a\u8bdd\u9898\u63a5\u7740\u804a"
                            ]
                          })
                  }),
                  (0, P.jsx)("textarea", {
                    id: "hiddenTextArea",
                    value: de,
                    style: {
                      position: "absolute",
                      top: 0,
                      zIndex: -1,
                      width: "24.5rem",
                      height: "2.1rem",
                      padding: 0,
                      visibility: "hidden",
                      fontSize: "1.5rem"
                    }
                  }),
                  (0, P.jsx)("textarea", {
                    id: "hiddenEditTextArea",
                    value: de,
                    style: {
                      position: "absolute",
                      top: 0,
                      zIndex: -1,
                      width: "24rem",
                      height: "2.1rem",
                      visibility: "hidden",
                      fontSize: "1.4rem"
                    }
                  })
                ]
              }),
              (0, P.jsx)(J.Z, {
                judgeObj: Ze,
                visible: _e,
                onClose: function () {
                  return we(!1);
                },
                changeTemStatus: function (e) {
                  var t;
                  (t = (0, o.Z)(ie)), je && ((t[je].status = e), re(t));
                }
              })
            ]
          });
        };
    },
    5186: function (e, t, n) {
      function i(e, t) {
        return s.createElement(
          o.Z,
          (0, r.Z)((0, r.Z)({}, e), {}, { ref: t, icon: l })
        );
      }
      n.d(t, {
        Z: function () {
          return c;
        }
      });
      var r = n(1413),
        s = n(47313),
        l = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"
                }
              }
            ]
          },
          name: "right",
          theme: "outlined"
        },
        o = n(73847),
        c = ((i.displayName = "RightOutlined"), s.forwardRef(i));
    }
  }
]);
