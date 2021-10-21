function e(e, t) {
  const n = Object.create(null),
    r = e.split(',')
  for (let o = 0; o < r.length; o++) n[r[o]] = !0
  return t ? (e) => !!n[e.toLowerCase()] : (e) => !!n[e]
}
const t = e(
    'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt',
  ),
  n = e(
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  )
function r(e) {
  if (w(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const o = e[n],
        s = r(C(o) ? i(o) : o)
      if (s) for (const e in s) t[e] = s[e]
    }
    return t
  }
  if (k(e)) return e
}
const o = /;(?![^(]*\))/g,
  s = /:(.+)/
function i(e) {
  const t = {}
  return (
    e.split(o).forEach((e) => {
      if (e) {
        const n = e.split(s)
        n.length > 1 && (t[n[0].trim()] = n[1].trim())
      }
    }),
    t
  )
}
function c(e) {
  let t = ''
  if (C(e)) t = e
  else if (w(e))
    for (let n = 0; n < e.length; n++) {
      const r = c(e[n])
      r && (t += r + ' ')
    }
  else if (k(e)) for (const n in e) e[n] && (t += n + ' ')
  return t.trim()
}
const l = (e) => (null == e ? '' : k(e) ? JSON.stringify(e, a, 2) : String(e)),
  a = (e, t) =>
    x(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (e, [t, n]) => ((e[`${t} =>`] = n), e),
            {},
          ),
        }
      : E(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : !k(t) || w(t) || j(t)
      ? t
      : String(t),
  u = {},
  f = [],
  p = () => {},
  d = () => !1,
  h = /^on[^a-z]/,
  m = (e) => h.test(e),
  g = (e) => e.startsWith('onUpdate:'),
  v = Object.assign,
  y = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  b = Object.prototype.hasOwnProperty,
  _ = (e, t) => b.call(e, t),
  w = Array.isArray,
  x = (e) => '[object Map]' === P(e),
  E = (e) => '[object Set]' === P(e),
  S = (e) => 'function' == typeof e,
  C = (e) => 'string' == typeof e,
  O = (e) => 'symbol' == typeof e,
  k = (e) => null !== e && 'object' == typeof e,
  R = (e) => k(e) && S(e.then) && S(e.catch),
  A = Object.prototype.toString,
  P = (e) => A.call(e),
  j = (e) => '[object Object]' === P(e),
  T = (e) => C(e) && 'NaN' !== e && '-' !== e[0] && '' + parseInt(e, 10) === e,
  N = e(
    ',key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
  ),
  F = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  U = /-(\w)/g,
  $ = F((e) => e.replace(U, (e, t) => (t ? t.toUpperCase() : ''))),
  B = /\B([A-Z])/g,
  L = F((e) => e.replace(B, '-$1').toLowerCase()),
  M = F((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  I = F((e) => (e ? `on${M(e)}` : '')),
  q = (e, t) => e !== t && (e == e || t == t),
  V = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t)
  },
  D = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n })
  },
  z = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  },
  W = new WeakMap(),
  H = []
let J
const G = Symbol(''),
  K = Symbol('')
function X(e, t = u) {
  ;(function (e) {
    return e && !0 === e._isEffect
  })(e) && (e = e.raw)
  const n = (function (e, t) {
    const n = function () {
      if (!n.active) return t.scheduler ? void 0 : e()
      if (!H.includes(n)) {
        Z(n)
        try {
          return te.push(ee), (ee = !0), H.push(n), (J = n), e()
        } finally {
          H.pop(), re(), (J = H[H.length - 1])
        }
      }
    }
    return (
      (n.id = Y++),
      (n.allowRecurse = !!t.allowRecurse),
      (n._isEffect = !0),
      (n.active = !0),
      (n.raw = e),
      (n.deps = []),
      (n.options = t),
      n
    )
  })(e, t)
  return t.lazy || n(), n
}
function Q(e) {
  e.active && (Z(e), e.options.onStop && e.options.onStop(), (e.active = !1))
}
let Y = 0
function Z(e) {
  const { deps: t } = e
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e)
    t.length = 0
  }
}
let ee = !0
const te = []
function ne() {
  te.push(ee), (ee = !1)
}
function re() {
  const e = te.pop()
  ee = void 0 === e || e
}
function oe(e, t, n) {
  if (!ee || void 0 === J) return
  let r = W.get(e)
  r || W.set(e, (r = new Map()))
  let o = r.get(n)
  o || r.set(n, (o = new Set())), o.has(J) || (o.add(J), J.deps.push(o))
}
function se(e, t, n, r, o, s) {
  const i = W.get(e)
  if (!i) return
  const c = new Set(),
    l = (e) => {
      e &&
        e.forEach((e) => {
          ;(e !== J || e.allowRecurse) && c.add(e)
        })
    }
  if ('clear' === t) i.forEach(l)
  else if ('length' === n && w(e))
    i.forEach((e, t) => {
      ;('length' === t || t >= r) && l(e)
    })
  else
    switch ((void 0 !== n && l(i.get(n)), t)) {
      case 'add':
        w(e) ? T(n) && l(i.get('length')) : (l(i.get(G)), x(e) && l(i.get(K)))
        break
      case 'delete':
        w(e) || (l(i.get(G)), x(e) && l(i.get(K)))
        break
      case 'set':
        x(e) && l(i.get(G))
    }
  c.forEach((e) => {
    e.options.scheduler ? e.options.scheduler(e) : e()
  })
}
const ie = e('__proto__,__v_isRef,__isVue'),
  ce = new Set(
    Object.getOwnPropertyNames(Symbol)
      .map((e) => Symbol[e])
      .filter(O),
  ),
  le = de(),
  ae = de(!1, !0),
  ue = de(!0),
  fe = de(!0, !0),
  pe = {}
function de(e = !1, t = !1) {
  return function (n, r, o) {
    if ('__v_isReactive' === r) return !e
    if ('__v_isReadonly' === r) return e
    if ('__v_raw' === r && o === (e ? (t ? De : Ve) : t ? qe : Ie).get(n))
      return n
    const s = w(n)
    if (!e && s && _(pe, r)) return Reflect.get(pe, r, o)
    const i = Reflect.get(n, r, o)
    if (O(r) ? ce.has(r) : ie(r)) return i
    if ((e || oe(n, 0, r), t)) return i
    if (Ze(i)) {
      return !s || !T(r) ? i.value : i
    }
    return k(i) ? (e ? He(i) : We(i)) : i
  }
}
;['includes', 'indexOf', 'lastIndexOf'].forEach((e) => {
  const t = Array.prototype[e]
  pe[e] = function (...e) {
    const n = Qe(this)
    for (let t = 0, o = this.length; t < o; t++) oe(n, 0, t + '')
    const r = t.apply(n, e)
    return -1 === r || !1 === r ? t.apply(n, e.map(Qe)) : r
  }
}),
  ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((e) => {
    const t = Array.prototype[e]
    pe[e] = function (...e) {
      ne()
      const n = t.apply(this, e)
      return re(), n
    }
  })
function he(e = !1) {
  return function (t, n, r, o) {
    let s = t[n]
    if (!e && ((r = Qe(r)), (s = Qe(s)), !w(t) && Ze(s) && !Ze(r)))
      return (s.value = r), !0
    const i = w(t) && T(n) ? Number(n) < t.length : _(t, n),
      c = Reflect.set(t, n, r, o)
    return (
      t === Qe(o) && (i ? q(r, s) && se(t, 'set', n, r) : se(t, 'add', n, r)), c
    )
  }
}
const me = {
    get: le,
    set: he(),
    deleteProperty: function (e, t) {
      const n = _(e, t)
      e[t]
      const r = Reflect.deleteProperty(e, t)
      return r && n && se(e, 'delete', t, void 0), r
    },
    has: function (e, t) {
      const n = Reflect.has(e, t)
      return (O(t) && ce.has(t)) || oe(e, 0, t), n
    },
    ownKeys: function (e) {
      return oe(e, 0, w(e) ? 'length' : G), Reflect.ownKeys(e)
    },
  },
  ge = { get: ue, set: (e, t) => !0, deleteProperty: (e, t) => !0 },
  ve = v({}, me, { get: ae, set: he(!0) })
v({}, ge, { get: fe })
const ye = (e) => (k(e) ? We(e) : e),
  be = (e) => (k(e) ? He(e) : e),
  _e = (e) => e,
  we = (e) => Reflect.getPrototypeOf(e)
function xe(e, t, n = !1, r = !1) {
  const o = Qe((e = e.__v_raw)),
    s = Qe(t)
  t !== s && !n && oe(o, 0, t), !n && oe(o, 0, s)
  const { has: i } = we(o),
    c = r ? _e : n ? be : ye
  return i.call(o, t) ? c(e.get(t)) : i.call(o, s) ? c(e.get(s)) : void 0
}
function Ee(e, t = !1) {
  const n = this.__v_raw,
    r = Qe(n),
    o = Qe(e)
  return (
    e !== o && !t && oe(r, 0, e),
    !t && oe(r, 0, o),
    e === o ? n.has(e) : n.has(e) || n.has(o)
  )
}
function Se(e, t = !1) {
  return (e = e.__v_raw), !t && oe(Qe(e), 0, G), Reflect.get(e, 'size', e)
}
function Ce(e) {
  e = Qe(e)
  const t = Qe(this)
  return we(t).has.call(t, e) || (t.add(e), se(t, 'add', e, e)), this
}
function Oe(e, t) {
  t = Qe(t)
  const n = Qe(this),
    { has: r, get: o } = we(n)
  let s = r.call(n, e)
  s || ((e = Qe(e)), (s = r.call(n, e)))
  const i = o.call(n, e)
  return (
    n.set(e, t), s ? q(t, i) && se(n, 'set', e, t) : se(n, 'add', e, t), this
  )
}
function ke(e) {
  const t = Qe(this),
    { has: n, get: r } = we(t)
  let o = n.call(t, e)
  o || ((e = Qe(e)), (o = n.call(t, e))), r && r.call(t, e)
  const s = t.delete(e)
  return o && se(t, 'delete', e, void 0), s
}
function Re() {
  const e = Qe(this),
    t = 0 !== e.size,
    n = e.clear()
  return t && se(e, 'clear', void 0, void 0), n
}
function Ae(e, t) {
  return function (n, r) {
    const o = this,
      s = o.__v_raw,
      i = Qe(s),
      c = t ? _e : e ? be : ye
    return !e && oe(i, 0, G), s.forEach((e, t) => n.call(r, c(e), c(t), o))
  }
}
function Pe(e, t, n) {
  return function (...r) {
    const o = this.__v_raw,
      s = Qe(o),
      i = x(s),
      c = 'entries' === e || (e === Symbol.iterator && i),
      l = 'keys' === e && i,
      a = o[e](...r),
      u = n ? _e : t ? be : ye
    return (
      !t && oe(s, 0, l ? K : G),
      {
        next() {
          const { value: e, done: t } = a.next()
          return t
            ? { value: e, done: t }
            : { value: c ? [u(e[0]), u(e[1])] : u(e), done: t }
        },
        [Symbol.iterator]() {
          return this
        },
      }
    )
  }
}
function je(e) {
  return function (...t) {
    return 'delete' !== e && this
  }
}
const Te = {
    get(e) {
      return xe(this, e)
    },
    get size() {
      return Se(this)
    },
    has: Ee,
    add: Ce,
    set: Oe,
    delete: ke,
    clear: Re,
    forEach: Ae(!1, !1),
  },
  Ne = {
    get(e) {
      return xe(this, e, !1, !0)
    },
    get size() {
      return Se(this)
    },
    has: Ee,
    add: Ce,
    set: Oe,
    delete: ke,
    clear: Re,
    forEach: Ae(!1, !0),
  },
  Fe = {
    get(e) {
      return xe(this, e, !0)
    },
    get size() {
      return Se(this, !0)
    },
    has(e) {
      return Ee.call(this, e, !0)
    },
    add: je('add'),
    set: je('set'),
    delete: je('delete'),
    clear: je('clear'),
    forEach: Ae(!0, !1),
  },
  Ue = {
    get(e) {
      return xe(this, e, !0, !0)
    },
    get size() {
      return Se(this, !0)
    },
    has(e) {
      return Ee.call(this, e, !0)
    },
    add: je('add'),
    set: je('set'),
    delete: je('delete'),
    clear: je('clear'),
    forEach: Ae(!0, !0),
  }
function $e(e, t) {
  const n = t ? (e ? Ue : Ne) : e ? Fe : Te
  return (t, r, o) =>
    '__v_isReactive' === r
      ? !e
      : '__v_isReadonly' === r
      ? e
      : '__v_raw' === r
      ? t
      : Reflect.get(_(n, r) && r in t ? n : t, r, o)
}
;['keys', 'values', 'entries', Symbol.iterator].forEach((e) => {
  ;(Te[e] = Pe(e, !1, !1)),
    (Fe[e] = Pe(e, !0, !1)),
    (Ne[e] = Pe(e, !1, !0)),
    (Ue[e] = Pe(e, !0, !0))
})
const Be = { get: $e(!1, !1) },
  Le = { get: $e(!1, !0) },
  Me = { get: $e(!0, !1) },
  Ie = new WeakMap(),
  qe = new WeakMap(),
  Ve = new WeakMap(),
  De = new WeakMap()
function ze(e) {
  return e.__v_skip || !Object.isExtensible(e)
    ? 0
    : (function (e) {
        switch (e) {
          case 'Object':
          case 'Array':
            return 1
          case 'Map':
          case 'Set':
          case 'WeakMap':
          case 'WeakSet':
            return 2
          default:
            return 0
        }
      })(((e) => P(e).slice(8, -1))(e))
}
function We(e) {
  return e && e.__v_isReadonly ? e : Je(e, !1, me, Be, Ie)
}
function He(e) {
  return Je(e, !0, ge, Me, Ve)
}
function Je(e, t, n, r, o) {
  if (!k(e)) return e
  if (e.__v_raw && (!t || !e.__v_isReactive)) return e
  const s = o.get(e)
  if (s) return s
  const i = ze(e)
  if (0 === i) return e
  const c = new Proxy(e, 2 === i ? r : n)
  return o.set(e, c), c
}
function Ge(e) {
  return Ke(e) ? Ge(e.__v_raw) : !(!e || !e.__v_isReactive)
}
function Ke(e) {
  return !(!e || !e.__v_isReadonly)
}
function Xe(e) {
  return Ge(e) || Ke(e)
}
function Qe(e) {
  return (e && Qe(e.__v_raw)) || e
}
const Ye = (e) => (k(e) ? We(e) : e)
function Ze(e) {
  return Boolean(e && !0 === e.__v_isRef)
}
function et(e) {
  return nt(e)
}
class tt {
  constructor(e, t = !1) {
    ;(this._rawValue = e),
      (this._shallow = t),
      (this.__v_isRef = !0),
      (this._value = t ? e : Ye(e))
  }
  get value() {
    return oe(Qe(this), 0, 'value'), this._value
  }
  set value(e) {
    q(Qe(e), this._rawValue) &&
      ((this._rawValue = e),
      (this._value = this._shallow ? e : Ye(e)),
      se(Qe(this), 'set', 'value', e))
  }
}
function nt(e, t = !1) {
  return Ze(e) ? e : new tt(e, t)
}
function rt(e) {
  return Ze(e) ? e.value : e
}
const ot = {
  get: (e, t, n) => rt(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t]
    return Ze(o) && !Ze(n) ? ((o.value = n), !0) : Reflect.set(e, t, n, r)
  },
}
function st(e) {
  return Ge(e) ? e : new Proxy(e, ot)
}
class it {
  constructor(e, t) {
    ;(this._object = e), (this._key = t), (this.__v_isRef = !0)
  }
  get value() {
    return this._object[this._key]
  }
  set value(e) {
    this._object[this._key] = e
  }
}
class ct {
  constructor(e, t, n) {
    ;(this._setter = t),
      (this._dirty = !0),
      (this.__v_isRef = !0),
      (this.effect = X(e, {
        lazy: !0,
        scheduler: () => {
          this._dirty || ((this._dirty = !0), se(Qe(this), 'set', 'value'))
        },
      })),
      (this.__v_isReadonly = n)
  }
  get value() {
    const e = Qe(this)
    return (
      e._dirty && ((e._value = this.effect()), (e._dirty = !1)),
      oe(e, 0, 'value'),
      e._value
    )
  }
  set value(e) {
    this._setter(e)
  }
}
function lt(e, t, n, r) {
  let o
  try {
    o = r ? e(...r) : e()
  } catch (s) {
    ut(s, t, n)
  }
  return o
}
function at(e, t, n, r) {
  if (S(e)) {
    const o = lt(e, t, n, r)
    return (
      o &&
        R(o) &&
        o.catch((e) => {
          ut(e, t, n)
        }),
      o
    )
  }
  const o = []
  for (let s = 0; s < e.length; s++) o.push(at(e[s], t, n, r))
  return o
}
function ut(e, t, n, r = !0) {
  t && t.vnode
  if (t) {
    let r = t.parent
    const o = t.proxy,
      s = n
    for (; r; ) {
      const t = r.ec
      if (t) for (let n = 0; n < t.length; n++) if (!1 === t[n](e, o, s)) return
      r = r.parent
    }
    const i = t.appContext.config.errorHandler
    if (i) return void lt(i, null, 10, [e, o, s])
  }
  !(function (e, t, n, r = !0) {
    console.error(e)
  })(e, 0, 0, r)
}
let ft = !1,
  pt = !1
const dt = []
let ht = 0
const mt = []
let gt = null,
  vt = 0
const yt = []
let bt = null,
  _t = 0
const wt = Promise.resolve()
let xt = null,
  Et = null
