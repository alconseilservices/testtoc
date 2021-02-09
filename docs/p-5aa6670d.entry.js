import { r as t, h as e, c as i, H as s } from "./p-f983d8f8.js";

import { b as n, a as o, w as a, h as r } from "./p-dbc793a8.js";

import { Z as c, a as h } from "./p-625f43aa.js";

import { f as d, s as l, a as m } from "./p-6920613d.js";

/**
 *
 */ class f {
  /**
   *
   * @param elem
   * @param inactivityDurationMs
   */
  constructor(t, e, i) {
    this.elem = t, this.gracePeriodMs = e, this.onGracePeriodExpire = i;
  }
  /**
   *
   */  activate() {
    this.elem.addEventListener("click", this.reset.bind(this)), this.elem.addEventListener("touchstart", this.reset.bind(this), {
      passive: !0
    }), this.elem.addEventListener("touchmove", this.reset.bind(this), {
      passive: !0
    }), this.elem.addEventListener("touchend", this.reset.bind(this)), this.timer = setTimeout((() => {
      this.onGracePeriodExpire(), this.timer = void 0;
    }), this.gracePeriodMs);
  }
  /**
   *
   */  deactivate() {
    this.reset(), this.elem.removeEventListener("click", this.reset.bind(this)), this.elem.removeEventListener("touchstart", this.reset.bind(this)), 
    this.elem.removeEventListener("touchmove", this.reset.bind(this)), this.elem.removeEventListener("touchend", this.reset.bind(this));
  }
  /**
   *
   */  reset() {
    this.timer && clearTimeout(this.timer);
  }
}

