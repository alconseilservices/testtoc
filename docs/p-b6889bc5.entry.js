import { r as s, h as e, c as a, H as t } from "./p-f983d8f8.js";

import { b as o, a as i, w as n } from "./p-dbc793a8.js";

import { a as r } from "./p-625f43aa.js";

import { s as c } from "./p-6920613d.js";

const d = {
  backBtn: {
    x: 595,
    y: 388,
    width: 224,
    height: 224
  },
  listenBtn: {
    x: 1665,
    y: 527,
    width: 323,
    height: 323
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
      animationDurationMs: 1e3,
      soundEffect: "mascotte_doigt"
    }, {
      id: "mascotrire",
      pathPrefix: "./assets/common/anim/mascotte/mascotte_rire/Mascotte_Rire_",
      totalFrames: 100,
      soundEffect: "mascotte_rire"
    }, {
      id: "mascotsurprise",
      pathPrefix: "./assets/common/anim/mascotte/mascotte_surprise/Mascotte_Surprise_",
      totalFrames: 75,
      soundEffect: "mascotte_surprise"
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
    animationDurationMs: 800
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
    x: 989,
    y: 1660,
    width: 202,
    height: 202
  },
  zone2Btn: {
    x: 1728,
    y: 1660,
    width: 202,
    height: 202
  },
  zone3Btn: {
    x: 2467,
    y: 1660,
    width: 202,
    height: 202
  },
  cartridge: {
    x: 500,
    y: 0,
    width: 500,
    height: -1
  }
}, h = {
  audioLibrary1: [ "./assets/lesphrases/sound/combination/F_rires7.mp3", "./assets/lesphrases/sound/combination/F_rires10.mp3", "./assets/lesphrases/sound/combination/F_rires11.mp3", "./assets/lesphrases/sound/combination/F_rires13.mp3" ],
  audioLibrary2: [ "./assets/lesphrases/sound/combination/G_CestCompletementToque.mp3", "./assets/lesphrases/sound/combination/G_CestCompletementToque_ALT.mp3", "./assets/lesphrases/sound/combination/G_IlEstDrole.mp3", "./assets/lesphrases/sound/combination/G_MaisQuelCoquin.mp3", "./assets/lesphrases/sound/combination/G_OhMaisCaVaPas.mp3", "./assets/lesphrases/sound/combination/G_OhMaisCaVaPasLaTete.mp3" ]
}, l = {
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
    text: "Avec mon frère",
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
    text: "Dans ma cabane",
    audio: "./assets/lesphrases/sound/variable_01/Cabanne.mp3"
  }, {
    text: "Chez moi",
    audio: "./assets/lesphrases/sound/variable_01/ChezMoi.mp3"
  }, {
    text: "Dans la cour",
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
    text: "À l'école",
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
}, p = {
  zone2dateset: [ {
    text: "j'allume",
    audio: "./assets/lesphrases/sound/variable_02/Allumer.mp3"
  }, {
    text: "j'arrose",
    audio: "./assets/lesphrases/sound/variable_02/Arrose.mp3"
  }, {
    text: "j'ai caché",
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
    text: "je fais cuire",
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
    text: "j'endors",
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
    text: "j'oublie",
    audio: "./assets/lesphrases/sound/variable_02/Oublier.mp3"
  }, {
    text: "j'ai perdu",
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
}, u = {
  zone3dateset: [ {
    image: "./assets/common/cards/Arbre.png",
    audio: "./assets/lesphrases/sound/variable_03/Rhinoceros.mp3"
  }, {
    image: "./assets/common/cards/Baignoire.png",
    audio: "./assets/lesphrases/sound/variable_03/Biscotte.mp3"
  }, {
    image: "./assets/common/cards/Ballon.png",
    audio: "./assets/lesphrases/sound/variable_03/Lapin.mp3"
  }, {
    image: "./assets/common/cards/Bottes.png",
    audio: "./assets/lesphrases/sound/variable_03/Bananes.mp3"
  }, {
    image: "./assets/common/cards/Camion.png",
    audio: "./assets/lesphrases/sound/variable_03/Fromage.mp3"
  }, {
    image: "./assets/common/cards/Chateau.png",
    audio: "./assets/lesphrases/sound/variable_03/Papillon.mp3"
  }, {
    image: "./assets/common/cards/Chien.png",
    audio: "./assets/lesphrases/sound/variable_03/Avion.mp3"
  }, {
    image: "./assets/common/cards/Ciseaux.png",
    audio: "./assets/lesphrases/sound/variable_03/Tomate.mp3"
  }, {
    image: "./assets/common/cards/Citron.png",
    audio: "./assets/lesphrases/sound/variable_03/Telephone.mp3"
  }, {
    image: "./assets/common/cards/Couronne.png",
    audio: "./assets/lesphrases/sound/variable_03/Grenouille.mp3"
  }, {
    image: "./assets/common/cards/Couvert.png",
    audio: "./assets/lesphrases/sound/variable_03/Lunettes.mp3"
  }, {
    image: "./assets/common/cards/Crayon.png",
    audio: "./assets/lesphrases/sound/variable_03/Fraises.mp3"
  }, {
    image: "./assets/common/cards/De.png",
    audio: "./assets/lesphrases/sound/variable_03/Parapluie.mp3"
  }, {
    image: "./assets/common/cards/Gants.png",
    audio: "./assets/lesphrases/sound/variable_03/Fleurs.mp3"
  }, {
    image: "./assets/common/cards/Horloge.png",
    audio: "./assets/lesphrases/sound/variable_03/Girafe.mp3"
  }, {
    image: "./assets/common/cards/Maillot.png",
    audio: "./assets/lesphrases/sound/variable_03/Velo.mp3"
  }, {
    image: "./assets/common/cards/Maison.png",
    audio: "./assets/lesphrases/sound/variable_03/Vache.mp3"
  }, {
    image: "./assets/common/cards/Moto.png",
    audio: "./assets/lesphrases/sound/variable_03/BrosseADents.mp3"
  }, {
    image: "./assets/common/cards/Nuage.png",
    audio: "./assets/lesphrases/sound/variable_03/Tracteur.mp3"
  }, {
    image: "./assets/common/cards/Oiseau.png",
    audio: "./assets/lesphrases/sound/variable_03/Pyjama.mp3"
  }, {
    image: "./assets/common/cards/Passoire.png",
    audio: "./assets/lesphrases/sound/variable_03/Chapeau.mp3"
  }, {
    image: "./assets/common/cards/Pomme.png",
    audio: "./assets/lesphrases/sound/variable_03/Trotinette.mp3"
  }, {
    image: "./assets/common/cards/Sapin.png",
    audio: "./assets/lesphrases/sound/variable_03/Hipopotame.mp3"
  }, {
    image: "./assets/common/cards/Tortue.png",
    audio: "./assets/lesphrases/sound/variable_03/Piano.mp3"
  }, {
    image: "./assets/common/cards/Trompette.png",
    audio: "./assets/lesphrases/sound/variable_03/Crocodile.mp3"
  }, {
    image: "./assets/common/cards/Voilier.png",
    audio: "./assets/lesphrases/sound/variable_03/Courgette.mp3"
  } ]
}, m = class {
  constructor(e) {
    s(this, e), this.zoning = d, this.expectedReadyEventCount = 2, this.readyEventCount = 1, 
    this.animationInProgress = !1, this.audioInProgress = !1, this.lastMascotEffect = "mascotrire";
  }
  /**
   *
   */  componentWillLoad() {
    Object.assign(this.zoning, h), Object.assign(this.zoning, l), Object.assign(this.zoning, p), 
    Object.assign(this.zoning, u), this.zoning.audioLibrary1 = this.zoning.audioLibrary1.map((s => r.register("lmal", s))), 
    this.zoning.audioLibrary2 = this.zoning.audioLibrary2.map((s => r.register("lmal", s)));
  }
  /**
   *
   */  render() {
    return e(t, null, e("img", {
      class: "les-phrases-toctoc-cartridge",
      ref: s => this.cartridgeRef = s,
      style: {
        opacity: "0"
      },
      src: "./assets/lesphrases/cartouche_phrases.png"
    }), e("div", {
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
      class: "les-phrases-toctoc-back-btn clickable",
      onClick: () => this.onBackToMenu(),
      ref: s => this.backBtn = s
    }), e("div", {
      class: "les-phrases-toctoc-listen-btn clickable",
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
      class: "les-phrases-toctoc-crank clickable",
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
      class: "les-phrases-toctoc-zone-btn clickable",
      ref: s => this.zone1Btn = s
    }, e("div", {
      class: "yellow"
    })), e("div", {
      class: "les-phrases-toctoc-zone-btn clickable",
      ref: s => this.zone2Btn = s
    }, e("div", {
      class: "orange"
    })), e("div", {
      class: "les-phrases-toctoc-zone-btn clickable",
      ref: s => this.zone3Btn = s
    }, e("div", {
      class: "beige"
    }))));
  }
  /**
   *
   * @param _evt
   */  onWindowResize(s) {
    this.drawElems();
  }
  /**
   *
   * @param _evt
   */  onOrientationChange(s) {
    this.drawElems();
  }
  /**
   *
   */  componentDidLoad() {
    this.drawElems(), this.attachListener();
  }
  /**
   *
   */  drawElems() {
    this.decorReady() ? (this.drawCartridge(), this.drawBackBtn(), this.drawListenBtn(), 
    this.drawMascot(), this.drawCrank(), this.drawZone1(), this.drawZone2(), this.drawZone3()) : setTimeout((() => this.drawElems()), 300);
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
    this.readyEventCount++ >= this.expectedReadyEventCount && (this.loaderRef.style.display = "none", 
    setTimeout((() => this.onCranckTouched.call(this)), 600));
  }
  /**
   *
   */  drawCartridge() {
    o(this.cartridgeRef, this.decorRef, this.zoning.cartridge), i(this.cartridgeRef, this.decorRef, this.zoning.cartridge, 0, 0), 
    this.cartridgeRef.style.opacity = "1";
  }
  /**
   *
   */  drawCrank() {
    o(this.crankContainer, this.decorRef, this.zoning.crank), i(this.crankContainer, this.decorRef, this.zoning.crank, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left), 
    this.crank.drawCanvas(n(this.crankContainer), null), this.crank.redrawCurrentFrame();
  }
  /**
   *
   */  drawMascot() {
    o(this.mascotContainer, this.decorRef, this.zoning.mascot), i(this.mascotContainer, this.decorRef, this.zoning.mascot, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left), 
    this.mascot.drawCanvas(n(this.mascotContainer), null), this.mascot.redrawCurrentFrame();
  }
  /**
   *
   */  drawBackBtn() {
    o(this.backBtn, this.decorRef, this.zoning.backBtn), i(this.backBtn, this.decorRef, this.zoning.backBtn, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left);
  }
  /**
   *
   */  drawListenBtn() {
    o(this.listenBtn, this.decorRef, this.zoning.listenBtn), i(this.listenBtn, this.decorRef, this.zoning.listenBtn, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left);
  }
  /**
   *
   */  drawZone1() {
    o(this.zone1Container, this.decorRef, this.zoning.zone1), i(this.zone1Container, this.decorRef, this.zoning.zone1, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left), 
    o(this.zone1Btn, this.decorRef, this.zoning.zone1Btn), i(this.zone1Btn, this.decorRef, this.zoning.zone1Btn, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left);
  }
  /**
   *
   */  drawZone2() {
    o(this.zone2Container, this.decorRef, this.zoning.zone2), i(this.zone2Container, this.decorRef, this.zoning.zone2, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left), 
    o(this.zone2Btn, this.decorRef, this.zoning.zone2Btn), i(this.zone2Btn, this.decorRef, this.zoning.zone2Btn, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left);
  }
  /**
   *
   */  drawZone3() {
    o(this.zone3Container, this.decorRef, this.zoning.zone3), i(this.zone3Container, this.decorRef, this.zoning.zone3, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left), 
    o(this.zone3Btn, this.decorRef, this.zoning.zone3Btn), i(this.zone3Btn, this.decorRef, this.zoning.zone3Btn, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left);
  }
  /**
   *
   */  attachListener() {
    this.crankContainer.onclick = this.onCranckTouched.bind(this), this.listenBtn.onclick = async () => {
      this.animationInProgress || this.audioInProgress || (this.audioInProgress = !0, 
      await this.zone1.playAudio(), await this.zone2.playAudio(), await this.zone3.playAudio(), 
      await c(1e3), this.playMascotEffect(), this.audioInProgress = !1);
    }, this.zone1Btn.onclick = async () => {
      if (!this.animationInProgress && !this.audioInProgress) {
        this.animationInProgress = !0;
        const s = r.playAndGetRef("bras_machine", {
          offset: 1e3
        });
        this.zone1.start(), await c(3e3), s.stop(), this.zone1.stop(), await this.zone1.playAudio(), 
        await this.zone2.playAudio(), await this.zone3.playAudio(), await c(1e3), this.playMascotEffect(), 
        this.animationInProgress = !1;
      }
    }, this.zone2Btn.onclick = async () => {
      if (!this.animationInProgress && !this.audioInProgress) {
        this.animationInProgress = !0;
        const s = r.playAndGetRef("bras_machine", {
          offset: 1e3
        });
        this.zone2.start(), await c(3e3), s.stop(), this.zone2.stop(), await this.zone1.playAudio(), 
        await this.zone2.playAudio(), await this.zone3.playAudio(), await c(1e3), this.playMascotEffect(), 
        this.animationInProgress = !1;
      }
    }, this.zone3Btn.onclick = async () => {
      if (!this.animationInProgress && !this.audioInProgress) {
        this.animationInProgress = !0;
        const s = r.playAndGetRef("bras_machine", {
          offset: 1e3
        });
        this.zone3.start(), await c(2e3), s.stop(), this.zone3.stop(), await this.zone1.playAudio(), 
        await this.zone2.playAudio(), await this.zone3.playAudio(), await c(1e3), this.playMascotEffect(), 
        this.animationInProgress = !1;
      }
    };
  }
  /**
   *
   */  async onCranckTouched() {
    this.animationInProgress || this.audioInProgress || (this.animationInProgress = !0, 
    requestAnimationFrame(this.crank.play.bind(this.crank)), await c(1e3), this.zone1.start(), 
    this.zone2.start(), this.zone3.start(), await c(2e3), this.zone1.stop(), this.zone1.playAudio(), 
    await c(2e3), this.zone2.stop(), this.zone2.playAudio(), await c(2e3), this.zone3.stop(), 
    this.zone3.playAudio(), await c(2e3), this.playMascotEffect(), this.animationInProgress = !1);
  }
  /**
   *
   */  async endSounds() {
    await r.play(this.zoning.audioLibrary1[Math.floor(Math.random() * this.zoning.audioLibrary1.length)]);
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
   */  onBackToMenu() {
    r.stop(), this.crank.stop(), this.mascot.stop(), this.zone1.stop(), this.zone2.stop(), 
    this.zone3.stop(), this.history.goBack();
  }
  static get assetsDirs() {
    return [ "assets" ];
  }
};

m.style = ":host{display:block}.les-phrases-toctoc-container{position:relative;background-color:rgb(255, 254, 240);height:100%;overflow:auto}.les-phrases-toctoc-decor{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:95%}.les-phrases-toctoc-back-btn{position:absolute;border-radius:50%;background:center / contain no-repeat url('./assets/common/icon/Picto_Retour.svg')}.les-phrases-toctoc-listen-btn{position:absolute;border-radius:50%;background:center / contain no-repeat url('./assets/lesphrases/Picto_Ecouter.svg')}.les-phrases-toctoc-back-btn:hover,.les-phrases-toctoc-listen-btn:hover,.les-phrases-toctoc-zone-btn:hover{transform:scale(1.2)}.les-phrases-toctoc-mascot{position:absolute;border-radius:50%}.les-phrases-toctoc-crank{position:absolute;border-radius:50%}.les-phrases-toctoc-zone{position:absolute}.les-phrases-toctoc-zone-btn{position:absolute;border-radius:50%;background-color:rgb(74, 161, 174)}.les-phrases-toctoc-zone-btn div{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);border-radius:50%;height:50%;width:50%}.yellow{background-color:rgb(255, 215, 23)}.orange{background-color:rgb(254, 118, 40)}.beige{background-color:rgb(255, 254, 240)}.les-phrases-toctoc-cartridge{z-index:2;position:fixed;animation:opacity 1000 linear}";

export { m as les_phrases_toctoc }