function St(e) {
  const t = xt || wt
  return e ? t.then(this ? e.bind(this) : e) : t
}
function Ct(e) {
  if (
    !(
      (dt.length && dt.includes(e, ft && e.allowRecurse ? ht + 1 : ht)) ||
      e === Et
    )
  ) {
    const t = (function (e) {
      let t = ht + 1,
        n = dt.length
      const r = Pt(e)
      for (; t < n; ) {
        const e = (t + n) >>> 1
        Pt(dt[e]) < r ? (t = e + 1) : (n = e)
      }
      return t
    })(e)
    t > -1 ? dt.splice(t, 0, e) : dt.push(e), Ot()
  }
}
function Ot() {
  ft || pt || ((pt = !0), (xt = wt.then(jt)))
}
function kt(e, t, n, r) {
  w(e)
    ? n.push(...e)
    : (t && t.includes(e, e.allowRecurse ? r + 1 : r)) || n.push(e),
    Ot()
}
function Rt(e, t = null) {
  if (mt.length) {
    for (
      Et = t, gt = [...new Set(mt)], mt.length = 0, vt = 0;
      vt < gt.length;
      vt++
    )
      gt[vt]()
    ;(gt = null), (vt = 0), (Et = null), Rt(e, t)
  }
}
function At(e) {
  if (yt.length) {
    const e = [...new Set(yt)]
    if (((yt.length = 0), bt)) return void bt.push(...e)
    for (bt = e, bt.sort((e, t) => Pt(e) - Pt(t)), _t = 0; _t < bt.length; _t++)
      bt[_t]()
    ;(bt = null), (_t = 0)
  }
}
const Pt = (e) => (null == e.id ? 1 / 0 : e.id)
function jt(e) {
  ;(pt = !1), (ft = !0), Rt(e), dt.sort((e, t) => Pt(e) - Pt(t))
  try {
    for (ht = 0; ht < dt.length; ht++) {
      const e = dt[ht]
      e && lt(e, null, 14)
    }
  } finally {
    ;(ht = 0),
      (dt.length = 0),
      At(),
      (ft = !1),
      (xt = null),
      (dt.length || yt.length) && jt(e)
  }
}
function Tt(e, t, ...n) {
  const r = e.vnode.props || u
  let o = n
  const s = t.startsWith('update:'),
    i = s && t.slice(7)
  if (i && i in r) {
    const e = `${'modelValue' === i ? 'model' : i}Modifiers`,
      { number: t, trim: s } = r[e] || u
    s ? (o = n.map((e) => e.trim())) : t && (o = n.map(z))
  }
  let c,
    l = r[(c = I(t))] || r[(c = I($(t)))]
  !l && s && (l = r[(c = I(L(t)))]), l && at(l, e, 6, o)
  const a = r[c + 'Once']
  if (a) {
    if (e.emitted) {
      if (e.emitted[c]) return
    } else (e.emitted = {})[c] = !0
    at(a, e, 6, o)
  }
}
function Nt(e, t, n = !1) {
  if (!t.deopt && void 0 !== e.__emits) return e.__emits
  const r = e.emits
  let o = {},
    s = !1
  if (!S(e)) {
    const r = (e) => {
      const n = Nt(e, t, !0)
      n && ((s = !0), v(o, n))
    }
    !n && t.mixins.length && t.mixins.forEach(r),
      e.extends && r(e.extends),
      e.mixins && e.mixins.forEach(r)
  }
  return r || s
    ? (w(r) ? r.forEach((e) => (o[e] = null)) : v(o, r), (e.__emits = o))
    : (e.__emits = null)
}
function Ft(e, t) {
  return (
    !(!e || !m(t)) &&
    ((t = t.slice(2).replace(/Once$/, '')),
    _(e, t[0].toLowerCase() + t.slice(1)) || _(e, L(t)) || _(e, t))
  )
}
let Ut = 0
const $t = (e) => (Ut += e)
let Bt = null,
  Lt = null
function Mt(e) {
  const t = Bt
  return (Bt = e), (Lt = (e && e.type.__scopeId) || null), t
}
function It(e, t = Bt) {
  if (!t) return e
  const n = (...n) => {
    Ut || Wn(!0)
    const r = Mt(t),
      o = e(...n)
    return Mt(r), Ut || Hn(), o
  }
  return (n._c = !0), n
}
function qt(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: o,
    props: s,
    propsOptions: [i],
    slots: c,
    attrs: l,
    emit: a,
    render: u,
    renderCache: f,
    data: p,
    setupState: d,
    ctx: h,
  } = e
  let m
  const v = Mt(e)
  try {
    let e
    if (4 & n.shapeFlag) {
      const t = o || r
      ;(m = rr(u.call(t, t, f, s, d, p, h))), (e = l)
    } else {
      const n = t
      0,
        (m = rr(
          n.length > 1 ? n(s, { attrs: l, slots: c, emit: a }) : n(s, null),
        )),
        (e = t.props ? l : Dt(l))
    }
    let v = m
    if (!1 !== t.inheritAttrs && e) {
      const t = Object.keys(e),
        { shapeFlag: n } = v
      t.length &&
        (1 & n || 6 & n) &&
        (i && t.some(g) && (e = zt(e, i)), (v = er(v, e)))
    }
    n.dirs && (v.dirs = v.dirs ? v.dirs.concat(n.dirs) : n.dirs),
      n.transition && (v.transition = n.transition),
      (m = v)
  } catch (y) {
    ;(Dn.length = 0), ut(y, e, 1), (m = Zn(qn))
  }
  return Mt(v), m
}
function Vt(e) {
  let t
  for (let n = 0; n < e.length; n++) {
    const r = e[n]
    if (!Gn(r)) return
    if (r.type !== qn || 'v-if' === r.children) {
      if (t) return
      t = r
    }
  }
  return t
}
const Dt = (e) => {
    let t
    for (const n in e)
      ('class' === n || 'style' === n || m(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  zt = (e, t) => {
    const n = {}
    for (const r in e) (g(r) && r.slice(9) in t) || (n[r] = e[r])
    return n
  }
function Wt(e, t, n) {
  const r = Object.keys(t)
  if (r.length !== Object.keys(e).length) return !0
  for (let o = 0; o < r.length; o++) {
    const s = r[o]
    if (t[s] !== e[s] && !Ft(n, s)) return !0
  }
  return !1
}
function Ht(e) {
  if ((S(e) && (e = e()), w(e))) {
    e = Vt(e)
  }
  return rr(e)
}
function Jt(e, t, n, r = !1) {
  const o = {},
    s = {}
  D(s, Xn, 1),
    (e.propsDefaults = Object.create(null)),
    Gt(e, t, o, s),
    n
      ? (e.props = r ? o : Je(o, !1, ve, Le, qe))
      : e.type.props
      ? (e.props = o)
      : (e.props = s),
    (e.attrs = s)
}
function Gt(e, t, n, r) {
  const [o, s] = e.propsOptions
  if (t)
    for (const i in t) {
      const s = t[i]
      if (N(i)) continue
      let c
      o && _(o, (c = $(i))) ? (n[c] = s) : Ft(e.emitsOptions, i) || (r[i] = s)
    }
  if (s) {
    const t = Qe(n)
    for (let r = 0; r < s.length; r++) {
      const i = s[r]
      n[i] = Kt(o, t, i, t[i], e)
    }
  }
}
function Kt(e, t, n, r, o) {
  const s = e[n]
  if (null != s) {
    const e = _(s, 'default')
    if (e && void 0 === r) {
      const e = s.default
      if (s.type !== Function && S(e)) {
        const { propsDefaults: s } = o
        n in s ? (r = s[n]) : (Er(o), (r = s[n] = e(t)), Er(null))
      } else r = e
    }
    s[0] &&
      (_(t, n) || e ? !s[1] || ('' !== r && r !== L(n)) || (r = !0) : (r = !1))
  }
  return r
}
function Xt(e, t, n = !1) {
  if (!t.deopt && e.__props) return e.__props
  const r = e.props,
    o = {},
    s = []
  let i = !1
  if (!S(e)) {
    const r = (e) => {
      i = !0
      const [n, r] = Xt(e, t, !0)
      v(o, n), r && s.push(...r)
    }
    !n && t.mixins.length && t.mixins.forEach(r),
      e.extends && r(e.extends),
      e.mixins && e.mixins.forEach(r)
  }
  if (!r && !i) return (e.__props = f)
  if (w(r))
    for (let c = 0; c < r.length; c++) {
      const e = $(r[c])
      Qt(e) && (o[e] = u)
    }
  else if (r)
    for (const c in r) {
      const e = $(c)
      if (Qt(e)) {
        const t = r[c],
          n = (o[e] = w(t) || S(t) ? { type: t } : t)
        if (n) {
          const t = en(Boolean, n.type),
            r = en(String, n.type)
          ;(n[0] = t > -1),
            (n[1] = r < 0 || t < r),
            (t > -1 || _(n, 'default')) && s.push(e)
        }
      }
    }
  return (e.__props = [o, s])
}
function Qt(e) {
  return '$' !== e[0]
}
function Yt(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/)
  return t ? t[1] : ''
}
function Zt(e, t) {
  return Yt(e) === Yt(t)
}
function en(e, t) {
  return w(t) ? t.findIndex((t) => Zt(t, e)) : S(t) && Zt(t, e) ? 0 : -1
}
function tn(e, t, n = xr, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []),
      s =
        t.__weh ||
        (t.__weh = (...r) => {
          if (n.isUnmounted) return
          ne(), Er(n)
          const o = at(t, n, e, r)
          return Er(null), re(), o
        })
    return r ? o.unshift(s) : o.push(s), s
  }
}
const nn =
    (e) =>
    (t, n = xr) =>
      !Cr && tn(e, t, n),
  rn = nn('bm'),
  on = nn('m'),
  sn = nn('bu'),
  cn = nn('u'),
  ln = nn('bum'),
  an = nn('um'),
  un = nn('rtg'),
  fn = nn('rtc'),
  pn = {}
function dn(e, t, n) {
  return hn(e, t, n)
}
function hn(
  e,
  t,
  { immediate: n, deep: r, flush: o, onTrack: s, onTrigger: i } = u,
  c = xr,
) {
  let l,
    a,
    f = !1
  if (
    (Ze(e)
      ? ((l = () => e.value), (f = !!e._shallow))
      : Ge(e)
      ? ((l = () => e), (r = !0))
      : (l = w(e)
          ? () =>
              e.map((e) =>
                Ze(e)
                  ? e.value
                  : Ge(e)
                  ? gn(e)
                  : S(e)
                  ? lt(e, c, 2, [c && c.proxy])
                  : void 0,
              )
          : S(e)
          ? t
            ? () => lt(e, c, 2, [c && c.proxy])
            : () => {
                if (!c || !c.isUnmounted) return a && a(), at(e, c, 3, [d])
              }
          : p),
    t && r)
  ) {
    const e = l
    l = () => gn(e())
  }
  let d = (e) => {
      a = v.options.onStop = () => {
        lt(e, c, 4)
      }
    },
    h = w(e) ? [] : pn
  const m = () => {
    if (v.active)
      if (t) {
        const e = v()
        ;(r || f || q(e, h)) &&
          (a && a(), at(t, c, 3, [e, h === pn ? void 0 : h, d]), (h = e))
      } else v()
  }
  let g
  ;(m.allowRecurse = !!t),
    (g =
      'sync' === o
        ? m
        : 'post' === o
        ? () => jn(m, c && c.suspense)
        : () => {
            !c || c.isMounted
              ? (function (e) {
                  kt(e, gt, mt, vt)
                })(m)
              : m()
          })
  const v = X(l, { lazy: !0, onTrack: s, onTrigger: i, scheduler: g })
  return (
    Rr(v, c),
    t ? (n ? m() : (h = v())) : 'post' === o ? jn(v, c && c.suspense) : v(),
    () => {
      Q(v), c && y(c.effects, v)
    }
  )
}
function mn(e, t, n) {
  const r = this.proxy
  return hn(C(e) ? () => r[e] : e.bind(r), t.bind(r), n, this)
}
function gn(e, t = new Set()) {
  if (!k(e) || t.has(e)) return e
  if ((t.add(e), Ze(e))) gn(e.value, t)
  else if (w(e)) for (let n = 0; n < e.length; n++) gn(e[n], t)
  else if (E(e) || x(e))
    e.forEach((e) => {
      gn(e, t)
    })
  else for (const n in e) gn(e[n], t)
  return e
}
const vn = (e) => e.type.__isKeepAlive
function yn(e, t, n = xr) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let t = n
      for (; t; ) {
        if (t.isDeactivated) return
        t = t.parent
      }
      e()
    })
  if ((tn(t, r, n), n)) {
    let e = n.parent
    for (; e && e.parent; ) vn(e.parent.vnode) && bn(r, t, n, e), (e = e.parent)
  }
}
function bn(e, t, n, r) {
  const o = tn(t, e, r, !0)
  an(() => {
    y(r[t], o)
  }, n)
}
const _n = (e) => '_' === e[0] || '$stable' === e,
  wn = (e) => (w(e) ? e.map(rr) : [rr(e)]),
  xn = (e, t, n) => It((e) => wn(t(e)), n),
  En = (e, t) => {
    const n = e._ctx
    for (const r in e) {
      if (_n(r)) continue
      const o = e[r]
      if (S(o)) t[r] = xn(0, o, n)
      else if (null != o) {
        const e = wn(o)
        t[r] = () => e
      }
    }
  },
  Sn = (e, t) => {
    const n = wn(t)
    e.slots.default = () => n
  }
