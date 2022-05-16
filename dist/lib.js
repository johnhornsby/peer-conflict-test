!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t(require("react")))
    : "function" == typeof define && define.amd
    ? define(["react"], t)
    : "object" == typeof exports
    ? (exports.myPeerConflictTest = t(require("react")))
    : (e.myPeerConflictTest = t(e.react));
})(self, (e) =>
  (() => {
    "use strict";
    var t = {
        156: (t) => {
          t.exports = e;
        },
      },
      r = {};
    function o(e) {
      var n = r[e];
      if (void 0 !== n) return n.exports;
      var a = (r[e] = { exports: {} });
      return t[e](a, a.exports, o), a.exports;
    }
    (o.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return o.d(t, { a: t }), t;
    }),
      (o.d = (e, t) => {
        for (var r in t)
          o.o(t, r) &&
            !o.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      }),
      (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (o.r = (e) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      });
    var n = {};
    return (
      (() => {
        o.r(n), o.d(n, { Box: () => r, Sum: () => a, default: () => u });
        var e = o(156),
          t = o.n(e);
        const r = () => t().createElement("div", null, "Box"),
          a = (e, t) => e + t,
          u = a;
      })(),
      n
    );
  })()
);
