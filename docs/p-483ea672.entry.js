import { r as t, h as o, c as s } from "./p-f68e5270.js";

import { z as e, a as i } from "./p-ab28ff84.js";

import { a as n } from "./p-1c5edcf0.js";

const c = {
  playBtn1: {
    x: 1240,
    y: 1691,
    width: 204,
    height: 204,
    image: "Picto_Play.svg"
  },
  playBtn2: {
    x: 2400,
    y: 1691,
    width: 204,
    height: 204,
    image: "Picto_Play.svg"
  },
  mascot: {
    x: 1608,
    y: 500,
    width: 621,
    height: 621,
    image: "TocToc_Menu_Mascotte.png"
  }
}, a = class {
  constructor(o) {
    t(this, o), this.zoning = c;
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
    }), o("img", {
      class: "toc-toc-menu-mascot",
      width: "0",
      height: "0",
      ref: t => this.mascot = t,
      src: s("./assets/home/" + this.zoning.mascot.image)
    }), o("img", {
      class: "toc-toc-menu-play",
      width: "0",
      height: "0",
      ref: t => this.btn1 = t,
      onClick: async t => await this.goTo(t, this.baseUrl + "/les-mots-toctoc.html", "bouton1"),
      src: s("./assets/home/" + this.zoning.playBtn1.image)
    }), o("img", {
      class: "toc-toc-menu-play",
      width: "0",
      height: "0",
      ref: t => this.btn2 = t,
      onClick: async t => await this.goTo(t, this.baseUrl + "/les-phrases-toctoc.html", "bouton2"),
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
   */  componentDidRender() {
    setTimeout((() => {
      this.drawMascot(), this.drawButtons(), n.play("pouet");
    }), 500);
  }
  /**
   *
   */  drawButtons() {
    e(this.btn1, this.decorRef, this.zoning.playBtn1), i(this.btn1, this.decorRef, this.zoning.playBtn1, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left), 
    e(this.btn2, this.decorRef, this.zoning.playBtn2), i(this.btn2, this.decorRef, this.zoning.playBtn2, this.decorRef.getBoundingClientRect().top, this.decorRef.getBoundingClientRect().left);
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
   */  async goTo(t, o, s) {
    n.play(s), this.history.push(o, {});
  }
  static get assetsDirs() {
    return [ "assets" ];
  }
};

a.style = ".toc-toc-menu{position:relative;background-color:rgb(255, 254, 240);height:100%}.toc-toc-menu-decor{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:95%}.toc-toc-menu-play{position:absolute;cursor:pointer}.toc-toc-menu-play:hover{transform:scale(1.2)}.toc-toc-menu-mascot{position:absolute}";

export { a as app_home }