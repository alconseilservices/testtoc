import { r as t, h as e, g as s, a as o } from "./p-f68e5270.js";

import { A as i } from "./p-114593eb.js";

import { m as n, a as r, s as a, b as c, c as l, d as h, e as p, f as u, g as d, h as f, i as m, j as g, k as y, l as b, n as w, o as T, p as v } from "./p-9b6a9315.js";

const O = class {
  constructor(e) {
    t(this, e);
  }
  /**
   *
   */  componentWillLoad() {
    this.baseUrl = location.pathname.substring(0, location.pathname.lastIndexOf("/"));
  }
  /**
   *
   */  render() {
    return e("div", {
      class: "app-root-full-container noscroll"
    }, e("main", null, e("stencil-router", null, e("stencil-route-switch", {
      scrollTopOffset: 0
    }, e("stencil-route", {
      url: this.baseUrl + "/app.html",
      component: "app-home"
    }), e("stencil-route", {
      url: this.baseUrl + "/les-mots-toctoc.html",
      component: "les-mots-toctoc"
    }), e("stencil-route", {
      url: this.baseUrl + "/les-phrases-toctoc.html",
      component: "les-phrases-toctoc"
    })))));
  }
};

O.style = "header{background:#5851ff;color:white;height:56px;display:flex;align-items:center;box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.26)}h1{font-size:1.4rem;font-weight:500;color:#fff;padding:0 12px}.app-root-full-container{height:100%}.app-root-full-container>main{height:100%}";

const P = class {
  constructor(e) {
    t(this, e), this.group = null, this.match = null, this.componentProps = {}, this.exact = !1, 
    this.scrollOnNextRender = !1, this.previousMatch = null;
  }
  // Identify if the current route is a match.
  computeMatch(t) {
    const e = null != this.group || null != this.el.parentElement && "stencil-route-switch" === this.el.parentElement.tagName.toLowerCase();
    if (t && !e) return this.previousMatch = this.match, this.match = n(t.pathname, {
      path: this.url,
      exact: this.exact,
      strict: !0
    });
  }
  async loadCompleted() {
    let t = {};
    this.history && this.history.location.hash ? t = {
      scrollToId: this.history.location.hash.substr(1)
    } : this.scrollTopOffset && (t = {
      scrollTopOffset: this.scrollTopOffset
    }), 
    // After all children have completed then tell switch
    // the provided callback will get executed after this route is in view
    "function" == typeof this.componentUpdated ? this.componentUpdated(t) : this.match && !r(this.match, this.previousMatch) && this.routeViewsUpdated && this.routeViewsUpdated(t);
  }
  async componentDidUpdate() {
    await this.loadCompleted();
  }
  async componentDidLoad() {
    await this.loadCompleted();
  }
  render() {
    // If there is no activeRouter then do not render
    // Check if this route is in the matching URL (for example, a parent route)
    if (!this.match || !this.history) return null;
    // component props defined in route
    // the history api
    // current match data including params
        const t = Object.assign({}, this.componentProps, {
      history: this.history,
      match: this.match
    });
    // If there is a routerRender defined then use
    // that and pass the component and component props with it.
        if (this.routeRender) return this.routeRender(Object.assign({}, t, {
      component: this.component
    }));
    if (this.component) {
      const s = this.component;
      return e(s, Object.assign({}, t));
    }
  }
  get el() {
    return s(this);
  }
  static get watchers() {
    return {
      location: [ "computeMatch" ]
    };
  }
};

i.injectProps(P, [ "location", "history", "historyType", "routeViewsUpdated" ]), 
P.style = "stencil-route.inactive{display:none}";

