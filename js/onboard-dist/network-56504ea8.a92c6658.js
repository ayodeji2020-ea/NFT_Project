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
    "tnX7": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.default = void 0,
        require("regenerator-runtime/runtime");
        var e = require("./onboard-b2a5d97d.js");
        function t(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                r.push.apply(r, n)
            }
            return r
        }
        function r(e) {
            for (var r = 1; r < arguments.length; r++) {
                var o = null != arguments[r] ? arguments[r] : {};
                r % 2 ? t(Object(o), !0).forEach(function(t) {
                    n(e, t, o[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : t(Object(o)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                })
            }
            return e
        }
        function n(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function o(e, t, r, n, o, i, a) {
            try {
                var u = e[i](a)
                  , c = u.value
            } catch (s) {
                return void r(s)
            }
            u.done ? t(c) : Promise.resolve(c).then(n, o)
        }
        function i(e) {
            return function() {
                var t = this
                  , r = arguments;
                return new Promise(function(n, i) {
                    var a = e.apply(t, r);
                    function u(e) {
                        o(a, n, i, u, c, "next", e)
                    }
                    function c(e) {
                        o(a, n, i, u, c, "throw", e)
                    }
                    u(void 0)
                }
                )
            }
        }
        function a() {
            var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, o = n.heading, a = n.description, u = n.icon, c = n.html, s = n.button, l = !1;
            return e.a.subscribe(function(e) {
                var r = e.walletCheckInProgress;
                !1 === t && !0 === r && (l = !1),
                t = r
            }),
            function() {
                var t = i(regeneratorRuntime.mark(function t(n) {
                    var f, p, w, b, d, h, v, g, m;
                    return regeneratorRuntime.wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (f = n.network,
                                p = n.appNetworkId,
                                w = n.walletSelect,
                                b = n.walletCheck,
                                d = n.exit,
                                h = n.stateSyncStatus,
                                v = n.stateStore,
                                g = n.wallet,
                                null !== f) {
                                    t.next = 5;
                                    break
                                }
                                if (!h.network) {
                                    t.next = 5;
                                    break
                                }
                                return t.next = 5,
                                new Promise(function(e) {
                                    h.network && h.network.then(e),
                                    setTimeout(function() {
                                        null === f && e(void 0)
                                    }, 500)
                                }
                                );
                            case 5:
                                if (l || v.network.get() == p || "WalletConnect" === (0,
                                e.f)(null == g ? void 0 : g.provider)) {
                                    t.next = 14;
                                    break
                                }
                                return t.prev = 6,
                                l = !0,
                                t.next = 10,
                                null == g ? void 0 : null === (m = g.provider) || void 0 === m ? void 0 : m.request({
                                    method: "wallet_switchEthereumChain",
                                    params: [{
                                        chainId: "0x" + (null == p ? void 0 : p.toString(16))
                                    }]
                                });
                            case 10:
                                t.next = 14;
                                break;
                            case 12:
                                t.prev = 12,
                                t.t0 = t.catch(6);
                            case 14:
                                if (v.network.get() == p) {
                                    t.next = 16;
                                    break
                                }
                                return t.abrupt("return", {
                                    heading: o || "You Must Change Networks",
                                    description: a || "We've detected that you need to switch your wallet's network from <b>".concat((0,
                                    e.n)(f), "</b> to <b>").concat((0,
                                    e.n)(p), '</b> for this Dapp. <br><br> <i style="font-size: inherit; font-family: inherit;">*Some wallets may not support changing networks. If you can not change networks in your wallet you may consider switching to a different wallet.</i>'),
                                    eventCode: "networkFail",
                                    button: s || {
                                        onclick: function() {
                                            var t = i(regeneratorRuntime.mark(function t() {
                                                var n, o;
                                                return regeneratorRuntime.wrap(function(t) {
                                                    for (; ; )
                                                        switch (t.prev = t.next) {
                                                        case 0:
                                                            return d(!1, {
                                                                switchingWallets: !0
                                                            }),
                                                            t.next = 3,
                                                            w();
                                                        case 3:
                                                            if (n = t.sent,
                                                            t.t0 = n,
                                                            !t.t0) {
                                                                t.next = 9;
                                                                break
                                                            }
                                                            return t.next = 8,
                                                            b();
                                                        case 8:
                                                            t.t0 = t.sent;
                                                        case 9:
                                                            o = t.t0,
                                                            e.a.update(function(e) {
                                                                return r(r({}, e), {}, {
                                                                    switchingWallets: !1,
                                                                    walletCheckCompleted: o
                                                                })
                                                            });
                                                        case 11:
                                                        case "end":
                                                            return t.stop()
                                                        }
                                                }, t)
                                            }));
                                            return function() {
                                                return t.apply(this, arguments)
                                            }
                                        }(),
                                        text: "Switch Wallet"
                                    },
                                    html: c,
                                    icon: u || e.h
                                });
                            case 16:
                            case "end":
                                return t.stop()
                            }
                    }, t, null, [[6, 12]])
                }));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }()
        }
        require("bignumber.js"),
        require("bnc-sdk"),
        require("bowser");
        var u = a;
        exports.default = u;
    }
    , {
        "regenerator-runtime/runtime": "KA2S",
        "./onboard-b2a5d97d.js": "b3Cl",
        "bignumber.js": "LdGf",
        "bnc-sdk": "wAne",
        "bowser": "JSid"
    }]
}, {}, [], null)
