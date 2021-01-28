/**
 *
 * @param str
 */
function normalizeString(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

/**
 *
 * @param selector
 * @param root
 */ function findElem(e, n) {
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

export { findElem as f, normalizeString as n, sleep as s }