function Cn(e, t, n, r) {
  const o = e.dirs,
    s = t && t.dirs
  for (let i = 0; i < o.length; i++) {
    const c = o[i]
    s && (c.oldValue = s[i].value)
    const l = c.dir[r]
    l && at(l, n, 8, [e.el, c, e, t])
  }
}
function On() {
  return {
    app: null,
    config: {
      isNativeTag: d,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      isCustomElement: d,
      errorHandler: void 0,
      warnHandler: void 0,
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
  }
}
let kn = 0
function Rn(e, t) {
  return function (n, r = null) {
    null == r || k(r) || (r = null)
    const o = On(),
      s = new Set()
    let i = !1
    const c = (o.app = {
      _uid: kn++,
      _component: n,
      _props: r,
      _container: null,
      _context: o,
      version: Nr,
      get config() {
        return o.config
      },
      set config(e) {},
      use: (e, ...t) => (
        s.has(e) ||
          (e && S(e.install)
            ? (s.add(e), e.install(c, ...t))
            : S(e) && (s.add(e), e(c, ...t))),
        c
      ),
      mixin: (e) => (
        o.mixins.includes(e) ||
          (o.mixins.push(e), (e.props || e.emits) && (o.deopt = !0)),
        c
      ),
      component: (e, t) => (t ? ((o.components[e] = t), c) : o.components[e]),
      directive: (e, t) => (t ? ((o.directives[e] = t), c) : o.directives[e]),
      mount(s, l, a) {
        if (!i) {
          const u = Zn(n, r)
          return (
            (u.appContext = o),
            l && t ? t(u, s) : e(u, s, a),
            (i = !0),
            (c._container = s),
            (s.__vue_app__ = c),
            u.component.proxy
          )
        }
      },
      unmount() {
        i && (e(null, c._container), delete c._container.__vue_app__)
      },
      provide: (e, t) => ((o.provides[e] = t), c),
    })
    return c
  }
}
function An(e) {
  return S(e) ? { setup: e, name: e.name } : e
}
const Pn = { scheduler: Ct, allowRecurse: !0 },
  jn = function (e, t) {
    t && t.pendingBranch
      ? w(e)
        ? t.effects.push(...e)
        : t.effects.push(e)
      : kt(e, bt, yt, _t)
  },
  Tn = (e, t, n, r) => {
    if (w(e))
      return void e.forEach((e, o) => Tn(e, t && (w(t) ? t[o] : t), n, r))
    let o
    if (r) {
      if (r.type.__asyncLoader) return
      o = 4 & r.shapeFlag ? r.component.exposed || r.component.proxy : r.el
    } else o = null
    const { i: s, r: i } = e,
      c = t && t.r,
      l = s.refs === u ? (s.refs = {}) : s.refs,
      a = s.setupState
    if (
      (null != c &&
        c !== i &&
        (C(c)
          ? ((l[c] = null), _(a, c) && (a[c] = null))
          : Ze(c) && (c.value = null)),
      C(i))
    ) {
      const e = () => {
        ;(l[i] = o), _(a, i) && (a[i] = o)
      }
      o ? ((e.id = -1), jn(e, n)) : e()
    } else if (Ze(i)) {
      const e = () => {
        i.value = o
      }
      o ? ((e.id = -1), jn(e, n)) : e()
    } else S(i) && lt(i, s, 12, [o, l])
  }
function Nn(e) {
  return (function (e, t) {
    const {
        insert: n,
        remove: r,
        patchProp: o,
        forcePatchProp: s,
        createElement: i,
        createText: c,
        createComment: l,
        setText: a,
        setElementText: d,
        parentNode: h,
        nextSibling: m,
        setScopeId: g = p,
        cloneNode: y,
        insertStaticContent: b,
      } = e,
      w = (e, t, n, r = null, o = null, s = null, i = !1, c = null, l = !1) => {
        e && !Kn(e, t) && ((r = ie(e)), Y(e, o, s, !0), (e = null)),
          -2 === t.patchFlag && ((l = !1), (t.dynamicChildren = null))
        const { type: a, ref: u, shapeFlag: f } = t
        switch (a) {
          case In:
            x(e, t, n, r)
            break
          case qn:
            E(e, t, n, r)
            break
          case Vn:
            null == e && S(t, n, r, i)
            break
          case Mn:
            B(e, t, n, r, o, s, i, c, l)
            break
          default:
            1 & f
              ? k(e, t, n, r, o, s, i, c, l)
              : 6 & f
              ? M(e, t, n, r, o, s, i, c, l)
              : (64 & f || 128 & f) && a.process(e, t, n, r, o, s, i, c, l, le)
        }
        null != u && o && Tn(u, e && e.ref, s, t)
      },
      x = (e, t, r, o) => {
        if (null == e) n((t.el = c(t.children)), r, o)
        else {
          const n = (t.el = e.el)
          t.children !== e.children && a(n, t.children)
        }
      },
      E = (e, t, r, o) => {
        null == e ? n((t.el = l(t.children || '')), r, o) : (t.el = e.el)
      },
      S = (e, t, n, r) => {
        ;[e.el, e.anchor] = b(e.children, t, n, r)
      },
      C = ({ el: e, anchor: t }, r, o) => {
        let s
        for (; e && e !== t; ) (s = m(e)), n(e, r, o), (e = s)
        n(t, r, o)
      },
      O = ({ el: e, anchor: t }) => {
        let n
        for (; e && e !== t; ) (n = m(e)), r(e), (e = n)
        r(t)
      },
      k = (e, t, n, r, o, s, i, c, l) => {
        ;(i = i || 'svg' === t.type),
          null == e ? A(t, n, r, o, s, i, c, l) : T(e, t, o, s, i, c, l)
      },
      A = (e, t, r, s, c, l, a, u) => {
        let f, p
        const {
          type: h,
          props: m,
          shapeFlag: g,
          transition: v,
          patchFlag: b,
          dirs: _,
        } = e
        if (e.el && void 0 !== y && -1 === b) f = e.el = y(e.el)
        else {
          if (
            ((f = e.el = i(e.type, l, m && m.is, m)),
            8 & g
              ? d(f, e.children)
              : 16 & g &&
                j(
                  e.children,
                  f,
                  null,
                  s,
                  c,
                  l && 'foreignObject' !== h,
                  a,
                  u || !!e.dynamicChildren,
                ),
            _ && Cn(e, null, s, 'created'),
            m)
          ) {
            for (const t in m)
              N(t) || o(f, t, null, m[t], l, e.children, s, c, oe)
            ;(p = m.onVnodeBeforeMount) && Fn(p, s, e)
          }
          P(f, e, e.scopeId, a, s)
        }
        _ && Cn(e, null, s, 'beforeMount')
        const w = (!c || (c && !c.pendingBranch)) && v && !v.persisted
        w && v.beforeEnter(f),
          n(f, t, r),
          ((p = m && m.onVnodeMounted) || w || _) &&
            jn(() => {
              p && Fn(p, s, e), w && v.enter(f), _ && Cn(e, null, s, 'mounted')
            }, c)
      },
      P = (e, t, n, r, o) => {
        if ((n && g(e, n), r)) for (let s = 0; s < r.length; s++) g(e, r[s])
        if (o) {
          if (t === o.subTree) {
            const t = o.vnode
            P(e, t, t.scopeId, t.slotScopeIds, o.parent)
          }
        }
      },
      j = (e, t, n, r, o, s, i, c, l = 0) => {
        for (let a = l; a < e.length; a++) {
          const l = (e[a] = i ? or(e[a]) : rr(e[a]))
          w(null, l, t, n, r, o, s, i, c)
        }
      },
      T = (e, t, n, r, i, c, l) => {
        const a = (t.el = e.el)
        let { patchFlag: f, dynamicChildren: p, dirs: h } = t
        f |= 16 & e.patchFlag
        const m = e.props || u,
          g = t.props || u
        let v
        if (
          ((v = g.onVnodeBeforeUpdate) && Fn(v, n, t, e),
          h && Cn(t, e, n, 'beforeUpdate'),
          f > 0)
        ) {
          if (16 & f) U(a, t, m, g, n, r, i)
          else if (
            (2 & f && m.class !== g.class && o(a, 'class', null, g.class, i),
            4 & f && o(a, 'style', m.style, g.style, i),
            8 & f)
          ) {
            const c = t.dynamicProps
            for (let t = 0; t < c.length; t++) {
              const l = c[t],
                u = m[l],
                f = g[l]
              ;(f !== u || (s && s(a, l))) &&
                o(a, l, u, f, i, e.children, n, r, oe)
            }
          }
          1 & f && e.children !== t.children && d(a, t.children)
        } else l || null != p || U(a, t, m, g, n, r, i)
        const y = i && 'foreignObject' !== t.type
        p
          ? F(e.dynamicChildren, p, a, n, r, y, c)
          : l || H(e, t, a, null, n, r, y, c, !1),
          ((v = g.onVnodeUpdated) || h) &&
            jn(() => {
              v && Fn(v, n, t, e), h && Cn(t, e, n, 'updated')
            }, r)
      },
      F = (e, t, n, r, o, s, i) => {
        for (let c = 0; c < t.length; c++) {
          const l = e[c],
            a = t[c],
            u =
              l.type === Mn || !Kn(l, a) || 6 & l.shapeFlag || 64 & l.shapeFlag
                ? h(l.el)
                : n
          w(l, a, u, null, r, o, s, i, !0)
        }
      },
      U = (e, t, n, r, i, c, l) => {
        if (n !== r) {
          for (const a in r) {
            if (N(a)) continue
            const u = r[a],
              f = n[a]
            ;(u !== f || (s && s(e, a))) &&
              o(e, a, f, u, l, t.children, i, c, oe)
          }
          if (n !== u)
            for (const s in n)
              N(s) || s in r || o(e, s, n[s], null, l, t.children, i, c, oe)
        }
      },
      B = (e, t, r, o, s, i, l, a, u) => {
        const f = (t.el = e ? e.el : c('')),
          p = (t.anchor = e ? e.anchor : c(''))
        let { patchFlag: d, dynamicChildren: h, slotScopeIds: m } = t
        d > 0 && (u = !0),
          m && (a = a ? a.concat(m) : m),
          null == e
            ? (n(f, r, o), n(p, r, o), j(t.children, r, p, s, i, l, a, u))
            : d > 0 && 64 & d && h && e.dynamicChildren
            ? (F(e.dynamicChildren, h, r, s, i, l, a),
              (null != t.key || (s && t === s.subTree)) && Un(e, t, !0))
            : H(e, t, r, p, s, i, l, a, u)
      },
      M = (e, t, n, r, o, s, i, c, l) => {
        ;(t.slotScopeIds = c),
          null == e
            ? 512 & t.shapeFlag
              ? o.ctx.activate(t, n, r, i, l)
              : I(t, n, r, o, s, i, l)
            : q(e, t, l)
      },
      I = (e, t, n, r, o, s, i) => {
        const c = (e.component = (function (e, t, n) {
          const r = e.type,
            o = (t ? t.appContext : e.appContext) || _r,
            s = {
              uid: wr++,
              vnode: e,
              type: r,
              parent: t,
              appContext: o,
              root: null,
              next: null,
              subTree: null,
              update: null,
              render: null,
              proxy: null,
              exposed: null,
              withProxy: null,
              effects: null,
              provides: t ? t.provides : Object.create(o.provides),
              accessCache: null,
              renderCache: [],
              components: null,
              directives: null,
              propsOptions: Xt(r, o),
              emitsOptions: Nt(r, o),
              emit: null,
              emitted: null,
              propsDefaults: u,
              ctx: u,
              data: u,
              props: u,
              attrs: u,
              slots: u,
              refs: u,
              setupState: u,
              setupContext: null,
              suspense: n,
              suspenseId: n ? n.pendingId : 0,
              asyncDep: null,
              asyncResolved: !1,
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
            }
          return (
            (s.ctx = { _: s }),
            (s.root = t ? t.root : s),
            (s.emit = Tt.bind(null, s)),
            s
          )
        })(e, r, o))
        if (
          (vn(e) && (c.ctx.renderer = le),
          (function (e, t = !1) {
            Cr = t
            const { props: n, children: r } = e.vnode,
              o = Sr(e)
            Jt(e, n, o, t),
              ((e, t) => {
                if (32 & e.vnode.shapeFlag) {
                  const n = t._
                  n ? ((e.slots = t), D(t, '_', n)) : En(t, (e.slots = {}))
                } else (e.slots = {}), t && Sn(e, t)
                D(e.slots, Xn, 1)
              })(e, r)
            const s = o
              ? (function (e, t) {
                  const n = e.type
                  ;(e.accessCache = Object.create(null)),
                    (e.proxy = new Proxy(e.ctx, yr))
                  const { setup: r } = n
                  if (r) {
                    const n = (e.setupContext =
                      r.length > 1
                        ? (function (e) {
                            const t = (t) => {
                              e.exposed = st(t)
                            }
                            return {
                              attrs: e.attrs,
                              slots: e.slots,
                              emit: e.emit,
                              expose: t,
                            }
                          })(e)
                        : null)
                    ;(xr = e), ne()
                    const o = lt(r, e, 0, [e.props, n])
                    if ((re(), (xr = null), R(o))) {
                      if (t)
                        return o
                          .then((t) => {
                            Or(e, t)
                          })
                          .catch((t) => {
                            ut(t, e, 0)
                          })
                      e.asyncDep = o
                    } else Or(e, o)
                  } else kr(e)
                })(e, t)
              : void 0
            Cr = !1
          })(c),
          c.asyncDep)
        ) {
          if ((o && o.registerDep(c, z), !e.el)) {
            const e = (c.subTree = Zn(qn))
            E(null, e, t, n)
          }
        } else z(c, e, t, n, o, s, i)
      },
      q = (e, t, n) => {
        const r = (t.component = e.component)
        if (
          (function (e, t, n) {
            const { props: r, children: o, component: s } = e,
              { props: i, children: c, patchFlag: l } = t,
              a = s.emitsOptions
            if (t.dirs || t.transition) return !0
            if (!(n && l >= 0))
              return (
                !((!o && !c) || (c && c.$stable)) ||
                (r !== i && (r ? !i || Wt(r, i, a) : !!i))
              )
            if (1024 & l) return !0
            if (16 & l) return r ? Wt(r, i, a) : !!i
            if (8 & l) {
              const e = t.dynamicProps
              for (let t = 0; t < e.length; t++) {
                const n = e[t]
                if (i[n] !== r[n] && !Ft(a, n)) return !0
              }
            }
            return !1
          })(e, t, n)
        ) {
          if (r.asyncDep && !r.asyncResolved) return void W(r, t, n)
          ;(r.next = t),
            (function (e) {
              const t = dt.indexOf(e)
              t > ht && dt.splice(t, 1)
            })(r.update),
            r.update()
        } else (t.component = e.component), (t.el = e.el), (r.vnode = t)
      },
      z = (e, t, n, r, o, s, i) => {
        e.update = X(function () {
          if (e.isMounted) {
            let t,
              { next: n, bu: r, u: c, parent: l, vnode: a } = e,
              u = n
            n ? ((n.el = a.el), W(e, n, i)) : (n = a),
              r && V(r),
              (t = n.props && n.props.onVnodeBeforeUpdate) && Fn(t, l, n, a)
            const f = qt(e),
              p = e.subTree
            ;(e.subTree = f),
              w(p, f, h(p.el), ie(p), e, o, s),
              (n.el = f.el),
              null === u &&
                (function ({ vnode: e, parent: t }, n) {
                  for (; t && t.subTree === e; )
                    ((e = t.vnode).el = n), (t = t.parent)
                })(e, f.el),
              c && jn(c, o),
              (t = n.props && n.props.onVnodeUpdated) &&
                jn(() => {
                  Fn(t, l, n, a)
                }, o)
          } else {
            let i
            const { el: c, props: l } = t,
              { bm: a, m: u, parent: f } = e
            a && V(a), (i = l && l.onVnodeBeforeMount) && Fn(i, f, t)
            const p = (e.subTree = qt(e))
            if (
              (c && ue
                ? ue(t.el, p, e, o, null)
                : (w(null, p, n, r, e, o, s), (t.el = p.el)),
              u && jn(u, o),
              (i = l && l.onVnodeMounted))
            ) {
              const e = t
              jn(() => {
                Fn(i, f, e)
              }, o)
            }
            const { a: d } = e
            d && 256 & t.shapeFlag && jn(d, o),
              (e.isMounted = !0),
              (t = n = r = null)
          }
        }, Pn)
      },
      W = (e, t, n) => {
        t.component = e
        const r = e.vnode.props
        ;(e.vnode = t),
          (e.next = null),
          (function (e, t, n, r) {
            const {
                props: o,
                attrs: s,
                vnode: { patchFlag: i },
              } = e,
              c = Qe(o),
              [l] = e.propsOptions
            if (!(r || i > 0) || 16 & i) {
              let r
              Gt(e, t, o, s)
              for (const s in c)
                (t && (_(t, s) || ((r = L(s)) !== s && _(t, r)))) ||
                  (l
                    ? !n ||
                      (void 0 === n[s] && void 0 === n[r]) ||
                      (o[s] = Kt(l, t || u, s, void 0, e))
                    : delete o[s])
              if (s !== c) for (const e in s) (t && _(t, e)) || delete s[e]
            } else if (8 & i) {
              const n = e.vnode.dynamicProps
              for (let r = 0; r < n.length; r++) {
                const i = n[r],
                  a = t[i]
                if (l)
                  if (_(s, i)) s[i] = a
                  else {
                    const t = $(i)
                    o[t] = Kt(l, c, t, a, e)
                  }
                else s[i] = a
              }
            }
            se(e, 'set', '$attrs')
          })(e, t.props, r, n),
          ((e, t, n) => {
            const { vnode: r, slots: o } = e
            let s = !0,
              i = u
            if (32 & r.shapeFlag) {
              const e = t._
              e
                ? n && 1 === e
                  ? (s = !1)
                  : (v(o, t), n || 1 !== e || delete o._)
                : ((s = !t.$stable), En(t, o)),
                (i = t)
            } else t && (Sn(e, t), (i = { default: 1 }))
            if (s) for (const c in o) _n(c) || c in i || delete o[c]
          })(e, t.children, n),
          ne(),
          Rt(void 0, e.update),
          re()
      },
      H = (e, t, n, r, o, s, i, c, l = !1) => {
        const a = e && e.children,
          u = e ? e.shapeFlag : 0,
          f = t.children,
          { patchFlag: p, shapeFlag: h } = t
        if (p > 0) {
          if (128 & p) return void G(a, f, n, r, o, s, i, c, l)
          if (256 & p) return void J(a, f, n, r, o, s, i, c, l)
        }
        8 & h
          ? (16 & u && oe(a, o, s), f !== a && d(n, f))
          : 16 & u
          ? 16 & h
            ? G(a, f, n, r, o, s, i, c, l)
            : oe(a, o, s, !0)
          : (8 & u && d(n, ''), 16 & h && j(f, n, r, o, s, i, c, l))
      },
      J = (e, t, n, r, o, s, i, c, l) => {
        t = t || f
        const a = (e = e || f).length,
          u = t.length,
          p = Math.min(a, u)
        let d
        for (d = 0; d < p; d++) {
          const r = (t[d] = l ? or(t[d]) : rr(t[d]))
          w(e[d], r, n, null, o, s, i, c, l)
        }
        a > u ? oe(e, o, s, !0, !1, p) : j(t, n, r, o, s, i, c, l, p)
      },
      G = (e, t, n, r, o, s, i, c, l) => {
        let a = 0
        const u = t.length
        let p = e.length - 1,
          d = u - 1
        for (; a <= p && a <= d; ) {
          const r = e[a],
            u = (t[a] = l ? or(t[a]) : rr(t[a]))
          if (!Kn(r, u)) break
          w(r, u, n, null, o, s, i, c, l), a++
        }
        for (; a <= p && a <= d; ) {
          const r = e[p],
            a = (t[d] = l ? or(t[d]) : rr(t[d]))
          if (!Kn(r, a)) break
          w(r, a, n, null, o, s, i, c, l), p--, d--
        }
        if (a > p) {
          if (a <= d) {
            const e = d + 1,
              f = e < u ? t[e].el : r
            for (; a <= d; )
              w(null, (t[a] = l ? or(t[a]) : rr(t[a])), n, f, o, s, i, c, l),
                a++
          }
        } else if (a > d) for (; a <= p; ) Y(e[a], o, s, !0), a++
        else {
          const h = a,
            m = a,
            g = new Map()
          for (a = m; a <= d; a++) {
            const e = (t[a] = l ? or(t[a]) : rr(t[a]))
            null != e.key && g.set(e.key, a)
          }
          let v,
            y = 0
          const b = d - m + 1
          let _ = !1,
            x = 0
          const E = new Array(b)
          for (a = 0; a < b; a++) E[a] = 0
          for (a = h; a <= p; a++) {
            const r = e[a]
            if (y >= b) {
              Y(r, o, s, !0)
              continue
            }
            let u
            if (null != r.key) u = g.get(r.key)
            else
              for (v = m; v <= d; v++)
                if (0 === E[v - m] && Kn(r, t[v])) {
                  u = v
                  break
                }
            void 0 === u
              ? Y(r, o, s, !0)
              : ((E[u - m] = a + 1),
                u >= x ? (x = u) : (_ = !0),
                w(r, t[u], n, null, o, s, i, c, l),
                y++)
          }
          const S = _
            ? (function (e) {
                const t = e.slice(),
                  n = [0]
                let r, o, s, i, c
                const l = e.length
                for (r = 0; r < l; r++) {
                  const l = e[r]
                  if (0 !== l) {
                    if (((o = n[n.length - 1]), e[o] < l)) {
                      ;(t[r] = o), n.push(r)
                      continue
                    }
                    for (s = 0, i = n.length - 1; s < i; )
                      (c = ((s + i) / 2) | 0),
                        e[n[c]] < l ? (s = c + 1) : (i = c)
                    l < e[n[s]] && (s > 0 && (t[r] = n[s - 1]), (n[s] = r))
                  }
                }
                ;(s = n.length), (i = n[s - 1])
                for (; s-- > 0; ) (n[s] = i), (i = t[i])
                return n
              })(E)
            : f
          for (v = S.length - 1, a = b - 1; a >= 0; a--) {
            const e = m + a,
              f = t[e],
              p = e + 1 < u ? t[e + 1].el : r
            0 === E[a]
              ? w(null, f, n, p, o, s, i, c, l)
              : _ && (v < 0 || a !== S[v] ? K(f, n, p, 2) : v--)
          }
        }
      },
      K = (e, t, r, o, s = null) => {
        const { el: i, type: c, transition: l, children: a, shapeFlag: u } = e
        if (6 & u) return void K(e.component.subTree, t, r, o)
        if (128 & u) return void e.suspense.move(t, r, o)
        if (64 & u) return void c.move(e, t, r, le)
        if (c === Mn) {
          n(i, t, r)
          for (let e = 0; e < a.length; e++) K(a[e], t, r, o)
          return void n(e.anchor, t, r)
        }
        if (c === Vn) return void C(e, t, r)
        if (2 !== o && 1 & u && l)
          if (0 === o) l.beforeEnter(i), n(i, t, r), jn(() => l.enter(i), s)
          else {
            const { leave: e, delayLeave: o, afterLeave: s } = l,
              c = () => n(i, t, r),
              a = () => {
                e(i, () => {
                  c(), s && s()
                })
              }
            o ? o(i, c, a) : a()
          }
        else n(i, t, r)
      },
      Y = (e, t, n, r = !1, o = !1) => {
        const {
          type: s,
          props: i,
          ref: c,
          children: l,
          dynamicChildren: a,
          shapeFlag: u,
          patchFlag: f,
          dirs: p,
        } = e
        if ((null != c && Tn(c, null, n, null), 256 & u))
          return void t.ctx.deactivate(e)
        const d = 1 & u && p
        let h
        if (((h = i && i.onVnodeBeforeUnmount) && Fn(h, t, e), 6 & u))
          te(e.component, n, r)
        else {
          if (128 & u) return void e.suspense.unmount(n, r)
          d && Cn(e, null, t, 'beforeUnmount'),
            64 & u
              ? e.type.remove(e, t, n, o, le, r)
              : a && (s !== Mn || (f > 0 && 64 & f))
              ? oe(a, t, n, !1, !0)
              : ((s === Mn && (128 & f || 256 & f)) || (!o && 16 & u)) &&
                oe(l, t, n),
            r && Z(e)
        }
        ;((h = i && i.onVnodeUnmounted) || d) &&
          jn(() => {
            h && Fn(h, t, e), d && Cn(e, null, t, 'unmounted')
          }, n)
      },
      Z = (e) => {
        const { type: t, el: n, anchor: o, transition: s } = e
        if (t === Mn) return void ee(n, o)
        if (t === Vn) return void O(e)
        const i = () => {
          r(n), s && !s.persisted && s.afterLeave && s.afterLeave()
        }
        if (1 & e.shapeFlag && s && !s.persisted) {
          const { leave: t, delayLeave: r } = s,
            o = () => t(n, i)
          r ? r(e.el, i, o) : o()
        } else i()
      },
      ee = (e, t) => {
        let n
        for (; e !== t; ) (n = m(e)), r(e), (e = n)
        r(t)
      },
      te = (e, t, n) => {
        const { bum: r, effects: o, update: s, subTree: i, um: c } = e
        if ((r && V(r), o)) for (let l = 0; l < o.length; l++) Q(o[l])
        s && (Q(s), Y(i, e, t, n)),
          c && jn(c, t),
          jn(() => {
            e.isUnmounted = !0
          }, t),
          t &&
            t.pendingBranch &&
            !t.isUnmounted &&
            e.asyncDep &&
            !e.asyncResolved &&
            e.suspenseId === t.pendingId &&
            (t.deps--, 0 === t.deps && t.resolve())
      },
      oe = (e, t, n, r = !1, o = !1, s = 0) => {
        for (let i = s; i < e.length; i++) Y(e[i], t, n, r, o)
      },
      ie = (e) =>
        6 & e.shapeFlag
          ? ie(e.component.subTree)
          : 128 & e.shapeFlag
          ? e.suspense.next()
          : m(e.anchor || e.el),
      ce = (e, t, n) => {
        null == e
          ? t._vnode && Y(t._vnode, null, null, !0)
          : w(t._vnode || null, e, t, null, null, null, n),
          At(),
          (t._vnode = e)
      },
      le = { p: w, um: Y, m: K, r: Z, mt: I, mc: j, pc: H, pbc: F, n: ie, o: e }
    let ae, ue
    t && ([ae, ue] = t(le))
    return { render: ce, hydrate: ae, createApp: Rn(ce, ae) }
  })(e)
}
function Fn(e, t, n, r = null) {
  at(e, t, 7, [n, r])
}
function Un(e, t, n = !1) {
  const r = e.children,
    o = t.children
  if (w(r) && w(o))
    for (let s = 0; s < r.length; s++) {
      const e = r[s]
      let t = o[s]
      1 & t.shapeFlag &&
        !t.dynamicChildren &&
        ((t.patchFlag <= 0 || 32 === t.patchFlag) &&
          ((t = o[s] = or(o[s])), (t.el = e.el)),
        n || Un(e, t))
    }
}
function $n(e, t) {
  return (
    (function (e, t, n = !0, r = !1) {
      const o = Bt || xr
      if (o) {
        const n = o.type
        if ('components' === e) {
          const e = Ar(n)
          if (e && (e === t || e === $(t) || e === M($(t)))) return n
        }
        const s = Ln(o[e] || n[e], t) || Ln(o.appContext[e], t)
        return !s && r ? n : s
      }
    })('components', e, !0, t) || e
  )
}
const Bn = Symbol()
function Ln(e, t) {
  return e && (e[t] || e[$(t)] || e[M($(t))])
}
const Mn = Symbol(void 0),
  In = Symbol(void 0),
  qn = Symbol(void 0),
  Vn = Symbol(void 0),
  Dn = []
let zn = null
function Wn(e = !1) {
  Dn.push((zn = e ? null : []))
}
function Hn() {
  Dn.pop(), (zn = Dn[Dn.length - 1] || null)
}
function Jn(e, t, n, r, o) {
  const s = Zn(e, t, n, r, o, !0)
  return (s.dynamicChildren = zn || f), Hn(), zn && zn.push(s), s
}
function Gn(e) {
  return !!e && !0 === e.__v_isVNode
}
function Kn(e, t) {
  return e.type === t.type && e.key === t.key
}
const Xn = '__vInternal',
  Qn = ({ key: e }) => (null != e ? e : null),
  Yn = ({ ref: e }) =>
    null != e ? (C(e) || Ze(e) || S(e) ? { i: Bt, r: e } : e) : null,
  Zn = function (e, t = null, n = null, o = 0, s = null, i = !1) {
    ;(e && e !== Bn) || (e = qn)
    if (Gn(e)) {
      const r = er(e, t, !0)
      return n && sr(r, n), r
    }
    ;(l = e), S(l) && '__vccOpts' in l && (e = e.__vccOpts)
    var l
    if (t) {
      ;(Xe(t) || Xn in t) && (t = v({}, t))
      let { class: e, style: n } = t
      e && !C(e) && (t.class = c(e)),
        k(n) && (Xe(n) && !w(n) && (n = v({}, n)), (t.style = r(n)))
    }
    const a = C(e)
        ? 1
        : ((e) => e.__isSuspense)(e)
        ? 128
        : ((e) => e.__isTeleport)(e)
        ? 64
        : k(e)
        ? 4
        : S(e)
        ? 2
        : 0,
      u = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && Qn(t),
        ref: t && Yn(t),
        scopeId: Lt,
        slotScopeIds: null,
        children: null,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: a,
        patchFlag: o,
        dynamicProps: s,
        dynamicChildren: null,
        appContext: null,
      }
    if ((sr(u, n), 128 & a)) {
      const { content: e, fallback: t } = (function (e) {
        const { shapeFlag: t, children: n } = e
        let r, o
        return (
          32 & t
            ? ((r = Ht(n.default)), (o = Ht(n.fallback)))
            : ((r = Ht(n)), (o = rr(null))),
          { content: r, fallback: o }
        )
      })(u)
      ;(u.ssContent = e), (u.ssFallback = t)
    }
    !i && zn && (o > 0 || 6 & a) && 32 !== o && zn.push(u)
    return u
  }
