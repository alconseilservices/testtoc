import { r as s, g as t } from "./p-f68e5270.js";

const e = class {
  constructor(t) {
    s(this, t), this.context = {}, this.renderer = () => null;
  }
  connectedCallback() {
    null != this.subscribe && (this.unsubscribe = this.subscribe(this.el, "context"));
  }
  disconnectedCallback() {
    null != this.unsubscribe && this.unsubscribe();
  }
  render() {
    return this.renderer(Object.assign({}, this.context));
  }
  get el() {
    return t(this);
  }
};

export { e as context_consumer }