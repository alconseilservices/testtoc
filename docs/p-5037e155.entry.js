import { r as e, d as t, h as i } from "./p-f983d8f8.js";

import { a } from "./p-53d0f9d1.js";

/**
 *
 */ class s {
  /**
   *
   * @param imagePath
   */
  constructor(e, t, i, a, s, n, r) {
    this.sequenceId = e, this.imagePath = t, this.show = i, this.timePerFrame = a, this.breakpoint = s, 
    this.soundeffect = n, this.frameSequenceIndex = r;
  }
}

const n = class {
  constructor(i) {
    e(this, i), this.breakpointReached = t(this, "breakpointReached", 7), this.animationFinished = t(this, "animationFinished", 7), 
    this.ready = t(this, "ready", 7), this.ignoreSoundEffect = !1, 
    /**
     *
     * @private
     */
    this.pngframes = [], this.stopRequested = !1, this.frameNumber = 0, this.playing = !1, 
    this.exitOnBreakpoint = !1, this.backToThumbail = !1, this.loop = !1;
  }
  /**
   *
   */  componentWillLoad() {
    let e = this.zone.animation[0].id;
    this.zone.animation.forEach((t => {
      for (let i = 0; i < t.totalFrames; i++) this.pngframes.push(new s(t.id + "-" + i, `${t.pathPrefix}${i.toString().padStart(5, "0")}.png`, !1, (t.animationDurationMs ? t.animationDurationMs : this.zone.animationDurationMs) / t.totalFrames, e !== t.id, t.soundEffect, i)), 
      e = t.id;
    })), this.pngframes[0].show = !0, this.imageHeight = this.heightAuto ? "auto" : "100%";
  }
  /**
   *
   */  componentDidRender() {
    const e = document.createDocumentFragment();
    Promise.all(this.pngframes.map(((t, i) => new Promise((a => {
      const s = document.createElement("img");
      t.ref = s, s.onload = () => {
        a(!0);
      }, s.classList.add("png-player-frame"), s.classList.add("" + (t.show ? "png-player-frame-showing" : "empty-class")), 
      s.classList.add("frame-nb-" + i), s.classList.add("sequence-seffect-" + t.soundeffect), 
      s.classList.add("sequence-id-" + t.sequenceId), s.style.height = this.heightAuto ? "auto" : this.imageHeight + "px", 
      s.src = t.imagePath, e.appendChild(s);
    }))))).then((t => this.framesContainer.append(e))).then((e => this.ready.emit(null)));
  }
  /**
   *
   */  render() {
    return i("div", {
      class: "png-player-frames-container",
      ref: e => this.framesContainer = e
    });
  }
  /**
   *
   */  async playSequence(e, t) {
    // console.log(`execute playSequence : sequenceId=${sequenceId}`);
    await this.stop(), this.findFirstSequenceFrame(e).classList.forEach((i => {
      i.startsWith("frame-nb-") && (this.frameNumber = parseInt(i.replace("frame-nb-", "")), 
      this.exitOnBreakpoint = !0, this.backToThumbail = t, this.animationExpiryTime = this.calculateExpiryTime(e, !1, !1), 
      requestAnimationFrame(this.internalPlay.bind(this)));
    }), this);
  }
  /**
   *
   */  async playAndExitOnBreakpoint(e) {
    // console.log(`execute playAndExitOnBreakpoint : sequenceId=${this.pngframes[this.frameNumber].sequenceId}`);
    return await this.stop(), this.exitOnBreakpoint = !0, this.backToThumbail = !1, 
    this.animationExpiryTime = this.calculateExpiryTime(void 0, !0, !1), this.internalPlay(e);
  }
  /**
   *
   */  async playAndLoop(e) {
    // console.log(`execute playAndLoop : sequenceId=${this.pngframes[this.frameNumber].sequenceId}`);
    return await this.stop(), this.loop = !0, this.exitOnBreakpoint = !1, this.backToThumbail = !1, 
    this.animationExpiryTime = this.calculateExpiryTime(void 0, !1, !0), this.internalPlay(e);
  }
  /**
   *
   */  async showThumbail() {
    this.stop(), this.showFrame(0);
  }
  /**
   *
   */  async play(e) {
    // console.log(`execute play : sequenceId=${this.pngframes[this.frameNumber].sequenceId}`);
    this.animationExpiryTime = this.calculateExpiryTime(void 0, !1, !1), this.exitOnBreakpoint = !1, 
    this.backToThumbail = !1, this.internalPlay(e);
  }
  /**
   *
   * @param startTime
   * @private
   */  internalPlay(e) {
    // const now = new Date().getTime();
    if (this.stopRequested || e > this.animationExpiryTime) return;
    const t = this.pngframes[this.frameNumber];
    if (this.timeWhenLastUpdate || (this.timeWhenLastUpdate = e), this.timeFromLastUpdate = e - this.timeWhenLastUpdate, 
    this.timeFromLastUpdate > t.timePerFrame) if (
    // console.log(`refreshAnim=${this.pngframes[this.frameNumber].sequenceId},at=${now},startTime=${startTime}`)
    this.showFrame(this.frameNumber), this.ignoreSoundEffect || this.playSoundEffect(), 
    // console.log(`show frame ${currentFrame.frameSequenceIndex} ${currentFrame.imagePath.substring(currentFrame.imagePath.lastIndexOf('/') +1)}`);
    this.timeWhenLastUpdate = e, this.frameNumber + 1 < this.pngframes.length) {
      if (this.frameNumber = this.frameNumber + 1, this.pngframes[this.frameNumber].breakpoint && this.exitOnBreakpoint) return this.breakpointReached.emit(this.pngframes[this.frameNumber].sequenceId + "-" + e), 
      void 
      // console.log(`breakpoint reached : sequenceId=${this.pngframes[this.frameNumber].sequenceId},startTime=${startTime}`);
      this.doBackToThumbnail();
    } else if (this.frameNumber = 0, !this.loop) 
    // console.log(`sequence finished : sequenceId=${this.pngframes[this.frameNumber].sequenceId}`);
    return this.animationFinished.emit(null), void this.doBackToThumbnail();
    this.animationId = requestAnimationFrame(this.internalPlay.bind(this));
  }
  /**
   *
   */  doBackToThumbnail() {
    setTimeout((() => {
      this.backToThumbail && (this.frameNumber = 0, this.showFrame(this.frameNumber));
    }), 1e3);
  }
  /**
   *
   */  async stop() {
    // console.log(`stop executed : sequenceId=${this.pngframes[this.frameNumber].sequenceId}, exitOnBreakpoint=${this.exitOnBreakpoint}, loop=${this.loop}`);
    return new Promise((e => {
      this.stopRequested = !0, this.animationId && (cancelAnimationFrame(this.animationId), 
      this.animationId = null), this.timeWhenLastUpdate = null, this.playing = !1, this.stopRequested = !1, 
      e(null);
    }));
  }
  /**
   *
   */  async isPlaying() {
    return this.playing;
  }
  /**
   *
   * @param index
   */  showFrame(e) {
    this.framesContainer.querySelectorAll(".png-player-frame-showing").forEach((e => e.classList.remove("png-player-frame-showing"))), 
    this.framesContainer.querySelectorAll(".frame-nb-" + e).forEach((e => e.classList.add("png-player-frame-showing")));
  }
  /**
   *
   * @param sequenceId
   */  findFirstSequenceFrame(e) {
    return this.framesContainer.querySelector(`.sequence-id-${e}-0`);
  }
  /**
   *
   */  playSoundEffect() {
    const e = this.pngframes[this.frameNumber];
    (e.breakpoint || 0 === e.frameSequenceIndex) && e.soundeffect && 
    // console.log(`playing sound effect ${currentFrame.soundeffect} for sequence ${currentFrame.sequenceId}, breakpoint=${currentFrame.breakpoint}, frameSequenceIndex=${currentFrame.frameSequenceIndex}`);
    a.play(e.soundeffect);
  }
  /**
   *
   * @param sequenceId
   * @param untilNextBreakpoint
   * @param loop
   */  calculateExpiryTime(e, t, i) {
    let a = 0;
    if (e) a = this.zone.animation.find((t => t.id === e)).animationDurationMs, a = a || this.zone.animationDurationMs; else if (t) for (let e = this.frameNumber; e < this.pngframes.length; e++) {
      let t;
      if (a += this.pngframes[e].timePerFrame, void 0 !== (t = this.pngframes[e + 1]) && t.breakpoint) break;
    } else if (i) a = this.pngframes.reduce(((e, t) => e + t.timePerFrame), 0), a *= 3; else for (let e = this.frameNumber; e < this.pngframes.length; e++) a += this.pngframes[e].timePerFrame;
    // // console.log(`animation will play during ${expiryTime} ms from ${new Date().toLocaleString()}: sequenceId=${this.pngframes[this.frameNumber].sequenceId}`);
        // // console.log(`animation will expire at ${new Date(expiryTime).toLocaleString()}: sequenceId=${this.pngframes[this.frameNumber].sequenceId}`);
    return a = (new Date).getTime() + a + 1, a;
  }
};

n.style = ".png-player-frames-container{width:100%;height:100%;position:relative}.png-player-frame{position:absolute;opacity:0;top:0;left:0;width:100%;height:100%}.png-player-frame-showing{opacity:1}@keyframes bounce{0%{transform:scale(1.1);opacity:1}50%{transform:scale(1.6);opacity:.7}60%{transform:scale(0.6);opacity:1}80%{transform:scale(0.95)}100%{transform:scale(0.85)}}.png-player-blinks{animation:bounce 1s .5s;transform:scale(0.85)}";

export { n as png_player_component }