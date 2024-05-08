"use strict";
(self.webpackChunkxfgpt = self.webpackChunkxfgpt || []).push([
  [5318],
  {
    14280: function (e, n, t) {
      t(47313),
        (n.Z =
          t.p +
          "static/media/spark-desk-logo.58f9e8096f1ec59ae41e5ca0bbb15d53.svg");
    },
    2147: function (e, n, t) {
      t.d(n, {
        AG: function () {
          return u;
        },
        FR: function () {
          return d;
        },
        Lk: function () {
          return s;
        },
        QG: function () {
          return m;
        },
        WY: function () {
          return i;
        },
        Ww: function () {
          return p;
        },
        XD: function () {
          return f;
        },
        fl: function () {
          return r;
        },
        js: function () {
          return h;
        },
        mo: function () {
          return g;
        },
        w2: function () {
          return o;
        },
        wq: function () {
          return a;
        }
      });
      var c = t(36679),
        l = ((n = t(74776)), t.n(n)),
        i = function (e) {
          return c.Z.post("/iflygpt/bot/defaultBot", l().stringify(e));
        },
        a = function () {
          return c.Z.get("/iflygpt/u/chat-list/v1/chat-list?isBot=true");
        },
        s = function (e) {
          return c.Z.post("/iflygpt/u/chat-list/v1/create-chat-list", e);
        },
        o = function () {
          return c.Z.post("/iflygpt/bot/getList");
        },
        r = function (e) {
          return c.Z.post("/iflygpt/bot/add-bot", e);
        },
        d = function (e) {
          return c.Z.get("/iflygpt/bot/getBotwebInfo?botId=".concat(e), {
            headers: { BotWeb: "1" }
          });
        },
        u = function (e) {
          return (0, c.Z)({
            url: "/iflygpt/u/chat-list/v1/create-chat-list",
            method: "POST",
            data: e,
            headers: { Botweb: "1" }
          });
        },
        h = function (e) {
          return c.Z.get("/iflygpt/h5/politician/detail?personId=".concat(e));
        },
        m = function (e) {
          return c.Z.get("/iflygpt/bot/getBotInfo?chatId=".concat(e));
        },
        f = function (e) {
          return c.Z.get("/iflygpt-chat/u/bot/story/share?key=".concat(e));
        },
        g = function () {
          return c.Z.post("/iflygpt/bot/page", {
            botType: 1,
            pageIndex: 1,
            pageSize: 200,
            searchValue: ""
          });
        },
        p = function (e) {
          return c.Z.post("/iflygpt/bot/page", e);
        };
    },
    33013: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return A;
        }
      });
      var c = t(29439),
        l = t(47313),
        i = t(58467),
        a = t(64649),
        s = t(58804),
        o = ((n = t(46123)), t.n(n)),
        r = t(92715),
        d = t(52669),
        u = t(92454),
        h = {
          header: "header_header__UKyNZ",
          header_left: "header_header_left__EemqM",
          left_switch: "header_left_switch__V0tUE",
          hidden: "header_hidden__JhA4w",
          content: "header_content__hM1sP",
          smartImg: "header_smartImg__gph1q",
          header_right: "header_header_right__vgbcJ",
          plus: "header_plus__NX9JI",
          light: "header_light__A8mU6"
        },
        m = t(80761),
        f = t(14280),
        g = t.p + "static/media/exit.0817da8e25f26ca418ab1b942b9050dc.svg",
        p = t(46417),
        A = function (e) {
          var n = e.show,
            t = e.switchPanel,
            A = void 0 !== (e = e.botModeFlag) && e,
            v = (0, i.s0)(),
            _ = ((e = (0, s.FV)(a.sO)), (e = (0, c.Z)(e, 2))[0]),
            x = e[1],
            w = ((e = (0, s.FV)(a.x2)), (e = (0, c.Z)(e, 2))[0]),
            j = e[1],
            N = ((e = (0, l.useState)("")), (e = (0, c.Z)(e, 2))[0]),
            F = e[1],
            k = ((e = (0, s.FV)(a.X3)), (0, c.Z)(e, 2)[1]),
            C = (0, l.useRef)(!1),
            y = ((e = (0, s.FV)(a.Z0)), (0, c.Z)(e, 1)[0]),
            P = ((e = (0, s.FV)(a.Qw)), (0, c.Z)(e, 1)[0]);
          (e = (0, s.FV)(a.bL)), (e = (0, c.Z)(e, 1)[0]);
          return (
            (0, l.useEffect)(
              function () {
                var e;
                ["/desk", "/bot", "/aiFriend", "/aiFriend/search"].includes(
                  null == (e = document.location) ? void 0 : e.pathname
                ) && F("sparkDesk");
              },
              [N]
            ),
            (0, p.jsxs)("div", {
              "data-v-4a94cac4": "",
              className: "tab",
              children: [
                (0, p.jsxs)("div", {
                  "data-v-fbe8fd4c": "",
                  "data-v-4a94cac4": "",
                  className: "tab-title-container",
                  children: [
                    (0, p.jsxs)("div", {
                      "data-v-fbe8fd4c": "",
                      className: "van-tabs van-tabs--line",
                      children: [
                        (0, p.jsxs)("div", {
                          className: "van-sticky",
                          children: [
                            (0, p.jsxs)("div", {
                              className:
                                "van-tabs__wrap van-tabs__wrap--scrollable",
                              children: [
                                (0, p.jsxs)("div", {
                                  role: "tablist",
                                  className:
                                    "van-tabs__nav van-tabs__nav--line van-tabs__nav--complete",
                                  children: [
                                    (0, p.jsxs)("div", {
                                      role: "tab",
                                      className: "van-tab van-tab--active",
                                      children: [
                                        (0, p.jsxs)("span", {
                                          className: "van-tab__text",
                                          children: [
                                            (0, p.jsxs)("p", {
                                              "data-v-fbe8fd4c": "",
                                              className: "title-style",
                                              children: "讯飞星火"
                                            })
                                          ]
                                        })
                                      ]
                                    }),
                                    (0, p.jsxs)("div", {
                                      className: "van-tabs__line",
                                      children: ""
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
            })
          );
        };
    },
    71963: function (e, n, t) {
      function c(e) {
        e = e.hide;
        var n = (0, r.useState)(5),
          t = (n = (0, o.Z)(n, 2))[0],
          c = n[1],
          l = ((n = (0, r.useState)(!1)), (n = (0, o.Z)(n, 2))[0]),
          i = n[1],
          a = ((n = (0, r.useState)([])), (n = (0, o.Z)(n, 2))[0]),
          s = n[1];
        return (
          (0, r.useEffect)(function () {
            var e = setInterval(function () {
              c(function (n) {
                return 0 === --n && clearInterval(e), n;
              });
            }, 1e3);
          }, []),
          (0, U.jsx)("div", {
            className: "".concat(P, " ").concat(e ? y : ""),
            children: (0, U.jsxs)("div", {
              className: b,
              children: [
                (0, U.jsxs)("div", {
                  className: B,
                  children: [
                    (0, U.jsx)("div", {
                      className: S,
                      children: "\u8baf\u98deSparkDesk\u6e29\u99a8\u63d0\u793a"
                    }),
                    (0, U.jsxs)("div", {
                      className: T,
                      children: [
                        (0, U.jsx)("p", {
                          children:
                            "\u5c0a\u656c\u7684\u7528\u6237\uff0c\u6b22\u8fce\u6765\u5230\u8baf\u98de\u661f\u706b\u5927\u6a21\u578bSparkDesk\uff01"
                        }),
                        (0, U.jsxs)("p", {
                          children: [
                            "\u5728\u60a8\u4f7f\u7528\u4e4b\u524d\uff0c\u8bf7\u52a1\u5fc5\u4ed4\u7ec6\u9605\u8bfb\u4ee5\u4e0b\u5185\u5bb9\u3002\u8bf7\u60a8\u77e5\u6653\uff0c\u65e0\u8bba\u60a8\u662f\u901a\u8fc7\u7f51\u9875\u70b9\u51fb\u786e\u8ba4\uff0c\u8fd8\u662f\u5b9e\u9645\u4f7f\u7528\u672c\u670d\u52a1\uff0c\u5747\u8868\u793a\u60a8\u540c\u610f\u9075\u5b88",
                            (0, U.jsx)("a", {
                              target: "_blank",
                              rel: "noreferrer",
                              href: "https://www.xfyun.cn/doc/spark/ExperienceRules.html",
                              children:
                                "\u300aSparkDesk\u7528\u6237\u534f\u8bae\u300b"
                            }),
                            "\u548c",
                            (0, U.jsx)("a", {
                              target: "_blank",
                              rel: "noreferrer",
                              href: "https://www.xfyun.cn/doc/spark/PrivacyPolicy.html",
                              children:
                                "\u300aSparkDesk\u9690\u79c1\u653f\u7b56\u300b"
                            }),
                            "\u7684\u6240\u6709\u6761\u6b3e\uff1b\u82e5\u60a8\u4e0d\u540c\u610f\u5176\u4e2d\u4efb\u4f55\u4e00\u9879\uff0c\u8bf7\u9009\u62e9\u4e0d\u540c\u610f\u6216\u505c\u6b62\u4f7f\u7528\u672c\u670d\u52a1\u3002"
                          ]
                        }),
                        (0, U.jsx)("p", {
                          children:
                            "\u5728\u4f7f\u7528\u8fc7\u7a0b\u4e2d\uff0c\u8bf7\u4e25\u683c\u5c65\u884c\u4fe1\u606f\u5b89\u5168\u8d23\u4efb\uff0c\u786e\u4fdd\u60a8\u8f93\u5165\u7684\u5185\u5bb9\u7b26\u5408\u793e\u4f1a\u4e3b\u4e49\u6838\u5fc3\u4ef7\u503c\u89c2\uff0c\u4e0d\u5f97\u542b\u6709\u98a0\u8986\u56fd\u5bb6\u653f\u6743\u3001\u63a8\u7ffb\u793e\u4f1a\u4e3b\u4e49\u5236\u5ea6\u3001\u717d\u52a8\u5206\u88c2\u56fd\u5bb6\u3001\u7834\u574f\u56fd\u5bb6\u7edf\u4e00\u3001\u5ba3\u626c\u6050\u6016\u4e3b\u4e49\u3001\u6781\u7aef\u4e3b\u4e49\u3001\u5ba3\u626c\u6c11\u65cf\u4ec7\u6068\u3001\u6c11\u65cf\u6b67\u89c6\u3001\u66b4\u529b\u3001\u6deb\u79fd\u8272\u60c5\u3001\u865a\u5047\u5185\u5bb9\u7b49\u4fe1\u606f\uff0c\u4e5f\u4e0d\u5f97\u542b\u6709\u6270\u4e71\u7ecf\u6d4e\u79e9\u5e8f\u548c\u793e\u4f1a\u79e9\u5e8f\u3001\u4fb5\u5bb3\u4ed6\u4eba\u5408\u6cd5\u5229\u76ca\u7684\u5185\u5bb9\u3002"
                        }),
                        (0, U.jsx)("p", {
                          children:
                            "\u8bf7\u60a8\u77e5\u6089\uff0c\u672c\u670d\u52a1\u63d0\u4f9b\u7684\u6240\u6709\u5185\u5bb9\u5747\u7531\u4eba\u5de5\u667a\u80fd\u6a21\u578b\u8f93\u51fa\uff0c\u56e0\u6b64\u53ef\u80fd\u5b58\u5728\u9519\u8bef\u6216\u9057\u6f0f\u3002\u6211\u4eec\u5e76\u4e0d\u4fdd\u8bc1\u8f93\u51fa\u5185\u5bb9\u7684\u51c6\u786e\u6027\u3001\u5b8c\u6574\u6027\u548c\u89c4\u8303\u6027\uff0c\u540c\u65f6\u8fd9\u4e9b\u5185\u5bb9\u5e76\u4e0d\u4ee3\u8868\u670d\u52a1\u63d0\u4f9b\u8005\u7684\u7acb\u573a\u6216\u89c2\u70b9\u3002"
                        }),
                        (0, U.jsx)("p", {
                          children:
                            "\u6211\u4eec\u975e\u5e38\u671f\u5f85\u6536\u5230\u60a8\u7684\u5b9d\u8d35\u610f\u89c1\u3002\u5982\u679c\u60a8\u5bf9\u6280\u672f\u6a21\u578b\u4ea7\u751f\u7684\u5185\u5bb9\u6709\u4efb\u4f55\u53cd\u9988\u5efa\u8bae\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u5bf9\u56de\u7b54\u5185\u5bb9\u70b9\u8d5e\u6216\u70b9\u8e29\u6765\u8868\u8fbe\uff0c\u6211\u4eec\u4f1a\u6839\u636e\u60a8\u5728\u4f7f\u7528\u671f\u95f4\u7684\u8f93\u5165\u548c\u53cd\u9988\u4e0d\u65ad\u6539\u8fdb\u6280\u672f\u548c\u4f18\u5316\u529f\u80fd\u3002\u518d\u6b21\u611f\u8c22\u60a8\u7684\u7406\u89e3\u4e0e\u652f\u6301\uff0c\u8ba9\u6211\u4eec\u643a\u624b\u5171\u521b\u66f4\u7f8e\u597d\u7684\u7f51\u7edc\u7a7a\u95f4\uff0c\u63a8\u52a8\u4eba\u5de5\u667a\u80fd\u5927\u6a21\u578b\u6280\u672f\u7684\u6301\u7eed\u53d1\u5c55\u3002"
                        }),
                        (0, U.jsx)("p", {
                          style: { textAlign: "right" },
                          children:
                            "\u8baf\u98deSparkDesk\u56e2\u961f\u656c\u4e0a"
                        }),
                        (0, U.jsx)("p", {
                          style: { textAlign: "right" },
                          children: "2023\u5e749\u67084\u65e5"
                        }),
                        (0, U.jsxs)("div", {
                          id: G,
                          children: [
                            (0, U.jsx)(v.XZ.Group, {
                              onChange: function (e) {
                                return s(e);
                              },
                              children: (0, U.jsx)(v.XZ, { value: 1 })
                            }),
                            "\u52fe\u9009\u5373\u8868\u793a\u60a8\u540c\u610f\u5e76\u63a5\u53d7",
                            (0, U.jsx)("a", {
                              target: "_blank",
                              rel: "noreferrer",
                              href: "https://www.xfyun.cn/doc/spark/ExperienceRules.html",
                              children:
                                "\u300aSparkDesk\u7528\u6237\u534f\u8bae\u300b"
                            }),
                            "\u548c",
                            " ",
                            (0, U.jsx)("a", {
                              target: "_blank",
                              rel: "noreferrer",
                              href: "https://www.xfyun.cn/doc/spark/PrivacyPolicy.html",
                              children:
                                "\u300aSparkDesk\u9690\u79c1\u653f\u7b56\u300b"
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }),
                (0, U.jsx)("div", {
                  className: Z,
                  children:
                    0 < t
                      ? (0, U.jsxs)("div", {
                          className: E,
                          children: [
                            "\u8bf7\u4ed4\u7ec6\u9605\u8bfb\u4f7f\u7528\u89c4\u5219\uff08",
                            (0, U.jsxs)("span", { children: [t, "\u79d2"] }),
                            "\uff09"
                          ]
                        })
                      : (0, U.jsxs)(U.Fragment, {
                          children: [
                            (0, U.jsx)(v.zx, {
                              className: J,
                              onClick: p.Lh,
                              children: "\u53d6\u6d88\u9000\u51fa"
                            }),
                            (0, U.jsx)(v.zx, {
                              loading: l,
                              onClick: function () {
                                var e;
                                a.length
                                  ? (i(!0),
                                    (0, F.uC)()
                                      .then(function () {
                                        window.location.reload();
                                      })
                                      .catch(function (e) {
                                        i(!1),
                                          v.FN.show({
                                            content: e.msg,
                                            icon: "fail"
                                          });
                                      }))
                                  : (null !=
                                      (e = document.querySelector(
                                        "#".concat(G)
                                      )) && e.scrollIntoView(!0),
                                    v.FN.show({
                                      content:
                                        "\u8bf7\u5148\u52fe\u9009\u540c\u610f\u7528\u6237\u534f\u8bae\u548c\u9690\u79c1\u653f\u7b56"
                                    }));
                              },
                              className: I,
                              children: "\u540c\u610f\u4f7f\u7528"
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
          return he;
        }
      });
      var l = t(4942),
        i = t(1413),
        a = t(74165),
        s = t(15861),
        o = t(29439),
        r = t(47313),
        d = t(58804),
        u = t(2135),
        h = t(58467),
        m = {
          whitePage: "leftPanel_whitePage__ySYQR",
          showMoreMask: "leftPanel_showMoreMask__SnWQX",
          showMore: "leftPanel_showMore__BOLUO",
          qa: "leftPanel_qa__cFWNr",
          moreItem: "leftPanel_moreItem__UeMs6",
          left_pannel_wrap: "leftPanel_left_pannel_wrap__SFwi5",
          mask: "leftPanel_mask__ph3IL",
          no_mask: "leftPanel_no_mask__8ZF6Z",
          main_content: "leftPanel_main_content__tDG-0",
          deleteImgWrapper: "leftPanel_deleteImgWrapper__P6lII",
          panel_icon: "leftPanel_panel_icon__-s1HL",
          edit_icon: "leftPanel_edit_icon__n9Em3",
          delete_icon: "leftPanel_delete_icon__Wmaz5",
          delete_all_icon: "leftPanel_delete_all_icon__bgmw6",
          check_right_icon: "leftPanel_check_right_icon__qzwHB",
          check_cancel_icon: "leftPanel_check_cancel_icon__2-iID",
          in: "leftPanel_in__rm6K-",
          header: "leftPanel_header__0LKRn",
          vcnContent: "leftPanel_vcnContent__Sj9QP",
          vcnTitle: "leftPanel_vcnTitle__LrSJU",
          logo: "leftPanel_logo__DYLeT",
          icon: "leftPanel_icon__mBw4d",
          smartImg: "leftPanel_smartImg__mEJFy",
          login: "leftPanel_login__sgAHi",
          userinfo: "leftPanel_userinfo__f8h6Y",
          vcnBtn: "leftPanel_vcnBtn__rnC1y",
          useImg: "leftPanel_useImg__djf8U",
          goActionArea: "leftPanel_goActionArea__w6fwr",
          newchat: "leftPanel_newchat__5cc4j",
          newChatBox: "leftPanel_newChatBox__A1rB0",
          assistcenterbtn: "leftPanel_assistcenterbtn__W+Erc",
          assisticon: "leftPanel_assisticon__UCQ6y",
          window_switch: "leftPanel_window_switch__qreTX",
          example_reload: "leftPanel_example_reload__CYubZ",
          active: "leftPanel_active__lZYw+",
          history: "leftPanel_history__2g1VT",
          window_prompt: "leftPanel_window_prompt__lhYpr",
          prompt_list: "leftPanel_prompt_list__KA4ZK",
          prompt_item: "leftPanel_prompt_item__utQH9",
          chat_history: "leftPanel_chat_history__FC8sH",
          chat_history_title: "leftPanel_chat_history_title__PmUbi",
          chat_item: "leftPanel_chat_item__vrh53",
          chat_inner: "leftPanel_chat_inner__VwX5V",
          title: "leftPanel_title__xcvJC",
          normal_icon: "leftPanel_normal_icon__0GTMl",
          chat_item_icon: "leftPanel_chat_item_icon__CYA8x",
          action_area: "leftPanel_action_area__GBrAg",
          action_item: "leftPanel_action_item__4xRBQ",
          botListName: "leftPanel_botListName__N-wjc",
          botListWrap: "leftPanel_botListWrap__KjHAf",
          botItem: "leftPanel_botItem__f10Hc",
          botActive: "leftPanel_botActive__tK1As",
          botDel: "leftPanel_botDel__h6sCI",
          botIcon: "leftPanel_botIcon__qZNc4",
          introduce: "leftPanel_introduce__HMCbp",
          botName: "leftPanel_botName__Zs3iX",
          botintro: "leftPanel_botintro__0TEly",
          only_del: "leftPanel_only_del__AoLlH",
          action_normal_item: "leftPanel_action_normal_item__ntjpQ",
          tip: "leftPanel_tip__wBsh7",
          to_download: "leftPanel_to_download__sQYsN",
          to_download_logo: "leftPanel_to_download_logo__tstHd",
          to_download_title: "leftPanel_to_download_title__BH2dB",
          to_download_subtitle: "leftPanel_to_download_subtitle__pyVuq",
          to_download_download: "leftPanel_to_download_download__aFGnj",
          agreement: "leftPanel_agreement__xB7KO",
          tipaction: "leftPanel_tipaction__WGjGK",
          kfpt_icon: "leftPanel_kfpt_icon__7iGFq",
          exit_out: "leftPanel_exit_out__LMhNA",
          assistmode: "leftPanel_assistmode__pRxTz",
          modeSwitch: "leftPanel_modeSwitch__yoBiM",
          styleChangeBtn: "leftPanel_styleChangeBtn__Bbk93",
          light: "leftPanel_light__sLE2g",
          dark: "leftPanel_dark__bi4XK",
          vcnList: "leftPanel_vcnList__JOqb6",
          enTitle: "leftPanel_enTitle__yx8UP",
          speedTitle: "leftPanel_speedTitle__cHzRu",
          bgTitle: "leftPanel_bgTitle__QMnoY",
          bgMusicWrapper: "leftPanel_bgMusicWrapper__zHngC",
          pickerOpenBtn: "leftPanel_pickerOpenBtn__WiaKS",
          musicName: "leftPanel_musicName__Dd-0I",
          right: "leftPanel_right__BuUzv",
          playing: "leftPanel_playing__K11UF",
          playIcon: "leftPanel_playIcon__qekfy",
          status: "leftPanel_status__CK7a4",
          modal: "leftPanel_modal__Ccr5k",
          chat_history_deleteall: "leftPanel_chat_history_deleteall__j3rLB",
          chat_active: "leftPanel_chat_active__ilMrG",
          editActive: "leftPanel_editActive__Wx6B2",
          delActive: "leftPanel_delActive__hb9S6",
          left_iphone: "leftPanel_left_iphone__-t1G8"
        },
        f = ((n = t(46123)), t.n(n)),
        g = ((n = t(21710)), t.n(n)),
        p = t(21114),
        A = t(90439),
        v = t(92715),
        _ = t(56102),
        x = t(96893),
        w = t(24946),
        j = t(92454),
        N = t(2147),
        F = t(42859),
        k = t(85340),
        C = t(64649),
        y = "argreement_hide__SDOZE",
        P = "argreement_modal__gK3IV",
        b = "argreement_content_wrap__g0oEx",
        B = "argreement_content_header__HDqts",
        S = "argreement_header__Hcot+",
        I = "argreement_primary__sYICc",
        Z = "argreement_button_list__mDqSn",
        E = "argreement_time__kew6w",
        J = "argreement_reject__Ov4kd",
        T = "argreement_content__dvfXs",
        G = "argreement_agreement__kei3A",
        U = t(46417),
        D = {
          botEditModal: "bot-edit-modal_botEditModal__B2mY7",
          tip: "bot-edit-modal_tip__wXI0n",
          highlight: "bot-edit-modal_highlight__X3YFe"
        };
      function M(e) {
        var n = e.visible,
          t = void 0 !== (t = e.editFlag) && t,
          c = e.data,
          l = e.closeModal;
        return (0, U.jsx)(v.u_, {
          className: D.botEditModal,
          bodyClassName: D.botEditModalBody,
          showCloseButton: !0,
          visible: n,
          onClose: l,
          title: t ? "\u7f16\u8f91\u52a9\u624b" : "\u65b0\u5efa\u52a9\u624b",
          actions: [
            {
              key: "done",
              text: t
                ? "\u4fdd\u5b58\u4fee\u6539"
                : "\u4fdd\u5b58\u5e76\u6dfb\u52a0",
              primary: !0,
              onClick: function () {
                return l();
              }
            },
            {
              key: "cancel",
              text: "\u53d6\u6d88",
              onClick: function () {
                return l();
              }
            }
          ],
          content: (0, U.jsxs)(U.Fragment, {
            children: [
              (0, U.jsxs)(v.l0, {
                requiredMarkStyle: "asterisk",
                initialValues: void 0 === c ? {} : c,
                children: [
                  (0, U.jsx)(v.l0.Item, {
                    name: "botName",
                    label: "\u52a9\u624b\u6635\u79f0",
                    rules: [{ required: !0 }],
                    children: (0, U.jsx)(v.II, {
                      placeholder: "\u8bf7\u8f93\u5165\u52a9\u624b\u6635\u79f0"
                    })
                  }),
                  (0, U.jsx)(v.l0.Item, {
                    name: "botDesc",
                    label: "\u529f\u80fd\u63cf\u8ff0",
                    rules: [{ required: !0 }],
                    children: (0, U.jsx)(v.II, {
                      placeholder: "\u8bf7\u8f93\u5165\u529f\u80fd\u63cf\u8ff0"
                    })
                  }),
                  (0, U.jsx)(v.l0.Item, {
                    name: "welcome",
                    label: "\u6b22\u8fce\u8bed",
                    children: (0, U.jsx)(v.II, {
                      placeholder: "\u8bf7\u8f93\u5165\u6b22\u8fce\u8bed"
                    })
                  }),
                  (0, U.jsx)(v.l0.Item, {
                    name: "botInstruction",
                    label: "\u52a9\u624b\u6307\u4ee4",
                    rules: [{ required: !0 }],
                    children: (0, U.jsx)(v.Kx, {
                      placeholder: "\u8bf7\u8f93\u5165\u52a9\u624b\u6307\u4ee4",
                      maxLength: 2e3
                    })
                  })
                ]
              }),
              (0, U.jsxs)("div", {
                className: D.tip,
                children: [
                  "\u52a9\u624b\u6307\u4ee4\u9700\u8981\u903b\u8f91\u6e05\u6670\uff0c\u660e\u786e\u4e14\u6613\u61c2\uff0c\u5177\u4f53\u53ef\u4ee5\u53c2\u8003",
                  (0, U.jsx)("span", {
                    className: D.highlight,
                    children: "\u52a9\u624b\u6307\u4ee4\u7f16\u5199\u6307\u5357"
                  })
                ]
              })
            ]
          })
        });
      }
      function L(e) {
        var n = e.hide,
          t = ((e = r.useState(!0)), (e = (0, o.Z)(e, 2))[0]),
          c = e[1];
        return (
          (0, r.useEffect)(
            function () {
              c(n);
            },
            [n]
          ),
          (0, U.jsx)(U.Fragment, {
            children: (0, U.jsx)("div", {
              className: "".concat(H, " ").concat(t ? z : ""),
              children: (0, U.jsxs)("div", {
                className: R,
                children: [
                  (0, U.jsx)("img", {
                    src: "https://aixfyun-cn-bj.xfyun.cn/bbs/61766.87172276649/%E7%BC%96%E7%BB%84%208.svg",
                    alt: "",
                    className: V
                  }),
                  (0, U.jsx)("div", {
                    className: W,
                    children: "\u6b22\u8fce\u56de\u6765"
                  }),
                  (0, U.jsxs)("div", {
                    className: Y,
                    children: [
                      "\u60a8\u7684\u661f\u706b\u8d26\u53f7\u5df214\u5929\u672a\u4f7f\u7528",
                      (0, U.jsx)("br", {}),
                      "\u8bf7\u70b9\u51fb\u6fc0\u6d3b\u540e\u7acb\u5373\u4f7f\u7528"
                    ]
                  }),
                  (0, U.jsx)("div", {
                    className: X,
                    onClick: function () {
                      (0, j.Ml)()
                        .then(function () {
                          c(!t), window.location.reload();
                        })
                        .catch(function (e) {
                          O.Am.error(e.msg);
                        });
                    },
                    children: "\u7acb\u5373\u6fc0\u6d3b"
                  })
                ]
              })
            })
          })
        );
      }
      function Q(e) {
        var n = e.item,
          t = e.active,
          c = e.playStatus,
          l = e.change,
          i = e.testListen;
        return (0, U.jsxs)("div", {
          className: f()(ce, t === n.vcn ? de : null),
          onClick: function () {
            return l(n.vcn);
          },
          children: [
            (0, U.jsxs)("div", {
              className: le,
              children: [
                (0, U.jsx)("img", { src: n.imgUrl, alt: "" }),
                (0, U.jsx)("span", { className: ie, children: n.name })
              ]
            }),
            (0, U.jsxs)("div", {
              className: f()(ae, c === n.vcn ? se : null),
              children: [
                (0, U.jsx)("div", {
                  className: oe,
                  onClick: function (e) {
                    e.stopPropagation(),
                      c
                        ? v.FN.show(
                            "\u8bf7\u7b49\u5f85\u8bd5\u542c\u7ed3\u675f\uff01"
                          )
                        : i(n.audioUrl, n.vcn);
                  },
                  children:
                    c === n.vcn
                      ? (0, U.jsx)($.uJ, { style: { pointerEvents: "none" } })
                      : (0, U.jsx)($.TZ, { style: { pointerEvents: "none" } })
                }),
                (0, U.jsx)("span", {
                  className: re,
                  children: c === n.vcn ? "\u64ad\u653e\u4e2d" : "\u8bd5\u542c"
                })
              ]
            })
          ]
        });
      }
      var z = "freeze_hide__eymel",
        H = "freeze_freeze_modal__6s25I",
        R = "freeze_content_wrap__AP36P",
        V = "freeze_content_wrap_logo__2J7FZ",
        W = "freeze_content_wrap_title__DH+Mc",
        Y = "freeze_content_wrap_subtitle__HbDyM",
        X = "freeze_fw_submit__5qTVA",
        O = t(34491),
        q = t(80761),
        K = t(14280),
        $ = t(99353),
        ee = [
          {
            id: 1,
            name: "\u8046\u5c0f\u742a",
            vcn: "x4_lingxiaoqi",
            style: "assistant",
            wsUrl: "wss://cn-global.xf-yun.com/v1/private/s62f75860",
            preText:
              "\u61c2\u4f60\u6240\u8a00\uff0c\u7b54\u4f60\u6240\u95ee\uff0c\u6211\u662f\u4f60\u7684\u8baf\u98de\u661f\u706b\u5c0f\u52a9\u7406",
            imgUrl:
              "https://1024-cdn.xfyun.cn/2022_1024%2Fcms%2F16824985943709826%2Flxq.png",
            audioUrl:
              "https://1024-cdn.xfyun.cn/2022_1024%2Fcms%2F16826811616503105%2Flingxiaoqi.mp3"
          },
          {
            id: 2,
            name: "\u8046\u98de\u6668",
            vcn: "x4_lingfeichen",
            style: "assistant",
            wsUrl: "wss://cn-global.xf-yun.com/v1/private/s87cfb83f",
            preText:
              "\u61c2\u4f60\u6240\u8a00\uff0c\u7b54\u4f60\u6240\u95ee\uff0c\u6211\u662f\u4f60\u7684\u8baf\u98de\u661f\u706b\u5c0f\u52a9\u7406",
            imgUrl:
              "https://1024-cdn.xfyun.cn/2022_1024%2Fcms%2F16824985943686779%2Flfc.png",
            audioUrl:
              "https://1024-cdn.xfyun.cn/2022_1024%2Fcms%2F16826811616467401%2Flingfeichen.mp3"
          },
          {
            id: 3,
            name: "\u8046\u98de\u54f2",
            vcn: "x4_lingfeizhe",
            style: "assistant",
            wsUrl: "wss://cn-global.xf-yun.com/v1/private/s87cfb83f",
            preText:
              "\u61c2\u4f60\u6240\u8a00\uff0c\u7b54\u4f60\u6240\u95ee\uff0c\u6211\u662f\u4f60\u7684\u8baf\u98de\u661f\u706b\u5c0f\u52a9\u7406",
            imgUrl:
              "https://1024-cdn.xfyun.cn/2022_1024%2Fcms%2F16824985943694890%2Flfz.png",
            audioUrl:
              "https://1024-cdn.xfyun.cn/2022_1024%2Fcms%2F16826811616493613%2Flingfeizhe.mp3"
          }
        ],
        ne = [
          {
            id: 4,
            name: "Luna",
            vcn: "x4_EnUs_Luna",
            style: "assistant",
            wsUrl: "wss://cn-huadong-1.xf-yun.com/v1/private/s0ff5b4cc",
            preText:
              "Understand what you say, answer what you ask, I am your iFLYTEK Spark Assistant",
            imgUrl:
              "https://1024-cdn.xfyun.cn/2022_1024%2Fcms%2F16824985943695009%2Fluna.png",
            audioUrl:
              "https://1024-cdn.xfyun.cn/2022_1024%2Fcms%2F16826811616513745%2FLuna.mp3"
          },
          {
            id: 5,
            name: "Gavin",
            vcn: "x4_EnUs_Gavin",
            style: "assistant",
            wsUrl: "wss://cn-huadong-1.xf-yun.com/v1/private/s0ff5b4cc",
            preText:
              "Understand what you say, answer what you ask, I am your iFLYTEK Spark Assistant",
            imgUrl:
              "https://1024-cdn.xfyun.cn/2022_1024%2Fcms%2F16824985943631137%2Fgavin.png",
            audioUrl:
              "https://1024-cdn.xfyun.cn/2022_1024%2Fcms%2F16826811616394027%2FGavin.mp3"
          }
        ],
        te = [
          [
            {
              label: "\u8f7b\u67d4\u8212\u7f13\u97f3\u4e50",
              value:
                "https://1024-cdn.xfyun.cn/2022_1024%2Fcms%2F16828512103618230%2Fqrshmusic5.mp3"
            },
            {
              label: "inspiring-cinematic-uplifting-piano-short",
              value:
                "https://1024-cdn.xfyun.cn/2022_1024%2Fcms%2F16828487315849114%2Finspiring-cinematic-uplifting-piano-short-8701.mp3"
            }
          ]
        ],
        ce = "vcnItem_vcnItem__Hq9wL",
        le = "vcnItem_left__-roLS",
        ie = "vcnItem_name__DkSlG",
        ae = "vcnItem_right__v1Wsi",
        se = "vcnItem_playing__nCbCn",
        oe = "vcnItem_playIcon__88XGh",
        re = "vcnItem_status__OxakK",
        de = "vcnItem_active__fkvyf",
        ue = { 35: "\u6162\u901f", 50: "\u9ed8\u8ba4", 65: "\u5feb\u901f" },
        he = function (e) {
          function n() {
            (0, N.wq)()
              .then(function (e) {
                console.log(e);
              })
              .catch(function (e) {
                100 !== (null == e ? void 0 : e.code) &&
                  (console.error(e), null != e) &&
                  e.msg &&
                  v.FN.show({ content: e.msg, icon: "fail" });
              });
          }
          function t(e) {
            (0, j.F)({
              chatListId: e
                ? null == O
                  ? void 0
                  : O.id
                : null == Y
                ? void 0
                : Y.id
            })
              .then(function () {
                v.FN.show({
                  icon: "success",
                  content: "\u5220\u9664\u6210\u529f\uff01"
                }),
                  (e ? n : ze)(),
                  e || (null == Y ? void 0 : Y.id) !== Number(T) || Ge("/desk"),
                  e && (null == O ? void 0 : O.id) === Number(T) && Ge("/desk"),
                  (e ? ce : X)(void 0);
              })
              .catch(function (t) {
                var c;
                100 !== (null == t ? void 0 : t.code) &&
                  (console.error(t),
                  109901 ===
                    (null == t || null == (c = t.detail) ? void 0 : c.code) ||
                  20006 === (null == (c = t.detail) ? void 0 : c.code)
                    ? (e ? n : ze)()
                    : null != t &&
                      t.msg &&
                      v.FN.show({ icon: "fail", content: t.msg }));
              });
          }
          function y() {
            var e;
            [void 0, ""].includes(re.current)
              ? v.FN.show({
                  content:
                    "\u8bf7\u8f93\u5165\u4fee\u6539\u540e\u7684\u540d\u79f0\uff01"
                })
              : 15 <
                (null == re || null == (e = re.current) ? void 0 : e.length)
              ? v.FN.show({
                  content: "\u540d\u79f0\u4e0d\u957f\u4e8e15\u5b57\u7b26\uff01"
                })
              : (0, j.W3)({
                  chatListId: null == Y ? void 0 : Y.id,
                  chatListName: re.current
                })
                  .then(function (e) {
                    ze(),
                      e
                        ? ((null == Y || null == (e = Y.id)
                            ? void 0
                            : e.toString()) === Te.get("id") && _e(re.current),
                          v.FN.show({
                            icon: "success",
                            content: "\u91cd\u547d\u540d\u6210\u529f\uff01"
                          }),
                          (re.current = void 0),
                          X(void 0))
                        : v.FN.show(
                            "\u5f53\u524d\u5bf9\u8bdd\u4e0d\u5b58\u5728\uff01"
                          );
                  })
                  .catch(function (e) {
                    100 !== (null == e ? void 0 : e.code) &&
                      (console.error(e), null != e) &&
                      e.msg &&
                      v.FN.show({ icon: "fail", content: e.msg });
                  });
          }
          function P(e, n) {
            (n = JSON.stringify(n)),
              (e = {
                ttsCN: null == e ? void 0 : e.cn,
                ttsEN: null == e ? void 0 : e.en,
                speed: null == e ? void 0 : e.speed,
                background: n
              }),
              (0, k.Jr)(e)
                .then(function (e) {
                  console.log(e);
                })
                .catch(function (e) {
                  console.warn(e);
                });
          }
          function b(e, n) {
            var t = (0, i.Z)({}, Ce);
            (t[e] = n), console.log(t), ye(t), P(t, Pe);
          }
          function B(e, n) {
            E && E(), se(n), (he.current.src = e), he.current.play();
          }
          var S = void 0 !== (z = e.show) && z,
            I = e.closePanel,
            Z = e.selectNewPrompt,
            E = e.stop,
            J = void 0 !== (z = e.botModeFlag) && z,
            T = ((e = (0, d.FV)(C.sO)), (z = (0, o.Z)(e, 2))[0]),
            G = z[1],
            D =
              ((e = (0, r.useState)(!1)), (e = (z = (0, o.Z)(e, 2))[0]), z[1]),
            z = (0, r.useState)(!0),
            H = (z = (0, o.Z)(z, 2))[0],
            R = z[1],
            V = ((z = (0, r.useState)(!0)), (z = (0, o.Z)(z, 2))[0]),
            W = z[1],
            Y = ((z = (0, r.useState)()), (z = (0, o.Z)(z, 2))[0]),
            X = z[1],
            O = ((z = (0, r.useState)()), (z = (0, o.Z)(z, 2))[0]),
            ce = z[1],
            le = ((z = (0, r.useState)("list")), (z = (0, o.Z)(z, 2))[0]),
            ie = z[1],
            ae = ((z = (0, r.useState)()), (z = (0, o.Z)(z, 2))[0]),
            se = z[1],
            oe = ((z = (0, r.useState)(J)), (0, o.Z)(z, 1)[0]),
            re = r.useRef(),
            de = r.useRef(),
            he = r.useRef(),
            me = ((z = (0, d.FV)(C.eY)), (z = (0, o.Z)(z, 2))[0]),
            fe = z[1],
            ge = ((z = (0, r.useState)(!1)), (z = (0, o.Z)(z, 2))[0]),
            pe = z[1],
            Ae = ((z = (0, d.FV)(C.ri)), (z = (0, o.Z)(z, 2))[0]),
            ve = z[1],
            _e = ((z = (0, d.FV)(C.x2)), (0, o.Z)(z, 2)[1]),
            xe = ((z = (0, d.FV)(C.X3)), (z = (0, o.Z)(z, 2))[0]),
            we = z[1],
            je = ((z = (0, d.FV)(C.Z0)), (0, o.Z)(z, 1)[0]),
            Ne = ((z = (0, d.FV)(C.Qw)), (0, o.Z)(z, 1)[0]),
            Fe = ((z = (0, d.FV)(C.YT)), (0, o.Z)(z, 1)[0]),
            ke =
              ((z = (0, d.FV)(C.bL)), (z = (0, o.Z)(z, 1)[0]), (0, d.FV)(C.YS)),
            Ce = (ke = (0, o.Z)(ke, 2))[0],
            ye = ke[1],
            Pe = ((ke = (0, d.FV)(C.uJ)), (ke = (0, o.Z)(ke, 2))[0]),
            be = ke[1],
            Be = ((ke = (0, r.useState)(0)), (ke = (0, o.Z)(ke, 2))[0]),
            Se = ke[1],
            Ie = ((ke = (0, r.useState)(1)), (ke = (0, o.Z)(ke, 2))[0]),
            Ze = ke[1],
            Ee =
              ((ke = (0, r.useState)([
                "https://1024-cdn.xfyun.cn/2022_1024%2Fcms%2F16828512103618230%2Fqrshmusic5.mp3"
              ])),
              (ke = (0, o.Z)(ke, 2))[0]),
            Je = ke[1],
            Te = ((ke = (0, u.lr)()), (0, o.Z)(ke, 1)[0]),
            Ge = (0, h.s0)(),
            Ue = ((ke = (0, r.useState)(!1)), (ke = (0, o.Z)(ke, 2))[0]),
            De = ke[1],
            Me = ((ke = (0, r.useState)(!1)), (ke = (0, o.Z)(ke, 2))[0]),
            Le = ke[1],
            Qe = (function () {
              var e = (0, s.Z)(
                (0, a.Z)().mark(function e() {
                  var n, t;
                  return (0, a.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), (0, F.bG)();
                          case 3:
                            (n = e.sent),
                              pe(!0),
                              void 0 ===
                                (null == n ? void 0 : n.userAgreement) ||
                                (null != n && n.userAgreement) ||
                                R(!1),
                              ve(null == n ? void 0 : n.avatar),
                              fe(null == n ? void 0 : n.userInfo),
                              (e.next = 13);
                            break;
                          case 8:
                            (e.prev = 8),
                              (e.t0 = e.catch(0)),
                              console.error(
                                null === e.t0 || void 0 === e.t0
                                  ? void 0
                                  : e.t0.msg
                              ),
                              console.log(
                                null === e.t0 || void 0 === e.t0
                                  ? void 0
                                  : e.t0.msg,
                                me
                              ),
                              99996 ===
                              (null === e.t0 ||
                              void 0 === e.t0 ||
                              null == (n = e.t0.detail)
                                ? void 0
                                : n.code)
                                ? (window.location.href =
                                    "https://xinghuo.xfyun.cn/")
                                : 8e4 !==
                                    (null === e.t0 ||
                                    void 0 === e.t0 ||
                                    null == (t = e.t0.detail)
                                      ? void 0
                                      : t.code) &&
                                  80002 ===
                                    (null === e.t0 ||
                                    void 0 === e.t0 ||
                                    null == (t = e.t0.detail)
                                      ? void 0
                                      : t.code)
                                ? W(!1)
                                : (v.FN.show(
                                    null === e.t0 || void 0 === e.t0
                                      ? void 0
                                      : e.t0.msg
                                  ),
                                  setTimeout(function () {
                                    (0, p.Lh)();
                                  }, 1e3));
                          case 13:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 8]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            ze =
              ((0, r.useEffect)(function () {
                Qe();
              }, []),
              (0, r.useEffect)(
                function () {
                  ge && (ze(), We());
                },
                [ge]
              ),
              (0, r.useEffect)(
                function () {
                  S || X(void 0);
                },
                [S]
              ),
              function () {
                (0, j.Ag)()
                  .then(function (e) {
                    we(e);
                  })
                  .catch(function (e) {
                    100 !== (null == e ? void 0 : e.code) &&
                      (console.error(e), null != e) &&
                      e.msg &&
                      v.FN.show({ content: e.msg, icon: "fail" });
                  });
              }),
            He = (0, r.useCallback)(
              function (e) {
                var n,
                  c = (0, U.jsx)("div", {
                    className: m.action_area_more,
                    onClick: function (n) {
                      n.stopPropagation(),
                        X(
                          (0, i.Z)(
                            (0, i.Z)({}, e),
                            {},
                            { activeState: "action" }
                          )
                        );
                    },
                    children: (0, U.jsx)(_.Z, {
                      style: { transform: "rotate(90deg)" }
                    })
                  });
                if ((null == Y ? void 0 : Y.id) !== (null == e ? void 0 : e.id))
                  return c;
                switch (
                  null != (n = null == Y ? void 0 : Y.activeState) ? n : ""
                ) {
                  case "action":
                    return (0, U.jsxs)("div", {
                      className: m.action_area,
                      children: [
                        (0, U.jsx)("span", {
                          className: m.action_item,
                          onClick: function (n) {
                            n.stopPropagation(),
                              je || !Ne
                                ? v.FN.show(
                                    "\u5bf9\u8bdd\u8fdb\u884c\u4e2d\uff0c\u8bf7\u52ff\u64cd\u4f5c"
                                  )
                                : (X(
                                    (0, i.Z)(
                                      (0, i.Z)({}, e),
                                      {},
                                      { activeState: "edit" }
                                    )
                                  ),
                                  (re.current = e.title));
                          },
                          children: (0, U.jsx)("span", {
                            className: ""
                              .concat(m.panel_icon, " ")
                              .concat(m.edit_icon)
                          })
                        }),
                        (0, U.jsx)("span", {
                          className: m.action_item,
                          onClick: function (n) {
                            n.stopPropagation(),
                              je || !Ne
                                ? v.FN.show(
                                    "\u5bf9\u8bdd\u8fdb\u884c\u4e2d\uff0c\u8bf7\u52ff\u64cd\u4f5c"
                                  )
                                : X(
                                    (0, i.Z)(
                                      (0, i.Z)({}, e),
                                      {},
                                      { activeState: "delete" }
                                    )
                                  );
                          },
                          children: (0, U.jsx)("span", {
                            className: ""
                              .concat(m.panel_icon, " ")
                              .concat(m.delete_icon)
                          })
                        })
                      ]
                    });
                  case "edit":
                    return (0, U.jsxs)("div", {
                      className: m.action_area,
                      children: [
                        (0, U.jsx)("span", {
                          className: ""
                            .concat(m.panel_icon, " ")
                            .concat(m.check_right_icon, " ")
                            .concat(m.action_item),
                          onClick: function (e) {
                            e.stopPropagation(), y();
                          }
                        }),
                        (0, U.jsx)("span", {
                          className: ""
                            .concat(m.panel_icon, " ")
                            .concat(m.check_cancel_icon, " ")
                            .concat(m.action_item),
                          onClick: function (e) {
                            e.stopPropagation(),
                              (re.current = void 0),
                              X(void 0);
                          }
                        })
                      ]
                    });
                  case "delete":
                    return (0, U.jsxs)("div", {
                      className: m.action_area,
                      children: [
                        (0, U.jsx)("span", {
                          className: ""
                            .concat(m.panel_icon, " ")
                            .concat(m.check_right_icon, " ")
                            .concat(m.action_item),
                          onClick: function (e) {
                            e.stopPropagation(), t();
                          }
                        }),
                        (0, U.jsx)("span", {
                          className: ""
                            .concat(m.panel_icon, " ")
                            .concat(m.check_cancel_icon, " ")
                            .concat(m.action_item),
                          onClick: function (e) {
                            e.stopPropagation(), X(void 0);
                          }
                        })
                      ]
                    });
                  default:
                    return c;
                }
              },
              [Y, Te]
            ),
            Re = (0, r.useCallback)(
              function (e) {
                var n = (0, U.jsx)("span", { className: m.normal_icon });
                if ((null == Y ? void 0 : Y.id) === (null == e ? void 0 : e.id))
                  switch (
                    null != (e = null == Y ? void 0 : Y.activeState) ? e : ""
                  ) {
                    case "edit":
                      return (0, U.jsx)("div", {
                        className: m.chat_item_icon,
                        children: (0, U.jsx)("span", {
                          className: ""
                            .concat(m.panel_icon, " ")
                            .concat(m.edit_icon)
                        })
                      });
                    case "delete":
                      return (0, U.jsx)("div", {
                        className: m.chat_item_icon,
                        children: (0, U.jsx)("span", {
                          className: ""
                            .concat(m.panel_icon, " ")
                            .concat(m.delete_icon)
                        })
                      });
                    default:
                      return n;
                  }
                return n;
              },
              [Y]
            ),
            Ve =
              ((ke =
                ((0, r.useCallback)(
                  function (e) {
                    var n,
                      c = (0, U.jsx)("div", {
                        className: m.action_normal_item,
                        onClick: function (n) {
                          n.stopPropagation(),
                            ce(
                              (0, i.Z)(
                                (0, i.Z)({}, e),
                                {},
                                { activeState: "action" }
                              )
                            );
                        },
                        children: (0, U.jsx)(_.Z, {
                          className: m.action_item,
                          style: {
                            transform: "rotate(90deg)",
                            fontSize: "14px"
                          }
                        })
                      });
                    if (
                      (null == O ? void 0 : O.id) !==
                      (null == e ? void 0 : e.id)
                    )
                      return c;
                    switch (
                      null != (n = null == O ? void 0 : O.activeState) ? n : ""
                    ) {
                      case "action":
                        return (0, U.jsx)("div", {
                          className: ""
                            .concat(m.action_area, " ")
                            .concat(m.only_del),
                          children: (0, U.jsx)("span", {
                            className: m.action_item,
                            onClick: function (n) {
                              n.stopPropagation(),
                                je || !Ne
                                  ? v.FN.show(
                                      "\u5bf9\u8bdd\u8fdb\u884c\u4e2d\uff0c\u8bf7\u52ff\u64cd\u4f5c"
                                    )
                                  : ce(
                                      (0, i.Z)(
                                        (0, i.Z)({}, e),
                                        {},
                                        { activeState: "delete" }
                                      )
                                    );
                            },
                            children: (0, U.jsx)("span", {
                              className: ""
                                .concat(m.panel_icon, " ")
                                .concat(m.delete_icon)
                            })
                          })
                        });
                      case "edit":
                        return (0, U.jsxs)("div", {
                          className: m.action_area,
                          children: [
                            (0, U.jsx)("span", {
                              className: ""
                                .concat(m.panel_icon, " ")
                                .concat(m.check_right_icon, " ")
                                .concat(m.action_item),
                              onClick: function (e) {
                                e.stopPropagation(), y();
                              }
                            }),
                            (0, U.jsx)("span", {
                              className: ""
                                .concat(m.panel_icon, " ")
                                .concat(m.check_cancel_icon, " ")
                                .concat(m.action_item),
                              onClick: function (e) {
                                e.stopPropagation(),
                                  (de.current = void 0),
                                  ce(void 0);
                              }
                            })
                          ]
                        });
                      case "delete":
                        return (0, U.jsxs)("div", {
                          className: m.action_area,
                          children: [
                            (0, U.jsx)("span", {
                              className: ""
                                .concat(m.panel_icon, " ")
                                .concat(m.check_right_icon, " ")
                                .concat(m.action_item),
                              onClick: function (e) {
                                e.stopPropagation(), t(!0);
                              }
                            }),
                            (0, U.jsx)("span", {
                              className: ""
                                .concat(m.panel_icon, " ")
                                .concat(m.check_cancel_icon, " ")
                                .concat(m.action_item),
                              onClick: function (e) {
                                e.stopPropagation(), ce(void 0);
                              }
                            })
                          ]
                        });
                      default:
                        return c;
                    }
                  },
                  [O, Te]
                ),
                window.navigator.userAgent.toLowerCase().includes("iphone"))),
              r.useRef()),
            We =
              (r.useEffect(function () {}, []),
              function () {
                (0, k.sS)()
                  .then(function (e) {
                    var n = (0, i.Z)({}, Ce),
                      t = (0, i.Z)({}, Pe),
                      c = JSON.parse(e.background);
                    e.ttsCN && (n.cn = e.ttsCN),
                      e.ttsEN && (n.en = e.ttsEN),
                      e.speed && (n.speed = e.speed),
                      (t.flag = c.flag),
                      c.bgUrl && (t.bgUrl = c.bgUrl),
                      ye(n),
                      be(t);
                  })
                  .catch(function (e) {
                    console.warn(e);
                  });
              });
          return (0, U.jsxs)(U.Fragment, {
            children: [
              (0, U.jsx)(L, { hide: V }),
              (0, U.jsx)(c, { hide: H }),
              (0, U.jsx)(M, {
                visible: Ue,
                closeModal: function () {
                  return De(!1);
                }
              }),
              me ? null : (0, U.jsx)("div", { className: m.whitePage }),
              (0, U.jsxs)("div", {
                className: f()(
                  m.left_pannel_wrap,
                  S ? m.in : m.out,
                  "dark" === z ? m.dark : m.light,
                  (0, l.Z)({}, m.left_iphone, ke)
                ),
                id: "leftDrawer",
                onTouchMove: function (e) {
                  return e.stopPropagation();
                },
                children: [
                  (0, U.jsx)("div", {
                    className: ""
                      .concat(m.mask, " ")
                      .concat(S ? "" : m.no_mask),
                    onClick: function () {
                      I && I();
                    }
                  }),
                  (0, U.jsxs)("div", {
                    className: m.main_content,
                    children: []
                  }),
                  (0, U.jsx)("audio", {
                    src: "",
                    ref: he,
                    onEnded: function () {
                      return se("");
                    },
                    style: { display: "none" }
                  }),
                  (0, U.jsx)("audio", {
                    preload: "true",
                    src: "https://1024-cdn.xfyun.cn/2022_1024%2Fcms%2F16828512103618230%2Fqrshmusic5.mp3",
                    ref: he,
                    onEnded: function () {
                      return se("");
                    },
                    style: { display: "none" }
                  }),
                  (0, U.jsx)("audio", {
                    preload: "true",
                    src: "https://1024-cdn.xfyun.cn/2022_1024%2Fcms%2F16828487315849114%2Finspiring-cinematic-uplifting-piano-short-8701.mp3",
                    ref: he,
                    onEnded: function () {
                      return se("");
                    },
                    style: { display: "none" }
                  })
                ]
              })
            ]
          });
        };
    },
    80761: function (e) {
      e.exports =
        "data:image/png;base64,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";
    }
  }
]);