const g = class {
  constructor(e) {
    t(this, e), this.zoning = c, this.inactivityCount = 0, this.cardInViewIndex = -1, 
    this.cardIndex = 0, this.animationInProgress = !1, this.initDone = !1, this.lastCard = !1, 
    this.expectedReadyEventCount = 4, this.readyEventCount = 1, this.cardListReady = !1, 
    this.usedCardList = [], this.mascotEffect = [ "mascotsurprise", "mascotrire" ], 
    this.lastMascotEffect = "mascotsurprise";
  }
  /**
   *
   */  componentWillLoad() {
    h.mute(!0), this.zoning.cardsList.imageLibrary.forEach((t => t.sound = h.register("lm", t.sound)));
  }
  /**
   *
   */  render() {
    return e(s, null, e("img", {
      class: "les-mots-toctoc-cartridge",
      ref: t => this.cartridgeRef = t,
      style: {
        opacity: "0"
      },
      src: "./assets/lesmots/cartouche_mots.png"
    }), e("div", {
      class: "les-mots-toctoc-container noscroll",
      ref: t => this.menuContainerRef = t
    }, e("div", {
      class: "loader-container",
      ref: t => this.loaderRef = t
    }, e("div", {
      class: "lds-ellipsis"
    }, e("div", null), e("div", null), e("div", null), e("div", null))), e("div", {
      class: "les-mots-toctoc-conveyor-belt",
      ref: t => this.conveyorBeltContainer = t
    }, e("png-player-component", {
      ref: t => this.conveyorBelt = t,
      onReady: () => this.handleReadyEvent(),
      ignoreSoundEffect: !0,
      zone: this.zoning.conveyorBelt
    })), e("img", {
      class: "les-mots-toctoc-decor",
      ref: t => this.decorRef = t,
      src: i("./assets/lesmots/TocToc_Mot_Socle.png")
    }), e("div", {
      class: "les-mots-toctoc-back-btn clickable",
      onClick: () => this.onBackToMenu(),
      ref: t => this.backBtn = t
    }), e("div", {
      class: "les-mots-toctoc-mascot",
      ref: t => this.mascotContainer = t
    }, e("png-player-component", {
      ref: t => this.mascot = t,
      onReady: () => this.handleReadyEvent(),
      zone: this.zoning.mascot
    })), e("div", {
      class: "les-mots-toctoc-word-panel",
      ref: t => this.wordPanel = t
    }), e("div", {
      class: "les-mots-toctoc-scanner",
      ref: t => this.scannerRef = t
    }), e("div", {
      class: "les-mots-toctoc-cards-list",
      ref: t => this.cardsList = t
    }, this.zoning.cardsList.imageLibrary.map(((t, i) => (this.cardIndex = i, e("div", {
      class: "les-mots-toctoc-card card-index-" + i,
      "data-image-name": t.name,
      "data-image-index": i,
      style: {
        background: 'center bottom / contain no-repeat url("' + t.image + '")'
      }
    }))))), e("div", {
      class: "les-mots-toctoc-strainer",
      ref: t => this.strainerRef = t
    }, e("png-player-component", {
      ref: t => this.strainer = t,
      onReady: () => this.handleReadyEvent(),
      zone: this.zoning.strainer
    })), e("div", {
      class: "les-mots-toctoc-hammer",
      ref: t => this.hammerRef = t
    }, e("png-player-component", {
      ref: t => this.hammer = t,
      onReady: () => this.handleReadyEvent(),
      zone: this.zoning.hammer
    })), e("div", {
      class: "les-mots-toctoc-hammer-btn clickable",
      ref: t => this.hammerBtn = t
    })));
  }
  /**
   *
   */  drawCartridge() {
    n(this.cartridgeRef, this.decorRef, this.zoning.cartridge), o(this.cartridgeRef, this.decorRef, this.zoning.cartridge, 0, 0), 
    this.cartridgeRef.style.opacity = "1";
  }
  /**
   *
   * @param _evt
   */  onWindowResize(t) {
    this.wordPanel.innerHTML = "", this.setWordFontSize(!1), this.drawElems();
  }
  /**
   *
   * @param _evt
   */  onOrientationChange(t) {
    this.drawElems();
  }
  /**
   *
   */  componentDidLoad() {
    this.drawElems();
  }
  /**
   *
   */  drawElems() {
    this.decorReady() ? (this.drawConveyorBelt(), this.drawHammer(), this.createInactivityDectector(), 
    this.drawStrainer(), this.drawCardList(), this.drawWordPanel(), this.drawMascot(), 
    this.drawBackBtn(), this.drawCartridge(), this.drawScanner(), this.loaderRef.style.display = "none") : setTimeout((() => this.drawElems()), 1e3);
  }
  /**
   *
   */  decorReady() {
    return this.decorRef.getBoundingClientRect().width > 0;
  }
  /**
   *
   * @param _evt
   */  handleReadyEvent() {
    this.cardListReady ? this.readyEventCount++ >= this.expectedReadyEventCount && (this.moveOnConveyor(), 
    h.mute(!1), this.attachListeners(), this.createInactivityDectector().activate(), 
    setTimeout((() => this.mascot.playSequence("mascotcoucou", !0)), 2e3)) : setTimeout((() => {
      this.handleReadyEvent();
    }), 200);
  }
  /**
   *
   */  createInactivityDectector() {
    return this.inactivityDetector || (this.inactivityDetector = new f(this.hammerBtn, 1e4, (() => {
      this.inactivityCount < 2 && (this.inactivityCount++, this.hammerBtn.classList.add("bounce-effect"), 
      this.mascot.playSequence("mascotdoigt", !0));
    }))), this.inactivityDetector;
  }
  /**
   *
   */  drawScanner() {
    n(this.scannerRef, this.decorRef, this.zoning.scanner), o(this.scannerRef, this.decorRef, this.zoning.scanner, this.decorRef.getBoundingClientRect().top, 0);
  }
  /**
   *
   */  drawBackBtn() {
    n(this.backBtn, this.decorRef, this.zoning.backBtn), o(this.backBtn, this.decorRef, this.zoning.backBtn, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left);
  }
  /**
   *
   */  drawMascot() {
    n(this.mascotContainer, this.decorRef, this.zoning.mascot), o(this.mascotContainer, this.decorRef, this.zoning.mascot, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left), 
    this.mascot.drawCanvas(a(this.mascotContainer), null), this.mascot.redrawCurrentFrame();
  }
  /**
   *
   */  drawWordPanel() {
    n(this.wordPanel, this.decorRef, this.zoning.wordPanel), o(this.wordPanel, this.decorRef, this.zoning.wordPanel, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left), 
    this.wordPanel.style.lineHeight = this.wordPanel.getBoundingClientRect().height + "px", 
    this.setWordFontSize(!0);
  }
  /**
   *
   */  setWordFontSize(t) {
    this.wordPanel.style.fontSize = t ? .65 * this.wordPanel.getBoundingClientRect().height + "px" : "0px";
  }
  /**
   *
   */  drawCardList() {
    this.cardListReady = !0, n(this.cardsList, this.decorRef, this.zoning.cardsList), 
    o(this.cardsList, this.decorRef, this.zoning.cardsList, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left);
    const t = this.cardsList.getBoundingClientRect();
    this.marginLeft = (this.conveyorBeltContainer.getBoundingClientRect().width - 2 * t.height) / 2, 
    this.cardsList.querySelectorAll(".les-mots-toctoc-card").forEach((e => {
      e.style.width = t.height + "px", e.style.height = t.height + "px", e.style.left = "-" + t.height + "px";
    }));
  }
  /**
   *
   */  async moveOnConveyor() {
    const t = this.cardsList.getBoundingClientRect(), e = this.conveyorBeltContainer.getBoundingClientRect();
    this.cardInViewIndex++;
    let i = d(".card-index-" + (this.cardInViewIndex - 1), this.cardsList), s = d(".card-index-" + this.cardInViewIndex, this.cardsList), n = d(".card-index-" + (this.cardInViewIndex + 1), this.cardsList), o = d(".card-index-" + (this.cardInViewIndex + 2), this.cardsList);
    this.initDone || (o = n, n = s, s = null, this.cardInViewIndex--);
    const a = h.playAndGetRef("conveyorBelt", {
      loop: -1
    });
    requestAnimationFrame(this.conveyorBelt.playAndLoop.bind(this.conveyorBelt)), i && (i.classList.add("hide"), 
    this.usedCardList.push(i), this.reInjectCards()), s && (s.classList.remove("hide"), 
    this.attachCardMotionClassAndMove(s, this.initDone ? "2s" : "3s", t.width - t.height + "px")), 
    n && (n.classList.remove("hide"), this.attachCardMotionClassAndMove(n, "2s", e.width - t.height + "px")), 
    this.initDone || await l(1e3), o && (o.classList.remove("hide"), this.attachCardMotionClassAndMove(o, this.initDone ? "2s" : "1s", "0px")), 
    this.initDone ? await l(2e3) : await l(1e3), a.stop(), this.conveyorBelt.stop(), 
    this.lastCard = !n && !o, this.selectedCard = s, this.initDone = !0;
  }
  /**
   *
   * @param elem
   */  attachCardMotionClassAndMove(t, e, i) {
    t.classList.remove("les-mots-toctoc-card-motion-1s", "les-mots-toctoc-card-motion-2s", "les-mots-toctoc-card-motion-3s"), 
    t.classList.add("les-mots-toctoc-card-motion-" + e), t.style.left = i;
  }
  /**
   *
   */  drawConveyorBelt() {
    n(this.conveyorBelt.parentElement, this.decorRef, this.zoning.conveyorBelt), o(this.conveyorBelt.parentElement, this.decorRef, this.zoning.conveyorBelt, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left), 
    this.conveyorBelt.drawCanvas(a(this.conveyorBeltContainer), r(this.conveyorBeltContainer)), 
    this.conveyorBelt.redrawCurrentFrame();
  }
  /**
   *
   */  drawHammer() {
    n(this.hammer.parentElement, this.decorRef, this.zoning.hammer), o(this.hammer.parentElement, this.decorRef, this.zoning.hammer, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left), 
    n(this.hammerBtn, this.decorRef, this.zoning.hammerBtn), o(this.hammerBtn, this.decorRef, this.zoning.hammerBtn, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left), 
    this.hammer.drawCanvas(a(this.hammerRef), r(this.hammerRef)), this.hammer.redrawCurrentFrame();
  }
  /**
   *
   */  drawStrainer() {
    n(this.strainer.parentElement, this.decorRef, this.zoning.strainer), o(this.strainer.parentElement, this.decorRef, this.zoning.strainer, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left), 
    this.strainer.drawCanvas(a(this.strainerRef), r(this.strainerRef)), this.strainer.redrawCurrentFrame();
  }
  /**
   *
    */  clearInactivityHandler() {
    this.activityDetectorTimer && (clearTimeout(this.activityDetectorTimer), this.activityDetectorTimer = null), 
    this.inactivityDetector.deactivate(), this.mascot.showThumbail(), this.hammerBtn.classList.remove("bounce-effect");
  }
  /**
   *
   */  attachListeners() {
    this.hammerBtn.onclick = async () => {
      this.animationInProgress || this.lastCard || (this.clearInactivityHandler(), this.wordPanel.innerHTML = "", 
      this.setWordFontSize(!1), this.animationInProgress = !0, await this.moveOnConveyor(), 
      requestAnimationFrame(this.strainer.playAndExitOnBreakpoint.bind(this.strainer)));
    }, this.strainer.addEventListener("breakpointReached", this.onStrainerBreakpointReached.bind(this)), 
    this.hammer.addEventListener("animationFinished", this.onHammerAnimationFinished.bind(this)), 
    this.strainer.addEventListener("animationFinished", this.onStrainerAnimationFinished.bind(this));
  }
  /**
   *
   */  onStrainerBreakpointReached(t) {
    // this.strainer.removeEventListener('breakpointReached', this.onStrainerBreakpointReached.bind(this));
    t.detail.startsWith("steinerup-0-") && requestAnimationFrame(this.hammer.play.bind(this.hammer));
  }
  /**
   *
   */  onHammerAnimationFinished() {
    // this.hammer.removeEventListener('animationFinished', this.onHammerAnimationFinished.bind(this));
    requestAnimationFrame(this.strainer.play.bind(this.strainer));
  }
  /**
   *
   */  onStrainerAnimationFinished() {
    // this.strainer.removeEventListener('animationFinished', this.onStrainerAnimationFinished.bind(this));
    this.wordPanel.innerHTML = this.selectedCard.dataset.imageName;
    const t = this.zoning.cardsList.imageLibrary.find((t => t.name === this.selectedCard.dataset.imageName));
    h.play(t.sound), this.setWordFontSize(!0), this.animationInProgress = !1, setTimeout((() => this.playMascotEffect()), 1e3), 
    this.activityDetectorTimer = setTimeout((() => this.inactivityDetector.activate()), 2e3);
  }
  /**
   *
   */  playMascotEffect() {
    "mascotsurprise" === this.lastMascotEffect ? (this.mascot.playSequence("mascotrire", !0), 
    this.lastMascotEffect = "mascotrire") : (this.mascot.playSequence("mascotsurprise", !0), 
    this.lastMascotEffect = "mascotsurprise");
  }
  /**
   *
   * @private
   */  onBackToMenu() {
    h.stop(), this.conveyorBelt.stop(), this.strainer.stop(), this.hammer.stop(), this.mascot.stop(), 
    this.history.goBack();
  }
  /**
   *
   */  reInjectCards() {
    const t = this.cardsList.getBoundingClientRect();
    if (this.usedCardList.length + 4 >= this.zoning.cardsList.imageLibrary.length) for (this.usedCardList = m(this.usedCardList), 
    this.usedCardList.forEach((e => {
      e.classList.remove("card-index-" + e.dataset.imageIndex), e.classList.add("card-index-" + this.cardIndex++), 
      e.style.left = "-" + t.height + "px";
    })); this.usedCardList.length > 0; ) this.usedCardList.pop();
  }
  static get assetsDirs() {
    return [ "assets" ];
  }
};

