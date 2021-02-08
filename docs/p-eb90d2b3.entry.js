import { r as t, h as e, c as o } from "./p-f983d8f8.js";

import { z as s, a as i, b as n, w as c } from "./p-dbc793a8.js";

import { a } from "./p-625f43aa.js";

const h = {
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
    } ],
    animationDurationMs: 1e3
  }
}, r = class {
  constructor(e) {
    t(this, e), this.zoning = h;
  }
  /**
   *
   */  componentWillLoad() {
    this.baseUrl = location.pathname.substring(0, location.pathname.lastIndexOf("/"));
  }
  render() {
    return e("div", {
      class: "toc-toc-menu noscroll",
      ref: t => this.menuContainerRef = t
    }, e("img", {
      class: "toc-toc-menu-decor",
      ref: t => this.decorRef = t,
      src: o("./assets/home/TocToc_Menu_Machine.png")
    }), e("div", {
      class: "toc-toc-menu-mascot",
      ref: t => this.mascotRef = t
    }, e("png-player-component", {
      ref: t => this.mascot = t,
      onReady: () => setTimeout((() => this.mascot.playSequence("mascotcoucou", !0)), 1e3),
      zone: this.zoning.mascot
    })), e("div", {
      class: "toc-toc-menu-play clickable",
      ref: t => this.card1 = t,
      onClick: t => this.goTo(t, this.baseUrl + "/les-mots-toctoc.html", "bouton1")
    }), e("img", {
      class: "toc-toc-menu-play clickable",
      width: "0",
      height: "0",
      ref: t => this.btn1 = t,
      onClick: t => this.goTo(t, this.baseUrl + "/les-mots-toctoc.html", "bouton1"),
      src: o("./assets/home/" + this.zoning.playBtn1.image)
    }), e("div", {
      class: "toc-toc-menu-play clickable",
      ref: t => this.card2 = t,
      onClick: t => this.goTo(t, this.baseUrl + "/les-phrases-toctoc.html", "bouton2")
    }), e("img", {
      class: "toc-toc-menu-play clickable",
      width: "0",
      height: "0",
      ref: t => this.btn2 = t,
      onClick: t => this.goTo(t, this.baseUrl + "/les-phrases-toctoc.html", "bouton2"),
      src: o("./assets/home/" + this.zoning.playBtn2.image)
    }));
  }
  /**
   *
   * @param _evt
   */  onWindowResize(t) {
    this.drawElems();
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
    this.drawElems(), a.play("pouet");
  }
  /**
   *
   */  drawElems() {
    this.decorReady() ? (this.drawMascot(), this.drawButtons()) : setTimeout((() => this.drawElems()), 500);
  }
  /**
   *
   */  decorReady() {
    return this.decorRef.getBoundingClientRect().width > 0;
  }
  /**
   *
   */  drawButtons() {
    s(this.btn1, this.decorRef, this.zoning.playBtn1), i(this.btn1, this.decorRef, this.zoning.playBtn1, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left), 
    n(this.card1, this.decorRef, this.zoning.lesMotsCard), i(this.card1, this.decorRef, this.zoning.lesMotsCard, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left), 
    s(this.btn2, this.decorRef, this.zoning.playBtn2), i(this.btn2, this.decorRef, this.zoning.playBtn2, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left), 
    n(this.card2, this.decorRef, this.zoning.lesPhrasesCard), i(this.card2, this.decorRef, this.zoning.lesPhrasesCard, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left);
  }
  /**
   *
   */  drawMascot() {
    n(this.mascotRef, this.decorRef, this.zoning.mascot), i(this.mascotRef, this.decorRef, this.zoning.mascot, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left), 
    this.mascot.drawCanvas(c(this.mascotRef), null);
  }
  /**
   *
   * @param page
   * @param sound
   */  async goTo(t, e, o) {
    a.play(o), this.history.push(e, {});
  }
  static get assetsDirs() {
    return [ "assets" ];
  }
};

r.style = ".toc-toc-menu{position:relative;background-color:rgb(255, 254, 240);height:100%}.toc-toc-menu-decor{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:95%}.toc-toc-menu-play{position:absolute;cursor:pointer}.toc-toc-menu-play:hover{transform:scale(1.2)}.toc-toc-menu-mascot{position:absolute}";

export { r as app_home }