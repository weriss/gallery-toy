(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function du(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const lt={},os=[],Jn=()=>{},Md=()=>!1,Fa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),pu=n=>n.startsWith("onUpdate:"),Ct=Object.assign,mu=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},d_=Object.prototype.hasOwnProperty,Qe=(n,e)=>d_.call(n,e),Ie=Array.isArray,as=n=>yo(n)==="[object Map]",yd=n=>yo(n)==="[object Set]",xf=n=>yo(n)==="[object Date]",He=n=>typeof n=="function",bt=n=>typeof n=="string",ei=n=>typeof n=="symbol",rt=n=>n!==null&&typeof n=="object",Ed=n=>(rt(n)||He(n))&&He(n.then)&&He(n.catch),Td=Object.prototype.toString,yo=n=>Td.call(n),p_=n=>yo(n).slice(8,-1),bd=n=>yo(n)==="[object Object]",_u=n=>bt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ys=du(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Oa=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},m_=/-\w/g,qi=Oa(n=>n.replace(m_,e=>e.slice(1).toUpperCase())),__=/\B([A-Z])/g,Ir=Oa(n=>n.replace(__,"-$1").toLowerCase()),Ad=Oa(n=>n.charAt(0).toUpperCase()+n.slice(1)),Qa=Oa(n=>n?`on${Ad(n)}`:""),Vi=(n,e)=>!Object.is(n,e),oa=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},wd=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},gu=n=>{const e=parseFloat(n);return isNaN(e)?n:e},g_=n=>{const e=bt(n)?Number(n):NaN;return isNaN(e)?n:e};let Sf;const Ba=()=>Sf||(Sf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function vu(n){if(Ie(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=bt(i)?M_(i):vu(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(bt(n)||rt(n))return n}const v_=/;(?![^(]*\))/g,x_=/:([^]+)/,S_=/\/\*[^]*?\*\//g;function M_(n){const e={};return n.replace(S_,"").split(v_).forEach(t=>{if(t){const i=t.split(x_);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function io(n){let e="";if(bt(n))e=n;else if(Ie(n))for(let t=0;t<n.length;t++){const i=io(n[t]);i&&(e+=i+" ")}else if(rt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const y_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",E_=du(y_);function Rd(n){return!!n||n===""}function T_(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=xu(n[i],e[i]);return t}function xu(n,e){if(n===e)return!0;let t=xf(n),i=xf(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=ei(n),i=ei(e),t||i)return n===e;if(t=Ie(n),i=Ie(e),t||i)return t&&i?T_(n,e):!1;if(t=rt(n),i=rt(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!xu(n[o],e[o]))return!1}}return String(n)===String(e)}const Cd=n=>!!(n&&n.__v_isRef===!0),Zl=n=>bt(n)?n:n==null?"":Ie(n)||rt(n)&&(n.toString===Td||!He(n.toString))?Cd(n)?Zl(n.value):JSON.stringify(n,Pd,2):String(n),Pd=(n,e)=>Cd(e)?Pd(n,e.value):as(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[el(i,s)+" =>"]=r,t),{})}:yd(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>el(t))}:ei(e)?el(e):rt(e)&&!Ie(e)&&!bd(e)?String(e):e,el=(n,e="")=>{var t;return ei(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Jt;class b_{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Jt,!e&&Jt&&(this.index=(Jt.scopes||(Jt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Jt;try{return Jt=this,e()}finally{Jt=t}}}on(){++this._on===1&&(this.prevScope=Jt,Jt=this)}off(){this._on>0&&--this._on===0&&(Jt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function A_(){return Jt}let ct;const tl=new WeakSet;class Dd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Jt&&Jt.active&&Jt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,tl.has(this)&&(tl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Id(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Mf(this),Ud(this);const e=ct,t=Fn;ct=this,Fn=!0;try{return this.fn()}finally{Nd(this),ct=e,Fn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)yu(e);this.deps=this.depsTail=void 0,Mf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?tl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Jl(this)&&this.run()}get dirty(){return Jl(this)}}let Ld=0,$s,Ks;function Id(n,e=!1){if(n.flags|=8,e){n.next=Ks,Ks=n;return}n.next=$s,$s=n}function Su(){Ld++}function Mu(){if(--Ld>0)return;if(Ks){let e=Ks;for(Ks=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;$s;){let e=$s;for($s=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Ud(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Nd(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),yu(i),w_(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Jl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Fd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Fd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ro)||(n.globalVersion=ro,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Jl(n))))return;n.flags|=2;const e=n.dep,t=ct,i=Fn;ct=n,Fn=!0;try{Ud(n);const r=n.fn(n._value);(e.version===0||Vi(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{ct=t,Fn=i,Nd(n),n.flags&=-3}}function yu(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)yu(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function w_(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Fn=!0;const Od=[];function Si(){Od.push(Fn),Fn=!1}function Mi(){const n=Od.pop();Fn=n===void 0?!0:n}function Mf(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ct;ct=void 0;try{e()}finally{ct=t}}}let ro=0;class R_{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Eu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ct||!Fn||ct===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ct)t=this.activeLink=new R_(ct,this),ct.deps?(t.prevDep=ct.depsTail,ct.depsTail.nextDep=t,ct.depsTail=t):ct.deps=ct.depsTail=t,Bd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ct.depsTail,t.nextDep=void 0,ct.depsTail.nextDep=t,ct.depsTail=t,ct.deps===t&&(ct.deps=i)}return t}trigger(e){this.version++,ro++,this.notify(e)}notify(e){Su();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Mu()}}}function Bd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Bd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Ql=new WeakMap,br=Symbol(""),ec=Symbol(""),so=Symbol("");function Ft(n,e,t){if(Fn&&ct){let i=Ql.get(n);i||Ql.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Eu),r.map=i,r.key=t),r.track()}}function mi(n,e,t,i,r,s){const o=Ql.get(n);if(!o){ro++;return}const a=l=>{l&&l.trigger()};if(Su(),e==="clear")o.forEach(a);else{const l=Ie(n),c=l&&_u(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===so||!ei(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(so)),e){case"add":l?c&&a(o.get("length")):(a(o.get(br)),as(n)&&a(o.get(ec)));break;case"delete":l||(a(o.get(br)),as(n)&&a(o.get(ec)));break;case"set":as(n)&&a(o.get(br));break}}Mu()}function Or(n){const e=je(n);return e===n?e:(Ft(e,"iterate",so),On(n)?e:e.map(yi))}function Tu(n){return Ft(n=je(n),"iterate",so),n}function Ni(n,e){return Yi(n)?oo(ls(n)?yi(e):e):yi(e)}const C_={__proto__:null,[Symbol.iterator](){return nl(this,Symbol.iterator,n=>Ni(this,n))},concat(...n){return Or(this).concat(...n.map(e=>Ie(e)?Or(e):e))},entries(){return nl(this,"entries",n=>(n[1]=Ni(this,n[1]),n))},every(n,e){return ii(this,"every",n,e,void 0,arguments)},filter(n,e){return ii(this,"filter",n,e,t=>t.map(i=>Ni(this,i)),arguments)},find(n,e){return ii(this,"find",n,e,t=>Ni(this,t),arguments)},findIndex(n,e){return ii(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return ii(this,"findLast",n,e,t=>Ni(this,t),arguments)},findLastIndex(n,e){return ii(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return ii(this,"forEach",n,e,void 0,arguments)},includes(...n){return il(this,"includes",n)},indexOf(...n){return il(this,"indexOf",n)},join(n){return Or(this).join(n)},lastIndexOf(...n){return il(this,"lastIndexOf",n)},map(n,e){return ii(this,"map",n,e,void 0,arguments)},pop(){return Is(this,"pop")},push(...n){return Is(this,"push",n)},reduce(n,...e){return yf(this,"reduce",n,e)},reduceRight(n,...e){return yf(this,"reduceRight",n,e)},shift(){return Is(this,"shift")},some(n,e){return ii(this,"some",n,e,void 0,arguments)},splice(...n){return Is(this,"splice",n)},toReversed(){return Or(this).toReversed()},toSorted(n){return Or(this).toSorted(n)},toSpliced(...n){return Or(this).toSpliced(...n)},unshift(...n){return Is(this,"unshift",n)},values(){return nl(this,"values",n=>Ni(this,n))}};function nl(n,e,t){const i=Tu(n),r=i[e]();return i!==n&&!On(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const P_=Array.prototype;function ii(n,e,t,i,r,s){const o=Tu(n),a=o!==n&&!On(n),l=o[e];if(l!==P_[e]){const f=l.apply(n,s);return a?yi(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,Ni(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function yf(n,e,t,i){const r=Tu(n);let s=t;return r!==n&&(On(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,Ni(n,a),l,n)}),r[e](s,...i)}function il(n,e,t){const i=je(n);Ft(i,"iterate",so);const r=i[e](...t);return(r===-1||r===!1)&&Ru(t[0])?(t[0]=je(t[0]),i[e](...t)):r}function Is(n,e,t=[]){Si(),Su();const i=je(n)[e].apply(n,t);return Mu(),Mi(),i}const D_=du("__proto__,__v_isRef,__isVue"),zd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ei));function L_(n){ei(n)||(n=String(n));const e=je(this);return Ft(e,"has",n),e.hasOwnProperty(n)}class Hd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?k_:Wd:s?Gd:kd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ie(e);if(!r){let l;if(o&&(l=C_[t]))return l;if(t==="hasOwnProperty")return L_}const a=Reflect.get(e,t,Bt(e)?e:i);if((ei(t)?zd.has(t):D_(t))||(r||Ft(e,"get",t),s))return a;if(Bt(a)){const l=o&&_u(t)?a:a.value;return r&&rt(l)?nc(l):l}return rt(a)?r?nc(a):Au(a):a}}class Vd extends Hd{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=Ie(e)&&_u(t);if(!this._isShallow){const c=Yi(s);if(!On(i)&&!Yi(i)&&(s=je(s),i=je(i)),!o&&Bt(s)&&!Bt(i))return c||(s.value=i),!0}const a=o?Number(t)<e.length:Qe(e,t),l=Reflect.set(e,t,i,Bt(e)?e:r);return e===je(r)&&(a?Vi(i,s)&&mi(e,"set",t,i):mi(e,"add",t,i)),l}deleteProperty(e,t){const i=Qe(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&mi(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!ei(t)||!zd.has(t))&&Ft(e,"has",t),i}ownKeys(e){return Ft(e,"iterate",Ie(e)?"length":br),Reflect.ownKeys(e)}}class I_ extends Hd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const U_=new Vd,N_=new I_,F_=new Vd(!0);const tc=n=>n,Uo=n=>Reflect.getPrototypeOf(n);function O_(n,e,t){return function(...i){const r=this.__v_raw,s=je(r),o=as(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?tc:e?oo:yi;return!e&&Ft(s,"iterate",l?ec:br),Ct(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function No(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function B_(n,e){const t={get(r){const s=this.__v_raw,o=je(s),a=je(r);n||(Vi(r,a)&&Ft(o,"get",r),Ft(o,"get",a));const{has:l}=Uo(o),c=e?tc:n?oo:yi;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Ft(je(r),"iterate",br),r.size},has(r){const s=this.__v_raw,o=je(s),a=je(r);return n||(Vi(r,a)&&Ft(o,"has",r),Ft(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=je(a),c=e?tc:n?oo:yi;return!n&&Ft(l,"iterate",br),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Ct(t,n?{add:No("add"),set:No("set"),delete:No("delete"),clear:No("clear")}:{add(r){!e&&!On(r)&&!Yi(r)&&(r=je(r));const s=je(this);return Uo(s).has.call(s,r)||(s.add(r),mi(s,"add",r,r)),this},set(r,s){!e&&!On(s)&&!Yi(s)&&(s=je(s));const o=je(this),{has:a,get:l}=Uo(o);let c=a.call(o,r);c||(r=je(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Vi(s,u)&&mi(o,"set",r,s):mi(o,"add",r,s),this},delete(r){const s=je(this),{has:o,get:a}=Uo(s);let l=o.call(s,r);l||(r=je(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&mi(s,"delete",r,void 0),c},clear(){const r=je(this),s=r.size!==0,o=r.clear();return s&&mi(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=O_(r,n,e)}),t}function bu(n,e){const t=B_(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Qe(t,r)&&r in i?t:i,r,s)}const z_={get:bu(!1,!1)},H_={get:bu(!1,!0)},V_={get:bu(!0,!1)};const kd=new WeakMap,Gd=new WeakMap,Wd=new WeakMap,k_=new WeakMap;function G_(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function W_(n){return n.__v_skip||!Object.isExtensible(n)?0:G_(p_(n))}function Au(n){return Yi(n)?n:wu(n,!1,U_,z_,kd)}function X_(n){return wu(n,!1,F_,H_,Gd)}function nc(n){return wu(n,!0,N_,V_,Wd)}function wu(n,e,t,i,r){if(!rt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=W_(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function ls(n){return Yi(n)?ls(n.__v_raw):!!(n&&n.__v_isReactive)}function Yi(n){return!!(n&&n.__v_isReadonly)}function On(n){return!!(n&&n.__v_isShallow)}function Ru(n){return n?!!n.__v_raw:!1}function je(n){const e=n&&n.__v_raw;return e?je(e):n}function q_(n){return!Qe(n,"__v_skip")&&Object.isExtensible(n)&&wd(n,"__v_skip",!0),n}const yi=n=>rt(n)?Au(n):n,oo=n=>rt(n)?nc(n):n;function Bt(n){return n?n.__v_isRef===!0:!1}function Br(n){return Y_(n,!1)}function Y_(n,e){return Bt(n)?n:new $_(n,e)}class $_{constructor(e,t){this.dep=new Eu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:je(e),this._value=t?e:yi(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||On(e)||Yi(e);e=i?e:je(e),Vi(e,t)&&(this._rawValue=e,this._value=i?e:yi(e),this.dep.trigger())}}function K_(n){return Bt(n)?n.value:n}const j_={get:(n,e,t)=>e==="__v_raw"?n:K_(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Bt(r)&&!Bt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Xd(n){return ls(n)?n:new Proxy(n,j_)}class Z_{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Eu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ro-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ct!==this)return Id(this,!0),!0}get value(){const e=this.dep.track();return Fd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function J_(n,e,t=!1){let i,r;return He(n)?i=n:(i=n.get,r=n.set),new Z_(i,r,t)}const Fo={},xa=new WeakMap;let mr;function Q_(n,e=!1,t=mr){if(t){let i=xa.get(t);i||xa.set(t,i=[]),i.push(n)}}function eg(n,e,t=lt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=S=>r?S:On(S)||r===!1||r===0?_i(S,1):_i(S);let u,f,h,d,g=!1,_=!1;if(Bt(n)?(f=()=>n.value,g=On(n)):ls(n)?(f=()=>c(n),g=!0):Ie(n)?(_=!0,g=n.some(S=>ls(S)||On(S)),f=()=>n.map(S=>{if(Bt(S))return S.value;if(ls(S))return c(S);if(He(S))return l?l(S,2):S()})):He(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){Si();try{h()}finally{Mi()}}const S=mr;mr=u;try{return l?l(n,3,[d]):n(d)}finally{mr=S}}:f=Jn,e&&r){const S=f,w=r===!0?1/0:r;f=()=>_i(S(),w)}const m=A_(),p=()=>{u.stop(),m&&m.active&&mu(m.effects,u)};if(s&&e){const S=e;e=(...w)=>{S(...w),p()}}let T=_?new Array(n.length).fill(Fo):Fo;const E=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(e){const w=u.run();if(r||g||(_?w.some((C,R)=>Vi(C,T[R])):Vi(w,T))){h&&h();const C=mr;mr=u;try{const R=[w,T===Fo?void 0:_&&T[0]===Fo?[]:T,d];T=w,l?l(e,3,R):e(...R)}finally{mr=C}}}else u.run()};return a&&a(E),u=new Dd(f),u.scheduler=o?()=>o(E,!1):E,d=S=>Q_(S,!1,u),h=u.onStop=()=>{const S=xa.get(u);if(S){if(l)l(S,4);else for(const w of S)w();xa.delete(u)}},e?i?E(!0):T=u.run():o?o(E.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function _i(n,e=1/0,t){if(e<=0||!rt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Bt(n))_i(n.value,e,t);else if(Ie(n))for(let i=0;i<n.length;i++)_i(n[i],e,t);else if(yd(n)||as(n))n.forEach(i=>{_i(i,e,t)});else if(bd(n)){for(const i in n)_i(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&_i(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Eo(n,e,t,i){try{return i?n(...i):n()}catch(r){za(r,e,t)}}function zn(n,e,t,i){if(He(n)){const r=Eo(n,e,t,i);return r&&Ed(r)&&r.catch(s=>{za(s,e,t)}),r}if(Ie(n)){const r=[];for(let s=0;s<n.length;s++)r.push(zn(n[s],e,t,i));return r}}function za(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||lt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){Si(),Eo(s,null,10,[n,l,c]),Mi();return}}tg(n,t,r,i,o)}function tg(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Wt=[];let Vn=-1;const cs=[];let Fi=null,es=0;const qd=Promise.resolve();let Sa=null;function ng(n){const e=Sa||qd;return n?e.then(this?n.bind(this):n):e}function ig(n){let e=Vn+1,t=Wt.length;for(;e<t;){const i=e+t>>>1,r=Wt[i],s=ao(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Cu(n){if(!(n.flags&1)){const e=ao(n),t=Wt[Wt.length-1];!t||!(n.flags&2)&&e>=ao(t)?Wt.push(n):Wt.splice(ig(e),0,n),n.flags|=1,Yd()}}function Yd(){Sa||(Sa=qd.then(Kd))}function rg(n){Ie(n)?cs.push(...n):Fi&&n.id===-1?Fi.splice(es+1,0,n):n.flags&1||(cs.push(n),n.flags|=1),Yd()}function Ef(n,e,t=Vn+1){for(;t<Wt.length;t++){const i=Wt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Wt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function $d(n){if(cs.length){const e=[...new Set(cs)].sort((t,i)=>ao(t)-ao(i));if(cs.length=0,Fi){Fi.push(...e);return}for(Fi=e,es=0;es<Fi.length;es++){const t=Fi[es];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Fi=null,es=0}}const ao=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Kd(n){try{for(Vn=0;Vn<Wt.length;Vn++){const e=Wt[Vn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Eo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Vn<Wt.length;Vn++){const e=Wt[Vn];e&&(e.flags&=-2)}Vn=-1,Wt.length=0,$d(),Sa=null,(Wt.length||cs.length)&&Kd()}}let An=null,jd=null;function Ma(n){const e=An;return An=n,jd=n&&n.type.__scopeId||null,e}function Zd(n,e=An,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Ta(-1);const s=Ma(e);let o;try{o=n(...r)}finally{Ma(s),i._d&&Ta(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function sg(n,e){if(An===null)return n;const t=Wa(An),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=lt]=e[r];s&&(He(s)&&(s={mounted:s,updated:s}),s.deep&&_i(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function ir(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Si(),zn(l,t,8,[n.el,a,n,e]),Mi())}}function og(n,e){if(qt){let t=qt.provides;const i=qt.parent&&qt.parent.provides;i===t&&(t=qt.provides=Object.create(i)),t[n]=e}}function aa(n,e,t=!1){const i=Rp();if(i||us){let r=us?us._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&He(e)?e.call(i&&i.proxy):e}}const ag=Symbol.for("v-scx"),lg=()=>aa(ag);function rl(n,e,t){return Jd(n,e,t)}function Jd(n,e,t=lt){const{immediate:i,deep:r,flush:s,once:o}=t,a=Ct({},t),l=e&&i||!e&&s!=="post";let c;if(uo){if(s==="sync"){const d=lg();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Jn,d.resume=Jn,d.pause=Jn,d}}const u=qt;a.call=(d,g,_)=>zn(d,u,g,_);let f=!1;s==="post"?a.scheduler=d=>{Zt(d,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(d,g)=>{g?d():Cu(d)}),a.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=eg(n,e,a);return uo&&(c?c.push(h):l&&h()),h}function cg(n,e,t){const i=this.proxy,r=bt(n)?n.includes(".")?Qd(i,n):()=>i[n]:n.bind(i,i);let s;He(e)?s=e:(s=e.handler,t=e);const o=To(this),a=Jd(r,s.bind(i),t);return o(),a}function Qd(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const ug=Symbol("_vte"),ep=n=>n.__isTeleport,kn=Symbol("_leaveCb"),Us=Symbol("_enterCb");function fg(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Pu(()=>{n.isMounted=!0}),lp(()=>{n.isUnmounting=!0}),n}const Mn=[Function,Array],tp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Mn,onEnter:Mn,onAfterEnter:Mn,onEnterCancelled:Mn,onBeforeLeave:Mn,onLeave:Mn,onAfterLeave:Mn,onLeaveCancelled:Mn,onBeforeAppear:Mn,onAppear:Mn,onAfterAppear:Mn,onAppearCancelled:Mn},np=n=>{const e=n.subTree;return e.component?np(e.component):e},hg={name:"BaseTransition",props:tp,setup(n,{slots:e}){const t=Rp(),i=fg();return()=>{const r=e.default&&sp(e.default(),!0);if(!r||!r.length)return;const s=ip(r),o=je(n),{mode:a}=o;if(i.isLeaving)return sl(s);const l=Tf(s);if(!l)return sl(s);let c=ic(l,o,i,t,f=>c=f);l.type!==Xt&&lo(l,c);let u=t.subTree&&Tf(t.subTree);if(u&&u.type!==Xt&&!xr(u,l)&&np(t).type!==Xt){let f=ic(u,o,i,t);if(lo(u,f),a==="out-in"&&l.type!==Xt)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,u=void 0},sl(s);a==="in-out"&&l.type!==Xt?f.delayLeave=(h,d,g)=>{const _=rp(i,u);_[String(u.key)]=u,h[kn]=()=>{d(),h[kn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function ip(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Xt){e=t;break}}return e}const dg=hg;function rp(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function ic(n,e,t,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:d,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:m,onAppear:p,onAfterAppear:T,onAppearCancelled:E}=e,S=String(n.key),w=rp(t,n),C=(v,M)=>{v&&zn(v,i,9,M)},R=(v,M)=>{const L=M[1];C(v,M),Ie(v)?v.every(N=>N.length<=1)&&L():v.length<=1&&L()},D={mode:o,persisted:a,beforeEnter(v){let M=l;if(!t.isMounted)if(s)M=m||l;else return;v[kn]&&v[kn](!0);const L=w[S];L&&xr(n,L)&&L.el[kn]&&L.el[kn](),C(M,[v])},enter(v){if(w[S]===n)return;let M=c,L=u,N=f;if(!t.isMounted)if(s)M=p||c,L=T||u,N=E||f;else return;let F=!1;v[Us]=Q=>{F||(F=!0,Q?C(N,[v]):C(L,[v]),D.delayedLeave&&D.delayedLeave(),v[Us]=void 0)};const K=v[Us].bind(null,!1);M?R(M,[v,K]):K()},leave(v,M){const L=String(n.key);if(v[Us]&&v[Us](!0),t.isUnmounting)return M();C(h,[v]);let N=!1;v[kn]=K=>{N||(N=!0,M(),K?C(_,[v]):C(g,[v]),v[kn]=void 0,w[L]===n&&delete w[L])};const F=v[kn].bind(null,!1);w[L]=n,d?R(d,[v,F]):F()},clone(v){const M=ic(v,e,t,i,r);return r&&r(M),M}};return D}function sl(n){if(Ha(n))return n=$i(n),n.children=null,n}function Tf(n){if(!Ha(n))return ep(n.type)&&n.children?ip(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&He(t.default))return t.default()}}function lo(n,e){n.shapeFlag&6&&n.component?(n.transition=e,lo(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function sp(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===Wn?(o.patchFlag&128&&r++,i=i.concat(sp(o.children,e,a))):(e||o.type!==Xt)&&i.push(a!=null?$i(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function op(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function bf(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const ya=new WeakMap;function js(n,e,t,i,r=!1){if(Ie(n)){n.forEach((_,m)=>js(_,e&&(Ie(e)?e[m]:e),t,i,r));return}if(Zs(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&js(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Wa(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===lt?a.refs={}:a.refs,f=a.setupState,h=je(f),d=f===lt?Md:_=>bf(u,_)?!1:Qe(h,_),g=(_,m)=>!(m&&bf(u,m));if(c!=null&&c!==l){if(Af(e),bt(c))u[c]=null,d(c)&&(f[c]=null);else if(Bt(c)){const _=e;g(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(He(l))Eo(l,a,12,[o,u]);else{const _=bt(l),m=Bt(l);if(_||m){const p=()=>{if(n.f){const T=_?d(l)?f[l]:u[l]:g()||!n.k?l.value:u[n.k];if(r)Ie(T)&&mu(T,s);else if(Ie(T))T.includes(s)||T.push(s);else if(_)u[l]=[s],d(l)&&(f[l]=u[l]);else{const E=[s];g(l,n.k)&&(l.value=E),n.k&&(u[n.k]=E)}}else _?(u[l]=o,d(l)&&(f[l]=o)):m&&(g(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const T=()=>{p(),ya.delete(n)};T.id=-1,ya.set(n,T),Zt(T,t)}else Af(n),p()}}}function Af(n){const e=ya.get(n);e&&(e.flags|=8,ya.delete(n))}Ba().requestIdleCallback;Ba().cancelIdleCallback;const Zs=n=>!!n.type.__asyncLoader,Ha=n=>n.type.__isKeepAlive;function pg(n,e){ap(n,"a",e)}function mg(n,e){ap(n,"da",e)}function ap(n,e,t=qt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Va(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Ha(r.parent.vnode)&&_g(i,e,t,r),r=r.parent}}function _g(n,e,t,i){const r=Va(e,n,i,!0);Du(()=>{mu(i[e],r)},t)}function Va(n,e,t=qt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{Si();const a=To(t),l=zn(e,t,n,o);return a(),Mi(),l});return i?r.unshift(s):r.push(s),s}}const wi=n=>(e,t=qt)=>{(!uo||n==="sp")&&Va(n,(...i)=>e(...i),t)},gg=wi("bm"),Pu=wi("m"),vg=wi("bu"),xg=wi("u"),lp=wi("bum"),Du=wi("um"),Sg=wi("sp"),Mg=wi("rtg"),yg=wi("rtc");function Eg(n,e=qt){Va("ec",n,e)}const Tg=Symbol.for("v-ndc"),rc=n=>n?Cp(n)?Wa(n):rc(n.parent):null,Js=Ct(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>rc(n.parent),$root:n=>rc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>up(n),$forceUpdate:n=>n.f||(n.f=()=>{Cu(n.update)}),$nextTick:n=>n.n||(n.n=ng.bind(n.proxy)),$watch:n=>cg.bind(n)}),ol=(n,e)=>n!==lt&&!n.__isScriptSetup&&Qe(n,e),bg={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(ol(i,e))return o[e]=1,i[e];if(r!==lt&&Qe(r,e))return o[e]=2,r[e];if(Qe(s,e))return o[e]=3,s[e];if(t!==lt&&Qe(t,e))return o[e]=4,t[e];sc&&(o[e]=0)}}const c=Js[e];let u,f;if(c)return e==="$attrs"&&Ft(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==lt&&Qe(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,Qe(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return ol(r,e)?(r[e]=t,!0):i!==lt&&Qe(i,e)?(i[e]=t,!0):Qe(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==lt&&a[0]!=="$"&&Qe(n,a)||ol(e,a)||Qe(s,a)||Qe(i,a)||Qe(Js,a)||Qe(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Qe(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function wf(n){return Ie(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let sc=!0;function Ag(n){const e=up(n),t=n.proxy,i=n.ctx;sc=!1,e.beforeCreate&&Rf(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:T,destroyed:E,unmounted:S,render:w,renderTracked:C,renderTriggered:R,errorCaptured:D,serverPrefetch:v,expose:M,inheritAttrs:L,components:N,directives:F,filters:K}=e;if(c&&wg(c,i,null),o)for(const Y in o){const H=o[Y];He(H)&&(i[Y]=H.bind(t))}if(r){const Y=r.call(t,t);rt(Y)&&(n.data=Au(Y))}if(sc=!0,s)for(const Y in s){const H=s[Y],ue=He(H)?H.bind(t,t):He(H.get)?H.get.bind(t,t):Jn,me=!He(H)&&He(H.set)?H.set.bind(t):Jn,ye=h0({get:ue,set:me});Object.defineProperty(i,Y,{enumerable:!0,configurable:!0,get:()=>ye.value,set:Ae=>ye.value=Ae})}if(a)for(const Y in a)cp(a[Y],i,t,Y);if(l){const Y=He(l)?l.call(t):l;Reflect.ownKeys(Y).forEach(H=>{og(H,Y[H])})}u&&Rf(u,n,"c");function k(Y,H){Ie(H)?H.forEach(ue=>Y(ue.bind(t))):H&&Y(H.bind(t))}if(k(gg,f),k(Pu,h),k(vg,d),k(xg,g),k(pg,_),k(mg,m),k(Eg,D),k(yg,C),k(Mg,R),k(lp,T),k(Du,S),k(Sg,v),Ie(M))if(M.length){const Y=n.exposed||(n.exposed={});M.forEach(H=>{Object.defineProperty(Y,H,{get:()=>t[H],set:ue=>t[H]=ue,enumerable:!0})})}else n.exposed||(n.exposed={});w&&n.render===Jn&&(n.render=w),L!=null&&(n.inheritAttrs=L),N&&(n.components=N),F&&(n.directives=F),v&&op(n)}function wg(n,e,t=Jn){Ie(n)&&(n=oc(n));for(const i in n){const r=n[i];let s;rt(r)?"default"in r?s=aa(r.from||i,r.default,!0):s=aa(r.from||i):s=aa(r),Bt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Rf(n,e,t){zn(Ie(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function cp(n,e,t,i){let r=i.includes(".")?Qd(t,i):()=>t[i];if(bt(n)){const s=e[n];He(s)&&rl(r,s)}else if(He(n))rl(r,n.bind(t));else if(rt(n))if(Ie(n))n.forEach(s=>cp(s,e,t,i));else{const s=He(n.handler)?n.handler.bind(t):e[n.handler];He(s)&&rl(r,s,n)}}function up(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Ea(l,c,o,!0)),Ea(l,e,o)),rt(e)&&s.set(e,l),l}function Ea(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Ea(n,s,t,!0),r&&r.forEach(o=>Ea(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Rg[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Rg={data:Cf,props:Pf,emits:Pf,methods:ks,computed:ks,beforeCreate:Vt,created:Vt,beforeMount:Vt,mounted:Vt,beforeUpdate:Vt,updated:Vt,beforeDestroy:Vt,beforeUnmount:Vt,destroyed:Vt,unmounted:Vt,activated:Vt,deactivated:Vt,errorCaptured:Vt,serverPrefetch:Vt,components:ks,directives:ks,watch:Pg,provide:Cf,inject:Cg};function Cf(n,e){return e?n?function(){return Ct(He(n)?n.call(this,this):n,He(e)?e.call(this,this):e)}:e:n}function Cg(n,e){return ks(oc(n),oc(e))}function oc(n){if(Ie(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Vt(n,e){return n?[...new Set([].concat(n,e))]:e}function ks(n,e){return n?Ct(Object.create(null),n,e):e}function Pf(n,e){return n?Ie(n)&&Ie(e)?[...new Set([...n,...e])]:Ct(Object.create(null),wf(n),wf(e??{})):e}function Pg(n,e){if(!n)return e;if(!e)return n;const t=Ct(Object.create(null),n);for(const i in e)t[i]=Vt(n[i],e[i]);return t}function fp(){return{app:null,config:{isNativeTag:Md,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Dg=0;function Lg(n,e){return function(i,r=null){He(i)||(i=Ct({},i)),r!=null&&!rt(r)&&(r=null);const s=fp(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Dg++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:p0,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&He(u.install)?(o.add(u),u.install(c,...f)):He(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||Qt(i,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,Wa(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(zn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=us;us=c;try{return u()}finally{us=f}}};return c}}let us=null;const Ig=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${qi(e)}Modifiers`]||n[`${Ir(e)}Modifiers`];function Ug(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||lt;let r=t;const s=e.startsWith("update:"),o=s&&Ig(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>bt(u)?u.trim():u)),o.number&&(r=t.map(gu)));let a,l=i[a=Qa(e)]||i[a=Qa(qi(e))];!l&&s&&(l=i[a=Qa(Ir(e))]),l&&zn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,zn(c,n,6,r)}}const Ng=new WeakMap;function hp(n,e,t=!1){const i=t?Ng:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!He(n)){const l=c=>{const u=hp(c,e,!0);u&&(a=!0,Ct(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(rt(n)&&i.set(n,null),null):(Ie(s)?s.forEach(l=>o[l]=null):Ct(o,s),rt(n)&&i.set(n,o),o)}function ka(n,e){return!n||!Fa(e)?!1:(e=e.slice(2).replace(/Once$/,""),Qe(n,e[0].toLowerCase()+e.slice(1))||Qe(n,Ir(e))||Qe(n,e))}function Df(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:g,inheritAttrs:_}=n,m=Ma(n);let p,T;try{if(t.shapeFlag&4){const S=r||i,w=S;p=Xn(c.call(w,S,u,f,d,h,g)),T=a}else{const S=e;p=Xn(S.length>1?S(f,{attrs:a,slots:o,emit:l}):S(f,null)),T=e.props?a:Fg(a)}}catch(S){Qs.length=0,za(S,n,1),p=Qt(Xt)}let E=p;if(T&&_!==!1){const S=Object.keys(T),{shapeFlag:w}=E;S.length&&w&7&&(s&&S.some(pu)&&(T=Og(T,s)),E=$i(E,T,!1,!0))}return t.dirs&&(E=$i(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(t.dirs):t.dirs),t.transition&&lo(E,t.transition),p=E,Ma(m),p}const Fg=n=>{let e;for(const t in n)(t==="class"||t==="style"||Fa(t))&&((e||(e={}))[t]=n[t]);return e},Og=(n,e)=>{const t={};for(const i in n)(!pu(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Bg(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Lf(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(dp(o,i,h)&&!ka(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Lf(i,o,c):!0:!!o;return!1}function Lf(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(dp(e,n,s)&&!ka(t,s))return!0}return!1}function dp(n,e,t){const i=n[t],r=e[t];return t==="style"&&rt(i)&&rt(r)?!xu(i,r):i!==r}function zg({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const pp={},mp=()=>Object.create(pp),_p=n=>Object.getPrototypeOf(n)===pp;function Hg(n,e,t,i=!1){const r={},s=mp();n.propsDefaults=Object.create(null),gp(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:X_(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Vg(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=je(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(ka(n.emitsOptions,h))continue;const d=e[h];if(l)if(Qe(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const g=qi(h);r[g]=ac(l,a,g,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{gp(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Qe(e,f)&&((u=Ir(f))===f||!Qe(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=ac(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Qe(e,f))&&(delete s[f],c=!0)}c&&mi(n.attrs,"set","")}function gp(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ys(l))continue;const c=e[l];let u;r&&Qe(r,u=qi(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:ka(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=je(t),c=a||lt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=ac(r,l,f,c[f],n,!Qe(c,f))}}return o}function ac(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Qe(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&He(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=To(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Ir(t))&&(i=!0))}return i}const kg=new WeakMap;function vp(n,e,t=!1){const i=t?kg:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!He(n)){const u=f=>{l=!0;const[h,d]=vp(f,e,!0);Ct(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return rt(n)&&i.set(n,os),os;if(Ie(s))for(let u=0;u<s.length;u++){const f=qi(s[u]);If(f)&&(o[f]=lt)}else if(s)for(const u in s){const f=qi(u);if(If(f)){const h=s[u],d=o[f]=Ie(h)||He(h)?{type:h}:Ct({},h),g=d.type;let _=!1,m=!0;if(Ie(g))for(let p=0;p<g.length;++p){const T=g[p],E=He(T)&&T.name;if(E==="Boolean"){_=!0;break}else E==="String"&&(m=!1)}else _=He(g)&&g.name==="Boolean";d[0]=_,d[1]=m,(_||Qe(d,"default"))&&a.push(f)}}const c=[o,a];return rt(n)&&i.set(n,c),c}function If(n){return n[0]!=="$"&&!Ys(n)}const Lu=n=>n==="_"||n==="_ctx"||n==="$stable",Iu=n=>Ie(n)?n.map(Xn):[Xn(n)],Gg=(n,e,t)=>{if(e._n)return e;const i=Zd((...r)=>Iu(e(...r)),t);return i._c=!1,i},xp=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Lu(r))continue;const s=n[r];if(He(s))e[r]=Gg(r,s,i);else if(s!=null){const o=Iu(s);e[r]=()=>o}}},Sp=(n,e)=>{const t=Iu(e);n.slots.default=()=>t},Mp=(n,e,t)=>{for(const i in e)(t||!Lu(i))&&(n[i]=e[i])},Wg=(n,e,t)=>{const i=n.slots=mp();if(n.vnode.shapeFlag&32){const r=e._;r?(Mp(i,e,t),t&&wd(i,"_",r,!0)):xp(e,i)}else e&&Sp(n,e)},Xg=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=lt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Mp(r,e,t):(s=!e.$stable,xp(e,r)),o=e}else e&&(Sp(n,e),o={default:1});if(s)for(const a in r)!Lu(a)&&o[a]==null&&delete r[a]},Zt=jg;function qg(n){return Yg(n)}function Yg(n,e){const t=Ba();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=Jn,insertStaticContent:g}=n,_=(P,U,A,ie=null,j=null,J=null,ee=void 0,se=null,Z=!!U.dynamicChildren)=>{if(P===U)return;P&&!xr(P,U)&&(ie=pe(P),Ae(P,j,J,!0),P=null),U.patchFlag===-2&&(Z=!1,U.dynamicChildren=null);const{type:y,ref:x,shapeFlag:I}=U;switch(y){case Ga:m(P,U,A,ie);break;case Xt:p(P,U,A,ie);break;case ll:P==null&&T(U,A,ie,ee);break;case Wn:N(P,U,A,ie,j,J,ee,se,Z);break;default:I&1?w(P,U,A,ie,j,J,ee,se,Z):I&6?F(P,U,A,ie,j,J,ee,se,Z):(I&64||I&128)&&y.process(P,U,A,ie,j,J,ee,se,Z,Be)}x!=null&&j?js(x,P&&P.ref,J,U||P,!U):x==null&&P&&P.ref!=null&&js(P.ref,null,J,P,!0)},m=(P,U,A,ie)=>{if(P==null)i(U.el=a(U.children),A,ie);else{const j=U.el=P.el;U.children!==P.children&&c(j,U.children)}},p=(P,U,A,ie)=>{P==null?i(U.el=l(U.children||""),A,ie):U.el=P.el},T=(P,U,A,ie)=>{[P.el,P.anchor]=g(P.children,U,A,ie,P.el,P.anchor)},E=({el:P,anchor:U},A,ie)=>{let j;for(;P&&P!==U;)j=h(P),i(P,A,ie),P=j;i(U,A,ie)},S=({el:P,anchor:U})=>{let A;for(;P&&P!==U;)A=h(P),r(P),P=A;r(U)},w=(P,U,A,ie,j,J,ee,se,Z)=>{if(U.type==="svg"?ee="svg":U.type==="math"&&(ee="mathml"),P==null)C(U,A,ie,j,J,ee,se,Z);else{const y=P.el&&P.el._isVueCE?P.el:null;try{y&&y._beginPatch(),v(P,U,j,J,ee,se,Z)}finally{y&&y._endPatch()}}},C=(P,U,A,ie,j,J,ee,se)=>{let Z,y;const{props:x,shapeFlag:I,transition:V,dirs:W}=P;if(Z=P.el=o(P.type,J,x&&x.is,x),I&8?u(Z,P.children):I&16&&D(P.children,Z,null,ie,j,al(P,J),ee,se),W&&ir(P,null,ie,"created"),R(Z,P,P.scopeId,ee,ie),x){for(const fe in x)fe!=="value"&&!Ys(fe)&&s(Z,fe,null,x[fe],J,ie);"value"in x&&s(Z,"value",null,x.value,J),(y=x.onVnodeBeforeMount)&&Hn(y,ie,P)}W&&ir(P,null,ie,"beforeMount");const G=$g(j,V);G&&V.beforeEnter(Z),i(Z,U,A),((y=x&&x.onVnodeMounted)||G||W)&&Zt(()=>{y&&Hn(y,ie,P),G&&V.enter(Z),W&&ir(P,null,ie,"mounted")},j)},R=(P,U,A,ie,j)=>{if(A&&d(P,A),ie)for(let J=0;J<ie.length;J++)d(P,ie[J]);if(j){let J=j.subTree;if(U===J||bp(J.type)&&(J.ssContent===U||J.ssFallback===U)){const ee=j.vnode;R(P,ee,ee.scopeId,ee.slotScopeIds,j.parent)}}},D=(P,U,A,ie,j,J,ee,se,Z=0)=>{for(let y=Z;y<P.length;y++){const x=P[y]=se?di(P[y]):Xn(P[y]);_(null,x,U,A,ie,j,J,ee,se)}},v=(P,U,A,ie,j,J,ee)=>{const se=U.el=P.el;let{patchFlag:Z,dynamicChildren:y,dirs:x}=U;Z|=P.patchFlag&16;const I=P.props||lt,V=U.props||lt;let W;if(A&&rr(A,!1),(W=V.onVnodeBeforeUpdate)&&Hn(W,A,U,P),x&&ir(U,P,A,"beforeUpdate"),A&&rr(A,!0),(I.innerHTML&&V.innerHTML==null||I.textContent&&V.textContent==null)&&u(se,""),y?M(P.dynamicChildren,y,se,A,ie,al(U,j),J):ee||H(P,U,se,null,A,ie,al(U,j),J,!1),Z>0){if(Z&16)L(se,I,V,A,j);else if(Z&2&&I.class!==V.class&&s(se,"class",null,V.class,j),Z&4&&s(se,"style",I.style,V.style,j),Z&8){const G=U.dynamicProps;for(let fe=0;fe<G.length;fe++){const oe=G[fe],he=I[oe],De=V[oe];(De!==he||oe==="value")&&s(se,oe,he,De,j,A)}}Z&1&&P.children!==U.children&&u(se,U.children)}else!ee&&y==null&&L(se,I,V,A,j);((W=V.onVnodeUpdated)||x)&&Zt(()=>{W&&Hn(W,A,U,P),x&&ir(U,P,A,"updated")},ie)},M=(P,U,A,ie,j,J,ee)=>{for(let se=0;se<U.length;se++){const Z=P[se],y=U[se],x=Z.el&&(Z.type===Wn||!xr(Z,y)||Z.shapeFlag&198)?f(Z.el):A;_(Z,y,x,null,ie,j,J,ee,!0)}},L=(P,U,A,ie,j)=>{if(U!==A){if(U!==lt)for(const J in U)!Ys(J)&&!(J in A)&&s(P,J,U[J],null,j,ie);for(const J in A){if(Ys(J))continue;const ee=A[J],se=U[J];ee!==se&&J!=="value"&&s(P,J,se,ee,j,ie)}"value"in A&&s(P,"value",U.value,A.value,j)}},N=(P,U,A,ie,j,J,ee,se,Z)=>{const y=U.el=P?P.el:a(""),x=U.anchor=P?P.anchor:a("");let{patchFlag:I,dynamicChildren:V,slotScopeIds:W}=U;W&&(se=se?se.concat(W):W),P==null?(i(y,A,ie),i(x,A,ie),D(U.children||[],A,x,j,J,ee,se,Z)):I>0&&I&64&&V&&P.dynamicChildren&&P.dynamicChildren.length===V.length?(M(P.dynamicChildren,V,A,j,J,ee,se),(U.key!=null||j&&U===j.subTree)&&yp(P,U,!0)):H(P,U,A,x,j,J,ee,se,Z)},F=(P,U,A,ie,j,J,ee,se,Z)=>{U.slotScopeIds=se,P==null?U.shapeFlag&512?j.ctx.activate(U,A,ie,ee,Z):K(U,A,ie,j,J,ee,Z):Q(P,U,Z)},K=(P,U,A,ie,j,J,ee)=>{const se=P.component=o0(P,ie,j);if(Ha(P)&&(se.ctx.renderer=Be),a0(se,!1,ee),se.asyncDep){if(j&&j.registerDep(se,k,ee),!P.el){const Z=se.subTree=Qt(Xt);p(null,Z,U,A),P.placeholder=Z.el}}else k(se,P,U,A,j,J,ee)},Q=(P,U,A)=>{const ie=U.component=P.component;if(Bg(P,U,A))if(ie.asyncDep&&!ie.asyncResolved){Y(ie,U,A);return}else ie.next=U,ie.update();else U.el=P.el,ie.vnode=U},k=(P,U,A,ie,j,J,ee)=>{const se=()=>{if(P.isMounted){let{next:I,bu:V,u:W,parent:G,vnode:fe}=P;{const ge=Ep(P);if(ge){I&&(I.el=fe.el,Y(P,I,ee)),ge.asyncDep.then(()=>{Zt(()=>{P.isUnmounted||y()},j)});return}}let oe=I,he;rr(P,!1),I?(I.el=fe.el,Y(P,I,ee)):I=fe,V&&oa(V),(he=I.props&&I.props.onVnodeBeforeUpdate)&&Hn(he,G,I,fe),rr(P,!0);const De=Df(P),ae=P.subTree;P.subTree=De,_(ae,De,f(ae.el),pe(ae),P,j,J),I.el=De.el,oe===null&&zg(P,De.el),W&&Zt(W,j),(he=I.props&&I.props.onVnodeUpdated)&&Zt(()=>Hn(he,G,I,fe),j)}else{let I;const{el:V,props:W}=U,{bm:G,m:fe,parent:oe,root:he,type:De}=P,ae=Zs(U);rr(P,!1),G&&oa(G),!ae&&(I=W&&W.onVnodeBeforeMount)&&Hn(I,oe,U),rr(P,!0);{he.ce&&he.ce._hasShadowRoot()&&he.ce._injectChildStyle(De);const ge=P.subTree=Df(P);_(null,ge,A,ie,P,j,J),U.el=ge.el}if(fe&&Zt(fe,j),!ae&&(I=W&&W.onVnodeMounted)){const ge=U;Zt(()=>Hn(I,oe,ge),j)}(U.shapeFlag&256||oe&&Zs(oe.vnode)&&oe.vnode.shapeFlag&256)&&P.a&&Zt(P.a,j),P.isMounted=!0,U=A=ie=null}};P.scope.on();const Z=P.effect=new Dd(se);P.scope.off();const y=P.update=Z.run.bind(Z),x=P.job=Z.runIfDirty.bind(Z);x.i=P,x.id=P.uid,Z.scheduler=()=>Cu(x),rr(P,!0),y()},Y=(P,U,A)=>{U.component=P;const ie=P.vnode.props;P.vnode=U,P.next=null,Vg(P,U.props,ie,A),Xg(P,U.children,A),Si(),Ef(P),Mi()},H=(P,U,A,ie,j,J,ee,se,Z=!1)=>{const y=P&&P.children,x=P?P.shapeFlag:0,I=U.children,{patchFlag:V,shapeFlag:W}=U;if(V>0){if(V&128){me(y,I,A,ie,j,J,ee,se,Z);return}else if(V&256){ue(y,I,A,ie,j,J,ee,se,Z);return}}W&8?(x&16&&Te(y,j,J),I!==y&&u(A,I)):x&16?W&16?me(y,I,A,ie,j,J,ee,se,Z):Te(y,j,J,!0):(x&8&&u(A,""),W&16&&D(I,A,ie,j,J,ee,se,Z))},ue=(P,U,A,ie,j,J,ee,se,Z)=>{P=P||os,U=U||os;const y=P.length,x=U.length,I=Math.min(y,x);let V;for(V=0;V<I;V++){const W=U[V]=Z?di(U[V]):Xn(U[V]);_(P[V],W,A,null,j,J,ee,se,Z)}y>x?Te(P,j,J,!0,!1,I):D(U,A,ie,j,J,ee,se,Z,I)},me=(P,U,A,ie,j,J,ee,se,Z)=>{let y=0;const x=U.length;let I=P.length-1,V=x-1;for(;y<=I&&y<=V;){const W=P[y],G=U[y]=Z?di(U[y]):Xn(U[y]);if(xr(W,G))_(W,G,A,null,j,J,ee,se,Z);else break;y++}for(;y<=I&&y<=V;){const W=P[I],G=U[V]=Z?di(U[V]):Xn(U[V]);if(xr(W,G))_(W,G,A,null,j,J,ee,se,Z);else break;I--,V--}if(y>I){if(y<=V){const W=V+1,G=W<x?U[W].el:ie;for(;y<=V;)_(null,U[y]=Z?di(U[y]):Xn(U[y]),A,G,j,J,ee,se,Z),y++}}else if(y>V)for(;y<=I;)Ae(P[y],j,J,!0),y++;else{const W=y,G=y,fe=new Map;for(y=G;y<=V;y++){const de=U[y]=Z?di(U[y]):Xn(U[y]);de.key!=null&&fe.set(de.key,y)}let oe,he=0;const De=V-G+1;let ae=!1,ge=0;const we=new Array(De);for(y=0;y<De;y++)we[y]=0;for(y=W;y<=I;y++){const de=P[y];if(he>=De){Ae(de,j,J,!0);continue}let Ne;if(de.key!=null)Ne=fe.get(de.key);else for(oe=G;oe<=V;oe++)if(we[oe-G]===0&&xr(de,U[oe])){Ne=oe;break}Ne===void 0?Ae(de,j,J,!0):(we[Ne-G]=y+1,Ne>=ge?ge=Ne:ae=!0,_(de,U[Ne],A,null,j,J,ee,se,Z),he++)}const Le=ae?Kg(we):os;for(oe=Le.length-1,y=De-1;y>=0;y--){const de=G+y,Ne=U[de],ze=U[de+1],tt=de+1<x?ze.el||Tp(ze):ie;we[y]===0?_(null,Ne,A,tt,j,J,ee,se,Z):ae&&(oe<0||y!==Le[oe]?ye(Ne,A,tt,2):oe--)}}},ye=(P,U,A,ie,j=null)=>{const{el:J,type:ee,transition:se,children:Z,shapeFlag:y}=P;if(y&6){ye(P.component.subTree,U,A,ie);return}if(y&128){P.suspense.move(U,A,ie);return}if(y&64){ee.move(P,U,A,Be);return}if(ee===Wn){i(J,U,A);for(let I=0;I<Z.length;I++)ye(Z[I],U,A,ie);i(P.anchor,U,A);return}if(ee===ll){E(P,U,A);return}if(ie!==2&&y&1&&se)if(ie===0)se.beforeEnter(J),i(J,U,A),Zt(()=>se.enter(J),j);else{const{leave:I,delayLeave:V,afterLeave:W}=se,G=()=>{P.ctx.isUnmounted?r(J):i(J,U,A)},fe=()=>{J._isLeaving&&J[kn](!0),I(J,()=>{G(),W&&W()})};V?V(J,G,fe):fe()}else i(J,U,A)},Ae=(P,U,A,ie=!1,j=!1)=>{const{type:J,props:ee,ref:se,children:Z,dynamicChildren:y,shapeFlag:x,patchFlag:I,dirs:V,cacheIndex:W}=P;if(I===-2&&(j=!1),se!=null&&(Si(),js(se,null,A,P,!0),Mi()),W!=null&&(U.renderCache[W]=void 0),x&256){U.ctx.deactivate(P);return}const G=x&1&&V,fe=!Zs(P);let oe;if(fe&&(oe=ee&&ee.onVnodeBeforeUnmount)&&Hn(oe,U,P),x&6)le(P.component,A,ie);else{if(x&128){P.suspense.unmount(A,ie);return}G&&ir(P,null,U,"beforeUnmount"),x&64?P.type.remove(P,U,A,Be,ie):y&&!y.hasOnce&&(J!==Wn||I>0&&I&64)?Te(y,U,A,!1,!0):(J===Wn&&I&384||!j&&x&16)&&Te(Z,U,A),ie&&qe(P)}(fe&&(oe=ee&&ee.onVnodeUnmounted)||G)&&Zt(()=>{oe&&Hn(oe,U,P),G&&ir(P,null,U,"unmounted")},A)},qe=P=>{const{type:U,el:A,anchor:ie,transition:j}=P;if(U===Wn){ne(A,ie);return}if(U===ll){S(P);return}const J=()=>{r(A),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(P.shapeFlag&1&&j&&!j.persisted){const{leave:ee,delayLeave:se}=j,Z=()=>ee(A,J);se?se(P.el,J,Z):Z()}else J()},ne=(P,U)=>{let A;for(;P!==U;)A=h(P),r(P),P=A;r(U)},le=(P,U,A)=>{const{bum:ie,scope:j,job:J,subTree:ee,um:se,m:Z,a:y}=P;Uf(Z),Uf(y),ie&&oa(ie),j.stop(),J&&(J.flags|=8,Ae(ee,P,U,A)),se&&Zt(se,U),Zt(()=>{P.isUnmounted=!0},U)},Te=(P,U,A,ie=!1,j=!1,J=0)=>{for(let ee=J;ee<P.length;ee++)Ae(P[ee],U,A,ie,j)},pe=P=>{if(P.shapeFlag&6)return pe(P.component.subTree);if(P.shapeFlag&128)return P.suspense.next();const U=h(P.anchor||P.el),A=U&&U[ug];return A?h(A):U};let Ce=!1;const Ue=(P,U,A)=>{let ie;P==null?U._vnode&&(Ae(U._vnode,null,null,!0),ie=U._vnode.component):_(U._vnode||null,P,U,null,null,null,A),U._vnode=P,Ce||(Ce=!0,Ef(ie),$d(),Ce=!1)},Be={p:_,um:Ae,m:ye,r:qe,mt:K,mc:D,pc:H,pbc:M,n:pe,o:n};return{render:Ue,hydrate:void 0,createApp:Lg(Ue)}}function al({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function rr({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function $g(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function yp(n,e,t=!1){const i=n.children,r=e.children;if(Ie(i)&&Ie(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=di(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&yp(o,a)),a.type===Ga&&(a.patchFlag===-1&&(a=r[s]=di(a)),a.el=o.el),a.type===Xt&&!a.el&&(a.el=o.el)}}function Kg(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Ep(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ep(e)}function Uf(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Tp(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Tp(e.subTree):null}const bp=n=>n.__isSuspense;function jg(n,e){e&&e.pendingBranch?Ie(n)?e.effects.push(...n):e.effects.push(n):rg(n)}const Wn=Symbol.for("v-fgt"),Ga=Symbol.for("v-txt"),Xt=Symbol.for("v-cmt"),ll=Symbol.for("v-stc"),Qs=[];let hn=null;function lc(n=!1){Qs.push(hn=n?null:[])}function Zg(){Qs.pop(),hn=Qs[Qs.length-1]||null}let co=1;function Ta(n,e=!1){co+=n,n<0&&hn&&e&&(hn.hasOnce=!0)}function Ap(n){return n.dynamicChildren=co>0?hn||os:null,Zg(),co>0&&hn&&hn.push(n),n}function Nf(n,e,t,i,r,s){return Ap(kt(n,e,t,i,r,s,!0))}function Jg(n,e,t,i,r){return Ap(Qt(n,e,t,i,r,!0))}function ba(n){return n?n.__v_isVNode===!0:!1}function xr(n,e){return n.type===e.type&&n.key===e.key}const wp=({key:n})=>n??null,la=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?bt(n)||Bt(n)||He(n)?{i:An,r:n,k:e,f:!!t}:n:null);function kt(n,e=null,t=null,i=0,r=null,s=n===Wn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&wp(e),ref:e&&la(e),scopeId:jd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:An};return a?(Uu(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=bt(t)?8:16),co>0&&!o&&hn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&hn.push(l),l}const Qt=Qg;function Qg(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Tg)&&(n=Xt),ba(n)){const a=$i(n,e,!0);return t&&Uu(a,t),co>0&&!s&&hn&&(a.shapeFlag&6?hn[hn.indexOf(n)]=a:hn.push(a)),a.patchFlag=-2,a}if(f0(n)&&(n=n.__vccOpts),e){e=e0(e);let{class:a,style:l}=e;a&&!bt(a)&&(e.class=io(a)),rt(l)&&(Ru(l)&&!Ie(l)&&(l=Ct({},l)),e.style=vu(l))}const o=bt(n)?1:bp(n)?128:ep(n)?64:rt(n)?4:He(n)?2:0;return kt(n,e,t,i,r,o,s,!0)}function e0(n){return n?Ru(n)||_p(n)?Ct({},n):n:null}function $i(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?i0(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&wp(c),ref:e&&e.ref?t&&s?Ie(s)?s.concat(la(e)):[s,la(e)]:la(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Wn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&$i(n.ssContent),ssFallback:n.ssFallback&&$i(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&lo(u,l.clone(u)),u}function t0(n=" ",e=0){return Qt(Ga,null,n,e)}function n0(n="",e=!1){return e?(lc(),Jg(Xt,null,n)):Qt(Xt,null,n)}function Xn(n){return n==null||typeof n=="boolean"?Qt(Xt):Ie(n)?Qt(Wn,null,n.slice()):ba(n)?di(n):Qt(Ga,null,String(n))}function di(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:$i(n)}function Uu(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ie(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Uu(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!_p(e)?e._ctx=An:r===3&&An&&(An.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else He(e)?(e={default:e,_ctx:An},t=32):(e=String(e),i&64?(t=16,e=[t0(e)]):t=8);n.children=e,n.shapeFlag|=t}function i0(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=io([e.class,i.class]));else if(r==="style")e.style=vu([e.style,i.style]);else if(Fa(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ie(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Hn(n,e,t,i=null){zn(n,e,7,[t,i])}const r0=fp();let s0=0;function o0(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||r0,s={uid:s0++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new b_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vp(i,r),emitsOptions:hp(i,r),emit:null,emitted:null,propsDefaults:lt,inheritAttrs:i.inheritAttrs,ctx:lt,data:lt,props:lt,attrs:lt,slots:lt,refs:lt,setupState:lt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Ug.bind(null,s),n.ce&&n.ce(s),s}let qt=null;const Rp=()=>qt||An;let Aa,cc;{const n=Ba(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Aa=e("__VUE_INSTANCE_SETTERS__",t=>qt=t),cc=e("__VUE_SSR_SETTERS__",t=>uo=t)}const To=n=>{const e=qt;return Aa(n),n.scope.on(),()=>{n.scope.off(),Aa(e)}},Ff=()=>{qt&&qt.scope.off(),Aa(null)};function Cp(n){return n.vnode.shapeFlag&4}let uo=!1;function a0(n,e=!1,t=!1){e&&cc(e);const{props:i,children:r}=n.vnode,s=Cp(n);Hg(n,i,s,e),Wg(n,r,t||e);const o=s?l0(n,e):void 0;return e&&cc(!1),o}function l0(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,bg);const{setup:i}=t;if(i){Si();const r=n.setupContext=i.length>1?u0(n):null,s=To(n),o=Eo(i,n,0,[n.props,r]),a=Ed(o);if(Mi(),s(),(a||n.sp)&&!Zs(n)&&op(n),a){if(o.then(Ff,Ff),e)return o.then(l=>{Of(n,l)}).catch(l=>{za(l,n,0)});n.asyncDep=o}else Of(n,o)}else Pp(n)}function Of(n,e,t){He(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:rt(e)&&(n.setupState=Xd(e)),Pp(n)}function Pp(n,e,t){const i=n.type;n.render||(n.render=i.render||Jn);{const r=To(n);Si();try{Ag(n)}finally{Mi(),r()}}}const c0={get(n,e){return Ft(n,"get",""),n[e]}};function u0(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,c0),slots:n.slots,emit:n.emit,expose:e}}function Wa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Xd(q_(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Js)return Js[t](n)},has(e,t){return t in e||t in Js}})):n.proxy}function f0(n){return He(n)&&"__vccOpts"in n}const h0=(n,e)=>J_(n,e,uo);function d0(n,e,t){try{Ta(-1);const i=arguments.length;return i===2?rt(e)&&!Ie(e)?ba(e)?Qt(n,null,[e]):Qt(n,e):Qt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&ba(t)&&(t=[t]),Qt(n,e,t))}finally{Ta(1)}}const p0="3.5.29";/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let uc;const Bf=typeof window<"u"&&window.trustedTypes;if(Bf)try{uc=Bf.createPolicy("vue",{createHTML:n=>n})}catch{}const Dp=uc?n=>uc.createHTML(n):n=>n,m0="http://www.w3.org/2000/svg",_0="http://www.w3.org/1998/Math/MathML",fi=typeof document<"u"?document:null,zf=fi&&fi.createElement("template"),g0={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?fi.createElementNS(m0,n):e==="mathml"?fi.createElementNS(_0,n):t?fi.createElement(n,{is:t}):fi.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>fi.createTextNode(n),createComment:n=>fi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>fi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{zf.innerHTML=Dp(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=zf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Ri="transition",Ns="animation",fo=Symbol("_vtc"),Lp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},v0=Ct({},tp,Lp),x0=n=>(n.displayName="Transition",n.props=v0,n),S0=x0((n,{slots:e})=>d0(dg,M0(n),e)),sr=(n,e=[])=>{Ie(n)?n.forEach(t=>t(...e)):n&&n(...e)},Hf=n=>n?Ie(n)?n.some(e=>e.length>1):n.length>1:!1;function M0(n){const e={};for(const N in n)N in Lp||(e[N]=n[N]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:d=`${t}-leave-to`}=n,g=y0(r),_=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:T,onEnterCancelled:E,onLeave:S,onLeaveCancelled:w,onBeforeAppear:C=p,onAppear:R=T,onAppearCancelled:D=E}=e,v=(N,F,K,Q)=>{N._enterCancelled=Q,or(N,F?u:a),or(N,F?c:o),K&&K()},M=(N,F)=>{N._isLeaving=!1,or(N,f),or(N,d),or(N,h),F&&F()},L=N=>(F,K)=>{const Q=N?R:T,k=()=>v(F,N,K);sr(Q,[F,k]),Vf(()=>{or(F,N?l:s),ri(F,N?u:a),Hf(Q)||kf(F,i,_,k)})};return Ct(e,{onBeforeEnter(N){sr(p,[N]),ri(N,s),ri(N,o)},onBeforeAppear(N){sr(C,[N]),ri(N,l),ri(N,c)},onEnter:L(!1),onAppear:L(!0),onLeave(N,F){N._isLeaving=!0;const K=()=>M(N,F);ri(N,f),N._enterCancelled?(ri(N,h),Xf(N)):(Xf(N),ri(N,h)),Vf(()=>{N._isLeaving&&(or(N,f),ri(N,d),Hf(S)||kf(N,i,m,K))}),sr(S,[N,K])},onEnterCancelled(N){v(N,!1,void 0,!0),sr(E,[N])},onAppearCancelled(N){v(N,!0,void 0,!0),sr(D,[N])},onLeaveCancelled(N){M(N),sr(w,[N])}})}function y0(n){if(n==null)return null;if(rt(n))return[cl(n.enter),cl(n.leave)];{const e=cl(n);return[e,e]}}function cl(n){return g_(n)}function ri(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[fo]||(n[fo]=new Set)).add(e)}function or(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[fo];t&&(t.delete(e),t.size||(n[fo]=void 0))}function Vf(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let E0=0;function kf(n,e,t,i){const r=n._endId=++E0,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=T0(n,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,h),s()},h=d=>{d.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,h)}function T0(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),r=i(`${Ri}Delay`),s=i(`${Ri}Duration`),o=Gf(r,s),a=i(`${Ns}Delay`),l=i(`${Ns}Duration`),c=Gf(a,l);let u=null,f=0,h=0;e===Ri?o>0&&(u=Ri,f=o,h=s.length):e===Ns?c>0&&(u=Ns,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?Ri:Ns:null,h=u?u===Ri?s.length:l.length:0);const d=u===Ri&&/\b(?:transform|all)(?:,|$)/.test(i(`${Ri}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:d}}function Gf(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Wf(t)+Wf(n[i])))}function Wf(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Xf(n){return(n?n.ownerDocument:document).body.offsetHeight}function b0(n,e,t){const i=n[fo];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const qf=Symbol("_vod"),A0=Symbol("_vsh"),w0=Symbol(""),R0=/(?:^|;)\s*display\s*:/;function C0(n,e,t){const i=n.style,r=bt(t);let s=!1;if(t&&!r){if(e)if(bt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&ca(i,a,"")}else for(const o in e)t[o]==null&&ca(i,o,"");for(const o in t)o==="display"&&(s=!0),ca(i,o,t[o])}else if(r){if(e!==t){const o=i[w0];o&&(t+=";"+o),i.cssText=t,s=R0.test(t)}}else e&&n.removeAttribute("style");qf in n&&(n[qf]=s?i.display:"",n[A0]&&(i.display="none"))}const Yf=/\s*!important$/;function ca(n,e,t){if(Ie(t))t.forEach(i=>ca(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=P0(n,e);Yf.test(t)?n.setProperty(Ir(i),t.replace(Yf,""),"important"):n[i]=t}}const $f=["Webkit","Moz","ms"],ul={};function P0(n,e){const t=ul[e];if(t)return t;let i=qi(e);if(i!=="filter"&&i in n)return ul[e]=i;i=Ad(i);for(let r=0;r<$f.length;r++){const s=$f[r]+i;if(s in n)return ul[e]=s}return e}const Kf="http://www.w3.org/1999/xlink";function jf(n,e,t,i,r,s=E_(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Kf,e.slice(6,e.length)):n.setAttributeNS(Kf,e,t):t==null||s&&!Rd(t)?n.removeAttribute(e):n.setAttribute(e,s?"":ei(t)?String(t):t)}function Zf(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Dp(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Rd(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function ts(n,e,t,i){n.addEventListener(e,t,i)}function D0(n,e,t,i){n.removeEventListener(e,t,i)}const Jf=Symbol("_vei");function L0(n,e,t,i,r=null){const s=n[Jf]||(n[Jf]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=I0(e);if(i){const c=s[e]=F0(i,r);ts(n,a,c,l)}else o&&(D0(n,a,o,l),s[e]=void 0)}}const Qf=/(?:Once|Passive|Capture)$/;function I0(n){let e;if(Qf.test(n)){e={};let i;for(;i=n.match(Qf);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ir(n.slice(2)),e]}let fl=0;const U0=Promise.resolve(),N0=()=>fl||(U0.then(()=>fl=0),fl=Date.now());function F0(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;zn(O0(i,t.value),e,5,[i])};return t.value=n,t.attached=N0(),t}function O0(n,e){if(Ie(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const eh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,B0=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?b0(n,i,o):e==="style"?C0(n,t,i):Fa(e)?pu(e)||L0(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):z0(n,e,i,o))?(Zf(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&jf(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!bt(i))?Zf(n,qi(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),jf(n,e,i,o))};function z0(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&eh(e)&&He(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return eh(e)&&bt(t)?!1:e in n}const th=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ie(e)?t=>oa(e,t):e};function H0(n){n.target.composing=!0}function nh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const hl=Symbol("_assign");function ih(n,e,t){return e&&(n=n.trim()),t&&(n=gu(n)),n}const V0={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[hl]=th(r);const s=i||r.props&&r.props.type==="number";ts(n,e?"change":"input",o=>{o.target.composing||n[hl](ih(n.value,t,s))}),(t||s)&&ts(n,"change",()=>{n.value=ih(n.value,t,s)}),e||(ts(n,"compositionstart",H0),ts(n,"compositionend",nh),ts(n,"change",nh))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[hl]=th(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?gu(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l))}},k0=Ct({patchProp:B0},g0);let rh;function G0(){return rh||(rh=qg(k0))}const W0=((...n)=>{const e=G0().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=q0(i);if(!r)return;const s=e._component;!He(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,X0(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function X0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function q0(n){return bt(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nu="171",Y0=0,sh=1,$0=2,Ip=1,K0=2,ui=3,Ki=0,en=1,Yn=2,ki=0,fs=1,oh=2,ah=3,lh=4,j0=5,Sr=100,Z0=101,J0=102,Q0=103,ev=104,tv=200,nv=201,iv=202,rv=203,fc=204,hc=205,sv=206,ov=207,av=208,lv=209,cv=210,uv=211,fv=212,hv=213,dv=214,dc=0,pc=1,mc=2,gs=3,_c=4,gc=5,vc=6,xc=7,Up=0,pv=1,mv=2,Gi=0,_v=1,gv=2,vv=3,xv=4,Sv=5,Mv=6,yv=7,Np=300,vs=301,xs=302,Sc=303,Mc=304,Xa=306,yc=1e3,yr=1001,Ec=1002,Bn=1003,Ev=1004,Oo=1005,Kn=1006,dl=1007,Er=1008,Ei=1009,Fp=1010,Op=1011,ho=1012,Fu=1013,Dr=1014,gi=1015,bo=1016,Ou=1017,Bu=1018,Ss=1020,Bp=35902,zp=1021,Hp=1022,Nn=1023,Vp=1024,kp=1025,hs=1026,Ms=1027,Gp=1028,zu=1029,Wp=1030,Hu=1031,Vu=1033,ua=33776,fa=33777,ha=33778,da=33779,Tc=35840,bc=35841,Ac=35842,wc=35843,Rc=36196,Cc=37492,Pc=37496,Dc=37808,Lc=37809,Ic=37810,Uc=37811,Nc=37812,Fc=37813,Oc=37814,Bc=37815,zc=37816,Hc=37817,Vc=37818,kc=37819,Gc=37820,Wc=37821,pa=36492,Xc=36494,qc=36495,Xp=36283,Yc=36284,$c=36285,Kc=36286,Tv=3200,bv=3201,Av=0,wv=1,Oi="",Tn="srgb",ys="srgb-linear",wa="linear",st="srgb",zr=7680,ch=519,Rv=512,Cv=513,Pv=514,qp=515,Dv=516,Lv=517,Iv=518,Uv=519,uh=35044,fh="300 es",vi=2e3,Ra=2001;class Ps{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pl=Math.PI/180,jc=180/Math.PI;function Ao(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function We(n,e,t){return Math.max(e,Math.min(t,n))}function Nv(n,e){return(n%e+e)%e}function ml(n,e,t){return(1-t)*n+t*e}function Fs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function jt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class et{constructor(e=0,t=0){et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,i,r,s,o,a,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],_=r[0],m=r[3],p=r[6],T=r[1],E=r[4],S=r[7],w=r[2],C=r[5],R=r[8];return s[0]=o*_+a*T+l*w,s[3]=o*m+a*E+l*C,s[6]=o*p+a*S+l*R,s[1]=c*_+u*T+f*w,s[4]=c*m+u*E+f*C,s[7]=c*p+u*S+f*R,s[2]=h*_+d*T+g*w,s[5]=h*m+d*E+g*C,s[8]=h*p+d*S+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,g=t*f+i*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(_l.makeScale(e,t)),this}rotate(e){return this.premultiply(_l.makeRotation(-e)),this}translate(e,t){return this.premultiply(_l.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _l=new ke;function Yp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function po(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Fv(){const n=po("canvas");return n.style.display="block",n}const hh={};function ns(n){n in hh||(hh[n]=!0,console.warn(n))}function Ov(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Bv(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function zv(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const dh=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ph=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hv(){const n={enabled:!0,workingColorSpace:ys,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===st&&(r.r=xi(r.r),r.g=xi(r.g),r.b=xi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===st&&(r.r=ds(r.r),r.g=ds(r.g),r.b=ds(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Oi?wa:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ys]:{primaries:e,whitePoint:i,transfer:wa,toXYZ:dh,fromXYZ:ph,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tn},outputColorSpaceConfig:{drawingBufferColorSpace:Tn}},[Tn]:{primaries:e,whitePoint:i,transfer:st,toXYZ:dh,fromXYZ:ph,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tn}}}),n}const Ke=Hv();function xi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ds(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Hr;class Vv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Hr===void 0&&(Hr=po("canvas")),Hr.width=e.width,Hr.height=e.height;const i=Hr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Hr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=po("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=xi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(xi(t[i]/255)*255):t[i]=xi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let kv=0;class $p{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kv++}),this.uuid=Ao(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(gl(r[o].image)):s.push(gl(r[o]))}else s=gl(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function gl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Vv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gv=0;class $t extends Ps{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,i=yr,r=yr,s=Kn,o=Er,a=Nn,l=Ei,c=$t.DEFAULT_ANISOTROPY,u=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=Ao(),this.name="",this.source=new $p(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Np)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yc:e.x=e.x-Math.floor(e.x);break;case yr:e.x=e.x<0?0:1;break;case Ec:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yc:e.y=e.y-Math.floor(e.y);break;case yr:e.y=e.y<0?0:1;break;case Ec:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=Np;$t.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,i=0,r=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,S=(d+1)/2,w=(p+1)/2,C=(u+h)/4,R=(f+_)/4,D=(g+m)/4;return E>S&&E>w?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=C/i,s=R/i):S>w?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=D/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=R/s,r=D/s),this.set(i,r,s,t),this}let T=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(f-_)/T,this.z=(h-u)/T,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wv extends Ps{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new $t(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new $p(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lr extends Wv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Kp extends $t{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xv extends $t{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wo{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let m=1-a;const p=l*h+c*d+u*g+f*_,T=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const w=Math.sqrt(E),C=Math.atan2(w,p*T);m=Math.sin(m*C)/w,a=Math.sin(a*C)/w}const S=a*T;if(l=l*m+h*S,c=c*m+d*S,u=u*m+g*S,f=f*m+_*S,m===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-a*d,e[t+2]=c*g+u*d+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,t=0,i=0){$.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vl.copy(this).projectOnVector(e),this.sub(vl)}reflect(e){return this.sub(vl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vl=new $,mh=new wo;class Ro{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Dn):Dn.fromBufferAttribute(s,o),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Bo.copy(i.boundingBox)),Bo.applyMatrix4(e.matrixWorld),this.union(Bo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Os),zo.subVectors(this.max,Os),Vr.subVectors(e.a,Os),kr.subVectors(e.b,Os),Gr.subVectors(e.c,Os),Ci.subVectors(kr,Vr),Pi.subVectors(Gr,kr),ar.subVectors(Vr,Gr);let t=[0,-Ci.z,Ci.y,0,-Pi.z,Pi.y,0,-ar.z,ar.y,Ci.z,0,-Ci.x,Pi.z,0,-Pi.x,ar.z,0,-ar.x,-Ci.y,Ci.x,0,-Pi.y,Pi.x,0,-ar.y,ar.x,0];return!xl(t,Vr,kr,Gr,zo)||(t=[1,0,0,0,1,0,0,0,1],!xl(t,Vr,kr,Gr,zo))?!1:(Ho.crossVectors(Ci,Pi),t=[Ho.x,Ho.y,Ho.z],xl(t,Vr,kr,Gr,zo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const si=[new $,new $,new $,new $,new $,new $,new $,new $],Dn=new $,Bo=new Ro,Vr=new $,kr=new $,Gr=new $,Ci=new $,Pi=new $,ar=new $,Os=new $,zo=new $,Ho=new $,lr=new $;function xl(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){lr.fromArray(n,s);const a=r.x*Math.abs(lr.x)+r.y*Math.abs(lr.y)+r.z*Math.abs(lr.z),l=e.dot(lr),c=t.dot(lr),u=i.dot(lr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const qv=new Ro,Bs=new $,Sl=new $;class ku{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):qv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bs.subVectors(e,this.center);const t=Bs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Bs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bs.copy(e.center).add(Sl)),this.expandByPoint(Bs.copy(e.center).sub(Sl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const oi=new $,Ml=new $,Vo=new $,Di=new $,yl=new $,ko=new $,El=new $;class jp{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,t),oi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ml.copy(e).add(t).multiplyScalar(.5),Vo.copy(t).sub(e).normalize(),Di.copy(this.origin).sub(Ml);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Vo),a=Di.dot(this.direction),l=-Di.dot(Vo),c=Di.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ml).addScaledVector(Vo,h),d}intersectSphere(e,t){oi.subVectors(e.center,this.origin);const i=oi.dot(this.direction),r=oi.dot(oi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,t,i,r,s){yl.subVectors(t,e),ko.subVectors(i,e),El.crossVectors(yl,ko);let o=this.direction.dot(El),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Di.subVectors(this.origin,e);const l=a*this.direction.dot(ko.crossVectors(Di,ko));if(l<0)return null;const c=a*this.direction.dot(yl.cross(Di));if(c<0||l+c>o)return null;const u=-a*Di.dot(El);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,t,i,r,s,o,a,l,c,u,f,h,d,g,_,m){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,d,g,_,m)}set(e,t,i,r,s,o,a,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Wr.setFromMatrixColumn(e,0).length(),s=1/Wr.setFromMatrixColumn(e,1).length(),o=1/Wr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h-_*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yv,e,$v)}lookAt(e,t,i){const r=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Li.crossVectors(i,ln),Li.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Li.crossVectors(i,ln)),Li.normalize(),Go.crossVectors(ln,Li),r[0]=Li.x,r[4]=Go.x,r[8]=ln.x,r[1]=Li.y,r[5]=Go.y,r[9]=ln.y,r[2]=Li.z,r[6]=Go.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],T=i[3],E=i[7],S=i[11],w=i[15],C=r[0],R=r[4],D=r[8],v=r[12],M=r[1],L=r[5],N=r[9],F=r[13],K=r[2],Q=r[6],k=r[10],Y=r[14],H=r[3],ue=r[7],me=r[11],ye=r[15];return s[0]=o*C+a*M+l*K+c*H,s[4]=o*R+a*L+l*Q+c*ue,s[8]=o*D+a*N+l*k+c*me,s[12]=o*v+a*F+l*Y+c*ye,s[1]=u*C+f*M+h*K+d*H,s[5]=u*R+f*L+h*Q+d*ue,s[9]=u*D+f*N+h*k+d*me,s[13]=u*v+f*F+h*Y+d*ye,s[2]=g*C+_*M+m*K+p*H,s[6]=g*R+_*L+m*Q+p*ue,s[10]=g*D+_*N+m*k+p*me,s[14]=g*v+_*F+m*Y+p*ye,s[3]=T*C+E*M+S*K+w*H,s[7]=T*R+E*L+S*Q+w*ue,s[11]=T*D+E*N+S*k+w*me,s[15]=T*v+E*F+S*Y+w*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*d-i*l*d)+_*(+t*l*d-t*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+m*(+t*c*f-t*a*d-s*o*f+i*o*d+s*a*u-i*c*u)+p*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],T=f*m*c-_*h*c+_*l*d-a*m*d-f*l*p+a*h*p,E=g*h*c-u*m*c-g*l*d+o*m*d+u*l*p-o*h*p,S=u*_*c-g*f*c+g*a*d-o*_*d-u*a*p+o*f*p,w=g*f*l-u*_*l-g*a*h+o*_*h+u*a*m-o*f*m,C=t*T+i*E+r*S+s*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=T*R,e[1]=(_*h*s-f*m*s-_*r*d+i*m*d+f*r*p-i*h*p)*R,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*p+i*l*p)*R,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*d-i*l*d)*R,e[4]=E*R,e[5]=(u*m*s-g*h*s+g*r*d-t*m*d-u*r*p+t*h*p)*R,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*p-t*l*p)*R,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*d+t*l*d)*R,e[8]=S*R,e[9]=(g*f*s-u*_*s-g*i*d+t*_*d+u*i*p-t*f*p)*R,e[10]=(o*_*s-g*a*s+g*i*c-t*_*c-o*i*p+t*a*p)*R,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*d-t*a*d)*R,e[12]=w*R,e[13]=(u*_*r-g*f*r+g*i*h-t*_*h-u*i*m+t*f*m)*R,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*m-t*a*m)*R,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,g=s*f,_=o*u,m=o*f,p=a*f,T=l*c,E=l*u,S=l*f,w=i.x,C=i.y,R=i.z;return r[0]=(1-(_+p))*w,r[1]=(d+S)*w,r[2]=(g-E)*w,r[3]=0,r[4]=(d-S)*C,r[5]=(1-(h+p))*C,r[6]=(m+T)*C,r[7]=0,r[8]=(g+E)*R,r[9]=(m-T)*R,r[10]=(1-(h+_))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Wr.set(r[0],r[1],r[2]).length();const o=Wr.set(r[4],r[5],r[6]).length(),a=Wr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ln.copy(this);const c=1/s,u=1/o,f=1/a;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=u,Ln.elements[5]*=u,Ln.elements[6]*=u,Ln.elements[8]*=f,Ln.elements[9]*=f,Ln.elements[10]*=f,t.setFromRotationMatrix(Ln),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=vi){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let d,g;if(a===vi)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ra)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=vi){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*c,d=(i+r)*u;let g,_;if(a===vi)g=(o+s)*f,_=-2*f;else if(a===Ra)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Wr=new $,Ln=new Mt,Yv=new $(0,0,0),$v=new $(1,1,1),Li=new $,Go=new $,ln=new $,_h=new Mt,gh=new wo;class Ti{constructor(e=0,t=0,i=0,r=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-We(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return _h.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_h,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gh.setFromEuler(this),this.setFromQuaternion(gh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class Gu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Kv=0;const vh=new $,Xr=new wo,ai=new Mt,Wo=new $,zs=new $,jv=new $,Zv=new wo,xh=new $(1,0,0),Sh=new $(0,1,0),Mh=new $(0,0,1),yh={type:"added"},Jv={type:"removed"},qr={type:"childadded",child:null},Tl={type:"childremoved",child:null};class mn extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kv++}),this.uuid=Ao(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const e=new $,t=new Ti,i=new wo,r=new $(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new ke}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xr.setFromAxisAngle(e,t),this.quaternion.multiply(Xr),this}rotateOnWorldAxis(e,t){return Xr.setFromAxisAngle(e,t),this.quaternion.premultiply(Xr),this}rotateX(e){return this.rotateOnAxis(xh,e)}rotateY(e){return this.rotateOnAxis(Sh,e)}rotateZ(e){return this.rotateOnAxis(Mh,e)}translateOnAxis(e,t){return vh.copy(e).applyQuaternion(this.quaternion),this.position.add(vh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xh,e)}translateY(e){return this.translateOnAxis(Sh,e)}translateZ(e){return this.translateOnAxis(Mh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Wo.copy(e):Wo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(zs,Wo,this.up):ai.lookAt(Wo,zs,this.up),this.quaternion.setFromRotationMatrix(ai),r&&(ai.extractRotation(r.matrixWorld),Xr.setFromRotationMatrix(ai),this.quaternion.premultiply(Xr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yh),qr.child=e,this.dispatchEvent(qr),qr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jv),Tl.child=e,this.dispatchEvent(Tl),Tl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yh),qr.child=e,this.dispatchEvent(qr),qr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,e,jv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,Zv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}mn.DEFAULT_UP=new $(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new $,li=new $,bl=new $,ci=new $,Yr=new $,$r=new $,Eh=new $,Al=new $,wl=new $,Rl=new $,Cl=new St,Pl=new St,Dl=new St;class Un{constructor(e=new $,t=new $,i=new $){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),In.subVectors(e,t),r.cross(In);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){In.subVectors(r,t),li.subVectors(i,t),bl.subVectors(e,t);const o=In.dot(In),a=In.dot(li),l=In.dot(bl),c=li.dot(li),u=li.dot(bl),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ci.x),l.addScaledVector(o,ci.y),l.addScaledVector(a,ci.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Cl.setScalar(0),Pl.setScalar(0),Dl.setScalar(0),Cl.fromBufferAttribute(e,t),Pl.fromBufferAttribute(e,i),Dl.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Cl,s.x),o.addScaledVector(Pl,s.y),o.addScaledVector(Dl,s.z),o}static isFrontFacing(e,t,i,r){return In.subVectors(i,t),li.subVectors(e,t),In.cross(li).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),li.subVectors(this.a,this.b),In.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Un.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Yr.subVectors(r,i),$r.subVectors(s,i),Al.subVectors(e,i);const l=Yr.dot(Al),c=$r.dot(Al);if(l<=0&&c<=0)return t.copy(i);wl.subVectors(e,r);const u=Yr.dot(wl),f=$r.dot(wl);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Yr,o);Rl.subVectors(e,s);const d=Yr.dot(Rl),g=$r.dot(Rl);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector($r,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Eh.subVectors(s,r),a=(f-u)/(f-u+(d-g)),t.copy(r).addScaledVector(Eh,a);const p=1/(m+_+h);return o=_*p,a=h*p,t.copy(i).addScaledVector(Yr,o).addScaledVector($r,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Zp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},Xo={h:0,s:0,l:0};function Ll(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class it{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ke.workingColorSpace){if(e=Nv(e,1),t=We(t,0,1),i=We(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Ll(o,s,e+1/3),this.g=Ll(o,s,e),this.b=Ll(o,s,e-1/3)}return Ke.toWorkingColorSpace(this,r),this}setStyle(e,t=Tn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tn){const i=Zp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=ds(e.r),this.g=ds(e.g),this.b=ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return Ke.fromWorkingColorSpace(Nt.copy(this),e),Math.round(We(Nt.r*255,0,255))*65536+Math.round(We(Nt.g*255,0,255))*256+Math.round(We(Nt.b*255,0,255))}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Nt.copy(this),t);const i=Nt.r,r=Nt.g,s=Nt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=Tn){Ke.fromWorkingColorSpace(Nt.copy(this),e);const t=Nt.r,i=Nt.g,r=Nt.b;return e!==Tn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+t,Ii.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ii),e.getHSL(Xo);const i=ml(Ii.h,Xo.h,t),r=ml(Ii.s,Xo.s,t),s=ml(Ii.l,Xo.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new it;it.NAMES=Zp;let Qv=0;class qa extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qv++}),this.uuid=Ao(),this.name="",this.type="Material",this.blending=fs,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fc,this.blendDst=hc,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ch,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zr,this.stencilZFail=zr,this.stencilZPass=zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fs&&(i.blending=this.blending),this.side!==Ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fc&&(i.blendSrc=this.blendSrc),this.blendDst!==hc&&(i.blendDst=this.blendDst),this.blendEquation!==Sr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ch&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==zr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==zr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Wu extends qa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=Up,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new $,qo=new et;class Qn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=uh,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)qo.fromBufferAttribute(this,t),qo.applyMatrix3(e),this.setXY(t,qo.x,qo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Fs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=jt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fs(t,this.array)),t}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fs(t,this.array)),t}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fs(t,this.array)),t}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),r=jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),r=jt(r,this.array),s=jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uh&&(e.usage=this.usage),e}}class Jp extends Qn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Qp extends Qn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ar extends Qn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ex=0;const yn=new Mt,Il=new mn,Kr=new $,cn=new Ro,Hs=new Ro,Rt=new $;class Ur extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=Ao(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yp(e)?Qp:Jp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,i){return yn.makeTranslation(e,t,i),this.applyMatrix4(yn),this}scale(e,t,i){return yn.makeScale(e,t,i),this.applyMatrix4(yn),this}lookAt(e){return Il.lookAt(e),Il.updateMatrix(),this.applyMatrix4(Il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ar(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ro);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ku);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Hs.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(cn.min,Hs.min),cn.expandByPoint(Rt),Rt.addVectors(cn.max,Hs.max),cn.expandByPoint(Rt)):(cn.expandByPoint(Hs.min),cn.expandByPoint(Hs.max))}cn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Rt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Rt.fromBufferAttribute(a,c),l&&(Kr.fromBufferAttribute(e,c),Rt.add(Kr)),r=Math.max(r,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new $,l[D]=new $;const c=new $,u=new $,f=new $,h=new et,d=new et,g=new et,_=new $,m=new $;function p(D,v,M){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,v),f.fromBufferAttribute(i,M),h.fromBufferAttribute(s,D),d.fromBufferAttribute(s,v),g.fromBufferAttribute(s,M),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(L),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(L),a[D].add(_),a[v].add(_),a[M].add(_),l[D].add(m),l[v].add(m),l[M].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let D=0,v=T.length;D<v;++D){const M=T[D],L=M.start,N=M.count;for(let F=L,K=L+N;F<K;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const E=new $,S=new $,w=new $,C=new $;function R(D){w.fromBufferAttribute(r,D),C.copy(w);const v=a[D];E.copy(v),E.sub(w.multiplyScalar(w.dot(v))).normalize(),S.crossVectors(C,v);const L=S.dot(l[D])<0?-1:1;o.setXYZW(D,E.x,E.y,E.z,L)}for(let D=0,v=T.length;D<v;++D){const M=T[D],L=M.start,N=M.count;for(let F=L,K=L+N;F<K;F+=3)R(e.getX(F+0)),R(e.getX(F+1)),R(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new $,s=new $,o=new $,a=new $,l=new $,c=new $,u=new $,f=new $;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new Qn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ur,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Th=new Mt,cr=new jp,Yo=new ku,bh=new $,$o=new $,Ko=new $,jo=new $,Ul=new $,Zo=new $,Ah=new $,Jo=new $;class jn extends mn{constructor(e=new Ur,t=new Wu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Zo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Ul.fromBufferAttribute(f,e),o?Zo.addScaledVector(Ul,u):Zo.addScaledVector(Ul.sub(t),u))}t.add(Zo)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Yo.copy(i.boundingSphere),Yo.applyMatrix4(s),cr.copy(e.ray).recast(e.near),!(Yo.containsPoint(cr.origin)===!1&&(cr.intersectSphere(Yo,bh)===null||cr.origin.distanceToSquared(bh)>(e.far-e.near)**2))&&(Th.copy(s).invert(),cr.copy(e.ray).applyMatrix4(Th),!(i.boundingBox!==null&&cr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,cr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],T=Math.max(m.start,d.start),E=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let S=T,w=E;S<w;S+=3){const C=a.getX(S),R=a.getX(S+1),D=a.getX(S+2);r=Qo(this,p,e,i,c,u,f,C,R,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const T=a.getX(m),E=a.getX(m+1),S=a.getX(m+2);r=Qo(this,o,e,i,c,u,f,T,E,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],T=Math.max(m.start,d.start),E=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let S=T,w=E;S<w;S+=3){const C=S,R=S+1,D=S+2;r=Qo(this,p,e,i,c,u,f,C,R,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const T=m,E=m+1,S=m+2;r=Qo(this,o,e,i,c,u,f,T,E,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function tx(n,e,t,i,r,s,o,a){let l;if(e.side===en?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ki,a),l===null)return null;Jo.copy(a),Jo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Jo);return c<t.near||c>t.far?null:{distance:c,point:Jo.clone(),object:n}}function Qo(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,$o),n.getVertexPosition(l,Ko),n.getVertexPosition(c,jo);const u=tx(n,e,t,i,$o,Ko,jo,Ah);if(u){const f=new $;Un.getBarycoord(Ah,$o,Ko,jo,f),r&&(u.uv=Un.getInterpolatedAttribute(r,a,l,c,f,new et)),s&&(u.uv1=Un.getInterpolatedAttribute(s,a,l,c,f,new et)),o&&(u.normal=Un.getInterpolatedAttribute(o,a,l,c,f,new $),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new $,materialIndex:0};Un.getNormal($o,Ko,jo,h.normal),u.face=h,u.barycoord=f}return u}class Co extends Ur{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ar(c,3)),this.setAttribute("normal",new Ar(u,3)),this.setAttribute("uv",new Ar(f,2));function g(_,m,p,T,E,S,w,C,R,D,v){const M=S/R,L=w/D,N=S/2,F=w/2,K=C/2,Q=R+1,k=D+1;let Y=0,H=0;const ue=new $;for(let me=0;me<k;me++){const ye=me*L-F;for(let Ae=0;Ae<Q;Ae++){const qe=Ae*M-N;ue[_]=qe*T,ue[m]=ye*E,ue[p]=K,c.push(ue.x,ue.y,ue.z),ue[_]=0,ue[m]=0,ue[p]=C>0?1:-1,u.push(ue.x,ue.y,ue.z),f.push(Ae/R),f.push(1-me/D),Y+=1}}for(let me=0;me<D;me++)for(let ye=0;ye<R;ye++){const Ae=h+ye+Q*me,qe=h+ye+Q*(me+1),ne=h+(ye+1)+Q*(me+1),le=h+(ye+1)+Q*me;l.push(Ae,qe,le),l.push(qe,ne,le),H+=6}a.addGroup(d,H,v),d+=H,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Co(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Es(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Gt(n){const e={};for(let t=0;t<n.length;t++){const i=Es(n[t]);for(const r in i)e[r]=i[r]}return e}function nx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function em(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const ix={clone:Es,merge:Gt};var rx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends qa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rx,this.fragmentShader=sx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Es(e.uniforms),this.uniformsGroups=nx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class tm extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=vi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ui=new $,wh=new et,Rh=new et;class bn extends tm{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=jc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jc*2*Math.atan(Math.tan(pl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,t){return this.getViewBounds(e,wh,Rh),t.subVectors(Rh,wh)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(pl*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const jr=-90,Zr=1;class ox extends mn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new bn(jr,Zr,e,t);r.layers=this.layers,this.add(r);const s=new bn(jr,Zr,e,t);s.layers=this.layers,this.add(s);const o=new bn(jr,Zr,e,t);o.layers=this.layers,this.add(o);const a=new bn(jr,Zr,e,t);a.layers=this.layers,this.add(a);const l=new bn(jr,Zr,e,t);l.layers=this.layers,this.add(l);const c=new bn(jr,Zr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ra)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class nm extends $t{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:vs,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ax extends Lr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new nm(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Co(5,5,5),s=new ji({name:"CubemapFromEquirect",uniforms:Es(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:ki});s.uniforms.tEquirect.value=t;const o=new jn(r,s),a=t.minFilter;return t.minFilter===Er&&(t.minFilter=Kn),new ox(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class lx extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Nl=new $,cx=new $,ux=new ke;class _r{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Nl.subVectors(i,t).cross(cx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Nl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ux.getNormalMatrix(e),r=this.coplanarPoint(Nl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ur=new ku,ea=new $;class im{constructor(e=new _r,t=new _r,i=new _r,r=new _r,s=new _r,o=new _r){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=vi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],g=r[9],_=r[10],m=r[11],p=r[12],T=r[13],E=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,m-d,S-p).normalize(),i[1].setComponents(l+s,h+c,m+d,S+p).normalize(),i[2].setComponents(l+o,h+u,m+g,S+T).normalize(),i[3].setComponents(l-o,h-u,m-g,S-T).normalize(),i[4].setComponents(l-a,h-f,m-_,S-E).normalize(),t===vi)i[5].setComponents(l+a,h+f,m+_,S+E).normalize();else if(t===Ra)i[5].setComponents(a,f,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ur.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){return ur.center.set(0,0,0),ur.radius=.7071067811865476,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ea.x=r.normal.x>0?e.max.x:e.min.x,ea.y=r.normal.y>0?e.max.y:e.min.y,ea.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ea)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ta extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class rm extends $t{constructor(e,t,i,r,s,o,a,l,c,u=hs){if(u!==hs&&u!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===hs&&(i=Dr),i===void 0&&u===Ms&&(i=Ss),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Bn,this.minFilter=l!==void 0?l:Bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Po extends Ur{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const T=p*h-o;for(let E=0;E<c;E++){const S=E*f-s;g.push(S,-T,0),_.push(0,0,1),m.push(E/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<a;T++){const E=T+c*p,S=T+c*(p+1),w=T+1+c*(p+1),C=T+1+c*p;d.push(E,S,C),d.push(S,w,C)}this.setIndex(d),this.setAttribute("position",new Ar(g,3)),this.setAttribute("normal",new Ar(_,3)),this.setAttribute("uv",new Ar(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Po(e.width,e.height,e.widthSegments,e.heightSegments)}}class fx extends qa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hx extends qa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ch={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class dx{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const px=new dx;class Xu{constructor(e){this.manager=e!==void 0?e:px,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Xu.DEFAULT_MATERIAL_NAME="__DEFAULT";class mx extends Xu{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ch.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=po("img");function l(){u(),Ch.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class _x extends Xu{constructor(e){super(e)}load(e,t,i,r){const s=new $t,o=new mx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class gx extends tm{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class vx extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}const Ph=new Mt;class xx{constructor(e,t,i=0,r=1/0){this.ray=new jp(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Gu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ph.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ph),this}intersectObject(e,t=!0,i=[]){return Zc(e,this,i,t),i.sort(Dh),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Zc(e[r],this,i,t);return i.sort(Dh),i}}function Dh(n,e){return n.distance-e.distance}function Zc(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)Zc(s[o],e,t,!0)}}function Lh(n,e,t,i){const r=Sx(i);switch(t){case zp:return n*e;case Vp:return n*e;case kp:return n*e*2;case Gp:return n*e/r.components*r.byteLength;case zu:return n*e/r.components*r.byteLength;case Wp:return n*e*2/r.components*r.byteLength;case Hu:return n*e*2/r.components*r.byteLength;case Hp:return n*e*3/r.components*r.byteLength;case Nn:return n*e*4/r.components*r.byteLength;case Vu:return n*e*4/r.components*r.byteLength;case ua:case fa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ha:case da:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bc:case wc:return Math.max(n,16)*Math.max(e,8)/4;case Tc:case Ac:return Math.max(n,8)*Math.max(e,8)/2;case Rc:case Cc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Pc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Lc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ic:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Fc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Oc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Bc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case zc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Vc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case kc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Gc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Wc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case pa:case Xc:case qc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Xp:case Yc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case $c:case Kc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Sx(n){switch(n){case Ei:case Fp:return{byteLength:1,components:1};case ho:case Op:case bo:return{byteLength:2,components:1};case Ou:case Bu:return{byteLength:2,components:4};case Dr:case Fu:case gi:return{byteLength:4,components:1};case Bp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nu);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function sm(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Mx(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var yx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ex=`#ifdef USE_ALPHAHASH
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
#endif`,Tx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ax=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rx=`#ifdef USE_AOMAP
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
#endif`,Cx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Px=`#ifdef USE_BATCHING
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
#endif`,Dx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ix=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ux=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nx=`#ifdef USE_IRIDESCENCE
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
#endif`,Fx=`#ifdef USE_BUMPMAP
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
#endif`,Ox=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Xx=`#define PI 3.141592653589793
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
} // validated`,qx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Yx=`vec3 transformedNormal = objectNormal;
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
#endif`,$x=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eS=`#ifdef USE_ENVMAP
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
#endif`,tS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nS=`#ifdef USE_ENVMAP
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
#endif`,iS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rS=`#ifdef USE_ENVMAP
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
#endif`,sS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cS=`#ifdef USE_GRADIENTMAP
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
}`,uS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dS=`uniform bool receiveShadow;
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
#endif`,pS=`#ifdef USE_ENVMAP
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
#endif`,mS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_S=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xS=`PhysicalMaterial material;
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
#endif`,SS=`struct PhysicalMaterial {
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
}`,MS=`
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
#endif`,yS=`#if defined( RE_IndirectDiffuse )
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
#endif`,ES=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,TS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,RS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,DS=`#if defined( USE_POINTS_UV )
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
#endif`,LS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,US=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,NS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,FS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OS=`#ifdef USE_MORPHTARGETS
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
#endif`,BS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,HS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,VS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,WS=`#ifdef USE_NORMALMAP
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
#endif`,XS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,YS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$S=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,KS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ZS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,oM=`float getShadowMask() {
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
}`,aM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lM=`#ifdef USE_SKINNING
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
#endif`,cM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uM=`#ifdef USE_SKINNING
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
#endif`,fM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mM=`#ifdef USE_TRANSMISSION
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
#endif`,_M=`#ifdef USE_TRANSMISSION
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
#endif`,gM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const MM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yM=`uniform sampler2D t2D;
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
}`,EM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wM=`#include <common>
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
}`,RM=`#if DEPTH_PACKING == 3200
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
}`,CM=`#define DISTANCE
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
}`,PM=`#define DISTANCE
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
}`,DM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IM=`uniform float scale;
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
}`,UM=`uniform vec3 diffuse;
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
}`,NM=`#include <common>
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
}`,FM=`uniform vec3 diffuse;
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
}`,OM=`#define LAMBERT
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
}`,BM=`#define LAMBERT
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
}`,zM=`#define MATCAP
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
}`,HM=`#define MATCAP
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
}`,VM=`#define NORMAL
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
}`,kM=`#define NORMAL
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
}`,GM=`#define PHONG
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
}`,WM=`#define PHONG
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
}`,XM=`#define STANDARD
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
}`,qM=`#define STANDARD
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
}`,YM=`#define TOON
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
}`,$M=`#define TOON
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
}`,KM=`uniform float size;
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
}`,jM=`uniform vec3 diffuse;
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
}`,ZM=`#include <common>
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
}`,JM=`uniform vec3 color;
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
}`,QM=`uniform float rotation;
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
}`,ey=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:yx,alphahash_pars_fragment:Ex,alphamap_fragment:Tx,alphamap_pars_fragment:bx,alphatest_fragment:Ax,alphatest_pars_fragment:wx,aomap_fragment:Rx,aomap_pars_fragment:Cx,batching_pars_vertex:Px,batching_vertex:Dx,begin_vertex:Lx,beginnormal_vertex:Ix,bsdfs:Ux,iridescence_fragment:Nx,bumpmap_pars_fragment:Fx,clipping_planes_fragment:Ox,clipping_planes_pars_fragment:Bx,clipping_planes_pars_vertex:zx,clipping_planes_vertex:Hx,color_fragment:Vx,color_pars_fragment:kx,color_pars_vertex:Gx,color_vertex:Wx,common:Xx,cube_uv_reflection_fragment:qx,defaultnormal_vertex:Yx,displacementmap_pars_vertex:$x,displacementmap_vertex:Kx,emissivemap_fragment:jx,emissivemap_pars_fragment:Zx,colorspace_fragment:Jx,colorspace_pars_fragment:Qx,envmap_fragment:eS,envmap_common_pars_fragment:tS,envmap_pars_fragment:nS,envmap_pars_vertex:iS,envmap_physical_pars_fragment:pS,envmap_vertex:rS,fog_vertex:sS,fog_pars_vertex:oS,fog_fragment:aS,fog_pars_fragment:lS,gradientmap_pars_fragment:cS,lightmap_pars_fragment:uS,lights_lambert_fragment:fS,lights_lambert_pars_fragment:hS,lights_pars_begin:dS,lights_toon_fragment:mS,lights_toon_pars_fragment:_S,lights_phong_fragment:gS,lights_phong_pars_fragment:vS,lights_physical_fragment:xS,lights_physical_pars_fragment:SS,lights_fragment_begin:MS,lights_fragment_maps:yS,lights_fragment_end:ES,logdepthbuf_fragment:TS,logdepthbuf_pars_fragment:bS,logdepthbuf_pars_vertex:AS,logdepthbuf_vertex:wS,map_fragment:RS,map_pars_fragment:CS,map_particle_fragment:PS,map_particle_pars_fragment:DS,metalnessmap_fragment:LS,metalnessmap_pars_fragment:IS,morphinstance_vertex:US,morphcolor_vertex:NS,morphnormal_vertex:FS,morphtarget_pars_vertex:OS,morphtarget_vertex:BS,normal_fragment_begin:zS,normal_fragment_maps:HS,normal_pars_fragment:VS,normal_pars_vertex:kS,normal_vertex:GS,normalmap_pars_fragment:WS,clearcoat_normal_fragment_begin:XS,clearcoat_normal_fragment_maps:qS,clearcoat_pars_fragment:YS,iridescence_pars_fragment:$S,opaque_fragment:KS,packing:jS,premultiplied_alpha_fragment:ZS,project_vertex:JS,dithering_fragment:QS,dithering_pars_fragment:eM,roughnessmap_fragment:tM,roughnessmap_pars_fragment:nM,shadowmap_pars_fragment:iM,shadowmap_pars_vertex:rM,shadowmap_vertex:sM,shadowmask_pars_fragment:oM,skinbase_vertex:aM,skinning_pars_vertex:lM,skinning_vertex:cM,skinnormal_vertex:uM,specularmap_fragment:fM,specularmap_pars_fragment:hM,tonemapping_fragment:dM,tonemapping_pars_fragment:pM,transmission_fragment:mM,transmission_pars_fragment:_M,uv_pars_fragment:gM,uv_pars_vertex:vM,uv_vertex:xM,worldpos_vertex:SM,background_vert:MM,background_frag:yM,backgroundCube_vert:EM,backgroundCube_frag:TM,cube_vert:bM,cube_frag:AM,depth_vert:wM,depth_frag:RM,distanceRGBA_vert:CM,distanceRGBA_frag:PM,equirect_vert:DM,equirect_frag:LM,linedashed_vert:IM,linedashed_frag:UM,meshbasic_vert:NM,meshbasic_frag:FM,meshlambert_vert:OM,meshlambert_frag:BM,meshmatcap_vert:zM,meshmatcap_frag:HM,meshnormal_vert:VM,meshnormal_frag:kM,meshphong_vert:GM,meshphong_frag:WM,meshphysical_vert:XM,meshphysical_frag:qM,meshtoon_vert:YM,meshtoon_frag:$M,points_vert:KM,points_frag:jM,shadow_vert:ZM,shadow_frag:JM,sprite_vert:QM,sprite_frag:ey},_e={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},qn={basic:{uniforms:Gt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Gt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new it(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Gt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Gt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Gt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new it(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Gt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Gt([_e.points,_e.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Gt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Gt([_e.common,_e.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Gt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Gt([_e.sprite,_e.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Gt([_e.common,_e.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Gt([_e.lights,_e.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};qn.physical={uniforms:Gt([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const na={r:0,b:0,g:0},fr=new Ti,ty=new Mt;function ny(n,e,t,i,r,s,o){const a=new it(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?t:e).get(S)),S}function _(E){let S=!1;const w=g(E);w===null?p(a,l):w&&w.isColor&&(p(w,1),S=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,S){const w=g(S);w&&(w.isCubeTexture||w.mapping===Xa)?(u===void 0&&(u=new jn(new Co(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:Es(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,R,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),fr.copy(S.backgroundRotation),fr.x*=-1,fr.y*=-1,fr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ty.makeRotationFromEuler(fr)),u.material.toneMapped=Ke.getTransfer(w.colorSpace)!==st,(f!==w||h!==w.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=w,h=w.version,d=n.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new jn(new Po(2,2),new ji({name:"BackgroundMaterial",uniforms:Es(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(w.colorSpace)!==st,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||h!==w.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=w,h=w.version,d=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,S){E.getRGB(na,em(n)),i.buffers.color.setClear(na.r,na.g,na.b,S,o)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(E,S=1){a.set(E),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(a,l)},render:_,addToRenderList:m,dispose:T}}function iy(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(M,L,N,F,K){let Q=!1;const k=f(F,N,L);s!==k&&(s=k,c(s.object)),Q=d(M,F,N,K),Q&&g(M,F,N,K),K!==null&&e.update(K,n.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,S(M,L,N,F),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function f(M,L,N){const F=N.wireframe===!0;let K=i[M.id];K===void 0&&(K={},i[M.id]=K);let Q=K[L.id];Q===void 0&&(Q={},K[L.id]=Q);let k=Q[F];return k===void 0&&(k=h(l()),Q[F]=k),k}function h(M){const L=[],N=[],F=[];for(let K=0;K<t;K++)L[K]=0,N[K]=0,F[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:F,object:M,attributes:{},index:null}}function d(M,L,N,F){const K=s.attributes,Q=L.attributes;let k=0;const Y=N.getAttributes();for(const H in Y)if(Y[H].location>=0){const me=K[H];let ye=Q[H];if(ye===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ye=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ye=M.instanceColor)),me===void 0||me.attribute!==ye||ye&&me.data!==ye.data)return!0;k++}return s.attributesNum!==k||s.index!==F}function g(M,L,N,F){const K={},Q=L.attributes;let k=0;const Y=N.getAttributes();for(const H in Y)if(Y[H].location>=0){let me=Q[H];me===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(me=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(me=M.instanceColor));const ye={};ye.attribute=me,me&&me.data&&(ye.data=me.data),K[H]=ye,k++}s.attributes=K,s.attributesNum=k,s.index=F}function _(){const M=s.newAttributes;for(let L=0,N=M.length;L<N;L++)M[L]=0}function m(M){p(M,0)}function p(M,L){const N=s.newAttributes,F=s.enabledAttributes,K=s.attributeDivisors;N[M]=1,F[M]===0&&(n.enableVertexAttribArray(M),F[M]=1),K[M]!==L&&(n.vertexAttribDivisor(M,L),K[M]=L)}function T(){const M=s.newAttributes,L=s.enabledAttributes;for(let N=0,F=L.length;N<F;N++)L[N]!==M[N]&&(n.disableVertexAttribArray(N),L[N]=0)}function E(M,L,N,F,K,Q,k){k===!0?n.vertexAttribIPointer(M,L,N,K,Q):n.vertexAttribPointer(M,L,N,F,K,Q)}function S(M,L,N,F){_();const K=F.attributes,Q=N.getAttributes(),k=L.defaultAttributeValues;for(const Y in Q){const H=Q[Y];if(H.location>=0){let ue=K[Y];if(ue===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor)),ue!==void 0){const me=ue.normalized,ye=ue.itemSize,Ae=e.get(ue);if(Ae===void 0)continue;const qe=Ae.buffer,ne=Ae.type,le=Ae.bytesPerElement,Te=ne===n.INT||ne===n.UNSIGNED_INT||ue.gpuType===Fu;if(ue.isInterleavedBufferAttribute){const pe=ue.data,Ce=pe.stride,Ue=ue.offset;if(pe.isInstancedInterleavedBuffer){for(let Be=0;Be<H.locationSize;Be++)p(H.location+Be,pe.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Be=0;Be<H.locationSize;Be++)m(H.location+Be);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let Be=0;Be<H.locationSize;Be++)E(H.location+Be,ye/H.locationSize,ne,me,Ce*le,(Ue+ye/H.locationSize*Be)*le,Te)}else{if(ue.isInstancedBufferAttribute){for(let pe=0;pe<H.locationSize;pe++)p(H.location+pe,ue.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let pe=0;pe<H.locationSize;pe++)m(H.location+pe);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let pe=0;pe<H.locationSize;pe++)E(H.location+pe,ye/H.locationSize,ne,me,ye*le,ye/H.locationSize*pe*le,Te)}}else if(k!==void 0){const me=k[Y];if(me!==void 0)switch(me.length){case 2:n.vertexAttrib2fv(H.location,me);break;case 3:n.vertexAttrib3fv(H.location,me);break;case 4:n.vertexAttrib4fv(H.location,me);break;default:n.vertexAttrib1fv(H.location,me)}}}}T()}function w(){D();for(const M in i){const L=i[M];for(const N in L){const F=L[N];for(const K in F)u(F[K].object),delete F[K];delete L[N]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const N in L){const F=L[N];for(const K in F)u(F[K].object),delete F[K];delete L[N]}delete i[M.id]}function R(M){for(const L in i){const N=i[L];if(N[M.id]===void 0)continue;const F=N[M.id];for(const K in F)u(F[K].object),delete F[K];delete N[M.id]}}function D(){v(),o=!0,s!==r&&(s=r,c(s.object))}function v(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:v,dispose:w,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function ry(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];t.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*h[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function sy(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==Nn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const D=R===bo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Ei&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==gi&&!D)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:w,maxSamples:C}}function oy(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new _r,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const T=s?0:i,E=T*4;let S=p.clippingState||null;l.value=S,S=u(g,h,E,d);for(let w=0;w!==E;++w)S[w]=t[w];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,T=h.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,S=d;E!==_;++E,S+=4)o.copy(f[E]).applyMatrix4(T,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function ay(n){let e=new WeakMap;function t(o,a){return a===Sc?o.mapping=vs:a===Mc&&(o.mapping=xs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Sc||a===Mc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ax(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const is=4,Ih=[.125,.215,.35,.446,.526,.582],Mr=20,Fl=new gx,Uh=new it;let Ol=null,Bl=0,zl=0,Hl=!1;const gr=(1+Math.sqrt(5))/2,Jr=1/gr,Nh=[new $(-gr,Jr,0),new $(gr,Jr,0),new $(-Jr,0,gr),new $(Jr,0,gr),new $(0,gr,-Jr),new $(0,gr,Jr),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class Fh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ol=this._renderer.getRenderTarget(),Bl=this._renderer.getActiveCubeFace(),zl=this._renderer.getActiveMipmapLevel(),Hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ol,Bl,zl),this._renderer.xr.enabled=Hl,e.scissorTest=!1,ia(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vs||e.mapping===xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ol=this._renderer.getRenderTarget(),Bl=this._renderer.getActiveCubeFace(),zl=this._renderer.getActiveMipmapLevel(),Hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:bo,format:Nn,colorSpace:ys,depthBuffer:!1},r=Oh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oh(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ly(s)),this._blurMaterial=cy(s,e,t)}return r}_compileMaterial(e){const t=new jn(this._lodPlanes[0],e);this._renderer.compile(t,Fl)}_sceneToCubeUV(e,t,i,r){const a=new bn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Uh),u.toneMapping=Gi,u.autoClear=!1;const d=new Wu({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),g=new jn(new Co,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Uh),_=!0);for(let p=0;p<6;p++){const T=p%3;T===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):T===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const E=this._cubeSize;ia(r,T*E,p>2?E:0,E,E),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===vs||e.mapping===xs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new jn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ia(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Fl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Nh[(r-s-1)%Nh.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new jn(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Mr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Mr;m>Mr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mr}`);const p=[];let T=0;for(let R=0;R<Mr;++R){const D=R/_,v=Math.exp(-D*D/2);p.push(v),R===0?T+=v:R<m&&(T+=2*v)}for(let R=0;R<p.length;R++)p[R]=p[R]/T;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:E}=this;h.dTheta.value=g,h.mipInt.value=E-i;const S=this._sizeLods[r],w=3*S*(r>E-is?r-E+is:0),C=4*(this._cubeSize-S);ia(t,w,C,3*S,2*S),l.setRenderTarget(t),l.render(f,Fl)}}function ly(n){const e=[],t=[],i=[];let r=n;const s=n-is+1+Ih.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-is?l=Ih[o-n+is-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,T=new Float32Array(_*g*d),E=new Float32Array(m*g*d),S=new Float32Array(p*g*d);for(let C=0;C<d;C++){const R=C%3*2/3-1,D=C>2?0:-1,v=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];T.set(v,_*g*C),E.set(h,m*g*C);const M=[C,C,C,C,C,C];S.set(M,p*g*C)}const w=new Ur;w.setAttribute("position",new Qn(T,_)),w.setAttribute("uv",new Qn(E,m)),w.setAttribute("faceIndex",new Qn(S,p)),e.push(w),r>is&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Oh(n,e,t){const i=new Lr(n,e,t);return i.texture.mapping=Xa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ia(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function cy(n,e,t){const i=new Float32Array(Mr),r=new $(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:qu(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Bh(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qu(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function zh(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function qu(){return`

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
	`}function uy(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Sc||l===Mc,u=l===vs||l===xs;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Fh(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new Fh(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function fy(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ns("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function hy(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const T=d.array;_=d.version;for(let E=0,S=T.length;E<S;E+=3){const w=T[E+0],C=T[E+1],R=T[E+2];h.push(w,C,C,R,R,w)}}else if(g!==void 0){const T=g.array;_=g.version;for(let E=0,S=T.length/3-1;E<S;E+=3){const w=E+0,C=E+1,R=E+2;h.push(w,C,C,R,R,w)}}else return;const m=new(Yp(h)?Qp:Jp)(h,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function dy(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,s,h*o),t.update(d,i,1)}function c(h,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,h*o,g),t.update(d,i,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function f(h,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,_,0,g);let p=0;for(let T=0;T<g;T++)p+=d[T]*_[T];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function py(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function my(n,e,t){const i=new WeakMap,r=new St;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let M=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var d=M;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let w=a.attributes.position.count*S,C=1;w>e.maxTextureSize&&(C=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const R=new Float32Array(w*C*4*f),D=new Kp(R,w,C,f);D.type=gi,D.needsUpdate=!0;const v=S*4;for(let L=0;L<f;L++){const N=p[L],F=T[L],K=E[L],Q=w*C*4*L;for(let k=0;k<N.count;k++){const Y=k*v;g===!0&&(r.fromBufferAttribute(N,k),R[Q+Y+0]=r.x,R[Q+Y+1]=r.y,R[Q+Y+2]=r.z,R[Q+Y+3]=0),_===!0&&(r.fromBufferAttribute(F,k),R[Q+Y+4]=r.x,R[Q+Y+5]=r.y,R[Q+Y+6]=r.z,R[Q+Y+7]=0),m===!0&&(r.fromBufferAttribute(K,k),R[Q+Y+8]=r.x,R[Q+Y+9]=r.y,R[Q+Y+10]=r.z,R[Q+Y+11]=K.itemSize===4?r.w:1)}}h={count:f,texture:D,size:new et(w,C)},i.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function _y(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const om=new $t,Hh=new rm(1,1),am=new Kp,lm=new Xv,cm=new nm,Vh=[],kh=[],Gh=new Float32Array(16),Wh=new Float32Array(9),Xh=new Float32Array(4);function Ds(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Vh[r];if(s===void 0&&(s=new Float32Array(r),Vh[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function At(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ya(n,e){let t=kh[e];t===void 0&&(t=new Int32Array(e),kh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function gy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function vy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2fv(this.addr,e),wt(t,e)}}function xy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;n.uniform3fv(this.addr,e),wt(t,e)}}function Sy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4fv(this.addr,e),wt(t,e)}}function My(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(At(t,i))return;Xh.set(i),n.uniformMatrix2fv(this.addr,!1,Xh),wt(t,i)}}function yy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(At(t,i))return;Wh.set(i),n.uniformMatrix3fv(this.addr,!1,Wh),wt(t,i)}}function Ey(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(At(t,i))return;Gh.set(i),n.uniformMatrix4fv(this.addr,!1,Gh),wt(t,i)}}function Ty(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function by(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2iv(this.addr,e),wt(t,e)}}function Ay(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3iv(this.addr,e),wt(t,e)}}function wy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4iv(this.addr,e),wt(t,e)}}function Ry(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Cy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2uiv(this.addr,e),wt(t,e)}}function Py(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3uiv(this.addr,e),wt(t,e)}}function Dy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4uiv(this.addr,e),wt(t,e)}}function Ly(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Hh.compareFunction=qp,s=Hh):s=om,t.setTexture2D(e||s,r)}function Iy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||lm,r)}function Uy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||cm,r)}function Ny(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||am,r)}function Fy(n){switch(n){case 5126:return gy;case 35664:return vy;case 35665:return xy;case 35666:return Sy;case 35674:return My;case 35675:return yy;case 35676:return Ey;case 5124:case 35670:return Ty;case 35667:case 35671:return by;case 35668:case 35672:return Ay;case 35669:case 35673:return wy;case 5125:return Ry;case 36294:return Cy;case 36295:return Py;case 36296:return Dy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ly;case 35679:case 36299:case 36307:return Iy;case 35680:case 36300:case 36308:case 36293:return Uy;case 36289:case 36303:case 36311:case 36292:return Ny}}function Oy(n,e){n.uniform1fv(this.addr,e)}function By(n,e){const t=Ds(e,this.size,2);n.uniform2fv(this.addr,t)}function zy(n,e){const t=Ds(e,this.size,3);n.uniform3fv(this.addr,t)}function Hy(n,e){const t=Ds(e,this.size,4);n.uniform4fv(this.addr,t)}function Vy(n,e){const t=Ds(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ky(n,e){const t=Ds(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Gy(n,e){const t=Ds(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Wy(n,e){n.uniform1iv(this.addr,e)}function Xy(n,e){n.uniform2iv(this.addr,e)}function qy(n,e){n.uniform3iv(this.addr,e)}function Yy(n,e){n.uniform4iv(this.addr,e)}function $y(n,e){n.uniform1uiv(this.addr,e)}function Ky(n,e){n.uniform2uiv(this.addr,e)}function jy(n,e){n.uniform3uiv(this.addr,e)}function Zy(n,e){n.uniform4uiv(this.addr,e)}function Jy(n,e,t){const i=this.cache,r=e.length,s=Ya(t,r);At(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||om,s[o])}function Qy(n,e,t){const i=this.cache,r=e.length,s=Ya(t,r);At(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||lm,s[o])}function eE(n,e,t){const i=this.cache,r=e.length,s=Ya(t,r);At(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||cm,s[o])}function tE(n,e,t){const i=this.cache,r=e.length,s=Ya(t,r);At(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||am,s[o])}function nE(n){switch(n){case 5126:return Oy;case 35664:return By;case 35665:return zy;case 35666:return Hy;case 35674:return Vy;case 35675:return ky;case 35676:return Gy;case 5124:case 35670:return Wy;case 35667:case 35671:return Xy;case 35668:case 35672:return qy;case 35669:case 35673:return Yy;case 5125:return $y;case 36294:return Ky;case 36295:return jy;case 36296:return Zy;case 35678:case 36198:case 36298:case 36306:case 35682:return Jy;case 35679:case 36299:case 36307:return Qy;case 35680:case 36300:case 36308:case 36293:return eE;case 36289:case 36303:case 36311:case 36292:return tE}}class iE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Fy(t.type)}}class rE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=nE(t.type)}}class sE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Vl=/(\w+)(\])?(\[|\.)?/g;function qh(n,e){n.seq.push(e),n.map[e.id]=e}function oE(n,e,t){const i=n.name,r=i.length;for(Vl.lastIndex=0;;){const s=Vl.exec(i),o=Vl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){qh(t,c===void 0?new iE(a,n,e):new rE(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new sE(a),qh(t,f)),t=f}}}class ma{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);oE(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Yh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const aE=37297;let lE=0;function cE(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const $h=new ke;function uE(n){Ke._getMatrix($h,Ke.workingColorSpace,n);const e=`mat3( ${$h.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(n)){case wa:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Kh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+cE(n.getShaderSource(e),o)}else return r}function fE(n,e){const t=uE(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function hE(n,e){let t;switch(e){case _v:t="Linear";break;case gv:t="Reinhard";break;case vv:t="Cineon";break;case xv:t="ACESFilmic";break;case Mv:t="AgX";break;case yv:t="Neutral";break;case Sv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ra=new $;function dE(){Ke.getLuminanceCoefficients(ra);const n=ra.x.toFixed(4),e=ra.y.toFixed(4),t=ra.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function mE(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function _E(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Gs(n){return n!==""}function jh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jc(n){return n.replace(gE,xE)}const vE=new Map;function xE(n,e){let t=Ge[e];if(t===void 0){const i=vE.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Jc(t)}const SE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jh(n){return n.replace(SE,ME)}function ME(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Qh(n){let e=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function yE(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ip?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===K0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ui&&(e="SHADOWMAP_TYPE_VSM"),e}function EE(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case vs:case xs:e="ENVMAP_TYPE_CUBE";break;case Xa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function TE(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case xs:e="ENVMAP_MODE_REFRACTION";break}return e}function bE(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Up:e="ENVMAP_BLENDING_MULTIPLY";break;case pv:e="ENVMAP_BLENDING_MIX";break;case mv:e="ENVMAP_BLENDING_ADD";break}return e}function AE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function wE(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=yE(t),c=EE(t),u=TE(t),f=bE(t),h=AE(t),d=pE(t),g=mE(s),_=r.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gs).join(`
`),p.length>0&&(p+=`
`)):(m=[Qh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),p=[Qh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Gi?hE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,fE("linearToOutputTexel",t.outputColorSpace),dE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gs).join(`
`)),o=Jc(o),o=jh(o,t),o=Zh(o,t),a=Jc(a),a=jh(a,t),a=Zh(a,t),o=Jh(o),a=Jh(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=T+m+o,S=T+p+a,w=Yh(r,r.VERTEX_SHADER,E),C=Yh(r,r.FRAGMENT_SHADER,S);r.attachShader(_,w),r.attachShader(_,C),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function R(L){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(_).trim(),F=r.getShaderInfoLog(w).trim(),K=r.getShaderInfoLog(C).trim();let Q=!0,k=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,w,C);else{const Y=Kh(r,w,"vertex"),H=Kh(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+N+`
`+Y+`
`+H)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(F===""||K==="")&&(k=!1);k&&(L.diagnostics={runnable:Q,programLog:N,vertexShader:{log:F,prefix:m},fragmentShader:{log:K,prefix:p}})}r.deleteShader(w),r.deleteShader(C),D=new ma(r,_),v=_E(r,_)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let v;this.getAttributes=function(){return v===void 0&&R(this),v};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,aE)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lE++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=C,this}let RE=0;class CE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new PE(e),t.set(e,i)),i}}class PE{constructor(e){this.id=RE++,this.code=e,this.usedTimes=0}}function DE(n,e,t,i,r,s,o){const a=new Gu,l=new CE,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,M,L,N,F){const K=N.fog,Q=F.geometry,k=v.isMeshStandardMaterial?N.environment:null,Y=(v.isMeshStandardMaterial?t:e).get(v.envMap||k),H=Y&&Y.mapping===Xa?Y.image.height:null,ue=g[v.type];v.precision!==null&&(d=r.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const me=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ye=me!==void 0?me.length:0;let Ae=0;Q.morphAttributes.position!==void 0&&(Ae=1),Q.morphAttributes.normal!==void 0&&(Ae=2),Q.morphAttributes.color!==void 0&&(Ae=3);let qe,ne,le,Te;if(ue){const nt=qn[ue];qe=nt.vertexShader,ne=nt.fragmentShader}else qe=v.vertexShader,ne=v.fragmentShader,l.update(v),le=l.getVertexShaderID(v),Te=l.getFragmentShaderID(v);const pe=n.getRenderTarget(),Ce=n.state.buffers.depth.getReversed(),Ue=F.isInstancedMesh===!0,Be=F.isBatchedMesh===!0,ut=!!v.map,P=!!v.matcap,U=!!Y,A=!!v.aoMap,ie=!!v.lightMap,j=!!v.bumpMap,J=!!v.normalMap,ee=!!v.displacementMap,se=!!v.emissiveMap,Z=!!v.metalnessMap,y=!!v.roughnessMap,x=v.anisotropy>0,I=v.clearcoat>0,V=v.dispersion>0,W=v.iridescence>0,G=v.sheen>0,fe=v.transmission>0,oe=x&&!!v.anisotropyMap,he=I&&!!v.clearcoatMap,De=I&&!!v.clearcoatNormalMap,ae=I&&!!v.clearcoatRoughnessMap,ge=W&&!!v.iridescenceMap,we=W&&!!v.iridescenceThicknessMap,Le=G&&!!v.sheenColorMap,de=G&&!!v.sheenRoughnessMap,Ne=!!v.specularMap,ze=!!v.specularColorMap,tt=!!v.specularIntensityMap,O=fe&&!!v.transmissionMap,ve=fe&&!!v.thicknessMap,te=!!v.gradientMap,re=!!v.alphaMap,Me=v.alphaTest>0,Se=!!v.alphaHash,Ve=!!v.extensions;let _t=Gi;v.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(_t=n.toneMapping);const It={shaderID:ue,shaderType:v.type,shaderName:v.name,vertexShader:qe,fragmentShader:ne,defines:v.defines,customVertexShaderID:le,customFragmentShaderID:Te,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Be,batchingColor:Be&&F._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&F.instanceColor!==null,instancingMorph:Ue&&F.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:pe===null?n.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:ys,alphaToCoverage:!!v.alphaToCoverage,map:ut,matcap:P,envMap:U,envMapMode:U&&Y.mapping,envMapCubeUVHeight:H,aoMap:A,lightMap:ie,bumpMap:j,normalMap:J,displacementMap:h&&ee,emissiveMap:se,normalMapObjectSpace:J&&v.normalMapType===wv,normalMapTangentSpace:J&&v.normalMapType===Av,metalnessMap:Z,roughnessMap:y,anisotropy:x,anisotropyMap:oe,clearcoat:I,clearcoatMap:he,clearcoatNormalMap:De,clearcoatRoughnessMap:ae,dispersion:V,iridescence:W,iridescenceMap:ge,iridescenceThicknessMap:we,sheen:G,sheenColorMap:Le,sheenRoughnessMap:de,specularMap:Ne,specularColorMap:ze,specularIntensityMap:tt,transmission:fe,transmissionMap:O,thicknessMap:ve,gradientMap:te,opaque:v.transparent===!1&&v.blending===fs&&v.alphaToCoverage===!1,alphaMap:re,alphaTest:Me,alphaHash:Se,combine:v.combine,mapUv:ut&&_(v.map.channel),aoMapUv:A&&_(v.aoMap.channel),lightMapUv:ie&&_(v.lightMap.channel),bumpMapUv:j&&_(v.bumpMap.channel),normalMapUv:J&&_(v.normalMap.channel),displacementMapUv:ee&&_(v.displacementMap.channel),emissiveMapUv:se&&_(v.emissiveMap.channel),metalnessMapUv:Z&&_(v.metalnessMap.channel),roughnessMapUv:y&&_(v.roughnessMap.channel),anisotropyMapUv:oe&&_(v.anisotropyMap.channel),clearcoatMapUv:he&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:De&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:we&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:de&&_(v.sheenRoughnessMap.channel),specularMapUv:Ne&&_(v.specularMap.channel),specularColorMapUv:ze&&_(v.specularColorMap.channel),specularIntensityMapUv:tt&&_(v.specularIntensityMap.channel),transmissionMapUv:O&&_(v.transmissionMap.channel),thicknessMapUv:ve&&_(v.thicknessMap.channel),alphaMapUv:re&&_(v.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(J||x),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Q.attributes.uv&&(ut||re),fog:!!K,useFog:v.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ce,skinning:F.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Ae,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:_t,decodeVideoTexture:ut&&v.map.isVideoTexture===!0&&Ke.getTransfer(v.map.colorSpace)===st,decodeVideoTextureEmissive:se&&v.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(v.emissiveMap.colorSpace)===st,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Yn,flipSided:v.side===en,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ve&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&v.extensions.multiDraw===!0||Be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return It.vertexUv1s=c.has(1),It.vertexUv2s=c.has(2),It.vertexUv3s=c.has(3),c.clear(),It}function p(v){const M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)M.push(L),M.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(T(M,v),E(M,v),M.push(n.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function T(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function E(v,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),v.push(a.mask)}function S(v){const M=g[v.type];let L;if(M){const N=qn[M];L=ix.clone(N.uniforms)}else L=v.uniforms;return L}function w(v,M){let L;for(let N=0,F=u.length;N<F;N++){const K=u[N];if(K.cacheKey===M){L=K,++L.usedTimes;break}}return L===void 0&&(L=new wE(n,M,v,s),u.push(L)),L}function C(v){if(--v.usedTimes===0){const M=u.indexOf(v);u[M]=u[u.length-1],u.pop(),v.destroy()}}function R(v){l.remove(v)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:w,releaseProgram:C,releaseShaderCache:R,programs:u,dispose:D}}function LE(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function IE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ed(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function td(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,d,g,_,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function a(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||IE),i.length>1&&i.sort(h||ed),r.length>1&&r.sort(h||ed)}function u(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function UE(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new td,n.set(i,[o])):r>=s.length?(o=new td,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function NE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new it};break;case"SpotLight":t={position:new $,direction:new $,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new $,halfWidth:new $,halfHeight:new $};break}return n[e.id]=t,t}}}function FE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let OE=0;function BE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function zE(n){const e=new NE,t=FE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new $);const r=new $,s=new Mt,o=new Mt;function a(c){let u=0,f=0,h=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,T=0,E=0,S=0,w=0,C=0,R=0;c.sort(BE);for(let v=0,M=c.length;v<M;v++){const L=c[v],N=L.color,F=L.intensity,K=L.distance,Q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=N.r*F,f+=N.g*F,h+=N.b*F;else if(L.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(L.sh.coefficients[k],F);R++}else if(L.isDirectionalLight){const k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Y=L.shadow,H=t.get(L);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,i.directionalShadow[d]=H,i.directionalShadowMap[d]=Q,i.directionalShadowMatrix[d]=L.shadow.matrix,T++}i.directional[d]=k,d++}else if(L.isSpotLight){const k=e.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(N).multiplyScalar(F),k.distance=K,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,i.spot[_]=k;const Y=L.shadow;if(L.map&&(i.spotLightMap[w]=L.map,w++,Y.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[_]=Y.matrix,L.castShadow){const H=t.get(L);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,i.spotShadow[_]=H,i.spotShadowMap[_]=Q,S++}_++}else if(L.isRectAreaLight){const k=e.get(L);k.color.copy(N).multiplyScalar(F),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=k,m++}else if(L.isPointLight){const k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),k.distance=L.distance,k.decay=L.decay,L.castShadow){const Y=L.shadow,H=t.get(L);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,H.shadowCameraNear=Y.camera.near,H.shadowCameraFar=Y.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=Q,i.pointShadowMatrix[g]=L.shadow.matrix,E++}i.point[g]=k,g++}else if(L.isHemisphereLight){const k=e.get(L);k.skyColor.copy(L.color).multiplyScalar(F),k.groundColor.copy(L.groundColor).multiplyScalar(F),i.hemi[p]=k,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const D=i.hash;(D.directionalLength!==d||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==T||D.numPointShadows!==E||D.numSpotShadows!==S||D.numSpotMaps!==w||D.numLightProbes!==R)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=S+w-C,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=R,D.directionalLength=d,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=T,D.numPointShadows=E,D.numSpotShadows=S,D.numSpotMaps=w,D.numLightProbes=R,i.version=OE++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const E=c[p];if(E.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(E.isSpotLight){const S=i.spot[d];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(E.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(E.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),h++}else if(E.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function nd(n){const e=new zE(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function HE(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new nd(n),e.set(r,[a])):s>=o.length?(a=new nd(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const VE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kE=`uniform sampler2D shadow_pass;
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
}`;function GE(n,e,t){let i=new im;const r=new et,s=new et,o=new St,a=new fx({depthPacking:bv}),l=new hx,c={},u=t.maxTextureSize,f={[Ki]:en,[en]:Ki,[Yn]:Yn},h=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:VE,fragmentShader:kE}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ur;g.setAttribute("position",new Qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new jn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ip;let p=this.type;this.render=function(C,R,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const v=n.getRenderTarget(),M=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),N=n.state;N.setBlending(ki),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const F=p!==ui&&this.type===ui,K=p===ui&&this.type!==ui;for(let Q=0,k=C.length;Q<k;Q++){const Y=C[Q],H=Y.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const ue=H.getFrameExtents();if(r.multiply(ue),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ue.x),r.x=s.x*ue.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ue.y),r.y=s.y*ue.y,H.mapSize.y=s.y)),H.map===null||F===!0||K===!0){const ye=this.type!==ui?{minFilter:Bn,magFilter:Bn}:{};H.map!==null&&H.map.dispose(),H.map=new Lr(r.x,r.y,ye),H.map.texture.name=Y.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const me=H.getViewportCount();for(let ye=0;ye<me;ye++){const Ae=H.getViewport(ye);o.set(s.x*Ae.x,s.y*Ae.y,s.x*Ae.z,s.y*Ae.w),N.viewport(o),H.updateMatrices(Y,ye),i=H.getFrustum(),S(R,D,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===ui&&T(H,D),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(v,M,L)};function T(C,R){const D=e.update(_);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Lr(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(R,null,D,h,_,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(R,null,D,d,_,null)}function E(C,R,D,v){let M=null;const L=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)M=L;else if(M=D.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const N=M.uuid,F=R.uuid;let K=c[N];K===void 0&&(K={},c[N]=K);let Q=K[F];Q===void 0&&(Q=M.clone(),K[F]=Q,R.addEventListener("dispose",w)),M=Q}if(M.visible=R.visible,M.wireframe=R.wireframe,v===ui?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:f[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=n.properties.get(M);N.light=D}return M}function S(C,R,D,v,M){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===ui)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const F=e.update(C),K=C.material;if(Array.isArray(K)){const Q=F.groups;for(let k=0,Y=Q.length;k<Y;k++){const H=Q[k],ue=K[H.materialIndex];if(ue&&ue.visible){const me=E(C,ue,v,M);C.onBeforeShadow(n,C,R,D,F,me,H),n.renderBufferDirect(D,null,F,me,C,H),C.onAfterShadow(n,C,R,D,F,me,H)}}}else if(K.visible){const Q=E(C,K,v,M);C.onBeforeShadow(n,C,R,D,F,Q,null),n.renderBufferDirect(D,null,F,Q,C,null),C.onAfterShadow(n,C,R,D,F,Q,null)}}const N=C.children;for(let F=0,K=N.length;F<K;F++)S(N[F],R,D,v,M)}function w(C){C.target.removeEventListener("dispose",w);for(const D in c){const v=c[D],M=C.target.uuid;M in v&&(v[M].dispose(),delete v[M])}}}const WE={[dc]:pc,[mc]:vc,[_c]:xc,[gs]:gc,[pc]:dc,[vc]:mc,[xc]:_c,[gc]:gs};function XE(n,e){function t(){let O=!1;const ve=new St;let te=null;const re=new St(0,0,0,0);return{setMask:function(Me){te!==Me&&!O&&(n.colorMask(Me,Me,Me,Me),te=Me)},setLocked:function(Me){O=Me},setClear:function(Me,Se,Ve,_t,It){It===!0&&(Me*=_t,Se*=_t,Ve*=_t),ve.set(Me,Se,Ve,_t),re.equals(ve)===!1&&(n.clearColor(Me,Se,Ve,_t),re.copy(ve))},reset:function(){O=!1,te=null,re.set(-1,0,0,0)}}}function i(){let O=!1,ve=!1,te=null,re=null,Me=null;return{setReversed:function(Se){if(ve!==Se){const Ve=e.get("EXT_clip_control");ve?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT);const _t=Me;Me=null,this.setClear(_t)}ve=Se},getReversed:function(){return ve},setTest:function(Se){Se?pe(n.DEPTH_TEST):Ce(n.DEPTH_TEST)},setMask:function(Se){te!==Se&&!O&&(n.depthMask(Se),te=Se)},setFunc:function(Se){if(ve&&(Se=WE[Se]),re!==Se){switch(Se){case dc:n.depthFunc(n.NEVER);break;case pc:n.depthFunc(n.ALWAYS);break;case mc:n.depthFunc(n.LESS);break;case gs:n.depthFunc(n.LEQUAL);break;case _c:n.depthFunc(n.EQUAL);break;case gc:n.depthFunc(n.GEQUAL);break;case vc:n.depthFunc(n.GREATER);break;case xc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}re=Se}},setLocked:function(Se){O=Se},setClear:function(Se){Me!==Se&&(ve&&(Se=1-Se),n.clearDepth(Se),Me=Se)},reset:function(){O=!1,te=null,re=null,Me=null,ve=!1}}}function r(){let O=!1,ve=null,te=null,re=null,Me=null,Se=null,Ve=null,_t=null,It=null;return{setTest:function(nt){O||(nt?pe(n.STENCIL_TEST):Ce(n.STENCIL_TEST))},setMask:function(nt){ve!==nt&&!O&&(n.stencilMask(nt),ve=nt)},setFunc:function(nt,Cn,ni){(te!==nt||re!==Cn||Me!==ni)&&(n.stencilFunc(nt,Cn,ni),te=nt,re=Cn,Me=ni)},setOp:function(nt,Cn,ni){(Se!==nt||Ve!==Cn||_t!==ni)&&(n.stencilOp(nt,Cn,ni),Se=nt,Ve=Cn,_t=ni)},setLocked:function(nt){O=nt},setClear:function(nt){It!==nt&&(n.clearStencil(nt),It=nt)},reset:function(){O=!1,ve=null,te=null,re=null,Me=null,Se=null,Ve=null,_t=null,It=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,T=null,E=null,S=null,w=null,C=null,R=new it(0,0,0),D=0,v=!1,M=null,L=null,N=null,F=null,K=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,Y=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(H)[1]),k=Y>=1):H.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),k=Y>=2);let ue=null,me={};const ye=n.getParameter(n.SCISSOR_BOX),Ae=n.getParameter(n.VIEWPORT),qe=new St().fromArray(ye),ne=new St().fromArray(Ae);function le(O,ve,te,re){const Me=new Uint8Array(4),Se=n.createTexture();n.bindTexture(O,Se),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ve=0;Ve<te;Ve++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(ve,0,n.RGBA,1,1,re,0,n.RGBA,n.UNSIGNED_BYTE,Me):n.texImage2D(ve+Ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Me);return Se}const Te={};Te[n.TEXTURE_2D]=le(n.TEXTURE_2D,n.TEXTURE_2D,1),Te[n.TEXTURE_CUBE_MAP]=le(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[n.TEXTURE_2D_ARRAY]=le(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Te[n.TEXTURE_3D]=le(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pe(n.DEPTH_TEST),o.setFunc(gs),j(!1),J(sh),pe(n.CULL_FACE),A(ki);function pe(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function Ce(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function Ue(O,ve){return f[O]!==ve?(n.bindFramebuffer(O,ve),f[O]=ve,O===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ve),O===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ve),!0):!1}function Be(O,ve){let te=d,re=!1;if(O){te=h.get(ve),te===void 0&&(te=[],h.set(ve,te));const Me=O.textures;if(te.length!==Me.length||te[0]!==n.COLOR_ATTACHMENT0){for(let Se=0,Ve=Me.length;Se<Ve;Se++)te[Se]=n.COLOR_ATTACHMENT0+Se;te.length=Me.length,re=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,re=!0);re&&n.drawBuffers(te)}function ut(O){return g!==O?(n.useProgram(O),g=O,!0):!1}const P={[Sr]:n.FUNC_ADD,[Z0]:n.FUNC_SUBTRACT,[J0]:n.FUNC_REVERSE_SUBTRACT};P[Q0]=n.MIN,P[ev]=n.MAX;const U={[tv]:n.ZERO,[nv]:n.ONE,[iv]:n.SRC_COLOR,[fc]:n.SRC_ALPHA,[cv]:n.SRC_ALPHA_SATURATE,[av]:n.DST_COLOR,[sv]:n.DST_ALPHA,[rv]:n.ONE_MINUS_SRC_COLOR,[hc]:n.ONE_MINUS_SRC_ALPHA,[lv]:n.ONE_MINUS_DST_COLOR,[ov]:n.ONE_MINUS_DST_ALPHA,[uv]:n.CONSTANT_COLOR,[fv]:n.ONE_MINUS_CONSTANT_COLOR,[hv]:n.CONSTANT_ALPHA,[dv]:n.ONE_MINUS_CONSTANT_ALPHA};function A(O,ve,te,re,Me,Se,Ve,_t,It,nt){if(O===ki){_===!0&&(Ce(n.BLEND),_=!1);return}if(_===!1&&(pe(n.BLEND),_=!0),O!==j0){if(O!==m||nt!==v){if((p!==Sr||S!==Sr)&&(n.blendEquation(n.FUNC_ADD),p=Sr,S=Sr),nt)switch(O){case fs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case oh:n.blendFunc(n.ONE,n.ONE);break;case ah:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case lh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case fs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case oh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ah:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case lh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}T=null,E=null,w=null,C=null,R.set(0,0,0),D=0,m=O,v=nt}return}Me=Me||ve,Se=Se||te,Ve=Ve||re,(ve!==p||Me!==S)&&(n.blendEquationSeparate(P[ve],P[Me]),p=ve,S=Me),(te!==T||re!==E||Se!==w||Ve!==C)&&(n.blendFuncSeparate(U[te],U[re],U[Se],U[Ve]),T=te,E=re,w=Se,C=Ve),(_t.equals(R)===!1||It!==D)&&(n.blendColor(_t.r,_t.g,_t.b,It),R.copy(_t),D=It),m=O,v=!1}function ie(O,ve){O.side===Yn?Ce(n.CULL_FACE):pe(n.CULL_FACE);let te=O.side===en;ve&&(te=!te),j(te),O.blending===fs&&O.transparent===!1?A(ki):A(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const re=O.stencilWrite;a.setTest(re),re&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),se(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?pe(n.SAMPLE_ALPHA_TO_COVERAGE):Ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function j(O){M!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),M=O)}function J(O){O!==Y0?(pe(n.CULL_FACE),O!==L&&(O===sh?n.cullFace(n.BACK):O===$0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ce(n.CULL_FACE),L=O}function ee(O){O!==N&&(k&&n.lineWidth(O),N=O)}function se(O,ve,te){O?(pe(n.POLYGON_OFFSET_FILL),(F!==ve||K!==te)&&(n.polygonOffset(ve,te),F=ve,K=te)):Ce(n.POLYGON_OFFSET_FILL)}function Z(O){O?pe(n.SCISSOR_TEST):Ce(n.SCISSOR_TEST)}function y(O){O===void 0&&(O=n.TEXTURE0+Q-1),ue!==O&&(n.activeTexture(O),ue=O)}function x(O,ve,te){te===void 0&&(ue===null?te=n.TEXTURE0+Q-1:te=ue);let re=me[te];re===void 0&&(re={type:void 0,texture:void 0},me[te]=re),(re.type!==O||re.texture!==ve)&&(ue!==te&&(n.activeTexture(te),ue=te),n.bindTexture(O,ve||Te[O]),re.type=O,re.texture=ve)}function I(){const O=me[ue];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function V(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function W(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function G(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function De(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ae(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ge(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function we(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Le(O){qe.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),qe.copy(O))}function de(O){ne.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),ne.copy(O))}function Ne(O,ve){let te=c.get(ve);te===void 0&&(te=new WeakMap,c.set(ve,te));let re=te.get(O);re===void 0&&(re=n.getUniformBlockIndex(ve,O.name),te.set(O,re))}function ze(O,ve){const re=c.get(ve).get(O);l.get(ve)!==re&&(n.uniformBlockBinding(ve,re,O.__bindingPointIndex),l.set(ve,re))}function tt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ue=null,me={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,T=null,E=null,S=null,w=null,C=null,R=new it(0,0,0),D=0,v=!1,M=null,L=null,N=null,F=null,K=null,qe.set(0,0,n.canvas.width,n.canvas.height),ne.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:pe,disable:Ce,bindFramebuffer:Ue,drawBuffers:Be,useProgram:ut,setBlending:A,setMaterial:ie,setFlipSided:j,setCullFace:J,setLineWidth:ee,setPolygonOffset:se,setScissorTest:Z,activeTexture:y,bindTexture:x,unbindTexture:I,compressedTexImage2D:V,compressedTexImage3D:W,texImage2D:ge,texImage3D:we,updateUBOMapping:Ne,uniformBlockBinding:ze,texStorage2D:De,texStorage3D:ae,texSubImage2D:G,texSubImage3D:fe,compressedTexSubImage2D:oe,compressedTexSubImage3D:he,scissor:Le,viewport:de,reset:tt}}function qE(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,x){return d?new OffscreenCanvas(y,x):po("canvas")}function _(y,x,I){let V=1;const W=Z(y);if((W.width>I||W.height>I)&&(V=I/Math.max(W.width,W.height)),V<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const G=Math.floor(V*W.width),fe=Math.floor(V*W.height);f===void 0&&(f=g(G,fe));const oe=x?g(G,fe):f;return oe.width=G,oe.height=fe,oe.getContext("2d").drawImage(y,0,0,G,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+G+"x"+fe+")."),oe}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),y;return y}function m(y){return y.generateMipmaps}function p(y){n.generateMipmap(y)}function T(y){return y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?n.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(y,x,I,V,W=!1){if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let G=x;if(x===n.RED&&(I===n.FLOAT&&(G=n.R32F),I===n.HALF_FLOAT&&(G=n.R16F),I===n.UNSIGNED_BYTE&&(G=n.R8)),x===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(G=n.R8UI),I===n.UNSIGNED_SHORT&&(G=n.R16UI),I===n.UNSIGNED_INT&&(G=n.R32UI),I===n.BYTE&&(G=n.R8I),I===n.SHORT&&(G=n.R16I),I===n.INT&&(G=n.R32I)),x===n.RG&&(I===n.FLOAT&&(G=n.RG32F),I===n.HALF_FLOAT&&(G=n.RG16F),I===n.UNSIGNED_BYTE&&(G=n.RG8)),x===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(G=n.RG8UI),I===n.UNSIGNED_SHORT&&(G=n.RG16UI),I===n.UNSIGNED_INT&&(G=n.RG32UI),I===n.BYTE&&(G=n.RG8I),I===n.SHORT&&(G=n.RG16I),I===n.INT&&(G=n.RG32I)),x===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(G=n.RGB8UI),I===n.UNSIGNED_SHORT&&(G=n.RGB16UI),I===n.UNSIGNED_INT&&(G=n.RGB32UI),I===n.BYTE&&(G=n.RGB8I),I===n.SHORT&&(G=n.RGB16I),I===n.INT&&(G=n.RGB32I)),x===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(G=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(G=n.RGBA16UI),I===n.UNSIGNED_INT&&(G=n.RGBA32UI),I===n.BYTE&&(G=n.RGBA8I),I===n.SHORT&&(G=n.RGBA16I),I===n.INT&&(G=n.RGBA32I)),x===n.RGB&&I===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),x===n.RGBA){const fe=W?wa:Ke.getTransfer(V);I===n.FLOAT&&(G=n.RGBA32F),I===n.HALF_FLOAT&&(G=n.RGBA16F),I===n.UNSIGNED_BYTE&&(G=fe===st?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function S(y,x){let I;return y?x===null||x===Dr||x===Ss?I=n.DEPTH24_STENCIL8:x===gi?I=n.DEPTH32F_STENCIL8:x===ho&&(I=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Dr||x===Ss?I=n.DEPTH_COMPONENT24:x===gi?I=n.DEPTH_COMPONENT32F:x===ho&&(I=n.DEPTH_COMPONENT16),I}function w(y,x){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==Bn&&y.minFilter!==Kn?Math.log2(Math.max(x.width,x.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?x.mipmaps.length:1}function C(y){const x=y.target;x.removeEventListener("dispose",C),D(x),x.isVideoTexture&&u.delete(x)}function R(y){const x=y.target;x.removeEventListener("dispose",R),M(x)}function D(y){const x=i.get(y);if(x.__webglInit===void 0)return;const I=y.source,V=h.get(I);if(V){const W=V[x.__cacheKey];W.usedTimes--,W.usedTimes===0&&v(y),Object.keys(V).length===0&&h.delete(I)}i.remove(y)}function v(y){const x=i.get(y);n.deleteTexture(x.__webglTexture);const I=y.source,V=h.get(I);delete V[x.__cacheKey],o.memory.textures--}function M(y){const x=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(x.__webglFramebuffer[V]))for(let W=0;W<x.__webglFramebuffer[V].length;W++)n.deleteFramebuffer(x.__webglFramebuffer[V][W]);else n.deleteFramebuffer(x.__webglFramebuffer[V]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[V])}else{if(Array.isArray(x.__webglFramebuffer))for(let V=0;V<x.__webglFramebuffer.length;V++)n.deleteFramebuffer(x.__webglFramebuffer[V]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let V=0;V<x.__webglColorRenderbuffer.length;V++)x.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[V]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const I=y.textures;for(let V=0,W=I.length;V<W;V++){const G=i.get(I[V]);G.__webglTexture&&(n.deleteTexture(G.__webglTexture),o.memory.textures--),i.remove(I[V])}i.remove(y)}let L=0;function N(){L=0}function F(){const y=L;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),L+=1,y}function K(y){const x=[];return x.push(y.wrapS),x.push(y.wrapT),x.push(y.wrapR||0),x.push(y.magFilter),x.push(y.minFilter),x.push(y.anisotropy),x.push(y.internalFormat),x.push(y.format),x.push(y.type),x.push(y.generateMipmaps),x.push(y.premultiplyAlpha),x.push(y.flipY),x.push(y.unpackAlignment),x.push(y.colorSpace),x.join()}function Q(y,x){const I=i.get(y);if(y.isVideoTexture&&ee(y),y.isRenderTargetTexture===!1&&y.version>0&&I.__version!==y.version){const V=y.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(I,y,x);return}}t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+x)}function k(y,x){const I=i.get(y);if(y.version>0&&I.__version!==y.version){ne(I,y,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+x)}function Y(y,x){const I=i.get(y);if(y.version>0&&I.__version!==y.version){ne(I,y,x);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+x)}function H(y,x){const I=i.get(y);if(y.version>0&&I.__version!==y.version){le(I,y,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+x)}const ue={[yc]:n.REPEAT,[yr]:n.CLAMP_TO_EDGE,[Ec]:n.MIRRORED_REPEAT},me={[Bn]:n.NEAREST,[Ev]:n.NEAREST_MIPMAP_NEAREST,[Oo]:n.NEAREST_MIPMAP_LINEAR,[Kn]:n.LINEAR,[dl]:n.LINEAR_MIPMAP_NEAREST,[Er]:n.LINEAR_MIPMAP_LINEAR},ye={[Rv]:n.NEVER,[Uv]:n.ALWAYS,[Cv]:n.LESS,[qp]:n.LEQUAL,[Pv]:n.EQUAL,[Iv]:n.GEQUAL,[Dv]:n.GREATER,[Lv]:n.NOTEQUAL};function Ae(y,x){if(x.type===gi&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Kn||x.magFilter===dl||x.magFilter===Oo||x.magFilter===Er||x.minFilter===Kn||x.minFilter===dl||x.minFilter===Oo||x.minFilter===Er)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,ue[x.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,ue[x.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,ue[x.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,me[x.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,me[x.minFilter]),x.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,ye[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Bn||x.minFilter!==Oo&&x.minFilter!==Er||x.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(y,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function qe(y,x){let I=!1;y.__webglInit===void 0&&(y.__webglInit=!0,x.addEventListener("dispose",C));const V=x.source;let W=h.get(V);W===void 0&&(W={},h.set(V,W));const G=K(x);if(G!==y.__cacheKey){W[G]===void 0&&(W[G]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),W[G].usedTimes++;const fe=W[y.__cacheKey];fe!==void 0&&(W[y.__cacheKey].usedTimes--,fe.usedTimes===0&&v(x)),y.__cacheKey=G,y.__webglTexture=W[G].texture}return I}function ne(y,x,I){let V=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(V=n.TEXTURE_3D);const W=qe(y,x),G=x.source;t.bindTexture(V,y.__webglTexture,n.TEXTURE0+I);const fe=i.get(G);if(G.version!==fe.__version||W===!0){t.activeTexture(n.TEXTURE0+I);const oe=Ke.getPrimaries(Ke.workingColorSpace),he=x.colorSpace===Oi?null:Ke.getPrimaries(x.colorSpace),De=x.colorSpace===Oi||oe===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let ae=_(x.image,!1,r.maxTextureSize);ae=se(x,ae);const ge=s.convert(x.format,x.colorSpace),we=s.convert(x.type);let Le=E(x.internalFormat,ge,we,x.colorSpace,x.isVideoTexture);Ae(V,x);let de;const Ne=x.mipmaps,ze=x.isVideoTexture!==!0,tt=fe.__version===void 0||W===!0,O=G.dataReady,ve=w(x,ae);if(x.isDepthTexture)Le=S(x.format===Ms,x.type),tt&&(ze?t.texStorage2D(n.TEXTURE_2D,1,Le,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,Le,ae.width,ae.height,0,ge,we,null));else if(x.isDataTexture)if(Ne.length>0){ze&&tt&&t.texStorage2D(n.TEXTURE_2D,ve,Le,Ne[0].width,Ne[0].height);for(let te=0,re=Ne.length;te<re;te++)de=Ne[te],ze?O&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,de.width,de.height,ge,we,de.data):t.texImage2D(n.TEXTURE_2D,te,Le,de.width,de.height,0,ge,we,de.data);x.generateMipmaps=!1}else ze?(tt&&t.texStorage2D(n.TEXTURE_2D,ve,Le,ae.width,ae.height),O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae.width,ae.height,ge,we,ae.data)):t.texImage2D(n.TEXTURE_2D,0,Le,ae.width,ae.height,0,ge,we,ae.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ze&&tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,Le,Ne[0].width,Ne[0].height,ae.depth);for(let te=0,re=Ne.length;te<re;te++)if(de=Ne[te],x.format!==Nn)if(ge!==null)if(ze){if(O)if(x.layerUpdates.size>0){const Me=Lh(de.width,de.height,x.format,x.type);for(const Se of x.layerUpdates){const Ve=de.data.subarray(Se*Me/de.data.BYTES_PER_ELEMENT,(Se+1)*Me/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,Se,de.width,de.height,1,ge,Ve)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,de.width,de.height,ae.depth,ge,de.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,Le,de.width,de.height,ae.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,de.width,de.height,ae.depth,ge,we,de.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,Le,de.width,de.height,ae.depth,0,ge,we,de.data)}else{ze&&tt&&t.texStorage2D(n.TEXTURE_2D,ve,Le,Ne[0].width,Ne[0].height);for(let te=0,re=Ne.length;te<re;te++)de=Ne[te],x.format!==Nn?ge!==null?ze?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,de.width,de.height,ge,de.data):t.compressedTexImage2D(n.TEXTURE_2D,te,Le,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?O&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,de.width,de.height,ge,we,de.data):t.texImage2D(n.TEXTURE_2D,te,Le,de.width,de.height,0,ge,we,de.data)}else if(x.isDataArrayTexture)if(ze){if(tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,Le,ae.width,ae.height,ae.depth),O)if(x.layerUpdates.size>0){const te=Lh(ae.width,ae.height,x.format,x.type);for(const re of x.layerUpdates){const Me=ae.data.subarray(re*te/ae.data.BYTES_PER_ELEMENT,(re+1)*te/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,re,ae.width,ae.height,1,ge,we,Me)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,ge,we,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,ae.width,ae.height,ae.depth,0,ge,we,ae.data);else if(x.isData3DTexture)ze?(tt&&t.texStorage3D(n.TEXTURE_3D,ve,Le,ae.width,ae.height,ae.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,ge,we,ae.data)):t.texImage3D(n.TEXTURE_3D,0,Le,ae.width,ae.height,ae.depth,0,ge,we,ae.data);else if(x.isFramebufferTexture){if(tt)if(ze)t.texStorage2D(n.TEXTURE_2D,ve,Le,ae.width,ae.height);else{let te=ae.width,re=ae.height;for(let Me=0;Me<ve;Me++)t.texImage2D(n.TEXTURE_2D,Me,Le,te,re,0,ge,we,null),te>>=1,re>>=1}}else if(Ne.length>0){if(ze&&tt){const te=Z(Ne[0]);t.texStorage2D(n.TEXTURE_2D,ve,Le,te.width,te.height)}for(let te=0,re=Ne.length;te<re;te++)de=Ne[te],ze?O&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,ge,we,de):t.texImage2D(n.TEXTURE_2D,te,Le,ge,we,de);x.generateMipmaps=!1}else if(ze){if(tt){const te=Z(ae);t.texStorage2D(n.TEXTURE_2D,ve,Le,te.width,te.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,we,ae)}else t.texImage2D(n.TEXTURE_2D,0,Le,ge,we,ae);m(x)&&p(V),fe.__version=G.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function le(y,x,I){if(x.image.length!==6)return;const V=qe(y,x),W=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+I);const G=i.get(W);if(W.version!==G.__version||V===!0){t.activeTexture(n.TEXTURE0+I);const fe=Ke.getPrimaries(Ke.workingColorSpace),oe=x.colorSpace===Oi?null:Ke.getPrimaries(x.colorSpace),he=x.colorSpace===Oi||fe===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const De=x.isCompressedTexture||x.image[0].isCompressedTexture,ae=x.image[0]&&x.image[0].isDataTexture,ge=[];for(let re=0;re<6;re++)!De&&!ae?ge[re]=_(x.image[re],!0,r.maxCubemapSize):ge[re]=ae?x.image[re].image:x.image[re],ge[re]=se(x,ge[re]);const we=ge[0],Le=s.convert(x.format,x.colorSpace),de=s.convert(x.type),Ne=E(x.internalFormat,Le,de,x.colorSpace),ze=x.isVideoTexture!==!0,tt=G.__version===void 0||V===!0,O=W.dataReady;let ve=w(x,we);Ae(n.TEXTURE_CUBE_MAP,x);let te;if(De){ze&&tt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,Ne,we.width,we.height);for(let re=0;re<6;re++){te=ge[re].mipmaps;for(let Me=0;Me<te.length;Me++){const Se=te[Me];x.format!==Nn?Le!==null?ze?O&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Me,0,0,Se.width,Se.height,Le,Se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Me,Ne,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Me,0,0,Se.width,Se.height,Le,de,Se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Me,Ne,Se.width,Se.height,0,Le,de,Se.data)}}}else{if(te=x.mipmaps,ze&&tt){te.length>0&&ve++;const re=Z(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,Ne,re.width,re.height)}for(let re=0;re<6;re++)if(ae){ze?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ge[re].width,ge[re].height,Le,de,ge[re].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ne,ge[re].width,ge[re].height,0,Le,de,ge[re].data);for(let Me=0;Me<te.length;Me++){const Ve=te[Me].image[re].image;ze?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Me+1,0,0,Ve.width,Ve.height,Le,de,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Me+1,Ne,Ve.width,Ve.height,0,Le,de,Ve.data)}}else{ze?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Le,de,ge[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ne,Le,de,ge[re]);for(let Me=0;Me<te.length;Me++){const Se=te[Me];ze?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Me+1,0,0,Le,de,Se.image[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Me+1,Ne,Le,de,Se.image[re])}}}m(x)&&p(n.TEXTURE_CUBE_MAP),G.__version=W.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function Te(y,x,I,V,W,G){const fe=s.convert(I.format,I.colorSpace),oe=s.convert(I.type),he=E(I.internalFormat,fe,oe,I.colorSpace),De=i.get(x),ae=i.get(I);if(ae.__renderTarget=x,!De.__hasExternalTextures){const ge=Math.max(1,x.width>>G),we=Math.max(1,x.height>>G);W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?t.texImage3D(W,G,he,ge,we,x.depth,0,fe,oe,null):t.texImage2D(W,G,he,ge,we,0,fe,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),J(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,W,ae.__webglTexture,0,j(x)):(W===n.TEXTURE_2D||W>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,W,ae.__webglTexture,G),t.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(y,x,I){if(n.bindRenderbuffer(n.RENDERBUFFER,y),x.depthBuffer){const V=x.depthTexture,W=V&&V.isDepthTexture?V.type:null,G=S(x.stencilBuffer,W),fe=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=j(x);J(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,G,x.width,x.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,G,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,G,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,y)}else{const V=x.textures;for(let W=0;W<V.length;W++){const G=V[W],fe=s.convert(G.format,G.colorSpace),oe=s.convert(G.type),he=E(G.internalFormat,fe,oe,G.colorSpace),De=j(x);I&&J(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,De,he,x.width,x.height):J(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,De,he,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,he,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ce(y,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=i.get(x.depthTexture);V.__renderTarget=x,(!V.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Q(x.depthTexture,0);const W=V.__webglTexture,G=j(x);if(x.depthTexture.format===hs)J(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0);else if(x.depthTexture.format===Ms)J(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function Ue(y){const x=i.get(y),I=y.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==y.depthTexture){const V=y.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),V){const W=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,V.removeEventListener("dispose",W)};V.addEventListener("dispose",W),x.__depthDisposeCallback=W}x.__boundDepthTexture=V}if(y.depthTexture&&!x.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");Ce(x.__webglFramebuffer,y)}else if(I){x.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[V]),x.__webglDepthbuffer[V]===void 0)x.__webglDepthbuffer[V]=n.createRenderbuffer(),pe(x.__webglDepthbuffer[V],y,!1);else{const W=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=x.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,G)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),pe(x.__webglDepthbuffer,y,!1);else{const V=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,V,n.RENDERBUFFER,W)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(y,x,I){const V=i.get(y);x!==void 0&&Te(V.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&Ue(y)}function ut(y){const x=y.texture,I=i.get(y),V=i.get(x);y.addEventListener("dispose",R);const W=y.textures,G=y.isWebGLCubeRenderTarget===!0,fe=W.length>1;if(fe||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=x.version,o.memory.textures++),G){I.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer[oe]=[];for(let he=0;he<x.mipmaps.length;he++)I.__webglFramebuffer[oe][he]=n.createFramebuffer()}else I.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer=[];for(let oe=0;oe<x.mipmaps.length;oe++)I.__webglFramebuffer[oe]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(fe)for(let oe=0,he=W.length;oe<he;oe++){const De=i.get(W[oe]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),o.memory.textures++)}if(y.samples>0&&J(y)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let oe=0;oe<W.length;oe++){const he=W[oe];I.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[oe]);const De=s.convert(he.format,he.colorSpace),ae=s.convert(he.type),ge=E(he.internalFormat,De,ae,he.colorSpace,y.isXRRenderTarget===!0),we=j(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,we,ge,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,I.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),pe(I.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),Ae(n.TEXTURE_CUBE_MAP,x);for(let oe=0;oe<6;oe++)if(x.mipmaps&&x.mipmaps.length>0)for(let he=0;he<x.mipmaps.length;he++)Te(I.__webglFramebuffer[oe][he],y,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,he);else Te(I.__webglFramebuffer[oe],y,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(x)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let oe=0,he=W.length;oe<he;oe++){const De=W[oe],ae=i.get(De);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),Ae(n.TEXTURE_2D,De),Te(I.__webglFramebuffer,y,De,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),m(De)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(oe=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,V.__webglTexture),Ae(oe,x),x.mipmaps&&x.mipmaps.length>0)for(let he=0;he<x.mipmaps.length;he++)Te(I.__webglFramebuffer[he],y,x,n.COLOR_ATTACHMENT0,oe,he);else Te(I.__webglFramebuffer,y,x,n.COLOR_ATTACHMENT0,oe,0);m(x)&&p(oe),t.unbindTexture()}y.depthBuffer&&Ue(y)}function P(y){const x=y.textures;for(let I=0,V=x.length;I<V;I++){const W=x[I];if(m(W)){const G=T(y),fe=i.get(W).__webglTexture;t.bindTexture(G,fe),p(G),t.unbindTexture()}}}const U=[],A=[];function ie(y){if(y.samples>0){if(J(y)===!1){const x=y.textures,I=y.width,V=y.height;let W=n.COLOR_BUFFER_BIT;const G=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=i.get(y),oe=x.length>1;if(oe)for(let he=0;he<x.length;he++)t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let he=0;he<x.length;he++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(W|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(W|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,fe.__webglColorRenderbuffer[he]);const De=i.get(x[he]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,De,0)}n.blitFramebuffer(0,0,I,V,0,0,I,V,W,n.NEAREST),l===!0&&(U.length=0,A.length=0,U.push(n.COLOR_ATTACHMENT0+he),y.depthBuffer&&y.resolveDepthBuffer===!1&&(U.push(G),A.push(G),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,A)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,U))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let he=0;he<x.length;he++){t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,fe.__webglColorRenderbuffer[he]);const De=i.get(x[he]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,De,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const x=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function j(y){return Math.min(r.maxSamples,y.samples)}function J(y){const x=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ee(y){const x=o.render.frame;u.get(y)!==x&&(u.set(y,x),y.update())}function se(y,x){const I=y.colorSpace,V=y.format,W=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||I!==ys&&I!==Oi&&(Ke.getTransfer(I)===st?(V!==Nn||W!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),x}function Z(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=N,this.setTexture2D=Q,this.setTexture2DArray=k,this.setTexture3D=Y,this.setTextureCube=H,this.rebindTextures=Be,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=J}function YE(n,e){function t(i,r=Oi){let s;const o=Ke.getTransfer(r);if(i===Ei)return n.UNSIGNED_BYTE;if(i===Ou)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Bu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Bp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Fp)return n.BYTE;if(i===Op)return n.SHORT;if(i===ho)return n.UNSIGNED_SHORT;if(i===Fu)return n.INT;if(i===Dr)return n.UNSIGNED_INT;if(i===gi)return n.FLOAT;if(i===bo)return n.HALF_FLOAT;if(i===zp)return n.ALPHA;if(i===Hp)return n.RGB;if(i===Nn)return n.RGBA;if(i===Vp)return n.LUMINANCE;if(i===kp)return n.LUMINANCE_ALPHA;if(i===hs)return n.DEPTH_COMPONENT;if(i===Ms)return n.DEPTH_STENCIL;if(i===Gp)return n.RED;if(i===zu)return n.RED_INTEGER;if(i===Wp)return n.RG;if(i===Hu)return n.RG_INTEGER;if(i===Vu)return n.RGBA_INTEGER;if(i===ua||i===fa||i===ha||i===da)if(o===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ua)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ua)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ha)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===da)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Tc||i===bc||i===Ac||i===wc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Tc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===bc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ac)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rc||i===Cc||i===Pc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Rc||i===Cc)return o===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Pc)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Dc||i===Lc||i===Ic||i===Uc||i===Nc||i===Fc||i===Oc||i===Bc||i===zc||i===Hc||i===Vc||i===kc||i===Gc||i===Wc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Dc)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Lc)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ic)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Uc)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Nc)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fc)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Oc)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bc)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===zc)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hc)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vc)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===kc)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Gc)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wc)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===pa||i===Xc||i===qc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===pa)return o===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===qc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xp||i===Yc||i===$c||i===Kc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===pa)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Yc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$c)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Kc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ss?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const $E={type:"move"};class kl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ta,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ta,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ta,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($E)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ta;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const KE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jE=`
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

}`;class ZE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new $t,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ji({vertexShader:KE,fragmentShader:jE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new jn(new Po(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class JE extends Ps{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=new ZE,m=t.getContextAttributes();let p=null,T=null;const E=[],S=[],w=new et;let C=null;const R=new bn;R.viewport=new St;const D=new bn;D.viewport=new St;const v=[R,D],M=new vx;let L=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let le=E[ne];return le===void 0&&(le=new kl,E[ne]=le),le.getTargetRaySpace()},this.getControllerGrip=function(ne){let le=E[ne];return le===void 0&&(le=new kl,E[ne]=le),le.getGripSpace()},this.getHand=function(ne){let le=E[ne];return le===void 0&&(le=new kl,E[ne]=le),le.getHandSpace()};function F(ne){const le=S.indexOf(ne.inputSource);if(le===-1)return;const Te=E[le];Te!==void 0&&(Te.update(ne.inputSource,ne.frame,c||o),Te.dispatchEvent({type:ne.type,data:ne.inputSource}))}function K(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",Q);for(let ne=0;ne<E.length;ne++){const le=S[ne];le!==null&&(S[ne]=null,E[ne].disconnect(le))}L=null,N=null,_.reset(),e.setRenderTarget(p),d=null,h=null,f=null,r=null,T=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",K),r.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(w),r.renderState.layers===void 0){const le={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new Lr(d.framebufferWidth,d.framebufferHeight,{format:Nn,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let le=null,Te=null,pe=null;m.depth&&(pe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=m.stencil?Ms:hs,Te=m.stencil?Ss:Dr);const Ce={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Ce),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),T=new Lr(h.textureWidth,h.textureHeight,{format:Nn,type:Ei,depthTexture:new rm(h.textureWidth,h.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),qe.setContext(r),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Q(ne){for(let le=0;le<ne.removed.length;le++){const Te=ne.removed[le],pe=S.indexOf(Te);pe>=0&&(S[pe]=null,E[pe].disconnect(Te))}for(let le=0;le<ne.added.length;le++){const Te=ne.added[le];let pe=S.indexOf(Te);if(pe===-1){for(let Ue=0;Ue<E.length;Ue++)if(Ue>=S.length){S.push(Te),pe=Ue;break}else if(S[Ue]===null){S[Ue]=Te,pe=Ue;break}if(pe===-1)break}const Ce=E[pe];Ce&&Ce.connect(Te)}}const k=new $,Y=new $;function H(ne,le,Te){k.setFromMatrixPosition(le.matrixWorld),Y.setFromMatrixPosition(Te.matrixWorld);const pe=k.distanceTo(Y),Ce=le.projectionMatrix.elements,Ue=Te.projectionMatrix.elements,Be=Ce[14]/(Ce[10]-1),ut=Ce[14]/(Ce[10]+1),P=(Ce[9]+1)/Ce[5],U=(Ce[9]-1)/Ce[5],A=(Ce[8]-1)/Ce[0],ie=(Ue[8]+1)/Ue[0],j=Be*A,J=Be*ie,ee=pe/(-A+ie),se=ee*-A;if(le.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(se),ne.translateZ(ee),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Ce[10]===-1)ne.projectionMatrix.copy(le.projectionMatrix),ne.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const Z=Be+ee,y=ut+ee,x=j-se,I=J+(pe-se),V=P*ut/y*Z,W=U*ut/y*Z;ne.projectionMatrix.makePerspective(x,I,V,W,Z,y),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function ue(ne,le){le===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(le.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;let le=ne.near,Te=ne.far;_.texture!==null&&(_.depthNear>0&&(le=_.depthNear),_.depthFar>0&&(Te=_.depthFar)),M.near=D.near=R.near=le,M.far=D.far=R.far=Te,(L!==M.near||N!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,N=M.far),R.layers.mask=ne.layers.mask|2,D.layers.mask=ne.layers.mask|4,M.layers.mask=R.layers.mask|D.layers.mask;const pe=ne.parent,Ce=M.cameras;ue(M,pe);for(let Ue=0;Ue<Ce.length;Ue++)ue(Ce[Ue],pe);Ce.length===2?H(M,R,D):M.projectionMatrix.copy(R.projectionMatrix),me(ne,M,pe)};function me(ne,le,Te){Te===null?ne.matrix.copy(le.matrixWorld):(ne.matrix.copy(Te.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(le.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(le.projectionMatrix),ne.projectionMatrixInverse.copy(le.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=jc*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(ne){l=ne,h!==null&&(h.fixedFoveation=ne),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ne)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let ye=null;function Ae(ne,le){if(u=le.getViewerPose(c||o),g=le,u!==null){const Te=u.views;d!==null&&(e.setRenderTargetFramebuffer(T,d.framebuffer),e.setRenderTarget(T));let pe=!1;Te.length!==M.cameras.length&&(M.cameras.length=0,pe=!0);for(let Ue=0;Ue<Te.length;Ue++){const Be=Te[Ue];let ut=null;if(d!==null)ut=d.getViewport(Be);else{const U=f.getViewSubImage(h,Be);ut=U.viewport,Ue===0&&(e.setRenderTargetTextures(T,U.colorTexture,h.ignoreDepthValues?void 0:U.depthStencilTexture),e.setRenderTarget(T))}let P=v[Ue];P===void 0&&(P=new bn,P.layers.enable(Ue),P.viewport=new St,v[Ue]=P),P.matrix.fromArray(Be.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(Be.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(ut.x,ut.y,ut.width,ut.height),Ue===0&&(M.matrix.copy(P.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),pe===!0&&M.cameras.push(P)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const Ue=f.getDepthInformation(Te[0]);Ue&&Ue.isValid&&Ue.texture&&_.init(e,Ue,r.renderState)}}for(let Te=0;Te<E.length;Te++){const pe=S[Te],Ce=E[Te];pe!==null&&Ce!==void 0&&Ce.update(pe,le,c||o)}ye&&ye(ne,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),g=null}const qe=new sm;qe.setAnimationLoop(Ae),this.setAnimationLoop=function(ne){ye=ne},this.dispose=function(){}}}const hr=new Ti,QE=new Mt;function eT(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,em(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,T,E,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,T,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),E=T.envMap,S=T.envMapRotation;E&&(m.envMap.value=E,hr.copy(S),hr.x*=-1,hr.y*=-1,hr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),m.envMapRotation.value.setFromMatrix4(QE.makeRotationFromEuler(hr)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function tT(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,E){const S=E.program;i.uniformBlockBinding(T,S)}function c(T,E){let S=r[T.id];S===void 0&&(g(T),S=u(T),r[T.id]=S,T.addEventListener("dispose",m));const w=E.program;i.updateUBOMapping(T,w);const C=e.render.frame;s[T.id]!==C&&(h(T),s[T.id]=C)}function u(T){const E=f();T.__bindingPointIndex=E;const S=n.createBuffer(),w=T.__size,C=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,w,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,S),S}function f(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const E=r[T.id],S=T.uniforms,w=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let C=0,R=S.length;C<R;C++){const D=Array.isArray(S[C])?S[C]:[S[C]];for(let v=0,M=D.length;v<M;v++){const L=D[v];if(d(L,C,v,w)===!0){const N=L.__offset,F=Array.isArray(L.value)?L.value:[L.value];let K=0;for(let Q=0;Q<F.length;Q++){const k=F[Q],Y=_(k);typeof k=="number"||typeof k=="boolean"?(L.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,N+K,L.__data)):k.isMatrix3?(L.__data[0]=k.elements[0],L.__data[1]=k.elements[1],L.__data[2]=k.elements[2],L.__data[3]=0,L.__data[4]=k.elements[3],L.__data[5]=k.elements[4],L.__data[6]=k.elements[5],L.__data[7]=0,L.__data[8]=k.elements[6],L.__data[9]=k.elements[7],L.__data[10]=k.elements[8],L.__data[11]=0):(k.toArray(L.__data,K),K+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(T,E,S,w){const C=T.value,R=E+"_"+S;if(w[R]===void 0)return typeof C=="number"||typeof C=="boolean"?w[R]=C:w[R]=C.clone(),!0;{const D=w[R];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return w[R]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function g(T){const E=T.uniforms;let S=0;const w=16;for(let R=0,D=E.length;R<D;R++){const v=Array.isArray(E[R])?E[R]:[E[R]];for(let M=0,L=v.length;M<L;M++){const N=v[M],F=Array.isArray(N.value)?N.value:[N.value];for(let K=0,Q=F.length;K<Q;K++){const k=F[K],Y=_(k),H=S%w,ue=H%Y.boundary,me=H+ue;S+=ue,me!==0&&w-me<Y.storage&&(S+=w-me),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=S,S+=Y.storage}}}const C=S%w;return C>0&&(S+=w-C),T.__size=S,T.__cache={},this}function _(T){const E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function m(T){const E=T.target;E.removeEventListener("dispose",m);const S=o.indexOf(E.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function p(){for(const T in r)n.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class nT{constructor(e={}){const{canvas:t=Fv(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const T=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tn,this.toneMapping=Gi,this.toneMappingExposure=1;const S=this;let w=!1,C=0,R=0,D=null,v=-1,M=null;const L=new St,N=new St;let F=null;const K=new it(0);let Q=0,k=t.width,Y=t.height,H=1,ue=null,me=null;const ye=new St(0,0,k,Y),Ae=new St(0,0,k,Y);let qe=!1;const ne=new im;let le=!1,Te=!1;const pe=new Mt,Ce=new Mt,Ue=new $,Be=new St,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let P=!1;function U(){return D===null?H:1}let A=i;function ie(b,B){return t.getContext(b,B)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Nu}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",Se,!1),A===null){const B="webgl2";if(A=ie(B,b),A===null)throw ie(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let j,J,ee,se,Z,y,x,I,V,W,G,fe,oe,he,De,ae,ge,we,Le,de,Ne,ze,tt,O;function ve(){j=new fy(A),j.init(),ze=new YE(A,j),J=new sy(A,j,e,ze),ee=new XE(A,j),J.reverseDepthBuffer&&h&&ee.buffers.depth.setReversed(!0),se=new py(A),Z=new LE,y=new qE(A,j,ee,Z,J,ze,se),x=new ay(S),I=new uy(S),V=new Mx(A),tt=new iy(A,V),W=new hy(A,V,se,tt),G=new _y(A,W,V,se),Le=new my(A,J,y),ae=new oy(Z),fe=new DE(S,x,I,j,J,tt,ae),oe=new eT(S,Z),he=new UE,De=new HE(j),we=new ny(S,x,I,ee,G,d,l),ge=new GE(S,G,J),O=new tT(A,se,J,ee),de=new ry(A,j,se),Ne=new dy(A,j,se),se.programs=fe.programs,S.capabilities=J,S.extensions=j,S.properties=Z,S.renderLists=he,S.shadowMap=ge,S.state=ee,S.info=se}ve();const te=new JE(S,A);this.xr=te,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const b=j.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=j.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(b){b!==void 0&&(H=b,this.setSize(k,Y,!1))},this.getSize=function(b){return b.set(k,Y)},this.setSize=function(b,B,X=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=b,Y=B,t.width=Math.floor(b*H),t.height=Math.floor(B*H),X===!0&&(t.style.width=b+"px",t.style.height=B+"px"),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(k*H,Y*H).floor()},this.setDrawingBufferSize=function(b,B,X){k=b,Y=B,H=X,t.width=Math.floor(b*X),t.height=Math.floor(B*X),this.setViewport(0,0,b,B)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(ye)},this.setViewport=function(b,B,X,q){b.isVector4?ye.set(b.x,b.y,b.z,b.w):ye.set(b,B,X,q),ee.viewport(L.copy(ye).multiplyScalar(H).round())},this.getScissor=function(b){return b.copy(Ae)},this.setScissor=function(b,B,X,q){b.isVector4?Ae.set(b.x,b.y,b.z,b.w):Ae.set(b,B,X,q),ee.scissor(N.copy(Ae).multiplyScalar(H).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(b){ee.setScissorTest(qe=b)},this.setOpaqueSort=function(b){ue=b},this.setTransparentSort=function(b){me=b},this.getClearColor=function(b){return b.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor.apply(we,arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha.apply(we,arguments)},this.clear=function(b=!0,B=!0,X=!0){let q=0;if(b){let z=!1;if(D!==null){const ce=D.texture.format;z=ce===Vu||ce===Hu||ce===zu}if(z){const ce=D.texture.type,xe=ce===Ei||ce===Dr||ce===ho||ce===Ss||ce===Ou||ce===Bu,Ee=we.getClearColor(),be=we.getClearAlpha(),Fe=Ee.r,Oe=Ee.g,Re=Ee.b;xe?(g[0]=Fe,g[1]=Oe,g[2]=Re,g[3]=be,A.clearBufferuiv(A.COLOR,0,g)):(_[0]=Fe,_[1]=Oe,_[2]=Re,_[3]=be,A.clearBufferiv(A.COLOR,0,_))}else q|=A.COLOR_BUFFER_BIT}B&&(q|=A.DEPTH_BUFFER_BIT),X&&(q|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),we.dispose(),he.dispose(),De.dispose(),Z.dispose(),x.dispose(),I.dispose(),G.dispose(),tt.dispose(),O.dispose(),fe.dispose(),te.dispose(),te.removeEventListener("sessionstart",hf),te.removeEventListener("sessionend",df),tr.stop()};function re(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const b=se.autoReset,B=ge.enabled,X=ge.autoUpdate,q=ge.needsUpdate,z=ge.type;ve(),se.autoReset=b,ge.enabled=B,ge.autoUpdate=X,ge.needsUpdate=q,ge.type=z}function Se(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ve(b){const B=b.target;B.removeEventListener("dispose",Ve),_t(B)}function _t(b){It(b),Z.remove(b)}function It(b){const B=Z.get(b).programs;B!==void 0&&(B.forEach(function(X){fe.releaseProgram(X)}),b.isShaderMaterial&&fe.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,X,q,z,ce){B===null&&(B=ut);const xe=z.isMesh&&z.matrixWorld.determinant()<0,Ee=l_(b,B,X,q,z);ee.setMaterial(q,xe);let be=X.index,Fe=1;if(q.wireframe===!0){if(be=W.getWireframeAttribute(X),be===void 0)return;Fe=2}const Oe=X.drawRange,Re=X.attributes.position;let Ye=Oe.start*Fe,Ze=(Oe.start+Oe.count)*Fe;ce!==null&&(Ye=Math.max(Ye,ce.start*Fe),Ze=Math.min(Ze,(ce.start+ce.count)*Fe)),be!==null?(Ye=Math.max(Ye,0),Ze=Math.min(Ze,be.count)):Re!=null&&(Ye=Math.max(Ye,0),Ze=Math.min(Ze,Re.count));const yt=Ze-Ye;if(yt<0||yt===1/0)return;tt.setup(z,q,Ee,X,be);let gt,$e=de;if(be!==null&&(gt=V.get(be),$e=Ne,$e.setIndex(gt)),z.isMesh)q.wireframe===!0?(ee.setLineWidth(q.wireframeLinewidth*U()),$e.setMode(A.LINES)):$e.setMode(A.TRIANGLES);else if(z.isLine){let Pe=q.linewidth;Pe===void 0&&(Pe=1),ee.setLineWidth(Pe*U()),z.isLineSegments?$e.setMode(A.LINES):z.isLineLoop?$e.setMode(A.LINE_LOOP):$e.setMode(A.LINE_STRIP)}else z.isPoints?$e.setMode(A.POINTS):z.isSprite&&$e.setMode(A.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)$e.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(j.get("WEBGL_multi_draw"))$e.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Pe=z._multiDrawStarts,Dt=z._multiDrawCounts,Je=z._multiDrawCount,Pn=be?V.get(be).bytesPerElement:1,Fr=Z.get(q).currentProgram.getUniforms();for(let an=0;an<Je;an++)Fr.setValue(A,"_gl_DrawID",an),$e.render(Pe[an]/Pn,Dt[an])}else if(z.isInstancedMesh)$e.renderInstances(Ye,yt,z.count);else if(X.isInstancedBufferGeometry){const Pe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Dt=Math.min(X.instanceCount,Pe);$e.renderInstances(Ye,yt,Dt)}else $e.render(Ye,yt)};function nt(b,B,X){b.transparent===!0&&b.side===Yn&&b.forceSinglePass===!1?(b.side=en,b.needsUpdate=!0,Io(b,B,X),b.side=Ki,b.needsUpdate=!0,Io(b,B,X),b.side=Yn):Io(b,B,X)}this.compile=function(b,B,X=null){X===null&&(X=b),p=De.get(X),p.init(B),E.push(p),X.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),b!==X&&b.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const q=new Set;return b.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ce=z.material;if(ce)if(Array.isArray(ce))for(let xe=0;xe<ce.length;xe++){const Ee=ce[xe];nt(Ee,X,z),q.add(Ee)}else nt(ce,X,z),q.add(ce)}),E.pop(),p=null,q},this.compileAsync=function(b,B,X=null){const q=this.compile(b,B,X);return new Promise(z=>{function ce(){if(q.forEach(function(xe){Z.get(xe).currentProgram.isReady()&&q.delete(xe)}),q.size===0){z(b);return}setTimeout(ce,10)}j.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Cn=null;function ni(b){Cn&&Cn(b)}function hf(){tr.stop()}function df(){tr.start()}const tr=new sm;tr.setAnimationLoop(ni),typeof self<"u"&&tr.setContext(self),this.setAnimationLoop=function(b){Cn=b,te.setAnimationLoop(b),b===null?tr.stop():tr.start()},te.addEventListener("sessionstart",hf),te.addEventListener("sessionend",df),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(B),B=te.getCamera()),b.isScene===!0&&b.onBeforeRender(S,b,B,D),p=De.get(b,E.length),p.init(B),E.push(p),Ce.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ne.setFromProjectionMatrix(Ce),Te=this.localClippingEnabled,le=ae.init(this.clippingPlanes,Te),m=he.get(b,T.length),m.init(),T.push(m),te.enabled===!0&&te.isPresenting===!0){const ce=S.xr.getDepthSensingMesh();ce!==null&&Za(ce,B,-1/0,S.sortObjects)}Za(b,B,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(ue,me),P=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,P&&we.addToRenderList(m,b),this.info.render.frame++,le===!0&&ae.beginShadows();const X=p.state.shadowsArray;ge.render(X,b,B),le===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,z=m.transmissive;if(p.setupLights(),B.isArrayCamera){const ce=B.cameras;if(z.length>0)for(let xe=0,Ee=ce.length;xe<Ee;xe++){const be=ce[xe];mf(q,z,b,be)}P&&we.render(b);for(let xe=0,Ee=ce.length;xe<Ee;xe++){const be=ce[xe];pf(m,b,be,be.viewport)}}else z.length>0&&mf(q,z,b,B),P&&we.render(b),pf(m,b,B);D!==null&&(y.updateMultisampleRenderTarget(D),y.updateRenderTargetMipmap(D)),b.isScene===!0&&b.onAfterRender(S,b,B),tt.resetDefaultState(),v=-1,M=null,E.pop(),E.length>0?(p=E[E.length-1],le===!0&&ae.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Za(b,B,X,q){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ne.intersectsSprite(b)){q&&Be.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ce);const xe=G.update(b),Ee=b.material;Ee.visible&&m.push(b,xe,Ee,X,Be.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ne.intersectsObject(b))){const xe=G.update(b),Ee=b.material;if(q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Be.copy(b.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Be.copy(xe.boundingSphere.center)),Be.applyMatrix4(b.matrixWorld).applyMatrix4(Ce)),Array.isArray(Ee)){const be=xe.groups;for(let Fe=0,Oe=be.length;Fe<Oe;Fe++){const Re=be[Fe],Ye=Ee[Re.materialIndex];Ye&&Ye.visible&&m.push(b,xe,Ye,X,Be.z,Re)}}else Ee.visible&&m.push(b,xe,Ee,X,Be.z,null)}}const ce=b.children;for(let xe=0,Ee=ce.length;xe<Ee;xe++)Za(ce[xe],B,X,q)}function pf(b,B,X,q){const z=b.opaque,ce=b.transmissive,xe=b.transparent;p.setupLightsView(X),le===!0&&ae.setGlobalState(S.clippingPlanes,X),q&&ee.viewport(L.copy(q)),z.length>0&&Lo(z,B,X),ce.length>0&&Lo(ce,B,X),xe.length>0&&Lo(xe,B,X),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function mf(b,B,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new Lr(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float")?bo:Ei,minFilter:Er,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const ce=p.state.transmissionRenderTarget[q.id],xe=q.viewport||L;ce.setSize(xe.z,xe.w);const Ee=S.getRenderTarget();S.setRenderTarget(ce),S.getClearColor(K),Q=S.getClearAlpha(),Q<1&&S.setClearColor(16777215,.5),S.clear(),P&&we.render(X);const be=S.toneMapping;S.toneMapping=Gi;const Fe=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),le===!0&&ae.setGlobalState(S.clippingPlanes,q),Lo(b,X,q),y.updateMultisampleRenderTarget(ce),y.updateRenderTargetMipmap(ce),j.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let Re=0,Ye=B.length;Re<Ye;Re++){const Ze=B[Re],yt=Ze.object,gt=Ze.geometry,$e=Ze.material,Pe=Ze.group;if($e.side===Yn&&yt.layers.test(q.layers)){const Dt=$e.side;$e.side=en,$e.needsUpdate=!0,_f(yt,X,q,gt,$e,Pe),$e.side=Dt,$e.needsUpdate=!0,Oe=!0}}Oe===!0&&(y.updateMultisampleRenderTarget(ce),y.updateRenderTargetMipmap(ce))}S.setRenderTarget(Ee),S.setClearColor(K,Q),Fe!==void 0&&(q.viewport=Fe),S.toneMapping=be}function Lo(b,B,X){const q=B.isScene===!0?B.overrideMaterial:null;for(let z=0,ce=b.length;z<ce;z++){const xe=b[z],Ee=xe.object,be=xe.geometry,Fe=q===null?xe.material:q,Oe=xe.group;Ee.layers.test(X.layers)&&_f(Ee,B,X,be,Fe,Oe)}}function _f(b,B,X,q,z,ce){b.onBeforeRender(S,B,X,q,z,ce),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),z.onBeforeRender(S,B,X,q,b,ce),z.transparent===!0&&z.side===Yn&&z.forceSinglePass===!1?(z.side=en,z.needsUpdate=!0,S.renderBufferDirect(X,B,q,z,b,ce),z.side=Ki,z.needsUpdate=!0,S.renderBufferDirect(X,B,q,z,b,ce),z.side=Yn):S.renderBufferDirect(X,B,q,z,b,ce),b.onAfterRender(S,B,X,q,z,ce)}function Io(b,B,X){B.isScene!==!0&&(B=ut);const q=Z.get(b),z=p.state.lights,ce=p.state.shadowsArray,xe=z.state.version,Ee=fe.getParameters(b,z.state,ce,B,X),be=fe.getProgramCacheKey(Ee);let Fe=q.programs;q.environment=b.isMeshStandardMaterial?B.environment:null,q.fog=B.fog,q.envMap=(b.isMeshStandardMaterial?I:x).get(b.envMap||q.environment),q.envMapRotation=q.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,Fe===void 0&&(b.addEventListener("dispose",Ve),Fe=new Map,q.programs=Fe);let Oe=Fe.get(be);if(Oe!==void 0){if(q.currentProgram===Oe&&q.lightsStateVersion===xe)return vf(b,Ee),Oe}else Ee.uniforms=fe.getUniforms(b),b.onBeforeCompile(Ee,S),Oe=fe.acquireProgram(Ee,be),Fe.set(be,Oe),q.uniforms=Ee.uniforms;const Re=q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Re.clippingPlanes=ae.uniform),vf(b,Ee),q.needsLights=u_(b),q.lightsStateVersion=xe,q.needsLights&&(Re.ambientLightColor.value=z.state.ambient,Re.lightProbe.value=z.state.probe,Re.directionalLights.value=z.state.directional,Re.directionalLightShadows.value=z.state.directionalShadow,Re.spotLights.value=z.state.spot,Re.spotLightShadows.value=z.state.spotShadow,Re.rectAreaLights.value=z.state.rectArea,Re.ltc_1.value=z.state.rectAreaLTC1,Re.ltc_2.value=z.state.rectAreaLTC2,Re.pointLights.value=z.state.point,Re.pointLightShadows.value=z.state.pointShadow,Re.hemisphereLights.value=z.state.hemi,Re.directionalShadowMap.value=z.state.directionalShadowMap,Re.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Re.spotShadowMap.value=z.state.spotShadowMap,Re.spotLightMatrix.value=z.state.spotLightMatrix,Re.spotLightMap.value=z.state.spotLightMap,Re.pointShadowMap.value=z.state.pointShadowMap,Re.pointShadowMatrix.value=z.state.pointShadowMatrix),q.currentProgram=Oe,q.uniformsList=null,Oe}function gf(b){if(b.uniformsList===null){const B=b.currentProgram.getUniforms();b.uniformsList=ma.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function vf(b,B){const X=Z.get(b);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function l_(b,B,X,q,z){B.isScene!==!0&&(B=ut),y.resetTextureUnits();const ce=B.fog,xe=q.isMeshStandardMaterial?B.environment:null,Ee=D===null?S.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ys,be=(q.isMeshStandardMaterial?I:x).get(q.envMap||xe),Fe=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Oe=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Re=!!X.morphAttributes.position,Ye=!!X.morphAttributes.normal,Ze=!!X.morphAttributes.color;let yt=Gi;q.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(yt=S.toneMapping);const gt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,$e=gt!==void 0?gt.length:0,Pe=Z.get(q),Dt=p.state.lights;if(le===!0&&(Te===!0||b!==M)){const Ht=b===M&&q.id===v;ae.setState(q,b,Ht)}let Je=!1;q.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Dt.state.version||Pe.outputColorSpace!==Ee||z.isBatchedMesh&&Pe.batching===!1||!z.isBatchedMesh&&Pe.batching===!0||z.isBatchedMesh&&Pe.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Pe.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Pe.instancing===!1||!z.isInstancedMesh&&Pe.instancing===!0||z.isSkinnedMesh&&Pe.skinning===!1||!z.isSkinnedMesh&&Pe.skinning===!0||z.isInstancedMesh&&Pe.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Pe.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Pe.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Pe.instancingMorph===!1&&z.morphTexture!==null||Pe.envMap!==be||q.fog===!0&&Pe.fog!==ce||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==ae.numPlanes||Pe.numIntersection!==ae.numIntersection)||Pe.vertexAlphas!==Fe||Pe.vertexTangents!==Oe||Pe.morphTargets!==Re||Pe.morphNormals!==Ye||Pe.morphColors!==Ze||Pe.toneMapping!==yt||Pe.morphTargetsCount!==$e)&&(Je=!0):(Je=!0,Pe.__version=q.version);let Pn=Pe.currentProgram;Je===!0&&(Pn=Io(q,B,z));let Fr=!1,an=!1,Ls=!1;const ft=Pn.getUniforms(),xn=Pe.uniforms;if(ee.useProgram(Pn.program)&&(Fr=!0,an=!0,Ls=!0),q.id!==v&&(v=q.id,an=!0),Fr||M!==b){ee.buffers.depth.getReversed()?(pe.copy(b.projectionMatrix),Bv(pe),zv(pe),ft.setValue(A,"projectionMatrix",pe)):ft.setValue(A,"projectionMatrix",b.projectionMatrix),ft.setValue(A,"viewMatrix",b.matrixWorldInverse);const Kt=ft.map.cameraPosition;Kt!==void 0&&Kt.setValue(A,Ue.setFromMatrixPosition(b.matrixWorld)),J.logarithmicDepthBuffer&&ft.setValue(A,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ft.setValue(A,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,an=!0,Ls=!0)}if(z.isSkinnedMesh){ft.setOptional(A,z,"bindMatrix"),ft.setOptional(A,z,"bindMatrixInverse");const Ht=z.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),ft.setValue(A,"boneTexture",Ht.boneTexture,y))}z.isBatchedMesh&&(ft.setOptional(A,z,"batchingTexture"),ft.setValue(A,"batchingTexture",z._matricesTexture,y),ft.setOptional(A,z,"batchingIdTexture"),ft.setValue(A,"batchingIdTexture",z._indirectTexture,y),ft.setOptional(A,z,"batchingColorTexture"),z._colorsTexture!==null&&ft.setValue(A,"batchingColorTexture",z._colorsTexture,y));const Sn=X.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&Le.update(z,X,Pn),(an||Pe.receiveShadow!==z.receiveShadow)&&(Pe.receiveShadow=z.receiveShadow,ft.setValue(A,"receiveShadow",z.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(xn.envMap.value=be,xn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&B.environment!==null&&(xn.envMapIntensity.value=B.environmentIntensity),an&&(ft.setValue(A,"toneMappingExposure",S.toneMappingExposure),Pe.needsLights&&c_(xn,Ls),ce&&q.fog===!0&&oe.refreshFogUniforms(xn,ce),oe.refreshMaterialUniforms(xn,q,H,Y,p.state.transmissionRenderTarget[b.id]),ma.upload(A,gf(Pe),xn,y)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ma.upload(A,gf(Pe),xn,y),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ft.setValue(A,"center",z.center),ft.setValue(A,"modelViewMatrix",z.modelViewMatrix),ft.setValue(A,"normalMatrix",z.normalMatrix),ft.setValue(A,"modelMatrix",z.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Ht=q.uniformsGroups;for(let Kt=0,Ja=Ht.length;Kt<Ja;Kt++){const nr=Ht[Kt];O.update(nr,Pn),O.bind(nr,Pn)}}return Pn}function c_(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function u_(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(b,B,X){Z.get(b.texture).__webglTexture=B,Z.get(b.depthTexture).__webglTexture=X;const q=Z.get(b);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||j.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,B){const X=Z.get(b);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(b,B=0,X=0){D=b,C=B,R=X;let q=!0,z=null,ce=!1,xe=!1;if(b){const be=Z.get(b);if(be.__useDefaultFramebuffer!==void 0)ee.bindFramebuffer(A.FRAMEBUFFER,null),q=!1;else if(be.__webglFramebuffer===void 0)y.setupRenderTarget(b);else if(be.__hasExternalTextures)y.rebindTextures(b,Z.get(b.texture).__webglTexture,Z.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Re=b.depthTexture;if(be.__boundDepthTexture!==Re){if(Re!==null&&Z.has(Re)&&(b.width!==Re.image.width||b.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(b)}}const Fe=b.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(xe=!0);const Oe=Z.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Oe[B])?z=Oe[B][X]:z=Oe[B],ce=!0):b.samples>0&&y.useMultisampledRTT(b)===!1?z=Z.get(b).__webglMultisampledFramebuffer:Array.isArray(Oe)?z=Oe[X]:z=Oe,L.copy(b.viewport),N.copy(b.scissor),F=b.scissorTest}else L.copy(ye).multiplyScalar(H).floor(),N.copy(Ae).multiplyScalar(H).floor(),F=qe;if(ee.bindFramebuffer(A.FRAMEBUFFER,z)&&q&&ee.drawBuffers(b,z),ee.viewport(L),ee.scissor(N),ee.setScissorTest(F),ce){const be=Z.get(b.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+B,be.__webglTexture,X)}else if(xe){const be=Z.get(b.texture),Fe=B||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,be.__webglTexture,X||0,Fe)}v=-1},this.readRenderTargetPixels=function(b,B,X,q,z,ce,xe){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Z.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xe!==void 0&&(Ee=Ee[xe]),Ee){ee.bindFramebuffer(A.FRAMEBUFFER,Ee);try{const be=b.texture,Fe=be.format,Oe=be.type;if(!J.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-q&&X>=0&&X<=b.height-z&&A.readPixels(B,X,q,z,ze.convert(Fe),ze.convert(Oe),ce)}finally{const be=D!==null?Z.get(D).__webglFramebuffer:null;ee.bindFramebuffer(A.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(b,B,X,q,z,ce,xe){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=Z.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xe!==void 0&&(Ee=Ee[xe]),Ee){const be=b.texture,Fe=be.format,Oe=be.type;if(!J.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=b.width-q&&X>=0&&X<=b.height-z){ee.bindFramebuffer(A.FRAMEBUFFER,Ee);const Re=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Re),A.bufferData(A.PIXEL_PACK_BUFFER,ce.byteLength,A.STREAM_READ),A.readPixels(B,X,q,z,ze.convert(Fe),ze.convert(Oe),0);const Ye=D!==null?Z.get(D).__webglFramebuffer:null;ee.bindFramebuffer(A.FRAMEBUFFER,Ye);const Ze=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Ov(A,Ze,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Re),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,ce),A.deleteBuffer(Re),A.deleteSync(Ze),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,B=null,X=0){b.isTexture!==!0&&(ns("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,b=arguments[1]);const q=Math.pow(2,-X),z=Math.floor(b.image.width*q),ce=Math.floor(b.image.height*q),xe=B!==null?B.x:0,Ee=B!==null?B.y:0;y.setTexture2D(b,0),A.copyTexSubImage2D(A.TEXTURE_2D,X,0,0,xe,Ee,z,ce),ee.unbindTexture()};const f_=A.createFramebuffer(),h_=A.createFramebuffer();this.copyTextureToTexture=function(b,B,X=null,q=null,z=0,ce=null){b.isTexture!==!0&&(ns("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,b=arguments[1],B=arguments[2],ce=arguments[3]||0,X=null),ce===null&&(z!==0?(ns("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=z,z=0):ce=0);let xe,Ee,be,Fe,Oe,Re,Ye,Ze,yt;const gt=b.isCompressedTexture?b.mipmaps[ce]:b.image;if(X!==null)xe=X.max.x-X.min.x,Ee=X.max.y-X.min.y,be=X.isBox3?X.max.z-X.min.z:1,Fe=X.min.x,Oe=X.min.y,Re=X.isBox3?X.min.z:0;else{const Sn=Math.pow(2,-z);xe=Math.floor(gt.width*Sn),Ee=Math.floor(gt.height*Sn),b.isDataArrayTexture?be=gt.depth:b.isData3DTexture?be=Math.floor(gt.depth*Sn):be=1,Fe=0,Oe=0,Re=0}q!==null?(Ye=q.x,Ze=q.y,yt=q.z):(Ye=0,Ze=0,yt=0);const $e=ze.convert(B.format),Pe=ze.convert(B.type);let Dt;B.isData3DTexture?(y.setTexture3D(B,0),Dt=A.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(y.setTexture2DArray(B,0),Dt=A.TEXTURE_2D_ARRAY):(y.setTexture2D(B,0),Dt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,B.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,B.unpackAlignment);const Je=A.getParameter(A.UNPACK_ROW_LENGTH),Pn=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Fr=A.getParameter(A.UNPACK_SKIP_PIXELS),an=A.getParameter(A.UNPACK_SKIP_ROWS),Ls=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,gt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,gt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Fe),A.pixelStorei(A.UNPACK_SKIP_ROWS,Oe),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Re);const ft=b.isDataArrayTexture||b.isData3DTexture,xn=B.isDataArrayTexture||B.isData3DTexture;if(b.isDepthTexture){const Sn=Z.get(b),Ht=Z.get(B),Kt=Z.get(Sn.__renderTarget),Ja=Z.get(Ht.__renderTarget);ee.bindFramebuffer(A.READ_FRAMEBUFFER,Kt.__webglFramebuffer),ee.bindFramebuffer(A.DRAW_FRAMEBUFFER,Ja.__webglFramebuffer);for(let nr=0;nr<be;nr++)ft&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Z.get(b).__webglTexture,z,Re+nr),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Z.get(B).__webglTexture,ce,yt+nr)),A.blitFramebuffer(Fe,Oe,xe,Ee,Ye,Ze,xe,Ee,A.DEPTH_BUFFER_BIT,A.NEAREST);ee.bindFramebuffer(A.READ_FRAMEBUFFER,null),ee.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(z!==0||b.isRenderTargetTexture||Z.has(b)){const Sn=Z.get(b),Ht=Z.get(B);ee.bindFramebuffer(A.READ_FRAMEBUFFER,f_),ee.bindFramebuffer(A.DRAW_FRAMEBUFFER,h_);for(let Kt=0;Kt<be;Kt++)ft?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Sn.__webglTexture,z,Re+Kt):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Sn.__webglTexture,z),xn?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ht.__webglTexture,ce,yt+Kt):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Ht.__webglTexture,ce),z!==0?A.blitFramebuffer(Fe,Oe,xe,Ee,Ye,Ze,xe,Ee,A.COLOR_BUFFER_BIT,A.NEAREST):xn?A.copyTexSubImage3D(Dt,ce,Ye,Ze,yt+Kt,Fe,Oe,xe,Ee):A.copyTexSubImage2D(Dt,ce,Ye,Ze,Fe,Oe,xe,Ee);ee.bindFramebuffer(A.READ_FRAMEBUFFER,null),ee.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else xn?b.isDataTexture||b.isData3DTexture?A.texSubImage3D(Dt,ce,Ye,Ze,yt,xe,Ee,be,$e,Pe,gt.data):B.isCompressedArrayTexture?A.compressedTexSubImage3D(Dt,ce,Ye,Ze,yt,xe,Ee,be,$e,gt.data):A.texSubImage3D(Dt,ce,Ye,Ze,yt,xe,Ee,be,$e,Pe,gt):b.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,ce,Ye,Ze,xe,Ee,$e,Pe,gt.data):b.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,ce,Ye,Ze,gt.width,gt.height,$e,gt.data):A.texSubImage2D(A.TEXTURE_2D,ce,Ye,Ze,xe,Ee,$e,Pe,gt);A.pixelStorei(A.UNPACK_ROW_LENGTH,Je),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Pn),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Fr),A.pixelStorei(A.UNPACK_SKIP_ROWS,an),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ls),ce===0&&B.generateMipmaps&&A.generateMipmap(Dt),ee.unbindTexture()},this.copyTextureToTexture3D=function(b,B,X=null,q=null,z=0){return b.isTexture!==!0&&(ns("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,q=arguments[1]||null,b=arguments[2],B=arguments[3],z=arguments[4]||0),ns('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,B,X,q,z)},this.initRenderTarget=function(b){Z.get(b).__webglFramebuffer===void 0&&y.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?y.setTextureCube(b,0):b.isData3DTexture?y.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?y.setTexture2DArray(b,0):y.setTexture2D(b,0),ee.unbindTexture()},this.resetState=function(){C=0,R=0,D=null,ee.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}function hi(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function um(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var _n={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ts={duration:.5,overwrite:!1,delay:0},Yu,Lt,ht,wn=1e8,at=1/wn,Qc=Math.PI*2,iT=Qc/4,rT=0,fm=Math.sqrt,sT=Math.cos,oT=Math.sin,Pt=function(e){return typeof e=="string"},vt=function(e){return typeof e=="function"},bi=function(e){return typeof e=="number"},$u=function(e){return typeof e>"u"},ti=function(e){return typeof e=="object"},tn=function(e){return e!==!1},Ku=function(){return typeof window<"u"},sa=function(e){return vt(e)||Pt(e)},hm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},zt=Array.isArray,aT=/random\([^)]+\)/g,lT=/,\s*/g,id=/(?:-?\.?\d|\.)+/gi,dm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,rs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Gl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,pm=/[+-]=-?[.\d]+/,cT=/[^,'"\[\]\s]+/gi,uT=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,pt,Gn,eu,ju,gn={},Ca={},mm,_m=function(e){return(Ca=bs(e,gn))&&on},Zu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},mo=function(e,t){return!t&&console.warn(e)},gm=function(e,t){return e&&(gn[e]=t)&&Ca&&(Ca[e]=t)||gn},_o=function(){return 0},fT={suppressEvents:!0,isStart:!0,kill:!1},_a={suppressEvents:!0,kill:!1},hT={suppressEvents:!0},Ju={},Wi=[],tu={},vm,un={},Wl={},rd=30,ga=[],Qu="",ef=function(e){var t=e[0],i,r;if(ti(t)||vt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=ga.length;r--&&!ga[r].targetTest(t););i=ga[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new km(e[r],i)))||e.splice(r,1);return e},wr=function(e){return e._gsap||ef(Rn(e))[0]._gsap},xm=function(e,t,i){return(i=e[t])&&vt(i)?e[t]():$u(i)&&e.getAttribute&&e.getAttribute(t)||i},nn=function(e,t){return(e=e.split(",")).forEach(t)||e},xt=function(e){return Math.round(e*1e5)/1e5||0},dt=function(e){return Math.round(e*1e7)/1e7||0},ps=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},dT=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Pa=function(){var e=Wi.length,t=Wi.slice(0),i,r;for(tu={},Wi.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},tf=function(e){return!!(e._initted||e._startAt||e.add)},Sm=function(e,t,i,r){Wi.length&&!Lt&&Pa(),e.render(t,i,!!(Lt&&t<0&&tf(e))),Wi.length&&!Lt&&Pa()},Mm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(cT).length<2?t:Pt(e)?e.trim():e},ym=function(e){return e},vn=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},pT=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},bs=function(e,t){for(var i in t)e[i]=t[i];return e},sd=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=ti(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Da=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},eo=function(e){var t=e.parent||pt,i=e.keyframes?pT(zt(e.keyframes)):vn;if(tn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},mT=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},Em=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},$a=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Zi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Rr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},_T=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},nu=function(e,t,i,r){return e._startAt&&(Lt?e._startAt.revert(_a):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},gT=function n(e){return!e||e._ts&&n(e.parent)},od=function(e){return e._repeat?As(e._tTime,e=e.duration()+e._rDelay)*e:0},As=function(e,t){var i=Math.floor(e=dt(e/t));return e&&i===e?i-1:i},La=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ka=function(e){return e._end=dt(e._start+(e._tDur/Math.abs(e._ts||e._rts||at)||0))},ja=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=dt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ka(e),i._dirty||Rr(i,e)),e},Tm=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=La(e.rawTime(),t),(!t._dur||Do(0,t.totalDuration(),i)-t._tTime>at)&&t.render(i,!0)),Rr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-at}},$n=function(e,t,i,r){return t.parent&&Zi(t),t._start=dt((bi(i)?i:i||e!==pt?En(e,i,t):e._time)+t._delay),t._end=dt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Em(e,t,"_first","_last",e._sort?"_start":0),iu(t)||(e._recent=t),r||Tm(e,t),e._ts<0&&ja(e,e._tTime),e},bm=function(e,t){return(gn.ScrollTrigger||Zu("scrollTrigger",t))&&gn.ScrollTrigger.create(t,e)},Am=function(e,t,i,r,s){if(rf(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Lt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&vm!==fn.frame)return Wi.push(e),e._lazy=[s,r],1},vT=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},iu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},xT=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&vT(e)&&!(!e._initted&&iu(e))||(e._ts<0||e._dp._ts<0)&&!iu(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=Do(0,e._tDur,t),u=As(l,a),e._yoyo&&u&1&&(o=1-o),u!==As(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Lt||r||e._zTime===at||!t&&e._zTime){if(!e._initted&&Am(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?at:0),i||(i=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&nu(e,t,i,!0),e._onUpdate&&!i&&dn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&dn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Zi(e,1),!i&&!Lt&&(dn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},ST=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},ws=function(e,t,i,r){var s=e._repeat,o=dt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:dt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&ja(e,e._tTime=e._tDur*a),e.parent&&Ka(e),i||Rr(e.parent,e),e},ad=function(e){return e instanceof Yt?Rr(e):ws(e,e._dur)},MT={_start:0,endTime:_o,totalDuration:_o},En=function n(e,t,i){var r=e.labels,s=e._recent||MT,o=e.duration()>=wn?s.endTime(!1):e._dur,a,l,c;return Pt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&i&&(l=l/100*(zt(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},to=function(e,t,i){var r=bi(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=tn(l.vars.inherit)&&l.parent;o.immediateRender=tn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Tt(t[0],o,t[s+1])},er=function(e,t){return e||e===0?t(e):t},Do=function(e,t,i){return i<e?e:i>t?t:i},Ot=function(e,t){return!Pt(e)||!(t=uT.exec(e))?"":t[1]},yT=function(e,t,i){return er(i,function(r){return Do(e,t,r)})},ru=[].slice,wm=function(e,t){return e&&ti(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ti(e[0]))&&!e.nodeType&&e!==Gn},ET=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Pt(r)&&!t||wm(r,1)?(s=i).push.apply(s,Rn(r)):i.push(r)})||i},Rn=function(e,t,i){return ht&&!t&&ht.selector?ht.selector(e):Pt(e)&&!i&&(eu||!Rs())?ru.call((t||ju).querySelectorAll(e),0):zt(e)?ET(e,i):wm(e)?ru.call(e,0):e?[e]:[]},su=function(e){return e=Rn(e)[0]||mo("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Rn(t,i.querySelectorAll?i:i===e?mo("Invalid scope")||ju.createElement("div"):e)}},Rm=function(e){return e.sort(function(){return .5-Math.random()})},Cm=function(e){if(vt(e))return e;var t=ti(e)?e:{each:e},i=Cr(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,f=r;return Pt(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],f=r[1]),function(h,d,g){var _=(g||t).length,m=o[_],p,T,E,S,w,C,R,D,v;if(!m){if(v=t.grid==="auto"?0:(t.grid||[1,wn])[1],!v){for(R=-wn;R<(R=g[v++].getBoundingClientRect().left)&&v<_;);v<_&&v--}for(m=o[_]=[],p=l?Math.min(v,_)*u-.5:r%v,T=v===wn?0:l?_*f/v-.5:r/v|0,R=0,D=wn,C=0;C<_;C++)E=C%v-p,S=T-(C/v|0),m[C]=w=c?Math.abs(c==="y"?S:E):fm(E*E+S*S),w>R&&(R=w),w<D&&(D=w);r==="random"&&Rm(m),m.max=R-D,m.min=D,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(v>_?_-1:c?c==="y"?_/v:v:Math.max(v,_/v))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Ot(t.amount||t.each)||0,i=i&&_<0?zm(i):i}return _=(m[h]-m.min)/m.max||0,dt(m.b+(i?i(_):_)*m.v)+m.u}},ou=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=dt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(bi(i)?0:Ot(i))}},Pm=function(e,t){var i=zt(e),r,s;return!i&&ti(e)&&(r=i=e.radius||wn,e.values?(e=Rn(e.values),(s=!bi(e[0]))&&(r*=r)):e=ou(e.increment)),er(t,i?vt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=wn,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-a,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!r||c<=r?e[u]:o,s||u===o||bi(o)?u:u+Ot(o)}:ou(e))},Dm=function(e,t,i,r){return er(zt(e)?!t:i===!0?!!(i=0):!r,function(){return zt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},TT=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},bT=function(e,t){return function(i){return e(parseFloat(i))+(t||Ot(i))}},AT=function(e,t,i){return Im(e,t,0,1,i)},Lm=function(e,t,i){return er(i,function(r){return e[~~t(r)]})},wT=function n(e,t,i){var r=t-e;return zt(e)?Lm(e,n(0,e.length),t):er(i,function(s){return(r+(s-e)%r)%r+e})},RT=function n(e,t,i){var r=t-e,s=r*2;return zt(e)?Lm(e,n(0,e.length-1),t):er(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},go=function(e){return e.replace(aT,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(lT);return Dm(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},Im=function(e,t,i,r,s){var o=t-e,a=r-i;return er(s,function(l){return i+((l-e)/o*a||0)})},CT=function n(e,t,i,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=Pt(e),a={},l,c,u,f,h;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(zt(e)&&!zt(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(n(e[c-1],e[c]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return u[_](g-_)},i=t}else r||(e=bs(zt(e)?[]:{},e));if(!u){for(l in t)nf.call(a,e,l,"get",t[l]);s=function(g){return af(g,a)||(o?e.p:e)}}}return er(i,s)},ld=function(e,t,i){var r=e.labels,s=wn,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},dn=function(e,t,i){var r=e.vars,s=r[t],o=ht,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,i&&Wi.length&&Pa(),a&&(ht=a),u=l?s.apply(c,l):s.call(c),ht=o,u},Ws=function(e){return Zi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Lt),e.progress()<1&&dn(e,"onInterrupt"),e},ss,Um=[],Nm=function(e){if(e)if(e=!e.name&&e.default||e,Ku()||e.headless){var t=e.name,i=vt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:_o,render:af,add:nf,kill:XT,modifier:WT,rawVars:0},o={targetTest:0,get:0,getSetter:of,aliases:{},register:0};if(Rs(),e!==r){if(un[t])return;vn(r,vn(Da(e,s),o)),bs(r.prototype,bs(s,Da(e,o))),un[r.prop=t]=r,e.targetTest&&(ga.push(r),Ju[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}gm(t,r),e.register&&e.register(on,r,rn)}else Um.push(e)},ot=255,Xs={aqua:[0,ot,ot],lime:[0,ot,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ot],navy:[0,0,128],white:[ot,ot,ot],olive:[128,128,0],yellow:[ot,ot,0],orange:[ot,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ot,0,0],pink:[ot,192,203],cyan:[0,ot,ot],transparent:[ot,ot,ot,0]},Xl=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*ot+.5|0},Fm=function(e,t,i){var r=e?bi(e)?[e>>16,e>>8&ot,e&ot]:0:Xs.black,s,o,a,l,c,u,f,h,d,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Xs[e])r=Xs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&ot,r&ot,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&ot,e&ot]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(id),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=Xl(l+1/3,s,o),r[1]=Xl(l,s,o),r[2]=Xl(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(dm),i&&r.length<4&&(r[3]=1),r}else r=e.match(id)||Xs.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/ot,o=r[1]/ot,a=r[2]/ot,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},Om=function(e){var t=[],i=[],r=-1;return e.split(Xi).forEach(function(s){var o=s.match(rs)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},cd=function(e,t,i){var r="",s=(e+r).match(Xi),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=Fm(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(u=Om(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Xi,"1").split(rs),f=c.length-1;a<f;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(Xi),f=c.length-1;a<f;a++)r+=c[a]+s[a];return r+c[f]},Xi=(function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Xs)n+="|"+e+"\\b";return new RegExp(n+")","gi")})(),PT=/hsl[a]?\(/,Bm=function(e){var t=e.join(" "),i;if(Xi.lastIndex=0,Xi.test(t))return i=PT.test(t),e[1]=cd(e[1],i),e[0]=cd(e[0],i,Om(e[1])),!0},vo,fn=(function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,c,u,f,h,d,g=function _(m){var p=n()-r,T=m===!0,E,S,w,C;if((p>e||p<0)&&(i+=p-t),r+=p,w=r-i,E=w-o,(E>0||T)&&(C=++f.frame,h=w-f.time*1e3,f.time=w=w/1e3,o+=E+(E>=s?4:s-E),S=1),T||(l=c(_)),S)for(d=0;d<a.length;d++)a[d](w,h,C,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){mm&&(!eu&&Ku()&&(Gn=eu=window,ju=Gn.document||{},gn.gsap=on,(Gn.gsapVersions||(Gn.gsapVersions=[])).push(on.version),_m(Ca||Gn.GreenSockGlobals||!Gn.gsap&&Gn||{}),Um.forEach(Nm)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},vo=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),vo=0,c=_o},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,T){var E=p?function(S,w,C,R){m(S,w,C,R),f.remove(E)}:m;return f.remove(m),a[T?"unshift":"push"](E),Rs(),E},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},f})(),Rs=function(){return!vo&&fn.wake()},Xe={},DT=/^[\d.\-M][\d.\-,\s]/,LT=/["']/g,IT=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(LT,"").trim():+c,r=l.substr(a+1).trim();return t},UT=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},NT=function(e){var t=(e+"").split("("),i=Xe[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[IT(t[1])]:UT(e).split(",").map(Mm)):Xe._CE&&DT.test(e)?Xe._CE("",e):i},zm=function(e){return function(t){return 1-e(1-t)}},Hm=function n(e,t){for(var i=e._first,r;i;)i instanceof Yt?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},Cr=function(e,t){return e&&(vt(e)?e:Xe[e]||NT(e))||t},Nr=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return nn(e,function(a){Xe[a]=gn[a]=s,Xe[o=a.toLowerCase()]=i;for(var l in s)Xe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Xe[a+"."+l]=s[l]}),s},Vm=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ql=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Qc*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*oT((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Vm(a);return s=Qc/s,l.config=function(c,u){return n(e,c,u)},l},Yl=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:Vm(i);return r.config=function(s){return n(e,s)},r};nn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Nr(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Xe.Linear.easeNone=Xe.none=Xe.Linear.easeIn;Nr("Elastic",ql("in"),ql("out"),ql());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Nr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Nr("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Nr("Circ",function(n){return-(fm(1-n*n)-1)});Nr("Sine",function(n){return n===1?1:-sT(n*iT)+1});Nr("Back",Yl("in"),Yl("out"),Yl());Xe.SteppedEase=Xe.steps=gn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-at;return function(a){return((r*Do(0,o,a)|0)+s)*i}}};Ts.ease=Xe["quad.out"];nn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Qu+=n+","+n+"Params,"});var km=function(e,t){this.id=rT++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:xm,this.set=t?t.getSetter:of},xo=(function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ws(this,+t.duration,1,1),this.data=t.data,ht&&(this._ctx=ht,ht.data.push(this)),vo||fn.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,ws(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Rs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ja(this,i),!s._dp||s.parent||Tm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&$n(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===at||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Sm(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+od(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+od(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?As(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-at?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?La(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-at?0:this._rts,this.totalTime(Do(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Ka(this),_T(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Rs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==at&&(this._tTime-=at)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=dt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&$n(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(tn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?La(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=hT);var r=Lt;return Lt=i,tf(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Lt=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,ad(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,ad(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(En(this,i),tn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,tn(r)),this._dur||(this._zTime=-at),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-at:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-at,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-at)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=vt(i)?i:ym,l=function(){var u=r.then;r.then=null,s&&s(),vt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),o(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Ws(this)},n})();vn(xo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-at,_prom:0,_ps:!1,_rts:1});var Yt=(function(n){um(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=tn(i.sortChildren),pt&&$n(i.parent||pt,hi(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&bm(hi(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return to(0,arguments,this),this},t.from=function(r,s,o){return to(1,arguments,this),this},t.fromTo=function(r,s,o,a){return to(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,eo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Tt(r,s,En(this,o),1),this},t.call=function(r,s,o){return $n(this,Tt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Tt(r,o,En(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,eo(o).immediateRender=tn(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,f){return a.startAt=o,eo(a).immediateRender=tn(a.immediateRender),this.staggerTo(r,s,a,l,c,u,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:dt(r),f=this._zTime<0!=r<0&&(this._initted||!c),h,d,g,_,m,p,T,E,S,w,C,R;if(this!==pt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),h=u,S=this._start,E=this._ts,p=!E,f&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(C=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(h=dt(u%m),u===l?(_=this._repeat,h=c):(w=dt(u/m),_=~~w,_&&_===w&&(h=c,_--),h>c&&(h=c)),w=As(this._tTime,m),!a&&this._tTime&&w!==_&&this._tTime-w*m-this._dur<=0&&(w=_),C&&_&1&&(h=c-h,R=1),_!==w&&!this._lock){var D=C&&w&1,v=D===(C&&_&1);if(_<w&&(D=!D),a=D?0:u%c?c:u,this._lock=1,this.render(a||(R?0:dt(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&dn(this,"onRepeat"),this.vars.repeatRefresh&&!R&&(this.invalidate()._lock=1,w=_),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,a=D?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!R&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Hm(this,R)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(T=ST(this,dt(a),dt(h)),T&&(u-=h-(h=T._start))),this._tTime=u,this._time=h,this._act=!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!s&&!w&&(dn(this,"onStart"),this._tTime!==u))return this;if(h>=a&&r>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&T!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!p){T=0,g&&(u+=this._zTime=-at);break}}d=g}else{d=this._last;for(var M=r<0?r:h;d;){if(g=d._prev,(d._act||M<=d._end)&&d._ts&&T!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(M-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(M-d._start)*d._ts,s,o||Lt&&tf(d)),h!==this._time||!this._ts&&!p){T=0,g&&(u+=this._zTime=M?-at:at);break}}d=g}}if(T&&!s&&(this.pause(),T.render(h>=a?0:-at)._zTime=h>=a?1:-1,this._ts))return this._start=S,Ka(this),this.render(r,s,o);this._onUpdate&&!s&&dn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Zi(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(dn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(bi(s)||(s=En(this,s,r)),!(r instanceof xo)){if(zt(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Pt(r))return this.addLabel(r,s);if(vt(r))r=Tt.delayedCall(0,r);else return this}return this!==r?$n(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-wn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Tt?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Pt(r)?this.removeLabel(r):vt(r)?this.killTweensOf(r):(r.parent===this&&$a(this,r),r===this._recent&&(this._recent=this._last),Rr(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=dt(fn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=En(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Tt.delayedCall(0,s||_o,o);return a.data="isPause",this._hasPause=1,$n(this,a,En(this,r))},t.removePause=function(r){var s=this._first;for(r=En(this,r);s;)s._start===r&&s.data==="isPause"&&Zi(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Bi!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Rn(r),l=this._first,c=bi(s),u;l;)l instanceof Tt?dT(l._targets,a)&&(c?(!Bi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=En(o,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,g=Tt.to(o,vn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||at,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&ws(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,vn({startAt:{time:En(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),ld(this,En(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),ld(this,En(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+at)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(r=dt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return Rr(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Rr(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=wn,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,$n(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=dt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;ws(o,o===pt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(pt._ts&&(Sm(pt,La(r,pt)),vm=fn.frame),fn.frame>=rd){rd+=_n.autoSleep||120;var s=pt._first;if((!s||!s._ts)&&_n.autoSleep&&fn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||fn.sleep()}}},e})(xo);vn(Yt.prototype,{_lock:0,_hasPause:0,_forcing:0});var FT=function(e,t,i,r,s,o,a){var l=new rn(this._pt,e,t,0,1,$m,null,s),c=0,u=0,f,h,d,g,_,m,p,T;for(l.b=i,l.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=go(r)),o&&(T=[i,r],o(T,e,t),i=T[0],r=T[1]),h=i.match(Gl)||[];f=Gl.exec(r);)g=f[0],_=r.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?ps(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=Gl.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(pm.test(r)||p)&&(l.e=0),this._pt=l,l},nf=function(e,t,i,r,s,o,a,l,c,u){vt(r)&&(r=r(s||0,e,o));var f=e[t],h=i!=="get"?i:vt(f)?c?e[t.indexOf("set")||!vt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=vt(f)?c?VT:qm:sf,g;if(Pt(r)&&(~r.indexOf("random(")&&(r=go(r)),r.charAt(1)==="="&&(g=ps(h,r)+(Ot(h)||0),(g||g===0)&&(r=g))),!u||h!==r||au)return!isNaN(h*r)&&r!==""?(g=new rn(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?GT:Ym,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&Zu(t,r),FT.call(this,e,t,h,r,d,l||_n.stringFilter,c))},OT=function(e,t,i,r,s){if(vt(e)&&(e=no(e,s,t,i,r)),!ti(e)||e.style&&e.nodeType||zt(e)||hm(e))return Pt(e)?no(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=no(e[a],s,t,i,r);return o},Gm=function(e,t,i,r,s,o){var a,l,c,u;if(un[e]&&(a=new un[e]).init(s,a.rawVars?t[e]:OT(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new rn(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==ss))for(c=i._ptLookup[i._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Bi,au,rf=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,h=r.keyframes,d=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,T=p&&p.data==="nested"?p.vars.targets:m,E=e._overwrite==="auto"&&!Yu,S=e.timeline,w,C,R,D,v,M,L,N,F,K,Q,k,Y;if(S&&(!h||!s)&&(s="none"),e._ease=Cr(s,Ts.ease),e._yEase=f?zm(Cr(f===!0?s:f,Ts.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!S&&!!r.runBackwards,!S||h&&!r.stagger){if(N=m[0]?wr(m[0]).harness:0,k=N&&r[N.prop],w=Da(r,Ju),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?_a:fT),_._lazy=0),o){if(Zi(e._startAt=Tt.set(m,vn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&tn(l),startAt:null,delay:0,onUpdate:c&&function(){return dn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Lt||!a&&!d)&&e._startAt.revert(_a),a&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),R=vn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&tn(l),immediateRender:a,stagger:0,parent:p},w),k&&(R[N.prop]=k),Zi(e._startAt=Tt.set(m,R)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Lt?e._startAt.revert(_a):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,at,at);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&tn(l)||l&&!g,C=0;C<m.length;C++){if(v=m[C],L=v._gsap||ef(m)[C]._gsap,e._ptLookup[C]=K={},tu[L.id]&&Wi.length&&Pa(),Q=T===m?C:T.indexOf(v),N&&(F=new N).init(v,k||w,e,Q,T)!==!1&&(e._pt=D=new rn(e._pt,v,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(H){K[H]=D}),F.priority&&(M=1)),!N||k)for(R in w)un[R]&&(F=Gm(R,w,e,Q,v,T))?F.priority&&(M=1):K[R]=D=nf.call(e,v,R,"get",w[R],Q,T,0,r.stringFilter);e._op&&e._op[C]&&e.kill(v,e._op[C]),E&&e._pt&&(Bi=e,pt.killTweensOf(v,K,e.globalTime(t)),Y=!e.parent,Bi=0),e._pt&&l&&(tu[L.id]=1)}M&&Km(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Y,h&&t<=0&&S.render(wn,!0,!0)},BT=function(e,t,i,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return au=1,e.vars[t]="+=0",rf(e,a),au=0,l?mo(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=i-u.s,f.e&&(f.e=xt(i)+Ot(f.e)),f.b&&(f.b=u.s+Ot(f.b))},zT=function(e,t){var i=e[0]?wr(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=bs({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},HT=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(zt(t))a=i[e]||(i[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},no=function(e,t,i,r,s){return vt(e)?e.call(t,i,r,s):Pt(e)&&~e.indexOf("random(")?go(e):e},Wm=Qu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Xm={};nn(Wm+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return Xm[n]=1});var Tt=(function(n){um(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:eo(r))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,T=r.parent||pt,E=(zt(i)||hm(i)?bi(i[0]):"length"in r)?[i]:Rn(i),S,w,C,R,D,v,M,L;if(a._targets=E.length?ef(E):mo("GSAP target "+i+" not found. https://gsap.com",!_n.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||h||sa(c)||sa(u)){if(r=a.vars,S=a.timeline=new Yt({data:"nested",defaults:_||{},targets:T&&T.data==="nested"?T.vars.targets:E}),S.kill(),S.parent=S._dp=hi(a),S._start=0,h||sa(c)||sa(u)){if(R=E.length,M=h&&Cm(h),ti(h))for(D in h)~Wm.indexOf(D)&&(L||(L={}),L[D]=h[D]);for(w=0;w<R;w++)C=Da(r,Xm),C.stagger=0,p&&(C.yoyoEase=p),L&&bs(C,L),v=E[w],C.duration=+no(c,hi(a),w,v,E),C.delay=(+no(u,hi(a),w,v,E)||0)-a._delay,!h&&R===1&&C.delay&&(a._delay=u=C.delay,a._start+=u,C.delay=0),S.to(v,C,M?M(w,v,E):0),S._ease=Xe.none;S.duration()?c=u=0:a.timeline=0}else if(g){eo(vn(S.vars.defaults,{ease:"none"})),S._ease=Cr(g.ease||r.ease||"none");var N=0,F,K,Q;if(zt(g))g.forEach(function(k){return S.to(E,k,">")}),S.duration();else{C={};for(D in g)D==="ease"||D==="easeEach"||HT(D,g[D],C,g.easeEach);for(D in C)for(F=C[D].sort(function(k,Y){return k.t-Y.t}),N=0,w=0;w<F.length;w++)K=F[w],Q={ease:K.e,duration:(K.t-(w?F[w-1].t:0))/100*c},Q[D]=K.v,S.to(E,Q,N),N+=Q.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return d===!0&&!Yu&&(Bi=hi(a),pt.killTweensOf(E),Bi=0),$n(T,hi(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!c&&!g&&a._start===dt(T._time)&&tn(f)&&gT(hi(a))&&T.data!=="nested")&&(a._tTime=-at,a.render(Math.max(0,-u)||0)),m&&bm(hi(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-at&&!u?l:r<at?0:r,h,d,g,_,m,p,T,E,S;if(!c)xT(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,E=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,o);if(h=dt(f%_),f===l?(g=this._repeat,h=c):(m=dt(f/_),g=~~m,g&&g===m?(h=c,g--):h>c&&(h=c)),p=this._yoyo&&g&1,p&&(S=this._yEase,h=c-h),m=As(this._tTime,_),h===a&&!o&&this._initted&&g===m)return this._tTime=f,this;g!==m&&(E&&this._yEase&&Hm(E,p),this.vars.repeatRefresh&&!p&&!this._lock&&h!==_&&this._initted&&(this._lock=o=1,this.render(dt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Am(this,u?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=T=(S||this._ease)(h/c),this._from&&(this.ratio=T=1-T),!a&&f&&!s&&!m&&(dn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(T,d.d),d=d._next;E&&E.render(r<0?r:E._dur*E._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&nu(this,r,s,o),dn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&dn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&nu(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Zi(this,1),!s&&!(u&&!a)&&(f||a||p)&&(dn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){vo||fn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||rf(this,c),u=this._ease(c/this._dur),BT(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(ja(this,0),this.parent||Em(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ws(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Lt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Bi&&Bi.vars.overwrite!==!0)._first||Ws(this),this.parent&&o!==this.timeline.totalDuration()&&ws(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Rn(r):a,c=this._ptLookup,u=this._pt,f,h,d,g,_,m,p;if((!s||s==="all")&&mT(a,l))return s==="all"&&(this._pt=0),Ws(this);for(f=this._op=this._op||[],s!=="all"&&(Pt(s)&&(_={},nn(s,function(T){return _[T]=1}),s=_),s=zT(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){h=c[p],s==="all"?(f[p]=s,g=h,d={}):(d=f[p]=f[p]||{},g=s);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&$a(this,m,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Ws(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return to(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return to(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return pt.killTweensOf(r,s,o)},e})(xo);vn(Tt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});nn("staggerTo,staggerFrom,staggerFromTo",function(n){Tt[n]=function(){var e=new Yt,t=ru.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var sf=function(e,t,i){return e[t]=i},qm=function(e,t,i){return e[t](i)},VT=function(e,t,i,r){return e[t](r.fp,i)},kT=function(e,t,i){return e.setAttribute(t,i)},of=function(e,t){return vt(e[t])?qm:$u(e[t])&&e.setAttribute?kT:sf},Ym=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},GT=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},$m=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},af=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},WT=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},XT=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?$a(this,t,"_pt"):t.dep||(i=1),t=r;return!i},qT=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},Km=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},rn=(function(){function n(t,i,r,s,o,a,l,c,u){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||Ym,this.d=l||this,this.set=c||sf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=qT,this.m=i,this.mt=s,this.tween=r},n})();nn(Qu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Ju[n]=1});gn.TweenMax=gn.TweenLite=Tt;gn.TimelineLite=gn.TimelineMax=Yt;pt=new Yt({sortChildren:!1,defaults:Ts,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});_n.stringFilter=Bm;var Pr=[],va={},YT=[],ud=0,$T=0,$l=function(e){return(va[e]||YT).map(function(t){return t()})},lu=function(){var e=Date.now(),t=[];e-ud>2&&($l("matchMediaInit"),Pr.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,c;for(a in r)o=Gn.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&t.push(i))}),$l("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),ud=e,$l("matchMedia"))},jm=(function(){function n(t,i){this.selector=i&&su(i),this.data=[],this._r=[],this.isReverted=!1,this.id=$T++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){vt(i)&&(s=r,r=i,i=vt);var o=this,a=function(){var c=ht,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=su(s)),ht=o,f=r.apply(o,arguments),vt(f)&&o._r.push(f),ht=c,o.selector=u,o.isReverted=!1,f};return o.last=a,i===vt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=ht;ht=null,i(this),ht=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Tt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof Yt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Tt)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Pr.length;o--;)Pr[o].id===this.id&&Pr.splice(o,1)},e.revert=function(i){this.kill(i||{})},n})(),KT=(function(){function n(t){this.contexts=[],this.scope=t,ht&&ht.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){ti(i)||(i={matches:i});var o=new jm(0,s||this.scope),a=o.conditions={},l,c,u;ht&&!o.selector&&(o.selector=ht.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(c in i)c==="all"?u=1:(l=Gn.matchMedia(i[c]),l&&(Pr.indexOf(o)<0&&Pr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(lu):l.addEventListener("change",lu)));return u&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n})(),Ia={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return Nm(r)})},timeline:function(e){return new Yt(e)},getTweensOf:function(e,t){return pt.getTweensOf(e,t)},getProperty:function(e,t,i,r){Pt(e)&&(e=Rn(e)[0]);var s=wr(e||{}).get,o=i?ym:Mm;return i==="native"&&(i=""),e&&(t?o((un[t]&&un[t].get||s)(e,t,i,r)):function(a,l,c){return o((un[a]&&un[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,i){if(e=Rn(e),e.length>1){var r=e.map(function(u){return on.quickSetter(u,t,i)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var o=un[t],a=wr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;ss._pt=0,f.init(e,i?u+i:u,ss,0,[e]),f.render(1,f),ss._pt&&af(1,ss)}:a.set(e,l);return o?c:function(u){return c(e,l,i?u+i:u,a,1)}},quickTo:function(e,t,i){var r,s=on.to(e,vn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return pt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Cr(e.ease,Ts.ease)),sd(Ts,e||{})},config:function(e){return sd(_n,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!un[a]&&!gn[a]&&mo(t+" effect requires "+a+" plugin.")}),Wl[t]=function(a,l,c){return i(Rn(a),vn(l||{},s),c)},o&&(Yt.prototype[t]=function(a,l,c){return this.add(Wl[t](a,ti(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Xe[e]=Cr(t)},parseEase:function(e,t){return arguments.length?Cr(e,t):Xe},getById:function(e){return pt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Yt(e),r,s;for(i.smoothChildTiming=tn(e.smoothChildTiming),pt.remove(i),i._dp=0,i._time=i._tTime=pt._time,r=pt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Tt&&r.vars.onComplete===r._targets[0]))&&$n(i,r,r._start-r._delay),r=s;return $n(pt,i,0),i},context:function(e,t){return e?new jm(e,t):ht},matchMedia:function(e){return new KT(e)},matchMediaRefresh:function(){return Pr.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||lu()},addEventListener:function(e,t){var i=va[e]||(va[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=va[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:wT,wrapYoyo:RT,distribute:Cm,random:Dm,snap:Pm,normalize:AT,getUnit:Ot,clamp:yT,splitColor:Fm,toArray:Rn,selector:su,mapRange:Im,pipe:TT,unitize:bT,interpolate:CT,shuffle:Rm},install:_m,effects:Wl,ticker:fn,updateRoot:Yt.updateRoot,plugins:un,globalTimeline:pt,core:{PropTween:rn,globals:gm,Tween:Tt,Timeline:Yt,Animation:xo,getCache:wr,_removeLinkedListItem:$a,reverting:function(){return Lt},context:function(e){return e&&ht&&(ht.data.push(e),e._ctx=ht),ht},suppressOverwrites:function(e){return Yu=e}}};nn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Ia[n]=Tt[n]});fn.add(Yt.updateRoot);ss=Ia.to({},{duration:0});var jT=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},ZT=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=jT(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Kl=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(Pt(s)&&(l={},nn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}ZT(a,s)}}}},on=Ia.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Lt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Kl("roundProps",ou),Kl("modifiers"),Kl("snap",Pm))||Ia;Tt.version=Yt.version=on.version="3.14.2";mm=1;Ku()&&Rs();Xe.Power0;Xe.Power1;Xe.Power2;Xe.Power3;Xe.Power4;Xe.Linear;Xe.Quad;Xe.Cubic;Xe.Quart;Xe.Quint;Xe.Strong;Xe.Elastic;Xe.Back;Xe.SteppedEase;Xe.Bounce;Xe.Sine;Xe.Expo;Xe.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var fd,zi,ms,lf,Tr,hd,cf,JT=function(){return typeof window<"u"},Ai={},vr=180/Math.PI,_s=Math.PI/180,Qr=Math.atan2,dd=1e8,uf=/([A-Z])/g,QT=/(left|right|width|margin|padding|x)/i,eb=/[\s,\(]\S/,Zn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},cu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},tb=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},nb=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ib=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},rb=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Zm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Jm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},sb=function(e,t,i){return e.style[t]=i},ob=function(e,t,i){return e.style.setProperty(t,i)},ab=function(e,t,i){return e._gsap[t]=i},lb=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},cb=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},ub=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},mt="transform",sn=mt+"Origin",fb=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in Ai&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Zn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=pi(r,a)}):this.tfm[e]=o.x?o[e]:pi(r,e),e===sn&&(this.tfm.zOrigin=o.zOrigin);else return Zn.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(mt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(sn,t,"")),e=mt}(s||t)&&this.props.push(e,t,s[e])},Qm=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},hb=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(uf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=cf(),(!s||!s.isStart)&&!i[mt]&&(Qm(i),r.zOrigin&&i[sn]&&(i[sn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},e_=function(e,t){var i={target:e,props:[],revert:hb,save:fb};return e._gsap||on.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},t_,uu=function(e,t){var i=zi.createElementNS?zi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):zi.createElement(e);return i&&i.style?i:zi.createElement(e)},pn=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(uf,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Cs(t)||t,1)||""},pd="O,Moz,ms,Ms,Webkit".split(","),Cs=function(e,t,i){var r=t||Tr,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(pd[o]+e in s););return o<0?null:(o===3?"ms":o>=0?pd[o]:"")+e},fu=function(){JT()&&window.document&&(fd=window,zi=fd.document,ms=zi.documentElement,Tr=uu("div")||{style:{}},uu("div"),mt=Cs(mt),sn=mt+"Origin",Tr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",t_=!!Cs("perspective"),cf=on.core.reverting,lf=1)},md=function(e){var t=e.ownerSVGElement,i=uu("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),ms.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),ms.removeChild(i),s},_d=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},n_=function(e){var t,i;try{t=e.getBBox()}catch{t=md(e),i=1}return t&&(t.width||t.height)||i||(t=md(e)),t&&!t.width&&!t.x&&!t.y?{x:+_d(e,["x","cx","x1"])||0,y:+_d(e,["y","cy","y1"])||0,width:0,height:0}:t},i_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&n_(e))},Ji=function(e,t){if(t){var i=e.style,r;t in Ai&&t!==sn&&(t=mt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(uf,"-$1").toLowerCase())):i.removeAttribute(t)}},Hi=function(e,t,i,r,s,o){var a=new rn(e._pt,t,i,0,1,o?Jm:Zm);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},gd={deg:1,rad:1,turn:1},db={grid:1,flex:1},Qi=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=Tr.style,l=QT.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",d=r==="%",g,_,m,p;if(r===o||!s||gd[r]||gd[o])return s;if(o!=="px"&&!h&&(s=n(e,t,i,"px")),p=e.getCTM&&i_(e),(d||o==="%")&&(Ai[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],xt(d?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(h?o:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===zi||!_.appendChild)&&(_=zi.body),m=_._gsap,m&&d&&m.width&&l&&m.time===fn.time&&!m.uncache)return xt(s/m.width*f);if(d&&(t==="height"||t==="width")){var T=e.style[t];e.style[t]=f+r,g=e[u],T?e.style[t]=T:Ji(e,t)}else(d||o==="%")&&!db[pn(_,"display")]&&(a.position=pn(e,"position")),_===e&&(a.position="static"),_.appendChild(Tr),g=Tr[u],_.removeChild(Tr),a.position="absolute";return l&&d&&(m=wr(_),m.time=fn.time,m.width=_[u]),xt(h?g*s/f:g&&s?f/g*s:0)},pi=function(e,t,i,r){var s;return lf||fu(),t in Zn&&t!=="transform"&&(t=Zn[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ai[t]&&t!=="transform"?(s=Mo(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Na(pn(e,sn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Ua[t]&&Ua[t](e,t,i)||pn(e,t)||xm(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Qi(e,t,s,i)+i:s},pb=function(e,t,i,r){if(!i||i==="none"){var s=Cs(t,e,1),o=s&&pn(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=pn(e,"borderTopColor"))}var a=new rn(this._pt,e.style,t,0,1,$m),l=0,c=0,u,f,h,d,g,_,m,p,T,E,S,w;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=pn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=pn(e,t)||r,_?e.style[t]=_:Ji(e,t)),u=[i,r],Bm(u),i=u[0],r=u[1],h=i.match(rs)||[],w=r.match(rs)||[],w.length){for(;f=rs.exec(r);)m=f[0],T=r.substring(l,f.index),g?g=(g+1)%5:(T.substr(-5)==="rgba("||T.substr(-5)==="hsla(")&&(g=1),m!==(_=h[c++]||"")&&(d=parseFloat(_)||0,S=_.substr((d+"").length),m.charAt(1)==="="&&(m=ps(d,m)+S),p=parseFloat(m),E=m.substr((p+"").length),l=rs.lastIndex-E.length,E||(E=E||_n.units[t]||S,l===r.length&&(r+=E,a.e+=E)),S!==E&&(d=Qi(e,t,_,E)||0),a._pt={_next:a._pt,p:T||c===1?T:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Jm:Zm;return pm.test(r)&&(a.e=0),this._pt=a,a},vd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},mb=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=vd[i]||i,t[1]=vd[r]||r,t.join(" ")},_b=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Ai[a]&&(l=1,a=a==="transformOrigin"?sn:mt),Ji(i,a);l&&(Ji(i,mt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Mo(i,1),o.uncache=1,Qm(r)))}},Ua={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new rn(e._pt,t,i,0,0,_b);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},So=[1,0,0,1,0,0],r_={},s_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},xd=function(e){var t=pn(e,mt);return s_(t)?So:t.substr(7).match(dm).map(xt)},ff=function(e,t){var i=e._gsap||wr(e),r=e.style,s=xd(e),o,a,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?So:s):(s===So&&!e.offsetParent&&e!==ms&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,ms.appendChild(e)),s=xd(e),l?r.display=l:Ji(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):ms.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},hu=function(e,t,i,r,s,o){var a=e._gsap,l=s||ff(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],T=l[5],E=t.split(" "),S=parseFloat(E[0])||0,w=parseFloat(E[1])||0,C,R,D,v;i?l!==So&&(R=d*m-g*_)&&(D=S*(m/R)+w*(-_/R)+(_*T-m*p)/R,v=S*(-g/R)+w*(d/R)-(d*T-g*p)/R,S=D,w=v):(C=n_(e),S=C.x+(~E[0].indexOf("%")?S/100*C.width:S),w=C.y+(~(E[1]||E[0]).indexOf("%")?w/100*C.height:w)),r||r!==!1&&a.smooth?(p=S-c,T=w-u,a.xOffset=f+(p*d+T*_)-p,a.yOffset=h+(p*g+T*m)-T):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=w,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[sn]="0px 0px",o&&(Hi(o,a,"xOrigin",c,S),Hi(o,a,"yOrigin",u,w),Hi(o,a,"xOffset",f,a.xOffset),Hi(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+w)},Mo=function(e,t){var i=e._gsap||new km(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=pn(e,sn)||"0",u,f,h,d,g,_,m,p,T,E,S,w,C,R,D,v,M,L,N,F,K,Q,k,Y,H,ue,me,ye,Ae,qe,ne,le;return u=f=h=_=m=p=T=E=S=0,d=g=1,i.svg=!!(e.getCTM&&i_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[mt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[mt]!=="none"?l[mt]:"")),r.scale=r.rotate=r.translate="none"),R=ff(e,i.svg),i.svg&&(i.uncache?(H=e.getBBox(),c=i.xOrigin-H.x+"px "+(i.yOrigin-H.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),hu(e,Y||c,!!Y||i.originIsAbsolute,i.smooth!==!1,R)),w=i.xOrigin||0,C=i.yOrigin||0,R!==So&&(L=R[0],N=R[1],F=R[2],K=R[3],u=Q=R[4],f=k=R[5],R.length===6?(d=Math.sqrt(L*L+N*N),g=Math.sqrt(K*K+F*F),_=L||N?Qr(N,L)*vr:0,T=F||K?Qr(F,K)*vr+_:0,T&&(g*=Math.abs(Math.cos(T*_s))),i.svg&&(u-=w-(w*L+C*F),f-=C-(w*N+C*K))):(le=R[6],qe=R[7],me=R[8],ye=R[9],Ae=R[10],ne=R[11],u=R[12],f=R[13],h=R[14],D=Qr(le,Ae),m=D*vr,D&&(v=Math.cos(-D),M=Math.sin(-D),Y=Q*v+me*M,H=k*v+ye*M,ue=le*v+Ae*M,me=Q*-M+me*v,ye=k*-M+ye*v,Ae=le*-M+Ae*v,ne=qe*-M+ne*v,Q=Y,k=H,le=ue),D=Qr(-F,Ae),p=D*vr,D&&(v=Math.cos(-D),M=Math.sin(-D),Y=L*v-me*M,H=N*v-ye*M,ue=F*v-Ae*M,ne=K*M+ne*v,L=Y,N=H,F=ue),D=Qr(N,L),_=D*vr,D&&(v=Math.cos(D),M=Math.sin(D),Y=L*v+N*M,H=Q*v+k*M,N=N*v-L*M,k=k*v-Q*M,L=Y,Q=H),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=xt(Math.sqrt(L*L+N*N+F*F)),g=xt(Math.sqrt(k*k+le*le)),D=Qr(Q,k),T=Math.abs(D)>2e-4?D*vr:0,S=ne?1/(ne<0?-ne:ne):0),i.svg&&(Y=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!s_(pn(e,mt)),Y&&e.setAttribute("transform",Y))),Math.abs(T)>90&&Math.abs(T)<270&&(s?(d*=-1,T+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,T+=T<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=xt(d),i.scaleY=xt(g),i.rotation=xt(_)+a,i.rotationX=xt(m)+a,i.rotationY=xt(p)+a,i.skewX=T+a,i.skewY=E+a,i.transformPerspective=S+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(r[sn]=Na(c)),i.xOffset=i.yOffset=0,i.force3D=_n.force3D,i.renderTransform=i.svg?vb:t_?o_:gb,i.uncache=0,i},Na=function(e){return(e=e.split(" "))[0]+" "+e[1]},jl=function(e,t,i){var r=Ot(t);return xt(parseFloat(t)+parseFloat(Qi(e,"x",i+"px",r)))+r},gb=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,o_(e,t)},dr="0deg",Vs="0px",pr=") ",o_=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,u=i.rotationY,f=i.rotationX,h=i.skewX,d=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,p=i.force3D,T=i.target,E=i.zOrigin,S="",w=p==="auto"&&e&&e!==1||p===!0;if(E&&(f!==dr||u!==dr)){var C=parseFloat(u)*_s,R=Math.sin(C),D=Math.cos(C),v;C=parseFloat(f)*_s,v=Math.cos(C),o=jl(T,o,R*v*-E),a=jl(T,a,-Math.sin(C)*-E),l=jl(T,l,D*v*-E+E)}m!==Vs&&(S+="perspective("+m+pr),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(w||o!==Vs||a!==Vs||l!==Vs)&&(S+=l!==Vs||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+pr),c!==dr&&(S+="rotate("+c+pr),u!==dr&&(S+="rotateY("+u+pr),f!==dr&&(S+="rotateX("+f+pr),(h!==dr||d!==dr)&&(S+="skew("+h+", "+d+pr),(g!==1||_!==1)&&(S+="scale("+g+", "+_+pr),T.style[mt]=S||"translate(0, 0)"},vb=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,u=i.skewY,f=i.scaleX,h=i.scaleY,d=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,p=i.yOffset,T=i.forceCSS,E=parseFloat(o),S=parseFloat(a),w,C,R,D,v;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=_s,c*=_s,w=Math.cos(l)*f,C=Math.sin(l)*f,R=Math.sin(l-c)*-h,D=Math.cos(l-c)*h,c&&(u*=_s,v=Math.tan(c-u),v=Math.sqrt(1+v*v),R*=v,D*=v,u&&(v=Math.tan(u),v=Math.sqrt(1+v*v),w*=v,C*=v)),w=xt(w),C=xt(C),R=xt(R),D=xt(D)):(w=f,D=h,C=R=0),(E&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(E=Qi(d,"x",o,"px"),S=Qi(d,"y",a,"px")),(g||_||m||p)&&(E=xt(E+g-(g*w+_*R)+m),S=xt(S+_-(g*C+_*D)+p)),(r||s)&&(v=d.getBBox(),E=xt(E+r/100*v.width),S=xt(S+s/100*v.height)),v="matrix("+w+","+C+","+R+","+D+","+E+","+S+")",d.setAttribute("transform",v),T&&(d.style[mt]=v)},xb=function(e,t,i,r,s){var o=360,a=Pt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?vr:1),c=l-r,u=r+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*dd)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*dd)%o-~~(c/o)*o)),e._pt=h=new rn(e._pt,t,i,r,c,tb),h.e=u,h.u="deg",e._props.push(i),h},Sd=function(e,t){for(var i in t)e[i]=t[i];return e},Sb=function(e,t,i){var r=Sd({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,u,f,h,d,g;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[mt]=t,a=Mo(i,1),Ji(i,mt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[mt],o[mt]=t,a=Mo(i,1),o[mt]=c);for(l in Ai)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Ot(c),g=Ot(u),f=d!==g?Qi(i,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new rn(e._pt,a,l,f,h-f,cu),e._pt.u=g||0,e._props.push(l));Sd(a,r)};nn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});Ua[e>1?"border"+n:n]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(g){return pi(a,g,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,d,f)}});var a_={name:"css",register:fu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,c,u,f,h,d,g,_,m,p,T,E,S,w,C,R,D,v;lf||fu(),this.styles=this.styles||e_(e),D=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(un[_]&&Gm(_,t,i,r,e,s)))){if(d=typeof u,g=Ua[_],d==="function"&&(u=u.call(i,r,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=go(u)),g)g(this,e,_,u,i)&&(R=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Xi.lastIndex=0,Xi.test(c)||(m=Ot(c),p=Ot(u),p?m!==p&&(c=Qi(e,_,c,p)+p):m&&(u+=m)),this.add(a,"setProperty",c,u,r,s,0,0,_),o.push(_),D.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],Pt(c)&&~c.indexOf("random(")&&(c=go(c)),Ot(c+"")||c==="auto"||(c+=_n.units[_]||Ot(pi(e,_))||""),(c+"").charAt(1)==="="&&(c=pi(e,_))):c=pi(e,_),h=parseFloat(c),T=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),T&&(u=u.substr(2)),f=parseFloat(u),_ in Zn&&(_==="autoAlpha"&&(h===1&&pi(e,"visibility")==="hidden"&&f&&(h=0),D.push("visibility",0,a.visibility),Hi(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Zn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),E=_ in Ai,E){if(this.styles.save(_),v=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=pn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var M=e.style.perspective;e.style.perspective=u,u=pn(e,"perspective"),M?e.style.perspective=M:Ji(e,"perspective")}f=parseFloat(u)}if(S||(w=e._gsap,w.renderTransform&&!t.parseTransform||Mo(e,t.parseTransform),C=t.smoothOrigin!==!1&&w.smooth,S=this._pt=new rn(this._pt,a,mt,0,1,w.renderTransform,w,0,-1),S.dep=1),_==="scale")this._pt=new rn(this._pt,w,"scaleY",w.scaleY,(T?ps(w.scaleY,T+f):f)-w.scaleY||0,cu),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){D.push(sn,0,a[sn]),u=mb(u),w.svg?hu(e,u,0,C,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==w.zOrigin&&Hi(this,w,"zOrigin",w.zOrigin,p),Hi(this,a,_,Na(c),Na(u)));continue}else if(_==="svgOrigin"){hu(e,u,1,C,0,this);continue}else if(_ in r_){xb(this,w,_,h,T?ps(h,T+u):u);continue}else if(_==="smoothOrigin"){Hi(this,w,"smooth",w.smooth,u);continue}else if(_==="force3D"){w[_]=u;continue}else if(_==="transform"){Sb(this,u,e);continue}}else _ in a||(_=Cs(_)||_);if(E||(f||f===0)&&(h||h===0)&&!eb.test(u)&&_ in a)m=(c+"").substr((h+"").length),f||(f=0),p=Ot(u)||(_ in _n.units?_n.units[_]:m),m!==p&&(h=Qi(e,_,c,p)),this._pt=new rn(this._pt,E?w:a,_,h,(T?ps(h,T+f):f)-h,!E&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?rb:cu),this._pt.u=p||0,E&&v!==u?(this._pt.b=c,this._pt.e=v,this._pt.r=ib):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=nb);else if(_ in a)pb.call(this,e,_,c,T?T+u:u);else if(_ in e)this.add(e,_,c||e[_],T?T+u:u,r,s);else if(_!=="parseTransform"){Zu(_,u);continue}E||(_ in a?D.push(_,0,a[_]):typeof e[_]=="function"?D.push(_,2,e[_]()):D.push(_,1,c||e[_])),o.push(_)}}R&&Km(this)},render:function(e,t){if(t.tween._time||!cf())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:pi,aliases:Zn,getSetter:function(e,t,i){var r=Zn[t];return r&&r.indexOf(",")<0&&(t=r),t in Ai&&t!==sn&&(e._gsap.x||pi(e,"x"))?i&&hd===i?t==="scale"?lb:ab:(hd=i||{})&&(t==="scale"?cb:ub):e.style&&!$u(e.style[t])?sb:~t.indexOf("-")?ob:of(e,t)},core:{_removeProperty:Ji,_getMatrix:ff}};on.utils.checkPrefix=Cs;on.core.getStyleSaver=e_;(function(n,e,t,i){var r=nn(n+","+e+","+t,function(s){Ai[s]=1});nn(e,function(s){_n.units[s]="deg",r_[s]=1}),Zn[r[13]]=n+","+e,nn(i,function(s){var o=s.split(":");Zn[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");nn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){_n.units[n]="px"});on.registerPlugin(a_);var qs=on.registerPlugin(a_)||on;qs.core.Tween;const Mb=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},yb={class:"glass-card"},Eb={class:"handwriting"},Tb={class:"control-group"},bb={__name:"App",setup(n){const e=Br(null),t=Br(null),i=Br(!1),r=Br(null),s=Br(!1),o=Br(1);let a,l,c,u=[],f=new et,h=new et;const d=()=>{a=new lx,l=new bn(55,window.innerWidth/window.innerHeight,.1,1e3),l.position.z=6,c=new nT({canvas:t.value,antialias:!0,alpha:!1}),c.setClearColor(15659763,1),c.setSize(window.innerWidth,window.innerHeight),c.setPixelRatio(window.devicePixelRatio),c.sortObjects=!0},g=()=>{const w=new _x;[{url:"/sky.png",depth:-2,scale:6,name:"sky"},{url:"/boy.png",depth:-.5,scale:4.5,name:"boy"},{url:"/lady-removebg-preview.png",depth:1,scale:3.8,name:"woman"},{url:"/grass-removebg-preview.png",depth:2.5,scale:5,name:"grass"}].forEach((R,D)=>{w.load(R.url,v=>{const M=v.image.width/v.image.height,L=new Po(M*R.scale,R.scale),N=new Wu({map:v,transparent:!0,side:Yn,color:new it(1,1,1),alphaTest:.1,depthWrite:!0}),F=new jn(L,N);F.position.set(0,0,R.depth),F.userData.name=R.name,F.renderOrder=-R.depth,a.add(F),u.push(F),console.log(`✓ 加载成功: ${R.name} (${v.image.width}x${v.image.height})`)},void 0,v=>{console.error(`✗ 加载失败: ${R.url}`,v)})})},_=w=>{h.x=w.clientX/window.innerWidth-.5,h.y=w.clientY/window.innerHeight-.5},m=w=>{const C=new xx,R=new et;R.x=w.clientX/window.innerWidth*2-1,R.y=-(w.clientY/window.innerHeight)*2+1,C.setFromCamera(R,l);const D=C.intersectObjects(u);if(D.length>0){const v=D[0].object.userData.name;v==="woman"?r.value="“克劳德总是在风起时按下快门（画笔），他说这层面纱捕捉到了光的灵魂。”":v==="boy"&&(r.value="这是让（Jean），莫奈的长子。在那个夏天，他始终在草坡的那头好奇地看着。")}},p=()=>{i.value=!0,qs.to(l.position,{z:5.5,duration:2,ease:"power2.inOut"});const w=u.find(C=>C.userData.name==="grass");w&&(qs.to(w.scale,{x:.7,y:.7,z:.7,duration:2,ease:"power2.inOut"}),qs.to(w.position,{y:.5,duration:2,ease:"power2.inOut"}))},T=()=>{s.value=!s.value,u.forEach(w=>{qs.to(w.material.color,{r:s.value?.3:1,g:s.value?.3:1,b:s.value?.3:1,duration:1})})},E=()=>{requestAnimationFrame(E),f.x+=(h.x-f.x)*.05,f.y+=(h.y-f.y)*.05,u.forEach(C=>{const R=C.position.z*.5;C.position.x=f.x*R,C.position.y=-f.y*R});const w=u.find(C=>C.userData.name==="grass");w&&(w.rotation.z=Math.sin(Date.now()*.001)*.02),c.render(a,l)},S=()=>{!l||!c||(l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),c.setSize(window.innerWidth,window.innerHeight))};return Pu(()=>{d(),g(),window.addEventListener("mousemove",_),window.addEventListener("click",m),window.addEventListener("resize",S),E()}),Du(()=>{window.removeEventListener("mousemove",_),window.removeEventListener("click",m),window.removeEventListener("resize",S),c==null||c.dispose()}),(w,C)=>(lc(),Nf("div",{class:"painting-container",ref_key:"container",ref:e},[kt("header",{class:io(["painting-header",{"fade-out":i.value}])},[C[2]||(C[2]=kt("h1",null,"画中世界",-1)),C[3]||(C[3]=kt("p",null,"克劳德·莫奈 - 《撑阳伞的女人》",-1)),kt("button",{onClick:p,class:"start-btn"},"进入画作")],2),Qt(S0,{name:"fade"},{default:Zd(()=>[r.value?(lc(),Nf("div",{key:0,class:"dialogue-box",onClick:C[0]||(C[0]=R=>r.value=null)},[kt("div",yb,[kt("p",Eb,Zl(r.value),1),C[4]||(C[4]=kt("span",{class:"close-hint"},"点击关闭",-1))])])):n0("",!0)]),_:1}),kt("canvas",{ref_key:"canvasEl",ref:t},null,512),kt("div",{class:io(["bottom-bar",{"fade-in":i.value}])},[kt("div",Tb,[C[5]||(C[5]=kt("label",null,"光影流动",-1)),sg(kt("input",{type:"range","onUpdate:modelValue":C[1]||(C[1]=R=>o.value=R),min:"0",max:"2",step:"0.1"},null,512),[[V0,o.value]])]),kt("button",{onClick:T,class:"mode-btn"},Zl(s.value?"恢复色彩":"1875年记忆"),1)],2)],512))}},Ab=Mb(bb,[["__scopeId","data-v-4808113d"]]),wb=W0(Ab);wb.mount("#app");
