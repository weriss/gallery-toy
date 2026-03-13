(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function rf(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const we={},Ir=[],Si=()=>{},yp=()=>!1,yl=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),of=n=>n.startsWith("onUpdate:"),Ye=Object.assign,af=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},vg=Object.prototype.hasOwnProperty,xe=(n,t)=>vg.call(n,t),jt=Array.isArray,Lr=n=>ea(n)==="[object Map]",Mp=n=>ea(n)==="[object Set]",lh=n=>ea(n)==="[object Date]",ie=n=>typeof n=="function",Ve=n=>typeof n=="string",bi=n=>typeof n=="symbol",ye=n=>n!==null&&typeof n=="object",Sp=n=>(ye(n)||ie(n))&&ie(n.then)&&ie(n.catch),bp=Object.prototype.toString,ea=n=>bp.call(n),xg=n=>ea(n).slice(8,-1),Ep=n=>ea(n)==="[object Object]",lf=n=>Ve(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,To=rf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ml=n=>{const t=Object.create(null);return(e=>t[e]||(t[e]=n(e)))},yg=/-\w/g,xs=Ml(n=>n.replace(yg,t=>t.slice(1).toUpperCase())),Mg=/\B([A-Z])/g,or=Ml(n=>n.replace(Mg,"-$1").toLowerCase()),Tp=Ml(n=>n.charAt(0).toUpperCase()+n.slice(1)),kl=Ml(n=>n?`on${Tp(n)}`:""),ps=(n,t)=>!Object.is(n,t),za=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},wp=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},cf=n=>{const t=parseFloat(n);return isNaN(t)?n:t},Sg=n=>{const t=Ve(n)?Number(n):NaN;return isNaN(t)?n:t};let ch;const Sl=()=>ch||(ch=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function oi(n){if(jt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=Ve(i)?wg(i):oi(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(Ve(n)||ye(n))return n}const bg=/;(?![^(]*\))/g,Eg=/:([^]+)/,Tg=/\/\*[^]*?\*\//g;function wg(n){const t={};return n.replace(Tg,"").split(bg).forEach(e=>{if(e){const i=e.split(Eg);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Ce(n){let t="";if(Ve(n))t=n;else if(jt(n))for(let e=0;e<n.length;e++){const i=Ce(n[e]);i&&(t+=i+" ")}else if(ye(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const Ag="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Cg=rf(Ag);function Ap(n){return!!n||n===""}function Rg(n,t){if(n.length!==t.length)return!1;let e=!0;for(let i=0;e&&i<n.length;i++)e=uf(n[i],t[i]);return e}function uf(n,t){if(n===t)return!0;let e=lh(n),i=lh(t);if(e||i)return e&&i?n.getTime()===t.getTime():!1;if(e=bi(n),i=bi(t),e||i)return n===t;if(e=jt(n),i=jt(t),e||i)return e&&i?Rg(n,t):!1;if(e=ye(n),i=ye(t),e||i){if(!e||!i)return!1;const s=Object.keys(n).length,r=Object.keys(t).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!uf(n[o],t[o]))return!1}}return String(n)===String(t)}const Cp=n=>!!(n&&n.__v_isRef===!0),bt=n=>Ve(n)?n:n==null?"":jt(n)||ye(n)&&(n.toString===bp||!ie(n.toString))?Cp(n)?bt(n.value):JSON.stringify(n,Rp,2):String(n),Rp=(n,t)=>Cp(t)?Rp(n,t.value):Lr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[zl(i,r)+" =>"]=s,e),{})}:Mp(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>zl(e))}:bi(t)?zl(t):ye(t)&&!jt(t)&&!Ep(t)?String(t):t,zl=(n,t="")=>{var e;return bi(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let En;class Pg{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=En,!t&&En&&(this.index=(En.scopes||(En.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=En;try{return En=this,t()}finally{En=e}}}on(){++this._on===1&&(this.prevScope=En,En=this)}off(){this._on>0&&--this._on===0&&(En=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Dg(){return En}let Re;const Hl=new WeakSet;class Pp{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,En&&En.active&&En.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Hl.has(this)&&(Hl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ip(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,uh(this),Lp(this);const t=Re,e=li;Re=this,li=!0;try{return this.fn()}finally{Up(this),Re=t,li=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)df(t);this.deps=this.depsTail=void 0,uh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Hl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Vc(this)&&this.run()}get dirty(){return Vc(this)}}let Dp=0,wo,Ao;function Ip(n,t=!1){if(n.flags|=8,t){n.next=Ao,Ao=n;return}n.next=wo,wo=n}function ff(){Dp++}function hf(){if(--Dp>0)return;if(Ao){let t=Ao;for(Ao=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;wo;){let t=wo;for(wo=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Lp(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Up(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),df(i),Ig(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function Vc(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Np(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Np(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ko)||(n.globalVersion=ko,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Vc(n))))return;n.flags|=2;const t=n.dep,e=Re,i=li;Re=n,li=!0;try{Lp(n);const s=n.fn(n._value);(t.version===0||ps(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{Re=e,li=i,Up(n),n.flags&=-3}}function df(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)df(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function Ig(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let li=!0;const Op=[];function Xi(){Op.push(li),li=!1}function qi(){const n=Op.pop();li=n===void 0?!0:n}function uh(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=Re;Re=void 0;try{t()}finally{Re=e}}}let ko=0;class Lg{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class pf{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Re||!li||Re===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==Re)e=this.activeLink=new Lg(Re,this),Re.deps?(e.prevDep=Re.depsTail,Re.depsTail.nextDep=e,Re.depsTail=e):Re.deps=Re.depsTail=e,Fp(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=Re.depsTail,e.nextDep=void 0,Re.depsTail.nextDep=e,Re.depsTail=e,Re.deps===e&&(Re.deps=i)}return e}trigger(t){this.version++,ko++,this.notify(t)}notify(t){ff();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{hf()}}}function Fp(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Fp(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Gc=new WeakMap,Zs=Symbol(""),Wc=Symbol(""),zo=Symbol("");function ln(n,t,e){if(li&&Re){let i=Gc.get(n);i||Gc.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new pf),s.map=i,s.key=e),s.track()}}function zi(n,t,e,i,s,r){const o=Gc.get(n);if(!o){ko++;return}const a=l=>{l&&l.trigger()};if(ff(),t==="clear")o.forEach(a);else{const l=jt(n),u=l&&lf(e);if(l&&e==="length"){const c=Number(i);o.forEach((f,h)=>{(h==="length"||h===zo||!bi(h)&&h>=c)&&a(f)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),u&&a(o.get(zo)),t){case"add":l?u&&a(o.get("length")):(a(o.get(Zs)),Lr(n)&&a(o.get(Wc)));break;case"delete":l||(a(o.get(Zs)),Lr(n)&&a(o.get(Wc)));break;case"set":Lr(n)&&a(o.get(Zs));break}}hf()}function cr(n){const t=me(n);return t===n?t:(ln(t,"iterate",zo),Jn(n)?t:t.map(ui))}function bl(n){return ln(n=me(n),"iterate",zo),n}function ls(n,t){return Yi(n)?Gr(Js(n)?ui(t):t):ui(t)}const Ug={__proto__:null,[Symbol.iterator](){return Vl(this,Symbol.iterator,n=>ls(this,n))},concat(...n){return cr(this).concat(...n.map(t=>jt(t)?cr(t):t))},entries(){return Vl(this,"entries",n=>(n[1]=ls(this,n[1]),n))},every(n,t){return Ai(this,"every",n,t,void 0,arguments)},filter(n,t){return Ai(this,"filter",n,t,e=>e.map(i=>ls(this,i)),arguments)},find(n,t){return Ai(this,"find",n,t,e=>ls(this,e),arguments)},findIndex(n,t){return Ai(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return Ai(this,"findLast",n,t,e=>ls(this,e),arguments)},findLastIndex(n,t){return Ai(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return Ai(this,"forEach",n,t,void 0,arguments)},includes(...n){return Gl(this,"includes",n)},indexOf(...n){return Gl(this,"indexOf",n)},join(n){return cr(this).join(n)},lastIndexOf(...n){return Gl(this,"lastIndexOf",n)},map(n,t){return Ai(this,"map",n,t,void 0,arguments)},pop(){return lo(this,"pop")},push(...n){return lo(this,"push",n)},reduce(n,...t){return fh(this,"reduce",n,t)},reduceRight(n,...t){return fh(this,"reduceRight",n,t)},shift(){return lo(this,"shift")},some(n,t){return Ai(this,"some",n,t,void 0,arguments)},splice(...n){return lo(this,"splice",n)},toReversed(){return cr(this).toReversed()},toSorted(n){return cr(this).toSorted(n)},toSpliced(...n){return cr(this).toSpliced(...n)},unshift(...n){return lo(this,"unshift",n)},values(){return Vl(this,"values",n=>ls(this,n))}};function Vl(n,t,e){const i=bl(n),s=i[t]();return i!==n&&!Jn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=e(r.value)),r}),s}const Ng=Array.prototype;function Ai(n,t,e,i,s,r){const o=bl(n),a=o!==n&&!Jn(n),l=o[t];if(l!==Ng[t]){const f=l.apply(n,r);return a?ui(f):f}let u=e;o!==n&&(a?u=function(f,h){return e.call(this,ls(n,f),h,n)}:e.length>2&&(u=function(f,h){return e.call(this,f,h,n)}));const c=l.call(o,u,i);return a&&s?s(c):c}function fh(n,t,e,i){const s=bl(n);let r=e;return s!==n&&(Jn(n)?e.length>3&&(r=function(o,a,l){return e.call(this,o,a,l,n)}):r=function(o,a,l){return e.call(this,o,ls(n,a),l,n)}),s[t](r,...i)}function Gl(n,t,e){const i=me(n);ln(i,"iterate",zo);const s=i[t](...e);return(s===-1||s===!1)&&gf(e[0])?(e[0]=me(e[0]),i[t](...e)):s}function lo(n,t,e=[]){Xi(),ff();const i=me(n)[t].apply(n,e);return hf(),qi(),i}const Og=rf("__proto__,__v_isRef,__isVue"),Bp=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(bi));function Fg(n){bi(n)||(n=String(n));const t=me(this);return ln(t,"has",n),t.hasOwnProperty(n)}class kp{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?Yg:Gp:r?Vp:Hp).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=jt(t);if(!s){let l;if(o&&(l=Ug[e]))return l;if(e==="hasOwnProperty")return Fg}const a=Reflect.get(t,e,un(t)?t:i);if((bi(e)?Bp.has(e):Og(e))||(s||ln(t,"get",e),r))return a;if(un(a)){const l=o&&lf(e)?a:a.value;return s&&ye(l)?qc(l):l}return ye(a)?s?qc(a):Ho(a):a}}class zp extends kp{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];const o=jt(t)&&lf(e);if(!this._isShallow){const u=Yi(r);if(!Jn(i)&&!Yi(i)&&(r=me(r),i=me(i)),!o&&un(r)&&!un(i))return u||(r.value=i),!0}const a=o?Number(e)<t.length:xe(t,e),l=Reflect.set(t,e,i,un(t)?t:s);return t===me(s)&&(a?ps(i,r)&&zi(t,"set",e,i):zi(t,"add",e,i)),l}deleteProperty(t,e){const i=xe(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&zi(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!bi(e)||!Bp.has(e))&&ln(t,"has",e),i}ownKeys(t){return ln(t,"iterate",jt(t)?"length":Zs),Reflect.ownKeys(t)}}class Bg extends kp{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const kg=new zp,zg=new Bg,Hg=new zp(!0);const Xc=n=>n,ha=n=>Reflect.getPrototypeOf(n);function Vg(n,t,e){return function(...i){const s=this.__v_raw,r=me(s),o=Lr(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,u=s[n](...i),c=e?Xc:t?Gr:ui;return!t&&ln(r,"iterate",l?Wc:Zs),Ye(Object.create(u),{next(){const{value:f,done:h}=u.next();return h?{value:f,done:h}:{value:a?[c(f[0]),c(f[1])]:c(f),done:h}}})}}function da(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Gg(n,t){const e={get(s){const r=this.__v_raw,o=me(r),a=me(s);n||(ps(s,a)&&ln(o,"get",s),ln(o,"get",a));const{has:l}=ha(o),u=t?Xc:n?Gr:ui;if(l.call(o,s))return u(r.get(s));if(l.call(o,a))return u(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&ln(me(s),"iterate",Zs),s.size},has(s){const r=this.__v_raw,o=me(r),a=me(s);return n||(ps(s,a)&&ln(o,"has",s),ln(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=me(a),u=t?Xc:n?Gr:ui;return!n&&ln(l,"iterate",Zs),a.forEach((c,f)=>s.call(r,u(c),u(f),o))}};return Ye(e,n?{add:da("add"),set:da("set"),delete:da("delete"),clear:da("clear")}:{add(s){!t&&!Jn(s)&&!Yi(s)&&(s=me(s));const r=me(this);return ha(r).has.call(r,s)||(r.add(s),zi(r,"add",s,s)),this},set(s,r){!t&&!Jn(r)&&!Yi(r)&&(r=me(r));const o=me(this),{has:a,get:l}=ha(o);let u=a.call(o,s);u||(s=me(s),u=a.call(o,s));const c=l.call(o,s);return o.set(s,r),u?ps(r,c)&&zi(o,"set",s,r):zi(o,"add",s,r),this},delete(s){const r=me(this),{has:o,get:a}=ha(r);let l=o.call(r,s);l||(s=me(s),l=o.call(r,s)),a&&a.call(r,s);const u=r.delete(s);return l&&zi(r,"delete",s,void 0),u},clear(){const s=me(this),r=s.size!==0,o=s.clear();return r&&zi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Vg(s,n,t)}),e}function mf(n,t){const e=Gg(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(xe(e,s)&&s in i?e:i,s,r)}const Wg={get:mf(!1,!1)},Xg={get:mf(!1,!0)},qg={get:mf(!0,!1)};const Hp=new WeakMap,Vp=new WeakMap,Gp=new WeakMap,Yg=new WeakMap;function $g(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Kg(n){return n.__v_skip||!Object.isExtensible(n)?0:$g(xg(n))}function Ho(n){return Yi(n)?n:_f(n,!1,kg,Wg,Hp)}function jg(n){return _f(n,!1,Hg,Xg,Vp)}function qc(n){return _f(n,!0,zg,qg,Gp)}function _f(n,t,e,i,s){if(!ye(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const r=Kg(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:e);return s.set(n,a),a}function Js(n){return Yi(n)?Js(n.__v_raw):!!(n&&n.__v_isReactive)}function Yi(n){return!!(n&&n.__v_isReadonly)}function Jn(n){return!!(n&&n.__v_isShallow)}function gf(n){return n?!!n.__v_raw:!1}function me(n){const t=n&&n.__v_raw;return t?me(t):n}function Zg(n){return!xe(n,"__v_skip")&&Object.isExtensible(n)&&wp(n,"__v_skip",!0),n}const ui=n=>ye(n)?Ho(n):n,Gr=n=>ye(n)?qc(n):n;function un(n){return n?n.__v_isRef===!0:!1}function he(n){return Jg(n,!1)}function Jg(n,t){return un(n)?n:new Qg(n,t)}class Qg{constructor(t,e){this.dep=new pf,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:me(t),this._value=e?t:ui(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||Jn(t)||Yi(t);t=i?t:me(t),ps(t,e)&&(this._rawValue=t,this._value=i?t:ui(t),this.dep.trigger())}}function St(n){return un(n)?n.value:n}const t0={get:(n,t,e)=>t==="__v_raw"?n:St(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return un(s)&&!un(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function Wp(n){return Js(n)?n:new Proxy(n,t0)}class e0{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new pf(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ko-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Re!==this)return Ip(this,!0),!0}get value(){const t=this.dep.track();return Np(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function n0(n,t,e=!1){let i,s;return ie(n)?i=n:(i=n.get,s=n.set),new e0(i,s,e)}const pa={},tl=new WeakMap;let ks;function i0(n,t=!1,e=ks){if(e){let i=tl.get(e);i||tl.set(e,i=[]),i.push(n)}}function s0(n,t,e=we){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,u=v=>s?v:Jn(v)||s===!1||s===0?Hi(v,1):Hi(v);let c,f,h,d,g=!1,_=!1;if(un(n)?(f=()=>n.value,g=Jn(n)):Js(n)?(f=()=>u(n),g=!0):jt(n)?(_=!0,g=n.some(v=>Js(v)||Jn(v)),f=()=>n.map(v=>{if(un(v))return v.value;if(Js(v))return u(v);if(ie(v))return l?l(v,2):v()})):ie(n)?t?f=l?()=>l(n,2):n:f=()=>{if(h){Xi();try{h()}finally{qi()}}const v=ks;ks=c;try{return l?l(n,3,[d]):n(d)}finally{ks=v}}:f=Si,t&&s){const v=f,R=s===!0?1/0:s;f=()=>Hi(v(),R)}const m=Dg(),p=()=>{c.stop(),m&&m.active&&af(m.effects,c)};if(r&&t){const v=t;t=(...R)=>{v(...R),p()}}let M=_?new Array(n.length).fill(pa):pa;const y=v=>{if(!(!(c.flags&1)||!c.dirty&&!v))if(t){const R=c.run();if(s||g||(_?R.some((w,C)=>ps(w,M[C])):ps(R,M))){h&&h();const w=ks;ks=c;try{const C=[R,M===pa?void 0:_&&M[0]===pa?[]:M,d];M=R,l?l(t,3,C):t(...C)}finally{ks=w}}}else c.run()};return a&&a(y),c=new Pp(f),c.scheduler=o?()=>o(y,!1):y,d=v=>i0(v,!1,c),h=c.onStop=()=>{const v=tl.get(c);if(v){if(l)l(v,4);else for(const R of v)R();tl.delete(c)}},t?i?y(!0):M=c.run():o?o(y.bind(null,!0),!0):c.run(),p.pause=c.pause.bind(c),p.resume=c.resume.bind(c),p.stop=p,p}function Hi(n,t=1/0,e){if(t<=0||!ye(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,un(n))Hi(n.value,t,e);else if(jt(n))for(let i=0;i<n.length;i++)Hi(n[i],t,e);else if(Mp(n)||Lr(n))n.forEach(i=>{Hi(i,t,e)});else if(Ep(n)){for(const i in n)Hi(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Hi(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function na(n,t,e,i){try{return i?n(...i):n()}catch(s){El(s,t,e)}}function fi(n,t,e,i){if(ie(n)){const s=na(n,t,e,i);return s&&Sp(s)&&s.catch(r=>{El(r,t,e)}),s}if(jt(n)){const s=[];for(let r=0;r<n.length;r++)s.push(fi(n[r],t,e,i));return s}}function El(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||we;if(t){let a=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const c=a.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](n,l,u)===!1)return}a=a.parent}if(r){Xi(),na(r,null,10,[n,l,u]),qi();return}}r0(n,e,s,i,o)}function r0(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const mn=[];let di=-1;const Ur=[];let cs=null,Tr=0;const Xp=Promise.resolve();let el=null;function Co(n){const t=el||Xp;return n?t.then(this?n.bind(this):n):t}function o0(n){let t=di+1,e=mn.length;for(;t<e;){const i=t+e>>>1,s=mn[i],r=Vo(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function vf(n){if(!(n.flags&1)){const t=Vo(n),e=mn[mn.length-1];!e||!(n.flags&2)&&t>=Vo(e)?mn.push(n):mn.splice(o0(t),0,n),n.flags|=1,qp()}}function qp(){el||(el=Xp.then($p))}function a0(n){jt(n)?Ur.push(...n):cs&&n.id===-1?cs.splice(Tr+1,0,n):n.flags&1||(Ur.push(n),n.flags|=1),qp()}function hh(n,t,e=di+1){for(;e<mn.length;e++){const i=mn[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;mn.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Yp(n){if(Ur.length){const t=[...new Set(Ur)].sort((e,i)=>Vo(e)-Vo(i));if(Ur.length=0,cs){cs.push(...t);return}for(cs=t,Tr=0;Tr<cs.length;Tr++){const e=cs[Tr];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}cs=null,Tr=0}}const Vo=n=>n.id==null?n.flags&2?-1:1/0:n.id;function $p(n){try{for(di=0;di<mn.length;di++){const t=mn[di];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),na(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;di<mn.length;di++){const t=mn[di];t&&(t.flags&=-2)}di=-1,mn.length=0,Yp(),el=null,(mn.length||Ur.length)&&$p()}}let Kn=null,Kp=null;function nl(n){const t=Kn;return Kn=n,Kp=n&&n.type.__scopeId||null,t}function pi(n,t=Kn,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&rl(-1);const r=nl(t);let o;try{o=n(...s)}finally{nl(r),i._d&&rl(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Nr(n,t){if(Kn===null)return n;const e=Pl(Kn),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=we]=t[s];r&&(ie(r)&&(r={mounted:r,updated:r}),r.deep&&Hi(o),i.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function As(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Xi(),fi(l,e,8,[n.el,a,n,t]),qi())}}function l0(n,t){if(gn){let e=gn.provides;const i=gn.parent&&gn.parent.provides;i===e&&(e=gn.provides=Object.create(i)),e[n]=t}}function Ha(n,t,e=!1){const i=Tm();if(i||Or){let s=Or?Or._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&ie(t)?t.call(i&&i.proxy):t}}const c0=Symbol.for("v-scx"),u0=()=>Ha(c0);function Qs(n,t,e){return jp(n,t,e)}function jp(n,t,e=we){const{immediate:i,deep:s,flush:r,once:o}=e,a=Ye({},e),l=t&&i||!t&&r!=="post";let u;if(Xo){if(r==="sync"){const d=u0();u=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Si,d.resume=Si,d.pause=Si,d}}const c=gn;a.call=(d,g,_)=>fi(d,c,g,_);let f=!1;r==="post"?a.scheduler=d=>{bn(d,c&&c.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(d,g)=>{g?d():vf(d)}),a.augmentJob=d=>{t&&(d.flags|=4),f&&(d.flags|=2,c&&(d.id=c.uid,d.i=c))};const h=s0(n,t,a);return Xo&&(u?u.push(h):l&&h()),h}function f0(n,t,e){const i=this.proxy,s=Ve(n)?n.includes(".")?Zp(i,n):()=>i[n]:n.bind(i,i);let r;ie(t)?r=t:(r=t.handler,e=t);const o=sa(this),a=jp(s,r.bind(i),e);return o(),a}function Zp(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const h0=Symbol("_vte"),Jp=n=>n.__isTeleport,mi=Symbol("_leaveCb"),co=Symbol("_enterCb");function d0(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ia(()=>{n.isMounted=!0}),xf(()=>{n.isUnmounting=!0}),n}const Xn=[Function,Array],Qp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Xn,onEnter:Xn,onAfterEnter:Xn,onEnterCancelled:Xn,onBeforeLeave:Xn,onLeave:Xn,onAfterLeave:Xn,onLeaveCancelled:Xn,onBeforeAppear:Xn,onAppear:Xn,onAfterAppear:Xn,onAppearCancelled:Xn},tm=n=>{const t=n.subTree;return t.component?tm(t.component):t},p0={name:"BaseTransition",props:Qp,setup(n,{slots:t}){const e=Tm(),i=d0();return()=>{const s=t.default&&im(t.default(),!0);if(!s||!s.length)return;const r=em(s),o=me(n),{mode:a}=o;if(i.isLeaving)return Wl(r);const l=dh(r);if(!l)return Wl(r);let u=Yc(l,o,i,e,f=>u=f);l.type!==_n&&Go(l,u);let c=e.subTree&&dh(e.subTree);if(c&&c.type!==_n&&!Gs(c,l)&&tm(e).type!==_n){let f=Yc(c,o,i,e);if(Go(c,f),a==="out-in"&&l.type!==_n)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,e.job.flags&8||e.update(),delete f.afterLeave,c=void 0},Wl(r);a==="in-out"&&l.type!==_n?f.delayLeave=(h,d,g)=>{const _=nm(i,c);_[String(c.key)]=c,h[mi]=()=>{d(),h[mi]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{g(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return r}}};function em(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==_n){t=e;break}}return t}const m0=p0;function nm(n,t){const{leavingVNodes:e}=n;let i=e.get(t.type);return i||(i=Object.create(null),e.set(t.type,i)),i}function Yc(n,t,e,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:h,onLeave:d,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:m,onAppear:p,onAfterAppear:M,onAppearCancelled:y}=t,v=String(n.key),R=nm(e,n),w=(x,S)=>{x&&fi(x,i,9,S)},C=(x,S)=>{const L=S[1];w(x,S),jt(x)?x.every(N=>N.length<=1)&&L():x.length<=1&&L()},P={mode:o,persisted:a,beforeEnter(x){let S=l;if(!e.isMounted)if(r)S=m||l;else return;x[mi]&&x[mi](!0);const L=R[v];L&&Gs(n,L)&&L.el[mi]&&L.el[mi](),w(S,[x])},enter(x){if(R[v]===n)return;let S=u,L=c,N=f;if(!e.isMounted)if(r)S=p||u,L=M||c,N=y||f;else return;let k=!1;x[co]=J=>{k||(k=!0,J?w(N,[x]):w(L,[x]),P.delayedLeave&&P.delayedLeave(),x[co]=void 0)};const Y=x[co].bind(null,!1);S?C(S,[x,Y]):Y()},leave(x,S){const L=String(n.key);if(x[co]&&x[co](!0),e.isUnmounting)return S();w(h,[x]);let N=!1;x[mi]=Y=>{N||(N=!0,S(),Y?w(_,[x]):w(g,[x]),x[mi]=void 0,R[L]===n&&delete R[L])};const k=x[mi].bind(null,!1);R[L]=n,d?C(d,[x,k]):k()},clone(x){const S=Yc(x,t,e,i,s);return s&&s(S),S}};return P}function Wl(n){if(Tl(n))return n=ys(n),n.children=null,n}function dh(n){if(!Tl(n))return Jp(n.type)&&n.children?em(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&ie(e.default))return e.default()}}function Go(n,t){n.shapeFlag&6&&n.component?(n.transition=t,Go(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function im(n,t=!1,e){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=e==null?o.key:String(e)+String(o.key!=null?o.key:r);o.type===Le?(o.patchFlag&128&&s++,i=i.concat(im(o.children,t,a))):(t||o.type!==_n)&&i.push(a!=null?ys(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function _0(n,t){return ie(n)?Ye({name:n.name},t,{setup:n}):n}function sm(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function ph(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const il=new WeakMap;function Ro(n,t,e,i,s=!1){if(jt(n)){n.forEach((_,m)=>Ro(_,t&&(jt(t)?t[m]:t),e,i,s));return}if(Po(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ro(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?Pl(i.component):i.el,o=s?null:r,{i:a,r:l}=n,u=t&&t.r,c=a.refs===we?a.refs={}:a.refs,f=a.setupState,h=me(f),d=f===we?yp:_=>ph(c,_)?!1:xe(h,_),g=(_,m)=>!(m&&ph(c,m));if(u!=null&&u!==l){if(mh(t),Ve(u))c[u]=null,d(u)&&(f[u]=null);else if(un(u)){const _=t;g(u,_.k)&&(u.value=null),_.k&&(c[_.k]=null)}}if(ie(l))na(l,a,12,[o,c]);else{const _=Ve(l),m=un(l);if(_||m){const p=()=>{if(n.f){const M=_?d(l)?f[l]:c[l]:g()||!n.k?l.value:c[n.k];if(s)jt(M)&&af(M,r);else if(jt(M))M.includes(r)||M.push(r);else if(_)c[l]=[r],d(l)&&(f[l]=c[l]);else{const y=[r];g(l,n.k)&&(l.value=y),n.k&&(c[n.k]=y)}}else _?(c[l]=o,d(l)&&(f[l]=o)):m&&(g(l,n.k)&&(l.value=o),n.k&&(c[n.k]=o))};if(o){const M=()=>{p(),il.delete(n)};M.id=-1,il.set(n,M),bn(M,e)}else mh(n),p()}}}function mh(n){const t=il.get(n);t&&(t.flags|=8,il.delete(n))}Sl().requestIdleCallback;Sl().cancelIdleCallback;const Po=n=>!!n.type.__asyncLoader,Tl=n=>n.type.__isKeepAlive;function g0(n,t){rm(n,"a",t)}function v0(n,t){rm(n,"da",t)}function rm(n,t,e=gn){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(wl(t,i,e),e){let s=e.parent;for(;s&&s.parent;)Tl(s.parent.vnode)&&x0(i,t,e,s),s=s.parent}}function x0(n,t,e,i){const s=wl(t,n,i,!0);Al(()=>{af(i[t],s)},e)}function wl(n,t,e=gn,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{Xi();const a=sa(e),l=fi(t,e,n,o);return a(),qi(),l});return i?s.unshift(r):s.push(r),r}}const Ji=n=>(t,e=gn)=>{(!Xo||n==="sp")&&wl(n,(...i)=>t(...i),e)},y0=Ji("bm"),ia=Ji("m"),M0=Ji("bu"),S0=Ji("u"),xf=Ji("bum"),Al=Ji("um"),b0=Ji("sp"),E0=Ji("rtg"),T0=Ji("rtc");function w0(n,t=gn){wl("ec",n,t)}const A0=Symbol.for("v-ndc");function Tn(n,t,e,i){let s;const r=e,o=jt(n);if(o||Ve(n)){const a=o&&Js(n);let l=!1,u=!1;a&&(l=!Jn(n),u=Yi(n),n=bl(n)),s=new Array(n.length);for(let c=0,f=n.length;c<f;c++)s[c]=t(l?u?Gr(ui(n[c])):ui(n[c]):n[c],c,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=t(a+1,a,void 0,r)}else if(ye(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];s[l]=t(n[c],c,l,r)}}else s=[];return s}const $c=n=>n?wm(n)?Pl(n):$c(n.parent):null,Do=Ye(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>$c(n.parent),$root:n=>$c(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>am(n),$forceUpdate:n=>n.f||(n.f=()=>{vf(n.update)}),$nextTick:n=>n.n||(n.n=Co.bind(n.proxy)),$watch:n=>f0.bind(n)}),Xl=(n,t)=>n!==we&&!n.__isScriptSetup&&xe(n,t),C0={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const h=o[t];if(h!==void 0)switch(h){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(Xl(i,t))return o[t]=1,i[t];if(s!==we&&xe(s,t))return o[t]=2,s[t];if(xe(r,t))return o[t]=3,r[t];if(e!==we&&xe(e,t))return o[t]=4,e[t];Kc&&(o[t]=0)}}const u=Do[t];let c,f;if(u)return t==="$attrs"&&ln(n.attrs,"get",""),u(n);if((c=a.__cssModules)&&(c=c[t]))return c;if(e!==we&&xe(e,t))return o[t]=4,e[t];if(f=l.config.globalProperties,xe(f,t))return f[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return Xl(s,t)?(s[t]=e,!0):i!==we&&xe(i,t)?(i[t]=e,!0):xe(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(e[a]||n!==we&&a[0]!=="$"&&xe(n,a)||Xl(t,a)||xe(r,a)||xe(i,a)||xe(Do,a)||xe(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:xe(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function _h(n){return jt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Kc=!0;function R0(n){const t=am(n),e=n.proxy,i=n.ctx;Kc=!1,t.beforeCreate&&gh(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:M,destroyed:y,unmounted:v,render:R,renderTracked:w,renderTriggered:C,errorCaptured:P,serverPrefetch:x,expose:S,inheritAttrs:L,components:N,directives:k,filters:Y}=t;if(u&&P0(u,i,null),o)for(const K in o){const B=o[K];ie(B)&&(i[K]=B.bind(e))}if(s){const K=s.call(e,e);ye(K)&&(n.data=Ho(K))}if(Kc=!0,r)for(const K in r){const B=r[K],gt=ie(B)?B.bind(e,e):ie(B.get)?B.get.bind(e,e):Si,mt=!ie(B)&&ie(B.set)?B.set.bind(e):Si,Tt=Ze({get:gt,set:mt});Object.defineProperty(i,K,{enumerable:!0,configurable:!0,get:()=>Tt.value,set:Ut=>Tt.value=Ut})}if(a)for(const K in a)om(a[K],i,e,K);if(l){const K=ie(l)?l.call(e):l;Reflect.ownKeys(K).forEach(B=>{l0(B,K[B])})}c&&gh(c,n,"c");function W(K,B){jt(B)?B.forEach(gt=>K(gt.bind(e))):B&&K(B.bind(e))}if(W(y0,f),W(ia,h),W(M0,d),W(S0,g),W(g0,_),W(v0,m),W(w0,P),W(T0,w),W(E0,C),W(xf,M),W(Al,v),W(b0,x),jt(S))if(S.length){const K=n.exposed||(n.exposed={});S.forEach(B=>{Object.defineProperty(K,B,{get:()=>e[B],set:gt=>e[B]=gt,enumerable:!0})})}else n.exposed||(n.exposed={});R&&n.render===Si&&(n.render=R),L!=null&&(n.inheritAttrs=L),N&&(n.components=N),k&&(n.directives=k),x&&sm(n)}function P0(n,t,e=Si){jt(n)&&(n=jc(n));for(const i in n){const s=n[i];let r;ye(s)?"default"in s?r=Ha(s.from||i,s.default,!0):r=Ha(s.from||i):r=Ha(s),un(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function gh(n,t,e){fi(jt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function om(n,t,e,i){let s=i.includes(".")?Zp(e,i):()=>e[i];if(Ve(n)){const r=t[n];ie(r)&&Qs(s,r)}else if(ie(n))Qs(s,n.bind(e));else if(ye(n))if(jt(n))n.forEach(r=>om(r,t,e,i));else{const r=ie(n.handler)?n.handler.bind(e):t[n.handler];ie(r)&&Qs(s,r,n)}}function am(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(u=>sl(l,u,o,!0)),sl(l,t,o)),ye(t)&&r.set(t,l),l}function sl(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&sl(n,r,e,!0),s&&s.forEach(o=>sl(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=D0[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const D0={data:vh,props:xh,emits:xh,methods:yo,computed:yo,beforeCreate:dn,created:dn,beforeMount:dn,mounted:dn,beforeUpdate:dn,updated:dn,beforeDestroy:dn,beforeUnmount:dn,destroyed:dn,unmounted:dn,activated:dn,deactivated:dn,errorCaptured:dn,serverPrefetch:dn,components:yo,directives:yo,watch:L0,provide:vh,inject:I0};function vh(n,t){return t?n?function(){return Ye(ie(n)?n.call(this,this):n,ie(t)?t.call(this,this):t)}:t:n}function I0(n,t){return yo(jc(n),jc(t))}function jc(n){if(jt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function dn(n,t){return n?[...new Set([].concat(n,t))]:t}function yo(n,t){return n?Ye(Object.create(null),n,t):t}function xh(n,t){return n?jt(n)&&jt(t)?[...new Set([...n,...t])]:Ye(Object.create(null),_h(n),_h(t??{})):t}function L0(n,t){if(!n)return t;if(!t)return n;const e=Ye(Object.create(null),n);for(const i in t)e[i]=dn(n[i],t[i]);return e}function lm(){return{app:null,config:{isNativeTag:yp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let U0=0;function N0(n,t){return function(i,s=null){ie(i)||(i=Ye({},i)),s!=null&&!ye(s)&&(s=null);const r=lm(),o=new WeakSet,a=[];let l=!1;const u=r.app={_uid:U0++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:mv,get config(){return r.config},set config(c){},use(c,...f){return o.has(c)||(c&&ie(c.install)?(o.add(c),c.install(u,...f)):ie(c)&&(o.add(c),c(u,...f))),u},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),u},component(c,f){return f?(r.components[c]=f,u):r.components[c]},directive(c,f){return f?(r.directives[c]=f,u):r.directives[c]},mount(c,f,h){if(!l){const d=u._ceVNode||Pe(i,s);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),n(d,c,h),l=!0,u._container=c,c.__vue_app__=u,Pl(d.component)}},onUnmount(c){a.push(c)},unmount(){l&&(fi(a,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(c,f){return r.provides[c]=f,u},runWithContext(c){const f=Or;Or=u;try{return c()}finally{Or=f}}};return u}}let Or=null;const O0=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${xs(t)}Modifiers`]||n[`${or(t)}Modifiers`];function F0(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||we;let s=e;const r=t.startsWith("update:"),o=r&&O0(i,t.slice(7));o&&(o.trim&&(s=e.map(c=>Ve(c)?c.trim():c)),o.number&&(s=e.map(cf)));let a,l=i[a=kl(t)]||i[a=kl(xs(t))];!l&&r&&(l=i[a=kl(or(t))]),l&&fi(l,n,6,s);const u=i[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,fi(u,n,6,s)}}const B0=new WeakMap;function cm(n,t,e=!1){const i=e?B0:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!ie(n)){const l=u=>{const c=cm(u,t,!0);c&&(a=!0,Ye(o,c))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(ye(n)&&i.set(n,null),null):(jt(r)?r.forEach(l=>o[l]=null):Ye(o,r),ye(n)&&i.set(n,o),o)}function Cl(n,t){return!n||!yl(t)?!1:(t=t.slice(2).replace(/Once$/,""),xe(n,t[0].toLowerCase()+t.slice(1))||xe(n,or(t))||xe(n,t))}function yh(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:f,data:h,setupState:d,ctx:g,inheritAttrs:_}=n,m=nl(n);let p,M;try{if(e.shapeFlag&4){const v=s||i,R=v;p=gi(u.call(R,v,c,f,d,h,g)),M=a}else{const v=t;p=gi(v.length>1?v(f,{attrs:a,slots:o,emit:l}):v(f,null)),M=t.props?a:k0(a)}}catch(v){Io.length=0,El(v,n,1),p=Pe(_n)}let y=p;if(M&&_!==!1){const v=Object.keys(M),{shapeFlag:R}=y;v.length&&R&7&&(r&&v.some(of)&&(M=z0(M,r)),y=ys(y,M,!1,!0))}return e.dirs&&(y=ys(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(e.dirs):e.dirs),e.transition&&Go(y,e.transition),p=y,nl(m),p}const k0=n=>{let t;for(const e in n)(e==="class"||e==="style"||yl(e))&&((t||(t={}))[e]=n[e]);return t},z0=(n,t)=>{const e={};for(const i in n)(!of(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function H0(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,u=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Mh(i,o,u):!!o;if(l&8){const c=t.dynamicProps;for(let f=0;f<c.length;f++){const h=c[f];if(um(o,i,h)&&!Cl(u,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Mh(i,o,u):!0:!!o;return!1}function Mh(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(um(t,n,r)&&!Cl(e,r))return!0}return!1}function um(n,t,e){const i=n[e],s=t[e];return e==="style"&&ye(i)&&ye(s)?!uf(i,s):i!==s}function V0({vnode:n,parent:t},e){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=t.vnode).el=e,t=t.parent;else break}}const fm={},hm=()=>Object.create(fm),dm=n=>Object.getPrototypeOf(n)===fm;function G0(n,t,e,i=!1){const s={},r=hm();n.propsDefaults=Object.create(null),pm(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:jg(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function W0(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=me(s),[l]=n.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const c=n.vnode.dynamicProps;for(let f=0;f<c.length;f++){let h=c[f];if(Cl(n.emitsOptions,h))continue;const d=t[h];if(l)if(xe(r,h))d!==r[h]&&(r[h]=d,u=!0);else{const g=xs(h);s[g]=Zc(l,a,g,d,n,!1)}else d!==r[h]&&(r[h]=d,u=!0)}}}else{pm(n,t,s,r)&&(u=!0);let c;for(const f in a)(!t||!xe(t,f)&&((c=or(f))===f||!xe(t,c)))&&(l?e&&(e[f]!==void 0||e[c]!==void 0)&&(s[f]=Zc(l,a,f,void 0,n,!0)):delete s[f]);if(r!==a)for(const f in r)(!t||!xe(t,f))&&(delete r[f],u=!0)}u&&zi(n.attrs,"set","")}function pm(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(To(l))continue;const u=t[l];let c;s&&xe(s,c=xs(l))?!r||!r.includes(c)?e[c]=u:(a||(a={}))[c]=u:Cl(n.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,o=!0)}if(r){const l=me(e),u=a||we;for(let c=0;c<r.length;c++){const f=r[c];e[f]=Zc(s,l,f,u[f],n,!xe(u,f))}}return o}function Zc(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=xe(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ie(l)){const{propsDefaults:u}=s;if(e in u)i=u[e];else{const c=sa(s);i=u[e]=l.call(null,t),c()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===or(e))&&(i=!0))}return i}const X0=new WeakMap;function mm(n,t,e=!1){const i=e?X0:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!ie(n)){const c=f=>{l=!0;const[h,d]=mm(f,t,!0);Ye(o,h),d&&a.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}if(!r&&!l)return ye(n)&&i.set(n,Ir),Ir;if(jt(r))for(let c=0;c<r.length;c++){const f=xs(r[c]);Sh(f)&&(o[f]=we)}else if(r)for(const c in r){const f=xs(c);if(Sh(f)){const h=r[c],d=o[f]=jt(h)||ie(h)?{type:h}:Ye({},h),g=d.type;let _=!1,m=!0;if(jt(g))for(let p=0;p<g.length;++p){const M=g[p],y=ie(M)&&M.name;if(y==="Boolean"){_=!0;break}else y==="String"&&(m=!1)}else _=ie(g)&&g.name==="Boolean";d[0]=_,d[1]=m,(_||xe(d,"default"))&&a.push(f)}}const u=[o,a];return ye(n)&&i.set(n,u),u}function Sh(n){return n[0]!=="$"&&!To(n)}const yf=n=>n==="_"||n==="_ctx"||n==="$stable",Mf=n=>jt(n)?n.map(gi):[gi(n)],q0=(n,t,e)=>{if(t._n)return t;const i=pi((...s)=>Mf(t(...s)),e);return i._c=!1,i},_m=(n,t,e)=>{const i=n._ctx;for(const s in n){if(yf(s))continue;const r=n[s];if(ie(r))t[s]=q0(s,r,i);else if(r!=null){const o=Mf(r);t[s]=()=>o}}},gm=(n,t)=>{const e=Mf(t);n.slots.default=()=>e},vm=(n,t,e)=>{for(const i in t)(e||!yf(i))&&(n[i]=t[i])},Y0=(n,t,e)=>{const i=n.slots=hm();if(n.vnode.shapeFlag&32){const s=t._;s?(vm(i,t,e),e&&wp(i,"_",s,!0)):_m(t,i)}else t&&gm(n,t)},$0=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=we;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:vm(s,t,e):(r=!t.$stable,_m(t,s)),o=t}else t&&(gm(n,t),o={default:1});if(r)for(const a in s)!yf(a)&&o[a]==null&&delete s[a]},bn=Q0;function K0(n){return j0(n)}function j0(n,t){const e=Sl();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:h,setScopeId:d=Si,insertStaticContent:g}=n,_=(A,U,E,nt=null,q=null,j=null,st=void 0,lt=null,Q=!!U.dynamicChildren)=>{if(A===U)return;A&&!Gs(A,U)&&(nt=Et(A),Ut(A,q,j,!0),A=null),U.patchFlag===-2&&(Q=!1,U.dynamicChildren=null);const{type:T,ref:b,shapeFlag:F}=U;switch(T){case Rl:m(A,U,E,nt);break;case _n:p(A,U,E,nt);break;case Va:A==null&&M(U,E,nt,st);break;case Le:N(A,U,E,nt,q,j,st,lt,Q);break;default:F&1?R(A,U,E,nt,q,j,st,lt,Q):F&6?k(A,U,E,nt,q,j,st,lt,Q):(F&64||F&128)&&T.process(A,U,E,nt,q,j,st,lt,Q,$t)}b!=null&&q?Ro(b,A&&A.ref,j,U||A,!U):b==null&&A&&A.ref!=null&&Ro(A.ref,null,j,A,!0)},m=(A,U,E,nt)=>{if(A==null)i(U.el=a(U.children),E,nt);else{const q=U.el=A.el;U.children!==A.children&&u(q,U.children)}},p=(A,U,E,nt)=>{A==null?i(U.el=l(U.children||""),E,nt):U.el=A.el},M=(A,U,E,nt)=>{[A.el,A.anchor]=g(A.children,U,E,nt,A.el,A.anchor)},y=({el:A,anchor:U},E,nt)=>{let q;for(;A&&A!==U;)q=h(A),i(A,E,nt),A=q;i(U,E,nt)},v=({el:A,anchor:U})=>{let E;for(;A&&A!==U;)E=h(A),s(A),A=E;s(U)},R=(A,U,E,nt,q,j,st,lt,Q)=>{if(U.type==="svg"?st="svg":U.type==="math"&&(st="mathml"),A==null)w(U,E,nt,q,j,st,lt,Q);else{const T=A.el&&A.el._isVueCE?A.el:null;try{T&&T._beginPatch(),x(A,U,q,j,st,lt,Q)}finally{T&&T._endPatch()}}},w=(A,U,E,nt,q,j,st,lt)=>{let Q,T;const{props:b,shapeFlag:F,transition:X,dirs:Z}=A;if(Q=A.el=o(A.type,j,b&&b.is,b),F&8?c(Q,A.children):F&16&&P(A.children,Q,null,nt,q,ql(A,j),st,lt),Z&&As(A,null,nt,"created"),C(Q,A,A.scopeId,st,nt),b){for(const xt in b)xt!=="value"&&!To(xt)&&r(Q,xt,null,b[xt],j,nt);"value"in b&&r(Q,"value",null,b.value,j),(T=b.onVnodeBeforeMount)&&hi(T,nt,A)}Z&&As(A,null,nt,"beforeMount");const $=Z0(q,X);$&&X.beforeEnter(Q),i(Q,U,E),((T=b&&b.onVnodeMounted)||$||Z)&&bn(()=>{T&&hi(T,nt,A),$&&X.enter(Q),Z&&As(A,null,nt,"mounted")},q)},C=(A,U,E,nt,q)=>{if(E&&d(A,E),nt)for(let j=0;j<nt.length;j++)d(A,nt[j]);if(q){let j=q.subTree;if(U===j||Sm(j.type)&&(j.ssContent===U||j.ssFallback===U)){const st=q.vnode;C(A,st,st.scopeId,st.slotScopeIds,q.parent)}}},P=(A,U,E,nt,q,j,st,lt,Q=0)=>{for(let T=Q;T<A.length;T++){const b=A[T]=lt?Bi(A[T]):gi(A[T]);_(null,b,U,E,nt,q,j,st,lt)}},x=(A,U,E,nt,q,j,st)=>{const lt=U.el=A.el;let{patchFlag:Q,dynamicChildren:T,dirs:b}=U;Q|=A.patchFlag&16;const F=A.props||we,X=U.props||we;let Z;if(E&&Cs(E,!1),(Z=X.onVnodeBeforeUpdate)&&hi(Z,E,U,A),b&&As(U,A,E,"beforeUpdate"),E&&Cs(E,!0),(F.innerHTML&&X.innerHTML==null||F.textContent&&X.textContent==null)&&c(lt,""),T?S(A.dynamicChildren,T,lt,E,nt,ql(U,q),j):st||B(A,U,lt,null,E,nt,ql(U,q),j,!1),Q>0){if(Q&16)L(lt,F,X,E,q);else if(Q&2&&F.class!==X.class&&r(lt,"class",null,X.class,q),Q&4&&r(lt,"style",F.style,X.style,q),Q&8){const $=U.dynamicProps;for(let xt=0;xt<$.length;xt++){const ut=$[xt],_t=F[ut],Gt=X[ut];(Gt!==_t||ut==="value")&&r(lt,ut,_t,Gt,q,E)}}Q&1&&A.children!==U.children&&c(lt,U.children)}else!st&&T==null&&L(lt,F,X,E,q);((Z=X.onVnodeUpdated)||b)&&bn(()=>{Z&&hi(Z,E,U,A),b&&As(U,A,E,"updated")},nt)},S=(A,U,E,nt,q,j,st)=>{for(let lt=0;lt<U.length;lt++){const Q=A[lt],T=U[lt],b=Q.el&&(Q.type===Le||!Gs(Q,T)||Q.shapeFlag&198)?f(Q.el):E;_(Q,T,b,null,nt,q,j,st,!0)}},L=(A,U,E,nt,q)=>{if(U!==E){if(U!==we)for(const j in U)!To(j)&&!(j in E)&&r(A,j,U[j],null,q,nt);for(const j in E){if(To(j))continue;const st=E[j],lt=U[j];st!==lt&&j!=="value"&&r(A,j,lt,st,q,nt)}"value"in E&&r(A,"value",U.value,E.value,q)}},N=(A,U,E,nt,q,j,st,lt,Q)=>{const T=U.el=A?A.el:a(""),b=U.anchor=A?A.anchor:a("");let{patchFlag:F,dynamicChildren:X,slotScopeIds:Z}=U;Z&&(lt=lt?lt.concat(Z):Z),A==null?(i(T,E,nt),i(b,E,nt),P(U.children||[],E,b,q,j,st,lt,Q)):F>0&&F&64&&X&&A.dynamicChildren&&A.dynamicChildren.length===X.length?(S(A.dynamicChildren,X,E,q,j,st,lt),(U.key!=null||q&&U===q.subTree)&&xm(A,U,!0)):B(A,U,E,b,q,j,st,lt,Q)},k=(A,U,E,nt,q,j,st,lt,Q)=>{U.slotScopeIds=lt,A==null?U.shapeFlag&512?q.ctx.activate(U,E,nt,st,Q):Y(U,E,nt,q,j,st,Q):J(A,U,Q)},Y=(A,U,E,nt,q,j,st)=>{const lt=A.component=lv(A,nt,q);if(Tl(A)&&(lt.ctx.renderer=$t),cv(lt,!1,st),lt.asyncDep){if(q&&q.registerDep(lt,W,st),!A.el){const Q=lt.subTree=Pe(_n);p(null,Q,U,E),A.placeholder=Q.el}}else W(lt,A,U,E,q,j,st)},J=(A,U,E)=>{const nt=U.component=A.component;if(H0(A,U,E))if(nt.asyncDep&&!nt.asyncResolved){K(nt,U,E);return}else nt.next=U,nt.update();else U.el=A.el,nt.vnode=U},W=(A,U,E,nt,q,j,st)=>{const lt=()=>{if(A.isMounted){let{next:F,bu:X,u:Z,parent:$,vnode:xt}=A;{const At=ym(A);if(At){F&&(F.el=xt.el,K(A,F,st)),At.asyncDep.then(()=>{bn(()=>{A.isUnmounted||T()},q)});return}}let ut=F,_t;Cs(A,!1),F?(F.el=xt.el,K(A,F,st)):F=xt,X&&za(X),(_t=F.props&&F.props.onVnodeBeforeUpdate)&&hi(_t,$,F,xt),Cs(A,!0);const Gt=yh(A),dt=A.subTree;A.subTree=Gt,_(dt,Gt,f(dt.el),Et(dt),A,q,j),F.el=Gt.el,ut===null&&V0(A,Gt.el),Z&&bn(Z,q),(_t=F.props&&F.props.onVnodeUpdated)&&bn(()=>hi(_t,$,F,xt),q)}else{let F;const{el:X,props:Z}=U,{bm:$,m:xt,parent:ut,root:_t,type:Gt}=A,dt=Po(U);Cs(A,!1),$&&za($),!dt&&(F=Z&&Z.onVnodeBeforeMount)&&hi(F,ut,U),Cs(A,!0);{_t.ce&&_t.ce._hasShadowRoot()&&_t.ce._injectChildStyle(Gt);const At=A.subTree=yh(A);_(null,At,E,nt,A,q,j),U.el=At.el}if(xt&&bn(xt,q),!dt&&(F=Z&&Z.onVnodeMounted)){const At=U;bn(()=>hi(F,ut,At),q)}(U.shapeFlag&256||ut&&Po(ut.vnode)&&ut.vnode.shapeFlag&256)&&A.a&&bn(A.a,q),A.isMounted=!0,U=E=nt=null}};A.scope.on();const Q=A.effect=new Pp(lt);A.scope.off();const T=A.update=Q.run.bind(Q),b=A.job=Q.runIfDirty.bind(Q);b.i=A,b.id=A.uid,Q.scheduler=()=>vf(b),Cs(A,!0),T()},K=(A,U,E)=>{U.component=A;const nt=A.vnode.props;A.vnode=U,A.next=null,W0(A,U.props,nt,E),$0(A,U.children,E),Xi(),hh(A),qi()},B=(A,U,E,nt,q,j,st,lt,Q=!1)=>{const T=A&&A.children,b=A?A.shapeFlag:0,F=U.children,{patchFlag:X,shapeFlag:Z}=U;if(X>0){if(X&128){mt(T,F,E,nt,q,j,st,lt,Q);return}else if(X&256){gt(T,F,E,nt,q,j,st,lt,Q);return}}Z&8?(b&16&&Nt(T,q,j),F!==T&&c(E,F)):b&16?Z&16?mt(T,F,E,nt,q,j,st,lt,Q):Nt(T,q,j,!0):(b&8&&c(E,""),Z&16&&P(F,E,nt,q,j,st,lt,Q))},gt=(A,U,E,nt,q,j,st,lt,Q)=>{A=A||Ir,U=U||Ir;const T=A.length,b=U.length,F=Math.min(T,b);let X;for(X=0;X<F;X++){const Z=U[X]=Q?Bi(U[X]):gi(U[X]);_(A[X],Z,E,null,q,j,st,lt,Q)}T>b?Nt(A,q,j,!0,!1,F):P(U,E,nt,q,j,st,lt,Q,F)},mt=(A,U,E,nt,q,j,st,lt,Q)=>{let T=0;const b=U.length;let F=A.length-1,X=b-1;for(;T<=F&&T<=X;){const Z=A[T],$=U[T]=Q?Bi(U[T]):gi(U[T]);if(Gs(Z,$))_(Z,$,E,null,q,j,st,lt,Q);else break;T++}for(;T<=F&&T<=X;){const Z=A[F],$=U[X]=Q?Bi(U[X]):gi(U[X]);if(Gs(Z,$))_(Z,$,E,null,q,j,st,lt,Q);else break;F--,X--}if(T>F){if(T<=X){const Z=X+1,$=Z<b?U[Z].el:nt;for(;T<=X;)_(null,U[T]=Q?Bi(U[T]):gi(U[T]),E,$,q,j,st,lt,Q),T++}}else if(T>X)for(;T<=F;)Ut(A[T],q,j,!0),T++;else{const Z=T,$=T,xt=new Map;for(T=$;T<=X;T++){const wt=U[T]=Q?Bi(U[T]):gi(U[T]);wt.key!=null&&xt.set(wt.key,T)}let ut,_t=0;const Gt=X-$+1;let dt=!1,At=0;const Bt=new Array(Gt);for(T=0;T<Gt;T++)Bt[T]=0;for(T=Z;T<=F;T++){const wt=A[T];if(_t>=Gt){Ut(wt,q,j,!0);continue}let Zt;if(wt.key!=null)Zt=xt.get(wt.key);else for(ut=$;ut<=X;ut++)if(Bt[ut-$]===0&&Gs(wt,U[ut])){Zt=ut;break}Zt===void 0?Ut(wt,q,j,!0):(Bt[Zt-$]=T+1,Zt>=At?At=Zt:dt=!0,_(wt,U[Zt],E,null,q,j,st,lt,Q),_t++)}const qt=dt?J0(Bt):Ir;for(ut=qt.length-1,T=Gt-1;T>=0;T--){const wt=$+T,Zt=U[wt],Vt=U[wt+1],ue=wt+1<b?Vt.el||Mm(Vt):nt;Bt[T]===0?_(null,Zt,E,ue,q,j,st,lt,Q):dt&&(ut<0||T!==qt[ut]?Tt(Zt,E,ue,2):ut--)}}},Tt=(A,U,E,nt,q=null)=>{const{el:j,type:st,transition:lt,children:Q,shapeFlag:T}=A;if(T&6){Tt(A.component.subTree,U,E,nt);return}if(T&128){A.suspense.move(U,E,nt);return}if(T&64){st.move(A,U,E,$t);return}if(st===Le){i(j,U,E);for(let F=0;F<Q.length;F++)Tt(Q[F],U,E,nt);i(A.anchor,U,E);return}if(st===Va){y(A,U,E);return}if(nt!==2&&T&1&&lt)if(nt===0)lt.beforeEnter(j),i(j,U,E),bn(()=>lt.enter(j),q);else{const{leave:F,delayLeave:X,afterLeave:Z}=lt,$=()=>{A.ctx.isUnmounted?s(j):i(j,U,E)},xt=()=>{j._isLeaving&&j[mi](!0),F(j,()=>{$(),Z&&Z()})};X?X(j,$,xt):xt()}else i(j,U,E)},Ut=(A,U,E,nt=!1,q=!1)=>{const{type:j,props:st,ref:lt,children:Q,dynamicChildren:T,shapeFlag:b,patchFlag:F,dirs:X,cacheIndex:Z}=A;if(F===-2&&(q=!1),lt!=null&&(Xi(),Ro(lt,null,E,A,!0),qi()),Z!=null&&(U.renderCache[Z]=void 0),b&256){U.ctx.deactivate(A);return}const $=b&1&&X,xt=!Po(A);let ut;if(xt&&(ut=st&&st.onVnodeBeforeUnmount)&&hi(ut,U,A),b&6)ht(A.component,E,nt);else{if(b&128){A.suspense.unmount(E,nt);return}$&&As(A,null,U,"beforeUnmount"),b&64?A.type.remove(A,U,E,$t,nt):T&&!T.hasOnce&&(j!==Le||F>0&&F&64)?Nt(T,U,E,!1,!0):(j===Le&&F&384||!q&&b&16)&&Nt(Q,U,E),nt&&se(A)}(xt&&(ut=st&&st.onVnodeUnmounted)||$)&&bn(()=>{ut&&hi(ut,U,A),$&&As(A,null,U,"unmounted")},E)},se=A=>{const{type:U,el:E,anchor:nt,transition:q}=A;if(U===Le){ot(E,nt);return}if(U===Va){v(A);return}const j=()=>{s(E),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(A.shapeFlag&1&&q&&!q.persisted){const{leave:st,delayLeave:lt}=q,Q=()=>st(E,j);lt?lt(A.el,j,Q):Q()}else j()},ot=(A,U)=>{let E;for(;A!==U;)E=h(A),s(A),A=E;s(U)},ht=(A,U,E)=>{const{bum:nt,scope:q,job:j,subTree:st,um:lt,m:Q,a:T}=A;bh(Q),bh(T),nt&&za(nt),q.stop(),j&&(j.flags|=8,Ut(st,A,U,E)),lt&&bn(lt,U),bn(()=>{A.isUnmounted=!0},U)},Nt=(A,U,E,nt=!1,q=!1,j=0)=>{for(let st=j;st<A.length;st++)Ut(A[st],U,E,nt,q)},Et=A=>{if(A.shapeFlag&6)return Et(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const U=h(A.anchor||A.el),E=U&&U[h0];return E?h(E):U};let kt=!1;const Xt=(A,U,E)=>{let nt;A==null?U._vnode&&(Ut(U._vnode,null,null,!0),nt=U._vnode.component):_(U._vnode||null,A,U,null,null,null,E),U._vnode=A,kt||(kt=!0,hh(nt),Yp(),kt=!1)},$t={p:_,um:Ut,m:Tt,r:se,mt:Y,mc:P,pc:B,pbc:S,n:Et,o:n};return{render:Xt,hydrate:void 0,createApp:N0(Xt)}}function ql({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Cs({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Z0(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function xm(n,t,e=!1){const i=n.children,s=t.children;if(jt(i)&&jt(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Bi(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&xm(o,a)),a.type===Rl&&(a.patchFlag===-1&&(a=s[r]=Bi(a)),a.el=o.el),a.type===_n&&!a.el&&(a.el=o.el)}}function J0(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const u=n[i];if(u!==0){if(s=e[e.length-1],n[s]<u){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<u?r=a+1:o=a;u<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function ym(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ym(t)}function bh(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function Mm(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?Mm(t.subTree):null}const Sm=n=>n.__isSuspense;function Q0(n,t){t&&t.pendingBranch?jt(n)?t.effects.push(...n):t.effects.push(n):a0(n)}const Le=Symbol.for("v-fgt"),Rl=Symbol.for("v-txt"),_n=Symbol.for("v-cmt"),Va=Symbol.for("v-stc"),Io=[];let Fn=null;function Kt(n=!1){Io.push(Fn=n?null:[])}function tv(){Io.pop(),Fn=Io[Io.length-1]||null}let Wo=1;function rl(n,t=!1){Wo+=n,n<0&&Fn&&t&&(Fn.hasOnce=!0)}function bm(n){return n.dynamicChildren=Wo>0?Fn||Ir:null,tv(),Wo>0&&Fn&&Fn.push(n),n}function Qt(n,t,e,i,s,r){return bm(I(n,t,e,i,s,r,!0))}function ev(n,t,e,i,s){return bm(Pe(n,t,e,i,s,!0))}function ol(n){return n?n.__v_isVNode===!0:!1}function Gs(n,t){return n.type===t.type&&n.key===t.key}const Em=({key:n})=>n??null,Ga=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?Ve(n)||un(n)||ie(n)?{i:Kn,r:n,k:t,f:!!e}:n:null);function I(n,t=null,e=null,i=0,s=null,r=n===Le?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Em(t),ref:t&&Ga(t),scopeId:Kp,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Kn};return a?(Sf(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=Ve(e)?8:16),Wo>0&&!o&&Fn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Fn.push(l),l}const Pe=nv;function nv(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===A0)&&(n=_n),ol(n)){const a=ys(n,t,!0);return e&&Sf(a,e),Wo>0&&!r&&Fn&&(a.shapeFlag&6?Fn[Fn.indexOf(n)]=a:Fn.push(a)),a.patchFlag=-2,a}if(dv(n)&&(n=n.__vccOpts),t){t=iv(t);let{class:a,style:l}=t;a&&!Ve(a)&&(t.class=Ce(a)),ye(l)&&(gf(l)&&!jt(l)&&(l=Ye({},l)),t.style=oi(l))}const o=Ve(n)?1:Sm(n)?128:Jp(n)?64:ye(n)?4:ie(n)?2:0;return I(n,t,e,i,s,o,r,!0)}function iv(n){return n?gf(n)||dm(n)?Ye({},n):n:null}function ys(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,u=t?rv(s||{},t):s,c={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&Em(u),ref:t&&t.ref?e&&r?jt(r)?r.concat(Ga(t)):[r,Ga(t)]:Ga(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Le?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ys(n.ssContent),ssFallback:n.ssFallback&&ys(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Go(c,l.clone(c)),c}function wr(n=" ",t=0){return Pe(Rl,null,n,t)}function sv(n,t){const e=Pe(Va,null,n);return e.staticCount=t,e}function an(n="",t=!1){return t?(Kt(),ev(_n,null,n)):Pe(_n,null,n)}function gi(n){return n==null||typeof n=="boolean"?Pe(_n):jt(n)?Pe(Le,null,n.slice()):ol(n)?Bi(n):Pe(Rl,null,String(n))}function Bi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ys(n)}function Sf(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(jt(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),Sf(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!dm(t)?t._ctx=Kn:s===3&&Kn&&(Kn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else ie(t)?(t={default:t,_ctx:Kn},e=32):(t=String(t),i&64?(e=16,t=[wr(t)]):e=8);n.children=t,n.shapeFlag|=e}function rv(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=Ce([t.class,i.class]));else if(s==="style")t.style=oi([t.style,i.style]);else if(yl(s)){const r=t[s],o=i[s];o&&r!==o&&!(jt(r)&&r.includes(o))&&(t[s]=r?[].concat(r,o):o)}else s!==""&&(t[s]=i[s])}return t}function hi(n,t,e,i=null){fi(n,t,7,[e,i])}const ov=lm();let av=0;function lv(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||ov,r={uid:av++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Pg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mm(i,s),emitsOptions:cm(i,s),emit:null,emitted:null,propsDefaults:we,inheritAttrs:i.inheritAttrs,ctx:we,data:we,props:we,attrs:we,slots:we,refs:we,setupState:we,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=F0.bind(null,r),n.ce&&n.ce(r),r}let gn=null;const Tm=()=>gn||Kn;let al,Jc;{const n=Sl(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};al=t("__VUE_INSTANCE_SETTERS__",e=>gn=e),Jc=t("__VUE_SSR_SETTERS__",e=>Xo=e)}const sa=n=>{const t=gn;return al(n),n.scope.on(),()=>{n.scope.off(),al(t)}},Eh=()=>{gn&&gn.scope.off(),al(null)};function wm(n){return n.vnode.shapeFlag&4}let Xo=!1;function cv(n,t=!1,e=!1){t&&Jc(t);const{props:i,children:s}=n.vnode,r=wm(n);G0(n,i,r,t),Y0(n,s,e||t);const o=r?uv(n,t):void 0;return t&&Jc(!1),o}function uv(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,C0);const{setup:i}=e;if(i){Xi();const s=n.setupContext=i.length>1?hv(n):null,r=sa(n),o=na(i,n,0,[n.props,s]),a=Sp(o);if(qi(),r(),(a||n.sp)&&!Po(n)&&sm(n),a){if(o.then(Eh,Eh),t)return o.then(l=>{Th(n,l)}).catch(l=>{El(l,n,0)});n.asyncDep=o}else Th(n,o)}else Am(n)}function Th(n,t,e){ie(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:ye(t)&&(n.setupState=Wp(t)),Am(n)}function Am(n,t,e){const i=n.type;n.render||(n.render=i.render||Si);{const s=sa(n);Xi();try{R0(n)}finally{qi(),s()}}}const fv={get(n,t){return ln(n,"get",""),n[t]}};function hv(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,fv),slots:n.slots,emit:n.emit,expose:t}}function Pl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Wp(Zg(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Do)return Do[e](n)},has(t,e){return e in t||e in Do}})):n.proxy}function dv(n){return ie(n)&&"__vccOpts"in n}const Ze=(n,t)=>n0(n,t,Xo);function pv(n,t,e){try{rl(-1);const i=arguments.length;return i===2?ye(t)&&!jt(t)?ol(t)?Pe(n,null,[t]):Pe(n,t):Pe(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&ol(e)&&(e=[e]),Pe(n,t,e))}finally{rl(1)}}const mv="3.5.29";/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Qc;const wh=typeof window<"u"&&window.trustedTypes;if(wh)try{Qc=wh.createPolicy("vue",{createHTML:n=>n})}catch{}const Cm=Qc?n=>Qc.createHTML(n):n=>n,_v="http://www.w3.org/2000/svg",gv="http://www.w3.org/1998/Math/MathML",Ni=typeof document<"u"?document:null,Ah=Ni&&Ni.createElement("template"),vv={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?Ni.createElementNS(_v,n):t==="mathml"?Ni.createElementNS(gv,n):e?Ni.createElement(n,{is:e}):Ni.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Ni.createTextNode(n),createComment:n=>Ni.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ni.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{Ah.innerHTML=Cm(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Ah.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},es="transition",uo="animation",qo=Symbol("_vtc"),Rm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},xv=Ye({},Qp,Rm),yv=n=>(n.displayName="Transition",n.props=xv,n),Oi=yv((n,{slots:t})=>pv(m0,Mv(n),t)),Rs=(n,t=[])=>{jt(n)?n.forEach(e=>e(...t)):n&&n(...t)},Ch=n=>n?jt(n)?n.some(t=>t.length>1):n.length>1:!1;function Mv(n){const t={};for(const N in n)N in Rm||(t[N]=n[N]);if(n.css===!1)return t;const{name:e="v",type:i,duration:s,enterFromClass:r=`${e}-enter-from`,enterActiveClass:o=`${e}-enter-active`,enterToClass:a=`${e}-enter-to`,appearFromClass:l=r,appearActiveClass:u=o,appearToClass:c=a,leaveFromClass:f=`${e}-leave-from`,leaveActiveClass:h=`${e}-leave-active`,leaveToClass:d=`${e}-leave-to`}=n,g=Sv(s),_=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:M,onEnterCancelled:y,onLeave:v,onLeaveCancelled:R,onBeforeAppear:w=p,onAppear:C=M,onAppearCancelled:P=y}=t,x=(N,k,Y,J)=>{N._enterCancelled=J,Ps(N,k?c:a),Ps(N,k?u:o),Y&&Y()},S=(N,k)=>{N._isLeaving=!1,Ps(N,f),Ps(N,d),Ps(N,h),k&&k()},L=N=>(k,Y)=>{const J=N?C:M,W=()=>x(k,N,Y);Rs(J,[k,W]),Rh(()=>{Ps(k,N?l:r),Ci(k,N?c:a),Ch(J)||Ph(k,i,_,W)})};return Ye(t,{onBeforeEnter(N){Rs(p,[N]),Ci(N,r),Ci(N,o)},onBeforeAppear(N){Rs(w,[N]),Ci(N,l),Ci(N,u)},onEnter:L(!1),onAppear:L(!0),onLeave(N,k){N._isLeaving=!0;const Y=()=>S(N,k);Ci(N,f),N._enterCancelled?(Ci(N,h),Lh(N)):(Lh(N),Ci(N,h)),Rh(()=>{N._isLeaving&&(Ps(N,f),Ci(N,d),Ch(v)||Ph(N,i,m,Y))}),Rs(v,[N,Y])},onEnterCancelled(N){x(N,!1,void 0,!0),Rs(y,[N])},onAppearCancelled(N){x(N,!0,void 0,!0),Rs(P,[N])},onLeaveCancelled(N){S(N),Rs(R,[N])}})}function Sv(n){if(n==null)return null;if(ye(n))return[Yl(n.enter),Yl(n.leave)];{const t=Yl(n);return[t,t]}}function Yl(n){return Sg(n)}function Ci(n,t){t.split(/\s+/).forEach(e=>e&&n.classList.add(e)),(n[qo]||(n[qo]=new Set)).add(t)}function Ps(n,t){t.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const e=n[qo];e&&(e.delete(t),e.size||(n[qo]=void 0))}function Rh(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let bv=0;function Ph(n,t,e,i){const s=n._endId=++bv,r=()=>{s===n._endId&&i()};if(e!=null)return setTimeout(r,e);const{type:o,timeout:a,propCount:l}=Ev(n,t);if(!o)return i();const u=o+"end";let c=0;const f=()=>{n.removeEventListener(u,h),r()},h=d=>{d.target===n&&++c>=l&&f()};setTimeout(()=>{c<l&&f()},a+1),n.addEventListener(u,h)}function Ev(n,t){const e=window.getComputedStyle(n),i=g=>(e[g]||"").split(", "),s=i(`${es}Delay`),r=i(`${es}Duration`),o=Dh(s,r),a=i(`${uo}Delay`),l=i(`${uo}Duration`),u=Dh(a,l);let c=null,f=0,h=0;t===es?o>0&&(c=es,f=o,h=r.length):t===uo?u>0&&(c=uo,f=u,h=l.length):(f=Math.max(o,u),c=f>0?o>u?es:uo:null,h=c?c===es?r.length:l.length:0);const d=c===es&&/\b(?:transform|all)(?:,|$)/.test(i(`${es}Property`).toString());return{type:c,timeout:f,propCount:h,hasTransform:d}}function Dh(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((e,i)=>Ih(e)+Ih(n[i])))}function Ih(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Lh(n){return(n?n.ownerDocument:document).body.offsetHeight}function Tv(n,t,e){const i=n[qo];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const ll=Symbol("_vod"),Pm=Symbol("_vsh"),Lo={name:"show",beforeMount(n,{value:t},{transition:e}){n[ll]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):fo(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),fo(n,!0),i.enter(n)):i.leave(n,()=>{fo(n,!1)}):fo(n,t))},beforeUnmount(n,{value:t}){fo(n,t)}};function fo(n,t){n.style.display=t?n[ll]:"none",n[Pm]=!t}const wv=Symbol(""),Av=/(?:^|;)\s*display\s*:/;function Cv(n,t,e){const i=n.style,s=Ve(e);let r=!1;if(e&&!s){if(t)if(Ve(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&Wa(i,a,"")}else for(const o in t)e[o]==null&&Wa(i,o,"");for(const o in e)o==="display"&&(r=!0),Wa(i,o,e[o])}else if(s){if(t!==e){const o=i[wv];o&&(e+=";"+o),i.cssText=e,r=Av.test(e)}}else t&&n.removeAttribute("style");ll in n&&(n[ll]=r?i.display:"",n[Pm]&&(i.display="none"))}const Uh=/\s*!important$/;function Wa(n,t,e){if(jt(e))e.forEach(i=>Wa(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=Rv(n,t);Uh.test(e)?n.setProperty(or(i),e.replace(Uh,""),"important"):n[i]=e}}const Nh=["Webkit","Moz","ms"],$l={};function Rv(n,t){const e=$l[t];if(e)return e;let i=xs(t);if(i!=="filter"&&i in n)return $l[t]=i;i=Tp(i);for(let s=0;s<Nh.length;s++){const r=Nh[s]+i;if(r in n)return $l[t]=r}return t}const Oh="http://www.w3.org/1999/xlink";function Fh(n,t,e,i,s,r=Cg(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Oh,t.slice(6,t.length)):n.setAttributeNS(Oh,t,e):e==null||r&&!Ap(e)?n.removeAttribute(t):n.setAttribute(t,r?"":bi(e)?String(e):e)}function Bh(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Cm(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=Ap(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function Ar(n,t,e,i){n.addEventListener(t,e,i)}function Pv(n,t,e,i){n.removeEventListener(t,e,i)}const kh=Symbol("_vei");function Dv(n,t,e,i,s=null){const r=n[kh]||(n[kh]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=Iv(t);if(i){const u=r[t]=Nv(i,s);Ar(n,a,u,l)}else o&&(Pv(n,a,o,l),r[t]=void 0)}}const zh=/(?:Once|Passive|Capture)$/;function Iv(n){let t;if(zh.test(n)){t={};let i;for(;i=n.match(zh);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):or(n.slice(2)),t]}let Kl=0;const Lv=Promise.resolve(),Uv=()=>Kl||(Lv.then(()=>Kl=0),Kl=Date.now());function Nv(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;fi(Ov(i,e.value),t,5,[i])};return e.value=n,e.attached=Uv(),e}function Ov(n,t){if(jt(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const Hh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Fv=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?Tv(n,i,o):t==="style"?Cv(n,e,i):yl(t)?of(t)||Dv(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Bv(n,t,i,o))?(Bh(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Fh(n,t,i,o,r,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!Ve(i))?Bh(n,xs(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),Fh(n,t,i,o))};function Bv(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&Hh(t)&&ie(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Hh(t)&&Ve(e)?!1:t in n}const Vh=n=>{const t=n.props["onUpdate:modelValue"]||!1;return jt(t)?e=>za(t,e):t};function kv(n){n.target.composing=!0}function Gh(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const jl=Symbol("_assign");function Wh(n,t,e){return t&&(n=n.trim()),e&&(n=cf(n)),n}const zv={created(n,{modifiers:{lazy:t,trim:e,number:i}},s){n[jl]=Vh(s);const r=i||s.props&&s.props.type==="number";Ar(n,t?"change":"input",o=>{o.target.composing||n[jl](Wh(n.value,e,r))}),(e||r)&&Ar(n,"change",()=>{n.value=Wh(n.value,e,r)}),t||(Ar(n,"compositionstart",kv),Ar(n,"compositionend",Gh),Ar(n,"change",Gh))},mounted(n,{value:t}){n.value=t??""},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:s,number:r}},o){if(n[jl]=Vh(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?cf(n.value):n.value,l=t??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&t===e||s&&n.value.trim()===l)||(n.value=l))}},Hv=Ye({patchProp:Fv},vv);let Xh;function Vv(){return Xh||(Xh=K0(Hv))}const Gv=((...n)=>{const t=Vv().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=Xv(i);if(!s)return;const r=t._component;!ie(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,Wv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t});function Wv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Xv(n){return Ve(n)?document.querySelector(n):n}function Fi(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Dm(n,t){n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var zn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Wr={duration:.5,overwrite:!1,delay:0},bf,en,Ue,jn=1e8,Te=1/jn,tu=Math.PI*2,qv=tu/4,Yv=0,Im=Math.sqrt,$v=Math.cos,Kv=Math.sin,Je=function(t){return typeof t=="string"},ke=function(t){return typeof t=="function"},$i=function(t){return typeof t=="number"},Ef=function(t){return typeof t>"u"},Ei=function(t){return typeof t=="object"},An=function(t){return t!==!1},Tf=function(){return typeof window<"u"},ma=function(t){return ke(t)||Je(t)},Lm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},fn=Array.isArray,jv=/random\([^)]+\)/g,Zv=/,\s*/g,qh=/(?:-?\.?\d|\.)+/gi,Um=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Rr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Zl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Nm=/[+-]=-?[.\d]+/,Jv=/[^,'"\[\]\s]+/gi,Qv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Oe,_i,eu,wf,Hn={},cl={},Om,Fm=function(t){return(cl=Xr(t,Hn))&&Dn},Af=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Yo=function(t,e){return!e&&console.warn(t)},Bm=function(t,e){return t&&(Hn[t]=e)&&cl&&(cl[t]=e)||Hn},$o=function(){return 0},tx={suppressEvents:!0,isStart:!0,kill:!1},Xa={suppressEvents:!0,kill:!1},ex={suppressEvents:!0},Cf={},ms=[],nu={},km,Nn={},Jl={},Yh=30,qa=[],Rf="",Pf=function(t){var e=t[0],i,s;if(Ei(e)||ke(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(s=qa.length;s--&&!qa[s].targetTest(e););i=qa[s]}for(s=t.length;s--;)t[s]&&(t[s]._gsap||(t[s]._gsap=new c_(t[s],i)))||t.splice(s,1);return t},tr=function(t){return t._gsap||Pf(Zn(t))[0]._gsap},zm=function(t,e,i){return(i=t[e])&&ke(i)?t[e]():Ef(i)&&t.getAttribute&&t.getAttribute(e)||i},Cn=function(t,e){return(t=t.split(",")).forEach(e)||t},He=function(t){return Math.round(t*1e5)/1e5||0},Ne=function(t){return Math.round(t*1e7)/1e7||0},Fr=function(t,e){var i=e.charAt(0),s=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+s:i==="-"?t-s:i==="*"?t*s:t/s},nx=function(t,e){for(var i=e.length,s=0;t.indexOf(e[s])<0&&++s<i;);return s<i},ul=function(){var t=ms.length,e=ms.slice(0),i,s;for(nu={},ms.length=0,i=0;i<t;i++)s=e[i],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},Df=function(t){return!!(t._initted||t._startAt||t.add)},Hm=function(t,e,i,s){ms.length&&!en&&ul(),t.render(e,i,!!(en&&e<0&&Df(t))),ms.length&&!en&&ul()},Vm=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Jv).length<2?e:Je(t)?t.trim():t},Gm=function(t){return t},Vn=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},ix=function(t){return function(e,i){for(var s in i)s in e||s==="duration"&&t||s==="ease"||(e[s]=i[s])}},Xr=function(t,e){for(var i in e)t[i]=e[i];return t},$h=function n(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=Ei(e[i])?n(t[i]||(t[i]={}),e[i]):e[i]);return t},fl=function(t,e){var i={},s;for(s in t)s in e||(i[s]=t[s]);return i},Uo=function(t){var e=t.parent||Oe,i=t.keyframes?ix(fn(t.keyframes)):Vn;if(An(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},sx=function(t,e){for(var i=t.length,s=i===e.length;s&&i--&&t[i]===e[i];);return i<0},Wm=function(t,e,i,s,r){var o=t[s],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[s]=e,e._prev=o,e.parent=e._dp=t,e},Dl=function(t,e,i,s){i===void 0&&(i="_first"),s===void 0&&(s="_last");var r=e._prev,o=e._next;r?r._next=o:t[i]===e&&(t[i]=o),o?o._prev=r:t[s]===e&&(t[s]=r),e._next=e._prev=e.parent=null},Ms=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},er=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},rx=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},iu=function(t,e,i,s){return t._startAt&&(en?t._startAt.revert(Xa):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,s))},ox=function n(t){return!t||t._ts&&n(t.parent)},Kh=function(t){return t._repeat?qr(t._tTime,t=t.duration()+t._rDelay)*t:0},qr=function(t,e){var i=Math.floor(t=Ne(t/e));return t&&i===t?i-1:i},hl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Il=function(t){return t._end=Ne(t._start+(t._tDur/Math.abs(t._ts||t._rts||Te)||0))},Ll=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=Ne(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Il(t),i._dirty||er(i,t)),t},Xm=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=hl(t.rawTime(),e),(!e._dur||ra(0,e.totalDuration(),i)-e._tTime>Te)&&e.render(i,!0)),er(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-Te}},xi=function(t,e,i,s){return e.parent&&Ms(e),e._start=Ne(($i(i)?i:i||t!==Oe?Yn(t,i,e):t._time)+e._delay),e._end=Ne(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Wm(t,e,"_first","_last",t._sort?"_start":0),su(e)||(t._recent=e),s||Xm(t,e),t._ts<0&&Ll(t,t._tTime),t},qm=function(t,e){return(Hn.ScrollTrigger||Af("scrollTrigger",e))&&Hn.ScrollTrigger.create(e,t)},Ym=function(t,e,i,s,r){if(Lf(t,e,r),!t._initted)return 1;if(!i&&t._pt&&!en&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&km!==On.frame)return ms.push(t),t._lazy=[r,s],1},ax=function n(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||n(e))},su=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},lx=function(t,e,i,s){var r=t.ratio,o=e<0||!e&&(!t._start&&ax(t)&&!(!t._initted&&su(t))||(t._ts<0||t._dp._ts<0)&&!su(t))?0:1,a=t._rDelay,l=0,u,c,f;if(a&&t._repeat&&(l=ra(0,t._tDur,e),c=qr(l,a),t._yoyo&&c&1&&(o=1-o),c!==qr(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||en||s||t._zTime===Te||!e&&t._zTime){if(!t._initted&&Ym(t,e,s,i,l))return;for(f=t._zTime,t._zTime=e||(i?Te:0),i||(i=e&&!f),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,u=t._pt;u;)u.r(o,u.d),u=u._next;e<0&&iu(t,e,i,!0),t._onUpdate&&!i&&Bn(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&Bn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Ms(t,1),!i&&!en&&(Bn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},cx=function(t,e,i){var s;if(i>e)for(s=t._first;s&&s._start<=i;){if(s.data==="isPause"&&s._start>e)return s;s=s._next}else for(s=t._last;s&&s._start>=i;){if(s.data==="isPause"&&s._start<e)return s;s=s._prev}},Yr=function(t,e,i,s){var r=t._repeat,o=Ne(e)||0,a=t._tTime/t._tDur;return a&&!s&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:Ne(o*(r+1)+t._rDelay*r):o,a>0&&!s&&Ll(t,t._tTime=t._tDur*a),t.parent&&Il(t),i||er(t.parent,t),t},jh=function(t){return t instanceof vn?er(t):Yr(t,t._dur)},ux={_start:0,endTime:$o,totalDuration:$o},Yn=function n(t,e,i){var s=t.labels,r=t._recent||ux,o=t.duration()>=jn?r.endTime(!1):t._dur,a,l,u;return Je(e)&&(isNaN(e)||e in s)?(l=e.charAt(0),u=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(u?(a<0?r:i).totalDuration()/100:1)):a<0?(e in s||(s[e]=o),s[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),u&&i&&(l=l/100*(fn(i)?i[0]:i).totalDuration()),a>1?n(t,e.substr(0,a-1),i)+l:o+l)):e==null?o:+e},No=function(t,e,i){var s=$i(e[1]),r=(s?2:1)+(t<2?0:1),o=e[r],a,l;if(s&&(o.duration=e[1]),o.parent=i,t){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=An(l.vars.inherit)&&l.parent;o.immediateRender=An(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new Xe(e[0],o,e[r+1])},Ts=function(t,e){return t||t===0?e(t):e},ra=function(t,e,i){return i<t?t:i>e?e:i},cn=function(t,e){return!Je(t)||!(e=Qv.exec(t))?"":e[1]},fx=function(t,e,i){return Ts(i,function(s){return ra(t,e,s)})},ru=[].slice,$m=function(t,e){return t&&Ei(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Ei(t[0]))&&!t.nodeType&&t!==_i},hx=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(s){var r;return Je(s)&&!e||$m(s,1)?(r=i).push.apply(r,Zn(s)):i.push(s)})||i},Zn=function(t,e,i){return Ue&&!e&&Ue.selector?Ue.selector(t):Je(t)&&!i&&(eu||!$r())?ru.call((e||wf).querySelectorAll(t),0):fn(t)?hx(t,i):$m(t)?ru.call(t,0):t?[t]:[]},ou=function(t){return t=Zn(t)[0]||Yo("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return Zn(e,i.querySelectorAll?i:i===t?Yo("Invalid scope")||wf.createElement("div"):t)}},Km=function(t){return t.sort(function(){return .5-Math.random()})},jm=function(t){if(ke(t))return t;var e=Ei(t)?t:{each:t},i=nr(e.ease),s=e.from||0,r=parseFloat(e.base)||0,o={},a=s>0&&s<1,l=isNaN(s)||a,u=e.axis,c=s,f=s;return Je(s)?c=f={center:.5,edges:.5,end:1}[s]||0:!a&&l&&(c=s[0],f=s[1]),function(h,d,g){var _=(g||e).length,m=o[_],p,M,y,v,R,w,C,P,x;if(!m){if(x=e.grid==="auto"?0:(e.grid||[1,jn])[1],!x){for(C=-jn;C<(C=g[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(m=o[_]=[],p=l?Math.min(x,_)*c-.5:s%x,M=x===jn?0:l?_*f/x-.5:s/x|0,C=0,P=jn,w=0;w<_;w++)y=w%x-p,v=M-(w/x|0),m[w]=R=u?Math.abs(u==="y"?v:y):Im(y*y+v*v),R>C&&(C=R),R<P&&(P=R);s==="random"&&Km(m),m.max=C-P,m.min=P,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(x>_?_-1:u?u==="y"?_/x:x:Math.max(x,_/x))||0)*(s==="edges"?-1:1),m.b=_<0?r-_:r,m.u=cn(e.amount||e.each)||0,i=i&&_<0?o_(i):i}return _=(m[h]-m.min)/m.max||0,Ne(m.b+(i?i(_):_)*m.v)+m.u}},au=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var s=Ne(Math.round(parseFloat(i)/t)*t*e);return(s-s%1)/e+($i(i)?0:cn(i))}},Zm=function(t,e){var i=fn(t),s,r;return!i&&Ei(t)&&(s=i=t.radius||jn,t.values?(t=Zn(t.values),(r=!$i(t[0]))&&(s*=s)):t=au(t.increment)),Ts(e,i?ke(t)?function(o){return r=t(o),Math.abs(r-o)<=s?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),u=jn,c=0,f=t.length,h,d;f--;)r?(h=t[f].x-a,d=t[f].y-l,h=h*h+d*d):h=Math.abs(t[f]-a),h<u&&(u=h,c=f);return c=!s||u<=s?t[c]:o,r||c===o||$i(o)?c:c+cn(o)}:au(t))},Jm=function(t,e,i,s){return Ts(fn(t)?!e:i===!0?!!(i=0):!s,function(){return fn(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(s=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*s)/s})},dx=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(s){return e.reduce(function(r,o){return o(r)},s)}},px=function(t,e){return function(i){return t(parseFloat(i))+(e||cn(i))}},mx=function(t,e,i){return t_(t,e,0,1,i)},Qm=function(t,e,i){return Ts(i,function(s){return t[~~e(s)]})},_x=function n(t,e,i){var s=e-t;return fn(t)?Qm(t,n(0,t.length),e):Ts(i,function(r){return(s+(r-t)%s)%s+t})},gx=function n(t,e,i){var s=e-t,r=s*2;return fn(t)?Qm(t,n(0,t.length-1),e):Ts(i,function(o){return o=(r+(o-t)%r)%r||0,t+(o>s?r-o:o)})},Ko=function(t){return t.replace(jv,function(e){var i=e.indexOf("[")+1,s=e.substring(i||7,i?e.indexOf("]"):e.length-1).split(Zv);return Jm(i?s:+s[0],i?0:+s[1],+s[2]||1e-5)})},t_=function(t,e,i,s,r){var o=e-t,a=s-i;return Ts(r,function(l){return i+((l-t)/o*a||0)})},vx=function n(t,e,i,s){var r=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!r){var o=Je(t),a={},l,u,c,f,h;if(i===!0&&(s=1)&&(i=null),o)t={p:t},e={p:e};else if(fn(t)&&!fn(e)){for(c=[],f=t.length,h=f-2,u=1;u<f;u++)c.push(n(t[u-1],t[u]));f--,r=function(g){g*=f;var _=Math.min(h,~~g);return c[_](g-_)},i=e}else s||(t=Xr(fn(t)?[]:{},t));if(!c){for(l in e)If.call(a,t,l,"get",e[l]);r=function(g){return Of(g,a)||(o?t.p:t)}}}return Ts(i,r)},Zh=function(t,e,i){var s=t.labels,r=jn,o,a,l;for(o in s)a=s[o]-e,a<0==!!i&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},Bn=function(t,e,i){var s=t.vars,r=s[e],o=Ue,a=t._ctx,l,u,c;if(r)return l=s[e+"Params"],u=s.callbackScope||t,i&&ms.length&&ul(),a&&(Ue=a),c=l?r.apply(u,l):r.call(u),Ue=o,c},Mo=function(t){return Ms(t),t.scrollTrigger&&t.scrollTrigger.kill(!!en),t.progress()<1&&Bn(t,"onInterrupt"),t},Pr,e_=[],n_=function(t){if(t)if(t=!t.name&&t.default||t,Tf()||t.headless){var e=t.name,i=ke(t),s=e&&!i&&t.init?function(){this._props=[]}:t,r={init:$o,render:Of,add:If,kill:Ux,modifier:Lx,rawVars:0},o={targetTest:0,get:0,getSetter:Nf,aliases:{},register:0};if($r(),t!==s){if(Nn[e])return;Vn(s,Vn(fl(t,r),o)),Xr(s.prototype,Xr(r,fl(t,o))),Nn[s.prop=e]=s,t.targetTest&&(qa.push(s),Cf[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Bm(e,s),t.register&&t.register(Dn,s,Rn)}else e_.push(t)},Ee=255,So={aqua:[0,Ee,Ee],lime:[0,Ee,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ee],navy:[0,0,128],white:[Ee,Ee,Ee],olive:[128,128,0],yellow:[Ee,Ee,0],orange:[Ee,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ee,0,0],pink:[Ee,192,203],cyan:[0,Ee,Ee],transparent:[Ee,Ee,Ee,0]},Ql=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*Ee+.5|0},i_=function(t,e,i){var s=t?$i(t)?[t>>16,t>>8&Ee,t&Ee]:0:So.black,r,o,a,l,u,c,f,h,d,g;if(!s){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),So[t])s=So[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return s=parseInt(t.substr(1,6),16),[s>>16,s>>8&Ee,s&Ee,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),s=[t>>16,t>>8&Ee,t&Ee]}else if(t.substr(0,3)==="hsl"){if(s=g=t.match(qh),!e)l=+s[0]%360/360,u=+s[1]/100,c=+s[2]/100,o=c<=.5?c*(u+1):c+u-c*u,r=c*2-o,s.length>3&&(s[3]*=1),s[0]=Ql(l+1/3,r,o),s[1]=Ql(l,r,o),s[2]=Ql(l-1/3,r,o);else if(~t.indexOf("="))return s=t.match(Um),i&&s.length<4&&(s[3]=1),s}else s=t.match(qh)||So.transparent;s=s.map(Number)}return e&&!g&&(r=s[0]/Ee,o=s[1]/Ee,a=s[2]/Ee,f=Math.max(r,o,a),h=Math.min(r,o,a),c=(f+h)/2,f===h?l=u=0:(d=f-h,u=c>.5?d/(2-f-h):d/(f+h),l=f===r?(o-a)/d+(o<a?6:0):f===o?(a-r)/d+2:(r-o)/d+4,l*=60),s[0]=~~(l+.5),s[1]=~~(u*100+.5),s[2]=~~(c*100+.5)),i&&s.length<4&&(s[3]=1),s},s_=function(t){var e=[],i=[],s=-1;return t.split(_s).forEach(function(r){var o=r.match(Rr)||[];e.push.apply(e,o),i.push(s+=o.length+1)}),e.c=i,e},Jh=function(t,e,i){var s="",r=(t+s).match(_s),o=e?"hsla(":"rgba(",a=0,l,u,c,f;if(!r)return t;if(r=r.map(function(h){return(h=i_(h,e,1))&&o+(e?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(c=s_(t),l=i.c,l.join(s)!==c.c.join(s)))for(u=t.replace(_s,"1").split(Rr),f=u.length-1;a<f;a++)s+=u[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(c.length?c:r.length?r:i).shift());if(!u)for(u=t.split(_s),f=u.length-1;a<f;a++)s+=u[a]+r[a];return s+u[f]},_s=(function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in So)n+="|"+t+"\\b";return new RegExp(n+")","gi")})(),xx=/hsl[a]?\(/,r_=function(t){var e=t.join(" "),i;if(_s.lastIndex=0,_s.test(e))return i=xx.test(e),t[1]=Jh(t[1],i),t[0]=Jh(t[0],i,s_(t[1])),!0},jo,On=(function(){var n=Date.now,t=500,e=33,i=n(),s=i,r=1e3/240,o=r,a=[],l,u,c,f,h,d,g=function _(m){var p=n()-s,M=m===!0,y,v,R,w;if((p>t||p<0)&&(i+=p-e),s+=p,R=s-i,y=R-o,(y>0||M)&&(w=++f.frame,h=R-f.time*1e3,f.time=R=R/1e3,o+=y+(y>=r?4:r-y),v=1),M||(l=u(_)),v)for(d=0;d<a.length;d++)a[d](R,h,w,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){Om&&(!eu&&Tf()&&(_i=eu=window,wf=_i.document||{},Hn.gsap=Dn,(_i.gsapVersions||(_i.gsapVersions=[])).push(Dn.version),Fm(cl||_i.GreenSockGlobals||!_i.gsap&&_i||{}),e_.forEach(n_)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),u=c||function(m){return setTimeout(m,o-f.time*1e3+1|0)},jo=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),jo=0,u=$o},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){r=1e3/(m||240),o=f.time*1e3+r},add:function(m,p,M){var y=p?function(v,R,w,C){m(v,R,w,C),f.remove(y)}:m;return f.remove(m),a[M?"unshift":"push"](y),$r(),y},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},f})(),$r=function(){return!jo&&On.wake()},le={},yx=/^[\d.\-M][\d.\-,\s]/,Mx=/["']/g,Sx=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),s=i[0],r=1,o=i.length,a,l,u;r<o;r++)l=i[r],a=r!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),e[s]=isNaN(u)?u.replace(Mx,"").trim():+u,s=l.substr(a+1).trim();return e},bx=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),s=t.indexOf("(",e);return t.substring(e,~s&&s<i?t.indexOf(")",i+1):i)},Ex=function(t){var e=(t+"").split("("),i=le[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[Sx(e[1])]:bx(t).split(",").map(Vm)):le._CE&&yx.test(t)?le._CE("",t):i},o_=function(t){return function(e){return 1-t(1-e)}},a_=function n(t,e){for(var i=t._first,s;i;)i instanceof vn?n(i,e):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==e&&(i.timeline?n(i.timeline,e):(s=i._ease,i._ease=i._yEase,i._yEase=s,i._yoyo=e)),i=i._next},nr=function(t,e){return t&&(ke(t)?t:le[t]||Ex(t))||e},ar=function(t,e,i,s){i===void 0&&(i=function(l){return 1-e(1-l)}),s===void 0&&(s=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:i,easeInOut:s},o;return Cn(t,function(a){le[a]=Hn[a]=r,le[o=a.toLowerCase()]=i;for(var l in r)le[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=le[a+"."+l]=r[l]}),r},l_=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},tc=function n(t,e,i){var s=e>=1?e:1,r=(i||(t?.3:.45))/(e<1?e:1),o=r/tu*(Math.asin(1/s)||0),a=function(c){return c===1?1:s*Math.pow(2,-10*c)*Kv((c-o)*r)+1},l=t==="out"?a:t==="in"?function(u){return 1-a(1-u)}:l_(a);return r=tu/r,l.config=function(u,c){return n(t,u,c)},l},ec=function n(t,e){e===void 0&&(e=1.70158);var i=function(o){return o?--o*o*((e+1)*o+e)+1:0},s=t==="out"?i:t==="in"?function(r){return 1-i(1-r)}:l_(i);return s.config=function(r){return n(t,r)},s};Cn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,t){var e=t<5?t+1:t;ar(n+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});le.Linear.easeNone=le.none=le.Linear.easeIn;ar("Elastic",tc("in"),tc("out"),tc());(function(n,t){var e=1/t,i=2*e,s=2.5*e,r=function(a){return a<e?n*a*a:a<i?n*Math.pow(a-1.5/t,2)+.75:a<s?n*(a-=2.25/t)*a+.9375:n*Math.pow(a-2.625/t,2)+.984375};ar("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);ar("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});ar("Circ",function(n){return-(Im(1-n*n)-1)});ar("Sine",function(n){return n===1?1:-$v(n*qv)+1});ar("Back",ec("in"),ec("out"),ec());le.SteppedEase=le.steps=Hn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,s=t+(e?0:1),r=e?1:0,o=1-Te;return function(a){return((s*ra(0,o,a)|0)+r)*i}}};Wr.ease=le["quad.out"];Cn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Rf+=n+","+n+"Params,"});var c_=function(t,e){this.id=Yv++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:zm,this.set=e?e.getSetter:Nf},Zo=(function(){function n(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Yr(this,+e.duration,1,1),this.data=e.data,Ue&&(this._ctx=Ue,Ue.data.push(this)),jo||On.wake()}var t=n.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,Yr(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,s){if($r(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ll(this,i),!r._dp||r.parent||Xm(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&xi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===Te||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Hm(this,i,s)),this},t.time=function(i,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Kh(this))%(this._dur+this._rDelay)||(i?this._dur:0),s):this._time},t.totalProgress=function(i,s){return arguments.length?this.totalTime(this.totalDuration()*i,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Kh(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,s){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,s):this._repeat?qr(this._tTime,r)+1:1},t.timeScale=function(i,s){if(!arguments.length)return this._rts===-Te?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?hl(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Te?0:this._rts,this.totalTime(ra(-Math.abs(this._delay),this.totalDuration(),r),s!==!1),Il(this),rx(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):($r(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Te&&(this._tTime-=Te)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=Ne(i);var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&xi(s,this,this._start-this._delay),this}return this._start},t.endTime=function(i){return this._start+(An(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var s=this.parent||this._dp;return s?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?hl(s.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=ex);var s=en;return en=i,Df(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),en=s,this},t.globalTime=function(i){for(var s=this,r=arguments.length?i:s.rawTime();s;)r=s._start+r/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(i):r},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,jh(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var s=this._time;return this._rDelay=i,jh(this),s?this.time(s):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,s){return this.totalTime(Yn(this,i),An(s))},t.restart=function(i,s){return this.play().totalTime(i?-this._delay:0,An(s)),this._dur||(this._zTime=-Te),this},t.play=function(i,s){return i!=null&&this.seek(i,s),this.reversed(!1).paused(!1)},t.reverse=function(i,s){return i!=null&&this.seek(i||this.totalDuration(),s),this.reversed(!0).paused(!1)},t.pause=function(i,s){return i!=null&&this.seek(i,s),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Te:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Te,this},t.isActive=function(){var i=this.parent||this._dp,s=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=s&&r<this.endTime(!0)-Te)},t.eventCallback=function(i,s,r){var o=this.vars;return arguments.length>1?(s?(o[i]=s,r&&(o[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=s)):delete o[i],this):o[i]},t.then=function(i){var s=this,r=s._prom;return new Promise(function(o){var a=ke(i)?i:Gm,l=function(){var c=s.then;s.then=null,r&&r(),ke(a)&&(a=a(s))&&(a.then||a===s)&&(s.then=c),o(a),s.then=c};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?l():s._prom=l})},t.kill=function(){Mo(this)},n})();Vn(Zo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Te,_prom:0,_ps:!1,_rts:1});var vn=(function(n){Dm(t,n);function t(i,s){var r;return i===void 0&&(i={}),r=n.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=An(i.sortChildren),Oe&&xi(i.parent||Oe,Fi(r),s),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&qm(Fi(r),i.scrollTrigger),r}var e=t.prototype;return e.to=function(s,r,o){return No(0,arguments,this),this},e.from=function(s,r,o){return No(1,arguments,this),this},e.fromTo=function(s,r,o,a){return No(2,arguments,this),this},e.set=function(s,r,o){return r.duration=0,r.parent=this,Uo(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Xe(s,r,Yn(this,o),1),this},e.call=function(s,r,o){return xi(this,Xe.delayedCall(0,s,r),o)},e.staggerTo=function(s,r,o,a,l,u,c){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new Xe(s,o,Yn(this,l)),this},e.staggerFrom=function(s,r,o,a,l,u,c){return o.runBackwards=1,Uo(o).immediateRender=An(o.immediateRender),this.staggerTo(s,r,o,a,l,u,c)},e.staggerFromTo=function(s,r,o,a,l,u,c,f){return a.startAt=o,Uo(a).immediateRender=An(a.immediateRender),this.staggerTo(s,r,a,l,u,c,f)},e.render=function(s,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=s<=0?0:Ne(s),f=this._zTime<0!=s<0&&(this._initted||!u),h,d,g,_,m,p,M,y,v,R,w,C;if(this!==Oe&&c>l&&s>=0&&(c=l),c!==this._tTime||o||f){if(a!==this._time&&u&&(c+=this._time-a,s+=this._time-a),h=c,v=this._start,y=this._ts,p=!y,f&&(u||(a=this._zTime),(s||!r)&&(this._zTime=s)),this._repeat){if(w=this._yoyo,m=u+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(m*100+s,r,o);if(h=Ne(c%m),c===l?(_=this._repeat,h=u):(R=Ne(c/m),_=~~R,_&&_===R&&(h=u,_--),h>u&&(h=u)),R=qr(this._tTime,m),!a&&this._tTime&&R!==_&&this._tTime-R*m-this._dur<=0&&(R=_),w&&_&1&&(h=u-h,C=1),_!==R&&!this._lock){var P=w&&R&1,x=P===(w&&_&1);if(_<R&&(P=!P),a=P?0:c%u?u:c,this._lock=1,this.render(a||(C?0:Ne(_*m)),r,!u)._lock=0,this._tTime=c,!r&&this.parent&&Bn(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1,R=_),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,x&&(this._lock=2,a=P?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;a_(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=cx(this,Ne(a),Ne(h)),M&&(c-=h-(h=M._start))),this._tTime=c,this._time=h,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,a=0),!a&&c&&u&&!r&&!R&&(Bn(this,"onStart"),this._tTime!==c))return this;if(h>=a&&s>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(s,r,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,r,o),h!==this._time||!this._ts&&!p){M=0,g&&(c+=this._zTime=-Te);break}}d=g}else{d=this._last;for(var S=s<0?s:h;d;){if(g=d._prev,(d._act||S<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(s,r,o);if(d.render(d._ts>0?(S-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(S-d._start)*d._ts,r,o||en&&Df(d)),h!==this._time||!this._ts&&!p){M=0,g&&(c+=this._zTime=S?-Te:Te);break}}d=g}}if(M&&!r&&(this.pause(),M.render(h>=a?0:-Te)._zTime=h>=a?1:-1,this._ts))return this._start=v,Il(this),this.render(s,r,o);this._onUpdate&&!r&&Bn(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(v===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((s||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Ms(this,1),!r&&!(s<0&&!a)&&(c||a||!l)&&(Bn(this,c===l&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(s,r){var o=this;if($i(r)||(r=Yn(this,r,s)),!(s instanceof Zo)){if(fn(s))return s.forEach(function(a){return o.add(a,r)}),this;if(Je(s))return this.addLabel(s,r);if(ke(s))s=Xe.delayedCall(0,s);else return this}return this!==s?xi(this,s,r):this},e.getChildren=function(s,r,o,a){s===void 0&&(s=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-jn);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof Xe?r&&l.push(u):(o&&l.push(u),s&&l.push.apply(l,u.getChildren(!0,r,o)))),u=u._next;return l},e.getById=function(s){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===s)return r[o]},e.remove=function(s){return Je(s)?this.removeLabel(s):ke(s)?this.killTweensOf(s):(s.parent===this&&Dl(this,s),s===this._recent&&(this._recent=this._last),er(this))},e.totalTime=function(s,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ne(On.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),n.prototype.totalTime.call(this,s,r),this._forcing=0,this):this._tTime},e.addLabel=function(s,r){return this.labels[s]=Yn(this,r),this},e.removeLabel=function(s){return delete this.labels[s],this},e.addPause=function(s,r,o){var a=Xe.delayedCall(0,r||$o,o);return a.data="isPause",this._hasPause=1,xi(this,a,Yn(this,s))},e.removePause=function(s){var r=this._first;for(s=Yn(this,s);r;)r._start===s&&r.data==="isPause"&&Ms(r),r=r._next},e.killTweensOf=function(s,r,o){for(var a=this.getTweensOf(s,o),l=a.length;l--;)fs!==a[l]&&a[l].kill(s,r);return this},e.getTweensOf=function(s,r){for(var o=[],a=Zn(s),l=this._first,u=$i(r),c;l;)l instanceof Xe?nx(l._targets,a)&&(u?(!fs||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(c=l.getTweensOf(a,r)).length&&o.push.apply(o,c),l=l._next;return o},e.tweenTo=function(s,r){r=r||{};var o=this,a=Yn(o,s),l=r,u=l.startAt,c=l.onStart,f=l.onStartParams,h=l.immediateRender,d,g=Xe.to(o,Vn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||Te,onStart:function(){if(o.pause(),!d){var m=r.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());g._dur!==m&&Yr(g,m,0,1).render(g._time,!0,!0),d=1}c&&c.apply(g,f||[])}},r));return h?g.render(0):g},e.tweenFromTo=function(s,r,o){return this.tweenTo(r,Vn({startAt:{time:Yn(this,s)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(s){return s===void 0&&(s=this._time),Zh(this,Yn(this,s))},e.previousLabel=function(s){return s===void 0&&(s=this._time),Zh(this,Yn(this,s),1)},e.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+Te)},e.shiftChildren=function(s,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(s=Ne(s);a;)a._start>=o&&(a._start+=s,a._end+=s),a=a._next;if(r)for(u in l)l[u]>=o&&(l[u]+=s);return er(this)},e.invalidate=function(s){var r=this._first;for(this._lock=0;r;)r.invalidate(s),r=r._next;return n.prototype.invalidate.call(this,s)},e.clear=function(s){s===void 0&&(s=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),er(this)},e.totalDuration=function(s){var r=0,o=this,a=o._last,l=jn,u,c,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-s:s));if(o._dirty){for(f=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,xi(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(r-=c,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=Ne(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=u;Yr(o,o===Oe&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(s){if(Oe._ts&&(Hm(Oe,hl(s,Oe)),km=On.frame),On.frame>=Yh){Yh+=zn.autoSleep||120;var r=Oe._first;if((!r||!r._ts)&&zn.autoSleep&&On._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||On.sleep()}}},t})(Zo);Vn(vn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Tx=function(t,e,i,s,r,o,a){var l=new Rn(this._pt,t,e,0,1,m_,null,r),u=0,c=0,f,h,d,g,_,m,p,M;for(l.b=i,l.e=s,i+="",s+="",(p=~s.indexOf("random("))&&(s=Ko(s)),o&&(M=[i,s],o(M,t,e),i=M[0],s=M[1]),h=i.match(Zl)||[];f=Zl.exec(s);)g=f[0],_=s.substring(u,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==h[c++]&&(m=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:_||c===1?_:",",s:m,c:g.charAt(1)==="="?Fr(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},u=Zl.lastIndex);return l.c=u<s.length?s.substring(u,s.length):"",l.fp=a,(Nm.test(s)||p)&&(l.e=0),this._pt=l,l},If=function(t,e,i,s,r,o,a,l,u,c){ke(s)&&(s=s(r||0,t,o));var f=t[e],h=i!=="get"?i:ke(f)?u?t[e.indexOf("set")||!ke(t["get"+e.substr(3)])?e:"get"+e.substr(3)](u):t[e]():f,d=ke(f)?u?Px:d_:Uf,g;if(Je(s)&&(~s.indexOf("random(")&&(s=Ko(s)),s.charAt(1)==="="&&(g=Fr(h,s)+(cn(h)||0),(g||g===0)&&(s=g))),!c||h!==s||lu)return!isNaN(h*s)&&s!==""?(g=new Rn(this._pt,t,e,+h||0,s-(h||0),typeof f=="boolean"?Ix:p_,0,d),u&&(g.fp=u),a&&g.modifier(a,this,t),this._pt=g):(!f&&!(e in t)&&Af(e,s),Tx.call(this,t,e,h,s,d,l||zn.stringFilter,u))},wx=function(t,e,i,s,r){if(ke(t)&&(t=Oo(t,r,e,i,s)),!Ei(t)||t.style&&t.nodeType||fn(t)||Lm(t))return Je(t)?Oo(t,r,e,i,s):t;var o={},a;for(a in t)o[a]=Oo(t[a],r,e,i,s);return o},u_=function(t,e,i,s,r,o){var a,l,u,c;if(Nn[t]&&(a=new Nn[t]).init(r,a.rawVars?e[t]:wx(e[t],s,r,o,i),i,s,o)!==!1&&(i._pt=l=new Rn(i._pt,r,t,0,1,a.render,a,0,a.priority),i!==Pr))for(u=i._ptLookup[i._targets.indexOf(r)],c=a._props.length;c--;)u[a._props[c]]=l;return a},fs,lu,Lf=function n(t,e,i){var s=t.vars,r=s.ease,o=s.startAt,a=s.immediateRender,l=s.lazy,u=s.onUpdate,c=s.runBackwards,f=s.yoyoEase,h=s.keyframes,d=s.autoRevert,g=t._dur,_=t._startAt,m=t._targets,p=t.parent,M=p&&p.data==="nested"?p.vars.targets:m,y=t._overwrite==="auto"&&!bf,v=t.timeline,R,w,C,P,x,S,L,N,k,Y,J,W,K;if(v&&(!h||!r)&&(r="none"),t._ease=nr(r,Wr.ease),t._yEase=f?o_(nr(f===!0?r:f,Wr.ease)):0,f&&t._yoyo&&!t._repeat&&(f=t._yEase,t._yEase=t._ease,t._ease=f),t._from=!v&&!!s.runBackwards,!v||h&&!s.stagger){if(N=m[0]?tr(m[0]).harness:0,W=N&&s[N.prop],R=fl(s,Cf),_&&(_._zTime<0&&_.progress(1),e<0&&c&&a&&!d?_.render(-1,!0):_.revert(c&&g?Xa:tx),_._lazy=0),o){if(Ms(t._startAt=Xe.set(m,Vn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&An(l),startAt:null,delay:0,onUpdate:u&&function(){return Bn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(en||!a&&!d)&&t._startAt.revert(Xa),a&&g&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(c&&g&&!_){if(e&&(a=!1),C=Vn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&An(l),immediateRender:a,stagger:0,parent:p},R),W&&(C[N.prop]=W),Ms(t._startAt=Xe.set(m,C)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(en?t._startAt.revert(Xa):t._startAt.render(-1,!0)),t._zTime=e,!a)n(t._startAt,Te,Te);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&An(l)||l&&!g,w=0;w<m.length;w++){if(x=m[w],L=x._gsap||Pf(m)[w]._gsap,t._ptLookup[w]=Y={},nu[L.id]&&ms.length&&ul(),J=M===m?w:M.indexOf(x),N&&(k=new N).init(x,W||R,t,J,M)!==!1&&(t._pt=P=new Rn(t._pt,x,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(B){Y[B]=P}),k.priority&&(S=1)),!N||W)for(C in R)Nn[C]&&(k=u_(C,R,t,J,x,M))?k.priority&&(S=1):Y[C]=P=If.call(t,x,C,"get",R[C],J,M,0,s.stringFilter);t._op&&t._op[w]&&t.kill(x,t._op[w]),y&&t._pt&&(fs=t,Oe.killTweensOf(x,Y,t.globalTime(e)),K=!t.parent,fs=0),t._pt&&l&&(nu[L.id]=1)}S&&__(t),t._onInit&&t._onInit(t)}t._onUpdate=u,t._initted=(!t._op||t._pt)&&!K,h&&e<=0&&v.render(jn,!0,!0)},Ax=function(t,e,i,s,r,o,a,l){var u=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,f,h,d;if(!u)for(u=t._ptCache[e]=[],h=t._ptLookup,d=t._targets.length;d--;){if(c=h[d][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return lu=1,t.vars[e]="+=0",Lf(t,a),lu=0,l?Yo(e+" not eligible for reset"):1;u.push(c)}for(d=u.length;d--;)f=u[d],c=f._pt||f,c.s=(s||s===0)&&!r?s:c.s+(s||0)+o*c.c,c.c=i-c.s,f.e&&(f.e=He(i)+cn(f.e)),f.b&&(f.b=c.s+cn(f.b))},Cx=function(t,e){var i=t[0]?tr(t[0]).harness:0,s=i&&i.aliases,r,o,a,l;if(!s)return e;r=Xr({},e);for(o in s)if(o in r)for(l=s[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},Rx=function(t,e,i,s){var r=e.ease||s||"power1.inOut",o,a;if(fn(e))a=i[t]||(i[t]=[]),e.forEach(function(l,u){return a.push({t:u/(e.length-1)*100,v:l,e:r})});else for(o in e)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},Oo=function(t,e,i,s,r){return ke(t)?t.call(e,i,s,r):Je(t)&&~t.indexOf("random(")?Ko(t):t},f_=Rf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",h_={};Cn(f_+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return h_[n]=1});var Xe=(function(n){Dm(t,n);function t(i,s,r,o){var a;typeof s=="number"&&(r.duration=s,s=r,r=null),a=n.call(this,o?s:Uo(s))||this;var l=a.vars,u=l.duration,c=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,M=s.parent||Oe,y=(fn(i)||Lm(i)?$i(i[0]):"length"in s)?[i]:Zn(i),v,R,w,C,P,x,S,L;if(a._targets=y.length?Pf(y):Yo("GSAP target "+i+" not found. https://gsap.com",!zn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||h||ma(u)||ma(c)){if(s=a.vars,v=a.timeline=new vn({data:"nested",defaults:_||{},targets:M&&M.data==="nested"?M.vars.targets:y}),v.kill(),v.parent=v._dp=Fi(a),v._start=0,h||ma(u)||ma(c)){if(C=y.length,S=h&&jm(h),Ei(h))for(P in h)~f_.indexOf(P)&&(L||(L={}),L[P]=h[P]);for(R=0;R<C;R++)w=fl(s,h_),w.stagger=0,p&&(w.yoyoEase=p),L&&Xr(w,L),x=y[R],w.duration=+Oo(u,Fi(a),R,x,y),w.delay=(+Oo(c,Fi(a),R,x,y)||0)-a._delay,!h&&C===1&&w.delay&&(a._delay=c=w.delay,a._start+=c,w.delay=0),v.to(x,w,S?S(R,x,y):0),v._ease=le.none;v.duration()?u=c=0:a.timeline=0}else if(g){Uo(Vn(v.vars.defaults,{ease:"none"})),v._ease=nr(g.ease||s.ease||"none");var N=0,k,Y,J;if(fn(g))g.forEach(function(W){return v.to(y,W,">")}),v.duration();else{w={};for(P in g)P==="ease"||P==="easeEach"||Rx(P,g[P],w,g.easeEach);for(P in w)for(k=w[P].sort(function(W,K){return W.t-K.t}),N=0,R=0;R<k.length;R++)Y=k[R],J={ease:Y.e,duration:(Y.t-(R?k[R-1].t:0))/100*u},J[P]=Y.v,v.to(y,J,N),N+=J.duration;v.duration()<u&&v.to({},{duration:u-v.duration()})}}u||a.duration(u=v.duration())}else a.timeline=0;return d===!0&&!bf&&(fs=Fi(a),Oe.killTweensOf(y),fs=0),xi(M,Fi(a),r),s.reversed&&a.reverse(),s.paused&&a.paused(!0),(f||!u&&!g&&a._start===Ne(M._time)&&An(f)&&ox(Fi(a))&&M.data!=="nested")&&(a._tTime=-Te,a.render(Math.max(0,-c)||0)),m&&qm(Fi(a),m),a}var e=t.prototype;return e.render=function(s,r,o){var a=this._time,l=this._tDur,u=this._dur,c=s<0,f=s>l-Te&&!c?l:s<Te?0:s,h,d,g,_,m,p,M,y,v;if(!u)lx(this,s,r,o);else if(f!==this._tTime||!s||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(h=f,y=this.timeline,this._repeat){if(_=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(_*100+s,r,o);if(h=Ne(f%_),f===l?(g=this._repeat,h=u):(m=Ne(f/_),g=~~m,g&&g===m?(h=u,g--):h>u&&(h=u)),p=this._yoyo&&g&1,p&&(v=this._yEase,h=u-h),m=qr(this._tTime,_),h===a&&!o&&this._initted&&g===m)return this._tTime=f,this;g!==m&&(y&&this._yEase&&a_(y,p),this.vars.repeatRefresh&&!p&&!this._lock&&h!==_&&this._initted&&(this._lock=o=1,this.render(Ne(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Ym(this,c?s:h,o,r,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(u!==this._dur)return this.render(s,r,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(v||this._ease)(h/u),this._from&&(this.ratio=M=1-M),!a&&f&&!r&&!m&&(Bn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;y&&y.render(s<0?s:y._dur*y._ease(h/this._dur),r,o)||this._startAt&&(this._zTime=s),this._onUpdate&&!r&&(c&&iu(this,s,r,o),Bn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&Bn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(c&&!this._onUpdate&&iu(this,s,!0,!0),(s||!u)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Ms(this,1),!r&&!(c&&!a)&&(f||a||p)&&(Bn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),n.prototype.invalidate.call(this,s)},e.resetTo=function(s,r,o,a,l){jo||On.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Lf(this,u),c=this._ease(u/this._dur),Ax(this,s,r,o,a,c,u,l)?this.resetTo(s,r,o,a,1):(Ll(this,0),this.parent||Wm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(s,r){if(r===void 0&&(r="all"),!s&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Mo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!en),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(s,r,fs&&fs.vars.overwrite!==!0)._first||Mo(this),this.parent&&o!==this.timeline.totalDuration()&&Yr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=s?Zn(s):a,u=this._ptLookup,c=this._pt,f,h,d,g,_,m,p;if((!r||r==="all")&&sx(a,l))return r==="all"&&(this._pt=0),Mo(this);for(f=this._op=this._op||[],r!=="all"&&(Je(r)&&(_={},Cn(r,function(M){return _[M]=1}),r=_),r=Cx(a,r)),p=a.length;p--;)if(~l.indexOf(a[p])){h=u[p],r==="all"?(f[p]=r,g=h,d={}):(d=f[p]=f[p]||{},g=r);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Dl(this,m,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&c&&Mo(this),this},t.to=function(s,r){return new t(s,r,arguments[2])},t.from=function(s,r){return No(1,arguments)},t.delayedCall=function(s,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(s,r,o){return No(2,arguments)},t.set=function(s,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(s,r)},t.killTweensOf=function(s,r,o){return Oe.killTweensOf(s,r,o)},t})(Zo);Vn(Xe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Cn("staggerTo,staggerFrom,staggerFromTo",function(n){Xe[n]=function(){var t=new vn,e=ru.call(arguments,0);return e.splice(n==="staggerFromTo"?5:4,0,0),t[n].apply(t,e)}});var Uf=function(t,e,i){return t[e]=i},d_=function(t,e,i){return t[e](i)},Px=function(t,e,i,s){return t[e](s.fp,i)},Dx=function(t,e,i){return t.setAttribute(e,i)},Nf=function(t,e){return ke(t[e])?d_:Ef(t[e])&&t.setAttribute?Dx:Uf},p_=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Ix=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},m_=function(t,e){var i=e._pt,s="";if(!t&&e.b)s=e.b;else if(t===1&&e.e)s=e.e;else{for(;i;)s=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+s,i=i._next;s+=e.c}e.set(e.t,e.p,s,e)},Of=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},Lx=function(t,e,i,s){for(var r=this._pt,o;r;)o=r._next,r.p===s&&r.modifier(t,e,i),r=o},Ux=function(t){for(var e=this._pt,i,s;e;)s=e._next,e.p===t&&!e.op||e.op===t?Dl(this,e,"_pt"):e.dep||(i=1),e=s;return!i},Nx=function(t,e,i,s){s.mSet(t,e,s.m.call(s.tween,i,s.mt),s)},__=function(t){for(var e=t._pt,i,s,r,o;e;){for(i=e._next,s=r;s&&s.pr>e.pr;)s=s._next;(e._prev=s?s._prev:o)?e._prev._next=e:r=e,(e._next=s)?s._prev=e:o=e,e=i}t._pt=r},Rn=(function(){function n(e,i,s,r,o,a,l,u,c){this.t=i,this.s=r,this.c=o,this.p=s,this.r=a||p_,this.d=l||this,this.set=u||Uf,this.pr=c||0,this._next=e,e&&(e._prev=this)}var t=n.prototype;return t.modifier=function(i,s,r){this.mSet=this.mSet||this.set,this.set=Nx,this.m=i,this.mt=r,this.tween=s},n})();Cn(Rf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Cf[n]=1});Hn.TweenMax=Hn.TweenLite=Xe;Hn.TimelineLite=Hn.TimelineMax=vn;Oe=new vn({sortChildren:!1,defaults:Wr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});zn.stringFilter=r_;var ir=[],Ya={},Ox=[],Qh=0,Fx=0,nc=function(t){return(Ya[t]||Ox).map(function(e){return e()})},cu=function(){var t=Date.now(),e=[];t-Qh>2&&(nc("matchMediaInit"),ir.forEach(function(i){var s=i.queries,r=i.conditions,o,a,l,u;for(a in s)o=_i.matchMedia(s[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,u=1);u&&(i.revert(),l&&e.push(i))}),nc("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(s){return i.add(null,s)})}),Qh=t,nc("matchMedia"))},g_=(function(){function n(e,i){this.selector=i&&ou(i),this.data=[],this._r=[],this.isReverted=!1,this.id=Fx++,e&&this.add(e)}var t=n.prototype;return t.add=function(i,s,r){ke(i)&&(r=s,s=i,i=ke);var o=this,a=function(){var u=Ue,c=o.selector,f;return u&&u!==o&&u.data.push(o),r&&(o.selector=ou(r)),Ue=o,f=s.apply(o,arguments),ke(f)&&o._r.push(f),Ue=u,o.selector=c,o.isReverted=!1,f};return o.last=a,i===ke?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},t.ignore=function(i){var s=Ue;Ue=null,i(this),Ue=s},t.getTweens=function(){var i=[];return this.data.forEach(function(s){return s instanceof n?i.push.apply(i,s.getTweens()):s instanceof Xe&&!(s.parent&&s.parent.data==="nested")&&i.push(s)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,s){var r=this;if(i?(function(){for(var a=r.getTweens(),l=r.data.length,u;l--;)u=r.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,f){return f.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=r.data.length;l--;)u=r.data[l],u instanceof vn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Xe)&&u.revert&&u.revert(i);r._r.forEach(function(c){return c(i,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),s)for(var o=ir.length;o--;)ir[o].id===this.id&&ir.splice(o,1)},t.revert=function(i){this.kill(i||{})},n})(),Bx=(function(){function n(e){this.contexts=[],this.scope=e,Ue&&Ue.data.push(this)}var t=n.prototype;return t.add=function(i,s,r){Ei(i)||(i={matches:i});var o=new g_(0,r||this.scope),a=o.conditions={},l,u,c;Ue&&!o.selector&&(o.selector=Ue.selector),this.contexts.push(o),s=o.add("onMatch",s),o.queries=i;for(u in i)u==="all"?c=1:(l=_i.matchMedia(i[u]),l&&(ir.indexOf(o)<0&&ir.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(cu):l.addEventListener("change",cu)));return c&&s(o,function(f){return o.add(null,f)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(s){return s.kill(i,!0)})},n})(),dl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(s){return n_(s)})},timeline:function(t){return new vn(t)},getTweensOf:function(t,e){return Oe.getTweensOf(t,e)},getProperty:function(t,e,i,s){Je(t)&&(t=Zn(t)[0]);var r=tr(t||{}).get,o=i?Gm:Vm;return i==="native"&&(i=""),t&&(e?o((Nn[e]&&Nn[e].get||r)(t,e,i,s)):function(a,l,u){return o((Nn[a]&&Nn[a].get||r)(t,a,l,u))})},quickSetter:function(t,e,i){if(t=Zn(t),t.length>1){var s=t.map(function(c){return Dn.quickSetter(c,e,i)}),r=s.length;return function(c){for(var f=r;f--;)s[f](c)}}t=t[0]||{};var o=Nn[e],a=tr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,u=o?function(c){var f=new o;Pr._pt=0,f.init(t,i?c+i:c,Pr,0,[t]),f.render(1,f),Pr._pt&&Of(1,Pr)}:a.set(t,l);return o?u:function(c){return u(t,l,i?c+i:c,a,1)}},quickTo:function(t,e,i){var s,r=Dn.to(t,Vn((s={},s[e]="+=0.1",s.paused=!0,s.stagger=0,s),i||{})),o=function(l,u,c){return r.resetTo(e,l,u,c)};return o.tween=r,o},isTweening:function(t){return Oe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=nr(t.ease,Wr.ease)),$h(Wr,t||{})},config:function(t){return $h(zn,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,s=t.plugins,r=t.defaults,o=t.extendTimeline;(s||"").split(",").forEach(function(a){return a&&!Nn[a]&&!Hn[a]&&Yo(e+" effect requires "+a+" plugin.")}),Jl[e]=function(a,l,u){return i(Zn(a),Vn(l||{},r),u)},o&&(vn.prototype[e]=function(a,l,u){return this.add(Jl[e](a,Ei(l)?l:(u=l)&&{},this),u)})},registerEase:function(t,e){le[t]=nr(e)},parseEase:function(t,e){return arguments.length?nr(t,e):le},getById:function(t){return Oe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new vn(t),s,r;for(i.smoothChildTiming=An(t.smoothChildTiming),Oe.remove(i),i._dp=0,i._time=i._tTime=Oe._time,s=Oe._first;s;)r=s._next,(e||!(!s._dur&&s instanceof Xe&&s.vars.onComplete===s._targets[0]))&&xi(i,s,s._start-s._delay),s=r;return xi(Oe,i,0),i},context:function(t,e){return t?new g_(t,e):Ue},matchMedia:function(t){return new Bx(t)},matchMediaRefresh:function(){return ir.forEach(function(t){var e=t.conditions,i,s;for(s in e)e[s]&&(e[s]=!1,i=1);i&&t.revert()})||cu()},addEventListener:function(t,e){var i=Ya[t]||(Ya[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=Ya[t],s=i&&i.indexOf(e);s>=0&&i.splice(s,1)},utils:{wrap:_x,wrapYoyo:gx,distribute:jm,random:Jm,snap:Zm,normalize:mx,getUnit:cn,clamp:fx,splitColor:i_,toArray:Zn,selector:ou,mapRange:t_,pipe:dx,unitize:px,interpolate:vx,shuffle:Km},install:Fm,effects:Jl,ticker:On,updateRoot:vn.updateRoot,plugins:Nn,globalTimeline:Oe,core:{PropTween:Rn,globals:Bm,Tween:Xe,Timeline:vn,Animation:Zo,getCache:tr,_removeLinkedListItem:Dl,reverting:function(){return en},context:function(t){return t&&Ue&&(Ue.data.push(t),t._ctx=Ue),Ue},suppressOverwrites:function(t){return bf=t}}};Cn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return dl[n]=Xe[n]});On.add(vn.updateRoot);Pr=dl.to({},{duration:0});var kx=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},zx=function(t,e){var i=t._targets,s,r,o;for(s in e)for(r=i.length;r--;)o=t._ptLookup[r][s],o&&(o=o.d)&&(o._pt&&(o=kx(o,s)),o&&o.modifier&&o.modifier(e[s],t,i[r],s))},ic=function(t,e){return{name:t,headless:1,rawVars:1,init:function(s,r,o){o._onInit=function(a){var l,u;if(Je(r)&&(l={},Cn(r,function(c){return l[c]=1}),r=l),e){l={};for(u in r)l[u]=e(r[u]);r=l}zx(a,r)}}}},Dn=dl.registerPlugin({name:"attr",init:function(t,e,i,s,r){var o,a,l;this.tween=i;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],s,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var i=e._pt;i;)en?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},ic("roundProps",au),ic("modifiers"),ic("snap",Zm))||dl;Xe.version=vn.version=Dn.version="3.14.2";Om=1;Tf()&&$r();le.Power0;le.Power1;le.Power2;le.Power3;le.Power4;le.Linear;le.Quad;le.Cubic;le.Quart;le.Quint;le.Strong;le.Elastic;le.Back;le.SteppedEase;le.Bounce;le.Sine;le.Expo;le.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var td,hs,Br,Ff,Ys,ed,Bf,Hx=function(){return typeof window<"u"},Ki={},zs=180/Math.PI,kr=Math.PI/180,ur=Math.atan2,nd=1e8,kf=/([A-Z])/g,Vx=/(left|right|width|margin|padding|x)/i,Gx=/[\s,\(]\S/,yi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},uu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Wx=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Xx=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},qx=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Yx=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},v_=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},x_=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},$x=function(t,e,i){return t.style[e]=i},Kx=function(t,e,i){return t.style.setProperty(e,i)},jx=function(t,e,i){return t._gsap[e]=i},Zx=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},Jx=function(t,e,i,s,r){var o=t._gsap;o.scaleX=o.scaleY=i,o.renderTransform(r,o)},Qx=function(t,e,i,s,r){var o=t._gsap;o[e]=i,o.renderTransform(r,o)},Fe="transform",Pn=Fe+"Origin",ty=function n(t,e){var i=this,s=this.target,r=s.style,o=s._gsap;if(t in Ki&&r){if(this.tfm=this.tfm||{},t!=="transform")t=yi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return i.tfm[a]=ki(s,a)}):this.tfm[t]=o.x?o[t]:ki(s,t),t===Pn&&(this.tfm.zOrigin=o.zOrigin);else return yi.transform.split(",").forEach(function(a){return n.call(i,a,e)});if(this.props.indexOf(Fe)>=0)return;o.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(Pn,e,"")),t=Fe}(r||e)&&this.props.push(t,e,r[t])},y_=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},ey=function(){var t=this.props,e=this.target,i=e.style,s=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?i[t[r]]=t[r+2]:i.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(kf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)s[o]=this.tfm[o];s.svg&&(s.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Bf(),(!r||!r.isStart)&&!i[Fe]&&(y_(i),s.zOrigin&&i[Pn]&&(i[Pn]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},M_=function(t,e){var i={target:t,props:[],revert:ey,save:ty};return t._gsap||Dn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(s){return i.save(s)}),i},S_,fu=function(t,e){var i=hs.createElementNS?hs.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):hs.createElement(t);return i&&i.style?i:hs.createElement(t)},kn=function n(t,e,i){var s=getComputedStyle(t);return s[e]||s.getPropertyValue(e.replace(kf,"-$1").toLowerCase())||s.getPropertyValue(e)||!i&&n(t,Kr(e)||e,1)||""},id="O,Moz,ms,Ms,Webkit".split(","),Kr=function(t,e,i){var s=e||Ys,r=s.style,o=5;if(t in r&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(id[o]+t in r););return o<0?null:(o===3?"ms":o>=0?id[o]:"")+t},hu=function(){Hx()&&window.document&&(td=window,hs=td.document,Br=hs.documentElement,Ys=fu("div")||{style:{}},fu("div"),Fe=Kr(Fe),Pn=Fe+"Origin",Ys.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",S_=!!Kr("perspective"),Bf=Dn.core.reverting,Ff=1)},sd=function(t){var e=t.ownerSVGElement,i=fu("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=t.cloneNode(!0),r;s.style.display="block",i.appendChild(s),Br.appendChild(i);try{r=s.getBBox()}catch{}return i.removeChild(s),Br.removeChild(i),r},rd=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},b_=function(t){var e,i;try{e=t.getBBox()}catch{e=sd(t),i=1}return e&&(e.width||e.height)||i||(e=sd(t)),e&&!e.width&&!e.x&&!e.y?{x:+rd(t,["x","cx","x1"])||0,y:+rd(t,["y","cy","y1"])||0,width:0,height:0}:e},E_=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&b_(t))},Ss=function(t,e){if(e){var i=t.style,s;e in Ki&&e!==Pn&&(e=Fe),i.removeProperty?(s=e.substr(0,2),(s==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(s==="--"?e:e.replace(kf,"-$1").toLowerCase())):i.removeAttribute(e)}},ds=function(t,e,i,s,r,o){var a=new Rn(t._pt,e,i,0,1,o?x_:v_);return t._pt=a,a.b=s,a.e=r,t._props.push(i),a},od={deg:1,rad:1,turn:1},ny={grid:1,flex:1},bs=function n(t,e,i,s){var r=parseFloat(i)||0,o=(i+"").trim().substr((r+"").length)||"px",a=Ys.style,l=Vx.test(e),u=t.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),f=100,h=s==="px",d=s==="%",g,_,m,p;if(s===o||!r||od[s]||od[o])return r;if(o!=="px"&&!h&&(r=n(t,e,i,"px")),p=t.getCTM&&E_(t),(d||o==="%")&&(Ki[e]||~e.indexOf("adius")))return g=p?t.getBBox()[l?"width":"height"]:t[c],He(d?r/g*f:r/100*g);if(a[l?"width":"height"]=f+(h?o:s),_=s!=="rem"&&~e.indexOf("adius")||s==="em"&&t.appendChild&&!u?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===hs||!_.appendChild)&&(_=hs.body),m=_._gsap,m&&d&&m.width&&l&&m.time===On.time&&!m.uncache)return He(r/m.width*f);if(d&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=f+s,g=t[c],M?t.style[e]=M:Ss(t,e)}else(d||o==="%")&&!ny[kn(_,"display")]&&(a.position=kn(t,"position")),_===t&&(a.position="static"),_.appendChild(Ys),g=Ys[c],_.removeChild(Ys),a.position="absolute";return l&&d&&(m=tr(_),m.time=On.time,m.width=_[c]),He(h?g*r/f:g&&r?f/g*r:0)},ki=function(t,e,i,s){var r;return Ff||hu(),e in yi&&e!=="transform"&&(e=yi[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ki[e]&&e!=="transform"?(r=Qo(t,s),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:ml(kn(t,Pn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||s||~(r+"").indexOf("calc("))&&(r=pl[e]&&pl[e](t,e,i)||kn(t,e)||zm(t,e)||(e==="opacity"?1:0))),i&&!~(r+"").trim().indexOf(" ")?bs(t,e,r,i)+i:r},iy=function(t,e,i,s){if(!i||i==="none"){var r=Kr(e,t,1),o=r&&kn(t,r,1);o&&o!==i?(e=r,i=o):e==="borderColor"&&(i=kn(t,"borderTopColor"))}var a=new Rn(this._pt,t.style,e,0,1,m_),l=0,u=0,c,f,h,d,g,_,m,p,M,y,v,R;if(a.b=i,a.e=s,i+="",s+="",s.substring(0,6)==="var(--"&&(s=kn(t,s.substring(4,s.indexOf(")")))),s==="auto"&&(_=t.style[e],t.style[e]=s,s=kn(t,e)||s,_?t.style[e]=_:Ss(t,e)),c=[i,s],r_(c),i=c[0],s=c[1],h=i.match(Rr)||[],R=s.match(Rr)||[],R.length){for(;f=Rr.exec(s);)m=f[0],M=s.substring(l,f.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),m!==(_=h[u++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),m.charAt(1)==="="&&(m=Fr(d,m)+v),p=parseFloat(m),y=m.substr((p+"").length),l=Rr.lastIndex-y.length,y||(y=y||zn.units[e]||v,l===s.length&&(s+=y,a.e+=y)),v!==y&&(d=bs(t,e,_,y)||0),a._pt={_next:a._pt,p:M||u===1?M:",",s:d,c:p-d,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<s.length?s.substring(l,s.length):""}else a.r=e==="display"&&s==="none"?x_:v_;return Nm.test(s)&&(a.e=0),this._pt=a,a},ad={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},sy=function(t){var e=t.split(" "),i=e[0],s=e[1]||"50%";return(i==="top"||i==="bottom"||s==="left"||s==="right")&&(t=i,i=s,s=t),e[0]=ad[i]||i,e[1]=ad[s]||s,e.join(" ")},ry=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,s=i.style,r=e.u,o=i._gsap,a,l,u;if(r==="all"||r===!0)s.cssText="",l=1;else for(r=r.split(","),u=r.length;--u>-1;)a=r[u],Ki[a]&&(l=1,a=a==="transformOrigin"?Pn:Fe),Ss(i,a);l&&(Ss(i,Fe),o&&(o.svg&&i.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",Qo(i,1),o.uncache=1,y_(s)))}},pl={clearProps:function(t,e,i,s,r){if(r.data!=="isFromStart"){var o=t._pt=new Rn(t._pt,e,i,0,0,ry);return o.u=s,o.pr=-10,o.tween=r,t._props.push(i),1}}},Jo=[1,0,0,1,0,0],T_={},w_=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},ld=function(t){var e=kn(t,Fe);return w_(e)?Jo:e.substr(7).match(Um).map(He)},zf=function(t,e){var i=t._gsap||tr(t),s=t.style,r=ld(t),o,a,l,u;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Jo:r):(r===Jo&&!t.offsetParent&&t!==Br&&!i.svg&&(l=s.display,s.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(u=1,a=t.nextElementSibling,Br.appendChild(t)),r=ld(t),l?s.display=l:Ss(t,"display"),u&&(a?o.insertBefore(t,a):o?o.appendChild(t):Br.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},du=function(t,e,i,s,r,o){var a=t._gsap,l=r||zf(t,!0),u=a.xOrigin||0,c=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],M=l[5],y=e.split(" "),v=parseFloat(y[0])||0,R=parseFloat(y[1])||0,w,C,P,x;i?l!==Jo&&(C=d*m-g*_)&&(P=v*(m/C)+R*(-_/C)+(_*M-m*p)/C,x=v*(-g/C)+R*(d/C)-(d*M-g*p)/C,v=P,R=x):(w=b_(t),v=w.x+(~y[0].indexOf("%")?v/100*w.width:v),R=w.y+(~(y[1]||y[0]).indexOf("%")?R/100*w.height:R)),s||s!==!1&&a.smooth?(p=v-u,M=R-c,a.xOffset=f+(p*d+M*_)-p,a.yOffset=h+(p*g+M*m)-M):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=R,a.smooth=!!s,a.origin=e,a.originIsAbsolute=!!i,t.style[Pn]="0px 0px",o&&(ds(o,a,"xOrigin",u,v),ds(o,a,"yOrigin",c,R),ds(o,a,"xOffset",f,a.xOffset),ds(o,a,"yOffset",h,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+R)},Qo=function(t,e){var i=t._gsap||new c_(t);if("x"in i&&!e&&!i.uncache)return i;var s=t.style,r=i.scaleX<0,o="px",a="deg",l=getComputedStyle(t),u=kn(t,Pn)||"0",c,f,h,d,g,_,m,p,M,y,v,R,w,C,P,x,S,L,N,k,Y,J,W,K,B,gt,mt,Tt,Ut,se,ot,ht;return c=f=h=_=m=p=M=y=v=0,d=g=1,i.svg=!!(t.getCTM&&E_(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(s[Fe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Fe]!=="none"?l[Fe]:"")),s.scale=s.rotate=s.translate="none"),C=zf(t,i.svg),i.svg&&(i.uncache?(B=t.getBBox(),u=i.xOrigin-B.x+"px "+(i.yOrigin-B.y)+"px",K=""):K=!e&&t.getAttribute("data-svg-origin"),du(t,K||u,!!K||i.originIsAbsolute,i.smooth!==!1,C)),R=i.xOrigin||0,w=i.yOrigin||0,C!==Jo&&(L=C[0],N=C[1],k=C[2],Y=C[3],c=J=C[4],f=W=C[5],C.length===6?(d=Math.sqrt(L*L+N*N),g=Math.sqrt(Y*Y+k*k),_=L||N?ur(N,L)*zs:0,M=k||Y?ur(k,Y)*zs+_:0,M&&(g*=Math.abs(Math.cos(M*kr))),i.svg&&(c-=R-(R*L+w*k),f-=w-(R*N+w*Y))):(ht=C[6],se=C[7],mt=C[8],Tt=C[9],Ut=C[10],ot=C[11],c=C[12],f=C[13],h=C[14],P=ur(ht,Ut),m=P*zs,P&&(x=Math.cos(-P),S=Math.sin(-P),K=J*x+mt*S,B=W*x+Tt*S,gt=ht*x+Ut*S,mt=J*-S+mt*x,Tt=W*-S+Tt*x,Ut=ht*-S+Ut*x,ot=se*-S+ot*x,J=K,W=B,ht=gt),P=ur(-k,Ut),p=P*zs,P&&(x=Math.cos(-P),S=Math.sin(-P),K=L*x-mt*S,B=N*x-Tt*S,gt=k*x-Ut*S,ot=Y*S+ot*x,L=K,N=B,k=gt),P=ur(N,L),_=P*zs,P&&(x=Math.cos(P),S=Math.sin(P),K=L*x+N*S,B=J*x+W*S,N=N*x-L*S,W=W*x-J*S,L=K,J=B),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=He(Math.sqrt(L*L+N*N+k*k)),g=He(Math.sqrt(W*W+ht*ht)),P=ur(J,W),M=Math.abs(P)>2e-4?P*zs:0,v=ot?1/(ot<0?-ot:ot):0),i.svg&&(K=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!w_(kn(t,Fe)),K&&t.setAttribute("transform",K))),Math.abs(M)>90&&Math.abs(M)<270&&(r?(d*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),e=e||i.uncache,i.x=c-((i.xPercent=c&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-c)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=He(d),i.scaleY=He(g),i.rotation=He(_)+a,i.rotationX=He(m)+a,i.rotationY=He(p)+a,i.skewX=M+a,i.skewY=y+a,i.transformPerspective=v+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!e&&i.zOrigin||0)&&(s[Pn]=ml(u)),i.xOffset=i.yOffset=0,i.force3D=zn.force3D,i.renderTransform=i.svg?ay:S_?A_:oy,i.uncache=0,i},ml=function(t){return(t=t.split(" "))[0]+" "+t[1]},sc=function(t,e,i){var s=cn(e);return He(parseFloat(e)+parseFloat(bs(t,"x",i+"px",s)))+s},oy=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,A_(t,e)},Ds="0deg",ho="0px",Is=") ",A_=function(t,e){var i=e||this,s=i.xPercent,r=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,f=i.rotationX,h=i.skewX,d=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,p=i.force3D,M=i.target,y=i.zOrigin,v="",R=p==="auto"&&t&&t!==1||p===!0;if(y&&(f!==Ds||c!==Ds)){var w=parseFloat(c)*kr,C=Math.sin(w),P=Math.cos(w),x;w=parseFloat(f)*kr,x=Math.cos(w),o=sc(M,o,C*x*-y),a=sc(M,a,-Math.sin(w)*-y),l=sc(M,l,P*x*-y+y)}m!==ho&&(v+="perspective("+m+Is),(s||r)&&(v+="translate("+s+"%, "+r+"%) "),(R||o!==ho||a!==ho||l!==ho)&&(v+=l!==ho||R?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Is),u!==Ds&&(v+="rotate("+u+Is),c!==Ds&&(v+="rotateY("+c+Is),f!==Ds&&(v+="rotateX("+f+Is),(h!==Ds||d!==Ds)&&(v+="skew("+h+", "+d+Is),(g!==1||_!==1)&&(v+="scale("+g+", "+_+Is),M.style[Fe]=v||"translate(0, 0)"},ay=function(t,e){var i=e||this,s=i.xPercent,r=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,f=i.scaleX,h=i.scaleY,d=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,p=i.yOffset,M=i.forceCSS,y=parseFloat(o),v=parseFloat(a),R,w,C,P,x;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=kr,u*=kr,R=Math.cos(l)*f,w=Math.sin(l)*f,C=Math.sin(l-u)*-h,P=Math.cos(l-u)*h,u&&(c*=kr,x=Math.tan(u-c),x=Math.sqrt(1+x*x),C*=x,P*=x,c&&(x=Math.tan(c),x=Math.sqrt(1+x*x),R*=x,w*=x)),R=He(R),w=He(w),C=He(C),P=He(P)):(R=f,P=h,w=C=0),(y&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(y=bs(d,"x",o,"px"),v=bs(d,"y",a,"px")),(g||_||m||p)&&(y=He(y+g-(g*R+_*C)+m),v=He(v+_-(g*w+_*P)+p)),(s||r)&&(x=d.getBBox(),y=He(y+s/100*x.width),v=He(v+r/100*x.height)),x="matrix("+R+","+w+","+C+","+P+","+y+","+v+")",d.setAttribute("transform",x),M&&(d.style[Fe]=x)},ly=function(t,e,i,s,r){var o=360,a=Je(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?zs:1),u=l-s,c=s+u+"deg",f,h;return a&&(f=r.split("_")[1],f==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),f==="cw"&&u<0?u=(u+o*nd)%o-~~(u/o)*o:f==="ccw"&&u>0&&(u=(u-o*nd)%o-~~(u/o)*o)),t._pt=h=new Rn(t._pt,e,i,s,u,Wx),h.e=c,h.u="deg",t._props.push(i),h},cd=function(t,e){for(var i in e)t[i]=e[i];return t},cy=function(t,e,i){var s=cd({},i._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,f,h,d,g;s.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[Fe]=e,a=Qo(i,1),Ss(i,Fe),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Fe],o[Fe]=e,a=Qo(i,1),o[Fe]=u);for(l in Ki)u=s[l],c=a[l],u!==c&&r.indexOf(l)<0&&(d=cn(u),g=cn(c),f=d!==g?bs(i,l,u,g):parseFloat(u),h=parseFloat(c),t._pt=new Rn(t._pt,a,l,f,h-f,uu),t._pt.u=g||0,t._props.push(l));cd(a,s)};Cn("padding,margin,Width,Radius",function(n,t){var e="Top",i="Right",s="Bottom",r="Left",o=(t<3?[e,i,s,r]:[e+r,e+i,s+i,s+r]).map(function(a){return t<2?n+a:"border"+a+n});pl[t>1?"border"+n:n]=function(a,l,u,c,f){var h,d;if(arguments.length<4)return h=o.map(function(g){return ki(a,g,u)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(c+"").split(" "),d={},o.forEach(function(g,_){return d[g]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,d,f)}});var C_={name:"css",register:hu,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,s,r){var o=this._props,a=t.style,l=i.vars.startAt,u,c,f,h,d,g,_,m,p,M,y,v,R,w,C,P,x;Ff||hu(),this.styles=this.styles||M_(t),P=this.styles.props,this.tween=i;for(_ in e)if(_!=="autoRound"&&(c=e[_],!(Nn[_]&&u_(_,e,i,s,t,r)))){if(d=typeof c,g=pl[_],d==="function"&&(c=c.call(i,s,t,r),d=typeof c),d==="string"&&~c.indexOf("random(")&&(c=Ko(c)),g)g(this,t,_,c,i)&&(C=1);else if(_.substr(0,2)==="--")u=(getComputedStyle(t).getPropertyValue(_)+"").trim(),c+="",_s.lastIndex=0,_s.test(u)||(m=cn(u),p=cn(c),p?m!==p&&(u=bs(t,_,u,p)+p):m&&(c+=m)),this.add(a,"setProperty",u,c,s,r,0,0,_),o.push(_),P.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(u=typeof l[_]=="function"?l[_].call(i,s,t,r):l[_],Je(u)&&~u.indexOf("random(")&&(u=Ko(u)),cn(u+"")||u==="auto"||(u+=zn.units[_]||cn(ki(t,_))||""),(u+"").charAt(1)==="="&&(u=ki(t,_))):u=ki(t,_),h=parseFloat(u),M=d==="string"&&c.charAt(1)==="="&&c.substr(0,2),M&&(c=c.substr(2)),f=parseFloat(c),_ in yi&&(_==="autoAlpha"&&(h===1&&ki(t,"visibility")==="hidden"&&f&&(h=0),P.push("visibility",0,a.visibility),ds(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=yi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),y=_ in Ki,y){if(this.styles.save(_),x=c,d==="string"&&c.substring(0,6)==="var(--"){if(c=kn(t,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var S=t.style.perspective;t.style.perspective=c,c=kn(t,"perspective"),S?t.style.perspective=S:Ss(t,"perspective")}f=parseFloat(c)}if(v||(R=t._gsap,R.renderTransform&&!e.parseTransform||Qo(t,e.parseTransform),w=e.smoothOrigin!==!1&&R.smooth,v=this._pt=new Rn(this._pt,a,Fe,0,1,R.renderTransform,R,0,-1),v.dep=1),_==="scale")this._pt=new Rn(this._pt,R,"scaleY",R.scaleY,(M?Fr(R.scaleY,M+f):f)-R.scaleY||0,uu),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){P.push(Pn,0,a[Pn]),c=sy(c),R.svg?du(t,c,0,w,0,this):(p=parseFloat(c.split(" ")[2])||0,p!==R.zOrigin&&ds(this,R,"zOrigin",R.zOrigin,p),ds(this,a,_,ml(u),ml(c)));continue}else if(_==="svgOrigin"){du(t,c,1,w,0,this);continue}else if(_ in T_){ly(this,R,_,h,M?Fr(h,M+c):c);continue}else if(_==="smoothOrigin"){ds(this,R,"smooth",R.smooth,c);continue}else if(_==="force3D"){R[_]=c;continue}else if(_==="transform"){cy(this,c,t);continue}}else _ in a||(_=Kr(_)||_);if(y||(f||f===0)&&(h||h===0)&&!Gx.test(c)&&_ in a)m=(u+"").substr((h+"").length),f||(f=0),p=cn(c)||(_ in zn.units?zn.units[_]:m),m!==p&&(h=bs(t,_,u,p)),this._pt=new Rn(this._pt,y?R:a,_,h,(M?Fr(h,M+f):f)-h,!y&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?Yx:uu),this._pt.u=p||0,y&&x!==c?(this._pt.b=u,this._pt.e=x,this._pt.r=qx):m!==p&&p!=="%"&&(this._pt.b=u,this._pt.r=Xx);else if(_ in a)iy.call(this,t,_,u,M?M+c:c);else if(_ in t)this.add(t,_,u||t[_],M?M+c:c,s,r);else if(_!=="parseTransform"){Af(_,c);continue}y||(_ in a?P.push(_,0,a[_]):typeof t[_]=="function"?P.push(_,2,t[_]()):P.push(_,1,u||t[_])),o.push(_)}}C&&__(this)},render:function(t,e){if(e.tween._time||!Bf())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:ki,aliases:yi,getSetter:function(t,e,i){var s=yi[e];return s&&s.indexOf(",")<0&&(e=s),e in Ki&&e!==Pn&&(t._gsap.x||ki(t,"x"))?i&&ed===i?e==="scale"?Zx:jx:(ed=i||{})&&(e==="scale"?Jx:Qx):t.style&&!Ef(t.style[e])?$x:~e.indexOf("-")?Kx:Nf(t,e)},core:{_removeProperty:Ss,_getMatrix:zf}};Dn.utils.checkPrefix=Kr;Dn.core.getStyleSaver=M_;(function(n,t,e,i){var s=Cn(n+","+t+","+e,function(r){Ki[r]=1});Cn(t,function(r){zn.units[r]="deg",T_[r]=1}),yi[s[13]]=n+","+t,Cn(i,function(r){var o=r.split(":");yi[o[1]]=s[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Cn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){zn.units[n]="px"});Dn.registerPlugin(C_);var zt=Dn.registerPlugin(C_)||Dn;zt.core.Tween;const Hf=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},uy=["aria-hidden"],fy={class:"nav-toggle-copy"},hy=["onClick"],dy={class:"bubble"},py={class:"bubble-copy"},my={class:"bubble-code"},_y={class:"bubble-label"},gy={class:"bubble-description"},vy={class:"bubble-icon"},xy={class:"bubble-index"},yy={__name:"BubbleNav",props:{pages:{type:Array,required:!0},currentPage:{type:String,required:!0}},emits:["page-change"],setup(n){const t=he(!0);let e=null;const i=()=>{e&&(window.clearTimeout(e),e=null)},s=()=>{i(),t.value=!1},r=()=>{i(),e=window.setTimeout(()=>{t.value=!0},900)};return xf(()=>{i()}),(o,a)=>(Kt(),Qt("nav",{class:Ce(["bubble-nav",{"is-collapsed":t.value}]),"aria-label":"Section navigation",onMouseenter:s,onMouseleave:r,onFocusin:s,onFocusout:r},[I("div",{class:"nav-toggle","aria-hidden":(!t.value).toString()},[I("span",fy,bt(t.value?"OPEN":"RITE"),1)],8,uy),a[3]||(a[3]=I("div",{class:"nav-shell"},null,-1)),a[4]||(a[4]=I("div",{class:"nav-axis"},[I("span",{class:"axis-label"},"RITUAL INDEX")],-1)),(Kt(!0),Qt(Le,null,Tn(n.pages,(l,u)=>(Kt(),Qt("div",{key:l.id,class:Ce(["bubble-item",{active:n.currentPage===l.id}]),style:oi({top:l.position}),onClick:c=>o.$emit("page-change",l.id)},[a[2]||(a[2]=I("div",{class:"item-connector","aria-hidden":"true"},null,-1)),I("div",dy,[a[0]||(a[0]=I("div",{class:"bubble-crest","aria-hidden":"true"},[I("span",{class:"crest-core"}),I("span",{class:"crest-ring"})],-1)),I("div",py,[I("div",my,bt(l.code),1),I("div",_y,bt(l.name),1),I("div",gy,bt(l.description),1)]),I("div",vy,bt(l.icon),1),I("div",xy,"0"+bt(u+1),1),a[1]||(a[1]=I("div",{class:"bubble-glow"},null,-1))])],14,hy))),128))],34))}},My=Hf(yy,[["__scopeId","data-v-b9cacc50"]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vf="171",Sy=0,ud=1,by=2,R_=1,Ey=2,Ui=3,ji=0,nn=1,tn=2,gs=0,zr=1,fd=2,hd=3,dd=4,Ty=5,Ws=100,wy=101,Ay=102,Cy=103,Ry=104,Py=200,Dy=201,Iy=202,Ly=203,pu=204,mu=205,Uy=206,Ny=207,Oy=208,Fy=209,By=210,ky=211,zy=212,Hy=213,Vy=214,_u=0,gu=1,vu=2,jr=3,xu=4,yu=5,Mu=6,Su=7,P_=0,Gy=1,Wy=2,vs=0,Xy=1,qy=2,Yy=3,$y=4,Ky=5,jy=6,Zy=7,D_=300,Zr=301,Jr=302,bu=303,Eu=304,Ul=306,Tu=1e3,$s=1001,wu=1002,ci=1003,Jy=1004,_a=1005,Mi=1006,rc=1007,Ks=1008,Zi=1009,I_=1010,L_=1011,ta=1012,Gf=1013,sr=1014,Vi=1015,oa=1016,Wf=1017,Xf=1018,Qr=1020,U_=35902,N_=1021,O_=1022,ai=1023,F_=1024,B_=1025,Hr=1026,to=1027,k_=1028,qf=1029,z_=1030,Yf=1031,$f=1033,$a=33776,Ka=33777,ja=33778,Za=33779,Au=35840,Cu=35841,Ru=35842,Pu=35843,Du=36196,Iu=37492,Lu=37496,Uu=37808,Nu=37809,Ou=37810,Fu=37811,Bu=37812,ku=37813,zu=37814,Hu=37815,Vu=37816,Gu=37817,Wu=37818,Xu=37819,qu=37820,Yu=37821,Ja=36492,$u=36494,Ku=36495,H_=36283,ju=36284,Zu=36285,Ju=36286,Qy=3200,tM=3201,V_=0,eM=1,us="",$n="srgb",eo="srgb-linear",_l="linear",Se="srgb",fr=7680,pd=519,nM=512,iM=513,sM=514,G_=515,rM=516,oM=517,aM=518,lM=519,md=35044,_d="300 es",Gi=2e3,gl=2001;class io{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],oc=Math.PI/180,Qu=180/Math.PI;function aa(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]+"-"+rn[t&255]+rn[t>>8&255]+"-"+rn[t>>16&15|64]+rn[t>>24&255]+"-"+rn[e&63|128]+rn[e>>8&255]+"-"+rn[e>>16&255]+rn[e>>24&255]+rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]).toLowerCase()}function ae(n,t,e){return Math.max(t,Math.min(e,n))}function cM(n,t){return(n%t+t)%t}function ac(n,t,e){return(1-e)*n+e*t}function po(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Sn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ht{constructor(t=0,e=0){Ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ae(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class re{constructor(t,e,i,s,r,o,a,l,u){re.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,u)}set(t,e,i,s,r,o,a,l,u){const c=this.elements;return c[0]=t,c[1]=s,c[2]=a,c[3]=e,c[4]=r,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],d=i[5],g=i[8],_=s[0],m=s[3],p=s[6],M=s[1],y=s[4],v=s[7],R=s[2],w=s[5],C=s[8];return r[0]=o*_+a*M+l*R,r[3]=o*m+a*y+l*w,r[6]=o*p+a*v+l*C,r[1]=u*_+c*M+f*R,r[4]=u*m+c*y+f*w,r[7]=u*p+c*v+f*C,r[2]=h*_+d*M+g*R,r[5]=h*m+d*y+g*w,r[8]=h*p+d*v+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8];return e*o*c-e*a*u-i*r*c+i*a*l+s*r*u-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8],f=c*o-a*u,h=a*l-c*r,d=u*r-o*l,g=e*f+i*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(s*u-c*i)*_,t[2]=(a*i-s*o)*_,t[3]=h*_,t[4]=(c*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(i*l-u*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),u=Math.sin(r);return this.set(i*l,i*u,-i*(l*o+u*a)+o+t,-s*u,s*l,-s*(-u*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(lc.makeScale(t,e)),this}rotate(t){return this.premultiply(lc.makeRotation(-t)),this}translate(t,e){return this.premultiply(lc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const lc=new re;function W_(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function vl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function uM(){const n=vl("canvas");return n.style.display="block",n}const gd={};function Cr(n){n in gd||(gd[n]=!0,console.warn(n))}function fM(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function hM(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function dM(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const vd=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xd=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pM(){const n={enabled:!0,workingColorSpace:eo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Se&&(s.r=Wi(s.r),s.g=Wi(s.g),s.b=Wi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Se&&(s.r=Vr(s.r),s.g=Vr(s.g),s.b=Vr(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===us?_l:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[eo]:{primaries:t,whitePoint:i,transfer:_l,toXYZ:vd,fromXYZ:xd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:$n},outputColorSpaceConfig:{drawingBufferColorSpace:$n}},[$n]:{primaries:t,whitePoint:i,transfer:Se,toXYZ:vd,fromXYZ:xd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:$n}}}),n}const pe=pM();function Wi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Vr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let hr;class mM{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{hr===void 0&&(hr=vl("canvas")),hr.width=t.width,hr.height=t.height;const i=hr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=hr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=vl("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Wi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Wi(e[i]/255)*255):e[i]=Wi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let _M=0;class X_{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=aa(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(cc(s[o].image)):r.push(cc(s[o]))}else r=cc(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function cc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?mM.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gM=0;class xn extends io{constructor(t=xn.DEFAULT_IMAGE,e=xn.DEFAULT_MAPPING,i=$s,s=$s,r=Mi,o=Ks,a=ai,l=Zi,u=xn.DEFAULT_ANISOTROPY,c=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=aa(),this.name="",this.source=new X_(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==D_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Tu:t.x=t.x-Math.floor(t.x);break;case $s:t.x=t.x<0?0:1;break;case wu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Tu:t.y=t.y-Math.floor(t.y);break;case $s:t.y=t.y<0?0:1;break;case wu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=D_;xn.DEFAULT_ANISOTROPY=1;class be{constructor(t=0,e=0,i=0,s=1){be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,u=l[0],c=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(u+1)/2,v=(d+1)/2,R=(p+1)/2,w=(c+h)/4,C=(f+_)/4,P=(g+m)/4;return y>v&&y>R?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=w/i,r=C/i):v>R?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=w/s,r=P/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=C/r,s=P/r),this.set(i,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-c)*(h-c));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-_)/M,this.z=(h-c)/M,this.w=Math.acos((u+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this.w=ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this.w=ae(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ae(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vM extends io{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new xn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new X_(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rr extends vM{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class q_ extends xn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ci,this.minFilter=ci,this.wrapR=$s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class xM extends xn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ci,this.minFilter=ci,this.wrapR=$s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class la{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],u=i[s+1],c=i[s+2],f=i[s+3];const h=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=u,t[e+2]=c,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(f!==_||l!==h||u!==d||c!==g){let m=1-a;const p=l*h+u*d+c*g+f*_,M=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const R=Math.sqrt(y),w=Math.atan2(R,p*M);m=Math.sin(m*w)/R,a=Math.sin(a*w)/R}const v=a*M;if(l=l*m+h*v,u=u*m+d*v,c=c*m+g*v,f=f*m+_*v,m===1-a){const R=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=R,u*=R,c*=R,f*=R}}t[e]=l,t[e+1]=u,t[e+2]=c,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],u=i[s+2],c=i[s+3],f=r[o],h=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+c*f+l*d-u*h,t[e+1]=l*g+c*h+u*f-a*d,t[e+2]=u*g+c*d+a*h-l*f,t[e+3]=c*g-a*f-l*h-u*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(s/2),f=a(r/2),h=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*c*f+u*d*g,this._y=u*d*f-h*c*g,this._z=u*c*g+h*d*f,this._w=u*c*f-h*d*g;break;case"YXZ":this._x=h*c*f+u*d*g,this._y=u*d*f-h*c*g,this._z=u*c*g-h*d*f,this._w=u*c*f+h*d*g;break;case"ZXY":this._x=h*c*f-u*d*g,this._y=u*d*f+h*c*g,this._z=u*c*g+h*d*f,this._w=u*c*f-h*d*g;break;case"ZYX":this._x=h*c*f-u*d*g,this._y=u*d*f+h*c*g,this._z=u*c*g-h*d*f,this._w=u*c*f+h*d*g;break;case"YZX":this._x=h*c*f+u*d*g,this._y=u*d*f+h*c*g,this._z=u*c*g-h*d*f,this._w=u*c*f-h*d*g;break;case"XZY":this._x=h*c*f-u*d*g,this._y=u*d*f-h*c*g,this._z=u*c*g+h*d*f,this._w=u*c*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],u=e[2],c=e[6],f=e[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(c-l)*d,this._y=(r-u)*d,this._z=(o-s)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(c-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+u)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(r-u)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+c)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+u)/d,this._y=(l+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,u=e._z,c=e._w;return this._x=i*c+o*a+s*u-r*l,this._y=s*c+o*l+r*a-i*u,this._z=r*c+o*u+i*l-s*a,this._w=o*c-i*a-s*l-r*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-e)*c)/u,h=Math.sin(e*c)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,i=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(yd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(yd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,u=2*(o*s-a*i),c=2*(a*e-r*s),f=2*(r*i-o*e);return this.x=e+l*u+o*f-a*c,this.y=i+l*c+a*u-r*f,this.z=s+l*f+r*c-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ae(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return uc.copy(this).projectOnVector(t),this.sub(uc)}reflect(t){return this.sub(uc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uc=new O,yd=new la;class ca{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ei.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ei.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ei.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ei):ei.fromBufferAttribute(r,o),ei.applyMatrix4(t.matrixWorld),this.expandByPoint(ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ga.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ga.copy(i.boundingBox)),ga.applyMatrix4(t.matrixWorld),this.union(ga)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ei),ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(mo),va.subVectors(this.max,mo),dr.subVectors(t.a,mo),pr.subVectors(t.b,mo),mr.subVectors(t.c,mo),ns.subVectors(pr,dr),is.subVectors(mr,pr),Ls.subVectors(dr,mr);let e=[0,-ns.z,ns.y,0,-is.z,is.y,0,-Ls.z,Ls.y,ns.z,0,-ns.x,is.z,0,-is.x,Ls.z,0,-Ls.x,-ns.y,ns.x,0,-is.y,is.x,0,-Ls.y,Ls.x,0];return!fc(e,dr,pr,mr,va)||(e=[1,0,0,0,1,0,0,0,1],!fc(e,dr,pr,mr,va))?!1:(xa.crossVectors(ns,is),e=[xa.x,xa.y,xa.z],fc(e,dr,pr,mr,va))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ri=[new O,new O,new O,new O,new O,new O,new O,new O],ei=new O,ga=new ca,dr=new O,pr=new O,mr=new O,ns=new O,is=new O,Ls=new O,mo=new O,va=new O,xa=new O,Us=new O;function fc(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Us.fromArray(n,r);const a=s.x*Math.abs(Us.x)+s.y*Math.abs(Us.y)+s.z*Math.abs(Us.z),l=t.dot(Us),u=e.dot(Us),c=i.dot(Us);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const yM=new ca,_o=new O,hc=new O;class Nl{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):yM.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_o.subVectors(t,this.center);const e=_o.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(_o,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_o.copy(t.center).add(hc)),this.expandByPoint(_o.copy(t.center).sub(hc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pi=new O,dc=new O,ya=new O,ss=new O,pc=new O,Ma=new O,mc=new O;class Kf{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pi.copy(this.origin).addScaledVector(this.direction,e),Pi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){dc.copy(t).add(e).multiplyScalar(.5),ya.copy(e).sub(t).normalize(),ss.copy(this.origin).sub(dc);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ya),a=ss.dot(this.direction),l=-ss.dot(ya),u=ss.lengthSq(),c=Math.abs(1-o*o);let f,h,d,g;if(c>0)if(f=o*l-a,h=o*a-l,g=r*c,f>=0)if(h>=-g)if(h<=g){const _=1/c;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+u;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+u;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+u):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+u):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+u);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(dc).addScaledVector(ya,h),d}intersectSphere(t,e){Pi.subVectors(t.center,this.origin);const i=Pi.dot(this.direction),s=Pi.dot(Pi)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(t.min.x-h.x)*u,s=(t.max.x-h.x)*u):(i=(t.max.x-h.x)*u,s=(t.min.x-h.x)*u),c>=0?(r=(t.min.y-h.y)*c,o=(t.max.y-h.y)*c):(r=(t.max.y-h.y)*c,o=(t.min.y-h.y)*c),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Pi)!==null}intersectTriangle(t,e,i,s,r){pc.subVectors(e,t),Ma.subVectors(i,t),mc.crossVectors(pc,Ma);let o=this.direction.dot(mc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ss.subVectors(this.origin,t);const l=a*this.direction.dot(Ma.crossVectors(ss,Ma));if(l<0)return null;const u=a*this.direction.dot(pc.cross(ss));if(u<0||l+u>o)return null;const c=-a*ss.dot(mc);return c<0?null:this.at(c/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class De{constructor(t,e,i,s,r,o,a,l,u,c,f,h,d,g,_,m){De.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,u,c,f,h,d,g,_,m)}set(t,e,i,s,r,o,a,l,u,c,f,h,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=u,p[6]=c,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new De().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/_r.setFromMatrixColumn(t,0).length(),r=1/_r.setFromMatrixColumn(t,1).length(),o=1/_r.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),u=Math.sin(s),c=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=o*c,d=o*f,g=a*c,_=a*f;e[0]=l*c,e[4]=-l*f,e[8]=u,e[1]=d+g*u,e[5]=h-_*u,e[9]=-a*l,e[2]=_-h*u,e[6]=g+d*u,e[10]=o*l}else if(t.order==="YXZ"){const h=l*c,d=l*f,g=u*c,_=u*f;e[0]=h+_*a,e[4]=g*a-d,e[8]=o*u,e[1]=o*f,e[5]=o*c,e[9]=-a,e[2]=d*a-g,e[6]=_+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*c,d=l*f,g=u*c,_=u*f;e[0]=h-_*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*c,e[9]=_-h*a,e[2]=-o*u,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*c,d=o*f,g=a*c,_=a*f;e[0]=l*c,e[4]=g*u-d,e[8]=h*u+_,e[1]=l*f,e[5]=_*u+h,e[9]=d*u-g,e[2]=-u,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,d=o*u,g=a*l,_=a*u;e[0]=l*c,e[4]=_-h*f,e[8]=g*f+d,e[1]=f,e[5]=o*c,e[9]=-a*c,e[2]=-u*c,e[6]=d*f+g,e[10]=h-_*f}else if(t.order==="XZY"){const h=o*l,d=o*u,g=a*l,_=a*u;e[0]=l*c,e[4]=-f,e[8]=u*c,e[1]=h*f+_,e[5]=o*c,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*c,e[10]=_*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(MM,t,SM)}lookAt(t,e,i){const s=this.elements;return Ln.subVectors(t,e),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),rs.crossVectors(i,Ln),rs.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),rs.crossVectors(i,Ln)),rs.normalize(),Sa.crossVectors(Ln,rs),s[0]=rs.x,s[4]=Sa.x,s[8]=Ln.x,s[1]=rs.y,s[5]=Sa.y,s[9]=Ln.y,s[2]=rs.z,s[6]=Sa.z,s[10]=Ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],M=i[3],y=i[7],v=i[11],R=i[15],w=s[0],C=s[4],P=s[8],x=s[12],S=s[1],L=s[5],N=s[9],k=s[13],Y=s[2],J=s[6],W=s[10],K=s[14],B=s[3],gt=s[7],mt=s[11],Tt=s[15];return r[0]=o*w+a*S+l*Y+u*B,r[4]=o*C+a*L+l*J+u*gt,r[8]=o*P+a*N+l*W+u*mt,r[12]=o*x+a*k+l*K+u*Tt,r[1]=c*w+f*S+h*Y+d*B,r[5]=c*C+f*L+h*J+d*gt,r[9]=c*P+f*N+h*W+d*mt,r[13]=c*x+f*k+h*K+d*Tt,r[2]=g*w+_*S+m*Y+p*B,r[6]=g*C+_*L+m*J+p*gt,r[10]=g*P+_*N+m*W+p*mt,r[14]=g*x+_*k+m*K+p*Tt,r[3]=M*w+y*S+v*Y+R*B,r[7]=M*C+y*L+v*J+R*gt,r[11]=M*P+y*N+v*W+R*mt,r[15]=M*x+y*k+v*K+R*Tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],u=t[13],c=t[2],f=t[6],h=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*f-s*u*f-r*a*h+i*u*h+s*a*d-i*l*d)+_*(+e*l*d-e*u*h+r*o*h-s*o*d+s*u*c-r*l*c)+m*(+e*u*f-e*a*d-r*o*f+i*o*d+r*a*c-i*u*c)+p*(-s*a*c-e*l*f+e*a*h+s*o*f-i*o*h+i*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8],f=t[9],h=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],M=f*m*u-_*h*u+_*l*d-a*m*d-f*l*p+a*h*p,y=g*h*u-c*m*u-g*l*d+o*m*d+c*l*p-o*h*p,v=c*_*u-g*f*u+g*a*d-o*_*d-c*a*p+o*f*p,R=g*f*l-c*_*l-g*a*h+o*_*h+c*a*m-o*f*m,w=e*M+i*y+s*v+r*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return t[0]=M*C,t[1]=(_*h*r-f*m*r-_*s*d+i*m*d+f*s*p-i*h*p)*C,t[2]=(a*m*r-_*l*r+_*s*u-i*m*u-a*s*p+i*l*p)*C,t[3]=(f*l*r-a*h*r-f*s*u+i*h*u+a*s*d-i*l*d)*C,t[4]=y*C,t[5]=(c*m*r-g*h*r+g*s*d-e*m*d-c*s*p+e*h*p)*C,t[6]=(g*l*r-o*m*r-g*s*u+e*m*u+o*s*p-e*l*p)*C,t[7]=(o*h*r-c*l*r+c*s*u-e*h*u-o*s*d+e*l*d)*C,t[8]=v*C,t[9]=(g*f*r-c*_*r-g*i*d+e*_*d+c*i*p-e*f*p)*C,t[10]=(o*_*r-g*a*r+g*i*u-e*_*u-o*i*p+e*a*p)*C,t[11]=(c*a*r-o*f*r-c*i*u+e*f*u+o*i*d-e*a*d)*C,t[12]=R*C,t[13]=(c*_*s-g*f*s+g*i*h-e*_*h-c*i*m+e*f*m)*C,t[14]=(g*a*s-o*_*s-g*i*l+e*_*l+o*i*m-e*a*m)*C,t[15]=(o*f*s-c*a*s+c*i*l-e*f*l-o*i*h+e*a*h)*C,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,u=r*o,c=r*a;return this.set(u*o+i,u*a-s*l,u*l+s*a,0,u*a+s*l,c*a+i,c*l-s*o,0,u*l-s*a,c*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,u=r+r,c=o+o,f=a+a,h=r*u,d=r*c,g=r*f,_=o*c,m=o*f,p=a*f,M=l*u,y=l*c,v=l*f,R=i.x,w=i.y,C=i.z;return s[0]=(1-(_+p))*R,s[1]=(d+v)*R,s[2]=(g-y)*R,s[3]=0,s[4]=(d-v)*w,s[5]=(1-(h+p))*w,s[6]=(m+M)*w,s[7]=0,s[8]=(g+y)*C,s[9]=(m-M)*C,s[10]=(1-(h+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=_r.set(s[0],s[1],s[2]).length();const o=_r.set(s[4],s[5],s[6]).length(),a=_r.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ni.copy(this);const u=1/r,c=1/o,f=1/a;return ni.elements[0]*=u,ni.elements[1]*=u,ni.elements[2]*=u,ni.elements[4]*=c,ni.elements[5]*=c,ni.elements[6]*=c,ni.elements[8]*=f,ni.elements[9]*=f,ni.elements[10]*=f,e.setFromRotationMatrix(ni),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Gi){const l=this.elements,u=2*r/(e-t),c=2*r/(i-s),f=(e+t)/(e-t),h=(i+s)/(i-s);let d,g;if(a===Gi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===gl)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Gi){const l=this.elements,u=1/(e-t),c=1/(i-s),f=1/(o-r),h=(e+t)*u,d=(i+s)*c;let g,_;if(a===Gi)g=(o+r)*f,_=-2*f;else if(a===gl)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const _r=new O,ni=new De,MM=new O(0,0,0),SM=new O(1,1,1),rs=new O,Sa=new O,Ln=new O,Md=new De,Sd=new la;class Ti{constructor(t=0,e=0,i=0,s=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],u=s[5],c=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ae(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ae(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Md.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Md,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Sd.setFromEuler(this),this.setFromQuaternion(Sd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class jf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let bM=0;const bd=new O,gr=new la,Di=new De,ba=new O,go=new O,EM=new O,TM=new la,Ed=new O(1,0,0),Td=new O(0,1,0),wd=new O(0,0,1),Ad={type:"added"},wM={type:"removed"},vr={type:"childadded",child:null},_c={type:"childremoved",child:null};class sn extends io{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=aa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const t=new O,e=new Ti,i=new la,s=new O(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new De},normalMatrix:{value:new re}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gr.setFromAxisAngle(t,e),this.quaternion.multiply(gr),this}rotateOnWorldAxis(t,e){return gr.setFromAxisAngle(t,e),this.quaternion.premultiply(gr),this}rotateX(t){return this.rotateOnAxis(Ed,t)}rotateY(t){return this.rotateOnAxis(Td,t)}rotateZ(t){return this.rotateOnAxis(wd,t)}translateOnAxis(t,e){return bd.copy(t).applyQuaternion(this.quaternion),this.position.add(bd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ed,t)}translateY(t){return this.translateOnAxis(Td,t)}translateZ(t){return this.translateOnAxis(wd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ba.copy(t):ba.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(go,ba,this.up):Di.lookAt(ba,go,this.up),this.quaternion.setFromRotationMatrix(Di),s&&(Di.extractRotation(s.matrixWorld),gr.setFromRotationMatrix(Di),this.quaternion.premultiply(gr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ad),vr.child=t,this.dispatchEvent(vr),vr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(wM),_c.child=t,this.dispatchEvent(_c),_c.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Di.multiply(t.parent.matrixWorld)),t.applyMatrix4(Di),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ad),vr.child=t,this.dispatchEvent(vr),vr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,t,EM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,TM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),u=o(t.textures),c=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}sn.DEFAULT_UP=new O(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ii=new O,Ii=new O,gc=new O,Li=new O,xr=new O,yr=new O,Cd=new O,vc=new O,xc=new O,yc=new O,Mc=new be,Sc=new be,bc=new be;class ri{constructor(t=new O,e=new O,i=new O){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ii.subVectors(t,e),s.cross(ii);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){ii.subVectors(s,e),Ii.subVectors(i,e),gc.subVectors(t,e);const o=ii.dot(ii),a=ii.dot(Ii),l=ii.dot(gc),u=Ii.dot(Ii),c=Ii.dot(gc),f=o*u-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(u*l-a*c)*h,g=(o*c-a*l)*h;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Li.x),l.addScaledVector(o,Li.y),l.addScaledVector(a,Li.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Mc.setScalar(0),Sc.setScalar(0),bc.setScalar(0),Mc.fromBufferAttribute(t,e),Sc.fromBufferAttribute(t,i),bc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Mc,r.x),o.addScaledVector(Sc,r.y),o.addScaledVector(bc,r.z),o}static isFrontFacing(t,e,i,s){return ii.subVectors(i,e),Ii.subVectors(t,e),ii.cross(Ii).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ii.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),ii.cross(Ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ri.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ri.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return ri.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return ri.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ri.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;xr.subVectors(s,i),yr.subVectors(r,i),vc.subVectors(t,i);const l=xr.dot(vc),u=yr.dot(vc);if(l<=0&&u<=0)return e.copy(i);xc.subVectors(t,s);const c=xr.dot(xc),f=yr.dot(xc);if(c>=0&&f<=c)return e.copy(s);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),e.copy(i).addScaledVector(xr,o);yc.subVectors(t,r);const d=xr.dot(yc),g=yr.dot(yc);if(g>=0&&d<=g)return e.copy(r);const _=d*u-l*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),e.copy(i).addScaledVector(yr,a);const m=c*g-d*f;if(m<=0&&f-c>=0&&d-g>=0)return Cd.subVectors(r,s),a=(f-c)/(f-c+(d-g)),e.copy(s).addScaledVector(Cd,a);const p=1/(m+_+h);return o=_*p,a=h*p,e.copy(i).addScaledVector(xr,o).addScaledVector(yr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Y_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},Ea={h:0,s:0,l:0};function Ec(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class ne{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$n){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=pe.workingColorSpace){return this.r=t,this.g=e,this.b=i,pe.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=pe.workingColorSpace){if(t=cM(t,1),e=ae(e,0,1),i=ae(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Ec(o,r,t+1/3),this.g=Ec(o,r,t),this.b=Ec(o,r,t-1/3)}return pe.toWorkingColorSpace(this,s),this}setStyle(t,e=$n){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$n){const i=Y_[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wi(t.r),this.g=Wi(t.g),this.b=Wi(t.b),this}copyLinearToSRGB(t){return this.r=Vr(t.r),this.g=Vr(t.g),this.b=Vr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$n){return pe.fromWorkingColorSpace(on.copy(this),t),Math.round(ae(on.r*255,0,255))*65536+Math.round(ae(on.g*255,0,255))*256+Math.round(ae(on.b*255,0,255))}getHexString(t=$n){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.fromWorkingColorSpace(on.copy(this),e);const i=on.r,s=on.g,r=on.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=u,t.l=c,t}getRGB(t,e=pe.workingColorSpace){return pe.fromWorkingColorSpace(on.copy(this),e),t.r=on.r,t.g=on.g,t.b=on.b,t}getStyle(t=$n){pe.fromWorkingColorSpace(on.copy(this),t);const e=on.r,i=on.g,s=on.b;return t!==$n?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(os),this.setHSL(os.h+t,os.s+e,os.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(os),t.getHSL(Ea);const i=ac(os.h,Ea.h,e),s=ac(os.s,Ea.s,e),r=ac(os.l,Ea.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new ne;ne.NAMES=Y_;let AM=0;class so extends io{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:AM++}),this.uuid=aa(),this.name="",this.type="Material",this.blending=zr,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pu,this.blendDst=mu,this.blendEquation=Ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fr,this.stencilZFail=fr,this.stencilZPass=fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zr&&(i.blending=this.blending),this.side!==ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==pu&&(i.blendSrc=this.blendSrc),this.blendDst!==mu&&(i.blendDst=this.blendDst),this.blendEquation!==Ws&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==jr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==fr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==fr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class qe extends so{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=P_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const We=new O,Ta=new Ht;class Qn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=md,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ta.fromBufferAttribute(this,e),Ta.applyMatrix3(t),this.setXY(e,Ta.x,Ta.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyMatrix3(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=po(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Sn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=po(e,this.array)),e}setX(t,e){return this.normalized&&(e=Sn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=po(e,this.array)),e}setY(t,e){return this.normalized&&(e=Sn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=po(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Sn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=po(e,this.array)),e}setW(t,e){return this.normalized&&(e=Sn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Sn(e,this.array),i=Sn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Sn(e,this.array),i=Sn(i,this.array),s=Sn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Sn(e,this.array),i=Sn(i,this.array),s=Sn(s,this.array),r=Sn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==md&&(t.usage=this.usage),t}}class $_ extends Qn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class K_ extends Qn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ze extends Qn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let CM=0;const qn=new De,Tc=new sn,Mr=new O,Un=new ca,vo=new ca,je=new O;class yn extends io{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=aa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(W_(t)?K_:$_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new re().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qn.makeRotationFromQuaternion(t),this.applyMatrix4(qn),this}rotateX(t){return qn.makeRotationX(t),this.applyMatrix4(qn),this}rotateY(t){return qn.makeRotationY(t),this.applyMatrix4(qn),this}rotateZ(t){return qn.makeRotationZ(t),this.applyMatrix4(qn),this}translate(t,e,i){return qn.makeTranslation(t,e,i),this.applyMatrix4(qn),this}scale(t,e,i){return qn.makeScale(t,e,i),this.applyMatrix4(qn),this}lookAt(t){return Tc.lookAt(t),Tc.updateMatrix(),this.applyMatrix4(Tc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ze(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ca);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Un.setFromBufferAttribute(r),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const i=this.boundingSphere.center;if(Un.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];vo.setFromBufferAttribute(a),this.morphTargetsRelative?(je.addVectors(Un.min,vo.min),Un.expandByPoint(je),je.addVectors(Un.max,vo.max),Un.expandByPoint(je)):(Un.expandByPoint(vo.min),Un.expandByPoint(vo.max))}Un.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)je.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(je));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)je.fromBufferAttribute(a,u),l&&(Mr.fromBufferAttribute(t,u),je.add(Mr)),s=Math.max(s,i.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new O,l[P]=new O;const u=new O,c=new O,f=new O,h=new Ht,d=new Ht,g=new Ht,_=new O,m=new O;function p(P,x,S){u.fromBufferAttribute(i,P),c.fromBufferAttribute(i,x),f.fromBufferAttribute(i,S),h.fromBufferAttribute(r,P),d.fromBufferAttribute(r,x),g.fromBufferAttribute(r,S),c.sub(u),f.sub(u),d.sub(h),g.sub(h);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(L),m.copy(f).multiplyScalar(d.x).addScaledVector(c,-g.x).multiplyScalar(L),a[P].add(_),a[x].add(_),a[S].add(_),l[P].add(m),l[x].add(m),l[S].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let P=0,x=M.length;P<x;++P){const S=M[P],L=S.start,N=S.count;for(let k=L,Y=L+N;k<Y;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const y=new O,v=new O,R=new O,w=new O;function C(P){R.fromBufferAttribute(s,P),w.copy(R);const x=a[P];y.copy(x),y.sub(R.multiplyScalar(R.dot(x))).normalize(),v.crossVectors(w,x);const L=v.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,L)}for(let P=0,x=M.length;P<x;++P){const S=M[P],L=S.start,N=S.count;for(let k=L,Y=L+N;k<Y;k+=3)C(t.getX(k+0)),C(t.getX(k+1)),C(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const s=new O,r=new O,o=new O,a=new O,l=new O,u=new O,c=new O,f=new O;if(t)for(let h=0,d=t.count;h<d;h+=3){const g=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),c.subVectors(o,r),f.subVectors(s,r),c.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),c.subVectors(o,r),f.subVectors(s,r),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*c;for(let p=0;p<c;p++)h[g++]=u[d++]}return new Qn(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new yn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],u=t(l,i);e.setAttribute(a,u)}const r=this.morphAttributes;for(const a in r){const l=[],u=r[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],d=t(h,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const u=i[l];t.data.attributes[l]=u.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const d=u[f];c.push(d.toJSON(t.data))}c.length>0&&(s[l]=c,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const u in s){const c=s[u];this.setAttribute(u,c.clone(e))}const r=t.morphAttributes;for(const u in r){const c=[],f=r[u];for(let h=0,d=f.length;h<d;h++)c.push(f[h].clone(e));this.morphAttributes[u]=c}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rd=new De,Ns=new Kf,wa=new Nl,Pd=new O,Aa=new O,Ca=new O,Ra=new O,wc=new O,Pa=new O,Dd=new O,Da=new O;class Me extends sn{constructor(t=new yn,e=new qe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Pa.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const c=a[l],f=r[l];c!==0&&(wc.fromBufferAttribute(f,t),o?Pa.addScaledVector(wc,c):Pa.addScaledVector(wc.sub(e),c))}e.add(Pa)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wa.copy(i.boundingSphere),wa.applyMatrix4(r),Ns.copy(t.ray).recast(t.near),!(wa.containsPoint(Ns.origin)===!1&&(Ns.intersectSphere(wa,Pd)===null||Ns.origin.distanceToSquared(Pd)>(t.far-t.near)**2))&&(Rd.copy(r).invert(),Ns.copy(t.ray).applyMatrix4(Rd),!(i.boundingBox!==null&&Ns.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ns)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,u=r.attributes.uv,c=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,R=y;v<R;v+=3){const w=a.getX(v),C=a.getX(v+1),P=a.getX(v+2);s=Ia(this,p,t,i,u,c,f,w,C,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);s=Ia(this,o,t,i,u,c,f,M,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,R=y;v<R;v+=3){const w=v,C=v+1,P=v+2;s=Ia(this,p,t,i,u,c,f,w,C,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=m,y=m+1,v=m+2;s=Ia(this,o,t,i,u,c,f,M,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function RM(n,t,e,i,s,r,o,a){let l;if(t.side===nn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===ji,a),l===null)return null;Da.copy(a),Da.applyMatrix4(n.matrixWorld);const u=e.ray.origin.distanceTo(Da);return u<e.near||u>e.far?null:{distance:u,point:Da.clone(),object:n}}function Ia(n,t,e,i,s,r,o,a,l,u){n.getVertexPosition(a,Aa),n.getVertexPosition(l,Ca),n.getVertexPosition(u,Ra);const c=RM(n,t,e,i,Aa,Ca,Ra,Dd);if(c){const f=new O;ri.getBarycoord(Dd,Aa,Ca,Ra,f),s&&(c.uv=ri.getInterpolatedAttribute(s,a,l,u,f,new Ht)),r&&(c.uv1=ri.getInterpolatedAttribute(r,a,l,u,f,new Ht)),o&&(c.normal=ri.getInterpolatedAttribute(o,a,l,u,f,new O),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new O,materialIndex:0};ri.getNormal(Aa,Ca,Ra,h.normal),c.face=h,c.barycoord=f}return c}class ua extends yn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ze(u,3)),this.setAttribute("normal",new ze(c,3)),this.setAttribute("uv",new ze(f,2));function g(_,m,p,M,y,v,R,w,C,P,x){const S=v/C,L=R/P,N=v/2,k=R/2,Y=w/2,J=C+1,W=P+1;let K=0,B=0;const gt=new O;for(let mt=0;mt<W;mt++){const Tt=mt*L-k;for(let Ut=0;Ut<J;Ut++){const se=Ut*S-N;gt[_]=se*M,gt[m]=Tt*y,gt[p]=Y,u.push(gt.x,gt.y,gt.z),gt[_]=0,gt[m]=0,gt[p]=w>0?1:-1,c.push(gt.x,gt.y,gt.z),f.push(Ut/C),f.push(1-mt/P),K+=1}}for(let mt=0;mt<P;mt++)for(let Tt=0;Tt<C;Tt++){const Ut=h+Tt+J*mt,se=h+Tt+J*(mt+1),ot=h+(Tt+1)+J*(mt+1),ht=h+(Tt+1)+J*mt;l.push(Ut,se,ht),l.push(se,ot,ht),B+=6}a.addGroup(d,B,x),d+=B,h+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ua(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function no(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function pn(n){const t={};for(let e=0;e<n.length;e++){const i=no(n[e]);for(const s in i)t[s]=i[s]}return t}function PM(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function j_(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}const DM={clone:no,merge:pn};var IM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,LM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Es extends so{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=IM,this.fragmentShader=LM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=no(t.uniforms),this.uniformsGroups=PM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Z_ extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=Gi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const as=new O,Id=new Ht,Ld=new Ht;class wn extends Z_{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Qu*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(oc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qu*2*Math.atan(Math.tan(oc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){as.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(as.x,as.y).multiplyScalar(-t/as.z),as.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(as.x,as.y).multiplyScalar(-t/as.z)}getViewSize(t,e){return this.getViewBounds(t,Id,Ld),e.subVectors(Ld,Id)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(oc*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/u,s*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Sr=-90,br=1;class UM extends sn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new wn(Sr,br,t,e);s.layers=this.layers,this.add(s);const r=new wn(Sr,br,t,e);r.layers=this.layers,this.add(r);const o=new wn(Sr,br,t,e);o.layers=this.layers,this.add(o);const a=new wn(Sr,br,t,e);a.layers=this.layers,this.add(a);const l=new wn(Sr,br,t,e);l.layers=this.layers,this.add(l);const u=new wn(Sr,br,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const u of e)this.remove(u);if(t===Gi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===gl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,u,c]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,u),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,c),t.setRenderTarget(f,h,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class J_ extends xn{constructor(t,e,i,s,r,o,a,l,u,c){t=t!==void 0?t:[],e=e!==void 0?e:Zr,super(t,e,i,s,r,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class NM extends rr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new J_(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Mi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ua(5,5,5),r=new Es({name:"CubemapFromEquirect",uniforms:no(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:gs});r.uniforms.tEquirect.value=e;const o=new Me(s,r),a=e.minFilter;return e.minFilter===Ks&&(e.minFilter=Mi),new UM(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}class Zf{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ne(t),this.density=e}clone(){return new Zf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Q_ extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Ac=new O,OM=new O,FM=new re;class Hs{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Ac.subVectors(i,e).cross(OM.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ac),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||FM.getNormalMatrix(t),s=this.coplanarPoint(Ac).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Os=new Nl,La=new O;class Jf{constructor(t=new Hs,e=new Hs,i=new Hs,s=new Hs,r=new Hs,o=new Hs){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Gi){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],u=s[4],c=s[5],f=s[6],h=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],M=s[13],y=s[14],v=s[15];if(i[0].setComponents(l-r,h-u,m-d,v-p).normalize(),i[1].setComponents(l+r,h+u,m+d,v+p).normalize(),i[2].setComponents(l+o,h+c,m+g,v+M).normalize(),i[3].setComponents(l-o,h-c,m-g,v-M).normalize(),i[4].setComponents(l-a,h-f,m-_,v-y).normalize(),e===Gi)i[5].setComponents(l+a,h+f,m+_,v+y).normalize();else if(e===gl)i[5].setComponents(a,f,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Os.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Os.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Os)}intersectsSprite(t){return Os.center.set(0,0,0),Os.radius=.7071067811865476,Os.applyMatrix4(t.matrixWorld),this.intersectsSphere(Os)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(La.x=s.normal.x>0?t.max.x:t.min.x,La.y=s.normal.y>0?t.max.y:t.min.y,La.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(La)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class tf extends so{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ud=new De,ef=new Kf,Ua=new Nl,Na=new O;class Cc extends sn{constructor(t=new yn,e=new tf){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ua.copy(i.boundingSphere),Ua.applyMatrix4(s),Ua.radius+=r,t.ray.intersectsSphere(Ua)===!1)return;Ud.copy(s).invert(),ef.copy(t.ray).applyMatrix4(Ud);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=h,_=d;g<_;g++){const m=u.getX(g);Na.fromBufferAttribute(f,m),Nd(Na,m,l,s,t,e,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,_=d;g<_;g++)Na.fromBufferAttribute(f,g),Nd(Na,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Nd(n,t,e,i,s,r,o){const a=ef.distanceSqToPoint(n);if(a<e){const l=new O;ef.closestPointToPoint(n,l),l.applyMatrix4(i);const u=s.ray.origin.distanceTo(l);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class js extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Od extends xn{constructor(t,e,i,s,r,o,a,l,u){super(t,e,i,s,r,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class tg extends xn{constructor(t,e,i,s,r,o,a,l,u,c=Hr){if(c!==Hr&&c!==to)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Hr&&(i=sr),i===void 0&&c===to&&(i=Qr),super(null,s,r,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ci,this.minFilter=l!==void 0?l:ci,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Qi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,u;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),u=i[s]-o,u<0)a=s+1;else if(u>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const c=i[s],h=i[s+1]-c,d=(o-c)/h;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Ht:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new O,s=[],r=[],o=[],a=new O,l=new De;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new O)}r[0]=new O,o[0]=new O;let u=Number.MAX_VALUE;const c=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);c<=u&&(u=c,i.set(1,0,0)),f<=u&&(u=f,i.set(0,1,0)),h<=u&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ae(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(ae(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class eg extends Qi{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Ht){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=u-this.aY;l=h*c-d*f+this.aX,u=h*f+d*c+this.aY}return i.set(l,u)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class BM extends eg{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Qf(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,u){s(o,a,u*(a-r),u*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,u,c,f){let h=(o-r)/u-(a-r)/(u+c)+(a-o)/c,d=(a-o)/c-(l-o)/(c+f)+(l-a)/f;h*=c,d*=c,s(o,a,h,d)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const Oa=new O,Rc=new Qf,Pc=new Qf,Dc=new Qf;class ng extends Qi{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new O){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let u,c;this.closed||a>0?u=s[(a-1)%r]:(Oa.subVectors(s[0],s[1]).add(s[0]),u=Oa);const f=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?c=s[(a+2)%r]:(Oa.subVectors(s[r-1],s[r-2]).add(s[r-1]),c=Oa),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(u.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(c),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Rc.initNonuniformCatmullRom(u.x,f.x,h.x,c.x,g,_,m),Pc.initNonuniformCatmullRom(u.y,f.y,h.y,c.y,g,_,m),Dc.initNonuniformCatmullRom(u.z,f.z,h.z,c.z,g,_,m)}else this.curveType==="catmullrom"&&(Rc.initCatmullRom(u.x,f.x,h.x,c.x,this.tension),Pc.initCatmullRom(u.y,f.y,h.y,c.y,this.tension),Dc.initCatmullRom(u.z,f.z,h.z,c.z,this.tension));return i.set(Rc.calc(l),Pc.calc(l),Dc.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Fd(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function kM(n,t){const e=1-n;return e*e*t}function zM(n,t){return 2*(1-n)*n*t}function HM(n,t){return n*n*t}function Fo(n,t,e,i){return kM(n,t)+zM(n,e)+HM(n,i)}function VM(n,t){const e=1-n;return e*e*e*t}function GM(n,t){const e=1-n;return 3*e*e*n*t}function WM(n,t){return 3*(1-n)*n*n*t}function XM(n,t){return n*n*n*t}function Bo(n,t,e,i,s){return VM(n,t)+GM(n,e)+WM(n,i)+XM(n,s)}class qM extends Qi{constructor(t=new Ht,e=new Ht,i=new Ht,s=new Ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Ht){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Bo(t,s.x,r.x,o.x,a.x),Bo(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class YM extends Qi{constructor(t=new O,e=new O,i=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new O){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Bo(t,s.x,r.x,o.x,a.x),Bo(t,s.y,r.y,o.y,a.y),Bo(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class $M extends Qi{constructor(t=new Ht,e=new Ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ht){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class KM extends Qi{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jM extends Qi{constructor(t=new Ht,e=new Ht,i=new Ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Ht){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Fo(t,s.x,r.x,o.x),Fo(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ig extends Qi{constructor(t=new O,e=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new O){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Fo(t,s.x,r.x,o.x),Fo(t,s.y,r.y,o.y),Fo(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ZM extends Qi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ht){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],u=s[o],c=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(Fd(a,l.x,u.x,c.x,f.x),Fd(a,l.y,u.y,c.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new Ht().fromArray(s))}return this}}var JM=Object.freeze({__proto__:null,ArcCurve:BM,CatmullRomCurve3:ng,CubicBezierCurve:qM,CubicBezierCurve3:YM,EllipseCurve:eg,LineCurve:$M,LineCurve3:KM,QuadraticBezierCurve:jM,QuadraticBezierCurve3:ig,SplineCurve:ZM});class th extends yn{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const u=this;s=Math.floor(s),r=Math.floor(r);const c=[],f=[],h=[],d=[];let g=0;const _=[],m=i/2;let p=0;M(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(c),this.setAttribute("position",new ze(f,3)),this.setAttribute("normal",new ze(h,3)),this.setAttribute("uv",new ze(d,2));function M(){const v=new O,R=new O;let w=0;const C=(e-t)/i;for(let P=0;P<=r;P++){const x=[],S=P/r,L=S*(e-t)+t;for(let N=0;N<=s;N++){const k=N/s,Y=k*l+a,J=Math.sin(Y),W=Math.cos(Y);R.x=L*J,R.y=-S*i+m,R.z=L*W,f.push(R.x,R.y,R.z),v.set(J,C,W).normalize(),h.push(v.x,v.y,v.z),d.push(k,1-S),x.push(g++)}_.push(x)}for(let P=0;P<s;P++)for(let x=0;x<r;x++){const S=_[x][P],L=_[x+1][P],N=_[x+1][P+1],k=_[x][P+1];(t>0||x!==0)&&(c.push(S,L,k),w+=3),(e>0||x!==r-1)&&(c.push(L,N,k),w+=3)}u.addGroup(p,w,0),p+=w}function y(v){const R=g,w=new Ht,C=new O;let P=0;const x=v===!0?t:e,S=v===!0?1:-1;for(let N=1;N<=s;N++)f.push(0,m*S,0),h.push(0,S,0),d.push(.5,.5),g++;const L=g;for(let N=0;N<=s;N++){const Y=N/s*l+a,J=Math.cos(Y),W=Math.sin(Y);C.x=x*W,C.y=m*S,C.z=x*J,f.push(C.x,C.y,C.z),h.push(0,S,0),w.x=J*.5+.5,w.y=W*.5*S+.5,d.push(w.x,w.y),g++}for(let N=0;N<s;N++){const k=R+N,Y=L+N;v===!0?c.push(Y,Y+1,k):c.push(Y+1,Y,k),P+=3}u.addGroup(p,P,v===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new th(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class eh extends yn{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),u(i),c(),this.setAttribute("position",new ze(r,3)),this.setAttribute("normal",new ze(r.slice(),3)),this.setAttribute("uv",new ze(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const y=new O,v=new O,R=new O;for(let w=0;w<e.length;w+=3)d(e[w+0],y),d(e[w+1],v),d(e[w+2],R),l(y,v,R,M)}function l(M,y,v,R){const w=R+1,C=[];for(let P=0;P<=w;P++){C[P]=[];const x=M.clone().lerp(v,P/w),S=y.clone().lerp(v,P/w),L=w-P;for(let N=0;N<=L;N++)N===0&&P===w?C[P][N]=x:C[P][N]=x.clone().lerp(S,N/L)}for(let P=0;P<w;P++)for(let x=0;x<2*(w-P)-1;x++){const S=Math.floor(x/2);x%2===0?(h(C[P][S+1]),h(C[P+1][S]),h(C[P][S])):(h(C[P][S+1]),h(C[P+1][S+1]),h(C[P+1][S]))}}function u(M){const y=new O;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(M),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function c(){const M=new O;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];const v=m(M)/2/Math.PI+.5,R=p(M)/Math.PI+.5;o.push(v,1-R)}g(),f()}function f(){for(let M=0;M<o.length;M+=6){const y=o[M+0],v=o[M+2],R=o[M+4],w=Math.max(y,v,R),C=Math.min(y,v,R);w>.9&&C<.1&&(y<.2&&(o[M+0]+=1),v<.2&&(o[M+2]+=1),R<.2&&(o[M+4]+=1))}}function h(M){r.push(M.x,M.y,M.z)}function d(M,y){const v=M*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function g(){const M=new O,y=new O,v=new O,R=new O,w=new Ht,C=new Ht,P=new Ht;for(let x=0,S=0;x<r.length;x+=9,S+=6){M.set(r[x+0],r[x+1],r[x+2]),y.set(r[x+3],r[x+4],r[x+5]),v.set(r[x+6],r[x+7],r[x+8]),w.set(o[S+0],o[S+1]),C.set(o[S+2],o[S+3]),P.set(o[S+4],o[S+5]),R.copy(M).add(y).add(v).divideScalar(3);const L=m(R);_(w,S+0,M,L),_(C,S+2,y,L),_(P,S+4,v,L)}}function _(M,y,v,R){R<0&&M.x===1&&(o[y]=M.x-1),v.x===0&&v.z===0&&(o[y]=R/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eh(t.vertices,t.indices,t.radius,t.details)}}class nh extends eh{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new nh(t.radius,t.detail)}}class si extends yn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),u=a+1,c=l+1,f=t/a,h=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<c;p++){const M=p*h-o;for(let y=0;y<u;y++){const v=y*f-r;g.push(v,-M,0),_.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const y=M+u*p,v=M+u*(p+1),R=M+1+u*(p+1),w=M+1+u*p;d.push(y,v,w),d.push(v,R,w)}this.setIndex(d),this.setAttribute("position",new ze(g,3)),this.setAttribute("normal",new ze(_,3)),this.setAttribute("uv",new ze(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new si(t.width,t.height,t.widthSegments,t.heightSegments)}}class Xs extends yn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],f=new O,h=new O,d=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const M=[],y=p/i;let v=0;p===0&&o===0?v=.5/e:p===i&&l===Math.PI&&(v=-.5/e);for(let R=0;R<=e;R++){const w=R/e;f.x=-t*Math.cos(s+w*r)*Math.sin(o+y*a),f.y=t*Math.cos(o+y*a),f.z=t*Math.sin(s+w*r)*Math.sin(o+y*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),m.push(w+v,1-y),M.push(u++)}c.push(M)}for(let p=0;p<i;p++)for(let M=0;M<e;M++){const y=c[p][M+1],v=c[p][M],R=c[p+1][M],w=c[p+1][M+1];(p!==0||o>0)&&d.push(y,v,w),(p!==i-1||l<Math.PI)&&d.push(v,R,w)}this.setIndex(d),this.setAttribute("position",new ze(g,3)),this.setAttribute("normal",new ze(_,3)),this.setAttribute("uv",new ze(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xs(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class xl extends yn{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],u=[],c=new O,f=new O,h=new O;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){const _=g/s*r,m=d/i*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(_),f.y=(t+e*Math.cos(m))*Math.sin(_),f.z=e*Math.sin(m),a.push(f.x,f.y,f.z),c.x=t*Math.cos(_),c.y=t*Math.sin(_),h.subVectors(f,c).normalize(),l.push(h.x,h.y,h.z),u.push(g/s),u.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){const _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,M=(s+1)*d+g;o.push(_,m,M),o.push(m,p,M)}this.setIndex(o),this.setAttribute("position",new ze(a,3)),this.setAttribute("normal",new ze(l,3)),this.setAttribute("uv",new ze(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xl(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ih extends yn{constructor(t=new ig(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new O,l=new O,u=new Ht;let c=new O;const f=[],h=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new ze(f,3)),this.setAttribute("normal",new ze(h,3)),this.setAttribute("uv",new ze(d,2));function _(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),M(),p()}function m(y){c=t.getPointAt(y/e,c);const v=o.normals[y],R=o.binormals[y];for(let w=0;w<=s;w++){const C=w/s*Math.PI*2,P=Math.sin(C),x=-Math.cos(C);l.x=x*v.x+P*R.x,l.y=x*v.y+P*R.y,l.z=x*v.z+P*R.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=c.x+i*l.x,a.y=c.y+i*l.y,a.z=c.z+i*l.z,f.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=e;y++)for(let v=1;v<=s;v++){const R=(s+1)*(y-1)+(v-1),w=(s+1)*y+(v-1),C=(s+1)*y+v,P=(s+1)*(y-1)+v;g.push(R,w,P),g.push(w,C,P)}}function M(){for(let y=0;y<=e;y++)for(let v=0;v<=s;v++)u.x=y/e,u.y=v/s,d.push(u.x,u.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ih(new JM[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Bd extends so{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=V_,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class QM extends so{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class tS extends so{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class sh extends sn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ne(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Ic=new De,kd=new O,zd=new O;class sg{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jf,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;kd.setFromMatrixPosition(t.matrixWorld),e.position.copy(kd),zd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(zd),e.updateMatrixWorld(),Ic.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ic),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ic)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Hd=new De,xo=new O,Lc=new O;class eS extends sg{constructor(){super(new wn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ht(4,2),this._viewportCount=6,this._viewports=[new be(2,1,1,1),new be(0,1,1,1),new be(3,1,1,1),new be(1,1,1,1),new be(3,0,1,1),new be(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),xo.setFromMatrixPosition(t.matrixWorld),i.position.copy(xo),Lc.copy(i.position),Lc.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Lc),i.updateMatrixWorld(),s.makeTranslation(-xo.x,-xo.y,-xo.z),Hd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hd)}}class Vd extends sh{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new eS}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class rg extends Z_{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class nS extends sg{constructor(){super(new rg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gd extends sh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new nS}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class iS extends sh{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class sS extends wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class rS{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Wd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Wd(){return performance.now()}const Xd=new De;class og{constructor(t,e,i=0,s=1/0){this.ray=new Kf(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new jf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Xd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xd),this}intersectObject(t,e=!0,i=[]){return nf(t,this,i,e),i.sort(qd),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)nf(t[s],this,i,e);return i.sort(qd),i}}function qd(n,t){return n.distance-t.distance}function nf(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)nf(r[o],t,e,!0)}}function Yd(n,t,e,i){const s=oS(i);switch(e){case N_:return n*t;case F_:return n*t;case B_:return n*t*2;case k_:return n*t/s.components*s.byteLength;case qf:return n*t/s.components*s.byteLength;case z_:return n*t*2/s.components*s.byteLength;case Yf:return n*t*2/s.components*s.byteLength;case O_:return n*t*3/s.components*s.byteLength;case ai:return n*t*4/s.components*s.byteLength;case $f:return n*t*4/s.components*s.byteLength;case $a:case Ka:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ja:case Za:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Cu:case Pu:return Math.max(n,16)*Math.max(t,8)/4;case Au:case Ru:return Math.max(n,8)*Math.max(t,8)/2;case Du:case Iu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Lu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Uu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Nu:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ou:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Fu:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Bu:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ku:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case zu:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Hu:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Vu:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Gu:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Wu:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Xu:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case qu:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Yu:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ja:case $u:case Ku:return Math.ceil(n/4)*Math.ceil(t/4)*16;case H_:case ju:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Zu:case Ju:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function oS(n){switch(n){case Zi:case I_:return{byteLength:1,components:1};case ta:case L_:case oa:return{byteLength:2,components:1};case Wf:case Xf:return{byteLength:2,components:4};case sr:case Gf:case Vi:return{byteLength:4,components:1};case U_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vf);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ag(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function aS(n){const t=new WeakMap;function e(a,l){const u=a.array,c=a.usage,f=u.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,u,c),a.onUploadCallback();let d;if(u instanceof Float32Array)d=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)d=n.SHORT;else if(u instanceof Uint32Array)d=n.UNSIGNED_INT;else if(u instanceof Int32Array)d=n.INT;else if(u instanceof Int8Array)d=n.BYTE;else if(u instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:d,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l.updateRanges;if(n.bindBuffer(u,a),f.length===0)n.bufferSubData(u,0,c);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];n.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=t.get(a);if(u===void 0)t.set(a,e(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:s,remove:r,update:o}}var lS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,uS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_S=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,gS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,MS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,SS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ES=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,TS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,AS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,CS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,RS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,PS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,DS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,IS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,LS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,US=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,NS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,OS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,FS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,BS="gl_FragColor = linearToOutputTexel( gl_FragColor );",kS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,HS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,VS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,GS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,WS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,XS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,YS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$S=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,KS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ZS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,JS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,QS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,t1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,e1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,s1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,r1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,o1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,a1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,l1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,c1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,u1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,p1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,m1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,g1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,M1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,S1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,E1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,w1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,A1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,P1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,D1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,I1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,L1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,U1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,O1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,F1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,B1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,z1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,H1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,V1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,W1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,X1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,q1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Y1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,K1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,j1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Z1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Q1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ib=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ob=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ab=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ub=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,db=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_b=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Sb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Eb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ab=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Rb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Db=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ib=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ub=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ob=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,oe={alphahash_fragment:lS,alphahash_pars_fragment:cS,alphamap_fragment:uS,alphamap_pars_fragment:fS,alphatest_fragment:hS,alphatest_pars_fragment:dS,aomap_fragment:pS,aomap_pars_fragment:mS,batching_pars_vertex:_S,batching_vertex:gS,begin_vertex:vS,beginnormal_vertex:xS,bsdfs:yS,iridescence_fragment:MS,bumpmap_pars_fragment:SS,clipping_planes_fragment:bS,clipping_planes_pars_fragment:ES,clipping_planes_pars_vertex:TS,clipping_planes_vertex:wS,color_fragment:AS,color_pars_fragment:CS,color_pars_vertex:RS,color_vertex:PS,common:DS,cube_uv_reflection_fragment:IS,defaultnormal_vertex:LS,displacementmap_pars_vertex:US,displacementmap_vertex:NS,emissivemap_fragment:OS,emissivemap_pars_fragment:FS,colorspace_fragment:BS,colorspace_pars_fragment:kS,envmap_fragment:zS,envmap_common_pars_fragment:HS,envmap_pars_fragment:VS,envmap_pars_vertex:GS,envmap_physical_pars_fragment:t1,envmap_vertex:WS,fog_vertex:XS,fog_pars_vertex:qS,fog_fragment:YS,fog_pars_fragment:$S,gradientmap_pars_fragment:KS,lightmap_pars_fragment:jS,lights_lambert_fragment:ZS,lights_lambert_pars_fragment:JS,lights_pars_begin:QS,lights_toon_fragment:e1,lights_toon_pars_fragment:n1,lights_phong_fragment:i1,lights_phong_pars_fragment:s1,lights_physical_fragment:r1,lights_physical_pars_fragment:o1,lights_fragment_begin:a1,lights_fragment_maps:l1,lights_fragment_end:c1,logdepthbuf_fragment:u1,logdepthbuf_pars_fragment:f1,logdepthbuf_pars_vertex:h1,logdepthbuf_vertex:d1,map_fragment:p1,map_pars_fragment:m1,map_particle_fragment:_1,map_particle_pars_fragment:g1,metalnessmap_fragment:v1,metalnessmap_pars_fragment:x1,morphinstance_vertex:y1,morphcolor_vertex:M1,morphnormal_vertex:S1,morphtarget_pars_vertex:b1,morphtarget_vertex:E1,normal_fragment_begin:T1,normal_fragment_maps:w1,normal_pars_fragment:A1,normal_pars_vertex:C1,normal_vertex:R1,normalmap_pars_fragment:P1,clearcoat_normal_fragment_begin:D1,clearcoat_normal_fragment_maps:I1,clearcoat_pars_fragment:L1,iridescence_pars_fragment:U1,opaque_fragment:N1,packing:O1,premultiplied_alpha_fragment:F1,project_vertex:B1,dithering_fragment:k1,dithering_pars_fragment:z1,roughnessmap_fragment:H1,roughnessmap_pars_fragment:V1,shadowmap_pars_fragment:G1,shadowmap_pars_vertex:W1,shadowmap_vertex:X1,shadowmask_pars_fragment:q1,skinbase_vertex:Y1,skinning_pars_vertex:$1,skinning_vertex:K1,skinnormal_vertex:j1,specularmap_fragment:Z1,specularmap_pars_fragment:J1,tonemapping_fragment:Q1,tonemapping_pars_fragment:tb,transmission_fragment:eb,transmission_pars_fragment:nb,uv_pars_fragment:ib,uv_pars_vertex:sb,uv_vertex:rb,worldpos_vertex:ob,background_vert:ab,background_frag:lb,backgroundCube_vert:cb,backgroundCube_frag:ub,cube_vert:fb,cube_frag:hb,depth_vert:db,depth_frag:pb,distanceRGBA_vert:mb,distanceRGBA_frag:_b,equirect_vert:gb,equirect_frag:vb,linedashed_vert:xb,linedashed_frag:yb,meshbasic_vert:Mb,meshbasic_frag:Sb,meshlambert_vert:bb,meshlambert_frag:Eb,meshmatcap_vert:Tb,meshmatcap_frag:wb,meshnormal_vert:Ab,meshnormal_frag:Cb,meshphong_vert:Rb,meshphong_frag:Pb,meshphysical_vert:Db,meshphysical_frag:Ib,meshtoon_vert:Lb,meshtoon_frag:Ub,points_vert:Nb,points_frag:Ob,shadow_vert:Fb,shadow_frag:Bb,sprite_vert:kb,sprite_frag:zb},Rt={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},vi={basic:{uniforms:pn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:pn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new ne(0)}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:pn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:pn([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:pn([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new ne(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:pn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:pn([Rt.points,Rt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:pn([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:pn([Rt.common,Rt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:pn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:pn([Rt.sprite,Rt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distanceRGBA:{uniforms:pn([Rt.common,Rt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distanceRGBA_vert,fragmentShader:oe.distanceRGBA_frag},shadow:{uniforms:pn([Rt.lights,Rt.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};vi.physical={uniforms:pn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};const Fa={r:0,b:0,g:0},Fs=new Ti,Hb=new De;function Vb(n,t,e,i,s,r,o){const a=new ne(0);let l=r===!0?0:1,u,c,f=null,h=0,d=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function _(y){let v=!1;const R=g(y);R===null?p(a,l):R&&R.isColor&&(p(R,1),v=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,v){const R=g(v);R&&(R.isCubeTexture||R.mapping===Ul)?(c===void 0&&(c=new Me(new ua(1,1,1),new Es({name:"BackgroundCubeMaterial",uniforms:no(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),Fs.copy(v.backgroundRotation),Fs.x*=-1,Fs.y*=-1,Fs.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Fs.y*=-1,Fs.z*=-1),c.material.uniforms.envMap.value=R,c.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Hb.makeRotationFromEuler(Fs)),c.material.toneMapped=pe.getTransfer(R.colorSpace)!==Se,(f!==R||h!==R.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=R,h=R.version,d=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):R&&R.isTexture&&(u===void 0&&(u=new Me(new si(2,2),new Es({name:"BackgroundMaterial",uniforms:no(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=R,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=pe.getTransfer(R.colorSpace)!==Se,R.matrixAutoUpdate===!0&&R.updateMatrix(),u.material.uniforms.uvTransform.value.copy(R.matrix),(f!==R||h!==R.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=R,h=R.version,d=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null))}function p(y,v){y.getRGB(Fa,j_(n)),i.buffers.color.setClear(Fa.r,Fa.g,Fa.b,v,o)}function M(){c!==void 0&&(c.geometry.dispose(),c.material.dispose()),u!==void 0&&(u.geometry.dispose(),u.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:_,addToRenderList:m,dispose:M}}function Gb(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(S,L,N,k,Y){let J=!1;const W=f(k,N,L);r!==W&&(r=W,u(r.object)),J=d(S,k,N,Y),J&&g(S,k,N,Y),Y!==null&&t.update(Y,n.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,v(S,L,N,k),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return n.createVertexArray()}function u(S){return n.bindVertexArray(S)}function c(S){return n.deleteVertexArray(S)}function f(S,L,N){const k=N.wireframe===!0;let Y=i[S.id];Y===void 0&&(Y={},i[S.id]=Y);let J=Y[L.id];J===void 0&&(J={},Y[L.id]=J);let W=J[k];return W===void 0&&(W=h(l()),J[k]=W),W}function h(S){const L=[],N=[],k=[];for(let Y=0;Y<e;Y++)L[Y]=0,N[Y]=0,k[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:k,object:S,attributes:{},index:null}}function d(S,L,N,k){const Y=r.attributes,J=L.attributes;let W=0;const K=N.getAttributes();for(const B in K)if(K[B].location>=0){const mt=Y[B];let Tt=J[B];if(Tt===void 0&&(B==="instanceMatrix"&&S.instanceMatrix&&(Tt=S.instanceMatrix),B==="instanceColor"&&S.instanceColor&&(Tt=S.instanceColor)),mt===void 0||mt.attribute!==Tt||Tt&&mt.data!==Tt.data)return!0;W++}return r.attributesNum!==W||r.index!==k}function g(S,L,N,k){const Y={},J=L.attributes;let W=0;const K=N.getAttributes();for(const B in K)if(K[B].location>=0){let mt=J[B];mt===void 0&&(B==="instanceMatrix"&&S.instanceMatrix&&(mt=S.instanceMatrix),B==="instanceColor"&&S.instanceColor&&(mt=S.instanceColor));const Tt={};Tt.attribute=mt,mt&&mt.data&&(Tt.data=mt.data),Y[B]=Tt,W++}r.attributes=Y,r.attributesNum=W,r.index=k}function _(){const S=r.newAttributes;for(let L=0,N=S.length;L<N;L++)S[L]=0}function m(S){p(S,0)}function p(S,L){const N=r.newAttributes,k=r.enabledAttributes,Y=r.attributeDivisors;N[S]=1,k[S]===0&&(n.enableVertexAttribArray(S),k[S]=1),Y[S]!==L&&(n.vertexAttribDivisor(S,L),Y[S]=L)}function M(){const S=r.newAttributes,L=r.enabledAttributes;for(let N=0,k=L.length;N<k;N++)L[N]!==S[N]&&(n.disableVertexAttribArray(N),L[N]=0)}function y(S,L,N,k,Y,J,W){W===!0?n.vertexAttribIPointer(S,L,N,Y,J):n.vertexAttribPointer(S,L,N,k,Y,J)}function v(S,L,N,k){_();const Y=k.attributes,J=N.getAttributes(),W=L.defaultAttributeValues;for(const K in J){const B=J[K];if(B.location>=0){let gt=Y[K];if(gt===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(gt=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(gt=S.instanceColor)),gt!==void 0){const mt=gt.normalized,Tt=gt.itemSize,Ut=t.get(gt);if(Ut===void 0)continue;const se=Ut.buffer,ot=Ut.type,ht=Ut.bytesPerElement,Nt=ot===n.INT||ot===n.UNSIGNED_INT||gt.gpuType===Gf;if(gt.isInterleavedBufferAttribute){const Et=gt.data,kt=Et.stride,Xt=gt.offset;if(Et.isInstancedInterleavedBuffer){for(let $t=0;$t<B.locationSize;$t++)p(B.location+$t,Et.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let $t=0;$t<B.locationSize;$t++)m(B.location+$t);n.bindBuffer(n.ARRAY_BUFFER,se);for(let $t=0;$t<B.locationSize;$t++)y(B.location+$t,Tt/B.locationSize,ot,mt,kt*ht,(Xt+Tt/B.locationSize*$t)*ht,Nt)}else{if(gt.isInstancedBufferAttribute){for(let Et=0;Et<B.locationSize;Et++)p(B.location+Et,gt.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Et=0;Et<B.locationSize;Et++)m(B.location+Et);n.bindBuffer(n.ARRAY_BUFFER,se);for(let Et=0;Et<B.locationSize;Et++)y(B.location+Et,Tt/B.locationSize,ot,mt,Tt*ht,Tt/B.locationSize*Et*ht,Nt)}}else if(W!==void 0){const mt=W[K];if(mt!==void 0)switch(mt.length){case 2:n.vertexAttrib2fv(B.location,mt);break;case 3:n.vertexAttrib3fv(B.location,mt);break;case 4:n.vertexAttrib4fv(B.location,mt);break;default:n.vertexAttrib1fv(B.location,mt)}}}}M()}function R(){P();for(const S in i){const L=i[S];for(const N in L){const k=L[N];for(const Y in k)c(k[Y].object),delete k[Y];delete L[N]}delete i[S]}}function w(S){if(i[S.id]===void 0)return;const L=i[S.id];for(const N in L){const k=L[N];for(const Y in k)c(k[Y].object),delete k[Y];delete L[N]}delete i[S.id]}function C(S){for(const L in i){const N=i[L];if(N[S.id]===void 0)continue;const k=N[S.id];for(const Y in k)c(k[Y].object),delete k[Y];delete N[S.id]}}function P(){x(),o=!0,r!==s&&(r=s,u(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:x,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function Wb(n,t,e){let i;function s(u){i=u}function r(u,c){n.drawArrays(i,u,c),e.update(c,i,1)}function o(u,c,f){f!==0&&(n.drawArraysInstanced(i,u,c,f),e.update(c,i,f))}function a(u,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let d=0;for(let g=0;g<f;g++)d+=c[g];e.update(d,i,1)}function l(u,c,f,h){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<u.length;g++)o(u[g],c[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(i,u,0,c,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=c[_]*h[_];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Xb(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==ai&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const P=C===oa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Zi&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Vi&&!P)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:R,maxSamples:w}}function qb(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Hs,a=new re,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||s;return s=h,i=f.length,d},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=c(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?c(null):u();else{const M=r?0:i,y=M*4;let v=p.clippingState||null;l.value=v,v=c(g,h,y,d);for(let R=0;R!==y;++R)v[R]=e[R];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=d;y!==_;++y,v+=4)o.copy(f[y]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Yb(n){let t=new WeakMap;function e(o,a){return a===bu?o.mapping=Zr:a===Eu&&(o.mapping=Jr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===bu||a===Eu)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new NM(l.height);return u.fromEquirectangularTexture(n,o),t.set(o,u),o.addEventListener("dispose",s),e(u.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const Dr=4,$d=[.125,.215,.35,.446,.526,.582],qs=20,Uc=new rg,Kd=new ne;let Nc=null,Oc=0,Fc=0,Bc=!1;const Vs=(1+Math.sqrt(5))/2,Er=1/Vs,jd=[new O(-Vs,Er,0),new O(Vs,Er,0),new O(-Er,0,Vs),new O(Er,0,Vs),new O(0,Vs,-Er),new O(0,Vs,Er),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class Zd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Nc=this._renderer.getRenderTarget(),Oc=this._renderer.getActiveCubeFace(),Fc=this._renderer.getActiveMipmapLevel(),Bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Nc,Oc,Fc),this._renderer.xr.enabled=Bc,t.scissorTest=!1,Ba(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zr||t.mapping===Jr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Nc=this._renderer.getRenderTarget(),Oc=this._renderer.getActiveCubeFace(),Fc=this._renderer.getActiveMipmapLevel(),Bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Mi,minFilter:Mi,generateMipmaps:!1,type:oa,format:ai,colorSpace:eo,depthBuffer:!1},s=Jd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jd(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$b(r)),this._blurMaterial=Kb(r,t,e)}return s}_compileMaterial(t){const e=new Me(this._lodPlanes[0],t);this._renderer.compile(e,Uc)}_sceneToCubeUV(t,e,i,s){const a=new wn(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(Kd),c.toneMapping=vs,c.autoClear=!1;const d=new qe({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),g=new Me(new ua,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(Kd),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(u[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,u[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,u[p]));const y=this._cubeSize;Ba(s,M*y,p>2?y:0,y,y),c.setRenderTarget(s),_&&c.render(g,a),c.render(t,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=h,c.autoClear=f,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Zr||t.mapping===Jr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=tp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Me(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ba(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Uc)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=jd[(s-r-1)%jd.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Me(this._lodPlanes[s],u),h=u.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*qs-1),_=r/g,m=isFinite(r)?1+Math.floor(c*_):qs;m>qs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qs}`);const p=[];let M=0;for(let C=0;C<qs;++C){const P=C/_,x=Math.exp(-P*P/2);p.push(x),C===0?M+=x:C<m&&(M+=2*x)}for(let C=0;C<p.length;C++)p[C]=p[C]/M;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-i;const v=this._sizeLods[s],R=3*v*(s>y-Dr?s-y+Dr:0),w=4*(this._cubeSize-v);Ba(e,R,w,3*v,2*v),l.setRenderTarget(e),l.render(f,Uc)}}function $b(n){const t=[],e=[],i=[];let s=n;const r=n-Dr+1+$d.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Dr?l=$d[o-n+Dr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],d=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*d),y=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let w=0;w<d;w++){const C=w%3*2/3-1,P=w>2?0:-1,x=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];M.set(x,_*g*w),y.set(h,m*g*w);const S=[w,w,w,w,w,w];v.set(S,p*g*w)}const R=new yn;R.setAttribute("position",new Qn(M,_)),R.setAttribute("uv",new Qn(y,m)),R.setAttribute("faceIndex",new Qn(v,p)),t.push(R),s>Dr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Jd(n,t,e){const i=new rr(n,t,e);return i.texture.mapping=Ul,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ba(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Kb(n,t,e){const i=new Float32Array(qs),s=new O(0,1,0);return new Es({name:"SphericalGaussianBlur",defines:{n:qs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gs,depthTest:!1,depthWrite:!1})}function Qd(){return new Es({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gs,depthTest:!1,depthWrite:!1})}function tp(){return new Es({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gs,depthTest:!1,depthWrite:!1})}function rh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jb(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===bu||l===Eu,c=l===Zr||l===Jr;if(u||c){let f=t.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new Zd(n)),f=u?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return u&&d&&d.height>0||c&&d&&s(d)?(e===null&&(e=new Zd(n)),f=u?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function r(a){const l=a.target;l.removeEventListener("dispose",r);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Zb(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Cr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Jb(n,t,e,i){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(t.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)t.update(h[d],n.ARRAY_BUFFER)}function u(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const M=d.array;_=d.version;for(let y=0,v=M.length;y<v;y+=3){const R=M[y+0],w=M[y+1],C=M[y+2];h.push(R,w,w,C,C,R)}}else if(g!==void 0){const M=g.array;_=g.version;for(let y=0,v=M.length/3-1;y<v;y+=3){const R=y+0,w=y+1,C=y+2;h.push(R,w,w,C,C,R)}}else return;const m=new(W_(h)?K_:$_)(h,1);m.version=_;const p=r.get(f);p&&t.remove(p),r.set(f,m)}function c(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&u(f)}else u(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function Qb(n,t,e){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,r,h*o),e.update(d,i,1)}function u(h,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,h*o,g),e.update(d,i,g))}function c(h,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,i,1)}function f(h,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)u(h[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,h,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=d[M]*_[M];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function tE(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function eE(n,t,e){const i=new WeakMap,s=new be;function r(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let S=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var d=S;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let R=a.attributes.position.count*v,w=1;R>t.maxTextureSize&&(w=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const C=new Float32Array(R*w*4*f),P=new q_(C,R,w,f);P.type=Vi,P.needsUpdate=!0;const x=v*4;for(let L=0;L<f;L++){const N=p[L],k=M[L],Y=y[L],J=R*w*4*L;for(let W=0;W<N.count;W++){const K=W*x;g===!0&&(s.fromBufferAttribute(N,W),C[J+K+0]=s.x,C[J+K+1]=s.y,C[J+K+2]=s.z,C[J+K+3]=0),_===!0&&(s.fromBufferAttribute(k,W),C[J+K+4]=s.x,C[J+K+5]=s.y,C[J+K+6]=s.z,C[J+K+7]=0),m===!0&&(s.fromBufferAttribute(Y,W),C[J+K+8]=s.x,C[J+K+9]=s.y,C[J+K+10]=s.z,C[J+K+11]=Y.itemSize===4?s.w:1)}}h={count:f,texture:P,size:new Ht(R,w)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function nE(n,t,e,i){let s=new WeakMap;function r(l){const u=i.render.frame,c=l.geometry,f=t.get(l,c);if(s.get(f)!==u&&(t.update(f),s.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return f}function o(){s=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:r,dispose:o}}const lg=new xn,ep=new tg(1,1),cg=new q_,ug=new xM,fg=new J_,np=[],ip=[],sp=new Float32Array(16),rp=new Float32Array(9),op=new Float32Array(4);function ro(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=np[s];if(r===void 0&&(r=new Float32Array(s),np[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function $e(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ke(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ol(n,t){let e=ip[t];e===void 0&&(e=new Int32Array(t),ip[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function iE(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function sE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;n.uniform2fv(this.addr,t),Ke(e,t)}}function rE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if($e(e,t))return;n.uniform3fv(this.addr,t),Ke(e,t)}}function oE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;n.uniform4fv(this.addr,t),Ke(e,t)}}function aE(n,t){const e=this.cache,i=t.elements;if(i===void 0){if($e(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if($e(e,i))return;op.set(i),n.uniformMatrix2fv(this.addr,!1,op),Ke(e,i)}}function lE(n,t){const e=this.cache,i=t.elements;if(i===void 0){if($e(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if($e(e,i))return;rp.set(i),n.uniformMatrix3fv(this.addr,!1,rp),Ke(e,i)}}function cE(n,t){const e=this.cache,i=t.elements;if(i===void 0){if($e(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if($e(e,i))return;sp.set(i),n.uniformMatrix4fv(this.addr,!1,sp),Ke(e,i)}}function uE(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function fE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;n.uniform2iv(this.addr,t),Ke(e,t)}}function hE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;n.uniform3iv(this.addr,t),Ke(e,t)}}function dE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;n.uniform4iv(this.addr,t),Ke(e,t)}}function pE(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function mE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;n.uniform2uiv(this.addr,t),Ke(e,t)}}function _E(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;n.uniform3uiv(this.addr,t),Ke(e,t)}}function gE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;n.uniform4uiv(this.addr,t),Ke(e,t)}}function vE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(ep.compareFunction=G_,r=ep):r=lg,e.setTexture2D(t||r,s)}function xE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||ug,s)}function yE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||fg,s)}function ME(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||cg,s)}function SE(n){switch(n){case 5126:return iE;case 35664:return sE;case 35665:return rE;case 35666:return oE;case 35674:return aE;case 35675:return lE;case 35676:return cE;case 5124:case 35670:return uE;case 35667:case 35671:return fE;case 35668:case 35672:return hE;case 35669:case 35673:return dE;case 5125:return pE;case 36294:return mE;case 36295:return _E;case 36296:return gE;case 35678:case 36198:case 36298:case 36306:case 35682:return vE;case 35679:case 36299:case 36307:return xE;case 35680:case 36300:case 36308:case 36293:return yE;case 36289:case 36303:case 36311:case 36292:return ME}}function bE(n,t){n.uniform1fv(this.addr,t)}function EE(n,t){const e=ro(t,this.size,2);n.uniform2fv(this.addr,e)}function TE(n,t){const e=ro(t,this.size,3);n.uniform3fv(this.addr,e)}function wE(n,t){const e=ro(t,this.size,4);n.uniform4fv(this.addr,e)}function AE(n,t){const e=ro(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function CE(n,t){const e=ro(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function RE(n,t){const e=ro(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function PE(n,t){n.uniform1iv(this.addr,t)}function DE(n,t){n.uniform2iv(this.addr,t)}function IE(n,t){n.uniform3iv(this.addr,t)}function LE(n,t){n.uniform4iv(this.addr,t)}function UE(n,t){n.uniform1uiv(this.addr,t)}function NE(n,t){n.uniform2uiv(this.addr,t)}function OE(n,t){n.uniform3uiv(this.addr,t)}function FE(n,t){n.uniform4uiv(this.addr,t)}function BE(n,t,e){const i=this.cache,s=t.length,r=Ol(e,s);$e(i,r)||(n.uniform1iv(this.addr,r),Ke(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||lg,r[o])}function kE(n,t,e){const i=this.cache,s=t.length,r=Ol(e,s);$e(i,r)||(n.uniform1iv(this.addr,r),Ke(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ug,r[o])}function zE(n,t,e){const i=this.cache,s=t.length,r=Ol(e,s);$e(i,r)||(n.uniform1iv(this.addr,r),Ke(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||fg,r[o])}function HE(n,t,e){const i=this.cache,s=t.length,r=Ol(e,s);$e(i,r)||(n.uniform1iv(this.addr,r),Ke(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||cg,r[o])}function VE(n){switch(n){case 5126:return bE;case 35664:return EE;case 35665:return TE;case 35666:return wE;case 35674:return AE;case 35675:return CE;case 35676:return RE;case 5124:case 35670:return PE;case 35667:case 35671:return DE;case 35668:case 35672:return IE;case 35669:case 35673:return LE;case 5125:return UE;case 36294:return NE;case 36295:return OE;case 36296:return FE;case 35678:case 36198:case 36298:case 36306:case 35682:return BE;case 35679:case 36299:case 36307:return kE;case 35680:case 36300:case 36308:case 36293:return zE;case 36289:case 36303:case 36311:case 36292:return HE}}class GE{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=SE(e.type)}}class WE{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=VE(e.type)}}class XE{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const kc=/(\w+)(\])?(\[|\.)?/g;function ap(n,t){n.seq.push(t),n.map[t.id]=t}function qE(n,t,e){const i=n.name,s=i.length;for(kc.lastIndex=0;;){const r=kc.exec(i),o=kc.lastIndex;let a=r[1];const l=r[2]==="]",u=r[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===s){ap(e,u===void 0?new GE(a,n,t):new WE(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new XE(a),ap(e,f)),e=f}}}class Qa{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);qE(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function lp(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const YE=37297;let $E=0;function KE(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const cp=new re;function jE(n){pe._getMatrix(cp,pe.workingColorSpace,n);const t=`mat3( ${cp.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(n)){case _l:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function up(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+KE(n.getShaderSource(t),o)}else return s}function ZE(n,t){const e=jE(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function JE(n,t){let e;switch(t){case Xy:e="Linear";break;case qy:e="Reinhard";break;case Yy:e="Cineon";break;case $y:e="ACESFilmic";break;case jy:e="AgX";break;case Zy:e="Neutral";break;case Ky:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ka=new O;function QE(){pe.getLuminanceCoefficients(ka);const n=ka.x.toFixed(4),t=ka.y.toFixed(4),e=ka.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tT(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bo).join(`
`)}function eT(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function nT(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function bo(n){return n!==""}function fp(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hp(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const iT=/^[ \t]*#include +<([\w\d./]+)>/gm;function sf(n){return n.replace(iT,rT)}const sT=new Map;function rT(n,t){let e=oe[t];if(e===void 0){const i=sT.get(t);if(i!==void 0)e=oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return sf(e)}const oT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dp(n){return n.replace(oT,aT)}function aT(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function pp(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function lT(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===R_?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ey?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ui&&(t="SHADOWMAP_TYPE_VSM"),t}function cT(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Zr:case Jr:t="ENVMAP_TYPE_CUBE";break;case Ul:t="ENVMAP_TYPE_CUBE_UV";break}return t}function uT(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Jr:t="ENVMAP_MODE_REFRACTION";break}return t}function fT(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case P_:t="ENVMAP_BLENDING_MULTIPLY";break;case Gy:t="ENVMAP_BLENDING_MIX";break;case Wy:t="ENVMAP_BLENDING_ADD";break}return t}function hT(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function dT(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=lT(e),u=cT(e),c=uT(e),f=fT(e),h=hT(e),d=tT(e),g=eT(r),_=s.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(bo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(bo).join(`
`),p.length>0&&(p+=`
`)):(m=[pp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bo).join(`
`),p=[pp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vs?"#define TONE_MAPPING":"",e.toneMapping!==vs?oe.tonemapping_pars_fragment:"",e.toneMapping!==vs?JE("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,ZE("linearToOutputTexel",e.outputColorSpace),QE(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(bo).join(`
`)),o=sf(o),o=fp(o,e),o=hp(o,e),a=sf(a),a=fp(a,e),a=hp(a,e),o=dp(o),a=dp(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===_d?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_d?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=M+m+o,v=M+p+a,R=lp(s,s.VERTEX_SHADER,y),w=lp(s,s.FRAGMENT_SHADER,v);s.attachShader(_,R),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(L){if(n.debug.checkShaderErrors){const N=s.getProgramInfoLog(_).trim(),k=s.getShaderInfoLog(R).trim(),Y=s.getShaderInfoLog(w).trim();let J=!0,W=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,R,w);else{const K=up(s,R,"vertex"),B=up(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+N+`
`+K+`
`+B)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(k===""||Y==="")&&(W=!1);W&&(L.diagnostics={runnable:J,programLog:N,vertexShader:{log:k,prefix:m},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(R),s.deleteShader(w),P=new Qa(s,_),x=nT(s,_)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let x;this.getAttributes=function(){return x===void 0&&C(this),x};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,YE)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$E++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=w,this}let pT=0;class mT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new _T(t),e.set(t,i)),i}}class _T{constructor(t){this.id=pT++,this.code=t,this.usedTimes=0}}function gT(n,t,e,i,s,r,o){const a=new jf,l=new mT,u=new Set,c=[],f=s.logarithmicDepthBuffer,h=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return u.add(x),x===0?"uv":`uv${x}`}function m(x,S,L,N,k){const Y=N.fog,J=k.geometry,W=x.isMeshStandardMaterial?N.environment:null,K=(x.isMeshStandardMaterial?e:t).get(x.envMap||W),B=K&&K.mapping===Ul?K.image.height:null,gt=g[x.type];x.precision!==null&&(d=s.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const mt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Tt=mt!==void 0?mt.length:0;let Ut=0;J.morphAttributes.position!==void 0&&(Ut=1),J.morphAttributes.normal!==void 0&&(Ut=2),J.morphAttributes.color!==void 0&&(Ut=3);let se,ot,ht,Nt;if(gt){const pt=vi[gt];se=pt.vertexShader,ot=pt.fragmentShader}else se=x.vertexShader,ot=x.fragmentShader,l.update(x),ht=l.getVertexShaderID(x),Nt=l.getFragmentShaderID(x);const Et=n.getRenderTarget(),kt=n.state.buffers.depth.getReversed(),Xt=k.isInstancedMesh===!0,$t=k.isBatchedMesh===!0,_e=!!x.map,A=!!x.matcap,U=!!K,E=!!x.aoMap,nt=!!x.lightMap,q=!!x.bumpMap,j=!!x.normalMap,st=!!x.displacementMap,lt=!!x.emissiveMap,Q=!!x.metalnessMap,T=!!x.roughnessMap,b=x.anisotropy>0,F=x.clearcoat>0,X=x.dispersion>0,Z=x.iridescence>0,$=x.sheen>0,xt=x.transmission>0,ut=b&&!!x.anisotropyMap,_t=F&&!!x.clearcoatMap,Gt=F&&!!x.clearcoatNormalMap,dt=F&&!!x.clearcoatRoughnessMap,At=Z&&!!x.iridescenceMap,Bt=Z&&!!x.iridescenceThicknessMap,qt=$&&!!x.sheenColorMap,wt=$&&!!x.sheenRoughnessMap,Zt=!!x.specularMap,Vt=!!x.specularColorMap,ue=!!x.specularIntensityMap,z=xt&&!!x.transmissionMap,Ct=xt&&!!x.thicknessMap,at=!!x.gradientMap,ct=!!x.alphaMap,Pt=x.alphaTest>0,Dt=!!x.alphaHash,V=!!x.extensions;let rt=vs;x.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(rt=n.toneMapping);const ft={shaderID:gt,shaderType:x.type,shaderName:x.name,vertexShader:se,fragmentShader:ot,defines:x.defines,customVertexShaderID:ht,customFragmentShaderID:Nt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:$t,batchingColor:$t&&k._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&k.instanceColor!==null,instancingMorph:Xt&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Et===null?n.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:eo,alphaToCoverage:!!x.alphaToCoverage,map:_e,matcap:A,envMap:U,envMapMode:U&&K.mapping,envMapCubeUVHeight:B,aoMap:E,lightMap:nt,bumpMap:q,normalMap:j,displacementMap:h&&st,emissiveMap:lt,normalMapObjectSpace:j&&x.normalMapType===eM,normalMapTangentSpace:j&&x.normalMapType===V_,metalnessMap:Q,roughnessMap:T,anisotropy:b,anisotropyMap:ut,clearcoat:F,clearcoatMap:_t,clearcoatNormalMap:Gt,clearcoatRoughnessMap:dt,dispersion:X,iridescence:Z,iridescenceMap:At,iridescenceThicknessMap:Bt,sheen:$,sheenColorMap:qt,sheenRoughnessMap:wt,specularMap:Zt,specularColorMap:Vt,specularIntensityMap:ue,transmission:xt,transmissionMap:z,thicknessMap:Ct,gradientMap:at,opaque:x.transparent===!1&&x.blending===zr&&x.alphaToCoverage===!1,alphaMap:ct,alphaTest:Pt,alphaHash:Dt,combine:x.combine,mapUv:_e&&_(x.map.channel),aoMapUv:E&&_(x.aoMap.channel),lightMapUv:nt&&_(x.lightMap.channel),bumpMapUv:q&&_(x.bumpMap.channel),normalMapUv:j&&_(x.normalMap.channel),displacementMapUv:st&&_(x.displacementMap.channel),emissiveMapUv:lt&&_(x.emissiveMap.channel),metalnessMapUv:Q&&_(x.metalnessMap.channel),roughnessMapUv:T&&_(x.roughnessMap.channel),anisotropyMapUv:ut&&_(x.anisotropyMap.channel),clearcoatMapUv:_t&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:wt&&_(x.sheenRoughnessMap.channel),specularMapUv:Zt&&_(x.specularMap.channel),specularColorMapUv:Vt&&_(x.specularColorMap.channel),specularIntensityMapUv:ue&&_(x.specularIntensityMap.channel),transmissionMapUv:z&&_(x.transmissionMap.channel),thicknessMapUv:Ct&&_(x.thicknessMap.channel),alphaMapUv:ct&&_(x.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(j||b),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!J.attributes.uv&&(_e||ct),fog:!!Y,useFog:x.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:kt,skinning:k.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Ut,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:rt,decodeVideoTexture:_e&&x.map.isVideoTexture===!0&&pe.getTransfer(x.map.colorSpace)===Se,decodeVideoTextureEmissive:lt&&x.emissiveMap.isVideoTexture===!0&&pe.getTransfer(x.emissiveMap.colorSpace)===Se,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===tn,flipSided:x.side===nn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:V&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(V&&x.extensions.multiDraw===!0||$t)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ft.vertexUv1s=u.has(1),ft.vertexUv2s=u.has(2),ft.vertexUv3s=u.has(3),u.clear(),ft}function p(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)S.push(L),S.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(M(S,x),y(S,x),S.push(n.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function M(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function y(x,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),x.push(a.mask)}function v(x){const S=g[x.type];let L;if(S){const N=vi[S];L=DM.clone(N.uniforms)}else L=x.uniforms;return L}function R(x,S){let L;for(let N=0,k=c.length;N<k;N++){const Y=c[N];if(Y.cacheKey===S){L=Y,++L.usedTimes;break}}return L===void 0&&(L=new dT(n,S,x,r),c.push(L)),L}function w(x){if(--x.usedTimes===0){const S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),x.destroy()}}function C(x){l.remove(x)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:R,releaseProgram:w,releaseShaderCache:C,programs:c,dispose:P}}function vT(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function xT(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function mp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function _p(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(f,h,d,g,_,m){let p=n[t];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[t]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),t++,p}function a(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function u(f,h){e.length>1&&e.sort(f||xT),i.length>1&&i.sort(h||mp),s.length>1&&s.sort(h||mp)}function c(){for(let f=t,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:c,sort:u}}function yT(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new _p,n.set(i,[o])):s>=r.length?(o=new _p,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function MT(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new ne};break;case"SpotLight":e={position:new O,direction:new O,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new ne,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":e={color:new ne,position:new O,halfWidth:new O,halfHeight:new O};break}return n[t.id]=e,e}}}function ST(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let bT=0;function ET(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function TT(n){const t=new MT,e=ST(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new O);const s=new O,r=new De,o=new De;function a(u){let c=0,f=0,h=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,M=0,y=0,v=0,R=0,w=0,C=0;u.sort(ET);for(let x=0,S=u.length;x<S;x++){const L=u[x],N=L.color,k=L.intensity,Y=L.distance,J=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)c+=N.r*k,f+=N.g*k,h+=N.b*k;else if(L.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(L.sh.coefficients[W],k);C++}else if(L.isDirectionalLight){const W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const K=L.shadow,B=e.get(L);B.shadowIntensity=K.intensity,B.shadowBias=K.bias,B.shadowNormalBias=K.normalBias,B.shadowRadius=K.radius,B.shadowMapSize=K.mapSize,i.directionalShadow[d]=B,i.directionalShadowMap[d]=J,i.directionalShadowMatrix[d]=L.shadow.matrix,M++}i.directional[d]=W,d++}else if(L.isSpotLight){const W=t.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(N).multiplyScalar(k),W.distance=Y,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,i.spot[_]=W;const K=L.shadow;if(L.map&&(i.spotLightMap[R]=L.map,R++,K.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[_]=K.matrix,L.castShadow){const B=e.get(L);B.shadowIntensity=K.intensity,B.shadowBias=K.bias,B.shadowNormalBias=K.normalBias,B.shadowRadius=K.radius,B.shadowMapSize=K.mapSize,i.spotShadow[_]=B,i.spotShadowMap[_]=J,v++}_++}else if(L.isRectAreaLight){const W=t.get(L);W.color.copy(N).multiplyScalar(k),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=W,m++}else if(L.isPointLight){const W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){const K=L.shadow,B=e.get(L);B.shadowIntensity=K.intensity,B.shadowBias=K.bias,B.shadowNormalBias=K.normalBias,B.shadowRadius=K.radius,B.shadowMapSize=K.mapSize,B.shadowCameraNear=K.camera.near,B.shadowCameraFar=K.camera.far,i.pointShadow[g]=B,i.pointShadowMap[g]=J,i.pointShadowMatrix[g]=L.shadow.matrix,y++}i.point[g]=W,g++}else if(L.isHemisphereLight){const W=t.get(L);W.skyColor.copy(L.color).multiplyScalar(k),W.groundColor.copy(L.groundColor).multiplyScalar(k),i.hemi[p]=W,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Rt.LTC_FLOAT_1,i.rectAreaLTC2=Rt.LTC_FLOAT_2):(i.rectAreaLTC1=Rt.LTC_HALF_1,i.rectAreaLTC2=Rt.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=h;const P=i.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==M||P.numPointShadows!==y||P.numSpotShadows!==v||P.numSpotMaps!==R||P.numLightProbes!==C)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+R-w,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,P.directionalLength=d,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=M,P.numPointShadows=y,P.numSpotShadows=v,P.numSpotMaps=R,P.numLightProbes=C,i.version=bT++)}function l(u,c){let f=0,h=0,d=0,g=0,_=0;const m=c.matrixWorldInverse;for(let p=0,M=u.length;p<M;p++){const y=u[p];if(y.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(y.isSpotLight){const v=i.spot[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const v=i.point[h];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function gp(n){const t=new TT(n),e=[],i=[];function s(c){u.camera=c,e.length=0,i.length=0}function r(c){e.push(c)}function o(c){i.push(c)}function a(){t.setup(e)}function l(c){t.setupView(e,c)}const u={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:u,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function wT(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new gp(n),t.set(s,[a])):r>=o.length?(a=new gp(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const AT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function RT(n,t,e){let i=new Jf;const s=new Ht,r=new Ht,o=new be,a=new QM({depthPacking:tM}),l=new tS,u={},c=e.maxTextureSize,f={[ji]:nn,[nn]:ji,[tn]:tn},h=new Es({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:AT,fragmentShader:CT}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new yn;g.setAttribute("position",new Qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Me(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=R_;let p=this.type;this.render=function(w,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const x=n.getRenderTarget(),S=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),N=n.state;N.setBlending(gs),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const k=p!==Ui&&this.type===Ui,Y=p===Ui&&this.type!==Ui;for(let J=0,W=w.length;J<W;J++){const K=w[J],B=K.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const gt=B.getFrameExtents();if(s.multiply(gt),r.copy(B.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/gt.x),s.x=r.x*gt.x,B.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/gt.y),s.y=r.y*gt.y,B.mapSize.y=r.y)),B.map===null||k===!0||Y===!0){const Tt=this.type!==Ui?{minFilter:ci,magFilter:ci}:{};B.map!==null&&B.map.dispose(),B.map=new rr(s.x,s.y,Tt),B.map.texture.name=K.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const mt=B.getViewportCount();for(let Tt=0;Tt<mt;Tt++){const Ut=B.getViewport(Tt);o.set(r.x*Ut.x,r.y*Ut.y,r.x*Ut.z,r.y*Ut.w),N.viewport(o),B.updateMatrices(K,Tt),i=B.getFrustum(),v(C,P,B.camera,K,this.type)}B.isPointLightShadow!==!0&&this.type===Ui&&M(B,P),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(x,S,L)};function M(w,C){const P=t.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new rr(s.x,s.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(C,null,P,h,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(C,null,P,d,_,null)}function y(w,C,P,x){let S=null;const L=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)S=L;else if(S=P.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const N=S.uuid,k=C.uuid;let Y=u[N];Y===void 0&&(Y={},u[N]=Y);let J=Y[k];J===void 0&&(J=S.clone(),Y[k]=J,C.addEventListener("dispose",R)),S=J}if(S.visible=C.visible,S.wireframe=C.wireframe,x===Ui?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:f[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const N=n.properties.get(S);N.light=P}return S}function v(w,C,P,x,S){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Ui)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const k=t.update(w),Y=w.material;if(Array.isArray(Y)){const J=k.groups;for(let W=0,K=J.length;W<K;W++){const B=J[W],gt=Y[B.materialIndex];if(gt&&gt.visible){const mt=y(w,gt,x,S);w.onBeforeShadow(n,w,C,P,k,mt,B),n.renderBufferDirect(P,null,k,mt,w,B),w.onAfterShadow(n,w,C,P,k,mt,B)}}}else if(Y.visible){const J=y(w,Y,x,S);w.onBeforeShadow(n,w,C,P,k,J,null),n.renderBufferDirect(P,null,k,J,w,null),w.onAfterShadow(n,w,C,P,k,J,null)}}const N=w.children;for(let k=0,Y=N.length;k<Y;k++)v(N[k],C,P,x,S)}function R(w){w.target.removeEventListener("dispose",R);for(const P in u){const x=u[P],S=w.target.uuid;S in x&&(x[S].dispose(),delete x[S])}}}const PT={[_u]:gu,[vu]:Mu,[xu]:Su,[jr]:yu,[gu]:_u,[Mu]:vu,[Su]:xu,[yu]:jr};function DT(n,t){function e(){let z=!1;const Ct=new be;let at=null;const ct=new be(0,0,0,0);return{setMask:function(Pt){at!==Pt&&!z&&(n.colorMask(Pt,Pt,Pt,Pt),at=Pt)},setLocked:function(Pt){z=Pt},setClear:function(Pt,Dt,V,rt,ft){ft===!0&&(Pt*=rt,Dt*=rt,V*=rt),Ct.set(Pt,Dt,V,rt),ct.equals(Ct)===!1&&(n.clearColor(Pt,Dt,V,rt),ct.copy(Ct))},reset:function(){z=!1,at=null,ct.set(-1,0,0,0)}}}function i(){let z=!1,Ct=!1,at=null,ct=null,Pt=null;return{setReversed:function(Dt){if(Ct!==Dt){const V=t.get("EXT_clip_control");Ct?V.clipControlEXT(V.LOWER_LEFT_EXT,V.ZERO_TO_ONE_EXT):V.clipControlEXT(V.LOWER_LEFT_EXT,V.NEGATIVE_ONE_TO_ONE_EXT);const rt=Pt;Pt=null,this.setClear(rt)}Ct=Dt},getReversed:function(){return Ct},setTest:function(Dt){Dt?Et(n.DEPTH_TEST):kt(n.DEPTH_TEST)},setMask:function(Dt){at!==Dt&&!z&&(n.depthMask(Dt),at=Dt)},setFunc:function(Dt){if(Ct&&(Dt=PT[Dt]),ct!==Dt){switch(Dt){case _u:n.depthFunc(n.NEVER);break;case gu:n.depthFunc(n.ALWAYS);break;case vu:n.depthFunc(n.LESS);break;case jr:n.depthFunc(n.LEQUAL);break;case xu:n.depthFunc(n.EQUAL);break;case yu:n.depthFunc(n.GEQUAL);break;case Mu:n.depthFunc(n.GREATER);break;case Su:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ct=Dt}},setLocked:function(Dt){z=Dt},setClear:function(Dt){Pt!==Dt&&(Ct&&(Dt=1-Dt),n.clearDepth(Dt),Pt=Dt)},reset:function(){z=!1,at=null,ct=null,Pt=null,Ct=!1}}}function s(){let z=!1,Ct=null,at=null,ct=null,Pt=null,Dt=null,V=null,rt=null,ft=null;return{setTest:function(pt){z||(pt?Et(n.STENCIL_TEST):kt(n.STENCIL_TEST))},setMask:function(pt){Ct!==pt&&!z&&(n.stencilMask(pt),Ct=pt)},setFunc:function(pt,Jt,yt){(at!==pt||ct!==Jt||Pt!==yt)&&(n.stencilFunc(pt,Jt,yt),at=pt,ct=Jt,Pt=yt)},setOp:function(pt,Jt,yt){(Dt!==pt||V!==Jt||rt!==yt)&&(n.stencilOp(pt,Jt,yt),Dt=pt,V=Jt,rt=yt)},setLocked:function(pt){z=pt},setClear:function(pt){ft!==pt&&(n.clearStencil(pt),ft=pt)},reset:function(){z=!1,Ct=null,at=null,ct=null,Pt=null,Dt=null,V=null,rt=null,ft=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,u=new WeakMap;let c={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,y=null,v=null,R=null,w=null,C=new ne(0,0,0),P=0,x=!1,S=null,L=null,N=null,k=null,Y=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,K=0;const B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(B)[1]),W=K>=1):B.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),W=K>=2);let gt=null,mt={};const Tt=n.getParameter(n.SCISSOR_BOX),Ut=n.getParameter(n.VIEWPORT),se=new be().fromArray(Tt),ot=new be().fromArray(Ut);function ht(z,Ct,at,ct){const Pt=new Uint8Array(4),Dt=n.createTexture();n.bindTexture(z,Dt),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let V=0;V<at;V++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(Ct,0,n.RGBA,1,1,ct,0,n.RGBA,n.UNSIGNED_BYTE,Pt):n.texImage2D(Ct+V,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Pt);return Dt}const Nt={};Nt[n.TEXTURE_2D]=ht(n.TEXTURE_2D,n.TEXTURE_2D,1),Nt[n.TEXTURE_CUBE_MAP]=ht(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Nt[n.TEXTURE_2D_ARRAY]=ht(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Nt[n.TEXTURE_3D]=ht(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Et(n.DEPTH_TEST),o.setFunc(jr),q(!1),j(ud),Et(n.CULL_FACE),E(gs);function Et(z){c[z]!==!0&&(n.enable(z),c[z]=!0)}function kt(z){c[z]!==!1&&(n.disable(z),c[z]=!1)}function Xt(z,Ct){return f[z]!==Ct?(n.bindFramebuffer(z,Ct),f[z]=Ct,z===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Ct),z===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Ct),!0):!1}function $t(z,Ct){let at=d,ct=!1;if(z){at=h.get(Ct),at===void 0&&(at=[],h.set(Ct,at));const Pt=z.textures;if(at.length!==Pt.length||at[0]!==n.COLOR_ATTACHMENT0){for(let Dt=0,V=Pt.length;Dt<V;Dt++)at[Dt]=n.COLOR_ATTACHMENT0+Dt;at.length=Pt.length,ct=!0}}else at[0]!==n.BACK&&(at[0]=n.BACK,ct=!0);ct&&n.drawBuffers(at)}function _e(z){return g!==z?(n.useProgram(z),g=z,!0):!1}const A={[Ws]:n.FUNC_ADD,[wy]:n.FUNC_SUBTRACT,[Ay]:n.FUNC_REVERSE_SUBTRACT};A[Cy]=n.MIN,A[Ry]=n.MAX;const U={[Py]:n.ZERO,[Dy]:n.ONE,[Iy]:n.SRC_COLOR,[pu]:n.SRC_ALPHA,[By]:n.SRC_ALPHA_SATURATE,[Oy]:n.DST_COLOR,[Uy]:n.DST_ALPHA,[Ly]:n.ONE_MINUS_SRC_COLOR,[mu]:n.ONE_MINUS_SRC_ALPHA,[Fy]:n.ONE_MINUS_DST_COLOR,[Ny]:n.ONE_MINUS_DST_ALPHA,[ky]:n.CONSTANT_COLOR,[zy]:n.ONE_MINUS_CONSTANT_COLOR,[Hy]:n.CONSTANT_ALPHA,[Vy]:n.ONE_MINUS_CONSTANT_ALPHA};function E(z,Ct,at,ct,Pt,Dt,V,rt,ft,pt){if(z===gs){_===!0&&(kt(n.BLEND),_=!1);return}if(_===!1&&(Et(n.BLEND),_=!0),z!==Ty){if(z!==m||pt!==x){if((p!==Ws||v!==Ws)&&(n.blendEquation(n.FUNC_ADD),p=Ws,v=Ws),pt)switch(z){case zr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fd:n.blendFunc(n.ONE,n.ONE);break;case hd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case dd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case zr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fd:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case hd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case dd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}M=null,y=null,R=null,w=null,C.set(0,0,0),P=0,m=z,x=pt}return}Pt=Pt||Ct,Dt=Dt||at,V=V||ct,(Ct!==p||Pt!==v)&&(n.blendEquationSeparate(A[Ct],A[Pt]),p=Ct,v=Pt),(at!==M||ct!==y||Dt!==R||V!==w)&&(n.blendFuncSeparate(U[at],U[ct],U[Dt],U[V]),M=at,y=ct,R=Dt,w=V),(rt.equals(C)===!1||ft!==P)&&(n.blendColor(rt.r,rt.g,rt.b,ft),C.copy(rt),P=ft),m=z,x=!1}function nt(z,Ct){z.side===tn?kt(n.CULL_FACE):Et(n.CULL_FACE);let at=z.side===nn;Ct&&(at=!at),q(at),z.blending===zr&&z.transparent===!1?E(gs):E(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);const ct=z.stencilWrite;a.setTest(ct),ct&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),lt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Et(n.SAMPLE_ALPHA_TO_COVERAGE):kt(n.SAMPLE_ALPHA_TO_COVERAGE)}function q(z){S!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),S=z)}function j(z){z!==Sy?(Et(n.CULL_FACE),z!==L&&(z===ud?n.cullFace(n.BACK):z===by?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):kt(n.CULL_FACE),L=z}function st(z){z!==N&&(W&&n.lineWidth(z),N=z)}function lt(z,Ct,at){z?(Et(n.POLYGON_OFFSET_FILL),(k!==Ct||Y!==at)&&(n.polygonOffset(Ct,at),k=Ct,Y=at)):kt(n.POLYGON_OFFSET_FILL)}function Q(z){z?Et(n.SCISSOR_TEST):kt(n.SCISSOR_TEST)}function T(z){z===void 0&&(z=n.TEXTURE0+J-1),gt!==z&&(n.activeTexture(z),gt=z)}function b(z,Ct,at){at===void 0&&(gt===null?at=n.TEXTURE0+J-1:at=gt);let ct=mt[at];ct===void 0&&(ct={type:void 0,texture:void 0},mt[at]=ct),(ct.type!==z||ct.texture!==Ct)&&(gt!==at&&(n.activeTexture(at),gt=at),n.bindTexture(z,Ct||Nt[z]),ct.type=z,ct.texture=Ct)}function F(){const z=mt[gt];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function X(){try{n.compressedTexImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Z(){try{n.compressedTexImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function $(){try{n.texSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xt(){try{n.texSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ut(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _t(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Gt(){try{n.texStorage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function dt(){try{n.texStorage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function At(){try{n.texImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Bt(){try{n.texImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function qt(z){se.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),se.copy(z))}function wt(z){ot.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),ot.copy(z))}function Zt(z,Ct){let at=u.get(Ct);at===void 0&&(at=new WeakMap,u.set(Ct,at));let ct=at.get(z);ct===void 0&&(ct=n.getUniformBlockIndex(Ct,z.name),at.set(z,ct))}function Vt(z,Ct){const ct=u.get(Ct).get(z);l.get(Ct)!==ct&&(n.uniformBlockBinding(Ct,ct,z.__bindingPointIndex),l.set(Ct,ct))}function ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},gt=null,mt={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,y=null,v=null,R=null,w=null,C=new ne(0,0,0),P=0,x=!1,S=null,L=null,N=null,k=null,Y=null,se.set(0,0,n.canvas.width,n.canvas.height),ot.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Et,disable:kt,bindFramebuffer:Xt,drawBuffers:$t,useProgram:_e,setBlending:E,setMaterial:nt,setFlipSided:q,setCullFace:j,setLineWidth:st,setPolygonOffset:lt,setScissorTest:Q,activeTexture:T,bindTexture:b,unbindTexture:F,compressedTexImage2D:X,compressedTexImage3D:Z,texImage2D:At,texImage3D:Bt,updateUBOMapping:Zt,uniformBlockBinding:Vt,texStorage2D:Gt,texStorage3D:dt,texSubImage2D:$,texSubImage3D:xt,compressedTexSubImage2D:ut,compressedTexSubImage3D:_t,scissor:qt,viewport:wt,reset:ue}}function IT(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ht,c=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,b){return d?new OffscreenCanvas(T,b):vl("canvas")}function _(T,b,F){let X=1;const Z=Q(T);if((Z.width>F||Z.height>F)&&(X=F/Math.max(Z.width,Z.height)),X<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const $=Math.floor(X*Z.width),xt=Math.floor(X*Z.height);f===void 0&&(f=g($,xt));const ut=b?g($,xt):f;return ut.width=$,ut.height=xt,ut.getContext("2d").drawImage(T,0,0,$,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+$+"x"+xt+")."),ut}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){n.generateMipmap(T)}function M(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(T,b,F,X,Z=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let $=b;if(b===n.RED&&(F===n.FLOAT&&($=n.R32F),F===n.HALF_FLOAT&&($=n.R16F),F===n.UNSIGNED_BYTE&&($=n.R8)),b===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&($=n.R8UI),F===n.UNSIGNED_SHORT&&($=n.R16UI),F===n.UNSIGNED_INT&&($=n.R32UI),F===n.BYTE&&($=n.R8I),F===n.SHORT&&($=n.R16I),F===n.INT&&($=n.R32I)),b===n.RG&&(F===n.FLOAT&&($=n.RG32F),F===n.HALF_FLOAT&&($=n.RG16F),F===n.UNSIGNED_BYTE&&($=n.RG8)),b===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&($=n.RG8UI),F===n.UNSIGNED_SHORT&&($=n.RG16UI),F===n.UNSIGNED_INT&&($=n.RG32UI),F===n.BYTE&&($=n.RG8I),F===n.SHORT&&($=n.RG16I),F===n.INT&&($=n.RG32I)),b===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&($=n.RGB8UI),F===n.UNSIGNED_SHORT&&($=n.RGB16UI),F===n.UNSIGNED_INT&&($=n.RGB32UI),F===n.BYTE&&($=n.RGB8I),F===n.SHORT&&($=n.RGB16I),F===n.INT&&($=n.RGB32I)),b===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&($=n.RGBA8UI),F===n.UNSIGNED_SHORT&&($=n.RGBA16UI),F===n.UNSIGNED_INT&&($=n.RGBA32UI),F===n.BYTE&&($=n.RGBA8I),F===n.SHORT&&($=n.RGBA16I),F===n.INT&&($=n.RGBA32I)),b===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),b===n.RGBA){const xt=Z?_l:pe.getTransfer(X);F===n.FLOAT&&($=n.RGBA32F),F===n.HALF_FLOAT&&($=n.RGBA16F),F===n.UNSIGNED_BYTE&&($=xt===Se?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function v(T,b){let F;return T?b===null||b===sr||b===Qr?F=n.DEPTH24_STENCIL8:b===Vi?F=n.DEPTH32F_STENCIL8:b===ta&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===sr||b===Qr?F=n.DEPTH_COMPONENT24:b===Vi?F=n.DEPTH_COMPONENT32F:b===ta&&(F=n.DEPTH_COMPONENT16),F}function R(T,b){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==ci&&T.minFilter!==Mi?Math.log2(Math.max(b.width,b.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?b.mipmaps.length:1}function w(T){const b=T.target;b.removeEventListener("dispose",w),P(b),b.isVideoTexture&&c.delete(b)}function C(T){const b=T.target;b.removeEventListener("dispose",C),S(b)}function P(T){const b=i.get(T);if(b.__webglInit===void 0)return;const F=T.source,X=h.get(F);if(X){const Z=X[b.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&x(T),Object.keys(X).length===0&&h.delete(F)}i.remove(T)}function x(T){const b=i.get(T);n.deleteTexture(b.__webglTexture);const F=T.source,X=h.get(F);delete X[b.__cacheKey],o.memory.textures--}function S(T){const b=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(b.__webglFramebuffer[X]))for(let Z=0;Z<b.__webglFramebuffer[X].length;Z++)n.deleteFramebuffer(b.__webglFramebuffer[X][Z]);else n.deleteFramebuffer(b.__webglFramebuffer[X]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[X])}else{if(Array.isArray(b.__webglFramebuffer))for(let X=0;X<b.__webglFramebuffer.length;X++)n.deleteFramebuffer(b.__webglFramebuffer[X]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let X=0;X<b.__webglColorRenderbuffer.length;X++)b.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[X]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const F=T.textures;for(let X=0,Z=F.length;X<Z;X++){const $=i.get(F[X]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(F[X])}i.remove(T)}let L=0;function N(){L=0}function k(){const T=L;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),L+=1,T}function Y(T){const b=[];return b.push(T.wrapS),b.push(T.wrapT),b.push(T.wrapR||0),b.push(T.magFilter),b.push(T.minFilter),b.push(T.anisotropy),b.push(T.internalFormat),b.push(T.format),b.push(T.type),b.push(T.generateMipmaps),b.push(T.premultiplyAlpha),b.push(T.flipY),b.push(T.unpackAlignment),b.push(T.colorSpace),b.join()}function J(T,b){const F=i.get(T);if(T.isVideoTexture&&st(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){const X=T.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ot(F,T,b);return}}e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+b)}function W(T,b){const F=i.get(T);if(T.version>0&&F.__version!==T.version){ot(F,T,b);return}e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+b)}function K(T,b){const F=i.get(T);if(T.version>0&&F.__version!==T.version){ot(F,T,b);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+b)}function B(T,b){const F=i.get(T);if(T.version>0&&F.__version!==T.version){ht(F,T,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+b)}const gt={[Tu]:n.REPEAT,[$s]:n.CLAMP_TO_EDGE,[wu]:n.MIRRORED_REPEAT},mt={[ci]:n.NEAREST,[Jy]:n.NEAREST_MIPMAP_NEAREST,[_a]:n.NEAREST_MIPMAP_LINEAR,[Mi]:n.LINEAR,[rc]:n.LINEAR_MIPMAP_NEAREST,[Ks]:n.LINEAR_MIPMAP_LINEAR},Tt={[nM]:n.NEVER,[lM]:n.ALWAYS,[iM]:n.LESS,[G_]:n.LEQUAL,[sM]:n.EQUAL,[aM]:n.GEQUAL,[rM]:n.GREATER,[oM]:n.NOTEQUAL};function Ut(T,b){if(b.type===Vi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Mi||b.magFilter===rc||b.magFilter===_a||b.magFilter===Ks||b.minFilter===Mi||b.minFilter===rc||b.minFilter===_a||b.minFilter===Ks)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,gt[b.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,gt[b.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,gt[b.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,mt[b.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,mt[b.minFilter]),b.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Tt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ci||b.minFilter!==_a&&b.minFilter!==Ks||b.type===Vi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function se(T,b){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,b.addEventListener("dispose",w));const X=b.source;let Z=h.get(X);Z===void 0&&(Z={},h.set(X,Z));const $=Y(b);if($!==T.__cacheKey){Z[$]===void 0&&(Z[$]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Z[$].usedTimes++;const xt=Z[T.__cacheKey];xt!==void 0&&(Z[T.__cacheKey].usedTimes--,xt.usedTimes===0&&x(b)),T.__cacheKey=$,T.__webglTexture=Z[$].texture}return F}function ot(T,b,F){let X=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(X=n.TEXTURE_3D);const Z=se(T,b),$=b.source;e.bindTexture(X,T.__webglTexture,n.TEXTURE0+F);const xt=i.get($);if($.version!==xt.__version||Z===!0){e.activeTexture(n.TEXTURE0+F);const ut=pe.getPrimaries(pe.workingColorSpace),_t=b.colorSpace===us?null:pe.getPrimaries(b.colorSpace),Gt=b.colorSpace===us||ut===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let dt=_(b.image,!1,s.maxTextureSize);dt=lt(b,dt);const At=r.convert(b.format,b.colorSpace),Bt=r.convert(b.type);let qt=y(b.internalFormat,At,Bt,b.colorSpace,b.isVideoTexture);Ut(X,b);let wt;const Zt=b.mipmaps,Vt=b.isVideoTexture!==!0,ue=xt.__version===void 0||Z===!0,z=$.dataReady,Ct=R(b,dt);if(b.isDepthTexture)qt=v(b.format===to,b.type),ue&&(Vt?e.texStorage2D(n.TEXTURE_2D,1,qt,dt.width,dt.height):e.texImage2D(n.TEXTURE_2D,0,qt,dt.width,dt.height,0,At,Bt,null));else if(b.isDataTexture)if(Zt.length>0){Vt&&ue&&e.texStorage2D(n.TEXTURE_2D,Ct,qt,Zt[0].width,Zt[0].height);for(let at=0,ct=Zt.length;at<ct;at++)wt=Zt[at],Vt?z&&e.texSubImage2D(n.TEXTURE_2D,at,0,0,wt.width,wt.height,At,Bt,wt.data):e.texImage2D(n.TEXTURE_2D,at,qt,wt.width,wt.height,0,At,Bt,wt.data);b.generateMipmaps=!1}else Vt?(ue&&e.texStorage2D(n.TEXTURE_2D,Ct,qt,dt.width,dt.height),z&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,dt.width,dt.height,At,Bt,dt.data)):e.texImage2D(n.TEXTURE_2D,0,qt,dt.width,dt.height,0,At,Bt,dt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Vt&&ue&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ct,qt,Zt[0].width,Zt[0].height,dt.depth);for(let at=0,ct=Zt.length;at<ct;at++)if(wt=Zt[at],b.format!==ai)if(At!==null)if(Vt){if(z)if(b.layerUpdates.size>0){const Pt=Yd(wt.width,wt.height,b.format,b.type);for(const Dt of b.layerUpdates){const V=wt.data.subarray(Dt*Pt/wt.data.BYTES_PER_ELEMENT,(Dt+1)*Pt/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,Dt,wt.width,wt.height,1,At,V)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,0,wt.width,wt.height,dt.depth,At,wt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,at,qt,wt.width,wt.height,dt.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?z&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,0,wt.width,wt.height,dt.depth,At,Bt,wt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,at,qt,wt.width,wt.height,dt.depth,0,At,Bt,wt.data)}else{Vt&&ue&&e.texStorage2D(n.TEXTURE_2D,Ct,qt,Zt[0].width,Zt[0].height);for(let at=0,ct=Zt.length;at<ct;at++)wt=Zt[at],b.format!==ai?At!==null?Vt?z&&e.compressedTexSubImage2D(n.TEXTURE_2D,at,0,0,wt.width,wt.height,At,wt.data):e.compressedTexImage2D(n.TEXTURE_2D,at,qt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?z&&e.texSubImage2D(n.TEXTURE_2D,at,0,0,wt.width,wt.height,At,Bt,wt.data):e.texImage2D(n.TEXTURE_2D,at,qt,wt.width,wt.height,0,At,Bt,wt.data)}else if(b.isDataArrayTexture)if(Vt){if(ue&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ct,qt,dt.width,dt.height,dt.depth),z)if(b.layerUpdates.size>0){const at=Yd(dt.width,dt.height,b.format,b.type);for(const ct of b.layerUpdates){const Pt=dt.data.subarray(ct*at/dt.data.BYTES_PER_ELEMENT,(ct+1)*at/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ct,dt.width,dt.height,1,At,Bt,Pt)}b.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,At,Bt,dt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,qt,dt.width,dt.height,dt.depth,0,At,Bt,dt.data);else if(b.isData3DTexture)Vt?(ue&&e.texStorage3D(n.TEXTURE_3D,Ct,qt,dt.width,dt.height,dt.depth),z&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,At,Bt,dt.data)):e.texImage3D(n.TEXTURE_3D,0,qt,dt.width,dt.height,dt.depth,0,At,Bt,dt.data);else if(b.isFramebufferTexture){if(ue)if(Vt)e.texStorage2D(n.TEXTURE_2D,Ct,qt,dt.width,dt.height);else{let at=dt.width,ct=dt.height;for(let Pt=0;Pt<Ct;Pt++)e.texImage2D(n.TEXTURE_2D,Pt,qt,at,ct,0,At,Bt,null),at>>=1,ct>>=1}}else if(Zt.length>0){if(Vt&&ue){const at=Q(Zt[0]);e.texStorage2D(n.TEXTURE_2D,Ct,qt,at.width,at.height)}for(let at=0,ct=Zt.length;at<ct;at++)wt=Zt[at],Vt?z&&e.texSubImage2D(n.TEXTURE_2D,at,0,0,At,Bt,wt):e.texImage2D(n.TEXTURE_2D,at,qt,At,Bt,wt);b.generateMipmaps=!1}else if(Vt){if(ue){const at=Q(dt);e.texStorage2D(n.TEXTURE_2D,Ct,qt,at.width,at.height)}z&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,At,Bt,dt)}else e.texImage2D(n.TEXTURE_2D,0,qt,At,Bt,dt);m(b)&&p(X),xt.__version=$.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function ht(T,b,F){if(b.image.length!==6)return;const X=se(T,b),Z=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+F);const $=i.get(Z);if(Z.version!==$.__version||X===!0){e.activeTexture(n.TEXTURE0+F);const xt=pe.getPrimaries(pe.workingColorSpace),ut=b.colorSpace===us?null:pe.getPrimaries(b.colorSpace),_t=b.colorSpace===us||xt===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Gt=b.isCompressedTexture||b.image[0].isCompressedTexture,dt=b.image[0]&&b.image[0].isDataTexture,At=[];for(let ct=0;ct<6;ct++)!Gt&&!dt?At[ct]=_(b.image[ct],!0,s.maxCubemapSize):At[ct]=dt?b.image[ct].image:b.image[ct],At[ct]=lt(b,At[ct]);const Bt=At[0],qt=r.convert(b.format,b.colorSpace),wt=r.convert(b.type),Zt=y(b.internalFormat,qt,wt,b.colorSpace),Vt=b.isVideoTexture!==!0,ue=$.__version===void 0||X===!0,z=Z.dataReady;let Ct=R(b,Bt);Ut(n.TEXTURE_CUBE_MAP,b);let at;if(Gt){Vt&&ue&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,Zt,Bt.width,Bt.height);for(let ct=0;ct<6;ct++){at=At[ct].mipmaps;for(let Pt=0;Pt<at.length;Pt++){const Dt=at[Pt];b.format!==ai?qt!==null?Vt?z&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Pt,0,0,Dt.width,Dt.height,qt,Dt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Pt,Zt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Pt,0,0,Dt.width,Dt.height,qt,wt,Dt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Pt,Zt,Dt.width,Dt.height,0,qt,wt,Dt.data)}}}else{if(at=b.mipmaps,Vt&&ue){at.length>0&&Ct++;const ct=Q(At[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,Zt,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(dt){Vt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,At[ct].width,At[ct].height,qt,wt,At[ct].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Zt,At[ct].width,At[ct].height,0,qt,wt,At[ct].data);for(let Pt=0;Pt<at.length;Pt++){const V=at[Pt].image[ct].image;Vt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Pt+1,0,0,V.width,V.height,qt,wt,V.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Pt+1,Zt,V.width,V.height,0,qt,wt,V.data)}}else{Vt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,qt,wt,At[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Zt,qt,wt,At[ct]);for(let Pt=0;Pt<at.length;Pt++){const Dt=at[Pt];Vt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Pt+1,0,0,qt,wt,Dt.image[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Pt+1,Zt,qt,wt,Dt.image[ct])}}}m(b)&&p(n.TEXTURE_CUBE_MAP),$.__version=Z.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function Nt(T,b,F,X,Z,$){const xt=r.convert(F.format,F.colorSpace),ut=r.convert(F.type),_t=y(F.internalFormat,xt,ut,F.colorSpace),Gt=i.get(b),dt=i.get(F);if(dt.__renderTarget=b,!Gt.__hasExternalTextures){const At=Math.max(1,b.width>>$),Bt=Math.max(1,b.height>>$);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?e.texImage3D(Z,$,_t,At,Bt,b.depth,0,xt,ut,null):e.texImage2D(Z,$,_t,At,Bt,0,xt,ut,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),j(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,Z,dt.__webglTexture,0,q(b)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,Z,dt.__webglTexture,$),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Et(T,b,F){if(n.bindRenderbuffer(n.RENDERBUFFER,T),b.depthBuffer){const X=b.depthTexture,Z=X&&X.isDepthTexture?X.type:null,$=v(b.stencilBuffer,Z),xt=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=q(b);j(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut,$,b.width,b.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,$,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,$,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xt,n.RENDERBUFFER,T)}else{const X=b.textures;for(let Z=0;Z<X.length;Z++){const $=X[Z],xt=r.convert($.format,$.colorSpace),ut=r.convert($.type),_t=y($.internalFormat,xt,ut,$.colorSpace),Gt=q(b);F&&j(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Gt,_t,b.width,b.height):j(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Gt,_t,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,_t,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function kt(T,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=i.get(b.depthTexture);X.__renderTarget=b,(!X.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),J(b.depthTexture,0);const Z=X.__webglTexture,$=q(b);if(b.depthTexture.format===Hr)j(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(b.depthTexture.format===to)j(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Xt(T){const b=i.get(T),F=T.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==T.depthTexture){const X=T.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),X){const Z=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,X.removeEventListener("dispose",Z)};X.addEventListener("dispose",Z),b.__depthDisposeCallback=Z}b.__boundDepthTexture=X}if(T.depthTexture&&!b.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");kt(b.__webglFramebuffer,T)}else if(F){b.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[X]),b.__webglDepthbuffer[X]===void 0)b.__webglDepthbuffer[X]=n.createRenderbuffer(),Et(b.__webglDepthbuffer[X],T,!1);else{const Z=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=b.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,$)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),Et(b.__webglDepthbuffer,T,!1);else{const X=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,Z)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function $t(T,b,F){const X=i.get(T);b!==void 0&&Nt(X.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Xt(T)}function _e(T){const b=T.texture,F=i.get(T),X=i.get(b);T.addEventListener("dispose",C);const Z=T.textures,$=T.isWebGLCubeRenderTarget===!0,xt=Z.length>1;if(xt||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=b.version,o.memory.textures++),$){F.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(b.mipmaps&&b.mipmaps.length>0){F.__webglFramebuffer[ut]=[];for(let _t=0;_t<b.mipmaps.length;_t++)F.__webglFramebuffer[ut][_t]=n.createFramebuffer()}else F.__webglFramebuffer[ut]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){F.__webglFramebuffer=[];for(let ut=0;ut<b.mipmaps.length;ut++)F.__webglFramebuffer[ut]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(xt)for(let ut=0,_t=Z.length;ut<_t;ut++){const Gt=i.get(Z[ut]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&j(T)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ut=0;ut<Z.length;ut++){const _t=Z[ut];F.__webglColorRenderbuffer[ut]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ut]);const Gt=r.convert(_t.format,_t.colorSpace),dt=r.convert(_t.type),At=y(_t.internalFormat,Gt,dt,_t.colorSpace,T.isXRRenderTarget===!0),Bt=q(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Bt,At,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,F.__webglColorRenderbuffer[ut])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Et(F.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),Ut(n.TEXTURE_CUBE_MAP,b);for(let ut=0;ut<6;ut++)if(b.mipmaps&&b.mipmaps.length>0)for(let _t=0;_t<b.mipmaps.length;_t++)Nt(F.__webglFramebuffer[ut][_t],T,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,_t);else Nt(F.__webglFramebuffer[ut],T,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(b)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let ut=0,_t=Z.length;ut<_t;ut++){const Gt=Z[ut],dt=i.get(Gt);e.bindTexture(n.TEXTURE_2D,dt.__webglTexture),Ut(n.TEXTURE_2D,Gt),Nt(F.__webglFramebuffer,T,Gt,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,0),m(Gt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let ut=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ut=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ut,X.__webglTexture),Ut(ut,b),b.mipmaps&&b.mipmaps.length>0)for(let _t=0;_t<b.mipmaps.length;_t++)Nt(F.__webglFramebuffer[_t],T,b,n.COLOR_ATTACHMENT0,ut,_t);else Nt(F.__webglFramebuffer,T,b,n.COLOR_ATTACHMENT0,ut,0);m(b)&&p(ut),e.unbindTexture()}T.depthBuffer&&Xt(T)}function A(T){const b=T.textures;for(let F=0,X=b.length;F<X;F++){const Z=b[F];if(m(Z)){const $=M(T),xt=i.get(Z).__webglTexture;e.bindTexture($,xt),p($),e.unbindTexture()}}}const U=[],E=[];function nt(T){if(T.samples>0){if(j(T)===!1){const b=T.textures,F=T.width,X=T.height;let Z=n.COLOR_BUFFER_BIT;const $=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=i.get(T),ut=b.length>1;if(ut)for(let _t=0;_t<b.length;_t++)e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let _t=0;_t<b.length;_t++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),ut){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xt.__webglColorRenderbuffer[_t]);const Gt=i.get(b[_t]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Gt,0)}n.blitFramebuffer(0,0,F,X,0,0,F,X,Z,n.NEAREST),l===!0&&(U.length=0,E.length=0,U.push(n.COLOR_ATTACHMENT0+_t),T.depthBuffer&&T.resolveDepthBuffer===!1&&(U.push($),E.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,E)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,U))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ut)for(let _t=0;_t<b.length;_t++){e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,xt.__webglColorRenderbuffer[_t]);const Gt=i.get(b[_t]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,Gt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const b=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function q(T){return Math.min(s.maxSamples,T.samples)}function j(T){const b=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function st(T){const b=o.render.frame;c.get(T)!==b&&(c.set(T,b),T.update())}function lt(T,b){const F=T.colorSpace,X=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==eo&&F!==us&&(pe.getTransfer(F)===Se?(X!==ai||Z!==Zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),b}function Q(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(u.width=T.naturalWidth||T.width,u.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(u.width=T.displayWidth,u.height=T.displayHeight):(u.width=T.width,u.height=T.height),u}this.allocateTextureUnit=k,this.resetTextureUnits=N,this.setTexture2D=J,this.setTexture2DArray=W,this.setTexture3D=K,this.setTextureCube=B,this.rebindTextures=$t,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=A,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=Nt,this.useMultisampledRTT=j}function LT(n,t){function e(i,s=us){let r;const o=pe.getTransfer(s);if(i===Zi)return n.UNSIGNED_BYTE;if(i===Wf)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Xf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===U_)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===I_)return n.BYTE;if(i===L_)return n.SHORT;if(i===ta)return n.UNSIGNED_SHORT;if(i===Gf)return n.INT;if(i===sr)return n.UNSIGNED_INT;if(i===Vi)return n.FLOAT;if(i===oa)return n.HALF_FLOAT;if(i===N_)return n.ALPHA;if(i===O_)return n.RGB;if(i===ai)return n.RGBA;if(i===F_)return n.LUMINANCE;if(i===B_)return n.LUMINANCE_ALPHA;if(i===Hr)return n.DEPTH_COMPONENT;if(i===to)return n.DEPTH_STENCIL;if(i===k_)return n.RED;if(i===qf)return n.RED_INTEGER;if(i===z_)return n.RG;if(i===Yf)return n.RG_INTEGER;if(i===$f)return n.RGBA_INTEGER;if(i===$a||i===Ka||i===ja||i===Za)if(o===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===$a)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===$a)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ka)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ja)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Za)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Au||i===Cu||i===Ru||i===Pu)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Au)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Cu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ru)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Pu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Du||i===Iu||i===Lu)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Du||i===Iu)return o===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Lu)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Uu||i===Nu||i===Ou||i===Fu||i===Bu||i===ku||i===zu||i===Hu||i===Vu||i===Gu||i===Wu||i===Xu||i===qu||i===Yu)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Uu)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Nu)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ou)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Fu)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Bu)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ku)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zu)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hu)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vu)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Gu)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wu)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xu)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qu)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yu)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ja||i===$u||i===Ku)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ja)return o===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$u)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ku)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===H_||i===ju||i===Zu||i===Ju)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ja)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ju)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ju)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const UT={type:"move"};class zc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new js,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new js,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new js,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),p=this._getHandJoint(u,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),d=.02,g=.005;u.inputState.pinching&&h>d+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&h<=d-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(UT)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new js;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const NT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class FT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new xn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Es({vertexShader:NT,fragmentShader:OT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Me(new si(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class BT extends io{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,d=null,g=null;const _=new FT,m=e.getContextAttributes();let p=null,M=null;const y=[],v=[],R=new Ht;let w=null;const C=new wn;C.viewport=new be;const P=new wn;P.viewport=new be;const x=[C,P],S=new sS;let L=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ot){let ht=y[ot];return ht===void 0&&(ht=new zc,y[ot]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(ot){let ht=y[ot];return ht===void 0&&(ht=new zc,y[ot]=ht),ht.getGripSpace()},this.getHand=function(ot){let ht=y[ot];return ht===void 0&&(ht=new zc,y[ot]=ht),ht.getHandSpace()};function k(ot){const ht=v.indexOf(ot.inputSource);if(ht===-1)return;const Nt=y[ht];Nt!==void 0&&(Nt.update(ot.inputSource,ot.frame,u||o),Nt.dispatchEvent({type:ot.type,data:ot.inputSource}))}function Y(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",J);for(let ot=0;ot<y.length;ot++){const ht=v[ot];ht!==null&&(v[ot]=null,y[ot].disconnect(ht))}L=null,N=null,_.reset(),t.setRenderTarget(p),d=null,h=null,f=null,s=null,M=null,se.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ot){r=ot,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ot){a=ot,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(ot){u=ot},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ot){if(s=ot,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){const ht={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,ht),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new rr(d.framebufferWidth,d.framebufferHeight,{format:ai,type:Zi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ht=null,Nt=null,Et=null;m.depth&&(Et=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=m.stencil?to:Hr,Nt=m.stencil?Qr:sr);const kt={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:r};f=new XRWebGLBinding(s,e),h=f.createProjectionLayer(kt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),M=new rr(h.textureWidth,h.textureHeight,{format:ai,type:Zi,depthTexture:new tg(h.textureWidth,h.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await s.requestReferenceSpace(a),se.setContext(s),se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function J(ot){for(let ht=0;ht<ot.removed.length;ht++){const Nt=ot.removed[ht],Et=v.indexOf(Nt);Et>=0&&(v[Et]=null,y[Et].disconnect(Nt))}for(let ht=0;ht<ot.added.length;ht++){const Nt=ot.added[ht];let Et=v.indexOf(Nt);if(Et===-1){for(let Xt=0;Xt<y.length;Xt++)if(Xt>=v.length){v.push(Nt),Et=Xt;break}else if(v[Xt]===null){v[Xt]=Nt,Et=Xt;break}if(Et===-1)break}const kt=y[Et];kt&&kt.connect(Nt)}}const W=new O,K=new O;function B(ot,ht,Nt){W.setFromMatrixPosition(ht.matrixWorld),K.setFromMatrixPosition(Nt.matrixWorld);const Et=W.distanceTo(K),kt=ht.projectionMatrix.elements,Xt=Nt.projectionMatrix.elements,$t=kt[14]/(kt[10]-1),_e=kt[14]/(kt[10]+1),A=(kt[9]+1)/kt[5],U=(kt[9]-1)/kt[5],E=(kt[8]-1)/kt[0],nt=(Xt[8]+1)/Xt[0],q=$t*E,j=$t*nt,st=Et/(-E+nt),lt=st*-E;if(ht.matrixWorld.decompose(ot.position,ot.quaternion,ot.scale),ot.translateX(lt),ot.translateZ(st),ot.matrixWorld.compose(ot.position,ot.quaternion,ot.scale),ot.matrixWorldInverse.copy(ot.matrixWorld).invert(),kt[10]===-1)ot.projectionMatrix.copy(ht.projectionMatrix),ot.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const Q=$t+st,T=_e+st,b=q-lt,F=j+(Et-lt),X=A*_e/T*Q,Z=U*_e/T*Q;ot.projectionMatrix.makePerspective(b,F,X,Z,Q,T),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert()}}function gt(ot,ht){ht===null?ot.matrixWorld.copy(ot.matrix):ot.matrixWorld.multiplyMatrices(ht.matrixWorld,ot.matrix),ot.matrixWorldInverse.copy(ot.matrixWorld).invert()}this.updateCamera=function(ot){if(s===null)return;let ht=ot.near,Nt=ot.far;_.texture!==null&&(_.depthNear>0&&(ht=_.depthNear),_.depthFar>0&&(Nt=_.depthFar)),S.near=P.near=C.near=ht,S.far=P.far=C.far=Nt,(L!==S.near||N!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,N=S.far),C.layers.mask=ot.layers.mask|2,P.layers.mask=ot.layers.mask|4,S.layers.mask=C.layers.mask|P.layers.mask;const Et=ot.parent,kt=S.cameras;gt(S,Et);for(let Xt=0;Xt<kt.length;Xt++)gt(kt[Xt],Et);kt.length===2?B(S,C,P):S.projectionMatrix.copy(C.projectionMatrix),mt(ot,S,Et)};function mt(ot,ht,Nt){Nt===null?ot.matrix.copy(ht.matrixWorld):(ot.matrix.copy(Nt.matrixWorld),ot.matrix.invert(),ot.matrix.multiply(ht.matrixWorld)),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.updateMatrixWorld(!0),ot.projectionMatrix.copy(ht.projectionMatrix),ot.projectionMatrixInverse.copy(ht.projectionMatrixInverse),ot.isPerspectiveCamera&&(ot.fov=Qu*2*Math.atan(1/ot.projectionMatrix.elements[5]),ot.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(ot){l=ot,h!==null&&(h.fixedFoveation=ot),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ot)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let Tt=null;function Ut(ot,ht){if(c=ht.getViewerPose(u||o),g=ht,c!==null){const Nt=c.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let Et=!1;Nt.length!==S.cameras.length&&(S.cameras.length=0,Et=!0);for(let Xt=0;Xt<Nt.length;Xt++){const $t=Nt[Xt];let _e=null;if(d!==null)_e=d.getViewport($t);else{const U=f.getViewSubImage(h,$t);_e=U.viewport,Xt===0&&(t.setRenderTargetTextures(M,U.colorTexture,h.ignoreDepthValues?void 0:U.depthStencilTexture),t.setRenderTarget(M))}let A=x[Xt];A===void 0&&(A=new wn,A.layers.enable(Xt),A.viewport=new be,x[Xt]=A),A.matrix.fromArray($t.transform.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale),A.projectionMatrix.fromArray($t.projectionMatrix),A.projectionMatrixInverse.copy(A.projectionMatrix).invert(),A.viewport.set(_e.x,_e.y,_e.width,_e.height),Xt===0&&(S.matrix.copy(A.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Et===!0&&S.cameras.push(A)}const kt=s.enabledFeatures;if(kt&&kt.includes("depth-sensing")){const Xt=f.getDepthInformation(Nt[0]);Xt&&Xt.isValid&&Xt.texture&&_.init(t,Xt,s.renderState)}}for(let Nt=0;Nt<y.length;Nt++){const Et=v[Nt],kt=y[Nt];Et!==null&&kt!==void 0&&kt.update(Et,ht,u||o)}Tt&&Tt(ot,ht),ht.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ht}),g=null}const se=new ag;se.setAnimationLoop(Ut),this.setAnimationLoop=function(ot){Tt=ot},this.dispose=function(){}}}const Bs=new Ti,kT=new De;function zT(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,j_(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),c(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,y):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===nn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===nn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),y=M.envMap,v=M.envMapRotation;y&&(m.envMap.value=y,Bs.copy(v),Bs.x*=-1,Bs.y*=-1,Bs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Bs.y*=-1,Bs.z*=-1),m.envMapRotation.value.setFromMatrix4(kT.makeRotationFromEuler(Bs)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function HT(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){const v=y.program;i.uniformBlockBinding(M,v)}function u(M,y){let v=s[M.id];v===void 0&&(g(M),v=c(M),s[M.id]=v,M.addEventListener("dispose",m));const R=y.program;i.updateUBOMapping(M,R);const w=t.render.frame;r[M.id]!==w&&(h(M),r[M.id]=w)}function c(M){const y=f();M.__bindingPointIndex=y;const v=n.createBuffer(),R=M.__size,w=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,R,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,v),v}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const y=s[M.id],v=M.uniforms,R=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let w=0,C=v.length;w<C;w++){const P=Array.isArray(v[w])?v[w]:[v[w]];for(let x=0,S=P.length;x<S;x++){const L=P[x];if(d(L,w,x,R)===!0){const N=L.__offset,k=Array.isArray(L.value)?L.value:[L.value];let Y=0;for(let J=0;J<k.length;J++){const W=k[J],K=_(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,N+Y,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,Y),Y+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,y,v,R){const w=M.value,C=y+"_"+v;if(R[C]===void 0)return typeof w=="number"||typeof w=="boolean"?R[C]=w:R[C]=w.clone(),!0;{const P=R[C];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return R[C]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function g(M){const y=M.uniforms;let v=0;const R=16;for(let C=0,P=y.length;C<P;C++){const x=Array.isArray(y[C])?y[C]:[y[C]];for(let S=0,L=x.length;S<L;S++){const N=x[S],k=Array.isArray(N.value)?N.value:[N.value];for(let Y=0,J=k.length;Y<J;Y++){const W=k[Y],K=_(W),B=v%R,gt=B%K.boundary,mt=B+gt;v+=gt,mt!==0&&R-mt<K.storage&&(v+=R-mt),N.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=K.storage}}}const w=v%R;return w>0&&(v+=R-w),M.__size=v,M.__cache={},this}function _(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){const y=M.target;y.removeEventListener("dispose",m);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:u,dispose:p}}class hg{constructor(t={}){const{canvas:e=uM(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const M=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$n,this.toneMapping=vs,this.toneMappingExposure=1;const v=this;let R=!1,w=0,C=0,P=null,x=-1,S=null;const L=new be,N=new be;let k=null;const Y=new ne(0);let J=0,W=e.width,K=e.height,B=1,gt=null,mt=null;const Tt=new be(0,0,W,K),Ut=new be(0,0,W,K);let se=!1;const ot=new Jf;let ht=!1,Nt=!1;const Et=new De,kt=new De,Xt=new O,$t=new be,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let A=!1;function U(){return P===null?B:1}let E=i;function nt(D,H){return e.getContext(D,H)}try{const D={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Vf}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",Pt,!1),e.addEventListener("webglcontextcreationerror",Dt,!1),E===null){const H="webgl2";if(E=nt(H,D),E===null)throw nt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let q,j,st,lt,Q,T,b,F,X,Z,$,xt,ut,_t,Gt,dt,At,Bt,qt,wt,Zt,Vt,ue,z;function Ct(){q=new Zb(E),q.init(),Vt=new LT(E,q),j=new Xb(E,q,t,Vt),st=new DT(E,q),j.reverseDepthBuffer&&h&&st.buffers.depth.setReversed(!0),lt=new tE(E),Q=new vT,T=new IT(E,q,st,Q,j,Vt,lt),b=new Yb(v),F=new jb(v),X=new aS(E),ue=new Gb(E,X),Z=new Jb(E,X,lt,ue),$=new nE(E,Z,X,lt),qt=new eE(E,j,T),dt=new qb(Q),xt=new gT(v,b,F,q,j,ue,dt),ut=new zT(v,Q),_t=new yT,Gt=new wT(q),Bt=new Vb(v,b,F,st,$,d,l),At=new RT(v,$,j),z=new HT(E,lt,j,st),wt=new Wb(E,q,lt),Zt=new Qb(E,q,lt),lt.programs=xt.programs,v.capabilities=j,v.extensions=q,v.properties=Q,v.renderLists=_t,v.shadowMap=At,v.state=st,v.info=lt}Ct();const at=new BT(v,E);this.xr=at,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const D=q.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=q.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(D){D!==void 0&&(B=D,this.setSize(W,K,!1))},this.getSize=function(D){return D.set(W,K)},this.setSize=function(D,H,tt=!0){if(at.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=D,K=H,e.width=Math.floor(D*B),e.height=Math.floor(H*B),tt===!0&&(e.style.width=D+"px",e.style.height=H+"px"),this.setViewport(0,0,D,H)},this.getDrawingBufferSize=function(D){return D.set(W*B,K*B).floor()},this.setDrawingBufferSize=function(D,H,tt){W=D,K=H,B=tt,e.width=Math.floor(D*tt),e.height=Math.floor(H*tt),this.setViewport(0,0,D,H)},this.getCurrentViewport=function(D){return D.copy(L)},this.getViewport=function(D){return D.copy(Tt)},this.setViewport=function(D,H,tt,et){D.isVector4?Tt.set(D.x,D.y,D.z,D.w):Tt.set(D,H,tt,et),st.viewport(L.copy(Tt).multiplyScalar(B).round())},this.getScissor=function(D){return D.copy(Ut)},this.setScissor=function(D,H,tt,et){D.isVector4?Ut.set(D.x,D.y,D.z,D.w):Ut.set(D,H,tt,et),st.scissor(N.copy(Ut).multiplyScalar(B).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(D){st.setScissorTest(se=D)},this.setOpaqueSort=function(D){gt=D},this.setTransparentSort=function(D){mt=D},this.getClearColor=function(D){return D.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(D=!0,H=!0,tt=!0){let et=0;if(D){let G=!1;if(P!==null){const vt=P.texture.format;G=vt===$f||vt===Yf||vt===qf}if(G){const vt=P.texture.type,Lt=vt===Zi||vt===sr||vt===ta||vt===Qr||vt===Wf||vt===Xf,Ot=Bt.getClearColor(),Ft=Bt.getClearAlpha(),te=Ot.r,ee=Ot.g,Wt=Ot.b;Lt?(g[0]=te,g[1]=ee,g[2]=Wt,g[3]=Ft,E.clearBufferuiv(E.COLOR,0,g)):(_[0]=te,_[1]=ee,_[2]=Wt,_[3]=Ft,E.clearBufferiv(E.COLOR,0,_))}else et|=E.COLOR_BUFFER_BIT}H&&(et|=E.DEPTH_BUFFER_BIT),tt&&(et|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",Pt,!1),e.removeEventListener("webglcontextcreationerror",Dt,!1),Bt.dispose(),_t.dispose(),Gt.dispose(),Q.dispose(),b.dispose(),F.dispose(),$.dispose(),ue.dispose(),z.dispose(),xt.dispose(),at.dispose(),at.removeEventListener("sessionstart",it),at.removeEventListener("sessionend",It),Mt.stop()};function ct(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const D=lt.autoReset,H=At.enabled,tt=At.autoUpdate,et=At.needsUpdate,G=At.type;Ct(),lt.autoReset=D,At.enabled=H,At.autoUpdate=tt,At.needsUpdate=et,At.type=G}function Dt(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function V(D){const H=D.target;H.removeEventListener("dispose",V),rt(H)}function rt(D){ft(D),Q.remove(D)}function ft(D){const H=Q.get(D).programs;H!==void 0&&(H.forEach(function(tt){xt.releaseProgram(tt)}),D.isShaderMaterial&&xt.releaseShaderCache(D))}this.renderBufferDirect=function(D,H,tt,et,G,vt){H===null&&(H=_e);const Lt=G.isMesh&&G.matrixWorld.determinant()<0,Ot=dg(D,H,tt,et,G);st.setMaterial(et,Lt);let Ft=tt.index,te=1;if(et.wireframe===!0){if(Ft=Z.getWireframeAttribute(tt),Ft===void 0)return;te=2}const ee=tt.drawRange,Wt=tt.attributes.position;let fe=ee.start*te,ge=(ee.start+ee.count)*te;vt!==null&&(fe=Math.max(fe,vt.start*te),ge=Math.min(ge,(vt.start+vt.count)*te)),Ft!==null?(fe=Math.max(fe,0),ge=Math.min(ge,Ft.count)):Wt!=null&&(fe=Math.max(fe,0),ge=Math.min(ge,Wt.count));const Ge=ge-fe;if(Ge<0||Ge===1/0)return;ue.setup(G,et,Ot,tt,Ft);let Be,de=wt;if(Ft!==null&&(Be=X.get(Ft),de=Zt,de.setIndex(Be)),G.isMesh)et.wireframe===!0?(st.setLineWidth(et.wireframeLinewidth*U()),de.setMode(E.LINES)):de.setMode(E.TRIANGLES);else if(G.isLine){let Yt=et.linewidth;Yt===void 0&&(Yt=1),st.setLineWidth(Yt*U()),G.isLineSegments?de.setMode(E.LINES):G.isLineLoop?de.setMode(E.LINE_LOOP):de.setMode(E.LINE_STRIP)}else G.isPoints?de.setMode(E.POINTS):G.isSprite&&de.setMode(E.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)de.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(q.get("WEBGL_multi_draw"))de.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Yt=G._multiDrawStarts,Qe=G._multiDrawCounts,ve=G._multiDrawCount,ti=Ft?X.get(Ft).bytesPerElement:1,lr=Q.get(et).currentProgram.getUniforms();for(let In=0;In<ve;In++)lr.setValue(E,"_gl_DrawID",In),de.render(Yt[In]/ti,Qe[In])}else if(G.isInstancedMesh)de.renderInstances(fe,Ge,G.count);else if(tt.isInstancedBufferGeometry){const Yt=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,Qe=Math.min(tt.instanceCount,Yt);de.renderInstances(fe,Ge,Qe)}else de.render(fe,Ge)};function pt(D,H,tt){D.transparent===!0&&D.side===tn&&D.forceSinglePass===!1?(D.side=nn,D.needsUpdate=!0,fa(D,H,tt),D.side=ji,D.needsUpdate=!0,fa(D,H,tt),D.side=tn):fa(D,H,tt)}this.compile=function(D,H,tt=null){tt===null&&(tt=D),p=Gt.get(tt),p.init(H),y.push(p),tt.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),D!==tt&&D.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();const et=new Set;return D.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const vt=G.material;if(vt)if(Array.isArray(vt))for(let Lt=0;Lt<vt.length;Lt++){const Ot=vt[Lt];pt(Ot,tt,G),et.add(Ot)}else pt(vt,tt,G),et.add(vt)}),y.pop(),p=null,et},this.compileAsync=function(D,H,tt=null){const et=this.compile(D,H,tt);return new Promise(G=>{function vt(){if(et.forEach(function(Lt){Q.get(Lt).currentProgram.isReady()&&et.delete(Lt)}),et.size===0){G(D);return}setTimeout(vt,10)}q.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Jt=null;function yt(D){Jt&&Jt(D)}function it(){Mt.stop()}function It(){Mt.start()}const Mt=new ag;Mt.setAnimationLoop(yt),typeof self<"u"&&Mt.setContext(self),this.setAnimationLoop=function(D){Jt=D,at.setAnimationLoop(D),D===null?Mt.stop():Mt.start()},at.addEventListener("sessionstart",it),at.addEventListener("sessionend",It),this.render=function(D,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(H),H=at.getCamera()),D.isScene===!0&&D.onBeforeRender(v,D,H,P),p=Gt.get(D,y.length),p.init(H),y.push(p),kt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ot.setFromProjectionMatrix(kt),Nt=this.localClippingEnabled,ht=dt.init(this.clippingPlanes,Nt),m=_t.get(D,M.length),m.init(),M.push(m),at.enabled===!0&&at.isPresenting===!0){const vt=v.xr.getDepthSensingMesh();vt!==null&&ce(vt,H,-1/0,v.sortObjects)}ce(D,H,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(gt,mt),A=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,A&&Bt.addToRenderList(m,D),this.info.render.frame++,ht===!0&&dt.beginShadows();const tt=p.state.shadowsArray;At.render(tt,D,H),ht===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const et=m.opaque,G=m.transmissive;if(p.setupLights(),H.isArrayCamera){const vt=H.cameras;if(G.length>0)for(let Lt=0,Ot=vt.length;Lt<Ot;Lt++){const Ft=vt[Lt];wi(et,G,D,Ft)}A&&Bt.render(D);for(let Lt=0,Ot=vt.length;Lt<Ot;Lt++){const Ft=vt[Lt];Ae(m,D,Ft,Ft.viewport)}}else G.length>0&&wi(et,G,D,H),A&&Bt.render(D),Ae(m,D,H);P!==null&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),D.isScene===!0&&D.onAfterRender(v,D,H),ue.resetDefaultState(),x=-1,S=null,y.pop(),y.length>0?(p=y[y.length-1],ht===!0&&dt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function ce(D,H,tt,et){if(D.visible===!1)return;if(D.layers.test(H.layers)){if(D.isGroup)tt=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(H);else if(D.isLight)p.pushLight(D),D.castShadow&&p.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||ot.intersectsSprite(D)){et&&$t.setFromMatrixPosition(D.matrixWorld).applyMatrix4(kt);const Lt=$.update(D),Ot=D.material;Ot.visible&&m.push(D,Lt,Ot,tt,$t.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||ot.intersectsObject(D))){const Lt=$.update(D),Ot=D.material;if(et&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),$t.copy(D.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),$t.copy(Lt.boundingSphere.center)),$t.applyMatrix4(D.matrixWorld).applyMatrix4(kt)),Array.isArray(Ot)){const Ft=Lt.groups;for(let te=0,ee=Ft.length;te<ee;te++){const Wt=Ft[te],fe=Ot[Wt.materialIndex];fe&&fe.visible&&m.push(D,Lt,fe,tt,$t.z,Wt)}}else Ot.visible&&m.push(D,Lt,Ot,tt,$t.z,null)}}const vt=D.children;for(let Lt=0,Ot=vt.length;Lt<Ot;Lt++)ce(vt[Lt],H,tt,et)}function Ae(D,H,tt,et){const G=D.opaque,vt=D.transmissive,Lt=D.transparent;p.setupLightsView(tt),ht===!0&&dt.setGlobalState(v.clippingPlanes,tt),et&&st.viewport(L.copy(et)),G.length>0&&ts(G,H,tt),vt.length>0&&ts(vt,H,tt),Lt.length>0&&ts(Lt,H,tt),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function wi(D,H,tt,et){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[et.id]===void 0&&(p.state.transmissionRenderTarget[et.id]=new rr(1,1,{generateMipmaps:!0,type:q.has("EXT_color_buffer_half_float")||q.has("EXT_color_buffer_float")?oa:Zi,minFilter:Ks,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pe.workingColorSpace}));const vt=p.state.transmissionRenderTarget[et.id],Lt=et.viewport||L;vt.setSize(Lt.z,Lt.w);const Ot=v.getRenderTarget();v.setRenderTarget(vt),v.getClearColor(Y),J=v.getClearAlpha(),J<1&&v.setClearColor(16777215,.5),v.clear(),A&&Bt.render(tt);const Ft=v.toneMapping;v.toneMapping=vs;const te=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),p.setupLightsView(et),ht===!0&&dt.setGlobalState(v.clippingPlanes,et),ts(D,tt,et),T.updateMultisampleRenderTarget(vt),T.updateRenderTargetMipmap(vt),q.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Wt=0,fe=H.length;Wt<fe;Wt++){const ge=H[Wt],Ge=ge.object,Be=ge.geometry,de=ge.material,Yt=ge.group;if(de.side===tn&&Ge.layers.test(et.layers)){const Qe=de.side;de.side=nn,de.needsUpdate=!0,oo(Ge,tt,et,Be,de,Yt),de.side=Qe,de.needsUpdate=!0,ee=!0}}ee===!0&&(T.updateMultisampleRenderTarget(vt),T.updateRenderTargetMipmap(vt))}v.setRenderTarget(Ot),v.setClearColor(Y,J),te!==void 0&&(et.viewport=te),v.toneMapping=Ft}function ts(D,H,tt){const et=H.isScene===!0?H.overrideMaterial:null;for(let G=0,vt=D.length;G<vt;G++){const Lt=D[G],Ot=Lt.object,Ft=Lt.geometry,te=et===null?Lt.material:et,ee=Lt.group;Ot.layers.test(tt.layers)&&oo(Ot,H,tt,Ft,te,ee)}}function oo(D,H,tt,et,G,vt){D.onBeforeRender(v,H,tt,et,G,vt),D.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),G.onBeforeRender(v,H,tt,et,D,vt),G.transparent===!0&&G.side===tn&&G.forceSinglePass===!1?(G.side=nn,G.needsUpdate=!0,v.renderBufferDirect(tt,H,et,G,D,vt),G.side=ji,G.needsUpdate=!0,v.renderBufferDirect(tt,H,et,G,D,vt),G.side=tn):v.renderBufferDirect(tt,H,et,G,D,vt),D.onAfterRender(v,H,tt,et,G,vt)}function fa(D,H,tt){H.isScene!==!0&&(H=_e);const et=Q.get(D),G=p.state.lights,vt=p.state.shadowsArray,Lt=G.state.version,Ot=xt.getParameters(D,G.state,vt,H,tt),Ft=xt.getProgramCacheKey(Ot);let te=et.programs;et.environment=D.isMeshStandardMaterial?H.environment:null,et.fog=H.fog,et.envMap=(D.isMeshStandardMaterial?F:b).get(D.envMap||et.environment),et.envMapRotation=et.environment!==null&&D.envMap===null?H.environmentRotation:D.envMapRotation,te===void 0&&(D.addEventListener("dispose",V),te=new Map,et.programs=te);let ee=te.get(Ft);if(ee!==void 0){if(et.currentProgram===ee&&et.lightsStateVersion===Lt)return ah(D,Ot),ee}else Ot.uniforms=xt.getUniforms(D),D.onBeforeCompile(Ot,v),ee=xt.acquireProgram(Ot,Ft),te.set(Ft,ee),et.uniforms=Ot.uniforms;const Wt=et.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Wt.clippingPlanes=dt.uniform),ah(D,Ot),et.needsLights=mg(D),et.lightsStateVersion=Lt,et.needsLights&&(Wt.ambientLightColor.value=G.state.ambient,Wt.lightProbe.value=G.state.probe,Wt.directionalLights.value=G.state.directional,Wt.directionalLightShadows.value=G.state.directionalShadow,Wt.spotLights.value=G.state.spot,Wt.spotLightShadows.value=G.state.spotShadow,Wt.rectAreaLights.value=G.state.rectArea,Wt.ltc_1.value=G.state.rectAreaLTC1,Wt.ltc_2.value=G.state.rectAreaLTC2,Wt.pointLights.value=G.state.point,Wt.pointLightShadows.value=G.state.pointShadow,Wt.hemisphereLights.value=G.state.hemi,Wt.directionalShadowMap.value=G.state.directionalShadowMap,Wt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Wt.spotShadowMap.value=G.state.spotShadowMap,Wt.spotLightMatrix.value=G.state.spotLightMatrix,Wt.spotLightMap.value=G.state.spotLightMap,Wt.pointShadowMap.value=G.state.pointShadowMap,Wt.pointShadowMatrix.value=G.state.pointShadowMatrix),et.currentProgram=ee,et.uniformsList=null,ee}function oh(D){if(D.uniformsList===null){const H=D.currentProgram.getUniforms();D.uniformsList=Qa.seqWithValue(H.seq,D.uniforms)}return D.uniformsList}function ah(D,H){const tt=Q.get(D);tt.outputColorSpace=H.outputColorSpace,tt.batching=H.batching,tt.batchingColor=H.batchingColor,tt.instancing=H.instancing,tt.instancingColor=H.instancingColor,tt.instancingMorph=H.instancingMorph,tt.skinning=H.skinning,tt.morphTargets=H.morphTargets,tt.morphNormals=H.morphNormals,tt.morphColors=H.morphColors,tt.morphTargetsCount=H.morphTargetsCount,tt.numClippingPlanes=H.numClippingPlanes,tt.numIntersection=H.numClipIntersection,tt.vertexAlphas=H.vertexAlphas,tt.vertexTangents=H.vertexTangents,tt.toneMapping=H.toneMapping}function dg(D,H,tt,et,G){H.isScene!==!0&&(H=_e),T.resetTextureUnits();const vt=H.fog,Lt=et.isMeshStandardMaterial?H.environment:null,Ot=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:eo,Ft=(et.isMeshStandardMaterial?F:b).get(et.envMap||Lt),te=et.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,ee=!!tt.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Wt=!!tt.morphAttributes.position,fe=!!tt.morphAttributes.normal,ge=!!tt.morphAttributes.color;let Ge=vs;et.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ge=v.toneMapping);const Be=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,de=Be!==void 0?Be.length:0,Yt=Q.get(et),Qe=p.state.lights;if(ht===!0&&(Nt===!0||D!==S)){const hn=D===S&&et.id===x;dt.setState(et,D,hn)}let ve=!1;et.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==Qe.state.version||Yt.outputColorSpace!==Ot||G.isBatchedMesh&&Yt.batching===!1||!G.isBatchedMesh&&Yt.batching===!0||G.isBatchedMesh&&Yt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Yt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Yt.instancing===!1||!G.isInstancedMesh&&Yt.instancing===!0||G.isSkinnedMesh&&Yt.skinning===!1||!G.isSkinnedMesh&&Yt.skinning===!0||G.isInstancedMesh&&Yt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Yt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Yt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Yt.instancingMorph===!1&&G.morphTexture!==null||Yt.envMap!==Ft||et.fog===!0&&Yt.fog!==vt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==dt.numPlanes||Yt.numIntersection!==dt.numIntersection)||Yt.vertexAlphas!==te||Yt.vertexTangents!==ee||Yt.morphTargets!==Wt||Yt.morphNormals!==fe||Yt.morphColors!==ge||Yt.toneMapping!==Ge||Yt.morphTargetsCount!==de)&&(ve=!0):(ve=!0,Yt.__version=et.version);let ti=Yt.currentProgram;ve===!0&&(ti=fa(et,H,G));let lr=!1,In=!1,ao=!1;const Ie=ti.getUniforms(),Gn=Yt.uniforms;if(st.useProgram(ti.program)&&(lr=!0,In=!0,ao=!0),et.id!==x&&(x=et.id,In=!0),lr||S!==D){st.buffers.depth.getReversed()?(Et.copy(D.projectionMatrix),hM(Et),dM(Et),Ie.setValue(E,"projectionMatrix",Et)):Ie.setValue(E,"projectionMatrix",D.projectionMatrix),Ie.setValue(E,"viewMatrix",D.matrixWorldInverse);const Mn=Ie.map.cameraPosition;Mn!==void 0&&Mn.setValue(E,Xt.setFromMatrixPosition(D.matrixWorld)),j.logarithmicDepthBuffer&&Ie.setValue(E,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Ie.setValue(E,"isOrthographic",D.isOrthographicCamera===!0),S!==D&&(S=D,In=!0,ao=!0)}if(G.isSkinnedMesh){Ie.setOptional(E,G,"bindMatrix"),Ie.setOptional(E,G,"bindMatrixInverse");const hn=G.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Ie.setValue(E,"boneTexture",hn.boneTexture,T))}G.isBatchedMesh&&(Ie.setOptional(E,G,"batchingTexture"),Ie.setValue(E,"batchingTexture",G._matricesTexture,T),Ie.setOptional(E,G,"batchingIdTexture"),Ie.setValue(E,"batchingIdTexture",G._indirectTexture,T),Ie.setOptional(E,G,"batchingColorTexture"),G._colorsTexture!==null&&Ie.setValue(E,"batchingColorTexture",G._colorsTexture,T));const Wn=tt.morphAttributes;if((Wn.position!==void 0||Wn.normal!==void 0||Wn.color!==void 0)&&qt.update(G,tt,ti),(In||Yt.receiveShadow!==G.receiveShadow)&&(Yt.receiveShadow=G.receiveShadow,Ie.setValue(E,"receiveShadow",G.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(Gn.envMap.value=Ft,Gn.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),et.isMeshStandardMaterial&&et.envMap===null&&H.environment!==null&&(Gn.envMapIntensity.value=H.environmentIntensity),In&&(Ie.setValue(E,"toneMappingExposure",v.toneMappingExposure),Yt.needsLights&&pg(Gn,ao),vt&&et.fog===!0&&ut.refreshFogUniforms(Gn,vt),ut.refreshMaterialUniforms(Gn,et,B,K,p.state.transmissionRenderTarget[D.id]),Qa.upload(E,oh(Yt),Gn,T)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(Qa.upload(E,oh(Yt),Gn,T),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Ie.setValue(E,"center",G.center),Ie.setValue(E,"modelViewMatrix",G.modelViewMatrix),Ie.setValue(E,"normalMatrix",G.normalMatrix),Ie.setValue(E,"modelMatrix",G.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){const hn=et.uniformsGroups;for(let Mn=0,Bl=hn.length;Mn<Bl;Mn++){const ws=hn[Mn];z.update(ws,ti),z.bind(ws,ti)}}return ti}function pg(D,H){D.ambientLightColor.needsUpdate=H,D.lightProbe.needsUpdate=H,D.directionalLights.needsUpdate=H,D.directionalLightShadows.needsUpdate=H,D.pointLights.needsUpdate=H,D.pointLightShadows.needsUpdate=H,D.spotLights.needsUpdate=H,D.spotLightShadows.needsUpdate=H,D.rectAreaLights.needsUpdate=H,D.hemisphereLights.needsUpdate=H}function mg(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(D,H,tt){Q.get(D.texture).__webglTexture=H,Q.get(D.depthTexture).__webglTexture=tt;const et=Q.get(D);et.__hasExternalTextures=!0,et.__autoAllocateDepthBuffer=tt===void 0,et.__autoAllocateDepthBuffer||q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),et.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,H){const tt=Q.get(D);tt.__webglFramebuffer=H,tt.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(D,H=0,tt=0){P=D,w=H,C=tt;let et=!0,G=null,vt=!1,Lt=!1;if(D){const Ft=Q.get(D);if(Ft.__useDefaultFramebuffer!==void 0)st.bindFramebuffer(E.FRAMEBUFFER,null),et=!1;else if(Ft.__webglFramebuffer===void 0)T.setupRenderTarget(D);else if(Ft.__hasExternalTextures)T.rebindTextures(D,Q.get(D.texture).__webglTexture,Q.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const Wt=D.depthTexture;if(Ft.__boundDepthTexture!==Wt){if(Wt!==null&&Q.has(Wt)&&(D.width!==Wt.image.width||D.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(D)}}const te=D.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Lt=!0);const ee=Q.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(ee[H])?G=ee[H][tt]:G=ee[H],vt=!0):D.samples>0&&T.useMultisampledRTT(D)===!1?G=Q.get(D).__webglMultisampledFramebuffer:Array.isArray(ee)?G=ee[tt]:G=ee,L.copy(D.viewport),N.copy(D.scissor),k=D.scissorTest}else L.copy(Tt).multiplyScalar(B).floor(),N.copy(Ut).multiplyScalar(B).floor(),k=se;if(st.bindFramebuffer(E.FRAMEBUFFER,G)&&et&&st.drawBuffers(D,G),st.viewport(L),st.scissor(N),st.setScissorTest(k),vt){const Ft=Q.get(D.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ft.__webglTexture,tt)}else if(Lt){const Ft=Q.get(D.texture),te=H||0;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,Ft.__webglTexture,tt||0,te)}x=-1},this.readRenderTargetPixels=function(D,H,tt,et,G,vt,Lt){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Q.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot){st.bindFramebuffer(E.FRAMEBUFFER,Ot);try{const Ft=D.texture,te=Ft.format,ee=Ft.type;if(!j.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=D.width-et&&tt>=0&&tt<=D.height-G&&E.readPixels(H,tt,et,G,Vt.convert(te),Vt.convert(ee),vt)}finally{const Ft=P!==null?Q.get(P).__webglFramebuffer:null;st.bindFramebuffer(E.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(D,H,tt,et,G,vt,Lt){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=Q.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot){const Ft=D.texture,te=Ft.format,ee=Ft.type;if(!j.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=D.width-et&&tt>=0&&tt<=D.height-G){st.bindFramebuffer(E.FRAMEBUFFER,Ot);const Wt=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,Wt),E.bufferData(E.PIXEL_PACK_BUFFER,vt.byteLength,E.STREAM_READ),E.readPixels(H,tt,et,G,Vt.convert(te),Vt.convert(ee),0);const fe=P!==null?Q.get(P).__webglFramebuffer:null;st.bindFramebuffer(E.FRAMEBUFFER,fe);const ge=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await fM(E,ge,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,Wt),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,vt),E.deleteBuffer(Wt),E.deleteSync(ge),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(D,H=null,tt=0){D.isTexture!==!0&&(Cr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,D=arguments[1]);const et=Math.pow(2,-tt),G=Math.floor(D.image.width*et),vt=Math.floor(D.image.height*et),Lt=H!==null?H.x:0,Ot=H!==null?H.y:0;T.setTexture2D(D,0),E.copyTexSubImage2D(E.TEXTURE_2D,tt,0,0,Lt,Ot,G,vt),st.unbindTexture()};const _g=E.createFramebuffer(),gg=E.createFramebuffer();this.copyTextureToTexture=function(D,H,tt=null,et=null,G=0,vt=null){D.isTexture!==!0&&(Cr("WebGLRenderer: copyTextureToTexture function signature has changed."),et=arguments[0]||null,D=arguments[1],H=arguments[2],vt=arguments[3]||0,tt=null),vt===null&&(G!==0?(Cr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),vt=G,G=0):vt=0);let Lt,Ot,Ft,te,ee,Wt,fe,ge,Ge;const Be=D.isCompressedTexture?D.mipmaps[vt]:D.image;if(tt!==null)Lt=tt.max.x-tt.min.x,Ot=tt.max.y-tt.min.y,Ft=tt.isBox3?tt.max.z-tt.min.z:1,te=tt.min.x,ee=tt.min.y,Wt=tt.isBox3?tt.min.z:0;else{const Wn=Math.pow(2,-G);Lt=Math.floor(Be.width*Wn),Ot=Math.floor(Be.height*Wn),D.isDataArrayTexture?Ft=Be.depth:D.isData3DTexture?Ft=Math.floor(Be.depth*Wn):Ft=1,te=0,ee=0,Wt=0}et!==null?(fe=et.x,ge=et.y,Ge=et.z):(fe=0,ge=0,Ge=0);const de=Vt.convert(H.format),Yt=Vt.convert(H.type);let Qe;H.isData3DTexture?(T.setTexture3D(H,0),Qe=E.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(T.setTexture2DArray(H,0),Qe=E.TEXTURE_2D_ARRAY):(T.setTexture2D(H,0),Qe=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,H.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,H.unpackAlignment);const ve=E.getParameter(E.UNPACK_ROW_LENGTH),ti=E.getParameter(E.UNPACK_IMAGE_HEIGHT),lr=E.getParameter(E.UNPACK_SKIP_PIXELS),In=E.getParameter(E.UNPACK_SKIP_ROWS),ao=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,Be.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Be.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,te),E.pixelStorei(E.UNPACK_SKIP_ROWS,ee),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Wt);const Ie=D.isDataArrayTexture||D.isData3DTexture,Gn=H.isDataArrayTexture||H.isData3DTexture;if(D.isDepthTexture){const Wn=Q.get(D),hn=Q.get(H),Mn=Q.get(Wn.__renderTarget),Bl=Q.get(hn.__renderTarget);st.bindFramebuffer(E.READ_FRAMEBUFFER,Mn.__webglFramebuffer),st.bindFramebuffer(E.DRAW_FRAMEBUFFER,Bl.__webglFramebuffer);for(let ws=0;ws<Ft;ws++)Ie&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Q.get(D).__webglTexture,G,Wt+ws),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Q.get(H).__webglTexture,vt,Ge+ws)),E.blitFramebuffer(te,ee,Lt,Ot,fe,ge,Lt,Ot,E.DEPTH_BUFFER_BIT,E.NEAREST);st.bindFramebuffer(E.READ_FRAMEBUFFER,null),st.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(G!==0||D.isRenderTargetTexture||Q.has(D)){const Wn=Q.get(D),hn=Q.get(H);st.bindFramebuffer(E.READ_FRAMEBUFFER,_g),st.bindFramebuffer(E.DRAW_FRAMEBUFFER,gg);for(let Mn=0;Mn<Ft;Mn++)Ie?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Wn.__webglTexture,G,Wt+Mn):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Wn.__webglTexture,G),Gn?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,hn.__webglTexture,vt,Ge+Mn):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,hn.__webglTexture,vt),G!==0?E.blitFramebuffer(te,ee,Lt,Ot,fe,ge,Lt,Ot,E.COLOR_BUFFER_BIT,E.NEAREST):Gn?E.copyTexSubImage3D(Qe,vt,fe,ge,Ge+Mn,te,ee,Lt,Ot):E.copyTexSubImage2D(Qe,vt,fe,ge,te,ee,Lt,Ot);st.bindFramebuffer(E.READ_FRAMEBUFFER,null),st.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else Gn?D.isDataTexture||D.isData3DTexture?E.texSubImage3D(Qe,vt,fe,ge,Ge,Lt,Ot,Ft,de,Yt,Be.data):H.isCompressedArrayTexture?E.compressedTexSubImage3D(Qe,vt,fe,ge,Ge,Lt,Ot,Ft,de,Be.data):E.texSubImage3D(Qe,vt,fe,ge,Ge,Lt,Ot,Ft,de,Yt,Be):D.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,vt,fe,ge,Lt,Ot,de,Yt,Be.data):D.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,vt,fe,ge,Be.width,Be.height,de,Be.data):E.texSubImage2D(E.TEXTURE_2D,vt,fe,ge,Lt,Ot,de,Yt,Be);E.pixelStorei(E.UNPACK_ROW_LENGTH,ve),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,ti),E.pixelStorei(E.UNPACK_SKIP_PIXELS,lr),E.pixelStorei(E.UNPACK_SKIP_ROWS,In),E.pixelStorei(E.UNPACK_SKIP_IMAGES,ao),vt===0&&H.generateMipmaps&&E.generateMipmap(Qe),st.unbindTexture()},this.copyTextureToTexture3D=function(D,H,tt=null,et=null,G=0){return D.isTexture!==!0&&(Cr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),tt=arguments[0]||null,et=arguments[1]||null,D=arguments[2],H=arguments[3],G=arguments[4]||0),Cr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,H,tt,et,G)},this.initRenderTarget=function(D){Q.get(D).__webglFramebuffer===void 0&&T.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?T.setTextureCube(D,0):D.isData3DTexture?T.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?T.setTexture2DArray(D,0):T.setTexture2D(D,0),st.unbindTexture()},this.resetState=function(){w=0,C=0,P=null,st.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}}function VT(n){const t=he([]);let e,i,s,r=new Ht,o=new Ht;const a=[{depth:-2,scale:6.1,name:"sky",title:"SKYFOLD MATTE",subtitle:"天幕底片 / 高空异象保留位",aspect:16/9,accent:"rgba(255, 231, 178, 0.92)"},{depth:-.4,scale:4.6,name:"boy",title:"SCALE FIGURE",subtitle:"远景尺度参照 / 人类尺寸锚点",aspect:4/5,accent:"rgba(144, 214, 255, 0.9)"},{depth:1.1,scale:3.9,name:"woman",title:"HERO SILHOUETTE",subtitle:"主角剪影保留位 / 第一眼情绪层",aspect:4/5,accent:"rgba(255, 216, 143, 0.92)"},{depth:2.5,scale:5.3,name:"grass",title:"WIND FOREGROUND",subtitle:"前景风场 / 速度线与遮挡层",aspect:21/9,accent:"rgba(255, 255, 255, 0.9)"}],l=()=>{e=new Q_,i=new wn(55,window.innerWidth/window.innerHeight,.1,1e3),i.position.z=6,n.value&&(s=new hg({canvas:n.value,antialias:!0,alpha:!1}),s.setClearColor(328965,1),s.setSize(window.innerWidth,window.innerHeight),s.setPixelRatio(window.devicePixelRatio),s.sortObjects=!0)},u=_=>{const m=document.createElement("canvas");m.width=1600,m.height=Math.round(m.width/_.aspect);const p=m.getContext("2d");if(!p)return new Od(m);p.fillStyle="#050505",p.fillRect(0,0,m.width,m.height),p.strokeStyle="rgba(255,255,255,0.18)",p.lineWidth=4,p.strokeRect(28,28,m.width-56,m.height-56),p.strokeStyle=_.accent.replace("0.92","0.22").replace("0.9","0.22"),p.lineWidth=1.5,p.setLineDash([14,12]),p.strokeRect(58,58,m.width-116,m.height-116),p.setLineDash([]),p.fillStyle="rgba(255,255,255,0.035)";for(let y=0;y<4;y+=1)p.fillRect(88,124+y*26,m.width-176,6);p.fillStyle="rgba(255,255,255,0.22)",p.font='700 48px "Space Mono", monospace',p.fillText(_.title,88,200),p.fillStyle="rgba(255,255,255,0.14)",p.font='500 24px "Space Mono", monospace',p.fillText(_.subtitle,88,242),p.fillStyle="rgba(255,255,255,0.12)",p.font='400 18px "Space Mono", monospace',p.fillText(`LAYER / ${_.name.toUpperCase()} / DEPTH ${_.depth}`,88,m.height-84);const M=new Od(m);return M.needsUpdate=!0,M},c=()=>{t.value.forEach((_,m)=>{const p=m%2===0?-1:1,M=_.material;zt.killTweensOf(_.position),zt.killTweensOf(_.rotation),zt.killTweensOf(M),_.position.x=p*(11+m*2.2),_.position.y=m===0?-.35:m===3?.35:0,_.rotation.y=p*.9,_.rotation.z=p*.04,M.opacity=.12,zt.to(_.position,{x:0,y:0,duration:1.6,delay:m*.16,ease:"power3.out"}),zt.to(_.rotation,{y:0,z:0,duration:1.5,delay:m*.16,ease:"power2.out"}),zt.to(M,{opacity:1,duration:1.1,delay:m*.16+.12,ease:"power2.inOut"})})},f=()=>{a.forEach((_,m)=>{const p=u(_),M=new si(_.aspect*_.scale,_.scale),y=new qe({map:p,transparent:!1,side:tn,color:new ne(1,1,1),depthWrite:!0}),v=new Me(M,y);v.position.set(0,0,_.depth),v.userData.name=_.name,v.renderOrder=-_.depth,v.position.x=0,v.rotation.y=0,v.material.opacity=1,e&&e.add(v),t.value.push(v)}),requestAnimationFrame(()=>{c()})},h=()=>{requestAnimationFrame(h),r.x+=(o.x-r.x)*.08,r.y+=(o.y-r.y)*.08,t.value.forEach(M=>{const y=M.position.z*.5;M.position.x=r.x*y,M.position.y=-r.y*y});const _=t.value.find(M=>M.userData.name==="grass");_&&(_.rotation.z=Math.sin(Date.now()*.001)*.02);const m=t.value.find(M=>M.userData.name==="woman");m&&(m.rotation.z=Math.sin(Date.now()*8e-4)*.015);const p=t.value.find(M=>M.userData.name==="sky");p&&(p.position.x+=Math.sin(Date.now()*3e-4)*.001),s&&e&&i&&s.render(e,i)};return{initScene:l,loadLayers:f,playArchiveReveal:c,animate:h,onResize:()=>{!i||!s||(i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight))},updateMouseTarget:_=>{o.x=_.clientX/window.innerWidth-.5,o.y=_.clientY/window.innerHeight-.5},layers:t,scene:e,camera:i,renderer:s,mouse:r,targetMouse:o}}function GT(n,t,e,i){return{onMouseMove:a=>{},onClick:a=>{const l=new og,u=new Ht;u.x=a.clientX/window.innerWidth*2-1,u.y=-(a.clientY/window.innerHeight)*2+1,l.setFromCamera(u,i);const c=l.intersectObjects(e.value);if(c.length>0){const f=c[0].object,h=f.userData.name;zt.timeline().to(f.scale,{x:1.1,y:1.1,z:1.1,duration:.2,ease:"power2.out"}).to(f.scale,{x:1,y:1,z:1,duration:.3,ease:"elastic.out(1, 0.5)"}),zt.timeline().to(f.rotation,{z:Math.random()>.5?.1:-.1,duration:.2,ease:"power1.out"}).to(f.rotation,{z:0,duration:.4,ease:"elastic.out(1, 0.3)"});const d={woman:"展签 01 / 前景人物层。用于建立主视觉的第一眼情绪和风向。正式 CG 中她会被替换成进入 WERISS 的现场角色。",boy:"展签 02 / 远景陪体层。这个位置负责提供尺度参照，让山体和天空的压迫感有了可比较的人类尺寸。",grass:"展签 03 / 前景风场层。它不只是草，而是镜头前方的速度线。风一旦成立，整个画面就开始有叙事。",sky:"展签 04 / 天幕底片层。后续会叠加红脊、极光磁暴或 skyfold 光带，这里是所有关键 CG 的情绪起点。"};d[h]&&(t.value=d[h])}},startExplore:()=>{n.value=!0,zt.timeline().to(i.position,{z:5.5,duration:2,ease:"power2.inOut"}).to(i.rotation,{z:.02,duration:.5,ease:"power1.inOut",yoyo:!0,repeat:1},"-=1");const a=e.value.find(l=>l.userData.name==="grass");a&&zt.timeline().to(a.scale,{x:.7,y:.7,z:.7,duration:2,ease:"power2.inOut"}).to(a.position,{y:.5,duration:2,ease:"power2.inOut"},"-=2"),e.value.forEach((l,u)=>{l.userData.name!=="grass"&&zt.to(l.position,{y:l.position.y+(Math.random()-.5)*.3,duration:2,ease:"power1.inOut",delay:u*.1})})}}}const WT={class:"page-monet"},XT={class:"glass-card"},qT={class:"handwriting"},YT={key:0,class:"branch-tree-stage"},$T={class:"branch-tree-plane"},KT={class:"tree-trunk-id"},jT={class:"tree-choice-id"},ZT={class:"tree-next-step"},JT={class:"tree-choice-id"},QT={__name:"MonetView",props:{active:{type:Boolean,required:!0}},setup(n){const t=n,e=he(null),i=he(!1),s=he(null),r=[{id:"ENTRY",title:"进入回响链接",note:"起点 / ECHO DESK 接入 WERISS。",x:50,y:84,kind:"root"},{id:"Ω-01",title:"红脊初判",note:"第一次判断风险基调。",x:50,y:208,kind:"event"},{id:"Ψ-02",title:"发光雾墙",note:"不管前一轮怎么选，都会汇入这一轮。",x:50,y:620,kind:"event"},{id:"Δ-03",title:"蓝裂口",note:"第二轮选择后，故事继续向下推进。",x:50,y:1020,kind:"event"},{id:"Λ-04",title:"双地图失真",note:"第三轮之后，路线重新汇入主干。",x:50,y:1420,kind:"event"},{id:"X-05",title:"天穹展开",note:"最后一轮主干事件，下一次分叉直接导向结局。",x:50,y:1820,kind:"event"}],o=[{id:"fork-a",x:50,y:310,label:"分叉 A",note:"第一次建议"},{id:"fork-b",x:50,y:710,label:"分叉 B",note:"雾墙抉择"},{id:"fork-c",x:50,y:1110,label:"分叉 C",note:"裂口抉择"},{id:"fork-d",x:50,y:1510,label:"分叉 D",note:"失真抉择"},{id:"fork-e",x:50,y:1910,label:"终局分叉",note:"结局入口"}],a=[{id:"A1",label:"高处确认",note:"稳住视野，风险较低。",next:"Ψ-02",x:22,y:420,tone:"calm"},{id:"A2",label:"继续逼近",note:"真相推进更快。",next:"Ψ-02",x:50,y:446,tone:"risk"},{id:"A3",label:"校准传感器",note:"先拿参数，再继续推进。",next:"Ψ-02",x:78,y:420,tone:"calm"},{id:"B1",label:"穿越雾墙",note:"直接冲进更深层画面。",next:"Δ-03",x:20,y:820,tone:"risk"},{id:"B2",label:"后撤保链",note:"优先维持稳定。",next:"Δ-03",x:50,y:846,tone:"calm"},{id:"B3",label:"横移找掩体",note:"保留中间态继续观察。",next:"Δ-03",x:80,y:820,tone:"calm"},{id:"C1",label:"沿边缘前进",note:"不直接下裂口。",next:"Λ-04",x:22,y:1220,tone:"calm"},{id:"C2",label:"直接下行",note:"进入深部奇观线。",next:"Λ-04",x:50,y:1246,tone:"reveal"},{id:"C3",label:"先放探针",note:"以更稳方式拿证据。",next:"Λ-04",x:78,y:1220,tone:"reveal"},{id:"D1",label:"盲走地形",note:"信脚下，不信地图。",next:"X-05",x:22,y:1620,tone:"calm"},{id:"D2",label:"锁旧地图",note:"真相更近，现实更薄。",next:"X-05",x:50,y:1646,tone:"risk"},{id:"D3",label:"切掉辅助层",note:"保链路，失去部分视野。",next:"X-05",x:78,y:1620,tone:"reveal"}],l=[{id:"E1",label:"返回",note:"生还结局 / 带回残缺记录。",x:22,y:2056},{id:"E2",label:"继续深入",note:"求真结局 / 链路逐步熄灭。",x:50,y:2072},{id:"E3",label:"原地维持链路",note:"回响结局 / 形成循环闭环。",x:78,y:2056}],{initScene:u,loadLayers:c,playArchiveReveal:f,animate:h,onResize:d,updateMouseTarget:g,layers:_,camera:m,renderer:p}=VT(e),{onClick:M,startExplore:y}=GT(i,s,_,m),v=()=>{i.value=!1,s.value=null,m&&(zt.killTweensOf(m.position),zt.killTweensOf(m.rotation),zt.to(m.position,{z:6,duration:1.2,ease:"power2.inOut"}),zt.to(m.rotation,{z:0,duration:.9,ease:"power2.out"})),_.value.forEach(w=>{zt.killTweensOf(w.position),zt.killTweensOf(w.scale),zt.killTweensOf(w.rotation),zt.to(w.position,{x:0,y:0,duration:.9,ease:"power2.out"}),zt.to(w.scale,{x:1,y:1,z:1,duration:.9,ease:"power2.out"}),zt.to(w.rotation,{z:0,duration:.9,ease:"power2.out"})}),Co(()=>{const w=document.querySelector(".branch-tree-stage");w instanceof HTMLElement&&w.scrollTo({top:0,behavior:"smooth"})}),window.setTimeout(()=>{f()},80)},R=w=>{w.key==="Escape"&&i.value&&v()};return ia(()=>{var w;u(),c(),window.addEventListener("mousemove",g),(w=e.value)==null||w.addEventListener("click",M),window.addEventListener("resize",d),window.addEventListener("keydown",R),h()}),Qs(()=>t.active,w=>{if(!w&&i.value){v();return}!w||i.value||window.setTimeout(()=>{f()},60)}),Al(()=>{var w;window.removeEventListener("mousemove",g),(w=e.value)==null||w.removeEventListener("click",M),window.removeEventListener("resize",d),window.removeEventListener("keydown",R),p==null||p.dispose()}),(w,C)=>(Kt(),Qt("div",WT,[I("header",{class:Ce(["painting-header",{"fade-out":i.value}])},[C[2]||(C[2]=I("div",{class:"archive-kicker"},"WERISS // ECHO ARCHIVE",-1)),C[3]||(C[3]=I("h1",null,"关键 CG 陈列馆",-1)),C[4]||(C[4]=I("p",null,"展示主视觉分层、镜头定格与氛围样张。点击陈列层可以查看档案展签。",-1)),I("button",{onClick:C[0]||(C[0]=(...P)=>St(y)&&St(y)(...P)),class:"start-btn"},"进入陈列")],2),Pe(Oi,{name:"fade"},{default:pi(()=>[s.value?(Kt(),Qt("div",{key:0,class:"dialogue-box",onClick:C[1]||(C[1]=P=>s.value=null)},[I("div",XT,[I("p",qT,bt(s.value),1),C[5]||(C[5]=I("span",{class:"close-hint"},"点击收起展签",-1))])])):an("",!0)]),_:1}),I("canvas",{ref_key:"canvasEl",ref:e},null,512),Pe(Oi,{name:"tree"},{default:pi(()=>[i.value?(Kt(),Qt("section",YT,[I("button",{class:"tree-exit-btn",onClick:v},"返回陈列入口"),C[8]||(C[8]=I("div",{class:"branch-tree-caption"},[I("div",{class:"branch-tree-kicker"},"TOP-DOWN BRANCH TREE"),I("h2",null,"WERISS 多叉树"),I("p",null,"从上往下读。每一次分叉都是一次建议，每一片叶子都是故事走向。")],-1)),I("div",$T,[C[6]||(C[6]=I("svg",{class:"branch-tree-svg",viewBox:"0 0 1000 2140",preserveAspectRatio:"none","aria-hidden":"true"},[I("defs",null,[I("linearGradient",{id:"branchTreeGlow",x1:"0%",y1:"0%",x2:"0%",y2:"100%"},[I("stop",{offset:"0%","stop-color":"rgba(255,247,222,0.95)"}),I("stop",{offset:"55%","stop-color":"rgba(255,221,162,0.88)"}),I("stop",{offset:"100%","stop-color":"rgba(214,168,88,0.42)"})]),I("filter",{id:"branchTreeBlur"},[I("feGaussianBlur",{stdDeviation:"4.5"})])]),I("path",{class:"branch-glow trunk-glow",d:"M500 88 L500 1940"}),I("path",{class:"branch-line trunk-line",d:"M500 88 L500 1940"}),I("path",{class:"branch-glow",d:"M500 310 C438 336 348 374 220 420"}),I("path",{class:"branch-glow",d:"M500 310 C490 344 490 382 500 446"}),I("path",{class:"branch-glow",d:"M500 310 C562 336 652 374 780 420"}),I("path",{class:"branch-line",d:"M500 310 C438 336 348 374 220 420"}),I("path",{class:"branch-line",d:"M500 310 C490 344 490 382 500 446"}),I("path",{class:"branch-line",d:"M500 310 C562 336 652 374 780 420"}),I("path",{class:"branch-return-glow",d:"M220 420 C308 470 392 534 500 620"}),I("path",{class:"branch-return-glow",d:"M500 446 C500 492 500 548 500 620"}),I("path",{class:"branch-return-glow",d:"M780 420 C692 470 608 534 500 620"}),I("path",{class:"branch-return-line",d:"M220 420 C308 470 392 534 500 620"}),I("path",{class:"branch-return-line",d:"M500 446 C500 492 500 548 500 620"}),I("path",{class:"branch-return-line",d:"M780 420 C692 470 608 534 500 620"}),I("path",{class:"branch-glow",d:"M500 710 C424 742 322 780 198 820"}),I("path",{class:"branch-glow",d:"M500 710 C490 744 490 782 500 846"}),I("path",{class:"branch-glow",d:"M500 710 C576 742 678 780 802 820"}),I("path",{class:"branch-line",d:"M500 710 C424 742 322 780 198 820"}),I("path",{class:"branch-line",d:"M500 710 C490 744 490 782 500 846"}),I("path",{class:"branch-line",d:"M500 710 C576 742 678 780 802 820"}),I("path",{class:"branch-return-glow",d:"M198 820 C292 876 386 946 500 1020"}),I("path",{class:"branch-return-glow",d:"M500 846 C500 894 500 946 500 1020"}),I("path",{class:"branch-return-glow",d:"M802 820 C708 876 614 946 500 1020"}),I("path",{class:"branch-return-line",d:"M198 820 C292 876 386 946 500 1020"}),I("path",{class:"branch-return-line",d:"M500 846 C500 894 500 946 500 1020"}),I("path",{class:"branch-return-line",d:"M802 820 C708 876 614 946 500 1020"}),I("path",{class:"branch-glow",d:"M500 1110 C432 1144 338 1182 222 1220"}),I("path",{class:"branch-glow",d:"M500 1110 C490 1144 490 1182 500 1246"}),I("path",{class:"branch-glow",d:"M500 1110 C568 1144 662 1182 778 1220"}),I("path",{class:"branch-line",d:"M500 1110 C432 1144 338 1182 222 1220"}),I("path",{class:"branch-line",d:"M500 1110 C490 1144 490 1182 500 1246"}),I("path",{class:"branch-line",d:"M500 1110 C568 1144 662 1182 778 1220"}),I("path",{class:"branch-return-glow",d:"M222 1220 C314 1276 402 1346 500 1420"}),I("path",{class:"branch-return-glow",d:"M500 1246 C500 1292 500 1346 500 1420"}),I("path",{class:"branch-return-glow",d:"M778 1220 C686 1276 598 1346 500 1420"}),I("path",{class:"branch-return-line",d:"M222 1220 C314 1276 402 1346 500 1420"}),I("path",{class:"branch-return-line",d:"M500 1246 C500 1292 500 1346 500 1420"}),I("path",{class:"branch-return-line",d:"M778 1220 C686 1276 598 1346 500 1420"}),I("path",{class:"branch-glow",d:"M500 1510 C432 1544 338 1582 222 1620"}),I("path",{class:"branch-glow",d:"M500 1510 C490 1544 490 1582 500 1646"}),I("path",{class:"branch-glow",d:"M500 1510 C568 1544 662 1582 778 1620"}),I("path",{class:"branch-line",d:"M500 1510 C432 1544 338 1582 222 1620"}),I("path",{class:"branch-line",d:"M500 1510 C490 1544 490 1582 500 1646"}),I("path",{class:"branch-line",d:"M500 1510 C568 1544 662 1582 778 1620"}),I("path",{class:"branch-return-glow",d:"M222 1620 C316 1680 404 1748 500 1820"}),I("path",{class:"branch-return-glow",d:"M500 1646 C500 1694 500 1748 500 1820"}),I("path",{class:"branch-return-glow",d:"M778 1620 C684 1680 596 1748 500 1820"}),I("path",{class:"branch-return-line",d:"M222 1620 C316 1680 404 1748 500 1820"}),I("path",{class:"branch-return-line",d:"M500 1646 C500 1694 500 1748 500 1820"}),I("path",{class:"branch-return-line",d:"M778 1620 C684 1680 596 1748 500 1820"}),I("path",{class:"branch-glow",d:"M500 1910 C422 1950 332 1992 222 2054"}),I("path",{class:"branch-glow",d:"M500 1910 C500 1952 500 1998 500 2072"}),I("path",{class:"branch-glow",d:"M500 1910 C578 1950 668 1992 778 2054"}),I("path",{class:"branch-line",d:"M500 1910 C422 1950 332 1992 222 2054"}),I("path",{class:"branch-line",d:"M500 1910 C500 1952 500 1998 500 2072"}),I("path",{class:"branch-line",d:"M500 1910 C578 1950 668 1992 778 2054"})],-1)),(Kt(),Qt(Le,null,Tn(r,P=>I("article",{key:P.id,class:Ce(["tree-trunk-node",`tree-trunk-${P.kind}`]),style:oi({left:`${P.x}%`,top:`${P.y}px`})},[I("span",KT,bt(P.id),1),I("h3",null,bt(P.title),1),I("p",null,bt(P.note),1)],6)),64)),(Kt(),Qt(Le,null,Tn(o,P=>I("div",{key:P.id,class:"tree-fork-badge",style:oi({left:`${P.x}%`,top:`${P.y}px`})},[I("span",null,bt(P.label),1),I("small",null,bt(P.note),1)],4)),64)),C[7]||(C[7]=I("div",{class:"tree-final-center-link","aria-hidden":"true"},null,-1)),(Kt(),Qt(Le,null,Tn(a,P=>I("article",{key:P.id,class:Ce(["tree-choice-node",`tree-choice-${P.tone}`]),style:oi({left:`${P.x}%`,top:`${P.y}px`})},[I("span",jT,bt(P.id),1),I("h4",null,bt(P.label),1),I("p",null,bt(P.note),1),I("div",ZT,"导向 "+bt(P.next),1)],6)),64)),(Kt(),Qt(Le,null,Tn(l,P=>I("article",{key:P.id,class:"tree-ending-leaf",style:oi({left:`${P.x}%`,top:`${P.y}px`})},[I("span",JT,bt(P.id),1),I("h4",null,bt(P.label),1),I("p",null,bt(P.note),1)],4)),64))])])):an("",!0)]),_:1})]))}},tw=Hf(QT,[["__scopeId","data-v-e07f97c7"]]),Eo="X-05",ew="WINDOW OPEN",nw="NIA-7 requesting first advisory.",iw="LINK CLOSED",sw="Awaiting first signal.",rw={mode:"quake",title:"MOUNTAIN BREACH / AUTHORIZATION OPEN",body:"平静结束了。回响台已获准读取山脉全貌，第一道建议窗口正在形成。"},vp=[{label:"ROLE",title:"你不是进入者",body:"你坐在 ECHO DESK 前，通过失真的远程链路观察 WERISS。山里的人不是你，你也不会替她迈出任何一步。",action:"知道了，继续"},{label:"ABILITY",title:"你唯一的能力是建议",body:"链路只会短暂打开几秒。你能做的只有在信息不完整时给出倾向，而不是命令。她会理解、误解，或者赌一把。",action:"继续授权"},{label:"COST",title:"每一次建议都会改写局势",body:"信任、风险和真相会被你的话推向不同方向。等你看见整座山的时候，平静也会一起结束。",action:"接入第一道建议窗口"}],xp={"Ω-01":{mode:"quake",title:"RED RIDGE / SURFACE FAILURE",body:"整条山脊在逆风震动，裂隙正在把视野撕开。这是你第一次看到 WERISS 真正移动。"},"Ψ-02":{mode:"storm",title:"LUMINOUS FRONT / CROSSWIND WALL",body:"发光雾墙压向峡谷，链路噪声开始翻倍。你给出的建议会决定她是穿过去，还是保住呼吸。"},"Δ-03":{mode:"fissure",title:"BLUE FISSURE / DEPTH OPEN",body:"雪幕被整面撕裂，裂口下方不是黑暗，而是一层正在发亮的深度。这里不该只是山表。"},"Λ-04":{mode:"magnetic",title:"DOUBLE MAP / SIGNAL DRIFT",body:"地形开始复制自己，HUD 和脚下给出两套完全不同的路线。你必须替她选一套现实。"},"X-05":{mode:"skyfold",title:"SKYFOLD / FINAL WINDOW",body:"高空像幕布一样展开，全部山脊同时发亮。最后一道窗口不会凭空制造命运，它只会替你们前面一路推出来的倾向签字。"}},ow={A1:{mode:"quake",title:"RIDGE STABILIZED",body:"镜头抬高后，裂纹从山体里蔓延出来。你让她先保住了视野，也让第一次震动有了轮廓。"},A2:{mode:"quake",title:"FORWARD PUSH",body:"山体换气声直接压进了链路。你把她推近了红脊，也把第一次风险抬高了。"},A3:{mode:"whiteout",title:"SENSOR CALIBRATION",body:"雪雾压暗了整个画面，只剩参数流和呼吸声。你让信息先于行动抵达。"},B1:{mode:"storm",title:"WALL BREACH",body:"她穿过了发光雾墙，镜头像被骤冷灼了一下。链路抖得更厉害，但前方被打开了。"},B2:{mode:"storm",title:"CONTROLLED RETREAT",body:"雾墙掠过山脊，风声盖住了脚步。你保住了链路稳定，但也看着原路被吞掉。"},B3:{mode:"storm",title:"COVER FOUND",body:"半塌石棚切开了风噪，镜头边缘仍在滴落雪水。你让她在灾变里争取到一次观察角度。"},C1:{mode:"fissure",title:"EDGE WALK",body:"裂口一直在镜头下方发蓝，你却命令她不去看。山体没有回答，但活路还在。"},C2:{mode:"fissure",title:"DESCENT",body:"镜头沉入裂口，地表被一道竖直光井取代。你不再只是看山脉，而是看山脉里面。"},C3:{mode:"fissure",title:"PROBE DROP",body:"探针掉进深度时，画面像被拉长了一瞬。数值在重复，说明下面不是正常空间。"},D1:{mode:"magnetic",title:"BLIND WALK",body:"她闭眼穿过噪声层，屏幕只剩几次短促闪烁。你让脚下地形暂时压过了错误地图。"},D2:{mode:"magnetic",title:"OLD MAP LOCK",body:"旧地图把镜头推向更亮的山脊，色差和雪花屏一起加重。真相更近，但现实更薄。"},D3:{mode:"magnetic",title:"OVERLAY KILLED",body:"辅助层熄灭后，画面黑了一瞬，只剩高度、心跳和你的链路还亮着。"},E1:{mode:"whiteout",title:"RETURN VECTOR",body:"风雪和天光一起压回镜头边缘。你放弃了最深处，把“活着回来”放到了真相前面。"},E2:{mode:"skyfold",title:"DEEP VECTOR",body:"高空彻底展开，山脊像一张反向星图。你让她继续往前，也接受了链路随时会断。"},E3:{mode:"skyfold",title:"HOLD VECTOR",body:"她停在回响最强的位置，画面像被整片天空按住。你没有撤离，也没有继续深入。"}},Fl=[{id:"Ω-01",position:{x:-7,y:2,z:8},event:{title:"RED RIDGE ASSESSMENT",subtitle:"FIELD UNIT NIA-7",message:'如果你真的能看到我的画面，先回答我。<br/>左边山脊后面那片发红的东西，像云，但它在逆风移动。<br/><span class="hl">我应该先看清它，还是先避开？</span>',analysis:{displayTitle:"红脊后面的红光，到底是什么",question:"你现在不是立刻指路，而是先判断这片红光究竟是天气、活物，还是设备误报。",briefing:"第一道窗口没有马上对你开放。红脊后的红光像天气，但它逆风移动，说明你先要判断它到底是“环境”还是“生物式回响”。",briefCards:[{label:"她看到了什么",text:"山脊后面有一大片发红的东西，看起来像云，但移动方向不对。"},{label:"现在危险在哪",text:"如果你把它当天气误判，NIA-7 可能会直接撞进它的推进边缘。"},{label:"你这一步先做什么",text:"先判断红光究竟是什么，再决定让她靠近、拉远还是原地不动。"}],objective:"比对风场、热源和回声，确认这片红光真正受什么规则支配。",howToPlay:["先点开线索卡，看看 NIA-7 回传了什么异常。","注意每张卡最后一句“这说明什么”，它会帮你翻译专业词。","读完至少两条线索后，再选择你认为最合理的解释。"],clues:[{id:"wind",title:"红光和风向是反着走的",tag:"FIELD LOG",summary:"风往西吹，但红光却在往东移动。",detail:"NIA-7 的风场记录显示阵风始终向西，速度稳定；只有红光边缘以恒定速度向东贴着山脊推进，说明它不受表层风向驱动。",whyItMatters:"这说明红光不像普通天气。真正的云雾通常会跟着风走。",focusTarget:"sun"},{id:"thermal",title:"发热的位置总贴着山体褶皱",tag:"SENSOR",summary:"热像里最亮的地方没有飘开，而是在山体缝隙里反复亮起。",detail:"热像回传里最亮的区域没有在空中扩散，而是沿着山体裂隙周期性亮起，像是某种被地形束缚的脉冲。",whyItMatters:"这说明红光更像“山体里有什么在活动”，而不是天上的云层。",focusTarget:"sun"},{id:"echo",title:"山里每十五秒会传出一次低鸣",tag:"ARCHIVE",summary:"档案里记着一种每十五秒出现一次的低沉回声，它和红光移动节奏一致。",detail:"旧档案里记录过同频脉冲: 每十五秒一次，山体内部会传出低频换气声；红光每次位移都和这道脉冲同步。",whyItMatters:"这说明红光不是随机现象，它和山体内部某种规律活动绑在一起。",focusTarget:"sun"}],hypotheses:[{id:"weather",label:"先把它当天气处理，让她顺着风躲开就行",detail:"如果这只是奇怪的红色云层，那最稳的做法就是别靠近，按风向避开。"},{id:"surface",label:"这更像贴着山体移动的东西，先拉远看清全貌再说",detail:"如果红光不是云，而是沿着山体活动的异常层，那现在最重要的是先看清它怎么移动。"},{id:"sensor",label:"先别管它，先当成设备误报，原地校准一轮再说",detail:"如果主要是传感器漂移，那没必要急着做判断，先让她停住校准。"}],solutionId:"surface",solutionFeedback:"你确认这不是普通天气，而是一层贴着山体移动的“呼吸层”。现在真正的问题不是跑不跑，而是先不要在贴脸距离做判断。",failureFeedback:"这个推断解释不了逆风位移和固定脉冲。链路噪声抬升了一格，你还需要更可靠的规则。",breakthroughTitle:"破局点 / 呼吸层不是云",breakthroughDetail:"红光由山体内部脉冲驱动，只会沿着地形褶皱推进。先获得高处视野，才有资格做第一次正式建议。"},choices:[{id:"A1",label:"退到高处，先确认整片视野",advisory:"Gain altitude and confirm the ridge line before moving.",reply:"收到。我先上切到高处。红光不是一个点，像一整片贴着山走的云墙。",effects:{trust:1,risk:-1}},{id:"A2",label:"继续靠近，我需要更多现场画面",advisory:"Close the distance. I need a better look at the red front.",reply:"你是真敢开口。行，我再往前二十米。地面开始轻震，像有什么东西在山体里换气。",effects:{truth:1,risk:1}},{id:"A3",label:"原地停留，先校准传感器",advisory:"Hold position and stabilize your sensors before moving.",reply:"校准完成。风场和温度都在跳，但频率很稳定。我把参数发回给你了。",effects:{trust:1,truth:1}}]}},{id:"Ψ-02",position:{x:0,y:3.5,z:1},event:{title:"MOVING CLOUD WALL",subtitle:"FIELD UNIT NIA-7",message:'不是云。是一整面在发光的雾墙，从峡谷对面横着压过来了。<br/>我能冲过去，也能后撤保链路。<br/><span class="hl">你给我一个更值的选项。</span>',analysis:{displayTitle:"雾墙逼近时，第三条路在哪里",question:"眼前看起来像只有“硬闯”或“后撤”两个选项，但你要先找出有没有更聪明的走法。",briefing:"雾墙已经接近，但真正的危险还不是“会不会撞上”，而是它会不会把链路和氧气一起掐断。你要先看懂它的移动规则。",briefCards:[{label:"她看到了什么",text:"一整面发光雾墙正在从峡谷对面横着压过来，像要把路整个堵死。"},{label:"现在危险在哪",text:"硬闯会迅速掉氧、掉链路，纯后撤又可能彻底失去观察机会。"},{label:"你这一步先做什么",text:"先判断有没有“既不硬闯也不白撤”的第三种路线。"}],objective:"分析雾墙的推进方式，判断它最怕的是正面对抗、原地等待，还是横向切出视角。",howToPlay:["先看地形、耗氧和速度三类线索。","重点找“有没有安全观察位”，而不是急着选冲还是退。","如果你能找出第三种路线，这关就算破局。"],clues:[{id:"shelter",title:"峡谷侧面有一段能挡风的石棚",tag:"TERRAIN",summary:"石棚后的噪声显著下降，但雾墙边缘仍在可视范围内。",detail:"地形扫描显示峡谷侧壁有一段半塌石棚。进入其背风面后，链路噪声下降 42%，同时仍能看到雾墙横移速度。",whyItMatters:"这说明你不一定非要硬闯。地形本身可能就是解法的一部分。",focusTarget:"storm"},{id:"oxygen",title:"直接冲进雾墙会让耗氧暴涨",tag:"BIOMETRIC",summary:"正面穿越雾墙时，耗氧会在一分钟内猛升。",detail:"模拟路径显示，一旦直接穿入雾墙核心，NIA-7 的耗氧和心率会同时抬升，链路掉帧概率也随之翻倍。",whyItMatters:"这说明“正面硬闯”虽然快，但代价非常高，很可能还没看清就先掉线。",focusTarget:"storm"},{id:"velocity",title:"雾墙横着移动，其实没有看上去那么快",tag:"MOTION",summary:"雾墙横移比你预估的慢，说明它有可借的观察窗口。",detail:"测速日志表明雾墙的横移速度低于体感压迫。它看起来像“整面压来”，其实移动存在迟滞，横向绕行能抢出观察时间。",whyItMatters:"这说明还有抢时间的空间。问题不是“逃不掉”，而是“能不能找到更好的观察角度”。",focusTarget:"storm"}],hypotheses:[{id:"rush",label:"别想太多了，趁它还没压过来直接冲过去",detail:"这种判断把“时间差”看得最重要，赌的是她能在彻底失控前抢过去。"},{id:"retreat",label:"这段不值，直接撤，先把人和链路保住",detail:"如果这关没有更优解，那最稳的就是承认拿不到视角，立刻后撤。"},{id:"lateral",label:"先别冲也别退，绕到侧面找掩体再看它怎么动",detail:"这种判断默认“第三条路”存在，重点是借地形压住风险，再继续观察。"}],solutionId:"lateral",solutionFeedback:"你抓到了这关的核心: 雾墙最可怕的是让人误以为只能二选一。真正的活路，是借地形切出第三种观察位。",failureFeedback:"这个判断不是完全错，但它解释不了速度迟滞和石棚背风面的稳定窗口。你还没抓到真正的破局点。",breakthroughTitle:"关键掩体 / 背风观察位",breakthroughDetail:"半塌石棚能压住风噪，让 NIA-7 在不硬闯的前提下持续观察雾墙，这才会解锁更值的正式建议。"},delayMs:380,choices:[{id:"B1",label:"穿过去，抢时间拿画面",advisory:"Push through the wall before it closes. We need the view beyond it.",reply:"冲过去了。像从热水里穿到雪里，头盔差点掉线，但我看见前面有一条蓝色裂口。",effects:{truth:2,risk:2},obscured:!0},{id:"B2",label:"后撤，优先保住链路和体力",advisory:"Fall back. Keep the link stable and save your oxygen.",reply:"明白。我退回岩脊后面了。链路稳多了，但那道雾墙已经把原来的路盖住。",effects:{trust:1,risk:-1}},{id:"B3",label:"横向绕行，找掩体再观察",advisory:"Traverse laterally. Find cover and keep visual on the front.",reply:"我找到一段半塌的石棚，风声小了很多。墙体还在移动，但速度比我想的慢。",effects:{trust:1,truth:1}}]}},{id:"Δ-03",position:{x:7,y:2,z:7},event:{title:"SHEAR BREAK",subtitle:"FIELD UNIT NIA-7",message:'前面的雪坡塌了，不是普通雪崩，像整张白幕从山上被撕下来。<br/>裂口下面有一道发蓝的缝，我能下去。<br/><span class="hl">你要我绕，还是要我赌一把？</span>',analysis:{displayTitle:"蓝色裂口下面，是更深还是在循环",question:"这道裂口最危险的地方，可能不是太深，而是它会把人困在重复空间里。",briefing:"蓝裂口看起来像“往下走就能得到真相”，但回传深度却在重复。你得先判断它是空间异常，还是只是过深难测。",briefCards:[{label:"她看到了什么",text:"雪坡裂开后，下面露出一道发蓝的缝，看起来像通往更深处的入口。"},{label:"现在危险在哪",text:"如果它不是单纯的“很深”，而是在重复空间，下去的人可能会被困住。"},{label:"你这一步先做什么",text:"先确认裂口是在继续往下延伸，还是其实在原地循环折返。"}],objective:"利用深度、反光和探针回传，确认裂口下方到底在“延伸”，还是在“循环”。",howToPlay:["先看探针、光线和雪片轨迹三种信息。","不要被“往下走=更接近真相”这个直觉骗到。","如果多个线索都在说“它在重复自己”，那就别把它当普通深井。"],clues:[{id:"probe",title:"探针一直在掉，但读数总回到同一段",tag:"PROBE",summary:"探针一直在下坠，但读数周期性回到同一段高度。",detail:"回传数据里，探针的高度从未真正归零，却每隔数秒回到同一组深度区间，像是在重复穿过同一层空间切片。",whyItMatters:"这说明下面不只是“深”，而是很可能存在重复层。",focusTarget:"fissure"},{id:"glare",title:"蓝光像在侧壁之间来回弹",tag:"VISUAL",summary:"蓝光不是从底部打上来，而是从侧壁之间互相反射。",detail:"增亮后的画面表明，蓝光并没有稳定光源点，而是沿着侧壁来回折返。这更像一个环状腔体，而不是单向深井。",whyItMatters:"这说明裂口内部结构不是直通到底，更像会把视野绕回来的封闭空间。",focusTarget:"fissure"},{id:"snowfall",title:"同一片雪在画面里出现了两次",tag:"MATERIAL",summary:"雪片掉入裂口后，在同一视野里出现了两次。",detail:"慢速回放里，一块雪幕残片落入裂口，五秒后又从更深处的同一画面边缘掠过，说明视野本身被折叠了。",whyItMatters:"这说明“往下”可能并没有真的离开原位，只是在同一个空间里循环。",focusTarget:"fissure"}],hypotheses:[{id:"pit",label:"它只是太深了，准备够了就能直接往下走",detail:"这个判断默认下面只是普通深井，异常都是因为太深、太亮、太难测。"},{id:"loop",label:"这地方不只是深，而是在重复自己，直接下去会被困住",detail:"如果裂口内部在循环折返，那“下去看看”反而是最容易被套住的做法。"},{id:"avalanche",label:"别被蓝光唬住了，当普通雪崩绕开就好",detail:"这种判断把异常都当成地质噪声，优先放弃分析，快速离开。"}],solutionId:"loop",solutionFeedback:"你看穿了蓝裂口真正的危险: 它诱导人把“更深”误判成“更接近真相”，其实先会困住人。",failureFeedback:"这个解释压不住重复深度和折返雪片。裂口最关键的不是亮，而是它在重复自己。",breakthroughTitle:"关键规则 / 深度在循环",breakthroughDetail:"裂口内部存在折返层，任何直接下行都可能进入重复切片。只有先确认边缘和探针结果，正式建议才有意义。"},choices:[{id:"C1",label:"别下裂口，沿边缘继续走",advisory:"Stay on the edge. Do not descend into the blue fissure.",reply:"收到。我贴边过去了。下面一直有像水一样的反光，但没有声音。",effects:{trust:1,risk:-1}},{id:"C2",label:"下去看蓝光来源，抓住窗口",advisory:"Descend into the fissure and identify the blue source.",reply:"我下来了。这里不是冰，是一层会发亮的碎石，像有人把星空砸碎铺在地上。",effects:{truth:2,risk:1}},{id:"C3",label:"先丢探针，再决定要不要下",advisory:"Deploy a probe first. I want the depth and temperature before you move.",reply:"探针下去了。回传深度不对，它像一直在往下掉，但读数又在重复同一段。",effects:{trust:1,truth:1}}]}},{id:"Λ-04",position:{x:-5,y:3,z:3},event:{title:"MAGNETIC STORM",subtitle:"FIELD UNIT NIA-7",message:'链路在跳。我收到你的字了，但顺序全乱。<br/>指南针开始绕圈，头盔 HUD 出现了两套地形。<br/><span class="hl">我该信地图，还是信脚下？</span>',analysis:{displayTitle:"两套地图打架时，什么才是真锚点",question:"这关不是选哪张地图更帅，而是先找出什么信息最不容易被磁暴篡改。",briefing:"这关最像《赌博默示录》式的陷阱: 两套地图都说得通，真正要分辨的是“谁在制造更高的信息税”。",briefCards:[{label:"她看到了什么",text:"指南针乱转，HUD 和脚下环境给出了两套完全不同的路线。"},{label:"现在危险在哪",text:"如果你信错了那套信息，NIA-7 可能会被直接带去断崖或错误山脊。"},{label:"你这一步先做什么",text:"先找出哪类信息最不容易被磁暴一起篡改，再决定该信什么。"}],objective:"判断旧地图、实时 HUD 和身体感知三者里，哪一套才是最不容易被磁暴操纵的锚点。",howToPlay:["先比较界面层、旧资料层和身体感知层。","重点不是“谁更完整”，而是“谁更不容易一起撒谎”。","如果某类信息在系统乱掉后还连续稳定，它就更可能是真锚点。"],clues:[{id:"hud",title:"界面上的字乱了，但心跳和海拔还连续",tag:"INTERFACE",summary:"文字顺序乱了，但海拔和心跳数值仍连续。",detail:"磁暴打乱了 HUD 的文本与箭头顺序，可海拔和心跳曲线依旧连续，这说明“抽象指令层”被污染得比“原始身体数据层”更重。",whyItMatters:"这说明越“解释型”的信息越容易出错，越原始的数据反而更可信。",focusTarget:"magnetic"},{id:"oldmap",title:"旧地图能对上远山，却对不上脚下断崖",tag:"ARCHIVE",summary:"旧地图能对应远山亮起的位置，却对不上眼前断崖。",detail:"旧地图在宏观方向上没完全失真，但它把 NIA-7 当前所在的断崖标成了可通行山脊，说明它可能只保留了远距结构。",whyItMatters:"这说明旧地图不是完全假，但也不能直接拿来走脚下这一步。",focusTarget:"magnetic"},{id:"wind",title:"关掉辅助层后，坡度和横风会重新一致",tag:"BODY",summary:"闭掉辅助后，坡度和横风反馈会重新稳定。",detail:"身体传感器记录显示，只要关闭覆盖层，脚下坡度与横风方向会立刻恢复一致，而界面层仍继续漂移。",whyItMatters:"这说明脚下坡度和风向是最底层的真实信息，比地图更不容易被带偏。",focusTarget:"magnetic"}],hypotheses:[{id:"hud",label:"还是信实时 HUD 吧，再乱也比旧资料新",detail:"这种判断把“实时”看得最重要，觉得系统迟早会自己纠正过来。"},{id:"oldmap",label:"别看现场乱成这样了，直接按旧地图走",detail:"如果你觉得旧档案比现场系统更可靠，那最简单的就是锁死旧地图。"},{id:"body",label:"先信脚下、风向和她自己的身体感觉，地图都往后放",detail:"这种判断认为最低层的身体感知最难一起出错，其它图层只能做参考。"}],solutionId:"body",solutionFeedback:"你找到这场磁暴里的最低层现实了。地图可以漂，字可以乱，但脚下坡度和横风不会一起替你撒谎。",failureFeedback:"这个判断还停留在“选哪张图”，但真正要找的是不容易被图层污染的锚点。",breakthroughTitle:"锚点 / 身体层真值",breakthroughDetail:"只保留心跳、高度、坡度和横风，才能在两套地图都开始争夺解释权时保住现实。"},delayMs:520,choices:[{id:"D1",label:"闭眼十秒，只按坡度和风向走",advisory:"Ignore the HUD. Count ten seconds and walk by slope and wind.",reply:"照做了。奇怪的是，一闭眼之后干扰反而小了。我像从一道缝里挤了出来。",effects:{trust:2}},{id:"D2",label:"相信旧地图，向北切过去",advisory:"Trust the old map and cut north before the storm thickens.",reply:"旧地图把我带到了一段断崖前。风很大，但我能看到更远的山脊全部亮起来了。",effects:{truth:1,risk:1},obscured:!0},{id:"D3",label:"关掉辅助系统，只保留心跳和高度",advisory:"Kill the overlays. Keep only heart rate, altitude, and the link.",reply:"辅助全关了。现在只剩你的链路和我自己的呼吸声。至少方向感回来了。",effects:{trust:1,risk:-1,truth:1}}]}},{id:"X-05",position:{x:4,y:5,z:16},event:{title:"SKYFOLD DECISION",subtitle:"FIELD UNIT NIA-7",message:'天不是在变暗，像有什么巨大的东西从高空展开了。<br/>所有山脊轮廓都亮起来，像一张地上的星图。<br/><span class="hl">如果我继续往前，链路会断；如果我现在回头，我可能带不走任何证据。</span>',analysis:{displayTitle:"终局不是重开一题，而是给前面的路线签字",question:"你最后要做的，不是临时赌一把，而是承认前面一路积累下来的倾向到底是什么。",briefing:"终局不是“看不看见”的问题，而是“把前面一路积累的倾向兑现成哪种结局”。你要先认清 skyfold 到底在向谁要代价。",briefCards:[{label:"她看到了什么",text:"高空像幕布一样展开，整片山脊同时发亮，终局已经开始收口。"},{label:"现在危险在哪",text:"继续前进、立刻回头、原地维持都要付代价，已经没有“白拿答案”的走法。"},{label:"你这一步先做什么",text:"先承认前面一路把路线推向了哪里，再决定最后这次要为哪种代价签字。"}],objective:"对照一路以来的链路代价，判断最后的破局点是抢最后一步、强行带人回、还是把人留在回响中心当锚点。",howToPlay:["回头看你前面一路把信任、风险和真相推向了哪里。","这关不会凭空给你标准答案，只会放大你之前的路线。","想清楚你愿意接受哪种代价，再进入最后一次正式建议。"],clues:[{id:"route",title:"前四轮选择已经把路线推向一种倾向",tag:"ROUTE",summary:"前四轮建议已经把路线推向某种稳定倾向。",detail:"链路回算显示，你的选择不是孤立按钮。前面累积下来的信任、风险和真相，已经把路线推成一条倾向明确的轨迹。",whyItMatters:"这说明终局不是新题，而是你前面一路选择的结果开始收束了。",focusTarget:"skyfold"},{id:"sky",title:"继续前进、立刻回头、原地维持，代价各不相同",tag:"EVENT",summary:"skyfold 会吞掉链路，但不会立刻吞掉“停在原地的锚点”。",detail:"展开曲线显示，继续深入会最先断掉链路；立刻回撤能保住人；原地维持则会让链路变成一个短暂稳定的锚点。",whyItMatters:"这说明三种终局不是简单对错，而是三种不同代价。",focusTarget:"skyfold"},{id:"voice",title:"她最后问的不是路线，而是你愿意承认什么代价",tag:"FIELD",summary:"她不是单纯在问方向，而是在问你最后愿意让哪种代价落地。",detail:"末段语音里，她没有再追问路线细节，而是把“证据”“回头”“不断线”摆成同级选项，说明终局的关键是选择哪种代价被承认。",whyItMatters:"这说明你最后要做的是表态，而不是继续拖时间等标准答案出现。",focusTarget:"skyfold"}],hypotheses:[{id:"proof",label:"别管前面了，就看现在这一下，哪里最刺激就选哪里",detail:"这种想法把终局当成一张新考卷，觉得最后一手可以推翻前面全部积累。"},{id:"vector",label:"先承认前面一路已经走成什么样了，再做最后签字",detail:"如果前面的选择已经把路线推向一种倾向，那最后这一手更像确认，而不是重开。"},{id:"delay",label:"再拖一会儿，等天幕自己把标准答案亮出来",detail:"这种判断希望用继续观察来逃避最后裁决，赌环境会替你做选择。"}],solutionId:"vector",solutionFeedback:"你抓住了无限流终局最重要的东西: 最后一扇门不是给你重新考试，而是让你为前面的路线签字。",failureFeedback:"终局已经不会再给你一套全新的标准解了。真正重要的是认清，这里只会兑现你前面一路累积下来的倾向。",breakthroughTitle:"终局破局点 / 为路线签字",breakthroughDetail:"skyfold 不制造命运，只放大代价。正式建议会根据你之前的路线倾向改写成不同版本。"},delayMs:760,choices:[{id:"E1",label:"返回。把人带回来比答案重要",advisory:"Return now. Bring yourself home before the sky closes.",reply:"收到。我转身了。你这次没让我看到最深处，但你把我从那里带了出来。",effects:{trust:2,risk:-2}},{id:"E2",label:"继续。把真相带到最深处",advisory:"Keep moving. I need you at the center before the link dies.",reply:"明白。我继续走。链路开始一段一段掉帧了，如果这次断了，就把我看到的记住。",effects:{truth:2,risk:2},obscured:!0},{id:"E3",label:"留在原地，保持链路直到回响结束",advisory:"Hold position. Keep the link alive and let the mountain finish speaking.",reply:"那我就留在这里。山脊全亮了，像在对齐什么。别断线，我还有最后几句要发给你。",effects:{trust:1,truth:1}}]}}],Hc=new Map(Fl.map(n=>[n.id,n.event])),aw=Fl.map(n=>n.id),lw={"Ω-01":2.8,"Ψ-02":3.1,"Δ-03":2.6,"Λ-04":2.9,"X-05":3.4};function cw({isExploring:n,routeMarkers:t}){const e=Ho({trust:0,risk:0,truth:0}),i=he(null),s=he(null),r=he(null),o=he(iw),a=he(sw),l=he(null),u=he("calm"),c=he(null),f=he(null),h=he(!1),d=Ho(Object.fromEntries(Fl.map(A=>[A.id,!1])));let g=null,_=null,m=null,p=null,M=[];const y=()=>{g&&clearTimeout(g),_&&clearTimeout(_),m&&clearTimeout(m),p&&clearTimeout(p),M.forEach(A=>clearTimeout(A)),g=null,_=null,m=null,p=null,M=[]},v=(A,U)=>A==="Ω-01"?["归档红脊呼吸层规则","回放 NIA-7 首次视野切片","展开第一道正式建议窗口"]:U==="storm"?["整理雾墙背风面线索","压低链路风噪","部署横向观察窗口"]:U==="fissure"?["复核裂口循环深度","锁定探针折返点","展开下行建议窗口"]:U==="magnetic"?["剥离受污染地图层","保留身体感知锚点","重建导航窗口"]:U==="skyfold"?["回算整条路线倾向","固定最终代价锚点","展开终局建议窗口"]:["整理现场线索","压低链路噪声","建立正式建议窗口"],R=()=>({trust:e.trust,risk:e.risk,truth:e.truth}),w=A=>{const U=A.trust*2-A.risk,E=A.truth*2+A.risk,nt=A.risk*2-A.trust-A.truth;let q="liminal";nt>=4&&A.risk>=A.truth+1?q="collapse":U>=E+2?q="return":E>=U+2&&(q="truth");const j=q==="return"?"SAFE RETURN VECTOR":q==="collapse"?"PRESSURE VECTOR":q==="truth"||A.truth>=A.trust?"WITNESS VECTOR":"SAFE RETURN VECTOR";return{...A,bond:U,descent:E,strain:nt,dominant:q,vector:j}},C=(A,U)=>U.dominant==="return"?`${A}<br/><span class="hl">她一路都在等你把“回来”说出口。现在这句话终于有了重量。</span>`:U.dominant==="truth"?`${A}<br/><span class="hl">你前面每一次逼近都把她推得更深。现在不是要不要看见，而是看见以后还能不能回来。</span>`:U.dominant==="collapse"?`${A}<br/><span class="hl">你们之前积累的高压还没退。这个窗口不是单纯的选择题，而是一次止损或失联的分界。</span>`:`${A}<br/><span class="hl">她对你的信任和对山的执念都还没压过对方。最后这句话会决定哪一边先落地。</span>`,P=(A,U)=>A.map(E=>{if(E.id==="E1"){if(U.dominant==="return")return{...E,label:"返回。把她完整带回来，结束这条已经够深的路线"};if(U.dominant==="truth")return{...E,label:"现在回头。承认你们已经看得够深了"};if(U.dominant==="collapse")return{...E,label:"强制返撤。趁链路还撑得住把她拉回来"}}if(E.id==="E2"){if(U.dominant==="truth")return{...E,label:"继续深入。把前面一路换来的真相走到底"};if(U.dominant==="return")return{...E,label:"违背前面的谨慎，赌最后一次逼近"};if(U.dominant==="collapse")return{...E,label:"继续硬压。接受她可能直接断在更深处"}}if(E.id==="E3"){if(U.dominant==="liminal")return{...E,label:"留在原地，把这条摇晃的链路撑到最后"};if(U.dominant==="return")return{...E,label:"先不撤离，停在原地把回程坐标钉死"};if(U.dominant==="truth")return{...E,label:"别再前进，留在回响中心守住最后一层画面"}}return E}),x=()=>aw.find(A=>!d[A])??null,S=(A,U=2600)=>{m&&clearTimeout(m),l.value=A,m=setTimeout(()=>{l.value=null},U)},L=()=>{e.trust=0,e.risk=0,e.truth=0},N=()=>{Object.keys(d).forEach(A=>{d[A]=!1})},k=()=>{y(),i.value=null,s.value=null,r.value=null,c.value=null,f.value=null,l.value=null,u.value="calm",h.value=!1,t.value=0,o.value=ew,a.value=nw,L(),N()},Y=()=>{y(),i.value=null,s.value=null,r.value=null,c.value=null,f.value=null,l.value=null,u.value="calm",h.value=!1},J=()=>{r.value=0,h.value=!1},W=()=>r.value===null?!1:r.value<vp.length-1?(r.value+=1,!1):(r.value=null,h.value=!0,a.value="NIA-7 awaiting your first instruction.",u.value="quake",S(rw,3e3),!0),K=(A,U=0)=>{e[A]=Math.max(0,e[A]+U)},B=(A,U)=>{const E=w(U);return A.id==="E1"?E.dominant==="return"||E.bond>=3?{code:"SAFE RETURN",vector:"SAFE RETURN VECTOR",title:"带回山风的人",summary:"NIA-7 离开了 WERISS。她没有带出全部答案，但她把这条链路和自己的呼吸一起带回来了。",body:"你前面给出的每一次谨慎都在替这句“回头”蓄力。归档里只留下了一段被反复擦除的地形记录，以及一句她拒绝解释的话: “你那天让我回头，所以我才确认，山后面真的还有路。”"}:{code:"FRACTURED RETURN",vector:E.vector,title:"折返时带着雪噪的人",summary:"NIA-7 最终回来了，但你们前面一路压出来的高压没有一并退去。她带回的是人，以及一段永远对不齐的记录。",body:"这不是轻松的生还。你在前半程把她推得太深，最后这句“回头”更像一次硬生生的折返。她回来后很久都不肯复盘，只说山里有些东西不是看见了就能带走的。"}:A.id==="E2"?E.dominant==="truth"&&E.truth>=4?{code:"FIRST ARRIVAL",vector:E.risk>=E.truth?"PRESSURE VECTOR":"WITNESS VECTOR",title:"先抵达的人",summary:"链路在最后几十秒里一段一段掉帧，你没有再收到她完整的声音，只剩一张不断重写的山脊星图。",body:"任务归档会把这次行动标成失败，但你知道那不是失败。那是一场到达。她继续向前，把真相送进了你再也无法跟上的深处。"}:{code:"WHITEOUT LOSS",vector:"PRESSURE VECTOR",title:"断在更深处的人",summary:"你让她继续往前，但前面几次高压和误判已经把这条路线磨到极限。最后留下的不是抵达，而是失联。",body:"归档只收到了几段碎裂的高度数据和一句被雪噪切断的话。你知道她确实走进去了，只是这一次，前面那些选择没有把路铺成“到达”，而是铺成了“消失”。"}:E.dominant==="liminal"&&E.trust>=2&&E.truth>=2?{code:"ECHO LOOP",vector:"WITNESS VECTOR",title:"另一端的人",summary:"NIA-7 没有继续，也没有返回。她把自己留在回响最强的那一层，只为了把链路再撑久一点。",body:"在连接熄灭前，你收到了最后一条短讯: “如果下一次你还会听见我，第一句别问我在哪里。先告诉我，左边那道山脊后面发红的东西，到底是什么。”"}:{code:"ANCHOR VIGIL",vector:E.vector,title:"留在风暴中心的人",summary:"她停在回响中心，不是为了永远留在那里，而是为了把你们前面一路没能确认的东西再钉牢一点。",body:"这是一个被前面所有犹豫和逼近共同推出来的停顿。她没有真正回来，也没有继续深入，只是把自己变成了链路最后的锚点，让这场行动以悬置而不是结论收尾。"}},gt=(A,U)=>{const E=Hc.get(A);if(!E||d[A]||!h.value)return;y(),i.value=null,f.value=null;const nt=xp[A];nt&&(u.value=nt.mode,S(nt,2400)),c.value={id:A,title:E.title,subtitle:E.subtitle,dist:U.toFixed(1),displayTitle:E.analysis.displayTitle,question:E.analysis.question,briefing:E.analysis.briefing,briefCards:E.analysis.briefCards,objective:E.analysis.objective,howToPlay:E.analysis.howToPlay,clues:E.analysis.clues,hypotheses:E.analysis.hypotheses,discoveredClueIds:[],attemptedHypothesisIds:[],selectedHypothesisId:null,breakthroughTitle:E.analysis.breakthroughTitle,breakthroughDetail:E.analysis.breakthroughDetail,progress:0,windowReady:!1,lastResult:"副本分析已打开。先调取线索，再判断这关真正的规则。"}},mt=()=>{const A=x();if(!A){c.value=null;return}gt(A,lw[A]??3)},Tt=A=>{if(!c.value)return;const U=c.value.clues.find(q=>q.id===A);if(!U)return;const E=c.value.discoveredClueIds.includes(A),nt=E?c.value.discoveredClueIds:[...c.value.discoveredClueIds,A];c.value={...c.value,discoveredClueIds:nt,progress:nt.length,lastResult:E?U.detail:`${U.detail}${nt.length===c.value.clues.length?" 全部核心线索已归档，可以提交破局判断。":""}`}},Ut=A=>{if(!c.value)return;const U=c.value.hypotheses.find(j=>j.id===A),E=Hc.get(c.value.id);if(!U||!E)return;if(c.value.discoveredClueIds.length<2){c.value={...c.value,lastResult:"至少先看两条线索，不然这更像撞运气，而不是破局。"};return}const nt=E.analysis;if(A===nt.solutionId){c.value={...c.value,selectedHypothesisId:A,windowReady:!0,lastResult:`${nt.solutionFeedback} ${nt.breakthroughTitle}：${nt.breakthroughDetail}`};return}const q=c.value.attemptedHypothesisIds.includes(A);q||K("risk",1),c.value={...c.value,selectedHypothesisId:A,attemptedHypothesisIds:q?c.value.attemptedHypothesisIds:[...c.value.attemptedHypothesisIds,A],lastResult:`${nt.failureFeedback}${q?"":" 风险 +1。"}`}},se=()=>{var j;if(!c.value||!c.value.windowReady)return;const A=c.value,U=Hc.get(A.id);if(!U){c.value=null;return}c.value=null;const E=((j=xp[A.id])==null?void 0:j.mode)??"calm",nt=v(A.id,E),q=A.id==="Ω-01"?2200:1550;f.value={id:A.id,title:A.title,subtitle:A.subtitle,dist:A.dist,mode:E,lead:A.breakthroughTitle,steps:nt,stepIndex:0,progress:.12},nt.forEach((st,lt)=>{const Q=Math.round(q/nt.length*lt),T=setTimeout(()=>{!f.value||f.value.id!==A.id||(f.value={...f.value,stepIndex:lt,progress:Math.min(.3+(lt+1)/nt.length*.62,.96)})},Q);M.push(T)}),p=setTimeout(()=>{const st=A.discoveredClueIds.length,lt=A.id===Eo?w(R()):null;i.value={id:A.id,title:A.title,subtitle:A.subtitle,dist:A.dist,message:lt?C(U.message,lt):U.message,choices:(lt?P(U.choices,lt):U.choices).map(Q=>({...Q,obscured:Q.obscured&&st<A.clues.length})),stage:"choice"},f.value=null,p=null,M=[]},q)},ot=A=>{if(!i.value||i.value.stage!=="choice")return null;const U=i.value.id,E=U===Eo?R():null;Object.entries(A.effects).forEach(([q,j])=>{K(q,j)}),d[U]=!0,o.value=A.id,a.value="READING SIGNAL...";const nt=ow[A.id];return nt&&(u.value=nt.mode,S(nt,2600)),i.value={...i.value,stage:"response",selectedChoice:A,reply:""},_=setTimeout(()=>{i.value&&(a.value=A.reply,i.value={...i.value,reply:A.reply},g=setTimeout(()=>{U===Eo&&E&&(s.value=B(A,E)),i.value=null,U!==Eo&&mt()},3600))},900),U},ht=Ze(()=>Object.values(d).filter(A=>!A).length),Nt=Ze(()=>n.value?s.value?"LINK RESOLVED":r.value!==null?"ROLE BRIEFING":c.value?c.value.windowReady?"BREAKTHROUGH LOCKED":"CASE ANALYSIS":f.value?"WINDOW SYNC":i.value?"LIVE ADVISORY WINDOW":"LINK TRACKING":"LINK STANDBY"),Et=Ze(()=>r.value===null?null:vp[r.value]),kt=Ze(()=>w(R()).vector),Xt=Ze(()=>[{label:"TRUST",value:e.trust},{label:"RISK",value:e.risk},{label:"TRUTH",value:e.truth}]),$t=Ze(()=>{if(c.value)return c.value.windowReady?`${c.value.id} READY`:`${c.value.id} CASE OPEN`;if(f.value)return`${f.value.id} WINDOW FORMING`;if(i.value)return`${i.value.id} LIVE`;const A=x();return A?`${A} READY`:"COMPLETE"}),_e=Ze(()=>[`LINK::${n.value?"OPEN":"SEALED"}.............`,"FIELD_UNIT: NIA-7",`TRUST_INDEX: ${e.trust.toString().padStart(2,"0")}`,`RISK_VECTOR: ${e.risk.toString().padStart(2,"0")}`,`TRUTH_DEPTH: ${e.truth.toString().padStart(2,"0")}`,`ROUTE_MARKERS: ${t.value.toString().padStart(2,"0")}`,`CASE_FILE: ${$t.value}`,`LAST_ADVICE: ${o.value}`,`FIELD_REPLY: ${a.value}`]);return{activeTransmission:i,advanceIntroBriefing:W,bufferingTransmission:f,completedSignals:d,dataLines:_e,dismissNarrative:Y,endingPanel:s,environmentMode:u,inspectPendingClue:Tt,introBriefing:Et,introBriefingIndex:r,linkStatus:Nt,nextSignalLabel:$t,openPendingTransmission:se,pendingSignals:ht,pendingTransmission:c,resetSession:k,sceneCue:l,scheduleUpcomingSignal:mt,sendAdvice:ot,signalsArmed:h,startIntroBriefing:J,statDisplay:Xt,stats:e,submitPendingHypothesis:Ut,vectorLabel:kt}}const uw=120,fw=80,hw=40,dw=26;function pw({activeTransmission:n,analysisFocusTarget:t,canvasEl:e,completedSignals:i,isExploring:s,rippleEl:r,routeMarkers:o,environmentMode:a,sceneCue:l,signalsArmed:u,tourSpeed:c}){const f=Fl.map(V=>({id:V.id,pos:new O(V.position.x,V.position.y,V.position.z),triggered:!1,completed:!1}));let h,d,g,_=0,m,p,M,y,v,R=[],w,C,P=[],x,S=[],L,N=[],k,Y,J,W=[],K=[],B,gt=0,mt=null,Tt=0;const Ut=[],se=new og,ot=new Ht,ht=new ne(655365),Nt=new ne(197125),Et=new ne(7854079),kt=new ne(13378048),Xt=new O;new O;const $t={"Ω-01":{offset:new O(-4.8,2.8,4.4),lookOffset:new O(.4,1.1,-2.8),damping:.045,fov:58,wobbleX:.18,wobbleY:.08},"Ψ-02":{offset:new O(5.2,1.6,4.8),lookOffset:new O(-.8,.6,-2.4),damping:.06,fov:64,wobbleX:.35,wobbleY:.12},"Δ-03":{offset:new O(.7,-.9,2.2),lookOffset:new O(0,-1.4,-3.2),damping:.07,fov:71,wobbleX:.06,wobbleY:.05},"Λ-04":{offset:new O(-2.8,2.2,3.1),lookOffset:new O(1.2,.4,-2.6),damping:.055,fov:62,wobbleX:.24,wobbleY:.16},"X-05":{offset:new O(0,5.8,8.2),lookOffset:new O(0,4.4,-6),damping:.038,fov:72,wobbleX:.1,wobbleY:.05}},_e={"Ω-01":{position:new O(-10.5,4.6,14.8),lookAt:new O(-6.8,2.2,7),fov:60,damping:.028},"Ψ-02":{position:new O(-4.4,3.8,10.4),lookAt:new O(0,2.8,1.2),fov:62,damping:.03},"Δ-03":{position:new O(3.8,3.2,9.4),lookAt:new O(7.2,1.4,7),fov:64,damping:.03},"Λ-04":{position:new O(-1.8,4.8,8.8),lookAt:new O(-5.1,2.9,3.2),fov:61,damping:.028},"X-05":{position:new O(1.2,6.6,16.4),lookAt:new O(4,4.4,10),fov:68,damping:.024}},A=V=>{switch(V){case"quake":return{fogDensity:.028,fogColor:1378058,clearColor:262660,wireColor:16748349,sunColor:16734774,hazeOpacity:.28,shake:.1,cameraLift:.35,cameraPush:-.25};case"storm":return{fogDensity:.036,fogColor:528666,clearColor:263947,wireColor:9560063,sunColor:11454975,hazeOpacity:.34,shake:.06,cameraLift:.18,cameraPush:-.45};case"fissure":return{fogDensity:.044,fogColor:132874,clearColor:131845,wireColor:7005183,sunColor:5164031,hazeOpacity:.42,shake:.08,cameraLift:-.8,cameraPush:-.95};case"whiteout":return{fogDensity:.052,fogColor:14410986,clearColor:11187908,wireColor:16055295,sunColor:15003384,hazeOpacity:.5,shake:.03,cameraLift:.15,cameraPush:-.1};case"magnetic":return{fogDensity:.03,fogColor:459795,clearColor:196871,wireColor:16742391,sunColor:8118527,hazeOpacity:.22,shake:.12,cameraLift:.22,cameraPush:-.18};case"skyfold":return{fogDensity:.018,fogColor:590607,clearColor:131333,wireColor:16766829,sunColor:16774067,hazeOpacity:.16,shake:.04,cameraLift:.65,cameraPush:.18};default:return{fogDensity:.022,fogColor:655365,clearColor:197125,wireColor:7854079,sunColor:13378048,hazeOpacity:.18,shake:0,cameraLift:0,cameraPush:0}}},U=(V,rt)=>{const ft=V.material;if(Array.isArray(ft)){ft.forEach(pt=>{pt.transparent=!0,pt.opacity=rt});return}ft.transparent=!0,ft.opacity=rt},E=(V,rt)=>{V.visible=rt>.01,V.traverse(ft=>{if(ft instanceof Me&&U(ft,rt),ft instanceof Cc){const pt=ft.material;pt.transparent=!0,pt.opacity=rt}})},nt=()=>{var V;return((V=f.find(rt=>!i[rt.id]))==null?void 0:V.id)??Eo},q=(V,rt)=>{let ft=0,pt=1,Jt=1;const it=[1,.52,.52*.52,.52*.52*.52,.52*.52*.52*.52].reduce((It,Mt)=>It+Mt,0);for(let It=0;It<5;It+=1)ft+=Math.sin(V*Jt*.4+Jt)*Math.cos(rt*Jt*.35+Jt*.7)*pt,ft+=Math.sin(V*Jt*.7+Jt*2.1)*Math.sin(rt*Jt*.6+Jt*1.3)*pt*.5,pt*=.52,Jt*=2.1;return ft/(it*1.5)},j=V=>{if(V.mesh){const rt=V.mesh.material;rt.color.set(8118527),rt.opacity=.9,V.mesh.scale.setScalar(1)}if(V.ring){const rt=V.ring.material;rt.color.set(16762967),rt.opacity=.35,V.ring.rotation.set(0,0,0)}V.light&&(V.light.color.set(8118527),V.light.intensity=2)},st=V=>{if(V.mesh){const rt=V.mesh.material;rt.color.set(16762967),rt.opacity=.75}if(V.ring){const rt=V.ring.material;rt.color.set(8118527),rt.opacity=.18}V.light&&(V.light.color.set(16762967),V.light.intensity=.8)},lt=V=>{const rt=i[V.id];if(V.completed!==rt){if(V.completed=rt,V.completed){st(V);return}j(V)}},Q=()=>{const V=new si(hw,dw,uw,fw);V.rotateX(-Math.PI/2);const rt=V.attributes.position;m=new Float32Array(rt.count);for(let Mt=0;Mt<rt.count;Mt+=1){const ce=rt.getX(Mt),Ae=rt.getZ(Mt),wi=Math.exp(-((Ae+2)**2)/40)*3.5,ts=q(ce,Ae)*4+wi,oo=Math.max(ts,-.5);rt.setY(Mt,oo),m[Mt]=oo}V.computeVertexNormals(),p=new Me(V,new Bd({color:3613717,roughness:.9,metalness:.15,emissive:new ne(2754568),emissiveIntensity:1.2,side:ji})),p.receiveShadow=!0,d.add(p);const ft=V.clone();M=new Me(ft,new qe({color:7854079,wireframe:!0,transparent:!0,opacity:.32})),d.add(M);const pt=V.clone(),Jt=pt.attributes.position;for(let Mt=0;Mt<Jt.count;Mt+=1)Jt.setY(Mt,Jt.getY(Mt)-.08);pt.computeVertexNormals(),d.add(new Me(pt,new qe({color:16748349,wireframe:!0,transparent:!0,opacity:.07})));const yt=new Gd(16737826,2.5);yt.position.set(0,20,-15),yt.castShadow=!0,d.add(yt);const it=new Gd(16724736,1.4);it.position.set(0,5,20),d.add(it),d.add(new iS(3346722,2.5));const It=new Vd(16757575,8,20);It.position.set(2,.5,2),d.add(It)},T=()=>{y=new Me(new Xs(2.2,32,32),new qe({color:13378048})),y.position.set(8,14,-25),d.add(y),v=new Me(new Xs(3.2,32,32),new qe({color:16724736,transparent:!0,opacity:.15,side:nn})),y.add(v),y.add(new Me(new Xs(5.5,32,32),new qe({color:6684689,transparent:!0,opacity:.07,side:nn}))),R=[];for(let V=0;V<12;V+=1){const rt=V/12*Math.PI*2,ft=3+Math.random()*3,pt=new Me(new si(.15+Math.random()*.2,ft),new qe({color:16720384,transparent:!0,opacity:.12+Math.random()*.1,side:tn}));pt.rotation.z=rt,pt.position.set(Math.cos(rt)*(2.8+ft/2),Math.sin(rt)*(2.8+ft/2),0),R.push(pt),y.add(pt)}},b=()=>{w=new Me(new si(200,30),new qe({color:5570576,transparent:!0,opacity:.18,depthWrite:!1,side:tn})),w.rotation.x=Math.PI/2,w.position.set(0,.1,-10),d.add(w);const V=300,rt=new yn,ft=new Float32Array(V*3);for(let pt=0;pt<V;pt+=1)ft[pt*3]=(Math.random()-.5)*160,ft[pt*3+1]=Math.random()*40+5,ft[pt*3+2]=(Math.random()-.5)*80-15;rt.setAttribute("position",new Qn(ft,3)),d.add(new Cc(rt,new tf({color:16765056,size:.1,transparent:!0,opacity:.5})));for(let pt=0;pt<6;pt+=1){const Jt=[],yt=(Math.random()-.5)*16,it=(Math.random()-.5)*8-2;for(let Mt=0;Mt<=20;Mt+=1){const ce=Mt/20;Jt.push(new O(yt+Math.sin(ce*Math.PI*3+pt)*ce*1.5,ce*(4+Math.random()*3),it+Math.cos(ce*Math.PI*2.5+pt*.7)*ce*1.2))}const It=new ng(Jt);d.add(new Me(new ih(It,30,.03+Math.random()*.04,6,!1),new qe({color:pt%2===0?4521864:8913151,transparent:!0,opacity:.25+Math.random()*.2})))}},F=()=>{L=new js,N=[];for(let ft=0;ft<4;ft+=1){const pt=new Me(new si(6.5,10+ft*.7),new qe({color:12445695,transparent:!0,opacity:0,depthWrite:!1,side:tn}));pt.position.set(-6+ft*4,4.5,-2-ft*1.8),pt.rotation.y=-.18+ft*.12,N.push(pt),L.add(pt)}k=new Me(new Xs(18,32,20,0,Math.PI),new qe({color:9296127,transparent:!0,opacity:0,side:nn,depthWrite:!1})),k.position.set(2,6,-12),L.add(k);const V=new yn,rt=new Float32Array(320*3);for(let ft=0;ft<320;ft+=1)rt[ft*3]=(Math.random()-.5)*18,rt[ft*3+1]=Math.random()*10+1,rt[ft*3+2]=(Math.random()-.5)*14;V.setAttribute("position",new Qn(rt,3)),Y=new Cc(V,new tf({color:15267839,size:.12,transparent:!0,opacity:0,depthWrite:!1})),L.add(Y),L.visible=!1,d.add(L)},X=()=>{C=new js,P=[],S=[];const V=new si(5.5,9,8,12);for(let rt=-1;rt<=1;rt+=2){const ft=new Me(V,new Bd({color:1449252,emissive:new ne(663078),emissiveIntensity:1,transparent:!0,opacity:0,side:tn}));ft.position.set(rt*2.6,-.2,-1.8),ft.rotation.y=rt*.42,ft.rotation.x=-.06,P.push(ft),C.add(ft)}x=new Me(new th(.22,1.05,11,18,1,!0),new qe({color:6547711,transparent:!0,opacity:0,side:tn,depthWrite:!1})),x.position.set(0,-1.8,-3.2),C.add(x);for(let rt=0;rt<18;rt+=1){const ft=new Me(new nh(.12+Math.random()*.22,0),new qe({color:rt%2===0?6547711:11924223,transparent:!0,opacity:0}));ft.position.set((Math.random()-.5)*2.8,-1.2+Math.random()*3.8,-2.4-Math.random()*3.8),S.push(ft),C.add(ft)}C.visible=!1,d.add(C)},Z=()=>{J=new js,W=[],K=[];for(let V=0;V<4;V+=1){const rt=new Me(new xl(8+V*1.6,.06+V*.01,10,120,Math.PI*1.2),new qe({color:V%2===0?16769169:8118527,transparent:!0,opacity:0,side:tn}));rt.rotation.x=Math.PI/2.1+V*.08,rt.rotation.z=V*.35,rt.position.set(0,10+V*.9,-10-V*1.6),W.push(rt),J.add(rt)}for(let V=0;V<6;V+=1){const rt=new Me(new si(.18,8+Math.random()*4),new qe({color:16773314,transparent:!0,opacity:0,depthWrite:!1,side:tn}));rt.position.set(-8+V*3.2,6+Math.random()*2,-8-Math.random()*4),rt.rotation.z=(Math.random()-.5)*.18,K.push(rt),J.add(rt)}J.visible=!1,d.add(J)},$=()=>{f.forEach(V=>{const rt=new Me(new Xs(.18,16,16),new qe({color:8118527,transparent:!0,opacity:.9}));rt.position.copy(V.pos),d.add(rt),V.mesh=rt;const ft=new Me(new xl(.35,.03,8,32),new qe({color:16762967,transparent:!0,opacity:.35}));ft.position.copy(V.pos),d.add(ft),V.ring=ft;const pt=new Vd(8118527,2,6);pt.position.copy(V.pos),d.add(pt),V.light=pt})},xt=(V,rt)=>{const ft=V==="storm"?.88:0,pt=V==="fissure"?.94:0,Jt=V==="skyfold"?.92:0;if(E(L,ft),E(C,pt),E(J,Jt),ft>.01){N.forEach((It,Mt)=>{It.position.x=-6+Mt*4+Math.sin(rt*1.8+Mt)*.25,It.position.y=4.2+Math.sin(rt*2.4+Mt*.3)*.2}),k.rotation.y+=.002;const yt=k.material;yt.opacity=.1+Math.sin(rt*.9)*.04+ft*.18;const it=Y.geometry.attributes.position;for(let It=0;It<it.count;It+=1){let Mt=it.getY(It)-.22,ce=it.getX(It)+.08;Mt<-1&&(Mt=11+Math.random()*3),ce>10&&(ce=-10),it.setY(It,Mt),it.setX(It,ce)}it.needsUpdate=!0}if(pt>.01){const yt=x.material;yt.opacity=.28+Math.sin(rt*2.4)*.08+pt*.16,x.scale.y=1+Math.sin(rt*1.6)*.06,S.forEach((it,It)=>{it.position.y+=Math.sin(rt*1.2+It)*.002,it.rotation.x+=.01+It*4e-4,it.rotation.y+=.02+It*3e-4})}Jt>.01&&(W.forEach((yt,it)=>{yt.rotation.z+=.0015+it*4e-4,yt.rotation.x=Math.PI/2.1+it*.08+Math.sin(rt*.7+it)*.02}),K.forEach((yt,it)=>{yt.position.y=6+it*.18+Math.sin(rt*1.5+it*.5)*.28}))},ut=(V,rt)=>{const ft=f.find(Jt=>Jt.id===V),pt=$t[V];return!ft||!pt?null:{position:Xt.copy(ft.pos).add(pt.offset).add(new O(Math.sin(rt*.8+ft.pos.x)*pt.wobbleX,Math.sin(rt*1.1+ft.pos.z)*pt.wobbleY,0)),lookAt:ft.pos.clone().add(pt.lookOffset),damping:pt.damping,fov:pt.fov}},_t=(V,rt)=>{const ft=_e[V];return ft?{position:ft.position.clone().add(new O(Math.sin(rt*.22+ft.position.x)*.18,Math.sin(rt*.16+ft.position.z)*.08,Math.cos(rt*.18+ft.position.y)*.12)),lookAt:ft.lookAt.clone().add(new O(Math.sin(rt*.15)*.4,Math.sin(rt*.12+.8)*.12,0)),damping:ft.damping*(.9+c.value*.15),fov:ft.fov}:null},Gt=(V,rt)=>{var ft;if(!g)return null;if(V==="sun"&&y)return{position:y.position.clone().add(new O(-2.4,.8,7.8)),lookAt:y.position.clone().add(new O(0,-.2,0)),damping:.08,fov:34};if(V==="storm"&&k)return{position:k.position.clone().add(new O(6.4,-1.6,7.8)),lookAt:k.position.clone().add(new O(-.4,-1.1,2.6)),damping:.075,fov:42};if(V==="fissure"&&x)return{position:x.position.clone().add(new O(2.1,1.1,5.4)),lookAt:x.position.clone().add(new O(0,.3,-.8)),damping:.08,fov:36};if(V==="magnetic"){const pt=f.find(Jt=>Jt.id==="Λ-04");return pt?{position:pt.pos.clone().add(new O(-3.6,2.2,3.2)),lookAt:pt.pos.clone().add(new O(.8,.3,-2.1)),damping:.07,fov:40}:null}if(V==="skyfold"&&W.length>0){const pt=((ft=W[1])==null?void 0:ft.position)??W[0].position;return{position:pt.clone().add(new O(.4,1.8,10.5)),lookAt:pt.clone().add(new O(0,.2,-1.2)),damping:.06,fov:38}}return null},dt=()=>{var pt;if(!g||!p)return;const V=new O(g.position.x,40,g.position.z);se.set(V,new O(0,-1,0));const ft=(((pt=se.intersectObject(p,!1)[0])==null?void 0:pt.point.y)??0)+1.35;g.position.y<ft&&(g.position.y+=(ft-g.position.y)*.35)},At=()=>{if(!(!mt||!r.value)){mt.clearRect(0,0,r.value.width,r.value.height);for(let V=Ut.length-1;V>=0;V-=1){const rt=Ut[V];if(rt.r+=3.5,rt.alpha-=.012,rt.alpha<=0){Ut.splice(V,1);continue}mt.beginPath(),mt.arc(rt.x,rt.y,rt.r,0,Math.PI*2),mt.strokeStyle=`rgba(204, 26, 26, ${rt.alpha})`,mt.lineWidth=1.5,mt.stroke(),mt.beginPath(),mt.arc(rt.x,rt.y,rt.r*.6,0,Math.PI*2),mt.strokeStyle=`rgba(34, 255, 100, ${rt.alpha*.4})`,mt.lineWidth=.8,mt.stroke()}}},Bt=()=>{var it;if(_=requestAnimationFrame(Bt),!h||!d||!g||!M||!p||!y||!v)return;const V=B.getElapsedTime(),rt=M.geometry.attributes.position,ft=p.geometry.attributes.position;for(let It=0;It<rt.count;It+=1){const Mt=rt.getX(It),ce=rt.getZ(It),Ae=Math.sin(Mt*.4+V*.6)*.18+Math.sin(ce*.55+V*.45)*.14+Math.sin((Mt+ce)*.3+V*.8)*.1,wi=m[It]+Ae;rt.setY(It,wi),ft.setY(It,wi)}rt.needsUpdate=!0,ft.needsUpdate=!0,M.geometry.computeVertexNormals(),p.geometry.computeVertexNormals();const pt=((it=l.value)==null?void 0:it.mode)??a.value,Jt=A(pt);Tt+=((l.value?Jt.shake:0)-Tt)*.06,ht.lerp(new ne(Jt.fogColor),.04),Nt.lerp(new ne(Jt.clearColor),.04),Et.lerp(new ne(Jt.wireColor),.06),kt.lerp(new ne(Jt.sunColor),.05),d.fog.color.copy(ht),d.fog.density+=(Jt.fogDensity-d.fog.density)*.05,h.setClearColor(Nt,1),M.material.color.copy(Et),y.material.color.copy(kt),v.material.color.copy(kt),w.material.opacity+=(Jt.hazeOpacity-w.material.opacity)*.04,xt(pt,V);const yt=1+Math.sin(V*1.2)*.03+Math.sin(V*3.7)*.01+Tt*.08;if(y.scale.setScalar(yt),v.material.opacity=.1+Math.sin(V*.8)*.06,R.forEach((It,Mt)=>{It.material.opacity=.06+Math.sin(V*(1.5+Mt*.4)+Mt)*.08}),s.value){const It=t.value?Gt(t.value):null,Mt=!It&&n.value?ut(n.value.id,V):null,ce=!It&&!Mt?_t(nt(),V):null;It?(g.position.x+=(It.position.x-g.position.x)*It.damping,g.position.y+=(It.position.y-g.position.y)*It.damping,g.position.z+=(It.position.z-g.position.z)*It.damping,g.fov+=(It.fov-g.fov)*.06,g.updateProjectionMatrix(),g.lookAt(It.lookAt)):Mt?(g.position.x+=(Mt.position.x-g.position.x)*Mt.damping,g.position.y+=(Mt.position.y-g.position.y)*Mt.damping,g.position.z+=(Mt.position.z-g.position.z)*Mt.damping,g.fov+=(Mt.fov-g.fov)*.05,g.updateProjectionMatrix(),g.lookAt(Mt.lookAt)):ce&&(g.position.x+=(ce.position.x-g.position.x)*ce.damping,g.position.y+=(ce.position.y+Jt.cameraLift*.35-g.position.y)*ce.damping,g.position.z+=(ce.position.z+Jt.cameraPush*.35-g.position.z)*ce.damping,g.fov+=(ce.fov-g.fov)*.04,g.updateProjectionMatrix(),g.lookAt(ce.lookAt)),Tt>.01&&(g.position.x+=(Math.random()-.5)*Tt,g.position.y+=(Math.random()-.5)*Tt*.6),dt(),f.forEach(Ae=>{if(!Ae.mesh||!Ae.light)return;lt(Ae);const wi=Ae.completed?.55+Math.sin(V*2.2+Ae.pos.x)*.06:.72+Math.sin(V*3+Ae.pos.x)*.22;Ae.mesh.scale.setScalar(wi),Ae.light.intensity=Ae.completed?.6+Math.sin(V*1.6+Ae.pos.z)*.15:1.6+Math.sin(V*2.5+Ae.pos.z)*.9,Ae.ring&&(Ae.ring.rotation.x+=.01,Ae.ring.rotation.y+=.015);const ts=g.position.distanceTo(Ae.pos);Ae.triggered=!Ae.completed&&u.value&&!n.value&&ts<3.5}),At()}else g.position.x+=(gt*1.5-g.position.x)*.02,g.position.y=6+Math.sin(V*.3)*.3,g.fov+=(60-g.fov)*.05,g.updateProjectionMatrix(),g.lookAt(0,1+Math.sin(V*.2)*.2,0);h.render(d,g)};return{animateScene:Bt,disposeScene:()=>{cancelAnimationFrame(_),h==null||h.dispose()},flyToTourStart:()=>{g&&zt.to(g.position,{x:-10,y:4,z:14,duration:1.2,ease:"power2.out"})},initScene:()=>{e.value&&(B=new rS,h=new hg({canvas:e.value,antialias:!0,alpha:!1}),h.setSize(window.innerWidth,window.innerHeight),h.setPixelRatio(Math.min(window.devicePixelRatio,2)),h.setClearColor(197125,1),h.shadowMap.enabled=!0,d=new Q_,d.fog=new Zf(655365,.022),g=new wn(60,window.innerWidth/window.innerHeight,.1,200),g.position.set(0,6,18),g.lookAt(0,1,0),Q(),T(),b(),F(),X(),Z(),$())},initializeRippleCanvas:()=>{r.value&&(r.value.width=window.innerWidth,r.value.height=window.innerHeight,mt=r.value.getContext("2d"))},onCanvasClick:V=>{if(!s.value||!u.value||!e.value||!g||!p||!h||(r.value&&Ut.push({x:V.clientX,y:V.clientY,r:0,maxR:120,alpha:.7}),ot.set(V.clientX/window.innerWidth*2-1,-(V.clientY/window.innerHeight)*2+1),se.setFromCamera(ot,g),se.intersectObject(p).length===0))return;o.value+=1;const ft=(Math.random()-.5)*.35,pt=(Math.random()-.5)*.2;zt.timeline().to(g.position,{x:`+=${ft}`,y:`+=${pt}`,duration:.07,ease:"none"}).to(g.position,{x:`-=${ft*.8}`,y:`-=${pt*.8}`,duration:.07,ease:"none"}).to(g.position,{x:`+=${ft*.15}`,y:`+=${pt*.15}`,duration:.1,ease:"none"})},onMouseMove:V=>{gt=(V.clientX/window.innerWidth-.5)*2},onResize:()=>{!g||!h||(g.aspect=window.innerWidth/window.innerHeight,g.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight),r.value&&(r.value.width=window.innerWidth,r.value.height=window.innerHeight))},playIntroSequence:()=>{g&&(Tt=.18,zt.timeline().to(g.position,{x:-3,y:7.2,z:13,duration:.9,ease:"power2.out"}).to(g.position,{x:2.5,y:4.2,z:10.4,duration:1.4,ease:"power2.inOut"},"-=0.35").to(g.position,{x:-9.5,y:4.1,z:14.2,duration:1.1,ease:"power2.out"}))},resetSessionVisuals:()=>{Ut.length=0,Tt=0,E(L,0),E(C,0),E(J,0),f.forEach(V=>{V.triggered=!1,V.completed=!1,j(V)})},resetTour:()=>{},returnCameraHome:()=>{g&&zt.to(g.position,{x:0,y:6,z:18,duration:2,ease:"power3.inOut"})}}}const mw={key:2,class:"intro-transition"},_w={key:0,class:"analysis-focus-overlay"},gw={class:"analysis-focus-copy"},vw={class:"cue-frame"},xw={class:"cue-title"},yw={class:"cue-body"},Mw={class:"hud-status"},Sw={class:"data-stream"},bw={class:"link-metrics"},Ew={class:"metric-label"},Tw={class:"metric-value"},ww={class:"tour-speed"},Aw={class:"speed-val"},Cw={key:0,class:"briefing-panel"},Rw={class:"briefing-kicker"},Pw={class:"briefing-title"},Dw={class:"briefing-copy"},Iw={class:"briefing-progress"},Lw={class:"choice-copy"},Uw={key:0,class:"prep-panel"},Nw={class:"prep-header"},Ow={class:"prep-kicker"},Fw={class:"prep-dist"},Bw={class:"prep-system-title"},kw={class:"prep-title"},zw={class:"analysis-stagebar"},Hw={class:"prep-progress"},Vw={class:"prep-instruction"},Gw={key:0,class:"analysis-stage-panel"},Ww={class:"analysis-brief-grid"},Xw={class:"analysis-brief-label"},qw={class:"analysis-brief-text"},Yw={class:"analysis-question"},$w={key:1,class:"analysis-stage-panel"},Kw={class:"analysis-status"},jw={class:"analysis-clue-strip"},Zw=["onClick"],Jw={class:"analysis-clue-chip-index"},Qw={class:"analysis-clue-chip-title"},tA={key:0,class:"analysis-clue-page"},eA={class:"analysis-clue-page-header"},nA={class:"analysis-section-title"},iA={class:"analysis-clue-page-title"},sA={class:"analysis-clue-page-tag"},rA={class:"analysis-clue-page-body"},oA={class:"analysis-clue-block"},aA={class:"analysis-clue-block-text"},lA={class:"analysis-clue-block analysis-clue-block-focus"},cA={class:"analysis-clue-block-text"},uA={key:0,class:"analysis-clue-detail"},fA={class:"analysis-clue-block"},hA={class:"analysis-card-copy"},dA={class:"analysis-clue-block analysis-clue-block-meaning"},pA={class:"analysis-card-copy"},mA={class:"analysis-clue-nav"},_A=["disabled"],gA=["disabled"],vA={class:"analysis-stage-actions analysis-stage-actions-split"},xA=["disabled"],yA={key:2,class:"analysis-stage-panel"},MA={class:"analysis-status"},SA={class:"analysis-section"},bA={class:"prep-actions analysis-hypothesis-grid"},EA=["onClick"],TA={class:"analysis-card-title"},wA={class:"analysis-card-copy"},AA={key:0,class:"analysis-breakthrough"},CA={class:"analysis-breakthrough-title"},RA={class:"prep-result"},PA={class:"analysis-stage-actions analysis-stage-actions-split"},DA=["disabled"],IA={class:"buffer-header"},LA={class:"buffer-kicker"},UA={class:"buffer-dist"},NA={class:"buffer-title"},OA={class:"buffer-lead"},FA={class:"buffer-progress"},BA={class:"buffer-steps"},kA={class:"buffer-step-index"},zA={key:0,class:"comms-popup"},HA={class:"signal-header"},VA={class:"signal-tag"},GA={class:"signal-dist"},WA={class:"signal-meta"},XA=["innerHTML"],qA={key:0,class:"choice-panel"},YA=["onClick"],$A={class:"choice-id"},KA={class:"choice-copy"},jA={key:1,class:"reply-panel"},ZA={class:"outgoing-copy"},JA={key:0,class:"ending-panel"},QA={class:"ending-header"},tC={class:"ending-kicker"},eC={class:"ending-vector"},nC={class:"ending-title"},iC={class:"ending-summary"},sC={class:"ending-body"},rC={class:"ending-stats"},oC={class:"ending-stat"},aC={class:"ending-stat"},lC={class:"ending-stat"},cC={key:3,class:"click-hint"},uC=3,fC=_0({__name:"TechView",props:{active:{type:Boolean}},emits:["explore-mode"],setup(n,{emit:t}){const e=n,i=t,s=he(null),r=he(null),o=he(null),a=he(null),l=he(!1),u=he(!0),c=he(!1),f=he(1),h=he(0),d=he(!1),g=he(null),_=he(null),m=he("brief"),p=he(0);let M=null,y=null;const{activeTransmission:v,advanceIntroBriefing:R,bufferingTransmission:w,completedSignals:C,dataLines:P,dismissNarrative:x,endingPanel:S,environmentMode:L,introBriefing:N,introBriefingIndex:k,inspectPendingClue:Y,linkStatus:J,openPendingTransmission:W,pendingSignals:K,pendingTransmission:B,nextSignalLabel:gt,resetSession:mt,scheduleUpcomingSignal:Tt,sceneCue:Ut,sendAdvice:se,signalsArmed:ot,startIntroBriefing:ht,statDisplay:Nt,stats:Et,submitPendingHypothesis:kt,vectorLabel:Xt}=cw({isExploring:l,routeMarkers:h}),{animateScene:$t,disposeScene:_e,flyToTourStart:A,initScene:U,initializeRippleCanvas:E,onCanvasClick:nt,onMouseMove:q,onResize:j,playIntroSequence:st,resetSessionVisuals:lt,resetTour:Q,returnCameraHome:T}=pw({activeTransmission:v,analysisFocusTarget:g,canvasEl:s,completedSignals:C,isExploring:l,environmentMode:L,rippleEl:a,routeMarkers:h,sceneCue:Ut,signalsArmed:ot,tourSpeed:f}),b=Ze(()=>`mode-${L.value}`),F=Ze(()=>l.value?k.value===null?1:[.12,.32,.58][k.value]??.12:.04),X=Ze(()=>F.value<1),Z=Ze(()=>l.value&&!S.value),$=Ze(()=>{var yt;return!!((yt=B.value)!=null&&yt.windowReady)}),xt=Ze(()=>{var yt;return(((yt=B.value)==null?void 0:yt.discoveredClueIds.length)??0)>=2}),ut=Ze(()=>{var yt;return((yt=B.value)==null?void 0:yt.clues.find(it=>it.id===_.value))??null}),_t=Ze(()=>{var yt;return((yt=B.value)==null?void 0:yt.clues[p.value])??null}),Gt=Ze(()=>{const yt=8+F.value*60,it=Math.max(yt-18,0),It=Math.max(yt-8,0);return{background:`radial-gradient(circle at 50% 56%, rgba(3, 2, 5, 0) 0%, rgba(3, 2, 5, 0.05) ${it}%, rgba(3, 2, 5, 0.22) ${It}%, rgba(3, 2, 5, 0.68) ${yt}%, rgba(1, 1, 4, 0.98) 100%)`}}),dt=Ze(()=>{const yt=new Date;return`${yt.getFullYear()}.${String(yt.getMonth()+1).padStart(2,"0")}.${String(yt.getDate()).padStart(2,"0")}`}),At=()=>{u.value=!0,c.value=!1,Co(()=>{r.value&&!l.value&&(zt.killTweensOf(r.value),r.value.style.opacity="1",r.value.style.transform="translateY(0)"),o.value&&!l.value&&(zt.killTweensOf(o.value),o.value.style.opacity="0",o.value.style.transform="translateY(20px)")})},Bt=()=>{M&&clearTimeout(M),y&&clearTimeout(y),d.value=!1,l.value=!1,x(),lt(),Q(),T(),i("explore-mode",!1),At()},qt=()=>{l.value||(l.value=!0,i("explore-mode",!0),mt(),lt(),Q(),ht(),st(),r.value?(zt.killTweensOf(r.value),zt.to(r.value,{opacity:0,y:-30,duration:.8,ease:"power2.in",onComplete:()=>{l.value&&(u.value=!1)}})):u.value=!1,c.value=!0,Co(()=>{o.value&&(zt.killTweensOf(o.value),zt.fromTo(o.value,{opacity:0,y:20},{opacity:1,y:0,duration:.8,delay:.6,ease:"power2.out"}))}))},wt=()=>{M&&clearTimeout(M),y&&clearTimeout(y),d.value=!0,M=setTimeout(()=>{R()&&(A(),Tt())},220),y=setTimeout(()=>{d.value=!1},620)},Zt=yt=>{se(yt)},Vt=()=>{g.value=null,_.value=null},ue=yt=>{_.value=yt.id,g.value=yt.focusTarget??null},z=yt=>{var It;(((It=B.value)==null?void 0:It.discoveredClueIds.includes(yt.id))??!1)||Y(yt.id),ue(yt)},Ct=()=>{m.value="brief",p.value=0,Vt()},at=()=>{m.value="clues",_t.value&&z(_t.value)},ct=()=>{var yt;!xt.value&&!((yt=B.value)!=null&&yt.windowReady)||(m.value="theory")},Pt=yt=>{if(!B.value)return;const it=Math.min(B.value.clues.length-1,Math.max(0,p.value+yt));p.value=it,B.value.clues[it]&&z(B.value.clues[it])},Dt=yt=>{var it;(it=B.value)!=null&&it.clues[yt]&&(p.value=yt,z(B.value.clues[yt]))},V=yt=>{Vt(),kt(yt)},rt=()=>{Vt(),W()},ft=()=>{l.value&&(Vt(),l.value=!1,i("explore-mode",!1),x(),o.value?(zt.killTweensOf(o.value),zt.to(o.value,{opacity:0,y:20,duration:.5,ease:"power2.in",onComplete:()=>{l.value||(c.value=!1)}})):c.value=!1,u.value=!0,Co(()=>{r.value&&(zt.killTweensOf(r.value),zt.fromTo(r.value,{opacity:0,y:-30},{opacity:1,y:0,duration:.8,delay:.3,ease:"power2.out"}))}),T())},pt=()=>{l.value&&(Vt(),mt(),lt(),Q(),ht(),st())},Jt=yt=>{yt.key==="Escape"&&l.value&&ft()};return Qs(()=>e.active,yt=>{if(!yt){Vt(),Bt();return}yt&&At()},{immediate:!0}),Qs(()=>{var yt;return((yt=B.value)==null?void 0:yt.id)??null},yt=>{if(!yt){Ct();return}Ct()}),Qs(()=>m.value,yt=>{yt==="clues"&&_t.value&&ue(_t.value),yt!=="clues"&&Vt()}),ia(()=>{var yt;U(),$t(),window.addEventListener("mousemove",q),window.addEventListener("resize",j),window.addEventListener("keydown",Jt),E(),(yt=s.value)==null||yt.addEventListener("click",nt)}),Al(()=>{var yt;M&&clearTimeout(M),y&&clearTimeout(y),window.removeEventListener("mousemove",q),window.removeEventListener("resize",j),window.removeEventListener("keydown",Jt),(yt=s.value)==null||yt.removeEventListener("click",nt),x(),_e()}),(yt,it)=>(Kt(),Qt("div",{class:Ce(["page-tech",b.value])},[I("canvas",{ref_key:"canvasEl",ref:s,class:"scene-canvas"},null,512),Z.value?(Kt(),Qt("div",{key:0,class:Ce(["corner-matte",{"corner-matte-intro":X.value}])},null,2)):an("",!0),X.value?(Kt(),Qt("div",{key:1,class:"intro-shroud",style:oi(Gt.value)},null,4)):an("",!0),d.value?(Kt(),Qt("div",mw)):an("",!0),it[40]||(it[40]=I("div",{class:"scanline-overlay"},null,-1)),it[41]||(it[41]=I("div",{class:"chromatic-edge"},null,-1)),I("div",{class:Ce(["weather-overlay",b.value])},null,2),it[42]||(it[42]=I("div",{class:"noise-overlay"},null,-1)),Pe(Oi,{name:"focus"},{default:pi(()=>[ut.value?(Kt(),Qt("div",_w,[I("div",gw,[it[6]||(it[6]=I("div",{class:"analysis-focus-kicker"},"镜头聚焦",-1)),I("strong",null,bt(ut.value.title),1),I("span",null,bt(ut.value.whyItMatters),1)]),I("button",{class:"analysis-focus-close",onClick:Vt}," 返回分析板 ")])):an("",!0)]),_:1}),Pe(Oi,{name:"cue"},{default:pi(()=>[St(Ut)&&!St(v)&&!St(B)&&!St(w)&&!St(N)&&!St(S)?(Kt(),Qt("div",{key:0,class:Ce(["scene-cue",`cue-${St(Ut).mode}`])},[it[8]||(it[8]=I("div",{class:"cue-weather"},null,-1)),I("div",vw,[it[7]||(it[7]=I("div",{class:"cue-kicker"},"FIELD SHIFT",-1)),I("h2",xw,bt(St(Ut).title),1),I("p",yw,bt(St(Ut).body),1)])],2)):an("",!0)]),_:1}),it[43]||(it[43]=I("div",{class:"hud-corner tl"},null,-1)),it[44]||(it[44]=I("div",{class:"hud-corner tr"},null,-1)),it[45]||(it[45]=I("div",{class:"hud-corner bl"},null,-1)),it[46]||(it[46]=I("div",{class:"hud-corner br"},null,-1)),I("div",Mw,[I("div",null,[it[9]||(it[9]=I("span",{class:"status-dot"},null,-1)),wr(bt(St(J)),1)]),I("div",null,bt(dt.value),1),it[10]||(it[10]=I("div",null,"FIELD UNIT: NIA-7",-1)),I("div",null,"PENDING WINDOWS: "+bt(St(K)),1),I("div",null,"NEXT WINDOW: "+bt(St(gt)),1),I("div",null,"VECTOR: "+bt(St(Xt)),1)]),I("div",Sw,[(Kt(!0),Qt(Le,null,Tn(St(P),(It,Mt)=>(Kt(),Qt("div",{key:Mt,class:"data-line",style:oi({animationDelay:`${Mt*.3}s`})},bt(It),5))),128))]),Nr(I("div",{class:"tech-content",ref_key:"contentEl",ref:r},[it[12]||(it[12]=sv('<div class="tech-label" data-v-3eede6d3>// ECHO DESK · REMOTE ADVISORY LINK</div><h1 class="tech-title" data-text="WERISS" data-v-3eede6d3>WERISS</h1><div class="tech-tagline" data-v-3eede6d3><span class="tag-line" data-v-3eede6d3></span> YOU CANNOT ENTER, BUT YOUR WORDS ARRIVE FIRST </div><div class="tech-description" data-v-3eede6d3> 回响链路已重连。<br data-v-3eede6d3> 一名进入山脉的实地人员正在向你发送失真信号。<br data-v-3eede6d3><span class="red-text" data-v-3eede6d3>你只有几秒</span>决定她下一步该怎么走。 </div>',4)),I("button",{class:"tech-btn",onClick:qt},[...it[11]||(it[11]=[I("span",{class:"btn-bracket"},"[",-1),wr(" LINK IN ",-1),I("span",{class:"btn-bracket"},"]",-1)])])],512),[[Lo,u.value]]),Nr(I("div",{class:"explore-hud",ref_key:"exploreHudEl",ref:o},[I("div",bw,[(Kt(!0),Qt(Le,null,Tn(St(Nt),It=>(Kt(),Qt("div",{key:It.label,class:"metric-chip"},[I("span",Ew,bt(It.label),1),I("span",Tw,bt(It.value),1)]))),128))]),I("div",ww,[it[13]||(it[13]=I("span",{class:"speed-label"},"CRUISE SPEED",-1)),Nr(I("input",{type:"range",min:"0.2",max:"3",step:"0.1","onUpdate:modelValue":it[0]||(it[0]=It=>f.value=It),class:"speed-slider"},null,512),[[zv,f.value,void 0,{number:!0}]]),I("span",Aw,bt(f.value.toFixed(1))+"x",1)]),I("button",{class:"exit-btn",onClick:ft},[...it[14]||(it[14]=[I("span",{class:"btn-bracket"},"[",-1),wr(" EXIT ",-1),I("span",{class:"btn-bracket"},"]",-1)])])],512),[[Lo,c.value]]),Pe(Oi,{name:"briefing"},{default:pi(()=>[St(N)?(Kt(),Qt("div",Cw,[I("div",Rw,"ROLE BRIEF / "+bt(St(N).label),1),I("h2",Pw,bt(St(N).title),1),I("p",Dw,bt(St(N).body),1),I("div",Iw,[(Kt(),Qt(Le,null,Tn(uC,It=>I("span",{key:It,class:Ce(["progress-dot",{active:It-1===St(k)}])},null,2)),64))]),I("button",{class:"choice-btn briefing-action",onClick:wt},[it[15]||(it[15]=I("span",{class:"choice-id"},"GO",-1)),I("span",Lw,bt(St(N).action),1)])])):an("",!0)]),_:1}),Pe(Oi,{name:"prep"},{default:pi(()=>{var It;return[St(B)&&!St(v)?(Kt(),Qt("div",Uw,[I("div",Nw,[I("span",Ow,"副本分析 / "+bt(St(B).id),1),I("span",Fw,"DIST "+bt(St(B).dist)+"m",1)]),I("div",Bw,bt(St(B).title),1),I("h2",kw,bt(St(B).displayTitle),1),I("div",zw,[I("button",{class:Ce(["analysis-stage-tab",{active:m.value==="brief"}]),onClick:it[1]||(it[1]=Mt=>m.value="brief")}," 1. 简报 ",2),I("button",{class:Ce(["analysis-stage-tab",{active:m.value==="clues"}]),onClick:at}," 2. 线索 ",2),I("button",{class:Ce(["analysis-stage-tab",{active:m.value==="theory"}]),onClick:ct}," 3. 判断 ",2)]),I("div",Hw,[(Kt(!0),Qt(Le,null,Tn(St(B).clues.length,Mt=>(Kt(),Qt("span",{key:Mt,class:Ce(["prep-dot",{active:Mt<=St(B).progress}])},null,2))),128))]),I("div",Vw,[it[16]||(it[16]=I("span",{class:"prep-instruction-label"},"这一关的目标",-1)),I("span",null,bt(St(B).objective),1)]),m.value==="brief"?(Kt(),Qt("div",Gw,[I("div",Ww,[(Kt(!0),Qt(Le,null,Tn(St(B).briefCards,Mt=>(Kt(),Qt("div",{key:Mt.label,class:"analysis-brief-card"},[I("span",Xw,bt(Mt.label),1),I("strong",qw,bt(Mt.text),1)]))),128))]),I("div",Yw,[it[17]||(it[17]=I("span",{class:"analysis-question-label"},"你这一步要先想清楚：",-1)),I("strong",null,bt(St(B).question),1)]),it[18]||(it[18]=I("div",{class:"analysis-brief-next"}," 下一步：去看线索。一次只看一条，不用同时记住所有东西。 ",-1)),I("div",{class:"analysis-stage-actions"},[I("button",{class:"prep-confirm ready",onClick:at}," 开始查看线索 ")])])):m.value==="clues"?(Kt(),Qt("div",$w,[I("div",Kw,[wr(" 已查看线索 "+bt(St(B).discoveredClueIds.length)+"/"+bt(St(B).clues.length)+" ",1),it[19]||(it[19]=I("span",{class:"analysis-status-divider"},"|",-1)),it[20]||(it[20]=wr(" 一次只看一条，更容易抓住重点 ",-1))]),I("div",jw,[(Kt(!0),Qt(Le,null,Tn(St(B).clues,(Mt,ce)=>(Kt(),Qt("button",{key:Mt.id,class:Ce(["analysis-clue-chip",{active:ce===p.value,read:St(B).discoveredClueIds.includes(Mt.id)}]),onClick:Ae=>Dt(ce)},[I("span",Jw,"0"+bt(ce+1),1),I("span",Qw,bt(Mt.title),1)],10,Zw))),128))]),_t.value?(Kt(),Qt("div",tA,[I("div",eA,[I("div",null,[I("div",nA,"线索 "+bt(p.value+1)+" / "+bt(St(B).clues.length),1),I("h3",iA,bt(_t.value.title),1)]),I("div",sA,bt(_t.value.tag),1)]),I("div",rA,[I("div",oA,[it[21]||(it[21]=I("span",{class:"analysis-clue-block-label"},"你先看到的是",-1)),I("strong",aA,bt(_t.value.summary),1)]),I("div",lA,[it[22]||(it[22]=I("span",{class:"analysis-clue-block-label"},"镜头提示",-1)),I("strong",cA,bt(((It=ut.value)==null?void 0:It.id)===_t.value.id?"画面已经切到这条线索对应的位置。":"切镜头去看它对应的现场位置。"),1)]),St(B).discoveredClueIds.includes(_t.value.id)?(Kt(),Qt("div",uA,[I("div",fA,[it[23]||(it[23]=I("span",{class:"analysis-clue-block-label"},"展开后你知道",-1)),I("span",hA,bt(_t.value.detail),1)]),I("div",dA,[it[24]||(it[24]=I("span",{class:"analysis-clue-block-label"},"这条线索真正说明",-1)),I("span",pA,bt(_t.value.whyItMatters),1)])])):an("",!0)])])):an("",!0),I("div",mA,[I("button",{class:"analysis-nav-btn",disabled:p.value===0,onClick:it[2]||(it[2]=Mt=>Pt(-1))}," 上一条 ",8,_A),I("button",{class:"analysis-nav-btn",disabled:p.value===St(B).clues.length-1,onClick:it[3]||(it[3]=Mt=>Pt(1))}," 下一条 ",8,gA)]),I("div",vA,[I("button",{class:"prep-confirm analysis-secondary",onClick:it[4]||(it[4]=Mt=>m.value="brief")}," 返回简报 "),I("button",{class:Ce(["prep-confirm",{ready:xt.value}]),disabled:!xt.value,onClick:ct},bt(xt.value?"我看得差不多了，去做判断":"至少先读两条线索"),11,xA)])])):(Kt(),Qt("div",yA,[I("div",MA,bt(St(B).windowReady?"你已经找到破局点，可以直接进入正式建议。":"从下面选一个你最相信的解释。"),1),I("div",SA,[it[26]||(it[26]=I("div",{class:"analysis-section-title"},"你认为最合理的解释",-1)),it[27]||(it[27]=I("div",{class:"analysis-section-copy"}," 读完至少两条线索后，选一个你最相信的判断。选错会让风险 +1，但不会立刻卡死。 ",-1)),I("div",bA,[(Kt(!0),Qt(Le,null,Tn(St(B).hypotheses,Mt=>(Kt(),Qt("button",{key:Mt.id,class:Ce(["prep-action analysis-card analysis-hypothesis",{selected:St(B).selectedHypothesisId===Mt.id,used:St(B).attemptedHypothesisIds.includes(Mt.id)&&St(B).selectedHypothesisId!==Mt.id}]),onClick:ce=>V(Mt.id)},[it[25]||(it[25]=I("span",{class:"analysis-card-tag"},"判断",-1)),I("span",TA,bt(Mt.label),1),I("span",wA,bt(Mt.detail),1)],10,EA))),128))])]),St(B).windowReady?(Kt(),Qt("div",AA,[it[28]||(it[28]=I("div",{class:"analysis-section-title"},"你找到的破局点",-1)),I("strong",CA,bt(St(B).breakthroughTitle),1),I("span",null,bt(St(B).breakthroughDetail),1)])):an("",!0),I("div",RA,[it[29]||(it[29]=I("span",{class:"prep-result-label"},"系统反馈",-1)),I("span",null,bt(St(B).lastResult),1)]),I("div",PA,[I("button",{class:"prep-confirm analysis-secondary",onClick:it[5]||(it[5]=Mt=>m.value="clues")}," 回去再看线索 "),I("button",{class:Ce(["prep-confirm",{ready:$.value}]),disabled:!$.value,onClick:rt},bt($.value?"接入正式建议窗口":"先完成破局判断"),11,DA)])]))])):an("",!0)]}),_:1}),Pe(Oi,{name:"buffer"},{default:pi(()=>[St(w)&&!St(v)?(Kt(),Qt("div",{key:0,class:Ce(["buffer-panel",`buffer-${St(w).mode}`])},[it[30]||(it[30]=I("div",{class:"buffer-grid"},null,-1)),I("div",IA,[I("span",LA,"WINDOW SYNC / "+bt(St(w).id),1),I("span",UA,"DIST "+bt(St(w).dist)+"m",1)]),I("h2",NA,bt(St(w).title),1),I("p",OA,bt(St(w).lead),1),I("div",FA,[I("div",{class:"buffer-progress-fill",style:oi({transform:`scaleX(${St(w).progress})`})},null,4)]),I("div",BA,[(Kt(!0),Qt(Le,null,Tn(St(w).steps,(It,Mt)=>(Kt(),Qt("div",{key:It,class:Ce(["buffer-step",{active:Mt===St(w).stepIndex,done:Mt<St(w).stepIndex}])},[I("span",kA,"0"+bt(Mt+1),1),I("span",null,bt(It),1)],2))),128))])],2)):an("",!0)]),_:1}),Pe(Oi,{name:"signal"},{default:pi(()=>{var It;return[St(v)?(Kt(),Qt("div",zA,[I("div",HA,[I("span",VA,"// WINDOW_"+bt(St(v).id),1),I("span",GA,"DIST: "+bt(St(v).dist)+"m",1)]),I("div",WA,[I("div",null,bt(St(v).title),1),I("div",null,bt(St(v).subtitle),1)]),I("div",{class:"signal-body",innerHTML:St(v).message},null,8,XA),St(v).stage==="choice"?(Kt(),Qt("div",qA,[it[31]||(it[31]=I("div",{class:"panel-label"},"TRANSMIT ADVICE",-1)),(Kt(!0),Qt(Le,null,Tn(St(v).choices,Mt=>(Kt(),Qt("button",{key:Mt.id,class:Ce(["choice-btn",{obscured:Mt.obscured}]),onClick:ce=>Zt(Mt)},[I("span",$A,bt(Mt.id),1),I("span",KA,bt(Mt.label),1)],10,YA))),128))])):(Kt(),Qt("div",jA,[it[32]||(it[32]=I("div",{class:"panel-label"},"ADVICE SENT",-1)),I("div",ZA,bt((It=St(v).selectedChoice)==null?void 0:It.advisory),1),it[33]||(it[33]=I("div",{class:"panel-label panel-label-reply"},"FIELD REPLY",-1)),I("div",{class:Ce(["incoming-copy",{pending:!St(v).reply}])},bt(St(v).reply||"NIA-7 is reading your signal..."),3)])),it[34]||(it[34]=I("div",{class:"signal-bar"},null,-1))])):an("",!0)]}),_:1}),Pe(Oi,{name:"ending"},{default:pi(()=>[St(S)?(Kt(),Qt("div",JA,[I("div",QA,[I("div",tC,"ENDING / "+bt(St(S).code),1),I("div",eC,bt(St(S).vector),1)]),I("h2",nC,bt(St(S).title),1),I("p",iC,bt(St(S).summary),1),I("div",sC,bt(St(S).body),1),I("div",rC,[I("div",oC,[it[35]||(it[35]=I("span",null,"TRUST",-1)),I("strong",null,bt(St(Et).trust),1)]),I("div",aC,[it[36]||(it[36]=I("span",null,"RISK",-1)),I("strong",null,bt(St(Et).risk),1)]),I("div",lC,[it[37]||(it[37]=I("span",null,"TRUTH",-1)),I("strong",null,bt(St(Et).truth),1)])]),I("div",{class:"ending-actions"},[I("button",{class:"choice-btn ending-action",onClick:pt},[...it[38]||(it[38]=[I("span",{class:"choice-id"},"R1",-1),I("span",{class:"choice-copy"},"重新接入链路，开始下一轮回响",-1)])]),I("button",{class:"choice-btn ending-action ending-action-muted",onClick:ft},[...it[39]||(it[39]=[I("span",{class:"choice-id"},"R2",-1),I("span",{class:"choice-copy"},"关闭链路，返回封面",-1)])])])])):an("",!0)]),_:1}),l.value&&St(ot)&&!St(v)&&!St(w)&&!St(S)&&!St(N)?(Kt(),Qt("div",cC," ANALYZE THE OPEN CASE OR DROP ROUTE MARKERS ")):an("",!0),I("canvas",{ref_key:"rippleEl",ref:a,class:"ripple-canvas"},null,512)],2))}}),hC=Hf(fC,[["__scopeId","data-v-3eede6d3"]]),dC=[{id:"monet",name:"CG 档案馆",icon:"ARC",code:"SEAL 01",description:"主视觉断面与命运展签",position:"9%"},{id:"tech",name:"回响链路",icon:"ECHO",code:"SEAL 02",description:"远程建议窗口与异响读数",position:"43%"}];function pC(){let n=null;return{switchToTech:()=>{const s=document.querySelector(".page-monet"),r=document.querySelector(".page-tech");n&&(clearTimeout(n),n=null),zt.killTweensOf([s,r,".tech-label",".tech-title",".tech-tagline",".tech-description",".tech-btn",".hud-corner",".hud-status"]),s&&zt.to(s,{opacity:0,duration:.5,ease:"power2.in"}),r&&(zt.set(r,{display:"block"}),zt.fromTo(r,{opacity:.72},{opacity:1,duration:.45,ease:"power2.out",overwrite:"auto"})),n=setTimeout(()=>{!r||r.offsetParent===null||(zt.fromTo(".tech-label",{x:-24,opacity:0},{x:0,opacity:1,duration:.45,ease:"power2.out",overwrite:"auto"}),zt.fromTo(".tech-title",{x:-40,opacity:0},{x:0,opacity:1,duration:.6,delay:.08,ease:"power3.out",overwrite:"auto"}),zt.fromTo(".tech-tagline",{x:-24,opacity:0},{x:0,opacity:1,duration:.45,delay:.14,ease:"power2.out",overwrite:"auto"}),zt.fromTo(".tech-description",{y:18,opacity:0},{y:0,opacity:1,duration:.45,delay:.2,ease:"power2.out",overwrite:"auto"}),zt.fromTo(".tech-btn",{y:10,opacity:0},{y:0,opacity:1,duration:.35,delay:.26,ease:"power2.out",overwrite:"auto"}),zt.fromTo(".hud-corner",{scale:.92,opacity:0},{scale:1,opacity:1,duration:.35,delay:.08,stagger:.06,ease:"power2.out",overwrite:"auto"}),zt.fromTo(".hud-status",{y:-12,opacity:0},{y:0,opacity:1,duration:.35,delay:.12,ease:"power2.out",overwrite:"auto"}),n=null)},40)},switchToMonet:()=>{const s=document.querySelector(".page-monet");n&&(clearTimeout(n),n=null),zt.killTweensOf([".tech-label",".tech-title",".tech-tagline",".tech-description",".tech-btn",".hud-corner",".hud-status"]),s&&zt.to(s,{opacity:1,duration:.8,ease:"power2.out"})},animateBubbles:s=>{document.querySelectorAll(".bubble-item").forEach(o=>{const a=o.classList.contains("active"),l=o.querySelector(".bubble");l&&zt.to(l,{scale:a?1.2:1,duration:.5,ease:"elastic.out(1, 0.5)"})})}}}function mC(){return{initHeaderAnimation:()=>{const e=document.querySelector(".painting-header");if(!e)return;const i=e.querySelector("h1"),s=e.querySelector("p"),r=e.querySelector(".start-btn");i&&zt.from(i,{y:-50,opacity:0,duration:1,delay:.5,ease:"power3.out"}),s&&zt.from(s,{y:-30,opacity:0,duration:1,delay:.8,ease:"power3.out"}),r&&(zt.from(r,{scale:0,opacity:0,duration:.8,delay:1.2,ease:"back.out(1.7)"}),zt.to(r,{y:-5,duration:1.5,ease:"power1.inOut",yoyo:!0,repeat:-1}))},initBubbleAnimation:()=>{setTimeout(()=>{document.querySelectorAll(".bubble-item").forEach((i,s)=>{zt.set(i,{x:-150,opacity:0,scale:0}),zt.to(i,{x:0,opacity:1,scale:1,duration:.8,delay:2+s*.2,ease:"elastic.out(1, 0.5)"})})},100)}}}const _C={__name:"App",setup(n){const t=he(null),e=he("tech"),i=he(dC),s=he(!1),{switchToTech:r,switchToMonet:o,animateBubbles:a}=pC(),{initHeaderAnimation:l,initBubbleAnimation:u}=mC(),c=h=>{h?zt.to(".bubble-nav",{x:-120,opacity:0,duration:.7,ease:"power2.in",onComplete:()=>{s.value=!0}}):(s.value=!1,zt.fromTo(".bubble-nav",{x:-120,opacity:0},{x:0,opacity:1,duration:.7,ease:"power2.out"}))},f=h=>{e.value!==h&&(e.value=h,a(h),h==="tech"?r():o())};return ia(()=>{l(),u()}),(h,d)=>(Kt(),Qt("div",{class:Ce(["gallery-container",{"tech-mode":e.value==="tech"}]),ref_key:"container",ref:t},[Nr(Pe(My,{pages:i.value,currentPage:e.value,onPageChange:f},null,8,["pages","currentPage"]),[[Lo,!s.value]]),Nr(Pe(tw,{active:e.value==="monet"},null,8,["active"]),[[Lo,e.value==="monet"]]),Nr(Pe(hC,{active:e.value==="tech",onExploreMode:c},null,8,["active"]),[[Lo,e.value==="tech"]])],2))}},gC=Gv(_C);gC.mount("#app");
