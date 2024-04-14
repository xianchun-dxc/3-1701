(function (e) {
  function t(t) {
    for (
      var o, i, c = t[0], u = t[1], s = t[2], l = 0, d = [];
      l < c.length;
      l++
    )
      (i = c[l]),
        Object.prototype.hasOwnProperty.call(a, i) && a[i] && d.push(a[i][0]),
        (a[i] = 0);
    for (o in u) Object.prototype.hasOwnProperty.call(u, o) && (e[o] = u[o]);
    p && p(t);
    while (d.length) d.shift()();
    return r.push.apply(r, s || []), n();
  }
  function n() {
    for (var e, t = 0; t < r.length; t++) {
      for (var n = r[t], o = !0, i = 1; i < n.length; i++) {
        var c = n[i];
        0 !== a[c] && (o = !1);
      }
      o && (r.splice(t--, 1), (e = u((u.s = n[0]))));
    }
    return e;
  }
  var o = {},
    i = { app: 0 },
    a = { app: 0 },
    r = [];
  function c(e) {
    return (
      "http://127.0.0.1:8884/chatglm/js/" +
      ({
        AboutUs: "AboutUs",
        Agent: "Agent",
        "AgentCenter~AgentRecommendList~AgentSquare":
          "AgentCenter~AgentRecommendList~AgentSquare",
        AgentCenter: "AgentCenter",
        AgentRecommendList: "AgentRecommendList",
        AgentSquare: "AgentSquare",
        AgentShare: "AgentShare",
        Agreement: "Agreement",
        AgreementApp: "AgreementApp",
        "Apply~ApplyAndLogin~LoginNew~NewHome":
          "Apply~ApplyAndLogin~LoginNew~NewHome",
        Apply: "Apply",
        "ApplyAndLogin~LoginNew~NewHome": "ApplyAndLogin~LoginNew~NewHome",
        ApplyAndLogin: "ApplyAndLogin",
        LoginNew: "LoginNew",
        NewHome: "NewHome",
        "BLog~BLogApp~CollegeLogin~Detail~ForgetPwd~GlmsDetail~GlmsDetailWeb~LightInteraction~Login~Login_MD5~53be352b":
          "BLog~BLogApp~CollegeLogin~Detail~ForgetPwd~GlmsDetail~GlmsDetailWeb~LightInteraction~Login~Login_MD5~53be352b",
        "BLog~BLogApp~Detail~GlmsDetail~GlmsDetailWeb~LightInteraction~MiniAppHome":
          "BLog~BLogApp~Detail~GlmsDetail~GlmsDetailWeb~LightInteraction~MiniAppHome",
        "BLog~BLogApp": "BLog~BLogApp",
        BLog: "BLog",
        BLogApp: "BLogApp",
        "Detail~GlmsDetail~GlmsDetailWeb~Home~MiniAppHome~RegisterSuccess":
          "Detail~GlmsDetail~GlmsDetailWeb~Home~MiniAppHome~RegisterSuccess",
        "Detail~GlmsDetail~GlmsDetailWeb~Home~MiniAppHome":
          "Detail~GlmsDetail~GlmsDetailWeb~Home~MiniAppHome",
        Detail: "Detail",
        GlmsDetail: "GlmsDetail",
        GlmsDetailWeb: "GlmsDetailWeb",
        MiniAppHome: "MiniAppHome",
        LightInteraction: "LightInteraction",
        "CollegeLogin~Login~Login_MD5": "CollegeLogin~Login~Login_MD5",
        CollegeLogin: "CollegeLogin",
        "Login~Login_MD5": "Login~Login_MD5",
        Login: "Login",
        Login_MD5: "Login_MD5",
        ForgetPwd: "ForgetPwd",
        Coffee: "Coffee",
        CoffeeShare: "CoffeeShare",
        CoffeeSharePc: "CoffeeSharePc",
        "Home~RegisterSuccess": "Home~RegisterSuccess",
        Home: "Home",
        RegisterSuccess: "RegisterSuccess",
        DevDay: "DevDay",
        DownLoad: "DownLoad",
        FeedBack: "FeedBack",
        Glms: "Glms",
        HomePage: "HomePage",
        InsideTestApply: "InsideTestApply",
        LicenseInformation: "LicenseInformation",
        MoonFestival: "MoonFestival",
        MoonFestivalShare: "MoonFestivalShare",
        PrivacyPolicy: "PrivacyPolicy",
        PrivacyPolicyApp: "PrivacyPolicyApp",
        PrivacyPolicyAppAndroid: "PrivacyPolicyAppAndroid",
        ProductFunction: "ProductFunction",
        Prompt: "Prompt",
        PromptApp: "PromptApp",
        PureDisplay: "PureDisplay",
        Report: "Report",
        SysUpgrade: "SysUpgrade",
        ThirdLogin: "ThirdLogin",
        UsageSpecification: "UsageSpecification",
        notfound: "notfound"
      }[e] || e) +
      "." +
      {
        AboutUs: "70760305",
        Agent: "ec517081",
        "AgentCenter~AgentRecommendList~AgentSquare": "2e7e7562",
        AgentCenter: "a1add184",
        AgentRecommendList: "ee73327c",
        AgentSquare: "6df40a9d",
        AgentShare: "97120001",
        Agreement: "3858fbec",
        AgreementApp: "f4f086dc",
        "Apply~ApplyAndLogin~LoginNew~NewHome": "56f54a88",
        Apply: "a54ecd03",
        "ApplyAndLogin~LoginNew~NewHome": "59bea4e9",
        ApplyAndLogin: "e0a7616e",
        LoginNew: "41c7514c",
        NewHome: "6fc05b76",
        "BLog~BLogApp~CollegeLogin~Detail~ForgetPwd~GlmsDetail~GlmsDetailWeb~LightInteraction~Login~Login_MD5~53be352b":
          "9871952e",
        "BLog~BLogApp~Detail~GlmsDetail~GlmsDetailWeb~LightInteraction~MiniAppHome":
          "6d91e67e",
        "BLog~BLogApp": "27c6eb8a",
        BLog: "38dcf178",
        BLogApp: "beddc4c1",
        "Detail~GlmsDetail~GlmsDetailWeb~Home~MiniAppHome~RegisterSuccess":
          "c1c5de97",
        "Detail~GlmsDetail~GlmsDetailWeb~Home~MiniAppHome": "f65d9349",
        Detail: "d45476fe",
        GlmsDetail: "b09c470b",
        GlmsDetailWeb: "25fd51e5",
        MiniAppHome: "7c547496",
        LightInteraction: "031fa711",
        "CollegeLogin~Login~Login_MD5": "ae449712",
        CollegeLogin: "907d928f",
        "Login~Login_MD5": "c7239d03",
        Login: "08fe671a",
        Login_MD5: "2cbc055f",
        ForgetPwd: "c771e144",
        Coffee: "e35c268f",
        CoffeeShare: "2e4b848e",
        CoffeeSharePc: "27804c1f",
        "Home~RegisterSuccess": "2feaad1c",
        Home: "cddfaa64",
        RegisterSuccess: "c484b7f5",
        DevDay: "9f9bc3bf",
        DownLoad: "42b9e97f",
        FeedBack: "26af3d4e",
        Glms: "5d1a4815",
        HomePage: "f09d3a4f",
        InsideTestApply: "5966fc24",
        LicenseInformation: "c31c0b45",
        MoonFestival: "62c1c981",
        MoonFestivalShare: "3343eadc",
        PrivacyPolicy: "b5b97157",
        PrivacyPolicyApp: "fea92c72",
        PrivacyPolicyAppAndroid: "2d9b811c",
        ProductFunction: "408a1e5b",
        Prompt: "f8d2cef1",
        PromptApp: "6260d845",
        PureDisplay: "18518b25",
        Report: "1315a47d",
        SysUpgrade: "bdeffe97",
        ThirdLogin: "370d64a4",
        UsageSpecification: "548bcafd",
        "chunk-3d9a00d5": "46fcd5a5",
        "chunk-76d58a4a": "a4139e3d",
        notfound: "a4927adc"
      }[e] +
      ".js"
    );
  }
  function u(t) {
    if (o[t]) return o[t].exports;
    var n = (o[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, u), (n.l = !0), n.exports;
  }
  (u.e = function (e) {
    var t = [],
      n = {
        AboutUs: 1,
        Agent: 1,
        "AgentCenter~AgentRecommendList~AgentSquare": 1,
        AgentCenter: 1,
        AgentRecommendList: 1,
        AgentSquare: 1,
        AgentShare: 1,
        Agreement: 1,
        AgreementApp: 1,
        "Apply~ApplyAndLogin~LoginNew~NewHome": 1,
        Apply: 1,
        "ApplyAndLogin~LoginNew~NewHome": 1,
        ApplyAndLogin: 1,
        LoginNew: 1,
        NewHome: 1,
        "BLog~BLogApp~Detail~GlmsDetail~GlmsDetailWeb~LightInteraction~MiniAppHome": 1,
        "BLog~BLogApp": 1,
        BLog: 1,
        BLogApp: 1,
        "Detail~GlmsDetail~GlmsDetailWeb~Home~MiniAppHome": 1,
        Detail: 1,
        GlmsDetail: 1,
        GlmsDetailWeb: 1,
        MiniAppHome: 1,
        LightInteraction: 1,
        "CollegeLogin~Login~Login_MD5": 1,
        CollegeLogin: 1,
        "Login~Login_MD5": 1,
        ForgetPwd: 1,
        Coffee: 1,
        CoffeeShare: 1,
        CoffeeSharePc: 1,
        "Home~RegisterSuccess": 1,
        Home: 1,
        RegisterSuccess: 1,
        DevDay: 1,
        DownLoad: 1,
        FeedBack: 1,
        Glms: 1,
        HomePage: 1,
        InsideTestApply: 1,
        LicenseInformation: 1,
        MoonFestival: 1,
        MoonFestivalShare: 1,
        PrivacyPolicy: 1,
        PrivacyPolicyApp: 1,
        PrivacyPolicyAppAndroid: 1,
        ProductFunction: 1,
        Prompt: 1,
        PromptApp: 1,
        PureDisplay: 1,
        Report: 1,
        SysUpgrade: 1,
        UsageSpecification: 1,
        "chunk-3d9a00d5": 1,
        "chunk-76d58a4a": 1,
        notfound: 1
      };
    i[e]
      ? t.push(i[e])
      : 0 !== i[e] &&
        n[e] &&
        t.push(
          (i[e] = new Promise(function (t, n) {
            for (
              var o =
                  "css/" +
                  ({
                    AboutUs: "AboutUs",
                    Agent: "Agent",
                    "AgentCenter~AgentRecommendList~AgentSquare":
                      "AgentCenter~AgentRecommendList~AgentSquare",
                    AgentCenter: "AgentCenter",
                    AgentRecommendList: "AgentRecommendList",
                    AgentSquare: "AgentSquare",
                    AgentShare: "AgentShare",
                    Agreement: "Agreement",
                    AgreementApp: "AgreementApp",
                    "Apply~ApplyAndLogin~LoginNew~NewHome":
                      "Apply~ApplyAndLogin~LoginNew~NewHome",
                    Apply: "Apply",
                    "ApplyAndLogin~LoginNew~NewHome":
                      "ApplyAndLogin~LoginNew~NewHome",
                    ApplyAndLogin: "ApplyAndLogin",
                    LoginNew: "LoginNew",
                    NewHome: "NewHome",
                    "BLog~BLogApp~CollegeLogin~Detail~ForgetPwd~GlmsDetail~GlmsDetailWeb~LightInteraction~Login~Login_MD5~53be352b":
                      "BLog~BLogApp~CollegeLogin~Detail~ForgetPwd~GlmsDetail~GlmsDetailWeb~LightInteraction~Login~Login_MD5~53be352b",
                    "BLog~BLogApp~Detail~GlmsDetail~GlmsDetailWeb~LightInteraction~MiniAppHome":
                      "BLog~BLogApp~Detail~GlmsDetail~GlmsDetailWeb~LightInteraction~MiniAppHome",
                    "BLog~BLogApp": "BLog~BLogApp",
                    BLog: "BLog",
                    BLogApp: "BLogApp",
                    "Detail~GlmsDetail~GlmsDetailWeb~Home~MiniAppHome~RegisterSuccess":
                      "Detail~GlmsDetail~GlmsDetailWeb~Home~MiniAppHome~RegisterSuccess",
                    "Detail~GlmsDetail~GlmsDetailWeb~Home~MiniAppHome":
                      "Detail~GlmsDetail~GlmsDetailWeb~Home~MiniAppHome",
                    Detail: "Detail",
                    GlmsDetail: "GlmsDetail",
                    GlmsDetailWeb: "GlmsDetailWeb",
                    MiniAppHome: "MiniAppHome",
                    LightInteraction: "LightInteraction",
                    "CollegeLogin~Login~Login_MD5":
                      "CollegeLogin~Login~Login_MD5",
                    CollegeLogin: "CollegeLogin",
                    "Login~Login_MD5": "Login~Login_MD5",
                    Login: "Login",
                    Login_MD5: "Login_MD5",
                    ForgetPwd: "ForgetPwd",
                    Coffee: "Coffee",
                    CoffeeShare: "CoffeeShare",
                    CoffeeSharePc: "CoffeeSharePc",
                    "Home~RegisterSuccess": "Home~RegisterSuccess",
                    Home: "Home",
                    RegisterSuccess: "RegisterSuccess",
                    DevDay: "DevDay",
                    DownLoad: "DownLoad",
                    FeedBack: "FeedBack",
                    Glms: "Glms",
                    HomePage: "HomePage",
                    InsideTestApply: "InsideTestApply",
                    LicenseInformation: "LicenseInformation",
                    MoonFestival: "MoonFestival",
                    MoonFestivalShare: "MoonFestivalShare",
                    PrivacyPolicy: "PrivacyPolicy",
                    PrivacyPolicyApp: "PrivacyPolicyApp",
                    PrivacyPolicyAppAndroid: "PrivacyPolicyAppAndroid",
                    ProductFunction: "ProductFunction",
                    Prompt: "Prompt",
                    PromptApp: "PromptApp",
                    PureDisplay: "PureDisplay",
                    Report: "Report",
                    SysUpgrade: "SysUpgrade",
                    ThirdLogin: "ThirdLogin",
                    UsageSpecification: "UsageSpecification",
                    notfound: "notfound"
                  }[e] || e) +
                  "." +
                  {
                    AboutUs: "344e698b",
                    Agent: "0ee5dfb7",
                    "AgentCenter~AgentRecommendList~AgentSquare": "948a0eca",
                    AgentCenter: "4f382d4e",
                    AgentRecommendList: "c614eca3",
                    AgentSquare: "afa9fe56",
                    AgentShare: "74fd7e1d",
                    Agreement: "cb08d41d",
                    AgreementApp: "f058efdd",
                    "Apply~ApplyAndLogin~LoginNew~NewHome": "ab0dd0e6",
                    Apply: "d8656656",
                    "ApplyAndLogin~LoginNew~NewHome": "281cee1d",
                    ApplyAndLogin: "3e6b614b",
                    LoginNew: "d65767b3",
                    NewHome: "6b37db1a",
                    "BLog~BLogApp~CollegeLogin~Detail~ForgetPwd~GlmsDetail~GlmsDetailWeb~LightInteraction~Login~Login_MD5~53be352b":
                      "31d6cfe0",
                    "BLog~BLogApp~Detail~GlmsDetail~GlmsDetailWeb~LightInteraction~MiniAppHome":
                      "68ea5abd",
                    "BLog~BLogApp": "d0f9ee92",
                    BLog: "1afc0874",
                    BLogApp: "f69db611",
                    "Detail~GlmsDetail~GlmsDetailWeb~Home~MiniAppHome~RegisterSuccess":
                      "31d6cfe0",
                    "Detail~GlmsDetail~GlmsDetailWeb~Home~MiniAppHome":
                      "d66d0419",
                    Detail: "05dac501",
                    GlmsDetail: "3deac625",
                    GlmsDetailWeb: "b07c4f0c",
                    MiniAppHome: "b3198adf",
                    LightInteraction: "7e540d6b",
                    "CollegeLogin~Login~Login_MD5": "264ecd4b",
                    CollegeLogin: "861eb5c2",
                    "Login~Login_MD5": "5aeaa445",
                    Login: "31d6cfe0",
                    Login_MD5: "31d6cfe0",
                    ForgetPwd: "fdffeba8",
                    Coffee: "179c4dbc",
                    CoffeeShare: "ee2c2cfe",
                    CoffeeSharePc: "9195b696",
                    "Home~RegisterSuccess": "a73c0ef7",
                    Home: "11bb043c",
                    RegisterSuccess: "39630f6c",
                    DevDay: "e77a24b5",
                    DownLoad: "5650024b",
                    FeedBack: "43d62b98",
                    Glms: "0623463c",
                    HomePage: "609f8a6e",
                    InsideTestApply: "d51ced14",
                    LicenseInformation: "de089c73",
                    MoonFestival: "c14e8895",
                    MoonFestivalShare: "c724f2e9",
                    PrivacyPolicy: "f00d19a4",
                    PrivacyPolicyApp: "c0274f8d",
                    PrivacyPolicyAppAndroid: "06f781a2",
                    ProductFunction: "a1cfeb88",
                    Prompt: "14a4f16b",
                    PromptApp: "32ffa909",
                    PureDisplay: "ff1e75f3",
                    Report: "ae50f5ac",
                    SysUpgrade: "206dbeb1",
                    ThirdLogin: "31d6cfe0",
                    UsageSpecification: "4022d8b8",
                    "chunk-3d9a00d5": "09b72944",
                    "chunk-76d58a4a": "aa346abf",
                    notfound: "437f891e"
                  }[e] +
                  ".css",
                a = u.p + o,
                r = document.getElementsByTagName("link"),
                c = 0;
              c < r.length;
              c++
            ) {
              var s = r[c],
                l = s.getAttribute("data-href") || s.getAttribute("href");
              if ("stylesheet" === s.rel && (l === o || l === a)) return t();
            }
            var d = document.getElementsByTagName("style");
            for (c = 0; c < d.length; c++) {
              (s = d[c]), (l = s.getAttribute("data-href"));
              if (l === o || l === a) return t();
            }
            var p = document.createElement("link");
            (p.rel = "stylesheet"),
              (p.type = "text/css"),
              (p.onload = t),
              (p.onerror = function (t) {
                var o = (t && t.target && t.target.src) || a,
                  r = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + o + ")"
                  );
                (r.code = "CSS_CHUNK_LOAD_FAILED"),
                  (r.request = o),
                  delete i[e],
                  p.parentNode.removeChild(p),
                  n(r);
              }),
              (p.href = 'http://127.0.0.1:8884/chatglm' + a);
            var f = document.getElementsByTagName("head")[0];
            f.appendChild(p);
          }).then(function () {
            i[e] = 0;
          }))
        );
    var o = a[e];
    if (0 !== o)
      if (o) t.push(o[2]);
      else {
        var r = new Promise(function (t, n) {
          o = a[e] = [t, n];
        });
        t.push((o[2] = r));
        var s,
          l = document.createElement("script");
        (l.charset = "utf-8"),
          (l.timeout = 120),
          u.nc && l.setAttribute("nonce", u.nc),
          (l.src = c(e));
        var d = new Error();
        s = function (t) {
          (l.onerror = l.onload = null), clearTimeout(p);
          var n = a[e];
          if (0 !== n) {
            if (n) {
              var o = t && ("load" === t.type ? "missing" : t.type),
                i = t && t.target && t.target.src;
              (d.message =
                "Loading chunk " + e + " failed.\n(" + o + ": " + i + ")"),
                (d.name = "ChunkLoadError"),
                (d.type = o),
                (d.request = i),
                n[1](d);
            }
            a[e] = void 0;
          }
        };
        var p = setTimeout(function () {
          s({ type: "timeout", target: l });
        }, 12e4);
        (l.onerror = l.onload = s), document.head.appendChild(l);
      }
    return Promise.all(t);
  }),
    (u.m = e),
    (u.c = o),
    (u.d = function (e, t, n) {
      u.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (u.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (u.t = function (e, t) {
      if ((1 & t && (e = u(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (u.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          u.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (u.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return u.d(t, "a", t), t;
    }),
    (u.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (u.p = "/"),
    (u.oe = function (e) {
      throw e;
    });
  var s = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var d = 0; d < s.length; d++) t(s[d]);
  var p = l;
  r.push([0, "chunk-vendors"]), n();
})({
  0: function (e, t, n) {
    e.exports = n("56d7");
  },
  "14a5": function (e, t, n) {
    "use strict";
    var o = n("564d"),
      i = n.n(o),
      a = "";
    function r(e, t, n) {
      n || (e && a !== e)
        ? ((a = e),
          t
            ? i.a.init({
                watermark_txt: "内容为AI生成仅供参考" + e,
                watermark_alpha: 0.05,
                watermark_fontsize: "12px",
                watermark_width: 150,
                watermark_height: 150,
                watermark_x_space: 40,
                watermark_y_space: 5,
                watermark_x: 0,
                watermark_y: 0,
                watermark_cols: 3
              })
            : i.a.init({
                watermark_txt: "内容为AI生成仅供参考" + e,
                watermark_alpha: 0.05,
                watermark_fontsize: "12px",
                watermark_width: 150,
                watermark_height: 150,
                watermark_x_space: 80,
                watermark_y_space: 10,
                watermark_x: 0,
                watermark_y: 0,
                watermark_cols: 3
              }))
        : i.a.remove();
    }
    function c() {
      i.a.load({ watermark_alpha: 0, watermark_txt: " " });
    }
    t["a"] = { init: r, remove: c };
  },
  1607: function (e, t, n) {
    "use strict";
    n.d(t, "f", function () {
      return d;
    }),
      n.d(t, "e", function () {
        return r;
      }),
      n.d(t, "d", function () {
        return c;
      }),
      n.d(t, "a", function () {
        return u;
      }),
      n.d(t, "c", function () {
        return s;
      }),
      n.d(t, "b", function () {
        return l;
      });
    var o = n("c8fc"),
      i = (n("056d"), n("3c3b")),
      a = n.n(i),
      r = function (e, t) {
        var n = t;
        "object" === Object(o["a"])(t) && (n = JSON.stringify(t)),
          localStorage.setItem(e, n);
      },
      c = function (e, t) {
        var n = localStorage.getItem(e);
        return n && "undefined" !== n ? (t ? JSON.parse(n) : n) : "";
      },
      u = "chatglm_apply_phone_number",
      s = "prompt_visited_list",
      l = "detail_init_page_show_time";
    function d(e) {
      var t = a()(),
        n = t.format("YYYY-MM-DD"),
        o = c(e);
      return (!o || n > o) && (r(e, n), !0);
    }
  },
  "19fe": function (e, t, n) {},
  "1b62": function (e, t, n) {
    "use strict";
    (function (e) {
      var o = n("9da1"),
        i = n("e3c6"),
        a =
          (n("6006"),
          n("43bf"),
          n("ef53"),
          n("0637"),
          n("65ee"),
          n("c2a1"),
          n("18c7"),
          n("25e19")),
        r = n.n(a),
        c = n("4f8a"),
        u = n("b893"),
        s = n("88da"),
        l = n("e576"),
        d = ["Detail", "new-home-page", "GlmsDetail", "agent", "agent-center"];
      t["a"] = {
        data: function () {
          return {
            markdownOptions: {
              markdownIt: { linkify: !1, html: !0 },
              linkAttributes: {
                attrs: {
                  class: "markdown_link",
                  target: "_blank",
                  rel: "noopener"
                }
              }
            },
            scrollTarget: ".session-block",
            limitLength: 2e3,
            historyListLength: 50,
            timeInterval: 10,
            computedHgtDelay: 30,
            scrollBotmDelay: 50,
            html2CanvasConfig: {
              useCORS: !0,
              letterRendering: !0,
              scale: window.devicePixelRatio < 2 ? 2 : window.devicePixelRatio
            }
          };
        },
        computed: {
          userIsLogin: function () {
            return u["a"].isLogin;
          }
        },
        methods: {
          download: function (e, t) {
            var n = this;
            return Object(i["a"])(
              Object(o["a"])().mark(function i() {
                return Object(o["a"])().wrap(function (o) {
                  while (1)
                    switch ((o.prev = o.next)) {
                      case 0:
                        return o.abrupt(
                          "return",
                          new Promise(function (o, i) {
                            setTimeout(function () {
                              var i = Object.assign(n.html2CanvasConfig, t);
                              r()(e, i).then(function (e) {
                                var n = e.toDataURL("image/png"),
                                  i = document.createElement("a");
                                document.body.appendChild(i),
                                  (i.href = n),
                                  (i.download = t.name),
                                  i.click(),
                                  o();
                              });
                            }, 100);
                          })
                        );
                      case 1:
                      case "end":
                        return o.stop();
                    }
                }, i);
              })
            )();
          },
          htmlToImg: function (e) {
            var t = this;
            return Object(i["a"])(
              Object(o["a"])().mark(function n() {
                return Object(o["a"])().wrap(function (n) {
                  while (1)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return n.abrupt(
                          "return",
                          new Promise(function (n, o) {
                            setTimeout(function () {
                              r()(e, t.html2CanvasConfig).then(function (e) {
                                var t = e.toDataURL("image/png");
                                n(t);
                              });
                            }, 100);
                          })
                        );
                      case 1:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )();
          },
          sessionBlockHeight: function () {
            this.isMobile
              ? setTimeout(function () {
                  var t = e(window).innerHeight() || 0,
                    n = e(".search-box").innerHeight() || 0,
                    o = e("header").innerHeight() || 0,
                    i = e(".downloadBanner").innerHeight() || 0,
                    a = t - o - n - i;
                  e(".session-block").innerHeight(Math.ceil(a));
                }, this.computedHgtDelay)
              : e(".session-block").css("height", "100%");
          },
          scrollToBottom: function (t) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0;
            setTimeout(function () {
              var o,
                i =
                  null === (o = e(t)[0]) || void 0 === o
                    ? void 0
                    : o.scrollHeight;
              i &&
                (n
                  ? e(t).animate({ scrollTop: i + "px" }, n)
                  : e(t).scrollTop(i));
            }, this.scrollBotmDelay);
          },
          modelNavigateHeight: function () {
            var t = e(window).width();
            if (t <= 768) {
              var n = e(window).innerHeight() || 0,
                o = e(".header-bar").innerHeight() || 0,
                i = e("#exitpanel").innerHeight() || 0,
                a = e("#addsession").outerHeight() || 0,
                r = n - o;
              e("#modelnavigate").innerHeight(r),
                e("#sessionlist").innerHeight(r),
                e("#sessioncontent").innerHeight(r - i - a);
            } else
              e("#modelnavigate").innerHeight(135),
                e("#sessionlist").innerHeight("100%");
          },
          judgeIsMobile: function () {},
          navigateBoxWidth: function () {
            var t = e(window).innerWidth();
            if (t < 1480) {
              var n = Math.round((t / 1680) * 100) / 100;
              e(".pc-navigate-box").css({ transform: "scale(".concat(n, ")") });
            } else e(".pc-navigate-box").css({ transform: "scale(1)" });
          },
          checkPwd: function (e) {
            return /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d||!|@|#|￥|%|&|*|（|）|—|+|~]{8,20}/.test(
              e
            );
          },
          copy: function (e) {
            var t = this,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "拷贝成功！";
            this.$copyText(e)
              .then(function () {
                n && t.$message.success(n);
              })
              ["catch"](function (e) {
                t.$message.error("拷贝失败！");
              });
          },
          goToLogin: function (e) {
            if (c["n"]) Object(s["a"])("user_not_login", { msg: e });
            else if (Object(c["o"])()) {
              var t, n;
              null === (t = window.wx) ||
                void 0 === t ||
                null === (n = t.miniProgram) ||
                void 0 === n ||
                n.redirectTo({ url: "/pages/login/login" });
            } else {
              var o = location.pathname + location.search;
              "/applyAndLogin" !== location.pathname &&
                "/" !== location.pathname &&
                this.$router.replace({
                  path: "/applyAndLogin",
                  query: { redirect: o }
                });
            }
          },
          toPath: function (e) {
            e && this.$router.push(e);
          },
          sendPv: l["i"],
          sendPf: l["h"],
          sendCl: l["g"]
        },
        mounted: function () {
          d.includes(this.$options.name) &&
            Object(u["c"])(c["c"], c["e"]) &&
            (Object(s["a"])("jsBridgeReady"),
            setTimeout(function () {
              Object(s["a"])("pageLoaded");
            }, 10),
            document.addEventListener("visibilitychange", function () {
              "visible" === document.visibilityState &&
                "true" !== Object(l["d"])("jsbReady") &&
                (Object(s["a"])("jsBridgeReady"),
                Object(l["h"])({ md: "jsBridgeReadyRetry" }));
            }));
        }
      };
    }).call(this, n("1d05"));
  },
  "1f1f": function (e, t, n) {},
  3191: function (e, t, n) {
    "use strict";
    n.d(t, "h", function () {
      return p;
    }),
      n.d(t, "k", function () {
        return f;
      }),
      n.d(t, "F", function () {
        return g;
      }),
      n.d(t, "p", function () {
        return m;
      }),
      n.d(t, "q", function () {
        return b;
      }),
      n.d(t, "o", function () {
        return A;
      }),
      n.d(t, "v", function () {
        return w;
      }),
      n.d(t, "l", function () {
        return S;
      }),
      n.d(t, "f", function () {
        return D;
      }),
      n.d(t, "D", function () {
        return T;
      }),
      n.d(t, "L", function () {
        return k;
      }),
      n.d(t, "x", function () {
        return j;
      }),
      n.d(t, "M", function () {
        return C;
      }),
      n.d(t, "y", function () {
        return E;
      }),
      n.d(t, "s", function () {
        return H;
      }),
      n.d(t, "N", function () {
        return M;
      }),
      n.d(t, "H", function () {
        return B;
      }),
      n.d(t, "r", function () {
        return N;
      }),
      n.d(t, "j", function () {
        return R;
      }),
      n.d(t, "u", function () {
        return x;
      }),
      n.d(t, "K", function () {
        return F;
      }),
      n.d(t, "z", function () {
        return U;
      }),
      n.d(t, "t", function () {
        return W;
      }),
      n.d(t, "Q", function () {
        return q;
      }),
      n.d(t, "i", function () {
        return Y;
      }),
      n.d(t, "e", function () {
        return z;
      }),
      n.d(t, "n", function () {
        return Q;
      }),
      n.d(t, "E", function () {
        return J;
      }),
      n.d(t, "w", function () {
        return K;
      }),
      n.d(t, "I", function () {
        return Z;
      }),
      n.d(t, "J", function () {
        return ee;
      }),
      n.d(t, "b", function () {
        return te;
      }),
      n.d(t, "a", function () {
        return ne;
      }),
      n.d(t, "c", function () {
        return oe;
      }),
      n.d(t, "A", function () {
        return ie;
      }),
      n.d(t, "d", function () {
        return ae;
      }),
      n.d(t, "G", function () {
        return re;
      }),
      n.d(t, "m", function () {
        return ce;
      }),
      n.d(t, "O", function () {
        return ue;
      }),
      n.d(t, "C", function () {
        return se;
      }),
      n.d(t, "B", function () {
        return le;
      }),
      n.d(t, "P", function () {
        return de;
      }),
      n.d(t, "g", function () {
        return pe;
      });
    var o = n("9da1"),
      i = n("e3c6"),
      a = (n("2638"), n("8037"), n("b775")),
      r = n("e576"),
      c = n("4f14"),
      u = n.n(c),
      s = n("4f8a"),
      l = "https://chatglm.cn/chatglm",
      d = "https://chatglm.cn/extra";
    function p() {
      return Object(a["e"])(
        {
          url: "".concat(l, "/backend-api/v1/operation_data?tag=clientConfig"),
          method: "get"
        },
        { withToken: !1, loading: !1, errorMessageShow: !1 }
      );
    }
    function f() {
      return Object(a["e"])(
        {
          url: "".concat(l, "/backend-api/v1/operation_data?tag=text2img"),
          method: "get"
        },
        { withToken: !1, loading: !1, errorMessageShow: !1 }
      );
    }
    function g(e) {
      return (
        (e = Object.assign(e, Object(r["e"])())),
        Object(a["c"])(
          {
            url: "".concat(l, "/backend-api/v1/user/signup"),
            method: "post",
            data: e
          },
          { withToken: !1 },
          { text: "注册中..." }
        )
      );
    }
    function m(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = Object(i["a"])(
          Object(o["a"])().mark(function e(t) {
            return Object(o["a"])().wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      Object(a["c"])({
                        url: "".concat(
                          l,
                          "/backend-api/v1/conversation/share/create"
                        ),
                        method: "post",
                        data: t
                      })
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        h.apply(this, arguments)
      );
    }
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = Object(i["a"])(
          Object(o["a"])().mark(function e() {
            var t;
            return Object(o["a"])().wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t = s["n"] ? (s["m"] ? "android" : "iOS") : "h5"),
                      e.abrupt(
                        "return",
                        Object(a["c"])({
                          url: ""
                            .concat(
                              l,
                              "/backend-api/v1/operation_data?tag=hi_app_new&tm="
                            )
                            .concat(t),
                          method: "get"
                        })
                      )
                    );
                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        v.apply(this, arguments)
      );
    }
    function A(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = Object(i["a"])(
          Object(o["a"])().mark(function e(t) {
            return Object(o["a"])().wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      Object(a["c"])({
                        url: ""
                          .concat(l, "/backend-api/v1/conversation/share/get/")
                          .concat(t),
                        method: "get"
                      })
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        L.apply(this, arguments)
      );
    }
    function w(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = Object(i["a"])(
          Object(o["a"])().mark(function e(t) {
            return Object(o["a"])().wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      Object(a["c"])({
                        url: ""
                          .concat(
                            l,
                            "/backend-api/v1/conversation/share/import/"
                          )
                          .concat(t, "?bot=")
                          .concat(Object(r["d"])("pds") || "zpqy"),
                        method: "get"
                      })
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        _.apply(this, arguments)
      );
    }
    function S() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = Object(i["a"])(
          Object(o["a"])().mark(function e() {
            return Object(o["a"])().wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      Object(a["c"])({
                        url: "".concat(
                          l,
                          "/backend-api/v1/user/pinned_conversation"
                        ),
                        method: "get"
                      })
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        y.apply(this, arguments)
      );
    }
    function D(e) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = Object(i["a"])(
          Object(o["a"])().mark(function e(t) {
            return Object(o["a"])().wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      Object(a["c"])(
                        {
                          url: ""
                            .concat(
                              l,
                              "/backend-api/v1/user/pinned_conversation/"
                            )
                            .concat(t),
                          method: "delete"
                        },
                        { loading: !1 }
                      )
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        O.apply(this, arguments)
      );
    }
    function T(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = Object(i["a"])(
          Object(o["a"])().mark(function e(t) {
            return Object(o["a"])().wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      Object(a["c"])(
                        {
                          url: ""
                            .concat(
                              l,
                              "/backend-api/v1/user/pinned_conversation/"
                            )
                            .concat(t),
                          method: "post"
                        },
                        { loading: !1 }
                      )
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        I.apply(this, arguments)
      );
    }
    function k(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = Object(i["a"])(
          Object(o["a"])().mark(function e(t) {
            return Object(o["a"])().wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      Object(a["c"])(
                        {
                          url: "".concat(
                            l,
                            "/backend-api/v1/inspiration/operation"
                          ),
                          method: "post",
                          data: t
                        },
                        { loading: !1 }
                      )
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        P.apply(this, arguments)
      );
    }
    function j(e) {
      return (
        delete e.encrypt_phone,
        (e = Object.assign(e, Object(r["e"])())),
        Object(a["c"])(
          {
            url: "".concat(l, "/backend-api/v1/user/login"),
            method: "post",
            data: e
          },
          { withToken: !1 },
          { text: "登录中..." }
        )
      );
    }
    function C(e) {
      return Object(a["c"])({
        url: "".concat(l, "/backend-api/v1/user/resetpass"),
        method: "post",
        data: e
      });
    }
    function E() {
      return Object(a["c"])(
        { url: "".concat(l, "/backend-api/v1/user/logout"), method: "post" },
        { useRefreshToken: !0 },
        { text: "退出登录中..." }
      );
    }
    function H() {
      return Object(a["c"])(
        {
          url: "".concat(l, "/backend-api/v3/user/info"),
          method: "get",
          headers: { "Content-Type": "application/x-www-form-urlencoded" }
        },
        { loading: !1 }
      );
    }
    function M(e) {
      return Object(a["c"])(
        {
          url: ""
            .concat(l, "/backend-api/v1/user/register_university?institution=")
            .concat(e),
          method: "get"
        },
        { loading: !1 }
      );
    }
    function B(e) {
      return (
        delete e.md5,
        (e = Object.assign(e, Object(r["e"])())),
        Object(a["c"])(
          {
            url: "".concat(l, "/backend-api/v1/user/checkphone"),
            method: "post",
            data: e
          },
          { withToken: !1 },
          { text: "发送中..." }
        )
      );
    }
    function N(e) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = Object(i["a"])(
          Object(o["a"])().mark(function e(t) {
            return Object(o["a"])().wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      Object(a["c"])(
                        {
                          url: "".concat(l, "/backend-api/v1/conversation"),
                          method: "post",
                          data: t
                        },
                        { loading: !1 }
                      )
                    );
                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        G.apply(this, arguments)
      );
    }
    function R(e) {
      return Object(a["c"])(
        {
          url: "".concat(l, "/backend-api/v1/examples"),
          method: "get",
          params: e || { max_num: 3 }
        },
        { loading: !1 }
      );
    }
    function x() {
      return Object(a["c"])(
        { url: "".concat(l, "/backend-api/v1/model_version"), method: "get" },
        { loading: !1 }
      );
    }
    function F(e) {
      return Object(a["c"])(
        { url: "".concat(l, "/backend-api/v1/score"), method: "post", data: e },
        { loading: !1 }
      );
    }
    function U(e) {
      return Object(a["c"])(
        {
          url: ""
            .concat(l, "/backend-api/v1/manualstop?__requestid=")
            .concat((null === e || void 0 === e ? void 0 : e.task_id) || ""),
          method: "post",
          data: e
        },
        { loading: !1 }
      );
    }
    function W() {
      return Object(a["c"])(
        { url: "".concat(l, "/backend-api/v1/user/imgCode"), method: "post" },
        { loading: !1 }
      );
    }
    function q(e) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = Object(i["a"])(
          Object(o["a"])().mark(function e(t) {
            return Object(o["a"])().wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      Object(a["c"])(
                        {
                          url: "".concat(l, "/backend-api/v3/user/verify"),
                          method: "post",
                          data: t
                        },
                        { loading: !1 }
                      )
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        V.apply(this, arguments)
      );
    }
    function Y(e) {
      return Object(a["c"])(
        {
          url: "".concat(l, "/backend-api/v1/conversation/list"),
          method: "get",
          params: e || { size: 50, offset: 0, type: "default" }
        },
        { loading: !1 }
      );
    }
    function z(e) {
      return Object(a["c"])({
        url: "".concat(l, "/backend-api/v1/conversation/delete/").concat(e),
        method: "get"
      });
    }
    function Q(e, t) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = Object(i["a"])(
          Object(o["a"])().mark(function e(t, n) {
            var i, r;
            return Object(o["a"])().wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      Object(a["c"])({
                        url: ""
                          .concat(l, "/backend-api/v1/conversation/")
                          .concat(t),
                        method: "get",
                        params: n
                      })
                    );
                  case 2:
                    if (
                      ((r = e.sent),
                      401 !==
                        (null === r ||
                        void 0 === r ||
                        null === (i = r.error) ||
                        void 0 === i
                          ? void 0
                          : i.status))
                    ) {
                      e.next = 6;
                      break;
                    }
                    return (
                      window.VueInstance.goToLogin("getSessionById"),
                      e.abrupt("return", { result: [] })
                    );
                  case 6:
                    return e.abrupt("return", r);
                  case 7:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        $.apply(this, arguments)
      );
    }
    function J() {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = Object(i["a"])(
          Object(o["a"])().mark(function e() {
            return Object(o["a"])().wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      Object(a["e"])(
                        {
                          url: "".concat(l, "/backend-api/v1/user/refresh"),
                          method: "post"
                        },
                        { useRefreshToken: !0, loading: !1 }
                      )
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        X.apply(this, arguments)
      );
    }
    function K(e) {
      return Object(a["c"])(
        {
          url: "".concat(l, "/backend-api/v1/user/internal_application"),
          method: "post",
          data: e
        },
        { withToken: !1 }
      );
    }
    function Z(e) {
      return Object(a["c"])({
        url: "".concat(l, "/backend-api/v1/user/send_sms"),
        method: "post",
        data: e
      });
    }
    function ee(e) {
      return Object(a["c"])(
        {
          url: ""
            .concat(l, "/backend-api/v1/stream_context?__requestid=")
            .concat(e.__requestid),
          method: "post",
          data: e
        },
        { loading: !1 }
      );
    }
    function te(e) {
      return Object(a["c"])(
        {
          url: "".concat(l, "/backend-api/v1/user/real_name_authentication"),
          method: "post",
          data: e
        },
        { loading: !1 }
      );
    }
    function ne(e) {
      return Object(a["c"])(
        {
          url: "".concat(l, "/backend-api/v3/user/agree_experience"),
          method: "post",
          data: e
        },
        { loading: !1 }
      );
    }
    function oe(e) {
      return Object(a["c"])(
        {
          url: "".concat(l, "/backend-api/v2/user/login?satoken=").concat(e),
          method: "get"
        },
        { loading: !1 }
      );
    }
    function ie(e) {
      return Object(a["c"])(
        {
          url: ""
            .concat(l, "/backend-api/v3/user/teen_open?password=")
            .concat(e),
          method: "get"
        },
        { loading: !1 }
      );
    }
    function ae(e) {
      return Object(a["c"])(
        {
          url: ""
            .concat(l, "/backend-api/v3/user/teen_close?password=")
            .concat(e),
          method: "get"
        },
        { loading: !1 }
      );
    }
    function re(e) {
      return Object(a["c"])(
        {
          url: ""
            .concat(l, "/backend-api/v3/user/teen_privilidge?password=")
            .concat(e),
          method: "get"
        },
        { loading: !1 }
      );
    }
    function ce() {
      return Object(a["c"])(
        {
          url: "".concat(l, "/backend-api/v3/user/get_remote_ip"),
          method: "get"
        },
        { loading: !1 }
      );
    }
    function ue(e) {
      var t = e.file,
        n = e.url,
        o = new FormData();
      return (
        t && o.append("file", t),
        n && o.append("url", n),
        u()({
          url: "".concat(d, "/upload"),
          method: "POST",
          headers: { "Content-Type": "multipart/form-data" },
          data: o
        })
      );
    }
    function se(e) {
      return Object(a["c"])(
        {
          url: "".concat(l, "/pdf/v1/parse"),
          method: "POST",
          timeout: 6e4,
          data: e
        },
        { loading: !1 }
      );
    }
    function le(e) {
      return Object(a["c"])(
        {
          url: ""
            .concat(l, "/pdf/v1/parse/progress?uuid=")
            .concat(e, "&_t=")
            .concat(Date.now()),
          method: "GET"
        },
        { loading: !1 }
      );
    }
    function de(e) {
      var t = new FormData();
      return (
        e && t.append("file", e),
        Object(a["c"])(
          {
            url: "".concat(l, "/backend-api/v1/image_upload"),
            method: "post",
            data: t
          },
          { loading: !1 }
        )
      );
    }
    function pe(e) {
      return Object(a["c"])({
        url: "".concat(l, "/backend-api/v1/feed_back"),
        method: "post",
        data: e
      });
    }
  },
  "42a5": function (e, t, n) {
    "use strict";
    var o = n("d04a");
    t["a"] = new o["default"]();
  },
  4360: function (e, t, n) {
    "use strict";
    var o = n("d04a"),
      i = n("6c71"),
      a = {
        roles: function (e) {
          return e.User && e.User.userInfo && [e.User.userInfo.userType];
        },
        userInfo: function (e) {
          return e.User && e.User.userInfo;
        }
      },
      r = a,
      c = n("ca39"),
      u = (n("6006"), n("3191")),
      s = n("5f87"),
      l = n("3c3b"),
      d = n.n(l),
      p = n("a18c"),
      f = n("93f3"),
      g = n("e576"),
      m = null,
      h = null,
      b = null,
      v = {
        namespaced: !0,
        state: {
          taskId: "",
          isSearching: !1,
          isShowMenu: !1,
          isMobile: !0,
          teenagerslimitType: "limit",
          showTeenagersModel: "hidden",
          version: "",
          userInfo: "",
          userInfoLoad: !1,
          hashCode: "",
          code: "",
          applyingPhoneNumber: "",
          isCollegeUser: {},
          isFisrtViewAfterApply: !1,
          institution: "",
          conversationType: "default",
          documentInfo: {},
          showTryDialog: !1,
          sharedConversationId: "",
          configuration: {},
          operationData: {},
          isLandscape: 1 === +Object(g["d"])("landscape"),
          isWechatTab: !0
        },
        mutations: {
          SET_WECHAT_TAB: function (e, t) {
            e.isWechatTab = t;
          },
          RESET_USER_STATUS: function (e) {
            (e.userInfo = ""), (e.userInfoLoad = !1);
          },
          SET_IS_FIRST_VIEW_AFTER_APPLY: function (e, t) {
            e.isFisrtViewAfterApply = t;
          },
          SET_APPLY_NUMBER: function (e, t) {
            e.applyingPhoneNumber = t;
          },
          SET_COLLEGE_STATUS: function (e, t) {
            e.isCollegeUser = t;
          },
          SET_USERINFO: function (e, t) {
            e.userInfo = t;
          },
          SET_USERINFO_LOADED: function (e, t) {
            e.userInfoLoad = t;
          },
          SET_ISMOBILE: function (e, t) {
            e.isMobile = t;
          },
          SET_VERSION: function (e, t) {
            e.version = t;
          },
          SET_IS_SHOW_MENU: function (e, t) {
            e.isShowMenu = t;
          },
          SET_SEARCH_STATUS: function (e, t) {
            e.isSearching = t;
          },
          SET_TASK_ID: function (e, t) {
            (e.taskId = t), localStorage.setItem("last_conversation_id", t);
          },
          SET_HASH_CODE: function (e, t) {
            e.hashCode = t;
          },
          SET_CODE: function (e, t) {
            e.code = t;
          },
          SET_TOKEN: function (e, t) {
            e.code = t;
          },
          SET_TEENAGERS_MODEL: function (e, t) {
            e.showTeenagersModel = t;
          },
          SET_TEENAGERS_LIMIT_TYPE: function (e, t) {
            e.teenagerslimitType = t;
          },
          SET_CONVERSATION_TYPE: function (e, t) {
            e.conversationType = t;
          },
          SET_DOCUMENT_INFO: function (e, t) {
            e.documentInfo = t;
          },
          SET_SELECT_SCHOOL_MODEL: function (e, t) {
            e.showSelectSchoolModel = t;
          },
          SET_INSTITUTION: function (e, t) {
            e.institution = t;
          },
          SET_SHOWTRYDIALOG: function (e, t) {
            e.showTryDialog = t;
          },
          SET_SHAREDCONVERSATIONID: function (e, t) {
            e.sharedConversationId = t;
          },
          SET_CONFIGURATION: function (e, t) {
            e.configuration = t;
          },
          SET_OPERATION_DATA: function (e, t) {
            e.operationData = t;
          }
        },
        actions: {
          Login: function (e, t) {
            e.commit;
            return new Promise(function (e, n) {
              Object(u["x"])(t)
                .then(function (t) {
                  var n = t || {},
                    o = n.status,
                    i = n.result;
                  0 === o && Object(s["g"])(i), e(t);
                })
                ["catch"](function (t) {
                  e(null === t || void 0 === t ? void 0 : t.data);
                });
            });
          },
          ThirdLogin: function (e, t) {
            e.commit;
            return new Promise(function (e, n) {
              Object(u["c"])(t)
                .then(function (t) {
                  var n = t || {},
                    o = n.status,
                    i = n.result;
                  0 === o && Object(s["g"])(i), e(t);
                })
                ["catch"](function (t) {
                  e(null === t || void 0 === t ? void 0 : t.data);
                });
            });
          },
          RefreshToken: function () {
            return new Promise(function (e, t) {
              Object(u["E"])()
                .then(function (t) {
                  var n = d()().add(2, "hour").format("YYYY-MM-DD HH:mm:ss");
                  Object(s["n"])(t.result.accessToken),
                    Object(s["o"])(n),
                    e(!0);
                })
                ["catch"](function (e) {
                  t(e);
                });
            });
          },
          GetVersionNum: function (e, t) {
            var n = e.commit;
            e.dispatch, e.state;
            return new Promise(function (e, t) {
              Object(u["u"])()
                .then(function (t) {
                  n("SET_VERSION", t.result), e();
                })
                ["catch"](function (e) {
                  t(e);
                });
            });
          },
          getClientConfig: function (e) {
            var t = e.commit;
            e._, e.state;
            return (
              b ||
              ((b = new Promise(function (e, n) {
                Object(u["h"])()
                  .then(function (n) {
                    if (!n)
                      return t("SET_CONFIGURATION", n.result || {}), void e({});
                    if (0 === n.status && "success" === n.message) {
                      var o = n.result || {};
                      t("SET_CONFIGURATION", o), e(o);
                    }
                  })
                  ["catch"](function () {
                    t("SET_CONFIGURATION", {}), e({});
                  });
              })),
              b)
            );
          },
          GetOperationData: function (e) {
            var t = e.commit;
            e._, e.state;
            return (
              h ||
              ((h = new Promise(function (e, n) {
                Object(u["k"])()
                  .then(function (n) {
                    if (!n)
                      return (
                        t("SET_OPERATION_DATA", n.result || {}), void e({})
                      );
                    if (0 === n.status && "success" === n.message) {
                      var o = n.result || {};
                      t("SET_OPERATION_DATA", o), e(o);
                    }
                  })
                  ["catch"](function () {
                    t("SET_OPERATION_DATA", {}), e({});
                  });
              })),
              h)
            );
          },
          GetUserInfo: function (e, t) {
            var n = e.commit,
              o =
                (e.dispatch,
                e.state,
                null === t || void 0 === t ? void 0 : t.forceUpdate);
            return (
              (m && !o) ||
                (m = new Promise(function (e, t) {
                  Object(u["s"])()
                    .then(function (t) {
                      var o = t.result || {};
                      f["a"] || (o.institution = ""),
                        n("SET_USERINFO", t.result),
                        e(t.result);
                    })
                    ["catch"](function (e) {
                      t(e);
                    })
                    ["finally"](function () {
                      n("SET_USERINFO_LOADED", !0);
                    });
                })),
              m
            );
          },
          LogOut: function (e, t) {
            e.commit;
            var n = e.dispatch;
            e.state;
            return new Promise(function (e, t) {
              Object(u["y"])()
                .then(function () {
                  n("HandleLogOut"), e();
                })
                ["catch"](function (e) {
                  n("HandleLogOut"), t(e);
                });
            });
          },
          GetColledgeStatus: function (e) {
            var t = e.commit;
            return new Promise(function (e, n) {
              Object(u["m"])()
                .then(function (e) {
                  e.result &&
                    "0" === e.result.status_code &&
                    t("SET_COLLEGE_STATUS", e.result);
                })
                ["catch"](function (e) {});
            });
          },
          HandleLogOut: function (e) {
            e.commit, e.state;
            Object(s["h"])(), Object(p["b"])();
          },
          RealNameAuth: function (e, t) {
            var n = e.state,
              o = e.commit;
            return new Promise(function (e, i) {
              Object(u["b"])(t)
                .then(function (t) {
                  var i = n.userInfo;
                  o(
                    "SET_USERINFO",
                    Object(c["a"])(
                      Object(c["a"])({}, i),
                      {},
                      { real_name_identify: !0 }
                    )
                  ),
                    e(t);
                })
                ["catch"](function (e) {
                  i(e);
                });
            });
          },
          AgreeExperience: function (e, t) {
            var n = e.state,
              o = e.commit,
              i = n.userInfo;
            return new Promise(function (e, n) {
              Object(u["a"])(t)
                .then(function (t) {
                  o(
                    "SET_USERINFO",
                    Object(c["a"])(
                      Object(c["a"])({}, i),
                      {},
                      { agree_experience: !0 }
                    )
                  ),
                    e(t);
                })
                ["catch"](function (e) {
                  n(e);
                });
            });
          }
        }
      },
      A = v,
      L =
        (n("ef53"),
        n("c2a1"),
        n("6eba"),
        n("3fa6"),
        n("f574"),
        n("759f"),
        n("2638"),
        n("b775")),
      w = "https://chatglm.cn/chatglm";
    function _() {
      return Object(L["e"])(
        { url: "".concat(w, "/backend-api/v1/new_task"), method: "get" },
        { withToken: !0, loading: !1 }
      );
    }
    function S(e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return Math.floor(Math.random() * e) + t;
    }
    function y(e) {
      var t,
        n = [];
      function o() {
        var e = n[n.length - 1] || 0;
        switch (e) {
          case 0:
            (t = S(3)), 0 === t || 1 === t ? n.push(1) : n.push(2);
            break;
          case 1:
            n.push(0);
            break;
          case 2:
            n.push(0);
            break;
          default:
            return 0;
        }
      }
      for (var i = 0; i < e; i++) i % 7 === 0 ? n.push(0) : o();
      return n;
    }
    function D(e) {
      for (var t = e.length, n = t - 1; n > 1; n--) {
        var o = Math.floor(Math.random() * (n + 1)),
          i = e[n];
        (e[n] = e[o]), (e[o] = i);
      }
      return e;
    }
    var O = n("1607"),
      T = y(100),
      I = y(100);
    function k(e, t, n) {
      for (var o = 0; o < t.length; o++)
        e = e.replaceAll(t[o], '<b class="bold">'.concat(t[o], "</b>"));
      return n ? '<div class="prompt-item__latest"></div>'.concat(e) : e;
    }
    var P = {
        namespaced: !0,
        state: { showPromptTab: !1, promptList: [], end: !1 },
        mutations: {
          SET_SHOW_PROMPT_STATUS: function (e, t) {
            e.showPromptTab = t;
          },
          SET_PROMPT_LIST: function (e, t) {
            e.promptList = t;
          }
        },
        getters: {
          showH5PromptPanel: function (e, t, n) {
            return (
              e.showPromptTab && n.Home.isMobile && e.promptList.length > 0
            );
          },
          showPcPromptPanel: function (e, t, n) {
            return (
              e.showPromptTab && !n.Home.isMobile && e.promptList.length > 0
            );
          },
          showList: function (e) {
            var t = Object(O["d"])(O["c"], !0) || [];
            return e.promptList.map(function (e, n) {
              return (
                (e.displayText = k(e.text, e.keyword, e.latest || !1)),
                t.indexOf(e.id) > -1 ? (e.visited = !0) : (e.visited = !1),
                (e.style = T[n]),
                e
              );
            });
          },
          leftList: function (e, t) {
            return t.showList
              .filter(function (e, t) {
                return t % 2 === 0;
              })
              .map(function (e, t) {
                return Object(c["a"])(
                  Object(c["a"])({}, e),
                  {},
                  { style: I[t] }
                );
              });
          },
          rightList: function (e, t) {
            return t.showList
              .filter(function (e, t) {
                return t % 2 === 1;
              })
              .concat()
              .map(function (e, t) {
                return Object(c["a"])(
                  Object(c["a"])({}, e),
                  {},
                  { style: T[t] }
                );
              });
          }
        },
        actions: {
          GetPromptList: function (e) {
            e.commit;
            return new Promise(function (e, t) {
              _()
                .then(function (e) {
                  0 === e.status || t(e.message || "请求错误");
                })
                ["catch"](function (e) {
                  t(e);
                });
            });
          }
        }
      },
      j = P,
      C = n("51b3"),
      E = (n("2197"), n("9685"), n("e508"), null),
      H = {
        namespaced: !0,
        state: {
          showPromptTab: !1,
          promptList: [],
          selectIndex: 0,
          sideStatus: 0,
          showH5PromptPanel: !1,
          end: !1,
          appNewList: []
        },
        mutations: {
          SET_SIDE_STATUS: function (e, t) {
            e.sideStatus = t;
          },
          SET_SHOW_PROMPT_STATUS: function (e, t) {
            e.showPromptTab = t;
          },
          SET_PROMPT_LIST: function (e, t) {
            e.promptList = t;
          },
          SET_SELECT_INDEX: function (e, t) {
            e.selectIndex = t;
          },
          SET_SHOW_H5_PROMPT_STATUS: function (e, t) {
            e.showH5PromptPanel = t;
          },
          SET_APPNEW_LIST: function (e, t) {
            e.appNewList = t;
          }
        },
        getters: {
          keys: function (e) {
            var t = e.promptList.filter(function (e) {
              return "APP_New" !== e.key && 0 !== e.tab_use;
            });
            return t.map(function (e) {
              return e.key || "";
            });
          },
          allList: function (e, t) {
            var n = [],
              o = [],
              i = t.detail || [];
            i.forEach(function (e) {
              n = n.concat(e);
            });
            for (var a = {}, r = 0; r < n.length; r++) {
              var c = n[r] || {};
              a[c.id] || (o.push(c), (a[c.id] = !0));
            }
            return o;
          },
          detail: function (e) {
            return e.promptList.map(function (e) {
              return e.detail || {};
            });
          },
          currentDetalList: function (e, t) {
            var n = t.detail[e.selectIndex] || [];
            if (0 === e.selectIndex) {
              var o = t.allList.slice(n.length);
              return [].concat(Object(C["a"])(n), Object(C["a"])(D(o)));
            }
            return n;
          },
          showList: function (e, t) {
            return t.currentDetalList.map(function (e, t) {
              return (e.displayText = e.text), (e.style = 1), e;
            });
          },
          leftList: function (e, t) {
            return t.currentDetalList
              .filter(function (e, t) {
                return t % 2 === 0;
              })
              .map(function (e, t) {
                return Object(c["a"])(Object(c["a"])({}, e), {}, { style: 1 });
              });
          },
          rightList: function (e, t) {
            return t.currentDetalList
              .filter(function (e, t) {
                return t % 2 === 1;
              })
              .concat()
              .map(function (e, t) {
                return Object(c["a"])(Object(c["a"])({}, e), {}, { style: 1 });
              });
          }
        },
        actions: {
          GetPromptList: function (e) {
            var t = e.commit;
            return (
              E ||
              ((E = new Promise(function (e, n) {
                _()
                  .then(function (o) {
                    if (0 === o.status) {
                      var i = o.result || [];
                      t("SET_PROMPT_LIST", i);
                      var a = Object(C["a"])(i),
                        r = a.filter(function (e) {
                          return "APP_New" === e.key;
                        });
                      r.length > 0 && t("SET_APPNEW_LIST", r[0].detail), e();
                    } else n(o.message || "请求错误");
                  })
                  ["catch"](function (e) {
                    n(e);
                  });
              })),
              E)
            );
          }
        }
      },
      M = H,
      B =
        (n("2e1e"),
        {
          namespaced: !0,
          state: {
            bot: null,
            isShare: !1,
            dataList: [],
            animationReviewFromHistory: !1,
            reviewFromHistory: !1,
            thumbInputFocus: !1,
            initStatus: !0,
            end: !1,
            anonymousId: "",
            isDarkMode: 1 === +Object(g["d"])("dark"),
            questionType: ""
          },
          mutations: {
            SET_QUESTION_TYPE: function (e, t) {
              e.questionType = t;
            },
            SET_IS_DRAK_MODE: function (e, t) {
              e.isDarkMode = t;
            },
            SET_BOT: function (e, t) {
              e.bot = t;
            },
            SET_IS_SHARE: function (e, t) {
              e.isShare = t;
            },
            SET_ANONYMOUS_ID: function (e, t) {
              e.anonymousId = t;
            },
            SET_DATA_LIST: function (e, t) {
              e.dataList = t;
            },
            SET_REVIEW_FROM_HISTORY: function (e, t) {
              e.reviewFromHistory = t;
            },
            SET_ANIMATION_REVIEW_FROM_HISTORY: function (e, t) {
              e.animationReviewFromHistory = t;
            },
            SET_THUMBINPUTFOCUS_STATUS: function (e, t) {
              e.thumbInputFocus = t;
            },
            SET_INIT_STATUS: function (e, t) {
              e.initStatus = t;
            }
          },
          getters: {
            isSensitiveStatus: function (e) {
              return e.dataList.some(function (e) {
                return e.is_sensitive;
              });
            },
            isForbiddenStatus: function (e) {
              return e.dataList.some(function (e) {
                return e.forbidden;
              });
            }
          },
          actions: {}
        }),
      N = B,
      G = {
        namespaced: !0,
        state: {},
        actions: {
          Register: function (e, t) {
            e.commit;
            return new Promise(function (e, n) {
              Object(u["F"])(t)
                .then(function (t) {
                  var n = t.status;
                  0 === n && Object(s["g"])(t.result[0]), e(t);
                })
                ["catch"](function (t) {
                  e(null === t || void 0 === t ? void 0 : t.data);
                });
            });
          }
        }
      },
      R = G,
      x = (n("9b07"), n("3f16"), n("43bf"), n("d386")),
      F = {
        namespaced: !0,
        state: {
          mode: x["b"].prod,
          dataList: [],
          taskId: "",
          initStatus: !0,
          conversationId: "",
          isSearching: !1,
          isOver: !1,
          retryCanUse: !0,
          isStreamStoped: !1,
          searchStart: !1,
          currentOnClickedStatus: !1,
          thumbsUpModelIndex: -1,
          end: !1,
          sharedIdList: []
        },
        mutations: {
          SET_SHARE_ID_LIST: function (e, t) {
            e.sharedIdList.push(t);
          },
          REMOVE_SHARE_ID_LIST: function (e, t) {
            var n = e.sharedIdList.findIndex(function (e) {
              return e.log_id === t;
            });
            -1 !== n && e.sharedIdList.splice(n, 1);
          },
          SET_CLEAR_SHARE_ID_LIST: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [];
            e.sharedIdList = t;
          },
          SET_CURRENT_ON_CLICKED_STATUS: function (e, t) {
            e.currentOnClickedStatus = t;
          },
          SET_STATUS: function (e, t) {
            e[t.name] = t.value;
          },
          SET_MODE: function (e, t) {
            e.mode = t;
          },
          SET_MODELINDEX: function (e, t) {
            e.thumbsUpModelIndex = t;
          },
          SET_DATA_LIST: function (e, t) {
            e.dataList = t;
          },
          RESET_DATA_LIST: function (e, t) {
            e.dataList = [];
          },
          SET_REVIEW_FROM_HISTORY: function (e, t) {
            e.reviewFromHistory = t;
          },
          SET_THUMBINPUTFOCUS_STATUS: function (e, t) {
            e.thumbInputFocus = t;
          },
          SET_INIT_STATUS: function (e, t) {
            e.initStatus = t;
          },
          NEW_SESSION: function (e) {
            (e.conversationId = ""), (e.dataList = []);
          }
        },
        getters: {
          isProd: function (e) {
            return e.mode === x["b"].prod;
          },
          lastItem: function (e) {
            var t = e.dataList.length - 1;
            return e.dataList[t] || {};
          },
          isSensitiveStatus: function (e) {
            return e.dataList.some(function (e) {
              return e.is_sensitive;
            });
          },
          isForbiddenStatus: function (e) {
            return e.dataList.some(function (e) {
              return e.forbidden;
            });
          },
          isLoading: function (e, t) {
            return t.lastItem.isLoading;
          }
        },
        actions: {}
      },
      U = F,
      W = {
        namespaced: !0,
        state: {
          activeTab: "create",
          assistantInfo: {},
          urlAssistantId: "",
          editActionStatus: !1
        },
        mutations: {
          RESET_STATUS: function (e) {
            e.editActionStatus = !1;
          },
          SET_ACTIVE_TAB: function (e, t) {
            e.activeTab = t;
          },
          SET_ASSISTANT_INFO: function (e, t) {
            e.assistantInfo = t;
          },
          SET_ASSISTANT_ID: function (e, t) {
            e.urlAssistantId = t;
          },
          SET_EDIT_ACTION_STATUS: function (e, t) {
            e.editActionStatus = t;
          }
        },
        getters: {
          assistantId: function (e) {
            return e.urlAssistantId || e.assistantInfo.assistant_id;
          }
        }
      },
      q = W;
    o["default"].use(i["a"]);
    var V = new i["a"].Store({
      modules: {
        Home: A,
        Prompt: j,
        Prompt2: M,
        Detail: N,
        Conversation: U,
        Glms: q,
        Register: R
      },
      getters: r
    });
    t["a"] = V;
  },
  "4d44": function (e, t, n) {},
  "4f8a": function (e, t, n) {
    "use strict";
    n.d(t, "o", function () {
      return p;
    }),
      n.d(t, "n", function () {
        return m;
      }),
      n.d(t, "r", function () {
        return h;
      }),
      n.d(t, "m", function () {
        return b;
      }),
      n.d(t, "q", function () {
        return v;
      }),
      n.d(t, "p", function () {
        return A;
      }),
      n.d(t, "c", function () {
        return L;
      }),
      n.d(t, "h", function () {
        return w;
      }),
      n.d(t, "y", function () {
        return _;
      }),
      n.d(t, "i", function () {
        return S;
      }),
      n.d(t, "C", function () {
        return y;
      }),
      n.d(t, "x", function () {
        return D;
      }),
      n.d(t, "v", function () {
        return O;
      }),
      n.d(t, "z", function () {
        return T;
      }),
      n.d(t, "E", function () {
        return I;
      }),
      n.d(t, "A", function () {
        return k;
      }),
      n.d(t, "w", function () {
        return P;
      }),
      n.d(t, "t", function () {
        return j;
      }),
      n.d(t, "D", function () {
        return C;
      }),
      n.d(t, "u", function () {
        return E;
      }),
      n.d(t, "s", function () {
        return H;
      }),
      n.d(t, "l", function () {
        return M;
      }),
      n.d(t, "e", function () {
        return B;
      }),
      n.d(t, "d", function () {
        return N;
      }),
      n.d(t, "f", function () {
        return G;
      }),
      n.d(t, "B", function () {
        return R;
      }),
      n.d(t, "k", function () {
        return x;
      }),
      n.d(t, "a", function () {
        return F;
      }),
      n.d(t, "b", function () {
        return U;
      }),
      n.d(t, "j", function () {
        return W;
      }),
      n.d(t, "g", function () {
        return q;
      });
    n("ef53"), n("d9c0"), n("18c7"), n("eb38"), n("f574"), n("0637");
    var o = n("c913"),
      i = n("1607"),
      a = /AppVersion\/(\d+(\.\d+)+)/,
      r = /DeviceId\/([\da-zA-Z-]+)/,
      c = /RefreshId\/([\da-zA-Z-]+)/,
      u = /DeviceModel\/([\w-]+)/;
    function s(e, t) {
      var n = e.match(t);
      return n && n[1] ? n[1] : "";
    }
    var l = "terminal_opensource";
    function d() {
      localStorage.removeItem(l);
      var e = Object(i["d"])(l),
        t = Object(o["b"])("opensource"),
        n = Object(o["b"])("from");
      return t || "miniapp" === n ? (Object(i["e"])(l, "1"), !0) : !!e;
    }
    function p() {
      return (
        !!navigator.userAgent.match(/miniprogram/i) ||
        "miniprogram" === window.__wxjs_environment
      );
    }
    function f() {
      var e = window.navigator.userAgent || "";
      return {
        isInApp: e.includes("Platform/ChatGLM_"),
        appVersion: s(e, a),
        deviceId: s(e, r),
        refreshId: s(e, c),
        isAndroid: e.indexOf("Android") > -1 || e.indexOf("Adr") > -1,
        isiOS: /(mac|iphone|ipad|ipod|safari)/i.test(e.toLowerCase()),
        isWX: e.match(/MicroMessenger/i),
        isMiniApp: d(),
        isFeishu: e.includes("Feishu"),
        deviceModel: s(e, u)
      };
    }
    var g = f() || {},
      m = g.isInApp,
      h = g.isiOS,
      b = g.isAndroid,
      v = g.isWX,
      A = g.isMiniApp,
      L = (g.isFeishu, g.appVersion || "0.0.1"),
      w = g.deviceId,
      _ = g.refreshId,
      S = g.deviceModel,
      y = A ? "miniapp" : m ? (b ? "android" : "iOS") : "h5",
      D = "1.2.0",
      O = "1.3.0",
      T = "1.2.6",
      I = "1.5.0",
      k = "1.5.5",
      P = "1.6.5",
      j = "1.6.0",
      C = "1.7.0",
      E = "1.7.0",
      H = "1.7.2",
      M = "1.6.0",
      B = "1.8.0",
      N = "1.9.0",
      G = "1.9.0",
      R = "1.9.0",
      x = "1.9.5",
      F = "2.0.0",
      U = "2.1.5",
      W = "2.1.5",
      q = "2.2.0";
  },
  "51b0": function (e, t, n) {
    "use strict";
    (function (e) {
      var o = n("ca39"),
        i = n("9da1"),
        a = n("e3c6"),
        r = (n("8037"), n("43bf"), n("3a8f"), n("18c7"), n("eb38"), n("6c71")),
        c = n("42a5"),
        u = n("4f8a"),
        s = n("93f3"),
        l = n("5f87"),
        d = n("88da"),
        p = n("14a5"),
        f = n("60fe"),
        g = n("e576"),
        m = ["/", "/homepage", "/agentsquare", "/agent", "/agentCenter"];
      t["a"] = {
        name: "App",
        data: function () {
          return {
            isInApp: u["n"],
            speed: 3e5,
            headerShow: !1,
            timer: null,
            isUniversity: s["a"],
            token: Object(l["d"])(),
            flag: !1
          };
        },
        created: function () {
          var t = this;
          return Object(a["a"])(
            Object(i["a"])().mark(function n() {
              var o, a, r, c, s, p;
              return Object(i["a"])().wrap(function (n) {
                while (1)
                  switch ((n.prev = n.next)) {
                    case 0:
                      (window.homepageCreateTime = Date.now()),
                        t.GetOperationData(),
                        u["n"] &&
                          !t.token &&
                          (Object(d["a"])("get_token"),
                          t.sendCl({ md: "app", ct: "get_token" }),
                          setTimeout(function () {
                            t.flag = !0;
                          }, 200)),
                        Object(d["c"])(
                          d["b"].setToken,
                          function (e) {
                            t.flag = !0;
                            var n = u["r"]
                              ? JSON.parse(e)
                              : JSON.parse(decodeURIComponent(e));
                            if (
                              (t.sendCl({ md: "app", ct: "setToken", ctvl: e }),
                              n)
                            ) {
                              var o = n.chatglm_token,
                                i = n.chatglm_refresh_token;
                              Object(l["n"])(o),
                                Object(l["l"])(i),
                                t.sendCl({
                                  md: "app",
                                  ct: "setToken",
                                  ctvl: o
                                }),
                                (t.token = o);
                            }
                          },
                          t
                        ),
                        Object(d["c"])(
                          d["b"].userLogout,
                          function () {
                            t.sendCl({ md: "app", ct: "userLogout" }),
                              Object(l["h"])();
                          },
                          t
                        ),
                        e(window).on("resize", function (e) {
                          t.judgeIsMobile(),
                            t.navigateBoxWidth(),
                            t.modelNavigateHeight();
                        }),
                        t.judgeIsMobile(),
                        t.getClientConfig(),
                        (o = t.$route.name),
                        "Detail" === o &&
                          document.addEventListener(
                            "visibilitychange",
                            function () {
                              if ("visible" === document.visibilityState) {
                                var e;
                                t.sendCl({ md: "app", ct: "detail_visible" });
                                var n = Object(l["d"])();
                                n
                                  ? (null !== (e = t.userInfo) &&
                                      void 0 !== e &&
                                      e.phone) ||
                                    (t.sendCl({
                                      md: "app",
                                      ct: "detail_visible_without_userinfo"
                                    }),
                                    t.$store.commit("Home/RESET_USER_STATUS"),
                                    t.GetUserInfo({ forceUpdate: !0 }))
                                  : (t.sendCl({
                                      md: "app",
                                      ct: "detail_visible_without_token"
                                    }),
                                    Object(d["a"])("get_token"),
                                    (t.flag = !1),
                                    setTimeout(function () {
                                      t.flag = !0;
                                    }, 200));
                              }
                            }
                          ),
                        window.wx &&
                          ((a = Object(g["c"])()),
                          (r = a.token),
                          (c = a.refresh_token),
                          (s = a.deid),
                          (p = a.from),
                          "miniapp" === p &&
                            (r && c && (Object(l["n"])(r), Object(l["l"])(c)),
                            s && localStorage.setItem("chatglm-deid", s)));
                    case 11:
                    case "end":
                      return n.stop();
                  }
              }, n);
            })
          )();
        },
        computed: Object(o["a"])(
          Object(o["a"])(
            {},
            Object(r["e"])("Home", [
              "userInfo",
              "isShowMenu",
              "isMobile",
              "showTryDialog",
              "configuration"
            ])
          ),
          {},
          {
            bgColor: function () {
              var e = this.$route.path.toLowerCase();
              return e.startsWith("/chat")
                ? this.isMobile
                  ? "#f6f7f9"
                  : "#ffffff"
                : e.startsWith("/detail")
                ? "#f6f7f9"
                : "#ffffff";
            }
          }
        ),
        methods: Object(o["a"])(
          Object(o["a"])(
            {},
            Object(r["b"])("Home", [
              "GetUserInfo",
              "AgreeExperience",
              "GetOperationData",
              "getClientConfig"
            ])
          ),
          {},
          {
            changeTryDialogStatus: function () {
              var e = this,
                t = this.showTryDialog;
              if (
                (this.$store.commit(
                  "Home/SET_SHOWTRYDIALOG",
                  !this.showTryDialog
                ),
                t)
              ) {
                var n = this.userInfo || {},
                  o = n.username;
                this.AgreeExperience({ username: o }).then(function (t) {
                  var n = e.isMobile ? "" : "pc";
                  c["a"].$emit("operateNav", !0, n);
                }),
                  s["a"] && this.$router.push("detail");
              }
            }
          }
        ),
        mounted: function () {
          u["n"] && (document.body.style.background = "rgb(243, 245, 250)");
        },
        watch: {
          "$route.path": function (e) {
            var t = this.userInfo;
            m.includes(e) || !t || f["f"].includes(t._id)
              ? p["a"].remove()
              : p["a"].init(
                  (null === t || void 0 === t ? void 0 : t.phone) ||
                    (null === t || void 0 === t ? void 0 : t.encrypt_phone),
                  this.isMobile,
                  !0
                );
          },
          userInfo: function (e) {
            e &&
              (m.includes(this.$route.path) ||
              f["f"].includes(null === e || void 0 === e ? void 0 : e._id)
                ? p["a"].remove()
                : p["a"].init(
                    (null === e || void 0 === e ? void 0 : e.phone) ||
                      (null === e || void 0 === e ? void 0 : e.encrypt_phone),
                    this.isMobile
                  ));
          }
        }
      };
    }).call(this, n("1d05"));
  },
  "51da": function (e, t, n) {},
  "52c7": function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return i;
    }),
      n.d(t, "b", function () {
        return r;
      });
    n("ef53"), n("d9c0");
    var o = /search\("(.*)".*\)/;
    function i(e) {
      var t = null === e || void 0 === e ? void 0 : e.match(o);
      return t ? t[1] : e;
    }
    var a = /recency_days=(\d+)/;
    function r(e) {
      var t = null === e || void 0 === e ? void 0 : e.match(a);
      return t ? t[1] : "";
    }
  },
  "56d7": function (e, t, n) {
    "use strict";
    n.r(t);
    var o = {};
    n.r(o),
      n.d(o, "filterToolArgs", function () {
        return C["a"];
      }),
      n.d(o, "filterToolDay", function () {
        return C["b"];
      }),
      n.d(o, "phoneFilter", function () {
        return E;
      }),
      n.d(o, "imageConver", function () {
        return H;
      }),
      n.d(o, "calSize", function () {
        return M;
      });
    n("5bdf");
    var i = n("cb52"),
      a = (n("5ef4"), n("8591")),
      r = (n("3edf"), n("738c")),
      c = (n("a60d"), n("0d91")),
      u = (n("b074"), n("f97b")),
      s = (n("50a4"), n("1d00")),
      l = (n("0243"), n("19b5")),
      d = (n("c2dd"), n("99e9")),
      p = (n("c928"), n("61b8")),
      f = (n("6a8f"), n("3f61")),
      g = (n("6d4c"), n("1b65")),
      m = (n("dc91"), n("d683")),
      h = (n("89f5"), n("f5d6")),
      b =
        (n("4a47"),
        n("92de"),
        n("782c"),
        n("9bc2"),
        n("18c7"),
        n("eb38"),
        n("6006"),
        n("ef4f"),
        n("9bfb"),
        n("2197"),
        n("9685"),
        n("9e21"),
        n("759f"),
        n("d04a")),
      v =
        (n("6423"),
        n("1081"),
        n("51da"),
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return !e.isInApp || e.token || e.flag
            ? n(
                "div",
                {
                  staticClass: "pr",
                  class: { overhidden: e.isShowMenu },
                  style: { background: e.bgColor },
                  attrs: { id: "app" }
                },
                [n("router-view")],
                1
              )
            : e._e();
        }),
      A = [],
      L = n("51b0"),
      w = L["a"],
      _ = (n("7c55"), n("d30c")),
      S = Object(_["a"])(w, v, A, !1, null, null, null),
      y = S.exports,
      D = n("a18c"),
      O = n("4360"),
      T = n("9da1"),
      I = n("e3c6"),
      k = (n("3a8f"), n("5f87"));
    D["a"].beforeEach(
      (function () {
        var e = Object(I["a"])(
          Object(T["a"])().mark(function e(t, n, o) {
            var i, a;
            return Object(T["a"])().wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    (i = Object(k["f"])()),
                      (a = !1),
                      a &&
                        "/sysupgrade" !== t.path &&
                        o({ path: "/sysupgrade" }),
                      i && t.path.toLowerCase().startsWith("/login")
                        ? o({ path: "/" })
                        : o();
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t, n, o) {
          return e.apply(this, arguments);
        };
      })()
    );
    var P = n("1b62"),
      j = (n("1e42"), n("ef53"), n("c2a1"), n("5593"), n("d315"), n("c913")),
      C = n("52c7");
    function E(e) {
      if (isNaN(Number(e))) return e;
      e += "";
      var t = /^(.{3}).*(.{4})$/;
      return e.replace(t, "$1****$2");
    }
    function H(e) {
      return Object(j["a"])(e, "image_process=format,webp");
    }
    function M(e) {
      var t = parseFloat(e),
        n = (t / 1024).toFixed(2);
      return n > 1024 ? (n / 1024).toFixed(2) + "MB" : n + "KB";
    }
    var B = n("ee0d"),
      N = n.n(B),
      G = (n("9bc2b"), n("09b0"), n("3fd0")),
      R = n.n(G),
      x = (n("f976"), n("56c4")),
      F = n.n(x),
      U = (n("b1e4"), n("35b7")),
      W = n.n(U),
      q = (n("84aa"), n("d0fe")),
      V = n.n(q),
      Y = (n("c123"), n("0340")),
      z = n.n(Y),
      Q = (n("108d"), n("9224")),
      $ = n.n(Q),
      J = (n("7f3f"), n("9711")),
      X = n.n(J),
      K = (n("ab89"), n("a2b6")),
      Z = n.n(K),
      ee = (n("57e8"), n("dae1")),
      te = n.n(ee),
      ne = (n("cbec"), n("844d")),
      oe = n.n(ne),
      ie = (n("0d4c"), n("8608")),
      ae = n.n(ie),
      re = (n("873a"), n("1e3f")),
      ce = n.n(re),
      ue = (n("3a6b"), n("3fee")),
      se = n.n(ue),
      le = (n("30c0"), n("c221")),
      de = n.n(le),
      pe = (n("d9dfd"), n("ebe6")),
      fe = n.n(pe),
      ge = (n("fa0d"), n("a48b")),
      me = n.n(ge),
      he = (n("2b76"), n("ddea")),
      be = n.n(he),
      ve = (n("a1df"), n("2f6e")),
      Ae = n.n(ve),
      Le = (n("e6ba"), n("cdcf")),
      we = n.n(Le),
      _e = (n("b60b"), n("d8ea")),
      Se = n.n(_e),
      ye = (n("38fb"), n("d6d9")),
      De = n.n(ye),
      Oe = (n("43bf"), n("9ce9")),
      Te = n.n(Oe),
      Ie = [
        De.a,
        Se.a,
        we.a,
        Ae.a,
        be.a,
        me.a,
        fe.a,
        de.a,
        se.a,
        ce.a,
        ae.a,
        oe.a,
        te.a,
        Z.a,
        X.a,
        $.a,
        z.a,
        V.a
      ],
      ke = ["success", "warning", "info", "error"];
    function Pe(e) {
      Ie.forEach(function (t) {
        e.use(t);
      }),
        e.component(Te.a.name, Te.a),
        e.use(F.a.directive),
        (e.prototype.$loading = F.a.service),
        (e.prototype.$message = W.a),
        (e.prototype.$msgbox = R.a),
        (e.prototype.$alert = R.a.alert),
        (e.prototype.$confirm = R.a.confirm),
        (e.prototype.$prompt = R.a.prompt);
    }
    ke.forEach(function (e) {
      W.a[e] = function (t) {
        "string" === typeof t &&
          ((t = { message: t }), void 0 === t.duration && (t.duration = 2500)),
          (t.type = e);
        var n = W()(t),
          o = void 0 === t.duration ? 2500 : t.duration;
        return (
          o &&
            setTimeout(function () {
              n.close();
            }, o),
          n
        );
      };
    });
    var je = Pe;
    function Ce(e, t) {
      return e
        .then(function (e) {
          return [null, e];
        })
        ["catch"](function (e) {
          if (t) {
            var n = Object.assign({}, e, t);
            return [n, void 0];
          }
          return [e, void 0];
        });
    }
    var Ee = Ce,
      He = n("4f14"),
      Me = n.n(He),
      Be = (n("758b"), n("4d44"), "@@wavesContext");
    function Ne(e, t) {
      function n(n) {
        var o = Object.assign({}, t.value),
          i = Object.assign(
            { ele: e, type: "hit", color: "rgba(0, 0, 0, 0.15)" },
            o
          ),
          a = i.ele;
        if (a) {
          (a.style.position = "relative"), (a.style.overflow = "hidden");
          var r = a.getBoundingClientRect(),
            c = a.querySelector(".waves-ripple");
          switch (
            (c
              ? (c.className = "waves-ripple")
              : ((c = document.createElement("span")),
                (c.className = "waves-ripple"),
                (c.style.height = c.style.width =
                  Math.max(r.width, r.height) + "px"),
                a.appendChild(c)),
            i.type)
          ) {
            case "center":
              (c.style.top = r.height / 2 - c.offsetHeight / 2 + "px"),
                (c.style.left = r.width / 2 - c.offsetWidth / 2 + "px");
              break;
            default:
              (c.style.top =
                (n.pageY -
                  r.top -
                  c.offsetHeight / 2 -
                  document.documentElement.scrollTop ||
                  document.body.scrollTop) + "px"),
                (c.style.left =
                  (n.pageX -
                    r.left -
                    c.offsetWidth / 2 -
                    document.documentElement.scrollLeft ||
                    document.body.scrollLeft) + "px");
          }
          return (
            (c.style.backgroundColor = i.color),
            (c.className = "waves-ripple z-active"),
            !1
          );
        }
      }
      return (
        e[Be] ? (e[Be].removeHandle = n) : (e[Be] = { removeHandle: n }), n
      );
    }
    var Ge = {
      bind: function (e, t) {
        e.addEventListener("click", Ne(e, t), !1);
      },
      update: function (e, t) {
        e.removeEventListener("click", e[Be].removeHandle, !1),
          e.addEventListener("click", Ne(e, t), !1);
      },
      unbind: function (e) {
        e.removeEventListener("click", e[Be].removeHandle, !1),
          (e[Be] = null),
          delete e[Be];
      }
    };
    n("2e1e"), n("8703"), n("56a2");
    function Re(e, t) {
      var n = t.value,
        o = O["a"].getters && O["a"].getters.roles;
      if (!(n && n instanceof Array)) throw new Error("need roles!");
      if (n.length > 0) {
        var i = n,
          a =
            o &&
            o.some(function (e) {
              return i.includes(e);
            });
        a ||
          ((null === e || void 0 === e ? void 0 : e.parentNode) &&
            (null === e || void 0 === e || e.parentNode.removeChild(e)));
      }
    }
    var xe = {
        inserted: function (e, t) {
          Re(e, t);
        },
        update: function (e, t) {
          Re(e, t);
        }
      },
      Fe = n("97aa"),
      Ue = n("e2b1"),
      We = n("e576"),
      qe = (function () {
        function e() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : null;
          Object(Fe["a"])(this, e), this.init(t);
        }
        return (
          Object(Ue["a"])(e, [
            {
              key: "init",
              value: function (e) {
                var t = this;
                this.observer = new IntersectionObserver(
                  function (e, n) {
                    e.forEach(function (e) {
                      if (1 === e.intersectionRatio) {
                        var n = e.target.getAttribute("data-upload");
                        (n = "string" === typeof n ? JSON.parse(n) : n),
                          t.upload(n),
                          t.observer && t.observer.unobserve(e.target);
                      }
                    });
                  },
                  { root: e, rootMargin: "0px", threshold: 1 }
                );
              }
            },
            {
              key: "add",
              value: function (e) {
                this.observer && this.observer.observe(e);
              }
            },
            {
              key: "upload",
              value: function (e) {
                Object(We["i"])(e);
              }
            }
          ]),
          e
        );
      })(),
      Ve = new qe(),
      Ye = {
        bind: function (e) {
          Ve.add(e);
        }
      },
      ze = n("ca39"),
      Qe = {
        bind: function (e, t) {
          var n = { root: null, rootMargin: "0px", threshold: 0 },
            o = (null === t || void 0 === t ? void 0 : t.value) || {},
            i = o.args,
            a = o.callBack,
            r = o.options,
            c = function (e, t) {
              e.forEach(function (e) {
                e.isIntersecting && (a && a(i), t.unobserve(e.target));
              });
            };
          if (IntersectionObserver) {
            var u = new IntersectionObserver(
              c,
              Object(ze["a"])(Object(ze["a"])({}, n), r)
            );
            u.observe(e);
          }
        }
      },
      $e = { waves: Ge, permission: xe, exposure: Ye, intersect: Qe },
      Je = {
        install: function (e) {
          Object.keys($e).forEach(function (t) {
            e.directive(t, $e[t]);
          });
        }
      },
      Xe = (n("a6c3"), n("1f1f"), n("ece1")),
      Ke = n.n(Xe),
      Ze = n("a38c"),
      et = n("8d2e"),
      tt = n("8170"),
      nt = n.n(tt),
      ot = n("6cf6"),
      it = n("49a1"),
      at = n("69c6"),
      rt = n("26d2"),
      ct = n("ba4e"),
      ut = n("a733"),
      st = n("4f8a"),
      lt = n("60fe");
    if (it) {
      var dt = !1;
      ((Math.floor(100 * Math.random()) + 1) % 5 === 0 ||
        lt["e"].includes(st["h"])) &&
        (dt = !0),
        dt &&
          at["a"]({
            Vue: b["default"],
            dsn: "https://15bd2a5b7770ce8e6481968443f35383@test-sentry.chatglm.cn/19",
            release: window.page_version || "1.0.0",
            environment: "production",
            integrations: [
              new rt["k"].Breadcrumbs({ console: !1 }),
              new ct["a"]({ routingInstrumentation: ut["a"](D["a"]) })
            ],
            tracesSampleRate: 1
          });
    }
    if (!st["n"]) {
      var pt = window.sensorsDataAnalytic201505;
      (window.sensors = pt),
        pt &&
          (pt.init({
            server_url:
              "//zhipuaishengchan.datasink.sensorsdata.cn/sa?project=production&token=12da2141032f57b4",
            heatmap: {
              clickmap: "default",
              collect_tags: {
                div: !0,
                p: !0,
                h1: !0,
                h2: !0,
                h3: !0,
                h4: !0,
                h5: !0,
                h6: !0,
                img: !0,
                svg: !0,
                span: !0,
                th: !0,
                td: !0,
                tr: !0
              },
              scroll_notice_map: "default",
              get_vtrack_config: !0
            },
            is_track_single_page: !0,
            use_client_time: !0,
            send_type: "beacon",
            show_log: !1,
            preset_properties: { latest_wx_ad_click_id: !0 }
          }),
          pt.registerPage({
            platform_name: "TOC_H5",
            DownloadChannel: Object(We["b"])()
          }),
          pt.use("PageLeave", {
            custom_props: { prop1: "value1" },
            heartbeat_interval_time: 5,
            max_duration: 432e3,
            isCollectUrl: function (e) {
              return !0;
            }
          }),
          pt.use("PageLoad", { max_duration: 120 }),
          pt.use("SensorsChannel"),
          pt.use("SatPropsPatch"),
          pt.quick("autoTrack"),
          pt.quick("isReady", function () {
            O["a"].commit(
              "Detail/SET_ANONYMOUS_ID",
              pt.quick("getAnonymousID")
            );
          }),
          Object(k["e"])() && pt.login(Object(k["e"])()));
    }
    st["n"] &&
      !st["m"] &&
      n.e("chunk-76d58a4a").then(n.t.bind(null, "88ef", 7)),
      b["default"]
        .use(i["a"])
        .use(a["a"])
        .use(r["a"])
        .use(c["a"])
        .use(u["a"])
        .use(s["a"])
        .use(l["a"])
        .use(d["a"])
        .use(p["a"])
        .use(f["a"])
        .use(g["a"])
        .use(m["a"])
        .use(h["a"])
        .use(ot["a"], { observer: !0, error: n("5d6b"), loading: n("8cd8") })
        .use(nt.a),
      b["default"].component("Logo", et["a"]),
      (b["default"].prototype.$axios = Me.a),
      (b["default"].prototype.awaitTo = Ee),
      je(b["default"]),
      b["default"].use(N.a),
      b["default"].mixin(P["a"]),
      (b["default"].config.productionTip = !1),
      Object.keys(o).forEach(function (e) {
        b["default"].filter(e, o[e]);
      }),
      b["default"].use(Je),
      b["default"].use(Ke.a),
      b["default"].use(Ze["VueHammer"]),
      (window.VueInstance = new b["default"]({
        router: D["a"],
        store: O["a"],
        render: function (e) {
          return e(y);
        }
      }).$mount("#app"));
  },
  "5d6b": function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVkAAAEEBAMAAABwzFrBAAAAFVBMVEXp6en4+Pjy8vLs7Ozu7u729vb09PRlG7ggAAADpElEQVR42u2bu3riMBBGFWRSryGkNopD7cUkNRiTep3L1huSvP8rrG1dMNiyy/z+8p8WivMNoxlJI4QghBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEDJKNplaqXg/BtVgVYSaxWcC7ipXYYPFHbTsugjPeQWWfQpbwOrKQ9jBC6jsMuxkC2nrkQ0XiJXhEPoAzIVHryxgcCcNu7/xPhEyzd5RgyvfT66njpuZ6rtATdrz7rUxuhFmHtxelKuJ1r2BsrV5cNtaTw94qfDolbVVGKhDyKKnUukk+YVj+2BkI5HmqiLepxdZcgMX2g+tatjbQE+xEndqklZdYOpuUH8K0870OlqoFnFySgWUZaZjFz6rDurw7qqP/4HY7nyhtbp1pvyBWmPHbltVNuLr6vM5hu11X2hLtrrizpES4Vn5dQOcgqsT4RTaPE/T/KzwqhTHdtIMbe6qapo1dHFsf5/WWHzWAWQGaLt0bax1SbcxsisYW+kSoeNGUTZs5zhpe6zrqk/3HsZ2aipC7Am9s4XY4NbVdqaUb4tV6S5h9glLnbb+M+1EqXeYU2+dtkr1fGOtCpT9rdRp23cDLutyG8LsbW9VMrgQZzAbsJka7nYQzUHHrX8UUujNOEDiXtUlIRo+CEUCYLpT/8rPyfBlQyJiENtjMliRZ2VpSEBshxNhXnaJLYbt5/BBKCqbRIRvaw5CQih1h2H7OrjGbkSAYKsr2OBlQ1Rtbr6/KAx1VXczXu1zMY4Os2QgtC9VIgDYBv3Du4Md9K4hbGXvfMlMemZC235/eyh6Ro124hfB2O56ltnBhRbF9sp/TW/HUpG1RblP6EqFdXgKrcgwbKXveUdQNEJbl1uALaPZtbRKro2sDq1EsZ12vkx6On9IEZg7fZRUCF8b0Q2+3GOFD3OnUAJx/7GzE2l7ybhpvLYztc0MIARKVah9j3meq7f2g5o6EQDKrTt4db/+MT++viWHkDUjqC4+RCO0KO8v7/tlTWgjENvWu9BzWR1akLStntwWPbJSQSVCGdy2rl1gbhAVwdgKdanrLpvc1AxHtjrRfjVd3TTKjsyQQquX/ZfuC28n18b4FEnWLiVlXyxVNEfTUKF1ZcpDLMBY99kmYkS6WyHGo4v5D43NmGQ9Sw33v0Uy8zy3G4cv/J+25CZzXUKMAlm2skQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBDyw/kPwTHXkuLkCi8AAAAASUVORK5CYII=";
  },
  "5f87": function (e, t, n) {
    "use strict";
    n.d(t, "n", function () {
      return h;
    }),
      n.d(t, "d", function () {
        return b;
      }),
      n.d(t, "o", function () {
        return v;
      }),
      n.d(t, "l", function () {
        return A;
      }),
      n.d(t, "b", function () {
        return L;
      }),
      n.d(t, "h", function () {
        return w;
      }),
      n.d(t, "f", function () {
        return _;
      }),
      n.d(t, "e", function () {
        return y;
      }),
      n.d(t, "g", function () {
        return D;
      }),
      n.d(t, "j", function () {
        return k;
      }),
      n.d(t, "a", function () {
        return I;
      }),
      n.d(t, "i", function () {
        return C;
      }),
      n.d(t, "c", function () {
        return P;
      }),
      n.d(t, "m", function () {
        return j;
      }),
      n.d(t, "k", function () {
        return E;
      });
    var o = n("c8fc"),
      i = (n("056d"), n("e50b")),
      a = n.n(i),
      r = n("3c3b"),
      c = n.n(r),
      u = "chatglm_token",
      s = "chatglm_token_expires",
      l = "chatglm_refresh_token",
      d = "conversation_id",
      p = "chatglm_search_value",
      f = "captcha_rid",
      g = "model_navigate_record",
      m = "chatglm_user_id";
    function h(e) {
      return a.a.set(u, e, { expires: 30 });
    }
    function b() {
      var e = a.a.get(u);
      return e && (e = "Bearer " + e), e;
    }
    function v(e) {
      return a.a.set(s, e, { expires: 30 });
    }
    function A(e) {
      return a.a.set(l, e, { expires: 180 });
    }
    function L() {
      var e = a.a.get(l);
      return e && (e = "Bearer " + e), e;
    }
    function w() {
      a.a.remove(u), a.a.remove(l), a.a.remove(m);
    }
    function _() {
      return !!b();
    }
    function S(e) {
      a.a.set(m, e, { expires: 30 });
    }
    function y() {
      return a.a.get(m);
    }
    function D(e) {
      var t = c()().add(2, "hour").format("YYYY-MM-DD HH:mm:ss");
      h(e.access_token), v(t), A(e.refresh_token), S(e.id);
    }
    var O = function (e, t) {
        var n = t;
        "object" === Object(o["a"])(t) && (n = JSON.stringify(t)),
          localStorage.setItem(e, n);
      },
      T = function (e, t) {
        var n = localStorage.getItem(e);
        return n && "undefined" !== n ? (t ? JSON.parse(n) : n) : "";
      },
      I = function () {
        return T(d);
      },
      k = function (e) {
        return O(d, e);
      },
      P = function () {
        return T(p);
      },
      j = function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return O(p, e);
      },
      C = function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return O(f, e);
      },
      E = function (e) {
        return O(g, e);
      };
  },
  "60fe": function (e, t, n) {
    "use strict";
    n.d(t, "c", function () {
      return o;
    }),
      n.d(t, "b", function () {
        return i;
      }),
      n.d(t, "a", function () {
        return a;
      }),
      n.d(t, "d", function () {
        return r;
      }),
      n.d(t, "f", function () {
        return c;
      }),
      n.d(t, "e", function () {
        return u;
      });
    var o = {
        login: {
          question: "列出一些年夜饭好意头的菜肴以及其寓意。",
          answer:
            "年夜饭是中国农历新年除夕夜的传统晚餐，是家人团聚、共同欢庆新年的重要活动。以下是一些年夜饭好意头的菜肴以及其寓意：\n\n1. 鱼：年夜饭必不可少的一道菜是鱼，因为“鱼”和“余”谐音，寓意着年年有余，表示家中生活富裕，财源广进。\n\n2. 鸡：鸡肉象征着“团圆”，因为鸡在汉语中与“家”谐音，所以年夜饭中必不可少。"
        },
        register: {
          question: "想自己做手冲咖啡，需要准备什么工具？",
          answer:
            "制作手冲咖啡需要以下工具：\n\n1. 咖啡磨豆机：用于将咖啡豆磨成适合手冲咖啡的细粉。\n\n2. 手冲壶：用于将热水加热并控制水流，以便将咖啡萃取出最佳的口感和香气。\n\n3. 滤纸：用于过滤咖啡渣，并使咖啡液体顺畅流下。\n\n4. 咖啡滤杯：用于将咖啡渣隔离出来，并控制水流，以便将咖啡萃取出最佳的口感和香气。\n\n5. 咖啡豆：用于制作手冲咖啡，需要选择新鲜且烘焙程度适当的咖啡豆。\n\n6. 热水壶：用于加热水，以确保热水的温度适合手冲咖啡。"
        },
        apply: {
          question: "10岁小朋友生日，可以怎么庆祝？",
          answer:
            "10 岁小朋友过生日，可以考虑下面几种方式来庆祝：\n\n1. 在家里举行生日派对，邀请同学和朋友来家里玩，并准备一些小吃和饮料。\n\n2. 去当地的游乐场或公园游玩，度过一个愉快的周末。\n\n3. 去当地的博物馆或科技馆参观，了解世界文化和科技知识。"
        }
      },
      i = /^1\d{10}$/,
      a =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i,
      r = {
        another_request_in_progress: {
          msg: "当前还有其他请求正在进行，",
          retryBtn: !0
        },
        rate_limit: { msg: "访问接口速率超限制。" },
        count_limit: { msg: "非常抱歉，今日剩余内测次数0次。" },
        input_violation: {
          msg: "非常抱歉，我只是一个语言模型，暂时无法回答该问题，敬请谅解。"
        },
        output_violation: {
          msg: "非常抱歉，我只是一个语言模型，暂时无法回答该问题，敬请谅解。"
        },
        border_line: { msg: "检测到本次对话可能包含错误或有偏见的内容。" },
        invalid_lang: {
          msg: "抱歉，您输入的语言我暂时没有掌握，无法为您提供有效的解答。"
        },
        error: { msg: "本次回答网络超时，其他操作正常使用。", retryBtn: !0 },
        account_abnormal: { msg: "您的帐号由于存在异常行为，暂时被系统锁定。" },
        img_error: { msg: "当前请求人数过多，请稍候再试…" },
        error_network_task_id: { msg: "网络错误", retryBtn: !0 },
        error_timeout: {
          msg: "本次回答网络超时，其他操作正常使用。",
          retryBtn: !0
        },
        error_network_context_id: {
          msg: "本次回答网络超时，其他操作正常使用。",
          retryBtn: !0
        },
        error_length_too_long: { msg: "抱歉，本轮对话已结束", newBtn: !0 },
        sensitive_warning: {
          msg: "系统检测到您的账号异常输入较多，异常输入过多可能导致账号不可用，请谨慎使用。"
        },
        input_sensitive: {},
        output_sensitive: {},
        manual_intervene: {},
        glms_error: { msg: "回答错误，其他操作正常使用，请重试", retryBtn: !1 },
        system_error: {
          msg: "系统错误，其他操作正常使用，请重试",
          retryBtn: !1
        },
        default: "清言正在忙碌中，可能回复不及时，您可以稍后再问我~"
      },
      c = ["645e0a40d455ebd8f1a3e75f"],
      u = [
        "dd88e0d69ce31d85",
        "905022a4540de5da",
        "838bd90a446fa02b",
        "DF81AC1DB0F64B15B6340E77A168F48D"
      ];
  },
  6423: function (e, t, n) {},
  "758b": function (e, t, n) {
    n("ef53"),
      n("d9c0"),
      n("5593"),
      n("d9cf"),
      n("d315"),
      (function (e, t) {
        var n,
          o = e.document,
          i = o.documentElement,
          a = o.querySelector('meta[name="viewport"]'),
          r = o.querySelector('meta[name="flexible"]'),
          c = 0,
          u = 0,
          s = t.flexible || (t.flexible = {});
        if (a) {
          var l = a.getAttribute("content").match(/initial-scale=([\d.]+)/);
          l && ((u = parseFloat(l[1])), (c = parseInt(1 / u)));
        } else if (r) {
          var d = r.getAttribute("content");
          if (d) {
            var p = d.match(/initial-dpr=([\d.]+)/),
              f = d.match(/maximum-dpr=([\d.]+)/);
            p && ((c = parseFloat(p[1])), (u = parseFloat((1 / c).toFixed(2)))),
              f &&
                ((c = parseFloat(f[1])), (u = parseFloat((1 / c).toFixed(2))));
          }
        }
        if (!c && !u) {
          var g = e.navigator.appVersion.match(/iphone/gi),
            m = e.devicePixelRatio;
          (c = g
            ? m >= 3 && (!c || c >= 3)
              ? 3
              : m >= 2 && (!c || c >= 2)
              ? 2
              : 1
            : 1),
            (u = 1 / c);
        }
        if ((i.setAttribute("data-dpr", c), !a))
          if (
            ((a = o.createElement("meta")),
            a.setAttribute("name", "viewport"),
            a.setAttribute(
              "content",
              "initial-scale=" +
                u +
                ", maximum-scale=" +
                u +
                ", minimum-scale=" +
                u +
                ", user-scalable=no"
            ),
            i.firstElementChild)
          )
            i.firstElementChild.appendChild(a);
          else {
            var h = o.createElement("div");
            h.appendChild(a), o.write(h.innerHTML);
          }
        function b() {
          var t = i.getBoundingClientRect().width;
          t / c > 375 && (t = 375 * c);
          var n = t / 10;
          (i.style.fontSize = n + "px"), (s.rem = e.rem = n);
        }
        e.addEventListener(
          "resize",
          function () {
            clearTimeout(n), (n = setTimeout(b, 300));
          },
          !1
        ),
          e.addEventListener(
            "pageshow",
            function (e) {
              e.persisted && (clearTimeout(n), (n = setTimeout(b, 300)));
            },
            !1
          ),
          "complete" === o.readyState
            ? (o.body.style.fontSize = 12 * c + "px")
            : o.addEventListener(
                "DOMContentLoaded",
                function (e) {
                  o.body.style.fontSize = 12 * c + "px";
                },
                !1
              ),
          b(),
          (s.dpr = e.dpr = c),
          (s.refreshRem = b),
          (s.rem2px = function (e) {
            var t = parseFloat(e) * this.rem;
            return "string" === typeof e && e.match(/rem$/) && (t += "px"), t;
          }),
          (s.px2rem = function (e) {
            var t = parseFloat(e) / this.rem;
            return "string" === typeof e && e.match(/px$/) && (t += "rem"), t;
          });
      })(window, window.lib || (window.lib = {}));
  },
  "7c55": function (e, t, n) {
    "use strict";
    n("19fe");
  },
  "88da": function (e, t, n) {
    "use strict";
    n.d(t, "c", function () {
      return l;
    }),
      n.d(t, "a", function () {
        return d;
      }),
      n.d(t, "b", function () {
        return u;
      });
    var o = n("ca39"),
      i = (n("ef53"), n("056d"), n("f574"), n("d04a")),
      a = n("b893"),
      r = n("e576"),
      c = new i["default"](),
      u = {
        getIsDialogue: "getIsDialogue",
        streamTtsCallback: "streamTtsCallback",
        searchStream: "searchStream",
        search: "search",
        searchImg: "searchImg",
        delSession: "delSession",
        addNewSession: "addNewSession",
        getDetailById: "getDetailById",
        uploadImg: "uploadImg",
        uploadImgError: "uploadImgError",
        uploadImgSuccess: "uploadImgSuccess",
        uploadImgRetry: "uploadImgRetry",
        getConversationStatus: "getConversationStatus",
        setToken: "setToken",
        userLogout: "userLogout",
        cancelAppShare: "cancelAppShare",
        tts_callBack: "tts_callBack",
        cancelPinConfirm: "cancelPinConfirm",
        showNormalSession: "showNormalSession",
        showPresetSession: "showPresetSession",
        showAIUSession: "showAIUSession",
        showCollection: "showCollection",
        cancelCollectionConfirm: "cancelCollectionConfirm",
        appShareResult: "appShareResult",
        saveImageResult: "saveImageResult",
        nativeStop: "nativeStop",
        showNewsSession: "showNewsSession",
        showBotification: "showBotification",
        changeBotList: "changeBotList",
        showBot: "showBot",
        showTextToText: "showTextToText",
        visibilityState: "visibilityState",
        botHistroyRefresh: "botHistroyRefresh",
        agentCenterState: "agentCenterState",
        agentSearch: "agentSearch",
        photoUploadCallback: "photoUploadCallback",
        switchAgentChat: "switchAgentChat",
        editAgent: "editAgent",
        deleteAgent: "deleteAgent"
      },
      s = [u.search, u.addNewSession, u.getDetailById];
    function l(e, t, n) {
      c.$on(e, t),
        n &&
          n.$on("hook:beforeDestroy", function () {
            c.$off(e, t);
          });
    }
    function d(e) {
      var t,
        n,
        i,
        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        c = JSON.stringify(a);
      Object(r["g"])({
        md: "home",
        ct: "JSBridgeCall",
        ctid: e,
        extra: c,
        ctvl: "noNeedId"
      }),
        window.ChatglmOpenJSBridge &&
          window.ChatglmOpenJSBridge.callNative(e, c),
        null !== (t = window.webkit) &&
          void 0 !== t &&
          null !== (n = t.messageHandlers) &&
          void 0 !== n &&
          null !== (i = n.ChatglmOpenJSBridge) &&
          void 0 !== i &&
          i.postMessage &&
          window.webkit.messageHandlers.ChatglmOpenJSBridge.postMessage(
            Object(o["a"])({ eventName: e }, a)
          );
    }
    window.ChatglmOpenNativeBridge = {
      calljs: function (e, t) {
        var n = JSON.stringify(t || {}),
          o = u[e];
        s.indexOf(o) > -1 && !a["a"].isLogin
          ? Object(r["g"])({
              md: "home",
              ct: "nativeBridgeCalljsNoAuth",
              ctid: o,
              extra: n,
              ctvl: "noNeedId"
            })
          : (Object(r["g"])({
              md: "home",
              ct: "nativeBridgeCalljs",
              extra: n,
              ctid: o,
              ctvl: "noNeedId"
            }),
            o && c.$emit(o, t));
      }
    };
  },
  "8cd8": function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVkAAAEEAQMAAAC4LNWxAAAAA1BMVEXp6elXI8SMAAAAIklEQVRo3u3BMQEAAADCoPVPbQo/oAAAAAAAAAAAAAAAeBkttAAB/+kJawAAAABJRU5ErkJggg==";
  },
  "8d2e": function (e, t, n) {
    "use strict";
    var o = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", {
          staticClass: "logo2",
          style: { backgroundImage: "url(" + e.image + ")" }
        });
      },
      i = [],
      a = {
        props: ["image"],
        data: function () {
          return {};
        }
      },
      r = a,
      c = (n("ea46"), n("d30c")),
      u = Object(c["a"])(r, o, i, !1, null, "00d7a5a7", null);
    t["a"] = u.exports;
  },
  "93f3": function (e, t, n) {
    "use strict";
    n("ef53"), n("b3d4"), n("18c7");
    var o = window.location.hostname,
      i = o.split(".")[0],
      a = !1,
      r = ["university", "university-test", "univ"];
    r.includes(i) && (a = !0), (t["a"] = a);
  },
  a18c: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return re;
    });
    n("6006"),
      n("ef4f"),
      n("9bfb"),
      n("ef53"),
      n("d9c0"),
      n("c2a1"),
      n("3a8f"),
      n("b3d4"),
      n("7408");
    var o = n("d04a"),
      i = n("e861"),
      a = n("4360"),
      r = n("4f8a"),
      c = function () {
        return Promise.all([
          n.e(
            "Detail~GlmsDetail~GlmsDetailWeb~Home~MiniAppHome~RegisterSuccess"
          ),
          n.e("Detail~GlmsDetail~GlmsDetailWeb~Home~MiniAppHome"),
          n.e("Home~RegisterSuccess"),
          n.e("Home")
        ]).then(n.bind(null, "d504"));
      },
      u = function () {
        return Promise.all([
          n.e("Apply~ApplyAndLogin~LoginNew~NewHome"),
          n.e("ApplyAndLogin~LoginNew~NewHome"),
          n.e("NewHome")
        ]).then(n.bind(null, "289c"));
      },
      s = function () {
        return Promise.all([
          n.e("Apply~ApplyAndLogin~LoginNew~NewHome"),
          n.e("ApplyAndLogin~LoginNew~NewHome"),
          n.e("ApplyAndLogin")
        ]).then(n.bind(null, "ff5d"));
      },
      l = function () {
        return Promise.all([
          n.e("Apply~ApplyAndLogin~LoginNew~NewHome"),
          n.e("ApplyAndLogin~LoginNew~NewHome"),
          n.e("LoginNew")
        ]).then(n.bind(null, "9aca"));
      },
      d = function () {
        return Promise.all([
          n.e("Apply~ApplyAndLogin~LoginNew~NewHome"),
          n.e("Apply")
        ]).then(n.bind(null, "9b8b"));
      },
      p = function () {
        return Promise.all([
          n.e(
            "BLog~BLogApp~CollegeLogin~Detail~ForgetPwd~GlmsDetail~GlmsDetailWeb~LightInteraction~Login~Login_MD5~53be352b"
          ),
          n.e(
            "BLog~BLogApp~Detail~GlmsDetail~GlmsDetailWeb~LightInteraction~MiniAppHome"
          ),
          n.e(
            "Detail~GlmsDetail~GlmsDetailWeb~Home~MiniAppHome~RegisterSuccess"
          ),
          n.e("Detail~GlmsDetail~GlmsDetailWeb~Home~MiniAppHome"),
          n.e("Detail")
        ]).then(n.bind(null, "c84b"));
      },
      f = function () {
        return Promise.all([
          n.e(
            "BLog~BLogApp~CollegeLogin~Detail~ForgetPwd~GlmsDetail~GlmsDetailWeb~LightInteraction~Login~Login_MD5~53be352b"
          ),
          n.e("CollegeLogin~Login~Login_MD5"),
          n.e("Login~Login_MD5"),
          n.e("Login")
        ]).then(n.bind(null, "29c2"));
      },
      g = function () {
        return Promise.all([
          n.e(
            "BLog~BLogApp~CollegeLogin~Detail~ForgetPwd~GlmsDetail~GlmsDetailWeb~LightInteraction~Login~Login_MD5~53be352b"
          ),
          n.e("CollegeLogin~Login~Login_MD5"),
          n.e("CollegeLogin")
        ]).then(n.bind(null, "20e6"));
      },
      m = function () {
        return Promise.all([
          n.e(
            "BLog~BLogApp~CollegeLogin~Detail~ForgetPwd~GlmsDetail~GlmsDetailWeb~LightInteraction~Login~Login_MD5~53be352b"
          ),
          n.e("CollegeLogin~Login~Login_MD5"),
          n.e("Login~Login_MD5"),
          n.e("Login_MD5")
        ]).then(n.bind(null, "a48e"));
      },
      h = function () {
        return Promise.all([
          n.e(
            "BLog~BLogApp~CollegeLogin~Detail~ForgetPwd~GlmsDetail~GlmsDetailWeb~LightInteraction~Login~Login_MD5~53be352b"
          ),
          n.e("ForgetPwd")
        ]).then(n.bind(null, "206f"));
      },
      b = function () {
        return n.e("Agreement").then(n.bind(null, "a6e3"));
      },
      v = function () {
        return n.e("PrivacyPolicy").then(n.bind(null, "729e"));
      },
      A = function () {
        return n.e("AgreementApp").then(n.bind(null, "f782"));
      },
      L = function () {
        return n.e("PrivacyPolicyApp").then(n.bind(null, "36a7"));
      },
      w = function () {
        return n.e("PrivacyPolicyAppAndroid").then(n.bind(null, "0eb3"));
      },
      _ = function () {
        return n.e("InsideTestApply").then(n.bind(null, "aa4e"));
      },
      S = function () {
        return Promise.all([
          n.e(
            "Detail~GlmsDetail~GlmsDetailWeb~Home~MiniAppHome~RegisterSuccess"
          ),
          n.e("Home~RegisterSuccess"),
          n.e("RegisterSuccess")
        ]).then(n.bind(null, "44e6"));
      },
      y = function () {
        return n.e("SysUpgrade").then(n.bind(null, "76d2"));
      },
      D = function () {
        return Promise.all([
          n.e(
            "BLog~BLogApp~CollegeLogin~Detail~ForgetPwd~GlmsDetail~GlmsDetailWeb~LightInteraction~Login~Login_MD5~53be352b"
          ),
          n.e(
            "BLog~BLogApp~Detail~GlmsDetail~GlmsDetailWeb~LightInteraction~MiniAppHome"
          ),
          n.e("BLog~BLogApp"),
          n.e("BLog")
        ]).then(n.bind(null, "a6f79"));
      },
      O = function () {
        return Promise.all([
          n.e(
            "BLog~BLogApp~CollegeLogin~Detail~ForgetPwd~GlmsDetail~GlmsDetailWeb~LightInteraction~Login~Login_MD5~53be352b"
          ),
          n.e(
            "BLog~BLogApp~Detail~GlmsDetail~GlmsDetailWeb~LightInteraction~MiniAppHome"
          ),
          n.e("BLog~BLogApp"),
          n.e("BLogApp")
        ]).then(n.bind(null, "6fcc"));
      },
      T = function () {
        return n.e("ThirdLogin").then(n.bind(null, "d5fc"));
      },
      I = function () {
        return n.e("AboutUs").then(n.bind(null, "2664"));
      },
      k = function () {
        return n.e("PromptApp").then(n.bind(null, "371a"));
      },
      P = function () {
        return n.e("DownLoad").then(n.bind(null, "2ded"));
      },
      j = function () {
        return n.e("FeedBack").then(n.bind(null, "e298"));
      },
      C = function () {
        return n.e("Report").then(n.bind(null, "eccf"));
      },
      E = function () {
        return n.e("PureDisplay").then(n.bind(null, "1af0"));
      },
      H = function () {
        return Promise.all([
          n.e(
            "BLog~BLogApp~CollegeLogin~Detail~ForgetPwd~GlmsDetail~GlmsDetailWeb~LightInteraction~Login~Login_MD5~53be352b"
          ),
          n.e(
            "BLog~BLogApp~Detail~GlmsDetail~GlmsDetailWeb~LightInteraction~MiniAppHome"
          ),
          n.e("LightInteraction")
        ]).then(n.bind(null, "9ae4"));
      },
      M = function () {
        return n.e("HomePage").then(n.bind(null, "1dc6"));
      },
      B = function () {
        return n.e("ProductFunction").then(n.bind(null, "e7d1"));
      },
      N = function () {
        return n.e("MoonFestival").then(n.bind(null, "665f"));
      },
      G = function () {
        return n.e("MoonFestivalShare").then(n.bind(null, "d984"));
      },
      R = function () {
        return n.e("Coffee").then(n.bind(null, "561e"));
      },
      x = function () {
        return n.e("CoffeeShare").then(n.bind(null, "f002"));
      },
      F = function () {
        return n.e("CoffeeSharePc").then(n.bind(null, "3bad"));
      },
      U = function () {
        return n.e("DevDay").then(n.bind(null, "aa2f"));
      },
      W = function () {
        return n.e("Prompt").then(n.bind(null, "31af"));
      },
      q = function () {
        return Promise.all([
          n.e(
            "BLog~BLogApp~CollegeLogin~Detail~ForgetPwd~GlmsDetail~GlmsDetailWeb~LightInteraction~Login~Login_MD5~53be352b"
          ),
          n.e(
            "BLog~BLogApp~Detail~GlmsDetail~GlmsDetailWeb~LightInteraction~MiniAppHome"
          ),
          n.e(
            "Detail~GlmsDetail~GlmsDetailWeb~Home~MiniAppHome~RegisterSuccess"
          ),
          n.e("Detail~GlmsDetail~GlmsDetailWeb~Home~MiniAppHome"),
          n.e("GlmsDetail")
        ]).then(n.bind(null, "1a8c"));
      },
      V = function () {
        return Promise.all([
          n.e(
            "BLog~BLogApp~CollegeLogin~Detail~ForgetPwd~GlmsDetail~GlmsDetailWeb~LightInteraction~Login~Login_MD5~53be352b"
          ),
          n.e(
            "BLog~BLogApp~Detail~GlmsDetail~GlmsDetailWeb~LightInteraction~MiniAppHome"
          ),
          n.e(
            "Detail~GlmsDetail~GlmsDetailWeb~Home~MiniAppHome~RegisterSuccess"
          ),
          n.e("Detail~GlmsDetail~GlmsDetailWeb~Home~MiniAppHome"),
          n.e("GlmsDetailWeb")
        ]).then(n.bind(null, "b8934"));
      },
      Y = function () {
        return n.e("Agent").then(n.bind(null, "0d56"));
      },
      z = function () {
        return Promise.all([
          n.e("AgentCenter~AgentRecommendList~AgentSquare"),
          n.e("AgentCenter")
        ]).then(n.bind(null, "ac1e"));
      },
      Q = function () {
        return Promise.all([
          n.e("AgentCenter~AgentRecommendList~AgentSquare"),
          n.e("AgentSquare")
        ]).then(n.bind(null, "58a2"));
      },
      $ = function () {
        return Promise.all([
          n.e("AgentCenter~AgentRecommendList~AgentSquare"),
          n.e("AgentRecommendList")
        ]).then(n.bind(null, "145e"));
      },
      J = function () {
        return n.e("AgentShare").then(n.bind(null, "13ee"));
      },
      X = function () {
        return n.e("UsageSpecification").then(n.bind(null, "2da9"));
      },
      K = function () {
        return n.e("LicenseInformation").then(n.bind(null, "3c87"));
      },
      Z = function () {
        return n.e("Glms").then(n.bind(null, "c54f"));
      },
      ee = function () {
        return Promise.all([
          n.e(
            "BLog~BLogApp~CollegeLogin~Detail~ForgetPwd~GlmsDetail~GlmsDetailWeb~LightInteraction~Login~Login_MD5~53be352b"
          ),
          n.e(
            "BLog~BLogApp~Detail~GlmsDetail~GlmsDetailWeb~LightInteraction~MiniAppHome"
          ),
          n.e(
            "Detail~GlmsDetail~GlmsDetailWeb~Home~MiniAppHome~RegisterSuccess"
          ),
          n.e("Detail~GlmsDetail~GlmsDetailWeb~Home~MiniAppHome"),
          n.e("MiniAppHome")
        ]).then(n.bind(null, "0c15"));
      },
      te = function () {
        return n.e("chunk-3d9a00d5").then(n.bind(null, "8614"));
      },
      ne = i["a"].prototype.push;
    (i["a"].prototype.push = function (e, t, n) {
      return t || n
        ? ne.call(this, e, t, function () {})
        : ne.call(this, e)["catch"](function (e) {
            return e;
          });
    }),
      o["default"].use(i["a"]);
    var oe = [
        {
          path: "/licenseInformation",
          name: "LicenseInformation",
          component: K
        },
        { path: "/agentShare", name: "AgentShare", component: J },
        { path: "/agentCenter", name: "AgentCenter", component: z },
        {
          path: "/agentRecommendList",
          name: "AgentRecommendList",
          component: $
        },
        { path: "/glms", name: "Glms", component: Z },
        { path: "/agent", name: "Agent", component: Y },
        { path: "/agentsquare", name: "AgentSquare", component: Q },
        { path: "/homepage", name: "HomePage", component: M },
        { path: "/lightInteraction", name: "LightInteraction", component: H },
        { path: "/pureDisplay", name: "PureDisplay", component: E },
        { path: "/", name: "NewHome", component: u },
        {
          path: "/UsageSpecification",
          name: "UsageSpecification",
          component: X
        },
        { path: "/applyAndLogin", name: "ApplyAndLogin", component: s },
        { path: "/apply", name: "Apply", component: d },
        { path: "/chat", name: "Home", component: c },
        { path: "/detail", name: "Detail", component: p },
        { path: "/login", name: "Login", component: f },
        { path: "/gdetail", name: "Gdetail", component: q },
        { path: "/gdetailweb", name: "Gdetail", component: V },
        { path: "/gdetail/:id", name: "Gdetail", component: q },
        { path: "/loginnew", name: "LoginNew", component: l },
        { path: "/login_v2", name: "Login_MD5", component: m },
        { path: "/login_v3", name: "login_v3", component: g },
        { path: "/forgetpwd", name: "ForgetPwd", component: h },
        { path: "/agreement", name: "Agreement", component: b },
        { path: "/privacypolicy", name: "PrivacyPolicy", component: v },
        { path: "/agreement-app", name: "AgreementApp", component: A },
        { path: "/app/agreement", name: "AgreementAppNew", component: b },
        { path: "/privacypolicy-app", name: "PrivacyPolicyApp", component: L },
        {
          path: "/app/android/privacypolicy",
          name: "PrivacyPolicyAppAndroid",
          component: w
        },
        {
          path: "/app/ios/privacypolicy",
          name: "PrivacyPolicyAppIos",
          component: w
        },
        { path: "/app/productFunction", name: "ProductFunction", component: B },
        { path: "/test", name: "InsideTestApply", component: _ },
        { path: "/registersuccess", name: "RegisterSuccess", component: S },
        { path: "/authresult", name: "AuthResult", component: te },
        { path: "/sysupgrade", name: "SysUpgrade", component: y },
        { path: "/blog", name: "BLog", component: D },
        { path: "/app/blog", name: "BLogApp", component: O },
        { path: "/third_login", name: "sso_login", component: T },
        {
          path: "/404",
          name: "NotFound",
          component: function () {
            return n.e("notfound").then(n.bind(null, "8cdb"));
          },
          hidden: !0
        },
        { path: "/about-us", name: "AboutUs", component: I },
        { path: "/prompt-app", name: "PromptApp", component: k },
        { path: "/download", name: "DownLoad", component: P },
        { path: "/feedback", name: "FeedBack", component: j },
        { path: "/report", name: "Report", component: C },
        { path: "/prompt", name: "Prompt", component: W },
        { path: "/moon-festival", name: "MoonFestival", component: N },
        {
          path: "/moon-festival-share",
          name: "MoonFestivalShare",
          component: G
        },
        { path: "/coffee", name: "Coffee", component: R },
        { path: "/coffee/share", name: "CoffeeShare", component: x },
        { path: "/coffee/share/pc", name: "CoffeeSharePc", component: F },
        { path: "/devday", name: "DevDay", component: U },
        { path: "/miniapp/home", name: "MiniAppHome", component: ee },
        { path: "*", redirect: "/" }
      ],
      ie = function () {
        return new i["a"]({
          mode: "history",
          base: "/",
          scrollBehavior: function () {
            return { y: 0 };
          },
          routes: oe,
          sensitive: !0,
          strict: !0
        });
      },
      ae = ie();
    function re() {
      var e = ie();
      ae.matcher = e.matcher;
    }
    ae.onError(function (e) {
      var t = /Loading chunk (.*?) failed/,
        n = e.message.match(t),
        o = ae.history.pending.fullPath;
      if (n) return ae.replace(o);
    }),
      ae.beforeEach(function (e, t, n) {
        var o;
        if (
          (r["n"] || a["a"].commit("Glms/SET_ASSISTANT_ID", ""),
          null !== e &&
            void 0 !== e &&
            null !== (o = e.redirectedFrom) &&
            void 0 !== o &&
            o.startsWith("/main/gdetail"))
        ) {
          var i = e.redirectedFrom.split("/"),
            c = "";
          return (
            Array.isArray(i) && i[i.length - 1] && (c = i[i.length - 1]),
            n({ path: "/agentShare?id=".concat(c) })
          );
        }
        n();
      }),
      (t["a"] = ae);
  },
  a6c3: function (e, t, n) {},
  a7b9: function (e, t, n) {},
  b775: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return j;
    }),
      n.d(t, "e", function () {
        return H;
      }),
      n.d(t, "d", function () {
        return q;
      }),
      n.d(t, "b", function () {
        return V;
      });
    var o = n("ca39"),
      i = (n("f976"), n("09b0"), n("56c4")),
      a = n.n(i),
      r = (n("b1e4"), n("35b7")),
      c = n.n(r),
      u = n("9da1"),
      s = n("e3c6"),
      l =
        (n("9c5e"),
        n("6006"),
        n("ef4f"),
        n("9bfb"),
        n("f574"),
        n("43bf"),
        n("056d"),
        n("18c7"),
        n("eb38"),
        n("532b"),
        n("183b"),
        n("8037"),
        n("a18c")),
      d = n("4f14"),
      p = n.n(d),
      f = n("5f87"),
      g = n("e576"),
      m = (n("ef53"), n("c2a1"), n("0002"));
    function h() {
      return (m["a"].genV4() + "").replace(/-/g, "");
    }
    var b = n("5a3a"),
      v = n("3c3b"),
      A = n.n(v),
      L = n("4f8a"),
      w = "",
      _ = new b["a"](),
      S = "https://chatglm.cn/chatglm",
      y = ["Detail", "Prompt", "HomePage", "LightInteraction", "Gdetail"],
      D = Object(g["a"])(),
      O = new Map(),
      T = { _target: null, _count: 0 },
      I = [
        "/user/imgCode",
        "/user/verify_imgCode",
        "/chatglm/model_version",
        "/user/checkphone",
        "/user/login",
        "/user/signup",
        "user/verify"
      ],
      k = function (e) {
        for (var t = 0; t < I.length; t++)
          if (-1 !== e.indexOf(I[t])) return !0;
        return !1;
      },
      P = function (e) {
        window.VueInstance.$store.dispatch("Home/HandleLogOut"),
          p.a
            .get("".concat(S, "/backend-api/v3/user/get_remote_ip"), {})
            .then(function (t) {
              t.data && t.data.result && "0" === t.data.result.status_code
                ? window.VueInstance.goToLogin("/login_v3")
                : window.VueInstance.goToLogin(e);
            })
            ["catch"](function () {
              window.VueInstance.goToLogin("catch");
            });
      },
      j = (function () {
        var e = Object(s["a"])(
          Object(u["a"])().mark(function e() {
            var t;
            return Object(u["a"])().wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((t = l["a"].app._route.name),
                      Object(f["b"])() ||
                        y.indexOf(t) > -1 ||
                        P("RefreshToken"),
                      Object(f["b"])())
                    ) {
                      e.next = 6;
                      break;
                    }
                    return (
                      Object(g["i"])({ md: "home", ct: "refresh_token_null" }),
                      e.abrupt("return", Promise.reject(!1))
                    );
                  case 6:
                    return e.abrupt(
                      "return",
                      new Promise(function (e, t) {
                        var n = Object(f["b"])();
                        p.a
                          .post(
                            "".concat(S, "/backend-api/v1/user/refresh"),
                            {},
                            { headers: { Authorization: n } }
                          )
                          .then(function (t) {
                            var o = A()()
                              .add(2, "hour")
                              .format("YYYY-MM-DD HH:mm:ss");
                            Object(f["n"])(t.data.result.accessToken),
                              Object(f["o"])(o),
                              Object(g["h"])({
                                md: "request",
                                ct: "fresh_token_success",
                                extra: n
                              }),
                              e(!0);
                          })
                          ["catch"](function (t) {
                            var o;
                            Object(g["h"])({
                              md: "request",
                              ct: "fresh_token_error",
                              ctid:
                                (null === t ||
                                void 0 === t ||
                                null === (o = t.response) ||
                                void 0 === o
                                  ? void 0
                                  : o.status) || "no",
                              extra: n
                            }),
                              e(!1);
                          });
                      })
                    );
                  case 7:
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
    function C(e, t, n) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = Object(s["a"])(
          Object(u["a"])().mark(function e(t, n, o) {
            var i, a, r;
            return Object(u["a"])().wrap(
              function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), _.waitForUnlock();
                    case 2:
                      return (e.next = 4), H(t, n, o);
                    case 4:
                      if (((i = e.sent), !i.error || 401 !== i.error.status)) {
                        e.next = 32;
                        break;
                      }
                      if (!_.isLocked()) {
                        e.next = 14;
                        break;
                      }
                      return (e.next = 9), _.waitForUnlock();
                    case 9:
                      return (e.next = 11), H(t, n, o);
                    case 11:
                      (i = e.sent), (e.next = 32);
                      break;
                    case 14:
                      return (e.next = 16), _.acquire();
                    case 16:
                      return (a = e.sent), (e.prev = 17), (e.next = 20), j();
                    case 20:
                      if (!e.sent) {
                        e.next = 26;
                        break;
                      }
                      return (e.next = 23), H(t, n, o);
                    case 23:
                      (i = e.sent), (e.next = 29);
                      break;
                    case 26:
                      (r = l["a"].app._route.name),
                        y.indexOf(r) > -1 || P("request");
                    case 29:
                      return (e.prev = 29), a(), e.finish(29);
                    case 32:
                      return e.abrupt("return", i);
                    case 33:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[17, , 29, 32]]
            );
          })
        )),
        E.apply(this, arguments)
      );
    }
    function H(e, t, n) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = Object(s["a"])(
          Object(u["a"])().mark(function e(t, n, i) {
            var r, s, l, d;
            return Object(u["a"])().wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      null !== t &&
                        void 0 !== t &&
                        t.url.endsWith("feed-api/assistant/search_list") &&
                        (w =
                          null === t ||
                          void 0 === t ||
                          null === (r = t.params) ||
                          void 0 === r
                            ? void 0
                            : r.keyword),
                      (s = Date.now()),
                      (l = p.a.create({
                        baseURL: "/api",
                        timeout: 1e4,
                        withCredentials: !0,
                        headers: {
                          "Content-Type": "application/json;charset=utf-8",
                          "App-Name": "chatglm_h5",
                          "X-Device-Id": D,
                          Platform: L["C"],
                          "X-App-Platform": L["C"],
                          Version: L["c"],
                          "X-App-Version": L["c"],
                          "X-Request-Id": h(),
                          fr: Object(g["b"])(),
                          "X-App-fr": Object(g["b"])()
                        }
                      })),
                      (d = Object.assign(
                        {
                          repeatRequestCancel: !0,
                          useRefreshToken: !1,
                          errorMessageShow: !0,
                          withToken: !0,
                          loading: !0
                        },
                        n
                      )),
                      l.interceptors.request.use(
                        function (e) {
                          return (
                            R(e),
                            d.repeatRequestCancel && G(e),
                            d.loading &&
                              (T._count++,
                              1 === T._count &&
                                (T._target = a.a.service(
                                  Object.assign(
                                    {
                                      lock: !0,
                                      text: "Loading...",
                                      spinner: "el-icon-loading",
                                      background: "rgba(255, 255, 255, 0.6)"
                                    },
                                    i
                                  )
                                ))),
                            d.withToken &&
                              "undefined" !== typeof window &&
                              (d.useRefreshToken
                                ? (e.headers.Authorization = Object(f["b"])())
                                : (e.headers.Authorization = Object(f["d"])())),
                            e
                          );
                        },
                        function (e) {
                          return Promise.reject(e);
                        }
                      ),
                      l.interceptors.response.use(
                        function (e) {
                          var t, n, i, a;
                          if (
                            (Object(g["f"])({
                              name: e.config.url,
                              status: "success",
                              eagleid:
                                (null === (t = e.headers) || void 0 === t
                                  ? void 0
                                  : t.eagleid) || ""
                            }),
                            R(e.config),
                            d.loading && N(d),
                            200 === e.status)
                          ) {
                            if (k(e.config.url)) return Promise.resolve(e.data);
                            if (e.data) {
                              var r;
                              if (
                                0 === e.data.status ||
                                200 === e.data.code ||
                                "success" === e.data.message
                              )
                                return (
                                  Object(g["h"])({
                                    md: "request",
                                    ct: "response_success",
                                    ctvl:
                                      (null === e ||
                                      void 0 === e ||
                                      null === (r = e.config) ||
                                      void 0 === r
                                        ? void 0
                                        : r.url) || "nourl",
                                    ctnm: Date.now() - s,
                                    extra:
                                      Date.now() - window.homepageCreateTime
                                  }),
                                  Promise.resolve(
                                    Object(o["a"])(
                                      Object(o["a"])({}, e.data),
                                      {},
                                      { keyword: w }
                                    )
                                  )
                                );
                              d.errorMessageShow &&
                                c()({
                                  type: "error",
                                  message: e.data.message || e.data.msg,
                                  duration: 3e3
                                });
                            } else
                              c()({
                                type: "error",
                                message: "接口返回值data为空！"
                              });
                          }
                          var u =
                            (null === e ||
                            void 0 === e ||
                            null === (n = e.data) ||
                            void 0 === n
                              ? void 0
                              : n.message) ||
                            (null === e ||
                            void 0 === e ||
                            null === (i = e.data) ||
                            void 0 === i
                              ? void 0
                              : i.msg);
                          return (
                            u ||
                              (null !== e && void 0 !== e && e.data) ||
                              (u = "接口返回值data为空！"),
                            Object(g["h"])({
                              md: "request",
                              ct: "response_error",
                              ctid: u || "null",
                              ctvl:
                                (null === e ||
                                void 0 === e ||
                                null === (a = e.config) ||
                                void 0 === a
                                  ? void 0
                                  : a.url) || "nourl",
                              ctnm: Date.now() - s,
                              extra: Date.now() - window.homepageCreateTime
                            }),
                            Promise.reject(e)
                          );
                        },
                        function (e) {
                          var t, n, o, i, a;
                          (Object(g["f"])({
                            name: e && e.config && e.config.url,
                            status: "error",
                            eagleid:
                              (null === (t = e.response) ||
                              void 0 === t ||
                              null === (n = t.headers) ||
                              void 0 === n
                                ? void 0
                                : n.eagleid) || ""
                          }),
                          p.a.isCancel(e))
                            ? Object(g["h"])({
                                md: "request",
                                ct: "http_cancel",
                                ctvl:
                                  (null === e || void 0 === e
                                    ? void 0
                                    : e.message) || "nomessage"
                              })
                            : Object(g["h"])({
                                md: "request",
                                ct: "http_error",
                                ctid:
                                  (null === e ||
                                  void 0 === e ||
                                  null === (i = e.response) ||
                                  void 0 === i
                                    ? void 0
                                    : i.status) || "no",
                                ctvl:
                                  (null === e ||
                                  void 0 === e ||
                                  null === (a = e.config) ||
                                  void 0 === a
                                    ? void 0
                                    : a.url) || "nourl"
                              });
                          return (
                            e.config && R(e.config),
                            d.loading && N(d),
                            d.errorMessageShow && B(e),
                            401 ===
                            (null === (o = e.response) || void 0 === o
                              ? void 0
                              : o.status)
                              ? Promise.resolve({ error: { status: 401 } })
                              : Promise.reject(e)
                          );
                        }
                      ),
                      e.abrupt("return", l(t))
                    );
                  case 7:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        M.apply(this, arguments)
      );
    }
    t["c"] = C;
    function B(e) {
      var t, n;
      if (!p.a.isCancel(e)) {
        var o = "";
        if (e)
          switch (((e = JSON.stringify(e)), (e = JSON.parse(e)), e.status)) {
            case 302:
              o = "接口重定向了！";
              break;
            case 400:
              o = "参数不正确！";
              break;
            case 401:
              o = "";
              break;
            case 403:
              o = "您没有权限操作！";
              break;
            case 404:
              o = "请求地址出错: ".concat(e.response.config.url);
              break;
            case 408:
              o = "请求超时！";
              break;
            case 409:
              o = "系统已存在相同数据！";
              break;
            case 500:
              o = "服务器内部错误！";
              break;
            case 501:
              o = "服务未实现！";
              break;
            case 502:
              o = "网关错误！";
              break;
            case 503:
              o = "服务不可用！";
              break;
            case 504:
              o = "服务暂时无法访问，请稍后再试！";
              break;
            case 505:
              o = "HTTP版本不受支持！";
              break;
            case 1:
              o = "";
              break;
            default:
              o = "异常问题，请联系管理员！";
              break;
          }
        if (
          (null !== (t = e.message) &&
            void 0 !== t &&
            t.includes("timeout") &&
            ((o = "网络请求超时！"),
            Object(g["i"])({
              md: "request",
              ct: "request_timeout",
              ctvl: e.config.url
            })),
          null !== (n = e.message) && void 0 !== n && n.includes("Network"))
        ) {
          var i, a;
          if (
            ((o = window.navigator.onLine
              ? "服务端异常！"
              : "当前无法连接服务器，请检查网络是否通畅！"),
            Object(g["h"])({
              md: "detail",
              ct: "network_error",
              ctvl:
                (null === (i = e) ||
                void 0 === i ||
                null === (a = i.config) ||
                void 0 === a
                  ? void 0
                  : a.url) || "nourl"
            }),
            L["n"])
          )
            return void c()({ type: "error", message: o });
          setTimeout(function () {
            Object(g["g"])({
              md: "detail",
              ct: "goToLogin",
              ctid: "httpErrorStatusHandle"
            }),
              P("httpErrorStatusHandle");
          }, 5e3);
        }
        o && 400 !== e.status && c()({ type: "error", message: o });
      }
    }
    function N(e) {
      e.loading && T._count > 0 && T._count--,
        0 === T._count && (T._target.close(), (T._target = null));
    }
    function G(e) {
      var t = x(e);
      e.cancelToken =
        e.cancelToken ||
        new p.a.CancelToken(function (e) {
          O.has(t) || O.set(t, e);
        });
    }
    function R(e) {
      var t = x(e);
      if (O.has(t)) {
        var n = O.get(t);
        n(t), O["delete"](t);
      }
    }
    function x(e) {
      var t = e.url,
        n = e.method,
        o = e.params,
        i = e.data;
      return t.endsWith("feed-api/assistant/search_list")
        ? t
        : "/paas/risk/checkV2" !== t
        ? ("string" === typeof i && (i = JSON.parse(i)),
          [t, n, JSON.stringify(o), JSON.stringify(i)].join("&"))
        : void 0;
    }
    var F = p.a.create({
      baseURL: S,
      timeout: 1e4,
      headers: { "Content-Type": "application/json;charset=utf-8" }
    });
    function U(e, t, n) {
      var o = e.data || {},
        i = o.status;
      0 === i ? t(e.data || {}) : n(e.data || {});
    }
    var W = {
      get: function (e) {
        return new Promise(function (t, n) {
          F.get(e)
            .then(function (e) {
              U(e, t, n);
            })
            ["catch"](function () {
              n("网络错误");
            });
        });
      },
      post: function (e, t) {
        return new Promise(function (n, o) {
          F.post(e, t)
            .then(function (e) {
              U(e, n, o);
            })
            ["catch"](function () {
              o("网络错误，请重试");
            });
        });
      }
    };
    function q(e) {
      return W.post("/backend-api/v3/user/register_check_phone", e);
    }
    function V(e) {
      return (
        (e = Object.assign(e, Object(g["e"])())),
        W.post("/backend-api/v3/user/register_application", e)
      );
    }
  },
  b893: function (e, t, n) {
    "use strict";
    n.d(t, "d", function () {
      return c;
    }),
      n.d(t, "e", function () {
        return u;
      }),
      n.d(t, "c", function () {
        return s;
      }),
      n.d(t, "b", function () {
        return l;
      }),
      n.d(t, "a", function () {
        return d;
      });
    n("2421");
    var o = n("4f8a"),
      i = (n("88da"), n("5f87")),
      a = n("4360"),
      r = n("369e");
    function c(e, t, n) {
      try {
        return r.gte(e, t) && r.lt(e, n);
      } catch (o) {
        return !1;
      }
    }
    function u(e, t) {
      try {
        return r.lt(e, t);
      } catch (n) {
        return !1;
      }
    }
    function s(e, t) {
      try {
        return r.gte(e, t);
      } catch (n) {
        return !1;
      }
    }
    function l(e, t) {
      try {
        return r.gt(e, t);
      } catch (n) {
        return !1;
      }
    }
    var d = Object.defineProperty({}, "isLogin", {
      get: function () {
        return o["n"]
          ? Object(i["d"])()
          : null === a["a"] ||
            void 0 === a["a"] ||
            null === (e = a["a"].state) ||
            void 0 === e ||
            null === (t = e.Home) ||
            void 0 === t ||
            null === (n = t.userInfo) ||
            void 0 === n
          ? void 0
          : n.phone;
        var e, t, n;
      },
      enumerable: !0,
      configurable: !1
    });
  },
  c913: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return o;
    }),
      n.d(t, "a", function () {
        return i;
      });
    n("ef53"), n("b3d4"), n("f574"), n("2638");
    var o = function (e) {
        var t = window.location.href,
          n = t.split("?")[1];
        if (n)
          for (var o = n.split("&"), i = 0; i < o.length; i++) {
            var a = o[i].split("="),
              r = a[0],
              c = a[1];
            if (r === e) return c;
          }
      },
      i = function (e, t) {
        return e
          ? (null === e || void 0 === e ? void 0 : e.indexOf("?")) > -1
            ? "".concat(e, "&").concat(t)
            : "".concat(e, "?").concat(t)
          : "";
      };
  },
  d386: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return o;
    }),
      n.d(t, "a", function () {
        return i;
      });
    var o = { edit: 0, prod: 1 },
      i = { INIT: 0 };
  },
  e576: function (e, t, n) {
    "use strict";
    n.d(t, "e", function () {
      return g;
    }),
      n.d(t, "a", function () {
        return m;
      }),
      n.d(t, "b", function () {
        return h;
      }),
      n.d(t, "c", function () {
        return L;
      }),
      n.d(t, "d", function () {
        return w;
      }),
      n.d(t, "i", function () {
        return S;
      }),
      n.d(t, "g", function () {
        return y;
      }),
      n.d(t, "h", function () {
        return D;
      }),
      n.d(t, "j", function () {
        return O;
      }),
      n.d(t, "f", function () {
        return T;
      });
    var o = n("ca39"),
      i =
        (n("ef53"),
        n("c2a1"),
        n("65ee"),
        n("b3d4"),
        n("8037"),
        n("2638"),
        n("4360")),
      a = n("a18c"),
      r = n("0002"),
      c = n("2692"),
      u = n.n(c),
      s = n("c913"),
      l = n("e50b"),
      d = n.n(l),
      p = n("4f8a");
    function f() {
      return p["n"] && p["y"]
        ? p["y"]
        : (r["a"].genV4() + "").replace(/-/g, "");
    }
    function g() {
      return {
        distinct_id: i["a"].state.Detail.anonymousId,
        tm: p["p"] ? "miniapp" : "h5",
        fr: h()
      };
    }
    function m() {
      if (p["n"] && p["h"]) return p["h"];
      var e = localStorage.getItem("chatglm-deid");
      return e || ((e = f()), localStorage.setItem("chatglm-deid", e), e);
    }
    function h() {
      var e = "default",
        t = u.a.parse(decodeURIComponent(location.search));
      return (
        t.source
          ? (e = t.source)
          : t.fr
          ? ((e = t.fr), localStorage.setItem("chatglm-fr", e))
          : localStorage.getItem("chatglm-fr") &&
            (e = localStorage.getItem("chatglm-fr")),
        e
      );
    }
    function b() {
      var e = u.a.parse(location.search);
      return e.ffr ? e.ffr : "";
    }
    function v() {
      var e,
        t = u.a.parse(location.search);
      if (t.abtestid) e = t.abtestid;
      else {
        var n = d.a.get("abtestid");
        n && (e = n.split("|"));
      }
      return e;
    }
    var A = {
      deid: m(),
      reid: f(),
      pd: "chatglm",
      version: "1.0.0",
      webvs: window.page_version,
      pvid: Date.now(),
      fr: h(),
      ffr: b() || h()
    };
    function L() {
      return u.a.parse(window.location.href.replace(/[?#]/g, ""));
    }
    function w(e) {
      return u.a.parse(window.location.hash.replace(/[?#]/g, ""))[e];
    }
    function _(e) {
      var t,
        n,
        r,
        c,
        l,
        d,
        f,
        g,
        m = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      if (
        (null !== i["a"] &&
          void 0 !== i["a"] &&
          null !== (t = i["a"].state) &&
          void 0 !== t &&
          null !== (n = t.Home) &&
          void 0 !== n &&
          null !== (r = n.userInfo) &&
          void 0 !== r &&
          r._id) ||
        !(m < 3) ||
        "noNeedId" === (null === e || void 0 === e ? void 0 : e.ctvl)
      ) {
        var h = {
          asid:
            (null === a["a"] ||
            void 0 === a["a"] ||
            null === (c = a["a"].currentRoute) ||
            void 0 === c ||
            null === (l = c.params) ||
            void 0 === l
              ? void 0
              : l.id) ||
            Object(s["b"])("id") ||
            "",
          tm: p["C"],
          usid:
            null === i["a"] ||
            void 0 === i["a"] ||
            null === (d = i["a"].state) ||
            void 0 === d ||
            null === (f = d.Home) ||
            void 0 === f ||
            null === (g = f.userInfo) ||
            void 0 === g
              ? void 0
              : g._id,
          t: Date.now(),
          url: window.location.href,
          vs: p["c"],
          ab: v(),
          dmodel: p["i"]
        };
        p["n"] &&
          ((h.pdt = w("pdt") || "xiaozhi"), w("pds") && (h.pds = w("pds")));
        var b = Object(o["a"])(Object(o["a"])(Object(o["a"])({}, h), A), e),
          L = new Image(),
          S = u.a.stringify(b);
        (L.onerror = function () {}),
          (L.src = ""
            .concat(location.protocol, "//analysis.chatglm.cn/bdms/p.gif?")
            .concat(S));
      } else
        setTimeout(function () {
          _(e, ++m);
        }, 500);
    }
    function S(e) {
      (e.bt = "pv"), _(e);
    }
    function y(e, t) {
      (e.bt = "cl"), _(e, t);
    }
    function D(e) {
      (e.bt = "pf"), _(e);
    }
    function O() {
      var e,
        t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : "QuestionClick",
        n = arguments.length > 1 ? arguments[1] : void 0;
      null === (e = window.sensors) || void 0 === e || e.track(t, n);
    }
    function T(e) {}
  },
  ea46: function (e, t, n) {
    "use strict";
    n("a7b9");
  }
});