function er(e, t, n = !1) {
  const { props: o, ref: s, patchFlag: i, children: l } = e,
    a = t
      ? (function (...e) {
          const t = v({}, e[0])
          for (let n = 1; n < e.length; n++) {
            const o = e[n]
            for (const e in o)
              if ('class' === e)
                t.class !== o.class && (t.class = c([t.class, o.class]))
              else if ('style' === e) t.style = r([t.style, o.style])
              else if (m(e)) {
                const n = t[e],
                  r = o[e]
                n !== r && (t[e] = n ? [].concat(n, o[e]) : r)
              } else '' !== e && (t[e] = o[e])
          }
          return t
        })(o || {}, t)
      : o
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && Qn(a),
    ref:
      t && t.ref ? (n && s ? (w(s) ? s.concat(Yn(t)) : [s, Yn(t)]) : Yn(t)) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: l,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Mn ? (-1 === i ? 16 : 16 | i) : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && er(e.ssContent),
    ssFallback: e.ssFallback && er(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
  }
}
function tr(e = ' ', t = 0) {
  return Zn(In, null, e, t)
}
function nr(e = '', t = !1) {
  return t ? (Wn(), Jn(qn, null, e)) : Zn(qn, null, e)
}
function rr(e) {
  return null == e || 'boolean' == typeof e
    ? Zn(qn)
    : w(e)
    ? Zn(Mn, null, e)
    : 'object' == typeof e
    ? null === e.el
      ? e
      : er(e)
    : Zn(In, null, String(e))
}
function or(e) {
  return null === e.el ? e : er(e)
}
function sr(e, t) {
  let n = 0
  const { shapeFlag: r } = e
  if (null == t) t = null
  else if (w(t)) n = 16
  else if ('object' == typeof t) {
    if (1 & r || 64 & r) {
      const n = t.default
      return void (n && (n._c && $t(1), sr(e, n()), n._c && $t(-1)))
    }
    {
      n = 32
      const r = t._
      r || Xn in t
        ? 3 === r &&
          Bt &&
          (1024 & Bt.vnode.patchFlag
            ? ((t._ = 2), (e.patchFlag |= 1024))
            : (t._ = 1))
        : (t._ctx = Bt)
    }
  } else
    S(t)
      ? ((t = { default: t, _ctx: Bt }), (n = 32))
      : ((t = String(t)), 64 & r ? ((n = 16), (t = [tr(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function ir(e, t) {
  if (xr) {
    let n = xr.provides
    const r = xr.parent && xr.parent.provides
    r === n && (n = xr.provides = Object.create(r)), (n[e] = t)
  } else;
}
function cr(e, t, n = !1) {
  const r = xr || Bt
  if (r) {
    const o =
      null == r.parent
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides
    if (o && e in o) return o[e]
    if (arguments.length > 1) return n && S(t) ? t() : t
  }
}
let lr = !0
function ar(e, t, n = [], r = [], o = [], s = !1) {
  const {
      mixins: i,
      extends: c,
      data: l,
      computed: a,
      methods: f,
      watch: d,
      provide: h,
      inject: m,
      components: g,
      directives: y,
      beforeMount: b,
      mounted: _,
      beforeUpdate: x,
      updated: E,
      activated: C,
      deactivated: O,
      beforeDestroy: R,
      beforeUnmount: A,
      destroyed: P,
      unmounted: j,
      render: T,
      renderTracked: N,
      renderTriggered: F,
      errorCaptured: U,
      expose: $,
    } = t,
    B = e.proxy,
    L = e.ctx,
    M = e.appContext.mixins
  if (
    (s && T && e.render === p && (e.render = T),
    s ||
      ((lr = !1),
      ur('beforeCreate', 'bc', t, e, M),
      (lr = !0),
      pr(e, M, n, r, o)),
    c && ar(e, c, n, r, o, !0),
    i && pr(e, i, n, r, o),
    m)
  )
    if (w(m))
      for (let u = 0; u < m.length; u++) {
        const e = m[u]
        L[e] = cr(e)
      }
    else
      for (const u in m) {
        const e = m[u]
        k(e) ? (L[u] = cr(e.from || u, e.default, !0)) : (L[u] = cr(e))
      }
  if (f)
    for (const u in f) {
      const e = f[u]
      S(e) && (L[u] = e.bind(B))
    }
  if (
    (s
      ? l && n.push(l)
      : (n.length && n.forEach((t) => dr(e, t, B)), l && dr(e, l, B)),
    a)
  )
    for (const u in a) {
      const e = a[u],
        t = Pr({
          get: S(e) ? e.bind(B, B) : S(e.get) ? e.get.bind(B, B) : p,
          set: !S(e) && S(e.set) ? e.set.bind(B) : p,
        })
      Object.defineProperty(L, u, {
        enumerable: !0,
        configurable: !0,
        get: () => t.value,
        set: (e) => (t.value = e),
      })
    }
  var I
  if (
    (d && r.push(d),
    !s &&
      r.length &&
      r.forEach((e) => {
        for (const t in e) hr(e[t], L, B, t)
      }),
    h && o.push(h),
    !s &&
      o.length &&
      o.forEach((e) => {
        const t = S(e) ? e.call(B) : e
        Reflect.ownKeys(t).forEach((e) => {
          ir(e, t[e])
        })
      }),
    s &&
      (g && v(e.components || (e.components = v({}, e.type.components)), g),
      y && v(e.directives || (e.directives = v({}, e.type.directives)), y)),
    s || ur('created', 'c', t, e, M),
    b && rn(b.bind(B)),
    _ && on(_.bind(B)),
    x && sn(x.bind(B)),
    E && cn(E.bind(B)),
    C && yn(C.bind(B), 'a', I),
    O &&
      (function (e, t) {
        yn(e, 'da', t)
      })(O.bind(B)),
    U &&
      ((e, t = xr) => {
        tn('ec', e, t)
      })(U.bind(B)),
    N && fn(N.bind(B)),
    F && un(F.bind(B)),
    A && ln(A.bind(B)),
    j && an(j.bind(B)),
    w($) && !s)
  )
    if ($.length) {
      const t = e.exposed || (e.exposed = st({}))
      $.forEach((e) => {
        t[e] = (function (e, t) {
          return Ze(e[t]) ? e[t] : new it(e, t)
        })(B, e)
      })
    } else e.exposed || (e.exposed = u)
}
function ur(e, t, n, r, o) {
  for (let s = 0; s < o.length; s++) fr(e, t, o[s], r)
  fr(e, t, n, r)
}
function fr(e, t, n, r) {
  const { extends: o, mixins: s } = n,
    i = n[e]
  if ((o && fr(e, t, o, r), s))
    for (let c = 0; c < s.length; c++) fr(e, t, s[c], r)
  i && at(i.bind(r.proxy), r, t)
}
function pr(e, t, n, r, o) {
  for (let s = 0; s < t.length; s++) ar(e, t[s], n, r, o, !0)
}
function dr(e, t, n) {
  lr = !1
  const r = t.call(n, n)
  ;(lr = !0), k(r) && (e.data === u ? (e.data = We(r)) : v(e.data, r))
}
function hr(e, t, n, r) {
  const o = r.includes('.')
    ? (function (e, t) {
        const n = t.split('.')
        return () => {
          let t = e
          for (let e = 0; e < n.length && t; e++) t = t[n[e]]
          return t
        }
      })(n, r)
    : () => n[r]
  if (C(e)) {
    const n = t[e]
    S(n) && dn(o, n)
  } else if (S(e)) dn(o, e.bind(n))
  else if (k(e))
    if (w(e)) e.forEach((e) => hr(e, t, n, r))
    else {
      const r = S(e.handler) ? e.handler.bind(n) : t[e.handler]
      S(r) && dn(o, r, e)
    }
}
function mr(e, t, n) {
  const r = n.appContext.config.optionMergeStrategies,
    { mixins: o, extends: s } = t
  s && mr(e, s, n), o && o.forEach((t) => mr(e, t, n))
  for (const i in t)
    r && _(r, i) ? (e[i] = r[i](e[i], t[i], n.proxy, i)) : (e[i] = t[i])
}
const gr = (e) =>
    e ? (Sr(e) ? (e.exposed ? e.exposed : e.proxy) : gr(e.parent)) : null,
  vr = v(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => gr(e.parent),
    $root: (e) => gr(e.root),
    $emit: (e) => e.emit,
    $options: (e) =>
      (function (e) {
        const t = e.type,
          { __merged: n, mixins: r, extends: o } = t
        if (n) return n
        const s = e.appContext.mixins
        if (!s.length && !r && !o) return t
        const i = {}
        return s.forEach((t) => mr(i, t, e)), mr(i, t, e), (t.__merged = i)
      })(e),
    $forceUpdate: (e) => () => Ct(e.update),
    $nextTick: (e) => St.bind(e.proxy),
    $watch: (e) => mn.bind(e),
  }),
  yr = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: r,
        data: o,
        props: s,
        accessCache: i,
        type: c,
        appContext: l,
      } = e
      if ('__v_skip' === t) return !0
      let a
      if ('$' !== t[0]) {
        const c = i[t]
        if (void 0 !== c)
          switch (c) {
            case 0:
              return r[t]
            case 1:
              return o[t]
            case 3:
              return n[t]
            case 2:
              return s[t]
          }
        else {
          if (r !== u && _(r, t)) return (i[t] = 0), r[t]
          if (o !== u && _(o, t)) return (i[t] = 1), o[t]
          if ((a = e.propsOptions[0]) && _(a, t)) return (i[t] = 2), s[t]
          if (n !== u && _(n, t)) return (i[t] = 3), n[t]
          lr && (i[t] = 4)
        }
      }
      const f = vr[t]
      let p, d
      return f
        ? ('$attrs' === t && oe(e, 0, t), f(e))
        : (p = c.__cssModules) && (p = p[t])
        ? p
        : n !== u && _(n, t)
        ? ((i[t] = 3), n[t])
        : ((d = l.config.globalProperties), _(d, t) ? d[t] : void 0)
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: o, ctx: s } = e
      if (o !== u && _(o, t)) o[t] = n
      else if (r !== u && _(r, t)) r[t] = n
      else if (_(e.props, t)) return !1
      return ('$' !== t[0] || !(t.slice(1) in e)) && ((s[t] = n), !0)
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: r,
          appContext: o,
          propsOptions: s,
        },
      },
      i,
    ) {
      let c
      return (
        void 0 !== n[i] ||
        (e !== u && _(e, i)) ||
        (t !== u && _(t, i)) ||
        ((c = s[0]) && _(c, i)) ||
        _(r, i) ||
        _(vr, i) ||
        _(o.config.globalProperties, i)
      )
    },
  },
  br = v({}, yr, {
    get(e, t) {
      if (t !== Symbol.unscopables) return yr.get(e, t, e)
    },
    has: (e, n) => '_' !== n[0] && !t(n),
  }),
  _r = On()
