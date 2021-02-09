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
  return new Promise(((n, t) => {
    setTimeout((() => n(!0)), e);
  }));
}

/**
 *
 * @param array
 */ function shuffle(e) {
  let n, t, r = e.length;
  for (;0 !== r; ) t = Math.floor(Math.random() * r), r -= 1, n = e[r], e[r] = e[t], 
  e[t] = n;
  return e;
}

export { shuffle as a, findElem as f, sleep as s }