const isHTMLStencilRouteElement = t => "STENCIL-ROUTE" === t.tagName, x = class {
  constructor(e) {
    t(this, e), this.group = ((1e17 * Math.random()).toString().match(/.{4}/g) || []).join("-"), 
    this.subscribers = [], this.queue = o(this, "queue");
  }
  componentWillLoad() {
    null != this.location && this.regenerateSubscribers(this.location);
  }
  async regenerateSubscribers(t) {
    if (null == t) return;
    let e = -1;
    if (this.subscribers = Array.prototype.slice.call(this.el.children).filter(isHTMLStencilRouteElement).map(((s, o) => {
      const i = (r = t.pathname, a = s.url, c = s.exact, n(r, {
        path: a,
        exact: c,
        strict: !0
      }));
      var r, a, c;
      return i && -1 === e && (e = o), {
        el: s,
        match: i
      };
    })), -1 === e) return;
    // Check if this actually changes which child is active
    // then just pass the new match down if the active route isn't changing.
        if (this.activeIndex === e) return void (this.subscribers[e].el.match = this.subscribers[e].match);
    this.activeIndex = e;
    // Set all props on the new active route then wait until it says that it
    // is completed
    const s = this.subscribers[this.activeIndex];
    this.scrollTopOffset && (s.el.scrollTopOffset = this.scrollTopOffset), s.el.group = this.group, 
    s.el.match = s.match, s.el.componentUpdated = t => {
      // After the new active route has completed then update visibility of routes
      this.queue.write((() => {
        this.subscribers.forEach(((t, e) => {
          if (t.el.componentUpdated = void 0, e === this.activeIndex) return t.el.style.display = "";
          this.scrollTopOffset && (t.el.scrollTopOffset = this.scrollTopOffset), t.el.group = this.group, 
          t.el.match = null, t.el.style.display = "none";
        }));
      })), this.routeViewsUpdated && this.routeViewsUpdated(Object.assign({
        scrollTopOffset: this.scrollTopOffset
      }, t));
    };
  }
  render() {
    return e("slot", null);
  }
  get el() {
    return s(this);
  }
  static get watchers() {
    return {
      location: [ "regenerateSubscribers" ]
    };
  }
};

i.injectProps(x, [ "location", "routeViewsUpdated" ]);

