import { r as t, h as s, g as i } from "./p-f983d8f8.js";

import { A as a } from "./p-518cbe0b.js";

import { m as h, q as r } from "./p-9b6a9315.js";

const c = class {
  constructor(s) {
    t(this, s), this.unsubscribe = () => {}, this.activeClass = "link-active", this.exact = !1, 
    this.strict = !0, 
    /**
      *  Custom tag to use instead of an anchor
      */
    this.custom = "a", this.match = null;
  }
  componentWillLoad() {
    this.computeMatch();
  }
  // Identify if the current route is a match.
  computeMatch() {
    this.location && (this.match = h(this.location.pathname, {
      path: this.urlMatch || this.url,
      exact: this.exact,
      strict: this.strict
    }));
  }
  handleClick(t) {
    var s, i;
    if (!r(t) && this.history && this.url && this.root) return t.preventDefault(), this.history.push((s = this.url, 
    i = this.root, 
    // Don't allow double slashes
    "/" == s.charAt(0) && "/" == i.charAt(i.length - 1) ? i.slice(0, i.length - 1) + s : i + s));
  }
  // Get the URL for this route link without the root from the router
  render() {
    let t = {
      class: {
        [this.activeClass]: null !== this.match
      },
      onClick: this.handleClick.bind(this)
    };
    return this.anchorClass && (t.class[this.anchorClass] = !0), "a" === this.custom && (t = Object.assign({}, t, {
      href: this.url,
      title: this.anchorTitle,
      role: this.anchorRole,
      tabindex: this.anchorTabIndex,
      "aria-haspopup": this.ariaHaspopup,
      id: this.anchorId,
      "aria-posinset": this.ariaPosinset,
      "aria-setsize": this.ariaSetsize,
      "aria-label": this.ariaLabel
    })), s(this.custom, Object.assign({}, t), s("slot", null));
  }
  get el() {
    return i(this);
  }
  static get watchers() {
    return {
      location: [ "computeMatch" ]
    };
  }
};

a.injectProps(c, [ "history", "location", "root" ]);

export { c as stencil_route_link }