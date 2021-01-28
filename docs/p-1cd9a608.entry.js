import { r as t, g as e } from "./p-f68e5270.js";

import { A as i } from "./p-114593eb.js";

const s = class {
  constructor(e) {
    t(this, e), this.titleSuffix = "", this.pageTitle = "";
  }
  updateDocumentTitle() {
    const t = this.el;
    t.ownerDocument && (t.ownerDocument.title = `${this.pageTitle}${this.titleSuffix || ""}`);
  }
  componentWillLoad() {
    this.updateDocumentTitle();
  }
  get el() {
    return e(this);
  }
  static get watchers() {
    return {
      pageTitle: [ "updateDocumentTitle" ]
    };
  }
};

i.injectProps(s, [ "titleSuffix" ]);

export { s as stencil_route_title }