/**
 *
 * @param str
 */
/**
 *
 * @param selector
 * @param root
 */
function findElem(e, n) {
  return n.querySelector(e);
}

/**
 *
 * @param durationMs
 */ function sleep(e) {
  return new Promise(((n, r) => {
    setTimeout((() => n(!0)), e);
  }));
}

export { findElem as f, sleep as s }