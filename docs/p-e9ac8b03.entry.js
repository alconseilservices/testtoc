import { r as t, d as i, h as e, H as a } from "./p-f983d8f8.js";

import { a as s } from "./p-625f43aa.js";

import { s as n } from "./p-ed3d6334.js";

/**
 *
 */ class r {
  /**
   *
   * @param imagePath
   */
  constructor(t, i, e, a, s, n, r, h) {
    this.sequenceId = t, this.imagePath = i, this.show = e, this.timePerFrame = a, this.breakpoint = s, 
    this.soundeffect = n, this.frameSequenceIndex = r, this.ref = h;
  }
}

const h = class {
  constructor(e) {
    t(this, e), this.breakpointReached = i(this, "breakpointReached", 7), this.animationFinished = i(this, "animationFinished", 7), 
    this.ready = i(this, "ready", 7), this.ignoreSoundEffect = !1, 
    /**
     *
     * @private
     */
    this.pngframes = [], this.stopRequested = !1, this.frameNumber = 0, this.playing = !1, 
    this.exitOnBreakpoint = !1, this.backToThumbail = !1, this.thumbnailRemoved = !1, 
    this.loop = !1, this.ratio = 1;
  }
  /**
   *
   */  componentWillLoad() {
    let t = this.zone.animation[0].id;
    return new Promise((i => {
      this.zone.animation.forEach(((e, a) => {
        const s = e.animationDurationMs ? e.animationDurationMs : this.zone.animationDurationMs;
        for (let n = 0; n < e.totalFrames; n++) {
          const h = new r(e.id + "-" + n, `${e.pathPrefix}${n.toString().padStart(5, "0")}.png`, !1, s / e.totalFrames, t !== e.id, e.soundEffect, n, new Image);
          this.pngframes.push(h), h.ref.onload = () => {
            0 === a && 0 === n && (this.ratio = h.ref.naturalWidth / h.ref.naturalHeight, i(!0));
          }, h.ref.src = h.imagePath, t = e.id;
        }
      }));
    }));
  }
  /**
   *
   */  componentDidRender() {
    this.showFrame(0), this.ready.emit(null);
  }
  /**
   *
   */  render() {
    return e(a, null, e("canvas", {
      class: "png-player-frames-container",
      ref: t => {
        this.framesContainer = t, this.ctx = this.framesContainer.getContext("2d");
      }
    }), e("img", {
      class: "png-player-thumbnail",
      ref: t => this.frameThumbnail = t,
      src: this.zone.animation[0].pathPrefix + "00000.png"
    }));
  }
  /**
   *
   * @param desiredWidth
   */  async drawCanvas(t, i) {
    var e = window.devicePixelRatio || 1;
    i || (i = t / this.ratio), this.framesContainer.style.width = t + "px", this.framesContainer.style.height = i + "px", 
    this.framesContainer.width = t * e, this.framesContainer.height = i * e;
  }
  /**
   *
   */  async playSequence(t, i) {
    await this.stop(), this.frameNumber = this.pngframes.findIndex((i => i.sequenceId.startsWith(t))), 
    this.exitOnBreakpoint = !0, this.backToThumbail = i, this.animationExpiryTime = this.calculateExpiryTime(t, !1, !1), 
    requestAnimationFrame(this.internalPlay.bind(this));
  }
  /**
   *
   */  async playAndExitOnBreakpoint(t) {
    return await this.stop(), this.exitOnBreakpoint = !0, this.backToThumbail = !1, 
    this.animationExpiryTime = this.calculateExpiryTime(void 0, !0, !1), this.internalPlay(t);
  }
  /**
   *
   */  async playAndLoop(t) {
    return await this.stop(), this.loop = !0, this.exitOnBreakpoint = !1, this.backToThumbail = !1, 
    this.animationExpiryTime = this.calculateExpiryTime(void 0, !1, !0), this.internalPlay(t);
  }
  /**
   *
   */  async showThumbail() {
    this.stop(), this.showFrame(0);
  }
  /**
   *
   */  async play(t) {
    this.animationExpiryTime = this.calculateExpiryTime(void 0, !1, !1), this.exitOnBreakpoint = !1, 
    this.backToThumbail = !1, this.internalPlay(t);
  }
  /**
   *
   * @param startTime
   * @private
   */  internalPlay(t) {
    if (this.stopRequested || t > this.animationExpiryTime) return;
    const i = this.pngframes[this.frameNumber];
    if (this.timeWhenLastUpdate || (this.timeWhenLastUpdate = t), this.timeFromLastUpdate = t - this.timeWhenLastUpdate, 
    this.timeFromLastUpdate > i.timePerFrame) if (this.showFrame(this.frameNumber), 
    this.thumbnailRemoved || (this.thumbnailRemoved = !0, this.frameThumbnail.style.display = "none"), 
    this.ignoreSoundEffect || this.playSoundEffect(), this.timeWhenLastUpdate = t, this.frameNumber + 1 < this.pngframes.length) {
      if (this.frameNumber = this.frameNumber + 1, this.pngframes[this.frameNumber].breakpoint && this.exitOnBreakpoint) return this.breakpointReached.emit(this.pngframes[this.frameNumber].sequenceId + "-" + t), 
      void this.doBackToThumbnail();
    } else if (this.frameNumber = 0, !this.loop) return this.animationFinished.emit(null), 
    void this.doBackToThumbnail();
    this.animationId = requestAnimationFrame(this.internalPlay.bind(this));
  }
  /**
   *
   */  async doBackToThumbnail() {
    await n(1e3), this.backToThumbail && (this.frameNumber = 0, this.showFrame(this.frameNumber));
  }
  /**
   *
   */  async stop() {
    return new Promise((t => {
      this.stopRequested = !0, this.animationId && (cancelAnimationFrame(this.animationId), 
      this.animationId = null), this.timeWhenLastUpdate = null, this.playing = !1, this.stopRequested = !1, 
      t(null);
    }));
  }
  /**
   *
   */  async isPlaying() {
    return this.playing;
  }
  /**
   *
   */  async redrawCurrentFrame() {
    this.showFrame(this.frameNumber);
  }
  /**
   *
   * @param index
   */  showFrame(t) {
    this.frameNumber = t;
    const i = this.pngframes[t].ref;
    this.ctx.clearRect(0, 0, this.framesContainer.width, this.framesContainer.height), 
    this.ctx.drawImage(i, 0, 0, i.width, i.height, 0, 0, this.framesContainer.width, this.framesContainer.height);
  }
  /**
   *
   */  playSoundEffect() {
    const t = this.pngframes[this.frameNumber];
    (t.breakpoint || 0 === t.frameSequenceIndex) && t.soundeffect && s.play(t.soundeffect);
  }
  /**
   *
   * @param sequenceId
   * @param untilNextBreakpoint
   * @param loop
   */  calculateExpiryTime(t, i, e) {
    let a = 0;
    if (t) a = this.zone.animation.find((i => i.id === t)).animationDurationMs, a = a || this.zone.animationDurationMs; else if (i) for (let t = this.frameNumber; t < this.pngframes.length; t++) {
      let i;
      if (a += this.pngframes[t].timePerFrame, void 0 !== (i = this.pngframes[t + 1]) && i.breakpoint) break;
    } else if (e) a = this.pngframes.reduce(((t, i) => t + i.timePerFrame), 0), a *= 3; else for (let t = this.frameNumber; t < this.pngframes.length; t++) a += this.pngframes[t].timePerFrame;
    return a = (new Date).getTime() + a + 1, a;
  }
};

h.style = ".png-player-frames-container{position:absolute;width:100%}.png-player-thumbnail{position:absolute;width:100%}.png-player-frame{position:absolute;opacity:0;top:0;left:0;width:100%;height:100%}.png-player-frame-showing{opacity:1}@keyframes bounce{0%{transform:scale(1.1);opacity:1}50%{transform:scale(1.6);opacity:.7}60%{transform:scale(0.6);opacity:1}80%{transform:scale(0.95)}100%{transform:scale(0.85)}}.png-player-blinks{animation:bounce 1s .5s;transform:scale(0.85)}";

export { h as png_player_component }