let wr = 0
let xr = null
const Er = (e) => {
  xr = e
}
function Sr(e) {
  return 4 & e.vnode.shapeFlag
}
let Cr = !1
function Or(e, t, n) {
  S(t) ? (e.render = t) : k(t) && (e.setupState = st(t)), kr(e)
}
function kr(e, t) {
  const n = e.type
  e.render ||
    ((e.render = n.render || p),
    e.render._rc && (e.withProxy = new Proxy(e.ctx, br))),
    (xr = e),
    ne(),
    ar(e, n),
    re(),
    (xr = null)
}
function Rr(e, t = xr) {
  t && (t.effects || (t.effects = [])).push(e)
}
function Ar(e) {
  return (S(e) && e.displayName) || e.name
}
function Pr(e) {
  const t = (function (e) {
    let t, n
    return (
      S(e) ? ((t = e), (n = p)) : ((t = e.get), (n = e.set)),
      new ct(t, n, S(e) || !e.set)
    )
  })(e)
  return Rr(t.effect), t
}
function jr(e, t, n) {
  const r = arguments.length
  return 2 === r
    ? k(t) && !w(t)
      ? Gn(t)
        ? Zn(e, null, [t])
        : Zn(e, t)
      : Zn(e, null, t)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : 3 === r && Gn(n) && (n = [n]),
      Zn(e, t, n))
}
function Tr(e, t) {
  let n
  if (w(e) || C(e)) {
    n = new Array(e.length)
    for (let r = 0, o = e.length; r < o; r++) n[r] = t(e[r], r)
  } else if ('number' == typeof e) {
    n = new Array(e)
    for (let r = 0; r < e; r++) n[r] = t(r + 1, r)
  } else if (k(e))
    if (e[Symbol.iterator]) n = Array.from(e, t)
    else {
      const r = Object.keys(e)
      n = new Array(r.length)
      for (let o = 0, s = r.length; o < s; o++) {
        const s = r[o]
        n[o] = t(e[s], s, o)
      }
    }
  else n = []
  return n
}
const Nr = '3.0.11',
  Fr = 'http://www.w3.org/2000/svg',
  Ur = 'undefined' != typeof document ? document : null
let $r, Br
const Lr = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null)
  },
  remove: (e) => {
    const t = e.parentNode
    t && t.removeChild(e)
  },
  createElement: (e, t, n, r) => {
    const o = t
      ? Ur.createElementNS(Fr, e)
      : Ur.createElement(e, n ? { is: n } : void 0)
    return (
      'select' === e &&
        r &&
        null != r.multiple &&
        o.setAttribute('multiple', r.multiple),
      o
    )
  },
  createText: (e) => Ur.createTextNode(e),
  createComment: (e) => Ur.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t
  },
  setElementText: (e, t) => {
    e.textContent = t
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ur.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, '')
  },
  cloneNode(e) {
    const t = e.cloneNode(!0)
    return '_value' in e && (t._value = e._value), t
  },
  insertStaticContent(e, t, n, r) {
    const o = r
      ? Br || (Br = Ur.createElementNS(Fr, 'svg'))
      : $r || ($r = Ur.createElement('div'))
    o.innerHTML = e
    const s = o.firstChild
    let i = s,
      c = i
    for (; i; ) (c = i), Lr.insert(i, t, n), (i = o.firstChild)
    return [s, c]
  },
}
const Mr = /\s*!important$/
function Ir(e, t, n) {
  if (w(n)) n.forEach((n) => Ir(e, t, n))
  else if (t.startsWith('--')) e.setProperty(t, n)
  else {
    const r = (function (e, t) {
      const n = Vr[t]
      if (n) return n
      let r = $(t)
      if ('filter' !== r && r in e) return (Vr[t] = r)
      r = M(r)
      for (let o = 0; o < qr.length; o++) {
        const n = qr[o] + r
        if (n in e) return (Vr[t] = n)
      }
      return t
    })(e, t)
    Mr.test(n)
      ? e.setProperty(L(r), n.replace(Mr, ''), 'important')
      : (e[r] = n)
  }
}
const qr = ['Webkit', 'Moz', 'ms'],
  Vr = {}
const Dr = 'http://www.w3.org/1999/xlink'
let zr = Date.now,
  Wr = !1
if ('undefined' != typeof window) {
  zr() > document.createEvent('Event').timeStamp &&
    (zr = () => performance.now())
  const e = navigator.userAgent.match(/firefox\/(\d+)/i)
  Wr = !!(e && Number(e[1]) <= 53)
}
let Hr = 0
const Jr = Promise.resolve(),
  Gr = () => {
    Hr = 0
  }
function Kr(e, t, n, r, o = null) {
  const s = e._vei || (e._vei = {}),
    i = s[t]
  if (r && i) i.value = r
  else {
    const [n, c] = (function (e) {
      let t
      if (Xr.test(e)) {
        let n
        for (t = {}; (n = e.match(Xr)); )
          (e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0)
      }
      return [L(e.slice(2)), t]
    })(t)
    if (r) {
      !(function (e, t, n, r) {
        e.addEventListener(t, n, r)
      })(
        e,
        n,
        (s[t] = (function (e, t) {
          const n = (e) => {
            const r = e.timeStamp || zr()
            ;(Wr || r >= n.attached - 1) &&
              at(
                (function (e, t) {
                  if (w(t)) {
                    const n = e.stopImmediatePropagation
                    return (
                      (e.stopImmediatePropagation = () => {
                        n.call(e), (e._stopped = !0)
                      }),
                      t.map((e) => (t) => !t._stopped && e(t))
                    )
                  }
                  return t
                })(e, n.value),
                t,
                5,
                [e],
              )
          }
          return (
            (n.value = e),
            (n.attached = (() => Hr || (Jr.then(Gr), (Hr = zr())))()),
            n
          )
        })(r, o)),
        c,
      )
    } else
      i &&
        (!(function (e, t, n, r) {
          e.removeEventListener(t, n, r)
        })(e, n, i, c),
        (s[t] = void 0))
  }
}
const Xr = /(?:Once|Passive|Capture)$/
const Qr = /^on[a-z]/
const Yr = v(
  {
    patchProp: (e, t, r, o, s = !1, i, c, l, a) => {
      switch (t) {
        case 'class':
          !(function (e, t, n) {
            if ((null == t && (t = ''), n)) e.setAttribute('class', t)
            else {
              const n = e._vtc
              n && (t = (t ? [t, ...n] : [...n]).join(' ')), (e.className = t)
            }
          })(e, o, s)
          break
        case 'style':
          !(function (e, t, n) {
            const r = e.style
            if (n)
              if (C(n)) {
                if (t !== n) {
                  const t = r.display
                  ;(r.cssText = n), '_vod' in e && (r.display = t)
                }
              } else {
                for (const e in n) Ir(r, e, n[e])
                if (t && !C(t)) for (const e in t) null == n[e] && Ir(r, e, '')
              }
            else e.removeAttribute('style')
          })(e, r, o)
          break
        default:
          m(t)
            ? g(t) || Kr(e, t, 0, o, c)
            : (function (e, t, n, r) {
                if (r)
                  return 'innerHTML' === t || !!(t in e && Qr.test(t) && S(n))
                if ('spellcheck' === t || 'draggable' === t) return !1
                if ('form' === t) return !1
                if ('list' === t && 'INPUT' === e.tagName) return !1
                if ('type' === t && 'TEXTAREA' === e.tagName) return !1
                if (Qr.test(t) && C(n)) return !1
                return t in e
              })(e, t, o, s)
            ? (function (e, t, n, r, o, s, i) {
                if ('innerHTML' === t || 'textContent' === t)
                  return r && i(r, o, s), void (e[t] = null == n ? '' : n)
                if ('value' !== t || 'PROGRESS' === e.tagName) {
                  if ('' === n || null == n) {
                    const r = typeof e[t]
                    if ('' === n && 'boolean' === r) return void (e[t] = !0)
                    if (null == n && 'string' === r)
                      return (e[t] = ''), void e.removeAttribute(t)
                    if ('number' === r)
                      return (e[t] = 0), void e.removeAttribute(t)
                  }
                  try {
                    e[t] = n
                  } catch (c) {}
                } else {
                  e._value = n
                  const t = null == n ? '' : n
                  e.value !== t && (e.value = t)
                }
              })(e, t, o, i, c, l, a)
            : ('true-value' === t
                ? (e._trueValue = o)
                : 'false-value' === t && (e._falseValue = o),
              (function (e, t, r, o) {
                if (o && t.startsWith('xlink:'))
                  null == r
                    ? e.removeAttributeNS(Dr, t.slice(6, t.length))
                    : e.setAttributeNS(Dr, t, r)
                else {
                  const o = n(t)
                  null == r || (o && !1 === r)
                    ? e.removeAttribute(t)
                    : e.setAttribute(t, o ? '' : r)
                }
              })(e, t, o, s))
      }
    },
    forcePatchProp: (e, t) => 'value' === t,
  },
  Lr,
)
let Zr
const eo = (...e) => {
  const t = (Zr || (Zr = Nn(Yr))).createApp(...e),
    { mount: n } = t
  return (
    (t.mount = (e) => {
      const r = (function (e) {
        if (C(e)) {
          return document.querySelector(e)
        }
        return e
      })(
        /*!
         * vue-router v4.0.11
         * (c) 2021 Eduardo San Martin Morote
         * @license MIT
         */ e,
      )
      if (!r) return
      const o = t._component
      S(o) || o.render || o.template || (o.template = r.innerHTML),
        (r.innerHTML = '')
      const s = n(r, !1, r instanceof SVGElement)
      return (
        r instanceof Element &&
          (r.removeAttribute('v-cloak'), r.setAttribute('data-v-app', '')),
        s
      )
    }),
    t
  )
}
const to = 'function' == typeof Symbol && 'symbol' == typeof Symbol.toStringTag,
  no = (e) => (to ? Symbol(e) : '_vr_' + e),
  ro = no('rvlm'),
  oo = no('rvd'),
  so = no('r'),
  io = no('rl'),
  co = no('rvl'),
  lo = 'undefined' != typeof window
const ao = Object.assign
function uo(e, t) {
  const n = {}
  for (const r in t) {
    const o = t[r]
    n[r] = Array.isArray(o) ? o.map(e) : e(o)
  }
  return n
}
const fo = () => {},
  po = /\/$/
function ho(e, t, n = '/') {
  let r,
    o = {},
    s = '',
    i = ''
  const c = t.indexOf('?'),
    l = t.indexOf('#', c > -1 ? c : 0)
  return (
    c > -1 &&
      ((r = t.slice(0, c)),
      (s = t.slice(c + 1, l > -1 ? l : t.length)),
      (o = e(s))),
    l > -1 && ((r = r || t.slice(0, l)), (i = t.slice(l, t.length))),
    (r = (function (e, t) {
      if (e.startsWith('/')) return e
      if (!e) return t
      const n = t.split('/'),
        r = e.split('/')
      let o,
        s,
        i = n.length - 1
      for (o = 0; o < r.length; o++)
        if (((s = r[o]), 1 !== i && '.' !== s)) {
          if ('..' !== s) break
          i--
        }
      return (
        n.slice(0, i).join('/') +
        '/' +
        r.slice(o - (o === r.length ? 1 : 0)).join('/')
      )
    })(null != r ? r : t, n)),
    { fullPath: r + (s && '?') + s + i, path: r, query: o, hash: i }
  )
}
function mo(e, t) {
  return t && e.toLowerCase().startsWith(t.toLowerCase())
    ? e.slice(t.length) || '/'
    : e
}
function go(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function vo(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const n in e) if (!yo(e[n], t[n])) return !1
  return !0
}
function yo(e, t) {
  return Array.isArray(e) ? bo(e, t) : Array.isArray(t) ? bo(t, e) : e === t
}
function bo(e, t) {
  return Array.isArray(t)
    ? e.length === t.length && e.every((e, n) => e === t[n])
    : 1 === e.length && e[0] === t
}
var _o, wo, xo, Eo
function So(e) {
  if (!e)
    if (lo) {
      const t = document.querySelector('base')
      e = (e = (t && t.getAttribute('href')) || '/').replace(
        /^\w+:\/\/[^\/]+/,
        '',
      )
    } else e = '/'
  return '/' !== e[0] && '#' !== e[0] && (e = '/' + e), e.replace(po, '')
}
;((wo = _o || (_o = {})).pop = 'pop'),
  (wo.push = 'push'),
  ((Eo = xo || (xo = {})).back = 'back'),
  (Eo.forward = 'forward'),
  (Eo.unknown = '')
