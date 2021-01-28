import { c as e, r as t, h as n } from "./p-f68e5270.js";

import { n as r } from "./p-325fafe6.js";

const a = {
  firstSetFilePrefix: "B",
  firstSet: [ "Dans la cour", "Chez moi", "Pendant les vacances", "Sous un arbre", "Derrière ma maison" ],
  secondSetFilePrefix: "C",
  secondSet: [ "je mange", "je croque", "j’arrose", "je casse", "je range" ],
  thirdSetFilePrefix: "D",
  thirdSet: [ {
    audio: "un téléphone",
    image: "citron"
  }, {
    audio: "une biscotte",
    image: "baignoire"
  }, {
    audio: "un parapluie",
    image: "dé"
  }, {
    audio: "des lunettes",
    image: "couverts"
  }, {
    audio: "des bananes",
    image: "bottes"
  } ],
  fourthSetFilePrefix: "F",
  fourthSet: [ "Rires 2", "Rires 7", "Rires 8", "Rires 9", "Rires 10", "Rires 11", "Rires 13", "Rires 15" ],
  fifthSetFilePrefix: "G",
  fifthSet: [ "CestCompletementToque", "CestCompletementToque_ALT", "IlEstDrole", "MaisQuelCoquin", "OhMaisCaVaPas", "OhMaisCaVaPasLaTete" ]
}, i = {
  zone1: {
    firstCornerX: 725,
    firstCornerY: 1055,
    secondCornerX: 1460,
    secondCornerY: 1676
  },
  zone2: {
    firstCornerX: 1460,
    firstCornerY: 1055,
    secondCornerX: 2200,
    secondCornerY: 1677
  },
  zone3: {
    firstCornerX: 2206,
    firstCornerY: 1055,
    secondCornerX: 2935,
    secondCornerY: 1675
  },
  startBtn: {
    firstCornerX: 3109,
    firstCornerY: 911,
    secondCornerX: 3290,
    secondCornerY: 1090
  },
  startZone1Btn: {
    firstCornerX: 977,
    firstCornerY: 1735,
    secondCornerX: 1175,
    secondCornerY: 1920
  },
  startZone2Btn: {
    firstCornerX: 1745,
    firstCornerY: 1740,
    secondCornerX: 1940,
    secondCornerY: 1918
  },
  startZone3Btn: {
    firstCornerX: 2485,
    firstCornerY: 1730,
    secondCornerX: 2680,
    secondCornerY: 1917
  },
  replayAudioBtn: {
    firstCornerX: 1730,
    firstCornerY: 514,
    secondCornerX: 1954,
    secondCornerY: 728
  },
  backBtn: {
    firstCornerX: 725,
    firstCornerY: 514,
    secondCornerX: 959,
    secondCornerY: 733
  }
};

var o = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