g.style = ".les-mots-toctoc-container{position:relative;background-color:rgb(255, 254, 240);height:100%;overflow:auto}.les-mots-toctoc-decor{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:95%}.les-mots-toctoc-conveyor-belt{position:absolute}.les-mots-toctoc-mascot{position:absolute;border-radius:50%}.les-mots-toctoc-back-btn{position:absolute;border-radius:50%;background:center / contain no-repeat url('./assets/common/icon/Picto_Retour.svg')}.les-mots-toctoc-back-btn:hover{transform:scale(1.2)}.les-mots-toctoc-word-panel{color:rgb(0, 0, 0);font-family:'Arial Rounded Bold';position:absolute;text-align:center;transition:font-size .3s linear}.les-mots-toctoc-hammer{position:absolute;cursor:pointer}.les-mots-toctoc-hammer-btn{position:absolute;background-color:rgb(221, 42, 0);border-radius:50%}.les-mots-toctoc-strainer{position:absolute}.les-mots-toctoc-cards-list::-webkit-scrollbar{display:none}.les-mots-toctoc-cards-list{position:absolute;overflow:hidden}.les-mots-toctoc-card{position:absolute;width:auto;height:100%}.les-mots-toctoc-card-animated{-webkit-transition:all 1s linear;-moz-transition:all 1s linear;-o-transition:all 1s linear;-ms-transition:all 1s linear;transition:all 1s linear}.les-mots-toctoc-card-motion-1s{-webkit-transition:left 1s linear;-moz-transition:left 1s linear;-o-transition:left 1s linear;-ms-transition:left 1s linear;transition:left 1s linear}.les-mots-toctoc-card-motion-1s5{-webkit-transition:left 1.5s linear;-moz-transition:left 1.5s linear;-o-transition:left 1.5s linear;-ms-transition:left 1.5s linear;transition:left 1.5s linear}.les-mots-toctoc-card-motion-2s{-webkit-transition:left 2s linear;-moz-transition:left 2s linear;-o-transition:left 2s linear;-ms-transition:left 2s linear;transition:left 2s linear}.les-mots-toctoc-card-motion-3s{-webkit-transition:left 3s linear;-moz-transition:left 3s linear;-o-transition:left 3s linear;-ms-transition:left 3s linear;transition:left 3s linear}.les-mots-toctoc-cartridge{z-index:2;position:fixed}.les-mots-toctoc-scanner{position:absolute;background-color:rgb(109, 208, 217);border-top-right-radius:15px}";

export { g as les_mots_toctoc }