const warning = (t, ...e) => {
  t || console.warn(...e);
}, createTransitionManager = () => {
  let t, e = [];
  return {
    setPrompt: e => (warning(null == t, "A history supports only one prompt at a time"), 
    t = e, () => {
      t === e && (t = null);
    }),
    confirmTransitionTo: (e, s, o, i) => {
      // TODO: If another transition starts while we're still confirming
      // the previous one, we may end up in a weird state. Figure out the
      // best way to handle this.
      if (null != t) {
        const n = "function" == typeof t ? t(e, s) : t;
        "string" == typeof n ? "function" == typeof o ? o(n, i) : (warning(!1, "A history needs a getUserConfirmation function in order to use a prompt message"), 
        i(!0)) : 
        // Return false from a transition hook to cancel the transition.
        i(!1 !== n);
      } else i(!0);
    },
    appendListener: t => {
      let s = !0;
      const listener = (...e) => {
        s && t(...e);
      };
      return e.push(listener), () => {
        s = !1, e = e.filter((t => t !== listener));
      };
    },
    notifyListeners: (...t) => {
      e.forEach((e => e(...t)));
    }
  };
}, createScrollHistory = (t, e = "scrollPositions") => {
  let s = new Map;
  const set = (e, o) => {
    if (s.set(e, o), a(t, "sessionStorage")) {
      const e = [];
      s.forEach(((t, s) => {
        e.push([ s, t ]);
      })), t.sessionStorage.setItem("scrollPositions", JSON.stringify(e));
    }
  };
  if (a(t, "sessionStorage")) {
    const o = t.sessionStorage.getItem(e);
    s = o ? new Map(JSON.parse(o)) : s;
  }
  return "scrollRestoration" in t.history && (history.scrollRestoration = "manual"), 
  {
    set,
    get: t => s.get(t),
    has: t => s.has(t),
    capture: e => {
      set(e, [ t.scrollX, t.scrollY ]);
    }
  };
}, L = {
  hashbang: {
    encodePath: t => "!" === t.charAt(0) ? t : "!/" + T(t),
    decodePath: t => "!" === t.charAt(0) ? t.substr(1) : t
  },
  noslash: {
    encodePath: T,
    decodePath: p
  },
  slash: {
    encodePath: p,
    decodePath: p
  }
}, getLocation = (t, e) => {
  // Remove the root URL if found at beginning of string
  const s = 0 == t.pathname.indexOf(e) ? "/" + t.pathname.slice(e.length) : t.pathname;
  return Object.assign({}, t, {
    pathname: s
  });
}, U = {
  browser: (t, e = {}) => {
    let s = !1;
    const o = t.history, i = t.location, n = t.navigator, r = c(t), a = !l(n), w = createScrollHistory(t), T = null != e.forceRefresh && e.forceRefresh, v = null != e.getUserConfirmation ? e.getUserConfirmation : y, O = null != e.keyLength ? e.keyLength : 6, P = e.basename ? h(p(e.basename)) : "", getHistoryState = () => {
      try {
        return t.history.state || {};
      } catch (t) {
        // IE 11 sometimes throws when accessing window.history.state
        // See https://github.com/ReactTraining/history/pull/289
        return {};
      }
    }, getDOMLocation = t => {
      t = t || {};
      const {key: e, state: s} = t, {pathname: o, search: n, hash: r} = i;
      let a = o + n + r;
      return warning(!P || f(a, P), 'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "' + a + '" to begin with "' + P + '".'), 
      P && (a = m(a, P)), u(a, s, e || d(O));
    }, x = createTransitionManager(), setState = t => {
      // Capture location for the view before changing history.
      w.capture(E.location.key), Object.assign(E, t), 
      // Set scroll position based on its previous storage value
      E.location.scrollPosition = w.get(E.location.key), E.length = o.length, x.notifyListeners(E.location, E.action);
    }, handlePopState = t => {
      // Ignore extraneous popstate events in WebKit.
      b(n, t) || handlePop(getDOMLocation(t.state));
    }, handleHashChange = () => {
      handlePop(getDOMLocation(getHistoryState()));
    }, handlePop = t => {
      if (s) s = !1, setState(); else {
        const e = "POP";
        x.confirmTransitionTo(t, e, v, (s => {
          s ? setState({
            action: e,
            location: t
          }) : revertPop(t);
        }));
      }
    }, revertPop = t => {
      const e = E.location;
      // TODO: We could probably make this more reliable by
      // keeping a list of keys we've seen in sessionStorage.
      // Instead, we just default to 0 for keys we don't know.
            let o = U.indexOf(e.key), i = U.indexOf(t.key);
      -1 === o && (o = 0), -1 === i && (i = 0);
      const n = o - i;
      n && (s = !0, go(n));
    }, L = getDOMLocation(getHistoryState());
    let U = [ L.key ], k = 0, S = !1;
    // Public interface
    const createHref = t => P + g(t), go = t => {
      o.go(t);
    }, checkDOMListeners = e => {
      k += e, 1 === k ? (t.addEventListener("popstate", handlePopState), a && t.addEventListener("hashchange", handleHashChange)) : 0 === k && (t.removeEventListener("popstate", handlePopState), 
      a && t.removeEventListener("hashchange", handleHashChange));
    }, E = {
      length: o.length,
      action: "POP",
      location: L,
      createHref,
      push: (t, e) => {
        warning(!("object" == typeof t && void 0 !== t.state && void 0 !== e), "You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");
        const s = "PUSH", n = u(t, e, d(O), E.location);
        x.confirmTransitionTo(n, s, v, (t => {
          if (!t) return;
          const e = createHref(n), {key: a, state: c} = n;
          if (r) if (o.pushState({
            key: a,
            state: c
          }, "", e), T) i.href = e; else {
            const t = U.indexOf(E.location.key), e = U.slice(0, -1 === t ? 0 : t + 1);
            e.push(n.key), U = e, setState({
              action: s,
              location: n
            });
          } else warning(void 0 === c, "Browser history cannot push state in browsers that do not support HTML5 history"), 
          i.href = e;
        }));
      },
      replace: (t, e) => {
        warning(!("object" == typeof t && void 0 !== t.state && void 0 !== e), "You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");
        const s = "REPLACE", n = u(t, e, d(O), E.location);
        x.confirmTransitionTo(n, s, v, (t => {
          if (!t) return;
          const e = createHref(n), {key: a, state: c} = n;
          if (r) if (o.replaceState({
            key: a,
            state: c
          }, "", e), T) i.replace(e); else {
            const t = U.indexOf(E.location.key);
            -1 !== t && (U[t] = n.key), setState({
              action: s,
              location: n
            });
          } else warning(void 0 === c, "Browser history cannot replace state in browsers that do not support HTML5 history"), 
          i.replace(e);
        }));
      },
      go,
      goBack: () => go(-1),
      goForward: () => go(1),
      block: (t = "") => {
        const e = x.setPrompt(t);
        return S || (checkDOMListeners(1), S = !0), () => (S && (S = !1, checkDOMListeners(-1)), 
        e());
      },
      listen: t => {
        const e = x.appendListener(t);
        return checkDOMListeners(1), () => {
          checkDOMListeners(-1), e();
        };
      },
      win: t
    };
    return E;
  },
  hash: (t, e = {}) => {
    let s = !1, o = null, i = 0, n = !1;
    const r = t.location, a = t.history, c = w(t.navigator), l = null != e.keyLength ? e.keyLength : 6, {getUserConfirmation: b = y, hashType: T = "slash"} = e, O = e.basename ? h(p(e.basename)) : "", {encodePath: P, decodePath: x} = L[T], getHashPath = () => {
      // We can't use window.location.hash here because it's not
      // consistent across browsers - Firefox will pre-decode it!
      const t = r.href, e = t.indexOf("#");
      return -1 === e ? "" : t.substring(e + 1);
    }, replaceHashPath = t => {
      const e = r.href.indexOf("#");
      r.replace(r.href.slice(0, e >= 0 ? e : 0) + "#" + t);
    }, getDOMLocation = () => {
      let t = x(getHashPath());
      return warning(!O || f(t, O), 'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "' + t + '" to begin with "' + O + '".'), 
      O && (t = m(t, O)), u(t, void 0, d(l));
    }, U = createTransitionManager(), setState = t => {
      Object.assign(I, t), I.length = a.length, U.notifyListeners(I.location, I.action);
    }, handleHashChange = () => {
      const t = getHashPath(), e = P(t);
      if (t !== e) 
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(e); else {
        const t = getDOMLocation(), e = I.location;
        if (!s && v(e, t)) return;
 // A hashchange doesn't always == location change.
                if (o === g(t)) return;
 // Ignore this change; we already setState in push/replace.
                o = null, handlePop(t);
      }
    }, handlePop = t => {
      if (s) s = !1, setState(); else {
        const e = "POP";
        U.confirmTransitionTo(t, e, b, (s => {
          s ? setState({
            action: e,
            location: t
          }) : revertPop(t);
        }));
      }
    }, revertPop = t => {
      const e = I.location;
      // TODO: We could probably make this more reliable by
      // keeping a list of paths we've seen in sessionStorage.
      // Instead, we just default to 0 for paths we don't know.
            let o = j.lastIndexOf(g(e)), i = j.lastIndexOf(g(t));
      -1 === o && (o = 0), -1 === i && (i = 0);
      const n = o - i;
      n && (s = !0, go(n));
    }, k = getHashPath(), S = P(k);
    k !== S && replaceHashPath(S);
    const E = getDOMLocation();
    let j = [ g(E) ];
    // Public interface
        const go = t => {
      warning(c, "Hash history go(n) causes a full page reload in this browser"), a.go(t);
    }, checkDOMListeners = (t, e) => {
      i += e, 1 === i ? t.addEventListener("hashchange", handleHashChange) : 0 === i && t.removeEventListener("hashchange", handleHashChange);
    }, I = {
      length: a.length,
      action: "POP",
      location: E,
      createHref: t => "#" + P(O + g(t)),
      push: (t, e) => {
        warning(void 0 === e, "Hash history cannot push state; it is ignored");
        const s = "PUSH", i = u(t, void 0, d(l), I.location);
        U.confirmTransitionTo(i, s, b, (t => {
          if (!t) return;
          const e = g(i), n = P(O + e);
          if (getHashPath() !== n) {
            // We cannot tell if a hashchange was caused by a PUSH, so we'd
            // rather setState here and ignore the hashchange. The caveat here
            // is that other hash histories in the page will consider it a POP.
            o = e, (t => {
              r.hash = t;
            })(n);
            const t = j.lastIndexOf(g(I.location)), a = j.slice(0, -1 === t ? 0 : t + 1);
            a.push(e), j = a, setState({
              action: s,
              location: i
            });
          } else warning(!1, "Hash history cannot PUSH the same path; a new entry will not be added to the history stack"), 
          setState();
        }));
      },
      replace: (t, e) => {
        warning(void 0 === e, "Hash history cannot replace state; it is ignored");
        const s = "REPLACE", i = u(t, void 0, d(l), I.location);
        U.confirmTransitionTo(i, s, b, (t => {
          if (!t) return;
          const e = g(i), n = P(O + e);
          getHashPath() !== n && (
          // We cannot tell if a hashchange was caused by a REPLACE, so we'd
          // rather setState here and ignore the hashchange. The caveat here
          // is that other hash histories in the page will consider it a POP.
          o = e, replaceHashPath(n));
          const r = j.indexOf(g(I.location));
          -1 !== r && (j[r] = e), setState({
            action: s,
            location: i
          });
        }));
      },
      go,
      goBack: () => go(-1),
      goForward: () => go(1),
      block: (e = "") => {
        const s = U.setPrompt(e);
        return n || (checkDOMListeners(t, 1), n = !0), () => (n && (n = !1, checkDOMListeners(t, -1)), 
        s());
      },
      listen: e => {
        const s = U.appendListener(e);
        return checkDOMListeners(t, 1), () => {
          checkDOMListeners(t, -1), s();
        };
      },
      win: t
    };
    return I;
  }
}, k = class {
  constructor(e) {
    t(this, e), this.root = "/", this.historyType = "browser", 
    // A suffix to append to the page title whenever
    // it's updated through RouteTitle
    this.titleSuffix = "", this.routeViewsUpdated = (t = {}) => {
      if (this.history && t.scrollToId && "browser" === this.historyType) {
        const e = this.history.win.document.getElementById(t.scrollToId);
        if (e) return e.scrollIntoView();
      }
      this.scrollTo(t.scrollTopOffset || this.scrollTopOffset);
    }, this.isServer = o(this, "isServer"), this.queue = o(this, "queue");
  }
  componentWillLoad() {
    this.history = U[this.historyType](this.el.ownerDocument.defaultView), this.history.listen((t => {
      t = getLocation(t, this.root), this.location = t;
    })), this.location = getLocation(this.history.location, this.root);
  }
  scrollTo(t) {
    const e = this.history;
    if (null != t && !this.isServer && e) return "POP" === e.action && Array.isArray(e.location.scrollPosition) ? this.queue.write((() => {
      e && e.location && Array.isArray(e.location.scrollPosition) && e.win.scrollTo(e.location.scrollPosition[0], e.location.scrollPosition[1]);
    })) : this.queue.write((() => {
      e.win.scrollTo(0, t);
    }));
    // okay, the frame has passed. Go ahead and render now
    }
  render() {
    if (!this.location || !this.history) return;
    const t = {
      historyType: this.historyType,
      location: this.location,
      titleSuffix: this.titleSuffix,
      root: this.root,
      history: this.history,
      routeViewsUpdated: this.routeViewsUpdated
    };
    return e(i.Provider, {
      state: t
    }, e("slot", null));
  }
  get el() {
    return s(this);
  }
};

// Adapted from the https://github.com/ReactTraining/history and converted to TypeScript
export { O as app_root, P as stencil_route, x as stencil_route_switch, k as stencil_router }