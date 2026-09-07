function Wd(j) {
  return j && j.__esModule && Object.prototype.hasOwnProperty.call(j, "default") ? j.default : j;
}
var Ac = { exports: {} }, gt = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dd;
function mp() {
  if (Dd) return gt;
  Dd = 1;
  var j = Symbol.for("react.transitional.element"), it = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), lt = Symbol.for("react.profiler"), h = Symbol.for("react.consumer"), p = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), v = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), E = Symbol.for("react.activity"), R = Symbol.iterator;
  function H(S) {
    return S === null || typeof S != "object" ? null : (S = R && S[R] || S["@@iterator"], typeof S == "function" ? S : null);
  }
  var tt = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Y = Object.assign, ct = {};
  function W(S, G, J) {
    this.props = S, this.context = G, this.refs = ct, this.updater = J || tt;
  }
  W.prototype.isReactComponent = {}, W.prototype.setState = function(S, G) {
    if (typeof S != "object" && typeof S != "function" && S != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, S, G, "setState");
  }, W.prototype.forceUpdate = function(S) {
    this.updater.enqueueForceUpdate(this, S, "forceUpdate");
  };
  function I() {
  }
  I.prototype = W.prototype;
  function at(S, G, J) {
    this.props = S, this.context = G, this.refs = ct, this.updater = J || tt;
  }
  var Ht = at.prototype = new I();
  Ht.constructor = at, Y(Ht, W.prototype), Ht.isPureReactComponent = !0;
  var Gt = Array.isArray;
  function It() {
  }
  var pt = { H: null, A: null, T: null, S: null }, ce = Object.prototype.hasOwnProperty;
  function Ee(S, G, J) {
    var z = J.ref;
    return {
      $$typeof: j,
      type: S,
      key: G,
      ref: z !== void 0 ? z : null,
      props: J
    };
  }
  function Fe(S, G) {
    return Ee(S.type, G, S.props);
  }
  function Pt(S) {
    return typeof S == "object" && S !== null && S.$$typeof === j;
  }
  function Mt(S) {
    var G = { "=": "=0", ":": "=2" };
    return "$" + S.replace(/[=:]/g, function(J) {
      return G[J];
    });
  }
  var $e = /\/+/g;
  function Ot(S, G) {
    return typeof S == "object" && S !== null && S.key != null ? Mt("" + S.key) : G.toString(36);
  }
  function ge(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (typeof S.status == "string" ? S.then(It, It) : (S.status = "pending", S.then(
          function(G) {
            S.status === "pending" && (S.status = "fulfilled", S.value = G);
          },
          function(G) {
            S.status === "pending" && (S.status = "rejected", S.reason = G);
          }
        )), S.status) {
          case "fulfilled":
            return S.value;
          case "rejected":
            throw S.reason;
        }
    }
    throw S;
  }
  function Z(S, G, J, z, Q) {
    var F = typeof S;
    (F === "undefined" || F === "boolean") && (S = null);
    var mt = !1;
    if (S === null) mt = !0;
    else
      switch (F) {
        case "bigint":
        case "string":
        case "number":
          mt = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case j:
            case it:
              mt = !0;
              break;
            case N:
              return mt = S._init, Z(
                mt(S._payload),
                G,
                J,
                z,
                Q
              );
          }
      }
    if (mt)
      return Q = Q(S), mt = z === "" ? "." + Ot(S, 0) : z, Gt(Q) ? (J = "", mt != null && (J = mt.replace($e, "$&/") + "/"), Z(Q, G, J, "", function(ui) {
        return ui;
      })) : Q != null && (Pt(Q) && (Q = Fe(
        Q,
        J + (Q.key == null || S && S.key === Q.key ? "" : ("" + Q.key).replace(
          $e,
          "$&/"
        ) + "/") + mt
      )), G.push(Q)), 1;
    mt = 0;
    var Zt = z === "" ? "." : z + ":";
    if (Gt(S))
      for (var Kt = 0; Kt < S.length; Kt++)
        z = S[Kt], F = Zt + Ot(z, Kt), mt += Z(
          z,
          G,
          J,
          F,
          Q
        );
    else if (Kt = H(S), typeof Kt == "function")
      for (S = Kt.call(S), Kt = 0; !(z = S.next()).done; )
        z = z.value, F = Zt + Ot(z, Kt++), mt += Z(
          z,
          G,
          J,
          F,
          Q
        );
    else if (F === "object") {
      if (typeof S.then == "function")
        return Z(
          ge(S),
          G,
          J,
          z,
          Q
        );
      throw G = String(S), Error(
        "Objects are not valid as a React child (found: " + (G === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : G) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return mt;
  }
  function $(S, G, J) {
    if (S == null) return S;
    var z = [], Q = 0;
    return Z(S, z, "", "", function(F) {
      return G.call(J, F, Q++);
    }), z;
  }
  function K(S) {
    if (S._status === -1) {
      var G = S._result;
      G = G(), G.then(
        function(J) {
          (S._status === 0 || S._status === -1) && (S._status = 1, S._result = J);
        },
        function(J) {
          (S._status === 0 || S._status === -1) && (S._status = 2, S._result = J);
        }
      ), S._status === -1 && (S._status = 0, S._result = G);
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var At = typeof reportError == "function" ? reportError : function(S) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var G = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof S == "object" && S !== null && typeof S.message == "string" ? String(S.message) : String(S),
        error: S
      });
      if (!window.dispatchEvent(G)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", S);
      return;
    }
    console.error(S);
  }, nt = {
    map: $,
    forEach: function(S, G, J) {
      $(
        S,
        function() {
          G.apply(this, arguments);
        },
        J
      );
    },
    count: function(S) {
      var G = 0;
      return $(S, function() {
        G++;
      }), G;
    },
    toArray: function(S) {
      return $(S, function(G) {
        return G;
      }) || [];
    },
    only: function(S) {
      if (!Pt(S))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return S;
    }
  };
  return gt.Activity = E, gt.Children = nt, gt.Component = W, gt.Fragment = w, gt.Profiler = lt, gt.PureComponent = at, gt.StrictMode = A, gt.Suspense = _, gt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = pt, gt.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(S) {
      return pt.H.useMemoCache(S);
    }
  }, gt.cache = function(S) {
    return function() {
      return S.apply(null, arguments);
    };
  }, gt.cacheSignal = function() {
    return null;
  }, gt.cloneElement = function(S, G, J) {
    if (S == null)
      throw Error(
        "The argument must be a React element, but you passed " + S + "."
      );
    var z = Y({}, S.props), Q = S.key;
    if (G != null)
      for (F in G.key !== void 0 && (Q = "" + G.key), G)
        !ce.call(G, F) || F === "key" || F === "__self" || F === "__source" || F === "ref" && G.ref === void 0 || (z[F] = G[F]);
    var F = arguments.length - 2;
    if (F === 1) z.children = J;
    else if (1 < F) {
      for (var mt = Array(F), Zt = 0; Zt < F; Zt++)
        mt[Zt] = arguments[Zt + 2];
      z.children = mt;
    }
    return Ee(S.type, Q, z);
  }, gt.createContext = function(S) {
    return S = {
      $$typeof: p,
      _currentValue: S,
      _currentValue2: S,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, S.Provider = S, S.Consumer = {
      $$typeof: h,
      _context: S
    }, S;
  }, gt.createElement = function(S, G, J) {
    var z, Q = {}, F = null;
    if (G != null)
      for (z in G.key !== void 0 && (F = "" + G.key), G)
        ce.call(G, z) && z !== "key" && z !== "__self" && z !== "__source" && (Q[z] = G[z]);
    var mt = arguments.length - 2;
    if (mt === 1) Q.children = J;
    else if (1 < mt) {
      for (var Zt = Array(mt), Kt = 0; Kt < mt; Kt++)
        Zt[Kt] = arguments[Kt + 2];
      Q.children = Zt;
    }
    if (S && S.defaultProps)
      for (z in mt = S.defaultProps, mt)
        Q[z] === void 0 && (Q[z] = mt[z]);
    return Ee(S, F, Q);
  }, gt.createRef = function() {
    return { current: null };
  }, gt.forwardRef = function(S) {
    return { $$typeof: g, render: S };
  }, gt.isValidElement = Pt, gt.lazy = function(S) {
    return {
      $$typeof: N,
      _payload: { _status: -1, _result: S },
      _init: K
    };
  }, gt.memo = function(S, G) {
    return {
      $$typeof: v,
      type: S,
      compare: G === void 0 ? null : G
    };
  }, gt.startTransition = function(S) {
    var G = pt.T, J = {};
    pt.T = J;
    try {
      var z = S(), Q = pt.S;
      Q !== null && Q(J, z), typeof z == "object" && z !== null && typeof z.then == "function" && z.then(It, At);
    } catch (F) {
      At(F);
    } finally {
      G !== null && J.types !== null && (G.types = J.types), pt.T = G;
    }
  }, gt.unstable_useCacheRefresh = function() {
    return pt.H.useCacheRefresh();
  }, gt.use = function(S) {
    return pt.H.use(S);
  }, gt.useActionState = function(S, G, J) {
    return pt.H.useActionState(S, G, J);
  }, gt.useCallback = function(S, G) {
    return pt.H.useCallback(S, G);
  }, gt.useContext = function(S) {
    return pt.H.useContext(S);
  }, gt.useDebugValue = function() {
  }, gt.useDeferredValue = function(S, G) {
    return pt.H.useDeferredValue(S, G);
  }, gt.useEffect = function(S, G) {
    return pt.H.useEffect(S, G);
  }, gt.useEffectEvent = function(S) {
    return pt.H.useEffectEvent(S);
  }, gt.useId = function() {
    return pt.H.useId();
  }, gt.useImperativeHandle = function(S, G, J) {
    return pt.H.useImperativeHandle(S, G, J);
  }, gt.useInsertionEffect = function(S, G) {
    return pt.H.useInsertionEffect(S, G);
  }, gt.useLayoutEffect = function(S, G) {
    return pt.H.useLayoutEffect(S, G);
  }, gt.useMemo = function(S, G) {
    return pt.H.useMemo(S, G);
  }, gt.useOptimistic = function(S, G) {
    return pt.H.useOptimistic(S, G);
  }, gt.useReducer = function(S, G, J) {
    return pt.H.useReducer(S, G, J);
  }, gt.useRef = function(S) {
    return pt.H.useRef(S);
  }, gt.useState = function(S) {
    return pt.H.useState(S);
  }, gt.useSyncExternalStore = function(S, G, J) {
    return pt.H.useSyncExternalStore(
      S,
      G,
      J
    );
  }, gt.useTransition = function() {
    return pt.H.useTransition();
  }, gt.version = "19.2.8", gt;
}
var Bd;
function Uc() {
  return Bd || (Bd = 1, Ac.exports = mp()), Ac.exports;
}
var Ct = Uc();
const x = /* @__PURE__ */ Wd(Ct);
var Oc = { exports: {} }, Io = {}, kc = { exports: {} }, Nc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zd;
function pp() {
  return Zd || (Zd = 1, (function(j) {
    function it(Z, $) {
      var K = Z.length;
      Z.push($);
      t: for (; 0 < K; ) {
        var At = K - 1 >>> 1, nt = Z[At];
        if (0 < lt(nt, $))
          Z[At] = $, Z[K] = nt, K = At;
        else break t;
      }
    }
    function w(Z) {
      return Z.length === 0 ? null : Z[0];
    }
    function A(Z) {
      if (Z.length === 0) return null;
      var $ = Z[0], K = Z.pop();
      if (K !== $) {
        Z[0] = K;
        t: for (var At = 0, nt = Z.length, S = nt >>> 1; At < S; ) {
          var G = 2 * (At + 1) - 1, J = Z[G], z = G + 1, Q = Z[z];
          if (0 > lt(J, K))
            z < nt && 0 > lt(Q, J) ? (Z[At] = Q, Z[z] = K, At = z) : (Z[At] = J, Z[G] = K, At = G);
          else if (z < nt && 0 > lt(Q, K))
            Z[At] = Q, Z[z] = K, At = z;
          else break t;
        }
      }
      return $;
    }
    function lt(Z, $) {
      var K = Z.sortIndex - $.sortIndex;
      return K !== 0 ? K : Z.id - $.id;
    }
    if (j.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      j.unstable_now = function() {
        return h.now();
      };
    } else {
      var p = Date, g = p.now();
      j.unstable_now = function() {
        return p.now() - g;
      };
    }
    var _ = [], v = [], N = 1, E = null, R = 3, H = !1, tt = !1, Y = !1, ct = !1, W = typeof setTimeout == "function" ? setTimeout : null, I = typeof clearTimeout == "function" ? clearTimeout : null, at = typeof setImmediate < "u" ? setImmediate : null;
    function Ht(Z) {
      for (var $ = w(v); $ !== null; ) {
        if ($.callback === null) A(v);
        else if ($.startTime <= Z)
          A(v), $.sortIndex = $.expirationTime, it(_, $);
        else break;
        $ = w(v);
      }
    }
    function Gt(Z) {
      if (Y = !1, Ht(Z), !tt)
        if (w(_) !== null)
          tt = !0, It || (It = !0, Mt());
        else {
          var $ = w(v);
          $ !== null && ge(Gt, $.startTime - Z);
        }
    }
    var It = !1, pt = -1, ce = 5, Ee = -1;
    function Fe() {
      return ct ? !0 : !(j.unstable_now() - Ee < ce);
    }
    function Pt() {
      if (ct = !1, It) {
        var Z = j.unstable_now();
        Ee = Z;
        var $ = !0;
        try {
          t: {
            tt = !1, Y && (Y = !1, I(pt), pt = -1), H = !0;
            var K = R;
            try {
              e: {
                for (Ht(Z), E = w(_); E !== null && !(E.expirationTime > Z && Fe()); ) {
                  var At = E.callback;
                  if (typeof At == "function") {
                    E.callback = null, R = E.priorityLevel;
                    var nt = At(
                      E.expirationTime <= Z
                    );
                    if (Z = j.unstable_now(), typeof nt == "function") {
                      E.callback = nt, Ht(Z), $ = !0;
                      break e;
                    }
                    E === w(_) && A(_), Ht(Z);
                  } else A(_);
                  E = w(_);
                }
                if (E !== null) $ = !0;
                else {
                  var S = w(v);
                  S !== null && ge(
                    Gt,
                    S.startTime - Z
                  ), $ = !1;
                }
              }
              break t;
            } finally {
              E = null, R = K, H = !1;
            }
            $ = void 0;
          }
        } finally {
          $ ? Mt() : It = !1;
        }
      }
    }
    var Mt;
    if (typeof at == "function")
      Mt = function() {
        at(Pt);
      };
    else if (typeof MessageChannel < "u") {
      var $e = new MessageChannel(), Ot = $e.port2;
      $e.port1.onmessage = Pt, Mt = function() {
        Ot.postMessage(null);
      };
    } else
      Mt = function() {
        W(Pt, 0);
      };
    function ge(Z, $) {
      pt = W(function() {
        Z(j.unstable_now());
      }, $);
    }
    j.unstable_IdlePriority = 5, j.unstable_ImmediatePriority = 1, j.unstable_LowPriority = 4, j.unstable_NormalPriority = 3, j.unstable_Profiling = null, j.unstable_UserBlockingPriority = 2, j.unstable_cancelCallback = function(Z) {
      Z.callback = null;
    }, j.unstable_forceFrameRate = function(Z) {
      0 > Z || 125 < Z ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ce = 0 < Z ? Math.floor(1e3 / Z) : 5;
    }, j.unstable_getCurrentPriorityLevel = function() {
      return R;
    }, j.unstable_next = function(Z) {
      switch (R) {
        case 1:
        case 2:
        case 3:
          var $ = 3;
          break;
        default:
          $ = R;
      }
      var K = R;
      R = $;
      try {
        return Z();
      } finally {
        R = K;
      }
    }, j.unstable_requestPaint = function() {
      ct = !0;
    }, j.unstable_runWithPriority = function(Z, $) {
      switch (Z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Z = 3;
      }
      var K = R;
      R = Z;
      try {
        return $();
      } finally {
        R = K;
      }
    }, j.unstable_scheduleCallback = function(Z, $, K) {
      var At = j.unstable_now();
      switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? At + K : At) : K = At, Z) {
        case 1:
          var nt = -1;
          break;
        case 2:
          nt = 250;
          break;
        case 5:
          nt = 1073741823;
          break;
        case 4:
          nt = 1e4;
          break;
        default:
          nt = 5e3;
      }
      return nt = K + nt, Z = {
        id: N++,
        callback: $,
        priorityLevel: Z,
        startTime: K,
        expirationTime: nt,
        sortIndex: -1
      }, K > At ? (Z.sortIndex = K, it(v, Z), w(_) === null && Z === w(v) && (Y ? (I(pt), pt = -1) : Y = !0, ge(Gt, K - At))) : (Z.sortIndex = nt, it(_, Z), tt || H || (tt = !0, It || (It = !0, Mt()))), Z;
    }, j.unstable_shouldYield = Fe, j.unstable_wrapCallback = function(Z) {
      var $ = R;
      return function() {
        var K = R;
        R = $;
        try {
          return Z.apply(this, arguments);
        } finally {
          R = K;
        }
      };
    };
  })(Nc)), Nc;
}
var Rd;
function _p() {
  return Rd || (Rd = 1, kc.exports = pp()), kc.exports;
}
var Dc = { exports: {} }, Ne = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ud;
function gp() {
  if (Ud) return Ne;
  Ud = 1;
  var j = Uc();
  function it(_) {
    var v = "https://react.dev/errors/" + _;
    if (1 < arguments.length) {
      v += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var N = 2; N < arguments.length; N++)
        v += "&args[]=" + encodeURIComponent(arguments[N]);
    }
    return "Minified React error #" + _ + "; visit " + v + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function w() {
  }
  var A = {
    d: {
      f: w,
      r: function() {
        throw Error(it(522));
      },
      D: w,
      C: w,
      L: w,
      m: w,
      X: w,
      S: w,
      M: w
    },
    p: 0,
    findDOMNode: null
  }, lt = Symbol.for("react.portal");
  function h(_, v, N) {
    var E = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: lt,
      key: E == null ? null : "" + E,
      children: _,
      containerInfo: v,
      implementation: N
    };
  }
  var p = j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function g(_, v) {
    if (_ === "font") return "";
    if (typeof v == "string")
      return v === "use-credentials" ? v : "";
  }
  return Ne.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = A, Ne.createPortal = function(_, v) {
    var N = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11)
      throw Error(it(299));
    return h(_, v, null, N);
  }, Ne.flushSync = function(_) {
    var v = p.T, N = A.p;
    try {
      if (p.T = null, A.p = 2, _) return _();
    } finally {
      p.T = v, A.p = N, A.d.f();
    }
  }, Ne.preconnect = function(_, v) {
    typeof _ == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, A.d.C(_, v));
  }, Ne.prefetchDNS = function(_) {
    typeof _ == "string" && A.d.D(_);
  }, Ne.preinit = function(_, v) {
    if (typeof _ == "string" && v && typeof v.as == "string") {
      var N = v.as, E = g(N, v.crossOrigin), R = typeof v.integrity == "string" ? v.integrity : void 0, H = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
      N === "style" ? A.d.S(
        _,
        typeof v.precedence == "string" ? v.precedence : void 0,
        {
          crossOrigin: E,
          integrity: R,
          fetchPriority: H
        }
      ) : N === "script" && A.d.X(_, {
        crossOrigin: E,
        integrity: R,
        fetchPriority: H,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0
      });
    }
  }, Ne.preinitModule = function(_, v) {
    if (typeof _ == "string")
      if (typeof v == "object" && v !== null) {
        if (v.as == null || v.as === "script") {
          var N = g(
            v.as,
            v.crossOrigin
          );
          A.d.M(_, {
            crossOrigin: N,
            integrity: typeof v.integrity == "string" ? v.integrity : void 0,
            nonce: typeof v.nonce == "string" ? v.nonce : void 0
          });
        }
      } else v == null && A.d.M(_);
  }, Ne.preload = function(_, v) {
    if (typeof _ == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
      var N = v.as, E = g(N, v.crossOrigin);
      A.d.L(_, N, {
        crossOrigin: E,
        integrity: typeof v.integrity == "string" ? v.integrity : void 0,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0,
        type: typeof v.type == "string" ? v.type : void 0,
        fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0,
        referrerPolicy: typeof v.referrerPolicy == "string" ? v.referrerPolicy : void 0,
        imageSrcSet: typeof v.imageSrcSet == "string" ? v.imageSrcSet : void 0,
        imageSizes: typeof v.imageSizes == "string" ? v.imageSizes : void 0,
        media: typeof v.media == "string" ? v.media : void 0
      });
    }
  }, Ne.preloadModule = function(_, v) {
    if (typeof _ == "string")
      if (v) {
        var N = g(v.as, v.crossOrigin);
        A.d.m(_, {
          as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
          crossOrigin: N,
          integrity: typeof v.integrity == "string" ? v.integrity : void 0
        });
      } else A.d.m(_);
  }, Ne.requestFormReset = function(_) {
    A.d.r(_);
  }, Ne.unstable_batchedUpdates = function(_, v) {
    return _(v);
  }, Ne.useFormState = function(_, v, N) {
    return p.H.useFormState(_, v, N);
  }, Ne.useFormStatus = function() {
    return p.H.useHostTransitionStatus();
  }, Ne.version = "19.2.8", Ne;
}
var Hd;
function vp() {
  if (Hd) return Dc.exports;
  Hd = 1;
  function j() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(j);
      } catch (it) {
        console.error(it);
      }
  }
  return j(), Dc.exports = gp(), Dc.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gd;
function yp() {
  if (Gd) return Io;
  Gd = 1;
  var j = _p(), it = Uc(), w = vp();
  function A(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function lt(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function h(t) {
    var e = t, n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do
        e = t, (e.flags & 4098) !== 0 && (n = e.return), t = e.return;
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function p(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function g(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function _(t) {
    if (h(t) !== t)
      throw Error(A(188));
  }
  function v(t) {
    var e = t.alternate;
    if (!e) {
      if (e = h(t), e === null) throw Error(A(188));
      return e !== t ? null : t;
    }
    for (var n = t, l = e; ; ) {
      var r = n.return;
      if (r === null) break;
      var s = r.alternate;
      if (s === null) {
        if (l = r.return, l !== null) {
          n = l;
          continue;
        }
        break;
      }
      if (r.child === s.child) {
        for (s = r.child; s; ) {
          if (s === n) return _(r), t;
          if (s === l) return _(r), e;
          s = s.sibling;
        }
        throw Error(A(188));
      }
      if (n.return !== l.return) n = r, l = s;
      else {
        for (var f = !1, m = r.child; m; ) {
          if (m === n) {
            f = !0, n = r, l = s;
            break;
          }
          if (m === l) {
            f = !0, l = r, n = s;
            break;
          }
          m = m.sibling;
        }
        if (!f) {
          for (m = s.child; m; ) {
            if (m === n) {
              f = !0, n = s, l = r;
              break;
            }
            if (m === l) {
              f = !0, l = s, n = r;
              break;
            }
            m = m.sibling;
          }
          if (!f) throw Error(A(189));
        }
      }
      if (n.alternate !== l) throw Error(A(190));
    }
    if (n.tag !== 3) throw Error(A(188));
    return n.stateNode.current === n ? t : e;
  }
  function N(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = N(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var E = Object.assign, R = Symbol.for("react.element"), H = Symbol.for("react.transitional.element"), tt = Symbol.for("react.portal"), Y = Symbol.for("react.fragment"), ct = Symbol.for("react.strict_mode"), W = Symbol.for("react.profiler"), I = Symbol.for("react.consumer"), at = Symbol.for("react.context"), Ht = Symbol.for("react.forward_ref"), Gt = Symbol.for("react.suspense"), It = Symbol.for("react.suspense_list"), pt = Symbol.for("react.memo"), ce = Symbol.for("react.lazy"), Ee = Symbol.for("react.activity"), Fe = Symbol.for("react.memo_cache_sentinel"), Pt = Symbol.iterator;
  function Mt(t) {
    return t === null || typeof t != "object" ? null : (t = Pt && t[Pt] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var $e = Symbol.for("react.client.reference");
  function Ot(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === $e ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case Y:
        return "Fragment";
      case W:
        return "Profiler";
      case ct:
        return "StrictMode";
      case Gt:
        return "Suspense";
      case It:
        return "SuspenseList";
      case Ee:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case tt:
          return "Portal";
        case at:
          return t.displayName || "Context";
        case I:
          return (t._context.displayName || "Context") + ".Consumer";
        case Ht:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case pt:
          return e = t.displayName || null, e !== null ? e : Ot(t.type) || "Memo";
        case ce:
          e = t._payload, t = t._init;
          try {
            return Ot(t(e));
          } catch {
          }
      }
    return null;
  }
  var ge = Array.isArray, Z = it.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = w.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, At = [], nt = -1;
  function S(t) {
    return { current: t };
  }
  function G(t) {
    0 > nt || (t.current = At[nt], At[nt] = null, nt--);
  }
  function J(t, e) {
    nt++, At[nt] = t.current, t.current = e;
  }
  var z = S(null), Q = S(null), F = S(null), mt = S(null);
  function Zt(t, e) {
    switch (J(F, e), J(Q, t), J(z, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? nd(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = nd(e), t = ad(e, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    G(z), J(z, t);
  }
  function Kt() {
    G(z), G(Q), G(F);
  }
  function ui(t) {
    t.memoizedState !== null && J(mt, t);
    var e = z.current, n = ad(e, t.type);
    e !== n && (J(Q, t), J(z, n));
  }
  function Li(t) {
    Q.current === t && (G(z), G(Q)), mt.current === t && (G(mt), Qo._currentValue = K);
  }
  var ci, Fa;
  function $i(t) {
    if (ci === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        ci = e && e[1] || "", Fa = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + ci + t + Fa;
  }
  var $a = !1;
  function tl(t, e) {
    if (!t || $a) return "";
    $a = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var X = function() {
                throw Error();
              };
              if (Object.defineProperty(X.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(X, []);
                } catch (U) {
                  var B = U;
                }
                Reflect.construct(t, [], X);
              } else {
                try {
                  X.call();
                } catch (U) {
                  B = U;
                }
                t.call(X.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (U) {
                B = U;
              }
              (X = t()) && typeof X.catch == "function" && X.catch(function() {
              });
            }
          } catch (U) {
            if (U && B && typeof U.stack == "string")
              return [U.stack, B.stack];
          }
          return [null, null];
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var r = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      r && r.configurable && Object.defineProperty(
        l.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var s = l.DetermineComponentFrameRoot(), f = s[0], m = s[1];
      if (f && m) {
        var b = f.split(`
`), k = m.split(`
`);
        for (r = l = 0; l < b.length && !b[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; r < k.length && !k[r].includes(
          "DetermineComponentFrameRoot"
        ); )
          r++;
        if (l === b.length || r === k.length)
          for (l = b.length - 1, r = k.length - 1; 1 <= l && 0 <= r && b[l] !== k[r]; )
            r--;
        for (; 1 <= l && 0 <= r; l--, r--)
          if (b[l] !== k[r]) {
            if (l !== 1 || r !== 1)
              do
                if (l--, r--, 0 > r || b[l] !== k[r]) {
                  var q = `
` + b[l].replace(" at new ", " at ");
                  return t.displayName && q.includes("<anonymous>") && (q = q.replace("<anonymous>", t.displayName)), q;
                }
              while (1 <= l && 0 <= r);
            break;
          }
      }
    } finally {
      $a = !1, Error.prepareStackTrace = n;
    }
    return (n = t ? t.displayName || t.name : "") ? $i(n) : "";
  }
  function Yl(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return $i(t.type);
      case 16:
        return $i("Lazy");
      case 13:
        return t.child !== e && e !== null ? $i("Suspense Fallback") : $i("Suspense");
      case 19:
        return $i("SuspenseList");
      case 0:
      case 15:
        return tl(t.type, !1);
      case 11:
        return tl(t.type.render, !1);
      case 1:
        return tl(t.type, !0);
      case 31:
        return $i("Activity");
      default:
        return "";
    }
  }
  function ua(t) {
    try {
      var e = "", n = null;
      do
        e += Yl(t, n), n = t, t = t.return;
      while (t);
      return e;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var Vl = Object.prototype.hasOwnProperty, el = j.unstable_scheduleCallback, ca = j.unstable_cancelCallback, nr = j.unstable_shouldYield, ar = j.unstable_requestPaint, De = j.unstable_now, ks = j.unstable_getCurrentPriorityLevel, il = j.unstable_ImmediatePriority, Xl = j.unstable_UserBlockingPriority, fa = j.unstable_NormalPriority, Ns = j.unstable_LowPriority, Ql = j.unstable_IdlePriority, lr = j.log, Ds = j.unstable_setDisableYieldValue, En = null, Te = null;
  function zi(t) {
    if (typeof lr == "function" && Ds(t), Te && typeof Te.setStrictMode == "function")
      try {
        Te.setStrictMode(En, t);
      } catch {
      }
  }
  var Be = Math.clz32 ? Math.clz32 : Zs, ha = Math.log, Bs = Math.LN2;
  function Zs(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (ha(t) / Bs | 0) | 0;
  }
  var da = 256, ma = 262144, pa = 4194304;
  function tn(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function nl(t, e, n) {
    var l = t.pendingLanes;
    if (l === 0) return 0;
    var r = 0, s = t.suspendedLanes, f = t.pingedLanes;
    t = t.warmLanes;
    var m = l & 134217727;
    return m !== 0 ? (l = m & ~s, l !== 0 ? r = tn(l) : (f &= m, f !== 0 ? r = tn(f) : n || (n = m & ~t, n !== 0 && (r = tn(n))))) : (m = l & ~s, m !== 0 ? r = tn(m) : f !== 0 ? r = tn(f) : n || (n = l & ~t, n !== 0 && (r = tn(n)))), r === 0 ? 0 : e !== 0 && e !== r && (e & s) === 0 && (s = r & -r, n = e & -e, s >= n || s === 32 && (n & 4194048) !== 0) ? e : r;
  }
  function _a(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Rs(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function or() {
    var t = pa;
    return pa <<= 1, (pa & 62914560) === 0 && (pa = 4194304), t;
  }
  function Kl(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function en(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Us(t, e, n, l, r, s) {
    var f = t.pendingLanes;
    t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
    var m = t.entanglements, b = t.expirationTimes, k = t.hiddenUpdates;
    for (n = f & ~n; 0 < n; ) {
      var q = 31 - Be(n), X = 1 << q;
      m[q] = 0, b[q] = -1;
      var B = k[q];
      if (B !== null)
        for (k[q] = null, q = 0; q < B.length; q++) {
          var U = B[q];
          U !== null && (U.lane &= -536870913);
        }
      n &= ~X;
    }
    l !== 0 && rr(t, l, 0), s !== 0 && r === 0 && t.tag !== 0 && (t.suspendedLanes |= s & ~(f & ~e));
  }
  function rr(t, e, n) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var l = 31 - Be(e);
    t.entangledLanes |= e, t.entanglements[l] = t.entanglements[l] | 1073741824 | n & 261930;
  }
  function sr(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
      var l = 31 - Be(n), r = 1 << l;
      r & e | t[l] & e && (t[l] |= e), n &= ~r;
    }
  }
  function ur(t, e) {
    var n = e & -e;
    return n = (n & 42) !== 0 ? 1 : He(n), (n & (t.suspendedLanes | e)) !== 0 ? 0 : n;
  }
  function He(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function st(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Jl() {
    var t = $.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : wd(t.type));
  }
  function Wl(t, e) {
    var n = $.p;
    try {
      return $.p = t, e();
    } finally {
      $.p = n;
    }
  }
  var Ei = Math.random().toString(36).slice(2), fe = "__reactFiber$" + Ei, xe = "__reactProps$" + Ei, nn = "__reactContainer$" + Ei, Bi = "__reactEvents$" + Ei, cr = "__reactListeners$" + Ei, Hs = "__reactHandles$" + Ei, fr = "__reactResources$" + Ei, ga = "__reactMarker$" + Ei;
  function Il(t) {
    delete t[fe], delete t[xe], delete t[Bi], delete t[cr], delete t[Hs];
  }
  function an(t) {
    var e = t[fe];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if (e = n[nn] || n[fe]) {
        if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
          for (t = fd(t); t !== null; ) {
            if (n = t[fe]) return n;
            t = fd(t);
          }
        return e;
      }
      t = n, n = t.parentNode;
    }
    return null;
  }
  function Tn(t) {
    if (t = t[fe] || t[nn]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Zi(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(A(33));
  }
  function wn(t) {
    var e = t[fr];
    return e || (e = t[fr] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function he(t) {
    t[ga] = !0;
  }
  var hr = /* @__PURE__ */ new Set(), dr = {};
  function ln(t, e) {
    Ri(t, e), Ri(t + "Capture", e);
  }
  function Ri(t, e) {
    for (dr[t] = e, t = 0; t < e.length; t++)
      hr.add(e[t]);
  }
  var va = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Fl = {}, $l = {};
  function ya(t) {
    return Vl.call($l, t) ? !0 : Vl.call(Fl, t) ? !1 : va.test(t) ? $l[t] = !0 : (Fl[t] = !0, !1);
  }
  function xt(t, e, n) {
    if (ya(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var l = e.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function Yt(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function Ge(t, e, n, l) {
    if (l === null) t.removeAttribute(n);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + l);
    }
  }
  function ve(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function on(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function to(t, e, n) {
    var l = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    );
    if (!t.hasOwnProperty(e) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var r = l.get, s = l.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return r.call(this);
        },
        set: function(f) {
          n = "" + f, s.call(this, f);
        }
      }), Object.defineProperty(t, e, {
        enumerable: l.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(f) {
          n = "" + f;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function _t(t) {
    if (!t._valueTracker) {
      var e = on(t) ? "checked" : "value";
      t._valueTracker = to(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function te(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(), l = "";
    return t && (l = on(t) ? t.checked ? "true" : "false" : t.value), t = l, t !== n ? (e.setValue(t), !0) : !1;
  }
  function Mn(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var al = /[\n"\\]/g;
  function Ft(t) {
    return t.replace(
      al,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function eo(t, e, n, l, r, s, f, m) {
    t.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? t.type = f : t.removeAttribute("type"), e != null ? f === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + ve(e)) : t.value !== "" + ve(e) && (t.value = "" + ve(e)) : f !== "submit" && f !== "reset" || t.removeAttribute("value"), e != null ? Ti(t, f, ve(e)) : n != null ? Ti(t, f, ve(n)) : l != null && t.removeAttribute("value"), r == null && s != null && (t.defaultChecked = !!s), r != null && (t.checked = r && typeof r != "function" && typeof r != "symbol"), m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? t.name = "" + ve(m) : t.removeAttribute("name");
  }
  function ba(t, e, n, l, r, s, f, m) {
    if (s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (t.type = s), e != null || n != null) {
      if (!(s !== "submit" && s !== "reset" || e != null)) {
        _t(t);
        return;
      }
      n = n != null ? "" + ve(n) : "", e = e != null ? "" + ve(e) : n, m || e === t.value || (t.value = e), t.defaultValue = e;
    }
    l = l ?? r, l = typeof l != "function" && typeof l != "symbol" && !!l, t.checked = m ? t.checked : !!l, t.defaultChecked = !!l, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (t.name = f), _t(t);
  }
  function Ti(t, e, n) {
    e === "number" && Mn(t.ownerDocument) === t || t.defaultValue === "" + n || (t.defaultValue = "" + n);
  }
  function Jt(t, e, n, l) {
    if (t = t.options, e) {
      e = {};
      for (var r = 0; r < n.length; r++)
        e["$" + n[r]] = !0;
      for (n = 0; n < t.length; n++)
        r = e.hasOwnProperty("$" + t[n].value), t[n].selected !== r && (t[n].selected = r), r && l && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + ve(n), e = null, r = 0; r < t.length; r++) {
        if (t[r].value === n) {
          t[r].selected = !0, l && (t[r].defaultSelected = !0);
          return;
        }
        e !== null || t[r].disabled || (e = t[r]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Ui(t, e, n) {
    if (e != null && (e = "" + ve(e), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + ve(n) : "";
  }
  function Cn(t, e, n, l) {
    if (e == null) {
      if (l != null) {
        if (n != null) throw Error(A(92));
        if (ge(l)) {
          if (1 < l.length) throw Error(A(93));
          l = l[0];
        }
        n = l;
      }
      n == null && (n = ""), e = n;
    }
    n = ve(e), t.defaultValue = n, l = t.textContent, l === n && l !== "" && l !== null && (t.value = l), _t(t);
  }
  function fi(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var io = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function An(t, e, n) {
    var l = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? l ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : l ? t.setProperty(e, n) : typeof n != "number" || n === 0 || io.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px";
  }
  function ll(t, e, n) {
    if (e != null && typeof e != "object")
      throw Error(A(62));
    if (t = t.style, n != null) {
      for (var l in n)
        !n.hasOwnProperty(l) || e != null && e.hasOwnProperty(l) || (l.indexOf("--") === 0 ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "");
      for (var r in e)
        l = e[r], e.hasOwnProperty(r) && n[r] !== l && An(t, r, l);
    } else
      for (var s in e)
        e.hasOwnProperty(s) && An(t, s, e[s]);
  }
  function xa(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var ol = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), no = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function On(t) {
    return no.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function qe() {
  }
  var rl = null;
  function Sa(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var kn = null, dt = null;
  function ti(t) {
    var e = Tn(t);
    if (e && (t = e.stateNode)) {
      var n = t[xe] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (eo(
            t,
            n.value,
            n.defaultValue,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name
          ), e = n.name, n.type === "radio" && e != null) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll(
              'input[name="' + Ft(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < n.length; e++) {
              var l = n[e];
              if (l !== t && l.form === t.form) {
                var r = l[xe] || null;
                if (!r) throw Error(A(90));
                eo(
                  l,
                  r.value,
                  r.defaultValue,
                  r.defaultValue,
                  r.checked,
                  r.defaultChecked,
                  r.type,
                  r.name
                );
              }
            }
            for (e = 0; e < n.length; e++)
              l = n[e], l.form === t.form && te(l);
          }
          break t;
        case "textarea":
          Ui(t, n.value, n.defaultValue);
          break t;
        case "select":
          e = n.value, e != null && Jt(t, !!n.multiple, e, !1);
      }
    }
  }
  var Ut = !1;
  function ao(t, e, n) {
    if (Ut) return t(e, n);
    Ut = !0;
    try {
      var l = t(e);
      return l;
    } finally {
      if (Ut = !1, (kn !== null || dt !== null) && (us(), kn && (e = kn, t = dt, dt = kn = null, ti(e), t)))
        for (e = 0; e < t.length; e++) ti(t[e]);
    }
  }
  function rn(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var l = n[xe] || null;
    if (l === null) return null;
    n = l[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) || (t = t.type, l = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !l;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function")
      throw Error(
        A(231, e, typeof n)
      );
    return n;
  }
  var ei = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), La = !1;
  if (ei)
    try {
      var ii = {};
      Object.defineProperty(ii, "passive", {
        get: function() {
          La = !0;
        }
      }), window.addEventListener("test", ii, ii), window.removeEventListener("test", ii, ii);
    } catch {
      La = !1;
    }
  var hi = null, sn = null, ne = null;
  function Hi() {
    if (ne) return ne;
    var t, e = sn, n = e.length, l, r = "value" in hi ? hi.value : hi.textContent, s = r.length;
    for (t = 0; t < n && e[t] === r[t]; t++) ;
    var f = n - t;
    for (l = 1; l <= f && e[n - l] === r[s - l]; l++) ;
    return ne = r.slice(t, 1 < l ? 1 - l : void 0);
  }
  function za(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Ea() {
    return !0;
  }
  function mr() {
    return !1;
  }
  function we(t) {
    function e(n, l, r, s, f) {
      this._reactName = n, this._targetInst = r, this.type = l, this.nativeEvent = s, this.target = f, this.currentTarget = null;
      for (var m in t)
        t.hasOwnProperty(m) && (n = t[m], this[m] = n ? n(s) : s[m]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Ea : mr, this.isPropagationStopped = mr, this;
    }
    return E(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ea);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ea);
      },
      persist: function() {
      },
      isPersistent: Ea
    }), e;
  }
  var wi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, sl = we(wi), Nn = E({}, wi, { view: 0, detail: 0 }), Et = we(Nn), lo, Ze, Mi, Ta = E({}, Nn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: fo,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Mi && (Mi && t.type === "mousemove" ? (lo = t.screenX - Mi.screenX, Ze = t.screenY - Mi.screenY) : Ze = lo = 0, Mi = t), lo);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Ze;
    }
  }), pr = we(Ta), oo = E({}, Ta, { dataTransfer: 0 }), Gs = we(oo), _r = E({}, Nn, { relatedTarget: 0 }), ro = we(_r), qs = E({}, wi, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), so = we(qs), js = E({}, wi, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), di = we(js), Ps = E({}, wi, { data: 0 }), uo = we(Ps), Gi = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, gr = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, vr = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function co(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = vr[t]) ? !!e[t] : !1;
  }
  function fo() {
    return co;
  }
  var yr = E({}, Nn, {
    key: function(t) {
      if (t.key) {
        var e = Gi[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = za(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? gr[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: fo,
    charCode: function(t) {
      return t.type === "keypress" ? za(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? za(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), br = we(yr), Ys = E({}, Ta, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), xr = we(Ys), ho = E({}, Nn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: fo
  }), Vs = we(ho), Sr = E({}, wi, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Lr = we(Sr), ul = E({}, Ta, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), un = we(ul), Xs = E({}, wi, {
    newState: 0,
    oldState: 0
  }), wa = we(Xs), je = [9, 13, 27, 32], cl = ei && "CompositionEvent" in window, Dn = null;
  ei && "documentMode" in document && (Dn = document.documentMode);
  var Qs = ei && "TextEvent" in window && !Dn, fl = ei && (!cl || Dn && 8 < Dn && 11 >= Dn), hl = " ", zr = !1;
  function Er(t, e) {
    switch (t) {
      case "keyup":
        return je.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function mo(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Bn = !1;
  function ni(t, e) {
    switch (t) {
      case "compositionend":
        return mo(e);
      case "keypress":
        return e.which !== 32 ? null : (zr = !0, hl);
      case "textInput":
        return t = e.data, t === hl && zr ? null : t;
      default:
        return null;
    }
  }
  function Zn(t, e) {
    if (Bn)
      return t === "compositionend" || !cl && Er(t, e) ? (t = Hi(), ne = sn = hi = null, Bn = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
            return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return fl && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Ks = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function mi(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Ks[t.type] : e === "textarea";
  }
  function Tr(t, e, n, l) {
    kn ? dt ? dt.push(l) : dt = [l] : kn = l, e = _s(e, "onChange"), 0 < e.length && (n = new sl(
      "onChange",
      "change",
      null,
      n,
      l
    ), t.push({ event: n, listeners: e }));
  }
  var pi = null, Ma = null;
  function Ca(t) {
    Ih(t, 0);
  }
  function Aa(t) {
    var e = Zi(t);
    if (te(e)) return t;
  }
  function Oa(t, e) {
    if (t === "change") return e;
  }
  var wr = !1;
  if (ei) {
    var _i;
    if (ei) {
      var Rn = "oninput" in document;
      if (!Rn) {
        var Mr = document.createElement("div");
        Mr.setAttribute("oninput", "return;"), Rn = typeof Mr.oninput == "function";
      }
      _i = Rn;
    } else _i = !1;
    wr = _i && (!document.documentMode || 9 < document.documentMode);
  }
  function dl() {
    pi && (pi.detachEvent("onpropertychange", Cr), Ma = pi = null);
  }
  function Cr(t) {
    if (t.propertyName === "value" && Aa(Ma)) {
      var e = [];
      Tr(
        e,
        Ma,
        t,
        Sa(t)
      ), ao(Ca, e);
    }
  }
  function Ci(t, e, n) {
    t === "focusin" ? (dl(), pi = e, Ma = n, pi.attachEvent("onpropertychange", Cr)) : t === "focusout" && dl();
  }
  function Js(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Aa(Ma);
  }
  function Un(t, e) {
    if (t === "click") return Aa(e);
  }
  function Ws(t, e) {
    if (t === "input" || t === "change")
      return Aa(e);
  }
  function Ai(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var Se = typeof Object.is == "function" ? Object.is : Ai;
  function Hn(t, e) {
    if (Se(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var n = Object.keys(t), l = Object.keys(e);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var r = n[l];
      if (!Vl.call(e, r) || !Se(t[r], e[r]))
        return !1;
    }
    return !0;
  }
  function ml(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function ka(t, e) {
    var n = ml(t);
    t = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (l = t + n.textContent.length, t <= e && l >= e)
          return { node: n, offset: e - t };
        t = l;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = ml(n);
    }
  }
  function pl(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? pl(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function Na(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Mn(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = Mn(t.document);
    }
    return e;
  }
  function qi(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var _l = ei && "documentMode" in document && 11 >= document.documentMode, ji = null, gl = null, Da = null, Gn = !1;
  function Ar(t, e, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Gn || ji == null || ji !== Mn(l) || (l = ji, "selectionStart" in l && qi(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), Da && Hn(Da, l) || (Da = l, l = _s(gl, "onSelect"), 0 < l.length && (e = new sl(
      "onSelect",
      "select",
      null,
      e,
      n
    ), t.push({ event: e, listeners: l }), e.target = ji)));
  }
  function Pi(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
  }
  var qn = {
    animationend: Pi("Animation", "AnimationEnd"),
    animationiteration: Pi("Animation", "AnimationIteration"),
    animationstart: Pi("Animation", "AnimationStart"),
    transitionrun: Pi("Transition", "TransitionRun"),
    transitionstart: Pi("Transition", "TransitionStart"),
    transitioncancel: Pi("Transition", "TransitionCancel"),
    transitionend: Pi("Transition", "TransitionEnd")
  }, vl = {}, Or = {};
  ei && (Or = document.createElement("div").style, "AnimationEvent" in window || (delete qn.animationend.animation, delete qn.animationiteration.animation, delete qn.animationstart.animation), "TransitionEvent" in window || delete qn.transitionend.transition);
  function Le(t) {
    if (vl[t]) return vl[t];
    if (!qn[t]) return t;
    var e = qn[t], n;
    for (n in e)
      if (e.hasOwnProperty(n) && n in Or)
        return vl[t] = e[n];
    return t;
  }
  var Ba = Le("animationend"), kr = Le("animationiteration"), Za = Le("animationstart"), Is = Le("transitionrun"), Nr = Le("transitionstart"), Fs = Le("transitioncancel"), jn = Le("transitionend"), Dr = /* @__PURE__ */ new Map(), Yi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Yi.push("scrollEnd");
  function Pe(t, e) {
    Dr.set(t, e), ln(e, [t]);
  }
  var Ra = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, Ye = [], Oe = 0, yl = 0;
  function Ua() {
    for (var t = Oe, e = yl = Oe = 0; e < t; ) {
      var n = Ye[e];
      Ye[e++] = null;
      var l = Ye[e];
      Ye[e++] = null;
      var r = Ye[e];
      Ye[e++] = null;
      var s = Ye[e];
      if (Ye[e++] = null, l !== null && r !== null) {
        var f = l.pending;
        f === null ? r.next = r : (r.next = f.next, f.next = r), l.pending = r;
      }
      s !== 0 && Pn(n, r, s);
    }
  }
  function Vi(t, e, n, l) {
    Ye[Oe++] = t, Ye[Oe++] = e, Ye[Oe++] = n, Ye[Oe++] = l, yl |= l, t.lanes |= l, t = t.alternate, t !== null && (t.lanes |= l);
  }
  function po(t, e, n, l) {
    return Vi(t, e, n, l), Ha(t);
  }
  function gi(t, e) {
    return Vi(t, null, null, e), Ha(t);
  }
  function Pn(t, e, n) {
    t.lanes |= n;
    var l = t.alternate;
    l !== null && (l.lanes |= n);
    for (var r = !1, s = t.return; s !== null; )
      s.childLanes |= n, l = s.alternate, l !== null && (l.childLanes |= n), s.tag === 22 && (t = s.stateNode, t === null || t._visibility & 1 || (r = !0)), t = s, s = s.return;
    return t.tag === 3 ? (s = t.stateNode, r && e !== null && (r = 31 - Be(n), t = s.hiddenUpdates, l = t[r], l === null ? t[r] = [e] : l.push(e), e.lane = n | 536870912), s) : null;
  }
  function Ha(t) {
    if (50 < Go)
      throw Go = 0, tc = null, Error(A(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var cn = {};
  function $s(t, e, n, l) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ke(t, e, n, l) {
    return new $s(t, e, n, l);
  }
  function bl(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function vi(t, e) {
    var n = t.alternate;
    return n === null ? (n = ke(
      t.tag,
      e,
      t.key,
      t.mode
    ), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 65011712, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n;
  }
  function _o(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Ga(t, e, n, l, r, s) {
    var f = 0;
    if (l = t, typeof t == "function") bl(t) && (f = 1);
    else if (typeof t == "string")
      f = ip(
        t,
        n,
        z.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case Ee:
          return t = ke(31, n, e, r), t.elementType = Ee, t.lanes = s, t;
        case Y:
          return fn(n.children, r, s, e);
        case ct:
          f = 8, r |= 24;
          break;
        case W:
          return t = ke(12, n, e, r | 2), t.elementType = W, t.lanes = s, t;
        case Gt:
          return t = ke(13, n, e, r), t.elementType = Gt, t.lanes = s, t;
        case It:
          return t = ke(19, n, e, r), t.elementType = It, t.lanes = s, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case at:
                f = 10;
                break t;
              case I:
                f = 9;
                break t;
              case Ht:
                f = 11;
                break t;
              case pt:
                f = 14;
                break t;
              case ce:
                f = 16, l = null;
                break t;
            }
          f = 29, n = Error(
            A(130, t === null ? "null" : typeof t, "")
          ), l = null;
      }
    return e = ke(f, n, e, r), e.elementType = t, e.type = l, e.lanes = s, e;
  }
  function fn(t, e, n, l) {
    return t = ke(7, t, l, e), t.lanes = n, t;
  }
  function xl(t, e, n) {
    return t = ke(6, t, null, e), t.lanes = n, t;
  }
  function go(t) {
    var e = ke(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function vo(t, e, n) {
    return e = ke(
      4,
      t.children !== null ? t.children : [],
      t.key,
      e
    ), e.lanes = n, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var i = /* @__PURE__ */ new WeakMap();
  function a(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = i.get(t);
      return n !== void 0 ? n : (e = {
        value: t,
        source: e,
        stack: ua(e)
      }, i.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: ua(e)
    };
  }
  var o = [], u = 0, c = null, d = 0, y = [], C = 0, D = null, V = 1, et = "";
  function ut(t, e) {
    o[u++] = d, o[u++] = c, c = t, d = e;
  }
  function yt(t, e, n) {
    y[C++] = V, y[C++] = et, y[C++] = D, D = t;
    var l = V;
    t = et;
    var r = 32 - Be(l) - 1;
    l &= ~(1 << r), n += 1;
    var s = 32 - Be(e) + r;
    if (30 < s) {
      var f = r - r % 5;
      s = (l & (1 << f) - 1).toString(32), l >>= f, r -= f, V = 1 << 32 - Be(e) + r | n << r | l, et = s + t;
    } else
      V = 1 << s | n << r | l, et = t;
  }
  function ye(t) {
    t.return !== null && (ut(t, 1), yt(t, 1, 0));
  }
  function ae(t) {
    for (; t === c; )
      c = o[--u], o[u] = null, d = o[--u], o[u] = null;
    for (; t === D; )
      D = y[--C], y[C] = null, et = y[--C], y[C] = null, V = y[--C], y[C] = null;
  }
  function Re(t, e) {
    y[C++] = V, y[C++] = et, y[C++] = D, V = e.id, et = e.overflow, D = t;
  }
  var kt = null, Nt = null, St = !1, Xi = null, Ve = !1, Sl = Error(A(519));
  function Qi(t) {
    var e = Error(
      A(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw qa(a(e, t)), Sl;
  }
  function yo(t) {
    var e = t.stateNode, n = t.type, l = t.memoizedProps;
    switch (e[fe] = t, e[xe] = l, n) {
      case "dialog":
        zt("cancel", e), zt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        zt("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < jo.length; n++)
          zt(jo[n], e);
        break;
      case "source":
        zt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        zt("error", e), zt("load", e);
        break;
      case "details":
        zt("toggle", e);
        break;
      case "input":
        zt("invalid", e), ba(
          e,
          l.value,
          l.defaultValue,
          l.checked,
          l.defaultChecked,
          l.type,
          l.name,
          !0
        );
        break;
      case "select":
        zt("invalid", e);
        break;
      case "textarea":
        zt("invalid", e), Cn(e, l.value, l.defaultValue, l.children);
    }
    n = l.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || l.suppressHydrationWarning === !0 || ed(e.textContent, n) ? (l.popover != null && (zt("beforetoggle", e), zt("toggle", e)), l.onScroll != null && zt("scroll", e), l.onScrollEnd != null && zt("scrollend", e), l.onClick != null && (e.onclick = qe), e = !0) : e = !1, e || Qi(t, !0);
  }
  function ie(t) {
    for (kt = t.return; kt; )
      switch (kt.tag) {
        case 5:
        case 31:
        case 13:
          Ve = !1;
          return;
        case 27:
        case 3:
          Ve = !0;
          return;
        default:
          kt = kt.return;
      }
  }
  function Oi(t) {
    if (t !== kt) return !1;
    if (!St) return ie(t), St = !0, !1;
    var e = t.tag, n;
    if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || pc(t.type, t.memoizedProps)), n = !n), n && Nt && Qi(t), ie(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(A(317));
      Nt = cd(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(A(317));
      Nt = cd(t);
    } else
      e === 27 ? (e = Nt, na(t.type) ? (t = bc, bc = null, Nt = t) : Nt = e) : Nt = kt ? bi(t.stateNode.nextSibling) : null;
    return !0;
  }
  function hn() {
    Nt = kt = null, St = !1;
  }
  function bo() {
    var t = Xi;
    return t !== null && (Je === null ? Je = t : Je.push.apply(
      Je,
      t
    ), Xi = null), t;
  }
  function qa(t) {
    Xi === null ? Xi = [t] : Xi.push(t);
  }
  var ja = S(null), Ki = null, ki = null;
  function Yn(t, e, n) {
    J(ja, e._currentValue), e._currentValue = n;
  }
  function dn(t) {
    t._currentValue = ja.current, G(ja);
  }
  function tu(t, e, n) {
    for (; t !== null; ) {
      var l = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, l !== null && (l.childLanes |= e)) : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e), t === n) break;
      t = t.return;
    }
  }
  function eu(t, e, n, l) {
    var r = t.child;
    for (r !== null && (r.return = t); r !== null; ) {
      var s = r.dependencies;
      if (s !== null) {
        var f = r.child;
        s = s.firstContext;
        t: for (; s !== null; ) {
          var m = s;
          s = r;
          for (var b = 0; b < e.length; b++)
            if (m.context === e[b]) {
              s.lanes |= n, m = s.alternate, m !== null && (m.lanes |= n), tu(
                s.return,
                n,
                t
              ), l || (f = null);
              break t;
            }
          s = m.next;
        }
      } else if (r.tag === 18) {
        if (f = r.return, f === null) throw Error(A(341));
        f.lanes |= n, s = f.alternate, s !== null && (s.lanes |= n), tu(f, n, t), f = null;
      } else f = r.child;
      if (f !== null) f.return = r;
      else
        for (f = r; f !== null; ) {
          if (f === t) {
            f = null;
            break;
          }
          if (r = f.sibling, r !== null) {
            r.return = f.return, f = r;
            break;
          }
          f = f.return;
        }
      r = f;
    }
  }
  function Ll(t, e, n, l) {
    t = null;
    for (var r = e, s = !1; r !== null; ) {
      if (!s) {
        if ((r.flags & 524288) !== 0) s = !0;
        else if ((r.flags & 262144) !== 0) break;
      }
      if (r.tag === 10) {
        var f = r.alternate;
        if (f === null) throw Error(A(387));
        if (f = f.memoizedProps, f !== null) {
          var m = r.type;
          Se(r.pendingProps.value, f.value) || (t !== null ? t.push(m) : t = [m]);
        }
      } else if (r === mt.current) {
        if (f = r.alternate, f === null) throw Error(A(387));
        f.memoizedState.memoizedState !== r.memoizedState.memoizedState && (t !== null ? t.push(Qo) : t = [Qo]);
      }
      r = r.return;
    }
    t !== null && eu(
      e,
      t,
      n,
      l
    ), e.flags |= 262144;
  }
  function Br(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Se(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function Pa(t) {
    Ki = t, ki = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Me(t) {
    return Hc(Ki, t);
  }
  function Zr(t, e) {
    return Ki === null && Pa(t), Hc(t, e);
  }
  function Hc(t, e) {
    var n = e._currentValue;
    if (e = { context: e, memoizedValue: n, next: null }, ki === null) {
      if (t === null) throw Error(A(308));
      ki = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else ki = ki.next = e;
    return n;
  }
  var Fd = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(n, l) {
        t.push(l);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(n) {
        return n();
      });
    };
  }, $d = j.unstable_scheduleCallback, tm = j.unstable_NormalPriority, de = {
    $$typeof: at,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function iu() {
    return {
      controller: new Fd(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function xo(t) {
    t.refCount--, t.refCount === 0 && $d(tm, function() {
      t.controller.abort();
    });
  }
  var So = null, nu = 0, zl = 0, El = null;
  function em(t, e) {
    if (So === null) {
      var n = So = [];
      nu = 0, zl = oc(), El = {
        status: "pending",
        value: void 0,
        then: function(l) {
          n.push(l);
        }
      };
    }
    return nu++, e.then(Gc, Gc), e;
  }
  function Gc() {
    if (--nu === 0 && So !== null) {
      El !== null && (El.status = "fulfilled");
      var t = So;
      So = null, zl = 0, El = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function im(t, e) {
    var n = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(r) {
        n.push(r);
      }
    };
    return t.then(
      function() {
        l.status = "fulfilled", l.value = e;
        for (var r = 0; r < n.length; r++) (0, n[r])(e);
      },
      function(r) {
        for (l.status = "rejected", l.reason = r, r = 0; r < n.length; r++)
          (0, n[r])(void 0);
      }
    ), l;
  }
  var qc = Z.S;
  Z.S = function(t, e) {
    Eh = De(), typeof e == "object" && e !== null && typeof e.then == "function" && em(t, e), qc !== null && qc(t, e);
  };
  var Ya = S(null);
  function au() {
    var t = Ya.current;
    return t !== null ? t : Wt.pooledCache;
  }
  function Rr(t, e) {
    e === null ? J(Ya, Ya.current) : J(Ya, e.pool);
  }
  function jc() {
    var t = au();
    return t === null ? null : { parent: de._currentValue, pool: t };
  }
  var Tl = Error(A(460)), lu = Error(A(474)), Ur = Error(A(542)), Hr = { then: function() {
  } };
  function Pc(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Yc(t, e, n) {
    switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(qe, qe), e = n), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, Xc(t), t;
      default:
        if (typeof e.status == "string") e.then(qe, qe);
        else {
          if (t = Wt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(A(482));
          t = e, t.status = "pending", t.then(
            function(l) {
              if (e.status === "pending") {
                var r = e;
                r.status = "fulfilled", r.value = l;
              }
            },
            function(l) {
              if (e.status === "pending") {
                var r = e;
                r.status = "rejected", r.reason = l;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, Xc(t), t;
        }
        throw Xa = e, Tl;
    }
  }
  function Va(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (Xa = n, Tl) : n;
    }
  }
  var Xa = null;
  function Vc() {
    if (Xa === null) throw Error(A(459));
    var t = Xa;
    return Xa = null, t;
  }
  function Xc(t) {
    if (t === Tl || t === Ur)
      throw Error(A(483));
  }
  var wl = null, Lo = 0;
  function Gr(t) {
    var e = Lo;
    return Lo += 1, wl === null && (wl = []), Yc(wl, t, e);
  }
  function zo(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function qr(t, e) {
    throw e.$$typeof === R ? Error(A(525)) : (t = Object.prototype.toString.call(e), Error(
      A(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function Qc(t) {
    function e(M, T) {
      if (t) {
        var O = M.deletions;
        O === null ? (M.deletions = [T], M.flags |= 16) : O.push(T);
      }
    }
    function n(M, T) {
      if (!t) return null;
      for (; T !== null; )
        e(M, T), T = T.sibling;
      return null;
    }
    function l(M) {
      for (var T = /* @__PURE__ */ new Map(); M !== null; )
        M.key !== null ? T.set(M.key, M) : T.set(M.index, M), M = M.sibling;
      return T;
    }
    function r(M, T) {
      return M = vi(M, T), M.index = 0, M.sibling = null, M;
    }
    function s(M, T, O) {
      return M.index = O, t ? (O = M.alternate, O !== null ? (O = O.index, O < T ? (M.flags |= 67108866, T) : O) : (M.flags |= 67108866, T)) : (M.flags |= 1048576, T);
    }
    function f(M) {
      return t && M.alternate === null && (M.flags |= 67108866), M;
    }
    function m(M, T, O, P) {
      return T === null || T.tag !== 6 ? (T = xl(O, M.mode, P), T.return = M, T) : (T = r(T, O), T.return = M, T);
    }
    function b(M, T, O, P) {
      var ft = O.type;
      return ft === Y ? q(
        M,
        T,
        O.props.children,
        P,
        O.key
      ) : T !== null && (T.elementType === ft || typeof ft == "object" && ft !== null && ft.$$typeof === ce && Va(ft) === T.type) ? (T = r(T, O.props), zo(T, O), T.return = M, T) : (T = Ga(
        O.type,
        O.key,
        O.props,
        null,
        M.mode,
        P
      ), zo(T, O), T.return = M, T);
    }
    function k(M, T, O, P) {
      return T === null || T.tag !== 4 || T.stateNode.containerInfo !== O.containerInfo || T.stateNode.implementation !== O.implementation ? (T = vo(O, M.mode, P), T.return = M, T) : (T = r(T, O.children || []), T.return = M, T);
    }
    function q(M, T, O, P, ft) {
      return T === null || T.tag !== 7 ? (T = fn(
        O,
        M.mode,
        P,
        ft
      ), T.return = M, T) : (T = r(T, O), T.return = M, T);
    }
    function X(M, T, O) {
      if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
        return T = xl(
          "" + T,
          M.mode,
          O
        ), T.return = M, T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case H:
            return O = Ga(
              T.type,
              T.key,
              T.props,
              null,
              M.mode,
              O
            ), zo(O, T), O.return = M, O;
          case tt:
            return T = vo(
              T,
              M.mode,
              O
            ), T.return = M, T;
          case ce:
            return T = Va(T), X(M, T, O);
        }
        if (ge(T) || Mt(T))
          return T = fn(
            T,
            M.mode,
            O,
            null
          ), T.return = M, T;
        if (typeof T.then == "function")
          return X(M, Gr(T), O);
        if (T.$$typeof === at)
          return X(
            M,
            Zr(M, T),
            O
          );
        qr(M, T);
      }
      return null;
    }
    function B(M, T, O, P) {
      var ft = T !== null ? T.key : null;
      if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
        return ft !== null ? null : m(M, T, "" + O, P);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case H:
            return O.key === ft ? b(M, T, O, P) : null;
          case tt:
            return O.key === ft ? k(M, T, O, P) : null;
          case ce:
            return O = Va(O), B(M, T, O, P);
        }
        if (ge(O) || Mt(O))
          return ft !== null ? null : q(M, T, O, P, null);
        if (typeof O.then == "function")
          return B(
            M,
            T,
            Gr(O),
            P
          );
        if (O.$$typeof === at)
          return B(
            M,
            T,
            Zr(M, O),
            P
          );
        qr(M, O);
      }
      return null;
    }
    function U(M, T, O, P, ft) {
      if (typeof P == "string" && P !== "" || typeof P == "number" || typeof P == "bigint")
        return M = M.get(O) || null, m(T, M, "" + P, ft);
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case H:
            return M = M.get(
              P.key === null ? O : P.key
            ) || null, b(T, M, P, ft);
          case tt:
            return M = M.get(
              P.key === null ? O : P.key
            ) || null, k(T, M, P, ft);
          case ce:
            return P = Va(P), U(
              M,
              T,
              O,
              P,
              ft
            );
        }
        if (ge(P) || Mt(P))
          return M = M.get(O) || null, q(T, M, P, ft, null);
        if (typeof P.then == "function")
          return U(
            M,
            T,
            O,
            Gr(P),
            ft
          );
        if (P.$$typeof === at)
          return U(
            M,
            T,
            O,
            Zr(T, P),
            ft
          );
        qr(T, P);
      }
      return null;
    }
    function ot(M, T, O, P) {
      for (var ft = null, Dt = null, rt = T, bt = T = 0, wt = null; rt !== null && bt < O.length; bt++) {
        rt.index > bt ? (wt = rt, rt = null) : wt = rt.sibling;
        var Bt = B(
          M,
          rt,
          O[bt],
          P
        );
        if (Bt === null) {
          rt === null && (rt = wt);
          break;
        }
        t && rt && Bt.alternate === null && e(M, rt), T = s(Bt, T, bt), Dt === null ? ft = Bt : Dt.sibling = Bt, Dt = Bt, rt = wt;
      }
      if (bt === O.length)
        return n(M, rt), St && ut(M, bt), ft;
      if (rt === null) {
        for (; bt < O.length; bt++)
          rt = X(M, O[bt], P), rt !== null && (T = s(
            rt,
            T,
            bt
          ), Dt === null ? ft = rt : Dt.sibling = rt, Dt = rt);
        return St && ut(M, bt), ft;
      }
      for (rt = l(rt); bt < O.length; bt++)
        wt = U(
          rt,
          M,
          bt,
          O[bt],
          P
        ), wt !== null && (t && wt.alternate !== null && rt.delete(
          wt.key === null ? bt : wt.key
        ), T = s(
          wt,
          T,
          bt
        ), Dt === null ? ft = wt : Dt.sibling = wt, Dt = wt);
      return t && rt.forEach(function(sa) {
        return e(M, sa);
      }), St && ut(M, bt), ft;
    }
    function ht(M, T, O, P) {
      if (O == null) throw Error(A(151));
      for (var ft = null, Dt = null, rt = T, bt = T = 0, wt = null, Bt = O.next(); rt !== null && !Bt.done; bt++, Bt = O.next()) {
        rt.index > bt ? (wt = rt, rt = null) : wt = rt.sibling;
        var sa = B(M, rt, Bt.value, P);
        if (sa === null) {
          rt === null && (rt = wt);
          break;
        }
        t && rt && sa.alternate === null && e(M, rt), T = s(sa, T, bt), Dt === null ? ft = sa : Dt.sibling = sa, Dt = sa, rt = wt;
      }
      if (Bt.done)
        return n(M, rt), St && ut(M, bt), ft;
      if (rt === null) {
        for (; !Bt.done; bt++, Bt = O.next())
          Bt = X(M, Bt.value, P), Bt !== null && (T = s(Bt, T, bt), Dt === null ? ft = Bt : Dt.sibling = Bt, Dt = Bt);
        return St && ut(M, bt), ft;
      }
      for (rt = l(rt); !Bt.done; bt++, Bt = O.next())
        Bt = U(rt, M, bt, Bt.value, P), Bt !== null && (t && Bt.alternate !== null && rt.delete(Bt.key === null ? bt : Bt.key), T = s(Bt, T, bt), Dt === null ? ft = Bt : Dt.sibling = Bt, Dt = Bt);
      return t && rt.forEach(function(dp) {
        return e(M, dp);
      }), St && ut(M, bt), ft;
    }
    function Qt(M, T, O, P) {
      if (typeof O == "object" && O !== null && O.type === Y && O.key === null && (O = O.props.children), typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case H:
            t: {
              for (var ft = O.key; T !== null; ) {
                if (T.key === ft) {
                  if (ft = O.type, ft === Y) {
                    if (T.tag === 7) {
                      n(
                        M,
                        T.sibling
                      ), P = r(
                        T,
                        O.props.children
                      ), P.return = M, M = P;
                      break t;
                    }
                  } else if (T.elementType === ft || typeof ft == "object" && ft !== null && ft.$$typeof === ce && Va(ft) === T.type) {
                    n(
                      M,
                      T.sibling
                    ), P = r(T, O.props), zo(P, O), P.return = M, M = P;
                    break t;
                  }
                  n(M, T);
                  break;
                } else e(M, T);
                T = T.sibling;
              }
              O.type === Y ? (P = fn(
                O.props.children,
                M.mode,
                P,
                O.key
              ), P.return = M, M = P) : (P = Ga(
                O.type,
                O.key,
                O.props,
                null,
                M.mode,
                P
              ), zo(P, O), P.return = M, M = P);
            }
            return f(M);
          case tt:
            t: {
              for (ft = O.key; T !== null; ) {
                if (T.key === ft)
                  if (T.tag === 4 && T.stateNode.containerInfo === O.containerInfo && T.stateNode.implementation === O.implementation) {
                    n(
                      M,
                      T.sibling
                    ), P = r(T, O.children || []), P.return = M, M = P;
                    break t;
                  } else {
                    n(M, T);
                    break;
                  }
                else e(M, T);
                T = T.sibling;
              }
              P = vo(O, M.mode, P), P.return = M, M = P;
            }
            return f(M);
          case ce:
            return O = Va(O), Qt(
              M,
              T,
              O,
              P
            );
        }
        if (ge(O))
          return ot(
            M,
            T,
            O,
            P
          );
        if (Mt(O)) {
          if (ft = Mt(O), typeof ft != "function") throw Error(A(150));
          return O = ft.call(O), ht(
            M,
            T,
            O,
            P
          );
        }
        if (typeof O.then == "function")
          return Qt(
            M,
            T,
            Gr(O),
            P
          );
        if (O.$$typeof === at)
          return Qt(
            M,
            T,
            Zr(M, O),
            P
          );
        qr(M, O);
      }
      return typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint" ? (O = "" + O, T !== null && T.tag === 6 ? (n(M, T.sibling), P = r(T, O), P.return = M, M = P) : (n(M, T), P = xl(O, M.mode, P), P.return = M, M = P), f(M)) : n(M, T);
    }
    return function(M, T, O, P) {
      try {
        Lo = 0;
        var ft = Qt(
          M,
          T,
          O,
          P
        );
        return wl = null, ft;
      } catch (rt) {
        if (rt === Tl || rt === Ur) throw rt;
        var Dt = ke(29, rt, null, M.mode);
        return Dt.lanes = P, Dt.return = M, Dt;
      } finally {
      }
    };
  }
  var Qa = Qc(!0), Kc = Qc(!1), Vn = !1;
  function ou(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function ru(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function Xn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Qn(t, e, n) {
    var l = t.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (Rt & 2) !== 0) {
      var r = l.pending;
      return r === null ? e.next = e : (e.next = r.next, r.next = e), l.pending = e, e = Ha(t), Pn(t, null, n), e;
    }
    return Vi(t, l, e, n), Ha(t);
  }
  function Eo(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) {
      var l = e.lanes;
      l &= t.pendingLanes, n |= l, e.lanes = n, sr(t, n);
    }
  }
  function su(t, e) {
    var n = t.updateQueue, l = t.alternate;
    if (l !== null && (l = l.updateQueue, n === l)) {
      var r = null, s = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var f = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          s === null ? r = s = f : s = s.next = f, n = n.next;
        } while (n !== null);
        s === null ? r = s = e : s = s.next = e;
      } else r = s = e;
      n = {
        baseState: l.baseState,
        firstBaseUpdate: r,
        lastBaseUpdate: s,
        shared: l.shared,
        callbacks: l.callbacks
      }, t.updateQueue = n;
      return;
    }
    t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e;
  }
  var uu = !1;
  function To() {
    if (uu) {
      var t = El;
      if (t !== null) throw t;
    }
  }
  function wo(t, e, n, l) {
    uu = !1;
    var r = t.updateQueue;
    Vn = !1;
    var s = r.firstBaseUpdate, f = r.lastBaseUpdate, m = r.shared.pending;
    if (m !== null) {
      r.shared.pending = null;
      var b = m, k = b.next;
      b.next = null, f === null ? s = k : f.next = k, f = b;
      var q = t.alternate;
      q !== null && (q = q.updateQueue, m = q.lastBaseUpdate, m !== f && (m === null ? q.firstBaseUpdate = k : m.next = k, q.lastBaseUpdate = b));
    }
    if (s !== null) {
      var X = r.baseState;
      f = 0, q = k = b = null, m = s;
      do {
        var B = m.lane & -536870913, U = B !== m.lane;
        if (U ? (Tt & B) === B : (l & B) === B) {
          B !== 0 && B === zl && (uu = !0), q !== null && (q = q.next = {
            lane: 0,
            tag: m.tag,
            payload: m.payload,
            callback: null,
            next: null
          });
          t: {
            var ot = t, ht = m;
            B = e;
            var Qt = n;
            switch (ht.tag) {
              case 1:
                if (ot = ht.payload, typeof ot == "function") {
                  X = ot.call(Qt, X, B);
                  break t;
                }
                X = ot;
                break t;
              case 3:
                ot.flags = ot.flags & -65537 | 128;
              case 0:
                if (ot = ht.payload, B = typeof ot == "function" ? ot.call(Qt, X, B) : ot, B == null) break t;
                X = E({}, X, B);
                break t;
              case 2:
                Vn = !0;
            }
          }
          B = m.callback, B !== null && (t.flags |= 64, U && (t.flags |= 8192), U = r.callbacks, U === null ? r.callbacks = [B] : U.push(B));
        } else
          U = {
            lane: B,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null
          }, q === null ? (k = q = U, b = X) : q = q.next = U, f |= B;
        if (m = m.next, m === null) {
          if (m = r.shared.pending, m === null)
            break;
          U = m, m = U.next, U.next = null, r.lastBaseUpdate = U, r.shared.pending = null;
        }
      } while (!0);
      q === null && (b = X), r.baseState = b, r.firstBaseUpdate = k, r.lastBaseUpdate = q, s === null && (r.shared.lanes = 0), Fn |= f, t.lanes = f, t.memoizedState = X;
    }
  }
  function Jc(t, e) {
    if (typeof t != "function")
      throw Error(A(191, t));
    t.call(e);
  }
  function Wc(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++)
        Jc(n[t], e);
  }
  var Ml = S(null), jr = S(0);
  function Ic(t, e) {
    t = Sn, J(jr, t), J(Ml, e), Sn = t | e.baseLanes;
  }
  function cu() {
    J(jr, Sn), J(Ml, Ml.current);
  }
  function fu() {
    Sn = jr.current, G(Ml), G(jr);
  }
  var ai = S(null), yi = null;
  function Kn(t) {
    var e = t.alternate;
    J(se, se.current & 1), J(ai, t), yi === null && (e === null || Ml.current !== null || e.memoizedState !== null) && (yi = t);
  }
  function hu(t) {
    J(se, se.current), J(ai, t), yi === null && (yi = t);
  }
  function Fc(t) {
    t.tag === 22 ? (J(se, se.current), J(ai, t), yi === null && (yi = t)) : Jn();
  }
  function Jn() {
    J(se, se.current), J(ai, ai.current);
  }
  function li(t) {
    G(ai), yi === t && (yi = null), G(se);
  }
  var se = S(0);
  function Pr(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || vc(n) || yc(n)))
          return e;
      } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var mn = 0, vt = null, Vt = null, me = null, Yr = !1, Cl = !1, Ka = !1, Vr = 0, Mo = 0, Al = null, nm = 0;
  function le() {
    throw Error(A(321));
  }
  function du(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!Se(t[n], e[n])) return !1;
    return !0;
  }
  function mu(t, e, n, l, r, s) {
    return mn = s, vt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, Z.H = t === null || t.memoizedState === null ? Zf : Cu, Ka = !1, s = n(l, r), Ka = !1, Cl && (s = tf(
      e,
      n,
      l,
      r
    )), $c(t), s;
  }
  function $c(t) {
    Z.H = Oo;
    var e = Vt !== null && Vt.next !== null;
    if (mn = 0, me = Vt = vt = null, Yr = !1, Mo = 0, Al = null, e) throw Error(A(300));
    t === null || pe || (t = t.dependencies, t !== null && Br(t) && (pe = !0));
  }
  function tf(t, e, n, l) {
    vt = t;
    var r = 0;
    do {
      if (Cl && (Al = null), Mo = 0, Cl = !1, 25 <= r) throw Error(A(301));
      if (r += 1, me = Vt = null, t.updateQueue != null) {
        var s = t.updateQueue;
        s.lastEffect = null, s.events = null, s.stores = null, s.memoCache != null && (s.memoCache.index = 0);
      }
      Z.H = Rf, s = e(n, l);
    } while (Cl);
    return s;
  }
  function am() {
    var t = Z.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? Co(e) : e, t = t.useState()[0], (Vt !== null ? Vt.memoizedState : null) !== t && (vt.flags |= 1024), e;
  }
  function pu() {
    var t = Vr !== 0;
    return Vr = 0, t;
  }
  function _u(t, e, n) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n;
  }
  function gu(t) {
    if (Yr) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      Yr = !1;
    }
    mn = 0, me = Vt = vt = null, Cl = !1, Mo = Vr = 0, Al = null;
  }
  function Ue() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return me === null ? vt.memoizedState = me = t : me = me.next = t, me;
  }
  function ue() {
    if (Vt === null) {
      var t = vt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Vt.next;
    var e = me === null ? vt.memoizedState : me.next;
    if (e !== null)
      me = e, Vt = t;
    else {
      if (t === null)
        throw vt.alternate === null ? Error(A(467)) : Error(A(310));
      Vt = t, t = {
        memoizedState: Vt.memoizedState,
        baseState: Vt.baseState,
        baseQueue: Vt.baseQueue,
        queue: Vt.queue,
        next: null
      }, me === null ? vt.memoizedState = me = t : me = me.next = t;
    }
    return me;
  }
  function Xr() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Co(t) {
    var e = Mo;
    return Mo += 1, Al === null && (Al = []), t = Yc(Al, t, e), e = vt, (me === null ? e.memoizedState : me.next) === null && (e = e.alternate, Z.H = e === null || e.memoizedState === null ? Zf : Cu), t;
  }
  function Qr(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Co(t);
      if (t.$$typeof === at) return Me(t);
    }
    throw Error(A(438, String(t)));
  }
  function vu(t) {
    var e = null, n = vt.updateQueue;
    if (n !== null && (e = n.memoCache), e == null) {
      var l = vt.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (e = {
        data: l.data.map(function(r) {
          return r.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), n === null && (n = Xr(), vt.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0)
      for (n = e.data[e.index] = Array(t), l = 0; l < t; l++)
        n[l] = Fe;
    return e.index++, n;
  }
  function pn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Kr(t) {
    var e = ue();
    return yu(e, Vt, t);
  }
  function yu(t, e, n) {
    var l = t.queue;
    if (l === null) throw Error(A(311));
    l.lastRenderedReducer = n;
    var r = t.baseQueue, s = l.pending;
    if (s !== null) {
      if (r !== null) {
        var f = r.next;
        r.next = s.next, s.next = f;
      }
      e.baseQueue = r = s, l.pending = null;
    }
    if (s = t.baseState, r === null) t.memoizedState = s;
    else {
      e = r.next;
      var m = f = null, b = null, k = e, q = !1;
      do {
        var X = k.lane & -536870913;
        if (X !== k.lane ? (Tt & X) === X : (mn & X) === X) {
          var B = k.revertLane;
          if (B === 0)
            b !== null && (b = b.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: k.action,
              hasEagerState: k.hasEagerState,
              eagerState: k.eagerState,
              next: null
            }), X === zl && (q = !0);
          else if ((mn & B) === B) {
            k = k.next, B === zl && (q = !0);
            continue;
          } else
            X = {
              lane: 0,
              revertLane: k.revertLane,
              gesture: null,
              action: k.action,
              hasEagerState: k.hasEagerState,
              eagerState: k.eagerState,
              next: null
            }, b === null ? (m = b = X, f = s) : b = b.next = X, vt.lanes |= B, Fn |= B;
          X = k.action, Ka && n(s, X), s = k.hasEagerState ? k.eagerState : n(s, X);
        } else
          B = {
            lane: X,
            revertLane: k.revertLane,
            gesture: k.gesture,
            action: k.action,
            hasEagerState: k.hasEagerState,
            eagerState: k.eagerState,
            next: null
          }, b === null ? (m = b = B, f = s) : b = b.next = B, vt.lanes |= X, Fn |= X;
        k = k.next;
      } while (k !== null && k !== e);
      if (b === null ? f = s : b.next = m, !Se(s, t.memoizedState) && (pe = !0, q && (n = El, n !== null)))
        throw n;
      t.memoizedState = s, t.baseState = f, t.baseQueue = b, l.lastRenderedState = s;
    }
    return r === null && (l.lanes = 0), [t.memoizedState, l.dispatch];
  }
  function bu(t) {
    var e = ue(), n = e.queue;
    if (n === null) throw Error(A(311));
    n.lastRenderedReducer = t;
    var l = n.dispatch, r = n.pending, s = e.memoizedState;
    if (r !== null) {
      n.pending = null;
      var f = r = r.next;
      do
        s = t(s, f.action), f = f.next;
      while (f !== r);
      Se(s, e.memoizedState) || (pe = !0), e.memoizedState = s, e.baseQueue === null && (e.baseState = s), n.lastRenderedState = s;
    }
    return [s, l];
  }
  function ef(t, e, n) {
    var l = vt, r = ue(), s = St;
    if (s) {
      if (n === void 0) throw Error(A(407));
      n = n();
    } else n = e();
    var f = !Se(
      (Vt || r).memoizedState,
      n
    );
    if (f && (r.memoizedState = n, pe = !0), r = r.queue, Lu(lf.bind(null, l, r, t), [
      t
    ]), r.getSnapshot !== e || f || me !== null && me.memoizedState.tag & 1) {
      if (l.flags |= 2048, Ol(
        9,
        { destroy: void 0 },
        af.bind(
          null,
          l,
          r,
          n,
          e
        ),
        null
      ), Wt === null) throw Error(A(349));
      s || (mn & 127) !== 0 || nf(l, e, n);
    }
    return n;
  }
  function nf(t, e, n) {
    t.flags |= 16384, t = { getSnapshot: e, value: n }, e = vt.updateQueue, e === null ? (e = Xr(), vt.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
  }
  function af(t, e, n, l) {
    e.value = n, e.getSnapshot = l, of(e) && rf(t);
  }
  function lf(t, e, n) {
    return n(function() {
      of(e) && rf(t);
    });
  }
  function of(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !Se(t, n);
    } catch {
      return !0;
    }
  }
  function rf(t) {
    var e = gi(t, 2);
    e !== null && We(e, t, 2);
  }
  function xu(t) {
    var e = Ue();
    if (typeof t == "function") {
      var n = t;
      if (t = n(), Ka) {
        zi(!0);
        try {
          n();
        } finally {
          zi(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: pn,
      lastRenderedState: t
    }, e;
  }
  function sf(t, e, n, l) {
    return t.baseState = n, yu(
      t,
      Vt,
      typeof l == "function" ? l : pn
    );
  }
  function lm(t, e, n, l, r) {
    if (Ir(t)) throw Error(A(485));
    if (t = e.action, t !== null) {
      var s = {
        payload: r,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(f) {
          s.listeners.push(f);
        }
      };
      Z.T !== null ? n(!0) : s.isTransition = !1, l(s), n = e.pending, n === null ? (s.next = e.pending = s, uf(e, s)) : (s.next = n.next, e.pending = n.next = s);
    }
  }
  function uf(t, e) {
    var n = e.action, l = e.payload, r = t.state;
    if (e.isTransition) {
      var s = Z.T, f = {};
      Z.T = f;
      try {
        var m = n(r, l), b = Z.S;
        b !== null && b(f, m), cf(t, e, m);
      } catch (k) {
        Su(t, e, k);
      } finally {
        s !== null && f.types !== null && (s.types = f.types), Z.T = s;
      }
    } else
      try {
        s = n(r, l), cf(t, e, s);
      } catch (k) {
        Su(t, e, k);
      }
  }
  function cf(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(l) {
        ff(t, e, l);
      },
      function(l) {
        return Su(t, e, l);
      }
    ) : ff(t, e, n);
  }
  function ff(t, e, n) {
    e.status = "fulfilled", e.value = n, hf(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, uf(t, n)));
  }
  function Su(t, e, n) {
    var l = t.pending;
    if (t.pending = null, l !== null) {
      l = l.next;
      do
        e.status = "rejected", e.reason = n, hf(e), e = e.next;
      while (e !== l);
    }
    t.action = null;
  }
  function hf(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function df(t, e) {
    return e;
  }
  function mf(t, e) {
    if (St) {
      var n = Wt.formState;
      if (n !== null) {
        t: {
          var l = vt;
          if (St) {
            if (Nt) {
              e: {
                for (var r = Nt, s = Ve; r.nodeType !== 8; ) {
                  if (!s) {
                    r = null;
                    break e;
                  }
                  if (r = bi(
                    r.nextSibling
                  ), r === null) {
                    r = null;
                    break e;
                  }
                }
                s = r.data, r = s === "F!" || s === "F" ? r : null;
              }
              if (r) {
                Nt = bi(
                  r.nextSibling
                ), l = r.data === "F!";
                break t;
              }
            }
            Qi(l);
          }
          l = !1;
        }
        l && (e = n[0]);
      }
    }
    return n = Ue(), n.memoizedState = n.baseState = e, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: df,
      lastRenderedState: e
    }, n.queue = l, n = Nf.bind(
      null,
      vt,
      l
    ), l.dispatch = n, l = xu(!1), s = Mu.bind(
      null,
      vt,
      !1,
      l.queue
    ), l = Ue(), r = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, l.queue = r, n = lm.bind(
      null,
      vt,
      r,
      s,
      n
    ), r.dispatch = n, l.memoizedState = t, [e, n, !1];
  }
  function pf(t) {
    var e = ue();
    return _f(e, Vt, t);
  }
  function _f(t, e, n) {
    if (e = yu(
      t,
      e,
      df
    )[0], t = Kr(pn)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var l = Co(e);
      } catch (f) {
        throw f === Tl ? Ur : f;
      }
    else l = e;
    e = ue();
    var r = e.queue, s = r.dispatch;
    return n !== e.memoizedState && (vt.flags |= 2048, Ol(
      9,
      { destroy: void 0 },
      om.bind(null, r, n),
      null
    )), [l, s, t];
  }
  function om(t, e) {
    t.action = e;
  }
  function gf(t) {
    var e = ue(), n = Vt;
    if (n !== null)
      return _f(e, n, t);
    ue(), e = e.memoizedState, n = ue();
    var l = n.queue.dispatch;
    return n.memoizedState = t, [e, l, !1];
  }
  function Ol(t, e, n, l) {
    return t = { tag: t, create: n, deps: l, inst: e, next: null }, e = vt.updateQueue, e === null && (e = Xr(), vt.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (l = n.next, n.next = t, t.next = l, e.lastEffect = t), t;
  }
  function vf() {
    return ue().memoizedState;
  }
  function Jr(t, e, n, l) {
    var r = Ue();
    vt.flags |= t, r.memoizedState = Ol(
      1 | e,
      { destroy: void 0 },
      n,
      l === void 0 ? null : l
    );
  }
  function Wr(t, e, n, l) {
    var r = ue();
    l = l === void 0 ? null : l;
    var s = r.memoizedState.inst;
    Vt !== null && l !== null && du(l, Vt.memoizedState.deps) ? r.memoizedState = Ol(e, s, n, l) : (vt.flags |= t, r.memoizedState = Ol(
      1 | e,
      s,
      n,
      l
    ));
  }
  function yf(t, e) {
    Jr(8390656, 8, t, e);
  }
  function Lu(t, e) {
    Wr(2048, 8, t, e);
  }
  function rm(t) {
    vt.flags |= 4;
    var e = vt.updateQueue;
    if (e === null)
      e = Xr(), vt.updateQueue = e, e.events = [t];
    else {
      var n = e.events;
      n === null ? e.events = [t] : n.push(t);
    }
  }
  function bf(t) {
    var e = ue().memoizedState;
    return rm({ ref: e, nextImpl: t }), function() {
      if ((Rt & 2) !== 0) throw Error(A(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function xf(t, e) {
    return Wr(4, 2, t, e);
  }
  function Sf(t, e) {
    return Wr(4, 4, t, e);
  }
  function Lf(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function() {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return t = t(), e.current = t, function() {
        e.current = null;
      };
  }
  function zf(t, e, n) {
    n = n != null ? n.concat([t]) : null, Wr(4, 4, Lf.bind(null, e, t), n);
  }
  function zu() {
  }
  function Ef(t, e) {
    var n = ue();
    e = e === void 0 ? null : e;
    var l = n.memoizedState;
    return e !== null && du(e, l[1]) ? l[0] : (n.memoizedState = [t, e], t);
  }
  function Tf(t, e) {
    var n = ue();
    e = e === void 0 ? null : e;
    var l = n.memoizedState;
    if (e !== null && du(e, l[1]))
      return l[0];
    if (l = t(), Ka) {
      zi(!0);
      try {
        t();
      } finally {
        zi(!1);
      }
    }
    return n.memoizedState = [l, e], l;
  }
  function Eu(t, e, n) {
    return n === void 0 || (mn & 1073741824) !== 0 && (Tt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = n, t = wh(), vt.lanes |= t, Fn |= t, n);
  }
  function wf(t, e, n, l) {
    return Se(n, e) ? n : Ml.current !== null ? (t = Eu(t, n, l), Se(t, e) || (pe = !0), t) : (mn & 42) === 0 || (mn & 1073741824) !== 0 && (Tt & 261930) === 0 ? (pe = !0, t.memoizedState = n) : (t = wh(), vt.lanes |= t, Fn |= t, e);
  }
  function Mf(t, e, n, l, r) {
    var s = $.p;
    $.p = s !== 0 && 8 > s ? s : 8;
    var f = Z.T, m = {};
    Z.T = m, Mu(t, !1, e, n);
    try {
      var b = r(), k = Z.S;
      if (k !== null && k(m, b), b !== null && typeof b == "object" && typeof b.then == "function") {
        var q = im(
          b,
          l
        );
        Ao(
          t,
          e,
          q,
          si(t)
        );
      } else
        Ao(
          t,
          e,
          l,
          si(t)
        );
    } catch (X) {
      Ao(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: X },
        si()
      );
    } finally {
      $.p = s, f !== null && m.types !== null && (f.types = m.types), Z.T = f;
    }
  }
  function sm() {
  }
  function Tu(t, e, n, l) {
    if (t.tag !== 5) throw Error(A(476));
    var r = Cf(t).queue;
    Mf(
      t,
      r,
      e,
      K,
      n === null ? sm : function() {
        return Af(t), n(l);
      }
    );
  }
  function Cf(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: K,
      baseState: K,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: pn,
        lastRenderedState: K
      },
      next: null
    };
    var n = {};
    return e.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: pn,
        lastRenderedState: n
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function Af(t) {
    var e = Cf(t);
    e.next === null && (e = t.alternate.memoizedState), Ao(
      t,
      e.next.queue,
      {},
      si()
    );
  }
  function wu() {
    return Me(Qo);
  }
  function Of() {
    return ue().memoizedState;
  }
  function kf() {
    return ue().memoizedState;
  }
  function um(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = si();
          t = Xn(n);
          var l = Qn(e, t, n);
          l !== null && (We(l, e, n), Eo(l, e, n)), e = { cache: iu() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function cm(t, e, n) {
    var l = si();
    n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ir(t) ? Df(e, n) : (n = po(t, e, n, l), n !== null && (We(n, t, l), Bf(n, e, l)));
  }
  function Nf(t, e, n) {
    var l = si();
    Ao(t, e, n, l);
  }
  function Ao(t, e, n, l) {
    var r = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ir(t)) Df(e, r);
    else {
      var s = t.alternate;
      if (t.lanes === 0 && (s === null || s.lanes === 0) && (s = e.lastRenderedReducer, s !== null))
        try {
          var f = e.lastRenderedState, m = s(f, n);
          if (r.hasEagerState = !0, r.eagerState = m, Se(m, f))
            return Vi(t, e, r, 0), Wt === null && Ua(), !1;
        } catch {
        } finally {
        }
      if (n = po(t, e, r, l), n !== null)
        return We(n, t, l), Bf(n, e, l), !0;
    }
    return !1;
  }
  function Mu(t, e, n, l) {
    if (l = {
      lane: 2,
      revertLane: oc(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ir(t)) {
      if (e) throw Error(A(479));
    } else
      e = po(
        t,
        n,
        l,
        2
      ), e !== null && We(e, t, 2);
  }
  function Ir(t) {
    var e = t.alternate;
    return t === vt || e !== null && e === vt;
  }
  function Df(t, e) {
    Cl = Yr = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
  }
  function Bf(t, e, n) {
    if ((n & 4194048) !== 0) {
      var l = e.lanes;
      l &= t.pendingLanes, n |= l, e.lanes = n, sr(t, n);
    }
  }
  var Oo = {
    readContext: Me,
    use: Qr,
    useCallback: le,
    useContext: le,
    useEffect: le,
    useImperativeHandle: le,
    useLayoutEffect: le,
    useInsertionEffect: le,
    useMemo: le,
    useReducer: le,
    useRef: le,
    useState: le,
    useDebugValue: le,
    useDeferredValue: le,
    useTransition: le,
    useSyncExternalStore: le,
    useId: le,
    useHostTransitionStatus: le,
    useFormState: le,
    useActionState: le,
    useOptimistic: le,
    useMemoCache: le,
    useCacheRefresh: le
  };
  Oo.useEffectEvent = le;
  var Zf = {
    readContext: Me,
    use: Qr,
    useCallback: function(t, e) {
      return Ue().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: Me,
    useEffect: yf,
    useImperativeHandle: function(t, e, n) {
      n = n != null ? n.concat([t]) : null, Jr(
        4194308,
        4,
        Lf.bind(null, e, t),
        n
      );
    },
    useLayoutEffect: function(t, e) {
      return Jr(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      Jr(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var n = Ue();
      e = e === void 0 ? null : e;
      var l = t();
      if (Ka) {
        zi(!0);
        try {
          t();
        } finally {
          zi(!1);
        }
      }
      return n.memoizedState = [l, e], l;
    },
    useReducer: function(t, e, n) {
      var l = Ue();
      if (n !== void 0) {
        var r = n(e);
        if (Ka) {
          zi(!0);
          try {
            n(e);
          } finally {
            zi(!1);
          }
        }
      } else r = e;
      return l.memoizedState = l.baseState = r, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: r
      }, l.queue = t, t = t.dispatch = cm.bind(
        null,
        vt,
        t
      ), [l.memoizedState, t];
    },
    useRef: function(t) {
      var e = Ue();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = xu(t);
      var e = t.queue, n = Nf.bind(null, vt, e);
      return e.dispatch = n, [t.memoizedState, n];
    },
    useDebugValue: zu,
    useDeferredValue: function(t, e) {
      var n = Ue();
      return Eu(n, t, e);
    },
    useTransition: function() {
      var t = xu(!1);
      return t = Mf.bind(
        null,
        vt,
        t.queue,
        !0,
        !1
      ), Ue().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, n) {
      var l = vt, r = Ue();
      if (St) {
        if (n === void 0)
          throw Error(A(407));
        n = n();
      } else {
        if (n = e(), Wt === null)
          throw Error(A(349));
        (Tt & 127) !== 0 || nf(l, e, n);
      }
      r.memoizedState = n;
      var s = { value: n, getSnapshot: e };
      return r.queue = s, yf(lf.bind(null, l, s, t), [
        t
      ]), l.flags |= 2048, Ol(
        9,
        { destroy: void 0 },
        af.bind(
          null,
          l,
          s,
          n,
          e
        ),
        null
      ), n;
    },
    useId: function() {
      var t = Ue(), e = Wt.identifierPrefix;
      if (St) {
        var n = et, l = V;
        n = (l & ~(1 << 32 - Be(l) - 1)).toString(32) + n, e = "_" + e + "R_" + n, n = Vr++, 0 < n && (e += "H" + n.toString(32)), e += "_";
      } else
        n = nm++, e = "_" + e + "r_" + n.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: wu,
    useFormState: mf,
    useActionState: mf,
    useOptimistic: function(t) {
      var e = Ue();
      e.memoizedState = e.baseState = t;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = n, e = Mu.bind(
        null,
        vt,
        !0,
        n
      ), n.dispatch = e, [t, e];
    },
    useMemoCache: vu,
    useCacheRefresh: function() {
      return Ue().memoizedState = um.bind(
        null,
        vt
      );
    },
    useEffectEvent: function(t) {
      var e = Ue(), n = { impl: t };
      return e.memoizedState = n, function() {
        if ((Rt & 2) !== 0)
          throw Error(A(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, Cu = {
    readContext: Me,
    use: Qr,
    useCallback: Ef,
    useContext: Me,
    useEffect: Lu,
    useImperativeHandle: zf,
    useInsertionEffect: xf,
    useLayoutEffect: Sf,
    useMemo: Tf,
    useReducer: Kr,
    useRef: vf,
    useState: function() {
      return Kr(pn);
    },
    useDebugValue: zu,
    useDeferredValue: function(t, e) {
      var n = ue();
      return wf(
        n,
        Vt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Kr(pn)[0], e = ue().memoizedState;
      return [
        typeof t == "boolean" ? t : Co(t),
        e
      ];
    },
    useSyncExternalStore: ef,
    useId: Of,
    useHostTransitionStatus: wu,
    useFormState: pf,
    useActionState: pf,
    useOptimistic: function(t, e) {
      var n = ue();
      return sf(n, Vt, t, e);
    },
    useMemoCache: vu,
    useCacheRefresh: kf
  };
  Cu.useEffectEvent = bf;
  var Rf = {
    readContext: Me,
    use: Qr,
    useCallback: Ef,
    useContext: Me,
    useEffect: Lu,
    useImperativeHandle: zf,
    useInsertionEffect: xf,
    useLayoutEffect: Sf,
    useMemo: Tf,
    useReducer: bu,
    useRef: vf,
    useState: function() {
      return bu(pn);
    },
    useDebugValue: zu,
    useDeferredValue: function(t, e) {
      var n = ue();
      return Vt === null ? Eu(n, t, e) : wf(
        n,
        Vt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = bu(pn)[0], e = ue().memoizedState;
      return [
        typeof t == "boolean" ? t : Co(t),
        e
      ];
    },
    useSyncExternalStore: ef,
    useId: Of,
    useHostTransitionStatus: wu,
    useFormState: gf,
    useActionState: gf,
    useOptimistic: function(t, e) {
      var n = ue();
      return Vt !== null ? sf(n, Vt, t, e) : (n.baseState = t, [t, n.queue.dispatch]);
    },
    useMemoCache: vu,
    useCacheRefresh: kf
  };
  Rf.useEffectEvent = bf;
  function Au(t, e, n, l) {
    e = t.memoizedState, n = n(l, e), n = n == null ? e : E({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var Ou = {
    enqueueSetState: function(t, e, n) {
      t = t._reactInternals;
      var l = si(), r = Xn(l);
      r.payload = e, n != null && (r.callback = n), e = Qn(t, r, l), e !== null && (We(e, t, l), Eo(e, t, l));
    },
    enqueueReplaceState: function(t, e, n) {
      t = t._reactInternals;
      var l = si(), r = Xn(l);
      r.tag = 1, r.payload = e, n != null && (r.callback = n), e = Qn(t, r, l), e !== null && (We(e, t, l), Eo(e, t, l));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var n = si(), l = Xn(n);
      l.tag = 2, e != null && (l.callback = e), e = Qn(t, l, n), e !== null && (We(e, t, n), Eo(e, t, n));
    }
  };
  function Uf(t, e, n, l, r, s, f) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, s, f) : e.prototype && e.prototype.isPureReactComponent ? !Hn(n, l) || !Hn(r, s) : !0;
  }
  function Hf(t, e, n, l) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, l), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, l), e.state !== t && Ou.enqueueReplaceState(e, e.state, null);
  }
  function Ja(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var l in e)
        l !== "ref" && (n[l] = e[l]);
    }
    if (t = t.defaultProps) {
      n === e && (n = E({}, n));
      for (var r in t)
        n[r] === void 0 && (n[r] = t[r]);
    }
    return n;
  }
  function Gf(t) {
    Ra(t);
  }
  function qf(t) {
    console.error(t);
  }
  function jf(t) {
    Ra(t);
  }
  function Fr(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function Pf(t, e, n) {
    try {
      var l = t.onCaughtError;
      l(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (r) {
      setTimeout(function() {
        throw r;
      });
    }
  }
  function ku(t, e, n) {
    return n = Xn(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      Fr(t, e);
    }, n;
  }
  function Yf(t) {
    return t = Xn(t), t.tag = 3, t;
  }
  function Vf(t, e, n, l) {
    var r = n.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var s = l.value;
      t.payload = function() {
        return r(s);
      }, t.callback = function() {
        Pf(e, n, l);
      };
    }
    var f = n.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (t.callback = function() {
      Pf(e, n, l), typeof r != "function" && ($n === null ? $n = /* @__PURE__ */ new Set([this]) : $n.add(this));
      var m = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: m !== null ? m : ""
      });
    });
  }
  function fm(t, e, n, l, r) {
    if (n.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (e = n.alternate, e !== null && Ll(
        e,
        n,
        r,
        !0
      ), n = ai.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return yi === null ? cs() : n.alternate === null && oe === 0 && (oe = 3), n.flags &= -257, n.flags |= 65536, n.lanes = r, l === Hr ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = /* @__PURE__ */ new Set([l]) : e.add(l), nc(t, l, r)), !1;
          case 22:
            return n.flags |= 65536, l === Hr ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = /* @__PURE__ */ new Set([l]) : n.add(l)), nc(t, l, r)), !1;
        }
        throw Error(A(435, n.tag));
      }
      return nc(t, l, r), cs(), !1;
    }
    if (St)
      return e = ai.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = r, l !== Sl && (t = Error(A(422), { cause: l }), qa(a(t, n)))) : (l !== Sl && (e = Error(A(423), {
        cause: l
      }), qa(
        a(e, n)
      )), t = t.current.alternate, t.flags |= 65536, r &= -r, t.lanes |= r, l = a(l, n), r = ku(
        t.stateNode,
        l,
        r
      ), su(t, r), oe !== 4 && (oe = 2)), !1;
    var s = Error(A(520), { cause: l });
    if (s = a(s, n), Ho === null ? Ho = [s] : Ho.push(s), oe !== 4 && (oe = 2), e === null) return !0;
    l = a(l, n), n = e;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, t = r & -r, n.lanes |= t, t = ku(n.stateNode, l, t), su(n, t), !1;
        case 1:
          if (e = n.type, s = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || s !== null && typeof s.componentDidCatch == "function" && ($n === null || !$n.has(s))))
            return n.flags |= 65536, r &= -r, n.lanes |= r, r = Yf(r), Vf(
              r,
              t,
              n,
              l
            ), su(n, r), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Nu = Error(A(461)), pe = !1;
  function Ce(t, e, n, l) {
    e.child = t === null ? Kc(e, null, n, l) : Qa(
      e,
      t.child,
      n,
      l
    );
  }
  function Xf(t, e, n, l, r) {
    n = n.render;
    var s = e.ref;
    if ("ref" in l) {
      var f = {};
      for (var m in l)
        m !== "ref" && (f[m] = l[m]);
    } else f = l;
    return Pa(e), l = mu(
      t,
      e,
      n,
      f,
      s,
      r
    ), m = pu(), t !== null && !pe ? (_u(t, e, r), _n(t, e, r)) : (St && m && ye(e), e.flags |= 1, Ce(t, e, l, r), e.child);
  }
  function Qf(t, e, n, l, r) {
    if (t === null) {
      var s = n.type;
      return typeof s == "function" && !bl(s) && s.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = s, Kf(
        t,
        e,
        s,
        l,
        r
      )) : (t = Ga(
        n.type,
        null,
        l,
        e,
        e.mode,
        r
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (s = t.child, !qu(t, r)) {
      var f = s.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Hn, n(f, l) && t.ref === e.ref)
        return _n(t, e, r);
    }
    return e.flags |= 1, t = vi(s, l), t.ref = e.ref, t.return = e, e.child = t;
  }
  function Kf(t, e, n, l, r) {
    if (t !== null) {
      var s = t.memoizedProps;
      if (Hn(s, l) && t.ref === e.ref)
        if (pe = !1, e.pendingProps = l = s, qu(t, r))
          (t.flags & 131072) !== 0 && (pe = !0);
        else
          return e.lanes = t.lanes, _n(t, e, r);
    }
    return Du(
      t,
      e,
      n,
      l,
      r
    );
  }
  function Jf(t, e, n, l) {
    var r = l.children, s = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (s = s !== null ? s.baseLanes | n : n, t !== null) {
          for (l = e.child = t.child, r = 0; l !== null; )
            r = r | l.lanes | l.childLanes, l = l.sibling;
          l = r & ~s;
        } else l = 0, e.child = null;
        return Wf(
          t,
          e,
          s,
          n,
          l
        );
      }
      if ((n & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Rr(
          e,
          s !== null ? s.cachePool : null
        ), s !== null ? Ic(e, s) : cu(), Fc(e);
      else
        return l = e.lanes = 536870912, Wf(
          t,
          e,
          s !== null ? s.baseLanes | n : n,
          n,
          l
        );
    } else
      s !== null ? (Rr(e, s.cachePool), Ic(e, s), Jn(), e.memoizedState = null) : (t !== null && Rr(e, null), cu(), Jn());
    return Ce(t, e, r, n), e.child;
  }
  function ko(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function Wf(t, e, n, l, r) {
    var s = au();
    return s = s === null ? null : { parent: de._currentValue, pool: s }, e.memoizedState = {
      baseLanes: n,
      cachePool: s
    }, t !== null && Rr(e, null), cu(), Fc(e), t !== null && Ll(t, e, l, !0), e.childLanes = r, null;
  }
  function $r(t, e) {
    return e = es(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function If(t, e, n) {
    return Qa(e, t.child, null, n), t = $r(e, e.pendingProps), t.flags |= 2, li(e), e.memoizedState = null, t;
  }
  function hm(t, e, n) {
    var l = e.pendingProps, r = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (St) {
        if (l.mode === "hidden")
          return t = $r(e, l), e.lanes = 536870912, ko(null, t);
        if (hu(e), (t = Nt) ? (t = ud(
          t,
          Ve
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: D !== null ? { id: V, overflow: et } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = go(t), n.return = e, e.child = n, kt = e, Nt = null)) : t = null, t === null) throw Qi(e);
        return e.lanes = 536870912, null;
      }
      return $r(e, l);
    }
    var s = t.memoizedState;
    if (s !== null) {
      var f = s.dehydrated;
      if (hu(e), r)
        if (e.flags & 256)
          e.flags &= -257, e = If(
            t,
            e,
            n
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(A(558));
      else if (pe || Ll(t, e, n, !1), r = (n & t.childLanes) !== 0, pe || r) {
        if (l = Wt, l !== null && (f = ur(l, n), f !== 0 && f !== s.retryLane))
          throw s.retryLane = f, gi(t, f), We(l, t, f), Nu;
        cs(), e = If(
          t,
          e,
          n
        );
      } else
        t = s.treeContext, Nt = bi(f.nextSibling), kt = e, St = !0, Xi = null, Ve = !1, t !== null && Re(e, t), e = $r(e, l), e.flags |= 4096;
      return e;
    }
    return t = vi(t.child, {
      mode: l.mode,
      children: l.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function ts(t, e) {
    var n = e.ref;
    if (n === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(A(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function Du(t, e, n, l, r) {
    return Pa(e), n = mu(
      t,
      e,
      n,
      l,
      void 0,
      r
    ), l = pu(), t !== null && !pe ? (_u(t, e, r), _n(t, e, r)) : (St && l && ye(e), e.flags |= 1, Ce(t, e, n, r), e.child);
  }
  function Ff(t, e, n, l, r, s) {
    return Pa(e), e.updateQueue = null, n = tf(
      e,
      l,
      n,
      r
    ), $c(t), l = pu(), t !== null && !pe ? (_u(t, e, s), _n(t, e, s)) : (St && l && ye(e), e.flags |= 1, Ce(t, e, n, s), e.child);
  }
  function $f(t, e, n, l, r) {
    if (Pa(e), e.stateNode === null) {
      var s = cn, f = n.contextType;
      typeof f == "object" && f !== null && (s = Me(f)), s = new n(l, s), e.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = Ou, e.stateNode = s, s._reactInternals = e, s = e.stateNode, s.props = l, s.state = e.memoizedState, s.refs = {}, ou(e), f = n.contextType, s.context = typeof f == "object" && f !== null ? Me(f) : cn, s.state = e.memoizedState, f = n.getDerivedStateFromProps, typeof f == "function" && (Au(
        e,
        n,
        f,
        l
      ), s.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (f = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), f !== s.state && Ou.enqueueReplaceState(s, s.state, null), wo(e, l, s, r), To(), s.state = e.memoizedState), typeof s.componentDidMount == "function" && (e.flags |= 4194308), l = !0;
    } else if (t === null) {
      s = e.stateNode;
      var m = e.memoizedProps, b = Ja(n, m);
      s.props = b;
      var k = s.context, q = n.contextType;
      f = cn, typeof q == "object" && q !== null && (f = Me(q));
      var X = n.getDerivedStateFromProps;
      q = typeof X == "function" || typeof s.getSnapshotBeforeUpdate == "function", m = e.pendingProps !== m, q || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (m || k !== f) && Hf(
        e,
        s,
        l,
        f
      ), Vn = !1;
      var B = e.memoizedState;
      s.state = B, wo(e, l, s, r), To(), k = e.memoizedState, m || B !== k || Vn ? (typeof X == "function" && (Au(
        e,
        n,
        X,
        l
      ), k = e.memoizedState), (b = Vn || Uf(
        e,
        n,
        b,
        l,
        B,
        k,
        f
      )) ? (q || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = l, e.memoizedState = k), s.props = l, s.state = k, s.context = f, l = b) : (typeof s.componentDidMount == "function" && (e.flags |= 4194308), l = !1);
    } else {
      s = e.stateNode, ru(t, e), f = e.memoizedProps, q = Ja(n, f), s.props = q, X = e.pendingProps, B = s.context, k = n.contextType, b = cn, typeof k == "object" && k !== null && (b = Me(k)), m = n.getDerivedStateFromProps, (k = typeof m == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (f !== X || B !== b) && Hf(
        e,
        s,
        l,
        b
      ), Vn = !1, B = e.memoizedState, s.state = B, wo(e, l, s, r), To();
      var U = e.memoizedState;
      f !== X || B !== U || Vn || t !== null && t.dependencies !== null && Br(t.dependencies) ? (typeof m == "function" && (Au(
        e,
        n,
        m,
        l
      ), U = e.memoizedState), (q = Vn || Uf(
        e,
        n,
        q,
        l,
        B,
        U,
        b
      ) || t !== null && t.dependencies !== null && Br(t.dependencies)) ? (k || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(l, U, b), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(
        l,
        U,
        b
      )), typeof s.componentDidUpdate == "function" && (e.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || f === t.memoizedProps && B === t.memoizedState || (e.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && B === t.memoizedState || (e.flags |= 1024), e.memoizedProps = l, e.memoizedState = U), s.props = l, s.state = U, s.context = b, l = q) : (typeof s.componentDidUpdate != "function" || f === t.memoizedProps && B === t.memoizedState || (e.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && B === t.memoizedState || (e.flags |= 1024), l = !1);
    }
    return s = l, ts(t, e), l = (e.flags & 128) !== 0, s || l ? (s = e.stateNode, n = l && typeof n.getDerivedStateFromError != "function" ? null : s.render(), e.flags |= 1, t !== null && l ? (e.child = Qa(
      e,
      t.child,
      null,
      r
    ), e.child = Qa(
      e,
      null,
      n,
      r
    )) : Ce(t, e, n, r), e.memoizedState = s.state, t = e.child) : t = _n(
      t,
      e,
      r
    ), t;
  }
  function th(t, e, n, l) {
    return hn(), e.flags |= 256, Ce(t, e, n, l), e.child;
  }
  var Bu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Zu(t) {
    return { baseLanes: t, cachePool: jc() };
  }
  function Ru(t, e, n) {
    return t = t !== null ? t.childLanes & ~n : 0, e && (t |= ri), t;
  }
  function eh(t, e, n) {
    var l = e.pendingProps, r = !1, s = (e.flags & 128) !== 0, f;
    if ((f = s) || (f = t !== null && t.memoizedState === null ? !1 : (se.current & 2) !== 0), f && (r = !0, e.flags &= -129), f = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (St) {
        if (r ? Kn(e) : Jn(), (t = Nt) ? (t = ud(
          t,
          Ve
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: D !== null ? { id: V, overflow: et } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = go(t), n.return = e, e.child = n, kt = e, Nt = null)) : t = null, t === null) throw Qi(e);
        return yc(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var m = l.children;
      return l = l.fallback, r ? (Jn(), r = e.mode, m = es(
        { mode: "hidden", children: m },
        r
      ), l = fn(
        l,
        r,
        n,
        null
      ), m.return = e, l.return = e, m.sibling = l, e.child = m, l = e.child, l.memoizedState = Zu(n), l.childLanes = Ru(
        t,
        f,
        n
      ), e.memoizedState = Bu, ko(null, l)) : (Kn(e), Uu(e, m));
    }
    var b = t.memoizedState;
    if (b !== null && (m = b.dehydrated, m !== null)) {
      if (s)
        e.flags & 256 ? (Kn(e), e.flags &= -257, e = Hu(
          t,
          e,
          n
        )) : e.memoizedState !== null ? (Jn(), e.child = t.child, e.flags |= 128, e = null) : (Jn(), m = l.fallback, r = e.mode, l = es(
          { mode: "visible", children: l.children },
          r
        ), m = fn(
          m,
          r,
          n,
          null
        ), m.flags |= 2, l.return = e, m.return = e, l.sibling = m, e.child = l, Qa(
          e,
          t.child,
          null,
          n
        ), l = e.child, l.memoizedState = Zu(n), l.childLanes = Ru(
          t,
          f,
          n
        ), e.memoizedState = Bu, e = ko(null, l));
      else if (Kn(e), yc(m)) {
        if (f = m.nextSibling && m.nextSibling.dataset, f) var k = f.dgst;
        f = k, l = Error(A(419)), l.stack = "", l.digest = f, qa({ value: l, source: null, stack: null }), e = Hu(
          t,
          e,
          n
        );
      } else if (pe || Ll(t, e, n, !1), f = (n & t.childLanes) !== 0, pe || f) {
        if (f = Wt, f !== null && (l = ur(f, n), l !== 0 && l !== b.retryLane))
          throw b.retryLane = l, gi(t, l), We(f, t, l), Nu;
        vc(m) || cs(), e = Hu(
          t,
          e,
          n
        );
      } else
        vc(m) ? (e.flags |= 192, e.child = t.child, e = null) : (t = b.treeContext, Nt = bi(
          m.nextSibling
        ), kt = e, St = !0, Xi = null, Ve = !1, t !== null && Re(e, t), e = Uu(
          e,
          l.children
        ), e.flags |= 4096);
      return e;
    }
    return r ? (Jn(), m = l.fallback, r = e.mode, b = t.child, k = b.sibling, l = vi(b, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = b.subtreeFlags & 65011712, k !== null ? m = vi(
      k,
      m
    ) : (m = fn(
      m,
      r,
      n,
      null
    ), m.flags |= 2), m.return = e, l.return = e, l.sibling = m, e.child = l, ko(null, l), l = e.child, m = t.child.memoizedState, m === null ? m = Zu(n) : (r = m.cachePool, r !== null ? (b = de._currentValue, r = r.parent !== b ? { parent: b, pool: b } : r) : r = jc(), m = {
      baseLanes: m.baseLanes | n,
      cachePool: r
    }), l.memoizedState = m, l.childLanes = Ru(
      t,
      f,
      n
    ), e.memoizedState = Bu, ko(t.child, l)) : (Kn(e), n = t.child, t = n.sibling, n = vi(n, {
      mode: "visible",
      children: l.children
    }), n.return = e, n.sibling = null, t !== null && (f = e.deletions, f === null ? (e.deletions = [t], e.flags |= 16) : f.push(t)), e.child = n, e.memoizedState = null, n);
  }
  function Uu(t, e) {
    return e = es(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function es(t, e) {
    return t = ke(22, t, null, e), t.lanes = 0, t;
  }
  function Hu(t, e, n) {
    return Qa(e, t.child, null, n), t = Uu(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function ih(t, e, n) {
    t.lanes |= e;
    var l = t.alternate;
    l !== null && (l.lanes |= e), tu(t.return, e, n);
  }
  function Gu(t, e, n, l, r, s) {
    var f = t.memoizedState;
    f === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: n,
      tailMode: r,
      treeForkCount: s
    } : (f.isBackwards = e, f.rendering = null, f.renderingStartTime = 0, f.last = l, f.tail = n, f.tailMode = r, f.treeForkCount = s);
  }
  function nh(t, e, n) {
    var l = e.pendingProps, r = l.revealOrder, s = l.tail;
    l = l.children;
    var f = se.current, m = (f & 2) !== 0;
    if (m ? (f = f & 1 | 2, e.flags |= 128) : f &= 1, J(se, f), Ce(t, e, l, n), l = St ? d : 0, !m && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && ih(t, n, e);
        else if (t.tag === 19)
          ih(t, n, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (r) {
      case "forwards":
        for (n = e.child, r = null; n !== null; )
          t = n.alternate, t !== null && Pr(t) === null && (r = n), n = n.sibling;
        n = r, n === null ? (r = e.child, e.child = null) : (r = n.sibling, n.sibling = null), Gu(
          e,
          !1,
          r,
          n,
          s,
          l
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, r = e.child, e.child = null; r !== null; ) {
          if (t = r.alternate, t !== null && Pr(t) === null) {
            e.child = r;
            break;
          }
          t = r.sibling, r.sibling = n, n = r, r = t;
        }
        Gu(
          e,
          !0,
          n,
          null,
          s,
          l
        );
        break;
      case "together":
        Gu(
          e,
          !1,
          null,
          null,
          void 0,
          l
        );
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function _n(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies), Fn |= e.lanes, (n & e.childLanes) === 0)
      if (t !== null) {
        if (Ll(
          t,
          e,
          n,
          !1
        ), (n & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(A(153));
    if (e.child !== null) {
      for (t = e.child, n = vi(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; )
        t = t.sibling, n = n.sibling = vi(t, t.pendingProps), n.return = e;
      n.sibling = null;
    }
    return e.child;
  }
  function qu(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Br(t)));
  }
  function dm(t, e, n) {
    switch (e.tag) {
      case 3:
        Zt(e, e.stateNode.containerInfo), Yn(e, de, t.memoizedState.cache), hn();
        break;
      case 27:
      case 5:
        ui(e);
        break;
      case 4:
        Zt(e, e.stateNode.containerInfo);
        break;
      case 10:
        Yn(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, hu(e), null;
        break;
      case 13:
        var l = e.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (Kn(e), e.flags |= 128, null) : (n & e.child.childLanes) !== 0 ? eh(t, e, n) : (Kn(e), t = _n(
            t,
            e,
            n
          ), t !== null ? t.sibling : null);
        Kn(e);
        break;
      case 19:
        var r = (t.flags & 128) !== 0;
        if (l = (n & e.childLanes) !== 0, l || (Ll(
          t,
          e,
          n,
          !1
        ), l = (n & e.childLanes) !== 0), r) {
          if (l)
            return nh(
              t,
              e,
              n
            );
          e.flags |= 128;
        }
        if (r = e.memoizedState, r !== null && (r.rendering = null, r.tail = null, r.lastEffect = null), J(se, se.current), l) break;
        return null;
      case 22:
        return e.lanes = 0, Jf(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        Yn(e, de, t.memoizedState.cache);
    }
    return _n(t, e, n);
  }
  function ah(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        pe = !0;
      else {
        if (!qu(t, n) && (e.flags & 128) === 0)
          return pe = !1, dm(
            t,
            e,
            n
          );
        pe = (t.flags & 131072) !== 0;
      }
    else
      pe = !1, St && (e.flags & 1048576) !== 0 && yt(e, d, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var l = e.pendingProps;
          if (t = Va(e.elementType), e.type = t, typeof t == "function")
            bl(t) ? (l = Ja(t, l), e.tag = 1, e = $f(
              null,
              e,
              t,
              l,
              n
            )) : (e.tag = 0, e = Du(
              null,
              e,
              t,
              l,
              n
            ));
          else {
            if (t != null) {
              var r = t.$$typeof;
              if (r === Ht) {
                e.tag = 11, e = Xf(
                  null,
                  e,
                  t,
                  l,
                  n
                );
                break t;
              } else if (r === pt) {
                e.tag = 14, e = Qf(
                  null,
                  e,
                  t,
                  l,
                  n
                );
                break t;
              }
            }
            throw e = Ot(t) || t, Error(A(306, e, ""));
          }
        }
        return e;
      case 0:
        return Du(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 1:
        return l = e.type, r = Ja(
          l,
          e.pendingProps
        ), $f(
          t,
          e,
          l,
          r,
          n
        );
      case 3:
        t: {
          if (Zt(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(A(387));
          l = e.pendingProps;
          var s = e.memoizedState;
          r = s.element, ru(t, e), wo(e, l, null, n);
          var f = e.memoizedState;
          if (l = f.cache, Yn(e, de, l), l !== s.cache && eu(
            e,
            [de],
            n,
            !0
          ), To(), l = f.element, s.isDehydrated)
            if (s = {
              element: l,
              isDehydrated: !1,
              cache: f.cache
            }, e.updateQueue.baseState = s, e.memoizedState = s, e.flags & 256) {
              e = th(
                t,
                e,
                l,
                n
              );
              break t;
            } else if (l !== r) {
              r = a(
                Error(A(424)),
                e
              ), qa(r), e = th(
                t,
                e,
                l,
                n
              );
              break t;
            } else {
              switch (t = e.stateNode.containerInfo, t.nodeType) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (Nt = bi(t.firstChild), kt = e, St = !0, Xi = null, Ve = !0, n = Kc(
                e,
                null,
                l,
                n
              ), e.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
            }
          else {
            if (hn(), l === r) {
              e = _n(
                t,
                e,
                n
              );
              break t;
            }
            Ce(t, e, l, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return ts(t, e), t === null ? (n = pd(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = n : St || (n = e.type, t = e.pendingProps, l = gs(
          F.current
        ).createElement(n), l[fe] = e, l[xe] = t, Ae(l, n, t), he(l), e.stateNode = l) : e.memoizedState = pd(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return ui(e), t === null && St && (l = e.stateNode = hd(
          e.type,
          e.pendingProps,
          F.current
        ), kt = e, Ve = !0, r = Nt, na(e.type) ? (bc = r, Nt = bi(l.firstChild)) : Nt = r), Ce(
          t,
          e,
          e.pendingProps.children,
          n
        ), ts(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && St && ((r = l = Nt) && (l = Pm(
          l,
          e.type,
          e.pendingProps,
          Ve
        ), l !== null ? (e.stateNode = l, kt = e, Nt = bi(l.firstChild), Ve = !1, r = !0) : r = !1), r || Qi(e)), ui(e), r = e.type, s = e.pendingProps, f = t !== null ? t.memoizedProps : null, l = s.children, pc(r, s) ? l = null : f !== null && pc(r, f) && (e.flags |= 32), e.memoizedState !== null && (r = mu(
          t,
          e,
          am,
          null,
          null,
          n
        ), Qo._currentValue = r), ts(t, e), Ce(t, e, l, n), e.child;
      case 6:
        return t === null && St && ((t = n = Nt) && (n = Ym(
          n,
          e.pendingProps,
          Ve
        ), n !== null ? (e.stateNode = n, kt = e, Nt = null, t = !0) : t = !1), t || Qi(e)), null;
      case 13:
        return eh(t, e, n);
      case 4:
        return Zt(
          e,
          e.stateNode.containerInfo
        ), l = e.pendingProps, t === null ? e.child = Qa(
          e,
          null,
          l,
          n
        ) : Ce(t, e, l, n), e.child;
      case 11:
        return Xf(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 7:
        return Ce(
          t,
          e,
          e.pendingProps,
          n
        ), e.child;
      case 8:
        return Ce(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 12:
        return Ce(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 10:
        return l = e.pendingProps, Yn(e, e.type, l.value), Ce(t, e, l.children, n), e.child;
      case 9:
        return r = e.type._context, l = e.pendingProps.children, Pa(e), r = Me(r), l = l(r), e.flags |= 1, Ce(t, e, l, n), e.child;
      case 14:
        return Qf(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 15:
        return Kf(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 19:
        return nh(t, e, n);
      case 31:
        return hm(t, e, n);
      case 22:
        return Jf(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        return Pa(e), l = Me(de), t === null ? (r = au(), r === null && (r = Wt, s = iu(), r.pooledCache = s, s.refCount++, s !== null && (r.pooledCacheLanes |= n), r = s), e.memoizedState = { parent: l, cache: r }, ou(e), Yn(e, de, r)) : ((t.lanes & n) !== 0 && (ru(t, e), wo(e, null, null, n), To()), r = t.memoizedState, s = e.memoizedState, r.parent !== l ? (r = { parent: l, cache: l }, e.memoizedState = r, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = r), Yn(e, de, l)) : (l = s.cache, Yn(e, de, l), l !== r.cache && eu(
          e,
          [de],
          n,
          !0
        ))), Ce(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(A(156, e.tag));
  }
  function gn(t) {
    t.flags |= 4;
  }
  function ju(t, e, n, l, r) {
    if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
      if (t.flags |= 16777216, (r & 335544128) === r)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Oh()) t.flags |= 8192;
        else
          throw Xa = Hr, lu;
    } else t.flags &= -16777217;
  }
  function lh(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !bd(e))
      if (Oh()) t.flags |= 8192;
      else
        throw Xa = Hr, lu;
  }
  function is(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? or() : 536870912, t.lanes |= e, Bl |= e);
  }
  function No(t, e) {
    if (!St)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; )
            e.alternate !== null && (n = e), e = e.sibling;
          n === null ? t.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = t.tail;
          for (var l = null; n !== null; )
            n.alternate !== null && (l = n), n = n.sibling;
          l === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : l.sibling = null;
      }
  }
  function $t(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, n = 0, l = 0;
    if (e)
      for (var r = t.child; r !== null; )
        n |= r.lanes | r.childLanes, l |= r.subtreeFlags & 65011712, l |= r.flags & 65011712, r.return = t, r = r.sibling;
    else
      for (r = t.child; r !== null; )
        n |= r.lanes | r.childLanes, l |= r.subtreeFlags, l |= r.flags, r.return = t, r = r.sibling;
    return t.subtreeFlags |= l, t.childLanes = n, e;
  }
  function mm(t, e, n) {
    var l = e.pendingProps;
    switch (ae(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return $t(e), null;
      case 1:
        return $t(e), null;
      case 3:
        return n = e.stateNode, l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), dn(de), Kt(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (Oi(e) ? gn(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, bo())), $t(e), null;
      case 26:
        var r = e.type, s = e.memoizedState;
        return t === null ? (gn(e), s !== null ? ($t(e), lh(e, s)) : ($t(e), ju(
          e,
          r,
          null,
          l,
          n
        ))) : s ? s !== t.memoizedState ? (gn(e), $t(e), lh(e, s)) : ($t(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== l && gn(e), $t(e), ju(
          e,
          r,
          t,
          l,
          n
        )), null;
      case 27:
        if (Li(e), n = F.current, r = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== l && gn(e);
        else {
          if (!l) {
            if (e.stateNode === null)
              throw Error(A(166));
            return $t(e), null;
          }
          t = z.current, Oi(e) ? yo(e) : (t = hd(r, l, n), e.stateNode = t, gn(e));
        }
        return $t(e), null;
      case 5:
        if (Li(e), r = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== l && gn(e);
        else {
          if (!l) {
            if (e.stateNode === null)
              throw Error(A(166));
            return $t(e), null;
          }
          if (s = z.current, Oi(e))
            yo(e);
          else {
            var f = gs(
              F.current
            );
            switch (s) {
              case 1:
                s = f.createElementNS(
                  "http://www.w3.org/2000/svg",
                  r
                );
                break;
              case 2:
                s = f.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  r
                );
                break;
              default:
                switch (r) {
                  case "svg":
                    s = f.createElementNS(
                      "http://www.w3.org/2000/svg",
                      r
                    );
                    break;
                  case "math":
                    s = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      r
                    );
                    break;
                  case "script":
                    s = f.createElement("div"), s.innerHTML = "<script><\/script>", s = s.removeChild(
                      s.firstChild
                    );
                    break;
                  case "select":
                    s = typeof l.is == "string" ? f.createElement("select", {
                      is: l.is
                    }) : f.createElement("select"), l.multiple ? s.multiple = !0 : l.size && (s.size = l.size);
                    break;
                  default:
                    s = typeof l.is == "string" ? f.createElement(r, { is: l.is }) : f.createElement(r);
                }
            }
            s[fe] = e, s[xe] = l;
            t: for (f = e.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6)
                s.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === e) break t;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === e)
                  break t;
                f = f.return;
              }
              f.sibling.return = f.return, f = f.sibling;
            }
            e.stateNode = s;
            t: switch (Ae(s, r, l), r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break t;
              case "img":
                l = !0;
                break t;
              default:
                l = !1;
            }
            l && gn(e);
          }
        }
        return $t(e), ju(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          n
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== l && gn(e);
        else {
          if (typeof l != "string" && e.stateNode === null)
            throw Error(A(166));
          if (t = F.current, Oi(e)) {
            if (t = e.stateNode, n = e.memoizedProps, l = null, r = kt, r !== null)
              switch (r.tag) {
                case 27:
                case 5:
                  l = r.memoizedProps;
              }
            t[fe] = e, t = !!(t.nodeValue === n || l !== null && l.suppressHydrationWarning === !0 || ed(t.nodeValue, n)), t || Qi(e, !0);
          } else
            t = gs(t).createTextNode(
              l
            ), t[fe] = e, e.stateNode = t;
        }
        return $t(e), null;
      case 31:
        if (n = e.memoizedState, t === null || t.memoizedState !== null) {
          if (l = Oi(e), n !== null) {
            if (t === null) {
              if (!l) throw Error(A(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(A(557));
              t[fe] = e;
            } else
              hn(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            $t(e), t = !1;
          } else
            n = bo(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), t = !0;
          if (!t)
            return e.flags & 256 ? (li(e), e) : (li(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(A(558));
        }
        return $t(e), null;
      case 13:
        if (l = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (r = Oi(e), l !== null && l.dehydrated !== null) {
            if (t === null) {
              if (!r) throw Error(A(318));
              if (r = e.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(A(317));
              r[fe] = e;
            } else
              hn(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            $t(e), r = !1;
          } else
            r = bo(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = r), r = !0;
          if (!r)
            return e.flags & 256 ? (li(e), e) : (li(e), null);
        }
        return li(e), (e.flags & 128) !== 0 ? (e.lanes = n, e) : (n = l !== null, t = t !== null && t.memoizedState !== null, n && (l = e.child, r = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (r = l.alternate.memoizedState.cachePool.pool), s = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (s = l.memoizedState.cachePool.pool), s !== r && (l.flags |= 2048)), n !== t && n && (e.child.flags |= 8192), is(e, e.updateQueue), $t(e), null);
      case 4:
        return Kt(), t === null && cc(e.stateNode.containerInfo), $t(e), null;
      case 10:
        return dn(e.type), $t(e), null;
      case 19:
        if (G(se), l = e.memoizedState, l === null) return $t(e), null;
        if (r = (e.flags & 128) !== 0, s = l.rendering, s === null)
          if (r) No(l, !1);
          else {
            if (oe !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (s = Pr(t), s !== null) {
                  for (e.flags |= 128, No(l, !1), t = s.updateQueue, e.updateQueue = t, is(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null; )
                    _o(n, t), n = n.sibling;
                  return J(
                    se,
                    se.current & 1 | 2
                  ), St && ut(e, l.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            l.tail !== null && De() > rs && (e.flags |= 128, r = !0, No(l, !1), e.lanes = 4194304);
          }
        else {
          if (!r)
            if (t = Pr(s), t !== null) {
              if (e.flags |= 128, r = !0, t = t.updateQueue, e.updateQueue = t, is(e, t), No(l, !0), l.tail === null && l.tailMode === "hidden" && !s.alternate && !St)
                return $t(e), null;
            } else
              2 * De() - l.renderingStartTime > rs && n !== 536870912 && (e.flags |= 128, r = !0, No(l, !1), e.lanes = 4194304);
          l.isBackwards ? (s.sibling = e.child, e.child = s) : (t = l.last, t !== null ? t.sibling = s : e.child = s, l.last = s);
        }
        return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = De(), t.sibling = null, n = se.current, J(
          se,
          r ? n & 1 | 2 : n & 1
        ), St && ut(e, l.treeForkCount), t) : ($t(e), null);
      case 22:
      case 23:
        return li(e), fu(), l = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== l && (e.flags |= 8192) : l && (e.flags |= 8192), l ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && ($t(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : $t(e), n = e.updateQueue, n !== null && is(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), l = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), l !== n && (e.flags |= 2048), t !== null && G(Ya), null;
      case 24:
        return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), dn(de), $t(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(A(156, e.tag));
  }
  function pm(t, e) {
    switch (ae(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return dn(de), Kt(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Li(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (li(e), e.alternate === null)
            throw Error(A(340));
          hn();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (li(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(A(340));
          hn();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return G(se), null;
      case 4:
        return Kt(), null;
      case 10:
        return dn(e.type), null;
      case 22:
      case 23:
        return li(e), fu(), t !== null && G(Ya), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return dn(de), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function oh(t, e) {
    switch (ae(e), e.tag) {
      case 3:
        dn(de), Kt();
        break;
      case 26:
      case 27:
      case 5:
        Li(e);
        break;
      case 4:
        Kt();
        break;
      case 31:
        e.memoizedState !== null && li(e);
        break;
      case 13:
        li(e);
        break;
      case 19:
        G(se);
        break;
      case 10:
        dn(e.type);
        break;
      case 22:
      case 23:
        li(e), fu(), t !== null && G(Ya);
        break;
      case 24:
        dn(de);
    }
  }
  function Do(t, e) {
    try {
      var n = e.updateQueue, l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var r = l.next;
        n = r;
        do {
          if ((n.tag & t) === t) {
            l = void 0;
            var s = n.create, f = n.inst;
            l = s(), f.destroy = l;
          }
          n = n.next;
        } while (n !== r);
      }
    } catch (m) {
      jt(e, e.return, m);
    }
  }
  function Wn(t, e, n) {
    try {
      var l = e.updateQueue, r = l !== null ? l.lastEffect : null;
      if (r !== null) {
        var s = r.next;
        l = s;
        do {
          if ((l.tag & t) === t) {
            var f = l.inst, m = f.destroy;
            if (m !== void 0) {
              f.destroy = void 0, r = e;
              var b = n, k = m;
              try {
                k();
              } catch (q) {
                jt(
                  r,
                  b,
                  q
                );
              }
            }
          }
          l = l.next;
        } while (l !== s);
      }
    } catch (q) {
      jt(e, e.return, q);
    }
  }
  function rh(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        Wc(e, n);
      } catch (l) {
        jt(t, t.return, l);
      }
    }
  }
  function sh(t, e, n) {
    n.props = Ja(
      t.type,
      t.memoizedProps
    ), n.state = t.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (l) {
      jt(t, e, l);
    }
  }
  function Bo(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var l = t.stateNode;
            break;
          case 30:
            l = t.stateNode;
            break;
          default:
            l = t.stateNode;
        }
        typeof n == "function" ? t.refCleanup = n(l) : n.current = l;
      }
    } catch (r) {
      jt(t, e, r);
    }
  }
  function Ji(t, e) {
    var n = t.ref, l = t.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (r) {
          jt(t, e, r);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          jt(t, e, r);
        }
      else n.current = null;
  }
  function uh(t) {
    var e = t.type, n = t.memoizedProps, l = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && l.focus();
          break t;
        case "img":
          n.src ? l.src = n.src : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (r) {
      jt(t, t.return, r);
    }
  }
  function Pu(t, e, n) {
    try {
      var l = t.stateNode;
      Rm(l, t.type, n, e), l[xe] = e;
    } catch (r) {
      jt(t, t.return, r);
    }
  }
  function ch(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && na(t.type) || t.tag === 4;
  }
  function Yu(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || ch(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && na(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Vu(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6)
      t = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(t, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(t), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = qe));
    else if (l !== 4 && (l === 27 && na(t.type) && (n = t.stateNode, e = null), t = t.child, t !== null))
      for (Vu(t, e, n), t = t.sibling; t !== null; )
        Vu(t, e, n), t = t.sibling;
  }
  function ns(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6)
      t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (l !== 4 && (l === 27 && na(t.type) && (n = t.stateNode), t = t.child, t !== null))
      for (ns(t, e, n), t = t.sibling; t !== null; )
        ns(t, e, n), t = t.sibling;
  }
  function fh(t) {
    var e = t.stateNode, n = t.memoizedProps;
    try {
      for (var l = t.type, r = e.attributes; r.length; )
        e.removeAttributeNode(r[0]);
      Ae(e, l, n), e[fe] = t, e[xe] = n;
    } catch (s) {
      jt(t, t.return, s);
    }
  }
  var vn = !1, _e = !1, Xu = !1, hh = typeof WeakSet == "function" ? WeakSet : Set, ze = null;
  function _m(t, e) {
    if (t = t.containerInfo, dc = zs, t = Na(t), qi(t)) {
      if ("selectionStart" in t)
        var n = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          n = (n = t.ownerDocument) && n.defaultView || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var r = l.anchorOffset, s = l.focusNode;
            l = l.focusOffset;
            try {
              n.nodeType, s.nodeType;
            } catch {
              n = null;
              break t;
            }
            var f = 0, m = -1, b = -1, k = 0, q = 0, X = t, B = null;
            e: for (; ; ) {
              for (var U; X !== n || r !== 0 && X.nodeType !== 3 || (m = f + r), X !== s || l !== 0 && X.nodeType !== 3 || (b = f + l), X.nodeType === 3 && (f += X.nodeValue.length), (U = X.firstChild) !== null; )
                B = X, X = U;
              for (; ; ) {
                if (X === t) break e;
                if (B === n && ++k === r && (m = f), B === s && ++q === l && (b = f), (U = X.nextSibling) !== null) break;
                X = B, B = X.parentNode;
              }
              X = U;
            }
            n = m === -1 || b === -1 ? null : { start: m, end: b };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (mc = { focusedElem: t, selectionRange: n }, zs = !1, ze = e; ze !== null; )
      if (e = ze, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = e, ze = t;
      else
        for (; ze !== null; ) {
          switch (e = ze, s = e.alternate, t = e.flags, e.tag) {
            case 0:
              if ((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null))
                for (n = 0; n < t.length; n++)
                  r = t[n], r.ref.impl = r.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && s !== null) {
                t = void 0, n = e, r = s.memoizedProps, s = s.memoizedState, l = n.stateNode;
                try {
                  var ot = Ja(
                    n.type,
                    r
                  );
                  t = l.getSnapshotBeforeUpdate(
                    ot,
                    s
                  ), l.__reactInternalSnapshotBeforeUpdate = t;
                } catch (ht) {
                  jt(
                    n,
                    n.return,
                    ht
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = e.stateNode.containerInfo, n = t.nodeType, n === 9)
                  gc(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      gc(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(A(163));
          }
          if (t = e.sibling, t !== null) {
            t.return = e.return, ze = t;
            break;
          }
          ze = e.return;
        }
  }
  function dh(t, e, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        bn(t, n), l & 4 && Do(5, n);
        break;
      case 1:
        if (bn(t, n), l & 4)
          if (t = n.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (f) {
              jt(n, n.return, f);
            }
          else {
            var r = Ja(
              n.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                r,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (f) {
              jt(
                n,
                n.return,
                f
              );
            }
          }
        l & 64 && rh(n), l & 512 && Bo(n, n.return);
        break;
      case 3:
        if (bn(t, n), l & 64 && (t = n.updateQueue, t !== null)) {
          if (e = null, n.child !== null)
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            Wc(t, e);
          } catch (f) {
            jt(n, n.return, f);
          }
        }
        break;
      case 27:
        e === null && l & 4 && fh(n);
      case 26:
      case 5:
        bn(t, n), e === null && l & 4 && uh(n), l & 512 && Bo(n, n.return);
        break;
      case 12:
        bn(t, n);
        break;
      case 31:
        bn(t, n), l & 4 && _h(t, n);
        break;
      case 13:
        bn(t, n), l & 4 && gh(t, n), l & 64 && (t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null && (n = Em.bind(
          null,
          n
        ), Vm(t, n))));
        break;
      case 22:
        if (l = n.memoizedState !== null || vn, !l) {
          e = e !== null && e.memoizedState !== null || _e, r = vn;
          var s = _e;
          vn = l, (_e = e) && !s ? xn(
            t,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : bn(t, n), vn = r, _e = s;
        }
        break;
      case 30:
        break;
      default:
        bn(t, n);
    }
  }
  function mh(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, mh(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Il(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var ee = null, Xe = !1;
  function yn(t, e, n) {
    for (n = n.child; n !== null; )
      ph(t, e, n), n = n.sibling;
  }
  function ph(t, e, n) {
    if (Te && typeof Te.onCommitFiberUnmount == "function")
      try {
        Te.onCommitFiberUnmount(En, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        _e || Ji(n, e), yn(
          t,
          e,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        _e || Ji(n, e);
        var l = ee, r = Xe;
        na(n.type) && (ee = n.stateNode, Xe = !1), yn(
          t,
          e,
          n
        ), Yo(n.stateNode), ee = l, Xe = r;
        break;
      case 5:
        _e || Ji(n, e);
      case 6:
        if (l = ee, r = Xe, ee = null, yn(
          t,
          e,
          n
        ), ee = l, Xe = r, ee !== null)
          if (Xe)
            try {
              (ee.nodeType === 9 ? ee.body : ee.nodeName === "HTML" ? ee.ownerDocument.body : ee).removeChild(n.stateNode);
            } catch (s) {
              jt(
                n,
                e,
                s
              );
            }
          else
            try {
              ee.removeChild(n.stateNode);
            } catch (s) {
              jt(
                n,
                e,
                s
              );
            }
        break;
      case 18:
        ee !== null && (Xe ? (t = ee, rd(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          n.stateNode
        ), Pl(t)) : rd(ee, n.stateNode));
        break;
      case 4:
        l = ee, r = Xe, ee = n.stateNode.containerInfo, Xe = !0, yn(
          t,
          e,
          n
        ), ee = l, Xe = r;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Wn(2, n, e), _e || Wn(4, n, e), yn(
          t,
          e,
          n
        );
        break;
      case 1:
        _e || (Ji(n, e), l = n.stateNode, typeof l.componentWillUnmount == "function" && sh(
          n,
          e,
          l
        )), yn(
          t,
          e,
          n
        );
        break;
      case 21:
        yn(
          t,
          e,
          n
        );
        break;
      case 22:
        _e = (l = _e) || n.memoizedState !== null, yn(
          t,
          e,
          n
        ), _e = l;
        break;
      default:
        yn(
          t,
          e,
          n
        );
    }
  }
  function _h(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Pl(t);
      } catch (n) {
        jt(e, e.return, n);
      }
    }
  }
  function gh(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Pl(t);
      } catch (n) {
        jt(e, e.return, n);
      }
  }
  function gm(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new hh()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new hh()), e;
      default:
        throw Error(A(435, t.tag));
    }
  }
  function as(t, e) {
    var n = gm(t);
    e.forEach(function(l) {
      if (!n.has(l)) {
        n.add(l);
        var r = Tm.bind(null, t, l);
        l.then(r, r);
      }
    });
  }
  function Qe(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var r = n[l], s = t, f = e, m = f;
        t: for (; m !== null; ) {
          switch (m.tag) {
            case 27:
              if (na(m.type)) {
                ee = m.stateNode, Xe = !1;
                break t;
              }
              break;
            case 5:
              ee = m.stateNode, Xe = !1;
              break t;
            case 3:
            case 4:
              ee = m.stateNode.containerInfo, Xe = !0;
              break t;
          }
          m = m.return;
        }
        if (ee === null) throw Error(A(160));
        ph(s, f, r), ee = null, Xe = !1, s = r.alternate, s !== null && (s.return = null), r.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        vh(e, t), e = e.sibling;
  }
  var Ni = null;
  function vh(t, e) {
    var n = t.alternate, l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Qe(e, t), Ke(t), l & 4 && (Wn(3, t, t.return), Do(3, t), Wn(5, t, t.return));
        break;
      case 1:
        Qe(e, t), Ke(t), l & 512 && (_e || n === null || Ji(n, n.return)), l & 64 && vn && (t = t.updateQueue, t !== null && (l = t.callbacks, l !== null && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = n === null ? l : n.concat(l))));
        break;
      case 26:
        var r = Ni;
        if (Qe(e, t), Ke(t), l & 512 && (_e || n === null || Ji(n, n.return)), l & 4) {
          var s = n !== null ? n.memoizedState : null;
          if (l = t.memoizedState, n === null)
            if (l === null)
              if (t.stateNode === null) {
                t: {
                  l = t.type, n = t.memoizedProps, r = r.ownerDocument || r;
                  e: switch (l) {
                    case "title":
                      s = r.getElementsByTagName("title")[0], (!s || s[ga] || s[fe] || s.namespaceURI === "http://www.w3.org/2000/svg" || s.hasAttribute("itemprop")) && (s = r.createElement(l), r.head.insertBefore(
                        s,
                        r.querySelector("head > title")
                      )), Ae(s, l, n), s[fe] = t, he(s), l = s;
                      break t;
                    case "link":
                      var f = vd(
                        "link",
                        "href",
                        r
                      ).get(l + (n.href || ""));
                      if (f) {
                        for (var m = 0; m < f.length; m++)
                          if (s = f[m], s.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && s.getAttribute("rel") === (n.rel == null ? null : n.rel) && s.getAttribute("title") === (n.title == null ? null : n.title) && s.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                            f.splice(m, 1);
                            break e;
                          }
                      }
                      s = r.createElement(l), Ae(s, l, n), r.head.appendChild(s);
                      break;
                    case "meta":
                      if (f = vd(
                        "meta",
                        "content",
                        r
                      ).get(l + (n.content || ""))) {
                        for (m = 0; m < f.length; m++)
                          if (s = f[m], s.getAttribute("content") === (n.content == null ? null : "" + n.content) && s.getAttribute("name") === (n.name == null ? null : n.name) && s.getAttribute("property") === (n.property == null ? null : n.property) && s.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && s.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                            f.splice(m, 1);
                            break e;
                          }
                      }
                      s = r.createElement(l), Ae(s, l, n), r.head.appendChild(s);
                      break;
                    default:
                      throw Error(A(468, l));
                  }
                  s[fe] = t, he(s), l = s;
                }
                t.stateNode = l;
              } else
                yd(
                  r,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = gd(
                r,
                l,
                t.memoizedProps
              );
          else
            s !== l ? (s === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : s.count--, l === null ? yd(
              r,
              t.type,
              t.stateNode
            ) : gd(
              r,
              l,
              t.memoizedProps
            )) : l === null && t.stateNode !== null && Pu(
              t,
              t.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        Qe(e, t), Ke(t), l & 512 && (_e || n === null || Ji(n, n.return)), n !== null && l & 4 && Pu(
          t,
          t.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (Qe(e, t), Ke(t), l & 512 && (_e || n === null || Ji(n, n.return)), t.flags & 32) {
          r = t.stateNode;
          try {
            fi(r, "");
          } catch (ot) {
            jt(t, t.return, ot);
          }
        }
        l & 4 && t.stateNode != null && (r = t.memoizedProps, Pu(
          t,
          r,
          n !== null ? n.memoizedProps : r
        )), l & 1024 && (Xu = !0);
        break;
      case 6:
        if (Qe(e, t), Ke(t), l & 4) {
          if (t.stateNode === null)
            throw Error(A(162));
          l = t.memoizedProps, n = t.stateNode;
          try {
            n.nodeValue = l;
          } catch (ot) {
            jt(t, t.return, ot);
          }
        }
        break;
      case 3:
        if (bs = null, r = Ni, Ni = vs(e.containerInfo), Qe(e, t), Ni = r, Ke(t), l & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            Pl(e.containerInfo);
          } catch (ot) {
            jt(t, t.return, ot);
          }
        Xu && (Xu = !1, yh(t));
        break;
      case 4:
        l = Ni, Ni = vs(
          t.stateNode.containerInfo
        ), Qe(e, t), Ke(t), Ni = l;
        break;
      case 12:
        Qe(e, t), Ke(t);
        break;
      case 31:
        Qe(e, t), Ke(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, as(t, l)));
        break;
      case 13:
        Qe(e, t), Ke(t), t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && (os = De()), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, as(t, l)));
        break;
      case 22:
        r = t.memoizedState !== null;
        var b = n !== null && n.memoizedState !== null, k = vn, q = _e;
        if (vn = k || r, _e = q || b, Qe(e, t), _e = q, vn = k, Ke(t), l & 8192)
          t: for (e = t.stateNode, e._visibility = r ? e._visibility & -2 : e._visibility | 1, r && (n === null || b || vn || _e || Wa(t)), n = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                b = n = e;
                try {
                  if (s = b.stateNode, r)
                    f = s.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    m = b.stateNode;
                    var X = b.memoizedProps.style, B = X != null && X.hasOwnProperty("display") ? X.display : null;
                    m.style.display = B == null || typeof B == "boolean" ? "" : ("" + B).trim();
                  }
                } catch (ot) {
                  jt(b, b.return, ot);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                b = e;
                try {
                  b.stateNode.nodeValue = r ? "" : b.memoizedProps;
                } catch (ot) {
                  jt(b, b.return, ot);
                }
              }
            } else if (e.tag === 18) {
              if (n === null) {
                b = e;
                try {
                  var U = b.stateNode;
                  r ? sd(U, !0) : sd(b.stateNode, !1);
                } catch (ot) {
                  jt(b, b.return, ot);
                }
              }
            } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              n === e && (n = null), e = e.return;
            }
            n === e && (n = null), e.sibling.return = e.return, e = e.sibling;
          }
        l & 4 && (l = t.updateQueue, l !== null && (n = l.retryQueue, n !== null && (l.retryQueue = null, as(t, n))));
        break;
      case 19:
        Qe(e, t), Ke(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, as(t, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Qe(e, t), Ke(t);
    }
  }
  function Ke(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, l = t.return; l !== null; ) {
          if (ch(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(A(160));
        switch (n.tag) {
          case 27:
            var r = n.stateNode, s = Yu(t);
            ns(t, s, r);
            break;
          case 5:
            var f = n.stateNode;
            n.flags & 32 && (fi(f, ""), n.flags &= -33);
            var m = Yu(t);
            ns(t, m, f);
            break;
          case 3:
          case 4:
            var b = n.stateNode.containerInfo, k = Yu(t);
            Vu(
              t,
              k,
              b
            );
            break;
          default:
            throw Error(A(161));
        }
      } catch (q) {
        jt(t, t.return, q);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function yh(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        yh(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function bn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        dh(t, e.alternate, e), e = e.sibling;
  }
  function Wa(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Wn(4, e, e.return), Wa(e);
          break;
        case 1:
          Ji(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && sh(
            e,
            e.return,
            n
          ), Wa(e);
          break;
        case 27:
          Yo(e.stateNode);
        case 26:
        case 5:
          Ji(e, e.return), Wa(e);
          break;
        case 22:
          e.memoizedState === null && Wa(e);
          break;
        case 30:
          Wa(e);
          break;
        default:
          Wa(e);
      }
      t = t.sibling;
    }
  }
  function xn(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var l = e.alternate, r = t, s = e, f = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          xn(
            r,
            s,
            n
          ), Do(4, s);
          break;
        case 1:
          if (xn(
            r,
            s,
            n
          ), l = s, r = l.stateNode, typeof r.componentDidMount == "function")
            try {
              r.componentDidMount();
            } catch (k) {
              jt(l, l.return, k);
            }
          if (l = s, r = l.updateQueue, r !== null) {
            var m = l.stateNode;
            try {
              var b = r.shared.hiddenCallbacks;
              if (b !== null)
                for (r.shared.hiddenCallbacks = null, r = 0; r < b.length; r++)
                  Jc(b[r], m);
            } catch (k) {
              jt(l, l.return, k);
            }
          }
          n && f & 64 && rh(s), Bo(s, s.return);
          break;
        case 27:
          fh(s);
        case 26:
        case 5:
          xn(
            r,
            s,
            n
          ), n && l === null && f & 4 && uh(s), Bo(s, s.return);
          break;
        case 12:
          xn(
            r,
            s,
            n
          );
          break;
        case 31:
          xn(
            r,
            s,
            n
          ), n && f & 4 && _h(r, s);
          break;
        case 13:
          xn(
            r,
            s,
            n
          ), n && f & 4 && gh(r, s);
          break;
        case 22:
          s.memoizedState === null && xn(
            r,
            s,
            n
          ), Bo(s, s.return);
          break;
        case 30:
          break;
        default:
          xn(
            r,
            s,
            n
          );
      }
      e = e.sibling;
    }
  }
  function Qu(t, e) {
    var n = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && xo(n));
  }
  function Ku(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && xo(t));
  }
  function Di(t, e, n, l) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        bh(
          t,
          e,
          n,
          l
        ), e = e.sibling;
  }
  function bh(t, e, n, l) {
    var r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Di(
          t,
          e,
          n,
          l
        ), r & 2048 && Do(9, e);
        break;
      case 1:
        Di(
          t,
          e,
          n,
          l
        );
        break;
      case 3:
        Di(
          t,
          e,
          n,
          l
        ), r & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && xo(t)));
        break;
      case 12:
        if (r & 2048) {
          Di(
            t,
            e,
            n,
            l
          ), t = e.stateNode;
          try {
            var s = e.memoizedProps, f = s.id, m = s.onPostCommit;
            typeof m == "function" && m(
              f,
              e.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (b) {
            jt(e, e.return, b);
          }
        } else
          Di(
            t,
            e,
            n,
            l
          );
        break;
      case 31:
        Di(
          t,
          e,
          n,
          l
        );
        break;
      case 13:
        Di(
          t,
          e,
          n,
          l
        );
        break;
      case 23:
        break;
      case 22:
        s = e.stateNode, f = e.alternate, e.memoizedState !== null ? s._visibility & 2 ? Di(
          t,
          e,
          n,
          l
        ) : Zo(t, e) : s._visibility & 2 ? Di(
          t,
          e,
          n,
          l
        ) : (s._visibility |= 2, kl(
          t,
          e,
          n,
          l,
          (e.subtreeFlags & 10256) !== 0 || !1
        )), r & 2048 && Qu(f, e);
        break;
      case 24:
        Di(
          t,
          e,
          n,
          l
        ), r & 2048 && Ku(e.alternate, e);
        break;
      default:
        Di(
          t,
          e,
          n,
          l
        );
    }
  }
  function kl(t, e, n, l, r) {
    for (r = r && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var s = t, f = e, m = n, b = l, k = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          kl(
            s,
            f,
            m,
            b,
            r
          ), Do(8, f);
          break;
        case 23:
          break;
        case 22:
          var q = f.stateNode;
          f.memoizedState !== null ? q._visibility & 2 ? kl(
            s,
            f,
            m,
            b,
            r
          ) : Zo(
            s,
            f
          ) : (q._visibility |= 2, kl(
            s,
            f,
            m,
            b,
            r
          )), r && k & 2048 && Qu(
            f.alternate,
            f
          );
          break;
        case 24:
          kl(
            s,
            f,
            m,
            b,
            r
          ), r && k & 2048 && Ku(f.alternate, f);
          break;
        default:
          kl(
            s,
            f,
            m,
            b,
            r
          );
      }
      e = e.sibling;
    }
  }
  function Zo(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t, l = e, r = l.flags;
        switch (l.tag) {
          case 22:
            Zo(n, l), r & 2048 && Qu(
              l.alternate,
              l
            );
            break;
          case 24:
            Zo(n, l), r & 2048 && Ku(l.alternate, l);
            break;
          default:
            Zo(n, l);
        }
        e = e.sibling;
      }
  }
  var Ro = 8192;
  function Nl(t, e, n) {
    if (t.subtreeFlags & Ro)
      for (t = t.child; t !== null; )
        xh(
          t,
          e,
          n
        ), t = t.sibling;
  }
  function xh(t, e, n) {
    switch (t.tag) {
      case 26:
        Nl(
          t,
          e,
          n
        ), t.flags & Ro && t.memoizedState !== null && np(
          n,
          Ni,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        Nl(
          t,
          e,
          n
        );
        break;
      case 3:
      case 4:
        var l = Ni;
        Ni = vs(t.stateNode.containerInfo), Nl(
          t,
          e,
          n
        ), Ni = l;
        break;
      case 22:
        t.memoizedState === null && (l = t.alternate, l !== null && l.memoizedState !== null ? (l = Ro, Ro = 16777216, Nl(
          t,
          e,
          n
        ), Ro = l) : Nl(
          t,
          e,
          n
        ));
        break;
      default:
        Nl(
          t,
          e,
          n
        );
    }
  }
  function Sh(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function Uo(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var l = e[n];
          ze = l, zh(
            l,
            t
          );
        }
      Sh(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Lh(t), t = t.sibling;
  }
  function Lh(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Uo(t), t.flags & 2048 && Wn(9, t, t.return);
        break;
      case 3:
        Uo(t);
        break;
      case 12:
        Uo(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, ls(t)) : Uo(t);
        break;
      default:
        Uo(t);
    }
  }
  function ls(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var l = e[n];
          ze = l, zh(
            l,
            t
          );
        }
      Sh(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          Wn(8, e, e.return), ls(e);
          break;
        case 22:
          n = e.stateNode, n._visibility & 2 && (n._visibility &= -3, ls(e));
          break;
        default:
          ls(e);
      }
      t = t.sibling;
    }
  }
  function zh(t, e) {
    for (; ze !== null; ) {
      var n = ze;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Wn(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          xo(n.memoizedState.cache);
      }
      if (l = n.child, l !== null) l.return = n, ze = l;
      else
        t: for (n = t; ze !== null; ) {
          l = ze;
          var r = l.sibling, s = l.return;
          if (mh(l), l === n) {
            ze = null;
            break t;
          }
          if (r !== null) {
            r.return = s, ze = r;
            break t;
          }
          ze = s;
        }
    }
  }
  var vm = {
    getCacheForType: function(t) {
      var e = Me(de), n = e.data.get(t);
      return n === void 0 && (n = t(), e.data.set(t, n)), n;
    },
    cacheSignal: function() {
      return Me(de).controller.signal;
    }
  }, ym = typeof WeakMap == "function" ? WeakMap : Map, Rt = 0, Wt = null, Lt = null, Tt = 0, qt = 0, oi = null, In = !1, Dl = !1, Ju = !1, Sn = 0, oe = 0, Fn = 0, Ia = 0, Wu = 0, ri = 0, Bl = 0, Ho = null, Je = null, Iu = !1, os = 0, Eh = 0, rs = 1 / 0, ss = null, $n = null, be = 0, ta = null, Zl = null, Ln = 0, Fu = 0, $u = null, Th = null, Go = 0, tc = null;
  function si() {
    return (Rt & 2) !== 0 && Tt !== 0 ? Tt & -Tt : Z.T !== null ? oc() : Jl();
  }
  function wh() {
    if (ri === 0)
      if ((Tt & 536870912) === 0 || St) {
        var t = ma;
        ma <<= 1, (ma & 3932160) === 0 && (ma = 262144), ri = t;
      } else ri = 536870912;
    return t = ai.current, t !== null && (t.flags |= 32), ri;
  }
  function We(t, e, n) {
    (t === Wt && (qt === 2 || qt === 9) || t.cancelPendingCommit !== null) && (Rl(t, 0), ea(
      t,
      Tt,
      ri,
      !1
    )), en(t, n), ((Rt & 2) === 0 || t !== Wt) && (t === Wt && ((Rt & 2) === 0 && (Ia |= n), oe === 4 && ea(
      t,
      Tt,
      ri,
      !1
    )), Wi(t));
  }
  function Mh(t, e, n) {
    if ((Rt & 6) !== 0) throw Error(A(327));
    var l = !n && (e & 127) === 0 && (e & t.expiredLanes) === 0 || _a(t, e), r = l ? Sm(t, e) : ic(t, e, !0), s = l;
    do {
      if (r === 0) {
        Dl && !l && ea(t, e, 0, !1);
        break;
      } else {
        if (n = t.current.alternate, s && !bm(n)) {
          r = ic(t, e, !1), s = !1;
          continue;
        }
        if (r === 2) {
          if (s = e, t.errorRecoveryDisabledLanes & s)
            var f = 0;
          else
            f = t.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            e = f;
            t: {
              var m = t;
              r = Ho;
              var b = m.current.memoizedState.isDehydrated;
              if (b && (Rl(m, f).flags |= 256), f = ic(
                m,
                f,
                !1
              ), f !== 2) {
                if (Ju && !b) {
                  m.errorRecoveryDisabledLanes |= s, Ia |= s, r = 4;
                  break t;
                }
                s = Je, Je = r, s !== null && (Je === null ? Je = s : Je.push.apply(
                  Je,
                  s
                ));
              }
              r = f;
            }
            if (s = !1, r !== 2) continue;
          }
        }
        if (r === 1) {
          Rl(t, 0), ea(t, e, 0, !0);
          break;
        }
        t: {
          switch (l = t, s = r, s) {
            case 0:
            case 1:
              throw Error(A(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              ea(
                l,
                e,
                ri,
                !In
              );
              break t;
            case 2:
              Je = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(A(329));
          }
          if ((e & 62914560) === e && (r = os + 300 - De(), 10 < r)) {
            if (ea(
              l,
              e,
              ri,
              !In
            ), nl(l, 0, !0) !== 0) break t;
            Ln = e, l.timeoutHandle = ld(
              Ch.bind(
                null,
                l,
                n,
                Je,
                ss,
                Iu,
                e,
                ri,
                Ia,
                Bl,
                In,
                s,
                "Throttled",
                -0,
                0
              ),
              r
            );
            break t;
          }
          Ch(
            l,
            n,
            Je,
            ss,
            Iu,
            e,
            ri,
            Ia,
            Bl,
            In,
            s,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Wi(t);
  }
  function Ch(t, e, n, l, r, s, f, m, b, k, q, X, B, U) {
    if (t.timeoutHandle = -1, X = e.subtreeFlags, X & 8192 || (X & 16785408) === 16785408) {
      X = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: qe
      }, xh(
        e,
        s,
        X
      );
      var ot = (s & 62914560) === s ? os - De() : (s & 4194048) === s ? Eh - De() : 0;
      if (ot = ap(
        X,
        ot
      ), ot !== null) {
        Ln = s, t.cancelPendingCommit = ot(
          Rh.bind(
            null,
            t,
            e,
            s,
            n,
            l,
            r,
            f,
            m,
            b,
            q,
            X,
            null,
            B,
            U
          )
        ), ea(t, s, f, !k);
        return;
      }
    }
    Rh(
      t,
      e,
      s,
      n,
      l,
      r,
      f,
      m,
      b
    );
  }
  function bm(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var l = 0; l < n.length; l++) {
          var r = n[l], s = r.getSnapshot;
          r = r.value;
          try {
            if (!Se(s(), r)) return !1;
          } catch {
            return !1;
          }
        }
      if (n = e.child, e.subtreeFlags & 16384 && n !== null)
        n.return = e, e = n;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function ea(t, e, n, l) {
    e &= ~Wu, e &= ~Ia, t.suspendedLanes |= e, t.pingedLanes &= ~e, l && (t.warmLanes |= e), l = t.expirationTimes;
    for (var r = e; 0 < r; ) {
      var s = 31 - Be(r), f = 1 << s;
      l[s] = -1, r &= ~f;
    }
    n !== 0 && rr(t, n, e);
  }
  function us() {
    return (Rt & 6) === 0 ? (qo(0), !1) : !0;
  }
  function ec() {
    if (Lt !== null) {
      if (qt === 0)
        var t = Lt.return;
      else
        t = Lt, ki = Ki = null, gu(t), wl = null, Lo = 0, t = Lt;
      for (; t !== null; )
        oh(t.alternate, t), t = t.return;
      Lt = null;
    }
  }
  function Rl(t, e) {
    var n = t.timeoutHandle;
    n !== -1 && (t.timeoutHandle = -1, Gm(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), Ln = 0, ec(), Wt = t, Lt = n = vi(t.current, null), Tt = e, qt = 0, oi = null, In = !1, Dl = _a(t, e), Ju = !1, Bl = ri = Wu = Ia = Fn = oe = 0, Je = Ho = null, Iu = !1, (e & 8) !== 0 && (e |= e & 32);
    var l = t.entangledLanes;
    if (l !== 0)
      for (t = t.entanglements, l &= e; 0 < l; ) {
        var r = 31 - Be(l), s = 1 << r;
        e |= t[r], l &= ~s;
      }
    return Sn = e, Ua(), n;
  }
  function Ah(t, e) {
    vt = null, Z.H = Oo, e === Tl || e === Ur ? (e = Vc(), qt = 3) : e === lu ? (e = Vc(), qt = 4) : qt = e === Nu ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, oi = e, Lt === null && (oe = 1, Fr(
      t,
      a(e, t.current)
    ));
  }
  function Oh() {
    var t = ai.current;
    return t === null ? !0 : (Tt & 4194048) === Tt ? yi === null : (Tt & 62914560) === Tt || (Tt & 536870912) !== 0 ? t === yi : !1;
  }
  function kh() {
    var t = Z.H;
    return Z.H = Oo, t === null ? Oo : t;
  }
  function Nh() {
    var t = Z.A;
    return Z.A = vm, t;
  }
  function cs() {
    oe = 4, In || (Tt & 4194048) !== Tt && ai.current !== null || (Dl = !0), (Fn & 134217727) === 0 && (Ia & 134217727) === 0 || Wt === null || ea(
      Wt,
      Tt,
      ri,
      !1
    );
  }
  function ic(t, e, n) {
    var l = Rt;
    Rt |= 2;
    var r = kh(), s = Nh();
    (Wt !== t || Tt !== e) && (ss = null, Rl(t, e)), e = !1;
    var f = oe;
    t: do
      try {
        if (qt !== 0 && Lt !== null) {
          var m = Lt, b = oi;
          switch (qt) {
            case 8:
              ec(), f = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              ai.current === null && (e = !0);
              var k = qt;
              if (qt = 0, oi = null, Ul(t, m, b, k), n && Dl) {
                f = 0;
                break t;
              }
              break;
            default:
              k = qt, qt = 0, oi = null, Ul(t, m, b, k);
          }
        }
        xm(), f = oe;
        break;
      } catch (q) {
        Ah(t, q);
      }
    while (!0);
    return e && t.shellSuspendCounter++, ki = Ki = null, Rt = l, Z.H = r, Z.A = s, Lt === null && (Wt = null, Tt = 0, Ua()), f;
  }
  function xm() {
    for (; Lt !== null; ) Dh(Lt);
  }
  function Sm(t, e) {
    var n = Rt;
    Rt |= 2;
    var l = kh(), r = Nh();
    Wt !== t || Tt !== e ? (ss = null, rs = De() + 500, Rl(t, e)) : Dl = _a(
      t,
      e
    );
    t: do
      try {
        if (qt !== 0 && Lt !== null) {
          e = Lt;
          var s = oi;
          e: switch (qt) {
            case 1:
              qt = 0, oi = null, Ul(t, e, s, 1);
              break;
            case 2:
            case 9:
              if (Pc(s)) {
                qt = 0, oi = null, Bh(e);
                break;
              }
              e = function() {
                qt !== 2 && qt !== 9 || Wt !== t || (qt = 7), Wi(t);
              }, s.then(e, e);
              break t;
            case 3:
              qt = 7;
              break t;
            case 4:
              qt = 5;
              break t;
            case 7:
              Pc(s) ? (qt = 0, oi = null, Bh(e)) : (qt = 0, oi = null, Ul(t, e, s, 7));
              break;
            case 5:
              var f = null;
              switch (Lt.tag) {
                case 26:
                  f = Lt.memoizedState;
                case 5:
                case 27:
                  var m = Lt;
                  if (f ? bd(f) : m.stateNode.complete) {
                    qt = 0, oi = null;
                    var b = m.sibling;
                    if (b !== null) Lt = b;
                    else {
                      var k = m.return;
                      k !== null ? (Lt = k, fs(k)) : Lt = null;
                    }
                    break e;
                  }
              }
              qt = 0, oi = null, Ul(t, e, s, 5);
              break;
            case 6:
              qt = 0, oi = null, Ul(t, e, s, 6);
              break;
            case 8:
              ec(), oe = 6;
              break t;
            default:
              throw Error(A(462));
          }
        }
        Lm();
        break;
      } catch (q) {
        Ah(t, q);
      }
    while (!0);
    return ki = Ki = null, Z.H = l, Z.A = r, Rt = n, Lt !== null ? 0 : (Wt = null, Tt = 0, Ua(), oe);
  }
  function Lm() {
    for (; Lt !== null && !nr(); )
      Dh(Lt);
  }
  function Dh(t) {
    var e = ah(t.alternate, t, Sn);
    t.memoizedProps = t.pendingProps, e === null ? fs(t) : Lt = e;
  }
  function Bh(t) {
    var e = t, n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Ff(
          n,
          e,
          e.pendingProps,
          e.type,
          void 0,
          Tt
        );
        break;
      case 11:
        e = Ff(
          n,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          Tt
        );
        break;
      case 5:
        gu(e);
      default:
        oh(n, e), e = Lt = _o(e, Sn), e = ah(n, e, Sn);
    }
    t.memoizedProps = t.pendingProps, e === null ? fs(t) : Lt = e;
  }
  function Ul(t, e, n, l) {
    ki = Ki = null, gu(e), wl = null, Lo = 0;
    var r = e.return;
    try {
      if (fm(
        t,
        r,
        e,
        n,
        Tt
      )) {
        oe = 1, Fr(
          t,
          a(n, t.current)
        ), Lt = null;
        return;
      }
    } catch (s) {
      if (r !== null) throw Lt = r, s;
      oe = 1, Fr(
        t,
        a(n, t.current)
      ), Lt = null;
      return;
    }
    e.flags & 32768 ? (St || l === 1 ? t = !0 : Dl || (Tt & 536870912) !== 0 ? t = !1 : (In = t = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = ai.current, l !== null && l.tag === 13 && (l.flags |= 16384))), Zh(e, t)) : fs(e);
  }
  function fs(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Zh(
          e,
          In
        );
        return;
      }
      t = e.return;
      var n = mm(
        e.alternate,
        e,
        Sn
      );
      if (n !== null) {
        Lt = n;
        return;
      }
      if (e = e.sibling, e !== null) {
        Lt = e;
        return;
      }
      Lt = e = t;
    } while (e !== null);
    oe === 0 && (oe = 5);
  }
  function Zh(t, e) {
    do {
      var n = pm(t.alternate, t);
      if (n !== null) {
        n.flags &= 32767, Lt = n;
        return;
      }
      if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) {
        Lt = t;
        return;
      }
      Lt = t = n;
    } while (t !== null);
    oe = 6, Lt = null;
  }
  function Rh(t, e, n, l, r, s, f, m, b) {
    t.cancelPendingCommit = null;
    do
      hs();
    while (be !== 0);
    if ((Rt & 6) !== 0) throw Error(A(327));
    if (e !== null) {
      if (e === t.current) throw Error(A(177));
      if (s = e.lanes | e.childLanes, s |= yl, Us(
        t,
        n,
        s,
        f,
        m,
        b
      ), t === Wt && (Lt = Wt = null, Tt = 0), Zl = e, ta = t, Ln = n, Fu = s, $u = r, Th = l, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, wm(fa, function() {
        return jh(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), l = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || l) {
        l = Z.T, Z.T = null, r = $.p, $.p = 2, f = Rt, Rt |= 4;
        try {
          _m(t, e, n);
        } finally {
          Rt = f, $.p = r, Z.T = l;
        }
      }
      be = 1, Uh(), Hh(), Gh();
    }
  }
  function Uh() {
    if (be === 1) {
      be = 0;
      var t = ta, e = Zl, n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        n = Z.T, Z.T = null;
        var l = $.p;
        $.p = 2;
        var r = Rt;
        Rt |= 4;
        try {
          vh(e, t);
          var s = mc, f = Na(t.containerInfo), m = s.focusedElem, b = s.selectionRange;
          if (f !== m && m && m.ownerDocument && pl(
            m.ownerDocument.documentElement,
            m
          )) {
            if (b !== null && qi(m)) {
              var k = b.start, q = b.end;
              if (q === void 0 && (q = k), "selectionStart" in m)
                m.selectionStart = k, m.selectionEnd = Math.min(
                  q,
                  m.value.length
                );
              else {
                var X = m.ownerDocument || document, B = X && X.defaultView || window;
                if (B.getSelection) {
                  var U = B.getSelection(), ot = m.textContent.length, ht = Math.min(b.start, ot), Qt = b.end === void 0 ? ht : Math.min(b.end, ot);
                  !U.extend && ht > Qt && (f = Qt, Qt = ht, ht = f);
                  var M = ka(
                    m,
                    ht
                  ), T = ka(
                    m,
                    Qt
                  );
                  if (M && T && (U.rangeCount !== 1 || U.anchorNode !== M.node || U.anchorOffset !== M.offset || U.focusNode !== T.node || U.focusOffset !== T.offset)) {
                    var O = X.createRange();
                    O.setStart(M.node, M.offset), U.removeAllRanges(), ht > Qt ? (U.addRange(O), U.extend(T.node, T.offset)) : (O.setEnd(T.node, T.offset), U.addRange(O));
                  }
                }
              }
            }
            for (X = [], U = m; U = U.parentNode; )
              U.nodeType === 1 && X.push({
                element: U,
                left: U.scrollLeft,
                top: U.scrollTop
              });
            for (typeof m.focus == "function" && m.focus(), m = 0; m < X.length; m++) {
              var P = X[m];
              P.element.scrollLeft = P.left, P.element.scrollTop = P.top;
            }
          }
          zs = !!dc, mc = dc = null;
        } finally {
          Rt = r, $.p = l, Z.T = n;
        }
      }
      t.current = e, be = 2;
    }
  }
  function Hh() {
    if (be === 2) {
      be = 0;
      var t = ta, e = Zl, n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        n = Z.T, Z.T = null;
        var l = $.p;
        $.p = 2;
        var r = Rt;
        Rt |= 4;
        try {
          dh(t, e.alternate, e);
        } finally {
          Rt = r, $.p = l, Z.T = n;
        }
      }
      be = 3;
    }
  }
  function Gh() {
    if (be === 4 || be === 3) {
      be = 0, ar();
      var t = ta, e = Zl, n = Ln, l = Th;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? be = 5 : (be = 0, Zl = ta = null, qh(t, t.pendingLanes));
      var r = t.pendingLanes;
      if (r === 0 && ($n = null), st(n), e = e.stateNode, Te && typeof Te.onCommitFiberRoot == "function")
        try {
          Te.onCommitFiberRoot(
            En,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        e = Z.T, r = $.p, $.p = 2, Z.T = null;
        try {
          for (var s = t.onRecoverableError, f = 0; f < l.length; f++) {
            var m = l[f];
            s(m.value, {
              componentStack: m.stack
            });
          }
        } finally {
          Z.T = e, $.p = r;
        }
      }
      (Ln & 3) !== 0 && hs(), Wi(t), r = t.pendingLanes, (n & 261930) !== 0 && (r & 42) !== 0 ? t === tc ? Go++ : (Go = 0, tc = t) : Go = 0, qo(0);
    }
  }
  function qh(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, xo(e)));
  }
  function hs() {
    return Uh(), Hh(), Gh(), jh();
  }
  function jh() {
    if (be !== 5) return !1;
    var t = ta, e = Fu;
    Fu = 0;
    var n = st(Ln), l = Z.T, r = $.p;
    try {
      $.p = 32 > n ? 32 : n, Z.T = null, n = $u, $u = null;
      var s = ta, f = Ln;
      if (be = 0, Zl = ta = null, Ln = 0, (Rt & 6) !== 0) throw Error(A(331));
      var m = Rt;
      if (Rt |= 4, Lh(s.current), bh(
        s,
        s.current,
        f,
        n
      ), Rt = m, qo(0, !1), Te && typeof Te.onPostCommitFiberRoot == "function")
        try {
          Te.onPostCommitFiberRoot(En, s);
        } catch {
        }
      return !0;
    } finally {
      $.p = r, Z.T = l, qh(t, e);
    }
  }
  function Ph(t, e, n) {
    e = a(n, e), e = ku(t.stateNode, e, 2), t = Qn(t, e, 2), t !== null && (en(t, 2), Wi(t));
  }
  function jt(t, e, n) {
    if (t.tag === 3)
      Ph(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Ph(
            e,
            t,
            n
          );
          break;
        } else if (e.tag === 1) {
          var l = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && ($n === null || !$n.has(l))) {
            t = a(n, t), n = Yf(2), l = Qn(e, n, 2), l !== null && (Vf(
              n,
              l,
              e,
              t
            ), en(l, 2), Wi(l));
            break;
          }
        }
        e = e.return;
      }
  }
  function nc(t, e, n) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new ym();
      var r = /* @__PURE__ */ new Set();
      l.set(e, r);
    } else
      r = l.get(e), r === void 0 && (r = /* @__PURE__ */ new Set(), l.set(e, r));
    r.has(n) || (Ju = !0, r.add(n), t = zm.bind(null, t, e, n), e.then(t, t));
  }
  function zm(t, e, n) {
    var l = t.pingCache;
    l !== null && l.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, Wt === t && (Tt & n) === n && (oe === 4 || oe === 3 && (Tt & 62914560) === Tt && 300 > De() - os ? (Rt & 2) === 0 && Rl(t, 0) : Wu |= n, Bl === Tt && (Bl = 0)), Wi(t);
  }
  function Yh(t, e) {
    e === 0 && (e = or()), t = gi(t, e), t !== null && (en(t, e), Wi(t));
  }
  function Em(t) {
    var e = t.memoizedState, n = 0;
    e !== null && (n = e.retryLane), Yh(t, n);
  }
  function Tm(t, e) {
    var n = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var l = t.stateNode, r = t.memoizedState;
        r !== null && (n = r.retryLane);
        break;
      case 19:
        l = t.stateNode;
        break;
      case 22:
        l = t.stateNode._retryCache;
        break;
      default:
        throw Error(A(314));
    }
    l !== null && l.delete(e), Yh(t, n);
  }
  function wm(t, e) {
    return el(t, e);
  }
  var ds = null, Hl = null, ac = !1, ms = !1, lc = !1, ia = 0;
  function Wi(t) {
    t !== Hl && t.next === null && (Hl === null ? ds = Hl = t : Hl = Hl.next = t), ms = !0, ac || (ac = !0, Cm());
  }
  function qo(t, e) {
    if (!lc && ms) {
      lc = !0;
      do
        for (var n = !1, l = ds; l !== null; ) {
          if (t !== 0) {
            var r = l.pendingLanes;
            if (r === 0) var s = 0;
            else {
              var f = l.suspendedLanes, m = l.pingedLanes;
              s = (1 << 31 - Be(42 | t) + 1) - 1, s &= r & ~(f & ~m), s = s & 201326741 ? s & 201326741 | 1 : s ? s | 2 : 0;
            }
            s !== 0 && (n = !0, Kh(l, s));
          } else
            s = Tt, s = nl(
              l,
              l === Wt ? s : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (s & 3) === 0 || _a(l, s) || (n = !0, Kh(l, s));
          l = l.next;
        }
      while (n);
      lc = !1;
    }
  }
  function Mm() {
    Vh();
  }
  function Vh() {
    ms = ac = !1;
    var t = 0;
    ia !== 0 && Hm() && (t = ia);
    for (var e = De(), n = null, l = ds; l !== null; ) {
      var r = l.next, s = Xh(l, e);
      s === 0 ? (l.next = null, n === null ? ds = r : n.next = r, r === null && (Hl = n)) : (n = l, (t !== 0 || (s & 3) !== 0) && (ms = !0)), l = r;
    }
    be !== 0 && be !== 5 || qo(t), ia !== 0 && (ia = 0);
  }
  function Xh(t, e) {
    for (var n = t.suspendedLanes, l = t.pingedLanes, r = t.expirationTimes, s = t.pendingLanes & -62914561; 0 < s; ) {
      var f = 31 - Be(s), m = 1 << f, b = r[f];
      b === -1 ? ((m & n) === 0 || (m & l) !== 0) && (r[f] = Rs(m, e)) : b <= e && (t.expiredLanes |= m), s &= ~m;
    }
    if (e = Wt, n = Tt, n = nl(
      t,
      t === e ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), l = t.callbackNode, n === 0 || t === e && (qt === 2 || qt === 9) || t.cancelPendingCommit !== null)
      return l !== null && l !== null && ca(l), t.callbackNode = null, t.callbackPriority = 0;
    if ((n & 3) === 0 || _a(t, n)) {
      if (e = n & -n, e === t.callbackPriority) return e;
      switch (l !== null && ca(l), st(n)) {
        case 2:
        case 8:
          n = Xl;
          break;
        case 32:
          n = fa;
          break;
        case 268435456:
          n = Ql;
          break;
        default:
          n = fa;
      }
      return l = Qh.bind(null, t), n = el(n, l), t.callbackPriority = e, t.callbackNode = n, e;
    }
    return l !== null && l !== null && ca(l), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Qh(t, e) {
    if (be !== 0 && be !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var n = t.callbackNode;
    if (hs() && t.callbackNode !== n)
      return null;
    var l = Tt;
    return l = nl(
      t,
      t === Wt ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), l === 0 ? null : (Mh(t, l, e), Xh(t, De()), t.callbackNode != null && t.callbackNode === n ? Qh.bind(null, t) : null);
  }
  function Kh(t, e) {
    if (hs()) return null;
    Mh(t, e, !0);
  }
  function Cm() {
    qm(function() {
      (Rt & 6) !== 0 ? el(
        il,
        Mm
      ) : Vh();
    });
  }
  function oc() {
    if (ia === 0) {
      var t = zl;
      t === 0 && (t = da, da <<= 1, (da & 261888) === 0 && (da = 256)), ia = t;
    }
    return ia;
  }
  function Jh(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : On("" + t);
  }
  function Wh(t, e) {
    var n = e.ownerDocument.createElement("input");
    return n.name = e.name, n.value = e.value, t.id && n.setAttribute("form", t.id), e.parentNode.insertBefore(n, e), t = new FormData(t), n.parentNode.removeChild(n), t;
  }
  function Am(t, e, n, l, r) {
    if (e === "submit" && n && n.stateNode === r) {
      var s = Jh(
        (r[xe] || null).action
      ), f = l.submitter;
      f && (e = (e = f[xe] || null) ? Jh(e.formAction) : f.getAttribute("formAction"), e !== null && (s = e, f = null));
      var m = new sl(
        "action",
        "action",
        null,
        l,
        r
      );
      t.push({
        event: m,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (ia !== 0) {
                  var b = f ? Wh(r, f) : new FormData(r);
                  Tu(
                    n,
                    {
                      pending: !0,
                      data: b,
                      method: r.method,
                      action: s
                    },
                    null,
                    b
                  );
                }
              } else
                typeof s == "function" && (m.preventDefault(), b = f ? Wh(r, f) : new FormData(r), Tu(
                  n,
                  {
                    pending: !0,
                    data: b,
                    method: r.method,
                    action: s
                  },
                  s,
                  b
                ));
            },
            currentTarget: r
          }
        ]
      });
    }
  }
  for (var rc = 0; rc < Yi.length; rc++) {
    var sc = Yi[rc], Om = sc.toLowerCase(), km = sc[0].toUpperCase() + sc.slice(1);
    Pe(
      Om,
      "on" + km
    );
  }
  Pe(Ba, "onAnimationEnd"), Pe(kr, "onAnimationIteration"), Pe(Za, "onAnimationStart"), Pe("dblclick", "onDoubleClick"), Pe("focusin", "onFocus"), Pe("focusout", "onBlur"), Pe(Is, "onTransitionRun"), Pe(Nr, "onTransitionStart"), Pe(Fs, "onTransitionCancel"), Pe(jn, "onTransitionEnd"), Ri("onMouseEnter", ["mouseout", "mouseover"]), Ri("onMouseLeave", ["mouseout", "mouseover"]), Ri("onPointerEnter", ["pointerout", "pointerover"]), Ri("onPointerLeave", ["pointerout", "pointerover"]), ln(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ln(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ln("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ln(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ln(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ln(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var jo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Nm = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(jo)
  );
  function Ih(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var l = t[n], r = l.event;
      l = l.listeners;
      t: {
        var s = void 0;
        if (e)
          for (var f = l.length - 1; 0 <= f; f--) {
            var m = l[f], b = m.instance, k = m.currentTarget;
            if (m = m.listener, b !== s && r.isPropagationStopped())
              break t;
            s = m, r.currentTarget = k;
            try {
              s(r);
            } catch (q) {
              Ra(q);
            }
            r.currentTarget = null, s = b;
          }
        else
          for (f = 0; f < l.length; f++) {
            if (m = l[f], b = m.instance, k = m.currentTarget, m = m.listener, b !== s && r.isPropagationStopped())
              break t;
            s = m, r.currentTarget = k;
            try {
              s(r);
            } catch (q) {
              Ra(q);
            }
            r.currentTarget = null, s = b;
          }
      }
    }
  }
  function zt(t, e) {
    var n = e[Bi];
    n === void 0 && (n = e[Bi] = /* @__PURE__ */ new Set());
    var l = t + "__bubble";
    n.has(l) || (Fh(e, t, 2, !1), n.add(l));
  }
  function uc(t, e, n) {
    var l = 0;
    e && (l |= 4), Fh(
      n,
      t,
      l,
      e
    );
  }
  var ps = "_reactListening" + Math.random().toString(36).slice(2);
  function cc(t) {
    if (!t[ps]) {
      t[ps] = !0, hr.forEach(function(n) {
        n !== "selectionchange" && (Nm.has(n) || uc(n, !1, t), uc(n, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[ps] || (e[ps] = !0, uc("selectionchange", !1, e));
    }
  }
  function Fh(t, e, n, l) {
    switch (wd(e)) {
      case 2:
        var r = rp;
        break;
      case 8:
        r = sp;
        break;
      default:
        r = Ec;
    }
    n = r.bind(
      null,
      e,
      n,
      t
    ), r = void 0, !La || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (r = !0), l ? r !== void 0 ? t.addEventListener(e, n, {
      capture: !0,
      passive: r
    }) : t.addEventListener(e, n, !0) : r !== void 0 ? t.addEventListener(e, n, {
      passive: r
    }) : t.addEventListener(e, n, !1);
  }
  function fc(t, e, n, l, r) {
    var s = l;
    if ((e & 1) === 0 && (e & 2) === 0 && l !== null)
      t: for (; ; ) {
        if (l === null) return;
        var f = l.tag;
        if (f === 3 || f === 4) {
          var m = l.stateNode.containerInfo;
          if (m === r) break;
          if (f === 4)
            for (f = l.return; f !== null; ) {
              var b = f.tag;
              if ((b === 3 || b === 4) && f.stateNode.containerInfo === r)
                return;
              f = f.return;
            }
          for (; m !== null; ) {
            if (f = an(m), f === null) return;
            if (b = f.tag, b === 5 || b === 6 || b === 26 || b === 27) {
              l = s = f;
              continue t;
            }
            m = m.parentNode;
          }
        }
        l = l.return;
      }
    ao(function() {
      var k = s, q = Sa(n), X = [];
      t: {
        var B = Dr.get(t);
        if (B !== void 0) {
          var U = sl, ot = t;
          switch (t) {
            case "keypress":
              if (za(n) === 0) break t;
            case "keydown":
            case "keyup":
              U = br;
              break;
            case "focusin":
              ot = "focus", U = ro;
              break;
            case "focusout":
              ot = "blur", U = ro;
              break;
            case "beforeblur":
            case "afterblur":
              U = ro;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              U = pr;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              U = Gs;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              U = Vs;
              break;
            case Ba:
            case kr:
            case Za:
              U = so;
              break;
            case jn:
              U = Lr;
              break;
            case "scroll":
            case "scrollend":
              U = Et;
              break;
            case "wheel":
              U = un;
              break;
            case "copy":
            case "cut":
            case "paste":
              U = di;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              U = xr;
              break;
            case "toggle":
            case "beforetoggle":
              U = wa;
          }
          var ht = (e & 4) !== 0, Qt = !ht && (t === "scroll" || t === "scrollend"), M = ht ? B !== null ? B + "Capture" : null : B;
          ht = [];
          for (var T = k, O; T !== null; ) {
            var P = T;
            if (O = P.stateNode, P = P.tag, P !== 5 && P !== 26 && P !== 27 || O === null || M === null || (P = rn(T, M), P != null && ht.push(
              Po(T, P, O)
            )), Qt) break;
            T = T.return;
          }
          0 < ht.length && (B = new U(
            B,
            ot,
            null,
            n,
            q
          ), X.push({ event: B, listeners: ht }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (B = t === "mouseover" || t === "pointerover", U = t === "mouseout" || t === "pointerout", B && n !== rl && (ot = n.relatedTarget || n.fromElement) && (an(ot) || ot[nn]))
            break t;
          if ((U || B) && (B = q.window === q ? q : (B = q.ownerDocument) ? B.defaultView || B.parentWindow : window, U ? (ot = n.relatedTarget || n.toElement, U = k, ot = ot ? an(ot) : null, ot !== null && (Qt = h(ot), ht = ot.tag, ot !== Qt || ht !== 5 && ht !== 27 && ht !== 6) && (ot = null)) : (U = null, ot = k), U !== ot)) {
            if (ht = pr, P = "onMouseLeave", M = "onMouseEnter", T = "mouse", (t === "pointerout" || t === "pointerover") && (ht = xr, P = "onPointerLeave", M = "onPointerEnter", T = "pointer"), Qt = U == null ? B : Zi(U), O = ot == null ? B : Zi(ot), B = new ht(
              P,
              T + "leave",
              U,
              n,
              q
            ), B.target = Qt, B.relatedTarget = O, P = null, an(q) === k && (ht = new ht(
              M,
              T + "enter",
              ot,
              n,
              q
            ), ht.target = O, ht.relatedTarget = Qt, P = ht), Qt = P, U && ot)
              e: {
                for (ht = Dm, M = U, T = ot, O = 0, P = M; P; P = ht(P))
                  O++;
                P = 0;
                for (var ft = T; ft; ft = ht(ft))
                  P++;
                for (; 0 < O - P; )
                  M = ht(M), O--;
                for (; 0 < P - O; )
                  T = ht(T), P--;
                for (; O--; ) {
                  if (M === T || T !== null && M === T.alternate) {
                    ht = M;
                    break e;
                  }
                  M = ht(M), T = ht(T);
                }
                ht = null;
              }
            else ht = null;
            U !== null && $h(
              X,
              B,
              U,
              ht,
              !1
            ), ot !== null && Qt !== null && $h(
              X,
              Qt,
              ot,
              ht,
              !0
            );
          }
        }
        t: {
          if (B = k ? Zi(k) : window, U = B.nodeName && B.nodeName.toLowerCase(), U === "select" || U === "input" && B.type === "file")
            var Dt = Oa;
          else if (mi(B))
            if (wr)
              Dt = Ws;
            else {
              Dt = Js;
              var rt = Ci;
            }
          else
            U = B.nodeName, !U || U.toLowerCase() !== "input" || B.type !== "checkbox" && B.type !== "radio" ? k && xa(k.elementType) && (Dt = Oa) : Dt = Un;
          if (Dt && (Dt = Dt(t, k))) {
            Tr(
              X,
              Dt,
              n,
              q
            );
            break t;
          }
          rt && rt(t, B, k), t === "focusout" && k && B.type === "number" && k.memoizedProps.value != null && Ti(B, "number", B.value);
        }
        switch (rt = k ? Zi(k) : window, t) {
          case "focusin":
            (mi(rt) || rt.contentEditable === "true") && (ji = rt, gl = k, Da = null);
            break;
          case "focusout":
            Da = gl = ji = null;
            break;
          case "mousedown":
            Gn = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Gn = !1, Ar(X, n, q);
            break;
          case "selectionchange":
            if (_l) break;
          case "keydown":
          case "keyup":
            Ar(X, n, q);
        }
        var bt;
        if (cl)
          t: {
            switch (t) {
              case "compositionstart":
                var wt = "onCompositionStart";
                break t;
              case "compositionend":
                wt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                wt = "onCompositionUpdate";
                break t;
            }
            wt = void 0;
          }
        else
          Bn ? Er(t, n) && (wt = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (wt = "onCompositionStart");
        wt && (fl && n.locale !== "ko" && (Bn || wt !== "onCompositionStart" ? wt === "onCompositionEnd" && Bn && (bt = Hi()) : (hi = q, sn = "value" in hi ? hi.value : hi.textContent, Bn = !0)), rt = _s(k, wt), 0 < rt.length && (wt = new uo(
          wt,
          t,
          null,
          n,
          q
        ), X.push({ event: wt, listeners: rt }), bt ? wt.data = bt : (bt = mo(n), bt !== null && (wt.data = bt)))), (bt = Qs ? ni(t, n) : Zn(t, n)) && (wt = _s(k, "onBeforeInput"), 0 < wt.length && (rt = new uo(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          q
        ), X.push({
          event: rt,
          listeners: wt
        }), rt.data = bt)), Am(
          X,
          t,
          k,
          n,
          q
        );
      }
      Ih(X, e);
    });
  }
  function Po(t, e, n) {
    return {
      instance: t,
      listener: e,
      currentTarget: n
    };
  }
  function _s(t, e) {
    for (var n = e + "Capture", l = []; t !== null; ) {
      var r = t, s = r.stateNode;
      if (r = r.tag, r !== 5 && r !== 26 && r !== 27 || s === null || (r = rn(t, n), r != null && l.unshift(
        Po(t, r, s)
      ), r = rn(t, e), r != null && l.push(
        Po(t, r, s)
      )), t.tag === 3) return l;
      t = t.return;
    }
    return [];
  }
  function Dm(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function $h(t, e, n, l, r) {
    for (var s = e._reactName, f = []; n !== null && n !== l; ) {
      var m = n, b = m.alternate, k = m.stateNode;
      if (m = m.tag, b !== null && b === l) break;
      m !== 5 && m !== 26 && m !== 27 || k === null || (b = k, r ? (k = rn(n, s), k != null && f.unshift(
        Po(n, k, b)
      )) : r || (k = rn(n, s), k != null && f.push(
        Po(n, k, b)
      ))), n = n.return;
    }
    f.length !== 0 && t.push({ event: e, listeners: f });
  }
  var Bm = /\r\n?/g, Zm = /\u0000|\uFFFD/g;
  function td(t) {
    return (typeof t == "string" ? t : "" + t).replace(Bm, `
`).replace(Zm, "");
  }
  function ed(t, e) {
    return e = td(e), td(t) === e;
  }
  function Xt(t, e, n, l, r, s) {
    switch (n) {
      case "children":
        typeof l == "string" ? e === "body" || e === "textarea" && l === "" || fi(t, l) : (typeof l == "number" || typeof l == "bigint") && e !== "body" && fi(t, "" + l);
        break;
      case "className":
        Yt(t, "class", l);
        break;
      case "tabIndex":
        Yt(t, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Yt(t, n, l);
        break;
      case "style":
        ll(t, l, s);
        break;
      case "data":
        if (e !== "object") {
          Yt(t, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(n);
          break;
        }
        l = On("" + l), t.setAttribute(n, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof s == "function" && (n === "formAction" ? (e !== "input" && Xt(t, e, "name", r.name, r, null), Xt(
            t,
            e,
            "formEncType",
            r.formEncType,
            r,
            null
          ), Xt(
            t,
            e,
            "formMethod",
            r.formMethod,
            r,
            null
          ), Xt(
            t,
            e,
            "formTarget",
            r.formTarget,
            r,
            null
          )) : (Xt(t, e, "encType", r.encType, r, null), Xt(t, e, "method", r.method, r, null), Xt(t, e, "target", r.target, r, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(n);
          break;
        }
        l = On("" + l), t.setAttribute(n, l);
        break;
      case "onClick":
        l != null && (t.onclick = qe);
        break;
      case "onScroll":
        l != null && zt("scroll", t);
        break;
      case "onScrollEnd":
        l != null && zt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(A(61));
          if (n = l.__html, n != null) {
            if (r.children != null) throw Error(A(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        t.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        n = On("" + l), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          n
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(n, "" + l) : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(n, "") : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        l === !0 ? t.setAttribute(n, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(n, l) : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? t.setAttribute(n, l) : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? t.removeAttribute(n) : t.setAttribute(n, l);
        break;
      case "popover":
        zt("beforetoggle", t), zt("toggle", t), xt(t, "popover", l);
        break;
      case "xlinkActuate":
        Ge(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        Ge(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        Ge(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        Ge(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        Ge(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        Ge(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        Ge(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        Ge(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        Ge(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        xt(t, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = ol.get(n) || n, xt(t, n, l));
    }
  }
  function hc(t, e, n, l, r, s) {
    switch (n) {
      case "style":
        ll(t, l, s);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(A(61));
          if (n = l.__html, n != null) {
            if (r.children != null) throw Error(A(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof l == "string" ? fi(t, l) : (typeof l == "number" || typeof l == "bigint") && fi(t, "" + l);
        break;
      case "onScroll":
        l != null && zt("scroll", t);
        break;
      case "onScrollEnd":
        l != null && zt("scrollend", t);
        break;
      case "onClick":
        l != null && (t.onclick = qe);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!dr.hasOwnProperty(n))
          t: {
            if (n[0] === "o" && n[1] === "n" && (r = n.endsWith("Capture"), e = n.slice(2, r ? n.length - 7 : void 0), s = t[xe] || null, s = s != null ? s[n] : null, typeof s == "function" && t.removeEventListener(e, s, r), typeof l == "function")) {
              typeof s != "function" && s !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(e, l, r);
              break t;
            }
            n in t ? t[n] = l : l === !0 ? t.setAttribute(n, "") : xt(t, n, l);
          }
    }
  }
  function Ae(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        zt("error", t), zt("load", t);
        var l = !1, r = !1, s;
        for (s in n)
          if (n.hasOwnProperty(s)) {
            var f = n[s];
            if (f != null)
              switch (s) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  r = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(A(137, e));
                default:
                  Xt(t, e, s, f, n, null);
              }
          }
        r && Xt(t, e, "srcSet", n.srcSet, n, null), l && Xt(t, e, "src", n.src, n, null);
        return;
      case "input":
        zt("invalid", t);
        var m = s = f = r = null, b = null, k = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var q = n[l];
            if (q != null)
              switch (l) {
                case "name":
                  r = q;
                  break;
                case "type":
                  f = q;
                  break;
                case "checked":
                  b = q;
                  break;
                case "defaultChecked":
                  k = q;
                  break;
                case "value":
                  s = q;
                  break;
                case "defaultValue":
                  m = q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (q != null)
                    throw Error(A(137, e));
                  break;
                default:
                  Xt(t, e, l, q, n, null);
              }
          }
        ba(
          t,
          s,
          m,
          b,
          k,
          f,
          r,
          !1
        );
        return;
      case "select":
        zt("invalid", t), l = f = s = null;
        for (r in n)
          if (n.hasOwnProperty(r) && (m = n[r], m != null))
            switch (r) {
              case "value":
                s = m;
                break;
              case "defaultValue":
                f = m;
                break;
              case "multiple":
                l = m;
              default:
                Xt(t, e, r, m, n, null);
            }
        e = s, n = f, t.multiple = !!l, e != null ? Jt(t, !!l, e, !1) : n != null && Jt(t, !!l, n, !0);
        return;
      case "textarea":
        zt("invalid", t), s = r = l = null;
        for (f in n)
          if (n.hasOwnProperty(f) && (m = n[f], m != null))
            switch (f) {
              case "value":
                l = m;
                break;
              case "defaultValue":
                r = m;
                break;
              case "children":
                s = m;
                break;
              case "dangerouslySetInnerHTML":
                if (m != null) throw Error(A(91));
                break;
              default:
                Xt(t, e, f, m, n, null);
            }
        Cn(t, l, r, s);
        return;
      case "option":
        for (b in n)
          if (n.hasOwnProperty(b) && (l = n[b], l != null))
            switch (b) {
              case "selected":
                t.selected = l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                Xt(t, e, b, l, n, null);
            }
        return;
      case "dialog":
        zt("beforetoggle", t), zt("toggle", t), zt("cancel", t), zt("close", t);
        break;
      case "iframe":
      case "object":
        zt("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < jo.length; l++)
          zt(jo[l], t);
        break;
      case "image":
        zt("error", t), zt("load", t);
        break;
      case "details":
        zt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        zt("error", t), zt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (k in n)
          if (n.hasOwnProperty(k) && (l = n[k], l != null))
            switch (k) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(A(137, e));
              default:
                Xt(t, e, k, l, n, null);
            }
        return;
      default:
        if (xa(e)) {
          for (q in n)
            n.hasOwnProperty(q) && (l = n[q], l !== void 0 && hc(
              t,
              e,
              q,
              l,
              n,
              void 0
            ));
          return;
        }
    }
    for (m in n)
      n.hasOwnProperty(m) && (l = n[m], l != null && Xt(t, e, m, l, n, null));
  }
  function Rm(t, e, n, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var r = null, s = null, f = null, m = null, b = null, k = null, q = null;
        for (U in n) {
          var X = n[U];
          if (n.hasOwnProperty(U) && X != null)
            switch (U) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                b = X;
              default:
                l.hasOwnProperty(U) || Xt(t, e, U, null, l, X);
            }
        }
        for (var B in l) {
          var U = l[B];
          if (X = n[B], l.hasOwnProperty(B) && (U != null || X != null))
            switch (B) {
              case "type":
                s = U;
                break;
              case "name":
                r = U;
                break;
              case "checked":
                k = U;
                break;
              case "defaultChecked":
                q = U;
                break;
              case "value":
                f = U;
                break;
              case "defaultValue":
                m = U;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (U != null)
                  throw Error(A(137, e));
                break;
              default:
                U !== X && Xt(
                  t,
                  e,
                  B,
                  U,
                  l,
                  X
                );
            }
        }
        eo(
          t,
          f,
          m,
          b,
          k,
          q,
          s,
          r
        );
        return;
      case "select":
        U = f = m = B = null;
        for (s in n)
          if (b = n[s], n.hasOwnProperty(s) && b != null)
            switch (s) {
              case "value":
                break;
              case "multiple":
                U = b;
              default:
                l.hasOwnProperty(s) || Xt(
                  t,
                  e,
                  s,
                  null,
                  l,
                  b
                );
            }
        for (r in l)
          if (s = l[r], b = n[r], l.hasOwnProperty(r) && (s != null || b != null))
            switch (r) {
              case "value":
                B = s;
                break;
              case "defaultValue":
                m = s;
                break;
              case "multiple":
                f = s;
              default:
                s !== b && Xt(
                  t,
                  e,
                  r,
                  s,
                  l,
                  b
                );
            }
        e = m, n = f, l = U, B != null ? Jt(t, !!n, B, !1) : !!l != !!n && (e != null ? Jt(t, !!n, e, !0) : Jt(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        U = B = null;
        for (m in n)
          if (r = n[m], n.hasOwnProperty(m) && r != null && !l.hasOwnProperty(m))
            switch (m) {
              case "value":
                break;
              case "children":
                break;
              default:
                Xt(t, e, m, null, l, r);
            }
        for (f in l)
          if (r = l[f], s = n[f], l.hasOwnProperty(f) && (r != null || s != null))
            switch (f) {
              case "value":
                B = r;
                break;
              case "defaultValue":
                U = r;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(A(91));
                break;
              default:
                r !== s && Xt(t, e, f, r, l, s);
            }
        Ui(t, B, U);
        return;
      case "option":
        for (var ot in n)
          if (B = n[ot], n.hasOwnProperty(ot) && B != null && !l.hasOwnProperty(ot))
            switch (ot) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Xt(
                  t,
                  e,
                  ot,
                  null,
                  l,
                  B
                );
            }
        for (b in l)
          if (B = l[b], U = n[b], l.hasOwnProperty(b) && B !== U && (B != null || U != null))
            switch (b) {
              case "selected":
                t.selected = B && typeof B != "function" && typeof B != "symbol";
                break;
              default:
                Xt(
                  t,
                  e,
                  b,
                  B,
                  l,
                  U
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ht in n)
          B = n[ht], n.hasOwnProperty(ht) && B != null && !l.hasOwnProperty(ht) && Xt(t, e, ht, null, l, B);
        for (k in l)
          if (B = l[k], U = n[k], l.hasOwnProperty(k) && B !== U && (B != null || U != null))
            switch (k) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (B != null)
                  throw Error(A(137, e));
                break;
              default:
                Xt(
                  t,
                  e,
                  k,
                  B,
                  l,
                  U
                );
            }
        return;
      default:
        if (xa(e)) {
          for (var Qt in n)
            B = n[Qt], n.hasOwnProperty(Qt) && B !== void 0 && !l.hasOwnProperty(Qt) && hc(
              t,
              e,
              Qt,
              void 0,
              l,
              B
            );
          for (q in l)
            B = l[q], U = n[q], !l.hasOwnProperty(q) || B === U || B === void 0 && U === void 0 || hc(
              t,
              e,
              q,
              B,
              l,
              U
            );
          return;
        }
    }
    for (var M in n)
      B = n[M], n.hasOwnProperty(M) && B != null && !l.hasOwnProperty(M) && Xt(t, e, M, null, l, B);
    for (X in l)
      B = l[X], U = n[X], !l.hasOwnProperty(X) || B === U || B == null && U == null || Xt(t, e, X, B, l, U);
  }
  function id(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Um() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, n = performance.getEntriesByType("resource"), l = 0; l < n.length; l++) {
        var r = n[l], s = r.transferSize, f = r.initiatorType, m = r.duration;
        if (s && m && id(f)) {
          for (f = 0, m = r.responseEnd, l += 1; l < n.length; l++) {
            var b = n[l], k = b.startTime;
            if (k > m) break;
            var q = b.transferSize, X = b.initiatorType;
            q && id(X) && (b = b.responseEnd, f += q * (b < m ? 1 : (m - k) / (b - k)));
          }
          if (--l, e += 8 * (s + f) / (r.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var dc = null, mc = null;
  function gs(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function nd(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function ad(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function pc(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var _c = null;
  function Hm() {
    var t = window.event;
    return t && t.type === "popstate" ? t === _c ? !1 : (_c = t, !0) : (_c = null, !1);
  }
  var ld = typeof setTimeout == "function" ? setTimeout : void 0, Gm = typeof clearTimeout == "function" ? clearTimeout : void 0, od = typeof Promise == "function" ? Promise : void 0, qm = typeof queueMicrotask == "function" ? queueMicrotask : typeof od < "u" ? function(t) {
    return od.resolve(null).then(t).catch(jm);
  } : ld;
  function jm(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function na(t) {
    return t === "head";
  }
  function rd(t, e) {
    var n = e, l = 0;
    do {
      var r = n.nextSibling;
      if (t.removeChild(n), r && r.nodeType === 8)
        if (n = r.data, n === "/$" || n === "/&") {
          if (l === 0) {
            t.removeChild(r), Pl(e);
            return;
          }
          l--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          l++;
        else if (n === "html")
          Yo(t.ownerDocument.documentElement);
        else if (n === "head") {
          n = t.ownerDocument.head, Yo(n);
          for (var s = n.firstChild; s; ) {
            var f = s.nextSibling, m = s.nodeName;
            s[ga] || m === "SCRIPT" || m === "STYLE" || m === "LINK" && s.rel.toLowerCase() === "stylesheet" || n.removeChild(s), s = f;
          }
        } else
          n === "body" && Yo(t.ownerDocument.body);
      n = r;
    } while (n);
    Pl(e);
  }
  function sd(t, e) {
    var n = t;
    t = 0;
    do {
      var l = n.nextSibling;
      if (n.nodeType === 1 ? e ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (e ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), l && l.nodeType === 8)
        if (n = l.data, n === "/$") {
          if (t === 0) break;
          t--;
        } else
          n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || t++;
      n = l;
    } while (n);
  }
  function gc(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (e = e.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          gc(n), Il(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function Pm(t, e, n, l) {
    for (; t.nodeType === 1; ) {
      var r = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (l) {
        if (!t[ga])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (s = t.getAttribute("rel"), s === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (s !== r.rel || t.getAttribute("href") !== (r.href == null || r.href === "" ? null : r.href) || t.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin) || t.getAttribute("title") !== (r.title == null ? null : r.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (s = t.getAttribute("src"), (s !== (r.src == null ? null : r.src) || t.getAttribute("type") !== (r.type == null ? null : r.type) || t.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin)) && s && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var s = r.name == null ? null : "" + r.name;
        if (r.type === "hidden" && t.getAttribute("name") === s)
          return t;
      } else return t;
      if (t = bi(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Ym(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = bi(t.nextSibling), t === null)) return null;
    return t;
  }
  function ud(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = bi(t.nextSibling), t === null)) return null;
    return t;
  }
  function vc(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function yc(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function Vm(t, e) {
    var n = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || n.readyState !== "loading")
      e();
    else {
      var l = function() {
        e(), n.removeEventListener("DOMContentLoaded", l);
      };
      n.addEventListener("DOMContentLoaded", l), t._reactRetry = l;
    }
  }
  function bi(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var bc = null;
  function cd(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0)
            return bi(t.nextSibling);
          e--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function fd(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (e === 0) return t;
          e--;
        } else n !== "/$" && n !== "/&" || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function hd(t, e, n) {
    switch (e = gs(n), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(A(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(A(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(A(454));
        return t;
      default:
        throw Error(A(451));
    }
  }
  function Yo(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    Il(t);
  }
  var xi = /* @__PURE__ */ new Map(), dd = /* @__PURE__ */ new Set();
  function vs(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var zn = $.d;
  $.d = {
    f: Xm,
    r: Qm,
    D: Km,
    C: Jm,
    L: Wm,
    m: Im,
    X: $m,
    S: Fm,
    M: tp
  };
  function Xm() {
    var t = zn.f(), e = us();
    return t || e;
  }
  function Qm(t) {
    var e = Tn(t);
    e !== null && e.tag === 5 && e.type === "form" ? Af(e) : zn.r(t);
  }
  var Gl = typeof document > "u" ? null : document;
  function md(t, e, n) {
    var l = Gl;
    if (l && typeof e == "string" && e) {
      var r = Ft(e);
      r = 'link[rel="' + t + '"][href="' + r + '"]', typeof n == "string" && (r += '[crossorigin="' + n + '"]'), dd.has(r) || (dd.add(r), t = { rel: t, crossOrigin: n, href: e }, l.querySelector(r) === null && (e = l.createElement("link"), Ae(e, "link", t), he(e), l.head.appendChild(e)));
    }
  }
  function Km(t) {
    zn.D(t), md("dns-prefetch", t, null);
  }
  function Jm(t, e) {
    zn.C(t, e), md("preconnect", t, e);
  }
  function Wm(t, e, n) {
    zn.L(t, e, n);
    var l = Gl;
    if (l && t && e) {
      var r = 'link[rel="preload"][as="' + Ft(e) + '"]';
      e === "image" && n && n.imageSrcSet ? (r += '[imagesrcset="' + Ft(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (r += '[imagesizes="' + Ft(
        n.imageSizes
      ) + '"]')) : r += '[href="' + Ft(t) + '"]';
      var s = r;
      switch (e) {
        case "style":
          s = ql(t);
          break;
        case "script":
          s = jl(t);
      }
      xi.has(s) || (t = E(
        {
          rel: "preload",
          href: e === "image" && n && n.imageSrcSet ? void 0 : t,
          as: e
        },
        n
      ), xi.set(s, t), l.querySelector(r) !== null || e === "style" && l.querySelector(Vo(s)) || e === "script" && l.querySelector(Xo(s)) || (e = l.createElement("link"), Ae(e, "link", t), he(e), l.head.appendChild(e)));
    }
  }
  function Im(t, e) {
    zn.m(t, e);
    var n = Gl;
    if (n && t) {
      var l = e && typeof e.as == "string" ? e.as : "script", r = 'link[rel="modulepreload"][as="' + Ft(l) + '"][href="' + Ft(t) + '"]', s = r;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          s = jl(t);
      }
      if (!xi.has(s) && (t = E({ rel: "modulepreload", href: t }, e), xi.set(s, t), n.querySelector(r) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Xo(s)))
              return;
        }
        l = n.createElement("link"), Ae(l, "link", t), he(l), n.head.appendChild(l);
      }
    }
  }
  function Fm(t, e, n) {
    zn.S(t, e, n);
    var l = Gl;
    if (l && t) {
      var r = wn(l).hoistableStyles, s = ql(t);
      e = e || "default";
      var f = r.get(s);
      if (!f) {
        var m = { loading: 0, preload: null };
        if (f = l.querySelector(
          Vo(s)
        ))
          m.loading = 5;
        else {
          t = E(
            { rel: "stylesheet", href: t, "data-precedence": e },
            n
          ), (n = xi.get(s)) && xc(t, n);
          var b = f = l.createElement("link");
          he(b), Ae(b, "link", t), b._p = new Promise(function(k, q) {
            b.onload = k, b.onerror = q;
          }), b.addEventListener("load", function() {
            m.loading |= 1;
          }), b.addEventListener("error", function() {
            m.loading |= 2;
          }), m.loading |= 4, ys(f, e, l);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: m
        }, r.set(s, f);
      }
    }
  }
  function $m(t, e) {
    zn.X(t, e);
    var n = Gl;
    if (n && t) {
      var l = wn(n).hoistableScripts, r = jl(t), s = l.get(r);
      s || (s = n.querySelector(Xo(r)), s || (t = E({ src: t, async: !0 }, e), (e = xi.get(r)) && Sc(t, e), s = n.createElement("script"), he(s), Ae(s, "link", t), n.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, l.set(r, s));
    }
  }
  function tp(t, e) {
    zn.M(t, e);
    var n = Gl;
    if (n && t) {
      var l = wn(n).hoistableScripts, r = jl(t), s = l.get(r);
      s || (s = n.querySelector(Xo(r)), s || (t = E({ src: t, async: !0, type: "module" }, e), (e = xi.get(r)) && Sc(t, e), s = n.createElement("script"), he(s), Ae(s, "link", t), n.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, l.set(r, s));
    }
  }
  function pd(t, e, n, l) {
    var r = (r = F.current) ? vs(r) : null;
    if (!r) throw Error(A(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (e = ql(n.href), n = wn(
          r
        ).hoistableStyles, l = n.get(e), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(e, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          t = ql(n.href);
          var s = wn(
            r
          ).hoistableStyles, f = s.get(t);
          if (f || (r = r.ownerDocument || r, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, s.set(t, f), (s = r.querySelector(
            Vo(t)
          )) && !s._p && (f.instance = s, f.state.loading = 5), xi.has(t) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, xi.set(t, n), s || ep(
            r,
            t,
            n,
            f.state
          ))), e && l === null)
            throw Error(A(528, ""));
          return f;
        }
        if (e && l !== null)
          throw Error(A(529, ""));
        return null;
      case "script":
        return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = jl(n), n = wn(
          r
        ).hoistableScripts, l = n.get(e), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, n.set(e, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(A(444, t));
    }
  }
  function ql(t) {
    return 'href="' + Ft(t) + '"';
  }
  function Vo(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function _d(t) {
    return E({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function ep(t, e, n, l) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? l.loading = 1 : (e = t.createElement("link"), l.preload = e, e.addEventListener("load", function() {
      return l.loading |= 1;
    }), e.addEventListener("error", function() {
      return l.loading |= 2;
    }), Ae(e, "link", n), he(e), t.head.appendChild(e));
  }
  function jl(t) {
    return '[src="' + Ft(t) + '"]';
  }
  function Xo(t) {
    return "script[async]" + t;
  }
  function gd(t, e, n) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var l = t.querySelector(
            'style[data-href~="' + Ft(n.href) + '"]'
          );
          if (l)
            return e.instance = l, he(l), l;
          var r = E({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return l = (t.ownerDocument || t).createElement(
            "style"
          ), he(l), Ae(l, "style", r), ys(l, n.precedence, t), e.instance = l;
        case "stylesheet":
          r = ql(n.href);
          var s = t.querySelector(
            Vo(r)
          );
          if (s)
            return e.state.loading |= 4, e.instance = s, he(s), s;
          l = _d(n), (r = xi.get(r)) && xc(l, r), s = (t.ownerDocument || t).createElement("link"), he(s);
          var f = s;
          return f._p = new Promise(function(m, b) {
            f.onload = m, f.onerror = b;
          }), Ae(s, "link", l), e.state.loading |= 4, ys(s, n.precedence, t), e.instance = s;
        case "script":
          return s = jl(n.src), (r = t.querySelector(
            Xo(s)
          )) ? (e.instance = r, he(r), r) : (l = n, (r = xi.get(s)) && (l = E({}, n), Sc(l, r)), t = t.ownerDocument || t, r = t.createElement("script"), he(r), Ae(r, "link", l), t.head.appendChild(r), e.instance = r);
        case "void":
          return null;
        default:
          throw Error(A(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (l = e.instance, e.state.loading |= 4, ys(l, n.precedence, t));
    return e.instance;
  }
  function ys(t, e, n) {
    for (var l = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), r = l.length ? l[l.length - 1] : null, s = r, f = 0; f < l.length; f++) {
      var m = l[f];
      if (m.dataset.precedence === e) s = m;
      else if (s !== r) break;
    }
    s ? s.parentNode.insertBefore(t, s.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild));
  }
  function xc(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function Sc(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var bs = null;
  function vd(t, e, n) {
    if (bs === null) {
      var l = /* @__PURE__ */ new Map(), r = bs = /* @__PURE__ */ new Map();
      r.set(n, l);
    } else
      r = bs, l = r.get(n), l || (l = /* @__PURE__ */ new Map(), r.set(n, l));
    if (l.has(t)) return l;
    for (l.set(t, null), n = n.getElementsByTagName(t), r = 0; r < n.length; r++) {
      var s = n[r];
      if (!(s[ga] || s[fe] || t === "link" && s.getAttribute("rel") === "stylesheet") && s.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = s.getAttribute(e) || "";
        f = t + f;
        var m = l.get(f);
        m ? m.push(s) : l.set(f, [s]);
      }
    }
    return l;
  }
  function yd(t, e, n) {
    t = t.ownerDocument || t, t.head.insertBefore(
      n,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function ip(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
          break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
          break;
        switch (e.rel) {
          case "stylesheet":
            return t = e.disabled, typeof e.precedence == "string" && t == null;
          default:
            return !0;
        }
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0;
    }
    return !1;
  }
  function bd(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function np(t, e, n, l) {
    if (n.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var r = ql(l.href), s = e.querySelector(
          Vo(r)
        );
        if (s) {
          e = s._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = xs.bind(t), e.then(t, t)), n.state.loading |= 4, n.instance = s, he(s);
          return;
        }
        s = e.ownerDocument || e, l = _d(l), (r = xi.get(r)) && xc(l, r), s = s.createElement("link"), he(s);
        var f = s;
        f._p = new Promise(function(m, b) {
          f.onload = m, f.onerror = b;
        }), Ae(s, "link", l), n.instance = s;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (t.count++, n = xs.bind(t), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  var Lc = 0;
  function ap(t, e) {
    return t.stylesheets && t.count === 0 && Ls(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(n) {
      var l = setTimeout(function() {
        if (t.stylesheets && Ls(t, t.stylesheets), t.unsuspend) {
          var s = t.unsuspend;
          t.unsuspend = null, s();
        }
      }, 6e4 + e);
      0 < t.imgBytes && Lc === 0 && (Lc = 62500 * Um());
      var r = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Ls(t, t.stylesheets), t.unsuspend)) {
            var s = t.unsuspend;
            t.unsuspend = null, s();
          }
        },
        (t.imgBytes > Lc ? 50 : 800) + e
      );
      return t.unsuspend = n, function() {
        t.unsuspend = null, clearTimeout(l), clearTimeout(r);
      };
    } : null;
  }
  function xs() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Ls(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var Ss = null;
  function Ls(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Ss = /* @__PURE__ */ new Map(), e.forEach(lp, t), Ss = null, xs.call(t));
  }
  function lp(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Ss.get(t);
      if (n) var l = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Ss.set(t, n);
        for (var r = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), s = 0; s < r.length; s++) {
          var f = r[s];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (n.set(f.dataset.precedence, f), l = f);
        }
        l && n.set(null, l);
      }
      r = e.instance, f = r.getAttribute("data-precedence"), s = n.get(f) || l, s === l && n.set(null, r), n.set(f, r), this.count++, l = xs.bind(this), r.addEventListener("load", l), r.addEventListener("error", l), s ? s.parentNode.insertBefore(r, s.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(r, t.firstChild)), e.state.loading |= 4;
    }
  }
  var Qo = {
    $$typeof: at,
    Provider: null,
    Consumer: null,
    _currentValue: K,
    _currentValue2: K,
    _threadCount: 0
  };
  function op(t, e, n, l, r, s, f, m, b) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Kl(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Kl(0), this.hiddenUpdates = Kl(null), this.identifierPrefix = l, this.onUncaughtError = r, this.onCaughtError = s, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = b, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function xd(t, e, n, l, r, s, f, m, b, k, q, X) {
    return t = new op(
      t,
      e,
      n,
      f,
      b,
      k,
      q,
      X,
      m
    ), e = 1, s === !0 && (e |= 24), s = ke(3, null, null, e), t.current = s, s.stateNode = t, e = iu(), e.refCount++, t.pooledCache = e, e.refCount++, s.memoizedState = {
      element: l,
      isDehydrated: n,
      cache: e
    }, ou(s), t;
  }
  function Sd(t) {
    return t ? (t = cn, t) : cn;
  }
  function Ld(t, e, n, l, r, s) {
    r = Sd(r), l.context === null ? l.context = r : l.pendingContext = r, l = Xn(e), l.payload = { element: n }, s = s === void 0 ? null : s, s !== null && (l.callback = s), n = Qn(t, l, e), n !== null && (We(n, t, e), Eo(n, t, e));
  }
  function zd(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function zc(t, e) {
    zd(t, e), (t = t.alternate) && zd(t, e);
  }
  function Ed(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = gi(t, 67108864);
      e !== null && We(e, t, 67108864), zc(t, 67108864);
    }
  }
  function Td(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = si();
      e = He(e);
      var n = gi(t, e);
      n !== null && We(n, t, e), zc(t, e);
    }
  }
  var zs = !0;
  function rp(t, e, n, l) {
    var r = Z.T;
    Z.T = null;
    var s = $.p;
    try {
      $.p = 2, Ec(t, e, n, l);
    } finally {
      $.p = s, Z.T = r;
    }
  }
  function sp(t, e, n, l) {
    var r = Z.T;
    Z.T = null;
    var s = $.p;
    try {
      $.p = 8, Ec(t, e, n, l);
    } finally {
      $.p = s, Z.T = r;
    }
  }
  function Ec(t, e, n, l) {
    if (zs) {
      var r = Tc(l);
      if (r === null)
        fc(
          t,
          e,
          l,
          Es,
          n
        ), Md(t, l);
      else if (cp(
        r,
        t,
        e,
        n,
        l
      ))
        l.stopPropagation();
      else if (Md(t, l), e & 4 && -1 < up.indexOf(t)) {
        for (; r !== null; ) {
          var s = Tn(r);
          if (s !== null)
            switch (s.tag) {
              case 3:
                if (s = s.stateNode, s.current.memoizedState.isDehydrated) {
                  var f = tn(s.pendingLanes);
                  if (f !== 0) {
                    var m = s;
                    for (m.pendingLanes |= 2, m.entangledLanes |= 2; f; ) {
                      var b = 1 << 31 - Be(f);
                      m.entanglements[1] |= b, f &= ~b;
                    }
                    Wi(s), (Rt & 6) === 0 && (rs = De() + 500, qo(0));
                  }
                }
                break;
              case 31:
              case 13:
                m = gi(s, 2), m !== null && We(m, s, 2), us(), zc(s, 2);
            }
          if (s = Tc(l), s === null && fc(
            t,
            e,
            l,
            Es,
            n
          ), s === r) break;
          r = s;
        }
        r !== null && l.stopPropagation();
      } else
        fc(
          t,
          e,
          l,
          null,
          n
        );
    }
  }
  function Tc(t) {
    return t = Sa(t), wc(t);
  }
  var Es = null;
  function wc(t) {
    if (Es = null, t = an(t), t !== null) {
      var e = h(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (t = p(e), t !== null) return t;
          t = null;
        } else if (n === 31) {
          if (t = g(e), t !== null) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return Es = t, null;
  }
  function wd(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (ks()) {
          case il:
            return 2;
          case Xl:
            return 8;
          case fa:
          case Ns:
            return 32;
          case Ql:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Mc = !1, aa = null, la = null, oa = null, Ko = /* @__PURE__ */ new Map(), Jo = /* @__PURE__ */ new Map(), ra = [], up = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Md(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        aa = null;
        break;
      case "dragenter":
      case "dragleave":
        la = null;
        break;
      case "mouseover":
      case "mouseout":
        oa = null;
        break;
      case "pointerover":
      case "pointerout":
        Ko.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Jo.delete(e.pointerId);
    }
  }
  function Wo(t, e, n, l, r, s) {
    return t === null || t.nativeEvent !== s ? (t = {
      blockedOn: e,
      domEventName: n,
      eventSystemFlags: l,
      nativeEvent: s,
      targetContainers: [r]
    }, e !== null && (e = Tn(e), e !== null && Ed(e)), t) : (t.eventSystemFlags |= l, e = t.targetContainers, r !== null && e.indexOf(r) === -1 && e.push(r), t);
  }
  function cp(t, e, n, l, r) {
    switch (e) {
      case "focusin":
        return aa = Wo(
          aa,
          t,
          e,
          n,
          l,
          r
        ), !0;
      case "dragenter":
        return la = Wo(
          la,
          t,
          e,
          n,
          l,
          r
        ), !0;
      case "mouseover":
        return oa = Wo(
          oa,
          t,
          e,
          n,
          l,
          r
        ), !0;
      case "pointerover":
        var s = r.pointerId;
        return Ko.set(
          s,
          Wo(
            Ko.get(s) || null,
            t,
            e,
            n,
            l,
            r
          )
        ), !0;
      case "gotpointercapture":
        return s = r.pointerId, Jo.set(
          s,
          Wo(
            Jo.get(s) || null,
            t,
            e,
            n,
            l,
            r
          )
        ), !0;
    }
    return !1;
  }
  function Cd(t) {
    var e = an(t.target);
    if (e !== null) {
      var n = h(e);
      if (n !== null) {
        if (e = n.tag, e === 13) {
          if (e = p(n), e !== null) {
            t.blockedOn = e, Wl(t.priority, function() {
              Td(n);
            });
            return;
          }
        } else if (e === 31) {
          if (e = g(n), e !== null) {
            t.blockedOn = e, Wl(t.priority, function() {
              Td(n);
            });
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Ts(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = Tc(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var l = new n.constructor(
          n.type,
          n
        );
        rl = l, n.target.dispatchEvent(l), rl = null;
      } else
        return e = Tn(n), e !== null && Ed(e), t.blockedOn = n, !1;
      e.shift();
    }
    return !0;
  }
  function Ad(t, e, n) {
    Ts(t) && n.delete(e);
  }
  function fp() {
    Mc = !1, aa !== null && Ts(aa) && (aa = null), la !== null && Ts(la) && (la = null), oa !== null && Ts(oa) && (oa = null), Ko.forEach(Ad), Jo.forEach(Ad);
  }
  function ws(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Mc || (Mc = !0, j.unstable_scheduleCallback(
      j.unstable_NormalPriority,
      fp
    )));
  }
  var Ms = null;
  function Od(t) {
    Ms !== t && (Ms = t, j.unstable_scheduleCallback(
      j.unstable_NormalPriority,
      function() {
        Ms === t && (Ms = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e], l = t[e + 1], r = t[e + 2];
          if (typeof l != "function") {
            if (wc(l || n) === null)
              continue;
            break;
          }
          var s = Tn(n);
          s !== null && (t.splice(e, 3), e -= 3, Tu(
            s,
            {
              pending: !0,
              data: r,
              method: n.method,
              action: l
            },
            l,
            r
          ));
        }
      }
    ));
  }
  function Pl(t) {
    function e(b) {
      return ws(b, t);
    }
    aa !== null && ws(aa, t), la !== null && ws(la, t), oa !== null && ws(oa, t), Ko.forEach(e), Jo.forEach(e);
    for (var n = 0; n < ra.length; n++) {
      var l = ra[n];
      l.blockedOn === t && (l.blockedOn = null);
    }
    for (; 0 < ra.length && (n = ra[0], n.blockedOn === null); )
      Cd(n), n.blockedOn === null && ra.shift();
    if (n = (t.ownerDocument || t).$$reactFormReplay, n != null)
      for (l = 0; l < n.length; l += 3) {
        var r = n[l], s = n[l + 1], f = r[xe] || null;
        if (typeof s == "function")
          f || Od(n);
        else if (f) {
          var m = null;
          if (s && s.hasAttribute("formAction")) {
            if (r = s, f = s[xe] || null)
              m = f.formAction;
            else if (wc(r) !== null) continue;
          } else m = f.action;
          typeof m == "function" ? n[l + 1] = m : (n.splice(l, 3), l -= 3), Od(n);
        }
      }
  }
  function kd() {
    function t(s) {
      s.canIntercept && s.info === "react-transition" && s.intercept({
        handler: function() {
          return new Promise(function(f) {
            return r = f;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
      r !== null && (r(), r = null), l || setTimeout(n, 20);
    }
    function n() {
      if (!l && !navigation.transition) {
        var s = navigation.currentEntry;
        s && s.url != null && navigation.navigate(s.url, {
          state: s.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var l = !1, r = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(n, 100), function() {
        l = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), r !== null && (r(), r = null);
      };
    }
  }
  function Cc(t) {
    this._internalRoot = t;
  }
  Cs.prototype.render = Cc.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(A(409));
    var n = e.current, l = si();
    Ld(n, l, t, e, null, null);
  }, Cs.prototype.unmount = Cc.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      Ld(t.current, 2, null, t, null, null), us(), e[nn] = null;
    }
  };
  function Cs(t) {
    this._internalRoot = t;
  }
  Cs.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = Jl();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < ra.length && e !== 0 && e < ra[n].priority; n++) ;
      ra.splice(n, 0, t), n === 0 && Cd(t);
    }
  };
  var Nd = it.version;
  if (Nd !== "19.2.8")
    throw Error(
      A(
        527,
        Nd,
        "19.2.8"
      )
    );
  $.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(A(188)) : (t = Object.keys(t).join(","), Error(A(268, t)));
    return t = v(e), t = t !== null ? N(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var hp = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: Z,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var As = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!As.isDisabled && As.supportsFiber)
      try {
        En = As.inject(
          hp
        ), Te = As;
      } catch {
      }
  }
  return Io.createRoot = function(t, e) {
    if (!lt(t)) throw Error(A(299));
    var n = !1, l = "", r = Gf, s = qf, f = jf;
    return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (l = e.identifierPrefix), e.onUncaughtError !== void 0 && (r = e.onUncaughtError), e.onCaughtError !== void 0 && (s = e.onCaughtError), e.onRecoverableError !== void 0 && (f = e.onRecoverableError)), e = xd(
      t,
      1,
      !1,
      null,
      null,
      n,
      l,
      null,
      r,
      s,
      f,
      kd
    ), t[nn] = e.current, cc(t), new Cc(e);
  }, Io.hydrateRoot = function(t, e, n) {
    if (!lt(t)) throw Error(A(299));
    var l = !1, r = "", s = Gf, f = qf, m = jf, b = null;
    return n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (f = n.onCaughtError), n.onRecoverableError !== void 0 && (m = n.onRecoverableError), n.formState !== void 0 && (b = n.formState)), e = xd(
      t,
      1,
      !0,
      e,
      n ?? null,
      l,
      r,
      b,
      s,
      f,
      m,
      kd
    ), e.context = Sd(null), n = e.current, l = si(), l = He(l), r = Xn(l), r.callback = null, Qn(n, r, l), n = l, e.current.lanes = n, en(e, n), Wi(e), t[nn] = e.current, cc(t), new Cs(e);
  }, Io.version = "19.2.8", Io;
}
var qd;
function bp() {
  if (qd) return Oc.exports;
  qd = 1;
  function j() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(j);
      } catch (it) {
        console.error(it);
      }
  }
  return j(), Oc.exports = yp(), Oc.exports;
}
var xp = bp(), tr = { exports: {} };
/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
var Sp = tr.exports, jd;
function Lp() {
  return jd || (jd = 1, (function(j, it) {
    (function(w, A) {
      A(it);
    })(Sp, (function(w) {
      var A = "1.9.4";
      function lt(i) {
        var a, o, u, c;
        for (o = 1, u = arguments.length; o < u; o++) {
          c = arguments[o];
          for (a in c)
            i[a] = c[a];
        }
        return i;
      }
      var h = Object.create || /* @__PURE__ */ (function() {
        function i() {
        }
        return function(a) {
          return i.prototype = a, new i();
        };
      })();
      function p(i, a) {
        var o = Array.prototype.slice;
        if (i.bind)
          return i.bind.apply(i, o.call(arguments, 1));
        var u = o.call(arguments, 2);
        return function() {
          return i.apply(a, u.length ? u.concat(o.call(arguments)) : arguments);
        };
      }
      var g = 0;
      function _(i) {
        return "_leaflet_id" in i || (i._leaflet_id = ++g), i._leaflet_id;
      }
      function v(i, a, o) {
        var u, c, d, y;
        return y = function() {
          u = !1, c && (d.apply(o, c), c = !1);
        }, d = function() {
          u ? c = arguments : (i.apply(o, arguments), setTimeout(y, a), u = !0);
        }, d;
      }
      function N(i, a, o) {
        var u = a[1], c = a[0], d = u - c;
        return i === u && o ? i : ((i - c) % d + d) % d + c;
      }
      function E() {
        return !1;
      }
      function R(i, a) {
        if (a === !1)
          return i;
        var o = Math.pow(10, a === void 0 ? 6 : a);
        return Math.round(i * o) / o;
      }
      function H(i) {
        return i.trim ? i.trim() : i.replace(/^\s+|\s+$/g, "");
      }
      function tt(i) {
        return H(i).split(/\s+/);
      }
      function Y(i, a) {
        Object.prototype.hasOwnProperty.call(i, "options") || (i.options = i.options ? h(i.options) : {});
        for (var o in a)
          i.options[o] = a[o];
        return i.options;
      }
      function ct(i, a, o) {
        var u = [];
        for (var c in i)
          u.push(encodeURIComponent(o ? c.toUpperCase() : c) + "=" + encodeURIComponent(i[c]));
        return (!a || a.indexOf("?") === -1 ? "?" : "&") + u.join("&");
      }
      var W = /\{ *([\w_ -]+) *\}/g;
      function I(i, a) {
        return i.replace(W, function(o, u) {
          var c = a[u];
          if (c === void 0)
            throw new Error("No value provided for variable " + o);
          return typeof c == "function" && (c = c(a)), c;
        });
      }
      var at = Array.isArray || function(i) {
        return Object.prototype.toString.call(i) === "[object Array]";
      };
      function Ht(i, a) {
        for (var o = 0; o < i.length; o++)
          if (i[o] === a)
            return o;
        return -1;
      }
      var Gt = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
      function It(i) {
        return window["webkit" + i] || window["moz" + i] || window["ms" + i];
      }
      var pt = 0;
      function ce(i) {
        var a = +/* @__PURE__ */ new Date(), o = Math.max(0, 16 - (a - pt));
        return pt = a + o, window.setTimeout(i, o);
      }
      var Ee = window.requestAnimationFrame || It("RequestAnimationFrame") || ce, Fe = window.cancelAnimationFrame || It("CancelAnimationFrame") || It("CancelRequestAnimationFrame") || function(i) {
        window.clearTimeout(i);
      };
      function Pt(i, a, o) {
        if (o && Ee === ce)
          i.call(a);
        else
          return Ee.call(window, p(i, a));
      }
      function Mt(i) {
        i && Fe.call(window, i);
      }
      var $e = {
        __proto__: null,
        extend: lt,
        create: h,
        bind: p,
        get lastId() {
          return g;
        },
        stamp: _,
        throttle: v,
        wrapNum: N,
        falseFn: E,
        formatNum: R,
        trim: H,
        splitWords: tt,
        setOptions: Y,
        getParamString: ct,
        template: I,
        isArray: at,
        indexOf: Ht,
        emptyImageUrl: Gt,
        requestFn: Ee,
        cancelFn: Fe,
        requestAnimFrame: Pt,
        cancelAnimFrame: Mt
      };
      function Ot() {
      }
      Ot.extend = function(i) {
        var a = function() {
          Y(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
        }, o = a.__super__ = this.prototype, u = h(o);
        u.constructor = a, a.prototype = u;
        for (var c in this)
          Object.prototype.hasOwnProperty.call(this, c) && c !== "prototype" && c !== "__super__" && (a[c] = this[c]);
        return i.statics && lt(a, i.statics), i.includes && (ge(i.includes), lt.apply(null, [u].concat(i.includes))), lt(u, i), delete u.statics, delete u.includes, u.options && (u.options = o.options ? h(o.options) : {}, lt(u.options, i.options)), u._initHooks = [], u.callInitHooks = function() {
          if (!this._initHooksCalled) {
            o.callInitHooks && o.callInitHooks.call(this), this._initHooksCalled = !0;
            for (var d = 0, y = u._initHooks.length; d < y; d++)
              u._initHooks[d].call(this);
          }
        }, a;
      }, Ot.include = function(i) {
        var a = this.prototype.options;
        return lt(this.prototype, i), i.options && (this.prototype.options = a, this.mergeOptions(i.options)), this;
      }, Ot.mergeOptions = function(i) {
        return lt(this.prototype.options, i), this;
      }, Ot.addInitHook = function(i) {
        var a = Array.prototype.slice.call(arguments, 1), o = typeof i == "function" ? i : function() {
          this[i].apply(this, a);
        };
        return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(o), this;
      };
      function ge(i) {
        if (!(typeof L > "u" || !L || !L.Mixin)) {
          i = at(i) ? i : [i];
          for (var a = 0; a < i.length; a++)
            i[a] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
        }
      }
      var Z = {
        /* @method on(type: String, fn: Function, context?: Object): this
         * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
         *
         * @alternative
         * @method on(eventMap: Object): this
         * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
         */
        on: function(i, a, o) {
          if (typeof i == "object")
            for (var u in i)
              this._on(u, i[u], a);
          else {
            i = tt(i);
            for (var c = 0, d = i.length; c < d; c++)
              this._on(i[c], a, o);
          }
          return this;
        },
        /* @method off(type: String, fn?: Function, context?: Object): this
         * Removes a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object. Note that if you passed a custom context to `on`, you must pass the same context to `off` in order to remove the listener.
         *
         * @alternative
         * @method off(eventMap: Object): this
         * Removes a set of type/listener pairs.
         *
         * @alternative
         * @method off: this
         * Removes all listeners to all events on the object. This includes implicitly attached events.
         */
        off: function(i, a, o) {
          if (!arguments.length)
            delete this._events;
          else if (typeof i == "object")
            for (var u in i)
              this._off(u, i[u], a);
          else {
            i = tt(i);
            for (var c = arguments.length === 1, d = 0, y = i.length; d < y; d++)
              c ? this._off(i[d]) : this._off(i[d], a, o);
          }
          return this;
        },
        // attach listener (without syntactic sugar now)
        _on: function(i, a, o, u) {
          if (typeof a != "function") {
            console.warn("wrong listener type: " + typeof a);
            return;
          }
          if (this._listens(i, a, o) === !1) {
            o === this && (o = void 0);
            var c = { fn: a, ctx: o };
            u && (c.once = !0), this._events = this._events || {}, this._events[i] = this._events[i] || [], this._events[i].push(c);
          }
        },
        _off: function(i, a, o) {
          var u, c, d;
          if (this._events && (u = this._events[i], !!u)) {
            if (arguments.length === 1) {
              if (this._firingCount)
                for (c = 0, d = u.length; c < d; c++)
                  u[c].fn = E;
              delete this._events[i];
              return;
            }
            if (typeof a != "function") {
              console.warn("wrong listener type: " + typeof a);
              return;
            }
            var y = this._listens(i, a, o);
            if (y !== !1) {
              var C = u[y];
              this._firingCount && (C.fn = E, this._events[i] = u = u.slice()), u.splice(y, 1);
            }
          }
        },
        // @method fire(type: String, data?: Object, propagate?: Boolean): this
        // Fires an event of the specified type. You can optionally provide a data
        // object — the first argument of the listener function will contain its
        // properties. The event can optionally be propagated to event parents.
        fire: function(i, a, o) {
          if (!this.listens(i, o))
            return this;
          var u = lt({}, a, {
            type: i,
            target: this,
            sourceTarget: a && a.sourceTarget || this
          });
          if (this._events) {
            var c = this._events[i];
            if (c) {
              this._firingCount = this._firingCount + 1 || 1;
              for (var d = 0, y = c.length; d < y; d++) {
                var C = c[d], D = C.fn;
                C.once && this.off(i, D, C.ctx), D.call(C.ctx || this, u);
              }
              this._firingCount--;
            }
          }
          return o && this._propagateEvent(u), this;
        },
        // @method listens(type: String, propagate?: Boolean): Boolean
        // @method listens(type: String, fn: Function, context?: Object, propagate?: Boolean): Boolean
        // Returns `true` if a particular event type has any listeners attached to it.
        // The verification can optionally be propagated, it will return `true` if parents have the listener attached to it.
        listens: function(i, a, o, u) {
          typeof i != "string" && console.warn('"string" type argument expected');
          var c = a;
          typeof a != "function" && (u = !!a, c = void 0, o = void 0);
          var d = this._events && this._events[i];
          if (d && d.length && this._listens(i, c, o) !== !1)
            return !0;
          if (u) {
            for (var y in this._eventParents)
              if (this._eventParents[y].listens(i, a, o, u))
                return !0;
          }
          return !1;
        },
        // returns the index (number) or false
        _listens: function(i, a, o) {
          if (!this._events)
            return !1;
          var u = this._events[i] || [];
          if (!a)
            return !!u.length;
          o === this && (o = void 0);
          for (var c = 0, d = u.length; c < d; c++)
            if (u[c].fn === a && u[c].ctx === o)
              return c;
          return !1;
        },
        // @method once(…): this
        // Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
        once: function(i, a, o) {
          if (typeof i == "object")
            for (var u in i)
              this._on(u, i[u], a, !0);
          else {
            i = tt(i);
            for (var c = 0, d = i.length; c < d; c++)
              this._on(i[c], a, o, !0);
          }
          return this;
        },
        // @method addEventParent(obj: Evented): this
        // Adds an event parent - an `Evented` that will receive propagated events
        addEventParent: function(i) {
          return this._eventParents = this._eventParents || {}, this._eventParents[_(i)] = i, this;
        },
        // @method removeEventParent(obj: Evented): this
        // Removes an event parent, so it will stop receiving propagated events
        removeEventParent: function(i) {
          return this._eventParents && delete this._eventParents[_(i)], this;
        },
        _propagateEvent: function(i) {
          for (var a in this._eventParents)
            this._eventParents[a].fire(i.type, lt({
              layer: i.target,
              propagatedFrom: i.target
            }, i), !0);
        }
      };
      Z.addEventListener = Z.on, Z.removeEventListener = Z.clearAllEventListeners = Z.off, Z.addOneTimeEventListener = Z.once, Z.fireEvent = Z.fire, Z.hasEventListeners = Z.listens;
      var $ = Ot.extend(Z);
      function K(i, a, o) {
        this.x = o ? Math.round(i) : i, this.y = o ? Math.round(a) : a;
      }
      var At = Math.trunc || function(i) {
        return i > 0 ? Math.floor(i) : Math.ceil(i);
      };
      K.prototype = {
        // @method clone(): Point
        // Returns a copy of the current point.
        clone: function() {
          return new K(this.x, this.y);
        },
        // @method add(otherPoint: Point): Point
        // Returns the result of addition of the current and the given points.
        add: function(i) {
          return this.clone()._add(nt(i));
        },
        _add: function(i) {
          return this.x += i.x, this.y += i.y, this;
        },
        // @method subtract(otherPoint: Point): Point
        // Returns the result of subtraction of the given point from the current.
        subtract: function(i) {
          return this.clone()._subtract(nt(i));
        },
        _subtract: function(i) {
          return this.x -= i.x, this.y -= i.y, this;
        },
        // @method divideBy(num: Number): Point
        // Returns the result of division of the current point by the given number.
        divideBy: function(i) {
          return this.clone()._divideBy(i);
        },
        _divideBy: function(i) {
          return this.x /= i, this.y /= i, this;
        },
        // @method multiplyBy(num: Number): Point
        // Returns the result of multiplication of the current point by the given number.
        multiplyBy: function(i) {
          return this.clone()._multiplyBy(i);
        },
        _multiplyBy: function(i) {
          return this.x *= i, this.y *= i, this;
        },
        // @method scaleBy(scale: Point): Point
        // Multiply each coordinate of the current point by each coordinate of
        // `scale`. In linear algebra terms, multiply the point by the
        // [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)
        // defined by `scale`.
        scaleBy: function(i) {
          return new K(this.x * i.x, this.y * i.y);
        },
        // @method unscaleBy(scale: Point): Point
        // Inverse of `scaleBy`. Divide each coordinate of the current point by
        // each coordinate of `scale`.
        unscaleBy: function(i) {
          return new K(this.x / i.x, this.y / i.y);
        },
        // @method round(): Point
        // Returns a copy of the current point with rounded coordinates.
        round: function() {
          return this.clone()._round();
        },
        _round: function() {
          return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
        },
        // @method floor(): Point
        // Returns a copy of the current point with floored coordinates (rounded down).
        floor: function() {
          return this.clone()._floor();
        },
        _floor: function() {
          return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
        },
        // @method ceil(): Point
        // Returns a copy of the current point with ceiled coordinates (rounded up).
        ceil: function() {
          return this.clone()._ceil();
        },
        _ceil: function() {
          return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
        },
        // @method trunc(): Point
        // Returns a copy of the current point with truncated coordinates (rounded towards zero).
        trunc: function() {
          return this.clone()._trunc();
        },
        _trunc: function() {
          return this.x = At(this.x), this.y = At(this.y), this;
        },
        // @method distanceTo(otherPoint: Point): Number
        // Returns the cartesian distance between the current and the given points.
        distanceTo: function(i) {
          i = nt(i);
          var a = i.x - this.x, o = i.y - this.y;
          return Math.sqrt(a * a + o * o);
        },
        // @method equals(otherPoint: Point): Boolean
        // Returns `true` if the given point has the same coordinates.
        equals: function(i) {
          return i = nt(i), i.x === this.x && i.y === this.y;
        },
        // @method contains(otherPoint: Point): Boolean
        // Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
        contains: function(i) {
          return i = nt(i), Math.abs(i.x) <= Math.abs(this.x) && Math.abs(i.y) <= Math.abs(this.y);
        },
        // @method toString(): String
        // Returns a string representation of the point for debugging purposes.
        toString: function() {
          return "Point(" + R(this.x) + ", " + R(this.y) + ")";
        }
      };
      function nt(i, a, o) {
        return i instanceof K ? i : at(i) ? new K(i[0], i[1]) : i == null ? i : typeof i == "object" && "x" in i && "y" in i ? new K(i.x, i.y) : new K(i, a, o);
      }
      function S(i, a) {
        if (i)
          for (var o = a ? [i, a] : i, u = 0, c = o.length; u < c; u++)
            this.extend(o[u]);
      }
      S.prototype = {
        // @method extend(point: Point): this
        // Extends the bounds to contain the given point.
        // @alternative
        // @method extend(otherBounds: Bounds): this
        // Extend the bounds to contain the given bounds
        extend: function(i) {
          var a, o;
          if (!i)
            return this;
          if (i instanceof K || typeof i[0] == "number" || "x" in i)
            a = o = nt(i);
          else if (i = G(i), a = i.min, o = i.max, !a || !o)
            return this;
          return !this.min && !this.max ? (this.min = a.clone(), this.max = o.clone()) : (this.min.x = Math.min(a.x, this.min.x), this.max.x = Math.max(o.x, this.max.x), this.min.y = Math.min(a.y, this.min.y), this.max.y = Math.max(o.y, this.max.y)), this;
        },
        // @method getCenter(round?: Boolean): Point
        // Returns the center point of the bounds.
        getCenter: function(i) {
          return nt(
            (this.min.x + this.max.x) / 2,
            (this.min.y + this.max.y) / 2,
            i
          );
        },
        // @method getBottomLeft(): Point
        // Returns the bottom-left point of the bounds.
        getBottomLeft: function() {
          return nt(this.min.x, this.max.y);
        },
        // @method getTopRight(): Point
        // Returns the top-right point of the bounds.
        getTopRight: function() {
          return nt(this.max.x, this.min.y);
        },
        // @method getTopLeft(): Point
        // Returns the top-left point of the bounds (i.e. [`this.min`](#bounds-min)).
        getTopLeft: function() {
          return this.min;
        },
        // @method getBottomRight(): Point
        // Returns the bottom-right point of the bounds (i.e. [`this.max`](#bounds-max)).
        getBottomRight: function() {
          return this.max;
        },
        // @method getSize(): Point
        // Returns the size of the given bounds
        getSize: function() {
          return this.max.subtract(this.min);
        },
        // @method contains(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle contains the given one.
        // @alternative
        // @method contains(point: Point): Boolean
        // Returns `true` if the rectangle contains the given point.
        contains: function(i) {
          var a, o;
          return typeof i[0] == "number" || i instanceof K ? i = nt(i) : i = G(i), i instanceof S ? (a = i.min, o = i.max) : a = o = i, a.x >= this.min.x && o.x <= this.max.x && a.y >= this.min.y && o.y <= this.max.y;
        },
        // @method intersects(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle intersects the given bounds. Two bounds
        // intersect if they have at least one point in common.
        intersects: function(i) {
          i = G(i);
          var a = this.min, o = this.max, u = i.min, c = i.max, d = c.x >= a.x && u.x <= o.x, y = c.y >= a.y && u.y <= o.y;
          return d && y;
        },
        // @method overlaps(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle overlaps the given bounds. Two bounds
        // overlap if their intersection is an area.
        overlaps: function(i) {
          i = G(i);
          var a = this.min, o = this.max, u = i.min, c = i.max, d = c.x > a.x && u.x < o.x, y = c.y > a.y && u.y < o.y;
          return d && y;
        },
        // @method isValid(): Boolean
        // Returns `true` if the bounds are properly initialized.
        isValid: function() {
          return !!(this.min && this.max);
        },
        // @method pad(bufferRatio: Number): Bounds
        // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
        // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
        // Negative values will retract the bounds.
        pad: function(i) {
          var a = this.min, o = this.max, u = Math.abs(a.x - o.x) * i, c = Math.abs(a.y - o.y) * i;
          return G(
            nt(a.x - u, a.y - c),
            nt(o.x + u, o.y + c)
          );
        },
        // @method equals(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle is equivalent to the given bounds.
        equals: function(i) {
          return i ? (i = G(i), this.min.equals(i.getTopLeft()) && this.max.equals(i.getBottomRight())) : !1;
        }
      };
      function G(i, a) {
        return !i || i instanceof S ? i : new S(i, a);
      }
      function J(i, a) {
        if (i)
          for (var o = a ? [i, a] : i, u = 0, c = o.length; u < c; u++)
            this.extend(o[u]);
      }
      J.prototype = {
        // @method extend(latlng: LatLng): this
        // Extend the bounds to contain the given point
        // @alternative
        // @method extend(otherBounds: LatLngBounds): this
        // Extend the bounds to contain the given bounds
        extend: function(i) {
          var a = this._southWest, o = this._northEast, u, c;
          if (i instanceof Q)
            u = i, c = i;
          else if (i instanceof J) {
            if (u = i._southWest, c = i._northEast, !u || !c)
              return this;
          } else
            return i ? this.extend(F(i) || z(i)) : this;
          return !a && !o ? (this._southWest = new Q(u.lat, u.lng), this._northEast = new Q(c.lat, c.lng)) : (a.lat = Math.min(u.lat, a.lat), a.lng = Math.min(u.lng, a.lng), o.lat = Math.max(c.lat, o.lat), o.lng = Math.max(c.lng, o.lng)), this;
        },
        // @method pad(bufferRatio: Number): LatLngBounds
        // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
        // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
        // Negative values will retract the bounds.
        pad: function(i) {
          var a = this._southWest, o = this._northEast, u = Math.abs(a.lat - o.lat) * i, c = Math.abs(a.lng - o.lng) * i;
          return new J(
            new Q(a.lat - u, a.lng - c),
            new Q(o.lat + u, o.lng + c)
          );
        },
        // @method getCenter(): LatLng
        // Returns the center point of the bounds.
        getCenter: function() {
          return new Q(
            (this._southWest.lat + this._northEast.lat) / 2,
            (this._southWest.lng + this._northEast.lng) / 2
          );
        },
        // @method getSouthWest(): LatLng
        // Returns the south-west point of the bounds.
        getSouthWest: function() {
          return this._southWest;
        },
        // @method getNorthEast(): LatLng
        // Returns the north-east point of the bounds.
        getNorthEast: function() {
          return this._northEast;
        },
        // @method getNorthWest(): LatLng
        // Returns the north-west point of the bounds.
        getNorthWest: function() {
          return new Q(this.getNorth(), this.getWest());
        },
        // @method getSouthEast(): LatLng
        // Returns the south-east point of the bounds.
        getSouthEast: function() {
          return new Q(this.getSouth(), this.getEast());
        },
        // @method getWest(): Number
        // Returns the west longitude of the bounds
        getWest: function() {
          return this._southWest.lng;
        },
        // @method getSouth(): Number
        // Returns the south latitude of the bounds
        getSouth: function() {
          return this._southWest.lat;
        },
        // @method getEast(): Number
        // Returns the east longitude of the bounds
        getEast: function() {
          return this._northEast.lng;
        },
        // @method getNorth(): Number
        // Returns the north latitude of the bounds
        getNorth: function() {
          return this._northEast.lat;
        },
        // @method contains(otherBounds: LatLngBounds): Boolean
        // Returns `true` if the rectangle contains the given one.
        // @alternative
        // @method contains (latlng: LatLng): Boolean
        // Returns `true` if the rectangle contains the given point.
        contains: function(i) {
          typeof i[0] == "number" || i instanceof Q || "lat" in i ? i = F(i) : i = z(i);
          var a = this._southWest, o = this._northEast, u, c;
          return i instanceof J ? (u = i.getSouthWest(), c = i.getNorthEast()) : u = c = i, u.lat >= a.lat && c.lat <= o.lat && u.lng >= a.lng && c.lng <= o.lng;
        },
        // @method intersects(otherBounds: LatLngBounds): Boolean
        // Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
        intersects: function(i) {
          i = z(i);
          var a = this._southWest, o = this._northEast, u = i.getSouthWest(), c = i.getNorthEast(), d = c.lat >= a.lat && u.lat <= o.lat, y = c.lng >= a.lng && u.lng <= o.lng;
          return d && y;
        },
        // @method overlaps(otherBounds: LatLngBounds): Boolean
        // Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
        overlaps: function(i) {
          i = z(i);
          var a = this._southWest, o = this._northEast, u = i.getSouthWest(), c = i.getNorthEast(), d = c.lat > a.lat && u.lat < o.lat, y = c.lng > a.lng && u.lng < o.lng;
          return d && y;
        },
        // @method toBBoxString(): String
        // Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
        toBBoxString: function() {
          return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
        },
        // @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
        // Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
        equals: function(i, a) {
          return i ? (i = z(i), this._southWest.equals(i.getSouthWest(), a) && this._northEast.equals(i.getNorthEast(), a)) : !1;
        },
        // @method isValid(): Boolean
        // Returns `true` if the bounds are properly initialized.
        isValid: function() {
          return !!(this._southWest && this._northEast);
        }
      };
      function z(i, a) {
        return i instanceof J ? i : new J(i, a);
      }
      function Q(i, a, o) {
        if (isNaN(i) || isNaN(a))
          throw new Error("Invalid LatLng object: (" + i + ", " + a + ")");
        this.lat = +i, this.lng = +a, o !== void 0 && (this.alt = +o);
      }
      Q.prototype = {
        // @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
        // Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
        equals: function(i, a) {
          if (!i)
            return !1;
          i = F(i);
          var o = Math.max(
            Math.abs(this.lat - i.lat),
            Math.abs(this.lng - i.lng)
          );
          return o <= (a === void 0 ? 1e-9 : a);
        },
        // @method toString(): String
        // Returns a string representation of the point (for debugging purposes).
        toString: function(i) {
          return "LatLng(" + R(this.lat, i) + ", " + R(this.lng, i) + ")";
        },
        // @method distanceTo(otherLatLng: LatLng): Number
        // Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
        distanceTo: function(i) {
          return Zt.distance(this, F(i));
        },
        // @method wrap(): LatLng
        // Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
        wrap: function() {
          return Zt.wrapLatLng(this);
        },
        // @method toBounds(sizeInMeters: Number): LatLngBounds
        // Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
        toBounds: function(i) {
          var a = 180 * i / 40075017, o = a / Math.cos(Math.PI / 180 * this.lat);
          return z(
            [this.lat - a, this.lng - o],
            [this.lat + a, this.lng + o]
          );
        },
        clone: function() {
          return new Q(this.lat, this.lng, this.alt);
        }
      };
      function F(i, a, o) {
        return i instanceof Q ? i : at(i) && typeof i[0] != "object" ? i.length === 3 ? new Q(i[0], i[1], i[2]) : i.length === 2 ? new Q(i[0], i[1]) : null : i == null ? i : typeof i == "object" && "lat" in i ? new Q(i.lat, "lng" in i ? i.lng : i.lon, i.alt) : a === void 0 ? null : new Q(i, a, o);
      }
      var mt = {
        // @method latLngToPoint(latlng: LatLng, zoom: Number): Point
        // Projects geographical coordinates into pixel coordinates for a given zoom.
        latLngToPoint: function(i, a) {
          var o = this.projection.project(i), u = this.scale(a);
          return this.transformation._transform(o, u);
        },
        // @method pointToLatLng(point: Point, zoom: Number): LatLng
        // The inverse of `latLngToPoint`. Projects pixel coordinates on a given
        // zoom into geographical coordinates.
        pointToLatLng: function(i, a) {
          var o = this.scale(a), u = this.transformation.untransform(i, o);
          return this.projection.unproject(u);
        },
        // @method project(latlng: LatLng): Point
        // Projects geographical coordinates into coordinates in units accepted for
        // this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).
        project: function(i) {
          return this.projection.project(i);
        },
        // @method unproject(point: Point): LatLng
        // Given a projected coordinate returns the corresponding LatLng.
        // The inverse of `project`.
        unproject: function(i) {
          return this.projection.unproject(i);
        },
        // @method scale(zoom: Number): Number
        // Returns the scale used when transforming projected coordinates into
        // pixel coordinates for a particular zoom. For example, it returns
        // `256 * 2^zoom` for Mercator-based CRS.
        scale: function(i) {
          return 256 * Math.pow(2, i);
        },
        // @method zoom(scale: Number): Number
        // Inverse of `scale()`, returns the zoom level corresponding to a scale
        // factor of `scale`.
        zoom: function(i) {
          return Math.log(i / 256) / Math.LN2;
        },
        // @method getProjectedBounds(zoom: Number): Bounds
        // Returns the projection's bounds scaled and transformed for the provided `zoom`.
        getProjectedBounds: function(i) {
          if (this.infinite)
            return null;
          var a = this.projection.bounds, o = this.scale(i), u = this.transformation.transform(a.min, o), c = this.transformation.transform(a.max, o);
          return new S(u, c);
        },
        // @method distance(latlng1: LatLng, latlng2: LatLng): Number
        // Returns the distance between two geographical coordinates.
        // @property code: String
        // Standard code name of the CRS passed into WMS services (e.g. `'EPSG:3857'`)
        //
        // @property wrapLng: Number[]
        // An array of two numbers defining whether the longitude (horizontal) coordinate
        // axis wraps around a given range and how. Defaults to `[-180, 180]` in most
        // geographical CRSs. If `undefined`, the longitude axis does not wrap around.
        //
        // @property wrapLat: Number[]
        // Like `wrapLng`, but for the latitude (vertical) axis.
        // wrapLng: [min, max],
        // wrapLat: [min, max],
        // @property infinite: Boolean
        // If true, the coordinate space will be unbounded (infinite in both axes)
        infinite: !1,
        // @method wrapLatLng(latlng: LatLng): LatLng
        // Returns a `LatLng` where lat and lng has been wrapped according to the
        // CRS's `wrapLat` and `wrapLng` properties, if they are outside the CRS's bounds.
        wrapLatLng: function(i) {
          var a = this.wrapLng ? N(i.lng, this.wrapLng, !0) : i.lng, o = this.wrapLat ? N(i.lat, this.wrapLat, !0) : i.lat, u = i.alt;
          return new Q(o, a, u);
        },
        // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
        // Returns a `LatLngBounds` with the same size as the given one, ensuring
        // that its center is within the CRS's bounds.
        // Only accepts actual `L.LatLngBounds` instances, not arrays.
        wrapLatLngBounds: function(i) {
          var a = i.getCenter(), o = this.wrapLatLng(a), u = a.lat - o.lat, c = a.lng - o.lng;
          if (u === 0 && c === 0)
            return i;
          var d = i.getSouthWest(), y = i.getNorthEast(), C = new Q(d.lat - u, d.lng - c), D = new Q(y.lat - u, y.lng - c);
          return new J(C, D);
        }
      }, Zt = lt({}, mt, {
        wrapLng: [-180, 180],
        // Mean Earth Radius, as recommended for use by
        // the International Union of Geodesy and Geophysics,
        // see https://rosettacode.org/wiki/Haversine_formula
        R: 6371e3,
        // distance between two geographical points using spherical law of cosines approximation
        distance: function(i, a) {
          var o = Math.PI / 180, u = i.lat * o, c = a.lat * o, d = Math.sin((a.lat - i.lat) * o / 2), y = Math.sin((a.lng - i.lng) * o / 2), C = d * d + Math.cos(u) * Math.cos(c) * y * y, D = 2 * Math.atan2(Math.sqrt(C), Math.sqrt(1 - C));
          return this.R * D;
        }
      }), Kt = 6378137, ui = {
        R: Kt,
        MAX_LATITUDE: 85.0511287798,
        project: function(i) {
          var a = Math.PI / 180, o = this.MAX_LATITUDE, u = Math.max(Math.min(o, i.lat), -o), c = Math.sin(u * a);
          return new K(
            this.R * i.lng * a,
            this.R * Math.log((1 + c) / (1 - c)) / 2
          );
        },
        unproject: function(i) {
          var a = 180 / Math.PI;
          return new Q(
            (2 * Math.atan(Math.exp(i.y / this.R)) - Math.PI / 2) * a,
            i.x * a / this.R
          );
        },
        bounds: (function() {
          var i = Kt * Math.PI;
          return new S([-i, -i], [i, i]);
        })()
      };
      function Li(i, a, o, u) {
        if (at(i)) {
          this._a = i[0], this._b = i[1], this._c = i[2], this._d = i[3];
          return;
        }
        this._a = i, this._b = a, this._c = o, this._d = u;
      }
      Li.prototype = {
        // @method transform(point: Point, scale?: Number): Point
        // Returns a transformed point, optionally multiplied by the given scale.
        // Only accepts actual `L.Point` instances, not arrays.
        transform: function(i, a) {
          return this._transform(i.clone(), a);
        },
        // destructive transform (faster)
        _transform: function(i, a) {
          return a = a || 1, i.x = a * (this._a * i.x + this._b), i.y = a * (this._c * i.y + this._d), i;
        },
        // @method untransform(point: Point, scale?: Number): Point
        // Returns the reverse transformation of the given point, optionally divided
        // by the given scale. Only accepts actual `L.Point` instances, not arrays.
        untransform: function(i, a) {
          return a = a || 1, new K(
            (i.x / a - this._b) / this._a,
            (i.y / a - this._d) / this._c
          );
        }
      };
      function ci(i, a, o, u) {
        return new Li(i, a, o, u);
      }
      var Fa = lt({}, Zt, {
        code: "EPSG:3857",
        projection: ui,
        transformation: (function() {
          var i = 0.5 / (Math.PI * ui.R);
          return ci(i, 0.5, -i, 0.5);
        })()
      }), $i = lt({}, Fa, {
        code: "EPSG:900913"
      });
      function $a(i) {
        return document.createElementNS("http://www.w3.org/2000/svg", i);
      }
      function tl(i, a) {
        var o = "", u, c, d, y, C, D;
        for (u = 0, d = i.length; u < d; u++) {
          for (C = i[u], c = 0, y = C.length; c < y; c++)
            D = C[c], o += (c ? "L" : "M") + D.x + " " + D.y;
          o += a ? st.svg ? "z" : "x" : "";
        }
        return o || "M0 0";
      }
      var Yl = document.documentElement.style, ua = "ActiveXObject" in window, Vl = ua && !document.addEventListener, el = "msLaunchUri" in navigator && !("documentMode" in document), ca = He("webkit"), nr = He("android"), ar = He("android 2") || He("android 3"), De = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), ks = nr && He("Google") && De < 537 && !("AudioNode" in window), il = !!window.opera, Xl = !el && He("chrome"), fa = He("gecko") && !ca && !il && !ua, Ns = !Xl && He("safari"), Ql = He("phantom"), lr = "OTransition" in Yl, Ds = navigator.platform.indexOf("Win") === 0, En = ua && "transition" in Yl, Te = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !ar, zi = "MozPerspective" in Yl, Be = !window.L_DISABLE_3D && (En || Te || zi) && !lr && !Ql, ha = typeof orientation < "u" || He("mobile"), Bs = ha && ca, Zs = ha && Te, da = !window.PointerEvent && window.MSPointerEvent, ma = !!(window.PointerEvent || da), pa = "ontouchstart" in window || !!window.TouchEvent, tn = !window.L_NO_TOUCH && (pa || ma), nl = ha && il, _a = ha && fa, Rs = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1, or = (function() {
        var i = !1;
        try {
          var a = Object.defineProperty({}, "passive", {
            get: function() {
              i = !0;
            }
          });
          window.addEventListener("testPassiveEventSupport", E, a), window.removeEventListener("testPassiveEventSupport", E, a);
        } catch {
        }
        return i;
      })(), Kl = (function() {
        return !!document.createElement("canvas").getContext;
      })(), en = !!(document.createElementNS && $a("svg").createSVGRect), Us = !!en && (function() {
        var i = document.createElement("div");
        return i.innerHTML = "<svg/>", (i.firstChild && i.firstChild.namespaceURI) === "http://www.w3.org/2000/svg";
      })(), rr = !en && (function() {
        try {
          var i = document.createElement("div");
          i.innerHTML = '<v:shape adj="1"/>';
          var a = i.firstChild;
          return a.style.behavior = "url(#default#VML)", a && typeof a.adj == "object";
        } catch {
          return !1;
        }
      })(), sr = navigator.platform.indexOf("Mac") === 0, ur = navigator.platform.indexOf("Linux") === 0;
      function He(i) {
        return navigator.userAgent.toLowerCase().indexOf(i) >= 0;
      }
      var st = {
        ie: ua,
        ielt9: Vl,
        edge: el,
        webkit: ca,
        android: nr,
        android23: ar,
        androidStock: ks,
        opera: il,
        chrome: Xl,
        gecko: fa,
        safari: Ns,
        phantom: Ql,
        opera12: lr,
        win: Ds,
        ie3d: En,
        webkit3d: Te,
        gecko3d: zi,
        any3d: Be,
        mobile: ha,
        mobileWebkit: Bs,
        mobileWebkit3d: Zs,
        msPointer: da,
        pointer: ma,
        touch: tn,
        touchNative: pa,
        mobileOpera: nl,
        mobileGecko: _a,
        retina: Rs,
        passiveEvents: or,
        canvas: Kl,
        svg: en,
        vml: rr,
        inlineSvg: Us,
        mac: sr,
        linux: ur
      }, Jl = st.msPointer ? "MSPointerDown" : "pointerdown", Wl = st.msPointer ? "MSPointerMove" : "pointermove", Ei = st.msPointer ? "MSPointerUp" : "pointerup", fe = st.msPointer ? "MSPointerCancel" : "pointercancel", xe = {
        touchstart: Jl,
        touchmove: Wl,
        touchend: Ei,
        touchcancel: fe
      }, nn = {
        touchstart: wn,
        touchmove: Zi,
        touchend: Zi,
        touchcancel: Zi
      }, Bi = {}, cr = !1;
      function Hs(i, a, o) {
        return a === "touchstart" && Tn(), nn[a] ? (o = nn[a].bind(this, o), i.addEventListener(xe[a], o, !1), o) : (console.warn("wrong event specified:", a), E);
      }
      function fr(i, a, o) {
        if (!xe[a]) {
          console.warn("wrong event specified:", a);
          return;
        }
        i.removeEventListener(xe[a], o, !1);
      }
      function ga(i) {
        Bi[i.pointerId] = i;
      }
      function Il(i) {
        Bi[i.pointerId] && (Bi[i.pointerId] = i);
      }
      function an(i) {
        delete Bi[i.pointerId];
      }
      function Tn() {
        cr || (document.addEventListener(Jl, ga, !0), document.addEventListener(Wl, Il, !0), document.addEventListener(Ei, an, !0), document.addEventListener(fe, an, !0), cr = !0);
      }
      function Zi(i, a) {
        if (a.pointerType !== (a.MSPOINTER_TYPE_MOUSE || "mouse")) {
          a.touches = [];
          for (var o in Bi)
            a.touches.push(Bi[o]);
          a.changedTouches = [a], i(a);
        }
      }
      function wn(i, a) {
        a.MSPOINTER_TYPE_TOUCH && a.pointerType === a.MSPOINTER_TYPE_TOUCH && ne(a), Zi(i, a);
      }
      function he(i) {
        var a = {}, o, u;
        for (u in i)
          o = i[u], a[u] = o && o.bind ? o.bind(i) : o;
        return i = a, a.type = "dblclick", a.detail = 2, a.isTrusted = !1, a._simulated = !0, a;
      }
      var hr = 200;
      function dr(i, a) {
        i.addEventListener("dblclick", a);
        var o = 0, u;
        function c(d) {
          if (d.detail !== 1) {
            u = d.detail;
            return;
          }
          if (!(d.pointerType === "mouse" || d.sourceCapabilities && !d.sourceCapabilities.firesTouchEvents)) {
            var y = za(d);
            if (!(y.some(function(D) {
              return D instanceof HTMLLabelElement && D.attributes.for;
            }) && !y.some(function(D) {
              return D instanceof HTMLInputElement || D instanceof HTMLSelectElement;
            }))) {
              var C = Date.now();
              C - o <= hr ? (u++, u === 2 && a(he(d))) : u = 1, o = C;
            }
          }
        }
        return i.addEventListener("click", c), {
          dblclick: a,
          simDblclick: c
        };
      }
      function ln(i, a) {
        i.removeEventListener("dblclick", a.dblclick), i.removeEventListener("click", a.simDblclick);
      }
      var Ri = ba(
        ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]
      ), va = ba(
        ["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]
      ), Fl = va === "webkitTransition" || va === "OTransition" ? va + "End" : "transitionend";
      function $l(i) {
        return typeof i == "string" ? document.getElementById(i) : i;
      }
      function ya(i, a) {
        var o = i.style[a] || i.currentStyle && i.currentStyle[a];
        if ((!o || o === "auto") && document.defaultView) {
          var u = document.defaultView.getComputedStyle(i, null);
          o = u ? u[a] : null;
        }
        return o === "auto" ? null : o;
      }
      function xt(i, a, o) {
        var u = document.createElement(i);
        return u.className = a || "", o && o.appendChild(u), u;
      }
      function Yt(i) {
        var a = i.parentNode;
        a && a.removeChild(i);
      }
      function Ge(i) {
        for (; i.firstChild; )
          i.removeChild(i.firstChild);
      }
      function ve(i) {
        var a = i.parentNode;
        a && a.lastChild !== i && a.appendChild(i);
      }
      function on(i) {
        var a = i.parentNode;
        a && a.firstChild !== i && a.insertBefore(i, a.firstChild);
      }
      function to(i, a) {
        if (i.classList !== void 0)
          return i.classList.contains(a);
        var o = al(i);
        return o.length > 0 && new RegExp("(^|\\s)" + a + "(\\s|$)").test(o);
      }
      function _t(i, a) {
        if (i.classList !== void 0)
          for (var o = tt(a), u = 0, c = o.length; u < c; u++)
            i.classList.add(o[u]);
        else if (!to(i, a)) {
          var d = al(i);
          Mn(i, (d ? d + " " : "") + a);
        }
      }
      function te(i, a) {
        i.classList !== void 0 ? i.classList.remove(a) : Mn(i, H((" " + al(i) + " ").replace(" " + a + " ", " ")));
      }
      function Mn(i, a) {
        i.className.baseVal === void 0 ? i.className = a : i.className.baseVal = a;
      }
      function al(i) {
        return i.correspondingElement && (i = i.correspondingElement), i.className.baseVal === void 0 ? i.className : i.className.baseVal;
      }
      function Ft(i, a) {
        "opacity" in i.style ? i.style.opacity = a : "filter" in i.style && eo(i, a);
      }
      function eo(i, a) {
        var o = !1, u = "DXImageTransform.Microsoft.Alpha";
        try {
          o = i.filters.item(u);
        } catch {
          if (a === 1)
            return;
        }
        a = Math.round(a * 100), o ? (o.Enabled = a !== 100, o.Opacity = a) : i.style.filter += " progid:" + u + "(opacity=" + a + ")";
      }
      function ba(i) {
        for (var a = document.documentElement.style, o = 0; o < i.length; o++)
          if (i[o] in a)
            return i[o];
        return !1;
      }
      function Ti(i, a, o) {
        var u = a || new K(0, 0);
        i.style[Ri] = (st.ie3d ? "translate(" + u.x + "px," + u.y + "px)" : "translate3d(" + u.x + "px," + u.y + "px,0)") + (o ? " scale(" + o + ")" : "");
      }
      function Jt(i, a) {
        i._leaflet_pos = a, st.any3d ? Ti(i, a) : (i.style.left = a.x + "px", i.style.top = a.y + "px");
      }
      function Ui(i) {
        return i._leaflet_pos || new K(0, 0);
      }
      var Cn, fi, io;
      if ("onselectstart" in document)
        Cn = function() {
          dt(window, "selectstart", ne);
        }, fi = function() {
          Ut(window, "selectstart", ne);
        };
      else {
        var An = ba(
          ["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]
        );
        Cn = function() {
          if (An) {
            var i = document.documentElement.style;
            io = i[An], i[An] = "none";
          }
        }, fi = function() {
          An && (document.documentElement.style[An] = io, io = void 0);
        };
      }
      function ll() {
        dt(window, "dragstart", ne);
      }
      function xa() {
        Ut(window, "dragstart", ne);
      }
      var ol, no;
      function On(i) {
        for (; i.tabIndex === -1; )
          i = i.parentNode;
        i.style && (qe(), ol = i, no = i.style.outlineStyle, i.style.outlineStyle = "none", dt(window, "keydown", qe));
      }
      function qe() {
        ol && (ol.style.outlineStyle = no, ol = void 0, no = void 0, Ut(window, "keydown", qe));
      }
      function rl(i) {
        do
          i = i.parentNode;
        while ((!i.offsetWidth || !i.offsetHeight) && i !== document.body);
        return i;
      }
      function Sa(i) {
        var a = i.getBoundingClientRect();
        return {
          x: a.width / i.offsetWidth || 1,
          y: a.height / i.offsetHeight || 1,
          boundingClientRect: a
        };
      }
      var kn = {
        __proto__: null,
        TRANSFORM: Ri,
        TRANSITION: va,
        TRANSITION_END: Fl,
        get: $l,
        getStyle: ya,
        create: xt,
        remove: Yt,
        empty: Ge,
        toFront: ve,
        toBack: on,
        hasClass: to,
        addClass: _t,
        removeClass: te,
        setClass: Mn,
        getClass: al,
        setOpacity: Ft,
        testProp: ba,
        setTransform: Ti,
        setPosition: Jt,
        getPosition: Ui,
        get disableTextSelection() {
          return Cn;
        },
        get enableTextSelection() {
          return fi;
        },
        disableImageDrag: ll,
        enableImageDrag: xa,
        preventOutline: On,
        restoreOutline: qe,
        getSizedParentNode: rl,
        getScale: Sa
      };
      function dt(i, a, o, u) {
        if (a && typeof a == "object")
          for (var c in a)
            ei(i, c, a[c], o);
        else {
          a = tt(a);
          for (var d = 0, y = a.length; d < y; d++)
            ei(i, a[d], o, u);
        }
        return this;
      }
      var ti = "_leaflet_events";
      function Ut(i, a, o, u) {
        if (arguments.length === 1)
          ao(i), delete i[ti];
        else if (a && typeof a == "object")
          for (var c in a)
            La(i, c, a[c], o);
        else if (a = tt(a), arguments.length === 2)
          ao(i, function(C) {
            return Ht(a, C) !== -1;
          });
        else
          for (var d = 0, y = a.length; d < y; d++)
            La(i, a[d], o, u);
        return this;
      }
      function ao(i, a) {
        for (var o in i[ti]) {
          var u = o.split(/\d/)[0];
          (!a || a(u)) && La(i, u, null, null, o);
        }
      }
      var rn = {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        wheel: !("onwheel" in window) && "mousewheel"
      };
      function ei(i, a, o, u) {
        var c = a + _(o) + (u ? "_" + _(u) : "");
        if (i[ti] && i[ti][c])
          return this;
        var d = function(C) {
          return o.call(u || i, C || window.event);
        }, y = d;
        !st.touchNative && st.pointer && a.indexOf("touch") === 0 ? d = Hs(i, a, d) : st.touch && a === "dblclick" ? d = dr(i, d) : "addEventListener" in i ? a === "touchstart" || a === "touchmove" || a === "wheel" || a === "mousewheel" ? i.addEventListener(rn[a] || a, d, st.passiveEvents ? { passive: !1 } : !1) : a === "mouseenter" || a === "mouseleave" ? (d = function(C) {
          C = C || window.event, wi(i, C) && y(C);
        }, i.addEventListener(rn[a], d, !1)) : i.addEventListener(a, y, !1) : i.attachEvent("on" + a, d), i[ti] = i[ti] || {}, i[ti][c] = d;
      }
      function La(i, a, o, u, c) {
        c = c || a + _(o) + (u ? "_" + _(u) : "");
        var d = i[ti] && i[ti][c];
        if (!d)
          return this;
        !st.touchNative && st.pointer && a.indexOf("touch") === 0 ? fr(i, a, d) : st.touch && a === "dblclick" ? ln(i, d) : "removeEventListener" in i ? i.removeEventListener(rn[a] || a, d, !1) : i.detachEvent("on" + a, d), i[ti][c] = null;
      }
      function ii(i) {
        return i.stopPropagation ? i.stopPropagation() : i.originalEvent ? i.originalEvent._stopped = !0 : i.cancelBubble = !0, this;
      }
      function hi(i) {
        return ei(i, "wheel", ii), this;
      }
      function sn(i) {
        return dt(i, "mousedown touchstart dblclick contextmenu", ii), i._leaflet_disable_click = !0, this;
      }
      function ne(i) {
        return i.preventDefault ? i.preventDefault() : i.returnValue = !1, this;
      }
      function Hi(i) {
        return ne(i), ii(i), this;
      }
      function za(i) {
        if (i.composedPath)
          return i.composedPath();
        for (var a = [], o = i.target; o; )
          a.push(o), o = o.parentNode;
        return a;
      }
      function Ea(i, a) {
        if (!a)
          return new K(i.clientX, i.clientY);
        var o = Sa(a), u = o.boundingClientRect;
        return new K(
          // offset.left/top values are in page scale (like clientX/Y),
          // whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
          (i.clientX - u.left) / o.x - a.clientLeft,
          (i.clientY - u.top) / o.y - a.clientTop
        );
      }
      var mr = st.linux && st.chrome ? window.devicePixelRatio : st.mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
      function we(i) {
        return st.edge ? i.wheelDeltaY / 2 : (
          // Don't trust window-geometry-based delta
          i.deltaY && i.deltaMode === 0 ? -i.deltaY / mr : (
            // Pixels
            i.deltaY && i.deltaMode === 1 ? -i.deltaY * 20 : (
              // Lines
              i.deltaY && i.deltaMode === 2 ? -i.deltaY * 60 : (
                // Pages
                i.deltaX || i.deltaZ ? 0 : (
                  // Skip horizontal/depth wheel events
                  i.wheelDelta ? (i.wheelDeltaY || i.wheelDelta) / 2 : (
                    // Legacy IE pixels
                    i.detail && Math.abs(i.detail) < 32765 ? -i.detail * 20 : (
                      // Legacy Moz lines
                      i.detail ? i.detail / -32765 * 60 : (
                        // Legacy Moz pages
                        0
                      )
                    )
                  )
                )
              )
            )
          )
        );
      }
      function wi(i, a) {
        var o = a.relatedTarget;
        if (!o)
          return !0;
        try {
          for (; o && o !== i; )
            o = o.parentNode;
        } catch {
          return !1;
        }
        return o !== i;
      }
      var sl = {
        __proto__: null,
        on: dt,
        off: Ut,
        stopPropagation: ii,
        disableScrollPropagation: hi,
        disableClickPropagation: sn,
        preventDefault: ne,
        stop: Hi,
        getPropagationPath: za,
        getMousePosition: Ea,
        getWheelDelta: we,
        isExternalTarget: wi,
        addListener: dt,
        removeListener: Ut
      }, Nn = $.extend({
        // @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
        // Run an animation of a given element to a new position, optionally setting
        // duration in seconds (`0.25` by default) and easing linearity factor (3rd
        // argument of the [cubic bezier curve](https://cubic-bezier.com/#0,0,.5,1),
        // `0.5` by default).
        run: function(i, a, o, u) {
          this.stop(), this._el = i, this._inProgress = !0, this._duration = o || 0.25, this._easeOutPower = 1 / Math.max(u || 0.5, 0.2), this._startPos = Ui(i), this._offset = a.subtract(this._startPos), this._startTime = +/* @__PURE__ */ new Date(), this.fire("start"), this._animate();
        },
        // @method stop()
        // Stops the animation (if currently running).
        stop: function() {
          this._inProgress && (this._step(!0), this._complete());
        },
        _animate: function() {
          this._animId = Pt(this._animate, this), this._step();
        },
        _step: function(i) {
          var a = +/* @__PURE__ */ new Date() - this._startTime, o = this._duration * 1e3;
          a < o ? this._runFrame(this._easeOut(a / o), i) : (this._runFrame(1), this._complete());
        },
        _runFrame: function(i, a) {
          var o = this._startPos.add(this._offset.multiplyBy(i));
          a && o._round(), Jt(this._el, o), this.fire("step");
        },
        _complete: function() {
          Mt(this._animId), this._inProgress = !1, this.fire("end");
        },
        _easeOut: function(i) {
          return 1 - Math.pow(1 - i, this._easeOutPower);
        }
      }), Et = $.extend({
        options: {
          // @section Map State Options
          // @option crs: CRS = L.CRS.EPSG3857
          // The [Coordinate Reference System](#crs) to use. Don't change this if you're not
          // sure what it means.
          crs: Fa,
          // @option center: LatLng = undefined
          // Initial geographic center of the map
          center: void 0,
          // @option zoom: Number = undefined
          // Initial map zoom level
          zoom: void 0,
          // @option minZoom: Number = *
          // Minimum zoom level of the map.
          // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
          // the lowest of their `minZoom` options will be used instead.
          minZoom: void 0,
          // @option maxZoom: Number = *
          // Maximum zoom level of the map.
          // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
          // the highest of their `maxZoom` options will be used instead.
          maxZoom: void 0,
          // @option layers: Layer[] = []
          // Array of layers that will be added to the map initially
          layers: [],
          // @option maxBounds: LatLngBounds = null
          // When this option is set, the map restricts the view to the given
          // geographical bounds, bouncing the user back if the user tries to pan
          // outside the view. To set the restriction dynamically, use
          // [`setMaxBounds`](#map-setmaxbounds) method.
          maxBounds: void 0,
          // @option renderer: Renderer = *
          // The default method for drawing vector layers on the map. `L.SVG`
          // or `L.Canvas` by default depending on browser support.
          renderer: void 0,
          // @section Animation Options
          // @option zoomAnimation: Boolean = true
          // Whether the map zoom animation is enabled. By default it's enabled
          // in all browsers that support CSS3 Transitions except Android.
          zoomAnimation: !0,
          // @option zoomAnimationThreshold: Number = 4
          // Won't animate zoom if the zoom difference exceeds this value.
          zoomAnimationThreshold: 4,
          // @option fadeAnimation: Boolean = true
          // Whether the tile fade animation is enabled. By default it's enabled
          // in all browsers that support CSS3 Transitions except Android.
          fadeAnimation: !0,
          // @option markerZoomAnimation: Boolean = true
          // Whether markers animate their zoom with the zoom animation, if disabled
          // they will disappear for the length of the animation. By default it's
          // enabled in all browsers that support CSS3 Transitions except Android.
          markerZoomAnimation: !0,
          // @option transform3DLimit: Number = 2^23
          // Defines the maximum size of a CSS translation transform. The default
          // value should not be changed unless a web browser positions layers in
          // the wrong place after doing a large `panBy`.
          transform3DLimit: 8388608,
          // Precision limit of a 32-bit float
          // @section Interaction Options
          // @option zoomSnap: Number = 1
          // Forces the map's zoom level to always be a multiple of this, particularly
          // right after a [`fitBounds()`](#map-fitbounds) or a pinch-zoom.
          // By default, the zoom level snaps to the nearest integer; lower values
          // (e.g. `0.5` or `0.1`) allow for greater granularity. A value of `0`
          // means the zoom level will not be snapped after `fitBounds` or a pinch-zoom.
          zoomSnap: 1,
          // @option zoomDelta: Number = 1
          // Controls how much the map's zoom level will change after a
          // [`zoomIn()`](#map-zoomin), [`zoomOut()`](#map-zoomout), pressing `+`
          // or `-` on the keyboard, or using the [zoom controls](#control-zoom).
          // Values smaller than `1` (e.g. `0.5`) allow for greater granularity.
          zoomDelta: 1,
          // @option trackResize: Boolean = true
          // Whether the map automatically handles browser window resize to update itself.
          trackResize: !0
        },
        initialize: function(i, a) {
          a = Y(this, a), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(i), this._initLayout(), this._onResize = p(this._onResize, this), this._initEvents(), a.maxBounds && this.setMaxBounds(a.maxBounds), a.zoom !== void 0 && (this._zoom = this._limitZoom(a.zoom)), a.center && a.zoom !== void 0 && this.setView(F(a.center), a.zoom, { reset: !0 }), this.callInitHooks(), this._zoomAnimated = va && st.any3d && !st.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), dt(this._proxy, Fl, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
        },
        // @section Methods for modifying map state
        // @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
        // Sets the view of the map (geographical center and zoom) with the given
        // animation options.
        setView: function(i, a, o) {
          if (a = a === void 0 ? this._zoom : this._limitZoom(a), i = this._limitCenter(F(i), a, this.options.maxBounds), o = o || {}, this._stop(), this._loaded && !o.reset && o !== !0) {
            o.animate !== void 0 && (o.zoom = lt({ animate: o.animate }, o.zoom), o.pan = lt({ animate: o.animate, duration: o.duration }, o.pan));
            var u = this._zoom !== a ? this._tryAnimatedZoom && this._tryAnimatedZoom(i, a, o.zoom) : this._tryAnimatedPan(i, o.pan);
            if (u)
              return clearTimeout(this._sizeTimer), this;
          }
          return this._resetView(i, a, o.pan && o.pan.noMoveStart), this;
        },
        // @method setZoom(zoom: Number, options?: Zoom/pan options): this
        // Sets the zoom of the map.
        setZoom: function(i, a) {
          return this._loaded ? this.setView(this.getCenter(), i, { zoom: a }) : (this._zoom = i, this);
        },
        // @method zoomIn(delta?: Number, options?: Zoom options): this
        // Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
        zoomIn: function(i, a) {
          return i = i || (st.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + i, a);
        },
        // @method zoomOut(delta?: Number, options?: Zoom options): this
        // Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
        zoomOut: function(i, a) {
          return i = i || (st.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - i, a);
        },
        // @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
        // Zooms the map while keeping a specified geographical point on the map
        // stationary (e.g. used internally for scroll zoom and double-click zoom).
        // @alternative
        // @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
        // Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
        setZoomAround: function(i, a, o) {
          var u = this.getZoomScale(a), c = this.getSize().divideBy(2), d = i instanceof K ? i : this.latLngToContainerPoint(i), y = d.subtract(c).multiplyBy(1 - 1 / u), C = this.containerPointToLatLng(c.add(y));
          return this.setView(C, a, { zoom: o });
        },
        _getBoundsCenterZoom: function(i, a) {
          a = a || {}, i = i.getBounds ? i.getBounds() : z(i);
          var o = nt(a.paddingTopLeft || a.padding || [0, 0]), u = nt(a.paddingBottomRight || a.padding || [0, 0]), c = this.getBoundsZoom(i, !1, o.add(u));
          if (c = typeof a.maxZoom == "number" ? Math.min(a.maxZoom, c) : c, c === 1 / 0)
            return {
              center: i.getCenter(),
              zoom: c
            };
          var d = u.subtract(o).divideBy(2), y = this.project(i.getSouthWest(), c), C = this.project(i.getNorthEast(), c), D = this.unproject(y.add(C).divideBy(2).add(d), c);
          return {
            center: D,
            zoom: c
          };
        },
        // @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
        // Sets a map view that contains the given geographical bounds with the
        // maximum zoom level possible.
        fitBounds: function(i, a) {
          if (i = z(i), !i.isValid())
            throw new Error("Bounds are not valid.");
          var o = this._getBoundsCenterZoom(i, a);
          return this.setView(o.center, o.zoom, a);
        },
        // @method fitWorld(options?: fitBounds options): this
        // Sets a map view that mostly contains the whole world with the maximum
        // zoom level possible.
        fitWorld: function(i) {
          return this.fitBounds([[-90, -180], [90, 180]], i);
        },
        // @method panTo(latlng: LatLng, options?: Pan options): this
        // Pans the map to a given center.
        panTo: function(i, a) {
          return this.setView(i, this._zoom, { pan: a });
        },
        // @method panBy(offset: Point, options?: Pan options): this
        // Pans the map by a given number of pixels (animated).
        panBy: function(i, a) {
          if (i = nt(i).round(), a = a || {}, !i.x && !i.y)
            return this.fire("moveend");
          if (a.animate !== !0 && !this.getSize().contains(i))
            return this._resetView(this.unproject(this.project(this.getCenter()).add(i)), this.getZoom()), this;
          if (this._panAnim || (this._panAnim = new Nn(), this._panAnim.on({
            step: this._onPanTransitionStep,
            end: this._onPanTransitionEnd
          }, this)), a.noMoveStart || this.fire("movestart"), a.animate !== !1) {
            _t(this._mapPane, "leaflet-pan-anim");
            var o = this._getMapPanePos().subtract(i).round();
            this._panAnim.run(this._mapPane, o, a.duration || 0.25, a.easeLinearity);
          } else
            this._rawPanBy(i), this.fire("move").fire("moveend");
          return this;
        },
        // @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this
        // Sets the view of the map (geographical center and zoom) performing a smooth
        // pan-zoom animation.
        flyTo: function(i, a, o) {
          if (o = o || {}, o.animate === !1 || !st.any3d)
            return this.setView(i, a, o);
          this._stop();
          var u = this.project(this.getCenter()), c = this.project(i), d = this.getSize(), y = this._zoom;
          i = F(i), a = a === void 0 ? y : a;
          var C = Math.max(d.x, d.y), D = C * this.getZoomScale(y, a), V = c.distanceTo(u) || 1, et = 1.42, ut = et * et;
          function yt(ie) {
            var Oi = ie ? -1 : 1, hn = ie ? D : C, bo = D * D - C * C + Oi * ut * ut * V * V, qa = 2 * hn * ut * V, ja = bo / qa, Ki = Math.sqrt(ja * ja + 1) - ja, ki = Ki < 1e-9 ? -18 : Math.log(Ki);
            return ki;
          }
          function ye(ie) {
            return (Math.exp(ie) - Math.exp(-ie)) / 2;
          }
          function ae(ie) {
            return (Math.exp(ie) + Math.exp(-ie)) / 2;
          }
          function Re(ie) {
            return ye(ie) / ae(ie);
          }
          var kt = yt(0);
          function Nt(ie) {
            return C * (ae(kt) / ae(kt + et * ie));
          }
          function St(ie) {
            return C * (ae(kt) * Re(kt + et * ie) - ye(kt)) / ut;
          }
          function Xi(ie) {
            return 1 - Math.pow(1 - ie, 1.5);
          }
          var Ve = Date.now(), Sl = (yt(1) - kt) / et, Qi = o.duration ? 1e3 * o.duration : 1e3 * Sl * 0.8;
          function yo() {
            var ie = (Date.now() - Ve) / Qi, Oi = Xi(ie) * Sl;
            ie <= 1 ? (this._flyToFrame = Pt(yo, this), this._move(
              this.unproject(u.add(c.subtract(u).multiplyBy(St(Oi) / V)), y),
              this.getScaleZoom(C / Nt(Oi), y),
              { flyTo: !0 }
            )) : this._move(i, a)._moveEnd(!0);
          }
          return this._moveStart(!0, o.noMoveStart), yo.call(this), this;
        },
        // @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
        // Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
        // but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
        flyToBounds: function(i, a) {
          var o = this._getBoundsCenterZoom(i, a);
          return this.flyTo(o.center, o.zoom, a);
        },
        // @method setMaxBounds(bounds: LatLngBounds): this
        // Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
        setMaxBounds: function(i) {
          return i = z(i), this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds), i.isValid() ? (this.options.maxBounds = i, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this);
        },
        // @method setMinZoom(zoom: Number): this
        // Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).
        setMinZoom: function(i) {
          var a = this.options.minZoom;
          return this.options.minZoom = i, this._loaded && a !== i && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(i) : this;
        },
        // @method setMaxZoom(zoom: Number): this
        // Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).
        setMaxZoom: function(i) {
          var a = this.options.maxZoom;
          return this.options.maxZoom = i, this._loaded && a !== i && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(i) : this;
        },
        // @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this
        // Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.
        panInsideBounds: function(i, a) {
          this._enforcingBounds = !0;
          var o = this.getCenter(), u = this._limitCenter(o, this._zoom, z(i));
          return o.equals(u) || this.panTo(u, a), this._enforcingBounds = !1, this;
        },
        // @method panInside(latlng: LatLng, options?: padding options): this
        // Pans the map the minimum amount to make the `latlng` visible. Use
        // padding options to fit the display to more restricted bounds.
        // If `latlng` is already within the (optionally padded) display bounds,
        // the map will not be panned.
        panInside: function(i, a) {
          a = a || {};
          var o = nt(a.paddingTopLeft || a.padding || [0, 0]), u = nt(a.paddingBottomRight || a.padding || [0, 0]), c = this.project(this.getCenter()), d = this.project(i), y = this.getPixelBounds(), C = G([y.min.add(o), y.max.subtract(u)]), D = C.getSize();
          if (!C.contains(d)) {
            this._enforcingBounds = !0;
            var V = d.subtract(C.getCenter()), et = C.extend(d).getSize().subtract(D);
            c.x += V.x < 0 ? -et.x : et.x, c.y += V.y < 0 ? -et.y : et.y, this.panTo(this.unproject(c), a), this._enforcingBounds = !1;
          }
          return this;
        },
        // @method invalidateSize(options: Zoom/pan options): this
        // Checks if the map container size changed and updates the map if so —
        // call it after you've changed the map size dynamically, also animating
        // pan by default. If `options.pan` is `false`, panning will not occur.
        // If `options.debounceMoveend` is `true`, it will delay `moveend` event so
        // that it doesn't happen often even if the method is called many
        // times in a row.
        // @alternative
        // @method invalidateSize(animate: Boolean): this
        // Checks if the map container size changed and updates the map if so —
        // call it after you've changed the map size dynamically, also animating
        // pan by default.
        invalidateSize: function(i) {
          if (!this._loaded)
            return this;
          i = lt({
            animate: !1,
            pan: !0
          }, i === !0 ? { animate: !0 } : i);
          var a = this.getSize();
          this._sizeChanged = !0, this._lastCenter = null;
          var o = this.getSize(), u = a.divideBy(2).round(), c = o.divideBy(2).round(), d = u.subtract(c);
          return !d.x && !d.y ? this : (i.animate && i.pan ? this.panBy(d) : (i.pan && this._rawPanBy(d), this.fire("move"), i.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(p(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
            oldSize: a,
            newSize: o
          }));
        },
        // @section Methods for modifying map state
        // @method stop(): this
        // Stops the currently running `panTo` or `flyTo` animation, if any.
        stop: function() {
          return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop();
        },
        // @section Geolocation methods
        // @method locate(options?: Locate options): this
        // Tries to locate the user using the Geolocation API, firing a [`locationfound`](#map-locationfound)
        // event with location data on success or a [`locationerror`](#map-locationerror) event on failure,
        // and optionally sets the map view to the user's location with respect to
        // detection accuracy (or to the world view if geolocation failed).
        // Note that, if your page doesn't use HTTPS, this method will fail in
        // modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))
        // See `Locate options` for more details.
        locate: function(i) {
          if (i = this._locateOptions = lt({
            timeout: 1e4,
            watch: !1
            // setView: false
            // maxZoom: <Number>
            // maximumAge: 0
            // enableHighAccuracy: false
          }, i), !("geolocation" in navigator))
            return this._handleGeolocationError({
              code: 0,
              message: "Geolocation not supported."
            }), this;
          var a = p(this._handleGeolocationResponse, this), o = p(this._handleGeolocationError, this);
          return i.watch ? this._locationWatchId = navigator.geolocation.watchPosition(a, o, i) : navigator.geolocation.getCurrentPosition(a, o, i), this;
        },
        // @method stopLocate(): this
        // Stops watching location previously initiated by `map.locate({watch: true})`
        // and aborts resetting the map view if map.locate was called with
        // `{setView: true}`.
        stopLocate: function() {
          return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this;
        },
        _handleGeolocationError: function(i) {
          if (this._container._leaflet_id) {
            var a = i.code, o = i.message || (a === 1 ? "permission denied" : a === 2 ? "position unavailable" : "timeout");
            this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
              code: a,
              message: "Geolocation error: " + o + "."
            });
          }
        },
        _handleGeolocationResponse: function(i) {
          if (this._container._leaflet_id) {
            var a = i.coords.latitude, o = i.coords.longitude, u = new Q(a, o), c = u.toBounds(i.coords.accuracy * 2), d = this._locateOptions;
            if (d.setView) {
              var y = this.getBoundsZoom(c);
              this.setView(u, d.maxZoom ? Math.min(y, d.maxZoom) : y);
            }
            var C = {
              latlng: u,
              bounds: c,
              timestamp: i.timestamp
            };
            for (var D in i.coords)
              typeof i.coords[D] == "number" && (C[D] = i.coords[D]);
            this.fire("locationfound", C);
          }
        },
        // TODO Appropriate docs section?
        // @section Other Methods
        // @method addHandler(name: String, HandlerClass: Function): this
        // Adds a new `Handler` to the map, given its name and constructor function.
        addHandler: function(i, a) {
          if (!a)
            return this;
          var o = this[i] = new a(this);
          return this._handlers.push(o), this.options[i] && o.enable(), this;
        },
        // @method remove(): this
        // Destroys the map and clears all related event listeners.
        remove: function() {
          if (this._initEvents(!0), this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this._containerId !== this._container._leaflet_id)
            throw new Error("Map container is being reused by another instance");
          try {
            delete this._container._leaflet_id, delete this._containerId;
          } catch {
            this._container._leaflet_id = void 0, this._containerId = void 0;
          }
          this._locationWatchId !== void 0 && this.stopLocate(), this._stop(), Yt(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (Mt(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload");
          var i;
          for (i in this._layers)
            this._layers[i].remove();
          for (i in this._panes)
            Yt(this._panes[i]);
          return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this;
        },
        // @section Other Methods
        // @method createPane(name: String, container?: HTMLElement): HTMLElement
        // Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
        // then returns it. The pane is created as a child of `container`, or
        // as a child of the main map pane if not set.
        createPane: function(i, a) {
          var o = "leaflet-pane" + (i ? " leaflet-" + i.replace("Pane", "") + "-pane" : ""), u = xt("div", o, a || this._mapPane);
          return i && (this._panes[i] = u), u;
        },
        // @section Methods for Getting Map State
        // @method getCenter(): LatLng
        // Returns the geographical center of the map view
        getCenter: function() {
          return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter.clone() : this.layerPointToLatLng(this._getCenterLayerPoint());
        },
        // @method getZoom(): Number
        // Returns the current zoom level of the map view
        getZoom: function() {
          return this._zoom;
        },
        // @method getBounds(): LatLngBounds
        // Returns the geographical bounds visible in the current map view
        getBounds: function() {
          var i = this.getPixelBounds(), a = this.unproject(i.getBottomLeft()), o = this.unproject(i.getTopRight());
          return new J(a, o);
        },
        // @method getMinZoom(): Number
        // Returns the minimum zoom level of the map (if set in the `minZoom` option of the map or of any layers), or `0` by default.
        getMinZoom: function() {
          return this.options.minZoom === void 0 ? this._layersMinZoom || 0 : this.options.minZoom;
        },
        // @method getMaxZoom(): Number
        // Returns the maximum zoom level of the map (if set in the `maxZoom` option of the map or of any layers).
        getMaxZoom: function() {
          return this.options.maxZoom === void 0 ? this._layersMaxZoom === void 0 ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom;
        },
        // @method getBoundsZoom(bounds: LatLngBounds, inside?: Boolean, padding?: Point): Number
        // Returns the maximum zoom level on which the given bounds fit to the map
        // view in its entirety. If `inside` (optional) is set to `true`, the method
        // instead returns the minimum zoom level on which the map view fits into
        // the given bounds in its entirety.
        getBoundsZoom: function(i, a, o) {
          i = z(i), o = nt(o || [0, 0]);
          var u = this.getZoom() || 0, c = this.getMinZoom(), d = this.getMaxZoom(), y = i.getNorthWest(), C = i.getSouthEast(), D = this.getSize().subtract(o), V = G(this.project(C, u), this.project(y, u)).getSize(), et = st.any3d ? this.options.zoomSnap : 1, ut = D.x / V.x, yt = D.y / V.y, ye = a ? Math.max(ut, yt) : Math.min(ut, yt);
          return u = this.getScaleZoom(ye, u), et && (u = Math.round(u / (et / 100)) * (et / 100), u = a ? Math.ceil(u / et) * et : Math.floor(u / et) * et), Math.max(c, Math.min(d, u));
        },
        // @method getSize(): Point
        // Returns the current size of the map container (in pixels).
        getSize: function() {
          return (!this._size || this._sizeChanged) && (this._size = new K(
            this._container.clientWidth || 0,
            this._container.clientHeight || 0
          ), this._sizeChanged = !1), this._size.clone();
        },
        // @method getPixelBounds(): Bounds
        // Returns the bounds of the current map view in projected pixel
        // coordinates (sometimes useful in layer and overlay implementations).
        getPixelBounds: function(i, a) {
          var o = this._getTopLeftPoint(i, a);
          return new S(o, o.add(this.getSize()));
        },
        // TODO: Check semantics - isn't the pixel origin the 0,0 coord relative to
        // the map pane? "left point of the map layer" can be confusing, specially
        // since there can be negative offsets.
        // @method getPixelOrigin(): Point
        // Returns the projected pixel coordinates of the top left point of
        // the map layer (useful in custom layer and overlay implementations).
        getPixelOrigin: function() {
          return this._checkIfLoaded(), this._pixelOrigin;
        },
        // @method getPixelWorldBounds(zoom?: Number): Bounds
        // Returns the world's bounds in pixel coordinates for zoom level `zoom`.
        // If `zoom` is omitted, the map's current zoom level is used.
        getPixelWorldBounds: function(i) {
          return this.options.crs.getProjectedBounds(i === void 0 ? this.getZoom() : i);
        },
        // @section Other Methods
        // @method getPane(pane: String|HTMLElement): HTMLElement
        // Returns a [map pane](#map-pane), given its name or its HTML element (its identity).
        getPane: function(i) {
          return typeof i == "string" ? this._panes[i] : i;
        },
        // @method getPanes(): Object
        // Returns a plain object containing the names of all [panes](#map-pane) as keys and
        // the panes as values.
        getPanes: function() {
          return this._panes;
        },
        // @method getContainer: HTMLElement
        // Returns the HTML element that contains the map.
        getContainer: function() {
          return this._container;
        },
        // @section Conversion Methods
        // @method getZoomScale(toZoom: Number, fromZoom: Number): Number
        // Returns the scale factor to be applied to a map transition from zoom level
        // `fromZoom` to `toZoom`. Used internally to help with zoom animations.
        getZoomScale: function(i, a) {
          var o = this.options.crs;
          return a = a === void 0 ? this._zoom : a, o.scale(i) / o.scale(a);
        },
        // @method getScaleZoom(scale: Number, fromZoom: Number): Number
        // Returns the zoom level that the map would end up at, if it is at `fromZoom`
        // level and everything is scaled by a factor of `scale`. Inverse of
        // [`getZoomScale`](#map-getZoomScale).
        getScaleZoom: function(i, a) {
          var o = this.options.crs;
          a = a === void 0 ? this._zoom : a;
          var u = o.zoom(i * o.scale(a));
          return isNaN(u) ? 1 / 0 : u;
        },
        // @method project(latlng: LatLng, zoom: Number): Point
        // Projects a geographical coordinate `LatLng` according to the projection
        // of the map's CRS, then scales it according to `zoom` and the CRS's
        // `Transformation`. The result is pixel coordinate relative to
        // the CRS origin.
        project: function(i, a) {
          return a = a === void 0 ? this._zoom : a, this.options.crs.latLngToPoint(F(i), a);
        },
        // @method unproject(point: Point, zoom: Number): LatLng
        // Inverse of [`project`](#map-project).
        unproject: function(i, a) {
          return a = a === void 0 ? this._zoom : a, this.options.crs.pointToLatLng(nt(i), a);
        },
        // @method layerPointToLatLng(point: Point): LatLng
        // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
        // returns the corresponding geographical coordinate (for the current zoom level).
        layerPointToLatLng: function(i) {
          var a = nt(i).add(this.getPixelOrigin());
          return this.unproject(a);
        },
        // @method latLngToLayerPoint(latlng: LatLng): Point
        // Given a geographical coordinate, returns the corresponding pixel coordinate
        // relative to the [origin pixel](#map-getpixelorigin).
        latLngToLayerPoint: function(i) {
          var a = this.project(F(i))._round();
          return a._subtract(this.getPixelOrigin());
        },
        // @method wrapLatLng(latlng: LatLng): LatLng
        // Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
        // map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
        // CRS's bounds.
        // By default this means longitude is wrapped around the dateline so its
        // value is between -180 and +180 degrees.
        wrapLatLng: function(i) {
          return this.options.crs.wrapLatLng(F(i));
        },
        // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
        // Returns a `LatLngBounds` with the same size as the given one, ensuring that
        // its center is within the CRS's bounds.
        // By default this means the center longitude is wrapped around the dateline so its
        // value is between -180 and +180 degrees, and the majority of the bounds
        // overlaps the CRS's bounds.
        wrapLatLngBounds: function(i) {
          return this.options.crs.wrapLatLngBounds(z(i));
        },
        // @method distance(latlng1: LatLng, latlng2: LatLng): Number
        // Returns the distance between two geographical coordinates according to
        // the map's CRS. By default this measures distance in meters.
        distance: function(i, a) {
          return this.options.crs.distance(F(i), F(a));
        },
        // @method containerPointToLayerPoint(point: Point): Point
        // Given a pixel coordinate relative to the map container, returns the corresponding
        // pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
        containerPointToLayerPoint: function(i) {
          return nt(i).subtract(this._getMapPanePos());
        },
        // @method layerPointToContainerPoint(point: Point): Point
        // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
        // returns the corresponding pixel coordinate relative to the map container.
        layerPointToContainerPoint: function(i) {
          return nt(i).add(this._getMapPanePos());
        },
        // @method containerPointToLatLng(point: Point): LatLng
        // Given a pixel coordinate relative to the map container, returns
        // the corresponding geographical coordinate (for the current zoom level).
        containerPointToLatLng: function(i) {
          var a = this.containerPointToLayerPoint(nt(i));
          return this.layerPointToLatLng(a);
        },
        // @method latLngToContainerPoint(latlng: LatLng): Point
        // Given a geographical coordinate, returns the corresponding pixel coordinate
        // relative to the map container.
        latLngToContainerPoint: function(i) {
          return this.layerPointToContainerPoint(this.latLngToLayerPoint(F(i)));
        },
        // @method mouseEventToContainerPoint(ev: MouseEvent): Point
        // Given a MouseEvent object, returns the pixel coordinate relative to the
        // map container where the event took place.
        mouseEventToContainerPoint: function(i) {
          return Ea(i, this._container);
        },
        // @method mouseEventToLayerPoint(ev: MouseEvent): Point
        // Given a MouseEvent object, returns the pixel coordinate relative to
        // the [origin pixel](#map-getpixelorigin) where the event took place.
        mouseEventToLayerPoint: function(i) {
          return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(i));
        },
        // @method mouseEventToLatLng(ev: MouseEvent): LatLng
        // Given a MouseEvent object, returns geographical coordinate where the
        // event took place.
        mouseEventToLatLng: function(i) {
          return this.layerPointToLatLng(this.mouseEventToLayerPoint(i));
        },
        // map initialization methods
        _initContainer: function(i) {
          var a = this._container = $l(i);
          if (a) {
            if (a._leaflet_id)
              throw new Error("Map container is already initialized.");
          } else throw new Error("Map container not found.");
          dt(a, "scroll", this._onScroll, this), this._containerId = _(a);
        },
        _initLayout: function() {
          var i = this._container;
          this._fadeAnimated = this.options.fadeAnimation && st.any3d, _t(i, "leaflet-container" + (st.touch ? " leaflet-touch" : "") + (st.retina ? " leaflet-retina" : "") + (st.ielt9 ? " leaflet-oldie" : "") + (st.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
          var a = ya(i, "position");
          a !== "absolute" && a !== "relative" && a !== "fixed" && a !== "sticky" && (i.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
        },
        _initPanes: function() {
          var i = this._panes = {};
          this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), Jt(this._mapPane, new K(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (_t(i.markerPane, "leaflet-zoom-hide"), _t(i.shadowPane, "leaflet-zoom-hide"));
        },
        // private methods that modify map state
        // @section Map state change events
        _resetView: function(i, a, o) {
          Jt(this._mapPane, new K(0, 0));
          var u = !this._loaded;
          this._loaded = !0, a = this._limitZoom(a), this.fire("viewprereset");
          var c = this._zoom !== a;
          this._moveStart(c, o)._move(i, a)._moveEnd(c), this.fire("viewreset"), u && this.fire("load");
        },
        _moveStart: function(i, a) {
          return i && this.fire("zoomstart"), a || this.fire("movestart"), this;
        },
        _move: function(i, a, o, u) {
          a === void 0 && (a = this._zoom);
          var c = this._zoom !== a;
          return this._zoom = a, this._lastCenter = i, this._pixelOrigin = this._getNewPixelOrigin(i), u ? o && o.pinch && this.fire("zoom", o) : ((c || o && o.pinch) && this.fire("zoom", o), this.fire("move", o)), this;
        },
        _moveEnd: function(i) {
          return i && this.fire("zoomend"), this.fire("moveend");
        },
        _stop: function() {
          return Mt(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
        },
        _rawPanBy: function(i) {
          Jt(this._mapPane, this._getMapPanePos().subtract(i));
        },
        _getZoomSpan: function() {
          return this.getMaxZoom() - this.getMinZoom();
        },
        _panInsideMaxBounds: function() {
          this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
        },
        _checkIfLoaded: function() {
          if (!this._loaded)
            throw new Error("Set map center and zoom first.");
        },
        // DOM event handling
        // @section Interaction events
        _initEvents: function(i) {
          this._targets = {}, this._targets[_(this._container)] = this;
          var a = i ? Ut : dt;
          a(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && a(window, "resize", this._onResize, this), st.any3d && this.options.transform3DLimit && (i ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
        },
        _onResize: function() {
          Mt(this._resizeRequest), this._resizeRequest = Pt(
            function() {
              this.invalidateSize({ debounceMoveend: !0 });
            },
            this
          );
        },
        _onScroll: function() {
          this._container.scrollTop = 0, this._container.scrollLeft = 0;
        },
        _onMoveEnd: function() {
          var i = this._getMapPanePos();
          Math.max(Math.abs(i.x), Math.abs(i.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
        },
        _findEventTargets: function(i, a) {
          for (var o = [], u, c = a === "mouseout" || a === "mouseover", d = i.target || i.srcElement, y = !1; d; ) {
            if (u = this._targets[_(d)], u && (a === "click" || a === "preclick") && this._draggableMoved(u)) {
              y = !0;
              break;
            }
            if (u && u.listens(a, !0) && (c && !wi(d, i) || (o.push(u), c)) || d === this._container)
              break;
            d = d.parentNode;
          }
          return !o.length && !y && !c && this.listens(a, !0) && (o = [this]), o;
        },
        _isClickDisabled: function(i) {
          for (; i && i !== this._container; ) {
            if (i._leaflet_disable_click)
              return !0;
            i = i.parentNode;
          }
        },
        _handleDOMEvent: function(i) {
          var a = i.target || i.srcElement;
          if (!(!this._loaded || a._leaflet_disable_events || i.type === "click" && this._isClickDisabled(a))) {
            var o = i.type;
            o === "mousedown" && On(a), this._fireDOMEvent(i, o);
          }
        },
        _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
        _fireDOMEvent: function(i, a, o) {
          if (i.type === "click") {
            var u = lt({}, i);
            u.type = "preclick", this._fireDOMEvent(u, u.type, o);
          }
          var c = this._findEventTargets(i, a);
          if (o) {
            for (var d = [], y = 0; y < o.length; y++)
              o[y].listens(a, !0) && d.push(o[y]);
            c = d.concat(c);
          }
          if (c.length) {
            a === "contextmenu" && ne(i);
            var C = c[0], D = {
              originalEvent: i
            };
            if (i.type !== "keypress" && i.type !== "keydown" && i.type !== "keyup") {
              var V = C.getLatLng && (!C._radius || C._radius <= 10);
              D.containerPoint = V ? this.latLngToContainerPoint(C.getLatLng()) : this.mouseEventToContainerPoint(i), D.layerPoint = this.containerPointToLayerPoint(D.containerPoint), D.latlng = V ? C.getLatLng() : this.layerPointToLatLng(D.layerPoint);
            }
            for (y = 0; y < c.length; y++)
              if (c[y].fire(a, D, !0), D.originalEvent._stopped || c[y].options.bubblingMouseEvents === !1 && Ht(this._mouseEvents, a) !== -1)
                return;
          }
        },
        _draggableMoved: function(i) {
          return i = i.dragging && i.dragging.enabled() ? i : this, i.dragging && i.dragging.moved() || this.boxZoom && this.boxZoom.moved();
        },
        _clearHandlers: function() {
          for (var i = 0, a = this._handlers.length; i < a; i++)
            this._handlers[i].disable();
        },
        // @section Other Methods
        // @method whenReady(fn: Function, context?: Object): this
        // Runs the given function `fn` when the map gets initialized with
        // a view (center and zoom) and at least one layer, or immediately
        // if it's already initialized, optionally passing a function context.
        whenReady: function(i, a) {
          return this._loaded ? i.call(a || this, { target: this }) : this.on("load", i, a), this;
        },
        // private methods for getting map state
        _getMapPanePos: function() {
          return Ui(this._mapPane) || new K(0, 0);
        },
        _moved: function() {
          var i = this._getMapPanePos();
          return i && !i.equals([0, 0]);
        },
        _getTopLeftPoint: function(i, a) {
          var o = i && a !== void 0 ? this._getNewPixelOrigin(i, a) : this.getPixelOrigin();
          return o.subtract(this._getMapPanePos());
        },
        _getNewPixelOrigin: function(i, a) {
          var o = this.getSize()._divideBy(2);
          return this.project(i, a)._subtract(o)._add(this._getMapPanePos())._round();
        },
        _latLngToNewLayerPoint: function(i, a, o) {
          var u = this._getNewPixelOrigin(o, a);
          return this.project(i, a)._subtract(u);
        },
        _latLngBoundsToNewLayerBounds: function(i, a, o) {
          var u = this._getNewPixelOrigin(o, a);
          return G([
            this.project(i.getSouthWest(), a)._subtract(u),
            this.project(i.getNorthWest(), a)._subtract(u),
            this.project(i.getSouthEast(), a)._subtract(u),
            this.project(i.getNorthEast(), a)._subtract(u)
          ]);
        },
        // layer point of the current center
        _getCenterLayerPoint: function() {
          return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
        },
        // offset of the specified place to the current center in pixels
        _getCenterOffset: function(i) {
          return this.latLngToLayerPoint(i).subtract(this._getCenterLayerPoint());
        },
        // adjust center for view to get inside bounds
        _limitCenter: function(i, a, o) {
          if (!o)
            return i;
          var u = this.project(i, a), c = this.getSize().divideBy(2), d = new S(u.subtract(c), u.add(c)), y = this._getBoundsOffset(d, o, a);
          return Math.abs(y.x) <= 1 && Math.abs(y.y) <= 1 ? i : this.unproject(u.add(y), a);
        },
        // adjust offset for view to get inside bounds
        _limitOffset: function(i, a) {
          if (!a)
            return i;
          var o = this.getPixelBounds(), u = new S(o.min.add(i), o.max.add(i));
          return i.add(this._getBoundsOffset(u, a));
        },
        // returns offset needed for pxBounds to get inside maxBounds at a specified zoom
        _getBoundsOffset: function(i, a, o) {
          var u = G(
            this.project(a.getNorthEast(), o),
            this.project(a.getSouthWest(), o)
          ), c = u.min.subtract(i.min), d = u.max.subtract(i.max), y = this._rebound(c.x, -d.x), C = this._rebound(c.y, -d.y);
          return new K(y, C);
        },
        _rebound: function(i, a) {
          return i + a > 0 ? Math.round(i - a) / 2 : Math.max(0, Math.ceil(i)) - Math.max(0, Math.floor(a));
        },
        _limitZoom: function(i) {
          var a = this.getMinZoom(), o = this.getMaxZoom(), u = st.any3d ? this.options.zoomSnap : 1;
          return u && (i = Math.round(i / u) * u), Math.max(a, Math.min(o, i));
        },
        _onPanTransitionStep: function() {
          this.fire("move");
        },
        _onPanTransitionEnd: function() {
          te(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
        },
        _tryAnimatedPan: function(i, a) {
          var o = this._getCenterOffset(i)._trunc();
          return (a && a.animate) !== !0 && !this.getSize().contains(o) ? !1 : (this.panBy(o, a), !0);
        },
        _createAnimProxy: function() {
          var i = this._proxy = xt("div", "leaflet-proxy leaflet-zoom-animated");
          this._panes.mapPane.appendChild(i), this.on("zoomanim", function(a) {
            var o = Ri, u = this._proxy.style[o];
            Ti(this._proxy, this.project(a.center, a.zoom), this.getZoomScale(a.zoom, 1)), u === this._proxy.style[o] && this._animatingZoom && this._onZoomTransitionEnd();
          }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
        },
        _destroyAnimProxy: function() {
          Yt(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
        },
        _animMoveEnd: function() {
          var i = this.getCenter(), a = this.getZoom();
          Ti(this._proxy, this.project(i, a), this.getZoomScale(a, 1));
        },
        _catchTransitionEnd: function(i) {
          this._animatingZoom && i.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd();
        },
        _nothingToAnimate: function() {
          return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
        },
        _tryAnimatedZoom: function(i, a, o) {
          if (this._animatingZoom)
            return !0;
          if (o = o || {}, !this._zoomAnimated || o.animate === !1 || this._nothingToAnimate() || Math.abs(a - this._zoom) > this.options.zoomAnimationThreshold)
            return !1;
          var u = this.getZoomScale(a), c = this._getCenterOffset(i)._divideBy(1 - 1 / u);
          return o.animate !== !0 && !this.getSize().contains(c) ? !1 : (Pt(function() {
            this._moveStart(!0, o.noMoveStart || !1)._animateZoom(i, a, !0);
          }, this), !0);
        },
        _animateZoom: function(i, a, o, u) {
          this._mapPane && (o && (this._animatingZoom = !0, this._animateToCenter = i, this._animateToZoom = a, _t(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
            center: i,
            zoom: a,
            noUpdate: u
          }), this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom), this._move(this._animateToCenter, this._animateToZoom, void 0, !0), setTimeout(p(this._onZoomTransitionEnd, this), 250));
        },
        _onZoomTransitionEnd: function() {
          this._animatingZoom && (this._mapPane && te(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom, void 0, !0), this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(!0));
        }
      });
      function lo(i, a) {
        return new Et(i, a);
      }
      var Ze = Ot.extend({
        // @section
        // @aka Control Options
        options: {
          // @option position: String = 'topright'
          // The position of the control (one of the map corners). Possible values are `'topleft'`,
          // `'topright'`, `'bottomleft'` or `'bottomright'`
          position: "topright"
        },
        initialize: function(i) {
          Y(this, i);
        },
        /* @section
         * Classes extending L.Control will inherit the following methods:
         *
         * @method getPosition: string
         * Returns the position of the control.
         */
        getPosition: function() {
          return this.options.position;
        },
        // @method setPosition(position: string): this
        // Sets the position of the control.
        setPosition: function(i) {
          var a = this._map;
          return a && a.removeControl(this), this.options.position = i, a && a.addControl(this), this;
        },
        // @method getContainer: HTMLElement
        // Returns the HTMLElement that contains the control.
        getContainer: function() {
          return this._container;
        },
        // @method addTo(map: Map): this
        // Adds the control to the given map.
        addTo: function(i) {
          this.remove(), this._map = i;
          var a = this._container = this.onAdd(i), o = this.getPosition(), u = i._controlCorners[o];
          return _t(a, "leaflet-control"), o.indexOf("bottom") !== -1 ? u.insertBefore(a, u.firstChild) : u.appendChild(a), this._map.on("unload", this.remove, this), this;
        },
        // @method remove: this
        // Removes the control from the map it is currently active on.
        remove: function() {
          return this._map ? (Yt(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null, this) : this;
        },
        _refocusOnMap: function(i) {
          this._map && i && i.screenX > 0 && i.screenY > 0 && this._map.getContainer().focus();
        }
      }), Mi = function(i) {
        return new Ze(i);
      };
      Et.include({
        // @method addControl(control: Control): this
        // Adds the given control to the map
        addControl: function(i) {
          return i.addTo(this), this;
        },
        // @method removeControl(control: Control): this
        // Removes the given control from the map
        removeControl: function(i) {
          return i.remove(), this;
        },
        _initControlPos: function() {
          var i = this._controlCorners = {}, a = "leaflet-", o = this._controlContainer = xt("div", a + "control-container", this._container);
          function u(c, d) {
            var y = a + c + " " + a + d;
            i[c + d] = xt("div", y, o);
          }
          u("top", "left"), u("top", "right"), u("bottom", "left"), u("bottom", "right");
        },
        _clearControlPos: function() {
          for (var i in this._controlCorners)
            Yt(this._controlCorners[i]);
          Yt(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
        }
      });
      var Ta = Ze.extend({
        // @section
        // @aka Control.Layers options
        options: {
          // @option collapsed: Boolean = true
          // If `true`, the control will be collapsed into an icon and expanded on mouse hover, touch, or keyboard activation.
          collapsed: !0,
          position: "topright",
          // @option autoZIndex: Boolean = true
          // If `true`, the control will assign zIndexes in increasing order to all of its layers so that the order is preserved when switching them on/off.
          autoZIndex: !0,
          // @option hideSingleBase: Boolean = false
          // If `true`, the base layers in the control will be hidden when there is only one.
          hideSingleBase: !1,
          // @option sortLayers: Boolean = false
          // Whether to sort the layers. When `false`, layers will keep the order
          // in which they were added to the control.
          sortLayers: !1,
          // @option sortFunction: Function = *
          // A [compare function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
          // that will be used for sorting the layers, when `sortLayers` is `true`.
          // The function receives both the `L.Layer` instances and their names, as in
          // `sortFunction(layerA, layerB, nameA, nameB)`.
          // By default, it sorts layers alphabetically by their name.
          sortFunction: function(i, a, o, u) {
            return o < u ? -1 : u < o ? 1 : 0;
          }
        },
        initialize: function(i, a, o) {
          Y(this, o), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, this._preventClick = !1;
          for (var u in i)
            this._addLayer(i[u], u);
          for (u in a)
            this._addLayer(a[u], u, !0);
        },
        onAdd: function(i) {
          this._initLayout(), this._update(), this._map = i, i.on("zoomend", this._checkDisabledLayers, this);
          for (var a = 0; a < this._layers.length; a++)
            this._layers[a].layer.on("add remove", this._onLayerChange, this);
          return this._container;
        },
        addTo: function(i) {
          return Ze.prototype.addTo.call(this, i), this._expandIfNotCollapsed();
        },
        onRemove: function() {
          this._map.off("zoomend", this._checkDisabledLayers, this);
          for (var i = 0; i < this._layers.length; i++)
            this._layers[i].layer.off("add remove", this._onLayerChange, this);
        },
        // @method addBaseLayer(layer: Layer, name: String): this
        // Adds a base layer (radio button entry) with the given name to the control.
        addBaseLayer: function(i, a) {
          return this._addLayer(i, a), this._map ? this._update() : this;
        },
        // @method addOverlay(layer: Layer, name: String): this
        // Adds an overlay (checkbox entry) with the given name to the control.
        addOverlay: function(i, a) {
          return this._addLayer(i, a, !0), this._map ? this._update() : this;
        },
        // @method removeLayer(layer: Layer): this
        // Remove the given layer from the control.
        removeLayer: function(i) {
          i.off("add remove", this._onLayerChange, this);
          var a = this._getLayer(_(i));
          return a && this._layers.splice(this._layers.indexOf(a), 1), this._map ? this._update() : this;
        },
        // @method expand(): this
        // Expand the control container if collapsed.
        expand: function() {
          _t(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
          var i = this._map.getSize().y - (this._container.offsetTop + 50);
          return i < this._section.clientHeight ? (_t(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = i + "px") : te(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
        },
        // @method collapse(): this
        // Collapse the control container if expanded.
        collapse: function() {
          return te(this._container, "leaflet-control-layers-expanded"), this;
        },
        _initLayout: function() {
          var i = "leaflet-control-layers", a = this._container = xt("div", i), o = this.options.collapsed;
          a.setAttribute("aria-haspopup", !0), sn(a), hi(a);
          var u = this._section = xt("section", i + "-list");
          o && (this._map.on("click", this.collapse, this), dt(a, {
            mouseenter: this._expandSafely,
            mouseleave: this.collapse
          }, this));
          var c = this._layersLink = xt("a", i + "-toggle", a);
          c.href = "#", c.title = "Layers", c.setAttribute("role", "button"), dt(c, {
            keydown: function(d) {
              d.keyCode === 13 && this._expandSafely();
            },
            // Certain screen readers intercept the key event and instead send a click event
            click: function(d) {
              ne(d), this._expandSafely();
            }
          }, this), o || this.expand(), this._baseLayersList = xt("div", i + "-base", u), this._separator = xt("div", i + "-separator", u), this._overlaysList = xt("div", i + "-overlays", u), a.appendChild(u);
        },
        _getLayer: function(i) {
          for (var a = 0; a < this._layers.length; a++)
            if (this._layers[a] && _(this._layers[a].layer) === i)
              return this._layers[a];
        },
        _addLayer: function(i, a, o) {
          this._map && i.on("add remove", this._onLayerChange, this), this._layers.push({
            layer: i,
            name: a,
            overlay: o
          }), this.options.sortLayers && this._layers.sort(p(function(u, c) {
            return this.options.sortFunction(u.layer, c.layer, u.name, c.name);
          }, this)), this.options.autoZIndex && i.setZIndex && (this._lastZIndex++, i.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
        },
        _update: function() {
          if (!this._container)
            return this;
          Ge(this._baseLayersList), Ge(this._overlaysList), this._layerControlInputs = [];
          var i, a, o, u, c = 0;
          for (o = 0; o < this._layers.length; o++)
            u = this._layers[o], this._addItem(u), a = a || u.overlay, i = i || !u.overlay, c += u.overlay ? 0 : 1;
          return this.options.hideSingleBase && (i = i && c > 1, this._baseLayersList.style.display = i ? "" : "none"), this._separator.style.display = a && i ? "" : "none", this;
        },
        _onLayerChange: function(i) {
          this._handlingClick || this._update();
          var a = this._getLayer(_(i.target)), o = a.overlay ? i.type === "add" ? "overlayadd" : "overlayremove" : i.type === "add" ? "baselayerchange" : null;
          o && this._map.fire(o, a);
        },
        // IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see https://stackoverflow.com/a/119079)
        _createRadioElement: function(i, a) {
          var o = '<input type="radio" class="leaflet-control-layers-selector" name="' + i + '"' + (a ? ' checked="checked"' : "") + "/>", u = document.createElement("div");
          return u.innerHTML = o, u.firstChild;
        },
        _addItem: function(i) {
          var a = document.createElement("label"), o = this._map.hasLayer(i.layer), u;
          i.overlay ? (u = document.createElement("input"), u.type = "checkbox", u.className = "leaflet-control-layers-selector", u.defaultChecked = o) : u = this._createRadioElement("leaflet-base-layers_" + _(this), o), this._layerControlInputs.push(u), u.layerId = _(i.layer), dt(u, "click", this._onInputClick, this);
          var c = document.createElement("span");
          c.innerHTML = " " + i.name;
          var d = document.createElement("span");
          a.appendChild(d), d.appendChild(u), d.appendChild(c);
          var y = i.overlay ? this._overlaysList : this._baseLayersList;
          return y.appendChild(a), this._checkDisabledLayers(), a;
        },
        _onInputClick: function() {
          if (!this._preventClick) {
            var i = this._layerControlInputs, a, o, u = [], c = [];
            this._handlingClick = !0;
            for (var d = i.length - 1; d >= 0; d--)
              a = i[d], o = this._getLayer(a.layerId).layer, a.checked ? u.push(o) : a.checked || c.push(o);
            for (d = 0; d < c.length; d++)
              this._map.hasLayer(c[d]) && this._map.removeLayer(c[d]);
            for (d = 0; d < u.length; d++)
              this._map.hasLayer(u[d]) || this._map.addLayer(u[d]);
            this._handlingClick = !1, this._refocusOnMap();
          }
        },
        _checkDisabledLayers: function() {
          for (var i = this._layerControlInputs, a, o, u = this._map.getZoom(), c = i.length - 1; c >= 0; c--)
            a = i[c], o = this._getLayer(a.layerId).layer, a.disabled = o.options.minZoom !== void 0 && u < o.options.minZoom || o.options.maxZoom !== void 0 && u > o.options.maxZoom;
        },
        _expandIfNotCollapsed: function() {
          return this._map && !this.options.collapsed && this.expand(), this;
        },
        _expandSafely: function() {
          var i = this._section;
          this._preventClick = !0, dt(i, "click", ne), this.expand();
          var a = this;
          setTimeout(function() {
            Ut(i, "click", ne), a._preventClick = !1;
          });
        }
      }), pr = function(i, a, o) {
        return new Ta(i, a, o);
      }, oo = Ze.extend({
        // @section
        // @aka Control.Zoom options
        options: {
          position: "topleft",
          // @option zoomInText: String = '<span aria-hidden="true">+</span>'
          // The text set on the 'zoom in' button.
          zoomInText: '<span aria-hidden="true">+</span>',
          // @option zoomInTitle: String = 'Zoom in'
          // The title set on the 'zoom in' button.
          zoomInTitle: "Zoom in",
          // @option zoomOutText: String = '<span aria-hidden="true">&#x2212;</span>'
          // The text set on the 'zoom out' button.
          zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
          // @option zoomOutTitle: String = 'Zoom out'
          // The title set on the 'zoom out' button.
          zoomOutTitle: "Zoom out"
        },
        onAdd: function(i) {
          var a = "leaflet-control-zoom", o = xt("div", a + " leaflet-bar"), u = this.options;
          return this._zoomInButton = this._createButton(
            u.zoomInText,
            u.zoomInTitle,
            a + "-in",
            o,
            this._zoomIn
          ), this._zoomOutButton = this._createButton(
            u.zoomOutText,
            u.zoomOutTitle,
            a + "-out",
            o,
            this._zoomOut
          ), this._updateDisabled(), i.on("zoomend zoomlevelschange", this._updateDisabled, this), o;
        },
        onRemove: function(i) {
          i.off("zoomend zoomlevelschange", this._updateDisabled, this);
        },
        disable: function() {
          return this._disabled = !0, this._updateDisabled(), this;
        },
        enable: function() {
          return this._disabled = !1, this._updateDisabled(), this;
        },
        _zoomIn: function(i) {
          !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (i.shiftKey ? 3 : 1));
        },
        _zoomOut: function(i) {
          !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (i.shiftKey ? 3 : 1));
        },
        _createButton: function(i, a, o, u, c) {
          var d = xt("a", o, u);
          return d.innerHTML = i, d.href = "#", d.title = a, d.setAttribute("role", "button"), d.setAttribute("aria-label", a), sn(d), dt(d, "click", Hi), dt(d, "click", c, this), dt(d, "click", this._refocusOnMap, this), d;
        },
        _updateDisabled: function() {
          var i = this._map, a = "leaflet-disabled";
          te(this._zoomInButton, a), te(this._zoomOutButton, a), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), (this._disabled || i._zoom === i.getMinZoom()) && (_t(this._zoomOutButton, a), this._zoomOutButton.setAttribute("aria-disabled", "true")), (this._disabled || i._zoom === i.getMaxZoom()) && (_t(this._zoomInButton, a), this._zoomInButton.setAttribute("aria-disabled", "true"));
        }
      });
      Et.mergeOptions({
        zoomControl: !0
      }), Et.addInitHook(function() {
        this.options.zoomControl && (this.zoomControl = new oo(), this.addControl(this.zoomControl));
      });
      var Gs = function(i) {
        return new oo(i);
      }, _r = Ze.extend({
        // @section
        // @aka Control.Scale options
        options: {
          position: "bottomleft",
          // @option maxWidth: Number = 100
          // Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).
          maxWidth: 100,
          // @option metric: Boolean = True
          // Whether to show the metric scale line (m/km).
          metric: !0,
          // @option imperial: Boolean = True
          // Whether to show the imperial scale line (mi/ft).
          imperial: !0
          // @option updateWhenIdle: Boolean = false
          // If `true`, the control is updated on [`moveend`](#map-moveend), otherwise it's always up-to-date (updated on [`move`](#map-move)).
        },
        onAdd: function(i) {
          var a = "leaflet-control-scale", o = xt("div", a), u = this.options;
          return this._addScales(u, a + "-line", o), i.on(u.updateWhenIdle ? "moveend" : "move", this._update, this), i.whenReady(this._update, this), o;
        },
        onRemove: function(i) {
          i.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
        },
        _addScales: function(i, a, o) {
          i.metric && (this._mScale = xt("div", a, o)), i.imperial && (this._iScale = xt("div", a, o));
        },
        _update: function() {
          var i = this._map, a = i.getSize().y / 2, o = i.distance(
            i.containerPointToLatLng([0, a]),
            i.containerPointToLatLng([this.options.maxWidth, a])
          );
          this._updateScales(o);
        },
        _updateScales: function(i) {
          this.options.metric && i && this._updateMetric(i), this.options.imperial && i && this._updateImperial(i);
        },
        _updateMetric: function(i) {
          var a = this._getRoundNum(i), o = a < 1e3 ? a + " m" : a / 1e3 + " km";
          this._updateScale(this._mScale, o, a / i);
        },
        _updateImperial: function(i) {
          var a = i * 3.2808399, o, u, c;
          a > 5280 ? (o = a / 5280, u = this._getRoundNum(o), this._updateScale(this._iScale, u + " mi", u / o)) : (c = this._getRoundNum(a), this._updateScale(this._iScale, c + " ft", c / a));
        },
        _updateScale: function(i, a, o) {
          i.style.width = Math.round(this.options.maxWidth * o) + "px", i.innerHTML = a;
        },
        _getRoundNum: function(i) {
          var a = Math.pow(10, (Math.floor(i) + "").length - 1), o = i / a;
          return o = o >= 10 ? 10 : o >= 5 ? 5 : o >= 3 ? 3 : o >= 2 ? 2 : 1, a * o;
        }
      }), ro = function(i) {
        return new _r(i);
      }, qs = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>', so = Ze.extend({
        // @section
        // @aka Control.Attribution options
        options: {
          position: "bottomright",
          // @option prefix: String|false = 'Leaflet'
          // The HTML text shown before the attributions. Pass `false` to disable.
          prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (st.inlineSvg ? qs + " " : "") + "Leaflet</a>"
        },
        initialize: function(i) {
          Y(this, i), this._attributions = {};
        },
        onAdd: function(i) {
          i.attributionControl = this, this._container = xt("div", "leaflet-control-attribution"), sn(this._container);
          for (var a in i._layers)
            i._layers[a].getAttribution && this.addAttribution(i._layers[a].getAttribution());
          return this._update(), i.on("layeradd", this._addAttribution, this), this._container;
        },
        onRemove: function(i) {
          i.off("layeradd", this._addAttribution, this);
        },
        _addAttribution: function(i) {
          i.layer.getAttribution && (this.addAttribution(i.layer.getAttribution()), i.layer.once("remove", function() {
            this.removeAttribution(i.layer.getAttribution());
          }, this));
        },
        // @method setPrefix(prefix: String|false): this
        // The HTML text shown before the attributions. Pass `false` to disable.
        setPrefix: function(i) {
          return this.options.prefix = i, this._update(), this;
        },
        // @method addAttribution(text: String): this
        // Adds an attribution text (e.g. `'&copy; OpenStreetMap contributors'`).
        addAttribution: function(i) {
          return i ? (this._attributions[i] || (this._attributions[i] = 0), this._attributions[i]++, this._update(), this) : this;
        },
        // @method removeAttribution(text: String): this
        // Removes an attribution text.
        removeAttribution: function(i) {
          return i ? (this._attributions[i] && (this._attributions[i]--, this._update()), this) : this;
        },
        _update: function() {
          if (this._map) {
            var i = [];
            for (var a in this._attributions)
              this._attributions[a] && i.push(a);
            var o = [];
            this.options.prefix && o.push(this.options.prefix), i.length && o.push(i.join(", ")), this._container.innerHTML = o.join(' <span aria-hidden="true">|</span> ');
          }
        }
      });
      Et.mergeOptions({
        attributionControl: !0
      }), Et.addInitHook(function() {
        this.options.attributionControl && new so().addTo(this);
      });
      var js = function(i) {
        return new so(i);
      };
      Ze.Layers = Ta, Ze.Zoom = oo, Ze.Scale = _r, Ze.Attribution = so, Mi.layers = pr, Mi.zoom = Gs, Mi.scale = ro, Mi.attribution = js;
      var di = Ot.extend({
        initialize: function(i) {
          this._map = i;
        },
        // @method enable(): this
        // Enables the handler
        enable: function() {
          return this._enabled ? this : (this._enabled = !0, this.addHooks(), this);
        },
        // @method disable(): this
        // Disables the handler
        disable: function() {
          return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this;
        },
        // @method enabled(): Boolean
        // Returns `true` if the handler is enabled
        enabled: function() {
          return !!this._enabled;
        }
        // @section Extension methods
        // Classes inheriting from `Handler` must implement the two following methods:
        // @method addHooks()
        // Called when the handler is enabled, should add event hooks.
        // @method removeHooks()
        // Called when the handler is disabled, should remove the event hooks added previously.
      });
      di.addTo = function(i, a) {
        return i.addHandler(a, this), this;
      };
      var Ps = { Events: Z }, uo = st.touch ? "touchstart mousedown" : "mousedown", Gi = $.extend({
        options: {
          // @section
          // @aka Draggable options
          // @option clickTolerance: Number = 3
          // The max number of pixels a user can shift the mouse pointer during a click
          // for it to be considered a valid click (as opposed to a mouse drag).
          clickTolerance: 3
        },
        // @constructor L.Draggable(el: HTMLElement, dragHandle?: HTMLElement, preventOutline?: Boolean, options?: Draggable options)
        // Creates a `Draggable` object for moving `el` when you start dragging the `dragHandle` element (equals `el` itself by default).
        initialize: function(i, a, o, u) {
          Y(this, u), this._element = i, this._dragStartTarget = a || i, this._preventOutline = o;
        },
        // @method enable()
        // Enables the dragging ability
        enable: function() {
          this._enabled || (dt(this._dragStartTarget, uo, this._onDown, this), this._enabled = !0);
        },
        // @method disable()
        // Disables the dragging ability
        disable: function() {
          this._enabled && (Gi._dragging === this && this.finishDrag(!0), Ut(this._dragStartTarget, uo, this._onDown, this), this._enabled = !1, this._moved = !1);
        },
        _onDown: function(i) {
          if (this._enabled && (this._moved = !1, !to(this._element, "leaflet-zoom-anim"))) {
            if (i.touches && i.touches.length !== 1) {
              Gi._dragging === this && this.finishDrag();
              return;
            }
            if (!(Gi._dragging || i.shiftKey || i.which !== 1 && i.button !== 1 && !i.touches) && (Gi._dragging = this, this._preventOutline && On(this._element), ll(), Cn(), !this._moving)) {
              this.fire("down");
              var a = i.touches ? i.touches[0] : i, o = rl(this._element);
              this._startPoint = new K(a.clientX, a.clientY), this._startPos = Ui(this._element), this._parentScale = Sa(o);
              var u = i.type === "mousedown";
              dt(document, u ? "mousemove" : "touchmove", this._onMove, this), dt(document, u ? "mouseup" : "touchend touchcancel", this._onUp, this);
            }
          }
        },
        _onMove: function(i) {
          if (this._enabled) {
            if (i.touches && i.touches.length > 1) {
              this._moved = !0;
              return;
            }
            var a = i.touches && i.touches.length === 1 ? i.touches[0] : i, o = new K(a.clientX, a.clientY)._subtract(this._startPoint);
            !o.x && !o.y || Math.abs(o.x) + Math.abs(o.y) < this.options.clickTolerance || (o.x /= this._parentScale.x, o.y /= this._parentScale.y, ne(i), this._moved || (this.fire("dragstart"), this._moved = !0, _t(document.body, "leaflet-dragging"), this._lastTarget = i.target || i.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), _t(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(o), this._moving = !0, this._lastEvent = i, this._updatePosition());
          }
        },
        _updatePosition: function() {
          var i = { originalEvent: this._lastEvent };
          this.fire("predrag", i), Jt(this._element, this._newPos), this.fire("drag", i);
        },
        _onUp: function() {
          this._enabled && this.finishDrag();
        },
        finishDrag: function(i) {
          te(document.body, "leaflet-dragging"), this._lastTarget && (te(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), Ut(document, "mousemove touchmove", this._onMove, this), Ut(document, "mouseup touchend touchcancel", this._onUp, this), xa(), fi();
          var a = this._moved && this._moving;
          this._moving = !1, Gi._dragging = !1, a && this.fire("dragend", {
            noInertia: i,
            distance: this._newPos.distanceTo(this._startPos)
          });
        }
      });
      function gr(i, a, o) {
        var u, c = [1, 4, 2, 8], d, y, C, D, V, et, ut, yt;
        for (d = 0, et = i.length; d < et; d++)
          i[d]._code = un(i[d], a);
        for (C = 0; C < 4; C++) {
          for (ut = c[C], u = [], d = 0, et = i.length, y = et - 1; d < et; y = d++)
            D = i[d], V = i[y], D._code & ut ? V._code & ut || (yt = ul(V, D, ut, a, o), yt._code = un(yt, a), u.push(yt)) : (V._code & ut && (yt = ul(V, D, ut, a, o), yt._code = un(yt, a), u.push(yt)), u.push(D));
          i = u;
        }
        return i;
      }
      function vr(i, a) {
        var o, u, c, d, y, C, D, V, et;
        if (!i || i.length === 0)
          throw new Error("latlngs not passed");
        je(i) || (console.warn("latlngs are not flat! Only the first ring will be used"), i = i[0]);
        var ut = F([0, 0]), yt = z(i), ye = yt.getNorthWest().distanceTo(yt.getSouthWest()) * yt.getNorthEast().distanceTo(yt.getNorthWest());
        ye < 1700 && (ut = co(i));
        var ae = i.length, Re = [];
        for (o = 0; o < ae; o++) {
          var kt = F(i[o]);
          Re.push(a.project(F([kt.lat - ut.lat, kt.lng - ut.lng])));
        }
        for (C = D = V = 0, o = 0, u = ae - 1; o < ae; u = o++)
          c = Re[o], d = Re[u], y = c.y * d.x - d.y * c.x, D += (c.x + d.x) * y, V += (c.y + d.y) * y, C += y * 3;
        C === 0 ? et = Re[0] : et = [D / C, V / C];
        var Nt = a.unproject(nt(et));
        return F([Nt.lat + ut.lat, Nt.lng + ut.lng]);
      }
      function co(i) {
        for (var a = 0, o = 0, u = 0, c = 0; c < i.length; c++) {
          var d = F(i[c]);
          a += d.lat, o += d.lng, u++;
        }
        return F([a / u, o / u]);
      }
      var fo = {
        __proto__: null,
        clipPolygon: gr,
        polygonCenter: vr,
        centroid: co
      };
      function yr(i, a) {
        if (!a || !i.length)
          return i.slice();
        var o = a * a;
        return i = Vs(i, o), i = xr(i, o), i;
      }
      function br(i, a, o) {
        return Math.sqrt(wa(i, a, o, !0));
      }
      function Ys(i, a, o) {
        return wa(i, a, o);
      }
      function xr(i, a) {
        var o = i.length, u = typeof Uint8Array < "u" ? Uint8Array : Array, c = new u(o);
        c[0] = c[o - 1] = 1, ho(i, c, a, 0, o - 1);
        var d, y = [];
        for (d = 0; d < o; d++)
          c[d] && y.push(i[d]);
        return y;
      }
      function ho(i, a, o, u, c) {
        var d = 0, y, C, D;
        for (C = u + 1; C <= c - 1; C++)
          D = wa(i[C], i[u], i[c], !0), D > d && (y = C, d = D);
        d > o && (a[y] = 1, ho(i, a, o, u, y), ho(i, a, o, y, c));
      }
      function Vs(i, a) {
        for (var o = [i[0]], u = 1, c = 0, d = i.length; u < d; u++)
          Xs(i[u], i[c]) > a && (o.push(i[u]), c = u);
        return c < d - 1 && o.push(i[d - 1]), o;
      }
      var Sr;
      function Lr(i, a, o, u, c) {
        var d = u ? Sr : un(i, o), y = un(a, o), C, D, V;
        for (Sr = y; ; ) {
          if (!(d | y))
            return [i, a];
          if (d & y)
            return !1;
          C = d || y, D = ul(i, a, C, o, c), V = un(D, o), C === d ? (i = D, d = V) : (a = D, y = V);
        }
      }
      function ul(i, a, o, u, c) {
        var d = a.x - i.x, y = a.y - i.y, C = u.min, D = u.max, V, et;
        return o & 8 ? (V = i.x + d * (D.y - i.y) / y, et = D.y) : o & 4 ? (V = i.x + d * (C.y - i.y) / y, et = C.y) : o & 2 ? (V = D.x, et = i.y + y * (D.x - i.x) / d) : o & 1 && (V = C.x, et = i.y + y * (C.x - i.x) / d), new K(V, et, c);
      }
      function un(i, a) {
        var o = 0;
        return i.x < a.min.x ? o |= 1 : i.x > a.max.x && (o |= 2), i.y < a.min.y ? o |= 4 : i.y > a.max.y && (o |= 8), o;
      }
      function Xs(i, a) {
        var o = a.x - i.x, u = a.y - i.y;
        return o * o + u * u;
      }
      function wa(i, a, o, u) {
        var c = a.x, d = a.y, y = o.x - c, C = o.y - d, D = y * y + C * C, V;
        return D > 0 && (V = ((i.x - c) * y + (i.y - d) * C) / D, V > 1 ? (c = o.x, d = o.y) : V > 0 && (c += y * V, d += C * V)), y = i.x - c, C = i.y - d, u ? y * y + C * C : new K(c, d);
      }
      function je(i) {
        return !at(i[0]) || typeof i[0][0] != "object" && typeof i[0][0] < "u";
      }
      function cl(i) {
        return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), je(i);
      }
      function Dn(i, a) {
        var o, u, c, d, y, C, D, V;
        if (!i || i.length === 0)
          throw new Error("latlngs not passed");
        je(i) || (console.warn("latlngs are not flat! Only the first ring will be used"), i = i[0]);
        var et = F([0, 0]), ut = z(i), yt = ut.getNorthWest().distanceTo(ut.getSouthWest()) * ut.getNorthEast().distanceTo(ut.getNorthWest());
        yt < 1700 && (et = co(i));
        var ye = i.length, ae = [];
        for (o = 0; o < ye; o++) {
          var Re = F(i[o]);
          ae.push(a.project(F([Re.lat - et.lat, Re.lng - et.lng])));
        }
        for (o = 0, u = 0; o < ye - 1; o++)
          u += ae[o].distanceTo(ae[o + 1]) / 2;
        if (u === 0)
          V = ae[0];
        else
          for (o = 0, d = 0; o < ye - 1; o++)
            if (y = ae[o], C = ae[o + 1], c = y.distanceTo(C), d += c, d > u) {
              D = (d - u) / c, V = [
                C.x - D * (C.x - y.x),
                C.y - D * (C.y - y.y)
              ];
              break;
            }
        var kt = a.unproject(nt(V));
        return F([kt.lat + et.lat, kt.lng + et.lng]);
      }
      var Qs = {
        __proto__: null,
        simplify: yr,
        pointToSegmentDistance: br,
        closestPointOnSegment: Ys,
        clipSegment: Lr,
        _getEdgeIntersection: ul,
        _getBitCode: un,
        _sqClosestPointOnSegment: wa,
        isFlat: je,
        _flat: cl,
        polylineCenter: Dn
      }, fl = {
        project: function(i) {
          return new K(i.lng, i.lat);
        },
        unproject: function(i) {
          return new Q(i.y, i.x);
        },
        bounds: new S([-180, -90], [180, 90])
      }, hl = {
        R: 6378137,
        R_MINOR: 6356752314245179e-9,
        bounds: new S([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]),
        project: function(i) {
          var a = Math.PI / 180, o = this.R, u = i.lat * a, c = this.R_MINOR / o, d = Math.sqrt(1 - c * c), y = d * Math.sin(u), C = Math.tan(Math.PI / 4 - u / 2) / Math.pow((1 - y) / (1 + y), d / 2);
          return u = -o * Math.log(Math.max(C, 1e-10)), new K(i.lng * a * o, u);
        },
        unproject: function(i) {
          for (var a = 180 / Math.PI, o = this.R, u = this.R_MINOR / o, c = Math.sqrt(1 - u * u), d = Math.exp(-i.y / o), y = Math.PI / 2 - 2 * Math.atan(d), C = 0, D = 0.1, V; C < 15 && Math.abs(D) > 1e-7; C++)
            V = c * Math.sin(y), V = Math.pow((1 - V) / (1 + V), c / 2), D = Math.PI / 2 - 2 * Math.atan(d * V) - y, y += D;
          return new Q(y * a, i.x * a / o);
        }
      }, zr = {
        __proto__: null,
        LonLat: fl,
        Mercator: hl,
        SphericalMercator: ui
      }, Er = lt({}, Zt, {
        code: "EPSG:3395",
        projection: hl,
        transformation: (function() {
          var i = 0.5 / (Math.PI * hl.R);
          return ci(i, 0.5, -i, 0.5);
        })()
      }), mo = lt({}, Zt, {
        code: "EPSG:4326",
        projection: fl,
        transformation: ci(1 / 180, 1, -1 / 180, 0.5)
      }), Bn = lt({}, mt, {
        projection: fl,
        transformation: ci(1, 0, -1, 0),
        scale: function(i) {
          return Math.pow(2, i);
        },
        zoom: function(i) {
          return Math.log(i) / Math.LN2;
        },
        distance: function(i, a) {
          var o = a.lng - i.lng, u = a.lat - i.lat;
          return Math.sqrt(o * o + u * u);
        },
        infinite: !0
      });
      mt.Earth = Zt, mt.EPSG3395 = Er, mt.EPSG3857 = Fa, mt.EPSG900913 = $i, mt.EPSG4326 = mo, mt.Simple = Bn;
      var ni = $.extend({
        // Classes extending `L.Layer` will inherit the following options:
        options: {
          // @option pane: String = 'overlayPane'
          // By default the layer will be added to the map's [overlay pane](#map-overlaypane). Overriding this option will cause the layer to be placed on another pane by default.
          pane: "overlayPane",
          // @option attribution: String = null
          // String to be shown in the attribution control, e.g. "© OpenStreetMap contributors". It describes the layer data and is often a legal obligation towards copyright holders and tile providers.
          attribution: null,
          bubblingMouseEvents: !0
        },
        /* @section
         * Classes extending `L.Layer` will inherit the following methods:
         *
         * @method addTo(map: Map|LayerGroup): this
         * Adds the layer to the given map or layer group.
         */
        addTo: function(i) {
          return i.addLayer(this), this;
        },
        // @method remove: this
        // Removes the layer from the map it is currently active on.
        remove: function() {
          return this.removeFrom(this._map || this._mapToAdd);
        },
        // @method removeFrom(map: Map): this
        // Removes the layer from the given map
        //
        // @alternative
        // @method removeFrom(group: LayerGroup): this
        // Removes the layer from the given `LayerGroup`
        removeFrom: function(i) {
          return i && i.removeLayer(this), this;
        },
        // @method getPane(name? : String): HTMLElement
        // Returns the `HTMLElement` representing the named pane on the map. If `name` is omitted, returns the pane for this layer.
        getPane: function(i) {
          return this._map.getPane(i ? this.options[i] || i : this.options.pane);
        },
        addInteractiveTarget: function(i) {
          return this._map._targets[_(i)] = this, this;
        },
        removeInteractiveTarget: function(i) {
          return delete this._map._targets[_(i)], this;
        },
        // @method getAttribution: String
        // Used by the `attribution control`, returns the [attribution option](#gridlayer-attribution).
        getAttribution: function() {
          return this.options.attribution;
        },
        _layerAdd: function(i) {
          var a = i.target;
          if (a.hasLayer(this)) {
            if (this._map = a, this._zoomAnimated = a._zoomAnimated, this.getEvents) {
              var o = this.getEvents();
              a.on(o, this), this.once("remove", function() {
                a.off(o, this);
              }, this);
            }
            this.onAdd(a), this.fire("add"), a.fire("layeradd", { layer: this });
          }
        }
      });
      Et.include({
        // @method addLayer(layer: Layer): this
        // Adds the given layer to the map
        addLayer: function(i) {
          if (!i._layerAdd)
            throw new Error("The provided object is not a Layer.");
          var a = _(i);
          return this._layers[a] ? this : (this._layers[a] = i, i._mapToAdd = this, i.beforeAdd && i.beforeAdd(this), this.whenReady(i._layerAdd, i), this);
        },
        // @method removeLayer(layer: Layer): this
        // Removes the given layer from the map.
        removeLayer: function(i) {
          var a = _(i);
          return this._layers[a] ? (this._loaded && i.onRemove(this), delete this._layers[a], this._loaded && (this.fire("layerremove", { layer: i }), i.fire("remove")), i._map = i._mapToAdd = null, this) : this;
        },
        // @method hasLayer(layer: Layer): Boolean
        // Returns `true` if the given layer is currently added to the map
        hasLayer: function(i) {
          return _(i) in this._layers;
        },
        /* @method eachLayer(fn: Function, context?: Object): this
         * Iterates over the layers of the map, optionally specifying context of the iterator function.
         * ```
         * map.eachLayer(function(layer){
         *     layer.bindPopup('Hello');
         * });
         * ```
         */
        eachLayer: function(i, a) {
          for (var o in this._layers)
            i.call(a, this._layers[o]);
          return this;
        },
        _addLayers: function(i) {
          i = i ? at(i) ? i : [i] : [];
          for (var a = 0, o = i.length; a < o; a++)
            this.addLayer(i[a]);
        },
        _addZoomLimit: function(i) {
          (!isNaN(i.options.maxZoom) || !isNaN(i.options.minZoom)) && (this._zoomBoundLayers[_(i)] = i, this._updateZoomLevels());
        },
        _removeZoomLimit: function(i) {
          var a = _(i);
          this._zoomBoundLayers[a] && (delete this._zoomBoundLayers[a], this._updateZoomLevels());
        },
        _updateZoomLevels: function() {
          var i = 1 / 0, a = -1 / 0, o = this._getZoomSpan();
          for (var u in this._zoomBoundLayers) {
            var c = this._zoomBoundLayers[u].options;
            i = c.minZoom === void 0 ? i : Math.min(i, c.minZoom), a = c.maxZoom === void 0 ? a : Math.max(a, c.maxZoom);
          }
          this._layersMaxZoom = a === -1 / 0 ? void 0 : a, this._layersMinZoom = i === 1 / 0 ? void 0 : i, o !== this._getZoomSpan() && this.fire("zoomlevelschange"), this.options.maxZoom === void 0 && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), this.options.minZoom === void 0 && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
        }
      });
      var Zn = ni.extend({
        initialize: function(i, a) {
          Y(this, a), this._layers = {};
          var o, u;
          if (i)
            for (o = 0, u = i.length; o < u; o++)
              this.addLayer(i[o]);
        },
        // @method addLayer(layer: Layer): this
        // Adds the given layer to the group.
        addLayer: function(i) {
          var a = this.getLayerId(i);
          return this._layers[a] = i, this._map && this._map.addLayer(i), this;
        },
        // @method removeLayer(layer: Layer): this
        // Removes the given layer from the group.
        // @alternative
        // @method removeLayer(id: Number): this
        // Removes the layer with the given internal ID from the group.
        removeLayer: function(i) {
          var a = i in this._layers ? i : this.getLayerId(i);
          return this._map && this._layers[a] && this._map.removeLayer(this._layers[a]), delete this._layers[a], this;
        },
        // @method hasLayer(layer: Layer): Boolean
        // Returns `true` if the given layer is currently added to the group.
        // @alternative
        // @method hasLayer(id: Number): Boolean
        // Returns `true` if the given internal ID is currently added to the group.
        hasLayer: function(i) {
          var a = typeof i == "number" ? i : this.getLayerId(i);
          return a in this._layers;
        },
        // @method clearLayers(): this
        // Removes all the layers from the group.
        clearLayers: function() {
          return this.eachLayer(this.removeLayer, this);
        },
        // @method invoke(methodName: String, …): this
        // Calls `methodName` on every layer contained in this group, passing any
        // additional parameters. Has no effect if the layers contained do not
        // implement `methodName`.
        invoke: function(i) {
          var a = Array.prototype.slice.call(arguments, 1), o, u;
          for (o in this._layers)
            u = this._layers[o], u[i] && u[i].apply(u, a);
          return this;
        },
        onAdd: function(i) {
          this.eachLayer(i.addLayer, i);
        },
        onRemove: function(i) {
          this.eachLayer(i.removeLayer, i);
        },
        // @method eachLayer(fn: Function, context?: Object): this
        // Iterates over the layers of the group, optionally specifying context of the iterator function.
        // ```js
        // group.eachLayer(function (layer) {
        // 	layer.bindPopup('Hello');
        // });
        // ```
        eachLayer: function(i, a) {
          for (var o in this._layers)
            i.call(a, this._layers[o]);
          return this;
        },
        // @method getLayer(id: Number): Layer
        // Returns the layer with the given internal ID.
        getLayer: function(i) {
          return this._layers[i];
        },
        // @method getLayers(): Layer[]
        // Returns an array of all the layers added to the group.
        getLayers: function() {
          var i = [];
          return this.eachLayer(i.push, i), i;
        },
        // @method setZIndex(zIndex: Number): this
        // Calls `setZIndex` on every layer contained in this group, passing the z-index.
        setZIndex: function(i) {
          return this.invoke("setZIndex", i);
        },
        // @method getLayerId(layer: Layer): Number
        // Returns the internal ID for a layer
        getLayerId: function(i) {
          return _(i);
        }
      }), Ks = function(i, a) {
        return new Zn(i, a);
      }, mi = Zn.extend({
        addLayer: function(i) {
          return this.hasLayer(i) ? this : (i.addEventParent(this), Zn.prototype.addLayer.call(this, i), this.fire("layeradd", { layer: i }));
        },
        removeLayer: function(i) {
          return this.hasLayer(i) ? (i in this._layers && (i = this._layers[i]), i.removeEventParent(this), Zn.prototype.removeLayer.call(this, i), this.fire("layerremove", { layer: i })) : this;
        },
        // @method setStyle(style: Path options): this
        // Sets the given path options to each layer of the group that has a `setStyle` method.
        setStyle: function(i) {
          return this.invoke("setStyle", i);
        },
        // @method bringToFront(): this
        // Brings the layer group to the top of all other layers
        bringToFront: function() {
          return this.invoke("bringToFront");
        },
        // @method bringToBack(): this
        // Brings the layer group to the back of all other layers
        bringToBack: function() {
          return this.invoke("bringToBack");
        },
        // @method getBounds(): LatLngBounds
        // Returns the LatLngBounds of the Feature Group (created from bounds and coordinates of its children).
        getBounds: function() {
          var i = new J();
          for (var a in this._layers) {
            var o = this._layers[a];
            i.extend(o.getBounds ? o.getBounds() : o.getLatLng());
          }
          return i;
        }
      }), Tr = function(i, a) {
        return new mi(i, a);
      }, pi = Ot.extend({
        /* @section
         * @aka Icon options
         *
         * @option iconUrl: String = null
         * **(required)** The URL to the icon image (absolute or relative to your script path).
         *
         * @option iconRetinaUrl: String = null
         * The URL to a retina sized version of the icon image (absolute or relative to your
         * script path). Used for Retina screen devices.
         *
         * @option iconSize: Point = null
         * Size of the icon image in pixels.
         *
         * @option iconAnchor: Point = null
         * The coordinates of the "tip" of the icon (relative to its top left corner). The icon
         * will be aligned so that this point is at the marker's geographical location. Centered
         * by default if size is specified, also can be set in CSS with negative margins.
         *
         * @option popupAnchor: Point = [0, 0]
         * The coordinates of the point from which popups will "open", relative to the icon anchor.
         *
         * @option tooltipAnchor: Point = [0, 0]
         * The coordinates of the point from which tooltips will "open", relative to the icon anchor.
         *
         * @option shadowUrl: String = null
         * The URL to the icon shadow image. If not specified, no shadow image will be created.
         *
         * @option shadowRetinaUrl: String = null
         *
         * @option shadowSize: Point = null
         * Size of the shadow image in pixels.
         *
         * @option shadowAnchor: Point = null
         * The coordinates of the "tip" of the shadow (relative to its top left corner) (the same
         * as iconAnchor if not specified).
         *
         * @option className: String = ''
         * A custom class name to assign to both icon and shadow images. Empty by default.
         */
        options: {
          popupAnchor: [0, 0],
          tooltipAnchor: [0, 0],
          // @option crossOrigin: Boolean|String = false
          // Whether the crossOrigin attribute will be added to the tiles.
          // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
          // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
          crossOrigin: !1
        },
        initialize: function(i) {
          Y(this, i);
        },
        // @method createIcon(oldIcon?: HTMLElement): HTMLElement
        // Called internally when the icon has to be shown, returns a `<img>` HTML element
        // styled according to the options.
        createIcon: function(i) {
          return this._createIcon("icon", i);
        },
        // @method createShadow(oldIcon?: HTMLElement): HTMLElement
        // As `createIcon`, but for the shadow beneath it.
        createShadow: function(i) {
          return this._createIcon("shadow", i);
        },
        _createIcon: function(i, a) {
          var o = this._getIconUrl(i);
          if (!o) {
            if (i === "icon")
              throw new Error("iconUrl not set in Icon options (see the docs).");
            return null;
          }
          var u = this._createImg(o, a && a.tagName === "IMG" ? a : null);
          return this._setIconStyles(u, i), (this.options.crossOrigin || this.options.crossOrigin === "") && (u.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), u;
        },
        _setIconStyles: function(i, a) {
          var o = this.options, u = o[a + "Size"];
          typeof u == "number" && (u = [u, u]);
          var c = nt(u), d = nt(a === "shadow" && o.shadowAnchor || o.iconAnchor || c && c.divideBy(2, !0));
          i.className = "leaflet-marker-" + a + " " + (o.className || ""), d && (i.style.marginLeft = -d.x + "px", i.style.marginTop = -d.y + "px"), c && (i.style.width = c.x + "px", i.style.height = c.y + "px");
        },
        _createImg: function(i, a) {
          return a = a || document.createElement("img"), a.src = i, a;
        },
        _getIconUrl: function(i) {
          return st.retina && this.options[i + "RetinaUrl"] || this.options[i + "Url"];
        }
      });
      function Ma(i) {
        return new pi(i);
      }
      var Ca = pi.extend({
        options: {
          iconUrl: "marker-icon.png",
          iconRetinaUrl: "marker-icon-2x.png",
          shadowUrl: "marker-shadow.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          tooltipAnchor: [16, -28],
          shadowSize: [41, 41]
        },
        _getIconUrl: function(i) {
          return typeof Ca.imagePath != "string" && (Ca.imagePath = this._detectIconPath()), (this.options.imagePath || Ca.imagePath) + pi.prototype._getIconUrl.call(this, i);
        },
        _stripUrl: function(i) {
          var a = function(o, u, c) {
            var d = u.exec(o);
            return d && d[c];
          };
          return i = a(i, /^url\((['"])?(.+)\1\)$/, 2), i && a(i, /^(.*)marker-icon\.png$/, 1);
        },
        _detectIconPath: function() {
          var i = xt("div", "leaflet-default-icon-path", document.body), a = ya(i, "background-image") || ya(i, "backgroundImage");
          if (document.body.removeChild(i), a = this._stripUrl(a), a)
            return a;
          var o = document.querySelector('link[href$="leaflet.css"]');
          return o ? o.href.substring(0, o.href.length - 11 - 1) : "";
        }
      }), Aa = di.extend({
        initialize: function(i) {
          this._marker = i;
        },
        addHooks: function() {
          var i = this._marker._icon;
          this._draggable || (this._draggable = new Gi(i, i, !0)), this._draggable.on({
            dragstart: this._onDragStart,
            predrag: this._onPreDrag,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this).enable(), _t(i, "leaflet-marker-draggable");
        },
        removeHooks: function() {
          this._draggable.off({
            dragstart: this._onDragStart,
            predrag: this._onPreDrag,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this).disable(), this._marker._icon && te(this._marker._icon, "leaflet-marker-draggable");
        },
        moved: function() {
          return this._draggable && this._draggable._moved;
        },
        _adjustPan: function(i) {
          var a = this._marker, o = a._map, u = this._marker.options.autoPanSpeed, c = this._marker.options.autoPanPadding, d = Ui(a._icon), y = o.getPixelBounds(), C = o.getPixelOrigin(), D = G(
            y.min._subtract(C).add(c),
            y.max._subtract(C).subtract(c)
          );
          if (!D.contains(d)) {
            var V = nt(
              (Math.max(D.max.x, d.x) - D.max.x) / (y.max.x - D.max.x) - (Math.min(D.min.x, d.x) - D.min.x) / (y.min.x - D.min.x),
              (Math.max(D.max.y, d.y) - D.max.y) / (y.max.y - D.max.y) - (Math.min(D.min.y, d.y) - D.min.y) / (y.min.y - D.min.y)
            ).multiplyBy(u);
            o.panBy(V, { animate: !1 }), this._draggable._newPos._add(V), this._draggable._startPos._add(V), Jt(a._icon, this._draggable._newPos), this._onDrag(i), this._panRequest = Pt(this._adjustPan.bind(this, i));
          }
        },
        _onDragStart: function() {
          this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
        },
        _onPreDrag: function(i) {
          this._marker.options.autoPan && (Mt(this._panRequest), this._panRequest = Pt(this._adjustPan.bind(this, i)));
        },
        _onDrag: function(i) {
          var a = this._marker, o = a._shadow, u = Ui(a._icon), c = a._map.layerPointToLatLng(u);
          o && Jt(o, u), a._latlng = c, i.latlng = c, i.oldLatLng = this._oldLatLng, a.fire("move", i).fire("drag", i);
        },
        _onDragEnd: function(i) {
          Mt(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", i);
        }
      }), Oa = ni.extend({
        // @section
        // @aka Marker options
        options: {
          // @option icon: Icon = *
          // Icon instance to use for rendering the marker.
          // See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
          // If not specified, a common instance of `L.Icon.Default` is used.
          icon: new Ca(),
          // Option inherited from "Interactive layer" abstract class
          interactive: !0,
          // @option keyboard: Boolean = true
          // Whether the marker can be tabbed to with a keyboard and clicked by pressing enter.
          keyboard: !0,
          // @option title: String = ''
          // Text for the browser tooltip that appear on marker hover (no tooltip by default).
          // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
          title: "",
          // @option alt: String = 'Marker'
          // Text for the `alt` attribute of the icon image.
          // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
          alt: "Marker",
          // @option zIndexOffset: Number = 0
          // By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like `1000` (or high negative value, respectively).
          zIndexOffset: 0,
          // @option opacity: Number = 1.0
          // The opacity of the marker.
          opacity: 1,
          // @option riseOnHover: Boolean = false
          // If `true`, the marker will get on top of others when you hover the mouse over it.
          riseOnHover: !1,
          // @option riseOffset: Number = 250
          // The z-index offset used for the `riseOnHover` feature.
          riseOffset: 250,
          // @option pane: String = 'markerPane'
          // `Map pane` where the markers icon will be added.
          pane: "markerPane",
          // @option shadowPane: String = 'shadowPane'
          // `Map pane` where the markers shadow will be added.
          shadowPane: "shadowPane",
          // @option bubblingMouseEvents: Boolean = false
          // When `true`, a mouse event on this marker will trigger the same event on the map
          // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
          bubblingMouseEvents: !1,
          // @option autoPanOnFocus: Boolean = true
          // When `true`, the map will pan whenever the marker is focused (via
          // e.g. pressing `tab` on the keyboard) to ensure the marker is
          // visible within the map's bounds
          autoPanOnFocus: !0,
          // @section Draggable marker options
          // @option draggable: Boolean = false
          // Whether the marker is draggable with mouse/touch or not.
          draggable: !1,
          // @option autoPan: Boolean = false
          // Whether to pan the map when dragging this marker near its edge or not.
          autoPan: !1,
          // @option autoPanPadding: Point = Point(50, 50)
          // Distance (in pixels to the left/right and to the top/bottom) of the
          // map edge to start panning the map.
          autoPanPadding: [50, 50],
          // @option autoPanSpeed: Number = 10
          // Number of pixels the map should pan by.
          autoPanSpeed: 10
        },
        /* @section
         *
         * In addition to [shared layer methods](#Layer) like `addTo()` and `remove()` and [popup methods](#Popup) like bindPopup() you can also use the following methods:
         */
        initialize: function(i, a) {
          Y(this, a), this._latlng = F(i);
        },
        onAdd: function(i) {
          this._zoomAnimated = this._zoomAnimated && i.options.markerZoomAnimation, this._zoomAnimated && i.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update();
        },
        onRemove: function(i) {
          this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && i.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow();
        },
        getEvents: function() {
          return {
            zoom: this.update,
            viewreset: this.update
          };
        },
        // @method getLatLng: LatLng
        // Returns the current geographical position of the marker.
        getLatLng: function() {
          return this._latlng;
        },
        // @method setLatLng(latlng: LatLng): this
        // Changes the marker position to the given point.
        setLatLng: function(i) {
          var a = this._latlng;
          return this._latlng = F(i), this.update(), this.fire("move", { oldLatLng: a, latlng: this._latlng });
        },
        // @method setZIndexOffset(offset: Number): this
        // Changes the [zIndex offset](#marker-zindexoffset) of the marker.
        setZIndexOffset: function(i) {
          return this.options.zIndexOffset = i, this.update();
        },
        // @method getIcon: Icon
        // Returns the current icon used by the marker
        getIcon: function() {
          return this.options.icon;
        },
        // @method setIcon(icon: Icon): this
        // Changes the marker icon.
        setIcon: function(i) {
          return this.options.icon = i, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this;
        },
        getElement: function() {
          return this._icon;
        },
        update: function() {
          if (this._icon && this._map) {
            var i = this._map.latLngToLayerPoint(this._latlng).round();
            this._setPos(i);
          }
          return this;
        },
        _initIcon: function() {
          var i = this.options, a = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"), o = i.icon.createIcon(this._icon), u = !1;
          o !== this._icon && (this._icon && this._removeIcon(), u = !0, i.title && (o.title = i.title), o.tagName === "IMG" && (o.alt = i.alt || "")), _t(o, a), i.keyboard && (o.tabIndex = "0", o.setAttribute("role", "button")), this._icon = o, i.riseOnHover && this.on({
            mouseover: this._bringToFront,
            mouseout: this._resetZIndex
          }), this.options.autoPanOnFocus && dt(o, "focus", this._panOnFocus, this);
          var c = i.icon.createShadow(this._shadow), d = !1;
          c !== this._shadow && (this._removeShadow(), d = !0), c && (_t(c, a), c.alt = ""), this._shadow = c, i.opacity < 1 && this._updateOpacity(), u && this.getPane().appendChild(this._icon), this._initInteraction(), c && d && this.getPane(i.shadowPane).appendChild(this._shadow);
        },
        _removeIcon: function() {
          this.options.riseOnHover && this.off({
            mouseover: this._bringToFront,
            mouseout: this._resetZIndex
          }), this.options.autoPanOnFocus && Ut(this._icon, "focus", this._panOnFocus, this), Yt(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
        },
        _removeShadow: function() {
          this._shadow && Yt(this._shadow), this._shadow = null;
        },
        _setPos: function(i) {
          this._icon && Jt(this._icon, i), this._shadow && Jt(this._shadow, i), this._zIndex = i.y + this.options.zIndexOffset, this._resetZIndex();
        },
        _updateZIndex: function(i) {
          this._icon && (this._icon.style.zIndex = this._zIndex + i);
        },
        _animateZoom: function(i) {
          var a = this._map._latLngToNewLayerPoint(this._latlng, i.zoom, i.center).round();
          this._setPos(a);
        },
        _initInteraction: function() {
          if (this.options.interactive && (_t(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), Aa)) {
            var i = this.options.draggable;
            this.dragging && (i = this.dragging.enabled(), this.dragging.disable()), this.dragging = new Aa(this), i && this.dragging.enable();
          }
        },
        // @method setOpacity(opacity: Number): this
        // Changes the opacity of the marker.
        setOpacity: function(i) {
          return this.options.opacity = i, this._map && this._updateOpacity(), this;
        },
        _updateOpacity: function() {
          var i = this.options.opacity;
          this._icon && Ft(this._icon, i), this._shadow && Ft(this._shadow, i);
        },
        _bringToFront: function() {
          this._updateZIndex(this.options.riseOffset);
        },
        _resetZIndex: function() {
          this._updateZIndex(0);
        },
        _panOnFocus: function() {
          var i = this._map;
          if (i) {
            var a = this.options.icon.options, o = a.iconSize ? nt(a.iconSize) : nt(0, 0), u = a.iconAnchor ? nt(a.iconAnchor) : nt(0, 0);
            i.panInside(this._latlng, {
              paddingTopLeft: u,
              paddingBottomRight: o.subtract(u)
            });
          }
        },
        _getPopupAnchor: function() {
          return this.options.icon.options.popupAnchor;
        },
        _getTooltipAnchor: function() {
          return this.options.icon.options.tooltipAnchor;
        }
      });
      function wr(i, a) {
        return new Oa(i, a);
      }
      var _i = ni.extend({
        // @section
        // @aka Path options
        options: {
          // @option stroke: Boolean = true
          // Whether to draw stroke along the path. Set it to `false` to disable borders on polygons or circles.
          stroke: !0,
          // @option color: String = '#3388ff'
          // Stroke color
          color: "#3388ff",
          // @option weight: Number = 3
          // Stroke width in pixels
          weight: 3,
          // @option opacity: Number = 1.0
          // Stroke opacity
          opacity: 1,
          // @option lineCap: String= 'round'
          // A string that defines [shape to be used at the end](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) of the stroke.
          lineCap: "round",
          // @option lineJoin: String = 'round'
          // A string that defines [shape to be used at the corners](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin) of the stroke.
          lineJoin: "round",
          // @option dashArray: String = null
          // A string that defines the stroke [dash pattern](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
          dashArray: null,
          // @option dashOffset: String = null
          // A string that defines the [distance into the dash pattern to start the dash](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
          dashOffset: null,
          // @option fill: Boolean = depends
          // Whether to fill the path with color. Set it to `false` to disable filling on polygons or circles.
          fill: !1,
          // @option fillColor: String = *
          // Fill color. Defaults to the value of the [`color`](#path-color) option
          fillColor: null,
          // @option fillOpacity: Number = 0.2
          // Fill opacity.
          fillOpacity: 0.2,
          // @option fillRule: String = 'evenodd'
          // A string that defines [how the inside of a shape](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule) is determined.
          fillRule: "evenodd",
          // className: '',
          // Option inherited from "Interactive layer" abstract class
          interactive: !0,
          // @option bubblingMouseEvents: Boolean = true
          // When `true`, a mouse event on this path will trigger the same event on the map
          // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
          bubblingMouseEvents: !0
        },
        beforeAdd: function(i) {
          this._renderer = i.getRenderer(this);
        },
        onAdd: function() {
          this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
        },
        onRemove: function() {
          this._renderer._removePath(this);
        },
        // @method redraw(): this
        // Redraws the layer. Sometimes useful after you changed the coordinates that the path uses.
        redraw: function() {
          return this._map && this._renderer._updatePath(this), this;
        },
        // @method setStyle(style: Path options): this
        // Changes the appearance of a Path based on the options in the `Path options` object.
        setStyle: function(i) {
          return Y(this, i), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && i && Object.prototype.hasOwnProperty.call(i, "weight") && this._updateBounds()), this;
        },
        // @method bringToFront(): this
        // Brings the layer to the top of all path layers.
        bringToFront: function() {
          return this._renderer && this._renderer._bringToFront(this), this;
        },
        // @method bringToBack(): this
        // Brings the layer to the bottom of all path layers.
        bringToBack: function() {
          return this._renderer && this._renderer._bringToBack(this), this;
        },
        getElement: function() {
          return this._path;
        },
        _reset: function() {
          this._project(), this._update();
        },
        _clickTolerance: function() {
          return (this.options.stroke ? this.options.weight / 2 : 0) + (this._renderer.options.tolerance || 0);
        }
      }), Rn = _i.extend({
        // @section
        // @aka CircleMarker options
        options: {
          fill: !0,
          // @option radius: Number = 10
          // Radius of the circle marker, in pixels
          radius: 10
        },
        initialize: function(i, a) {
          Y(this, a), this._latlng = F(i), this._radius = this.options.radius;
        },
        // @method setLatLng(latLng: LatLng): this
        // Sets the position of a circle marker to a new location.
        setLatLng: function(i) {
          var a = this._latlng;
          return this._latlng = F(i), this.redraw(), this.fire("move", { oldLatLng: a, latlng: this._latlng });
        },
        // @method getLatLng(): LatLng
        // Returns the current geographical position of the circle marker
        getLatLng: function() {
          return this._latlng;
        },
        // @method setRadius(radius: Number): this
        // Sets the radius of a circle marker. Units are in pixels.
        setRadius: function(i) {
          return this.options.radius = this._radius = i, this.redraw();
        },
        // @method getRadius(): Number
        // Returns the current radius of the circle
        getRadius: function() {
          return this._radius;
        },
        setStyle: function(i) {
          var a = i && i.radius || this._radius;
          return _i.prototype.setStyle.call(this, i), this.setRadius(a), this;
        },
        _project: function() {
          this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
        },
        _updateBounds: function() {
          var i = this._radius, a = this._radiusY || i, o = this._clickTolerance(), u = [i + o, a + o];
          this._pxBounds = new S(this._point.subtract(u), this._point.add(u));
        },
        _update: function() {
          this._map && this._updatePath();
        },
        _updatePath: function() {
          this._renderer._updateCircle(this);
        },
        _empty: function() {
          return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(i) {
          return i.distanceTo(this._point) <= this._radius + this._clickTolerance();
        }
      });
      function Mr(i, a) {
        return new Rn(i, a);
      }
      var dl = Rn.extend({
        initialize: function(i, a, o) {
          if (typeof a == "number" && (a = lt({}, o, { radius: a })), Y(this, a), this._latlng = F(i), isNaN(this.options.radius))
            throw new Error("Circle radius cannot be NaN");
          this._mRadius = this.options.radius;
        },
        // @method setRadius(radius: Number): this
        // Sets the radius of a circle. Units are in meters.
        setRadius: function(i) {
          return this._mRadius = i, this.redraw();
        },
        // @method getRadius(): Number
        // Returns the current radius of a circle. Units are in meters.
        getRadius: function() {
          return this._mRadius;
        },
        // @method getBounds(): LatLngBounds
        // Returns the `LatLngBounds` of the path.
        getBounds: function() {
          var i = [this._radius, this._radiusY || this._radius];
          return new J(
            this._map.layerPointToLatLng(this._point.subtract(i)),
            this._map.layerPointToLatLng(this._point.add(i))
          );
        },
        setStyle: _i.prototype.setStyle,
        _project: function() {
          var i = this._latlng.lng, a = this._latlng.lat, o = this._map, u = o.options.crs;
          if (u.distance === Zt.distance) {
            var c = Math.PI / 180, d = this._mRadius / Zt.R / c, y = o.project([a + d, i]), C = o.project([a - d, i]), D = y.add(C).divideBy(2), V = o.unproject(D).lat, et = Math.acos((Math.cos(d * c) - Math.sin(a * c) * Math.sin(V * c)) / (Math.cos(a * c) * Math.cos(V * c))) / c;
            (isNaN(et) || et === 0) && (et = d / Math.cos(Math.PI / 180 * a)), this._point = D.subtract(o.getPixelOrigin()), this._radius = isNaN(et) ? 0 : D.x - o.project([V, i - et]).x, this._radiusY = D.y - y.y;
          } else {
            var ut = u.unproject(u.project(this._latlng).subtract([this._mRadius, 0]));
            this._point = o.latLngToLayerPoint(this._latlng), this._radius = this._point.x - o.latLngToLayerPoint(ut).x;
          }
          this._updateBounds();
        }
      });
      function Cr(i, a, o) {
        return new dl(i, a, o);
      }
      var Ci = _i.extend({
        // @section
        // @aka Polyline options
        options: {
          // @option smoothFactor: Number = 1.0
          // How much to simplify the polyline on each zoom level. More means
          // better performance and smoother look, and less means more accurate representation.
          smoothFactor: 1,
          // @option noClip: Boolean = false
          // Disable polyline clipping.
          noClip: !1
        },
        initialize: function(i, a) {
          Y(this, a), this._setLatLngs(i);
        },
        // @method getLatLngs(): LatLng[]
        // Returns an array of the points in the path, or nested arrays of points in case of multi-polyline.
        getLatLngs: function() {
          return this._latlngs;
        },
        // @method setLatLngs(latlngs: LatLng[]): this
        // Replaces all the points in the polyline with the given array of geographical points.
        setLatLngs: function(i) {
          return this._setLatLngs(i), this.redraw();
        },
        // @method isEmpty(): Boolean
        // Returns `true` if the Polyline has no LatLngs.
        isEmpty: function() {
          return !this._latlngs.length;
        },
        // @method closestLayerPoint(p: Point): Point
        // Returns the point closest to `p` on the Polyline.
        closestLayerPoint: function(i) {
          for (var a = 1 / 0, o = null, u = wa, c, d, y = 0, C = this._parts.length; y < C; y++)
            for (var D = this._parts[y], V = 1, et = D.length; V < et; V++) {
              c = D[V - 1], d = D[V];
              var ut = u(i, c, d, !0);
              ut < a && (a = ut, o = u(i, c, d));
            }
          return o && (o.distance = Math.sqrt(a)), o;
        },
        // @method getCenter(): LatLng
        // Returns the center ([centroid](https://en.wikipedia.org/wiki/Centroid)) of the polyline.
        getCenter: function() {
          if (!this._map)
            throw new Error("Must add layer to map before using getCenter()");
          return Dn(this._defaultShape(), this._map.options.crs);
        },
        // @method getBounds(): LatLngBounds
        // Returns the `LatLngBounds` of the path.
        getBounds: function() {
          return this._bounds;
        },
        // @method addLatLng(latlng: LatLng, latlngs?: LatLng[]): this
        // Adds a given point to the polyline. By default, adds to the first ring of
        // the polyline in case of a multi-polyline, but can be overridden by passing
        // a specific ring as a LatLng array (that you can earlier access with [`getLatLngs`](#polyline-getlatlngs)).
        addLatLng: function(i, a) {
          return a = a || this._defaultShape(), i = F(i), a.push(i), this._bounds.extend(i), this.redraw();
        },
        _setLatLngs: function(i) {
          this._bounds = new J(), this._latlngs = this._convertLatLngs(i);
        },
        _defaultShape: function() {
          return je(this._latlngs) ? this._latlngs : this._latlngs[0];
        },
        // recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
        _convertLatLngs: function(i) {
          for (var a = [], o = je(i), u = 0, c = i.length; u < c; u++)
            o ? (a[u] = F(i[u]), this._bounds.extend(a[u])) : a[u] = this._convertLatLngs(i[u]);
          return a;
        },
        _project: function() {
          var i = new S();
          this._rings = [], this._projectLatlngs(this._latlngs, this._rings, i), this._bounds.isValid() && i.isValid() && (this._rawPxBounds = i, this._updateBounds());
        },
        _updateBounds: function() {
          var i = this._clickTolerance(), a = new K(i, i);
          this._rawPxBounds && (this._pxBounds = new S([
            this._rawPxBounds.min.subtract(a),
            this._rawPxBounds.max.add(a)
          ]));
        },
        // recursively turns latlngs into a set of rings with projected coordinates
        _projectLatlngs: function(i, a, o) {
          var u = i[0] instanceof Q, c = i.length, d, y;
          if (u) {
            for (y = [], d = 0; d < c; d++)
              y[d] = this._map.latLngToLayerPoint(i[d]), o.extend(y[d]);
            a.push(y);
          } else
            for (d = 0; d < c; d++)
              this._projectLatlngs(i[d], a, o);
        },
        // clip polyline by renderer bounds so that we have less to render for performance
        _clipPoints: function() {
          var i = this._renderer._bounds;
          if (this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(i))) {
            if (this.options.noClip) {
              this._parts = this._rings;
              return;
            }
            var a = this._parts, o, u, c, d, y, C, D;
            for (o = 0, c = 0, d = this._rings.length; o < d; o++)
              for (D = this._rings[o], u = 0, y = D.length; u < y - 1; u++)
                C = Lr(D[u], D[u + 1], i, u, !0), C && (a[c] = a[c] || [], a[c].push(C[0]), (C[1] !== D[u + 1] || u === y - 2) && (a[c].push(C[1]), c++));
          }
        },
        // simplify each clipped part of the polyline for performance
        _simplifyPoints: function() {
          for (var i = this._parts, a = this.options.smoothFactor, o = 0, u = i.length; o < u; o++)
            i[o] = yr(i[o], a);
        },
        _update: function() {
          this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
        },
        _updatePath: function() {
          this._renderer._updatePoly(this);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(i, a) {
          var o, u, c, d, y, C, D = this._clickTolerance();
          if (!this._pxBounds || !this._pxBounds.contains(i))
            return !1;
          for (o = 0, d = this._parts.length; o < d; o++)
            for (C = this._parts[o], u = 0, y = C.length, c = y - 1; u < y; c = u++)
              if (!(!a && u === 0) && br(i, C[c], C[u]) <= D)
                return !0;
          return !1;
        }
      });
      function Js(i, a) {
        return new Ci(i, a);
      }
      Ci._flat = cl;
      var Un = Ci.extend({
        options: {
          fill: !0
        },
        isEmpty: function() {
          return !this._latlngs.length || !this._latlngs[0].length;
        },
        // @method getCenter(): LatLng
        // Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the Polygon.
        getCenter: function() {
          if (!this._map)
            throw new Error("Must add layer to map before using getCenter()");
          return vr(this._defaultShape(), this._map.options.crs);
        },
        _convertLatLngs: function(i) {
          var a = Ci.prototype._convertLatLngs.call(this, i), o = a.length;
          return o >= 2 && a[0] instanceof Q && a[0].equals(a[o - 1]) && a.pop(), a;
        },
        _setLatLngs: function(i) {
          Ci.prototype._setLatLngs.call(this, i), je(this._latlngs) && (this._latlngs = [this._latlngs]);
        },
        _defaultShape: function() {
          return je(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
        },
        _clipPoints: function() {
          var i = this._renderer._bounds, a = this.options.weight, o = new K(a, a);
          if (i = new S(i.min.subtract(o), i.max.add(o)), this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(i))) {
            if (this.options.noClip) {
              this._parts = this._rings;
              return;
            }
            for (var u = 0, c = this._rings.length, d; u < c; u++)
              d = gr(this._rings[u], i, !0), d.length && this._parts.push(d);
          }
        },
        _updatePath: function() {
          this._renderer._updatePoly(this, !0);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(i) {
          var a = !1, o, u, c, d, y, C, D, V;
          if (!this._pxBounds || !this._pxBounds.contains(i))
            return !1;
          for (d = 0, D = this._parts.length; d < D; d++)
            for (o = this._parts[d], y = 0, V = o.length, C = V - 1; y < V; C = y++)
              u = o[y], c = o[C], u.y > i.y != c.y > i.y && i.x < (c.x - u.x) * (i.y - u.y) / (c.y - u.y) + u.x && (a = !a);
          return a || Ci.prototype._containsPoint.call(this, i, !0);
        }
      });
      function Ws(i, a) {
        return new Un(i, a);
      }
      var Ai = mi.extend({
        /* @section
         * @aka GeoJSON options
         *
         * @option pointToLayer: Function = *
         * A `Function` defining how GeoJSON points spawn Leaflet layers. It is internally
         * called when data is added, passing the GeoJSON point feature and its `LatLng`.
         * The default is to spawn a default `Marker`:
         * ```js
         * function(geoJsonPoint, latlng) {
         * 	return L.marker(latlng);
         * }
         * ```
         *
         * @option style: Function = *
         * A `Function` defining the `Path options` for styling GeoJSON lines and polygons,
         * called internally when data is added.
         * The default value is to not override any defaults:
         * ```js
         * function (geoJsonFeature) {
         * 	return {}
         * }
         * ```
         *
         * @option onEachFeature: Function = *
         * A `Function` that will be called once for each created `Feature`, after it has
         * been created and styled. Useful for attaching events and popups to features.
         * The default is to do nothing with the newly created layers:
         * ```js
         * function (feature, layer) {}
         * ```
         *
         * @option filter: Function = *
         * A `Function` that will be used to decide whether to include a feature or not.
         * The default is to include all features:
         * ```js
         * function (geoJsonFeature) {
         * 	return true;
         * }
         * ```
         * Note: dynamically changing the `filter` option will have effect only on newly
         * added data. It will _not_ re-evaluate already included features.
         *
         * @option coordsToLatLng: Function = *
         * A `Function` that will be used for converting GeoJSON coordinates to `LatLng`s.
         * The default is the `coordsToLatLng` static method.
         *
         * @option markersInheritOptions: Boolean = false
         * Whether default Markers for "Point" type Features inherit from group options.
         */
        initialize: function(i, a) {
          Y(this, a), this._layers = {}, i && this.addData(i);
        },
        // @method addData( <GeoJSON> data ): this
        // Adds a GeoJSON object to the layer.
        addData: function(i) {
          var a = at(i) ? i : i.features, o, u, c;
          if (a) {
            for (o = 0, u = a.length; o < u; o++)
              c = a[o], (c.geometries || c.geometry || c.features || c.coordinates) && this.addData(c);
            return this;
          }
          var d = this.options;
          if (d.filter && !d.filter(i))
            return this;
          var y = Se(i, d);
          return y ? (y.feature = _l(i), y.defaultOptions = y.options, this.resetStyle(y), d.onEachFeature && d.onEachFeature(i, y), this.addLayer(y)) : this;
        },
        // @method resetStyle( <Path> layer? ): this
        // Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
        // If `layer` is omitted, the style of all features in the current layer is reset.
        resetStyle: function(i) {
          return i === void 0 ? this.eachLayer(this.resetStyle, this) : (i.options = lt({}, i.defaultOptions), this._setLayerStyle(i, this.options.style), this);
        },
        // @method setStyle( <Function> style ): this
        // Changes styles of GeoJSON vector layers with the given style function.
        setStyle: function(i) {
          return this.eachLayer(function(a) {
            this._setLayerStyle(a, i);
          }, this);
        },
        _setLayerStyle: function(i, a) {
          i.setStyle && (typeof a == "function" && (a = a(i.feature)), i.setStyle(a));
        }
      });
      function Se(i, a) {
        var o = i.type === "Feature" ? i.geometry : i, u = o ? o.coordinates : null, c = [], d = a && a.pointToLayer, y = a && a.coordsToLatLng || ml, C, D, V, et;
        if (!u && !o)
          return null;
        switch (o.type) {
          case "Point":
            return C = y(u), Hn(d, i, C, a);
          case "MultiPoint":
            for (V = 0, et = u.length; V < et; V++)
              C = y(u[V]), c.push(Hn(d, i, C, a));
            return new mi(c);
          case "LineString":
          case "MultiLineString":
            return D = ka(u, o.type === "LineString" ? 0 : 1, y), new Ci(D, a);
          case "Polygon":
          case "MultiPolygon":
            return D = ka(u, o.type === "Polygon" ? 1 : 2, y), new Un(D, a);
          case "GeometryCollection":
            for (V = 0, et = o.geometries.length; V < et; V++) {
              var ut = Se({
                geometry: o.geometries[V],
                type: "Feature",
                properties: i.properties
              }, a);
              ut && c.push(ut);
            }
            return new mi(c);
          case "FeatureCollection":
            for (V = 0, et = o.features.length; V < et; V++) {
              var yt = Se(o.features[V], a);
              yt && c.push(yt);
            }
            return new mi(c);
          default:
            throw new Error("Invalid GeoJSON object.");
        }
      }
      function Hn(i, a, o, u) {
        return i ? i(a, o) : new Oa(o, u && u.markersInheritOptions && u);
      }
      function ml(i) {
        return new Q(i[1], i[0], i[2]);
      }
      function ka(i, a, o) {
        for (var u = [], c = 0, d = i.length, y; c < d; c++)
          y = a ? ka(i[c], a - 1, o) : (o || ml)(i[c]), u.push(y);
        return u;
      }
      function pl(i, a) {
        return i = F(i), i.alt !== void 0 ? [R(i.lng, a), R(i.lat, a), R(i.alt, a)] : [R(i.lng, a), R(i.lat, a)];
      }
      function Na(i, a, o, u) {
        for (var c = [], d = 0, y = i.length; d < y; d++)
          c.push(a ? Na(i[d], je(i[d]) ? 0 : a - 1, o, u) : pl(i[d], u));
        return !a && o && c.length > 0 && c.push(c[0].slice()), c;
      }
      function qi(i, a) {
        return i.feature ? lt({}, i.feature, { geometry: a }) : _l(a);
      }
      function _l(i) {
        return i.type === "Feature" || i.type === "FeatureCollection" ? i : {
          type: "Feature",
          properties: {},
          geometry: i
        };
      }
      var ji = {
        toGeoJSON: function(i) {
          return qi(this, {
            type: "Point",
            coordinates: pl(this.getLatLng(), i)
          });
        }
      };
      Oa.include(ji), dl.include(ji), Rn.include(ji), Ci.include({
        toGeoJSON: function(i) {
          var a = !je(this._latlngs), o = Na(this._latlngs, a ? 1 : 0, !1, i);
          return qi(this, {
            type: (a ? "Multi" : "") + "LineString",
            coordinates: o
          });
        }
      }), Un.include({
        toGeoJSON: function(i) {
          var a = !je(this._latlngs), o = a && !je(this._latlngs[0]), u = Na(this._latlngs, o ? 2 : a ? 1 : 0, !0, i);
          return a || (u = [u]), qi(this, {
            type: (o ? "Multi" : "") + "Polygon",
            coordinates: u
          });
        }
      }), Zn.include({
        toMultiPoint: function(i) {
          var a = [];
          return this.eachLayer(function(o) {
            a.push(o.toGeoJSON(i).geometry.coordinates);
          }), qi(this, {
            type: "MultiPoint",
            coordinates: a
          });
        },
        // @method toGeoJSON(precision?: Number|false): Object
        // Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
        // Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `FeatureCollection`, `GeometryCollection`, or `MultiPoint`).
        toGeoJSON: function(i) {
          var a = this.feature && this.feature.geometry && this.feature.geometry.type;
          if (a === "MultiPoint")
            return this.toMultiPoint(i);
          var o = a === "GeometryCollection", u = [];
          return this.eachLayer(function(c) {
            if (c.toGeoJSON) {
              var d = c.toGeoJSON(i);
              if (o)
                u.push(d.geometry);
              else {
                var y = _l(d);
                y.type === "FeatureCollection" ? u.push.apply(u, y.features) : u.push(y);
              }
            }
          }), o ? qi(this, {
            geometries: u,
            type: "GeometryCollection"
          }) : {
            type: "FeatureCollection",
            features: u
          };
        }
      });
      function gl(i, a) {
        return new Ai(i, a);
      }
      var Da = gl, Gn = ni.extend({
        // @section
        // @aka ImageOverlay options
        options: {
          // @option opacity: Number = 1.0
          // The opacity of the image overlay.
          opacity: 1,
          // @option alt: String = ''
          // Text for the `alt` attribute of the image (useful for accessibility).
          alt: "",
          // @option interactive: Boolean = false
          // If `true`, the image overlay will emit [mouse events](#interactive-layer) when clicked or hovered.
          interactive: !1,
          // @option crossOrigin: Boolean|String = false
          // Whether the crossOrigin attribute will be added to the image.
          // If a String is provided, the image will have its crossOrigin attribute set to the String provided. This is needed if you want to access image pixel data.
          // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
          crossOrigin: !1,
          // @option errorOverlayUrl: String = ''
          // URL to the overlay image to show in place of the overlay that failed to load.
          errorOverlayUrl: "",
          // @option zIndex: Number = 1
          // The explicit [zIndex](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index) of the overlay layer.
          zIndex: 1,
          // @option className: String = ''
          // A custom class name to assign to the image. Empty by default.
          className: ""
        },
        initialize: function(i, a, o) {
          this._url = i, this._bounds = z(a), Y(this, o);
        },
        onAdd: function() {
          this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (_t(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
        },
        onRemove: function() {
          Yt(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
        },
        // @method setOpacity(opacity: Number): this
        // Sets the opacity of the overlay.
        setOpacity: function(i) {
          return this.options.opacity = i, this._image && this._updateOpacity(), this;
        },
        setStyle: function(i) {
          return i.opacity && this.setOpacity(i.opacity), this;
        },
        // @method bringToFront(): this
        // Brings the layer to the top of all overlays.
        bringToFront: function() {
          return this._map && ve(this._image), this;
        },
        // @method bringToBack(): this
        // Brings the layer to the bottom of all overlays.
        bringToBack: function() {
          return this._map && on(this._image), this;
        },
        // @method setUrl(url: String): this
        // Changes the URL of the image.
        setUrl: function(i) {
          return this._url = i, this._image && (this._image.src = i), this;
        },
        // @method setBounds(bounds: LatLngBounds): this
        // Update the bounds that this ImageOverlay covers
        setBounds: function(i) {
          return this._bounds = z(i), this._map && this._reset(), this;
        },
        getEvents: function() {
          var i = {
            zoom: this._reset,
            viewreset: this._reset
          };
          return this._zoomAnimated && (i.zoomanim = this._animateZoom), i;
        },
        // @method setZIndex(value: Number): this
        // Changes the [zIndex](#imageoverlay-zindex) of the image overlay.
        setZIndex: function(i) {
          return this.options.zIndex = i, this._updateZIndex(), this;
        },
        // @method getBounds(): LatLngBounds
        // Get the bounds that this ImageOverlay covers
        getBounds: function() {
          return this._bounds;
        },
        // @method getElement(): HTMLElement
        // Returns the instance of [`HTMLImageElement`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement)
        // used by this overlay.
        getElement: function() {
          return this._image;
        },
        _initImage: function() {
          var i = this._url.tagName === "IMG", a = this._image = i ? this._url : xt("img");
          if (_t(a, "leaflet-image-layer"), this._zoomAnimated && _t(a, "leaflet-zoom-animated"), this.options.className && _t(a, this.options.className), a.onselectstart = E, a.onmousemove = E, a.onload = p(this.fire, this, "load"), a.onerror = p(this._overlayOnError, this, "error"), (this.options.crossOrigin || this.options.crossOrigin === "") && (a.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), i) {
            this._url = a.src;
            return;
          }
          a.src = this._url, a.alt = this.options.alt;
        },
        _animateZoom: function(i) {
          var a = this._map.getZoomScale(i.zoom), o = this._map._latLngBoundsToNewLayerBounds(this._bounds, i.zoom, i.center).min;
          Ti(this._image, o, a);
        },
        _reset: function() {
          var i = this._image, a = new S(
            this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
            this._map.latLngToLayerPoint(this._bounds.getSouthEast())
          ), o = a.getSize();
          Jt(i, a.min), i.style.width = o.x + "px", i.style.height = o.y + "px";
        },
        _updateOpacity: function() {
          Ft(this._image, this.options.opacity);
        },
        _updateZIndex: function() {
          this._image && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._image.style.zIndex = this.options.zIndex);
        },
        _overlayOnError: function() {
          this.fire("error");
          var i = this.options.errorOverlayUrl;
          i && this._url !== i && (this._url = i, this._image.src = i);
        },
        // @method getCenter(): LatLng
        // Returns the center of the ImageOverlay.
        getCenter: function() {
          return this._bounds.getCenter();
        }
      }), Ar = function(i, a, o) {
        return new Gn(i, a, o);
      }, Pi = Gn.extend({
        // @section
        // @aka VideoOverlay options
        options: {
          // @option autoplay: Boolean = true
          // Whether the video starts playing automatically when loaded.
          // On some browsers autoplay will only work with `muted: true`
          autoplay: !0,
          // @option loop: Boolean = true
          // Whether the video will loop back to the beginning when played.
          loop: !0,
          // @option keepAspectRatio: Boolean = true
          // Whether the video will save aspect ratio after the projection.
          // Relevant for supported browsers. See [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
          keepAspectRatio: !0,
          // @option muted: Boolean = false
          // Whether the video starts on mute when loaded.
          muted: !1,
          // @option playsInline: Boolean = true
          // Mobile browsers will play the video right where it is instead of open it up in fullscreen mode.
          playsInline: !0
        },
        _initImage: function() {
          var i = this._url.tagName === "VIDEO", a = this._image = i ? this._url : xt("video");
          if (_t(a, "leaflet-image-layer"), this._zoomAnimated && _t(a, "leaflet-zoom-animated"), this.options.className && _t(a, this.options.className), a.onselectstart = E, a.onmousemove = E, a.onloadeddata = p(this.fire, this, "load"), i) {
            for (var o = a.getElementsByTagName("source"), u = [], c = 0; c < o.length; c++)
              u.push(o[c].src);
            this._url = o.length > 0 ? u : [a.src];
            return;
          }
          at(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(a.style, "objectFit") && (a.style.objectFit = "fill"), a.autoplay = !!this.options.autoplay, a.loop = !!this.options.loop, a.muted = !!this.options.muted, a.playsInline = !!this.options.playsInline;
          for (var d = 0; d < this._url.length; d++) {
            var y = xt("source");
            y.src = this._url[d], a.appendChild(y);
          }
        }
        // @method getElement(): HTMLVideoElement
        // Returns the instance of [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)
        // used by this overlay.
      });
      function qn(i, a, o) {
        return new Pi(i, a, o);
      }
      var vl = Gn.extend({
        _initImage: function() {
          var i = this._image = this._url;
          _t(i, "leaflet-image-layer"), this._zoomAnimated && _t(i, "leaflet-zoom-animated"), this.options.className && _t(i, this.options.className), i.onselectstart = E, i.onmousemove = E;
        }
        // @method getElement(): SVGElement
        // Returns the instance of [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement)
        // used by this overlay.
      });
      function Or(i, a, o) {
        return new vl(i, a, o);
      }
      var Le = ni.extend({
        // @section
        // @aka DivOverlay options
        options: {
          // @option interactive: Boolean = false
          // If true, the popup/tooltip will listen to the mouse events.
          interactive: !1,
          // @option offset: Point = Point(0, 0)
          // The offset of the overlay position.
          offset: [0, 0],
          // @option className: String = ''
          // A custom CSS class name to assign to the overlay.
          className: "",
          // @option pane: String = undefined
          // `Map pane` where the overlay will be added.
          pane: void 0,
          // @option content: String|HTMLElement|Function = ''
          // Sets the HTML content of the overlay while initializing. If a function is passed the source layer will be
          // passed to the function. The function should return a `String` or `HTMLElement` to be used in the overlay.
          content: ""
        },
        initialize: function(i, a) {
          i && (i instanceof Q || at(i)) ? (this._latlng = F(i), Y(this, a)) : (Y(this, i), this._source = a), this.options.content && (this._content = this.options.content);
        },
        // @method openOn(map: Map): this
        // Adds the overlay to the map.
        // Alternative to `map.openPopup(popup)`/`.openTooltip(tooltip)`.
        openOn: function(i) {
          return i = arguments.length ? i : this._source._map, i.hasLayer(this) || i.addLayer(this), this;
        },
        // @method close(): this
        // Closes the overlay.
        // Alternative to `map.closePopup(popup)`/`.closeTooltip(tooltip)`
        // and `layer.closePopup()`/`.closeTooltip()`.
        close: function() {
          return this._map && this._map.removeLayer(this), this;
        },
        // @method toggle(layer?: Layer): this
        // Opens or closes the overlay bound to layer depending on its current state.
        // Argument may be omitted only for overlay bound to layer.
        // Alternative to `layer.togglePopup()`/`.toggleTooltip()`.
        toggle: function(i) {
          return this._map ? this.close() : (arguments.length ? this._source = i : i = this._source, this._prepareOpen(), this.openOn(i._map)), this;
        },
        onAdd: function(i) {
          this._zoomAnimated = i._zoomAnimated, this._container || this._initLayout(), i._fadeAnimated && Ft(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), i._fadeAnimated && Ft(this._container, 1), this.bringToFront(), this.options.interactive && (_t(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container));
        },
        onRemove: function(i) {
          i._fadeAnimated ? (Ft(this._container, 0), this._removeTimeout = setTimeout(p(Yt, void 0, this._container), 200)) : Yt(this._container), this.options.interactive && (te(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container));
        },
        // @namespace DivOverlay
        // @method getLatLng: LatLng
        // Returns the geographical point of the overlay.
        getLatLng: function() {
          return this._latlng;
        },
        // @method setLatLng(latlng: LatLng): this
        // Sets the geographical point where the overlay will open.
        setLatLng: function(i) {
          return this._latlng = F(i), this._map && (this._updatePosition(), this._adjustPan()), this;
        },
        // @method getContent: String|HTMLElement
        // Returns the content of the overlay.
        getContent: function() {
          return this._content;
        },
        // @method setContent(htmlContent: String|HTMLElement|Function): this
        // Sets the HTML content of the overlay. If a function is passed the source layer will be passed to the function.
        // The function should return a `String` or `HTMLElement` to be used in the overlay.
        setContent: function(i) {
          return this._content = i, this.update(), this;
        },
        // @method getElement: String|HTMLElement
        // Returns the HTML container of the overlay.
        getElement: function() {
          return this._container;
        },
        // @method update: null
        // Updates the overlay content, layout and position. Useful for updating the overlay after something inside changed, e.g. image loaded.
        update: function() {
          this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan());
        },
        getEvents: function() {
          var i = {
            zoom: this._updatePosition,
            viewreset: this._updatePosition
          };
          return this._zoomAnimated && (i.zoomanim = this._animateZoom), i;
        },
        // @method isOpen: Boolean
        // Returns `true` when the overlay is visible on the map.
        isOpen: function() {
          return !!this._map && this._map.hasLayer(this);
        },
        // @method bringToFront: this
        // Brings this overlay in front of other overlays (in the same map pane).
        bringToFront: function() {
          return this._map && ve(this._container), this;
        },
        // @method bringToBack: this
        // Brings this overlay to the back of other overlays (in the same map pane).
        bringToBack: function() {
          return this._map && on(this._container), this;
        },
        // prepare bound overlay to open: update latlng pos / content source (for FeatureGroup)
        _prepareOpen: function(i) {
          var a = this._source;
          if (!a._map)
            return !1;
          if (a instanceof mi) {
            a = null;
            var o = this._source._layers;
            for (var u in o)
              if (o[u]._map) {
                a = o[u];
                break;
              }
            if (!a)
              return !1;
            this._source = a;
          }
          if (!i)
            if (a.getCenter)
              i = a.getCenter();
            else if (a.getLatLng)
              i = a.getLatLng();
            else if (a.getBounds)
              i = a.getBounds().getCenter();
            else
              throw new Error("Unable to get source layer LatLng.");
          return this.setLatLng(i), this._map && this.update(), !0;
        },
        _updateContent: function() {
          if (this._content) {
            var i = this._contentNode, a = typeof this._content == "function" ? this._content(this._source || this) : this._content;
            if (typeof a == "string")
              i.innerHTML = a;
            else {
              for (; i.hasChildNodes(); )
                i.removeChild(i.firstChild);
              i.appendChild(a);
            }
            this.fire("contentupdate");
          }
        },
        _updatePosition: function() {
          if (this._map) {
            var i = this._map.latLngToLayerPoint(this._latlng), a = nt(this.options.offset), o = this._getAnchor();
            this._zoomAnimated ? Jt(this._container, i.add(o)) : a = a.add(i).add(o);
            var u = this._containerBottom = -a.y, c = this._containerLeft = -Math.round(this._containerWidth / 2) + a.x;
            this._container.style.bottom = u + "px", this._container.style.left = c + "px";
          }
        },
        _getAnchor: function() {
          return [0, 0];
        }
      });
      Et.include({
        _initOverlay: function(i, a, o, u) {
          var c = a;
          return c instanceof i || (c = new i(u).setContent(a)), o && c.setLatLng(o), c;
        }
      }), ni.include({
        _initOverlay: function(i, a, o, u) {
          var c = o;
          return c instanceof i ? (Y(c, u), c._source = this) : (c = a && !u ? a : new i(u, this), c.setContent(o)), c;
        }
      });
      var Ba = Le.extend({
        // @section
        // @aka Popup options
        options: {
          // @option pane: String = 'popupPane'
          // `Map pane` where the popup will be added.
          pane: "popupPane",
          // @option offset: Point = Point(0, 7)
          // The offset of the popup position.
          offset: [0, 7],
          // @option maxWidth: Number = 300
          // Max width of the popup, in pixels.
          maxWidth: 300,
          // @option minWidth: Number = 50
          // Min width of the popup, in pixels.
          minWidth: 50,
          // @option maxHeight: Number = null
          // If set, creates a scrollable container of the given height
          // inside a popup if its content exceeds it.
          // The scrollable container can be styled using the
          // `leaflet-popup-scrolled` CSS class selector.
          maxHeight: null,
          // @option autoPan: Boolean = true
          // Set it to `false` if you don't want the map to do panning animation
          // to fit the opened popup.
          autoPan: !0,
          // @option autoPanPaddingTopLeft: Point = null
          // The margin between the popup and the top left corner of the map
          // view after autopanning was performed.
          autoPanPaddingTopLeft: null,
          // @option autoPanPaddingBottomRight: Point = null
          // The margin between the popup and the bottom right corner of the map
          // view after autopanning was performed.
          autoPanPaddingBottomRight: null,
          // @option autoPanPadding: Point = Point(5, 5)
          // Equivalent of setting both top left and bottom right autopan padding to the same value.
          autoPanPadding: [5, 5],
          // @option keepInView: Boolean = false
          // Set it to `true` if you want to prevent users from panning the popup
          // off of the screen while it is open.
          keepInView: !1,
          // @option closeButton: Boolean = true
          // Controls the presence of a close button in the popup.
          closeButton: !0,
          // @option autoClose: Boolean = true
          // Set it to `false` if you want to override the default behavior of
          // the popup closing when another popup is opened.
          autoClose: !0,
          // @option closeOnEscapeKey: Boolean = true
          // Set it to `false` if you want to override the default behavior of
          // the ESC key for closing of the popup.
          closeOnEscapeKey: !0,
          // @option closeOnClick: Boolean = *
          // Set it if you want to override the default behavior of the popup closing when user clicks
          // on the map. Defaults to the map's [`closePopupOnClick`](#map-closepopuponclick) option.
          // @option className: String = ''
          // A custom CSS class name to assign to the popup.
          className: ""
        },
        // @namespace Popup
        // @method openOn(map: Map): this
        // Alternative to `map.openPopup(popup)`.
        // Adds the popup to the map and closes the previous one.
        openOn: function(i) {
          return i = arguments.length ? i : this._source._map, !i.hasLayer(this) && i._popup && i._popup.options.autoClose && i.removeLayer(i._popup), i._popup = this, Le.prototype.openOn.call(this, i);
        },
        onAdd: function(i) {
          Le.prototype.onAdd.call(this, i), i.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, !0), this._source instanceof _i || this._source.on("preclick", ii));
        },
        onRemove: function(i) {
          Le.prototype.onRemove.call(this, i), i.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, !0), this._source instanceof _i || this._source.off("preclick", ii));
        },
        getEvents: function() {
          var i = Le.prototype.getEvents.call(this);
          return (this.options.closeOnClick !== void 0 ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (i.preclick = this.close), this.options.keepInView && (i.moveend = this._adjustPan), i;
        },
        _initLayout: function() {
          var i = "leaflet-popup", a = this._container = xt(
            "div",
            i + " " + (this.options.className || "") + " leaflet-zoom-animated"
          ), o = this._wrapper = xt("div", i + "-content-wrapper", a);
          if (this._contentNode = xt("div", i + "-content", o), sn(a), hi(this._contentNode), dt(a, "contextmenu", ii), this._tipContainer = xt("div", i + "-tip-container", a), this._tip = xt("div", i + "-tip", this._tipContainer), this.options.closeButton) {
            var u = this._closeButton = xt("a", i + "-close-button", a);
            u.setAttribute("role", "button"), u.setAttribute("aria-label", "Close popup"), u.href = "#close", u.innerHTML = '<span aria-hidden="true">&#215;</span>', dt(u, "click", function(c) {
              ne(c), this.close();
            }, this);
          }
        },
        _updateLayout: function() {
          var i = this._contentNode, a = i.style;
          a.width = "", a.whiteSpace = "nowrap";
          var o = i.offsetWidth;
          o = Math.min(o, this.options.maxWidth), o = Math.max(o, this.options.minWidth), a.width = o + 1 + "px", a.whiteSpace = "", a.height = "";
          var u = i.offsetHeight, c = this.options.maxHeight, d = "leaflet-popup-scrolled";
          c && u > c ? (a.height = c + "px", _t(i, d)) : te(i, d), this._containerWidth = this._container.offsetWidth;
        },
        _animateZoom: function(i) {
          var a = this._map._latLngToNewLayerPoint(this._latlng, i.zoom, i.center), o = this._getAnchor();
          Jt(this._container, a.add(o));
        },
        _adjustPan: function() {
          if (this.options.autoPan) {
            if (this._map._panAnim && this._map._panAnim.stop(), this._autopanning) {
              this._autopanning = !1;
              return;
            }
            var i = this._map, a = parseInt(ya(this._container, "marginBottom"), 10) || 0, o = this._container.offsetHeight + a, u = this._containerWidth, c = new K(this._containerLeft, -o - this._containerBottom);
            c._add(Ui(this._container));
            var d = i.layerPointToContainerPoint(c), y = nt(this.options.autoPanPadding), C = nt(this.options.autoPanPaddingTopLeft || y), D = nt(this.options.autoPanPaddingBottomRight || y), V = i.getSize(), et = 0, ut = 0;
            d.x + u + D.x > V.x && (et = d.x + u - V.x + D.x), d.x - et - C.x < 0 && (et = d.x - C.x), d.y + o + D.y > V.y && (ut = d.y + o - V.y + D.y), d.y - ut - C.y < 0 && (ut = d.y - C.y), (et || ut) && (this.options.keepInView && (this._autopanning = !0), i.fire("autopanstart").panBy([et, ut]));
          }
        },
        _getAnchor: function() {
          return nt(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
        }
      }), kr = function(i, a) {
        return new Ba(i, a);
      };
      Et.mergeOptions({
        closePopupOnClick: !0
      }), Et.include({
        // @method openPopup(popup: Popup): this
        // Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
        // @alternative
        // @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
        // Creates a popup with the specified content and options and opens it in the given point on a map.
        openPopup: function(i, a, o) {
          return this._initOverlay(Ba, i, a, o).openOn(this), this;
        },
        // @method closePopup(popup?: Popup): this
        // Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
        closePopup: function(i) {
          return i = arguments.length ? i : this._popup, i && i.close(), this;
        }
      }), ni.include({
        // @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
        // Binds a popup to the layer with the passed `content` and sets up the
        // necessary event listeners. If a `Function` is passed it will receive
        // the layer as the first argument and should return a `String` or `HTMLElement`.
        bindPopup: function(i, a) {
          return this._popup = this._initOverlay(Ba, this._popup, i, a), this._popupHandlersAdded || (this.on({
            click: this._openPopup,
            keypress: this._onKeyPress,
            remove: this.closePopup,
            move: this._movePopup
          }), this._popupHandlersAdded = !0), this;
        },
        // @method unbindPopup(): this
        // Removes the popup previously bound with `bindPopup`.
        unbindPopup: function() {
          return this._popup && (this.off({
            click: this._openPopup,
            keypress: this._onKeyPress,
            remove: this.closePopup,
            move: this._movePopup
          }), this._popupHandlersAdded = !1, this._popup = null), this;
        },
        // @method openPopup(latlng?: LatLng): this
        // Opens the bound popup at the specified `latlng` or at the default popup anchor if no `latlng` is passed.
        openPopup: function(i) {
          return this._popup && (this instanceof mi || (this._popup._source = this), this._popup._prepareOpen(i || this._latlng) && this._popup.openOn(this._map)), this;
        },
        // @method closePopup(): this
        // Closes the popup bound to this layer if it is open.
        closePopup: function() {
          return this._popup && this._popup.close(), this;
        },
        // @method togglePopup(): this
        // Opens or closes the popup bound to this layer depending on its current state.
        togglePopup: function() {
          return this._popup && this._popup.toggle(this), this;
        },
        // @method isPopupOpen(): boolean
        // Returns `true` if the popup bound to this layer is currently open.
        isPopupOpen: function() {
          return this._popup ? this._popup.isOpen() : !1;
        },
        // @method setPopupContent(content: String|HTMLElement|Popup): this
        // Sets the content of the popup bound to this layer.
        setPopupContent: function(i) {
          return this._popup && this._popup.setContent(i), this;
        },
        // @method getPopup(): Popup
        // Returns the popup bound to this layer.
        getPopup: function() {
          return this._popup;
        },
        _openPopup: function(i) {
          if (!(!this._popup || !this._map)) {
            Hi(i);
            var a = i.layer || i.target;
            if (this._popup._source === a && !(a instanceof _i)) {
              this._map.hasLayer(this._popup) ? this.closePopup() : this.openPopup(i.latlng);
              return;
            }
            this._popup._source = a, this.openPopup(i.latlng);
          }
        },
        _movePopup: function(i) {
          this._popup.setLatLng(i.latlng);
        },
        _onKeyPress: function(i) {
          i.originalEvent.keyCode === 13 && this._openPopup(i);
        }
      });
      var Za = Le.extend({
        // @section
        // @aka Tooltip options
        options: {
          // @option pane: String = 'tooltipPane'
          // `Map pane` where the tooltip will be added.
          pane: "tooltipPane",
          // @option offset: Point = Point(0, 0)
          // Optional offset of the tooltip position.
          offset: [0, 0],
          // @option direction: String = 'auto'
          // Direction where to open the tooltip. Possible values are: `right`, `left`,
          // `top`, `bottom`, `center`, `auto`.
          // `auto` will dynamically switch between `right` and `left` according to the tooltip
          // position on the map.
          direction: "auto",
          // @option permanent: Boolean = false
          // Whether to open the tooltip permanently or only on mouseover.
          permanent: !1,
          // @option sticky: Boolean = false
          // If true, the tooltip will follow the mouse instead of being fixed at the feature center.
          sticky: !1,
          // @option opacity: Number = 0.9
          // Tooltip container opacity.
          opacity: 0.9
        },
        onAdd: function(i) {
          Le.prototype.onAdd.call(this, i), this.setOpacity(this.options.opacity), i.fire("tooltipopen", { tooltip: this }), this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", { tooltip: this }, !0));
        },
        onRemove: function(i) {
          Le.prototype.onRemove.call(this, i), i.fire("tooltipclose", { tooltip: this }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", { tooltip: this }, !0));
        },
        getEvents: function() {
          var i = Le.prototype.getEvents.call(this);
          return this.options.permanent || (i.preclick = this.close), i;
        },
        _initLayout: function() {
          var i = "leaflet-tooltip", a = i + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
          this._contentNode = this._container = xt("div", a), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + _(this));
        },
        _updateLayout: function() {
        },
        _adjustPan: function() {
        },
        _setPosition: function(i) {
          var a, o, u = this._map, c = this._container, d = u.latLngToContainerPoint(u.getCenter()), y = u.layerPointToContainerPoint(i), C = this.options.direction, D = c.offsetWidth, V = c.offsetHeight, et = nt(this.options.offset), ut = this._getAnchor();
          C === "top" ? (a = D / 2, o = V) : C === "bottom" ? (a = D / 2, o = 0) : C === "center" ? (a = D / 2, o = V / 2) : C === "right" ? (a = 0, o = V / 2) : C === "left" ? (a = D, o = V / 2) : y.x < d.x ? (C = "right", a = 0, o = V / 2) : (C = "left", a = D + (et.x + ut.x) * 2, o = V / 2), i = i.subtract(nt(a, o, !0)).add(et).add(ut), te(c, "leaflet-tooltip-right"), te(c, "leaflet-tooltip-left"), te(c, "leaflet-tooltip-top"), te(c, "leaflet-tooltip-bottom"), _t(c, "leaflet-tooltip-" + C), Jt(c, i);
        },
        _updatePosition: function() {
          var i = this._map.latLngToLayerPoint(this._latlng);
          this._setPosition(i);
        },
        setOpacity: function(i) {
          this.options.opacity = i, this._container && Ft(this._container, i);
        },
        _animateZoom: function(i) {
          var a = this._map._latLngToNewLayerPoint(this._latlng, i.zoom, i.center);
          this._setPosition(a);
        },
        _getAnchor: function() {
          return nt(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
        }
      }), Is = function(i, a) {
        return new Za(i, a);
      };
      Et.include({
        // @method openTooltip(tooltip: Tooltip): this
        // Opens the specified tooltip.
        // @alternative
        // @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
        // Creates a tooltip with the specified content and options and open it.
        openTooltip: function(i, a, o) {
          return this._initOverlay(Za, i, a, o).openOn(this), this;
        },
        // @method closeTooltip(tooltip: Tooltip): this
        // Closes the tooltip given as parameter.
        closeTooltip: function(i) {
          return i.close(), this;
        }
      }), ni.include({
        // @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
        // Binds a tooltip to the layer with the passed `content` and sets up the
        // necessary event listeners. If a `Function` is passed it will receive
        // the layer as the first argument and should return a `String` or `HTMLElement`.
        bindTooltip: function(i, a) {
          return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(), this._tooltip = this._initOverlay(Za, this._tooltip, i, a), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
        },
        // @method unbindTooltip(): this
        // Removes the tooltip previously bound with `bindTooltip`.
        unbindTooltip: function() {
          return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this;
        },
        _initTooltipInteractions: function(i) {
          if (!(!i && this._tooltipHandlersAdded)) {
            var a = i ? "off" : "on", o = {
              remove: this.closeTooltip,
              move: this._moveTooltip
            };
            this._tooltip.options.permanent ? o.add = this._openTooltip : (o.mouseover = this._openTooltip, o.mouseout = this.closeTooltip, o.click = this._openTooltip, this._map ? this._addFocusListeners() : o.add = this._addFocusListeners), this._tooltip.options.sticky && (o.mousemove = this._moveTooltip), this[a](o), this._tooltipHandlersAdded = !i;
          }
        },
        // @method openTooltip(latlng?: LatLng): this
        // Opens the bound tooltip at the specified `latlng` or at the default tooltip anchor if no `latlng` is passed.
        openTooltip: function(i) {
          return this._tooltip && (this instanceof mi || (this._tooltip._source = this), this._tooltip._prepareOpen(i) && (this._tooltip.openOn(this._map), this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))), this;
        },
        // @method closeTooltip(): this
        // Closes the tooltip bound to this layer if it is open.
        closeTooltip: function() {
          if (this._tooltip)
            return this._tooltip.close();
        },
        // @method toggleTooltip(): this
        // Opens or closes the tooltip bound to this layer depending on its current state.
        toggleTooltip: function() {
          return this._tooltip && this._tooltip.toggle(this), this;
        },
        // @method isTooltipOpen(): boolean
        // Returns `true` if the tooltip bound to this layer is currently open.
        isTooltipOpen: function() {
          return this._tooltip.isOpen();
        },
        // @method setTooltipContent(content: String|HTMLElement|Tooltip): this
        // Sets the content of the tooltip bound to this layer.
        setTooltipContent: function(i) {
          return this._tooltip && this._tooltip.setContent(i), this;
        },
        // @method getTooltip(): Tooltip
        // Returns the tooltip bound to this layer.
        getTooltip: function() {
          return this._tooltip;
        },
        _addFocusListeners: function() {
          this.getElement ? this._addFocusListenersOnLayer(this) : this.eachLayer && this.eachLayer(this._addFocusListenersOnLayer, this);
        },
        _addFocusListenersOnLayer: function(i) {
          var a = typeof i.getElement == "function" && i.getElement();
          a && (dt(a, "focus", function() {
            this._tooltip._source = i, this.openTooltip();
          }, this), dt(a, "blur", this.closeTooltip, this));
        },
        _setAriaDescribedByOnLayer: function(i) {
          var a = typeof i.getElement == "function" && i.getElement();
          a && a.setAttribute("aria-describedby", this._tooltip._container.id);
        },
        _openTooltip: function(i) {
          if (!(!this._tooltip || !this._map)) {
            if (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag) {
              this._openOnceFlag = !0;
              var a = this;
              this._map.once("moveend", function() {
                a._openOnceFlag = !1, a._openTooltip(i);
              });
              return;
            }
            this._tooltip._source = i.layer || i.target, this.openTooltip(this._tooltip.options.sticky ? i.latlng : void 0);
          }
        },
        _moveTooltip: function(i) {
          var a = i.latlng, o, u;
          this._tooltip.options.sticky && i.originalEvent && (o = this._map.mouseEventToContainerPoint(i.originalEvent), u = this._map.containerPointToLayerPoint(o), a = this._map.layerPointToLatLng(u)), this._tooltip.setLatLng(a);
        }
      });
      var Nr = pi.extend({
        options: {
          // @section
          // @aka DivIcon options
          iconSize: [12, 12],
          // also can be set through CSS
          // iconAnchor: (Point),
          // popupAnchor: (Point),
          // @option html: String|HTMLElement = ''
          // Custom HTML code to put inside the div element, empty by default. Alternatively,
          // an instance of `HTMLElement`.
          html: !1,
          // @option bgPos: Point = [0, 0]
          // Optional relative position of the background, in pixels
          bgPos: null,
          className: "leaflet-div-icon"
        },
        createIcon: function(i) {
          var a = i && i.tagName === "DIV" ? i : document.createElement("div"), o = this.options;
          if (o.html instanceof Element ? (Ge(a), a.appendChild(o.html)) : a.innerHTML = o.html !== !1 ? o.html : "", o.bgPos) {
            var u = nt(o.bgPos);
            a.style.backgroundPosition = -u.x + "px " + -u.y + "px";
          }
          return this._setIconStyles(a, "icon"), a;
        },
        createShadow: function() {
          return null;
        }
      });
      function Fs(i) {
        return new Nr(i);
      }
      pi.Default = Ca;
      var jn = ni.extend({
        // @section
        // @aka GridLayer options
        options: {
          // @option tileSize: Number|Point = 256
          // Width and height of tiles in the grid. Use a number if width and height are equal, or `L.point(width, height)` otherwise.
          tileSize: 256,
          // @option opacity: Number = 1.0
          // Opacity of the tiles. Can be used in the `createTile()` function.
          opacity: 1,
          // @option updateWhenIdle: Boolean = (depends)
          // Load new tiles only when panning ends.
          // `true` by default on mobile browsers, in order to avoid too many requests and keep smooth navigation.
          // `false` otherwise in order to display new tiles _during_ panning, since it is easy to pan outside the
          // [`keepBuffer`](#gridlayer-keepbuffer) option in desktop browsers.
          updateWhenIdle: st.mobile,
          // @option updateWhenZooming: Boolean = true
          // By default, a smooth zoom animation (during a [touch zoom](#map-touchzoom) or a [`flyTo()`](#map-flyto)) will update grid layers every integer zoom level. Setting this option to `false` will update the grid layer only when the smooth animation ends.
          updateWhenZooming: !0,
          // @option updateInterval: Number = 200
          // Tiles will not update more than once every `updateInterval` milliseconds when panning.
          updateInterval: 200,
          // @option zIndex: Number = 1
          // The explicit zIndex of the tile layer.
          zIndex: 1,
          // @option bounds: LatLngBounds = undefined
          // If set, tiles will only be loaded inside the set `LatLngBounds`.
          bounds: null,
          // @option minZoom: Number = 0
          // The minimum zoom level down to which this layer will be displayed (inclusive).
          minZoom: 0,
          // @option maxZoom: Number = undefined
          // The maximum zoom level up to which this layer will be displayed (inclusive).
          maxZoom: void 0,
          // @option maxNativeZoom: Number = undefined
          // Maximum zoom number the tile source has available. If it is specified,
          // the tiles on all zoom levels higher than `maxNativeZoom` will be loaded
          // from `maxNativeZoom` level and auto-scaled.
          maxNativeZoom: void 0,
          // @option minNativeZoom: Number = undefined
          // Minimum zoom number the tile source has available. If it is specified,
          // the tiles on all zoom levels lower than `minNativeZoom` will be loaded
          // from `minNativeZoom` level and auto-scaled.
          minNativeZoom: void 0,
          // @option noWrap: Boolean = false
          // Whether the layer is wrapped around the antimeridian. If `true`, the
          // GridLayer will only be displayed once at low zoom levels. Has no
          // effect when the [map CRS](#map-crs) doesn't wrap around. Can be used
          // in combination with [`bounds`](#gridlayer-bounds) to prevent requesting
          // tiles outside the CRS limits.
          noWrap: !1,
          // @option pane: String = 'tilePane'
          // `Map pane` where the grid layer will be added.
          pane: "tilePane",
          // @option className: String = ''
          // A custom class name to assign to the tile layer. Empty by default.
          className: "",
          // @option keepBuffer: Number = 2
          // When panning the map, keep this many rows and columns of tiles before unloading them.
          keepBuffer: 2
        },
        initialize: function(i) {
          Y(this, i);
        },
        onAdd: function() {
          this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView();
        },
        beforeAdd: function(i) {
          i._addZoomLimit(this);
        },
        onRemove: function(i) {
          this._removeAllTiles(), Yt(this._container), i._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
        },
        // @method bringToFront: this
        // Brings the tile layer to the top of all tile layers.
        bringToFront: function() {
          return this._map && (ve(this._container), this._setAutoZIndex(Math.max)), this;
        },
        // @method bringToBack: this
        // Brings the tile layer to the bottom of all tile layers.
        bringToBack: function() {
          return this._map && (on(this._container), this._setAutoZIndex(Math.min)), this;
        },
        // @method getContainer: HTMLElement
        // Returns the HTML element that contains the tiles for this layer.
        getContainer: function() {
          return this._container;
        },
        // @method setOpacity(opacity: Number): this
        // Changes the [opacity](#gridlayer-opacity) of the grid layer.
        setOpacity: function(i) {
          return this.options.opacity = i, this._updateOpacity(), this;
        },
        // @method setZIndex(zIndex: Number): this
        // Changes the [zIndex](#gridlayer-zindex) of the grid layer.
        setZIndex: function(i) {
          return this.options.zIndex = i, this._updateZIndex(), this;
        },
        // @method isLoading: Boolean
        // Returns `true` if any tile in the grid layer has not finished loading.
        isLoading: function() {
          return this._loading;
        },
        // @method redraw: this
        // Causes the layer to clear all the tiles and request them again.
        redraw: function() {
          if (this._map) {
            this._removeAllTiles();
            var i = this._clampZoom(this._map.getZoom());
            i !== this._tileZoom && (this._tileZoom = i, this._updateLevels()), this._update();
          }
          return this;
        },
        getEvents: function() {
          var i = {
            viewprereset: this._invalidateAll,
            viewreset: this._resetView,
            zoom: this._resetView,
            moveend: this._onMoveEnd
          };
          return this.options.updateWhenIdle || (this._onMove || (this._onMove = v(this._onMoveEnd, this.options.updateInterval, this)), i.move = this._onMove), this._zoomAnimated && (i.zoomanim = this._animateZoom), i;
        },
        // @section Extension methods
        // Layers extending `GridLayer` shall reimplement the following method.
        // @method createTile(coords: Object, done?: Function): HTMLElement
        // Called only internally, must be overridden by classes extending `GridLayer`.
        // Returns the `HTMLElement` corresponding to the given `coords`. If the `done` callback
        // is specified, it must be called when the tile has finished loading and drawing.
        createTile: function() {
          return document.createElement("div");
        },
        // @section
        // @method getTileSize: Point
        // Normalizes the [tileSize option](#gridlayer-tilesize) into a point. Used by the `createTile()` method.
        getTileSize: function() {
          var i = this.options.tileSize;
          return i instanceof K ? i : new K(i, i);
        },
        _updateZIndex: function() {
          this._container && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._container.style.zIndex = this.options.zIndex);
        },
        _setAutoZIndex: function(i) {
          for (var a = this.getPane().children, o = -i(-1 / 0, 1 / 0), u = 0, c = a.length, d; u < c; u++)
            d = a[u].style.zIndex, a[u] !== this._container && d && (o = i(o, +d));
          isFinite(o) && (this.options.zIndex = o + i(-1, 1), this._updateZIndex());
        },
        _updateOpacity: function() {
          if (this._map && !st.ielt9) {
            Ft(this._container, this.options.opacity);
            var i = +/* @__PURE__ */ new Date(), a = !1, o = !1;
            for (var u in this._tiles) {
              var c = this._tiles[u];
              if (!(!c.current || !c.loaded)) {
                var d = Math.min(1, (i - c.loaded) / 200);
                Ft(c.el, d), d < 1 ? a = !0 : (c.active ? o = !0 : this._onOpaqueTile(c), c.active = !0);
              }
            }
            o && !this._noPrune && this._pruneTiles(), a && (Mt(this._fadeFrame), this._fadeFrame = Pt(this._updateOpacity, this));
          }
        },
        _onOpaqueTile: E,
        _initContainer: function() {
          this._container || (this._container = xt("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
        },
        _updateLevels: function() {
          var i = this._tileZoom, a = this.options.maxZoom;
          if (i !== void 0) {
            for (var o in this._levels)
              o = Number(o), this._levels[o].el.children.length || o === i ? (this._levels[o].el.style.zIndex = a - Math.abs(i - o), this._onUpdateLevel(o)) : (Yt(this._levels[o].el), this._removeTilesAtZoom(o), this._onRemoveLevel(o), delete this._levels[o]);
            var u = this._levels[i], c = this._map;
            return u || (u = this._levels[i] = {}, u.el = xt("div", "leaflet-tile-container leaflet-zoom-animated", this._container), u.el.style.zIndex = a, u.origin = c.project(c.unproject(c.getPixelOrigin()), i).round(), u.zoom = i, this._setZoomTransform(u, c.getCenter(), c.getZoom()), E(u.el.offsetWidth), this._onCreateLevel(u)), this._level = u, u;
          }
        },
        _onUpdateLevel: E,
        _onRemoveLevel: E,
        _onCreateLevel: E,
        _pruneTiles: function() {
          if (this._map) {
            var i, a, o = this._map.getZoom();
            if (o > this.options.maxZoom || o < this.options.minZoom) {
              this._removeAllTiles();
              return;
            }
            for (i in this._tiles)
              a = this._tiles[i], a.retain = a.current;
            for (i in this._tiles)
              if (a = this._tiles[i], a.current && !a.active) {
                var u = a.coords;
                this._retainParent(u.x, u.y, u.z, u.z - 5) || this._retainChildren(u.x, u.y, u.z, u.z + 2);
              }
            for (i in this._tiles)
              this._tiles[i].retain || this._removeTile(i);
          }
        },
        _removeTilesAtZoom: function(i) {
          for (var a in this._tiles)
            this._tiles[a].coords.z === i && this._removeTile(a);
        },
        _removeAllTiles: function() {
          for (var i in this._tiles)
            this._removeTile(i);
        },
        _invalidateAll: function() {
          for (var i in this._levels)
            Yt(this._levels[i].el), this._onRemoveLevel(Number(i)), delete this._levels[i];
          this._removeAllTiles(), this._tileZoom = void 0;
        },
        _retainParent: function(i, a, o, u) {
          var c = Math.floor(i / 2), d = Math.floor(a / 2), y = o - 1, C = new K(+c, +d);
          C.z = +y;
          var D = this._tileCoordsToKey(C), V = this._tiles[D];
          return V && V.active ? (V.retain = !0, !0) : (V && V.loaded && (V.retain = !0), y > u ? this._retainParent(c, d, y, u) : !1);
        },
        _retainChildren: function(i, a, o, u) {
          for (var c = 2 * i; c < 2 * i + 2; c++)
            for (var d = 2 * a; d < 2 * a + 2; d++) {
              var y = new K(c, d);
              y.z = o + 1;
              var C = this._tileCoordsToKey(y), D = this._tiles[C];
              if (D && D.active) {
                D.retain = !0;
                continue;
              } else D && D.loaded && (D.retain = !0);
              o + 1 < u && this._retainChildren(c, d, o + 1, u);
            }
        },
        _resetView: function(i) {
          var a = i && (i.pinch || i.flyTo);
          this._setView(this._map.getCenter(), this._map.getZoom(), a, a);
        },
        _animateZoom: function(i) {
          this._setView(i.center, i.zoom, !0, i.noUpdate);
        },
        _clampZoom: function(i) {
          var a = this.options;
          return a.minNativeZoom !== void 0 && i < a.minNativeZoom ? a.minNativeZoom : a.maxNativeZoom !== void 0 && a.maxNativeZoom < i ? a.maxNativeZoom : i;
        },
        _setView: function(i, a, o, u) {
          var c = Math.round(a);
          this.options.maxZoom !== void 0 && c > this.options.maxZoom || this.options.minZoom !== void 0 && c < this.options.minZoom ? c = void 0 : c = this._clampZoom(c);
          var d = this.options.updateWhenZooming && c !== this._tileZoom;
          (!u || d) && (this._tileZoom = c, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), c !== void 0 && this._update(i), o || this._pruneTiles(), this._noPrune = !!o), this._setZoomTransforms(i, a);
        },
        _setZoomTransforms: function(i, a) {
          for (var o in this._levels)
            this._setZoomTransform(this._levels[o], i, a);
        },
        _setZoomTransform: function(i, a, o) {
          var u = this._map.getZoomScale(o, i.zoom), c = i.origin.multiplyBy(u).subtract(this._map._getNewPixelOrigin(a, o)).round();
          st.any3d ? Ti(i.el, c, u) : Jt(i.el, c);
        },
        _resetGrid: function() {
          var i = this._map, a = i.options.crs, o = this._tileSize = this.getTileSize(), u = this._tileZoom, c = this._map.getPixelWorldBounds(this._tileZoom);
          c && (this._globalTileRange = this._pxBoundsToTileRange(c)), this._wrapX = a.wrapLng && !this.options.noWrap && [
            Math.floor(i.project([0, a.wrapLng[0]], u).x / o.x),
            Math.ceil(i.project([0, a.wrapLng[1]], u).x / o.y)
          ], this._wrapY = a.wrapLat && !this.options.noWrap && [
            Math.floor(i.project([a.wrapLat[0], 0], u).y / o.x),
            Math.ceil(i.project([a.wrapLat[1], 0], u).y / o.y)
          ];
        },
        _onMoveEnd: function() {
          !this._map || this._map._animatingZoom || this._update();
        },
        _getTiledPixelBounds: function(i) {
          var a = this._map, o = a._animatingZoom ? Math.max(a._animateToZoom, a.getZoom()) : a.getZoom(), u = a.getZoomScale(o, this._tileZoom), c = a.project(i, this._tileZoom).floor(), d = a.getSize().divideBy(u * 2);
          return new S(c.subtract(d), c.add(d));
        },
        // Private method to load tiles in the grid's active zoom level according to map bounds
        _update: function(i) {
          var a = this._map;
          if (a) {
            var o = this._clampZoom(a.getZoom());
            if (i === void 0 && (i = a.getCenter()), this._tileZoom !== void 0) {
              var u = this._getTiledPixelBounds(i), c = this._pxBoundsToTileRange(u), d = c.getCenter(), y = [], C = this.options.keepBuffer, D = new S(
                c.getBottomLeft().subtract([C, -C]),
                c.getTopRight().add([C, -C])
              );
              if (!(isFinite(c.min.x) && isFinite(c.min.y) && isFinite(c.max.x) && isFinite(c.max.y)))
                throw new Error("Attempted to load an infinite number of tiles");
              for (var V in this._tiles) {
                var et = this._tiles[V].coords;
                (et.z !== this._tileZoom || !D.contains(new K(et.x, et.y))) && (this._tiles[V].current = !1);
              }
              if (Math.abs(o - this._tileZoom) > 1) {
                this._setView(i, o);
                return;
              }
              for (var ut = c.min.y; ut <= c.max.y; ut++)
                for (var yt = c.min.x; yt <= c.max.x; yt++) {
                  var ye = new K(yt, ut);
                  if (ye.z = this._tileZoom, !!this._isValidTile(ye)) {
                    var ae = this._tiles[this._tileCoordsToKey(ye)];
                    ae ? ae.current = !0 : y.push(ye);
                  }
                }
              if (y.sort(function(kt, Nt) {
                return kt.distanceTo(d) - Nt.distanceTo(d);
              }), y.length !== 0) {
                this._loading || (this._loading = !0, this.fire("loading"));
                var Re = document.createDocumentFragment();
                for (yt = 0; yt < y.length; yt++)
                  this._addTile(y[yt], Re);
                this._level.el.appendChild(Re);
              }
            }
          }
        },
        _isValidTile: function(i) {
          var a = this._map.options.crs;
          if (!a.infinite) {
            var o = this._globalTileRange;
            if (!a.wrapLng && (i.x < o.min.x || i.x > o.max.x) || !a.wrapLat && (i.y < o.min.y || i.y > o.max.y))
              return !1;
          }
          if (!this.options.bounds)
            return !0;
          var u = this._tileCoordsToBounds(i);
          return z(this.options.bounds).overlaps(u);
        },
        _keyToBounds: function(i) {
          return this._tileCoordsToBounds(this._keyToTileCoords(i));
        },
        _tileCoordsToNwSe: function(i) {
          var a = this._map, o = this.getTileSize(), u = i.scaleBy(o), c = u.add(o), d = a.unproject(u, i.z), y = a.unproject(c, i.z);
          return [d, y];
        },
        // converts tile coordinates to its geographical bounds
        _tileCoordsToBounds: function(i) {
          var a = this._tileCoordsToNwSe(i), o = new J(a[0], a[1]);
          return this.options.noWrap || (o = this._map.wrapLatLngBounds(o)), o;
        },
        // converts tile coordinates to key for the tile cache
        _tileCoordsToKey: function(i) {
          return i.x + ":" + i.y + ":" + i.z;
        },
        // converts tile cache key to coordinates
        _keyToTileCoords: function(i) {
          var a = i.split(":"), o = new K(+a[0], +a[1]);
          return o.z = +a[2], o;
        },
        _removeTile: function(i) {
          var a = this._tiles[i];
          a && (Yt(a.el), delete this._tiles[i], this.fire("tileunload", {
            tile: a.el,
            coords: this._keyToTileCoords(i)
          }));
        },
        _initTile: function(i) {
          _t(i, "leaflet-tile");
          var a = this.getTileSize();
          i.style.width = a.x + "px", i.style.height = a.y + "px", i.onselectstart = E, i.onmousemove = E, st.ielt9 && this.options.opacity < 1 && Ft(i, this.options.opacity);
        },
        _addTile: function(i, a) {
          var o = this._getTilePos(i), u = this._tileCoordsToKey(i), c = this.createTile(this._wrapCoords(i), p(this._tileReady, this, i));
          this._initTile(c), this.createTile.length < 2 && Pt(p(this._tileReady, this, i, null, c)), Jt(c, o), this._tiles[u] = {
            el: c,
            coords: i,
            current: !0
          }, a.appendChild(c), this.fire("tileloadstart", {
            tile: c,
            coords: i
          });
        },
        _tileReady: function(i, a, o) {
          a && this.fire("tileerror", {
            error: a,
            tile: o,
            coords: i
          });
          var u = this._tileCoordsToKey(i);
          o = this._tiles[u], o && (o.loaded = +/* @__PURE__ */ new Date(), this._map._fadeAnimated ? (Ft(o.el, 0), Mt(this._fadeFrame), this._fadeFrame = Pt(this._updateOpacity, this)) : (o.active = !0, this._pruneTiles()), a || (_t(o.el, "leaflet-tile-loaded"), this.fire("tileload", {
            tile: o.el,
            coords: i
          })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), st.ielt9 || !this._map._fadeAnimated ? Pt(this._pruneTiles, this) : setTimeout(p(this._pruneTiles, this), 250)));
        },
        _getTilePos: function(i) {
          return i.scaleBy(this.getTileSize()).subtract(this._level.origin);
        },
        _wrapCoords: function(i) {
          var a = new K(
            this._wrapX ? N(i.x, this._wrapX) : i.x,
            this._wrapY ? N(i.y, this._wrapY) : i.y
          );
          return a.z = i.z, a;
        },
        _pxBoundsToTileRange: function(i) {
          var a = this.getTileSize();
          return new S(
            i.min.unscaleBy(a).floor(),
            i.max.unscaleBy(a).ceil().subtract([1, 1])
          );
        },
        _noTilesToLoad: function() {
          for (var i in this._tiles)
            if (!this._tiles[i].loaded)
              return !1;
          return !0;
        }
      });
      function Dr(i) {
        return new jn(i);
      }
      var Yi = jn.extend({
        // @section
        // @aka TileLayer options
        options: {
          // @option minZoom: Number = 0
          // The minimum zoom level down to which this layer will be displayed (inclusive).
          minZoom: 0,
          // @option maxZoom: Number = 18
          // The maximum zoom level up to which this layer will be displayed (inclusive).
          maxZoom: 18,
          // @option subdomains: String|String[] = 'abc'
          // Subdomains of the tile service. Can be passed in the form of one string (where each letter is a subdomain name) or an array of strings.
          subdomains: "abc",
          // @option errorTileUrl: String = ''
          // URL to the tile image to show in place of the tile that failed to load.
          errorTileUrl: "",
          // @option zoomOffset: Number = 0
          // The zoom number used in tile URLs will be offset with this value.
          zoomOffset: 0,
          // @option tms: Boolean = false
          // If `true`, inverses Y axis numbering for tiles (turn this on for [TMS](https://en.wikipedia.org/wiki/Tile_Map_Service) services).
          tms: !1,
          // @option zoomReverse: Boolean = false
          // If set to true, the zoom number used in tile URLs will be reversed (`maxZoom - zoom` instead of `zoom`)
          zoomReverse: !1,
          // @option detectRetina: Boolean = false
          // If `true` and user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution.
          detectRetina: !1,
          // @option crossOrigin: Boolean|String = false
          // Whether the crossOrigin attribute will be added to the tiles.
          // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
          // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
          crossOrigin: !1,
          // @option referrerPolicy: Boolean|String = false
          // Whether the referrerPolicy attribute will be added to the tiles.
          // If a String is provided, all tiles will have their referrerPolicy attribute set to the String provided.
          // This may be needed if your map's rendering context has a strict default but your tile provider expects a valid referrer
          // (e.g. to validate an API token).
          // Refer to [HTMLImageElement.referrerPolicy](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/referrerPolicy) for valid String values.
          referrerPolicy: !1
        },
        initialize: function(i, a) {
          this._url = i, a = Y(this, a), a.detectRetina && st.retina && a.maxZoom > 0 ? (a.tileSize = Math.floor(a.tileSize / 2), a.zoomReverse ? (a.zoomOffset--, a.minZoom = Math.min(a.maxZoom, a.minZoom + 1)) : (a.zoomOffset++, a.maxZoom = Math.max(a.minZoom, a.maxZoom - 1)), a.minZoom = Math.max(0, a.minZoom)) : a.zoomReverse ? a.minZoom = Math.min(a.maxZoom, a.minZoom) : a.maxZoom = Math.max(a.minZoom, a.maxZoom), typeof a.subdomains == "string" && (a.subdomains = a.subdomains.split("")), this.on("tileunload", this._onTileRemove);
        },
        // @method setUrl(url: String, noRedraw?: Boolean): this
        // Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
        // If the URL does not change, the layer will not be redrawn unless
        // the noRedraw parameter is set to false.
        setUrl: function(i, a) {
          return this._url === i && a === void 0 && (a = !0), this._url = i, a || this.redraw(), this;
        },
        // @method createTile(coords: Object, done?: Function): HTMLElement
        // Called only internally, overrides GridLayer's [`createTile()`](#gridlayer-createtile)
        // to return an `<img>` HTML element with the appropriate image URL given `coords`. The `done`
        // callback is called when the tile has been loaded.
        createTile: function(i, a) {
          var o = document.createElement("img");
          return dt(o, "load", p(this._tileOnLoad, this, a, o)), dt(o, "error", p(this._tileOnError, this, a, o)), (this.options.crossOrigin || this.options.crossOrigin === "") && (o.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), typeof this.options.referrerPolicy == "string" && (o.referrerPolicy = this.options.referrerPolicy), o.alt = "", o.src = this.getTileUrl(i), o;
        },
        // @section Extension methods
        // @uninheritable
        // Layers extending `TileLayer` might reimplement the following method.
        // @method getTileUrl(coords: Object): String
        // Called only internally, returns the URL for a tile given its coordinates.
        // Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
        getTileUrl: function(i) {
          var a = {
            r: st.retina ? "@2x" : "",
            s: this._getSubdomain(i),
            x: i.x,
            y: i.y,
            z: this._getZoomForUrl()
          };
          if (this._map && !this._map.options.crs.infinite) {
            var o = this._globalTileRange.max.y - i.y;
            this.options.tms && (a.y = o), a["-y"] = o;
          }
          return I(this._url, lt(a, this.options));
        },
        _tileOnLoad: function(i, a) {
          st.ielt9 ? setTimeout(p(i, this, null, a), 0) : i(null, a);
        },
        _tileOnError: function(i, a, o) {
          var u = this.options.errorTileUrl;
          u && a.getAttribute("src") !== u && (a.src = u), i(o, a);
        },
        _onTileRemove: function(i) {
          i.tile.onload = null;
        },
        _getZoomForUrl: function() {
          var i = this._tileZoom, a = this.options.maxZoom, o = this.options.zoomReverse, u = this.options.zoomOffset;
          return o && (i = a - i), i + u;
        },
        _getSubdomain: function(i) {
          var a = Math.abs(i.x + i.y) % this.options.subdomains.length;
          return this.options.subdomains[a];
        },
        // stops loading all tiles in the background layer
        _abortLoading: function() {
          var i, a;
          for (i in this._tiles)
            if (this._tiles[i].coords.z !== this._tileZoom && (a = this._tiles[i].el, a.onload = E, a.onerror = E, !a.complete)) {
              a.src = Gt;
              var o = this._tiles[i].coords;
              Yt(a), delete this._tiles[i], this.fire("tileabort", {
                tile: a,
                coords: o
              });
            }
        },
        _removeTile: function(i) {
          var a = this._tiles[i];
          if (a)
            return a.el.setAttribute("src", Gt), jn.prototype._removeTile.call(this, i);
        },
        _tileReady: function(i, a, o) {
          if (!(!this._map || o && o.getAttribute("src") === Gt))
            return jn.prototype._tileReady.call(this, i, a, o);
        }
      });
      function Pe(i, a) {
        return new Yi(i, a);
      }
      var Ra = Yi.extend({
        // @section
        // @aka TileLayer.WMS options
        // If any custom options not documented here are used, they will be sent to the
        // WMS server as extra parameters in each request URL. This can be useful for
        // [non-standard vendor WMS parameters](https://docs.geoserver.org/stable/en/user/services/wms/vendor.html).
        defaultWmsParams: {
          service: "WMS",
          request: "GetMap",
          // @option layers: String = ''
          // **(required)** Comma-separated list of WMS layers to show.
          layers: "",
          // @option styles: String = ''
          // Comma-separated list of WMS styles.
          styles: "",
          // @option format: String = 'image/jpeg'
          // WMS image format (use `'image/png'` for layers with transparency).
          format: "image/jpeg",
          // @option transparent: Boolean = false
          // If `true`, the WMS service will return images with transparency.
          transparent: !1,
          // @option version: String = '1.1.1'
          // Version of the WMS service to use
          version: "1.1.1"
        },
        options: {
          // @option crs: CRS = null
          // Coordinate Reference System to use for the WMS requests, defaults to
          // map CRS. Don't change this if you're not sure what it means.
          crs: null,
          // @option uppercase: Boolean = false
          // If `true`, WMS request parameter keys will be uppercase.
          uppercase: !1
        },
        initialize: function(i, a) {
          this._url = i;
          var o = lt({}, this.defaultWmsParams);
          for (var u in a)
            u in this.options || (o[u] = a[u]);
          a = Y(this, a);
          var c = a.detectRetina && st.retina ? 2 : 1, d = this.getTileSize();
          o.width = d.x * c, o.height = d.y * c, this.wmsParams = o;
        },
        onAdd: function(i) {
          this._crs = this.options.crs || i.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
          var a = this._wmsVersion >= 1.3 ? "crs" : "srs";
          this.wmsParams[a] = this._crs.code, Yi.prototype.onAdd.call(this, i);
        },
        getTileUrl: function(i) {
          var a = this._tileCoordsToNwSe(i), o = this._crs, u = G(o.project(a[0]), o.project(a[1])), c = u.min, d = u.max, y = (this._wmsVersion >= 1.3 && this._crs === mo ? [c.y, c.x, d.y, d.x] : [c.x, c.y, d.x, d.y]).join(","), C = Yi.prototype.getTileUrl.call(this, i);
          return C + ct(this.wmsParams, C, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + y;
        },
        // @method setParams(params: Object, noRedraw?: Boolean): this
        // Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
        setParams: function(i, a) {
          return lt(this.wmsParams, i), a || this.redraw(), this;
        }
      });
      function Ye(i, a) {
        return new Ra(i, a);
      }
      Yi.WMS = Ra, Pe.wms = Ye;
      var Oe = ni.extend({
        // @section
        // @aka Renderer options
        options: {
          // @option padding: Number = 0.1
          // How much to extend the clip area around the map view (relative to its size)
          // e.g. 0.1 would be 10% of map view in each direction
          padding: 0.1
        },
        initialize: function(i) {
          Y(this, i), _(this), this._layers = this._layers || {};
        },
        onAdd: function() {
          this._container || (this._initContainer(), _t(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
        },
        onRemove: function() {
          this.off("update", this._updatePaths, this), this._destroyContainer();
        },
        getEvents: function() {
          var i = {
            viewreset: this._reset,
            zoom: this._onZoom,
            moveend: this._update,
            zoomend: this._onZoomEnd
          };
          return this._zoomAnimated && (i.zoomanim = this._onAnimZoom), i;
        },
        _onAnimZoom: function(i) {
          this._updateTransform(i.center, i.zoom);
        },
        _onZoom: function() {
          this._updateTransform(this._map.getCenter(), this._map.getZoom());
        },
        _updateTransform: function(i, a) {
          var o = this._map.getZoomScale(a, this._zoom), u = this._map.getSize().multiplyBy(0.5 + this.options.padding), c = this._map.project(this._center, a), d = u.multiplyBy(-o).add(c).subtract(this._map._getNewPixelOrigin(i, a));
          st.any3d ? Ti(this._container, d, o) : Jt(this._container, d);
        },
        _reset: function() {
          this._update(), this._updateTransform(this._center, this._zoom);
          for (var i in this._layers)
            this._layers[i]._reset();
        },
        _onZoomEnd: function() {
          for (var i in this._layers)
            this._layers[i]._project();
        },
        _updatePaths: function() {
          for (var i in this._layers)
            this._layers[i]._update();
        },
        _update: function() {
          var i = this.options.padding, a = this._map.getSize(), o = this._map.containerPointToLayerPoint(a.multiplyBy(-i)).round();
          this._bounds = new S(o, o.add(a.multiplyBy(1 + i * 2)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
        }
      }), yl = Oe.extend({
        // @section
        // @aka Canvas options
        options: {
          // @option tolerance: Number = 0
          // How much to extend the click tolerance around a path/object on the map.
          tolerance: 0
        },
        getEvents: function() {
          var i = Oe.prototype.getEvents.call(this);
          return i.viewprereset = this._onViewPreReset, i;
        },
        _onViewPreReset: function() {
          this._postponeUpdatePaths = !0;
        },
        onAdd: function() {
          Oe.prototype.onAdd.call(this), this._draw();
        },
        _initContainer: function() {
          var i = this._container = document.createElement("canvas");
          dt(i, "mousemove", this._onMouseMove, this), dt(i, "click dblclick mousedown mouseup contextmenu", this._onClick, this), dt(i, "mouseout", this._handleMouseOut, this), i._leaflet_disable_events = !0, this._ctx = i.getContext("2d");
        },
        _destroyContainer: function() {
          Mt(this._redrawRequest), delete this._ctx, Yt(this._container), Ut(this._container), delete this._container;
        },
        _updatePaths: function() {
          if (!this._postponeUpdatePaths) {
            var i;
            this._redrawBounds = null;
            for (var a in this._layers)
              i = this._layers[a], i._update();
            this._redraw();
          }
        },
        _update: function() {
          if (!(this._map._animatingZoom && this._bounds)) {
            Oe.prototype._update.call(this);
            var i = this._bounds, a = this._container, o = i.getSize(), u = st.retina ? 2 : 1;
            Jt(a, i.min), a.width = u * o.x, a.height = u * o.y, a.style.width = o.x + "px", a.style.height = o.y + "px", st.retina && this._ctx.scale(2, 2), this._ctx.translate(-i.min.x, -i.min.y), this.fire("update");
          }
        },
        _reset: function() {
          Oe.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths());
        },
        _initPath: function(i) {
          this._updateDashArray(i), this._layers[_(i)] = i;
          var a = i._order = {
            layer: i,
            prev: this._drawLast,
            next: null
          };
          this._drawLast && (this._drawLast.next = a), this._drawLast = a, this._drawFirst = this._drawFirst || this._drawLast;
        },
        _addPath: function(i) {
          this._requestRedraw(i);
        },
        _removePath: function(i) {
          var a = i._order, o = a.next, u = a.prev;
          o ? o.prev = u : this._drawLast = u, u ? u.next = o : this._drawFirst = o, delete i._order, delete this._layers[_(i)], this._requestRedraw(i);
        },
        _updatePath: function(i) {
          this._extendRedrawBounds(i), i._project(), i._update(), this._requestRedraw(i);
        },
        _updateStyle: function(i) {
          this._updateDashArray(i), this._requestRedraw(i);
        },
        _updateDashArray: function(i) {
          if (typeof i.options.dashArray == "string") {
            var a = i.options.dashArray.split(/[, ]+/), o = [], u, c;
            for (c = 0; c < a.length; c++) {
              if (u = Number(a[c]), isNaN(u))
                return;
              o.push(u);
            }
            i.options._dashArray = o;
          } else
            i.options._dashArray = i.options.dashArray;
        },
        _requestRedraw: function(i) {
          this._map && (this._extendRedrawBounds(i), this._redrawRequest = this._redrawRequest || Pt(this._redraw, this));
        },
        _extendRedrawBounds: function(i) {
          if (i._pxBounds) {
            var a = (i.options.weight || 0) + 1;
            this._redrawBounds = this._redrawBounds || new S(), this._redrawBounds.extend(i._pxBounds.min.subtract([a, a])), this._redrawBounds.extend(i._pxBounds.max.add([a, a]));
          }
        },
        _redraw: function() {
          this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null;
        },
        _clear: function() {
          var i = this._redrawBounds;
          if (i) {
            var a = i.getSize();
            this._ctx.clearRect(i.min.x, i.min.y, a.x, a.y);
          } else
            this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore();
        },
        _draw: function() {
          var i, a = this._redrawBounds;
          if (this._ctx.save(), a) {
            var o = a.getSize();
            this._ctx.beginPath(), this._ctx.rect(a.min.x, a.min.y, o.x, o.y), this._ctx.clip();
          }
          this._drawing = !0;
          for (var u = this._drawFirst; u; u = u.next)
            i = u.layer, (!a || i._pxBounds && i._pxBounds.intersects(a)) && i._updatePath();
          this._drawing = !1, this._ctx.restore();
        },
        _updatePoly: function(i, a) {
          if (this._drawing) {
            var o, u, c, d, y = i._parts, C = y.length, D = this._ctx;
            if (C) {
              for (D.beginPath(), o = 0; o < C; o++) {
                for (u = 0, c = y[o].length; u < c; u++)
                  d = y[o][u], D[u ? "lineTo" : "moveTo"](d.x, d.y);
                a && D.closePath();
              }
              this._fillStroke(D, i);
            }
          }
        },
        _updateCircle: function(i) {
          if (!(!this._drawing || i._empty())) {
            var a = i._point, o = this._ctx, u = Math.max(Math.round(i._radius), 1), c = (Math.max(Math.round(i._radiusY), 1) || u) / u;
            c !== 1 && (o.save(), o.scale(1, c)), o.beginPath(), o.arc(a.x, a.y / c, u, 0, Math.PI * 2, !1), c !== 1 && o.restore(), this._fillStroke(o, i);
          }
        },
        _fillStroke: function(i, a) {
          var o = a.options;
          o.fill && (i.globalAlpha = o.fillOpacity, i.fillStyle = o.fillColor || o.color, i.fill(o.fillRule || "evenodd")), o.stroke && o.weight !== 0 && (i.setLineDash && i.setLineDash(a.options && a.options._dashArray || []), i.globalAlpha = o.opacity, i.lineWidth = o.weight, i.strokeStyle = o.color, i.lineCap = o.lineCap, i.lineJoin = o.lineJoin, i.stroke());
        },
        // Canvas obviously doesn't have mouse events for individual drawn objects,
        // so we emulate that by calculating what's under the mouse on mousemove/click manually
        _onClick: function(i) {
          for (var a = this._map.mouseEventToLayerPoint(i), o, u, c = this._drawFirst; c; c = c.next)
            o = c.layer, o.options.interactive && o._containsPoint(a) && (!(i.type === "click" || i.type === "preclick") || !this._map._draggableMoved(o)) && (u = o);
          this._fireEvent(u ? [u] : !1, i);
        },
        _onMouseMove: function(i) {
          if (!(!this._map || this._map.dragging.moving() || this._map._animatingZoom)) {
            var a = this._map.mouseEventToLayerPoint(i);
            this._handleMouseHover(i, a);
          }
        },
        _handleMouseOut: function(i) {
          var a = this._hoveredLayer;
          a && (te(this._container, "leaflet-interactive"), this._fireEvent([a], i, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1);
        },
        _handleMouseHover: function(i, a) {
          if (!this._mouseHoverThrottled) {
            for (var o, u, c = this._drawFirst; c; c = c.next)
              o = c.layer, o.options.interactive && o._containsPoint(a) && (u = o);
            u !== this._hoveredLayer && (this._handleMouseOut(i), u && (_t(this._container, "leaflet-interactive"), this._fireEvent([u], i, "mouseover"), this._hoveredLayer = u)), this._fireEvent(this._hoveredLayer ? [this._hoveredLayer] : !1, i), this._mouseHoverThrottled = !0, setTimeout(p(function() {
              this._mouseHoverThrottled = !1;
            }, this), 32);
          }
        },
        _fireEvent: function(i, a, o) {
          this._map._fireDOMEvent(a, o || a.type, i);
        },
        _bringToFront: function(i) {
          var a = i._order;
          if (a) {
            var o = a.next, u = a.prev;
            if (o)
              o.prev = u;
            else
              return;
            u ? u.next = o : o && (this._drawFirst = o), a.prev = this._drawLast, this._drawLast.next = a, a.next = null, this._drawLast = a, this._requestRedraw(i);
          }
        },
        _bringToBack: function(i) {
          var a = i._order;
          if (a) {
            var o = a.next, u = a.prev;
            if (u)
              u.next = o;
            else
              return;
            o ? o.prev = u : u && (this._drawLast = u), a.prev = null, a.next = this._drawFirst, this._drawFirst.prev = a, this._drawFirst = a, this._requestRedraw(i);
          }
        }
      });
      function Ua(i) {
        return st.canvas ? new yl(i) : null;
      }
      var Vi = (function() {
        try {
          return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function(i) {
            return document.createElement("<lvml:" + i + ' class="lvml">');
          };
        } catch {
        }
        return function(i) {
          return document.createElement("<" + i + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
        };
      })(), po = {
        _initContainer: function() {
          this._container = xt("div", "leaflet-vml-container");
        },
        _update: function() {
          this._map._animatingZoom || (Oe.prototype._update.call(this), this.fire("update"));
        },
        _initPath: function(i) {
          var a = i._container = Vi("shape");
          _t(a, "leaflet-vml-shape " + (this.options.className || "")), a.coordsize = "1 1", i._path = Vi("path"), a.appendChild(i._path), this._updateStyle(i), this._layers[_(i)] = i;
        },
        _addPath: function(i) {
          var a = i._container;
          this._container.appendChild(a), i.options.interactive && i.addInteractiveTarget(a);
        },
        _removePath: function(i) {
          var a = i._container;
          Yt(a), i.removeInteractiveTarget(a), delete this._layers[_(i)];
        },
        _updateStyle: function(i) {
          var a = i._stroke, o = i._fill, u = i.options, c = i._container;
          c.stroked = !!u.stroke, c.filled = !!u.fill, u.stroke ? (a || (a = i._stroke = Vi("stroke")), c.appendChild(a), a.weight = u.weight + "px", a.color = u.color, a.opacity = u.opacity, u.dashArray ? a.dashStyle = at(u.dashArray) ? u.dashArray.join(" ") : u.dashArray.replace(/( *, *)/g, " ") : a.dashStyle = "", a.endcap = u.lineCap.replace("butt", "flat"), a.joinstyle = u.lineJoin) : a && (c.removeChild(a), i._stroke = null), u.fill ? (o || (o = i._fill = Vi("fill")), c.appendChild(o), o.color = u.fillColor || u.color, o.opacity = u.fillOpacity) : o && (c.removeChild(o), i._fill = null);
        },
        _updateCircle: function(i) {
          var a = i._point.round(), o = Math.round(i._radius), u = Math.round(i._radiusY || o);
          this._setPath(i, i._empty() ? "M0 0" : "AL " + a.x + "," + a.y + " " + o + "," + u + " 0," + 65535 * 360);
        },
        _setPath: function(i, a) {
          i._path.v = a;
        },
        _bringToFront: function(i) {
          ve(i._container);
        },
        _bringToBack: function(i) {
          on(i._container);
        }
      }, gi = st.vml ? Vi : $a, Pn = Oe.extend({
        _initContainer: function() {
          this._container = gi("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = gi("g"), this._container.appendChild(this._rootGroup);
        },
        _destroyContainer: function() {
          Yt(this._container), Ut(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
        },
        _update: function() {
          if (!(this._map._animatingZoom && this._bounds)) {
            Oe.prototype._update.call(this);
            var i = this._bounds, a = i.getSize(), o = this._container;
            (!this._svgSize || !this._svgSize.equals(a)) && (this._svgSize = a, o.setAttribute("width", a.x), o.setAttribute("height", a.y)), Jt(o, i.min), o.setAttribute("viewBox", [i.min.x, i.min.y, a.x, a.y].join(" ")), this.fire("update");
          }
        },
        // methods below are called by vector layers implementations
        _initPath: function(i) {
          var a = i._path = gi("path");
          i.options.className && _t(a, i.options.className), i.options.interactive && _t(a, "leaflet-interactive"), this._updateStyle(i), this._layers[_(i)] = i;
        },
        _addPath: function(i) {
          this._rootGroup || this._initContainer(), this._rootGroup.appendChild(i._path), i.addInteractiveTarget(i._path);
        },
        _removePath: function(i) {
          Yt(i._path), i.removeInteractiveTarget(i._path), delete this._layers[_(i)];
        },
        _updatePath: function(i) {
          i._project(), i._update();
        },
        _updateStyle: function(i) {
          var a = i._path, o = i.options;
          a && (o.stroke ? (a.setAttribute("stroke", o.color), a.setAttribute("stroke-opacity", o.opacity), a.setAttribute("stroke-width", o.weight), a.setAttribute("stroke-linecap", o.lineCap), a.setAttribute("stroke-linejoin", o.lineJoin), o.dashArray ? a.setAttribute("stroke-dasharray", o.dashArray) : a.removeAttribute("stroke-dasharray"), o.dashOffset ? a.setAttribute("stroke-dashoffset", o.dashOffset) : a.removeAttribute("stroke-dashoffset")) : a.setAttribute("stroke", "none"), o.fill ? (a.setAttribute("fill", o.fillColor || o.color), a.setAttribute("fill-opacity", o.fillOpacity), a.setAttribute("fill-rule", o.fillRule || "evenodd")) : a.setAttribute("fill", "none"));
        },
        _updatePoly: function(i, a) {
          this._setPath(i, tl(i._parts, a));
        },
        _updateCircle: function(i) {
          var a = i._point, o = Math.max(Math.round(i._radius), 1), u = Math.max(Math.round(i._radiusY), 1) || o, c = "a" + o + "," + u + " 0 1,0 ", d = i._empty() ? "M0 0" : "M" + (a.x - o) + "," + a.y + c + o * 2 + ",0 " + c + -o * 2 + ",0 ";
          this._setPath(i, d);
        },
        _setPath: function(i, a) {
          i._path.setAttribute("d", a);
        },
        // SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
        _bringToFront: function(i) {
          ve(i._path);
        },
        _bringToBack: function(i) {
          on(i._path);
        }
      });
      st.vml && Pn.include(po);
      function Ha(i) {
        return st.svg || st.vml ? new Pn(i) : null;
      }
      Et.include({
        // @namespace Map; @method getRenderer(layer: Path): Renderer
        // Returns the instance of `Renderer` that should be used to render the given
        // `Path`. It will ensure that the `renderer` options of the map and paths
        // are respected, and that the renderers do exist on the map.
        getRenderer: function(i) {
          var a = i.options.renderer || this._getPaneRenderer(i.options.pane) || this.options.renderer || this._renderer;
          return a || (a = this._renderer = this._createRenderer()), this.hasLayer(a) || this.addLayer(a), a;
        },
        _getPaneRenderer: function(i) {
          if (i === "overlayPane" || i === void 0)
            return !1;
          var a = this._paneRenderers[i];
          return a === void 0 && (a = this._createRenderer({ pane: i }), this._paneRenderers[i] = a), a;
        },
        _createRenderer: function(i) {
          return this.options.preferCanvas && Ua(i) || Ha(i);
        }
      });
      var cn = Un.extend({
        initialize: function(i, a) {
          Un.prototype.initialize.call(this, this._boundsToLatLngs(i), a);
        },
        // @method setBounds(latLngBounds: LatLngBounds): this
        // Redraws the rectangle with the passed bounds.
        setBounds: function(i) {
          return this.setLatLngs(this._boundsToLatLngs(i));
        },
        _boundsToLatLngs: function(i) {
          return i = z(i), [
            i.getSouthWest(),
            i.getNorthWest(),
            i.getNorthEast(),
            i.getSouthEast()
          ];
        }
      });
      function $s(i, a) {
        return new cn(i, a);
      }
      Pn.create = gi, Pn.pointsToPath = tl, Ai.geometryToLayer = Se, Ai.coordsToLatLng = ml, Ai.coordsToLatLngs = ka, Ai.latLngToCoords = pl, Ai.latLngsToCoords = Na, Ai.getFeature = qi, Ai.asFeature = _l, Et.mergeOptions({
        // @option boxZoom: Boolean = true
        // Whether the map can be zoomed to a rectangular area specified by
        // dragging the mouse while pressing the shift key.
        boxZoom: !0
      });
      var ke = di.extend({
        initialize: function(i) {
          this._map = i, this._container = i._container, this._pane = i._panes.overlayPane, this._resetStateTimeout = 0, i.on("unload", this._destroy, this);
        },
        addHooks: function() {
          dt(this._container, "mousedown", this._onMouseDown, this);
        },
        removeHooks: function() {
          Ut(this._container, "mousedown", this._onMouseDown, this);
        },
        moved: function() {
          return this._moved;
        },
        _destroy: function() {
          Yt(this._pane), delete this._pane;
        },
        _resetState: function() {
          this._resetStateTimeout = 0, this._moved = !1;
        },
        _clearDeferredResetState: function() {
          this._resetStateTimeout !== 0 && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0);
        },
        _onMouseDown: function(i) {
          if (!i.shiftKey || i.which !== 1 && i.button !== 1)
            return !1;
          this._clearDeferredResetState(), this._resetState(), Cn(), ll(), this._startPoint = this._map.mouseEventToContainerPoint(i), dt(document, {
            contextmenu: Hi,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown
          }, this);
        },
        _onMouseMove: function(i) {
          this._moved || (this._moved = !0, this._box = xt("div", "leaflet-zoom-box", this._container), _t(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(i);
          var a = new S(this._point, this._startPoint), o = a.getSize();
          Jt(this._box, a.min), this._box.style.width = o.x + "px", this._box.style.height = o.y + "px";
        },
        _finish: function() {
          this._moved && (Yt(this._box), te(this._container, "leaflet-crosshair")), fi(), xa(), Ut(document, {
            contextmenu: Hi,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown
          }, this);
        },
        _onMouseUp: function(i) {
          if (!(i.which !== 1 && i.button !== 1) && (this._finish(), !!this._moved)) {
            this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(p(this._resetState, this), 0);
            var a = new J(
              this._map.containerPointToLatLng(this._startPoint),
              this._map.containerPointToLatLng(this._point)
            );
            this._map.fitBounds(a).fire("boxzoomend", { boxZoomBounds: a });
          }
        },
        _onKeyDown: function(i) {
          i.keyCode === 27 && (this._finish(), this._clearDeferredResetState(), this._resetState());
        }
      });
      Et.addInitHook("addHandler", "boxZoom", ke), Et.mergeOptions({
        // @option doubleClickZoom: Boolean|String = true
        // Whether the map can be zoomed in by double clicking on it and
        // zoomed out by double clicking while holding shift. If passed
        // `'center'`, double-click zoom will zoom to the center of the
        //  view regardless of where the mouse was.
        doubleClickZoom: !0
      });
      var bl = di.extend({
        addHooks: function() {
          this._map.on("dblclick", this._onDoubleClick, this);
        },
        removeHooks: function() {
          this._map.off("dblclick", this._onDoubleClick, this);
        },
        _onDoubleClick: function(i) {
          var a = this._map, o = a.getZoom(), u = a.options.zoomDelta, c = i.originalEvent.shiftKey ? o - u : o + u;
          a.options.doubleClickZoom === "center" ? a.setZoom(c) : a.setZoomAround(i.containerPoint, c);
        }
      });
      Et.addInitHook("addHandler", "doubleClickZoom", bl), Et.mergeOptions({
        // @option dragging: Boolean = true
        // Whether the map is draggable with mouse/touch or not.
        dragging: !0,
        // @section Panning Inertia Options
        // @option inertia: Boolean = *
        // If enabled, panning of the map will have an inertia effect where
        // the map builds momentum while dragging and continues moving in
        // the same direction for some time. Feels especially nice on touch
        // devices. Enabled by default.
        inertia: !0,
        // @option inertiaDeceleration: Number = 3000
        // The rate with which the inertial movement slows down, in pixels/second².
        inertiaDeceleration: 3400,
        // px/s^2
        // @option inertiaMaxSpeed: Number = Infinity
        // Max speed of the inertial movement, in pixels/second.
        inertiaMaxSpeed: 1 / 0,
        // px/s
        // @option easeLinearity: Number = 0.2
        easeLinearity: 0.2,
        // TODO refactor, move to CRS
        // @option worldCopyJump: Boolean = false
        // With this option enabled, the map tracks when you pan to another "copy"
        // of the world and seamlessly jumps to the original one so that all overlays
        // like markers and vector layers are still visible.
        worldCopyJump: !1,
        // @option maxBoundsViscosity: Number = 0.0
        // If `maxBounds` is set, this option will control how solid the bounds
        // are when dragging the map around. The default value of `0.0` allows the
        // user to drag outside the bounds at normal speed, higher values will
        // slow down map dragging outside bounds, and `1.0` makes the bounds fully
        // solid, preventing the user from dragging outside the bounds.
        maxBoundsViscosity: 0
      });
      var vi = di.extend({
        addHooks: function() {
          if (!this._draggable) {
            var i = this._map;
            this._draggable = new Gi(i._mapPane, i._container), this._draggable.on({
              dragstart: this._onDragStart,
              drag: this._onDrag,
              dragend: this._onDragEnd
            }, this), this._draggable.on("predrag", this._onPreDragLimit, this), i.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), i.on("zoomend", this._onZoomEnd, this), i.whenReady(this._onZoomEnd, this));
          }
          _t(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
        },
        removeHooks: function() {
          te(this._map._container, "leaflet-grab"), te(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
        },
        moved: function() {
          return this._draggable && this._draggable._moved;
        },
        moving: function() {
          return this._draggable && this._draggable._moving;
        },
        _onDragStart: function() {
          var i = this._map;
          if (i._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
            var a = z(this._map.options.maxBounds);
            this._offsetLimit = G(
              this._map.latLngToContainerPoint(a.getNorthWest()).multiplyBy(-1),
              this._map.latLngToContainerPoint(a.getSouthEast()).multiplyBy(-1).add(this._map.getSize())
            ), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity));
          } else
            this._offsetLimit = null;
          i.fire("movestart").fire("dragstart"), i.options.inertia && (this._positions = [], this._times = []);
        },
        _onDrag: function(i) {
          if (this._map.options.inertia) {
            var a = this._lastTime = +/* @__PURE__ */ new Date(), o = this._lastPos = this._draggable._absPos || this._draggable._newPos;
            this._positions.push(o), this._times.push(a), this._prunePositions(a);
          }
          this._map.fire("move", i).fire("drag", i);
        },
        _prunePositions: function(i) {
          for (; this._positions.length > 1 && i - this._times[0] > 50; )
            this._positions.shift(), this._times.shift();
        },
        _onZoomEnd: function() {
          var i = this._map.getSize().divideBy(2), a = this._map.latLngToLayerPoint([0, 0]);
          this._initialWorldOffset = a.subtract(i).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
        },
        _viscousLimit: function(i, a) {
          return i - (i - a) * this._viscosity;
        },
        _onPreDragLimit: function() {
          if (!(!this._viscosity || !this._offsetLimit)) {
            var i = this._draggable._newPos.subtract(this._draggable._startPos), a = this._offsetLimit;
            i.x < a.min.x && (i.x = this._viscousLimit(i.x, a.min.x)), i.y < a.min.y && (i.y = this._viscousLimit(i.y, a.min.y)), i.x > a.max.x && (i.x = this._viscousLimit(i.x, a.max.x)), i.y > a.max.y && (i.y = this._viscousLimit(i.y, a.max.y)), this._draggable._newPos = this._draggable._startPos.add(i);
          }
        },
        _onPreDragWrap: function() {
          var i = this._worldWidth, a = Math.round(i / 2), o = this._initialWorldOffset, u = this._draggable._newPos.x, c = (u - a + o) % i + a - o, d = (u + a + o) % i - a - o, y = Math.abs(c + o) < Math.abs(d + o) ? c : d;
          this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = y;
        },
        _onDragEnd: function(i) {
          var a = this._map, o = a.options, u = !o.inertia || i.noInertia || this._times.length < 2;
          if (a.fire("dragend", i), u)
            a.fire("moveend");
          else {
            this._prunePositions(+/* @__PURE__ */ new Date());
            var c = this._lastPos.subtract(this._positions[0]), d = (this._lastTime - this._times[0]) / 1e3, y = o.easeLinearity, C = c.multiplyBy(y / d), D = C.distanceTo([0, 0]), V = Math.min(o.inertiaMaxSpeed, D), et = C.multiplyBy(V / D), ut = V / (o.inertiaDeceleration * y), yt = et.multiplyBy(-ut / 2).round();
            !yt.x && !yt.y ? a.fire("moveend") : (yt = a._limitOffset(yt, a.options.maxBounds), Pt(function() {
              a.panBy(yt, {
                duration: ut,
                easeLinearity: y,
                noMoveStart: !0,
                animate: !0
              });
            }));
          }
        }
      });
      Et.addInitHook("addHandler", "dragging", vi), Et.mergeOptions({
        // @option keyboard: Boolean = true
        // Makes the map focusable and allows users to navigate the map with keyboard
        // arrows and `+`/`-` keys.
        keyboard: !0,
        // @option keyboardPanDelta: Number = 80
        // Amount of pixels to pan when pressing an arrow key.
        keyboardPanDelta: 80
      });
      var _o = di.extend({
        keyCodes: {
          left: [37],
          right: [39],
          down: [40],
          up: [38],
          zoomIn: [187, 107, 61, 171],
          zoomOut: [189, 109, 54, 173]
        },
        initialize: function(i) {
          this._map = i, this._setPanDelta(i.options.keyboardPanDelta), this._setZoomDelta(i.options.zoomDelta);
        },
        addHooks: function() {
          var i = this._map._container;
          i.tabIndex <= 0 && (i.tabIndex = "0"), dt(i, {
            focus: this._onFocus,
            blur: this._onBlur,
            mousedown: this._onMouseDown
          }, this), this._map.on({
            focus: this._addHooks,
            blur: this._removeHooks
          }, this);
        },
        removeHooks: function() {
          this._removeHooks(), Ut(this._map._container, {
            focus: this._onFocus,
            blur: this._onBlur,
            mousedown: this._onMouseDown
          }, this), this._map.off({
            focus: this._addHooks,
            blur: this._removeHooks
          }, this);
        },
        _onMouseDown: function() {
          if (!this._focused) {
            var i = document.body, a = document.documentElement, o = i.scrollTop || a.scrollTop, u = i.scrollLeft || a.scrollLeft;
            this._map._container.focus(), window.scrollTo(u, o);
          }
        },
        _onFocus: function() {
          this._focused = !0, this._map.fire("focus");
        },
        _onBlur: function() {
          this._focused = !1, this._map.fire("blur");
        },
        _setPanDelta: function(i) {
          var a = this._panKeys = {}, o = this.keyCodes, u, c;
          for (u = 0, c = o.left.length; u < c; u++)
            a[o.left[u]] = [-1 * i, 0];
          for (u = 0, c = o.right.length; u < c; u++)
            a[o.right[u]] = [i, 0];
          for (u = 0, c = o.down.length; u < c; u++)
            a[o.down[u]] = [0, i];
          for (u = 0, c = o.up.length; u < c; u++)
            a[o.up[u]] = [0, -1 * i];
        },
        _setZoomDelta: function(i) {
          var a = this._zoomKeys = {}, o = this.keyCodes, u, c;
          for (u = 0, c = o.zoomIn.length; u < c; u++)
            a[o.zoomIn[u]] = i;
          for (u = 0, c = o.zoomOut.length; u < c; u++)
            a[o.zoomOut[u]] = -i;
        },
        _addHooks: function() {
          dt(document, "keydown", this._onKeyDown, this);
        },
        _removeHooks: function() {
          Ut(document, "keydown", this._onKeyDown, this);
        },
        _onKeyDown: function(i) {
          if (!(i.altKey || i.ctrlKey || i.metaKey)) {
            var a = i.keyCode, o = this._map, u;
            if (a in this._panKeys) {
              if (!o._panAnim || !o._panAnim._inProgress)
                if (u = this._panKeys[a], i.shiftKey && (u = nt(u).multiplyBy(3)), o.options.maxBounds && (u = o._limitOffset(nt(u), o.options.maxBounds)), o.options.worldCopyJump) {
                  var c = o.wrapLatLng(o.unproject(o.project(o.getCenter()).add(u)));
                  o.panTo(c);
                } else
                  o.panBy(u);
            } else if (a in this._zoomKeys)
              o.setZoom(o.getZoom() + (i.shiftKey ? 3 : 1) * this._zoomKeys[a]);
            else if (a === 27 && o._popup && o._popup.options.closeOnEscapeKey)
              o.closePopup();
            else
              return;
            Hi(i);
          }
        }
      });
      Et.addInitHook("addHandler", "keyboard", _o), Et.mergeOptions({
        // @section Mouse wheel options
        // @option scrollWheelZoom: Boolean|String = true
        // Whether the map can be zoomed by using the mouse wheel. If passed `'center'`,
        // it will zoom to the center of the view regardless of where the mouse was.
        scrollWheelZoom: !0,
        // @option wheelDebounceTime: Number = 40
        // Limits the rate at which a wheel can fire (in milliseconds). By default
        // user can't zoom via wheel more often than once per 40 ms.
        wheelDebounceTime: 40,
        // @option wheelPxPerZoomLevel: Number = 60
        // How many scroll pixels (as reported by [L.DomEvent.getWheelDelta](#domevent-getwheeldelta))
        // mean a change of one full zoom level. Smaller values will make wheel-zooming
        // faster (and vice versa).
        wheelPxPerZoomLevel: 60
      });
      var Ga = di.extend({
        addHooks: function() {
          dt(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
        },
        removeHooks: function() {
          Ut(this._map._container, "wheel", this._onWheelScroll, this);
        },
        _onWheelScroll: function(i) {
          var a = we(i), o = this._map.options.wheelDebounceTime;
          this._delta += a, this._lastMousePos = this._map.mouseEventToContainerPoint(i), this._startTime || (this._startTime = +/* @__PURE__ */ new Date());
          var u = Math.max(o - (+/* @__PURE__ */ new Date() - this._startTime), 0);
          clearTimeout(this._timer), this._timer = setTimeout(p(this._performZoom, this), u), Hi(i);
        },
        _performZoom: function() {
          var i = this._map, a = i.getZoom(), o = this._map.options.zoomSnap || 0;
          i._stop();
          var u = this._delta / (this._map.options.wheelPxPerZoomLevel * 4), c = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(u)))) / Math.LN2, d = o ? Math.ceil(c / o) * o : c, y = i._limitZoom(a + (this._delta > 0 ? d : -d)) - a;
          this._delta = 0, this._startTime = null, y && (i.options.scrollWheelZoom === "center" ? i.setZoom(a + y) : i.setZoomAround(this._lastMousePos, a + y));
        }
      });
      Et.addInitHook("addHandler", "scrollWheelZoom", Ga);
      var fn = 600;
      Et.mergeOptions({
        // @section Touch interaction options
        // @option tapHold: Boolean
        // Enables simulation of `contextmenu` event, default is `true` for mobile Safari.
        tapHold: st.touchNative && st.safari && st.mobile,
        // @option tapTolerance: Number = 15
        // The max number of pixels a user can shift his finger during touch
        // for it to be considered a valid tap.
        tapTolerance: 15
      });
      var xl = di.extend({
        addHooks: function() {
          dt(this._map._container, "touchstart", this._onDown, this);
        },
        removeHooks: function() {
          Ut(this._map._container, "touchstart", this._onDown, this);
        },
        _onDown: function(i) {
          if (clearTimeout(this._holdTimeout), i.touches.length === 1) {
            var a = i.touches[0];
            this._startPos = this._newPos = new K(a.clientX, a.clientY), this._holdTimeout = setTimeout(p(function() {
              this._cancel(), this._isTapValid() && (dt(document, "touchend", ne), dt(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", a));
            }, this), fn), dt(document, "touchend touchcancel contextmenu", this._cancel, this), dt(document, "touchmove", this._onMove, this);
          }
        },
        _cancelClickPrevent: function i() {
          Ut(document, "touchend", ne), Ut(document, "touchend touchcancel", i);
        },
        _cancel: function() {
          clearTimeout(this._holdTimeout), Ut(document, "touchend touchcancel contextmenu", this._cancel, this), Ut(document, "touchmove", this._onMove, this);
        },
        _onMove: function(i) {
          var a = i.touches[0];
          this._newPos = new K(a.clientX, a.clientY);
        },
        _isTapValid: function() {
          return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
        },
        _simulateEvent: function(i, a) {
          var o = new MouseEvent(i, {
            bubbles: !0,
            cancelable: !0,
            view: window,
            // detail: 1,
            screenX: a.screenX,
            screenY: a.screenY,
            clientX: a.clientX,
            clientY: a.clientY
            // button: 2,
            // buttons: 2
          });
          o._simulated = !0, a.target.dispatchEvent(o);
        }
      });
      Et.addInitHook("addHandler", "tapHold", xl), Et.mergeOptions({
        // @section Touch interaction options
        // @option touchZoom: Boolean|String = *
        // Whether the map can be zoomed by touch-dragging with two fingers. If
        // passed `'center'`, it will zoom to the center of the view regardless of
        // where the touch events (fingers) were. Enabled for touch-capable web
        // browsers.
        touchZoom: st.touch,
        // @option bounceAtZoomLimits: Boolean = true
        // Set it to false if you don't want the map to zoom beyond min/max zoom
        // and then bounce back when pinch-zooming.
        bounceAtZoomLimits: !0
      });
      var go = di.extend({
        addHooks: function() {
          _t(this._map._container, "leaflet-touch-zoom"), dt(this._map._container, "touchstart", this._onTouchStart, this);
        },
        removeHooks: function() {
          te(this._map._container, "leaflet-touch-zoom"), Ut(this._map._container, "touchstart", this._onTouchStart, this);
        },
        _onTouchStart: function(i) {
          var a = this._map;
          if (!(!i.touches || i.touches.length !== 2 || a._animatingZoom || this._zooming)) {
            var o = a.mouseEventToContainerPoint(i.touches[0]), u = a.mouseEventToContainerPoint(i.touches[1]);
            this._centerPoint = a.getSize()._divideBy(2), this._startLatLng = a.containerPointToLatLng(this._centerPoint), a.options.touchZoom !== "center" && (this._pinchStartLatLng = a.containerPointToLatLng(o.add(u)._divideBy(2))), this._startDist = o.distanceTo(u), this._startZoom = a.getZoom(), this._moved = !1, this._zooming = !0, a._stop(), dt(document, "touchmove", this._onTouchMove, this), dt(document, "touchend touchcancel", this._onTouchEnd, this), ne(i);
          }
        },
        _onTouchMove: function(i) {
          if (!(!i.touches || i.touches.length !== 2 || !this._zooming)) {
            var a = this._map, o = a.mouseEventToContainerPoint(i.touches[0]), u = a.mouseEventToContainerPoint(i.touches[1]), c = o.distanceTo(u) / this._startDist;
            if (this._zoom = a.getScaleZoom(c, this._startZoom), !a.options.bounceAtZoomLimits && (this._zoom < a.getMinZoom() && c < 1 || this._zoom > a.getMaxZoom() && c > 1) && (this._zoom = a._limitZoom(this._zoom)), a.options.touchZoom === "center") {
              if (this._center = this._startLatLng, c === 1)
                return;
            } else {
              var d = o._add(u)._divideBy(2)._subtract(this._centerPoint);
              if (c === 1 && d.x === 0 && d.y === 0)
                return;
              this._center = a.unproject(a.project(this._pinchStartLatLng, this._zoom).subtract(d), this._zoom);
            }
            this._moved || (a._moveStart(!0, !1), this._moved = !0), Mt(this._animRequest);
            var y = p(a._move, a, this._center, this._zoom, { pinch: !0, round: !1 }, void 0);
            this._animRequest = Pt(y, this, !0), ne(i);
          }
        },
        _onTouchEnd: function() {
          if (!this._moved || !this._zooming) {
            this._zooming = !1;
            return;
          }
          this._zooming = !1, Mt(this._animRequest), Ut(document, "touchmove", this._onTouchMove, this), Ut(document, "touchend touchcancel", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom));
        }
      });
      Et.addInitHook("addHandler", "touchZoom", go), Et.BoxZoom = ke, Et.DoubleClickZoom = bl, Et.Drag = vi, Et.Keyboard = _o, Et.ScrollWheelZoom = Ga, Et.TapHold = xl, Et.TouchZoom = go, w.Bounds = S, w.Browser = st, w.CRS = mt, w.Canvas = yl, w.Circle = dl, w.CircleMarker = Rn, w.Class = Ot, w.Control = Ze, w.DivIcon = Nr, w.DivOverlay = Le, w.DomEvent = sl, w.DomUtil = kn, w.Draggable = Gi, w.Evented = $, w.FeatureGroup = mi, w.GeoJSON = Ai, w.GridLayer = jn, w.Handler = di, w.Icon = pi, w.ImageOverlay = Gn, w.LatLng = Q, w.LatLngBounds = J, w.Layer = ni, w.LayerGroup = Zn, w.LineUtil = Qs, w.Map = Et, w.Marker = Oa, w.Mixin = Ps, w.Path = _i, w.Point = K, w.PolyUtil = fo, w.Polygon = Un, w.Polyline = Ci, w.Popup = Ba, w.PosAnimation = Nn, w.Projection = zr, w.Rectangle = cn, w.Renderer = Oe, w.SVG = Pn, w.SVGOverlay = vl, w.TileLayer = Yi, w.Tooltip = Za, w.Transformation = Li, w.Util = $e, w.VideoOverlay = Pi, w.bind = p, w.bounds = G, w.canvas = Ua, w.circle = Cr, w.circleMarker = Mr, w.control = Mi, w.divIcon = Fs, w.extend = lt, w.featureGroup = Tr, w.geoJSON = gl, w.geoJson = Da, w.gridLayer = Dr, w.icon = Ma, w.imageOverlay = Ar, w.latLng = F, w.latLngBounds = z, w.layerGroup = Ks, w.map = lo, w.marker = wr, w.point = nt, w.polygon = Ws, w.polyline = Js, w.popup = kr, w.rectangle = $s, w.setOptions = Y, w.stamp = _, w.svg = Ha, w.svgOverlay = Or, w.tileLayer = Pe, w.tooltip = Is, w.transformation = ci, w.version = A, w.videoOverlay = qn;
      var vo = window.L;
      w.noConflict = function() {
        return window.L = vo, this;
      }, window.L = w;
    }));
  })(tr, tr.exports)), tr.exports;
}
var zp = Lp();
const Si = /* @__PURE__ */ Wd(zp);
var er = { exports: {} }, Ep = er.exports, Pd;
function Tp() {
  return Pd || (Pd = 1, (function(j, it) {
    (function(w, A) {
      A(it);
    })(Ep, function(w) {
      var A = L.MarkerClusterGroup = L.FeatureGroup.extend({
        options: {
          maxClusterRadius: 80,
          //A cluster will cover at most this many pixels from its center
          iconCreateFunction: null,
          clusterPane: L.Marker.prototype.options.pane,
          spiderfyOnEveryZoom: !1,
          spiderfyOnMaxZoom: !0,
          showCoverageOnHover: !0,
          zoomToBoundsOnClick: !0,
          singleMarkerMode: !1,
          disableClusteringAtZoom: null,
          // Setting this to false prevents the removal of any clusters outside of the viewpoint, which
          // is the default behaviour for performance reasons.
          removeOutsideVisibleBounds: !0,
          // Set to false to disable all animations (zoom and spiderfy).
          // If false, option animateAddingMarkers below has no effect.
          // If L.DomUtil.TRANSITION is falsy, this option has no effect.
          animate: !0,
          //Whether to animate adding markers after adding the MarkerClusterGroup to the map
          // If you are adding individual markers set to true, if adding bulk markers leave false for massive performance gains.
          animateAddingMarkers: !1,
          // Make it possible to provide custom function to calculate spiderfy shape positions
          spiderfyShapePositions: null,
          //Increase to increase the distance away that spiderfied markers appear from the center
          spiderfyDistanceMultiplier: 1,
          // Make it possible to specify a polyline options on a spider leg
          spiderLegPolylineOptions: { weight: 1.5, color: "#222", opacity: 0.5 },
          // When bulk adding layers, adds markers in chunks. Means addLayers may not add all the layers in the call, others will be loaded during setTimeouts
          chunkedLoading: !1,
          chunkInterval: 200,
          // process markers for a maximum of ~ n milliseconds (then trigger the chunkProgress callback)
          chunkDelay: 50,
          // at the end of each interval, give n milliseconds back to system/browser
          chunkProgress: null,
          // progress callback: function(processed, total, elapsed) (e.g. for a progress indicator)
          //Options to pass to the L.Polygon constructor
          polygonOptions: {}
        },
        initialize: function(h) {
          L.Util.setOptions(this, h), this.options.iconCreateFunction || (this.options.iconCreateFunction = this._defaultIconCreateFunction), this._featureGroup = L.featureGroup(), this._featureGroup.addEventParent(this), this._nonPointGroup = L.featureGroup(), this._nonPointGroup.addEventParent(this), this._inZoomAnimation = 0, this._needsClustering = [], this._needsRemoving = [], this._currentShownBounds = null, this._queue = [], this._childMarkerEventHandlers = {
            dragstart: this._childMarkerDragStart,
            move: this._childMarkerMoved,
            dragend: this._childMarkerDragEnd
          };
          var p = L.DomUtil.TRANSITION && this.options.animate;
          L.extend(this, p ? this._withAnimation : this._noAnimation), this._markerCluster = p ? L.MarkerCluster : L.MarkerClusterNonAnimated;
        },
        addLayer: function(h) {
          if (h instanceof L.LayerGroup)
            return this.addLayers([h]);
          if (!h.getLatLng)
            return this._nonPointGroup.addLayer(h), this.fire("layeradd", { layer: h }), this;
          if (!this._map)
            return this._needsClustering.push(h), this.fire("layeradd", { layer: h }), this;
          if (this.hasLayer(h))
            return this;
          this._unspiderfy && this._unspiderfy(), this._addLayer(h, this._maxZoom), this.fire("layeradd", { layer: h }), this._topClusterLevel._recalculateBounds(), this._refreshClustersIcons();
          var p = h, g = this._zoom;
          if (h.__parent)
            for (; p.__parent._zoom >= g; )
              p = p.__parent;
          return this._currentShownBounds.contains(p.getLatLng()) && (this.options.animateAddingMarkers ? this._animationAddLayer(h, p) : this._animationAddLayerNonAnimated(h, p)), this;
        },
        removeLayer: function(h) {
          return h instanceof L.LayerGroup ? this.removeLayers([h]) : h.getLatLng ? this._map ? h.__parent ? (this._unspiderfy && (this._unspiderfy(), this._unspiderfyLayer(h)), this._removeLayer(h, !0), this.fire("layerremove", { layer: h }), this._topClusterLevel._recalculateBounds(), this._refreshClustersIcons(), h.off(this._childMarkerEventHandlers, this), this._featureGroup.hasLayer(h) && (this._featureGroup.removeLayer(h), h.clusterShow && h.clusterShow()), this) : this : (!this._arraySplice(this._needsClustering, h) && this.hasLayer(h) && this._needsRemoving.push({ layer: h, latlng: h._latlng }), this.fire("layerremove", { layer: h }), this) : (this._nonPointGroup.removeLayer(h), this.fire("layerremove", { layer: h }), this);
        },
        //Takes an array of markers and adds them in bulk
        addLayers: function(h, p) {
          if (!L.Util.isArray(h))
            return this.addLayer(h);
          var g = this._featureGroup, _ = this._nonPointGroup, v = this.options.chunkedLoading, N = this.options.chunkInterval, E = this.options.chunkProgress, R = h.length, H = 0, tt = !0, Y;
          if (this._map) {
            var ct = (/* @__PURE__ */ new Date()).getTime(), W = L.bind(function() {
              var at = (/* @__PURE__ */ new Date()).getTime();
              for (this._map && this._unspiderfy && this._unspiderfy(); H < R; H++) {
                if (v && H % 200 === 0) {
                  var Ht = (/* @__PURE__ */ new Date()).getTime() - at;
                  if (Ht > N)
                    break;
                }
                if (Y = h[H], Y instanceof L.LayerGroup) {
                  tt && (h = h.slice(), tt = !1), this._extractNonGroupLayers(Y, h), R = h.length;
                  continue;
                }
                if (!Y.getLatLng) {
                  _.addLayer(Y), p || this.fire("layeradd", { layer: Y });
                  continue;
                }
                if (!this.hasLayer(Y) && (this._addLayer(Y, this._maxZoom), p || this.fire("layeradd", { layer: Y }), Y.__parent && Y.__parent.getChildCount() === 2)) {
                  var Gt = Y.__parent.getAllChildMarkers(), It = Gt[0] === Y ? Gt[1] : Gt[0];
                  g.removeLayer(It);
                }
              }
              E && E(H, R, (/* @__PURE__ */ new Date()).getTime() - ct), H === R ? (this._topClusterLevel._recalculateBounds(), this._refreshClustersIcons(), this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds)) : setTimeout(W, this.options.chunkDelay);
            }, this);
            W();
          } else
            for (var I = this._needsClustering; H < R; H++) {
              if (Y = h[H], Y instanceof L.LayerGroup) {
                tt && (h = h.slice(), tt = !1), this._extractNonGroupLayers(Y, h), R = h.length;
                continue;
              }
              if (!Y.getLatLng) {
                _.addLayer(Y);
                continue;
              }
              this.hasLayer(Y) || I.push(Y);
            }
          return this;
        },
        //Takes an array of markers and removes them in bulk
        removeLayers: function(h) {
          var p, g, _ = h.length, v = this._featureGroup, N = this._nonPointGroup, E = !0;
          if (!this._map) {
            for (p = 0; p < _; p++) {
              if (g = h[p], g instanceof L.LayerGroup) {
                E && (h = h.slice(), E = !1), this._extractNonGroupLayers(g, h), _ = h.length;
                continue;
              }
              this._arraySplice(this._needsClustering, g), N.removeLayer(g), this.hasLayer(g) && this._needsRemoving.push({ layer: g, latlng: g._latlng }), this.fire("layerremove", { layer: g });
            }
            return this;
          }
          if (this._unspiderfy) {
            this._unspiderfy();
            var R = h.slice(), H = _;
            for (p = 0; p < H; p++) {
              if (g = R[p], g instanceof L.LayerGroup) {
                this._extractNonGroupLayers(g, R), H = R.length;
                continue;
              }
              this._unspiderfyLayer(g);
            }
          }
          for (p = 0; p < _; p++) {
            if (g = h[p], g instanceof L.LayerGroup) {
              E && (h = h.slice(), E = !1), this._extractNonGroupLayers(g, h), _ = h.length;
              continue;
            }
            if (!g.__parent) {
              N.removeLayer(g), this.fire("layerremove", { layer: g });
              continue;
            }
            this._removeLayer(g, !0, !0), this.fire("layerremove", { layer: g }), v.hasLayer(g) && (v.removeLayer(g), g.clusterShow && g.clusterShow());
          }
          return this._topClusterLevel._recalculateBounds(), this._refreshClustersIcons(), this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds), this;
        },
        //Removes all layers from the MarkerClusterGroup
        clearLayers: function() {
          return this._map || (this._needsClustering = [], this._needsRemoving = [], delete this._gridClusters, delete this._gridUnclustered), this._noanimationUnspiderfy && this._noanimationUnspiderfy(), this._featureGroup.clearLayers(), this._nonPointGroup.clearLayers(), this.eachLayer(function(h) {
            h.off(this._childMarkerEventHandlers, this), delete h.__parent;
          }, this), this._map && this._generateInitialClusters(), this;
        },
        //Override FeatureGroup.getBounds as it doesn't work
        getBounds: function() {
          var h = new L.LatLngBounds();
          this._topClusterLevel && h.extend(this._topClusterLevel._bounds);
          for (var p = this._needsClustering.length - 1; p >= 0; p--)
            h.extend(this._needsClustering[p].getLatLng());
          return h.extend(this._nonPointGroup.getBounds()), h;
        },
        //Overrides LayerGroup.eachLayer
        eachLayer: function(h, p) {
          var g = this._needsClustering.slice(), _ = this._needsRemoving, v, N, E;
          for (this._topClusterLevel && this._topClusterLevel.getAllChildMarkers(g), N = g.length - 1; N >= 0; N--) {
            for (v = !0, E = _.length - 1; E >= 0; E--)
              if (_[E].layer === g[N]) {
                v = !1;
                break;
              }
            v && h.call(p, g[N]);
          }
          this._nonPointGroup.eachLayer(h, p);
        },
        //Overrides LayerGroup.getLayers
        getLayers: function() {
          var h = [];
          return this.eachLayer(function(p) {
            h.push(p);
          }), h;
        },
        //Overrides LayerGroup.getLayer, WARNING: Really bad performance
        getLayer: function(h) {
          var p = null;
          return h = parseInt(h, 10), this.eachLayer(function(g) {
            L.stamp(g) === h && (p = g);
          }), p;
        },
        //Returns true if the given layer is in this MarkerClusterGroup
        hasLayer: function(h) {
          if (!h)
            return !1;
          var p, g = this._needsClustering;
          for (p = g.length - 1; p >= 0; p--)
            if (g[p] === h)
              return !0;
          for (g = this._needsRemoving, p = g.length - 1; p >= 0; p--)
            if (g[p].layer === h)
              return !1;
          return !!(h.__parent && h.__parent._group === this) || this._nonPointGroup.hasLayer(h);
        },
        //Zoom down to show the given layer (spiderfying if necessary) then calls the callback
        zoomToShowLayer: function(h, p) {
          var g = this._map;
          typeof p != "function" && (p = function() {
          });
          var _ = function() {
            (g.hasLayer(h) || g.hasLayer(h.__parent)) && !this._inZoomAnimation && (this._map.off("moveend", _, this), this.off("animationend", _, this), g.hasLayer(h) ? p() : h.__parent._icon && (this.once("spiderfied", p, this), h.__parent.spiderfy()));
          };
          h._icon && this._map.getBounds().contains(h.getLatLng()) ? p() : h.__parent._zoom < Math.round(this._map._zoom) ? (this._map.on("moveend", _, this), this._map.panTo(h.getLatLng())) : (this._map.on("moveend", _, this), this.on("animationend", _, this), h.__parent.zoomToBounds());
        },
        //Overrides FeatureGroup.onAdd
        onAdd: function(h) {
          this._map = h;
          var p, g, _;
          if (!isFinite(this._map.getMaxZoom()))
            throw "Map has no maxZoom specified";
          for (this._featureGroup.addTo(h), this._nonPointGroup.addTo(h), this._gridClusters || this._generateInitialClusters(), this._maxLat = h.options.crs.projection.MAX_LATITUDE, p = 0, g = this._needsRemoving.length; p < g; p++)
            _ = this._needsRemoving[p], _.newlatlng = _.layer._latlng, _.layer._latlng = _.latlng;
          for (p = 0, g = this._needsRemoving.length; p < g; p++)
            _ = this._needsRemoving[p], this._removeLayer(_.layer, !0), _.layer._latlng = _.newlatlng;
          this._needsRemoving = [], this._zoom = Math.round(this._map._zoom), this._currentShownBounds = this._getExpandedVisibleBounds(), this._map.on("zoomend", this._zoomEnd, this), this._map.on("moveend", this._moveEnd, this), this._spiderfierOnAdd && this._spiderfierOnAdd(), this._bindEvents(), g = this._needsClustering, this._needsClustering = [], this.addLayers(g, !0);
        },
        //Overrides FeatureGroup.onRemove
        onRemove: function(h) {
          h.off("zoomend", this._zoomEnd, this), h.off("moveend", this._moveEnd, this), this._unbindEvents(), this._map._mapPane.className = this._map._mapPane.className.replace(" leaflet-cluster-anim", ""), this._spiderfierOnRemove && this._spiderfierOnRemove(), delete this._maxLat, this._hideCoverage(), this._featureGroup.remove(), this._nonPointGroup.remove(), this._featureGroup.clearLayers(), this._map = null;
        },
        getVisibleParent: function(h) {
          for (var p = h; p && !p._icon; )
            p = p.__parent;
          return p || null;
        },
        //Remove the given object from the given array
        _arraySplice: function(h, p) {
          for (var g = h.length - 1; g >= 0; g--)
            if (h[g] === p)
              return h.splice(g, 1), !0;
        },
        /**
         * Removes a marker from all _gridUnclustered zoom levels, starting at the supplied zoom.
         * @param marker to be removed from _gridUnclustered.
         * @param z integer bottom start zoom level (included)
         * @private
         */
        _removeFromGridUnclustered: function(h, p) {
          for (var g = this._map, _ = this._gridUnclustered, v = Math.floor(this._map.getMinZoom()); p >= v && _[p].removeObject(h, g.project(h.getLatLng(), p)); p--)
            ;
        },
        _childMarkerDragStart: function(h) {
          h.target.__dragStart = h.target._latlng;
        },
        _childMarkerMoved: function(h) {
          if (!this._ignoreMove && !h.target.__dragStart) {
            var p = h.target._popup && h.target._popup.isOpen();
            this._moveChild(h.target, h.oldLatLng, h.latlng), p && h.target.openPopup();
          }
        },
        _moveChild: function(h, p, g) {
          h._latlng = p, this.removeLayer(h), h._latlng = g, this.addLayer(h);
        },
        _childMarkerDragEnd: function(h) {
          var p = h.target.__dragStart;
          delete h.target.__dragStart, p && this._moveChild(h.target, p, h.target._latlng);
        },
        //Internal function for removing a marker from everything.
        //dontUpdateMap: set to true if you will handle updating the map manually (for bulk functions)
        _removeLayer: function(h, p, g) {
          var _ = this._gridClusters, v = this._gridUnclustered, N = this._featureGroup, E = this._map, R = Math.floor(this._map.getMinZoom());
          p && this._removeFromGridUnclustered(h, this._maxZoom);
          var H = h.__parent, tt = H._markers, Y;
          for (this._arraySplice(tt, h); H && (H._childCount--, H._boundsNeedUpdate = !0, !(H._zoom < R)); )
            p && H._childCount <= 1 ? (Y = H._markers[0] === h ? H._markers[1] : H._markers[0], _[H._zoom].removeObject(H, E.project(H._cLatLng, H._zoom)), v[H._zoom].addObject(Y, E.project(Y.getLatLng(), H._zoom)), this._arraySplice(H.__parent._childClusters, H), H.__parent._markers.push(Y), Y.__parent = H.__parent, H._icon && (N.removeLayer(H), g || N.addLayer(Y))) : H._iconNeedsUpdate = !0, H = H.__parent;
          delete h.__parent;
        },
        _isOrIsParent: function(h, p) {
          for (; p; ) {
            if (h === p)
              return !0;
            p = p.parentNode;
          }
          return !1;
        },
        //Override L.Evented.fire
        fire: function(h, p, g) {
          if (p && p.layer instanceof L.MarkerCluster) {
            if (p.originalEvent && this._isOrIsParent(p.layer._icon, p.originalEvent.relatedTarget))
              return;
            h = "cluster" + h;
          }
          L.FeatureGroup.prototype.fire.call(this, h, p, g);
        },
        //Override L.Evented.listens
        listens: function(h, p) {
          return L.FeatureGroup.prototype.listens.call(this, h, p) || L.FeatureGroup.prototype.listens.call(this, "cluster" + h, p);
        },
        //Default functionality
        _defaultIconCreateFunction: function(h) {
          var p = h.getChildCount(), g = " marker-cluster-";
          return p < 10 ? g += "small" : p < 100 ? g += "medium" : g += "large", new L.DivIcon({ html: "<div><span>" + p + "</span></div>", className: "marker-cluster" + g, iconSize: new L.Point(40, 40) });
        },
        _bindEvents: function() {
          var h = this._map, p = this.options.spiderfyOnMaxZoom, g = this.options.showCoverageOnHover, _ = this.options.zoomToBoundsOnClick, v = this.options.spiderfyOnEveryZoom;
          (p || _ || v) && this.on("clusterclick clusterkeypress", this._zoomOrSpiderfy, this), g && (this.on("clustermouseover", this._showCoverage, this), this.on("clustermouseout", this._hideCoverage, this), h.on("zoomend", this._hideCoverage, this));
        },
        _zoomOrSpiderfy: function(h) {
          var p = h.layer, g = p;
          if (!(h.type === "clusterkeypress" && h.originalEvent && h.originalEvent.keyCode !== 13)) {
            for (; g._childClusters.length === 1; )
              g = g._childClusters[0];
            g._zoom === this._maxZoom && g._childCount === p._childCount && this.options.spiderfyOnMaxZoom ? p.spiderfy() : this.options.zoomToBoundsOnClick && p.zoomToBounds(), this.options.spiderfyOnEveryZoom && p.spiderfy(), h.originalEvent && h.originalEvent.keyCode === 13 && this._map._container.focus();
          }
        },
        _showCoverage: function(h) {
          var p = this._map;
          this._inZoomAnimation || (this._shownPolygon && p.removeLayer(this._shownPolygon), h.layer.getChildCount() > 2 && h.layer !== this._spiderfied && (this._shownPolygon = new L.Polygon(h.layer.getConvexHull(), this.options.polygonOptions), p.addLayer(this._shownPolygon)));
        },
        _hideCoverage: function() {
          this._shownPolygon && (this._map.removeLayer(this._shownPolygon), this._shownPolygon = null);
        },
        _unbindEvents: function() {
          var h = this.options.spiderfyOnMaxZoom, p = this.options.showCoverageOnHover, g = this.options.zoomToBoundsOnClick, _ = this.options.spiderfyOnEveryZoom, v = this._map;
          (h || g || _) && this.off("clusterclick clusterkeypress", this._zoomOrSpiderfy, this), p && (this.off("clustermouseover", this._showCoverage, this), this.off("clustermouseout", this._hideCoverage, this), v.off("zoomend", this._hideCoverage, this));
        },
        _zoomEnd: function() {
          this._map && (this._mergeSplitClusters(), this._zoom = Math.round(this._map._zoom), this._currentShownBounds = this._getExpandedVisibleBounds());
        },
        _moveEnd: function() {
          if (!this._inZoomAnimation) {
            var h = this._getExpandedVisibleBounds();
            this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), this._zoom, h), this._topClusterLevel._recursivelyAddChildrenToMap(null, Math.round(this._map._zoom), h), this._currentShownBounds = h;
          }
        },
        _generateInitialClusters: function() {
          var h = Math.ceil(this._map.getMaxZoom()), p = Math.floor(this._map.getMinZoom()), g = this.options.maxClusterRadius, _ = g;
          typeof g != "function" && (_ = function() {
            return g;
          }), this.options.disableClusteringAtZoom !== null && (h = this.options.disableClusteringAtZoom - 1), this._maxZoom = h, this._gridClusters = {}, this._gridUnclustered = {};
          for (var v = h; v >= p; v--)
            this._gridClusters[v] = new L.DistanceGrid(_(v)), this._gridUnclustered[v] = new L.DistanceGrid(_(v));
          this._topClusterLevel = new this._markerCluster(this, p - 1);
        },
        //Zoom: Zoom to start adding at (Pass this._maxZoom to start at the bottom)
        _addLayer: function(h, p) {
          var g = this._gridClusters, _ = this._gridUnclustered, v = Math.floor(this._map.getMinZoom()), N, E;
          for (this.options.singleMarkerMode && this._overrideMarkerIcon(h), h.on(this._childMarkerEventHandlers, this); p >= v; p--) {
            N = this._map.project(h.getLatLng(), p);
            var R = g[p].getNearObject(N);
            if (R) {
              R._addChild(h), h.__parent = R;
              return;
            }
            if (R = _[p].getNearObject(N), R) {
              var H = R.__parent;
              H && this._removeLayer(R, !1);
              var tt = new this._markerCluster(this, p, R, h);
              g[p].addObject(tt, this._map.project(tt._cLatLng, p)), R.__parent = tt, h.__parent = tt;
              var Y = tt;
              for (E = p - 1; E > H._zoom; E--)
                Y = new this._markerCluster(this, E, Y), g[E].addObject(Y, this._map.project(R.getLatLng(), E));
              H._addChild(Y), this._removeFromGridUnclustered(R, p);
              return;
            }
            _[p].addObject(h, N);
          }
          this._topClusterLevel._addChild(h), h.__parent = this._topClusterLevel;
        },
        /**
         * Refreshes the icon of all "dirty" visible clusters.
         * Non-visible "dirty" clusters will be updated when they are added to the map.
         * @private
         */
        _refreshClustersIcons: function() {
          this._featureGroup.eachLayer(function(h) {
            h instanceof L.MarkerCluster && h._iconNeedsUpdate && h._updateIcon();
          });
        },
        //Enqueue code to fire after the marker expand/contract has happened
        _enqueue: function(h) {
          this._queue.push(h), this._queueTimeout || (this._queueTimeout = setTimeout(L.bind(this._processQueue, this), 300));
        },
        _processQueue: function() {
          for (var h = 0; h < this._queue.length; h++)
            this._queue[h].call(this);
          this._queue.length = 0, clearTimeout(this._queueTimeout), this._queueTimeout = null;
        },
        //Merge and split any existing clusters that are too big or small
        _mergeSplitClusters: function() {
          var h = Math.round(this._map._zoom);
          this._processQueue(), this._zoom < h && this._currentShownBounds.intersects(this._getExpandedVisibleBounds()) ? (this._animationStart(), this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), this._zoom, this._getExpandedVisibleBounds()), this._animationZoomIn(this._zoom, h)) : this._zoom > h ? (this._animationStart(), this._animationZoomOut(this._zoom, h)) : this._moveEnd();
        },
        //Gets the maps visible bounds expanded in each direction by the size of the screen (so the user cannot see an area we do not cover in one pan)
        _getExpandedVisibleBounds: function() {
          if (this.options.removeOutsideVisibleBounds) {
            if (L.Browser.mobile)
              return this._checkBoundsMaxLat(this._map.getBounds());
          } else return this._mapBoundsInfinite;
          return this._checkBoundsMaxLat(this._map.getBounds().pad(1));
        },
        /**
         * Expands the latitude to Infinity (or -Infinity) if the input bounds reach the map projection maximum defined latitude
         * (in the case of Web/Spherical Mercator, it is 85.0511287798 / see https://en.wikipedia.org/wiki/Web_Mercator#Formulas).
         * Otherwise, the removeOutsideVisibleBounds option will remove markers beyond that limit, whereas the same markers without
         * this option (or outside MCG) will have their position floored (ceiled) by the projection and rendered at that limit,
         * making the user think that MCG "eats" them and never displays them again.
         * @param bounds L.LatLngBounds
         * @returns {L.LatLngBounds}
         * @private
         */
        _checkBoundsMaxLat: function(h) {
          var p = this._maxLat;
          return p !== void 0 && (h.getNorth() >= p && (h._northEast.lat = 1 / 0), h.getSouth() <= -p && (h._southWest.lat = -1 / 0)), h;
        },
        //Shared animation code
        _animationAddLayerNonAnimated: function(h, p) {
          if (p === h)
            this._featureGroup.addLayer(h);
          else if (p._childCount === 2) {
            p._addToMap();
            var g = p.getAllChildMarkers();
            this._featureGroup.removeLayer(g[0]), this._featureGroup.removeLayer(g[1]);
          } else
            p._updateIcon();
        },
        /**
         * Extracts individual (i.e. non-group) layers from a Layer Group.
         * @param group to extract layers from.
         * @param output {Array} in which to store the extracted layers.
         * @returns {*|Array}
         * @private
         */
        _extractNonGroupLayers: function(h, p) {
          var g = h.getLayers(), _ = 0, v;
          for (p = p || []; _ < g.length; _++) {
            if (v = g[_], v instanceof L.LayerGroup) {
              this._extractNonGroupLayers(v, p);
              continue;
            }
            p.push(v);
          }
          return p;
        },
        /**
         * Implements the singleMarkerMode option.
         * @param layer Marker to re-style using the Clusters iconCreateFunction.
         * @returns {L.Icon} The newly created icon.
         * @private
         */
        _overrideMarkerIcon: function(h) {
          var p = h.options.icon = this.options.iconCreateFunction({
            getChildCount: function() {
              return 1;
            },
            getAllChildMarkers: function() {
              return [h];
            }
          });
          return p;
        }
      });
      L.MarkerClusterGroup.include({
        _mapBoundsInfinite: new L.LatLngBounds(new L.LatLng(-1 / 0, -1 / 0), new L.LatLng(1 / 0, 1 / 0))
      }), L.MarkerClusterGroup.include({
        _noAnimation: {
          //Non Animated versions of everything
          _animationStart: function() {
          },
          _animationZoomIn: function(h, p) {
            this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), h), this._topClusterLevel._recursivelyAddChildrenToMap(null, p, this._getExpandedVisibleBounds()), this.fire("animationend");
          },
          _animationZoomOut: function(h, p) {
            this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), h), this._topClusterLevel._recursivelyAddChildrenToMap(null, p, this._getExpandedVisibleBounds()), this.fire("animationend");
          },
          _animationAddLayer: function(h, p) {
            this._animationAddLayerNonAnimated(h, p);
          }
        },
        _withAnimation: {
          //Animated versions here
          _animationStart: function() {
            this._map._mapPane.className += " leaflet-cluster-anim", this._inZoomAnimation++;
          },
          _animationZoomIn: function(h, p) {
            var g = this._getExpandedVisibleBounds(), _ = this._featureGroup, v = Math.floor(this._map.getMinZoom()), N;
            this._ignoreMove = !0, this._topClusterLevel._recursively(g, h, v, function(E) {
              var R = E._latlng, H = E._markers, tt;
              for (g.contains(R) || (R = null), E._isSingleParent() && h + 1 === p ? (_.removeLayer(E), E._recursivelyAddChildrenToMap(null, p, g)) : (E.clusterHide(), E._recursivelyAddChildrenToMap(R, p, g)), N = H.length - 1; N >= 0; N--)
                tt = H[N], g.contains(tt._latlng) || _.removeLayer(tt);
            }), this._forceLayout(), this._topClusterLevel._recursivelyBecomeVisible(g, p), _.eachLayer(function(E) {
              !(E instanceof L.MarkerCluster) && E._icon && E.clusterShow();
            }), this._topClusterLevel._recursively(g, h, p, function(E) {
              E._recursivelyRestoreChildPositions(p);
            }), this._ignoreMove = !1, this._enqueue(function() {
              this._topClusterLevel._recursively(g, h, v, function(E) {
                _.removeLayer(E), E.clusterShow();
              }), this._animationEnd();
            });
          },
          _animationZoomOut: function(h, p) {
            this._animationZoomOutSingle(this._topClusterLevel, h - 1, p), this._topClusterLevel._recursivelyAddChildrenToMap(null, p, this._getExpandedVisibleBounds()), this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), h, this._getExpandedVisibleBounds());
          },
          _animationAddLayer: function(h, p) {
            var g = this, _ = this._featureGroup;
            _.addLayer(h), p !== h && (p._childCount > 2 ? (p._updateIcon(), this._forceLayout(), this._animationStart(), h._setPos(this._map.latLngToLayerPoint(p.getLatLng())), h.clusterHide(), this._enqueue(function() {
              _.removeLayer(h), h.clusterShow(), g._animationEnd();
            })) : (this._forceLayout(), g._animationStart(), g._animationZoomOutSingle(p, this._map.getMaxZoom(), this._zoom)));
          }
        },
        // Private methods for animated versions.
        _animationZoomOutSingle: function(h, p, g) {
          var _ = this._getExpandedVisibleBounds(), v = Math.floor(this._map.getMinZoom());
          h._recursivelyAnimateChildrenInAndAddSelfToMap(_, v, p + 1, g);
          var N = this;
          this._forceLayout(), h._recursivelyBecomeVisible(_, g), this._enqueue(function() {
            if (h._childCount === 1) {
              var E = h._markers[0];
              this._ignoreMove = !0, E.setLatLng(E.getLatLng()), this._ignoreMove = !1, E.clusterShow && E.clusterShow();
            } else
              h._recursively(_, g, v, function(R) {
                R._recursivelyRemoveChildrenFromMap(_, v, p + 1);
              });
            N._animationEnd();
          });
        },
        _animationEnd: function() {
          this._map && (this._map._mapPane.className = this._map._mapPane.className.replace(" leaflet-cluster-anim", "")), this._inZoomAnimation--, this.fire("animationend");
        },
        //Force a browser layout of stuff in the map
        // Should apply the current opacity and location to all elements so we can update them again for an animation
        _forceLayout: function() {
          L.Util.falseFn(document.body.offsetWidth);
        }
      }), L.markerClusterGroup = function(h) {
        return new L.MarkerClusterGroup(h);
      };
      var lt = L.MarkerCluster = L.Marker.extend({
        options: L.Icon.prototype.options,
        initialize: function(h, p, g, _) {
          L.Marker.prototype.initialize.call(
            this,
            g ? g._cLatLng || g.getLatLng() : new L.LatLng(0, 0),
            { icon: this, pane: h.options.clusterPane }
          ), this._group = h, this._zoom = p, this._markers = [], this._childClusters = [], this._childCount = 0, this._iconNeedsUpdate = !0, this._boundsNeedUpdate = !0, this._bounds = new L.LatLngBounds(), g && this._addChild(g), _ && this._addChild(_);
        },
        //Recursively retrieve all child markers of this cluster
        getAllChildMarkers: function(h, p) {
          h = h || [];
          for (var g = this._childClusters.length - 1; g >= 0; g--)
            this._childClusters[g].getAllChildMarkers(h, p);
          for (var _ = this._markers.length - 1; _ >= 0; _--)
            p && this._markers[_].__dragStart || h.push(this._markers[_]);
          return h;
        },
        //Returns the count of how many child markers we have
        getChildCount: function() {
          return this._childCount;
        },
        //Zoom to the minimum of showing all of the child markers, or the extents of this cluster
        zoomToBounds: function(h) {
          for (var p = this._childClusters.slice(), g = this._group._map, _ = g.getBoundsZoom(this._bounds), v = this._zoom + 1, N = g.getZoom(), E; p.length > 0 && _ > v; ) {
            v++;
            var R = [];
            for (E = 0; E < p.length; E++)
              R = R.concat(p[E]._childClusters);
            p = R;
          }
          _ > v ? this._group._map.setView(this._latlng, v) : _ <= N ? this._group._map.setView(this._latlng, N + 1) : this._group._map.fitBounds(this._bounds, h);
        },
        getBounds: function() {
          var h = new L.LatLngBounds();
          return h.extend(this._bounds), h;
        },
        _updateIcon: function() {
          this._iconNeedsUpdate = !0, this._icon && this.setIcon(this);
        },
        //Cludge for Icon, we pretend to be an icon for performance
        createIcon: function() {
          return this._iconNeedsUpdate && (this._iconObj = this._group.options.iconCreateFunction(this), this._iconNeedsUpdate = !1), this._iconObj.createIcon();
        },
        createShadow: function() {
          return this._iconObj.createShadow();
        },
        _addChild: function(h, p) {
          this._iconNeedsUpdate = !0, this._boundsNeedUpdate = !0, this._setClusterCenter(h), h instanceof L.MarkerCluster ? (p || (this._childClusters.push(h), h.__parent = this), this._childCount += h._childCount) : (p || this._markers.push(h), this._childCount++), this.__parent && this.__parent._addChild(h, !0);
        },
        /**
         * Makes sure the cluster center is set. If not, uses the child center if it is a cluster, or the marker position.
         * @param child L.MarkerCluster|L.Marker that will be used as cluster center if not defined yet.
         * @private
         */
        _setClusterCenter: function(h) {
          this._cLatLng || (this._cLatLng = h._cLatLng || h._latlng);
        },
        /**
         * Assigns impossible bounding values so that the next extend entirely determines the new bounds.
         * This method avoids having to trash the previous L.LatLngBounds object and to create a new one, which is much slower for this class.
         * As long as the bounds are not extended, most other methods would probably fail, as they would with bounds initialized but not extended.
         * @private
         */
        _resetBounds: function() {
          var h = this._bounds;
          h._southWest && (h._southWest.lat = 1 / 0, h._southWest.lng = 1 / 0), h._northEast && (h._northEast.lat = -1 / 0, h._northEast.lng = -1 / 0);
        },
        _recalculateBounds: function() {
          var h = this._markers, p = this._childClusters, g = 0, _ = 0, v = this._childCount, N, E, R, H;
          if (v !== 0) {
            for (this._resetBounds(), N = 0; N < h.length; N++)
              R = h[N]._latlng, this._bounds.extend(R), g += R.lat, _ += R.lng;
            for (N = 0; N < p.length; N++)
              E = p[N], E._boundsNeedUpdate && E._recalculateBounds(), this._bounds.extend(E._bounds), R = E._wLatLng, H = E._childCount, g += R.lat * H, _ += R.lng * H;
            this._latlng = this._wLatLng = new L.LatLng(g / v, _ / v), this._boundsNeedUpdate = !1;
          }
        },
        //Set our markers position as given and add it to the map
        _addToMap: function(h) {
          h && (this._backupLatlng = this._latlng, this.setLatLng(h)), this._group._featureGroup.addLayer(this);
        },
        _recursivelyAnimateChildrenIn: function(h, p, g) {
          this._recursively(
            h,
            this._group._map.getMinZoom(),
            g - 1,
            function(_) {
              var v = _._markers, N, E;
              for (N = v.length - 1; N >= 0; N--)
                E = v[N], E._icon && (E._setPos(p), E.clusterHide());
            },
            function(_) {
              var v = _._childClusters, N, E;
              for (N = v.length - 1; N >= 0; N--)
                E = v[N], E._icon && (E._setPos(p), E.clusterHide());
            }
          );
        },
        _recursivelyAnimateChildrenInAndAddSelfToMap: function(h, p, g, _) {
          this._recursively(
            h,
            _,
            p,
            function(v) {
              v._recursivelyAnimateChildrenIn(h, v._group._map.latLngToLayerPoint(v.getLatLng()).round(), g), v._isSingleParent() && g - 1 === _ ? (v.clusterShow(), v._recursivelyRemoveChildrenFromMap(h, p, g)) : v.clusterHide(), v._addToMap();
            }
          );
        },
        _recursivelyBecomeVisible: function(h, p) {
          this._recursively(h, this._group._map.getMinZoom(), p, null, function(g) {
            g.clusterShow();
          });
        },
        _recursivelyAddChildrenToMap: function(h, p, g) {
          this._recursively(
            g,
            this._group._map.getMinZoom() - 1,
            p,
            function(_) {
              if (p !== _._zoom)
                for (var v = _._markers.length - 1; v >= 0; v--) {
                  var N = _._markers[v];
                  g.contains(N._latlng) && (h && (N._backupLatlng = N.getLatLng(), N.setLatLng(h), N.clusterHide && N.clusterHide()), _._group._featureGroup.addLayer(N));
                }
            },
            function(_) {
              _._addToMap(h);
            }
          );
        },
        _recursivelyRestoreChildPositions: function(h) {
          for (var p = this._markers.length - 1; p >= 0; p--) {
            var g = this._markers[p];
            g._backupLatlng && (g.setLatLng(g._backupLatlng), delete g._backupLatlng);
          }
          if (h - 1 === this._zoom)
            for (var _ = this._childClusters.length - 1; _ >= 0; _--)
              this._childClusters[_]._restorePosition();
          else
            for (var v = this._childClusters.length - 1; v >= 0; v--)
              this._childClusters[v]._recursivelyRestoreChildPositions(h);
        },
        _restorePosition: function() {
          this._backupLatlng && (this.setLatLng(this._backupLatlng), delete this._backupLatlng);
        },
        //exceptBounds: If set, don't remove any markers/clusters in it
        _recursivelyRemoveChildrenFromMap: function(h, p, g, _) {
          var v, N;
          this._recursively(
            h,
            p - 1,
            g - 1,
            function(E) {
              for (N = E._markers.length - 1; N >= 0; N--)
                v = E._markers[N], (!_ || !_.contains(v._latlng)) && (E._group._featureGroup.removeLayer(v), v.clusterShow && v.clusterShow());
            },
            function(E) {
              for (N = E._childClusters.length - 1; N >= 0; N--)
                v = E._childClusters[N], (!_ || !_.contains(v._latlng)) && (E._group._featureGroup.removeLayer(v), v.clusterShow && v.clusterShow());
            }
          );
        },
        //Run the given functions recursively to this and child clusters
        // boundsToApplyTo: a L.LatLngBounds representing the bounds of what clusters to recurse in to
        // zoomLevelToStart: zoom level to start running functions (inclusive)
        // zoomLevelToStop: zoom level to stop running functions (inclusive)
        // runAtEveryLevel: function that takes an L.MarkerCluster as an argument that should be applied on every level
        // runAtBottomLevel: function that takes an L.MarkerCluster as an argument that should be applied at only the bottom level
        _recursively: function(h, p, g, _, v) {
          var N = this._childClusters, E = this._zoom, R, H;
          if (p <= E && (_ && _(this), v && E === g && v(this)), E < p || E < g)
            for (R = N.length - 1; R >= 0; R--)
              H = N[R], H._boundsNeedUpdate && H._recalculateBounds(), h.intersects(H._bounds) && H._recursively(h, p, g, _, v);
        },
        //Returns true if we are the parent of only one cluster and that cluster is the same as us
        _isSingleParent: function() {
          return this._childClusters.length > 0 && this._childClusters[0]._childCount === this._childCount;
        }
      });
      L.Marker.include({
        clusterHide: function() {
          var h = this.options.opacity;
          return this.setOpacity(0), this.options.opacity = h, this;
        },
        clusterShow: function() {
          return this.setOpacity(this.options.opacity);
        }
      }), L.DistanceGrid = function(h) {
        this._cellSize = h, this._sqCellSize = h * h, this._grid = {}, this._objectPoint = {};
      }, L.DistanceGrid.prototype = {
        addObject: function(h, p) {
          var g = this._getCoord(p.x), _ = this._getCoord(p.y), v = this._grid, N = v[_] = v[_] || {}, E = N[g] = N[g] || [], R = L.Util.stamp(h);
          this._objectPoint[R] = p, E.push(h);
        },
        updateObject: function(h, p) {
          this.removeObject(h), this.addObject(h, p);
        },
        //Returns true if the object was found
        removeObject: function(h, p) {
          var g = this._getCoord(p.x), _ = this._getCoord(p.y), v = this._grid, N = v[_] = v[_] || {}, E = N[g] = N[g] || [], R, H;
          for (delete this._objectPoint[L.Util.stamp(h)], R = 0, H = E.length; R < H; R++)
            if (E[R] === h)
              return E.splice(R, 1), H === 1 && delete N[g], !0;
        },
        eachObject: function(h, p) {
          var g, _, v, N, E, R, H, tt = this._grid;
          for (g in tt) {
            E = tt[g];
            for (_ in E)
              for (R = E[_], v = 0, N = R.length; v < N; v++)
                H = h.call(p, R[v]), H && (v--, N--);
          }
        },
        getNearObject: function(h) {
          var p = this._getCoord(h.x), g = this._getCoord(h.y), _, v, N, E, R, H, tt, Y, ct = this._objectPoint, W = this._sqCellSize, I = null;
          for (_ = g - 1; _ <= g + 1; _++)
            if (E = this._grid[_], E) {
              for (v = p - 1; v <= p + 1; v++)
                if (R = E[v], R)
                  for (N = 0, H = R.length; N < H; N++)
                    tt = R[N], Y = this._sqDist(ct[L.Util.stamp(tt)], h), (Y < W || Y <= W && I === null) && (W = Y, I = tt);
            }
          return I;
        },
        _getCoord: function(h) {
          var p = Math.floor(h / this._cellSize);
          return isFinite(p) ? p : h;
        },
        _sqDist: function(h, p) {
          var g = p.x - h.x, _ = p.y - h.y;
          return g * g + _ * _;
        }
      }, (function() {
        L.QuickHull = {
          /*
           * @param {Object} cpt a point to be measured from the baseline
           * @param {Array} bl the baseline, as represented by a two-element
           *   array of latlng objects.
           * @returns {Number} an approximate distance measure
           */
          getDistant: function(h, p) {
            var g = p[1].lat - p[0].lat, _ = p[0].lng - p[1].lng;
            return _ * (h.lat - p[0].lat) + g * (h.lng - p[0].lng);
          },
          /*
           * @param {Array} baseLine a two-element array of latlng objects
           *   representing the baseline to project from
           * @param {Array} latLngs an array of latlng objects
           * @returns {Object} the maximum point and all new points to stay
           *   in consideration for the hull.
           */
          findMostDistantPointFromBaseLine: function(h, p) {
            var g = 0, _ = null, v = [], N, E, R;
            for (N = p.length - 1; N >= 0; N--) {
              if (E = p[N], R = this.getDistant(E, h), R > 0)
                v.push(E);
              else
                continue;
              R > g && (g = R, _ = E);
            }
            return { maxPoint: _, newPoints: v };
          },
          /*
           * Given a baseline, compute the convex hull of latLngs as an array
           * of latLngs.
           *
           * @param {Array} latLngs
           * @returns {Array}
           */
          buildConvexHull: function(h, p) {
            var g = [], _ = this.findMostDistantPointFromBaseLine(h, p);
            return _.maxPoint ? (g = g.concat(
              this.buildConvexHull([h[0], _.maxPoint], _.newPoints)
            ), g = g.concat(
              this.buildConvexHull([_.maxPoint, h[1]], _.newPoints)
            ), g) : [h[0]];
          },
          /*
           * Given an array of latlngs, compute a convex hull as an array
           * of latlngs
           *
           * @param {Array} latLngs
           * @returns {Array}
           */
          getConvexHull: function(h) {
            var p = !1, g = !1, _ = !1, v = !1, N = null, E = null, R = null, H = null, tt = null, Y = null, ct;
            for (ct = h.length - 1; ct >= 0; ct--) {
              var W = h[ct];
              (p === !1 || W.lat > p) && (N = W, p = W.lat), (g === !1 || W.lat < g) && (E = W, g = W.lat), (_ === !1 || W.lng > _) && (R = W, _ = W.lng), (v === !1 || W.lng < v) && (H = W, v = W.lng);
            }
            g !== p ? (Y = E, tt = N) : (Y = H, tt = R);
            var I = [].concat(
              this.buildConvexHull([Y, tt], h),
              this.buildConvexHull([tt, Y], h)
            );
            return I;
          }
        };
      })(), L.MarkerCluster.include({
        getConvexHull: function() {
          var h = this.getAllChildMarkers(), p = [], g, _;
          for (_ = h.length - 1; _ >= 0; _--)
            g = h[_].getLatLng(), p.push(g);
          return L.QuickHull.getConvexHull(p);
        }
      }), L.MarkerCluster.include({
        _2PI: Math.PI * 2,
        _circleFootSeparation: 25,
        //related to circumference of circle
        _circleStartAngle: 0,
        _spiralFootSeparation: 28,
        //related to size of spiral (experiment!)
        _spiralLengthStart: 11,
        _spiralLengthFactor: 5,
        _circleSpiralSwitchover: 9,
        //show spiral instead of circle from this marker count upwards.
        // 0 -> always spiral; Infinity -> always circle
        spiderfy: function() {
          if (!(this._group._spiderfied === this || this._group._inZoomAnimation)) {
            var h = this.getAllChildMarkers(null, !0), p = this._group, g = p._map, _ = g.latLngToLayerPoint(this._latlng), v;
            this._group._unspiderfy(), this._group._spiderfied = this, this._group.options.spiderfyShapePositions ? v = this._group.options.spiderfyShapePositions(h.length, _) : h.length >= this._circleSpiralSwitchover ? v = this._generatePointsSpiral(h.length, _) : (_.y += 10, v = this._generatePointsCircle(h.length, _)), this._animationSpiderfy(h, v);
          }
        },
        unspiderfy: function(h) {
          this._group._inZoomAnimation || (this._animationUnspiderfy(h), this._group._spiderfied = null);
        },
        _generatePointsCircle: function(h, p) {
          var g = this._group.options.spiderfyDistanceMultiplier * this._circleFootSeparation * (2 + h), _ = g / this._2PI, v = this._2PI / h, N = [], E, R;
          for (_ = Math.max(_, 35), N.length = h, E = 0; E < h; E++)
            R = this._circleStartAngle + E * v, N[E] = new L.Point(p.x + _ * Math.cos(R), p.y + _ * Math.sin(R))._round();
          return N;
        },
        _generatePointsSpiral: function(h, p) {
          var g = this._group.options.spiderfyDistanceMultiplier, _ = g * this._spiralLengthStart, v = g * this._spiralFootSeparation, N = g * this._spiralLengthFactor * this._2PI, E = 0, R = [], H;
          for (R.length = h, H = h; H >= 0; H--)
            H < h && (R[H] = new L.Point(p.x + _ * Math.cos(E), p.y + _ * Math.sin(E))._round()), E += v / _ + H * 5e-4, _ += N / E;
          return R;
        },
        _noanimationUnspiderfy: function() {
          var h = this._group, p = h._map, g = h._featureGroup, _ = this.getAllChildMarkers(null, !0), v, N;
          for (h._ignoreMove = !0, this.setOpacity(1), N = _.length - 1; N >= 0; N--)
            v = _[N], g.removeLayer(v), v._preSpiderfyLatlng && (v.setLatLng(v._preSpiderfyLatlng), delete v._preSpiderfyLatlng), v.setZIndexOffset && v.setZIndexOffset(0), v._spiderLeg && (p.removeLayer(v._spiderLeg), delete v._spiderLeg);
          h.fire("unspiderfied", {
            cluster: this,
            markers: _
          }), h._ignoreMove = !1, h._spiderfied = null;
        }
      }), L.MarkerClusterNonAnimated = L.MarkerCluster.extend({
        _animationSpiderfy: function(h, p) {
          var g = this._group, _ = g._map, v = g._featureGroup, N = this._group.options.spiderLegPolylineOptions, E, R, H, tt;
          for (g._ignoreMove = !0, E = 0; E < h.length; E++)
            tt = _.layerPointToLatLng(p[E]), R = h[E], H = new L.Polyline([this._latlng, tt], N), _.addLayer(H), R._spiderLeg = H, R._preSpiderfyLatlng = R._latlng, R.setLatLng(tt), R.setZIndexOffset && R.setZIndexOffset(1e6), v.addLayer(R);
          this.setOpacity(0.3), g._ignoreMove = !1, g.fire("spiderfied", {
            cluster: this,
            markers: h
          });
        },
        _animationUnspiderfy: function() {
          this._noanimationUnspiderfy();
        }
      }), L.MarkerCluster.include({
        _animationSpiderfy: function(h, p) {
          var g = this, _ = this._group, v = _._map, N = _._featureGroup, E = this._latlng, R = v.latLngToLayerPoint(E), H = L.Path.SVG, tt = L.extend({}, this._group.options.spiderLegPolylineOptions), Y = tt.opacity, ct, W, I, at, Ht, Gt;
          for (Y === void 0 && (Y = L.MarkerClusterGroup.prototype.options.spiderLegPolylineOptions.opacity), H ? (tt.opacity = 0, tt.className = (tt.className || "") + " leaflet-cluster-spider-leg") : tt.opacity = Y, _._ignoreMove = !0, ct = 0; ct < h.length; ct++)
            W = h[ct], Gt = v.layerPointToLatLng(p[ct]), I = new L.Polyline([E, Gt], tt), v.addLayer(I), W._spiderLeg = I, H && (at = I._path, Ht = at.getTotalLength() + 0.1, at.style.strokeDasharray = Ht, at.style.strokeDashoffset = Ht), W.setZIndexOffset && W.setZIndexOffset(1e6), W.clusterHide && W.clusterHide(), N.addLayer(W), W._setPos && W._setPos(R);
          for (_._forceLayout(), _._animationStart(), ct = h.length - 1; ct >= 0; ct--)
            Gt = v.layerPointToLatLng(p[ct]), W = h[ct], W._preSpiderfyLatlng = W._latlng, W.setLatLng(Gt), W.clusterShow && W.clusterShow(), H && (I = W._spiderLeg, at = I._path, at.style.strokeDashoffset = 0, I.setStyle({ opacity: Y }));
          this.setOpacity(0.3), _._ignoreMove = !1, setTimeout(function() {
            _._animationEnd(), _.fire("spiderfied", {
              cluster: g,
              markers: h
            });
          }, 200);
        },
        _animationUnspiderfy: function(h) {
          var p = this, g = this._group, _ = g._map, v = g._featureGroup, N = h ? _._latLngToNewLayerPoint(this._latlng, h.zoom, h.center) : _.latLngToLayerPoint(this._latlng), E = this.getAllChildMarkers(null, !0), R = L.Path.SVG, H, tt, Y, ct, W, I;
          for (g._ignoreMove = !0, g._animationStart(), this.setOpacity(1), tt = E.length - 1; tt >= 0; tt--)
            H = E[tt], H._preSpiderfyLatlng && (H.closePopup(), H.setLatLng(H._preSpiderfyLatlng), delete H._preSpiderfyLatlng, I = !0, H._setPos && (H._setPos(N), I = !1), H.clusterHide && (H.clusterHide(), I = !1), I && v.removeLayer(H), R && (Y = H._spiderLeg, ct = Y._path, W = ct.getTotalLength() + 0.1, ct.style.strokeDashoffset = W, Y.setStyle({ opacity: 0 })));
          g._ignoreMove = !1, setTimeout(function() {
            var at = 0;
            for (tt = E.length - 1; tt >= 0; tt--)
              H = E[tt], H._spiderLeg && at++;
            for (tt = E.length - 1; tt >= 0; tt--)
              H = E[tt], H._spiderLeg && (H.clusterShow && H.clusterShow(), H.setZIndexOffset && H.setZIndexOffset(0), at > 1 && v.removeLayer(H), _.removeLayer(H._spiderLeg), delete H._spiderLeg);
            g._animationEnd(), g.fire("unspiderfied", {
              cluster: p,
              markers: E
            });
          }, 200);
        }
      }), L.MarkerClusterGroup.include({
        //The MarkerCluster currently spiderfied (if any)
        _spiderfied: null,
        unspiderfy: function() {
          this._unspiderfy.apply(this, arguments);
        },
        _spiderfierOnAdd: function() {
          this._map.on("click", this._unspiderfyWrapper, this), this._map.options.zoomAnimation && this._map.on("zoomstart", this._unspiderfyZoomStart, this), this._map.on("zoomend", this._noanimationUnspiderfy, this), L.Browser.touch || this._map.getRenderer(this);
        },
        _spiderfierOnRemove: function() {
          this._map.off("click", this._unspiderfyWrapper, this), this._map.off("zoomstart", this._unspiderfyZoomStart, this), this._map.off("zoomanim", this._unspiderfyZoomAnim, this), this._map.off("zoomend", this._noanimationUnspiderfy, this), this._noanimationUnspiderfy();
        },
        //On zoom start we add a zoomanim handler so that we are guaranteed to be last (after markers are animated)
        //This means we can define the animation they do rather than Markers doing an animation to their actual location
        _unspiderfyZoomStart: function() {
          this._map && this._map.on("zoomanim", this._unspiderfyZoomAnim, this);
        },
        _unspiderfyZoomAnim: function(h) {
          L.DomUtil.hasClass(this._map._mapPane, "leaflet-touching") || (this._map.off("zoomanim", this._unspiderfyZoomAnim, this), this._unspiderfy(h));
        },
        _unspiderfyWrapper: function() {
          this._unspiderfy();
        },
        _unspiderfy: function(h) {
          this._spiderfied && this._spiderfied.unspiderfy(h);
        },
        _noanimationUnspiderfy: function() {
          this._spiderfied && this._spiderfied._noanimationUnspiderfy();
        },
        //If the given layer is currently being spiderfied then we unspiderfy it so it isn't on the map anymore etc
        _unspiderfyLayer: function(h) {
          h._spiderLeg && (this._featureGroup.removeLayer(h), h.clusterShow && h.clusterShow(), h.setZIndexOffset && h.setZIndexOffset(0), this._map.removeLayer(h._spiderLeg), delete h._spiderLeg);
        }
      }), L.MarkerClusterGroup.include({
        /**
         * Updates the icon of all clusters which are parents of the given marker(s).
         * In singleMarkerMode, also updates the given marker(s) icon.
         * @param layers L.MarkerClusterGroup|L.LayerGroup|Array(L.Marker)|Map(L.Marker)|
         * L.MarkerCluster|L.Marker (optional) list of markers (or single marker) whose parent
         * clusters need to be updated. If not provided, retrieves all child markers of this.
         * @returns {L.MarkerClusterGroup}
         */
        refreshClusters: function(h) {
          return h ? h instanceof L.MarkerClusterGroup ? h = h._topClusterLevel.getAllChildMarkers() : h instanceof L.LayerGroup ? h = h._layers : h instanceof L.MarkerCluster ? h = h.getAllChildMarkers() : h instanceof L.Marker && (h = [h]) : h = this._topClusterLevel.getAllChildMarkers(), this._flagParentsIconsNeedUpdate(h), this._refreshClustersIcons(), this.options.singleMarkerMode && this._refreshSingleMarkerModeMarkers(h), this;
        },
        /**
         * Simply flags all parent clusters of the given markers as having a "dirty" icon.
         * @param layers Array(L.Marker)|Map(L.Marker) list of markers.
         * @private
         */
        _flagParentsIconsNeedUpdate: function(h) {
          var p, g;
          for (p in h)
            for (g = h[p].__parent; g; )
              g._iconNeedsUpdate = !0, g = g.__parent;
        },
        /**
         * Re-draws the icon of the supplied markers.
         * To be used in singleMarkerMode only.
         * @param layers Array(L.Marker)|Map(L.Marker) list of markers.
         * @private
         */
        _refreshSingleMarkerModeMarkers: function(h) {
          var p, g;
          for (p in h)
            g = h[p], this.hasLayer(g) && g.setIcon(this._overrideMarkerIcon(g));
        }
      }), L.Marker.include({
        /**
         * Updates the given options in the marker's icon and refreshes the marker.
         * @param options map object of icon options.
         * @param directlyRefreshClusters boolean (optional) true to trigger
         * MCG.refreshClustersOf() right away with this single marker.
         * @returns {L.Marker}
         */
        refreshIconOptions: function(h, p) {
          var g = this.options.icon;
          return L.setOptions(g, h), this.setIcon(g), p && this.__parent && this.__parent._group.refreshClusters(this), this;
        }
      }), w.MarkerClusterGroup = A, w.MarkerCluster = lt, Object.defineProperty(w, "__esModule", { value: !0 });
    });
  })(er, er.exports)), er.exports;
}
Tp();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wp = (j) => j.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Id = (...j) => j.filter((it, w, A) => !!it && it.trim() !== "" && A.indexOf(it) === w).join(" ").trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Mp = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cp = Ct.forwardRef(
  ({
    color: j = "currentColor",
    size: it = 24,
    strokeWidth: w = 2,
    absoluteStrokeWidth: A,
    className: lt = "",
    children: h,
    iconNode: p,
    ...g
  }, _) => Ct.createElement(
    "svg",
    {
      ref: _,
      ...Mp,
      width: it,
      height: it,
      stroke: j,
      strokeWidth: A ? Number(w) * 24 / Number(it) : w,
      className: Id("lucide", lt),
      ...g
    },
    [
      ...p.map(([v, N]) => Ct.createElement(v, N)),
      ...Array.isArray(h) ? h : [h]
    ]
  )
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const re = (j, it) => {
  const w = Ct.forwardRef(
    ({ className: A, ...lt }, h) => Ct.createElement(Cp, {
      ref: h,
      iconNode: it,
      className: Id(`lucide-${wp(j)}`, A),
      ...lt
    })
  );
  return w.displayName = `${j}`, w;
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ap = re("ArrowUpRight", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Op = re("Bell", [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kp = re("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Np = re("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dp = re("CircleDot", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bp = re("Clock3", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16.5 12", key: "1aq6pp" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zp = re("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rp = re("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Up = re("Layers", [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo"
    }
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc"
    }
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6"
    }
  ]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yd = re("LocateFixed", [
  ["line", { x1: "2", x2: "5", y1: "12", y2: "12", key: "bvdh0s" }],
  ["line", { x1: "19", x2: "22", y1: "12", y2: "12", key: "1tbv5k" }],
  ["line", { x1: "12", x2: "12", y1: "2", y2: "5", key: "11lu5j" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }],
  ["circle", { cx: "12", cy: "12", r: "7", key: "fim9np" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vd = re("MapPin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xd = re("Map", [
  [
    "path",
    {
      d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",
      key: "169xi5"
    }
  ],
  ["path", { d: "M15 5.764v15", key: "1pn4in" }],
  ["path", { d: "M9 3.236v15", key: "1uimfh" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hp = re("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gp = re("Pencil", [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qd = re("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bc = re("Radar", [
  ["path", { d: "M19.07 4.93A10 10 0 0 0 6.99 3.34", key: "z3du51" }],
  ["path", { d: "M4 6h.01", key: "oypzma" }],
  ["path", { d: "M2.29 9.62A10 10 0 1 0 21.31 8.35", key: "qzzz0" }],
  ["path", { d: "M16.24 7.76A6 6 0 1 0 8.23 16.67", key: "1yjesh" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M17.99 11.66A6 6 0 0 1 15.77 16.67", key: "1u2y91" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "m13.41 10.59 5.66-5.66", key: "mhq4k0" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qp = re("Radio", [
  ["path", { d: "M4.9 19.1C1 15.2 1 8.8 4.9 4.9", key: "1vaf9d" }],
  ["path", { d: "M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5", key: "u1ii0m" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5", key: "1j5fej" }],
  ["path", { d: "M19.1 4.9C23 8.8 23 15.1 19.1 19", key: "10b0cb" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jp = re("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pp = re("Settings2", [
  ["path", { d: "M20 7h-9", key: "3s1dr2" }],
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zc = re("ShieldCheck", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yp = re("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fo = re("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), Vp = '.leaflet-pane,.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-tile-container,.leaflet-pane>svg,.leaflet-pane>canvas,.leaflet-zoom-box,.leaflet-image-layer,.leaflet-layer{position:absolute;left:0;top:0}.leaflet-container{overflow:hidden}.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow{-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-user-drag:none}.leaflet-tile::selection{background:transparent}.leaflet-safari .leaflet-tile{image-rendering:-webkit-optimize-contrast}.leaflet-safari .leaflet-tile-container{width:1600px;height:1600px;-webkit-transform-origin:0 0}.leaflet-marker-icon,.leaflet-marker-shadow{display:block}.leaflet-container .leaflet-overlay-pane svg{max-width:none!important;max-height:none!important}.leaflet-container .leaflet-marker-pane img,.leaflet-container .leaflet-shadow-pane img,.leaflet-container .leaflet-tile-pane img,.leaflet-container img.leaflet-image-layer,.leaflet-container .leaflet-tile{max-width:none!important;max-height:none!important;width:auto;padding:0}.leaflet-container img.leaflet-tile{mix-blend-mode:plus-lighter}.leaflet-container.leaflet-touch-zoom{-ms-touch-action:pan-x pan-y;touch-action:pan-x pan-y}.leaflet-container.leaflet-touch-drag{-ms-touch-action:pinch-zoom;touch-action:none;touch-action:pinch-zoom}.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom{-ms-touch-action:none;touch-action:none}.leaflet-container{-webkit-tap-highlight-color:transparent}.leaflet-container a{-webkit-tap-highlight-color:rgba(51,181,229,.4)}.leaflet-tile{filter:inherit;visibility:hidden}.leaflet-tile-loaded{visibility:inherit}.leaflet-zoom-box{width:0;height:0;-moz-box-sizing:border-box;box-sizing:border-box;z-index:800}.leaflet-overlay-pane svg{-moz-user-select:none}.leaflet-pane{z-index:400}.leaflet-tile-pane{z-index:200}.leaflet-overlay-pane{z-index:400}.leaflet-shadow-pane{z-index:500}.leaflet-marker-pane{z-index:600}.leaflet-tooltip-pane{z-index:650}.leaflet-popup-pane{z-index:700}.leaflet-map-pane canvas{z-index:100}.leaflet-map-pane svg{z-index:200}.leaflet-vml-shape{width:1px;height:1px}.lvml{behavior:url(#default#VML);display:inline-block;position:absolute}.leaflet-control{position:relative;z-index:800;pointer-events:visiblePainted;pointer-events:auto}.leaflet-top,.leaflet-bottom{position:absolute;z-index:1000;pointer-events:none}.leaflet-top{top:0}.leaflet-right{right:0}.leaflet-bottom{bottom:0}.leaflet-left{left:0}.leaflet-control{float:left;clear:both}.leaflet-right .leaflet-control{float:right}.leaflet-top .leaflet-control{margin-top:10px}.leaflet-bottom .leaflet-control{margin-bottom:10px}.leaflet-left .leaflet-control{margin-left:10px}.leaflet-right .leaflet-control{margin-right:10px}.leaflet-fade-anim .leaflet-popup{opacity:0;-webkit-transition:opacity .2s linear;-moz-transition:opacity .2s linear;transition:opacity .2s linear}.leaflet-fade-anim .leaflet-map-pane .leaflet-popup{opacity:1}.leaflet-zoom-animated{-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0}svg.leaflet-zoom-animated{will-change:transform}.leaflet-zoom-anim .leaflet-zoom-animated{-webkit-transition:-webkit-transform .25s cubic-bezier(0,0,.25,1);-moz-transition:-moz-transform .25s cubic-bezier(0,0,.25,1);transition:transform .25s cubic-bezier(0,0,.25,1)}.leaflet-zoom-anim .leaflet-tile,.leaflet-pan-anim .leaflet-tile{-webkit-transition:none;-moz-transition:none;transition:none}.leaflet-zoom-anim .leaflet-zoom-hide{visibility:hidden}.leaflet-interactive{cursor:pointer}.leaflet-grab{cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.leaflet-crosshair,.leaflet-crosshair .leaflet-interactive{cursor:crosshair}.leaflet-popup-pane,.leaflet-control{cursor:auto}.leaflet-dragging .leaflet-grab,.leaflet-dragging .leaflet-grab .leaflet-interactive,.leaflet-dragging .leaflet-marker-draggable{cursor:move;cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-image-layer,.leaflet-pane>svg path,.leaflet-tile-container{pointer-events:none}.leaflet-marker-icon.leaflet-interactive,.leaflet-image-layer.leaflet-interactive,.leaflet-pane>svg path.leaflet-interactive,svg.leaflet-image-layer.leaflet-interactive path{pointer-events:visiblePainted;pointer-events:auto}.leaflet-container{background:#ddd;outline-offset:1px}.leaflet-container a{color:#0078a8}.leaflet-zoom-box{border:2px dotted #38f;background:#ffffff80}.leaflet-container{font-family:Helvetica Neue,Arial,Helvetica,sans-serif;font-size:12px;font-size:.75rem;line-height:1.5}.leaflet-bar{box-shadow:0 1px 5px #000000a6;border-radius:4px}.leaflet-bar a{background-color:#fff;border-bottom:1px solid #ccc;width:26px;height:26px;line-height:26px;display:block;text-align:center;text-decoration:none;color:#000}.leaflet-bar a,.leaflet-control-layers-toggle{background-position:50% 50%;background-repeat:no-repeat;display:block}.leaflet-bar a:hover,.leaflet-bar a:focus{background-color:#f4f4f4}.leaflet-bar a:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.leaflet-bar a:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px;border-bottom:none}.leaflet-bar a.leaflet-disabled{cursor:default;background-color:#f4f4f4;color:#bbb}.leaflet-touch .leaflet-bar a{width:30px;height:30px;line-height:30px}.leaflet-touch .leaflet-bar a:first-child{border-top-left-radius:2px;border-top-right-radius:2px}.leaflet-touch .leaflet-bar a:last-child{border-bottom-left-radius:2px;border-bottom-right-radius:2px}.leaflet-control-zoom-in,.leaflet-control-zoom-out{font:700 18px Lucida Console,Monaco,monospace;text-indent:1px}.leaflet-touch .leaflet-control-zoom-in,.leaflet-touch .leaflet-control-zoom-out{font-size:22px}.leaflet-control-layers{box-shadow:0 1px 5px #0006;background:#fff;border-radius:5px}.leaflet-control-layers-toggle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAQAAAADQ4RFAAACf0lEQVR4AY1UM3gkARTePdvdoTxXKc+qTl3aU5U6b2Kbkz3Gtq3Zw6ziLGNPzrYx7946Tr6/ee/XeCQ4D3ykPtL5tHno4n0d/h3+xfuWHGLX81cn7r0iTNzjr7LrlxCqPtkbTQEHeqOrTy4Yyt3VCi/IOB0v7rVC7q45Q3Gr5K6jt+3Gl5nCoDD4MtO+j96Wu8atmhGqcNGHObuf8OM/x3AMx38+4Z2sPqzCxRFK2aF2e5Jol56XTLyggAMTL56XOMoS1W4pOyjUcGGQdZxU6qRh7B9Zp+PfpOFlqt0zyDZckPi1ttmIp03jX8gyJ8a/PG2yutpS/Vol7peZIbZcKBAEEheEIAgFbDkz5H6Zrkm2hVWGiXKiF4Ycw0RWKdtC16Q7qe3X4iOMxruonzegJzWaXFrU9utOSsLUmrc0YjeWYjCW4PDMADElpJSSQ0vQvA1Tm6/JlKnqFs1EGyZiFCqnRZTEJJJiKRYzVYzJck2Rm6P4iH+cmSY0YzimYa8l0EtTODFWhcMIMVqdsI2uiTvKmTisIDHJ3od5GILVhBCarCfVRmo4uTjkhrhzkiBV7SsaqS+TzrzM1qpGGUFt28pIySQHR6h7F6KSwGWm97ay+Z+ZqMcEjEWebE7wxCSQwpkhJqoZA5ivCdZDjJepuJ9IQjGGUmuXJdBFUygxVqVsxFsLMbDe8ZbDYVCGKxs+W080max1hFCarCfV+C1KATwcnvE9gRRuMP2prdbWGowm1KB1y+zwMMENkM755cJ2yPDtqhTI6ED1M/82yIDtC/4j4BijjeObflpO9I9MwXTCsSX8jWAFeHr05WoLTJ5G8IQVS/7vwR6ohirYM7f6HzYpogfS3R2OAAAAAElFTkSuQmCC);width:36px;height:36px}.leaflet-retina .leaflet-control-layers-toggle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAQAAABvcdNgAAAEsklEQVR4AWL4TydIhpZK1kpWOlg0w3ZXP6D2soBtG42jeI6ZmQTHzAxiTbSJsYLjO9HhP+WOmcuhciVnmHVQcJnp7DFvScowZorad/+V/fVzMdMT2g9Cv9guXGv/7pYOrXh2U+RRR3dSd9JRx6bIFc/ekqHI29JC6pJ5ZEh1yWkhkbcFeSjxgx3L2m1cb1C7bceyxA+CNjT/Ifff+/kDk2u/w/33/IeCMOSaWZ4glosqT3DNnNZQ7Cs58/3Ce5HL78iZH/vKVIaYlqzfdLu8Vi7dnvUbEza5Idt36tquZFldl6N5Z/POLof0XLK61mZCmJSWjVF9tEjUluu74IUXvgttuVIHE7YxSkaYhJZam7yiM9Pv82JYfl9nptxZaxMJE4YSPty+vF0+Y2up9d3wwijfjZbabqm/3bZ9ecKHsiGmRflnn1MW4pjHf9oLufyn2z3y1D6n8g8TZhxyzipLNPnAUpsOiuWimg52psrTZYnOWYNDTMuWBWa0tJb4rgq1UvmutpaYEbZlwU3CLJm/ayYjHW5/h7xWLn9Hh1vepDkyf7dE7MtT5LR4e7yYpHrkhOUpEfssBLq2pPhAqoSWKUkk7EDqkmK6RrCEzqDjhNDWNE+XSMvkJRDWlZTmCW0l0PHQGRZY5t1L83kT0Y3l2SItk5JAWHl2dCOBm+fPu3fo5/3v61RMCO9Jx2EEYYhb0rmNQMX/vm7gqOEJLcXTGw3CAuRNeyaPWwjR8PRqKQ1PDA/dpv+on9Shox52WFnx0KY8onHayrJzm87i5h9xGw/tfkev0jGsQizqezUKjk12hBMKJ4kbCqGPVNXudyyrShovGw5CgxsRICxF6aRmSjlBnHRzg7Gx8fKqEubI2rahQYdR1YgDIRQO7JvQyD52hoIQx0mxa0ODtW2Iozn1le2iIRdzwWewedyZzewidueOGqlsn1MvcnQpuVwLGG3/IR1hIKxCjelIDZ8ldqWz25jWAsnldEnK0Zxro19TGVb2ffIZEsIO89EIEDvKMPrzmBOQcKQ+rroye6NgRRxqR4U8EAkz0CL6uSGOm6KQCdWjvjRiSP1BPalCRS5iQYiEIvxuBMJEWgzSoHADcVMuN7IuqqTeyUPq22qFimFtxDyBBJEwNyt6TM88blFHao/6tWWhuuOM4SAK4EI4QmFHA+SEyWlp4EQoJ13cYGzMu7yszEIBOm2rVmHUNqwAIQabISNMRstmdhNWcFLsSm+0tjJH1MdRxO5Nx0WDMhCtgD6OKgZeljJqJKc9po8juskR9XN0Y1lZ3mWjLR9JCO1jRDMd0fpYC2VnvjBSEFg7wBENc0R9HFlb0xvF1+TBEpF68d+DHR6IOWVv2BECtxo46hOFUBd/APU57WIoEwJhIi2CdpyZX0m93BZicktMj1AS9dClteUFAUNUIEygRZCtik5zSxI9MubTBH1GOiHsiLJ3OCoSZkILa9PxiN0EbvhsAo8tdAf9Seepd36lGWHmtNANTv5Jd0z4QYyeo/UEJqxKRpg5LZx6btLPsOaEmdMyxYdlc8LMaJnikDlhclqmPiQnTEpLUIZEwkRagjYkEibQErwhkTAKCLQEbUgkzJQWc/0PstHHcfEdQ+UAAAAASUVORK5CYII=);background-size:26px 26px}.leaflet-touch .leaflet-control-layers-toggle{width:44px;height:44px}.leaflet-control-layers .leaflet-control-layers-list,.leaflet-control-layers-expanded .leaflet-control-layers-toggle{display:none}.leaflet-control-layers-expanded .leaflet-control-layers-list{display:block;position:relative}.leaflet-control-layers-expanded{padding:6px 10px 6px 6px;color:#333;background:#fff}.leaflet-control-layers-scrollbar{overflow-y:scroll;overflow-x:hidden;padding-right:5px}.leaflet-control-layers-selector{margin-top:2px;position:relative;top:1px}.leaflet-control-layers label{display:block;font-size:13px;font-size:1.08333em}.leaflet-control-layers-separator{height:0;border-top:1px solid #ddd;margin:5px -10px 5px -6px}.leaflet-default-icon-path{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=)}.leaflet-container .leaflet-control-attribution{background:#fff;background:#fffc;margin:0}.leaflet-control-attribution,.leaflet-control-scale-line{padding:0 5px;color:#333;line-height:1.4}.leaflet-control-attribution a{text-decoration:none}.leaflet-control-attribution a:hover,.leaflet-control-attribution a:focus{text-decoration:underline}.leaflet-attribution-flag{display:inline!important;vertical-align:baseline!important;width:1em;height:.6669em}.leaflet-left .leaflet-control-scale{margin-left:5px}.leaflet-bottom .leaflet-control-scale{margin-bottom:5px}.leaflet-control-scale-line{border:2px solid #777;border-top:none;line-height:1.1;padding:2px 5px 1px;white-space:nowrap;-moz-box-sizing:border-box;box-sizing:border-box;background:#fffc;text-shadow:1px 1px #fff}.leaflet-control-scale-line:not(:first-child){border-top:2px solid #777;border-bottom:none;margin-top:-2px}.leaflet-control-scale-line:not(:first-child):not(:last-child){border-bottom:2px solid #777}.leaflet-touch .leaflet-control-attribution,.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{box-shadow:none}.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{border:2px solid rgba(0,0,0,.2);background-clip:padding-box}.leaflet-popup{position:absolute;text-align:center;margin-bottom:20px}.leaflet-popup-content-wrapper{padding:1px;text-align:left;border-radius:12px}.leaflet-popup-content{margin:13px 24px 13px 20px;line-height:1.3;font-size:13px;font-size:1.08333em;min-height:1px}.leaflet-popup-content p{margin:1.3em 0}.leaflet-popup-tip-container{width:40px;height:20px;position:absolute;left:50%;margin-top:-1px;margin-left:-20px;overflow:hidden;pointer-events:none}.leaflet-popup-tip{width:17px;height:17px;padding:1px;margin:-10px auto 0;pointer-events:auto;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.leaflet-popup-content-wrapper,.leaflet-popup-tip{background:#fff;color:#333;box-shadow:0 3px 14px #0006}.leaflet-container a.leaflet-popup-close-button{position:absolute;top:0;right:0;border:none;text-align:center;width:24px;height:24px;font:16px/24px Tahoma,Verdana,sans-serif;color:#757575;text-decoration:none;background:transparent}.leaflet-container a.leaflet-popup-close-button:hover,.leaflet-container a.leaflet-popup-close-button:focus{color:#585858}.leaflet-popup-scrolled{overflow:auto}.leaflet-oldie .leaflet-popup-content-wrapper{-ms-zoom:1}.leaflet-oldie .leaflet-popup-tip{width:24px;margin:0 auto;-ms-filter:"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)";filter:progid:DXImageTransform.Microsoft.Matrix(M11=.70710678,M12=.70710678,M21=-.70710678,M22=.70710678)}.leaflet-oldie .leaflet-control-zoom,.leaflet-oldie .leaflet-control-layers,.leaflet-oldie .leaflet-popup-content-wrapper,.leaflet-oldie .leaflet-popup-tip{border:1px solid #999}.leaflet-div-icon{background:#fff;border:1px solid #666}.leaflet-tooltip{position:absolute;padding:6px;background-color:#fff;border:1px solid #fff;border-radius:3px;color:#222;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;box-shadow:0 1px 3px #0006}.leaflet-tooltip.leaflet-interactive{cursor:pointer;pointer-events:auto}.leaflet-tooltip-top:before,.leaflet-tooltip-bottom:before,.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{position:absolute;pointer-events:none;border:6px solid transparent;background:transparent;content:""}.leaflet-tooltip-bottom{margin-top:6px}.leaflet-tooltip-top{margin-top:-6px}.leaflet-tooltip-bottom:before,.leaflet-tooltip-top:before{left:50%;margin-left:-6px}.leaflet-tooltip-top:before{bottom:0;margin-bottom:-12px;border-top-color:#fff}.leaflet-tooltip-bottom:before{top:0;margin-top:-12px;margin-left:-6px;border-bottom-color:#fff}.leaflet-tooltip-left{margin-left:-6px}.leaflet-tooltip-right{margin-left:6px}.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{top:50%;margin-top:-6px}.leaflet-tooltip-left:before{right:0;margin-right:-12px;border-left-color:#fff}.leaflet-tooltip-right:before{left:0;margin-left:-12px;border-right-color:#fff}@media print{.leaflet-control{-webkit-print-color-adjust:exact;print-color-adjust:exact}}', Xp = ".leaflet-cluster-anim .leaflet-marker-icon,.leaflet-cluster-anim .leaflet-marker-shadow{-webkit-transition:-webkit-transform .3s ease-out,opacity .3s ease-in;-moz-transition:-moz-transform .3s ease-out,opacity .3s ease-in;-o-transition:-o-transform .3s ease-out,opacity .3s ease-in;transition:transform .3s ease-out,opacity .3s ease-in}.leaflet-cluster-spider-leg{-webkit-transition:-webkit-stroke-dashoffset .3s ease-out,-webkit-stroke-opacity .3s ease-in;-moz-transition:-moz-stroke-dashoffset .3s ease-out,-moz-stroke-opacity .3s ease-in;-o-transition:-o-stroke-dashoffset .3s ease-out,-o-stroke-opacity .3s ease-in;transition:stroke-dashoffset .3s ease-out,stroke-opacity .3s ease-in}", Qp = ':host{display:block;height:100%;font-family:Inter,Segoe UI,sans-serif;color:#263c35;font-size:14px}*{box-sizing:border-box}button,input{font:inherit}button,a,input{-webkit-tap-highlight-color:transparent}button{cursor:pointer}button{color:inherit}button:disabled{opacity:.45;cursor:not-allowed}button,a,input{outline-offset:4px}button:focus-visible,a:focus-visible,input:focus-visible,summary:focus-visible{outline:2px solid #548678}button{transition:background .2s,transform .2s,box-shadow .2s}button:hover{transform:translateY(-1px)}a{color:inherit}h1,h2,h3,p{margin:0}button{border:0}svg{flex-shrink:0}input{min-width:0}.app{display:flex;height:100vh;height:100dvh;min-height:520px;background:#f4f6f2}.rail{width:76px;flex-shrink:0;background:#fafbf8;display:flex;align-items:center;flex-direction:column;border-right:1px solid #e2e7df;z-index:1100}.brand-symbol{display:grid;place-items:center;width:43px;height:43px;background:#d8ebbc;border-radius:14px;margin-top:22px;color:#304b38}.rail-nav{display:flex;flex-direction:column;gap:16px;margin-top:65px}.rail-button{display:grid;place-items:center;width:44px;height:44px;background:transparent;border-radius:13px;color:#8c9890}.rail-button:hover,.rail-button.active{background:#e8eee3;color:#345b48}.rail-bottom{margin-top:auto;margin-bottom:25px;display:flex;align-items:center;flex-direction:column;gap:10px;color:#8d9b8e;font-size:10px}main{min-width:0;flex:1;display:flex;flex-direction:column}header{height:86px;flex-shrink:0;display:flex;align-items:center;justify-content:space-between;padding:0 34px;background:#fafbf8;border-bottom:1px solid #e4e8e1;z-index:1001}.identity{display:flex;align-items:center;gap:23px}.identity>b{font-size:25px;letter-spacing:-1.1px;display:flex;align-items:center}.identity>b span{font-weight:400}.identity>b i{width:6px;height:6px;background:#86aa5d;border-radius:50%;align-self:flex-end;margin:0 0 7px 3px}.header-divider{height:20px;width:1px;background:#dce2d9}.header-title{font-size:12px;color:#88928a}.header-right{display:flex;align-items:center;gap:24px}.live{font-size:11px;display:flex;gap:7px;align-items:center;color:#67766b}.live i,.feed-footer>i{background:#75a584;width:6px;height:6px;border-radius:100%;box-shadow:0 0 0 4px #75a58412}.live.offline i{background:#c77258}.avatar{border:1px solid #d9dfd4;background:#edf0e6;width:33px;height:33px;border-radius:50%;display:grid;place-items:center;font-size:11px}.ha-menu{display:none;background:transparent}.workspace{flex:1;position:relative;overflow:hidden;isolation:isolate}.map-canvas{position:absolute;top:0;right:0;bottom:0;left:0;background:#dce7e7;z-index:0}.map-canvas.placing{cursor:crosshair}.leaflet-tile-pane{filter:saturate(.4) brightness(1.045) contrast(.91)}.leaflet-container{font:inherit}.leaflet-control-attribution{font-size:9px!important;background:#ffffffbc!important}.map-shade{pointer-events:none;position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(90deg,#eaf0e9c4 0,transparent 48%),linear-gradient(180deg,#f2f4ec91,transparent 35%,transparent 90%,#f2f4ec66)}.map-heading{position:absolute;left:34px;top:32px;pointer-events:none}.eyebrow{font-size:9px;letter-spacing:1.8px;font-weight:650;color:#7b897d}.map-heading h1{font-weight:500;font-size:37px;line-height:1.12;letter-spacing:-1.6px;margin:12px 0}.map-heading h1 span{color:#819a70}.map-heading p{color:#7d8a7e;font-size:12px}.glass{background:linear-gradient(130deg,#fffffff0,#fafcf1c4);border:1px solid #ffffffd9;backdrop-filter:blur(22px);-webkit-backdrop-filter:blur(22px);box-shadow:0 12px 38px #33483c10,0 2px 7px #33483c08;border-radius:21px}.feed{position:absolute;left:32px;top:212px;width:340px;bottom:40px;display:flex;flex-direction:column;overflow:hidden}.feed-heading{padding:24px 23px 17px;display:flex;justify-content:space-between;align-items:center;color:#7c9382}.feed-heading h2{font-size:21px;letter-spacing:-.6px;font-weight:550;margin-top:7px;color:#293c33}.feed-heading h2 span{display:inline-grid;place-items:center;min-width:24px;height:23px;background:#e5ecdf;border-radius:8px;font-size:11px;vertical-align:middle;margin-left:6px;color:#72836a}.search{display:flex;align-items:center;gap:9px;margin:0 20px;background:#e9eee58f;border:1px solid #dfe5d9;border-radius:10px;padding:11px 12px;color:#9ca596}.search input{background:none;border:0;width:100%;font-size:11px;color:#35473b;outline:none}.search input::placeholder{color:#909b8d}.search kbd{color:#a2aa9d}.source-filters{display:flex;gap:5px;margin:15px 20px}.source-filters button{display:flex;align-items:center;gap:5px;border-radius:6px;padding:6px;font-size:9px;background:transparent;border:1px solid #e1e5dc;color:#9b9f94;white-space:nowrap}.source-filters button.chosen{background:#fff9;color:#516052}.source-filters i,.tag i{width:5px;height:5px;border-radius:50%;background:var(--source);flex-shrink:0}.source-filters button:not(.chosen) i{background:#bdc3b7}.tabs{margin:0 20px;display:flex;gap:22px;border-bottom:1px solid #dfe5d9}.tabs button{padding:0 0 11px;background:none;font-size:11px;color:#929c8d;position:relative}.tabs button.active{color:#324c3a;font-weight:600}.tabs button.active:after{content:"";position:absolute;bottom:-1px;left:0;right:0;height:2px;background:#658266;border-radius:2px}.alert-list{overflow:auto;flex:1;padding:6px 10px;scrollbar-width:thin;scrollbar-color:#cbd4c4 transparent}.alert-card{display:block;text-align:left;width:100%;padding:17px 12px;background:transparent;border-radius:12px;position:relative}.alert-card+.alert-card:before{content:"";position:absolute;top:0;left:12px;right:12px;height:1px;background:#dfe5d975}.alert-card:hover,.alert-card.selected{background:#eef3e6ba}.alert-meta{display:flex;align-items:center;justify-content:space-between;font-size:9px;color:#879180;margin-bottom:9px}.tag{display:inline-flex;align-items:center;gap:6px;color:var(--source);font-size:10px;font-weight:600}.alert-card h3{font-size:13px;font-weight:600;color:#344437;line-height:1.5;margin-bottom:5px}.alert-card>p{font-size:11px;line-height:1.6;color:#85917f;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.alert-foot{display:flex;justify-content:space-between;color:#7a8773;margin-top:10px;font-size:10px}.alert-foot span{display:flex;align-items:center;gap:4px}.alert-card>small{display:block;font-size:9px;margin-top:5px;color:#a0a895}.feed-footer{border-top:1px solid #e3e7dc;padding:15px 19px;display:flex;align-items:center;gap:7px;font-size:9px;color:#7d8c73}.feed-footer span{margin-left:auto;color:#a2ab9a;font-size:8px}.feed-footer>i{width:4px;height:4px}.area-summary{position:absolute;right:29px;top:28px;display:flex;align-items:center;gap:12px;padding:17px 18px;border-radius:15px;min-width:310px}.summary-icon{width:40px;height:40px;border-radius:12px;background:#e7eddd;display:grid;place-items:center;color:#789066}.area-summary b{font-size:11px;font-weight:600}.area-summary p{font-size:10px;color:#8c9881;margin-top:6px}.area-summary button{margin-left:auto;background:none;color:#7e9072}.map-tools{position:absolute;right:28px;bottom:80px;padding:7px;border-radius:13px;display:flex;flex-direction:column;gap:2px}.icon-button{display:inline-grid;place-items:center;width:32px;height:32px;border-radius:8px;background:transparent;color:#7d8c78}.icon-button:hover{background:#e2e9da}.map-tools hr{height:1px;width:18px;background:#e1e6d9;border:0;margin:4px auto}.map-caption{position:absolute;bottom:33px;left:50%;display:flex;align-items:center;gap:10px;font-size:10px;color:#687a67;background:#f7f9eff0;padding:11px 15px;border-radius:25px;white-space:nowrap;box-shadow:0 2px 15px #38512c10}.location-key{width:7px;height:7px;border-radius:50%;background:#728ea5;box-shadow:0 0 0 4px #728ea51c}.radius-key{width:10px;height:10px;border:1px dashed #819278;border-radius:50%}.demo-notice{position:absolute;top:12px;left:50%;transform:translate(-50%);font-size:9px;letter-spacing:.4px;background:#fcf8dfdb;color:#867942;padding:6px 11px;border:1px solid #e5ddaf;border-radius:20px}.alert-pin-wrap{background:none;border:0}.alert-pin{display:flex;align-items:center;justify-content:center;position:relative;width:31px;height:35px;filter:drop-shadow(0 3px 3px #263c3533)}.alert-pin:before{content:"";position:absolute;top:2px;right:1px;bottom:4px;left:1px;border-radius:50% 50% 50% 5px;transform:rotate(-45deg);background:var(--pin);border:2px solid #fff}.alert-pin span{position:relative;color:#fff;font-weight:650;font-size:12px;margin-top:-3px}.alert-pin.selected{scale:1.2;filter:drop-shadow(0 0 5px #ffffff)}.alert-pin.closed{opacity:.65}.location-dot{background:#789eb229;border:1px solid #7297ae40;border-radius:50%;display:grid;place-items:center;box-shadow:0 0 0 13px #7c9cac16}.location-dot i{width:11px;height:11px;background:#7296ae;border:2px solid white;border-radius:50%;box-shadow:0 1px 5px #263c3530}.detail,.drawer{position:absolute;right:29px;top:28px;bottom:40px;width:362px;padding:24px;overflow:auto;scrollbar-width:thin;animation:slide-in .3s ease-out}.detail-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px}.detail>h2,.drawer>h2{font-size:25px;line-height:1.22;letter-spacing:-.8px;font-weight:550;margin:10px 0 13px}.detail>.eyebrow{font-size:8px}.detail-location{display:flex;align-items:center;gap:6px;font-size:11px;color:#8b9683}.timeline-heading{display:flex;align-items:center;gap:8px;margin-top:27px;padding:18px 0;border-top:1px solid #e0e6d8;color:#78866d;font-size:11px}.timeline-heading b{font-weight:500}.timeline-heading span{margin-left:auto}.timeline article{display:flex;gap:13px;position:relative;padding-bottom:26px}.timeline article>i{width:8px;height:8px;background:#a4b790;border:2px solid #e6ecde;outline:1px solid #a4b790;border-radius:50%;flex-shrink:0;margin-top:4px;z-index:1}.timeline article:not(:last-child):after{position:absolute;content:"";left:3px;top:12px;bottom:0;width:1px;background:#dae3d1}.message-type{display:block;font-size:11px;font-weight:600;margin-bottom:4px}.timeline time{font-size:9px;color:#9aa58f}.timeline p{font-size:12px;line-height:1.8;color:#6b7a60;margin-top:12px;white-space:pre-wrap;overflow-wrap:anywhere}.timeline a,.text-link{display:inline-flex;gap:6px;align-items:center;font-size:11px;color:#56784e;margin-top:12px}.detail-bottom{display:flex;gap:7px;font-size:9px;color:#97a18b;padding-top:16px;border-top:1px solid #e0e6d8}.muted{font-size:12px;color:#8b9781;line-height:1.7;margin:0 0 23px}.primary,.secondary{display:flex;align-items:center;justify-content:center;gap:8px;padding:12px 16px;border-radius:10px;font-size:11px;min-height:40px}.primary{background:#354f3d;color:#f5f9ed;box-shadow:0 4px 8px #33483c0f}.primary:hover{background:#486448}.secondary{background:#e8eee0;color:#6f835d;margin:10px 0}.drawer>.primary{width:100%;margin:20px 0}.zone-card{padding:17px 0;border-bottom:1px solid #e3e8dc}.zone-title{display:flex;align-items:center;gap:10px}.zone-title h3{font-size:12px;font-weight:600;margin-bottom:6px}.zone-title small{font-size:9px;color:#93a085}.switch{height:19px;width:33px;min-width:33px;background:#ccd5c3;border-radius:20px;position:relative;margin-left:auto}.switch:after{content:"";position:absolute;left:3px;top:3px;width:13px;height:13px;background:#fff;border-radius:50%;transition:left .2s}.switch.on{background:#88a36f}.switch.on:after{left:17px}.zone-actions{display:flex;justify-content:space-between;align-items:center;margin-top:9px;padding-left:50px;color:#9aa78c;font-size:9px}.automation-note{margin-top:25px;display:flex;gap:12px;background:#e8eedf99;padding:17px;border-radius:13px;color:#7e916d}.automation-note b{font-size:11px;font-weight:550}.automation-note p{font-size:10px;line-height:1.7;margin-top:7px}.field{display:flex;flex-direction:column;gap:9px;font-size:11px;color:#6f805f;margin-top:22px}.field input{background:#f8faf3ab;border:1px solid #dce4d2;border-radius:8px;padding:11px;color:#3d5034;width:100%}.check-row{display:flex;align-items:center;gap:9px;font-size:11px;color:#7d8c6d;margin-top:18px}.check-row input{accent-color:#708d58;width:14px;height:14px}.coordinates{display:flex;gap:10px}.coordinates .field{width:50%;margin-top:9px}.hint{font-size:10px;line-height:1.8;color:#99a28d;margin:16px 0}.radius-label{margin-top:29px;display:flex;align-items:center;justify-content:space-between;font-size:11px;color:#6f805f}.radius-label b{font-size:23px;font-weight:500;letter-spacing:-1px}.radius-label b span{font-size:11px;letter-spacing:0;color:#99a38c}.range{width:100%;accent-color:#728d58;margin:18px 0 8px}.range-ends{display:flex;justify-content:space-between;font-size:9px;color:#a0aa93}.editor-sources{display:flex;flex-direction:column}.editor-sources .check-row{margin-top:12px}.editor-actions{display:flex;gap:12px;margin-top:24px;align-items:center}.editor-actions .primary{flex:1}details{margin-top:24px;border-top:1px solid #dde4d3;padding-top:17px}summary{font-size:11px;color:#778966;cursor:pointer}pre{font-size:9px;background:#e9eedf;padding:12px;border-radius:10px;overflow:auto;max-height:190px;line-height:1.7}.source-status{display:flex;flex-wrap:wrap;justify-content:space-between;gap:10px;border-bottom:1px solid #e0e7d5;padding:18px 0}.source-status b{font-size:10px;font-weight:500}.source-status small{width:100%;font-size:9px;color:#9ba58e}.drawer>h3{font-size:13px;margin:26px 0 13px;font-weight:550}.empty{padding:35px 18px;color:#93a286;text-align:center;font-size:12px}.empty svg{color:#a2b08e;margin-bottom:12px}.empty h3{font-size:15px;font-weight:500;margin-bottom:10px}.empty p{font-size:11px;line-height:1.6}.toast{position:absolute;bottom:24px;left:50%;transform:translate(-50%);padding:12px 16px;display:flex;align-items:center;gap:13px;z-index:1200;font-size:11px;max-width:80%;background:#f4f9ebf5}.toast.error{background:#fff0e6f5;color:#975e45}.mobile-list-toggle{display:none}@keyframes slide-in{0%{opacity:0;transform:translate(18px)}to{opacity:1;transform:translate(0)}}@media(min-width:1500px){.feed{width:365px}.map-heading{top:42px}.feed{top:228px}.map-heading h1{font-size:43px}.detail,.drawer{width:400px}.area-summary{min-width:345px}}@media(max-height:780px)and (min-width:901px){.map-heading h1{font-size:29px}.map-heading{top:23px}.feed{top:178px;bottom:24px}.feed-heading{padding-top:15px;padding-bottom:12px}.feed{width:320px}.source-filters{margin-top:10px;margin-bottom:12px}.detail,.drawer{bottom:24px}}@media(max-width:1100px){.header-title,.header-divider{display:none}.feed{width:304px;left:22px}.map-heading{left:24px}.detail,.drawer{width:330px;right:18px}.area-summary{right:18px;min-width:280px}.map-caption{left:44%}}@media(max-width:760px){.rail{width:55px}.brand-symbol{width:34px;height:34px;border-radius:10px;margin-top:18px}.rail-nav{margin-top:32px;gap:12px}.rail-button{width:35px;height:39px}.rail-bottom{margin-bottom:18px}header{height:69px;padding:0 17px}.identity>b{font-size:22px}.header-right{gap:13px}.avatar{display:none}.ha-menu{display:flex;padding:0}.identity{gap:10px}.map-heading{top:22px;left:21px}.map-heading h1{font-size:29px}.map-heading p{font-size:10px}.eyebrow{font-size:8px}.area-summary{top:auto;bottom:65px;left:17px;right:68px;min-width:0;padding:13px;border-radius:15px}.area-summary b{font-size:10px}.area-summary p{font-size:9px}.area-summary .summary-icon{display:none}.demo-notice{top:12px;left:auto;right:10px;transform:none;font-size:8px;max-width:133px;text-align:center}.feed{display:none;left:12px;right:12px;top:187px;bottom:63px;width:auto}.feed.mobile-open{display:flex;z-index:800}.mobile-list-toggle{display:flex;position:absolute;left:19px;top:153px;align-items:center;gap:8px;padding:9px 12px;font-size:10px;border-radius:10px}.detail,.drawer{top:16px;right:12px;left:12px;bottom:63px;width:auto;padding:20px;z-index:900}.map-tools{right:13px;bottom:67px;padding:4px}.map-caption{bottom:24px;left:17px;font-size:8px;gap:7px;padding:9px 11px}.map-tools .icon-button{width:27px;height:29px}.map-heading{max-width:65%}.toast{max-width:94%;width:94%;bottom:12px}.editor{bottom:20px}.editor:has(.coordinates){left:auto;width:min(320px,85%);max-height:68%;top:auto;bottom:54px}.live{font-size:9px}}@media(prefers-reduced-motion:reduce){*,*:before,*:after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}:host{color-scheme:dark;color:#e3eceb}.app{background:#111b22;color:#e3eceb}.rail{background:linear-gradient(180deg,#172329f2,#131d24f7);border-color:#ffffff0b}.brand-symbol{background:linear-gradient(135deg,#c6eaa5,#94c994);color:#203b30;box-shadow:0 0 24px #a2d58d16}.rail-button{color:#758991}.rail-button:hover,.rail-button.active{background:#c0eab417;color:#c1dfa7;box-shadow:inset 0 0 0 1px #d1f0cb0c}.rail-bottom{color:#5f797f}header{background:linear-gradient(105deg,#19252bee,#142027f7);border-color:#ffffff0b}.identity>b{color:#ecf3ec}.identity>b i{background:#b7d69c}.header-divider{background:#ffffff12}.header-title{color:#748b92}.avatar{background:#d4e5bc0e;border-color:#d4e5bc24;color:#c0d1b2}.live{color:#8ba6a4}.live i,.feed-footer>i{background:#abd49b;box-shadow:0 0 9px #a8dd8470}.map-canvas{background:#17232c}.leaflet-tile-pane{filter:invert(1) hue-rotate(170deg) saturate(.4) brightness(.95) contrast(.78)}.leaflet-control-attribution{background:#192830c9!important;color:#7d989e!important}.leaflet-control-attribution a{color:#9cb4b4!important}.map-shade{background:linear-gradient(90deg,#101f2bc7,transparent 57%),linear-gradient(180deg,#18262c80,transparent 38%,transparent 80%,#11202a75)}.glass{background:linear-gradient(125deg,#b8d7d918,#577e841b 35%,#14252cb8);border:1px solid #dbf8f326;border-top-color:#e8ffff45;border-left-color:#e5fff638;backdrop-filter:blur(32px) saturate(150%);-webkit-backdrop-filter:blur(32px) saturate(150%);box-shadow:inset 0 1px #ffffff0b,inset 0 0 35px #bee8ea04,0 22px 55px #030e1850,0 3px 10px #030e1825}.eyebrow{color:#8ca7ab}.map-heading h1{color:#e7eeea;text-shadow:0 2px 20px #05121b44}.map-heading h1 span{color:#b7d89c}.map-heading p{color:#7f9ca3}.feed-heading{color:#aecbb8}.feed-heading h2{color:#e2ece7}.feed-heading h2 span{background:#cbebae16;color:#b8d99c;border:1px solid #dcf5c116}.search{background:#05151e35;border-color:#d0e6e218;color:#708e98;box-shadow:inset 0 1px 4px #04121b1a}.search input{color:#dbe8e5}.search input::placeholder{color:#79939c}.search kbd{color:#6f8892}.source-filters button{border-color:#c6e0d916;color:#7e939a}.source-filters button.chosen{background:#d7eae60a;color:#c6d6d3}.source-filters button:not(.chosen) i{background:#526774}.tabs{border-color:#d7ede514}.tabs button{color:#7d959b}.tabs button.active{color:#cfdfc2}.tabs button.active:after{background:#b6d39d;box-shadow:0 0 9px #b6d39d25}.alert-card+.alert-card:before{background:#d4eae710}.alert-card:hover,.alert-card.selected{background:linear-gradient(110deg,#b7d3bb14,#a6d7e105);box-shadow:inset 0 0 0 1px #dcf5dc0b}.alert-card h3{color:#dce8e2}.alert-card>p{color:#8fa8af}.alert-meta{color:#8ca69b}.alert-foot{color:#9fb4ad}.alert-card>small{color:#617e8a}.tag{color:color-mix(in srgb,var(--source),#e6f1eb 23%)}.tag i,.source-filters i{box-shadow:0 0 6px color-mix(in srgb,var(--source),transparent 70%)}.feed-footer{border-color:#d4eae713;color:#a0b89e}.feed-footer span{color:#6f8b91}.summary-icon{background:linear-gradient(135deg,#bfdfa31c,#b1cdbd07);color:#bcdaa2;border:1px solid #d9efc219}.area-summary b{color:#dde9de}.area-summary p{color:#8fa895}.area-summary button{color:#b5cfa5}.icon-button{color:#a1b8b8}.icon-button:hover{background:#cbecde12}.map-tools hr{background:#d7ece51b}.map-caption{background:#182b35b3;border:1px solid #d9f2ec17;-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);color:#8fa8b1;box-shadow:0 8px 24px #0003}.location-key{background:#8cc5e3;box-shadow:0 0 0 4px #9bcfe61b,0 0 13px #99d4f04a}.radius-key{border-color:#b3d293}.demo-notice{background:#202d30bd;color:#b7c5a4;border-color:#d6e6b520;-webkit-backdrop-filter:blur(15px);backdrop-filter:blur(15px)}.alert-pin:before{border-color:#dceae5d4}.alert-pin.selected{filter:drop-shadow(0 0 7px #e4f9ed77)}.location-dot{background:#8ac9ef27;border-color:#8ac9ef48;box-shadow:0 0 0 13px #8ac9ef0c,0 0 23px #86c6ec25}.location-dot i{background:#a9d9ef;border-color:#e0f5f9}.detail,.drawer{background:linear-gradient(125deg,#a8c5ce25,#27424acd 55%,#14252cdc)}.detail-location{color:#91aab1}.timeline-heading{border-color:#d7ece51b;color:#a6c0b1}.timeline article>i{background:#b5cf9f;border-color:#567469;outline-color:#b5cf9f99}.timeline article:not(:last-child):after{background:#bdd7c229}.timeline time{color:#76939d}.timeline p{color:#b2c6c9}.timeline a,.text-link{color:#c4dea9}.detail-bottom{color:#77969b;border-color:#d7ece51b}.muted{color:#96afb3}.primary{background:linear-gradient(115deg,#c5dfa9,#9fc897);color:#233c30;box-shadow:0 4px 20px #afd49716;border:1px solid #e8f8d425;font-weight:600}.primary:hover{background:#d0e7b6;box-shadow:0 4px 22px #afd49729}.secondary{background:#c3dfc412;color:#bcd0b5;border:1px solid #d6eee116}.zone-card{border-color:#d7ece519}.zone-title small{color:#819d9f}.switch{background:#536a6f}.switch:after{background:#d5e2df}.switch.on{background:#abc990}.switch.on:after{background:#f0f6e7}.zone-actions{color:#8fa69f}.automation-note{background:linear-gradient(120deg,#c1e0a713,#9bbdd409);border:1px solid #d4eac812;color:#b0c2a6}.field{color:#b2c7bb}.field input{background:#0d202c48;border-color:#d7ece523;color:#dce9e6;box-shadow:inset 0 1px 5px #00000014}.check-row{color:#a2bab8}.check-row input{accent-color:#b4d298}.hint{color:#829ea4}.radius-label{color:#b2c7bb}.radius-label b{color:#d2e5bd}.radius-label b span{color:#7f9e9c}.range{accent-color:#b4d298}.range-ends{color:#759294}details{border-color:#d7ece51b}summary{color:#b6d0ab}pre{background:#07182466;color:#b6cacb}.source-status{border-color:#d7ece51b}.source-status small{color:#829da6}.empty{color:#8ba6a8}.empty svg{color:#b3cd9d}.toast{background:linear-gradient(120deg,#354e4bf7,#223947f5);color:#d5e7d7}.toast.error{background:linear-gradient(120deg,#59423af5,#342c31f5);color:#f0c7ac}.workspace:has(.drawer) .map-tools,.workspace:has(.detail) .map-tools{display:none}@media(prefers-reduced-transparency:reduce){.glass{background:#22333d;-webkit-backdrop-filter:none;backdrop-filter:none}}.alert-cluster{border:1px solid #ddf6dc66;border-radius:50%;background:radial-gradient(circle at 28% 18%,#c9e7c24d,transparent 65%),linear-gradient(140deg,#557b70d9,#203d48eb);box-shadow:inset 0 1px #f2fff54a,0 0 0 5px #bedeb114,0 5px 20px #05192366;backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);color:#ecf6df;font-weight:650;font-size:15px;text-align:center}.alert-cluster>span{display:flex;width:100%;height:100%;align-items:center;justify-content:center;border-radius:inherit;text-shadow:0 1px 3px #132b31aa}.alert-cluster:hover,.alert-cluster.has-selection{border-color:#e0f8bb;box-shadow:inset 0 1px #f2fff56a,0 0 0 5px #bedeb125,0 0 24px #b6dba438}.alert-cluster:focus-visible{outline:2px solid #e3f6c9;outline-offset:5px}@media(prefers-reduced-transparency:reduce){.alert-cluster{background:#34554f;-webkit-backdrop-filter:none;backdrop-filter:none}}', Kp = Date.now(), ir = (j) => new Date(Kp - j * 6e4).toISOString(), $o = (j, it, w, A, lt, h, p, g, _) => ({
  id: j,
  source: it,
  feed: it,
  title: w,
  place: A,
  lat: lt,
  lon: h,
  active: p,
  radius_m: 2400,
  polygons: [],
  national: !1,
  updated_at: ir(_),
  start_at: ir(_ + 20),
  messages: [{ type: "Start", time: ir(_ + 20), body: g }, ...p ? [] : [{ type: "Afloop", time: ir(_), body: "Deze fictieve actie is afgesloten. Bedankt voor het uitkijken." }]]
}), Jp = {
  entry_id: "demo",
  location: { lat: 52.09, lon: 5.12, label: "Voorbeeldlocatie Utrecht" },
  sources: Object.fromEntries(["nl_alert", "burgernet", "amber"].map((j) => [j, { ok: !0, updated_at: ir(1) }])),
  zones: [{ id: "thuis", name: "Rondom thuis", lat: 52.09, lon: 5.12, radius_km: 15, follow_location: !0, enabled: !0, include_national: !0, sources: ["nl_alert", "burgernet", "amber"] }],
  alerts: [
    $o("demo-1", "burgernet", "Vermist persoon", "Utrecht", 52.105, 5.1, !0, "VOORBEELDBERICHT — In deze demo wordt gezocht naar een vermist persoon in de omgeving van Utrecht. Dit is geen echte melding.", 8),
    { ...$o("demo-2", "nl_alert", "Brand met rookontwikkeling", "Rotterdam", 51.92, 4.47, !0, "VOORBEELDBERICHT — Brand met rookontwikkeling. Sluit ramen en deuren en zet de ventilatie uit. Dit is geen echte melding.", 24), polygons: [[[51.89, 4.43], [51.96, 4.44], [51.965, 4.52], [51.91, 4.55]]] },
    $o("demo-3", "burgernet", "Getuigen gezocht", "Amersfoort", 52.155, 5.39, !0, "VOORBEELDBERICHT — De politie zoekt getuigen van een incident. Dit is geen echte oproep.", 42),
    $o("demo-4", "amber", "Vermist kind", "Eindhoven", 51.44, 5.48, !0, "VOORBEELDBERICHT — Fictieve AMBER-melding om de interface te bekijken. Dit is geen echte vermissing.", 65),
    $o("demo-5", "burgernet", "Persoon teruggevonden", "Amsterdam", 52.37, 4.9, !1, "VOORBEELDBERICHT — Een fictief startbericht voor een inmiddels afgesloten actie.", 95)
  ]
};
function Wp(j, it, w) {
  let A, lt, h = !1;
  const p = () => {
    const g = new URL("api/ws", document.baseURI);
    g.protocol = g.protocol === "https:" ? "wss:" : "ws:", A = new WebSocket(g), A.onmessage = (_) => {
      try {
        j(JSON.parse(_.data)), it(!0);
      } catch {
        w("Ongeldig antwoord van de app.");
      }
    }, A.onclose = () => {
      it(!1), h || (lt = setTimeout(p, 3e3));
    }, A.onerror = () => w("Verbinding met de app onderbroken. Er wordt opnieuw verbonden.");
  };
  return p(), () => {
    h = !0, clearTimeout(lt), A == null || A.close();
  };
}
async function Ip(j) {
  const it = await fetch(new URL("api/zones", document.baseURI), {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-NL-Alert-Request": "dashboard" },
    body: JSON.stringify({ zones: j })
  });
  if (!it.ok) throw new Error("Opslaan mislukt");
  return it.json();
}
const Fi = { nl_alert: { name: "NL-Alert", color: "#ea7553" }, burgernet: { name: "Burgernet", color: "#548678" }, amber: { name: "AMBER Alert", color: "#c59b43" } }, Rc = (j) => j ? new Date(j).toLocaleString("nl-NL", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" }) : "Tijd onbekend", Fp = (j, it) => {
  const w = Math.PI / 180, A = (j.lat - it.lat) * w, lt = (j.lon - it.lon) * w;
  return 12742 * Math.asin(Math.sqrt(Math.sin(A / 2) ** 2 + Math.cos(j.lat * w) * Math.cos(it.lat * w) * Math.sin(lt / 2) ** 2));
}, Ii = (j) => Number.isFinite(j == null ? void 0 : j.lat) && Number.isFinite(j == null ? void 0 : j.lon), Kd = (j) => {
  try {
    const it = new URL(j);
    return ["http:", "https:"].includes(it.protocol) ? it.href : null;
  } catch {
    return null;
  }
};
function Ie({ label: j, children: it, ...w }) {
  return /* @__PURE__ */ x.createElement("button", { className: "icon-button", title: j, "aria-label": j, ...w }, it);
}
function Os({ source: j }) {
  return /* @__PURE__ */ x.createElement("span", { className: "tag", style: { "--source": Fi[j].color } }, /* @__PURE__ */ x.createElement("i", null), Fi[j].name);
}
function $p({ alerts: j, zones: it, location: w, trackingLocation: A, selected: lt, onSelect: h, mapRef: p, draft: g, onPoint: _ }) {
  const v = Ct.useRef(), N = Ct.useRef(), E = Ct.useRef(), R = Ct.useRef(new globalThis.Map()), H = Ct.useRef(_);
  H.current = _;
  const tt = Ct.useRef(h);
  return tt.current = h, Ct.useEffect(() => {
    const Y = Si.map(v.current, { zoomControl: !1, attributionControl: !0, minZoom: 6, maxZoom: 18 }).setView([52.15, 5.3], 7);
    p.current = Y, Si.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: '© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a>', maxZoom: 19 }).addTo(Y), N.current = Si.layerGroup().addTo(Y), E.current = Si.markerClusterGroup({
      maxClusterRadius: 58,
      showCoverageOnHover: !1,
      zoomToBoundsOnClick: !0,
      spiderfyOnMaxZoom: !0,
      spiderfyDistanceMultiplier: 1.5,
      spiderLegPolylineOptions: { weight: 1.5, color: "#b9d5cd", opacity: 0.65 },
      animate: !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      iconCreateFunction: (W) => {
        const I = W.getChildCount(), at = I >= 100 ? 54 : I >= 10 ? 48 : 42, Ht = W.getAllChildMarkers().some((Gt) => Gt.options.alertSelected);
        return Si.divIcon({
          className: `alert-cluster ${Ht ? "has-selection" : ""}`,
          html: `<span role="img" aria-label="${I} meldingen. Klik om te vergroten." title="${I} meldingen — klik om te vergroten">${I}</span>`,
          iconSize: [at, at],
          iconAnchor: [at / 2, at / 2]
        });
      }
    }).addTo(Y), Y.on("click", (W) => {
      var I;
      return (I = H.current) == null ? void 0 : I.call(H, W.latlng);
    });
    const ct = new ResizeObserver(() => Y.invalidateSize());
    return ct.observe(v.current), () => {
      ct.disconnect(), Y.remove(), p.current = null, E.current = null, R.current.clear();
    };
  }, []), Ct.useEffect(() => {
    const Y = E.current;
    if (Y) {
      Y.clearLayers(), R.current.clear();
      for (const ct of j) {
        if (!Ii(ct)) continue;
        const W = Si.marker([ct.lat, ct.lon], { icon: Jd(ct, !1), keyboard: !0, title: `${Fi[ct.source].name}: ${ct.title}` });
        W.on("click", () => tt.current(ct.id)), R.current.set(ct.id, W);
      }
      Y.addLayers([...R.current.values()]);
    }
  }, [j]), Ct.useEffect(() => {
    var ct, W;
    for (const I of j) {
      const at = R.current.get(I.id);
      at && (at.options.alertSelected = I.id === lt, at.setIcon(Jd(I, I.id === lt)));
    }
    (ct = E.current) == null || ct.refreshClusters();
    const Y = R.current.get(lt);
    Y && ((W = E.current) == null || W.zoomToShowLayer(Y));
  }, [j, lt]), Ct.useEffect(() => {
    const Y = N.current;
    if (!Y) return;
    Y.clearLayers();
    const ct = (W, I = !1) => {
      const at = W.follow_location ? A : W;
      Ii(at) && Si.circle([at.lat, at.lon], { radius: W.radius_km * 1e3, color: I ? "#344e45" : "#7c978a", weight: 1.5, dashArray: "5 7", fillColor: "#afc8ac", fillOpacity: I ? 0.18 : 0.09, interactive: !1 }).addTo(Y);
    };
    it.filter((W) => W.enabled && W.id !== (g == null ? void 0 : g.id)).forEach((W) => ct(W)), g && ct(g, !0), j.forEach((W) => {
      var at;
      const I = Fi[W.source].color;
      W.id === lt && ((at = W.polygons) != null && at.length ? Si.polygon(W.polygons, { color: I, weight: 2, fillOpacity: 0.16 }).addTo(Y) : Ii(W) && Si.circle([W.lat, W.lon], { radius: W.radius_m || 1e3, color: I, weight: 1, fillOpacity: 0.16 }).addTo(Y));
    }), Ii(w) && Si.marker([w.lat, w.lon], { icon: Si.divIcon({ className: "location-dot", html: "<i></i>", iconSize: [22, 22] }), title: w.label }).addTo(Y);
  }, [j, it, w, A, lt, g]), /* @__PURE__ */ x.createElement("div", { className: "map-canvas " + (g && !g.follow_location ? "placing" : ""), ref: v, "aria-label": "Interactieve kaart van Nederland" });
}
function Jd(j, it) {
  return Si.divIcon({ className: "alert-pin-wrap", html: `<span class="alert-pin ${it ? "selected" : ""} ${j.active ? "" : "closed"}" style="--pin:${Fi[j.source].color}"><span>${j.source === "nl_alert" ? "!" : j.source === "amber" ? "A" : "B"}</span></span>`, iconSize: [34, 40], iconAnchor: [17, 38] });
}
function t_({ host: j }) {
  var G, J;
  const it = j.hasAttribute("demo"), [w, A] = Ct.useState(it ? Jp : null), [lt, h] = Ct.useState(""), [p, g] = Ct.useState(it), [_, v] = Ct.useState("map"), [N, E] = Ct.useState("active"), [R, H] = Ct.useState(Object.keys(Fi)), [tt, Y] = Ct.useState(""), [ct, W] = Ct.useState(null), [I, at] = Ct.useState(null), [Ht, Gt] = Ct.useState(!1), [It, pt] = Ct.useState(""), [ce, Ee] = Ct.useState(null), [Fe, Pt] = Ct.useState(!1), Mt = Ct.useRef(), $e = Ct.useRef();
  Ct.useEffect(() => {
    if (!it)
      return Wp((z) => {
        A(z), h("");
      }, g, h);
  }, [it]), Ct.useEffect(() => {
    if (!It) return;
    const z = setTimeout(() => pt(""), 4500);
    return () => clearTimeout(z);
  }, [It]), Ct.useEffect(() => {
    var F, mt;
    if (!I) return;
    const z = j.shadowRoot.activeElement;
    (mt = (F = $e.current) == null ? void 0 : F.querySelector("input")) == null || mt.focus();
    const Q = (Zt) => {
      if (Zt.key === "Escape" && at(null), Zt.key === "Tab") {
        const Kt = [...$e.current.querySelectorAll("button:not(:disabled),input,select,textarea,a[href]")], ui = Kt[0], Li = Kt.at(-1), ci = j.shadowRoot.activeElement;
        Zt.shiftKey && ci === ui ? (Zt.preventDefault(), Li.focus()) : !Zt.shiftKey && ci === Li && (Zt.preventDefault(), ui.focus());
      }
    };
    return j.shadowRoot.addEventListener("keydown", Q), () => {
      j.shadowRoot.removeEventListener("keydown", Q), z == null || z.focus();
    };
  }, [!!I]);
  const Ot = ce || (w == null ? void 0 : w.location), ge = Ct.useMemo(() => ((w == null ? void 0 : w.alerts) || []).filter((z) => R.includes(z.source) && (N === "all" || (N === "active" ? z.active : !z.active)) && `${z.title} ${z.place} ${z.messages.map((Q) => Q.body).join(" ")}`.toLowerCase().includes(tt.toLowerCase())), [w, R, N, tt]), Z = w == null ? void 0 : w.alerts.find((z) => z.id === ct), $ = (z) => {
    W(z), v("map"), Pt(!1);
  }, K = async (z) => {
    Gt(!0), h("");
    try {
      A(it ? (Q) => ({ ...Q, zones: z }) : await Ip(z)), at(null), pt(it ? "Gebied aangepast in deze demosessie" : "Alertgebieden opgeslagen");
    } catch {
      h("Opslaan is mislukt. Controleer je verbinding en beheerdersrechten.");
    } finally {
      Gt(!1);
    }
  }, At = () => {
    const z = Ii(w.location), Q = Mt.current.getCenter();
    W(null), at({ id: crypto.randomUUID(), name: "Nieuw alertgebied", lat: z ? w.location.lat : Q.lat, lon: z ? w.location.lon : Q.lng, radius_km: 10, follow_location: z, enabled: !0, include_national: !0, sources: Object.keys(Fi) });
  }, nt = () => {
    if (!navigator.geolocation) {
      h("Deze browser ondersteunt geen locatiebepaling.");
      return;
    }
    navigator.geolocation.getCurrentPosition((z) => {
      var F;
      const Q = { lat: z.coords.latitude, lon: z.coords.longitude, label: "Browserlocatie" };
      Ee(Q), (F = Mt.current) == null || F.flyTo([Q.lat, Q.lon], 11), pt("Browserlocatie zichtbaar. Automatiseringen volgen de Home Assistant-locatie.");
    }, () => h("Locatie niet beschikbaar. Geef locatietoegang via een beveiligde verbinding."), { timeout: 12e3 });
  }, S = (z) => `alias: NL Alert — ${z.name}
triggers:
  - trigger: event
    event_type: nl_alert_radius
    event_data:
      instance_id: ${(w == null ? void 0 : w.instance_id) || "demo"}
      zone_id: ${z.id}
      kind: enter
actions:
  - action: persistent_notification.create
    data:
      title: "{{ trigger.event.data.title }}"
      message: "{{ trigger.event.data.message }}"
mode: queued
max: 50`;
  return /* @__PURE__ */ x.createElement("div", { className: "app" }, /* @__PURE__ */ x.createElement("aside", { className: "rail" }, /* @__PURE__ */ x.createElement("a", { className: "brand-symbol", href: "#", "aria-label": "NL Alert overzicht", onClick: (z) => {
    z.preventDefault(), v("map");
  } }, /* @__PURE__ */ x.createElement(Bc, { size: 27 })), /* @__PURE__ */ x.createElement("div", { className: "rail-nav" }, /* @__PURE__ */ x.createElement(Ie, { label: "Kaart", className: "rail-button " + (_ === "map" ? "active" : ""), onClick: () => {
    v("map"), at(null);
  } }, /* @__PURE__ */ x.createElement(Xd, { size: 22 })), /* @__PURE__ */ x.createElement(Ie, { label: "Alertgebieden", className: "rail-button " + (_ === "zones" ? "active" : ""), onClick: () => {
    v("zones"), W(null);
  } }, /* @__PURE__ */ x.createElement(Op, { size: 22 })), /* @__PURE__ */ x.createElement(Ie, { label: "Bronnen en instellingen", className: "rail-button " + (_ === "settings" ? "active" : ""), onClick: () => {
    v("settings"), W(null);
  } }, /* @__PURE__ */ x.createElement(Pp, { size: 22 }))), /* @__PURE__ */ x.createElement("span", { className: "rail-bottom" }, /* @__PURE__ */ x.createElement(Zc, { size: 20 }), /* @__PURE__ */ x.createElement("small", null, "NL"))), /* @__PURE__ */ x.createElement("main", null, /* @__PURE__ */ x.createElement("header", null, /* @__PURE__ */ x.createElement("div", { className: "identity" }, /* @__PURE__ */ x.createElement("b", null, "NL", /* @__PURE__ */ x.createElement("span", null, "Alert"), /* @__PURE__ */ x.createElement("i", null)), /* @__PURE__ */ x.createElement("span", { className: "header-divider" }), /* @__PURE__ */ x.createElement("span", { className: "header-title" }, "Een helder beeld van je omgeving.")), /* @__PURE__ */ x.createElement("div", { className: "header-right" }, /* @__PURE__ */ x.createElement("span", { className: "live " + (p ? "" : "offline") }, /* @__PURE__ */ x.createElement("i", null), it ? "Demonstratie" : p ? "Verbonden" : "Verbinding verbroken"), /* @__PURE__ */ x.createElement("span", { className: "avatar" }, "N"))), /* @__PURE__ */ x.createElement("section", { className: "workspace" }, /* @__PURE__ */ x.createElement($p, { alerts: ge, zones: (w == null ? void 0 : w.zones) || [], location: Ot, trackingLocation: w == null ? void 0 : w.location, selected: ct, onSelect: $, mapRef: Mt, draft: I, onPoint: (z) => I && !I.follow_location && at({ ...I, lat: z.lat, lon: z.lng }) }), /* @__PURE__ */ x.createElement("div", { className: "map-shade" }), /* @__PURE__ */ x.createElement("div", { className: "map-heading" }, /* @__PURE__ */ x.createElement("span", { className: "eyebrow" }, "DICHTBIJ. OP DE HOOGTE."), /* @__PURE__ */ x.createElement("h1", null, "Wat speelt er", /* @__PURE__ */ x.createElement("br", null), "in Nederland", /* @__PURE__ */ x.createElement("span", null, "?")), /* @__PURE__ */ x.createElement("p", null, "Drie bronnen. Eén overzicht.")), it && /* @__PURE__ */ x.createElement("div", { className: "demo-notice" }, "Demomodus · fictieve meldingen"), /* @__PURE__ */ x.createElement("button", { className: "mobile-list-toggle glass", onClick: () => Pt(!Fe) }, /* @__PURE__ */ x.createElement(Up, { size: 16 }), " ", Fe ? "Toon kaart" : `${ge.length} meldingen bekijken`), /* @__PURE__ */ x.createElement("section", { className: "feed glass " + (Fe ? "mobile-open" : ""), "aria-label": "Meldingen" }, /* @__PURE__ */ x.createElement("div", { className: "feed-heading" }, /* @__PURE__ */ x.createElement("div", null, /* @__PURE__ */ x.createElement("span", { className: "eyebrow" }, "HET OVERZICHT"), /* @__PURE__ */ x.createElement("h2", null, "Meldingen ", /* @__PURE__ */ x.createElement("span", null, ge.length))), /* @__PURE__ */ x.createElement(qp, { size: 21 })), /* @__PURE__ */ x.createElement("label", { className: "search" }, /* @__PURE__ */ x.createElement(jp, { size: 17 }), /* @__PURE__ */ x.createElement("input", { placeholder: "Zoek een plaats of melding…", "aria-label": "Zoek een plaats of melding", value: tt, onChange: (z) => Y(z.target.value) }), /* @__PURE__ */ x.createElement("kbd", null, "⌕")), /* @__PURE__ */ x.createElement("div", { className: "source-filters" }, Object.entries(Fi).map(([z, Q]) => /* @__PURE__ */ x.createElement("button", { key: z, "aria-pressed": R.includes(z), onClick: () => H(R.includes(z) ? R.filter((F) => F !== z) : [...R, z]), className: R.includes(z) ? "chosen" : "", style: { "--source": Q.color } }, /* @__PURE__ */ x.createElement("i", null), Q.name))), /* @__PURE__ */ x.createElement("div", { className: "tabs" }, [["active", "Actief"], ["closed", "Afgerond"], ["all", "Alles"]].map(([z, Q]) => /* @__PURE__ */ x.createElement("button", { key: z, className: N === z ? "active" : "", onClick: () => E(z) }, Q))), /* @__PURE__ */ x.createElement("div", { className: "alert-list" }, w ? ge.length === 0 ? /* @__PURE__ */ x.createElement("div", { className: "empty" }, /* @__PURE__ */ x.createElement(Zc, { size: 30 }), /* @__PURE__ */ x.createElement("h3", null, "Even helemaal rustig"), /* @__PURE__ */ x.createElement("p", null, "Geen meldingen binnen deze filters.")) : ge.map((z) => {
    var Q;
    return /* @__PURE__ */ x.createElement("button", { className: "alert-card " + (ct === z.id ? "selected" : ""), key: z.id, onClick: () => $(z.id) }, /* @__PURE__ */ x.createElement("div", { className: "alert-meta" }, /* @__PURE__ */ x.createElement(Os, { source: z.source }), /* @__PURE__ */ x.createElement("span", null, z.stale ? "Niet actueel" : z.active ? "Actief" : "Afgerond")), /* @__PURE__ */ x.createElement("h3", null, z.title), /* @__PURE__ */ x.createElement("p", null, (Q = z.messages.at(-1)) == null ? void 0 : Q.body), /* @__PURE__ */ x.createElement("div", { className: "alert-foot" }, /* @__PURE__ */ x.createElement("span", null, /* @__PURE__ */ x.createElement(Vd, { size: 12 }), z.place), /* @__PURE__ */ x.createElement(Np, { size: 15 })), /* @__PURE__ */ x.createElement("small", null, Rc(z.updated_at), Ii(z) && Ii(Ot) ? ` · ${Fp(z, Ot).toFixed(1)} km` : ""));
  }) : /* @__PURE__ */ x.createElement("div", { className: "empty" }, lt || "Meldingen ophalen…")), /* @__PURE__ */ x.createElement("div", { className: "feed-footer" }, /* @__PURE__ */ x.createElement("i", null), it ? "Voorbeeldgegevens" : `${Object.values((w == null ? void 0 : w.sources) || {}).filter((z) => z.ok).length}/3 bronnen bereikbaar`, /* @__PURE__ */ x.createElement("span", null, "Elke 2 min. bijgewerkt"))), _ === "map" && !Z && !I && /* @__PURE__ */ x.createElement("div", { className: "area-summary glass" }, /* @__PURE__ */ x.createElement("div", { className: "summary-icon" }, /* @__PURE__ */ x.createElement(Bc, { size: 22 })), /* @__PURE__ */ x.createElement("div", null, /* @__PURE__ */ x.createElement("b", null, "Jouw omgeving, in beeld"), /* @__PURE__ */ x.createElement("p", null, (w == null ? void 0 : w.zones.filter((z) => z.enabled).length) || 0, " actieve alertgebieden")), /* @__PURE__ */ x.createElement("button", { "aria-label": "Beheer alertgebieden", onClick: () => v("zones") }, /* @__PURE__ */ x.createElement(Ap, { size: 21 }))), Z && _ === "map" && !I && /* @__PURE__ */ x.createElement("section", { className: "detail glass", "aria-label": "Meldingdetails" }, /* @__PURE__ */ x.createElement("div", { className: "detail-top" }, /* @__PURE__ */ x.createElement(Os, { source: Z.source }), /* @__PURE__ */ x.createElement(Ie, { label: "Sluit melding", onClick: () => W(null) }, /* @__PURE__ */ x.createElement(Fo, { size: 19 }))), /* @__PURE__ */ x.createElement("span", { className: "eyebrow" }, Z.stale ? "LAATST BEKENDE MELDING" : Z.active ? "ACTIEVE MELDING" : "AFGEROND"), /* @__PURE__ */ x.createElement("h2", null, Z.title), /* @__PURE__ */ x.createElement("p", { className: "detail-location" }, /* @__PURE__ */ x.createElement(Vd, { size: 15 }), Z.place), !Ii(Z) && /* @__PURE__ */ x.createElement("p", { className: "hint" }, Z.national ? "Landelijke melding" : "De bron geeft geen kaartlocatie mee."), /* @__PURE__ */ x.createElement("div", { className: "timeline-heading" }, /* @__PURE__ */ x.createElement(Bp, { size: 16 }), /* @__PURE__ */ x.createElement("b", null, "Verloop van de melding"), /* @__PURE__ */ x.createElement("span", null, Z.messages.length)), /* @__PURE__ */ x.createElement("div", { className: "timeline" }, Z.messages.map((z, Q) => /* @__PURE__ */ x.createElement("article", { key: Q }, /* @__PURE__ */ x.createElement("i", null), /* @__PURE__ */ x.createElement("div", null, /* @__PURE__ */ x.createElement("span", { className: "message-type" }, z.type || "Bericht"), /* @__PURE__ */ x.createElement("time", null, Rc(z.time)), /* @__PURE__ */ x.createElement("p", null, z.body), Kd(z.url) && /* @__PURE__ */ x.createElement("a", { href: Kd(z.url), target: "_blank", rel: "noreferrer" }, "Bekijk bij de bron ", /* @__PURE__ */ x.createElement(Rp, { size: 13 })))))), /* @__PURE__ */ x.createElement("div", { className: "detail-bottom" }, /* @__PURE__ */ x.createElement(Zc, { size: 16 }), " Berichten zoals aangeleverd door de bron")), _ === "zones" && !I && /* @__PURE__ */ x.createElement("section", { className: "drawer glass" }, /* @__PURE__ */ x.createElement("div", { className: "detail-top" }, /* @__PURE__ */ x.createElement("span", { className: "eyebrow" }, "OP JOUW VOORWAARDEN"), /* @__PURE__ */ x.createElement(Ie, { label: "Sluiten", onClick: () => v("map") }, /* @__PURE__ */ x.createElement(Fo, { size: 19 }))), /* @__PURE__ */ x.createElement("h2", null, "Jouw alertgebieden"), /* @__PURE__ */ x.createElement("p", { className: "muted" }, "Kies waar je op de hoogte wilt blijven."), /* @__PURE__ */ x.createElement("button", { className: "primary", disabled: !w, onClick: At }, /* @__PURE__ */ x.createElement(Qd, { size: 18 }), " Nieuw alertgebied"), /* @__PURE__ */ x.createElement("div", { className: "zone-list" }, (w == null ? void 0 : w.zones.length) === 0 && /* @__PURE__ */ x.createElement("p", { className: "empty" }, "Maak je eerste gebied aan op de kaart."), w == null ? void 0 : w.zones.map((z) => /* @__PURE__ */ x.createElement("article", { className: "zone-card", key: z.id }, /* @__PURE__ */ x.createElement("div", { className: "zone-title" }, /* @__PURE__ */ x.createElement("div", { className: "summary-icon" }, /* @__PURE__ */ x.createElement(Bc, { size: 21 })), /* @__PURE__ */ x.createElement("div", null, /* @__PURE__ */ x.createElement("h3", null, z.name), /* @__PURE__ */ x.createElement("small", null, z.radius_km, " km · ", z.follow_location ? "Volgt Home Assistant" : "Vast middelpunt")), /* @__PURE__ */ x.createElement("button", { className: "switch " + (z.enabled ? "on" : ""), role: "switch", "aria-checked": z.enabled, "aria-label": `${z.name} inschakelen`, disabled: Ht, onClick: () => K(w.zones.map((Q) => Q.id === z.id ? { ...Q, enabled: !Q.enabled } : Q)) })), /* @__PURE__ */ x.createElement("div", { className: "zone-actions" }, /* @__PURE__ */ x.createElement("span", null, z.sources.length, " bronnen"), /* @__PURE__ */ x.createElement(Ie, { label: `Bewerk ${z.name}`, disabled: !1, onClick: () => at({ ...z }) }, /* @__PURE__ */ x.createElement(Gp, { size: 15 })))))), /* @__PURE__ */ x.createElement("div", { className: "automation-note" }, /* @__PURE__ */ x.createElement(Dp, { size: 20 }), /* @__PURE__ */ x.createElement("div", null, /* @__PURE__ */ x.createElement("b", null, "Klaar voor automatiseringen"), /* @__PURE__ */ x.createElement("p", null, "Een nieuwe melding, update of afloop in je gebied kan een actie in Home Assistant starten."))), !1), _ === "settings" && !I && /* @__PURE__ */ x.createElement("section", { className: "drawer glass" }, /* @__PURE__ */ x.createElement("div", { className: "detail-top" }, /* @__PURE__ */ x.createElement("span", { className: "eyebrow" }, "ALLES VERBONDEN"), /* @__PURE__ */ x.createElement(Ie, { label: "Sluiten", onClick: () => v("map") }, /* @__PURE__ */ x.createElement(Fo, { size: 19 }))), /* @__PURE__ */ x.createElement("h2", null, "Bronnen & locatie"), /* @__PURE__ */ x.createElement("p", { className: "muted" }, "Een transparant overzicht van je verbindingen."), Object.entries(Fi).map(([z, Q]) => {
    var F, mt;
    return /* @__PURE__ */ x.createElement("div", { className: "source-status", key: z }, /* @__PURE__ */ x.createElement(Os, { source: z }), /* @__PURE__ */ x.createElement("b", null, it ? "Demo" : (F = w == null ? void 0 : w.sources[z]) != null && F.ok ? "Bereikbaar" : "Niet bereikbaar"), /* @__PURE__ */ x.createElement("small", null, "Laatst gelukt: ", Rc((mt = w == null ? void 0 : w.sources[z]) == null ? void 0 : mt.updated_at)));
  }), /* @__PURE__ */ x.createElement("h3", null, "Locatie op de kaart"), /* @__PURE__ */ x.createElement("p", { className: "muted" }, (Ot == null ? void 0 : Ot.label) || "Nog niet beschikbaar"), /* @__PURE__ */ x.createElement("button", { className: "secondary", onClick: nt }, /* @__PURE__ */ x.createElement(Yd, { size: 16 }), " Gebruik browserlocatie"), ce && /* @__PURE__ */ x.createElement("button", { className: "secondary", onClick: () => Ee(null) }, "Terug naar Home Assistant-locatie"), /* @__PURE__ */ x.createElement("p", { className: "hint" }, "Gebieden die je volgen gebruiken de thuislocatie of device tracker uit de appconfiguratie. Browserlocatie geldt alleen voor deze kaart."), /* @__PURE__ */ x.createElement("p", { className: "hint" }, "Stel een person- of device_tracker-entiteit in via de configuratie van de NL Alert-app. Zonder entiteit gebruikt de app je Home Assistant-thuislocatie."), /* @__PURE__ */ x.createElement("div", { className: "source-status" }, /* @__PURE__ */ x.createElement("b", null, "Home Assistant-sensoren"), /* @__PURE__ */ x.createElement("span", null, it ? "Demo" : (G = w == null ? void 0 : w.bridge) != null && G.ok ? "Verbonden" : "Niet verbonden"), /* @__PURE__ */ x.createElement("small", null, it ? "De demo publiceert geen sensoren." : (J = w == null ? void 0 : w.bridge) == null ? void 0 : J.message)), /* @__PURE__ */ x.createElement("p", { className: "hint" }, "De kaart haalt kaarttegels op bij OpenStreetMap. Meldingen komen via de NL Alert-app.")), I && /* @__PURE__ */ x.createElement("section", { className: "drawer editor glass", role: "dialog", "aria-label": "Alertgebied bewerken", ref: $e }, /* @__PURE__ */ x.createElement("div", { className: "detail-top" }, /* @__PURE__ */ x.createElement("span", { className: "eyebrow" }, "JOUW GEBIED"), /* @__PURE__ */ x.createElement(Ie, { label: "Annuleren", onClick: () => at(null) }, /* @__PURE__ */ x.createElement(Fo, { size: 19 }))), /* @__PURE__ */ x.createElement("h2", null, "Een oogje in de buurt."), /* @__PURE__ */ x.createElement("label", { className: "field" }, "Naam", /* @__PURE__ */ x.createElement("input", { maxLength: 60, value: I.name, onChange: (z) => at({ ...I, name: z.target.value }) })), /* @__PURE__ */ x.createElement("label", { className: "check-row" }, /* @__PURE__ */ x.createElement("input", { type: "checkbox", checked: I.follow_location, onChange: (z) => at({ ...I, follow_location: z.target.checked }) }), " Volg mijn Home Assistant-locatie"), !I.follow_location && /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement("p", { className: "hint" }, "Klik op de kaart om het middelpunt te plaatsen."), /* @__PURE__ */ x.createElement("div", { className: "coordinates" }, ["lat", "lon"].map((z, Q) => /* @__PURE__ */ x.createElement("label", { className: "field", key: z }, Q ? "Lengtegraad" : "Breedtegraad", /* @__PURE__ */ x.createElement("input", { type: "number", min: Q ? -180 : -90, max: Q ? 180 : 90, step: "0.0001", value: I[z], onChange: (F) => at({ ...I, [z]: Number(F.target.value) }) }))))), /* @__PURE__ */ x.createElement("div", { className: "radius-label" }, /* @__PURE__ */ x.createElement("label", { htmlFor: "radius" }, "Straal van het gebied"), /* @__PURE__ */ x.createElement("b", null, I.radius_km, " ", /* @__PURE__ */ x.createElement("span", null, "km"))), /* @__PURE__ */ x.createElement("input", { id: "radius", className: "range", type: "range", min: "0.5", max: "100", step: "0.5", value: I.radius_km, onChange: (z) => at({ ...I, radius_km: Number(z.target.value) }) }), /* @__PURE__ */ x.createElement("div", { className: "range-ends" }, /* @__PURE__ */ x.createElement("span", null, "0,5 km"), /* @__PURE__ */ x.createElement("span", null, "100 km")), /* @__PURE__ */ x.createElement("label", { className: "field" }, "Bronnen"), /* @__PURE__ */ x.createElement("div", { className: "editor-sources" }, Object.entries(Fi).map(([z, Q]) => /* @__PURE__ */ x.createElement("label", { className: "check-row", key: z }, /* @__PURE__ */ x.createElement("input", { type: "checkbox", checked: I.sources.includes(z), onChange: (F) => at({ ...I, sources: F.target.checked ? [...I.sources, z] : I.sources.filter((mt) => mt !== z) }) }), /* @__PURE__ */ x.createElement(Os, { source: z })))), /* @__PURE__ */ x.createElement("label", { className: "check-row" }, /* @__PURE__ */ x.createElement("input", { type: "checkbox", checked: I.include_national, onChange: (z) => at({ ...I, include_national: z.target.checked }) }), " Ook expliciet landelijke meldingen"), /* @__PURE__ */ x.createElement("details", null, /* @__PURE__ */ x.createElement("summary", null, "Gebruik in een automatisering"), /* @__PURE__ */ x.createElement("p", { className: "hint" }, "Sla het gebied eerst op. Gebruik enter, update of closed als gebeurtenis."), /* @__PURE__ */ x.createElement("pre", null, S(I)), /* @__PURE__ */ x.createElement("button", { className: "secondary", onClick: async () => {
    try {
      await navigator.clipboard.writeText(S(I)), pt("YAML gekopieerd");
    } catch {
      pt("Kopiëren niet toegestaan. Selecteer de YAML handmatig.");
    }
  } }, /* @__PURE__ */ x.createElement(Zp, { size: 15 }), " Kopieer YAML")), /* @__PURE__ */ x.createElement("div", { className: "editor-actions" }, /* @__PURE__ */ x.createElement("button", { className: "primary", disabled: Ht || !1 || !I.name.trim() || !I.sources.length || !Ii(I), onClick: () => K([...w.zones.filter((z) => z.id !== I.id), I]) }, /* @__PURE__ */ x.createElement(kp, { size: 17 }), Ht ? "Opslaan…" : "Gebied opslaan"), w.zones.some((z) => z.id === I.id) && /* @__PURE__ */ x.createElement(Ie, { label: "Verwijder gebied", disabled: Ht || !1, onClick: () => K(w.zones.filter((z) => z.id !== I.id)) }, /* @__PURE__ */ x.createElement(Yp, { size: 18 })))), /* @__PURE__ */ x.createElement("div", { className: "map-tools glass" }, /* @__PURE__ */ x.createElement(Ie, { label: "Inzoomen", onClick: () => {
    var z;
    return (z = Mt.current) == null ? void 0 : z.zoomIn();
  } }, /* @__PURE__ */ x.createElement(Qd, { size: 19 })), /* @__PURE__ */ x.createElement(Ie, { label: "Uitzoomen", onClick: () => {
    var z;
    return (z = Mt.current) == null ? void 0 : z.zoomOut();
  } }, /* @__PURE__ */ x.createElement(Hp, { size: 19 })), /* @__PURE__ */ x.createElement("hr", null), /* @__PURE__ */ x.createElement(Ie, { label: "Naar mijn locatie", onClick: () => {
    var z;
    return Ii(Ot) && ((z = Mt.current) == null ? void 0 : z.flyTo([Ot.lat, Ot.lon], 11));
  } }, /* @__PURE__ */ x.createElement(Yd, { size: 19 })), /* @__PURE__ */ x.createElement(Ie, { label: "Heel Nederland", onClick: () => {
    var z;
    return (z = Mt.current) == null ? void 0 : z.flyTo([52.15, 5.3], 7);
  } }, /* @__PURE__ */ x.createElement(Xd, { size: 18 }))), /* @__PURE__ */ x.createElement("div", { className: "map-caption" }, /* @__PURE__ */ x.createElement("span", { className: "location-key" }), " ", (Ot == null ? void 0 : Ot.label) || "Locatie laden", /* @__PURE__ */ x.createElement("span", null, "·"), /* @__PURE__ */ x.createElement("span", { className: "radius-key" }), " Alertgebied"), (lt || It) && /* @__PURE__ */ x.createElement("div", { className: "toast glass " + (lt ? "error" : ""), role: lt ? "alert" : "status" }, lt || It, /* @__PURE__ */ x.createElement(Ie, { label: "Melding sluiten", onClick: () => {
    h(""), pt("");
  } }, /* @__PURE__ */ x.createElement(Fo, { size: 16 }))))));
}
class e_ extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
    const it = document.createElement("style");
    it.textContent = Vp + `
` + Xp + `
` + Qp, this.shadowRoot.append(it), this.mount = document.createElement("div"), this.shadowRoot.append(this.mount);
  }
  connectedCallback() {
    this.root = xp.createRoot(this.mount), this.render();
  }
  disconnectedCallback() {
    var it;
    (it = this.root) == null || it.unmount(), this.root = null;
  }
  render() {
    var it;
    (it = this.root) == null || it.render(/* @__PURE__ */ x.createElement(t_, { host: this }));
  }
}
customElements.get("nl-alert-panel") || customElements.define("nl-alert-panel", e_);
