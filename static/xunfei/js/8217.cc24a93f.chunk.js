"use strict";
(self.webpackChunkxfgpt = self.webpackChunkxfgpt || []).push([
  [8217],
  {
    25911: function (e, n, t) {
      t.d(n, {
        SN: function () {
          return a;
        },
        nm: function () {
          return o;
        }
      });
      var i = t(36679),
        a = function (e) {
          return i.Z.post("iflygpt/u/feedback/judge", e);
        },
        o = function (e) {
          return (0, i.Z)({
            url: "iflygpt/workorder/submitWorkOrder",
            method: "GET",
            params: e,
            headers: { "Content-Type": "application/x-www-form-urlencoded" }
          });
        };
    },
    79243: function (e, n, t) {
      function i(e) {
        var n = e.renderer.rules.fence;
        e.renderer.rules.fence = function (e, t, i, a, o) {
          var r = e[t];
          if (!c.includes(null == r ? void 0 : r.info)) return n(e, t, i, a, o);
          var s;
          e = window.location.pathname;
          try {
            if (
              ["multi_audio_stream"].includes(null == r ? void 0 : r.info) &&
              "/chat" === e
            )
              return "";
            if ("plugin_chat_file" === (null == r ? void 0 : r.info)) {
              var u,
                p =
                  null == r || null == (u = r.content)
                    ? void 0
                    : u.replaceAll("\n", ""),
                g = "";
              switch (p) {
                case "uploaded":
                case "texted":
                case "spliting":
                case "splited":
                case "vectoring":
                  g =
                    '<div class="plugin-status ps-uploaded">\n              <div class="progress-outer">\n                <div class="progress-inner '.concat(
                      p,
                      '"></div>\n              </div>\n            </div>'
                    );
                  break;
                case "failed":
                  g =
                    '<div class="plugin-status ps-fail">\n            \u6587\u6863\u89e3\u6790\u5931\u8d25\uff0c\u7f51\u7edc\u8d85\u65f6\n              <i class="pn-icon pn-icon-fail"></i>\n            </div>';
                  break;
                case "vectored":
                  g =
                    '<div class="plugin-status ps-success">\n              <i class="pn-icon pn-icon-sucess"></i>\n              \u6587\u6863\u89e3\u6790\u5b8c\u6210\uff0c\u4ee5\u4e0b\u4e3a\u6b64\u6587\u6863\u6458\u8981\u5185\u5bb9\n            </div>';
              }
              return g;
            }
            var h,
              f,
              v,
              A,
              m,
              x,
              w = JSON.parse(null == r ? void 0 : r.content);
            return "metadata" === (null == r ? void 0 : r.info)
              ? null != w && w.pluginInvoked
                ? ((h = ""),
                  (null == w ? void 0 : w.pluginMetadataList).forEach(function (
                    e
                  ) {
                    h += '<img src="'.concat(
                      null == e ? void 0 : e.logo,
                      '" >'
                    );
                  }),
                  '\n            <div class="plugin-list">\n              <span class="pt-title">\u5f53\u524d\u8c03\u7528\u7684\u63d2\u4ef6</span>\n              <div class="pt-logo-list">\n                '.concat(
                    h,
                    "\n              </div>\n            </div>\n          "
                  ))
                : '<span style="display: none"></span>'
              : null != r &&
                null != (s = r.info) &&
                s.startsWith("plugin_debug")
              ? ((v = String(Math.random()).substring(2)),
                (A = JSON.stringify(
                  JSON.parse(null == r ? void 0 : r.content),
                  null,
                  2
                )),
                ' <div class="plugin-container">\n            <div class="plugin-debugger">\n              <span class="wrapper" data-target-id="plugin_'
                  .concat(
                    v,
                    '">\n                <span class="pr-icon"></span>\n                <span class="pr-name">\u8c03\u7528\u63d2\u4ef6'
                  )
                  .concat(
                    null != r && null != (f = r.info) && f.endsWith("param")
                      ? "\u5165\u53c2"
                      : "\u8fd4\u56de\u7ed3\u679c",
                    '</span>\n                <span class="pr-contro-icon"></span>\n              </span>\n            </div>\n            <div class="plugin-debugger-code" id="plugin_'
                  )
                  .concat(v, '">\n              ')
                  .concat(
                    d(l.Z.highlight(A, { language: "json" }).value, "json"),
                    "\n            </div>\n          </div>"
                  ))
              : "plugin_cards" === (null == r ? void 0 : r.info)
              ? ((m = null == w ? void 0 : w.data),
                (x = ""),
                m.forEach(function (e) {
                  x += '<a class="card-li" href="'
                    .concat(
                      null == e ? void 0 : e.url,
                      '" target="_blank">\n          <div class="img-wrap">\n            <img src="'
                    )
                    .concat(
                      null == e ? void 0 : e.image,
                      '">\n          </div>\n          <div class="card-title">'
                    )
                    .concat(
                      null == e ? void 0 : e.title,
                      '</div>\n          <div class="card-desc">'
                    )
                    .concat(
                      null == e ? void 0 : e.description,
                      '</div>\n          <div class="card-bottom">\n            <div class="icon-wrap">\n              <img src="'
                    )
                    .concat(
                      null == e ? void 0 : e.icon,
                      '">\n            </div>\n            <div class="card-company">'
                    )
                    .concat(
                      null == e ? void 0 : e.siteName,
                      "</div>\n          </div>\n        </a>"
                    );
                }),
                '\n        <ul class="card-ul">\n          '.concat(
                  x,
                  "\n        </ul>\n      "
                ))
              : "multi_image_url" === (null == r ? void 0 : r.info)
              ? '<div>\n          <img src="'.concat(
                  w.url,
                  '" />\n          <p>\u6211\u5df2\u7ecf\u5b8c\u6210\u4f5c\u54c1\uff0c\u6b22\u8fce\u60a8\u63d0\u51fa\u5b9d\u8d35\u7684\u610f\u89c1\u548c\u5efa\u8bae\uff0c\u5e2e\u52a9\u6211\u5feb\u901f\u8fdb\u6b65~</p>\n        </div>'
                )
              : "turbodesk" === (null == r ? void 0 : r.info)
              ? "<p>".concat(w.title, "</p>")
              : ["multi_video", "multi_audio_instruction"].includes(
                  null == r ? void 0 : r.info
                ) && "/chat" === e
              ? '<p>\u8be5\u7aef\u6682\u4e0d\u652f\u6301\u8be5\u683c\u5f0f\u6570\u636e\u6e32\u67d3\uff0c\u8bf7\u524d\u5f80 <a href="https://xinghuo.xfyun.cn/app/download">\u8baf\u98de\u661f\u706bAPP</a> \u67e5\u770b</p>'
              : void 0;
          } catch (e) {
            return console.log(e), null == r ? void 0 : r.content;
          }
        };
      }
      function a(e) {
        e.renderer.rules.text = function (e, n) {
          var t,
            i = e[n].content;
          return 1 < e.length &&
            ("code_inline" ===
              (null == e || null == (t = e[n - 1]) ? void 0 : t.type) ||
              "code_inline" ===
                (null == e || null == (t = e[n + 1]) ? void 0 : t.type))
            ? i
            : ((e = i.replace(/\[\^\d+\^\]/g, "")),
              '<span class="spark-text">'.concat(e, "</span>"));
        };
      }
      function o(e, n) {
        e.inline.ruler.before("escape", "math_inline", function (e, t) {
          var i = e.pos,
            a = n.leftDelimiter,
            o = n.rightDelimiter,
            r = e.src.indexOf(o, i + a.length);
          return (
            -1 !== r &&
            (t ||
              ((t = e.src.slice(i + a.length, r)),
              ((i = e.push("math_inline", "math", 0)).content = t),
              (i.markup = a + o)),
            (e.pos = r + o.length),
            !0)
          );
        }),
          (e.renderer.rules.math_inline = function (e, n) {
            return u.Z.renderToString(e[n].content, {
              throwOnError: !1,
              errorColor: "inherit"
            });
          });
      }
      t.d(n, {
        Z: function () {
          return w;
        }
      });
      var r = t(47313),
        s = ((n = t(24367)), t.n(n)),
        l = t(99080),
        c = [
          "metadata",
          "plugin_debug_param",
          "plugin_debug_response",
          "plugin_cards",
          "multi_image_url",
          "plugin_chat_file",
          "turbodesk",
          "multi_video",
          "multi_audio_instruction",
          "multi_audio_stream"
        ],
        d = function (e) {
          return (
            (e = "<code class='hljs code-block-body "
              .concat(
                1 < arguments.length && void 0 !== arguments[1]
                  ? arguments[1]
                  : "",
                "'><div class='inner-code'>"
              )
              .concat(e, "</div></code>")),
            "<pre class='code-block-wrapper'>\n      ".concat(e, "\n  </pre>")
          );
        },
        u = t(72038),
        p = ((n = t(68818)), t.n(n)),
        g = ((n = t(89405)), t.n(n)),
        h = ((n = t(46992)), t.n(n)),
        f = t(78118),
        v = (t(21142), t(21114)),
        A = ((n = t(76666)), t.n(n)),
        m = t(87530),
        x = t(46417),
        w = r.memo(function (e) {
          function n(e, n) {
            var t =
              "<div class='code-block-header'>\n        <span class='code-block-header__lang'>".concat(
                (n = 1 < arguments.length && void 0 !== n ? n : ""),
                "</span>\n        <span class='code-block-header__copy'>\u590d\u5236\u4ee3\u7801</span>\n    </div>"
              );
            n = "<code class='hljs code-block-body "
              .concat(n, "'>")
              .concat(t, "<div class='inner-code'>")
              .concat(e, "</div></code>");
            return "<pre class='code-block-wrapper'>\n        ".concat(
              n,
              "\n    </pre>"
            );
          }
          e = e.mdText;
          var t = new (s())({
            html: !0,
            linkify: !1,
            highlight: function (e, t) {
              return t && l.Z.getLanguage(t)
                ? n(
                    l.Z.highlight(e, { language: (t = null != t ? t : "") })
                      .value,
                    t
                  )
                : n(l.Z.highlightAuto(e).value, "");
            }
          });
          t
            .use(h())
            .use(g(), { attrs: { target: "_blank", rel: "noopener" } })
            .use(p(), {
              output: "html",
              blockClass: "katexmath-block rounded-md p-[10px]",
              errorColor: " #cc0000"
            })
            .use(o, { leftDelimiter: "\\[", rightDelimiter: "\\]" })
            .use(o, { leftDelimiter: "\\(", rightDelimiter: "\\)" })
            .use(a)
            .use(i),
            (t = t.render(e));
          return (
            setTimeout(function () {
              (0, v.DL)(), f.K.init();
            }, 100),
            (0, r.useEffect)(function () {
              return (
                A()("body")
                  .off("click", ".plugin-container .wrapper")
                  .on("click", ".plugin-container .wrapper", function (e) {
                    e = A()(null == e ? void 0 : e.currentTarget);
                    var n = A()("#".concat(e.data("target-id"))),
                      t = e.find(".pr-contro-icon");
                    "none" === n.css("display")
                      ? (n.fadeIn(100), t.addClass("open"))
                      : (n.fadeOut(100), t.removeClass("open")),
                      (n = A()("#out-wrap").scrollTop() - e.position().top);
                    A()("#out-wrap").animate({ scrollTop: 100 + n }, 200);
                  }),
                A()(".markdown-body").on("click", "a", function (e) {
                  var n,
                    t,
                    i = A()(null == e ? void 0 : e.currentTarget),
                    a = null == i ? void 0 : i.prop("href");
                  (t =
                    null != a && a.includes("pptdownload")
                      ? null == a || null == (t = a.split("?"))
                        ? void 0
                        : t[0]
                      : (t = new URL(a)).protocol + "//" + t.hostname),
                    null != (n = IFlyCollector) &&
                      n.onEvent(
                        "plugin_link_click",
                        { linkurl: t, linkfullurl: a },
                        "plugin_link",
                        1e3
                      ),
                    location.pathname.includes("chat-h5") &&
                      (e.preventDefault(),
                      (t = null != (n = i.attr("href")) ? n : ""),
                      m.Z.download(t));
                }),
                function () {
                  A()("body").off("click", ".plugin-container .wrapper"),
                    A()(".markdown-body").off("click", "a");
                }
              );
            }, []),
            (0, x.jsx)("div", {
              className: "code-win_md__EirgT",
              children: (0, x.jsx)("div", {
                className: "markdown-body",
                children: (0, x.jsx)("div", {
                  dangerouslySetInnerHTML: { __html: t }
                })
              })
            })
          );
        });
    },
    94352: function (e, n, t) {
      function i(e) {
        return (
          (e = e.color),
          (0, v.jsx)(v.Fragment, {
            children: (0, v.jsxs)("svg", {
              width: "14px",
              height: "14px",
              viewBox: "0 0 14 14",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              style: { pointerEvents: "none" },
              children: [
                (0, v.jsx)("title", {
                  children: "\u7f16\u7ec4\u5907\u4efd 9@3x"
                }),
                (0, v.jsx)("desc", { children: "Created with Sketch." }),
                (0, v.jsx)("g", {
                  id: "\u9875\u9762-1",
                  stroke: "none",
                  strokeWidth: "1",
                  fill: "none",
                  fillRule: "evenodd",
                  children: (0, v.jsxs)("g", {
                    id: "\u7f16\u7ec4\u5907\u4efd-9",
                    transform: "translate(0.000000, 0.000000)",
                    fill: e,
                    children: [
                      (0, v.jsx)("rect", {
                        id: "\u77e9\u5f62",
                        x: "2.67025778",
                        y: "6.76497449",
                        width: "1",
                        height: "6.46562883",
                        rx: "0.5"
                      }),
                      (0, v.jsx)("path", {
                        d: "M10.8589099,13.529949 L1.84113004,13.529949 C0.826629812,13.529949 -1.08677511e-14,12.7033192 -1.08677511e-14,11.6888189 L-1.08677511e-14,6.69146595 C-1.08677511e-14,5.67696571 0.826629812,4.8503359 1.84113004,4.8503359 L3.70730948,4.8503359 C3.92022928,4.76266304 5.11007523,4.17400241 5.22279749,1.01777948 C5.22279749,0.491742321 5.61106302,0.0909521037 6.18719894,0.0158039361 C7.11402631,-0.109443005 8.31639694,0.516791699 8.64203901,1.64401418 C8.93010698,2.6710391 8.64203901,4.03623078 8.41659451,4.8503359 L11.7356385,4.8503359 C12.2742003,4.8503359 12.7877128,5.08830509 13.1384042,5.50162 C13.4890957,5.91493491 13.639392,6.46602146 13.5391944,7.00458331 L12.6624658,12.0019363 C12.5246942,12.8911896 11.7606879,13.529949 10.8589099,13.529949 Z M1.84113004,5.86483613 C1.37771636,5.86483613 1.00197554,6.24057696 1.00197554,6.70399063 L1.00197554,11.7013436 C1.00197554,12.1647573 1.37771636,12.5404981 1.84113004,12.5404981 L10.8589099,12.5404981 C11.2722248,12.5404981 11.6103915,12.2524302 11.6855397,11.85164 L12.5622683,6.85428697 C12.5998424,6.60379309 12.5372189,6.3658239 12.3743979,6.16542879 C12.2115768,5.97755837 11.9861323,5.86483613 11.7356385,5.86483613 L7.72773632,5.86483613 C7.5649153,5.86483613 7.41461896,5.78968797 7.31442142,5.65191634 C7.22674856,5.51414471 7.20169917,5.33879898 7.25179794,5.18850264 C7.46471774,4.6248914 7.95318081,2.93405769 7.66511286,1.93208215 C7.52734123,1.45614376 7.10150162,1.1680758 6.75081018,1.06787825 C6.46274221,0.980205394 6.2623471,1.01777948 6.19972364,1.04282886 L6.19972364,1.05535356 C6.06195201,5.32627429 4.07052563,5.81473736 3.84508113,5.85231144 C3.82003173,5.85231144 3.78245765,5.86483613 3.75740827,5.86483613 L1.84113004,5.86483613 Z",
                        id: "\u5f62\u72b6",
                        fillRule: "nonzero"
                      })
                    ]
                  })
                })
              ]
            })
          })
        );
      }
      function a(e) {
        return (
          (e = e.color),
          (0, v.jsx)(v.Fragment, {
            children: (0, v.jsxs)("svg", {
              width: "14px",
              height: "14px",
              viewBox: "0 0 14 14",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              style: { pointerEvents: "none" },
              children: [
                (0, v.jsx)("title", {
                  children: "\u7f16\u7ec4\u5907\u4efd 8@3x"
                }),
                (0, v.jsx)("desc", { children: "Created with Sketch." }),
                (0, v.jsx)("g", {
                  id: "\u9875\u9762-1",
                  stroke: "none",
                  strokeWidth: "1",
                  fill: "none",
                  fillRule: "evenodd",
                  children: (0, v.jsxs)("g", {
                    id: "\u7f16\u7ec4\u5907\u4efd-8",
                    transform:
                      "translate(7.000000, 7.000000) scale(1, -1) translate(-7.000000, -7.000000) translate(0.000000, 0.000000)",
                    fill: e,
                    children: [
                      (0, v.jsx)("rect", {
                        id: "\u77e9\u5f62",
                        x: "2.67025778",
                        y: "6.76497449",
                        width: "1",
                        height: "6.46562883",
                        rx: "0.5"
                      }),
                      (0, v.jsx)("path", {
                        d: "M10.8589099,13.529949 L1.84113004,13.529949 C0.826629812,13.529949 -1.08677511e-14,12.7033192 -1.08677511e-14,11.6888189 L-1.08677511e-14,6.69146595 C-1.08677511e-14,5.67696571 0.826629812,4.8503359 1.84113004,4.8503359 L3.70730948,4.8503359 C3.92022928,4.76266304 5.11007523,4.17400241 5.22279749,1.01777948 C5.22279749,0.491742321 5.61106302,0.0909521037 6.18719894,0.0158039361 C7.11402631,-0.109443005 8.31639694,0.516791699 8.64203901,1.64401418 C8.93010698,2.6710391 8.64203901,4.03623078 8.41659451,4.8503359 L11.7356385,4.8503359 C12.2742003,4.8503359 12.7877128,5.08830509 13.1384042,5.50162 C13.4890957,5.91493491 13.639392,6.46602146 13.5391944,7.00458331 L12.6624658,12.0019363 C12.5246942,12.8911896 11.7606879,13.529949 10.8589099,13.529949 Z M1.84113004,5.86483613 C1.37771636,5.86483613 1.00197554,6.24057696 1.00197554,6.70399063 L1.00197554,11.7013436 C1.00197554,12.1647573 1.37771636,12.5404981 1.84113004,12.5404981 L10.8589099,12.5404981 C11.2722248,12.5404981 11.6103915,12.2524302 11.6855397,11.85164 L12.5622683,6.85428697 C12.5998424,6.60379309 12.5372189,6.3658239 12.3743979,6.16542879 C12.2115768,5.97755837 11.9861323,5.86483613 11.7356385,5.86483613 L7.72773632,5.86483613 C7.5649153,5.86483613 7.41461896,5.78968797 7.31442142,5.65191634 C7.22674856,5.51414471 7.20169917,5.33879898 7.25179794,5.18850264 C7.46471774,4.6248914 7.95318081,2.93405769 7.66511286,1.93208215 C7.52734123,1.45614376 7.10150162,1.1680758 6.75081018,1.06787825 C6.46274221,0.980205394 6.2623471,1.01777948 6.19972364,1.04282886 L6.19972364,1.05535356 C6.06195201,5.32627429 4.07052563,5.81473736 3.84508113,5.85231144 C3.82003173,5.85231144 3.78245765,5.86483613 3.75740827,5.86483613 L1.84113004,5.86483613 Z",
                        id: "\u5f62\u72b6",
                        fillRule: "nonzero"
                      })
                    ]
                  })
                })
              ]
            })
          })
        );
      }
      t.d(n, {
        Z: function () {
          return x;
        }
      });
      var o = t(29439),
        r = t(47313),
        s = t(92715),
        l = t(84544),
        c = t(3044),
        d = t(21114),
        u = t(58804),
        p = t(64649),
        g = {
          chatItem: "chatList_chatItem__chR7E",
          userImage: "chatList_userImage__MssPE",
          typeItem: "chatList_typeItem__haLWd",
          reqWrapper: "chatList_reqWrapper__BAF4V",
          content: "chatList_content__jsNh9",
          reqContent: "chatList_reqContent__-WyJ5",
          editIcon: "chatList_editIcon__RDxHY",
          hiddenIcon: "chatList_hiddenIcon__h291T",
          inputContent: "chatList_inputContent__kHbGU",
          btnGroup: "chatList_btnGroup__9zbdG",
          checkIcon: "chatList_checkIcon__fQekF",
          closeIcon: "chatList_closeIcon__N4qBl",
          gptContent: "chatList_gptContent__pVT4e",
          loading: "chatList_loading__CeyCl",
          loadingInner: "chatList_loadingInner__SaYhf",
          load: "chatList_load__VYfo-",
          footerWrapper: "chatList_footerWrapper__87nwK",
          playStatus: "chatList_playStatus__Hq8uW",
          playIcon: "chatList_playIcon__U+jMu",
          judgeWrapper: "chatList_judgeWrapper__5-IXc",
          contentWrapper: "chatList_contentWrapper__5+4TU",
          tread: "chatList_tread__slMFt",
          reAnswerIcon: "chatList_reAnswerIcon__lObOh",
          copyIcon: "chatList_copyIcon__EK5bR",
          driver: "chatList_driver__Yfczs",
          sparkTalkItem: "chatList_sparkTalkItem__LpM4w",
          stopBtn: "chatList_stopBtn__2crx2",
          editTextarea: "chatList_editTextarea__-4xQc",
          switchWrapper: "chatList_switchWrapper__v2tQI",
          left: "chatList_left__jMPG3",
          right: "chatList_right__tn2C4"
        },
        h = t(79243),
        f = t(80552),
        v = t(46417),
        A = t(18121),
        m = t(99353),
        x = (0, r.forwardRef)(function (e, n) {
          function t(e, n) {
            e = e.replace(/[*#&$]/g, "");
            var t = "x4_lingxiaoqi";
            "cn" === n ? (t = M.cn) : "en" === n && (t = M.en),
              F.setConfig({
                language: n,
                text: e,
                voiceName: t,
                speed: M.speed
              }),
              setTimeout(function () {
                F.audioPlay();
              });
          }
          function x() {
            var e;
            Z.current && null != (e = Z.current) && e.pause(), R(!1);
          }
          function w(e, n, i) {
            var a;
            null != (a = Z.current) && a.pause(),
              "false" === i
                ? s.FN.show(
                    "\u8be5\u6587\u672c\u4e0d\u652f\u6301\u8bed\u97f3\u5408\u6210\uff01"
                  )
                : O && e === V.current
                ? ((V.current = e), R(!1), F.audioPause())
                : ((V.current = e),
                  t(n, i),
                  (a = (0, d.qx)()),
                  P.flag && !a
                    ? setTimeout(function () {
                        var e;
                        (Z.current.src = null == P ? void 0 : P.bgUrl),
                          (Z.current.volume = 0.2),
                          null != (e = Z.current) && e.play(),
                          R(!0);
                      }, 300)
                    : R(!0));
          }
          function b(e) {
            null != (e = document.getElementById("".concat(e, "PlayDiv"))) &&
              e.click();
          }
          function y(e) {
            var n = e.direction,
              t = e.idList,
              i = ((e = e.id), t.indexOf(e));
            console.log(e, t),
              ("prev" === n && 0 === i) ||
                ("next" === n && i === t.length - 1) ||
                ("prev" === n
                  ? S(0, t[i - 1])
                  : "next" === n && S(0, t[i + 1]));
          }
          var C = e.$answerRef,
            I = e.chatType,
            k = e.list,
            B = e.editType,
            E = e.tempInputContent,
            D = e.enable,
            N = e.avatarImg,
            L = e.answerLoading,
            T = e.answerComplete,
            F = e.experienceObj,
            S = e.reloadHistory,
            j = e.editTextChange,
            q = e.reAnswerEvent,
            Q = e.setEditType,
            U = e.setTempInputContent,
            G = e.reSubmit,
            W = e.judge,
            O = ((e = (0, r.useState)(!1)), (e = (0, o.Z)(e, 2))[0]),
            R = e[1],
            V = (0, r.useRef)(null),
            Z = (0, r.useRef)(null),
            M = ((e = (0, u.FV)(p.YS)), (0, o.Z)(e, 1)[0]),
            P = ((e = (0, u.FV)(p.uJ)), (0, o.Z)(e, 1)[0]);
          return (
            (0, r.useImperativeHandle)(
              n,
              function () {
                return {
                  setFalse: x,
                  playAudio: t,
                  changePlay: w,
                  playClick: b
                };
              },
              [x, t, w, b]
            ),
            (0, v.jsx)(v.Fragment, {
              children:
                null == k
                  ? void 0
                  : k.map(function (e, n) {
                      var t, o;
                      return e
                        ? ((o = (null == e ? void 0 : e.id) + "_" + n),
                          (0, v.jsxs)(
                            "div",
                            {
                              className: ""
                                .concat(g.chatItem, " ")
                                .concat(
                                  "sparkTalk" === I ? g.sparkTalkItem : null
                                ),
                              children: [
                                "req" === (null == e ? void 0 : e.origin)
                                  ? (0, v.jsx)("div", {
                                      className: g.content,
                                      children:
                                        !B ||
                                        1 !== D ||
                                        ((null == k ? void 0 : k.length) - 2 !==
                                          n &&
                                          n !==
                                            (null == k ? void 0 : k.length) - 1)
                                          ? (0, v.jsxs)("div", {
                                              style: { width: "100%" },
                                              children: [
                                                (0, v.jsxs)("div", {
                                                  className: g.reqContent,
                                                  children: [
                                                    (0, v.jsxs)("pre", {
                                                      children: [
                                                        1 === e.type &&
                                                          (0, v.jsxs)(
                                                            v.Fragment,
                                                            {
                                                              children: [
                                                                (0, v.jsx)(
                                                                  "img",
                                                                  { src: e.url }
                                                                ),
                                                                (0, v.jsx)(
                                                                  "br",
                                                                  {}
                                                                )
                                                              ]
                                                            }
                                                          ),
                                                        (null == e
                                                          ? void 0
                                                          : e.message) || ""
                                                      ]
                                                    })
                                                  ]
                                                }),
                                                1 <
                                                (null == (t = e.brotherIds)
                                                  ? void 0
                                                  : t.length)
                                                  ? (0, v.jsxs)("div", {
                                                      className:
                                                        g.switchWrapper,
                                                      children: [
                                                        (0, v.jsx)("span", {
                                                          className: g.left,
                                                          onClick: function () {
                                                            y({
                                                              origin:
                                                                null == e
                                                                  ? void 0
                                                                  : e.origin,
                                                              direction: "prev",
                                                              idList:
                                                                e.brotherIds,
                                                              id: e.sameReqId
                                                            });
                                                          }
                                                        }),
                                                        (0, v.jsxs)("span", {
                                                          style: {
                                                            margin: "0 0.8rem"
                                                          },
                                                          children: [
                                                            e.brotherIds.indexOf(
                                                              e.sameReqId
                                                            ) + 1,
                                                            "/",
                                                            e.brotherIds.length
                                                          ]
                                                        }),
                                                        (0, v.jsx)("span", {
                                                          className: g.right,
                                                          onClick: function () {
                                                            y({
                                                              origin:
                                                                null == e
                                                                  ? void 0
                                                                  : e.origin,
                                                              direction: "next",
                                                              idList:
                                                                e.brotherIds,
                                                              id: e.sameReqId
                                                            });
                                                          }
                                                        })
                                                      ]
                                                    })
                                                  : null
                                              ]
                                            })
                                          : (0, v.jsxs)("div", {
                                              className: g.inputContent,
                                              children: [
                                                (0, v.jsx)("textarea", {
                                                  value: E,
                                                  maxLength: 7e3,
                                                  id: "editTextarea",
                                                  className: g.editTextarea,
                                                  onChange: function (e) {
                                                    var n;
                                                    7e3 <=
                                                      (null == e ||
                                                      null == (n = e.target)
                                                        ? void 0
                                                        : n.value.length) &&
                                                      s.FN.show(
                                                        "\u8f93\u5165\u5185\u5bb9\u5df2\u8d85\u4e0a\u9650\uff01"
                                                      ),
                                                      U(
                                                        null == e ||
                                                          null == (n = e.target)
                                                          ? void 0
                                                          : n.value
                                                      ),
                                                      j();
                                                  }
                                                }),
                                                (0, v.jsxs)("div", {
                                                  className: g.btnGroup,
                                                  children: [
                                                    (0, v.jsx)(l.Z, {
                                                      className: g.checkIcon,
                                                      onClick: function () {
                                                        return G(!0);
                                                      }
                                                    }),
                                                    (0, v.jsx)(c.Z, {
                                                      className: g.closeIcon,
                                                      onClick: function () {
                                                        return G(!1);
                                                      }
                                                    })
                                                  ]
                                                })
                                              ]
                                            })
                                    })
                                  : null,
                                "resp" === (null == e ? void 0 : e.origin)
                                  ? (0, v.jsxs)("div", {
                                      style: { width: "100%" },
                                      children: [
                                        (0, v.jsxs)("div", {
                                          className: g.gptContent,
                                          ref: n === k.length - 1 ? C : null,
                                          children: [
                                            (0, v.jsx)(
                                              h.Z,
                                              {
                                                mdText:
                                                  (null == e
                                                    ? void 0
                                                    : e.message) || ""
                                              },
                                              o
                                            ),
                                            500 < e.message.length &&
                                            (n !==
                                              (null == k ? void 0 : k.length) -
                                                1 ||
                                              T)
                                              ? (0, v.jsx)("p", {
                                                  style: { marginTop: "1rem" },
                                                  children:
                                                    "\uff08\u5185\u5bb9\u7531\u8baf\u98de\u661f\u706bAI\u751f\u6210\uff09"
                                                })
                                              : null,
                                            1 === D ||
                                            n !==
                                              (null == k ? void 0 : k.length) -
                                                1
                                              ? (0, v.jsxs)("div", {
                                                  className: g.footerWrapper,
                                                  children: [
                                                    "en" ===
                                                      (null == e
                                                        ? void 0
                                                        : e.language) ||
                                                    "cn" ===
                                                      (null == e
                                                        ? void 0
                                                        : e.language)
                                                      ? (0, v.jsx)("div", {
                                                          className:
                                                            g.playStatus,
                                                          children: (0, v.jsx)(
                                                            "div",
                                                            {
                                                              style: {
                                                                cursor:
                                                                  "pointer",
                                                                display: "flex",
                                                                alignItems:
                                                                  "center"
                                                              },
                                                              id: "".concat(
                                                                o,
                                                                "PlayDiv"
                                                              ),
                                                              onClick:
                                                                function () {
                                                                  return w(
                                                                    o,
                                                                    e.message,
                                                                    e.language
                                                                  );
                                                                },
                                                              children:
                                                                O &&
                                                                V.current === o
                                                                  ? (0, v.jsxs)(
                                                                      v.Fragment,
                                                                      {
                                                                        children:
                                                                          [
                                                                            (0,
                                                                            v.jsx)(
                                                                              m.uJ,
                                                                              {
                                                                                style:
                                                                                  {
                                                                                    pointerEvents:
                                                                                      "none",
                                                                                    marginLeft:
                                                                                      "0.4rem"
                                                                                  }
                                                                              }
                                                                            ),
                                                                            (0,
                                                                            v.jsx)(
                                                                              f.Z,
                                                                              {}
                                                                            )
                                                                          ]
                                                                      }
                                                                    )
                                                                  : (0, v.jsx)(
                                                                      m.TZ,
                                                                      {
                                                                        style: {
                                                                          pointerEvents:
                                                                            "none",
                                                                          marginLeft:
                                                                            "0.4rem"
                                                                        }
                                                                      }
                                                                    )
                                                            }
                                                          )
                                                        })
                                                      : null
                                                  ]
                                                })
                                              : null
                                          ]
                                        }),
                                        1 <
                                        (null == (t = e.brotherIds)
                                          ? void 0
                                          : t.length)
                                          ? (0, v.jsxs)("div", {
                                              className: g.switchWrapper,
                                              children: [
                                                (0, v.jsx)("span", {
                                                  className: g.left,
                                                  onClick: function () {
                                                    y({
                                                      origin:
                                                        null == e
                                                          ? void 0
                                                          : e.origin,
                                                      direction: "prev",
                                                      idList: e.brotherIds,
                                                      id: e.reqId
                                                    });
                                                  }
                                                }),
                                                (0, v.jsxs)("span", {
                                                  style: { margin: "0 0.8rem" },
                                                  children: [
                                                    e.brotherIds.indexOf(
                                                      e.reqId
                                                    ) + 1,
                                                    "/",
                                                    e.brotherIds.length
                                                  ]
                                                }),
                                                (0, v.jsx)("span", {
                                                  className: g.right,
                                                  onClick: function () {
                                                    y({
                                                      origin:
                                                        null == e
                                                          ? void 0
                                                          : e.origin,
                                                      direction: "next",
                                                      idList: e.brotherIds,
                                                      id: e.reqId
                                                    });
                                                  }
                                                })
                                              ]
                                            })
                                          : null
                                      ]
                                    })
                                  : null,
                                "chatType" === (null == e ? void 0 : e.origin)
                                  ? (0, v.jsx)("div", {
                                      className: g.typeItem,
                                      children: e.message
                                    })
                                  : null,
                                (0, v.jsx)("audio", {
                                  src: "",
                                  loop: !0,
                                  style: { display: "none" },
                                  ref: Z
                                })
                              ]
                            },
                            o
                          ))
                        : null;
                    })
            })
          );
        });
    },
    38080: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        }
      });
      var i = t(1413),
        a = t(29439),
        o = t(47313),
        r = t(92715),
        s = t(25911),
        l = t(86298),
        c = "feedBack_modalWrapper__1uVMT",
        d = "feedBack_checkedBox__DSVFG",
        u = "feedBack_checkbox__VDJs2",
        p = t(46417),
        g = [
          {
            label: "\u56de\u7b54\u51c6\u786e\u4e14\u4e13\u4e1a",
            value: 1,
            code: 1
          },
          {
            label: "\u56de\u7b54\u6e05\u6670\u6613\u4e8e\u7406\u89e3",
            value: 2,
            code: 2
          },
          { label: "\u54cd\u5e94\u901f\u5ea6\u5feb", value: 3, code: 3 }
        ],
        h = [
          {
            label:
              "\u5b58\u5728\u4e0d\u5b89\u5168\u6216\u8fdd\u6cd5\u4fe1\u606f",
            value: 1,
            code: 1
          },
          { label: "\u5b58\u5728\u9519\u8bef\u4fe1\u606f", value: 2, code: 2 },
          {
            label: "\u56de\u590d\u5185\u5bb9\u6ca1\u4ec0\u4e48\u5e2e\u52a9",
            value: 3,
            code: 3
          }
        ],
        f = function (e) {
          function n() {
            b([]), x("");
          }
          var t = e.judgeObj,
            f = e.visible,
            v = e.onClose,
            A = e.changeTemStatus,
            m = ((e = (0, o.useState)("")), (e = (0, a.Z)(e, 2))[0]),
            x = e[1],
            w = ((e = (0, o.useState)([])), (e = (0, a.Z)(e, 2))[0]),
            b = e[1];
          return (0, p.jsx)("div", {
            className: f
              ? c
              : "".concat(c, " ").concat("feedBack_hidden__66Em1"),
            children: (0, p.jsxs)("div", {
              className: "feedBack_modalContent__bXDwG",
              children: [
                (0, p.jsx)("img", {
                  src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAwdJREFUWEfVmU9rE1EQwGfehmC6m80KQkBF9NCDObQIGu1FEIPgwWNPIfQDtPSip3g2J72U9AOUklO/gcSLFzUKYg/14MEiKgQE82e3kZB9I2/ZDWuaZPdlk7Lm+mbe/HaG+fMmCDP+MpnMeSK6AAAG51xjjJ0jooS4DhEHnPM/jDETAFqI+Kvdbv+exRRKKqU0TbtGRJcZYykZXc55DxG/m6b5FQB6YXXDAiZVVb3OGLsCACzs5RPkOOf8m2VZnwGgH3RXIGAqlbqEiCuKoiSDLpM5t227T0SHvV7vxzS9aYBoGMaKbdtXZQzLyiqKctxqtQ4BgMbpTgJUdF2/RURZWYOzyCNis9PpvAcAe1R/HCDqun77rOA8IBfy3agnTwEahrG66LBO8rIb7k/+838ARUIkEombs4RpXjqDweCDP3H8gMmlpaX7885WWXCR3ScnJ6+8EjQEVFV1lTG20IwNC8s5P7Ysywm1B5hKp9OFoCKczWaTtVptvdFoHJXL5Y9hDQq5SqVyI5/P54rF4kGz2Qwq0Lzb7dZFx3EANU3LIeJykMF6vV7M5/PrRDTY29t7sb29/SZIR5zv7OysbWxsPEbERKPROCgUCrUgPSL6YprmkQOoquqDML1VeGFzc/OpMBQW0g8ndHZ3d5+F8b7o3ZZlvUQxlXDO7wZ9kXc+anCaJ2Vkx9lnjL0WRXmZiHJhAUdDNsmTUeGcBEE8EoCipV2UARwHub+//3xra+tt0JmMHUT8iZqm3UNEXUZxUrgFJOccvYQQ3vWDy9ogoo7w4EMimnmUGg2lGxoniaLAuff0MZ1OPwqqf0FfXq1W75RKpSciu4XsPOBcm3xegGulUsmpcx6gTJ2c4gAeOcTVanUIJzznD3FUSETsLzxJokB6SbLwMjMrpFNm5lGox2Xr3Ap11FY3rZREhXRaXeyHhf9i3AKAeA+sbphjPfILxng/mgRh3J+dTkuM9cPdbdrxXn24kLFeHnnTT6zXb8MRLc4LTP8cGd8V8Mi0G9sl+qmp/Kz+hvgLFAawt25iBCoAAAAASUVORK5CYII=",
                  alt: "",
                  className: "feedBack_closeIcon__nKLMY",
                  onClick: function () {
                    v(), n();
                  }
                }),
                (0, p.jsx)("div", {
                  className: "feedBack_title__RrboH",
                  children: "\u4fe1\u606f\u53cd\u9988"
                }),
                (0, p.jsxs)(r.XZ.Group, {
                  value: w,
                  onChange: function (e) {
                    b(e);
                  },
                  children: [
                    (0, p.jsxs)(r.T, {
                      direction: "vertical",
                      className: "feedBack_checkboxWrapper__m0DbH",
                      children: [
                        1 === t.status
                          ? (0, p.jsx)(p.Fragment, {
                              children:
                                null == g
                                  ? void 0
                                  : g.map(function (e) {
                                      return (0, p.jsx)(
                                        r.XZ,
                                        {
                                          value: e.value,
                                          icon: function (e) {
                                            return e
                                              ? (0, p.jsx)("img", {
                                                  src: l,
                                                  className: d
                                                })
                                              : (0, p.jsx)("div", {
                                                  className: u
                                                });
                                          },
                                          style: { width: "100%" },
                                          children: e.label
                                        },
                                        e.code
                                      );
                                    })
                            })
                          : null,
                        2 === t.status
                          ? (0, p.jsx)(p.Fragment, {
                              children:
                                null == h
                                  ? void 0
                                  : h.map(function (e) {
                                      return (0, p.jsx)(
                                        r.XZ,
                                        {
                                          value: e.value,
                                          icon: function (e) {
                                            return e
                                              ? (0, p.jsx)("img", {
                                                  src: l,
                                                  className: d
                                                })
                                              : (0, p.jsx)("div", {
                                                  className: u
                                                });
                                          },
                                          style: { width: "100%" },
                                          children: e.label
                                        },
                                        e.code
                                      );
                                    })
                            })
                          : null
                      ]
                    }),
                    (0, p.jsx)(r.Kx, {
                      placeholder:
                        1 === t.status
                          ? "\u60a8\u4e3a\u4ec0\u4e48\u559c\u6b22\u8fd9\u6761\u56de\u7b54\uff1f"
                          : "\u60a8\u8ba4\u4e3a\u66f4\u4f18\u7684\u7b54\u6848\u5e94\u8be5\u662f\u4ec0\u4e48\uff1f",
                      value: m,
                      onChange: function (e) {
                        x(e);
                      },
                      maxLength: 300,
                      className: "feedBack_textarea__RWR9F"
                    }),
                    (0, p.jsx)(r.zx, {
                      block: !0,
                      color: "primary",
                      className: "feedBack_submitBtn__Dvvab",
                      onClick: function () {
                        var e;
                        0 !== w.length || m
                          ? ((e = (0, i.Z)(
                              (0, i.Z)({}, t),
                              {},
                              { reason: w.join(","), remark: m }
                            )),
                            (0, s.SN)(e)
                              .then(function (e) {
                                console.log(e),
                                  r.FN.show(
                                    "\u4fe1\u606f\u53cd\u9988\u6210\u529f\uff01"
                                  ),
                                  A(t.status),
                                  v();
                              })
                              .catch(function () {
                                r.FN.show(
                                  "\u4fe1\u606f\u53cd\u9988\u5931\u8d25\uff01"
                                ),
                                  v();
                              })
                              .finally(function () {
                                n();
                              }))
                          : r.FN.show(
                              "\u8bf7\u586b\u5199\u53cd\u9988\u5185\u5bb9\uff01"
                            );
                      },
                      children: "\u63d0\u4ea4\u53cd\u9988"
                    })
                  ]
                })
              ]
            })
          });
        };
    },
    24944: function (e, n, t) {
      t.d(n, {
        f: function () {
          return a;
        }
      });
      var i = t(36679),
        a = function (e) {
          i.Z.get("/iflygpt/chat/gee-captcha").then(function (n) {
            initGeetest(
              {
                gt: n.gt,
                challenge: n.challenge,
                offline: !n.success,
                new_captcha: n.new_captcha,
                product: "bind",
                width: "300px"
              },
              function (n) {
                e(n);
              }
            );
          });
        };
    },
    63867: function (e, n, t) {
      t.d(n, {
        Fm: function () {
          return o;
        },
        HT: function () {
          return a;
        },
        Vx: function () {
          return r;
        }
      });
      var i = t(95295),
        a = function (e, n, t) {
          var i;
          return "cn" === n
            ? ((i = e.length),
              console.log(i, t),
              (35 === t && 450 <= i) ||
              (50 === t && 550 <= i) ||
              (75 === t && 700 <= i)
                ? e +
                  "\u8be5\u97f3\u9891\u5185\u5bb9\u7531\u8baf\u98de\u661f\u706bAI\u751f\u6210\uff01"
                : e)
            : "en" === n
            ? ((i = (function (e) {
                return (e = e.match(/[A-Za-z]+/g)) ? e.length : 0;
              })(e)),
              console.log(i, t),
              (35 === t && 240 <= i) ||
              (50 === t && 300 <= i) ||
              (75 === t && 350 <= i)
                ? e +
                  "The audio is generated by iFLYTEK Spark Large Language Model! "
                : e)
            : e +
              "\u8be5\u97f3\u9891\u5185\u5bb9\u7531\u8baf\u98de\u661f\u706bAI\u751f\u6210\uff01";
        };
      function o(e) {
        e = i.DS.atob(e);
        for (var n = new Uint8Array(e.length), t = 0; t < e.length; ++t)
          n[t] = e.charCodeAt(t);
        return (
          console.log(new DataView(n.buffer).buffer),
          new Int16Array(new DataView(n.buffer).buffer)
        );
      }
      function r(e) {
        for (var n = [], t = 0; t < e.length; t++) {
          var i = e[t] < 0 ? e[t] / 32768 : e[t] / 32767;
          n.push(i);
        }
        return new Float32Array(n);
      }
    },
    45613: function (e, n, t) {
      var i,
        a,
        o = t(74165),
        r = t(15861),
        s = t(15671),
        l = t(43144),
        c = t(92715),
        d = t(95295),
        u = t(85340),
        p = t(63867),
        g =
          "\u60a8\u7684\u6d4f\u89c8\u5668\u6682\u65f6\u4e0d\u652f\u6301\u4f53\u9a8c\u529f\u80fd\uff0c\u8bf7\u66f4\u6362\u60a8\u7684\u6d4f\u89c8\u5668";
      t = (function () {
        function e() {
          var n =
              void 0 ===
              (n = (u =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : {}).speed)
                ? 2
                : n,
            t = void 0 === (t = u.voice) ? 7 : t,
            i = void 0 === (i = u.pitch) ? 7 : i,
            a = void 0 === (a = u.text) ? "" : a,
            o = void 0 === (o = u.engineType) ? "intp65" : o,
            r = void 0 === (r = u.tte) ? "UTF8" : r,
            l = void 0 === (l = u.voiceName) ? "x4_lingxiaoqi" : l,
            c = void 0 === (c = u.defaultText) ? "" : c,
            d = u.close,
            u = u.onError;
          (0, s.Z)(this, e),
            (this.speed = n),
            (this.voice = t),
            (this.pitch = i),
            (this.text = a),
            (this.defaultText = c),
            (this.engineType = o),
            (this.tte = r),
            (this.voiceName = l),
            (this.playState = ""),
            (this.audioDatas = []),
            (this.rawAudioData = []),
            this.audioBuffer,
            (this.close = d),
            (this.onError = u),
            (this.loading = !0);
        }
        var n;
        return (
          (0, l.Z)(e, [
            {
              key: "setConfig",
              value: function (e) {
                var n = e.language,
                  t = e.speed,
                  i = e.voice,
                  a = e.pitch,
                  o = e.text,
                  r = e.defaultText,
                  s = e.engineType,
                  l = e.voiceName;
                e = e.tte;
                void 0 !== n && (this.language = n),
                  void 0 !== t && (this.speed = t),
                  void 0 !== i && (this.voice = i),
                  void 0 !== a && (this.pitch = a),
                  o && (this.text = o),
                  r && (this.defaultText = r),
                  s && (this.engineType = s),
                  e && (this.tte = e),
                  l && (this.voiceName = l),
                  this.resetAudio();
              }
            },
            {
              key: "onmessageWork",
              value: function (e) {
                var n = this;
                "newAudioData" === e.data.command &&
                  (this.audioDatas.push(e.data.data),
                  "ttsing" === this.playState) &&
                  1 === this.audioDatas.length &&
                  (this.playTimeout = setTimeout(function () {
                    "unTTS" === n.playState ? n.resetAudio() : n.audioPlay();
                  }, 1e3));
              }
            },
            {
              key: "getAudio",
              value: function () {
                var e = this,
                  n = new FormData();
                n.append("text", this.text),
                  n.append("tts", this.voiceName),
                  (0, u.CB)(n)
                    .then(function (n) {
                      var t = n.appId || "e71f355f";
                      n = n.url.replace("https://", "wss://");
                      e.connectWebsocket(n, t);
                    })
                    .catch(function (n) {
                      c.FN.show(
                        n.msg ||
                          "\u5408\u6210\u4f53\u9a8c\u7b7e\u540d\u83b7\u53d6\u5931\u8d25"
                      ),
                        e.onError(),
                        e.resetAudio(),
                        e.close();
                    });
              }
            },
            {
              key: "connectWebsocket",
              value: function (e, n) {
                var t = this;
                if ("WebSocket" in window) this.websocket = new WebSocket(e);
                else {
                  if (!("MozWebSocket" in window)) return void c.FN.show(g);
                  this.websocket = new MozWebSocket(e);
                }
                var i = this;
                (this.websocket.onopen = function (e) {
                  console.log(e, "websocket\u5efa\u7acb\u8fde\u63a5"),
                    "unTTS" === t.playState
                      ? t.resetAudio()
                      : ((e =
                          i.text ||
                          i.defaultText ||
                          "\u79d1\u5927\u8baf\u98de\u6210\u7acb\u4e8e1999\u5e74\uff0c\u662f\u4e2d\u56fd\u5148\u8fdb\u7684\u667a\u80fd\u5316\u8bed\u97f3\u6280\u672f\u63d0\u4f9b\u5546\u3002\u6211\u4eec\u63d0\u4f9b\u7684\u8bed\u97f3\u5408\u6210\u6548\u679c\uff0c\u8fbe\u5230\u4e86\u771f\u6b63\u53ef\u5546\u7528\u7684\u6807\u51c6\uff0c\u60a8\u53ef\u4ee5\u5728\u8fd9\u91cc\u8f93\u5165\u4efb\u610f\u6587\u672c\u8fdb\u884c\u8bed\u97f3\u5408\u6210\u4f53\u9a8c\u3002"),
                        (e = i.encodeText((0, p.HT)(e, i.language, i.speed))),
                        (e = {
                          header: {
                            app_id: n,
                            uid: "39769795890",
                            did: "SR082321940000200",
                            imei: "8664020318693660",
                            imsi: "4600264952729100",
                            mac: "6c:92:bf:65:c6:14",
                            net_type: "wifi",
                            net_isp: "CMCC",
                            status: 2,
                            request_id: null,
                            res_id: ""
                          },
                          parameter: {
                            tts: {
                              vcn: i.voiceName,
                              speed: Number(i.speed),
                              volume: 50,
                              pitch: 50,
                              bgs: 0,
                              reg: 0,
                              rdn: 0,
                              rhy: 0,
                              scn: 0,
                              style: "assistant",
                              audio: {
                                encoding: "raw",
                                sample_rate: 16e3,
                                channels: 1,
                                bit_depth: 16,
                                frame_size: 0
                              },
                              pybuf: {
                                encoding: "utf8",
                                compress: "raw",
                                format: "plain"
                              }
                            }
                          },
                          payload: {
                            text: {
                              encoding: "utf8",
                              compress: "raw",
                              format: "plain",
                              status: 2,
                              seq: 0,
                              text: e
                            }
                          }
                        }),
                        t.websocket.send(JSON.stringify(e)));
                }),
                  (this.websocket.onmessage = function (e) {
                    var n =
                      null == (e = JSON.parse(e.data)) ||
                      null == (n = e.payload) ||
                      null == (n = n.audio)
                        ? void 0
                        : n.audio;
                    n &&
                      ((n = t.base64ToS16(n)),
                      (n = t.transS16ToF32(n)),
                      t.audioDatas.push(n),
                      t.loading &&
                        (t.playTimeout = setTimeout(function () {
                          t.playSource();
                        }, 500)),
                      (t.loading = !1)),
                      2 ===
                        (null == e || null == (n = e.header)
                          ? void 0
                          : n.status) &&
                        null != (e = t.websocket) &&
                        e.close();
                  }),
                  (this.websocket.onerror = function (e) {
                    console.log(e), t.close();
                  }),
                  (this.websocket.onclose = function (e) {
                    console.log(e);
                  });
              }
            },
            {
              key: "encodeText",
              value: function (e, n) {
                switch (n) {
                  case "utf16le":
                    for (
                      var t = new ArrayBuffer(4 * e.length),
                        i = new Uint16Array(t),
                        a = 0,
                        o = e.length;
                      a < o;
                      a++
                    )
                      i[a] = e.charCodeAt(a);
                    return t;
                  case "buffer2Base64":
                    for (
                      var r = "",
                        s = new Uint8Array(e),
                        l = s.byteLength,
                        c = 0;
                      c < l;
                      c++
                    )
                      r += String.fromCharCode(s[c]);
                    return window.btoa(r);
                  case "base64&utf16le":
                    return this.encodeText(
                      this.encodeText(e, "utf16le"),
                      "buffer2Base64"
                    );
                  default:
                    return d.DS.encode(e);
                }
              }
            },
            {
              key: "resetAudio",
              value: function () {
                this.audioPause(),
                  (this.audioDatasIndex = 0),
                  (this.loading = !0),
                  (this.audioDatas = []),
                  this.websocket && this.websocket.close(),
                  clearTimeout(this.playTimeout);
              }
            },
            {
              key: "audioPlay",
              value: function () {
                var e;
                this.resetAudio(),
                  a && a.stop(),
                  null != (e = a) && e.buffer && (a = null);
                try {
                  if (
                    (i ||
                      (i = new (window.AudioContext ||
                        window.webkitAudioContext)()).resume(),
                    !i)
                  )
                    return void c.FN.show(g);
                } catch (e) {
                  return void c.FN.show(g);
                }
                (this.audioDatasIndex = 0),
                  (this.playState = "play"),
                  this.getAudio();
              }
            },
            {
              key: "audioPause",
              value: function (e) {
                if ((console.log(e, "audioPause"), "play" === this.playState)) {
                  clearTimeout(this.playTimeout);
                  try {
                    (this.playState = "stop"),
                      (this.audioDatasIndex = 0),
                      (this.audioDatas = []),
                      this.websocket && this.websocket.close(),
                      a && a.stop();
                  } catch (e) {
                    console.log(e);
                  }
                }
              }
            },
            {
              key: "playSource",
              value:
                ((n = (0, r.Z)(
                  (0, o.Z)().mark(function e() {
                    var n,
                      t,
                      r,
                      s,
                      l,
                      c,
                      d,
                      u,
                      p = this;
                    return (0, o.Z)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              for (
                                t = 0,
                                  r = this.audioDatas.length,
                                  s = this.audioDatasIndex;
                                s < r;
                                s++
                              )
                                t += this.audioDatas[s].length;
                              for (
                                l =
                                  null == (n = i)
                                    ? void 0
                                    : n.createBuffer(1, t, 16e3),
                                  c = 0,
                                  d = this.audioDatasIndex;
                                d < r;
                                d++
                              )
                                (u = this.audioDatas[d]),
                                  l.copyToChannel(u, 0, c),
                                  (c += u.length),
                                  this.audioDatasIndex++;
                              ((a = i.createBufferSource()).buffer = l),
                                console.log(l),
                                a.connect(i.destination),
                                console.log(
                                  "\u5f00\u59cb\u64ad\u653e\u97f3\u9891",
                                  l
                                ),
                                a.start(),
                                (a.onended = function () {
                                  "play" !== p.playState
                                    ? p.close()
                                    : p.audioDatasIndex < p.audioDatas.length
                                    ? p.playSource()
                                    : (p.close(), p.audioPause("endPlay"));
                                });
                            case 13:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                )),
                function () {
                  return n.apply(this, arguments);
                })
            },
            {
              key: "base64ToS16",
              value: function (e) {
                e = d.DS.atob(e);
                for (var n = new Uint8Array(e.length), t = 0; t < e.length; ++t)
                  n[t] = e.charCodeAt(t);
                return new Int16Array(new DataView(n.buffer).buffer);
              }
            },
            {
              key: "transS16ToF32",
              value: function (e) {
                for (var n = [], t = 0; t < e.length; t++) {
                  var i = e[t] < 0 ? e[t] / 32768 : e[t] / 32767;
                  n.push(i);
                }
                return new Float32Array(n);
              }
            }
          ]),
          e
        );
      })();
      n.Z = t;
    },
    10025: function (e, n, t) {
      t.d(n, {
        L: function () {
          return u;
        }
      });
      var i = t(74165),
        a = t(15861);
      function o() {
        return (o = (0, a.Z)(
          (0, i.Z)().mark(function e(n, t) {
            var a, o;
            return (0, i.Z)().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    a = n.getReader();
                  case 1:
                    return (e.next = 3), a.read();
                  case 3:
                    (o = e.sent).done
                      ? (e.next = 7)
                      : (t(o.value), (e.next = 1));
                    break;
                  case 7:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function r(e) {
        var n,
          t,
          i,
          a = !1;
        return function (o) {
          void 0 === n
            ? ((n = o), (t = 0), (i = -1))
            : ((r = n),
              (s = new Uint8Array(r.length + o.length)).set(r),
              s.set(o, r.length),
              (n = s));
          for (var r, s, l = n.length, c = 0; t < l; ) {
            a && (10 === n[t] && (c = ++t), (a = !1));
            for (var d = -1; t < l && -1 === d; ++t)
              switch (n[t]) {
                case 58:
                  -1 === i && (i = t - c);
                  break;
                case 13:
                  a = !0;
                case 10:
                  d = t;
              }
            if (-1 === d) break;
            e(n.subarray(c, d), i), (c = t), (i = -1);
          }
          c === l ? (n = void 0) : 0 !== c && ((n = n.subarray(c)), (t -= c));
        };
      }
      var s = function (e, n) {
          var t = {};
          for (a in e)
            Object.prototype.hasOwnProperty.call(e, a) &&
              n.indexOf(a) < 0 &&
              (t[a] = e[a]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var i = 0, a = Object.getOwnPropertySymbols(e);
              i < a.length;
              i++
            )
              n.indexOf(a[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, a[i]) &&
                (t[a[i]] = e[a[i]]);
          return t;
        },
        l = "text/event-stream",
        c = 1e3,
        d = "last-event-id";
      function u(e, n) {
        var t = n.signal,
          u = n.headers,
          g = n.onopen,
          h = n.onmessage,
          f = n.onclose,
          v = n.onerror,
          A = n.openWhenHidden,
          m = n.fetch,
          x = s(n, [
            "signal",
            "headers",
            "onopen",
            "onmessage",
            "onclose",
            "onerror",
            "openWhenHidden",
            "fetch"
          ]);
        return new Promise(function (n, s) {
          var w,
            b = Object.assign({}, u);
          function y() {
            w.abort(), document.hidden || D();
          }
          b.accept || (b.accept = l),
            A || document.addEventListener("visibilitychange", y);
          var C = c,
            I = 0;
          function k() {
            document.removeEventListener("visibilitychange", y),
              window.clearTimeout(I),
              w.abort();
          }
          null != t &&
            t.addEventListener("abort", function () {
              k(), n();
            });
          var B = null != m ? m : window.fetch,
            E = null != g ? g : p;
          function D() {
            return N.apply(this, arguments);
          }
          function N() {
            return (N = (0, a.Z)(
              (0, i.Z)().mark(function t() {
                var a, l, c;
                return (0, i.Z)().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (w = new AbortController()),
                            (t.prev = 1),
                            (t.next = 4),
                            B(
                              e,
                              Object.assign(Object.assign({}, x), {
                                headers: b,
                                signal: w.signal
                              })
                            )
                          );
                        case 4:
                          return (l = t.sent), (t.next = 7), E(l);
                        case 7:
                          return (
                            (t.next = 9),
                            (function () {
                              return o.apply(this, arguments);
                            })(
                              l.body,
                              r(
                                (function (e, n, t) {
                                  var i = {
                                      data: "",
                                      event: "",
                                      id: "",
                                      retry: void 0
                                    },
                                    a = new TextDecoder();
                                  return function (o, r) {
                                    if (0 === o.length)
                                      null != t && t(i),
                                        (i = {
                                          data: "",
                                          event: "",
                                          id: "",
                                          retry: void 0
                                        });
                                    else if (0 < r) {
                                      var s = a.decode(o.subarray(0, r)),
                                        l =
                                          ((r = r + (32 === o[r + 1] ? 2 : 1)),
                                          a.decode(o.subarray(r)));
                                      switch (s) {
                                        case "data":
                                          i.data = i.data
                                            ? i.data + "\n" + l
                                            : l;
                                          break;
                                        case "event":
                                          i.event = l;
                                          break;
                                        case "id":
                                          e((i.id = l));
                                          break;
                                        case "retry":
                                          var c = parseInt(l, 10);
                                          isNaN(c) || n((i.retry = c));
                                      }
                                    }
                                  };
                                })(
                                  function (e) {
                                    e ? (b[d] = e) : delete b[d];
                                  },
                                  function (e) {
                                    C = e;
                                  },
                                  h
                                )
                              )
                            )
                          );
                        case 9:
                          null != f && f(), k(), n(), (t.next = 17);
                          break;
                        case 14:
                          if (
                            ((t.prev = 14),
                            (t.t0 = t.catch(1)),
                            !w.signal.aborted)
                          )
                            try {
                              (c =
                                null != (a = null == v ? void 0 : v(t.t0))
                                  ? a
                                  : C),
                                window.clearTimeout(I),
                                (I = window.setTimeout(D, c));
                            } catch (t) {
                              k(), s(t);
                            }
                        case 17:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 14]]
                );
              })
            )).apply(this, arguments);
          }
          D();
        });
      }
      function p(e) {
        if (null == (e = e.headers.get("content-type")) || !e.startsWith(l))
          throw new Error(
            "Expected content-type to be ".concat(l, ", Actual: ").concat(e)
          );
      }
    },
    9823: function (e, n, t) {
      t.d(n, {
        S: function () {
          return o;
        }
      });
      for (var i = [], a = 0; a < 256; ++a)
        i.push((a + 256).toString(16).slice(1));
      function o(e) {
        var n =
          1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
        return (
          i[e[n + 0]] +
          i[e[n + 1]] +
          i[e[n + 2]] +
          i[e[n + 3]] +
          "-" +
          i[e[n + 4]] +
          i[e[n + 5]] +
          "-" +
          i[e[n + 6]] +
          i[e[n + 7]] +
          "-" +
          i[e[n + 8]] +
          i[e[n + 9]] +
          "-" +
          i[e[n + 10]] +
          i[e[n + 11]] +
          i[e[n + 12]] +
          i[e[n + 13]] +
          i[e[n + 14]] +
          i[e[n + 15]]
        ).toLowerCase();
      }
    },
    15292: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        }
      });
      var i,
        a = {
          randomUUID:
            "undefined" != typeof crypto &&
            crypto.randomUUID &&
            crypto.randomUUID.bind(crypto)
        },
        o = new Uint8Array(16),
        r = t(9823),
        s = function (e, n, t) {
          if (a.randomUUID && !n && !e) return a.randomUUID();
          var s =
            (e = e || {}).random ||
            (
              e.rng ||
              function () {
                if (
                  (i =
                    i ||
                    ("undefined" != typeof crypto &&
                      crypto.getRandomValues &&
                      crypto.getRandomValues.bind(crypto)))
                )
                  return i(o);
                throw new Error(
                  "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
                );
              }
            )();
          if (((s[6] = (15 & s[6]) | 64), (s[8] = (63 & s[8]) | 128), n)) {
            t = t || 0;
            for (var l = 0; l < 16; ++l) n[t + l] = s[l];
            return n;
          }
          return (0, r.S)(s);
        };
    },
    18121: function (e, n, t) {
      e.exports = t.p + "static/media/aisculpture.574775e790d04f6d6670.png";
    },
    86298: function (e) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAgdJREFUWEftl01IVFEUx393HEQtBlMw+5IgQ92UuMmVWiFC4EAguZEEFxaSo4GEM62kRSqK0mCLKHDjYggcGGgRIhJiCEGRIBQuxAhqUPKrzDS9ceciNWHNe+PMvM27q/cO75zf//7fPReOAHDfkUU4uS/hMhKXiiVtCdYEjPMTb6hXvBcKLtOYBrKTBt2/8IrYoVy4fXJUSq6mGB7BCUFQ1PrkatJt/9fu1O+o9Uppxe73mLYA24GEO3A4E0oLwZkG859gIfz/I55QAelO6GuB0/mgeqtrGF7PpVDATTdcKdfA0BQ8fha7wRPmwIUS8DVEbreI9R0PYXsnRQJyXPDAA64s+LEFt4fg42JseOQ6jnUTNtZAVgYsr8PoJGxtRxdWO77XBOfO6PhQEJ6/MgY3JKChGq5d1AUn3sDA0+jidZVwvUbHXs5C94hxuCEBDgd0N0NxgS7cH4AXb/Xz2ZPQc0O33NIKePzw9XuCBahyR4/AYCscyoCNTWjzw9oGDN6CY7mwuwt3n8DsvDm4IQf2Slach456/fbuA3z+AlWl+j0wASNj5uGmBKiP2+vgUlk0SInpfKRdiGfF7II/i2amw0ArHM/V0W+b0O6H8HI8aJ1jSoBKKDzx++D1BWByJn54XAJU0qk8fSCV/Qddph04KPDvfFuA7YD1g4nlo5nlw6nqSyvH818CstKtzcFqPwAAAABJRU5ErkJggg==";
    }
  }
]);
