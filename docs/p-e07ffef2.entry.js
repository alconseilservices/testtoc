import { r as o, h as r } from "./p-f68e5270.js";

const t = class {
  constructor(r) {
    o(this, r);
  }
  render() {
    return r("div", {
      class: "toctoc-randomizer-container",
      ref: o => this.randomizerContainer = o
    });
  }
};

t.style = ".toctoc-randomizer-container{width:100%;height:100%;position:relative}";

export { t as toctoc_randomizer_component }