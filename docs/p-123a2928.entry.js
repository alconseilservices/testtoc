import { r as t, h as e, c as s } from "./p-f68e5270.js";

import { b as i, a as n } from "./p-ab28ff84.js";

const a = {
  backBtn: {
    x: 595,
    y: 388,
    width: 224,
    height: 224
  },
  listenBtn: {
    x: 1695,
    y: 588,
    width: 224,
    height: 224
  },
  mascot: {
    x: 2602,
    y: 180,
    width: 624,
    height: 624,
    animation: [ {
      id: "mascotcoucou",
      pathPrefix: "./assets/common/anim/mascotte/mascotte_coucou/Mascotte_Coucou_",
      totalFrames: 50
    }, {
      id: "mascotdoigt",
      pathPrefix: "./assets/common/anim/mascotte/mascotte_doigt/Mascotte_Doigt_",
      totalFrames: 75,
      animationDurationMs: 1e3
    }, {
      id: "mascotrire",
      pathPrefix: "./assets/common/anim/mascotte/mascotte_rire/Mascotte_Rire_",
      totalFrames: 100,
      soundEffect: "rires10"
    }, {
      id: "mascotsurprise",
      pathPrefix: "./assets/common/anim/mascotte/mascotte_surprise/Mascotte_Surprise_",
      totalFrames: 75
    } ],
    animationDurationMs: 2e3
  },
  crank: {
    x: 3066,
    y: 910,
    width: 220,
    height: 555,
    animation: [ {
      id: "crank",
      pathPrefix: "./assets/lesphrases/anim/manette/Manette_",
      totalFrames: 25,
      soundEffect: "bras_machine"
    } ],
    animationDurationMs: 1e3
  },
  combination3Image: {
    x: 1047,
    y: 2187,
    width: 742,
    height: 742,
    animation: [ {
      id: "crank",
      pathPrefix: "./assets/lesphrases/anim/manette/Manette_",
      totalFrames: 25
    } ],
    animationDurationMs: 1e3
  }
}, o = class {
  constructor(e) {
    t(this, e), this.zoning = a, this.expectedReadyEventCount = 2, this.readyEventCount = 1, 
    this.animationInProgress = !1;
  }
  render() {
    return e("div", {
      class: "les-phrases-toctoc-container noscroll",
      ref: t => this.mainContainerRef = t
    }, e("div", {
      class: "loader-container",
      ref: t => this.loaderRef = t
    }, e("div", {
      class: "lds-ellipsis"
    }, e("div", null), e("div", null), e("div", null), e("div", null))), e("img", {
      class: "les-phrases-toctoc-decor",
      ref: t => this.decorRef = t,
      src: s("./assets/lesphrases/TocToc_Phrase.png")
    }), e("div", {
      class: "les-phrases-toctoc-back-btn",
      onClick: this.history.goBack,
      ref: t => this.backBtn = t
    }), e("div", {
      class: "les-phrases-toctoc-listen-btn",
      ref: t => this.listenBtn = t
    }), e("div", {
      class: "les-phrases-toctoc-mascot",
      ref: t => this.mascotContainer = t
    }, e("png-player-component", {
      ref: t => this.mascot = t,
      heightAuto: !0,
      onReady: () => this.handleReadyEvent(),
      zone: this.zoning.mascot
    })), e("div", {
      class: "les-phrases-toctoc-crank",
      ref: t => this.crankContainer = t
    }, e("png-player-component", {
      ref: t => this.crank = t,
      onReady: () => this.handleReadyEvent(),
      zone: this.zoning.crank
    })));
  }
  /**
   *
   * @param _evt
   */  onWindowResize(t) {
    this.drawBackBtn(), this.drawListenBtn(), this.drawMascot(), this.drawCrank();
  }
  /**
   *
   */  componentDidRender() {
    setTimeout((() => {
      this.drawBackBtn(), this.drawListenBtn(), this.drawMascot(), this.drawCrank(), this.attachListener();
    }), 100);
  }
  /**
   *
   * @param _evt
   */  handleReadyEvent() {
    this.readyEventCount++ >= this.expectedReadyEventCount && setTimeout((async () => {
      this.loaderRef.style.display = "none";
    }), 300);
  }
  /**
   *
   */  drawCrank() {
    i(this.crankContainer, this.decorRef, this.zoning.crank), n(this.crankContainer, this.decorRef, this.zoning.crank, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left);
  }
  /**
   *
   */  drawMascot() {
    i(this.mascotContainer, this.decorRef, this.zoning.mascot), n(this.mascotContainer, this.decorRef, this.zoning.mascot, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left);
  }
  /**
   *
   */  drawBackBtn() {
    i(this.backBtn, this.decorRef, this.zoning.backBtn), n(this.backBtn, this.decorRef, this.zoning.backBtn, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left);
  }
  /**
   *
   */  drawListenBtn() {
    i(this.listenBtn, this.decorRef, this.zoning.listenBtn), n(this.listenBtn, this.decorRef, this.zoning.listenBtn, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left);
  }
  /**
   *
   */  attachListener() {
    this.crankContainer.onclick = async () => {
      this.animationInProgress || requestAnimationFrame(this.crank.play.bind(this.crank));
    }, this.crank.addEventListener("animationFinished", this.onCrankAnimationFinished.bind(this));
  }
  /**
   *
   */  onCrankAnimationFinished(t) {
    this.animationInProgress = !1;
  }
  static get assetsDirs() {
    return [ "assets" ];
  }
};

o.style = ":host{display:block}.les-phrases-toctoc-container{position:relative;background-color:rgb(255, 254, 240);height:100%;overflow:auto}.les-phrases-toctoc-decor{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:95%}.les-phrases-toctoc-back-btn{position:absolute;border-radius:50%;background:center / contain no-repeat url('./assets/common/icon/Picto_Retour.svg')}.les-phrases-toctoc-listen-btn{position:absolute;border-radius:50%;background:center / contain no-repeat url('./assets/lesphrases/Picto_Ecouter.svg')}.les-phrases-toctoc-mascot{position:absolute;border-radius:50%}.les-phrases-toctoc-crank{position:absolute;border-radius:50%}";

export { o as les_phrases_toctoc }