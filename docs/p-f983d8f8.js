let e, t, n = !1, l = !1, o = !1, s = !1;

const i = "undefined" != typeof window ? window : {}, r = i.document || {
  head: {}
}, c = {
  _$$flags$$_: 0,
  _$$resourcesUrl$$_: "",
  jmp: e => e(),
  raf: e => requestAnimationFrame(e),
  ael: (e, t, n, l) => e.addEventListener(t, n, l),
  rel: (e, t, n, l) => e.removeEventListener(t, n, l),
  ce: (e, t) => new CustomEvent(e, t)
}, promiseResolve = e => Promise.resolve(e), a =  (() => {
  try {
    return new CSSStyleSheet, !0;
  } catch (e) {}
  return !1;
})(), f = {}, addHostEventListeners = (e, t, n, l) => {
  n && n.map((([n, l, o]) => {
    const s = getHostListenerTarget(e, n), i = hostListenerProxy(t, o), r = hostListenerOpts(n);
    c.ael(s, l, i, r), (t._$$rmListeners$$_ = t._$$rmListeners$$_ || []).push((() => c.rel(s, l, i, r)));
  }));
}, hostListenerProxy = (e, t) => n => {
  try {
    256 /* isListenReady */ & e._$$flags$$_ ? 
    // instance is ready, let's call it's member method for this event
    e._$$lazyInstance$$_[t](n) : (e._$$queuedListeners$$_ = e._$$queuedListeners$$_ || []).push([ t, n ]);
  } catch (e) {
    consoleError(e);
  }
}, getHostListenerTarget = (e, t) => 8 /* TargetWindow */ & t ? i : e, hostListenerOpts = e => 0 != (2 /* Capture */ & e), u = "http://www.w3.org/1999/xlink", d = new WeakMap, attachStyles = e => {
  const t = e._$$cmpMeta$$_, n = e._$$hostElement$$_, l = (t._$$tagName$$_, () => {});
  ((e, t, n, l) => {
    let o = getScopeId(t), s = k.get(o);
    if (
    // if an element is NOT connected then getRootNode() will return the wrong root node
    // so the fallback is to always use the document for the root node in those cases
    e = 11 /* DocumentFragment */ === e.nodeType ? e : r, s) if ("string" == typeof s) {
      e = e.head || e;
      let t, n = d.get(e);
      n || d.set(e, n = new Set), n.has(o) || (t = r.createElement("style"), t.innerHTML = s, 
      e.insertBefore(t, e.querySelector("link")), n && n.add(o));
    } else e.adoptedStyleSheets.includes(s) || (e.adoptedStyleSheets = [ ...e.adoptedStyleSheets, s ]);
  })(n.getRootNode(), t);
  l();
}, getScopeId = (e, t) => "sc-" + e._$$tagName$$_
/**
 * Default style mode id
 */
