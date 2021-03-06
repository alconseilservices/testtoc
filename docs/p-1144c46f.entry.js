import { r as t, h as e } from "./p-f983d8f8.js";

import { a as i } from "./p-625f43aa.js";

const o = class {
  constructor(e) {
    t(this, e), this.itemIndex = 0, this.stopRequested = !1;
  }
  /**
   *
   */  componentWillLoad() {
    this.voicedText ? this.voicedText.forEach((t => t.audio = i.register("rd", t.audio))) : this.voicedImage.forEach((t => t.audio = i.register("rd", t.audio)));
  }
  /**
   *
   * @param _evt
   */  onWindowResize(t) {
    this.computeFontSize();
  }
  /**
   *
   */  componentDidLoad() {
    this.computeFontSize();
  }
  /**
   *
   */  computeFontSize() {
    const t = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    this.randomizerContainer.querySelectorAll(".toctoc-randomizer-text").forEach((e => e.style.fontSize = .025 * t + "px"));
  }
  /**
   *
   */  render() {
    return this.voicedText ? e("div", {
      class: "toctoc-randomizer-container",
      ref: t => this.randomizerContainer = t
    }, this.voicedText.map(((t, i) => e("div", {
      "data-item-index": i,
      class: {
        "toctoc-randomizer-text": !0
      },
      innerHTML: t.text
    })))) : e("div", {
      class: "toctoc-randomizer-container",
      ref: t => this.randomizerContainer = t
    }, this.voicedImage.map(((t, i) => e("div", {
      "data-item-index": i,
      class: {
        "toctoc-randomizer-image": !0
      },
      style: {
        background: `center / contain no-repeat url("${t.image}")`
      }
    }))));
  }
  /**
   *
   */  async stop() {
    this.stopRequested = !0;
  }
  /**
   *
   */  async playAudio() {
    await i.play(this.audio());
  }
  /**
   *
   */  async start() {
    this.animationId = requestAnimationFrame(this.randomize.bind(this));
  }
  /**
   *
   * @param startTime
   */  randomize(t) {
    if (this.stopRequested) return this.stopRequested = !1, void (this.animationId = void 0);
    this.timeWhenLastUpdate || (this.timeWhenLastUpdate = t), this.timeFromLastUpdate = t - this.timeWhenLastUpdate, 
    this.timeFromLastUpdate > 100 + Math.floor(50 * Math.random()) + 1 && (this.timeWhenLastUpdate = t, 
    this.itemIndex++, this.itemIndex >= this.itemsLength() && (this.itemIndex = 0), 
    this.showItem(!0, this.itemIndex)), this.animationId = requestAnimationFrame(this.randomize.bind(this));
  }
  /**
   *
   */  itemsLength() {
    return this.voicedText ? this.voicedText.length : this.voicedImage.length;
  }
  /**
   *
   */  audio() {
    return this.voicedText ? this.voicedText[this.itemIndex].audio : this.voicedImage[this.itemIndex].audio;
  }
  /**
   *
   * @param visible
   * @param index
   */  showItem(t, e) {
    const i = this.randomizerContainer.querySelector(`[data-item-index="${e}"]`);
    t ? (this.randomizerContainer.querySelectorAll(".show").forEach((t => t.classList.remove("show"))), 
    i.classList.add("show")) : i.classList.remove("show");
  }
};

o.style = ".toctoc-randomizer-container{width:100%;height:100%;position:relative}.toctoc-randomizer-text{color:rgba(0, 0, 0, .8);font-family:'Arial Rounded Bold';font-size:25px;font-weight:bold;position:absolute;opacity:0;top:50%;left:50%;width:90%;text-align:center;transform:translate(-50%, -50%)}.toctoc-randomizer-image{position:absolute;opacity:0;top:50%;left:50%;transform:translate(-50%, -50%);width:65%;height:65%}";

export { o as toctoc_randomizer_component }