function e(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const t=e("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt"),n=e("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function r(e){if(E(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],s=r(O(i)?o(i):i);if(s)for(const e in s)t[e]=s[e]}return t}if(N(e))return e}const i=/;(?![^(]*\))/g,s=/:(.+)/;function o(e){const t={};return e.split(i).forEach((e=>{if(e){const n=e.split(s);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function a(e){let t="";if(O(e))t=e;else if(E(e))for(let n=0;n<e.length;n++){const r=a(e[n]);r&&(t+=r+" ")}else if(N(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const c=e=>null==e?"":N(e)?JSON.stringify(e,l,2):String(e),l=(e,t)=>w(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:I(t)?{[`Set(${t.size})`]:[...t.values()]}:!N(t)||E(t)||C(t)?t:String(t),u={},h=[],f=()=>{},d=()=>!1,p=/^on[^a-z]/,v=e=>p.test(e),m=e=>e.startsWith("onUpdate:"),y=Object.assign,g=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},_=Object.prototype.hasOwnProperty,b=(e,t)=>_.call(e,t),E=Array.isArray,w=e=>"[object Map]"===x(e),I=e=>"[object Set]"===x(e),T=e=>"function"==typeof e,O=e=>"string"==typeof e,S=e=>"symbol"==typeof e,N=e=>null!==e&&"object"==typeof e,k=e=>N(e)&&T(e.then)&&T(e.catch),A=Object.prototype.toString,x=e=>A.call(e),C=e=>"[object Object]"===x(e),R=e=>O(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,D=e(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),P=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},L=/-(\w)/g,M=P((e=>e.replace(L,((e,t)=>t?t.toUpperCase():"")))),F=/\B([A-Z])/g,U=P((e=>e.replace(F,"-$1").toLowerCase())),j=P((e=>e.charAt(0).toUpperCase()+e.slice(1))),V=P((e=>e?`on${j(e)}`:"")),B=(e,t)=>e!==t&&(e==e||t==t),q=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},$=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},z=e=>{const t=parseFloat(e);return isNaN(t)?e:t},K=new WeakMap,H=[];let G;const W=Symbol(""),J=Symbol("");function Y(e,t=u){(function(e){return e&&!0===e._isEffect})(e)&&(e=e.raw);const n=function(e,t){const n=function(){if(!n.active)return t.scheduler?void 0:e();if(!H.includes(n)){Z(n);try{return te.push(ee),ee=!0,H.push(n),G=n,e()}finally{H.pop(),re(),G=H[H.length-1]}}};return n.id=Q++,n.allowRecurse=!!t.allowRecurse,n._isEffect=!0,n.active=!0,n.raw=e,n.deps=[],n.options=t,n}(e,t);return t.lazy||n(),n}function X(e){e.active&&(Z(e),e.options.onStop&&e.options.onStop(),e.active=!1)}let Q=0;function Z(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let ee=!0;const te=[];function ne(){te.push(ee),ee=!1}function re(){const e=te.pop();ee=void 0===e||e}function ie(e,t,n){if(!ee||void 0===G)return;let r=K.get(e);r||K.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=new Set),i.has(G)||(i.add(G),G.deps.push(i))}function se(e,t,n,r,i,s){const o=K.get(e);if(!o)return;const a=new Set,c=e=>{e&&e.forEach((e=>{(e!==G||e.allowRecurse)&&a.add(e)}))};if("clear"===t)o.forEach(c);else if("length"===n&&E(e))o.forEach(((e,t)=>{("length"===t||t>=r)&&c(e)}));else switch(void 0!==n&&c(o.get(n)),t){case"add":E(e)?R(n)&&c(o.get("length")):(c(o.get(W)),w(e)&&c(o.get(J)));break;case"delete":E(e)||(c(o.get(W)),w(e)&&c(o.get(J)));break;case"set":w(e)&&c(o.get(W))}a.forEach((e=>{e.options.scheduler?e.options.scheduler(e):e()}))}const oe=e("__proto__,__v_isRef,__isVue"),ae=new Set(Object.getOwnPropertyNames(Symbol).map((e=>Symbol[e])).filter(S)),ce=de(),le=de(!1,!0),ue=de(!0),he=de(!0,!0),fe={};function de(e=!1,t=!1){return function(n,r,i){if("__v_isReactive"===r)return!e;if("__v_isReadonly"===r)return e;if("__v_raw"===r&&i===(e?t?$e:qe:t?Be:Ve).get(n))return n;const s=E(n);if(!e&&s&&b(fe,r))return Reflect.get(fe,r,i);const o=Reflect.get(n,r,i);if(S(r)?ae.has(r):oe(r))return o;if(e||ie(n,0,r),t)return o;if(Ze(o)){return!s||!R(r)?o.value:o}return N(o)?e?He(o):Ke(o):o}}["includes","indexOf","lastIndexOf"].forEach((e=>{const t=Array.prototype[e];fe[e]=function(...e){const n=Xe(this);for(let t=0,i=this.length;t<i;t++)ie(n,0,t+"");const r=t.apply(n,e);return-1===r||!1===r?t.apply(n,e.map(Xe)):r}})),["push","pop","shift","unshift","splice"].forEach((e=>{const t=Array.prototype[e];fe[e]=function(...e){ne();const n=t.apply(this,e);return re(),n}}));function pe(e=!1){return function(t,n,r,i){let s=t[n];if(!e&&(r=Xe(r),s=Xe(s),!E(t)&&Ze(s)&&!Ze(r)))return s.value=r,!0;const o=E(t)&&R(n)?Number(n)<t.length:b(t,n),a=Reflect.set(t,n,r,i);return t===Xe(i)&&(o?B(r,s)&&se(t,"set",n,r):se(t,"add",n,r)),a}}const ve={get:ce,set:pe(),deleteProperty:function(e,t){const n=b(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&se(e,"delete",t,void 0),r},has:function(e,t){const n=Reflect.has(e,t);return S(t)&&ae.has(t)||ie(e,0,t),n},ownKeys:function(e){return ie(e,0,E(e)?"length":W),Reflect.ownKeys(e)}},me={get:ue,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},ye=y({},ve,{get:le,set:pe(!0)});y({},me,{get:he});const ge=e=>N(e)?Ke(e):e,_e=e=>N(e)?He(e):e,be=e=>e,Ee=e=>Reflect.getPrototypeOf(e);function we(e,t,n=!1,r=!1){const i=Xe(e=e.__v_raw),s=Xe(t);t!==s&&!n&&ie(i,0,t),!n&&ie(i,0,s);const{has:o}=Ee(i),a=r?be:n?_e:ge;return o.call(i,t)?a(e.get(t)):o.call(i,s)?a(e.get(s)):void 0}function Ie(e,t=!1){const n=this.__v_raw,r=Xe(n),i=Xe(e);return e!==i&&!t&&ie(r,0,e),!t&&ie(r,0,i),e===i?n.has(e):n.has(e)||n.has(i)}function Te(e,t=!1){return e=e.__v_raw,!t&&ie(Xe(e),0,W),Reflect.get(e,"size",e)}function Oe(e){e=Xe(e);const t=Xe(this);return Ee(t).has.call(t,e)||(t.add(e),se(t,"add",e,e)),this}function Se(e,t){t=Xe(t);const n=Xe(this),{has:r,get:i}=Ee(n);let s=r.call(n,e);s||(e=Xe(e),s=r.call(n,e));const o=i.call(n,e);return n.set(e,t),s?B(t,o)&&se(n,"set",e,t):se(n,"add",e,t),this}function Ne(e){const t=Xe(this),{has:n,get:r}=Ee(t);let i=n.call(t,e);i||(e=Xe(e),i=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return i&&se(t,"delete",e,void 0),s}function ke(){const e=Xe(this),t=0!==e.size,n=e.clear();return t&&se(e,"clear",void 0,void 0),n}function Ae(e,t){return function(n,r){const i=this,s=i.__v_raw,o=Xe(s),a=t?be:e?_e:ge;return!e&&ie(o,0,W),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function xe(e,t,n){return function(...r){const i=this.__v_raw,s=Xe(i),o=w(s),a="entries"===e||e===Symbol.iterator&&o,c="keys"===e&&o,l=i[e](...r),u=n?be:t?_e:ge;return!t&&ie(s,0,c?J:W),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:a?[u(e[0]),u(e[1])]:u(e),done:t}},[Symbol.iterator](){return this}}}}function Ce(e){return function(...t){return"delete"!==e&&this}}const Re={get(e){return we(this,e)},get size(){return Te(this)},has:Ie,add:Oe,set:Se,delete:Ne,clear:ke,forEach:Ae(!1,!1)},De={get(e){return we(this,e,!1,!0)},get size(){return Te(this)},has:Ie,add:Oe,set:Se,delete:Ne,clear:ke,forEach:Ae(!1,!0)},Pe={get(e){return we(this,e,!0)},get size(){return Te(this,!0)},has(e){return Ie.call(this,e,!0)},add:Ce("add"),set:Ce("set"),delete:Ce("delete"),clear:Ce("clear"),forEach:Ae(!0,!1)},Le={get(e){return we(this,e,!0,!0)},get size(){return Te(this,!0)},has(e){return Ie.call(this,e,!0)},add:Ce("add"),set:Ce("set"),delete:Ce("delete"),clear:Ce("clear"),forEach:Ae(!0,!0)};function Me(e,t){const n=t?e?Le:De:e?Pe:Re;return(t,r,i)=>"__v_isReactive"===r?!e:"__v_isReadonly"===r?e:"__v_raw"===r?t:Reflect.get(b(n,r)&&r in t?n:t,r,i)}["keys","values","entries",Symbol.iterator].forEach((e=>{Re[e]=xe(e,!1,!1),Pe[e]=xe(e,!0,!1),De[e]=xe(e,!1,!0),Le[e]=xe(e,!0,!0)}));const Fe={get:Me(!1,!1)},Ue={get:Me(!1,!0)},je={get:Me(!0,!1)},Ve=new WeakMap,Be=new WeakMap,qe=new WeakMap,$e=new WeakMap;function ze(e){return e.__v_skip||!Object.isExtensible(e)?0:function(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}((e=>x(e).slice(8,-1))(e))}function Ke(e){return e&&e.__v_isReadonly?e:Ge(e,!1,ve,Fe,Ve)}function He(e){return Ge(e,!0,me,je,qe)}function Ge(e,t,n,r,i){if(!N(e))return e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const o=ze(e);if(0===o)return e;const a=new Proxy(e,2===o?r:n);return i.set(e,a),a}function We(e){return Je(e)?We(e.__v_raw):!(!e||!e.__v_isReactive)}function Je(e){return!(!e||!e.__v_isReadonly)}function Ye(e){return We(e)||Je(e)}function Xe(e){return e&&Xe(e.__v_raw)||e}const Qe=e=>N(e)?Ke(e):e;function Ze(e){return Boolean(e&&!0===e.__v_isRef)}function et(e){return nt(e)}class tt{constructor(e,t=!1){this._rawValue=e,this._shallow=t,this.__v_isRef=!0,this._value=t?e:Qe(e)}get value(){return ie(Xe(this),0,"value"),this._value}set value(e){B(Xe(e),this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:Qe(e),se(Xe(this),"set","value",e))}}function nt(e,t=!1){return Ze(e)?e:new tt(e,t)}function rt(e){return Ze(e)?e.value:e}const it={get:(e,t,n)=>rt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Ze(i)&&!Ze(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function st(e){return We(e)?e:new Proxy(e,it)}class ot{constructor(e,t){this._object=e,this._key=t,this.__v_isRef=!0}get value(){return this._object[this._key]}set value(e){this._object[this._key]=e}}class at{constructor(e,t,n){this._setter=t,this._dirty=!0,this.__v_isRef=!0,this.effect=Y(e,{lazy:!0,scheduler:()=>{this._dirty||(this._dirty=!0,se(Xe(this),"set","value"))}}),this.__v_isReadonly=n}get value(){const e=Xe(this);return e._dirty&&(e._value=this.effect(),e._dirty=!1),ie(e,0,"value"),e._value}set value(e){this._setter(e)}}function ct(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){ut(s,t,n)}return i}function lt(e,t,n,r){if(T(e)){const i=ct(e,t,n,r);return i&&k(i)&&i.catch((e=>{ut(e,t,n)})),i}const i=[];for(let s=0;s<e.length;s++)i.push(lt(e[s],t,n,r));return i}function ut(e,t,n,r=!0){t&&t.vnode;if(t){let r=t.parent;const i=t.proxy,s=n;for(;r;){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,s))return;r=r.parent}const o=t.appContext.config.errorHandler;if(o)return void ct(o,null,10,[e,i,s])}!function(e,t,n,r=!0){console.error(e)}(e,0,0,r)}let ht=!1,ft=!1;const dt=[];let pt=0;const vt=[];let mt=null,yt=0;const gt=[];let _t=null,bt=0;const Et=Promise.resolve();let wt=null,It=null;function Tt(e){const t=wt||Et;return e?t.then(this?e.bind(this):e):t}function Ot(e){if(!(dt.length&&dt.includes(e,ht&&e.allowRecurse?pt+1:pt)||e===It)){const t=function(e){let t=pt+1,n=dt.length;const r=xt(e);for(;t<n;){const e=t+n>>>1;xt(dt[e])<r?t=e+1:n=e}return t}(e);t>-1?dt.splice(t,0,e):dt.push(e),St()}}function St(){ht||ft||(ft=!0,wt=Et.then(Ct))}function Nt(e,t,n,r){E(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?r+1:r)||n.push(e),St()}function kt(e,t=null){if(vt.length){for(It=t,mt=[...new Set(vt)],vt.length=0,yt=0;yt<mt.length;yt++)mt[yt]();mt=null,yt=0,It=null,kt(e,t)}}function At(e){if(gt.length){const e=[...new Set(gt)];if(gt.length=0,_t)return void _t.push(...e);for(_t=e,_t.sort(((e,t)=>xt(e)-xt(t))),bt=0;bt<_t.length;bt++)_t[bt]();_t=null,bt=0}}const xt=e=>null==e.id?1/0:e.id;function Ct(e){ft=!1,ht=!0,kt(e),dt.sort(((e,t)=>xt(e)-xt(t)));try{for(pt=0;pt<dt.length;pt++){const e=dt[pt];e&&ct(e,null,14)}}finally{pt=0,dt.length=0,At(),ht=!1,wt=null,(dt.length||gt.length)&&Ct(e)}}function Rt(e,t,...n){const r=e.vnode.props||u;let i=n;const s=t.startsWith("update:"),o=s&&t.slice(7);if(o&&o in r){const e=`${"modelValue"===o?"model":o}Modifiers`,{number:t,trim:s}=r[e]||u;s?i=n.map((e=>e.trim())):t&&(i=n.map(z))}let a,c=r[a=V(t)]||r[a=V(M(t))];!c&&s&&(c=r[a=V(U(t))]),c&&lt(c,e,6,i);const l=r[a+"Once"];if(l){if(e.emitted){if(e.emitted[a])return}else(e.emitted={})[a]=!0;lt(l,e,6,i)}}function Dt(e,t,n=!1){if(!t.deopt&&void 0!==e.__emits)return e.__emits;const r=e.emits;let i={},s=!1;if(!T(e)){const r=e=>{const n=Dt(e,t,!0);n&&(s=!0,y(i,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return r||s?(E(r)?r.forEach((e=>i[e]=null)):y(i,r),e.__emits=i):e.__emits=null}function Pt(e,t){return!(!e||!v(t))&&(t=t.slice(2).replace(/Once$/,""),b(e,t[0].toLowerCase()+t.slice(1))||b(e,U(t))||b(e,t))}let Lt=0;const Mt=e=>Lt+=e;let Ft=null,Ut=null;function jt(e){const t=Ft;return Ft=e,Ut=e&&e.type.__scopeId||null,t}function Vt(e,t=Ft){if(!t)return e;const n=(...n)=>{Lt||Hn(!0);const r=jt(t),i=e(...n);return jt(r),Lt||Gn(),i};return n._c=!0,n}function Bt(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:d,ctx:p}=e;let v;const y=jt(e);try{let e;if(4&n.shapeFlag){const t=i||r;v=ir(u.call(t,t,h,s,d,f,p)),e=c}else{const n=t;0,v=ir(n.length>1?n(s,{attrs:c,slots:a,emit:l}):n(s,null)),e=t.props?c:$t(c)}let y=v;if(!1!==t.inheritAttrs&&e){const t=Object.keys(e),{shapeFlag:n}=y;t.length&&(1&n||6&n)&&(o&&t.some(m)&&(e=zt(e,o)),y=tr(y,e))}n.dirs&&(y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&(y.transition=n.transition),v=y}catch(g){zn.length=0,ut(g,e,1),v=er(qn)}return jt(y),v}function qt(e){let t;for(let n=0;n<e.length;n++){const r=e[n];if(!Jn(r))return;if(r.type!==qn||"v-if"===r.children){if(t)return;t=r}}return t}const $t=e=>{let t;for(const n in e)("class"===n||"style"===n||v(n))&&((t||(t={}))[n]=e[n]);return t},zt=(e,t)=>{const n={};for(const r in e)m(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function Kt(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!Pt(n,s))return!0}return!1}function Ht(e){if(T(e)&&(e=e()),E(e)){e=qt(e)}return ir(e)}function Gt(e,t,n,r=!1){const i={},s={};$(s,Xn,1),e.propsDefaults=Object.create(null),Wt(e,t,i,s),n?e.props=r?i:Ge(i,!1,ye,Ue,Be):e.type.props?e.props=i:e.props=s,e.attrs=s}function Wt(e,t,n,r){const[i,s]=e.propsOptions;if(t)for(const o in t){const s=t[o];if(D(o))continue;let a;i&&b(i,a=M(o))?n[a]=s:Pt(e.emitsOptions,o)||(r[o]=s)}if(s){const t=Xe(n);for(let r=0;r<s.length;r++){const o=s[r];n[o]=Jt(i,t,o,t[o],e)}}}function Jt(e,t,n,r,i){const s=e[n];if(null!=s){const e=b(s,"default");if(e&&void 0===r){const e=s.default;if(s.type!==Function&&T(e)){const{propsDefaults:s}=i;n in s?r=s[n]:(Tr(i),r=s[n]=e(t),Tr(null))}else r=e}s[0]&&(b(t,n)||e?!s[1]||""!==r&&r!==U(n)||(r=!0):r=!1)}return r}function Yt(e,t,n=!1){if(!t.deopt&&e.__props)return e.__props;const r=e.props,i={},s=[];let o=!1;if(!T(e)){const r=e=>{o=!0;const[n,r]=Yt(e,t,!0);y(i,n),r&&s.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!r&&!o)return e.__props=h;if(E(r))for(let a=0;a<r.length;a++){const e=M(r[a]);Xt(e)&&(i[e]=u)}else if(r)for(const a in r){const e=M(a);if(Xt(e)){const t=r[a],n=i[e]=E(t)||T(t)?{type:t}:t;if(n){const t=en(Boolean,n.type),r=en(String,n.type);n[0]=t>-1,n[1]=r<0||t<r,(t>-1||b(n,"default"))&&s.push(e)}}}return e.__props=[i,s]}function Xt(e){return"$"!==e[0]}function Qt(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:""}function Zt(e,t){return Qt(e)===Qt(t)}function en(e,t){return E(t)?t.findIndex((t=>Zt(t,e))):T(t)&&Zt(t,e)?0:-1}function tn(e,t,n=Ir,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;ne(),Tr(n);const i=lt(t,n,e,r);return Tr(null),re(),i});return r?i.unshift(s):i.push(s),s}}const nn=e=>(t,n=Ir)=>!Sr&&tn(e,t,n),rn=nn("bm"),sn=nn("m"),on=nn("bu"),an=nn("u"),cn=nn("bum"),ln=nn("um"),un=nn("rtg"),hn=nn("rtc"),fn={};function dn(e,t,n){return pn(e,t,n)}function pn(e,t,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=u,a=Ir){let c,l,h=!1;if(Ze(e)?(c=()=>e.value,h=!!e._shallow):We(e)?(c=()=>e,r=!0):c=E(e)?()=>e.map((e=>Ze(e)?e.value:We(e)?mn(e):T(e)?ct(e,a,2,[a&&a.proxy]):void 0)):T(e)?t?()=>ct(e,a,2,[a&&a.proxy]):()=>{if(!a||!a.isUnmounted)return l&&l(),lt(e,a,3,[d])}:f,t&&r){const e=c;c=()=>mn(e())}let d=e=>{l=y.options.onStop=()=>{ct(e,a,4)}},p=E(e)?[]:fn;const v=()=>{if(y.active)if(t){const e=y();(r||h||B(e,p))&&(l&&l(),lt(t,a,3,[e,p===fn?void 0:p,d]),p=e)}else y()};let m;v.allowRecurse=!!t,m="sync"===i?v:"post"===i?()=>Rn(v,a&&a.suspense):()=>{!a||a.isMounted?function(e){Nt(e,mt,vt,yt)}(v):v()};const y=Y(c,{lazy:!0,onTrack:s,onTrigger:o,scheduler:m});return Ar(y,a),t?n?v():p=y():"post"===i?Rn(y,a&&a.suspense):y(),()=>{X(y),a&&g(a.effects,y)}}function vn(e,t,n){const r=this.proxy;return pn(O(e)?()=>r[e]:e.bind(r),t.bind(r),n,this)}function mn(e,t=new Set){if(!N(e)||t.has(e))return e;if(t.add(e),Ze(e))mn(e.value,t);else if(E(e))for(let n=0;n<e.length;n++)mn(e[n],t);else if(I(e)||w(e))e.forEach((e=>{mn(e,t)}));else for(const n in e)mn(e[n],t);return e}const yn=e=>e.type.__isKeepAlive;function gn(e,t,n=Ir){const r=e.__wdc||(e.__wdc=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}e()});if(tn(t,r,n),n){let e=n.parent;for(;e&&e.parent;)yn(e.parent.vnode)&&_n(r,t,n,e),e=e.parent}}function _n(e,t,n,r){const i=tn(t,e,r,!0);ln((()=>{g(r[t],i)}),n)}const bn=e=>"_"===e[0]||"$stable"===e,En=e=>E(e)?e.map(ir):[ir(e)],wn=(e,t,n)=>Vt((e=>En(t(e))),n),In=(e,t)=>{const n=e._ctx;for(const r in e){if(bn(r))continue;const i=e[r];if(T(i))t[r]=wn(0,i,n);else if(null!=i){const e=En(i);t[r]=()=>e}}},Tn=(e,t)=>{const n=En(t);e.slots.default=()=>n};function On(e,t){if(null===Ft)return e;const n=Ft.proxy,r=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[e,s,o,a=u]=t[i];T(e)&&(e={mounted:e,updated:e}),r.push({dir:e,instance:n,value:s,oldValue:void 0,arg:o,modifiers:a})}return e}function Sn(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);const c=a.dir[r];c&&lt(c,n,8,[e.el,a,e,t])}}function Nn(){return{app:null,config:{isNativeTag:d,performance:!1,globalProperties:{},optionMergeStrategies:{},isCustomElement:d,errorHandler:void 0,warnHandler:void 0},mixins:[],components:{},directives:{},provides:Object.create(null)}}let kn=0;function An(e,t){return function(n,r=null){null==r||N(r)||(r=null);const i=Nn(),s=new Set;let o=!1;const a=i.app={_uid:kn++,_component:n,_props:r,_container:null,_context:i,version:Pr,get config(){return i.config},set config(e){},use:(e,...t)=>(s.has(e)||(e&&T(e.install)?(s.add(e),e.install(a,...t)):T(e)&&(s.add(e),e(a,...t))),a),mixin:e=>(i.mixins.includes(e)||(i.mixins.push(e),(e.props||e.emits)&&(i.deopt=!0)),a),component:(e,t)=>t?(i.components[e]=t,a):i.components[e],directive:(e,t)=>t?(i.directives[e]=t,a):i.directives[e],mount(s,c,l){if(!o){const u=er(n,r);return u.appContext=i,c&&t?t(u,s):e(u,s,l),o=!0,a._container=s,s.__vue_app__=a,u.component.proxy}},unmount(){o&&(e(null,a._container),delete a._container.__vue_app__)},provide:(e,t)=>(i.provides[e]=t,a)};return a}}function xn(e){return T(e)?{setup:e,name:e.name}:e}const Cn={scheduler:Ot,allowRecurse:!0},Rn=function(e,t){t&&t.pendingBranch?E(e)?t.effects.push(...e):t.effects.push(e):Nt(e,_t,gt,bt)},Dn=(e,t,n,r)=>{if(E(e))return void e.forEach(((e,i)=>Dn(e,t&&(E(t)?t[i]:t),n,r)));let i;if(r){if(r.type.__asyncLoader)return;i=4&r.shapeFlag?r.component.exposed||r.component.proxy:r.el}else i=null;const{i:s,r:o}=e,a=t&&t.r,c=s.refs===u?s.refs={}:s.refs,l=s.setupState;if(null!=a&&a!==o&&(O(a)?(c[a]=null,b(l,a)&&(l[a]=null)):Ze(a)&&(a.value=null)),O(o)){const e=()=>{c[o]=i,b(l,o)&&(l[o]=i)};i?(e.id=-1,Rn(e,n)):e()}else if(Ze(o)){const e=()=>{o.value=i};i?(e.id=-1,Rn(e,n)):e()}else T(o)&&ct(o,s,12,[i,c])};function Pn(e){return function(e,t){const{insert:n,remove:r,patchProp:i,forcePatchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:d,parentNode:p,nextSibling:v,setScopeId:m=f,cloneNode:g,insertStaticContent:_}=e,E=(e,t,n,r=null,i=null,s=null,o=!1,a=null,c=!1)=>{e&&!Yn(e,t)&&(r=oe(e),Q(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:l,ref:u,shapeFlag:h}=t;switch(l){case Bn:w(e,t,n,r);break;case qn:I(e,t,n,r);break;case $n:null==e&&T(t,n,r,o);break;case Vn:F(e,t,n,r,i,s,o,a,c);break;default:1&h?N(e,t,n,r,i,s,o,a,c):6&h?j(e,t,n,r,i,s,o,a,c):(64&h||128&h)&&l.process(e,t,n,r,i,s,o,a,c,ce)}null!=u&&i&&Dn(u,e&&e.ref,s,t)},w=(e,t,r,i)=>{if(null==e)n(t.el=a(t.children),r,i);else{const n=t.el=e.el;t.children!==e.children&&l(n,t.children)}},I=(e,t,r,i)=>{null==e?n(t.el=c(t.children||""),r,i):t.el=e.el},T=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r)},O=({el:e,anchor:t},r,i)=>{let s;for(;e&&e!==t;)s=v(e),n(e,r,i),e=s;n(t,r,i)},S=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=v(e),r(e),e=n;r(t)},N=(e,t,n,r,i,s,o,a,c)=>{o=o||"svg"===t.type,null==e?A(t,n,r,i,s,o,a,c):R(e,t,i,s,o,a,c)},A=(e,t,r,s,a,c,l,u)=>{let h,f;const{type:p,props:v,shapeFlag:m,transition:y,patchFlag:_,dirs:b}=e;if(e.el&&void 0!==g&&-1===_)h=e.el=g(e.el);else{if(h=e.el=o(e.type,c,v&&v.is,v),8&m?d(h,e.children):16&m&&C(e.children,h,null,s,a,c&&"foreignObject"!==p,l,u||!!e.dynamicChildren),b&&Sn(e,null,s,"created"),v){for(const t in v)D(t)||i(h,t,null,v[t],c,e.children,s,a,ie);(f=v.onVnodeBeforeMount)&&Ln(f,s,e)}x(h,e,e.scopeId,l,s)}b&&Sn(e,null,s,"beforeMount");const E=(!a||a&&!a.pendingBranch)&&y&&!y.persisted;E&&y.beforeEnter(h),n(h,t,r),((f=v&&v.onVnodeMounted)||E||b)&&Rn((()=>{f&&Ln(f,s,e),E&&y.enter(h),b&&Sn(e,null,s,"mounted")}),a)},x=(e,t,n,r,i)=>{if(n&&m(e,n),r)for(let s=0;s<r.length;s++)m(e,r[s]);if(i){if(t===i.subTree){const t=i.vnode;x(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},C=(e,t,n,r,i,s,o,a,c=0)=>{for(let l=c;l<e.length;l++){const c=e[l]=o?sr(e[l]):ir(e[l]);E(null,c,t,n,r,i,s,o,a)}},R=(e,t,n,r,o,a,c)=>{const l=t.el=e.el;let{patchFlag:h,dynamicChildren:f,dirs:p}=t;h|=16&e.patchFlag;const v=e.props||u,m=t.props||u;let y;if((y=m.onVnodeBeforeUpdate)&&Ln(y,n,t,e),p&&Sn(t,e,n,"beforeUpdate"),h>0){if(16&h)L(l,t,v,m,n,r,o);else if(2&h&&v.class!==m.class&&i(l,"class",null,m.class,o),4&h&&i(l,"style",v.style,m.style,o),8&h){const a=t.dynamicProps;for(let t=0;t<a.length;t++){const c=a[t],u=v[c],h=m[c];(h!==u||s&&s(l,c))&&i(l,c,u,h,o,e.children,n,r,ie)}}1&h&&e.children!==t.children&&d(l,t.children)}else c||null!=f||L(l,t,v,m,n,r,o);const g=o&&"foreignObject"!==t.type;f?P(e.dynamicChildren,f,l,n,r,g,a):c||H(e,t,l,null,n,r,g,a,!1),((y=m.onVnodeUpdated)||p)&&Rn((()=>{y&&Ln(y,n,t,e),p&&Sn(t,e,n,"updated")}),r)},P=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],l=t[a],u=c.type===Vn||!Yn(c,l)||6&c.shapeFlag||64&c.shapeFlag?p(c.el):n;E(c,l,u,null,r,i,s,o,!0)}},L=(e,t,n,r,o,a,c)=>{if(n!==r){for(const l in r){if(D(l))continue;const u=r[l],h=n[l];(u!==h||s&&s(e,l))&&i(e,l,h,u,c,t.children,o,a,ie)}if(n!==u)for(const s in n)D(s)||s in r||i(e,s,n[s],null,c,t.children,o,a,ie)}},F=(e,t,r,i,s,o,c,l,u)=>{const h=t.el=e?e.el:a(""),f=t.anchor=e?e.anchor:a("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:v}=t;d>0&&(u=!0),v&&(l=l?l.concat(v):v),null==e?(n(h,r,i),n(f,r,i),C(t.children,r,f,s,o,c,l,u)):d>0&&64&d&&p&&e.dynamicChildren?(P(e.dynamicChildren,p,r,s,o,c,l),(null!=t.key||s&&t===s.subTree)&&Mn(e,t,!0)):H(e,t,r,f,s,o,c,l,u)},j=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):V(t,n,r,i,s,o,c):B(e,t,c)},V=(e,t,n,r,i,s,o)=>{const a=e.component=function(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||Er,s={uid:wr++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,update:null,render:null,proxy:null,exposed:null,withProxy:null,effects:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yt(r,i),emitsOptions:Dt(r,i),emit:null,emitted:null,propsDefaults:u,ctx:u,data:u,props:u,attrs:u,slots:u,refs:u,setupState:u,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Rt.bind(null,s),s}(e,r,i);if(yn(e)&&(a.ctx.renderer=ce),function(e,t=!1){Sr=t;const{props:n,children:r}=e.vnode,i=Or(e);Gt(e,n,i,t),((e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=t,$(t,"_",n)):In(t,e.slots={})}else e.slots={},t&&Tn(e,t);$(e.slots,Xn,1)})(e,r);const s=i?function(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,_r);const{setup:r}=n;if(r){const n=e.setupContext=r.length>1?function(e){const t=t=>{e.exposed=st(t)};return{attrs:e.attrs,slots:e.slots,emit:e.emit,expose:t}}(e):null;Ir=e,ne();const i=ct(r,e,0,[e.props,n]);if(re(),Ir=null,k(i)){if(t)return i.then((t=>{Nr(e,t)})).catch((t=>{ut(t,e,0)}));e.asyncDep=i}else Nr(e,i)}else kr(e)}(e,t):void 0;Sr=!1}(a),a.asyncDep){if(i&&i.registerDep(a,z),!e.el){const e=a.subTree=er(qn);I(null,e,t,n)}}else z(a,e,t,n,i,s,o)},B=(e,t,n)=>{const r=t.component=e.component;if(function(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,l=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||Kt(r,o,l):!!o);if(1024&c)return!0;if(16&c)return r?Kt(r,o,l):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!Pt(l,n))return!0}}return!1}(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void K(r,t,n);r.next=t,function(e){const t=dt.indexOf(e);t>pt&&dt.splice(t,1)}(r.update),r.update()}else t.component=e.component,t.el=e.el,r.vnode=t},z=(e,t,n,r,i,s,o)=>{e.update=Y((function(){if(e.isMounted){let t,{next:n,bu:r,u:a,parent:c,vnode:l}=e,u=n;n?(n.el=l.el,K(e,n,o)):n=l,r&&q(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&Ln(t,c,n,l);const h=Bt(e),f=e.subTree;e.subTree=h,E(f,h,p(f.el),oe(f),e,i,s),n.el=h.el,null===u&&function({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}(e,h.el),a&&Rn(a,i),(t=n.props&&n.props.onVnodeUpdated)&&Rn((()=>{Ln(t,c,n,l)}),i)}else{let o;const{el:a,props:c}=t,{bm:l,m:u,parent:h}=e;l&&q(l),(o=c&&c.onVnodeBeforeMount)&&Ln(o,h,t);const f=e.subTree=Bt(e);if(a&&ue?ue(t.el,f,e,i,null):(E(null,f,n,r,e,i,s),t.el=f.el),u&&Rn(u,i),o=c&&c.onVnodeMounted){const e=t;Rn((()=>{Ln(o,h,e)}),i)}const{a:d}=e;d&&256&t.shapeFlag&&Rn(d,i),e.isMounted=!0,t=n=r=null}}),Cn)},K=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,function(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=e,a=Xe(i),[c]=e.propsOptions;if(!(r||o>0)||16&o){let r;Wt(e,t,i,s);for(const s in a)t&&(b(t,s)||(r=U(s))!==s&&b(t,r))||(c?!n||void 0===n[s]&&void 0===n[r]||(i[s]=Jt(c,t||u,s,void 0,e)):delete i[s]);if(s!==a)for(const e in s)t&&b(t,e)||delete s[e]}else if(8&o){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){const o=n[r],l=t[o];if(c)if(b(s,o))s[o]=l;else{const t=M(o);i[t]=Jt(c,a,t,l,e)}else s[o]=l}}se(e,"set","$attrs")}(e,t.props,r,n),((e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,o=u;if(32&r.shapeFlag){const e=t._;e?n&&1===e?s=!1:(y(i,t),n||1!==e||delete i._):(s=!t.$stable,In(t,i)),o=t}else t&&(Tn(e,t),o={default:1});if(s)for(const a in i)bn(a)||a in o||delete i[a]})(e,t.children,n),ne(),kt(void 0,e.update),re()},H=(e,t,n,r,i,s,o,a,c=!1)=>{const l=e&&e.children,u=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void W(l,h,n,r,i,s,o,a,c);if(256&f)return void G(l,h,n,r,i,s,o,a,c)}8&p?(16&u&&ie(l,i,s),h!==l&&d(n,h)):16&u?16&p?W(l,h,n,r,i,s,o,a,c):ie(l,i,s,!0):(8&u&&d(n,""),16&p&&C(h,n,r,i,s,o,a,c))},G=(e,t,n,r,i,s,o,a,c)=>{t=t||h;const l=(e=e||h).length,u=t.length,f=Math.min(l,u);let d;for(d=0;d<f;d++){const r=t[d]=c?sr(t[d]):ir(t[d]);E(e[d],r,n,null,i,s,o,a,c)}l>u?ie(e,i,s,!0,!1,f):C(t,n,r,i,s,o,a,c,f)},W=(e,t,n,r,i,s,o,a,c)=>{let l=0;const u=t.length;let f=e.length-1,d=u-1;for(;l<=f&&l<=d;){const r=e[l],u=t[l]=c?sr(t[l]):ir(t[l]);if(!Yn(r,u))break;E(r,u,n,null,i,s,o,a,c),l++}for(;l<=f&&l<=d;){const r=e[f],l=t[d]=c?sr(t[d]):ir(t[d]);if(!Yn(r,l))break;E(r,l,n,null,i,s,o,a,c),f--,d--}if(l>f){if(l<=d){const e=d+1,h=e<u?t[e].el:r;for(;l<=d;)E(null,t[l]=c?sr(t[l]):ir(t[l]),n,h,i,s,o,a,c),l++}}else if(l>d)for(;l<=f;)Q(e[l],i,s,!0),l++;else{const p=l,v=l,m=new Map;for(l=v;l<=d;l++){const e=t[l]=c?sr(t[l]):ir(t[l]);null!=e.key&&m.set(e.key,l)}let y,g=0;const _=d-v+1;let b=!1,w=0;const I=new Array(_);for(l=0;l<_;l++)I[l]=0;for(l=p;l<=f;l++){const r=e[l];if(g>=_){Q(r,i,s,!0);continue}let u;if(null!=r.key)u=m.get(r.key);else for(y=v;y<=d;y++)if(0===I[y-v]&&Yn(r,t[y])){u=y;break}void 0===u?Q(r,i,s,!0):(I[u-v]=l+1,u>=w?w=u:b=!0,E(r,t[u],n,null,i,s,o,a,c),g++)}const T=b?function(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=(s+o)/2|0,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];for(;s-- >0;)n[s]=o,o=t[o];return n}(I):h;for(y=T.length-1,l=_-1;l>=0;l--){const e=v+l,h=t[e],f=e+1<u?t[e+1].el:r;0===I[l]?E(null,h,n,f,i,s,o,a,c):b&&(y<0||l!==T[y]?J(h,n,f,2):y--)}}},J=(e,t,r,i,s=null)=>{const{el:o,type:a,transition:c,children:l,shapeFlag:u}=e;if(6&u)return void J(e.component.subTree,t,r,i);if(128&u)return void e.suspense.move(t,r,i);if(64&u)return void a.move(e,t,r,ce);if(a===Vn){n(o,t,r);for(let e=0;e<l.length;e++)J(l[e],t,r,i);return void n(e.anchor,t,r)}if(a===$n)return void O(e,t,r);if(2!==i&&1&u&&c)if(0===i)c.beforeEnter(o),n(o,t,r),Rn((()=>c.enter(o)),s);else{const{leave:e,delayLeave:i,afterLeave:s}=c,a=()=>n(o,t,r),l=()=>{e(o,(()=>{a(),s&&s()}))};i?i(o,a,l):l()}else n(o,t,r)},Q=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:h,dirs:f}=e;if(null!=a&&Dn(a,null,n,null),256&u)return void t.ctx.deactivate(e);const d=1&u&&f;let p;if((p=o&&o.onVnodeBeforeUnmount)&&Ln(p,t,e),6&u)te(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);d&&Sn(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,i,ce,r):l&&(s!==Vn||h>0&&64&h)?ie(l,t,n,!1,!0):(s===Vn&&(128&h||256&h)||!i&&16&u)&&ie(c,t,n),r&&Z(e)}((p=o&&o.onVnodeUnmounted)||d)&&Rn((()=>{p&&Ln(p,t,e),d&&Sn(e,null,t,"unmounted")}),n)},Z=e=>{const{type:t,el:n,anchor:i,transition:s}=e;if(t===Vn)return void ee(n,i);if(t===$n)return void S(e);const o=()=>{r(n),s&&!s.persisted&&s.afterLeave&&s.afterLeave()};if(1&e.shapeFlag&&s&&!s.persisted){const{leave:t,delayLeave:r}=s,i=()=>t(n,o);r?r(e.el,o,i):i()}else o()},ee=(e,t)=>{let n;for(;e!==t;)n=v(e),r(e),e=n;r(t)},te=(e,t,n)=>{const{bum:r,effects:i,update:s,subTree:o,um:a}=e;if(r&&q(r),i)for(let c=0;c<i.length;c++)X(i[c]);s&&(X(s),Q(o,e,t,n)),a&&Rn(a,t),Rn((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},ie=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)Q(e[o],t,n,r,i)},oe=e=>6&e.shapeFlag?oe(e.component.subTree):128&e.shapeFlag?e.suspense.next():v(e.anchor||e.el),ae=(e,t,n)=>{null==e?t._vnode&&Q(t._vnode,null,null,!0):E(t._vnode||null,e,t,null,null,null,n),At(),t._vnode=e},ce={p:E,um:Q,m:J,r:Z,mt:V,mc:C,pc:H,pbc:P,n:oe,o:e};let le,ue;t&&([le,ue]=t(ce));return{render:ae,hydrate:le,createApp:An(ae,le)}}(e)}function Ln(e,t,n,r=null){lt(e,t,7,[n,r])}function Mn(e,t,n=!1){const r=e.children,i=t.children;if(E(r)&&E(i))for(let s=0;s<r.length;s++){const e=r[s];let t=i[s];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=i[s]=sr(i[s]),t.el=e.el),n||Mn(e,t))}}function Fn(e,t){return function(e,t,n=!0,r=!1){const i=Ft||Ir;if(i){const n=i.type;if("components"===e){const e=xr(n);if(e&&(e===t||e===M(t)||e===j(M(t))))return n}const s=jn(i[e]||n[e],t)||jn(i.appContext[e],t);return!s&&r?n:s}}("components",e,!0,t)||e}const Un=Symbol();function jn(e,t){return e&&(e[t]||e[M(t)]||e[j(M(t))])}const Vn=Symbol(void 0),Bn=Symbol(void 0),qn=Symbol(void 0),$n=Symbol(void 0),zn=[];let Kn=null;function Hn(e=!1){zn.push(Kn=e?null:[])}function Gn(){zn.pop(),Kn=zn[zn.length-1]||null}function Wn(e,t,n,r,i){const s=er(e,t,n,r,i,!0);return s.dynamicChildren=Kn||h,Gn(),Kn&&Kn.push(s),s}function Jn(e){return!!e&&!0===e.__v_isVNode}function Yn(e,t){return e.type===t.type&&e.key===t.key}const Xn="__vInternal",Qn=({key:e})=>null!=e?e:null,Zn=({ref:e})=>null!=e?O(e)||Ze(e)||T(e)?{i:Ft,r:e}:e:null,er=function(e,t=null,n=null,i=0,s=null,o=!1){e&&e!==Un||(e=qn);if(Jn(e)){const r=tr(e,t,!0);return n&&or(r,n),r}c=e,T(c)&&"__vccOpts"in c&&(e=e.__vccOpts);var c;if(t){(Ye(t)||Xn in t)&&(t=y({},t));let{class:e,style:n}=t;e&&!O(e)&&(t.class=a(e)),N(n)&&(Ye(n)&&!E(n)&&(n=y({},n)),t.style=r(n))}const l=O(e)?1:(e=>e.__isSuspense)(e)?128:(e=>e.__isTeleport)(e)?64:N(e)?4:T(e)?2:0,u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Qn(t),ref:t&&Zn(t),scopeId:Ut,slotScopeIds:null,children:null,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null};if(or(u,n),128&l){const{content:e,fallback:t}=function(e){const{shapeFlag:t,children:n}=e;let r,i;return 32&t?(r=Ht(n.default),i=Ht(n.fallback)):(r=Ht(n),i=ir(null)),{content:r,fallback:i}}(u);u.ssContent=e,u.ssFallback=t}!o&&Kn&&(i>0||6&l)&&32!==i&&Kn.push(u);return u};function tr(e,t,n=!1){const{props:i,ref:s,patchFlag:o,children:c}=e,l=t?function(...e){const t=y({},e[0]);for(let n=1;n<e.length;n++){const i=e[n];for(const e in i)if("class"===e)t.class!==i.class&&(t.class=a([t.class,i.class]));else if("style"===e)t.style=r([t.style,i.style]);else if(v(e)){const n=t[e],r=i[e];n!==r&&(t[e]=n?[].concat(n,i[e]):r)}else""!==e&&(t[e]=i[e])}return t}(i||{},t):i;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Qn(l),ref:t&&t.ref?n&&s?E(s)?s.concat(Zn(t)):[s,Zn(t)]:Zn(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Vn?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&tr(e.ssContent),ssFallback:e.ssFallback&&tr(e.ssFallback),el:e.el,anchor:e.anchor}}function nr(e=" ",t=0){return er(Bn,null,e,t)}function rr(e="",t=!1){return t?(Hn(),Wn(qn,null,e)):er(qn,null,e)}function ir(e){return null==e||"boolean"==typeof e?er(qn):E(e)?er(Vn,null,e):"object"==typeof e?null===e.el?e:tr(e):er(Bn,null,String(e))}function sr(e){return null===e.el?e:tr(e)}function or(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if(E(t))n=16;else if("object"==typeof t){if(1&r||64&r){const n=t.default;return void(n&&(n._c&&Mt(1),or(e,n()),n._c&&Mt(-1)))}{n=32;const r=t._;r||Xn in t?3===r&&Ft&&(1024&Ft.vnode.patchFlag?(t._=2,e.patchFlag|=1024):t._=1):t._ctx=Ft}}else T(t)?(t={default:t,_ctx:Ft},n=32):(t=String(t),64&r?(n=16,t=[nr(t)]):n=8);e.children=t,e.shapeFlag|=n}function ar(e,t){if(Ir){let n=Ir.provides;const r=Ir.parent&&Ir.parent.provides;r===n&&(n=Ir.provides=Object.create(r)),n[e]=t}else;}function cr(e,t,n=!1){const r=Ir||Ft;if(r){const i=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&T(t)?t():t}}let lr=!0;function ur(e,t,n=[],r=[],i=[],s=!1){const{mixins:o,extends:a,data:c,computed:l,methods:h,watch:d,provide:p,inject:v,components:m,directives:g,beforeMount:_,mounted:b,beforeUpdate:w,updated:I,activated:O,deactivated:S,beforeDestroy:k,beforeUnmount:A,destroyed:x,unmounted:C,render:R,renderTracked:D,renderTriggered:P,errorCaptured:L,expose:M}=t,F=e.proxy,U=e.ctx,j=e.appContext.mixins;if(s&&R&&e.render===f&&(e.render=R),s||(lr=!1,hr("beforeCreate","bc",t,e,j),lr=!0,dr(e,j,n,r,i)),a&&ur(e,a,n,r,i,!0),o&&dr(e,o,n,r,i),v)if(E(v))for(let u=0;u<v.length;u++){const e=v[u];U[e]=cr(e)}else for(const u in v){const e=v[u];N(e)?U[u]=cr(e.from||u,e.default,!0):U[u]=cr(e)}if(h)for(const u in h){const e=h[u];T(e)&&(U[u]=e.bind(F))}if(s?c&&n.push(c):(n.length&&n.forEach((t=>pr(e,t,F))),c&&pr(e,c,F)),l)for(const u in l){const e=l[u],t=Cr({get:T(e)?e.bind(F,F):T(e.get)?e.get.bind(F,F):f,set:!T(e)&&T(e.set)?e.set.bind(F):f});Object.defineProperty(U,u,{enumerable:!0,configurable:!0,get:()=>t.value,set:e=>t.value=e})}var V;if(d&&r.push(d),!s&&r.length&&r.forEach((e=>{for(const t in e)vr(e[t],U,F,t)})),p&&i.push(p),!s&&i.length&&i.forEach((e=>{const t=T(e)?e.call(F):e;Reflect.ownKeys(t).forEach((e=>{ar(e,t[e])}))})),s&&(m&&y(e.components||(e.components=y({},e.type.components)),m),g&&y(e.directives||(e.directives=y({},e.type.directives)),g)),s||hr("created","c",t,e,j),_&&rn(_.bind(F)),b&&sn(b.bind(F)),w&&on(w.bind(F)),I&&an(I.bind(F)),O&&gn(O.bind(F),"a",V),S&&function(e,t){gn(e,"da",t)}(S.bind(F)),L&&((e,t=Ir)=>{tn("ec",e,t)})(L.bind(F)),D&&hn(D.bind(F)),P&&un(P.bind(F)),A&&cn(A.bind(F)),C&&ln(C.bind(F)),E(M)&&!s)if(M.length){const t=e.exposed||(e.exposed=st({}));M.forEach((e=>{t[e]=function(e,t){return Ze(e[t])?e[t]:new ot(e,t)}(F,e)}))}else e.exposed||(e.exposed=u)}function hr(e,t,n,r,i){for(let s=0;s<i.length;s++)fr(e,t,i[s],r);fr(e,t,n,r)}function fr(e,t,n,r){const{extends:i,mixins:s}=n,o=n[e];if(i&&fr(e,t,i,r),s)for(let a=0;a<s.length;a++)fr(e,t,s[a],r);o&&lt(o.bind(r.proxy),r,t)}function dr(e,t,n,r,i){for(let s=0;s<t.length;s++)ur(e,t[s],n,r,i,!0)}function pr(e,t,n){lr=!1;const r=t.call(n,n);lr=!0,N(r)&&(e.data===u?e.data=Ke(r):y(e.data,r))}function vr(e,t,n,r){const i=r.includes(".")?function(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}(n,r):()=>n[r];if(O(e)){const n=t[e];T(n)&&dn(i,n)}else if(T(e))dn(i,e.bind(n));else if(N(e))if(E(e))e.forEach((e=>vr(e,t,n,r)));else{const r=T(e.handler)?e.handler.bind(n):t[e.handler];T(r)&&dn(i,r,e)}}function mr(e,t,n){const r=n.appContext.config.optionMergeStrategies,{mixins:i,extends:s}=t;s&&mr(e,s,n),i&&i.forEach((t=>mr(e,t,n)));for(const o in t)r&&b(r,o)?e[o]=r[o](e[o],t[o],n.proxy,o):e[o]=t[o]}const yr=e=>e?Or(e)?e.exposed?e.exposed:e.proxy:yr(e.parent):null,gr=y(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>yr(e.parent),$root:e=>yr(e.root),$emit:e=>e.emit,$options:e=>function(e){const t=e.type,{__merged:n,mixins:r,extends:i}=t;if(n)return n;const s=e.appContext.mixins;if(!s.length&&!r&&!i)return t;const o={};return s.forEach((t=>mr(o,t,e))),mr(o,t,e),t.__merged=o}(e),$forceUpdate:e=>()=>Ot(e.update),$nextTick:e=>Tt.bind(e.proxy),$watch:e=>vn.bind(e)}),_r={get({_:e},t){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=e;if("__v_skip"===t)return!0;let l;if("$"!==t[0]){const a=o[t];if(void 0!==a)switch(a){case 0:return r[t];case 1:return i[t];case 3:return n[t];case 2:return s[t]}else{if(r!==u&&b(r,t))return o[t]=0,r[t];if(i!==u&&b(i,t))return o[t]=1,i[t];if((l=e.propsOptions[0])&&b(l,t))return o[t]=2,s[t];if(n!==u&&b(n,t))return o[t]=3,n[t];lr&&(o[t]=4)}}const h=gr[t];let f,d;return h?("$attrs"===t&&ie(e,0,t),h(e)):(f=a.__cssModules)&&(f=f[t])?f:n!==u&&b(n,t)?(o[t]=3,n[t]):(d=c.config.globalProperties,b(d,t)?d[t]:void 0)},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;if(i!==u&&b(i,t))i[t]=n;else if(r!==u&&b(r,t))r[t]=n;else if(b(e.props,t))return!1;return("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return void 0!==n[o]||e!==u&&b(e,o)||t!==u&&b(t,o)||(a=s[0])&&b(a,o)||b(r,o)||b(gr,o)||b(i.config.globalProperties,o)}},br=y({},_r,{get(e,t){if(t!==Symbol.unscopables)return _r.get(e,t,e)},has:(e,n)=>"_"!==n[0]&&!t(n)}),Er=Nn();let wr=0;let Ir=null;const Tr=e=>{Ir=e};function Or(e){return 4&e.vnode.shapeFlag}let Sr=!1;function Nr(e,t,n){T(t)?e.render=t:N(t)&&(e.setupState=st(t)),kr(e)}function kr(e,t){const n=e.type;e.render||(e.render=n.render||f,e.render._rc&&(e.withProxy=new Proxy(e.ctx,br))),Ir=e,ne(),ur(e,n),re(),Ir=null}function Ar(e,t=Ir){t&&(t.effects||(t.effects=[])).push(e)}function xr(e){return T(e)&&e.displayName||e.name}function Cr(e){const t=function(e){let t,n;return T(e)?(t=e,n=f):(t=e.get,n=e.set),new at(t,n,T(e)||!e.set)}(e);return Ar(t.effect),t}function Rr(e,t,n){const r=arguments.length;return 2===r?N(t)&&!E(t)?Jn(t)?er(e,null,[t]):er(e,t):er(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Jn(n)&&(n=[n]),er(e,t,n))}function Dr(e,t){let n;if(E(e)||O(e)){n=new Array(e.length);for(let r=0,i=e.length;r<i;r++)n[r]=t(e[r],r)}else if("number"==typeof e){n=new Array(e);for(let r=0;r<e;r++)n[r]=t(r+1,r)}else if(N(e))if(e[Symbol.iterator])n=Array.from(e,t);else{const r=Object.keys(e);n=new Array(r.length);for(let i=0,s=r.length;i<s;i++){const s=r[i];n[i]=t(e[s],s,i)}}else n=[];return n}const Pr="3.0.11",Lr="http://www.w3.org/2000/svg",Mr="undefined"!=typeof document?document:null;let Fr,Ur;const jr={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?Mr.createElementNS(Lr,e):Mr.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>Mr.createTextNode(e),createComment:e=>Mr.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Mr.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r){const i=r?Ur||(Ur=Mr.createElementNS(Lr,"svg")):Fr||(Fr=Mr.createElement("div"));i.innerHTML=e;const s=i.firstChild;let o=s,a=o;for(;o;)a=o,jr.insert(o,t,n),o=i.firstChild;return[s,a]}};const Vr=/\s*!important$/;function Br(e,t,n){if(E(n))n.forEach((n=>Br(e,t,n)));else if(t.startsWith("--"))e.setProperty(t,n);else{const r=function(e,t){const n=$r[t];if(n)return n;let r=M(t);if("filter"!==r&&r in e)return $r[t]=r;r=j(r);for(let i=0;i<qr.length;i++){const n=qr[i]+r;if(n in e)return $r[t]=n}return t}(e,t);Vr.test(n)?e.setProperty(U(r),n.replace(Vr,""),"important"):e[r]=n}}const qr=["Webkit","Moz","ms"],$r={};const zr="http://www.w3.org/1999/xlink";let Kr=Date.now,Hr=!1;if("undefined"!=typeof window){Kr()>document.createEvent("Event").timeStamp&&(Kr=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);Hr=!!(e&&Number(e[1])<=53)}let Gr=0;const Wr=Promise.resolve(),Jr=()=>{Gr=0};function Yr(e,t,n,r){e.addEventListener(t,n,r)}function Xr(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=function(e){let t;if(Qr.test(e)){let n;for(t={};n=e.match(Qr);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[U(e.slice(2)),t]}(t);if(r){Yr(e,n,s[t]=function(e,t){const n=e=>{const r=e.timeStamp||Kr();(Hr||r>=n.attached-1)&&lt(function(e,t){if(E(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e(t)))}return t}(e,n.value),t,5,[e])};return n.value=e,n.attached=(()=>Gr||(Wr.then(Jr),Gr=Kr()))(),n}(r,i),a)}else o&&(!function(e,t,n,r){e.removeEventListener(t,n,r)}(e,n,o,a),s[t]=void 0)}}const Qr=/(?:Once|Passive|Capture)$/;const Zr=/^on[a-z]/;const ei=e=>{const t=e.props["onUpdate:modelValue"];return E(t)?e=>q(t,e):t};function ti(e){e.target.composing=!0}function ni(e){const t=e.target;t.composing&&(t.composing=!1,function(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}(t,"input"))}const ri={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e._assign=ei(i);const s=r||"number"===e.type;Yr(e,t?"change":"input",(t=>{if(t.target.composing)return;let r=e.value;n?r=r.trim():s&&(r=z(r)),e._assign(r)})),n&&Yr(e,"change",(()=>{e.value=e.value.trim()})),t||(Yr(e,"compositionstart",ti),Yr(e,"compositionend",ni),Yr(e,"change",ni))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{trim:n,number:r}},i){if(e._assign=ei(i),e.composing)return;if(document.activeElement===e){if(n&&e.value.trim()===t)return;if((r||"number"===e.type)&&z(e.value)===t)return}const s=null==t?"":t;e.value!==s&&(e.value=s)}},ii=y({patchProp:(e,t,r,i,s=!1,o,a,c,l)=>{switch(t){case"class":!function(e,t,n){if(null==t&&(t=""),n)e.setAttribute("class",t);else{const n=e._vtc;n&&(t=(t?[t,...n]:[...n]).join(" ")),e.className=t}}(e,i,s);break;case"style":!function(e,t,n){const r=e.style;if(n)if(O(n)){if(t!==n){const t=r.display;r.cssText=n,"_vod"in e&&(r.display=t)}}else{for(const e in n)Br(r,e,n[e]);if(t&&!O(t))for(const e in t)null==n[e]&&Br(r,e,"")}else e.removeAttribute("style")}(e,r,i);break;default:v(t)?m(t)||Xr(e,t,0,i,a):function(e,t,n,r){if(r)return"innerHTML"===t||!!(t in e&&Zr.test(t)&&T(n));if("spellcheck"===t||"draggable"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if(Zr.test(t)&&O(n))return!1;return t in e}(e,t,i,s)?function(e,t,n,r,i,s,o){if("innerHTML"===t||"textContent"===t)return r&&o(r,i,s),void(e[t]=null==n?"":n);if("value"!==t||"PROGRESS"===e.tagName){if(""===n||null==n){const r=typeof e[t];if(""===n&&"boolean"===r)return void(e[t]=!0);if(null==n&&"string"===r)return e[t]="",void e.removeAttribute(t);if("number"===r)return e[t]=0,void e.removeAttribute(t)}try{e[t]=n}catch(a){}}else{e._value=n;const t=null==n?"":n;e.value!==t&&(e.value=t)}}(e,t,i,o,a,c,l):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),function(e,t,r,i){if(i&&t.startsWith("xlink:"))null==r?e.removeAttributeNS(zr,t.slice(6,t.length)):e.setAttributeNS(zr,t,r);else{const i=n(t);null==r||i&&!1===r?e.removeAttribute(t):e.setAttribute(t,i?"":r)}}(e,t,i,s))}},forcePatchProp:(e,t)=>"value"===t},jr);let si;const oi=(...e)=>{const t=(si||(si=Pn(ii))).createApp(...e),{mount:n}=t;return t.mount=e=>{const r=function(e){if(O(e)){return document.querySelector(e)}return e}
/*!
  * vue-router v4.0.11
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */(e);if(!r)return;const i=t._component;T(i)||i.render||i.template||(i.template=r.innerHTML),r.innerHTML="";const s=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},t};const ai="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,ci=e=>ai?Symbol(e):"_vr_"+e,li=ci("rvlm"),ui=ci("rvd"),hi=ci("r"),fi=ci("rl"),di=ci("rvl"),pi="undefined"!=typeof window;const vi=Object.assign;function mi(e,t){const n={};for(const r in t){const i=t[r];n[r]=Array.isArray(i)?i.map(e):e(i)}return n}const yi=()=>{},gi=/\/$/;function _i(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),s=t.slice(a+1,c>-1?c:t.length),i=e(s)),c>-1&&(r=r||t.slice(0,c),o=t.slice(c,t.length)),r=function(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],1!==o&&"."!==s){if(".."!==s)break;o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function bi(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function Ei(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function wi(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Ii(e[n],t[n]))return!1;return!0}function Ii(e,t){return Array.isArray(e)?Ti(e,t):Array.isArray(t)?Ti(t,e):e===t}function Ti(e,t){return Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}var Oi,Si,Ni,ki;function Ai(e){if(!e)if(pi){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),e.replace(gi,"")}(Si=Oi||(Oi={})).pop="pop",Si.push="push",(ki=Ni||(Ni={})).back="back",ki.forward="forward",ki.unknown="";const xi=/^[^#]+#/;function Ci(e,t){return e.replace(xi,"#")+t}const Ri=()=>({left:window.pageXOffset,top:window.pageYOffset});function Di(e){let t;if("el"in e){const n=e.el,r="string"==typeof n&&n.startsWith("#"),i="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function Pi(e,t){return(history.state?history.state.position-t:-1)+e}const Li=new Map;function Mi(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),bi(n,"")}return bi(n,e)+r+i}function Fi(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Ri():null}}function Ui(e){const{history:t,location:n}=window,r={value:Mi(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:location.protocol+"//"+location.host+e+r;try{t[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(l){console.error(l),n[o?"replace":"assign"](c)}}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:function(e,n){const o=vi({},i.value,t.state,{forward:e,scroll:Ri()});s(o.current,o,!0),s(e,vi({},Fi(r.value,e,null),{position:o.position+1},n),!1),r.value=e},replace:function(e,n){s(e,vi({},t.state,Fi(i.value.back,e,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=e}}}function ji(e){const t=Ui(e=Ai(e)),n=function(e,t,n,r){let i=[],s=[],o=null;const a=({state:s})=>{const a=Mi(e,location),c=n.value,l=t.value;let u=0;if(s){if(n.value=a,t.value=s,o&&o===c)return void(o=null);u=l?s.position-l.position:0}else r(a);i.forEach((e=>{e(n.value,c,{delta:u,type:Oi.pop,direction:u?u>0?Ni.forward:Ni.back:Ni.unknown})}))};function c(){const{history:e}=window;e.state&&e.replaceState(vi({},e.state,{scroll:Ri()}),"")}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",c),{pauseListeners:function(){o=n.value},listen:function(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t},destroy:function(){for(const e of s)e();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",c)}}}(e,t.state,t.location,t.replace);const r=vi({location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e)},createHref:Ci.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function Vi(e){return"string"==typeof e||"symbol"==typeof e}const Bi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},qi=ci("nf");var $i,zi;function Ki(e,t){return vi(new Error,{type:e,[qi]:!0},t)}function Hi(e,t){return e instanceof Error&&qi in e&&(null==t||!!(e.type&t))}(zi=$i||($i={}))[zi.aborted=4]="aborted",zi[zi.cancelled=8]="cancelled",zi[zi.duplicated=16]="duplicated";const Gi={sensitive:!1,strict:!1,start:!0,end:!0},Wi=/[.+*?^${}()[\]/\\]/g;function Ji(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function Yi(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const e=Ji(r[n],i[n]);if(e)return e;n++}return i.length-r.length}const Xi={type:0,value:""},Qi=/[a-zA-Z0-9_]/;function Zi(e,t,n){const r=function(e,t){const n=vi({},Gi,t),r=[];let i=n.start?"^":"";const s=[];for(const c of e){const e=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let t=0;t<c.length;t++){const r=c[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(Wi,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:l,regexp:u}=r;s.push({name:e,repeatable:n,optional:l});const h=u||"[^/]+?";if("[^/]+?"!==h){o+=10;try{new RegExp(`(${h})`)}catch(a){throw new Error(`Invalid custom RegExp for param "${e}" (${h}): `+a.message)}}let f=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;t||(f=l&&c.length<2?`(?:/${f})`:"/"+f),l&&(f+="?"),i+=f,o+=20,l&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");return{re:o,score:r,keys:s,parse:function(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n},stringify:function(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,c=s in t?t[s]:"";if(Array.isArray(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const l=Array.isArray(c)?c.join("/"):c;if(!l){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n}}}(function(e){if(!e)return[[]];if("/"===e)return[[Xi]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,l="",u="";function h(){l&&(0===n?s.push({type:0,value:l}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),l="")}function f(){l+=a}for(;c<e.length;)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(l&&h(),o()):":"===a?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:"("===a?n=2:Qi.test(a)?f():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:t("Unknown state")}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}(e.path),n),i=vi(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function es(e,t){const n=[],r=new Map;function i(e,n,r){const a=!r,c=function(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ts(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}(e);c.aliasOf=r&&r.record;const l=is(t,e),u=[c];if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(vi({},c,{components:r?r.record.components:c.components,path:e,aliasOf:r?r.record:c}))}let h,f;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(h=Zi(t,n,l),r?r.alias.push(h):(f=f||h,f!==h&&f.alias.push(h),a&&e.name&&!ns(h)&&s(e.name)),"children"in c){const e=c.children;for(let t=0;t<e.length;t++)i(e[t],h,r&&r.children[t])}r=r||h,o(h)}return f?()=>{s(f)}:yi}function s(e){if(Vi(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function o(e){let t=0;for(;t<n.length&&Yi(e,n[t])>=0;)t++;n.splice(t,0,e),e.record.name&&!ns(e)&&r.set(e.record.name,e)}return t=is({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>i(e))),{addRoute:i,resolve:function(e,t){let i,s,o,a={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw Ki(1,{location:e});o=i.record.name,a=vi(function(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}(t.params,i.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),s=i.stringify(a)}else if("path"in e)s=e.path,i=n.find((e=>e.re.test(s))),i&&(a=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw Ki(1,{location:e,currentLocation:t});o=i.record.name,a=vi({},t.params,e.params),s=i.stringify(a)}const c=[];let l=i;for(;l;)c.unshift(l.record),l=l.parent;return{name:o,path:s,params:a,matched:c,meta:rs(c)}},removeRoute:s,getRoutes:function(){return n},getRecordMatcher:function(e){return r.get(e)}}}function ts(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"==typeof n?n:n[r];return t}function ns(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function rs(e){return e.reduce(((e,t)=>vi(e,t.meta)),{})}function is(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const ss=/#/g,os=/&/g,as=/\//g,cs=/=/g,ls=/\?/g,us=/\+/g,hs=/%5B/g,fs=/%5D/g,ds=/%5E/g,ps=/%60/g,vs=/%7B/g,ms=/%7C/g,ys=/%7D/g,gs=/%20/g;function _s(e){return encodeURI(""+e).replace(ms,"|").replace(hs,"[").replace(fs,"]")}function bs(e){return _s(e).replace(us,"%2B").replace(gs,"+").replace(ss,"%23").replace(os,"%26").replace(ps,"`").replace(vs,"{").replace(ys,"}").replace(ds,"^")}function Es(e){return null==e?"":function(e){return _s(e).replace(ss,"%23").replace(ls,"%3F")}(e).replace(as,"%2F")}function ws(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Is(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const e=n[r].replace(us," "),i=e.indexOf("="),s=ws(i<0?e:e.slice(0,i)),o=i<0?null:ws(e.slice(i+1));if(s in t){let e=t[s];Array.isArray(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function Ts(e){let t="";for(let n in e){const r=e[n];if(n=bs(n).replace(cs,"%3D"),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map((e=>e&&bs(e))):[r&&bs(r)]).forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Os(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}function Ss(){let e=[];return{add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e,reset:function(){e=[]}}}function Ns(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const c=e=>{var c;!1===e?a(Ki(4,{from:n,to:t})):e instanceof Error?a(e):"string"==typeof(c=e)||c&&"object"==typeof c?a(Ki(2,{from:t,to:e})):(s&&r.enterCallbacks[i]===s&&"function"==typeof e&&s.push(e),o())},l=e.call(r&&r.instances[i],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch((e=>a(e)))}))}function ks(e,t,n,r){const i=[];for(const o of e)for(const e in o.components){let a=o.components[e];if("beforeRouteEnter"===t||o.instances[e])if("object"==typeof(s=a)||"displayName"in s||"props"in s||"__vccOpts"in s){const s=(a.__vccOpts||a)[t];s&&i.push(Ns(s,n,r,o,e))}else{let s=a();i.push((()=>s.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${o.path}"`));const s=(a=i).__esModule||ai&&"Module"===a[Symbol.toStringTag]?i.default:i;var a;o.components[e]=s;const c=(s.__vccOpts||s)[t];return c&&Ns(c,n,r,o,e)()}))))}}var s;return i}function As(e){const t=cr(hi),n=cr(fi),r=Cr((()=>t.resolve(rt(e.to)))),i=Cr((()=>{const{matched:e}=r.value,{length:t}=e,i=e[t-1],s=n.matched;if(!i||!s.length)return-1;const o=s.findIndex(Ei.bind(null,i));if(o>-1)return o;const a=Cs(e[t-2]);return t>1&&Cs(i)===a&&s[s.length-1].path!==a?s.findIndex(Ei.bind(null,e[t-2])):o})),s=Cr((()=>i.value>-1&&function(e,t){for(const n in t){const r=t[n],i=e[n];if("string"==typeof r){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}(n.params,r.value.params))),o=Cr((()=>i.value>-1&&i.value===n.matched.length-1&&wi(n.params,r.value.params)));return{route:r,href:Cr((()=>r.value.href)),isActive:s,isExactActive:o,navigate:function(n={}){return function(e){if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;if(void 0!==e.button&&0!==e.button)return;if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}e.preventDefault&&e.preventDefault();return!0}(n)?t[rt(e.replace)?"replace":"push"](rt(e.to)).catch(yi):Promise.resolve()}}}const xs=xn({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:As,setup(e,{slots:t}){const n=Ke(As(e)),{options:r}=cr(hi),i=Cr((()=>({[Rs(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Rs(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const r=t.default&&t.default(n);return e.custom?r:Rr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}});function Cs(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Rs=(e,t,n)=>null!=e?e:null!=t?t:n;function Ds(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Ps=xn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const r=cr(di),i=Cr((()=>e.route||r.value)),s=cr(ui,0),o=Cr((()=>i.value.matched[s]));ar(ui,s+1),ar(li,o),ar(di,i);const a=et();return dn((()=>[a.value,o.value,e.name]),(([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&Ei(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const r=i.value,s=o.value,c=s&&s.components[e.name],l=e.name;if(!c)return Ds(n.default,{Component:c,route:r});const u=s.props[e.name],h=u?!0===u?r.params:"function"==typeof u?u(r):u:null,f=Rr(c,vi({},h,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(s.instances[l]=null)},ref:a}));return Ds(n.default,{Component:f,route:r})||f}}});function Ls(e){const t=es(e.routes,e),n=e.parseQuery||Is,r=e.stringifyQuery||Ts,i=e.history,s=Ss(),o=Ss(),a=Ss(),c=nt(Bi,!0);let l=Bi;pi&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=mi.bind(null,(e=>""+e)),h=mi.bind(null,Es),f=mi.bind(null,ws);function d(e,s){if(s=vi({},s||c.value),"string"==typeof e){const r=_i(n,e,s.path),o=t.resolve({path:r.path},s),a=i.createHref(r.fullPath);return vi(r,o,{params:f(o.params),hash:ws(r.hash),redirectedFrom:void 0,href:a})}let o;if("path"in e)o=vi({},e,{path:_i(n,e.path,s.path).path});else{const t=vi({},e.params);for(const e in t)null==t[e]&&delete t[e];o=vi({},e,{params:h(e.params)}),s.params=h(s.params)}const a=t.resolve(o,s),l=e.hash||"";a.params=u(f(a.params));const d=function(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(r,vi({},e,{hash:(p=l,_s(p).replace(vs,"{").replace(ys,"}").replace(ds,"^")),path:a.path}));var p;const v=i.createHref(d);return vi({fullPath:d,hash:l,query:r===Ts?Os(e.query):e.query||{}},a,{redirectedFrom:void 0,href:v})}function p(e){return"string"==typeof e?_i(n,e,c.value.path):vi({},e)}function v(e,t){if(l!==e)return Ki(8,{from:t,to:e})}function m(e){return g(e)}function y(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"==typeof n?n(e):n;return"string"==typeof r&&(r=r.includes("?")||r.includes("#")?r=p(r):{path:r},r.params={}),vi({query:e.query,hash:e.hash,params:e.params},r)}}function g(e,t){const n=l=d(e),i=c.value,s=e.state,o=e.force,a=!0===e.replace,u=y(n);if(u)return g(vi(p(u),{state:s,force:o,replace:a}),t||n);const h=n;let f;return h.redirectedFrom=t,!o&&function(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Ei(t.matched[r],n.matched[i])&&wi(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(r,i,n)&&(f=Ki(16,{to:h,from:i}),x(i,i,!0,!1)),(f?Promise.resolve(f):b(h,i)).catch((e=>Hi(e)?e:k(e,h,i))).then((e=>{if(e){if(Hi(e,2))return g(vi(p(e.to),{state:s,force:o,replace:a}),t||h)}else e=w(h,i,!0,a,s);return E(h,i,e),e}))}function _(e,t){const n=v(e,t);return n?Promise.reject(n):Promise.resolve()}function b(e,t){let n;const[r,i,a]=function(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>Ei(e,s)))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>Ei(e,a)))||i.push(a))}return[n,r,i]}(e,t);n=ks(r.reverse(),"beforeRouteLeave",e,t);for(const s of r)s.leaveGuards.forEach((r=>{n.push(Ns(r,e,t))}));const c=_.bind(null,e,t);return n.push(c),Ms(n).then((()=>{n=[];for(const r of s.list())n.push(Ns(r,e,t));return n.push(c),Ms(n)})).then((()=>{n=ks(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(Ns(r,e,t))}));return n.push(c),Ms(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const i of r.beforeEnter)n.push(Ns(i,e,t));else n.push(Ns(r.beforeEnter,e,t));return n.push(c),Ms(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=ks(a,"beforeRouteEnter",e,t),n.push(c),Ms(n)))).then((()=>{n=[];for(const r of o.list())n.push(Ns(r,e,t));return n.push(c),Ms(n)})).catch((e=>Hi(e,8)?e:Promise.reject(e)))}function E(e,t,n){for(const r of a.list())r(e,t,n)}function w(e,t,n,r,s){const o=v(e,t);if(o)return o;const a=t===Bi,l=pi?history.state:{};n&&(r||a?i.replace(e.fullPath,vi({scroll:a&&l&&l.scroll},s)):i.push(e.fullPath,s)),c.value=e,x(e,t,n,a),A()}let I;function T(){I=i.listen(((e,t,n)=>{const r=d(e),s=y(r);if(s)return void g(vi(s,{replace:!0}),r).catch(yi);l=r;const o=c.value;var a,u;pi&&(a=Pi(o.fullPath,n.delta),u=Ri(),Li.set(a,u)),b(r,o).catch((e=>Hi(e,12)?e:Hi(e,2)?(g(e.to,r).then((e=>{Hi(e,20)&&!n.delta&&n.type===Oi.pop&&i.go(-1,!1)})).catch(yi),Promise.reject()):(n.delta&&i.go(-n.delta,!1),k(e,r,o)))).then((e=>{(e=e||w(r,o,!1))&&(n.delta?i.go(-n.delta,!1):n.type===Oi.pop&&Hi(e,20)&&i.go(-1,!1)),E(r,o,e)})).catch(yi)}))}let O,S=Ss(),N=Ss();function k(e,t,n){A(e);const r=N.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function A(e){O||(O=!0,T(),S.list().forEach((([t,n])=>e?n(e):t())),S.reset())}function x(t,n,r,i){const{scrollBehavior:s}=e;if(!pi||!s)return Promise.resolve();const o=!r&&function(e){const t=Li.get(e);return Li.delete(e),t}(Pi(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return Tt().then((()=>s(t,n,o))).then((e=>e&&Di(e))).catch((e=>k(e,t,n)))}const C=e=>i.go(e);let R;const D=new Set;return{currentRoute:c,addRoute:function(e,n){let r,i;return Vi(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)},removeRoute:function(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)},hasRoute:function(e){return!!t.getRecordMatcher(e)},getRoutes:function(){return t.getRoutes().map((e=>e.record))},resolve:d,options:e,push:m,replace:function(e){return m(vi(p(e),{replace:!0}))},go:C,back:()=>C(-1),forward:()=>C(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:N.add,isReady:function(){return O&&c.value!==Bi?Promise.resolve():new Promise(((e,t)=>{S.add([e,t])}))},install(e){e.component("RouterLink",xs),e.component("RouterView",Ps),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>rt(c)}),pi&&!R&&c.value===Bi&&(R=!0,m(i.location).catch((e=>{})));const t={};for(const r in Bi)t[r]=Cr((()=>c.value[r]));e.provide(hi,this),e.provide(fi,Ke(t)),e.provide(di,c);const n=e.unmount;D.add(e),e.unmount=function(){D.delete(e),D.size<1&&(l=Bi,I&&I(),c.value=Bi,R=!1,O=!1),n()}}}}function Ms(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function Fs(){return cr(hi)}function Us(){return cr(fi)}var js="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Vs(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})})),t}function Bs(e){var t={exports:{}};return e(t,t.exports),t.exports}var qs=Bs((function(e,t){var n,r="undefined"!=typeof self?self:js,i=function(){function e(){this.fetch=!1,this.DOMException=r.DOMException}return e.prototype=r,new e}();n=i,function(e){var t="URLSearchParams"in n,r="Symbol"in n&&"iterator"in Symbol,i="FileReader"in n&&"Blob"in n&&function(){try{return new Blob,!0}catch(e){return!1}}(),s="FormData"in n,o="ArrayBuffer"in n;if(o)var a=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],c=ArrayBuffer.isView||function(e){return e&&a.indexOf(Object.prototype.toString.call(e))>-1};function l(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function u(e){return"string"!=typeof e&&(e=String(e)),e}function h(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return r&&(t[Symbol.iterator]=function(){return t}),t}function f(e){this.map={},e instanceof f?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function d(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function p(e){return new Promise((function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function v(e){var t=new FileReader,n=p(t);return t.readAsArrayBuffer(e),n}function m(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function y(){return this.bodyUsed=!1,this._initBody=function(e){var n;this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:i&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:s&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:t&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():o&&i&&(n=e)&&DataView.prototype.isPrototypeOf(n)?(this._bodyArrayBuffer=m(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):o&&(ArrayBuffer.prototype.isPrototypeOf(e)||c(e))?this._bodyArrayBuffer=m(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):t&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},i&&(this.blob=function(){var e=d(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?d(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(v)}),this.text=function(){var e,t,n,r=d(this);if(r)return r;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,n=p(t),t.readAsText(e),n;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),n=new Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},s&&(this.formData=function(){return this.text().then(b)}),this.json=function(){return this.text().then(JSON.parse)},this}f.prototype.append=function(e,t){e=l(e),t=u(t);var n=this.map[e];this.map[e]=n?n+", "+t:t},f.prototype.delete=function(e){delete this.map[l(e)]},f.prototype.get=function(e){return e=l(e),this.has(e)?this.map[e]:null},f.prototype.has=function(e){return this.map.hasOwnProperty(l(e))},f.prototype.set=function(e,t){this.map[l(e)]=u(t)},f.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},f.prototype.keys=function(){var e=[];return this.forEach((function(t,n){e.push(n)})),h(e)},f.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),h(e)},f.prototype.entries=function(){var e=[];return this.forEach((function(t,n){e.push([n,t])})),h(e)},r&&(f.prototype[Symbol.iterator]=f.prototype.entries);var g=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function _(e,t){var n,r,i=(t=t||{}).body;if(e instanceof _){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new f(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,i||null==e._bodyInit||(i=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new f(t.headers)),this.method=(n=t.method||this.method||"GET",r=n.toUpperCase(),g.indexOf(r)>-1?r:n),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&i)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(i)}function b(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var n=e.split("="),r=n.shift().replace(/\+/g," "),i=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(r),decodeURIComponent(i))}})),t}function E(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new f(t.headers),this.url=t.url||"",this._initBody(e)}_.prototype.clone=function(){return new _(this,{body:this._bodyInit})},y.call(_.prototype),y.call(E.prototype),E.prototype.clone=function(){return new E(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new f(this.headers),url:this.url})},E.error=function(){var e=new E(null,{status:0,statusText:""});return e.type="error",e};var w=[301,302,303,307,308];E.redirect=function(e,t){if(-1===w.indexOf(t))throw new RangeError("Invalid status code");return new E(null,{status:t,headers:{location:e}})},e.DOMException=n.DOMException;try{new e.DOMException}catch(T){e.DOMException=function(e,t){this.message=e,this.name=t;var n=Error(e);this.stack=n.stack},e.DOMException.prototype=Object.create(Error.prototype),e.DOMException.prototype.constructor=e.DOMException}function I(t,n){return new Promise((function(r,s){var o=new _(t,n);if(o.signal&&o.signal.aborted)return s(new e.DOMException("Aborted","AbortError"));var a=new XMLHttpRequest;function c(){a.abort()}a.onload=function(){var e,t,n={status:a.status,statusText:a.statusText,headers:(e=a.getAllResponseHeaders()||"",t=new f,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(e){var n=e.split(":"),r=n.shift().trim();if(r){var i=n.join(":").trim();t.append(r,i)}})),t)};n.url="responseURL"in a?a.responseURL:n.headers.get("X-Request-URL");var i="response"in a?a.response:a.responseText;r(new E(i,n))},a.onerror=function(){s(new TypeError("Network request failed"))},a.ontimeout=function(){s(new TypeError("Network request failed"))},a.onabort=function(){s(new e.DOMException("Aborted","AbortError"))},a.open(o.method,o.url,!0),"include"===o.credentials?a.withCredentials=!0:"omit"===o.credentials&&(a.withCredentials=!1),"responseType"in a&&i&&(a.responseType="blob"),o.headers.forEach((function(e,t){a.setRequestHeader(t,e)})),o.signal&&(o.signal.addEventListener("abort",c),a.onreadystatechange=function(){4===a.readyState&&o.signal.removeEventListener("abort",c)}),a.send(void 0===o._bodyInit?null:o._bodyInit)}))}I.polyfill=!0,n.fetch||(n.fetch=I,n.Headers=f,n.Request=_,n.Response=E),e.Headers=f,e.Request=_,e.Response=E,e.fetch=I,Object.defineProperty(e,"__esModule",{value:!0})}({}),i.fetch.ponyfill=!0,delete i.fetch.polyfill;var s=i;(t=s.fetch).default=s.fetch,t.fetch=s.fetch,t.Headers=s.Headers,t.Request=s.Request,t.Response=s.Response,e.exports=t})),$s="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):void 0;function zs(e){return(zs="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ks(e){return Hs(e,[])}function Hs(e,t){switch(zs(e)){case"string":return JSON.stringify(e);case"function":return e.name?"[function ".concat(e.name,"]"):"[function]";case"object":return null===e?"null":function(e,t){if(-1!==t.indexOf(e))return"[Circular]";var n=[].concat(t,[e]),r=function(e){var t=e[String($s)];if("function"==typeof t)return t;if("function"==typeof e.inspect)return e.inspect}(e);if(void 0!==r){var i=r.call(e);if(i!==e)return"string"==typeof i?i:Hs(i,n)}else if(Array.isArray(e))return function(e,t){if(0===e.length)return"[]";if(t.length>2)return"[Array]";for(var n=Math.min(10,e.length),r=e.length-n,i=[],s=0;s<n;++s)i.push(Hs(e[s],t));1===r?i.push("... 1 more item"):r>1&&i.push("... ".concat(r," more items"));return"["+i.join(", ")+"]"}(e,n);return function(e,t){var n=Object.keys(e);if(0===n.length)return"{}";if(t.length>2)return"["+function(e){var t=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if("Object"===t&&"function"==typeof e.constructor){var n=e.constructor.name;if("string"==typeof n&&""!==n)return n}return t}(e)+"]";return"{ "+n.map((function(n){return n+": "+Hs(e[n],t)})).join(", ")+" }"}(e,n)}(e,t);default:return String(e)}}function Gs(e){var t=e.prototype.toJSON;"function"==typeof t||function(e,t){if(!Boolean(e))throw new Error(null!=t?t:"Unexpected invariant triggered.")}(0),e.prototype.inspect=t,$s&&(e.prototype[$s]=t)}var Ws=function(){function e(e,t,n){this.start=e.start,this.end=t.end,this.startToken=e,this.endToken=t,this.source=n}return e.prototype.toJSON=function(){return{start:this.start,end:this.end}},e}();Gs(Ws);var Js=function(){function e(e,t,n,r,i,s,o){this.kind=e,this.start=t,this.end=n,this.line=r,this.column=i,this.value=o,this.prev=s,this.next=null}return e.prototype.toJSON=function(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}},e}();function Ys(e){return null!=e&&"string"==typeof e.kind}Gs(Js);var Xs={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},Qs=Object.freeze({});function Zs(e,t,n){var r=e[t];if(r){if(!n&&"function"==typeof r)return r;var i=n?r.leave:r.enter;if("function"==typeof i)return i}else{var s=n?e.leave:e.enter;if(s){if("function"==typeof s)return s;var o=s[t];if("function"==typeof o)return o}}}function eo(e){var t=e.split(/\r\n|[\n\r]/g),n=function(e){for(var t,n=!0,r=!0,i=0,s=null,o=0;o<e.length;++o)switch(e.charCodeAt(o)){case 13:10===e.charCodeAt(o+1)&&++o;case 10:n=!1,r=!0,i=0;break;case 9:case 32:++i;break;default:r&&!n&&(null===s||i<s)&&(s=i),r=!1}return null!==(t=s)&&void 0!==t?t:0}(e);if(0!==n)for(var r=1;r<t.length;r++)t[r]=t[r].slice(n);for(var i=0;i<t.length&&to(t[i]);)++i;for(var s=t.length;s>i&&to(t[s-1]);)--s;return t.slice(i,s).join("\n")}function to(e){for(var t=0;t<e.length;++t)if(" "!==e[t]&&"\t"!==e[t])return!1;return!0}var no={Name:function(e){return e.value},Variable:function(e){return"$"+e.name},Document:function(e){return io(e.definitions,"\n\n")+"\n"},OperationDefinition:function(e){var t=e.operation,n=e.name,r=oo("(",io(e.variableDefinitions,", "),")"),i=io(e.directives," "),s=e.selectionSet;return n||i||r||"query"!==t?io([t,io([n,r]),i,s]," "):s},VariableDefinition:function(e){var t=e.variable,n=e.type,r=e.defaultValue,i=e.directives;return t+": "+n+oo(" = ",r)+oo(" ",io(i," "))},SelectionSet:function(e){return so(e.selections)},Field:function(e){var t=e.alias,n=e.name,r=e.arguments,i=e.directives,s=e.selectionSet,o=oo("",t,": ")+n,a=o+oo("(",io(r,", "),")");return a.length>80&&(a=o+oo("(\n",ao(io(r,"\n")),"\n)")),io([a,io(i," "),s]," ")},Argument:function(e){return e.name+": "+e.value},FragmentSpread:function(e){return"..."+e.name+oo(" ",io(e.directives," "))},InlineFragment:function(e){var t=e.typeCondition,n=e.directives,r=e.selectionSet;return io(["...",oo("on ",t),io(n," "),r]," ")},FragmentDefinition:function(e){var t=e.name,n=e.typeCondition,r=e.variableDefinitions,i=e.directives,s=e.selectionSet;return"fragment ".concat(t).concat(oo("(",io(r,", "),")")," ")+"on ".concat(n," ").concat(oo("",io(i," ")," "))+s},IntValue:function(e){return e.value},FloatValue:function(e){return e.value},StringValue:function(e,t){var n=e.value;return e.block?function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=-1===e.indexOf("\n"),i=" "===e[0]||"\t"===e[0],s='"'===e[e.length-1],o="\\"===e[e.length-1],a=!r||s||o||n,c="";return!a||r&&i||(c+="\n"+t),c+=t?e.replace(/\n/g,"\n"+t):e,a&&(c+="\n"),'"""'+c.replace(/"""/g,'\\"""')+'"""'}(n,"description"===t?"":"  "):JSON.stringify(n)},BooleanValue:function(e){return e.value?"true":"false"},NullValue:function(){return"null"},EnumValue:function(e){return e.value},ListValue:function(e){return"["+io(e.values,", ")+"]"},ObjectValue:function(e){return"{"+io(e.fields,", ")+"}"},ObjectField:function(e){return e.name+": "+e.value},Directive:function(e){return"@"+e.name+oo("(",io(e.arguments,", "),")")},NamedType:function(e){return e.name},ListType:function(e){return"["+e.type+"]"},NonNullType:function(e){return e.type+"!"},SchemaDefinition:ro((function(e){var t=e.directives,n=e.operationTypes;return io(["schema",io(t," "),so(n)]," ")})),OperationTypeDefinition:function(e){return e.operation+": "+e.type},ScalarTypeDefinition:ro((function(e){return io(["scalar",e.name,io(e.directives," ")]," ")})),ObjectTypeDefinition:ro((function(e){var t=e.name,n=e.interfaces,r=e.directives,i=e.fields;return io(["type",t,oo("implements ",io(n," & ")),io(r," "),so(i)]," ")})),FieldDefinition:ro((function(e){var t=e.name,n=e.arguments,r=e.type,i=e.directives;return t+(lo(n)?oo("(\n",ao(io(n,"\n")),"\n)"):oo("(",io(n,", "),")"))+": "+r+oo(" ",io(i," "))})),InputValueDefinition:ro((function(e){var t=e.name,n=e.type,r=e.defaultValue,i=e.directives;return io([t+": "+n,oo("= ",r),io(i," ")]," ")})),InterfaceTypeDefinition:ro((function(e){var t=e.name,n=e.interfaces,r=e.directives,i=e.fields;return io(["interface",t,oo("implements ",io(n," & ")),io(r," "),so(i)]," ")})),UnionTypeDefinition:ro((function(e){var t=e.name,n=e.directives,r=e.types;return io(["union",t,io(n," "),r&&0!==r.length?"= "+io(r," | "):""]," ")})),EnumTypeDefinition:ro((function(e){var t=e.name,n=e.directives,r=e.values;return io(["enum",t,io(n," "),so(r)]," ")})),EnumValueDefinition:ro((function(e){return io([e.name,io(e.directives," ")]," ")})),InputObjectTypeDefinition:ro((function(e){var t=e.name,n=e.directives,r=e.fields;return io(["input",t,io(n," "),so(r)]," ")})),DirectiveDefinition:ro((function(e){var t=e.name,n=e.arguments,r=e.repeatable,i=e.locations;return"directive @"+t+(lo(n)?oo("(\n",ao(io(n,"\n")),"\n)"):oo("(",io(n,", "),")"))+(r?" repeatable":"")+" on "+io(i," | ")})),SchemaExtension:function(e){var t=e.directives,n=e.operationTypes;return io(["extend schema",io(t," "),so(n)]," ")},ScalarTypeExtension:function(e){return io(["extend scalar",e.name,io(e.directives," ")]," ")},ObjectTypeExtension:function(e){var t=e.name,n=e.interfaces,r=e.directives,i=e.fields;return io(["extend type",t,oo("implements ",io(n," & ")),io(r," "),so(i)]," ")},InterfaceTypeExtension:function(e){var t=e.name,n=e.interfaces,r=e.directives,i=e.fields;return io(["extend interface",t,oo("implements ",io(n," & ")),io(r," "),so(i)]," ")},UnionTypeExtension:function(e){var t=e.name,n=e.directives,r=e.types;return io(["extend union",t,io(n," "),r&&0!==r.length?"= "+io(r," | "):""]," ")},EnumTypeExtension:function(e){var t=e.name,n=e.directives,r=e.values;return io(["extend enum",t,io(n," "),so(r)]," ")},InputObjectTypeExtension:function(e){var t=e.name,n=e.directives,r=e.fields;return io(["extend input",t,io(n," "),so(r)]," ")}};function ro(e){return function(t){return io([t.description,e(t)],"\n")}}function io(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return null!==(t=null==e?void 0:e.filter((function(e){return e})).join(n))&&void 0!==t?t:""}function so(e){return oo("{\n",ao(io(e,"\n")),"\n}")}function oo(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return null!=t&&""!==t?e+t+n:""}function ao(e){return oo("  ",e.replace(/\n/g,"\n  "))}function co(e){return-1!==e.indexOf("\n")}function lo(e){return null!=e&&e.some(co)}var uo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",print:function(e){return function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Xs,r=void 0,i=Array.isArray(e),s=[e],o=-1,a=[],c=void 0,l=void 0,u=void 0,h=[],f=[],d=e;do{var p=++o===s.length,v=p&&0!==a.length;if(p){if(l=0===f.length?void 0:h[h.length-1],c=u,u=f.pop(),v){if(i)c=c.slice();else{for(var m={},y=0,g=Object.keys(c);y<g.length;y++){var _=g[y];m[_]=c[_]}c=m}for(var b=0,E=0;E<a.length;E++){var w=a[E][0],I=a[E][1];i&&(w-=b),i&&null===I?(c.splice(w,1),b++):c[w]=I}}o=r.index,s=r.keys,a=r.edits,i=r.inArray,r=r.prev}else{if(l=u?i?o:s[o]:void 0,null==(c=u?u[l]:d))continue;u&&h.push(l)}var T,O=void 0;if(!Array.isArray(c)){if(!Ys(c))throw new Error("Invalid AST Node: ".concat(Ks(c),"."));var S=Zs(t,c.kind,p);if(S){if((O=S.call(t,c,l,u,h,f))===Qs)break;if(!1===O){if(!p){h.pop();continue}}else if(void 0!==O&&(a.push([l,O]),!p)){if(!Ys(O)){h.pop();continue}c=O}}}void 0===O&&v&&a.push([l,c]),p?h.pop():(r={inArray:i,index:o,keys:s,edits:a,prev:r},s=(i=Array.isArray(c))?c:null!==(T=n[c.kind])&&void 0!==T?T:[],o=-1,a=[],u&&f.push(u),u=c)}while(void 0!==r);return 0!==a.length&&(d=a[a.length-1][1]),d}(e,{leave:no})}}),ho=function(e){var t=e.uri,n=e.name,r=e.type;this.uri=t,this.name=n,this.type=r},fo=function(e){return"undefined"!=typeof File&&e instanceof File||"undefined"!=typeof Blob&&e instanceof Blob||e instanceof ho},po={ReactNativeFile:ho,extractFiles:function e(t,n,r){var i;void 0===n&&(n=""),void 0===r&&(r=fo);var s=new Map;function o(e,t){var n=s.get(t);n?n.push.apply(n,e):s.set(t,e)}if(r(t))i=null,o([n],t);else{var a=n?n+".":"";if("undefined"!=typeof FileList&&t instanceof FileList)i=Array.prototype.map.call(t,(function(e,t){return o([""+a+t],e),null}));else if(Array.isArray(t))i=t.map((function(t,n){var i=e(t,""+a+n,r);return i.files.forEach(o),i.clone}));else if(t&&t.constructor===Object)for(var c in i={},t){var l=e(t[c],""+a+c,r);l.files.forEach(o),i[c]=l.clone}else i=t}return{clone:i,files:s}},isExtractableFile:fo},vo="object"==typeof self?self.FormData:window.FormData,mo=(js&&js.__importDefault||function(e){return e&&e.__esModule?e:{default:e}})(vo),yo=function(e){return po.isExtractableFile(e)||null!==e&&"object"==typeof e&&"function"==typeof e.pipe};var go=function(e,t,n){var r=po.extractFiles({query:e,variables:t,operationName:n},"",yo),i=r.clone,s=r.files;if(0===s.size){if(!Array.isArray(e))return JSON.stringify(i);if(void 0!==t&&!Array.isArray(t))throw new Error("Cannot create request body with given variable type, array expected");var o=e.reduce((function(e,n,r){return e.push({query:n,variables:t?t[r]:void 0}),e}),[]);return JSON.stringify(o)}var a=new("undefined"==typeof FormData?mo.default:FormData);a.append("operations",JSON.stringify(i));var c={},l=0;return s.forEach((function(e){c[++l]=e})),a.append("map",JSON.stringify(c)),l=0,s.forEach((function(e,t){a.append(""+ ++l,t)})),a},_o=Object.defineProperty({default:go},"__esModule",{value:!0}),bo=Bs((function(e,t){var n,r=js&&js.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0}),t.ClientError=void 0;var i=function(e){function t(n,r){var i=this,s=t.extractMessage(n)+": "+JSON.stringify({response:n,request:r});return i=e.call(this,s)||this,Object.setPrototypeOf(i,t.prototype),i.response=n,i.request=r,"function"==typeof Error.captureStackTrace&&Error.captureStackTrace(i,t),i}return r(t,e),t.extractMessage=function(e){try{return e.errors[0].message}catch(t){return"GraphQL Error (Code: "+e.status+")"}},t}(Error);t.ClientError=i})),Eo=Vs(uo),wo=Bs((function(e,t){var n=js&&js.__assign||function(){return(n=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},r=js&&js.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=js&&js.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=js&&js.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t},o=js&&js.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{c(r.next(e))}catch(t){s(t)}}function a(e){try{c(r.throw(e))}catch(t){s(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}c((r=r.apply(e,t||[])).next())}))},a=js&&js.__generator||function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(a){s=[6,a],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}},c=js&&js.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},l=js&&js.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.gql=t.batchRequests=t.request=t.rawRequest=t.GraphQLClient=t.ClientError=void 0;var u=s(qs),h=u,f=l(_o),d=bo;Object.defineProperty(t,"ClientError",{enumerable:!0,get:function(){return d.ClientError}});var p=function(e){var t={};return e&&("undefined"!=typeof Headers&&e instanceof Headers||e instanceof h.Headers?t=function(e){var t={};return e.forEach((function(e,n){t[n]=e})),t}(e):Array.isArray(e)?e.forEach((function(e){var n=e[0],r=e[1];t[n]=r})):t=e),t},v=function(e){return e.replace(/([\s,]|#[^\n\r]+)+/g," ").trim()},m=function(e){var t=e.url,r=e.query,i=e.variables,s=e.operationName,c=e.headers,l=e.fetch,u=e.fetchOptions;return o(void 0,void 0,void 0,(function(){var e;return a(this,(function(o){switch(o.label){case 0:return e=f.default(r,i,s),[4,l(t,n({method:"POST",headers:n(n({},"string"==typeof e?{"Content-Type":"application/json"}:{}),c),body:e},u))];case 1:return[2,o.sent()]}}))}))},y=function(e){var t=e.url,r=e.query,i=e.variables,s=e.operationName,c=e.headers,l=e.fetch,u=e.fetchOptions;return o(void 0,void 0,void 0,(function(){var e;return a(this,(function(o){switch(o.label){case 0:return e=function(e){var t=e.query,n=e.variables,r=e.operationName;if(!Array.isArray(t)){var i=["query="+encodeURIComponent(v(t))];return n&&i.push("variables="+encodeURIComponent(JSON.stringify(n))),r&&i.push("operationName="+encodeURIComponent(r)),i.join("&")}if(void 0!==n&&!Array.isArray(n))throw new Error("Cannot create query with given variable type, array expected");var s=t.reduce((function(e,t,r){return e.push({query:v(t),variables:n?JSON.stringify(n[r]):void 0}),e}),[]);return"query="+encodeURIComponent(JSON.stringify(s))}({query:r,variables:i,operationName:s}),[4,l(t+"?"+e,n({method:"GET",headers:c},u))];case 1:return[2,o.sent()]}}))}))},g=function(){function e(e,t){this.url=e,this.options=t||{}}return e.prototype.rawRequest=function(e,t,r){var i=this.options,s=i.headers,o=i.fetch,a=void 0===o?u.default:o,l=i.method,h=void 0===l?"POST":l,f=c(i,["headers","fetch","method"]);return _({url:this.url,query:e,variables:t,headers:n(n({},p(s)),p(r)),operationName:void 0,fetch:a,method:h,fetchOptions:f})},e.prototype.request=function(e,t,r){return o(this,void 0,void 0,(function(){var i,s,o,l,h,f,d,v,m,y,g;return a(this,(function(a){switch(a.label){case 0:return i=this.options,s=i.headers,o=i.fetch,l=void 0===o?u.default:o,h=i.method,f=void 0===h?"POST":h,d=c(i,["headers","fetch","method"]),v=this.url,m=w(e),y=m.query,g=m.operationName,[4,_({url:v,query:y,variables:t,headers:n(n({},p(s)),p(r)),operationName:g,fetch:l,method:f,fetchOptions:d})];case 1:return[2,a.sent().data]}}))}))},e.prototype.batchRequests=function(e,t){return o(this,void 0,void 0,(function(){var r,i,s,o,l,h,f,d,v,m;return a(this,(function(a){switch(a.label){case 0:return r=this.options,i=r.headers,s=r.fetch,o=void 0===s?u.default:s,l=r.method,h=void 0===l?"POST":l,f=c(r,["headers","fetch","method"]),d=this.url,v=e.map((function(e){return w(e.document).query})),m=e.map((function(e){return e.variables})),[4,_({url:d,query:v,variables:m,headers:n(n({},p(i)),p(t)),operationName:void 0,fetch:o,method:h,fetchOptions:f})];case 1:return[2,a.sent().data]}}))}))},e.prototype.setHeaders=function(e){return this.options.headers=e,this},e.prototype.setHeader=function(e,t){var n,r=this.options.headers;return r?r[e]=t:this.options.headers=((n={})[e]=t,n),this},e.prototype.setEndpoint=function(e){return this.url=e,this},e}();function _(e){var t=e.url,r=e.query,i=e.variables,s=e.headers,c=e.operationName,l=e.fetch,u=e.method,h=void 0===u?"POST":u,f=e.fetchOptions;return o(this,void 0,void 0,(function(){var e,o,u,d,p,v,g,_;return a(this,(function(a){switch(a.label){case 0:return e="POST"===h.toUpperCase()?m:y,o=Array.isArray(r),[4,e({url:t,query:r,variables:i,operationName:c,headers:s,fetch:l,fetchOptions:f})];case 1:return[4,E(u=a.sent())];case 2:if(d=a.sent(),p=o&&Array.isArray(d)?!d.some((function(e){return!e.data})):!!d.data,u.ok&&!d.errors&&p)return v=u.headers,g=u.status,[2,n(n({},o?{data:d}:d),{headers:v,status:g})];throw _="string"==typeof d?{error:d}:d,new bo.ClientError(n(n({},_),{status:u.status,headers:u.headers}),{query:r,variables:i})}}))}))}function b(e,t,n,r){return o(this,void 0,void 0,(function(){return a(this,(function(i){return[2,new g(e).request(t,n,r)]}))}))}function E(e){var t=e.headers.get("Content-Type");return t&&t.startsWith("application/json")?e.json():e.text()}function w(e){var t;if("string"==typeof e)return{query:e};var n=void 0,r=e.definitions.filter((function(e){return"OperationDefinition"===e.kind}));return 1===r.length&&(n=null===(t=r[0].name)||void 0===t?void 0:t.value),{query:Eo.print(e),operationName:n}}t.GraphQLClient=g,t.rawRequest=function(e,t,n,r){return o(this,void 0,void 0,(function(){return a(this,(function(i){return[2,new g(e).rawRequest(t,n,r)]}))}))},t.request=b,t.batchRequests=function(e,t,n){return o(this,void 0,void 0,(function(){return a(this,(function(r){return[2,new g(e).batchRequests(t,n)]}))}))},t.default=b,t.gql=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return e.reduce((function(e,n,r){return""+e+n+(r in t?t[r]:"")}),"")}})),Io=function(){return(Io=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function To(e){return(To="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var Oo="function"==typeof Symbol&&null!=Symbol.toStringTag?Symbol.toStringTag:"@@toStringTag";function So(e,t){for(var n,r=/\r\n|[\n\r]/g,i=1,s=t+1;(n=r.exec(e.body))&&n.index<t;)i+=1,s=t+1-(n.index+n[0].length);return{line:i,column:s}}function No(e){return ko(e.source,So(e.source,e.start))}function ko(e,t){var n=e.locationOffset.column-1,r=xo(n)+e.body,i=t.line-1,s=e.locationOffset.line-1,o=t.line+s,a=1===t.line?n:0,c=t.column+a,l="".concat(e.name,":").concat(o,":").concat(c,"\n"),u=r.split(/\r\n|[\n\r]/g),h=u[i];if(h.length>120){for(var f=Math.floor(c/80),d=c%80,p=[],v=0;v<h.length;v+=80)p.push(h.slice(v,v+80));return l+Ao([["".concat(o),p[0]]].concat(p.slice(1,f+1).map((function(e){return["",e]})),[[" ",xo(d-1)+"^"],["",p[f+1]]]))}return l+Ao([["".concat(o-1),u[i-1]],["".concat(o),h],["",xo(c-1)+"^"],["".concat(o+1),u[i+1]]])}function Ao(e){var t=e.filter((function(e){return e[0],void 0!==e[1]})),n=Math.max.apply(Math,t.map((function(e){return e[0].length})));return t.map((function(e){var t,r=e[0],i=e[1];return xo(n-(t=r).length)+t+(i?" | "+i:" |")})).join("\n")}function xo(e){return Array(e+1).join(" ")}function Co(e){return(Co="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ro(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Do(e,t){return!t||"object"!==Co(t)&&"function"!=typeof t?Po(e):t}function Po(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Lo(e){var t="function"==typeof Map?new Map:void 0;return(Lo=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return Mo(e,arguments,jo(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),Uo(r,e)})(e)}function Mo(e,t,n){return(Mo=Fo()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&Uo(i,n.prototype),i}).apply(null,arguments)}function Fo(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function Uo(e,t){return(Uo=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function jo(e){return(jo=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Vo=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Uo(e,t)}(a,Lo(Error));var t,n,r,i,s,o=(t=a,n=Fo(),function(){var e,r=jo(t);if(n){var i=jo(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return Do(this,e)});function a(e,t,n,r,i,s,c){var l,u,h,f,d;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),d=o.call(this,e);var p,v=Array.isArray(t)?0!==t.length?t:void 0:t?[t]:void 0,m=n;!m&&v&&(m=null===(p=v[0].loc)||void 0===p?void 0:p.source);var y,g=r;!g&&v&&(g=v.reduce((function(e,t){return t.loc&&e.push(t.loc.start),e}),[])),g&&0===g.length&&(g=void 0),r&&n?y=r.map((function(e){return So(n,e)})):v&&(y=v.reduce((function(e,t){return t.loc&&e.push(So(t.loc.source,t.loc.start)),e}),[]));var _,b=c;if(null==b&&null!=s){var E=s.extensions;"object"==To(_=E)&&null!==_&&(b=E)}return Object.defineProperties(Po(d),{name:{value:"GraphQLError"},message:{value:e,enumerable:!0,writable:!0},locations:{value:null!==(l=y)&&void 0!==l?l:void 0,enumerable:null!=y},path:{value:null!=i?i:void 0,enumerable:null!=i},nodes:{value:null!=v?v:void 0},source:{value:null!==(u=m)&&void 0!==u?u:void 0},positions:{value:null!==(h=g)&&void 0!==h?h:void 0},originalError:{value:s},extensions:{value:null!==(f=b)&&void 0!==f?f:void 0,enumerable:null!=b}}),null!=s&&s.stack?(Object.defineProperty(Po(d),"stack",{value:s.stack,writable:!0,configurable:!0}),Do(d)):(Error.captureStackTrace?Error.captureStackTrace(Po(d),a):Object.defineProperty(Po(d),"stack",{value:Error().stack,writable:!0,configurable:!0}),d)}return r=a,(i=[{key:"toString",value:function(){return function(e){var t=e.message;if(e.nodes)for(var n=0,r=e.nodes;n<r.length;n++){var i=r[n];i.loc&&(t+="\n\n"+No(i.loc))}else if(e.source&&e.locations)for(var s=0,o=e.locations;s<o.length;s++){var a=o[s];t+="\n\n"+ko(e.source,a)}return t}(this)}},{key:Oo,get:function(){return"Object"}}])&&Ro(r.prototype,i),s&&Ro(r,s),a}();function Bo(e,t,n){return new Vo("Syntax Error: ".concat(n),void 0,e,[t])}var qo=Object.freeze({NAME:"Name",DOCUMENT:"Document",OPERATION_DEFINITION:"OperationDefinition",VARIABLE_DEFINITION:"VariableDefinition",SELECTION_SET:"SelectionSet",FIELD:"Field",ARGUMENT:"Argument",FRAGMENT_SPREAD:"FragmentSpread",INLINE_FRAGMENT:"InlineFragment",FRAGMENT_DEFINITION:"FragmentDefinition",VARIABLE:"Variable",INT:"IntValue",FLOAT:"FloatValue",STRING:"StringValue",BOOLEAN:"BooleanValue",NULL:"NullValue",ENUM:"EnumValue",LIST:"ListValue",OBJECT:"ObjectValue",OBJECT_FIELD:"ObjectField",DIRECTIVE:"Directive",NAMED_TYPE:"NamedType",LIST_TYPE:"ListType",NON_NULL_TYPE:"NonNullType",SCHEMA_DEFINITION:"SchemaDefinition",OPERATION_TYPE_DEFINITION:"OperationTypeDefinition",SCALAR_TYPE_DEFINITION:"ScalarTypeDefinition",OBJECT_TYPE_DEFINITION:"ObjectTypeDefinition",FIELD_DEFINITION:"FieldDefinition",INPUT_VALUE_DEFINITION:"InputValueDefinition",INTERFACE_TYPE_DEFINITION:"InterfaceTypeDefinition",UNION_TYPE_DEFINITION:"UnionTypeDefinition",ENUM_TYPE_DEFINITION:"EnumTypeDefinition",ENUM_VALUE_DEFINITION:"EnumValueDefinition",INPUT_OBJECT_TYPE_DEFINITION:"InputObjectTypeDefinition",DIRECTIVE_DEFINITION:"DirectiveDefinition",SCHEMA_EXTENSION:"SchemaExtension",SCALAR_TYPE_EXTENSION:"ScalarTypeExtension",OBJECT_TYPE_EXTENSION:"ObjectTypeExtension",INTERFACE_TYPE_EXTENSION:"InterfaceTypeExtension",UNION_TYPE_EXTENSION:"UnionTypeExtension",ENUM_TYPE_EXTENSION:"EnumTypeExtension",INPUT_OBJECT_TYPE_EXTENSION:"InputObjectTypeExtension"}),$o=Object.freeze({SOF:"<SOF>",EOF:"<EOF>",BANG:"!",DOLLAR:"$",AMP:"&",PAREN_L:"(",PAREN_R:")",SPREAD:"...",COLON:":",EQUALS:"=",AT:"@",BRACKET_L:"[",BRACKET_R:"]",BRACE_L:"{",PIPE:"|",BRACE_R:"}",NAME:"Name",INT:"Int",FLOAT:"Float",STRING:"String",BLOCK_STRING:"BlockString",COMMENT:"Comment"});function zo(e,t){if(!Boolean(e))throw new Error(t)}function Ko(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Ho=function(){function e(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GraphQL request",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{line:1,column:1};"string"==typeof e||zo(0,"Body must be a string. Received: ".concat(Ks(e),".")),this.body=e,this.name=t,this.locationOffset=n,this.locationOffset.line>0||zo(0,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||zo(0,"column in locationOffset is 1-indexed and must be positive.")}var t,n,r;return t=e,(n=[{key:Oo,get:function(){return"Source"}}])&&Ko(t.prototype,n),r&&Ko(t,r),e}();var Go=Object.freeze({QUERY:"QUERY",MUTATION:"MUTATION",SUBSCRIPTION:"SUBSCRIPTION",FIELD:"FIELD",FRAGMENT_DEFINITION:"FRAGMENT_DEFINITION",FRAGMENT_SPREAD:"FRAGMENT_SPREAD",INLINE_FRAGMENT:"INLINE_FRAGMENT",VARIABLE_DEFINITION:"VARIABLE_DEFINITION",SCHEMA:"SCHEMA",SCALAR:"SCALAR",OBJECT:"OBJECT",FIELD_DEFINITION:"FIELD_DEFINITION",ARGUMENT_DEFINITION:"ARGUMENT_DEFINITION",INTERFACE:"INTERFACE",UNION:"UNION",ENUM:"ENUM",ENUM_VALUE:"ENUM_VALUE",INPUT_OBJECT:"INPUT_OBJECT",INPUT_FIELD_DEFINITION:"INPUT_FIELD_DEFINITION"}),Wo=function(){function e(e){var t=new Js($o.SOF,0,0,0,0,null);this.source=e,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}var t=e.prototype;return t.advance=function(){return this.lastToken=this.token,this.token=this.lookahead()},t.lookahead=function(){var e=this.token;if(e.kind!==$o.EOF)do{var t;e=null!==(t=e.next)&&void 0!==t?t:e.next=Yo(this,e)}while(e.kind===$o.COMMENT);return e},e}();function Jo(e){return isNaN(e)?$o.EOF:e<127?JSON.stringify(String.fromCharCode(e)):'"\\u'.concat(("00"+e.toString(16).toUpperCase()).slice(-4),'"')}function Yo(e,t){for(var n=e.source,r=n.body,i=r.length,s=t.end;s<i;){var o=r.charCodeAt(s),a=e.line,c=1+s-e.lineStart;switch(o){case 65279:case 9:case 32:case 44:++s;continue;case 10:++s,++e.line,e.lineStart=s;continue;case 13:10===r.charCodeAt(s+1)?s+=2:++s,++e.line,e.lineStart=s;continue;case 33:return new Js($o.BANG,s,s+1,a,c,t);case 35:return Qo(n,s,a,c,t);case 36:return new Js($o.DOLLAR,s,s+1,a,c,t);case 38:return new Js($o.AMP,s,s+1,a,c,t);case 40:return new Js($o.PAREN_L,s,s+1,a,c,t);case 41:return new Js($o.PAREN_R,s,s+1,a,c,t);case 46:if(46===r.charCodeAt(s+1)&&46===r.charCodeAt(s+2))return new Js($o.SPREAD,s,s+3,a,c,t);break;case 58:return new Js($o.COLON,s,s+1,a,c,t);case 61:return new Js($o.EQUALS,s,s+1,a,c,t);case 64:return new Js($o.AT,s,s+1,a,c,t);case 91:return new Js($o.BRACKET_L,s,s+1,a,c,t);case 93:return new Js($o.BRACKET_R,s,s+1,a,c,t);case 123:return new Js($o.BRACE_L,s,s+1,a,c,t);case 124:return new Js($o.PIPE,s,s+1,a,c,t);case 125:return new Js($o.BRACE_R,s,s+1,a,c,t);case 34:return 34===r.charCodeAt(s+1)&&34===r.charCodeAt(s+2)?na(n,s,a,c,t,e):ta(n,s,a,c,t);case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return Zo(n,s,o,a,c,t);case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 95:case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 110:case 111:case 112:case 113:case 114:case 115:case 116:case 117:case 118:case 119:case 120:case 121:case 122:return ia(n,s,a,c,t)}throw Bo(n,s,Xo(o))}var l=e.line,u=1+s-e.lineStart;return new Js($o.EOF,i,i,l,u,t)}function Xo(e){return e<32&&9!==e&&10!==e&&13!==e?"Cannot contain the invalid character ".concat(Jo(e),"."):39===e?"Unexpected single quote character ('), did you mean to use a double quote (\")?":"Cannot parse the unexpected character ".concat(Jo(e),".")}function Qo(e,t,n,r,i){var s,o=e.body,a=t;do{s=o.charCodeAt(++a)}while(!isNaN(s)&&(s>31||9===s));return new Js($o.COMMENT,t,a,n,r,i,o.slice(t+1,a))}function Zo(e,t,n,r,i,s){var o=e.body,a=n,c=t,l=!1;if(45===a&&(a=o.charCodeAt(++c)),48===a){if((a=o.charCodeAt(++c))>=48&&a<=57)throw Bo(e,c,"Invalid number, unexpected digit after 0: ".concat(Jo(a),"."))}else c=ea(e,c,a),a=o.charCodeAt(c);if(46===a&&(l=!0,a=o.charCodeAt(++c),c=ea(e,c,a),a=o.charCodeAt(c)),69!==a&&101!==a||(l=!0,43!==(a=o.charCodeAt(++c))&&45!==a||(a=o.charCodeAt(++c)),c=ea(e,c,a),a=o.charCodeAt(c)),46===a||function(e){return 95===e||e>=65&&e<=90||e>=97&&e<=122}(a))throw Bo(e,c,"Invalid number, expected digit but got: ".concat(Jo(a),"."));return new Js(l?$o.FLOAT:$o.INT,t,c,r,i,s,o.slice(t,c))}function ea(e,t,n){var r=e.body,i=t,s=n;if(s>=48&&s<=57){do{s=r.charCodeAt(++i)}while(s>=48&&s<=57);return i}throw Bo(e,i,"Invalid number, expected digit but got: ".concat(Jo(s),"."))}function ta(e,t,n,r,i){for(var s,o,a,c,l=e.body,u=t+1,h=u,f=0,d="";u<l.length&&!isNaN(f=l.charCodeAt(u))&&10!==f&&13!==f;){if(34===f)return d+=l.slice(h,u),new Js($o.STRING,t,u+1,n,r,i,d);if(f<32&&9!==f)throw Bo(e,u,"Invalid character within String: ".concat(Jo(f),"."));if(++u,92===f){switch(d+=l.slice(h,u-1),f=l.charCodeAt(u)){case 34:d+='"';break;case 47:d+="/";break;case 92:d+="\\";break;case 98:d+="\b";break;case 102:d+="\f";break;case 110:d+="\n";break;case 114:d+="\r";break;case 116:d+="\t";break;case 117:var p=(s=l.charCodeAt(u+1),o=l.charCodeAt(u+2),a=l.charCodeAt(u+3),c=l.charCodeAt(u+4),ra(s)<<12|ra(o)<<8|ra(a)<<4|ra(c));if(p<0){var v=l.slice(u+1,u+5);throw Bo(e,u,"Invalid character escape sequence: \\u".concat(v,"."))}d+=String.fromCharCode(p),u+=4;break;default:throw Bo(e,u,"Invalid character escape sequence: \\".concat(String.fromCharCode(f),"."))}h=++u}}throw Bo(e,u,"Unterminated string.")}function na(e,t,n,r,i,s){for(var o=e.body,a=t+3,c=a,l=0,u="";a<o.length&&!isNaN(l=o.charCodeAt(a));){if(34===l&&34===o.charCodeAt(a+1)&&34===o.charCodeAt(a+2))return u+=o.slice(c,a),new Js($o.BLOCK_STRING,t,a+3,n,r,i,eo(u));if(l<32&&9!==l&&10!==l&&13!==l)throw Bo(e,a,"Invalid character within String: ".concat(Jo(l),"."));10===l?(++a,++s.line,s.lineStart=a):13===l?(10===o.charCodeAt(a+1)?a+=2:++a,++s.line,s.lineStart=a):92===l&&34===o.charCodeAt(a+1)&&34===o.charCodeAt(a+2)&&34===o.charCodeAt(a+3)?(u+=o.slice(c,a)+'"""',c=a+=4):++a}throw Bo(e,a,"Unterminated string.")}function ra(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function ia(e,t,n,r,i){for(var s=e.body,o=s.length,a=t+1,c=0;a!==o&&!isNaN(c=s.charCodeAt(a))&&(95===c||c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122);)++a;return new Js($o.NAME,t,a,n,r,i,s.slice(t,a))}var sa=function(){function e(e,t){var n=function(e){return e instanceof Ho}(e)?e:new Ho(e);this._lexer=new Wo(n),this._options=t}var t=e.prototype;return t.parseName=function(){var e=this.expectToken($o.NAME);return{kind:qo.NAME,value:e.value,loc:this.loc(e)}},t.parseDocument=function(){var e=this._lexer.token;return{kind:qo.DOCUMENT,definitions:this.many($o.SOF,this.parseDefinition,$o.EOF),loc:this.loc(e)}},t.parseDefinition=function(){if(this.peek($o.NAME))switch(this._lexer.token.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"schema":case"scalar":case"type":case"interface":case"union":case"enum":case"input":case"directive":return this.parseTypeSystemDefinition();case"extend":return this.parseTypeSystemExtension()}else{if(this.peek($o.BRACE_L))return this.parseOperationDefinition();if(this.peekDescription())return this.parseTypeSystemDefinition()}throw this.unexpected()},t.parseOperationDefinition=function(){var e=this._lexer.token;if(this.peek($o.BRACE_L))return{kind:qo.OPERATION_DEFINITION,operation:"query",name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet(),loc:this.loc(e)};var t,n=this.parseOperationType();return this.peek($o.NAME)&&(t=this.parseName()),{kind:qo.OPERATION_DEFINITION,operation:n,name:t,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(e)}},t.parseOperationType=function(){var e=this.expectToken($o.NAME);switch(e.value){case"query":return"query";case"mutation":return"mutation";case"subscription":return"subscription"}throw this.unexpected(e)},t.parseVariableDefinitions=function(){return this.optionalMany($o.PAREN_L,this.parseVariableDefinition,$o.PAREN_R)},t.parseVariableDefinition=function(){var e=this._lexer.token;return{kind:qo.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken($o.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken($o.EQUALS)?this.parseValueLiteral(!0):void 0,directives:this.parseDirectives(!0),loc:this.loc(e)}},t.parseVariable=function(){var e=this._lexer.token;return this.expectToken($o.DOLLAR),{kind:qo.VARIABLE,name:this.parseName(),loc:this.loc(e)}},t.parseSelectionSet=function(){var e=this._lexer.token;return{kind:qo.SELECTION_SET,selections:this.many($o.BRACE_L,this.parseSelection,$o.BRACE_R),loc:this.loc(e)}},t.parseSelection=function(){return this.peek($o.SPREAD)?this.parseFragment():this.parseField()},t.parseField=function(){var e,t,n=this._lexer.token,r=this.parseName();return this.expectOptionalToken($o.COLON)?(e=r,t=this.parseName()):t=r,{kind:qo.FIELD,alias:e,name:t,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek($o.BRACE_L)?this.parseSelectionSet():void 0,loc:this.loc(n)}},t.parseArguments=function(e){var t=e?this.parseConstArgument:this.parseArgument;return this.optionalMany($o.PAREN_L,t,$o.PAREN_R)},t.parseArgument=function(){var e=this._lexer.token,t=this.parseName();return this.expectToken($o.COLON),{kind:qo.ARGUMENT,name:t,value:this.parseValueLiteral(!1),loc:this.loc(e)}},t.parseConstArgument=function(){var e=this._lexer.token;return{kind:qo.ARGUMENT,name:this.parseName(),value:(this.expectToken($o.COLON),this.parseValueLiteral(!0)),loc:this.loc(e)}},t.parseFragment=function(){var e=this._lexer.token;this.expectToken($o.SPREAD);var t=this.expectOptionalKeyword("on");return!t&&this.peek($o.NAME)?{kind:qo.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1),loc:this.loc(e)}:{kind:qo.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(e)}},t.parseFragmentDefinition=function(){var e,t=this._lexer.token;return this.expectKeyword("fragment"),!0===(null===(e=this._options)||void 0===e?void 0:e.experimentalFragmentVariables)?{kind:qo.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(t)}:{kind:qo.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(t)}},t.parseFragmentName=function(){if("on"===this._lexer.token.value)throw this.unexpected();return this.parseName()},t.parseValueLiteral=function(e){var t=this._lexer.token;switch(t.kind){case $o.BRACKET_L:return this.parseList(e);case $o.BRACE_L:return this.parseObject(e);case $o.INT:return this._lexer.advance(),{kind:qo.INT,value:t.value,loc:this.loc(t)};case $o.FLOAT:return this._lexer.advance(),{kind:qo.FLOAT,value:t.value,loc:this.loc(t)};case $o.STRING:case $o.BLOCK_STRING:return this.parseStringLiteral();case $o.NAME:switch(this._lexer.advance(),t.value){case"true":return{kind:qo.BOOLEAN,value:!0,loc:this.loc(t)};case"false":return{kind:qo.BOOLEAN,value:!1,loc:this.loc(t)};case"null":return{kind:qo.NULL,loc:this.loc(t)};default:return{kind:qo.ENUM,value:t.value,loc:this.loc(t)}}case $o.DOLLAR:if(!e)return this.parseVariable()}throw this.unexpected()},t.parseStringLiteral=function(){var e=this._lexer.token;return this._lexer.advance(),{kind:qo.STRING,value:e.value,block:e.kind===$o.BLOCK_STRING,loc:this.loc(e)}},t.parseList=function(e){var t=this,n=this._lexer.token;return{kind:qo.LIST,values:this.any($o.BRACKET_L,(function(){return t.parseValueLiteral(e)}),$o.BRACKET_R),loc:this.loc(n)}},t.parseObject=function(e){var t=this,n=this._lexer.token;return{kind:qo.OBJECT,fields:this.any($o.BRACE_L,(function(){return t.parseObjectField(e)}),$o.BRACE_R),loc:this.loc(n)}},t.parseObjectField=function(e){var t=this._lexer.token,n=this.parseName();return this.expectToken($o.COLON),{kind:qo.OBJECT_FIELD,name:n,value:this.parseValueLiteral(e),loc:this.loc(t)}},t.parseDirectives=function(e){for(var t=[];this.peek($o.AT);)t.push(this.parseDirective(e));return t},t.parseDirective=function(e){var t=this._lexer.token;return this.expectToken($o.AT),{kind:qo.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e),loc:this.loc(t)}},t.parseTypeReference=function(){var e,t=this._lexer.token;return this.expectOptionalToken($o.BRACKET_L)?(e=this.parseTypeReference(),this.expectToken($o.BRACKET_R),e={kind:qo.LIST_TYPE,type:e,loc:this.loc(t)}):e=this.parseNamedType(),this.expectOptionalToken($o.BANG)?{kind:qo.NON_NULL_TYPE,type:e,loc:this.loc(t)}:e},t.parseNamedType=function(){var e=this._lexer.token;return{kind:qo.NAMED_TYPE,name:this.parseName(),loc:this.loc(e)}},t.parseTypeSystemDefinition=function(){var e=this.peekDescription()?this._lexer.lookahead():this._lexer.token;if(e.kind===$o.NAME)switch(e.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}throw this.unexpected(e)},t.peekDescription=function(){return this.peek($o.STRING)||this.peek($o.BLOCK_STRING)},t.parseDescription=function(){if(this.peekDescription())return this.parseStringLiteral()},t.parseSchemaDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");var n=this.parseDirectives(!0),r=this.many($o.BRACE_L,this.parseOperationTypeDefinition,$o.BRACE_R);return{kind:qo.SCHEMA_DEFINITION,description:t,directives:n,operationTypes:r,loc:this.loc(e)}},t.parseOperationTypeDefinition=function(){var e=this._lexer.token,t=this.parseOperationType();this.expectToken($o.COLON);var n=this.parseNamedType();return{kind:qo.OPERATION_TYPE_DEFINITION,operation:t,type:n,loc:this.loc(e)}},t.parseScalarTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");var n=this.parseName(),r=this.parseDirectives(!0);return{kind:qo.SCALAR_TYPE_DEFINITION,description:t,name:n,directives:r,loc:this.loc(e)}},t.parseObjectTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");var n=this.parseName(),r=this.parseImplementsInterfaces(),i=this.parseDirectives(!0),s=this.parseFieldsDefinition();return{kind:qo.OBJECT_TYPE_DEFINITION,description:t,name:n,interfaces:r,directives:i,fields:s,loc:this.loc(e)}},t.parseImplementsInterfaces=function(){var e;if(!this.expectOptionalKeyword("implements"))return[];if(!0===(null===(e=this._options)||void 0===e?void 0:e.allowLegacySDLImplementsInterfaces)){var t=[];this.expectOptionalToken($o.AMP);do{t.push(this.parseNamedType())}while(this.expectOptionalToken($o.AMP)||this.peek($o.NAME));return t}return this.delimitedMany($o.AMP,this.parseNamedType)},t.parseFieldsDefinition=function(){var e;return!0===(null===(e=this._options)||void 0===e?void 0:e.allowLegacySDLEmptyFields)&&this.peek($o.BRACE_L)&&this._lexer.lookahead().kind===$o.BRACE_R?(this._lexer.advance(),this._lexer.advance(),[]):this.optionalMany($o.BRACE_L,this.parseFieldDefinition,$o.BRACE_R)},t.parseFieldDefinition=function(){var e=this._lexer.token,t=this.parseDescription(),n=this.parseName(),r=this.parseArgumentDefs();this.expectToken($o.COLON);var i=this.parseTypeReference(),s=this.parseDirectives(!0);return{kind:qo.FIELD_DEFINITION,description:t,name:n,arguments:r,type:i,directives:s,loc:this.loc(e)}},t.parseArgumentDefs=function(){return this.optionalMany($o.PAREN_L,this.parseInputValueDef,$o.PAREN_R)},t.parseInputValueDef=function(){var e=this._lexer.token,t=this.parseDescription(),n=this.parseName();this.expectToken($o.COLON);var r,i=this.parseTypeReference();this.expectOptionalToken($o.EQUALS)&&(r=this.parseValueLiteral(!0));var s=this.parseDirectives(!0);return{kind:qo.INPUT_VALUE_DEFINITION,description:t,name:n,type:i,defaultValue:r,directives:s,loc:this.loc(e)}},t.parseInterfaceTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");var n=this.parseName(),r=this.parseImplementsInterfaces(),i=this.parseDirectives(!0),s=this.parseFieldsDefinition();return{kind:qo.INTERFACE_TYPE_DEFINITION,description:t,name:n,interfaces:r,directives:i,fields:s,loc:this.loc(e)}},t.parseUnionTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");var n=this.parseName(),r=this.parseDirectives(!0),i=this.parseUnionMemberTypes();return{kind:qo.UNION_TYPE_DEFINITION,description:t,name:n,directives:r,types:i,loc:this.loc(e)}},t.parseUnionMemberTypes=function(){return this.expectOptionalToken($o.EQUALS)?this.delimitedMany($o.PIPE,this.parseNamedType):[]},t.parseEnumTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");var n=this.parseName(),r=this.parseDirectives(!0),i=this.parseEnumValuesDefinition();return{kind:qo.ENUM_TYPE_DEFINITION,description:t,name:n,directives:r,values:i,loc:this.loc(e)}},t.parseEnumValuesDefinition=function(){return this.optionalMany($o.BRACE_L,this.parseEnumValueDefinition,$o.BRACE_R)},t.parseEnumValueDefinition=function(){var e=this._lexer.token,t=this.parseDescription(),n=this.parseName(),r=this.parseDirectives(!0);return{kind:qo.ENUM_VALUE_DEFINITION,description:t,name:n,directives:r,loc:this.loc(e)}},t.parseInputObjectTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");var n=this.parseName(),r=this.parseDirectives(!0),i=this.parseInputFieldsDefinition();return{kind:qo.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:n,directives:r,fields:i,loc:this.loc(e)}},t.parseInputFieldsDefinition=function(){return this.optionalMany($o.BRACE_L,this.parseInputValueDef,$o.BRACE_R)},t.parseTypeSystemExtension=function(){var e=this._lexer.lookahead();if(e.kind===$o.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)},t.parseSchemaExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");var t=this.parseDirectives(!0),n=this.optionalMany($o.BRACE_L,this.parseOperationTypeDefinition,$o.BRACE_R);if(0===t.length&&0===n.length)throw this.unexpected();return{kind:qo.SCHEMA_EXTENSION,directives:t,operationTypes:n,loc:this.loc(e)}},t.parseScalarTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");var t=this.parseName(),n=this.parseDirectives(!0);if(0===n.length)throw this.unexpected();return{kind:qo.SCALAR_TYPE_EXTENSION,name:t,directives:n,loc:this.loc(e)}},t.parseObjectTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");var t=this.parseName(),n=this.parseImplementsInterfaces(),r=this.parseDirectives(!0),i=this.parseFieldsDefinition();if(0===n.length&&0===r.length&&0===i.length)throw this.unexpected();return{kind:qo.OBJECT_TYPE_EXTENSION,name:t,interfaces:n,directives:r,fields:i,loc:this.loc(e)}},t.parseInterfaceTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");var t=this.parseName(),n=this.parseImplementsInterfaces(),r=this.parseDirectives(!0),i=this.parseFieldsDefinition();if(0===n.length&&0===r.length&&0===i.length)throw this.unexpected();return{kind:qo.INTERFACE_TYPE_EXTENSION,name:t,interfaces:n,directives:r,fields:i,loc:this.loc(e)}},t.parseUnionTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");var t=this.parseName(),n=this.parseDirectives(!0),r=this.parseUnionMemberTypes();if(0===n.length&&0===r.length)throw this.unexpected();return{kind:qo.UNION_TYPE_EXTENSION,name:t,directives:n,types:r,loc:this.loc(e)}},t.parseEnumTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");var t=this.parseName(),n=this.parseDirectives(!0),r=this.parseEnumValuesDefinition();if(0===n.length&&0===r.length)throw this.unexpected();return{kind:qo.ENUM_TYPE_EXTENSION,name:t,directives:n,values:r,loc:this.loc(e)}},t.parseInputObjectTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");var t=this.parseName(),n=this.parseDirectives(!0),r=this.parseInputFieldsDefinition();if(0===n.length&&0===r.length)throw this.unexpected();return{kind:qo.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:n,fields:r,loc:this.loc(e)}},t.parseDirectiveDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken($o.AT);var n=this.parseName(),r=this.parseArgumentDefs(),i=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");var s=this.parseDirectiveLocations();return{kind:qo.DIRECTIVE_DEFINITION,description:t,name:n,arguments:r,repeatable:i,locations:s,loc:this.loc(e)}},t.parseDirectiveLocations=function(){return this.delimitedMany($o.PIPE,this.parseDirectiveLocation)},t.parseDirectiveLocation=function(){var e=this._lexer.token,t=this.parseName();if(void 0!==Go[t.value])return t;throw this.unexpected(e)},t.loc=function(e){var t;if(!0!==(null===(t=this._options)||void 0===t?void 0:t.noLocation))return new Ws(e,this._lexer.lastToken,this._lexer.source)},t.peek=function(e){return this._lexer.token.kind===e},t.expectToken=function(e){var t=this._lexer.token;if(t.kind===e)return this._lexer.advance(),t;throw Bo(this._lexer.source,t.start,"Expected ".concat(aa(e),", found ").concat(oa(t),"."))},t.expectOptionalToken=function(e){var t=this._lexer.token;if(t.kind===e)return this._lexer.advance(),t},t.expectKeyword=function(e){var t=this._lexer.token;if(t.kind!==$o.NAME||t.value!==e)throw Bo(this._lexer.source,t.start,'Expected "'.concat(e,'", found ').concat(oa(t),"."));this._lexer.advance()},t.expectOptionalKeyword=function(e){var t=this._lexer.token;return t.kind===$o.NAME&&t.value===e&&(this._lexer.advance(),!0)},t.unexpected=function(e){var t=null!=e?e:this._lexer.token;return Bo(this._lexer.source,t.start,"Unexpected ".concat(oa(t),"."))},t.any=function(e,t,n){this.expectToken(e);for(var r=[];!this.expectOptionalToken(n);)r.push(t.call(this));return r},t.optionalMany=function(e,t,n){if(this.expectOptionalToken(e)){var r=[];do{r.push(t.call(this))}while(!this.expectOptionalToken(n));return r}return[]},t.many=function(e,t,n){this.expectToken(e);var r=[];do{r.push(t.call(this))}while(!this.expectOptionalToken(n));return r},t.delimitedMany=function(e,t){this.expectOptionalToken(e);var n=[];do{n.push(t.call(this))}while(this.expectOptionalToken(e));return n},e}();function oa(e){var t=e.value;return aa(e.kind)+(null!=t?' "'.concat(t,'"'):"")}function aa(e){return function(e){return e===$o.BANG||e===$o.DOLLAR||e===$o.AMP||e===$o.PAREN_L||e===$o.PAREN_R||e===$o.SPREAD||e===$o.COLON||e===$o.EQUALS||e===$o.AT||e===$o.BRACKET_L||e===$o.BRACKET_R||e===$o.BRACE_L||e===$o.PIPE||e===$o.BRACE_R}(e)?'"'.concat(e,'"'):e}var ca=new Map,la=new Map,ua=!0,ha=!1;function fa(e){return e.replace(/[\s,]+/g," ").trim()}function da(e){var t=new Set,n=[];return e.definitions.forEach((function(e){if("FragmentDefinition"===e.kind){var r=e.name.value,i=fa((o=e.loc).source.body.substring(o.start,o.end)),s=la.get(r);s&&!s.has(i)?ua&&console.warn("Warning: fragment with name "+r+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"):s||la.set(r,s=new Set),s.add(i),t.has(i)||(t.add(i),n.push(e))}else n.push(e);var o})),Io(Io({},e),{definitions:n})}function pa(e){var t=fa(e);if(!ca.has(t)){var n=function(e,t){return new sa(e,t).parseDocument()}(e,{experimentalFragmentVariables:ha});if(!n||"Document"!==n.kind)throw new Error("Not a valid GraphQL document.");ca.set(t,function(e){var t=new Set(e.definitions);t.forEach((function(e){e.loc&&delete e.loc,Object.keys(e).forEach((function(n){var r=e[n];r&&"object"==typeof r&&t.add(r)}))}));var n=e.loc;return n&&(delete n.startToken,delete n.endToken),e}(da(n)))}return ca.get(t)}function va(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];"string"==typeof e&&(e=[e]);var r=e[0];return t.forEach((function(t,n){t&&"Document"===t.kind?r+=t.loc.source.body:r+=t,r+=e[n+1]})),pa(r)}var ma,ya=va,ga=function(){ca.clear(),la.clear()},_a=function(){ua=!1},ba=function(){ha=!0},Ea=function(){ha=!1};(ma=va||(va={})).gql=ya,ma.resetCaches=ga,ma.disableFragmentWarnings=_a,ma.enableExperimentalFragmentVariables=ba,ma.disableExperimentalFragmentVariables=Ea,va.default=va;var wa=va;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,l=t>>2,u=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,f=63&c;a||(f=64,s||(h=64)),r.push(n[l],n[u],n[h],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t}(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i;const o=i<e.length?n[e.charAt(i)]:64;++i;const a=i<e.length?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==o||null==a)throw Error();const c=t<<2|s>>4;if(r.push(c),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ta{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}class Sa extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Sa.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Na.prototype.create)}}class Na{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(ka,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new Sa(r,o,n)}}const ka=/\{\$([^}]+)}/g;function Aa(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(xa(n)&&xa(s)){if(!Aa(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function xa(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}class Ra{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Da),void 0===r.error&&(r.error=Da),void 0===r.complete&&(r.complete=Da);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!=typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Da(){}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(e){return e&&e._delegate?e._delegate:e}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function La(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{c(r.next(e))}catch(t){s(t)}}function a(e){try{c(r.throw(e))}catch(t){s(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}c((r=r.apply(e,t||[])).next())}))}function Ma(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(a){s=[6,a],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}function Fa(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Ua(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,s=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=s.next()).done;)o.push(r.value)}catch(a){i={error:a}}finally{try{r&&!r.done&&(n=s.return)&&n.call(s)}finally{if(i)throw i.error}}return o}function ja(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e}var Va=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},e}(),Ba=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new Ta;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(i){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(u){}try{for(var r=Fa(this.instancesDeferred.entries()),i=r.next();!i.done;i=r.next()){var s=Ua(i.value,2),o=s[0],a=s[1],c=this.normalizeInstanceIdentifier(o);try{var l=this.getOrInitializeService({instanceIdentifier:c});a.resolve(l)}catch(u){}}}catch(h){t={error:h}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}}},e.prototype.clearInstance=function(e){void 0===e&&(e="[DEFAULT]"),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return La(this,void 0,void 0,(function(){var e;return Ma(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(ja(ja([],Ua(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))),Ua(e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.isInitialized=function(e){return void 0===e&&(e="[DEFAULT]"),this.instances.has(e)},e.prototype.getOptions=function(e){return void 0===e&&(e="[DEFAULT]"),this.instancesOptions.get(e)||{}},e.prototype.initialize=function(e){var t,n;void 0===e&&(e={});var r=e.options,i=void 0===r?{}:r,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(this.name+"("+s+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var o=this.getOrInitializeService({instanceIdentifier:s,options:i});try{for(var a=Fa(this.instancesDeferred.entries()),c=a.next();!c.done;c=a.next()){var l=Ua(c.value,2),u=l[0],h=l[1];s===this.normalizeInstanceIdentifier(u)&&h.resolve(o)}}catch(f){t={error:f}}finally{try{c&&!c.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}return o},e.prototype.onInit=function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var s=this.instances.get(r);return s&&e(s,r),function(){i.delete(e)}},e.prototype.invokeOnInitCallbacks=function(e,t){var n,r,i=this.onInitCallbacks.get(t);if(i)try{for(var s=Fa(i),o=s.next();!o.done;o=s.next()){var a=o.value;try{a(e,t)}catch(c){}}}catch(l){n={error:l}}finally{try{o&&!o.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}},e.prototype.getOrInitializeService=function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,s=this.instances.get(n);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,"[DEFAULT]"===t?void 0:t),options:i}),this.instances.set(n,s),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(s,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,s)}catch(o){}return s||null},e.prototype.normalizeInstanceIdentifier=function(e){return void 0===e&&(e="[DEFAULT]"),this.component?this.component.multipleInstances?e:"[DEFAULT]":e},e.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qa,$a,za=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new Ba(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */($a=qa||(qa={}))[$a.DEBUG=0]="DEBUG",$a[$a.VERBOSE=1]="VERBOSE",$a[$a.INFO=2]="INFO",$a[$a.WARN=3]="WARN",$a[$a.ERROR=4]="ERROR",$a[$a.SILENT=5]="SILENT";const Ka={debug:qa.DEBUG,verbose:qa.VERBOSE,info:qa.INFO,warn:qa.WARN,error:qa.ERROR,silent:qa.SILENT},Ha=qa.INFO,Ga={[qa.DEBUG]:"log",[qa.VERBOSE]:"log",[qa.INFO]:"info",[qa.WARN]:"warn",[qa.ERROR]:"error"},Wa=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=Ga[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class Ja{constructor(e){this.name=e,this._logLevel=Ha,this._logHandler=Wa,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in qa))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Ka[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,qa.DEBUG,...e),this._logHandler(this,qa.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,qa.VERBOSE,...e),this._logHandler(this,qa.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,qa.INFO,...e),this._logHandler(this,qa.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,qa.WARN,...e),this._logHandler(this,qa.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,qa.ERROR,...e),this._logHandler(this,qa.ERROR,...e)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Xa="@firebase/app",Qa=new Ja("@firebase/app"),Za={[Xa]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},ec=new Map,tc=new Map;function nc(e,t){try{e.container.addComponent(t)}catch(n){Qa.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function rc(e){const t=e.name;if(tc.has(t))return Qa.debug(`There were multiple attempts to register component ${t}.`),!1;tc.set(t,e);for(const n of ec.values())nc(n,e);return!0}function ic(e,t){return e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc=new Na("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oc{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Va("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw sc.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw sc.create("bad-app-name",{appName:String(r)});const i=ec.get(r);if(i){if(Aa(e,i.options)&&Aa(n,i.config))return i;throw sc.create("duplicate-app",{appName:r})}const s=new za(r);for(const a of tc.values())s.addComponent(a);const o=new oc(e,n,s);return ec.set(r,o),o}function cc(e,t,n){var r;let i=null!==(r=Za[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Qa.warn(e.join(" "))}rc(new Va(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lc;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function uc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function hc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}lc="",rc(new Va("platform-logger",(e=>new Ya(e)),"PRIVATE")),cc(Xa,"0.7.4",lc),cc(Xa,"0.7.4","esm2017"),cc("fire-js","");const fc=hc,dc=new Na("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),pc=new Ja("@firebase/auth");function vc(e,...t){pc.logLevel<=qa.ERROR&&pc.error(`Auth (9.1.3): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(e,...t){throw gc(e,...t)}function yc(e,...t){return gc(e,...t)}function gc(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return dc.create(e,...t)}function _c(e,t,...n){if(!e)throw gc(t,...n)}function bc(e){const t="INTERNAL ASSERTION FAILED: "+e;throw vc(t),new Error(t)}function Ec(e,t){e||bc(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc=new Map;function Ic(e){Ec(e instanceof Function,"Expected a class definition");let t=wc.get(e);return t?(Ec(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,wc.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Tc(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Oc(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==Oc()&&"https:"!==Oc()&&!function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&!("connection"in navigator)||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nc{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ec(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Oa())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return Sc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(e,t){Ec(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void bc("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void bc("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void bc("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Cc=new Nc(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Dc(e,t,n,r,i={}){return Pc(e,i,(()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=Ca(Object.assign({key:e.config.apiKey},s)).slice(1),a=new(Ac.headers());return a.set("Content-Type","application/json"),a.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&a.set("X-Firebase-Locale",e.languageCode),Ac.fetch()(Mc(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Pc(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},xc),t);try{const t=new Fc(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Uc(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Uc(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Uc(e,"email-already-in-use",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw function(e,t,n){const r=Object.assign(Object.assign({},fc()),{[t]:n});return new Na("auth","Firebase",r).create(t,{appName:e.name})}(e,a,o);mc(e,a)}}catch(i){if(i instanceof Sa)throw i;mc(e,"network-request-failed")}}async function Lc(e,t,n,r,i={}){const s=await Dc(e,t,n,r,i);return"mfaPendingCredential"in s&&mc(e,"multi-factor-auth-required",{serverResponse:s}),s}function Mc(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?kc(e.config,i):`${e.config.apiScheme}://${i}`}class Fc{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(yc(this.auth,"timeout"))),Cc.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Uc(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=yc(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function jc(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}function Vc(e){return 1e3*Number(e)}function Bc(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return vc("JWT malformed, contained fewer than 3 sections"),null;try{const e=function(e){try{return Ia.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null}(n);return e?JSON.parse(e):(vc("Failed to decode base64 JWT payload"),null)}catch(i){return vc("Caught error parsing JWT payload as JSON",i),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function qc(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Sa&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}class $c{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=jc(this.lastLoginAt),this.creationTime=jc(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kc(e){var t;const n=e.auth,r=await e.getIdToken(),i=await qc(e,async function(e,t){return Dc(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));_c(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=uc(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,l=o,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const u=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),f=!!u&&h,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new zc(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(e,d)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hc{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_c(e.idToken,"internal-error"),_c(void 0!==e.idToken,"internal-error"),_c(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Bc(e);return _c(t,"internal-error"),_c(void 0!==t.exp,"internal-error"),_c(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return _c(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await Pc(e,{},(()=>{const n=Ca({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=Mc(e,r,"/v1/token",`key=${i}`);return Ac.fetch()(s,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new Hc;return n&&(_c("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(_c("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(_c("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hc,this.toJSON())}_performRefresh(){return bc("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(e,t){_c("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Wc{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=uc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new $c(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new zc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await qc(this,this.stsTokenManager.getToken(this.auth,e));return _c(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Pa(e),r=await n.getIdToken(t),i=Bc(r);_c(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:jc(Vc(i.auth_time)),issuedAtTime:jc(Vc(i.iat)),expirationTime:jc(Vc(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Pa(e);await Kc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(_c(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Wc(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){_c(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Kc(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await qc(this,async function(e,t){return Dc(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,f=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,d=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,v=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:g,emailVerified:_,isAnonymous:b,providerData:E,stsTokenManager:w}=t;_c(g&&w,e,"internal-error");const I=Hc.fromJSON(this.name,w);_c("string"==typeof g,e,"internal-error"),Gc(u,e.name),Gc(h,e.name),_c("boolean"==typeof _,e,"internal-error"),_c("boolean"==typeof b,e,"internal-error"),Gc(f,e.name),Gc(d,e.name),Gc(p,e.name),Gc(v,e.name),Gc(m,e.name),Gc(y,e.name);const T=new Wc({uid:g,auth:e,email:h,emailVerified:_,displayName:u,isAnonymous:b,photoURL:d,phoneNumber:f,tenantId:p,stsTokenManager:I,createdAt:m,lastLoginAt:y});return E&&Array.isArray(E)&&(T.providerData=E.map((e=>Object.assign({},e)))),v&&(T._redirectEventId=v),T}static async _fromIdTokenResponse(e,t,n=!1){const r=new Hc;r.updateFromServerResponse(t);const i=new Wc({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Kc(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Jc.type="NONE";const Yc=Jc;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(e,t,n){return`firebase:${e}:${t}:${n}`}class Qc{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Xc(this.userKey,r.apiKey,i),this.fullPersistenceKey=Xc("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Wc._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Qc(Ic(Yc),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||Ic(Yc);const s=Xc(n,e.config.apiKey,e.name);let o=null;for(const l of t)try{const t=await l._get(s);if(t){const n=Wc._fromJSON(e,t);l!==i&&(o=n),i=l;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(c){}}))),new Qc(i,e,n)):new Qc(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(rl(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(el(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(sl(t))return"Blackberry";if(ol(t))return"Webos";if(tl(t))return"Safari";if((t.includes("chrome/")||nl(t))&&!t.includes("edge/"))return"Chrome";if(il(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function el(e=Oa()){return/firefox\//i.test(e)}function tl(e=Oa()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function nl(e=Oa()){return/crios\//i.test(e)}function rl(e=Oa()){return/iemobile/i.test(e)}function il(e=Oa()){return/android/i.test(e)}function sl(e=Oa()){return/blackberry/i.test(e)}function ol(e=Oa()){return/webos/i.test(e)}function al(e=Oa()){return/iphone|ipad|ipod/i.test(e)}function cl(){return function(){const e=Oa();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()&&10===document.documentMode}function ll(e=Oa()){return al(e)||il(e)||ol(e)||sl(e)||/windows phone/i.test(e)||rl(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ul(e,t=[]){let n;switch(e){case"Browser":n=Zc(Oa());break;case"Worker":n=`${Zc(Oa())}-${e}`;break;default:n=e}return`${n}/JsCore/9.1.3/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dl(this),this.idTokenSubscription=new dl(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dc,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ic(t)),this._initializationPromise=this.queue((async()=>{var n;this._deleted||(this.persistenceManager=await Qc.create(this,e),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(t),this._deleted||(this._isInitialized=!0)))})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e)):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);r&&r!==i||!(null==s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(_c(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Kc(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Pa(e):null;return t&&_c(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&_c(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Ic(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Na("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ic(e)||this._popupRedirectResolver;_c(t,this,"argument-error"),this.redirectPersistenceManager=await Qc.create(this,[Ic(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return _c(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _c(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ul(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function fl(e){return Pa(e)}class dl{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new Ra(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return _c(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function pl(e,t){return Lc(e,"POST","/v1/accounts:signInWithIdp",Rc(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml extends vl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yl{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await Wc._fromIdTokenResponse(e,n,r),s=gl(n);return new yl({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=gl(n);return new yl({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function gl(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l extends Sa{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,this.name="FirebaseError",Object.setPrototypeOf(this,_l.prototype),this.appName=e.name,this.code=t.code,this.tenantId=null!==(i=e.tenantId)&&void 0!==i?i:void 0,this.serverResponse=t.customData.serverResponse}static _fromErrorAndOperation(e,t,n,r){return new _l(e,t,n,r)}}function bl(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw _l._fromErrorAndOperation(e,n,t,r);throw n}))}async function El(e,t,n){const r=fl(e),i=await async function(e,t){return Lc(e,"POST","/v1/accounts:signUp",Rc(e,t))}(r,{returnSecureToken:!0,email:t,password:n}),s=await yl._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wl{constructor(e,t){this.storage=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il extends wl{constructor(){super(window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Oa();return tl(e)||al(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=ll(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);cl()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Il.type="LOCAL";const Tl=Il;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol extends wl{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ol.type="SESSION";const Sl=Ol;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Nl(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function kl(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nl.receivers=[];class Al{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=kl("",20);r.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Cl(){return void 0!==xl().WorkerGlobalScope&&"function"==typeof xl().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Rl="firebaseLocalStorageDb";class Dl{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Pl(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Ll(){const e=indexedDB.open(Rl,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Rl);return new Dl(e).toPromise()}(),t(await Ll()))}))}))}async function Ml(e,t,n){const r=Pl(e,!0).put({fbase_key:t,value:n});return new Dl(r).toPromise()}function Fl(e,t){const n=Pl(e,!0).delete(t);return new Dl(n).toPromise()}class Ul{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Ll()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>3)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Cl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Nl._getInstance(Cl()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Al(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ll();return await Ml(e,"__sak","1"),await Fl(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Ml(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Pl(e,!1).get(t),r=await new Dl(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Fl(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Pl(e,!1).getAll();return new Dl(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Ul.type="LOCAL";const jl=Ul;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(e){return new Promise(((t,n)=>{const r=document.createElement("script");var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=yc("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}new Nc(3e4,6e4);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bl extends class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return bc("not implemented")}_getIdTokenResponse(e){return bc("not implemented")}_linkToIdToken(e,t){return bc("not implemented")}_getReauthenticationResolver(e){return bc("not implemented")}}{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pl(e,this._buildIdpRequest())}_linkToIdToken(e,t){return pl(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return pl(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ql(e){
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t,n=!1){const r="signIn",i=await bl(e,r,t),s=await yl._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}(e.auth,new Bl(e),e.bypassAuthState)}function $l(e){const{auth:t,user:n}=e;return _c(n,t,"internal-error"),
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await qc(e,bl(r,i,t,e),n);_c(s.idToken,r,"internal-error");const o=Bc(s.idToken);_c(o,r,"internal-error");const{sub:a}=o;return _c(e.uid===a,r,"user-mismatch"),yl._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null==s?void 0:s.code)&&mc(r,"user-mismatch"),s}}(n,new Bl(e),e.bypassAuthState)}async function zl(e){const{auth:t,user:n}=e;return _c(n,t,"internal-error"),async function(e,t,n=!1){const r=await qc(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return yl._forOperation(e,"link",r)}(n,new Bl(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new Nc(2e3,1e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Kl=new Map;class Hl extends class{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ql;case"linkViaPopup":case"linkViaRedirect":return zl;case"reauthViaPopup":case"reauthViaRedirect":return $l;default:mc(this.auth,"internal-error")}}resolve(e){Ec(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ec(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Kl.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return Xc("pendingRedirect",e.config.apiKey,e.name)}(t),r="true"===await Gl(e)._get(n);return await Gl(e)._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Kl.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Gl(e){return Ic(e._redirectPersistence)}async function Wl(e,t,n=!1){const r=fl(e),i=
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return t?Ic(t):(_c(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}(r,t),s=new Hl(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xl(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Xl(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(yc(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yl(e))}saveEventToCache(e){this.cachedEventUids.add(Yl(e)),this.lastProcessedEventTime=Date.now()}}function Yl(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Xl({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ql=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zl=/^https?/;async function eu(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Dc(e,"GET","/v1/projects",t)}(e);for(const r of t)try{if(tu(r))return}catch(n){}mc(e,"unauthorized-domain")}function tu(e){const t=Tc(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Zl.test(n))return!1;if(Ql.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu=new Nc(3e4,6e4);function ru(){const e=xl().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function iu(e){return new Promise(((t,n)=>{var r,i,s;function o(){ru(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ru(),n(yc(e,"network-request-failed"))},timeout:nu.get()})}if(null===(i=null===(r=xl().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=xl().gapi)||void 0===s?void 0:s.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return xl()[t]=()=>{gapi.load?o():n(yc(e,"network-request-failed"))},Vl(`https://apis.google.com/js/api.js?onload=${t}`)}o()}})).catch((e=>{throw su=null,e}))}let su=null;
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ou=new Nc(5e3,15e3),au={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},cu=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lu(e){const t=e.config;_c(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?kc(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:"9.1.3"},i=cu.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ca(r).slice(1)}`}async function uu(e){const t=await function(e){return su=su||iu(e),su}(e),n=xl().gapi;return _c(n,e,"internal-error"),t.open({where:document.body,url:lu(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:au,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=yc(e,"network-request-failed"),s=xl().setTimeout((()=>{r(i)}),ou.get());function o(){xl().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class fu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function du(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},hu),{width:r.toString(),height:i.toString(),top:s,left:o}),l=Oa().toLowerCase();n&&(a=nl(l)?"_blank":n),el(l)&&(t=t||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Oa()){var t;return al(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new fu(null);const h=window.open(t||"",a,u);_c(h,e,"popup-blocked");try{h.focus()}catch(f){}return new fu(h)}function pu(e,t,n,r,i,s){_c(e.config.authDomain,e,"auth-domain-config-required"),_c(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:"9.1.3",eventId:i};if(t instanceof vl){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof ml){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const c of Object.keys(a))void 0===a[c]&&delete a[c];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/__/auth/handler`;return kc(e,"emulator/auth/handler")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${Ca(a).slice(1)}`}const vu=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sl,this._completeRedirectFn=Wl}async _openPopup(e,t,n,r){var i;Ec(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return du(e,pu(e,t,n,Tc(),r),kl())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=pu(e,t,n,Tc(),r),xl().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Ec(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n}async initAndGetManager(e){const t=await uu(e),n=new Jl(e);return t.register("authEvent",(t=>{_c(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),mc(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=eu(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ll()||tl()||al()}};var mu;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yu{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_c(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function gu(e=function(e="[DEFAULT]"){const t=ec.get(e);if(!t)throw sc.create("no-app",{appName:e});return t}()){const t=ic(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=ic(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(Aa(n.getOptions(),null!=t?t:{}))return e;mc(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:vu,persistence:[jl,Tl,Sl]})}mu="Browser",rc(new Va("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:i}=n.options;return(e=>{_c(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),_c(!(null==i?void 0:i.includes(":")),"argument-error",{appName:e.name});const n={apiKey:r,authDomain:i,clientPlatform:mu,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ul(mu)},s=new hl(e,n);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ic);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),rc(new Va("auth-internal",(e=>{const t=fl(e.getProvider("auth").getImmediate());return new yu(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),cc("@firebase/auth","0.18.3",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(mu)),cc("@firebase/auth","0.18.3","esm2017");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
cc("firebase","9.1.3","app");export{Vn as F,er as a,nr as b,Wn as c,xn as d,wo as e,et as f,wa as g,sn as h,Dr as i,rr as j,gu as k,Fs as l,El as m,On as n,Hn as o,Ls as p,ji as q,Fn as r,ac as s,c as t,Us as u,ri as v,Vt as w,oi as x};
