import { r as s, h as e, c as a } from "./p-f68e5270.js";

import { b as t, a as o } from "./p-ab28ff84.js";

import { a as i } from "./p-5fd490aa.js";

import { s as n } from "./p-ed3d6334.js";

const r = {
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
    height: 714
  },
  zone2: {
    x: 1457,
    y: 1040,
    width: 740,
    height: 714
  },
  zone3: {
    x: 2190,
    y: 1040,
    width: 740,
    height: 714
  },
  zone1Btn: {
    x: 1038,
    y: 1713,
    width: 100,
    height: 100
  },
  zone2Btn: {
    x: 1780,
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
}, d = {
  audioLibrary1: [ "./assets/lesphrases/sound/combination/F_rires2.mp3", "./assets/lesphrases/sound/combination/F_rires7.mp3", "./assets/lesphrases/sound/combination/F_rires8.mp3", "./assets/lesphrases/sound/combination/F_rires9.mp3", "./assets/lesphrases/sound/combination/F_rires10.mp3", "./assets/lesphrases/sound/combination/F_rires11.mp3", "./assets/lesphrases/sound/combination/F_rires13.mp3", "./assets/lesphrases/sound/combination/F_rires15.mp3" ],
  audioLibrary2: [ "./assets/lesphrases/sound/combination/G_CestCompletementToque.mp3", "./assets/lesphrases/sound/combination/G_CestCompletementToque_ALT.mp3", "./assets/lesphrases/sound/combination/G_IlEstDrole.mp3", "./assets/lesphrases/sound/combination/G_MaisQuelCoquin.mp3", "./assets/lesphrases/sound/combination/G_OhMaisCaVaPas.mp3", "./assets/lesphrases/sound/combination/G_OhMaisCaVaPasLaTete.mp3" ]
}, c = {
  zone1dateset: [ {
    text: "Au parc",
    audio: "./assets/lesphrases/sound/variable_01/AuParc.mp3"
  }, {
    text: "Avec mon cousin",
    audio: "./assets/lesphrases/sound/variable_01/AvecCousin.mp3"
  }, {
    text: "Avec ma cousine",
    audio: "./assets/lesphrases/sound/variable_01/AvecCousine.mp3"
  }, {
    text: "Avec mon frére",
    audio: "./assets/lesphrases/sound/variable_01/AvecFrere.mp3"
  }, {
    text: "Avec ma maman",
    audio: "./assets/lesphrases/sound/variable_01/AvecMaman.mp3"
  }, {
    text: "Avec ma mamie",
    audio: "./assets/lesphrases/sound/variable_01/AvecMamie.mp3"
  }, {
    text: "Avec mon papa",
    audio: "./assets/lesphrases/sound/variable_01/AvecPapa.mp3"
  }, {
    text: "Avec mon papi",
    audio: "./assets/lesphrases/sound/variable_01/AvecPapi.mp3"
  }, {
    text: "Avec ma soeur",
    audio: "./assets/lesphrases/sound/variable_01/AvecSoeur.mp3"
  }, {
    text: "Dans ma cabanne",
    audio: "./assets/lesphrases/sound/variable_01/Cabanne.mp3"
  }, {
    text: "Chez moi",
    audio: "./assets/lesphrases/sound/variable_01/ChezMoi.mp3"
  }, {
    text: "Dans la Cour",
    audio: "./assets/lesphrases/sound/variable_01/Cours.mp3"
  }, {
    text: "Dans mon bain",
    audio: "./assets/lesphrases/sound/variable_01/DansBain.mp3"
  }, {
    text: "Dans ma classe",
    audio: "./assets/lesphrases/sound/variable_01/DansClasse.mp3"
  }, {
    text: "Dans la cuisine",
    audio: "./assets/lesphrases/sound/variable_01/DansCuisine.mp3"
  }, {
    text: "Derrière ma maison",
    audio: "./assets/lesphrases/sound/variable_01/DerriereMaison.mp3"
  }, {
    text: "A l'école",
    audio: "./assets/lesphrases/sound/variable_01/Ecole.mp3"
  }, {
    text: "Sous un arbre",
    audio: "./assets/lesphrases/sound/variable_01/SousArbre.mp3"
  }, {
    text: "Sous mon lit",
    audio: "./assets/lesphrases/sound/variable_01/SousMonLit.mp3"
  }, {
    text: "Dans le train",
    audio: "./assets/lesphrases/sound/variable_01/Train.mp3"
  }, {
    text: "Pendant les vacances",
    audio: "./assets/lesphrases/sound/variable_01/Vacances.mp3"
  } ]
}, h = {
  zone2dateset: [ {
    text: "j'allume",
    audio: "./assets/lesphrases/sound/variable_02/Allumer.mp3"
  }, {
    text: "j'arrose",
    audio: "./assets/lesphrases/sound/variable_02/Arrose.mp3"
  }, {
    text: "je cache",
    audio: "./assets/lesphrases/sound/variable_02/Cacher.mp3"
  }, {
    text: "je casse",
    audio: "./assets/lesphrases/sound/variable_02/Casse.mp3"
  }, {
    text: "je chatouille",
    audio: "./assets/lesphrases/sound/variable_02/Chatouiller.mp3"
  }, {
    text: "je colorie",
    audio: "./assets/lesphrases/sound/variable_02/Colorier.mp3"
  }, {
    text: "je console",
    audio: "./assets/lesphrases/sound/variable_02/Consoler.mp3"
  }, {
    text: "je croque",
    audio: "./assets/lesphrases/sound/variable_02/Croque.mp3"
  }, {
    text: "je cuis",
    audio: "./assets/lesphrases/sound/variable_02/Cuire.mp3"
  }, {
    text: "je découpe",
    audio: "./assets/lesphrases/sound/variable_02/Decoupe.mp3"
  }, {
    text: "j'écoute",
    audio: "./assets/lesphrases/sound/variable_02/Ecouter.mp3"
  }, {
    text: "j'embrasse",
    audio: "./assets/lesphrases/sound/variable_02/Embrasser.mp3"
  }, {
    text: "j'endore",
    audio: "./assets/lesphrases/sound/variable_02/Endormir.mp3"
  }, {
    text: "j'épluche",
    audio: "./assets/lesphrases/sound/variable_02/Eplucher.mp3"
  }, {
    text: "je gratte",
    audio: "./assets/lesphrases/sound/variable_02/Gratter.mp3"
  }, {
    text: "j'ai oublié",
    audio: "./assets/lesphrases/sound/variable_02/JaiOublie.mp3"
  }, {
    text: "je lance",
    audio: "./assets/lesphrases/sound/variable_02/Lancer.mp3"
  }, {
    text: "je lave",
    audio: "./assets/lesphrases/sound/variable_02/Laver.mp3"
  }, {
    text: "je mange",
    audio: "./assets/lesphrases/sound/variable_02/Mange.mp3"
  }, {
    text: "je mords",
    audio: "./assets/lesphrases/sound/variable_02/Mordre.mp3"
  }, {
    text: "j'ai oublié",
    audio: "./assets/lesphrases/sound/variable_02/Oublier.mp3"
  }, {
    text: "je perds",
    audio: "./assets/lesphrases/sound/variable_02/Perdre.mp3"
  }, {
    text: "je pince",
    audio: "./assets/lesphrases/sound/variable_02/Pincer.mp3"
  }, {
    text: "je prête",
    audio: "./assets/lesphrases/sound/variable_02/Preter.mp3"
  }, {
    text: "je range",
    audio: "./assets/lesphrases/sound/variable_02/Range.mp3"
  }, {
    text: "je ratatine",
    audio: "./assets/lesphrases/sound/variable_02/Ratatiner.mp3"
  }, {
    text: "je soigne",
    audio: "./assets/lesphrases/sound/variable_02/Soigner.mp3"
  }, {
    text: "je tords",
    audio: "./assets/lesphrases/sound/variable_02/Tordre.mp3"
  } ]
}, l = {
  zone3dateset: [ {
    image: "./assets/common/cards/Arbre.png",
    audio: "./assets/lesphrases/sound/variable_03/Avion.mp3"
  }, {
    image: "./assets/common/cards/Baignoire.png",
    audio: "./assets/lesphrases/sound/variable_03/Bananes.mp3"
  }, {
    image: "./assets/common/cards/Ballon.png",
    audio: "./assets/lesphrases/sound/variable_03/Biscotte.mp3"
  }, {
    image: "./assets/common/cards/Bottes.png",
    audio: "./assets/lesphrases/sound/variable_03/BrosseADents.mp3"
  }, {
    image: "./assets/common/cards/Camion.png",
    audio: "./assets/lesphrases/sound/variable_03/Chapeau.mp3"
  }, {
    image: "./assets/common/cards/Chateau.png",
    audio: "./assets/lesphrases/sound/variable_03/Courgette.mp3"
  }, {
    image: "./assets/common/cards/Chien.png",
    audio: "./assets/lesphrases/sound/variable_03/Crocodile.mp3"
  }, {
    image: "./assets/common/cards/Ciseaux.png",
    audio: "./assets/lesphrases/sound/variable_03/Fleurs.mp3"
  }, {
    image: "./assets/common/cards/Citron.png",
    audio: "./assets/lesphrases/sound/variable_03/Fraises.mp3"
  }, {
    image: "./assets/common/cards/Couronne.png",
    audio: "./assets/lesphrases/sound/variable_03/Fromage.mp3"
  }, {
    image: "./assets/common/cards/Couvert.png",
    audio: "./assets/lesphrases/sound/variable_03/Girafe.mp3"
  }, {
    image: "./assets/common/cards/Crayon.png",
    audio: "./assets/lesphrases/sound/variable_03/Grenouille.mp3"
  }, {
    image: "./assets/common/cards/De.png",
    audio: "./assets/lesphrases/sound/variable_03/Hipopotame.mp3"
  }, {
    image: "./assets/common/cards/Gants.png",
    audio: "./assets/lesphrases/sound/variable_03/Lapin.mp3"
  }, {
    image: "./assets/common/cards/Horloge.png",
    audio: "./assets/lesphrases/sound/variable_03/Lunettes.mp3"
  }, {
    image: "./assets/common/cards/Maillot.png",
    audio: "./assets/lesphrases/sound/variable_03/Papillon.mp3"
  }, {
    image: "./assets/common/cards/Maison.png",
    audio: "./assets/lesphrases/sound/variable_03/Parapluie.mp3"
  }, {
    image: "./assets/common/cards/Moto.png",
    audio: "./assets/lesphrases/sound/variable_03/Piano.mp3"
  }, {
    image: "./assets/common/cards/Nuage.png",
    audio: "./assets/lesphrases/sound/variable_03/Pyjama.mp3"
  }, {
    image: "./assets/common/cards/Oiseau.png",
    audio: "./assets/lesphrases/sound/variable_03/Rhinoceros.mp3"
  }, {
    image: "./assets/common/cards/Passoire.png",
    audio: "./assets/lesphrases/sound/variable_03/Telephone.mp3"
  }, {
    image: "./assets/common/cards/Pomme.png",
    audio: "./assets/lesphrases/sound/variable_03/Tomate.mp3"
  }, {
    image: "./assets/common/cards/Sapin.png",
    audio: "./assets/lesphrases/sound/variable_03/Tracteur.mp3"
  }, {
    image: "./assets/common/cards/Tortue.png",
    audio: "./assets/lesphrases/sound/variable_03/Trotinette.mp3"
  }, {
    image: "./assets/common/cards/Trompette.png",
    audio: "./assets/lesphrases/sound/variable_03/Vache.mp3"
  }, {
    image: "./assets/common/cards/Voilier.png",
    audio: "./assets/lesphrases/sound/variable_03/Velo.mp3"
  } ]
}, p = class {
  constructor(e) {
    s(this, e), this.zoning = r, this.expectedReadyEventCount = 2, this.readyEventCount = 1, 
    this.animationInProgress = !1, this.audioInProgress = !1, this.mascotEffect = [ "mascotsurprise", "mascotrire" ];
  }
  /**
   *
   */  componentWillLoad() {
    Object.assign(this.zoning, d), Object.assign(this.zoning, c), Object.assign(this.zoning, h), 
    Object.assign(this.zoning, l), this.zoning.audioLibrary1 = this.zoning.audioLibrary1.map((s => i.register("lmal", s))), 
    this.zoning.audioLibrary2 = this.zoning.audioLibrary2.map((s => i.register("lmal", s)));
  }
  /**
   *
   */  render() {
    return e("div", {
      class: "les-phrases-toctoc-container noscroll",
      ref: s => this.mainContainerRef = s
    }, e("div", {
      class: "loader-container",
      ref: s => this.loaderRef = s
    }, e("div", {
      class: "lds-ellipsis"
    }, e("div", null), e("div", null), e("div", null), e("div", null))), e("img", {
      class: "les-phrases-toctoc-decor",
      ref: s => this.decorRef = s,
      src: a("./assets/lesphrases/TocToc_Phrase.png")
    }), e("div", {
      class: "les-phrases-toctoc-back-btn",
      onClick: this.history.goBack,
      ref: s => this.backBtn = s
    }), e("div", {
      class: "les-phrases-toctoc-listen-btn",
      ref: s => this.listenBtn = s
    }), e("div", {
      class: "les-phrases-toctoc-mascot",
      ref: s => this.mascotContainer = s
    }, e("png-player-component", {
      ref: s => this.mascot = s,
      heightAuto: !0,
      onReady: () => this.handleReadyEvent(),
      zone: this.zoning.mascot
    })), e("div", {
      class: "les-phrases-toctoc-crank",
      ref: s => this.crankContainer = s
    }, e("png-player-component", {
      ref: s => this.crank = s,
      onReady: () => this.handleReadyEvent(),
      zone: this.zoning.crank
    })), e("div", {
      class: "les-phrases-toctoc-zone",
      ref: s => this.zone1Container = s
    }, e("toctoc-randomizer-component", {
      ref: s => this.zone1 = s,
      voicedText: this.zoning.zone1dateset
    })), e("div", {
      class: "les-phrases-toctoc-zone",
      ref: s => this.zone2Container = s
    }, e("toctoc-randomizer-component", {
      ref: s => this.zone2 = s,
      voicedText: this.zoning.zone2dateset
    })), e("div", {
      class: "les-phrases-toctoc-zone",
      ref: s => this.zone3Container = s
    }, e("toctoc-randomizer-component", {
      ref: s => this.zone3 = s,
      voicedImage: this.zoning.zone3dateset
    })), e("div", {
      class: "les-phrases-toctoc-zone-btn yellow",
      ref: s => this.zone1Btn = s
    }), e("div", {
      class: "les-phrases-toctoc-zone-btn orange",
      ref: s => this.zone2Btn = s
    }), e("div", {
      class: "les-phrases-toctoc-zone-btn beige",
      ref: s => this.zone3Btn = s
    }));
  }
  /**
   *
   * @param _evt
   */  onWindowResize(s) {
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
    this.readyEventCount++ >= this.expectedReadyEventCount && (this.loaderRef.style.display = "none", 
    setTimeout((() => this.onCranckTouched.call(this)), 500));
  }
  /**
   *
   */  drawCrank() {
    t(this.crankContainer, this.decorRef, this.zoning.crank), o(this.crankContainer, this.decorRef, this.zoning.crank, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left);
  }
  /**
   *
   */  drawMascot() {
    t(this.mascotContainer, this.decorRef, this.zoning.mascot), o(this.mascotContainer, this.decorRef, this.zoning.mascot, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left);
  }
  /**
   *
   */  drawBackBtn() {
    t(this.backBtn, this.decorRef, this.zoning.backBtn), o(this.backBtn, this.decorRef, this.zoning.backBtn, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left);
  }
  /**
   *
   */  drawListenBtn() {
    t(this.listenBtn, this.decorRef, this.zoning.listenBtn), o(this.listenBtn, this.decorRef, this.zoning.listenBtn, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left);
  }
  /**
   *
   */  drawZone1() {
    t(this.zone1Container, this.decorRef, this.zoning.zone1), o(this.zone1Container, this.decorRef, this.zoning.zone1, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left), 
    t(this.zone1Btn, this.decorRef, this.zoning.zone1Btn), o(this.zone1Btn, this.decorRef, this.zoning.zone1Btn, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left);
  }
  /**
   *
   */  drawZone2() {
    t(this.zone2Container, this.decorRef, this.zoning.zone2), o(this.zone2Container, this.decorRef, this.zoning.zone2, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left), 
    t(this.zone2Btn, this.decorRef, this.zoning.zone2Btn), o(this.zone2Btn, this.decorRef, this.zoning.zone2Btn, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left);
  }
  /**
   *
   */  drawZone3() {
    t(this.zone3Container, this.decorRef, this.zoning.zone3), o(this.zone3Container, this.decorRef, this.zoning.zone3, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left), 
    t(this.zone3Btn, this.decorRef, this.zoning.zone3Btn), o(this.zone3Btn, this.decorRef, this.zoning.zone3Btn, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left);
  }
  /**
   *
   */  attachListener() {
    this.crankContainer.onclick = this.onCranckTouched.bind(this), this.listenBtn.onclick = async () => {
      this.animationInProgress || this.audioInProgress || (this.audioInProgress = !0, 
      await this.zone1.playAudio(), await this.zone2.playAudio(), await this.zone3.playAudio(), 
      await n(2e3), await this.endSounds(), this.playMascotEffect(), this.audioInProgress = !1);
    }, this.zone1Btn.onclick = async () => {
      if (!this.animationInProgress && !this.audioInProgress) {
        this.animationInProgress = !0;
        const s = i.playAndGetRef("bras_machine", {
          offset: 1e3
        });
        this.zone1.start(), await n(3e3), s.stop(), this.zone1.stop(), await this.zone1.playAudio(), 
        await this.zone2.playAudio(), await this.zone3.playAudio(), await n(2e3), await this.endSounds(), 
        this.playMascotEffect(), this.animationInProgress = !1;
      }
    }, this.zone2Btn.onclick = async () => {
      if (!this.animationInProgress && !this.audioInProgress) {
        this.animationInProgress = !0;
        const s = i.playAndGetRef("bras_machine", {
          offset: 1e3
        });
        this.zone2.start(), await n(3e3), s.stop(), this.zone2.stop(), await this.zone1.playAudio(), 
        await this.zone2.playAudio(), await this.zone3.playAudio(), await n(2e3), await this.endSounds(), 
        this.playMascotEffect(), this.animationInProgress = !1;
      }
    }, this.zone3Btn.onclick = async () => {
      if (!this.animationInProgress && !this.audioInProgress) {
        this.animationInProgress = !0;
        const s = i.playAndGetRef("bras_machine", {
          offset: 1e3
        });
        this.zone3.start(), await n(2e3), s.stop(), this.zone3.stop(), await this.zone1.playAudio(), 
        await this.zone2.playAudio(), await this.zone3.playAudio(), await n(2e3), await this.endSounds(), 
        this.playMascotEffect(), this.animationInProgress = !1;
      }
    };
  }
  /**
   *
   */  async onCranckTouched() {
    this.animationInProgress || this.audioInProgress || (this.animationInProgress = !0, 
    requestAnimationFrame(this.crank.play.bind(this.crank)), await n(1e3), this.zone1.start(), 
    this.zone2.start(), this.zone3.start(), await n(2e3), this.zone1.stop(), this.zone1.playAudio(), 
    await n(2e3), this.zone2.stop(), this.zone2.playAudio(), await n(2e3), this.zone3.stop(), 
    this.zone3.playAudio(), await n(2e3), await this.endSounds(), this.playMascotEffect(), 
    this.animationInProgress = !1);
  }
  /**
   *
   */  async endSounds() {
    await i.play(this.zoning.audioLibrary1[Math.floor(Math.random() * this.zoning.audioLibrary1.length)]), 
    await n(1e3), await i.play(this.zoning.audioLibrary2[Math.floor(Math.random() * this.zoning.audioLibrary2.length)]);
  }
  /**
   *
   */  playMascotEffect() {
    this.mascot.playSequence(this.mascotEffect[Math.floor(Math.random() * this.mascotEffect.length)]);
  }
  static get assetsDirs() {
    return [ "assets" ];
  }
};

p.style = ":host{display:block}.les-phrases-toctoc-container{position:relative;background-color:rgb(255, 254, 240);height:100%;overflow:auto}.les-phrases-toctoc-decor{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:95%}.les-phrases-toctoc-back-btn{position:absolute;border-radius:50%;background:center / contain no-repeat url('./assets/common/icon/Picto_Retour.svg')}.les-phrases-toctoc-listen-btn{position:absolute;border-radius:50%;background:center / contain no-repeat url('./assets/lesphrases/Picto_Ecouter.svg')}.les-phrases-toctoc-back-btn:hover,.les-phrases-toctoc-listen-btn:hover,.les-phrases-toctoc-zone-btn:hover{transform:scale(1.2)}.les-phrases-toctoc-mascot{position:absolute;border-radius:50%}.les-phrases-toctoc-crank{position:absolute;border-radius:50%}.les-phrases-toctoc-zone{position:absolute}.les-phrases-toctoc-zone-btn{position:absolute;border-radius:50%}.yellow{background-color:rgb(249, 215, 77)}.orange{background-color:rgb(237, 125, 63)}.beige{background-color:rgb(255, 254, 240)}";

export { p as les_phrases_toctoc }