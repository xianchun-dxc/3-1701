(self.webpackChunk = self.webpackChunk || []).push([
  [4804],
  {
    24349: function (e, t, n) {
      "use strict";
      n.d(t, {
        z: function () {
          return N;
        }
      });
      var r = n(44810),
        i = n(63313),
        o = n.n(i),
        a = n(20472),
        s = n(46629),
        l = n(97708),
        c = n(29274),
        u = n(30254),
        d = n(52643),
        f = n(83715),
        p = n(37096),
        g = n(91419),
        h = n(84007),
        m = n(61987),
        v = n(6593),
        b = n(93980),
        y = n(18548);
      function A(e) {
        return (0, y.Z)("MuiInputAdornment", e);
      }
      var x,
        w = (0, b.Z)("MuiInputAdornment", [
          "root",
          "filled",
          "standard",
          "outlined",
          "positionStart",
          "positionEnd",
          "disablePointerEvents",
          "hiddenLabel",
          "sizeSmall"
        ]),
        S = n(3034);
      const C = [
          "children",
          "className",
          "component",
          "disablePointerEvents",
          "disableTypography",
          "position",
          "variant"
        ],
        E = (0, a.ZP)("div", {
          name: "MuiInputAdornment",
          slot: "Root",
          overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
              t.root,
              t[`position${(0, g.Z)(n.position)}`],
              !0 === n.disablePointerEvents && t.disablePointerEvents,
              t[n.variant]
            ];
          }
        })(({ theme: e, ownerState: t }) =>
          (0, d.Z)(
            {
              display: "flex",
              height: "0.01em",
              maxHeight: "2em",
              alignItems: "center",
              whiteSpace: "nowrap",
              color: (e.vars || e).palette.action.active
            },
            "filled" === t.variant && {
              [`&.${w.positionStart}&:not(.${w.hiddenLabel})`]: {
                marginTop: 16
              }
            },
            "start" === t.position && { marginRight: 8 },
            "end" === t.position && { marginLeft: 8 },
            !0 === t.disablePointerEvents && { pointerEvents: "none" }
          )
        );
      var I = i.forwardRef(function (e, t) {
          const n = (0, S.Z)({ props: e, name: "MuiInputAdornment" }),
            {
              children: o,
              className: a,
              component: s = "div",
              disablePointerEvents: l = !1,
              disableTypography: c = !1,
              position: b,
              variant: y
            } = n,
            w = (0, u.Z)(n, C),
            I = (0, v.Z)() || {};
          let k = y;
          y && I.variant, I && !k && (k = I.variant);
          const Z = (0, d.Z)({}, n, {
              hiddenLabel: I.hiddenLabel,
              size: I.size,
              disablePointerEvents: l,
              position: b,
              variant: k
            }),
            F = ((e) => {
              const {
                  classes: t,
                  disablePointerEvents: n,
                  hiddenLabel: r,
                  position: i,
                  size: o,
                  variant: a
                } = e,
                s = {
                  root: [
                    "root",
                    n && "disablePointerEvents",
                    i && `position${(0, g.Z)(i)}`,
                    a,
                    r && "hiddenLabel",
                    o && `size${(0, g.Z)(o)}`
                  ]
                };
              return (0, p.Z)(s, A, t);
            })(Z);
          return (0,
          r.jsx)(m.Z.Provider, { value: null, children: (0, r.jsx)(E, (0, d.Z)({ as: s, ownerState: Z, className: (0, f.Z)(F.root, a), ref: t }, w, { children: "string" != typeof o || c ? (0, r.jsxs)(i.Fragment, { children: ["start" === b ? x || (x = (0, r.jsx)("span", { className: "notranslate", children: "​" })) : null, o] }) : (0, r.jsx)(h.Z, { color: "text.secondary", children: o }) })) });
        }),
        k = n(5368);
      const Z = ["B", "kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        F = ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"],
        O = [
          "b",
          "kbit",
          "Mbit",
          "Gbit",
          "Tbit",
          "Pbit",
          "Ebit",
          "Zbit",
          "Ybit"
        ],
        R = [
          "b",
          "kibit",
          "Mibit",
          "Gibit",
          "Tibit",
          "Pibit",
          "Eibit",
          "Zibit",
          "Yibit"
        ],
        M = (e, t, n) => {
          let r = e;
          return (
            "string" == typeof t || Array.isArray(t)
              ? (r = e.toLocaleString(t, n))
              : (!0 === t || void 0 !== n) && (r = e.toLocaleString(void 0, n)),
            r
          );
        };
      function j(e, t) {
        if (!Number.isFinite(e))
          throw new TypeError(
            `Expected a finite number, got ${typeof e}: ${e}`
          );
        const n = (t = { bits: !1, binary: !1, space: !0, ...t }).bits
            ? t.binary
              ? R
              : O
            : t.binary
            ? F
            : Z,
          r = t.space ? " " : "";
        if (t.signed && 0 === e) return ` 0${r}${n[0]}`;
        const i = e < 0,
          o = i ? "-" : t.signed ? "+" : "";
        let a;
        if (
          (i && (e = -e),
          void 0 !== t.minimumFractionDigits &&
            (a = { minimumFractionDigits: t.minimumFractionDigits }),
          void 0 !== t.maximumFractionDigits &&
            (a = { maximumFractionDigits: t.maximumFractionDigits, ...a }),
          e < 1)
        ) {
          return o + M(e, t.locale, a) + r + n[0];
        }
        const s = Math.min(
          Math.floor(
            t.binary ? Math.log(e) / Math.log(1024) : Math.log10(e) / 3
          ),
          n.length - 1
        );
        (e /= (t.binary ? 1024 : 1e3) ** s), a || (e = e.toPrecision(3));
        return o + M(Number(e), t.locale, a) + r + n[s];
      }
      const B = {
          Label: (0, a.ZP)("label")`
  position: relative;
  flex-grow: 1;

  input {
    opacity: 0 !important;
  }

  & > span {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 2;
    display: flex;
    align-items: center;
  }

  span.MuiFileInput-placeholder {
    color: gray;
  }
`,
          Filename: (0, a.ZP)("div")`
  display: flex;
  width: 100%;

  & > span {
    display: block;
  }

  & > span:first-of-type {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  & > span:last-of-type {
    flex-shrink: 0;
    display: block;
  }
`
        },
        T = o().forwardRef((e, t) => {
          const { text: n, isPlaceholder: i, placeholder: a, ...s } = e,
            l = o().useId();
          return (0, r.jsxs)(B.Label, {
            htmlFor: l,
            children: [
              (0, r.jsx)("input", { ...s, ref: t, id: l }),
              n
                ? (0, r.jsx)("span", {
                    "aria-placeholder": a,
                    className: i ? "MuiFileInput-placeholder" : "",
                    children:
                      "string" == typeof n
                        ? n
                        : (0, r.jsxs)(B.Filename, {
                            children: [
                              (0, r.jsx)("span", { children: n.filename }),
                              (0, r.jsxs)("span", {
                                children: [".", n.extension]
                              })
                            ]
                          })
                  })
                : null
            ]
          });
        });
      function P(e) {
        return typeof window < "u" && e instanceof File;
      }
      const N = o().forwardRef((e, t) => {
        const {
            value: n,
            onChange: i,
            disabled: a,
            getInputText: u,
            getSizeText: d,
            placeholder: f,
            hideSizeText: p,
            inputProps: g,
            InputProps: m,
            multiple: v,
            className: b,
            ...y
          } = e,
          A = o().useRef(null),
          x = v || g?.multiple || m?.inputProps?.multiple || !1,
          w = Array.isArray(n)
            ? (function (e) {
                return e.length > 0;
              })(n)
            : P(n);
        return (0, r.jsx)(k.Z, {
          ref: t,
          type: "file",
          disabled: a,
          onChange: (e) => {
            const t = e.target.files,
              n = t
                ? (function (e) {
                    return Array.from(e);
                  })(t)
                : [];
            (() => {
              const e = A.current;
              e && (e.value = "");
            })(),
              i?.(x ? n : n[0]);
          },
          className: `MuiFileInput-TextField ${b || ""}`,
          InputProps: {
            startAdornment: (0, r.jsx)(I, {
              position: "start",
              children: (0, r.jsx)(s.Z, {})
            }),
            endAdornment: (0, r.jsxs)(I, {
              position: "end",
              style: { visibility: w ? "visible" : "hidden" },
              children: [
                p
                  ? null
                  : (0, r.jsx)(h.Z, {
                      variant: "caption",
                      mr: "2px",
                      className: "MuiFileInput-Typography-size-text",
                      children: (() => {
                        if ("function" == typeof d && void 0 !== n) return d(n);
                        if (w) {
                          if (Array.isArray(n)) {
                            const e = (function (e) {
                              return e.reduce((e, t) => e + t.size, 0);
                            })(n);
                            return j(e);
                          }
                          if (P(n)) return j(n.size);
                        }
                        return "";
                      })()
                    }),
                (0, r.jsx)(c.Z, {
                  "aria-label": "Clear",
                  title: "Clear",
                  size: "small",
                  disabled: a,
                  className: "MuiFileInput-IconButton",
                  onClick: (e) => {
                    e.preventDefault(), !a && i?.(v ? [] : null);
                  },
                  children: (0, r.jsx)(l.Z, { fontSize: "small" })
                })
              ]
            }),
            ...m,
            inputProps: {
              text:
                null === n || (Array.isArray(n) && 0 === n.length)
                  ? f || ""
                  : "function" == typeof u && void 0 !== n
                  ? u(n)
                  : n && w
                  ? Array.isArray(n) && n.length > 1
                    ? `${n.length} files`
                    : (function (e) {
                        const t = (P(e) ? e.name : e[0]?.name || "").split("."),
                          n = t.pop();
                        return { filename: t.join("."), extension: n };
                      })(n)
                  : "",
              multiple: x,
              isPlaceholder: null === n || (Array.isArray(n) && 0 === n.length),
              ref: A,
              placeholder: f,
              ...g,
              ...m?.inputProps
            },
            inputComponent: T
          },
          ...y
        });
      });
    },
    94663: function (e, t, n) {
      "use strict";
      n.d(t, {
        do: function () {
          return D;
        }
      });
      var r,
        i = [],
        o = "ResizeObserver loop completed with undelivered notifications.";
      !(function (e) {
        (e.BORDER_BOX = "border-box"),
          (e.CONTENT_BOX = "content-box"),
          (e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box");
      })(r || (r = {}));
      var a,
        s = function (e) {
          return Object.freeze(e);
        },
        l = function (e, t) {
          (this.inlineSize = e), (this.blockSize = t), s(this);
        },
        c = (function () {
          function e(e, t, n, r) {
            return (
              (this.x = e),
              (this.y = t),
              (this.width = n),
              (this.height = r),
              (this.top = this.y),
              (this.left = this.x),
              (this.bottom = this.top + this.height),
              (this.right = this.left + this.width),
              s(this)
            );
          }
          return (
            (e.prototype.toJSON = function () {
              var e = this;
              return {
                x: e.x,
                y: e.y,
                top: e.top,
                right: e.right,
                bottom: e.bottom,
                left: e.left,
                width: e.width,
                height: e.height
              };
            }),
            (e.fromRect = function (t) {
              return new e(t.x, t.y, t.width, t.height);
            }),
            e
          );
        })(),
        u = function (e) {
          return e instanceof SVGElement && "getBBox" in e;
        },
        d = function (e) {
          if (u(e)) {
            var t = e.getBBox(),
              n = t.width,
              r = t.height;
            return !n && !r;
          }
          var i = e,
            o = i.offsetWidth,
            a = i.offsetHeight;
          return !(o || a || e.getClientRects().length);
        },
        f = function (e) {
          var t;
          if (e instanceof Element) return !0;
          var n =
            null === (t = null == e ? void 0 : e.ownerDocument) || void 0 === t
              ? void 0
              : t.defaultView;
          return !!(n && e instanceof n.Element);
        },
        p = "undefined" != typeof window ? window : {},
        g = new WeakMap(),
        h = /auto|scroll/,
        m = /^tb|vertical/,
        v = /msie|trident/i.test(p.navigator && p.navigator.userAgent),
        b = function (e) {
          return parseFloat(e || "0");
        },
        y = function (e, t, n) {
          return (
            void 0 === e && (e = 0),
            void 0 === t && (t = 0),
            void 0 === n && (n = !1),
            new l((n ? t : e) || 0, (n ? e : t) || 0)
          );
        },
        A = s({
          devicePixelContentBoxSize: y(),
          borderBoxSize: y(),
          contentBoxSize: y(),
          contentRect: new c(0, 0, 0, 0)
        }),
        x = function (e, t) {
          if ((void 0 === t && (t = !1), g.has(e) && !t)) return g.get(e);
          if (d(e)) return g.set(e, A), A;
          var n = getComputedStyle(e),
            r = u(e) && e.ownerSVGElement && e.getBBox(),
            i = !v && "border-box" === n.boxSizing,
            o = m.test(n.writingMode || ""),
            a = !r && h.test(n.overflowY || ""),
            l = !r && h.test(n.overflowX || ""),
            f = r ? 0 : b(n.paddingTop),
            p = r ? 0 : b(n.paddingRight),
            x = r ? 0 : b(n.paddingBottom),
            w = r ? 0 : b(n.paddingLeft),
            S = r ? 0 : b(n.borderTopWidth),
            C = r ? 0 : b(n.borderRightWidth),
            E = r ? 0 : b(n.borderBottomWidth),
            I = w + p,
            k = f + x,
            Z = (r ? 0 : b(n.borderLeftWidth)) + C,
            F = S + E,
            O = l ? e.offsetHeight - F - e.clientHeight : 0,
            R = a ? e.offsetWidth - Z - e.clientWidth : 0,
            M = i ? I + Z : 0,
            j = i ? k + F : 0,
            B = r ? r.width : b(n.width) - M - R,
            T = r ? r.height : b(n.height) - j - O,
            P = B + I + R + Z,
            N = T + k + O + F,
            V = s({
              devicePixelContentBoxSize: y(
                Math.round(B * devicePixelRatio),
                Math.round(T * devicePixelRatio),
                o
              ),
              borderBoxSize: y(P, N, o),
              contentBoxSize: y(B, T, o),
              contentRect: new c(w, f, B, T)
            });
          return g.set(e, V), V;
        },
        w = function (e, t, n) {
          var i = x(e, n),
            o = i.borderBoxSize,
            a = i.contentBoxSize,
            s = i.devicePixelContentBoxSize;
          switch (t) {
            case r.DEVICE_PIXEL_CONTENT_BOX:
              return s;
            case r.BORDER_BOX:
              return o;
            default:
              return a;
          }
        },
        S = function (e) {
          var t = x(e);
          (this.target = e),
            (this.contentRect = t.contentRect),
            (this.borderBoxSize = s([t.borderBoxSize])),
            (this.contentBoxSize = s([t.contentBoxSize])),
            (this.devicePixelContentBoxSize = s([t.devicePixelContentBoxSize]));
        },
        C = function (e) {
          if (d(e)) return 1 / 0;
          for (var t = 0, n = e.parentNode; n; ) (t += 1), (n = n.parentNode);
          return t;
        },
        E = function () {
          var e = 1 / 0,
            t = [];
          i.forEach(function (n) {
            if (0 !== n.activeTargets.length) {
              var r = [];
              n.activeTargets.forEach(function (t) {
                var n = new S(t.target),
                  i = C(t.target);
                r.push(n),
                  (t.lastReportedSize = w(t.target, t.observedBox)),
                  i < e && (e = i);
              }),
                t.push(function () {
                  n.callback.call(n.observer, r, n.observer);
                }),
                n.activeTargets.splice(0, n.activeTargets.length);
            }
          });
          for (var n = 0, r = t; n < r.length; n++) {
            (0, r[n])();
          }
          return e;
        },
        I = function (e) {
          i.forEach(function (t) {
            t.activeTargets.splice(0, t.activeTargets.length),
              t.skippedTargets.splice(0, t.skippedTargets.length),
              t.observationTargets.forEach(function (n) {
                n.isActive() &&
                  (C(n.target) > e
                    ? t.activeTargets.push(n)
                    : t.skippedTargets.push(n));
              });
          });
        },
        k = function () {
          var e,
            t = 0;
          for (
            I(t);
            i.some(function (e) {
              return e.activeTargets.length > 0;
            });

          )
            (t = E()), I(t);
          return (
            i.some(function (e) {
              return e.skippedTargets.length > 0;
            }) &&
              ("function" == typeof ErrorEvent
                ? (e = new ErrorEvent("error", { message: o }))
                : ((e = document.createEvent("Event")).initEvent(
                    "error",
                    !1,
                    !1
                  ),
                  (e.message = o)),
              window.dispatchEvent(e)),
            t > 0
          );
        },
        Z = [],
        F = function (e) {
          if (!a) {
            var t = 0,
              n = document.createTextNode("");
            new MutationObserver(function () {
              return Z.splice(0).forEach(function (e) {
                return e();
              });
            }).observe(n, { characterData: !0 }),
              (a = function () {
                n.textContent = "".concat(t ? t-- : t++);
              });
          }
          Z.push(e), a();
        },
        O = 0,
        R = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
        M = [
          "resize",
          "load",
          "transitionend",
          "animationend",
          "animationstart",
          "animationiteration",
          "keyup",
          "keydown",
          "mouseup",
          "mousedown",
          "mouseover",
          "mouseout",
          "blur",
          "focus"
        ],
        j = function (e) {
          return void 0 === e && (e = 0), Date.now() + e;
        },
        B = !1,
        T = new ((function () {
          function e() {
            var e = this;
            (this.stopped = !0),
              (this.listener = function () {
                return e.schedule();
              });
          }
          return (
            (e.prototype.run = function (e) {
              var t = this;
              if ((void 0 === e && (e = 250), !B)) {
                B = !0;
                var n,
                  r = j(e);
                (n = function () {
                  var n = !1;
                  try {
                    n = k();
                  } finally {
                    if (((B = !1), (e = r - j()), !O)) return;
                    n ? t.run(1e3) : e > 0 ? t.run(e) : t.start();
                  }
                }),
                  F(function () {
                    requestAnimationFrame(n);
                  });
              }
            }),
            (e.prototype.schedule = function () {
              this.stop(), this.run();
            }),
            (e.prototype.observe = function () {
              var e = this,
                t = function () {
                  return e.observer && e.observer.observe(document.body, R);
                };
              document.body ? t() : p.addEventListener("DOMContentLoaded", t);
            }),
            (e.prototype.start = function () {
              var e = this;
              this.stopped &&
                ((this.stopped = !1),
                (this.observer = new MutationObserver(this.listener)),
                this.observe(),
                M.forEach(function (t) {
                  return p.addEventListener(t, e.listener, !0);
                }));
            }),
            (e.prototype.stop = function () {
              var e = this;
              this.stopped ||
                (this.observer && this.observer.disconnect(),
                M.forEach(function (t) {
                  return p.removeEventListener(t, e.listener, !0);
                }),
                (this.stopped = !0));
            }),
            e
          );
        })())(),
        P = function (e) {
          !O && e > 0 && T.start(), !(O += e) && T.stop();
        },
        N = (function () {
          function e(e, t) {
            (this.target = e),
              (this.observedBox = t || r.CONTENT_BOX),
              (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
          }
          return (
            (e.prototype.isActive = function () {
              var e,
                t = w(this.target, this.observedBox, !0);
              return (
                (e = this.target),
                u(e) ||
                  (function (e) {
                    switch (e.tagName) {
                      case "INPUT":
                        if ("image" !== e.type) break;
                      case "VIDEO":
                      case "AUDIO":
                      case "EMBED":
                      case "OBJECT":
                      case "CANVAS":
                      case "IFRAME":
                      case "IMG":
                        return !0;
                    }
                    return !1;
                  })(e) ||
                  "inline" !== getComputedStyle(e).display ||
                  (this.lastReportedSize = t),
                this.lastReportedSize.inlineSize !== t.inlineSize ||
                  this.lastReportedSize.blockSize !== t.blockSize
              );
            }),
            e
          );
        })(),
        V = function (e, t) {
          (this.activeTargets = []),
            (this.skippedTargets = []),
            (this.observationTargets = []),
            (this.observer = e),
            (this.callback = t);
        },
        Q = new WeakMap(),
        W = function (e, t) {
          for (var n = 0; n < e.length; n += 1) if (e[n].target === t) return n;
          return -1;
        },
        L = (function () {
          function e() {}
          return (
            (e.connect = function (e, t) {
              var n = new V(e, t);
              Q.set(e, n);
            }),
            (e.observe = function (e, t, n) {
              var r = Q.get(e),
                o = 0 === r.observationTargets.length;
              W(r.observationTargets, t) < 0 &&
                (o && i.push(r),
                r.observationTargets.push(new N(t, n && n.box)),
                P(1),
                T.schedule());
            }),
            (e.unobserve = function (e, t) {
              var n = Q.get(e),
                r = W(n.observationTargets, t),
                o = 1 === n.observationTargets.length;
              r >= 0 &&
                (o && i.splice(i.indexOf(n), 1),
                n.observationTargets.splice(r, 1),
                P(-1));
            }),
            (e.disconnect = function (e) {
              var t = this,
                n = Q.get(e);
              n.observationTargets.slice().forEach(function (n) {
                return t.unobserve(e, n.target);
              }),
                n.activeTargets.splice(0, n.activeTargets.length);
            }),
            e
          );
        })(),
        D = (function () {
          function e(e) {
            if (0 === arguments.length)
              throw new TypeError(
                "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present."
              );
            if ("function" != typeof e)
              throw new TypeError(
                "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function."
              );
            L.connect(this, e);
          }
          return (
            (e.prototype.observe = function (e, t) {
              if (0 === arguments.length)
                throw new TypeError(
                  "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present."
                );
              if (!f(e))
                throw new TypeError(
                  "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element"
                );
              L.observe(this, e, t);
            }),
            (e.prototype.unobserve = function (e) {
              if (0 === arguments.length)
                throw new TypeError(
                  "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present."
                );
              if (!f(e))
                throw new TypeError(
                  "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element"
                );
              L.unobserve(this, e);
            }),
            (e.prototype.disconnect = function () {
              L.disconnect(this);
            }),
            (e.toString = function () {
              return "function ResizeObserver () { [polyfill code] }";
            }),
            e
          );
        })();
    },
    46629: function (e, t, n) {
      "use strict";
      var r = n(7983);
      t.Z = void 0;
      var i = r(n(47565)),
        o = n(44810),
        a = (0, i.default)(
          (0, o.jsx)("path", {
            d: "M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"
          }),
          "AttachFile"
        );
      t.Z = a;
    },
    97708: function (e, t, n) {
      "use strict";
      var r = n(7983);
      t.Z = void 0;
      var i = r(n(47565)),
        o = n(44810),
        a = (0, i.default)(
          (0, o.jsx)("path", {
            d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
          }),
          "Close"
        );
      t.Z = a;
    },
    47565: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return r.createSvgIcon;
          }
        });
      var r = n(8235);
    },
    29274: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return A;
        }
      });
      var r = n(30254),
        i = n(52643),
        o = n(63313),
        a = n(83715),
        s = n(37096),
        l = n(50989),
        c = n(20472),
        u = n(3034),
        d = n(72245),
        f = n(91419),
        p = n(93980),
        g = n(18548);
      function h(e) {
        return (0, g.Z)("MuiIconButton", e);
      }
      var m = (0, p.Z)("MuiIconButton", [
          "root",
          "disabled",
          "colorInherit",
          "colorPrimary",
          "colorSecondary",
          "colorError",
          "colorInfo",
          "colorSuccess",
          "colorWarning",
          "edgeStart",
          "edgeEnd",
          "sizeSmall",
          "sizeMedium",
          "sizeLarge"
        ]),
        v = n(44810);
      const b = [
          "edge",
          "children",
          "className",
          "color",
          "disabled",
          "disableFocusRipple",
          "size"
        ],
        y = (0, c.ZP)(d.Z, {
          name: "MuiIconButton",
          slot: "Root",
          overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
              t.root,
              "default" !== n.color && t[`color${(0, f.Z)(n.color)}`],
              n.edge && t[`edge${(0, f.Z)(n.edge)}`],
              t[`size${(0, f.Z)(n.size)}`]
            ];
          }
        })(
          ({ theme: e, ownerState: t }) =>
            (0, i.Z)(
              {
                textAlign: "center",
                flex: "0 0 auto",
                fontSize: e.typography.pxToRem(24),
                padding: 8,
                borderRadius: "50%",
                overflow: "visible",
                color: (e.vars || e).palette.action.active,
                transition: e.transitions.create("background-color", {
                  duration: e.transitions.duration.shortest
                })
              },
              !t.disableRipple && {
                "&:hover": {
                  backgroundColor: e.vars
                    ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`
                    : (0, l.Fq)(
                        e.palette.action.active,
                        e.palette.action.hoverOpacity
                      ),
                  "@media (hover: none)": { backgroundColor: "transparent" }
                }
              },
              "start" === t.edge && {
                marginLeft: "small" === t.size ? -3 : -12
              },
              "end" === t.edge && { marginRight: "small" === t.size ? -3 : -12 }
            ),
          ({ theme: e, ownerState: t }) => {
            var n;
            const r = null == (n = (e.vars || e).palette) ? void 0 : n[t.color];
            return (0, i.Z)(
              {},
              "inherit" === t.color && { color: "inherit" },
              "inherit" !== t.color &&
                "default" !== t.color &&
                (0, i.Z)(
                  { color: null == r ? void 0 : r.main },
                  !t.disableRipple && {
                    "&:hover": (0, i.Z)(
                      {},
                      r && {
                        backgroundColor: e.vars
                          ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                          : (0, l.Fq)(r.main, e.palette.action.hoverOpacity)
                      },
                      {
                        "@media (hover: none)": {
                          backgroundColor: "transparent"
                        }
                      }
                    )
                  }
                ),
              "small" === t.size && {
                padding: 5,
                fontSize: e.typography.pxToRem(18)
              },
              "large" === t.size && {
                padding: 12,
                fontSize: e.typography.pxToRem(28)
              },
              {
                [`&.${m.disabled}`]: {
                  backgroundColor: "transparent",
                  color: (e.vars || e).palette.action.disabled
                }
              }
            );
          }
        );
      var A = o.forwardRef(function (e, t) {
        const n = (0, u.Z)({ props: e, name: "MuiIconButton" }),
          {
            edge: o = !1,
            children: l,
            className: c,
            color: d = "default",
            disabled: p = !1,
            disableFocusRipple: g = !1,
            size: m = "medium"
          } = n,
          A = (0, r.Z)(n, b),
          x = (0, i.Z)({}, n, {
            edge: o,
            color: d,
            disabled: p,
            disableFocusRipple: g,
            size: m
          }),
          w = ((e) => {
            const { classes: t, disabled: n, color: r, edge: i, size: o } = e,
              a = {
                root: [
                  "root",
                  n && "disabled",
                  "default" !== r && `color${(0, f.Z)(r)}`,
                  i && `edge${(0, f.Z)(i)}`,
                  `size${(0, f.Z)(o)}`
                ]
              };
            return (0, s.Z)(a, h, t);
          })(x);
        return (0,
        v.jsx)(y, (0, i.Z)({ className: (0, a.Z)(w.root, c), centerRipple: !0, focusRipple: !g, disabled: p, ref: t, ownerState: x }, A, { children: l }));
      });
    },
    55691: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return E;
        }
      });
      var r = n(30254),
        i = n(52643),
        o = n(63313),
        a = n(83715),
        s = n(37096),
        l = n(50989),
        c = n(20472),
        u = n(3034),
        d = n(31365),
        f = n(72245),
        p = n(22980),
        g = n(2346),
        h = n(68120),
        m = n(93980);
      var v = (0, m.Z)("MuiListItemIcon", ["root", "alignItemsFlexStart"]);
      var b = (0, m.Z)("MuiListItemText", [
          "root",
          "multiline",
          "dense",
          "inset",
          "primary",
          "secondary"
        ]),
        y = n(18548);
      function A(e) {
        return (0, y.Z)("MuiMenuItem", e);
      }
      var x = (0, m.Z)("MuiMenuItem", [
          "root",
          "focusVisible",
          "dense",
          "disabled",
          "divider",
          "gutters",
          "selected"
        ]),
        w = n(44810);
      const S = [
          "autoFocus",
          "component",
          "dense",
          "divider",
          "disableGutters",
          "focusVisibleClassName",
          "role",
          "tabIndex",
          "className"
        ],
        C = (0, c.ZP)(f.Z, {
          shouldForwardProp: (e) => (0, c.FO)(e) || "classes" === e,
          name: "MuiMenuItem",
          slot: "Root",
          overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
              t.root,
              n.dense && t.dense,
              n.divider && t.divider,
              !n.disableGutters && t.gutters
            ];
          }
        })(({ theme: e, ownerState: t }) =>
          (0, i.Z)(
            {},
            e.typography.body1,
            {
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              position: "relative",
              textDecoration: "none",
              minHeight: 48,
              paddingTop: 6,
              paddingBottom: 6,
              boxSizing: "border-box",
              whiteSpace: "nowrap"
            },
            !t.disableGutters && { paddingLeft: 16, paddingRight: 16 },
            t.divider && {
              borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
              backgroundClip: "padding-box"
            },
            {
              "&:hover": {
                textDecoration: "none",
                backgroundColor: (e.vars || e).palette.action.hover,
                "@media (hover: none)": { backgroundColor: "transparent" }
              },
              [`&.${x.selected}`]: {
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
                  : (0, l.Fq)(
                      e.palette.primary.main,
                      e.palette.action.selectedOpacity
                    ),
                [`&.${x.focusVisible}`]: {
                  backgroundColor: e.vars
                    ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
                    : (0, l.Fq)(
                        e.palette.primary.main,
                        e.palette.action.selectedOpacity +
                          e.palette.action.focusOpacity
                      )
                }
              },
              [`&.${x.selected}:hover`]: {
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
                  : (0, l.Fq)(
                      e.palette.primary.main,
                      e.palette.action.selectedOpacity +
                        e.palette.action.hoverOpacity
                    ),
                "@media (hover: none)": {
                  backgroundColor: e.vars
                    ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
                    : (0, l.Fq)(
                        e.palette.primary.main,
                        e.palette.action.selectedOpacity
                      )
                }
              },
              [`&.${x.focusVisible}`]: {
                backgroundColor: (e.vars || e).palette.action.focus
              },
              [`&.${x.disabled}`]: {
                opacity: (e.vars || e).palette.action.disabledOpacity
              },
              [`& + .${h.Z.root}`]: {
                marginTop: e.spacing(1),
                marginBottom: e.spacing(1)
              },
              [`& + .${h.Z.inset}`]: { marginLeft: 52 },
              [`& .${b.root}`]: { marginTop: 0, marginBottom: 0 },
              [`& .${b.inset}`]: { paddingLeft: 36 },
              [`& .${v.root}`]: { minWidth: 36 }
            },
            !t.dense && { [e.breakpoints.up("sm")]: { minHeight: "auto" } },
            t.dense &&
              (0, i.Z)(
                { minHeight: 32, paddingTop: 4, paddingBottom: 4 },
                e.typography.body2,
                { [`& .${v.root} svg`]: { fontSize: "1.25rem" } }
              )
          )
        );
      var E = o.forwardRef(function (e, t) {
        const n = (0, u.Z)({ props: e, name: "MuiMenuItem" }),
          {
            autoFocus: l = !1,
            component: c = "li",
            dense: f = !1,
            divider: h = !1,
            disableGutters: m = !1,
            focusVisibleClassName: v,
            role: b = "menuitem",
            tabIndex: y,
            className: x
          } = n,
          E = (0, r.Z)(n, S),
          I = o.useContext(d.Z),
          k = o.useMemo(
            () => ({ dense: f || I.dense || !1, disableGutters: m }),
            [I.dense, f, m]
          ),
          Z = o.useRef(null);
        (0, p.Z)(() => {
          l && Z.current && Z.current.focus();
        }, [l]);
        const F = (0, i.Z)({}, n, {
            dense: k.dense,
            divider: h,
            disableGutters: m
          }),
          O = ((e) => {
            const {
                disabled: t,
                dense: n,
                divider: r,
                disableGutters: o,
                selected: a,
                classes: l
              } = e,
              c = {
                root: [
                  "root",
                  n && "dense",
                  t && "disabled",
                  !o && "gutters",
                  r && "divider",
                  a && "selected"
                ]
              },
              u = (0, s.Z)(c, A, l);
            return (0, i.Z)({}, l, u);
          })(n),
          R = (0, g.Z)(Z, t);
        let M;
        return (
          n.disabled || (M = void 0 !== y ? y : -1),
          (0, w.jsx)(d.Z.Provider, {
            value: k,
            children: (0, w.jsx)(
              C,
              (0, i.Z)(
                {
                  ref: R,
                  role: b,
                  tabIndex: M,
                  component: c,
                  focusVisibleClassName: (0, a.Z)(O.focusVisible, v),
                  className: (0, a.Z)(O.root, x)
                },
                E,
                { ownerState: F, classes: O }
              )
            )
          })
        );
      });
    },
    8235: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          capitalize: function () {
            return i.Z;
          },
          createChainedFunction: function () {
            return o;
          },
          createSvgIcon: function () {
            return a.Z;
          },
          debounce: function () {
            return s.Z;
          },
          deprecatedPropType: function () {
            return l;
          },
          isMuiElement: function () {
            return c.Z;
          },
          ownerDocument: function () {
            return u.Z;
          },
          ownerWindow: function () {
            return d.Z;
          },
          requirePropFactory: function () {
            return f;
          },
          setRef: function () {
            return p;
          },
          unstable_ClassNameGenerator: function () {
            return x;
          },
          unstable_useEnhancedEffect: function () {
            return g.Z;
          },
          unstable_useId: function () {
            return h.Z;
          },
          unsupportedProp: function () {
            return m;
          },
          useControlled: function () {
            return v.Z;
          },
          useEventCallback: function () {
            return b.Z;
          },
          useForkRef: function () {
            return y.Z;
          },
          useIsFocusVisible: function () {
            return A.Z;
          }
        });
      var r = n(47976),
        i = n(91419),
        o = n(76231).Z,
        a = n(86452),
        s = n(5695);
      var l = function (e, t) {
          return () => null;
        },
        c = n(86404),
        u = n(36843),
        d = n(83575);
      n(52643);
      var f = function (e, t) {
          return () => null;
        },
        p = n(22027).Z,
        g = n(22980),
        h = n(28626);
      var m = function (e, t, n, r, i) {
          return null;
        },
        v = n(75949),
        b = n(96369),
        y = n(2346),
        A = n(65640);
      const x = {
        configure: (e) => {
          r.Z.configure(e);
        }
      };
    },
    59884: function (e, t, n) {
      "use strict";
      n.d(t, {
        x: function () {
          return O;
        },
        j: function () {
          return F;
        }
      });
      var r = n(78095),
        i = n.n(r),
        o = n(91150),
        a = n.n(o),
        s = n(63313),
        l = n(10554),
        c = n(92920),
        u = {
          isHistory(e) {
            return (
              (0, c.P)(e) &&
              Array.isArray(e.redos) &&
              Array.isArray(e.undos) &&
              (0 === e.redos.length ||
                l.OX.isOperationList(e.redos[0].operations)) &&
              (0 === e.undos.length ||
                l.OX.isOperationList(e.undos[0].operations))
            );
          }
        },
        d = (new WeakMap(), new WeakMap()),
        f = new WeakMap(),
        p = {
          isHistoryEditor(e) {
            return u.isHistory(e.history) && l.ML.isEditor(e);
          },
          isMerging(e) {
            return f.get(e);
          },
          isSaving(e) {
            return d.get(e);
          },
          redo(e) {
            e.redo();
          },
          undo(e) {
            e.undo();
          },
          withoutMerging(e, t) {
            var n = p.isMerging(e);
            f.set(e, !1), t(), f.set(e, n);
          },
          withoutSaving(e, t) {
            var n = p.isSaving(e);
            d.set(e, !1), t(), d.set(e, n);
          }
        },
        g = (e, t) =>
          !(
            !t ||
            "insert_text" !== e.type ||
            "insert_text" !== t.type ||
            e.offset !== t.offset + t.text.length ||
            !l.y$.equals(e.path, t.path)
          ) ||
          !(
            !t ||
            "remove_text" !== e.type ||
            "remove_text" !== t.type ||
            e.offset + e.text.length !== t.offset ||
            !l.y$.equals(e.path, t.path)
          ),
        h = (e, t) => "set_selection" !== e.type,
        m = n(71410),
        v = n(44810),
        b = function (e) {
          var t = e.attributes,
            n = e.children,
            r = e.element;
          return (0, v.jsxs)(
            "span",
            i()(
              i()({}, t),
              {},
              { contentEditable: !1, children: ["@", r.character, n] }
            )
          );
        },
        y = function (e) {
          var t = e.attributes,
            n = e.children;
          return "mention" === e.element.type
            ? (0, v.jsx)(b, i()({}, e))
            : (0, v.jsx)("div", i()(i()({}, t), {}, { children: n }));
        },
        A = "editor___KShcc",
        x = function (e) {
          var t = e.attributes,
            n = e.children,
            r = e.leaf,
            o = n;
          return (
            r.bold && (o = (0, v.jsx)("strong", { children: n })),
            r.code && (o = (0, v.jsx)("code", { children: n })),
            r.italic && (o = (0, v.jsx)("em", { children: n })),
            r.underline && (o = (0, v.jsx)("u", { children: n })),
            (0, v.jsx)("span", i()(i()({}, t), {}, { children: o }))
          );
        },
        w = n(46328);
      function S(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : { emptySplit: !1, include: !1 },
          r = n.emptySplit,
          i = n.include,
          o = e.selection;
        if (!o || !l.e6.isCollapsed(o))
          return { wordMatch: null, wordRange: null };
        var a = o.anchor,
          s = a.offset,
          c = a.path,
          u = l.ML.node(e, c)[0];
        if (!l.xv.isText(u)) return { wordMatch: null, wordRange: null };
        for (var d = u.text.slice(0, s), f = "", p = 0, g = d.length; g--; ) {
          var h = d[g];
          if (h && t.has(h)) {
            (f = h), (p = g);
            break;
          }
        }
        if ("" !== f || r) {
          i || "" === f || p++;
          var m = {
            anchor: { path: c, offset: p },
            focus: { path: c, offset: s }
          };
          return { wordMatch: d.slice(p), wordRange: m };
        }
        return { wordMatch: null, wordRange: null };
      }
      var C = new Set("[.,，!;\"'?()[]{}（）【】「」-。；！“”‘’？]".split("")),
        E = new Set("@"),
        I = function (e, t) {
          return {
            focus: function () {
              m.F3.focus(e);
            },
            insertText: function (t) {
              var n = (0, w.H)(t);
              l.YR.insertNodes(e, n);
            },
            insertFavoritePrompt: function (n) {
              t.current &&
                "insertPrompt" !== t.current.lastAction &&
                (t.current.lastAction = "insertPrompt");
              var r = S(e, C, { emptySplit: !0 }),
                i = (r.wordMatch, r.wordRange);
              if (i) {
                l.YR.select(e, i), l.YR.delete(e);
                var o = (0, w.H)(n);
                l.YR.insertNodes(e, o);
              } else {
                var a = (0, w.H)(n);
                l.YR.insertNodes(e, a);
              }
            },
            clearMentionContent: function () {
              var t = S(e, E, { include: !0 }),
                n = t.wordMatch,
                r = t.wordRange;
              if (n && r) return l.YR.select(e, r), void l.YR.delete(e);
            }
          };
        },
        k = new Map(),
        Z = function (e) {
          var t = (0, s.useRef)(k.get(e));
          return (
            (0, s.useEffect)(
              function () {
                return (
                  k.has(e) || k.set(e, { lastAction: "" }),
                  (t.current = k.get(e)),
                  function () {
                    k.delete(e);
                  }
                );
              },
              [e]
            ),
            t
          );
        },
        F = function () {
          var e = (0, s.useMemo)(function () {
              return (function (e) {
                var t = e.isInline,
                  n = e.isVoid,
                  r = e.markableVoid;
                return (
                  (e.isInline = function (e) {
                    return "mention" === e.type || t(e);
                  }),
                  (e.isVoid = function (e) {
                    return "mention" === e.type || n(e);
                  }),
                  (e.markableVoid = function (e) {
                    return "mention" === e.type || r(e);
                  }),
                  e
                );
              })(
                (0, m.BU)(
                  ((e) => {
                    var t = e,
                      { apply: n } = t;
                    return (
                      (t.history = { undos: [], redos: [] }),
                      (t.redo = () => {
                        var { history: e } = t,
                          { redos: n } = e;
                        if (n.length > 0) {
                          var r = n[n.length - 1];
                          r.selectionBefore &&
                            l.YR.setSelection(t, r.selectionBefore),
                            p.withoutSaving(t, () => {
                              l.ML.withoutNormalizing(t, () => {
                                for (var e of r.operations) t.apply(e);
                              });
                            }),
                            e.redos.pop(),
                            t.writeHistory("undos", r);
                        }
                      }),
                      (t.undo = () => {
                        var { history: e } = t,
                          { undos: n } = e;
                        if (n.length > 0) {
                          var r = n[n.length - 1];
                          p.withoutSaving(t, () => {
                            l.ML.withoutNormalizing(t, () => {
                              var e = r.operations.map(l.OX.inverse).reverse();
                              for (var n of e) t.apply(n);
                              r.selectionBefore &&
                                l.YR.setSelection(t, r.selectionBefore);
                            });
                          }),
                            t.writeHistory("redos", r),
                            e.undos.pop();
                        }
                      }),
                      (t.apply = (e) => {
                        var { operations: r, history: i } = t,
                          { undos: o } = i,
                          a = o[o.length - 1],
                          s = a && a.operations[a.operations.length - 1],
                          l = p.isSaving(t),
                          c = p.isMerging(t);
                        if ((null == l && (l = h(e)), l)) {
                          if (
                            (null == c &&
                              (c = null != a && (0 !== r.length || g(e, s))),
                            a && c)
                          )
                            a.operations.push(e);
                          else {
                            var u = {
                              operations: [e],
                              selectionBefore: t.selection
                            };
                            t.writeHistory("undos", u);
                          }
                          for (; o.length > 100; ) o.shift();
                          i.redos = [];
                        }
                        n(e);
                      }),
                      (t.writeHistory = (e, n) => {
                        t.history[e].push(n);
                      }),
                      t
                    );
                  })((0, l.Jh)())
                )
              );
            }, []),
            t = Z(e);
          return { editor: e, utils: I(e, t) };
        },
        O = function (e) {
          var t = e.editor,
            n = e.placeholder,
            r = e.onAction,
            o = e.onConfirm,
            c = e.className,
            u = e.onValueChange,
            d = Z(t),
            f = (0, s.useCallback)(function (e) {
              return (0, v.jsx)(y, i()({}, e));
            }, []),
            p = (0, s.useCallback)(function (e) {
              return (0, v.jsx)(x, i()({}, e));
            }, []);
          return (0, v.jsx)("div", {
            className: a()(A, c),
            children: (0, v.jsx)(m.mH, {
              editor: t,
              initialValue: [{ type: "paragraph", children: [{ text: "" }] }],
              onChange: function (e) {
                var n = t.operations,
                  i = n[n.length - 1];
                if ("set_selection" !== (null == i ? void 0 : i.type)) {
                  var o = (0, w.C)(e);
                  if (
                    (null == u || u(o),
                    d.current && "" !== d.current.lastAction)
                  )
                    d.current.lastAction = "";
                  else {
                    var a = S(t, E).wordMatch;
                    if (a) null == r || r({ type: "mention", value: a });
                    else {
                      var s = S(t, C, { emptySplit: !0 }).wordMatch;
                      s
                        ? null == r || r({ type: "prompt", value: s })
                        : o || null == r || r({ type: "prompt", value: "" });
                    }
                  }
                }
              },
              children: (0, v.jsx)(m.CX, {
                "data-testid": "msh-chatinput-editor",
                autoFocus: !0,
                renderElement: f,
                renderLeaf: p,
                onKeyDown: function (e) {
                  var n = e.key,
                    r = e.shiftKey,
                    i = e.metaKey,
                    a = e.altKey,
                    s = e.ctrlKey;
                  switch (n) {
                    case "Enter":
                      if (e.nativeEvent.isComposing || r) break;
                      if (i || a || s) {
                        l.YR.insertText(t, "\n");
                        break;
                      }
                      var c = (0, w.C)(t.children);
                      null == o || o(c),
                        e.preventDefault(),
                        e.stopPropagation();
                      break;
                    case "Tab":
                    case "Escape":
                      e.preventDefault(), e.stopPropagation();
                  }
                },
                onPaste: function (e) {
                  var n,
                    r =
                      (null === (n = e.clipboardData) || void 0 === n
                        ? void 0
                        : n.getData("text/plain")) || "",
                    i = (0, w.H)(r);
                  l.YR.insertNodes(t, i),
                    e.preventDefault(),
                    e.stopPropagation();
                },
                placeholder: n
              })
            })
          });
        };
    },
    46328: function (e, t, n) {
      "use strict";
      n.d(t, {
        H: function () {
          return s;
        },
        C: function () {
          return a;
        }
      });
      var r = n(17384),
        i = n.n(r),
        o = /(https?:\/\/[^\s]+(\.[^\s]+){1,})/g;
      function a(e) {
        var t,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = n.parseUrl,
          s = void 0 === r || r,
          l = [],
          c = i()(e);
        try {
          for (c.s(); !(t = c.n()).done; ) {
            var u = t.value;
            "children" in u
              ? l.push(a(u.children, { parseUrl: s }))
              : s
              ? l.push(
                  u.text.replace(o, function (e) {
                    return '<url id="" type="url" status="" title="" wc="">'.concat(
                      e,
                      "</url>"
                    );
                  })
                )
              : l.push(u.text);
          }
        } catch (e) {
          c.e(e);
        } finally {
          c.f();
        }
        return l.join("\n");
      }
      function s(e) {
        return [
          {
            text: e.replace(o, function (e) {
              return "".concat(e, " ");
            })
          }
        ];
      }
    },
    68031: function (e, t, n) {
      "use strict";
      n.d(t, {
        t: function () {
          return f;
        }
      });
      var r,
        i,
        o = n(53939),
        a = n.n(o),
        s = n(83134),
        l = n.n(s),
        c = n(39324),
        u = n(41776),
        d = n(24561),
        f = {
          getFile:
            ((i = l()(
              a()().mark(function e(t) {
                var n, r;
                return a()().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = u.qr.getState()),
                          (r = n.api),
                          e.abrupt("return", r.file.getFile(t))
                        );
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function (e) {
              return i.apply(this, arguments);
            }),
          parse_process:
            ((r = l()(
              a()().mark(function e(t) {
                var n, r;
                return a()().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (n = u.qr.getState()),
                          (r = n.api),
                          d.Vw.setState(function (e) {
                            var n = e.currentFiles.findIndex(function (e) {
                              return e.id === t;
                            });
                            -1 !== n &&
                              (e.currentFiles[n].parse_status = "parsing");
                          }),
                          r.file
                            .parseFileProcess([t])
                            .then(
                              (function () {
                                var e = l()(
                                  a()().mark(function e(n) {
                                    var r, i, o, s, l, u, f, p, g, h, m, v;
                                    return a()().wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              (o =
                                                null === (r = n.body) ||
                                                void 0 === r
                                                  ? void 0
                                                  : r.getReader()),
                                              (e.next = 3),
                                              o.read()
                                            );
                                          case 3:
                                            (s = e.sent).done,
                                              (l = s.value),
                                              (u = new TextDecoder()),
                                              (f = u.decode(l)),
                                              (p =
                                                null === (i = (0, c.RE)(f)) ||
                                                void 0 === i
                                                  ? void 0
                                                  : i[0]),
                                              (g = p.status),
                                              (h = p.event),
                                              (m = p.error),
                                              (v = p.file_info),
                                              "resp" === h &&
                                                d.Vw.setState(function (e) {
                                                  var n =
                                                    e.currentFiles.findIndex(
                                                      function (e) {
                                                        return e.id === t;
                                                      }
                                                    );
                                                  -1 !== n &&
                                                    ("parsed" === g &&
                                                      ((e.currentFiles[
                                                        n
                                                      ].parse_status =
                                                        "success"),
                                                      (e.currentFiles[
                                                        n
                                                      ].file_info = v)),
                                                    ("failed" !== g &&
                                                      "filtered" !== g) ||
                                                      ((e.currentFiles[
                                                        n
                                                      ].parse_status = "error"),
                                                      (e.currentFiles[
                                                        n
                                                      ].file_info = v),
                                                      (e.currentFiles[n].error =
                                                        "解析失败")),
                                                    (e.currentFiles[n].done =
                                                      !0));
                                                }),
                                              "error" === h &&
                                                d.Vw.setState(function (e) {
                                                  var n =
                                                    e.currentFiles.findIndex(
                                                      function (e) {
                                                        return e.id === t;
                                                      }
                                                    );
                                                  -1 !== n &&
                                                    ((e.currentFiles[
                                                      n
                                                    ].parse_status = "error"),
                                                    (e.currentFiles[n].error =
                                                      m.message || "解析失败"),
                                                    (e.currentFiles[n].done =
                                                      !0));
                                                });
                                          case 12:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            )
                            .catch(function (e) {
                              d.Vw.setState(function (n) {
                                var r = n.currentFiles.findIndex(function (e) {
                                  return e.id === t;
                                });
                                -1 !== r &&
                                  ((n.currentFiles[r].parse_status = "error"),
                                  (n.currentFiles[r].error =
                                    e.message || "解析失败"),
                                  (n.currentFiles[r].done = !0));
                              });
                            });
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function (e) {
              return r.apply(this, arguments);
            })
        };
    },
    82868: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return v;
        }
      });
      var r = n(78095),
        i = n.n(r),
        o = n(88284),
        a = n.n(o),
        s = n(74266),
        l = n.n(s),
        c = n(91150),
        u = n.n(c),
        d = n(92082),
        f = n(91758),
        p = "subsize___Mfy6S",
        g = "onlyIcon___vDH72",
        h = n(44810),
        m = ["type", "subsize", "children", "className"],
        v = function (e) {
          var t = e.type,
            n = void 0 === t ? "auto" : t,
            r = e.subsize,
            o = e.children,
            s = e.className,
            c = l()(e, m),
            v = (0, d.M)("thememode.thememode", (0, d.R)("mode")).mode,
            b = n;
          return (
            "auto" === n && (b = "dark" === v ? "secondary" : "primary"),
            (0, h.jsx)(
              f.Z,
              i()(
                i()(
                  {
                    className: u()(s, a()(a()({}, p, r), g, !o)),
                    type: b,
                    noShadow: "auto" === n
                  },
                  c
                ),
                {},
                { children: o }
              )
            )
          );
        };
    },
    56831: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return O;
        }
      });
      var r = n(88284),
        i = n.n(r),
        o = n(29274),
        a = n(91150),
        s = n.n(a),
        l = n(84152),
        c = n(78095),
        u = n.n(c),
        d = n(34827),
        f = n.n(d),
        p = n(74266),
        g = n.n(p),
        h = n(2017),
        m = n(45562),
        v = n(63313),
        b = n(30145),
        y = n(75555),
        A = n(63806),
        x = n(44810),
        w = [
          "open",
          "children",
          "component",
          "elementId",
          "customParam",
          "trigger",
          "triggerClass",
          "triggerSX",
          "triggerButtonProps",
          "onTriggerClick",
          "disabled",
          "onOk",
          "onClose",
          "okButtonProps",
          "cancelButtonProps"
        ],
        S = function (e, t) {
          var n = e.open,
            r = e.children,
            i = e.component,
            o = e.elementId,
            a = e.customParam,
            s = e.trigger,
            l = e.triggerClass,
            c = e.triggerSX,
            d = e.triggerButtonProps,
            p = e.onTriggerClick,
            S = e.disabled,
            C = e.onOk,
            E = e.onClose,
            I = e.okButtonProps,
            k = e.cancelButtonProps,
            Z = g()(e, w),
            F = (0, b.x)({ running: !1, loading: !1, open: !1 }),
            O = f()(F, 2),
            R = O[0],
            M = O[1];
          (0, y.ab)(n || R.open, o, a),
            (0, v.useImperativeHandle)(t, function () {
              return {
                cancel: function () {
                  B();
                },
                forceCancel: function () {
                  B({ force: !0 });
                }
              };
            });
          var j = function () {
              M(function (e) {
                (e.running = !1), (e.loading = !1), (e.open = !1);
              });
            },
            B = function (e) {
              (!(e || {}).force && R.loading) ||
                (null == E || E(),
                M(function (e) {
                  e.open = !1;
                }));
            },
            T = (0, v.useCallback)(function (e) {
              null == p || p(e),
                M(function (e) {
                  e.open = !0;
                });
            }, []),
            P = (0, v.useMemo)(
              function () {
                var e = {
                  className: l,
                  sx: [
                    c,
                    S
                      ? { color: "text.disabled", cursor: "not-allowed" }
                      : { cursor: "pointer" }
                  ],
                  onClick: S ? void 0 : T,
                  disabled: S
                };
                return i && "button" !== i && "btn" !== i
                  ? (0, x.jsx)(
                      m.Z,
                      u()(u()({ component: i }, e), {}, { children: s })
                    )
                  : (0, x.jsx)(
                      h.Z,
                      u()(
                        u()(u()({ variant: "contained" }, d), e),
                        {},
                        { children: s }
                      )
                    );
              },
              [s, i, S, l]
            ),
            N = u()(
              {
                open: n || R.open,
                onOk: function () {
                  var e = null == C ? void 0 : C();
                  e && "function" == typeof e.then
                    ? (M(function (e) {
                        (e.running = !0), (e.loading = !0);
                      }),
                      e.then(function () {
                        j();
                      }))
                    : !1 === e || j();
                },
                onClose: B,
                okButtonProps: u()(
                  u()({}, I || {}),
                  {},
                  { loading: R.loading }
                ),
                cancelButtonProps: u()(
                  u()({}, k || {}),
                  {},
                  { disabled: R.loading }
                )
              },
              Z
            );
          return (0, x.jsxs)(x.Fragment, {
            children: [P, (0, x.jsx)(A.Z, u()(u()({}, N), {}, { children: r }))]
          });
        },
        C = (0, v.forwardRef)(S),
        E = n(88045),
        I = n(83539),
        k = n(92082),
        Z = {
          download: "download___Lhk92",
          mobile: "mobile___RYpJ7",
          dark: "dark___gDi82",
          light: "light___rnNuC",
          pop: "pop___qq0Z1",
          title: "title___hFdtj",
          scans: "scans___neiB_",
          scan: "scan___EkTeN",
          img: "img___tdI9p"
        },
        F = function () {
          return (0, x.jsxs)("div", {
            className: Z.pop,
            children: [
              (0, x.jsx)("div", {
                className: Z.title,
                children: (0, x.jsx)(I._H, { id: "msh.home.app.download.desc" })
              }),
              (0, x.jsx)("div", {
                className: Z.scans,
                children: (0, x.jsxs)("div", {
                  className: Z.scan,
                  children: [
                    (0, x.jsx)("div", {
                      className: Z.img,
                      children: (0, x.jsx)("img", {
                        src: "data:image/png;base64,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",
                        alt: ""
                      })
                    }),
                    (0, x.jsx)(I._H, { id: "msh.home.app.download.app.name" }),
                    (0, x.jsx)(I._H, { id: "msh.home.app.download.app.desc" })
                  ]
                })
              })
            ]
          });
        },
        O = function () {
          var e = (0, k.M)("thememode.thememode", (0, k.R)("mode")).mode,
            t = (0, E.Z)().isSmallScreen;
          return (0, x.jsx)(C, {
            title: (0, x.jsx)(I._H, { id: "msh.home.app.download.title" }),
            trigger: t
              ? (0, x.jsx)(l.Kr1, { type: "mshd-app-download" })
              : (0, x.jsx)(I._H, { id: "msh.home.app.download.title" }),
            component: t ? o.Z : "button",
            elementId: "modal_dialog_qr_code_of_app_and_wechat_mini_program",
            triggerClass: s()(Z.download, Z[e], i()({}, Z.mobile, t)),
            footer: !1,
            triggerButtonProps: {
              color: "secondary",
              startIcon: (0, x.jsx)(l.Kr1, { type: "mshd-app-download" })
            },
            modalsx: { paper: { width: "max-content", minWidth: "128px" } },
            children: (0, x.jsx)(F, {})
          });
        };
    },
    85015: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return ae;
        }
      });
      var r = n(78095),
        i = n.n(r),
        o = n(88284),
        a = n.n(o),
        s = n(29274),
        l = n(91150),
        c = n.n(l),
        u = n(63313),
        d = n(59515),
        f = n(84152),
        p = n(17741),
        g = n(75555),
        h = n(67783),
        m = n(96329),
        v = n(48079),
        b = n(34827),
        y = n.n(b),
        A = n(41987),
        x = n(30145),
        w = n(6268),
        S = n(75074),
        C = n(99004),
        E = "historyModal___qTQKs",
        I = "show___WthR7",
        k = "closeBtn___oHhJS",
        Z = "icon___AKlK1",
        F = "chatHistory___EbmZH",
        O = "historyTitle___F_iam",
        R = "historyMain___ZQw_i",
        M = n(45562),
        j = n(85894),
        B = n(84007),
        T = n(62066),
        P = n.n(T),
        N = n(39324),
        V = n(92075),
        Q = n(68229),
        W = n(14221),
        L = n(26390),
        D = n(44810),
        U = function (e) {
          e.id;
          var t = e.title,
            n = e.wc,
            r = e.name,
            i = e.className,
            o = "URL".concat(n ? ", ".concat(n.toLocaleString(), "字") : "");
          return (0, D.jsx)(L.Z, {
            type: "url",
            component: "a",
            target: "_blank",
            href: r,
            className: i,
            name: t || r,
            desc: o,
            onClick: function (e) {
              e.stopPropagation();
            }
          });
        },
        z = "historyItem___PJP2b",
        H = "groupTitle___irePU",
        K = "contentBox___OrRSj",
        q = "content___ig5dI",
        J = "titleLine___dwqZt",
        X = "name___OEWak",
        G = "time___BiTnc",
        _ = "actions___oPOPx",
        Y = "actionBtn___OpJST",
        $ = "icon___S650t",
        ee = "delBtn___fCUyT",
        te = "refsWrap___rhysy",
        ne = "refItem___UGGzS",
        re = "imageItem___G_CuZ",
        ie = function (e) {
          var t = e.data,
            n = e.changeCid,
            r = e.openDelete,
            o = e.openEditModal,
            a = t.name,
            s = t.created_at,
            l = t.attachments,
            u = t.group_label,
            d =
              null == l
                ? void 0
                : l.filter(function (e) {
                    return "file" === e.type;
                  }),
            h =
              null == l
                ? void 0
                : l.filter(function (e) {
                    return "url" === e.type && "parsed" === e.status;
                  }),
            m = P()(s).calendar(null, {
              sameDay: "HH:mm",
              lastDay: "[昨天]",
              lastWeek: "dddd",
              sameElse: "MM月DD日"
            }),
            v = d.filter(function (e) {
              var t = e.name.split(".").pop() || "";
              return !V.dC.includes(t);
            }),
            b = d.filter(function (e) {
              var t = e.name.split(".").pop() || "";
              return V.dC.includes(t);
            });
          return (0, D.jsxs)(M.Z, {
            maxWidth: "md",
            className: z,
            children: [
              u && (0, D.jsx)("div", { className: H, children: u }),
              (0, D.jsx)(j.Z, {
                className: K,
                elevation: 1,
                onClick: function () {
                  (0, g.GE)("open_history_conversation_btn"), n(t);
                },
                children: (0, D.jsxs)(p.Z, {
                  full: !0,
                  item: !0,
                  className: q,
                  children: [
                    (0, D.jsxs)(p.Z, {
                      flex: !0,
                      center: "y",
                      className: J,
                      children: [
                        "1m" === (null == t ? void 0 : t.type) &&
                          (0, D.jsxs)(B.Z, {
                            variant: "sectionTitle",
                            noWrap: !0,
                            className: X,
                            children: ["🌕 ", a]
                          }),
                        "1m" !== (null == t ? void 0 : t.type) &&
                          (0, D.jsxs)(B.Z, {
                            variant: "sectionTitle",
                            noWrap: !0,
                            className: X,
                            children: ["📑 ", a]
                          }),
                        (0, D.jsx)(B.Z, {
                          className: G,
                          variant: "subText",
                          children: m
                        }),
                        (0, D.jsxs)("div", {
                          className: _,
                          children: [
                            (0, D.jsx)("div", {
                              onClick: function (e) {
                                e.stopPropagation(), o(t);
                              },
                              className: Y,
                              children: (0, D.jsx)(f.Kr1, {
                                type: "chat-edit",
                                className: $
                              })
                            }),
                            (0, D.jsx)("div", {
                              onClick: function (e) {
                                e.stopPropagation(), r(t);
                              },
                              className: c()(Y, ee),
                              children: (0, D.jsx)(f.Kr1, {
                                type: "delete",
                                className: $
                              })
                            })
                          ]
                        })
                      ]
                    }),
                    (!(null == d || !d.length) || !(null == h || !h.length)) &&
                      (0, D.jsxs)(p.Z, {
                        flex: !0,
                        column: !0,
                        gap: 2,
                        className: te,
                        children: [
                          !(null == h || !h.length) &&
                            (0, D.jsx)(p.Z, {
                              flex: !0,
                              wrap: !0,
                              gap: 2,
                              children: h.map(function (e) {
                                return (0,
                                D.jsx)(U, i()({ className: ne }, e), e.id);
                              })
                            }),
                          !(null == v || !v.length) &&
                            (0, D.jsx)(p.Z, {
                              flex: !0,
                              wrap: !0,
                              gap: 2,
                              children: v.map(function (e) {
                                return (0,
                                D.jsx)(Q.Z, i()({ className: ne }, e), e.id);
                              })
                            }),
                          !(null == b || !b.length) &&
                            (0, D.jsx)(p.Z, {
                              flex: !0,
                              wrap: !0,
                              gap: 2,
                              children: b.map(function (e) {
                                return (0,
                                D.jsx)(W.Z, i()({ className: c()(re), url: (0, N.QW)(e, "s") }, e), e.id);
                              })
                            })
                        ]
                      })
                  ]
                })
              })
            ]
          });
        },
        oe = function () {
          var e,
            t = (0, S.vg)(function (e) {
              return e.i18n;
            }).fm,
            n = (0, x.x)({ open: !1, cid: "", title: "" }),
            r = y()(n, 2),
            o = r[0],
            a = r[1],
            s = (0, A.useParams)(),
            l = (0, A.useLocation)().pathname.startsWith("/chat")
              ? null !== (e = null == s ? void 0 : s.id) && void 0 !== e
                ? e
                : ""
              : void 0;
          (0, u.useEffect)(function () {
            var e = v.DD.getState().items;
            return (
              (null != e && e.length) || v.W6.list.load(),
              function () {
                v.W6.list.reset();
              }
            );
          }, []);
          var c = (0, v.DD)(),
            d =
              ((0, v.aK)(function (e) {
                return e.editId;
              }),
              function (e) {
                if (e.id !== l) {
                  var t = (0, S.VY)().route;
                  "1m" === e.type
                    ? t.to({}, { to: "/chat/1m/".concat(e.id) })
                    : t.to({}, { to: "/chat/".concat(e.id) });
                }
                v.W6.closeHistory();
              }),
            f = function (e) {
              v.W6.delete(e.id);
            },
            g = function (e) {
              a({
                open: !0,
                cid: null == e ? void 0 : e.id,
                title: null == e ? void 0 : e.name
              });
            };
          return (0, D.jsxs)(D.Fragment, {
            children: [
              (null == o ? void 0 : o.open) &&
                (0, D.jsx)(
                  C.Z,
                  i()(
                    i()({}, o),
                    {},
                    {
                      onClose: function () {
                        a({ open: !1, cid: "", title: "" });
                      }
                    }
                  )
                ),
              (0, D.jsxs)(p.Z, {
                full: !0,
                "data-testid": "chat-list",
                className: F,
                children: [
                  (0, D.jsx)("div", {
                    className: O,
                    children: t("msh.chat.page.history.chat")
                  }),
                  (0, D.jsx)("div", {
                    className: R,
                    children: (0, D.jsx)(w.a, {
                      store: c,
                      endReached: v.W6.list.loadmore,
                      renderItem: function (e) {
                        var t = e.data;
                        return (0, D.jsx)(ie, {
                          data: t,
                          changeCid: d,
                          openDelete: f,
                          openEditModal: g
                        });
                      }
                    })
                  })
                ]
              })
            ]
          });
        },
        ae = function (e) {
          var t = (0, v.aK)(function (e) {
              return e.showHistory;
            }),
            n = (0, h.BL)().keydown;
          return (
            (0, u.useEffect)(function () {
              n("", "esc", function (e) {
                v.aK.getState().showHistory
                  ? v.W6.closeHistory()
                  : v.W6.openHistory();
              });
            }, []),
            (0, g.ab)(t, "modal_dialog_history_conversation_list"),
            (0, D.jsx)("div", {
              className: c()(E, a()({}, I, t)),
              children: (0, D.jsxs)(p.Z, {
                full: !0,
                children: [
                  (0, D.jsx)(m.Z, {
                    redirectAfterLogout: d.Z.auth.login_portal
                  }),
                  (0, D.jsx)(s.Z, {
                    "data-testid": "msh-history-close-btn",
                    className: k,
                    onClick: function () {
                      (0, g.GE)("close_history_conversation_list_btn"),
                        v.W6.closeHistory();
                    },
                    children: (0, D.jsx)(f.Kr1, { type: "close", className: Z })
                  }),
                  (0, D.jsx)(oe, i()({}, e))
                ]
              })
            })
          );
        };
    },
    99004: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return m;
        }
      });
      var r = n(34827),
        i = n.n(r),
        o = n(45562),
        a = n(61665),
        s = n(5368),
        l = n(10221),
        c = n(63313),
        u = n(63806),
        d = n(75074),
        f = n(83539),
        p = n(48079),
        g = "helperText___Fa_zw",
        h = n(44810),
        m = function (e) {
          var t = e.open,
            n = e.onClose,
            r = e.cid,
            m = (0, c.useState)((null == e ? void 0 : e.title) || ""),
            v = i()(m, 2),
            b = v[0],
            y = v[1];
          (0, c.useEffect)(
            function () {
              y((null == e ? void 0 : e.title) || "");
            },
            [null == e ? void 0 : e.title]
          );
          var A = (0, c.useMemo)(
              function () {
                return b
                  ? (null == b ? void 0 : b.length) > 20
                    ? [
                        (0, d.VY)().i18n.fm("msh.chat.page.name.maxlength", {
                          num: 20
                        }),
                        !0
                      ]
                    : ["", !1]
                  : [(0, d.VY)().i18n.fm("msh.chat.page.name.empty"), !0];
              },
              [b]
            ),
            x = i()(A, 2),
            w = x[0],
            S = x[1],
            C = function (e) {
              e.preventDefault(),
                p.W6.update(r, b)
                  .then(function () {
                    n();
                  })
                  .catch(function () {
                    var e = (0, d.VY)(),
                      t = e.i18n;
                    e.ui.message.error(t.fm("msh.chat.page.update.error"));
                  });
            };
          return (0, h.jsx)(u.Z, {
            open: t,
            onClose: n,
            onConfirm: C,
            title: (0, h.jsx)(f._H, { id: "msh.chat.page.update.name" }),
            okButtonProps: { disabled: S },
            children: (0, h.jsx)(o.Z, {
              component: "form",
              onSubmit: C,
              children: (0, h.jsxs)(a.Z, {
                fullWidth: !0,
                required: !0,
                error: S,
                children: [
                  (0, h.jsx)(s.Z, {
                    autoFocus: !0,
                    size: "small",
                    value: b,
                    onChange: function (e) {
                      y(e.target.value);
                    }
                  }),
                  (0, h.jsx)(l.Z, { className: g, children: w })
                ]
              })
            })
          });
        };
    },
    95313: function (e, t, n) {
      "use strict";
      n.d(t, {
        P: function () {
          return R;
        },
        S: function () {
          return Z;
        }
      });
      var r,
        i,
        o,
        a,
        s,
        l,
        c,
        u,
        d,
        f = n(60430),
        p = n.n(f),
        g = n(53939),
        h = n.n(g),
        m = n(34827),
        v = n.n(m),
        b = n(83134),
        y = n.n(b),
        A = n(69609),
        x = n(32163),
        w = n(48079),
        S = n(41776),
        C = n(46384),
        E = n(24561),
        I = n(80455),
        k = n(65342),
        Z = (0, x.Q_)({ status: {} }),
        F = null,
        O = function () {
          F && (clearTimeout(F), (F = null));
        },
        R = {
          load:
            ((d = y()(
              h()().mark(function e(t) {
                var n, r;
                return h()().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (n = S.qr.getState()),
                          (r = n.api),
                          w.aK.setState({ loading: !0 }),
                          Promise.all([r.chat1m.getChat(t), R.loadSegment(t)])
                            .then(function (e) {
                              var n = v()(e, 2),
                                r = n[0];
                              n[1],
                                w.aK.setState(function (e) {
                                  e.detailsMap[t] = r;
                                });
                            })
                            .catch(function () {
                              return (
                                w.aK.setState(function (e) {
                                  e.detailsMap[t] = { error: !0 };
                                }),
                                Promise.reject()
                              );
                            })
                            .finally(function () {
                              w.aK.setState({ loading: !1 });
                            });
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function (e) {
              return d.apply(this, arguments);
            }),
          loadLast:
            ((u = y()(
              h()().mark(function e(t) {
                var n, r, i, o, a, s, l, c;
                return h()().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((r = S.qr.getState()),
                          (i = r.api),
                          (o = w.aK.getState().segmentsMap),
                          null !=
                            (a =
                              null !== (n = o[t]) && void 0 !== n ? n : []) &&
                            a.length)
                        ) {
                          e.next = 5;
                          break;
                        }
                        return e.abrupt("return");
                      case 5:
                        return (
                          (s = a[(null == a ? void 0 : a.length) - 1]),
                          (e.next = 8),
                          i.chat.listChatSegments(t, { segment_ids: [s.id] })
                        );
                      case 8:
                        (l = e.sent),
                          (c = l.items),
                          w.aK.setState(function (e) {
                            var n, r;
                            e.segmentsMap[t] =
                              null !== (n = e.segmentsMap[t]) && void 0 !== n
                                ? n
                                : [];
                            var i =
                              null !== (r = e.segmentsMap[t]) && void 0 !== r
                                ? r
                                : [];
                            if (null != c && c.length) {
                              var o = null == c ? void 0 : c[0],
                                a = i.findLastIndex(function (e) {
                                  return e.id === o.id;
                                });
                              i[a] && (i[a] = o);
                            }
                          });
                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function (e) {
              return u.apply(this, arguments);
            }),
          loadCurrent:
            ((c = y()(
              h()().mark(function e(t) {
                return h()().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        Promise.all([R.loadLast(t), R.getStatus(t)])
                          .then(function (e) {
                            var n = v()(e, 2),
                              r = (n[0], n[1]);
                            "waiting" !== (null == r ? void 0 : r.status) &&
                              "generating" !==
                                (null == r ? void 0 : r.status) &&
                              (O(),
                              setTimeout(function () {
                                R.loadLast(t);
                              }, 1e3));
                          })
                          .catch(function () {
                            O();
                          });
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function (e) {
              return c.apply(this, arguments);
            }),
          getStatus:
            ((l = y()(
              h()().mark(function e(t) {
                var n, r, i;
                return h()().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = S.qr.getState()),
                          (r = n.api),
                          (e.next = 3),
                          r.chat1m.getChatStatus(t)
                        );
                      case 3:
                        return (
                          (i = e.sent),
                          Z.setState({ status: i || {} }),
                          e.abrupt("return", i)
                        );
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function (e) {
              return l.apply(this, arguments);
            }),
          loadSegment:
            ((s = y()(
              h()().mark(function e(t, n, r) {
                var i, o, a, s, l, c, u, d, f, g, m, v, b, y;
                return h()().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (((i = S.qr.getState()), (o = i.api), !n)) {
                          e.next = 8;
                          break;
                        }
                        if (
                          ((l = w.aK.getState()),
                          (c = l.segmentTotalMap),
                          (u = l.segmentsMap),
                          (d = null !== (a = u[t]) && void 0 !== a ? a : []),
                          (f = null !== (s = c[t]) && void 0 !== s ? s : 0),
                          !(d.length >= f))
                        ) {
                          e.next = 7;
                          break;
                        }
                        return e.abrupt("return");
                      case 7:
                        w.aK.setState({ segmentLoading: !0 });
                      case 8:
                        return (
                          (e.next = 10),
                          o.chat
                            .listChatSegments(t, { before: n, last: r || 50 })
                            .finally(function () {
                              w.aK.setState({ segmentLoading: !1 });
                            })
                        );
                      case 10:
                        (g = e.sent),
                          (m = g.total),
                          (v = void 0 === m ? 0 : m),
                          (b = g.items),
                          (y = void 0 === b ? [] : b).filter(function (e) {
                            return e.content || e.error;
                          }),
                          w.aK.setState(function (e) {
                            if (((e.segmentTotalMap[t] = v), n)) {
                              var r,
                                i =
                                  null !== (r = e.segmentsMap[t]) &&
                                  void 0 !== r
                                    ? r
                                    : [];
                              e.segmentsMap[t] = (0, A.uniqBy)(
                                [].concat(p()(y), p()(i)),
                                "id"
                              );
                            } else e.segmentsMap[t] = y;
                          });
                      case 17:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function (e, t, n) {
              return s.apply(this, arguments);
            }),
          create1M:
            ((a = y()(
              h()().mark(function e() {
                var t, n, r;
                return h()().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = S.qr.getState()),
                          (n = t.api),
                          (e.next = 3),
                          n.chat1m.create1MChat()
                        );
                      case 3:
                        return (
                          (r = e.sent),
                          w.DD.setState(function (e) {
                            return { items: [r].concat(p()(e.items)) };
                          }),
                          w.W6.list.reset(),
                          w.W6.list.load(),
                          e.abrupt("return", r)
                        );
                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function () {
              return a.apply(this, arguments);
            }),
          send:
            ((o = y()(
              h()().mark(function e(t) {
                var n, r, i, o, a, s;
                return h()().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((n = E.Vw.getState()),
                          (r = n.currentFiles),
                          !(i = C.F.getContent().trim()) &&
                            null != r &&
                            r.length &&
                            (i = I.T),
                          i)
                        ) {
                          e.next = 5;
                          break;
                        }
                        return e.abrupt("return");
                      case 5:
                        C.F.clear(),
                          E.Ee.currentClear(),
                          null != (o = r) &&
                            o.length &&
                            w.W6.addChatFiles(t, o),
                          (a = o.map(function (e) {
                            return e.id;
                          })),
                          (s = (0, k.aK)(i, a)),
                          S.qr
                            .getState()
                            .api.chat1m.sendMessage(t, {
                              refs: a,
                              use_search: s,
                              messages: [{ role: "user", content: i }]
                            })
                            .then(
                              (function () {
                                var e = y()(
                                  h()().mark(function e(n) {
                                    var r;
                                    return h()().wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            (r =
                                              (null == n ? void 0 : n.items) ||
                                              []),
                                              w.aK.setState(function (e) {
                                                var n,
                                                  i,
                                                  o =
                                                    null !==
                                                      (n = e.segmentsMap[t]) &&
                                                    void 0 !== n
                                                      ? n
                                                      : [];
                                                (e.segmentTotalMap[t] =
                                                  (null !==
                                                    (i =
                                                      e.segmentTotalMap[t]) &&
                                                  void 0 !== i
                                                    ? i
                                                    : 0) + 2),
                                                  o.push.apply(o, p()(r));
                                              }),
                                              setTimeout(
                                                y()(
                                                  h()().mark(function e() {
                                                    var n, r;
                                                    return h()().wrap(function (
                                                      e
                                                    ) {
                                                      for (;;)
                                                        switch (
                                                          (e.prev = e.next)
                                                        ) {
                                                          case 0:
                                                            return (
                                                              (e.next = 2),
                                                              R.getStatus(t)
                                                            );
                                                          case 2:
                                                            (n = e.sent),
                                                              (r =
                                                                "128k" ===
                                                                (null == n
                                                                  ? void 0
                                                                  : n.token_level)
                                                                  ? 2
                                                                  : 20),
                                                              R.polling(t, r);
                                                          case 6:
                                                          case "end":
                                                            return e.stop();
                                                        }
                                                    },
                                                    e);
                                                  })
                                                ),
                                                1e3
                                              );
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
                              })()
                            );
                      case 13:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function (e) {
              return o.apply(this, arguments);
            }),
          polling:
            ((i = y()(
              h()().mark(function e(t, n) {
                return h()().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        !(function e() {
                          O(), R.loadCurrent(t);
                          var r = Z.getState().status;
                          ("waiting" !== (null == r ? void 0 : r.status) &&
                            "generating" !== (null == r ? void 0 : r.status)) ||
                            (F = setTimeout(function () {
                              e();
                            }, 1e3 * n));
                        })();
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function (e, t) {
              return i.apply(this, arguments);
            }),
          clearHistory:
            ((r = y()(
              h()().mark(function e(t) {
                var n, r, i, o, a;
                return h()().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((r = w.aK.getState().segmentsMap),
                          (i = null !== (n = r[t]) && void 0 !== n ? n : []),
                          null !=
                            (o = i.filter(function (e) {
                              return e.content || e.error;
                            })) && o.length)
                        ) {
                          e.next = 5;
                          break;
                        }
                        return e.abrupt("return");
                      case 5:
                        (a = o[(null == o ? void 0 : o.length) - 1]),
                          S.qr
                            .getState()
                            .api.chat1m.clearHistory(t, a.id)
                            .then(function (e) {
                              Z.setState(function (e) {
                                var t, n;
                                ("waiting" !==
                                  (null === (t = e.status) || void 0 === t
                                    ? void 0
                                    : t.status) &&
                                  "generating" !==
                                    (null === (n = e.status) || void 0 === n
                                      ? void 0
                                      : n.status)) ||
                                  ((e.status.status = "success"), O());
                              }),
                                w.aK.setState(function (e) {
                                  var n,
                                    r =
                                      null !== (n = e.segmentsMap[t]) &&
                                      void 0 !== n
                                        ? n
                                        : [],
                                    i = r.findLastIndex(function (e) {
                                      return e.id === a.id;
                                    });
                                  r[i] &&
                                    (r[i].info || (r[i].info = {}),
                                    (r[i].info.clear_context = !0));
                                });
                            });
                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function (e) {
              return r.apply(this, arguments);
            })
        };
    },
    61756: function (e, t, n) {
      "use strict";
      n.d(t, {
        $: function () {
          return m;
        },
        O: function () {
          return h;
        }
      });
      var r,
        i,
        o,
        a,
        s = n(32163),
        l = "msh_user_prompt_template",
        c = "msh_res_sub_prompt_template",
        u = "msh_prompt_template_n2s",
        d = "msh_prompt_template_fewshot",
        f = '[\n  {\n     "role": "system",\n     "content": "'.concat(
          "你是 Kimi，由 Moonshot AI 提供的人工智能助手，你更擅长中文和英文的对话。Moonshot AI 为专有名词，不可翻译成其他语言。\\n用户可以将文件（TXT、PDF、Word 文档、PPT 幻灯片、 Excel 电子表格等格式）、网址发送给你，你可以阅读相关内容后回复用户。\\nKnowledge cutoff: 2023-03\\nCurrent date: {{current_date}}",
          '"\n  },\n  { "special": "history" },\n  {\n    "role": "user",\n    "content": "{{current_question}}"\n  },\n  { "special": "resource" }\n]\n'
        ),
        p =
          '请你先阅读用户提供的资料，然后根据用户上面说的内容，回复用户。\n如果，问题中没有有效的问题，则直接回答“对不起，Kimi 没能理解你的问题，可以再具体说一下吗？”，并停止解答；\n如果，问题中有输出格式相关的要求，则暂时记住这些要求，并在回复时参照。资料中：file是用户上传文件，web是用户提供的网址中的内容。\n{{ range $chunk := .chunks }}\n{"type":"{{$chunk.type}}", "file_type": "{{$chunk.file_type}}", "title":"{{$chunk.title}}", "url":"{{$chunk.url}}", "content":"{{$chunk.content}}"}\n{{ end }}',
        g =
          'You are an AI assistant. Your task is to determine whether responding to the following queries requires a Google search. The queries that need searches should be those that require factual or time-sensitive information that can be found on the Internet. If you think you need to search, give the search keywords at the same time. part of the history of the dialogue will be given to you. Response in JSON format:\n{\n    "need2search": "true or false",\n    "search_target": "the content you want to search on google",\n    "search_language": "language to use for the Google search. It\'s a two-letter language code."\n}\nExamples\nHistory: null\nQuery: 今年金球奖得主是谁？\nResponse:\n{\n    "need2search": false,\n    "search_target": "2023 年金球奖得主",\n    "search_language": "zh-cn"\n}\n\nHistory: user: 我最近在学习一篇古文，叫做爱莲说。\nassitant: 我很乐意为你提供有关爱莲说的信息！\nQuery: 我想知道它的作者是谁\nResponse:\n{\n    "need2search": true,\n    "search_target": "《爱莲说》的作者",\n    "search_language": "zh-cn"\n}\n\nHistory: null\nQuery: 请你把这句话翻译成英文：我想知道《爱莲说》的作者是谁\nResponse:\n{\n    "need2search": false,\n    "search_target": null,\n    "search_language": null\n}\n\nHistory: null\nQuery: 请问1+1等于几\nResponse:\n{\n    "need2search": false,\n    "search_target": null,\n    "search_language": null\n}\n\nHistory: user: What is the capital of China?\nassitant: Beijing is the capital of China.\n user: How many ethnic groups are there in China?\nassistant: There are 56 ethnic groups in China\n\nQuery: Who is the current president of this country?\nResponse:\n{\n    "need2search": true,\n    "search_target": "Who is the current president of China?",\n    "search_language": "en"\n}\n\nHistory: null\nQuery: 今天是星期几？\nResponse:\n{\n    "need2search": false,\n    "search_target": null,\n    "search_language": null\n}\n\n<Query>\nResponse:\n',
        h = (0, s.Q_)({
          open: "",
          debug: !1,
          debug_template: !1,
          error: {
            user_prompt_template: "",
            res_sub_prompt_template: "",
            prompt_template_n2s: "",
            prompt_template_fewshot: ""
          },
          user_prompt_template:
            null !== (r = localStorage.getItem(l)) && void 0 !== r ? r : f,
          res_sub_prompt_template:
            null !== (i = localStorage.getItem(c)) && void 0 !== i ? i : p,
          prompt_template_n2s:
            null !== (o = localStorage.getItem(u)) && void 0 !== o ? o : g,
          prompt_template_fewshot:
            null !== (a = localStorage.getItem(d)) && void 0 !== a ? a : ""
        }),
        m = {
          open: function (e) {
            h.setState(function (t) {
              t.open = e === t.open ? "" : e;
            });
          },
          reset: function () {
            h.setState({ user_prompt_template: f, res_sub_prompt_template: p }),
              localStorage.setItem(l, f),
              localStorage.setItem(c, p);
          },
          resetTemplate: function () {
            h.setState({ prompt_template_n2s: g, prompt_template_fewshot: "" }),
              localStorage.setItem(u, g),
              localStorage.setItem(d, "");
          },
          setUserPromptTemplate: function (e) {
            h.setState({ user_prompt_template: e }), localStorage.setItem(l, e);
          },
          setResSubPromptTemplate: function (e) {
            h.setState({ res_sub_prompt_template: e }),
              localStorage.setItem(c, e);
          },
          setPromptTemplateN2S: function (e) {
            h.setState({ prompt_template_n2s: e }), localStorage.setItem(u, e);
          },
          setPromptTemplateFewshot: function (e) {
            h.setState({ prompt_template_fewshot: e }),
              localStorage.setItem(d, e);
          },
          setDebug: function (e) {
            h.setState({ debug: e });
          },
          setError: function (e, t) {
            h.setState(function (n) {
              n.error[e] = t;
            });
          },
          parseFields: function (e) {
            var t = e.debug,
              n = e.error,
              r = e.user_prompt_template,
              i = e.res_sub_prompt_template;
            if (!t || n.user_prompt_template || n.res_sub_prompt_template)
              return {};
            var o = {};
            if (r)
              try {
                var a = JSON.parse(r);
                o.user_prompt_template = a;
              } catch (e) {
                return {};
              }
            return i && (o.res_sub_prompt_template = i), o;
          },
          parseTemplateFields: function (e) {
            var t = e.debug_template,
              n = (e.error, e.prompt_template_n2s),
              r = e.prompt_template_fewshot;
            return t
              ? {
                  prompt_template_n2s: n || "",
                  prompt_template_fewshot: r || ""
                }
              : {};
          },
          setDebugTemplate: function (e) {
            h.setState({ debug_template: e });
          }
        };
    },
    46384: function (e, t, n) {
      "use strict";
      n.d(t, {
        F: function () {
          return a;
        }
      });
      var r = n(10554),
        i = n(46328),
        o = n(48079),
        a = {
          setEditor: function (e, t) {
            (a.editor = e), (a.utils = t);
          },
          editor: void 0,
          utils: void 0,
          clear: function () {
            a.editor &&
              (r.YR.delete(a.editor, {
                at: {
                  anchor: r.ML.start(a.editor, []),
                  focus: r.ML.end(a.editor, [])
                }
              }),
              o.aK.setState(function (e) {
                e.hasContent = !1;
              }));
          },
          getContent: function () {
            return a.editor ? (0, i.C)(a.editor.children) : "";
          }
        };
    },
    80455: function (e, t, n) {
      "use strict";
      n.d(t, {
        A: function () {
          return x;
        },
        T: function () {
          return A;
        }
      });
      var r,
        i,
        o,
        a = n(78095),
        s = n.n(a),
        l = n(53939),
        c = n.n(l),
        u = n(83134),
        d = n.n(u),
        f = n(77593),
        p = n(41776),
        g = n(45930),
        h = n(46384),
        m = n(24561),
        v = n(77811),
        b = n(48079),
        y = n(65342),
        A = "整理这些文件的核心内容",
        x = {
          agree: function () {
            b.aK.setState(function (e) {
              e.agree = !e.agree;
            });
          },
          closePopover: function () {
            m.Ee.closeFiles();
          },
          stop:
            ((o = d()(
              c()().mark(function e(t, n) {
                var r, i, o, a;
                return c()().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (r = null == n ? void 0 : n.length),
                          (i =
                            null == n ? void 0 : n.slice(Math.max(r - 10, 0))),
                          (o = b.aK.getState()),
                          (a = o.chatId),
                          b.aK.setState(function (e) {
                            e.stateMap[a].stopping = !0;
                          }),
                          p.qr
                            .getState()
                            .api.chat.stop(a, t, { index: r, last: i });
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function (e, t) {
              return o.apply(this, arguments);
            }),
          send:
            ((i = d()(
              c()().mark(function e(t, n) {
                var r,
                  i,
                  o,
                  a,
                  l,
                  u,
                  d,
                  f,
                  p,
                  x,
                  w,
                  S,
                  C,
                  E,
                  I = arguments;
                return c()().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((r =
                            I.length > 2 && void 0 !== I[2]
                              ? I[2]
                              : { is_prompt: !1, create_new: !1 }),
                          (i = b.aK.getState()),
                          (o = i.chatId),
                          (a = m.Vw.getState()),
                          (l = a.currentFiles),
                          !(u = t || h.F.getContent().trim()) &&
                            null != l &&
                            l.length &&
                            (u = A),
                          u)
                        ) {
                          e.next = 7;
                          break;
                        }
                        return e.abrupt("return");
                      case 7:
                        if (
                          (h.F.clear(),
                          m.Ee.currentClear(),
                          (d = g.D.get()),
                          (f = d.caseID),
                          (p = d.caseIndex),
                          (x = o),
                          (f || o) && !r.create_new)
                        ) {
                          e.next = 15;
                          break;
                        }
                        return (e.next = 14), b.W6.create();
                      case 14:
                        x = e.sent;
                      case 15:
                        if (!f) {
                          e.next = 19;
                          break;
                        }
                        return (e.next = 18), g.D.create(f, p);
                      case 18:
                        x = e.sent;
                      case 19:
                        null != (w = t ? n || [] : l) &&
                          w.length &&
                          b.W6.addChatFiles(x, w),
                          (S = w.map(function (e) {
                            return e.id;
                          })),
                          (C = (0, y.aK)(u, S)),
                          (E = (0, y.qD)()),
                          v.d.stream(u, s()({ refs: S, use_search: C }, E));
                      case 25:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function (e, t) {
              return i.apply(this, arguments);
            }),
          reAnswer: function () {
            var e,
              t,
              n,
              r = b.aK.getState(),
              i = r.chatId,
              o = r.segmentsMap,
              a =
                null === (e = o[i]) || void 0 === e
                  ? void 0
                  : e.findLastIndex(function (e) {
                      return "user" === e.role;
                    });
            if (void 0 !== a) {
              var l = null === (t = o[i]) || void 0 === t ? void 0 : t[a];
              b.aK.setState(function (e) {
                var t,
                  n,
                  r = e.segmentsMap[i].length - a - 1;
                (e.segmentTotalMap[i] =
                  (null !== (t = e.segmentTotalMap[i]) && void 0 !== t
                    ? t
                    : 0) - r),
                  (e.segmentsMap[i] =
                    null === (n = e.segmentsMap[i]) || void 0 === n
                      ? void 0
                      : n.filter(function (e, t) {
                          return t <= a;
                        }));
              });
              var c = null != l ? l : {},
                u = c.content,
                d = c.file_refs,
                f = (0, y.aK)(null != u ? u : "", d),
                p = (0, y.qD)();
              v.d.stream(
                null !== (n = null == l ? void 0 : l.content) && void 0 !== n
                  ? n
                  : "",
                s()(
                  {
                    refs: d,
                    use_search: f,
                    action: "variant",
                    segment_id: null == l ? void 0 : l.id
                  },
                  p
                )
              );
            }
          },
          forceSearch: function () {
            var e,
              t,
              n,
              r = b.aK.getState(),
              i = r.chatId,
              o = r.segmentsMap,
              a =
                null === (e = o[i]) || void 0 === e
                  ? void 0
                  : e.findLastIndex(function (e) {
                      return "user" === e.role;
                    });
            if (void 0 !== a) {
              var l = null === (t = o[i]) || void 0 === t ? void 0 : t[a],
                c = null != l ? l : {},
                u = c.content,
                d = c.file_refs,
                f = (0, y.aK)(null != u ? u : "", d),
                p = (0, y.qD)();
              v.d.stream(
                null !== (n = null == l ? void 0 : l.content) && void 0 !== n
                  ? n
                  : "",
                s()(
                  {
                    refs: null == l ? void 0 : l.file_refs,
                    use_search: f,
                    force_search: !0
                  },
                  p
                )
              );
            }
          },
          answerContinue: function () {
            var e,
              t,
              n = b.aK.getState(),
              r = n.chatId,
              i = n.segmentsMap,
              o =
                null === (e = i[r]) || void 0 === e
                  ? void 0
                  : e.findLastIndex(function (e) {
                      return "user" === e.role;
                    });
            if (void 0 !== o) {
              var a = null === (t = i[r]) || void 0 === t ? void 0 : t[o];
              v.d.stream(" ", {
                action: "continue",
                segment_id: null == a ? void 0 : a.id
              });
            }
          },
          checkToken:
            ((r = d()(
              c()().mark(function e() {
                var t, n, r, i, o, a, s, l, u;
                return c()().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((0, f.m1)().user) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt("return");
                        case 3:
                          return (
                            (t = m.Vw.getState()),
                            (n = t.currentFiles),
                            (r = p.qr.getState()),
                            (i = r.api),
                            (o = b.aK.getState()),
                            (a = o.chatId),
                            (s = h.F.getContent().trim()),
                            b.aK.setState(function (e) {
                              e.checkingToken = !0;
                            }),
                            (l = n.map(function (e) {
                              return e.id;
                            })),
                            (e.prev = 9),
                            (e.next = 12),
                            i.chat.checkToken(a, { refs: l, content: s })
                          );
                        case 12:
                          (u = e.sent),
                            b.aK.setState(function (e) {
                              (e.checkingToken = !1), (e.tokensInfo = u);
                            }),
                            (e.next = 19);
                          break;
                        case 16:
                          (e.prev = 16),
                            (e.t0 = e.catch(9)),
                            b.aK.setState(function (e) {
                              e.checkingToken = !1;
                            });
                        case 19:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[9, 16]]
                );
              })
            )),
            function () {
              return r.apply(this, arguments);
            })
        };
    },
    77811: function (e, t, n) {
      "use strict";
      n.d(t, {
        d: function () {
          return O;
        }
      });
      var r = n(53939),
        i = n.n(r),
        o = n(83134),
        a = n.n(o),
        s = n(78095),
        l = n.n(s),
        c = n(88222),
        u = n(75555),
        d = n(61756),
        f = n(41776),
        p = n(80455),
        g = n(48079),
        h = n(74266),
        m = n.n(h),
        v = n(60430),
        b = n.n(v),
        y = n(96425),
        A = n(75074),
        x = n(39324),
        w = {
          handlePromptStreamMessage: function (e, t) {
            var n = t.chatId;
            return new Promise(
              (function () {
                var t = a()(
                  i()().mark(function t(r, o) {
                    var a, s, l, c, u, d, f, p, g, h;
                    return i()().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              (t.prev = 0),
                                (s = ""),
                                (l = 0),
                                (c = new TextDecoder()),
                                (u =
                                  null === (a = e.body) || void 0 === a
                                    ? void 0
                                    : a.getReader());
                            case 4:
                              if (!u) {
                                t.next = 16;
                                break;
                              }
                              return (t.next = 7), u.read();
                            case 7:
                              if (
                                ((d = t.sent), (f = d.done), (p = d.value), !f)
                              ) {
                                t.next = 12;
                                break;
                              }
                              return t.abrupt("break", 16);
                            case 12:
                              (s += c.decode(p, { stream: !0 })).endsWith(
                                "\n"
                              ) &&
                                ((g = (0, x.RE)(s)),
                                (h = g.slice(l)),
                                (l = g.length),
                                w.handoutMessage(h, { chatId: n })),
                                (t.next = 4);
                              break;
                            case 16:
                              r(!0), (t.next = 22);
                              break;
                            case 19:
                              (t.prev = 19), (t.t0 = t.catch(0)), o(t.t0);
                            case 22:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[0, 19]]
                    );
                  })
                );
                return function (e, n) {
                  return t.apply(this, arguments);
                };
              })()
            );
          },
          handoutMessage: function (e, t) {
            var n = t.chatId;
            e.forEach(function (e) {
              "chat_prompt_show" === e.event
                ? g.aK.setState(function (e) {
                    e.promptStreamLoading = !0;
                  })
                : "chat_prompt" === e.event &&
                  g.aK.setState(function (t) {
                    var r,
                      i =
                        null !== (r = t.promptsMap[n]) && void 0 !== r ? r : [],
                      o = i.findIndex(function (e) {
                        return "" === e;
                      });
                    -1 !== o && (i[o] = e.text);
                  });
            });
          },
          stream: function (e) {
            var t = f.qr.getState().api,
              n = g.aK.getState().chatId;
            t.chat
              .generatePromptStream(n, e)
              .then(
                (function () {
                  var e = a()(
                    i()().mark(function e(t) {
                      return i()().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt(
                                "return",
                                w.handlePromptStreamMessage(t, { chatId: n })
                              );
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()
              )
              .catch(function (e) {})
              .finally(function () {
                g.aK.setState(function (e) {
                  e.promptStreamLoading = !1;
                });
              });
          }
        },
        S = ["event"],
        C = null,
        E = function () {
          var e;
          C && (clearTimeout(C), (C = null));
          var t = g.aK.getState(),
            n = t.chatId;
          (null === (e = t.stateMap[n]) || void 0 === e
            ? void 0
            : e.chatting) &&
            (C = setTimeout(function () {
              var e,
                t = g.aK.getState(),
                n = t.chatId,
                r = t.controllerMap;
              null == r || null === (e = r[n]) || void 0 === e || e.abort();
            }, 3e3));
        },
        I = function e(t, n) {
          var r,
            i = n.qaid,
            o = n.chatId,
            a = n.streamID,
            s =
              null === (r = g.aK.getState().stateMap[o]) || void 0 === r
                ? void 0
                : r.latestID;
          a === s &&
            t.forEach(function (t) {
              var n, r, s, l;
              switch (t.event) {
                case "aggregated_messages":
                  e(t.messages, { qaid: i, chatId: o, streamID: a });
                  break;
                case "req":
                  var c = ["text"];
                  null != t &&
                    null !== (n = t.refs) &&
                    void 0 !== n &&
                    n.length &&
                    c.push("file"),
                    (0, u.LF)("msh_sent_message", {
                      msh_sender: "user",
                      msh_message_type: c,
                      msh_conversation_id: o,
                      msh_message_id: t.id
                    }),
                    (function (e) {
                      var t = e.message,
                        n = e.qaid,
                        r = e.chatId;
                      g.aK.setState(function (e) {
                        var i,
                          o =
                            null !== (i = e.segmentsMap[r]) && void 0 !== i
                              ? i
                              : [];
                        if (t.id && t.group_id) {
                          var a,
                            s = o.findLastIndex(function (e) {
                              return e.id === t.id;
                            });
                          (n.q = t.id),
                            -1 === s &&
                              ((e.segmentTotalMap[r] =
                                (null !== (a = e.segmentTotalMap[r]) &&
                                void 0 !== a
                                  ? a
                                  : 0) + 1),
                              o.push({
                                id: t.id,
                                group_id: t.group_id,
                                role: "user",
                                content: t.content || "",
                                file_refs: (null == t ? void 0 : t.refs) || []
                              }));
                        }
                      });
                    })({ message: t, qaid: i, chatId: o });
                  break;
                case "resp":
                  !(function (e) {
                    var t = e.message,
                      n = e.qaid,
                      r = e.chatId;
                    g.aK.setState(function (e) {
                      var i,
                        o =
                          null !== (i = e.segmentsMap[r]) && void 0 !== i
                            ? i
                            : [];
                      if (t.id && t.group_id) {
                        var a,
                          s = o.findLastIndex(function (e) {
                            return e.id === t.id;
                          });
                        (n.a = t.id),
                          (e.stateMap[r].chattingID = t.id),
                          -1 === s &&
                            ((e.segmentTotalMap[r] =
                              (null !== (a = e.segmentTotalMap[r]) &&
                              void 0 !== a
                                ? a
                                : 0) + 1),
                            o.push({
                              id: t.id,
                              group_id: t.group_id,
                              role: "assistant"
                            }));
                      }
                    });
                  })({ message: t, qaid: i, chatId: o });
                  break;
                case "cmpl":
                  !(function (e) {
                    var t = e.message,
                      n = e.qaid,
                      r = e.chatId;
                    g.aK.setState(function (e) {
                      var i,
                        o,
                        a,
                        s =
                          null !== (i = e.segmentsMap[r]) && void 0 !== i
                            ? i
                            : [],
                        l =
                          null !==
                            (o =
                              null === (a = e.stateMap[r]) || void 0 === a
                                ? void 0
                                : a.stopping) &&
                          void 0 !== o &&
                          o;
                      if (n.a && t.text) {
                        var c,
                          d = s.findLastIndex(function (e) {
                            return e.id === n.a;
                          }),
                          f = (
                            null !== (c = g.aK.getState().stateMap[r]) &&
                            void 0 !== c
                              ? c
                              : {}
                          ).firstContent;
                        if (s[d] && !l) {
                          var p,
                            h,
                            m = "";
                          f
                            ? ((e.stateMap[r].firstContent = !1),
                              (0, u.LF)("msh_resove_reply_section", {
                                msh_message_type: ["text"],
                                msh_associate_message_id: n.q,
                                msh_conversation_id: r,
                                msh_message_id: t.id,
                                msh_section_name: "first_word"
                              }))
                            : (m =
                                null !==
                                  (p =
                                    null === (h = s[d]) || void 0 === h
                                      ? void 0
                                      : h.content) && void 0 !== p
                                  ? p
                                  : ""),
                            (s[d].content = m + t.text);
                        }
                      }
                    });
                  })({ message: t, qaid: i, chatId: o });
                  break;
                case "rename":
                  !(function (e) {
                    var t = e.message,
                      n = e.chatId;
                    g.aK.setState(function (e) {
                      t.text &&
                        (e.detailsMap && (e.detailsMap[n].name = t.text),
                        g.DD.setState(function (e) {
                          e.items.forEach(function (e) {
                            e.id === n && (e.name = t.text || e.name);
                          });
                        }));
                    });
                  })({ message: t, chatId: o });
                  break;
                case "file_cut":
                  !(function (e) {
                    var t = e.message,
                      n = e.chatId,
                      r = e.qaid;
                    g.aK.setState(function (e) {
                      var i,
                        o =
                          null !== (i = e.segmentsMap[n]) && void 0 !== i
                            ? i
                            : [],
                        a = o.findLastIndex(function (e) {
                          return e.id === r.q;
                        });
                      o[a] &&
                        (o[a].preserved_file_ratio =
                          t.preserved_file_ratio || 0);
                    });
                  })({ message: t, chatId: o, qaid: i });
                  break;
                case "content":
                  !(function (e) {
                    var t = e.message,
                      n = e.chatId,
                      r = e.qaid;
                    g.aK.setState(function (e) {
                      var i,
                        o,
                        a,
                        s =
                          null !== (i = e.segmentsMap[n]) && void 0 !== i
                            ? i
                            : [],
                        l = s.findLastIndex(function (e) {
                          return e.id === r.q;
                        });
                      s[l] &&
                        ((s[l].content =
                          (null === (o = t.msg) || void 0 === o
                            ? void 0
                            : o.content) || ""),
                        (s[l].url_refs =
                          (null === (a = t.msg) || void 0 === a
                            ? void 0
                            : a.url_refs) || []));
                    });
                  })({ message: t, chatId: o, qaid: i });
                  break;
                case "ref_docs":
                  !(function (e) {
                    var t = e.message,
                      n = e.chatId,
                      r = e.qaid;
                    g.aK.setState(function (e) {
                      var i,
                        o,
                        a =
                          null !== (i = e.segmentsMap[n]) && void 0 !== i
                            ? i
                            : [],
                        s = a.findLastIndex(function (e) {
                          return e.id === r.a;
                        });
                      a[s] &&
                        (a[s].ref_docs
                          ? (o = a[s].ref_docs).push.apply(
                              o,
                              b()(t.ref_docs || [])
                            )
                          : (a[s].ref_docs = t.ref_docs || []));
                    });
                  })({ message: t, chatId: o, qaid: i });
                  break;
                case "search_plus":
                  (0, u.LF)("msh_resove_reply_section", {
                    msh_message_type: ["text"],
                    msh_associate_message_id: i.q,
                    msh_conversation_id: o,
                    msh_message_id: t.id,
                    msh_section_name: "search_bubble"
                  }),
                    (function (e) {
                      var t = e.message,
                        n = e.chatId,
                        r = e.qaid;
                      g.aK.setState(function (e) {
                        var i,
                          o =
                            null !== (i = e.segmentsMap[n]) && void 0 !== i
                              ? i
                              : [],
                          a = o.findLastIndex(function (e) {
                            return e.id === r.a;
                          });
                        o[a] &&
                          (o[a].search_plus || (o[a].search_plus = []),
                          o[a].search_plus.push(t));
                      });
                    })({ message: t, chatId: o, qaid: i });
                  break;
                case "debug":
                  (s = { message: t }.message || {}).event,
                    (l = m()(s, S)).message && l.name
                      ? (0, y.o7)("[DEBUG CHAT]", l.name, "::", l.message)
                      : l.message
                      ? (0, y.o7)("[DEBUG CHAT]", l.message)
                      : (0, y.o7)("[DEBUG CHAT]", l);
                  break;
                case "error":
                  "kimi.completion.stream" ===
                    (null == t || null === (r = t.error) || void 0 === r
                      ? void 0
                      : r.error_type) &&
                    (0, u.LF)("msh_resove_reply_tired", {
                      msh_conversation_id: o,
                      msh_message_id: i.a
                    }),
                    (function (e) {
                      var t = e.message,
                        n = e.chatId,
                        r = e.qaid;
                      g.aK.setState(function (e) {
                        var i,
                          o =
                            null !== (i = e.segmentsMap[n]) && void 0 !== i
                              ? i
                              : [];
                        if (r.a && t.error) {
                          var a,
                            s = o.findLastIndex(function (e) {
                              return e.id === r.a;
                            });
                          o[s] && (o[s].error = t.error),
                            (null === (a = t.error) || void 0 === a
                              ? void 0
                              : a.error_type) === g.vp.severity_high &&
                              e.detailsMap &&
                              (e.detailsMap[n].status = "forbidden");
                        }
                      });
                    })({ message: t, chatId: o, qaid: i });
                  break;
                case "ping":
                  E();
              }
            });
        },
        k = function (e, t) {
          var n = t.chatId,
            r = t.qaid,
            o = t.streamID;
          return (
            g.aK.setState(function (e) {
              e.segmentsMap[n] || (e.segmentsMap[n] = []);
            }),
            new Promise(
              (function () {
                var t = a()(
                  i()().mark(function t(a, s) {
                    var l, c, u, d, f, p, g, h, m, v;
                    return i()().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              (t.prev = 0),
                                (c = ""),
                                (u = 0),
                                (d = new TextDecoder()),
                                (f =
                                  null === (l = e.body) || void 0 === l
                                    ? void 0
                                    : l.getReader());
                            case 4:
                              if (!f) {
                                t.next = 16;
                                break;
                              }
                              return (t.next = 7), f.read();
                            case 7:
                              if (
                                ((p = t.sent), (g = p.done), (h = p.value), !g)
                              ) {
                                t.next = 12;
                                break;
                              }
                              return t.abrupt("break", 16);
                            case 12:
                              (c += d.decode(h, { stream: !0 })).endsWith(
                                "\n"
                              ) &&
                                ((m = (0, x.RE)(c)),
                                (v = m.slice(u)),
                                (u = m.length),
                                I(v, { qaid: r, chatId: n, streamID: o })),
                                (t.next = 4);
                              break;
                            case 16:
                              a(!0), (t.next = 22);
                              break;
                            case 19:
                              (t.prev = 19), (t.t0 = t.catch(0)), s(t.t0);
                            case 22:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[0, 19]]
                    );
                  })
                );
                return function (e, n) {
                  return t.apply(this, arguments);
                };
              })()
            )
          );
        },
        Z = (function () {
          var e = a()(
            i()().mark(function e(t, n, r) {
              var o, a, s, l, c, d, p, h, m, v;
              return i()().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((a =
                            null === (o = g.aK.getState().stateMap[t]) ||
                            void 0 === o
                              ? void 0
                              : o.latestID),
                          (s = g.aK.getState().segmentsMap[t]),
                          (l = s && s.length > 0 ? s[s.length - 1] : {}),
                          g.aK.setState(function (e) {
                            (e.promptStreamLoading = !1),
                              (e.promptsMap[t] = new Array(g.dc).fill(""));
                          }),
                          (0, u.LF)("msh_resove_reply_section", {
                            msh_message_type: ["text"],
                            msh_associate_message_id: n.q,
                            msh_conversation_id: t,
                            msh_message_id: n.a,
                            msh_section_name: "end"
                          }),
                          r === a)
                        ) {
                          e.next = 9;
                          break;
                        }
                        return e.abrupt("return");
                      case 9:
                        return (
                          (c = f.qr.getState()),
                          (d = c.api),
                          (p = []),
                          (e.prev = 11),
                          (e.next = 14),
                          d.chat.listChatSegments(t, {
                            segment_ids: [n.q, n.a]
                          })
                        );
                      case 14:
                        (h = e.sent), (m = h.items), (p = m), (e.next = 21);
                        break;
                      case 19:
                        (e.prev = 19), (e.t0 = e.catch(11));
                      case 21:
                        if (((v = g.aK.getState()), v.chatId !== t)) {
                          e.next = 26;
                          break;
                        }
                        if (!O.withoutContinueStream(p, n)) {
                          e.next = 26;
                          break;
                        }
                        return e.abrupt("return");
                      case 26:
                        (0, g.Rp)(l) && w.stream(l.group_id),
                          g.aK.setState(function (e) {
                            var n, r, i;
                            e.segmentsMap[t] =
                              null !== (n = e.segmentsMap[t]) && void 0 !== n
                                ? n
                                : [];
                            var o =
                              null !== (r = e.segmentsMap[t]) && void 0 !== r
                                ? r
                                : [];
                            null !== (i = p) &&
                              void 0 !== i &&
                              i.length &&
                              p.forEach(function (e) {
                                var t = o.findLastIndex(function (t) {
                                  return t.id === e.id;
                                });
                                o[t] && (o[t] = e);
                              }),
                              (e.stateMap[t].ending = !0),
                              (e.stateMap[t].chatting = !1),
                              (e.stateMap[t].chattingID = "");
                          });
                      case 28:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[11, 19]]
              );
            })
          );
          return function (t, n, r) {
            return e.apply(this, arguments);
          };
        })(),
        F = n(65342),
        O = {
          startStream: function (e, t) {
            var n = g.aK.getState().chatId,
              r = (0, c.Z)(),
              i = new AbortController();
            p.A.closePopover(),
              g.aK.setState(function (e) {
                var t;
                (e.stateMap[n] = l()(
                  l()(
                    {},
                    null !== (t = e.stateMap[n]) && void 0 !== t ? t : {}
                  ),
                  {},
                  {
                    firstContent: !0,
                    latestID: r,
                    chatting: !0,
                    stopping: !1,
                    ending: !1
                  }
                )),
                  (e.controllerMap[n] = i);
              });
            var o = { q: "", a: "" };
            null != t && t.qid && ((o.q = t.qid), (o.a = t.aid));
            var a = e(n, r, i.signal);
            O.receiveStream(a, l()({ streamID: r, chatId: n, qaid: o }, t));
          },
          receiveStream: function (e, t) {
            var n = t.chatId,
              r = t.streamID,
              o = t.qaid;
            e.then(
              (function () {
                var e = a()(
                  i()().mark(function e(t) {
                    return i()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return e.abrupt(
                              "return",
                              k(t, { chatId: n, qaid: o, streamID: r })
                            );
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()
            )
              .catch(function (e) {
                !(function (e, t) {
                  var n = t || {},
                    r = n.error_type,
                    i = n.message;
                  null != r &&
                    r.startsWith("chat.user_") &&
                    (0, A.VY)().ui.message.error(i);
                })(0, e);
              })
              .then(
                a()(
                  i()().mark(function e() {
                    return i()().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            Z(n, o, r);
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )
              );
          },
          stream: function (e, t) {
            var n = f.qr.getState().api,
              r = d.O.getState(),
              i = d.$.parseFields(r),
              o = d.$.parseTemplateFields(r);
            O.startStream(function (r, a, s) {
              return n.chat.sendMessage(
                r,
                l()(
                  l()(l()({ messages: [{ role: "user", content: e }] }, t), i),
                  o
                ),
                s
              );
            }, {});
          },
          continueStream: function (e, t) {
            var n = f.qr.getState().api;
            O.startStream(
              function (t, r, i) {
                return (
                  (0, u.LF)("msh_resove_reply_section", {
                    msh_message_id: e,
                    msh_conversation_id: t
                  }),
                  n.chat.getContinueMessage(t, { sid: e }, i)
                );
              },
              { aid: e, qid: t }
            );
          },
          shouleContinueStream: function (e, t) {
            var n = g.aK.getState().continueInfo || {},
              r = n.sid,
              i = n.count,
              o = n.timestamp,
              a = n.startTime,
              s = function () {
                O.continueStream(e, t),
                  g.aK.setState(function (t) {
                    e === t.continueInfo.sid
                      ? ((t.continueInfo.count += 1),
                        (t.continueInfo.timestamp = +new Date()))
                      : (t.continueInfo = {
                          sid: e,
                          count: 1,
                          timestamp: +new Date(),
                          startTime: +new Date()
                        });
                  });
              },
              l = +new Date();
            if (l - a > 24e4) return !1;
            var c = l - o,
              u = (0, F.Br)(i);
            return (
              r === e && c < u
                ? setTimeout(function () {
                    s();
                  }, u - c)
                : s(),
              !0
            );
          },
          withContinueStream: function (e) {
            if (null != e && e.length) {
              var t = (0, g.mW)(e),
                n = e[e.length - 1];
              if (n && t) {
                var r = (t || {}).id,
                  i = n || {},
                  o = i.role,
                  a = i.id,
                  s = i.need_continue;
                return (
                  !("assistant" !== o || !s) &&
                  (O.shouleContinueStream(a, r), !0)
                );
              }
            }
          },
          withoutContinueStream: function (e, t) {
            var n = e[e.length - 1];
            return (
              !(n && "assistant" === n.role && !n.need_continue) &&
              O.shouleContinueStream(t.a, t.q)
            );
          }
        };
    },
    80660: function (e, t, n) {
      "use strict";
      n.d(t, {
        t: function () {
          return f;
        }
      });
      var r = n(53939),
        i = n.n(r),
        o = n(83134),
        a = n.n(o),
        s = n(75074),
        l = n(32163),
        c = n(48079),
        u = n(41776),
        d = n(63782),
        f = (0, l.Q_)(function (e, t) {
          return {
            shareSegmentsIdMap: {},
            shareMode: !1,
            getShareSegmentsList: function () {
              var e = c.aK.getState(),
                n = e.chatId,
                r = e.segmentsMap,
                i = t().shareSegmentsIdMap,
                o = r[n],
                a = [];
              return (
                null == o ||
                  o.forEach(function (e) {
                    var t = e.id;
                    i[t] && a.push(e);
                  }),
                a
              );
            },
            getShareId: function () {
              return a()(
                i()().mark(function e() {
                  var n, r, o, a, l, d, f, p, g, h, m, v, b;
                  return i()().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            for (o in ((n = t().shareSegmentsIdMap),
                            (r = []),
                            n))
                              n[o] && r.push(o);
                            return (
                              (a = (0, s.VY)()),
                              (l = a.ui),
                              (d = c.aK.getState()),
                              (f = d.chatId),
                              (p = u.qr.getState()),
                              (g = p.api),
                              (h = { chat_id: f, segment_ids: r }),
                              (e.prev = 7),
                              (e.next = 10),
                              g.chat.createShareId(h)
                            );
                          case 10:
                            return (
                              (m = e.sent), (v = m.id), e.abrupt("return", v)
                            );
                          case 15:
                            (e.prev = 15),
                              (e.t0 = e.catch(7)),
                              null === (b = l.message) ||
                                void 0 === b ||
                                b.error(e.t0.message);
                          case 18:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[7, 15]]
                  );
                })
              )();
            },
            getShareImg: function (e) {
              return a()(
                i()().mark(function n() {
                  var r, o, a, s, l, c, d;
                  return i()().wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            if (
                              ((r = e.mode),
                              (o = e.id),
                              (a = u.qr.getState()),
                              (s = a.api),
                              (n.prev = 2),
                              !o)
                            ) {
                              n.next = 7;
                              break;
                            }
                            (n.t0 = o), (n.next = 10);
                            break;
                          case 7:
                            return (n.next = 9), t().getShareId();
                          case 9:
                            n.t0 = n.sent;
                          case 10:
                            if (!(l = n.t0)) {
                              n.next = 19;
                              break;
                            }
                            return (n.next = 14), s.chat.shareScreenShot(l, r);
                          case 14:
                            return (
                              (c = n.sent),
                              (d = c.screenshot),
                              n.abrupt("return", d)
                            );
                          case 19:
                            throw Error("获取id失败");
                          case 20:
                            n.next = 25;
                            break;
                          case 22:
                            (n.prev = 22), (n.t1 = n.catch(2));
                          case 25:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [[2, 22]]
                  );
                })
              )();
            },
            openShareMode: function (t) {
              return a()(
                i()().mark(function n() {
                  var r, o, a, s, l, u, f, p, g, h, m;
                  return i()().wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (o = c.aK.getState()),
                            (a = o.chatId),
                            (s = o.segmentsMap),
                            (l = o.segmentTotalMap),
                            (u = s[a]),
                            (f = l[a]),
                            (n.next = 5),
                            d.d.load(
                              null == u ||
                                null === (r = u.at(0)) ||
                                void 0 === r
                                ? void 0
                                : r.id,
                              f
                            )
                          );
                        case 5:
                          (p = c.aK.getState()),
                            (g = p.segmentsMap),
                            (h = {}),
                            null == (m = g[a]) ||
                              m.forEach(function (e) {
                                var n = e.id;
                                e.content &&
                                  !e.error &&
                                  (h[n] = !t || e.group_id === t);
                              }),
                            e(function (e) {
                              (e.shareSegmentsIdMap = h), (e.shareMode = !0);
                            });
                        case 10:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              )();
            }
          };
        });
    },
    65342: function (e, t, n) {
      "use strict";
      n.d(t, {
        Br: function () {
          return v;
        },
        aK: function () {
          return m;
        },
        qD: function () {
          return h;
        }
      });
      var r = n(78095),
        i = n.n(r),
        o = n(74266),
        a = n.n(o),
        s = n(57940),
        l = n(45089),
        c = n(75074),
        u = n(67357),
        d = n(5269),
        f = n(48079),
        p = [
          "search_fetch_web",
          "few_shot",
          "frequency_penalty",
          "smooth",
          "chat_model",
          "chat_endpoint",
          "chat_temp",
          "n2s_model",
          "n2s_endpoint",
          "n2s_temp",
          "engine_id",
          "rag",
          "use_search"
        ],
        g = function (e, t, n) {
          null != n && (e[t] = (n || "" === n) && "false" !== n && "0" !== n);
        },
        h = function () {
          var e = ((0, c.VY)().route || {}).searchfn,
            t = d.C.getDebugData().debugging;
          if ("kimi" === s.l && !t) return {};
          var n = e(),
            r = n.search_fetch_web,
            o = n.few_shot,
            l = n.frequency_penalty,
            u = n.smooth,
            f = n.chat_model,
            h = n.chat_endpoint,
            m = n.chat_temp,
            v = n.n2s_model,
            b = n.n2s_endpoint,
            y = n.n2s_temp,
            A = n.engine_id,
            x = n.rag,
            w = n.use_search,
            S = a()(n, p),
            C = i()(
              {
                frequency_penalty: l,
                chat_model: f,
                chat_endpoint: h,
                n2s_model: v,
                n2s_endpoint: b,
                engine_id: A
              },
              S
            );
          return (
            g(C, "search_fetch_web", r),
            g(C, "few_shot", o),
            g(C, "smooth", u),
            g(C, "use_search", w),
            isNaN(Number(m)) || (C.chat_temp = Number(m)),
            isNaN(Number(y)) || (C.n2s_temp = Number(y)),
            isNaN(Number(x)) || (C.rag = Number(x)),
            C
          );
        },
        m = function (e, t) {
          var n,
            r = f.aK.getState(),
            i = r.useSearchPlus,
            o = r.segmentsMap,
            a = r.chatId,
            s = u.R.getState().search,
            c = null !== (n = o[a]) && void 0 !== n ? n : [],
            d =
              null == c
                ? void 0
                : c
                    .filter(function (e) {
                      return "user" === e.role;
                    })
                    .some(function (e) {
                      var t = e.content,
                        n = void 0 === t ? "" : t,
                        r = e.file_refs,
                        i = (null == r ? void 0 : r.length) > 0,
                        o = n.match(l.J);
                      return i || o;
                    }),
            p = d || (null == t ? void 0 : t.length) > 0 || e.match(l.J);
          return (i && !p) || !s;
        },
        v = function (e) {
          return e < 5 ? 2200 : e < 10 ? 5e3 : e < 20 ? 1e4 : 15e3;
        };
    },
    96329: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return q;
        }
      });
      var r = n(78095),
        i = n.n(r),
        o = n(34827),
        a = n.n(o),
        s = n(87752),
        l = n(44314),
        c = n(55691),
        u = n(84007),
        d = n(5245),
        f = n(41987),
        p = n(63313),
        g = n(17741);
      var h = "/user/admin",
        m = "/user/content-filter";
      function v() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return e ? "/".concat(e) : "";
      }
      var b = "/chat",
        y = "/user/admin",
        A = "/settings/profile";
      var x = n(75555),
        w = n(75074),
        S = n(92082),
        C = n(95060),
        E = n(77593),
        I = n(56108),
        k = n(88284),
        Z = n.n(k),
        F = n(45562),
        O = n(5368),
        R = n(91150),
        M = n.n(R),
        j = n(38399),
        B = n(41587),
        T = n(41776),
        P = "container___vDmoU",
        N = "input___OqEA0",
        V = "rates___ZMsXL",
        Q = "rate___CJOsg",
        W = "select___jH0fx",
        L = "icon___bgc06",
        D = n(44810),
        U = [
          {
            tooltip: "很不理想",
            icon_n: "1.png",
            icon_h: "1_h.png",
            value: "1"
          },
          { tooltip: "无感", icon_n: "2.png", icon_h: "2_h.png", value: "2" },
          { tooltip: "还不错", icon_n: "3.png", icon_h: "3_h.png", value: "3" },
          { tooltip: "很愉快", icon_n: "4.png", icon_h: "4_h.png", value: "4" },
          {
            tooltip: "非常棒，远超预期",
            icon_n: "5.png",
            icon_h: "5_h.png",
            value: "5"
          }
        ],
        z = function (e) {
          var t = e.handleClose,
            r = e.open,
            i = (e.openDelete, (0, p.useState)("")),
            o = a()(i, 2),
            l = o[0],
            c = o[1],
            d = (0, p.useState)(""),
            f = a()(d, 2),
            g = f[0],
            h = f[1],
            m = function () {
              c(""), h(""), t();
            };
          return (0, D.jsx)(B.Z, {
            open: r,
            title: "用户反馈",
            elementId: "modal_dialog_user_comment_feedback",
            onClose: m,
            cancelText: "以后再说",
            okText: "提交",
            onConfirm: function (e) {
              (0, x.GE)("submit"),
                (function (e) {
                  e.preventDefault(),
                    T.qr
                      .getState()
                      .api.user.sendUserFeedback({
                        emotion_type: l,
                        content: g
                      })
                      .then(function () {
                        (0, w.VY)().ui.message.success("反馈成功");
                      }),
                    m();
                })(e);
            },
            okButtonProps: { disabled: !l },
            okCancelProps: { variant: !l },
            modalsx: {
              paper: {
                bgcolor: "var(--msh-chat-fb-bg)",
                borderColor: "var(--border-main)"
              }
            },
            children: (0, D.jsxs)(F.Z, {
              className: P,
              children: [
                (0, D.jsx)(u.Z, { children: "您和Kimi的对话还愉快吗？" }),
                (0, D.jsx)(s.Z, {
                  flexDirection: "row",
                  className: V,
                  gap: 2.5,
                  my: 4,
                  children: U.map(function (e) {
                    var t = e.tooltip,
                      r = e.icon_n,
                      i = e.icon_h,
                      o = e.value;
                    return (0, D.jsx)(
                      j.Z,
                      {
                        title: t,
                        placement: "top",
                        children: (0, D.jsx)(F.Z, {
                          className: M()(Q, Z()({}, W, l === o)),
                          flex: 1,
                          onClick: function () {
                            c(o);
                          },
                          sx: {
                            ":hover .icon": {
                              backgroundImage: "url(".concat(
                                n(66008)("./".concat(i)),
                                ")"
                              )
                            }
                          },
                          children: (0, D.jsx)(F.Z, {
                            className: M()(L, "icon"),
                            sx: {
                              backgroundImage: "url(".concat(
                                n(66008)("./".concat(l === o ? i : r)),
                                ")"
                              )
                            }
                          })
                        })
                      },
                      o
                    );
                  })
                }),
                (0, D.jsx)(u.Z, {
                  children:
                    "如果您愿意的话，欢迎说说你的想法，Kimi 会努力做更好！"
                }),
                (0, D.jsx)(O.Z, {
                  fullWidth: !0,
                  className: N,
                  placeholder: "欢迎说说你的想法",
                  onChange: function (e) {
                    h(e.target.value);
                  },
                  multiline: !0,
                  rows: 4
                })
              ]
            })
          });
        },
        H = "avatarWidget___es3ap",
        K = "avatarMenu___AvTWm",
        q = function (e) {
          var t,
            n = e.sx,
            r = void 0 === n ? {} : n,
            o = e.redirectAfterLogout,
            k = (0, E.E1)(function (e) {
              return e.token;
            }),
            Z =
              ((t = (0, f.useNavigate)()),
              (0, p.useMemo)(
                function () {
                  return {
                    navigate: t,
                    back: function () {
                      t(-1);
                    },
                    toNotFound: function () {
                      t("/404");
                    },
                    toForbidden: function () {
                      t("/403");
                    },
                    toLogin: function () {
                      t("/user/login");
                    },
                    toSignup: function () {
                      t("/signup");
                    },
                    toForgotPassword: function (e) {
                      t("/forgot-password" + v(e));
                    },
                    toHome: function () {
                      t(b);
                    },
                    toChat: function () {
                      t(
                        "/chat" +
                          v(
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : ""
                          )
                      );
                    },
                    toFiles: function () {
                      t(
                        "/files" +
                          v(
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : ""
                          )
                      );
                    },
                    toPlugins: function () {
                      t("/plugins");
                    },
                    toPromptTemplate: function () {
                      t("/prompt-template");
                    },
                    toSnippets: function () {
                      t("/snippets");
                    },
                    toSettings: function () {
                      t(A);
                    },
                    toAdmin: function () {
                      t(y);
                    },
                    toAdminSpace: function (e) {
                      t("/admin/space" + v(e));
                    }
                  };
                },
                [t]
              )),
            F = (0, S.M)("lang", (0, S.R)("fm")).fm,
            O = (0, S.M)(
              "thememode.thememode",
              (0, S.R)("toggleColorMode", "mode")
            ),
            R = O.toggleColorMode,
            M = O.mode,
            j =
              (0, E.E1)(function (e) {
                return e.user;
              }) || {},
            B = j.name,
            T = j.phone,
            P = j.is_admin,
            N = p.useState(!1),
            V = a()(N, 2),
            Q = V[0],
            W = V[1],
            L = p.useState(null),
            U = a()(L, 2),
            q = U[0],
            J = U[1],
            X = Boolean(q),
            G = function () {
              J(null);
            },
            _ = T || B || "";
          return (0, D.jsxs)(s.Z, {
            className: H,
            "data-testid": "msh-header-user-avatar",
            sx: i()(
              {
                "& > :not(style)": { m: 1 },
                position: "absolute",
                zIndex: "fab",
                top: function (e) {
                  return e.spacing(2);
                },
                right: function (e) {
                  return e.spacing(5);
                }
              },
              r
            ),
            children: [
              (0, D.jsx)(z, {
                handleClose: function () {
                  (0, x.GE)("cancel_user_feedback_btn"), W(!1);
                },
                open: Q
              }),
              (0, D.jsx)("div", {
                onClick: function (e) {
                  J(e.currentTarget);
                },
                style: { cursor: "pointer", margin: 0 },
                children: (0, D.jsx)(I.Z, {})
              }),
              (0, D.jsxs)(l.Z, {
                id: "basic-menu",
                open: X,
                anchorEl: q,
                onClose: G,
                className: K,
                MenuListProps: { "aria-labelledby": "basic-button" },
                children: [
                  _ &&
                    (0, D.jsx)(c.Z, {
                      onClick: G,
                      "data-testid": "msh-header-menu-name",
                      children: (0, D.jsx)(u.Z, {
                        variant: "body1",
                        children: _
                      })
                    }),
                  _ && (0, D.jsx)(d.Z, { sx: { margin: "0 !important" } }),
                  _ &&
                    (0, D.jsx)(c.Z, {
                      onClick: function () {
                        (0, x.GE)(
                          "dark" === M
                            ? "theme_change_to_light_btn"
                            : "theme_change_to_dark_btn"
                        ),
                          R();
                      },
                      "data-testid": "msh-header-menu-name",
                      children: (0, D.jsx)(g.Z, {
                        flex: !0,
                        center: !0,
                        gap: 1,
                        children: (0, D.jsx)(u.Z, {
                          component: "span",
                          variant: "body1",
                          children: "dark" === M ? "🌖 浅色模式" : "🌒 深色模式"
                        })
                      })
                    }),
                  _ && (0, D.jsx)(d.Z, { sx: { margin: "0 !important" } }),
                  (0, D.jsx)(c.Z, {
                    onClick: function () {
                      (0, x.GE)("open_user_feedback_btn"), W(!0), G();
                    },
                    children: (0, D.jsx)(u.Z, {
                      variant: "body1",
                      children: F("msh.user.avater.feedback")
                    })
                  }),
                  (0, D.jsx)(d.Z, { sx: { margin: "0 !important" } }),
                  P &&
                    (0, D.jsx)(c.Z, {
                      component: f.Link,
                      to: h,
                      target: "_blank",
                      "data-testid": "msh-header-menu-user-aduit",
                      children: (0, D.jsx)(u.Z, {
                        variant: "body1",
                        children: F("msh.user.login.manage-user")
                      })
                    }),
                  P && (0, D.jsx)(d.Z, { sx: { margin: "0 !important" } }),
                  P &&
                    (0, D.jsx)(c.Z, {
                      component: f.Link,
                      to: m,
                      target: "_blank",
                      "data-testid": "msh-header-menu-content-filter",
                      children: (0, D.jsx)(u.Z, {
                        variant: "body1",
                        children: "Content Filter"
                      })
                    }),
                  P && (0, D.jsx)(d.Z, { sx: { margin: "0 !important" } }),
                  k
                    ? (0, D.jsx)(c.Z, {
                        onClick: function () {
                          (G(), C.I.logout(), o) &&
                            (0, w.VY)().route.to({}, { to: o });
                        },
                        "data-testid": "msh-header-menu-logout",
                        children: (0, D.jsx)(u.Z, {
                          variant: "body1",
                          children: F("msh.user.login.logout")
                        })
                      })
                    : (0, D.jsx)(c.Z, {
                        onClick: function () {
                          Z.toLogin();
                        },
                        "data-testid": "msh-header-menu-login",
                        children: (0, D.jsx)(u.Z, {
                          variant: "body1",
                          children: F("vh.p.login.login")
                        })
                      })
                ]
              })
            ]
          });
        };
    },
    87524: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return u;
        }
      });
      Object.create;
      function r(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          i,
          o = n.call(e),
          a = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
            a.push(r.value);
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return a;
      }
      function i(e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, i = 0, o = t.length; i < o; i++)
            (!r && i in t) ||
              (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
        return e.concat(r || Array.prototype.slice.call(t));
      }
      Object.create;
      "function" == typeof SuppressedError && SuppressedError;
      var o = n(71032),
        a = n.n(o),
        s = n(63313);
      var l = function (e) {
          var t = (0, s.useRef)(e);
          return (t.current = e), t;
        },
        c = function (e) {
          var t = l(e);
          (0, s.useEffect)(function () {
            return function () {
              t.current();
            };
          }, []);
        };
      var u = function (e, t) {
        var n,
          o = l(e),
          u =
            null !== (n = null == t ? void 0 : t.wait) && void 0 !== n
              ? n
              : 1e3,
          d = (0, s.useMemo)(function () {
            return a()(
              function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                return o.current.apply(o, i([], r(e), !1));
              },
              u,
              t
            );
          }, []);
        return (
          c(function () {
            d.cancel();
          }),
          { run: d, cancel: d.cancel, flush: d.flush }
        );
      };
    },
    66024: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return Q;
        }
      });
      var r = n(63313),
        i = n(57308),
        o = n(8014),
        a = n(87358),
        s = n(7901),
        l = n(4439),
        c = n(91150),
        u = n.n(c),
        d = n(24663),
        f = n(37986),
        p = ""
          .concat(
            "accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap",
            " "
          )
          .concat(
            "onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError"
          )
          .split(/[\s\n]+/),
        g = "aria-",
        h = "data-";
      function m(e, t) {
        return 0 === e.indexOf(t);
      }
      var v = n(62398),
        b = n(28684),
        y = n(54794),
        A = n(70555),
        x = n(96992);
      const w = (e, t, n, r, i) => ({
          background: e,
          border: `${(0, y.bf)(r.lineWidth)} ${r.lineType} ${t}`,
          [`${i}-icon`]: { color: n }
        }),
        S = (e) => {
          const {
            componentCls: t,
            motionDurationSlow: n,
            marginXS: r,
            marginSM: i,
            fontSize: o,
            fontSizeLG: a,
            lineHeight: s,
            borderRadiusLG: l,
            motionEaseInOutCirc: c,
            withDescriptionIconSize: u,
            colorText: d,
            colorTextHeading: f,
            withDescriptionPadding: p,
            defaultPadding: g
          } = e;
          return {
            [t]: Object.assign(Object.assign({}, (0, A.Wf)(e)), {
              position: "relative",
              display: "flex",
              alignItems: "center",
              padding: g,
              wordWrap: "break-word",
              borderRadius: l,
              [`&${t}-rtl`]: { direction: "rtl" },
              [`${t}-content`]: { flex: 1, minWidth: 0 },
              [`${t}-icon`]: { marginInlineEnd: r, lineHeight: 0 },
              "&-description": { display: "none", fontSize: o, lineHeight: s },
              "&-message": { color: f },
              [`&${t}-motion-leave`]: {
                overflow: "hidden",
                opacity: 1,
                transition: `max-height ${n} ${c}, opacity ${n} ${c},\n        padding-top ${n} ${c}, padding-bottom ${n} ${c},\n        margin-bottom ${n} ${c}`
              },
              [`&${t}-motion-leave-active`]: {
                maxHeight: 0,
                marginBottom: "0 !important",
                paddingTop: 0,
                paddingBottom: 0,
                opacity: 0
              }
            }),
            [`${t}-with-description`]: {
              alignItems: "flex-start",
              padding: p,
              [`${t}-icon`]: { marginInlineEnd: i, fontSize: u, lineHeight: 0 },
              [`${t}-message`]: {
                display: "block",
                marginBottom: r,
                color: f,
                fontSize: a
              },
              [`${t}-description`]: { display: "block", color: d }
            },
            [`${t}-banner`]: {
              marginBottom: 0,
              border: "0 !important",
              borderRadius: 0
            }
          };
        },
        C = (e) => {
          const {
            componentCls: t,
            colorSuccess: n,
            colorSuccessBorder: r,
            colorSuccessBg: i,
            colorWarning: o,
            colorWarningBorder: a,
            colorWarningBg: s,
            colorError: l,
            colorErrorBorder: c,
            colorErrorBg: u,
            colorInfo: d,
            colorInfoBorder: f,
            colorInfoBg: p
          } = e;
          return {
            [t]: {
              "&-success": w(i, r, n, e, t),
              "&-info": w(p, f, d, e, t),
              "&-warning": w(s, a, o, e, t),
              "&-error": Object.assign(Object.assign({}, w(u, c, l, e, t)), {
                [`${t}-description > pre`]: { margin: 0, padding: 0 }
              })
            }
          };
        },
        E = (e) => {
          const {
            componentCls: t,
            iconCls: n,
            motionDurationMid: r,
            marginXS: i,
            fontSizeIcon: o,
            colorIcon: a,
            colorIconHover: s
          } = e;
          return {
            [t]: {
              "&-action": { marginInlineStart: i },
              [`${t}-close-icon`]: {
                marginInlineStart: i,
                padding: 0,
                overflow: "hidden",
                fontSize: o,
                lineHeight: (0, y.bf)(o),
                backgroundColor: "transparent",
                border: "none",
                outline: "none",
                cursor: "pointer",
                [`${n}-close`]: {
                  color: a,
                  transition: `color ${r}`,
                  "&:hover": { color: s }
                }
              },
              "&-close-text": {
                color: a,
                transition: `color ${r}`,
                "&:hover": { color: s }
              }
            }
          };
        };
      var I = (0, x.I$)(
          "Alert",
          (e) => [S(e), C(e), E(e)],
          (e) => ({
            withDescriptionIconSize: e.fontSizeHeading3,
            defaultPadding: `${e.paddingContentVerticalSM}px 12px`,
            withDescriptionPadding: `${e.paddingMD}px ${e.paddingContentHorizontalLG}px`
          })
        ),
        k = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
              t.indexOf(r[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                (n[r[i]] = e[r[i]]);
          }
          return n;
        };
      const Z = { success: i.Z, info: l.Z, error: o.Z, warning: s.Z },
        F = (e) => {
          const { icon: t, prefixCls: n, type: i } = e,
            o = Z[i] || null;
          return t
            ? (0, v.wm)(
                t,
                r.createElement("span", { className: `${n}-icon` }, t),
                () => ({
                  className: u()(`${n}-icon`, {
                    [t.props.className]: t.props.className
                  })
                })
              )
            : r.createElement(o, { className: `${n}-icon` });
        },
        O = (e) => {
          const {
              isClosable: t,
              prefixCls: n,
              closeIcon: i,
              handleClose: o
            } = e,
            s = !0 === i || void 0 === i ? r.createElement(a.Z, null) : i;
          return t
            ? r.createElement(
                "button",
                {
                  type: "button",
                  onClick: o,
                  className: `${n}-close-icon`,
                  tabIndex: 0
                },
                s
              )
            : null;
        };
      var R = (e) => {
          const {
              description: t,
              prefixCls: n,
              message: i,
              banner: o,
              className: a,
              rootClassName: s,
              style: l,
              onMouseEnter: c,
              onMouseLeave: v,
              onClick: y,
              afterClose: A,
              showIcon: x,
              closable: w,
              closeText: S,
              closeIcon: C,
              action: E
            } = e,
            Z = k(e, [
              "description",
              "prefixCls",
              "message",
              "banner",
              "className",
              "rootClassName",
              "style",
              "onMouseEnter",
              "onMouseLeave",
              "onClick",
              "afterClose",
              "showIcon",
              "closable",
              "closeText",
              "closeIcon",
              "action"
            ]),
            [R, M] = r.useState(!1);
          const j = r.useRef(null),
            { getPrefixCls: B, direction: T, alert: P } = r.useContext(b.E_),
            N = B("alert", n),
            [V, Q, W] = I(N),
            L = (t) => {
              var n;
              M(!0), null === (n = e.onClose) || void 0 === n || n.call(e, t);
            },
            D = r.useMemo(
              () => (void 0 !== e.type ? e.type : o ? "warning" : "info"),
              [e.type, o]
            ),
            U = r.useMemo(
              () => !!S || ("boolean" == typeof w ? w : !1 !== C && null != C),
              [S, C, w]
            ),
            z = !(!o || void 0 !== x) || x,
            H = u()(
              N,
              `${N}-${D}`,
              {
                [`${N}-with-description`]: !!t,
                [`${N}-no-icon`]: !z,
                [`${N}-banner`]: !!o,
                [`${N}-rtl`]: "rtl" === T
              },
              null == P ? void 0 : P.className,
              a,
              s,
              W,
              Q
            ),
            K = (function (e) {
              var t,
                n =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
              t =
                !1 === n
                  ? { aria: !0, data: !0, attr: !0 }
                  : !0 === n
                  ? { aria: !0 }
                  : (0, f.Z)({}, n);
              var r = {};
              return (
                Object.keys(e).forEach(function (n) {
                  ((t.aria && ("role" === n || m(n, g))) ||
                    (t.data && m(n, h)) ||
                    (t.attr && p.includes(n))) &&
                    (r[n] = e[n]);
                }),
                r
              );
            })(Z, { aria: !0, data: !0 });
          return V(
            r.createElement(
              d.ZP,
              {
                visible: !R,
                motionName: `${N}-motion`,
                motionAppear: !1,
                motionEnter: !1,
                onLeaveStart: (e) => ({ maxHeight: e.offsetHeight }),
                onLeaveEnd: A
              },
              (n) => {
                let { className: o, style: a } = n;
                return r.createElement(
                  "div",
                  Object.assign(
                    {
                      ref: j,
                      "data-show": !R,
                      className: u()(H, o),
                      style: Object.assign(
                        Object.assign(
                          Object.assign({}, null == P ? void 0 : P.style),
                          l
                        ),
                        a
                      ),
                      onMouseEnter: c,
                      onMouseLeave: v,
                      onClick: y,
                      role: "alert"
                    },
                    K
                  ),
                  z
                    ? r.createElement(F, {
                        description: t,
                        icon: e.icon,
                        prefixCls: N,
                        type: D
                      })
                    : null,
                  r.createElement(
                    "div",
                    { className: `${N}-content` },
                    i
                      ? r.createElement("div", { className: `${N}-message` }, i)
                      : null,
                    t
                      ? r.createElement(
                          "div",
                          { className: `${N}-description` },
                          t
                        )
                      : null
                  ),
                  E
                    ? r.createElement("div", { className: `${N}-action` }, E)
                    : null,
                  r.createElement(O, {
                    isClosable: U,
                    prefixCls: N,
                    closeIcon: S || C,
                    handleClose: L
                  })
                );
              }
            )
          );
        },
        M = n(30289),
        j = n(33015),
        B = n(58686),
        T = n(92925);
      let P = (function (e) {
        (0, B.Z)(n, e);
        var t = (0, T.Z)(n);
        function n() {
          var e;
          return (
            (0, M.Z)(this, n),
            ((e = t.apply(this, arguments)).state = {
              error: void 0,
              info: { componentStack: "" }
            }),
            e
          );
        }
        return (
          (0, j.Z)(n, [
            {
              key: "componentDidCatch",
              value: function (e, t) {
                this.setState({ error: e, info: t });
              }
            },
            {
              key: "render",
              value: function () {
                const { message: e, description: t, children: n } = this.props,
                  { error: i, info: o } = this.state,
                  a = o && o.componentStack ? o.componentStack : null,
                  s = void 0 === e ? (i || "").toString() : e,
                  l = void 0 === t ? a : t;
                return i
                  ? r.createElement(R, {
                      type: "error",
                      message: s,
                      description: r.createElement(
                        "pre",
                        { style: { fontSize: "0.9em", overflowX: "auto" } },
                        l
                      )
                    })
                  : n;
              }
            }
          ]),
          n
        );
      })(r.Component);
      var N = P;
      const V = R;
      V.ErrorBoundary = N;
      var Q = V;
    },
    75297: function (e, t, n) {
      "use strict";
      n.d(t, {
        aM: function () {
          return Qe;
        }
      });
      var r = n(63313),
        i = n(52643),
        o = n(6778),
        a = n(21028),
        s = n(73138),
        l = n(37986),
        c = n(63017),
        u = n(30289),
        d = n(33015),
        f = n(32290),
        p = n(58686),
        g = n(92925),
        h = n(61787),
        m = n(90433),
        v = n(35742),
        b = n(96903),
        y = "RC_FORM_INTERNAL_HOOKS",
        A = function () {
          (0, b.ZP)(
            !1,
            "Can not find FormContext. Please make sure you wrap Field under Form."
          );
        },
        x = r.createContext({
          getFieldValue: A,
          getFieldsValue: A,
          getFieldError: A,
          getFieldWarning: A,
          getFieldsError: A,
          isFieldsTouched: A,
          isFieldTouched: A,
          isFieldValidating: A,
          isFieldsValidating: A,
          resetFields: A,
          setFields: A,
          setFieldValue: A,
          setFieldsValue: A,
          validateFields: A,
          submit: A,
          getInternalHooks: function () {
            return (
              A(),
              {
                dispatch: A,
                initEntityValue: A,
                registerField: A,
                useSubscribe: A,
                setInitialValues: A,
                destroyForm: A,
                setCallbacks: A,
                registerWatch: A,
                getFields: A,
                setValidateMessages: A,
                setPreserve: A,
                getInitialValue: A
              }
            );
          }
        }),
        w = r.createContext(null);
      function S(e) {
        return null == e ? [] : Array.isArray(e) ? e : [e];
      }
      function C(e) {
        return e && !!e._init;
      }
      n(84425);
      function E() {
        return (
          (E = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          E.apply(this, arguments)
        );
      }
      function I(e) {
        return (
          (I = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          I(e)
        );
      }
      function k(e, t) {
        return (
          (k = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          k(e, t)
        );
      }
      function Z() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function F(e, t, n) {
        return (
          (F = Z()
            ? Reflect.construct.bind()
            : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var i = new (Function.bind.apply(e, r))();
                return n && k(i, n.prototype), i;
              }),
          F.apply(null, arguments)
        );
      }
      function O(e) {
        var t = "function" == typeof Map ? new Map() : void 0;
        return (
          (O = function (e) {
            if (
              null === e ||
              ((n = e),
              -1 === Function.toString.call(n).indexOf("[native code]"))
            )
              return e;
            var n;
            if ("function" != typeof e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if (void 0 !== t) {
              if (t.has(e)) return t.get(e);
              t.set(e, r);
            }
            function r() {
              return F(e, arguments, I(this).constructor);
            }
            return (
              (r.prototype = Object.create(e.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              })),
              k(r, e)
            );
          }),
          O(e)
        );
      }
      var R = /%[sdj%]/g;
      function M(e) {
        if (!e || !e.length) return null;
        var t = {};
        return (
          e.forEach(function (e) {
            var n = e.field;
            (t[n] = t[n] || []), t[n].push(e);
          }),
          t
        );
      }
      function j(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        var i = 0,
          o = n.length;
        if ("function" == typeof e) return e.apply(null, n);
        if ("string" == typeof e) {
          var a = e.replace(R, function (e) {
            if ("%%" === e) return "%";
            if (i >= o) return e;
            switch (e) {
              case "%s":
                return String(n[i++]);
              case "%d":
                return Number(n[i++]);
              case "%j":
                try {
                  return JSON.stringify(n[i++]);
                } catch (e) {
                  return "[Circular]";
                }
                break;
              default:
                return e;
            }
          });
          return a;
        }
        return e;
      }
      function B(e, t) {
        return (
          null == e ||
          !("array" !== t || !Array.isArray(e) || e.length) ||
          !(
            !(function (e) {
              return (
                "string" === e ||
                "url" === e ||
                "hex" === e ||
                "email" === e ||
                "date" === e ||
                "pattern" === e
              );
            })(t) ||
            "string" != typeof e ||
            e
          )
        );
      }
      function T(e, t, n) {
        var r = 0,
          i = e.length;
        !(function o(a) {
          if (a && a.length) n(a);
          else {
            var s = r;
            (r += 1), s < i ? t(e[s], o) : n([]);
          }
        })([]);
      }
      var P = (function (e) {
        var t, n;
        function r(t, n) {
          var r;
          return (
            ((r = e.call(this, "Async Validation Error") || this).errors = t),
            (r.fields = n),
            r
          );
        }
        return (
          (n = e),
          ((t = r).prototype = Object.create(n.prototype)),
          (t.prototype.constructor = t),
          k(t, n),
          r
        );
      })(O(Error));
      function N(e, t, n, r, i) {
        if (t.first) {
          var o = new Promise(function (t, o) {
            var a = (function (e) {
              var t = [];
              return (
                Object.keys(e).forEach(function (n) {
                  t.push.apply(t, e[n] || []);
                }),
                t
              );
            })(e);
            T(a, n, function (e) {
              return r(e), e.length ? o(new P(e, M(e))) : t(i);
            });
          });
          return (
            o.catch(function (e) {
              return e;
            }),
            o
          );
        }
        var a = !0 === t.firstFields ? Object.keys(e) : t.firstFields || [],
          s = Object.keys(e),
          l = s.length,
          c = 0,
          u = [],
          d = new Promise(function (t, o) {
            var d = function (e) {
              if ((u.push.apply(u, e), ++c === l))
                return r(u), u.length ? o(new P(u, M(u))) : t(i);
            };
            s.length || (r(u), t(i)),
              s.forEach(function (t) {
                var r = e[t];
                -1 !== a.indexOf(t)
                  ? T(r, n, d)
                  : (function (e, t, n) {
                      var r = [],
                        i = 0,
                        o = e.length;
                      function a(e) {
                        r.push.apply(r, e || []), ++i === o && n(r);
                      }
                      e.forEach(function (e) {
                        t(e, a);
                      });
                    })(r, n, d);
              });
          });
        return (
          d.catch(function (e) {
            return e;
          }),
          d
        );
      }
      function V(e, t) {
        return function (n) {
          var r, i;
          return (
            (r = e.fullFields
              ? (function (e, t) {
                  for (var n = e, r = 0; r < t.length; r++) {
                    if (null == n) return n;
                    n = n[t[r]];
                  }
                  return n;
                })(t, e.fullFields)
              : t[n.field || e.fullField]),
            (i = n) && void 0 !== i.message
              ? ((n.field = n.field || e.fullField), (n.fieldValue = r), n)
              : {
                  message: "function" == typeof n ? n() : n,
                  fieldValue: r,
                  field: n.field || e.fullField
                }
          );
        };
      }
      function Q(e, t) {
        if (t)
          for (var n in t)
            if (t.hasOwnProperty(n)) {
              var r = t[n];
              "object" == typeof r && "object" == typeof e[n]
                ? (e[n] = E({}, e[n], r))
                : (e[n] = r);
            }
        return e;
      }
      var W,
        L = function (e, t, n, r, i, o) {
          !e.required ||
            (n.hasOwnProperty(e.field) && !B(t, o || e.type)) ||
            r.push(j(i.messages.required, e.fullField));
        },
        D =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
        U = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,
        z = {
          integer: function (e) {
            return z.number(e) && parseInt(e, 10) === e;
          },
          float: function (e) {
            return z.number(e) && !z.integer(e);
          },
          array: function (e) {
            return Array.isArray(e);
          },
          regexp: function (e) {
            if (e instanceof RegExp) return !0;
            try {
              return !!new RegExp(e);
            } catch (e) {
              return !1;
            }
          },
          date: function (e) {
            return (
              "function" == typeof e.getTime &&
              "function" == typeof e.getMonth &&
              "function" == typeof e.getYear &&
              !isNaN(e.getTime())
            );
          },
          number: function (e) {
            return !isNaN(e) && "number" == typeof e;
          },
          object: function (e) {
            return "object" == typeof e && !z.array(e);
          },
          method: function (e) {
            return "function" == typeof e;
          },
          email: function (e) {
            return "string" == typeof e && e.length <= 320 && !!e.match(D);
          },
          url: function (e) {
            return (
              "string" == typeof e &&
              e.length <= 2048 &&
              !!e.match(
                (function () {
                  if (W) return W;
                  var e = "[a-fA-F\\d:]",
                    t = function (t) {
                      return t && t.includeBoundaries
                        ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))"
                        : "";
                    },
                    n =
                      "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",
                    r = "[a-fA-F\\d]{1,4}",
                    i = (
                      "\n(?:\n(?:" +
                      r +
                      ":){7}(?:" +
                      r +
                      "|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:" +
                      r +
                      ":){6}(?:" +
                      n +
                      "|:" +
                      r +
                      "|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:" +
                      r +
                      ":){5}(?::" +
                      n +
                      "|(?::" +
                      r +
                      "){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:" +
                      r +
                      ":){4}(?:(?::" +
                      r +
                      "){0,1}:" +
                      n +
                      "|(?::" +
                      r +
                      "){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:" +
                      r +
                      ":){3}(?:(?::" +
                      r +
                      "){0,2}:" +
                      n +
                      "|(?::" +
                      r +
                      "){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:" +
                      r +
                      ":){2}(?:(?::" +
                      r +
                      "){0,3}:" +
                      n +
                      "|(?::" +
                      r +
                      "){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:" +
                      r +
                      ":){1}(?:(?::" +
                      r +
                      "){0,4}:" +
                      n +
                      "|(?::" +
                      r +
                      "){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::" +
                      r +
                      "){0,5}:" +
                      n +
                      "|(?::" +
                      r +
                      "){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n"
                    )
                      .replace(/\s*\/\/.*$/gm, "")
                      .replace(/\n/g, "")
                      .trim(),
                    o = new RegExp("(?:^" + n + "$)|(?:^" + i + "$)"),
                    a = new RegExp("^" + n + "$"),
                    s = new RegExp("^" + i + "$"),
                    l = function (e) {
                      return e && e.exact
                        ? o
                        : new RegExp(
                            "(?:" +
                              t(e) +
                              n +
                              t(e) +
                              ")|(?:" +
                              t(e) +
                              i +
                              t(e) +
                              ")",
                            "g"
                          );
                    };
                  (l.v4 = function (e) {
                    return e && e.exact
                      ? a
                      : new RegExp("" + t(e) + n + t(e), "g");
                  }),
                    (l.v6 = function (e) {
                      return e && e.exact
                        ? s
                        : new RegExp("" + t(e) + i + t(e), "g");
                    });
                  var c = l.v4().source,
                    u = l.v6().source;
                  return (W = new RegExp(
                    "(?:^(?:(?:(?:[a-z]+:)?//)|www\\.)(?:\\S+(?::\\S*)?@)?(?:localhost|" +
                      c +
                      "|" +
                      u +
                      '|(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s"]*)?$)',
                    "i"
                  ));
                })()
              )
            );
          },
          hex: function (e) {
            return "string" == typeof e && !!e.match(U);
          }
        },
        H = "enum",
        K = {
          required: L,
          whitespace: function (e, t, n, r, i) {
            (/^\s+$/.test(t) || "" === t) &&
              r.push(j(i.messages.whitespace, e.fullField));
          },
          type: function (e, t, n, r, i) {
            if (e.required && void 0 === t) L(e, t, n, r, i);
            else {
              var o = e.type;
              [
                "integer",
                "float",
                "array",
                "regexp",
                "object",
                "method",
                "email",
                "number",
                "date",
                "url",
                "hex"
              ].indexOf(o) > -1
                ? z[o](t) || r.push(j(i.messages.types[o], e.fullField, e.type))
                : o &&
                  typeof t !== e.type &&
                  r.push(j(i.messages.types[o], e.fullField, e.type));
            }
          },
          range: function (e, t, n, r, i) {
            var o = "number" == typeof e.len,
              a = "number" == typeof e.min,
              s = "number" == typeof e.max,
              l = t,
              c = null,
              u = "number" == typeof t,
              d = "string" == typeof t,
              f = Array.isArray(t);
            if (
              (u ? (c = "number") : d ? (c = "string") : f && (c = "array"), !c)
            )
              return !1;
            f && (l = t.length),
              d &&
                (l = t.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "_").length),
              o
                ? l !== e.len &&
                  r.push(j(i.messages[c].len, e.fullField, e.len))
                : a && !s && l < e.min
                ? r.push(j(i.messages[c].min, e.fullField, e.min))
                : s && !a && l > e.max
                ? r.push(j(i.messages[c].max, e.fullField, e.max))
                : a &&
                  s &&
                  (l < e.min || l > e.max) &&
                  r.push(j(i.messages[c].range, e.fullField, e.min, e.max));
          },
          enum: function (e, t, n, r, i) {
            (e[H] = Array.isArray(e[H]) ? e[H] : []),
              -1 === e[H].indexOf(t) &&
                r.push(j(i.messages[H], e.fullField, e[H].join(", ")));
          },
          pattern: function (e, t, n, r, i) {
            if (e.pattern)
              if (e.pattern instanceof RegExp)
                (e.pattern.lastIndex = 0),
                  e.pattern.test(t) ||
                    r.push(
                      j(i.messages.pattern.mismatch, e.fullField, t, e.pattern)
                    );
              else if ("string" == typeof e.pattern) {
                new RegExp(e.pattern).test(t) ||
                  r.push(
                    j(i.messages.pattern.mismatch, e.fullField, t, e.pattern)
                  );
              }
          }
        },
        q = function (e, t, n, r, i) {
          var o = e.type,
            a = [];
          if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
            if (B(t, o) && !e.required) return n();
            K.required(e, t, r, a, i, o), B(t, o) || K.type(e, t, r, a, i);
          }
          n(a);
        },
        J = {
          string: function (e, t, n, r, i) {
            var o = [];
            if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
              if (B(t, "string") && !e.required) return n();
              K.required(e, t, r, o, i, "string"),
                B(t, "string") ||
                  (K.type(e, t, r, o, i),
                  K.range(e, t, r, o, i),
                  K.pattern(e, t, r, o, i),
                  !0 === e.whitespace && K.whitespace(e, t, r, o, i));
            }
            n(o);
          },
          method: function (e, t, n, r, i) {
            var o = [];
            if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
              if (B(t) && !e.required) return n();
              K.required(e, t, r, o, i), void 0 !== t && K.type(e, t, r, o, i);
            }
            n(o);
          },
          number: function (e, t, n, r, i) {
            var o = [];
            if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
              if (("" === t && (t = void 0), B(t) && !e.required)) return n();
              K.required(e, t, r, o, i),
                void 0 !== t && (K.type(e, t, r, o, i), K.range(e, t, r, o, i));
            }
            n(o);
          },
          boolean: function (e, t, n, r, i) {
            var o = [];
            if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
              if (B(t) && !e.required) return n();
              K.required(e, t, r, o, i), void 0 !== t && K.type(e, t, r, o, i);
            }
            n(o);
          },
          regexp: function (e, t, n, r, i) {
            var o = [];
            if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
              if (B(t) && !e.required) return n();
              K.required(e, t, r, o, i), B(t) || K.type(e, t, r, o, i);
            }
            n(o);
          },
          integer: function (e, t, n, r, i) {
            var o = [];
            if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
              if (B(t) && !e.required) return n();
              K.required(e, t, r, o, i),
                void 0 !== t && (K.type(e, t, r, o, i), K.range(e, t, r, o, i));
            }
            n(o);
          },
          float: function (e, t, n, r, i) {
            var o = [];
            if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
              if (B(t) && !e.required) return n();
              K.required(e, t, r, o, i),
                void 0 !== t && (K.type(e, t, r, o, i), K.range(e, t, r, o, i));
            }
            n(o);
          },
          array: function (e, t, n, r, i) {
            var o = [];
            if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
              if (null == t && !e.required) return n();
              K.required(e, t, r, o, i, "array"),
                null != t && (K.type(e, t, r, o, i), K.range(e, t, r, o, i));
            }
            n(o);
          },
          object: function (e, t, n, r, i) {
            var o = [];
            if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
              if (B(t) && !e.required) return n();
              K.required(e, t, r, o, i), void 0 !== t && K.type(e, t, r, o, i);
            }
            n(o);
          },
          enum: function (e, t, n, r, i) {
            var o = [];
            if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
              if (B(t) && !e.required) return n();
              K.required(e, t, r, o, i), void 0 !== t && K.enum(e, t, r, o, i);
            }
            n(o);
          },
          pattern: function (e, t, n, r, i) {
            var o = [];
            if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
              if (B(t, "string") && !e.required) return n();
              K.required(e, t, r, o, i),
                B(t, "string") || K.pattern(e, t, r, o, i);
            }
            n(o);
          },
          date: function (e, t, n, r, i) {
            var o = [];
            if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
              if (B(t, "date") && !e.required) return n();
              var a;
              if ((K.required(e, t, r, o, i), !B(t, "date")))
                (a = t instanceof Date ? t : new Date(t)),
                  K.type(e, a, r, o, i),
                  a && K.range(e, a.getTime(), r, o, i);
            }
            n(o);
          },
          url: q,
          hex: q,
          email: q,
          required: function (e, t, n, r, i) {
            var o = [],
              a = Array.isArray(t) ? "array" : typeof t;
            K.required(e, t, r, o, i, a), n(o);
          },
          any: function (e, t, n, r, i) {
            var o = [];
            if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
              if (B(t) && !e.required) return n();
              K.required(e, t, r, o, i);
            }
            n(o);
          }
        };
      function X() {
        return {
          default: "Validation error on field %s",
          required: "%s is required",
          enum: "%s must be one of %s",
          whitespace: "%s cannot be empty",
          date: {
            format: "%s date %s is invalid for format %s",
            parse: "%s date could not be parsed, %s is invalid ",
            invalid: "%s date %s is invalid"
          },
          types: {
            string: "%s is not a %s",
            method: "%s is not a %s (function)",
            array: "%s is not an %s",
            object: "%s is not an %s",
            number: "%s is not a %s",
            date: "%s is not a %s",
            boolean: "%s is not a %s",
            integer: "%s is not an %s",
            float: "%s is not a %s",
            regexp: "%s is not a valid %s",
            email: "%s is not a valid %s",
            url: "%s is not a valid %s",
            hex: "%s is not a valid %s"
          },
          string: {
            len: "%s must be exactly %s characters",
            min: "%s must be at least %s characters",
            max: "%s cannot be longer than %s characters",
            range: "%s must be between %s and %s characters"
          },
          number: {
            len: "%s must equal %s",
            min: "%s cannot be less than %s",
            max: "%s cannot be greater than %s",
            range: "%s must be between %s and %s"
          },
          array: {
            len: "%s must be exactly %s in length",
            min: "%s cannot be less than %s in length",
            max: "%s cannot be greater than %s in length",
            range: "%s must be between %s and %s in length"
          },
          pattern: { mismatch: "%s value %s does not match pattern %s" },
          clone: function () {
            var e = JSON.parse(JSON.stringify(this));
            return (e.clone = this.clone), e;
          }
        };
      }
      var G = X(),
        _ = (function () {
          function e(e) {
            (this.rules = null), (this._messages = G), this.define(e);
          }
          var t = e.prototype;
          return (
            (t.define = function (e) {
              var t = this;
              if (!e)
                throw new Error("Cannot configure a schema with no rules");
              if ("object" != typeof e || Array.isArray(e))
                throw new Error("Rules must be an object");
              (this.rules = {}),
                Object.keys(e).forEach(function (n) {
                  var r = e[n];
                  t.rules[n] = Array.isArray(r) ? r : [r];
                });
            }),
            (t.messages = function (e) {
              return e && (this._messages = Q(X(), e)), this._messages;
            }),
            (t.validate = function (t, n, r) {
              var i = this;
              void 0 === n && (n = {}), void 0 === r && (r = function () {});
              var o = t,
                a = n,
                s = r;
              if (
                ("function" == typeof a && ((s = a), (a = {})),
                !this.rules || 0 === Object.keys(this.rules).length)
              )
                return s && s(null, o), Promise.resolve(o);
              if (a.messages) {
                var l = this.messages();
                l === G && (l = X()), Q(l, a.messages), (a.messages = l);
              } else a.messages = this.messages();
              var c = {};
              (a.keys || Object.keys(this.rules)).forEach(function (e) {
                var n = i.rules[e],
                  r = o[e];
                n.forEach(function (n) {
                  var a = n;
                  "function" == typeof a.transform &&
                    (o === t && (o = E({}, o)), (r = o[e] = a.transform(r))),
                    ((a =
                      "function" == typeof a
                        ? { validator: a }
                        : E({}, a)).validator = i.getValidationMethod(a)),
                    a.validator &&
                      ((a.field = e),
                      (a.fullField = a.fullField || e),
                      (a.type = i.getType(a)),
                      (c[e] = c[e] || []),
                      c[e].push({ rule: a, value: r, source: o, field: e }));
                });
              });
              var u = {};
              return N(
                c,
                a,
                function (t, n) {
                  var r,
                    i = t.rule,
                    s = !(
                      ("object" !== i.type && "array" !== i.type) ||
                      ("object" != typeof i.fields &&
                        "object" != typeof i.defaultField)
                    );
                  function l(e, t) {
                    return E({}, t, {
                      fullField: i.fullField + "." + e,
                      fullFields: i.fullFields
                        ? [].concat(i.fullFields, [e])
                        : [e]
                    });
                  }
                  function c(r) {
                    void 0 === r && (r = []);
                    var c = Array.isArray(r) ? r : [r];
                    !a.suppressWarning &&
                      c.length &&
                      e.warning("async-validator:", c),
                      c.length &&
                        void 0 !== i.message &&
                        (c = [].concat(i.message));
                    var d = c.map(V(i, o));
                    if (a.first && d.length) return (u[i.field] = 1), n(d);
                    if (s) {
                      if (i.required && !t.value)
                        return (
                          void 0 !== i.message
                            ? (d = [].concat(i.message).map(V(i, o)))
                            : a.error &&
                              (d = [
                                a.error(i, j(a.messages.required, i.field))
                              ]),
                          n(d)
                        );
                      var f = {};
                      i.defaultField &&
                        Object.keys(t.value).map(function (e) {
                          f[e] = i.defaultField;
                        }),
                        (f = E({}, f, t.rule.fields));
                      var p = {};
                      Object.keys(f).forEach(function (e) {
                        var t = f[e],
                          n = Array.isArray(t) ? t : [t];
                        p[e] = n.map(l.bind(null, e));
                      });
                      var g = new e(p);
                      g.messages(a.messages),
                        t.rule.options &&
                          ((t.rule.options.messages = a.messages),
                          (t.rule.options.error = a.error)),
                        g.validate(t.value, t.rule.options || a, function (e) {
                          var t = [];
                          d && d.length && t.push.apply(t, d),
                            e && e.length && t.push.apply(t, e),
                            n(t.length ? t : null);
                        });
                    } else n(d);
                  }
                  if (
                    ((s = s && (i.required || (!i.required && t.value))),
                    (i.field = t.field),
                    i.asyncValidator)
                  )
                    r = i.asyncValidator(i, t.value, c, t.source, a);
                  else if (i.validator) {
                    try {
                      r = i.validator(i, t.value, c, t.source, a);
                    } catch (e) {
                      console.error,
                        a.suppressValidatorError ||
                          setTimeout(function () {
                            throw e;
                          }, 0),
                        c(e.message);
                    }
                    !0 === r
                      ? c()
                      : !1 === r
                      ? c(
                          "function" == typeof i.message
                            ? i.message(i.fullField || i.field)
                            : i.message || (i.fullField || i.field) + " fails"
                        )
                      : r instanceof Array
                      ? c(r)
                      : r instanceof Error && c(r.message);
                  }
                  r &&
                    r.then &&
                    r.then(
                      function () {
                        return c();
                      },
                      function (e) {
                        return c(e);
                      }
                    );
                },
                function (e) {
                  !(function (e) {
                    for (var t, n, r = [], i = {}, a = 0; a < e.length; a++)
                      (t = e[a]),
                        (n = void 0),
                        Array.isArray(t)
                          ? (r = (n = r).concat.apply(n, t))
                          : r.push(t);
                    r.length ? ((i = M(r)), s(r, i)) : s(null, o);
                  })(e);
                },
                o
              );
            }),
            (t.getType = function (e) {
              if (
                (void 0 === e.type &&
                  e.pattern instanceof RegExp &&
                  (e.type = "pattern"),
                "function" != typeof e.validator &&
                  e.type &&
                  !J.hasOwnProperty(e.type))
              )
                throw new Error(j("Unknown rule type %s", e.type));
              return e.type || "string";
            }),
            (t.getValidationMethod = function (e) {
              if ("function" == typeof e.validator) return e.validator;
              var t = Object.keys(e),
                n = t.indexOf("message");
              return (
                -1 !== n && t.splice(n, 1),
                1 === t.length && "required" === t[0]
                  ? J.required
                  : J[this.getType(e)] || void 0
              );
            }),
            e
          );
        })();
      (_.register = function (e, t) {
        if ("function" != typeof t)
          throw new Error(
            "Cannot register a validator by type, validator is not a function"
          );
        J[e] = t;
      }),
        (_.warning = function () {}),
        (_.messages = G),
        (_.validators = J);
      var Y = "'${name}' is not a valid ${type}",
        $ = {
          default: "Validation error on field '${name}'",
          required: "'${name}' is required",
          enum: "'${name}' must be one of [${enum}]",
          whitespace: "'${name}' cannot be empty",
          date: {
            format: "'${name}' is invalid for format date",
            parse: "'${name}' could not be parsed as date",
            invalid: "'${name}' is invalid date"
          },
          types: {
            string: Y,
            method: Y,
            array: Y,
            object: Y,
            number: Y,
            date: Y,
            boolean: Y,
            integer: Y,
            float: Y,
            regexp: Y,
            email: Y,
            url: Y,
            hex: Y
          },
          string: {
            len: "'${name}' must be exactly ${len} characters",
            min: "'${name}' must be at least ${min} characters",
            max: "'${name}' cannot be longer than ${max} characters",
            range: "'${name}' must be between ${min} and ${max} characters"
          },
          number: {
            len: "'${name}' must equal ${len}",
            min: "'${name}' cannot be less than ${min}",
            max: "'${name}' cannot be greater than ${max}",
            range: "'${name}' must be between ${min} and ${max}"
          },
          array: {
            len: "'${name}' must be exactly ${len} in length",
            min: "'${name}' cannot be less than ${min} in length",
            max: "'${name}' cannot be greater than ${max} in length",
            range: "'${name}' must be between ${min} and ${max} in length"
          },
          pattern: { mismatch: "'${name}' does not match pattern ${pattern}" }
        },
        ee = n(11480),
        te = _;
      function ne(e, t) {
        return e.replace(/\$\{\w+\}/g, function (e) {
          var n = e.slice(2, -1);
          return t[n];
        });
      }
      var re = "CODE_LOGIC_ERROR";
      function ie(e, t, n, r, i) {
        return oe.apply(this, arguments);
      }
      function oe() {
        return (
          (oe = (0, s.Z)(
            (0, a.Z)().mark(function e(t, n, i, o, s) {
              var u, d, f, p, g, m, v, b, y;
              return (0, a.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          delete (u = (0, l.Z)({}, i)).ruleIndex,
                          (te.warning = function () {}),
                          u.validator &&
                            ((d = u.validator),
                            (u.validator = function () {
                              try {
                                return d.apply(void 0, arguments);
                              } catch (e) {
                                return Promise.reject(re);
                              }
                            })),
                          (f = null),
                          u &&
                            "array" === u.type &&
                            u.defaultField &&
                            ((f = u.defaultField), delete u.defaultField),
                          (p = new te((0, h.Z)({}, t, [u]))),
                          (g = (0, ee.T)($, o.validateMessages)),
                          p.messages(g),
                          (m = []),
                          (e.prev = 10),
                          (e.next = 13),
                          Promise.resolve(
                            p.validate((0, h.Z)({}, t, n), (0, l.Z)({}, o))
                          )
                        );
                      case 13:
                        e.next = 18;
                        break;
                      case 15:
                        (e.prev = 15),
                          (e.t0 = e.catch(10)),
                          e.t0.errors &&
                            (m = e.t0.errors.map(function (e, t) {
                              var n = e.message,
                                i = n === re ? g.default : n;
                              return r.isValidElement(i)
                                ? r.cloneElement(i, { key: "error_".concat(t) })
                                : i;
                            }));
                      case 18:
                        if (m.length || !f) {
                          e.next = 23;
                          break;
                        }
                        return (
                          (e.next = 21),
                          Promise.all(
                            n.map(function (e, n) {
                              return ie(
                                "".concat(t, ".").concat(n),
                                e,
                                f,
                                o,
                                s
                              );
                            })
                          )
                        );
                      case 21:
                        return (
                          (v = e.sent),
                          e.abrupt(
                            "return",
                            v.reduce(function (e, t) {
                              return [].concat((0, c.Z)(e), (0, c.Z)(t));
                            }, [])
                          )
                        );
                      case 23:
                        return (
                          (b = (0, l.Z)(
                            (0, l.Z)({}, i),
                            {},
                            { name: t, enum: (i.enum || []).join(", ") },
                            s
                          )),
                          (y = m.map(function (e) {
                            return "string" == typeof e ? ne(e, b) : e;
                          })),
                          e.abrupt("return", y)
                        );
                      case 26:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[10, 15]]
              );
            })
          )),
          oe.apply(this, arguments)
        );
      }
      function ae(e, t, n, r, i, o) {
        var c,
          u = e.join("."),
          d = n
            .map(function (e, t) {
              var n = e.validator,
                r = (0, l.Z)((0, l.Z)({}, e), {}, { ruleIndex: t });
              return (
                n &&
                  (r.validator = function (e, t, r) {
                    var i = !1,
                      o = n(e, t, function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        Promise.resolve().then(function () {
                          (0, b.ZP)(
                            !i,
                            "Your validator function has already return a promise. `callback` will be ignored."
                          ),
                            i || r.apply(void 0, t);
                        });
                      });
                    (i =
                      o &&
                      "function" == typeof o.then &&
                      "function" == typeof o.catch),
                      (0, b.ZP)(
                        i,
                        "`callback` is deprecated. Please return a promise instead."
                      ),
                      i &&
                        o
                          .then(function () {
                            r();
                          })
                          .catch(function (e) {
                            r(e || " ");
                          });
                  }),
                r
              );
            })
            .sort(function (e, t) {
              var n = e.warningOnly,
                r = e.ruleIndex,
                i = t.warningOnly,
                o = t.ruleIndex;
              return !!n == !!i ? r - o : n ? 1 : -1;
            });
        if (!0 === i)
          c = new Promise(
            (function () {
              var e = (0, s.Z)(
                (0, a.Z)().mark(function e(n, i) {
                  var s, l, c;
                  return (0, a.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          s = 0;
                        case 1:
                          if (!(s < d.length)) {
                            e.next = 12;
                            break;
                          }
                          return (l = d[s]), (e.next = 5), ie(u, t, l, r, o);
                        case 5:
                          if (!(c = e.sent).length) {
                            e.next = 9;
                            break;
                          }
                          return (
                            i([{ errors: c, rule: l }]), e.abrupt("return")
                          );
                        case 9:
                          (s += 1), (e.next = 1);
                          break;
                        case 12:
                          n([]);
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })()
          );
        else {
          var f = d.map(function (e) {
            return ie(u, t, e, r, o).then(function (t) {
              return { errors: t, rule: e };
            });
          });
          c = (
            i
              ? (function (e) {
                  return le.apply(this, arguments);
                })(f)
              : (function (e) {
                  return se.apply(this, arguments);
                })(f)
          ).then(function (e) {
            return Promise.reject(e);
          });
        }
        return (
          c.catch(function (e) {
            return e;
          }),
          c
        );
      }
      function se() {
        return (se = (0, s.Z)(
          (0, a.Z)().mark(function e(t) {
            return (0, a.Z)().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      Promise.all(t).then(function (e) {
                        var t;
                        return (t = []).concat.apply(t, (0, c.Z)(e));
                      })
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function le() {
        return (le = (0, s.Z)(
          (0, a.Z)().mark(function e(t) {
            var n;
            return (0, a.Z)().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = 0),
                      e.abrupt(
                        "return",
                        new Promise(function (e) {
                          t.forEach(function (r) {
                            r.then(function (r) {
                              r.errors.length && e([r]),
                                (n += 1) === t.length && e([]);
                            });
                          });
                        })
                      )
                    );
                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var ce = n(71486),
        ue = n(150);
      function de(e) {
        return S(e);
      }
      function fe(e, t) {
        var n = {};
        return (
          t.forEach(function (t) {
            var r = (0, ue.Z)(e, t);
            n = (0, ee.Z)(n, t, r);
          }),
          n
        );
      }
      function pe(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return (
          e &&
          e.some(function (e) {
            return ge(t, e, n);
          })
        );
      }
      function ge(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return (
          !(!e || !t) &&
          !(!n && e.length !== t.length) &&
          t.every(function (t, n) {
            return e[n] === t;
          })
        );
      }
      function he(e) {
        var t = arguments.length <= 1 ? void 0 : arguments[1];
        return t &&
          t.target &&
          "object" === (0, ce.Z)(t.target) &&
          e in t.target
          ? t.target[e]
          : t;
      }
      function me(e, t, n) {
        var r = e.length;
        if (t < 0 || t >= r || n < 0 || n >= r) return e;
        var i = e[t],
          o = t - n;
        return o > 0
          ? [].concat(
              (0, c.Z)(e.slice(0, n)),
              [i],
              (0, c.Z)(e.slice(n, t)),
              (0, c.Z)(e.slice(t + 1, r))
            )
          : o < 0
          ? [].concat(
              (0, c.Z)(e.slice(0, t)),
              (0, c.Z)(e.slice(t + 1, n + 1)),
              [i],
              (0, c.Z)(e.slice(n + 1, r))
            )
          : e;
      }
      var ve = ["name"],
        be = [];
      function ye(e, t, n, r, i, o) {
        return "function" == typeof e
          ? e(t, n, "source" in o ? { source: o.source } : {})
          : r !== i;
      }
      var Ae = (function (e) {
        (0, p.Z)(n, e);
        var t = (0, g.Z)(n);
        function n(e) {
          var i;
          ((0, u.Z)(this, n),
          (i = t.call(this, e)),
          (0, h.Z)((0, f.Z)(i), "state", { resetCount: 0 }),
          (0, h.Z)((0, f.Z)(i), "cancelRegisterFunc", null),
          (0, h.Z)((0, f.Z)(i), "mounted", !1),
          (0, h.Z)((0, f.Z)(i), "touched", !1),
          (0, h.Z)((0, f.Z)(i), "dirty", !1),
          (0, h.Z)((0, f.Z)(i), "validatePromise", void 0),
          (0, h.Z)((0, f.Z)(i), "prevValidating", void 0),
          (0, h.Z)((0, f.Z)(i), "errors", be),
          (0, h.Z)((0, f.Z)(i), "warnings", be),
          (0, h.Z)((0, f.Z)(i), "cancelRegister", function () {
            var e = i.props,
              t = e.preserve,
              n = e.isListField,
              r = e.name;
            i.cancelRegisterFunc && i.cancelRegisterFunc(n, t, de(r)),
              (i.cancelRegisterFunc = null);
          }),
          (0, h.Z)((0, f.Z)(i), "getNamePath", function () {
            var e = i.props,
              t = e.name,
              n = e.fieldContext.prefixName,
              r = void 0 === n ? [] : n;
            return void 0 !== t ? [].concat((0, c.Z)(r), (0, c.Z)(t)) : [];
          }),
          (0, h.Z)((0, f.Z)(i), "getRules", function () {
            var e = i.props,
              t = e.rules,
              n = void 0 === t ? [] : t,
              r = e.fieldContext;
            return n.map(function (e) {
              return "function" == typeof e ? e(r) : e;
            });
          }),
          (0, h.Z)((0, f.Z)(i), "refresh", function () {
            i.mounted &&
              i.setState(function (e) {
                return { resetCount: e.resetCount + 1 };
              });
          }),
          (0, h.Z)((0, f.Z)(i), "metaCache", null),
          (0, h.Z)((0, f.Z)(i), "triggerMetaEvent", function (e) {
            var t = i.props.onMetaChange;
            if (t) {
              var n = (0, l.Z)((0, l.Z)({}, i.getMeta()), {}, { destroy: e });
              (0, v.Z)(i.metaCache, n) || t(n), (i.metaCache = n);
            } else i.metaCache = null;
          }),
          (0, h.Z)((0, f.Z)(i), "onStoreChange", function (e, t, n) {
            var r = i.props,
              o = r.shouldUpdate,
              a = r.dependencies,
              s = void 0 === a ? [] : a,
              l = r.onReset,
              c = n.store,
              u = i.getNamePath(),
              d = i.getValue(e),
              f = i.getValue(c),
              p = t && pe(t, u);
            switch (
              ("valueUpdate" === n.type &&
                "external" === n.source &&
                d !== f &&
                ((i.touched = !0),
                (i.dirty = !0),
                (i.validatePromise = null),
                (i.errors = be),
                (i.warnings = be),
                i.triggerMetaEvent()),
              n.type)
            ) {
              case "reset":
                if (!t || p)
                  return (
                    (i.touched = !1),
                    (i.dirty = !1),
                    (i.validatePromise = void 0),
                    (i.errors = be),
                    (i.warnings = be),
                    i.triggerMetaEvent(),
                    null == l || l(),
                    void i.refresh()
                  );
                break;
              case "remove":
                if (o) return void i.reRender();
                break;
              case "setField":
                var g = n.data;
                if (p)
                  return (
                    "touched" in g && (i.touched = g.touched),
                    "validating" in g &&
                      !("originRCField" in g) &&
                      (i.validatePromise = g.validating
                        ? Promise.resolve([])
                        : null),
                    "errors" in g && (i.errors = g.errors || be),
                    "warnings" in g && (i.warnings = g.warnings || be),
                    (i.dirty = !0),
                    i.triggerMetaEvent(),
                    void i.reRender()
                  );
                if ("value" in g && pe(t, u, !0)) return void i.reRender();
                if (o && !u.length && ye(o, e, c, d, f, n))
                  return void i.reRender();
                break;
              case "dependenciesUpdate":
                if (
                  s.map(de).some(function (e) {
                    return pe(n.relatedFields, e);
                  })
                )
                  return void i.reRender();
                break;
              default:
                if (p || ((!s.length || u.length || o) && ye(o, e, c, d, f, n)))
                  return void i.reRender();
            }
            !0 === o && i.reRender();
          }),
          (0, h.Z)((0, f.Z)(i), "validateRules", function (e) {
            var t = i.getNamePath(),
              n = i.getValue(),
              r = e || {},
              o = r.triggerName,
              l = r.validateOnly,
              u = void 0 !== l && l,
              d = Promise.resolve().then(
                (0, s.Z)(
                  (0, a.Z)().mark(function r() {
                    var s, l, u, f, p, g, h;
                    return (0, a.Z)().wrap(function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            if (i.mounted) {
                              r.next = 2;
                              break;
                            }
                            return r.abrupt("return", []);
                          case 2:
                            if (
                              ((s = i.props),
                              (l = s.validateFirst),
                              (u = void 0 !== l && l),
                              (f = s.messageVariables),
                              (p = s.validateDebounce),
                              (g = i.getRules()),
                              o &&
                                (g = g
                                  .filter(function (e) {
                                    return e;
                                  })
                                  .filter(function (e) {
                                    var t = e.validateTrigger;
                                    return !t || S(t).includes(o);
                                  })),
                              !p || !o)
                            ) {
                              r.next = 10;
                              break;
                            }
                            return (
                              (r.next = 8),
                              new Promise(function (e) {
                                setTimeout(e, p);
                              })
                            );
                          case 8:
                            if (i.validatePromise === d) {
                              r.next = 10;
                              break;
                            }
                            return r.abrupt("return", []);
                          case 10:
                            return (
                              (h = ae(t, n, g, e, u, f))
                                .catch(function (e) {
                                  return e;
                                })
                                .then(function () {
                                  var e =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                      ? arguments[0]
                                      : be;
                                  if (i.validatePromise === d) {
                                    var t;
                                    i.validatePromise = null;
                                    var n = [],
                                      r = [];
                                    null === (t = e.forEach) ||
                                      void 0 === t ||
                                      t.call(e, function (e) {
                                        var t = e.rule.warningOnly,
                                          i = e.errors,
                                          o = void 0 === i ? be : i;
                                        t
                                          ? r.push.apply(r, (0, c.Z)(o))
                                          : n.push.apply(n, (0, c.Z)(o));
                                      }),
                                      (i.errors = n),
                                      (i.warnings = r),
                                      i.triggerMetaEvent(),
                                      i.reRender();
                                  }
                                }),
                              r.abrupt("return", h)
                            );
                          case 13:
                          case "end":
                            return r.stop();
                        }
                    }, r);
                  })
                )
              );
            return (
              u ||
                ((i.validatePromise = d),
                (i.dirty = !0),
                (i.errors = be),
                (i.warnings = be),
                i.triggerMetaEvent(),
                i.reRender()),
              d
            );
          }),
          (0, h.Z)((0, f.Z)(i), "isFieldValidating", function () {
            return !!i.validatePromise;
          }),
          (0, h.Z)((0, f.Z)(i), "isFieldTouched", function () {
            return i.touched;
          }),
          (0, h.Z)((0, f.Z)(i), "isFieldDirty", function () {
            return (
              !(!i.dirty && void 0 === i.props.initialValue) ||
              void 0 !==
                (0, i.props.fieldContext.getInternalHooks(y).getInitialValue)(
                  i.getNamePath()
                )
            );
          }),
          (0, h.Z)((0, f.Z)(i), "getErrors", function () {
            return i.errors;
          }),
          (0, h.Z)((0, f.Z)(i), "getWarnings", function () {
            return i.warnings;
          }),
          (0, h.Z)((0, f.Z)(i), "isListField", function () {
            return i.props.isListField;
          }),
          (0, h.Z)((0, f.Z)(i), "isList", function () {
            return i.props.isList;
          }),
          (0, h.Z)((0, f.Z)(i), "isPreserve", function () {
            return i.props.preserve;
          }),
          (0, h.Z)((0, f.Z)(i), "getMeta", function () {
            return (
              (i.prevValidating = i.isFieldValidating()),
              {
                touched: i.isFieldTouched(),
                validating: i.prevValidating,
                errors: i.errors,
                warnings: i.warnings,
                name: i.getNamePath(),
                validated: null === i.validatePromise
              }
            );
          }),
          (0, h.Z)((0, f.Z)(i), "getOnlyChild", function (e) {
            if ("function" == typeof e) {
              var t = i.getMeta();
              return (0, l.Z)(
                (0, l.Z)(
                  {},
                  i.getOnlyChild(e(i.getControlled(), t, i.props.fieldContext))
                ),
                {},
                { isFunction: !0 }
              );
            }
            var n = (0, m.Z)(e);
            return 1 === n.length && r.isValidElement(n[0])
              ? { child: n[0], isFunction: !1 }
              : { child: n, isFunction: !1 };
          }),
          (0, h.Z)((0, f.Z)(i), "getValue", function (e) {
            var t = i.props.fieldContext.getFieldsValue,
              n = i.getNamePath();
            return (0, ue.Z)(e || t(!0), n);
          }),
          (0, h.Z)((0, f.Z)(i), "getControlled", function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = i.props,
              n = t.trigger,
              r = t.validateTrigger,
              o = t.getValueFromEvent,
              a = t.normalize,
              s = t.valuePropName,
              c = t.getValueProps,
              u = t.fieldContext,
              d = void 0 !== r ? r : u.validateTrigger,
              f = i.getNamePath(),
              p = u.getInternalHooks,
              g = u.getFieldsValue,
              m = p(y),
              v = m.dispatch,
              b = i.getValue(),
              A =
                c ||
                function (e) {
                  return (0, h.Z)({}, s, e);
                },
              x = e[n],
              w = (0, l.Z)((0, l.Z)({}, e), A(b));
            w[n] = function () {
              var e;
              (i.touched = !0), (i.dirty = !0), i.triggerMetaEvent();
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              (e = o ? o.apply(void 0, n) : he.apply(void 0, [s].concat(n))),
                a && (e = a(e, b, g(!0))),
                v({ type: "updateValue", namePath: f, value: e }),
                x && x.apply(void 0, n);
            };
            var C = S(d || []);
            return (
              C.forEach(function (e) {
                var t = w[e];
                w[e] = function () {
                  t && t.apply(void 0, arguments);
                  var n = i.props.rules;
                  n &&
                    n.length &&
                    v({ type: "validateField", namePath: f, triggerName: e });
                };
              }),
              w
            );
          }),
          e.fieldContext) &&
            (0, (0, e.fieldContext.getInternalHooks)(y).initEntityValue)(
              (0, f.Z)(i)
            );
          return i;
        }
        return (
          (0, d.Z)(n, [
            {
              key: "componentDidMount",
              value: function () {
                var e = this.props,
                  t = e.shouldUpdate,
                  n = e.fieldContext;
                if (((this.mounted = !0), n)) {
                  var r = (0, n.getInternalHooks)(y).registerField;
                  this.cancelRegisterFunc = r(this);
                }
                !0 === t && this.reRender();
              }
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.cancelRegister(),
                  this.triggerMetaEvent(!0),
                  (this.mounted = !1);
              }
            },
            {
              key: "reRender",
              value: function () {
                this.mounted && this.forceUpdate();
              }
            },
            {
              key: "render",
              value: function () {
                var e,
                  t = this.state.resetCount,
                  n = this.props.children,
                  i = this.getOnlyChild(n),
                  o = i.child;
                return (
                  i.isFunction
                    ? (e = o)
                    : r.isValidElement(o)
                    ? (e = r.cloneElement(o, this.getControlled(o.props)))
                    : ((0, b.ZP)(
                        !o,
                        "`children` of Field is not validate ReactElement."
                      ),
                      (e = o)),
                  r.createElement(r.Fragment, { key: t }, e)
                );
              }
            }
          ]),
          n
        );
      })(r.Component);
      (0, h.Z)(Ae, "contextType", x),
        (0, h.Z)(Ae, "defaultProps", {
          trigger: "onChange",
          valuePropName: "value"
        });
      var xe = function (e) {
        var t = e.name,
          n = (0, o.Z)(e, ve),
          a = r.useContext(x),
          s = r.useContext(w),
          l = void 0 !== t ? de(t) : void 0,
          c = "keep";
        return (
          n.isListField || (c = "_".concat((l || []).join("_"))),
          r.createElement(
            Ae,
            (0, i.Z)({ key: c, name: l, isListField: !!s }, n, {
              fieldContext: a
            })
          )
        );
      };
      var we = function (e) {
          var t = e.name,
            n = e.initialValue,
            i = e.children,
            o = e.rules,
            a = e.validateTrigger,
            s = e.isListField,
            u = r.useContext(x),
            d = r.useContext(w),
            f = r.useRef({ keys: [], id: 0 }).current,
            p = r.useMemo(
              function () {
                var e = de(u.prefixName) || [];
                return [].concat((0, c.Z)(e), (0, c.Z)(de(t)));
              },
              [u.prefixName, t]
            ),
            g = r.useMemo(
              function () {
                return (0, l.Z)((0, l.Z)({}, u), {}, { prefixName: p });
              },
              [u, p]
            ),
            h = r.useMemo(
              function () {
                return {
                  getKey: function (e) {
                    var t = p.length,
                      n = e[t];
                    return [f.keys[n], e.slice(t + 1)];
                  }
                };
              },
              [p]
            );
          return "function" != typeof i
            ? ((0, b.ZP)(!1, "Form.List only accepts function as children."),
              null)
            : r.createElement(
                w.Provider,
                { value: h },
                r.createElement(
                  x.Provider,
                  { value: g },
                  r.createElement(
                    xe,
                    {
                      name: [],
                      shouldUpdate: function (e, t, n) {
                        return "internal" !== n.source && e !== t;
                      },
                      rules: o,
                      validateTrigger: a,
                      initialValue: n,
                      isList: !0,
                      isListField: null != s ? s : !!d
                    },
                    function (e, t) {
                      var n = e.value,
                        r = void 0 === n ? [] : n,
                        o = e.onChange,
                        a = u.getFieldValue,
                        s = function () {
                          return a(p || []) || [];
                        },
                        l = {
                          add: function (e, t) {
                            var n = s();
                            t >= 0 && t <= n.length
                              ? ((f.keys = [].concat(
                                  (0, c.Z)(f.keys.slice(0, t)),
                                  [f.id],
                                  (0, c.Z)(f.keys.slice(t))
                                )),
                                o(
                                  [].concat(
                                    (0, c.Z)(n.slice(0, t)),
                                    [e],
                                    (0, c.Z)(n.slice(t))
                                  )
                                ))
                              : ((f.keys = [].concat((0, c.Z)(f.keys), [f.id])),
                                o([].concat((0, c.Z)(n), [e]))),
                              (f.id += 1);
                          },
                          remove: function (e) {
                            var t = s(),
                              n = new Set(Array.isArray(e) ? e : [e]);
                            n.size <= 0 ||
                              ((f.keys = f.keys.filter(function (e, t) {
                                return !n.has(t);
                              })),
                              o(
                                t.filter(function (e, t) {
                                  return !n.has(t);
                                })
                              ));
                          },
                          move: function (e, t) {
                            if (e !== t) {
                              var n = s();
                              e < 0 ||
                                e >= n.length ||
                                t < 0 ||
                                t >= n.length ||
                                ((f.keys = me(f.keys, e, t)), o(me(n, e, t)));
                            }
                          }
                        },
                        d = r || [];
                      return (
                        Array.isArray(d) || (d = []),
                        i(
                          d.map(function (e, t) {
                            var n = f.keys[t];
                            return (
                              void 0 === n &&
                                ((f.keys[t] = f.id),
                                (n = f.keys[t]),
                                (f.id += 1)),
                              { name: t, key: n, isListField: !0 }
                            );
                          }),
                          l,
                          t
                        )
                      );
                    }
                  )
                )
              );
        },
        Se = n(31693);
      var Ce = "__@field_split__";
      function Ee(e) {
        return e
          .map(function (e) {
            return "".concat((0, ce.Z)(e), ":").concat(e);
          })
          .join(Ce);
      }
      var Ie = (function () {
          function e() {
            (0, u.Z)(this, e), (0, h.Z)(this, "kvs", new Map());
          }
          return (
            (0, d.Z)(e, [
              {
                key: "set",
                value: function (e, t) {
                  this.kvs.set(Ee(e), t);
                }
              },
              {
                key: "get",
                value: function (e) {
                  return this.kvs.get(Ee(e));
                }
              },
              {
                key: "update",
                value: function (e, t) {
                  var n = t(this.get(e));
                  n ? this.set(e, n) : this.delete(e);
                }
              },
              {
                key: "delete",
                value: function (e) {
                  this.kvs.delete(Ee(e));
                }
              },
              {
                key: "map",
                value: function (e) {
                  return (0, c.Z)(this.kvs.entries()).map(function (t) {
                    var n = (0, Se.Z)(t, 2),
                      r = n[0],
                      i = n[1],
                      o = r.split(Ce);
                    return e({
                      key: o.map(function (e) {
                        var t = e.match(/^([^:]*):(.*)$/),
                          n = (0, Se.Z)(t, 3),
                          r = n[1],
                          i = n[2];
                        return "number" === r ? Number(i) : i;
                      }),
                      value: i
                    });
                  });
                }
              },
              {
                key: "toJSON",
                value: function () {
                  var e = {};
                  return (
                    this.map(function (t) {
                      var n = t.key,
                        r = t.value;
                      return (e[n.join(".")] = r), null;
                    }),
                    e
                  );
                }
              }
            ]),
            e
          );
        })(),
        ke = Ie,
        Ze = ["name"],
        Fe = (0, d.Z)(function e(t) {
          var n = this;
          (0, u.Z)(this, e),
            (0, h.Z)(this, "formHooked", !1),
            (0, h.Z)(this, "forceRootUpdate", void 0),
            (0, h.Z)(this, "subscribable", !0),
            (0, h.Z)(this, "store", {}),
            (0, h.Z)(this, "fieldEntities", []),
            (0, h.Z)(this, "initialValues", {}),
            (0, h.Z)(this, "callbacks", {}),
            (0, h.Z)(this, "validateMessages", null),
            (0, h.Z)(this, "preserve", null),
            (0, h.Z)(this, "lastValidatePromise", null),
            (0, h.Z)(this, "getForm", function () {
              return {
                getFieldValue: n.getFieldValue,
                getFieldsValue: n.getFieldsValue,
                getFieldError: n.getFieldError,
                getFieldWarning: n.getFieldWarning,
                getFieldsError: n.getFieldsError,
                isFieldsTouched: n.isFieldsTouched,
                isFieldTouched: n.isFieldTouched,
                isFieldValidating: n.isFieldValidating,
                isFieldsValidating: n.isFieldsValidating,
                resetFields: n.resetFields,
                setFields: n.setFields,
                setFieldValue: n.setFieldValue,
                setFieldsValue: n.setFieldsValue,
                validateFields: n.validateFields,
                submit: n.submit,
                _init: !0,
                getInternalHooks: n.getInternalHooks
              };
            }),
            (0, h.Z)(this, "getInternalHooks", function (e) {
              return e === y
                ? ((n.formHooked = !0),
                  {
                    dispatch: n.dispatch,
                    initEntityValue: n.initEntityValue,
                    registerField: n.registerField,
                    useSubscribe: n.useSubscribe,
                    setInitialValues: n.setInitialValues,
                    destroyForm: n.destroyForm,
                    setCallbacks: n.setCallbacks,
                    setValidateMessages: n.setValidateMessages,
                    getFields: n.getFields,
                    setPreserve: n.setPreserve,
                    getInitialValue: n.getInitialValue,
                    registerWatch: n.registerWatch
                  })
                : ((0, b.ZP)(
                    !1,
                    "`getInternalHooks` is internal usage. Should not call directly."
                  ),
                  null);
            }),
            (0, h.Z)(this, "useSubscribe", function (e) {
              n.subscribable = e;
            }),
            (0, h.Z)(this, "prevWithoutPreserves", null),
            (0, h.Z)(this, "setInitialValues", function (e, t) {
              if (((n.initialValues = e || {}), t)) {
                var r,
                  i = (0, ee.T)(e, n.store);
                null === (r = n.prevWithoutPreserves) ||
                  void 0 === r ||
                  r.map(function (t) {
                    var n = t.key;
                    i = (0, ee.Z)(i, n, (0, ue.Z)(e, n));
                  }),
                  (n.prevWithoutPreserves = null),
                  n.updateStore(i);
              }
            }),
            (0, h.Z)(this, "destroyForm", function () {
              var e = new ke();
              n.getFieldEntities(!0).forEach(function (t) {
                n.isMergedPreserve(t.isPreserve()) ||
                  e.set(t.getNamePath(), !0);
              }),
                (n.prevWithoutPreserves = e);
            }),
            (0, h.Z)(this, "getInitialValue", function (e) {
              var t = (0, ue.Z)(n.initialValues, e);
              return e.length ? (0, ee.T)(t) : t;
            }),
            (0, h.Z)(this, "setCallbacks", function (e) {
              n.callbacks = e;
            }),
            (0, h.Z)(this, "setValidateMessages", function (e) {
              n.validateMessages = e;
            }),
            (0, h.Z)(this, "setPreserve", function (e) {
              n.preserve = e;
            }),
            (0, h.Z)(this, "watchList", []),
            (0, h.Z)(this, "registerWatch", function (e) {
              return (
                n.watchList.push(e),
                function () {
                  n.watchList = n.watchList.filter(function (t) {
                    return t !== e;
                  });
                }
              );
            }),
            (0, h.Z)(this, "notifyWatch", function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [];
              if (n.watchList.length) {
                var t = n.getFieldsValue(),
                  r = n.getFieldsValue(!0);
                n.watchList.forEach(function (n) {
                  n(t, r, e);
                });
              }
            }),
            (0, h.Z)(this, "timeoutId", null),
            (0, h.Z)(this, "warningUnhooked", function () {
              0;
            }),
            (0, h.Z)(this, "updateStore", function (e) {
              n.store = e;
            }),
            (0, h.Z)(this, "getFieldEntities", function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              return e
                ? n.fieldEntities.filter(function (e) {
                    return e.getNamePath().length;
                  })
                : n.fieldEntities;
            }),
            (0, h.Z)(this, "getFieldsMap", function () {
              var e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                t = new ke();
              return (
                n.getFieldEntities(e).forEach(function (e) {
                  var n = e.getNamePath();
                  t.set(n, e);
                }),
                t
              );
            }),
            (0, h.Z)(this, "getFieldEntitiesForNamePathList", function (e) {
              if (!e) return n.getFieldEntities(!0);
              var t = n.getFieldsMap(!0);
              return e.map(function (e) {
                var n = de(e);
                return t.get(n) || { INVALIDATE_NAME_PATH: de(e) };
              });
            }),
            (0, h.Z)(this, "getFieldsValue", function (e, t) {
              var r, i, o;
              if (
                (n.warningUnhooked(),
                !0 === e || Array.isArray(e)
                  ? ((r = e), (i = t))
                  : e &&
                    "object" === (0, ce.Z)(e) &&
                    ((o = e.strict), (i = e.filter)),
                !0 === r && !i)
              )
                return n.store;
              var a = n.getFieldEntitiesForNamePathList(
                  Array.isArray(r) ? r : null
                ),
                s = [];
              return (
                a.forEach(function (e) {
                  var t,
                    n,
                    a,
                    l,
                    c =
                      "INVALIDATE_NAME_PATH" in e
                        ? e.INVALIDATE_NAME_PATH
                        : e.getNamePath();
                  if (o) {
                    if (
                      null !== (a = (l = e).isList) &&
                      void 0 !== a &&
                      a.call(l)
                    )
                      return;
                  } else if (!r && null !== (t = (n = e).isListField) && void 0 !== t && t.call(n)) return;
                  if (i) {
                    var u = "getMeta" in e ? e.getMeta() : null;
                    i(u) && s.push(c);
                  } else s.push(c);
                }),
                fe(n.store, s.map(de))
              );
            }),
            (0, h.Z)(this, "getFieldValue", function (e) {
              n.warningUnhooked();
              var t = de(e);
              return (0, ue.Z)(n.store, t);
            }),
            (0, h.Z)(this, "getFieldsError", function (e) {
              return (
                n.warningUnhooked(),
                n.getFieldEntitiesForNamePathList(e).map(function (t, n) {
                  return t && !("INVALIDATE_NAME_PATH" in t)
                    ? {
                        name: t.getNamePath(),
                        errors: t.getErrors(),
                        warnings: t.getWarnings()
                      }
                    : { name: de(e[n]), errors: [], warnings: [] };
                })
              );
            }),
            (0, h.Z)(this, "getFieldError", function (e) {
              n.warningUnhooked();
              var t = de(e);
              return n.getFieldsError([t])[0].errors;
            }),
            (0, h.Z)(this, "getFieldWarning", function (e) {
              n.warningUnhooked();
              var t = de(e);
              return n.getFieldsError([t])[0].warnings;
            }),
            (0, h.Z)(this, "isFieldsTouched", function () {
              n.warningUnhooked();
              for (
                var e = arguments.length, t = new Array(e), r = 0;
                r < e;
                r++
              )
                t[r] = arguments[r];
              var i,
                o = t[0],
                a = t[1],
                s = !1;
              0 === t.length
                ? (i = null)
                : 1 === t.length
                ? Array.isArray(o)
                  ? ((i = o.map(de)), (s = !1))
                  : ((i = null), (s = o))
                : ((i = o.map(de)), (s = a));
              var l = n.getFieldEntities(!0),
                u = function (e) {
                  return e.isFieldTouched();
                };
              if (!i) return s ? l.every(u) : l.some(u);
              var d = new ke();
              i.forEach(function (e) {
                d.set(e, []);
              }),
                l.forEach(function (e) {
                  var t = e.getNamePath();
                  i.forEach(function (n) {
                    n.every(function (e, n) {
                      return t[n] === e;
                    }) &&
                      d.update(n, function (t) {
                        return [].concat((0, c.Z)(t), [e]);
                      });
                  });
                });
              var f = function (e) {
                  return e.some(u);
                },
                p = d.map(function (e) {
                  return e.value;
                });
              return s ? p.every(f) : p.some(f);
            }),
            (0, h.Z)(this, "isFieldTouched", function (e) {
              return n.warningUnhooked(), n.isFieldsTouched([e]);
            }),
            (0, h.Z)(this, "isFieldsValidating", function (e) {
              n.warningUnhooked();
              var t = n.getFieldEntities();
              if (!e)
                return t.some(function (e) {
                  return e.isFieldValidating();
                });
              var r = e.map(de);
              return t.some(function (e) {
                var t = e.getNamePath();
                return pe(r, t) && e.isFieldValidating();
              });
            }),
            (0, h.Z)(this, "isFieldValidating", function (e) {
              return n.warningUnhooked(), n.isFieldsValidating([e]);
            }),
            (0, h.Z)(this, "resetWithFieldInitialValue", function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = new ke(),
                r = n.getFieldEntities(!0);
              r.forEach(function (e) {
                var n = e.props.initialValue,
                  r = e.getNamePath();
                if (void 0 !== n) {
                  var i = t.get(r) || new Set();
                  i.add({ entity: e, value: n }), t.set(r, i);
                }
              });
              var i,
                o = function (r) {
                  r.forEach(function (r) {
                    if (void 0 !== r.props.initialValue) {
                      var i = r.getNamePath();
                      if (void 0 !== n.getInitialValue(i))
                        (0, b.ZP)(
                          !1,
                          "Form already set 'initialValues' with path '".concat(
                            i.join("."),
                            "'. Field can not overwrite it."
                          )
                        );
                      else {
                        var o = t.get(i);
                        if (o && o.size > 1)
                          (0, b.ZP)(
                            !1,
                            "Multiple Field with path '".concat(
                              i.join("."),
                              "' set 'initialValue'. Can not decide which one to pick."
                            )
                          );
                        else if (o) {
                          var a = n.getFieldValue(i);
                          r.isListField() ||
                            (e.skipExist && void 0 !== a) ||
                            n.updateStore(
                              (0, ee.Z)(n.store, i, (0, c.Z)(o)[0].value)
                            );
                        }
                      }
                    }
                  });
                };
              e.entities
                ? (i = e.entities)
                : e.namePathList
                ? ((i = []),
                  e.namePathList.forEach(function (e) {
                    var n,
                      r = t.get(e);
                    r &&
                      (n = i).push.apply(
                        n,
                        (0, c.Z)(
                          (0, c.Z)(r).map(function (e) {
                            return e.entity;
                          })
                        )
                      );
                  }))
                : (i = r),
                o(i);
            }),
            (0, h.Z)(this, "resetFields", function (e) {
              n.warningUnhooked();
              var t = n.store;
              if (!e)
                return (
                  n.updateStore((0, ee.T)(n.initialValues)),
                  n.resetWithFieldInitialValue(),
                  n.notifyObservers(t, null, { type: "reset" }),
                  void n.notifyWatch()
                );
              var r = e.map(de);
              r.forEach(function (e) {
                var t = n.getInitialValue(e);
                n.updateStore((0, ee.Z)(n.store, e, t));
              }),
                n.resetWithFieldInitialValue({ namePathList: r }),
                n.notifyObservers(t, r, { type: "reset" }),
                n.notifyWatch(r);
            }),
            (0, h.Z)(this, "setFields", function (e) {
              n.warningUnhooked();
              var t = n.store,
                r = [];
              e.forEach(function (e) {
                var i = e.name,
                  a = (0, o.Z)(e, Ze),
                  s = de(i);
                r.push(s),
                  "value" in a && n.updateStore((0, ee.Z)(n.store, s, a.value)),
                  n.notifyObservers(t, [s], { type: "setField", data: e });
              }),
                n.notifyWatch(r);
            }),
            (0, h.Z)(this, "getFields", function () {
              return n.getFieldEntities(!0).map(function (e) {
                var t = e.getNamePath(),
                  r = e.getMeta(),
                  i = (0, l.Z)(
                    (0, l.Z)({}, r),
                    {},
                    { name: t, value: n.getFieldValue(t) }
                  );
                return (
                  Object.defineProperty(i, "originRCField", { value: !0 }), i
                );
              });
            }),
            (0, h.Z)(this, "initEntityValue", function (e) {
              var t = e.props.initialValue;
              if (void 0 !== t) {
                var r = e.getNamePath();
                void 0 === (0, ue.Z)(n.store, r) &&
                  n.updateStore((0, ee.Z)(n.store, r, t));
              }
            }),
            (0, h.Z)(this, "isMergedPreserve", function (e) {
              var t = void 0 !== e ? e : n.preserve;
              return null == t || t;
            }),
            (0, h.Z)(this, "registerField", function (e) {
              n.fieldEntities.push(e);
              var t = e.getNamePath();
              if ((n.notifyWatch([t]), void 0 !== e.props.initialValue)) {
                var r = n.store;
                n.resetWithFieldInitialValue({ entities: [e], skipExist: !0 }),
                  n.notifyObservers(r, [e.getNamePath()], {
                    type: "valueUpdate",
                    source: "internal"
                  });
              }
              return function (r, i) {
                var o =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : [];
                if (
                  ((n.fieldEntities = n.fieldEntities.filter(function (t) {
                    return t !== e;
                  })),
                  !n.isMergedPreserve(i) && (!r || o.length > 1))
                ) {
                  var a = r ? void 0 : n.getInitialValue(t);
                  if (
                    t.length &&
                    n.getFieldValue(t) !== a &&
                    n.fieldEntities.every(function (e) {
                      return !ge(e.getNamePath(), t);
                    })
                  ) {
                    var s = n.store;
                    n.updateStore((0, ee.Z)(s, t, a, !0)),
                      n.notifyObservers(s, [t], { type: "remove" }),
                      n.triggerDependenciesUpdate(s, t);
                  }
                }
                n.notifyWatch([t]);
              };
            }),
            (0, h.Z)(this, "dispatch", function (e) {
              switch (e.type) {
                case "updateValue":
                  var t = e.namePath,
                    r = e.value;
                  n.updateValue(t, r);
                  break;
                case "validateField":
                  var i = e.namePath,
                    o = e.triggerName;
                  n.validateFields([i], { triggerName: o });
              }
            }),
            (0, h.Z)(this, "notifyObservers", function (e, t, r) {
              if (n.subscribable) {
                var i = (0, l.Z)(
                  (0, l.Z)({}, r),
                  {},
                  { store: n.getFieldsValue(!0) }
                );
                n.getFieldEntities().forEach(function (n) {
                  (0, n.onStoreChange)(e, t, i);
                });
              } else n.forceRootUpdate();
            }),
            (0, h.Z)(this, "triggerDependenciesUpdate", function (e, t) {
              var r = n.getDependencyChildrenFields(t);
              return (
                r.length && n.validateFields(r),
                n.notifyObservers(e, r, {
                  type: "dependenciesUpdate",
                  relatedFields: [t].concat((0, c.Z)(r))
                }),
                r
              );
            }),
            (0, h.Z)(this, "updateValue", function (e, t) {
              var r = de(e),
                i = n.store;
              n.updateStore((0, ee.Z)(n.store, r, t)),
                n.notifyObservers(i, [r], {
                  type: "valueUpdate",
                  source: "internal"
                }),
                n.notifyWatch([r]);
              var o = n.triggerDependenciesUpdate(i, r),
                a = n.callbacks.onValuesChange;
              a && a(fe(n.store, [r]), n.getFieldsValue());
              n.triggerOnFieldsChange([r].concat((0, c.Z)(o)));
            }),
            (0, h.Z)(this, "setFieldsValue", function (e) {
              n.warningUnhooked();
              var t = n.store;
              if (e) {
                var r = (0, ee.T)(n.store, e);
                n.updateStore(r);
              }
              n.notifyObservers(t, null, {
                type: "valueUpdate",
                source: "external"
              }),
                n.notifyWatch();
            }),
            (0, h.Z)(this, "setFieldValue", function (e, t) {
              n.setFields([{ name: e, value: t }]);
            }),
            (0, h.Z)(this, "getDependencyChildrenFields", function (e) {
              var t = new Set(),
                r = [],
                i = new ke();
              n.getFieldEntities().forEach(function (e) {
                (e.props.dependencies || []).forEach(function (t) {
                  var n = de(t);
                  i.update(n, function () {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : new Set();
                    return t.add(e), t;
                  });
                });
              });
              return (
                (function e(n) {
                  (i.get(n) || new Set()).forEach(function (n) {
                    if (!t.has(n)) {
                      t.add(n);
                      var i = n.getNamePath();
                      n.isFieldDirty() && i.length && (r.push(i), e(i));
                    }
                  });
                })(e),
                r
              );
            }),
            (0, h.Z)(this, "triggerOnFieldsChange", function (e, t) {
              var r = n.callbacks.onFieldsChange;
              if (r) {
                var i = n.getFields();
                if (t) {
                  var o = new ke();
                  t.forEach(function (e) {
                    var t = e.name,
                      n = e.errors;
                    o.set(t, n);
                  }),
                    i.forEach(function (e) {
                      e.errors = o.get(e.name) || e.errors;
                    });
                }
                var a = i.filter(function (t) {
                  var n = t.name;
                  return pe(e, n);
                });
                a.length && r(a, i);
              }
            }),
            (0, h.Z)(this, "validateFields", function (e, t) {
              var r, i;
              n.warningUnhooked(),
                Array.isArray(e) || "string" == typeof e || "string" == typeof t
                  ? ((r = e), (i = t))
                  : (i = e);
              var o = !!r,
                a = o ? r.map(de) : [],
                s = [],
                u = String(Date.now()),
                d = new Set(),
                f = i || {},
                p = f.recursive,
                g = f.dirty;
              n.getFieldEntities(!0).forEach(function (e) {
                if (
                  (o || a.push(e.getNamePath()),
                  e.props.rules &&
                    e.props.rules.length &&
                    (!g || e.isFieldDirty()))
                ) {
                  var t = e.getNamePath();
                  if ((d.add(t.join(u)), !o || pe(a, t, p))) {
                    var r = e.validateRules(
                      (0, l.Z)(
                        {
                          validateMessages: (0, l.Z)(
                            (0, l.Z)({}, $),
                            n.validateMessages
                          )
                        },
                        i
                      )
                    );
                    s.push(
                      r
                        .then(function () {
                          return { name: t, errors: [], warnings: [] };
                        })
                        .catch(function (e) {
                          var n,
                            r = [],
                            i = [];
                          return (
                            null === (n = e.forEach) ||
                              void 0 === n ||
                              n.call(e, function (e) {
                                var t = e.rule.warningOnly,
                                  n = e.errors;
                                t
                                  ? i.push.apply(i, (0, c.Z)(n))
                                  : r.push.apply(r, (0, c.Z)(n));
                              }),
                            r.length
                              ? Promise.reject({
                                  name: t,
                                  errors: r,
                                  warnings: i
                                })
                              : { name: t, errors: r, warnings: i }
                          );
                        })
                    );
                  }
                }
              });
              var h = (function (e) {
                var t = !1,
                  n = e.length,
                  r = [];
                return e.length
                  ? new Promise(function (i, o) {
                      e.forEach(function (e, a) {
                        e.catch(function (e) {
                          return (t = !0), e;
                        }).then(function (e) {
                          (n -= 1), (r[a] = e), n > 0 || (t && o(r), i(r));
                        });
                      });
                    })
                  : Promise.resolve([]);
              })(s);
              (n.lastValidatePromise = h),
                h
                  .catch(function (e) {
                    return e;
                  })
                  .then(function (e) {
                    var t = e.map(function (e) {
                      return e.name;
                    });
                    n.notifyObservers(n.store, t, { type: "validateFinish" }),
                      n.triggerOnFieldsChange(t, e);
                  });
              var m = h
                .then(function () {
                  return n.lastValidatePromise === h
                    ? Promise.resolve(n.getFieldsValue(a))
                    : Promise.reject([]);
                })
                .catch(function (e) {
                  var t = e.filter(function (e) {
                    return e && e.errors.length;
                  });
                  return Promise.reject({
                    values: n.getFieldsValue(a),
                    errorFields: t,
                    outOfDate: n.lastValidatePromise !== h
                  });
                });
              m.catch(function (e) {
                return e;
              });
              var v = a.filter(function (e) {
                return d.has(e.join(u));
              });
              return n.triggerOnFieldsChange(v), m;
            }),
            (0, h.Z)(this, "submit", function () {
              n.warningUnhooked(),
                n
                  .validateFields()
                  .then(function (e) {
                    var t = n.callbacks.onFinish;
                    if (t)
                      try {
                        t(e);
                      } catch (e) {}
                  })
                  .catch(function (e) {
                    var t = n.callbacks.onFinishFailed;
                    t && t(e);
                  });
            }),
            (this.forceRootUpdate = t);
        });
      var Oe = function (e) {
          var t = r.useRef(),
            n = r.useState({}),
            i = (0, Se.Z)(n, 2)[1];
          if (!t.current)
            if (e) t.current = e;
            else {
              var o = new Fe(function () {
                i({});
              });
              t.current = o.getForm();
            }
          return [t.current];
        },
        Re = r.createContext({
          triggerFormChange: function () {},
          triggerFormFinish: function () {},
          registerForm: function () {},
          unregisterForm: function () {}
        }),
        Me = Re,
        je = [
          "name",
          "initialValues",
          "fields",
          "form",
          "preserve",
          "children",
          "component",
          "validateMessages",
          "validateTrigger",
          "onValuesChange",
          "onFieldsChange",
          "onFinish",
          "onFinishFailed"
        ],
        Be = function (e, t) {
          var n = e.name,
            a = e.initialValues,
            s = e.fields,
            u = e.form,
            d = e.preserve,
            f = e.children,
            p = e.component,
            g = void 0 === p ? "form" : p,
            h = e.validateMessages,
            m = e.validateTrigger,
            v = void 0 === m ? "onChange" : m,
            b = e.onValuesChange,
            A = e.onFieldsChange,
            S = e.onFinish,
            C = e.onFinishFailed,
            E = (0, o.Z)(e, je),
            I = r.useContext(Me),
            k = Oe(u),
            Z = (0, Se.Z)(k, 1)[0],
            F = Z.getInternalHooks(y),
            O = F.useSubscribe,
            R = F.setInitialValues,
            M = F.setCallbacks,
            j = F.setValidateMessages,
            B = F.setPreserve,
            T = F.destroyForm;
          r.useImperativeHandle(t, function () {
            return Z;
          }),
            r.useEffect(
              function () {
                return (
                  I.registerForm(n, Z),
                  function () {
                    I.unregisterForm(n);
                  }
                );
              },
              [I, Z, n]
            ),
            j((0, l.Z)((0, l.Z)({}, I.validateMessages), h)),
            M({
              onValuesChange: b,
              onFieldsChange: function (e) {
                if ((I.triggerFormChange(n, e), A)) {
                  for (
                    var t = arguments.length,
                      r = new Array(t > 1 ? t - 1 : 0),
                      i = 1;
                    i < t;
                    i++
                  )
                    r[i - 1] = arguments[i];
                  A.apply(void 0, [e].concat(r));
                }
              },
              onFinish: function (e) {
                I.triggerFormFinish(n, e), S && S(e);
              },
              onFinishFailed: C
            }),
            B(d);
          var P,
            N = r.useRef(null);
          R(a, !N.current),
            N.current || (N.current = !0),
            r.useEffect(function () {
              return T;
            }, []);
          var V = "function" == typeof f;
          V ? (P = f(Z.getFieldsValue(!0), Z)) : (P = f);
          O(!V);
          var Q = r.useRef();
          r.useEffect(
            function () {
              (function (e, t) {
                if (e === t) return !0;
                if ((!e && t) || (e && !t)) return !1;
                if (
                  !e ||
                  !t ||
                  "object" !== (0, ce.Z)(e) ||
                  "object" !== (0, ce.Z)(t)
                )
                  return !1;
                var n = Object.keys(e),
                  r = Object.keys(t),
                  i = new Set([].concat(n, r));
                return (0, c.Z)(i).every(function (n) {
                  var r = e[n],
                    i = t[n];
                  return (
                    ("function" == typeof r && "function" == typeof i) ||
                    r === i
                  );
                });
              })(Q.current || [], s || []) || Z.setFields(s || []),
                (Q.current = s);
            },
            [s, Z]
          );
          var W = r.useMemo(
              function () {
                return (0, l.Z)((0, l.Z)({}, Z), {}, { validateTrigger: v });
              },
              [Z, v]
            ),
            L = r.createElement(
              w.Provider,
              { value: null },
              r.createElement(x.Provider, { value: W }, P)
            );
          return !1 === g
            ? L
            : r.createElement(
                g,
                (0, i.Z)({}, E, {
                  onSubmit: function (e) {
                    e.preventDefault(), e.stopPropagation(), Z.submit();
                  },
                  onReset: function (e) {
                    var t;
                    e.preventDefault(),
                      Z.resetFields(),
                      null === (t = E.onReset) || void 0 === t || t.call(E, e);
                  }
                }),
                L
              );
        };
      function Te(e) {
        try {
          return JSON.stringify(e);
        } catch (e) {
          return Math.random();
        }
      }
      var Pe = function () {};
      var Ne = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var i = t[0],
            o = t[1],
            a = void 0 === o ? {} : o,
            s = C(a) ? { form: a } : a,
            l = s.form,
            c = (0, r.useState)(),
            u = (0, Se.Z)(c, 2),
            d = u[0],
            f = u[1],
            p = (0, r.useMemo)(
              function () {
                return Te(d);
              },
              [d]
            ),
            g = (0, r.useRef)(p);
          g.current = p;
          var h = (0, r.useContext)(x),
            m = l || h,
            v = m && m._init,
            b = de(i),
            A = (0, r.useRef)(b);
          return (
            (A.current = b),
            Pe(b),
            (0, r.useEffect)(
              function () {
                if (v) {
                  var e = m.getFieldsValue,
                    t = (0, m.getInternalHooks)(y).registerWatch,
                    n = function (e, t) {
                      var n = s.preserve ? t : e;
                      return "function" == typeof i
                        ? i(n)
                        : (0, ue.Z)(n, A.current);
                    },
                    r = t(function (e, t) {
                      var r = n(e, t),
                        i = Te(r);
                      g.current !== i && ((g.current = i), f(r));
                    }),
                    o = n(e(), e(!0));
                  return d !== o && f(o), r;
                }
              },
              [v]
            ),
            d
          );
        },
        Ve = r.forwardRef(Be);
      (Ve.FormProvider = function (e) {
        var t = e.validateMessages,
          n = e.onFormChange,
          i = e.onFormFinish,
          o = e.children,
          a = r.useContext(Re),
          s = r.useRef({});
        return r.createElement(
          Re.Provider,
          {
            value: (0, l.Z)(
              (0, l.Z)({}, a),
              {},
              {
                validateMessages: (0, l.Z)((0, l.Z)({}, a.validateMessages), t),
                triggerFormChange: function (e, t) {
                  n && n(e, { changedFields: t, forms: s.current }),
                    a.triggerFormChange(e, t);
                },
                triggerFormFinish: function (e, t) {
                  i && i(e, { values: t, forms: s.current }),
                    a.triggerFormFinish(e, t);
                },
                registerForm: function (e, t) {
                  e &&
                    (s.current = (0, l.Z)(
                      (0, l.Z)({}, s.current),
                      {},
                      (0, h.Z)({}, e, t)
                    )),
                    a.registerForm(e, t);
                },
                unregisterForm: function (e) {
                  var t = (0, l.Z)({}, s.current);
                  delete t[e], (s.current = t), a.unregisterForm(e);
                }
              }
            )
          },
          o
        );
      }),
        (Ve.Field = xe),
        (Ve.List = we),
        (Ve.useForm = Oe),
        (Ve.useWatch = Ne);
      const Qe = r.createContext({});
    },
    77713: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return xt;
        }
      });
      var r = n(63313),
        i = n.n(r),
        o = n(52643),
        a = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"
                }
              }
            ]
          },
          name: "check",
          theme: "outlined"
        },
        s = n(91471),
        l = function (e, t) {
          return r.createElement(s.Z, (0, o.Z)({}, e, { ref: t, icon: a }));
        };
      var c = r.forwardRef(l),
        u = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"
                }
              }
            ]
          },
          name: "copy",
          theme: "outlined"
        },
        d = function (e, t) {
          return r.createElement(s.Z, (0, o.Z)({}, e, { ref: t, icon: u }));
        };
      var f = r.forwardRef(d),
        p = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
                }
              }
            ]
          },
          name: "edit",
          theme: "outlined"
        },
        g = function (e, t) {
          return r.createElement(s.Z, (0, o.Z)({}, e, { ref: t, icon: p }));
        };
      var h = r.forwardRef(g),
        m = n(91150),
        v = n.n(m),
        b = n(90010),
        y = n.n(b),
        A = n(69884),
        x = n(90433),
        w = n(41647),
        S = n(23205),
        C = n(99173),
        E = n(88321),
        I = n(66398),
        k = function (e) {
          if ((0, I.Z)() && window.document.documentElement) {
            var t = Array.isArray(e) ? e : [e],
              n = window.document.documentElement;
            return t.some(function (e) {
              return e in n.style;
            });
          }
          return !1;
        };
      function Z(e, t) {
        return Array.isArray(e) || void 0 === t
          ? k(e)
          : (function (e, t) {
              if (!k(e)) return !1;
              var n = document.createElement("div"),
                r = n.style[e];
              return (n.style[e] = t), n.style[e] !== r;
            })(e, t);
      }
      var F = n(28498),
        O = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
              t.indexOf(r[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                (n[r[i]] = e[r[i]]);
          }
          return n;
        };
      const R = {
          border: 0,
          background: "transparent",
          padding: 0,
          lineHeight: "inherit",
          display: "inline-block"
        },
        M = r.forwardRef((e, t) => {
          const { style: n, noStyle: i, disabled: o } = e,
            a = O(e, ["style", "noStyle", "disabled"]);
          let s = {};
          return (
            i || (s = Object.assign({}, R)),
            o && (s.pointerEvents = "none"),
            (s = Object.assign(Object.assign({}, s), n)),
            r.createElement(
              "div",
              Object.assign({ role: "button", tabIndex: 0, ref: t }, a, {
                onKeyDown: (e) => {
                  const { keyCode: t } = e;
                  t === F.Z.ENTER && e.preventDefault();
                },
                onKeyUp: (t) => {
                  const { keyCode: n } = t,
                    { onClick: r } = e;
                  n === F.Z.ENTER && r && r();
                },
                style: s
              })
            )
          );
        });
      var j = M,
        B = n(28684),
        T = n(21534),
        P = n(33697);
      var N = (e, t) => {
          const n = r.useContext(T.Z);
          return [
            r.useMemo(() => {
              var r;
              const i = t || P.Z[e],
                o =
                  null !== (r = null == n ? void 0 : n[e]) && void 0 !== r
                    ? r
                    : {};
              return Object.assign(
                Object.assign({}, "function" == typeof i ? i() : i),
                o || {}
              );
            }, [e, t, n]),
            r.useMemo(() => {
              const e = null == n ? void 0 : n.locale;
              return (null == n ? void 0 : n.exist) && !e ? P.Z.locale : e;
            }, [n])
          ];
        },
        V = n(63661),
        Q = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"
                }
              }
            ]
          },
          name: "enter",
          theme: "outlined"
        },
        W = function (e, t) {
          return r.createElement(s.Z, (0, o.Z)({}, e, { ref: t, icon: Q }));
        };
      var L = r.forwardRef(W),
        D = n(62398),
        U = n(8014),
        z = n(37986),
        H = n(61787),
        K = n(63017),
        q = n(31693),
        J = n(6778),
        X = n(71486);
      function G(e) {
        return !(!e.addonBefore && !e.addonAfter);
      }
      function _(e) {
        return !!(e.prefix || e.suffix || e.allowClear);
      }
      function Y(e, t, n, r) {
        if (n) {
          var i = t;
          if ("click" === t.type) {
            var o = e.cloneNode(!0);
            return (
              (i = Object.create(t, {
                target: { value: o },
                currentTarget: { value: o }
              })),
              (o.value = ""),
              void n(i)
            );
          }
          if (void 0 !== r) {
            var a = e.cloneNode(!0);
            return (
              (i = Object.create(t, {
                target: { value: a },
                currentTarget: { value: a }
              })),
              "file" !== a.type && (a.value = r),
              void n(i)
            );
          }
          n(i);
        }
      }
      var $ = function (e) {
          var t,
            n,
            a = e.inputElement,
            s = e.prefixCls,
            l = e.prefix,
            c = e.suffix,
            u = e.addonBefore,
            d = e.addonAfter,
            f = e.className,
            p = e.style,
            g = e.disabled,
            h = e.readOnly,
            m = e.focused,
            b = e.triggerFocus,
            y = e.allowClear,
            A = e.value,
            x = e.handleReset,
            w = e.hidden,
            S = e.classes,
            C = e.classNames,
            E = e.dataAttrs,
            I = e.styles,
            k = e.components,
            Z = (null == k ? void 0 : k.affixWrapper) || "span",
            F = (null == k ? void 0 : k.groupWrapper) || "span",
            O = (null == k ? void 0 : k.wrapper) || "span",
            R = (null == k ? void 0 : k.groupAddon) || "span",
            M = (0, r.useRef)(null),
            j = (0, r.cloneElement)(a, {
              value: A,
              hidden: w,
              className:
                v()(
                  null === (t = a.props) || void 0 === t ? void 0 : t.className,
                  !_(e) && !G(e) && f
                ) || null,
              style: (0, z.Z)(
                (0, z.Z)(
                  {},
                  null === (n = a.props) || void 0 === n ? void 0 : n.style
                ),
                _(e) || G(e) ? {} : p
              )
            });
          if (_(e)) {
            var B,
              T = "".concat(s, "-affix-wrapper"),
              P = v()(
                T,
                ((B = {}),
                (0, H.Z)(B, "".concat(T, "-disabled"), g),
                (0, H.Z)(B, "".concat(T, "-focused"), m),
                (0, H.Z)(B, "".concat(T, "-readonly"), h),
                (0, H.Z)(B, "".concat(T, "-input-with-clear-btn"), c && y && A),
                B),
                !G(e) && f,
                null == S ? void 0 : S.affixWrapper,
                null == C ? void 0 : C.affixWrapper
              ),
              N =
                (c || y) &&
                i().createElement(
                  "span",
                  {
                    className: v()(
                      "".concat(s, "-suffix"),
                      null == C ? void 0 : C.suffix
                    ),
                    style: null == I ? void 0 : I.suffix
                  },
                  (function () {
                    var e;
                    if (!y) return null;
                    var t = !g && !h && A,
                      n = "".concat(s, "-clear-icon"),
                      r =
                        "object" === (0, X.Z)(y) && null != y && y.clearIcon
                          ? y.clearIcon
                          : "✖";
                    return i().createElement(
                      "span",
                      {
                        onClick: x,
                        onMouseDown: function (e) {
                          return e.preventDefault();
                        },
                        className: v()(
                          n,
                          ((e = {}),
                          (0, H.Z)(e, "".concat(n, "-hidden"), !t),
                          (0, H.Z)(e, "".concat(n, "-has-suffix"), !!c),
                          e)
                        ),
                        role: "button",
                        tabIndex: -1
                      },
                      r
                    );
                  })(),
                  c
                );
            j = i().createElement(
              Z,
              (0, o.Z)(
                {
                  className: P,
                  style: (0, z.Z)(
                    (0, z.Z)({}, G(e) ? void 0 : p),
                    null == I ? void 0 : I.affixWrapper
                  ),
                  hidden: !G(e) && w,
                  onClick: function (e) {
                    var t;
                    null !== (t = M.current) &&
                      void 0 !== t &&
                      t.contains(e.target) &&
                      (null == b || b());
                  }
                },
                null == E ? void 0 : E.affixWrapper,
                { ref: M }
              ),
              l &&
                i().createElement(
                  "span",
                  {
                    className: v()(
                      "".concat(s, "-prefix"),
                      null == C ? void 0 : C.prefix
                    ),
                    style: null == I ? void 0 : I.prefix
                  },
                  l
                ),
              (0, r.cloneElement)(a, { value: A, hidden: null }),
              N
            );
          }
          if (G(e)) {
            var V = "".concat(s, "-group"),
              Q = "".concat(V, "-addon"),
              W = v()(
                "".concat(s, "-wrapper"),
                V,
                null == S ? void 0 : S.wrapper
              ),
              L = v()(
                "".concat(s, "-group-wrapper"),
                f,
                null == S ? void 0 : S.group
              );
            return i().createElement(
              F,
              { className: L, style: p, hidden: w },
              i().createElement(
                O,
                { className: W },
                u && i().createElement(R, { className: Q }, u),
                (0, r.cloneElement)(j, { hidden: null }),
                d && i().createElement(R, { className: Q }, d)
              )
            );
          }
          return j;
        },
        ee = ["show"];
      var te,
        ne = n(99751),
        re =
          "\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important;\n  pointer-events: none !important;\n",
        ie = [
          "letter-spacing",
          "line-height",
          "padding-top",
          "padding-bottom",
          "font-family",
          "font-weight",
          "font-size",
          "font-variant",
          "text-rendering",
          "text-transform",
          "width",
          "text-indent",
          "padding-left",
          "padding-right",
          "border-width",
          "box-sizing",
          "word-break",
          "white-space"
        ],
        oe = {};
      function ae(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n =
            e.getAttribute("id") ||
            e.getAttribute("data-reactid") ||
            e.getAttribute("name");
        if (t && oe[n]) return oe[n];
        var r = window.getComputedStyle(e),
          i =
            r.getPropertyValue("box-sizing") ||
            r.getPropertyValue("-moz-box-sizing") ||
            r.getPropertyValue("-webkit-box-sizing"),
          o =
            parseFloat(r.getPropertyValue("padding-bottom")) +
            parseFloat(r.getPropertyValue("padding-top")),
          a =
            parseFloat(r.getPropertyValue("border-bottom-width")) +
            parseFloat(r.getPropertyValue("border-top-width")),
          s = ie
            .map(function (e) {
              return "".concat(e, ":").concat(r.getPropertyValue(e));
            })
            .join(";"),
          l = { sizingStyle: s, paddingSize: o, borderSize: a, boxSizing: i };
        return t && n && (oe[n] = l), l;
      }
      var se = [
          "prefixCls",
          "onPressEnter",
          "defaultValue",
          "value",
          "autoSize",
          "onResize",
          "className",
          "style",
          "disabled",
          "onChange",
          "onInternalAutoSize"
        ],
        le = r.forwardRef(function (e, t) {
          var n = e,
            i = n.prefixCls,
            a = (n.onPressEnter, n.defaultValue),
            s = n.value,
            l = n.autoSize,
            c = n.onResize,
            u = n.className,
            d = n.style,
            f = n.disabled,
            p = n.onChange,
            g = (n.onInternalAutoSize, (0, J.Z)(n, se)),
            h = (0, S.Z)(a, {
              value: s,
              postState: function (e) {
                return null != e ? e : "";
              }
            }),
            m = (0, q.Z)(h, 2),
            b = m[0],
            y = m[1],
            x = r.useRef();
          r.useImperativeHandle(t, function () {
            return { textArea: x.current };
          });
          var C = r.useMemo(
              function () {
                return l && "object" === (0, X.Z)(l)
                  ? [l.minRows, l.maxRows]
                  : [];
              },
              [l]
            ),
            E = (0, q.Z)(C, 2),
            I = E[0],
            k = E[1],
            Z = !!l,
            F = r.useState(2),
            O = (0, q.Z)(F, 2),
            R = O[0],
            M = O[1],
            j = r.useState(),
            B = (0, q.Z)(j, 2),
            T = B[0],
            P = B[1],
            N = function () {
              M(0);
            };
          (0, w.Z)(
            function () {
              Z && N();
            },
            [s, I, k, Z]
          ),
            (0, w.Z)(
              function () {
                if (0 === R) M(1);
                else if (1 === R) {
                  var e = (function (e) {
                    var t =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1],
                      n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : null,
                      r =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : null;
                    te ||
                      ((te = document.createElement("textarea")).setAttribute(
                        "tab-index",
                        "-1"
                      ),
                      te.setAttribute("aria-hidden", "true"),
                      document.body.appendChild(te)),
                      e.getAttribute("wrap")
                        ? te.setAttribute("wrap", e.getAttribute("wrap"))
                        : te.removeAttribute("wrap");
                    var i = ae(e, t),
                      o = i.paddingSize,
                      a = i.borderSize,
                      s = i.boxSizing,
                      l = i.sizingStyle;
                    te.setAttribute("style", "".concat(l, ";").concat(re)),
                      (te.value = e.value || e.placeholder || "");
                    var c,
                      u = void 0,
                      d = void 0,
                      f = te.scrollHeight;
                    if (
                      ("border-box" === s
                        ? (f += a)
                        : "content-box" === s && (f -= o),
                      null !== n || null !== r)
                    ) {
                      te.value = " ";
                      var p = te.scrollHeight - o;
                      null !== n &&
                        ((u = p * n),
                        "border-box" === s && (u = u + o + a),
                        (f = Math.max(u, f))),
                        null !== r &&
                          ((d = p * r),
                          "border-box" === s && (d = d + o + a),
                          (c = f > d ? "" : "hidden"),
                          (f = Math.min(d, f)));
                    }
                    var g = { height: f, overflowY: c, resize: "none" };
                    return u && (g.minHeight = u), d && (g.maxHeight = d), g;
                  })(x.current, !1, I, k);
                  M(2), P(e);
                } else
                  !(function () {
                    try {
                      if (document.activeElement === x.current) {
                        var e = x.current,
                          t = e.selectionStart,
                          n = e.selectionEnd,
                          r = e.scrollTop;
                        x.current.setSelectionRange(t, n),
                          (x.current.scrollTop = r);
                      }
                    } catch (e) {}
                  })();
              },
              [R]
            );
          var V = r.useRef(),
            Q = function () {
              ne.Z.cancel(V.current);
            };
          r.useEffect(function () {
            return Q;
          }, []);
          var W = Z ? T : null,
            L = (0, z.Z)((0, z.Z)({}, d), W);
          return (
            (0 !== R && 1 !== R) ||
              ((L.overflowY = "hidden"), (L.overflowX = "hidden")),
            r.createElement(
              A.Z,
              {
                onResize: function (e) {
                  2 === R &&
                    (null == c || c(e),
                    l &&
                      (Q(),
                      (V.current = (0, ne.Z)(function () {
                        N();
                      }))));
                },
                disabled: !(l || c)
              },
              r.createElement(
                "textarea",
                (0, o.Z)({}, g, {
                  ref: x,
                  style: L,
                  className: v()(
                    i,
                    u,
                    (0, H.Z)({}, "".concat(i, "-disabled"), f)
                  ),
                  disabled: f,
                  value: b,
                  onChange: function (e) {
                    y(e.target.value), null == p || p(e);
                  }
                })
              )
            )
          );
        }),
        ce = le,
        ue = [
          "defaultValue",
          "value",
          "onFocus",
          "onBlur",
          "onChange",
          "allowClear",
          "maxLength",
          "onCompositionStart",
          "onCompositionEnd",
          "suffix",
          "prefixCls",
          "classes",
          "showCount",
          "count",
          "className",
          "style",
          "disabled",
          "hidden",
          "classNames",
          "styles",
          "onResize"
        ],
        de = i().forwardRef(function (e, t) {
          var n,
            a,
            s = e.defaultValue,
            l = e.value,
            c = e.onFocus,
            u = e.onBlur,
            d = e.onChange,
            f = e.allowClear,
            p = e.maxLength,
            g = e.onCompositionStart,
            h = e.onCompositionEnd,
            m = e.suffix,
            b = e.prefixCls,
            y = void 0 === b ? "rc-textarea" : b,
            A = e.classes,
            x = e.showCount,
            w = e.count,
            C = e.className,
            E = e.style,
            I = e.disabled,
            k = e.hidden,
            Z = e.classNames,
            F = e.styles,
            O = e.onResize,
            R = (0, J.Z)(e, ue),
            M = (0, S.Z)(s, { value: l, defaultValue: s }),
            j = (0, q.Z)(M, 2),
            B = j[0],
            T = j[1],
            P = null == B ? "" : String(B),
            N = i().useState(!1),
            V = (0, q.Z)(N, 2),
            Q = V[0],
            W = V[1],
            L = i().useRef(!1),
            D = i().useState(null),
            U = (0, q.Z)(D, 2),
            G = U[0],
            _ = U[1],
            te = (0, r.useRef)(null),
            ne = function () {
              var e;
              return null === (e = te.current) || void 0 === e
                ? void 0
                : e.textArea;
            },
            re = function () {
              ne().focus();
            };
          (0, r.useImperativeHandle)(t, function () {
            return {
              resizableTextArea: te.current,
              focus: re,
              blur: function () {
                ne().blur();
              }
            };
          }),
            (0, r.useEffect)(
              function () {
                W(function (e) {
                  return !I && e;
                });
              },
              [I]
            );
          var ie = i().useState(null),
            oe = (0, q.Z)(ie, 2),
            ae = oe[0],
            se = oe[1];
          i().useEffect(
            function () {
              var e;
              ae && (e = ne()).setSelectionRange.apply(e, (0, K.Z)(ae));
            },
            [ae]
          );
          var le,
            de = (function (e, t) {
              return r.useMemo(
                function () {
                  var n = {};
                  t &&
                    (n.show =
                      "object" === (0, X.Z)(t) && t.formatter
                        ? t.formatter
                        : !!t);
                  var r = (n = (0, z.Z)((0, z.Z)({}, n), e)),
                    i = r.show,
                    o = (0, J.Z)(r, ee);
                  return (0, z.Z)(
                    (0, z.Z)({}, o),
                    {},
                    {
                      show: !!i,
                      showFormatter: "function" == typeof i ? i : void 0,
                      strategy:
                        o.strategy ||
                        function (e) {
                          return e.length;
                        }
                    }
                  );
                },
                [e, t]
              );
            })(w, x),
            fe = null !== (n = de.max) && void 0 !== n ? n : p,
            pe = Number(fe) > 0,
            ge = de.strategy(P),
            he = !!fe && ge > fe,
            me = function (e, t) {
              var n = t;
              !L.current &&
                de.exceedFormatter &&
                de.max &&
                de.strategy(t) > de.max &&
                t !== (n = de.exceedFormatter(t, { max: de.max })) &&
                se([ne().selectionStart || 0, ne().selectionEnd || 0]),
                T(n),
                Y(e.currentTarget, e, d, n);
            },
            ve = m;
          de.show &&
            ((le = de.showFormatter
              ? de.showFormatter({ value: P, count: ge, maxLength: fe })
              : "".concat(ge).concat(pe ? " / ".concat(fe) : "")),
            (ve = i().createElement(
              i().Fragment,
              null,
              ve,
              i().createElement(
                "span",
                {
                  className: v()(
                    "".concat(y, "-data-count"),
                    null == Z ? void 0 : Z.count
                  ),
                  style: null == F ? void 0 : F.count
                },
                le
              )
            )));
          var be = !R.autoSize && !x && !f;
          return i().createElement($, {
            value: P,
            allowClear: f,
            handleReset: function (e) {
              T(""), re(), Y(ne(), e, d);
            },
            suffix: ve,
            prefixCls: y,
            classes: {
              affixWrapper: v()(
                null == A ? void 0 : A.affixWrapper,
                ((a = {}),
                (0, H.Z)(a, "".concat(y, "-show-count"), x),
                (0, H.Z)(a, "".concat(y, "-textarea-allow-clear"), f),
                a)
              )
            },
            disabled: I,
            focused: Q,
            className: v()(C, he && "".concat(y, "-out-of-range")),
            style: (0, z.Z)(
              (0, z.Z)({}, E),
              G && !be ? { height: "auto" } : {}
            ),
            dataAttrs: {
              affixWrapper: {
                "data-count": "string" == typeof le ? le : void 0
              }
            },
            hidden: k,
            inputElement: i().createElement(
              ce,
              (0, o.Z)({}, R, {
                maxLength: p,
                onKeyDown: function (e) {
                  var t = R.onPressEnter,
                    n = R.onKeyDown;
                  "Enter" === e.key && t && t(e), null == n || n(e);
                },
                onChange: function (e) {
                  me(e, e.target.value);
                },
                onFocus: function (e) {
                  W(!0), null == c || c(e);
                },
                onBlur: function (e) {
                  W(!1), null == u || u(e);
                },
                onCompositionStart: function (e) {
                  (L.current = !0), null == g || g(e);
                },
                onCompositionEnd: function (e) {
                  (L.current = !1),
                    me(e, e.currentTarget.value),
                    null == h || h(e);
                },
                className: v()(null == Z ? void 0 : Z.textarea),
                style: (0, z.Z)(
                  (0, z.Z)({}, null == F ? void 0 : F.textarea),
                  {},
                  { resize: null == E ? void 0 : E.resize }
                ),
                disabled: I,
                prefixCls: y,
                onResize: function (e) {
                  var t;
                  null == O || O(e),
                    null !== (t = ne()) &&
                      void 0 !== t &&
                      t.style.height &&
                      _(!0);
                },
                ref: te
              })
            )
          });
        }),
        fe = de;
      function pe(e, t, n) {
        return v()({
          [`${e}-status-success`]: "success" === t,
          [`${e}-status-warning`]: "warning" === t,
          [`${e}-status-error`]: "error" === t,
          [`${e}-status-validating`]: "validating" === t,
          [`${e}-has-feedback`]: n
        });
      }
      var ge = n(28027),
        he = n(12899),
        me = n(75297);
      var ve = n(54794),
        be = n(70555),
        ye = n(25214),
        Ae = n(10901),
        xe = n(96992);
      const we = (e) => ({
          borderColor: e.hoverBorderColor,
          backgroundColor: e.hoverBg
        }),
        Se = (e) => ({
          borderColor: e.activeBorderColor,
          boxShadow: e.activeShadow,
          outline: 0,
          backgroundColor: e.activeBg
        }),
        Ce = (e) => ({
          color: e.colorTextDisabled,
          backgroundColor: e.colorBgContainerDisabled,
          borderColor: e.colorBorder,
          boxShadow: "none",
          cursor: "not-allowed",
          opacity: 1,
          "&:hover:not([disabled])": Object.assign(
            {},
            we(
              (0, Ae.TS)(e, {
                hoverBorderColor: e.colorBorder,
                hoverBg: e.colorBgContainerDisabled
              })
            )
          )
        }),
        Ee = (e) => {
          const {
            paddingBlockLG: t,
            fontSizeLG: n,
            lineHeightLG: r,
            borderRadiusLG: i,
            paddingInlineLG: o
          } = e;
          return {
            padding: `${(0, ve.bf)(t)} ${(0, ve.bf)(o)}`,
            fontSize: n,
            lineHeight: r,
            borderRadius: i
          };
        },
        Ie = (e) => ({
          padding: `${(0, ve.bf)(e.paddingBlockSM)} ${(0, ve.bf)(
            e.paddingInlineSM
          )}`,
          borderRadius: e.borderRadiusSM
        }),
        ke = (e, t) => {
          const {
            componentCls: n,
            colorError: r,
            colorWarning: i,
            errorActiveShadow: o,
            warningActiveShadow: a,
            colorErrorBorderHover: s,
            colorWarningBorderHover: l
          } = e;
          return {
            [`&-status-error:not(${t}-disabled):not(${t}-borderless)${t}`]: {
              borderColor: r,
              "&:hover": { borderColor: s },
              "&:focus, &:focus-within": Object.assign(
                {},
                Se((0, Ae.TS)(e, { activeBorderColor: r, activeShadow: o }))
              ),
              [`${n}-prefix, ${n}-suffix`]: { color: r }
            },
            [`&-status-warning:not(${t}-disabled):not(${t}-borderless)${t}`]: {
              borderColor: i,
              "&:hover": { borderColor: l },
              "&:focus, &:focus-within": Object.assign(
                {},
                Se((0, Ae.TS)(e, { activeBorderColor: i, activeShadow: a }))
              ),
              [`${n}-prefix, ${n}-suffix`]: { color: i }
            }
          };
        },
        Ze = (e) =>
          Object.assign(
            Object.assign(
              {
                position: "relative",
                display: "inline-block",
                width: "100%",
                minWidth: 0,
                padding: `${(0, ve.bf)(e.paddingBlock)} ${(0, ve.bf)(
                  e.paddingInline
                )}`,
                color: e.colorText,
                fontSize: e.fontSize,
                lineHeight: e.lineHeight,
                backgroundColor: e.colorBgContainer,
                backgroundImage: "none",
                borderWidth: e.lineWidth,
                borderStyle: e.lineType,
                borderColor: e.colorBorder,
                borderRadius: e.borderRadius,
                transition: `all ${e.motionDurationMid}`
              },
              {
                "&::-moz-placeholder": { opacity: 1 },
                "&::placeholder": {
                  color: e.colorTextPlaceholder,
                  userSelect: "none"
                },
                "&:placeholder-shown": { textOverflow: "ellipsis" }
              }
            ),
            {
              "&:hover": Object.assign({}, we(e)),
              "&:focus, &:focus-within": Object.assign({}, Se(e)),
              "&-disabled, &[disabled]": Object.assign({}, Ce(e)),
              "&-borderless": {
                "&, &:hover, &:focus, &-focused, &-disabled, &[disabled]": {
                  backgroundColor: "transparent",
                  border: "none",
                  boxShadow: "none"
                }
              },
              "textarea&": {
                maxWidth: "100%",
                height: "auto",
                minHeight: e.controlHeight,
                lineHeight: e.lineHeight,
                verticalAlign: "bottom",
                transition: `all ${e.motionDurationSlow}, height 0s`,
                resize: "vertical"
              },
              "&-lg": Object.assign({}, Ee(e)),
              "&-sm": Object.assign({}, Ie(e)),
              "&-rtl": { direction: "rtl" },
              "&-textarea-rtl": { direction: "rtl" }
            }
          ),
        Fe = (e) => {
          const { componentCls: t, antCls: n } = e;
          return {
            position: "relative",
            display: "table",
            width: "100%",
            borderCollapse: "separate",
            borderSpacing: 0,
            "&[class*='col-']": {
              paddingInlineEnd: e.paddingXS,
              "&:last-child": { paddingInlineEnd: 0 }
            },
            [`&-lg ${t}, &-lg > ${t}-group-addon`]: Object.assign({}, Ee(e)),
            [`&-sm ${t}, &-sm > ${t}-group-addon`]: Object.assign({}, Ie(e)),
            [`&-lg ${n}-select-single ${n}-select-selector`]: {
              height: e.controlHeightLG
            },
            [`&-sm ${n}-select-single ${n}-select-selector`]: {
              height: e.controlHeightSM
            },
            [`> ${t}`]: {
              display: "table-cell",
              "&:not(:first-child):not(:last-child)": { borderRadius: 0 }
            },
            [`${t}-group`]: {
              "&-addon, &-wrap": {
                display: "table-cell",
                width: 1,
                whiteSpace: "nowrap",
                verticalAlign: "middle",
                "&:not(:first-child):not(:last-child)": { borderRadius: 0 }
              },
              "&-wrap > *": { display: "block !important" },
              "&-addon": {
                position: "relative",
                padding: `0 ${(0, ve.bf)(e.paddingInline)}`,
                color: e.colorText,
                fontWeight: "normal",
                fontSize: e.fontSize,
                textAlign: "center",
                backgroundColor: e.addonBg,
                border: `${(0, ve.bf)(e.lineWidth)} ${e.lineType} ${
                  e.colorBorder
                }`,
                borderRadius: e.borderRadius,
                transition: `all ${e.motionDurationSlow}`,
                lineHeight: 1,
                [`${n}-select`]: {
                  margin: `${(0, ve.bf)(
                    e.calc(e.paddingBlock).add(1).mul(-1).equal()
                  )} ${(0, ve.bf)(e.calc(e.paddingInline).mul(-1).equal())}`,
                  [`&${n}-select-single:not(${n}-select-customize-input):not(${n}-pagination-size-changer)`]:
                    {
                      [`${n}-select-selector`]: {
                        backgroundColor: "inherit",
                        border: `${(0, ve.bf)(e.lineWidth)} ${
                          e.lineType
                        } transparent`,
                        boxShadow: "none"
                      }
                    },
                  "&-open, &-focused": {
                    [`${n}-select-selector`]: { color: e.colorPrimary }
                  }
                },
                [`${n}-cascader-picker`]: {
                  margin: `-9px ${(0, ve.bf)(
                    e.calc(e.paddingInline).mul(-1).equal()
                  )}`,
                  backgroundColor: "transparent",
                  [`${n}-cascader-input`]: {
                    textAlign: "start",
                    border: 0,
                    boxShadow: "none"
                  }
                }
              },
              "&-addon:first-child": { borderInlineEnd: 0 },
              "&-addon:last-child": { borderInlineStart: 0 }
            },
            [`${t}`]: {
              width: "100%",
              marginBottom: 0,
              textAlign: "inherit",
              "&:focus": { zIndex: 1, borderInlineEndWidth: 1 },
              "&:hover": {
                zIndex: 1,
                borderInlineEndWidth: 1,
                [`${t}-search-with-button &`]: { zIndex: 0 }
              }
            },
            [`> ${t}:first-child, ${t}-group-addon:first-child`]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0,
              [`${n}-select ${n}-select-selector`]: {
                borderStartEndRadius: 0,
                borderEndEndRadius: 0
              }
            },
            [`> ${t}-affix-wrapper`]: {
              [`&:not(:first-child) ${t}`]: {
                borderStartStartRadius: 0,
                borderEndStartRadius: 0
              },
              [`&:not(:last-child) ${t}`]: {
                borderStartEndRadius: 0,
                borderEndEndRadius: 0
              }
            },
            [`> ${t}:last-child, ${t}-group-addon:last-child`]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0,
              [`${n}-select ${n}-select-selector`]: {
                borderStartStartRadius: 0,
                borderEndStartRadius: 0
              }
            },
            [`${t}-affix-wrapper`]: {
              "&:not(:last-child)": {
                borderStartEndRadius: 0,
                borderEndEndRadius: 0,
                [`${t}-search &`]: {
                  borderStartStartRadius: e.borderRadius,
                  borderEndStartRadius: e.borderRadius
                }
              },
              [`&:not(:first-child), ${t}-search &:not(:first-child)`]: {
                borderStartStartRadius: 0,
                borderEndStartRadius: 0
              }
            },
            [`&${t}-group-compact`]: Object.assign(
              Object.assign({ display: "block" }, (0, be.dF)()),
              {
                [`${t}-group-addon, ${t}-group-wrap, > ${t}`]: {
                  "&:not(:first-child):not(:last-child)": {
                    borderInlineEndWidth: e.lineWidth,
                    "&:hover": { zIndex: 1 },
                    "&:focus": { zIndex: 1 }
                  }
                },
                "& > *": {
                  display: "inline-block",
                  float: "none",
                  verticalAlign: "top",
                  borderRadius: 0
                },
                [`\n        & > ${t}-affix-wrapper,\n        & > ${t}-number-affix-wrapper,\n        & > ${n}-picker-range\n      `]:
                  { display: "inline-flex" },
                "& > *:not(:last-child)": {
                  marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
                  borderInlineEndWidth: e.lineWidth
                },
                [`${t}`]: { float: "none" },
                [`& > ${n}-select > ${n}-select-selector,\n      & > ${n}-select-auto-complete ${t},\n      & > ${n}-cascader-picker ${t},\n      & > ${t}-group-wrapper ${t}`]:
                  {
                    borderInlineEndWidth: e.lineWidth,
                    borderRadius: 0,
                    "&:hover": { zIndex: 1 },
                    "&:focus": { zIndex: 1 }
                  },
                [`& > ${n}-select-focused`]: { zIndex: 1 },
                [`& > ${n}-select > ${n}-select-arrow`]: { zIndex: 1 },
                [`& > *:first-child,\n      & > ${n}-select:first-child > ${n}-select-selector,\n      & > ${n}-select-auto-complete:first-child ${t},\n      & > ${n}-cascader-picker:first-child ${t}`]:
                  {
                    borderStartStartRadius: e.borderRadius,
                    borderEndStartRadius: e.borderRadius
                  },
                [`& > *:last-child,\n      & > ${n}-select:last-child > ${n}-select-selector,\n      & > ${n}-cascader-picker:last-child ${t},\n      & > ${n}-cascader-picker-focused:last-child ${t}`]:
                  {
                    borderInlineEndWidth: e.lineWidth,
                    borderStartEndRadius: e.borderRadius,
                    borderEndEndRadius: e.borderRadius
                  },
                [`& > ${n}-select-auto-complete ${t}`]: {
                  verticalAlign: "top"
                },
                [`${t}-group-wrapper + ${t}-group-wrapper`]: {
                  marginInlineStart: e.calc(e.lineWidth).mul(-1).equal(),
                  [`${t}-affix-wrapper`]: { borderRadius: 0 }
                },
                [`${t}-group-wrapper:not(:last-child)`]: {
                  [`&${t}-search > ${t}-group`]: {
                    [`& > ${t}-group-addon > ${t}-search-button`]: {
                      borderRadius: 0
                    },
                    [`& > ${t}`]: {
                      borderStartStartRadius: e.borderRadius,
                      borderStartEndRadius: 0,
                      borderEndEndRadius: 0,
                      borderEndStartRadius: e.borderRadius
                    }
                  }
                }
              }
            )
          };
        },
        Oe = (e) => {
          const {
              componentCls: t,
              controlHeightSM: n,
              lineWidth: r,
              calc: i
            } = e,
            o = i(n).sub(i(r).mul(2)).sub(16).div(2).equal();
          return {
            [t]: Object.assign(
              Object.assign(
                Object.assign(Object.assign({}, (0, be.Wf)(e)), Ze(e)),
                ke(e, t)
              ),
              {
                '&[type="color"]': {
                  height: e.controlHeight,
                  [`&${t}-lg`]: { height: e.controlHeightLG },
                  [`&${t}-sm`]: { height: n, paddingTop: o, paddingBottom: o }
                },
                '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration':
                  { "-webkit-appearance": "none" }
              }
            )
          };
        },
        Re = (e) => {
          const { componentCls: t } = e;
          return {
            [`${t}-clear-icon`]: {
              margin: 0,
              color: e.colorTextQuaternary,
              fontSize: e.fontSizeIcon,
              verticalAlign: -1,
              cursor: "pointer",
              transition: `color ${e.motionDurationSlow}`,
              "&:hover": { color: e.colorTextTertiary },
              "&:active": { color: e.colorText },
              "&-hidden": { visibility: "hidden" },
              "&-has-suffix": { margin: `0 ${(0, ve.bf)(e.inputAffixPadding)}` }
            }
          };
        },
        Me = (e) => {
          const {
            componentCls: t,
            inputAffixPadding: n,
            colorTextDescription: r,
            motionDurationSlow: i,
            colorIcon: o,
            colorIconHover: a,
            iconCls: s
          } = e;
          return {
            [`${t}-affix-wrapper`]: Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(Object.assign({}, Ze(e)), {
                    display: "inline-flex",
                    [`&:not(${t}-affix-wrapper-disabled):hover`]: {
                      zIndex: 1,
                      [`${t}-search-with-button &`]: { zIndex: 0 }
                    },
                    "&-focused, &:focus": { zIndex: 1 },
                    "&-disabled": {
                      [`${t}[disabled]`]: { background: "transparent" }
                    },
                    [`> input${t}`]: {
                      padding: 0,
                      fontSize: "inherit",
                      border: "none",
                      borderRadius: 0,
                      outline: "none",
                      "&::-ms-reveal": { display: "none" },
                      "&:focus": { boxShadow: "none !important" }
                    },
                    "&::before": {
                      display: "inline-block",
                      width: 0,
                      visibility: "hidden",
                      content: '"\\a0"'
                    },
                    [`${t}`]: {
                      "&-prefix, &-suffix": {
                        display: "flex",
                        flex: "none",
                        alignItems: "center",
                        "> *:not(:last-child)": { marginInlineEnd: e.paddingXS }
                      },
                      "&-show-count-suffix": { color: r },
                      "&-show-count-has-suffix": {
                        marginInlineEnd: e.paddingXXS
                      },
                      "&-prefix": { marginInlineEnd: n },
                      "&-suffix": { marginInlineStart: n }
                    }
                  }),
                  Re(e)
                ),
                {
                  [`${s}${t}-password-icon`]: {
                    color: o,
                    cursor: "pointer",
                    transition: `all ${i}`,
                    "&:hover": { color: a }
                  }
                }
              ),
              ke(e, `${t}-affix-wrapper`)
            )
          };
        },
        je = (e) => {
          const {
            componentCls: t,
            colorError: n,
            colorWarning: r,
            borderRadiusLG: i,
            borderRadiusSM: o
          } = e;
          return {
            [`${t}-group`]: Object.assign(
              Object.assign(Object.assign({}, (0, be.Wf)(e)), Fe(e)),
              {
                "&-rtl": { direction: "rtl" },
                "&-wrapper": {
                  display: "inline-block",
                  width: "100%",
                  textAlign: "start",
                  verticalAlign: "top",
                  "&-rtl": { direction: "rtl" },
                  "&-lg": {
                    [`${t}-group-addon`]: {
                      borderRadius: i,
                      fontSize: e.fontSizeLG
                    }
                  },
                  "&-sm": { [`${t}-group-addon`]: { borderRadius: o } },
                  "&-status-error": {
                    [`${t}-group-addon`]: { color: n, borderColor: n }
                  },
                  "&-status-warning": {
                    [`${t}-group-addon`]: { color: r, borderColor: r }
                  },
                  "&-disabled": {
                    [`${t}-group-addon`]: Object.assign({}, Ce(e))
                  },
                  [`&:not(${t}-compact-first-item):not(${t}-compact-last-item)${t}-compact-item`]:
                    { [`${t}, ${t}-group-addon`]: { borderRadius: 0 } },
                  [`&:not(${t}-compact-last-item)${t}-compact-first-item`]: {
                    [`${t}, ${t}-group-addon`]: {
                      borderStartEndRadius: 0,
                      borderEndEndRadius: 0
                    }
                  },
                  [`&:not(${t}-compact-first-item)${t}-compact-last-item`]: {
                    [`${t}, ${t}-group-addon`]: {
                      borderStartStartRadius: 0,
                      borderEndStartRadius: 0
                    }
                  }
                }
              }
            )
          };
        },
        Be = (e) => {
          const { componentCls: t, antCls: n } = e,
            r = `${t}-search`;
          return {
            [r]: {
              [`${t}`]: {
                "&:hover, &:focus": {
                  borderColor: e.colorPrimaryHover,
                  [`+ ${t}-group-addon ${r}-button:not(${n}-btn-primary)`]: {
                    borderInlineStartColor: e.colorPrimaryHover
                  }
                }
              },
              [`${t}-affix-wrapper`]: { borderRadius: 0 },
              [`${t}-lg`]: {
                lineHeight: e.calc(e.lineHeightLG).sub(2e-4).equal({ unit: !1 })
              },
              [`> ${t}-group`]: {
                [`> ${t}-group-addon:last-child`]: {
                  insetInlineStart: -1,
                  padding: 0,
                  border: 0,
                  [`${r}-button`]: {
                    paddingTop: 0,
                    paddingBottom: 0,
                    borderStartStartRadius: 0,
                    borderStartEndRadius: e.borderRadius,
                    borderEndEndRadius: e.borderRadius,
                    borderEndStartRadius: 0,
                    boxShadow: "none"
                  },
                  [`${r}-button:not(${n}-btn-primary)`]: {
                    color: e.colorTextDescription,
                    "&:hover": { color: e.colorPrimaryHover },
                    "&:active": { color: e.colorPrimaryActive },
                    [`&${n}-btn-loading::before`]: {
                      insetInlineStart: 0,
                      insetInlineEnd: 0,
                      insetBlockStart: 0,
                      insetBlockEnd: 0
                    }
                  }
                }
              },
              [`${r}-button`]: {
                height: e.controlHeight,
                "&:hover, &:focus": { zIndex: 1 }
              },
              [`&-large ${r}-button`]: { height: e.controlHeightLG },
              [`&-small ${r}-button`]: { height: e.controlHeightSM },
              "&-rtl": { direction: "rtl" },
              [`&${t}-compact-item`]: {
                [`&:not(${t}-compact-last-item)`]: {
                  [`${t}-group-addon`]: {
                    [`${t}-search-button`]: {
                      marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
                      borderRadius: 0
                    }
                  }
                },
                [`&:not(${t}-compact-first-item)`]: {
                  [`${t},${t}-affix-wrapper`]: { borderRadius: 0 }
                },
                [`> ${t}-group-addon ${t}-search-button,\n        > ${t},\n        ${t}-affix-wrapper`]:
                  { "&:hover,&:focus,&:active": { zIndex: 2 } },
                [`> ${t}-affix-wrapper-focused`]: { zIndex: 2 }
              }
            }
          };
        },
        Te = (e) => {
          const { componentCls: t, paddingLG: n } = e,
            r = `${t}-textarea`;
          return {
            [r]: {
              position: "relative",
              "&-show-count": {
                [`> ${t}`]: { height: "100%" },
                [`${t}-data-count`]: {
                  position: "absolute",
                  bottom: e.calc(e.fontSize).mul(e.lineHeight).mul(-1).equal(),
                  insetInlineEnd: 0,
                  color: e.colorTextDescription,
                  whiteSpace: "nowrap",
                  pointerEvents: "none"
                }
              },
              "&-allow-clear": { [`> ${t}`]: { paddingInlineEnd: n } },
              [`&-affix-wrapper${r}-has-feedback`]: {
                [`${t}`]: { paddingInlineEnd: n }
              },
              [`&-affix-wrapper${t}-affix-wrapper`]: {
                padding: 0,
                [`> textarea${t}`]: {
                  fontSize: "inherit",
                  border: "none",
                  outline: "none",
                  "&:focus": { boxShadow: "none !important" }
                },
                [`${t}-suffix`]: {
                  margin: 0,
                  "> *:not(:last-child)": { marginInline: 0 },
                  [`${t}-clear-icon`]: {
                    position: "absolute",
                    insetInlineEnd: e.paddingXS,
                    insetBlockStart: e.paddingXS
                  },
                  [`${r}-suffix`]: {
                    position: "absolute",
                    top: 0,
                    insetInlineEnd: e.paddingInline,
                    bottom: 0,
                    zIndex: 1,
                    display: "inline-flex",
                    alignItems: "center",
                    margin: "auto",
                    pointerEvents: "none"
                  }
                }
              }
            }
          };
        },
        Pe = (e) => {
          const { componentCls: t } = e;
          return {
            [`${t}-out-of-range`]: {
              [`&, & input, & textarea, ${t}-show-count-suffix, ${t}-data-count`]:
                { color: e.colorError }
            }
          };
        };
      var Ne = (0, xe.I$)(
          "Input",
          (e) => {
            const t = (0, Ae.TS)(
              e,
              (function (e) {
                return (0, Ae.TS)(e, { inputAffixPadding: e.paddingXXS });
              })(e)
            );
            return [Oe(t), Te(t), Me(t), je(t), Be(t), Pe(t), (0, ye.c)(t)];
          },
          (e) => {
            const {
              controlHeight: t,
              fontSize: n,
              lineHeight: r,
              lineWidth: i,
              controlHeightSM: o,
              controlHeightLG: a,
              fontSizeLG: s,
              lineHeightLG: l,
              paddingSM: c,
              controlPaddingHorizontalSM: u,
              controlPaddingHorizontal: d,
              colorFillAlter: f,
              colorPrimaryHover: p,
              colorPrimary: g,
              controlOutlineWidth: h,
              controlOutline: m,
              colorErrorOutline: v,
              colorWarningOutline: b
            } = e;
            return {
              paddingBlock: Math.max(
                Math.round(((t - n * r) / 2) * 10) / 10 - i,
                0
              ),
              paddingBlockSM: Math.max(
                Math.round(((o - n * r) / 2) * 10) / 10 - i,
                0
              ),
              paddingBlockLG: Math.ceil(((a - s * l) / 2) * 10) / 10 - i,
              paddingInline: c - i,
              paddingInlineSM: u - i,
              paddingInlineLG: d - i,
              addonBg: f,
              activeBorderColor: g,
              hoverBorderColor: p,
              activeShadow: `0 0 0 ${h}px ${m}`,
              errorActiveShadow: `0 0 0 ${h}px ${v}`,
              warningActiveShadow: `0 0 0 ${h}px ${b}`,
              hoverBg: "",
              activeBg: ""
            };
          }
        ),
        Ve = n(28545),
        Qe = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
              t.indexOf(r[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                (n[r[i]] = e[r[i]]);
          }
          return n;
        };
      var We = (0, r.forwardRef)((e, t) => {
        var n;
        const {
            prefixCls: i,
            bordered: o = !0,
            size: a,
            disabled: s,
            status: l,
            allowClear: c,
            classNames: u,
            rootClassName: d,
            className: f
          } = e,
          p = Qe(e, [
            "prefixCls",
            "bordered",
            "size",
            "disabled",
            "status",
            "allowClear",
            "classNames",
            "rootClassName",
            "className"
          ]),
          { getPrefixCls: g, direction: h } = r.useContext(B.E_),
          m = (0, he.Z)(a),
          b = r.useContext(ge.Z),
          y = null != s ? s : b,
          { status: A, hasFeedback: x, feedbackIcon: w } = r.useContext(me.aM),
          S = ((e, t) => t || e)(A, l),
          C = r.useRef(null);
        r.useImperativeHandle(t, () => {
          var e;
          return {
            resizableTextArea:
              null === (e = C.current) || void 0 === e
                ? void 0
                : e.resizableTextArea,
            focus: (e) => {
              var t, n;
              !(function (e, t) {
                if (!e) return;
                e.focus(t);
                const { cursor: n } = t || {};
                if (n) {
                  const t = e.value.length;
                  switch (n) {
                    case "start":
                      e.setSelectionRange(0, 0);
                      break;
                    case "end":
                      e.setSelectionRange(t, t);
                      break;
                    default:
                      e.setSelectionRange(0, t);
                  }
                }
              })(
                null ===
                  (n =
                    null === (t = C.current) || void 0 === t
                      ? void 0
                      : t.resizableTextArea) || void 0 === n
                  ? void 0
                  : n.textArea,
                e
              );
            },
            blur: () => {
              var e;
              return null === (e = C.current) || void 0 === e
                ? void 0
                : e.blur();
            }
          };
        });
        const E = g("input", i);
        let I;
        "object" == typeof c && (null == c ? void 0 : c.clearIcon)
          ? (I = c)
          : c && (I = { clearIcon: r.createElement(U.Z, null) });
        const k = (0, Ve.Z)(E),
          [Z, F, O] = Ne(E, k);
        return Z(
          r.createElement(
            fe,
            Object.assign({}, p, {
              disabled: y,
              allowClear: I,
              className: v()(O, k, f, d),
              classes: {
                affixWrapper: v()(
                  `${E}-textarea-affix-wrapper`,
                  {
                    [`${E}-affix-wrapper-rtl`]: "rtl" === h,
                    [`${E}-affix-wrapper-borderless`]: !o,
                    [`${E}-affix-wrapper-sm`]: "small" === m,
                    [`${E}-affix-wrapper-lg`]: "large" === m,
                    [`${E}-textarea-show-count`]:
                      e.showCount ||
                      (null === (n = e.count) || void 0 === n ? void 0 : n.show)
                  },
                  pe(`${E}-affix-wrapper`, S),
                  F
                )
              },
              classNames: Object.assign(Object.assign({}, u), {
                textarea: v()(
                  {
                    [`${E}-borderless`]: !o,
                    [`${E}-sm`]: "small" === m,
                    [`${E}-lg`]: "large" === m
                  },
                  pe(E, S),
                  F,
                  null == u ? void 0 : u.textarea
                )
              }),
              prefixCls: E,
              suffix:
                x &&
                r.createElement(
                  "span",
                  { className: `${E}-textarea-suffix` },
                  w
                ),
              ref: C
            })
          )
        );
      });
      const Le = (e) => ({
        color: e.colorLink,
        textDecoration: "none",
        outline: "none",
        cursor: "pointer",
        transition: `color ${e.motionDurationSlow}`,
        "&:focus, &:hover": { color: e.colorLinkHover },
        "&:active": { color: e.colorLinkActive }
      });
      var De = n(46173);
      const Ue = (e) => {
          const t = {};
          return (
            [1, 2, 3, 4, 5].forEach((n) => {
              t[
                `\n      h${n}&,\n      div&-h${n},\n      div&-h${n} > textarea,\n      h${n}\n    `
              ] = ((e, t, n, r) => {
                const { titleMarginBottom: i, fontWeightStrong: o } = r;
                return {
                  marginBottom: i,
                  color: n,
                  fontWeight: o,
                  fontSize: e,
                  lineHeight: t
                };
              })(
                e[`fontSizeHeading${n}`],
                e[`lineHeightHeading${n}`],
                e.colorTextHeading,
                e
              );
            }),
            t
          );
        },
        ze = (e) => {
          const { componentCls: t } = e;
          return {
            "a&, a": Object.assign(Object.assign({}, Le(e)), {
              textDecoration: e.linkDecoration,
              "&:active, &:hover": { textDecoration: e.linkHoverDecoration },
              [`&[disabled], &${t}-disabled`]: {
                color: e.colorTextDisabled,
                cursor: "not-allowed",
                "&:active, &:hover": { color: e.colorTextDisabled },
                "&:active": { pointerEvents: "none" }
              }
            })
          };
        },
        He = (e) => ({
          code: {
            margin: "0 0.2em",
            paddingInline: "0.4em",
            paddingBlock: "0.2em 0.1em",
            fontSize: "85%",
            fontFamily: e.fontFamilyCode,
            background: "rgba(150, 150, 150, 0.1)",
            border: "1px solid rgba(100, 100, 100, 0.2)",
            borderRadius: 3
          },
          kbd: {
            margin: "0 0.2em",
            paddingInline: "0.4em",
            paddingBlock: "0.15em 0.1em",
            fontSize: "90%",
            fontFamily: e.fontFamilyCode,
            background: "rgba(150, 150, 150, 0.06)",
            border: "1px solid rgba(100, 100, 100, 0.2)",
            borderBottomWidth: 2,
            borderRadius: 3
          },
          mark: { padding: 0, backgroundColor: De.EV[2] },
          "u, ins": {
            textDecoration: "underline",
            textDecorationSkipInk: "auto"
          },
          "s, del": { textDecoration: "line-through" },
          strong: { fontWeight: 600 },
          "ul, ol": {
            marginInline: 0,
            marginBlock: "0 1em",
            padding: 0,
            li: {
              marginInline: "20px 0",
              marginBlock: 0,
              paddingInline: "4px 0",
              paddingBlock: 0
            }
          },
          ul: { listStyleType: "circle", ul: { listStyleType: "disc" } },
          ol: { listStyleType: "decimal" },
          "pre, blockquote": { margin: "1em 0" },
          pre: {
            padding: "0.4em 0.6em",
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
            background: "rgba(150, 150, 150, 0.1)",
            border: "1px solid rgba(100, 100, 100, 0.2)",
            borderRadius: 3,
            fontFamily: e.fontFamilyCode,
            code: {
              display: "inline",
              margin: 0,
              padding: 0,
              fontSize: "inherit",
              fontFamily: "inherit",
              background: "transparent",
              border: 0
            }
          },
          blockquote: {
            paddingInline: "0.6em 0",
            paddingBlock: 0,
            borderInlineStart: "4px solid rgba(100, 100, 100, 0.2)",
            opacity: 0.85
          }
        }),
        Ke = (e) => {
          const { componentCls: t, paddingSM: n } = e,
            r = n;
          return {
            "&-edit-content": {
              position: "relative",
              "div&": {
                insetInlineStart: e.calc(e.paddingSM).mul(-1).equal(),
                marginTop: e.calc(r).mul(-1).equal(),
                marginBottom: `calc(1em - ${(0, ve.bf)(r)})`
              },
              [`${t}-edit-content-confirm`]: {
                position: "absolute",
                insetInlineEnd: e.calc(e.marginXS).add(2).equal(),
                insetBlockEnd: e.marginXS,
                color: e.colorTextDescription,
                fontWeight: "normal",
                fontSize: e.fontSize,
                fontStyle: "normal",
                pointerEvents: "none"
              },
              textarea: {
                margin: "0!important",
                MozTransition: "none",
                height: "1em"
              }
            }
          };
        },
        qe = (e) => ({
          [`${e.componentCls}-copy-success`]: {
            "\n    &,\n    &:hover,\n    &:focus": { color: e.colorSuccess }
          },
          [`${e.componentCls}-copy-icon-only`]: { marginInlineStart: 0 }
        }),
        Je = (e) => {
          const { componentCls: t, titleMarginTop: n } = e;
          return {
            [t]: Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        Object.assign(
                          Object.assign(
                            Object.assign(
                              {
                                color: e.colorText,
                                wordBreak: "break-word",
                                lineHeight: e.lineHeight,
                                [`&${t}-secondary`]: {
                                  color: e.colorTextDescription
                                },
                                [`&${t}-success`]: { color: e.colorSuccess },
                                [`&${t}-warning`]: { color: e.colorWarning },
                                [`&${t}-danger`]: {
                                  color: e.colorError,
                                  "a&:active, a&:focus": {
                                    color: e.colorErrorActive
                                  },
                                  "a&:hover": { color: e.colorErrorHover }
                                },
                                [`&${t}-disabled`]: {
                                  color: e.colorTextDisabled,
                                  cursor: "not-allowed",
                                  userSelect: "none"
                                },
                                "\n        div&,\n        p\n      ": {
                                  marginBottom: "1em"
                                }
                              },
                              Ue(e)
                            ),
                            {
                              [`\n      & + h1${t},\n      & + h2${t},\n      & + h3${t},\n      & + h4${t},\n      & + h5${t}\n      `]:
                                { marginTop: n },
                              "\n      div,\n      ul,\n      li,\n      p,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5":
                                {
                                  "\n        + h1,\n        + h2,\n        + h3,\n        + h4,\n        + h5\n        ":
                                    { marginTop: n }
                                }
                            }
                          ),
                          He(e)
                        ),
                        ze(e)
                      ),
                      {
                        [`\n        ${t}-expand,\n        ${t}-edit,\n        ${t}-copy\n      `]:
                          Object.assign(Object.assign({}, Le(e)), {
                            marginInlineStart: e.marginXXS
                          })
                      }
                    ),
                    Ke(e)
                  ),
                  qe(e)
                ),
                {
                  "\n  a&-ellipsis,\n  span&-ellipsis\n  ": {
                    display: "inline-block",
                    maxWidth: "100%"
                  },
                  "&-single-line": { whiteSpace: "nowrap" },
                  "&-ellipsis-single-line": {
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    "a&, span&": { verticalAlign: "bottom" },
                    "> code": {
                      paddingBlock: 0,
                      maxWidth: "calc(100% - 1.2em)",
                      display: "inline-block",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      verticalAlign: "bottom",
                      boxSizing: "content-box"
                    }
                  },
                  "&-ellipsis-multiple-line": {
                    display: "-webkit-box",
                    overflow: "hidden",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical"
                  }
                }
              ),
              { "&-rtl": { direction: "rtl" } }
            )
          };
        };
      var Xe = (0, xe.I$)(
        "Typography",
        (e) => [Je(e)],
        () => ({ titleMarginTop: "1.2em", titleMarginBottom: "0.5em" })
      );
      var Ge = (e) => {
        const {
            prefixCls: t,
            "aria-label": n,
            className: i,
            style: o,
            direction: a,
            maxLength: s,
            autoSize: l = !0,
            value: c,
            onSave: u,
            onCancel: d,
            onEnd: f,
            component: p,
            enterIcon: g = r.createElement(L, null)
          } = e,
          h = r.useRef(null),
          m = r.useRef(!1),
          b = r.useRef(),
          [y, A] = r.useState(c);
        r.useEffect(() => {
          A(c);
        }, [c]),
          r.useEffect(() => {
            if (h.current && h.current.resizableTextArea) {
              const { textArea: e } = h.current.resizableTextArea;
              e.focus();
              const { length: t } = e.value;
              e.setSelectionRange(t, t);
            }
          }, []);
        const x = () => {
            u(y.trim());
          },
          w = p ? `${t}-${p}` : "",
          [S, C, E] = Xe(t),
          I = v()(
            t,
            `${t}-edit-content`,
            { [`${t}-rtl`]: "rtl" === a },
            i,
            w,
            C,
            E
          );
        return S(
          r.createElement(
            "div",
            { className: I, style: o },
            r.createElement(We, {
              ref: h,
              maxLength: s,
              value: y,
              onChange: (e) => {
                let { target: t } = e;
                A(t.value.replace(/[\n\r]/g, ""));
              },
              onKeyDown: (e) => {
                let { keyCode: t } = e;
                m.current || (b.current = t);
              },
              onKeyUp: (e) => {
                let {
                  keyCode: t,
                  ctrlKey: n,
                  altKey: r,
                  metaKey: i,
                  shiftKey: o
                } = e;
                b.current !== t ||
                  m.current ||
                  n ||
                  r ||
                  i ||
                  o ||
                  (t === F.Z.ENTER
                    ? (x(), null == f || f())
                    : t === F.Z.ESC && d());
              },
              onCompositionStart: () => {
                m.current = !0;
              },
              onCompositionEnd: () => {
                m.current = !1;
              },
              onBlur: () => {
                x();
              },
              "aria-label": n,
              rows: 1,
              autoSize: l
            }),
            null !== g
              ? (0, D.Tm)(g, { className: `${t}-edit-content-confirm` })
              : null
          )
        );
      };
      function _e(e, t) {
        return r.useMemo(() => {
          const n = !!e;
          return [
            n,
            Object.assign(
              Object.assign({}, t),
              n && "object" == typeof e ? e : null
            )
          ];
        }, [e]);
      }
      var Ye = (e, t) => {
          const n = r.useRef(!1);
          r.useEffect(() => {
            n.current ? e() : (n.current = !0);
          }, t);
        },
        $e = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
              t.indexOf(r[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                (n[r[i]] = e[r[i]]);
          }
          return n;
        };
      const et = r.forwardRef((e, t) => {
        const {
            prefixCls: n,
            component: i = "article",
            className: o,
            rootClassName: a,
            setContentRef: s,
            children: l,
            direction: c,
            style: u
          } = e,
          d = $e(e, [
            "prefixCls",
            "component",
            "className",
            "rootClassName",
            "setContentRef",
            "children",
            "direction",
            "style"
          ]),
          { getPrefixCls: f, direction: p, typography: g } = r.useContext(B.E_),
          h = null != c ? c : p;
        let m = t;
        s && (m = (0, E.sQ)(t, s));
        const b = f("typography", n),
          [y, A, x] = Xe(b),
          w = v()(
            b,
            null == g ? void 0 : g.className,
            { [`${b}-rtl`]: "rtl" === h },
            o,
            a,
            A,
            x
          ),
          S = Object.assign(Object.assign({}, null == g ? void 0 : g.style), u);
        return y(
          r.createElement(
            i,
            Object.assign({ className: w, style: S, ref: m }, d),
            l
          )
        );
      });
      var tt = et;
      function nt(e) {
        const t = typeof e;
        return "string" === t || "number" === t;
      }
      function rt(e, t) {
        let n = 0;
        const r = [];
        for (let i = 0; i < e.length; i += 1) {
          if (n === t) return r;
          const o = e[i],
            a = n + (nt(o) ? String(o).length : 1);
          if (a > t) {
            const e = t - n;
            return r.push(String(o).slice(0, e)), r;
          }
          r.push(o), (n = a);
        }
        return e;
      }
      var it = (e) => {
        let {
          enabledMeasure: t,
          children: n,
          text: i,
          width: o,
          fontSize: a,
          rows: s,
          onEllipsis: l
        } = e;
        const [[c, u, d], f] = r.useState([0, 0, 0]),
          [p, g] = r.useState(0),
          [h, m] = r.useState(0),
          [v, b] = r.useState(0),
          y = r.useRef(null),
          A = r.useRef(null),
          S = r.useMemo(() => (0, x.Z)(i), [i]),
          C = r.useMemo(
            () =>
              (function (e) {
                let t = 0;
                return (
                  e.forEach((e) => {
                    nt(e) ? (t += String(e).length) : (t += 1);
                  }),
                  t
                );
              })(S),
            [S]
          ),
          E = r.useMemo(
            () =>
              t && 3 === h
                ? n(rt(S, u), u < C)
                : p && 4 !== h && t
                ? n(rt(S, p), p < C)
                : n(S, !1),
            [t, h, n, S, u, C]
          );
        (0, w.Z)(() => {
          t && o && a && C && (m(1), f([0, Math.ceil(C / 2), C]));
        }, [t, o, a, i, C, s]),
          (0, w.Z)(() => {
            var e;
            1 === h &&
              b(
                (null === (e = y.current) || void 0 === e
                  ? void 0
                  : e.offsetHeight) || 0
              );
          }, [h]),
          (0, w.Z)(() => {
            var e, t;
            if (v)
              if (1 === h) {
                ((null === (e = A.current) || void 0 === e
                  ? void 0
                  : e.offsetHeight) || 0) <=
                s * v
                  ? (m(4), l(!1))
                  : m(2);
              } else if (2 === h)
                if (c !== d) {
                  const e =
                    (null === (t = A.current) || void 0 === t
                      ? void 0
                      : t.offsetHeight) || 0;
                  let n = c,
                    r = d;
                  c === d - 1 ? (r = c) : e <= s * v ? (n = u) : (r = u);
                  const i = Math.ceil((n + r) / 2);
                  f([n, i, r]);
                } else m(3), g(u), l(!0);
          }, [h, c, d, s, v]);
        const I = { width: o, whiteSpace: "normal", margin: 0, padding: 0 },
          k = (e, t, n) =>
            r.createElement(
              "span",
              {
                "aria-hidden": !0,
                ref: t,
                style: Object.assign(
                  {
                    position: "fixed",
                    display: "block",
                    left: 0,
                    top: 0,
                    zIndex: -9999,
                    visibility: "hidden",
                    pointerEvents: "none",
                    fontSize: 2 * Math.ceil(a / 2)
                  },
                  n
                )
              },
              e
            );
        return r.createElement(
          r.Fragment,
          null,
          E,
          t &&
            3 !== h &&
            4 !== h &&
            r.createElement(
              r.Fragment,
              null,
              k("lg", y, { wordBreak: "keep-all", whiteSpace: "nowrap" }),
              1 === h
                ? k(n(S, !1), A, I)
                : ((e, t) => {
                    const r = rt(S, e);
                    return k(n(r, !0), t, I);
                  })(u, A)
            )
        );
      };
      var ot = (e) => {
          let {
            enabledEllipsis: t,
            isEllipsis: n,
            children: i,
            tooltipProps: o
          } = e;
          return (null == o ? void 0 : o.title) && t
            ? r.createElement(V.Z, Object.assign({ open: !!n && void 0 }, o), i)
            : i;
        },
        at = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
              t.indexOf(r[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                (n[r[i]] = e[r[i]]);
          }
          return n;
        };
      function st(e, t, n) {
        return !0 === e || void 0 === e ? t : e || (n && t);
      }
      function lt(e) {
        return !1 === e ? [!1, !1] : Array.isArray(e) ? e : [e];
      }
      const ct = r.forwardRef((e, t) => {
        var n, i, o;
        const {
            prefixCls: a,
            className: s,
            style: l,
            type: u,
            disabled: d,
            children: p,
            ellipsis: g,
            editable: m,
            copyable: b,
            component: I,
            title: k
          } = e,
          F = at(e, [
            "prefixCls",
            "className",
            "style",
            "type",
            "disabled",
            "children",
            "ellipsis",
            "editable",
            "copyable",
            "component",
            "title"
          ]),
          { getPrefixCls: O, direction: R } = r.useContext(B.E_),
          [M] = N("Text"),
          T = r.useRef(null),
          P = r.useRef(null),
          Q = O("typography", a),
          W = (0, C.Z)(F, [
            "mark",
            "code",
            "delete",
            "underline",
            "strong",
            "keyboard",
            "italic"
          ]),
          [L, D] = _e(m),
          [U, z] = (0, S.Z)(!1, { value: D.editing }),
          { triggerType: H = ["icon"] } = D,
          K = (e) => {
            var t;
            e && (null === (t = D.onStart) || void 0 === t || t.call(D)), z(e);
          };
        Ye(() => {
          var e;
          U || null === (e = P.current) || void 0 === e || e.focus();
        }, [U]);
        const q = (e) => {
            null == e || e.preventDefault(), K(!0);
          },
          J = (e) => {
            var t;
            null === (t = D.onChange) || void 0 === t || t.call(D, e), K(!1);
          },
          X = () => {
            var e;
            null === (e = D.onCancel) || void 0 === e || e.call(D), K(!1);
          },
          [G, _] = _e(b),
          [Y, $] = r.useState(!1),
          ee = r.useRef(null),
          te = {};
        _.format && (te.format = _.format);
        const ne = () => {
            ee.current && clearTimeout(ee.current);
          },
          re = (e) => {
            var t;
            null == e || e.preventDefault(),
              null == e || e.stopPropagation(),
              y()(_.text || String(p) || "", te),
              $(!0),
              ne(),
              (ee.current = setTimeout(() => {
                $(!1);
              }, 3e3)),
              null === (t = _.onCopy) || void 0 === t || t.call(_, e);
          };
        r.useEffect(() => ne, []);
        const [ie, oe] = r.useState(!1),
          [ae, se] = r.useState(!1),
          [le, ce] = r.useState(!1),
          [ue, de] = r.useState(!1),
          [fe, pe] = r.useState(!1),
          [ge, he] = r.useState(!0),
          [me, ve] = _e(g, { expandable: !1 }),
          be = me && !le,
          { rows: ye = 1 } = ve,
          Ae = r.useMemo(
            () =>
              !be ||
              void 0 !== ve.suffix ||
              ve.onEllipsis ||
              ve.expandable ||
              L ||
              G,
            [be, ve, L, G]
          );
        (0, w.Z)(() => {
          me && !Ae && (oe(Z("webkitLineClamp")), se(Z("textOverflow")));
        }, [Ae, me]);
        const xe = r.useMemo(() => !Ae && (1 === ye ? ae : ie), [Ae, ae, ie]),
          we = be && (xe ? fe : ue),
          Se = be && 1 === ye && xe,
          Ce = be && ye > 1 && xe,
          Ee = (e) => {
            var t;
            ce(!0), null === (t = ve.onExpand) || void 0 === t || t.call(ve, e);
          },
          [Ie, ke] = r.useState(0),
          [Ze, Fe] = r.useState(0),
          Oe = (e) => {
            var t;
            de(e),
              ue !== e &&
                (null === (t = ve.onEllipsis) || void 0 === t || t.call(ve, e));
          };
        r.useEffect(() => {
          const e = T.current;
          if (me && xe && e) {
            const t = Ce
              ? e.offsetHeight < e.scrollHeight
              : e.offsetWidth < e.scrollWidth;
            fe !== t && pe(t);
          }
        }, [me, xe, p, Ce, ge, Ie]),
          r.useEffect(() => {
            const e = T.current;
            if ("undefined" == typeof IntersectionObserver || !e || !xe || !be)
              return;
            const t = new IntersectionObserver(() => {
              he(!!e.offsetParent);
            });
            return (
              t.observe(e),
              () => {
                t.disconnect();
              }
            );
          }, [xe, be]);
        let Re = {};
        Re =
          !0 === ve.tooltip
            ? { title: null !== (n = D.text) && void 0 !== n ? n : p }
            : r.isValidElement(ve.tooltip)
            ? { title: ve.tooltip }
            : "object" == typeof ve.tooltip
            ? Object.assign(
                { title: null !== (i = D.text) && void 0 !== i ? i : p },
                ve.tooltip
              )
            : { title: ve.tooltip };
        const Me = r.useMemo(() => {
          const e = (e) => ["string", "number"].includes(typeof e);
          if (me && !xe)
            return e(D.text)
              ? D.text
              : e(p)
              ? p
              : e(k)
              ? k
              : e(Re.title)
              ? Re.title
              : void 0;
        }, [me, xe, k, Re.title, we]);
        if (U)
          return r.createElement(Ge, {
            value:
              null !== (o = D.text) && void 0 !== o
                ? o
                : "string" == typeof p
                ? p
                : "",
            onSave: J,
            onCancel: X,
            onEnd: D.onEnd,
            prefixCls: Q,
            className: s,
            style: l,
            direction: R,
            component: I,
            maxLength: D.maxLength,
            autoSize: D.autoSize,
            enterIcon: D.enterIcon
          });
        const je = () => {
            const { expandable: e, symbol: t } = ve;
            if (!e) return null;
            let n;
            return (
              (n = t || (null == M ? void 0 : M.expand)),
              r.createElement(
                "a",
                {
                  key: "expand",
                  className: `${Q}-expand`,
                  onClick: Ee,
                  "aria-label": null == M ? void 0 : M.expand
                },
                n
              )
            );
          },
          Be = () => {
            if (!L) return;
            const { icon: e, tooltip: t } = D,
              n = (0, x.Z)(t)[0] || (null == M ? void 0 : M.edit),
              i = "string" == typeof n ? n : "";
            return H.includes("icon")
              ? r.createElement(
                  V.Z,
                  { key: "edit", title: !1 === t ? "" : n },
                  r.createElement(
                    j,
                    {
                      ref: P,
                      className: `${Q}-edit`,
                      onClick: q,
                      "aria-label": i
                    },
                    e || r.createElement(h, { role: "button" })
                  )
                )
              : null;
          },
          Te = () => {
            if (!G) return null;
            const { tooltips: e, icon: t } = _,
              n = lt(e),
              i = lt(t),
              o = Y
                ? st(n[1], null == M ? void 0 : M.copied)
                : st(n[0], null == M ? void 0 : M.copy),
              a = Y
                ? null == M
                  ? void 0
                  : M.copied
                : null == M
                ? void 0
                : M.copy,
              s = "string" == typeof o ? o : a;
            return r.createElement(
              V.Z,
              { key: "copy", title: o },
              r.createElement(
                j,
                {
                  className: v()(`${Q}-copy`, {
                    [`${Q}-copy-success`]: Y,
                    [`${Q}-copy-icon-only`]: null == p
                  }),
                  onClick: re,
                  "aria-label": s
                },
                Y
                  ? st(i[1], r.createElement(c, null), !0)
                  : st(i[0], r.createElement(f, null), !0)
              )
            );
          };
        return r.createElement(
          A.Z,
          {
            onResize: (e, t) => {
              let { offsetWidth: n } = e;
              var r;
              ke(n),
                Fe(
                  parseInt(
                    null === (r = window.getComputedStyle) || void 0 === r
                      ? void 0
                      : r.call(window, t).fontSize,
                    10
                  ) || 0
                );
            },
            disabled: !be
          },
          (n) =>
            r.createElement(
              ot,
              { tooltipProps: Re, enabledEllipsis: be, isEllipsis: we },
              r.createElement(
                tt,
                Object.assign(
                  {
                    className: v()(
                      {
                        [`${Q}-${u}`]: u,
                        [`${Q}-disabled`]: d,
                        [`${Q}-ellipsis`]: me,
                        [`${Q}-single-line`]: be && 1 === ye,
                        [`${Q}-ellipsis-single-line`]: Se,
                        [`${Q}-ellipsis-multiple-line`]: Ce
                      },
                      s
                    ),
                    prefixCls: a,
                    style: Object.assign(Object.assign({}, l), {
                      WebkitLineClamp: Ce ? ye : void 0
                    }),
                    component: I,
                    ref: (0, E.sQ)(n, T, t),
                    direction: R,
                    onClick: H.includes("text") ? q : void 0,
                    "aria-label": null == Me ? void 0 : Me.toString(),
                    title: k
                  },
                  W
                ),
                r.createElement(
                  it,
                  {
                    enabledMeasure: be && !xe,
                    text: p,
                    rows: ye,
                    width: Ie,
                    fontSize: Ze,
                    onEllipsis: Oe
                  },
                  (t, n) => {
                    let i = t;
                    t.length &&
                      n &&
                      Me &&
                      (i = r.createElement(
                        "span",
                        { key: "show-content", "aria-hidden": !0 },
                        i
                      ));
                    const o = (function (e, t) {
                      let {
                          mark: n,
                          code: i,
                          underline: o,
                          delete: a,
                          strong: s,
                          keyboard: l,
                          italic: c
                        } = e,
                        u = t;
                      function d(e, t) {
                        t && (u = r.createElement(e, {}, u));
                      }
                      return (
                        d("strong", s),
                        d("u", o),
                        d("del", a),
                        d("code", i),
                        d("mark", n),
                        d("kbd", l),
                        d("i", c),
                        u
                      );
                    })(
                      e,
                      r.createElement(
                        r.Fragment,
                        null,
                        i,
                        ((e) => {
                          return [
                            e &&
                              r.createElement(
                                "span",
                                { "aria-hidden": !0, key: "ellipsis" },
                                "..."
                              ),
                            ve.suffix,
                            ((t = e), [t && je(), Be(), Te()])
                          ];
                          var t;
                        })(n)
                      )
                    );
                    return o;
                  }
                )
              )
            )
        );
      });
      var ut = ct,
        dt = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
              t.indexOf(r[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                (n[r[i]] = e[r[i]]);
          }
          return n;
        };
      var ft = r.forwardRef((e, t) => {
        var { ellipsis: n, rel: i } = e,
          o = dt(e, ["ellipsis", "rel"]);
        const a = Object.assign(Object.assign({}, o), {
          rel: void 0 === i && "_blank" === o.target ? "noopener noreferrer" : i
        });
        return (
          delete a.navigate,
          r.createElement(
            ut,
            Object.assign({}, a, { ref: t, ellipsis: !!n, component: "a" })
          )
        );
      });
      var pt = r.forwardRef((e, t) =>
          r.createElement(
            ut,
            Object.assign({ ref: t }, e, { component: "div" })
          )
        ),
        gt = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
              t.indexOf(r[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                (n[r[i]] = e[r[i]]);
          }
          return n;
        };
      const ht = (e, t) => {
        var { ellipsis: n } = e,
          i = gt(e, ["ellipsis"]);
        const o = r.useMemo(
          () =>
            n && "object" == typeof n ? (0, C.Z)(n, ["expandable", "rows"]) : n,
          [n]
        );
        return r.createElement(
          ut,
          Object.assign({ ref: t }, i, { ellipsis: o, component: "span" })
        );
      };
      var mt = r.forwardRef(ht),
        vt = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
              t.indexOf(r[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                (n[r[i]] = e[r[i]]);
          }
          return n;
        };
      const bt = [1, 2, 3, 4, 5];
      var yt = r.forwardRef((e, t) => {
        const { level: n = 1 } = e,
          i = vt(e, ["level"]);
        let o;
        return (
          (o = bt.includes(n) ? `h${n}` : "h1"),
          r.createElement(ut, Object.assign({ ref: t }, i, { component: o }))
        );
      });
      const At = tt;
      (At.Text = mt), (At.Link = ft), (At.Title = yt), (At.Paragraph = pt);
      var xt = At;
    },
    50490: function (e) {
      "use strict";
      e.exports = function (e) {
        if (((e = String(e || "")), r.test(e))) return "rtl";
        if (i.test(e)) return "ltr";
        return "neutral";
      };
      var t = "֑-߿יִ-﷽ﹰ-ﻼ",
        n = "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
        r = new RegExp("^[^" + n + "]*[" + t + "]"),
        i = new RegExp("^[^" + t + "]*[" + n + "]");
    },
    58386: function (e, t) {
      "use strict";
      for (
        var n =
            "undefined" != typeof window &&
            /Mac|iPod|iPhone|iPad/.test(window.navigator.platform),
          r = {
            alt: "altKey",
            control: "ctrlKey",
            meta: "metaKey",
            shift: "shiftKey"
          },
          i = {
            add: "+",
            break: "pause",
            cmd: "meta",
            command: "meta",
            ctl: "control",
            ctrl: "control",
            del: "delete",
            down: "arrowdown",
            esc: "escape",
            ins: "insert",
            left: "arrowleft",
            mod: n ? "meta" : "control",
            opt: "alt",
            option: "alt",
            return: "enter",
            right: "arrowright",
            space: " ",
            spacebar: " ",
            up: "arrowup",
            win: "meta",
            windows: "meta"
          },
          o = {
            backspace: 8,
            tab: 9,
            enter: 13,
            shift: 16,
            control: 17,
            alt: 18,
            pause: 19,
            capslock: 20,
            escape: 27,
            " ": 32,
            pageup: 33,
            pagedown: 34,
            end: 35,
            home: 36,
            arrowleft: 37,
            arrowup: 38,
            arrowright: 39,
            arrowdown: 40,
            insert: 45,
            delete: 46,
            meta: 91,
            numlock: 144,
            scrolllock: 145,
            ";": 186,
            "=": 187,
            ",": 188,
            "-": 189,
            ".": 190,
            "/": 191,
            "`": 192,
            "[": 219,
            "\\": 220,
            "]": 221,
            "'": 222
          },
          a = 1;
        a < 20;
        a++
      )
        o["f" + a] = 111 + a;
      function s(e, t, n) {
        t && !("byKey" in t) && ((n = t), (t = null)),
          Array.isArray(e) || (e = [e]);
        var r = e.map(function (e) {
            return l(e, t);
          }),
          i = function (e) {
            return r.some(function (t) {
              return c(t, e);
            });
          };
        return null == n ? i : i(n);
      }
      function l(e, t) {
        var n = t && t.byKey,
          a = {},
          s = (e = e.replace("++", "+add")).split("+"),
          l = s.length;
        for (var c in r) a[r[c]] = !1;
        var f = !0,
          p = !1,
          g = void 0;
        try {
          for (
            var h, m = s[Symbol.iterator]();
            !(f = (h = m.next()).done);
            f = !0
          ) {
            var v = h.value,
              b = v.endsWith("?") && v.length > 1;
            b && (v = v.slice(0, -1));
            var y = d(v),
              A = r[y];
            if (v.length > 1 && !A && !i[v] && !o[y])
              throw new TypeError('Unknown modifier: "' + v + '"');
            (1 !== l && A) || (n ? (a.key = y) : (a.which = u(v))),
              A && (a[A] = !b || null);
          }
        } catch (e) {
          (p = !0), (g = e);
        } finally {
          try {
            !f && m.return && m.return();
          } finally {
            if (p) throw g;
          }
        }
        return a;
      }
      function c(e, t) {
        for (var n in e) {
          var r = e[n],
            i = void 0;
          if (
            null != r &&
            (null !=
              (i =
                "key" === n && null != t.key
                  ? t.key.toLowerCase()
                  : "which" === n
                  ? 91 === r && 93 === t.which
                    ? 91
                    : t.which
                  : t[n]) ||
              !1 !== r) &&
            i !== r
          )
            return !1;
        }
        return !0;
      }
      function u(e) {
        return (e = d(e)), o[e] || e.toUpperCase().charCodeAt(0);
      }
      function d(e) {
        return (e = e.toLowerCase()), (e = i[e] || e);
      }
      t.P6 = s;
    },
    38277: function (e, t, n) {
      var r = n(38290),
        i = /^\s+/;
      e.exports = function (e) {
        return e ? e.slice(0, r(e) + 1).replace(i, "") : e;
      };
    },
    38290: function (e) {
      var t = /\s/;
      e.exports = function (e) {
        for (var n = e.length; n-- && t.test(e.charAt(n)); );
        return n;
      };
    },
    23368: function (e, t, n) {
      var r = n(55533),
        i = n(3671),
        o = n(35238),
        a = Math.max,
        s = Math.min;
      e.exports = function (e, t, n) {
        var l,
          c,
          u,
          d,
          f,
          p,
          g = 0,
          h = !1,
          m = !1,
          v = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");
        function b(t) {
          var n = l,
            r = c;
          return (l = c = void 0), (g = t), (d = e.apply(r, n));
        }
        function y(e) {
          return (g = e), (f = setTimeout(x, t)), h ? b(e) : d;
        }
        function A(e) {
          var n = e - p;
          return void 0 === p || n >= t || n < 0 || (m && e - g >= u);
        }
        function x() {
          var e = i();
          if (A(e)) return w(e);
          f = setTimeout(
            x,
            (function (e) {
              var n = t - (e - p);
              return m ? s(n, u - (e - g)) : n;
            })(e)
          );
        }
        function w(e) {
          return (f = void 0), v && l ? b(e) : ((l = c = void 0), d);
        }
        function S() {
          var e = i(),
            n = A(e);
          if (((l = arguments), (c = this), (p = e), n)) {
            if (void 0 === f) return y(p);
            if (m) return clearTimeout(f), (f = setTimeout(x, t)), b(p);
          }
          return void 0 === f && (f = setTimeout(x, t)), d;
        }
        return (
          (t = o(t) || 0),
          r(n) &&
            ((h = !!n.leading),
            (u = (m = "maxWait" in n) ? a(o(n.maxWait) || 0, t) : u),
            (v = "trailing" in n ? !!n.trailing : v)),
          (S.cancel = function () {
            void 0 !== f && clearTimeout(f), (g = 0), (l = p = c = f = void 0);
          }),
          (S.flush = function () {
            return void 0 === f ? d : w(i());
          }),
          S
        );
      };
    },
    11580: function (e, t, n) {
      var r = n(24402),
        i = n(93544);
      e.exports = function (e) {
        return "symbol" == typeof e || (i(e) && "[object Symbol]" == r(e));
      };
    },
    3671: function (e, t, n) {
      var r = n(9126);
      e.exports = function () {
        return r.Date.now();
      };
    },
    71032: function (e, t, n) {
      var r = n(23368),
        i = n(55533);
      e.exports = function (e, t, n) {
        var o = !0,
          a = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");
        return (
          i(n) &&
            ((o = "leading" in n ? !!n.leading : o),
            (a = "trailing" in n ? !!n.trailing : a)),
          r(e, t, { leading: o, maxWait: t, trailing: a })
        );
      };
    },
    35238: function (e, t, n) {
      var r = n(38277),
        i = n(55533),
        o = n(11580),
        a = /^[-+]0x[0-9a-f]+$/i,
        s = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        c = parseInt;
      e.exports = function (e) {
        if ("number" == typeof e) return e;
        if (o(e)) return NaN;
        if (i(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = i(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = r(e);
        var n = s.test(e);
        return n || l.test(e) ? c(e.slice(2), n ? 2 : 8) : a.test(e) ? NaN : +e;
      };
    },
    66008: function (e, t, n) {
      var r = {
        "./1.png": 63034,
        "./1_h.png": 91630,
        "./2.png": 11929,
        "./2_h.png": 43484,
        "./3.png": 50674,
        "./3_h.png": 83406,
        "./4.png": 92679,
        "./4_h.png": 662,
        "./5.png": 51136,
        "./5_h.png": 41379
      };
      function i(e) {
        var t = o(e);
        return n(t);
      }
      function o(e) {
        if (!n.o(r, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return r[e];
      }
      (i.keys = function () {
        return Object.keys(r);
      }),
        (i.resolve = o),
        (e.exports = i),
        (i.id = 66008);
    },
    9335: function (e) {
      "use strict";
      e.exports =
        "data:image/png;base64,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";
    },
    63034: function (e) {
      "use strict";
      e.exports =
        "data:image/png;base64,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";
    },
    91630: function (e) {
      "use strict";
      e.exports =
        "data:image/png;base64,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";
    },
    11929: function (e) {
      "use strict";
      e.exports =
        "data:image/png;base64,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";
    },
    43484: function (e) {
      "use strict";
      e.exports =
        "data:image/png;base64,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";
    },
    50674: function (e) {
      "use strict";
      e.exports =
        "data:image/png;base64,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";
    },
    83406: function (e) {
      "use strict";
      e.exports =
        "data:image/png;base64,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";
    },
    92679: function (e) {
      "use strict";
      e.exports =
        "data:image/png;base64,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";
    },
    662: function (e) {
      "use strict";
      e.exports =
        "data:image/png;base64,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";
    },
    51136: function (e) {
      "use strict";
      e.exports =
        "data:image/png;base64,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";
    },
    41379: function (e) {
      "use strict";
      e.exports =
        "data:image/png;base64,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";
    },
    50188: function (e) {
      (e.exports = function (e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    98658: function (e, t, n) {
      "use strict";
      n.d(t, {
        L: function () {
          return I;
        }
      });
      var r = n(34827),
        i = n(53067),
        o = n(63313),
        a = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect;
      function s(e, t, n) {
        var s = (function (e, t, n) {
            var s = (0, o.useState)(function () {
                return t(e);
              }),
              l = r(s, 2),
              c = l[0],
              u = l[1],
              d = (0, o.useCallback)(
                function () {
                  var r = t(e);
                  i(c, r) || (u(r), n && n());
                },
                [c, e, n]
              );
            return a(d), [c, d];
          })(e, t, n),
          l = r(s, 2),
          c = l[0],
          u = l[1];
        return (
          a(
            function () {
              var t = e.getHandlerId();
              if (null != t)
                return e.subscribeToStateChange(u, { handlerIds: [t] });
            },
            [e, u]
          ),
          c
        );
      }
      function l(e, t, n) {
        return s(
          t,
          e ||
            function () {
              return {};
            },
          function () {
            return n.reconnect();
          }
        );
      }
      var c = n(60430);
      function u(e) {
        return (0, o.useMemo)(
          function () {
            return e.hooks.dropTarget();
          },
          [e]
        );
      }
      var d = n(52351),
        f = n(12841);
      var p = n(37526);
      var g = n(7916);
      function h(e) {
        if ("string" != typeof e.type) {
          var t = e.type.displayName || e.type.name || "the component";
          throw new Error(
            "Only native element nodes can now be passed to React DnD connectors." +
              "You can either wrap ".concat(
                t,
                " into a <div>, or turn it into a "
              ) +
              "drag source or a drop target itself."
          );
        }
      }
      function m(e) {
        var t = {};
        return (
          Object.keys(e).forEach(function (n) {
            var r = e[n];
            if (n.endsWith("Ref")) t[n] = e[n];
            else {
              var i = (function (e) {
                return function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null;
                  if (!(0, o.isValidElement)(t)) {
                    var r = t;
                    return e(r, n), r;
                  }
                  var i = t;
                  h(i);
                  var a = n
                    ? function (t) {
                        return e(t, n);
                      }
                    : e;
                  return b(i, a);
                };
              })(r);
              t[n] = function () {
                return i;
              };
            }
          }),
          t
        );
      }
      function v(e, t) {
        "function" == typeof e ? e(t) : (e.current = t);
      }
      function b(e, t) {
        var n = e.ref;
        return (
          (0, g.k)(
            "string" != typeof n,
            "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"
          ),
          n
            ? (0, o.cloneElement)(e, {
                ref: function (e) {
                  v(n, e), v(t, e);
                }
              })
            : (0, o.cloneElement)(e, { ref: t })
        );
      }
      var y = (function () {
          function e(t) {
            var n = this;
            d(this, e),
              (this.hooks = m({
                dropTarget: function (e, t) {
                  var r;
                  n.clearDropTarget(),
                    (n.dropTargetOptions = t),
                    null !== (r = e) &&
                    "object" === p(r) &&
                    Object.prototype.hasOwnProperty.call(r, "current")
                      ? (n.dropTargetRef = e)
                      : (n.dropTargetNode = e),
                    n.reconnect();
                }
              })),
              (this.handlerId = null),
              (this.dropTargetRef = null),
              (this.dropTargetOptionsInternal = null),
              (this.lastConnectedHandlerId = null),
              (this.lastConnectedDropTarget = null),
              (this.lastConnectedDropTargetOptions = null),
              (this.backend = t);
          }
          return (
            f(e, [
              {
                key: "connectTarget",
                get: function () {
                  return this.dropTarget;
                }
              },
              {
                key: "reconnect",
                value: function () {
                  var e =
                    this.didHandlerIdChange() ||
                    this.didDropTargetChange() ||
                    this.didOptionsChange();
                  e && this.disconnectDropTarget();
                  var t = this.dropTarget;
                  this.handlerId &&
                    (t
                      ? e &&
                        ((this.lastConnectedHandlerId = this.handlerId),
                        (this.lastConnectedDropTarget = t),
                        (this.lastConnectedDropTargetOptions =
                          this.dropTargetOptions),
                        (this.unsubscribeDropTarget =
                          this.backend.connectDropTarget(
                            this.handlerId,
                            t,
                            this.dropTargetOptions
                          )))
                      : (this.lastConnectedDropTarget = t));
                }
              },
              {
                key: "receiveHandlerId",
                value: function (e) {
                  e !== this.handlerId &&
                    ((this.handlerId = e), this.reconnect());
                }
              },
              {
                key: "dropTargetOptions",
                get: function () {
                  return this.dropTargetOptionsInternal;
                },
                set: function (e) {
                  this.dropTargetOptionsInternal = e;
                }
              },
              {
                key: "didHandlerIdChange",
                value: function () {
                  return this.lastConnectedHandlerId !== this.handlerId;
                }
              },
              {
                key: "didDropTargetChange",
                value: function () {
                  return this.lastConnectedDropTarget !== this.dropTarget;
                }
              },
              {
                key: "didOptionsChange",
                value: function () {
                  return !(function (e, t, n, r) {
                    let i = n ? n.call(r, e, t) : void 0;
                    if (void 0 !== i) return !!i;
                    if (e === t) return !0;
                    if (
                      "object" != typeof e ||
                      !e ||
                      "object" != typeof t ||
                      !t
                    )
                      return !1;
                    const o = Object.keys(e),
                      a = Object.keys(t);
                    if (o.length !== a.length) return !1;
                    const s = Object.prototype.hasOwnProperty.bind(t);
                    for (let a = 0; a < o.length; a++) {
                      const l = o[a];
                      if (!s(l)) return !1;
                      const c = e[l],
                        u = t[l];
                      if (
                        ((i = n ? n.call(r, c, u, l) : void 0),
                        !1 === i || (void 0 === i && c !== u))
                      )
                        return !1;
                    }
                    return !0;
                  })(
                    this.lastConnectedDropTargetOptions,
                    this.dropTargetOptions
                  );
                }
              },
              {
                key: "disconnectDropTarget",
                value: function () {
                  this.unsubscribeDropTarget &&
                    (this.unsubscribeDropTarget(),
                    (this.unsubscribeDropTarget = void 0));
                }
              },
              {
                key: "dropTarget",
                get: function () {
                  return (
                    this.dropTargetNode ||
                    (this.dropTargetRef && this.dropTargetRef.current)
                  );
                }
              },
              {
                key: "clearDropTarget",
                value: function () {
                  (this.dropTargetRef = null), (this.dropTargetNode = null);
                }
              }
            ]),
            e
          );
        })(),
        A = n(64979);
      function x() {
        var e = (0, o.useContext)(A.L).dragDropManager;
        return (0, g.k)(null != e, "Expected drag drop context"), e;
      }
      var w = !1,
        S = (function () {
          function e(t) {
            d(this, e),
              (this.targetId = null),
              (this.internalMonitor = t.getMonitor());
          }
          return (
            f(e, [
              {
                key: "receiveHandlerId",
                value: function (e) {
                  this.targetId = e;
                }
              },
              {
                key: "getHandlerId",
                value: function () {
                  return this.targetId;
                }
              },
              {
                key: "subscribeToStateChange",
                value: function (e, t) {
                  return this.internalMonitor.subscribeToStateChange(e, t);
                }
              },
              {
                key: "canDrop",
                value: function () {
                  if (!this.targetId) return !1;
                  (0, g.k)(
                    !w,
                    "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor"
                  );
                  try {
                    return (
                      (w = !0),
                      this.internalMonitor.canDropOnTarget(this.targetId)
                    );
                  } finally {
                    w = !1;
                  }
                }
              },
              {
                key: "isOver",
                value: function (e) {
                  return (
                    !!this.targetId &&
                    this.internalMonitor.isOverTarget(this.targetId, e)
                  );
                }
              },
              {
                key: "getItemType",
                value: function () {
                  return this.internalMonitor.getItemType();
                }
              },
              {
                key: "getItem",
                value: function () {
                  return this.internalMonitor.getItem();
                }
              },
              {
                key: "getDropResult",
                value: function () {
                  return this.internalMonitor.getDropResult();
                }
              },
              {
                key: "didDrop",
                value: function () {
                  return this.internalMonitor.didDrop();
                }
              },
              {
                key: "getInitialClientOffset",
                value: function () {
                  return this.internalMonitor.getInitialClientOffset();
                }
              },
              {
                key: "getInitialSourceClientOffset",
                value: function () {
                  return this.internalMonitor.getInitialSourceClientOffset();
                }
              },
              {
                key: "getSourceClientOffset",
                value: function () {
                  return this.internalMonitor.getSourceClientOffset();
                }
              },
              {
                key: "getClientOffset",
                value: function () {
                  return this.internalMonitor.getClientOffset();
                }
              },
              {
                key: "getDifferenceFromInitialOffset",
                value: function () {
                  return this.internalMonitor.getDifferenceFromInitialOffset();
                }
              }
            ]),
            e
          );
        })();
      var C = (function () {
        function e(t, n) {
          d(this, e), (this.spec = t), (this.monitor = n);
        }
        return (
          f(e, [
            {
              key: "canDrop",
              value: function () {
                var e = this.spec,
                  t = this.monitor;
                return !e.canDrop || e.canDrop(t.getItem(), t);
              }
            },
            {
              key: "hover",
              value: function () {
                var e = this.spec,
                  t = this.monitor;
                e.hover && e.hover(t.getItem(), t);
              }
            },
            {
              key: "drop",
              value: function () {
                var e = this.spec,
                  t = this.monitor;
                if (e.drop) return e.drop(t.getItem(), t);
              }
            }
          ]),
          e
        );
      })();
      function E(e, t, n) {
        var i = x(),
          s = (function (e, t) {
            var n = (0, o.useMemo)(
              function () {
                return new C(e, t);
              },
              [t]
            );
            return (
              (0, o.useEffect)(
                function () {
                  n.spec = e;
                },
                [e]
              ),
              n
            );
          })(e, t),
          l = (function (e) {
            var t = e.accept;
            return (0, o.useMemo)(
              function () {
                return (
                  (0, g.k)(null != e.accept, "accept must be defined"),
                  Array.isArray(t) ? t : [t]
                );
              },
              [t]
            );
          })(e);
        a(
          function () {
            var e = (function (e, t, n) {
                var r = n.getRegistry(),
                  i = r.addTarget(e, t);
                return [
                  i,
                  function () {
                    return r.removeTarget(i);
                  }
                ];
              })(l, s, i),
              o = r(e, 2),
              a = o[0],
              c = o[1];
            return t.receiveHandlerId(a), n.receiveHandlerId(a), c;
          },
          [
            i,
            t,
            s,
            n,
            l
              .map(function (e) {
                return e.toString();
              })
              .join("|")
          ]
        );
      }
      function I(e, t) {
        var n,
          r = (function (e, t) {
            var n = c(t || []);
            return (
              null == t && "function" != typeof e && n.push(e),
              (0, o.useMemo)(function () {
                return "function" == typeof e ? e() : e;
              }, n)
            );
          })(e, t),
          i =
            ((n = x()),
            (0, o.useMemo)(
              function () {
                return new S(n);
              },
              [n]
            )),
          s = (function (e) {
            var t = x(),
              n = (0, o.useMemo)(
                function () {
                  return new y(t.getBackend());
                },
                [t]
              );
            return (
              a(
                function () {
                  return (
                    (n.dropTargetOptions = e || null),
                    n.reconnect(),
                    function () {
                      return n.disconnectDropTarget();
                    }
                  );
                },
                [e]
              ),
              n
            );
          })(r.options);
        return E(r, i, s), [l(r.collect, i, s), u(s)];
      }
    },
    92920: function (e, t, n) {
      "use strict";
      function r(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function i(e) {
        var t, n;
        return (
          !1 !== r(e) &&
          (void 0 === (t = e.constructor) ||
            (!1 !== r((n = t.prototype)) &&
              !1 !== n.hasOwnProperty("isPrototypeOf")))
        );
      }
      n.d(t, {
        P: function () {
          return i;
        }
      });
    },
    78682: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return c;
        }
      });
      const r = (e) => "object" == typeof e && null != e && 1 === e.nodeType,
        i = (e, t) => (!t || "hidden" !== e) && "visible" !== e && "clip" !== e,
        o = (e, t) => {
          if (
            e.clientHeight < e.scrollHeight ||
            e.clientWidth < e.scrollWidth
          ) {
            const n = getComputedStyle(e, null);
            return (
              i(n.overflowY, t) ||
              i(n.overflowX, t) ||
              ((e) => {
                const t = ((e) => {
                  if (!e.ownerDocument || !e.ownerDocument.defaultView)
                    return null;
                  try {
                    return e.ownerDocument.defaultView.frameElement;
                  } catch (e) {
                    return null;
                  }
                })(e);
                return (
                  !!t &&
                  (t.clientHeight < e.scrollHeight ||
                    t.clientWidth < e.scrollWidth)
                );
              })(e)
            );
          }
          return !1;
        },
        a = (e, t, n, r, i, o, a, s) =>
          (o < e && a > t) || (o > e && a < t)
            ? 0
            : (o <= e && s <= n) || (a >= t && s >= n)
            ? o - e - r
            : (a > t && s < n) || (o < e && s > n)
            ? a - t + i
            : 0,
        s = (e) => {
          const t = e.parentElement;
          return null == t ? e.getRootNode().host || null : t;
        },
        l = (e, t) => {
          var n, i, l, c;
          if ("undefined" == typeof document) return [];
          const {
              scrollMode: u,
              block: d,
              inline: f,
              boundary: p,
              skipOverflowHiddenElements: g
            } = t,
            h = "function" == typeof p ? p : (e) => e !== p;
          if (!r(e)) throw new TypeError("Invalid target");
          const m = document.scrollingElement || document.documentElement,
            v = [];
          let b = e;
          for (; r(b) && h(b); ) {
            if (((b = s(b)), b === m)) {
              v.push(b);
              break;
            }
            (null != b &&
              b === document.body &&
              o(b) &&
              !o(document.documentElement)) ||
              (null != b && o(b, g) && v.push(b));
          }
          const y =
              null !=
              (i = null == (n = window.visualViewport) ? void 0 : n.width)
                ? i
                : innerWidth,
            A =
              null !=
              (c = null == (l = window.visualViewport) ? void 0 : l.height)
                ? c
                : innerHeight,
            { scrollX: x, scrollY: w } = window,
            {
              height: S,
              width: C,
              top: E,
              right: I,
              bottom: k,
              left: Z
            } = e.getBoundingClientRect(),
            {
              top: F,
              right: O,
              bottom: R,
              left: M
            } = ((e) => {
              const t = window.getComputedStyle(e);
              return {
                top: parseFloat(t.scrollMarginTop) || 0,
                right: parseFloat(t.scrollMarginRight) || 0,
                bottom: parseFloat(t.scrollMarginBottom) || 0,
                left: parseFloat(t.scrollMarginLeft) || 0
              };
            })(e);
          let j =
              "start" === d || "nearest" === d
                ? E - F
                : "end" === d
                ? k + R
                : E + S / 2 - F + R,
            B =
              "center" === f ? Z + C / 2 - M + O : "end" === f ? I + O : Z - M;
          const T = [];
          for (let e = 0; e < v.length; e++) {
            const t = v[e],
              {
                height: n,
                width: r,
                top: i,
                right: o,
                bottom: s,
                left: l
              } = t.getBoundingClientRect();
            if (
              "if-needed" === u &&
              E >= 0 &&
              Z >= 0 &&
              k <= A &&
              I <= y &&
              E >= i &&
              k <= s &&
              Z >= l &&
              I <= o
            )
              return T;
            const c = getComputedStyle(t),
              p = parseInt(c.borderLeftWidth, 10),
              g = parseInt(c.borderTopWidth, 10),
              h = parseInt(c.borderRightWidth, 10),
              b = parseInt(c.borderBottomWidth, 10);
            let F = 0,
              O = 0;
            const R =
                "offsetWidth" in t ? t.offsetWidth - t.clientWidth - p - h : 0,
              M =
                "offsetHeight" in t
                  ? t.offsetHeight - t.clientHeight - g - b
                  : 0,
              P =
                "offsetWidth" in t
                  ? 0 === t.offsetWidth
                    ? 0
                    : r / t.offsetWidth
                  : 0,
              N =
                "offsetHeight" in t
                  ? 0 === t.offsetHeight
                    ? 0
                    : n / t.offsetHeight
                  : 0;
            if (m === t)
              (F =
                "start" === d
                  ? j
                  : "end" === d
                  ? j - A
                  : "nearest" === d
                  ? a(w, w + A, A, g, b, w + j, w + j + S, S)
                  : j - A / 2),
                (O =
                  "start" === f
                    ? B
                    : "center" === f
                    ? B - y / 2
                    : "end" === f
                    ? B - y
                    : a(x, x + y, y, p, h, x + B, x + B + C, C)),
                (F = Math.max(0, F + w)),
                (O = Math.max(0, O + x));
            else {
              (F =
                "start" === d
                  ? j - i - g
                  : "end" === d
                  ? j - s + b + M
                  : "nearest" === d
                  ? a(i, s, n, g, b + M, j, j + S, S)
                  : j - (i + n / 2) + M / 2),
                (O =
                  "start" === f
                    ? B - l - p
                    : "center" === f
                    ? B - (l + r / 2) + R / 2
                    : "end" === f
                    ? B - o + h + R
                    : a(l, o, r, p, h + R, B, B + C, C));
              const { scrollLeft: e, scrollTop: c } = t;
              (F =
                0 === N
                  ? 0
                  : Math.max(
                      0,
                      Math.min(c + F / N, t.scrollHeight - n / N + M)
                    )),
                (O =
                  0 === P
                    ? 0
                    : Math.max(
                        0,
                        Math.min(e + O / P, t.scrollWidth - r / P + R)
                      )),
                (j += c - F),
                (B += e - O);
            }
            T.push({ el: t, top: F, left: O });
          }
          return T;
        };
      function c(e, t) {
        if (
          !e.isConnected ||
          !((e) => {
            let t = e;
            for (; t && t.parentNode; ) {
              if (t.parentNode === document) return !0;
              t =
                t.parentNode instanceof ShadowRoot
                  ? t.parentNode.host
                  : t.parentNode;
            }
            return !1;
          })(e)
        )
          return;
        const n = ((e) => {
          const t = window.getComputedStyle(e);
          return {
            top: parseFloat(t.scrollMarginTop) || 0,
            right: parseFloat(t.scrollMarginRight) || 0,
            bottom: parseFloat(t.scrollMarginBottom) || 0,
            left: parseFloat(t.scrollMarginLeft) || 0
          };
        })(e);
        if (((e) => "object" == typeof e && "function" == typeof e.behavior)(t))
          return t.behavior(l(e, t));
        const r = "boolean" == typeof t || null == t ? void 0 : t.behavior;
        for (const { el: i, top: o, left: a } of l(
          e,
          ((e) =>
            !1 === e
              ? { block: "end", inline: "nearest" }
              : ((e) => e === Object(e) && 0 !== Object.keys(e).length)(e)
              ? e
              : { block: "start", inline: "nearest" })(t)
        )) {
          const e = o - n.top + n.bottom,
            t = a - n.left + n.right;
          i.scroll({ top: e, left: t, behavior: r });
        }
      }
    }
  }
]);
