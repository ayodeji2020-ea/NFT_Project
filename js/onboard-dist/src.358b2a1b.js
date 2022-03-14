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
    "lp2z": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.generateRequestId = void 0;
        const e = e=>e.toString(16).padStart(2, "0")
          , t = t=>{
            const r = new Uint8Array((t || 40) / 2);
            return window.crypto.getRandomValues(r),
            Array.from(r, e).join("")
        }
          , r = ()=>"undefined" != typeof window ? t(10) : (new Date).getTime().toString(36);
        exports.generateRequestId = r;
    }
    , {}],
    "ML2V": [function(require, module, exports) {
        module.exports = {
            name: "@gnosis.pm/safe-apps-sdk",
            version: "3.0.0",
            description: "SDK developed to integrate third-party apps with Safe-Multisig app.",
            main: "dist/src/index.js",
            typings: "dist/src/index.d.ts",
            _files: ["dist/**/*", "README.md"],
            keywords: ["Gnosis", "sdk", "apps"],
            scripts: {
                test: "jest",
                "format-dist": "sed -i '' 's/\"files\":/\"_files\":/' dist/package.json",
                build: "yarn rimraf dist && tsc && yarn format-dist",
                format: 'prettier --write "src/**/*.ts"',
                lint: "tslint -p tsconfig.json",
                prepublishOnly: "yarn build"
            },
            author: "Gnosis (https://gnosis.io)",
            license: "MIT",
            dependencies: {},
            devDependencies: {
                "@types/jest": "^26.0.23",
                "@types/node": "^15.3.0",
                husky: "^6.0.0",
                "lint-staged": "^11.0.0",
                prettier: "^2.2.1",
                rimraf: "^3.0.2"
            },
            husky: {
                hooks: {
                    "pre-commit": "lint-staged"
                }
            },
            "lint-staged": {
                "src/**/!(*test).ts": ["yarn lint", "prettier --write"]
            },
            repository: {
                type: "git",
                url: "git+https://github.com/gnosis/safe-apps-sdk.git"
            },
            bugs: {
                url: "https://github.com/gnosis/safe-apps-sdk/issues"
            },
            homepage: "https://github.com/gnosis/safe-apps-sdk#readme"
        };
    }
    , {}],
    "Gzlb": [function(require, module, exports) {
        "use strict";
        var e = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.getSDKVersion = void 0;
        const t = e(require("../package.json"))
          , r = ()=>t.default.version.slice(0, 5);
        exports.getSDKVersion = r;
    }
    , {
        "../package.json": "ML2V"
    }],
    "lESK": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.MessageFormatter = void 0;
        const e = require("./utils")
          , s = require("../utils");
        class r {
        }
        exports.MessageFormatter = r,
        r.makeRequest = ((r,t)=>{
            return {
                id: e.generateRequestId(),
                method: r,
                params: t,
                env: {
                    sdkVersion: s.getSDKVersion()
                }
            }
        }
        ),
        r.makeResponse = ((e,s,r)=>({
            id: e,
            success: !0,
            version: r,
            data: s
        })),
        r.makeErrorResponse = ((e,s,r)=>({
            id: e,
            success: !1,
            error: s,
            version: r
        }));
    }
    , {
        "./utils": "lp2z",
        "../utils": "Gzlb"
    }],
    "csOC": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.METHODS = void 0,
        exports.METHODS = {
            getEnvInfo: "getEnvInfo",
            sendTransactions: "sendTransactions",
            rpcCall: "rpcCall",
            getSafeInfo: "getSafeInfo"
        };
    }
    , {}],
    "zQsh": [function(require, module, exports) {
        "use strict";
        var e = this && this.__createBinding || (Object.create ? function(e, s, t, i) {
            void 0 === i && (i = t),
            Object.defineProperty(e, i, {
                enumerable: !0,
                get: function() {
                    return s[t]
                }
            })
        }
        : function(e, s, t, i) {
            void 0 === i && (i = t),
            e[i] = s[t]
        }
        )
          , s = this && this.__exportStar || function(s, t) {
            for (var i in s)
                "default" === i || Object.prototype.hasOwnProperty.call(t, i) || e(t, s, i)
        }
        ;
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        const t = require("./messageFormatter");
        class i {
            constructor(e=null, s=!1) {
                this.allowedOrigins = null,
                this.callbacks = new Map,
                this.debugMode = !1,
                this.isValidMessage = (({origin: e, data: s, source: t})=>{
                    const i = !s
                      , n = t === window.parent
                      , o = (void 0 !== s.version && parseInt(s.version.split(".")[0])) >= 1;
                    let r = !0;
                    return Array.isArray(this.allowedOrigins) && (r = void 0 !== this.allowedOrigins.find(s=>s.test(e))),
                    !i && n && o && r
                }
                ),
                this.logIncomingMessage = (e=>{
                    console.info(`Safe Apps SDK v1: A message was received from origin ${e.origin}. `, e.data)
                }
                ),
                this.onParentMessage = (e=>{
                    this.isValidMessage(e) && (this.debugMode && this.logIncomingMessage(e),
                    this.handleIncomingMessage(e.data))
                }
                ),
                this.handleIncomingMessage = (e=>{
                    const {id: s} = e
                      , t = this.callbacks.get(s);
                    t && (t(e),
                    this.callbacks.delete(s))
                }
                ),
                this.send = ((e,s)=>{
                    const i = t.MessageFormatter.makeRequest(e, s);
                    if ("undefined" == typeof window)
                        throw new Error("Window doesn't exist");
                    return window.parent.postMessage(i, "*"),
                    new Promise(e=>{
                        this.callbacks.set(i.id, s=>{
                            e(s)
                        }
                        )
                    }
                    )
                }
                ),
                this.allowedOrigins = e,
                this.debugMode = s,
                window.addEventListener("message", this.onParentMessage)
            }
        }
        exports.default = i,
        s(require("./methods"), exports);
    }
    , {
        "./messageFormatter": "lESK",
        "./methods": "csOC"
    }],
    "VZwL": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.TXs = void 0;
        const t = require("../communication/methods");
        class e {
            constructor(t) {
                this.txServiceUrl = null,
                this.communicator = t
            }
            async getBySafeTxHash(t) {
                if (!this.txServiceUrl)
                    throw new Error("ENV information hasn't been synced yet or there was an error during the process");
                const e = new AbortController
                  , r = {
                    method: "GET",
                    signal: e.signal
                };
                setTimeout(()=>e.abort(), 1e4);
                try {
                    const e = await fetch(`${this.txServiceUrl}/transactions/${t}`, r);
                    if (200 !== e.status)
                        throw new Error("Failed to get the transaction. Either safeTxHash is incorrect or transaction hasn't been indexed by the service yet");
                    return await e.json()
                } catch (s) {
                    throw s
                }
            }
            async send({txs: e, params: r}) {
                if (!e || !e.length)
                    throw new Error("No transactions were passed");
                const s = {
                    txs: e,
                    params: r
                }
                  , o = await this.communicator.send(t.METHODS.sendTransactions, s);
                if (!o.success)
                    throw new Error(o.error);
                return o.data
            }
            setTxServiceUrl(t) {
                this.txServiceUrl = t
            }
        }
        exports.TXs = e;
    }
    , {
        "../communication/methods": "csOC"
    }],
    "lAWO": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.RPC_CALLS = void 0,
        exports.RPC_CALLS = {
            eth_call: "eth_call",
            eth_getLogs: "eth_getLogs",
            eth_getBalance: "eth_getBalance",
            eth_getCode: "eth_getCode",
            eth_getBlockByHash: "eth_getBlockByHash",
            eth_getBlockByNumber: "eth_getBlockByNumber",
            eth_getStorageAt: "eth_getStorageAt",
            eth_getTransactionByHash: "eth_getTransactionByHash",
            eth_getTransactionReceipt: "eth_getTransactionReceipt"
        };
    }
    , {}],
    "L7Ea": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.Eth = void 0;
        const t = require("../eth/constants")
          , e = require("../communication/methods")
          , a = {
            defaultBlockParam: (t="latest")=>t,
            returnFullTxObjectParam: (t=!1)=>t,
            blockNumberToHex: t=>Number.isInteger(t) ? `0x${t.toString(16)}` : t
        };
        class l {
            constructor(e) {
                this.communicator = e,
                this.call = this.buildRequest({
                    call: t.RPC_CALLS.eth_call,
                    formatters: [null, a.defaultBlockParam]
                }),
                this.getBalance = this.buildRequest({
                    call: t.RPC_CALLS.eth_getBalance,
                    formatters: [null, a.defaultBlockParam]
                }),
                this.getCode = this.buildRequest({
                    call: t.RPC_CALLS.eth_getCode,
                    formatters: [null, a.defaultBlockParam]
                }),
                this.getStorageAt = this.buildRequest({
                    call: t.RPC_CALLS.eth_getStorageAt,
                    formatters: [null, a.blockNumberToHex, a.defaultBlockParam]
                }),
                this.getPastLogs = this.buildRequest({
                    call: t.RPC_CALLS.eth_getLogs
                }),
                this.getBlockByHash = this.buildRequest({
                    call: t.RPC_CALLS.eth_getBlockByHash,
                    formatters: [null, a.returnFullTxObjectParam]
                }),
                this.getBlockByNumber = this.buildRequest({
                    call: t.RPC_CALLS.eth_getBlockByNumber,
                    formatters: [a.blockNumberToHex, a.returnFullTxObjectParam]
                }),
                this.getTransactionByHash = this.buildRequest({
                    call: t.RPC_CALLS.eth_getTransactionByHash
                }),
                this.getTransactionReceipt = this.buildRequest({
                    call: t.RPC_CALLS.eth_getTransactionReceipt
                })
            }
            buildRequest({call: t, formatters: a}) {
                return async l=>{
                    a && Array.isArray(l) && a.forEach((t,e)=>{
                        t && (l[e] = t(l[e]))
                    }
                    );
                    const r = {
                        call: t,
                        params: l
                    }
                      , s = await this.communicator.send(e.METHODS.rpcCall, r);
                    if (!s.success)
                        throw new Error(s.error);
                    return s.data
                }
            }
        }
        exports.Eth = l;
    }
    , {
        "../eth/constants": "lAWO",
        "../communication/methods": "csOC"
    }],
    "ThoU": [function(require, module, exports) {
        "use strict";
        var t = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        ;
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        const e = require("./communication")
          , r = t(require("./communication"))
          , i = require("./txs")
          , o = require("./eth");
        class n {
            constructor(t={}) {
                if ("undefined" == typeof window)
                    throw new Error("Error initializing the sdk: window is undefined");
                const {whitelistedDomains: e=null, debug: n=!1} = t;
                this.communicator = new r.default(e,n),
                this.eth = new o.Eth(this.communicator),
                this.txs = new i.TXs(this.communicator),
                this.bootstrap()
            }
            async bootstrap() {
                const {txServiceUrl: t} = await this.getEnvInfo();
                this.txs.setTxServiceUrl(t)
            }
            async getEnvInfo() {
                const t = await this.communicator.send(e.METHODS.getEnvInfo, void 0);
                if (!t.success)
                    throw new Error(t.error);
                return t.data
            }
            async getSafeInfo() {
                const t = await this.communicator.send(e.METHODS.getSafeInfo, void 0);
                if (!t.success)
                    throw new Error(t.error);
                return t.data
            }
        }
        exports.default = n;
    }
    , {
        "./communication": "zQsh",
        "./txs": "VZwL",
        "./eth": "L7Ea"
    }],
    "ppnA": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.SettingsChangeMethods = exports.TransferMethods = exports.Operation = void 0;
        const e = require("./communication/methods");
        var r, o, t;
        !function(e) {
            e[e.CALL = 0] = "CALL",
            e[e.DELEGATE_CALL = 1] = "DELEGATE_CALL",
            e[e.CREATE = 2] = "CREATE"
        }(r = exports.Operation || (exports.Operation = {})),
        function(e) {
            e.TRANSFER = "transfer",
            e.TRANSFER_FROM = "transferFrom",
            e.SAFE_TRANSFER_FROM = "safeTransferFrom"
        }(o = exports.TransferMethods || (exports.TransferMethods = {})),
        function(e) {
            e.SETUP = "setup",
            e.SET_FALLBACK_HANDLER = "setFallbackHandler",
            e.ADD_OWNER_WITH_THRESHOLD = "addOwnerWithThreshold",
            e.REMOVE_OWNER = "removeOwner",
            e.REMOVE_OWNER_WITH_THRESHOLD = "removeOwnerWithThreshold",
            e.SWAP_OWNER = "swapOwner",
            e.CHANGE_THRESHOLD = "changeThreshold",
            e.CHANGE_MASTER_COPY = "changeMasterCopy",
            e.ENABLE_MODULE = "enableModule",
            e.DISABLE_MODULE = "disableModule",
            e.EXEC_TRANSACTION_FROM_MODULE = "execTransactionFromModule",
            e.APPROVE_HASH = "approveHash",
            e.EXEC_TRANSACTION = "execTransaction"
        }(t = exports.SettingsChangeMethods || (exports.SettingsChangeMethods = {}));
    }
    , {
        "./communication/methods": "csOC"
    }],
    "kVpi": [function(require, module, exports) {
        "use strict";
        var e = this && this.__createBinding || (Object.create ? function(e, t, r, o) {
            void 0 === o && (o = r),
            Object.defineProperty(e, o, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        }
        : function(e, t, r, o) {
            void 0 === o && (o = r),
            e[o] = t[r]
        }
        )
          , t = this && this.__exportStar || function(t, r) {
            for (var o in t)
                "default" === o || Object.prototype.hasOwnProperty.call(r, o) || e(r, t, o)
        }
          , r = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.getSDKVersion = void 0;
        const o = r(require("./sdk"));
        exports.default = o.default,
        t(require("./sdk"), exports),
        t(require("./types"), exports),
        t(require("./communication/methods"), exports),
        t(require("./communication/messageFormatter"), exports);
        var i = require("./utils");
        Object.defineProperty(exports, "getSDKVersion", {
            enumerable: !0,
            get: function() {
                return i.getSDKVersion
            }
        });
    }
    , {
        "./sdk": "ThoU",
        "./types": "ppnA",
        "./communication/methods": "csOC",
        "./communication/messageFormatter": "lESK",
        "./utils": "Gzlb"
    }]
}, {}, ["kVpi"], null)