var s, u, c = (function(e, t) {
  (function() {
    /** Used as a safe reference for `undefined` in pre-ES5 environments. */
    var n, r = "Expected a function", a = "__lodash_hash_undefined__", i = "__lodash_placeholder__", s = 16, u = 32, c = 64, l = 128, h = 256, f = 1 / 0, d = 9007199254740991, p = NaN, g = 4294967295, y = [ [ "ary", l ], [ "bind", 1 ], [ "bindKey", 2 ], [ "curry", 8 ], [ "curryRight", s ], [ "flip", 512 ], [ "partial", u ], [ "partialRight", c ], [ "rearg", h ] ], b = "[object Arguments]", v = "[object Array]", _ = "[object Boolean]", m = "[object Date]", I = "[object Error]", S = "[object Function]", w = "[object GeneratorFunction]", A = "[object Map]", C = "[object Number]", k = "[object Object]", L = "[object Promise]", R = "[object RegExp]", O = "[object Set]", x = "[object String]", Z = "[object Symbol]", j = "[object WeakMap]", F = "[object ArrayBuffer]", z = "[object DataView]", B = "[object Float32Array]", T = "[object Float64Array]", E = "[object Int8Array]", M = "[object Int16Array]", W = "[object Int32Array]", P = "[object Uint8Array]", D = "[object Uint8ClampedArray]", U = "[object Uint16Array]", q = "[object Uint32Array]", N = /\b__p \+= '';/g, H = /\b(__p \+=) '' \+/g, G = /(__e\(.*?\)|\b__t\)) \+\n'';/g, K = /&(?:amp|lt|gt|quot|#39);/g, V = /[&<>"']/g, X = RegExp(K.source), Y = RegExp(V.source), $ = /<%-([\s\S]+?)%>/g, J = /<%([\s\S]+?)%>/g, Q = /<%=([\s\S]+?)%>/g, ee = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, te = /^\w*$/, ne = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, re = /[\\^$.*+?()[\]{}|]/g, ae = RegExp(re.source), ie = /^\s+|\s+$/g, oe = /^\s+/, se = /\s+$/, ue = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, ce = /\{\n\/\* \[wrapped with (.+)\] \*/, le = /,? & /, he = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, fe = /\\(\\)?/g, de = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, pe = /\w*$/, ge = /^[-+]0x[0-9a-f]+$/i, ye = /^0b[01]+$/i, be = /^\[object .+?Constructor\]$/, ve = /^0o[0-7]+$/i, _e = /^(?:0|[1-9]\d*)$/, me = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ie = /($^)/, Se = /['\n\r\u2028\u2029\\]/g, we = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", Ae = "\\u2700-\\u27bf", Ce = "a-z\\xdf-\\xf6\\xf8-\\xff", ke = "A-Z\\xc0-\\xd6\\xd8-\\xde", Le = "\\ufe0e\\ufe0f", Re = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Oe = "['’]", xe = "[\\ud800-\\udfff]", Ze = "[" + Re + "]", je = "[" + we + "]", Fe = "\\d+", ze = "[\\u2700-\\u27bf]", Be = "[" + Ce + "]", Te = "[^\\ud800-\\udfff" + Re + Fe + Ae + Ce + ke + "]", Ee = "\\ud83c[\\udffb-\\udfff]", Me = "[^\\ud800-\\udfff]", We = "(?:\\ud83c[\\udde6-\\uddff]){2}", Pe = "[\\ud800-\\udbff][\\udc00-\\udfff]", De = "[" + ke + "]", Ue = "(?:" + Be + "|" + Te + ")", qe = "(?:" + De + "|" + Te + ")", Ne = "(?:['’](?:d|ll|m|re|s|t|ve))?", He = "(?:['’](?:D|LL|M|RE|S|T|VE))?", Ge = "(?:" + je + "|" + Ee + ")?", Ke = "[\\ufe0e\\ufe0f]?", Ve = Ke + Ge + "(?:\\u200d(?:" + [ Me, We, Pe ].join("|") + ")" + Ke + Ge + ")*", Xe = "(?:" + [ ze, We, Pe ].join("|") + ")" + Ve, Ye = "(?:" + [ Me + je + "?", je, We, Pe, xe ].join("|") + ")", $e = RegExp(Oe, "g"), Je = RegExp(je, "g"), Qe = RegExp(Ee + "(?=" + Ee + ")|" + Ye + Ve, "g"), et = RegExp([ De + "?" + Be + "+" + Ne + "(?=" + [ Ze, De, "$" ].join("|") + ")", qe + "+" + He + "(?=" + [ Ze, De + Ue, "$" ].join("|") + ")", De + "?" + Ue + "+" + Ne, De + "+" + He, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Fe, Xe ].join("|"), "g"), tt = RegExp("[\\u200d\\ud800-\\udfff" + we + Le + "]"), nt = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, rt = [ "Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout" ], at = -1, it = {};
    /** Used as the semantic version number. */    it[B] = it[T] = it[E] = it[M] = it[W] = it[P] = it[D] = it[U] = it[q] = !0, 
    it[b] = it[v] = it[F] = it[_] = it[z] = it[m] = it[I] = it[S] = it[A] = it[C] = it[k] = it[R] = it[O] = it[x] = it[j] = !1;
    /** Used to identify `toStringTag` values supported by `_.clone`. */
    var ot = {};
    ot[b] = ot[v] = ot[F] = ot[z] = ot[_] = ot[m] = ot[B] = ot[T] = ot[E] = ot[M] = ot[W] = ot[A] = ot[C] = ot[k] = ot[R] = ot[O] = ot[x] = ot[Z] = ot[P] = ot[D] = ot[U] = ot[q] = !0, 
    ot[I] = ot[S] = ot[j] = !1;
    /** Used to map Latin Unicode letters to basic Latin letters. */
    var st = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, ut = parseFloat, ct = parseInt, lt = "object" == typeof o && o && o.Object === Object && o, ht = "object" == typeof self && self && self.Object === Object && self, ft = lt || ht || Function("return this")(), dt = t && !t.nodeType && t, pt = dt && e && !e.nodeType && e, gt = pt && pt.exports === dt, yt = gt && lt.process, bt = function() {
      try {
        // Use `util.types` for Node.js 10+.
        var e = pt && pt.require && pt.require("util").types;
        return e || yt && yt.binding && yt.binding("util");
        // Legacy `process.binding('util')` for Node.js < 10.
            } catch (e) {}
    }(), vt = bt && bt.isArrayBuffer, _t = bt && bt.isDate, mt = bt && bt.isMap, It = bt && bt.isRegExp, St = bt && bt.isSet, wt = bt && bt.isTypedArray;
    /** Used to map characters to HTML entities. */    
    /*--------------------------------------------------------------------------*/
    /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */
    function apply(e, t, n) {
      switch (n.length) {
       case 0:
        return e.call(t);

       case 1:
        return e.call(t, n[0]);

       case 2:
        return e.call(t, n[0], n[1]);

       case 3:
        return e.call(t, n[0], n[1], n[2]);
      }
      return e.apply(t, n);
    }
    /**
   * A specialized version of `baseAggregator` for arrays.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform keys.
   * @param {Object} accumulator The initial aggregated object.
   * @returns {Function} Returns `accumulator`.
   */    function arrayAggregator(e, t, n, r) {
      for (var a = -1, i = null == e ? 0 : e.length; ++a < i; ) {
        var o = e[a];
        t(r, o, n(o), e);
      }
      return r;
    }
    /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */    function arrayEach(e, t) {
      for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n, e); ) ;
      return e;
    }
    /**
   * A specialized version of `_.forEachRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */    function arrayEachRight(e, t) {
      for (var n = null == e ? 0 : e.length; n-- && !1 !== t(e[n], n, e); ) ;
      return e;
    }
    /**
   * A specialized version of `_.every` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if all elements pass the predicate check,
   *  else `false`.
   */    function arrayEvery(e, t) {
      for (var n = -1, r = null == e ? 0 : e.length; ++n < r; ) if (!t(e[n], n, e)) return !1;
      return !0;
    }
    /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */    function arrayFilter(e, t) {
      for (var n = -1, r = null == e ? 0 : e.length, a = 0, i = []; ++n < r; ) {
        var o = e[n];
        t(o, n, e) && (i[a++] = o);
      }
      return i;
    }
    /**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */    function arrayIncludes(e, t) {
      return !(null == e || !e.length) && baseIndexOf(e, t, 0) > -1;
    }
    /**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */    function arrayIncludesWith(e, t, n) {
      for (var r = -1, a = null == e ? 0 : e.length; ++r < a; ) if (n(t, e[r])) return !0;
      return !1;
    }
    /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */    function arrayMap(e, t) {
      for (var n = -1, r = null == e ? 0 : e.length, a = Array(r); ++n < r; ) a[n] = t(e[n], n, e);
      return a;
    }
    /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */    function arrayPush(e, t) {
      for (var n = -1, r = t.length, a = e.length; ++n < r; ) e[a + n] = t[n];
      return e;
    }
    /**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */    function arrayReduce(e, t, n, r) {
      var a = -1, i = null == e ? 0 : e.length;
      for (r && i && (n = e[++a]); ++a < i; ) n = t(n, e[a], a, e);
      return n;
    }
    /**
   * A specialized version of `_.reduceRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the last element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */    function arrayReduceRight(e, t, n, r) {
      var a = null == e ? 0 : e.length;
      for (r && a && (n = e[--a]); a--; ) n = t(n, e[a], a, e);
      return n;
    }
    /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */    function arraySome(e, t) {
      for (var n = -1, r = null == e ? 0 : e.length; ++n < r; ) if (t(e[n], n, e)) return !0;
      return !1;
    }
    /**
   * Gets the size of an ASCII `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */    var At = baseProperty("length");
    /**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */    
    /**
   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
   * without support for iteratee shorthands, which iterates over `collection`
   * using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the found element or its key, else `undefined`.
   */
    function baseFindKey(e, t, n) {
      var r;
      return n(e, (function(e, n, a) {
        if (t(e, n, a)) return r = n, !1;
      })), r;
    }
    /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */    function baseFindIndex(e, t, n, r) {
      for (var a = e.length, i = n + (r ? 1 : -1); r ? i-- : ++i < a; ) if (t(e[i], i, e)) return i;
      return -1;
    }
    /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */    function baseIndexOf(e, t, n) {
      return t == t ? 
      /**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
      function(e, t, n) {
        for (var r = n - 1, a = e.length; ++r < a; ) if (e[r] === t) return r;
        return -1;
      }
      /**
   * A specialized version of `_.lastIndexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */ (e, t, n) : baseFindIndex(e, baseIsNaN, n);
    }
    /**
   * This function is like `baseIndexOf` except that it accepts a comparator.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */    function baseIndexOfWith(e, t, n, r) {
      for (var a = n - 1, i = e.length; ++a < i; ) if (r(e[a], t)) return a;
      return -1;
    }
    /**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */    function baseIsNaN(e) {
      return e != e;
    }
    /**
   * The base implementation of `_.mean` and `_.meanBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the mean.
   */    function baseMean(e, t) {
      var n = null == e ? 0 : e.length;
      return n ? baseSum(e, t) / n : p;
    }
    /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */    function baseProperty(e) {
      return function(t) {
        return null == t ? n : t[e];
      };
    }
    /**
   * The base implementation of `_.propertyOf` without support for deep paths.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new accessor function.
   */    function basePropertyOf(e) {
      return function(t) {
        return null == e ? n : e[t];
      };
    }
    /**
   * The base implementation of `_.reduce` and `_.reduceRight`, without support
   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} accumulator The initial value.
   * @param {boolean} initAccum Specify using the first or last element of
   *  `collection` as the initial value.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the accumulated value.
   */    function baseReduce(e, t, n, r, a) {
      return a(e, (function(e, a, i) {
        n = r ? (r = !1, e) : t(n, e, a, i);
      })), n;
    }
    /**
   * The base implementation of `_.sortBy` which uses `comparer` to define the
   * sort order of `array` and replaces criteria objects with their corresponding
   * values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define sort order.
   * @returns {Array} Returns `array`.
   */    
    /**
   * The base implementation of `_.sum` and `_.sumBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the sum.
   */
    function baseSum(e, t) {
      for (var r, a = -1, i = e.length; ++a < i; ) {
        var o = t(e[a]);
        o !== n && (r = r === n ? o : r + o);
      }
      return r;
    }
    /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */    function baseTimes(e, t) {
      for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
      return r;
    }
    /**
   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
   * of key-value pairs for `object` corresponding to the property names of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the key-value pairs.
   */    
    /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
    function baseUnary(e) {
      return function(t) {
        return e(t);
      };
    }
    /**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */    function baseValues(e, t) {
      return arrayMap(t, (function(t) {
        return e[t];
      }));
    }
    /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */    function cacheHas(e, t) {
      return e.has(t);
    }
    /**
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the first unmatched string symbol.
   */    function charsStartIndex(e, t) {
      for (var n = -1, r = e.length; ++n < r && baseIndexOf(t, e[n], 0) > -1; ) ;
      return n;
    }
    /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the last unmatched string symbol.
   */    function charsEndIndex(e, t) {
      for (var n = e.length; n-- && baseIndexOf(t, e[n], 0) > -1; ) ;
      return n;
    }
    /**
   * Gets the number of `placeholder` occurrences in `array`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} placeholder The placeholder to search for.
   * @returns {number} Returns the placeholder count.
   */    function countHolders(e, t) {
      for (var n = e.length, r = 0; n--; ) e[n] === t && ++r;
      return r;
    }
    /**
   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
   * letters to basic Latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */    var Ct = basePropertyOf({
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }), kt = basePropertyOf({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    });
    /**
   * Used by `_.escape` to convert characters to HTML entities.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */    
    /**
   * Used by `_.template` to escape characters for inclusion in compiled string literals.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
    function escapeStringChar(e) {
      return "\\" + st[e];
    }
    /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */    
    /**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */
    function hasUnicode(e) {
      return tt.test(e);
    }
    /**
   * Checks if `string` contains a word composed of Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a word is found, else `false`.
   */    
    /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */
    function mapToArray(e) {
      var t = -1, n = Array(e.size);
      return e.forEach((function(e, r) {
        n[++t] = [ r, e ];
      })), n;
    }
    /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */    function overArg(e, t) {
      return function(n) {
        return e(t(n));
      };
    }
    /**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */    function replaceHolders(e, t) {
      for (var n = -1, r = e.length, a = 0, o = []; ++n < r; ) {
        var s = e[n];
        s !== t && s !== i || (e[n] = i, o[a++] = n);
      }
      return o;
    }
    /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */    function setToArray(e) {
      var t = -1, n = Array(e.size);
      return e.forEach((function(e) {
        n[++t] = e;
      })), n;
    }
    /**
   * Converts `set` to its value-value pairs.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the value-value pairs.
   */    function setToPairs(e) {
      var t = -1, n = Array(e.size);
      return e.forEach((function(e) {
        n[++t] = [ e, e ];
      })), n;
    }
    /**
   * Gets the number of symbols in `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the string size.
   */
    function stringSize(e) {
      return hasUnicode(e) ? 
      /**
   * Gets the size of a Unicode `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
      function(e) {
        for (var t = Qe.lastIndex = 0; Qe.test(e); ) ++t;
        return t;
      }
      /**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */ (e) : At(e);
    }
    /**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */    function stringToArray(e) {
      return hasUnicode(e) ? function(e) {
        return e.match(Qe) || [];
      }
      /**
   * Splits a Unicode `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */ (e) : function(e) {
        return e.split("");
      }
      /**
   * Splits an ASCII `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */ (e);
    }
    /**
   * Used by `_.unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {string} chr The matched character to unescape.
   * @returns {string} Returns the unescaped character.
   */    var Lt = basePropertyOf({
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }), Rt = function runInContext(e) {
      /** Built-in constructor references. */
      var t, o = (e = null == e ? ft : Rt.defaults(ft.Object(), e, Rt.pick(ft, rt))).Array, we = e.Date, Ae = e.Error, Ce = e.Function, ke = e.Math, Le = e.Object, Re = e.RegExp, Oe = e.String, xe = e.TypeError, Ze = o.prototype, je = Ce.prototype, Fe = Le.prototype, ze = e["__core-js_shared__"], Be = je.toString, Te = Fe.hasOwnProperty, Ee = 0, Me = (t = /[^.]+$/.exec(ze && ze.keys && ze.keys.IE_PROTO || "")) ? "Symbol(src)_1." + t : "", We = Fe.toString, Pe = Be.call(Le), De = ft._, Ue = Re("^" + Be.call(Te).replace(re, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), qe = gt ? e.Buffer : n, Ne = e.Symbol, He = e.Uint8Array, Ge = qe ? qe.allocUnsafe : n, Ke = overArg(Le.getPrototypeOf, Le), Ve = Le.create, Xe = Fe.propertyIsEnumerable, Ye = Ze.splice, Qe = Ne ? Ne.isConcatSpreadable : n, tt = Ne ? Ne.iterator : n, st = Ne ? Ne.toStringTag : n, lt = function() {
        try {
          var e = getNative(Le, "defineProperty");
          return e({}, "", {}), e;
        } catch (e) {}
      }(), ht = e.clearTimeout !== ft.clearTimeout && e.clearTimeout, dt = we && we.now !== ft.Date.now && we.now, pt = e.setTimeout !== ft.setTimeout && e.setTimeout, yt = ke.ceil, bt = ke.floor, At = Le.getOwnPropertySymbols, Ot = qe ? qe.isBuffer : n, xt = e.isFinite, Zt = Ze.join, jt = overArg(Le.keys, Le), Ft = ke.max, zt = ke.min, Bt = we.now, Tt = e.parseInt, Et = ke.random, Mt = Ze.reverse, Wt = getNative(e, "DataView"), Pt = getNative(e, "Map"), Dt = getNative(e, "Promise"), Ut = getNative(e, "Set"), qt = getNative(e, "WeakMap"), Nt = getNative(Le, "create"), Ht = qt && new qt, Gt = {}, Kt = toSource(Wt), Vt = toSource(Pt), Xt = toSource(Dt), Yt = toSource(Ut), $t = toSource(qt), Jt = Ne ? Ne.prototype : n, Qt = Jt ? Jt.valueOf : n, en = Jt ? Jt.toString : n;
      /** Used for built-in method references. */      
      /*------------------------------------------------------------------------*/
      /**
     * Creates a `lodash` object which wraps `value` to enable implicit method
     * chain sequences. Methods that operate on and return arrays, collections,
     * and functions can be chained together. Methods that retrieve a single value
     * or may return a primitive value will automatically end the chain sequence
     * and return the unwrapped value. Otherwise, the value must be unwrapped
     * with `_#value`.
     *
     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
     * enabled using `_.chain`.
     *
     * The execution of chained methods is lazy, that is, it's deferred until
     * `_#value` is implicitly or explicitly called.
     *
     * Lazy evaluation allows several methods to support shortcut fusion.
     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
     * the creation of intermediate arrays and can greatly reduce the number of
     * iteratee executions. Sections of a chain sequence qualify for shortcut
     * fusion if the section is applied to an array and iteratees accept only
     * one argument. The heuristic for whether a section qualifies for shortcut
     * fusion is subject to change.
     *
     * Chaining is supported in custom builds as long as the `_#value` method is
     * directly or indirectly included in the build.
     *
     * In addition to lodash methods, wrappers have `Array` and `String` methods.
     *
     * The wrapper `Array` methods are:
     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
     *
     * The wrapper `String` methods are:
     * `replace` and `split`
     *
     * The wrapper methods that support shortcut fusion are:
     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
     *
     * The chainable wrapper methods are:
     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
     * `zipObject`, `zipObjectDeep`, and `zipWith`
     *
     * The wrapper methods that are **not** chainable by default are:
     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
     * `upperFirst`, `value`, and `words`
     *
     * @name _
     * @constructor
     * @category Seq
     * @param {*} value The value to wrap in a `lodash` instance.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2, 3]);
     *
     * // Returns an unwrapped value.
     * wrapped.reduce(_.add);
     * // => 6
     *
     * // Returns a wrapped value.
     * var squares = wrapped.map(square);
     *
     * _.isArray(squares);
     * // => false
     *
     * _.isArray(squares.value());
     * // => true
     */
      function lodash(e) {
        if (isObjectLike(e) && !ir(e) && !(e instanceof LazyWrapper)) {
          if (e instanceof LodashWrapper) return e;
          if (Te.call(e, "__wrapped__")) return wrapperClone(e);
        }
        return new LodashWrapper(e);
      }
      /**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} proto The object to inherit from.
     * @returns {Object} Returns the new object.
     */      var tn = function() {
        function object() {}
        return function(e) {
          if (!isObject(e)) return {};
          if (Ve) return Ve(e);
          object.prototype = e;
          var t = new object;
          return object.prototype = n, t;
        };
      }();
      /**
     * The function whose prototype chain sequence wrappers inherit from.
     *
     * @private
     */      function baseLodash() {
        // No operation performed.
      }
      /**
     * The base constructor for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap.
     * @param {boolean} [chainAll] Enable explicit method chain sequences.
     */      function LodashWrapper(e, t) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, 
        this.__values__ = n;
      }
      /**
     * By default, the template delimiters used by lodash are like those in
     * embedded Ruby (ERB) as well as ES2015 template strings. Change the
     * following template settings to use alternative delimiters.
     *
     * @static
     * @memberOf _
     * @type {Object}
     */      
      /*------------------------------------------------------------------------*/
      /**
     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
     *
     * @private
     * @constructor
     * @param {*} value The value to wrap.
     */
      function LazyWrapper(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, 
        this.__iteratees__ = [], this.__takeCount__ = g, this.__views__ = [];
      }
      /**
     * Creates a clone of the lazy wrapper object.
     *
     * @private
     * @name clone
     * @memberOf LazyWrapper
     * @returns {Object} Returns the cloned `LazyWrapper` object.
     */      
      /*------------------------------------------------------------------------*/
      /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
      function Hash(e) {
        var t = -1, n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      /**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */      
      /*------------------------------------------------------------------------*/
      /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
      function ListCache(e) {
        var t = -1, n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      /**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */      
      /*------------------------------------------------------------------------*/
      /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
      function MapCache(e) {
        var t = -1, n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      /**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */      
      /*------------------------------------------------------------------------*/
      /**
     *
     * Creates an array cache object to store unique values.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */
      function SetCache(e) {
        var t = -1, n = null == e ? 0 : e.length;
        for (this.__data__ = new MapCache; ++t < n; ) this.add(e[t]);
      }
      /**
     * Adds `value` to the array cache.
     *
     * @private
     * @name add
     * @memberOf SetCache
     * @alias push
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache instance.
     */      
      /*------------------------------------------------------------------------*/
      /**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
      function Stack(e) {
        var t = this.__data__ = new ListCache(e);
        this.size = t.size;
      }
      /**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */      
      /*------------------------------------------------------------------------*/
      /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */
      function arrayLikeKeys(e, t) {
        var n = ir(e), r = !n && ar(e), a = !n && !r && sr(e), i = !n && !r && !a && fr(e), o = n || r || a || i, s = o ? baseTimes(e.length, Oe) : [], u = s.length;
        for (var c in e) !t && !Te.call(e, c) || o && (
        // Safari 9 has enumerable `arguments.length` in strict mode.
        "length" == c || 
        // Node.js 0.10 has enumerable non-index properties on buffers.
        a && ("offset" == c || "parent" == c) || 
        // PhantomJS 2 has enumerable non-index properties on typed arrays.
        i && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || 
        // Skip index properties.
        isIndex(c, u)) || s.push(c);
        return s;
      }
      /**
     * A specialized version of `_.sample` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @returns {*} Returns the random element.
     */      function arraySample(e) {
        var t = e.length;
        return t ? e[baseRandom(0, t - 1)] : n;
      }
      /**
     * A specialized version of `_.sampleSize` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */      function arraySampleSize(e, t) {
        return shuffleSelf(copyArray(e), baseClamp(t, 0, e.length));
      }
      /**
     * A specialized version of `_.shuffle` for arrays.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */      function arrayShuffle(e) {
        return shuffleSelf(copyArray(e));
      }
      /**
     * This function is like `assignValue` except that it doesn't assign
     * `undefined` values.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */      function assignMergeValue(e, t, r) {
        (r !== n && !eq(e[t], r) || r === n && !(t in e)) && baseAssignValue(e, t, r);
      }
      /**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */      function assignValue(e, t, r) {
        var a = e[t];
        Te.call(e, t) && eq(a, r) && (r !== n || t in e) || baseAssignValue(e, t, r);
      }
      /**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */      function assocIndexOf(e, t) {
        for (var n = e.length; n--; ) if (eq(e[n][0], t)) return n;
        return -1;
      }
      /**
     * Aggregates elements of `collection` on `accumulator` with keys transformed
     * by `iteratee` and values set by `setter`.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform keys.
     * @param {Object} accumulator The initial aggregated object.
     * @returns {Function} Returns `accumulator`.
     */      function baseAggregator(e, t, n, r) {
        return nn(e, (function(e, a, i) {
          t(r, e, n(e), i);
        })), r;
      }
      /**
     * The base implementation of `_.assign` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */      function baseAssign(e, t) {
        return e && copyObject(t, keys(t), e);
      }
      /**
     * The base implementation of `_.assignIn` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */      
      /**
     * The base implementation of `assignValue` and `assignMergeValue` without
     * value checks.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
      function baseAssignValue(e, t, n) {
        "__proto__" == t && lt ? lt(e, t, {
          configurable: !0,
          enumerable: !0,
          value: n,
          writable: !0
        }) : e[t] = n;
      }
      /**
     * The base implementation of `_.at` without support for individual paths.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {string[]} paths The property paths to pick.
     * @returns {Array} Returns the picked elements.
     */      function baseAt(e, t) {
        for (var r = -1, a = t.length, i = o(a), s = null == e; ++r < a; ) i[r] = s ? n : get(e, t[r]);
        return i;
      }
      /**
     * The base implementation of `_.clamp` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     */      function baseClamp(e, t, r) {
        return e == e && (r !== n && (e = e <= r ? e : r), t !== n && (e = e >= t ? e : t)), 
        e;
      }
      /**
     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
     * traversed objects.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Deep clone
     *  2 - Flatten inherited properties
     *  4 - Clone symbols
     * @param {Function} [customizer] The function to customize cloning.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The parent object of `value`.
     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
     * @returns {*} Returns the cloned value.
     */      function baseClone(e, t, r, a, i, o) {
        var s, u = 1 & t, c = 2 & t, l = 4 & t;
        if (r && (s = i ? r(e, a, i, o) : r(e)), s !== n) return s;
        if (!isObject(e)) return e;
        var h = ir(e);
        if (h) {
          if (s = 
          /**
     * Initializes an array clone.
     *
     * @private
     * @param {Array} array The array to clone.
     * @returns {Array} Returns the initialized clone.
     */
          function(e) {
            var t = e.length, n = new e.constructor(t);
            // Add properties assigned by `RegExp#exec`.
                        return t && "string" == typeof e[0] && Te.call(e, "index") && (n.index = e.index, 
            n.input = e.input), n;
          }
          /**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */ (e), !u) return copyArray(e, s);
        } else {
          var f = gn(e), d = f == S || f == w;
          if (sr(e)) return cloneBuffer(e, u);
          if (f == k || f == b || d && !i) {
            if (s = c || d ? {} : initCloneObject(e), !u) return c ? 
            /**
     * Copies own and inherited symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
            function(e, t) {
              return copyObject(e, pn(e), t);
            }
            /**
     * Creates a function like `_.groupBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} [initializer] The accumulator object initializer.
     * @returns {Function} Returns the new aggregator function.
     */ (e, function(e, t) {
              return e && copyObject(t, keysIn(t), e);
            }(s, e)) : 
            /**
     * Copies own symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
            function(e, t) {
              return copyObject(e, dn(e), t);
            }(e, baseAssign(s, e));
          } else {
            if (!ot[f]) return i ? e : {};
            s = 
            /**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */
            function(e, t, n) {
              var r, a = e.constructor;
              switch (t) {
               case F:
                return cloneArrayBuffer(e);

               case _:
               case m:
                return new a(+e);

               case z:
                /**
     * Creates a clone of `dataView`.
     *
     * @private
     * @param {Object} dataView The data view to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned data view.
     */
                return function(e, t) {
                  var n = t ? cloneArrayBuffer(e.buffer) : e.buffer;
                  return new e.constructor(n, e.byteOffset, e.byteLength);
                }
                /**
     * Creates a clone of `regexp`.
     *
     * @private
     * @param {Object} regexp The regexp to clone.
     * @returns {Object} Returns the cloned regexp.
     */ (e, n);

               case B:
               case T:
               case E:
               case M:
               case W:
               case P:
               case D:
               case U:
               case q:
                return cloneTypedArray(e, n);

               case A:
                return new a;

               case C:
               case x:
                return new a(e);

               case R:
                return function(e) {
                  var t = new e.constructor(e.source, pe.exec(e));
                  return t.lastIndex = e.lastIndex, t;
                }
                /**
     * Creates a clone of the `symbol` object.
     *
     * @private
     * @param {Object} symbol The symbol object to clone.
     * @returns {Object} Returns the cloned symbol object.
     */ (e);

               case O:
                return new a;

               case Z:
                return r = e, Qt ? Le(Qt.call(r)) : {};
              }
            }
            /**
     * Inserts wrapper `details` in a comment at the top of the `source` body.
     *
     * @private
     * @param {string} source The source to modify.
     * @returns {Array} details The details to insert.
     * @returns {string} Returns the modified source.
     */ (e, f, u);
          }
        }
        // Check for circular references and return its corresponding clone.
                o || (o = new Stack);
        var p = o.get(e);
        if (p) return p;
        o.set(e, s), hr(e) ? e.forEach((function(n) {
          s.add(baseClone(n, t, r, n, e, o));
        })) : cr(e) && e.forEach((function(n, a) {
          s.set(a, baseClone(n, t, r, a, e, o));
        }));
        var g = h ? n : (l ? c ? getAllKeysIn : getAllKeys : c ? keysIn : keys)(e);
        return arrayEach(g || e, (function(n, a) {
          g && (n = e[a = n]), 
          // Recursively populate clone (susceptible to call stack limits).
          assignValue(s, a, baseClone(n, t, r, a, e, o));
        })), s;
      }
      /**
     * The base implementation of `_.conforms` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     */      
      /**
     * The base implementation of `_.conformsTo` which accepts `props` to check.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     */
      function baseConformsTo(e, t, r) {
        var a = r.length;
        if (null == e) return !a;
        for (e = Le(e); a--; ) {
          var i = r[a], o = t[i], s = e[i];
          if (s === n && !(i in e) || !o(s)) return !1;
        }
        return !0;
      }
      /**
     * The base implementation of `_.delay` and `_.defer` which accepts `args`
     * to provide to `func`.
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {Array} args The arguments to provide to `func`.
     * @returns {number|Object} Returns the timer id or timeout object.
     */      function baseDelay(e, t, a) {
        if ("function" != typeof e) throw new xe(r);
        return vn((function() {
          e.apply(n, a);
        }), t);
      }
      /**
     * The base implementation of methods like `_.difference` without support
     * for excluding multiple arrays or iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Array} values The values to exclude.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     */      function baseDifference(e, t, n, r) {
        var a = -1, i = arrayIncludes, o = !0, s = e.length, u = [], c = t.length;
        if (!s) return u;
        n && (t = arrayMap(t, baseUnary(n))), r ? (i = arrayIncludesWith, o = !1) : t.length >= 200 && (i = cacheHas, 
        o = !1, t = new SetCache(t));
        e: for (;++a < s; ) {
          var l = e[a], h = null == n ? l : n(l);
          if (l = r || 0 !== l ? l : 0, o && h == h) {
            for (var f = c; f--; ) if (t[f] === h) continue e;
            u.push(l);
          } else i(t, h, r) || u.push(l);
        }
        return u;
      }
      /**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */      lodash.templateSettings = {
        /**
       * Used to detect `data` property values to be HTML-escaped.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
        escape: $,
        /**
       * Used to detect code to be evaluated.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
        evaluate: J,
        /**
       * Used to detect `data` property values to inject.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
        interpolate: Q,
        /**
       * Used to reference the data object in the template text.
       *
       * @memberOf _.templateSettings
       * @type {string}
       */
        variable: "",
        /**
       * Used to import variables into the compiled template.
       *
       * @memberOf _.templateSettings
       * @type {Object}
       */
        imports: {
          /**
         * A reference to the `lodash` function.
         *
         * @memberOf _.templateSettings.imports
         * @type {Function}
         */
          _: lodash
        }
      }, 
      // Ensure wrappers are instances of `baseLodash`.
      lodash.prototype = baseLodash.prototype, lodash.prototype.constructor = lodash, 
      LodashWrapper.prototype = tn(baseLodash.prototype), LodashWrapper.prototype.constructor = LodashWrapper, 
      // Ensure `LazyWrapper` is an instance of `baseLodash`.
      LazyWrapper.prototype = tn(baseLodash.prototype), LazyWrapper.prototype.constructor = LazyWrapper, 
      // Add methods to `Hash`.
      Hash.prototype.clear = function() {
        this.__data__ = Nt ? Nt(null) : {}, this.size = 0;
      }
      /**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */ , Hash.prototype.delete = function(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t;
      }
      /**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */ , Hash.prototype.get = function(e) {
        var t = this.__data__;
        if (Nt) {
          var r = t[e];
          return r === a ? n : r;
        }
        return Te.call(t, e) ? t[e] : n;
      }
      /**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */ , Hash.prototype.has = function(e) {
        var t = this.__data__;
        return Nt ? t[e] !== n : Te.call(t, e);
      }
      /**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */ , Hash.prototype.set = function(e, t) {
        var r = this.__data__;
        return this.size += this.has(e) ? 0 : 1, r[e] = Nt && t === n ? a : t, this;
      }, 
      // Add methods to `ListCache`.
      ListCache.prototype.clear = function() {
        this.__data__ = [], this.size = 0;
      }
      /**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */ , ListCache.prototype.delete = function(e) {
        var t = this.__data__, n = assocIndexOf(t, e);
        return !(n < 0 || (n == t.length - 1 ? t.pop() : Ye.call(t, n, 1), --this.size, 
        0));
      }
      /**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */ , ListCache.prototype.get = function(e) {
        var t = this.__data__, r = assocIndexOf(t, e);
        return r < 0 ? n : t[r][1];
      }
      /**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */ , ListCache.prototype.has = function(e) {
        return assocIndexOf(this.__data__, e) > -1;
      }
      /**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */ , ListCache.prototype.set = function(e, t) {
        var n = this.__data__, r = assocIndexOf(n, e);
        return r < 0 ? (++this.size, n.push([ e, t ])) : n[r][1] = t, this;
      }, 
      // Add methods to `MapCache`.
      MapCache.prototype.clear = function() {
        this.size = 0, this.__data__ = {
          hash: new Hash,
          map: new (Pt || ListCache),
          string: new Hash
        };
      }
      /**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */ , MapCache.prototype.delete = function(e) {
        var t = getMapData(this, e).delete(e);
        return this.size -= t ? 1 : 0, t;
      }
      /**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */ , MapCache.prototype.get = function(e) {
        return getMapData(this, e).get(e);
      }
      /**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */ , MapCache.prototype.has = function(e) {
        return getMapData(this, e).has(e);
      }
      /**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */ , MapCache.prototype.set = function(e, t) {
        var n = getMapData(this, e), r = n.size;
        return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
      }, 
      // Add methods to `SetCache`.
      SetCache.prototype.add = SetCache.prototype.push = function(e) {
        return this.__data__.set(e, a), this;
      }
      /**
     * Checks if `value` is in the array cache.
     *
     * @private
     * @name has
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */ , SetCache.prototype.has = function(e) {
        return this.__data__.has(e);
      }, 
      // Add methods to `Stack`.
      Stack.prototype.clear = function() {
        this.__data__ = new ListCache, this.size = 0;
      }
      /**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */ , Stack.prototype.delete = function(e) {
        var t = this.__data__, n = t.delete(e);
        return this.size = t.size, n;
      }
      /**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */ , Stack.prototype.get = function(e) {
        return this.__data__.get(e);
      }
      /**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */ , Stack.prototype.has = function(e) {
        return this.__data__.has(e);
      }
      /**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */ , Stack.prototype.set = function(e, t) {
        var n = this.__data__;
        if (n instanceof ListCache) {
          var r = n.__data__;
          if (!Pt || r.length < 199) return r.push([ e, t ]), this.size = ++n.size, this;
          n = this.__data__ = new MapCache(r);
        }
        return n.set(e, t), this.size = n.size, this;
      };
      var nn = createBaseEach(baseForOwn), rn = createBaseEach(baseForOwnRight, !0);
      /**
     * The base implementation of `_.forEachRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */      
      /**
     * The base implementation of `_.every` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`
     */
      function baseEvery(e, t) {
        var n = !0;
        return nn(e, (function(e, r, a) {
          return n = !!t(e, r, a);
        })), n;
      }
      /**
     * The base implementation of methods like `_.max` and `_.min` which accepts a
     * `comparator` to determine the extremum value.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The iteratee invoked per iteration.
     * @param {Function} comparator The comparator used to compare values.
     * @returns {*} Returns the extremum value.
     */      function baseExtremum(e, t, r) {
        for (var a = -1, i = e.length; ++a < i; ) {
          var o = e[a], s = t(o);
          if (null != s && (u === n ? s == s && !isSymbol(s) : r(s, u))) var u = s, c = o;
        }
        return c;
      }
      /**
     * The base implementation of `_.fill` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     */      
      /**
     * The base implementation of `_.filter` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
      function baseFilter(e, t) {
        var n = [];
        return nn(e, (function(e, r, a) {
          t(e, r, a) && n.push(e);
        })), n;
      }
      /**
     * The base implementation of `_.flatten` with support for restricting flattening.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {number} depth The maximum recursion depth.
     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
     * @param {Array} [result=[]] The initial result value.
     * @returns {Array} Returns the new flattened array.
     */      function baseFlatten(e, t, n, r, a) {
        var i = -1, o = e.length;
        for (n || (n = isFlattenable), a || (a = []); ++i < o; ) {
          var s = e[i];
          t > 0 && n(s) ? t > 1 ? 
          // Recursively flatten arrays (susceptible to call stack limits).
          baseFlatten(s, t - 1, n, r, a) : arrayPush(a, s) : r || (a[a.length] = s);
        }
        return a;
      }
      /**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */      var an = createBaseFor(), on = createBaseFor(!0);
      /**
     * This function is like `baseFor` except that it iterates over properties
     * in the opposite order.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */      
      /**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
      function baseForOwn(e, t) {
        return e && an(e, t, keys);
      }
      /**
     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */      function baseForOwnRight(e, t) {
        return e && on(e, t, keys);
      }
      /**
     * The base implementation of `_.functions` which creates an array of
     * `object` function property names filtered from `props`.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} props The property names to filter.
     * @returns {Array} Returns the function names.
     */      function baseFunctions(e, t) {
        return arrayFilter(t, (function(t) {
          return isFunction(e[t]);
        }));
      }
      /**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */      function baseGet(e, t) {
        for (var r = 0, a = (t = castPath(t, e)).length; null != e && r < a; ) e = e[toKey(t[r++])];
        return r && r == a ? e : n;
      }
      /**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */      function baseGetAllKeys(e, t, n) {
        var r = t(e);
        return ir(e) ? r : arrayPush(r, n(e));
      }
      /**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */      function baseGetTag(e) {
        return null == e ? e === n ? "[object Undefined]" : "[object Null]" : st && st in Le(e) ? 
        /**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */
        function(e) {
          var t = Te.call(e, st), r = e[st];
          try {
            e[st] = n;
            var a = !0;
          } catch (e) {}
          var i = We.call(e);
          return a && (t ? e[st] = r : delete e[st]), i;
        }
        /**
     * Creates an array of the own enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */ (e) : 
        /**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */
        function(e) {
          return We.call(e);
        }
        /**
     * A specialized version of `baseRest` which transforms the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @param {Function} transform The rest array transform.
     * @returns {Function} Returns the new function.
     */ (e);
      }
      /**
     * The base implementation of `_.gt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     */      function baseGt(e, t) {
        return e > t;
      }
      /**
     * The base implementation of `_.has` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */      function baseHas(e, t) {
        return null != e && Te.call(e, t);
      }
      /**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */      function baseHasIn(e, t) {
        return null != e && t in Le(e);
      }
      /**
     * The base implementation of `_.inRange` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to check.
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     */      
      /**
     * The base implementation of methods like `_.intersection`, without support
     * for iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of shared values.
     */
      function baseIntersection(e, t, r) {
        for (var a = r ? arrayIncludesWith : arrayIncludes, i = e[0].length, s = e.length, u = s, c = o(s), l = 1 / 0, h = []; u--; ) {
          var f = e[u];
          u && t && (f = arrayMap(f, baseUnary(t))), l = zt(f.length, l), c[u] = !r && (t || i >= 120 && f.length >= 120) ? new SetCache(u && f) : n;
        }
        f = e[0];
        var d = -1, p = c[0];
        e: for (;++d < i && h.length < l; ) {
          var g = f[d], y = t ? t(g) : g;
          if (g = r || 0 !== g ? g : 0, !(p ? cacheHas(p, y) : a(h, y, r))) {
            for (u = s; --u; ) {
              var b = c[u];
              if (!(b ? cacheHas(b, y) : a(e[u], y, r))) continue e;
            }
            p && p.push(y), h.push(g);
          }
        }
        return h;
      }
      /**
     * The base implementation of `_.invert` and `_.invertBy` which inverts
     * `object` with values transformed by `iteratee` and set by `setter`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform values.
     * @param {Object} accumulator The initial inverted object.
     * @returns {Function} Returns `accumulator`.
     */      
      /**
     * The base implementation of `_.invoke` without support for individual
     * method arguments.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {Array} args The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     */
      function baseInvoke(e, t, r) {
        var a = null == (e = parent(e, t = castPath(t, e))) ? e : e[toKey(last(t))];
        return null == a ? n : apply(a, e, r);
      }
      /**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */      function baseIsArguments(e) {
        return isObjectLike(e) && baseGetTag(e) == b;
      }
      /**
     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     */      
      /**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Unordered comparison
     *  2 - Partial comparison
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */
      function baseIsEqual(e, t, r, a, i) {
        return e === t || (null == e || null == t || !isObjectLike(e) && !isObjectLike(t) ? e != e && t != t : 
        /**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
        function(e, t, r, a, i, o) {
          var s = ir(e), u = ir(t), c = s ? v : gn(e), l = u ? v : gn(t), h = (c = c == b ? k : c) == k, f = (l = l == b ? k : l) == k, d = c == l;
          if (d && sr(e)) {
            if (!sr(t)) return !1;
            s = !0, h = !1;
          }
          if (d && !h) return o || (o = new Stack), s || fr(e) ? equalArrays(e, t, r, a, i, o) : 
          /**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
          function(e, t, n, r, a, i, o) {
            switch (n) {
             case z:
              if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
              e = e.buffer, t = t.buffer;

             case F:
              return !(e.byteLength != t.byteLength || !i(new He(e), new He(t)));

             case _:
             case m:
             case C:
              // Coerce booleans to `1` or `0` and dates to milliseconds.
              // Invalid dates are coerced to `NaN`.
              return eq(+e, +t);

             case I:
              return e.name == t.name && e.message == t.message;

             case R:
             case x:
              // Coerce regexes to strings and treat strings, primitives and objects,
              // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
              // for more details.
              return e == t + "";

             case A:
              var s = mapToArray;

             case O:
              var u = 1 & r;
              if (s || (s = setToArray), e.size != t.size && !u) return !1;
              // Assume cyclic values are equal.
                            var c = o.get(e);
              if (c) return c == t;
              r |= 2, 
              // Recursively compare objects (susceptible to call stack limits).
              o.set(e, t);
              var l = equalArrays(s(e), s(t), r, a, i, o);
              return o.delete(e), l;

             case Z:
              if (Qt) return Qt.call(e) == Qt.call(t);
            }
            return !1;
          }
          /**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */ (e, t, c, r, a, i, o);
          if (!(1 & r)) {
            var p = h && Te.call(e, "__wrapped__"), g = f && Te.call(t, "__wrapped__");
            if (p || g) {
              var y = p ? e.value() : e, S = g ? t.value() : t;
              return o || (o = new Stack), i(y, S, r, a, o);
            }
          }
          return !!d && (o || (o = new Stack), function(e, t, r, a, i, o) {
            var s = 1 & r, u = getAllKeys(e), c = u.length, l = getAllKeys(t).length;
            if (c != l && !s) return !1;
            for (var h = c; h--; ) {
              var f = u[h];
              if (!(s ? f in t : Te.call(t, f))) return !1;
            }
            // Check that cyclic values are equal.
                        var d = o.get(e), p = o.get(t);
            if (d && p) return d == t && p == e;
            var g = !0;
            o.set(e, t), o.set(t, e);
            for (var y = s; ++h < c; ) {
              var b = e[f = u[h]], v = t[f];
              if (a) var _ = s ? a(v, b, f, t, e, o) : a(b, v, f, e, t, o);
              // Recursively compare objects (susceptible to call stack limits).
                            if (!(_ === n ? b === v || i(b, v, r, a, o) : _)) {
                g = !1;
                break;
              }
              y || (y = "constructor" == f);
            }
            if (g && !y) {
              var m = e.constructor, I = t.constructor;
              // Non `Object` object instances with different constructors are not equal.
                            m == I || !("constructor" in e) || !("constructor" in t) || "function" == typeof m && m instanceof m && "function" == typeof I && I instanceof I || (g = !1);
            }
            return o.delete(e), o.delete(t), g;
          }
          /**
     * A specialized version of `baseRest` which flattens the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */ (e, t, r, a, i, o));
        }
        /**
     * The base implementation of `_.isMap` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     */ (e, t, r, a, baseIsEqual, i));
      }
      /**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */
      function baseIsMatch(e, t, r, a) {
        var i = r.length, o = i, s = !a;
        if (null == e) return !o;
        for (e = Le(e); i--; ) {
          var u = r[i];
          if (s && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
        }
        for (;++i < o; ) {
          var c = (u = r[i])[0], l = e[c], h = u[1];
          if (s && u[2]) {
            if (l === n && !(c in e)) return !1;
          } else {
            var f = new Stack;
            if (a) var d = a(l, h, c, e, t, f);
            if (!(d === n ? baseIsEqual(h, l, 3, a, f) : d)) return !1;
          }
        }
        return !0;
      }
      /**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */      function baseIsNative(e) {
        return !(!isObject(e) || (t = e, Me && Me in t)) && (isFunction(e) ? Ue : be).test(toSource(e));
        /**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */
        var t;
        /**
     * Checks if `func` is capable of being masked.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
     */      }
      /**
     * The base implementation of `_.isRegExp` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     */      
      /**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */
      function baseIteratee(e) {
        // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
        // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
        return "function" == typeof e ? e : null == e ? identity : "object" == typeof e ? ir(e) ? baseMatchesProperty(e[0], e[1]) : baseMatches(e) : property(e);
      }
      /**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */      function baseKeys(e) {
        if (!isPrototype(e)) return jt(e);
        var t = [];
        for (var n in Le(e)) Te.call(e, n) && "constructor" != n && t.push(n);
        return t;
      }
      /**
     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */      function baseKeysIn(e) {
        if (!isObject(e)) 
        /**
     * This function is like
     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * except that it includes inherited enumerable properties.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
        return function(e) {
          var t = [];
          if (null != e) for (var n in Le(e)) t.push(n);
          return t;
        }(e);
        var t = isPrototype(e), n = [];
        for (var r in e) ("constructor" != r || !t && Te.call(e, r)) && n.push(r);
        return n;
      }
      /**
     * The base implementation of `_.lt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     */      function baseLt(e, t) {
        return e < t;
      }
      /**
     * The base implementation of `_.map` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */      function baseMap(e, t) {
        var n = -1, r = isArrayLike(e) ? o(e.length) : [];
        return nn(e, (function(e, a, i) {
          r[++n] = t(e, a, i);
        })), r;
      }
      /**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     */      function baseMatches(e) {
        var t = getMatchData(e);
        return 1 == t.length && t[0][2] ? matchesStrictComparable(t[0][0], t[0][1]) : function(n) {
          return n === e || baseIsMatch(n, e, t);
        };
      }
      /**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */      function baseMatchesProperty(e, t) {
        return isKey(e) && isStrictComparable(t) ? matchesStrictComparable(toKey(e), t) : function(r) {
          var a = get(r, e);
          return a === n && a === t ? hasIn(r, e) : baseIsEqual(t, a, 3);
        };
      }
      /**
     * The base implementation of `_.merge` without support for multiple sources.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} [customizer] The function to customize merged values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */      function baseMerge(e, t, r, a, i) {
        e !== t && an(t, (function(o, s) {
          if (i || (i = new Stack), isObject(o)) !
          /**
     * A specialized version of `baseMerge` for arrays and objects which performs
     * deep merges and tracks traversed objects enabling objects with circular
     * references to be merged.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {string} key The key of the value to merge.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} mergeFunc The function to merge values.
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
          function(e, t, r, a, i, o, s) {
            var u = safeGet(e, r), c = safeGet(t, r), l = s.get(c);
            if (l) assignMergeValue(e, r, l); else {
              var h = o ? o(u, c, r + "", e, t, s) : n, f = h === n;
              if (f) {
                var d = ir(c), p = !d && sr(c), g = !d && !p && fr(c);
                h = c, d || p || g ? ir(u) ? h = u : isArrayLikeObject(u) ? h = copyArray(u) : p ? (f = !1, 
                h = cloneBuffer(c, !0)) : g ? (f = !1, h = cloneTypedArray(c, !0)) : h = [] : isPlainObject(c) || ar(c) ? (h = u, 
                ar(u) ? h = toPlainObject(u) : isObject(u) && !isFunction(u) || (h = initCloneObject(c))) : f = !1;
              }
              f && (
              // Recursively merge objects and arrays (susceptible to call stack limits).
              s.set(c, h), i(h, c, a, o, s), s.delete(c)), assignMergeValue(e, r, h);
            }
          }
          /**
     * The base implementation of `_.nth` which doesn't coerce arguments.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {number} n The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     */ (e, t, s, r, baseMerge, a, i); else {
            var u = a ? a(safeGet(e, s), o, s + "", e, t, i) : n;
            u === n && (u = o), assignMergeValue(e, s, u);
          }
        }), keysIn);
      }
      function baseNth(e, t) {
        var r = e.length;
        if (r) return isIndex(t += t < 0 ? r : 0, r) ? e[t] : n;
      }
      /**
     * The base implementation of `_.orderBy` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {string[]} orders The sort orders of `iteratees`.
     * @returns {Array} Returns the new sorted array.
     */      function baseOrderBy(e, t, n) {
        t = t.length ? arrayMap(t, (function(e) {
          return ir(e) ? function(t) {
            return baseGet(t, 1 === e.length ? e[0] : e);
          } : e;
        })) : [ identity ];
        var r = -1;
        return t = arrayMap(t, baseUnary(getIteratee())), function(e, t) {
          var n = e.length;
          for (e.sort(t); n--; ) e[n] = e[n].value;
          return e;
        }(baseMap(e, (function(e, n, a) {
          return {
            criteria: arrayMap(t, (function(t) {
              return t(e);
            })),
            index: ++r,
            value: e
          };
        })), (function(e, t) {
          /**
     * Used by `_.orderBy` to compare multiple properties of a value to another
     * and stable sort them.
     *
     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
     * specify an order of "desc" for descending or "asc" for ascending sort order
     * of corresponding values.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {boolean[]|string[]} orders The order to sort by for each property.
     * @returns {number} Returns the sort order indicator for `object`.
     */
          return function(e, t, n) {
            for (var r = -1, a = e.criteria, i = t.criteria, o = a.length, s = n.length; ++r < o; ) {
              var u = compareAscending(a[r], i[r]);
              if (u) return r >= s ? u : u * ("desc" == n[r] ? -1 : 1);
            }
            // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
            // that causes it, under certain circumstances, to provide the same value for
            // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
            // for more details.
            
            // This also ensures a stable sort in V8 and other engines.
            // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
                        return e.index - t.index;
          }
          /**
     * Creates an array that is the composition of partially applied arguments,
     * placeholders, and provided arguments into a single array of arguments.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to prepend to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */ (e, t, n);
        }));
      }
      /**
     * The base implementation of `_.pick` without support for individual
     * property identifiers.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @returns {Object} Returns the new object.
     */      
      /**
     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @param {Function} predicate The function invoked per property.
     * @returns {Object} Returns the new object.
     */
      function basePickBy(e, t, n) {
        for (var r = -1, a = t.length, i = {}; ++r < a; ) {
          var o = t[r], s = baseGet(e, o);
          n(s, o) && baseSet(i, castPath(o, e), s);
        }
        return i;
      }
      /**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     */      
      /**
     * The base implementation of `_.pullAllBy` without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     */
      function basePullAll(e, t, n, r) {
        var a = r ? baseIndexOfWith : baseIndexOf, i = -1, o = t.length, s = e;
        for (e === t && (t = copyArray(t)), n && (s = arrayMap(e, baseUnary(n))); ++i < o; ) for (var u = 0, c = t[i], l = n ? n(c) : c; (u = a(s, l, u, r)) > -1; ) s !== e && Ye.call(s, u, 1), 
        Ye.call(e, u, 1);
        return e;
      }
      /**
     * The base implementation of `_.pullAt` without support for individual
     * indexes or capturing the removed elements.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {number[]} indexes The indexes of elements to remove.
     * @returns {Array} Returns `array`.
     */      function basePullAt(e, t) {
        for (var n = e ? t.length : 0, r = n - 1; n--; ) {
          var a = t[n];
          if (n == r || a !== i) {
            var i = a;
            isIndex(a) ? Ye.call(e, a, 1) : baseUnset(e, a);
          }
        }
        return e;
      }
      /**
     * The base implementation of `_.random` without support for returning
     * floating-point numbers.
     *
     * @private
     * @param {number} lower The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the random number.
     */      function baseRandom(e, t) {
        return e + bt(Et() * (t - e + 1));
      }
      /**
     * The base implementation of `_.range` and `_.rangeRight` which doesn't
     * coerce arguments.
     *
     * @private
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @param {number} step The value to increment or decrement by.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the range of numbers.
     */      
      /**
     * The base implementation of `_.repeat` which doesn't coerce arguments.
     *
     * @private
     * @param {string} string The string to repeat.
     * @param {number} n The number of times to repeat the string.
     * @returns {string} Returns the repeated string.
     */
      function baseRepeat(e, t) {
        var n = "";
        if (!e || t < 1 || t > d) return n;
        // Leverage the exponentiation by squaring algorithm for a faster repeat.
        // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
                do {
          t % 2 && (n += e), (t = bt(t / 2)) && (e += e);
        } while (t);
        return n;
      }
      /**
     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     */      function baseRest(e, t) {
        return _n(overRest(e, t, identity), e + "");
      }
      /**
     * The base implementation of `_.sample`.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     */      function baseSample(e) {
        return arraySample(values(e));
      }
      /**
     * The base implementation of `_.sampleSize` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */      function baseSampleSize(e, t) {
        var n = values(e);
        return shuffleSelf(n, baseClamp(t, 0, n.length));
      }
      /**
     * The base implementation of `_.set`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */      function baseSet(e, t, r, a) {
        if (!isObject(e)) return e;
        for (var i = -1, o = (t = castPath(t, e)).length, s = o - 1, u = e; null != u && ++i < o; ) {
          var c = toKey(t[i]), l = r;
          if ("__proto__" === c || "constructor" === c || "prototype" === c) return e;
          if (i != s) {
            var h = u[c];
            (l = a ? a(h, c, u) : n) === n && (l = isObject(h) ? h : isIndex(t[i + 1]) ? [] : {});
          }
          assignValue(u, c, l), u = u[c];
        }
        return e;
      }
      /**
     * The base implementation of `setData` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */      var sn = Ht ? function(e, t) {
        return Ht.set(e, t), e;
      } : identity, un = lt ? function(e, t) {
        return lt(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: constant(t),
          writable: !0
        });
      } : identity;
      /**
     * The base implementation of `setToString` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */      
      /**
     * The base implementation of `_.shuffle`.
     *
     * @private
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
      function baseShuffle(e) {
        return shuffleSelf(values(e));
      }
      /**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */      function baseSlice(e, t, n) {
        var r = -1, a = e.length;
        t < 0 && (t = -t > a ? 0 : a + t), (n = n > a ? a : n) < 0 && (n += a), a = t > n ? 0 : n - t >>> 0, 
        t >>>= 0;
        for (var i = o(a); ++r < a; ) i[r] = e[r + t];
        return i;
      }
      /**
     * The base implementation of `_.some` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */      function baseSome(e, t) {
        var n;
        return nn(e, (function(e, r, a) {
          return !(n = t(e, r, a));
        })), !!n;
      }
      /**
     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
     * performs a binary search of `array` to determine the index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */      function baseSortedIndex(e, t, n) {
        var r = 0, a = null == e ? r : e.length;
        if ("number" == typeof t && t == t && a <= 2147483647) {
          for (;r < a; ) {
            var i = r + a >>> 1, o = e[i];
            null !== o && !isSymbol(o) && (n ? o <= t : o < t) ? r = i + 1 : a = i;
          }
          return a;
        }
        return baseSortedIndexBy(e, t, identity, n);
      }
      /**
     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
     * which invokes `iteratee` for `value` and each element of `array` to compute
     * their sort ranking. The iteratee is invoked with one argument; (value).
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} iteratee The iteratee invoked per element.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */      function baseSortedIndexBy(e, t, r, a) {
        var i = 0, o = null == e ? 0 : e.length;
        if (0 === o) return 0;
        for (var s = (t = r(t)) != t, u = null === t, c = isSymbol(t), l = t === n; i < o; ) {
          var h = bt((i + o) / 2), f = r(e[h]), d = f !== n, p = null === f, g = f == f, y = isSymbol(f);
          if (s) var b = a || g; else b = l ? g && (a || d) : u ? g && d && (a || !p) : c ? g && d && !p && (a || !y) : !p && !y && (a ? f <= t : f < t);
          b ? i = h + 1 : o = h;
        }
        return zt(o, 4294967294);
      }
      /**
     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
     * support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */      function baseSortedUniq(e, t) {
        for (var n = -1, r = e.length, a = 0, i = []; ++n < r; ) {
          var o = e[n], s = t ? t(o) : o;
          if (!n || !eq(s, u)) {
            var u = s;
            i[a++] = 0 === o ? 0 : o;
          }
        }
        return i;
      }
      /**
     * The base implementation of `_.toNumber` which doesn't ensure correct
     * conversions of binary, hexadecimal, or octal string values.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     */      function baseToNumber(e) {
        return "number" == typeof e ? e : isSymbol(e) ? p : +e;
      }
      /**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */      function baseToString(e) {
        // Exit early for strings to avoid a performance hit in some environments.
        if ("string" == typeof e) return e;
        if (ir(e)) 
        // Recursively convert values (susceptible to call stack limits).
        return arrayMap(e, baseToString) + "";
        if (isSymbol(e)) return en ? en.call(e) : "";
        var t = e + "";
        return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
      }
      /**
     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */      function baseUniq(e, t, n) {
        var r = -1, a = arrayIncludes, i = e.length, o = !0, s = [], u = s;
        if (n) o = !1, a = arrayIncludesWith; else if (i >= 200) {
          var c = t ? null : hn(e);
          if (c) return setToArray(c);
          o = !1, a = cacheHas, u = new SetCache;
        } else u = t ? [] : s;
        e: for (;++r < i; ) {
          var l = e[r], h = t ? t(l) : l;
          if (l = n || 0 !== l ? l : 0, o && h == h) {
            for (var f = u.length; f--; ) if (u[f] === h) continue e;
            t && u.push(h), s.push(l);
          } else a(u, h, n) || (u !== s && u.push(h), s.push(l));
        }
        return s;
      }
      /**
     * The base implementation of `_.unset`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The property path to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     */      function baseUnset(e, t) {
        return null == (e = parent(e, t = castPath(t, e))) || delete e[toKey(last(t))];
      }
      /**
     * The base implementation of `_.update`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to update.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */      function baseUpdate(e, t, n, r) {
        return baseSet(e, t, n(baseGet(e, t)), r);
      }
      /**
     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
     * without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the slice of `array`.
     */      function baseWhile(e, t, n, r) {
        for (var a = e.length, i = r ? a : -1; (r ? i-- : ++i < a) && t(e[i], i, e); ) ;
        return n ? baseSlice(e, r ? 0 : i, r ? i + 1 : a) : baseSlice(e, r ? i + 1 : 0, r ? a : i);
      }
      /**
     * The base implementation of `wrapperValue` which returns the result of
     * performing a sequence of actions on the unwrapped `value`, where each
     * successive action is supplied the return value of the previous.
     *
     * @private
     * @param {*} value The unwrapped value.
     * @param {Array} actions Actions to perform to resolve the unwrapped value.
     * @returns {*} Returns the resolved value.
     */      function baseWrapperValue(e, t) {
        var n = e;
        return n instanceof LazyWrapper && (n = n.value()), arrayReduce(t, (function(e, t) {
          return t.func.apply(t.thisArg, arrayPush([ e ], t.args));
        }), n);
      }
      /**
     * The base implementation of methods like `_.xor`, without support for
     * iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of values.
     */      function baseXor(e, t, n) {
        var r = e.length;
        if (r < 2) return r ? baseUniq(e[0]) : [];
        for (var a = -1, i = o(r); ++a < r; ) for (var s = e[a], u = -1; ++u < r; ) u != a && (i[a] = baseDifference(i[a] || s, e[u], t, n));
        return baseUniq(baseFlatten(i, 1), t, n);
      }
      /**
     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
     *
     * @private
     * @param {Array} props The property identifiers.
     * @param {Array} values The property values.
     * @param {Function} assignFunc The function to assign values.
     * @returns {Object} Returns the new object.
     */      function baseZipObject(e, t, r) {
        for (var a = -1, i = e.length, o = t.length, s = {}; ++a < i; ) {
          var u = a < o ? t[a] : n;
          r(s, e[a], u);
        }
        return s;
      }
      /**
     * Casts `value` to an empty array if it's not an array like object.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Array|Object} Returns the cast array-like object.
     */      function castArrayLikeObject(e) {
        return isArrayLikeObject(e) ? e : [];
      }
      /**
     * Casts `value` to `identity` if it's not a function.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Function} Returns cast function.
     */      function castFunction(e) {
        return "function" == typeof e ? e : identity;
      }
      /**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {Object} [object] The object to query keys on.
     * @returns {Array} Returns the cast property path array.
     */      function castPath(e, t) {
        return ir(e) ? e : isKey(e, t) ? [ e ] : mn(toString(e));
      }
      /**
     * A `baseRest` alias which can be replaced with `identity` by module
     * replacement plugins.
     *
     * @private
     * @type {Function}
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */      var cn = baseRest;
      /**
     * Casts `array` to a slice if it's needed.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {number} start The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the cast slice.
     */      function castSlice(e, t, r) {
        var a = e.length;
        return r = r === n ? a : r, !t && r >= a ? e : baseSlice(e, t, r);
      }
      /**
     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
     *
     * @private
     * @param {number|Object} id The timer id or timeout object of the timer to clear.
     */      var ln = ht || function(e) {
        return ft.clearTimeout(e);
      };
      /**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */      function cloneBuffer(e, t) {
        if (t) return e.slice();
        var n = e.length, r = Ge ? Ge(n) : new e.constructor(n);
        return e.copy(r), r;
      }
      /**
     * Creates a clone of `arrayBuffer`.
     *
     * @private
     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */      function cloneArrayBuffer(e) {
        var t = new e.constructor(e.byteLength);
        return new He(t).set(new He(e)), t;
      }
      /**
     * Creates a clone of `typedArray`.
     *
     * @private
     * @param {Object} typedArray The typed array to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned typed array.
     */
      function cloneTypedArray(e, t) {
        var n = t ? cloneArrayBuffer(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.length);
      }
      /**
     * Compares values to sort them in ascending order.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {number} Returns the sort order indicator for `value`.
     */      function compareAscending(e, t) {
        if (e !== t) {
          var r = e !== n, a = null === e, i = e == e, o = isSymbol(e), s = t !== n, u = null === t, c = t == t, l = isSymbol(t);
          if (!u && !l && !o && e > t || o && s && c && !u && !l || a && s && c || !r && c || !i) return 1;
          if (!a && !o && !l && e < t || l && r && i && !a && !o || u && r && i || !s && i || !c) return -1;
        }
        return 0;
      }
      function composeArgs(e, t, n, r) {
        for (var a = -1, i = e.length, s = n.length, u = -1, c = t.length, l = Ft(i - s, 0), h = o(c + l), f = !r; ++u < c; ) h[u] = t[u];
        for (;++a < s; ) (f || a < i) && (h[n[a]] = e[a]);
        for (;l--; ) h[u++] = e[a++];
        return h;
      }
      /**
     * This function is like `composeArgs` except that the arguments composition
     * is tailored for `_.partialRight`.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to append to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */      function composeArgsRight(e, t, n, r) {
        for (var a = -1, i = e.length, s = -1, u = n.length, c = -1, l = t.length, h = Ft(i - u, 0), f = o(h + l), d = !r; ++a < h; ) f[a] = e[a];
        for (var p = a; ++c < l; ) f[p + c] = t[c];
        for (;++s < u; ) (d || a < i) && (f[p + n[s]] = e[a++]);
        return f;
      }
      /**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */      function copyArray(e, t) {
        var n = -1, r = e.length;
        for (t || (t = o(r)); ++n < r; ) t[n] = e[n];
        return t;
      }
      /**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property identifiers to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @param {Function} [customizer] The function to customize copied values.
     * @returns {Object} Returns `object`.
     */      function copyObject(e, t, r, a) {
        var i = !r;
        r || (r = {});
        for (var o = -1, s = t.length; ++o < s; ) {
          var u = t[o], c = a ? a(r[u], e[u], u, r, e) : n;
          c === n && (c = e[u]), i ? baseAssignValue(r, u, c) : assignValue(r, u, c);
        }
        return r;
      }
      function createAggregator(e, t) {
        return function(n, r) {
          var a = ir(n) ? arrayAggregator : baseAggregator, i = t ? t() : {};
          return a(n, e, getIteratee(r, 2), i);
        };
      }
      /**
     * Creates a function like `_.assign`.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @returns {Function} Returns the new assigner function.
     */      function createAssigner(e) {
        return baseRest((function(t, r) {
          var a = -1, i = r.length, o = i > 1 ? r[i - 1] : n, s = i > 2 ? r[2] : n;
          for (o = e.length > 3 && "function" == typeof o ? (i--, o) : n, s && isIterateeCall(r[0], r[1], s) && (o = i < 3 ? n : o, 
          i = 1), t = Le(t); ++a < i; ) {
            var u = r[a];
            u && e(t, u, a, o);
          }
          return t;
        }));
      }
      /**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */      function createBaseEach(e, t) {
        return function(n, r) {
          if (null == n) return n;
          if (!isArrayLike(n)) return e(n, r);
          for (var a = n.length, i = t ? a : -1, o = Le(n); (t ? i-- : ++i < a) && !1 !== r(o[i], i, o); ) ;
          return n;
        };
      }
      /**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */      function createBaseFor(e) {
        return function(t, n, r) {
          for (var a = -1, i = Le(t), o = r(t), s = o.length; s--; ) {
            var u = o[e ? s : ++a];
            if (!1 === n(i[u], u, i)) break;
          }
          return t;
        };
      }
      /**
     * Creates a function that wraps `func` to invoke it with the optional `this`
     * binding of `thisArg`.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @returns {Function} Returns the new wrapped function.
     */      
      /**
     * Creates a function like `_.lowerFirst`.
     *
     * @private
     * @param {string} methodName The name of the `String` case method to use.
     * @returns {Function} Returns the new case function.
     */
      function createCaseFirst(e) {
        return function(t) {
          var r = hasUnicode(t = toString(t)) ? stringToArray(t) : n, a = r ? r[0] : t.charAt(0), i = r ? castSlice(r, 1).join("") : t.slice(1);
          return a[e]() + i;
        };
      }
      /**
     * Creates a function like `_.camelCase`.
     *
     * @private
     * @param {Function} callback The function to combine each word.
     * @returns {Function} Returns the new compounder function.
     */      function createCompounder(e) {
        return function(t) {
          return arrayReduce(words(deburr(t).replace($e, "")), e, "");
        };
      }
      /**
     * Creates a function that produces an instance of `Ctor` regardless of
     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
     *
     * @private
     * @param {Function} Ctor The constructor to wrap.
     * @returns {Function} Returns the new wrapped function.
     */      function createCtor(e) {
        return function() {
          // Use a `switch` statement to work with class constructors. See
          // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
          // for more details.
          var t = arguments;
          switch (t.length) {
           case 0:
            return new e;

           case 1:
            return new e(t[0]);

           case 2:
            return new e(t[0], t[1]);

           case 3:
            return new e(t[0], t[1], t[2]);

           case 4:
            return new e(t[0], t[1], t[2], t[3]);

           case 5:
            return new e(t[0], t[1], t[2], t[3], t[4]);

           case 6:
            return new e(t[0], t[1], t[2], t[3], t[4], t[5]);

           case 7:
            return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
          }
          var n = tn(e.prototype), r = e.apply(n, t);
          // Mimic the constructor's `return` behavior.
          // See https://es5.github.io/#x13.2.2 for more details.
                    return isObject(r) ? r : n;
        };
      }
      /**
     * Creates a function that wraps `func` to enable currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {number} arity The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */      
      /**
     * Creates a `_.find` or `_.findLast` function.
     *
     * @private
     * @param {Function} findIndexFunc The function to find the collection index.
     * @returns {Function} Returns the new find function.
     */
      function createFind(e) {
        return function(t, r, a) {
          var i = Le(t);
          if (!isArrayLike(t)) {
            var o = getIteratee(r, 3);
            t = keys(t), r = function(e) {
              return o(i[e], e, i);
            };
          }
          var s = e(t, r, a);
          return s > -1 ? i[o ? t[s] : s] : n;
        };
      }
      /**
     * Creates a `_.flow` or `_.flowRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new flow function.
     */      function createFlow(e) {
        return flatRest((function(t) {
          var a = t.length, i = a, o = LodashWrapper.prototype.thru;
          for (e && t.reverse(); i--; ) {
            var s = t[i];
            if ("function" != typeof s) throw new xe(r);
            if (o && !u && "wrapper" == getFuncName(s)) var u = new LodashWrapper([], !0);
          }
          for (i = u ? i : a; ++i < a; ) {
            var c = getFuncName(s = t[i]), l = "wrapper" == c ? fn(s) : n;
            u = l && isLaziable(l[0]) && 424 == l[1] && !l[4].length && 1 == l[9] ? u[getFuncName(l[0])].apply(u, l[3]) : 1 == s.length && isLaziable(s) ? u[c]() : u.thru(s);
          }
          return function() {
            var e = arguments, n = e[0];
            if (u && 1 == e.length && ir(n)) return u.plant(n).value();
            for (var r = 0, i = a ? t[r].apply(this, e) : n; ++r < a; ) i = t[r].call(this, i);
            return i;
          };
        }));
      }
      /**
     * Creates a function that wraps `func` to invoke it with optional `this`
     * binding of `thisArg`, partial application, and currying.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [partialsRight] The arguments to append to those provided
     *  to the new function.
     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */      function createHybrid(e, t, r, a, i, s, u, c, h, f) {
        var d = t & l, p = 1 & t, g = 2 & t, y = 24 & t, b = 512 & t, v = g ? n : createCtor(e);
        return function wrapper() {
          for (var n = arguments.length, l = o(n), _ = n; _--; ) l[_] = arguments[_];
          if (y) var m = getHolder(wrapper), I = countHolders(l, m);
          if (a && (l = composeArgs(l, a, i, y)), s && (l = composeArgsRight(l, s, u, y)), 
          n -= I, y && n < f) {
            var S = replaceHolders(l, m);
            return createRecurry(e, t, createHybrid, wrapper.placeholder, r, l, S, c, h, f - n);
          }
          var w = p ? r : this, A = g ? w[e] : e;
          return n = l.length, c ? l = reorder(l, c) : b && n > 1 && l.reverse(), d && h < n && (l.length = h), 
          this && this !== ft && this instanceof wrapper && (A = v || createCtor(A)), A.apply(w, l);
        };
      }
      /**
     * Creates a function like `_.invertBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} toIteratee The function to resolve iteratees.
     * @returns {Function} Returns the new inverter function.
     */      function createInverter(e, t) {
        return function(n, r) {
          return function(e, t, n, r) {
            return baseForOwn(e, (function(e, a, i) {
              t(r, n(e), a, i);
            })), r;
          }(n, e, t(r), {});
        };
      }
      /**
     * Creates a function that performs a mathematical operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @param {number} [defaultValue] The value used for `undefined` arguments.
     * @returns {Function} Returns the new mathematical operation function.
     */      function createMathOperation(e, t) {
        return function(r, a) {
          var i;
          if (r === n && a === n) return t;
          if (r !== n && (i = r), a !== n) {
            if (i === n) return a;
            "string" == typeof r || "string" == typeof a ? (r = baseToString(r), a = baseToString(a)) : (r = baseToNumber(r), 
            a = baseToNumber(a)), i = e(r, a);
          }
          return i;
        };
      }
      /**
     * Creates a function like `_.over`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over iteratees.
     * @returns {Function} Returns the new over function.
     */      function createOver(e) {
        return flatRest((function(t) {
          return t = arrayMap(t, baseUnary(getIteratee())), baseRest((function(n) {
            var r = this;
            return e(t, (function(e) {
              return apply(e, r, n);
            }));
          }));
        }));
      }
      /**
     * Creates the padding for `string` based on `length`. The `chars` string
     * is truncated if the number of characters exceeds `length`.
     *
     * @private
     * @param {number} length The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padding for `string`.
     */      function createPadding(e, t) {
        var r = (t = t === n ? " " : baseToString(t)).length;
        if (r < 2) return r ? baseRepeat(t, e) : t;
        var a = baseRepeat(t, yt(e / stringSize(t)));
        return hasUnicode(t) ? castSlice(stringToArray(a), 0, e).join("") : a.slice(0, e);
      }
      /**
     * Creates a function that wraps `func` to invoke it with the `this` binding
     * of `thisArg` and `partials` prepended to the arguments it receives.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} partials The arguments to prepend to those provided to
     *  the new function.
     * @returns {Function} Returns the new wrapped function.
     */      
      /**
     * Creates a `_.range` or `_.rangeRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new range function.
     */
      function createRange(e) {
        return function(t, r, a) {
          return a && "number" != typeof a && isIterateeCall(t, r, a) && (r = a = n), 
          // Ensure the sign of `-0` is preserved.
          t = toFinite(t), r === n ? (r = t, t = 0) : r = toFinite(r), function(e, t, n, r) {
            for (var a = -1, i = Ft(yt((t - e) / (n || 1)), 0), s = o(i); i--; ) s[r ? i : ++a] = e, 
            e += n;
            return s;
          }(t, r, a = a === n ? t < r ? 1 : -1 : toFinite(a), e);
        };
      }
      /**
     * Creates a function that performs a relational operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @returns {Function} Returns the new relational operation function.
     */      function createRelationalOperation(e) {
        return function(t, n) {
          return "string" == typeof t && "string" == typeof n || (t = toNumber(t), n = toNumber(n)), 
          e(t, n);
        };
      }
      /**
     * Creates a function that wraps `func` to continue currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {Function} wrapFunc The function to create the `func` wrapper.
     * @param {*} placeholder The placeholder value.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */      function createRecurry(e, t, r, a, i, o, s, l, h, f) {
        var d = 8 & t;
        t |= d ? u : c, 4 & (t &= ~(d ? c : u)) || (t &= -4);
        var p = [ e, t, i, d ? o : n, d ? s : n, d ? n : o, d ? n : s, l, h, f ], g = r.apply(n, p);
        return isLaziable(e) && bn(g, p), g.placeholder = a, setWrapToString(g, e, t);
      }
      /**
     * Creates a function like `_.round`.
     *
     * @private
     * @param {string} methodName The name of the `Math` method to use when rounding.
     * @returns {Function} Returns the new round function.
     */      function createRound(e) {
        var t = ke[e];
        return function(e, n) {
          if (e = toNumber(e), (n = null == n ? 0 : zt(toInteger(n), 292)) && xt(e)) {
            // Shift with exponential notation to avoid floating-point issues.
            // See [MDN](https://mdn.io/round#Examples) for more details.
            var r = (toString(e) + "e").split("e");
            return +((r = (toString(t(r[0] + "e" + (+r[1] + n))) + "e").split("e"))[0] + "e" + (+r[1] - n));
          }
          return t(e);
        };
      }
      /**
     * Creates a set object of `values`.
     *
     * @private
     * @param {Array} values The values to add to the set.
     * @returns {Object} Returns the new set.
     */      var hn = Ut && 1 / setToArray(new Ut([ , -0 ]))[1] == f ? function(e) {
        return new Ut(e);
      } : noop;
      /**
     * Creates a `_.toPairs` or `_.toPairsIn` function.
     *
     * @private
     * @param {Function} keysFunc The function to get the keys of a given object.
     * @returns {Function} Returns the new pairs function.
     */      function createToPairs(e) {
        return function(t) {
          var n = gn(t);
          return n == A ? mapToArray(t) : n == O ? setToPairs(t) : function(e, t) {
            return arrayMap(t, (function(t) {
              return [ t, e[t] ];
            }));
          }(t, e(t));
        };
      }
      /**
     * Creates a function that either curries or invokes `func` with optional
     * `this` binding and partially applied arguments.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags.
     *    1 - `_.bind`
     *    2 - `_.bindKey`
     *    4 - `_.curry` or `_.curryRight` of a bound function
     *    8 - `_.curry`
     *   16 - `_.curryRight`
     *   32 - `_.partial`
     *   64 - `_.partialRight`
     *  128 - `_.rearg`
     *  256 - `_.ary`
     *  512 - `_.flip`
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to be partially applied.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */      function createWrap(e, t, a, f, d, p, g, y) {
        var b = 2 & t;
        if (!b && "function" != typeof e) throw new xe(r);
        var v = f ? f.length : 0;
        if (v || (t &= -97, f = d = n), g = g === n ? g : Ft(toInteger(g), 0), y = y === n ? y : toInteger(y), 
        v -= d ? d.length : 0, t & c) {
          var _ = f, m = d;
          f = d = n;
        }
        var I = b ? n : fn(e), S = [ e, t, a, f, d, _, m, p, g, y ];
        if (I && 
        /**
     * Merges the function metadata of `source` into `data`.
     *
     * Merging metadata reduces the number of wrappers used to invoke a function.
     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
     * may be applied regardless of execution order. Methods like `_.ary` and
     * `_.rearg` modify function arguments, making the order in which they are
     * executed important, preventing the merging of metadata. However, we make
     * an exception for a safe combined case where curried functions have `_.ary`
     * and or `_.rearg` applied.
     *
     * @private
     * @param {Array} data The destination metadata.
     * @param {Array} source The source metadata.
     * @returns {Array} Returns `data`.
     */
        function(e, t) {
          var n = e[1], r = t[1], a = n | r, o = a < 131, s = r == l && 8 == n || r == l && n == h && e[7].length <= t[8] || 384 == r && t[7].length <= t[8] && 8 == n;
          // Exit early if metadata can't be merged.
          if (!o && !s) return e;
          // Use source `thisArg` if available.
                    1 & r && (e[2] = t[2], 
          // Set when currying a bound function.
          a |= 1 & n ? 0 : 4);
          // Compose partial arguments.
                    var u = t[3];
          if (u) {
            var c = e[3];
            e[3] = c ? composeArgs(c, u, t[4]) : u, e[4] = c ? replaceHolders(e[3], i) : t[4];
          }
          // Compose partial right arguments.
                    (u = t[5]) && (c = e[5], e[5] = c ? composeArgsRight(c, u, t[6]) : u, 
          e[6] = c ? replaceHolders(e[5], i) : t[6]), (
          // Use source `argPos` if available.
          u = t[7]) && (e[7] = u), 
          // Use source `ary` if it's smaller.
          r & l && (e[8] = null == e[8] ? t[8] : zt(e[8], t[8])), 
          // Use source `arity` if one is not provided.
          null == e[9] && (e[9] = t[9]), 
          // Use source `func` and merge bitmasks.
          e[0] = t[0], e[1] = a;
        }(S, I), e = S[0], t = S[1], a = S[2], f = S[3], d = S[4], !(y = S[9] = S[9] === n ? b ? 0 : e.length : Ft(S[9] - v, 0)) && 24 & t && (t &= -25), 
        t && 1 != t) w = 8 == t || t == s ? function(e, t, r) {
          var a = createCtor(e);
          return function wrapper() {
            for (var i = arguments.length, s = o(i), u = i, c = getHolder(wrapper); u--; ) s[u] = arguments[u];
            var l = i < 3 && s[0] !== c && s[i - 1] !== c ? [] : replaceHolders(s, c);
            return (i -= l.length) < r ? createRecurry(e, t, createHybrid, wrapper.placeholder, n, s, l, n, n, r - i) : apply(this && this !== ft && this instanceof wrapper ? a : e, this, s);
          };
        }(e, t, y) : t != u && 33 != t || d.length ? createHybrid.apply(n, S) : function(e, t, n, r) {
          var a = 1 & t, i = createCtor(e);
          return function wrapper() {
            for (var t = -1, s = arguments.length, u = -1, c = r.length, l = o(c + s), h = this && this !== ft && this instanceof wrapper ? i : e; ++u < c; ) l[u] = r[u];
            for (;s--; ) l[u++] = arguments[++t];
            return apply(h, a ? n : this, l);
          };
        }(e, t, a, f); else var w = function(e, t, n) {
          var r = 1 & t, a = createCtor(e);
          return function wrapper() {
            return (this && this !== ft && this instanceof wrapper ? a : e).apply(r ? n : this, arguments);
          };
        }(e, t, a);
        return setWrapToString((I ? sn : bn)(w, S), e, t);
      }
      /**
     * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
     * of source objects to the destination object for all destination properties
     * that resolve to `undefined`.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to assign.
     * @param {Object} object The parent object of `objValue`.
     * @returns {*} Returns the value to assign.
     */      function customDefaultsAssignIn(e, t, r, a) {
        return e === n || eq(e, Fe[r]) && !Te.call(a, r) ? t : e;
      }
      /**
     * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
     * objects into destination objects that are passed thru.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to merge.
     * @param {Object} object The parent object of `objValue`.
     * @param {Object} source The parent object of `srcValue`.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     * @returns {*} Returns the value to assign.
     */      function customDefaultsMerge(e, t, r, a, i, o) {
        return isObject(e) && isObject(t) && (
        // Recursively merge objects and arrays (susceptible to call stack limits).
        o.set(t, e), baseMerge(e, t, n, customDefaultsMerge, o), o.delete(t)), e;
      }
      /**
     * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
     * objects.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {string} key The key of the property to inspect.
     * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
     */      function customOmitClone(e) {
        return isPlainObject(e) ? n : e;
      }
      /**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */      function equalArrays(e, t, r, a, i, o) {
        var s = 1 & r, u = e.length, c = t.length;
        if (u != c && !(s && c > u)) return !1;
        // Check that cyclic values are equal.
                var l = o.get(e), h = o.get(t);
        if (l && h) return l == t && h == e;
        var f = -1, d = !0, p = 2 & r ? new SetCache : n;
        // Ignore non-index properties.
        for (o.set(e, t), o.set(t, e); ++f < u; ) {
          var g = e[f], y = t[f];
          if (a) var b = s ? a(y, g, f, t, e, o) : a(g, y, f, e, t, o);
          if (b !== n) {
            if (b) continue;
            d = !1;
            break;
          }
          // Recursively compare arrays (susceptible to call stack limits).
                    if (p) {
            if (!arraySome(t, (function(e, t) {
              if (!cacheHas(p, t) && (g === e || i(g, e, r, a, o))) return p.push(t);
            }))) {
              d = !1;
              break;
            }
          } else if (g !== y && !i(g, y, r, a, o)) {
            d = !1;
            break;
          }
        }
        return o.delete(e), o.delete(t), d;
      }
      function flatRest(e) {
        return _n(overRest(e, n, flatten), e + "");
      }
      /**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */      function getAllKeys(e) {
        return baseGetAllKeys(e, keys, dn);
      }
      /**
     * Creates an array of own and inherited enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */      function getAllKeysIn(e) {
        return baseGetAllKeys(e, keysIn, pn);
      }
      /**
     * Gets metadata for `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {*} Returns the metadata for `func`.
     */      var fn = Ht ? function(e) {
        return Ht.get(e);
      } : noop;
      /**
     * Gets the name of `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {string} Returns the function name.
     */      function getFuncName(e) {
        for (var t = e.name + "", n = Gt[t], r = Te.call(Gt, t) ? n.length : 0; r--; ) {
          var a = n[r], i = a.func;
          if (null == i || i == e) return a.name;
        }
        return t;
      }
      /**
     * Gets the argument placeholder value for `func`.
     *
     * @private
     * @param {Function} func The function to inspect.
     * @returns {*} Returns the placeholder value.
     */      function getHolder(e) {
        return (Te.call(lodash, "placeholder") ? lodash : e).placeholder;
      }
      /**
     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
     * this function returns the custom method, otherwise it returns `baseIteratee`.
     * If arguments are provided, the chosen function is invoked with them and
     * its result is returned.
     *
     * @private
     * @param {*} [value] The value to convert to an iteratee.
     * @param {number} [arity] The arity of the created iteratee.
     * @returns {Function} Returns the chosen function or its result.
     */      function getIteratee() {
        var e = lodash.iteratee || iteratee;
        return e = e === iteratee ? baseIteratee : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      /**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */      function getMapData(e, t) {
        var n, r, a = e.__data__;
        return ("string" == (r = typeof (n = t)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== n : null === n) ? a["string" == typeof t ? "string" : "hash"] : a.map;
      }
      /**
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */      function getMatchData(e) {
        for (var t = keys(e), n = t.length; n--; ) {
          var r = t[n], a = e[r];
          t[n] = [ r, a, isStrictComparable(a) ];
        }
        return t;
      }
      /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */      function getNative(e, t) {
        var r = function(e, t) {
          return null == e ? n : e[t];
        }(e, t);
        return baseIsNative(r) ? r : n;
      }
      var dn = At ? function(e) {
        return null == e ? [] : (e = Le(e), arrayFilter(At(e), (function(t) {
          return Xe.call(e, t);
        })));
      } : stubArray, pn = At ? function(e) {
        for (var t = []; e; ) arrayPush(t, dn(e)), e = Ke(e);
        return t;
      } : stubArray, gn = baseGetTag;
      /**
     * Creates an array of the own and inherited enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */      
      /**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */
      function hasPath(e, t, n) {
        for (var r = -1, a = (t = castPath(t, e)).length, i = !1; ++r < a; ) {
          var o = toKey(t[r]);
          if (!(i = null != e && n(e, o))) break;
          e = e[o];
        }
        return i || ++r != a ? i : !!(a = null == e ? 0 : e.length) && isLength(a) && isIndex(o, a) && (ir(e) || ar(e));
      }
      function initCloneObject(e) {
        return "function" != typeof e.constructor || isPrototype(e) ? {} : tn(Ke(e));
      }
      /**
     * Checks if `value` is a flattenable `arguments` object or array.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
     */
      function isFlattenable(e) {
        return ir(e) || ar(e) || !!(Qe && e && e[Qe]);
      }
      /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */      function isIndex(e, t) {
        var n = typeof e;
        return !!(t = null == t ? d : t) && ("number" == n || "symbol" != n && _e.test(e)) && e > -1 && e % 1 == 0 && e < t;
      }
      /**
     * Checks if the given arguments are from an iteratee call.
     *
     * @private
     * @param {*} value The potential iteratee value argument.
     * @param {*} index The potential iteratee index or key argument.
     * @param {*} object The potential iteratee object argument.
     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
     *  else `false`.
     */      function isIterateeCall(e, t, n) {
        if (!isObject(n)) return !1;
        var r = typeof t;
        return !!("number" == r ? isArrayLike(n) && isIndex(t, n.length) : "string" == r && t in n) && eq(n[t], e);
      }
      /**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */      function isKey(e, t) {
        if (ir(e)) return !1;
        var n = typeof e;
        return !("number" != n && "symbol" != n && "boolean" != n && null != e && !isSymbol(e)) || te.test(e) || !ee.test(e) || null != t && e in Le(t);
      }
      /**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */      
      /**
     * Checks if `func` has a lazy counterpart.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
     *  else `false`.
     */
      function isLaziable(e) {
        var t = getFuncName(e), n = lodash[t];
        if ("function" != typeof n || !(t in LazyWrapper.prototype)) return !1;
        if (e === n) return !0;
        var r = fn(n);
        return !!r && e === r[0];
      }
      // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
      (Wt && gn(new Wt(new ArrayBuffer(1))) != z || Pt && gn(new Pt) != A || Dt && gn(Dt.resolve()) != L || Ut && gn(new Ut) != O || qt && gn(new qt) != j) && (gn = function(e) {
        var t = baseGetTag(e), r = t == k ? e.constructor : n, a = r ? toSource(r) : "";
        if (a) switch (a) {
         case Kt:
          return z;

         case Vt:
          return A;

         case Xt:
          return L;

         case Yt:
          return O;

         case $t:
          return j;
        }
        return t;
      })
      /**
     * Gets the view, applying any `transforms` to the `start` and `end` positions.
     *
     * @private
     * @param {number} start The start of the view.
     * @param {number} end The end of the view.
     * @param {Array} transforms The transformations to apply to the view.
     * @returns {Object} Returns an object containing the `start` and `end`
     *  positions of the view.
     */;
      var yn = ze ? isFunction : stubFalse;
      /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */      function isPrototype(e) {
        var t = e && e.constructor;
        return e === ("function" == typeof t && t.prototype || Fe);
      }
      /**
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strict
     *  equality comparisons, else `false`.
     */      function isStrictComparable(e) {
        return e == e && !isObject(e);
      }
      /**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */      function matchesStrictComparable(e, t) {
        return function(r) {
          return null != r && r[e] === t && (t !== n || e in Le(r));
        };
      }
      /**
     * A specialized version of `_.memoize` which clears the memoized function's
     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
     *
     * @private
     * @param {Function} func The function to have its output memoized.
     * @returns {Function} Returns the new memoized function.
     */      function overRest(e, t, r) {
        return t = Ft(t === n ? e.length - 1 : t, 0), function() {
          for (var n = arguments, a = -1, i = Ft(n.length - t, 0), s = o(i); ++a < i; ) s[a] = n[t + a];
          a = -1;
          for (var u = o(t + 1); ++a < t; ) u[a] = n[a];
          return u[t] = r(s), apply(e, this, u);
        };
      }
      /**
     * Gets the parent value at `path` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} path The path to get the parent value of.
     * @returns {*} Returns the parent value.
     */      function parent(e, t) {
        return t.length < 2 ? e : baseGet(e, baseSlice(t, 0, -1));
      }
      /**
     * Reorder `array` according to the specified indexes where the element at
     * the first index is assigned as the first element, the element at
     * the second index is assigned as the second element, and so on.
     *
     * @private
     * @param {Array} array The array to reorder.
     * @param {Array} indexes The arranged array indexes.
     * @returns {Array} Returns `array`.
     */      function reorder(e, t) {
        for (var r = e.length, a = zt(t.length, r), i = copyArray(e); a--; ) {
          var o = t[a];
          e[a] = isIndex(o, r) ? i[o] : n;
        }
        return e;
      }
      /**
     * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the property to get.
     * @returns {*} Returns the property value.
     */      function safeGet(e, t) {
        if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t];
      }
      /**
     * Sets metadata for `func`.
     *
     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
     * period of time, it will trip its breaker and transition to an identity
     * function to avoid garbage collection pauses in V8. See
     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
     * for more details.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */      var bn = shortOut(sn), vn = pt || function(e, t) {
        return ft.setTimeout(e, t);
      }, _n = shortOut(un);
      /**
     * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @returns {number|Object} Returns the timer id or timeout object.
     */      
      /**
     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
     * with wrapper details in a comment at the top of the source body.
     *
     * @private
     * @param {Function} wrapper The function to modify.
     * @param {Function} reference The reference function.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Function} Returns `wrapper`.
     */
      function setWrapToString(e, t, n) {
        var r = t + "";
        return _n(e, function(e, t) {
          var n = t.length;
          if (!n) return e;
          var r = n - 1;
          return t[r] = (n > 1 ? "& " : "") + t[r], t = t.join(n > 2 ? ", " : " "), e.replace(ue, "{\n/* [wrapped with " + t + "] */\n");
        }(r, 
        /**
     * Updates wrapper `details` based on `bitmask` flags.
     *
     * @private
     * @returns {Array} details The details to modify.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Array} Returns `details`.
     */
        function(e, t) {
          return arrayEach(y, (function(n) {
            var r = "_." + n[0];
            t & n[1] && !arrayIncludes(e, r) && e.push(r);
          })), e.sort();
        }
        /**
     * Creates a clone of `wrapper`.
     *
     * @private
     * @param {Object} wrapper The wrapper to clone.
     * @returns {Object} Returns the cloned wrapper.
     */ (
        /**
     * Extracts wrapper details from the `source` body comment.
     *
     * @private
     * @param {string} source The source to inspect.
     * @returns {Array} Returns the wrapper details.
     */
        function(e) {
          var t = e.match(ce);
          return t ? t[1].split(le) : [];
        }(r), n)));
      }
      /**
     * Creates a function that'll short out and invoke `identity` instead
     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
     * milliseconds.
     *
     * @private
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new shortable function.
     */      function shortOut(e) {
        var t = 0, r = 0;
        return function() {
          var a = Bt(), i = 16 - (a - r);
          if (r = a, i > 0) {
            if (++t >= 800) return arguments[0];
          } else t = 0;
          return e.apply(n, arguments);
        };
      }
      /**
     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @param {number} [size=array.length] The size of `array`.
     * @returns {Array} Returns `array`.
     */      function shuffleSelf(e, t) {
        var r = -1, a = e.length, i = a - 1;
        for (t = t === n ? a : t; ++r < t; ) {
          var o = baseRandom(r, i), s = e[o];
          e[o] = e[r], e[r] = s;
        }
        return e.length = t, e;
      }
      /**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */      var mn = function(e) {
        var t = memoize(e, (function(e) {
          return 500 === n.size && n.clear(), e;
        })), n = t.cache;
        return t;
      }((function(e) {
        var t = [];
        return 46 /* . */ === e.charCodeAt(0) && t.push(""), e.replace(ne, (function(e, n, r, a) {
          t.push(r ? a.replace(fe, "$1") : n || e);
        })), t;
      }));
      /**
     * Converts `value` to a string key if it's not a string or symbol.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {string|symbol} Returns the key.
     */      function toKey(e) {
        if ("string" == typeof e || isSymbol(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
      }
      /**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to convert.
     * @returns {string} Returns the source code.
     */      function toSource(e) {
        if (null != e) {
          try {
            return Be.call(e);
          } catch (e) {}
          try {
            return e + "";
          } catch (e) {}
        }
        return "";
      }
      function wrapperClone(e) {
        if (e instanceof LazyWrapper) return e.clone();
        var t = new LodashWrapper(e.__wrapped__, e.__chain__);
        return t.__actions__ = copyArray(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, 
        t;
      }
      /*------------------------------------------------------------------------*/
      /**
     * Creates an array of elements split into groups the length of `size`.
     * If `array` can't be split evenly, the final chunk will be the remaining
     * elements.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the new array of chunks.
     * @example
     *
     * _.chunk(['a', 'b', 'c', 'd'], 2);
     * // => [['a', 'b'], ['c', 'd']]
     *
     * _.chunk(['a', 'b', 'c', 'd'], 3);
     * // => [['a', 'b', 'c'], ['d']]
     */      
      /**
     * Creates an array of `array` values not included in the other given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * **Note:** Unlike `_.pullAll`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.without, _.xor
     * @example
     *
     * _.difference([2, 1], [2, 3]);
     * // => [1]
     */
      var In = baseRest((function(e, t) {
        return isArrayLikeObject(e) ? baseDifference(e, baseFlatten(t, 1, isArrayLikeObject, !0)) : [];
      })), Sn = baseRest((function(e, t) {
        var r = last(t);
        return isArrayLikeObject(r) && (r = n), isArrayLikeObject(e) ? baseDifference(e, baseFlatten(t, 1, isArrayLikeObject, !0), getIteratee(r, 2)) : [];
      })), wn = baseRest((function(e, t) {
        var r = last(t);
        return isArrayLikeObject(r) && (r = n), isArrayLikeObject(e) ? baseDifference(e, baseFlatten(t, 1, isArrayLikeObject, !0), n, r) : [];
      }));
      /**
     * This method is like `_.difference` except that it accepts `iteratee` which
     * is invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */      
      /**
     * This method is like `_.find` except that it returns the index of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.findIndex(users, function(o) { return o.user == 'barney'; });
     * // => 0
     *
     * // The `_.matches` iteratee shorthand.
     * _.findIndex(users, { 'user': 'fred', 'active': false });
     * // => 1
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findIndex(users, ['active', false]);
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.findIndex(users, 'active');
     * // => 2
     */
      function findIndex(e, t, n) {
        var r = null == e ? 0 : e.length;
        if (!r) return -1;
        var a = null == n ? 0 : toInteger(n);
        return a < 0 && (a = Ft(r + a, 0)), baseFindIndex(e, getIteratee(t, 3), a);
      }
      /**
     * This method is like `_.findIndex` except that it iterates over elements
     * of `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
     * // => 2
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
     * // => 0
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastIndex(users, ['active', false]);
     * // => 2
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastIndex(users, 'active');
     * // => 0
     */      function findLastIndex(e, t, r) {
        var a = null == e ? 0 : e.length;
        if (!a) return -1;
        var i = a - 1;
        return r !== n && (i = toInteger(r), i = r < 0 ? Ft(a + i, 0) : zt(i, a - 1)), baseFindIndex(e, getIteratee(t, 3), i, !0);
      }
      /**
     * Flattens `array` a single level deep.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flatten([1, [2, [3, [4]], 5]]);
     * // => [1, 2, [3, [4]], 5]
     */      function flatten(e) {
        return null != e && e.length ? baseFlatten(e, 1) : [];
      }
      /**
     * Recursively flattens `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flattenDeep([1, [2, [3, [4]], 5]]);
     * // => [1, 2, 3, 4, 5]
     */      
      /**
     * Gets the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias first
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of `array`.
     * @example
     *
     * _.head([1, 2, 3]);
     * // => 1
     *
     * _.head([]);
     * // => undefined
     */
      function head(e) {
        return e && e.length ? e[0] : n;
      }
      /**
     * Gets the index at which the first occurrence of `value` is found in `array`
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it's used as the
     * offset from the end of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.indexOf([1, 2, 1, 2], 2);
     * // => 1
     *
     * // Search from the `fromIndex`.
     * _.indexOf([1, 2, 1, 2], 2, 2);
     * // => 3
     */      
      /**
     * Creates an array of unique values that are included in all given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersection([2, 1], [2, 3]);
     * // => [2]
     */
      var An = baseRest((function(e) {
        var t = arrayMap(e, castArrayLikeObject);
        return t.length && t[0] === e[0] ? baseIntersection(t) : [];
      })), Cn = baseRest((function(e) {
        var t = last(e), r = arrayMap(e, castArrayLikeObject);
        return t === last(r) ? t = n : r.pop(), r.length && r[0] === e[0] ? baseIntersection(r, getIteratee(t, 2)) : [];
      })), kn = baseRest((function(e) {
        var t = last(e), r = arrayMap(e, castArrayLikeObject);
        return (t = "function" == typeof t ? t : n) && r.pop(), r.length && r[0] === e[0] ? baseIntersection(r, n, t) : [];
      }));
      /**
     * This method is like `_.intersection` except that it accepts `iteratee`
     * which is invoked for each element of each `arrays` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [2.1]
     *
     * // The `_.property` iteratee shorthand.
     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }]
     */      
      /**
     * Gets the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the last element of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     */
      function last(e) {
        var t = null == e ? 0 : e.length;
        return t ? e[t - 1] : n;
      }
      /**
     * This method is like `_.indexOf` except that it iterates over elements of
     * `array` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.lastIndexOf([1, 2, 1, 2], 2);
     * // => 3
     *
     * // Search from the `fromIndex`.
     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
     * // => 1
     */      
      /**
     * Removes all given values from `array` using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
     * to remove elements from an array by predicate.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...*} [values] The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pull(array, 'a', 'c');
     * console.log(array);
     * // => ['b', 'b']
     */
      var Ln = baseRest(pullAll);
      /**
     * This method is like `_.pull` except that it accepts an array of values to remove.
     *
     * **Note:** Unlike `_.difference`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pullAll(array, ['a', 'c']);
     * console.log(array);
     * // => ['b', 'b']
     */      function pullAll(e, t) {
        return e && e.length && t && t.length ? basePullAll(e, t) : e;
      }
      /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */      
      /**
     * Removes elements from `array` corresponding to `indexes` and returns an
     * array of removed elements.
     *
     * **Note:** Unlike `_.at`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...(number|number[])} [indexes] The indexes of elements to remove.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     * var pulled = _.pullAt(array, [1, 3]);
     *
     * console.log(array);
     * // => ['a', 'c']
     *
     * console.log(pulled);
     * // => ['b', 'd']
     */
      var Rn = flatRest((function(e, t) {
        var n = null == e ? 0 : e.length, r = baseAt(e, t);
        return basePullAt(e, arrayMap(t, (function(e) {
          return isIndex(e, n) ? +e : e;
        })).sort(compareAscending)), r;
      }));
      /**
     * Removes all elements from `array` that `predicate` returns truthy for
     * and returns an array of the removed elements. The predicate is invoked
     * with three arguments: (value, index, array).
     *
     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
     * to pull elements from an array by value.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = [1, 2, 3, 4];
     * var evens = _.remove(array, function(n) {
     *   return n % 2 == 0;
     * });
     *
     * console.log(array);
     * // => [1, 3]
     *
     * console.log(evens);
     * // => [2, 4]
     */      
      /**
     * Reverses `array` so that the first element becomes the last, the second
     * element becomes the second to last, and so on.
     *
     * **Note:** This method mutates `array` and is based on
     * [`Array#reverse`](https://mdn.io/Array/reverse).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.reverse(array);
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
      function reverse(e) {
        return null == e ? e : Mt.call(e);
      }
      /**
     * Creates a slice of `array` from `start` up to, but not including, `end`.
     *
     * **Note:** This method is used instead of
     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
     * returned.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */      
      /**
     * Creates an array of unique values, in order, from all given arrays using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.union([2], [1, 2]);
     * // => [2, 1]
     */
      var On = baseRest((function(e) {
        return baseUniq(baseFlatten(e, 1, isArrayLikeObject, !0));
      })), xn = baseRest((function(e) {
        var t = last(e);
        return isArrayLikeObject(t) && (t = n), baseUniq(baseFlatten(e, 1, isArrayLikeObject, !0), getIteratee(t, 2));
      })), Zn = baseRest((function(e) {
        var t = last(e);
        return t = "function" == typeof t ? t : n, baseUniq(baseFlatten(e, 1, isArrayLikeObject, !0), n, t);
      }));
      /**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which uniqueness is computed. Result values are chosen from the first
     * array in which the value occurs. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.unionBy([2.1], [1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */      
      /**
     * This method is like `_.zip` except that it accepts an array of grouped
     * elements and creates an array regrouping the elements to their pre-zip
     * configuration.
     *
     * @static
     * @memberOf _
     * @since 1.2.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     *
     * _.unzip(zipped);
     * // => [['a', 'b'], [1, 2], [true, false]]
     */
      function unzip(e) {
        if (!e || !e.length) return [];
        var t = 0;
        return e = arrayFilter(e, (function(e) {
          if (isArrayLikeObject(e)) return t = Ft(e.length, t), !0;
        })), baseTimes(t, (function(t) {
          return arrayMap(e, baseProperty(t));
        }));
      }
      /**
     * This method is like `_.unzip` except that it accepts `iteratee` to specify
     * how regrouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  regrouped values.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
     * // => [[1, 10, 100], [2, 20, 200]]
     *
     * _.unzipWith(zipped, _.add);
     * // => [3, 30, 300]
     */      function unzipWith(e, t) {
        if (!e || !e.length) return [];
        var r = unzip(e);
        return null == t ? r : arrayMap(r, (function(e) {
          return apply(t, n, e);
        }));
      }
      /**
     * Creates an array excluding all given values using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.pull`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...*} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.xor
     * @example
     *
     * _.without([2, 1, 2, 3], 1, 2);
     * // => [3]
     */      var jn = baseRest((function(e, t) {
        return isArrayLikeObject(e) ? baseDifference(e, t) : [];
      })), Fn = baseRest((function(e) {
        return baseXor(arrayFilter(e, isArrayLikeObject));
      })), zn = baseRest((function(e) {
        var t = last(e);
        return isArrayLikeObject(t) && (t = n), baseXor(arrayFilter(e, isArrayLikeObject), getIteratee(t, 2));
      })), Bn = baseRest((function(e) {
        var t = last(e);
        return t = "function" == typeof t ? t : n, baseXor(arrayFilter(e, isArrayLikeObject), n, t);
      })), Tn = baseRest(unzip), En = baseRest((function(e) {
        var t = e.length, r = t > 1 ? e[t - 1] : n;
        return r = "function" == typeof r ? (e.pop(), r) : n, unzipWith(e, r);
      }));
      /**
     * Creates an array of unique values that is the
     * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
     * of the given arrays. The order of result values is determined by the order
     * they occur in the arrays.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.without
     * @example
     *
     * _.xor([2, 1], [2, 3]);
     * // => [1, 3]
     */      
      /*------------------------------------------------------------------------*/
      /**
     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
     * chain sequences enabled. The result of such sequences must be unwrapped
     * with `_#value`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Seq
     * @param {*} value The value to wrap.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36 },
     *   { 'user': 'fred',    'age': 40 },
     *   { 'user': 'pebbles', 'age': 1 }
     * ];
     *
     * var youngest = _
     *   .chain(users)
     *   .sortBy('age')
     *   .map(function(o) {
     *     return o.user + ' is ' + o.age;
     *   })
     *   .head()
     *   .value();
     * // => 'pebbles is 1'
     */
      function chain(e) {
        var t = lodash(e);
        return t.__chain__ = !0, t;
      }
      /**
     * This method invokes `interceptor` and returns `value`. The interceptor
     * is invoked with one argument; (value). The purpose of this method is to
     * "tap into" a method chain sequence in order to modify intermediate results.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns `value`.
     * @example
     *
     * _([1, 2, 3])
     *  .tap(function(array) {
     *    // Mutate input array.
     *    array.pop();
     *  })
     *  .reverse()
     *  .value();
     * // => [2, 1]
     */      
      /**
     * This method is like `_.tap` except that it returns the result of `interceptor`.
     * The purpose of this method is to "pass thru" values replacing intermediate
     * results in a method chain sequence.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns the result of `interceptor`.
     * @example
     *
     * _('  abc  ')
     *  .chain()
     *  .trim()
     *  .thru(function(value) {
     *    return [value];
     *  })
     *  .value();
     * // => ['abc']
     */
      function thru(e, t) {
        return t(e);
      }
      /**
     * This method is the wrapper version of `_.at`.
     *
     * @name at
     * @memberOf _
     * @since 1.0.0
     * @category Seq
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _(object).at(['a[0].b.c', 'a[1]']).value();
     * // => [3, 4]
     */      var Mn = flatRest((function(e) {
        var t = e.length, r = t ? e[0] : 0, a = this.__wrapped__, interceptor = function(t) {
          return baseAt(t, e);
        };
        return !(t > 1 || this.__actions__.length) && a instanceof LazyWrapper && isIndex(r) ? ((a = a.slice(r, +r + (t ? 1 : 0))).__actions__.push({
          func: thru,
          args: [ interceptor ],
          thisArg: n
        }), new LodashWrapper(a, this.__chain__).thru((function(e) {
          return t && !e.length && e.push(n), e;
        }))) : this.thru(interceptor);
      })), Wn = createAggregator((function(e, t, n) {
        Te.call(e, n) ? ++e[n] : baseAssignValue(e, n, 1);
      })), Pn = createFind(findIndex), Dn = createFind(findLastIndex);
      /**
     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
     *
     * @name chain
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // A sequence without explicit chaining.
     * _(users).head();
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // A sequence with explicit chaining.
     * _(users)
     *   .chain()
     *   .head()
     *   .pick('user')
     *   .value();
     * // => { 'user': 'barney' }
     */      
      /**
     * Iterates over elements of `collection` and invokes `iteratee` for each element.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length"
     * property are iterated like arrays. To avoid this behavior use `_.forIn`
     * or `_.forOwn` for object iteration.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias each
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEachRight
     * @example
     *
     * _.forEach([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `1` then `2`.
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
      function forEach(e, t) {
        return (ir(e) ? arrayEach : nn)(e, getIteratee(t, 3));
      }
      /**
     * This method is like `_.forEach` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @alias eachRight
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEach
     * @example
     *
     * _.forEachRight([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `2` then `1`.
     */      function forEachRight(e, t) {
        return (ir(e) ? arrayEachRight : rn)(e, getIteratee(t, 3));
      }
      /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The order of grouped values
     * is determined by the order they occur in `collection`. The corresponding
     * value of each key is an array of elements responsible for generating the
     * key. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': [4.2], '6': [6.1, 6.3] }
     *
     * // The `_.property` iteratee shorthand.
     * _.groupBy(['one', 'two', 'three'], 'length');
     * // => { '3': ['one', 'two'], '5': ['three'] }
     */      var Un = createAggregator((function(e, t, n) {
        Te.call(e, n) ? e[n].push(t) : baseAssignValue(e, n, [ t ]);
      })), qn = baseRest((function(e, t, n) {
        var r = -1, a = "function" == typeof t, i = isArrayLike(e) ? o(e.length) : [];
        return nn(e, (function(e) {
          i[++r] = a ? apply(t, e, n) : baseInvoke(e, t, n);
        })), i;
      })), Nn = createAggregator((function(e, t, n) {
        baseAssignValue(e, n, t);
      }));
      /**
     * Checks if `value` is in `collection`. If `collection` is a string, it's
     * checked for a substring of `value`, otherwise
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * is used for equality comparisons. If `fromIndex` is negative, it's used as
     * the offset from the end of `collection`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {boolean} Returns `true` if `value` is found, else `false`.
     * @example
     *
     * _.includes([1, 2, 3], 1);
     * // => true
     *
     * _.includes([1, 2, 3], 1, 2);
     * // => false
     *
     * _.includes({ 'a': 1, 'b': 2 }, 1);
     * // => true
     *
     * _.includes('abcd', 'bc');
     * // => true
     */      
      /**
     * Creates an array of values by running each element in `collection` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
     *
     * The guarded methods are:
     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * _.map([4, 8], square);
     * // => [16, 64]
     *
     * _.map({ 'a': 4, 'b': 8 }, square);
     * // => [16, 64] (iteration order is not guaranteed)
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, 'user');
     * // => ['barney', 'fred']
     */
      function map(e, t) {
        return (ir(e) ? arrayMap : baseMap)(e, getIteratee(t, 3));
      }
      /**
     * This method is like `_.sortBy` except that it allows specifying the sort
     * orders of the iteratees to sort by. If `orders` is unspecified, all values
     * are sorted in ascending order. Otherwise, specify an order of "desc" for
     * descending or "asc" for ascending sort order of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @param {string[]} [orders] The sort orders of `iteratees`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 34 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 36 }
     * ];
     *
     * // Sort by `user` in ascending order and by `age` in descending order.
     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     */      
      /**
     * Creates an array of elements split into two groups, the first of which
     * contains elements `predicate` returns truthy for, the second of which
     * contains elements `predicate` returns falsey for. The predicate is
     * invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of grouped elements.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': false },
     *   { 'user': 'fred',    'age': 40, 'active': true },
     *   { 'user': 'pebbles', 'age': 1,  'active': false }
     * ];
     *
     * _.partition(users, function(o) { return o.active; });
     * // => objects for [['fred'], ['barney', 'pebbles']]
     *
     * // The `_.matches` iteratee shorthand.
     * _.partition(users, { 'age': 1, 'active': false });
     * // => objects for [['pebbles'], ['barney', 'fred']]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.partition(users, ['active', false]);
     * // => objects for [['barney', 'pebbles'], ['fred']]
     *
     * // The `_.property` iteratee shorthand.
     * _.partition(users, 'active');
     * // => objects for [['fred'], ['barney', 'pebbles']]
     */
      var Hn = createAggregator((function(e, t, n) {
        e[n ? 0 : 1].push(t);
      }), (function() {
        return [ [], [] ];
      })), Gn = baseRest((function(e, t) {
        if (null == e) return [];
        var n = t.length;
        return n > 1 && isIterateeCall(e, t[0], t[1]) ? t = [] : n > 2 && isIterateeCall(t[0], t[1], t[2]) && (t = [ t[0] ]), 
        baseOrderBy(e, baseFlatten(t, 1), []);
      })), Kn = dt || function() {
        return ft.Date.now();
      };
      /**
     * Reduces `collection` to a value which is the accumulated result of running
     * each element in `collection` thru `iteratee`, where each successive
     * invocation is supplied the return value of the previous. If `accumulator`
     * is not given, the first element of `collection` is used as the initial
     * value. The iteratee is invoked with four arguments:
     * (accumulator, value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.reduce`, `_.reduceRight`, and `_.transform`.
     *
     * The guarded methods are:
     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
     * and `sortBy`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduceRight
     * @example
     *
     * _.reduce([1, 2], function(sum, n) {
     *   return sum + n;
     * }, 0);
     * // => 3
     *
     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     *   return result;
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
     */      
      /**
     * Creates a function that invokes `func`, with up to `n` arguments,
     * ignoring any additional arguments.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @param {number} [n=func.length] The arity cap.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
     * // => [6, 8, 10]
     */
      function ary(e, t, r) {
        return t = r ? n : t, t = e && null == t ? e.length : t, createWrap(e, l, n, n, n, n, t);
      }
      /**
     * Creates a function that invokes `func`, with the `this` binding and arguments
     * of the created function, while it's called less than `n` times. Subsequent
     * calls to the created function return the result of the last `func` invocation.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {number} n The number of calls at which `func` is no longer invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * jQuery(element).on('click', _.before(5, addContactToList));
     * // => Allows adding up to 4 contacts to the list.
     */      function before(e, t) {
        var a;
        if ("function" != typeof t) throw new xe(r);
        return e = toInteger(e), function() {
          return --e > 0 && (a = t.apply(this, arguments)), e <= 1 && (t = n), a;
        };
      }
      /**
     * Creates a function that invokes `func` with the `this` binding of `thisArg`
     * and `partials` prepended to the arguments it receives.
     *
     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for partially applied arguments.
     *
     * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
     * property of bound functions.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to bind.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * function greet(greeting, punctuation) {
     *   return greeting + ' ' + this.user + punctuation;
     * }
     *
     * var object = { 'user': 'fred' };
     *
     * var bound = _.bind(greet, object, 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bind(greet, object, _, '!');
     * bound('hi');
     * // => 'hi fred!'
     */      var Vn = baseRest((function(e, t, n) {
        var r = 1;
        if (n.length) {
          var a = replaceHolders(n, getHolder(Vn));
          r |= u;
        }
        return createWrap(e, r, t, n, a);
      })), Xn = baseRest((function(e, t, n) {
        var r = 3;
        if (n.length) {
          var a = replaceHolders(n, getHolder(Xn));
          r |= u;
        }
        return createWrap(t, r, e, n, a);
      }));
      /**
     * Creates a function that invokes the method at `object[key]` with `partials`
     * prepended to the arguments it receives.
     *
     * This method differs from `_.bind` by allowing bound functions to reference
     * methods that may be redefined or don't yet exist. See
     * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
     * for more details.
     *
     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Function
     * @param {Object} object The object to invoke the method on.
     * @param {string} key The key of the method.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var object = {
     *   'user': 'fred',
     *   'greet': function(greeting, punctuation) {
     *     return greeting + ' ' + this.user + punctuation;
     *   }
     * };
     *
     * var bound = _.bindKey(object, 'greet', 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * object.greet = function(greeting, punctuation) {
     *   return greeting + 'ya ' + this.user + punctuation;
     * };
     *
     * bound('!');
     * // => 'hiya fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bindKey(object, 'greet', _, '!');
     * bound('hi');
     * // => 'hiya fred!'
     */      
      /**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */
      function debounce(e, t, a) {
        var i, o, s, u, c, l, h = 0, f = !1, d = !1, p = !0;
        if ("function" != typeof e) throw new xe(r);
        function invokeFunc(t) {
          var r = i, a = o;
          return i = o = n, h = t, u = e.apply(a, r);
        }
        function leadingEdge(e) {
          // Invoke the leading edge.
          // Reset any `maxWait` timer.
          return h = e, 
          // Start the timer for the trailing edge.
          c = vn(timerExpired, t), f ? invokeFunc(e) : u;
        }
        function shouldInvoke(e) {
          var r = e - l;
          // Either this is the first call, activity has stopped and we're at the
          // trailing edge, the system time has gone backwards and we're treating
          // it as the trailing edge, or we've hit the `maxWait` limit.
                    return l === n || r >= t || r < 0 || d && e - h >= s;
        }
        function timerExpired() {
          var e = Kn();
          if (shouldInvoke(e)) return trailingEdge(e);
          // Restart the timer.
                    c = vn(timerExpired, function(e) {
            var n = t - (e - l);
            return d ? zt(n, s - (e - h)) : n;
          }(e));
        }
        function trailingEdge(e) {
          // Only invoke if we have `lastArgs` which means `func` has been
          // debounced at least once.
          return c = n, p && i ? invokeFunc(e) : (i = o = n, u);
        }
        function debounced() {
          var e = Kn(), r = shouldInvoke(e);
          if (i = arguments, o = this, l = e, r) {
            if (c === n) return leadingEdge(l);
            if (d) 
            // Handle invocations in a tight loop.
            return ln(c), c = vn(timerExpired, t), invokeFunc(l);
          }
          return c === n && (c = vn(timerExpired, t)), u;
        }
        return t = toNumber(t) || 0, isObject(a) && (f = !!a.leading, s = (d = "maxWait" in a) ? Ft(toNumber(a.maxWait) || 0, t) : s, 
        p = "trailing" in a ? !!a.trailing : p), debounced.cancel = function() {
          c !== n && ln(c), h = 0, i = l = o = c = n;
        }, debounced.flush = function() {
          return c === n ? u : trailingEdge(Kn());
        }, debounced;
      }
      /**
     * Defers invoking the `func` until the current call stack has cleared. Any
     * additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to defer.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.defer(function(text) {
     *   console.log(text);
     * }, 'deferred');
     * // => Logs 'deferred' after one millisecond.
     */      var Yn = baseRest((function(e, t) {
        return baseDelay(e, 1, t);
      })), $n = baseRest((function(e, t, n) {
        return baseDelay(e, toNumber(t) || 0, n);
      }));
      /**
     * Invokes `func` after `wait` milliseconds. Any additional arguments are
     * provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.delay(function(text) {
     *   console.log(text);
     * }, 1000, 'later');
     * // => Logs 'later' after one second.
     */      
      /**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided, it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is used as the map cache key. The `func`
     * is invoked with the `this` binding of the memoized function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the
     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoized function.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     * var other = { 'c': 3, 'd': 4 };
     *
     * var values = _.memoize(_.values);
     * values(object);
     * // => [1, 2]
     *
     * values(other);
     * // => [3, 4]
     *
     * object.a = 2;
     * values(object);
     * // => [1, 2]
     *
     * // Modify the result cache.
     * values.cache.set(object, ['a', 'b']);
     * values(object);
     * // => ['a', 'b']
     *
     * // Replace `_.memoize.Cache`.
     * _.memoize.Cache = WeakMap;
     */
      function memoize(e, t) {
        if ("function" != typeof e || null != t && "function" != typeof t) throw new xe(r);
        var memoized = function() {
          var n = arguments, r = t ? t.apply(this, n) : n[0], a = memoized.cache;
          if (a.has(r)) return a.get(r);
          var i = e.apply(this, n);
          return memoized.cache = a.set(r, i) || a, i;
        };
        return memoized.cache = new (memoize.Cache || MapCache), memoized;
      }
      // Expose `MapCache`.
            /**
     * Creates a function that negates the result of the predicate `func`. The
     * `func` predicate is invoked with the `this` binding and arguments of the
     * created function.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} predicate The predicate to negate.
     * @returns {Function} Returns the new negated function.
     * @example
     *
     * function isEven(n) {
     *   return n % 2 == 0;
     * }
     *
     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
     * // => [1, 3, 5]
     */
      function negate(e) {
        if ("function" != typeof e) throw new xe(r);
        return function() {
          var t = arguments;
          switch (t.length) {
           case 0:
            return !e.call(this);

           case 1:
            return !e.call(this, t[0]);

           case 2:
            return !e.call(this, t[0], t[1]);

           case 3:
            return !e.call(this, t[0], t[1], t[2]);
          }
          return !e.apply(this, t);
        };
      }
      /**
     * Creates a function that is restricted to invoking `func` once. Repeat calls
     * to the function return the value of the first invocation. The `func` is
     * invoked with the `this` binding and arguments of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // => `createApplication` is invoked once
     */      memoize.Cache = MapCache;
      /**
     * Creates a function that invokes `func` with its arguments transformed.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Function
     * @param {Function} func The function to wrap.
     * @param {...(Function|Function[])} [transforms=[_.identity]]
     *  The argument transforms.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function doubled(n) {
     *   return n * 2;
     * }
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var func = _.overArgs(function(x, y) {
     *   return [x, y];
     * }, [square, doubled]);
     *
     * func(9, 3);
     * // => [81, 6]
     *
     * func(10, 5);
     * // => [100, 10]
     */
      var Jn = cn((function(e, t) {
        var n = (t = 1 == t.length && ir(t[0]) ? arrayMap(t[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(t, 1), baseUnary(getIteratee()))).length;
        return baseRest((function(r) {
          for (var a = -1, i = zt(r.length, n); ++a < i; ) r[a] = t[a].call(this, r[a]);
          return apply(e, this, r);
        }));
      })), Qn = baseRest((function(e, t) {
        var r = replaceHolders(t, getHolder(Qn));
        return createWrap(e, u, n, t, r);
      })), er = baseRest((function(e, t) {
        var r = replaceHolders(t, getHolder(er));
        return createWrap(e, c, n, t, r);
      })), tr = flatRest((function(e, t) {
        return createWrap(e, h, n, n, n, t);
      }));
      /**
     * Creates a function that invokes `func` with `partials` prepended to the
     * arguments it receives. This method is like `_.bind` except it does **not**
     * alter the `this` binding.
     *
     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 0.2.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var sayHelloTo = _.partial(greet, 'hello');
     * sayHelloTo('fred');
     * // => 'hello fred'
     *
     * // Partially applied with placeholders.
     * var greetFred = _.partial(greet, _, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     */      
      /**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */
      function eq(e, t) {
        return e === t || e != e && t != t;
      }
      /**
     * Checks if `value` is greater than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     * @see _.lt
     * @example
     *
     * _.gt(3, 1);
     * // => true
     *
     * _.gt(3, 3);
     * // => false
     *
     * _.gt(1, 3);
     * // => false
     */      var nr = createRelationalOperation(baseGt), rr = createRelationalOperation((function(e, t) {
        return e >= t;
      })), ar = baseIsArguments(function() {
        return arguments;
      }()) ? baseIsArguments : function(e) {
        return isObjectLike(e) && Te.call(e, "callee") && !Xe.call(e, "callee");
      }, ir = o.isArray, or = vt ? baseUnary(vt) : function(e) {
        return isObjectLike(e) && baseGetTag(e) == F;
      }
      /**
     * The base implementation of `_.isDate` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     */;
      /**
     * Checks if `value` is greater than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than or equal to
     *  `other`, else `false`.
     * @see _.lte
     * @example
     *
     * _.gte(3, 1);
     * // => true
     *
     * _.gte(3, 3);
     * // => true
     *
     * _.gte(1, 3);
     * // => false
     */      
      /**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */
      function isArrayLike(e) {
        return null != e && isLength(e.length) && !isFunction(e);
      }
      /**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object,
     *  else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */      function isArrayLikeObject(e) {
        return isObjectLike(e) && isArrayLike(e);
      }
      /**
     * Checks if `value` is classified as a boolean primitive or object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
     * @example
     *
     * _.isBoolean(false);
     * // => true
     *
     * _.isBoolean(null);
     * // => false
     */      
      /**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */
      var sr = Ot || stubFalse, ur = _t ? baseUnary(_t) : function(e) {
        return isObjectLike(e) && baseGetTag(e) == m;
      };
      /**
     * Checks if `value` is classified as a `Date` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     * @example
     *
     * _.isDate(new Date);
     * // => true
     *
     * _.isDate('Mon April 23 2012');
     * // => false
     */      
      /**
     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
     * `SyntaxError`, `TypeError`, or `URIError` object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
     * @example
     *
     * _.isError(new Error);
     * // => true
     *
     * _.isError(Error);
     * // => false
     */
      function isError(e) {
        if (!isObjectLike(e)) return !1;
        var t = baseGetTag(e);
        return t == I || "[object DOMException]" == t || "string" == typeof e.message && "string" == typeof e.name && !isPlainObject(e);
      }
      /**
     * Checks if `value` is a finite primitive number.
     *
     * **Note:** This method is based on
     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
     * @example
     *
     * _.isFinite(3);
     * // => true
     *
     * _.isFinite(Number.MIN_VALUE);
     * // => true
     *
     * _.isFinite(Infinity);
     * // => false
     *
     * _.isFinite('3');
     * // => false
     */      
      /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */
      function isFunction(e) {
        if (!isObject(e)) return !1;
        // The use of `Object#toString` avoids issues with the `typeof` operator
        // in Safari 9 which returns 'object' for typed arrays and other constructors.
                var t = baseGetTag(e);
        return t == S || t == w || "[object AsyncFunction]" == t || "[object Proxy]" == t;
      }
      /**
     * Checks if `value` is an integer.
     *
     * **Note:** This method is based on
     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
     * @example
     *
     * _.isInteger(3);
     * // => true
     *
     * _.isInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isInteger(Infinity);
     * // => false
     *
     * _.isInteger('3');
     * // => false
     */      function isInteger(e) {
        return "number" == typeof e && e == toInteger(e);
      }
      /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */      function isLength(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= d;
      }
      /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */      function isObject(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t);
      }
      /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */      function isObjectLike(e) {
        return null != e && "object" == typeof e;
      }
      /**
     * Checks if `value` is classified as a `Map` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     * @example
     *
     * _.isMap(new Map);
     * // => true
     *
     * _.isMap(new WeakMap);
     * // => false
     */      var cr = mt ? baseUnary(mt) : function(e) {
        return isObjectLike(e) && gn(e) == A;
      };
      /**
     * Performs a partial deep comparison between `object` and `source` to
     * determine if `object` contains equivalent property values.
     *
     * **Note:** This method is equivalent to `_.matches` when `source` is
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.isMatch(object, { 'b': 2 });
     * // => true
     *
     * _.isMatch(object, { 'b': 1 });
     * // => false
     */      
      /**
     * Checks if `value` is classified as a `Number` primitive or object.
     *
     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
     * classified as numbers, use the `_.isFinite` method.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
     * @example
     *
     * _.isNumber(3);
     * // => true
     *
     * _.isNumber(Number.MIN_VALUE);
     * // => true
     *
     * _.isNumber(Infinity);
     * // => true
     *
     * _.isNumber('3');
     * // => false
     */
      function isNumber(e) {
        return "number" == typeof e || isObjectLike(e) && baseGetTag(e) == C;
      }
      /**
     * Checks if `value` is a plain object, that is, an object created by the
     * `Object` constructor or one with a `[[Prototype]]` of `null`.
     *
     * @static
     * @memberOf _
     * @since 0.8.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * _.isPlainObject(new Foo);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     *
     * _.isPlainObject(Object.create(null));
     * // => true
     */      function isPlainObject(e) {
        if (!isObjectLike(e) || baseGetTag(e) != k) return !1;
        var t = Ke(e);
        if (null === t) return !0;
        var n = Te.call(t, "constructor") && t.constructor;
        return "function" == typeof n && n instanceof n && Be.call(n) == Pe;
      }
      /**
     * Checks if `value` is classified as a `RegExp` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     * @example
     *
     * _.isRegExp(/abc/);
     * // => true
     *
     * _.isRegExp('/abc/');
     * // => false
     */      var lr = It ? baseUnary(It) : function(e) {
        return isObjectLike(e) && baseGetTag(e) == R;
      }
      /**
     * The base implementation of `_.isSet` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     */ , hr = St ? baseUnary(St) : function(e) {
        return isObjectLike(e) && gn(e) == O;
      }
      /**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     */;
      /**
     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
     * double precision number which isn't the result of a rounded unsafe integer.
     *
     * **Note:** This method is based on
     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
     * @example
     *
     * _.isSafeInteger(3);
     * // => true
     *
     * _.isSafeInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isSafeInteger(Infinity);
     * // => false
     *
     * _.isSafeInteger('3');
     * // => false
     */      
      /**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */
      function isString(e) {
        return "string" == typeof e || !ir(e) && isObjectLike(e) && baseGetTag(e) == x;
      }
      /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */      function isSymbol(e) {
        return "symbol" == typeof e || isObjectLike(e) && baseGetTag(e) == Z;
      }
      /**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */      var fr = wt ? baseUnary(wt) : function(e) {
        return isObjectLike(e) && isLength(e.length) && !!it[baseGetTag(e)];
      }, dr = createRelationalOperation(baseLt), pr = createRelationalOperation((function(e, t) {
        return e <= t;
      }));
      /**
     * Checks if `value` is `undefined`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
     * @example
     *
     * _.isUndefined(void 0);
     * // => true
     *
     * _.isUndefined(null);
     * // => false
     */      
      /**
     * Converts `value` to an array.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Array} Returns the converted array.
     * @example
     *
     * _.toArray({ 'a': 1, 'b': 2 });
     * // => [1, 2]
     *
     * _.toArray('abc');
     * // => ['a', 'b', 'c']
     *
     * _.toArray(1);
     * // => []
     *
     * _.toArray(null);
     * // => []
     */
      function toArray(e) {
        if (!e) return [];
        if (isArrayLike(e)) return isString(e) ? stringToArray(e) : copyArray(e);
        if (tt && e[tt]) 
        /**
   * Converts `iterator` to an array.
   *
   * @private
   * @param {Object} iterator The iterator to convert.
   * @returns {Array} Returns the converted array.
   */
        return function(e) {
          for (var t, n = []; !(t = e.next()).done; ) n.push(t.value);
          return n;
        }(e[tt]());
        var t = gn(e);
        return (t == A ? mapToArray : t == O ? setToArray : values)(e);
      }
      /**
     * Converts `value` to a finite number.
     *
     * @static
     * @memberOf _
     * @since 4.12.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted number.
     * @example
     *
     * _.toFinite(3.2);
     * // => 3.2
     *
     * _.toFinite(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toFinite(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toFinite('3.2');
     * // => 3.2
     */      function toFinite(e) {
        return e ? (e = toNumber(e)) === f || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0;
      }
      /**
     * Converts `value` to an integer.
     *
     * **Note:** This method is loosely based on
     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3.2);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toInteger('3.2');
     * // => 3
     */      function toInteger(e) {
        var t = toFinite(e), n = t % 1;
        return t == t ? n ? t - n : t : 0;
      }
      /**
     * Converts `value` to an integer suitable for use as the length of an
     * array-like object.
     *
     * **Note:** This method is based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toLength(3.2);
     * // => 3
     *
     * _.toLength(Number.MIN_VALUE);
     * // => 0
     *
     * _.toLength(Infinity);
     * // => 4294967295
     *
     * _.toLength('3.2');
     * // => 3
     */      function toLength(e) {
        return e ? baseClamp(toInteger(e), 0, g) : 0;
      }
      /**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */      function toNumber(e) {
        if ("number" == typeof e) return e;
        if (isSymbol(e)) return p;
        if (isObject(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = isObject(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(ie, "");
        var n = ye.test(e);
        return n || ve.test(e) ? ct(e.slice(2), n ? 2 : 8) : ge.test(e) ? p : +e;
      }
      /**
     * Converts `value` to a plain object flattening inherited enumerable string
     * keyed properties of `value` to own properties of the plain object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Object} Returns the converted plain object.
     * @example
     *
     * function Foo() {
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.assign({ 'a': 1 }, new Foo);
     * // => { 'a': 1, 'b': 2 }
     *
     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
     * // => { 'a': 1, 'b': 2, 'c': 3 }
     */      function toPlainObject(e) {
        return copyObject(e, keysIn(e));
      }
      /**
     * Converts `value` to a safe integer. A safe integer can be compared and
     * represented correctly.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toSafeInteger(3.2);
     * // => 3
     *
     * _.toSafeInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toSafeInteger(Infinity);
     * // => 9007199254740991
     *
     * _.toSafeInteger('3.2');
     * // => 3
     */      
      /**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */
      function toString(e) {
        return null == e ? "" : baseToString(e);
      }
      /*------------------------------------------------------------------------*/
      /**
     * Assigns own enumerable string keyed properties of source objects to the
     * destination object. Source objects are applied from left to right.
     * Subsequent sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object` and is loosely based on
     * [`Object.assign`](https://mdn.io/Object/assign).
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assignIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assign({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'c': 3 }
     */      var gr = createAssigner((function(e, t) {
        if (isPrototype(t) || isArrayLike(t)) copyObject(t, keys(t), e); else for (var n in t) Te.call(t, n) && assignValue(e, n, t[n]);
      })), yr = createAssigner((function(e, t) {
        copyObject(t, keysIn(t), e);
      })), br = createAssigner((function(e, t, n, r) {
        copyObject(t, keysIn(t), e, r);
      })), vr = createAssigner((function(e, t, n, r) {
        copyObject(t, keys(t), e, r);
      })), _r = flatRest(baseAt), mr = baseRest((function(e, t) {
        e = Le(e);
        var r = -1, a = t.length, i = a > 2 ? t[2] : n;
        for (i && isIterateeCall(t[0], t[1], i) && (a = 1); ++r < a; ) for (var o = t[r], s = keysIn(o), u = -1, c = s.length; ++u < c; ) {
          var l = s[u], h = e[l];
          (h === n || eq(h, Fe[l]) && !Te.call(e, l)) && (e[l] = o[l]);
        }
        return e;
      })), Ir = baseRest((function(e) {
        return e.push(n, customDefaultsMerge), apply(kr, n, e);
      }));
      /**
     * This method is like `_.assign` except that it iterates over own and
     * inherited source properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extend
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assign
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assignIn({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
     */      
      /**
     * Gets the value at `path` of `object`. If the resolved value is
     * `undefined`, the `defaultValue` is returned in its place.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */
      function get(e, t, r) {
        var a = null == e ? n : baseGet(e, t);
        return a === n ? r : a;
      }
      /**
     * Checks if `path` is a direct property of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = { 'a': { 'b': 2 } };
     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.has(object, 'a');
     * // => true
     *
     * _.has(object, 'a.b');
     * // => true
     *
     * _.has(object, ['a', 'b']);
     * // => true
     *
     * _.has(other, 'a');
     * // => false
     */      
      /**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b');
     * // => true
     *
     * _.hasIn(object, ['a', 'b']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */
      function hasIn(e, t) {
        return null != e && hasPath(e, t, baseHasIn);
      }
      /**
     * Creates an object composed of the inverted keys and values of `object`.
     * If `object` contains duplicate values, subsequent values overwrite
     * property assignments of previous values.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Object
     * @param {Object} object The object to invert.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invert(object);
     * // => { '1': 'c', '2': 'b' }
     */      var Sr = createInverter((function(e, t, n) {
        null != t && "function" != typeof t.toString && (t = We.call(t)), e[t] = n;
      }), constant(identity)), wr = createInverter((function(e, t, n) {
        null != t && "function" != typeof t.toString && (t = We.call(t)), Te.call(e, t) ? e[t].push(n) : e[t] = [ n ];
      }), getIteratee), Ar = baseRest(baseInvoke);
      /**
     * This method is like `_.invert` except that the inverted object is generated
     * from the results of running each element of `object` thru `iteratee`. The
     * corresponding inverted value of each inverted key is an array of keys
     * responsible for generating the inverted value. The iteratee is invoked
     * with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Object
     * @param {Object} object The object to invert.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invertBy(object);
     * // => { '1': ['a', 'c'], '2': ['b'] }
     *
     * _.invertBy(object, function(value) {
     *   return 'group' + value;
     * });
     * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
     */      
      /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */
      function keys(e) {
        return isArrayLike(e) ? arrayLikeKeys(e) : baseKeys(e);
      }
      /**
     * Creates an array of the own and inherited enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keysIn(new Foo);
     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
     */      function keysIn(e) {
        return isArrayLike(e) ? arrayLikeKeys(e, !0) : baseKeysIn(e);
      }
      /**
     * The opposite of `_.mapValues`; this method creates an object with the
     * same values as `object` and keys generated by running each own enumerable
     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
     * with three arguments: (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapValues
     * @example
     *
     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
     *   return key + value;
     * });
     * // => { 'a1': 1, 'b2': 2 }
     */      
      /**
     * This method is like `_.assign` except that it recursively merges own and
     * inherited enumerable string keyed properties of source objects into the
     * destination object. Source properties that resolve to `undefined` are
     * skipped if a destination value exists. Array and plain object properties
     * are merged recursively. Other objects and value types are overridden by
     * assignment. Source objects are applied from left to right. Subsequent
     * sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {
     *   'a': [{ 'b': 2 }, { 'd': 4 }]
     * };
     *
     * var other = {
     *   'a': [{ 'c': 3 }, { 'e': 5 }]
     * };
     *
     * _.merge(object, other);
     * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
     */
      var Cr = createAssigner((function(e, t, n) {
        baseMerge(e, t, n);
      })), kr = createAssigner((function(e, t, n, r) {
        baseMerge(e, t, n, r);
      })), Lr = flatRest((function(e, t) {
        var n = {};
        if (null == e) return n;
        var r = !1;
        t = arrayMap(t, (function(t) {
          return t = castPath(t, e), r || (r = t.length > 1), t;
        })), copyObject(e, getAllKeysIn(e), n), r && (n = baseClone(n, 7, customOmitClone));
        for (var a = t.length; a--; ) baseUnset(n, t[a]);
        return n;
      })), Rr = flatRest((function(e, t) {
        return null == e ? {} : function(e, t) {
          return basePickBy(e, t, (function(t, n) {
            return hasIn(e, n);
          }));
        }(e, t);
      }));
      /**
     * This method is like `_.merge` except that it accepts `customizer` which
     * is invoked to produce the merged values of the destination and source
     * properties. If `customizer` returns `undefined`, merging is handled by the
     * method instead. The `customizer` is invoked with six arguments:
     * (objValue, srcValue, key, object, source, stack).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} customizer The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   if (_.isArray(objValue)) {
     *     return objValue.concat(srcValue);
     *   }
     * }
     *
     * var object = { 'a': [1], 'b': [2] };
     * var other = { 'a': [3], 'b': [4] };
     *
     * _.mergeWith(object, other, customizer);
     * // => { 'a': [1, 3], 'b': [2, 4] }
     */      
      /**
     * Creates an object composed of the `object` properties `predicate` returns
     * truthy for. The predicate is invoked with two arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pickBy(object, _.isNumber);
     * // => { 'a': 1, 'c': 3 }
     */
      function pickBy(e, t) {
        if (null == e) return {};
        var n = arrayMap(getAllKeysIn(e), (function(e) {
          return [ e ];
        }));
        return t = getIteratee(t), basePickBy(e, n, (function(e, n) {
          return t(e, n[0]);
        }));
      }
      /**
     * This method is like `_.get` except that if the resolved value is a
     * function it's invoked with the `this` binding of its parent object and
     * its result is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to resolve.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
     *
     * _.result(object, 'a[0].b.c1');
     * // => 3
     *
     * _.result(object, 'a[0].b.c2');
     * // => 4
     *
     * _.result(object, 'a[0].b.c3', 'default');
     * // => 'default'
     *
     * _.result(object, 'a[0].b.c3', _.constant('default'));
     * // => 'default'
     */      
      /**
     * Creates an array of own enumerable string keyed-value pairs for `object`
     * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
     * entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entries
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairs(new Foo);
     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
     */
      var Or = createToPairs(keys), xr = createToPairs(keysIn);
      /**
     * Creates an array of own and inherited enumerable string keyed-value pairs
     * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
     * or set, its entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entriesIn
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairsIn(new Foo);
     * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
     */      
      /**
     * Creates an array of the own enumerable string keyed property values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.values(new Foo);
     * // => [1, 2] (iteration order is not guaranteed)
     *
     * _.values('hi');
     * // => ['h', 'i']
     */
      function values(e) {
        return null == e ? [] : baseValues(e, keys(e));
      }
      /**
     * Creates an array of the own and inherited enumerable string keyed property
     * values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.valuesIn(new Foo);
     * // => [1, 2, 3] (iteration order is not guaranteed)
     */      
      /*------------------------------------------------------------------------*/
      /**
     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the camel cased string.
     * @example
     *
     * _.camelCase('Foo Bar');
     * // => 'fooBar'
     *
     * _.camelCase('--foo-bar--');
     * // => 'fooBar'
     *
     * _.camelCase('__FOO_BAR__');
     * // => 'fooBar'
     */
      var Zr = createCompounder((function(e, t, n) {
        return t = t.toLowerCase(), e + (n ? capitalize(t) : t);
      }));
      /**
     * Converts the first character of `string` to upper case and the remaining
     * to lower case.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to capitalize.
     * @returns {string} Returns the capitalized string.
     * @example
     *
     * _.capitalize('FRED');
     * // => 'Fred'
     */      function capitalize(e) {
        return Mr(toString(e).toLowerCase());
      }
      /**
     * Deburrs `string` by converting
     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
     * letters to basic Latin letters and removing
     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to deburr.
     * @returns {string} Returns the deburred string.
     * @example
     *
     * _.deburr('déjà vu');
     * // => 'deja vu'
     */      function deburr(e) {
        return (e = toString(e)) && e.replace(me, Ct).replace(Je, "");
      }
      /**
     * Checks if `string` ends with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=string.length] The position to search up to.
     * @returns {boolean} Returns `true` if `string` ends with `target`,
     *  else `false`.
     * @example
     *
     * _.endsWith('abc', 'c');
     * // => true
     *
     * _.endsWith('abc', 'b');
     * // => false
     *
     * _.endsWith('abc', 'b', 2);
     * // => true
     */      
      /**
     * Converts `string` to
     * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the kebab cased string.
     * @example
     *
     * _.kebabCase('Foo Bar');
     * // => 'foo-bar'
     *
     * _.kebabCase('fooBar');
     * // => 'foo-bar'
     *
     * _.kebabCase('__FOO_BAR__');
     * // => 'foo-bar'
     */
      var jr = createCompounder((function(e, t, n) {
        return e + (n ? "-" : "") + t.toLowerCase();
      })), Fr = createCompounder((function(e, t, n) {
        return e + (n ? " " : "") + t.toLowerCase();
      })), zr = createCaseFirst("toLowerCase"), Br = createCompounder((function(e, t, n) {
        return e + (n ? "_" : "") + t.toLowerCase();
      })), Tr = createCompounder((function(e, t, n) {
        return e + (n ? " " : "") + Mr(t);
      })), Er = createCompounder((function(e, t, n) {
        return e + (n ? " " : "") + t.toUpperCase();
      })), Mr = createCaseFirst("toUpperCase");
      /**
     * Converts `string`, as space separated words, to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.lowerCase('--Foo-Bar--');
     * // => 'foo bar'
     *
     * _.lowerCase('fooBar');
     * // => 'foo bar'
     *
     * _.lowerCase('__FOO_BAR__');
     * // => 'foo bar'
     */      
      /**
     * Splits `string` into an array of its words.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {RegExp|string} [pattern] The pattern to match words.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the words of `string`.
     * @example
     *
     * _.words('fred, barney, & pebbles');
     * // => ['fred', 'barney', 'pebbles']
     *
     * _.words('fred, barney, & pebbles', /[^, ]+/g);
     * // => ['fred', 'barney', '&', 'pebbles']
     */
      function words(e, t, r) {
        return e = toString(e), (t = r ? n : t) === n ? function(e) {
          return nt.test(e);
        }(e) ? function(e) {
          return e.match(et) || [];
        }
        /*--------------------------------------------------------------------------*/
        /**
   * Create a new pristine `lodash` function using the `context` object.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Util
   * @param {Object} [context=root] The context object.
   * @returns {Function} Returns a new `lodash` function.
   * @example
   *
   * _.mixin({ 'foo': _.constant('foo') });
   *
   * var lodash = _.runInContext();
   * lodash.mixin({ 'bar': lodash.constant('bar') });
   *
   * _.isFunction(_.foo);
   * // => true
   * _.isFunction(_.bar);
   * // => false
   *
   * lodash.isFunction(lodash.foo);
   * // => false
   * lodash.isFunction(lodash.bar);
   * // => true
   *
   * // Create a suped-up `defer` in Node.js.
   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
   */ (e) : function(e) {
          return e.match(he) || [];
        }(e) : e.match(t) || [];
      }
      /*------------------------------------------------------------------------*/
      /**
     * Attempts to invoke `func`, returning either the result or the caught error
     * object. Any additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Function} func The function to attempt.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {*} Returns the `func` result or error object.
     * @example
     *
     * // Avoid throwing errors for invalid selectors.
     * var elements = _.attempt(function(selector) {
     *   return document.querySelectorAll(selector);
     * }, '>_>');
     *
     * if (_.isError(elements)) {
     *   elements = [];
     * }
     */      var Wr = baseRest((function(e, t) {
        try {
          return apply(e, n, t);
        } catch (e) {
          return isError(e) ? e : new Ae(e);
        }
      })), Pr = flatRest((function(e, t) {
        return arrayEach(t, (function(t) {
          t = toKey(t), baseAssignValue(e, t, Vn(e[t], e));
        })), e;
      }));
      /**
     * Binds methods of an object to the object itself, overwriting the existing
     * method.
     *
     * **Note:** This method doesn't set the "length" property of bound functions.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Object} object The object to bind and assign the bound methods to.
     * @param {...(string|string[])} methodNames The object method names to bind.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var view = {
     *   'label': 'docs',
     *   'click': function() {
     *     console.log('clicked ' + this.label);
     *   }
     * };
     *
     * _.bindAll(view, ['click']);
     * jQuery(element).on('click', view.click);
     * // => Logs 'clicked docs' when clicked.
     */      
      /**
     * Creates a function that returns `value`.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {*} value The value to return from the new function.
     * @returns {Function} Returns the new constant function.
     * @example
     *
     * var objects = _.times(2, _.constant({ 'a': 1 }));
     *
     * console.log(objects);
     * // => [{ 'a': 1 }, { 'a': 1 }]
     *
     * console.log(objects[0] === objects[1]);
     * // => true
     */
      function constant(e) {
        return function() {
          return e;
        };
      }
      /**
     * Checks `value` to determine whether a default value should be returned in
     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
     * or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Util
     * @param {*} value The value to check.
     * @param {*} defaultValue The default value.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * _.defaultTo(1, 10);
     * // => 1
     *
     * _.defaultTo(undefined, 10);
     * // => 10
     */      
      /**
     * Creates a function that returns the result of invoking the given functions
     * with the `this` binding of the created function, where each successive
     * invocation is supplied the return value of the previous.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flowRight
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flow([_.add, square]);
     * addSquare(1, 2);
     * // => 9
     */
      var Dr = createFlow(), Ur = createFlow(!0);
      /**
     * This method is like `_.flow` except that it creates a function that
     * invokes the given functions from right to left.
     *
     * @static
     * @since 3.0.0
     * @memberOf _
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flow
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flowRight([square, _.add]);
     * addSquare(1, 2);
     * // => 9
     */      
      /**
     * This method returns the first argument it receives.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'a': 1 };
     *
     * console.log(_.identity(object) === object);
     * // => true
     */
      function identity(e) {
        return e;
      }
      /**
     * Creates a function that invokes `func` with the arguments of the created
     * function. If `func` is a property name, the created function returns the
     * property value for a given element. If `func` is an array or object, the
     * created function returns `true` for elements that contain the equivalent
     * source properties, otherwise it returns `false`.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Util
     * @param {*} [func=_.identity] The value to convert to a callback.
     * @returns {Function} Returns the callback.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, _.iteratee(['user', 'fred']));
     * // => [{ 'user': 'fred', 'age': 40 }]
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, _.iteratee('user'));
     * // => ['barney', 'fred']
     *
     * // Create custom iteratee shorthands.
     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
     *     return func.test(string);
     *   };
     * });
     *
     * _.filter(['abc', 'def'], /ef/);
     * // => ['def']
     */      function iteratee(e) {
        return baseIteratee("function" == typeof e ? e : baseClone(e, 1));
      }
      /**
     * Creates a function that performs a partial deep comparison between a given
     * object and `source`, returning `true` if the given object has equivalent
     * property values, else `false`.
     *
     * **Note:** The created function is equivalent to `_.isMatch` with `source`
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * **Note:** Multiple values can be checked by combining several matchers
     * using `_.overSome`
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
     * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
     *
     * // Checking for several possible values
     * _.filter(objects, _.overSome([_.matches({ 'a': 1 }), _.matches({ 'a': 4 })]));
     * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
     */      
      /**
     * Creates a function that invokes the method at `path` of a given object.
     * Any additional arguments are provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': _.constant(2) } },
     *   { 'a': { 'b': _.constant(1) } }
     * ];
     *
     * _.map(objects, _.method('a.b'));
     * // => [2, 1]
     *
     * _.map(objects, _.method(['a', 'b']));
     * // => [2, 1]
     */
      var qr = baseRest((function(e, t) {
        return function(n) {
          return baseInvoke(n, e, t);
        };
      })), Nr = baseRest((function(e, t) {
        return function(n) {
          return baseInvoke(e, n, t);
        };
      }));
      /**
     * The opposite of `_.method`; this method creates a function that invokes
     * the method at a given path of `object`. Any additional arguments are
     * provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Object} object The object to query.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var array = _.times(3, _.constant),
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
     * // => [2, 0]
     */      
      /**
     * Adds all own enumerable string keyed function properties of a source
     * object to the destination object. If `object` is a function, then methods
     * are added to its prototype as well.
     *
     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
     * avoid conflicts caused by modifying the original.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Function|Object} [object=lodash] The destination object.
     * @param {Object} source The object of functions to add.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
     * @returns {Function|Object} Returns `object`.
     * @example
     *
     * function vowels(string) {
     *   return _.filter(string, function(v) {
     *     return /[aeiou]/i.test(v);
     *   });
     * }
     *
     * _.mixin({ 'vowels': vowels });
     * _.vowels('fred');
     * // => ['e']
     *
     * _('fred').vowels().value();
     * // => ['e']
     *
     * _.mixin({ 'vowels': vowels }, { 'chain': false });
     * _('fred').vowels();
     * // => ['e']
     */
      function mixin(e, t, n) {
        var r = keys(t), a = baseFunctions(t, r);
        null != n || isObject(t) && (a.length || !r.length) || (n = t, t = e, e = this, 
        a = baseFunctions(t, keys(t)));
        var i = !(isObject(n) && "chain" in n && !n.chain), o = isFunction(e);
        return arrayEach(a, (function(n) {
          var r = t[n];
          e[n] = r, o && (e.prototype[n] = function() {
            var t = this.__chain__;
            if (i || t) {
              var n = e(this.__wrapped__), a = n.__actions__ = copyArray(this.__actions__);
              return a.push({
                func: r,
                args: arguments,
                thisArg: e
              }), n.__chain__ = t, n;
            }
            return r.apply(e, arrayPush([ this.value() ], arguments));
          });
        })), e;
      }
      /**
     * Reverts the `_` variable to its previous value and returns a reference to
     * the `lodash` function.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @returns {Function} Returns the `lodash` function.
     * @example
     *
     * var lodash = _.noConflict();
     */      
      /**
     * This method returns `undefined`.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Util
     * @example
     *
     * _.times(2, _.noop);
     * // => [undefined, undefined]
     */
      function noop() {
        // No operation performed.
      }
      /**
     * Creates a function that gets the argument at index `n`. If `n` is negative,
     * the nth argument from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [n=0] The index of the argument to return.
     * @returns {Function} Returns the new pass-thru function.
     * @example
     *
     * var func = _.nthArg(1);
     * func('a', 'b', 'c', 'd');
     * // => 'b'
     *
     * var func = _.nthArg(-2);
     * func('a', 'b', 'c', 'd');
     * // => 'c'
     */      
      /**
     * Creates a function that invokes `iteratees` with the arguments it receives
     * and returns their results.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to invoke.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.over([Math.max, Math.min]);
     *
     * func(1, 2, 3, 4);
     * // => [4, 1]
     */
      var Hr = createOver(arrayMap), Gr = createOver(arrayEvery), Kr = createOver(arraySome);
      /**
     * Creates a function that checks if **all** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * Following shorthands are possible for providing predicates.
     * Pass an `Object` and it will be used as an parameter for `_.matches` to create the predicate.
     * Pass an `Array` of parameters for `_.matchesProperty` and the predicate will be created using them.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overEvery([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => false
     *
     * func(NaN);
     * // => false
     */      
      /**
     * Creates a function that returns the value at `path` of a given object.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': 2 } },
     *   { 'a': { 'b': 1 } }
     * ];
     *
     * _.map(objects, _.property('a.b'));
     * // => [2, 1]
     *
     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
     * // => [1, 2]
     */
      function property(e) {
        return isKey(e) ? baseProperty(toKey(e)) : function(e) {
          return function(t) {
            return baseGet(t, e);
          };
        }(e);
      }
      /**
     * The opposite of `_.property`; this method creates a function that returns
     * the value at a given path of `object`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} object The object to query.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var array = [0, 1, 2],
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
     * // => [2, 0]
     */      
      /**
     * Creates an array of numbers (positive and/or negative) progressing from
     * `start` up to, but not including, `end`. A step of `-1` is used if a negative
     * `start` is specified without an `end` or `step`. If `end` is not specified,
     * it's set to `start` with `start` then set to `0`.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.rangeRight
     * @example
     *
     * _.range(4);
     * // => [0, 1, 2, 3]
     *
     * _.range(-4);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 5);
     * // => [1, 2, 3, 4]
     *
     * _.range(0, 20, 5);
     * // => [0, 5, 10, 15]
     *
     * _.range(0, -4, -1);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.range(0);
     * // => []
     */
      var Vr = createRange(), Xr = createRange(!0);
      /**
     * This method is like `_.range` except that it populates values in
     * descending order.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.range
     * @example
     *
     * _.rangeRight(4);
     * // => [3, 2, 1, 0]
     *
     * _.rangeRight(-4);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 5);
     * // => [4, 3, 2, 1]
     *
     * _.rangeRight(0, 20, 5);
     * // => [15, 10, 5, 0]
     *
     * _.rangeRight(0, -4, -1);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.rangeRight(0);
     * // => []
     */      
      /**
     * This method returns a new empty array.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Array} Returns the new empty array.
     * @example
     *
     * var arrays = _.times(2, _.stubArray);
     *
     * console.log(arrays);
     * // => [[], []]
     *
     * console.log(arrays[0] === arrays[1]);
     * // => false
     */
      function stubArray() {
        return [];
      }
      /**
     * This method returns `false`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `false`.
     * @example
     *
     * _.times(2, _.stubFalse);
     * // => [false, false]
     */      function stubFalse() {
        return !1;
      }
      /**
     * This method returns a new empty object.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Object} Returns the new empty object.
     * @example
     *
     * var objects = _.times(2, _.stubObject);
     *
     * console.log(objects);
     * // => [{}, {}]
     *
     * console.log(objects[0] === objects[1]);
     * // => false
     */      
      /*------------------------------------------------------------------------*/
      /**
     * Adds two numbers.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {number} augend The first number in an addition.
     * @param {number} addend The second number in an addition.
     * @returns {number} Returns the total.
     * @example
     *
     * _.add(6, 4);
     * // => 10
     */
      var Yr, $r = createMathOperation((function(e, t) {
        return e + t;
      }), 0), Jr = createRound("ceil"), Qr = createMathOperation((function(e, t) {
        return e / t;
      }), 1), ea = createRound("floor"), ta = createMathOperation((function(e, t) {
        return e * t;
      }), 1), na = createRound("round"), ra = createMathOperation((function(e, t) {
        return e - t;
      }), 0);
      /**
     * Computes `number` rounded up to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round up.
     * @param {number} [precision=0] The precision to round up to.
     * @returns {number} Returns the rounded up number.
     * @example
     *
     * _.ceil(4.006);
     * // => 5
     *
     * _.ceil(6.004, 2);
     * // => 6.01
     *
     * _.ceil(6040, -2);
     * // => 6100
     */      
      /*------------------------------------------------------------------------*/
      // Add methods that return wrapped values in chain sequences.
      return lodash.after = 
      /*------------------------------------------------------------------------*/
      /**
     * The opposite of `_.before`; this method creates a function that invokes
     * `func` once it's called `n` or more times.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {number} n The number of calls before `func` is invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var saves = ['profile', 'settings'];
     *
     * var done = _.after(saves.length, function() {
     *   console.log('done saving!');
     * });
     *
     * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
     * // => Logs 'done saving!' after the two async saves have completed.
     */
      function(e, t) {
        if ("function" != typeof t) throw new xe(r);
        return e = toInteger(e), function() {
          if (--e < 1) return t.apply(this, arguments);
        };
      }, lodash.ary = ary, lodash.assign = gr, lodash.assignIn = yr, lodash.assignInWith = br, 
      lodash.assignWith = vr, lodash.at = _r, lodash.before = before, lodash.bind = Vn, 
      lodash.bindAll = Pr, lodash.bindKey = Xn, lodash.castArray = 
      /*------------------------------------------------------------------------*/
      /**
     * Casts `value` as an array if it's not one.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Lang
     * @param {*} value The value to inspect.
     * @returns {Array} Returns the cast array.
     * @example
     *
     * _.castArray(1);
     * // => [1]
     *
     * _.castArray({ 'a': 1 });
     * // => [{ 'a': 1 }]
     *
     * _.castArray('abc');
     * // => ['abc']
     *
     * _.castArray(null);
     * // => [null]
     *
     * _.castArray(undefined);
     * // => [undefined]
     *
     * _.castArray();
     * // => []
     *
     * var array = [1, 2, 3];
     * console.log(_.castArray(array) === array);
     * // => true
     */
      function() {
        if (!arguments.length) return [];
        var e = arguments[0];
        return ir(e) ? e : [ e ];
      }
      /**
     * Creates a shallow clone of `value`.
     *
     * **Note:** This method is loosely based on the
     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
     * and supports cloning arrays, array buffers, booleans, date objects, maps,
     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
     * arrays. The own enumerable properties of `arguments` objects are cloned
     * as plain objects. An empty object is returned for uncloneable values such
     * as error objects, functions, DOM nodes, and WeakMaps.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to clone.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeep
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var shallow = _.clone(objects);
     * console.log(shallow[0] === objects[0]);
     * // => true
     */ , lodash.chain = chain, lodash.chunk = function(e, t, r) {
        t = (r ? isIterateeCall(e, t, r) : t === n) ? 1 : Ft(toInteger(t), 0);
        var a = null == e ? 0 : e.length;
        if (!a || t < 1) return [];
        for (var i = 0, s = 0, u = o(yt(a / t)); i < a; ) u[s++] = baseSlice(e, i, i += t);
        return u;
      }
      /**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are falsey.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to compact.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */ , lodash.compact = function(e) {
        for (var t = -1, n = null == e ? 0 : e.length, r = 0, a = []; ++t < n; ) {
          var i = e[t];
          i && (a[r++] = i);
        }
        return a;
      }
      /**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to concatenate.
     * @param {...*} [values] The values to concatenate.
     * @returns {Array} Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */ , lodash.concat = function() {
        var e = arguments.length;
        if (!e) return [];
        for (var t = o(e - 1), n = arguments[0], r = e; r--; ) t[r - 1] = arguments[r];
        return arrayPush(ir(n) ? copyArray(n) : [ n ], baseFlatten(t, 1));
      }, lodash.cond = 
      /**
     * Creates a function that iterates over `pairs` and invokes the corresponding
     * function of the first predicate to return truthy. The predicate-function
     * pairs are invoked with the `this` binding and arguments of the created
     * function.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Array} pairs The predicate-function pairs.
     * @returns {Function} Returns the new composite function.
     * @example
     *
     * var func = _.cond([
     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
     *   [_.stubTrue,                      _.constant('no match')]
     * ]);
     *
     * func({ 'a': 1, 'b': 2 });
     * // => 'matches A'
     *
     * func({ 'a': 0, 'b': 1 });
     * // => 'matches B'
     *
     * func({ 'a': '1', 'b': '2' });
     * // => 'no match'
     */
      function(e) {
        var t = null == e ? 0 : e.length, n = getIteratee();
        return e = t ? arrayMap(e, (function(e) {
          if ("function" != typeof e[1]) throw new xe(r);
          return [ n(e[0]), e[1] ];
        })) : [], baseRest((function(n) {
          for (var r = -1; ++r < t; ) {
            var a = e[r];
            if (apply(a[0], this, n)) return apply(a[1], this, n);
          }
        }));
      }
      /**
     * Creates a function that invokes the predicate properties of `source` with
     * the corresponding property values of a given object, returning `true` if
     * all predicates return truthy, else `false`.
     *
     * **Note:** The created function is equivalent to `_.conformsTo` with
     * `source` partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 2, 'b': 1 },
     *   { 'a': 1, 'b': 2 }
     * ];
     *
     * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
     * // => [{ 'a': 1, 'b': 2 }]
     */ , lodash.conforms = function(e) {
        return function(e) {
          var t = keys(e);
          return function(n) {
            return baseConformsTo(n, e, t);
          };
        }(baseClone(e, 1));
      }, lodash.constant = constant, lodash.countBy = Wn, lodash.create = 
      /**
     * Creates an object that inherits from the `prototype` object. If a
     * `properties` object is given, its own enumerable string keyed properties
     * are assigned to the created object.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Object
     * @param {Object} prototype The object to inherit from.
     * @param {Object} [properties] The properties to assign to the object.
     * @returns {Object} Returns the new object.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * function Circle() {
     *   Shape.call(this);
     * }
     *
     * Circle.prototype = _.create(Shape.prototype, {
     *   'constructor': Circle
     * });
     *
     * var circle = new Circle;
     * circle instanceof Circle;
     * // => true
     *
     * circle instanceof Shape;
     * // => true
     */
      function(e, t) {
        var n = tn(e);
        return null == t ? n : baseAssign(n, t);
      }
      /**
     * Assigns own and inherited enumerable string keyed properties of source
     * objects to the destination object for all destination properties that
     * resolve to `undefined`. Source objects are applied from left to right.
     * Once a property is set, additional values of the same property are ignored.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaultsDeep
     * @example
     *
     * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */ , lodash.curry = 
      /**
     * Creates a function that accepts arguments of `func` and either invokes
     * `func` returning its result, if at least `arity` number of arguments have
     * been provided, or returns a function that accepts the remaining `func`
     * arguments, and so on. The arity of `func` may be specified if `func.length`
     * is not sufficient.
     *
     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curry(abc);
     *
     * curried(1)(2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(1)(_, 3)(2);
     * // => [1, 2, 3]
     */
      function curry(e, t, r) {
        var a = createWrap(e, 8, n, n, n, n, n, t = r ? n : t);
        return a.placeholder = curry.placeholder, a;
      }
      /**
     * This method is like `_.curry` except that arguments are applied to `func`
     * in the manner of `_.partialRight` instead of `_.partial`.
     *
     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curryRight(abc);
     *
     * curried(3)(2)(1);
     * // => [1, 2, 3]
     *
     * curried(2, 3)(1);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(3)(1, _)(2);
     * // => [1, 2, 3]
     */ , lodash.curryRight = function curryRight(e, t, r) {
        var a = createWrap(e, s, n, n, n, n, n, t = r ? n : t);
        return a.placeholder = curryRight.placeholder, a;
      }, lodash.debounce = debounce, lodash.defaults = mr, lodash.defaultsDeep = Ir, lodash.defer = Yn, 
      lodash.delay = $n, lodash.difference = In, lodash.differenceBy = Sn, lodash.differenceWith = wn, 
      lodash.drop = 
      /**
     * Creates a slice of `array` with `n` elements dropped from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.drop([1, 2, 3]);
     * // => [2, 3]
     *
     * _.drop([1, 2, 3], 2);
     * // => [3]
     *
     * _.drop([1, 2, 3], 5);
     * // => []
     *
     * _.drop([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
      function(e, t, r) {
        var a = null == e ? 0 : e.length;
        return a ? baseSlice(e, (t = r || t === n ? 1 : toInteger(t)) < 0 ? 0 : t, a) : [];
      }
      /**
     * Creates a slice of `array` with `n` elements dropped from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropRight([1, 2, 3]);
     * // => [1, 2]
     *
     * _.dropRight([1, 2, 3], 2);
     * // => [1]
     *
     * _.dropRight([1, 2, 3], 5);
     * // => []
     *
     * _.dropRight([1, 2, 3], 0);
     * // => [1, 2, 3]
     */ , lodash.dropRight = function(e, t, r) {
        var a = null == e ? 0 : e.length;
        return a ? baseSlice(e, 0, (t = a - (t = r || t === n ? 1 : toInteger(t))) < 0 ? 0 : t) : [];
      }
      /**
     * Creates a slice of `array` excluding elements dropped from the end.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.dropRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropRightWhile(users, ['active', false]);
     * // => objects for ['barney']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropRightWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */ , lodash.dropRightWhile = function(e, t) {
        return e && e.length ? baseWhile(e, getIteratee(t, 3), !0, !0) : [];
      }
      /**
     * Creates a slice of `array` excluding elements dropped from the beginning.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.dropWhile(users, function(o) { return !o.active; });
     * // => objects for ['pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropWhile(users, ['active', false]);
     * // => objects for ['pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */ , lodash.dropWhile = function(e, t) {
        return e && e.length ? baseWhile(e, getIteratee(t, 3), !0) : [];
      }
      /**
     * Fills elements of `array` with `value` from `start` up to, but not
     * including, `end`.
     *
     * **Note:** This method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Array
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.fill(array, 'a');
     * console.log(array);
     * // => ['a', 'a', 'a']
     *
     * _.fill(Array(3), 2);
     * // => [2, 2, 2]
     *
     * _.fill([4, 6, 8, 10], '*', 1, 3);
     * // => [4, '*', '*', 10]
     */ , lodash.fill = function(e, t, r, a) {
        var i = null == e ? 0 : e.length;
        return i ? (r && "number" != typeof r && isIterateeCall(e, t, r) && (r = 0, a = i), 
        function(e, t, r, a) {
          var i = e.length;
          for ((r = toInteger(r)) < 0 && (r = -r > i ? 0 : i + r), (a = a === n || a > i ? i : toInteger(a)) < 0 && (a += i), 
          a = r > a ? 0 : toLength(a); r < a; ) e[r++] = t;
          return e;
        }(e, t, r, a)) : [];
      }, lodash.filter = 
      /**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * **Note:** Unlike `_.remove`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.reject
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, { 'age': 36, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.filter(users, 'active');
     * // => objects for ['barney']
     *
     * // Combining several predicates using `_.overEvery` or `_.overSome`.
     * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
     * // => objects for ['fred', 'barney']
     */
      function(e, t) {
        return (ir(e) ? arrayFilter : baseFilter)(e, getIteratee(t, 3));
      }
      /**
     * Iterates over elements of `collection`, returning the first element
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': true },
     *   { 'user': 'fred',    'age': 40, 'active': false },
     *   { 'user': 'pebbles', 'age': 1,  'active': true }
     * ];
     *
     * _.find(users, function(o) { return o.age < 40; });
     * // => object for 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.find(users, { 'age': 1, 'active': true });
     * // => object for 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.find(users, ['active', false]);
     * // => object for 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.find(users, 'active');
     * // => object for 'barney'
     */ , lodash.flatMap = 
      /**
     * Creates a flattened array of values by running each element in `collection`
     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
     * with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [n, n];
     * }
     *
     * _.flatMap([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
      function(e, t) {
        return baseFlatten(map(e, t), 1);
      }
      /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDeep([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */ , lodash.flatMapDeep = function(e, t) {
        return baseFlatten(map(e, t), f);
      }
      /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDepth([1, 2], duplicate, 2);
     * // => [[1, 1], [2, 2]]
     */ , lodash.flatMapDepth = function(e, t, r) {
        return r = r === n ? 1 : toInteger(r), baseFlatten(map(e, t), r);
      }, lodash.flatten = flatten, lodash.flattenDeep = function(e) {
        return null != e && e.length ? baseFlatten(e, f) : [];
      }
      /**
     * Recursively flatten `array` up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * var array = [1, [2, [3, [4]], 5]];
     *
     * _.flattenDepth(array, 1);
     * // => [1, 2, [3, [4]], 5]
     *
     * _.flattenDepth(array, 2);
     * // => [1, 2, 3, [4], 5]
     */ , lodash.flattenDepth = function(e, t) {
        return null != e && e.length ? baseFlatten(e, t = t === n ? 1 : toInteger(t)) : [];
      }
      /**
     * The inverse of `_.toPairs`; this method returns an object composed
     * from key-value `pairs`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} pairs The key-value pairs.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.fromPairs([['a', 1], ['b', 2]]);
     * // => { 'a': 1, 'b': 2 }
     */ , lodash.flip = 
      /**
     * Creates a function that invokes `func` with arguments reversed.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to flip arguments for.
     * @returns {Function} Returns the new flipped function.
     * @example
     *
     * var flipped = _.flip(function() {
     *   return _.toArray(arguments);
     * });
     *
     * flipped('a', 'b', 'c', 'd');
     * // => ['d', 'c', 'b', 'a']
     */
      function(e) {
        return createWrap(e, 512);
      }, lodash.flow = Dr, lodash.flowRight = Ur, lodash.fromPairs = function(e) {
        for (var t = -1, n = null == e ? 0 : e.length, r = {}; ++t < n; ) {
          var a = e[t];
          r[a[0]] = a[1];
        }
        return r;
      }, lodash.functions = 
      /**
     * Creates an array of function property names from own enumerable properties
     * of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functionsIn
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functions(new Foo);
     * // => ['a', 'b']
     */
      function(e) {
        return null == e ? [] : baseFunctions(e, keys(e));
      }
      /**
     * Creates an array of function property names from own and inherited
     * enumerable properties of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functions
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functionsIn(new Foo);
     * // => ['a', 'b', 'c']
     */ , lodash.functionsIn = function(e) {
        return null == e ? [] : baseFunctions(e, keysIn(e));
      }, lodash.groupBy = Un, lodash.initial = 
      /**
     * Gets all but the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.initial([1, 2, 3]);
     * // => [1, 2]
     */
      function(e) {
        return null != e && e.length ? baseSlice(e, 0, -1) : [];
      }, lodash.intersection = An, lodash.intersectionBy = Cn, lodash.intersectionWith = kn, 
      lodash.invert = Sr, lodash.invertBy = wr, lodash.invokeMap = qn, lodash.iteratee = iteratee, 
      lodash.keyBy = Nn, lodash.keys = keys, lodash.keysIn = keysIn, lodash.map = map, 
      lodash.mapKeys = function(e, t) {
        var n = {};
        return t = getIteratee(t, 3), baseForOwn(e, (function(e, r, a) {
          baseAssignValue(n, t(e, r, a), e);
        })), n;
      }
      /**
     * Creates an object with the same keys as `object` and values generated
     * by running each own enumerable string keyed property of `object` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapKeys
     * @example
     *
     * var users = {
     *   'fred':    { 'user': 'fred',    'age': 40 },
     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
     * };
     *
     * _.mapValues(users, function(o) { return o.age; });
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     *
     * // The `_.property` iteratee shorthand.
     * _.mapValues(users, 'age');
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     */ , lodash.mapValues = function(e, t) {
        var n = {};
        return t = getIteratee(t, 3), baseForOwn(e, (function(e, r, a) {
          baseAssignValue(n, r, t(e, r, a));
        })), n;
      }, lodash.matches = function(e) {
        return baseMatches(baseClone(e, 1));
      }
      /**
     * Creates a function that performs a partial deep comparison between the
     * value at `path` of a given object to `srcValue`, returning `true` if the
     * object value is equivalent, else `false`.
     *
     * **Note:** Partial comparisons will match empty array and empty object
     * `srcValue` values against any array or object value, respectively. See
     * `_.isEqual` for a list of supported value comparisons.
     *
     * **Note:** Multiple values can be checked by combining several matchers
     * using `_.overSome`
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.find(objects, _.matchesProperty('a', 4));
     * // => { 'a': 4, 'b': 5, 'c': 6 }
     *
     * // Checking for several possible values
     * _.filter(objects, _.overSome([_.matchesProperty('a', 1), _.matchesProperty('a', 4)]));
     * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
     */ , lodash.matchesProperty = function(e, t) {
        return baseMatchesProperty(e, baseClone(t, 1));
      }, lodash.memoize = memoize, lodash.merge = Cr, lodash.mergeWith = kr, lodash.method = qr, 
      lodash.methodOf = Nr, lodash.mixin = mixin, lodash.negate = negate, lodash.nthArg = function(e) {
        return e = toInteger(e), baseRest((function(t) {
          return baseNth(t, e);
        }));
      }, lodash.omit = Lr, lodash.omitBy = 
      /**
     * The opposite of `_.pickBy`; this method creates an object composed of
     * the own and inherited enumerable string keyed properties of `object` that
     * `predicate` doesn't return truthy for. The predicate is invoked with two
     * arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omitBy(object, _.isNumber);
     * // => { 'b': '2' }
     */
      function(e, t) {
        return pickBy(e, negate(getIteratee(t)));
      }
      /**
     * Creates an object composed of the picked `object` properties.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pick(object, ['a', 'c']);
     * // => { 'a': 1, 'c': 3 }
     */ , lodash.once = function(e) {
        return before(2, e);
      }, lodash.orderBy = function(e, t, r, a) {
        return null == e ? [] : (ir(t) || (t = null == t ? [] : [ t ]), ir(r = a ? n : r) || (r = null == r ? [] : [ r ]), 
        baseOrderBy(e, t, r));
      }, lodash.over = Hr, lodash.overArgs = Jn, lodash.overEvery = Gr, lodash.overSome = Kr, 
      lodash.partial = Qn, lodash.partialRight = er, lodash.partition = Hn, lodash.pick = Rr, 
      lodash.pickBy = pickBy, lodash.property = property, lodash.propertyOf = function(e) {
        return function(t) {
          return null == e ? n : baseGet(e, t);
        };
      }, lodash.pull = Ln, lodash.pullAll = pullAll, lodash.pullAllBy = function(e, t, n) {
        return e && e.length && t && t.length ? basePullAll(e, t, getIteratee(n, 2)) : e;
      }
      /**
     * This method is like `_.pullAll` except that it accepts `comparator` which
     * is invoked to compare elements of `array` to `values`. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */ , lodash.pullAllWith = function(e, t, r) {
        return e && e.length && t && t.length ? basePullAll(e, t, n, r) : e;
      }, lodash.pullAt = Rn, lodash.range = Vr, lodash.rangeRight = Xr, lodash.rearg = tr, 
      lodash.reject = 
      /**
     * The opposite of `_.filter`; this method returns the elements of `collection`
     * that `predicate` does **not** return truthy for.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.filter
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': true }
     * ];
     *
     * _.reject(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.reject(users, { 'age': 40, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.reject(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.reject(users, 'active');
     * // => objects for ['barney']
     */
      function(e, t) {
        return (ir(e) ? arrayFilter : baseFilter)(e, negate(getIteratee(t, 3)));
      }
      /**
     * Gets a random element from `collection`.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     * @example
     *
     * _.sample([1, 2, 3, 4]);
     * // => 2
     */ , lodash.remove = function(e, t) {
        var n = [];
        if (!e || !e.length) return n;
        var r = -1, a = [], i = e.length;
        for (t = getIteratee(t, 3); ++r < i; ) {
          var o = e[r];
          t(o, r, e) && (n.push(o), a.push(r));
        }
        return basePullAt(e, a), n;
      }, lodash.rest = 
      /**
     * Creates a function that invokes `func` with the `this` binding of the
     * created function and arguments from `start` and beyond provided as
     * an array.
     *
     * **Note:** This method is based on the
     * [rest parameter](https://mdn.io/rest_parameters).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.rest(function(what, names) {
     *   return what + ' ' + _.initial(names).join(', ') +
     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
     * });
     *
     * say('hello', 'fred', 'barney', 'pebbles');
     * // => 'hello fred, barney, & pebbles'
     */
      function(e, t) {
        if ("function" != typeof e) throw new xe(r);
        return baseRest(e, t = t === n ? t : toInteger(t));
      }
      /**
     * Creates a function that invokes `func` with the `this` binding of the
     * create function and an array of arguments much like
     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
     *
     * **Note:** This method is based on the
     * [spread operator](https://mdn.io/spread_operator).
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Function
     * @param {Function} func The function to spread arguments over.
     * @param {number} [start=0] The start position of the spread.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.spread(function(who, what) {
     *   return who + ' says ' + what;
     * });
     *
     * say(['fred', 'hello']);
     * // => 'fred says hello'
     *
     * var numbers = Promise.all([
     *   Promise.resolve(40),
     *   Promise.resolve(36)
     * ]);
     *
     * numbers.then(_.spread(function(x, y) {
     *   return x + y;
     * }));
     * // => a Promise of 76
     */ , lodash.reverse = reverse, lodash.sampleSize = 
      /**
     * Gets `n` random elements at unique keys from `collection` up to the
     * size of `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @param {number} [n=1] The number of elements to sample.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the random elements.
     * @example
     *
     * _.sampleSize([1, 2, 3], 2);
     * // => [3, 1]
     *
     * _.sampleSize([1, 2, 3], 4);
     * // => [2, 3, 1]
     */
      function(e, t, r) {
        return t = (r ? isIterateeCall(e, t, r) : t === n) ? 1 : toInteger(t), (ir(e) ? arraySampleSize : baseSampleSize)(e, t);
      }
      /**
     * Creates an array of shuffled values, using a version of the
     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     * @example
     *
     * _.shuffle([1, 2, 3, 4]);
     * // => [4, 1, 3, 2]
     */ , lodash.set = 
      /**
     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
     * it's created. Arrays are created for missing index properties while objects
     * are created for all other missing properties. Use `_.setWith` to customize
     * `path` creation.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.set(object, 'a[0].b.c', 4);
     * console.log(object.a[0].b.c);
     * // => 4
     *
     * _.set(object, ['x', '0', 'y', 'z'], 5);
     * console.log(object.x[0].y.z);
     * // => 5
     */
      function(e, t, n) {
        return null == e ? e : baseSet(e, t, n);
      }
      /**
     * This method is like `_.set` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.setWith(object, '[0][1]', 'a', Object);
     * // => { '0': { '1': 'a' } }
     */ , lodash.setWith = function(e, t, r, a) {
        return a = "function" == typeof a ? a : n, null == e ? e : baseSet(e, t, r, a);
      }, lodash.shuffle = function(e) {
        return (ir(e) ? arrayShuffle : baseShuffle)(e);
      }
      /**
     * Gets the size of `collection` by returning its length for array-like
     * values or the number of own enumerable string keyed properties for objects.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @returns {number} Returns the collection size.
     * @example
     *
     * _.size([1, 2, 3]);
     * // => 3
     *
     * _.size({ 'a': 1, 'b': 2 });
     * // => 2
     *
     * _.size('pebbles');
     * // => 7
     */ , lodash.slice = function(e, t, r) {
        var a = null == e ? 0 : e.length;
        return a ? (r && "number" != typeof r && isIterateeCall(e, t, r) ? (t = 0, r = a) : (t = null == t ? 0 : toInteger(t), 
        r = r === n ? a : toInteger(r)), baseSlice(e, t, r)) : [];
      }
      /**
     * Uses a binary search to determine the lowest index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     */ , lodash.sortBy = Gn, lodash.sortedUniq = 
      /**
     * This method is like `_.uniq` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniq([1, 1, 2]);
     * // => [1, 2]
     */
      function(e) {
        return e && e.length ? baseSortedUniq(e) : [];
      }
      /**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.3]
     */ , lodash.sortedUniqBy = function(e, t) {
        return e && e.length ? baseSortedUniq(e, getIteratee(t, 2)) : [];
      }
      /**
     * Gets all but the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.tail([1, 2, 3]);
     * // => [2, 3]
     */ , lodash.split = 
      /**
     * Splits `string` by `separator`.
     *
     * **Note:** This method is based on
     * [`String#split`](https://mdn.io/String/split).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to split.
     * @param {RegExp|string} separator The separator pattern to split by.
     * @param {number} [limit] The length to truncate results to.
     * @returns {Array} Returns the string segments.
     * @example
     *
     * _.split('a-b-c', '-', 2);
     * // => ['a', 'b']
     */
      function(e, t, r) {
        return r && "number" != typeof r && isIterateeCall(e, t, r) && (t = r = n), (r = r === n ? g : r >>> 0) ? (e = toString(e)) && ("string" == typeof t || null != t && !lr(t)) && !(t = baseToString(t)) && hasUnicode(e) ? castSlice(stringToArray(e), 0, r) : e.split(t, r) : [];
      }
      /**
     * Converts `string` to
     * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
     *
     * @static
     * @memberOf _
     * @since 3.1.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the start cased string.
     * @example
     *
     * _.startCase('--foo-bar--');
     * // => 'Foo Bar'
     *
     * _.startCase('fooBar');
     * // => 'Foo Bar'
     *
     * _.startCase('__FOO_BAR__');
     * // => 'FOO BAR'
     */ , lodash.spread = function(e, t) {
        if ("function" != typeof e) throw new xe(r);
        return t = null == t ? 0 : Ft(toInteger(t), 0), baseRest((function(n) {
          var r = n[t], a = castSlice(n, 0, t);
          return r && arrayPush(a, r), apply(e, this, a);
        }));
      }
      /**
     * Creates a throttled function that only invokes `func` at most once per
     * every `wait` milliseconds. The throttled function comes with a `cancel`
     * method to cancel delayed `func` invocations and a `flush` method to
     * immediately invoke them. Provide `options` to indicate whether `func`
     * should be invoked on the leading and/or trailing edge of the `wait`
     * timeout. The `func` is invoked with the last arguments provided to the
     * throttled function. Subsequent calls to the throttled function return the
     * result of the last `func` invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the throttled function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.throttle` and `_.debounce`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to throttle.
     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=true]
     *  Specify invoking on the leading edge of the timeout.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // Avoid excessively updating the position while scrolling.
     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
     *
     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
     * jQuery(element).on('click', throttled);
     *
     * // Cancel the trailing throttled invocation.
     * jQuery(window).on('popstate', throttled.cancel);
     */ , lodash.tail = function(e) {
        var t = null == e ? 0 : e.length;
        return t ? baseSlice(e, 1, t) : [];
      }
      /**
     * Creates a slice of `array` with `n` elements taken from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.take([1, 2, 3]);
     * // => [1]
     *
     * _.take([1, 2, 3], 2);
     * // => [1, 2]
     *
     * _.take([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.take([1, 2, 3], 0);
     * // => []
     */ , lodash.take = function(e, t, r) {
        return e && e.length ? baseSlice(e, 0, (t = r || t === n ? 1 : toInteger(t)) < 0 ? 0 : t) : [];
      }
      /**
     * Creates a slice of `array` with `n` elements taken from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeRight([1, 2, 3]);
     * // => [3]
     *
     * _.takeRight([1, 2, 3], 2);
     * // => [2, 3]
     *
     * _.takeRight([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.takeRight([1, 2, 3], 0);
     * // => []
     */ , lodash.takeRight = function(e, t, r) {
        var a = null == e ? 0 : e.length;
        return a ? baseSlice(e, (t = a - (t = r || t === n ? 1 : toInteger(t))) < 0 ? 0 : t, a) : [];
      }
      /**
     * Creates a slice of `array` with elements taken from the end. Elements are
     * taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.takeRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeRightWhile(users, ['active', false]);
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeRightWhile(users, 'active');
     * // => []
     */ , lodash.takeRightWhile = function(e, t) {
        return e && e.length ? baseWhile(e, getIteratee(t, 3), !1, !0) : [];
      }
      /**
     * Creates a slice of `array` with elements taken from the beginning. Elements
     * are taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.takeWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeWhile(users, ['active', false]);
     * // => objects for ['barney', 'fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeWhile(users, 'active');
     * // => []
     */ , lodash.takeWhile = function(e, t) {
        return e && e.length ? baseWhile(e, getIteratee(t, 3)) : [];
      }, lodash.tap = function(e, t) {
        return t(e), e;
      }, lodash.throttle = function(e, t, n) {
        var a = !0, i = !0;
        if ("function" != typeof e) throw new xe(r);
        return isObject(n) && (a = "leading" in n ? !!n.leading : a, i = "trailing" in n ? !!n.trailing : i), 
        debounce(e, t, {
          leading: a,
          maxWait: t,
          trailing: i
        });
      }
      /**
     * Creates a function that accepts up to one argument, ignoring any
     * additional arguments.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.unary(parseInt));
     * // => [6, 8, 10]
     */ , lodash.thru = thru, lodash.toArray = toArray, lodash.toPairs = Or, lodash.toPairsIn = xr, 
      lodash.toPath = 
      /**
     * Converts `value` to a property path array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {*} value The value to convert.
     * @returns {Array} Returns the new property path array.
     * @example
     *
     * _.toPath('a.b.c');
     * // => ['a', 'b', 'c']
     *
     * _.toPath('a[0].b.c');
     * // => ['a', '0', 'b', 'c']
     */
      function(e) {
        return ir(e) ? arrayMap(e, toKey) : isSymbol(e) ? [ e ] : copyArray(mn(toString(e)));
      }
      /**
     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {string} [prefix=''] The value to prefix the ID with.
     * @returns {string} Returns the unique ID.
     * @example
     *
     * _.uniqueId('contact_');
     * // => 'contact_104'
     *
     * _.uniqueId();
     * // => '105'
     */ , lodash.toPlainObject = toPlainObject, lodash.transform = 
      /**
     * An alternative to `_.reduce`; this method transforms `object` to a new
     * `accumulator` object which is the result of running each of its own
     * enumerable string keyed properties thru `iteratee`, with each invocation
     * potentially mutating the `accumulator` object. If `accumulator` is not
     * provided, a new object with the same `[[Prototype]]` will be used. The
     * iteratee is invoked with four arguments: (accumulator, value, key, object).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The custom accumulator value.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * _.transform([2, 3, 4], function(result, n) {
     *   result.push(n *= n);
     *   return n % 2 == 0;
     * }, []);
     * // => [4, 9]
     *
     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] }
     */
      function(e, t, n) {
        var r = ir(e), a = r || sr(e) || fr(e);
        if (t = getIteratee(t, 4), null == n) {
          var i = e && e.constructor;
          n = a ? r ? new i : [] : isObject(e) && isFunction(i) ? tn(Ke(e)) : {};
        }
        return (a ? arrayEach : baseForOwn)(e, (function(e, r, a) {
          return t(n, e, r, a);
        })), n;
      }
      /**
     * Removes the property at `path` of `object`.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 7 } }] };
     * _.unset(object, 'a[0].b.c');
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     *
     * _.unset(object, ['a', '0', 'b', 'c']);
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     */ , lodash.unary = function(e) {
        return ary(e, 1);
      }
      /**
     * Creates a function that provides `value` to `wrapper` as its first
     * argument. Any additional arguments provided to the function are appended
     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
     * binding of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {*} value The value to wrap.
     * @param {Function} [wrapper=identity] The wrapper function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
     *
     * p('fred, barney, & pebbles');
     * // => '<p>fred, barney, &amp; pebbles</p>'
     */ , lodash.union = On, lodash.unionBy = xn, lodash.unionWith = Zn, lodash.uniq = 
      /**
     * Creates a duplicate-free version of an array, using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons, in which only the first occurrence of each element
     * is kept. The order of result values is determined by the order they occur
     * in the array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniq([2, 1, 2]);
     * // => [2, 1]
     */
      function(e) {
        return e && e.length ? baseUniq(e) : [];
      }
      /**
     * This method is like `_.uniq` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * uniqueness is computed. The order of result values is determined by the
     * order they occur in the array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */ , lodash.uniqBy = function(e, t) {
        return e && e.length ? baseUniq(e, getIteratee(t, 2)) : [];
      }
      /**
     * This method is like `_.uniq` except that it accepts `comparator` which
     * is invoked to compare elements of `array`. The order of result values is
     * determined by the order they occur in the array.The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.uniqWith(objects, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
     */ , lodash.uniqWith = function(e, t) {
        return t = "function" == typeof t ? t : n, e && e.length ? baseUniq(e, n, t) : [];
      }, lodash.unset = function(e, t) {
        return null == e || baseUnset(e, t);
      }
      /**
     * This method is like `_.set` except that accepts `updater` to produce the
     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
     * is invoked with one argument: (value).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
     * console.log(object.a[0].b.c);
     * // => 9
     *
     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
     * console.log(object.x[0].y.z);
     * // => 0
     */ , lodash.unzip = unzip, lodash.unzipWith = unzipWith, lodash.update = function(e, t, n) {
        return null == e ? e : baseUpdate(e, t, castFunction(n));
      }
      /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */ , lodash.updateWith = function(e, t, r, a) {
        return a = "function" == typeof a ? a : n, null == e ? e : baseUpdate(e, t, castFunction(r), a);
      }, lodash.values = values, lodash.valuesIn = function(e) {
        return null == e ? [] : baseValues(e, keysIn(e));
      }
      /*------------------------------------------------------------------------*/
      /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Number
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */ , lodash.without = jn, lodash.words = words, lodash.wrap = function(e, t) {
        return Qn(castFunction(t), e);
      }, lodash.xor = Fn, lodash.xorBy = zn, lodash.xorWith = Bn, lodash.zip = Tn, lodash.zipObject = 
      /**
     * This method is like `_.fromPairs` except that it accepts two arrays,
     * one of property identifiers and one of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 0.4.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObject(['a', 'b'], [1, 2]);
     * // => { 'a': 1, 'b': 2 }
     */
      function(e, t) {
        return baseZipObject(e || [], t || [], assignValue);
      }
      /**
     * This method is like `_.zipObject` except that it supports property paths.
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
     */ , lodash.zipObjectDeep = function(e, t) {
        return baseZipObject(e || [], t || [], baseSet);
      }
      /**
     * This method is like `_.zip` except that it accepts `iteratee` to specify
     * how grouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  grouped values.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
     *   return a + b + c;
     * });
     * // => [111, 222]
     */ , lodash.zipWith = En, 
      // Add aliases.
      lodash.entries = Or, lodash.entriesIn = xr, lodash.extend = yr, lodash.extendWith = br, 
      // Add methods to `lodash.prototype`.
      mixin(lodash, lodash), 
      /*------------------------------------------------------------------------*/
      // Add methods that return unwrapped values in chain sequences.
      lodash.add = $r, lodash.attempt = Wr, lodash.camelCase = Zr, lodash.capitalize = capitalize, 
      lodash.ceil = Jr, lodash.clamp = function(e, t, r) {
        return r === n && (r = t, t = n), r !== n && (r = (r = toNumber(r)) == r ? r : 0), 
        t !== n && (t = (t = toNumber(t)) == t ? t : 0), baseClamp(toNumber(e), t, r);
      }
      /**
     * Checks if `n` is between `start` and up to, but not including, `end`. If
     * `end` is not specified, it's set to `start` with `start` then set to `0`.
     * If `start` is greater than `end` the params are swapped to support
     * negative ranges.
     *
     * @static
     * @memberOf _
     * @since 3.3.0
     * @category Number
     * @param {number} number The number to check.
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     * @see _.range, _.rangeRight
     * @example
     *
     * _.inRange(3, 2, 4);
     * // => true
     *
     * _.inRange(4, 8);
     * // => true
     *
     * _.inRange(4, 2);
     * // => false
     *
     * _.inRange(2, 2);
     * // => false
     *
     * _.inRange(1.2, 2);
     * // => true
     *
     * _.inRange(5.2, 4);
     * // => false
     *
     * _.inRange(-3, -2, -6);
     * // => true
     */ , lodash.clone = function(e) {
        return baseClone(e, 4);
      }
      /**
     * This method is like `_.clone` except that it accepts `customizer` which
     * is invoked to produce the cloned value. If `customizer` returns `undefined`,
     * cloning is handled by the method instead. The `customizer` is invoked with
     * up to four arguments; (value [, index|key, object, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeepWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(false);
     *   }
     * }
     *
     * var el = _.cloneWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 0
     */ , lodash.cloneDeep = 
      /**
     * This method is like `_.clone` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @returns {*} Returns the deep cloned value.
     * @see _.clone
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var deep = _.cloneDeep(objects);
     * console.log(deep[0] === objects[0]);
     * // => false
     */
      function(e) {
        return baseClone(e, 5);
      }
      /**
     * This method is like `_.cloneWith` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the deep cloned value.
     * @see _.cloneWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(true);
     *   }
     * }
     *
     * var el = _.cloneDeepWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 20
     */ , lodash.cloneDeepWith = function(e, t) {
        return baseClone(e, 5, t = "function" == typeof t ? t : n);
      }
      /**
     * Checks if `object` conforms to `source` by invoking the predicate
     * properties of `source` with the corresponding property values of `object`.
     *
     * **Note:** This method is equivalent to `_.conforms` when `source` is
     * partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
     * // => true
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
     * // => false
     */ , lodash.cloneWith = function(e, t) {
        return baseClone(e, 4, t = "function" == typeof t ? t : n);
      }, lodash.conformsTo = function(e, t) {
        return null == t || baseConformsTo(e, t, keys(t));
      }, lodash.deburr = deburr, lodash.defaultTo = function(e, t) {
        return null == e || e != e ? t : e;
      }, lodash.divide = Qr, lodash.endsWith = function(e, t, r) {
        e = toString(e), t = baseToString(t);
        var a = e.length, i = r = r === n ? a : baseClamp(toInteger(r), 0, a);
        return (r -= t.length) >= 0 && e.slice(r, i) == t;
      }
      /**
     * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
     * corresponding HTML entities.
     *
     * **Note:** No other characters are escaped. To escape additional
     * characters use a third-party library like [_he_](https://mths.be/he).
     *
     * Though the ">" character is escaped for symmetry, characters like
     * ">" and "/" don't need escaping in HTML and have no special meaning
     * unless they're part of a tag or unquoted attribute value. See
     * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
     * (under "semi-related fun fact") for more details.
     *
     * When working with HTML you should always
     * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
     * XSS vectors.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escape('fred, barney, & pebbles');
     * // => 'fred, barney, &amp; pebbles'
     */ , lodash.eq = eq, lodash.escape = function(e) {
        return (e = toString(e)) && Y.test(e) ? e.replace(V, kt) : e;
      }
      /**
     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escapeRegExp('[lodash](https://lodash.com/)');
     * // => '\[lodash\]\(https://lodash\.com/\)'
     */ , lodash.escapeRegExp = function(e) {
        return (e = toString(e)) && ae.test(e) ? e.replace(re, "\\$&") : e;
      }, lodash.every = 
      /**
     * Checks if `predicate` returns truthy for **all** elements of `collection`.
     * Iteration is stopped once `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * **Note:** This method returns `true` for
     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
     * elements of empty collections.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes'], Boolean);
     * // => false
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.every(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.every(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.every(users, 'active');
     * // => false
     */
      function(e, t, r) {
        var a = ir(e) ? arrayEvery : baseEvery;
        return r && isIterateeCall(e, t, r) && (t = n), a(e, getIteratee(t, 3));
      }, lodash.find = Pn, lodash.findIndex = findIndex, lodash.findKey = 
      /**
     * This method is like `_.find` except that it returns the key of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findKey(users, function(o) { return o.age < 40; });
     * // => 'barney' (iteration order is not guaranteed)
     *
     * // The `_.matches` iteratee shorthand.
     * _.findKey(users, { 'age': 1, 'active': true });
     * // => 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findKey(users, 'active');
     * // => 'barney'
     */
      function(e, t) {
        return baseFindKey(e, getIteratee(t, 3), baseForOwn);
      }
      /**
     * This method is like `_.findKey` except that it iterates over elements of
     * a collection in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findLastKey(users, function(o) { return o.age < 40; });
     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastKey(users, { 'age': 36, 'active': true });
     * // => 'barney'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastKey(users, 'active');
     * // => 'pebbles'
     */ , lodash.findLast = Dn, lodash.findLastIndex = findLastIndex, lodash.findLastKey = function(e, t) {
        return baseFindKey(e, getIteratee(t, 3), baseForOwnRight);
      }
      /**
     * Iterates over own and inherited enumerable string keyed properties of an
     * object and invokes `iteratee` for each property. The iteratee is invoked
     * with three arguments: (value, key, object). Iteratee functions may exit
     * iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forInRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forIn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
     */ , lodash.floor = ea, lodash.forEach = forEach, lodash.forEachRight = forEachRight, 
      lodash.forIn = function(e, t) {
        return null == e ? e : an(e, getIteratee(t, 3), keysIn);
      }
      /**
     * This method is like `_.forIn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forInRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
     */ , lodash.forInRight = function(e, t) {
        return null == e ? e : on(e, getIteratee(t, 3), keysIn);
      }
      /**
     * Iterates over own enumerable string keyed properties of an object and
     * invokes `iteratee` for each property. The iteratee is invoked with three
     * arguments: (value, key, object). Iteratee functions may exit iteration
     * early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwnRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */ , lodash.forOwn = function(e, t) {
        return e && baseForOwn(e, getIteratee(t, 3));
      }
      /**
     * This method is like `_.forOwn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwnRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
     */ , lodash.forOwnRight = function(e, t) {
        return e && baseForOwnRight(e, getIteratee(t, 3));
      }, lodash.get = get, lodash.gt = nr, lodash.gte = rr, lodash.has = function(e, t) {
        return null != e && hasPath(e, t, baseHas);
      }, lodash.hasIn = hasIn, lodash.head = head, lodash.identity = identity, lodash.includes = function(e, t, n, r) {
        e = isArrayLike(e) ? e : values(e), n = n && !r ? toInteger(n) : 0;
        var a = e.length;
        return n < 0 && (n = Ft(a + n, 0)), isString(e) ? n <= a && e.indexOf(t, n) > -1 : !!a && baseIndexOf(e, t, n) > -1;
      }
      /**
     * Invokes the method at `path` of each element in `collection`, returning
     * an array of the results of each invoked method. Any additional arguments
     * are provided to each invoked method. If `path` is a function, it's invoked
     * for, and `this` bound to, each element in `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array|Function|string} path The path of the method to invoke or
     *  the function invoked per iteration.
     * @param {...*} [args] The arguments to invoke each method with.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
     * // => [[1, 5, 7], [1, 2, 3]]
     *
     * _.invokeMap([123, 456], String.prototype.split, '');
     * // => [['1', '2', '3'], ['4', '5', '6']]
     */ , lodash.indexOf = function(e, t, n) {
        var r = null == e ? 0 : e.length;
        if (!r) return -1;
        var a = null == n ? 0 : toInteger(n);
        return a < 0 && (a = Ft(r + a, 0)), baseIndexOf(e, t, a);
      }, lodash.inRange = function(e, t, r) {
        return t = toFinite(t), r === n ? (r = t, t = 0) : r = toFinite(r), function(e, t, n) {
          return e >= zt(t, n) && e < Ft(t, n);
        }(e = toNumber(e), t, r);
      }
      /**
     * Produces a random number between the inclusive `lower` and `upper` bounds.
     * If only one argument is provided a number between `0` and the given number
     * is returned. If `floating` is `true`, or either `lower` or `upper` are
     * floats, a floating-point number is returned instead of an integer.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Number
     * @param {number} [lower=0] The lower bound.
     * @param {number} [upper=1] The upper bound.
     * @param {boolean} [floating] Specify returning a floating-point number.
     * @returns {number} Returns the random number.
     * @example
     *
     * _.random(0, 5);
     * // => an integer between 0 and 5
     *
     * _.random(5);
     * // => also an integer between 0 and 5
     *
     * _.random(5, true);
     * // => a floating-point number between 0 and 5
     *
     * _.random(1.2, 5.2);
     * // => a floating-point number between 1.2 and 5.2
     */ , lodash.invoke = Ar, lodash.isArguments = ar, lodash.isArray = ir, lodash.isArrayBuffer = or, 
      lodash.isArrayLike = isArrayLike, lodash.isArrayLikeObject = isArrayLikeObject, 
      lodash.isBoolean = function(e) {
        return !0 === e || !1 === e || isObjectLike(e) && baseGetTag(e) == _;
      }, lodash.isBuffer = sr, lodash.isDate = ur, lodash.isElement = 
      /**
     * Checks if `value` is likely a DOM element.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
     * @example
     *
     * _.isElement(document.body);
     * // => true
     *
     * _.isElement('<body>');
     * // => false
     */
      function(e) {
        return isObjectLike(e) && 1 === e.nodeType && !isPlainObject(e);
      }
      /**
     * Checks if `value` is an empty object, collection, map, or set.
     *
     * Objects are considered empty if they have no own enumerable string keyed
     * properties.
     *
     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
     * jQuery-like collections are considered empty if they have a `length` of `0`.
     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty(null);
     * // => true
     *
     * _.isEmpty(true);
     * // => true
     *
     * _.isEmpty(1);
     * // => true
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
     * _.isEmpty({ 'a': 1 });
     * // => false
     */ , lodash.isEmpty = function(e) {
        if (null == e) return !0;
        if (isArrayLike(e) && (ir(e) || "string" == typeof e || "function" == typeof e.splice || sr(e) || fr(e) || ar(e))) return !e.length;
        var t = gn(e);
        if (t == A || t == O) return !e.size;
        if (isPrototype(e)) return !baseKeys(e).length;
        for (var n in e) if (Te.call(e, n)) return !1;
        return !0;
      }
      /**
     * Performs a deep comparison between two values to determine if they are
     * equivalent.
     *
     * **Note:** This method supports comparing arrays, array buffers, booleans,
     * date objects, error objects, maps, numbers, `Object` objects, regexes,
     * sets, strings, symbols, and typed arrays. `Object` objects are compared
     * by their own, not inherited, enumerable properties. Functions and DOM
     * nodes are compared by strict equality, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.isEqual(object, other);
     * // => true
     *
     * object === other;
     * // => false
     */ , lodash.isEqual = function(e, t) {
        return baseIsEqual(e, t);
      }
      /**
     * This method is like `_.isEqual` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with up to
     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, othValue) {
     *   if (isGreeting(objValue) && isGreeting(othValue)) {
     *     return true;
     *   }
     * }
     *
     * var array = ['hello', 'goodbye'];
     * var other = ['hi', 'goodbye'];
     *
     * _.isEqualWith(array, other, customizer);
     * // => true
     */ , lodash.isEqualWith = function(e, t, r) {
        var a = (r = "function" == typeof r ? r : n) ? r(e, t) : n;
        return a === n ? baseIsEqual(e, t, n, r) : !!a;
      }, lodash.isError = isError, lodash.isFinite = function(e) {
        return "number" == typeof e && xt(e);
      }, lodash.isFunction = isFunction, lodash.isInteger = isInteger, lodash.isLength = isLength, 
      lodash.isMap = cr, lodash.isMatch = function(e, t) {
        return e === t || baseIsMatch(e, t, getMatchData(t));
      }
      /**
     * This method is like `_.isMatch` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with five
     * arguments: (objValue, srcValue, index|key, object, source).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, srcValue) {
     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
     *     return true;
     *   }
     * }
     *
     * var object = { 'greeting': 'hello' };
     * var source = { 'greeting': 'hi' };
     *
     * _.isMatchWith(object, source, customizer);
     * // => true
     */ , lodash.isMatchWith = function(e, t, r) {
        return r = "function" == typeof r ? r : n, baseIsMatch(e, t, getMatchData(t), r);
      }
      /**
     * Checks if `value` is `NaN`.
     *
     * **Note:** This method is based on
     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
     * `undefined` and other non-number values.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     * @example
     *
     * _.isNaN(NaN);
     * // => true
     *
     * _.isNaN(new Number(NaN));
     * // => true
     *
     * isNaN(undefined);
     * // => true
     *
     * _.isNaN(undefined);
     * // => false
     */ , lodash.isNaN = function(e) {
        // An `NaN` primitive is the only value that is not equal to itself.
        // Perform the `toStringTag` check first to avoid errors with some
        // ActiveX objects in IE.
        return isNumber(e) && e != +e;
      }
      /**
     * Checks if `value` is a pristine native function.
     *
     * **Note:** This method can't reliably detect native functions in the presence
     * of the core-js package because core-js circumvents this kind of detection.
     * Despite multiple requests, the core-js maintainer has made it clear: any
     * attempt to fix the detection will be obstructed. As a result, we're left
     * with little choice but to throw an error. Unfortunately, this also affects
     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
     * which rely on core-js.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     * @example
     *
     * _.isNative(Array.prototype.push);
     * // => true
     *
     * _.isNative(_);
     * // => false
     */ , lodash.isNative = function(e) {
        if (yn(e)) throw new Ae("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
        return baseIsNative(e);
      }
      /**
     * Checks if `value` is `null`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
     * @example
     *
     * _.isNull(null);
     * // => true
     *
     * _.isNull(void 0);
     * // => false
     */ , lodash.isNil = 
      /**
     * Checks if `value` is `null` or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
     * @example
     *
     * _.isNil(null);
     * // => true
     *
     * _.isNil(void 0);
     * // => true
     *
     * _.isNil(NaN);
     * // => false
     */
      function(e) {
        return null == e;
      }, lodash.isNull = function(e) {
        return null === e;
      }, lodash.isNumber = isNumber, lodash.isObject = isObject, lodash.isObjectLike = isObjectLike, 
      lodash.isPlainObject = isPlainObject, lodash.isRegExp = lr, lodash.isSafeInteger = function(e) {
        return isInteger(e) && e >= -9007199254740991 && e <= d;
      }
      /**
     * Checks if `value` is classified as a `Set` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     * @example
     *
     * _.isSet(new Set);
     * // => true
     *
     * _.isSet(new WeakSet);
     * // => false
     */ , lodash.isSet = hr, lodash.isString = isString, lodash.isSymbol = isSymbol, lodash.isTypedArray = fr, 
      lodash.isUndefined = function(e) {
        return e === n;
      }
      /**
     * Checks if `value` is classified as a `WeakMap` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
     * @example
     *
     * _.isWeakMap(new WeakMap);
     * // => true
     *
     * _.isWeakMap(new Map);
     * // => false
     */ , lodash.isWeakMap = function(e) {
        return isObjectLike(e) && gn(e) == j;
      }
      /**
     * Checks if `value` is classified as a `WeakSet` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
     * @example
     *
     * _.isWeakSet(new WeakSet);
     * // => true
     *
     * _.isWeakSet(new Set);
     * // => false
     */ , lodash.isWeakSet = function(e) {
        return isObjectLike(e) && "[object WeakSet]" == baseGetTag(e);
      }
      /**
     * Checks if `value` is less than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     * @see _.gt
     * @example
     *
     * _.lt(1, 3);
     * // => true
     *
     * _.lt(3, 3);
     * // => false
     *
     * _.lt(3, 1);
     * // => false
     */ , lodash.join = 
      /**
     * Converts all elements in `array` into a string separated by `separator`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to convert.
     * @param {string} [separator=','] The element separator.
     * @returns {string} Returns the joined string.
     * @example
     *
     * _.join(['a', 'b', 'c'], '~');
     * // => 'a~b~c'
     */
      function(e, t) {
        return null == e ? "" : Zt.call(e, t);
      }, lodash.kebabCase = jr, lodash.last = last, lodash.lastIndexOf = function(e, t, r) {
        var a = null == e ? 0 : e.length;
        if (!a) return -1;
        var i = a;
        return r !== n && (i = (i = toInteger(r)) < 0 ? Ft(a + i, 0) : zt(i, a - 1)), t == t ? function(e, t, n) {
          for (var r = n + 1; r--; ) if (e[r] === t) return r;
          return r;
        }(e, t, i) : baseFindIndex(e, baseIsNaN, i, !0);
      }
      /**
     * Gets the element at index `n` of `array`. If `n` is negative, the nth
     * element from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.11.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=0] The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     *
     * _.nth(array, 1);
     * // => 'b'
     *
     * _.nth(array, -2);
     * // => 'c';
     */ , lodash.lowerCase = Fr, lodash.lowerFirst = zr, lodash.lt = dr, lodash.lte = pr, 
      lodash.max = 
      /**
     * Computes the maximum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * _.max([]);
     * // => undefined
     */
      function(e) {
        return e && e.length ? baseExtremum(e, identity, baseGt) : n;
      }
      /**
     * This method is like `_.max` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.maxBy(objects, function(o) { return o.n; });
     * // => { 'n': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.maxBy(objects, 'n');
     * // => { 'n': 2 }
     */ , lodash.maxBy = function(e, t) {
        return e && e.length ? baseExtremum(e, getIteratee(t, 2), baseGt) : n;
      }
      /**
     * Computes the mean of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the mean.
     * @example
     *
     * _.mean([4, 2, 8, 6]);
     * // => 5
     */ , lodash.mean = function(e) {
        return baseMean(e, identity);
      }
      /**
     * This method is like `_.mean` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be averaged.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the mean.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.meanBy(objects, function(o) { return o.n; });
     * // => 5
     *
     * // The `_.property` iteratee shorthand.
     * _.meanBy(objects, 'n');
     * // => 5
     */ , lodash.meanBy = function(e, t) {
        return baseMean(e, getIteratee(t, 2));
      }
      /**
     * Computes the minimum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * _.min([4, 2, 8, 6]);
     * // => 2
     *
     * _.min([]);
     * // => undefined
     */ , lodash.min = function(e) {
        return e && e.length ? baseExtremum(e, identity, baseLt) : n;
      }
      /**
     * This method is like `_.min` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.minBy(objects, function(o) { return o.n; });
     * // => { 'n': 1 }
     *
     * // The `_.property` iteratee shorthand.
     * _.minBy(objects, 'n');
     * // => { 'n': 1 }
     */ , lodash.minBy = function(e, t) {
        return e && e.length ? baseExtremum(e, getIteratee(t, 2), baseLt) : n;
      }
      /**
     * Multiply two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} multiplier The first number in a multiplication.
     * @param {number} multiplicand The second number in a multiplication.
     * @returns {number} Returns the product.
     * @example
     *
     * _.multiply(6, 4);
     * // => 24
     */ , lodash.stubArray = stubArray, lodash.stubFalse = stubFalse, lodash.stubObject = function() {
        return {};
      }
      /**
     * This method returns an empty string.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {string} Returns the empty string.
     * @example
     *
     * _.times(2, _.stubString);
     * // => ['', '']
     */ , lodash.stubString = function() {
        return "";
      }
      /**
     * This method returns `true`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `true`.
     * @example
     *
     * _.times(2, _.stubTrue);
     * // => [true, true]
     */ , lodash.stubTrue = function() {
        return !0;
      }
      /**
     * Invokes the iteratee `n` times, returning an array of the results of
     * each invocation. The iteratee is invoked with one argument; (index).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.times(3, String);
     * // => ['0', '1', '2']
     *
     *  _.times(4, _.constant(0));
     * // => [0, 0, 0, 0]
     */ , lodash.multiply = ta, lodash.nth = function(e, t) {
        return e && e.length ? baseNth(e, toInteger(t)) : n;
      }, lodash.noConflict = function() {
        return ft._ === this && (ft._ = De), this;
      }, lodash.noop = noop, lodash.now = Kn, lodash.pad = 
      /**
     * Pads `string` on the left and right sides if it's shorter than `length`.
     * Padding characters are truncated if they can't be evenly divided by `length`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.pad('abc', 8);
     * // => '  abc   '
     *
     * _.pad('abc', 8, '_-');
     * // => '_-abc_-_'
     *
     * _.pad('abc', 3);
     * // => 'abc'
     */
      function(e, t, n) {
        e = toString(e);
        var r = (t = toInteger(t)) ? stringSize(e) : 0;
        if (!t || r >= t) return e;
        var a = (t - r) / 2;
        return createPadding(bt(a), n) + e + createPadding(yt(a), n);
      }
      /**
     * Pads `string` on the right side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padEnd('abc', 6);
     * // => 'abc   '
     *
     * _.padEnd('abc', 6, '_-');
     * // => 'abc_-_'
     *
     * _.padEnd('abc', 3);
     * // => 'abc'
     */ , lodash.padEnd = function(e, t, n) {
        e = toString(e);
        var r = (t = toInteger(t)) ? stringSize(e) : 0;
        return t && r < t ? e + createPadding(t - r, n) : e;
      }
      /**
     * Pads `string` on the left side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padStart('abc', 6);
     * // => '   abc'
     *
     * _.padStart('abc', 6, '_-');
     * // => '_-_abc'
     *
     * _.padStart('abc', 3);
     * // => 'abc'
     */ , lodash.padStart = function(e, t, n) {
        e = toString(e);
        var r = (t = toInteger(t)) ? stringSize(e) : 0;
        return t && r < t ? createPadding(t - r, n) + e : e;
      }
      /**
     * Converts `string` to an integer of the specified radix. If `radix` is
     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
     * hexadecimal, in which case a `radix` of `16` is used.
     *
     * **Note:** This method aligns with the
     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category String
     * @param {string} string The string to convert.
     * @param {number} [radix=10] The radix to interpret `value` by.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.parseInt('08');
     * // => 8
     *
     * _.map(['6', '08', '10'], _.parseInt);
     * // => [6, 8, 10]
     */ , lodash.parseInt = function(e, t, n) {
        return n || null == t ? t = 0 : t && (t = +t), Tt(toString(e).replace(oe, ""), t || 0);
      }
      /**
     * Repeats the given string `n` times.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to repeat.
     * @param {number} [n=1] The number of times to repeat the string.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the repeated string.
     * @example
     *
     * _.repeat('*', 3);
     * // => '***'
     *
     * _.repeat('abc', 2);
     * // => 'abcabc'
     *
     * _.repeat('abc', 0);
     * // => ''
     */ , lodash.random = function(e, t, r) {
        if (r && "boolean" != typeof r && isIterateeCall(e, t, r) && (t = r = n), r === n && ("boolean" == typeof t ? (r = t, 
        t = n) : "boolean" == typeof e && (r = e, e = n)), e === n && t === n ? (e = 0, 
        t = 1) : (e = toFinite(e), t === n ? (t = e, e = 0) : t = toFinite(t)), e > t) {
          var a = e;
          e = t, t = a;
        }
        if (r || e % 1 || t % 1) {
          var i = Et();
          return zt(e + i * (t - e + ut("1e-" + ((i + "").length - 1))), t);
        }
        return baseRandom(e, t);
      }, lodash.reduce = function(e, t, n) {
        var r = ir(e) ? arrayReduce : baseReduce, a = arguments.length < 3;
        return r(e, getIteratee(t, 4), n, a, nn);
      }
      /**
     * This method is like `_.reduce` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduce
     * @example
     *
     * var array = [[0, 1], [2, 3], [4, 5]];
     *
     * _.reduceRight(array, function(flattened, other) {
     *   return flattened.concat(other);
     * }, []);
     * // => [4, 5, 2, 3, 0, 1]
     */ , lodash.reduceRight = function(e, t, n) {
        var r = ir(e) ? arrayReduceRight : baseReduce, a = arguments.length < 3;
        return r(e, getIteratee(t, 4), n, a, rn);
      }, lodash.repeat = function(e, t, r) {
        return t = (r ? isIterateeCall(e, t, r) : t === n) ? 1 : toInteger(t), baseRepeat(toString(e), t);
      }
      /**
     * Replaces matches for `pattern` in `string` with `replacement`.
     *
     * **Note:** This method is based on
     * [`String#replace`](https://mdn.io/String/replace).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to modify.
     * @param {RegExp|string} pattern The pattern to replace.
     * @param {Function|string} replacement The match replacement.
     * @returns {string} Returns the modified string.
     * @example
     *
     * _.replace('Hi Fred', 'Fred', 'Barney');
     * // => 'Hi Barney'
     */ , lodash.replace = function() {
        var e = arguments, t = toString(e[0]);
        return e.length < 3 ? t : t.replace(e[1], e[2]);
      }
      /**
     * Converts `string` to
     * [snake case](https://en.wikipedia.org/wiki/Snake_case).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the snake cased string.
     * @example
     *
     * _.snakeCase('Foo Bar');
     * // => 'foo_bar'
     *
     * _.snakeCase('fooBar');
     * // => 'foo_bar'
     *
     * _.snakeCase('--FOO-BAR--');
     * // => 'foo_bar'
     */ , lodash.result = function(e, t, r) {
        var a = -1, i = (t = castPath(t, e)).length;
        // Ensure the loop is entered when path is empty.
                for (i || (i = 1, e = n); ++a < i; ) {
          var o = null == e ? n : e[toKey(t[a])];
          o === n && (a = i, o = r), e = isFunction(o) ? o.call(e) : o;
        }
        return e;
      }, lodash.round = na, lodash.runInContext = runInContext, lodash.sample = function(e) {
        return (ir(e) ? arraySample : baseSample)(e);
      }, lodash.size = function(e) {
        if (null == e) return 0;
        if (isArrayLike(e)) return isString(e) ? stringSize(e) : e.length;
        var t = gn(e);
        return t == A || t == O ? e.size : baseKeys(e).length;
      }
      /**
     * Checks if `predicate` returns truthy for **any** element of `collection`.
     * Iteration is stopped once `predicate` returns truthy. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     * @example
     *
     * _.some([null, 0, 'yes', false], Boolean);
     * // => true
     *
     * var users = [
     *   { 'user': 'barney', 'active': true },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.some(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.some(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.some(users, 'active');
     * // => true
     */ , lodash.snakeCase = Br, lodash.some = function(e, t, r) {
        var a = ir(e) ? arraySome : baseSome;
        return r && isIterateeCall(e, t, r) && (t = n), a(e, getIteratee(t, 3));
      }
      /**
     * Creates an array of elements, sorted in ascending order by the results of
     * running each element in a collection thru each iteratee. This method
     * performs a stable sort, that is, it preserves the original sort order of
     * equal elements. The iteratees are invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 30 },
     *   { 'user': 'barney', 'age': 34 }
     * ];
     *
     * _.sortBy(users, [function(o) { return o.user; }]);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
     *
     * _.sortBy(users, ['user', 'age']);
     * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
     */ , lodash.sortedIndex = function(e, t) {
        return baseSortedIndex(e, t);
      }
      /**
     * This method is like `_.sortedIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
     * // => 0
     */ , lodash.sortedIndexBy = function(e, t, n) {
        return baseSortedIndexBy(e, t, getIteratee(n, 2));
      }
      /**
     * This method is like `_.indexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
     * // => 1
     */ , lodash.sortedIndexOf = function(e, t) {
        var n = null == e ? 0 : e.length;
        if (n) {
          var r = baseSortedIndex(e, t);
          if (r < n && eq(e[r], t)) return r;
        }
        return -1;
      }
      /**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
     * // => 4
     */ , lodash.sortedLastIndex = function(e, t) {
        return baseSortedIndex(e, t, !0);
      }
      /**
     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 1
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
     * // => 1
     */ , lodash.sortedLastIndexBy = function(e, t, n) {
        return baseSortedIndexBy(e, t, getIteratee(n, 2), !0);
      }
      /**
     * This method is like `_.lastIndexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
     * // => 3
     */ , lodash.sortedLastIndexOf = function(e, t) {
        if (null != e && e.length) {
          var n = baseSortedIndex(e, t, !0) - 1;
          if (eq(e[n], t)) return n;
        }
        return -1;
      }, lodash.startCase = Tr, lodash.startsWith = 
      /**
     * Checks if `string` starts with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=0] The position to search from.
     * @returns {boolean} Returns `true` if `string` starts with `target`,
     *  else `false`.
     * @example
     *
     * _.startsWith('abc', 'a');
     * // => true
     *
     * _.startsWith('abc', 'b');
     * // => false
     *
     * _.startsWith('abc', 'b', 1);
     * // => true
     */
      function(e, t, n) {
        return e = toString(e), n = null == n ? 0 : baseClamp(toInteger(n), 0, e.length), 
        t = baseToString(t), e.slice(n, n + t.length) == t;
      }
      /**
     * Creates a compiled template function that can interpolate data properties
     * in "interpolate" delimiters, HTML-escape interpolated data properties in
     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
     * properties may be accessed as free variables in the template. If a setting
     * object is given, it takes precedence over `_.templateSettings` values.
     *
     * **Note:** In the development build `_.template` utilizes
     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
     * for easier debugging.
     *
     * For more information on precompiling templates see
     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
     *
     * For more information on Chrome extension sandboxes see
     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The template string.
     * @param {Object} [options={}] The options object.
     * @param {RegExp} [options.escape=_.templateSettings.escape]
     *  The HTML "escape" delimiter.
     * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
     *  The "evaluate" delimiter.
     * @param {Object} [options.imports=_.templateSettings.imports]
     *  An object to import into the template as free variables.
     * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
     *  The "interpolate" delimiter.
     * @param {string} [options.sourceURL='lodash.templateSources[n]']
     *  The sourceURL of the compiled template.
     * @param {string} [options.variable='obj']
     *  The data object variable name.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the compiled template function.
     * @example
     *
     * // Use the "interpolate" delimiter to create a compiled template.
     * var compiled = _.template('hello <%= user %>!');
     * compiled({ 'user': 'fred' });
     * // => 'hello fred!'
     *
     * // Use the HTML "escape" delimiter to escape data property values.
     * var compiled = _.template('<b><%- value %></b>');
     * compiled({ 'value': '<script>' });
     * // => '<b>&lt;script&gt;</b>'
     *
     * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the internal `print` function in "evaluate" delimiters.
     * var compiled = _.template('<% print("hello " + user); %>!');
     * compiled({ 'user': 'barney' });
     * // => 'hello barney!'
     *
     * // Use the ES template literal delimiter as an "interpolate" delimiter.
     * // Disable support by replacing the "interpolate" delimiter.
     * var compiled = _.template('hello ${ user }!');
     * compiled({ 'user': 'pebbles' });
     * // => 'hello pebbles!'
     *
     * // Use backslashes to treat delimiters as plain text.
     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
     * compiled({ 'value': 'ignored' });
     * // => '<%- value %>'
     *
     * // Use the `imports` option to import `jQuery` as `jq`.
     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the `sourceURL` option to specify a custom sourceURL for the template.
     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
     * compiled(data);
     * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
     *
     * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
     * compiled.source;
     * // => function(data) {
     * //   var __t, __p = '';
     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
     * //   return __p;
     * // }
     *
     * // Use custom template delimiters.
     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
     * var compiled = _.template('hello {{ user }}!');
     * compiled({ 'user': 'mustache' });
     * // => 'hello mustache!'
     *
     * // Use the `source` property to inline compiled templates for meaningful
     * // line numbers in error messages and stack traces.
     * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
     *   var JST = {\
     *     "main": ' + _.template(mainText).source + '\
     *   };\
     * ');
     */ , lodash.subtract = ra, lodash.sum = 
      /**
     * Computes the sum of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the sum.
     * @example
     *
     * _.sum([4, 2, 8, 6]);
     * // => 20
     */
      function(e) {
        return e && e.length ? baseSum(e, identity) : 0;
      }
      /**
     * This method is like `_.sum` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be summed.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the sum.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.sumBy(objects, function(o) { return o.n; });
     * // => 20
     *
     * // The `_.property` iteratee shorthand.
     * _.sumBy(objects, 'n');
     * // => 20
     */ , lodash.sumBy = function(e, t) {
        return e && e.length ? baseSum(e, getIteratee(t, 2)) : 0;
      }, lodash.template = function(e, t, r) {
        // Based on John Resig's `tmpl` implementation
        // (http://ejohn.org/blog/javascript-micro-templating/)
        // and Laura Doktorova's doT.js (https://github.com/olado/doT).
        var a = lodash.templateSettings;
        r && isIterateeCall(e, t, r) && (t = n), e = toString(e), t = br({}, t, a, customDefaultsAssignIn);
        var i, o, s = br({}, t.imports, a.imports, customDefaultsAssignIn), u = keys(s), c = baseValues(s, u), l = 0, h = t.interpolate || Ie, f = "__p += '", d = Re((t.escape || Ie).source + "|" + h.source + "|" + (h === Q ? de : Ie).source + "|" + (t.evaluate || Ie).source + "|$", "g"), p = "//# sourceURL=" + (Te.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++at + "]") + "\n";
        e.replace(d, (function(t, n, r, a, s, u) {
          // The JS engine embedded in Adobe products needs `match` returned in
          // order to produce the correct `offset` value.
          return r || (r = a), 
          // Escape characters that can't be included in string literals.
          f += e.slice(l, u).replace(Se, escapeStringChar), 
          // Replace delimiters with snippets.
          n && (i = !0, f += "' +\n__e(" + n + ") +\n'"), s && (o = !0, f += "';\n" + s + ";\n__p += '"), 
          r && (f += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), l = u + t.length, 
          t;
        })), f += "';\n";
        // If `variable` is not specified wrap a with-statement around the generated
        // code to add the data object to the top of the scope chain.
        var g = Te.call(t, "variable") && t.variable;
        g || (f = "with (obj) {\n" + f + "\n}\n"), 
        // Cleanup code by stripping empty strings.
        f = (o ? f.replace(N, "") : f).replace(H, "$1").replace(G, "$1;"), 
        // Frame code as the function body.
        f = "function(" + (g || "obj") + ") {\n" + (g ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (i ? ", __e = _.escape" : "") + (o ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + f + "return __p\n}";
        var y = Wr((function() {
          return Ce(u, p + "return " + f).apply(n, c);
        }));
        // Provide the compiled function's source by its `toString` method or
        // the `source` property as a convenience for inlining compiled templates.
                if (y.source = f, isError(y)) throw y;
        return y;
      }
      /**
     * Converts `string`, as a whole, to lower case just like
     * [String#toLowerCase](https://mdn.io/toLowerCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.toLower('--Foo-Bar--');
     * // => '--foo-bar--'
     *
     * _.toLower('fooBar');
     * // => 'foobar'
     *
     * _.toLower('__FOO_BAR__');
     * // => '__foo_bar__'
     */ , lodash.times = function(e, t) {
        if ((e = toInteger(e)) < 1 || e > d) return [];
        var n = g, r = zt(e, g);
        t = getIteratee(t), e -= g;
        for (var a = baseTimes(r, t); ++n < e; ) t(n);
        return a;
      }, lodash.toFinite = toFinite, lodash.toInteger = toInteger, lodash.toLength = toLength, 
      lodash.toLower = function(e) {
        return toString(e).toLowerCase();
      }
      /**
     * Converts `string`, as a whole, to upper case just like
     * [String#toUpperCase](https://mdn.io/toUpperCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.toUpper('--foo-bar--');
     * // => '--FOO-BAR--'
     *
     * _.toUpper('fooBar');
     * // => 'FOOBAR'
     *
     * _.toUpper('__foo_bar__');
     * // => '__FOO_BAR__'
     */ , lodash.toNumber = toNumber, lodash.toSafeInteger = function(e) {
        return e ? baseClamp(toInteger(e), -9007199254740991, d) : 0 === e ? e : 0;
      }, lodash.toString = toString, lodash.toUpper = function(e) {
        return toString(e).toUpperCase();
      }
      /**
     * Removes leading and trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trim('  abc  ');
     * // => 'abc'
     *
     * _.trim('-_-abc-_-', '_-');
     * // => 'abc'
     *
     * _.map(['  foo  ', '  bar  '], _.trim);
     * // => ['foo', 'bar']
     */ , lodash.trim = function(e, t, r) {
        if ((e = toString(e)) && (r || t === n)) return e.replace(ie, "");
        if (!e || !(t = baseToString(t))) return e;
        var a = stringToArray(e), i = stringToArray(t);
        return castSlice(a, charsStartIndex(a, i), charsEndIndex(a, i) + 1).join("");
      }
      /**
     * Removes trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimEnd('  abc  ');
     * // => '  abc'
     *
     * _.trimEnd('-_-abc-_-', '_-');
     * // => '-_-abc'
     */ , lodash.trimEnd = function(e, t, r) {
        if ((e = toString(e)) && (r || t === n)) return e.replace(se, "");
        if (!e || !(t = baseToString(t))) return e;
        var a = stringToArray(e);
        return castSlice(a, 0, charsEndIndex(a, stringToArray(t)) + 1).join("");
      }
      /**
     * Removes leading whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimStart('  abc  ');
     * // => 'abc  '
     *
     * _.trimStart('-_-abc-_-', '_-');
     * // => 'abc-_-'
     */ , lodash.trimStart = function(e, t, r) {
        if ((e = toString(e)) && (r || t === n)) return e.replace(oe, "");
        if (!e || !(t = baseToString(t))) return e;
        var a = stringToArray(e);
        return castSlice(a, charsStartIndex(a, stringToArray(t))).join("");
      }
      /**
     * Truncates `string` if it's longer than the given maximum string length.
     * The last characters of the truncated string are replaced with the omission
     * string which defaults to "...".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to truncate.
     * @param {Object} [options={}] The options object.
     * @param {number} [options.length=30] The maximum string length.
     * @param {string} [options.omission='...'] The string to indicate text is omitted.
     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
     * @returns {string} Returns the truncated string.
     * @example
     *
     * _.truncate('hi-diddly-ho there, neighborino');
     * // => 'hi-diddly-ho there, neighbo...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': ' '
     * });
     * // => 'hi-diddly-ho there,...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': /,? +/
     * });
     * // => 'hi-diddly-ho there...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'omission': ' [...]'
     * });
     * // => 'hi-diddly-ho there, neig [...]'
     */ , lodash.truncate = function(e, t) {
        var r = 30, a = "...";
        if (isObject(t)) {
          var i = "separator" in t ? t.separator : i;
          r = "length" in t ? toInteger(t.length) : r, a = "omission" in t ? baseToString(t.omission) : a;
        }
        var o = (e = toString(e)).length;
        if (hasUnicode(e)) {
          var s = stringToArray(e);
          o = s.length;
        }
        if (r >= o) return e;
        var u = r - stringSize(a);
        if (u < 1) return a;
        var c = s ? castSlice(s, 0, u).join("") : e.slice(0, u);
        if (i === n) return c + a;
        if (s && (u += c.length - u), lr(i)) {
          if (e.slice(u).search(i)) {
            var l, h = c;
            for (i.global || (i = Re(i.source, toString(pe.exec(i)) + "g")), i.lastIndex = 0; l = i.exec(h); ) var f = l.index;
            c = c.slice(0, f === n ? u : f);
          }
        } else if (e.indexOf(baseToString(i), u) != u) {
          var d = c.lastIndexOf(i);
          d > -1 && (c = c.slice(0, d));
        }
        return c + a;
      }
      /**
     * The inverse of `_.escape`; this method converts the HTML entities
     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
     * their corresponding characters.
     *
     * **Note:** No other HTML entities are unescaped. To unescape additional
     * HTML entities use a third-party library like [_he_](https://mths.be/he).
     *
     * @static
     * @memberOf _
     * @since 0.6.0
     * @category String
     * @param {string} [string=''] The string to unescape.
     * @returns {string} Returns the unescaped string.
     * @example
     *
     * _.unescape('fred, barney, &amp; pebbles');
     * // => 'fred, barney, & pebbles'
     */ , lodash.unescape = function(e) {
        return (e = toString(e)) && X.test(e) ? e.replace(K, Lt) : e;
      }
      /**
     * Converts `string`, as space separated words, to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.upperCase('--foo-bar');
     * // => 'FOO BAR'
     *
     * _.upperCase('fooBar');
     * // => 'FOO BAR'
     *
     * _.upperCase('__foo_bar__');
     * // => 'FOO BAR'
     */ , lodash.uniqueId = function(e) {
        var t = ++Ee;
        return toString(e) + t;
      }, lodash.upperCase = Er, lodash.upperFirst = Mr, 
      // Add aliases.
      lodash.each = forEach, lodash.eachRight = forEachRight, lodash.first = head, mixin(lodash, (Yr = {}, 
      baseForOwn(lodash, (function(e, t) {
        Te.call(lodash.prototype, t) || (Yr[t] = e);
      })), Yr), {
        chain: !1
      }), 
      /*------------------------------------------------------------------------*/
      /**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type {string}
     */
      lodash.VERSION = "4.17.20", 
      // Assign default placeholders.
      arrayEach([ "bind", "bindKey", "curry", "curryRight", "partial", "partialRight" ], (function(e) {
        lodash[e].placeholder = lodash;
      })), 
      // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
      arrayEach([ "drop", "take" ], (function(e, t) {
        LazyWrapper.prototype[e] = function(r) {
          r = r === n ? 1 : Ft(toInteger(r), 0);
          var a = this.__filtered__ && !t ? new LazyWrapper(this) : this.clone();
          return a.__filtered__ ? a.__takeCount__ = zt(r, a.__takeCount__) : a.__views__.push({
            size: zt(r, g),
            type: e + (a.__dir__ < 0 ? "Right" : "")
          }), a;
        }, LazyWrapper.prototype[e + "Right"] = function(t) {
          return this.reverse()[e](t).reverse();
        };
      })), 
      // Add `LazyWrapper` methods that accept an `iteratee` value.
      arrayEach([ "filter", "map", "takeWhile" ], (function(e, t) {
        var n = t + 1, r = 1 == n || 3 == n;
        LazyWrapper.prototype[e] = function(e) {
          var t = this.clone();
          return t.__iteratees__.push({
            iteratee: getIteratee(e, 3),
            type: n
          }), t.__filtered__ = t.__filtered__ || r, t;
        };
      })), 
      // Add `LazyWrapper` methods for `_.head` and `_.last`.
      arrayEach([ "head", "last" ], (function(e, t) {
        var n = "take" + (t ? "Right" : "");
        LazyWrapper.prototype[e] = function() {
          return this[n](1).value()[0];
        };
      })), 
      // Add `LazyWrapper` methods for `_.initial` and `_.tail`.
      arrayEach([ "initial", "tail" ], (function(e, t) {
        var n = "drop" + (t ? "" : "Right");
        LazyWrapper.prototype[e] = function() {
          return this.__filtered__ ? new LazyWrapper(this) : this[n](1);
        };
      })), LazyWrapper.prototype.compact = function() {
        return this.filter(identity);
      }, LazyWrapper.prototype.find = function(e) {
        return this.filter(e).head();
      }, LazyWrapper.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, LazyWrapper.prototype.invokeMap = baseRest((function(e, t) {
        return "function" == typeof e ? new LazyWrapper(this) : this.map((function(n) {
          return baseInvoke(n, e, t);
        }));
      })), LazyWrapper.prototype.reject = function(e) {
        return this.filter(negate(getIteratee(e)));
      }, LazyWrapper.prototype.slice = function(e, t) {
        e = toInteger(e);
        var r = this;
        return r.__filtered__ && (e > 0 || t < 0) ? new LazyWrapper(r) : (e < 0 ? r = r.takeRight(-e) : e && (r = r.drop(e)), 
        t !== n && (r = (t = toInteger(t)) < 0 ? r.dropRight(-t) : r.take(t - e)), r);
      }, LazyWrapper.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, LazyWrapper.prototype.toArray = function() {
        return this.take(g);
      }, 
      // Add `LazyWrapper` methods to `lodash.prototype`.
      baseForOwn(LazyWrapper.prototype, (function(e, t) {
        var r = /^(?:filter|find|map|reject)|While$/.test(t), a = /^(?:head|last)$/.test(t), i = lodash[a ? "take" + ("last" == t ? "Right" : "") : t], o = a || /^find/.test(t);
        i && (lodash.prototype[t] = function() {
          var t = this.__wrapped__, s = a ? [ 1 ] : arguments, u = t instanceof LazyWrapper, c = s[0], l = u || ir(t), interceptor = function(e) {
            var t = i.apply(lodash, arrayPush([ e ], s));
            return a && h ? t[0] : t;
          };
          l && r && "function" == typeof c && 1 != c.length && (
          // Avoid lazy use if the iteratee has a "length" value other than `1`.
          u = l = !1);
          var h = this.__chain__, f = !!this.__actions__.length, d = o && !h, p = u && !f;
          if (!o && l) {
            t = p ? t : new LazyWrapper(this);
            var g = e.apply(t, s);
            return g.__actions__.push({
              func: thru,
              args: [ interceptor ],
              thisArg: n
            }), new LodashWrapper(g, h);
          }
          return d && p ? e.apply(this, s) : (g = this.thru(interceptor), d ? a ? g.value()[0] : g.value() : g);
        });
      })), 
      // Add `Array` methods to `lodash.prototype`.
      arrayEach([ "pop", "push", "shift", "sort", "splice", "unshift" ], (function(e) {
        var t = Ze[e], n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", r = /^(?:pop|shift)$/.test(e);
        lodash.prototype[e] = function() {
          var e = arguments;
          if (r && !this.__chain__) {
            var a = this.value();
            return t.apply(ir(a) ? a : [], e);
          }
          return this[n]((function(n) {
            return t.apply(ir(n) ? n : [], e);
          }));
        };
      })), 
      // Map minified method names to their real names.
      baseForOwn(LazyWrapper.prototype, (function(e, t) {
        var n = lodash[t];
        if (n) {
          var r = n.name + "";
          Te.call(Gt, r) || (Gt[r] = []), Gt[r].push({
            name: t,
            func: n
          });
        }
      })), Gt[createHybrid(n, 2).name] = [ {
        name: "wrapper",
        func: n
      } ], 
      // Add methods to `LazyWrapper`.
      LazyWrapper.prototype.clone = function() {
        var e = new LazyWrapper(this.__wrapped__);
        return e.__actions__ = copyArray(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, 
        e.__iteratees__ = copyArray(this.__iteratees__), e.__takeCount__ = this.__takeCount__, 
        e.__views__ = copyArray(this.__views__), e;
      }
      /**
     * Reverses the direction of lazy iteration.
     *
     * @private
     * @name reverse
     * @memberOf LazyWrapper
     * @returns {Object} Returns the new reversed `LazyWrapper` object.
     */ , LazyWrapper.prototype.reverse = function() {
        if (this.__filtered__) {
          var e = new LazyWrapper(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else (e = this.clone()).__dir__ *= -1;
        return e;
      }
      /**
     * Extracts the unwrapped value from its lazy wrapper.
     *
     * @private
     * @name value
     * @memberOf LazyWrapper
     * @returns {*} Returns the unwrapped value.
     */ , LazyWrapper.prototype.value = function() {
        var e = this.__wrapped__.value(), t = this.__dir__, n = ir(e), r = t < 0, a = n ? e.length : 0, i = function(e, t, n) {
          for (var r = -1, a = n.length; ++r < a; ) {
            var i = n[r], o = i.size;
            switch (i.type) {
             case "drop":
              e += o;
              break;

             case "dropRight":
              t -= o;
              break;

             case "take":
              t = zt(t, e + o);
              break;

             case "takeRight":
              e = Ft(e, t - o);
            }
          }
          return {
            start: e,
            end: t
          };
        }(0, a, this.__views__), o = i.start, s = i.end, u = s - o, c = r ? s : o - 1, l = this.__iteratees__, h = l.length, f = 0, d = zt(u, this.__takeCount__);
        if (!n || !r && a == u && d == u) return baseWrapperValue(e, this.__actions__);
        var p = [];
        e: for (;u-- && f < d; ) {
          for (var g = -1, y = e[c += t]; ++g < h; ) {
            var b = l[g], v = b.iteratee, _ = b.type, m = v(y);
            if (2 == _) y = m; else if (!m) {
              if (1 == _) continue e;
              break e;
            }
          }
          p[f++] = y;
        }
        return p;
      }, 
      // Add chain sequence methods to the `lodash` wrapper.
      lodash.prototype.at = Mn, lodash.prototype.chain = function() {
        return chain(this);
      }
      /**
     * Executes the chain sequence and returns the wrapped result.
     *
     * @name commit
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2];
     * var wrapped = _(array).push(3);
     *
     * console.log(array);
     * // => [1, 2]
     *
     * wrapped = wrapped.commit();
     * console.log(array);
     * // => [1, 2, 3]
     *
     * wrapped.last();
     * // => 3
     *
     * console.log(array);
     * // => [1, 2, 3]
     */ , lodash.prototype.commit = function() {
        return new LodashWrapper(this.value(), this.__chain__);
      }
      /**
     * Gets the next value on a wrapped object following the
     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
     *
     * @name next
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the next iterator value.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 1 }
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 2 }
     *
     * wrapped.next();
     * // => { 'done': true, 'value': undefined }
     */ , lodash.prototype.next = function() {
        this.__values__ === n && (this.__values__ = toArray(this.value()));
        var e = this.__index__ >= this.__values__.length;
        return {
          done: e,
          value: e ? n : this.__values__[this.__index__++]
        };
      }
      /**
     * Enables the wrapper to be iterable.
     *
     * @name Symbol.iterator
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the wrapper object.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped[Symbol.iterator]() === wrapped;
     * // => true
     *
     * Array.from(wrapped);
     * // => [1, 2]
     */ , lodash.prototype.plant = 
      /**
     * Creates a clone of the chain sequence planting `value` as the wrapped value.
     *
     * @name plant
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @param {*} value The value to plant.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2]).map(square);
     * var other = wrapped.plant([3, 4]);
     *
     * other.value();
     * // => [9, 16]
     *
     * wrapped.value();
     * // => [1, 4]
     */
      function(e) {
        for (var t, r = this; r instanceof baseLodash; ) {
          var a = wrapperClone(r);
          a.__index__ = 0, a.__values__ = n, t ? i.__wrapped__ = a : t = a;
          var i = a;
          r = r.__wrapped__;
        }
        return i.__wrapped__ = e, t;
      }
      /**
     * This method is the wrapper version of `_.reverse`.
     *
     * **Note:** This method mutates the wrapped array.
     *
     * @name reverse
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _(array).reverse().value()
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */ , lodash.prototype.reverse = function() {
        var e = this.__wrapped__;
        if (e instanceof LazyWrapper) {
          var t = e;
          return this.__actions__.length && (t = new LazyWrapper(this)), (t = t.reverse()).__actions__.push({
            func: thru,
            args: [ reverse ],
            thisArg: n
          }), new LodashWrapper(t, this.__chain__);
        }
        return this.thru(reverse);
      }
      /**
     * Executes the chain sequence to resolve the unwrapped value.
     *
     * @name value
     * @memberOf _
     * @since 0.1.0
     * @alias toJSON, valueOf
     * @category Seq
     * @returns {*} Returns the resolved unwrapped value.
     * @example
     *
     * _([1, 2, 3]).value();
     * // => [1, 2, 3]
     */ , lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = function() {
        return baseWrapperValue(this.__wrapped__, this.__actions__);
      }
      /*------------------------------------------------------------------------*/
      /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the number of times the key was returned by `iteratee`. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.countBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': 1, '6': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.countBy(['one', 'two', 'three'], 'length');
     * // => { '3': 2, '5': 1 }
     */ , 
      // Add lazy aliases.
      lodash.prototype.first = lodash.prototype.head, tt && (lodash.prototype[tt] = function() {
        return this;
      }), lodash;
    }();
    // Some AMD build optimizers, like r.js, check for condition patterns like:
    pt ? (
    // Export for Node.js.
    (pt.exports = Rt)._ = Rt, 
    // Export for CommonJS support.
    dt._ = Rt) : 
    // Export to the global object.
    ft._ = Rt;
  }).call(o);
}(u = {
  path: s,
  exports: {},
  require: function(e, t) {
    return function() {
      throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
    }();
  }
}, u.exports), u.exports);

const l = window.createjs;

/**
 *
 */
/**
 *
 */
const h = new class {
  /**
   *
   */
  constructor() {
    l.Sound.alternateExtensions = [ "mp3" ], l.Sound.registerSound(e("assets/audio/B_ChezMoi.mp3"), "B_ChezMoi"), 
    l.Sound.registerSound(e("assets/audio/B_DansLaCour.mp3"), "B_DansLaCour"), l.Sound.registerSound(e("assets/audio/B_DerriereMaMaison.mp3"), "B_DerriereMaMaison"), 
    l.Sound.registerSound(e("assets/audio/B_PendantLesVacances.mp3"), "B_PendantLesVacances"), 
    l.Sound.registerSound(e("assets/audio/B_SousUnArbre.mp3"), "B_SousUnArbre"), l.Sound.registerSound(e("assets/audio/C_Jarrose.mp3"), "C_Jarrose"), 
    l.Sound.registerSound(e("assets/audio/C_JeCasse.mp3"), "C_JeCasse"), l.Sound.registerSound(e("assets/audio/C_JeCroque.mp3"), "C_JeCroque"), 
    l.Sound.registerSound(e("assets/audio/C_JeMange.mp3"), "C_JeMange"), l.Sound.registerSound(e("assets/audio/C_JeRange.mp3"), "C_JeRange"), 
    l.Sound.registerSound(e("assets/audio/D_DesBananes.mp3"), "D_DesBananes"), l.Sound.registerSound(e("assets/audio/D_DesLunettes.mp3"), "D_DesLunettes"), 
    l.Sound.registerSound(e("assets/audio/D_UnParapluie.mp3"), "D_UnParapluie"), l.Sound.registerSound(e("assets/audio/D_UnTelephone.mp3"), "D_UnTelephone"), 
    l.Sound.registerSound(e("assets/audio/D_UneBiscotte.mp3"), "D_UneBiscotte"), l.Sound.registerSound(e("assets/audio/F_rires2.mp3"), "F_rires2"), 
    l.Sound.registerSound(e("assets/audio/F_rires7.mp3"), "F_rires7"), l.Sound.registerSound(e("assets/audio/F_rires8.mp3"), "F_rires8"), 
    l.Sound.registerSound(e("assets/audio/F_rires9.mp3"), "F_rires9"), l.Sound.registerSound(e("assets/audio/F_rires10.mp3"), "F_rires10"), 
    l.Sound.registerSound(e("assets/audio/F_rires11.mp3"), "F_rires11"), l.Sound.registerSound(e("assets/audio/F_rires13.mp3"), "F_rires13"), 
    l.Sound.registerSound(e("assets/audio/F_rires15.mp3"), "F_rires15"), l.Sound.registerSound(e("assets/audio/G_CestCompletementToque.mp3"), "G_CestCompletementToque"), 
    l.Sound.registerSound(e("assets/audio/G_CestCompletementToque_ALT.mp3"), "G_CestCompletementToque_ALT"), 
    l.Sound.registerSound(e("assets/audio/G_IlEstDrole.mp3"), "G_IlEstDrole"), l.Sound.registerSound(e("assets/audio/G_MaisQuelCoquin.mp3"), "G_MaisQuelCoquin"), 
    l.Sound.registerSound(e("assets/audio/G_OhMaisCaVaPas.mp3"), "G_OhMaisCaVaPas"), 
    l.Sound.registerSound(e("assets/audio/G_OhMaisCaVaPasLaTete.mp3"), "G_OhMaisCaVaPasLaTete");
  }
  /**
   *
   * @param audioName
   * @param param2
   */  play(e, t) {
    l.Sound.play(e).on("complete", t, this);
  }
  /**
   *
   */  stop() {
    l.Sound.stop();
  }
};

/**
 *
 */ class f {
  constructor() {
    this.canPlayAudio = !0, this.sequenceInProgress = !1;
  }
  /**
   *
   */  async playZone1() {
    return this.sequenceInProgress || (this.sequenceInProgress = !0, this.runCallback(this.firstZoneRollingStartFunc), 
    await this.waiting(1e3), this.firstItem = d.generateZone1(), this.runCallback(this.firstZoneRollingEndFunc), 
    await this.playAudioFirstZone(), await this.playAudioSecondZone(), await this.waiting(1500), 
    await this.playAudioThirdZone(), await this.waiting(1500), await this.playLaughs(), 
    await this.playInterjection(), this.sequenceInProgress = !1), this;
  }
  /**
   *
   */  async playZone2() {
    return this.sequenceInProgress || (this.sequenceInProgress = !0, this.runCallback(this.secondZoneRollingStartFunc), 
    await this.waiting(1e3), this.secondItem = d.generateZone2(), this.runCallback(this.secondZoneRollingEndFunc), 
    await this.playAudioFirstZone(), await this.playAudioSecondZone(), await this.waiting(1500), 
    await this.playAudioThirdZone(), await this.waiting(1500), await this.playLaughs(), 
    await this.playInterjection(), this.sequenceInProgress = !1), this;
  }
  /**
   *
   */  async playZone3() {
    return this.sequenceInProgress || (this.sequenceInProgress = !0, this.runCallback(this.thirdZoneImageRollingStartFunc), 
    await this.waiting(1e3), this.thirdItem = d.generateZone3(), this.runCallback(this.thirdZoneImageRollingEndFunc), 
    await this.playAudioFirstZone(), await this.playAudioSecondZone(), await this.waiting(1500), 
    await this.playAudioThirdZone(), await this.waiting(1500), await this.playLaughs(), 
    await this.playInterjection(), this.sequenceInProgress = !1), this;
  }
  /**
   *
   */  async play() {
    return this.sequenceInProgress || (this.sequenceInProgress = !0, this.runCallback(this.firstZoneRollingStartFunc), 
    this.runCallback(this.secondZoneRollingStartFunc), this.runCallback(this.thirdZoneImageRollingStartFunc), 
    await this.waiting(1e3), this.runCallback(this.firstZoneRollingEndFunc), await this.playAudioFirstZone(), 
    this.runCallback(this.secondZoneRollingEndFunc), await this.playAudioSecondZone(), 
    this.runCallback(this.thirdZoneImageRollingEndFunc), await this.waiting(1500), this.runCallback(this.thirdZoneAudioStartFunc), 
    await this.playAudioThirdZone(), this.runCallback(this.thirdZoneAudioEndFunc), await this.waiting(1500), 
    this.runCallback(this.thirdZoneLaughsStartFunc), await this.playLaughs(), this.runCallback(this.thirdZoneLaughsEndFunc), 
    this.playInterjection(), this.sequenceInProgress = !1), this;
  }
  /**
   *
   */  stop() {
    h.stop(), this.canPlayAudio = !1, this.firstZoneRollingStartFunc = null, this.firstZoneRollingEndFunc = null, 
    this.secondZoneRollingStartFunc = null, this.secondZoneRollingEndFunc = null, this.thirdZoneImageRollingStartFunc = null, 
    this.thirdZoneImageRollingEndFunc = null, this.thirdZoneAudioStartFunc = null, this.thirdZoneAudioEndFunc = null, 
    this.thirdZoneLaughsStartFunc = null, this.thirdZoneLaughsEndFunc = null, this.firstItem = null, 
    this.secondItem = null, this.thirdItem = null, this.fourthItem = null, this.fifthItem = null;
  }
  /**
   *
   * @param cb
   */  runCallback(e) {
    e && e();
  }
  /**
   *
   * @param cb
   */  onThirdZoneLaughsStart(e) {
    return this.thirdZoneLaughsStartFunc = e, this;
  }
  /**
   *
   * @param cb
   */  onThirdZoneLaughsEnd(e) {
    return this.thirdZoneLaughsEndFunc = e, this;
  }
  /**
   *
   * @param cb
   */  onThirdZoneAudioStart(e) {
    return this.thirdZoneAudioStartFunc = e, this;
  }
  /**
   *
   * @param cb
   */  onThirdZoneAudioEnd(e) {
    return this.thirdZoneAudioEndFunc = e, this;
  }
  /**
   *
   * @param cb
   */  onFirstZoneRollingStart(e) {
    return this.firstZoneRollingStartFunc = e, this;
  }
  /**
   *
   * @param cb
   */  onFirstZoneRollingEnd(e) {
    return this.firstZoneRollingEndFunc = e, this;
  }
  /**
   *
   * @param cb
   */  onSecondZoneRollingStart(e) {
    return this.secondZoneRollingStartFunc = e, this;
  }
  /**
   *
   * @param cb
   */  onSecondZoneRollingEnd(e) {
    return this.secondZoneRollingEndFunc = e, this;
  }
  /**
   *
   * @param cb
   */  onThirdZoneImageRollingStart(e) {
    return this.thirdZoneImageRollingStartFunc = e, this;
  }
  /**
   *
   * @param cb
   */  onThirdZoneImageRollingEnd(e) {
    return this.thirdZoneImageRollingEndFunc = e, this;
  }
  /**
   *
   */  playAudioFirstZone() {
    return new Promise(((e, t) => {
      if (!this.canPlayAudio) return void e(!0);
      const n = "B_" + c.startCase(c.camelCase(this.firstItem)).replace(/ /g, "");
      console.log("play audio " + n), h.play(n, (() => e(!0)));
    }));
  }
  /**
   *
   */  playAudioSecondZone() {
    return new Promise(((e, t) => {
      if (!this.canPlayAudio) return void e(!0);
      const n = "C_" + c.startCase(c.camelCase(this.secondItem)).replace(/ /g, "");
      console.log("play audio " + n), h.play(n, (() => e(!0)));
    }));
  }
  /**
   *
   */  playAudioThirdZone() {
    return new Promise(((e, t) => {
      if (!this.canPlayAudio) return void e(!0);
      let n = r(this.thirdItem.audio);
      n = "D_" + c.startCase(c.camelCase(n)).replace(/ /g, ""), console.log("play audio " + n), 
      h.play(n, (() => e(!0)));
    }));
  }
  /**
   *
   */  playLaughs() {
    return new Promise(((e, t) => {
      if (!this.canPlayAudio) return void e(!0);
      let n = r(this.fourthItem);
      n = "F_" + c.camelCase(n).toLowerCase(), console.log("play audio " + n), h.play(n, (() => e(!0)));
    }));
  }
  /**
   *
   */  playInterjection() {
    return new Promise(((e, t) => {
      if (!this.canPlayAudio) return void e(!0);
      const n = "G_" + this.fifthItem;
      console.log("play audio " + n), h.play(n, (() => e(!0)));
    }));
  }
  /**
   *
   */  async replayAudio() {
    this.sequenceInProgress || (this.sequenceInProgress = !0, await this.playAudioFirstZone(), 
    await this.playAudioSecondZone(), await this.waiting(1500), await this.playAudioThirdZone(), 
    await this.waiting(1500), await this.playLaughs(), await this.playInterjection(), 
    this.sequenceInProgress = !1);
  }
  /**
   *
   * @param duration
   */  waiting(e) {
    return new Promise(((t, n) => {
      setTimeout((() => t(!0)), e);
    }));
  }
}

/**
 *
 */
/**
 *
 */
const d = new class {
  /**
   *
   * @param data
   */
  constructor(e) {
    this.data = e;
  }
  /**
   *
   */  generate() {
    const e = new f;
    return e.firstItem = this.data.firstSet[this.randomIndex(this.data.firstSet.length)], 
    e.secondItem = this.data.secondSet[this.randomIndex(this.data.secondSet.length)], 
    e.thirdItem = this.data.thirdSet[this.randomIndex(this.data.thirdSet.length)], e.fourthItem = this.data.fourthSet[this.randomIndex(this.data.fourthSet.length)], 
    e.fifthItem = this.data.fifthSet[this.randomIndex(this.data.fifthSet.length)], e;
  }
  /**
   *
   */  generateZone1() {
    return this.data.firstSet[this.randomIndex(this.data.firstSet.length)];
  }
  /**
   *
   */  generateZone2() {
    return this.data.secondSet[this.randomIndex(this.data.secondSet.length)];
  }
  /**
   *
   */  generateZone3() {
    return this.data.thirdSet[this.randomIndex(this.data.thirdSet.length)];
  }
  /**
   *
   * @param maxIndex
   * @private
   */  randomIndex(e) {
    return Math.floor(Math.random() * Math.floor(e));
  }
}(a), p = class {
  /**
   *
   */
  constructor(e) {
    t(this, e), 
    /**
     *
     */
    this.tcMachine = i;
  }
  /**
   *
   */  componentDidRender() {
    setTimeout((() => {
      this.drawInterestZone(this.zone1, this.tcMachine.zone1), this.drawInterestZone(this.zone2, this.tcMachine.zone2), 
      this.drawInterestZone(this.zone3, this.tcMachine.zone3), this.attachAnimationListener(), 
      this.drawStartBtn(!0), this.drawBackBtn(), this.drawReplayAudioBtn(!0);
    }), 500);
  }
  /**
   *
   * @param _evt
   */  onWindowResize(e) {
    this.drawInterestZone(this.zone1, this.tcMachine.zone1), this.drawInterestZone(this.zone2, this.tcMachine.zone2), 
    this.drawInterestZone(this.zone3, this.tcMachine.zone3), this.drawStartBtn(!1), 
    this.drawBackBtn(), this.drawReplayAudioBtn(!1);
  }
  /**
   *
   * @param elem
   * @private
   */  sizeRatioWidth() {
    let e = 1;
    return this.machineImage && (e = this.machineImage.clientWidth / this.machineImage.naturalWidth), 
    e = e || 1, e;
  }
  /**
   *
   * @private
   */  drawReplayAudioBtn(e) {
    this.replayAudioBtn.style.left = this.computeInterestZoneX(this.tcMachine.replayAudioBtn, this.machineImage.getBoundingClientRect().left), 
    this.replayAudioBtn.style.top = this.computeInterestZoneY(this.tcMachine.replayAudioBtn, this.machineImage.getBoundingClientRect().top), 
    this.replayAudioBtn.style.width = this.computeInterestZoneWidth(this.tcMachine.replayAudioBtn), 
    this.replayAudioBtn.style.height = this.computeInterestZoneHeight(this.tcMachine.replayAudioBtn), 
    e && (this.replayAudioBtn.onclick = () => {
      this.combination && this.combination.replayAudio();
    });
  }
  /**
   *
   * @private
   */  drawBackBtn() {
    this.backBtn.style.left = this.computeInterestZoneX(this.tcMachine.backBtn, this.machineImage.getBoundingClientRect().left), 
    this.backBtn.style.top = this.computeInterestZoneY(this.tcMachine.backBtn, this.machineImage.getBoundingClientRect().top), 
    this.backBtn.style.width = this.computeInterestZoneWidth(this.tcMachine.backBtn), 
    this.backBtn.style.height = this.computeInterestZoneHeight(this.tcMachine.backBtn);
  }
  /**
   *
   * @private
   */  drawStartBtn(e) {
    const t = this.machineImage.getBoundingClientRect();
    this.startBtn.style.left = this.computeInterestZoneX(this.tcMachine.startBtn, t.left), 
    this.startBtn.style.top = this.computeInterestZoneY(this.tcMachine.startBtn, t.top), 
    this.startBtn.style.width = this.computeInterestZoneWidth(this.tcMachine.startBtn), 
    this.startBtn.style.height = this.computeInterestZoneHeight(this.tcMachine.startBtn), 
    // start zone 1
    this.startZone1Btn.style.left = this.computeInterestZoneX(this.tcMachine.startZone1Btn, t.left), 
    this.startZone1Btn.style.top = this.computeInterestZoneY(this.tcMachine.startZone1Btn, t.top), 
    this.startZone1Btn.style.width = this.computeInterestZoneWidth(this.tcMachine.startZone1Btn), 
    this.startZone1Btn.style.height = this.computeInterestZoneHeight(this.tcMachine.startZone1Btn), 
    // start zone 2
    this.startZone2Btn.style.left = this.computeInterestZoneX(this.tcMachine.startZone2Btn, t.left), 
    this.startZone2Btn.style.top = this.computeInterestZoneY(this.tcMachine.startZone2Btn, t.top), 
    this.startZone2Btn.style.width = this.computeInterestZoneWidth(this.tcMachine.startZone2Btn), 
    this.startZone2Btn.style.height = this.computeInterestZoneHeight(this.tcMachine.startZone2Btn), 
    // start zone 3
    this.startZone3Btn.style.left = this.computeInterestZoneX(this.tcMachine.startZone3Btn, t.left), 
    this.startZone3Btn.style.top = this.computeInterestZoneY(this.tcMachine.startZone3Btn, t.top), 
    this.startZone3Btn.style.width = this.computeInterestZoneWidth(this.tcMachine.startZone3Btn), 
    this.startZone3Btn.style.height = this.computeInterestZoneHeight(this.tcMachine.startZone3Btn), 
    // attach listener
    e && (this.startBtn.onclick = () => {
      this.combination && this.combination.stop(), this.combination = d.generate(), this.bindData(this.combination), 
      this.combination.onFirstZoneRollingStart(this.startFirstZoneRolling()).onFirstZoneRollingEnd(this.endFirstZoneRolling()).onSecondZoneRollingStart(this.startSecondZoneRolling()).onSecondZoneRollingEnd(this.endSecondZoneRolling()).onThirdZoneImageRollingStart(this.startThirdImageZoneRolling()).onThirdZoneImageRollingEnd(this.endThirdImageZoneRolling()).onThirdZoneAudioStart(this.onThirdZoneAudioStart).onThirdZoneAudioEnd(this.onThirdZoneAudioEnd).onThirdZoneLaughsStart(this.onThirdZoneLaughsStart).onThirdZoneLaughsEnd(this.onThirdZoneLaughsEnd).play();
    }, this.startZone1Btn.onclick = () => {
      this.combination && this.combination.playZone1();
    }, this.startZone2Btn.onclick = () => {
      this.combination && (console.log("startZone2Btn > playZone2"), this.combination.playZone2());
    }, this.startZone3Btn.onclick = () => {
      this.combination && this.combination.playZone3();
    });
  }
  /**
   *
   * @param zone
   * @param izone
   * @private
   */  drawInterestZone(e, t) {
    e.style.left = this.computeInterestZoneX(t, this.machineImage.getBoundingClientRect().left), 
    e.style.top = this.computeInterestZoneY(t, this.machineImage.getBoundingClientRect().top), 
    e.style.width = this.computeInterestZoneWidth(t), e.style.height = this.computeInterestZoneHeight(t);
  }
  /**
   *
   * @param elem
   * @private
   */  sizeRatioHeight() {
    let e = 1;
    return this.machineImage && (e = this.machineImage.clientHeight / this.machineImage.naturalHeight), 
    e = e || 1, e;
  }
  /**
   *
   * @param zone
   */  computeInterestZoneX(e, t) {
    return e.firstCornerX * this.sizeRatioWidth() + t + "px";
  }
  /**
   *
   * @param zone
   */  computeInterestZoneY(e, t) {
    return e.firstCornerY * this.sizeRatioHeight() - t + "px";
  }
  /**
   *
   * @param zone
   */  computeInterestZoneWidth(e) {
    return (e.secondCornerX - e.firstCornerX) * this.sizeRatioWidth() + "px";
  }
  /**
   *
   * @param zone
   */  computeInterestZoneHeight(e) {
    return (e.secondCornerY - e.firstCornerY) * this.sizeRatioHeight() + "px";
  }
  /**
   *
   */  render() {
    return console.log("render function...."), n("div", {
      class: "toc-toc-machine-container"
    }, n("img", {
      ref: e => this.machineImage = e,
      class: "toc-toc-machine-decor",
      src: "/projecta/assets/bg/machine_toctoc_bg.png"
    }), n("div", {
      ref: e => this.zone1 = e,
      class: {
        "toc-toc-machine-interest-zone": !0,
        "toc-toc-machine-interest-zone1": !0,
        "show-border": true
      }
    }, n("span", null)), n("div", {
      ref: e => this.zone2 = e,
      class: {
        "toc-toc-machine-interest-zone": !0,
        "toc-toc-machine-interest-zone2": !0,
        "show-border": true
      }
    }, n("span", null)), n("div", {
      ref: e => this.zone3 = e,
      class: {
        "toc-toc-machine-interest-zone": !0,
        "toc-toc-machine-interest-zone3": !0,
        "show-border": true
      }
    }, n("img", null)), n("div", {
      ref: e => this.startBtn = e,
      class: {
        "toc-toc-machine-start-btn": !0,
        "show-border": true
      }
    }), n("div", {
      ref: e => this.startZone1Btn = e,
      class: {
        "toc-toc-machine-start-btn": !0,
        "show-border": true
      }
    }), n("div", {
      ref: e => this.startZone2Btn = e,
      class: {
        "toc-toc-machine-start-btn": !0,
        "show-border": true
      }
    }), n("div", {
      ref: e => this.startZone3Btn = e,
      class: {
        "toc-toc-machine-start-btn": !0,
        "show-border": true
      }
    }), n("div", {
      ref: e => this.replayAudioBtn = e,
      class: {
        "toc-toc-machine-replay-audio-btn": !0,
        "show-border": true
      }
    }), n("stencil-route-link", {
      url: "/projecta/toctoc-machine.html"
    }, n("a", {
      ref: e => this.backBtn = e,
      class: {
        "toc-toc-machine-back-btn": !0,
        "show-border": true
      }
    })));
  }
  /**
   *
   * @private
   */  startFirstZoneRolling() {
    return () => {
      this.zone1.getElementsByTagName("span")[0].classList.add("rolling-item");
    };
  }
  /**
   *
   * @private
   */  startSecondZoneRolling() {
    return () => {
      this.zone2.getElementsByTagName("span")[0].classList.add("rolling-item");
    };
  }
  /**
   *
   * @private
   */  endFirstZoneRolling() {
    return () => {
      this.zone1.getElementsByTagName("span")[0].classList.remove("rolling-item"), this.bindDataZone1(this.combination);
    };
  }
  /**
   *
   * @private
   */  endSecondZoneRolling() {
    return () => {
      this.zone2.getElementsByTagName("span")[0].classList.remove("rolling-item"), this.bindDataZone2(this.combination);
    };
  }
  /**
   *
   * @private
   */  startThirdImageZoneRolling() {
    return () => {
      this.zone3.getElementsByTagName("img")[0].classList.add("rolling-item");
    };
  }
  /**
   *
   * @private
   */  endThirdImageZoneRolling() {
    return () => {
      this.zone3.getElementsByTagName("img")[0].classList.remove("rolling-item"), this.bindDataZone3(this.combination);
    };
  }
  /**
   *
   * @private
   */  onThirdZoneAudioStart() {}
  /**
   *
   * @private
   */  onThirdZoneAudioEnd() {}
  /**
   *
   * @private
   */  onThirdZoneLaughsStart() {}
  /**
   *
   * @private
   */  onThirdZoneLaughsEnd() {}
  /**
   *
   * @param combination
   * @private
   */  bindData(e) {
    console.log("bind data"), this.bindDataZone1(e), this.bindDataZone2(e), this.bindDataZone3(e);
  }
  /**
   *
   * @param combination
   * @private
   */  bindDataZone1(e) {
    this.zone1.getElementsByTagName("span")[0].innerText = e.firstItem;
  }
  /**
   *
   * @param combination
   * @private
   */  bindDataZone2(e) {
    this.zone2.getElementsByTagName("span")[0].innerText = e.secondItem;
  }
  /**
   *
   * @param combination
   * @private
   */  bindDataZone3(t) {
    const n = r(t.thirdItem.image), a = r(t.thirdItem.audio);
    this.zone3.getElementsByTagName("img")[0].src = e("assets/image/E_" + n.toLowerCase()) + "_" + a.toLowerCase().replace(/ /g, "_") + ".png";
  }
  /**
   *
   * @private
   */  attachAnimationListener() {
    this.zone1.onanimationiteration = () => {
      this.bindDataZone1(d.generate());
    }, this.zone2.onanimationiteration = () => {
      this.bindDataZone2(d.generate());
    }, this.zone3.onanimationiteration = () => {
      this.bindDataZone3(d.generate());
    };
  }
};

p.style = ":host{display:block}.toc-toc-machine-container{text-align:center;height:100%;background-color:rgb(255, 254, 240)}.toc-toc-machine-decor{max-width:100%;max-height:100%;height:auto;}.toc-toc-machine-interest-zone{font-size:20px;box-sizing:border-box;padding:5px;position:absolute;overflow:hidden}@keyframes rolling{0%{top:50%;opacity:1}10%{top:60%;opacity:1}20%{top:70%;opacity:0.8}30%{top:80%;opacity:0.6}40%{top:90%;opacity:0.2}50%{top:100%;opacity:0}60%{top:10%;opacity:0.4}70%{top:20%;opacity:0.6}80%{top:30%;opacity:0.8}90%{top:40%;opacity:1}100%{top:50%;opacity:1}}@keyframes rolling-img{0%{top:50%;opacity:1}10%{top:70%;opacity:1}20%{top:90%;opacity:0.8}30%{top:120%;opacity:0.6}40%{top:140%;opacity:0.2}50%{top:160%;opacity:0}60%{top:-40%;opacity:0}70%{top:-20%;opacity:0.6}80%{top:0%;opacity:0.8}90%{top:20%;opacity:1}100%{top:50%;opacity:1}}.toc-toc-machine-interest-zone>span{position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);width:90%}.toc-toc-machine-interest-zone>span.rolling-item{color:transparent;text-shadow:0 0 8px #000;animation:rolling 0.3s linear infinite}.toc-toc-machine-interest-zone3>img{position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);width:90%}.toc-toc-machine-interest-zone3>img.rolling-item{filter:blur(6px);-webkit-filter:blur(6px);animation:rolling-img 0.3s linear infinite}.toc-toc-machine-start-btn{cursor:pointer;position:absolute;border-radius:50%}.toc-toc-machine-replay-audio-btn{cursor:pointer;position:absolute;border-radius:50%}.toc-toc-machine-back-btn{cursor:pointer;position:absolute;border-radius:50%}";

export { p as app_toctoc_machine }