/**
 * Reusable empty obj/array
 * Don't add values to these!!
 */ , $ = {}, isComplexType = e => "object" === (
// https://jsperf.com/typeof-fn-object/5
e = typeof e) || "function" === e, h = (e, t, ...n) => {
  let l = null, o = null, s = null, i = !1, r = !1, c = [];
  const walk = t => {
    for (let n = 0; n < t.length; n++) l = t[n], Array.isArray(l) ? walk(l) : null != l && "boolean" != typeof l && ((i = "function" != typeof e && !isComplexType(l)) && (l += ""), 
    i && r ? 
    // If the previous child was simple (string), we merge both
    c[c.length - 1]._$$text$$_ += l : 
    // Append a new vNode, if it's text, we create a text vNode
    c.push(i ? newVNode(null, l) : l), r = i);
  };
  if (walk(n), t) {
    // normalize class / classname attributes
    t.key && (o = t.key), t.name && (s = t.name);
    {
      const e = t.className || t.class;
      e && (t.class = "object" != typeof e ? e : Object.keys(e).filter((t => e[t])).join(" "));
    }
  }
  if ("function" == typeof e) 
  // nodeName is a functional component
  return e(null === t ? {} : t, c, m);
  const a = newVNode(e, null);
  return a._$$attrs$$_ = t, c.length > 0 && (a._$$children$$_ = c), a._$$key$$_ = o, 
  a._$$name$$_ = s, a;
}, newVNode = (e, t) => {
  const n = {
    _$$flags$$_: 0,
    _$$tag$$_: e,
    _$$text$$_: t,
    _$$elm$$_: null,
    _$$children$$_: null,
    _$$attrs$$_: null,
    _$$key$$_: null,
    _$$name$$_: null
  };
  return n;
}, p = {}, m = {
  forEach: (e, t) => e.map(convertToPublic).forEach(t),
  map: (e, t) => e.map(convertToPublic).map(t).map(convertToPrivate)
}, convertToPublic = e => ({
  vattrs: e._$$attrs$$_,
  vchildren: e._$$children$$_,
  vkey: e._$$key$$_,
  vname: e._$$name$$_,
  vtag: e._$$tag$$_,
  vtext: e._$$text$$_
}), convertToPrivate = e => {
  if ("function" == typeof e.vtag) {
    const t = Object.assign({}, e.vattrs);
    return e.vkey && (t.key = e.vkey), e.vname && (t.name = e.vname), h(e.vtag, t, ...e.vchildren || []);
  }
  const t = newVNode(e.vtag, e.vtext);
  return t._$$attrs$$_ = e.vattrs, t._$$children$$_ = e.vchildren, t._$$key$$_ = e.vkey, 
  t._$$name$$_ = e.vname, t;
}, setAccessor = (e, t, n, l, o, s) => {
  if (n !== l) {
    let r = isMemberInElement(e, t), a = t.toLowerCase();
    if ("class" === t) {
      const t = e.classList, o = parseClassList(n), s = parseClassList(l);
      t.remove(...o.filter((e => e && !s.includes(e)))), t.add(...s.filter((e => e && !o.includes(e))));
    } else if ("style" === t) {
      for (const t in n) l && null != l[t] || (t.includes("-") ? e.style.removeProperty(t) : e.style[t] = "");
      for (const t in l) n && l[t] === n[t] || (t.includes("-") ? e.style.setProperty(t, l[t]) : e.style[t] = l[t]);
    } else if ("key" === t) ; else if ("ref" === t) 
    // minifier will clean this up
    l && l(e); else if (r || "o" !== t[0] || "n" !== t[1]) {
      // Set property if it exists and it's not a SVG
      const i = isComplexType(l);
      if ((r || i && null !== l) && !o) try {
        if (e.tagName.includes("-")) e[t] = l; else {
          let o = null == l ? "" : l;
          // Workaround for Safari, moving the <input> caret when re-assigning the same valued
                    "list" === t ? r = !1 : null != n && e[t] == o || (e[t] = o);
        }
      } catch (e) {}
      /**
             * Need to manually update attribute if:
             * - memberName is not an attribute
             * - if we are rendering the host element in order to reflect attribute
             * - if it's a SVG, since properties might not work in <svg>
             * - if the newValue is null/undefined or 'false'.
             */      let c = !1;
      a !== (a = a.replace(/^xlink\:?/, "")) && (t = a, c = !0), null == l || !1 === l ? !1 === l && "" !== e.getAttribute(t) || (c ? e.removeAttributeNS(u, t) : e.removeAttribute(t)) : (!r || 4 /* isHost */ & s || o) && !i && (l = !0 === l ? "" : l, 
      c ? e.setAttributeNS(u, t, l) : e.setAttribute(t, l));
    } else 
    // Event Handlers
    // so if the member name starts with "on" and the 3rd characters is
    // a capital letter, and it's not already a member on the element,
    // then we're assuming it's an event listener
    // on- prefixed events
    // allows to be explicit about the dom event to listen without any magic
    // under the hood:
    // <my-cmp on-click> // listens for "click"
    // <my-cmp on-Click> // listens for "Click"
    // <my-cmp on-ionChange> // listens for "ionChange"
    // <my-cmp on-EVENTS> // listens for "EVENTS"
    t = "-" === t[2] ? t.slice(3) : isMemberInElement(i, a) ? a.slice(2) : a[2] + t.slice(3), 
    n && c.rel(e, t, n, !1), l && c.ael(e, t, l, !1);
  }
}, b = /\s/, parseClassList = e => e ? e.split(b) : [], updateElement = (e, t, n, l) => {
  // if the element passed in is a shadow root, which is a document fragment
  // then we want to be adding attrs/props to the shadow root's "host" element
  // if it's not a shadow root, then we add attrs/props to the same element
  const o = 11 /* DocumentFragment */ === t._$$elm$$_.nodeType && t._$$elm$$_.host ? t._$$elm$$_.host : t._$$elm$$_, s = e && e._$$attrs$$_ || $, i = t._$$attrs$$_ || $;
  // remove attributes no longer present on the vnode by setting them to undefined
  for (l in s) l in i || setAccessor(o, l, s[l], void 0, n, t._$$flags$$_);
  // add new & update changed attributes
  for (l in i) setAccessor(o, l, s[l], i[l], n, t._$$flags$$_);
}, createElm = (l, s, i, c) => {
  // tslint:disable-next-line: prefer-const
  let a, f, u, d = s._$$children$$_[i], $ = 0;
  if (n || (
  // remember for later we need to check to relocate nodes
  o = !0, "slot" === d._$$tag$$_ && (d._$$flags$$_ |= d._$$children$$_ ? // slot element has fallback content
  2 /* isSlotFallback */ : // slot element does not have fallback content
  1 /* isSlotReference */)), null !== d._$$text$$_) 
  // create text node
  a = d._$$elm$$_ = r.createTextNode(d._$$text$$_); else if (1 /* isSlotReference */ & d._$$flags$$_) 
  // create a slot reference node
  a = d._$$elm$$_ = slotReferenceDebugNode(d); else if (
  // create element
  a = d._$$elm$$_ = r.createElement(2 /* isSlotFallback */ & d._$$flags$$_ ? "slot-fb" : d._$$tag$$_), 
  updateElement(null, d, false), d._$$children$$_) for ($ = 0; $ < d._$$children$$_.length; ++$) 
  // create the node
  f = createElm(l, d, $), 
  // return node could have been null
  f && 
  // append our new node
  a.appendChild(f);
  return a["s-hn"] = t, 3 /* isSlotReference */ & d._$$flags$$_ && (
  // remember the content reference comment
  a["s-sr"] = !0, 
  // remember the content reference comment
  a["s-cr"] = e, 
  // remember the slot name, or empty string for default slot
  a["s-sn"] = d._$$name$$_ || "", 
  // check if we've got an old vnode for this slot
  u = l && l._$$children$$_ && l._$$children$$_[i], u && u._$$tag$$_ === d._$$tag$$_ && l._$$elm$$_ && 
  // we've got an old slot vnode and the wrapper is being replaced
  // so let's move the old slot content back to it's original location
  putBackInOriginalLocation(l._$$elm$$_, !1)), a;
}, putBackInOriginalLocation = (e, n) => {
  c._$$flags$$_ |= 1 /* isTmpDisconnected */;
  const l = e.childNodes;
  for (let e = l.length - 1; e >= 0; e--) {
    const s = l[e];
    s["s-hn"] !== t && s["s-ol"] && (
    // // this child node in the old element is from another component
    // // remove this node from the old slot's parent
    // childNode.remove();
    // and relocate it back to it's original location
    parentReferenceNode(s).insertBefore(s, referenceNode(s)), 
    // remove the old original location comment entirely
    // later on the patch function will know what to do
    // and move this to the correct spot in need be
    s["s-ol"].remove(), s["s-ol"] = void 0, o = !0), n && putBackInOriginalLocation(s, n);
  }
  c._$$flags$$_ &= -2 /* isTmpDisconnected */;
}, addVnodes = (e, t, n, l, o, s) => {
  let i, r = e["s-cr"] && e["s-cr"].parentNode || e;
  for (;o <= s; ++o) l[o] && (i = createElm(null, n, o), i && (l[o]._$$elm$$_ = i, 
  r.insertBefore(i, referenceNode(t))));
}, removeVnodes = (e, t, n, o, s) => {
  for (;t <= n; ++t) (o = e[t]) && (s = o._$$elm$$_, callNodeRefs(o), 
  // we're removing this element
  // so it's possible we need to show slot fallback content now
  l = !0, s["s-ol"] ? 
  // remove the original location comment
  s["s-ol"].remove() : 
  // it's possible that child nodes of the node
  // that's being removed are slot nodes
  putBackInOriginalLocation(s, !0), 
  // remove the vnode's element from the dom
  s.remove());
}, isSameVnode = (e, t) => 
// compare if two vnode to see if they're "technically" the same
// need to have the same element tag, and same key to be the same
e._$$tag$$_ === t._$$tag$$_ && ("slot" === e._$$tag$$_ ? e._$$name$$_ === t._$$name$$_ : e._$$key$$_ === t._$$key$$_), referenceNode = e => e && e["s-ol"] || e, parentReferenceNode = e => (e["s-ol"] ? e["s-ol"] : e).parentNode, patch = (e, t) => {
  const n = t._$$elm$$_ = e._$$elm$$_, l = e._$$children$$_, o = t._$$children$$_, s = t._$$tag$$_, i = t._$$text$$_;
  let r;
  null === i ? ("slot" === s || 
  // either this is the first render of an element OR it's an update
  // AND we already know it's possible it could have changed
  // this updates the element's css classes, attrs, props, listeners, etc.
  updateElement(e, t, false), null !== l && null !== o ? 
  // looks like there's child vnodes for both the old and new vnodes
  ((e, t, n, l) => {
    let o, s, i = 0, r = 0, c = 0, a = 0, f = t.length - 1, u = t[0], d = t[f], $ = l.length - 1, p = l[0], m = l[$];
    for (;i <= f && r <= $; ) if (null == u) 
    // Vnode might have been moved left
    u = t[++i]; else if (null == d) d = t[--f]; else if (null == p) p = l[++r]; else if (null == m) m = l[--$]; else if (isSameVnode(u, p)) patch(u, p), 
    u = t[++i], p = l[++r]; else if (isSameVnode(d, m)) patch(d, m), d = t[--f], m = l[--$]; else if (isSameVnode(u, m)) 
    // Vnode moved right
    "slot" !== u._$$tag$$_ && "slot" !== m._$$tag$$_ || putBackInOriginalLocation(u._$$elm$$_.parentNode, !1), 
    patch(u, m), e.insertBefore(u._$$elm$$_, d._$$elm$$_.nextSibling), u = t[++i], m = l[--$]; else if (isSameVnode(d, p)) 
    // Vnode moved left
    "slot" !== u._$$tag$$_ && "slot" !== m._$$tag$$_ || putBackInOriginalLocation(d._$$elm$$_.parentNode, !1), 
    patch(d, p), e.insertBefore(d._$$elm$$_, u._$$elm$$_), d = t[--f], p = l[++r]; else {
      for (
      // createKeyToOldIdx
      c = -1, a = i; a <= f; ++a) if (t[a] && null !== t[a]._$$key$$_ && t[a]._$$key$$_ === p._$$key$$_) {
        c = a;
        break;
      }
      c >= 0 ? (s = t[c], s._$$tag$$_ !== p._$$tag$$_ ? o = createElm(t && t[r], n, c) : (patch(s, p), 
      t[c] = void 0, o = s._$$elm$$_), p = l[++r]) : (
      // new element
      o = createElm(t && t[r], n, r), p = l[++r]), o && parentReferenceNode(u._$$elm$$_).insertBefore(o, referenceNode(u._$$elm$$_));
    }
    i > f ? addVnodes(e, null == l[$ + 1] ? null : l[$ + 1]._$$elm$$_, n, l, r, $) : r > $ && removeVnodes(t, i, f);
  })(n, l, t, o) : null !== o ? (
  // no old child vnodes, but there are new child vnodes to add
  null !== e._$$text$$_ && (
  // the old vnode was text, so be sure to clear it out
  n.textContent = ""), 
  // add the new vnode children
  addVnodes(n, null, t, o, 0, o.length - 1)) : null !== l && 
  // no new child vnodes, but there are old child vnodes to remove
  removeVnodes(l, 0, l.length - 1)) : (r = n["s-cr"]) ? 
  // this element has slotted content
  r.parentNode.textContent = i : e._$$text$$_ !== i && (
  // update the text content for the text only vnode
  // and also only if the text is different than before
  n.data = i);
}, updateFallbackSlotVisibility = e => {
  // tslint:disable-next-line: prefer-const
  let t, n, l, o, s, i, r = e.childNodes;
  for (n = 0, l = r.length; n < l; n++) if (t = r[n], 1 /* ElementNode */ === t.nodeType) {
    if (t["s-sr"]) for (
    // this is a slot fallback node
    // get the slot name for this slot reference node
    s = t["s-sn"], 
    // by default always show a fallback slot node
    // then hide it if there are other slots in the light dom
    t.hidden = !1, o = 0; o < l; o++) if (r[o]["s-hn"] !== t["s-hn"]) if (
    // this sibling node is from a different component
    i = r[o].nodeType, "" !== s) {
      // this is a named fallback slot node
      if (1 /* ElementNode */ === i && s === r[o].getAttribute("slot")) {
        t.hidden = !0;
        break;
      }
    } else 
    // this is a default fallback slot node
    // any element or text node (with content)
    // should hide the default fallback slot node
    if (1 /* ElementNode */ === i || 3 /* TextNode */ === i && "" !== r[o].textContent.trim()) {
      t.hidden = !0;
      break;
    }
    // keep drilling down
        updateFallbackSlotVisibility(t);
  }
}, y = [], relocateSlotContent = e => {
  // tslint:disable-next-line: prefer-const
  let t, n, o, s, i, r, c = 0, a = e.childNodes, f = a.length;
  for (;c < f; c++) {
    if (t = a[c], t["s-sr"] && (n = t["s-cr"])) for (
    // first got the content reference comment node
    // then we got it's parent, which is where all the host content is in now
    o = n.parentNode.childNodes, s = t["s-sn"], r = o.length - 1; r >= 0; r--) n = o[r], 
    n["s-cn"] || n["s-nr"] || n["s-hn"] === t["s-hn"] || (
    // let's do some relocating to its new home
    // but never relocate a content reference node
    // that is suppose to always represent the original content location
    isNodeLocatedInSlot(n, s) ? (
    // it's possible we've already decided to relocate this node
    i = y.find((e => e._$$nodeToRelocate$$_ === n)), 
    // made some changes to slots
    // let's make sure we also double check
    // fallbacks are correctly hidden or shown
    l = !0, n["s-sn"] = n["s-sn"] || s, i ? 
    // previously we never found a slot home for this node
    // but turns out we did, so let's remember it now
    i._$$slotRefNode$$_ = t : 
    // add to our list of nodes to relocate
    y.push({
      _$$slotRefNode$$_: t,
      _$$nodeToRelocate$$_: n
    }), n["s-sr"] && y.map((e => {
      isNodeLocatedInSlot(e._$$nodeToRelocate$$_, n["s-sn"]) && (i = y.find((e => e._$$nodeToRelocate$$_ === n)), 
      i && !e._$$slotRefNode$$_ && (e._$$slotRefNode$$_ = i._$$slotRefNode$$_));
    }))) : y.some((e => e._$$nodeToRelocate$$_ === n)) || 
    // so far this element does not have a slot home, not setting slotRefNode on purpose
    // if we never find a home for this element then we'll need to hide it
    y.push({
      _$$nodeToRelocate$$_: n
    }));
    1 /* ElementNode */ === t.nodeType && relocateSlotContent(t);
  }
}, isNodeLocatedInSlot = (e, t) => 1 /* ElementNode */ === e.nodeType ? null === e.getAttribute("slot") && "" === t || e.getAttribute("slot") === t : e["s-sn"] === t || "" === t, callNodeRefs = e => {
  e._$$attrs$$_ && e._$$attrs$$_.ref && e._$$attrs$$_.ref(null), e._$$children$$_ && e._$$children$$_.map(callNodeRefs);
}, renderVdom = (s, i) => {
  const r = s._$$hostElement$$_, a = s._$$cmpMeta$$_, f = s._$$vnode$$_ || newVNode(null, null), u = (e => e && e._$$tag$$_ === p)(i) ? i : h(null, null, i);
  if (t = r.tagName, a._$$attrsToReflect$$_ && (u._$$attrs$$_ = u._$$attrs$$_ || {}, 
  a._$$attrsToReflect$$_.map((([e, t]) => u._$$attrs$$_[t] = r[e]))), u._$$tag$$_ = null, 
  u._$$flags$$_ |= 4 /* isHost */ , s._$$vnode$$_ = u, u._$$elm$$_ = f._$$elm$$_ = r, 
  e = r["s-cr"], n = 0 != (1 /* shadowDomEncapsulation */ & a._$$flags$$_), 
  // always reset
  l = !1, 
  // synchronous patch
  patch(f, u), 
  // while we're moving nodes around existing nodes, temporarily disable
  // the disconnectCallback from working
  c._$$flags$$_ |= 1 /* isTmpDisconnected */ , o) {
    let e, t, n, l, o, s;
    relocateSlotContent(u._$$elm$$_);
    let i = 0;
    for (;i < y.length; i++) e = y[i], t = e._$$nodeToRelocate$$_, t["s-ol"] || (
    // add a reference node marking this node's original location
    // keep a reference to this node for later lookups
    n = originalLocationDebugNode(t), n["s-nr"] = t, t.parentNode.insertBefore(t["s-ol"] = n, t));
    for (i = 0; i < y.length; i++) if (e = y[i], t = e._$$nodeToRelocate$$_, e._$$slotRefNode$$_) {
      for (
      // by default we're just going to insert it directly
      // after the slot reference node
      l = e._$$slotRefNode$$_.parentNode, o = e._$$slotRefNode$$_.nextSibling, n = t["s-ol"]; n = n.previousSibling; ) if (s = n["s-nr"], 
      s && s["s-sn"] === t["s-sn"] && l === s.parentNode && (s = s.nextSibling, !s || !s["s-nr"])) {
        o = s;
        break;
      }
      (!o && l !== t.parentNode || t.nextSibling !== o) && t !== o && (!t["s-hn"] && t["s-ol"] && (
      // probably a component in the index.html that doesn't have it's hostname set
      t["s-hn"] = t["s-ol"].parentNode.nodeName), 
      // add it back to the dom but in its new home
      l.insertBefore(t, o));
    } else 
    // this node doesn't have a slot home to go to, so let's hide it
    1 /* ElementNode */ === t.nodeType && (t.hidden = !0);
  }
  l && updateFallbackSlotVisibility(u._$$elm$$_), 
  // done moving nodes around
  // allow the disconnect callback to work again
  c._$$flags$$_ &= -2 /* isTmpDisconnected */ , 
  // always reset
  y.length = 0;
}, slotReferenceDebugNode = e => r.createComment(`<slot${e._$$name$$_ ? ' name="' + e._$$name$$_ + '"' : ""}> (host=${t.toLowerCase()})`), originalLocationDebugNode = e => r.createComment("org-location for " + (e.localName ? `<${e.localName}> (host=${e["s-hn"]})` : `[${e.textContent}]`)), getElement = e => getHostRef(e)._$$hostElement$$_, createEvent = (e, t, n) => {
  const l = getElement(e);
  return {
    emit: e => emitEvent(l, t, {
      bubbles: !!(4 /* Bubbles */ & n),
      composed: !!(2 /* Composed */ & n),
      cancelable: !!(1 /* Cancellable */ & n),
      detail: e
    })
  };
}, emitEvent = (e, t, n) => {
  const l = c.ce(t, n);
  return e.dispatchEvent(l), l;
}, attachToAncestor = (e, t) => {
  t && !e._$$onRenderResolve$$_ && t["s-p"] && t["s-p"].push(new Promise((t => e._$$onRenderResolve$$_ = t)));
}, scheduleUpdate = (e, t) => {
  if (e._$$flags$$_ |= 16 /* isQueuedForUpdate */ , 4 /* isWaitingForChildren */ & e._$$flags$$_) return void (e._$$flags$$_ |= 512 /* needsRerender */);
  attachToAncestor(e, e._$$ancestorComponent$$_);
  return C((() => dispatchHooks(e, t)));
}, dispatchHooks = (e, t) => {
  const n = e._$$hostElement$$_, l = (e._$$cmpMeta$$_._$$tagName$$_, () => {}), o = e._$$lazyInstance$$_;
  let s;
  return t ? (e._$$flags$$_ |= 256 /* isListenReady */ , e._$$queuedListeners$$_ && (e._$$queuedListeners$$_.map((([e, t]) => safeCall(o, e, t))), 
  e._$$queuedListeners$$_ = null), emitLifecycleEvent(n, "componentWillLoad"), s = safeCall(o, "componentWillLoad")) : emitLifecycleEvent(n, "componentWillUpdate"), 
  emitLifecycleEvent(n, "componentWillRender"), l(), then(s, (() => updateComponent(e, o, t)));
}, updateComponent = async (e, t, n) => {
  // updateComponent
  const l = e._$$hostElement$$_, o = (e._$$cmpMeta$$_._$$tagName$$_, () => {}), s = l["s-rc"];
  n && 
  // DOM WRITE!
  attachStyles(e);
  const i = (e._$$cmpMeta$$_._$$tagName$$_, () => {});
  renderVdom(e, callRender(e, t)), s && (
  // ok, so turns out there are some child host elements
  // waiting on this parent element to load
  // let's fire off all update callbacks waiting
  s.map((e => e())), l["s-rc"] = void 0), i(), o();
  {
    const t = l["s-p"], postUpdate = () => postUpdateComponent(e);
    0 === t.length ? postUpdate() : (Promise.all(t).then(postUpdate), e._$$flags$$_ |= 4 /* isWaitingForChildren */ , 
    t.length = 0);
  }
}, callRender = (e, t) => {
  try {
    t = t.render && t.render(), e._$$flags$$_ &= -17 /* isQueuedForUpdate */ , e._$$flags$$_ |= 2 /* hasRendered */;
  } catch (t) {
    consoleError(t, e._$$hostElement$$_);
  }
  return t;
}, postUpdateComponent = e => {
  e._$$cmpMeta$$_._$$tagName$$_;
  const t = e._$$hostElement$$_, endPostUpdate = () => {}, n = e._$$lazyInstance$$_, l = e._$$ancestorComponent$$_;
  safeCall(n, "componentDidRender"), emitLifecycleEvent(t, "componentDidRender"), 
  64 /* hasLoadedComponent */ & e._$$flags$$_ ? (safeCall(n, "componentDidUpdate"), 
  emitLifecycleEvent(t, "componentDidUpdate"), endPostUpdate()) : (e._$$flags$$_ |= 64 /* hasLoadedComponent */ , 
  // DOM WRITE!
  addHydratedFlag(t), safeCall(n, "componentDidLoad"), emitLifecycleEvent(t, "componentDidLoad"), 
  endPostUpdate(), e._$$onReadyResolve$$_(t), l || appDidLoad()), e._$$onInstanceResolve$$_(t), 
  e._$$onRenderResolve$$_ && (e._$$onRenderResolve$$_(), e._$$onRenderResolve$$_ = void 0), 
  512 /* needsRerender */ & e._$$flags$$_ && nextTick((() => scheduleUpdate(e, !1))), 
  e._$$flags$$_ &= -517 /* needsRerender */;
}
// ( •_•)
// ( •_•)>⌐■-■
// (⌐■_■)
, appDidLoad = e => {
  addHydratedFlag(r.documentElement), nextTick((() => emitEvent(i, "appload", {
    detail: {
      namespace: "ttoc"
    }
  })));
}, safeCall = (e, t, n) => {
  if (e && e[t]) try {
    return e[t](n);
  } catch (e) {
    consoleError(e);
  }
}, then = (e, t) => e && e.then ? e.then(t) : t(), emitLifecycleEvent = (e, t) => {
  emitEvent(e, "stencil_" + t, {
    bubbles: !0,
    composed: !0,
    detail: {
      namespace: "ttoc"
    }
  });
}, addHydratedFlag = e => e.classList.add("hydrated"), setValue = (e, t, n, l) => {
  // check our new property value against our internal value
  const o = getHostRef(e), s = o._$$hostElement$$_, i = o._$$instanceValues$$_.get(t), r = o._$$flags$$_, c = o._$$lazyInstance$$_;
  if (n = ((e, t) => 
  // ensure this value is of the correct prop type
  null == e || isComplexType(e) ? e : 4 /* Boolean */ & t ? "false" !== e && ("" === e || !!e) : 2 /* Number */ & t ? parseFloat(e) : 1 /* String */ & t ? e + "" : e)(n, l._$$members$$_[t][0]), 
  !(8 /* isConstructingInstance */ & r && void 0 !== i || n === i) && (
  // gadzooks! the property's value has changed!!
  // set our new value!
  o._$$instanceValues$$_.set(t, n), c)) {
    // get an array of method names of watch functions to call
    if (l._$$watchers$$_ && 128 /* isWatchReady */ & r) {
      const e = l._$$watchers$$_[t];
      e && 
      // this instance is watching for when this property changed
      e.map((e => {
        try {
          // fire off each of the watch methods that are watching this property
          c[e](n, i, t);
        } catch (e) {
          consoleError(e, s);
        }
      }));
    }
    2 /* hasRendered */ == (18 /* isQueuedForUpdate */ & r) && 
    // looks like this value actually changed, so we've got work to do!
    // but only if we've already rendered, otherwise just chill out
    // queue that we need to do an update, but don't worry about queuing
    // up millions cuz this function ensures it only runs once
    scheduleUpdate(o, !1);
  }
}, proxyComponent = (e, t, n) => {
  if (t._$$members$$_) {
    e.watchers && (t._$$watchers$$_ = e.watchers);
    // It's better to have a const than two Object.entries()
        const l = Object.entries(t._$$members$$_), o = e.prototype;
    if (l.map((([e, [l]]) => {
      31 /* Prop */ & l || 2 /* proxyState */ & n && 32 /* State */ & l ? 
      // proxyComponent - prop
      Object.defineProperty(o, e, {
        get() {
          // proxyComponent, get value
          return ((e, t) => getHostRef(e)._$$instanceValues$$_.get(t))(this, e);
        },
        set(n) {
          // proxyComponent, set value
          setValue(this, e, n, t);
        },
        configurable: !0,
        enumerable: !0
      }) : 1 /* isElementConstructor */ & n && 64 /* Method */ & l && 
      // proxyComponent - method
      Object.defineProperty(o, e, {
        value(...t) {
          const n = getHostRef(this);
          return n._$$onInstancePromise$$_.then((() => n._$$lazyInstance$$_[e](...t)));
        }
      });
    })), 1 /* isElementConstructor */ & n) {
      const n = new Map;
      o.attributeChangedCallback = function(e, t, l) {
        c.jmp((() => {
          const t = n.get(e);
          this[t] = (null !== l || "boolean" != typeof this[t]) && l;
        }));
      }, 
      // create an array of attributes to observe
      // and also create a map of html attribute name to js property name
      e.observedAttributes = l.filter((([e, t]) => 15 /* HasAttribute */ & t[0] // filter to only keep props that should match attributes
      )).map((([e, l]) => {
        const o = l[1] || e;
        return n.set(o, e), 512 /* ReflectAttr */ & l[0] && t._$$attrsToReflect$$_.push([ e, o ]), 
        o;
      }));
    }
  }
  return e;
}, initializeComponent = async (e, t, n, l, o) => {
  // initializeComponent
  if (0 == (32 /* hasInitializedComponent */ & t._$$flags$$_)) {
    {
      if (
      // we haven't initialized this element yet
      t._$$flags$$_ |= 32 /* hasInitializedComponent */ , (
      // lazy loaded components
      // request the component's implementation to be
      // wired up with the host element
      o = loadModule(n)).then) {
        // Await creates a micro-task avoid if possible
        const endLoad = () => {};
        o = await o, endLoad();
      }
      if (!o) throw Error(`Constructor for "${n._$$tagName$$_}#${t._$$modeName$$_}" was not found`);
      o.isProxied || (n._$$watchers$$_ = o.watchers, proxyComponent(o, n, 2 /* proxyState */), 
      o.isProxied = !0);
      const e = (n._$$tagName$$_, () => {});
      // ok, time to construct the instance
      // but let's keep track of when we start and stop
      // so that the getters/setters don't incorrectly step on data
            t._$$flags$$_ |= 8 /* isConstructingInstance */;
      // construct the lazy-loaded component implementation
      // passing the hostRef is very important during
      // construction in order to directly wire together the
      // host element and the lazy-loaded instance
      try {
        new o(t);
      } catch (e) {
        consoleError(e);
      }
      t._$$flags$$_ &= -9 /* isConstructingInstance */ , t._$$flags$$_ |= 128 /* isWatchReady */ , 
      e(), fireConnectedCallback(t._$$lazyInstance$$_);
    }
    if (o.style) {
      // this component has styles but we haven't registered them yet
      let e = o.style;
      const t = getScopeId(n);
      if (!k.has(t)) {
        const l = (n._$$tagName$$_, () => {});
        ((e, t, n) => {
          let l = k.get(e);
          a && n ? (l = l || new CSSStyleSheet, l.replace(t)) : l = t, k.set(e, l);
        })(t, e, !!(1 /* shadowDomEncapsulation */ & n._$$flags$$_)), l();
      }
    }
  }
  // we've successfully created a lazy instance
    const s = t._$$ancestorComponent$$_, schedule = () => scheduleUpdate(t, !0);
  s && s["s-rc"] ? 
  // this is the intial load and this component it has an ancestor component
  // but the ancestor component has NOT fired its will update lifecycle yet
  // so let's just cool our jets and wait for the ancestor to continue first
  // this will get fired off when the ancestor component
  // finally gets around to rendering its lazy self
  // fire off the initial update
  s["s-rc"].push(schedule) : schedule();
}, fireConnectedCallback = e => {
  safeCall(e, "connectedCallback");
}, setContentReference = e => {
  // only required when we're NOT using native shadow dom (slot)
  // or this browser doesn't support native shadow dom
  // and this host element was NOT created with SSR
  // let's pick out the inner content for slot projection
  // create a node to represent where the original
  // content was first placed, which is useful later on
  const t = e["s-cr"] = r.createComment(`content-ref (host=${e.localName})`);
  t["s-cn"] = !0, e.insertBefore(t, e.firstChild);
}, bootstrapLazy = (e, t = {}) => {
  const endBootstrap = () => {}, n = [], l = t.exclude || [], o = i.customElements, s = r.head, a =  s.querySelector("meta[charset]"), f =  r.createElement("style"), u = [];
  let d, $ = !0;
  Object.assign(c, t), c._$$resourcesUrl$$_ = new URL(t.resourcesUrl || "./", r.baseURI).href, 
  e.map((e => e[1].map((t => {
    const s = {
      _$$flags$$_: t[0],
      _$$tagName$$_: t[1],
      _$$members$$_: t[2],
      _$$listeners$$_: t[3]
    };
    s._$$members$$_ = t[2], s._$$listeners$$_ = t[3], s._$$attrsToReflect$$_ = [], s._$$watchers$$_ = {};
    const i = s._$$tagName$$_, r = class extends HTMLElement {
      // StencilLazyHost
      constructor(e) {
        // @ts-ignore
        super(e), registerHost(e = this, s);
      }
      connectedCallback() {
        d && (clearTimeout(d), d = null), $ ? 
        // connectedCallback will be processed once all components have been registered
        u.push(this) : c.jmp((() => (e => {
          if (0 == (1 /* isTmpDisconnected */ & c._$$flags$$_)) {
            const t = getHostRef(e), n = t._$$cmpMeta$$_, l = (n._$$tagName$$_, () => {});
            if (1 /* hasConnected */ & t._$$flags$$_) 
            // not the first time this has connected
            // reattach any event listeners to the host
            // since they would have been removed when disconnected
            addHostEventListeners(e, t, n._$$listeners$$_), 
            // fire off connectedCallback() on component instance
            fireConnectedCallback(t._$$lazyInstance$$_); else {
              // first time this component has connected
              t._$$flags$$_ |= 1 /* hasConnected */ , 
              // initUpdate
              // if the slot polyfill is required we'll need to put some nodes
              // in here to act as original content anchors as we move nodes around
              // host element has been connected to the DOM
              12 /* needsShadowDomShim */ & n._$$flags$$_ && setContentReference(e);
              {
                // find the first ancestor component (if there is one) and register
                // this component as one of the actively loading child components for its ancestor
                let n = e;
                for (;n = n.parentNode || n.host; ) 
                // climb up the ancestors looking for the first
                // component that hasn't finished its lifecycle update yet
                if (n["s-p"]) {
                  // we found this components first ancestor component
                  // keep a reference to this component's ancestor component
                  attachToAncestor(t, t._$$ancestorComponent$$_ = n);
                  break;
                }
              }
              // Lazy properties
              // https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
                            n._$$members$$_ && Object.entries(n._$$members$$_).map((([t, [n]]) => {
                if (31 /* Prop */ & n && e.hasOwnProperty(t)) {
                  const n = e[t];
                  delete e[t], e[t] = n;
                }
              })), initializeComponent(0, t, n);
            }
            l();
          }
        })(this)));
      }
      disconnectedCallback() {
        c.jmp((() => (e => {
          if (0 == (1 /* isTmpDisconnected */ & c._$$flags$$_)) {
            const t = getHostRef(e), n = t._$$lazyInstance$$_;
            t._$$rmListeners$$_ && (t._$$rmListeners$$_.map((e => e())), t._$$rmListeners$$_ = void 0), 
            safeCall(n, "disconnectedCallback"), safeCall(n, "componentDidUnload");
          }
        })(this)));
      }
      componentOnReady() {
        return getHostRef(this)._$$onReadyPromise$$_;
      }
    };
    s._$$lazyBundleId$$_ = e[0], l.includes(i) || o.get(i) || (n.push(i), o.define(i, proxyComponent(r, s, 1 /* isElementConstructor */)));
  })))), f.innerHTML = n + "{visibility:hidden}.hydrated{visibility:inherit}", f.setAttribute("data-styles", ""), 
  s.insertBefore(f, a ? a.nextSibling : s.firstChild), 
  // Process deferred connectedCallbacks now all components have been registered
  $ = !1, u.length ? u.map((e => e.connectedCallback())) : c.jmp((() => d = setTimeout(appDidLoad, 30))), 
  // Fallback appLoad event
  endBootstrap();
}, getAssetPath = e => {
  const t = new URL(e, c._$$resourcesUrl$$_);
  return t.origin !== i.location.origin ? t.href : t.pathname;
}, getContext = (e, t) => t in f ? f[t] : "window" === t ? i : "document" === t ? r : "isServer" !== t && "isPrerender" !== t && ("isClient" === t || ("resourcesUrl" === t || "publicPath" === t ? getAssetPath(".") : "queue" === t ? {
  write: C,
  read: S,
  tick: {
    then: e => nextTick(e)
  }
} : void 0)), w = new WeakMap, getHostRef = e => w.get(e), registerInstance = (e, t) => w.set(t._$$lazyInstance$$_ = e, t), registerHost = (e, t) => {
  const n = {
    _$$flags$$_: 0,
    _$$hostElement$$_: e,
    _$$cmpMeta$$_: t,
    _$$instanceValues$$_: new Map
  };
  return n._$$onInstancePromise$$_ = new Promise((e => n._$$onInstanceResolve$$_ = e)), 
  n._$$onReadyPromise$$_ = new Promise((e => n._$$onReadyResolve$$_ = e)), e["s-p"] = [], 
  e["s-rc"] = [], addHostEventListeners(e, n, t._$$listeners$$_), w.set(e, n);
}, isMemberInElement = (e, t) => t in e, consoleError = (e, t) => (0, console.error)(e, t), v =  new Map, loadModule = (e, t, n) => {
  // loadModuleImport
  const l = e._$$tagName$$_.replace(/-/g, "_"), o = e._$$lazyBundleId$$_, s = v.get(o);
  return s ? s[l] : import(
  /* webpackInclude: /\.entry\.js$/ */
  /* webpackExclude: /\.system\.entry\.js$/ */
  /* webpackMode: "lazy" */
  `./${o}.entry.js`).then((e => (v.set(o, e), e[l])), consoleError);
}, k = new Map, g = [], j = [], queueTask = (e, t) => n => {
  e.push(n), s || (s = !0, t && 4 /* queueSync */ & c._$$flags$$_ ? nextTick(flush) : c.raf(flush));
}, consume = e => {
  for (let t = 0; t < e.length; t++) try {
    e[t](performance.now());
  } catch (e) {
    consoleError(e);
  }
  e.length = 0;
}, flush = () => {
  // always force a bunch of medium callbacks to run, but still have
  // a throttle on how many can run in a certain time
  // DOM READS!!!
  consume(g), consume(j), (s = g.length > 0) && 
  // still more to do yet, but we've run out of time
  // let's let this thing cool off and try again in the next tick
  c.raf(flush);
}, nextTick =  e => promiseResolve().then(e), S =  queueTask(g, !1), C =  queueTask(j, !0);

export { p as H, getContext as a, bootstrapLazy as b, getAssetPath as c, createEvent as d, getElement as g, h, promiseResolve as p, registerInstance as r }