import { r as t, h as s, c as o } from "./p-f68e5270.js";

import { z as e, a as i, b as n } from "./p-ab28ff84.js";

import { a as c } from "./p-e05309b2.js";

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
    image: "TocToc_Menu_Mascotte.png"
  }
}, a = class {
  constructor(s) {
    t(this, s), this.zoning = h;
  }
  /**
   *
   */  componentWillLoad() {
    this.baseUrl = location.pathname.substring(0, location.pathname.lastIndexOf("/"));
  }
  render() {
    return s("div", {
      class: "toc-toc-menu noscroll",
      ref: t => this.menuContainerRef = t
    }, s("img", {
      class: "toc-toc-menu-decor",
      ref: t => this.decorRef = t,
      src: o("./assets/home/TocToc_Menu_Machine.png")
    }), s("img", {
      class: "toc-toc-menu-mascot",
      width: "0",
      height: "0",
      ref: t => this.mascot = t,
      src: o("./assets/home/" + this.zoning.mascot.image)
    }), s("div", {
      class: "toc-toc-menu-play",
      ref: t => this.card1 = t,
      onClick: t => this.goTo(t, this.baseUrl + "/les-mots-toctoc.html", "bouton1")
    }), s("img", {
      class: "toc-toc-menu-play",
      width: "0",
      height: "0",
      ref: t => this.btn1 = t,
      onClick: t => this.goTo(t, this.baseUrl + "/les-mots-toctoc.html", "bouton1"),
      src: o("./assets/home/" + this.zoning.playBtn1.image)
    }), s("div", {
      class: "toc-toc-menu-play",
      ref: t => this.card2 = t,
      onClick: t => this.goTo(t, this.baseUrl + "/les-phrases-toctoc.html", "bouton2")
    }), s("img", {
      class: "toc-toc-menu-play",
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
    n(this.card1, this.decorRef, this.zoning.lesMotsCard), i(this.card1, this.decorRef, this.zoning.lesMotsCard, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left), 
    e(this.btn2, this.decorRef, this.zoning.playBtn2), i(this.btn2, this.decorRef, this.zoning.playBtn2, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left), 
    n(this.card2, this.decorRef, this.zoning.lesPhrasesCard), i(this.card2, this.decorRef, this.zoning.lesPhrasesCard, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left);
  }
  /**
   *
   */  drawMascot() {
    e(this.mascot, this.decorRef, this.zoning.mascot), i(this.mascot, this.decorRef, this.zoning.mascot, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left);
  }
  /**
   *
   * @param page
   * @param sound
   */  async goTo(t, s, o) {
    c.play(o), this.history.push(s, {});
  }
  static get assetsDirs() {
    return [ "assets" ];
  }
};

a.style = ".toc-toc-menu{position:relative;background-color:rgb(255, 254, 240);height:100%}.toc-toc-menu-decor{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:95%}.toc-toc-menu-play{position:absolute;cursor:pointer}.toc-toc-menu-play:hover{transform:scale(1.2)}.toc-toc-menu-mascot{position:absolute}";

export { a as app_home }