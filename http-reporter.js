!function (e, o) { "object" == typeof exports && "object" == typeof module ? module.exports = o() : "function" == typeof define && define.amd ? define([], o) : "object" == typeof exports ? exports.httpReporter = o() : e.httpReporter = o() }(this, (() => (() => { "use strict"; var e = { d: (o, t) => { for (var n in t) e.o(t, n) && !e.o(o, n) && Object.defineProperty(o, n, { enumerable: !0, get: t[n] }) }, o: (e, o) => Object.prototype.hasOwnProperty.call(e, o), r: e => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) } }, o = {}; e.r(o), e.d(o, { initialize: () => r, initializeSentinel: () => i }); var t = ["https://app.notloading.io/api/alert", "http://app.notloading.io/api/alert", "https://app.dev.notloading.io/api/alert", "http://app.dev.notloading.io/api/alert", "http://localhost:3000/api/alert"]; function n(e) { try { if (console.log("Sending error: ", e), e && t.some((function (o) { return e.url === o }))) return void console.log("Skipping error report for API URL: ", e.url); var o = window.uptimeSentinelProjectId; console.log("Project ID: ", o), fetch("https://api.notloading.io/api/alert", { method: "POST", headers: { "project-id": o }, body: JSON.stringify({ error: e }) }) } catch (e) { console.error("Error sending error report: ", e) } } function r(e) { if ("undefined" != typeof window) { if (window.addEventListener("error", (function (e) { console.log("REPORTER: App error:", e) })), window.fetch) { var o = window.fetch; window.fetch = function () { for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)t[r] = arguments[r]; return o.apply(this, t).then((function (e) { return e.ok || (console.log("REPORTER: Fetch error:", e), n(e)), e })).catch((function (e) { throw console.log("REPORTER: Fetch error:", e), n(e), e })) } } if (window.XMLHttpRequest) { var t = window.XMLHttpRequest.prototype.open; window.XMLHttpRequest.prototype.open = function () { this.addEventListener("error", (function (e) { console.log("REPORTER: XML Req error:", e), n(e) })); for (var e = arguments.length, o = new Array(e), r = 0; r < e; r++)o[r] = arguments[r]; return t.apply(this, o) } } } else console.warn("Library only works on client environments. Make sure window is available.") } function i(e) { "undefined" != typeof window && (window.uptimeSentinelProjectId = e, r(), console.log("Sentinel initialized!")) } return window.intializeSentinel = intializeSentinel, o })()));