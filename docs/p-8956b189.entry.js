import { r as t, h as e, c as i, H as s } from "./p-f983d8f8.js";

import { b as n, a as o } from "./p-ab28ff84.js";

import { Z as a, a as r } from "./p-f80eff53.js";

import { f as c, s as h } from "./p-ed3d6334.js";

/**
 *
 */ class d {
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

const l = class {
  constructor(e) {
    t(this, e), this.zoning = a, this.inactivityCount = 0, this.cardInViewIndex = -1, 
    this.animationInProgress = !1, this.initDone = !1, this.lastCard = !1, this.expectedReadyEventCount = 4, 
    this.readyEventCount = 1, this.mascotEffect = [ "mascotsurprise", "mascotrire" ], 
    this.lastMascotEffect = "mascotsurprise";
  }
  /**
   *
   */  componentWillLoad() {
    r.mute(!0), this.zoning.cardsList.imageLibrary.forEach((t => t.sound = r.register("lm", t.sound)));
  }
  /**
   *
   */  render() {
    return e(s, null, e("img", {
      class: "les-mots-toctoc-cartridge",
      ref: t => this.cartridgeRef = t,
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
      onClick: this.history.goBack,
      ref: t => this.backBtn = t
    }), e("div", {
      class: "les-mots-toctoc-mascot",
      ref: t => this.mascotContainer = t
    }, e("png-player-component", {
      ref: t => this.mascot = t,
      heightAuto: !0,
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
    }, this.zoning.cardsList.imageLibrary.map(((t, i) => e("div", {
      class: "les-mots-toctoc-card card-index-" + i,
      "data-image-name": t.name,
      style: {
        background: 'center bottom / contain no-repeat url("' + t.image + '")'
      }
    })))), e("div", {
      class: "les-mots-toctoc-strainer"
    }, e("png-player-component", {
      ref: t => this.strainer = t,
      onReady: () => this.handleReadyEvent(),
      zone: this.zoning.strainer
    })), e("div", {
      class: "les-mots-toctoc-hammer"
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
    n(this.cartridgeRef, this.decorRef, this.zoning.cartridge), o(this.cartridgeRef, this.decorRef, this.zoning.cartridge, 0, 0);
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
    this.drawBackBtn(), this.drawCartridge(), this.drawScanner()) : setTimeout((() => this.drawElems()), 100);
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
    this.readyEventCount++ >= this.expectedReadyEventCount && setTimeout((async () => {
      await this.moveOnConveyor(), this.loaderRef.style.display = "none", r.mute(!1), 
      this.attachListeners(), this.inactivityDetector.activate(), setTimeout((() => this.mascot.playSequence("mascotcoucou", !0)), 2e3);
    }), 300);
  }
  /**
   *
   */  createInactivityDectector() {
    this.inactivityDetector || (this.inactivityDetector = new d(this.hammerBtn, 1e4, (() => {
      this.inactivityCount < 2 && (this.inactivityCount++, this.hammerBtn.classList.add("bounce-effect"), 
      this.mascot.playSequence("mascotdoigt", !0));
    })));
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
    n(this.mascotContainer, this.decorRef, this.zoning.mascot), o(this.mascotContainer, this.decorRef, this.zoning.mascot, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left);
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
    n(this.cardsList, this.decorRef, this.zoning.cardsList), o(this.cardsList, this.decorRef, this.zoning.cardsList, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left);
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
    let i = c(".card-index-" + (this.cardInViewIndex - 1), this.cardsList), s = c(".card-index-" + this.cardInViewIndex, this.cardsList), n = c(".card-index-" + (this.cardInViewIndex + 1), this.cardsList), o = c(".card-index-" + (this.cardInViewIndex + 2), this.cardsList);
    this.initDone || (o = n, n = s, s = null, this.cardInViewIndex--, this.initDone = !0);
    const a = r.playAndGetRef("conveyorBelt", {
      loop: -1
    });
    requestAnimationFrame(this.conveyorBelt.playAndLoop.bind(this.conveyorBelt)), i && i.classList.add("hide"), 
    s && this.attachCardMotionClassAndMove(s, this.initDone ? "2s" : "3s", t.width - t.height + "px"), 
    this.initDone || await h(1e3), n && this.attachCardMotionClassAndMove(n, "2s", e.width - t.height + "px"), 
    await h(1e3), o && this.attachCardMotionClassAndMove(o, "2s", "0px"), this.initDone, 
    await h(2e3), a.stop(), this.conveyorBelt.stop(), this.lastCard = !n && !o, this.selectedCard = s;
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
    n(this.conveyorBelt.parentElement, this.decorRef, this.zoning.conveyorBelt), o(this.conveyorBelt.parentElement, this.decorRef, this.zoning.conveyorBelt, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left);
  }
  /**
   *
   */  drawHammer() {
    n(this.hammer.parentElement, this.decorRef, this.zoning.hammer), o(this.hammer.parentElement, this.decorRef, this.zoning.hammer, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left), 
    n(this.hammerBtn, this.decorRef, this.zoning.hammerBtn), o(this.hammerBtn, this.decorRef, this.zoning.hammerBtn, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left);
  }
  /**
   *
   */  drawStrainer() {
    n(this.strainer.parentElement, this.decorRef, this.zoning.strainer), o(this.strainer.parentElement, this.decorRef, this.zoning.strainer, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left);
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
    r.play(t.sound), this.setWordFontSize(!0), this.animationInProgress = !1, setTimeout((() => this.playMascotEffect()), 1e3), 
    this.activityDetectorTimer = setTimeout((() => this.inactivityDetector.activate()), 2e3);
  }
  /**
   *
   */  playMascotEffect() {
    "mascotsurprise" === this.lastMascotEffect ? (this.mascot.playSequence("mascotrire", !0), 
    this.lastMascotEffect = "mascotrire") : (this.mascot.playSequence("mascotsurprise", !0), 
    this.lastMascotEffect = "mascotsurprise");
  }
  static get assetsDirs() {
    return [ "assets" ];
  }
};

l.style = ".les-mots-toctoc-container{position:relative;background-color:rgb(255, 254, 240);height:100%;overflow:auto}.les-mots-toctoc-decor{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:95%}.les-mots-toctoc-conveyor-belt{position:absolute}.les-mots-toctoc-mascot{position:absolute;border-radius:50%}.les-mots-toctoc-back-btn{position:absolute;border-radius:50%;background:center / contain no-repeat url('./assets/common/icon/Picto_Retour.svg')}.les-mots-toctoc-back-btn:hover{transform:scale(1.2)}.les-mots-toctoc-word-panel{color:rgb(0, 0, 0);font-family:'Arial Rounded Bold';position:absolute;text-align:center;transition:font-size .3s linear}.les-mots-toctoc-hammer{position:absolute;cursor:pointer}.les-mots-toctoc-hammer-btn{position:absolute;background-color:rgb(221, 42, 0);border-radius:50%}.les-mots-toctoc-strainer{position:absolute}.les-mots-toctoc-cards-list::-webkit-scrollbar{display:none}.les-mots-toctoc-cards-list{position:absolute;overflow:hidden}.les-mots-toctoc-card{position:absolute;width:auto;height:100%;-webkit-transition:all 1s linear;-moz-transition:all 1s linear;-o-transition:all 1s linear;-ms-transition:all 1s linear;transition:all 1s linear}.les-mots-toctoc-card-motion-1s{-webkit-transition:left 1s linear;-moz-transition:left 1s linear;-o-transition:left 1s linear;-ms-transition:left 1s linear;transition:left 1s linear}.les-mots-toctoc-card-motion-1s5{-webkit-transition:left 1.5s linear;-moz-transition:left 1.5s linear;-o-transition:left 1.5s linear;-ms-transition:left 1.5s linear;transition:left 1.5s linear}.les-mots-toctoc-card-motion-2s{-webkit-transition:left 2s linear;-moz-transition:left 2s linear;-o-transition:left 2s linear;-ms-transition:left 2s linear;transition:left 2s linear}.les-mots-toctoc-card-motion-3s{-webkit-transition:left 3s linear;-moz-transition:left 3s linear;-o-transition:left 3s linear;-ms-transition:left 3s linear;transition:left 3s linear}.les-mots-toctoc-cartridge{z-index:2;position:fixed}.les-mots-toctoc-scanner{position:absolute;background-color:rgb(134, 206, 215)}";

export { l as les_mots_toctoc }