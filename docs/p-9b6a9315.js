/**
 * TS adaption of https://github.com/pillarjs/path-to-regexp/blob/master/index.js
 */
/**
 * Default configs.
 */
const e = new RegExp([ 
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
"(\\\\.)", 
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?"]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined]
"(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?" ].join("|"), "g"), escapeString = e => e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"), escapeGroup = e => e.replace(/([=!:$/()])/g, "\\$1"), flags = e => e && e.sensitive ? "" : "i", stringToRegexp = (t, r, n) => tokensToRegExp(((t, r) => {
  for (var n, a = [], s = 0, i = 0, h = "", l = r && r.delimiter || "/", o = r && r.delimiters || "./", c = !1; null !== (n = e.exec(t)); ) {
    var p = n[0], u = n[1], f = n.index;
    // Ignore already escaped sequences.
    if (h += t.slice(i, f), i = f + p.length, u) h += u[1], c = !0; else {
      var d = "", g = t[i], m = n[2], y = n[3], x = n[4], v = n[5];
      if (!c && h.length) {
        var A = h.length - 1;
        o.indexOf(h[A]) > -1 && (d = h[A], h = h.slice(0, A));
      }
      // Push the current path onto the tokens.
            h && (a.push(h), h = "", c = !1);
      var O = "" !== d && void 0 !== g && g !== d, b = "+" === v || "*" === v, E = "?" === v || "*" === v, R = d || l, k = y || x;
      a.push({
        name: m || s++,
        prefix: d,
        delimiter: R,
        optional: E,
        repeat: b,
        partial: O,
        pattern: k ? escapeGroup(k) : "[^" + escapeString(R) + "]+?"
      });
    }
  }
  // Push any remaining characters.
    return (h || i < t.length) && a.push(h + t.substr(i)), a;
})(t, n), r, n), tokensToRegExp = (e, t, r) => {
  // Iterate over the tokens and create our regexp string.
  for (var n = (r = r || {}).strict, a = !1 !== r.end, s = escapeString(r.delimiter || "/"), i = r.delimiters || "./", h = [].concat(r.endsWith || []).map(escapeString).concat("$").join("|"), l = "", o = !1, c = 0; c < e.length; c++) {
    var p = e[c];
    if ("string" == typeof p) l += escapeString(p), o = c === e.length - 1 && i.indexOf(p[p.length - 1]) > -1; else {
      var u = escapeString(p.prefix || ""), f = p.repeat ? "(?:" + p.pattern + ")(?:" + u + "(?:" + p.pattern + "))*" : p.pattern;
      t && t.push(p), p.optional ? p.partial ? l += u + "(" + f + ")?" : l += "(?:" + u + "(" + f + "))?" : l += u + "(" + f + ")";
    }
  }
  return a ? (n || (l += "(?:" + s + ")?"), l += "$" === h ? "$" : "(?=" + h + ")") : (n || (l += "(?:" + s + "(?=" + h + "))?"), 
  o || (l += "(?=" + s + "|" + h + ")")), new RegExp("^" + l, flags(r));
}, pathToRegexp = (e, t, r) => e instanceof RegExp ? ((e, t) => {
  if (!t) return e;
  // Use a negative lookahead to match only capturing groups.
    var r = e.source.match(/\((?!\?)/g);
  if (r) for (var n = 0; n < r.length; n++) t.push({
    name: n,
    prefix: null,
    delimiter: null,
    optional: !1,
    repeat: !1,
    partial: !1,
    pattern: null
  });
  return e;
})(e, t) : Array.isArray(e) ? ((e, t, r) => {
  for (var n = [], a = 0; a < e.length; a++) n.push(pathToRegexp(e[a], t, r).source);
  return new RegExp("(?:" + n.join("|") + ")", flags(r));
})(e, t, r) : stringToRegexp(e, t, r), hasBasename = (e, t) => new RegExp("^" + t + "(\\/|\\?|#|$)", "i").test(e), stripBasename = (e, t) => hasBasename(e, t) ? e.substr(t.length) : e, stripTrailingSlash = e => "/" === e.charAt(e.length - 1) ? e.slice(0, -1) : e, addLeadingSlash = e => "/" === e.charAt(0) ? e : "/" + e, stripLeadingSlash = e => "/" === e.charAt(0) ? e.substr(1) : e, createPath = e => {
  const {pathname: t, search: r, hash: n} = e;
  let a = t || "/";
  return r && "?" !== r && (a += "?" === r.charAt(0) ? r : "?" + r), n && "#" !== n && (a += "#" === n.charAt(0) ? n : "#" + n), 
  a;
}, isAbsolute = e => "/" === e.charAt(0), createKey = e => Math.random().toString(36).substr(2, e), spliceOne = (e, t) => {
  for (let r = t, n = r + 1, a = e.length; n < a; r += 1, n += 1) e[r] = e[n];
  e.pop();
}, valueEqual = (e, t) => {
  if (e === t) return !0;
  if (null == e || null == t) return !1;
  if (Array.isArray(e)) return Array.isArray(t) && e.length === t.length && e.every(((e, r) => valueEqual(e, t[r])));
  const r = typeof e;
  if (r !== typeof t) return !1;
  if ("object" === r) {
    const r = e.valueOf(), n = t.valueOf();
    if (r !== e || n !== t) return valueEqual(r, n);
    const a = Object.keys(e), s = Object.keys(t);
    return a.length === s.length && a.every((r => valueEqual(e[r], t[r])));
  }
  return !1;
}, locationsAreEqual = (e, t) => e.pathname === t.pathname && e.search === t.search && e.hash === t.hash && e.key === t.key && valueEqual(e.state, t.state), createLocation = (e, t, r, n) => {
  let a;
  "string" == typeof e ? (
  // Two-arg form: push(path, state)
  a = (e => {
    let t = e || "/", r = "", n = "";
    const a = t.indexOf("#");
    -1 !== a && (n = t.substr(a), t = t.substr(0, a));
    const s = t.indexOf("?");
    return -1 !== s && (r = t.substr(s), t = t.substr(0, s)), {
      pathname: t,
      search: "?" === r ? "" : r,
      hash: "#" === n ? "" : n,
      query: {},
      key: ""
    };
  })(e), void 0 !== t && (a.state = t)) : (
  // One-arg form: push(location)
  a = Object.assign({
    pathname: ""
  }, e), a.search && "?" !== a.search.charAt(0) && (a.search = "?" + a.search), a.hash && "#" !== a.hash.charAt(0) && (a.hash = "#" + a.hash), 
  void 0 !== t && void 0 === a.state && (a.state = t));
  try {
    a.pathname = decodeURI(a.pathname);
  } catch (e) {
    throw e instanceof URIError ? new URIError('Pathname "' + a.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.') : e;
  }
  var s;
  return a.key = r, n ? 
  // Resolve incomplete/relative pathname relative to current location.
  a.pathname ? "/" !== a.pathname.charAt(0) && (a.pathname = ((e, t = "") => {
    let r, n = t && t.split("/") || [], a = 0;
    const s = e && e.split("/") || [], i = e && isAbsolute(e), h = t && isAbsolute(t), l = i || h;
    if (e && isAbsolute(e) ? 
    // to is absolute
    n = s : s.length && (
    // to is relative, drop the filename
    n.pop(), n = n.concat(s)), !n.length) return "/";
    if (n.length) {
      const e = n[n.length - 1];
      r = "." === e || ".." === e || "" === e;
    } else r = !1;
    for (let e = n.length; e >= 0; e--) {
      const t = n[e];
      "." === t ? spliceOne(n, e) : ".." === t ? (spliceOne(n, e), a++) : a && (spliceOne(n, e), 
      a--);
    }
    if (!l) for (;a--; a) n.unshift("..");
    !l || "" === n[0] || n[0] && isAbsolute(n[0]) || n.unshift("");
    let o = n.join("/");
    return r && "/" !== o.substr(-1) && (o += "/"), o;
  })(a.pathname, n.pathname)) : a.pathname = n.pathname : 
  // When there is no prior location and pathname is empty, set it to /
  a.pathname || (a.pathname = "/"), a.query = (s = a.search || "") ? (/^[?#]/.test(s) ? s.slice(1) : s).split("&").reduce(((e, t) => {
    let [r, n] = t.split("=");
    return e[r] = n ? decodeURIComponent(n.replace(/\+/g, " ")) : "", e;
  }), {}) : {}, a;
};

let t = 0;

const r = {}, matchPath = (e, n = {}) => {
  "string" == typeof n && (n = {
    path: n
  });
  const {path: a = "/", exact: s = !1, strict: i = !1} = n, {re: h, keys: l} = ((e, n) => {
    const a = `${n.end}${n.strict}`, s = r[a] || (r[a] = {}), i = JSON.stringify(e);
    if (s[i]) return s[i];
    const h = [], l = {
      re: pathToRegexp(e, h, n),
      keys: h
    };
    return t < 1e4 && (s[i] = l, t += 1), l;
  })(a, {
    end: s,
    strict: i
  }), o = h.exec(e);
  if (!o) return null;
  const [c, ...p] = o, u = e === c;
  return s && !u ? null : {
    path: a,
    url: "/" === a && "" === c ? "/" : c,
    isExact: u,
    params: l.reduce(((e, t, r) => (e[t.name] = p[r], e)), {})
  };
}, matchesAreEqual = (e, t) => null == e && null == t || null != t && (e && t && e.path === t.path && e.url === t.url && valueEqual(e.params, t.params)), getConfirmation = (e, t, r) => r(e.confirm(t)), isModifiedEvent = e => e.metaKey || e.altKey || e.ctrlKey || e.shiftKey
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */ , supportsHistory = e => {
  const t = e.navigator.userAgent;
  return (-1 === t.indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone")) && (e.history && "pushState" in e.history);
}, supportsPopStateOnHashChange = e => -1 === e.userAgent.indexOf("Trident")
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */ , supportsGoWithoutReloadUsingHash = e => -1 === e.userAgent.indexOf("Firefox"), isExtraneousPopstateEvent = (e, t) => void 0 === t.state && -1 === e.userAgent.indexOf("CriOS"), storageAvailable = (e, t) => {
  const r = e[t], n = "__storage_test__";
  try {
    return r.setItem(n, n), r.removeItem(n), !0;
  } catch (e) {
    return e instanceof DOMException && (
    // everything except Firefox
    22 === e.code || 
    // Firefox
    1014 === e.code || 
    // test name field too, because code might not be present
    // everything except Firefox
    "QuotaExceededError" === e.name || 
    // Firefox
    "NS_ERROR_DOM_QUOTA_REACHED" === e.name) && 
    // acknowledge QuotaExceededError only if there's something already stored
    0 !== r.length;
  }
};

export { matchesAreEqual as a, supportsHistory as b, supportsPopStateOnHashChange as c, stripTrailingSlash as d, addLeadingSlash as e, createLocation as f, createKey as g, hasBasename as h, stripBasename as i, createPath as j, getConfirmation as k, isExtraneousPopstateEvent as l, matchPath as m, supportsGoWithoutReloadUsingHash as n, stripLeadingSlash as o, locationsAreEqual as p, isModifiedEvent as q, storageAvailable as s }