const Co = /^[^#]+#/
function Oo(e, t) {
  return e.replace(Co, '#') + t
}
const ko = () => ({ left: window.pageXOffset, top: window.pageYOffset })
function Ro(e) {
  let t
  if ('el' in e) {
    const n = e.el,
      r = 'string' == typeof n && n.startsWith('#'),
      o =
        'string' == typeof n
          ? r
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n
    if (!o) return
    t = (function (e, t) {
      const n = document.documentElement.getBoundingClientRect(),
        r = e.getBoundingClientRect()
      return {
        behavior: t.behavior,
        left: r.left - n.left - (t.left || 0),
        top: r.top - n.top - (t.top || 0),
      }
    })(o, e)
  } else t = e
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        null != t.left ? t.left : window.pageXOffset,
        null != t.top ? t.top : window.pageYOffset,
      )
}
function Ao(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const Po = new Map()
function jo(e, t) {
  const { pathname: n, search: r, hash: o } = t,
    s = e.indexOf('#')
  if (s > -1) {
    let t = o.includes(e.slice(s)) ? e.slice(s).length : 1,
      n = o.slice(t)
    return '/' !== n[0] && (n = '/' + n), mo(n, '')
  }
  return mo(n, e) + r + o
}
function To(e, t, n, r = !1, o = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: o ? ko() : null,
  }
}
function No(e) {
  const { history: t, location: n } = window,
    r = { value: jo(e, n) },
    o = { value: t.state }
  function s(r, s, i) {
    const c = e.indexOf('#'),
      l =
        c > -1
          ? (n.host && document.querySelector('base') ? e : e.slice(c)) + r
          : location.protocol + '//' + location.host + e + r
    try {
      t[i ? 'replaceState' : 'pushState'](s, '', l), (o.value = s)
    } catch (a) {
      console.error(a), n[i ? 'replace' : 'assign'](l)
    }
  }
  return (
    o.value ||
      s(
        r.value,
        {
          back: null,
          current: r.value,
          forward: null,
          position: t.length - 1,
          replaced: !0,
          scroll: null,
        },
        !0,
      ),
    {
      location: r,
      state: o,
      push: function (e, n) {
        const i = ao({}, o.value, t.state, { forward: e, scroll: ko() })
        s(i.current, i, !0),
          s(
            e,
            ao({}, To(r.value, e, null), { position: i.position + 1 }, n),
            !1,
          ),
          (r.value = e)
      },
      replace: function (e, n) {
        s(
          e,
          ao({}, t.state, To(o.value.back, e, o.value.forward, !0), n, {
            position: o.value.position,
          }),
          !0,
        ),
          (r.value = e)
      },
    }
  )
}
function Fo(e) {
  const t = No((e = So(e))),
    n = (function (e, t, n, r) {
      let o = [],
        s = [],
        i = null
      const c = ({ state: s }) => {
        const c = jo(e, location),
          l = n.value,
          a = t.value
        let u = 0
        if (s) {
          if (((n.value = c), (t.value = s), i && i === l))
            return void (i = null)
          u = a ? s.position - a.position : 0
        } else r(c)
        o.forEach((e) => {
          e(n.value, l, {
            delta: u,
            type: _o.pop,
            direction: u ? (u > 0 ? xo.forward : xo.back) : xo.unknown,
          })
        })
      }
      function l() {
        const { history: e } = window
        e.state && e.replaceState(ao({}, e.state, { scroll: ko() }), '')
      }
      return (
        window.addEventListener('popstate', c),
        window.addEventListener('beforeunload', l),
        {
          pauseListeners: function () {
            i = n.value
          },
          listen: function (e) {
            o.push(e)
            const t = () => {
              const t = o.indexOf(e)
              t > -1 && o.splice(t, 1)
            }
            return s.push(t), t
          },
          destroy: function () {
            for (const e of s) e()
            ;(s = []),
              window.removeEventListener('popstate', c),
              window.removeEventListener('beforeunload', l)
          },
        }
      )
    })(e, t.state, t.location, t.replace)
  const r = ao(
    {
      location: '',
      base: e,
      go: function (e, t = !0) {
        t || n.pauseListeners(), history.go(e)
      },
      createHref: Oo.bind(null, e),
    },
    t,
    n,
  )
  return (
    Object.defineProperty(r, 'location', {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(r, 'state', {
      enumerable: !0,
      get: () => t.state.value,
    }),
    r
  )
}
function Uo(e) {
  return 'string' == typeof e || 'symbol' == typeof e
}
const $o = {
    path: '/',
    name: void 0,
    params: {},
    query: {},
    hash: '',
    fullPath: '/',
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  Bo = no('nf')
var Lo, Mo
function Io(e, t) {
  return ao(new Error(), { type: e, [Bo]: !0 }, t)
}
function qo(e, t) {
  return e instanceof Error && Bo in e && (null == t || !!(e.type & t))
}
;((Mo = Lo || (Lo = {}))[(Mo.aborted = 4)] = 'aborted'),
  (Mo[(Mo.cancelled = 8)] = 'cancelled'),
  (Mo[(Mo.duplicated = 16)] = 'duplicated')
const Vo = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Do = /[.+*?^${}()[\]/\\]/g
function zo(e, t) {
  let n = 0
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n]
    if (r) return r
    n++
  }
  return e.length < t.length
    ? 1 === e.length && 80 === e[0]
      ? -1
      : 1
    : e.length > t.length
    ? 1 === t.length && 80 === t[0]
      ? 1
      : -1
    : 0
}
function Wo(e, t) {
  let n = 0
  const r = e.score,
    o = t.score
  for (; n < r.length && n < o.length; ) {
    const e = zo(r[n], o[n])
    if (e) return e
    n++
  }
  return o.length - r.length
}
const Ho = { type: 0, value: '' },
  Jo = /[a-zA-Z0-9_]/
function Go(e, t, n) {
  const r = (function (e, t) {
      const n = ao({}, Vo, t),
        r = []
      let o = n.start ? '^' : ''
      const s = []
      for (const l of e) {
        const e = l.length ? [] : [90]
        n.strict && !l.length && (o += '/')
        for (let t = 0; t < l.length; t++) {
          const r = l[t]
          let i = 40 + (n.sensitive ? 0.25 : 0)
          if (0 === r.type)
            t || (o += '/'), (o += r.value.replace(Do, '\\$&')), (i += 40)
          else if (1 === r.type) {
            const { value: e, repeatable: n, optional: a, regexp: u } = r
            s.push({ name: e, repeatable: n, optional: a })
            const f = u || '[^/]+?'
            if ('[^/]+?' !== f) {
              i += 10
              try {
                new RegExp(`(${f})`)
              } catch (c) {
                throw new Error(
                  `Invalid custom RegExp for param "${e}" (${f}): ` + c.message,
                )
              }
            }
            let p = n ? `((?:${f})(?:/(?:${f}))*)` : `(${f})`
            t || (p = a && l.length < 2 ? `(?:/${p})` : '/' + p),
              a && (p += '?'),
              (o += p),
              (i += 20),
              a && (i += -8),
              n && (i += -20),
              '.*' === f && (i += -50)
          }
          e.push(i)
        }
        r.push(e)
      }
      if (n.strict && n.end) {
        const e = r.length - 1
        r[e][r[e].length - 1] += 0.7000000000000001
      }
      n.strict || (o += '/?'), n.end ? (o += '$') : n.strict && (o += '(?:/|$)')
      const i = new RegExp(o, n.sensitive ? '' : 'i')
      return {
        re: i,
        score: r,
        keys: s,
        parse: function (e) {
          const t = e.match(i),
            n = {}
          if (!t) return null
          for (let r = 1; r < t.length; r++) {
            const e = t[r] || '',
              o = s[r - 1]
            n[o.name] = e && o.repeatable ? e.split('/') : e
          }
          return n
        },
        stringify: function (t) {
          let n = '',
            r = !1
          for (const o of e) {
            ;(r && n.endsWith('/')) || (n += '/'), (r = !1)
            for (const e of o)
              if (0 === e.type) n += e.value
              else if (1 === e.type) {
                const { value: s, repeatable: i, optional: c } = e,
                  l = s in t ? t[s] : ''
                if (Array.isArray(l) && !i)
                  throw new Error(
                    `Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`,
                  )
                const a = Array.isArray(l) ? l.join('/') : l
                if (!a) {
                  if (!c) throw new Error(`Missing required param "${s}"`)
                  o.length < 2 &&
                    (n.endsWith('/') ? (n = n.slice(0, -1)) : (r = !0))
                }
                n += a
              }
          }
          return n
        },
      }
    })(
      (function (e) {
        if (!e) return [[]]
        if ('/' === e) return [[Ho]]
        if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`)
        function t(e) {
          throw new Error(`ERR (${n})/"${a}": ${e}`)
        }
        let n = 0,
          r = n
        const o = []
        let s
        function i() {
          s && o.push(s), (s = [])
        }
        let c,
          l = 0,
          a = '',
          u = ''
        function f() {
          a &&
            (0 === n
              ? s.push({ type: 0, value: a })
              : 1 === n || 2 === n || 3 === n
              ? (s.length > 1 &&
                  ('*' === c || '+' === c) &&
                  t(
                    `A repeatable param (${a}) must be alone in its segment. eg: '/:ids+.`,
                  ),
                s.push({
                  type: 1,
                  value: a,
                  regexp: u,
                  repeatable: '*' === c || '+' === c,
                  optional: '*' === c || '?' === c,
                }))
              : t('Invalid state to consume buffer'),
            (a = ''))
        }
        function p() {
          a += c
        }
        for (; l < e.length; )
          if (((c = e[l++]), '\\' !== c || 2 === n))
            switch (n) {
              case 0:
                '/' === c ? (a && f(), i()) : ':' === c ? (f(), (n = 1)) : p()
                break
              case 4:
                p(), (n = r)
                break
              case 1:
                '(' === c
                  ? (n = 2)
                  : Jo.test(c)
                  ? p()
                  : (f(), (n = 0), '*' !== c && '?' !== c && '+' !== c && l--)
                break
              case 2:
                ')' === c
                  ? '\\' == u[u.length - 1]
                    ? (u = u.slice(0, -1) + c)
                    : (n = 3)
                  : (u += c)
                break
              case 3:
                f(),
                  (n = 0),
                  '*' !== c && '?' !== c && '+' !== c && l--,
                  (u = '')
                break
              default:
                t('Unknown state')
            }
          else (r = n), (n = 4)
        return (
          2 === n && t(`Unfinished custom RegExp for param "${a}"`), f(), i(), o
        )
      })(e.path),
      n,
    ),
    o = ao(r, { record: e, parent: t, children: [], alias: [] })
  return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o
}
function Ko(e, t) {
  const n = [],
    r = new Map()
  function o(e, n, r) {
    const c = !r,
      l = (function (e) {
        return {
          path: e.path,
          redirect: e.redirect,
          name: e.name,
          meta: e.meta || {},
          aliasOf: void 0,
          beforeEnter: e.beforeEnter,
          props: Xo(e),
          children: e.children || [],
          instances: {},
          leaveGuards: new Set(),
          updateGuards: new Set(),
          enterCallbacks: {},
          components:
            'components' in e ? e.components || {} : { default: e.component },
        }
      })(e)
    l.aliasOf = r && r.record
    const a = Zo(t, e),
      u = [l]
    if ('alias' in e) {
      const t = 'string' == typeof e.alias ? [e.alias] : e.alias
      for (const e of t)
        u.push(
          ao({}, l, {
            components: r ? r.record.components : l.components,
            path: e,
            aliasOf: r ? r.record : l,
          }),
        )
    }
    let f, p
    for (const t of u) {
      const { path: u } = t
      if (n && '/' !== u[0]) {
        const e = n.record.path,
          r = '/' === e[e.length - 1] ? '' : '/'
        t.path = n.record.path + (u && r + u)
      }
      if (
        ((f = Go(t, n, a)),
        r
          ? r.alias.push(f)
          : ((p = p || f),
            p !== f && p.alias.push(f),
            c && e.name && !Qo(f) && s(e.name)),
        'children' in l)
      ) {
        const e = l.children
        for (let t = 0; t < e.length; t++) o(e[t], f, r && r.children[t])
      }
      ;(r = r || f), i(f)
    }
    return p
      ? () => {
          s(p)
        }
      : fo
  }
  function s(e) {
    if (Uo(e)) {
      const t = r.get(e)
      t &&
        (r.delete(e),
        n.splice(n.indexOf(t), 1),
        t.children.forEach(s),
        t.alias.forEach(s))
    } else {
      const t = n.indexOf(e)
      t > -1 &&
        (n.splice(t, 1),
        e.record.name && r.delete(e.record.name),
        e.children.forEach(s),
        e.alias.forEach(s))
    }
  }
  function i(e) {
    let t = 0
    for (; t < n.length && Wo(e, n[t]) >= 0; ) t++
    n.splice(t, 0, e), e.record.name && !Qo(e) && r.set(e.record.name, e)
  }
  return (
    (t = Zo({ strict: !1, end: !0, sensitive: !1 }, t)),
    e.forEach((e) => o(e)),
    {
      addRoute: o,
      resolve: function (e, t) {
        let o,
          s,
          i,
          c = {}
        if ('name' in e && e.name) {
          if (((o = r.get(e.name)), !o)) throw Io(1, { location: e })
          ;(i = o.record.name),
            (c = ao(
              (function (e, t) {
                const n = {}
                for (const r of t) r in e && (n[r] = e[r])
                return n
              })(
                t.params,
                o.keys.filter((e) => !e.optional).map((e) => e.name),
              ),
              e.params,
            )),
            (s = o.stringify(c))
        } else if ('path' in e)
          (s = e.path),
            (o = n.find((e) => e.re.test(s))),
            o && ((c = o.parse(s)), (i = o.record.name))
        else {
          if (
            ((o = t.name ? r.get(t.name) : n.find((e) => e.re.test(t.path))),
            !o)
          )
            throw Io(1, { location: e, currentLocation: t })
          ;(i = o.record.name),
            (c = ao({}, t.params, e.params)),
            (s = o.stringify(c))
        }
        const l = []
        let a = o
        for (; a; ) l.unshift(a.record), (a = a.parent)
        return { name: i, path: s, params: c, matched: l, meta: Yo(l) }
      },
      removeRoute: s,
      getRoutes: function () {
        return n
      },
      getRecordMatcher: function (e) {
        return r.get(e)
      },
    }
  )
}
function Xo(e) {
  const t = {},
    n = e.props || !1
  if ('component' in e) t.default = n
  else for (const r in e.components) t[r] = 'boolean' == typeof n ? n : n[r]
  return t
}
function Qo(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function Yo(e) {
  return e.reduce((e, t) => ao(e, t.meta), {})
}
function Zo(e, t) {
  const n = {}
  for (const r in e) n[r] = r in t ? t[r] : e[r]
  return n
}
const es = /#/g,
  ts = /&/g,
  ns = /\//g,
  rs = /=/g,
  os = /\?/g,
  ss = /\+/g,
  is = /%5B/g,
  cs = /%5D/g,
  ls = /%5E/g,
  as = /%60/g,
  us = /%7B/g,
  fs = /%7C/g,
  ps = /%7D/g,
  ds = /%20/g
function hs(e) {
  return encodeURI('' + e)
    .replace(fs, '|')
    .replace(is, '[')
    .replace(cs, ']')
}
function ms(e) {
  return hs(e)
    .replace(ss, '%2B')
    .replace(ds, '+')
    .replace(es, '%23')
    .replace(ts, '%26')
    .replace(as, '`')
    .replace(us, '{')
    .replace(ps, '}')
    .replace(ls, '^')
}
function gs(e) {
  return null == e
    ? ''
    : (function (e) {
        return hs(e).replace(es, '%23').replace(os, '%3F')
      })(e).replace(ns, '%2F')
}
function vs(e) {
  try {
    return decodeURIComponent('' + e)
  } catch (t) {}
  return '' + e
}
function ys(e) {
  const t = {}
  if ('' === e || '?' === e) return t
  const n = ('?' === e[0] ? e.slice(1) : e).split('&')
  for (let r = 0; r < n.length; ++r) {
    const e = n[r].replace(ss, ' '),
      o = e.indexOf('='),
      s = vs(o < 0 ? e : e.slice(0, o)),
      i = o < 0 ? null : vs(e.slice(o + 1))
    if (s in t) {
      let e = t[s]
      Array.isArray(e) || (e = t[s] = [e]), e.push(i)
    } else t[s] = i
  }
  return t
}
function bs(e) {
  let t = ''
  for (let n in e) {
    const r = e[n]
    if (((n = ms(n).replace(rs, '%3D')), null == r)) {
      void 0 !== r && (t += (t.length ? '&' : '') + n)
      continue
    }
    ;(Array.isArray(r) ? r.map((e) => e && ms(e)) : [r && ms(r)]).forEach(
      (e) => {
        void 0 !== e &&
          ((t += (t.length ? '&' : '') + n), null != e && (t += '=' + e))
      },
    )
  }
  return t
}
function _s(e) {
  const t = {}
  for (const n in e) {
    const r = e[n]
    void 0 !== r &&
      (t[n] = Array.isArray(r)
        ? r.map((e) => (null == e ? null : '' + e))
        : null == r
        ? r
        : '' + r)
  }
  return t
}
function ws() {
  let e = []
  return {
    add: function (t) {
      return (
        e.push(t),
        () => {
          const n = e.indexOf(t)
          n > -1 && e.splice(n, 1)
        }
      )
    },
    list: () => e,
    reset: function () {
      e = []
    },
  }
}
function xs(e, t, n, r, o) {
  const s = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || [])
  return () =>
    new Promise((i, c) => {
      const l = (e) => {
          var l
          !1 === e
            ? c(Io(4, { from: n, to: t }))
            : e instanceof Error
            ? c(e)
            : 'string' == typeof (l = e) || (l && 'object' == typeof l)
            ? c(Io(2, { from: t, to: e }))
            : (s &&
                r.enterCallbacks[o] === s &&
                'function' == typeof e &&
                s.push(e),
              i())
        },
        a = e.call(r && r.instances[o], t, n, l)
      let u = Promise.resolve(a)
      e.length < 3 && (u = u.then(l)), u.catch((e) => c(e))
    })
}
function Es(e, t, n, r) {
  const o = []
  for (const i of e)
    for (const e in i.components) {
      let c = i.components[e]
      if ('beforeRouteEnter' === t || i.instances[e])
        if (
          'object' == typeof (s = c) ||
          'displayName' in s ||
          'props' in s ||
          '__vccOpts' in s
        ) {
          const s = (c.__vccOpts || c)[t]
          s && o.push(xs(s, n, r, i, e))
        } else {
          let s = c()
          o.push(() =>
            s.then((o) => {
              if (!o)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${e}" at "${i.path}"`),
                )
              const s =
                (c = o).__esModule || (to && 'Module' === c[Symbol.toStringTag])
                  ? o.default
                  : o
              var c
              i.components[e] = s
              const l = (s.__vccOpts || s)[t]
              return l && xs(l, n, r, i, e)()
            }),
          )
        }
    }
  var s
  return o
}
function Ss(e) {
  const t = cr(so),
    n = cr(io),
    r = Pr(() => t.resolve(rt(e.to))),
    o = Pr(() => {
      const { matched: e } = r.value,
        { length: t } = e,
        o = e[t - 1],
        s = n.matched
      if (!o || !s.length) return -1
      const i = s.findIndex(go.bind(null, o))
      if (i > -1) return i
      const c = Os(e[t - 2])
      return t > 1 && Os(o) === c && s[s.length - 1].path !== c
        ? s.findIndex(go.bind(null, e[t - 2]))
        : i
    }),
    s = Pr(
      () =>
        o.value > -1 &&
        (function (e, t) {
          for (const n in t) {
            const r = t[n],
              o = e[n]
            if ('string' == typeof r) {
              if (r !== o) return !1
            } else if (
              !Array.isArray(o) ||
              o.length !== r.length ||
              r.some((e, t) => e !== o[t])
            )
              return !1
          }
          return !0
        })(n.params, r.value.params),
    ),
    i = Pr(
      () =>
        o.value > -1 &&
        o.value === n.matched.length - 1 &&
        vo(n.params, r.value.params),
    )
  return {
    route: r,
    href: Pr(() => r.value.href),
    isActive: s,
    isExactActive: i,
    navigate: function (n = {}) {
      return (function (e) {
        if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return
        if (e.defaultPrevented) return
        if (void 0 !== e.button && 0 !== e.button) return
        if (e.currentTarget && e.currentTarget.getAttribute) {
          const t = e.currentTarget.getAttribute('target')
          if (/\b_blank\b/i.test(t)) return
        }
        e.preventDefault && e.preventDefault()
        return !0
      })(n)
        ? t[rt(e.replace) ? 'replace' : 'push'](rt(e.to)).catch(fo)
        : Promise.resolve()
    },
  }
}
const Cs = An({
  name: 'RouterLink',
  props: {
    to: { type: [String, Object], required: !0 },
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: { type: String, default: 'page' },
  },
  useLink: Ss,
  setup(e, { slots: t }) {
    const n = We(Ss(e)),
      { options: r } = cr(so),
      o = Pr(() => ({
        [ks(e.activeClass, r.linkActiveClass, 'router-link-active')]:
          n.isActive,
        [ks(
          e.exactActiveClass,
          r.linkExactActiveClass,
          'router-link-exact-active',
        )]: n.isExactActive,
      }))
    return () => {
      const r = t.default && t.default(n)
      return e.custom
        ? r
        : jr(
            'a',
            {
              'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
              href: n.href,
              onClick: n.navigate,
              class: o.value,
            },
            r,
          )
    }
  },
})
function Os(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ''
}
const ks = (e, t, n) => (null != e ? e : null != t ? t : n)
function Rs(e, t) {
  if (!e) return null
  const n = e(t)
  return 1 === n.length ? n[0] : n
}
const As = An({
  name: 'RouterView',
  inheritAttrs: !1,
  props: { name: { type: String, default: 'default' }, route: Object },
  setup(e, { attrs: t, slots: n }) {
    const r = cr(co),
      o = Pr(() => e.route || r.value),
      s = cr(oo, 0),
      i = Pr(() => o.value.matched[s])
    ir(oo, s + 1), ir(ro, i), ir(co, o)
    const c = et()
    return (
      dn(
        () => [c.value, i.value, e.name],
        ([e, t, n], [r, o, s]) => {
          t &&
            ((t.instances[n] = e),
            o &&
              o !== t &&
              e &&
              e === r &&
              (t.leaveGuards.size || (t.leaveGuards = o.leaveGuards),
              t.updateGuards.size || (t.updateGuards = o.updateGuards))),
            !e ||
              !t ||
              (o && go(t, o) && r) ||
              (t.enterCallbacks[n] || []).forEach((t) => t(e))
        },
        { flush: 'post' },
      ),
      () => {
        const r = o.value,
          s = i.value,
          l = s && s.components[e.name],
          a = e.name
        if (!l) return Rs(n.default, { Component: l, route: r })
        const u = s.props[e.name],
          f = u
            ? !0 === u
              ? r.params
              : 'function' == typeof u
              ? u(r)
              : u
            : null,
          p = jr(
            l,
            ao({}, f, t, {
              onVnodeUnmounted: (e) => {
                e.component.isUnmounted && (s.instances[a] = null)
              },
              ref: c,
            }),
          )
        return Rs(n.default, { Component: p, route: r }) || p
      }
    )
  },
})
function Ps(e) {
  const t = Ko(e.routes, e),
    n = e.parseQuery || ys,
    r = e.stringifyQuery || bs,
    o = e.history,
    s = ws(),
    i = ws(),
    c = ws(),
    l = nt($o, !0)
  let a = $o
  lo &&
    e.scrollBehavior &&
    'scrollRestoration' in history &&
    (history.scrollRestoration = 'manual')
  const u = uo.bind(null, (e) => '' + e),
    f = uo.bind(null, gs),
    p = uo.bind(null, vs)
  function d(e, s) {
    if (((s = ao({}, s || l.value)), 'string' == typeof e)) {
      const r = ho(n, e, s.path),
        i = t.resolve({ path: r.path }, s),
        c = o.createHref(r.fullPath)
      return ao(r, i, {
        params: p(i.params),
        hash: vs(r.hash),
        redirectedFrom: void 0,
        href: c,
      })
    }
    let i
    if ('path' in e) i = ao({}, e, { path: ho(n, e.path, s.path).path })
    else {
      const t = ao({}, e.params)
      for (const e in t) null == t[e] && delete t[e]
      ;(i = ao({}, e, { params: f(e.params) })), (s.params = f(s.params))
    }
    const c = t.resolve(i, s),
      a = e.hash || ''
    c.params = u(p(c.params))
    const d = (function (e, t) {
      const n = t.query ? e(t.query) : ''
      return t.path + (n && '?') + n + (t.hash || '')
    })(
      r,
      ao({}, e, {
        hash:
          ((h = a), hs(h).replace(us, '{').replace(ps, '}').replace(ls, '^')),
        path: c.path,
      }),
    )
    var h
    const m = o.createHref(d)
    return ao(
      { fullPath: d, hash: a, query: r === bs ? _s(e.query) : e.query || {} },
      c,
      { redirectedFrom: void 0, href: m },
    )
  }
  function h(e) {
    return 'string' == typeof e ? ho(n, e, l.value.path) : ao({}, e)
  }
  function m(e, t) {
    if (a !== e) return Io(8, { from: t, to: e })
  }
  function g(e) {
    return y(e)
  }
  function v(e) {
    const t = e.matched[e.matched.length - 1]
    if (t && t.redirect) {
      const { redirect: n } = t
      let r = 'function' == typeof n ? n(e) : n
      return (
        'string' == typeof r &&
          ((r = r.includes('?') || r.includes('#') ? (r = h(r)) : { path: r }),
          (r.params = {})),
        ao({ query: e.query, hash: e.hash, params: e.params }, r)
      )
    }
  }
  function y(e, t) {
    const n = (a = d(e)),
      o = l.value,
      s = e.state,
      i = e.force,
      c = !0 === e.replace,
      u = v(n)
    if (u) return y(ao(h(u), { state: s, force: i, replace: c }), t || n)
    const f = n
    let p
    return (
      (f.redirectedFrom = t),
      !i &&
        (function (e, t, n) {
          const r = t.matched.length - 1,
            o = n.matched.length - 1
          return (
            r > -1 &&
            r === o &&
            go(t.matched[r], n.matched[o]) &&
            vo(t.params, n.params) &&
            e(t.query) === e(n.query) &&
            t.hash === n.hash
          )
        })(r, o, n) &&
        ((p = Io(16, { to: f, from: o })), P(o, o, !0, !1)),
      (p ? Promise.resolve(p) : _(f, o))
        .catch((e) => (qo(e) ? e : R(e, f, o)))
        .then((e) => {
          if (e) {
            if (qo(e, 2))
              return y(ao(h(e.to), { state: s, force: i, replace: c }), t || f)
          } else e = x(f, o, !0, c, s)
          return w(f, o, e), e
        })
    )
  }
  function b(e, t) {
    const n = m(e, t)
    return n ? Promise.reject(n) : Promise.resolve()
  }
  function _(e, t) {
    let n
    const [r, o, c] = (function (e, t) {
      const n = [],
        r = [],
        o = [],
        s = Math.max(t.matched.length, e.matched.length)
      for (let i = 0; i < s; i++) {
        const s = t.matched[i]
        s && (e.matched.find((e) => go(e, s)) ? r.push(s) : n.push(s))
        const c = e.matched[i]
        c && (t.matched.find((e) => go(e, c)) || o.push(c))
      }
      return [n, r, o]
    })(e, t)
    n = Es(r.reverse(), 'beforeRouteLeave', e, t)
    for (const s of r)
      s.leaveGuards.forEach((r) => {
        n.push(xs(r, e, t))
      })
    const l = b.bind(null, e, t)
    return (
      n.push(l),
      js(n)
        .then(() => {
          n = []
          for (const r of s.list()) n.push(xs(r, e, t))
          return n.push(l), js(n)
        })
        .then(() => {
          n = Es(o, 'beforeRouteUpdate', e, t)
          for (const r of o)
            r.updateGuards.forEach((r) => {
              n.push(xs(r, e, t))
            })
          return n.push(l), js(n)
        })
        .then(() => {
          n = []
          for (const r of e.matched)
            if (r.beforeEnter && !t.matched.includes(r))
              if (Array.isArray(r.beforeEnter))
                for (const o of r.beforeEnter) n.push(xs(o, e, t))
              else n.push(xs(r.beforeEnter, e, t))
          return n.push(l), js(n)
        })
        .then(
          () => (
            e.matched.forEach((e) => (e.enterCallbacks = {})),
            (n = Es(c, 'beforeRouteEnter', e, t)),
            n.push(l),
            js(n)
          ),
        )
        .then(() => {
          n = []
          for (const r of i.list()) n.push(xs(r, e, t))
          return n.push(l), js(n)
        })
        .catch((e) => (qo(e, 8) ? e : Promise.reject(e)))
    )
  }
  function w(e, t, n) {
    for (const r of c.list()) r(e, t, n)
  }
  function x(e, t, n, r, s) {
    const i = m(e, t)
    if (i) return i
    const c = t === $o,
      a = lo ? history.state : {}
    n &&
      (r || c
        ? o.replace(e.fullPath, ao({ scroll: c && a && a.scroll }, s))
        : o.push(e.fullPath, s)),
      (l.value = e),
      P(e, t, n, c),
      A()
  }
  let E
  function S() {
    E = o.listen((e, t, n) => {
      const r = d(e),
        s = v(r)
      if (s) return void y(ao(s, { replace: !0 }), r).catch(fo)
      a = r
      const i = l.value
      var c, u
      lo && ((c = Ao(i.fullPath, n.delta)), (u = ko()), Po.set(c, u)),
        _(r, i)
          .catch((e) =>
            qo(e, 12)
              ? e
              : qo(e, 2)
              ? (y(e.to, r)
                  .then((e) => {
                    qo(e, 20) && !n.delta && n.type === _o.pop && o.go(-1, !1)
                  })
                  .catch(fo),
                Promise.reject())
              : (n.delta && o.go(-n.delta, !1), R(e, r, i)),
          )
          .then((e) => {
            ;(e = e || x(r, i, !1)) &&
              (n.delta
                ? o.go(-n.delta, !1)
                : n.type === _o.pop && qo(e, 20) && o.go(-1, !1)),
              w(r, i, e)
          })
          .catch(fo)
    })
  }
  let C,
    O = ws(),
    k = ws()
  function R(e, t, n) {
    A(e)
    const r = k.list()
    return (
      r.length ? r.forEach((r) => r(e, t, n)) : console.error(e),
      Promise.reject(e)
    )
  }
  function A(e) {
    C ||
      ((C = !0), S(), O.list().forEach(([t, n]) => (e ? n(e) : t())), O.reset())
  }
  function P(t, n, r, o) {
    const { scrollBehavior: s } = e
    if (!lo || !s) return Promise.resolve()
    const i =
      (!r &&
        (function (e) {
          const t = Po.get(e)
          return Po.delete(e), t
        })(Ao(t.fullPath, 0))) ||
      ((o || !r) && history.state && history.state.scroll) ||
      null
    return St()
      .then(() => s(t, n, i))
      .then((e) => e && Ro(e))
      .catch((e) => R(e, t, n))
  }
  const j = (e) => o.go(e)
  let T
  const N = new Set()
  return {
    currentRoute: l,
    addRoute: function (e, n) {
      let r, o
      return (
        Uo(e) ? ((r = t.getRecordMatcher(e)), (o = n)) : (o = e),
        t.addRoute(o, r)
      )
    },
    removeRoute: function (e) {
      const n = t.getRecordMatcher(e)
      n && t.removeRoute(n)
    },
    hasRoute: function (e) {
      return !!t.getRecordMatcher(e)
    },
    getRoutes: function () {
      return t.getRoutes().map((e) => e.record)
    },
    resolve: d,
    options: e,
    push: g,
    replace: function (e) {
      return g(ao(h(e), { replace: !0 }))
    },
    go: j,
    back: () => j(-1),
    forward: () => j(1),
    beforeEach: s.add,
    beforeResolve: i.add,
    afterEach: c.add,
    onError: k.add,
    isReady: function () {
      return C && l.value !== $o
        ? Promise.resolve()
        : new Promise((e, t) => {
            O.add([e, t])
          })
    },
    install(e) {
      e.component('RouterLink', Cs),
        e.component('RouterView', As),
        (e.config.globalProperties.$router = this),
        Object.defineProperty(e.config.globalProperties, '$route', {
          enumerable: !0,
          get: () => rt(l),
        }),
        lo && !T && l.value === $o && ((T = !0), g(o.location).catch((e) => {}))
      const t = {}
      for (const r in $o) t[r] = Pr(() => l.value[r])
      e.provide(so, this), e.provide(io, We(t)), e.provide(co, l)
      const n = e.unmount
      N.add(e),
        (e.unmount = function () {
          N.delete(e),
            N.size < 1 &&
              ((a = $o), E && E(), (l.value = $o), (T = !1), (C = !1)),
            n()
        })
    },
  }
}
function js(e) {
  return e.reduce((e, t) => e.then(() => t()), Promise.resolve())
}
function Ts() {
  return cr(io)
}
var Ns = function (e, t) {
    return function () {
      for (var n = new Array(arguments.length), r = 0; r < n.length; r++)
        n[r] = arguments[r]
      return e.apply(t, n)
    }
  },
  Fs = Object.prototype.toString
