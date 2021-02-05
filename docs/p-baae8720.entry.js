import { r as t, h as o, c as s } from "./p-f983d8f8.js";

import { z as e, a as i, b as a } from "./p-ab28ff84.js";

import { a as c } from "./p-f80eff53.js";

const n = {
  playBtn1: {
    x: 1240,
    y: 1691,
    width: 204,
    height: 204,
    image: "Picto_Play.svg"
  },
  lesMotsCard: {
    x: 888,
    y: 1238,
    width: 904,
    height: 540
  },
  playBtn2: {
    x: 2400,
    y: 1691,
    width: 204,
    height: 204,
    image: "Picto_Play.svg"
  },
  lesPhrasesCard: {
    x: 2055,
    y: 1238,
    width: 904,
    height: 540
  },
  mascot: {
    x: 1608,
    y: 500,
    width: 621,
    height: 621,
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
  }
}, r = class {
  constructor(o) {
    t(this, o), this.zoning = n;
  }
  /**
   *
   */  componentWillLoad() {
    this.baseUrl = location.pathname.substring(0, location.pathname.lastIndexOf("/"));
  }
  render() {
    return o("div", {
      class: "toc-toc-menu noscroll",
      ref: t => this.menuContainerRef = t
    }, o("img", {
      class: "toc-toc-menu-decor",
      ref: t => this.decorRef = t,
      src: s("./assets/home/TocToc_Menu_Machine.png")
    }), o("div", {
      class: "toc-toc-menu-mascot",
      ref: t => this.mascotRef = t
    }, o("png-player-component", {
      ref: t => this.mascot = t,
      heightAuto: !0,
      onReady: () => setTimeout((() => this.mascot.playSequence("mascotcoucou", !0)), 1e3),
      zone: this.zoning.mascot
    })), o("div", {
      class: "toc-toc-menu-play clickable",
      ref: t => this.card1 = t,
      onClick: t => this.goTo(t, this.baseUrl + "/les-mots-toctoc.html", "bouton1")
    }), o("img", {
      class: "toc-toc-menu-play clickable",
      width: "0",
      height: "0",
      ref: t => this.btn1 = t,
      onClick: t => this.goTo(t, this.baseUrl + "/les-mots-toctoc.html", "bouton1"),
      src: s("./assets/home/" + this.zoning.playBtn1.image)
    }), o("div", {
      class: "toc-toc-menu-play clickable",
      ref: t => this.card2 = t,
      onClick: t => this.goTo(t, this.baseUrl + "/les-phrases-toctoc.html", "bouton2")
    }), o("img", {
      class: "toc-toc-menu-play clickable",
      width: "0",
      height: "0",
      ref: t => this.btn2 = t,
      onClick: t => this.goTo(t, this.baseUrl + "/les-phrases-toctoc.html", "bouton2"),
      src: s("./assets/home/" + this.zoning.playBtn2.image)
    }));
  }
  /**
   *
   * @param _evt
   */  onWindowResize(t) {
    this.drawMascot(), this.drawButtons();
  }
  /**
   *
   * @param _evt
   */  onOrientationChange(t) {
    this.drawMascot(), this.drawButtons();
  }
  /**
   *
   */  componentDidRender() {
    setTimeout((() => {
      this.drawMascot(), this.drawButtons(), c.play("pouet");
    }), 500);
  }
  /**
   *
   */  drawButtons() {
    e(this.btn1, this.decorRef, this.zoning.playBtn1), i(this.btn1, this.decorRef, this.zoning.playBtn1, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left), 
    a(this.card1, this.decorRef, this.zoning.lesMotsCard), i(this.card1, this.decorRef, this.zoning.lesMotsCard, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left), 
    e(this.btn2, this.decorRef, this.zoning.playBtn2), i(this.btn2, this.decorRef, this.zoning.playBtn2, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left), 
    a(this.card2, this.decorRef, this.zoning.lesPhrasesCard), i(this.card2, this.decorRef, this.zoning.lesPhrasesCard, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left);
  }
  /**
   *
   */  drawMascot() {
    a(this.mascotRef, this.decorRef, this.zoning.mascot), i(this.mascotRef, this.decorRef, this.zoning.mascot, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left);
  }
  /**
   *
   * @param page
   * @param sound
   */  async goTo(t, o, s) {
    c.play(s), this.history.push(o, {});
  }
  static get assetsDirs() {
    return [ "assets" ];
  }
};

r.style = ".toc-toc-menu{position:relative;background-color:rgb(255, 254, 240);height:100%}.toc-toc-menu-decor{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:95%}.toc-toc-menu-play{position:absolute;cursor:pointer}.toc-toc-menu-play:hover{transform:scale(1.2)}.toc-toc-menu-mascot{position:absolute}";

export { r as app_home }