"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
  [9810],
  {
    34841: function (e, n, t) {
      t.d(n, {
        b: function () {
          return i;
        },
        o: function () {
          return a;
        }
      });
      var r = t(92075);
      function i(e) {
        return e.filter(function (e) {
          var n = e.name.split(".").pop() || "";
          return !r.dC.includes(n);
        });
      }
      function a(e) {
        return e.filter(function (e) {
          var n = e.name.split(".").pop() || "";
          return r.dC.includes(n);
        });
      }
    },
    72162: function (e, n, t) {
      t.d(n, {
        t: function () {
          return M;
        }
      });
      var r = t(88284),
        i = t.n(r),
        a = t(84007),
        s = t(91150),
        c = t.n(s),
        l = t(63313),
        o = t(84152),
        u = t(74599),
        d = t(75555),
        f = t(92082),
        m = t(48666),
        h = t(5269),
        v = "docDetail___iNRfO",
        _ = "refTitle___mfx1E",
        g = "source___US4S4",
        p = "left___So1Nl",
        x = "notitle___OdGeb",
        A = "icon___u5KBR",
        j = "label___Irqqw",
        N = "go___F2ivw",
        k = "titleLine___SDP72",
        y = "title___fi8jf",
        I = "content___TqBp2",
        w = "ragList___Oor1D",
        b = "ragItem___ncrbR",
        C = "text___aD7Eb",
        R = "imgList___VqWet",
        D = "imageItem___ns8qQ",
        T = "bottomPlace___hTPQC",
        Z = "reftag___b1Bsd",
        B = "img___dJt3H",
        L = t(78095),
        U = t.n(L),
        E = t(74266),
        S = t.n(E),
        W = t(44810),
        q = ["node"],
        F = {
          h1: function (e) {
            var n = e.children;
            return (0, W.jsx)("div", { children: n });
          },
          h2: function (e) {
            var n = e.children;
            return (0, W.jsx)("div", { children: n });
          },
          h3: function (e) {
            var n = e.children;
            return (0, W.jsx)("div", { children: n });
          },
          h4: function (e) {
            var n = e.children;
            return (0, W.jsx)("div", { children: n });
          },
          h5: function (e) {
            var n = e.children;
            return (0, W.jsx)("div", { children: n });
          },
          h6: function (e) {
            var n = e.children;
            return (0, W.jsx)("div", { children: n });
          },
          blockquote: function (e) {
            var n = e.children;
            return (0, W.jsx)("div", { children: n });
          },
          strong: function (e) {
            var n = e.children;
            return (0, W.jsx)("span", { children: n });
          },
          em: function (e) {
            var n = e.children;
            return (0, W.jsx)("span", { children: n });
          },
          a: function (e) {
            e.children;
            return null;
          },
          img: function (e) {
            e.node;
            var n = S()(e, q);
            return ((null == n ? void 0 : n.className) || "").startsWith("img")
              ? (0, W.jsx)("img", U()({}, n))
              : null;
          }
        },
        M = function () {
          var e = (0, l.useRef)(null),
            n = (0, m.L)(),
            t = n.clearRefTimer,
            r = (n.setRefTimer, n.refDetailInfo),
            s = (n.clearRefDetailInfo, (r || {}).doc),
            L = (0, f.M)("thememode.thememode", (0, f.R)("mode")).mode,
            U = (0, h.l)(function (e) {
              return e.debugging;
            });
          (0, l.useLayoutEffect)(
            function () {
              if (null != r && r.doc && e.current) {
                e.current.style.visibility = "hidden";
                var n = r.indexLeft,
                  t = r.indexTop,
                  i = (function (e, n) {
                    var t = 16;
                    if (!e) return { left: 0, top: 0 };
                    var r = e.getBoundingClientRect(),
                      i = r.width,
                      a = r.height,
                      s = document.documentElement.clientHeight,
                      c = document.documentElement.clientWidth,
                      l = n.x1 - 5 - t,
                      o = c - (n.x2 + 5 + t),
                      u = n.y1 - 5 - t,
                      d = s - (n.y2 + 5 + t);
                    return {
                      left:
                        o >= i ? n.x2 + 5 : l >= i ? n.x1 - i - 5 : c - i - t,
                      top: u >= a ? n.y1 - a - 5 : d >= a ? n.y2 + 5 : s - a - t
                    };
                  })(e.current, { x1: n, y1: t, x2: n + 14, y2: t + 14 }),
                  a = i.left,
                  s = i.top;
                if (a && s)
                  return (
                    (e.current.style.left = "".concat(a, "px")),
                    (e.current.style.top = "".concat(s, "px")),
                    (e.current.style.visibility = "visible"),
                    function () {}
                  );
              }
            },
            [r]
          );
          var E = function () {
            (0, d.GE)("url_rag_search_doc"),
              setTimeout(function () {
                window.open(s.url);
              }, 150);
          };
          if (!s) return null;
          var S = s || {},
            q = (S.id, S.title),
            M = S.url,
            H = S.rag_segments,
            X = S.source_label,
            J = S.source_icon;
          return (0, W.jsx)("div", {
            className: v,
            ref: e,
            style: { visibility: "hidden" },
            onMouseEnter: function () {
              t();
            },
            onMouseLeave: function () {
              (0, m.L.getState().delayClearRefDetailInfo)();
            },
            children:
              s &&
              (0, W.jsxs)(W.Fragment, {
                children: [
                  (0, W.jsxs)("div", {
                    className: _,
                    children: [
                      (0, W.jsxs)("div", {
                        className: g,
                        children: [
                          (0, W.jsxs)("div", {
                            className: c()(p, i()({}, x, !q)),
                            children: [
                              J &&
                                (0, W.jsx)("div", {
                                  className: A,
                                  children: (0, W.jsx)("img", {
                                    src: J,
                                    alt: ""
                                  })
                                }),
                              X &&
                                (0, W.jsx)(a.Z, {
                                  className: j,
                                  noWrap: !0,
                                  children: X
                                })
                            ]
                          }),
                          !q &&
                            (0, W.jsx)(o.Kr1, {
                              className: N,
                              type: "arrow-right",
                              onClick: E
                            })
                        ]
                      }),
                      q &&
                        (0, W.jsxs)("div", {
                          className: k,
                          onClick: E,
                          children: [
                            (0, W.jsx)(a.Z, {
                              component: "a",
                              href: M,
                              className: y,
                              noWrap: !0,
                              onClick: function (e) {
                                e.preventDefault();
                              },
                              children: q
                            }),
                            (0, W.jsx)(o.Kr1, {
                              className: A,
                              type: "arrow-right"
                            })
                          ]
                        })
                    ]
                  }),
                  (0, W.jsx)("div", {
                    className: I,
                    children: (0, W.jsx)("div", {
                      className: w,
                      children:
                        (null == H ? void 0 : H.length) &&
                        H.map(function (e, n) {
                          var t = e.text,
                            r = e.images,
                            i = e.index,
                            a = null == r ? void 0 : r.slice(0, 1),
                            s = '<span className="'
                              .concat(Z, '"><img src="')
                              .concat(
                                "dark" === L
                                  ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFbSURBVHgB7ZI/UsJQEMa/TaCyoXUG9HEDvAGeAG8ggQtYwVARKmbwDE68gXoC8Aa5ARn/9KksnMlbNwwJJnkhFjo2+Ypks/Pt/t7uC1Drv0Wm5NLbKuLGjQUayKfap/3JqH2R97retnWim0NtYWAxegy04nxEfDlzOptGvuDWe58zs2vgtvKJlffWA+OBCXIgSHiQrVnF70Zlc4IvhSE0P6MwJdacBYcC8+NAU3OTAchphpnmRI8f+HRcpxvCIJubaXN5B5rYiVeS96UAMV0nFyKgxXTUdlGi+DBSoA7Nbdn3aWDyWt/G7ScF03HHxTExXyWhZr0oa54CZBCV1oKfUCk6T6LZ+Oz+mHMHsEEqTTD7qFZysUGVsfCbssCW3mvfYA1MqzB7ZbL9hRcARDS3GfNiSRTIo5tLKptpDYNWdy/ORNZn4Y9VA2rALwEicPADb1gSG8Vc7am10xdq8IpoDu9snAAAAABJRU5ErkJggg=="
                                  : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFnSURBVHgB7VTLUcMwEN0V5kyogDhpICWEChgqwJkJZ6ABIicNwDkZ4hLoIC7BDTA2HZgztpaVf9ge2RkOmeHgd9Ln7XtvNZIABvw3YN/mUoZzIFoBwYynI72miBZvm6nX5joyHJ8r9agAb1h0XIhH2/XEtkziusAi2rPivL0nMBeo494NHyglSYCjemoqzCxzIjqUhAIxx4o4W0yogjp/uQpX2qAhghBoLuo6k4mlUk4kxpU4kbvbTF8AzB1zt7Im7ieIC0/aUUPTUHRXzhOB156cBNABi2Bf6SO+b1371sQTjSKlnFqRx4k6DTjQiLuc51yIvhGeuriiOaVZNUR4hR7wEfxyAf32EXWb4NlFOdz2dNEGkfqE/kBmZG/EgJ20/fYaorgy8RN+J7rDThO+AAej+fOHu1tPZX2NiBx+FE6ba+VX+FLAaZH9Eqc2gcFkMClA6dexAiX0l589tPgYFzHnDvgTfgAdRocq6SDJLAAAAABJRU5ErkJggg==",
                                '" className="'
                              )
                              .concat(B, '" /></span>')
                              .concat(t);
                          return (0, W.jsxs)(
                            "div",
                            {
                              className: b,
                              children: [
                                (0, W.jsx)("div", {
                                  className: C,
                                  children: (0, W.jsx)(u.U, {
                                    content: s,
                                    components: F
                                  })
                                }),
                                U &&
                                  !(null == a || !a.length) &&
                                  (0, W.jsx)("div", {
                                    className: R,
                                    children:
                                      null == a
                                        ? void 0
                                        : a.map(function (e) {
                                            return (0,
                                            W.jsx)("img", { className: D, src: null == e ? void 0 : e.url, alt: "" }, e.id);
                                          })
                                  })
                              ]
                            },
                            i
                          );
                        })
                    })
                  }),
                  (0, W.jsx)("div", { className: T })
                ]
              })
          });
        };
    },
    11228: function (e, n, t) {
      t.d(n, {
        z: function () {
          return c;
        }
      });
      var r = t(91150),
        i = t.n(r),
        a = "refIndex___iN7ZN",
        s = t(44810),
        c = function (e) {
          var n = e.value,
            t = e.className;
          return (0, s.jsx)("span", { className: i()(a, t), children: n });
        };
    },
    61664: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        }
      });
      var r = t(91694),
        i = t(87751),
        a = t(40175),
        s = t(92082),
        c = t(48079),
        l = t(5269),
        o = "aiAvatar___CdLiA",
        u = t(56722),
        d = t(44810),
        f = function (e) {
          e.sid;
          var n = e.isNew,
            t = e.isLastAssist,
            f = (0, s.M)("thememode.thememode", (0, s.R)("mode")).mode,
            m = (0, l.l)(function (e) {
              return e.debugging;
            }),
            h = (0, c.aK)(function (e) {
              return e.detailsMap[e.chatId];
            }),
            v = "forbidden" === (null == h ? void 0 : h.status);
          return (0, d.jsxs)(u.Z, {
            className: o,
            children: [
              n && m && (0, d.jsx)("img", { src: a, alt: "" }),
              n && !m && (0, d.jsx)("img", { src: i, alt: "" }),
              !n && t && !v && m && (0, d.jsx)("img", { src: a, alt: "" }),
              !n && t && !v && !m && (0, d.jsx)("img", { src: r, alt: "" }),
              ((!n && !t) || v) &&
                "dark" === f &&
                (0, d.jsx)("img", {
                  src: "http://127.0.0.1:8884/kimi/static/kimi_avatar_keep.png",
                  alt: ""
                }),
              ((!n && !t) || v) &&
                "light" === f &&
                (0, d.jsx)("img", {
                  src: "http://127.0.0.1:8884/kimi/static/kimi_avatar_keep_light.png",
                  alt: ""
                })
            ]
          });
        };
    },
    5246: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return g;
        }
      });
      var r = t(34827),
        i = t.n(r),
        a = t(84007),
        s = t(45562),
        c = t(63313),
        l = t.n(c),
        o = t(84152),
        u = t(17741),
        d = t(92082),
        f = t(48079),
        m = "searchPlusWidgets___G8I0x",
        h = "searchConetent___I0ToG",
        v = t(44810),
        _ = function (e) {
          var n = (0, c.useState)(!1),
            t = i()(n, 2),
            r = t[0],
            l = t[1],
            _ = e.data,
            g = e.onlyShow,
            p = e.error,
            x = (0, d.M)("lang", (0, d.R)("fm")).fm,
            A = (null == _ ? void 0 : _.length) && _[_.length - 1],
            j = (0, c.useMemo)(
              function () {
                var e = 0;
                return (
                  null == _ ||
                    _.forEach(function (n) {
                      "get_res" === n.msg.type && e++;
                    }),
                  e
                );
              },
              [_]
            ),
            N = (0, c.useCallback)(
              function (e) {
                var n =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1],
                  t = null;
                switch (e.msg.type) {
                  case "start":
                  case "start_res":
                  case "no_res":
                    t = x({
                      id: "msh.chat.searchplus.msg.".concat(e.msg.type)
                    });
                    break;
                  case "get_res":
                    var r = e.msg.successNum;
                    t = x(
                      { id: "msh.chat.searchplus.msg.".concat(e.msg.type) },
                      { successNum: r }
                    );
                    break;
                  case "done":
                  case "answer":
                    t = x(
                      { id: "msh.chat.searchplus.msg.".concat(e.msg.type) },
                      { res_count: j }
                    );
                }
                return (0, v.jsxs)(a.Z, {
                  noWrap: !n,
                  children: [
                    t,
                    "get_res" === e.msg.type &&
                      (0, v.jsx)("a", {
                        href: e.msg.url,
                        target: "_blank",
                        rel: "noreferrer",
                        children: e.msg.title
                      })
                  ]
                });
              },
              [j]
            );
          return (
            !!_ &&
            (null == p ? void 0 : p.error_type) !== f.vp.forbidden &&
            (null == p ? void 0 : p.error_type) !== f.vp.severity_high &&
            (0, v.jsxs)(v.Fragment, {
              children: [
                A &&
                  (0, v.jsxs)(u.Z, {
                    flex: !0,
                    center: "y",
                    className: m,
                    onClick: function () {
                      g || l(!r);
                    },
                    children: [
                      N(A, !1),
                      (0, v.jsx)(o.Kr1, {
                        type: "bottom",
                        sx: { transform: r ? "rotate(180deg)" : "rotate(0deg)" }
                      })
                    ]
                  }),
                r &&
                  (0, v.jsx)(s.Z, {
                    className: h,
                    children:
                      null == _
                        ? void 0
                        : _.map(function (e, n) {
                            var t = e.msg,
                              r = "";
                            "get_res" === t.type && (r = t.imageURL);
                            var i = "".concat(n);
                            return (0,
                            v.jsx)("div", { children: (0, v.jsxs)(a.Z, { component: "div", children: [N(e), r && (0, v.jsx)("img", { src: r })] }) }, i);
                          })
                  })
              ]
            })
          );
        },
        g = l().memo(_);
    },
    84214: function (e, n, t) {
      t.d(n, {
        s: function () {
          return Y;
        }
      });
      var r = t(78095),
        i = t.n(r),
        a = t(74266),
        s = t.n(a),
        c = t(34827),
        l = t.n(c),
        o = t(84007),
        u = t(63313),
        d = t(74599),
        f = t(51911),
        m = t(48079),
        h = t(5269),
        v = t(88284),
        _ = t.n(v),
        g = t(53939),
        p = t.n(g),
        x = t(83134),
        A = t.n(x),
        j = t(91150),
        N = t.n(j),
        k = t(75555),
        y = t(48666),
        I = (t(72162), "ragTag___IXxub"),
        w = "ragIndex___HYxyx",
        b = "highlight___l_oKb",
        C = t(11228),
        R = t(44810),
        D = function (e) {
          var n = e.sid,
            t = e.value,
            r = e.docData,
            i = e.dataIndex,
            a = (0, y.L)(),
            s = a.clearRefTimer,
            c = a.highlightInfo,
            l = (function () {
              var e = A()(
                p()().mark(function e(t) {
                  var a, c, l, o, u, d, f, m;
                  return p()().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((a = T(t.target)),
                            (c = Z(t.target) || {}),
                            (l = c.scrollTop),
                            (o = a.actualTop),
                            (u = a.actualLeft),
                            a.actualWidth,
                            r)
                          ) {
                            e.next = 7;
                            break;
                          }
                          return e.abrupt("return");
                        case 7:
                          return (
                            s(),
                            (d = y.L.getState()),
                            (f = d.getDocDetail),
                            (e.next = 11),
                            f({
                              doc_id: "".concat(r.index),
                              seg_ref_indexes: r.rag_segment_ids,
                              segment_id: n
                            })
                          );
                        case 11:
                          (m = e.sent),
                            (0, k.GE)("hover_rag_search_doc_index_num"),
                            m &&
                              y.L.getState().setRefDetailInfo(
                                m,
                                u,
                                o - l,
                                n,
                                i
                              );
                        case 14:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })(),
            o = function () {
              (0, y.L.getState().delayClearRefDetailInfo)();
            };
          return (0, R.jsx)("span", {
            className: I,
            onMouseEnter: l,
            onMouseLeave: o,
            children: (0, R.jsx)(C.z, {
              className: N()(w, _()({}, b, c.sid === n && c.idx === i)),
              value: t
            })
          });
        },
        T = function (e) {
          for (
            var n = e.offsetTop,
              t = e.offsetLeft,
              r = e.offsetWidth,
              i = e.offsetParent;
            i && null !== i;

          )
            (n += i.offsetTop), (t += i.offsetLeft), (i = i.offsetParent);
          return { actualTop: n, actualLeft: t, actualWidth: r };
        },
        Z = function (e) {
          for (var n = 0, t = e; t && null !== t; )
            t.scrollTop && (n += t.scrollTop),
              (t = t.parentNode || t.parentElement);
          return { scrollTop: n };
        };
      var B = t(17741),
        L = "errorContent___p1Q6L";
      function U(e) {
        var n = e.error;
        return (0, R.jsx)(B.Z, {
          className: L,
          children: (0, R.jsx)(o.Z, {
            component: "p",
            variant: "text",
            children: (null == n ? void 0 : n.message) || ""
          })
        });
      }
      var E = t(60430),
        S = t.n(E),
        W = t(45562),
        q = t(45089),
        F = t(38399),
        M = t(75074),
        H = t(39324),
        X = {
          urlContainer: "urlContainer___yG36s",
          link: "link___HXSpe",
          dot: "dot___N_cba",
          parsed: "parsed____qF1F",
          failed: "failed___VCwKk",
          timeout: "timeout___sRkcm"
        },
        J = function (e) {
          var n = e.status,
            t = e.title,
            r = e.wc,
            i = e.url,
            a = null == i ? void 0 : i.slice(0, i.length - 1),
            s = null == i ? void 0 : i.slice(-1),
            c = (0, u.useMemo)(
              function () {
                var e = (0, M.VY)().i18n;
                return "parsed" === n
                  ? t || r
                    ? t
                      ? r
                        ? "“"
                            .concat(t, "”，")
                            .concat(
                              e.fm("msh.chat.segment.url.parsed.wc", {
                                wc: (0, H.uf)(r)
                              })
                            )
                        : "“".concat(t, "”")
                      : e.fm("msh.chat.segment.url.parsed.wc", {
                          wc: (0, H.uf)(r)
                        })
                    : ""
                  : "failed" === n || "timeout" === n
                  ? e.fm("msh.chat.segment.url.failed")
                  : e.fm("msh.chat.segment.url.parsing");
              },
              [n, t, r]
            );
          return (0, R.jsx)(F.Z, {
            title: c,
            placement: "top",
            children: (0, R.jsx)("span", {
              className: X.urlContainer,
              children: (0, R.jsxs)("a", {
                href: i,
                target: "_blank",
                className: X.link,
                rel: "noreferrer",
                children: [
                  a,
                  (0, R.jsxs)(o.Z, {
                    noWrap: !0,
                    variant: "text",
                    children: [
                      s,
                      (0, R.jsx)("span", { className: N()(X.dot, X[n]) })
                    ]
                  })
                ]
              })
            })
          });
        },
        V = "userContent___uG9aZ",
        z = function (e) {
          var n = e.content;
          return (0, R.jsx)(W.Z, {
            className: V,
            children: (0, R.jsx)(o.Z, {
              component: "p",
              variant: "text",
              children: (function () {
                var e = S()(n.matchAll(q.J)),
                  t = 0,
                  r = [];
                e.forEach(function (e) {
                  var i = e.index,
                    a = l()(e, 6),
                    s = a[0],
                    c = (a[1], a[2]),
                    o = a[3],
                    u = a[4],
                    d = a[5],
                    f = isNaN(Number(u)) ? 0 : Number(u),
                    m = n.slice(t, i);
                  m && r.push(m),
                    r.push(
                      (0, R.jsx)(J, { status: c, title: o, wc: f, url: d })
                    ),
                    (t = i + s.length);
                });
                var i = n.length - t;
                return (
                  i > 0 && r.push(n.slice(-i)),
                  (0, R.jsx)(R.Fragment, {
                    children: r.map(function (e, n) {
                      return (0, R.jsx)(u.Fragment, { children: e }, n);
                    })
                  })
                );
              })()
            })
          });
        },
        G = ["node"];
      function Q() {
        var e = (0, u.useState)("."),
          n = l()(e, 2),
          t = n[0],
          r = n[1];
        return (
          (0, u.useEffect)(function () {
            var e = setInterval(function () {
              r(function (e) {
                return "..." === e ? "." : e + ".";
              });
            }, 500);
            return function () {
              clearInterval(e);
            };
          }, []),
          t
        );
      }
      function Y(e) {
        var n,
          t = e.data,
          r = e.isNew,
          a = e.isUser,
          c = e.onlyShow,
          l = e.isChattingCase;
        (0, h.l)(function (e) {
          return e.debugging;
        });
        if (null != t && t.error)
          return (null == t || null === (n = t.error) || void 0 === n
            ? void 0
            : n.error_type) === m.vp.over_limit
            ? (0, R.jsx)(d.U, { content: t.error.message, done: !r })
            : (0, R.jsx)(U, { error: t.error });
        if (a && t.content) return (0, R.jsx)(z, { content: t.content });
        if (a && !t.content) return null;
        if (t.canceled && !t.content)
          return (0, R.jsx)(d.U, {
            content: "`tufrowpqkvpetdrhluyuvzwv（用户停止）`",
            done: !r
          });
        if (!t.content)
          return r || l
            ? (0, R.jsx)(Q, {})
            : null != t && t.error
            ? ""
            : (0, R.jsx)(o.Z, { children: f.W });
        var u = t.content
          .replace(/(\\\[|\\\])/g, "$$$")
          .replace(/(\\\(|\\\))/g, "$");
        if (
          ((u = u
            .split("$$")
            .map(function (e, n) {
              return n % 2 == 0 ? e : e.replace(/\n/g, "");
            })
            .join("$$")
            .split("$")
            .map(function (e, n) {
              return n % 2 == 0 ? e : e.replace(/\n/g, "");
            })
            .join("$")),
          t.canceled && !c)
        ) {
          var v,
            _ = null === (v = u) || void 0 === v ? void 0 : v.match(/```/g);
          if (((null == _ ? void 0 : _.length) || 0) % 2 == 0)
            if (u.trim().endsWith("`"))
              u += "tufrowpqkvpetdrhluyuvzwv（用户停止）`";
            else {
              var g,
                p =
                  null === (g = u) || void 0 === g ? void 0 : g.match(/\$\$/g);
              u +=
                ((null == p ? void 0 : p.length) || 0) % 2 != 0
                  ? "$$ `tufrowpqkvpetdrhluyuvzwv（用户停止）`"
                  : " `tufrowpqkvpetdrhluyuvzwv（用户停止）`";
            }
          else u += "\n```\n\n `tufrowpqkvpetdrhluyuvzwv（用户停止）`";
        }
        return (0, R.jsx)(R.Fragment, {
          children: (0, R.jsx)(d.U, {
            content: u,
            done: !r,
            needRef: !(null == t || !t.search_plus),
            components: {
              span: function (e) {
                var n,
                  r = e.node,
                  a = s()(e, G);
                if (
                  "rag" ===
                  (null === (n = r.properties) || void 0 === n
                    ? void 0
                    : n.dataType)
                ) {
                  var l, o, u;
                  if (c) return null;
                  var d =
                      null == r || null === (l = r.properties) || void 0 === l
                        ? void 0
                        : l.dataIndex,
                    f =
                      null == r ||
                      null === (o = r.children) ||
                      void 0 === o ||
                      null === (o = o[0]) ||
                      void 0 === o
                        ? void 0
                        : o.value;
                  return (0, R.jsx)(D, {
                    sid: null == t ? void 0 : t.id,
                    value: f,
                    dataIndex: d,
                    docData:
                      null === (u = t.ref_docs) || void 0 === u ? void 0 : u[d]
                  });
                }
                return (0, R.jsx)("span", i()({}, a));
              }
            }
          })
        });
      }
    },
    48202: function (e, n, t) {
      t.d(n, {
        L: function () {
          return p;
        }
      });
      var r = t(78095),
        i = t.n(r),
        a = t(91150),
        s = t.n(a),
        c = t(17741),
        l = t(34841),
        o = t(39324),
        u = t(48079),
        d = t(61888),
        f = t(68229),
        m = t(14221),
        h = "refContainer___vuNDl",
        v = "fileItem___RF8S_",
        _ = "imageItem___cEgQW",
        g = t(44810);
      function p(e) {
        var n = (0, d.Z)().caseID,
          t = (0, u.aK)(function (e) {
            var t;
            return null !== (t = e.filesMap[n || e.chatId]) && void 0 !== t
              ? t
              : [];
          }),
          r = (null == e ? void 0 : e.data).file_refs,
          a =
            null == r
              ? void 0
              : r
                  .map(function (e) {
                    return t[e];
                  })
                  .filter(function (e) {
                    return !!e;
                  });
        if (null == a || !a.length) return null;
        var p = (0, l.b)(a),
          x = (0, l.o)(a);
        return (0, g.jsxs)(g.Fragment, {
          children: [
            !(null == p || !p.length) &&
              (0, g.jsx)(c.Z, {
                flex: !0,
                gap: 2,
                wrap: !0,
                className: h,
                children: p.map(function (n) {
                  return (0,
                  g.jsx)(f.Z, i()(i()({ className: v }, n), e), n.id);
                })
              }),
            !(null == x || !x.length) &&
              (0, g.jsx)(c.Z, {
                flex: !0,
                gap: 2,
                wrap: !0,
                className: h,
                children: x.map(function (n) {
                  return (0,
                  g.jsx)(m.Z, i()(i()({ className: s()(_, v), url: (0, o.QW)(n, "s") }, n), e), n.id);
                })
              })
          ]
        });
      }
    },
    61888: function (e, n, t) {
      var r = t(41987),
        i = t(52217),
        a = t(63313),
        s = t(45930);
      n.Z = function () {
        var e = (0, r.useParams)().id,
          n = (0, r.useLocation)().search || "?",
          t = ((0, i.parse)(n.slice(1)) || {}).index,
          c = null == e ? void 0 : e.startsWith("|"),
          l = c && e ? e.slice(1) : e,
          o = c ? l : void 0,
          u = c ? (t && !isNaN(t) ? Math.abs(Number(t)) : 0) : -1;
        return (
          (0, a.useEffect)(
            function () {
              c ? s.D.setCaseStore(l, u) : s.D.setCaseStore("", -1);
            },
            [l, c, u]
          ),
          { isCase: c, caseID: o, cid: l, caseIndex: u }
        );
      };
    },
    48666: function (e, n, t) {
      t.d(n, {
        L: function () {
          return o;
        }
      });
      var r = t(53939),
        i = t.n(r),
        a = t(83134),
        s = t.n(a),
        c = t(32163),
        l = t(41776),
        o = (0, c.Q_)(function (e, n) {
          return {
            docsMap: {},
            refTimer: null,
            refDetailInfo: { indexLeft: 0, indexTop: 0, doc: null },
            highlightInfo: { idx: -1, sid: "" },
            clearRefTimer: function () {
              var t = n().refTimer;
              t &&
                (clearTimeout(t),
                e(function (e) {
                  e.refTimer = null;
                }));
            },
            setRefTimer: function (n) {
              e(function (e) {
                e.refTimer = n;
              });
            },
            getDocDetail: function (t) {
              return s()(
                i()().mark(function r() {
                  var a, s, c, o, u, d, f, m, h, v;
                  return i()().wrap(
                    function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            if (
                              ((a = l.qr.getState()),
                              (s = a.api),
                              (c = t.segment_id),
                              (o = t.doc_id),
                              (u = t.seg_ref_indexes),
                              (d = ""
                                .concat(c, "-")
                                .concat(o, "-")
                                .concat(null == u ? void 0 : u.join("+"))),
                              !(f = n().docsMap[d]))
                            ) {
                              r.next = 6;
                              break;
                            }
                            return r.abrupt("return", f);
                          case 6:
                            return (
                              (r.prev = 6),
                              (r.next = 9),
                              s.chat.getRagDetail({
                                query: [t],
                                with_rag_segs: !0
                              })
                            );
                          case 9:
                            return (
                              (h = r.sent),
                              (v =
                                null == h ||
                                null === (m = h.items) ||
                                void 0 === m ||
                                null === (m = m[0]) ||
                                void 0 === m
                                  ? void 0
                                  : m.ref_doc),
                              e(function (e) {
                                e.docsMap[d] = v;
                              }),
                              r.abrupt("return", v)
                            );
                          case 15:
                            (r.prev = 15), (r.t0 = r.catch(6));
                          case 18:
                          case "end":
                            return r.stop();
                        }
                    },
                    r,
                    null,
                    [[6, 15]]
                  );
                })
              )();
            },
            setRefDetailInfo: function (n, t, r, i, a) {
              e(function (e) {
                (e.refDetailInfo = { doc: n, indexLeft: t, indexTop: r }),
                  (e.highlightInfo = { sid: i, idx: a });
              });
            },
            clearRefDetailInfo: function () {
              e(function (e) {
                (e.refDetailInfo = { indexLeft: 0, indexTop: 0, doc: null }),
                  (e.highlightInfo = { idx: -1, sid: "" });
              });
            },
            delayClearRefDetailInfo: function () {
              n().setRefTimer(
                setTimeout(function () {
                  n().clearRefDetailInfo();
                }, 200)
              );
            }
          };
        });
    },
    22998: function (e, n) {
      n.Z = {
        segment: "segment___n0QmU",
        container: "container___hZllz",
        main: "main___dsnkV",
        actions: "actions___FWoZ6",
        header: "header___wsxVa",
        content: "content___hMdwe",
        stopBlock: "stopBlock___Hc_Id",
        stop: "stop___Cioqe",
        left: "left___gUK6C",
        right: "right___dBBmN"
      };
    }
  }
]);
