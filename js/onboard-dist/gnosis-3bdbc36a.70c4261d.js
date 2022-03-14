parcelRequire = function(e, r, t, n) {
    var i, o = "function" == typeof parcelRequire && parcelRequire, u = "function" == typeof require && require;
    function f(t, n) {
        if (!r[t]) {
            if (!e[t]) {
                var i = "function" == typeof parcelRequire && parcelRequire;
                if (!n && i)
                    return i(t, !0);
                if (o)
                    return o(t, !0);
                if (u && "string" == typeof t)
                    return u(t);
                var c = new Error("Cannot find module '" + t + "'");
                throw c.code = "MODULE_NOT_FOUND",
                c
            }
            p.resolve = function(r) {
                return e[t][1][r] || r
            }
            ,
            p.cache = {};
            var l = r[t] = new f.Module(t);
            e[t][0].call(l.exports, p, l, l.exports, this)
        }
        return r[t].exports;
        function p(e) {
            return f(p.resolve(e))
        }
    }
    f.isParcelRequire = !0,
    f.Module = function(e) {
        this.id = e,
        this.bundle = f,
        this.exports = {}
    }
    ,
    f.modules = e,
    f.cache = r,
    f.parent = o,
    f.register = function(r, t) {
        e[r] = [function(e, r) {
            r.exports = t
        }
        , {}]
    }
    ;
    for (var c = 0; c < t.length; c++)
        try {
            f(t[c])
        } catch (e) {
            i || (i = e)
        }
    if (t.length) {
        var l = f(t[t.length - 1]);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function() {
            return l
        }) : n && (this[n] = l)
    }
    if (parcelRequire = f,
    i)
        throw i;
    return f
}({
    "audJ": [function(require, module, exports) {
        "use strict";
        function e(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                r && (n = n.filter(function(r) {
                    return Object.getOwnPropertyDescriptor(e, r).enumerable
                })),
                t.push.apply(t, n)
            }
            return t
        }
        function r(r) {
            for (var n = 1; n < arguments.length; n++) {
                var o = null != arguments[n] ? arguments[n] : {};
                n % 2 ? e(Object(o), !0).forEach(function(e) {
                    t(r, e, o[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : e(Object(o)).forEach(function(e) {
                    Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e))
                })
            }
            return r
        }
        function t(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = t,
            e
        }
        function n(e, r, t, n, o, a, i) {
            try {
                var s = e[a](i)
                  , c = s.value
            } catch (u) {
                return void t(u)
            }
            s.done ? r(c) : Promise.resolve(c).then(n, o)
        }
        function o(e) {
            return function() {
                var r = this
                  , t = arguments;
                return new Promise(function(o, a) {
                    var i = e.apply(r, t);
                    function s(e) {
                        n(i, o, a, s, c, "next", e)
                    }
                    function c(e) {
                        n(i, o, a, s, c, "throw", e)
                    }
                    s(void 0)
                }
                )
            }
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.default = exports.checkGnosisSafeContext = void 0;
        var a = '\n<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 440 440">\n    <path d="M220,9.82C103.92,9.82,9.82,103.92,9.82,220S103.92,430.18,220,430.18,430.18,336.08,430.18,220,336.08,9.82,220,9.82ZM373.83,231.47H276.3a59.41,59.41,0,1,1,.45-20.67h97.08a10.34,10.34,0,1,1,0,20.67Z"/>\n</svg>\n'
          , i = function(e) {
            return Promise.race([e.getSafeInfo(), new Promise(function(e) {
                return setTimeout(e, 200)
            }
            )])
        }
          , s = function() {
            var e = o(regeneratorRuntime.mark(function e(r) {
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.t1 = i,
                            e.next = 3,
                            require("_bundle_loader")(require.resolve("@gnosis.pm/safe-apps-sdk"));
                        case 3:
                            return e.t2 = e.sent.default,
                            e.t3 = new e.t2,
                            e.next = 7,
                            (0,
                            e.t1)(e.t3);
                        case 7:
                            if (e.t0 = !!e.sent,
                            !e.t0) {
                                e.next = 10;
                                break
                            }
                            e.t0 = r();
                        case 10:
                            return e.abrupt("return", e.t0);
                        case 11:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }));
            return function(r) {
                return e.apply(this, arguments)
            }
        }();
        function c(e) {
            var t = e.preferred
              , n = e.label
              , s = e.iconSrc
              , c = e.svg
              , u = e.networkId
              , p = "https://".concat(4 === u ? "rinkeby." : "", "gnosis-safe.io/app")
              , f = e.appName ? "Then go to APPS and select <b>".concat(e.appName, "</b>.") : e.appUrl ? "Then go to APPS and add a custom app with the URL:<br /><b>".concat(e.appUrl, "</b>") : "";
            return {
                name: n || "Gnosis Safe",
                iconSrc: s,
                svg: c || a,
                wallet: function() {
                    var e = o(regeneratorRuntime.mark(function e(t) {
                        var n, o, a, s, c, u;
                        return regeneratorRuntime.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return n = t.createModernProviderInterface,
                                    e.next = 3,
                                    require("_bundle_loader")(require.resolve("@gnosis.pm/safe-apps-sdk"));
                                case 3:
                                    return e.t0 = e.sent.default,
                                    o = new e.t0,
                                    e.next = 7,
                                    require("_bundle_loader")(require.resolve("@gnosis.pm/safe-apps-provider"));
                                case 7:
                                    return a = e.sent,
                                    s = a.SafeAppProvider,
                                    e.next = 11,
                                    i(o);
                                case 11:
                                    if (c = e.sent) {
                                        e.next = 14;
                                        break
                                    }
                                    return e.abrupt("return", {
                                        provider: void 0,
                                        interface: null
                                    });
                                case 14:
                                    return u = new s(c,o),
                                    e.abrupt("return", {
                                        provider: u,
                                        interface: r(r({}, n(u)), {}, {
                                            connect: function() {
                                                return Promise.resolve([c.safeAddress])
                                            }
                                        })
                                    });
                                case 16:
                                case "end":
                                    return e.stop()
                                }
                        }, e)
                    }));
                    return function(r) {
                        return e.apply(this, arguments)
                    }
                }(),
                type: "sdk",
                link: p,
                installMessage: function() {
                    return '\n        <p style="font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;">\n            Click the button below to open the Gnosis Safe interface.<br />\n            '.concat(f, "\n        </p>\n        ")
                },
                desktop: !0,
                mobile: !1,
                preferred: t
            }
        }
        exports.checkGnosisSafeContext = s;
        var u = c;
        exports.default = u;
    }
    , {
        "_bundle_loader": "fiHL",
        "@gnosis.pm/safe-apps-sdk": [["src.358b2a1b.js", "kVpi"], "kVpi"],
        "@gnosis.pm/safe-apps-provider": [["dist.e4ab0f9b.js", "l7WL"], "l7WL"]
    }],
    "IC3c": [function(require, module, exports) {
        var t = null;
        function e() {
            return t || (t = n()),
            t
        }
        function n() {
            try {
                throw new Error
            } catch (e) {
                var t = ("" + e.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
                if (t)
                    return r(t[0])
            }
            return "/"
        }
        function r(t) {
            return ("" + t).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, "$1") + "/"
        }
        exports.getBundleURL = e,
        exports.getBaseURL = r;
    }
    , {}],
    "fiHL": [function(require, module, exports) {
        var r = require("./bundle-url").getBundleURL;
        function e(r) {
            Array.isArray(r) || (r = [r]);
            var e = r[r.length - 1];
            try {
                return Promise.resolve(require(e))
            } catch (n) {
                if ("MODULE_NOT_FOUND" === n.code)
                    return new s(function(n, i) {
                        t(r.slice(0, -1)).then(function() {
                            return require(e)
                        }).then(n, i)
                    }
                    );
                throw n
            }
        }
        function t(r) {
            return Promise.all(r.map(u))
        }
        var n = {};
        function i(r, e) {
            n[r] = e
        }
        module.exports = exports = e,
        exports.load = t,
        exports.register = i;
        var o = {};
        function u(e) {
            var t;
            if (Array.isArray(e) && (t = e[1],
            e = e[0]),
            o[e])
                return o[e];
            var i = (e.substring(e.lastIndexOf(".") + 1, e.length) || e).toLowerCase()
              , u = n[i];
            return u ? o[e] = u(r() + e).then(function(r) {
                return r && module.bundle.register(t, r),
                r
            }).catch(function(r) {
                throw delete o[e],
                r
            }) : void 0
        }
        function s(r) {
            this.executor = r,
            this.promise = null
        }
        s.prototype.then = function(r, e) {
            return null === this.promise && (this.promise = new Promise(this.executor)),
            this.promise.then(r, e)
        }
        ,
        s.prototype.catch = function(r) {
            return null === this.promise && (this.promise = new Promise(this.executor)),
            this.promise.catch(r)
        }
        ;
    }
    , {
        "./bundle-url": "IC3c"
    }],
    "Jay7": [function(require, module, exports) {
        module.exports = function(n) {
            return new Promise(function(e, o) {
                var r = document.createElement("script");
                r.async = !0,
                r.type = "text/javascript",
                r.charset = "utf-8",
                r.src = n,
                r.onerror = function(n) {
                    r.onerror = r.onload = null,
                    o(n)
                }
                ,
                r.onload = function() {
                    r.onerror = r.onload = null,
                    e()
                }
                ,
                document.getElementsByTagName("head")[0].appendChild(r)
            }
            )
        }
        ;
    }
    , {}],
    0: [function(require, module, exports) {
        var b = require("fiHL");
        b.register("js", require("Jay7"));
        b.load([]).then(function() {
            require("audJ");
        });
    }
    , {}]
}, {}, [0], null)
