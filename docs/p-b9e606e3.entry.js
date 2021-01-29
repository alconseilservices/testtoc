import { r as t, h as e, c as s } from "./p-f68e5270.js";

import { b as o, a as n } from "./p-ab28ff84.js";

import { s as i } from "./p-ed3d6334.js";

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
  zone1: {
    x: 714,
    y: 1040,
    width: 740,
    height: 611
  },
  zone2: {
    x: 1457,
    y: 1040,
    width: 740,
    height: 611
  },
  zone3: {
    x: 2190,
    y: 1040,
    width: 740,
    height: 611
  },
  zone1Btn: {
    x: 1040,
    y: 1715,
    width: 100,
    height: 100
  },
  zone2Btn: {
    x: 1778,
    y: 1715,
    width: 100,
    height: 100
  },
  zone3Btn: {
    x: 2518,
    y: 1715,
    width: 100,
    height: 100
  }
}, r = {
  zone1dateset: [ {
    text: "Dans la cour",
    audio: "./assets/lesphrases/sound/combination/B_DansLaCour.mp3"
  }, {
    text: "Chez moi",
    audio: "./assets/lesphrases/sound/combination/B_ChezMoi.mp3"
  }, {
    text: "Pendant les vacances",
    audio: "./assets/lesphrases/sound/combination/B_PendantLesVacances.mp3"
  }, {
    text: "Sous un arbre",
    audio: "./assets/lesphrases/sound/combination/B_SousUnArbre.mp3"
  }, {
    text: "Sous un arbre",
    audio: "./assets/lesphrases/sound/combination/B_SousUnArbre.mp3"
  }, {
    text: "Derrière ma maison",
    audio: "./assets/lesphrases/sound/combination/B_DerriereMaMaison.mp3"
  } ],
  zone2dateset: [ {
    text: "je mange",
    audio: "./assets/lesphrases/sound/combination/C_JeMange.mp3"
  }, {
    text: "je croque",
    audio: "./assets/lesphrases/sound/combination/C_JeCroque.mp3"
  }, {
    text: "j’arrose",
    audio: "./assets/lesphrases/sound/combination/C_Jarrose.mp3"
  }, {
    text: "je casse",
    audio: "./assets/lesphrases/sound/combination/C_JeCasse.mp3"
  }, {
    text: "je range",
    audio: "./assets/lesphrases/sound/combination/C_JeRange.mp3"
  } ],
  zone3dateset: [ {
    audio: "./assets/common/sound/variable_03/Telephone.mp3",
    image: "./assets/common/cards/Citron.png"
  }, {
    audio: "./assets/common/sound/variable_03/Biscotte.mp3",
    image: "./assets/common/cards/Baignoire.png"
  }, {
    audio: "./assets/common/sound/variable_03/Lunettes.mp3",
    image: "./assets/common/cards/Couvert.png"
  }, {
    audio: "./assets/common/sound/variable_03/Bananes.mp3",
    image: "./assets/common/cards/Bottes.png"
  } ],
  audioLibrary1: [ "./assets/lesphrases/sound/combination/F_rires2.mp3", "./assets/lesphrases/sound/combination/F_rires7.mp3", "./assets/lesphrases/sound/combination/F_rires8.mp3", "./assets/lesphrases/sound/combination/F_rires9.mp3", "./assets/lesphrases/sound/combination/F_rires10.mp3", "./assets/lesphrases/sound/combination/F_rires11.mp3", "./assets/lesphrases/sound/combination/F_rires13.mp3", "./assets/lesphrases/sound/combination/F_rires15.mp3" ],
  audioLibrary2: [ "./assets/lesphrases/sound/combination/G_CestCompletementToque.mp3", "./assets/lesphrases/sound/combination/G_CestCompletementToque_ALT.mp3", "./assets/lesphrases/sound/combination/G_IlEstDrole.mp3", "./assets/lesphrases/sound/combination/G_MaisQuelCoquin.mp3", "./assets/lesphrases/sound/combination/G_OhMaisCaVaPas.mp3", "./assets/lesphrases/sound/combination/G_OhMaisCaVaPasLaTete.mp3" ]
}, c = class {
  constructor(e) {
    t(this, e), this.zoning = a, 
    // generator: CombinationGenerator;
    this.expectedReadyEventCount = 2, this.readyEventCount = 1, this.animationInProgress = !1, 
    this.audioInProgress = !1;
  }
  /**
   *
   */  componentWillLoad() {
    Object.assign(this.zoning, r), 
    // this.generator = new CombinationGenerator(this.zoning);
    console.log(this.zoning);
  }
  /**
   *
   */  render() {
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
    })), e("div", {
      class: "les-phrases-toctoc-zone",
      ref: t => this.zone1Container = t
    }, e("toctoc-randomizer-component", {
      ref: t => this.zone1 = t,
      voicedText: this.zoning.zone1dateset
    })), e("div", {
      class: "les-phrases-toctoc-zone",
      ref: t => this.zone2Container = t
    }, e("toctoc-randomizer-component", {
      ref: t => this.zone2 = t,
      voicedText: this.zoning.zone2dateset
    })), e("div", {
      class: "les-phrases-toctoc-zone",
      ref: t => this.zone3Container = t
    }, e("toctoc-randomizer-component", {
      ref: t => this.zone3 = t,
      voicedImage: this.zoning.zone3dateset
    })), e("div", {
      class: "les-phrases-toctoc-zone-btn yellow",
      ref: t => this.zone1Btn = t
    }), e("div", {
      class: "les-phrases-toctoc-zone-btn orange",
      ref: t => this.zone2Btn = t
    }), e("div", {
      class: "les-phrases-toctoc-zone-btn beige",
      ref: t => this.zone3Btn = t
    }));
  }
  /**
   *
   * @param _evt
   */  onWindowResize(t) {
    this.drawBackBtn(), this.drawListenBtn(), this.drawMascot(), this.drawCrank(), this.drawZone1(), 
    this.drawZone2(), this.drawZone3();
  }
  /**
   *
   */  componentDidRender() {
    setTimeout((() => {
      this.drawBackBtn(), this.drawListenBtn(), this.drawMascot(), this.drawCrank(), this.drawZone1(), 
      this.drawZone2(), this.drawZone3(), this.attachListener();
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
    o(this.crankContainer, this.decorRef, this.zoning.crank), n(this.crankContainer, this.decorRef, this.zoning.crank, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left);
  }
  /**
   *
   */  drawMascot() {
    o(this.mascotContainer, this.decorRef, this.zoning.mascot), n(this.mascotContainer, this.decorRef, this.zoning.mascot, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left);
  }
  /**
   *
   */  drawBackBtn() {
    o(this.backBtn, this.decorRef, this.zoning.backBtn), n(this.backBtn, this.decorRef, this.zoning.backBtn, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left);
  }
  /**
   *
   */  drawListenBtn() {
    o(this.listenBtn, this.decorRef, this.zoning.listenBtn), n(this.listenBtn, this.decorRef, this.zoning.listenBtn, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left);
  }
  /**
   *
   */  drawZone1() {
    o(this.zone1Container, this.decorRef, this.zoning.zone1), n(this.zone1Container, this.decorRef, this.zoning.zone1, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left), 
    o(this.zone1Btn, this.decorRef, this.zoning.zone1Btn), n(this.zone1Btn, this.decorRef, this.zoning.zone1Btn, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left);
  }
  /**
   *
   */  drawZone2() {
    o(this.zone2Container, this.decorRef, this.zoning.zone2), n(this.zone2Container, this.decorRef, this.zoning.zone2, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left), 
    o(this.zone2Btn, this.decorRef, this.zoning.zone2Btn), n(this.zone2Btn, this.decorRef, this.zoning.zone2Btn, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left);
  }
  /**
   *
   */  drawZone3() {
    o(this.zone3Container, this.decorRef, this.zoning.zone3), n(this.zone3Container, this.decorRef, this.zoning.zone3, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left), 
    o(this.zone3Btn, this.decorRef, this.zoning.zone3Btn), n(this.zone3Btn, this.decorRef, this.zoning.zone3Btn, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left);
  }
  /**
   *
   */  attachListener() {
    this.crankContainer.onclick = async () => {
      this.animationInProgress || this.audioInProgress || (this.animationInProgress = !0, 
      requestAnimationFrame(this.crank.play.bind(this.crank)), await i(1e3), this.zone1.start(), 
      this.zone2.start(), this.zone3.start(), await i(2e3), this.zone1.stop(), this.zone1.playAudio(), 
      await i(2e3), this.zone2.stop(), this.zone2.playAudio(), await i(2e3), this.zone3.stop(), 
      this.zone3.playAudio(), await i(2e3), this.mascot.playSequence("mascotrire"), this.animationInProgress = !1);
    }, this.listenBtn.onclick = async () => {
      this.animationInProgress || this.audioInProgress || (this.audioInProgress = !0, 
      await this.zone1.playAudio(), await i(1e3), await this.zone2.playAudio(), await i(1e3), 
      await this.zone3.playAudio(), await i(2e3), this.mascot.playSequence("mascotrire"), 
      this.audioInProgress = !1);
    }, this.zone1Btn.onclick = async () => {
      this.animationInProgress || this.audioInProgress || (this.animationInProgress = !0, 
      this.zone1.start(), await i(1e3), this.zone1.stop(), await this.zone1.playAudio(), 
      await i(1e3), await this.zone2.playAudio(), await i(1e3), await this.zone3.playAudio(), 
      await i(2e3), this.mascot.playSequence("mascotrire"), this.animationInProgress = !1);
    }, this.zone2Btn.onclick = async () => {
      this.animationInProgress || this.audioInProgress || (this.animationInProgress = !0, 
      this.zone2.start(), await i(1e3), this.zone2.stop(), await this.zone1.playAudio(), 
      await i(1e3), await this.zone2.playAudio(), await i(1e3), await this.zone3.playAudio(), 
      await i(2e3), this.mascot.playSequence("mascotrire"), this.animationInProgress = !1);
    }, this.zone3Btn.onclick = async () => {
      this.animationInProgress || this.audioInProgress || (this.animationInProgress = !0, 
      this.zone3.start(), await i(1e3), this.zone3.stop(), await this.zone1.playAudio(), 
      await i(1e3), await this.zone2.playAudio(), await i(1e3), await this.zone3.playAudio(), 
      await i(2e3), this.mascot.playSequence("mascotrire"), this.animationInProgress = !1);
    };
  }
  static get assetsDirs() {
    return [ "assets" ];
  }
};

c.style = ":host{display:block}.les-phrases-toctoc-container{position:relative;background-color:rgb(255, 254, 240);height:100%;overflow:auto}.les-phrases-toctoc-decor{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:95%}.les-phrases-toctoc-back-btn{position:absolute;border-radius:50%;background:center / contain no-repeat url('./assets/common/icon/Picto_Retour.svg')}.les-phrases-toctoc-listen-btn{position:absolute;border-radius:50%;background:center / contain no-repeat url('./assets/lesphrases/Picto_Ecouter.svg')}.les-phrases-toctoc-back-btn:hover,.les-phrases-toctoc-listen-btn:hover,.les-phrases-toctoc-zone-btn:hover{transform:scale(1.2)}.les-phrases-toctoc-mascot{position:absolute;border-radius:50%}.les-phrases-toctoc-crank{position:absolute;border-radius:50%}.les-phrases-toctoc-zone{position:absolute}.les-phrases-toctoc-zone-btn{position:absolute;border-radius:50%}.yellow{background-color:rgb(249, 215, 77)}.orange{background-color:rgb(237, 125, 63)}.beige{background-color:rgb(255, 254, 240)}";

export { c as les_phrases_toctoc }