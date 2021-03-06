import { r as s, g as e } from "./p-f983d8f8.js";

import { A as t } from "./p-518cbe0b.js";

const i = class {
  constructor(e) {
    s(this, e), this.when = !0, this.message = "";
  }
  enable(s) {
    this.unblock && this.unblock(), this.history && (this.unblock = this.history.block(s));
  }
  disable() {
    this.unblock && (this.unblock(), this.unblock = void 0);
  }
  componentWillLoad() {
    this.when && this.enable(this.message);
  }
  updateMessage(s, e) {
    this.when ? this.when && e === s || this.enable(this.message) : this.disable();
  }
  componentDidUnload() {
    this.disable();
  }
  render() {
    return null;
  }
  get el() {
    return e(this);
  }
  static get watchers() {
    return {
      message: [ "updateMessage" ],
      when: [ "updateMessage" ]
    };
  }
};

t.injectProps(i, [ "history" ]);

export { i as stencil_router_prompt }