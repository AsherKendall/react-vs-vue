/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function vt(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ee = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Qt = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], he = () => {
}, $s = () => !1, Cn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), qn = (e) => e.startsWith("onUpdate:"), fe = Object.assign, lr = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, yl = Object.prototype.hasOwnProperty, J = (e, t) => yl.call(e, t), j = Array.isArray, Ht = (e) => co(e) === "[object Map]", ks = (e) => co(e) === "[object Set]", H = (e) => typeof e == "function", ce = (e) => typeof e == "string", _t = (e) => typeof e == "symbol", te = (e) => e !== null && typeof e == "object", cr = (e) => (te(e) || H(e)) && H(e.then) && H(e.catch), js = Object.prototype.toString, co = (e) => js.call(e), ar = (e) => co(e).slice(8, -1), Ls = (e) => co(e) === "[object Object]", ur = (e) => ce(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, vn = /* @__PURE__ */ vt(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Nl = /* @__PURE__ */ vt(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), ao = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, bl = /-\w/g, Ge = ao(
  (e) => e.replace(bl, (t) => t.slice(1).toUpperCase())
), Ol = /\B([A-Z])/g, At = ao(
  (e) => e.replace(Ol, "-$1").toLowerCase()
), uo = ao((e) => e.charAt(0).toUpperCase() + e.slice(1)), kt = ao(
  (e) => e ? `on${uo(e)}` : ""
), Ct = (e, t) => !Object.is(e, t), cn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Yn = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, wl = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let $r;
const An = () => $r || ($r = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function fr(e) {
  if (j(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = ce(o) ? Sl(o) : fr(o);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else if (ce(e) || te(e))
    return e;
}
const Dl = /;(?![^(]*\))/g, Vl = /:([^]+)/, xl = /\/\*[^]*?\*\//g;
function Sl(e) {
  const t = {};
  return e.replace(xl, "").split(Dl).forEach((n) => {
    if (n) {
      const o = n.split(Vl);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function dr(e) {
  let t = "";
  if (ce(e))
    t = e;
  else if (j(e))
    for (let n = 0; n < e.length; n++) {
      const o = dr(e[n]);
      o && (t += o + " ");
    }
  else if (te(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Cl = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Al = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Rl = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Tl = /* @__PURE__ */ vt(Cl), Il = /* @__PURE__ */ vt(Al), Pl = /* @__PURE__ */ vt(Rl), Ml = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", $l = /* @__PURE__ */ vt(Ml);
function Hs(e) {
  return !!e || e === "";
}
const Fs = (e) => !!(e && e.__v_isRef === !0), zs = (e) => ce(e) ? e : e == null ? "" : j(e) || te(e) && (e.toString === js || !H(e.toString)) ? Fs(e) ? zs(e.value) : JSON.stringify(e, Us, 2) : String(e), Us = (e, t) => Fs(t) ? Us(e, t.value) : Ht(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, r], s) => (n[No(o, s) + " =>"] = r, n),
    {}
  )
} : ks(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => No(n))
} : _t(t) ? No(t) : te(t) && !j(t) && !Ls(t) ? String(t) : t, No = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    _t(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ke(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Ae;
class kl {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Ae, !t && Ae && (this.index = (Ae.scopes || (Ae.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Ae;
      try {
        return Ae = this, t();
      } finally {
        Ae = n;
      }
    } else process.env.NODE_ENV !== "production" && Ke("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ae, Ae = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Ae = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function jl() {
  return Ae;
}
let X;
const bo = /* @__PURE__ */ new WeakSet();
class Bs {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ae && Ae.active && Ae.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, bo.has(this) && (bo.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ws(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, kr(this), Ks(this);
    const t = X, n = We;
    X = this, We = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && X !== this && Ke(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), qs(this), X = t, We = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        mr(t);
      this.deps = this.depsTail = void 0, kr(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? bo.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    $o(this) && this.run();
  }
  get dirty() {
    return $o(this);
  }
}
let Gs = 0, _n, En;
function Ws(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = En, En = e;
    return;
  }
  e.next = _n, _n = e;
}
function pr() {
  Gs++;
}
function hr() {
  if (--Gs > 0)
    return;
  if (En) {
    let t = En;
    for (En = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; _n; ) {
    let t = _n;
    for (_n = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (o) {
          e || (e = o);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Ks(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function qs(e) {
  let t, n = e.depsTail, o = n;
  for (; o; ) {
    const r = o.prevDep;
    o.version === -1 ? (o === n && (n = r), mr(o), Ll(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = r;
  }
  e.deps = t, e.depsTail = n;
}
function $o(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ys(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ys(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === wn) || (e.globalVersion = wn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !$o(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = X, o = We;
  X = e, We = !0;
  try {
    Ks(e);
    const r = e.fn(e._value);
    (t.version === 0 || Ct(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    X = n, We = o, qs(e), e.flags &= -3;
  }
}
function mr(e, t = !1) {
  const { dep: n, prevSub: o, nextSub: r } = e;
  if (o && (o.nextSub = r, e.prevSub = void 0), r && (r.prevSub = o, e.nextSub = void 0), process.env.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = r), n.subs === e && (n.subs = o, !o && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      mr(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ll(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let We = !0;
const Js = [];
function qe() {
  Js.push(We), We = !1;
}
function Ye() {
  const e = Js.pop();
  We = e === void 0 ? !0 : e;
}
function kr(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = X;
    X = void 0;
    try {
      t();
    } finally {
      X = n;
    }
  }
}
let wn = 0;
class Hl {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class gr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!X || !We || X === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== X)
      n = this.activeLink = new Hl(X, this), X.deps ? (n.prevDep = X.depsTail, X.depsTail.nextDep = n, X.depsTail = n) : X.deps = X.depsTail = n, Qs(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = X.depsTail, n.nextDep = void 0, X.depsTail.nextDep = n, X.depsTail = n, X.deps === n && (X.deps = o);
    }
    return process.env.NODE_ENV !== "production" && X.onTrack && X.onTrack(
      fe(
        {
          effect: X
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, wn++, this.notify(t);
  }
  notify(t) {
    pr();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            fe(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      hr();
    }
  }
}
function Qs(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let o = t.deps; o; o = o.nextDep)
        Qs(o);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const ko = /* @__PURE__ */ new WeakMap(), Ft = Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), jo = Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), Dn = Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function pe(e, t, n) {
  if (We && X) {
    let o = ko.get(e);
    o || ko.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || (o.set(n, r = new gr()), r.map = o, r.key = n), process.env.NODE_ENV !== "production" ? r.track({
      target: e,
      type: t,
      key: n
    }) : r.track();
  }
}
function ot(e, t, n, o, r, s) {
  const i = ko.get(e);
  if (!i) {
    wn++;
    return;
  }
  const l = (a) => {
    a && (process.env.NODE_ENV !== "production" ? a.trigger({
      target: e,
      type: t,
      key: n,
      newValue: o,
      oldValue: r,
      oldTarget: s
    }) : a.trigger());
  };
  if (pr(), t === "clear")
    i.forEach(l);
  else {
    const a = j(e), h = a && ur(n);
    if (a && n === "length") {
      const f = Number(o);
      i.forEach((c, p) => {
        (p === "length" || p === Dn || !_t(p) && p >= f) && l(c);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), h && l(i.get(Dn)), t) {
        case "add":
          a ? h && l(i.get("length")) : (l(i.get(Ft)), Ht(e) && l(i.get(jo)));
          break;
        case "delete":
          a || (l(i.get(Ft)), Ht(e) && l(i.get(jo)));
          break;
        case "set":
          Ht(e) && l(i.get(Ft));
          break;
      }
  }
  hr();
}
function Wt(e) {
  const t = U(e);
  return t === e ? t : (pe(t, "iterate", Dn), Re(e) ? t : t.map(we));
}
function vr(e) {
  return pe(e = U(e), "iterate", Dn), e;
}
const Fl = {
  __proto__: null,
  [Symbol.iterator]() {
    return Oo(this, Symbol.iterator, we);
  },
  concat(...e) {
    return Wt(this).concat(
      ...e.map((t) => j(t) ? Wt(t) : t)
    );
  },
  entries() {
    return Oo(this, "entries", (e) => (e[1] = we(e[1]), e));
  },
  every(e, t) {
    return at(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return at(this, "filter", e, t, (n) => n.map(we), arguments);
  },
  find(e, t) {
    return at(this, "find", e, t, we, arguments);
  },
  findIndex(e, t) {
    return at(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return at(this, "findLast", e, t, we, arguments);
  },
  findLastIndex(e, t) {
    return at(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return at(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return wo(this, "includes", e);
  },
  indexOf(...e) {
    return wo(this, "indexOf", e);
  },
  join(e) {
    return Wt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return wo(this, "lastIndexOf", e);
  },
  map(e, t) {
    return at(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return an(this, "pop");
  },
  push(...e) {
    return an(this, "push", e);
  },
  reduce(e, ...t) {
    return jr(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return jr(this, "reduceRight", e, t);
  },
  shift() {
    return an(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return at(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return an(this, "splice", e);
  },
  toReversed() {
    return Wt(this).toReversed();
  },
  toSorted(e) {
    return Wt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Wt(this).toSpliced(...e);
  },
  unshift(...e) {
    return an(this, "unshift", e);
  },
  values() {
    return Oo(this, "values", we);
  }
};
function Oo(e, t, n) {
  const o = vr(e), r = o[t]();
  return o !== e && !Re(e) && (r._next = r.next, r.next = () => {
    const s = r._next();
    return s.done || (s.value = n(s.value)), s;
  }), r;
}
const zl = Array.prototype;
function at(e, t, n, o, r, s) {
  const i = vr(e), l = i !== e && !Re(e), a = i[t];
  if (a !== zl[t]) {
    const c = a.apply(e, s);
    return l ? we(c) : c;
  }
  let h = n;
  i !== e && (l ? h = function(c, p) {
    return n.call(this, we(c), p, e);
  } : n.length > 2 && (h = function(c, p) {
    return n.call(this, c, p, e);
  }));
  const f = a.call(i, h, o);
  return l && r ? r(f) : f;
}
function jr(e, t, n, o) {
  const r = vr(e);
  let s = n;
  return r !== e && (Re(e) ? n.length > 3 && (s = function(i, l, a) {
    return n.call(this, i, l, a, e);
  }) : s = function(i, l, a) {
    return n.call(this, i, we(l), a, e);
  }), r[t](s, ...o);
}
function wo(e, t, n) {
  const o = U(e);
  pe(o, "iterate", Dn);
  const r = o[t](...n);
  return (r === -1 || r === !1) && Jn(n[0]) ? (n[0] = U(n[0]), o[t](...n)) : r;
}
function an(e, t, n = []) {
  qe(), pr();
  const o = U(e)[t].apply(e, n);
  return hr(), Ye(), o;
}
const Ul = /* @__PURE__ */ vt("__proto__,__v_isRef,__isVue"), Xs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(_t)
);
function Bl(e) {
  _t(e) || (e = String(e));
  const t = U(this);
  return pe(t, "has", e), t.hasOwnProperty(e);
}
class Zs {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, o) {
    if (n === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, s = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return s;
    if (n === "__v_raw")
      return o === (r ? s ? si : ri : s ? oi : ni).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const i = j(t);
    if (!r) {
      let a;
      if (i && (a = Fl[n]))
        return a;
      if (n === "hasOwnProperty")
        return Bl;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      ue(t) ? t : o
    );
    if ((_t(n) ? Xs.has(n) : Ul(n)) || (r || pe(t, "get", n), s))
      return l;
    if (ue(l)) {
      const a = i && ur(n) ? l : l.value;
      return r && te(a) ? Ho(a) : a;
    }
    return te(l) ? r ? Ho(l) : po(l) : l;
  }
}
class ei extends Zs {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, r) {
    let s = t[n];
    if (!this._isShallow) {
      const a = gt(s);
      if (!Re(o) && !gt(o) && (s = U(s), o = U(o)), !j(t) && ue(s) && !ue(o))
        return a ? (process.env.NODE_ENV !== "production" && Ke(
          `Set operation on key "${String(n)}" failed: target is readonly.`,
          t[n]
        ), !0) : (s.value = o, !0);
    }
    const i = j(t) && ur(n) ? Number(n) < t.length : J(t, n), l = Reflect.set(
      t,
      n,
      o,
      ue(t) ? t : r
    );
    return t === U(r) && (i ? Ct(o, s) && ot(t, "set", n, o, s) : ot(t, "add", n, o)), l;
  }
  deleteProperty(t, n) {
    const o = J(t, n), r = t[n], s = Reflect.deleteProperty(t, n);
    return s && o && ot(t, "delete", n, void 0, r), s;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!_t(n) || !Xs.has(n)) && pe(t, "has", n), o;
  }
  ownKeys(t) {
    return pe(
      t,
      "iterate",
      j(t) ? "length" : Ft
    ), Reflect.ownKeys(t);
  }
}
class ti extends Zs {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && Ke(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && Ke(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Gl = /* @__PURE__ */ new ei(), Wl = /* @__PURE__ */ new ti(), Kl = /* @__PURE__ */ new ei(!0), ql = /* @__PURE__ */ new ti(!0), Lo = (e) => e, $n = (e) => Reflect.getPrototypeOf(e);
function Yl(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, s = U(r), i = Ht(s), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, h = r[e](...o), f = n ? Lo : t ? Fo : we;
    return !t && pe(
      s,
      "iterate",
      a ? jo : Ft
    ), {
      // iterator protocol
      next() {
        const { value: c, done: p } = h.next();
        return p ? { value: c, done: p } : {
          value: l ? [f(c[0]), f(c[1])] : f(c),
          done: p
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function kn(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Ke(
        `${uo(e)} operation ${n}failed: target is readonly.`,
        U(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Jl(e, t) {
  const n = {
    get(r) {
      const s = this.__v_raw, i = U(s), l = U(r);
      e || (Ct(r, l) && pe(i, "get", r), pe(i, "get", l));
      const { has: a } = $n(i), h = t ? Lo : e ? Fo : we;
      if (a.call(i, r))
        return h(s.get(r));
      if (a.call(i, l))
        return h(s.get(l));
      s !== i && s.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && pe(U(r), "iterate", Ft), r.size;
    },
    has(r) {
      const s = this.__v_raw, i = U(s), l = U(r);
      return e || (Ct(r, l) && pe(i, "has", r), pe(i, "has", l)), r === l ? s.has(r) : s.has(r) || s.has(l);
    },
    forEach(r, s) {
      const i = this, l = i.__v_raw, a = U(l), h = t ? Lo : e ? Fo : we;
      return !e && pe(a, "iterate", Ft), l.forEach((f, c) => r.call(s, h(f), h(c), i));
    }
  };
  return fe(
    n,
    e ? {
      add: kn("add"),
      set: kn("set"),
      delete: kn("delete"),
      clear: kn("clear")
    } : {
      add(r) {
        !t && !Re(r) && !gt(r) && (r = U(r));
        const s = U(this);
        return $n(s).has.call(s, r) || (s.add(r), ot(s, "add", r, r)), this;
      },
      set(r, s) {
        !t && !Re(s) && !gt(s) && (s = U(s));
        const i = U(this), { has: l, get: a } = $n(i);
        let h = l.call(i, r);
        h ? process.env.NODE_ENV !== "production" && Lr(i, l, r) : (r = U(r), h = l.call(i, r));
        const f = a.call(i, r);
        return i.set(r, s), h ? Ct(s, f) && ot(i, "set", r, s, f) : ot(i, "add", r, s), this;
      },
      delete(r) {
        const s = U(this), { has: i, get: l } = $n(s);
        let a = i.call(s, r);
        a ? process.env.NODE_ENV !== "production" && Lr(s, i, r) : (r = U(r), a = i.call(s, r));
        const h = l ? l.call(s, r) : void 0, f = s.delete(r);
        return a && ot(s, "delete", r, void 0, h), f;
      },
      clear() {
        const r = U(this), s = r.size !== 0, i = process.env.NODE_ENV !== "production" ? Ht(r) ? new Map(r) : new Set(r) : void 0, l = r.clear();
        return s && ot(
          r,
          "clear",
          void 0,
          void 0,
          i
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    n[r] = Yl(r, e, t);
  }), n;
}
function fo(e, t) {
  const n = Jl(e, t);
  return (o, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(
    J(n, r) && r in o ? n : o,
    r,
    s
  );
}
const Ql = {
  get: /* @__PURE__ */ fo(!1, !1)
}, Xl = {
  get: /* @__PURE__ */ fo(!1, !0)
}, Zl = {
  get: /* @__PURE__ */ fo(!0, !1)
}, ec = {
  get: /* @__PURE__ */ fo(!0, !0)
};
function Lr(e, t, n) {
  const o = U(n);
  if (o !== n && t.call(e, o)) {
    const r = ar(e);
    Ke(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const ni = /* @__PURE__ */ new WeakMap(), oi = /* @__PURE__ */ new WeakMap(), ri = /* @__PURE__ */ new WeakMap(), si = /* @__PURE__ */ new WeakMap();
function tc(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function nc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : tc(ar(e));
}
function po(e) {
  return gt(e) ? e : ho(
    e,
    !1,
    Gl,
    Ql,
    ni
  );
}
function ii(e) {
  return ho(
    e,
    !1,
    Kl,
    Xl,
    oi
  );
}
function Ho(e) {
  return ho(
    e,
    !0,
    Wl,
    Zl,
    ri
  );
}
function rt(e) {
  return ho(
    e,
    !0,
    ql,
    ec,
    si
  );
}
function ho(e, t, n, o, r) {
  if (!te(e))
    return process.env.NODE_ENV !== "production" && Ke(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = nc(e);
  if (s === 0)
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const l = new Proxy(
    e,
    s === 2 ? o : n
  );
  return r.set(e, l), l;
}
function Xt(e) {
  return gt(e) ? Xt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function gt(e) {
  return !!(e && e.__v_isReadonly);
}
function Re(e) {
  return !!(e && e.__v_isShallow);
}
function Jn(e) {
  return e ? !!e.__v_raw : !1;
}
function U(e) {
  const t = e && e.__v_raw;
  return t ? U(t) : e;
}
function oc(e) {
  return !J(e, "__v_skip") && Object.isExtensible(e) && Yn(e, "__v_skip", !0), e;
}
const we = (e) => te(e) ? po(e) : e, Fo = (e) => te(e) ? Ho(e) : e;
function ue(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function rc(e) {
  return li(e, !1);
}
function sc(e) {
  return li(e, !0);
}
function li(e, t) {
  return ue(e) ? e : new ic(e, t);
}
class ic {
  constructor(t, n) {
    this.dep = new gr(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : U(t), this._value = n ? t : we(t), this.__v_isShallow = n;
  }
  get value() {
    return process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, o = this.__v_isShallow || Re(t) || gt(t);
    t = o ? t : U(t), Ct(t, n) && (this._rawValue = t, this._value = o ? t : we(t), process.env.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function st(e) {
  return ue(e) ? e.value : e;
}
const lc = {
  get: (e, t, n) => t === "__v_raw" ? e : st(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return ue(r) && !ue(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function ci(e) {
  return Xt(e) ? e : new Proxy(e, lc);
}
class cc {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new gr(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = wn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    X !== this)
      return Ws(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const t = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Ys(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : process.env.NODE_ENV !== "production" && Ke("Write operation failed: computed value is readonly");
  }
}
function ac(e, t, n = !1) {
  let o, r;
  H(e) ? o = e : (o = e.get, r = e.set);
  const s = new cc(o, r, n);
  return process.env.NODE_ENV, s;
}
const jn = {}, Qn = /* @__PURE__ */ new WeakMap();
let jt;
function uc(e, t = !1, n = jt) {
  if (n) {
    let o = Qn.get(n);
    o || Qn.set(n, o = []), o.push(e);
  } else process.env.NODE_ENV !== "production" && !t && Ke(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function fc(e, t, n = ee) {
  const { immediate: o, deep: r, once: s, scheduler: i, augmentJob: l, call: a } = n, h = (I) => {
    (n.onWarn || Ke)(
      "Invalid watch source: ",
      I,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, f = (I) => r ? I : Re(I) || r === !1 || r === 0 ? St(I, 1) : St(I);
  let c, p, m, w, b = !1, L = !1;
  if (ue(e) ? (p = () => e.value, b = Re(e)) : Xt(e) ? (p = () => f(e), b = !0) : j(e) ? (L = !0, b = e.some((I) => Xt(I) || Re(I)), p = () => e.map((I) => {
    if (ue(I))
      return I.value;
    if (Xt(I))
      return f(I);
    if (H(I))
      return a ? a(I, 2) : I();
    process.env.NODE_ENV !== "production" && h(I);
  })) : H(e) ? t ? p = a ? () => a(e, 2) : e : p = () => {
    if (m) {
      qe();
      try {
        m();
      } finally {
        Ye();
      }
    }
    const I = jt;
    jt = c;
    try {
      return a ? a(e, 3, [w]) : e(w);
    } finally {
      jt = I;
    }
  } : (p = he, process.env.NODE_ENV !== "production" && h(e)), t && r) {
    const I = p, re = r === !0 ? 1 / 0 : r;
    p = () => St(I(), re);
  }
  const $ = jl(), A = () => {
    c.stop(), $ && $.active && lr($.effects, c);
  };
  if (s && t) {
    const I = t;
    t = (...re) => {
      I(...re), A();
    };
  }
  let T = L ? new Array(e.length).fill(jn) : jn;
  const ne = (I) => {
    if (!(!(c.flags & 1) || !c.dirty && !I))
      if (t) {
        const re = c.run();
        if (r || b || (L ? re.some((ie, me) => Ct(ie, T[me])) : Ct(re, T))) {
          m && m();
          const ie = jt;
          jt = c;
          try {
            const me = [
              re,
              // pass undefined as the old value when it's changed for the first time
              T === jn ? void 0 : L && T[0] === jn ? [] : T,
              w
            ];
            T = re, a ? a(t, 3, me) : (
              // @ts-expect-error
              t(...me)
            );
          } finally {
            jt = ie;
          }
        }
      } else
        c.run();
  };
  return l && l(ne), c = new Bs(p), c.scheduler = i ? () => i(ne, !1) : ne, w = (I) => uc(I, !1, c), m = c.onStop = () => {
    const I = Qn.get(c);
    if (I) {
      if (a)
        a(I, 4);
      else
        for (const re of I) re();
      Qn.delete(c);
    }
  }, process.env.NODE_ENV !== "production" && (c.onTrack = n.onTrack, c.onTrigger = n.onTrigger), t ? o ? ne(!0) : T = c.run() : i ? i(ne.bind(null, !0), !0) : c.run(), A.pause = c.pause.bind(c), A.resume = c.resume.bind(c), A.stop = A, A;
}
function St(e, t = 1 / 0, n) {
  if (t <= 0 || !te(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, ue(e))
    St(e.value, t, n);
  else if (j(e))
    for (let o = 0; o < e.length; o++)
      St(e[o], t, n);
  else if (ks(e) || Ht(e))
    e.forEach((o) => {
      St(o, t, n);
    });
  else if (Ls(e)) {
    for (const o in e)
      St(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && St(e[o], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const zt = [];
function Hn(e) {
  zt.push(e);
}
function Fn() {
  zt.pop();
}
let Do = !1;
function V(e, ...t) {
  if (Do) return;
  Do = !0, qe();
  const n = zt.length ? zt[zt.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = dc();
  if (o)
    sn(
      o,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((s) => {
          var i, l;
          return (l = (i = s.toString) == null ? void 0 : i.call(s)) != null ? l : JSON.stringify(s);
        }).join(""),
        n && n.proxy,
        r.map(
          ({ vnode: s }) => `at <${Eo(n, s.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    r.length && s.push(`
`, ...pc(r)), console.warn(...s);
  }
  Ye(), Do = !1;
}
function dc() {
  let e = zt[zt.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function pc(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...hc(n));
  }), t;
}
function hc({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${Eo(
    e.component,
    e.type,
    o
  )}`, s = ">" + n;
  return e.props ? [r, ...mc(e.props), s] : [r + s];
}
function mc(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...ai(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function ai(e, t, n) {
  return ce(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : ue(t) ? (t = ai(e, U(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : H(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = U(t), n ? t : [`${e}=`, t]);
}
const _r = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function sn(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (r) {
    Rn(r, t, n);
  }
}
function lt(e, t, n, o) {
  if (H(e)) {
    const r = sn(e, t, n, o);
    return r && cr(r) && r.catch((s) => {
      Rn(s, t, n);
    }), r;
  }
  if (j(e)) {
    const r = [];
    for (let s = 0; s < e.length; s++)
      r.push(lt(e[s], t, n, o));
    return r;
  } else process.env.NODE_ENV !== "production" && V(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Rn(e, t, n, o = !0) {
  const r = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: i } = t && t.appContext.config || ee;
  if (t) {
    let l = t.parent;
    const a = t.proxy, h = process.env.NODE_ENV !== "production" ? _r[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const f = l.ec;
      if (f) {
        for (let c = 0; c < f.length; c++)
          if (f[c](e, a, h) === !1)
            return;
      }
      l = l.parent;
    }
    if (s) {
      qe(), sn(s, null, 10, [
        e,
        a,
        h
      ]), Ye();
      return;
    }
  }
  gc(e, n, r, o, i);
}
function gc(e, t, n, o = !0, r = !1) {
  if (process.env.NODE_ENV !== "production") {
    const s = _r[t];
    if (n && Hn(n), V(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && Fn(), o)
      throw e;
    console.error(e);
  } else {
    if (r)
      throw e;
    console.error(e);
  }
}
const De = [];
let nt = -1;
const Zt = [];
let Dt = null, Jt = 0;
const ui = /* @__PURE__ */ Promise.resolve();
let Xn = null;
const vc = 100;
function fi(e) {
  const t = Xn || ui;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function _c(e) {
  let t = nt + 1, n = De.length;
  for (; t < n; ) {
    const o = t + n >>> 1, r = De[o], s = Vn(r);
    s < e || s === e && r.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function mo(e) {
  if (!(e.flags & 1)) {
    const t = Vn(e), n = De[De.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Vn(n) ? De.push(e) : De.splice(_c(t), 0, e), e.flags |= 1, di();
  }
}
function di() {
  Xn || (Xn = ui.then(mi));
}
function pi(e) {
  j(e) ? Zt.push(...e) : Dt && e.id === -1 ? Dt.splice(Jt + 1, 0, e) : e.flags & 1 || (Zt.push(e), e.flags |= 1), di();
}
function Hr(e, t, n = nt + 1) {
  for (process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < De.length; n++) {
    const o = De[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid || process.env.NODE_ENV !== "production" && Er(t, o))
        continue;
      De.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function hi(e) {
  if (Zt.length) {
    const t = [...new Set(Zt)].sort(
      (n, o) => Vn(n) - Vn(o)
    );
    if (Zt.length = 0, Dt) {
      Dt.push(...t);
      return;
    }
    for (Dt = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Jt = 0; Jt < Dt.length; Jt++) {
      const n = Dt[Jt];
      process.env.NODE_ENV !== "production" && Er(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    Dt = null, Jt = 0;
  }
}
const Vn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function mi(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = process.env.NODE_ENV !== "production" ? (n) => Er(e, n) : he;
  try {
    for (nt = 0; nt < De.length; nt++) {
      const n = De[nt];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), sn(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; nt < De.length; nt++) {
      const n = De[nt];
      n && (n.flags &= -2);
    }
    nt = -1, De.length = 0, hi(e), Xn = null, (De.length || Zt.length) && mi(e);
  }
}
function Er(e, t) {
  const n = e.get(t) || 0;
  if (n > vc) {
    const o = t.i, r = o && Yi(o.type);
    return Rn(
      `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let it = !1;
const zn = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (An().__VUE_HMR_RUNTIME__ = {
  createRecord: Vo(gi),
  rerender: Vo(Nc),
  reload: Vo(bc)
});
const Bt = /* @__PURE__ */ new Map();
function Ec(e) {
  const t = e.type.__hmrId;
  let n = Bt.get(t);
  n || (gi(t, e.type), n = Bt.get(t)), n.instances.add(e);
}
function yc(e) {
  Bt.get(e.type.__hmrId).instances.delete(e);
}
function gi(e, t) {
  return Bt.has(e) ? !1 : (Bt.set(e, {
    initialDef: Zn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Zn(e) {
  return Ji(e) ? e.__vccOpts : e;
}
function Nc(e, t) {
  const n = Bt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Zn(o.type).render = t), o.renderCache = [], it = !0, o.job.flags & 8 || o.update(), it = !1;
  }));
}
function bc(e, t) {
  const n = Bt.get(e);
  if (!n) return;
  t = Zn(t), Fr(n.initialDef, t);
  const o = [...n.instances];
  for (let r = 0; r < o.length; r++) {
    const s = o[r], i = Zn(s.type);
    let l = zn.get(i);
    l || (i !== n.initialDef && Fr(i, t), zn.set(i, l = /* @__PURE__ */ new Set())), l.add(s), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (l.add(s), s.ceReload(t.styles), l.delete(s)) : s.parent ? mo(() => {
      s.job.flags & 8 || (it = !0, s.parent.update(), it = !1, l.delete(s));
    }) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), s.root.ce && s !== s.root && s.root.ce._removeChildStyle(i);
  }
  pi(() => {
    zn.clear();
  });
}
function Fr(e, t) {
  fe(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Vo(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Ue, mn = [], zo = !1;
function Tn(e, ...t) {
  Ue ? Ue.emit(e, ...t) : zo || mn.push({ event: e, args: t });
}
function yr(e, t) {
  var n, o;
  Ue = e, Ue ? (Ue.enabled = !0, mn.forEach(({ event: r, args: s }) => Ue.emit(r, ...s)), mn = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    yr(s, t);
  }), setTimeout(() => {
    Ue || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, zo = !0, mn = []);
  }, 3e3)) : (zo = !0, mn = []);
}
function Oc(e, t) {
  Tn("app:init", e, t, {
    Fragment: Ve,
    Text: In,
    Comment: Le,
    Static: Gn
  });
}
function wc(e) {
  Tn("app:unmount", e);
}
const Dc = /* @__PURE__ */ Nr(
  "component:added"
  /* COMPONENT_ADDED */
), vi = /* @__PURE__ */ Nr(
  "component:updated"
  /* COMPONENT_UPDATED */
), Vc = /* @__PURE__ */ Nr(
  "component:removed"
  /* COMPONENT_REMOVED */
), xc = (e) => {
  Ue && typeof Ue.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Ue.cleanupBuffer(e) && Vc(e);
};
// @__NO_SIDE_EFFECTS__
function Nr(e) {
  return (t) => {
    Tn(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Sc = /* @__PURE__ */ _i(
  "perf:start"
  /* PERFORMANCE_START */
), Cc = /* @__PURE__ */ _i(
  "perf:end"
  /* PERFORMANCE_END */
);
function _i(e) {
  return (t, n, o) => {
    Tn(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Ac(e, t, n) {
  Tn(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let ye = null, Ei = null;
function eo(e) {
  const t = ye;
  return ye = e, Ei = e && e.type.__scopeId || null, t;
}
function ve(e, t = ye, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && so(-1);
    const s = eo(t);
    let i;
    try {
      i = e(...r);
    } finally {
      eo(s), o._d && so(1);
    }
    return process.env.NODE_ENV !== "production" && vi(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function yi(e) {
  Nl(e) && V("Do not use built-in directive ids as custom directive id: " + e);
}
function Mt(e, t, n, o) {
  const r = e.dirs, s = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const l = r[i];
    s && (l.oldValue = s[i].value);
    let a = l.dir[o];
    a && (qe(), lt(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Ye());
  }
}
const Rc = Symbol("_vte"), Tc = (e) => e.__isTeleport, Ic = Symbol("_leaveCb");
function br(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, br(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Ni(e, t) {
  return H(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    fe({ name: e.name }, t, { setup: e })
  ) : e;
}
function bi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const zr = /* @__PURE__ */ new WeakSet(), to = /* @__PURE__ */ new WeakMap();
function yn(e, t, n, o, r = !1) {
  if (j(e)) {
    e.forEach(
      (b, L) => yn(
        b,
        t && (j(t) ? t[L] : t),
        n,
        o,
        r
      )
    );
    return;
  }
  if (en(o) && !r) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && yn(e, t, n, o.component.subTree);
    return;
  }
  const s = o.shapeFlag & 4 ? Ar(o.component) : o.el, i = r ? null : s, { i: l, r: a } = e;
  if (process.env.NODE_ENV !== "production" && !l) {
    V(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const h = t && t.r, f = l.refs === ee ? l.refs = {} : l.refs, c = l.setupState, p = U(c), m = c === ee ? $s : (b) => process.env.NODE_ENV !== "production" && (J(p, b) && !ue(p[b]) && V(
    `Template ref "${b}" used on a non-ref value. It will not work in the production build.`
  ), zr.has(p[b])) ? !1 : J(p, b), w = (b) => process.env.NODE_ENV === "production" || !zr.has(b);
  if (h != null && h !== a) {
    if (Ur(t), ce(h))
      f[h] = null, m(h) && (c[h] = null);
    else if (ue(h)) {
      w(h) && (h.value = null);
      const b = t;
      b.k && (f[b.k] = null);
    }
  }
  if (H(a))
    sn(a, l, 12, [i, f]);
  else {
    const b = ce(a), L = ue(a);
    if (b || L) {
      const $ = () => {
        if (e.f) {
          const A = b ? m(a) ? c[a] : f[a] : w(a) || !e.k ? a.value : f[e.k];
          if (r)
            j(A) && lr(A, s);
          else if (j(A))
            A.includes(s) || A.push(s);
          else if (b)
            f[a] = [s], m(a) && (c[a] = f[a]);
          else {
            const T = [s];
            w(a) && (a.value = T), e.k && (f[e.k] = T);
          }
        } else b ? (f[a] = i, m(a) && (c[a] = i)) : L ? (w(a) && (a.value = i), e.k && (f[e.k] = i)) : process.env.NODE_ENV !== "production" && V("Invalid template ref type:", a, `(${typeof a})`);
      };
      if (i) {
        const A = () => {
          $(), to.delete(e);
        };
        A.id = -1, to.set(e, A), Te(A, n);
      } else
        Ur(e), $();
    } else process.env.NODE_ENV !== "production" && V("Invalid template ref type:", a, `(${typeof a})`);
  }
}
function Ur(e) {
  const t = to.get(e);
  t && (t.flags |= 8, to.delete(e));
}
An().requestIdleCallback;
An().cancelIdleCallback;
const en = (e) => !!e.type.__asyncLoader, Or = (e) => e.type.__isKeepAlive;
function Pc(e, t) {
  Oi(e, "a", t);
}
function Mc(e, t) {
  Oi(e, "da", t);
}
function Oi(e, t, n = Ee) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (go(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      Or(r.parent.vnode) && $c(o, t, n, r), r = r.parent;
  }
}
function $c(e, t, n, o) {
  const r = go(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  wi(() => {
    lr(o[t], r);
  }, n);
}
function go(e, t, n = Ee, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      qe();
      const l = Pn(n), a = lt(t, n, e, i);
      return l(), Ye(), a;
    });
    return o ? r.unshift(s) : r.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const r = kt(_r[e].replace(/ hook$/, ""));
    V(
      `${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Et = (e) => (t, n = Ee) => {
  (!Sn || e === "sp") && go(e, (...o) => t(...o), n);
}, kc = Et("bm"), jc = Et("m"), Lc = Et(
  "bu"
), Hc = Et("u"), Fc = Et(
  "bum"
), wi = Et("um"), zc = Et(
  "sp"
), Uc = Et("rtg"), Bc = Et("rtc");
function Gc(e, t = Ee) {
  go("ec", e, t);
}
const Wc = Symbol.for("v-ndc");
function xo(e, t, n = {}, o, r) {
  if (ye.ce || ye.parent && en(ye.parent) && ye.parent.ce) {
    const h = Object.keys(n).length > 0;
    return t !== "default" && (n.name = t), He(), ts(
      Ve,
      null,
      [oe("slot", n, o)],
      h ? -2 : 64
    );
  }
  let s = e[t];
  process.env.NODE_ENV !== "production" && s && s.length > 1 && (V(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), s = () => []), s && s._c && (s._d = !1), He();
  const i = s && Di(s(n)), l = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  i && i.key, a = ts(
    Ve,
    {
      key: (l && !_t(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!i && o ? "_fb" : "")
    },
    i || [],
    i && e._ === 1 ? 64 : -2
  );
  return s && s._c && (s._d = !0), a;
}
function Di(e) {
  return e.some((t) => Gt(t) ? !(t.type === Le || t.type === Ve && !Di(t.children)) : !0) ? e : null;
}
const Uo = (e) => e ? Ki(e) ? Ar(e) : Uo(e.parent) : null, Ut = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ fe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? rt(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? rt(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? rt(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? rt(e.refs) : e.refs,
    $parent: (e) => Uo(e.parent),
    $root: (e) => Uo(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Si(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      mo(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = fi.bind(e.proxy)),
    $watch: (e) => Da.bind(e)
  })
), wr = (e) => e === "_" || e === "$", So = (e, t) => e !== ee && !e.__isScriptSetup && J(e, t), Vi = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: r, props: s, accessCache: i, type: l, appContext: a } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let h;
    if (t[0] !== "$") {
      const m = i[t];
      if (m !== void 0)
        switch (m) {
          case 1:
            return o[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (So(o, t))
          return i[t] = 1, o[t];
        if (r !== ee && J(r, t))
          return i[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (h = e.propsOptions[0]) && J(h, t)
        )
          return i[t] = 3, s[t];
        if (n !== ee && J(n, t))
          return i[t] = 4, n[t];
        Bo && (i[t] = 0);
      }
    }
    const f = Ut[t];
    let c, p;
    if (f)
      return t === "$attrs" ? (pe(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && ro()) : process.env.NODE_ENV !== "production" && t === "$slots" && pe(e, "get", t), f(e);
    if (
      // css module (injected by vue-loader)
      (c = l.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== ee && J(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      p = a.config.globalProperties, J(p, t)
    )
      return p[t];
    process.env.NODE_ENV !== "production" && ye && (!ce(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== ee && wr(t[0]) && J(r, t) ? V(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === ye && V(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: s } = e;
    return So(r, t) ? (r[t] = n, !0) : process.env.NODE_ENV !== "production" && r.__isScriptSetup && J(r, t) ? (V(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== ee && J(o, t) ? (o[t] = n, !0) : J(e.props, t) ? (process.env.NODE_ENV !== "production" && V(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && V(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: s, type: i }
  }, l) {
    let a, h;
    return !!(n[l] || e !== ee && l[0] !== "$" && J(e, l) || So(t, l) || (a = s[0]) && J(a, l) || J(o, l) || J(Ut, l) || J(r.config.globalProperties, l) || (h = i.__cssModules) && h[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : J(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (Vi.ownKeys = (e) => (V(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Kc(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Ut).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Ut[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: he
    });
  }), t;
}
function qc(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: he
    });
  });
}
function Yc(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(U(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (wr(o[0])) {
        V(
          `setup() return property ${JSON.stringify(
            o
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: he
      });
    }
  });
}
function Br(e) {
  return j(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Jc() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? V(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Bo = !0;
function Qc(e) {
  const t = Si(e), n = e.proxy, o = e.ctx;
  Bo = !1, t.beforeCreate && Gr(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: s,
    methods: i,
    watch: l,
    provide: a,
    inject: h,
    // lifecycle
    created: f,
    beforeMount: c,
    mounted: p,
    beforeUpdate: m,
    updated: w,
    activated: b,
    deactivated: L,
    beforeDestroy: $,
    beforeUnmount: A,
    destroyed: T,
    unmounted: ne,
    render: I,
    renderTracked: re,
    renderTriggered: ie,
    errorCaptured: me,
    serverPrefetch: ge,
    // public API
    expose: Me,
    inheritAttrs: Fe,
    // assets
    components: xe,
    directives: Je,
    filters: Mn
  } = t, $e = process.env.NODE_ENV !== "production" ? Jc() : null;
  if (process.env.NODE_ENV !== "production") {
    const [G] = e.propsOptions;
    if (G)
      for (const W in G)
        $e("Props", W);
  }
  if (h && Xc(h, o, $e), i)
    for (const G in i) {
      const W = i[G];
      H(W) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, G, {
        value: W.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[G] = W.bind(n), process.env.NODE_ENV !== "production" && $e("Methods", G)) : process.env.NODE_ENV !== "production" && V(
        `Method "${G}" has type "${typeof W}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (r) {
    process.env.NODE_ENV !== "production" && !H(r) && V(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const G = r.call(n, n);
    if (process.env.NODE_ENV !== "production" && cr(G) && V(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !te(G))
      process.env.NODE_ENV !== "production" && V("data() should return an object.");
    else if (e.data = po(G), process.env.NODE_ENV !== "production")
      for (const W in G)
        $e("Data", W), wr(W[0]) || Object.defineProperty(o, W, {
          configurable: !0,
          enumerable: !0,
          get: () => G[W],
          set: he
        });
  }
  if (Bo = !0, s)
    for (const G in s) {
      const W = s[G], ke = H(W) ? W.bind(n, n) : H(W.get) ? W.get.bind(n, n) : he;
      process.env.NODE_ENV !== "production" && ke === he && V(`Computed property "${G}" has no getter.`);
      const Pt = !H(W) && H(W.set) ? W.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        V(
          `Write operation failed: computed property "${G}" is readonly.`
        );
      } : he, yt = Be({
        get: ke,
        set: Pt
      });
      Object.defineProperty(o, G, {
        enumerable: !0,
        configurable: !0,
        get: () => yt.value,
        set: (Qe) => yt.value = Qe
      }), process.env.NODE_ENV !== "production" && $e("Computed", G);
    }
  if (l)
    for (const G in l)
      xi(l[G], o, n, G);
  if (a) {
    const G = H(a) ? a.call(n) : a;
    Reflect.ownKeys(G).forEach((W) => {
      Un(W, G[W]);
    });
  }
  f && Gr(f, e, "c");
  function _e(G, W) {
    j(W) ? W.forEach((ke) => G(ke.bind(n))) : W && G(W.bind(n));
  }
  if (_e(kc, c), _e(jc, p), _e(Lc, m), _e(Hc, w), _e(Pc, b), _e(Mc, L), _e(Gc, me), _e(Bc, re), _e(Uc, ie), _e(Fc, A), _e(wi, ne), _e(zc, ge), j(Me))
    if (Me.length) {
      const G = e.exposed || (e.exposed = {});
      Me.forEach((W) => {
        Object.defineProperty(G, W, {
          get: () => n[W],
          set: (ke) => n[W] = ke,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  I && e.render === he && (e.render = I), Fe != null && (e.inheritAttrs = Fe), xe && (e.components = xe), Je && (e.directives = Je), ge && bi(e);
}
function Xc(e, t, n = he) {
  j(e) && (e = Go(e));
  for (const o in e) {
    const r = e[o];
    let s;
    te(r) ? "default" in r ? s = ht(
      r.from || o,
      r.default,
      !0
    ) : s = ht(r.from || o) : s = ht(r), ue(s) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (i) => s.value = i
    }) : t[o] = s, process.env.NODE_ENV !== "production" && n("Inject", o);
  }
}
function Gr(e, t, n) {
  lt(
    j(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function xi(e, t, n, o) {
  let r = o.includes(".") ? Li(n, o) : () => n[o];
  if (ce(e)) {
    const s = t[e];
    H(s) ? Nn(r, s) : process.env.NODE_ENV !== "production" && V(`Invalid watch handler specified by key "${e}"`, s);
  } else if (H(e))
    Nn(r, e.bind(n));
  else if (te(e))
    if (j(e))
      e.forEach((s) => xi(s, t, n, o));
    else {
      const s = H(e.handler) ? e.handler.bind(n) : t[e.handler];
      H(s) ? Nn(r, s, e) : process.env.NODE_ENV !== "production" && V(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else process.env.NODE_ENV !== "production" && V(`Invalid watch option: "${o}"`, e);
}
function Si(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: r,
    optionsCache: s,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = s.get(t);
  let a;
  return l ? a = l : !r.length && !n && !o ? a = t : (a = {}, r.length && r.forEach(
    (h) => no(a, h, i, !0)
  ), no(a, t, i)), te(t) && s.set(t, a), a;
}
function no(e, t, n, o = !1) {
  const { mixins: r, extends: s } = t;
  s && no(e, s, n, !0), r && r.forEach(
    (i) => no(e, i, n, !0)
  );
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && V(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = Zc[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const Zc = {
  data: Wr,
  props: Kr,
  emits: Kr,
  // objects
  methods: gn,
  computed: gn,
  // lifecycle
  beforeCreate: be,
  created: be,
  beforeMount: be,
  mounted: be,
  beforeUpdate: be,
  updated: be,
  beforeDestroy: be,
  beforeUnmount: be,
  destroyed: be,
  unmounted: be,
  activated: be,
  deactivated: be,
  errorCaptured: be,
  serverPrefetch: be,
  // assets
  components: gn,
  directives: gn,
  // watch
  watch: ta,
  // provide / inject
  provide: Wr,
  inject: ea
};
function Wr(e, t) {
  return t ? e ? function() {
    return fe(
      H(e) ? e.call(this, this) : e,
      H(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ea(e, t) {
  return gn(Go(e), Go(t));
}
function Go(e) {
  if (j(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function be(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function gn(e, t) {
  return e ? fe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Kr(e, t) {
  return e ? j(e) && j(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : fe(
    /* @__PURE__ */ Object.create(null),
    Br(e),
    Br(t ?? {})
  ) : t;
}
function ta(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = fe(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = be(e[o], t[o]);
  return n;
}
function Ci() {
  return {
    app: null,
    config: {
      isNativeTag: $s,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let na = 0;
function oa(e, t) {
  return function(o, r = null) {
    H(o) || (o = fe({}, o)), r != null && !te(r) && (process.env.NODE_ENV !== "production" && V("root props passed to app.mount() must be an object."), r = null);
    const s = Ci(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const h = s.app = {
      _uid: na++,
      _component: o,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: ss,
      get config() {
        return s.config;
      },
      set config(f) {
        process.env.NODE_ENV !== "production" && V(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(f, ...c) {
        return i.has(f) ? process.env.NODE_ENV !== "production" && V("Plugin has already been applied to target app.") : f && H(f.install) ? (i.add(f), f.install(h, ...c)) : H(f) ? (i.add(f), f(h, ...c)) : process.env.NODE_ENV !== "production" && V(
          'A plugin must either be a function or an object with an "install" function.'
        ), h;
      },
      mixin(f) {
        return s.mixins.includes(f) ? process.env.NODE_ENV !== "production" && V(
          "Mixin has already been applied to target app" + (f.name ? `: ${f.name}` : "")
        ) : s.mixins.push(f), h;
      },
      component(f, c) {
        return process.env.NODE_ENV !== "production" && Jo(f, s.config), c ? (process.env.NODE_ENV !== "production" && s.components[f] && V(`Component "${f}" has already been registered in target app.`), s.components[f] = c, h) : s.components[f];
      },
      directive(f, c) {
        return process.env.NODE_ENV !== "production" && yi(f), c ? (process.env.NODE_ENV !== "production" && s.directives[f] && V(`Directive "${f}" has already been registered in target app.`), s.directives[f] = c, h) : s.directives[f];
      },
      mount(f, c, p) {
        if (a)
          process.env.NODE_ENV !== "production" && V(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && f.__vue_app__ && V(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const m = h._ceVNode || oe(o, r);
          return m.appContext = s, p === !0 ? p = "svg" : p === !1 && (p = void 0), process.env.NODE_ENV !== "production" && (s.reload = () => {
            const w = Rt(m);
            w.el = null, e(w, f, p);
          }), e(m, f, p), a = !0, h._container = f, f.__vue_app__ = h, process.env.NODE_ENV !== "production" && (h._instance = m.component, Oc(h, ss)), Ar(m.component);
        }
      },
      onUnmount(f) {
        process.env.NODE_ENV !== "production" && typeof f != "function" && V(
          `Expected function as first argument to app.onUnmount(), but got ${typeof f}`
        ), l.push(f);
      },
      unmount() {
        a ? (lt(
          l,
          h._instance,
          16
        ), e(null, h._container), process.env.NODE_ENV !== "production" && (h._instance = null, wc(h)), delete h._container.__vue_app__) : process.env.NODE_ENV !== "production" && V("Cannot unmount an app that is not mounted.");
      },
      provide(f, c) {
        return process.env.NODE_ENV !== "production" && f in s.provides && (J(s.provides, f) ? V(
          `App already provides property with key "${String(f)}". It will be overwritten with the new value.`
        ) : V(
          `App already provides property with key "${String(f)}" inherited from its parent element. It will be overwritten with the new value.`
        )), s.provides[f] = c, h;
      },
      runWithContext(f) {
        const c = tn;
        tn = h;
        try {
          return f();
        } finally {
          tn = c;
        }
      }
    };
    return h;
  };
}
let tn = null;
function Un(e, t) {
  if (!Ee)
    process.env.NODE_ENV !== "production" && V("provide() can only be used inside setup().");
  else {
    let n = Ee.provides;
    const o = Ee.parent && Ee.parent.provides;
    o === n && (n = Ee.provides = Object.create(o)), n[e] = t;
  }
}
function ht(e, t, n = !1) {
  const o = _o();
  if (o || tn) {
    let r = tn ? tn._context.provides : o ? o.parent == null || o.ce ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && H(t) ? t.call(o && o.proxy) : t;
    process.env.NODE_ENV !== "production" && V(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && V("inject() can only be used inside setup() or functional components.");
}
const Ai = {}, Ri = () => Object.create(Ai), Ti = (e) => Object.getPrototypeOf(e) === Ai;
function ra(e, t, n, o = !1) {
  const r = {}, s = Ri();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Ii(e, t, r, s);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  process.env.NODE_ENV !== "production" && Mi(t || {}, r, e), n ? e.props = o ? r : ii(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s;
}
function sa(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function ia(e, t, n, o) {
  const {
    props: r,
    attrs: s,
    vnode: { patchFlag: i }
  } = e, l = U(r), [a] = e.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && sa(e)) && (o || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const f = e.vnode.dynamicProps;
      for (let c = 0; c < f.length; c++) {
        let p = f[c];
        if (vo(e.emitsOptions, p))
          continue;
        const m = t[p];
        if (a)
          if (J(s, p))
            m !== s[p] && (s[p] = m, h = !0);
          else {
            const w = Ge(p);
            r[w] = Wo(
              a,
              l,
              w,
              m,
              e,
              !1
            );
          }
        else
          m !== s[p] && (s[p] = m, h = !0);
      }
    }
  } else {
    Ii(e, t, r, s) && (h = !0);
    let f;
    for (const c in l)
      (!t || // for camelCase
      !J(t, c) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = At(c)) === c || !J(t, f))) && (a ? n && // for camelCase
      (n[c] !== void 0 || // for kebab-case
      n[f] !== void 0) && (r[c] = Wo(
        a,
        l,
        c,
        void 0,
        e,
        !0
      )) : delete r[c]);
    if (s !== l)
      for (const c in s)
        (!t || !J(t, c)) && (delete s[c], h = !0);
  }
  h && ot(e.attrs, "set", ""), process.env.NODE_ENV !== "production" && Mi(t || {}, r, e);
}
function Ii(e, t, n, o) {
  const [r, s] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let a in t) {
      if (vn(a))
        continue;
      const h = t[a];
      let f;
      r && J(r, f = Ge(a)) ? !s || !s.includes(f) ? n[f] = h : (l || (l = {}))[f] = h : vo(e.emitsOptions, a) || (!(a in o) || h !== o[a]) && (o[a] = h, i = !0);
    }
  if (s) {
    const a = U(n), h = l || ee;
    for (let f = 0; f < s.length; f++) {
      const c = s[f];
      n[c] = Wo(
        r,
        a,
        c,
        h[c],
        e,
        !J(h, c)
      );
    }
  }
  return i;
}
function Wo(e, t, n, o, r, s) {
  const i = e[n];
  if (i != null) {
    const l = J(i, "default");
    if (l && o === void 0) {
      const a = i.default;
      if (i.type !== Function && !i.skipFactory && H(a)) {
        const { propsDefaults: h } = r;
        if (n in h)
          o = h[n];
        else {
          const f = Pn(r);
          o = h[n] = a.call(
            null,
            t
          ), f();
        }
      } else
        o = a;
      r.ce && r.ce._setProp(n, o);
    }
    i[
      0
      /* shouldCast */
    ] && (s && !l ? o = !1 : i[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === At(n)) && (o = !0));
  }
  return o;
}
const la = /* @__PURE__ */ new WeakMap();
function Pi(e, t, n = !1) {
  const o = n ? la : t.propsCache, r = o.get(e);
  if (r)
    return r;
  const s = e.props, i = {}, l = [];
  let a = !1;
  if (!H(e)) {
    const f = (c) => {
      a = !0;
      const [p, m] = Pi(c, t, !0);
      fe(i, p), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!s && !a)
    return te(e) && o.set(e, Qt), Qt;
  if (j(s))
    for (let f = 0; f < s.length; f++) {
      process.env.NODE_ENV !== "production" && !ce(s[f]) && V("props must be strings when using array syntax.", s[f]);
      const c = Ge(s[f]);
      qr(c) && (i[c] = ee);
    }
  else if (s) {
    process.env.NODE_ENV !== "production" && !te(s) && V("invalid props options", s);
    for (const f in s) {
      const c = Ge(f);
      if (qr(c)) {
        const p = s[f], m = i[c] = j(p) || H(p) ? { type: p } : fe({}, p), w = m.type;
        let b = !1, L = !0;
        if (j(w))
          for (let $ = 0; $ < w.length; ++$) {
            const A = w[$], T = H(A) && A.name;
            if (T === "Boolean") {
              b = !0;
              break;
            } else T === "String" && (L = !1);
          }
        else
          b = H(w) && w.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = b, m[
          1
          /* shouldCastTrue */
        ] = L, (b || J(m, "default")) && l.push(c);
      }
    }
  }
  const h = [i, l];
  return te(e) && o.set(e, h), h;
}
function qr(e) {
  return e[0] !== "$" && !vn(e) ? !0 : (process.env.NODE_ENV !== "production" && V(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function ca(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Mi(e, t, n) {
  const o = U(t), r = n.propsOptions[0], s = Object.keys(e).map((i) => Ge(i));
  for (const i in r) {
    let l = r[i];
    l != null && aa(
      i,
      o[i],
      l,
      process.env.NODE_ENV !== "production" ? rt(o) : o,
      !s.includes(i)
    );
  }
}
function aa(e, t, n, o, r) {
  const { type: s, required: i, validator: l, skipCheck: a } = n;
  if (i && r) {
    V('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (s != null && s !== !0 && !a) {
      let h = !1;
      const f = j(s) ? s : [s], c = [];
      for (let p = 0; p < f.length && !h; p++) {
        const { valid: m, expectedType: w } = fa(t, f[p]);
        c.push(w || ""), h = m;
      }
      if (!h) {
        V(da(e, t, c));
        return;
      }
    }
    l && !l(t, o) && V('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const ua = /* @__PURE__ */ vt(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function fa(e, t) {
  let n;
  const o = ca(t);
  if (o === "null")
    n = e === null;
  else if (ua(o)) {
    const r = typeof e;
    n = r === o.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else o === "Object" ? n = te(e) : o === "Array" ? n = j(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function da(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(uo).join(" | ")}`;
  const r = n[0], s = ar(t), i = Yr(t, r), l = Yr(t, s);
  return n.length === 1 && Jr(r) && !pa(r, s) && (o += ` with value ${i}`), o += `, got ${s} `, Jr(s) && (o += `with value ${l}.`), o;
}
function Yr(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Jr(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function pa(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Dr = (e) => e === "_" || e === "_ctx" || e === "$stable", Vr = (e) => j(e) ? e.map(ze) : [ze(e)], ha = (e, t, n) => {
  if (t._n)
    return t;
  const o = ve((...r) => (process.env.NODE_ENV !== "production" && Ee && !(n === null && ye) && !(n && n.root !== Ee.root) && V(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Vr(t(...r))), n);
  return o._c = !1, o;
}, $i = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (Dr(r)) continue;
    const s = e[r];
    if (H(s))
      t[r] = ha(r, s, o);
    else if (s != null) {
      process.env.NODE_ENV !== "production" && V(
        `Non-function value encountered for slot "${r}". Prefer function slots for better performance.`
      );
      const i = Vr(s);
      t[r] = () => i;
    }
  }
}, ki = (e, t) => {
  process.env.NODE_ENV !== "production" && !Or(e.vnode) && V(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Vr(t);
  e.slots.default = () => n;
}, Ko = (e, t, n) => {
  for (const o in t)
    (n || !Dr(o)) && (e[o] = t[o]);
}, ma = (e, t, n) => {
  const o = e.slots = Ri();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Ko(o, t, n), n && Yn(o, "_", r, !0)) : $i(t, o);
  } else t && ki(e, t);
}, ga = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let s = !0, i = ee;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? process.env.NODE_ENV !== "production" && it ? (Ko(r, t, n), ot(e, "set", "$slots")) : n && l === 1 ? s = !1 : Ko(r, t, n) : (s = !t.$stable, $i(t, r)), i = t;
  } else t && (ki(e, t), i = { default: 1 });
  if (s)
    for (const l in r)
      !Dr(l) && i[l] == null && delete r[l];
};
let un, dt;
function Kt(e, t) {
  e.appContext.config.performance && oo() && dt.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && Sc(e, t, oo() ? dt.now() : Date.now());
}
function qt(e, t) {
  if (e.appContext.config.performance && oo()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end", r = `<${Eo(e, e.type)}> ${t}`;
    dt.mark(o), dt.measure(r, n, o), dt.clearMeasures(r), dt.clearMarks(n), dt.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && Cc(e, t, oo() ? dt.now() : Date.now());
}
function oo() {
  return un !== void 0 || (typeof window < "u" && window.performance ? (un = !0, dt = window.performance) : un = !1), un;
}
function va() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Te = Ia;
function _a(e) {
  return Ea(e);
}
function Ea(e, t) {
  va();
  const n = An();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && yr(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: r,
    patchProp: s,
    createElement: i,
    createText: l,
    createComment: a,
    setText: h,
    setElementText: f,
    parentNode: c,
    nextSibling: p,
    setScopeId: m = he,
    insertStaticContent: w
  } = e, b = (u, d, g, E = null, _ = null, y = null, x = void 0, D = null, O = process.env.NODE_ENV !== "production" && it ? !1 : !!d.dynamicChildren) => {
    if (u === d)
      return;
    u && !fn(u, d) && (E = R(u), je(u, _, y, !0), u = null), d.patchFlag === -2 && (O = !1, d.dynamicChildren = null);
    const { type: N, ref: k, shapeFlag: S } = d;
    switch (N) {
      case In:
        L(u, d, g, E);
        break;
      case Le:
        $(u, d, g, E);
        break;
      case Gn:
        u == null ? A(d, g, E, x) : process.env.NODE_ENV !== "production" && T(u, d, g, x);
        break;
      case Ve:
        Je(
          u,
          d,
          g,
          E,
          _,
          y,
          x,
          D,
          O
        );
        break;
      default:
        S & 1 ? re(
          u,
          d,
          g,
          E,
          _,
          y,
          x,
          D,
          O
        ) : S & 6 ? Mn(
          u,
          d,
          g,
          E,
          _,
          y,
          x,
          D,
          O
        ) : S & 64 || S & 128 ? N.process(
          u,
          d,
          g,
          E,
          _,
          y,
          x,
          D,
          O,
          F
        ) : process.env.NODE_ENV !== "production" && V("Invalid VNode type:", N, `(${typeof N})`);
    }
    k != null && _ ? yn(k, u && u.ref, y, d || u, !d) : k == null && u && u.ref != null && yn(u.ref, null, y, u, !0);
  }, L = (u, d, g, E) => {
    if (u == null)
      o(
        d.el = l(d.children),
        g,
        E
      );
    else {
      const _ = d.el = u.el;
      d.children !== u.children && h(_, d.children);
    }
  }, $ = (u, d, g, E) => {
    u == null ? o(
      d.el = a(d.children || ""),
      g,
      E
    ) : d.el = u.el;
  }, A = (u, d, g, E) => {
    [u.el, u.anchor] = w(
      u.children,
      d,
      g,
      E,
      u.el,
      u.anchor
    );
  }, T = (u, d, g, E) => {
    if (d.children !== u.children) {
      const _ = p(u.anchor);
      I(u), [d.el, d.anchor] = w(
        d.children,
        g,
        _,
        E
      );
    } else
      d.el = u.el, d.anchor = u.anchor;
  }, ne = ({ el: u, anchor: d }, g, E) => {
    let _;
    for (; u && u !== d; )
      _ = p(u), o(u, g, E), u = _;
    o(d, g, E);
  }, I = ({ el: u, anchor: d }) => {
    let g;
    for (; u && u !== d; )
      g = p(u), r(u), u = g;
    r(d);
  }, re = (u, d, g, E, _, y, x, D, O) => {
    d.type === "svg" ? x = "svg" : d.type === "math" && (x = "mathml"), u == null ? ie(
      d,
      g,
      E,
      _,
      y,
      x,
      D,
      O
    ) : Me(
      u,
      d,
      _,
      y,
      x,
      D,
      O
    );
  }, ie = (u, d, g, E, _, y, x, D) => {
    let O, N;
    const { props: k, shapeFlag: S, transition: M, dirs: z } = u;
    if (O = u.el = i(
      u.type,
      y,
      k && k.is,
      k
    ), S & 8 ? f(O, u.children) : S & 16 && ge(
      u.children,
      O,
      null,
      E,
      _,
      Co(u, y),
      x,
      D
    ), z && Mt(u, null, E, "created"), me(O, u, u.scopeId, x, E), k) {
      for (const se in k)
        se !== "value" && !vn(se) && s(O, se, null, k[se], y, E);
      "value" in k && s(O, "value", null, k.value, y), (N = k.onVnodeBeforeMount) && tt(N, E, u);
    }
    process.env.NODE_ENV !== "production" && (Yn(O, "__vnode", u, !0), Yn(O, "__vueParentComponent", E, !0)), z && Mt(u, null, E, "beforeMount");
    const Y = ya(_, M);
    Y && M.beforeEnter(O), o(O, d, g), ((N = k && k.onVnodeMounted) || Y || z) && Te(() => {
      N && tt(N, E, u), Y && M.enter(O), z && Mt(u, null, E, "mounted");
    }, _);
  }, me = (u, d, g, E, _) => {
    if (g && m(u, g), E)
      for (let y = 0; y < E.length; y++)
        m(u, E[y]);
    if (_) {
      let y = _.subTree;
      if (process.env.NODE_ENV !== "production" && y.patchFlag > 0 && y.patchFlag & 2048 && (y = Sr(y.children) || y), d === y || zi(y.type) && (y.ssContent === d || y.ssFallback === d)) {
        const x = _.vnode;
        me(
          u,
          x,
          x.scopeId,
          x.slotScopeIds,
          _.parent
        );
      }
    }
  }, ge = (u, d, g, E, _, y, x, D, O = 0) => {
    for (let N = O; N < u.length; N++) {
      const k = u[N] = D ? Vt(u[N]) : ze(u[N]);
      b(
        null,
        k,
        d,
        g,
        E,
        _,
        y,
        x,
        D
      );
    }
  }, Me = (u, d, g, E, _, y, x) => {
    const D = d.el = u.el;
    process.env.NODE_ENV !== "production" && (D.__vnode = d);
    let { patchFlag: O, dynamicChildren: N, dirs: k } = d;
    O |= u.patchFlag & 16;
    const S = u.props || ee, M = d.props || ee;
    let z;
    if (g && $t(g, !1), (z = M.onVnodeBeforeUpdate) && tt(z, g, d, u), k && Mt(d, u, g, "beforeUpdate"), g && $t(g, !0), process.env.NODE_ENV !== "production" && it && (O = 0, x = !1, N = null), (S.innerHTML && M.innerHTML == null || S.textContent && M.textContent == null) && f(D, ""), N ? (Fe(
      u.dynamicChildren,
      N,
      D,
      g,
      E,
      Co(d, _),
      y
    ), process.env.NODE_ENV !== "production" && Bn(u, d)) : x || ke(
      u,
      d,
      D,
      null,
      g,
      E,
      Co(d, _),
      y,
      !1
    ), O > 0) {
      if (O & 16)
        xe(D, S, M, g, _);
      else if (O & 2 && S.class !== M.class && s(D, "class", null, M.class, _), O & 4 && s(D, "style", S.style, M.style, _), O & 8) {
        const Y = d.dynamicProps;
        for (let se = 0; se < Y.length; se++) {
          const Z = Y[se], Se = S[Z], Ce = M[Z];
          (Ce !== Se || Z === "value") && s(D, Z, Se, Ce, _, g);
        }
      }
      O & 1 && u.children !== d.children && f(D, d.children);
    } else !x && N == null && xe(D, S, M, g, _);
    ((z = M.onVnodeUpdated) || k) && Te(() => {
      z && tt(z, g, d, u), k && Mt(d, u, g, "updated");
    }, E);
  }, Fe = (u, d, g, E, _, y, x) => {
    for (let D = 0; D < d.length; D++) {
      const O = u[D], N = d[D], k = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        O.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (O.type === Ve || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !fn(O, N) || // - In the case of a component, it could contain anything.
        O.shapeFlag & 198) ? c(O.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      b(
        O,
        N,
        k,
        null,
        E,
        _,
        y,
        x,
        !0
      );
    }
  }, xe = (u, d, g, E, _) => {
    if (d !== g) {
      if (d !== ee)
        for (const y in d)
          !vn(y) && !(y in g) && s(
            u,
            y,
            d[y],
            null,
            _,
            E
          );
      for (const y in g) {
        if (vn(y)) continue;
        const x = g[y], D = d[y];
        x !== D && y !== "value" && s(u, y, D, x, _, E);
      }
      "value" in g && s(u, "value", d.value, g.value, _);
    }
  }, Je = (u, d, g, E, _, y, x, D, O) => {
    const N = d.el = u ? u.el : l(""), k = d.anchor = u ? u.anchor : l("");
    let { patchFlag: S, dynamicChildren: M, slotScopeIds: z } = d;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (it || S & 2048) && (S = 0, O = !1, M = null), z && (D = D ? D.concat(z) : z), u == null ? (o(N, g, E), o(k, g, E), ge(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      g,
      k,
      _,
      y,
      x,
      D,
      O
    )) : S > 0 && S & 64 && M && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren ? (Fe(
      u.dynamicChildren,
      M,
      g,
      _,
      y,
      x,
      D
    ), process.env.NODE_ENV !== "production" ? Bn(u, d) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (d.key != null || _ && d === _.subTree) && Bn(
        u,
        d,
        !0
        /* shallow */
      )
    )) : ke(
      u,
      d,
      g,
      k,
      _,
      y,
      x,
      D,
      O
    );
  }, Mn = (u, d, g, E, _, y, x, D, O) => {
    d.slotScopeIds = D, u == null ? d.shapeFlag & 512 ? _.ctx.activate(
      d,
      g,
      E,
      x,
      O
    ) : $e(
      d,
      g,
      E,
      _,
      y,
      x,
      O
    ) : _e(u, d, O);
  }, $e = (u, d, g, E, _, y, x) => {
    const D = u.component = Ha(
      u,
      E,
      _
    );
    if (process.env.NODE_ENV !== "production" && D.type.__hmrId && Ec(D), process.env.NODE_ENV !== "production" && (Hn(u), Kt(D, "mount")), Or(u) && (D.ctx.renderer = F), process.env.NODE_ENV !== "production" && Kt(D, "init"), za(D, !1, x), process.env.NODE_ENV !== "production" && qt(D, "init"), process.env.NODE_ENV !== "production" && it && (u.el = null), D.asyncDep) {
      if (_ && _.registerDep(D, G, x), !u.el) {
        const O = D.subTree = oe(Le);
        $(null, O, d, g), u.placeholder = O.el;
      }
    } else
      G(
        D,
        u,
        d,
        g,
        _,
        y,
        x
      );
    process.env.NODE_ENV !== "production" && (Fn(), qt(D, "mount"));
  }, _e = (u, d, g) => {
    const E = d.component = u.component;
    if (Ra(u, d, g))
      if (E.asyncDep && !E.asyncResolved) {
        process.env.NODE_ENV !== "production" && Hn(d), W(E, d, g), process.env.NODE_ENV !== "production" && Fn();
        return;
      } else
        E.next = d, E.update();
    else
      d.el = u.el, E.vnode = d;
  }, G = (u, d, g, E, _, y, x) => {
    const D = () => {
      if (u.isMounted) {
        let { next: S, bu: M, u: z, parent: Y, vnode: se } = u;
        {
          const Ze = ji(u);
          if (Ze) {
            S && (S.el = se.el, W(u, S, x)), Ze.asyncDep.then(() => {
              u.isUnmounted || D();
            });
            return;
          }
        }
        let Z = S, Se;
        process.env.NODE_ENV !== "production" && Hn(S || u.vnode), $t(u, !1), S ? (S.el = se.el, W(u, S, x)) : S = se, M && cn(M), (Se = S.props && S.props.onVnodeBeforeUpdate) && tt(Se, Y, S, se), $t(u, !0), process.env.NODE_ENV !== "production" && Kt(u, "render");
        const Ce = Xr(u);
        process.env.NODE_ENV !== "production" && qt(u, "render");
        const Xe = u.subTree;
        u.subTree = Ce, process.env.NODE_ENV !== "production" && Kt(u, "patch"), b(
          Xe,
          Ce,
          // parent may have changed if it's in a teleport
          c(Xe.el),
          // anchor may have changed if it's in a fragment
          R(Xe),
          u,
          _,
          y
        ), process.env.NODE_ENV !== "production" && qt(u, "patch"), S.el = Ce.el, Z === null && Ta(u, Ce.el), z && Te(z, _), (Se = S.props && S.props.onVnodeUpdated) && Te(
          () => tt(Se, Y, S, se),
          _
        ), process.env.NODE_ENV !== "production" && vi(u), process.env.NODE_ENV !== "production" && Fn();
      } else {
        let S;
        const { el: M, props: z } = d, { bm: Y, m: se, parent: Z, root: Se, type: Ce } = u, Xe = en(d);
        $t(u, !1), Y && cn(Y), !Xe && (S = z && z.onVnodeBeforeMount) && tt(S, Z, d), $t(u, !0);
        {
          Se.ce && // @ts-expect-error _def is private
          Se.ce._def.shadowRoot !== !1 && Se.ce._injectChildStyle(Ce), process.env.NODE_ENV !== "production" && Kt(u, "render");
          const Ze = u.subTree = Xr(u);
          process.env.NODE_ENV !== "production" && qt(u, "render"), process.env.NODE_ENV !== "production" && Kt(u, "patch"), b(
            null,
            Ze,
            g,
            E,
            u,
            _,
            y
          ), process.env.NODE_ENV !== "production" && qt(u, "patch"), d.el = Ze.el;
        }
        if (se && Te(se, _), !Xe && (S = z && z.onVnodeMounted)) {
          const Ze = d;
          Te(
            () => tt(S, Z, Ze),
            _
          );
        }
        (d.shapeFlag & 256 || Z && en(Z.vnode) && Z.vnode.shapeFlag & 256) && u.a && Te(u.a, _), u.isMounted = !0, process.env.NODE_ENV !== "production" && Dc(u), d = g = E = null;
      }
    };
    u.scope.on();
    const O = u.effect = new Bs(D);
    u.scope.off();
    const N = u.update = O.run.bind(O), k = u.job = O.runIfDirty.bind(O);
    k.i = u, k.id = u.uid, O.scheduler = () => mo(k), $t(u, !0), process.env.NODE_ENV !== "production" && (O.onTrack = u.rtc ? (S) => cn(u.rtc, S) : void 0, O.onTrigger = u.rtg ? (S) => cn(u.rtg, S) : void 0), N();
  }, W = (u, d, g) => {
    d.component = u;
    const E = u.vnode.props;
    u.vnode = d, u.next = null, ia(u, d.props, E, g), ga(u, d.children, g), qe(), Hr(u), Ye();
  }, ke = (u, d, g, E, _, y, x, D, O = !1) => {
    const N = u && u.children, k = u ? u.shapeFlag : 0, S = d.children, { patchFlag: M, shapeFlag: z } = d;
    if (M > 0) {
      if (M & 128) {
        yt(
          N,
          S,
          g,
          E,
          _,
          y,
          x,
          D,
          O
        );
        return;
      } else if (M & 256) {
        Pt(
          N,
          S,
          g,
          E,
          _,
          y,
          x,
          D,
          O
        );
        return;
      }
    }
    z & 8 ? (k & 16 && v(N, _, y), S !== N && f(g, S)) : k & 16 ? z & 16 ? yt(
      N,
      S,
      g,
      E,
      _,
      y,
      x,
      D,
      O
    ) : v(N, _, y, !0) : (k & 8 && f(g, ""), z & 16 && ge(
      S,
      g,
      E,
      _,
      y,
      x,
      D,
      O
    ));
  }, Pt = (u, d, g, E, _, y, x, D, O) => {
    u = u || Qt, d = d || Qt;
    const N = u.length, k = d.length, S = Math.min(N, k);
    let M;
    for (M = 0; M < S; M++) {
      const z = d[M] = O ? Vt(d[M]) : ze(d[M]);
      b(
        u[M],
        z,
        g,
        null,
        _,
        y,
        x,
        D,
        O
      );
    }
    N > k ? v(
      u,
      _,
      y,
      !0,
      !1,
      S
    ) : ge(
      d,
      g,
      E,
      _,
      y,
      x,
      D,
      O,
      S
    );
  }, yt = (u, d, g, E, _, y, x, D, O) => {
    let N = 0;
    const k = d.length;
    let S = u.length - 1, M = k - 1;
    for (; N <= S && N <= M; ) {
      const z = u[N], Y = d[N] = O ? Vt(d[N]) : ze(d[N]);
      if (fn(z, Y))
        b(
          z,
          Y,
          g,
          null,
          _,
          y,
          x,
          D,
          O
        );
      else
        break;
      N++;
    }
    for (; N <= S && N <= M; ) {
      const z = u[S], Y = d[M] = O ? Vt(d[M]) : ze(d[M]);
      if (fn(z, Y))
        b(
          z,
          Y,
          g,
          null,
          _,
          y,
          x,
          D,
          O
        );
      else
        break;
      S--, M--;
    }
    if (N > S) {
      if (N <= M) {
        const z = M + 1, Y = z < k ? d[z].el : E;
        for (; N <= M; )
          b(
            null,
            d[N] = O ? Vt(d[N]) : ze(d[N]),
            g,
            Y,
            _,
            y,
            x,
            D,
            O
          ), N++;
      }
    } else if (N > M)
      for (; N <= S; )
        je(u[N], _, y, !0), N++;
    else {
      const z = N, Y = N, se = /* @__PURE__ */ new Map();
      for (N = Y; N <= M; N++) {
        const Ne = d[N] = O ? Vt(d[N]) : ze(d[N]);
        Ne.key != null && (process.env.NODE_ENV !== "production" && se.has(Ne.key) && V(
          "Duplicate keys found during update:",
          JSON.stringify(Ne.key),
          "Make sure keys are unique."
        ), se.set(Ne.key, N));
      }
      let Z, Se = 0;
      const Ce = M - Y + 1;
      let Xe = !1, Ze = 0;
      const ln = new Array(Ce);
      for (N = 0; N < Ce; N++) ln[N] = 0;
      for (N = z; N <= S; N++) {
        const Ne = u[N];
        if (Se >= Ce) {
          je(Ne, _, y, !0);
          continue;
        }
        let et;
        if (Ne.key != null)
          et = se.get(Ne.key);
        else
          for (Z = Y; Z <= M; Z++)
            if (ln[Z - Y] === 0 && fn(Ne, d[Z])) {
              et = Z;
              break;
            }
        et === void 0 ? je(Ne, _, y, !0) : (ln[et - Y] = N + 1, et >= Ze ? Ze = et : Xe = !0, b(
          Ne,
          d[et],
          g,
          null,
          _,
          y,
          x,
          D,
          O
        ), Se++);
      }
      const Ir = Xe ? Na(ln) : Qt;
      for (Z = Ir.length - 1, N = Ce - 1; N >= 0; N--) {
        const Ne = Y + N, et = d[Ne], Pr = d[Ne + 1], Mr = Ne + 1 < k ? (
          // #13559, fallback to el placeholder for unresolved async component
          Pr.el || Pr.placeholder
        ) : E;
        ln[N] === 0 ? b(
          null,
          et,
          g,
          Mr,
          _,
          y,
          x,
          D,
          O
        ) : Xe && (Z < 0 || N !== Ir[Z] ? Qe(et, g, Mr, 2) : Z--);
      }
    }
  }, Qe = (u, d, g, E, _ = null) => {
    const { el: y, type: x, transition: D, children: O, shapeFlag: N } = u;
    if (N & 6) {
      Qe(u.component.subTree, d, g, E);
      return;
    }
    if (N & 128) {
      u.suspense.move(d, g, E);
      return;
    }
    if (N & 64) {
      x.move(u, d, g, F);
      return;
    }
    if (x === Ve) {
      o(y, d, g);
      for (let S = 0; S < O.length; S++)
        Qe(O[S], d, g, E);
      o(u.anchor, d, g);
      return;
    }
    if (x === Gn) {
      ne(u, d, g);
      return;
    }
    if (E !== 2 && N & 1 && D)
      if (E === 0)
        D.beforeEnter(y), o(y, d, g), Te(() => D.enter(y), _);
      else {
        const { leave: S, delayLeave: M, afterLeave: z } = D, Y = () => {
          u.ctx.isUnmounted ? r(y) : o(y, d, g);
        }, se = () => {
          y._isLeaving && y[Ic](
            !0
            /* cancelled */
          ), S(y, () => {
            Y(), z && z();
          });
        };
        M ? M(y, Y, se) : se();
      }
    else
      o(y, d, g);
  }, je = (u, d, g, E = !1, _ = !1) => {
    const {
      type: y,
      props: x,
      ref: D,
      children: O,
      dynamicChildren: N,
      shapeFlag: k,
      patchFlag: S,
      dirs: M,
      cacheIndex: z
    } = u;
    if (S === -2 && (_ = !1), D != null && (qe(), yn(D, null, g, u, !0), Ye()), z != null && (d.renderCache[z] = void 0), k & 256) {
      d.ctx.deactivate(u);
      return;
    }
    const Y = k & 1 && M, se = !en(u);
    let Z;
    if (se && (Z = x && x.onVnodeBeforeUnmount) && tt(Z, d, u), k & 6)
      Ot(u.component, g, E);
    else {
      if (k & 128) {
        u.suspense.unmount(g, E);
        return;
      }
      Y && Mt(u, null, d, "beforeUnmount"), k & 64 ? u.type.remove(
        u,
        d,
        g,
        F,
        E
      ) : N && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !N.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (y !== Ve || S > 0 && S & 64) ? v(
        N,
        d,
        g,
        !1,
        !0
      ) : (y === Ve && S & 384 || !_ && k & 16) && v(O, d, g), E && Nt(u);
    }
    (se && (Z = x && x.onVnodeUnmounted) || Y) && Te(() => {
      Z && tt(Z, d, u), Y && Mt(u, null, d, "unmounted");
    }, g);
  }, Nt = (u) => {
    const { type: d, el: g, anchor: E, transition: _ } = u;
    if (d === Ve) {
      process.env.NODE_ENV !== "production" && u.patchFlag > 0 && u.patchFlag & 2048 && _ && !_.persisted ? u.children.forEach((x) => {
        x.type === Le ? r(x.el) : Nt(x);
      }) : bt(g, E);
      return;
    }
    if (d === Gn) {
      I(u);
      return;
    }
    const y = () => {
      r(g), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (u.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: x, delayLeave: D } = _, O = () => x(g, y);
      D ? D(u.el, y, O) : O();
    } else
      y();
  }, bt = (u, d) => {
    let g;
    for (; u !== d; )
      g = p(u), r(u), u = g;
    r(d);
  }, Ot = (u, d, g) => {
    process.env.NODE_ENV !== "production" && u.type.__hmrId && yc(u);
    const { bum: E, scope: _, job: y, subTree: x, um: D, m: O, a: N } = u;
    Qr(O), Qr(N), E && cn(E), _.stop(), y && (y.flags |= 8, je(x, u, d, g)), D && Te(D, d), Te(() => {
      u.isUnmounted = !0;
    }, d), process.env.NODE_ENV !== "production" && xc(u);
  }, v = (u, d, g, E = !1, _ = !1, y = 0) => {
    for (let x = y; x < u.length; x++)
      je(u[x], d, g, E, _);
  }, R = (u) => {
    if (u.shapeFlag & 6)
      return R(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const d = p(u.anchor || u.el), g = d && d[Rc];
    return g ? p(g) : d;
  };
  let C = !1;
  const P = (u, d, g) => {
    u == null ? d._vnode && je(d._vnode, null, null, !0) : b(
      d._vnode || null,
      u,
      d,
      null,
      null,
      null,
      g
    ), d._vnode = u, C || (C = !0, Hr(), hi(), C = !1);
  }, F = {
    p: b,
    um: je,
    m: Qe,
    r: Nt,
    mt: $e,
    mc: ge,
    pc: ke,
    pbc: Fe,
    n: R,
    o: e
  };
  return {
    render: P,
    hydrate: void 0,
    createApp: oa(P)
  };
}
function Co({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function $t({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function ya(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Bn(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (j(o) && j(r))
    for (let s = 0; s < o.length; s++) {
      const i = o[s];
      let l = r[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[s] = Vt(r[s]), l.el = i.el), !n && l.patchFlag !== -2 && Bn(i, l)), l.type === In && // avoid cached text nodes retaining detached dom nodes
      l.patchFlag !== -1 && (l.el = i.el), l.type === Le && !l.el && (l.el = i.el), process.env.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
    }
}
function Na(e) {
  const t = e.slice(), n = [0];
  let o, r, s, i, l;
  const a = e.length;
  for (o = 0; o < a; o++) {
    const h = e[o];
    if (h !== 0) {
      if (r = n[n.length - 1], e[r] < h) {
        t[o] = r, n.push(o);
        continue;
      }
      for (s = 0, i = n.length - 1; s < i; )
        l = s + i >> 1, e[n[l]] < h ? s = l + 1 : i = l;
      h < e[n[s]] && (s > 0 && (t[o] = n[s - 1]), n[s] = o);
    }
  }
  for (s = n.length, i = n[s - 1]; s-- > 0; )
    n[s] = i, i = t[i];
  return n;
}
function ji(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : ji(t);
}
function Qr(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const ba = Symbol.for("v-scx"), Oa = () => {
  {
    const e = ht(ba);
    return e || process.env.NODE_ENV !== "production" && V(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function wa(e, t) {
  return xr(e, null, t);
}
function Nn(e, t, n) {
  return process.env.NODE_ENV !== "production" && !H(t) && V(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), xr(e, t, n);
}
function xr(e, t, n = ee) {
  const { immediate: o, deep: r, flush: s, once: i } = n;
  process.env.NODE_ENV !== "production" && !t && (o !== void 0 && V(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && V(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && V(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = fe({}, n);
  process.env.NODE_ENV !== "production" && (l.onWarn = V);
  const a = t && o || !t && s !== "post";
  let h;
  if (Sn) {
    if (s === "sync") {
      const m = Oa();
      h = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!a) {
      const m = () => {
      };
      return m.stop = he, m.resume = he, m.pause = he, m;
    }
  }
  const f = Ee;
  l.call = (m, w, b) => lt(m, f, w, b);
  let c = !1;
  s === "post" ? l.scheduler = (m) => {
    Te(m, f && f.suspense);
  } : s !== "sync" && (c = !0, l.scheduler = (m, w) => {
    w ? m() : mo(m);
  }), l.augmentJob = (m) => {
    t && (m.flags |= 4), c && (m.flags |= 2, f && (m.id = f.uid, m.i = f));
  };
  const p = fc(e, t, l);
  return Sn && (h ? h.push(p) : a && p()), p;
}
function Da(e, t, n) {
  const o = this.proxy, r = ce(e) ? e.includes(".") ? Li(o, e) : () => o[e] : e.bind(o, o);
  let s;
  H(t) ? s = t : (s = t.handler, n = t);
  const i = Pn(this), l = xr(r, s.bind(o), n);
  return i(), l;
}
function Li(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
const Va = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ge(t)}Modifiers`] || e[`${At(t)}Modifiers`];
function xa(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || ee;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: f,
      propsOptions: [c]
    } = e;
    if (f)
      if (!(t in f))
        (!c || !(kt(Ge(t)) in c)) && V(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${kt(Ge(t))}" prop.`
        );
      else {
        const p = f[t];
        H(p) && (p(...n) || V(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let r = n;
  const s = t.startsWith("update:"), i = s && Va(o, t.slice(7));
  if (i && (i.trim && (r = n.map((f) => ce(f) ? f.trim() : f)), i.number && (r = n.map(wl))), process.env.NODE_ENV !== "production" && Ac(e, t, r), process.env.NODE_ENV !== "production") {
    const f = t.toLowerCase();
    f !== t && o[kt(f)] && V(
      `Event "${f}" is emitted in component ${Eo(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${At(
        t
      )}" instead of "${t}".`
    );
  }
  let l, a = o[l = kt(t)] || // also try camelCase event handler (#2249)
  o[l = kt(Ge(t))];
  !a && s && (a = o[l = kt(At(t))]), a && lt(
    a,
    e,
    6,
    r
  );
  const h = o[l + "Once"];
  if (h) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, lt(
      h,
      e,
      6,
      r
    );
  }
}
const Sa = /* @__PURE__ */ new WeakMap();
function Hi(e, t, n = !1) {
  const o = n ? Sa : t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let i = {}, l = !1;
  if (!H(e)) {
    const a = (h) => {
      const f = Hi(h, t, !0);
      f && (l = !0, fe(i, f));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !s && !l ? (te(e) && o.set(e, null), null) : (j(s) ? s.forEach((a) => i[a] = null) : fe(i, s), te(e) && o.set(e, i), i);
}
function vo(e, t) {
  return !e || !Cn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), J(e, t[0].toLowerCase() + t.slice(1)) || J(e, At(t)) || J(e, t));
}
let qo = !1;
function ro() {
  qo = !0;
}
function Xr(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: r,
    propsOptions: [s],
    slots: i,
    attrs: l,
    emit: a,
    render: h,
    renderCache: f,
    props: c,
    data: p,
    setupState: m,
    ctx: w,
    inheritAttrs: b
  } = e, L = eo(e);
  let $, A;
  process.env.NODE_ENV !== "production" && (qo = !1);
  try {
    if (n.shapeFlag & 4) {
      const I = r || o, re = process.env.NODE_ENV !== "production" && m.__isScriptSetup ? new Proxy(I, {
        get(ie, me, ge) {
          return V(
            `Property '${String(
              me
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(ie, me, ge);
        }
      }) : I;
      $ = ze(
        h.call(
          re,
          I,
          f,
          process.env.NODE_ENV !== "production" ? rt(c) : c,
          m,
          p,
          w
        )
      ), A = l;
    } else {
      const I = t;
      process.env.NODE_ENV !== "production" && l === c && ro(), $ = ze(
        I.length > 1 ? I(
          process.env.NODE_ENV !== "production" ? rt(c) : c,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return ro(), rt(l);
            },
            slots: i,
            emit: a
          } : { attrs: l, slots: i, emit: a }
        ) : I(
          process.env.NODE_ENV !== "production" ? rt(c) : c,
          null
        )
      ), A = t.props ? l : Ca(l);
    }
  } catch (I) {
    bn.length = 0, Rn(I, e, 1), $ = oe(Le);
  }
  let T = $, ne;
  if (process.env.NODE_ENV !== "production" && $.patchFlag > 0 && $.patchFlag & 2048 && ([T, ne] = Fi($)), A && b !== !1) {
    const I = Object.keys(A), { shapeFlag: re } = T;
    if (I.length) {
      if (re & 7)
        s && I.some(qn) && (A = Aa(
          A,
          s
        )), T = Rt(T, A, !1, !0);
      else if (process.env.NODE_ENV !== "production" && !qo && T.type !== Le) {
        const ie = Object.keys(l), me = [], ge = [];
        for (let Me = 0, Fe = ie.length; Me < Fe; Me++) {
          const xe = ie[Me];
          Cn(xe) ? qn(xe) || me.push(xe[2].toLowerCase() + xe.slice(3)) : ge.push(xe);
        }
        ge.length && V(
          `Extraneous non-props attributes (${ge.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), me.length && V(
          `Extraneous non-emits event listeners (${me.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !Zr(T) && V(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), T = Rt(T, null, !1, !0), T.dirs = T.dirs ? T.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !Zr(T) && V(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), br(T, n.transition)), process.env.NODE_ENV !== "production" && ne ? ne(T) : $ = T, eo(L), $;
}
const Fi = (e) => {
  const t = e.children, n = e.dynamicChildren, o = Sr(t, !1);
  if (o) {
    if (process.env.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return Fi(o);
  } else return [e, void 0];
  const r = t.indexOf(o), s = n ? n.indexOf(o) : -1, i = (l) => {
    t[r] = l, n && (s > -1 ? n[s] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [ze(o), i];
};
function Sr(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    if (Gt(r)) {
      if (r.type !== Le || r.children === "v-if") {
        if (n)
          return;
        if (n = r, process.env.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Sr(n.children);
      }
    } else
      return;
  }
  return n;
}
const Ca = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Cn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Aa = (e, t) => {
  const n = {};
  for (const o in e)
    (!qn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Zr = (e) => e.shapeFlag & 7 || e.type === Le;
function Ra(e, t, n) {
  const { props: o, children: r, component: s } = e, { props: i, children: l, patchFlag: a } = t, h = s.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (r || l) && it || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return o ? es(o, i, h) : !!i;
    if (a & 8) {
      const f = t.dynamicProps;
      for (let c = 0; c < f.length; c++) {
        const p = f[c];
        if (i[p] !== o[p] && !vo(h, p))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : o === i ? !1 : o ? i ? es(o, i, h) : !0 : !!i;
  return !1;
}
function es(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < o.length; r++) {
    const s = o[r];
    if (t[s] !== e[s] && !vo(n, s))
      return !0;
  }
  return !1;
}
function Ta({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const zi = (e) => e.__isSuspense;
function Ia(e, t) {
  t && t.pendingBranch ? j(e) ? t.effects.push(...e) : t.effects.push(e) : pi(e);
}
const Ve = Symbol.for("v-fgt"), In = Symbol.for("v-txt"), Le = Symbol.for("v-cmt"), Gn = Symbol.for("v-stc"), bn = [];
let Ie = null;
function He(e = !1) {
  bn.push(Ie = e ? null : []);
}
function Pa() {
  bn.pop(), Ie = bn[bn.length - 1] || null;
}
let xn = 1;
function so(e, t = !1) {
  xn += e, e < 0 && Ie && t && (Ie.hasOnce = !0);
}
function Ui(e) {
  return e.dynamicChildren = xn > 0 ? Ie || Qt : null, Pa(), xn > 0 && Ie && Ie.push(e), e;
}
function ct(e, t, n, o, r, s) {
  return Ui(
    K(
      e,
      t,
      n,
      o,
      r,
      s,
      !0
    )
  );
}
function ts(e, t, n, o, r) {
  return Ui(
    oe(
      e,
      t,
      n,
      o,
      r,
      !0
    )
  );
}
function Gt(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function fn(e, t) {
  if (process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = zn.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const Ma = (...e) => Gi(
  ...e
), Bi = ({ key: e }) => e ?? null, Wn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ce(e) || ue(e) || H(e) ? { i: ye, r: e, k: t, f: !!n } : e : null);
function K(e, t = null, n = null, o = 0, r = null, s = e === Ve ? 0 : 1, i = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Bi(t),
    ref: t && Wn(t),
    scopeId: Ei,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: ye
  };
  return l ? (Cr(a, n), s & 128 && e.normalize(a)) : n && (a.shapeFlag |= ce(n) ? 8 : 16), process.env.NODE_ENV !== "production" && a.key !== a.key && V("VNode created with invalid key (NaN). VNode type:", a.type), xn > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Ie && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Ie.push(a), a;
}
const oe = process.env.NODE_ENV !== "production" ? Ma : Gi;
function Gi(e, t = null, n = null, o = 0, r = null, s = !1) {
  if ((!e || e === Wc) && (process.env.NODE_ENV !== "production" && !e && V(`Invalid vnode type when creating vnode: ${e}.`), e = Le), Gt(e)) {
    const l = Rt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Cr(l, n), xn > 0 && !s && Ie && (l.shapeFlag & 6 ? Ie[Ie.indexOf(e)] = l : Ie.push(l)), l.patchFlag = -2, l;
  }
  if (Ji(e) && (e = e.__vccOpts), t) {
    t = $a(t);
    let { class: l, style: a } = t;
    l && !ce(l) && (t.class = dr(l)), te(a) && (Jn(a) && !j(a) && (a = fe({}, a)), t.style = fr(a));
  }
  const i = ce(e) ? 1 : zi(e) ? 128 : Tc(e) ? 64 : te(e) ? 4 : H(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && Jn(e) && (e = U(e), V(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), K(
    e,
    t,
    n,
    o,
    r,
    i,
    s,
    !0
  );
}
function $a(e) {
  return e ? Jn(e) || Ti(e) ? fe({}, e) : e : null;
}
function Rt(e, t, n = !1, o = !1) {
  const { props: r, ref: s, patchFlag: i, children: l, transition: a } = e, h = t ? ka(r || {}, t) : r, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && Bi(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? j(s) ? s.concat(Wn(t)) : [s, Wn(t)] : Wn(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && i === -1 && j(l) ? l.map(Wi) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ve ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Rt(e.ssContent),
    ssFallback: e.ssFallback && Rt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && o && br(
    f,
    a.clone(f)
  ), f;
}
function Wi(e) {
  const t = Rt(e);
  return j(e.children) && (t.children = e.children.map(Wi)), t;
}
function q(e = " ", t = 0) {
  return oe(In, null, e, t);
}
function ze(e) {
  return e == null || typeof e == "boolean" ? oe(Le) : j(e) ? oe(
    Ve,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Gt(e) ? Vt(e) : oe(In, null, String(e));
}
function Vt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Rt(e);
}
function Cr(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (j(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Cr(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !Ti(t) ? t._ctx = ye : r === 3 && ye && (ye.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else H(t) ? (t = { default: t, _ctx: ye }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [q(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function ka(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = dr([t.class, o.class]));
      else if (r === "style")
        t.style = fr([t.style, o.style]);
      else if (Cn(r)) {
        const s = t[r], i = o[r];
        i && s !== i && !(j(s) && s.includes(i)) && (t[r] = s ? [].concat(s, i) : i);
      } else r !== "" && (t[r] = o[r]);
  }
  return t;
}
function tt(e, t, n, o = null) {
  lt(e, t, 7, [
    n,
    o
  ]);
}
const ja = Ci();
let La = 0;
function Ha(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || ja, s = {
    uid: La++,
    vnode: e,
    type: o,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new kl(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Pi(o, r),
    emitsOptions: Hi(o, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ee,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: ee,
    data: ee,
    props: ee,
    attrs: ee,
    slots: ee,
    refs: ee,
    setupState: ee,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return process.env.NODE_ENV !== "production" ? s.ctx = Kc(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = xa.bind(null, s), e.ce && e.ce(s), s;
}
let Ee = null;
const _o = () => Ee || ye;
let io, Yo;
{
  const e = An(), t = (n, o) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(o), (s) => {
      r.length > 1 ? r.forEach((i) => i(s)) : r[0](s);
    };
  };
  io = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ee = n
  ), Yo = t(
    "__VUE_SSR_SETTERS__",
    (n) => Sn = n
  );
}
const Pn = (e) => {
  const t = Ee;
  return io(e), e.scope.on(), () => {
    e.scope.off(), io(t);
  };
}, ns = () => {
  Ee && Ee.scope.off(), io(null);
}, Fa = /* @__PURE__ */ vt("slot,component");
function Jo(e, { isNativeTag: t }) {
  (Fa(e) || t(e)) && V(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Ki(e) {
  return e.vnode.shapeFlag & 4;
}
let Sn = !1;
function za(e, t = !1, n = !1) {
  t && Yo(t);
  const { props: o, children: r } = e.vnode, s = Ki(e);
  ra(e, o, s, t), ma(e, r, n || t);
  const i = s ? Ua(e, t) : void 0;
  return t && Yo(!1), i;
}
function Ua(e, t) {
  var n;
  const o = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (o.name && Jo(o.name, e.appContext.config), o.components) {
      const s = Object.keys(o.components);
      for (let i = 0; i < s.length; i++)
        Jo(s[i], e.appContext.config);
    }
    if (o.directives) {
      const s = Object.keys(o.directives);
      for (let i = 0; i < s.length; i++)
        yi(s[i]);
    }
    o.compilerOptions && Ba() && V(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Vi), process.env.NODE_ENV !== "production" && qc(e);
  const { setup: r } = o;
  if (r) {
    qe();
    const s = e.setupContext = r.length > 1 ? Wa(e) : null, i = Pn(e), l = sn(
      r,
      e,
      0,
      [
        process.env.NODE_ENV !== "production" ? rt(e.props) : e.props,
        s
      ]
    ), a = cr(l);
    if (Ye(), i(), (a || e.sp) && !en(e) && bi(e), a) {
      if (l.then(ns, ns), t)
        return l.then((h) => {
          os(e, h, t);
        }).catch((h) => {
          Rn(h, e, 0);
        });
      if (e.asyncDep = l, process.env.NODE_ENV !== "production" && !e.suspense) {
        const h = (n = o.name) != null ? n : "Anonymous";
        V(
          `Component <${h}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      os(e, l, t);
  } else
    qi(e, t);
}
function os(e, t, n) {
  H(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : te(t) ? (process.env.NODE_ENV !== "production" && Gt(t) && V(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = ci(t), process.env.NODE_ENV !== "production" && Yc(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && V(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), qi(e, n);
}
const Ba = () => !0;
function qi(e, t, n) {
  const o = e.type;
  e.render || (e.render = o.render || he);
  {
    const r = Pn(e);
    qe();
    try {
      Qc(e);
    } finally {
      Ye(), r();
    }
  }
  process.env.NODE_ENV !== "production" && !o.render && e.render === he && !t && (o.template ? V(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : V("Component is missing template or render function: ", o));
}
const rs = process.env.NODE_ENV !== "production" ? {
  get(e, t) {
    return ro(), pe(e, "get", ""), e[t];
  },
  set() {
    return V("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return V("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return pe(e, "get", ""), e[t];
  }
};
function Ga(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return pe(e, "get", "$slots"), t[n];
    }
  });
}
function Wa(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && V("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (j(n) ? o = "array" : ue(n) && (o = "ref")), o !== "object" && V(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let n, o;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, rs));
      },
      get slots() {
        return o || (o = Ga(e));
      },
      get emit() {
        return (r, ...s) => e.emit(r, ...s);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, rs),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function Ar(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ci(oc(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Ut)
        return Ut[n](e);
    },
    has(t, n) {
      return n in t || n in Ut;
    }
  })) : e.proxy;
}
const Ka = /(?:^|[-_])\w/g, qa = (e) => e.replace(Ka, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Yi(e, t = !0) {
  return H(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Eo(e, t, n = !1) {
  let o = Yi(t);
  if (!o && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (o = r[1]);
  }
  if (!o && e && e.parent) {
    const r = (s) => {
      for (const i in s)
        if (s[i] === t)
          return i;
    };
    o = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return o ? qa(o) : n ? "App" : "Anonymous";
}
function Ji(e) {
  return H(e) && "__vccOpts" in e;
}
const Be = (e, t) => {
  const n = ac(e, t, Sn);
  if (process.env.NODE_ENV !== "production") {
    const o = _o();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Qi(e, t, n) {
  try {
    so(-1);
    const o = arguments.length;
    return o === 2 ? te(t) && !j(t) ? Gt(t) ? oe(e, null, [t]) : oe(e, t) : oe(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && Gt(n) && (n = [n]), oe(e, t, n));
  } finally {
    so(1);
  }
}
function Ya() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, r = {
    __vue_custom_formatter: !0,
    header(c) {
      if (!te(c))
        return null;
      if (c.__isVue)
        return ["div", e, "VueInstance"];
      if (ue(c)) {
        qe();
        const p = c.value;
        return Ye(), [
          "div",
          {},
          ["span", e, f(c)],
          "<",
          l(p),
          ">"
        ];
      } else {
        if (Xt(c))
          return [
            "div",
            {},
            ["span", e, Re(c) ? "ShallowReactive" : "Reactive"],
            "<",
            l(c),
            `>${gt(c) ? " (readonly)" : ""}`
          ];
        if (gt(c))
          return [
            "div",
            {},
            ["span", e, Re(c) ? "ShallowReadonly" : "Readonly"],
            "<",
            l(c),
            ">"
          ];
      }
      return null;
    },
    hasBody(c) {
      return c && c.__isVue;
    },
    body(c) {
      if (c && c.__isVue)
        return [
          "div",
          {},
          ...s(c.$)
        ];
    }
  };
  function s(c) {
    const p = [];
    c.type.props && c.props && p.push(i("props", U(c.props))), c.setupState !== ee && p.push(i("setup", c.setupState)), c.data !== ee && p.push(i("data", U(c.data)));
    const m = a(c, "computed");
    m && p.push(i("computed", m));
    const w = a(c, "inject");
    return w && p.push(i("injected", w)), p.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: c }]
    ]), p;
  }
  function i(c, p) {
    return p = fe({}, p), Object.keys(p).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        c
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(p).map((m) => [
          "div",
          {},
          ["span", o, m + ": "],
          l(p[m], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(c, p = !0) {
    return typeof c == "number" ? ["span", t, c] : typeof c == "string" ? ["span", n, JSON.stringify(c)] : typeof c == "boolean" ? ["span", o, c] : te(c) ? ["object", { object: p ? U(c) : c }] : ["span", n, String(c)];
  }
  function a(c, p) {
    const m = c.type;
    if (H(m))
      return;
    const w = {};
    for (const b in c.ctx)
      h(m, b, p) && (w[b] = c.ctx[b]);
    return w;
  }
  function h(c, p, m) {
    const w = c[m];
    if (j(w) && w.includes(p) || te(w) && p in w || c.extends && h(c.extends, p, m) || c.mixins && c.mixins.some((b) => h(b, p, m)))
      return !0;
  }
  function f(c) {
    return Re(c) ? "ShallowRef" : c.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const ss = "3.5.22", mt = process.env.NODE_ENV !== "production" ? V : he;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Qo;
const is = typeof window < "u" && window.trustedTypes;
if (is)
  try {
    Qo = /* @__PURE__ */ is.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    process.env.NODE_ENV !== "production" && mt(`Error creating trusted types policy: ${e}`);
  }
const Xi = Qo ? (e) => Qo.createHTML(e) : (e) => e, Ja = "http://www.w3.org/2000/svg", Qa = "http://www.w3.org/1998/Math/MathML", ft = typeof document < "u" ? document : null, ls = ft && /* @__PURE__ */ ft.createElement("template"), Xa = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t === "svg" ? ft.createElementNS(Ja, e) : t === "mathml" ? ft.createElementNS(Qa, e) : n ? ft.createElement(e, { is: n }) : ft.createElement(e);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => ft.createTextNode(e),
  createComment: (e) => ft.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ft.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, r, s) {
    const i = n ? n.previousSibling : t.lastChild;
    if (r && (r === s || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === s || !(r = r.nextSibling)); )
        ;
    else {
      ls.innerHTML = Xi(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const l = ls.content;
      if (o === "svg" || o === "mathml") {
        const a = l.firstChild;
        for (; a.firstChild; )
          l.appendChild(a.firstChild);
        l.removeChild(a);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Za = Symbol("_vtc");
function eu(e, t, n) {
  const o = e[Za];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const cs = Symbol("_vod"), tu = Symbol("_vsh"), nu = Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), ou = /(?:^|;)\s*display\s*:/;
function ru(e, t, n) {
  const o = e.style, r = ce(n);
  let s = !1;
  if (n && !r) {
    if (t)
      if (ce(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && Kn(o, l, "");
        }
      else
        for (const i in t)
          n[i] == null && Kn(o, i, "");
    for (const i in n)
      i === "display" && (s = !0), Kn(o, i, n[i]);
  } else if (r) {
    if (t !== n) {
      const i = o[nu];
      i && (n += ";" + i), o.cssText = n, s = ou.test(n);
    }
  } else t && e.removeAttribute("style");
  cs in e && (e[cs] = s ? o.display : "", e[tu] && (o.display = "none"));
}
const su = /[^\\];\s*$/, as = /\s*!important$/;
function Kn(e, t, n) {
  if (j(n))
    n.forEach((o) => Kn(e, t, o));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && su.test(n) && mt(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = iu(e, t);
    as.test(n) ? e.setProperty(
      At(o),
      n.replace(as, ""),
      "important"
    ) : e[o] = n;
  }
}
const us = ["Webkit", "Moz", "ms"], Ao = {};
function iu(e, t) {
  const n = Ao[t];
  if (n)
    return n;
  let o = Ge(t);
  if (o !== "filter" && o in e)
    return Ao[t] = o;
  o = uo(o);
  for (let r = 0; r < us.length; r++) {
    const s = us[r] + o;
    if (s in e)
      return Ao[t] = s;
  }
  return t;
}
const fs = "http://www.w3.org/1999/xlink";
function ds(e, t, n, o, r, s = $l(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(fs, t.slice(6, t.length)) : e.setAttributeNS(fs, t, n) : n == null || s && !Hs(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : _t(n) ? String(n) : n
  );
}
function ps(e, t, n, o, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Xi(n) : n);
    return;
  }
  const s = e.tagName;
  if (t === "value" && s !== "PROGRESS" && // custom elements may use _value internally
  !s.includes("-")) {
    const l = s === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== a || !("_value" in e)) && (e.value = a), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = Hs(n) : n == null && l === "string" ? (n = "", i = !0) : l === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    process.env.NODE_ENV !== "production" && !i && mt(
      `Failed setting prop "${t}" on <${s.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  i && e.removeAttribute(r || t);
}
function lu(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function cu(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const hs = Symbol("_vei");
function au(e, t, n, o, r = null) {
  const s = e[hs] || (e[hs] = {}), i = s[t];
  if (o && i)
    i.value = process.env.NODE_ENV !== "production" ? gs(o, t) : o;
  else {
    const [l, a] = uu(t);
    if (o) {
      const h = s[t] = pu(
        process.env.NODE_ENV !== "production" ? gs(o, t) : o,
        r
      );
      lu(e, l, h, a);
    } else i && (cu(e, l, i, a), s[t] = void 0);
  }
}
const ms = /(?:Once|Passive|Capture)$/;
function uu(e) {
  let t;
  if (ms.test(e)) {
    t = {};
    let o;
    for (; o = e.match(ms); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : At(e.slice(2)), t];
}
let Ro = 0;
const fu = /* @__PURE__ */ Promise.resolve(), du = () => Ro || (fu.then(() => Ro = 0), Ro = Date.now());
function pu(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    lt(
      hu(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = du(), n;
}
function gs(e, t) {
  return H(e) || j(e) ? e : (mt(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), he);
}
function hu(e, t) {
  if (j(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (r) => !r._stopped && o && o(r)
    );
  } else
    return t;
}
const vs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, mu = (e, t, n, o, r, s) => {
  const i = r === "svg";
  t === "class" ? eu(e, o, i) : t === "style" ? ru(e, n, o) : Cn(t) ? qn(t) || au(e, t, n, o, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : gu(e, t, o, i)) ? (ps(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ds(e, t, o, i, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ce(o)) ? ps(e, Ge(t), o, s, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), ds(e, t, o, i));
};
function gu(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && vs(t) && H(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return vs(t) && ce(n) ? !1 : t in e;
}
const vu = /* @__PURE__ */ fe({ patchProp: mu }, Xa);
let _s;
function _u() {
  return _s || (_s = _a(vu));
}
const Eu = ((...e) => {
  const t = _u().createApp(...e);
  process.env.NODE_ENV !== "production" && (Nu(t), bu(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const r = Ou(o);
    if (!r) return;
    const s = t._component;
    !H(s) && !s.render && !s.template && (s.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const i = n(r, !1, yu(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), i;
  }, t;
});
function yu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Nu(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Tl(t) || Il(t) || Pl(t),
    writable: !1
  });
}
function bu(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        mt(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return mt(o), n;
      },
      set() {
        mt(o);
      }
    });
  }
}
function Ou(e) {
  if (ce(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && mt(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && mt(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
/**
* vue v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function wu() {
  Ya();
}
process.env.NODE_ENV !== "production" && wu();
const Du = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20261.76%20226.69'%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H-.005l130.877%20226.688L261.749.001z'%20fill='%2341b883'/%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H52.346l78.526%20136.01L209.398.001z'%20fill='%2334495e'/%3e%3c/svg%3e";
function Vu() {
  return Zi().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Zi() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const xu = typeof Proxy == "function", Su = "devtools-plugin:setup", Cu = "plugin:settings:set";
let Yt, Xo;
function Au() {
  var e;
  return Yt !== void 0 || (typeof window < "u" && window.performance ? (Yt = !0, Xo = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (Yt = !0, Xo = globalThis.perf_hooks.performance) : Yt = !1), Yt;
}
function Ru() {
  return Au() ? Xo.now() : Date.now();
}
class Tu {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const o = {};
    if (t.settings)
      for (const i in t.settings) {
        const l = t.settings[i];
        o[i] = l.defaultValue;
      }
    const r = `__vue-devtools-plugin-settings__${t.id}`;
    let s = Object.assign({}, o);
    try {
      const i = localStorage.getItem(r), l = JSON.parse(i);
      Object.assign(s, l);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return s;
      },
      setSettings(i) {
        try {
          localStorage.setItem(r, JSON.stringify(i));
        } catch {
        }
        s = i;
      },
      now() {
        return Ru();
      }
    }, n && n.on(Cu, (i, l) => {
      i === this.plugin.id && this.fallbacks.setSettings(l);
    }), this.proxiedOn = new Proxy({}, {
      get: (i, l) => this.target ? this.target.on[l] : (...a) => {
        this.onQueue.push({
          method: l,
          args: a
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (i, l) => this.target ? this.target[l] : l === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(l) ? (...a) => (this.targetQueue.push({
        method: l,
        args: a,
        resolve: () => {
        }
      }), this.fallbacks[l](...a)) : (...a) => new Promise((h) => {
        this.targetQueue.push({
          method: l,
          args: a,
          resolve: h
        });
      })
    });
  }
  async setRealTarget(t) {
    this.target = t;
    for (const n of this.onQueue)
      this.target.on[n.method](...n.args);
    for (const n of this.targetQueue)
      n.resolve(await this.target[n.method](...n.args));
  }
}
function Iu(e, t) {
  const n = e, o = Zi(), r = Vu(), s = xu && n.enableEarlyProxy;
  if (r && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !s))
    r.emit(Su, e, t);
  else {
    const i = s ? new Tu(n, r) : null;
    (o.__VUE_DEVTOOLS_PLUGINS__ = o.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: i
    }), i && t(i.proxiedTarget);
  }
}
/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
const pt = typeof document < "u";
function el(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Pu(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && el(e.default);
}
const Q = Object.assign;
function To(e, t) {
  const n = {};
  for (const o in t) {
    const r = t[o];
    n[o] = Pe(r) ? r.map(e) : e(r);
  }
  return n;
}
const On = () => {
}, Pe = Array.isArray;
function Es(e, t) {
  const n = {};
  for (const o in e) n[o] = o in t ? t[o] : e[o];
  return n;
}
function B(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const tl = /#/g, Mu = /&/g, $u = /\//g, ku = /=/g, ju = /\?/g, nl = /\+/g, Lu = /%5B/g, Hu = /%5D/g, ol = /%5E/g, Fu = /%60/g, rl = /%7B/g, zu = /%7C/g, sl = /%7D/g, Uu = /%20/g;
function Rr(e) {
  return e == null ? "" : encodeURI("" + e).replace(zu, "|").replace(Lu, "[").replace(Hu, "]");
}
function Bu(e) {
  return Rr(e).replace(rl, "{").replace(sl, "}").replace(ol, "^");
}
function Zo(e) {
  return Rr(e).replace(nl, "%2B").replace(Uu, "+").replace(tl, "%23").replace(Mu, "%26").replace(Fu, "`").replace(rl, "{").replace(sl, "}").replace(ol, "^");
}
function Gu(e) {
  return Zo(e).replace(ku, "%3D");
}
function Wu(e) {
  return Rr(e).replace(tl, "%23").replace(ju, "%3F");
}
function Ku(e) {
  return Wu(e).replace($u, "%2F");
}
function on(e) {
  if (e == null) return null;
  try {
    return decodeURIComponent("" + e);
  } catch {
    process.env.NODE_ENV !== "production" && B(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
const qu = /\/$/, Yu = (e) => e.replace(qu, "");
function Io(e, t, n = "/") {
  let o, r = {}, s = "", i = "";
  const l = t.indexOf("#");
  let a = t.indexOf("?");
  return a = l >= 0 && a > l ? -1 : a, a >= 0 && (o = t.slice(0, a), s = t.slice(a, l > 0 ? l : t.length), r = e(s.slice(1))), l >= 0 && (o = o || t.slice(0, l), i = t.slice(l, t.length)), o = Xu(o ?? t, n), {
    fullPath: o + s + i,
    path: o,
    query: r,
    hash: on(i)
  };
}
function Ju(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function ys(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function Ns(e, t, n) {
  const o = t.matched.length - 1, r = n.matched.length - 1;
  return o > -1 && o === r && Tt(t.matched[o], n.matched[r]) && il(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Tt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function il(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!Qu(e[n], t[n])) return !1;
  return !0;
}
function Qu(e, t) {
  return Pe(e) ? bs(e, t) : Pe(t) ? bs(t, e) : e === t;
}
function bs(e, t) {
  return Pe(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function Xu(e, t) {
  if (e.startsWith("/")) return e;
  if (process.env.NODE_ENV !== "production" && !t.startsWith("/"))
    return B(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
  if (!e) return t;
  const n = t.split("/"), o = e.split("/"), r = o[o.length - 1];
  (r === ".." || r === ".") && o.push("");
  let s = n.length - 1, i, l;
  for (i = 0; i < o.length; i++)
    if (l = o[i], l !== ".")
      if (l === "..")
        s > 1 && s--;
      else break;
  return n.slice(0, s).join("/") + "/" + o.slice(i).join("/");
}
const wt = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
};
let er = /* @__PURE__ */ (function(e) {
  return e.pop = "pop", e.push = "push", e;
})({}), Po = /* @__PURE__ */ (function(e) {
  return e.back = "back", e.forward = "forward", e.unknown = "", e;
})({});
function Zu(e) {
  if (!e) if (pt) {
    const t = document.querySelector("base");
    e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
  } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Yu(e);
}
const ef = /^[^#]+#/;
function tf(e, t) {
  return e.replace(ef, "#") + t;
}
function nf(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const yo = () => ({
  left: window.scrollX,
  top: window.scrollY
});
function of(e) {
  let t;
  if ("el" in e) {
    const n = e.el, o = typeof n == "string" && n.startsWith("#");
    if (process.env.NODE_ENV !== "production" && typeof e.el == "string" && (!o || !document.getElementById(e.el.slice(1))))
      try {
        const s = document.querySelector(e.el);
        if (o && s) {
          B(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch {
        B(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const r = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!r) {
      process.env.NODE_ENV !== "production" && B(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = nf(r, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function Os(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const tr = /* @__PURE__ */ new Map();
function rf(e, t) {
  tr.set(e, t);
}
function sf(e) {
  const t = tr.get(e);
  return tr.delete(e), t;
}
function lo(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function ll(e) {
  return typeof e == "string" || typeof e == "symbol";
}
let le = /* @__PURE__ */ (function(e) {
  return e[e.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", e[e.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", e[e.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", e[e.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", e[e.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", e;
})({});
const nr = Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : ""), lf = {
  [le.MATCHER_NOT_FOUND]({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  [le.NAVIGATION_GUARD_REDIRECT]({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${af(t)}" via a navigation guard.`;
  },
  [le.NAVIGATION_ABORTED]({ from: e, to: t }) {
    return `Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`;
  },
  [le.NAVIGATION_CANCELLED]({ from: e, to: t }) {
    return `Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`;
  },
  [le.NAVIGATION_DUPLICATED]({ from: e, to: t }) {
    return `Avoided redundant navigation to current location: "${e.fullPath}".`;
  }
};
function rn(e, t) {
  return process.env.NODE_ENV !== "production" ? Q(new Error(lf[e](t)), {
    type: e,
    [nr]: !0
  }, t) : Q(/* @__PURE__ */ new Error(), {
    type: e,
    [nr]: !0
  }, t);
}
function ut(e, t) {
  return e instanceof Error && nr in e && (t == null || !!(e.type & t));
}
const cf = [
  "params",
  "query",
  "hash"
];
function af(e) {
  if (typeof e == "string") return e;
  if (e.path != null) return e.path;
  const t = {};
  for (const n of cf) n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
function uf(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const n = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let o = 0; o < n.length; ++o) {
    const r = n[o].replace(nl, " "), s = r.indexOf("="), i = on(s < 0 ? r : r.slice(0, s)), l = s < 0 ? null : on(r.slice(s + 1));
    if (i in t) {
      let a = t[i];
      Pe(a) || (a = t[i] = [a]), a.push(l);
    } else t[i] = l;
  }
  return t;
}
function ws(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = Gu(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Pe(o) ? o.map((r) => r && Zo(r)) : [o && Zo(o)]).forEach((r) => {
      r !== void 0 && (t += (t.length ? "&" : "") + n, r != null && (t += "=" + r));
    });
  }
  return t;
}
function ff(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = Pe(o) ? o.map((r) => r == null ? null : "" + r) : o == null ? o : "" + o);
  }
  return t;
}
const df = Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : ""), Ds = Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : ""), Tr = Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), cl = Symbol(process.env.NODE_ENV !== "production" ? "route location" : ""), or = Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function dn() {
  let e = [];
  function t(o) {
    return e.push(o), () => {
      const r = e.indexOf(o);
      r > -1 && e.splice(r, 1);
    };
  }
  function n() {
    e = [];
  }
  return {
    add: t,
    list: () => e.slice(),
    reset: n
  };
}
function xt(e, t, n, o, r, s = (i) => i()) {
  const i = o && (o.enterCallbacks[r] = o.enterCallbacks[r] || []);
  return () => new Promise((l, a) => {
    const h = (p) => {
      p === !1 ? a(rn(le.NAVIGATION_ABORTED, {
        from: n,
        to: t
      })) : p instanceof Error ? a(p) : lo(p) ? a(rn(le.NAVIGATION_GUARD_REDIRECT, {
        from: t,
        to: p
      })) : (i && o.enterCallbacks[r] === i && typeof p == "function" && i.push(p), l());
    }, f = s(() => e.call(o && o.instances[r], t, n, process.env.NODE_ENV !== "production" ? pf(h, t, n) : h));
    let c = Promise.resolve(f);
    if (e.length < 3 && (c = c.then(h)), process.env.NODE_ENV !== "production" && e.length > 2) {
      const p = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof f == "object" && "then" in f) c = c.then((m) => h._called ? m : (B(p), Promise.reject(/* @__PURE__ */ new Error("Invalid navigation guard"))));
      else if (f !== void 0 && !h._called) {
        B(p), a(/* @__PURE__ */ new Error("Invalid navigation guard"));
        return;
      }
    }
    c.catch((p) => a(p));
  });
}
function pf(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && B(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function Mo(e, t, n, o, r = (s) => s()) {
  const s = [];
  for (const i of e) {
    process.env.NODE_ENV !== "production" && !i.components && i.children && !i.children.length && B(`Record with path "${i.path}" is either missing a "component(s)" or "children" property.`);
    for (const l in i.components) {
      let a = i.components[l];
      if (process.env.NODE_ENV !== "production") {
        if (!a || typeof a != "object" && typeof a != "function")
          throw B(`Component "${l}" in record with path "${i.path}" is not a valid component. Received "${String(a)}".`), new Error("Invalid route component");
        if ("then" in a) {
          B(`Component "${l}" in record with path "${i.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const h = a;
          a = () => h;
        } else a.__asyncLoader && !a.__warnedDefineAsync && (a.__warnedDefineAsync = !0, B(`Component "${l}" in record with path "${i.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !i.instances[l]))
        if (el(a)) {
          const h = (a.__vccOpts || a)[t];
          h && s.push(xt(h, n, o, i, l, r));
        } else {
          let h = a();
          process.env.NODE_ENV !== "production" && !("catch" in h) && (B(`Component "${l}" in record with path "${i.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), h = Promise.resolve(h)), s.push(() => h.then((f) => {
            if (!f) throw new Error(`Couldn't resolve component "${l}" at "${i.path}"`);
            const c = Pu(f) ? f.default : f;
            i.mods[l] = f, i.components[l] = c;
            const p = (c.__vccOpts || c)[t];
            return p && xt(p, n, o, i, l, r)();
          }));
        }
    }
  }
  return s;
}
function hf(e, t) {
  const n = [], o = [], r = [], s = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < s; i++) {
    const l = t.matched[i];
    l && (e.matched.find((h) => Tt(h, l)) ? o.push(l) : n.push(l));
    const a = e.matched[i];
    a && (t.matched.find((h) => Tt(h, a)) || r.push(a));
  }
  return [
    n,
    o,
    r
  ];
}
function pn(e, t) {
  const n = Q({}, e, { matched: e.matched.map((o) => Df(o, [
    "instances",
    "children",
    "aliasOf"
  ])) });
  return { _custom: {
    type: null,
    readOnly: !0,
    display: e.fullPath,
    tooltip: t,
    value: n
  } };
}
function Ln(e) {
  return { _custom: { display: e } };
}
let mf = 0;
function gf(e, t, n) {
  if (t.__hasDevtools) return;
  t.__hasDevtools = !0;
  const o = mf++;
  Iu({
    id: "org.vuejs.router" + (o ? "." + o : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: e
  }, (r) => {
    typeof r.now != "function" && B("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), r.on.inspectComponent((f, c) => {
      f.instanceData && f.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: pn(t.currentRoute.value, "Current Route")
      });
    }), r.on.visitComponentTree(({ treeNode: f, componentInstance: c }) => {
      if (c.__vrv_devtools) {
        const p = c.__vrv_devtools;
        f.tags.push({
          label: (p.name ? `${p.name.toString()}: ` : "") + p.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: al
        });
      }
      Pe(c.__vrl_devtools) && (c.__devtoolsApi = r, c.__vrl_devtools.forEach((p) => {
        let m = p.route.path, w = dl, b = "", L = 0;
        p.error ? (m = p.error, w = Nf, L = bf) : p.isExactActive ? (w = fl, b = "This is exactly active") : p.isActive && (w = ul, b = "This link is active"), f.tags.push({
          label: m,
          textColor: L,
          tooltip: b,
          backgroundColor: w
        });
      }));
    }), Nn(t.currentRoute, () => {
      a(), r.notifyComponentUpdate(), r.sendInspectorTree(l), r.sendInspectorState(l);
    });
    const s = "router:navigations:" + o;
    r.addTimelineLayer({
      id: s,
      label: `Router${o ? " " + o : ""} Navigations`,
      color: 4237508
    }), t.onError((f, c) => {
      r.addTimelineEvent({
        layerId: s,
        event: {
          title: "Error during Navigation",
          subtitle: c.fullPath,
          logType: "error",
          time: r.now(),
          data: { error: f },
          groupId: c.meta.__navigationId
        }
      });
    });
    let i = 0;
    t.beforeEach((f, c) => {
      const p = {
        guard: Ln("beforeEach"),
        from: pn(c, "Current Location during this navigation"),
        to: pn(f, "Target location")
      };
      Object.defineProperty(f.meta, "__navigationId", { value: i++ }), r.addTimelineEvent({
        layerId: s,
        event: {
          time: r.now(),
          title: "Start of navigation",
          subtitle: f.fullPath,
          data: p,
          groupId: f.meta.__navigationId
        }
      });
    }), t.afterEach((f, c, p) => {
      const m = { guard: Ln("afterEach") };
      p ? (m.failure = { _custom: {
        type: Error,
        readOnly: !0,
        display: p ? p.message : "",
        tooltip: "Navigation Failure",
        value: p
      } }, m.status = Ln("❌")) : m.status = Ln("✅"), m.from = pn(c, "Current Location during this navigation"), m.to = pn(f, "Target location"), r.addTimelineEvent({
        layerId: s,
        event: {
          title: "End of navigation",
          subtitle: f.fullPath,
          time: r.now(),
          data: m,
          logType: p ? "warning" : "default",
          groupId: f.meta.__navigationId
        }
      });
    });
    const l = "router-inspector:" + o;
    r.addInspector({
      id: l,
      label: "Routes" + (o ? " " + o : ""),
      icon: "book",
      treeFilterPlaceholder: "Search routes"
    });
    function a() {
      if (!h) return;
      const f = h;
      let c = n.getRoutes().filter((p) => !p.parent || !p.parent.record.components);
      c.forEach(ml), f.filter && (c = c.filter((p) => rr(p, f.filter.toLowerCase()))), c.forEach((p) => hl(p, t.currentRoute.value)), f.rootNodes = c.map(pl);
    }
    let h;
    r.on.getInspectorTree((f) => {
      h = f, f.app === e && f.inspectorId === l && a();
    }), r.on.getInspectorState((f) => {
      if (f.app === e && f.inspectorId === l) {
        const c = n.getRoutes().find((p) => p.record.__vd_id === f.nodeId);
        c && (f.state = { options: _f(c) });
      }
    }), r.sendInspectorTree(l), r.sendInspectorState(l);
  });
}
function vf(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function _f(e) {
  const { record: t } = e, n = [{
    editable: !1,
    key: "path",
    value: t.path
  }];
  return t.name != null && n.push({
    editable: !1,
    key: "name",
    value: t.name
  }), n.push({
    editable: !1,
    key: "regexp",
    value: e.re
  }), e.keys.length && n.push({
    editable: !1,
    key: "keys",
    value: { _custom: {
      type: null,
      readOnly: !0,
      display: e.keys.map((o) => `${o.name}${vf(o)}`).join(" "),
      tooltip: "Param keys",
      value: e.keys
    } }
  }), t.redirect != null && n.push({
    editable: !1,
    key: "redirect",
    value: t.redirect
  }), e.alias.length && n.push({
    editable: !1,
    key: "aliases",
    value: e.alias.map((o) => o.record.path)
  }), Object.keys(e.record.meta).length && n.push({
    editable: !1,
    key: "meta",
    value: e.record.meta
  }), n.push({
    key: "score",
    editable: !1,
    value: { _custom: {
      type: null,
      readOnly: !0,
      display: e.score.map((o) => o.join(", ")).join(" | "),
      tooltip: "Score used to sort routes",
      value: e.score
    } }
  }), n;
}
const al = 15485081, ul = 2450411, fl = 8702998, Ef = 2282478, dl = 16486972, yf = 6710886, Nf = 16704226, bf = 12131356;
function pl(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: Ef
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: dl
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: al
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: fl
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: ul
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: yf
  });
  let o = n.__vd_id;
  return o == null && (o = String(Of++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(pl)
  };
}
let Of = 0;
const wf = /^\/(.*)\/([a-z]*)$/;
function hl(e, t) {
  const n = t.matched.length && Tt(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => Tt(o, e.record))), e.children.forEach((o) => hl(o, t));
}
function ml(e) {
  e.__vd_match = !1, e.children.forEach(ml);
}
function rr(e, t) {
  const n = String(e.re).match(wf);
  if (e.__vd_match = !1, !n || n.length < 3) return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((s) => rr(s, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const o = e.record.path.toLowerCase(), r = on(o);
  return !t.startsWith("/") && (r.includes(t) || o.includes(t)) || r.startsWith(t) || o.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((s) => rr(s, t));
}
function Df(e, t) {
  const n = {};
  for (const o in e) t.includes(o) || (n[o] = e[o]);
  return n;
}
/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let Vf = () => location.protocol + "//" + location.host;
function gl(e, t) {
  const { pathname: n, search: o, hash: r } = t, s = e.indexOf("#");
  if (s > -1) {
    let i = r.includes(e.slice(s)) ? e.slice(s).length : 1, l = r.slice(i);
    return l[0] !== "/" && (l = "/" + l), ys(l, "");
  }
  return ys(n, e) + o + r;
}
function xf(e, t, n, o) {
  let r = [], s = [], i = null;
  const l = ({ state: p }) => {
    const m = gl(e, location), w = n.value, b = t.value;
    let L = 0;
    if (p) {
      if (n.value = m, t.value = p, i && i === w) {
        i = null;
        return;
      }
      L = b ? p.position - b.position : 0;
    } else o(m);
    r.forEach(($) => {
      $(n.value, w, {
        delta: L,
        type: er.pop,
        direction: L ? L > 0 ? Po.forward : Po.back : Po.unknown
      });
    });
  };
  function a() {
    i = n.value;
  }
  function h(p) {
    r.push(p);
    const m = () => {
      const w = r.indexOf(p);
      w > -1 && r.splice(w, 1);
    };
    return s.push(m), m;
  }
  function f() {
    if (document.visibilityState === "hidden") {
      const { history: p } = window;
      if (!p.state) return;
      p.replaceState(Q({}, p.state, { scroll: yo() }), "");
    }
  }
  function c() {
    for (const p of s) p();
    s = [], window.removeEventListener("popstate", l), window.removeEventListener("pagehide", f), document.removeEventListener("visibilitychange", f);
  }
  return window.addEventListener("popstate", l), window.addEventListener("pagehide", f), document.addEventListener("visibilitychange", f), {
    pauseListeners: a,
    listen: h,
    destroy: c
  };
}
function Vs(e, t, n, o = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: r ? yo() : null
  };
}
function Sf(e) {
  const { history: t, location: n } = window, o = { value: gl(e, n) }, r = { value: t.state };
  r.value || s(o.value, {
    back: null,
    current: o.value,
    forward: null,
    position: t.length - 1,
    replaced: !0,
    scroll: null
  }, !0);
  function s(a, h, f) {
    const c = e.indexOf("#"), p = c > -1 ? (n.host && document.querySelector("base") ? e : e.slice(c)) + a : Vf() + e + a;
    try {
      t[f ? "replaceState" : "pushState"](h, "", p), r.value = h;
    } catch (m) {
      process.env.NODE_ENV !== "production" ? B("Error with push/replace State", m) : console.error(m), n[f ? "replace" : "assign"](p);
    }
  }
  function i(a, h) {
    s(a, Q({}, t.state, Vs(r.value.back, a, r.value.forward, !0), h, { position: r.value.position }), !0), o.value = a;
  }
  function l(a, h) {
    const f = Q({}, r.value, t.state, {
      forward: a,
      scroll: yo()
    });
    process.env.NODE_ENV !== "production" && !t.state && B(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://router.vuejs.org/guide/migration/#Usage-of-history-state`), s(f.current, f, !0), s(a, Q({}, Vs(o.value, a, null), { position: f.position + 1 }, h), !1), o.value = a;
  }
  return {
    location: o,
    state: r,
    push: l,
    replace: i
  };
}
function Cf(e) {
  e = Zu(e);
  const t = Sf(e), n = xf(e, t.state, t.location, t.replace);
  function o(s, i = !0) {
    i || n.pauseListeners(), history.go(s);
  }
  const r = Q({
    location: "",
    base: e,
    go: o,
    createHref: tf.bind(null, e)
  }, t, n);
  return Object.defineProperty(r, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(r, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), r;
}
let Lt = /* @__PURE__ */ (function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.Group = 2] = "Group", e;
})({});
var de = /* @__PURE__ */ (function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.ParamRegExp = 2] = "ParamRegExp", e[e.ParamRegExpEnd = 3] = "ParamRegExpEnd", e[e.EscapeNext = 4] = "EscapeNext", e;
})(de || {});
const Af = {
  type: Lt.Static,
  value: ""
}, Rf = /[a-zA-Z0-9_]/;
function Tf(e) {
  if (!e) return [[]];
  if (e === "/") return [[Af]];
  if (!e.startsWith("/")) throw new Error(process.env.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
  function t(m) {
    throw new Error(`ERR (${n})/"${h}": ${m}`);
  }
  let n = de.Static, o = n;
  const r = [];
  let s;
  function i() {
    s && r.push(s), s = [];
  }
  let l = 0, a, h = "", f = "";
  function c() {
    h && (n === de.Static ? s.push({
      type: Lt.Static,
      value: h
    }) : n === de.Param || n === de.ParamRegExp || n === de.ParamRegExpEnd ? (s.length > 1 && (a === "*" || a === "+") && t(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`), s.push({
      type: Lt.Param,
      value: h,
      regexp: f,
      repeatable: a === "*" || a === "+",
      optional: a === "*" || a === "?"
    })) : t("Invalid state to consume buffer"), h = "");
  }
  function p() {
    h += a;
  }
  for (; l < e.length; ) {
    if (a = e[l++], a === "\\" && n !== de.ParamRegExp) {
      o = n, n = de.EscapeNext;
      continue;
    }
    switch (n) {
      case de.Static:
        a === "/" ? (h && c(), i()) : a === ":" ? (c(), n = de.Param) : p();
        break;
      case de.EscapeNext:
        p(), n = o;
        break;
      case de.Param:
        a === "(" ? n = de.ParamRegExp : Rf.test(a) ? p() : (c(), n = de.Static, a !== "*" && a !== "?" && a !== "+" && l--);
        break;
      case de.ParamRegExp:
        a === ")" ? f[f.length - 1] == "\\" ? f = f.slice(0, -1) + a : n = de.ParamRegExpEnd : f += a;
        break;
      case de.ParamRegExpEnd:
        c(), n = de.Static, a !== "*" && a !== "?" && a !== "+" && l--, f = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === de.ParamRegExp && t(`Unfinished custom RegExp for param "${h}"`), c(), i(), r;
}
const xs = "[^/]+?", If = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
};
var Oe = /* @__PURE__ */ (function(e) {
  return e[e._multiplier = 10] = "_multiplier", e[e.Root = 90] = "Root", e[e.Segment = 40] = "Segment", e[e.SubSegment = 30] = "SubSegment", e[e.Static = 40] = "Static", e[e.Dynamic = 20] = "Dynamic", e[e.BonusCustomRegExp = 10] = "BonusCustomRegExp", e[e.BonusWildcard = -50] = "BonusWildcard", e[e.BonusRepeatable = -20] = "BonusRepeatable", e[e.BonusOptional = -8] = "BonusOptional", e[e.BonusStrict = 0.7000000000000001] = "BonusStrict", e[e.BonusCaseSensitive = 0.25] = "BonusCaseSensitive", e;
})(Oe || {});
const Pf = /[.+*?^${}()[\]/\\]/g;
function Mf(e, t) {
  const n = Q({}, If, t), o = [];
  let r = n.start ? "^" : "";
  const s = [];
  for (const h of e) {
    const f = h.length ? [] : [Oe.Root];
    n.strict && !h.length && (r += "/");
    for (let c = 0; c < h.length; c++) {
      const p = h[c];
      let m = Oe.Segment + (n.sensitive ? Oe.BonusCaseSensitive : 0);
      if (p.type === Lt.Static)
        c || (r += "/"), r += p.value.replace(Pf, "\\$&"), m += Oe.Static;
      else if (p.type === Lt.Param) {
        const { value: w, repeatable: b, optional: L, regexp: $ } = p;
        s.push({
          name: w,
          repeatable: b,
          optional: L
        });
        const A = $ || xs;
        if (A !== xs) {
          m += Oe.BonusCustomRegExp;
          try {
            `${A}`;
          } catch (ne) {
            throw new Error(`Invalid custom RegExp for param "${w}" (${A}): ` + ne.message);
          }
        }
        let T = b ? `((?:${A})(?:/(?:${A}))*)` : `(${A})`;
        c || (T = L && h.length < 2 ? `(?:/${T})` : "/" + T), L && (T += "?"), r += T, m += Oe.Dynamic, L && (m += Oe.BonusOptional), b && (m += Oe.BonusRepeatable), A === ".*" && (m += Oe.BonusWildcard);
      }
      f.push(m);
    }
    o.push(f);
  }
  if (n.strict && n.end) {
    const h = o.length - 1;
    o[h][o[h].length - 1] += Oe.BonusStrict;
  }
  n.strict || (r += "/?"), n.end ? r += "$" : n.strict && !r.endsWith("/") && (r += "(?:/|$)");
  const i = new RegExp(r, n.sensitive ? "" : "i");
  function l(h) {
    const f = h.match(i), c = {};
    if (!f) return null;
    for (let p = 1; p < f.length; p++) {
      const m = f[p] || "", w = s[p - 1];
      c[w.name] = m && w.repeatable ? m.split("/") : m;
    }
    return c;
  }
  function a(h) {
    let f = "", c = !1;
    for (const p of e) {
      (!c || !f.endsWith("/")) && (f += "/"), c = !1;
      for (const m of p) if (m.type === Lt.Static) f += m.value;
      else if (m.type === Lt.Param) {
        const { value: w, repeatable: b, optional: L } = m, $ = w in h ? h[w] : "";
        if (Pe($) && !b) throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);
        const A = Pe($) ? $.join("/") : $;
        if (!A) if (L)
          p.length < 2 && (f.endsWith("/") ? f = f.slice(0, -1) : c = !0);
        else throw new Error(`Missing required param "${w}"`);
        f += A;
      }
    }
    return f || "/";
  }
  return {
    re: i,
    score: o,
    keys: s,
    parse: l,
    stringify: a
  };
}
function $f(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o) return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === Oe.Static + Oe.Segment ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === Oe.Static + Oe.Segment ? 1 : -1 : 0;
}
function vl(e, t) {
  let n = 0;
  const o = e.score, r = t.score;
  for (; n < o.length && n < r.length; ) {
    const s = $f(o[n], r[n]);
    if (s) return s;
    n++;
  }
  if (Math.abs(r.length - o.length) === 1) {
    if (Ss(o)) return 1;
    if (Ss(r)) return -1;
  }
  return r.length - o.length;
}
function Ss(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const kf = {
  strict: !1,
  end: !0,
  sensitive: !1
};
function jf(e, t, n) {
  const o = Mf(Tf(e.path), n);
  if (process.env.NODE_ENV !== "production") {
    const s = /* @__PURE__ */ new Set();
    for (const i of o.keys)
      s.has(i.name) && B(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), s.add(i.name);
  }
  const r = Q(o, {
    record: e,
    parent: t,
    children: [],
    alias: []
  });
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function Lf(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = Es(kf, t);
  function r(c) {
    return o.get(c);
  }
  function s(c, p, m) {
    const w = !m, b = As(c);
    process.env.NODE_ENV !== "production" && Uf(b, p), b.aliasOf = m && m.record;
    const L = Es(t, c), $ = [b];
    if ("alias" in c) {
      const ne = typeof c.alias == "string" ? [c.alias] : c.alias;
      for (const I of ne) $.push(As(Q({}, b, {
        components: m ? m.record.components : b.components,
        path: I,
        aliasOf: m ? m.record : b
      })));
    }
    let A, T;
    for (const ne of $) {
      const { path: I } = ne;
      if (p && I[0] !== "/") {
        const re = p.record.path, ie = re[re.length - 1] === "/" ? "" : "/";
        ne.path = p.record.path + (I && ie + I);
      }
      if (process.env.NODE_ENV !== "production" && ne.path === "*") throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://router.vuejs.org/guide/migration/#Removed-star-or-catch-all-routes.`);
      if (A = jf(ne, p, L), process.env.NODE_ENV !== "production" && p && I[0] === "/" && Gf(A, p), m ? (m.alias.push(A), process.env.NODE_ENV !== "production" && zf(m, A)) : (T = T || A, T !== A && T.alias.push(A), w && c.name && !Rs(A) && (process.env.NODE_ENV !== "production" && Bf(c, p), i(c.name))), _l(A) && a(A), b.children) {
        const re = b.children;
        for (let ie = 0; ie < re.length; ie++) s(re[ie], A, m && m.children[ie]);
      }
      m = m || A;
    }
    return T ? () => {
      i(T);
    } : On;
  }
  function i(c) {
    if (ll(c)) {
      const p = o.get(c);
      p && (o.delete(c), n.splice(n.indexOf(p), 1), p.children.forEach(i), p.alias.forEach(i));
    } else {
      const p = n.indexOf(c);
      p > -1 && (n.splice(p, 1), c.record.name && o.delete(c.record.name), c.children.forEach(i), c.alias.forEach(i));
    }
  }
  function l() {
    return n;
  }
  function a(c) {
    const p = Wf(c, n);
    n.splice(p, 0, c), c.record.name && !Rs(c) && o.set(c.record.name, c);
  }
  function h(c, p) {
    let m, w = {}, b, L;
    if ("name" in c && c.name) {
      if (m = o.get(c.name), !m) throw rn(le.MATCHER_NOT_FOUND, { location: c });
      if (process.env.NODE_ENV !== "production") {
        const T = Object.keys(c.params || {}).filter((ne) => !m.keys.find((I) => I.name === ne));
        T.length && B(`Discarded invalid param(s) "${T.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      L = m.record.name, w = Q(Cs(p.params, m.keys.filter((T) => !T.optional).concat(m.parent ? m.parent.keys.filter((T) => T.optional) : []).map((T) => T.name)), c.params && Cs(c.params, m.keys.map((T) => T.name))), b = m.stringify(w);
    } else if (c.path != null)
      b = c.path, process.env.NODE_ENV !== "production" && !b.startsWith("/") && B(`The Matcher cannot resolve relative paths but received "${b}". Unless you directly called \`matcher.resolve("${b}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), m = n.find((T) => T.re.test(b)), m && (w = m.parse(b), L = m.record.name);
    else {
      if (m = p.name ? o.get(p.name) : n.find((T) => T.re.test(p.path)), !m) throw rn(le.MATCHER_NOT_FOUND, {
        location: c,
        currentLocation: p
      });
      L = m.record.name, w = Q({}, p.params, c.params), b = m.stringify(w);
    }
    const $ = [];
    let A = m;
    for (; A; )
      $.unshift(A.record), A = A.parent;
    return {
      name: L,
      path: b,
      params: w,
      matched: $,
      meta: Ff($)
    };
  }
  e.forEach((c) => s(c));
  function f() {
    n.length = 0, o.clear();
  }
  return {
    addRoute: s,
    resolve: h,
    removeRoute: i,
    clearRoutes: f,
    getRoutes: l,
    getRecordMatcher: r
  };
}
function Cs(e, t) {
  const n = {};
  for (const o of t) o in e && (n[o] = e[o]);
  return n;
}
function As(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: Hf(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
  return Object.defineProperty(t, "mods", { value: {} }), t;
}
function Hf(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const o in e.components) t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function Rs(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function Ff(e) {
  return e.reduce((t, n) => Q(t, n.meta), {});
}
function sr(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function zf(e, t) {
  for (const n of e.keys) if (!n.optional && !t.keys.find(sr.bind(null, n))) return B(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys) if (!n.optional && !e.keys.find(sr.bind(null, n))) return B(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function Uf(e, t) {
  t && t.record.name && !e.name && !e.path && B(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function Bf(e, t) {
  for (let n = t; n; n = n.parent) if (n.record.name === e.name) throw new Error(`A route named "${String(e.name)}" has been added as a ${t === n ? "child" : "descendant"} of a route with the same name. Route names must be unique and a nested route cannot use the same name as an ancestor.`);
}
function Gf(e, t) {
  for (const n of t.keys) if (!e.keys.find(sr.bind(null, n))) return B(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function Wf(e, t) {
  let n = 0, o = t.length;
  for (; n !== o; ) {
    const s = n + o >> 1;
    vl(e, t[s]) < 0 ? o = s : n = s + 1;
  }
  const r = Kf(e);
  return r && (o = t.lastIndexOf(r, o - 1), process.env.NODE_ENV !== "production" && o < 0 && B(`Finding ancestor route "${r.record.path}" failed for "${e.record.path}"`)), o;
}
function Kf(e) {
  let t = e;
  for (; t = t.parent; ) if (_l(t) && vl(e, t) === 0) return t;
}
function _l({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function Ts(e) {
  const t = ht(Tr), n = ht(cl);
  let o = !1, r = null;
  const s = Be(() => {
    const f = st(e.to);
    return process.env.NODE_ENV !== "production" && (!o || f !== r) && (lo(f) || (o ? B(`Invalid value for prop "to" in useLink()
- to:`, f, `
- previous to:`, r, `
- props:`, e) : B(`Invalid value for prop "to" in useLink()
- to:`, f, `
- props:`, e)), r = f, o = !0), t.resolve(f);
  }), i = Be(() => {
    const { matched: f } = s.value, { length: c } = f, p = f[c - 1], m = n.matched;
    if (!p || !m.length) return -1;
    const w = m.findIndex(Tt.bind(null, p));
    if (w > -1) return w;
    const b = Is(f[c - 2]);
    return c > 1 && Is(p) === b && m[m.length - 1].path !== b ? m.findIndex(Tt.bind(null, f[c - 2])) : w;
  }), l = Be(() => i.value > -1 && Qf(n.params, s.value.params)), a = Be(() => i.value > -1 && i.value === n.matched.length - 1 && il(n.params, s.value.params));
  function h(f = {}) {
    if (Jf(f)) {
      const c = t[st(e.replace) ? "replace" : "push"](st(e.to)).catch(On);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => c), c;
    }
    return Promise.resolve();
  }
  if (process.env.NODE_ENV !== "production" && pt) {
    const f = _o();
    if (f) {
      const c = {
        route: s.value,
        isActive: l.value,
        isExactActive: a.value,
        error: null
      };
      f.__vrl_devtools = f.__vrl_devtools || [], f.__vrl_devtools.push(c), wa(() => {
        c.route = s.value, c.isActive = l.value, c.isExactActive = a.value, c.error = lo(st(e.to)) ? null : 'Invalid "to" value';
      }, { flush: "post" });
    }
  }
  return {
    route: s,
    href: Be(() => s.value.href),
    isActive: l,
    isExactActive: a,
    navigate: h
  };
}
function qf(e) {
  return e.length === 1 ? e[0] : e;
}
const Yf = /* @__PURE__ */ Ni({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: !0
    },
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    },
    viewTransition: Boolean
  },
  useLink: Ts,
  setup(e, { slots: t }) {
    const n = po(Ts(e)), { options: o } = ht(Tr), r = Be(() => ({
      [Ps(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      [Ps(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const s = t.default && qf(t.default(n));
      return e.custom ? s : Qi("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        onClick: n.navigate,
        class: r.value
      }, s);
    };
  }
}), ir = Yf;
function Jf(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Qf(e, t) {
  for (const n in t) {
    const o = t[n], r = e[n];
    if (typeof o == "string") {
      if (o !== r) return !1;
    } else if (!Pe(r) || r.length !== o.length || o.some((s, i) => s !== r[i])) return !1;
  }
  return !0;
}
function Is(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Ps = (e, t, n) => e ?? t ?? n, Xf = /* @__PURE__ */ Ni({
  name: "RouterView",
  inheritAttrs: !1,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  compatConfig: { MODE: 3 },
  setup(e, { attrs: t, slots: n }) {
    process.env.NODE_ENV !== "production" && Zf();
    const o = ht(or), r = Be(() => e.route || o.value), s = ht(Ds, 0), i = Be(() => {
      let h = st(s);
      const { matched: f } = r.value;
      let c;
      for (; (c = f[h]) && !c.components; ) h++;
      return h;
    }), l = Be(() => r.value.matched[i.value]);
    Un(Ds, Be(() => i.value + 1)), Un(df, l), Un(or, r);
    const a = rc();
    return Nn(() => [
      a.value,
      l.value,
      e.name
    ], ([h, f, c], [p, m, w]) => {
      f && (f.instances[c] = h, m && m !== f && h && h === p && (f.leaveGuards.size || (f.leaveGuards = m.leaveGuards), f.updateGuards.size || (f.updateGuards = m.updateGuards))), h && f && (!m || !Tt(f, m) || !p) && (f.enterCallbacks[c] || []).forEach((b) => b(h));
    }, { flush: "post" }), () => {
      const h = r.value, f = e.name, c = l.value, p = c && c.components[f];
      if (!p) return Ms(n.default, {
        Component: p,
        route: h
      });
      const m = c.props[f], w = m ? m === !0 ? h.params : typeof m == "function" ? m(h) : m : null, L = Qi(p, Q({}, w, t, {
        onVnodeUnmounted: ($) => {
          $.component.isUnmounted && (c.instances[f] = null);
        },
        ref: a
      }));
      if (process.env.NODE_ENV !== "production" && pt && L.ref) {
        const $ = {
          depth: i.value,
          name: c.name,
          path: c.path,
          meta: c.meta
        };
        (Pe(L.ref) ? L.ref.map((A) => A.i) : [L.ref.i]).forEach((A) => {
          A.__vrv_devtools = $;
        });
      }
      return Ms(n.default, {
        Component: L,
        route: h
      }) || L;
    };
  }
});
function Ms(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const El = Xf;
function Zf() {
  const e = _o(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const o = t === "KeepAlive" ? "keep-alive" : "transition";
    B(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`);
  }
}
function ed(e) {
  const t = Lf(e.routes, e), n = e.parseQuery || uf, o = e.stringifyQuery || ws, r = e.history;
  if (process.env.NODE_ENV !== "production" && !r) throw new Error('Provide the "history" option when calling "createRouter()": https://router.vuejs.org/api/interfaces/RouterOptions.html#history');
  const s = dn(), i = dn(), l = dn(), a = sc(wt);
  let h = wt;
  pt && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const f = To.bind(null, (v) => "" + v), c = To.bind(null, Ku), p = To.bind(null, on);
  function m(v, R) {
    let C, P;
    return ll(v) ? (C = t.getRecordMatcher(v), process.env.NODE_ENV !== "production" && !C && B(`Parent route "${String(v)}" not found when adding child route`, R), P = R) : P = v, t.addRoute(P, C);
  }
  function w(v) {
    const R = t.getRecordMatcher(v);
    R ? t.removeRoute(R) : process.env.NODE_ENV !== "production" && B(`Cannot remove non-existent route "${String(v)}"`);
  }
  function b() {
    return t.getRoutes().map((v) => v.record);
  }
  function L(v) {
    return !!t.getRecordMatcher(v);
  }
  function $(v, R) {
    if (R = Q({}, R || a.value), typeof v == "string") {
      const d = Io(n, v, R.path), g = t.resolve({ path: d.path }, R), E = r.createHref(d.fullPath);
      return process.env.NODE_ENV !== "production" && (E.startsWith("//") ? B(`Location "${v}" resolved to "${E}". A resolved location cannot start with multiple slashes.`) : g.matched.length || B(`No match found for location with path "${v}"`)), Q(d, g, {
        params: p(g.params),
        hash: on(d.hash),
        redirectedFrom: void 0,
        href: E
      });
    }
    if (process.env.NODE_ENV !== "production" && !lo(v))
      return B(`router.resolve() was passed an invalid location. This will fail in production.
- Location:`, v), $({});
    let C;
    if (v.path != null)
      process.env.NODE_ENV !== "production" && "params" in v && !("name" in v) && Object.keys(v.params).length && B(`Path "${v.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), C = Q({}, v, { path: Io(n, v.path, R.path).path });
    else {
      const d = Q({}, v.params);
      for (const g in d) d[g] == null && delete d[g];
      C = Q({}, v, { params: c(d) }), R.params = c(R.params);
    }
    const P = t.resolve(C, R), F = v.hash || "";
    process.env.NODE_ENV !== "production" && F && !F.startsWith("#") && B(`A \`hash\` should always start with the character "#". Replace "${F}" with "#${F}".`), P.params = f(p(P.params));
    const ae = Ju(o, Q({}, v, {
      hash: Bu(F),
      path: P.path
    })), u = r.createHref(ae);
    return process.env.NODE_ENV !== "production" && (u.startsWith("//") ? B(`Location "${v}" resolved to "${u}". A resolved location cannot start with multiple slashes.`) : P.matched.length || B(`No match found for location with path "${v.path != null ? v.path : v}"`)), Q({
      fullPath: ae,
      hash: F,
      query: o === ws ? ff(v.query) : v.query || {}
    }, P, {
      redirectedFrom: void 0,
      href: u
    });
  }
  function A(v) {
    return typeof v == "string" ? Io(n, v, a.value.path) : Q({}, v);
  }
  function T(v, R) {
    if (h !== v) return rn(le.NAVIGATION_CANCELLED, {
      from: R,
      to: v
    });
  }
  function ne(v) {
    return ie(v);
  }
  function I(v) {
    return ne(Q(A(v), { replace: !0 }));
  }
  function re(v, R) {
    const C = v.matched[v.matched.length - 1];
    if (C && C.redirect) {
      const { redirect: P } = C;
      let F = typeof P == "function" ? P(v, R) : P;
      if (typeof F == "string" && (F = F.includes("?") || F.includes("#") ? F = A(F) : { path: F }, F.params = {}), process.env.NODE_ENV !== "production" && F.path == null && !("name" in F))
        throw B(`Invalid redirect found:
${JSON.stringify(F, null, 2)}
 when navigating to "${v.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return Q({
        query: v.query,
        hash: v.hash,
        params: F.path != null ? {} : v.params
      }, F);
    }
  }
  function ie(v, R) {
    const C = h = $(v), P = a.value, F = v.state, ae = v.force, u = v.replace === !0, d = re(C, P);
    if (d) return ie(Q(A(d), {
      state: typeof d == "object" ? Q({}, F, d.state) : F,
      force: ae,
      replace: u
    }), R || C);
    const g = C;
    g.redirectedFrom = R;
    let E;
    return !ae && Ns(o, P, C) && (E = rn(le.NAVIGATION_DUPLICATED, {
      to: g,
      from: P
    }), yt(P, P, !0, !1)), (E ? Promise.resolve(E) : Me(g, P)).catch((_) => ut(_) ? ut(_, le.NAVIGATION_GUARD_REDIRECT) ? _ : Pt(_) : W(_, g, P)).then((_) => {
      if (_) {
        if (ut(_, le.NAVIGATION_GUARD_REDIRECT))
          return process.env.NODE_ENV !== "production" && Ns(o, $(_.to), g) && R && (R._count = R._count ? R._count + 1 : 1) > 30 ? (B(`Detected a possibly infinite redirection in a navigation guard when going from "${P.fullPath}" to "${g.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(/* @__PURE__ */ new Error("Infinite redirect in navigation guard"))) : ie(Q({ replace: u }, A(_.to), {
            state: typeof _.to == "object" ? Q({}, F, _.to.state) : F,
            force: ae
          }), R || g);
      } else _ = xe(g, P, !0, u, F);
      return Fe(g, P, _), _;
    });
  }
  function me(v, R) {
    const C = T(v, R);
    return C ? Promise.reject(C) : Promise.resolve();
  }
  function ge(v) {
    const R = Nt.values().next().value;
    return R && typeof R.runWithContext == "function" ? R.runWithContext(v) : v();
  }
  function Me(v, R) {
    let C;
    const [P, F, ae] = hf(v, R);
    C = Mo(P.reverse(), "beforeRouteLeave", v, R);
    for (const d of P) d.leaveGuards.forEach((g) => {
      C.push(xt(g, v, R));
    });
    const u = me.bind(null, v, R);
    return C.push(u), Ot(C).then(() => {
      C = [];
      for (const d of s.list()) C.push(xt(d, v, R));
      return C.push(u), Ot(C);
    }).then(() => {
      C = Mo(F, "beforeRouteUpdate", v, R);
      for (const d of F) d.updateGuards.forEach((g) => {
        C.push(xt(g, v, R));
      });
      return C.push(u), Ot(C);
    }).then(() => {
      C = [];
      for (const d of ae) if (d.beforeEnter) if (Pe(d.beforeEnter)) for (const g of d.beforeEnter) C.push(xt(g, v, R));
      else C.push(xt(d.beforeEnter, v, R));
      return C.push(u), Ot(C);
    }).then(() => (v.matched.forEach((d) => d.enterCallbacks = {}), C = Mo(ae, "beforeRouteEnter", v, R, ge), C.push(u), Ot(C))).then(() => {
      C = [];
      for (const d of i.list()) C.push(xt(d, v, R));
      return C.push(u), Ot(C);
    }).catch((d) => ut(d, le.NAVIGATION_CANCELLED) ? d : Promise.reject(d));
  }
  function Fe(v, R, C) {
    l.list().forEach((P) => ge(() => P(v, R, C)));
  }
  function xe(v, R, C, P, F) {
    const ae = T(v, R);
    if (ae) return ae;
    const u = R === wt, d = pt ? history.state : {};
    C && (P || u ? r.replace(v.fullPath, Q({ scroll: u && d && d.scroll }, F)) : r.push(v.fullPath, F)), a.value = v, yt(v, R, C, u), Pt();
  }
  let Je;
  function Mn() {
    Je || (Je = r.listen((v, R, C) => {
      if (!bt.listening) return;
      const P = $(v), F = re(P, bt.currentRoute.value);
      if (F) {
        ie(Q(F, {
          replace: !0,
          force: !0
        }), P).catch(On);
        return;
      }
      h = P;
      const ae = a.value;
      pt && rf(Os(ae.fullPath, C.delta), yo()), Me(P, ae).catch((u) => ut(u, le.NAVIGATION_ABORTED | le.NAVIGATION_CANCELLED) ? u : ut(u, le.NAVIGATION_GUARD_REDIRECT) ? (ie(Q(A(u.to), { force: !0 }), P).then((d) => {
        ut(d, le.NAVIGATION_ABORTED | le.NAVIGATION_DUPLICATED) && !C.delta && C.type === er.pop && r.go(-1, !1);
      }).catch(On), Promise.reject()) : (C.delta && r.go(-C.delta, !1), W(u, P, ae))).then((u) => {
        u = u || xe(P, ae, !1), u && (C.delta && !ut(u, le.NAVIGATION_CANCELLED) ? r.go(-C.delta, !1) : C.type === er.pop && ut(u, le.NAVIGATION_ABORTED | le.NAVIGATION_DUPLICATED) && r.go(-1, !1)), Fe(P, ae, u);
      }).catch(On);
    }));
  }
  let $e = dn(), _e = dn(), G;
  function W(v, R, C) {
    Pt(v);
    const P = _e.list();
    return P.length ? P.forEach((F) => F(v, R, C)) : (process.env.NODE_ENV !== "production" && B("uncaught error during route navigation:"), console.error(v)), Promise.reject(v);
  }
  function ke() {
    return G && a.value !== wt ? Promise.resolve() : new Promise((v, R) => {
      $e.add([v, R]);
    });
  }
  function Pt(v) {
    return G || (G = !v, Mn(), $e.list().forEach(([R, C]) => v ? C(v) : R()), $e.reset()), v;
  }
  function yt(v, R, C, P) {
    const { scrollBehavior: F } = e;
    if (!pt || !F) return Promise.resolve();
    const ae = !C && sf(Os(v.fullPath, 0)) || (P || !C) && history.state && history.state.scroll || null;
    return fi().then(() => F(v, R, ae)).then((u) => u && of(u)).catch((u) => W(u, v, R));
  }
  const Qe = (v) => r.go(v);
  let je;
  const Nt = /* @__PURE__ */ new Set(), bt = {
    currentRoute: a,
    listening: !0,
    addRoute: m,
    removeRoute: w,
    clearRoutes: t.clearRoutes,
    hasRoute: L,
    getRoutes: b,
    resolve: $,
    options: e,
    push: ne,
    replace: I,
    go: Qe,
    back: () => Qe(-1),
    forward: () => Qe(1),
    beforeEach: s.add,
    beforeResolve: i.add,
    afterEach: l.add,
    onError: _e.add,
    isReady: ke,
    install(v) {
      v.component("RouterLink", ir), v.component("RouterView", El), v.config.globalProperties.$router = bt, Object.defineProperty(v.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => st(a)
      }), pt && !je && a.value === wt && (je = !0, ne(r.location).catch((P) => {
        process.env.NODE_ENV !== "production" && B("Unexpected error when starting the router:", P);
      }));
      const R = {};
      for (const P in wt) Object.defineProperty(R, P, {
        get: () => a.value[P],
        enumerable: !0
      });
      v.provide(Tr, bt), v.provide(cl, ii(R)), v.provide(or, a);
      const C = v.unmount;
      Nt.add(v), v.unmount = function() {
        Nt.delete(v), Nt.size < 1 && (h = wt, Je && Je(), Je = null, a.value = wt, je = !1, G = !1), C();
      }, process.env.NODE_ENV !== "production" && pt && gf(v, bt, t);
    }
  };
  function Ot(v) {
    return v.reduce((R, C) => R.then(() => ge(C)), Promise.resolve());
  }
  return bt;
}
const It = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, td = { class: "greetings" }, nd = { class: "green" }, od = {
  __name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    return (t, n) => (He(), ct("div", td, [
      K("h1", nd, zs(e.msg), 1),
      n[0] || (n[0] = K("h3", null, [
        q(" You’ve successfully created a project with "),
        K("a", {
          href: "https://vite.dev/",
          target: "_blank",
          rel: "noopener"
        }, "Vite"),
        q(" + "),
        K("a", {
          href: "https://vuejs.org/",
          target: "_blank",
          rel: "noopener"
        }, "Vue 3"),
        q(". ")
      ], -1))
    ]));
  }
}, rd = /* @__PURE__ */ It(od, [["__scopeId", "data-v-fcc5fe42"]]), sd = { class: "wrapper" }, id = {
  __name: "App",
  setup(e) {
    return (t, n) => (He(), ct(Ve, null, [
      K("header", null, [
        n[2] || (n[2] = K("img", {
          alt: "Vue logo",
          class: "logo",
          src: Du,
          width: "125",
          height: "125"
        }, null, -1)),
        K("div", sd, [
          oe(rd, { msg: "You did it!" }),
          K("nav", null, [
            oe(st(ir), { to: "/" }, {
              default: ve(() => [...n[0] || (n[0] = [
                q("Home", -1)
              ])]),
              _: 1
            }),
            oe(st(ir), { to: "/about" }, {
              default: ve(() => [...n[1] || (n[1] = [
                q("About", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ]),
      oe(st(El))
    ], 64));
  }
}, ld = /* @__PURE__ */ It(id, [["__scopeId", "data-v-d355b64c"]]), cd = {}, ad = { class: "item" }, ud = { class: "details" };
function fd(e, t) {
  return He(), ct("div", ad, [
    K("i", null, [
      xo(e.$slots, "icon", {}, void 0)
    ]),
    K("div", ud, [
      K("h3", null, [
        xo(e.$slots, "heading", {}, void 0)
      ]),
      xo(e.$slots, "default", {}, void 0)
    ])
  ]);
}
const hn = /* @__PURE__ */ It(cd, [["render", fd], ["__scopeId", "data-v-40a5c0e5"]]), dd = {}, pd = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "17",
  fill: "currentColor"
};
function hd(e, t) {
  return He(), ct("svg", pd, [...t[0] || (t[0] = [
    K("path", { d: "M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z" }, null, -1)
  ])]);
}
const md = /* @__PURE__ */ It(dd, [["render", hd]]), gd = {}, vd = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": "true",
  role: "img",
  class: "iconify iconify--mdi",
  width: "24",
  height: "24",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24"
};
function _d(e, t) {
  return He(), ct("svg", vd, [...t[0] || (t[0] = [
    K("path", {
      d: "M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",
      fill: "currentColor"
    }, null, -1)
  ])]);
}
const Ed = /* @__PURE__ */ It(gd, [["render", _d]]), yd = {}, Nd = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "18",
  height: "20",
  fill: "currentColor"
};
function bd(e, t) {
  return He(), ct("svg", Nd, [...t[0] || (t[0] = [
    K("path", { d: "M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z" }, null, -1)
  ])]);
}
const Od = /* @__PURE__ */ It(yd, [["render", bd]]), wd = {}, Dd = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  fill: "currentColor"
};
function Vd(e, t) {
  return He(), ct("svg", Dd, [...t[0] || (t[0] = [
    K("path", { d: "M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z" }, null, -1)
  ])]);
}
const xd = /* @__PURE__ */ It(wd, [["render", Vd]]), Sd = {}, Cd = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  fill: "currentColor"
};
function Ad(e, t) {
  return He(), ct("svg", Cd, [...t[0] || (t[0] = [
    K("path", { d: "M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z" }, null, -1)
  ])]);
}
const Rd = /* @__PURE__ */ It(Sd, [["render", Ad]]), Td = {
  __name: "TheWelcome",
  setup(e) {
    const t = () => fetch("/__open-in-editor?file=README.md");
    return (n, o) => (He(), ct(Ve, null, [
      oe(hn, null, {
        icon: ve(() => [
          oe(md)
        ]),
        heading: ve(() => [...o[0] || (o[0] = [
          q("Documentation", -1)
        ])]),
        default: ve(() => [
          o[1] || (o[1] = q(" Vue’s ", -1)),
          o[2] || (o[2] = K("a", {
            href: "https://vuejs.org/",
            target: "_blank",
            rel: "noopener"
          }, "official documentation", -1)),
          o[3] || (o[3] = q(" provides you with all information you need to get started. ", -1))
        ]),
        _: 1
      }),
      oe(hn, null, {
        icon: ve(() => [
          oe(Ed)
        ]),
        heading: ve(() => [...o[4] || (o[4] = [
          q("Tooling", -1)
        ])]),
        default: ve(() => [
          o[6] || (o[6] = q(" This project is served and bundled with ", -1)),
          o[7] || (o[7] = K("a", {
            href: "https://vite.dev/guide/features.html",
            target: "_blank",
            rel: "noopener"
          }, "Vite", -1)),
          o[8] || (o[8] = q(". The recommended IDE setup is ", -1)),
          o[9] || (o[9] = K("a", {
            href: "https://code.visualstudio.com/",
            target: "_blank",
            rel: "noopener"
          }, "VSCode", -1)),
          o[10] || (o[10] = q(" + ", -1)),
          o[11] || (o[11] = K("a", {
            href: "https://github.com/vuejs/language-tools",
            target: "_blank",
            rel: "noopener"
          }, "Vue - Official", -1)),
          o[12] || (o[12] = q(". If you need to test your components and web pages, check out ", -1)),
          o[13] || (o[13] = K("a", {
            href: "https://vitest.dev/",
            target: "_blank",
            rel: "noopener"
          }, "Vitest", -1)),
          o[14] || (o[14] = q(" and ", -1)),
          o[15] || (o[15] = K("a", {
            href: "https://www.cypress.io/",
            target: "_blank",
            rel: "noopener"
          }, "Cypress", -1)),
          o[16] || (o[16] = q(" / ", -1)),
          o[17] || (o[17] = K("a", {
            href: "https://playwright.dev/",
            target: "_blank",
            rel: "noopener"
          }, "Playwright", -1)),
          o[18] || (o[18] = q(". ", -1)),
          o[19] || (o[19] = K("br", null, null, -1)),
          o[20] || (o[20] = q(" More instructions are available in ", -1)),
          K("a", {
            href: "javascript:void(0)",
            onClick: t
          }, [...o[5] || (o[5] = [
            K("code", null, "README.md", -1)
          ])]),
          o[21] || (o[21] = q(". ", -1))
        ]),
        _: 1
      }),
      oe(hn, null, {
        icon: ve(() => [
          oe(Od)
        ]),
        heading: ve(() => [...o[22] || (o[22] = [
          q("Ecosystem", -1)
        ])]),
        default: ve(() => [
          o[23] || (o[23] = q(" Get official tools and libraries for your project: ", -1)),
          o[24] || (o[24] = K("a", {
            href: "https://pinia.vuejs.org/",
            target: "_blank",
            rel: "noopener"
          }, "Pinia", -1)),
          o[25] || (o[25] = q(", ", -1)),
          o[26] || (o[26] = K("a", {
            href: "https://router.vuejs.org/",
            target: "_blank",
            rel: "noopener"
          }, "Vue Router", -1)),
          o[27] || (o[27] = q(", ", -1)),
          o[28] || (o[28] = K("a", {
            href: "https://test-utils.vuejs.org/",
            target: "_blank",
            rel: "noopener"
          }, "Vue Test Utils", -1)),
          o[29] || (o[29] = q(", and ", -1)),
          o[30] || (o[30] = K("a", {
            href: "https://github.com/vuejs/devtools",
            target: "_blank",
            rel: "noopener"
          }, "Vue Dev Tools", -1)),
          o[31] || (o[31] = q(". If you need more resources, we suggest paying ", -1)),
          o[32] || (o[32] = K("a", {
            href: "https://github.com/vuejs/awesome-vue",
            target: "_blank",
            rel: "noopener"
          }, "Awesome Vue", -1)),
          o[33] || (o[33] = q(" a visit. ", -1))
        ]),
        _: 1
      }),
      oe(hn, null, {
        icon: ve(() => [
          oe(xd)
        ]),
        heading: ve(() => [...o[34] || (o[34] = [
          q("Community", -1)
        ])]),
        default: ve(() => [
          o[35] || (o[35] = q(" Got stuck? Ask your question on ", -1)),
          o[36] || (o[36] = K("a", {
            href: "https://chat.vuejs.org",
            target: "_blank",
            rel: "noopener"
          }, "Vue Land", -1)),
          o[37] || (o[37] = q(" (our official Discord server), or ", -1)),
          o[38] || (o[38] = K("a", {
            href: "https://stackoverflow.com/questions/tagged/vue.js",
            target: "_blank",
            rel: "noopener"
          }, "StackOverflow", -1)),
          o[39] || (o[39] = q(". You should also follow the official ", -1)),
          o[40] || (o[40] = K("a", {
            href: "https://bsky.app/profile/vuejs.org",
            target: "_blank",
            rel: "noopener"
          }, "@vuejs.org", -1)),
          o[41] || (o[41] = q(" Bluesky account or the ", -1)),
          o[42] || (o[42] = K("a", {
            href: "https://x.com/vuejs",
            target: "_blank",
            rel: "noopener"
          }, "@vuejs", -1)),
          o[43] || (o[43] = q(" X account for latest news in the Vue world. ", -1))
        ]),
        _: 1
      }),
      oe(hn, null, {
        icon: ve(() => [
          oe(Rd)
        ]),
        heading: ve(() => [...o[44] || (o[44] = [
          q("Support Vue", -1)
        ])]),
        default: ve(() => [
          o[45] || (o[45] = q(" As an independent project, Vue relies on community backing for its sustainability. You can help us by ", -1)),
          o[46] || (o[46] = K("a", {
            href: "https://vuejs.org/sponsor/",
            target: "_blank",
            rel: "noopener"
          }, "becoming a sponsor", -1)),
          o[47] || (o[47] = q(". ", -1))
        ]),
        _: 1
      })
    ], 64));
  }
}, Id = {
  __name: "HomeView",
  setup(e) {
    return (t, n) => (He(), ct("main", null, [
      oe(Td)
    ]));
  }
}, Pd = ed({
  history: Cf("/react-vs-vue/vue"),
  routes: [
    {
      path: "/",
      name: "home",
      component: Id
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("./AboutView-DU3VnGx0.js")
    }
  ]
});
let nn = null;
function $d(e) {
  return nn = Eu(ld), nn.use(Pd), nn.mount(e), () => Md();
}
function Md() {
  nn && (nn.unmount(), nn = null);
}
export {
  It as _,
  K as a,
  ct as c,
  $d as m,
  He as o,
  Md as u
};
