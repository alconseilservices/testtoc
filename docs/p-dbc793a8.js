/**
 *
 */
function sizeRatioWidth(t) {
  let e = 1;
  return t && (e = t.clientWidth / t.naturalWidth), e = e || 1, e;
}

/**
 *
 */ function sizeRatioHeight(t) {
  let e = 1;
  return t && (e = t.clientWidth / t.naturalWidth), e = e || 1, e;
}

/**
 *
 * @param decor
 * @param zone
 * @param offset
 */
/**
 *
 * @param decor
 * @param zone
 */
function zoneWidth(t, e) {
  return e.width * sizeRatioWidth(t);
}

/**
 *
 * @param decor
 * @param zone
 */ function zoneHeight(t, e) {
  return e.height * sizeRatioHeight(t);
}

/**
 *
 * @param decor
 * @param zone
 */ function zoneWidthHeightForImage(t, e, i) {
  t.width = zoneWidth(e, i), t.height = zoneHeight(e, i);
}

/**
 *
 * @param decor
 * @param zone
 */ function zoneWidthHeightForElem(t, e, i) {
  t.style.width = i.width >= 0 ? zoneWidth(e, i) + "px" : "auto", t.style.height = i.height >= 0 ? zoneHeight(e, i) + "px" : "auto";
}

/**
 *
 * @param elem
 * @param decor
 * @param zone
 * @param offsetTop
 * @param offsetLeft
 */ function zoneTopLeftForElem(t, e, i, o, h) {
  t.style.top = 
  /**
 *
 * @param decor
 * @param zone
 * @param offset
 */
  function(t, e, i) {
    return e.y * sizeRatioHeight(t) + i + "px";
  }(e, i, o), t.style.left = function(t, e, i) {
    return e.x * sizeRatioWidth(t) + i + "px";
  }(e, i, h);
}

/**
 *
 * @param elem
 */ function widthFromElem(t) {
  return parseFloat(t.style.width.replace("px", ""));
}

/**
 *
 * @param elem
 */ function heightFromElem(t) {
  return parseFloat(t.style.height.replace("px", ""));
}

export { zoneTopLeftForElem as a, zoneWidthHeightForElem as b, heightFromElem as h, widthFromElem as w, zoneWidthHeightForImage as z }