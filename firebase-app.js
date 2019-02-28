! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.firebase = e()
}(this, function() {
    "use strict";
    ! function(t) {
        if (!t.fetch) {
            var e = {
                searchParams: "URLSearchParams" in t,
                iterable: "Symbol" in t && "iterator" in Symbol,
                blob: "FileReader" in t && "Blob" in t && function() {
                    try {
                        return new Blob, !0
                    } catch (t) {
                        return !1
                    }
                }(),
                formData: "FormData" in t,
                arrayBuffer: "ArrayBuffer" in t
            };
            if (e.arrayBuffer) var r = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                n = function(t) {
                    return t && DataView.prototype.isPrototypeOf(t)
                },
                o = ArrayBuffer.isView || function(t) {
                    return t && r.indexOf(Object.prototype.toString.call(t)) > -1
                };
            f.prototype.append = function(t, e) {
                t = a(t), e = u(e);
                var r = this.map[t];
                this.map[t] = r ? r + "," + e : e
            }, f.prototype.delete = function(t) {
                delete this.map[a(t)]
            }, f.prototype.get = function(t) {
                return t = a(t), this.has(t) ? this.map[t] : null
            }, f.prototype.has = function(t) {
                return this.map.hasOwnProperty(a(t))
            }, f.prototype.set = function(t, e) {
                this.map[a(t)] = u(e)
            }, f.prototype.forEach = function(t, e) {
                for (var r in this.map) this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this)
            }, f.prototype.keys = function() {
                var t = [];
                return this.forEach(function(e, r) {
                    t.push(r)
                }), c(t)
            }, f.prototype.values = function() {
                var t = [];
                return this.forEach(function(e) {
                    t.push(e)
                }), c(t)
            }, f.prototype.entries = function() {
                var t = [];
                return this.forEach(function(e, r) {
                    t.push([r, e])
                }), c(t)
            }, e.iterable && (f.prototype[Symbol.iterator] = f.prototype.entries);
            var i = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            v.prototype.clone = function() {
                return new v(this, {
                    body: this._bodyInit
                })
            }, y.call(v.prototype), y.call(m.prototype), m.prototype.clone = function() {
                return new m(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new f(this.headers),
                    url: this.url
                })
            }, m.error = function() {
                var t = new m(null, {
                    status: 0,
                    statusText: ""
                });
                return t.type = "error", t
            };
            var s = [301, 302, 303, 307, 308];
            m.redirect = function(t, e) {
                if (-1 === s.indexOf(e)) throw new RangeError("Invalid status code");
                return new m(null, {
                    status: e,
                    headers: {
                        location: t
                    }
                })
            }, t.Headers = f, t.Request = v, t.Response = m, t.fetch = function(t, r) {
                return new Promise(function(n, o) {
                    var i = new v(t, r),
                        s = new XMLHttpRequest;
                    s.onload = function() {
                        var t, e, r = {
                            status: s.status,
                            statusText: s.statusText,
                            headers: (t = s.getAllResponseHeaders() || "", e = new f, t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(t) {
                                var r = t.split(":"),
                                    n = r.shift().trim();
                                if (n) {
                                    var o = r.join(":").trim();
                                    e.append(n, o)
                                }
                            }), e)
                        };
                        r.url = "responseURL" in s ? s.responseURL : r.headers.get("X-Request-URL");
                        var o = "response" in s ? s.response : s.responseText;
                        n(new m(o, r))
                    }, s.onerror = function() {
                        o(new TypeError("Network request failed"))
                    }, s.ontimeout = function() {
                        o(new TypeError("Network request failed"))
                    }, s.open(i.method, i.url, !0), "include" === i.credentials ? s.withCredentials = !0 : "omit" === i.credentials && (s.withCredentials = !1), "responseType" in s && e.blob && (s.responseType = "blob"), i.headers.forEach(function(t, e) {
                        s.setRequestHeader(e, t)
                    }), s.send(void 0 === i._bodyInit ? null : i._bodyInit)
                })
            }, t.fetch.polyfill = !0
        }

        function a(t) {
            if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
            return t.toLowerCase()
        }

        function u(t) {
            return "string" != typeof t && (t = String(t)), t
        }

        function c(t) {
            var r = {
                next: function() {
                    var e = t.shift();
                    return {
                        done: void 0 === e,
                        value: e
                    }
                }
            };
            return e.iterable && (r[Symbol.iterator] = function() {
                return r
            }), r
        }

        function f(t) {
            this.map = {}, t instanceof f ? t.forEach(function(t, e) {
                this.append(e, t)
            }, this) : Array.isArray(t) ? t.forEach(function(t) {
                this.append(t[0], t[1])
            }, this) : t && Object.getOwnPropertyNames(t).forEach(function(e) {
                this.append(e, t[e])
            }, this)
        }

        function h(t) {
            if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
            t.bodyUsed = !0
        }

        function l(t) {
            return new Promise(function(e, r) {
                t.onload = function() {
                    e(t.result)
                }, t.onerror = function() {
                    r(t.error)
                }
            })
        }

        function p(t) {
            var e = new FileReader,
                r = l(e);
            return e.readAsArrayBuffer(t), r
        }

        function d(t) {
            if (t.slice) return t.slice(0);
            var e = new Uint8Array(t.byteLength);
            return e.set(new Uint8Array(t)), e.buffer
        }

        function y() {
            return this.bodyUsed = !1, this._initBody = function(t) {
                if (this._bodyInit = t, t)
                    if ("string" == typeof t) this._bodyText = t;
                    else if (e.blob && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;
                else if (e.formData && FormData.prototype.isPrototypeOf(t)) this._bodyFormData = t;
                else if (e.searchParams && URLSearchParams.prototype.isPrototypeOf(t)) this._bodyText = t.toString();
                else if (e.arrayBuffer && e.blob && n(t)) this._bodyArrayBuffer = d(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);
                else {
                    if (!e.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(t) && !o(t)) throw new Error("unsupported BodyInit type");
                    this._bodyArrayBuffer = d(t)
                } else this._bodyText = "";
                this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : e.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            }, e.blob && (this.blob = function() {
                var t = h(this);
                if (t) return t;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]))
            }, this.arrayBuffer = function() {
                return this._bodyArrayBuffer ? h(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(p)
            }), this.text = function() {
                var t, e, r, n = h(this);
                if (n) return n;
                if (this._bodyBlob) return t = this._bodyBlob, e = new FileReader, r = l(e), e.readAsText(t), r;
                if (this._bodyArrayBuffer) return Promise.resolve(function(t) {
                    for (var e = new Uint8Array(t), r = new Array(e.length), n = 0; n < e.length; n++) r[n] = String.fromCharCode(e[n]);
                    return r.join("")
                }(this._bodyArrayBuffer));
                if (this._bodyFormData) throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText)
            }, e.formData && (this.formData = function() {
                return this.text().then(b)
            }), this.json = function() {
                return this.text().then(JSON.parse)
            }, this
        }

        function v(t, e) {
            var r, n, o = (e = e || {}).body;
            if (t instanceof v) {
                if (t.bodyUsed) throw new TypeError("Already read");
                this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new f(t.headers)), this.method = t.method, this.mode = t.mode, o || null == t._bodyInit || (o = t._bodyInit, t.bodyUsed = !0)
            } else this.url = String(t);
            if (this.credentials = e.credentials || this.credentials || "omit", !e.headers && this.headers || (this.headers = new f(e.headers)), this.method = (r = e.method || this.method || "GET", n = r.toUpperCase(), i.indexOf(n) > -1 ? n : r), this.mode = e.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && o) throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(o)
        }

        function b(t) {
            var e = new FormData;
            return t.trim().split("&").forEach(function(t) {
                if (t) {
                    var r = t.split("="),
                        n = r.shift().replace(/\+/g, " "),
                        o = r.join("=").replace(/\+/g, " ");
                    e.append(decodeURIComponent(n), decodeURIComponent(o))
                }
            }), e
        }

        function m(t, e) {
            e || (e = {}), this.type = "default", this.status = void 0 === e.status ? 200 : e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new f(e.headers), this.url = e.url || "", this._initBody(t)
        }
    }("undefined" != typeof self ? self : void 0);
    var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function e(t, e) {
        return t(e = {
            exports: {}
        }, e.exports), e.exports
    }
    var r = setTimeout;

    function n() {}

    function o(t) {
        if (!(this instanceof o)) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof t) throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], c(t, this)
    }

    function i(t, e) {
        for (; 3 === t._state;) t = t._value;
        0 !== t._state ? (t._handled = !0, o._immediateFn(function() {
            var r = 1 === t._state ? e.onFulfilled : e.onRejected;
            if (null !== r) {
                var n;
                try {
                    n = r(t._value)
                } catch (t) {
                    return void a(e.promise, t)
                }
                s(e.promise, n)
            } else(1 === t._state ? s : a)(e.promise, t._value)
        })) : t._deferreds.push(e)
    }

    function s(t, e) {
        try {
            if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
            if (e && ("object" == typeof e || "function" == typeof e)) {
                var r = e.then;
                if (e instanceof o) return t._state = 3, t._value = e, void u(t);
                if ("function" == typeof r) return void c((n = r, i = e, function() {
                    n.apply(i, arguments)
                }), t)
            }
            t._state = 1, t._value = e, u(t)
        } catch (e) {
            a(t, e)
        }
        var n, i
    }

    function a(t, e) {
        t._state = 2, t._value = e, u(t)
    }

    function u(t) {
        2 === t._state && 0 === t._deferreds.length && o._immediateFn(function() {
            t._handled || o._unhandledRejectionFn(t._value)
        });
        for (var e = 0, r = t._deferreds.length; e < r; e++) i(t, t._deferreds[e]);
        t._deferreds = null
    }

    function c(t, e) {
        var r = !1;
        try {
            t(function(t) {
                r || (r = !0, s(e, t))
            }, function(t) {
                r || (r = !0, a(e, t))
            })
        } catch (t) {
            if (r) return;
            r = !0, a(e, t)
        }
    }
    o.prototype.catch = function(t) {
        return this.then(null, t)
    }, o.prototype.then = function(t, e) {
        var r = new this.constructor(n);
        return i(this, new function(t, e, r) {
            this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = r
        }(t, e, r)), r
    }, o.prototype.finally = function(t) {
        var e = this.constructor;
        return this.then(function(r) {
            return e.resolve(t()).then(function() {
                return r
            })
        }, function(r) {
            return e.resolve(t()).then(function() {
                return e.reject(r)
            })
        })
    }, o.all = function(t) {
        return new o(function(e, r) {
            if (!t || void 0 === t.length) throw new TypeError("Promise.all accepts an array");
            var n = Array.prototype.slice.call(t);
            if (0 === n.length) return e([]);
            var o = n.length;

            function i(t, s) {
                try {
                    if (s && ("object" == typeof s || "function" == typeof s)) {
                        var a = s.then;
                        if ("function" == typeof a) return void a.call(s, function(e) {
                            i(t, e)
                        }, r)
                    }
                    n[t] = s, 0 == --o && e(n)
                } catch (t) {
                    r(t)
                }
            }
            for (var s = 0; s < n.length; s++) i(s, n[s])
        })
    }, o.resolve = function(t) {
        return t && "object" == typeof t && t.constructor === o ? t : new o(function(e) {
            e(t)
        })
    }, o.reject = function(t) {
        return new o(function(e, r) {
            r(t)
        })
    }, o.race = function(t) {
        return new o(function(e, r) {
            for (var n = 0, o = t.length; n < o; n++) t[n].then(e, r)
        })
    }, o._immediateFn = "function" == typeof setImmediate && function(t) {
        setImmediate(t)
    } || function(t) {
        r(t, 0)
    }, o._unhandledRejectionFn = function(t) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
    };
    var f = function() {
        if ("undefined" != typeof self) return self;
        if ("undefined" != typeof window) return window;
        if (void 0 !== t) return t;
        throw new Error("unable to locate global object")
    }();
    f.Promise || (f.Promise = o);
    var h = e(function(t) {
            var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            "number" == typeof __g && (__g = e)
        }),
        l = e(function(t) {
            var e = t.exports = {
                version: "2.5.5"
            };
            "number" == typeof __e && (__e = e)
        }),
        p = (l.version, function(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }),
        d = function(t) {
            if (!p(t)) throw TypeError(t + " is not an object!");
            return t
        },
        y = function(t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        },
        v = !y(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        }),
        b = h.document,
        m = p(b) && p(b.createElement),
        _ = function(t) {
            return m ? b.createElement(t) : {}
        },
        g = !v && !y(function() {
            return 7 != Object.defineProperty(_("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        }),
        w = function(t, e) {
            if (!p(t)) return t;
            var r, n;
            if (e && "function" == typeof(r = t.toString) && !p(n = r.call(t))) return n;
            if ("function" == typeof(r = t.valueOf) && !p(n = r.call(t))) return n;
            if (!e && "function" == typeof(r = t.toString) && !p(n = r.call(t))) return n;
            throw TypeError("Can't convert object to primitive value")
        },
        O = Object.defineProperty,
        S = {
            f: v ? Object.defineProperty : function(t, e, r) {
                if (d(t), e = w(e, !0), d(r), g) try {
                    return O(t, e, r)
                } catch (t) {}
                if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
                return "value" in r && (t[e] = r.value), t
            }
        },
        E = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        },
        A = v ? function(t, e, r) {
            return S.f(t, e, E(1, r))
        } : function(t, e, r) {
            return t[e] = r, t
        },
        j = {}.hasOwnProperty,
        P = function(t, e) {
            return j.call(t, e)
        },
        T = 0,
        k = Math.random(),
        x = function(t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++T + k).toString(36))
        },
        F = e(function(t) {
            var e = x("src"),
                r = Function.toString,
                n = ("" + r).split("toString");
            l.inspectSource = function(t) {
                return r.call(t)
            }, (t.exports = function(t, r, o, i) {
                var s = "function" == typeof o;
                s && (P(o, "name") || A(o, "name", r)), t[r] !== o && (s && (P(o, e) || A(o, e, t[r] ? "" + t[r] : n.join(String(r)))), t === h ? t[r] = o : i ? t[r] ? t[r] = o : A(t, r, o) : (delete t[r], A(t, r, o)))
            })(Function.prototype, "toString", function() {
                return "function" == typeof this && this[e] || r.call(this)
            })
        }),
        L = function(t, e, r) {
            if (function(t) {
                    if ("function" != typeof t) throw TypeError(t + " is not a function!")
                }(t), void 0 === e) return t;
            switch (r) {
                case 1:
                    return function(r) {
                        return t.call(e, r)
                    };
                case 2:
                    return function(r, n) {
                        return t.call(e, r, n)
                    };
                case 3:
                    return function(r, n, o) {
                        return t.call(e, r, n, o)
                    }
            }
            return function() {
                return t.apply(e, arguments)
            }
        },
        N = function(t, e, r) {
            var n, o, i, s, a = t & N.F,
                u = t & N.G,
                c = t & N.S,
                f = t & N.P,
                p = t & N.B,
                d = u ? h : c ? h[e] || (h[e] = {}) : (h[e] || {}).prototype,
                y = u ? l : l[e] || (l[e] = {}),
                v = y.prototype || (y.prototype = {});
            for (n in u && (r = e), r) i = ((o = !a && d && void 0 !== d[n]) ? d : r)[n], s = p && o ? L(i, h) : f && "function" == typeof i ? L(Function.call, i) : i, d && F(d, n, i, t & N.U), y[n] != i && A(y, n, s), f && v[n] != i && (v[n] = i)
        };
    h.core = l, N.F = 1, N.G = 2, N.S = 4, N.P = 8, N.B = 16, N.W = 32, N.U = 64, N.R = 128;
    var D = N,
        I = {}.toString,
        R = function(t) {
            return I.call(t).slice(8, -1)
        },
        B = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
            return "String" == R(t) ? t.split("") : Object(t)
        },
        C = function(t) {
            if (void 0 == t) throw TypeError("Can't call method on  " + t);
            return t
        },
        U = function(t) {
            return Object(C(t))
        },
        M = Math.ceil,
        z = Math.floor,
        G = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? z : M)(t)
        },
        W = Math.min,
        H = function(t) {
            return t > 0 ? W(G(t), 9007199254740991) : 0
        },
        V = Array.isArray || function(t) {
            return "Array" == R(t)
        },
        q = h["__core-js_shared__"] || (h["__core-js_shared__"] = {}),
        K = function(t) {
            return q[t] || (q[t] = {})
        },
        $ = e(function(t) {
            var e = K("wks"),
                r = h.Symbol,
                n = "function" == typeof r;
            (t.exports = function(t) {
                return e[t] || (e[t] = n && r[t] || (n ? r : x)("Symbol." + t))
            }).store = e
        }),
        J = $("species"),
        Y = function(t, e) {
            return new(function(t) {
                var e;
                return V(t) && ("function" != typeof(e = t.constructor) || e !== Array && !V(e.prototype) || (e = void 0), p(e) && null === (e = e[J]) && (e = void 0)), void 0 === e ? Array : e
            }(t))(e)
        },
        X = function(t, e) {
            var r = 1 == t,
                n = 2 == t,
                o = 3 == t,
                i = 4 == t,
                s = 6 == t,
                a = 5 == t || s,
                u = e || Y;
            return function(e, c, f) {
                for (var h, l, p = U(e), d = B(p), y = L(c, f, 3), v = H(d.length), b = 0, m = r ? u(e, v) : n ? u(e, 0) : void 0; v > b; b++)
                    if ((a || b in d) && (l = y(h = d[b], b, p), t))
                        if (r) m[b] = l;
                        else if (l) switch (t) {
                    case 3:
                        return !0;
                    case 5:
                        return h;
                    case 6:
                        return b;
                    case 2:
                        m.push(h)
                } else if (i) return !1;
                return s ? -1 : o || i ? i : m
            }
        },
        Q = $("unscopables"),
        Z = Array.prototype;
    void 0 == Z[Q] && A(Z, Q, {});
    var tt = function(t) {
            Z[Q][t] = !0
        },
        et = X(5),
        rt = !0;
    "find" in [] && Array(1).find(function() {
        rt = !1
    }), D(D.P + D.F * rt, "Array", {
        find: function(t) {
            return et(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), tt("find");
    l.Array.find;
    var nt = X(6),
        ot = !0;
    "findIndex" in [] && Array(1).findIndex(function() {
        ot = !1
    }), D(D.P + D.F * ot, "Array", {
        findIndex: function(t) {
            return nt(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), tt("findIndex");
    l.Array.findIndex;
    var it, st = function(t) {
            return B(C(t))
        },
        at = Math.max,
        ut = Math.min,
        ct = K("keys"),
        ft = function(t) {
            return ct[t] || (ct[t] = x(t))
        },
        ht = (it = !1, function(t, e, r) {
            var n, o = st(t),
                i = H(o.length),
                s = function(t, e) {
                    return (t = G(t)) < 0 ? at(t + e, 0) : ut(t, e)
                }(r, i);
            if (it && e != e) {
                for (; i > s;)
                    if ((n = o[s++]) != n) return !0
            } else
                for (; i > s; s++)
                    if ((it || s in o) && o[s] === e) return it || s || 0; return !it && -1
        }),
        lt = ft("IE_PROTO"),
        pt = function(t, e) {
            var r, n = st(t),
                o = 0,
                i = [];
            for (r in n) r != lt && P(n, r) && i.push(r);
            for (; e.length > o;) P(n, r = e[o++]) && (~ht(i, r) || i.push(r));
            return i
        },
        dt = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),
        yt = Object.keys || function(t) {
            return pt(t, dt)
        },
        vt = {
            f: Object.getOwnPropertySymbols
        },
        bt = {
            f: {}.propertyIsEnumerable
        },
        mt = Object.assign,
        _t = !mt || y(function() {
            var t = {},
                e = {},
                r = Symbol(),
                n = "abcdefghijklmnopqrst";
            return t[r] = 7, n.split("").forEach(function(t) {
                e[t] = t
            }), 7 != mt({}, t)[r] || Object.keys(mt({}, e)).join("") != n
        }) ? function(t, e) {
            for (var r = U(t), n = arguments.length, o = 1, i = vt.f, s = bt.f; n > o;)
                for (var a, u = B(arguments[o++]), c = i ? yt(u).concat(i(u)) : yt(u), f = c.length, h = 0; f > h;) s.call(u, a = c[h++]) && (r[a] = u[a]);
            return r
        } : mt;
    D(D.S + D.F, "Object", {
        assign: _t
    });
    l.Object.assign;
    var gt = $("match"),
        wt = function(t, e, r) {
            if (p(n = e) && (void 0 !== (o = n[gt]) ? o : "RegExp" == R(n))) throw TypeError("String#" + r + " doesn't accept regex!");
            var n, o;
            return String(C(t))
        },
        Ot = $("match"),
        St = "".startsWith;
    D(D.P + D.F * function(t) {
        var e = /./;
        try {
            "/./" [t](e)
        } catch (r) {
            try {
                return e[Ot] = !1, !"/./" [t](e)
            } catch (t) {}
        }
        return !0
    }("startsWith"), "String", {
        startsWith: function(t) {
            var e = wt(this, t, "startsWith"),
                r = H(Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length)),
                n = String(t);
            return St ? St.call(e, n, r) : e.slice(r, r + n.length) === n
        }
    });
    l.String.startsWith;
    D(D.P, "String", {
        repeat: function(t) {
            var e = String(C(this)),
                r = "",
                n = G(t);
            if (n < 0 || n == 1 / 0) throw RangeError("Count can't be negative");
            for (; n > 0;
                (n >>>= 1) && (e += e)) 1 & n && (r += e);
            return r
        }
    });
    l.String.repeat;
    var Et = e(function(t) {
            var e = x("meta"),
                r = S.f,
                n = 0,
                o = Object.isExtensible || function() {
                    return !0
                },
                i = !y(function() {
                    return o(Object.preventExtensions({}))
                }),
                s = function(t) {
                    r(t, e, {
                        value: {
                            i: "O" + ++n,
                            w: {}
                        }
                    })
                },
                a = t.exports = {
                    KEY: e,
                    NEED: !1,
                    fastKey: function(t, r) {
                        if (!p(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                        if (!P(t, e)) {
                            if (!o(t)) return "F";
                            if (!r) return "E";
                            s(t)
                        }
                        return t[e].i
                    },
                    getWeak: function(t, r) {
                        if (!P(t, e)) {
                            if (!o(t)) return !0;
                            if (!r) return !1;
                            s(t)
                        }
                        return t[e].w
                    },
                    onFreeze: function(t) {
                        return i && a.NEED && o(t) && !P(t, e) && s(t), t
                    }
                }
        }),
        At = (Et.KEY, Et.NEED, Et.fastKey, Et.getWeak, Et.onFreeze, S.f),
        jt = $("toStringTag"),
        Pt = function(t, e, r) {
            t && !P(t = r ? t : t.prototype, jt) && At(t, jt, {
                configurable: !0,
                value: e
            })
        },
        Tt = {
            f: $
        },
        kt = S.f,
        xt = function(t) {
            var e = l.Symbol || (l.Symbol = h.Symbol || {});
            "_" == t.charAt(0) || t in e || kt(e, t, {
                value: Tt.f(t)
            })
        },
        Ft = v ? Object.defineProperties : function(t, e) {
            d(t);
            for (var r, n = yt(e), o = n.length, i = 0; o > i;) S.f(t, r = n[i++], e[r]);
            return t
        },
        Lt = h.document,
        Nt = Lt && Lt.documentElement,
        Dt = ft("IE_PROTO"),
        It = function() {},
        Rt = function() {
            var t, e = _("iframe"),
                r = dt.length;
            for (e.style.display = "none", Nt.appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), Rt = t.F; r--;) delete Rt.prototype[dt[r]];
            return Rt()
        },
        Bt = Object.create || function(t, e) {
            var r;
            return null !== t ? (It.prototype = d(t), r = new It, It.prototype = null, r[Dt] = t) : r = Rt(), void 0 === e ? r : Ft(r, e)
        },
        Ct = dt.concat("length", "prototype"),
        Ut = {
            f: Object.getOwnPropertyNames || function(t) {
                return pt(t, Ct)
            }
        },
        Mt = Ut.f,
        zt = {}.toString,
        Gt = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        Wt = {
            f: function(t) {
                return Gt && "[object Window]" == zt.call(t) ? function(t) {
                    try {
                        return Mt(t)
                    } catch (t) {
                        return Gt.slice()
                    }
                }(t) : Mt(st(t))
            }
        },
        Ht = Object.getOwnPropertyDescriptor,
        Vt = {
            f: v ? Ht : function(t, e) {
                if (t = st(t), e = w(e, !0), g) try {
                    return Ht(t, e)
                } catch (t) {}
                if (P(t, e)) return E(!bt.f.call(t, e), t[e])
            }
        },
        qt = Et.KEY,
        Kt = Vt.f,
        $t = S.f,
        Jt = Wt.f,
        Yt = h.Symbol,
        Xt = h.JSON,
        Qt = Xt && Xt.stringify,
        Zt = $("_hidden"),
        te = $("toPrimitive"),
        ee = {}.propertyIsEnumerable,
        re = K("symbol-registry"),
        ne = K("symbols"),
        oe = K("op-symbols"),
        ie = Object.prototype,
        se = "function" == typeof Yt,
        ae = h.QObject,
        ue = !ae || !ae.prototype || !ae.prototype.findChild,
        ce = v && y(function() {
            return 7 != Bt($t({}, "a", {
                get: function() {
                    return $t(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }) ? function(t, e, r) {
            var n = Kt(ie, e);
            n && delete ie[e], $t(t, e, r), n && t !== ie && $t(ie, e, n)
        } : $t,
        fe = function(t) {
            var e = ne[t] = Bt(Yt.prototype);
            return e._k = t, e
        },
        he = se && "symbol" == typeof Yt.iterator ? function(t) {
            return "symbol" == typeof t
        } : function(t) {
            return t instanceof Yt
        },
        le = function(t, e, r) {
            return t === ie && le(oe, e, r), d(t), e = w(e, !0), d(r), P(ne, e) ? (r.enumerable ? (P(t, Zt) && t[Zt][e] && (t[Zt][e] = !1), r = Bt(r, {
                enumerable: E(0, !1)
            })) : (P(t, Zt) || $t(t, Zt, E(1, {})), t[Zt][e] = !0), ce(t, e, r)) : $t(t, e, r)
        },
        pe = function(t, e) {
            d(t);
            for (var r, n = function(t) {
                    var e = yt(t),
                        r = vt.f;
                    if (r)
                        for (var n, o = r(t), i = bt.f, s = 0; o.length > s;) i.call(t, n = o[s++]) && e.push(n);
                    return e
                }(e = st(e)), o = 0, i = n.length; i > o;) le(t, r = n[o++], e[r]);
            return t
        },
        de = function(t) {
            var e = ee.call(this, t = w(t, !0));
            return !(this === ie && P(ne, t) && !P(oe, t)) && (!(e || !P(this, t) || !P(ne, t) || P(this, Zt) && this[Zt][t]) || e)
        },
        ye = function(t, e) {
            if (t = st(t), e = w(e, !0), t !== ie || !P(ne, e) || P(oe, e)) {
                var r = Kt(t, e);
                return !r || !P(ne, e) || P(t, Zt) && t[Zt][e] || (r.enumerable = !0), r
            }
        },
        ve = function(t) {
            for (var e, r = Jt(st(t)), n = [], o = 0; r.length > o;) P(ne, e = r[o++]) || e == Zt || e == qt || n.push(e);
            return n
        },
        be = function(t) {
            for (var e, r = t === ie, n = Jt(r ? oe : st(t)), o = [], i = 0; n.length > i;) !P(ne, e = n[i++]) || r && !P(ie, e) || o.push(ne[e]);
            return o
        };
    se || (F((Yt = function() {
        if (this instanceof Yt) throw TypeError("Symbol is not a constructor!");
        var t = x(arguments.length > 0 ? arguments[0] : void 0),
            e = function(r) {
                this === ie && e.call(oe, r), P(this, Zt) && P(this[Zt], t) && (this[Zt][t] = !1), ce(this, t, E(1, r))
            };
        return v && ue && ce(ie, t, {
            configurable: !0,
            set: e
        }), fe(t)
    }).prototype, "toString", function() {
        return this._k
    }), Vt.f = ye, S.f = le, Ut.f = Wt.f = ve, bt.f = de, vt.f = be, v && F(ie, "propertyIsEnumerable", de, !0), Tt.f = function(t) {
        return fe($(t))
    }), D(D.G + D.W + D.F * !se, {
        Symbol: Yt
    });
    for (var me = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), _e = 0; me.length > _e;) $(me[_e++]);
    for (var ge = yt($.store), we = 0; ge.length > we;) xt(ge[we++]);
    D(D.S + D.F * !se, "Symbol", {
        for: function(t) {
            return P(re, t += "") ? re[t] : re[t] = Yt(t)
        },
        keyFor: function(t) {
            if (!he(t)) throw TypeError(t + " is not a symbol!");
            for (var e in re)
                if (re[e] === t) return e
        },
        useSetter: function() {
            ue = !0
        },
        useSimple: function() {
            ue = !1
        }
    }), D(D.S + D.F * !se, "Object", {
        create: function(t, e) {
            return void 0 === e ? Bt(t) : pe(Bt(t), e)
        },
        defineProperty: le,
        defineProperties: pe,
        getOwnPropertyDescriptor: ye,
        getOwnPropertyNames: ve,
        getOwnPropertySymbols: be
    }), Xt && D(D.S + D.F * (!se || y(function() {
        var t = Yt();
        return "[null]" != Qt([t]) || "{}" != Qt({
            a: t
        }) || "{}" != Qt(Object(t))
    })), "JSON", {
        stringify: function(t) {
            for (var e, r, n = [t], o = 1; arguments.length > o;) n.push(arguments[o++]);
            if (r = e = n[1], (p(e) || void 0 !== t) && !he(t)) return V(e) || (e = function(t, e) {
                if ("function" == typeof r && (e = r.call(this, t, e)), !he(e)) return e
            }), n[1] = e, Qt.apply(Xt, n)
        }
    }), Yt.prototype[te] || A(Yt.prototype, te, Yt.prototype.valueOf), Pt(Yt, "Symbol"), Pt(Math, "Math", !0), Pt(h.JSON, "JSON", !0);
    var Oe = $("toStringTag"),
        Se = "Arguments" == R(function() {
            return arguments
        }()),
        Ee = {};
    Ee[$("toStringTag")] = "z", Ee + "" != "[object z]" && F(Object.prototype, "toString", function() {
        return "[object " + (void 0 === (t = this) ? "Undefined" : null === t ? "Null" : "string" == typeof(r = function(t, e) {
            try {
                return t[e]
            } catch (t) {}
        }(e = Object(t), Oe)) ? r : Se ? R(e) : "Object" == (n = R(e)) && "function" == typeof e.callee ? "Arguments" : n) + "]";
        var t, e, r, n
    }, !0), xt("asyncIterator"), xt("observable");
    l.Symbol;
    var Ae = {},
        je = {};
    A(je, $("iterator"), function() {
        return this
    });
    var Pe, Te = function(t, e, r) {
            t.prototype = Bt(je, {
                next: E(1, r)
            }), Pt(t, e + " Iterator")
        },
        ke = ft("IE_PROTO"),
        xe = Object.prototype,
        Fe = Object.getPrototypeOf || function(t) {
            return t = U(t), P(t, ke) ? t[ke] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? xe : null
        },
        Le = $("iterator"),
        Ne = !([].keys && "next" in [].keys()),
        De = function() {
            return this
        },
        Ie = function(t, e, r, n, o, i, s) {
            Te(r, e, n);
            var a, u, c, f = function(t) {
                    if (!Ne && t in d) return d[t];
                    switch (t) {
                        case "keys":
                        case "values":
                            return function() {
                                return new r(this, t)
                            }
                    }
                    return function() {
                        return new r(this, t)
                    }
                },
                h = e + " Iterator",
                l = "values" == o,
                p = !1,
                d = t.prototype,
                y = d[Le] || d["@@iterator"] || o && d[o],
                v = y || f(o),
                b = o ? l ? f("entries") : v : void 0,
                m = "Array" == e && d.entries || y;
            if (m && (c = Fe(m.call(new t))) !== Object.prototype && c.next && (Pt(c, h, !0), "function" != typeof c[Le] && A(c, Le, De)), l && y && "values" !== y.name && (p = !0, v = function() {
                    return y.call(this)
                }), (Ne || p || !d[Le]) && A(d, Le, v), Ae[e] = v, Ae[h] = De, o)
                if (a = {
                        values: l ? v : f("values"),
                        keys: i ? v : f("keys"),
                        entries: b
                    }, s)
                    for (u in a) u in d || F(d, u, a[u]);
                else D(D.P + D.F * (Ne || p), e, a);
            return a
        },
        Re = (Pe = !0, function(t, e) {
            var r, n, o = String(C(t)),
                i = G(e),
                s = o.length;
            return i < 0 || i >= s ? Pe ? "" : void 0 : (r = o.charCodeAt(i)) < 55296 || r > 56319 || i + 1 === s || (n = o.charCodeAt(i + 1)) < 56320 || n > 57343 ? Pe ? o.charAt(i) : r : Pe ? o.slice(i, i + 2) : n - 56320 + (r - 55296 << 10) + 65536
        });
    Ie(String, "String", function(t) {
        this._t = String(t), this._i = 0
    }, function() {
        var t, e = this._t,
            r = this._i;
        return r >= e.length ? {
            value: void 0,
            done: !0
        } : (t = Re(e, r), this._i += t.length, {
            value: t,
            done: !1
        })
    });
    var Be = function(t, e) {
            return {
                value: e,
                done: !!t
            }
        },
        Ce = Ie(Array, "Array", function(t, e) {
            this._t = st(t), this._i = 0, this._k = e
        }, function() {
            var t = this._t,
                e = this._k,
                r = this._i++;
            return !t || r >= t.length ? (this._t = void 0, Be(1)) : Be(0, "keys" == e ? r : "values" == e ? t[r] : [r, t[r]])
        }, "values");
    Ae.Arguments = Ae.Array, tt("keys"), tt("values"), tt("entries");
    for (var Ue = $("iterator"), Me = $("toStringTag"), ze = Ae.Array, Ge = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1
        }, We = yt(Ge), He = 0; He < We.length; He++) {
        var Ve, qe = We[He],
            Ke = Ge[qe],
            $e = h[qe],
            Je = $e && $e.prototype;
        if (Je && (Je[Ue] || A(Je, Ue, ze), Je[Me] || A(Je, Me, qe), Ae[qe] = ze, Ke))
            for (Ve in Ce) Je[Ve] || F(Je, Ve, Ce[Ve], !0)
    }
    Tt.f("iterator");
    var Ye = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function(t, e) {
        t.__proto__ = e
    } || function(t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
    };

    function Xe(t, e) {
        if (!(e instanceof Object)) return e;
        switch (e.constructor) {
            case Date:
                return new Date(e.getTime());
            case Object:
                void 0 === t && (t = {});
                break;
            case Array:
                t = [];
                break;
            default:
                return e
        }
        for (var r in e) e.hasOwnProperty(r) && (t[r] = Xe(t[r], e[r]));
        return t
    }

    function Qe(t, e, r) {
        t[e] = r
    }
    var Ze = "FirebaseError",
        tr = Error.captureStackTrace,
        er = function() {
            return function(t, e) {
                if (this.code = t, this.message = e, tr) tr(this, rr.prototype.create);
                else try {
                    throw Error.apply(this, arguments)
                } catch (t) {
                    this.name = Ze, Object.defineProperty(this, "stack", {
                        get: function() {
                            return t.stack
                        }
                    })
                }
            }
        }();
    er.prototype = Object.create(Error.prototype), er.prototype.constructor = er, er.prototype.name = Ze;
    var rr = function() {
        function t(t, e, r) {
            this.service = t, this.serviceName = e, this.errors = r, this.pattern = /\{\$([^}]+)}/g
        }
        return t.prototype.create = function(t, e) {
            void 0 === e && (e = {});
            var r, n = this.errors[t],
                o = this.service + "/" + t;
            r = void 0 === n ? "Error" : n.replace(this.pattern, function(t, r) {
                var n = e[r];
                return void 0 !== n ? n.toString() : "<" + r + "?>"
            }), r = this.serviceName + ": " + r + " (" + o + ").";
            var i = new er(o, r);
            for (var s in e) e.hasOwnProperty(s) && "_" !== s.slice(-1) && (i[s] = e[s]);
            return i
        }, t
    }();
    ! function(t) {
        function e() {
            var e = t.call(this) || this;
            e.chain_ = [], e.buf_ = [], e.W_ = [], e.pad_ = [], e.inbuf_ = 0, e.total_ = 0, e.blockSize = 64, e.pad_[0] = 128;
            for (var r = 1; r < e.blockSize; ++r) e.pad_[r] = 0;
            return e.reset(), e
        }(function(t, e) {
            function r() {
                this.constructor = t
            }
            Ye(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        })(e, t), e.prototype.reset = function() {
            this.chain_[0] = 1732584193, this.chain_[1] = 4023233417, this.chain_[2] = 2562383102, this.chain_[3] = 271733878, this.chain_[4] = 3285377520, this.inbuf_ = 0, this.total_ = 0
        }, e.prototype.compress_ = function(t, e) {
            e || (e = 0);
            var r = this.W_;
            if ("string" == typeof t)
                for (var n = 0; n < 16; n++) r[n] = t.charCodeAt(e) << 24 | t.charCodeAt(e + 1) << 16 | t.charCodeAt(e + 2) << 8 | t.charCodeAt(e + 3), e += 4;
            else
                for (n = 0; n < 16; n++) r[n] = t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3], e += 4;
            for (n = 16; n < 80; n++) {
                var o = r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16];
                r[n] = 4294967295 & (o << 1 | o >>> 31)
            }
            var i, s, a = this.chain_[0],
                u = this.chain_[1],
                c = this.chain_[2],
                f = this.chain_[3],
                h = this.chain_[4];
            for (n = 0; n < 80; n++) {
                n < 40 ? n < 20 ? (i = f ^ u & (c ^ f), s = 1518500249) : (i = u ^ c ^ f, s = 1859775393) : n < 60 ? (i = u & c | f & (u | c), s = 2400959708) : (i = u ^ c ^ f, s = 3395469782);
                o = (a << 5 | a >>> 27) + i + h + s + r[n] & 4294967295;
                h = f, f = c, c = 4294967295 & (u << 30 | u >>> 2), u = a, a = o
            }
            this.chain_[0] = this.chain_[0] + a & 4294967295, this.chain_[1] = this.chain_[1] + u & 4294967295, this.chain_[2] = this.chain_[2] + c & 4294967295, this.chain_[3] = this.chain_[3] + f & 4294967295, this.chain_[4] = this.chain_[4] + h & 4294967295
        }, e.prototype.update = function(t, e) {
            if (null != t) {
                void 0 === e && (e = t.length);
                for (var r = e - this.blockSize, n = 0, o = this.buf_, i = this.inbuf_; n < e;) {
                    if (0 == i)
                        for (; n <= r;) this.compress_(t, n), n += this.blockSize;
                    if ("string" == typeof t) {
                        for (; n < e;)
                            if (o[i] = t.charCodeAt(n), ++n, ++i == this.blockSize) {
                                this.compress_(o), i = 0;
                                break
                            }
                    } else
                        for (; n < e;)
                            if (o[i] = t[n], ++n, ++i == this.blockSize) {
                                this.compress_(o), i = 0;
                                break
                            }
                }
                this.inbuf_ = i, this.total_ += e
            }
        }, e.prototype.digest = function() {
            var t = [],
                e = 8 * this.total_;
            this.inbuf_ < 56 ? this.update(this.pad_, 56 - this.inbuf_) : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
            for (var r = this.blockSize - 1; r >= 56; r--) this.buf_[r] = 255 & e, e /= 256;
            this.compress_(this.buf_);
            var n = 0;
            for (r = 0; r < 5; r++)
                for (var o = 24; o >= 0; o -= 8) t[n] = this.chain_[r] >> o & 255, ++n;
            return t
        }
    }(function() {
        return function() {
            this.blockSize = -1
        }
    }());

    function nr(t, e) {
        var r = new or(t, e);
        return r.subscribe.bind(r)
    }
    var or = function() {
        function t(t, e) {
            var r = this;
            this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = e, this.task.then(function() {
                t(r)
            }).catch(function(t) {
                r.error(t)
            })
        }
        return t.prototype.next = function(t) {
            this.forEachObserver(function(e) {
                e.next(t)
            })
        }, t.prototype.error = function(t) {
            this.forEachObserver(function(e) {
                e.error(t)
            }), this.close(t)
        }, t.prototype.complete = function() {
            this.forEachObserver(function(t) {
                t.complete()
            }), this.close()
        }, t.prototype.subscribe = function(t, e, r) {
            var n, o = this;
            if (void 0 === t && void 0 === e && void 0 === r) throw new Error("Missing Observer.");
            void 0 === (n = function(t, e) {
                if ("object" != typeof t || null === t) return !1;
                for (var r = 0, n = e; r < n.length; r++) {
                    var o = n[r];
                    if (o in t && "function" == typeof t[o]) return !0
                }
                return !1
            }(t, ["next", "error", "complete"]) ? t : {
                next: t,
                error: e,
                complete: r
            }).next && (n.next = ir), void 0 === n.error && (n.error = ir), void 0 === n.complete && (n.complete = ir);
            var i = this.unsubscribeOne.bind(this, this.observers.length);
            return this.finalized && this.task.then(function() {
                try {
                    o.finalError ? n.error(o.finalError) : n.complete()
                } catch (t) {}
            }), this.observers.push(n), i
        }, t.prototype.unsubscribeOne = function(t) {
            void 0 !== this.observers && void 0 !== this.observers[t] && (delete this.observers[t], this.observerCount -= 1, 0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this))
        }, t.prototype.forEachObserver = function(t) {
            if (!this.finalized)
                for (var e = 0; e < this.observers.length; e++) this.sendOne(e, t)
        }, t.prototype.sendOne = function(t, e) {
            var r = this;
            this.task.then(function() {
                if (void 0 !== r.observers && void 0 !== r.observers[t]) try {
                    e(r.observers[t])
                } catch (t) {
                    "undefined" != typeof console && console.error && console.error(t)
                }
            })
        }, t.prototype.close = function(t) {
            var e = this;
            this.finalized || (this.finalized = !0, void 0 !== t && (this.finalError = t), this.task.then(function() {
                e.observers = void 0, e.onNoObservers = void 0
            }))
        }, t
    }();

    function ir() {}
    var sr = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        },
        ar = "[DEFAULT]",
        ur = [],
        cr = function() {
            function t(t, e, r) {
                this.firebase_ = r, this.isDeleted_ = !1, this.services_ = {}, this.name_ = e.name, this._automaticDataCollectionEnabled = e.automaticDataCollectionEnabled || !1, this.options_ = Xe(void 0, t), this.INTERNAL = {
                    getUid: function() {
                        return null
                    },
                    getToken: function() {
                        return Promise.resolve(null)
                    },
                    addAuthTokenListener: function(t) {
                        ur.push(t), setTimeout(function() {
                            return t(null)
                        }, 0)
                    },
                    removeAuthTokenListener: function(t) {
                        ur = ur.filter(function(e) {
                            return e !== t
                        })
                    }
                }
            }
            return Object.defineProperty(t.prototype, "automaticDataCollectionEnabled", {
                get: function() {
                    return this.checkDestroyed_(), this._automaticDataCollectionEnabled
                },
                set: function(t) {
                    this.checkDestroyed_(), this._automaticDataCollectionEnabled = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "name", {
                get: function() {
                    return this.checkDestroyed_(), this.name_
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "options", {
                get: function() {
                    return this.checkDestroyed_(), this.options_
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.delete = function() {
                var t = this;
                return new Promise(function(e) {
                    t.checkDestroyed_(), e()
                }).then(function() {
                    t.firebase_.INTERNAL.removeApp(t.name_);
                    var e = [];
                    return Object.keys(t.services_).forEach(function(r) {
                        Object.keys(t.services_[r]).forEach(function(n) {
                            e.push(t.services_[r][n])
                        })
                    }), Promise.all(e.map(function(t) {
                        return t.INTERNAL.delete()
                    }))
                }).then(function() {
                    t.isDeleted_ = !0, t.services_ = {}
                })
            }, t.prototype._getService = function(t, e) {
                if (void 0 === e && (e = ar), this.checkDestroyed_(), this.services_[t] || (this.services_[t] = {}), !this.services_[t][e]) {
                    var r = e !== ar ? e : void 0,
                        n = this.firebase_.INTERNAL.factories[t](this, this.extendApp.bind(this), r);
                    this.services_[t][e] = n
                }
                return this.services_[t][e]
            }, t.prototype.extendApp = function(t) {
                var e = this;
                Xe(this, t), t.INTERNAL && t.INTERNAL.addAuthTokenListener && (ur.forEach(function(t) {
                    e.INTERNAL.addAuthTokenListener(t)
                }), ur = [])
            }, t.prototype.checkDestroyed_ = function() {
                this.isDeleted_ && fr("app-deleted", {
                    name: this.name_
                })
            }, t
        }();

    function fr(t, e) {
        throw hr.create(t, e)
    }
    cr.prototype.name && cr.prototype.options || cr.prototype.delete || console.log("dc");
    var hr = new rr("app", "Firebase", {
        "no-app": "No Firebase App '{$name}' has been created - call Firebase App.initializeApp()",
        "bad-app-name": "Illegal App name: '{$name}",
        "duplicate-app": "Firebase App named '{$name}' already exists",
        "app-deleted": "Firebase App named '{$name}' already deleted",
        "duplicate-service": "Firebase service named '{$name}' already registered",
        "sa-not-supported": "Initializing the Firebase SDK with a service account is only allowed in a Node.js environment. On client devices, you should instead initialize the SDK with an api key and auth domain",
        "invalid-app-argument": "firebase.{$name}() takes either no argument or a Firebase App instance."
    });
    return function t() {
        var e = {},
            r = {},
            n = {},
            o = {
                __esModule: !0,
                initializeApp: function(t, r) {
                    if (void 0 === r && (r = {}), "object" != typeof r || null === r) {
                        var n = r;
                        r = {
                            name: n
                        }
                    }
                    var i = r;
                    void 0 === i.name && (i.name = ar);
                    var s = i.name;
                    "string" == typeof s && s || fr("bad-app-name", {
                        name: s + ""
                    }), sr(e, s) && fr("duplicate-app", {
                        name: s
                    });
                    var u = new cr(t, i, o);
                    return e[s] = u, a(u, "create"), u
                },
                app: i,
                apps: null,
                Promise: Promise,
                SDK_VERSION: "5.8.4",
                INTERNAL: {
                    registerService: function(t, e, a, u, c) {
                        r[t] && fr("duplicate-service", {
                            name: t
                        }), r[t] = e, u && (n[t] = u, s().forEach(function(t) {
                            u("create", t)
                        }));
                        var f = function(e) {
                            return void 0 === e && (e = i()), "function" != typeof e[t] && fr("invalid-app-argument", {
                                name: t
                            }), e[t]()
                        };
                        return void 0 !== a && Xe(f, a), o[t] = f, cr.prototype[t] = function() {
                            for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                            return this._getService.bind(this, t).apply(this, c ? e : [])
                        }, f
                    },
                    createFirebaseNamespace: t,
                    extendNamespace: function(t) {
                        Xe(o, t)
                    },
                    createSubscribe: nr,
                    ErrorFactory: rr,
                    removeApp: function(t) {
                        a(e[t], "delete"), delete e[t]
                    },
                    factories: r,
                    useAsService: u,
                    Promise: Promise,
                    deepExtend: Xe
                }
            };

        function i(t) {
            return sr(e, t = t || ar) || fr("no-app", {
                name: t
            }), e[t]
        }

        function s() {
            return Object.keys(e).map(function(t) {
                return e[t]
            })
        }

        function a(t, e) {
            Object.keys(r).forEach(function(r) {
                var o = u(t, r);
                null !== o && n[o] && n[o](e, t)
            })
        }

        function u(t, e) {
            if ("serverAuth" === e) return null;
            var r = e;
            return t.options, r
        }
        return Qe(o, "default", o), Object.defineProperty(o, "apps", {
            get: s
        }), Qe(i, "App", cr), o
    }()
});
//# sourceMappingURL=firebase-app.js.map