function Us(e) {
  return '[object Array]' === Fs.call(e)
}
function $s(e) {
  return void 0 === e
}
function Bs(e) {
  return null !== e && 'object' == typeof e
}
function Ls(e) {
  if ('[object Object]' !== Fs.call(e)) return !1
  var t = Object.getPrototypeOf(e)
  return null === t || t === Object.prototype
}
function Ms(e) {
  return '[object Function]' === Fs.call(e)
}
function Is(e, t) {
  if (null != e)
    if (('object' != typeof e && (e = [e]), Us(e)))
      for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e)
    else
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
}
var qs = {
  isArray: Us,
  isArrayBuffer: function (e) {
    return '[object ArrayBuffer]' === Fs.call(e)
  },
  isBuffer: function (e) {
    return (
      null !== e &&
      !$s(e) &&
      null !== e.constructor &&
      !$s(e.constructor) &&
      'function' == typeof e.constructor.isBuffer &&
      e.constructor.isBuffer(e)
    )
  },
  isFormData: function (e) {
    return 'undefined' != typeof FormData && e instanceof FormData
  },
  isArrayBufferView: function (e) {
    return 'undefined' != typeof ArrayBuffer && ArrayBuffer.isView
      ? ArrayBuffer.isView(e)
      : e && e.buffer && e.buffer instanceof ArrayBuffer
  },
  isString: function (e) {
    return 'string' == typeof e
  },
  isNumber: function (e) {
    return 'number' == typeof e
  },
  isObject: Bs,
  isPlainObject: Ls,
  isUndefined: $s,
  isDate: function (e) {
    return '[object Date]' === Fs.call(e)
  },
  isFile: function (e) {
    return '[object File]' === Fs.call(e)
  },
  isBlob: function (e) {
    return '[object Blob]' === Fs.call(e)
  },
  isFunction: Ms,
  isStream: function (e) {
    return Bs(e) && Ms(e.pipe)
  },
  isURLSearchParams: function (e) {
    return 'undefined' != typeof URLSearchParams && e instanceof URLSearchParams
  },
  isStandardBrowserEnv: function () {
    return (
      ('undefined' == typeof navigator ||
        ('ReactNative' !== navigator.product &&
          'NativeScript' !== navigator.product &&
          'NS' !== navigator.product)) &&
      'undefined' != typeof window &&
      'undefined' != typeof document
    )
  },
  forEach: Is,
  merge: function e() {
    var t = {}
    function n(n, r) {
      Ls(t[r]) && Ls(n)
        ? (t[r] = e(t[r], n))
        : Ls(n)
        ? (t[r] = e({}, n))
        : Us(n)
        ? (t[r] = n.slice())
        : (t[r] = n)
    }
    for (var r = 0, o = arguments.length; r < o; r++) Is(arguments[r], n)
    return t
  },
  extend: function (e, t, n) {
    return (
      Is(t, function (t, r) {
        e[r] = n && 'function' == typeof t ? Ns(t, n) : t
      }),
      e
    )
  },
  trim: function (e) {
    return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, '')
  },
  stripBOM: function (e) {
    return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e
  },
}
function Vs(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}
var Ds = function (e, t, n) {
  if (!t) return e
  var r
  if (n) r = n(t)
  else if (qs.isURLSearchParams(t)) r = t.toString()
  else {
    var o = []
    qs.forEach(t, function (e, t) {
      null != e &&
        (qs.isArray(e) ? (t += '[]') : (e = [e]),
        qs.forEach(e, function (e) {
          qs.isDate(e)
            ? (e = e.toISOString())
            : qs.isObject(e) && (e = JSON.stringify(e)),
            o.push(Vs(t) + '=' + Vs(e))
        }))
    }),
      (r = o.join('&'))
  }
  if (r) {
    var s = e.indexOf('#')
    ;-1 !== s && (e = e.slice(0, s)),
      (e += (-1 === e.indexOf('?') ? '?' : '&') + r)
  }
  return e
}
function zs() {
  this.handlers = []
}
;(zs.prototype.use = function (e, t, n) {
  return (
    this.handlers.push({
      fulfilled: e,
      rejected: t,
      synchronous: !!n && n.synchronous,
      runWhen: n ? n.runWhen : null,
    }),
    this.handlers.length - 1
  )
}),
  (zs.prototype.eject = function (e) {
    this.handlers[e] && (this.handlers[e] = null)
  }),
  (zs.prototype.forEach = function (e) {
    qs.forEach(this.handlers, function (t) {
      null !== t && e(t)
    })
  })
