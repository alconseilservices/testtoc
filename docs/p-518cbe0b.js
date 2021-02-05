import { h as e } from "./p-f983d8f8.js";

const t = ((e, t) => {
  let r = new Map, o = e;
  const updateListener = (e, t) => {
    Array.isArray(e) ? [ ...e ].forEach((e => {
      t[e] = o[e];
    })) : t[e] = Object.assign({}, o);
  }, subscribe = (e, t) => (r.has(e) || (r.set(e, t), updateListener(t, e)), () => {
    r.has(e) && r.delete(e);
  });
  return {
    Provider: ({state: e}, t) => (o = e, r.forEach(updateListener), t),
    Consumer: (e, r) => t(subscribe, r[0]),
    injectProps: (e, t) => {
      const o = e.prototype, c = o.connectedCallback, n = o.disconnectedCallback;
      o.connectedCallback = function() {
        if (subscribe(this, t), c) return c.call(this);
      }, o.disconnectedCallback = function() {
        r.delete(this), n && n.call(this);
      };
    }
  };
})({
  historyType: "browser",
  location: {
    pathname: "",
    query: {},
    key: ""
  },
  titleSuffix: "",
  root: "/",
  routeViewsUpdated: () => {}
}, ((t, r) => e("context-consumer", {
  subscribe: t,
  renderer: r
})));

export { t as A }