!function (e, o) { "object" == typeof exports && "object" == typeof module ? module.exports = o() : "function" == typeof define && define.amd ? define([], o) : "object" == typeof exports ? exports.httpReporter = o() : e.httpReporter = o() }(this, (() => (() => { "use strict"; var e = { d: (o, t) => { for (var n in t) e.o(t, n) && !e.o(o, n) && Object.defineProperty(o, n, { enumerable: !0, get: t[n] }) }, o: (e, o) => Object.prototype.hasOwnProperty.call(e, o), r: e => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) } }, o = {}; function t() { if ("undefined" != typeof window) { if (window.addEventListener("error", (function (e) { console.log("REPORTER: App error:", e) })), window.fetch) { var e = window.fetch; window.fetch = function () { for (var o = arguments.length, t = new Array(o), n = 0; n < o; n++)t[n] = arguments[n]; return e.apply(this, t).then((function (e) { return e.ok || console.log("REPORTER: Fetch error:", e), e })).catch((function (e) { throw console.log("REPORTER: Fetch error:", e), e })) } } if (window.XMLHttpRequest) { var o = window.XMLHttpRequest.prototype.open; window.XMLHttpRequest.prototype.open = function () { this.addEventListener("error", (function (e) { console.log("REPORTER: XML Req error:", e) })); for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)t[n] = arguments[n]; return o.apply(this, t) } } console.log("All available listeners added") } else console.warn("Library only works on client environments. Make sure window is available.") } function n(e) { "undefined" != typeof window && (window.uptimeSentinelProjectId = e, t(), console.log("Sentinel initialized!, project: ", e)) } return e.r(o), e.d(o, { initialize: () => t, intializeSentinel: () => n }), window.intializeSentinel = n, o })()));