var Ws = zs,
  Hs = function (e, t) {
    qs.forEach(e, function (n, r) {
      r !== t &&
        r.toUpperCase() === t.toUpperCase() &&
        ((e[t] = n), delete e[r])
    })
  },
  Js = function (e, t, n, r, o) {
    return (
      (e.config = t),
      n && (e.code = n),
      (e.request = r),
      (e.response = o),
      (e.isAxiosError = !0),
      (e.toJSON = function () {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: this.config,
          code: this.code,
          status:
            this.response && this.response.status ? this.response.status : null,
        }
      }),
      e
    )
  },
  Gs = function (e, t, n, r, o) {
    var s = new Error(e)
    return Js(s, t, n, r, o)
  },
  Ks = qs.isStandardBrowserEnv()
    ? {
        write: function (e, t, n, r, o, s) {
          var i = []
          i.push(e + '=' + encodeURIComponent(t)),
            qs.isNumber(n) && i.push('expires=' + new Date(n).toGMTString()),
            qs.isString(r) && i.push('path=' + r),
            qs.isString(o) && i.push('domain=' + o),
            !0 === s && i.push('secure'),
            (document.cookie = i.join('; '))
        },
        read: function (e) {
          var t = document.cookie.match(
            new RegExp('(^|;\\s*)(' + e + ')=([^;]*)'),
          )
          return t ? decodeURIComponent(t[3]) : null
        },
        remove: function (e) {
          this.write(e, '', Date.now() - 864e5)
        },
      }
    : {
        write: function () {},
        read: function () {
          return null
        },
        remove: function () {},
      },
  Xs = [
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ],
  Qs = qs.isStandardBrowserEnv()
    ? (function () {
        var e,
          t = /(msie|trident)/i.test(navigator.userAgent),
          n = document.createElement('a')
        function r(e) {
          var r = e
          return (
            t && (n.setAttribute('href', r), (r = n.href)),
            n.setAttribute('href', r),
            {
              href: n.href,
              protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
              host: n.host,
              search: n.search ? n.search.replace(/^\?/, '') : '',
              hash: n.hash ? n.hash.replace(/^#/, '') : '',
              hostname: n.hostname,
              port: n.port,
              pathname:
                '/' === n.pathname.charAt(0) ? n.pathname : '/' + n.pathname,
            }
          )
        }
        return (
          (e = r(window.location.href)),
          function (t) {
            var n = qs.isString(t) ? r(t) : t
            return n.protocol === e.protocol && n.host === e.host
          }
        )
      })()
    : function () {
        return !0
      }
function Ys(e) {
  this.message = e
}
;(Ys.prototype.toString = function () {
  return 'Cancel' + (this.message ? ': ' + this.message : '')
}),
  (Ys.prototype.__CANCEL__ = !0)
var Zs = Ys,
  ei = function (e) {
    return new Promise(function (t, n) {
      var r,
        o = e.data,
        s = e.headers,
        i = e.responseType
      function c() {
        e.cancelToken && e.cancelToken.unsubscribe(r),
          e.signal && e.signal.removeEventListener('abort', r)
      }
      qs.isFormData(o) && delete s['Content-Type']
      var l = new XMLHttpRequest()
      if (e.auth) {
        var a = e.auth.username || '',
          u = e.auth.password
            ? unescape(encodeURIComponent(e.auth.password))
            : ''
        s.Authorization = 'Basic ' + btoa(a + ':' + u)
      }
      var f,
        p,
        d =
          ((f = e.baseURL),
          (p = e.url),
          f && !/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(p)
            ? (function (e, t) {
                return t
                  ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '')
                  : e
              })(f, p)
            : p)
      function h() {
        if (l) {
          var r,
            o,
            s,
            a,
            u,
            f =
              'getAllResponseHeaders' in l
                ? ((r = l.getAllResponseHeaders()),
                  (u = {}),
                  r
                    ? (qs.forEach(r.split('\n'), function (e) {
                        if (
                          ((a = e.indexOf(':')),
                          (o = qs.trim(e.substr(0, a)).toLowerCase()),
                          (s = qs.trim(e.substr(a + 1))),
                          o)
                        ) {
                          if (u[o] && Xs.indexOf(o) >= 0) return
                          u[o] =
                            'set-cookie' === o
                              ? (u[o] ? u[o] : []).concat([s])
                              : u[o]
                              ? u[o] + ', ' + s
                              : s
                        }
                      }),
                      u)
                    : u)
                : null
          !(function (e, t, n) {
            var r = n.config.validateStatus
            n.status && r && !r(n.status)
              ? t(
                  Gs(
                    'Request failed with status code ' + n.status,
                    n.config,
                    null,
                    n.request,
                    n,
                  ),
                )
              : e(n)
          })(
            function (e) {
              t(e), c()
            },
            function (e) {
              n(e), c()
            },
            {
              data:
                i && 'text' !== i && 'json' !== i ? l.response : l.responseText,
              status: l.status,
              statusText: l.statusText,
              headers: f,
              config: e,
              request: l,
            },
          ),
            (l = null)
        }
      }
      if (
        (l.open(
          e.method.toUpperCase(),
          Ds(d, e.params, e.paramsSerializer),
          !0,
        ),
        (l.timeout = e.timeout),
        'onloadend' in l
          ? (l.onloadend = h)
          : (l.onreadystatechange = function () {
              l &&
                4 === l.readyState &&
                (0 !== l.status ||
                  (l.responseURL && 0 === l.responseURL.indexOf('file:'))) &&
                setTimeout(h)
            }),
        (l.onabort = function () {
          l && (n(Gs('Request aborted', e, 'ECONNABORTED', l)), (l = null))
        }),
        (l.onerror = function () {
          n(Gs('Network Error', e, null, l)), (l = null)
        }),
        (l.ontimeout = function () {
          var t = 'timeout of ' + e.timeout + 'ms exceeded',
            r = e.transitional || si.transitional
          e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
            n(
              Gs(t, e, r.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED', l),
            ),
            (l = null)
        }),
        qs.isStandardBrowserEnv())
      ) {
        var m =
          (e.withCredentials || Qs(d)) && e.xsrfCookieName
            ? Ks.read(e.xsrfCookieName)
            : void 0
        m && (s[e.xsrfHeaderName] = m)
      }
      'setRequestHeader' in l &&
        qs.forEach(s, function (e, t) {
          void 0 === o && 'content-type' === t.toLowerCase()
            ? delete s[t]
            : l.setRequestHeader(t, e)
        }),
        qs.isUndefined(e.withCredentials) ||
          (l.withCredentials = !!e.withCredentials),
        i && 'json' !== i && (l.responseType = e.responseType),
        'function' == typeof e.onDownloadProgress &&
          l.addEventListener('progress', e.onDownloadProgress),
        'function' == typeof e.onUploadProgress &&
          l.upload &&
          l.upload.addEventListener('progress', e.onUploadProgress),
        (e.cancelToken || e.signal) &&
          ((r = function (e) {
            l &&
              (n(!e || (e && e.type) ? new Zs('canceled') : e),
              l.abort(),
              (l = null))
          }),
          e.cancelToken && e.cancelToken.subscribe(r),
          e.signal &&
            (e.signal.aborted ? r() : e.signal.addEventListener('abort', r))),
        o || (o = null),
        l.send(o)
    })
  },
  ti = { 'Content-Type': 'application/x-www-form-urlencoded' }
function ni(e, t) {
  !qs.isUndefined(e) &&
    qs.isUndefined(e['Content-Type']) &&
    (e['Content-Type'] = t)
}
var ri,
  oi = {
    transitional: {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1,
    },
    adapter:
      (('undefined' != typeof XMLHttpRequest ||
        ('undefined' != typeof process &&
          '[object process]' === Object.prototype.toString.call(process))) &&
        (ri = ei),
      ri),
    transformRequest: [
      function (e, t) {
        return (
          Hs(t, 'Accept'),
          Hs(t, 'Content-Type'),
          qs.isFormData(e) ||
          qs.isArrayBuffer(e) ||
          qs.isBuffer(e) ||
          qs.isStream(e) ||
          qs.isFile(e) ||
          qs.isBlob(e)
            ? e
            : qs.isArrayBufferView(e)
            ? e.buffer
            : qs.isURLSearchParams(e)
            ? (ni(t, 'application/x-www-form-urlencoded;charset=utf-8'),
              e.toString())
            : qs.isObject(e) || (t && 'application/json' === t['Content-Type'])
            ? (ni(t, 'application/json'),
              (function (e, t, n) {
                if (qs.isString(e))
                  try {
                    return (t || JSON.parse)(e), qs.trim(e)
                  } catch (r) {
                    if ('SyntaxError' !== r.name) throw r
                  }
                return (n || JSON.stringify)(e)
              })(e))
            : e
        )
      },
    ],
    transformResponse: [
      function (e) {
        var t = this.transitional || oi.transitional,
          n = t && t.silentJSONParsing,
          r = t && t.forcedJSONParsing,
          o = !n && 'json' === this.responseType
        if (o || (r && qs.isString(e) && e.length))
          try {
            return JSON.parse(e)
          } catch (s) {
            if (o) {
              if ('SyntaxError' === s.name) throw Js(s, this, 'E_JSON_PARSE')
              throw s
            }
          }
        return e
      },
    ],
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    validateStatus: function (e) {
      return e >= 200 && e < 300
    },
    headers: { common: { Accept: 'application/json, text/plain, */*' } },
  }
qs.forEach(['delete', 'get', 'head'], function (e) {
  oi.headers[e] = {}
}),
  qs.forEach(['post', 'put', 'patch'], function (e) {
    oi.headers[e] = qs.merge(ti)
  })
var si = oi,
  ii = function (e, t, n) {
    var r = this || si
    return (
      qs.forEach(n, function (n) {
        e = n.call(r, e, t)
      }),
      e
    )
  },
  ci = function (e) {
    return !(!e || !e.__CANCEL__)
  }
function li(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Zs('canceled')
}
var ai = function (e) {
    return (
      li(e),
      (e.headers = e.headers || {}),
      (e.data = ii.call(e, e.data, e.headers, e.transformRequest)),
      (e.headers = qs.merge(
        e.headers.common || {},
        e.headers[e.method] || {},
        e.headers,
      )),
      qs.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        function (t) {
          delete e.headers[t]
        },
      ),
      (e.adapter || si.adapter)(e).then(
        function (t) {
          return (
            li(e),
            (t.data = ii.call(e, t.data, t.headers, e.transformResponse)),
            t
          )
        },
        function (t) {
          return (
            ci(t) ||
              (li(e),
              t &&
                t.response &&
                (t.response.data = ii.call(
                  e,
                  t.response.data,
                  t.response.headers,
                  e.transformResponse,
                ))),
            Promise.reject(t)
          )
        },
      )
    )
  },
  ui = function (e, t) {
    t = t || {}
    var n = {}
    function r(e, t) {
      return qs.isPlainObject(e) && qs.isPlainObject(t)
        ? qs.merge(e, t)
        : qs.isPlainObject(t)
        ? qs.merge({}, t)
        : qs.isArray(t)
        ? t.slice()
        : t
    }
    function o(n) {
      return qs.isUndefined(t[n])
        ? qs.isUndefined(e[n])
          ? void 0
          : r(void 0, e[n])
        : r(e[n], t[n])
    }
    function s(e) {
      if (!qs.isUndefined(t[e])) return r(void 0, t[e])
    }
    function i(n) {
      return qs.isUndefined(t[n])
        ? qs.isUndefined(e[n])
          ? void 0
          : r(void 0, e[n])
        : r(void 0, t[n])
    }
    function c(n) {
      return n in t ? r(e[n], t[n]) : n in e ? r(void 0, e[n]) : void 0
    }
    var l = {
      url: s,
      method: s,
      data: s,
      baseURL: i,
      transformRequest: i,
      transformResponse: i,
      paramsSerializer: i,
      timeout: i,
      timeoutMessage: i,
      withCredentials: i,
      adapter: i,
      responseType: i,
      xsrfCookieName: i,
      xsrfHeaderName: i,
      onUploadProgress: i,
      onDownloadProgress: i,
      decompress: i,
      maxContentLength: i,
      maxBodyLength: i,
      transport: i,
      httpAgent: i,
      httpsAgent: i,
      cancelToken: i,
      socketPath: i,
      responseEncoding: i,
      validateStatus: c,
    }
    return (
      qs.forEach(Object.keys(e).concat(Object.keys(t)), function (e) {
        var t = l[e] || o,
          r = t(e)
        ;(qs.isUndefined(r) && t !== c) || (n[e] = r)
      }),
      n
    )
  },
  fi = '0.22.0',
  pi = fi,
  di = {}
;['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  function (e, t) {
    di[e] = function (n) {
      return typeof n === e || 'a' + (t < 1 ? 'n ' : ' ') + e
    }
  },
)
var hi = {}
di.transitional = function (e, t, n) {
  function r(e, t) {
    return (
      '[Axios v' +
      pi +
      "] Transitional option '" +
      e +
      "'" +
      t +
      (n ? '. ' + n : '')
    )
  }
  return function (n, o, s) {
    if (!1 === e)
      throw new Error(r(o, ' has been removed' + (t ? ' in ' + t : '')))
    return (
      t &&
        !hi[o] &&
        ((hi[o] = !0),
        console.warn(
          r(
            o,
            ' has been deprecated since v' +
              t +
              ' and will be removed in the near future',
          ),
        )),
      !e || e(n, o, s)
    )
  }
}
var mi = {
    assertOptions: function (e, t, n) {
      if ('object' != typeof e) throw new TypeError('options must be an object')
      for (var r = Object.keys(e), o = r.length; o-- > 0; ) {
        var s = r[o],
          i = t[s]
        if (i) {
          var c = e[s],
            l = void 0 === c || i(c, s, e)
          if (!0 !== l) throw new TypeError('option ' + s + ' must be ' + l)
        } else if (!0 !== n) throw Error('Unknown option ' + s)
      }
    },
    validators: di,
  },
  gi = mi.validators
function vi(e) {
  ;(this.defaults = e),
    (this.interceptors = { request: new Ws(), response: new Ws() })
}
;(vi.prototype.request = function (e) {
  'string' == typeof e
    ? ((e = arguments[1] || {}).url = arguments[0])
    : (e = e || {}),
    (e = ui(this.defaults, e)).method
      ? (e.method = e.method.toLowerCase())
      : this.defaults.method
      ? (e.method = this.defaults.method.toLowerCase())
      : (e.method = 'get')
  var t = e.transitional
  void 0 !== t &&
    mi.assertOptions(
      t,
      {
        silentJSONParsing: gi.transitional(gi.boolean),
        forcedJSONParsing: gi.transitional(gi.boolean),
        clarifyTimeoutError: gi.transitional(gi.boolean),
      },
      !1,
    )
  var n = [],
    r = !0
  this.interceptors.request.forEach(function (t) {
    ;('function' == typeof t.runWhen && !1 === t.runWhen(e)) ||
      ((r = r && t.synchronous), n.unshift(t.fulfilled, t.rejected))
  })
  var o,
    s = []
  if (
    (this.interceptors.response.forEach(function (e) {
      s.push(e.fulfilled, e.rejected)
    }),
    !r)
  ) {
    var i = [ai, void 0]
    for (
      Array.prototype.unshift.apply(i, n),
        i = i.concat(s),
        o = Promise.resolve(e);
      i.length;

    )
      o = o.then(i.shift(), i.shift())
    return o
  }
  for (var c = e; n.length; ) {
    var l = n.shift(),
      a = n.shift()
    try {
      c = l(c)
    } catch (u) {
      a(u)
      break
    }
  }
  try {
    o = ai(c)
  } catch (u) {
    return Promise.reject(u)
  }
  for (; s.length; ) o = o.then(s.shift(), s.shift())
  return o
}),
  (vi.prototype.getUri = function (e) {
    return (
      (e = ui(this.defaults, e)),
      Ds(e.url, e.params, e.paramsSerializer).replace(/^\?/, '')
    )
  }),
  qs.forEach(['delete', 'get', 'head', 'options'], function (e) {
    vi.prototype[e] = function (t, n) {
      return this.request(
        ui(n || {}, { method: e, url: t, data: (n || {}).data }),
      )
    }
  }),
  qs.forEach(['post', 'put', 'patch'], function (e) {
    vi.prototype[e] = function (t, n, r) {
      return this.request(ui(r || {}, { method: e, url: t, data: n }))
    }
  })
var yi = vi
function bi(e) {
  if ('function' != typeof e)
    throw new TypeError('executor must be a function.')
  var t
  this.promise = new Promise(function (e) {
    t = e
  })
  var n = this
  this.promise.then(function (e) {
    if (n._listeners) {
      var t,
        r = n._listeners.length
      for (t = 0; t < r; t++) n._listeners[t](e)
      n._listeners = null
    }
  }),
    (this.promise.then = function (e) {
      var t,
        r = new Promise(function (e) {
          n.subscribe(e), (t = e)
        }).then(e)
      return (
        (r.cancel = function () {
          n.unsubscribe(t)
        }),
        r
      )
    }),
    e(function (e) {
      n.reason || ((n.reason = new Zs(e)), t(n.reason))
    })
}
;(bi.prototype.throwIfRequested = function () {
  if (this.reason) throw this.reason
}),
  (bi.prototype.subscribe = function (e) {
    this.reason
      ? e(this.reason)
      : this._listeners
      ? this._listeners.push(e)
      : (this._listeners = [e])
  }),
  (bi.prototype.unsubscribe = function (e) {
    if (this._listeners) {
      var t = this._listeners.indexOf(e)
      ;-1 !== t && this._listeners.splice(t, 1)
    }
  }),
  (bi.source = function () {
    var e
    return {
      token: new bi(function (t) {
        e = t
      }),
      cancel: e,
    }
  })
var _i = bi
var wi = (function e(t) {
  var n = new yi(t),
    r = Ns(yi.prototype.request, n)
  return (
    qs.extend(r, yi.prototype, n),
    qs.extend(r, n),
    (r.create = function (n) {
      return e(ui(t, n))
    }),
    r
  )
})(si)
;(wi.Axios = yi),
  (wi.Cancel = Zs),
  (wi.CancelToken = _i),
  (wi.isCancel = ci),
  (wi.VERSION = fi),
  (wi.all = function (e) {
    return Promise.all(e)
  }),
  (wi.spread = function (e) {
    return function (t) {
      return e.apply(null, t)
    }
  }),
  (wi.isAxiosError = function (e) {
    return 'object' == typeof e && !0 === e.isAxiosError
  })
var xi = wi,
  Ei = wi
xi.default = Ei
var Si = xi
export {
  Mn as F,
  Zn as a,
  tr as b,
  Jn as c,
  An as d,
  et as e,
  on as f,
  Si as g,
  Tr as h,
  nr as i,
  Ps as j,
  Fo as k,
  eo as l,
  Wn as o,
  $n as r,
  l as t,
  Ts as u,
  It as w,
}
