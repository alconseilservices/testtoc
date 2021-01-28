import { r as t, g as r } from "./p-f68e5270.js";

import { A as s } from "./p-114593eb.js";

// Get the URL for this route link without the root from the router
const o = class {
  constructor(r) {
    t(this, r);
  }
  componentWillLoad() {
    if (this.history && this.root && this.url) return this.history.replace((t = this.url, 
    r = this.root, 
    // Don't allow double slashes
    "/" == t.charAt(0) && "/" == r.charAt(r.length - 1) ? r.slice(0, r.length - 1) + t : r + t));
    var t, r;
  }
  get el() {
    return r(this);
  }
};

s.injectProps(o, [ "history", "root" ]);

export { o as stencil_router_redirect }