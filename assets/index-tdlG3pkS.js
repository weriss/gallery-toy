(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function oh(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const ze={},bo=[],Qi=()=>{},Sm=()=>!1,gc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ah=n=>n.startsWith("onUpdate:"),gn=Object.assign,lh=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},_g=Object.prototype.hasOwnProperty,De=(n,t)=>_g.call(n,t),re=Array.isArray,Eo=n=>Ka(n)==="[object Map]",bm=n=>Ka(n)==="[object Set]",pd=n=>Ka(n)==="[object Date]",fe=n=>typeof n=="function",on=n=>typeof n=="string",tr=n=>typeof n=="symbol",Ie=n=>n!==null&&typeof n=="object",Em=n=>(Ie(n)||fe(n))&&fe(n.then)&&fe(n.catch),Tm=Object.prototype.toString,Ka=n=>Tm.call(n),gg=n=>Ka(n).slice(8,-1),wm=n=>Ka(n)==="[object Object]",ch=n=>on(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ya=oh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vc=n=>{const t=Object.create(null);return(e=>t[e]||(t[e]=n(e)))},vg=/-\w/g,Qr=vc(n=>n.replace(vg,t=>t.slice(1).toUpperCase())),yg=/\B([A-Z])/g,Gs=vc(n=>n.replace(yg,"-$1").toLowerCase()),Am=vc(n=>n.charAt(0).toUpperCase()+n.slice(1)),Bc=vc(n=>n?`on${Am(n)}`:""),$r=(n,t)=>!Object.is(n,t),Nl=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Cm=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},uh=n=>{const t=parseFloat(n);return isNaN(t)?n:t},xg=n=>{const t=on(n)?Number(n):NaN;return isNaN(t)?n:t};let md;const yc=()=>md||(md=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function di(n){if(re(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],r=on(i)?Eg(i):di(i);if(r)for(const s in r)t[s]=r[s]}return t}else if(on(n)||Ie(n))return n}const Mg=/;(?![^(]*\))/g,Sg=/:([^]+)/,bg=/\/\*[^]*?\*\//g;function Eg(n){const t={};return n.replace(bg,"").split(Mg).forEach(e=>{if(e){const i=e.split(Sg);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Xe(n){let t="";if(on(n))t=n;else if(re(n))for(let e=0;e<n.length;e++){const i=Xe(n[e]);i&&(t+=i+" ")}else if(Ie(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const Tg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wg=oh(Tg);function Rm(n){return!!n||n===""}function Ag(n,t){if(n.length!==t.length)return!1;let e=!0;for(let i=0;e&&i<n.length;i++)e=fh(n[i],t[i]);return e}function fh(n,t){if(n===t)return!0;let e=pd(n),i=pd(t);if(e||i)return e&&i?n.getTime()===t.getTime():!1;if(e=tr(n),i=tr(t),e||i)return n===t;if(e=re(n),i=re(t),e||i)return e&&i?Ag(n,t):!1;if(e=Ie(n),i=Ie(t),e||i){if(!e||!i)return!1;const r=Object.keys(n).length,s=Object.keys(t).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!fh(n[o],t[o]))return!1}}return String(n)===String(t)}const Pm=n=>!!(n&&n.__v_isRef===!0),bt=n=>on(n)?n:n==null?"":re(n)||Ie(n)&&(n.toString===Tm||!fe(n.toString))?Pm(n)?bt(n.value):JSON.stringify(n,Dm,2):String(n),Dm=(n,t)=>Pm(t)?Dm(n,t.value):Eo(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,r],s)=>(e[kc(i,s)+" =>"]=r,e),{})}:bm(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>kc(e))}:tr(t)?kc(t):Ie(t)&&!re(t)&&!wm(t)?String(t):t,kc=(n,t="")=>{var e;return tr(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Qn;class Cg{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Qn,!t&&Qn&&(this.index=(Qn.scopes||(Qn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=Qn;try{return Qn=this,t()}finally{Qn=e}}}on(){++this._on===1&&(this.prevScope=Qn,Qn=this)}off(){this._on>0&&--this._on===0&&(Qn=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Rg(){return Qn}let Ge;const zc=new WeakSet;class Im{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Qn&&Qn.active&&Qn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,zc.has(this)&&(zc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Um(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,_d(this),Nm(this);const t=Ge,e=Bi;Ge=this,Bi=!0;try{return this.fn()}finally{Om(this),Ge=t,Bi=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)ph(t);this.deps=this.depsTail=void 0,_d(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?zc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Vu(this)&&this.run()}get dirty(){return Vu(this)}}let Lm=0,xa,Ma;function Um(n,t=!1){if(n.flags|=8,t){n.next=Ma,Ma=n;return}n.next=xa,xa=n}function hh(){Lm++}function dh(){if(--Lm>0)return;if(Ma){let t=Ma;for(Ma=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;xa;){let t=xa;for(xa=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Nm(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Om(n){let t,e=n.depsTail,i=e;for(;i;){const r=i.prevDep;i.version===-1?(i===e&&(e=r),ph(i),Pg(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=t,n.depsTail=e}function Vu(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Fm(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Fm(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===La)||(n.globalVersion=La,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Vu(n))))return;n.flags|=2;const t=n.dep,e=Ge,i=Bi;Ge=n,Bi=!0;try{Nm(n);const r=n.fn(n._value);(t.version===0||$r(r,n._value))&&(n.flags|=128,n._value=r,t.version++)}catch(r){throw t.version++,r}finally{Ge=e,Bi=i,Om(n),n.flags&=-3}}function ph(n,t=!1){const{dep:e,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let s=e.computed.deps;s;s=s.nextDep)ph(s,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function Pg(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let Bi=!0;const Bm=[];function xr(){Bm.push(Bi),Bi=!1}function Mr(){const n=Bm.pop();Bi=n===void 0?!0:n}function _d(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=Ge;Ge=void 0;try{t()}finally{Ge=e}}}let La=0;class Dg{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class mh{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Ge||!Bi||Ge===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==Ge)e=this.activeLink=new Dg(Ge,this),Ge.deps?(e.prevDep=Ge.depsTail,Ge.depsTail.nextDep=e,Ge.depsTail=e):Ge.deps=Ge.depsTail=e,km(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=Ge.depsTail,e.nextDep=void 0,Ge.depsTail.nextDep=e,Ge.depsTail=e,Ge.deps===e&&(Ge.deps=i)}return e}trigger(t){this.version++,La++,this.notify(t)}notify(t){hh();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{dh()}}}function km(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)km(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Gu=new WeakMap,Ns=Symbol(""),Wu=Symbol(""),Ua=Symbol("");function Ln(n,t,e){if(Bi&&Ge){let i=Gu.get(n);i||Gu.set(n,i=new Map);let r=i.get(e);r||(i.set(e,r=new mh),r.map=i,r.key=e),r.track()}}function mr(n,t,e,i,r,s){const o=Gu.get(n);if(!o){La++;return}const a=l=>{l&&l.trigger()};if(hh(),t==="clear")o.forEach(a);else{const l=re(n),u=l&&ch(e);if(l&&e==="length"){const c=Number(i);o.forEach((f,h)=>{(h==="length"||h===Ua||!tr(h)&&h>=c)&&a(f)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),u&&a(o.get(Ua)),t){case"add":l?u&&a(o.get("length")):(a(o.get(Ns)),Eo(n)&&a(o.get(Wu)));break;case"delete":l||(a(o.get(Ns)),Eo(n)&&a(o.get(Wu)));break;case"set":Eo(n)&&a(o.get(Ns));break}}dh()}function js(n){const t=Pe(n);return t===n?t:(Ln(t,"iterate",Ua),Ri(n)?t:t.map(zi))}function xc(n){return Ln(n=Pe(n),"iterate",Ua),n}function Vr(n,t){return Sr(n)?Uo(Os(n)?zi(t):t):zi(t)}const Ig={__proto__:null,[Symbol.iterator](){return Hc(this,Symbol.iterator,n=>Vr(this,n))},concat(...n){return js(this).concat(...n.map(t=>re(t)?js(t):t))},entries(){return Hc(this,"entries",n=>(n[1]=Vr(this,n[1]),n))},every(n,t){return ir(this,"every",n,t,void 0,arguments)},filter(n,t){return ir(this,"filter",n,t,e=>e.map(i=>Vr(this,i)),arguments)},find(n,t){return ir(this,"find",n,t,e=>Vr(this,e),arguments)},findIndex(n,t){return ir(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return ir(this,"findLast",n,t,e=>Vr(this,e),arguments)},findLastIndex(n,t){return ir(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return ir(this,"forEach",n,t,void 0,arguments)},includes(...n){return Vc(this,"includes",n)},indexOf(...n){return Vc(this,"indexOf",n)},join(n){return js(this).join(n)},lastIndexOf(...n){return Vc(this,"lastIndexOf",n)},map(n,t){return ir(this,"map",n,t,void 0,arguments)},pop(){return ia(this,"pop")},push(...n){return ia(this,"push",n)},reduce(n,...t){return gd(this,"reduce",n,t)},reduceRight(n,...t){return gd(this,"reduceRight",n,t)},shift(){return ia(this,"shift")},some(n,t){return ir(this,"some",n,t,void 0,arguments)},splice(...n){return ia(this,"splice",n)},toReversed(){return js(this).toReversed()},toSorted(n){return js(this).toSorted(n)},toSpliced(...n){return js(this).toSpliced(...n)},unshift(...n){return ia(this,"unshift",n)},values(){return Hc(this,"values",n=>Vr(this,n))}};function Hc(n,t,e){const i=xc(n),r=i[t]();return i!==n&&!Ri(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=e(s.value)),s}),r}const Lg=Array.prototype;function ir(n,t,e,i,r,s){const o=xc(n),a=o!==n&&!Ri(n),l=o[t];if(l!==Lg[t]){const f=l.apply(n,s);return a?zi(f):f}let u=e;o!==n&&(a?u=function(f,h){return e.call(this,Vr(n,f),h,n)}:e.length>2&&(u=function(f,h){return e.call(this,f,h,n)}));const c=l.call(o,u,i);return a&&r?r(c):c}function gd(n,t,e,i){const r=xc(n);let s=e;return r!==n&&(Ri(n)?e.length>3&&(s=function(o,a,l){return e.call(this,o,a,l,n)}):s=function(o,a,l){return e.call(this,o,Vr(n,a),l,n)}),r[t](s,...i)}function Vc(n,t,e){const i=Pe(n);Ln(i,"iterate",Ua);const r=i[t](...e);return(r===-1||r===!1)&&vh(e[0])?(e[0]=Pe(e[0]),i[t](...e)):r}function ia(n,t,e=[]){xr(),hh();const i=Pe(n)[t].apply(n,e);return dh(),Mr(),i}const Ug=oh("__proto__,__v_isRef,__isVue"),zm=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(tr));function Ng(n){tr(n)||(n=String(n));const t=Pe(this);return Ln(t,"has",n),t.hasOwnProperty(n)}class Hm{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const r=this._isReadonly,s=this._isShallow;if(e==="__v_isReactive")return!r;if(e==="__v_isReadonly")return r;if(e==="__v_isShallow")return s;if(e==="__v_raw")return i===(r?s?Xg:Xm:s?Wm:Gm).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=re(t);if(!r){let l;if(o&&(l=Ig[e]))return l;if(e==="hasOwnProperty")return Ng}const a=Reflect.get(t,e,Nn(t)?t:i);if((tr(e)?zm.has(e):Ug(e))||(r||Ln(t,"get",e),s))return a;if(Nn(a)){const l=o&&ch(e)?a:a.value;return r&&Ie(l)?Yu(l):l}return Ie(a)?r?Yu(a):Na(a):a}}class Vm extends Hm{constructor(t=!1){super(!1,t)}set(t,e,i,r){let s=t[e];const o=re(t)&&ch(e);if(!this._isShallow){const u=Sr(s);if(!Ri(i)&&!Sr(i)&&(s=Pe(s),i=Pe(i)),!o&&Nn(s)&&!Nn(i))return u||(s.value=i),!0}const a=o?Number(e)<t.length:De(t,e),l=Reflect.set(t,e,i,Nn(t)?t:r);return t===Pe(r)&&(a?$r(i,s)&&mr(t,"set",e,i):mr(t,"add",e,i)),l}deleteProperty(t,e){const i=De(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&i&&mr(t,"delete",e,void 0),r}has(t,e){const i=Reflect.has(t,e);return(!tr(e)||!zm.has(e))&&Ln(t,"has",e),i}ownKeys(t){return Ln(t,"iterate",re(t)?"length":Ns),Reflect.ownKeys(t)}}class Og extends Hm{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Fg=new Vm,Bg=new Og,kg=new Vm(!0);const Xu=n=>n,ol=n=>Reflect.getPrototypeOf(n);function zg(n,t,e){return function(...i){const r=this.__v_raw,s=Pe(r),o=Eo(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,u=r[n](...i),c=e?Xu:t?Uo:zi;return!t&&Ln(s,"iterate",l?Wu:Ns),gn(Object.create(u),{next(){const{value:f,done:h}=u.next();return h?{value:f,done:h}:{value:a?[c(f[0]),c(f[1])]:c(f),done:h}}})}}function al(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Hg(n,t){const e={get(r){const s=this.__v_raw,o=Pe(s),a=Pe(r);n||($r(r,a)&&Ln(o,"get",r),Ln(o,"get",a));const{has:l}=ol(o),u=t?Xu:n?Uo:zi;if(l.call(o,r))return u(s.get(r));if(l.call(o,a))return u(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Ln(Pe(r),"iterate",Ns),r.size},has(r){const s=this.__v_raw,o=Pe(s),a=Pe(r);return n||($r(r,a)&&Ln(o,"has",r),Ln(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=Pe(a),u=t?Xu:n?Uo:zi;return!n&&Ln(l,"iterate",Ns),a.forEach((c,f)=>r.call(s,u(c),u(f),o))}};return gn(e,n?{add:al("add"),set:al("set"),delete:al("delete"),clear:al("clear")}:{add(r){!t&&!Ri(r)&&!Sr(r)&&(r=Pe(r));const s=Pe(this);return ol(s).has.call(s,r)||(s.add(r),mr(s,"add",r,r)),this},set(r,s){!t&&!Ri(s)&&!Sr(s)&&(s=Pe(s));const o=Pe(this),{has:a,get:l}=ol(o);let u=a.call(o,r);u||(r=Pe(r),u=a.call(o,r));const c=l.call(o,r);return o.set(r,s),u?$r(s,c)&&mr(o,"set",r,s):mr(o,"add",r,s),this},delete(r){const s=Pe(this),{has:o,get:a}=ol(s);let l=o.call(s,r);l||(r=Pe(r),l=o.call(s,r)),a&&a.call(s,r);const u=s.delete(r);return l&&mr(s,"delete",r,void 0),u},clear(){const r=Pe(this),s=r.size!==0,o=r.clear();return s&&mr(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=zg(r,n,t)}),e}function _h(n,t){const e=Hg(n,t);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(De(e,r)&&r in i?e:i,r,s)}const Vg={get:_h(!1,!1)},Gg={get:_h(!1,!0)},Wg={get:_h(!0,!1)};const Gm=new WeakMap,Wm=new WeakMap,Xm=new WeakMap,Xg=new WeakMap;function Yg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qg(n){return n.__v_skip||!Object.isExtensible(n)?0:Yg(gg(n))}function Na(n){return Sr(n)?n:gh(n,!1,Fg,Vg,Gm)}function $g(n){return gh(n,!1,kg,Gg,Wm)}function Yu(n){return gh(n,!0,Bg,Wg,Xm)}function gh(n,t,e,i,r){if(!Ie(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const s=qg(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:e);return r.set(n,a),a}function Os(n){return Sr(n)?Os(n.__v_raw):!!(n&&n.__v_isReactive)}function Sr(n){return!!(n&&n.__v_isReadonly)}function Ri(n){return!!(n&&n.__v_isShallow)}function vh(n){return n?!!n.__v_raw:!1}function Pe(n){const t=n&&n.__v_raw;return t?Pe(t):n}function Kg(n){return!De(n,"__v_skip")&&Object.isExtensible(n)&&Cm(n,"__v_skip",!0),n}const zi=n=>Ie(n)?Na(n):n,Uo=n=>Ie(n)?Yu(n):n;function Nn(n){return n?n.__v_isRef===!0:!1}function de(n){return jg(n,!1)}function jg(n,t){return Nn(n)?n:new Zg(n,t)}class Zg{constructor(t,e){this.dep=new mh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:Pe(t),this._value=e?t:zi(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||Ri(t)||Sr(t);t=i?t:Pe(t),$r(t,e)&&(this._rawValue=t,this._value=i?t:zi(t),this.dep.trigger())}}function Rt(n){return Nn(n)?n.value:n}const Jg={get:(n,t,e)=>t==="__v_raw"?n:Rt(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const r=n[t];return Nn(r)&&!Nn(e)?(r.value=e,!0):Reflect.set(n,t,e,i)}};function Ym(n){return Os(n)?n:new Proxy(n,Jg)}class Qg{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new mh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=La-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ge!==this)return Um(this,!0),!0}get value(){const t=this.dep.track();return Fm(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function tv(n,t,e=!1){let i,r;return fe(n)?i=n:(i=n.get,r=n.set),new Qg(i,r,e)}const ll={},jl=new WeakMap;let Es;function ev(n,t=!1,e=Es){if(e){let i=jl.get(e);i||jl.set(e,i=[]),i.push(n)}}function nv(n,t,e=ze){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=e,u=v=>r?v:Ri(v)||r===!1||r===0?_r(v,1):_r(v);let c,f,h,d,g=!1,_=!1;if(Nn(n)?(f=()=>n.value,g=Ri(n)):Os(n)?(f=()=>u(n),g=!0):re(n)?(_=!0,g=n.some(v=>Os(v)||Ri(v)),f=()=>n.map(v=>{if(Nn(v))return v.value;if(Os(v))return u(v);if(fe(v))return l?l(v,2):v()})):fe(n)?t?f=l?()=>l(n,2):n:f=()=>{if(h){xr();try{h()}finally{Mr()}}const v=Es;Es=c;try{return l?l(n,3,[d]):n(d)}finally{Es=v}}:f=Qi,t&&r){const v=f,R=r===!0?1/0:r;f=()=>_r(v(),R)}const p=Rg(),m=()=>{c.stop(),p&&p.active&&lh(p.effects,c)};if(s&&t){const v=t;t=(...R)=>{v(...R),m()}}let S=_?new Array(n.length).fill(ll):ll;const M=v=>{if(!(!(c.flags&1)||!c.dirty&&!v))if(t){const R=c.run();if(r||g||(_?R.some((w,P)=>$r(w,S[P])):$r(R,S))){h&&h();const w=Es;Es=c;try{const P=[R,S===ll?void 0:_&&S[0]===ll?[]:S,d];S=R,l?l(t,3,P):t(...P)}finally{Es=w}}}else c.run()};return a&&a(M),c=new Im(f),c.scheduler=o?()=>o(M,!1):M,d=v=>ev(v,!1,c),h=c.onStop=()=>{const v=jl.get(c);if(v){if(l)l(v,4);else for(const R of v)R();jl.delete(c)}},t?i?M(!0):S=c.run():o?o(M.bind(null,!0),!0):c.run(),m.pause=c.pause.bind(c),m.resume=c.resume.bind(c),m.stop=m,m}function _r(n,t=1/0,e){if(t<=0||!Ie(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,Nn(n))_r(n.value,t,e);else if(re(n))for(let i=0;i<n.length;i++)_r(n[i],t,e);else if(bm(n)||Eo(n))n.forEach(i=>{_r(i,t,e)});else if(wm(n)){for(const i in n)_r(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&_r(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ja(n,t,e,i){try{return i?n(...i):n()}catch(r){Mc(r,t,e)}}function Hi(n,t,e,i){if(fe(n)){const r=ja(n,t,e,i);return r&&Em(r)&&r.catch(s=>{Mc(s,t,e)}),r}if(re(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Hi(n[s],t,e,i));return r}}function Mc(n,t,e,i=!0){const r=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||ze;if(t){let a=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const c=a.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](n,l,u)===!1)return}a=a.parent}if(s){xr(),ja(s,null,10,[n,l,u]),Mr();return}}iv(n,e,r,i,o)}function iv(n,t,e,i=!0,r=!1){if(r)throw n;console.error(n)}const Vn=[];let Wi=-1;const To=[];let Gr=null,ho=0;const qm=Promise.resolve();let Zl=null;function Zn(n){const t=Zl||qm;return n?t.then(this?n.bind(this):n):t}function rv(n){let t=Wi+1,e=Vn.length;for(;t<e;){const i=t+e>>>1,r=Vn[i],s=Oa(r);s<n||s===n&&r.flags&2?t=i+1:e=i}return t}function yh(n){if(!(n.flags&1)){const t=Oa(n),e=Vn[Vn.length-1];!e||!(n.flags&2)&&t>=Oa(e)?Vn.push(n):Vn.splice(rv(t),0,n),n.flags|=1,$m()}}function $m(){Zl||(Zl=qm.then(jm))}function sv(n){re(n)?To.push(...n):Gr&&n.id===-1?Gr.splice(ho+1,0,n):n.flags&1||(To.push(n),n.flags|=1),$m()}function vd(n,t,e=Wi+1){for(;e<Vn.length;e++){const i=Vn[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Vn.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Km(n){if(To.length){const t=[...new Set(To)].sort((e,i)=>Oa(e)-Oa(i));if(To.length=0,Gr){Gr.push(...t);return}for(Gr=t,ho=0;ho<Gr.length;ho++){const e=Gr[ho];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Gr=null,ho=0}}const Oa=n=>n.id==null?n.flags&2?-1:1/0:n.id;function jm(n){try{for(Wi=0;Wi<Vn.length;Wi++){const t=Vn[Wi];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),ja(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Wi<Vn.length;Wi++){const t=Vn[Wi];t&&(t.flags&=-2)}Wi=-1,Vn.length=0,Km(),Zl=null,(Vn.length||To.length)&&jm()}}let wi=null,Zm=null;function Jl(n){const t=wi;return wi=n,Zm=n&&n.type.__scopeId||null,t}function Ni(n,t=wi,e){if(!t||n._n)return n;const i=(...r)=>{i._d&&ec(-1);const s=Jl(t);let o;try{o=n(...r)}finally{Jl(s),i._d&&ec(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function wo(n,t){if(wi===null)return n;const e=Ac(wi),i=n.dirs||(n.dirs=[]);for(let r=0;r<t.length;r++){let[s,o,a,l=ze]=t[r];s&&(fe(s)&&(s={mounted:s,updated:s}),s.deep&&_r(o),i.push({dir:s,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function hs(n,t,e,i){const r=n.dirs,s=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(xr(),Hi(l,e,8,[n.el,a,n,t]),Mr())}}function ov(n,t){if(Wn){let e=Wn.provides;const i=Wn.parent&&Wn.parent.provides;i===e&&(e=Wn.provides=Object.create(i)),e[n]=t}}function Ol(n,t,e=!1){const i=A0();if(i||Ao){let r=Ao?Ao._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return e&&fe(t)?t.call(i&&i.proxy):t}}const av=Symbol.for("v-scx"),lv=()=>Ol(av);function ui(n,t,e){return Jm(n,t,e)}function Jm(n,t,e=ze){const{immediate:i,deep:r,flush:s,once:o}=e,a=gn({},e),l=t&&i||!t&&s!=="post";let u;if(ka){if(s==="sync"){const d=lv();u=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Qi,d.resume=Qi,d.pause=Qi,d}}const c=Wn;a.call=(d,g,_)=>Hi(d,c,g,_);let f=!1;s==="post"?a.scheduler=d=>{Jn(d,c&&c.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(d,g)=>{g?d():yh(d)}),a.augmentJob=d=>{t&&(d.flags|=4),f&&(d.flags|=2,c&&(d.id=c.uid,d.i=c))};const h=nv(n,t,a);return ka&&(u?u.push(h):l&&h()),h}function cv(n,t,e){const i=this.proxy,r=on(n)?n.includes(".")?Qm(i,n):()=>i[n]:n.bind(i,i);let s;fe(t)?s=t:(s=t.handler,e=t);const o=Ja(this),a=Jm(r,s.bind(i),e);return o(),a}function Qm(n,t){const e=t.split(".");return()=>{let i=n;for(let r=0;r<e.length&&i;r++)i=i[e[r]];return i}}const uv=Symbol("_vte"),t0=n=>n.__isTeleport,Yi=Symbol("_leaveCb"),ra=Symbol("_enterCb");function fv(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Za(()=>{n.isMounted=!0}),xh(()=>{n.isUnmounting=!0}),n}const bi=[Function,Array],e0={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:bi,onEnter:bi,onAfterEnter:bi,onEnterCancelled:bi,onBeforeLeave:bi,onLeave:bi,onAfterLeave:bi,onLeaveCancelled:bi,onBeforeAppear:bi,onAppear:bi,onAfterAppear:bi,onAppearCancelled:bi},n0=n=>{const t=n.subTree;return t.component?n0(t.component):t},hv={name:"BaseTransition",props:e0,setup(n,{slots:t}){const e=A0(),i=fv();return()=>{const r=t.default&&s0(t.default(),!0);if(!r||!r.length)return;const s=i0(r),o=Pe(n),{mode:a}=o;if(i.isLeaving)return Gc(s);const l=yd(s);if(!l)return Gc(s);let u=qu(l,o,i,e,f=>u=f);l.type!==Gn&&Fa(l,u);let c=e.subTree&&yd(e.subTree);if(c&&c.type!==Gn&&!Cs(c,l)&&n0(e).type!==Gn){let f=qu(c,o,i,e);if(Fa(c,f),a==="out-in"&&l.type!==Gn)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,e.job.flags&8||e.update(),delete f.afterLeave,c=void 0},Gc(s);a==="in-out"&&l.type!==Gn?f.delayLeave=(h,d,g)=>{const _=r0(i,c);_[String(c.key)]=c,h[Yi]=()=>{d(),h[Yi]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{g(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return s}}};function i0(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==Gn){t=e;break}}return t}const dv=hv;function r0(n,t){const{leavingVNodes:e}=n;let i=e.get(t.type);return i||(i=Object.create(null),e.set(t.type,i)),i}function qu(n,t,e,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:h,onLeave:d,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:p,onAppear:m,onAfterAppear:S,onAppearCancelled:M}=t,v=String(n.key),R=r0(e,n),w=(x,b)=>{x&&Hi(x,i,9,b)},P=(x,b)=>{const N=b[1];w(x,b),re(x)?x.every(B=>B.length<=1)&&N():x.length<=1&&N()},D={mode:o,persisted:a,beforeEnter(x){let b=l;if(!e.isMounted)if(s)b=p||l;else return;x[Yi]&&x[Yi](!0);const N=R[v];N&&Cs(n,N)&&N.el[Yi]&&N.el[Yi](),w(b,[x])},enter(x){if(R[v]===n)return;let b=u,N=c,B=f;if(!e.isMounted)if(s)b=m||u,N=S||c,B=M||f;else return;let H=!1;x[ra]=j=>{H||(H=!0,j?w(B,[x]):w(N,[x]),D.delayedLeave&&D.delayedLeave(),x[ra]=void 0)};const J=x[ra].bind(null,!1);b?P(b,[x,J]):J()},leave(x,b){const N=String(n.key);if(x[ra]&&x[ra](!0),e.isUnmounting)return b();w(h,[x]);let B=!1;x[Yi]=J=>{B||(B=!0,b(),J?w(_,[x]):w(g,[x]),x[Yi]=void 0,R[N]===n&&delete R[N])};const H=x[Yi].bind(null,!1);R[N]=n,d?P(d,[x,H]):H()},clone(x){const b=qu(x,t,e,i,r);return r&&r(b),b}};return D}function Gc(n){if(Sc(n))return n=ts(n),n.children=null,n}function yd(n){if(!Sc(n))return t0(n.type)&&n.children?i0(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&fe(e.default))return e.default()}}function Fa(n,t){n.shapeFlag&6&&n.component?(n.transition=t,Fa(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function s0(n,t=!1,e){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=e==null?o.key:String(e)+String(o.key!=null?o.key:s);o.type===Ne?(o.patchFlag&128&&r++,i=i.concat(s0(o.children,t,a))):(t||o.type!==Gn)&&i.push(a!=null?ts(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function pv(n,t){return fe(n)?gn({name:n.name},t,{setup:n}):n}function o0(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function xd(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const Ql=new WeakMap;function Sa(n,t,e,i,r=!1){if(re(n)){n.forEach((_,p)=>Sa(_,t&&(re(t)?t[p]:t),e,i,r));return}if(ba(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Sa(n,t,e,i.component.subTree);return}const s=i.shapeFlag&4?Ac(i.component):i.el,o=r?null:s,{i:a,r:l}=n,u=t&&t.r,c=a.refs===ze?a.refs={}:a.refs,f=a.setupState,h=Pe(f),d=f===ze?Sm:_=>xd(c,_)?!1:De(h,_),g=(_,p)=>!(p&&xd(c,p));if(u!=null&&u!==l){if(Md(t),on(u))c[u]=null,d(u)&&(f[u]=null);else if(Nn(u)){const _=t;g(u,_.k)&&(u.value=null),_.k&&(c[_.k]=null)}}if(fe(l))ja(l,a,12,[o,c]);else{const _=on(l),p=Nn(l);if(_||p){const m=()=>{if(n.f){const S=_?d(l)?f[l]:c[l]:g()||!n.k?l.value:c[n.k];if(r)re(S)&&lh(S,s);else if(re(S))S.includes(s)||S.push(s);else if(_)c[l]=[s],d(l)&&(f[l]=c[l]);else{const M=[s];g(l,n.k)&&(l.value=M),n.k&&(c[n.k]=M)}}else _?(c[l]=o,d(l)&&(f[l]=o)):p&&(g(l,n.k)&&(l.value=o),n.k&&(c[n.k]=o))};if(o){const S=()=>{m(),Ql.delete(n)};S.id=-1,Ql.set(n,S),Jn(S,e)}else Md(n),m()}}}function Md(n){const t=Ql.get(n);t&&(t.flags|=8,Ql.delete(n))}yc().requestIdleCallback;yc().cancelIdleCallback;const ba=n=>!!n.type.__asyncLoader,Sc=n=>n.type.__isKeepAlive;function mv(n,t){a0(n,"a",t)}function _v(n,t){a0(n,"da",t)}function a0(n,t,e=Wn){const i=n.__wdc||(n.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(bc(t,i,e),e){let r=e.parent;for(;r&&r.parent;)Sc(r.parent.vnode)&&gv(i,t,e,r),r=r.parent}}function gv(n,t,e,i){const r=bc(t,n,i,!0);Ec(()=>{lh(i[t],r)},e)}function bc(n,t,e=Wn,i=!1){if(e){const r=e[n]||(e[n]=[]),s=t.__weh||(t.__weh=(...o)=>{xr();const a=Ja(e),l=Hi(t,e,n,o);return a(),Mr(),l});return i?r.unshift(s):r.push(s),s}}const Ar=n=>(t,e=Wn)=>{(!ka||n==="sp")&&bc(n,(...i)=>t(...i),e)},vv=Ar("bm"),Za=Ar("m"),yv=Ar("bu"),xv=Ar("u"),xh=Ar("bum"),Ec=Ar("um"),Mv=Ar("sp"),Sv=Ar("rtg"),bv=Ar("rtc");function Ev(n,t=Wn){bc("ec",n,t)}const Tv=Symbol.for("v-ndc");function In(n,t,e,i){let r;const s=e,o=re(n);if(o||on(n)){const a=o&&Os(n);let l=!1,u=!1;a&&(l=!Ri(n),u=Sr(n),n=xc(n)),r=new Array(n.length);for(let c=0,f=n.length;c<f;c++)r[c]=t(l?u?Uo(zi(n[c])):zi(n[c]):n[c],c,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=t(a+1,a,void 0,s)}else if(Ie(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>t(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];r[l]=t(n[c],c,l,s)}}else r=[];return r}const $u=n=>n?C0(n)?Ac(n):$u(n.parent):null,Ea=gn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>$u(n.parent),$root:n=>$u(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>c0(n),$forceUpdate:n=>n.f||(n.f=()=>{yh(n.update)}),$nextTick:n=>n.n||(n.n=Zn.bind(n.proxy)),$watch:n=>cv.bind(n)}),Wc=(n,t)=>n!==ze&&!n.__isScriptSetup&&De(n,t),wv={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const h=o[t];if(h!==void 0)switch(h){case 1:return i[t];case 2:return r[t];case 4:return e[t];case 3:return s[t]}else{if(Wc(i,t))return o[t]=1,i[t];if(r!==ze&&De(r,t))return o[t]=2,r[t];if(De(s,t))return o[t]=3,s[t];if(e!==ze&&De(e,t))return o[t]=4,e[t];Ku&&(o[t]=0)}}const u=Ea[t];let c,f;if(u)return t==="$attrs"&&Ln(n.attrs,"get",""),u(n);if((c=a.__cssModules)&&(c=c[t]))return c;if(e!==ze&&De(e,t))return o[t]=4,e[t];if(f=l.config.globalProperties,De(f,t))return f[t]},set({_:n},t,e){const{data:i,setupState:r,ctx:s}=n;return Wc(r,t)?(r[t]=e,!0):i!==ze&&De(i,t)?(i[t]=e,!0):De(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(s[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(e[a]||n!==ze&&a[0]!=="$"&&De(n,a)||Wc(t,a)||De(s,a)||De(i,a)||De(Ea,a)||De(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:De(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Sd(n){return re(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Ku=!0;function Av(n){const t=c0(n),e=n.proxy,i=n.ctx;Ku=!1,t.beforeCreate&&bd(t.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:_,deactivated:p,beforeDestroy:m,beforeUnmount:S,destroyed:M,unmounted:v,render:R,renderTracked:w,renderTriggered:P,errorCaptured:D,serverPrefetch:x,expose:b,inheritAttrs:N,components:B,directives:H,filters:J}=t;if(u&&Cv(u,i,null),o)for(const et in o){const W=o[et];fe(W)&&(i[et]=W.bind(e))}if(r){const et=r.call(e,e);Ie(et)&&(n.data=Na(et))}if(Ku=!0,s)for(const et in s){const W=s[et],vt=fe(W)?W.bind(e,e):fe(W.get)?W.get.bind(e,e):Qi,Pt=!fe(W)&&fe(W.set)?W.set.bind(e):Qi,At=rn({get:vt,set:Pt});Object.defineProperty(i,et,{enumerable:!0,configurable:!0,get:()=>At.value,set:zt=>At.value=zt})}if(a)for(const et in a)l0(a[et],i,e,et);if(l){const et=fe(l)?l.call(e):l;Reflect.ownKeys(et).forEach(W=>{ov(W,et[W])})}c&&bd(c,n,"c");function $(et,W){re(W)?W.forEach(vt=>et(vt.bind(e))):W&&et(W.bind(e))}if($(vv,f),$(Za,h),$(yv,d),$(xv,g),$(mv,_),$(_v,p),$(Ev,D),$(bv,w),$(Sv,P),$(xh,S),$(Ec,v),$(Mv,x),re(b))if(b.length){const et=n.exposed||(n.exposed={});b.forEach(W=>{Object.defineProperty(et,W,{get:()=>e[W],set:vt=>e[W]=vt,enumerable:!0})})}else n.exposed||(n.exposed={});R&&n.render===Qi&&(n.render=R),N!=null&&(n.inheritAttrs=N),B&&(n.components=B),H&&(n.directives=H),x&&o0(n)}function Cv(n,t,e=Qi){re(n)&&(n=ju(n));for(const i in n){const r=n[i];let s;Ie(r)?"default"in r?s=Ol(r.from||i,r.default,!0):s=Ol(r.from||i):s=Ol(r),Nn(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[i]=s}}function bd(n,t,e){Hi(re(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function l0(n,t,e,i){let r=i.includes(".")?Qm(e,i):()=>e[i];if(on(n)){const s=t[n];fe(s)&&ui(r,s)}else if(fe(n))ui(r,n.bind(e));else if(Ie(n))if(re(n))n.forEach(s=>l0(s,t,e,i));else{const s=fe(n.handler)?n.handler.bind(e):t[n.handler];fe(s)&&ui(r,s,n)}}function c0(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(t);let l;return a?l=a:!r.length&&!e&&!i?l=t:(l={},r.length&&r.forEach(u=>tc(l,u,o,!0)),tc(l,t,o)),Ie(t)&&s.set(t,l),l}function tc(n,t,e,i=!1){const{mixins:r,extends:s}=t;s&&tc(n,s,e,!0),r&&r.forEach(o=>tc(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=Rv[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const Rv={data:Ed,props:Td,emits:Td,methods:pa,computed:pa,beforeCreate:zn,created:zn,beforeMount:zn,mounted:zn,beforeUpdate:zn,updated:zn,beforeDestroy:zn,beforeUnmount:zn,destroyed:zn,unmounted:zn,activated:zn,deactivated:zn,errorCaptured:zn,serverPrefetch:zn,components:pa,directives:pa,watch:Dv,provide:Ed,inject:Pv};function Ed(n,t){return t?n?function(){return gn(fe(n)?n.call(this,this):n,fe(t)?t.call(this,this):t)}:t:n}function Pv(n,t){return pa(ju(n),ju(t))}function ju(n){if(re(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function zn(n,t){return n?[...new Set([].concat(n,t))]:t}function pa(n,t){return n?gn(Object.create(null),n,t):t}function Td(n,t){return n?re(n)&&re(t)?[...new Set([...n,...t])]:gn(Object.create(null),Sd(n),Sd(t??{})):t}function Dv(n,t){if(!n)return t;if(!t)return n;const e=gn(Object.create(null),n);for(const i in t)e[i]=zn(n[i],t[i]);return e}function u0(){return{app:null,config:{isNativeTag:Sm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Iv=0;function Lv(n,t){return function(i,r=null){fe(i)||(i=gn({},i)),r!=null&&!Ie(r)&&(r=null);const s=u0(),o=new WeakSet,a=[];let l=!1;const u=s.app={_uid:Iv++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:dy,get config(){return s.config},set config(c){},use(c,...f){return o.has(c)||(c&&fe(c.install)?(o.add(c),c.install(u,...f)):fe(c)&&(o.add(c),c(u,...f))),u},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),u},component(c,f){return f?(s.components[c]=f,u):s.components[c]},directive(c,f){return f?(s.directives[c]=f,u):s.directives[c]},mount(c,f,h){if(!l){const d=u._ceVNode||He(i,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(d,c,h),l=!0,u._container=c,c.__vue_app__=u,Ac(d.component)}},onUnmount(c){a.push(c)},unmount(){l&&(Hi(a,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(c,f){return s.provides[c]=f,u},runWithContext(c){const f=Ao;Ao=u;try{return c()}finally{Ao=f}}};return u}}let Ao=null;const Uv=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Qr(t)}Modifiers`]||n[`${Gs(t)}Modifiers`];function Nv(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||ze;let r=e;const s=t.startsWith("update:"),o=s&&Uv(i,t.slice(7));o&&(o.trim&&(r=e.map(c=>on(c)?c.trim():c)),o.number&&(r=e.map(uh)));let a,l=i[a=Bc(t)]||i[a=Bc(Qr(t))];!l&&s&&(l=i[a=Bc(Gs(t))]),l&&Hi(l,n,6,r);const u=i[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Hi(u,n,6,r)}}const Ov=new WeakMap;function f0(n,t,e=!1){const i=e?Ov:t.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!fe(n)){const l=u=>{const c=f0(u,t,!0);c&&(a=!0,gn(o,c))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(Ie(n)&&i.set(n,null),null):(re(s)?s.forEach(l=>o[l]=null):gn(o,s),Ie(n)&&i.set(n,o),o)}function Tc(n,t){return!n||!gc(t)?!1:(t=t.slice(2).replace(/Once$/,""),De(n,t[0].toLowerCase()+t.slice(1))||De(n,Gs(t))||De(n,t))}function wd(n){const{type:t,vnode:e,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:f,data:h,setupState:d,ctx:g,inheritAttrs:_}=n,p=Jl(n);let m,S;try{if(e.shapeFlag&4){const v=r||i,R=v;m=$i(u.call(R,v,c,f,d,h,g)),S=a}else{const v=t;m=$i(v.length>1?v(f,{attrs:a,slots:o,emit:l}):v(f,null)),S=t.props?a:Fv(a)}}catch(v){Ta.length=0,Mc(v,n,1),m=He(Gn)}let M=m;if(S&&_!==!1){const v=Object.keys(S),{shapeFlag:R}=M;v.length&&R&7&&(s&&v.some(ah)&&(S=Bv(S,s)),M=ts(M,S,!1,!0))}return e.dirs&&(M=ts(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(e.dirs):e.dirs),e.transition&&Fa(M,e.transition),m=M,Jl(p),m}const Fv=n=>{let t;for(const e in n)(e==="class"||e==="style"||gc(e))&&((t||(t={}))[e]=n[e]);return t},Bv=(n,t)=>{const e={};for(const i in n)(!ah(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function kv(n,t,e){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Ad(i,o,u):!!o;if(l&8){const c=t.dynamicProps;for(let f=0;f<c.length;f++){const h=c[f];if(h0(o,i,h)&&!Tc(u,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Ad(i,o,u):!0:!!o;return!1}function Ad(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(h0(t,n,s)&&!Tc(e,s))return!0}return!1}function h0(n,t,e){const i=n[e],r=t[e];return e==="style"&&Ie(i)&&Ie(r)?!fh(i,r):i!==r}function zv({vnode:n,parent:t},e){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=t.vnode).el=e,t=t.parent;else break}}const d0={},p0=()=>Object.create(d0),m0=n=>Object.getPrototypeOf(n)===d0;function Hv(n,t,e,i=!1){const r={},s=p0();n.propsDefaults=Object.create(null),_0(n,t,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);e?n.props=i?r:$g(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Vv(n,t,e,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Pe(r),[l]=n.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const c=n.vnode.dynamicProps;for(let f=0;f<c.length;f++){let h=c[f];if(Tc(n.emitsOptions,h))continue;const d=t[h];if(l)if(De(s,h))d!==s[h]&&(s[h]=d,u=!0);else{const g=Qr(h);r[g]=Zu(l,a,g,d,n,!1)}else d!==s[h]&&(s[h]=d,u=!0)}}}else{_0(n,t,r,s)&&(u=!0);let c;for(const f in a)(!t||!De(t,f)&&((c=Gs(f))===f||!De(t,c)))&&(l?e&&(e[f]!==void 0||e[c]!==void 0)&&(r[f]=Zu(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!t||!De(t,f))&&(delete s[f],u=!0)}u&&mr(n.attrs,"set","")}function _0(n,t,e,i){const[r,s]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(ya(l))continue;const u=t[l];let c;r&&De(r,c=Qr(l))?!s||!s.includes(c)?e[c]=u:(a||(a={}))[c]=u:Tc(n.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,o=!0)}if(s){const l=Pe(e),u=a||ze;for(let c=0;c<s.length;c++){const f=s[c];e[f]=Zu(r,l,f,u[f],n,!De(u,f))}}return o}function Zu(n,t,e,i,r,s){const o=n[e];if(o!=null){const a=De(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&fe(l)){const{propsDefaults:u}=r;if(e in u)i=u[e];else{const c=Ja(r);i=u[e]=l.call(null,t),c()}}else i=l;r.ce&&r.ce._setProp(e,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Gs(e))&&(i=!0))}return i}const Gv=new WeakMap;function g0(n,t,e=!1){const i=e?Gv:t.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!fe(n)){const c=f=>{l=!0;const[h,d]=g0(f,t,!0);gn(o,h),d&&a.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}if(!s&&!l)return Ie(n)&&i.set(n,bo),bo;if(re(s))for(let c=0;c<s.length;c++){const f=Qr(s[c]);Cd(f)&&(o[f]=ze)}else if(s)for(const c in s){const f=Qr(c);if(Cd(f)){const h=s[c],d=o[f]=re(h)||fe(h)?{type:h}:gn({},h),g=d.type;let _=!1,p=!0;if(re(g))for(let m=0;m<g.length;++m){const S=g[m],M=fe(S)&&S.name;if(M==="Boolean"){_=!0;break}else M==="String"&&(p=!1)}else _=fe(g)&&g.name==="Boolean";d[0]=_,d[1]=p,(_||De(d,"default"))&&a.push(f)}}const u=[o,a];return Ie(n)&&i.set(n,u),u}function Cd(n){return n[0]!=="$"&&!ya(n)}const Mh=n=>n==="_"||n==="_ctx"||n==="$stable",Sh=n=>re(n)?n.map($i):[$i(n)],Wv=(n,t,e)=>{if(t._n)return t;const i=Ni((...r)=>Sh(t(...r)),e);return i._c=!1,i},v0=(n,t,e)=>{const i=n._ctx;for(const r in n){if(Mh(r))continue;const s=n[r];if(fe(s))t[r]=Wv(r,s,i);else if(s!=null){const o=Sh(s);t[r]=()=>o}}},y0=(n,t)=>{const e=Sh(t);n.slots.default=()=>e},x0=(n,t,e)=>{for(const i in t)(e||!Mh(i))&&(n[i]=t[i])},Xv=(n,t,e)=>{const i=n.slots=p0();if(n.vnode.shapeFlag&32){const r=t._;r?(x0(i,t,e),e&&Cm(i,"_",r,!0)):v0(t,i)}else t&&y0(n,t)},Yv=(n,t,e)=>{const{vnode:i,slots:r}=n;let s=!0,o=ze;if(i.shapeFlag&32){const a=t._;a?e&&a===1?s=!1:x0(r,t,e):(s=!t.$stable,v0(t,r)),o=t}else t&&(y0(n,t),o={default:1});if(s)for(const a in r)!Mh(a)&&o[a]==null&&delete r[a]},Jn=Zv;function qv(n){return $v(n)}function $v(n,t){const e=yc();e.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:h,setScopeId:d=Qi,insertStaticContent:g}=n,_=(C,F,T,rt=null,K=null,nt=null,ot=void 0,ht=null,it=!!F.dynamicChildren)=>{if(C===F)return;C&&!Cs(C,F)&&(rt=ct(C),zt(C,K,nt,!0),C=null),F.patchFlag===-2&&(it=!1,F.dynamicChildren=null);const{type:A,ref:E,shapeFlag:z}=F;switch(A){case wc:p(C,F,T,rt);break;case Gn:m(C,F,T,rt);break;case Fl:C==null&&S(F,T,rt,ot);break;case Ne:B(C,F,T,rt,K,nt,ot,ht,it);break;default:z&1?R(C,F,T,rt,K,nt,ot,ht,it):z&6?H(C,F,T,rt,K,nt,ot,ht,it):(z&64||z&128)&&A.process(C,F,T,rt,K,nt,ot,ht,it,Gt)}E!=null&&K?Sa(E,C&&C.ref,nt,F||C,!F):E==null&&C&&C.ref!=null&&Sa(C.ref,null,nt,C,!0)},p=(C,F,T,rt)=>{if(C==null)i(F.el=a(F.children),T,rt);else{const K=F.el=C.el;F.children!==C.children&&u(K,F.children)}},m=(C,F,T,rt)=>{C==null?i(F.el=l(F.children||""),T,rt):F.el=C.el},S=(C,F,T,rt)=>{[C.el,C.anchor]=g(C.children,F,T,rt,C.el,C.anchor)},M=({el:C,anchor:F},T,rt)=>{let K;for(;C&&C!==F;)K=h(C),i(C,T,rt),C=K;i(F,T,rt)},v=({el:C,anchor:F})=>{let T;for(;C&&C!==F;)T=h(C),r(C),C=T;r(F)},R=(C,F,T,rt,K,nt,ot,ht,it)=>{if(F.type==="svg"?ot="svg":F.type==="math"&&(ot="mathml"),C==null)w(F,T,rt,K,nt,ot,ht,it);else{const A=C.el&&C.el._isVueCE?C.el:null;try{A&&A._beginPatch(),x(C,F,K,nt,ot,ht,it)}finally{A&&A._endPatch()}}},w=(C,F,T,rt,K,nt,ot,ht)=>{let it,A;const{props:E,shapeFlag:z,transition:q,dirs:Z}=C;if(it=C.el=o(C.type,nt,E&&E.is,E),z&8?c(it,C.children):z&16&&D(C.children,it,null,rt,K,Xc(C,nt),ot,ht),Z&&hs(C,null,rt,"created"),P(it,C,C.scopeId,ot,rt),E){for(const St in E)St!=="value"&&!ya(St)&&s(it,St,null,E[St],nt,rt);"value"in E&&s(it,"value",null,E.value,nt),(A=E.onVnodeBeforeMount)&&Gi(A,rt,C)}Z&&hs(C,null,rt,"beforeMount");const Q=Kv(K,q);Q&&q.beforeEnter(it),i(it,F,T),((A=E&&E.onVnodeMounted)||Q||Z)&&Jn(()=>{A&&Gi(A,rt,C),Q&&q.enter(it),Z&&hs(C,null,rt,"mounted")},K)},P=(C,F,T,rt,K)=>{if(T&&d(C,T),rt)for(let nt=0;nt<rt.length;nt++)d(C,rt[nt]);if(K){let nt=K.subTree;if(F===nt||E0(nt.type)&&(nt.ssContent===F||nt.ssFallback===F)){const ot=K.vnode;P(C,ot,ot.scopeId,ot.slotScopeIds,K.parent)}}},D=(C,F,T,rt,K,nt,ot,ht,it=0)=>{for(let A=it;A<C.length;A++){const E=C[A]=ht?dr(C[A]):$i(C[A]);_(null,E,F,T,rt,K,nt,ot,ht)}},x=(C,F,T,rt,K,nt,ot)=>{const ht=F.el=C.el;let{patchFlag:it,dynamicChildren:A,dirs:E}=F;it|=C.patchFlag&16;const z=C.props||ze,q=F.props||ze;let Z;if(T&&ds(T,!1),(Z=q.onVnodeBeforeUpdate)&&Gi(Z,T,F,C),E&&hs(F,C,T,"beforeUpdate"),T&&ds(T,!0),(z.innerHTML&&q.innerHTML==null||z.textContent&&q.textContent==null)&&c(ht,""),A?b(C.dynamicChildren,A,ht,T,rt,Xc(F,K),nt):ot||W(C,F,ht,null,T,rt,Xc(F,K),nt,!1),it>0){if(it&16)N(ht,z,q,T,K);else if(it&2&&z.class!==q.class&&s(ht,"class",null,q.class,K),it&4&&s(ht,"style",z.style,q.style,K),it&8){const Q=F.dynamicProps;for(let St=0;St<Q.length;St++){const _t=Q[St],wt=z[_t],qt=q[_t];(qt!==wt||_t==="value")&&s(ht,_t,wt,qt,K,T)}}it&1&&C.children!==F.children&&c(ht,F.children)}else!ot&&A==null&&N(ht,z,q,T,K);((Z=q.onVnodeUpdated)||E)&&Jn(()=>{Z&&Gi(Z,T,F,C),E&&hs(F,C,T,"updated")},rt)},b=(C,F,T,rt,K,nt,ot)=>{for(let ht=0;ht<F.length;ht++){const it=C[ht],A=F[ht],E=it.el&&(it.type===Ne||!Cs(it,A)||it.shapeFlag&198)?f(it.el):T;_(it,A,E,null,rt,K,nt,ot,!0)}},N=(C,F,T,rt,K)=>{if(F!==T){if(F!==ze)for(const nt in F)!ya(nt)&&!(nt in T)&&s(C,nt,F[nt],null,K,rt);for(const nt in T){if(ya(nt))continue;const ot=T[nt],ht=F[nt];ot!==ht&&nt!=="value"&&s(C,nt,ht,ot,K,rt)}"value"in T&&s(C,"value",F.value,T.value,K)}},B=(C,F,T,rt,K,nt,ot,ht,it)=>{const A=F.el=C?C.el:a(""),E=F.anchor=C?C.anchor:a("");let{patchFlag:z,dynamicChildren:q,slotScopeIds:Z}=F;Z&&(ht=ht?ht.concat(Z):Z),C==null?(i(A,T,rt),i(E,T,rt),D(F.children||[],T,E,K,nt,ot,ht,it)):z>0&&z&64&&q&&C.dynamicChildren&&C.dynamicChildren.length===q.length?(b(C.dynamicChildren,q,T,K,nt,ot,ht),(F.key!=null||K&&F===K.subTree)&&M0(C,F,!0)):W(C,F,T,E,K,nt,ot,ht,it)},H=(C,F,T,rt,K,nt,ot,ht,it)=>{F.slotScopeIds=ht,C==null?F.shapeFlag&512?K.ctx.activate(F,T,rt,ot,it):J(F,T,rt,K,nt,ot,it):j(C,F,it)},J=(C,F,T,rt,K,nt,ot)=>{const ht=C.component=oy(C,rt,K);if(Sc(C)&&(ht.ctx.renderer=Gt),ay(ht,!1,ot),ht.asyncDep){if(K&&K.registerDep(ht,$,ot),!C.el){const it=ht.subTree=He(Gn);m(null,it,F,T),C.placeholder=it.el}}else $(ht,C,F,T,K,nt,ot)},j=(C,F,T)=>{const rt=F.component=C.component;if(kv(C,F,T))if(rt.asyncDep&&!rt.asyncResolved){et(rt,F,T);return}else rt.next=F,rt.update();else F.el=C.el,rt.vnode=F},$=(C,F,T,rt,K,nt,ot)=>{const ht=()=>{if(C.isMounted){let{next:z,bu:q,u:Z,parent:Q,vnode:St}=C;{const Dt=S0(C);if(Dt){z&&(z.el=St.el,et(C,z,ot)),Dt.asyncDep.then(()=>{Jn(()=>{C.isUnmounted||A()},K)});return}}let _t=z,wt;ds(C,!1),z?(z.el=St.el,et(C,z,ot)):z=St,q&&Nl(q),(wt=z.props&&z.props.onVnodeBeforeUpdate)&&Gi(wt,Q,z,St),ds(C,!0);const qt=wd(C),mt=C.subTree;C.subTree=qt,_(mt,qt,f(mt.el),ct(mt),C,K,nt),z.el=qt.el,_t===null&&zv(C,qt.el),Z&&Jn(Z,K),(wt=z.props&&z.props.onVnodeUpdated)&&Jn(()=>Gi(wt,Q,z,St),K)}else{let z;const{el:q,props:Z}=F,{bm:Q,m:St,parent:_t,root:wt,type:qt}=C,mt=ba(F);ds(C,!1),Q&&Nl(Q),!mt&&(z=Z&&Z.onVnodeBeforeMount)&&Gi(z,_t,F),ds(C,!0);{wt.ce&&wt.ce._hasShadowRoot()&&wt.ce._injectChildStyle(qt);const Dt=C.subTree=wd(C);_(null,Dt,T,rt,C,K,nt),F.el=Dt.el}if(St&&Jn(St,K),!mt&&(z=Z&&Z.onVnodeMounted)){const Dt=F;Jn(()=>Gi(z,_t,Dt),K)}(F.shapeFlag&256||_t&&ba(_t.vnode)&&_t.vnode.shapeFlag&256)&&C.a&&Jn(C.a,K),C.isMounted=!0,F=T=rt=null}};C.scope.on();const it=C.effect=new Im(ht);C.scope.off();const A=C.update=it.run.bind(it),E=C.job=it.runIfDirty.bind(it);E.i=C,E.id=C.uid,it.scheduler=()=>yh(E),ds(C,!0),A()},et=(C,F,T)=>{F.component=C;const rt=C.vnode.props;C.vnode=F,C.next=null,Vv(C,F.props,rt,T),Yv(C,F.children,T),xr(),vd(C),Mr()},W=(C,F,T,rt,K,nt,ot,ht,it=!1)=>{const A=C&&C.children,E=C?C.shapeFlag:0,z=F.children,{patchFlag:q,shapeFlag:Z}=F;if(q>0){if(q&128){Pt(A,z,T,rt,K,nt,ot,ht,it);return}else if(q&256){vt(A,z,T,rt,K,nt,ot,ht,it);return}}Z&8?(E&16&&Ft(A,K,nt),z!==A&&c(T,z)):E&16?Z&16?Pt(A,z,T,rt,K,nt,ot,ht,it):Ft(A,K,nt,!0):(E&8&&c(T,""),Z&16&&D(z,T,rt,K,nt,ot,ht,it))},vt=(C,F,T,rt,K,nt,ot,ht,it)=>{C=C||bo,F=F||bo;const A=C.length,E=F.length,z=Math.min(A,E);let q;for(q=0;q<z;q++){const Z=F[q]=it?dr(F[q]):$i(F[q]);_(C[q],Z,T,null,K,nt,ot,ht,it)}A>E?Ft(C,K,nt,!0,!1,z):D(F,T,rt,K,nt,ot,ht,it,z)},Pt=(C,F,T,rt,K,nt,ot,ht,it)=>{let A=0;const E=F.length;let z=C.length-1,q=E-1;for(;A<=z&&A<=q;){const Z=C[A],Q=F[A]=it?dr(F[A]):$i(F[A]);if(Cs(Z,Q))_(Z,Q,T,null,K,nt,ot,ht,it);else break;A++}for(;A<=z&&A<=q;){const Z=C[z],Q=F[q]=it?dr(F[q]):$i(F[q]);if(Cs(Z,Q))_(Z,Q,T,null,K,nt,ot,ht,it);else break;z--,q--}if(A>z){if(A<=q){const Z=q+1,Q=Z<E?F[Z].el:rt;for(;A<=q;)_(null,F[A]=it?dr(F[A]):$i(F[A]),T,Q,K,nt,ot,ht,it),A++}}else if(A>q)for(;A<=z;)zt(C[A],K,nt,!0),A++;else{const Z=A,Q=A,St=new Map;for(A=Q;A<=q;A++){const Ct=F[A]=it?dr(F[A]):$i(F[A]);Ct.key!=null&&St.set(Ct.key,A)}let _t,wt=0;const qt=q-Q+1;let mt=!1,Dt=0;const Bt=new Array(qt);for(A=0;A<qt;A++)Bt[A]=0;for(A=Z;A<=z;A++){const Ct=C[A];if(wt>=qt){zt(Ct,K,nt,!0);continue}let ne;if(Ct.key!=null)ne=St.get(Ct.key);else for(_t=Q;_t<=q;_t++)if(Bt[_t-Q]===0&&Cs(Ct,F[_t])){ne=_t;break}ne===void 0?zt(Ct,K,nt,!0):(Bt[ne-Q]=A+1,ne>=Dt?Dt=ne:mt=!0,_(Ct,F[ne],T,null,K,nt,ot,ht,it),wt++)}const Wt=mt?jv(Bt):bo;for(_t=Wt.length-1,A=qt-1;A>=0;A--){const Ct=Q+A,ne=F[Ct],Jt=F[Ct+1],se=Ct+1<E?Jt.el||b0(Jt):rt;Bt[A]===0?_(null,ne,T,se,K,nt,ot,ht,it):mt&&(_t<0||A!==Wt[_t]?At(ne,T,se,2):_t--)}}},At=(C,F,T,rt,K=null)=>{const{el:nt,type:ot,transition:ht,children:it,shapeFlag:A}=C;if(A&6){At(C.component.subTree,F,T,rt);return}if(A&128){C.suspense.move(F,T,rt);return}if(A&64){ot.move(C,F,T,Gt);return}if(ot===Ne){i(nt,F,T);for(let z=0;z<it.length;z++)At(it[z],F,T,rt);i(C.anchor,F,T);return}if(ot===Fl){M(C,F,T);return}if(rt!==2&&A&1&&ht)if(rt===0)ht.beforeEnter(nt),i(nt,F,T),Jn(()=>ht.enter(nt),K);else{const{leave:z,delayLeave:q,afterLeave:Z}=ht,Q=()=>{C.ctx.isUnmounted?r(nt):i(nt,F,T)},St=()=>{nt._isLeaving&&nt[Yi](!0),z(nt,()=>{Q(),Z&&Z()})};q?q(nt,Q,St):St()}else i(nt,F,T)},zt=(C,F,T,rt=!1,K=!1)=>{const{type:nt,props:ot,ref:ht,children:it,dynamicChildren:A,shapeFlag:E,patchFlag:z,dirs:q,cacheIndex:Z}=C;if(z===-2&&(K=!1),ht!=null&&(xr(),Sa(ht,null,T,C,!0),Mr()),Z!=null&&(F.renderCache[Z]=void 0),E&256){F.ctx.deactivate(C);return}const Q=E&1&&q,St=!ba(C);let _t;if(St&&(_t=ot&&ot.onVnodeBeforeUnmount)&&Gi(_t,F,C),E&6)xt(C.component,T,rt);else{if(E&128){C.suspense.unmount(T,rt);return}Q&&hs(C,null,F,"beforeUnmount"),E&64?C.type.remove(C,F,T,Gt,rt):A&&!A.hasOnce&&(nt!==Ne||z>0&&z&64)?Ft(A,F,T,!1,!0):(nt===Ne&&z&384||!K&&E&16)&&Ft(it,F,T),rt&&pe(C)}(St&&(_t=ot&&ot.onVnodeUnmounted)||Q)&&Jn(()=>{_t&&Gi(_t,F,C),Q&&hs(C,null,F,"unmounted")},T)},pe=C=>{const{type:F,el:T,anchor:rt,transition:K}=C;if(F===Ne){st(T,rt);return}if(F===Fl){v(C);return}const nt=()=>{r(T),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(C.shapeFlag&1&&K&&!K.persisted){const{leave:ot,delayLeave:ht}=K,it=()=>ot(T,nt);ht?ht(C.el,nt,it):it()}else nt()},st=(C,F)=>{let T;for(;C!==F;)T=h(C),r(C),C=T;r(F)},xt=(C,F,T)=>{const{bum:rt,scope:K,job:nt,subTree:ot,um:ht,m:it,a:A}=C;Rd(it),Rd(A),rt&&Nl(rt),K.stop(),nt&&(nt.flags|=8,zt(ot,C,F,T)),ht&&Jn(ht,F),Jn(()=>{C.isUnmounted=!0},F)},Ft=(C,F,T,rt=!1,K=!1,nt=0)=>{for(let ot=nt;ot<C.length;ot++)zt(C[ot],F,T,rt,K)},ct=C=>{if(C.shapeFlag&6)return ct(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const F=h(C.anchor||C.el),T=F&&F[uv];return T?h(T):F};let Vt=!1;const Kt=(C,F,T)=>{let rt;C==null?F._vnode&&(zt(F._vnode,null,null,!0),rt=F._vnode.component):_(F._vnode||null,C,F,null,null,null,T),F._vnode=C,Vt||(Vt=!0,vd(rt),Km(),Vt=!1)},Gt={p:_,um:zt,m:At,r:pe,mt:J,mc:D,pc:W,pbc:b,n:ct,o:n};return{render:Kt,hydrate:void 0,createApp:Lv(Kt)}}function Xc({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function ds({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Kv(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function M0(n,t,e=!1){const i=n.children,r=t.children;if(re(i)&&re(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=dr(r[s]),a.el=o.el),!e&&a.patchFlag!==-2&&M0(o,a)),a.type===wc&&(a.patchFlag===-1&&(a=r[s]=dr(a)),a.el=o.el),a.type===Gn&&!a.el&&(a.el=o.el)}}function jv(n){const t=n.slice(),e=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const u=n[i];if(u!==0){if(r=e[e.length-1],n[r]<u){t[i]=r,e.push(i);continue}for(s=0,o=e.length-1;s<o;)a=s+o>>1,n[e[a]]<u?s=a+1:o=a;u<n[e[s]]&&(s>0&&(t[i]=e[s-1]),e[s]=i)}}for(s=e.length,o=e[s-1];s-- >0;)e[s]=o,o=t[o];return e}function S0(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:S0(t)}function Rd(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function b0(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?b0(t.subTree):null}const E0=n=>n.__isSuspense;function Zv(n,t){t&&t.pendingBranch?re(n)?t.effects.push(...n):t.effects.push(n):sv(n)}const Ne=Symbol.for("v-fgt"),wc=Symbol.for("v-txt"),Gn=Symbol.for("v-cmt"),Fl=Symbol.for("v-stc"),Ta=[];let mi=null;function Yt(n=!1){Ta.push(mi=n?null:[])}function Jv(){Ta.pop(),mi=Ta[Ta.length-1]||null}let Ba=1;function ec(n,t=!1){Ba+=n,n<0&&mi&&t&&(mi.hasOnce=!0)}function T0(n){return n.dynamicChildren=Ba>0?mi||bo:null,Jv(),Ba>0&&mi&&mi.push(n),n}function $t(n,t,e,i,r,s){return T0(I(n,t,e,i,r,s,!0))}function Qv(n,t,e,i,r){return T0(He(n,t,e,i,r,!0))}function nc(n){return n?n.__v_isVNode===!0:!1}function Cs(n,t){return n.type===t.type&&n.key===t.key}const w0=({key:n})=>n??null,Bl=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?on(n)||Nn(n)||fe(n)?{i:wi,r:n,k:t,f:!!e}:n:null);function I(n,t=null,e=null,i=0,r=null,s=n===Ne?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&w0(t),ref:t&&Bl(t),scopeId:Zm,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:wi};return a?(bh(l,e),s&128&&n.normalize(l)):e&&(l.shapeFlag|=on(e)?8:16),Ba>0&&!o&&mi&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&mi.push(l),l}const He=ty;function ty(n,t=null,e=null,i=0,r=null,s=!1){if((!n||n===Tv)&&(n=Gn),nc(n)){const a=ts(n,t,!0);return e&&bh(a,e),Ba>0&&!s&&mi&&(a.shapeFlag&6?mi[mi.indexOf(n)]=a:mi.push(a)),a.patchFlag=-2,a}if(fy(n)&&(n=n.__vccOpts),t){t=ey(t);let{class:a,style:l}=t;a&&!on(a)&&(t.class=Xe(a)),Ie(l)&&(vh(l)&&!re(l)&&(l=gn({},l)),t.style=di(l))}const o=on(n)?1:E0(n)?128:t0(n)?64:Ie(n)?4:fe(n)?2:0;return I(n,t,e,i,r,o,s,!0)}function ey(n){return n?vh(n)||m0(n)?gn({},n):n:null}function ts(n,t,e=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,u=t?iy(r||{},t):r,c={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&w0(u),ref:t&&t.ref?e&&s?re(s)?s.concat(Bl(t)):[s,Bl(t)]:Bl(t):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Ne?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ts(n.ssContent),ssFallback:n.ssFallback&&ts(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Fa(c,l.clone(c)),c}function po(n=" ",t=0){return He(wc,null,n,t)}function ny(n,t){const e=He(Fl,null,n);return e.staticCount=t,e}function Dn(n="",t=!1){return t?(Yt(),Qv(Gn,null,n)):He(Gn,null,n)}function $i(n){return n==null||typeof n=="boolean"?He(Gn):re(n)?He(Ne,null,n.slice()):nc(n)?dr(n):He(wc,null,String(n))}function dr(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ts(n)}function bh(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(re(t))e=16;else if(typeof t=="object")if(i&65){const r=t.default;r&&(r._c&&(r._d=!1),bh(n,r()),r._c&&(r._d=!0));return}else{e=32;const r=t._;!r&&!m0(t)?t._ctx=wi:r===3&&wi&&(wi.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else fe(t)?(t={default:t,_ctx:wi},e=32):(t=String(t),i&64?(e=16,t=[po(t)]):e=8);n.children=t,n.shapeFlag|=e}function iy(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const r in i)if(r==="class")t.class!==i.class&&(t.class=Xe([t.class,i.class]));else if(r==="style")t.style=di([t.style,i.style]);else if(gc(r)){const s=t[r],o=i[r];o&&s!==o&&!(re(s)&&s.includes(o))&&(t[r]=s?[].concat(s,o):o)}else r!==""&&(t[r]=i[r])}return t}function Gi(n,t,e,i=null){Hi(n,t,7,[e,i])}const ry=u0();let sy=0;function oy(n,t,e){const i=n.type,r=(t?t.appContext:n.appContext)||ry,s={uid:sy++,vnode:n,type:i,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Cg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:g0(i,r),emitsOptions:f0(i,r),emit:null,emitted:null,propsDefaults:ze,inheritAttrs:i.inheritAttrs,ctx:ze,data:ze,props:ze,attrs:ze,slots:ze,refs:ze,setupState:ze,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Nv.bind(null,s),n.ce&&n.ce(s),s}let Wn=null;const A0=()=>Wn||wi;let ic,Ju;{const n=yc(),t=(e,i)=>{let r;return(r=n[e])||(r=n[e]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};ic=t("__VUE_INSTANCE_SETTERS__",e=>Wn=e),Ju=t("__VUE_SSR_SETTERS__",e=>ka=e)}const Ja=n=>{const t=Wn;return ic(n),n.scope.on(),()=>{n.scope.off(),ic(t)}},Pd=()=>{Wn&&Wn.scope.off(),ic(null)};function C0(n){return n.vnode.shapeFlag&4}let ka=!1;function ay(n,t=!1,e=!1){t&&Ju(t);const{props:i,children:r}=n.vnode,s=C0(n);Hv(n,i,s,t),Xv(n,r,e||t);const o=s?ly(n,t):void 0;return t&&Ju(!1),o}function ly(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,wv);const{setup:i}=e;if(i){xr();const r=n.setupContext=i.length>1?uy(n):null,s=Ja(n),o=ja(i,n,0,[n.props,r]),a=Em(o);if(Mr(),s(),(a||n.sp)&&!ba(n)&&o0(n),a){if(o.then(Pd,Pd),t)return o.then(l=>{Dd(n,l)}).catch(l=>{Mc(l,n,0)});n.asyncDep=o}else Dd(n,o)}else R0(n)}function Dd(n,t,e){fe(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:Ie(t)&&(n.setupState=Ym(t)),R0(n)}function R0(n,t,e){const i=n.type;n.render||(n.render=i.render||Qi);{const r=Ja(n);xr();try{Av(n)}finally{Mr(),r()}}}const cy={get(n,t){return Ln(n,"get",""),n[t]}};function uy(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,cy),slots:n.slots,emit:n.emit,expose:t}}function Ac(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Ym(Kg(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Ea)return Ea[e](n)},has(t,e){return e in t||e in Ea}})):n.proxy}function fy(n){return fe(n)&&"__vccOpts"in n}const rn=(n,t)=>tv(n,t,ka);function hy(n,t,e){try{ec(-1);const i=arguments.length;return i===2?Ie(t)&&!re(t)?nc(t)?He(n,null,[t]):He(n,t):He(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&nc(e)&&(e=[e]),He(n,t,e))}finally{ec(1)}}const dy="3.5.29";/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Qu;const Id=typeof window<"u"&&window.trustedTypes;if(Id)try{Qu=Id.createPolicy("vue",{createHTML:n=>n})}catch{}const P0=Qu?n=>Qu.createHTML(n):n=>n,py="http://www.w3.org/2000/svg",my="http://www.w3.org/1998/Math/MathML",fr=typeof document<"u"?document:null,Ld=fr&&fr.createElement("template"),_y={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const r=t==="svg"?fr.createElementNS(py,n):t==="mathml"?fr.createElementNS(my,n):e?fr.createElement(n,{is:e}):fr.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>fr.createTextNode(n),createComment:n=>fr.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>fr.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,r,s){const o=e?e.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),e),!(r===s||!(r=r.nextSibling)););else{Ld.innerHTML=P0(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Ld.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},Nr="transition",sa="animation",za=Symbol("_vtc"),D0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},gy=gn({},e0,D0),vy=n=>(n.displayName="Transition",n.props=gy,n),Xi=vy((n,{slots:t})=>hy(dv,yy(n),t)),ps=(n,t=[])=>{re(n)?n.forEach(e=>e(...t)):n&&n(...t)},Ud=n=>n?re(n)?n.some(t=>t.length>1):n.length>1:!1;function yy(n){const t={};for(const B in n)B in D0||(t[B]=n[B]);if(n.css===!1)return t;const{name:e="v",type:i,duration:r,enterFromClass:s=`${e}-enter-from`,enterActiveClass:o=`${e}-enter-active`,enterToClass:a=`${e}-enter-to`,appearFromClass:l=s,appearActiveClass:u=o,appearToClass:c=a,leaveFromClass:f=`${e}-leave-from`,leaveActiveClass:h=`${e}-leave-active`,leaveToClass:d=`${e}-leave-to`}=n,g=xy(r),_=g&&g[0],p=g&&g[1],{onBeforeEnter:m,onEnter:S,onEnterCancelled:M,onLeave:v,onLeaveCancelled:R,onBeforeAppear:w=m,onAppear:P=S,onAppearCancelled:D=M}=t,x=(B,H,J,j)=>{B._enterCancelled=j,ms(B,H?c:a),ms(B,H?u:o),J&&J()},b=(B,H)=>{B._isLeaving=!1,ms(B,f),ms(B,d),ms(B,h),H&&H()},N=B=>(H,J)=>{const j=B?P:S,$=()=>x(H,B,J);ps(j,[H,$]),Nd(()=>{ms(H,B?l:s),rr(H,B?c:a),Ud(j)||Od(H,i,_,$)})};return gn(t,{onBeforeEnter(B){ps(m,[B]),rr(B,s),rr(B,o)},onBeforeAppear(B){ps(w,[B]),rr(B,l),rr(B,u)},onEnter:N(!1),onAppear:N(!0),onLeave(B,H){B._isLeaving=!0;const J=()=>b(B,H);rr(B,f),B._enterCancelled?(rr(B,h),kd(B)):(kd(B),rr(B,h)),Nd(()=>{B._isLeaving&&(ms(B,f),rr(B,d),Ud(v)||Od(B,i,p,J))}),ps(v,[B,J])},onEnterCancelled(B){x(B,!1,void 0,!0),ps(M,[B])},onAppearCancelled(B){x(B,!0,void 0,!0),ps(D,[B])},onLeaveCancelled(B){b(B),ps(R,[B])}})}function xy(n){if(n==null)return null;if(Ie(n))return[Yc(n.enter),Yc(n.leave)];{const t=Yc(n);return[t,t]}}function Yc(n){return xg(n)}function rr(n,t){t.split(/\s+/).forEach(e=>e&&n.classList.add(e)),(n[za]||(n[za]=new Set)).add(t)}function ms(n,t){t.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const e=n[za];e&&(e.delete(t),e.size||(n[za]=void 0))}function Nd(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let My=0;function Od(n,t,e,i){const r=n._endId=++My,s=()=>{r===n._endId&&i()};if(e!=null)return setTimeout(s,e);const{type:o,timeout:a,propCount:l}=Sy(n,t);if(!o)return i();const u=o+"end";let c=0;const f=()=>{n.removeEventListener(u,h),s()},h=d=>{d.target===n&&++c>=l&&f()};setTimeout(()=>{c<l&&f()},a+1),n.addEventListener(u,h)}function Sy(n,t){const e=window.getComputedStyle(n),i=g=>(e[g]||"").split(", "),r=i(`${Nr}Delay`),s=i(`${Nr}Duration`),o=Fd(r,s),a=i(`${sa}Delay`),l=i(`${sa}Duration`),u=Fd(a,l);let c=null,f=0,h=0;t===Nr?o>0&&(c=Nr,f=o,h=s.length):t===sa?u>0&&(c=sa,f=u,h=l.length):(f=Math.max(o,u),c=f>0?o>u?Nr:sa:null,h=c?c===Nr?s.length:l.length:0);const d=c===Nr&&/\b(?:transform|all)(?:,|$)/.test(i(`${Nr}Property`).toString());return{type:c,timeout:f,propCount:h,hasTransform:d}}function Fd(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((e,i)=>Bd(e)+Bd(n[i])))}function Bd(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function kd(n){return(n?n.ownerDocument:document).body.offsetHeight}function by(n,t,e){const i=n[za];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const rc=Symbol("_vod"),I0=Symbol("_vsh"),wa={name:"show",beforeMount(n,{value:t},{transition:e}){n[rc]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):oa(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),oa(n,!0),i.enter(n)):i.leave(n,()=>{oa(n,!1)}):oa(n,t))},beforeUnmount(n,{value:t}){oa(n,t)}};function oa(n,t){n.style.display=t?n[rc]:"none",n[I0]=!t}const Ey=Symbol(""),Ty=/(?:^|;)\s*display\s*:/;function wy(n,t,e){const i=n.style,r=on(e);let s=!1;if(e&&!r){if(t)if(on(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&kl(i,a,"")}else for(const o in t)e[o]==null&&kl(i,o,"");for(const o in e)o==="display"&&(s=!0),kl(i,o,e[o])}else if(r){if(t!==e){const o=i[Ey];o&&(e+=";"+o),i.cssText=e,s=Ty.test(e)}}else t&&n.removeAttribute("style");rc in n&&(n[rc]=s?i.display:"",n[I0]&&(i.display="none"))}const zd=/\s*!important$/;function kl(n,t,e){if(re(e))e.forEach(i=>kl(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=Ay(n,t);zd.test(e)?n.setProperty(Gs(i),e.replace(zd,""),"important"):n[i]=e}}const Hd=["Webkit","Moz","ms"],qc={};function Ay(n,t){const e=qc[t];if(e)return e;let i=Qr(t);if(i!=="filter"&&i in n)return qc[t]=i;i=Am(i);for(let r=0;r<Hd.length;r++){const s=Hd[r]+i;if(s in n)return qc[t]=s}return t}const Vd="http://www.w3.org/1999/xlink";function Gd(n,t,e,i,r,s=wg(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Vd,t.slice(6,t.length)):n.setAttributeNS(Vd,t,e):e==null||s&&!Rm(e)?n.removeAttribute(t):n.setAttribute(t,s?"":tr(e)?String(e):e)}function Wd(n,t,e,i,r){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?P0(e):e);return}const s=n.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=Rm(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(r||t)}function mo(n,t,e,i){n.addEventListener(t,e,i)}function Cy(n,t,e,i){n.removeEventListener(t,e,i)}const Xd=Symbol("_vei");function Ry(n,t,e,i,r=null){const s=n[Xd]||(n[Xd]={}),o=s[t];if(i&&o)o.value=i;else{const[a,l]=Py(t);if(i){const u=s[t]=Ly(i,r);mo(n,a,u,l)}else o&&(Cy(n,a,o,l),s[t]=void 0)}}const Yd=/(?:Once|Passive|Capture)$/;function Py(n){let t;if(Yd.test(n)){t={};let i;for(;i=n.match(Yd);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Gs(n.slice(2)),t]}let $c=0;const Dy=Promise.resolve(),Iy=()=>$c||(Dy.then(()=>$c=0),$c=Date.now());function Ly(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;Hi(Uy(i,e.value),t,5,[i])};return e.value=n,e.attached=Iy(),e}function Uy(n,t){if(re(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>r=>!r._stopped&&i&&i(r))}else return t}const qd=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Ny=(n,t,e,i,r,s)=>{const o=r==="svg";t==="class"?by(n,i,o):t==="style"?wy(n,e,i):gc(t)?ah(t)||Ry(n,t,e,i,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Oy(n,t,i,o))?(Wd(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Gd(n,t,i,o,s,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!on(i))?Wd(n,Qr(t),i,s,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),Gd(n,t,i,o))};function Oy(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&qd(t)&&fe(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return qd(t)&&on(e)?!1:t in n}const $d=n=>{const t=n.props["onUpdate:modelValue"]||!1;return re(t)?e=>Nl(t,e):t};function Fy(n){n.target.composing=!0}function Kd(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Kc=Symbol("_assign");function jd(n,t,e){return t&&(n=n.trim()),e&&(n=uh(n)),n}const By={created(n,{modifiers:{lazy:t,trim:e,number:i}},r){n[Kc]=$d(r);const s=i||r.props&&r.props.type==="number";mo(n,t?"change":"input",o=>{o.target.composing||n[Kc](jd(n.value,e,s))}),(e||s)&&mo(n,"change",()=>{n.value=jd(n.value,e,s)}),t||(mo(n,"compositionstart",Fy),mo(n,"compositionend",Kd),mo(n,"change",Kd))},mounted(n,{value:t}){n.value=t??""},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:r,number:s}},o){if(n[Kc]=$d(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?uh(n.value):n.value,l=t??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&t===e||r&&n.value.trim()===l)||(n.value=l))}},ky=["ctrl","shift","alt","meta"],zy={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>ky.some(e=>n[`${e}Key`]&&!t.includes(e))},Hy=(n,t)=>{if(!n)return n;const e=n._withMods||(n._withMods={}),i=t.join(".");return e[i]||(e[i]=((r,...s)=>{for(let o=0;o<t.length;o++){const a=zy[t[o]];if(a&&a(r,t))return}return n(r,...s)}))},Vy=gn({patchProp:Ny},_y);let Zd;function Gy(){return Zd||(Zd=qv(Vy))}const Wy=((...n)=>{const t=Gy().createApp(...n),{mount:e}=t;return t.mount=i=>{const r=Yy(i);if(!r)return;const s=t._component;!fe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=e(r,!1,Xy(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t});function Xy(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Yy(n){return on(n)?document.querySelector(n):n}function hr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function L0(n,t){n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var vi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},No={duration:.5,overwrite:!1,delay:0},Eh,Tn,qe,Ai=1e8,ke=1/Ai,tf=Math.PI*2,qy=tf/4,$y=0,U0=Math.sqrt,Ky=Math.cos,jy=Math.sin,Sn=function(t){return typeof t=="string"},Qe=function(t){return typeof t=="function"},br=function(t){return typeof t=="number"},Th=function(t){return typeof t>"u"},er=function(t){return typeof t=="object"},ei=function(t){return t!==!1},wh=function(){return typeof window<"u"},cl=function(t){return Qe(t)||Sn(t)},N0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},On=Array.isArray,Zy=/random\([^)]+\)/g,Jy=/,\s*/g,Jd=/(?:-?\.?\d|\.)+/gi,O0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,go=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,jc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,F0=/[+-]=-?[.\d]+/,Qy=/[^,'"\[\]\s]+/gi,tx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ke,qi,ef,Ah,xi={},sc={},B0,k0=function(t){return(sc=Oo(t,xi))&&si},Ch=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Ha=function(t,e){return!e&&console.warn(t)},z0=function(t,e){return t&&(xi[t]=e)&&sc&&(sc[t]=e)||xi},Va=function(){return 0},ex={suppressEvents:!0,isStart:!0,kill:!1},zl={suppressEvents:!0,kill:!1},nx={suppressEvents:!0},Rh={},Kr=[],nf={},H0,fi={},Zc={},Qd=30,Hl=[],Ph="",Dh=function(t){var e=t[0],i,r;if(er(e)||Qe(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(r=Hl.length;r--&&!Hl[r].targetTest(e););i=Hl[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new f_(t[r],i)))||t.splice(r,1);return t},Fs=function(t){return t._gsap||Dh(Ci(t))[0]._gsap},V0=function(t,e,i){return(i=t[e])&&Qe(i)?t[e]():Th(i)&&t.getAttribute&&t.getAttribute(e)||i},ni=function(t,e){return(t=t.split(",")).forEach(e)||t},sn=function(t){return Math.round(t*1e5)/1e5||0},$e=function(t){return Math.round(t*1e7)/1e7||0},Co=function(t,e){var i=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+r:i==="-"?t-r:i==="*"?t*r:t/r},ix=function(t,e){for(var i=e.length,r=0;t.indexOf(e[r])<0&&++r<i;);return r<i},oc=function(){var t=Kr.length,e=Kr.slice(0),i,r;for(nf={},Kr.length=0,i=0;i<t;i++)r=e[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Ih=function(t){return!!(t._initted||t._startAt||t.add)},G0=function(t,e,i,r){Kr.length&&!Tn&&oc(),t.render(e,i,!!(Tn&&e<0&&Ih(t))),Kr.length&&!Tn&&oc()},W0=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Qy).length<2?e:Sn(t)?t.trim():t},X0=function(t){return t},Mi=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},rx=function(t){return function(e,i){for(var r in i)r in e||r==="duration"&&t||r==="ease"||(e[r]=i[r])}},Oo=function(t,e){for(var i in e)t[i]=e[i];return t},tp=function n(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=er(e[i])?n(t[i]||(t[i]={}),e[i]):e[i]);return t},ac=function(t,e){var i={},r;for(r in t)r in e||(i[r]=t[r]);return i},Aa=function(t){var e=t.parent||Ke,i=t.keyframes?rx(On(t.keyframes)):Mi;if(ei(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},sx=function(t,e){for(var i=t.length,r=i===e.length;r&&i--&&t[i]===e[i];);return i<0},Y0=function(t,e,i,r,s){var o=t[r],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[r]=e,e._prev=o,e.parent=e._dp=t,e},Cc=function(t,e,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=e._prev,o=e._next;s?s._next=o:t[i]===e&&(t[i]=o),o?o._prev=s:t[r]===e&&(t[r]=s),e._next=e._prev=e.parent=null},es=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Bs=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},ox=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},rf=function(t,e,i,r){return t._startAt&&(Tn?t._startAt.revert(zl):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},ax=function n(t){return!t||t._ts&&n(t.parent)},ep=function(t){return t._repeat?Fo(t._tTime,t=t.duration()+t._rDelay)*t:0},Fo=function(t,e){var i=Math.floor(t=$e(t/e));return t&&i===t?i-1:i},lc=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Rc=function(t){return t._end=$e(t._start+(t._tDur/Math.abs(t._ts||t._rts||ke)||0))},Pc=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=$e(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Rc(t),i._dirty||Bs(i,t)),t},q0=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=lc(t.rawTime(),e),(!e._dur||Qa(0,e.totalDuration(),i)-e._tTime>ke)&&e.render(i,!0)),Bs(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-ke}},ji=function(t,e,i,r){return e.parent&&es(e),e._start=$e((br(i)?i:i||t!==Ke?Ti(t,i,e):t._time)+e._delay),e._end=$e(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Y0(t,e,"_first","_last",t._sort?"_start":0),sf(e)||(t._recent=e),r||q0(t,e),t._ts<0&&Pc(t,t._tTime),t},$0=function(t,e){return(xi.ScrollTrigger||Ch("scrollTrigger",e))&&xi.ScrollTrigger.create(e,t)},K0=function(t,e,i,r,s){if(Uh(t,e,s),!t._initted)return 1;if(!i&&t._pt&&!Tn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&H0!==pi.frame)return Kr.push(t),t._lazy=[s,r],1},lx=function n(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||n(e))},sf=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},cx=function(t,e,i,r){var s=t.ratio,o=e<0||!e&&(!t._start&&lx(t)&&!(!t._initted&&sf(t))||(t._ts<0||t._dp._ts<0)&&!sf(t))?0:1,a=t._rDelay,l=0,u,c,f;if(a&&t._repeat&&(l=Qa(0,t._tDur,e),c=Fo(l,a),t._yoyo&&c&1&&(o=1-o),c!==Fo(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||Tn||r||t._zTime===ke||!e&&t._zTime){if(!t._initted&&K0(t,e,r,i,l))return;for(f=t._zTime,t._zTime=e||(i?ke:0),i||(i=e&&!f),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,u=t._pt;u;)u.r(o,u.d),u=u._next;e<0&&rf(t,e,i,!0),t._onUpdate&&!i&&_i(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&_i(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&es(t,1),!i&&!Tn&&(_i(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},ux=function(t,e,i){var r;if(i>e)for(r=t._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},Bo=function(t,e,i,r){var s=t._repeat,o=$e(e)||0,a=t._tTime/t._tDur;return a&&!r&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:$e(o*(s+1)+t._rDelay*s):o,a>0&&!r&&Pc(t,t._tTime=t._tDur*a),t.parent&&Rc(t),i||Bs(t.parent,t),t},np=function(t){return t instanceof Xn?Bs(t):Bo(t,t._dur)},fx={_start:0,endTime:Va,totalDuration:Va},Ti=function n(t,e,i){var r=t.labels,s=t._recent||fx,o=t.duration()>=Ai?s.endTime(!1):t._dur,a,l,u;return Sn(e)&&(isNaN(e)||e in r)?(l=e.charAt(0),u=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(e in r||(r[e]=o),r[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),u&&i&&(l=l/100*(On(i)?i[0]:i).totalDuration()),a>1?n(t,e.substr(0,a-1),i)+l:o+l)):e==null?o:+e},Ca=function(t,e,i){var r=br(e[1]),s=(r?2:1)+(t<2?0:1),o=e[s],a,l;if(r&&(o.duration=e[1]),o.parent=i,t){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ei(l.vars.inherit)&&l.parent;o.immediateRender=ei(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new dn(e[0],o,e[s+1])},ss=function(t,e){return t||t===0?e(t):e},Qa=function(t,e,i){return i<t?t:i>e?e:i},Un=function(t,e){return!Sn(t)||!(e=tx.exec(t))?"":e[1]},hx=function(t,e,i){return ss(i,function(r){return Qa(t,e,r)})},of=[].slice,j0=function(t,e){return t&&er(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&er(t[0]))&&!t.nodeType&&t!==qi},dx=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(r){var s;return Sn(r)&&!e||j0(r,1)?(s=i).push.apply(s,Ci(r)):i.push(r)})||i},Ci=function(t,e,i){return qe&&!e&&qe.selector?qe.selector(t):Sn(t)&&!i&&(ef||!ko())?of.call((e||Ah).querySelectorAll(t),0):On(t)?dx(t,i):j0(t)?of.call(t,0):t?[t]:[]},af=function(t){return t=Ci(t)[0]||Ha("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return Ci(e,i.querySelectorAll?i:i===t?Ha("Invalid scope")||Ah.createElement("div"):t)}},Z0=function(t){return t.sort(function(){return .5-Math.random()})},J0=function(t){if(Qe(t))return t;var e=er(t)?t:{each:t},i=ks(e.ease),r=e.from||0,s=parseFloat(e.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=e.axis,c=r,f=r;return Sn(r)?c=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],f=r[1]),function(h,d,g){var _=(g||e).length,p=o[_],m,S,M,v,R,w,P,D,x;if(!p){if(x=e.grid==="auto"?0:(e.grid||[1,Ai])[1],!x){for(P=-Ai;P<(P=g[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(p=o[_]=[],m=l?Math.min(x,_)*c-.5:r%x,S=x===Ai?0:l?_*f/x-.5:r/x|0,P=0,D=Ai,w=0;w<_;w++)M=w%x-m,v=S-(w/x|0),p[w]=R=u?Math.abs(u==="y"?v:M):U0(M*M+v*v),R>P&&(P=R),R<D&&(D=R);r==="random"&&Z0(p),p.max=P-D,p.min=D,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(x>_?_-1:u?u==="y"?_/x:x:Math.max(x,_/x))||0)*(r==="edges"?-1:1),p.b=_<0?s-_:s,p.u=Un(e.amount||e.each)||0,i=i&&_<0?l_(i):i}return _=(p[h]-p.min)/p.max||0,$e(p.b+(i?i(_):_)*p.v)+p.u}},lf=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var r=$e(Math.round(parseFloat(i)/t)*t*e);return(r-r%1)/e+(br(i)?0:Un(i))}},Q0=function(t,e){var i=On(t),r,s;return!i&&er(t)&&(r=i=t.radius||Ai,t.values?(t=Ci(t.values),(s=!br(t[0]))&&(r*=r)):t=lf(t.increment)),ss(e,i?Qe(t)?function(o){return s=t(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Ai,c=0,f=t.length,h,d;f--;)s?(h=t[f].x-a,d=t[f].y-l,h=h*h+d*d):h=Math.abs(t[f]-a),h<u&&(u=h,c=f);return c=!r||u<=r?t[c]:o,s||c===o||br(o)?c:c+Un(o)}:lf(t))},t_=function(t,e,i,r){return ss(On(t)?!e:i===!0?!!(i=0):!r,function(){return On(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*r)/r})},px=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(r){return e.reduce(function(s,o){return o(s)},r)}},mx=function(t,e){return function(i){return t(parseFloat(i))+(e||Un(i))}},_x=function(t,e,i){return n_(t,e,0,1,i)},e_=function(t,e,i){return ss(i,function(r){return t[~~e(r)]})},gx=function n(t,e,i){var r=e-t;return On(t)?e_(t,n(0,t.length),e):ss(i,function(s){return(r+(s-t)%r)%r+t})},vx=function n(t,e,i){var r=e-t,s=r*2;return On(t)?e_(t,n(0,t.length-1),e):ss(i,function(o){return o=(s+(o-t)%s)%s||0,t+(o>r?s-o:o)})},Ga=function(t){return t.replace(Zy,function(e){var i=e.indexOf("[")+1,r=e.substring(i||7,i?e.indexOf("]"):e.length-1).split(Jy);return t_(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},n_=function(t,e,i,r,s){var o=e-t,a=r-i;return ss(s,function(l){return i+((l-t)/o*a||0)})},yx=function n(t,e,i,r){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=Sn(t),a={},l,u,c,f,h;if(i===!0&&(r=1)&&(i=null),o)t={p:t},e={p:e};else if(On(t)&&!On(e)){for(c=[],f=t.length,h=f-2,u=1;u<f;u++)c.push(n(t[u-1],t[u]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return c[_](g-_)},i=e}else r||(t=Oo(On(t)?[]:{},t));if(!c){for(l in e)Lh.call(a,t,l,"get",e[l]);s=function(g){return Fh(g,a)||(o?t.p:t)}}}return ss(i,s)},ip=function(t,e,i){var r=t.labels,s=Ai,o,a,l;for(o in r)a=r[o]-e,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},_i=function(t,e,i){var r=t.vars,s=r[e],o=qe,a=t._ctx,l,u,c;if(s)return l=r[e+"Params"],u=r.callbackScope||t,i&&Kr.length&&oc(),a&&(qe=a),c=l?s.apply(u,l):s.call(u),qe=o,c},ma=function(t){return es(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Tn),t.progress()<1&&_i(t,"onInterrupt"),t},vo,i_=[],r_=function(t){if(t)if(t=!t.name&&t.default||t,wh()||t.headless){var e=t.name,i=Qe(t),r=e&&!i&&t.init?function(){this._props=[]}:t,s={init:Va,render:Fh,add:Lh,kill:Nx,modifier:Ux,rawVars:0},o={targetTest:0,get:0,getSetter:Oh,aliases:{},register:0};if(ko(),t!==r){if(fi[e])return;Mi(r,Mi(ac(t,s),o)),Oo(r.prototype,Oo(s,ac(t,o))),fi[r.prop=e]=r,t.targetTest&&(Hl.push(r),Rh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}z0(e,r),t.register&&t.register(si,r,ii)}else i_.push(t)},Be=255,_a={aqua:[0,Be,Be],lime:[0,Be,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Be],navy:[0,0,128],white:[Be,Be,Be],olive:[128,128,0],yellow:[Be,Be,0],orange:[Be,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Be,0,0],pink:[Be,192,203],cyan:[0,Be,Be],transparent:[Be,Be,Be,0]},Jc=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*Be+.5|0},s_=function(t,e,i){var r=t?br(t)?[t>>16,t>>8&Be,t&Be]:0:_a.black,s,o,a,l,u,c,f,h,d,g;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),_a[t])r=_a[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&Be,r&Be,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&Be,t&Be]}else if(t.substr(0,3)==="hsl"){if(r=g=t.match(Jd),!e)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=Jc(l+1/3,s,o),r[1]=Jc(l,s,o),r[2]=Jc(l-1/3,s,o);else if(~t.indexOf("="))return r=t.match(O0),i&&r.length<4&&(r[3]=1),r}else r=t.match(Jd)||_a.transparent;r=r.map(Number)}return e&&!g&&(s=r[0]/Be,o=r[1]/Be,a=r[2]/Be,f=Math.max(s,o,a),h=Math.min(s,o,a),c=(f+h)/2,f===h?l=u=0:(d=f-h,u=c>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},o_=function(t){var e=[],i=[],r=-1;return t.split(jr).forEach(function(s){var o=s.match(go)||[];e.push.apply(e,o),i.push(r+=o.length+1)}),e.c=i,e},rp=function(t,e,i){var r="",s=(t+r).match(jr),o=e?"hsla(":"rgba(",a=0,l,u,c,f;if(!s)return t;if(s=s.map(function(h){return(h=s_(h,e,1))&&o+(e?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(c=o_(t),l=i.c,l.join(r)!==c.c.join(r)))for(u=t.replace(jr,"1").split(go),f=u.length-1;a<f;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=t.split(jr),f=u.length-1;a<f;a++)r+=u[a]+s[a];return r+u[f]},jr=(function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in _a)n+="|"+t+"\\b";return new RegExp(n+")","gi")})(),xx=/hsl[a]?\(/,a_=function(t){var e=t.join(" "),i;if(jr.lastIndex=0,jr.test(e))return i=xx.test(e),t[1]=rp(t[1],i),t[0]=rp(t[0],i,o_(t[1])),!0},Wa,pi=(function(){var n=Date.now,t=500,e=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,f,h,d,g=function _(p){var m=n()-r,S=p===!0,M,v,R,w;if((m>t||m<0)&&(i+=m-e),r+=m,R=r-i,M=R-o,(M>0||S)&&(w=++f.frame,h=R-f.time*1e3,f.time=R=R/1e3,o+=M+(M>=s?4:s-M),v=1),S||(l=u(_)),v)for(d=0;d<a.length;d++)a[d](R,h,w,p)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){B0&&(!ef&&wh()&&(qi=ef=window,Ah=qi.document||{},xi.gsap=si,(qi.gsapVersions||(qi.gsapVersions=[])).push(si.version),k0(sc||qi.GreenSockGlobals||!qi.gsap&&qi||{}),i_.forEach(r_)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),u=c||function(p){return setTimeout(p,o-f.time*1e3+1|0)},Wa=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Wa=0,u=Va},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){s=1e3/(p||240),o=f.time*1e3+s},add:function(p,m,S){var M=m?function(v,R,w,P){p(v,R,w,P),f.remove(M)}:p;return f.remove(p),a[S?"unshift":"push"](M),ko(),M},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},f})(),ko=function(){return!Wa&&pi.wake()},Se={},Mx=/^[\d.\-M][\d.\-,\s]/,Sx=/["']/g,bx=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),e[r]=isNaN(u)?u.replace(Sx,"").trim():+u,r=l.substr(a+1).trim();return e},Ex=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<i?t.indexOf(")",i+1):i)},Tx=function(t){var e=(t+"").split("("),i=Se[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[bx(e[1])]:Ex(t).split(",").map(W0)):Se._CE&&Mx.test(t)?Se._CE("",t):i},l_=function(t){return function(e){return 1-t(1-e)}},c_=function n(t,e){for(var i=t._first,r;i;)i instanceof Xn?n(i,e):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==e&&(i.timeline?n(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next},ks=function(t,e){return t&&(Qe(t)?t:Se[t]||Tx(t))||e},Ws=function(t,e,i,r){i===void 0&&(i=function(l){return 1-e(1-l)}),r===void 0&&(r=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:i,easeInOut:r},o;return ni(t,function(a){Se[a]=xi[a]=s,Se[o=a.toLowerCase()]=i;for(var l in s)Se[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Se[a+"."+l]=s[l]}),s},u_=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Qc=function n(t,e,i){var r=e>=1?e:1,s=(i||(t?.3:.45))/(e<1?e:1),o=s/tf*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*jy((c-o)*s)+1},l=t==="out"?a:t==="in"?function(u){return 1-a(1-u)}:u_(a);return s=tf/s,l.config=function(u,c){return n(t,u,c)},l},tu=function n(t,e){e===void 0&&(e=1.70158);var i=function(o){return o?--o*o*((e+1)*o+e)+1:0},r=t==="out"?i:t==="in"?function(s){return 1-i(1-s)}:u_(i);return r.config=function(s){return n(t,s)},r};ni("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,t){var e=t<5?t+1:t;Ws(n+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});Se.Linear.easeNone=Se.none=Se.Linear.easeIn;Ws("Elastic",Qc("in"),Qc("out"),Qc());(function(n,t){var e=1/t,i=2*e,r=2.5*e,s=function(a){return a<e?n*a*a:a<i?n*Math.pow(a-1.5/t,2)+.75:a<r?n*(a-=2.25/t)*a+.9375:n*Math.pow(a-2.625/t,2)+.984375};Ws("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ws("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Ws("Circ",function(n){return-(U0(1-n*n)-1)});Ws("Sine",function(n){return n===1?1:-Ky(n*qy)+1});Ws("Back",tu("in"),tu("out"),tu());Se.SteppedEase=Se.steps=xi.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,r=t+(e?0:1),s=e?1:0,o=1-ke;return function(a){return((r*Qa(0,o,a)|0)+s)*i}}};No.ease=Se["quad.out"];ni("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Ph+=n+","+n+"Params,"});var f_=function(t,e){this.id=$y++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:V0,this.set=e?e.getSetter:Oh},Xa=(function(){function n(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Bo(this,+e.duration,1,1),this.data=e.data,qe&&(this._ctx=qe,qe.data.push(this)),Wa||pi.wake()}var t=n.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,Bo(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,r){if(ko(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Pc(this,i),!s._dp||s.parent||q0(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&ji(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===ke||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),G0(this,i,r)),this},t.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+ep(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},t.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+ep(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Fo(this._tTime,s)+1:1},t.timeScale=function(i,r){if(!arguments.length)return this._rts===-ke?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?lc(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-ke?0:this._rts,this.totalTime(Qa(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Rc(this),ox(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ko(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ke&&(this._tTime-=ke)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=$e(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&ji(r,this,this._start-this._delay),this}return this._start},t.endTime=function(i){return this._start+(ei(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?lc(r.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=nx);var r=Tn;return Tn=i,Ih(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Tn=r,this},t.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,np(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,np(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,r){return this.totalTime(Ti(this,i),ei(r))},t.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,ei(r)),this._dur||(this._zTime=-ke),this},t.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},t.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-ke:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ke,this},t.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-ke)},t.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},t.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Qe(i)?i:X0,l=function(){var c=r.then;r.then=null,s&&s(),Qe(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},t.kill=function(){ma(this)},n})();Mi(Xa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ke,_prom:0,_ps:!1,_rts:1});var Xn=(function(n){L0(t,n);function t(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=ei(i.sortChildren),Ke&&ji(i.parent||Ke,hr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&$0(hr(s),i.scrollTrigger),s}var e=t.prototype;return e.to=function(r,s,o){return Ca(0,arguments,this),this},e.from=function(r,s,o){return Ca(1,arguments,this),this},e.fromTo=function(r,s,o,a){return Ca(2,arguments,this),this},e.set=function(r,s,o){return s.duration=0,s.parent=this,Aa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new dn(r,s,Ti(this,o),1),this},e.call=function(r,s,o){return ji(this,dn.delayedCall(0,r,s),o)},e.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new dn(r,o,Ti(this,l)),this},e.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Aa(o).immediateRender=ei(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},e.staggerFromTo=function(r,s,o,a,l,u,c,f){return a.startAt=o,Aa(a).immediateRender=ei(a.immediateRender),this.staggerTo(r,s,a,l,u,c,f)},e.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:$e(r),f=this._zTime<0!=r<0&&(this._initted||!u),h,d,g,_,p,m,S,M,v,R,w,P;if(this!==Ke&&c>l&&r>=0&&(c=l),c!==this._tTime||o||f){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),h=c,v=this._start,M=this._ts,m=!M,f&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,p=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,o);if(h=$e(c%p),c===l?(_=this._repeat,h=u):(R=$e(c/p),_=~~R,_&&_===R&&(h=u,_--),h>u&&(h=u)),R=Fo(this._tTime,p),!a&&this._tTime&&R!==_&&this._tTime-R*p-this._dur<=0&&(R=_),w&&_&1&&(h=u-h,P=1),_!==R&&!this._lock){var D=w&&R&1,x=D===(w&&_&1);if(_<R&&(D=!D),a=D?0:c%u?u:c,this._lock=1,this.render(a||(P?0:$e(_*p)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&_i(this,"onRepeat"),this.vars.repeatRefresh&&!P&&(this.invalidate()._lock=1,R=_),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,x&&(this._lock=2,a=D?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!P&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;c_(this,P)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=ux(this,$e(a),$e(h)),S&&(c-=h-(h=S._start))),this._tTime=c,this._time=h,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!R&&(_i(this,"onStart"),this._tTime!==c))return this;if(h>=a&&r>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!m){S=0,g&&(c+=this._zTime=-ke);break}}d=g}else{d=this._last;for(var b=r<0?r:h;d;){if(g=d._prev,(d._act||b<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(b-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(b-d._start)*d._ts,s,o||Tn&&Ih(d)),h!==this._time||!this._ts&&!m){S=0,g&&(c+=this._zTime=b?-ke:ke);break}}d=g}}if(S&&!s&&(this.pause(),S.render(h>=a?0:-ke)._zTime=h>=a?1:-1,this._ts))return this._start=v,Rc(this),this.render(r,s,o);this._onUpdate&&!s&&_i(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(v===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&es(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(_i(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,s){var o=this;if(br(s)||(s=Ti(this,s,r)),!(r instanceof Xa)){if(On(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Sn(r))return this.addLabel(r,s);if(Qe(r))r=dn.delayedCall(0,r);else return this}return this!==r?ji(this,r,s):this},e.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Ai);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof dn?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},e.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},e.remove=function(r){return Sn(r)?this.removeLabel(r):Qe(r)?this.killTweensOf(r):(r.parent===this&&Cc(this,r),r===this._recent&&(this._recent=this._last),Bs(this))},e.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=$e(pi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},e.addLabel=function(r,s){return this.labels[r]=Ti(this,s),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,s,o){var a=dn.delayedCall(0,s||Va,o);return a.data="isPause",this._hasPause=1,ji(this,a,Ti(this,r))},e.removePause=function(r){var s=this._first;for(r=Ti(this,r);s;)s._start===r&&s.data==="isPause"&&es(s),s=s._next},e.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Xr!==a[l]&&a[l].kill(r,s);return this},e.getTweensOf=function(r,s){for(var o=[],a=Ci(r),l=this._first,u=br(s),c;l;)l instanceof dn?ix(l._targets,a)&&(u?(!Xr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},e.tweenTo=function(r,s){s=s||{};var o=this,a=Ti(o,r),l=s,u=l.startAt,c=l.onStart,f=l.onStartParams,h=l.immediateRender,d,g=dn.to(o,Mi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||ke,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());g._dur!==p&&Bo(g,p,0,1).render(g._time,!0,!0),d=1}c&&c.apply(g,f||[])}},s));return h?g.render(0):g},e.tweenFromTo=function(r,s,o){return this.tweenTo(s,Mi({startAt:{time:Ti(this,r)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),ip(this,Ti(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),ip(this,Ti(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+ke)},e.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=$e(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return Bs(this)},e.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Bs(this)},e.totalDuration=function(r){var s=0,o=this,a=o._last,l=Ai,u,c,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ji(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=$e(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;Bo(o,o===Ke&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(r){if(Ke._ts&&(G0(Ke,lc(r,Ke)),H0=pi.frame),pi.frame>=Qd){Qd+=vi.autoSleep||120;var s=Ke._first;if((!s||!s._ts)&&vi.autoSleep&&pi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||pi.sleep()}}},t})(Xa);Mi(Xn.prototype,{_lock:0,_hasPause:0,_forcing:0});var wx=function(t,e,i,r,s,o,a){var l=new ii(this._pt,t,e,0,1,g_,null,s),u=0,c=0,f,h,d,g,_,p,m,S;for(l.b=i,l.e=r,i+="",r+="",(m=~r.indexOf("random("))&&(r=Ga(r)),o&&(S=[i,r],o(S,t,e),i=S[0],r=S[1]),h=i.match(jc)||[];f=jc.exec(r);)g=f[0],_=r.substring(u,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==h[c++]&&(p=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:_||c===1?_:",",s:p,c:g.charAt(1)==="="?Co(p,g)-p:parseFloat(g)-p,m:d&&d<4?Math.round:0},u=jc.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(F0.test(r)||m)&&(l.e=0),this._pt=l,l},Lh=function(t,e,i,r,s,o,a,l,u,c){Qe(r)&&(r=r(s||0,t,o));var f=t[e],h=i!=="get"?i:Qe(f)?u?t[e.indexOf("set")||!Qe(t["get"+e.substr(3)])?e:"get"+e.substr(3)](u):t[e]():f,d=Qe(f)?u?Dx:m_:Nh,g;if(Sn(r)&&(~r.indexOf("random(")&&(r=Ga(r)),r.charAt(1)==="="&&(g=Co(h,r)+(Un(h)||0),(g||g===0)&&(r=g))),!c||h!==r||cf)return!isNaN(h*r)&&r!==""?(g=new ii(this._pt,t,e,+h||0,r-(h||0),typeof f=="boolean"?Lx:__,0,d),u&&(g.fp=u),a&&g.modifier(a,this,t),this._pt=g):(!f&&!(e in t)&&Ch(e,r),wx.call(this,t,e,h,r,d,l||vi.stringFilter,u))},Ax=function(t,e,i,r,s){if(Qe(t)&&(t=Ra(t,s,e,i,r)),!er(t)||t.style&&t.nodeType||On(t)||N0(t))return Sn(t)?Ra(t,s,e,i,r):t;var o={},a;for(a in t)o[a]=Ra(t[a],s,e,i,r);return o},h_=function(t,e,i,r,s,o){var a,l,u,c;if(fi[t]&&(a=new fi[t]).init(s,a.rawVars?e[t]:Ax(e[t],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new ii(i._pt,s,t,0,1,a.render,a,0,a.priority),i!==vo))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},Xr,cf,Uh=function n(t,e,i){var r=t.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,f=r.yoyoEase,h=r.keyframes,d=r.autoRevert,g=t._dur,_=t._startAt,p=t._targets,m=t.parent,S=m&&m.data==="nested"?m.vars.targets:p,M=t._overwrite==="auto"&&!Eh,v=t.timeline,R,w,P,D,x,b,N,B,H,J,j,$,et;if(v&&(!h||!s)&&(s="none"),t._ease=ks(s,No.ease),t._yEase=f?l_(ks(f===!0?s:f,No.ease)):0,f&&t._yoyo&&!t._repeat&&(f=t._yEase,t._yEase=t._ease,t._ease=f),t._from=!v&&!!r.runBackwards,!v||h&&!r.stagger){if(B=p[0]?Fs(p[0]).harness:0,$=B&&r[B.prop],R=ac(r,Rh),_&&(_._zTime<0&&_.progress(1),e<0&&c&&a&&!d?_.render(-1,!0):_.revert(c&&g?zl:ex),_._lazy=0),o){if(es(t._startAt=dn.set(p,Mi({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&ei(l),startAt:null,delay:0,onUpdate:u&&function(){return _i(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Tn||!a&&!d)&&t._startAt.revert(zl),a&&g&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(c&&g&&!_){if(e&&(a=!1),P=Mi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&ei(l),immediateRender:a,stagger:0,parent:m},R),$&&(P[B.prop]=$),es(t._startAt=dn.set(p,P)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Tn?t._startAt.revert(zl):t._startAt.render(-1,!0)),t._zTime=e,!a)n(t._startAt,ke,ke);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&ei(l)||l&&!g,w=0;w<p.length;w++){if(x=p[w],N=x._gsap||Dh(p)[w]._gsap,t._ptLookup[w]=J={},nf[N.id]&&Kr.length&&oc(),j=S===p?w:S.indexOf(x),B&&(H=new B).init(x,$||R,t,j,S)!==!1&&(t._pt=D=new ii(t._pt,x,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(W){J[W]=D}),H.priority&&(b=1)),!B||$)for(P in R)fi[P]&&(H=h_(P,R,t,j,x,S))?H.priority&&(b=1):J[P]=D=Lh.call(t,x,P,"get",R[P],j,S,0,r.stringFilter);t._op&&t._op[w]&&t.kill(x,t._op[w]),M&&t._pt&&(Xr=t,Ke.killTweensOf(x,J,t.globalTime(e)),et=!t.parent,Xr=0),t._pt&&l&&(nf[N.id]=1)}b&&v_(t),t._onInit&&t._onInit(t)}t._onUpdate=u,t._initted=(!t._op||t._pt)&&!et,h&&e<=0&&v.render(Ai,!0,!0)},Cx=function(t,e,i,r,s,o,a,l){var u=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,f,h,d;if(!u)for(u=t._ptCache[e]=[],h=t._ptLookup,d=t._targets.length;d--;){if(c=h[d][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return cf=1,t.vars[e]="+=0",Uh(t,a),cf=0,l?Ha(e+" not eligible for reset"):1;u.push(c)}for(d=u.length;d--;)f=u[d],c=f._pt||f,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,f.e&&(f.e=sn(i)+Un(f.e)),f.b&&(f.b=c.s+Un(f.b))},Rx=function(t,e){var i=t[0]?Fs(t[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return e;s=Oo({},e);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Px=function(t,e,i,r){var s=e.ease||r||"power1.inOut",o,a;if(On(e))a=i[t]||(i[t]=[]),e.forEach(function(l,u){return a.push({t:u/(e.length-1)*100,v:l,e:s})});else for(o in e)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Ra=function(t,e,i,r,s){return Qe(t)?t.call(e,i,r,s):Sn(t)&&~t.indexOf("random(")?Ga(t):t},d_=Ph+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",p_={};ni(d_+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return p_[n]=1});var dn=(function(n){L0(t,n);function t(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Aa(r))||this;var l=a.vars,u=l.duration,c=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,S=r.parent||Ke,M=(On(i)||N0(i)?br(i[0]):"length"in r)?[i]:Ci(i),v,R,w,P,D,x,b,N;if(a._targets=M.length?Dh(M):Ha("GSAP target "+i+" not found. https://gsap.com",!vi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||h||cl(u)||cl(c)){if(r=a.vars,v=a.timeline=new Xn({data:"nested",defaults:_||{},targets:S&&S.data==="nested"?S.vars.targets:M}),v.kill(),v.parent=v._dp=hr(a),v._start=0,h||cl(u)||cl(c)){if(P=M.length,b=h&&J0(h),er(h))for(D in h)~d_.indexOf(D)&&(N||(N={}),N[D]=h[D]);for(R=0;R<P;R++)w=ac(r,p_),w.stagger=0,m&&(w.yoyoEase=m),N&&Oo(w,N),x=M[R],w.duration=+Ra(u,hr(a),R,x,M),w.delay=(+Ra(c,hr(a),R,x,M)||0)-a._delay,!h&&P===1&&w.delay&&(a._delay=c=w.delay,a._start+=c,w.delay=0),v.to(x,w,b?b(R,x,M):0),v._ease=Se.none;v.duration()?u=c=0:a.timeline=0}else if(g){Aa(Mi(v.vars.defaults,{ease:"none"})),v._ease=ks(g.ease||r.ease||"none");var B=0,H,J,j;if(On(g))g.forEach(function($){return v.to(M,$,">")}),v.duration();else{w={};for(D in g)D==="ease"||D==="easeEach"||Px(D,g[D],w,g.easeEach);for(D in w)for(H=w[D].sort(function($,et){return $.t-et.t}),B=0,R=0;R<H.length;R++)J=H[R],j={ease:J.e,duration:(J.t-(R?H[R-1].t:0))/100*u},j[D]=J.v,v.to(M,j,B),B+=j.duration;v.duration()<u&&v.to({},{duration:u-v.duration()})}}u||a.duration(u=v.duration())}else a.timeline=0;return d===!0&&!Eh&&(Xr=hr(a),Ke.killTweensOf(M),Xr=0),ji(S,hr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!u&&!g&&a._start===$e(S._time)&&ei(f)&&ax(hr(a))&&S.data!=="nested")&&(a._tTime=-ke,a.render(Math.max(0,-c)||0)),p&&$0(hr(a),p),a}var e=t.prototype;return e.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,f=r>l-ke&&!c?l:r<ke?0:r,h,d,g,_,p,m,S,M,v;if(!u)cx(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(h=f,M=this.timeline,this._repeat){if(_=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(_*100+r,s,o);if(h=$e(f%_),f===l?(g=this._repeat,h=u):(p=$e(f/_),g=~~p,g&&g===p?(h=u,g--):h>u&&(h=u)),m=this._yoyo&&g&1,m&&(v=this._yEase,h=u-h),p=Fo(this._tTime,_),h===a&&!o&&this._initted&&g===p)return this._tTime=f,this;g!==p&&(M&&this._yEase&&c_(M,m),this.vars.repeatRefresh&&!m&&!this._lock&&h!==_&&this._initted&&(this._lock=o=1,this.render($e(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(K0(this,c?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(v||this._ease)(h/u),this._from&&(this.ratio=S=1-S),!a&&f&&!s&&!p&&(_i(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;M&&M.render(r<0?r:M._dur*M._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&rf(this,r,s,o),_i(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&_i(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(c&&!this._onUpdate&&rf(this,r,!0,!0),(r||!u)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&es(this,1),!s&&!(c&&!a)&&(f||a||m)&&(_i(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},e.resetTo=function(r,s,o,a,l){Wa||pi.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Uh(this,u),c=this._ease(u/this._dur),Cx(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(Pc(this,0),this.parent||Y0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ma(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Tn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Xr&&Xr.vars.overwrite!==!0)._first||ma(this),this.parent&&o!==this.timeline.totalDuration()&&Bo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Ci(r):a,u=this._ptLookup,c=this._pt,f,h,d,g,_,p,m;if((!s||s==="all")&&sx(a,l))return s==="all"&&(this._pt=0),ma(this);for(f=this._op=this._op||[],s!=="all"&&(Sn(s)&&(_={},ni(s,function(S){return _[S]=1}),s=_),s=Rx(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){h=u[m],s==="all"?(f[m]=s,g=h,d={}):(d=f[m]=f[m]||{},g=s);for(_ in g)p=h&&h[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Cc(this,p,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&c&&ma(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return Ca(1,arguments)},t.delayedCall=function(r,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(r,s,o){return Ca(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,o){return Ke.killTweensOf(r,s,o)},t})(Xa);Mi(dn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ni("staggerTo,staggerFrom,staggerFromTo",function(n){dn[n]=function(){var t=new Xn,e=of.call(arguments,0);return e.splice(n==="staggerFromTo"?5:4,0,0),t[n].apply(t,e)}});var Nh=function(t,e,i){return t[e]=i},m_=function(t,e,i){return t[e](i)},Dx=function(t,e,i,r){return t[e](r.fp,i)},Ix=function(t,e,i){return t.setAttribute(e,i)},Oh=function(t,e){return Qe(t[e])?m_:Th(t[e])&&t.setAttribute?Ix:Nh},__=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Lx=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},g_=function(t,e){var i=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+r,i=i._next;r+=e.c}e.set(e.t,e.p,r,e)},Fh=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},Ux=function(t,e,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(t,e,i),s=o},Nx=function(t){for(var e=this._pt,i,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?Cc(this,e,"_pt"):e.dep||(i=1),e=r;return!i},Ox=function(t,e,i,r){r.mSet(t,e,r.m.call(r.tween,i,r.mt),r)},v_=function(t){for(var e=t._pt,i,r,s,o;e;){for(i=e._next,r=s;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:o)?e._prev._next=e:s=e,(e._next=r)?r._prev=e:o=e,e=i}t._pt=s},ii=(function(){function n(e,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||__,this.d=l||this,this.set=u||Nh,this.pr=c||0,this._next=e,e&&(e._prev=this)}var t=n.prototype;return t.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=Ox,this.m=i,this.mt=s,this.tween=r},n})();ni(Ph+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Rh[n]=1});xi.TweenMax=xi.TweenLite=dn;xi.TimelineLite=xi.TimelineMax=Xn;Ke=new Xn({sortChildren:!1,defaults:No,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});vi.stringFilter=a_;var zs=[],Vl={},Fx=[],sp=0,Bx=0,eu=function(t){return(Vl[t]||Fx).map(function(e){return e()})},uf=function(){var t=Date.now(),e=[];t-sp>2&&(eu("matchMediaInit"),zs.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=qi.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&e.push(i))}),eu("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),sp=t,eu("matchMedia"))},y_=(function(){function n(e,i){this.selector=i&&af(i),this.data=[],this._r=[],this.isReverted=!1,this.id=Bx++,e&&this.add(e)}var t=n.prototype;return t.add=function(i,r,s){Qe(i)&&(s=r,r=i,i=Qe);var o=this,a=function(){var u=qe,c=o.selector,f;return u&&u!==o&&u.data.push(o),s&&(o.selector=af(s)),qe=o,f=r.apply(o,arguments),Qe(f)&&o._r.push(f),qe=u,o.selector=c,o.isReverted=!1,f};return o.last=a,i===Qe?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},t.ignore=function(i){var r=qe;qe=null,i(this),qe=r},t.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof dn&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,r){var s=this;if(i?(function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,f){return f.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof Xn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof dn)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=zs.length;o--;)zs[o].id===this.id&&zs.splice(o,1)},t.revert=function(i){this.kill(i||{})},n})(),kx=(function(){function n(e){this.contexts=[],this.scope=e,qe&&qe.data.push(this)}var t=n.prototype;return t.add=function(i,r,s){er(i)||(i={matches:i});var o=new y_(0,s||this.scope),a=o.conditions={},l,u,c;qe&&!o.selector&&(o.selector=qe.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=qi.matchMedia(i[u]),l&&(zs.indexOf(o)<0&&zs.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(uf):l.addEventListener("change",uf)));return c&&r(o,function(f){return o.add(null,f)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n})(),cc={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(r){return r_(r)})},timeline:function(t){return new Xn(t)},getTweensOf:function(t,e){return Ke.getTweensOf(t,e)},getProperty:function(t,e,i,r){Sn(t)&&(t=Ci(t)[0]);var s=Fs(t||{}).get,o=i?X0:W0;return i==="native"&&(i=""),t&&(e?o((fi[e]&&fi[e].get||s)(t,e,i,r)):function(a,l,u){return o((fi[a]&&fi[a].get||s)(t,a,l,u))})},quickSetter:function(t,e,i){if(t=Ci(t),t.length>1){var r=t.map(function(c){return si.quickSetter(c,e,i)}),s=r.length;return function(c){for(var f=s;f--;)r[f](c)}}t=t[0]||{};var o=fi[e],a=Fs(t),l=a.harness&&(a.harness.aliases||{})[e]||e,u=o?function(c){var f=new o;vo._pt=0,f.init(t,i?c+i:c,vo,0,[t]),f.render(1,f),vo._pt&&Fh(1,vo)}:a.set(t,l);return o?u:function(c){return u(t,l,i?c+i:c,a,1)}},quickTo:function(t,e,i){var r,s=si.to(t,Mi((r={},r[e]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(e,l,u,c)};return o.tween=s,o},isTweening:function(t){return Ke.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ks(t.ease,No.ease)),tp(No,t||{})},config:function(t){return tp(vi,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,r=t.plugins,s=t.defaults,o=t.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!fi[a]&&!xi[a]&&Ha(e+" effect requires "+a+" plugin.")}),Zc[e]=function(a,l,u){return i(Ci(a),Mi(l||{},s),u)},o&&(Xn.prototype[e]=function(a,l,u){return this.add(Zc[e](a,er(l)?l:(u=l)&&{},this),u)})},registerEase:function(t,e){Se[t]=ks(e)},parseEase:function(t,e){return arguments.length?ks(t,e):Se},getById:function(t){return Ke.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new Xn(t),r,s;for(i.smoothChildTiming=ei(t.smoothChildTiming),Ke.remove(i),i._dp=0,i._time=i._tTime=Ke._time,r=Ke._first;r;)s=r._next,(e||!(!r._dur&&r instanceof dn&&r.vars.onComplete===r._targets[0]))&&ji(i,r,r._start-r._delay),r=s;return ji(Ke,i,0),i},context:function(t,e){return t?new y_(t,e):qe},matchMedia:function(t){return new kx(t)},matchMediaRefresh:function(){return zs.forEach(function(t){var e=t.conditions,i,r;for(r in e)e[r]&&(e[r]=!1,i=1);i&&t.revert()})||uf()},addEventListener:function(t,e){var i=Vl[t]||(Vl[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=Vl[t],r=i&&i.indexOf(e);r>=0&&i.splice(r,1)},utils:{wrap:gx,wrapYoyo:vx,distribute:J0,random:t_,snap:Q0,normalize:_x,getUnit:Un,clamp:hx,splitColor:s_,toArray:Ci,selector:af,mapRange:n_,pipe:px,unitize:mx,interpolate:yx,shuffle:Z0},install:k0,effects:Zc,ticker:pi,updateRoot:Xn.updateRoot,plugins:fi,globalTimeline:Ke,core:{PropTween:ii,globals:z0,Tween:dn,Timeline:Xn,Animation:Xa,getCache:Fs,_removeLinkedListItem:Cc,reverting:function(){return Tn},context:function(t){return t&&qe&&(qe.data.push(t),t._ctx=qe),qe},suppressOverwrites:function(t){return Eh=t}}};ni("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return cc[n]=dn[n]});pi.add(Xn.updateRoot);vo=cc.to({},{duration:0});var zx=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},Hx=function(t,e){var i=t._targets,r,s,o;for(r in e)for(s=i.length;s--;)o=t._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=zx(o,r)),o&&o.modifier&&o.modifier(e[r],t,i[s],r))},nu=function(t,e){return{name:t,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(Sn(s)&&(l={},ni(s,function(c){return l[c]=1}),s=l),e){l={};for(u in s)l[u]=e(s[u]);s=l}Hx(a,s)}}}},si=cc.registerPlugin({name:"attr",init:function(t,e,i,r,s){var o,a,l;this.tween=i;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var i=e._pt;i;)Tn?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},nu("roundProps",lf),nu("modifiers"),nu("snap",Q0))||cc;dn.version=Xn.version=si.version="3.14.2";B0=1;wh()&&ko();Se.Power0;Se.Power1;Se.Power2;Se.Power3;Se.Power4;Se.Linear;Se.Quad;Se.Cubic;Se.Quart;Se.Quint;Se.Strong;Se.Elastic;Se.Back;Se.SteppedEase;Se.Bounce;Se.Sine;Se.Expo;Se.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var op,Yr,Ro,Bh,Is,ap,kh,Vx=function(){return typeof window<"u"},Er={},Ts=180/Math.PI,Po=Math.PI/180,Zs=Math.atan2,lp=1e8,zh=/([A-Z])/g,Gx=/(left|right|width|margin|padding|x)/i,Wx=/[\s,\(]\S/,Zi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ff=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Xx=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Yx=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},qx=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},$x=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},x_=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},M_=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Kx=function(t,e,i){return t.style[e]=i},jx=function(t,e,i){return t.style.setProperty(e,i)},Zx=function(t,e,i){return t._gsap[e]=i},Jx=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},Qx=function(t,e,i,r,s){var o=t._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},t1=function(t,e,i,r,s){var o=t._gsap;o[e]=i,o.renderTransform(s,o)},je="transform",ri=je+"Origin",e1=function n(t,e){var i=this,r=this.target,s=r.style,o=r._gsap;if(t in Er&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Zi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return i.tfm[a]=pr(r,a)}):this.tfm[t]=o.x?o[t]:pr(r,t),t===ri&&(this.tfm.zOrigin=o.zOrigin);else return Zi.transform.split(",").forEach(function(a){return n.call(i,a,e)});if(this.props.indexOf(je)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(ri,e,"")),t=je}(s||e)&&this.props.push(t,e,s[t])},S_=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},n1=function(){var t=this.props,e=this.target,i=e.style,r=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?i[t[s]]=t[s+2]:i.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(zh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=kh(),(!s||!s.isStart)&&!i[je]&&(S_(i),r.zOrigin&&i[ri]&&(i[ri]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},b_=function(t,e){var i={target:t,props:[],revert:n1,save:e1};return t._gsap||si.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(r){return i.save(r)}),i},E_,hf=function(t,e){var i=Yr.createElementNS?Yr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Yr.createElement(t);return i&&i.style?i:Yr.createElement(t)},gi=function n(t,e,i){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(zh,"-$1").toLowerCase())||r.getPropertyValue(e)||!i&&n(t,zo(e)||e,1)||""},cp="O,Moz,ms,Ms,Webkit".split(","),zo=function(t,e,i){var r=e||Is,s=r.style,o=5;if(t in s&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(cp[o]+t in s););return o<0?null:(o===3?"ms":o>=0?cp[o]:"")+t},df=function(){Vx()&&window.document&&(op=window,Yr=op.document,Ro=Yr.documentElement,Is=hf("div")||{style:{}},hf("div"),je=zo(je),ri=je+"Origin",Is.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",E_=!!zo("perspective"),kh=si.core.reverting,Bh=1)},up=function(t){var e=t.ownerSVGElement,i=hf("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=t.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Ro.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Ro.removeChild(i),s},fp=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},T_=function(t){var e,i;try{e=t.getBBox()}catch{e=up(t),i=1}return e&&(e.width||e.height)||i||(e=up(t)),e&&!e.width&&!e.x&&!e.y?{x:+fp(t,["x","cx","x1"])||0,y:+fp(t,["y","cy","y1"])||0,width:0,height:0}:e},w_=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&T_(t))},ns=function(t,e){if(e){var i=t.style,r;e in Er&&e!==ri&&(e=je),i.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(r==="--"?e:e.replace(zh,"-$1").toLowerCase())):i.removeAttribute(e)}},qr=function(t,e,i,r,s,o){var a=new ii(t._pt,e,i,0,1,o?M_:x_);return t._pt=a,a.b=r,a.e=s,t._props.push(i),a},hp={deg:1,rad:1,turn:1},i1={grid:1,flex:1},is=function n(t,e,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=Is.style,l=Gx.test(e),u=t.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",d=r==="%",g,_,p,m;if(r===o||!s||hp[r]||hp[o])return s;if(o!=="px"&&!h&&(s=n(t,e,i,"px")),m=t.getCTM&&w_(t),(d||o==="%")&&(Er[e]||~e.indexOf("adius")))return g=m?t.getBBox()[l?"width":"height"]:t[c],sn(d?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(h?o:r),_=r!=="rem"&&~e.indexOf("adius")||r==="em"&&t.appendChild&&!u?t:t.parentNode,m&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Yr||!_.appendChild)&&(_=Yr.body),p=_._gsap,p&&d&&p.width&&l&&p.time===pi.time&&!p.uncache)return sn(s/p.width*f);if(d&&(e==="height"||e==="width")){var S=t.style[e];t.style[e]=f+r,g=t[c],S?t.style[e]=S:ns(t,e)}else(d||o==="%")&&!i1[gi(_,"display")]&&(a.position=gi(t,"position")),_===t&&(a.position="static"),_.appendChild(Is),g=Is[c],_.removeChild(Is),a.position="absolute";return l&&d&&(p=Fs(_),p.time=pi.time,p.width=_[c]),sn(h?g*s/f:g&&s?f/g*s:0)},pr=function(t,e,i,r){var s;return Bh||df(),e in Zi&&e!=="transform"&&(e=Zi[e],~e.indexOf(",")&&(e=e.split(",")[0])),Er[e]&&e!=="transform"?(s=qa(t,r),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:fc(gi(t,ri))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=uc[e]&&uc[e](t,e,i)||gi(t,e)||V0(t,e)||(e==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?is(t,e,s,i)+i:s},r1=function(t,e,i,r){if(!i||i==="none"){var s=zo(e,t,1),o=s&&gi(t,s,1);o&&o!==i?(e=s,i=o):e==="borderColor"&&(i=gi(t,"borderTopColor"))}var a=new ii(this._pt,t.style,e,0,1,g_),l=0,u=0,c,f,h,d,g,_,p,m,S,M,v,R;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=gi(t,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=t.style[e],t.style[e]=r,r=gi(t,e)||r,_?t.style[e]=_:ns(t,e)),c=[i,r],a_(c),i=c[0],r=c[1],h=i.match(go)||[],R=r.match(go)||[],R.length){for(;f=go.exec(r);)p=f[0],S=r.substring(l,f.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),p!==(_=h[u++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),p.charAt(1)==="="&&(p=Co(d,p)+v),m=parseFloat(p),M=p.substr((m+"").length),l=go.lastIndex-M.length,M||(M=M||vi.units[e]||v,l===r.length&&(r+=M,a.e+=M)),v!==M&&(d=is(t,e,_,M)||0),a._pt={_next:a._pt,p:S||u===1?S:",",s:d,c:m-d,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=e==="display"&&r==="none"?M_:x_;return F0.test(r)&&(a.e=0),this._pt=a,a},dp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},s1=function(t){var e=t.split(" "),i=e[0],r=e[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(t=i,i=r,r=t),e[0]=dp[i]||i,e[1]=dp[r]||r,e.join(" ")},o1=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,r=i.style,s=e.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],Er[a]&&(l=1,a=a==="transformOrigin"?ri:je),ns(i,a);l&&(ns(i,je),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",qa(i,1),o.uncache=1,S_(r)))}},uc={clearProps:function(t,e,i,r,s){if(s.data!=="isFromStart"){var o=t._pt=new ii(t._pt,e,i,0,0,o1);return o.u=r,o.pr=-10,o.tween=s,t._props.push(i),1}}},Ya=[1,0,0,1,0,0],A_={},C_=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},pp=function(t){var e=gi(t,je);return C_(e)?Ya:e.substr(7).match(O0).map(sn)},Hh=function(t,e){var i=t._gsap||Fs(t),r=t.style,s=pp(t),o,a,l,u;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ya:s):(s===Ya&&!t.offsetParent&&t!==Ro&&!i.svg&&(l=r.display,r.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(u=1,a=t.nextElementSibling,Ro.appendChild(t)),s=pp(t),l?r.display=l:ns(t,"display"),u&&(a?o.insertBefore(t,a):o?o.appendChild(t):Ro.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},pf=function(t,e,i,r,s,o){var a=t._gsap,l=s||Hh(t,!0),u=a.xOrigin||0,c=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],g=l[1],_=l[2],p=l[3],m=l[4],S=l[5],M=e.split(" "),v=parseFloat(M[0])||0,R=parseFloat(M[1])||0,w,P,D,x;i?l!==Ya&&(P=d*p-g*_)&&(D=v*(p/P)+R*(-_/P)+(_*S-p*m)/P,x=v*(-g/P)+R*(d/P)-(d*S-g*m)/P,v=D,R=x):(w=T_(t),v=w.x+(~M[0].indexOf("%")?v/100*w.width:v),R=w.y+(~(M[1]||M[0]).indexOf("%")?R/100*w.height:R)),r||r!==!1&&a.smooth?(m=v-u,S=R-c,a.xOffset=f+(m*d+S*_)-m,a.yOffset=h+(m*g+S*p)-S):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=R,a.smooth=!!r,a.origin=e,a.originIsAbsolute=!!i,t.style[ri]="0px 0px",o&&(qr(o,a,"xOrigin",u,v),qr(o,a,"yOrigin",c,R),qr(o,a,"xOffset",f,a.xOffset),qr(o,a,"yOffset",h,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+R)},qa=function(t,e){var i=t._gsap||new f_(t);if("x"in i&&!e&&!i.uncache)return i;var r=t.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(t),u=gi(t,ri)||"0",c,f,h,d,g,_,p,m,S,M,v,R,w,P,D,x,b,N,B,H,J,j,$,et,W,vt,Pt,At,zt,pe,st,xt;return c=f=h=_=p=m=S=M=v=0,d=g=1,i.svg=!!(t.getCTM&&w_(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[je]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[je]!=="none"?l[je]:"")),r.scale=r.rotate=r.translate="none"),P=Hh(t,i.svg),i.svg&&(i.uncache?(W=t.getBBox(),u=i.xOrigin-W.x+"px "+(i.yOrigin-W.y)+"px",et=""):et=!e&&t.getAttribute("data-svg-origin"),pf(t,et||u,!!et||i.originIsAbsolute,i.smooth!==!1,P)),R=i.xOrigin||0,w=i.yOrigin||0,P!==Ya&&(N=P[0],B=P[1],H=P[2],J=P[3],c=j=P[4],f=$=P[5],P.length===6?(d=Math.sqrt(N*N+B*B),g=Math.sqrt(J*J+H*H),_=N||B?Zs(B,N)*Ts:0,S=H||J?Zs(H,J)*Ts+_:0,S&&(g*=Math.abs(Math.cos(S*Po))),i.svg&&(c-=R-(R*N+w*H),f-=w-(R*B+w*J))):(xt=P[6],pe=P[7],Pt=P[8],At=P[9],zt=P[10],st=P[11],c=P[12],f=P[13],h=P[14],D=Zs(xt,zt),p=D*Ts,D&&(x=Math.cos(-D),b=Math.sin(-D),et=j*x+Pt*b,W=$*x+At*b,vt=xt*x+zt*b,Pt=j*-b+Pt*x,At=$*-b+At*x,zt=xt*-b+zt*x,st=pe*-b+st*x,j=et,$=W,xt=vt),D=Zs(-H,zt),m=D*Ts,D&&(x=Math.cos(-D),b=Math.sin(-D),et=N*x-Pt*b,W=B*x-At*b,vt=H*x-zt*b,st=J*b+st*x,N=et,B=W,H=vt),D=Zs(B,N),_=D*Ts,D&&(x=Math.cos(D),b=Math.sin(D),et=N*x+B*b,W=j*x+$*b,B=B*x-N*b,$=$*x-j*b,N=et,j=W),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),d=sn(Math.sqrt(N*N+B*B+H*H)),g=sn(Math.sqrt($*$+xt*xt)),D=Zs(j,$),S=Math.abs(D)>2e-4?D*Ts:0,v=st?1/(st<0?-st:st):0),i.svg&&(et=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!C_(gi(t,je)),et&&t.setAttribute("transform",et))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(d*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),e=e||i.uncache,i.x=c-((i.xPercent=c&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-c)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=sn(d),i.scaleY=sn(g),i.rotation=sn(_)+a,i.rotationX=sn(p)+a,i.rotationY=sn(m)+a,i.skewX=S+a,i.skewY=M+a,i.transformPerspective=v+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!e&&i.zOrigin||0)&&(r[ri]=fc(u)),i.xOffset=i.yOffset=0,i.force3D=vi.force3D,i.renderTransform=i.svg?l1:E_?R_:a1,i.uncache=0,i},fc=function(t){return(t=t.split(" "))[0]+" "+t[1]},iu=function(t,e,i){var r=Un(e);return sn(parseFloat(e)+parseFloat(is(t,"x",i+"px",r)))+r},a1=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,R_(t,e)},_s="0deg",aa="0px",gs=") ",R_=function(t,e){var i=e||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,f=i.rotationX,h=i.skewX,d=i.skewY,g=i.scaleX,_=i.scaleY,p=i.transformPerspective,m=i.force3D,S=i.target,M=i.zOrigin,v="",R=m==="auto"&&t&&t!==1||m===!0;if(M&&(f!==_s||c!==_s)){var w=parseFloat(c)*Po,P=Math.sin(w),D=Math.cos(w),x;w=parseFloat(f)*Po,x=Math.cos(w),o=iu(S,o,P*x*-M),a=iu(S,a,-Math.sin(w)*-M),l=iu(S,l,D*x*-M+M)}p!==aa&&(v+="perspective("+p+gs),(r||s)&&(v+="translate("+r+"%, "+s+"%) "),(R||o!==aa||a!==aa||l!==aa)&&(v+=l!==aa||R?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+gs),u!==_s&&(v+="rotate("+u+gs),c!==_s&&(v+="rotateY("+c+gs),f!==_s&&(v+="rotateX("+f+gs),(h!==_s||d!==_s)&&(v+="skew("+h+", "+d+gs),(g!==1||_!==1)&&(v+="scale("+g+", "+_+gs),S.style[je]=v||"translate(0, 0)"},l1=function(t,e){var i=e||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,f=i.scaleX,h=i.scaleY,d=i.target,g=i.xOrigin,_=i.yOrigin,p=i.xOffset,m=i.yOffset,S=i.forceCSS,M=parseFloat(o),v=parseFloat(a),R,w,P,D,x;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Po,u*=Po,R=Math.cos(l)*f,w=Math.sin(l)*f,P=Math.sin(l-u)*-h,D=Math.cos(l-u)*h,u&&(c*=Po,x=Math.tan(u-c),x=Math.sqrt(1+x*x),P*=x,D*=x,c&&(x=Math.tan(c),x=Math.sqrt(1+x*x),R*=x,w*=x)),R=sn(R),w=sn(w),P=sn(P),D=sn(D)):(R=f,D=h,w=P=0),(M&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(M=is(d,"x",o,"px"),v=is(d,"y",a,"px")),(g||_||p||m)&&(M=sn(M+g-(g*R+_*P)+p),v=sn(v+_-(g*w+_*D)+m)),(r||s)&&(x=d.getBBox(),M=sn(M+r/100*x.width),v=sn(v+s/100*x.height)),x="matrix("+R+","+w+","+P+","+D+","+M+","+v+")",d.setAttribute("transform",x),S&&(d.style[je]=x)},c1=function(t,e,i,r,s){var o=360,a=Sn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Ts:1),u=l-r,c=r+u+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),f==="cw"&&u<0?u=(u+o*lp)%o-~~(u/o)*o:f==="ccw"&&u>0&&(u=(u-o*lp)%o-~~(u/o)*o)),t._pt=h=new ii(t._pt,e,i,r,u,Xx),h.e=c,h.u="deg",t._props.push(i),h},mp=function(t,e){for(var i in e)t[i]=e[i];return t},u1=function(t,e,i){var r=mp({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,f,h,d,g;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[je]=e,a=qa(i,1),ns(i,je),i.setAttribute("transform",u)):(u=getComputedStyle(i)[je],o[je]=e,a=qa(i,1),o[je]=u);for(l in Er)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(d=Un(u),g=Un(c),f=d!==g?is(i,l,u,g):parseFloat(u),h=parseFloat(c),t._pt=new ii(t._pt,a,l,f,h-f,ff),t._pt.u=g||0,t._props.push(l));mp(a,r)};ni("padding,margin,Width,Radius",function(n,t){var e="Top",i="Right",r="Bottom",s="Left",o=(t<3?[e,i,r,s]:[e+s,e+i,r+i,r+s]).map(function(a){return t<2?n+a:"border"+a+n});uc[t>1?"border"+n:n]=function(a,l,u,c,f){var h,d;if(arguments.length<4)return h=o.map(function(g){return pr(a,g,u)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(c+"").split(" "),d={},o.forEach(function(g,_){return d[g]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,d,f)}});var P_={name:"css",register:df,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,r,s){var o=this._props,a=t.style,l=i.vars.startAt,u,c,f,h,d,g,_,p,m,S,M,v,R,w,P,D,x;Bh||df(),this.styles=this.styles||b_(t),D=this.styles.props,this.tween=i;for(_ in e)if(_!=="autoRound"&&(c=e[_],!(fi[_]&&h_(_,e,i,r,t,s)))){if(d=typeof c,g=uc[_],d==="function"&&(c=c.call(i,r,t,s),d=typeof c),d==="string"&&~c.indexOf("random(")&&(c=Ga(c)),g)g(this,t,_,c,i)&&(P=1);else if(_.substr(0,2)==="--")u=(getComputedStyle(t).getPropertyValue(_)+"").trim(),c+="",jr.lastIndex=0,jr.test(u)||(p=Un(u),m=Un(c),m?p!==m&&(u=is(t,_,u,m)+m):p&&(c+=p)),this.add(a,"setProperty",u,c,r,s,0,0,_),o.push(_),D.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(u=typeof l[_]=="function"?l[_].call(i,r,t,s):l[_],Sn(u)&&~u.indexOf("random(")&&(u=Ga(u)),Un(u+"")||u==="auto"||(u+=vi.units[_]||Un(pr(t,_))||""),(u+"").charAt(1)==="="&&(u=pr(t,_))):u=pr(t,_),h=parseFloat(u),S=d==="string"&&c.charAt(1)==="="&&c.substr(0,2),S&&(c=c.substr(2)),f=parseFloat(c),_ in Zi&&(_==="autoAlpha"&&(h===1&&pr(t,"visibility")==="hidden"&&f&&(h=0),D.push("visibility",0,a.visibility),qr(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Zi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in Er,M){if(this.styles.save(_),x=c,d==="string"&&c.substring(0,6)==="var(--"){if(c=gi(t,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var b=t.style.perspective;t.style.perspective=c,c=gi(t,"perspective"),b?t.style.perspective=b:ns(t,"perspective")}f=parseFloat(c)}if(v||(R=t._gsap,R.renderTransform&&!e.parseTransform||qa(t,e.parseTransform),w=e.smoothOrigin!==!1&&R.smooth,v=this._pt=new ii(this._pt,a,je,0,1,R.renderTransform,R,0,-1),v.dep=1),_==="scale")this._pt=new ii(this._pt,R,"scaleY",R.scaleY,(S?Co(R.scaleY,S+f):f)-R.scaleY||0,ff),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){D.push(ri,0,a[ri]),c=s1(c),R.svg?pf(t,c,0,w,0,this):(m=parseFloat(c.split(" ")[2])||0,m!==R.zOrigin&&qr(this,R,"zOrigin",R.zOrigin,m),qr(this,a,_,fc(u),fc(c)));continue}else if(_==="svgOrigin"){pf(t,c,1,w,0,this);continue}else if(_ in A_){c1(this,R,_,h,S?Co(h,S+c):c);continue}else if(_==="smoothOrigin"){qr(this,R,"smooth",R.smooth,c);continue}else if(_==="force3D"){R[_]=c;continue}else if(_==="transform"){u1(this,c,t);continue}}else _ in a||(_=zo(_)||_);if(M||(f||f===0)&&(h||h===0)&&!Wx.test(c)&&_ in a)p=(u+"").substr((h+"").length),f||(f=0),m=Un(c)||(_ in vi.units?vi.units[_]:p),p!==m&&(h=is(t,_,u,m)),this._pt=new ii(this._pt,M?R:a,_,h,(S?Co(h,S+f):f)-h,!M&&(m==="px"||_==="zIndex")&&e.autoRound!==!1?$x:ff),this._pt.u=m||0,M&&x!==c?(this._pt.b=u,this._pt.e=x,this._pt.r=qx):p!==m&&m!=="%"&&(this._pt.b=u,this._pt.r=Yx);else if(_ in a)r1.call(this,t,_,u,S?S+c:c);else if(_ in t)this.add(t,_,u||t[_],S?S+c:c,r,s);else if(_!=="parseTransform"){Ch(_,c);continue}M||(_ in a?D.push(_,0,a[_]):typeof t[_]=="function"?D.push(_,2,t[_]()):D.push(_,1,u||t[_])),o.push(_)}}P&&v_(this)},render:function(t,e){if(e.tween._time||!kh())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:pr,aliases:Zi,getSetter:function(t,e,i){var r=Zi[e];return r&&r.indexOf(",")<0&&(e=r),e in Er&&e!==ri&&(t._gsap.x||pr(t,"x"))?i&&ap===i?e==="scale"?Jx:Zx:(ap=i||{})&&(e==="scale"?Qx:t1):t.style&&!Th(t.style[e])?Kx:~e.indexOf("-")?jx:Oh(t,e)},core:{_removeProperty:ns,_getMatrix:Hh}};si.utils.checkPrefix=zo;si.core.getStyleSaver=b_;(function(n,t,e,i){var r=ni(n+","+t+","+e,function(s){Er[s]=1});ni(t,function(s){vi.units[s]="deg",A_[s]=1}),Zi[r[13]]=n+","+t,ni(i,function(s){var o=s.split(":");Zi[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ni("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){vi.units[n]="px"});si.registerPlugin(P_);var Mt=si.registerPlugin(P_)||si;Mt.core.Tween;const Vh=(n,t)=>{const e=n.__vccOpts||n;for(const[i,r]of t)e[i]=r;return e},f1=["aria-hidden"],h1={class:"nav-toggle-copy"},d1=["onClick"],p1={class:"bubble"},m1={class:"bubble-copy"},_1={class:"bubble-code"},g1={class:"bubble-label"},v1={class:"bubble-description"},y1={class:"bubble-icon"},x1={class:"bubble-index"},M1={__name:"BubbleNav",props:{pages:{type:Array,required:!0},currentPage:{type:String,required:!0}},emits:["page-change"],setup(n){const t=de(!0);let e=null;const i=()=>{e&&(window.clearTimeout(e),e=null)},r=()=>{i(),t.value=!1},s=()=>{i(),e=window.setTimeout(()=>{t.value=!0},900)};return xh(()=>{i()}),(o,a)=>(Yt(),$t("nav",{class:Xe(["bubble-nav",{"is-collapsed":t.value}]),"aria-label":"Section navigation",onMouseenter:r,onMouseleave:s,onFocusin:r,onFocusout:s},[I("div",{class:"nav-toggle","aria-hidden":(!t.value).toString()},[I("span",h1,bt(t.value?"OPEN":"RITE"),1)],8,f1),a[3]||(a[3]=I("div",{class:"nav-shell"},null,-1)),a[4]||(a[4]=I("div",{class:"nav-axis"},[I("span",{class:"axis-label"},"RITUAL INDEX")],-1)),(Yt(!0),$t(Ne,null,In(n.pages,(l,u)=>(Yt(),$t("div",{key:l.id,class:Xe(["bubble-item",{active:n.currentPage===l.id}]),style:di({top:l.position}),onClick:c=>o.$emit("page-change",l.id)},[a[2]||(a[2]=I("div",{class:"item-connector","aria-hidden":"true"},null,-1)),I("div",p1,[a[0]||(a[0]=I("div",{class:"bubble-crest","aria-hidden":"true"},[I("span",{class:"crest-core"}),I("span",{class:"crest-ring"})],-1)),I("div",m1,[I("div",_1,bt(l.code),1),I("div",g1,bt(l.name),1),I("div",v1,bt(l.description),1)]),I("div",y1,bt(l.icon),1),I("div",x1,"0"+bt(u+1),1),a[1]||(a[1]=I("div",{class:"bubble-glow"},null,-1))])],14,d1))),128))],34))}},S1=Vh(M1,[["__scopeId","data-v-b9cacc50"]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gh="171",b1=0,_p=1,E1=2,D_=1,I_=2,ur=3,Tr=0,wn=1,xe=2,Zr=0,Do=1,un=2,gp=3,vp=4,T1=5,Rs=100,w1=101,A1=102,C1=103,R1=104,P1=200,D1=201,I1=202,L1=203,mf=204,_f=205,U1=206,N1=207,O1=208,F1=209,B1=210,k1=211,z1=212,H1=213,V1=214,gf=0,vf=1,yf=2,Ho=3,xf=4,Mf=5,Sf=6,bf=7,L_=0,G1=1,W1=2,Jr=0,X1=1,Y1=2,q1=3,U_=4,$1=5,K1=6,j1=7,N_=300,Vo=301,Go=302,Ef=303,Tf=304,Dc=306,wf=1e3,Ls=1001,Af=1002,ki=1003,Z1=1004,ul=1005,Ji=1006,ru=1007,Us=1008,wr=1009,O_=1010,F_=1011,$a=1012,Wh=1013,Hs=1014,gr=1015,tl=1016,Xh=1017,Yh=1018,Wo=1020,B_=35902,k_=1021,z_=1022,Fi=1023,H_=1024,V_=1025,Io=1026,Xo=1027,G_=1028,qh=1029,W_=1030,$h=1031,Kh=1033,Gl=33776,Wl=33777,Xl=33778,Yl=33779,Cf=35840,Rf=35841,Pf=35842,Df=35843,If=36196,Lf=37492,Uf=37496,Nf=37808,Of=37809,Ff=37810,Bf=37811,kf=37812,zf=37813,Hf=37814,Vf=37815,Gf=37816,Wf=37817,Xf=37818,Yf=37819,qf=37820,$f=37821,ql=36492,Kf=36494,jf=36495,X_=36283,Zf=36284,Jf=36285,Qf=36286,J1=3200,Q1=3201,Y_=0,tM=1,Wr="",hi="srgb",Yo="srgb-linear",hc="linear",Ue="srgb",Js=7680,yp=519,eM=512,nM=513,iM=514,q_=515,rM=516,sM=517,oM=518,aM=519,xp=35044,Mp="300 es",vr=2e3,dc=2001;class $o{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],su=Math.PI/180,th=180/Math.PI;function el(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rn[n&255]+Rn[n>>8&255]+Rn[n>>16&255]+Rn[n>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[e&63|128]+Rn[e>>8&255]+"-"+Rn[e>>16&255]+Rn[e>>24&255]+Rn[i&255]+Rn[i>>8&255]+Rn[i>>16&255]+Rn[i>>24&255]).toLowerCase()}function ve(n,t,e){return Math.max(t,Math.min(e,n))}function lM(n,t){return(n%t+t)%t}function ou(n,t,e){return(1-e)*n+e*t}function la(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function jn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Xt{constructor(t=0,e=0){Xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ve(this.x,t.x,e.x),this.y=ve(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ve(this.x,t,e),this.y=ve(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ve(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ve(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class me{constructor(t,e,i,r,s,o,a,l,u){me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,u)}set(t,e,i,r,s,o,a,l,u){const c=this.elements;return c[0]=t,c[1]=r,c[2]=a,c[3]=e,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],d=i[5],g=i[8],_=r[0],p=r[3],m=r[6],S=r[1],M=r[4],v=r[7],R=r[2],w=r[5],P=r[8];return s[0]=o*_+a*S+l*R,s[3]=o*p+a*M+l*w,s[6]=o*m+a*v+l*P,s[1]=u*_+c*S+f*R,s[4]=u*p+c*M+f*w,s[7]=u*m+c*v+f*P,s[2]=h*_+d*S+g*R,s[5]=h*p+d*M+g*w,s[8]=h*m+d*v+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8];return e*o*c-e*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8],f=c*o-a*u,h=a*l-c*s,d=u*s-o*l,g=e*f+i*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(r*u-c*i)*_,t[2]=(a*i-r*o)*_,t[3]=h*_,t[4]=(c*e-r*l)*_,t[5]=(r*s-a*e)*_,t[6]=d*_,t[7]=(i*l-u*e)*_,t[8]=(o*e-i*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+t,-r*u,r*l,-r*(-u*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(au.makeScale(t,e)),this}rotate(t){return this.premultiply(au.makeRotation(-t)),this}translate(t,e){return this.premultiply(au.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const au=new me;function $_(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function pc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function cM(){const n=pc("canvas");return n.style.display="block",n}const Sp={};function _o(n){n in Sp||(Sp[n]=!0,console.warn(n))}function uM(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function fM(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function hM(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const bp=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ep=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dM(){const n={enabled:!0,workingColorSpace:Yo,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Ue&&(r.r=yr(r.r),r.g=yr(r.g),r.b=yr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ue&&(r.r=Lo(r.r),r.g=Lo(r.g),r.b=Lo(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Wr?hc:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Yo]:{primaries:t,whitePoint:i,transfer:hc,toXYZ:bp,fromXYZ:Ep,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:t,whitePoint:i,transfer:Ue,toXYZ:bp,fromXYZ:Ep,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),n}const Ce=dM();function yr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Lo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Qs;class pM{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Qs===void 0&&(Qs=pc("canvas")),Qs.width=t.width,Qs.height=t.height;const i=Qs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Qs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=pc("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=yr(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(yr(e[i]/255)*255):e[i]=yr(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let mM=0;class K_{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=el(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(lu(r[o].image)):s.push(lu(r[o]))}else s=lu(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function lu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?pM.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _M=0;class Yn extends $o{constructor(t=Yn.DEFAULT_IMAGE,e=Yn.DEFAULT_MAPPING,i=Ls,r=Ls,s=Ji,o=Us,a=Fi,l=wr,u=Yn.DEFAULT_ANISOTROPY,c=Wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=el(),this.name="",this.source=new K_(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==N_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wf:t.x=t.x-Math.floor(t.x);break;case Ls:t.x=t.x<0?0:1;break;case Af:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wf:t.y=t.y-Math.floor(t.y);break;case Ls:t.y=t.y<0?0:1;break;case Af:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=N_;Yn.DEFAULT_ANISOTROPY=1;class Oe{constructor(t=0,e=0,i=0,r=1){Oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,u=l[0],c=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(u+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(u+1)/2,v=(d+1)/2,R=(m+1)/2,w=(c+h)/4,P=(f+_)/4,D=(g+p)/4;return M>v&&M>R?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=w/i,s=P/i):v>R?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=w/r,s=D/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=P/s,r=D/s),this.set(i,r,s,e),this}let S=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(h-c)*(h-c));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(f-_)/S,this.z=(h-c)/S,this.w=Math.acos((u+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ve(this.x,t.x,e.x),this.y=ve(this.y,t.y,e.y),this.z=ve(this.z,t.z,e.z),this.w=ve(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ve(this.x,t,e),this.y=ve(this.y,t,e),this.z=ve(this.z,t,e),this.w=ve(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ve(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gM extends $o{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Oe(0,0,t,e),this.scissorTest=!1,this.viewport=new Oe(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ji,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Yn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new K_(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vs extends gM{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class j_ extends Yn{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=ki,this.minFilter=ki,this.wrapR=Ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class vM extends Yn{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=ki,this.minFilter=ki,this.wrapR=Ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nl{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=u,t[e+2]=c,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(f!==_||l!==h||u!==d||c!==g){let p=1-a;const m=l*h+u*d+c*g+f*_,S=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){const R=Math.sqrt(M),w=Math.atan2(R,m*S);p=Math.sin(p*w)/R,a=Math.sin(a*w)/R}const v=a*S;if(l=l*p+h*v,u=u*p+d*v,c=c*p+g*v,f=f*p+_*v,p===1-a){const R=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=R,u*=R,c*=R,f*=R}}t[e]=l,t[e+1]=u,t[e+2]=c,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+c*f+l*d-u*h,t[e+1]=l*g+c*h+u*f-a*d,t[e+2]=u*g+c*d+a*h-l*f,t[e+3]=c*g-a*f-l*h-u*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),h=l(i/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*d*g,this._y=u*d*f-h*c*g,this._z=u*c*g+h*d*f,this._w=u*c*f-h*d*g;break;case"YXZ":this._x=h*c*f+u*d*g,this._y=u*d*f-h*c*g,this._z=u*c*g-h*d*f,this._w=u*c*f+h*d*g;break;case"ZXY":this._x=h*c*f-u*d*g,this._y=u*d*f+h*c*g,this._z=u*c*g+h*d*f,this._w=u*c*f-h*d*g;break;case"ZYX":this._x=h*c*f-u*d*g,this._y=u*d*f+h*c*g,this._z=u*c*g-h*d*f,this._w=u*c*f+h*d*g;break;case"YZX":this._x=h*c*f+u*d*g,this._y=u*d*f+h*c*g,this._z=u*c*g-h*d*f,this._w=u*c*f-h*d*g;break;case"XZY":this._x=h*c*f-u*d*g,this._y=u*d*f-h*c*g,this._z=u*c*g+h*d*f,this._w=u*c*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],u=e[2],c=e[6],f=e[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(c-l)*d,this._y=(s-u)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(c-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+u)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-u)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+c)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+u)/d,this._y=(l+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,u=e._z,c=e._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-e)*c)/u,h=Math.sin(e*c)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,i=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Tp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Tp.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,u=2*(o*r-a*i),c=2*(a*e-s*r),f=2*(s*i-o*e);return this.x=e+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ve(this.x,t.x,e.x),this.y=ve(this.y,t.y,e.y),this.z=ve(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ve(this.x,t,e),this.y=ve(this.y,t,e),this.z=ve(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ve(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return cu.copy(this).projectOnVector(t),this.sub(cu)}reflect(t){return this.sub(cu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ve(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cu=new O,Tp=new nl;class il{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ii.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ii.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ii.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ii):Ii.fromBufferAttribute(s,o),Ii.applyMatrix4(t.matrixWorld),this.expandByPoint(Ii);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fl.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fl.copy(i.boundingBox)),fl.applyMatrix4(t.matrixWorld),this.union(fl)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ii),Ii.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ca),hl.subVectors(this.max,ca),to.subVectors(t.a,ca),eo.subVectors(t.b,ca),no.subVectors(t.c,ca),Or.subVectors(eo,to),Fr.subVectors(no,eo),vs.subVectors(to,no);let e=[0,-Or.z,Or.y,0,-Fr.z,Fr.y,0,-vs.z,vs.y,Or.z,0,-Or.x,Fr.z,0,-Fr.x,vs.z,0,-vs.x,-Or.y,Or.x,0,-Fr.y,Fr.x,0,-vs.y,vs.x,0];return!uu(e,to,eo,no,hl)||(e=[1,0,0,0,1,0,0,0,1],!uu(e,to,eo,no,hl))?!1:(dl.crossVectors(Or,Fr),e=[dl.x,dl.y,dl.z],uu(e,to,eo,no,hl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ii).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ii).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(sr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const sr=[new O,new O,new O,new O,new O,new O,new O,new O],Ii=new O,fl=new il,to=new O,eo=new O,no=new O,Or=new O,Fr=new O,vs=new O,ca=new O,hl=new O,dl=new O,ys=new O;function uu(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ys.fromArray(n,s);const a=r.x*Math.abs(ys.x)+r.y*Math.abs(ys.y)+r.z*Math.abs(ys.z),l=t.dot(ys),u=e.dot(ys),c=i.dot(ys);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const yM=new il,ua=new O,fu=new O;class Ic{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):yM.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ua.subVectors(t,this.center);const e=ua.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(ua,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ua.copy(t.center).add(fu)),this.expandByPoint(ua.copy(t.center).sub(fu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const or=new O,hu=new O,pl=new O,Br=new O,du=new O,ml=new O,pu=new O;class jh{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,or)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=or.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(or.copy(this.origin).addScaledVector(this.direction,e),or.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){hu.copy(t).add(e).multiplyScalar(.5),pl.copy(e).sub(t).normalize(),Br.copy(this.origin).sub(hu);const s=t.distanceTo(e)*.5,o=-this.direction.dot(pl),a=Br.dot(this.direction),l=-Br.dot(pl),u=Br.lengthSq(),c=Math.abs(1-o*o);let f,h,d,g;if(c>0)if(f=o*l-a,h=o*a-l,g=s*c,f>=0)if(h>=-g)if(h<=g){const _=1/c;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+u;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+u):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(hu).addScaledVector(pl,h),d}intersectSphere(t,e){or.subVectors(t.center,this.origin);const i=or.dot(this.direction),r=or.dot(or)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(t.min.x-h.x)*u,r=(t.max.x-h.x)*u):(i=(t.max.x-h.x)*u,r=(t.min.x-h.x)*u),c>=0?(s=(t.min.y-h.y)*c,o=(t.max.y-h.y)*c):(s=(t.max.y-h.y)*c,o=(t.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,or)!==null}intersectTriangle(t,e,i,r,s){du.subVectors(e,t),ml.subVectors(i,t),pu.crossVectors(du,ml);let o=this.direction.dot(pu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Br.subVectors(this.origin,t);const l=a*this.direction.dot(ml.crossVectors(Br,ml));if(l<0)return null;const u=a*this.direction.dot(du.cross(Br));if(u<0||l+u>o)return null;const c=-a*Br.dot(pu);return c<0?null:this.at(c/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class We{constructor(t,e,i,r,s,o,a,l,u,c,f,h,d,g,_,p){We.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,u,c,f,h,d,g,_,p)}set(t,e,i,r,s,o,a,l,u,c,f,h,d,g,_,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=u,m[6]=c,m[10]=f,m[14]=h,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new We().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/io.setFromMatrixColumn(t,0).length(),s=1/io.setFromMatrixColumn(t,1).length(),o=1/io.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=o*c,d=o*f,g=a*c,_=a*f;e[0]=l*c,e[4]=-l*f,e[8]=u,e[1]=d+g*u,e[5]=h-_*u,e[9]=-a*l,e[2]=_-h*u,e[6]=g+d*u,e[10]=o*l}else if(t.order==="YXZ"){const h=l*c,d=l*f,g=u*c,_=u*f;e[0]=h+_*a,e[4]=g*a-d,e[8]=o*u,e[1]=o*f,e[5]=o*c,e[9]=-a,e[2]=d*a-g,e[6]=_+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*c,d=l*f,g=u*c,_=u*f;e[0]=h-_*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*c,e[9]=_-h*a,e[2]=-o*u,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*c,d=o*f,g=a*c,_=a*f;e[0]=l*c,e[4]=g*u-d,e[8]=h*u+_,e[1]=l*f,e[5]=_*u+h,e[9]=d*u-g,e[2]=-u,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,d=o*u,g=a*l,_=a*u;e[0]=l*c,e[4]=_-h*f,e[8]=g*f+d,e[1]=f,e[5]=o*c,e[9]=-a*c,e[2]=-u*c,e[6]=d*f+g,e[10]=h-_*f}else if(t.order==="XZY"){const h=o*l,d=o*u,g=a*l,_=a*u;e[0]=l*c,e[4]=-f,e[8]=u*c,e[1]=h*f+_,e[5]=o*c,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*c,e[10]=_*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xM,t,MM)}lookAt(t,e,i){const r=this.elements;return li.subVectors(t,e),li.lengthSq()===0&&(li.z=1),li.normalize(),kr.crossVectors(i,li),kr.lengthSq()===0&&(Math.abs(i.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),kr.crossVectors(i,li)),kr.normalize(),_l.crossVectors(li,kr),r[0]=kr.x,r[4]=_l.x,r[8]=li.x,r[1]=kr.y,r[5]=_l.y,r[9]=li.y,r[2]=kr.z,r[6]=_l.z,r[10]=li.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],d=i[13],g=i[2],_=i[6],p=i[10],m=i[14],S=i[3],M=i[7],v=i[11],R=i[15],w=r[0],P=r[4],D=r[8],x=r[12],b=r[1],N=r[5],B=r[9],H=r[13],J=r[2],j=r[6],$=r[10],et=r[14],W=r[3],vt=r[7],Pt=r[11],At=r[15];return s[0]=o*w+a*b+l*J+u*W,s[4]=o*P+a*N+l*j+u*vt,s[8]=o*D+a*B+l*$+u*Pt,s[12]=o*x+a*H+l*et+u*At,s[1]=c*w+f*b+h*J+d*W,s[5]=c*P+f*N+h*j+d*vt,s[9]=c*D+f*B+h*$+d*Pt,s[13]=c*x+f*H+h*et+d*At,s[2]=g*w+_*b+p*J+m*W,s[6]=g*P+_*N+p*j+m*vt,s[10]=g*D+_*B+p*$+m*Pt,s[14]=g*x+_*H+p*et+m*At,s[3]=S*w+M*b+v*J+R*W,s[7]=S*P+M*N+v*j+R*vt,s[11]=S*D+M*B+v*$+R*Pt,s[15]=S*x+M*H+v*et+R*At,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],u=t[13],c=t[2],f=t[6],h=t[10],d=t[14],g=t[3],_=t[7],p=t[11],m=t[15];return g*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*d-i*l*d)+_*(+e*l*d-e*u*h+s*o*h-r*o*d+r*u*c-s*l*c)+p*(+e*u*f-e*a*d-s*o*f+i*o*d+s*a*c-i*u*c)+m*(-r*a*c-e*l*f+e*a*h+r*o*f-i*o*h+i*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8],f=t[9],h=t[10],d=t[11],g=t[12],_=t[13],p=t[14],m=t[15],S=f*p*u-_*h*u+_*l*d-a*p*d-f*l*m+a*h*m,M=g*h*u-c*p*u-g*l*d+o*p*d+c*l*m-o*h*m,v=c*_*u-g*f*u+g*a*d-o*_*d-c*a*m+o*f*m,R=g*f*l-c*_*l-g*a*h+o*_*h+c*a*p-o*f*p,w=e*S+i*M+r*v+s*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/w;return t[0]=S*P,t[1]=(_*h*s-f*p*s-_*r*d+i*p*d+f*r*m-i*h*m)*P,t[2]=(a*p*s-_*l*s+_*r*u-i*p*u-a*r*m+i*l*m)*P,t[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*d-i*l*d)*P,t[4]=M*P,t[5]=(c*p*s-g*h*s+g*r*d-e*p*d-c*r*m+e*h*m)*P,t[6]=(g*l*s-o*p*s-g*r*u+e*p*u+o*r*m-e*l*m)*P,t[7]=(o*h*s-c*l*s+c*r*u-e*h*u-o*r*d+e*l*d)*P,t[8]=v*P,t[9]=(g*f*s-c*_*s-g*i*d+e*_*d+c*i*m-e*f*m)*P,t[10]=(o*_*s-g*a*s+g*i*u-e*_*u-o*i*m+e*a*m)*P,t[11]=(c*a*s-o*f*s-c*i*u+e*f*u+o*i*d-e*a*d)*P,t[12]=R*P,t[13]=(c*_*r-g*f*r+g*i*h-e*_*h-c*i*p+e*f*p)*P,t[14]=(g*a*r-o*_*r-g*i*l+e*_*l+o*i*p-e*a*p)*P,t[15]=(o*f*r-c*a*r+c*i*l-e*f*l-o*i*h+e*a*h)*P,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,u=s+s,c=o+o,f=a+a,h=s*u,d=s*c,g=s*f,_=o*c,p=o*f,m=a*f,S=l*u,M=l*c,v=l*f,R=i.x,w=i.y,P=i.z;return r[0]=(1-(_+m))*R,r[1]=(d+v)*R,r[2]=(g-M)*R,r[3]=0,r[4]=(d-v)*w,r[5]=(1-(h+m))*w,r[6]=(p+S)*w,r[7]=0,r[8]=(g+M)*P,r[9]=(p-S)*P,r[10]=(1-(h+_))*P,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=io.set(r[0],r[1],r[2]).length();const o=io.set(r[4],r[5],r[6]).length(),a=io.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Li.copy(this);const u=1/s,c=1/o,f=1/a;return Li.elements[0]*=u,Li.elements[1]*=u,Li.elements[2]*=u,Li.elements[4]*=c,Li.elements[5]*=c,Li.elements[6]*=c,Li.elements[8]*=f,Li.elements[9]*=f,Li.elements[10]*=f,e.setFromRotationMatrix(Li),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=vr){const l=this.elements,u=2*s/(e-t),c=2*s/(i-r),f=(e+t)/(e-t),h=(i+r)/(i-r);let d,g;if(a===vr)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===dc)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=vr){const l=this.elements,u=1/(e-t),c=1/(i-r),f=1/(o-s),h=(e+t)*u,d=(i+r)*c;let g,_;if(a===vr)g=(o+s)*f,_=-2*f;else if(a===dc)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const io=new O,Li=new We,xM=new O(0,0,0),MM=new O(1,1,1),kr=new O,_l=new O,li=new O,wp=new We,Ap=new nl;class nr{constructor(t=0,e=0,i=0,r=nr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ve(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return wp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wp,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ap.setFromEuler(this),this.setFromQuaternion(Ap,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nr.DEFAULT_ORDER="XYZ";class Zh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let SM=0;const Cp=new O,ro=new nl,ar=new We,gl=new O,fa=new O,bM=new O,EM=new nl,Rp=new O(1,0,0),Pp=new O(0,1,0),Dp=new O(0,0,1),Ip={type:"added"},TM={type:"removed"},so={type:"childadded",child:null},mu={type:"childremoved",child:null};class An extends $o{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:SM++}),this.uuid=el(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const t=new O,e=new nr,i=new nl,r=new O(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new We},normalMatrix:{value:new me}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ro.setFromAxisAngle(t,e),this.quaternion.multiply(ro),this}rotateOnWorldAxis(t,e){return ro.setFromAxisAngle(t,e),this.quaternion.premultiply(ro),this}rotateX(t){return this.rotateOnAxis(Rp,t)}rotateY(t){return this.rotateOnAxis(Pp,t)}rotateZ(t){return this.rotateOnAxis(Dp,t)}translateOnAxis(t,e){return Cp.copy(t).applyQuaternion(this.quaternion),this.position.add(Cp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Rp,t)}translateY(t){return this.translateOnAxis(Pp,t)}translateZ(t){return this.translateOnAxis(Dp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ar.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?gl.copy(t):gl.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ar.lookAt(fa,gl,this.up):ar.lookAt(gl,fa,this.up),this.quaternion.setFromRotationMatrix(ar),r&&(ar.extractRotation(r.matrixWorld),ro.setFromRotationMatrix(ar),this.quaternion.premultiply(ro.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ip),so.child=t,this.dispatchEvent(so),so.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(TM),mu.child=t,this.dispatchEvent(mu),mu.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ar.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ar.multiply(t.parent.matrixWorld)),t.applyMatrix4(ar),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ip),so.child=t,this.dispatchEvent(so),so.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,t,bM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,EM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),u=o(t.textures),c=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}An.DEFAULT_UP=new O(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ui=new O,lr=new O,_u=new O,cr=new O,oo=new O,ao=new O,Lp=new O,gu=new O,vu=new O,yu=new O,xu=new Oe,Mu=new Oe,Su=new Oe;class Oi{constructor(t=new O,e=new O,i=new O){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Ui.subVectors(t,e),r.cross(Ui);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){Ui.subVectors(r,e),lr.subVectors(i,e),_u.subVectors(t,e);const o=Ui.dot(Ui),a=Ui.dot(lr),l=Ui.dot(_u),u=lr.dot(lr),c=lr.dot(_u),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(u*l-a*c)*h,g=(o*c-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,cr)===null?!1:cr.x>=0&&cr.y>=0&&cr.x+cr.y<=1}static getInterpolation(t,e,i,r,s,o,a,l){return this.getBarycoord(t,e,i,r,cr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,cr.x),l.addScaledVector(o,cr.y),l.addScaledVector(a,cr.z),l)}static getInterpolatedAttribute(t,e,i,r,s,o){return xu.setScalar(0),Mu.setScalar(0),Su.setScalar(0),xu.fromBufferAttribute(t,e),Mu.fromBufferAttribute(t,i),Su.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(xu,s.x),o.addScaledVector(Mu,s.y),o.addScaledVector(Su,s.z),o}static isFrontFacing(t,e,i,r){return Ui.subVectors(i,e),lr.subVectors(t,e),Ui.cross(lr).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ui.subVectors(this.c,this.b),lr.subVectors(this.a,this.b),Ui.cross(lr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Oi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Oi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return Oi.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return Oi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Oi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;oo.subVectors(r,i),ao.subVectors(s,i),gu.subVectors(t,i);const l=oo.dot(gu),u=ao.dot(gu);if(l<=0&&u<=0)return e.copy(i);vu.subVectors(t,r);const c=oo.dot(vu),f=ao.dot(vu);if(c>=0&&f<=c)return e.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),e.copy(i).addScaledVector(oo,o);yu.subVectors(t,s);const d=oo.dot(yu),g=ao.dot(yu);if(g>=0&&d<=g)return e.copy(s);const _=d*u-l*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),e.copy(i).addScaledVector(ao,a);const p=c*g-d*f;if(p<=0&&f-c>=0&&d-g>=0)return Lp.subVectors(s,r),a=(f-c)/(f-c+(d-g)),e.copy(r).addScaledVector(Lp,a);const m=1/(p+_+h);return o=_*m,a=h*m,e.copy(i).addScaledVector(oo,o).addScaledVector(ao,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Z_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zr={h:0,s:0,l:0},vl={h:0,s:0,l:0};function bu(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class oe{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=hi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Ce.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ce.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Ce.workingColorSpace){if(t=lM(t,1),e=ve(e,0,1),i=ve(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=bu(o,s,t+1/3),this.g=bu(o,s,t),this.b=bu(o,s,t-1/3)}return Ce.toWorkingColorSpace(this,r),this}setStyle(t,e=hi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=hi){const i=Z_[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yr(t.r),this.g=yr(t.g),this.b=yr(t.b),this}copyLinearToSRGB(t){return this.r=Lo(t.r),this.g=Lo(t.g),this.b=Lo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hi){return Ce.fromWorkingColorSpace(Pn.copy(this),t),Math.round(ve(Pn.r*255,0,255))*65536+Math.round(ve(Pn.g*255,0,255))*256+Math.round(ve(Pn.b*255,0,255))}getHexString(t=hi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ce.workingColorSpace){Ce.fromWorkingColorSpace(Pn.copy(this),e);const i=Pn.r,r=Pn.g,s=Pn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return t.h=l,t.s=u,t.l=c,t}getRGB(t,e=Ce.workingColorSpace){return Ce.fromWorkingColorSpace(Pn.copy(this),e),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=hi){Ce.fromWorkingColorSpace(Pn.copy(this),t);const e=Pn.r,i=Pn.g,r=Pn.b;return t!==hi?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(zr),this.setHSL(zr.h+t,zr.s+e,zr.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(zr),t.getHSL(vl);const i=ou(zr.h,vl.h,e),r=ou(zr.s,vl.s,e),s=ou(zr.l,vl.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new oe;oe.NAMES=Z_;let wM=0;class Ko extends $o{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=el(),this.name="",this.type="Material",this.blending=Do,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mf,this.blendDst=_f,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new oe(0,0,0),this.blendAlpha=0,this.depthFunc=Ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Js,this.stencilZFail=Js,this.stencilZPass=Js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Do&&(i.blending=this.blending),this.side!==Tr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==mf&&(i.blendSrc=this.blendSrc),this.blendDst!==_f&&(i.blendDst=this.blendDst),this.blendEquation!==Rs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ho&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Js&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Js&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Js&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class he extends Ko{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nr,this.combine=L_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const cn=new O,yl=new Xt;class yi{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=xp,this.updateRanges=[],this.gpuType=gr,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)yl.fromBufferAttribute(this,e),yl.applyMatrix3(t),this.setXY(e,yl.x,yl.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)cn.fromBufferAttribute(this,e),cn.applyMatrix3(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)cn.fromBufferAttribute(this,e),cn.applyMatrix4(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)cn.fromBufferAttribute(this,e),cn.applyNormalMatrix(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)cn.fromBufferAttribute(this,e),cn.transformDirection(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=la(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=la(e,this.array)),e}setX(t,e){return this.normalized&&(e=jn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=la(e,this.array)),e}setY(t,e){return this.normalized&&(e=jn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=la(e,this.array)),e}setZ(t,e){return this.normalized&&(e=jn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=la(e,this.array)),e}setW(t,e){return this.normalized&&(e=jn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=jn(e,this.array),i=jn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=jn(e,this.array),i=jn(i,this.array),r=jn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=jn(e,this.array),i=jn(i,this.array),r=jn(r,this.array),s=jn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xp&&(t.usage=this.usage),t}}class J_ extends yi{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Q_ extends yi{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Fe extends yi{constructor(t,e,i){super(new Float32Array(t),e,i)}}let AM=0;const Ei=new We,Eu=new An,lo=new O,ci=new il,ha=new il,xn=new O;class Mn extends $o{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:AM++}),this.uuid=el(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($_(t)?Q_:J_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new me().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ei.makeRotationFromQuaternion(t),this.applyMatrix4(Ei),this}rotateX(t){return Ei.makeRotationX(t),this.applyMatrix4(Ei),this}rotateY(t){return Ei.makeRotationY(t),this.applyMatrix4(Ei),this}rotateZ(t){return Ei.makeRotationZ(t),this.applyMatrix4(Ei),this}translate(t,e,i){return Ei.makeTranslation(t,e,i),this.applyMatrix4(Ei),this}scale(t,e,i){return Ei.makeScale(t,e,i),this.applyMatrix4(Ei),this}lookAt(t){return Eu.lookAt(t),Eu.updateMatrix(),this.applyMatrix4(Eu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lo).negate(),this.translate(lo.x,lo.y,lo.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Fe(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new il);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];ci.setFromBufferAttribute(s),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ic);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const i=this.boundingSphere.center;if(ci.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];ha.setFromBufferAttribute(a),this.morphTargetsRelative?(xn.addVectors(ci.min,ha.min),ci.expandByPoint(xn),xn.addVectors(ci.max,ha.max),ci.expandByPoint(xn)):(ci.expandByPoint(ha.min),ci.expandByPoint(ha.max))}ci.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)xn.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(xn));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)xn.fromBufferAttribute(a,u),l&&(lo.fromBufferAttribute(t,u),xn.add(lo)),r=Math.max(r,i.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new O,l[D]=new O;const u=new O,c=new O,f=new O,h=new Xt,d=new Xt,g=new Xt,_=new O,p=new O;function m(D,x,b){u.fromBufferAttribute(i,D),c.fromBufferAttribute(i,x),f.fromBufferAttribute(i,b),h.fromBufferAttribute(s,D),d.fromBufferAttribute(s,x),g.fromBufferAttribute(s,b),c.sub(u),f.sub(u),d.sub(h),g.sub(h);const N=1/(d.x*g.y-g.x*d.y);isFinite(N)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(N),p.copy(f).multiplyScalar(d.x).addScaledVector(c,-g.x).multiplyScalar(N),a[D].add(_),a[x].add(_),a[b].add(_),l[D].add(p),l[x].add(p),l[b].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let D=0,x=S.length;D<x;++D){const b=S[D],N=b.start,B=b.count;for(let H=N,J=N+B;H<J;H+=3)m(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const M=new O,v=new O,R=new O,w=new O;function P(D){R.fromBufferAttribute(r,D),w.copy(R);const x=a[D];M.copy(x),M.sub(R.multiplyScalar(R.dot(x))).normalize(),v.crossVectors(w,x);const N=v.dot(l[D])<0?-1:1;o.setXYZW(D,M.x,M.y,M.z,N)}for(let D=0,x=S.length;D<x;++D){const b=S[D],N=b.start,B=b.count;for(let H=N,J=N+B;H<J;H+=3)P(t.getX(H+0)),P(t.getX(H+1)),P(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yi(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,u=new O,c=new O,f=new O;if(t)for(let h=0,d=t.count;h<d;h+=3){const g=t.getX(h+0),_=t.getX(h+1),p=t.getX(h+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,p),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let h=0,d=e.count;h<d;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)xn.fromBufferAttribute(t,e),xn.normalize(),t.setXYZ(e,xn.x,xn.y,xn.z)}toNonIndexed(){function t(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let d=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*c;for(let m=0;m<c;m++)h[g++]=u[d++]}return new yi(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Mn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=t(l,i);e.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],d=t(h,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const u=i[l];t.data.attributes[l]=u.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const d=u[f];c.push(d.toJSON(t.data))}c.length>0&&(r[l]=c,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(e))}const s=t.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,d=f.length;h<d;h++)c.push(f[h].clone(e));this.morphAttributes[u]=c}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Up=new We,xs=new jh,xl=new Ic,Np=new O,Ml=new O,Sl=new O,bl=new O,Tu=new O,El=new O,Op=new O,Tl=new O;class te extends An{constructor(t=new Mn,e=new he){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){El.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(Tu.fromBufferAttribute(f,t),o?El.addScaledVector(Tu,c):El.addScaledVector(Tu.sub(e),c))}e.add(El)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xl.copy(i.boundingSphere),xl.applyMatrix4(s),xs.copy(t.ray).recast(t.near),!(xl.containsPoint(xs.origin)===!1&&(xs.intersectSphere(xl,Np)===null||xs.origin.distanceToSquared(Np)>(t.far-t.near)**2))&&(Up.copy(s).invert(),xs.copy(t.ray).applyMatrix4(Up),!(i.boundingBox!==null&&xs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,xs)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=o[p.materialIndex],S=Math.max(p.start,d.start),M=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let v=S,R=M;v<R;v+=3){const w=a.getX(v),P=a.getX(v+1),D=a.getX(v+2);r=wl(this,m,t,i,u,c,f,w,P,D),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const S=a.getX(p),M=a.getX(p+1),v=a.getX(p+2);r=wl(this,o,t,i,u,c,f,S,M,v),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=o[p.materialIndex],S=Math.max(p.start,d.start),M=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let v=S,R=M;v<R;v+=3){const w=v,P=v+1,D=v+2;r=wl(this,m,t,i,u,c,f,w,P,D),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const S=p,M=p+1,v=p+2;r=wl(this,o,t,i,u,c,f,S,M,v),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function CM(n,t,e,i,r,s,o,a){let l;if(t.side===wn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===Tr,a),l===null)return null;Tl.copy(a),Tl.applyMatrix4(n.matrixWorld);const u=e.ray.origin.distanceTo(Tl);return u<e.near||u>e.far?null:{distance:u,point:Tl.clone(),object:n}}function wl(n,t,e,i,r,s,o,a,l,u){n.getVertexPosition(a,Ml),n.getVertexPosition(l,Sl),n.getVertexPosition(u,bl);const c=CM(n,t,e,i,Ml,Sl,bl,Op);if(c){const f=new O;Oi.getBarycoord(Op,Ml,Sl,bl,f),r&&(c.uv=Oi.getInterpolatedAttribute(r,a,l,u,f,new Xt)),s&&(c.uv1=Oi.getInterpolatedAttribute(s,a,l,u,f,new Xt)),o&&(c.normal=Oi.getInterpolatedAttribute(o,a,l,u,f,new O),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new O,materialIndex:0};Oi.getNormal(Ml,Sl,bl,h.normal),c.face=h,c.barycoord=f}return c}class jo extends Mn{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,e,t,o,s,0),g("z","y","x",1,-1,i,e,-t,o,s,1),g("x","z","y",1,1,t,i,e,r,o,2),g("x","z","y",1,-1,t,i,-e,r,o,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Fe(u,3)),this.setAttribute("normal",new Fe(c,3)),this.setAttribute("uv",new Fe(f,2));function g(_,p,m,S,M,v,R,w,P,D,x){const b=v/P,N=R/D,B=v/2,H=R/2,J=w/2,j=P+1,$=D+1;let et=0,W=0;const vt=new O;for(let Pt=0;Pt<$;Pt++){const At=Pt*N-H;for(let zt=0;zt<j;zt++){const pe=zt*b-B;vt[_]=pe*S,vt[p]=At*M,vt[m]=J,u.push(vt.x,vt.y,vt.z),vt[_]=0,vt[p]=0,vt[m]=w>0?1:-1,c.push(vt.x,vt.y,vt.z),f.push(zt/P),f.push(1-Pt/D),et+=1}}for(let Pt=0;Pt<D;Pt++)for(let At=0;At<P;At++){const zt=h+At+j*Pt,pe=h+At+j*(Pt+1),st=h+(At+1)+j*(Pt+1),xt=h+(At+1)+j*Pt;l.push(zt,pe,xt),l.push(pe,st,xt),W+=6}a.addGroup(d,W,x),d+=W,h+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function qo(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Hn(n){const t={};for(let e=0;e<n.length;e++){const i=qo(n[e]);for(const r in i)t[r]=i[r]}return t}function RM(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function tg(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}const PM={clone:qo,merge:Hn};var DM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,IM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rs extends Ko{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=DM,this.fragmentShader=IM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qo(t.uniforms),this.uniformsGroups=RM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class eg extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=vr}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hr=new O,Fp=new Xt,Bp=new Xt;class ti extends eg{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=th*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(su*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return th*2*Math.atan(Math.tan(su*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Hr.x,Hr.y).multiplyScalar(-t/Hr.z),Hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hr.x,Hr.y).multiplyScalar(-t/Hr.z)}getViewSize(t,e){return this.getViewBounds(t,Fp,Bp),e.subVectors(Bp,Fp)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(su*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const co=-90,uo=1;class LM extends An{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ti(co,uo,t,e);r.layers=this.layers,this.add(r);const s=new ti(co,uo,t,e);s.layers=this.layers,this.add(s);const o=new ti(co,uo,t,e);o.layers=this.layers,this.add(o);const a=new ti(co,uo,t,e);a.layers=this.layers,this.add(a);const l=new ti(co,uo,t,e);l.layers=this.layers,this.add(l);const u=new ti(co,uo,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,l]=e;for(const u of e)this.remove(u);if(t===vr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===dc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,u),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,r),t.render(e,c),t.setRenderTarget(f,h,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class ng extends Yn{constructor(t,e,i,r,s,o,a,l,u,c){t=t!==void 0?t:[],e=e!==void 0?e:Vo,super(t,e,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class UM extends Vs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new ng(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ji}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new jo(5,5,5),s=new rs({name:"CubemapFromEquirect",uniforms:qo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wn,blending:Zr});s.uniforms.tEquirect.value=e;const o=new te(r,s),a=e.minFilter;return e.minFilter===Us&&(e.minFilter=Ji),new LM(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}class Jh{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new oe(t),this.density=e}clone(){return new Jh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ig extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nr,this.environmentIntensity=1,this.environmentRotation=new nr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const wu=new O,NM=new O,OM=new me;class ws{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=wu.subVectors(i,e).cross(NM.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(wu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||OM.getNormalMatrix(t),r=this.coplanarPoint(wu).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ms=new Ic,Al=new O;class Qh{constructor(t=new ws,e=new ws,i=new ws,r=new ws,s=new ws,o=new ws){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=vr){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],d=r[8],g=r[9],_=r[10],p=r[11],m=r[12],S=r[13],M=r[14],v=r[15];if(i[0].setComponents(l-s,h-u,p-d,v-m).normalize(),i[1].setComponents(l+s,h+u,p+d,v+m).normalize(),i[2].setComponents(l+o,h+c,p+g,v+S).normalize(),i[3].setComponents(l-o,h-c,p-g,v-S).normalize(),i[4].setComponents(l-a,h-f,p-_,v-M).normalize(),e===vr)i[5].setComponents(l+a,h+f,p+_,v+M).normalize();else if(e===dc)i[5].setComponents(a,f,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ms.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ms.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(t){return Ms.center.set(0,0,0),Ms.radius=.7071067811865476,Ms.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Al.x=r.normal.x>0?t.max.x:t.min.x,Al.y=r.normal.y>0?t.max.y:t.min.y,Al.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Al)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $l extends Ko{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const kp=new We,eh=new jh,Cl=new Ic,Rl=new O;class Pl extends An{constructor(t=new Mn,e=new $l){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Cl.copy(i.boundingSphere),Cl.applyMatrix4(r),Cl.radius+=s,t.ray.intersectsSphere(Cl)===!1)return;kp.copy(r).invert(),eh.copy(t.ray).applyMatrix4(kp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=h,_=d;g<_;g++){const p=u.getX(g);Rl.fromBufferAttribute(f,p),zp(Rl,p,l,r,t,e,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,_=d;g<_;g++)Rl.fromBufferAttribute(f,g),zp(Rl,g,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function zp(n,t,e,i,r,s,o){const a=eh.distanceSqToPoint(n);if(a<e){const l=new O;eh.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class fn extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Hp extends Yn{constructor(t,e,i,r,s,o,a,l,u){super(t,e,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class rg extends Yn{constructor(t,e,i,r,s,o,a,l,u,c=Io){if(c!==Io&&c!==Xo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Io&&(i=Hs),i===void 0&&c===Xo&&(i=Wo),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ki,this.minFilter=l!==void 0?l:ki,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Cr{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),s+=i.distanceTo(r),e.push(s),r=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let r=0;const s=i.length;let o;e?o=e:o=t*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const c=i[r],h=i[r+1]-c,d=(o-c)/h;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new Xt:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new O,r=[],s=[],o=[],a=new O,l=new We;for(let d=0;d<=t;d++){const g=d/t;r[d]=this.getTangentAt(g,new O)}s[0]=new O,o[0]=new O;let u=Number.MAX_VALUE;const c=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),f<=u&&(u=f,i.set(0,1,0)),h<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ve(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos(ve(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class sg extends Cr{constructor(t=0,e=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Xt){const i=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=u-this.aY;l=h*c-d*f+this.aX,u=h*f+d*c+this.aY}return i.set(l,u)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class FM extends sg{constructor(t,e,i,r,s,o){super(t,e,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function td(){let n=0,t=0,e=0,i=0;function r(s,o,a,l){n=s,t=a,e=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,c,f){let h=(o-s)/u-(a-s)/(u+c)+(a-o)/c,d=(a-o)/c-(l-o)/(c+f)+(l-a)/f;h*=c,d*=c,r(o,a,h,d)},calc:function(s){const o=s*s,a=o*s;return n+t*s+e*o+i*a}}}const Dl=new O,Au=new td,Cu=new td,Ru=new td;class nh extends Cr{constructor(t=[],e=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=r}getPoint(t,e=new O){const i=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,c;this.closed||a>0?u=r[(a-1)%s]:(Dl.subVectors(r[0],r[1]).add(r[0]),u=Dl);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?c=r[(a+2)%s]:(Dl.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=Dl),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(u.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(h),d),p=Math.pow(h.distanceToSquared(c),d);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),Au.initNonuniformCatmullRom(u.x,f.x,h.x,c.x,g,_,p),Cu.initNonuniformCatmullRom(u.y,f.y,h.y,c.y,g,_,p),Ru.initNonuniformCatmullRom(u.z,f.z,h.z,c.z,g,_,p)}else this.curveType==="catmullrom"&&(Au.initCatmullRom(u.x,f.x,h.x,c.x,this.tension),Cu.initCatmullRom(u.y,f.y,h.y,c.y,this.tension),Ru.initCatmullRom(u.z,f.z,h.z,c.z,this.tension));return i.set(Au.calc(l),Cu.calc(l),Ru.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new O().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Vp(n,t,e,i,r){const s=(i-t)*.5,o=(r-e)*.5,a=n*n,l=n*a;return(2*e-2*i+s+o)*l+(-3*e+3*i-2*s-o)*a+s*n+e}function BM(n,t){const e=1-n;return e*e*t}function kM(n,t){return 2*(1-n)*n*t}function zM(n,t){return n*n*t}function Pa(n,t,e,i){return BM(n,t)+kM(n,e)+zM(n,i)}function HM(n,t){const e=1-n;return e*e*e*t}function VM(n,t){const e=1-n;return 3*e*e*n*t}function GM(n,t){return 3*(1-n)*n*n*t}function WM(n,t){return n*n*n*t}function Da(n,t,e,i,r){return HM(n,t)+VM(n,e)+GM(n,i)+WM(n,r)}class XM extends Cr{constructor(t=new Xt,e=new Xt,i=new Xt,r=new Xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new Xt){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Da(t,r.x,s.x,o.x,a.x),Da(t,r.y,s.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class YM extends Cr{constructor(t=new O,e=new O,i=new O,r=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new O){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Da(t,r.x,s.x,o.x,a.x),Da(t,r.y,s.y,o.y,a.y),Da(t,r.z,s.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class qM extends Cr{constructor(t=new Xt,e=new Xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Xt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Xt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $M extends Cr{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class KM extends Cr{constructor(t=new Xt,e=new Xt,i=new Xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Xt){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(Pa(t,r.x,s.x,o.x),Pa(t,r.y,s.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class og extends Cr{constructor(t=new O,e=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new O){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(Pa(t,r.x,s.x,o.x),Pa(t,r.y,s.y,o.y),Pa(t,r.z,s.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jM extends Cr{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Xt){const i=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],c=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(Vp(a,l.x,u.x,c.x,f.x),Vp(a,l.y,u.y,c.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new Xt().fromArray(r))}return this}}var ZM=Object.freeze({__proto__:null,ArcCurve:FM,CatmullRomCurve3:nh,CubicBezierCurve:XM,CubicBezierCurve3:YM,EllipseCurve:sg,LineCurve:qM,LineCurve3:$M,QuadraticBezierCurve:KM,QuadraticBezierCurve3:og,SplineCurve:jM});class mc extends Mn{constructor(t=1,e=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:r},e=Math.max(3,e);const s=[],o=[],a=[],l=[],u=new O,c=new Xt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=e;f++,h+=3){const d=i+f/e*r;u.x=t*Math.cos(d),u.y=t*Math.sin(d),o.push(u.x,u.y,u.z),a.push(0,0,1),c.x=(o[h]/t+1)/2,c.y=(o[h+1]/t+1)/2,l.push(c.x,c.y)}for(let f=1;f<=e;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new Fe(o,3)),this.setAttribute("normal",new Fe(a,3)),this.setAttribute("uv",new Fe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ia extends Mn{constructor(t=1,e=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const c=[],f=[],h=[],d=[];let g=0;const _=[],p=i/2;let m=0;S(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(c),this.setAttribute("position",new Fe(f,3)),this.setAttribute("normal",new Fe(h,3)),this.setAttribute("uv",new Fe(d,2));function S(){const v=new O,R=new O;let w=0;const P=(e-t)/i;for(let D=0;D<=s;D++){const x=[],b=D/s,N=b*(e-t)+t;for(let B=0;B<=r;B++){const H=B/r,J=H*l+a,j=Math.sin(J),$=Math.cos(J);R.x=N*j,R.y=-b*i+p,R.z=N*$,f.push(R.x,R.y,R.z),v.set(j,P,$).normalize(),h.push(v.x,v.y,v.z),d.push(H,1-b),x.push(g++)}_.push(x)}for(let D=0;D<r;D++)for(let x=0;x<s;x++){const b=_[x][D],N=_[x+1][D],B=_[x+1][D+1],H=_[x][D+1];(t>0||x!==0)&&(c.push(b,N,H),w+=3),(e>0||x!==s-1)&&(c.push(N,B,H),w+=3)}u.addGroup(m,w,0),m+=w}function M(v){const R=g,w=new Xt,P=new O;let D=0;const x=v===!0?t:e,b=v===!0?1:-1;for(let B=1;B<=r;B++)f.push(0,p*b,0),h.push(0,b,0),d.push(.5,.5),g++;const N=g;for(let B=0;B<=r;B++){const J=B/r*l+a,j=Math.cos(J),$=Math.sin(J);P.x=x*$,P.y=p*b,P.z=x*j,f.push(P.x,P.y,P.z),h.push(0,b,0),w.x=j*.5+.5,w.y=$*.5*b+.5,d.push(w.x,w.y),g++}for(let B=0;B<r;B++){const H=R+B,J=N+B;v===!0?c.push(J,J+1,H):c.push(J+1,J,H),D+=3}u.addGroup(m,D,v===!0?1:2),m+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ia(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ed extends Mn{constructor(t=[],e=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:r};const s=[],o=[];a(r),u(i),c(),this.setAttribute("position",new Fe(s,3)),this.setAttribute("normal",new Fe(s.slice(),3)),this.setAttribute("uv",new Fe(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const M=new O,v=new O,R=new O;for(let w=0;w<e.length;w+=3)d(e[w+0],M),d(e[w+1],v),d(e[w+2],R),l(M,v,R,S)}function l(S,M,v,R){const w=R+1,P=[];for(let D=0;D<=w;D++){P[D]=[];const x=S.clone().lerp(v,D/w),b=M.clone().lerp(v,D/w),N=w-D;for(let B=0;B<=N;B++)B===0&&D===w?P[D][B]=x:P[D][B]=x.clone().lerp(b,B/N)}for(let D=0;D<w;D++)for(let x=0;x<2*(w-D)-1;x++){const b=Math.floor(x/2);x%2===0?(h(P[D][b+1]),h(P[D+1][b]),h(P[D][b])):(h(P[D][b+1]),h(P[D+1][b+1]),h(P[D+1][b]))}}function u(S){const M=new O;for(let v=0;v<s.length;v+=3)M.x=s[v+0],M.y=s[v+1],M.z=s[v+2],M.normalize().multiplyScalar(S),s[v+0]=M.x,s[v+1]=M.y,s[v+2]=M.z}function c(){const S=new O;for(let M=0;M<s.length;M+=3){S.x=s[M+0],S.y=s[M+1],S.z=s[M+2];const v=p(S)/2/Math.PI+.5,R=m(S)/Math.PI+.5;o.push(v,1-R)}g(),f()}function f(){for(let S=0;S<o.length;S+=6){const M=o[S+0],v=o[S+2],R=o[S+4],w=Math.max(M,v,R),P=Math.min(M,v,R);w>.9&&P<.1&&(M<.2&&(o[S+0]+=1),v<.2&&(o[S+2]+=1),R<.2&&(o[S+4]+=1))}}function h(S){s.push(S.x,S.y,S.z)}function d(S,M){const v=S*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function g(){const S=new O,M=new O,v=new O,R=new O,w=new Xt,P=new Xt,D=new Xt;for(let x=0,b=0;x<s.length;x+=9,b+=6){S.set(s[x+0],s[x+1],s[x+2]),M.set(s[x+3],s[x+4],s[x+5]),v.set(s[x+6],s[x+7],s[x+8]),w.set(o[b+0],o[b+1]),P.set(o[b+2],o[b+3]),D.set(o[b+4],o[b+5]),R.copy(S).add(M).add(v).divideScalar(3);const N=p(R);_(w,b+0,S,N),_(P,b+2,M,N),_(D,b+4,v,N)}}function _(S,M,v,R){R<0&&S.x===1&&(o[M]=S.x-1),v.x===0&&v.z===0&&(o[M]=R/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ed(t.vertices,t.indices,t.radius,t.details)}}class yo extends ed{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new yo(t.radius,t.detail)}}class hn extends Mn{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=t/a,h=e/l,d=[],g=[],_=[],p=[];for(let m=0;m<c;m++){const S=m*h-o;for(let M=0;M<u;M++){const v=M*f-s;g.push(v,-S,0),_.push(0,0,1),p.push(M/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){const M=S+u*m,v=S+u*(m+1),R=S+1+u*(m+1),w=S+1+u*m;d.push(M,v,w),d.push(v,R,w)}this.setIndex(d),this.setAttribute("position",new Fe(g,3)),this.setAttribute("normal",new Fe(_,3)),this.setAttribute("uv",new Fe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hn(t.width,t.height,t.widthSegments,t.heightSegments)}}class xo extends Mn{constructor(t=.5,e=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],u=[],c=[];let f=t;const h=(e-t)/r,d=new O,g=new Xt;for(let _=0;_<=r;_++){for(let p=0;p<=i;p++){const m=s+p/i*o;d.x=f*Math.cos(m),d.y=f*Math.sin(m),l.push(d.x,d.y,d.z),u.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,c.push(g.x,g.y)}f+=h}for(let _=0;_<r;_++){const p=_*(i+1);for(let m=0;m<i;m++){const S=m+p,M=S,v=S+i+1,R=S+i+2,w=S+1;a.push(M,v,w),a.push(v,R,w)}}this.setIndex(a),this.setAttribute("position",new Fe(l,3)),this.setAttribute("normal",new Fe(u,3)),this.setAttribute("uv",new Fe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ps extends Mn{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],f=new O,h=new O,d=[],g=[],_=[],p=[];for(let m=0;m<=i;m++){const S=[],M=m/i;let v=0;m===0&&o===0?v=.5/e:m===i&&l===Math.PI&&(v=-.5/e);for(let R=0;R<=e;R++){const w=R/e;f.x=-t*Math.cos(r+w*s)*Math.sin(o+M*a),f.y=t*Math.cos(o+M*a),f.z=t*Math.sin(r+w*s)*Math.sin(o+M*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),p.push(w+v,1-M),S.push(u++)}c.push(S)}for(let m=0;m<i;m++)for(let S=0;S<e;S++){const M=c[m][S+1],v=c[m][S],R=c[m+1][S],w=c[m+1][S+1];(m!==0||o>0)&&d.push(M,v,w),(m!==i-1||l<Math.PI)&&d.push(v,R,w)}this.setIndex(d),this.setAttribute("position",new Fe(g,3)),this.setAttribute("normal",new Fe(_,3)),this.setAttribute("uv",new Fe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ps(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Mo extends Mn{constructor(t=1,e=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],u=[],c=new O,f=new O,h=new O;for(let d=0;d<=i;d++)for(let g=0;g<=r;g++){const _=g/r*s,p=d/i*Math.PI*2;f.x=(t+e*Math.cos(p))*Math.cos(_),f.y=(t+e*Math.cos(p))*Math.sin(_),f.z=e*Math.sin(p),a.push(f.x,f.y,f.z),c.x=t*Math.cos(_),c.y=t*Math.sin(_),h.subVectors(f,c).normalize(),l.push(h.x,h.y,h.z),u.push(g/r),u.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=r;g++){const _=(r+1)*d+g-1,p=(r+1)*(d-1)+g-1,m=(r+1)*(d-1)+g,S=(r+1)*d+g;o.push(_,p,S),o.push(p,m,S)}this.setIndex(o),this.setAttribute("position",new Fe(a,3)),this.setAttribute("normal",new Fe(l,3)),this.setAttribute("uv",new Fe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mo(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class _c extends Mn{constructor(t=new og(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),e=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:r,closed:s};const o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new O,l=new O,u=new Xt;let c=new O;const f=[],h=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Fe(f,3)),this.setAttribute("normal",new Fe(h,3)),this.setAttribute("uv",new Fe(d,2));function _(){for(let M=0;M<e;M++)p(M);p(s===!1?e:0),S(),m()}function p(M){c=t.getPointAt(M/e,c);const v=o.normals[M],R=o.binormals[M];for(let w=0;w<=r;w++){const P=w/r*Math.PI*2,D=Math.sin(P),x=-Math.cos(P);l.x=x*v.x+D*R.x,l.y=x*v.y+D*R.y,l.z=x*v.z+D*R.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=c.x+i*l.x,a.y=c.y+i*l.y,a.z=c.z+i*l.z,f.push(a.x,a.y,a.z)}}function m(){for(let M=1;M<=e;M++)for(let v=1;v<=r;v++){const R=(r+1)*(M-1)+(v-1),w=(r+1)*M+(v-1),P=(r+1)*M+v,D=(r+1)*(M-1)+v;g.push(R,w,D),g.push(w,P,D)}}function S(){for(let M=0;M<=e;M++)for(let v=0;v<=r;v++)u.x=M/e,u.y=v/r,d.push(u.x,u.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new _c(new ZM[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Pu extends Ko{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Y_,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class JM extends Ko{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=J1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class QM extends Ko{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class nd extends An{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new oe(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Du=new We,Gp=new O,Wp=new O;class ag{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qh,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Gp.setFromMatrixPosition(t.matrixWorld),e.position.copy(Gp),Wp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Wp),e.updateMatrixWorld(),Du.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Du),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Du)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Xp=new We,da=new O,Iu=new O;class tS extends ag{constructor(){super(new ti(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xt(4,2),this._viewportCount=6,this._viewports=[new Oe(2,1,1,1),new Oe(0,1,1,1),new Oe(3,1,1,1),new Oe(1,1,1,1),new Oe(3,0,1,1),new Oe(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,r=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),da.setFromMatrixPosition(t.matrixWorld),i.position.copy(da),Iu.copy(i.position),Iu.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Iu),i.updateMatrixWorld(),r.makeTranslation(-da.x,-da.y,-da.z),Xp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xp)}}class Lu extends nd{constructor(t,e,i=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new tS}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class lg extends eg{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class eS extends ag{constructor(){super(new lg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yp extends nd{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new eS}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class nS extends nd{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class iS extends ti{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class rS{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=qp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=qp();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function qp(){return performance.now()}const $p=new We;class cg{constructor(t,e,i=0,r=1/0){this.ray=new jh(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new Zh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return $p.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($p),this}intersectObject(t,e=!0,i=[]){return ih(t,this,i,e),i.sort(Kp),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)ih(t[r],this,i,e);return i.sort(Kp),i}}function Kp(n,t){return n.distance-t.distance}function ih(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)ih(s[o],t,e,!0)}}function jp(n,t,e,i){const r=sS(i);switch(e){case k_:return n*t;case H_:return n*t;case V_:return n*t*2;case G_:return n*t/r.components*r.byteLength;case qh:return n*t/r.components*r.byteLength;case W_:return n*t*2/r.components*r.byteLength;case $h:return n*t*2/r.components*r.byteLength;case z_:return n*t*3/r.components*r.byteLength;case Fi:return n*t*4/r.components*r.byteLength;case Kh:return n*t*4/r.components*r.byteLength;case Gl:case Wl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Xl:case Yl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Rf:case Df:return Math.max(n,16)*Math.max(t,8)/4;case Cf:case Pf:return Math.max(n,8)*Math.max(t,8)/2;case If:case Lf:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Uf:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Nf:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Of:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ff:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Bf:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case kf:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case zf:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Hf:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Vf:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Gf:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Wf:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Xf:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Yf:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case qf:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case $f:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ql:case Kf:case jf:return Math.ceil(n/4)*Math.ceil(t/4)*16;case X_:case Zf:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Jf:case Qf:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function sS(n){switch(n){case wr:case O_:return{byteLength:1,components:1};case $a:case F_:case tl:return{byteLength:2,components:1};case Xh:case Yh:return{byteLength:2,components:4};case Hs:case Wh:case gr:return{byteLength:4,components:1};case B_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gh);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ug(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function oS(n){const t=new WeakMap;function e(a,l){const u=a.array,c=a.usage,f=u.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,u,c),a.onUploadCallback();let d;if(u instanceof Float32Array)d=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)d=n.SHORT;else if(u instanceof Uint32Array)d=n.UNSIGNED_INT;else if(u instanceof Int32Array)d=n.INT;else if(u instanceof Int8Array)d=n.BYTE;else if(u instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:d,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l.updateRanges;if(n.bindBuffer(u,a),f.length===0)n.bufferSubData(u,0,c);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];n.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=t.get(a);if(u===void 0)t.set(a,e(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var aS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lS=`#ifdef USE_ALPHAHASH
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
#endif`,cS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dS=`#ifdef USE_AOMAP
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
#endif`,pS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mS=`#ifdef USE_BATCHING
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
#endif`,_S=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vS=`vec3 objectNormal = vec3( normal );
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
} // validated`,xS=`#ifdef USE_IRIDESCENCE
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
#endif`,MS=`#ifdef USE_BUMPMAP
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
#endif`,SS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ES=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,TS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,AS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,CS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,RS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,PS=`#define PI 3.141592653589793
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
} // validated`,DS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,IS=`vec3 transformedNormal = objectNormal;
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
#endif`,LS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,US=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,NS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,FS="gl_FragColor = linearToOutputTexel( gl_FragColor );",BS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kS=`#ifdef USE_ENVMAP
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
#endif`,zS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,HS=`#ifdef USE_ENVMAP
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
#endif`,VS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,GS=`#ifdef USE_ENVMAP
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
#endif`,WS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,XS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,YS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$S=`#ifdef USE_GRADIENTMAP
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
}`,KS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ZS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JS=`uniform bool receiveShadow;
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
#endif`,QS=`#ifdef USE_ENVMAP
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
#endif`,tb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ib=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rb=`PhysicalMaterial material;
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
#endif`,sb=`struct PhysicalMaterial {
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
}`,ob=`
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
#endif`,ab=`#if defined( RE_IndirectDiffuse )
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
#endif`,lb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ub=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,db=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_b=`#if defined( USE_POINTS_UV )
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
#endif`,gb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sb=`#ifdef USE_MORPHTARGETS
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
#endif`,bb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Eb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ab=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rb=`#ifdef USE_NORMALMAP
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
#endif`,Pb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Db=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ib=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ub=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ob=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xb=`float getShadowMask() {
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
}`,Yb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qb=`#ifdef USE_SKINNING
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
#endif`,$b=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kb=`#ifdef USE_SKINNING
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
#endif`,jb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tE=`#ifdef USE_TRANSMISSION
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
#endif`,eE=`#ifdef USE_TRANSMISSION
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
#endif`,nE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aE=`uniform sampler2D t2D;
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
}`,lE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,uE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hE=`#include <common>
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
}`,dE=`#if DEPTH_PACKING == 3200
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
}`,pE=`#define DISTANCE
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
}`,mE=`#define DISTANCE
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
}`,_E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vE=`uniform float scale;
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
}`,yE=`uniform vec3 diffuse;
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
}`,xE=`#include <common>
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
}`,ME=`uniform vec3 diffuse;
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
}`,SE=`#define LAMBERT
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
}`,bE=`#define LAMBERT
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
}`,EE=`#define MATCAP
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
}`,TE=`#define MATCAP
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
}`,wE=`#define NORMAL
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
}`,AE=`#define NORMAL
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
}`,CE=`#define PHONG
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
}`,RE=`#define PHONG
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
}`,PE=`#define STANDARD
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
}`,DE=`#define STANDARD
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
}`,IE=`#define TOON
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
}`,LE=`#define TOON
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
}`,UE=`uniform float size;
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
}`,NE=`uniform vec3 diffuse;
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
}`,OE=`#include <common>
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
}`,FE=`uniform vec3 color;
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
}`,BE=`uniform float rotation;
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
}`,kE=`uniform vec3 diffuse;
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
}`,_e={alphahash_fragment:aS,alphahash_pars_fragment:lS,alphamap_fragment:cS,alphamap_pars_fragment:uS,alphatest_fragment:fS,alphatest_pars_fragment:hS,aomap_fragment:dS,aomap_pars_fragment:pS,batching_pars_vertex:mS,batching_vertex:_S,begin_vertex:gS,beginnormal_vertex:vS,bsdfs:yS,iridescence_fragment:xS,bumpmap_pars_fragment:MS,clipping_planes_fragment:SS,clipping_planes_pars_fragment:bS,clipping_planes_pars_vertex:ES,clipping_planes_vertex:TS,color_fragment:wS,color_pars_fragment:AS,color_pars_vertex:CS,color_vertex:RS,common:PS,cube_uv_reflection_fragment:DS,defaultnormal_vertex:IS,displacementmap_pars_vertex:LS,displacementmap_vertex:US,emissivemap_fragment:NS,emissivemap_pars_fragment:OS,colorspace_fragment:FS,colorspace_pars_fragment:BS,envmap_fragment:kS,envmap_common_pars_fragment:zS,envmap_pars_fragment:HS,envmap_pars_vertex:VS,envmap_physical_pars_fragment:QS,envmap_vertex:GS,fog_vertex:WS,fog_pars_vertex:XS,fog_fragment:YS,fog_pars_fragment:qS,gradientmap_pars_fragment:$S,lightmap_pars_fragment:KS,lights_lambert_fragment:jS,lights_lambert_pars_fragment:ZS,lights_pars_begin:JS,lights_toon_fragment:tb,lights_toon_pars_fragment:eb,lights_phong_fragment:nb,lights_phong_pars_fragment:ib,lights_physical_fragment:rb,lights_physical_pars_fragment:sb,lights_fragment_begin:ob,lights_fragment_maps:ab,lights_fragment_end:lb,logdepthbuf_fragment:cb,logdepthbuf_pars_fragment:ub,logdepthbuf_pars_vertex:fb,logdepthbuf_vertex:hb,map_fragment:db,map_pars_fragment:pb,map_particle_fragment:mb,map_particle_pars_fragment:_b,metalnessmap_fragment:gb,metalnessmap_pars_fragment:vb,morphinstance_vertex:yb,morphcolor_vertex:xb,morphnormal_vertex:Mb,morphtarget_pars_vertex:Sb,morphtarget_vertex:bb,normal_fragment_begin:Eb,normal_fragment_maps:Tb,normal_pars_fragment:wb,normal_pars_vertex:Ab,normal_vertex:Cb,normalmap_pars_fragment:Rb,clearcoat_normal_fragment_begin:Pb,clearcoat_normal_fragment_maps:Db,clearcoat_pars_fragment:Ib,iridescence_pars_fragment:Lb,opaque_fragment:Ub,packing:Nb,premultiplied_alpha_fragment:Ob,project_vertex:Fb,dithering_fragment:Bb,dithering_pars_fragment:kb,roughnessmap_fragment:zb,roughnessmap_pars_fragment:Hb,shadowmap_pars_fragment:Vb,shadowmap_pars_vertex:Gb,shadowmap_vertex:Wb,shadowmask_pars_fragment:Xb,skinbase_vertex:Yb,skinning_pars_vertex:qb,skinning_vertex:$b,skinnormal_vertex:Kb,specularmap_fragment:jb,specularmap_pars_fragment:Zb,tonemapping_fragment:Jb,tonemapping_pars_fragment:Qb,transmission_fragment:tE,transmission_pars_fragment:eE,uv_pars_fragment:nE,uv_pars_vertex:iE,uv_vertex:rE,worldpos_vertex:sE,background_vert:oE,background_frag:aE,backgroundCube_vert:lE,backgroundCube_frag:cE,cube_vert:uE,cube_frag:fE,depth_vert:hE,depth_frag:dE,distanceRGBA_vert:pE,distanceRGBA_frag:mE,equirect_vert:_E,equirect_frag:gE,linedashed_vert:vE,linedashed_frag:yE,meshbasic_vert:xE,meshbasic_frag:ME,meshlambert_vert:SE,meshlambert_frag:bE,meshmatcap_vert:EE,meshmatcap_frag:TE,meshnormal_vert:wE,meshnormal_frag:AE,meshphong_vert:CE,meshphong_frag:RE,meshphysical_vert:PE,meshphysical_frag:DE,meshtoon_vert:IE,meshtoon_frag:LE,points_vert:UE,points_frag:NE,shadow_vert:OE,shadow_frag:FE,sprite_vert:BE,sprite_frag:kE},Ut={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},Ki={basic:{uniforms:Hn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:Hn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new oe(0)}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:Hn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:Hn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:Hn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new oe(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:Hn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:Hn([Ut.points,Ut.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:Hn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:Hn([Ut.common,Ut.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:Hn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:Hn([Ut.sprite,Ut.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distanceRGBA:{uniforms:Hn([Ut.common,Ut.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distanceRGBA_vert,fragmentShader:_e.distanceRGBA_frag},shadow:{uniforms:Hn([Ut.lights,Ut.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};Ki.physical={uniforms:Hn([Ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};const Il={r:0,b:0,g:0},Ss=new nr,zE=new We;function HE(n,t,e,i,r,s,o){const a=new oe(0);let l=s===!0?0:1,u,c,f=null,h=0,d=null;function g(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function _(M){let v=!1;const R=g(M);R===null?m(a,l):R&&R.isColor&&(m(R,1),v=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(M,v){const R=g(v);R&&(R.isCubeTexture||R.mapping===Dc)?(c===void 0&&(c=new te(new jo(1,1,1),new rs({name:"BackgroundCubeMaterial",uniforms:qo(Ki.backgroundCube.uniforms),vertexShader:Ki.backgroundCube.vertexShader,fragmentShader:Ki.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Ss.copy(v.backgroundRotation),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),c.material.uniforms.envMap.value=R,c.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(zE.makeRotationFromEuler(Ss)),c.material.toneMapped=Ce.getTransfer(R.colorSpace)!==Ue,(f!==R||h!==R.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=R,h=R.version,d=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):R&&R.isTexture&&(u===void 0&&(u=new te(new hn(2,2),new rs({name:"BackgroundMaterial",uniforms:qo(Ki.background.uniforms),vertexShader:Ki.background.vertexShader,fragmentShader:Ki.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=R,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=Ce.getTransfer(R.colorSpace)!==Ue,R.matrixAutoUpdate===!0&&R.updateMatrix(),u.material.uniforms.uvTransform.value.copy(R.matrix),(f!==R||h!==R.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=R,h=R.version,d=n.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null))}function m(M,v){M.getRGB(Il,tg(n)),i.buffers.color.setClear(Il.r,Il.g,Il.b,v,o)}function S(){c!==void 0&&(c.geometry.dispose(),c.material.dispose()),u!==void 0&&(u.geometry.dispose(),u.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(a,l)},render:_,addToRenderList:p,dispose:S}}function VE(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(b,N,B,H,J){let j=!1;const $=f(H,B,N);s!==$&&(s=$,u(s.object)),j=d(b,H,B,J),j&&g(b,H,B,J),J!==null&&t.update(J,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,v(b,N,B,H),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function l(){return n.createVertexArray()}function u(b){return n.bindVertexArray(b)}function c(b){return n.deleteVertexArray(b)}function f(b,N,B){const H=B.wireframe===!0;let J=i[b.id];J===void 0&&(J={},i[b.id]=J);let j=J[N.id];j===void 0&&(j={},J[N.id]=j);let $=j[H];return $===void 0&&($=h(l()),j[H]=$),$}function h(b){const N=[],B=[],H=[];for(let J=0;J<e;J++)N[J]=0,B[J]=0,H[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:B,attributeDivisors:H,object:b,attributes:{},index:null}}function d(b,N,B,H){const J=s.attributes,j=N.attributes;let $=0;const et=B.getAttributes();for(const W in et)if(et[W].location>=0){const Pt=J[W];let At=j[W];if(At===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(At=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(At=b.instanceColor)),Pt===void 0||Pt.attribute!==At||At&&Pt.data!==At.data)return!0;$++}return s.attributesNum!==$||s.index!==H}function g(b,N,B,H){const J={},j=N.attributes;let $=0;const et=B.getAttributes();for(const W in et)if(et[W].location>=0){let Pt=j[W];Pt===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(Pt=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(Pt=b.instanceColor));const At={};At.attribute=Pt,Pt&&Pt.data&&(At.data=Pt.data),J[W]=At,$++}s.attributes=J,s.attributesNum=$,s.index=H}function _(){const b=s.newAttributes;for(let N=0,B=b.length;N<B;N++)b[N]=0}function p(b){m(b,0)}function m(b,N){const B=s.newAttributes,H=s.enabledAttributes,J=s.attributeDivisors;B[b]=1,H[b]===0&&(n.enableVertexAttribArray(b),H[b]=1),J[b]!==N&&(n.vertexAttribDivisor(b,N),J[b]=N)}function S(){const b=s.newAttributes,N=s.enabledAttributes;for(let B=0,H=N.length;B<H;B++)N[B]!==b[B]&&(n.disableVertexAttribArray(B),N[B]=0)}function M(b,N,B,H,J,j,$){$===!0?n.vertexAttribIPointer(b,N,B,J,j):n.vertexAttribPointer(b,N,B,H,J,j)}function v(b,N,B,H){_();const J=H.attributes,j=B.getAttributes(),$=N.defaultAttributeValues;for(const et in j){const W=j[et];if(W.location>=0){let vt=J[et];if(vt===void 0&&(et==="instanceMatrix"&&b.instanceMatrix&&(vt=b.instanceMatrix),et==="instanceColor"&&b.instanceColor&&(vt=b.instanceColor)),vt!==void 0){const Pt=vt.normalized,At=vt.itemSize,zt=t.get(vt);if(zt===void 0)continue;const pe=zt.buffer,st=zt.type,xt=zt.bytesPerElement,Ft=st===n.INT||st===n.UNSIGNED_INT||vt.gpuType===Wh;if(vt.isInterleavedBufferAttribute){const ct=vt.data,Vt=ct.stride,Kt=vt.offset;if(ct.isInstancedInterleavedBuffer){for(let Gt=0;Gt<W.locationSize;Gt++)m(W.location+Gt,ct.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Gt=0;Gt<W.locationSize;Gt++)p(W.location+Gt);n.bindBuffer(n.ARRAY_BUFFER,pe);for(let Gt=0;Gt<W.locationSize;Gt++)M(W.location+Gt,At/W.locationSize,st,Pt,Vt*xt,(Kt+At/W.locationSize*Gt)*xt,Ft)}else{if(vt.isInstancedBufferAttribute){for(let ct=0;ct<W.locationSize;ct++)m(W.location+ct,vt.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let ct=0;ct<W.locationSize;ct++)p(W.location+ct);n.bindBuffer(n.ARRAY_BUFFER,pe);for(let ct=0;ct<W.locationSize;ct++)M(W.location+ct,At/W.locationSize,st,Pt,At*xt,At/W.locationSize*ct*xt,Ft)}}else if($!==void 0){const Pt=$[et];if(Pt!==void 0)switch(Pt.length){case 2:n.vertexAttrib2fv(W.location,Pt);break;case 3:n.vertexAttrib3fv(W.location,Pt);break;case 4:n.vertexAttrib4fv(W.location,Pt);break;default:n.vertexAttrib1fv(W.location,Pt)}}}}S()}function R(){D();for(const b in i){const N=i[b];for(const B in N){const H=N[B];for(const J in H)c(H[J].object),delete H[J];delete N[B]}delete i[b]}}function w(b){if(i[b.id]===void 0)return;const N=i[b.id];for(const B in N){const H=N[B];for(const J in H)c(H[J].object),delete H[J];delete N[B]}delete i[b.id]}function P(b){for(const N in i){const B=i[N];if(B[b.id]===void 0)continue;const H=B[b.id];for(const J in H)c(H[J].object),delete H[J];delete B[b.id]}}function D(){x(),o=!0,s!==r&&(s=r,u(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:x,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:p,disableUnusedAttributes:S}}function GE(n,t,e){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),e.update(c,i,1)}function o(u,c,f){f!==0&&(n.drawArraysInstanced(i,u,c,f),e.update(c,i,f))}function a(u,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let d=0;for(let g=0;g<f;g++)d+=c[g];e.update(d,i,1)}function l(u,c,f,h){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<u.length;g++)o(u[g],c[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(i,u,0,c,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=c[_]*h[_];e.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function WE(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==Fi&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const D=P===tl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==wr&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==gr&&!D)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:R,maxSamples:w}}function XE(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new ws,a=new me,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=c(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,m=n.get(f);if(!r||g===null||g.length===0||s&&!p)s?c(null):u();else{const S=s?0:i,M=S*4;let v=m.clippingState||null;l.value=v,v=c(g,h,M,d);for(let R=0;R!==M;++R)v[R]=e[R];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(f,h,d,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=d+_*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,v=d;M!==_;++M,v+=4)o.copy(f[M]).applyMatrix4(S,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function YE(n){let t=new WeakMap;function e(o,a){return a===Ef?o.mapping=Vo:a===Tf&&(o.mapping=Go),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ef||a===Tf)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new UM(l.height);return u.fromEquirectangularTexture(n,o),t.set(o,u),o.addEventListener("dispose",r),e(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const So=4,Zp=[.125,.215,.35,.446,.526,.582],Ds=20,Uu=new lg,Jp=new oe;let Nu=null,Ou=0,Fu=0,Bu=!1;const As=(1+Math.sqrt(5))/2,fo=1/As,Qp=[new O(-As,fo,0),new O(As,fo,0),new O(-fo,0,As),new O(fo,0,As),new O(0,As,-fo),new O(0,As,fo),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class tm{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){Nu=this._renderer.getRenderTarget(),Ou=this._renderer.getActiveCubeFace(),Fu=this._renderer.getActiveMipmapLevel(),Bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=im(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Nu,Ou,Fu),this._renderer.xr.enabled=Bu,t.scissorTest=!1,Ll(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vo||t.mapping===Go?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Nu=this._renderer.getRenderTarget(),Ou=this._renderer.getActiveCubeFace(),Fu=this._renderer.getActiveMipmapLevel(),Bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ji,minFilter:Ji,generateMipmaps:!1,type:tl,format:Fi,colorSpace:Yo,depthBuffer:!1},r=em(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=em(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qE(s)),this._blurMaterial=$E(s,t,e)}return r}_compileMaterial(t){const e=new te(this._lodPlanes[0],t);this._renderer.compile(e,Uu)}_sceneToCubeUV(t,e,i,r){const a=new ti(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(Jp),c.toneMapping=Jr,c.autoClear=!1;const d=new he({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1}),g=new te(new jo,d);let _=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,_=!0):(d.color.copy(Jp),_=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(a.up.set(0,l[m],0),a.lookAt(u[m],0,0)):S===1?(a.up.set(0,0,l[m]),a.lookAt(0,u[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,u[m]));const M=this._cubeSize;Ll(r,S*M,m>2?M:0,M,M),c.setRenderTarget(r),_&&c.render(g,a),c.render(t,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=h,c.autoClear=f,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Vo||t.mapping===Go;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=im()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new te(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Ll(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Uu)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Qp[(r-s-1)%Qp.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new te(this._lodPlanes[r],u),h=u.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ds-1),_=s/g,p=isFinite(s)?1+Math.floor(c*_):Ds;p>Ds&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ds}`);const m=[];let S=0;for(let P=0;P<Ds;++P){const D=P/_,x=Math.exp(-D*D/2);m.push(x),P===0?S+=x:P<p&&(S+=2*x)}for(let P=0;P<m.length;P++)m[P]=m[P]/S;h.envMap.value=t.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-i;const v=this._sizeLods[r],R=3*v*(r>M-So?r-M+So:0),w=4*(this._cubeSize-v);Ll(e,R,w,3*v,2*v),l.setRenderTarget(e),l.render(f,Uu)}}function qE(n){const t=[],e=[],i=[];let r=n;const s=n-So+1+Zp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-So?l=Zp[o-n+So-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],d=6,g=6,_=3,p=2,m=1,S=new Float32Array(_*g*d),M=new Float32Array(p*g*d),v=new Float32Array(m*g*d);for(let w=0;w<d;w++){const P=w%3*2/3-1,D=w>2?0:-1,x=[P,D,0,P+2/3,D,0,P+2/3,D+1,0,P,D,0,P+2/3,D+1,0,P,D+1,0];S.set(x,_*g*w),M.set(h,p*g*w);const b=[w,w,w,w,w,w];v.set(b,m*g*w)}const R=new Mn;R.setAttribute("position",new yi(S,_)),R.setAttribute("uv",new yi(M,p)),R.setAttribute("faceIndex",new yi(v,m)),t.push(R),r>So&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function em(n,t,e){const i=new Vs(n,t,e);return i.texture.mapping=Dc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ll(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function $E(n,t,e){const i=new Float32Array(Ds),r=new O(0,1,0);return new rs({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:id(),fragmentShader:`

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
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function nm(){return new rs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:id(),fragmentShader:`

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
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function im(){return new rs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function id(){return`

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
	`}function KE(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Ef||l===Tf,c=l===Vo||l===Go;if(u||c){let f=t.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new tm(n)),f=u?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return u&&d&&d.height>0||c&&d&&r(d)?(e===null&&(e=new tm(n)),f=u?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function jE(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&_o("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ZE(n,t,e,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(t.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)t.update(h[d],n.ARRAY_BUFFER)}function u(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const S=d.array;_=d.version;for(let M=0,v=S.length;M<v;M+=3){const R=S[M+0],w=S[M+1],P=S[M+2];h.push(R,w,w,P,P,R)}}else if(g!==void 0){const S=g.array;_=g.version;for(let M=0,v=S.length/3-1;M<v;M+=3){const R=M+0,w=M+1,P=M+2;h.push(R,w,w,P,P,R)}}else return;const p=new($_(h)?Q_:J_)(h,1);p.version=_;const m=s.get(f);m&&t.remove(m),s.set(f,p)}function c(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function JE(n,t,e){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,s,h*o),e.update(d,i,1)}function u(h,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,h*o,g),e.update(d,i,g))}function c(h,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];e.update(p,i,1)}function f(h,d,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<h.length;m++)u(h[m]/o,d[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,_,0,g);let m=0;for(let S=0;S<g;S++)m+=d[S]*_[S];e.update(m,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function QE(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function tT(n,t,e){const i=new WeakMap,r=new Oe;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let b=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",b)};var d=b;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),p===!0&&(v=3);let R=a.attributes.position.count*v,w=1;R>t.maxTextureSize&&(w=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const P=new Float32Array(R*w*4*f),D=new j_(P,R,w,f);D.type=gr,D.needsUpdate=!0;const x=v*4;for(let N=0;N<f;N++){const B=m[N],H=S[N],J=M[N],j=R*w*4*N;for(let $=0;$<B.count;$++){const et=$*x;g===!0&&(r.fromBufferAttribute(B,$),P[j+et+0]=r.x,P[j+et+1]=r.y,P[j+et+2]=r.z,P[j+et+3]=0),_===!0&&(r.fromBufferAttribute(H,$),P[j+et+4]=r.x,P[j+et+5]=r.y,P[j+et+6]=r.z,P[j+et+7]=0),p===!0&&(r.fromBufferAttribute(J,$),P[j+et+8]=r.x,P[j+et+9]=r.y,P[j+et+10]=r.z,P[j+et+11]=J.itemSize===4?r.w:1)}}h={count:f,texture:D,size:new Xt(R,w)},i.set(a,h),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<u.length;p++)g+=u[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function eT(n,t,e,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=t.get(l,c);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:s,dispose:o}}const fg=new Yn,rm=new rg(1,1),hg=new j_,dg=new vM,pg=new ng,sm=[],om=[],am=new Float32Array(16),lm=new Float32Array(9),cm=new Float32Array(4);function Zo(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=sm[r];if(s===void 0&&(s=new Float32Array(r),sm[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function vn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function yn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Lc(n,t){let e=om[t];e===void 0&&(e=new Int32Array(t),om[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function nT(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function iT(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(vn(e,t))return;n.uniform2fv(this.addr,t),yn(e,t)}}function rT(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(vn(e,t))return;n.uniform3fv(this.addr,t),yn(e,t)}}function sT(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(vn(e,t))return;n.uniform4fv(this.addr,t),yn(e,t)}}function oT(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(vn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),yn(e,t)}else{if(vn(e,i))return;cm.set(i),n.uniformMatrix2fv(this.addr,!1,cm),yn(e,i)}}function aT(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(vn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),yn(e,t)}else{if(vn(e,i))return;lm.set(i),n.uniformMatrix3fv(this.addr,!1,lm),yn(e,i)}}function lT(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(vn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),yn(e,t)}else{if(vn(e,i))return;am.set(i),n.uniformMatrix4fv(this.addr,!1,am),yn(e,i)}}function cT(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function uT(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(vn(e,t))return;n.uniform2iv(this.addr,t),yn(e,t)}}function fT(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(vn(e,t))return;n.uniform3iv(this.addr,t),yn(e,t)}}function hT(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(vn(e,t))return;n.uniform4iv(this.addr,t),yn(e,t)}}function dT(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function pT(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(vn(e,t))return;n.uniform2uiv(this.addr,t),yn(e,t)}}function mT(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(vn(e,t))return;n.uniform3uiv(this.addr,t),yn(e,t)}}function _T(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(vn(e,t))return;n.uniform4uiv(this.addr,t),yn(e,t)}}function gT(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(rm.compareFunction=q_,s=rm):s=fg,e.setTexture2D(t||s,r)}function vT(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||dg,r)}function yT(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||pg,r)}function xT(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||hg,r)}function MT(n){switch(n){case 5126:return nT;case 35664:return iT;case 35665:return rT;case 35666:return sT;case 35674:return oT;case 35675:return aT;case 35676:return lT;case 5124:case 35670:return cT;case 35667:case 35671:return uT;case 35668:case 35672:return fT;case 35669:case 35673:return hT;case 5125:return dT;case 36294:return pT;case 36295:return mT;case 36296:return _T;case 35678:case 36198:case 36298:case 36306:case 35682:return gT;case 35679:case 36299:case 36307:return vT;case 35680:case 36300:case 36308:case 36293:return yT;case 36289:case 36303:case 36311:case 36292:return xT}}function ST(n,t){n.uniform1fv(this.addr,t)}function bT(n,t){const e=Zo(t,this.size,2);n.uniform2fv(this.addr,e)}function ET(n,t){const e=Zo(t,this.size,3);n.uniform3fv(this.addr,e)}function TT(n,t){const e=Zo(t,this.size,4);n.uniform4fv(this.addr,e)}function wT(n,t){const e=Zo(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function AT(n,t){const e=Zo(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function CT(n,t){const e=Zo(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function RT(n,t){n.uniform1iv(this.addr,t)}function PT(n,t){n.uniform2iv(this.addr,t)}function DT(n,t){n.uniform3iv(this.addr,t)}function IT(n,t){n.uniform4iv(this.addr,t)}function LT(n,t){n.uniform1uiv(this.addr,t)}function UT(n,t){n.uniform2uiv(this.addr,t)}function NT(n,t){n.uniform3uiv(this.addr,t)}function OT(n,t){n.uniform4uiv(this.addr,t)}function FT(n,t,e){const i=this.cache,r=t.length,s=Lc(e,r);vn(i,s)||(n.uniform1iv(this.addr,s),yn(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||fg,s[o])}function BT(n,t,e){const i=this.cache,r=t.length,s=Lc(e,r);vn(i,s)||(n.uniform1iv(this.addr,s),yn(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||dg,s[o])}function kT(n,t,e){const i=this.cache,r=t.length,s=Lc(e,r);vn(i,s)||(n.uniform1iv(this.addr,s),yn(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||pg,s[o])}function zT(n,t,e){const i=this.cache,r=t.length,s=Lc(e,r);vn(i,s)||(n.uniform1iv(this.addr,s),yn(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||hg,s[o])}function HT(n){switch(n){case 5126:return ST;case 35664:return bT;case 35665:return ET;case 35666:return TT;case 35674:return wT;case 35675:return AT;case 35676:return CT;case 5124:case 35670:return RT;case 35667:case 35671:return PT;case 35668:case 35672:return DT;case 35669:case 35673:return IT;case 5125:return LT;case 36294:return UT;case 36295:return NT;case 36296:return OT;case 35678:case 36198:case 36298:case 36306:case 35682:return FT;case 35679:case 36299:case 36307:return BT;case 35680:case 36300:case 36308:case 36293:return kT;case 36289:case 36303:case 36311:case 36292:return zT}}class VT{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=MT(e.type)}}class GT{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=HT(e.type)}}class WT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const ku=/(\w+)(\])?(\[|\.)?/g;function um(n,t){n.seq.push(t),n.map[t.id]=t}function XT(n,t,e){const i=n.name,r=i.length;for(ku.lastIndex=0;;){const s=ku.exec(i),o=ku.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){um(e,u===void 0?new VT(a,n,t):new GT(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new WT(a),um(e,f)),e=f}}}class Kl{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);XT(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function fm(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const YT=37297;let qT=0;function $T(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const hm=new me;function KT(n){Ce._getMatrix(hm,Ce.workingColorSpace,n);const t=`mat3( ${hm.elements.map(e=>e.toFixed(4))} )`;switch(Ce.getTransfer(n)){case hc:return[t,"LinearTransferOETF"];case Ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function dm(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+$T(n.getShaderSource(t),o)}else return r}function jT(n,t){const e=KT(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ZT(n,t){let e;switch(t){case X1:e="Linear";break;case Y1:e="Reinhard";break;case q1:e="Cineon";break;case U_:e="ACESFilmic";break;case K1:e="AgX";break;case j1:e="Neutral";break;case $1:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ul=new O;function JT(){Ce.getLuminanceCoefficients(Ul);const n=Ul.x.toFixed(4),t=Ul.y.toFixed(4),e=Ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function QT(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ga).join(`
`)}function tw(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function ew(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function ga(n){return n!==""}function pm(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mm(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const nw=/^[ \t]*#include +<([\w\d./]+)>/gm;function rh(n){return n.replace(nw,rw)}const iw=new Map;function rw(n,t){let e=_e[t];if(e===void 0){const i=iw.get(t);if(i!==void 0)e=_e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return rh(e)}const sw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _m(n){return n.replace(sw,ow)}function ow(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function gm(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function aw(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===D_?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===I_?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ur&&(t="SHADOWMAP_TYPE_VSM"),t}function lw(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Vo:case Go:t="ENVMAP_TYPE_CUBE";break;case Dc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function cw(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Go:t="ENVMAP_MODE_REFRACTION";break}return t}function uw(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case L_:t="ENVMAP_BLENDING_MULTIPLY";break;case G1:t="ENVMAP_BLENDING_MIX";break;case W1:t="ENVMAP_BLENDING_ADD";break}return t}function fw(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function hw(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=aw(e),u=lw(e),c=cw(e),f=uw(e),h=fw(e),d=QT(e),g=tw(s),_=r.createProgram();let p,m,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ga).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ga).join(`
`),m.length>0&&(m+=`
`)):(p=[gm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ga).join(`
`),m=[gm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Jr?"#define TONE_MAPPING":"",e.toneMapping!==Jr?_e.tonemapping_pars_fragment:"",e.toneMapping!==Jr?ZT("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,jT("linearToOutputTexel",e.outputColorSpace),JT(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ga).join(`
`)),o=rh(o),o=pm(o,e),o=mm(o,e),a=rh(a),a=pm(a,e),a=mm(a,e),o=_m(o),a=_m(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Mp?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Mp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=S+p+o,v=S+m+a,R=fm(r,r.VERTEX_SHADER,M),w=fm(r,r.FRAGMENT_SHADER,v);r.attachShader(_,R),r.attachShader(_,w),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function P(N){if(n.debug.checkShaderErrors){const B=r.getProgramInfoLog(_).trim(),H=r.getShaderInfoLog(R).trim(),J=r.getShaderInfoLog(w).trim();let j=!0,$=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,R,w);else{const et=dm(r,R,"vertex"),W=dm(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+B+`
`+et+`
`+W)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(H===""||J==="")&&($=!1);$&&(N.diagnostics={runnable:j,programLog:B,vertexShader:{log:H,prefix:p},fragmentShader:{log:J,prefix:m}})}r.deleteShader(R),r.deleteShader(w),D=new Kl(r,_),x=ew(r,_)}let D;this.getUniforms=function(){return D===void 0&&P(this),D};let x;this.getAttributes=function(){return x===void 0&&P(this),x};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(_,YT)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=qT++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=w,this}let dw=0;class pw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new mw(t),e.set(t,i)),i}}class mw{constructor(t){this.id=dw++,this.code=t,this.usedTimes=0}}function _w(n,t,e,i,r,s,o){const a=new Zh,l=new pw,u=new Set,c=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return u.add(x),x===0?"uv":`uv${x}`}function p(x,b,N,B,H){const J=B.fog,j=H.geometry,$=x.isMeshStandardMaterial?B.environment:null,et=(x.isMeshStandardMaterial?e:t).get(x.envMap||$),W=et&&et.mapping===Dc?et.image.height:null,vt=g[x.type];x.precision!==null&&(d=r.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const Pt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,At=Pt!==void 0?Pt.length:0;let zt=0;j.morphAttributes.position!==void 0&&(zt=1),j.morphAttributes.normal!==void 0&&(zt=2),j.morphAttributes.color!==void 0&&(zt=3);let pe,st,xt,Ft;if(vt){const be=Ki[vt];pe=be.vertexShader,st=be.fragmentShader}else pe=x.vertexShader,st=x.fragmentShader,l.update(x),xt=l.getVertexShaderID(x),Ft=l.getFragmentShaderID(x);const ct=n.getRenderTarget(),Vt=n.state.buffers.depth.getReversed(),Kt=H.isInstancedMesh===!0,Gt=H.isBatchedMesh===!0,ye=!!x.map,C=!!x.matcap,F=!!et,T=!!x.aoMap,rt=!!x.lightMap,K=!!x.bumpMap,nt=!!x.normalMap,ot=!!x.displacementMap,ht=!!x.emissiveMap,it=!!x.metalnessMap,A=!!x.roughnessMap,E=x.anisotropy>0,z=x.clearcoat>0,q=x.dispersion>0,Z=x.iridescence>0,Q=x.sheen>0,St=x.transmission>0,_t=E&&!!x.anisotropyMap,wt=z&&!!x.clearcoatMap,qt=z&&!!x.clearcoatNormalMap,mt=z&&!!x.clearcoatRoughnessMap,Dt=Z&&!!x.iridescenceMap,Bt=Z&&!!x.iridescenceThicknessMap,Wt=Q&&!!x.sheenColorMap,Ct=Q&&!!x.sheenRoughnessMap,ne=!!x.specularMap,Jt=!!x.specularColorMap,se=!!x.specularIntensityMap,V=St&&!!x.transmissionMap,It=St&&!!x.thicknessMap,at=!!x.gradientMap,pt=!!x.alphaMap,Nt=x.alphaTest>0,Lt=!!x.alphaHash,ie=!!x.extensions;let Le=Jr;x.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(Le=n.toneMapping);const Ze={shaderID:vt,shaderType:x.type,shaderName:x.name,vertexShader:pe,fragmentShader:st,defines:x.defines,customVertexShaderID:xt,customFragmentShaderID:Ft,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Gt,batchingColor:Gt&&H._colorsTexture!==null,instancing:Kt,instancingColor:Kt&&H.instanceColor!==null,instancingMorph:Kt&&H.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ct===null?n.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Yo,alphaToCoverage:!!x.alphaToCoverage,map:ye,matcap:C,envMap:F,envMapMode:F&&et.mapping,envMapCubeUVHeight:W,aoMap:T,lightMap:rt,bumpMap:K,normalMap:nt,displacementMap:h&&ot,emissiveMap:ht,normalMapObjectSpace:nt&&x.normalMapType===tM,normalMapTangentSpace:nt&&x.normalMapType===Y_,metalnessMap:it,roughnessMap:A,anisotropy:E,anisotropyMap:_t,clearcoat:z,clearcoatMap:wt,clearcoatNormalMap:qt,clearcoatRoughnessMap:mt,dispersion:q,iridescence:Z,iridescenceMap:Dt,iridescenceThicknessMap:Bt,sheen:Q,sheenColorMap:Wt,sheenRoughnessMap:Ct,specularMap:ne,specularColorMap:Jt,specularIntensityMap:se,transmission:St,transmissionMap:V,thicknessMap:It,gradientMap:at,opaque:x.transparent===!1&&x.blending===Do&&x.alphaToCoverage===!1,alphaMap:pt,alphaTest:Nt,alphaHash:Lt,combine:x.combine,mapUv:ye&&_(x.map.channel),aoMapUv:T&&_(x.aoMap.channel),lightMapUv:rt&&_(x.lightMap.channel),bumpMapUv:K&&_(x.bumpMap.channel),normalMapUv:nt&&_(x.normalMap.channel),displacementMapUv:ot&&_(x.displacementMap.channel),emissiveMapUv:ht&&_(x.emissiveMap.channel),metalnessMapUv:it&&_(x.metalnessMap.channel),roughnessMapUv:A&&_(x.roughnessMap.channel),anisotropyMapUv:_t&&_(x.anisotropyMap.channel),clearcoatMapUv:wt&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:qt&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&_(x.sheenRoughnessMap.channel),specularMapUv:ne&&_(x.specularMap.channel),specularColorMapUv:Jt&&_(x.specularColorMap.channel),specularIntensityMapUv:se&&_(x.specularIntensityMap.channel),transmissionMapUv:V&&_(x.transmissionMap.channel),thicknessMapUv:It&&_(x.thicknessMap.channel),alphaMapUv:pt&&_(x.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(nt||E),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!j.attributes.uv&&(ye||pt),fog:!!J,useFog:x.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Vt,skinning:H.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:zt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:Le,decodeVideoTexture:ye&&x.map.isVideoTexture===!0&&Ce.getTransfer(x.map.colorSpace)===Ue,decodeVideoTextureEmissive:ht&&x.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(x.emissiveMap.colorSpace)===Ue,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===xe,flipSided:x.side===wn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ie&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&x.extensions.multiDraw===!0||Gt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ze.vertexUv1s=u.has(1),Ze.vertexUv2s=u.has(2),Ze.vertexUv3s=u.has(3),u.clear(),Ze}function m(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const N in x.defines)b.push(N),b.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(S(b,x),M(b,x),b.push(n.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function S(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function M(x,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),x.push(a.mask)}function v(x){const b=g[x.type];let N;if(b){const B=Ki[b];N=PM.clone(B.uniforms)}else N=x.uniforms;return N}function R(x,b){let N;for(let B=0,H=c.length;B<H;B++){const J=c[B];if(J.cacheKey===b){N=J,++N.usedTimes;break}}return N===void 0&&(N=new hw(n,b,x,s),c.push(N)),N}function w(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),x.destroy()}}function P(x){l.remove(x)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:v,acquireProgram:R,releaseProgram:w,releaseShaderCache:P,programs:c,dispose:D}}function gw(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function vw(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function vm(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function ym(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(f,h,d,g,_,p){let m=n[t];return m===void 0?(m={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},n[t]=m):(m.id=f.id,m.object=f,m.geometry=h,m.material=d,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=_,m.group=p),t++,m}function a(f,h,d,g,_,p){const m=o(f,h,d,g,_,p);d.transmission>0?i.push(m):d.transparent===!0?r.push(m):e.push(m)}function l(f,h,d,g,_,p){const m=o(f,h,d,g,_,p);d.transmission>0?i.unshift(m):d.transparent===!0?r.unshift(m):e.unshift(m)}function u(f,h){e.length>1&&e.sort(f||vw),i.length>1&&i.sort(h||vm),r.length>1&&r.sort(h||vm)}function c(){for(let f=t,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function yw(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new ym,n.set(i,[o])):r>=s.length?(o=new ym,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function xw(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new oe};break;case"SpotLight":e={position:new O,direction:new O,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new oe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":e={color:new oe,position:new O,halfWidth:new O,halfHeight:new O};break}return n[t.id]=e,e}}}function Mw(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Sw=0;function bw(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Ew(n){const t=new xw,e=Mw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new O);const r=new O,s=new We,o=new We;function a(u){let c=0,f=0,h=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let d=0,g=0,_=0,p=0,m=0,S=0,M=0,v=0,R=0,w=0,P=0;u.sort(bw);for(let x=0,b=u.length;x<b;x++){const N=u[x],B=N.color,H=N.intensity,J=N.distance,j=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)c+=B.r*H,f+=B.g*H,h+=B.b*H;else if(N.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(N.sh.coefficients[$],H);P++}else if(N.isDirectionalLight){const $=t.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const et=N.shadow,W=e.get(N);W.shadowIntensity=et.intensity,W.shadowBias=et.bias,W.shadowNormalBias=et.normalBias,W.shadowRadius=et.radius,W.shadowMapSize=et.mapSize,i.directionalShadow[d]=W,i.directionalShadowMap[d]=j,i.directionalShadowMatrix[d]=N.shadow.matrix,S++}i.directional[d]=$,d++}else if(N.isSpotLight){const $=t.get(N);$.position.setFromMatrixPosition(N.matrixWorld),$.color.copy(B).multiplyScalar(H),$.distance=J,$.coneCos=Math.cos(N.angle),$.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),$.decay=N.decay,i.spot[_]=$;const et=N.shadow;if(N.map&&(i.spotLightMap[R]=N.map,R++,et.updateMatrices(N),N.castShadow&&w++),i.spotLightMatrix[_]=et.matrix,N.castShadow){const W=e.get(N);W.shadowIntensity=et.intensity,W.shadowBias=et.bias,W.shadowNormalBias=et.normalBias,W.shadowRadius=et.radius,W.shadowMapSize=et.mapSize,i.spotShadow[_]=W,i.spotShadowMap[_]=j,v++}_++}else if(N.isRectAreaLight){const $=t.get(N);$.color.copy(B).multiplyScalar(H),$.halfWidth.set(N.width*.5,0,0),$.halfHeight.set(0,N.height*.5,0),i.rectArea[p]=$,p++}else if(N.isPointLight){const $=t.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity),$.distance=N.distance,$.decay=N.decay,N.castShadow){const et=N.shadow,W=e.get(N);W.shadowIntensity=et.intensity,W.shadowBias=et.bias,W.shadowNormalBias=et.normalBias,W.shadowRadius=et.radius,W.shadowMapSize=et.mapSize,W.shadowCameraNear=et.camera.near,W.shadowCameraFar=et.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=j,i.pointShadowMatrix[g]=N.shadow.matrix,M++}i.point[g]=$,g++}else if(N.isHemisphereLight){const $=t.get(N);$.skyColor.copy(N.color).multiplyScalar(H),$.groundColor.copy(N.groundColor).multiplyScalar(H),i.hemi[m]=$,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ut.LTC_FLOAT_1,i.rectAreaLTC2=Ut.LTC_FLOAT_2):(i.rectAreaLTC1=Ut.LTC_HALF_1,i.rectAreaLTC2=Ut.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=h;const D=i.hash;(D.directionalLength!==d||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==p||D.hemiLength!==m||D.numDirectionalShadows!==S||D.numPointShadows!==M||D.numSpotShadows!==v||D.numSpotMaps!==R||D.numLightProbes!==P)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=v+R-w,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=P,D.directionalLength=d,D.pointLength=g,D.spotLength=_,D.rectAreaLength=p,D.hemiLength=m,D.numDirectionalShadows=S,D.numPointShadows=M,D.numSpotShadows=v,D.numSpotMaps=R,D.numLightProbes=P,i.version=Sw++)}function l(u,c){let f=0,h=0,d=0,g=0,_=0;const p=c.matrixWorldInverse;for(let m=0,S=u.length;m<S;m++){const M=u[m];if(M.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),f++}else if(M.isSpotLight){const v=i.spot[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),d++}else if(M.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),o.identity(),s.copy(M.matrixWorld),s.premultiply(p),o.extractRotation(s),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const v=i.point[h];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),h++}else if(M.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:i}}function xm(n){const t=new Ew(n),e=[],i=[];function r(c){u.camera=c,e.length=0,i.length=0}function s(c){e.push(c)}function o(c){i.push(c)}function a(){t.setup(e)}function l(c){t.setupView(e,c)}const u={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Tw(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new xm(n),t.set(r,[a])):s>=o.length?(a=new xm(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const ww=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Aw=`uniform sampler2D shadow_pass;
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
}`;function Cw(n,t,e){let i=new Qh;const r=new Xt,s=new Xt,o=new Oe,a=new JM({depthPacking:Q1}),l=new QM,u={},c=e.maxTextureSize,f={[Tr]:wn,[wn]:Tr,[xe]:xe},h=new rs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:ww,fragmentShader:Aw}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Mn;g.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new te(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=D_;let m=this.type;this.render=function(w,P,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const x=n.getRenderTarget(),b=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Zr),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const H=m!==ur&&this.type===ur,J=m===ur&&this.type!==ur;for(let j=0,$=w.length;j<$;j++){const et=w[j],W=et.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const vt=W.getFrameExtents();if(r.multiply(vt),s.copy(W.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/vt.x),r.x=s.x*vt.x,W.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/vt.y),r.y=s.y*vt.y,W.mapSize.y=s.y)),W.map===null||H===!0||J===!0){const At=this.type!==ur?{minFilter:ki,magFilter:ki}:{};W.map!==null&&W.map.dispose(),W.map=new Vs(r.x,r.y,At),W.map.texture.name=et.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const Pt=W.getViewportCount();for(let At=0;At<Pt;At++){const zt=W.getViewport(At);o.set(s.x*zt.x,s.y*zt.y,s.x*zt.z,s.y*zt.w),B.viewport(o),W.updateMatrices(et,At),i=W.getFrustum(),v(P,D,W.camera,et,this.type)}W.isPointLightShadow!==!0&&this.type===ur&&S(W,D),W.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(x,b,N)};function S(w,P){const D=t.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Vs(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(P,null,D,h,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(P,null,D,d,_,null)}function M(w,P,D,x){let b=null;const N=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)b=N;else if(b=D.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const B=b.uuid,H=P.uuid;let J=u[B];J===void 0&&(J={},u[B]=J);let j=J[H];j===void 0&&(j=b.clone(),J[H]=j,P.addEventListener("dispose",R)),b=j}if(b.visible=P.visible,b.wireframe=P.wireframe,x===ur?b.side=P.shadowSide!==null?P.shadowSide:P.side:b.side=P.shadowSide!==null?P.shadowSide:f[P.side],b.alphaMap=P.alphaMap,b.alphaTest=P.alphaTest,b.map=P.map,b.clipShadows=P.clipShadows,b.clippingPlanes=P.clippingPlanes,b.clipIntersection=P.clipIntersection,b.displacementMap=P.displacementMap,b.displacementScale=P.displacementScale,b.displacementBias=P.displacementBias,b.wireframeLinewidth=P.wireframeLinewidth,b.linewidth=P.linewidth,D.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const B=n.properties.get(b);B.light=D}return b}function v(w,P,D,x,b){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===ur)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);const H=t.update(w),J=w.material;if(Array.isArray(J)){const j=H.groups;for(let $=0,et=j.length;$<et;$++){const W=j[$],vt=J[W.materialIndex];if(vt&&vt.visible){const Pt=M(w,vt,x,b);w.onBeforeShadow(n,w,P,D,H,Pt,W),n.renderBufferDirect(D,null,H,Pt,w,W),w.onAfterShadow(n,w,P,D,H,Pt,W)}}}else if(J.visible){const j=M(w,J,x,b);w.onBeforeShadow(n,w,P,D,H,j,null),n.renderBufferDirect(D,null,H,j,w,null),w.onAfterShadow(n,w,P,D,H,j,null)}}const B=w.children;for(let H=0,J=B.length;H<J;H++)v(B[H],P,D,x,b)}function R(w){w.target.removeEventListener("dispose",R);for(const D in u){const x=u[D],b=w.target.uuid;b in x&&(x[b].dispose(),delete x[b])}}}const Rw={[gf]:vf,[yf]:Sf,[xf]:bf,[Ho]:Mf,[vf]:gf,[Sf]:yf,[bf]:xf,[Mf]:Ho};function Pw(n,t){function e(){let V=!1;const It=new Oe;let at=null;const pt=new Oe(0,0,0,0);return{setMask:function(Nt){at!==Nt&&!V&&(n.colorMask(Nt,Nt,Nt,Nt),at=Nt)},setLocked:function(Nt){V=Nt},setClear:function(Nt,Lt,ie,Le,Ze){Ze===!0&&(Nt*=Le,Lt*=Le,ie*=Le),It.set(Nt,Lt,ie,Le),pt.equals(It)===!1&&(n.clearColor(Nt,Lt,ie,Le),pt.copy(It))},reset:function(){V=!1,at=null,pt.set(-1,0,0,0)}}}function i(){let V=!1,It=!1,at=null,pt=null,Nt=null;return{setReversed:function(Lt){if(It!==Lt){const ie=t.get("EXT_clip_control");It?ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.ZERO_TO_ONE_EXT):ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.NEGATIVE_ONE_TO_ONE_EXT);const Le=Nt;Nt=null,this.setClear(Le)}It=Lt},getReversed:function(){return It},setTest:function(Lt){Lt?ct(n.DEPTH_TEST):Vt(n.DEPTH_TEST)},setMask:function(Lt){at!==Lt&&!V&&(n.depthMask(Lt),at=Lt)},setFunc:function(Lt){if(It&&(Lt=Rw[Lt]),pt!==Lt){switch(Lt){case gf:n.depthFunc(n.NEVER);break;case vf:n.depthFunc(n.ALWAYS);break;case yf:n.depthFunc(n.LESS);break;case Ho:n.depthFunc(n.LEQUAL);break;case xf:n.depthFunc(n.EQUAL);break;case Mf:n.depthFunc(n.GEQUAL);break;case Sf:n.depthFunc(n.GREATER);break;case bf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pt=Lt}},setLocked:function(Lt){V=Lt},setClear:function(Lt){Nt!==Lt&&(It&&(Lt=1-Lt),n.clearDepth(Lt),Nt=Lt)},reset:function(){V=!1,at=null,pt=null,Nt=null,It=!1}}}function r(){let V=!1,It=null,at=null,pt=null,Nt=null,Lt=null,ie=null,Le=null,Ze=null;return{setTest:function(be){V||(be?ct(n.STENCIL_TEST):Vt(n.STENCIL_TEST))},setMask:function(be){It!==be&&!V&&(n.stencilMask(be),It=be)},setFunc:function(be,an,Te){(at!==be||pt!==an||Nt!==Te)&&(n.stencilFunc(be,an,Te),at=be,pt=an,Nt=Te)},setOp:function(be,an,Te){(Lt!==be||ie!==an||Le!==Te)&&(n.stencilOp(be,an,Te),Lt=be,ie=an,Le=Te)},setLocked:function(be){V=be},setClear:function(be){Ze!==be&&(n.clearStencil(be),Ze=be)},reset:function(){V=!1,It=null,at=null,pt=null,Nt=null,Lt=null,ie=null,Le=null,Ze=null}}}const s=new e,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},f={},h=new WeakMap,d=[],g=null,_=!1,p=null,m=null,S=null,M=null,v=null,R=null,w=null,P=new oe(0,0,0),D=0,x=!1,b=null,N=null,B=null,H=null,J=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,et=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(W)[1]),$=et>=1):W.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),$=et>=2);let vt=null,Pt={};const At=n.getParameter(n.SCISSOR_BOX),zt=n.getParameter(n.VIEWPORT),pe=new Oe().fromArray(At),st=new Oe().fromArray(zt);function xt(V,It,at,pt){const Nt=new Uint8Array(4),Lt=n.createTexture();n.bindTexture(V,Lt),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ie=0;ie<at;ie++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(It,0,n.RGBA,1,1,pt,0,n.RGBA,n.UNSIGNED_BYTE,Nt):n.texImage2D(It+ie,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Nt);return Lt}const Ft={};Ft[n.TEXTURE_2D]=xt(n.TEXTURE_2D,n.TEXTURE_2D,1),Ft[n.TEXTURE_CUBE_MAP]=xt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ft[n.TEXTURE_2D_ARRAY]=xt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ft[n.TEXTURE_3D]=xt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ct(n.DEPTH_TEST),o.setFunc(Ho),K(!1),nt(_p),ct(n.CULL_FACE),T(Zr);function ct(V){c[V]!==!0&&(n.enable(V),c[V]=!0)}function Vt(V){c[V]!==!1&&(n.disable(V),c[V]=!1)}function Kt(V,It){return f[V]!==It?(n.bindFramebuffer(V,It),f[V]=It,V===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=It),V===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=It),!0):!1}function Gt(V,It){let at=d,pt=!1;if(V){at=h.get(It),at===void 0&&(at=[],h.set(It,at));const Nt=V.textures;if(at.length!==Nt.length||at[0]!==n.COLOR_ATTACHMENT0){for(let Lt=0,ie=Nt.length;Lt<ie;Lt++)at[Lt]=n.COLOR_ATTACHMENT0+Lt;at.length=Nt.length,pt=!0}}else at[0]!==n.BACK&&(at[0]=n.BACK,pt=!0);pt&&n.drawBuffers(at)}function ye(V){return g!==V?(n.useProgram(V),g=V,!0):!1}const C={[Rs]:n.FUNC_ADD,[w1]:n.FUNC_SUBTRACT,[A1]:n.FUNC_REVERSE_SUBTRACT};C[C1]=n.MIN,C[R1]=n.MAX;const F={[P1]:n.ZERO,[D1]:n.ONE,[I1]:n.SRC_COLOR,[mf]:n.SRC_ALPHA,[B1]:n.SRC_ALPHA_SATURATE,[O1]:n.DST_COLOR,[U1]:n.DST_ALPHA,[L1]:n.ONE_MINUS_SRC_COLOR,[_f]:n.ONE_MINUS_SRC_ALPHA,[F1]:n.ONE_MINUS_DST_COLOR,[N1]:n.ONE_MINUS_DST_ALPHA,[k1]:n.CONSTANT_COLOR,[z1]:n.ONE_MINUS_CONSTANT_COLOR,[H1]:n.CONSTANT_ALPHA,[V1]:n.ONE_MINUS_CONSTANT_ALPHA};function T(V,It,at,pt,Nt,Lt,ie,Le,Ze,be){if(V===Zr){_===!0&&(Vt(n.BLEND),_=!1);return}if(_===!1&&(ct(n.BLEND),_=!0),V!==T1){if(V!==p||be!==x){if((m!==Rs||v!==Rs)&&(n.blendEquation(n.FUNC_ADD),m=Rs,v=Rs),be)switch(V){case Do:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case un:n.blendFunc(n.ONE,n.ONE);break;case gp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Do:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case un:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case gp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}S=null,M=null,R=null,w=null,P.set(0,0,0),D=0,p=V,x=be}return}Nt=Nt||It,Lt=Lt||at,ie=ie||pt,(It!==m||Nt!==v)&&(n.blendEquationSeparate(C[It],C[Nt]),m=It,v=Nt),(at!==S||pt!==M||Lt!==R||ie!==w)&&(n.blendFuncSeparate(F[at],F[pt],F[Lt],F[ie]),S=at,M=pt,R=Lt,w=ie),(Le.equals(P)===!1||Ze!==D)&&(n.blendColor(Le.r,Le.g,Le.b,Ze),P.copy(Le),D=Ze),p=V,x=!1}function rt(V,It){V.side===xe?Vt(n.CULL_FACE):ct(n.CULL_FACE);let at=V.side===wn;It&&(at=!at),K(at),V.blending===Do&&V.transparent===!1?T(Zr):T(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),s.setMask(V.colorWrite);const pt=V.stencilWrite;a.setTest(pt),pt&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ht(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ct(n.SAMPLE_ALPHA_TO_COVERAGE):Vt(n.SAMPLE_ALPHA_TO_COVERAGE)}function K(V){b!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),b=V)}function nt(V){V!==b1?(ct(n.CULL_FACE),V!==N&&(V===_p?n.cullFace(n.BACK):V===E1?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Vt(n.CULL_FACE),N=V}function ot(V){V!==B&&($&&n.lineWidth(V),B=V)}function ht(V,It,at){V?(ct(n.POLYGON_OFFSET_FILL),(H!==It||J!==at)&&(n.polygonOffset(It,at),H=It,J=at)):Vt(n.POLYGON_OFFSET_FILL)}function it(V){V?ct(n.SCISSOR_TEST):Vt(n.SCISSOR_TEST)}function A(V){V===void 0&&(V=n.TEXTURE0+j-1),vt!==V&&(n.activeTexture(V),vt=V)}function E(V,It,at){at===void 0&&(vt===null?at=n.TEXTURE0+j-1:at=vt);let pt=Pt[at];pt===void 0&&(pt={type:void 0,texture:void 0},Pt[at]=pt),(pt.type!==V||pt.texture!==It)&&(vt!==at&&(n.activeTexture(at),vt=at),n.bindTexture(V,It||Ft[V]),pt.type=V,pt.texture=It)}function z(){const V=Pt[vt];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Z(){try{n.compressedTexImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function St(){try{n.texSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _t(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function wt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function qt(){try{n.texStorage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function mt(){try{n.texStorage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Dt(){try{n.texImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Bt(){try{n.texImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Wt(V){pe.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),pe.copy(V))}function Ct(V){st.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),st.copy(V))}function ne(V,It){let at=u.get(It);at===void 0&&(at=new WeakMap,u.set(It,at));let pt=at.get(V);pt===void 0&&(pt=n.getUniformBlockIndex(It,V.name),at.set(V,pt))}function Jt(V,It){const pt=u.get(It).get(V);l.get(It)!==pt&&(n.uniformBlockBinding(It,pt,V.__bindingPointIndex),l.set(It,pt))}function se(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},vt=null,Pt={},f={},h=new WeakMap,d=[],g=null,_=!1,p=null,m=null,S=null,M=null,v=null,R=null,w=null,P=new oe(0,0,0),D=0,x=!1,b=null,N=null,B=null,H=null,J=null,pe.set(0,0,n.canvas.width,n.canvas.height),st.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ct,disable:Vt,bindFramebuffer:Kt,drawBuffers:Gt,useProgram:ye,setBlending:T,setMaterial:rt,setFlipSided:K,setCullFace:nt,setLineWidth:ot,setPolygonOffset:ht,setScissorTest:it,activeTexture:A,bindTexture:E,unbindTexture:z,compressedTexImage2D:q,compressedTexImage3D:Z,texImage2D:Dt,texImage3D:Bt,updateUBOMapping:ne,uniformBlockBinding:Jt,texStorage2D:qt,texStorage3D:mt,texSubImage2D:Q,texSubImage3D:St,compressedTexSubImage2D:_t,compressedTexSubImage3D:wt,scissor:Wt,viewport:Ct,reset:se}}function Dw(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Xt,c=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,E){return d?new OffscreenCanvas(A,E):pc("canvas")}function _(A,E,z){let q=1;const Z=it(A);if((Z.width>z||Z.height>z)&&(q=z/Math.max(Z.width,Z.height)),q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Q=Math.floor(q*Z.width),St=Math.floor(q*Z.height);f===void 0&&(f=g(Q,St));const _t=E?g(Q,St):f;return _t.width=Q,_t.height=St,_t.getContext("2d").drawImage(A,0,0,Q,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Q+"x"+St+")."),_t}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),A;return A}function p(A){return A.generateMipmaps}function m(A){n.generateMipmap(A)}function S(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(A,E,z,q,Z=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Q=E;if(E===n.RED&&(z===n.FLOAT&&(Q=n.R32F),z===n.HALF_FLOAT&&(Q=n.R16F),z===n.UNSIGNED_BYTE&&(Q=n.R8)),E===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(Q=n.R8UI),z===n.UNSIGNED_SHORT&&(Q=n.R16UI),z===n.UNSIGNED_INT&&(Q=n.R32UI),z===n.BYTE&&(Q=n.R8I),z===n.SHORT&&(Q=n.R16I),z===n.INT&&(Q=n.R32I)),E===n.RG&&(z===n.FLOAT&&(Q=n.RG32F),z===n.HALF_FLOAT&&(Q=n.RG16F),z===n.UNSIGNED_BYTE&&(Q=n.RG8)),E===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(Q=n.RG8UI),z===n.UNSIGNED_SHORT&&(Q=n.RG16UI),z===n.UNSIGNED_INT&&(Q=n.RG32UI),z===n.BYTE&&(Q=n.RG8I),z===n.SHORT&&(Q=n.RG16I),z===n.INT&&(Q=n.RG32I)),E===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),z===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),z===n.UNSIGNED_INT&&(Q=n.RGB32UI),z===n.BYTE&&(Q=n.RGB8I),z===n.SHORT&&(Q=n.RGB16I),z===n.INT&&(Q=n.RGB32I)),E===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),z===n.UNSIGNED_INT&&(Q=n.RGBA32UI),z===n.BYTE&&(Q=n.RGBA8I),z===n.SHORT&&(Q=n.RGBA16I),z===n.INT&&(Q=n.RGBA32I)),E===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),E===n.RGBA){const St=Z?hc:Ce.getTransfer(q);z===n.FLOAT&&(Q=n.RGBA32F),z===n.HALF_FLOAT&&(Q=n.RGBA16F),z===n.UNSIGNED_BYTE&&(Q=St===Ue?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function v(A,E){let z;return A?E===null||E===Hs||E===Wo?z=n.DEPTH24_STENCIL8:E===gr?z=n.DEPTH32F_STENCIL8:E===$a&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Hs||E===Wo?z=n.DEPTH_COMPONENT24:E===gr?z=n.DEPTH_COMPONENT32F:E===$a&&(z=n.DEPTH_COMPONENT16),z}function R(A,E){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==ki&&A.minFilter!==Ji?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function w(A){const E=A.target;E.removeEventListener("dispose",w),D(E),E.isVideoTexture&&c.delete(E)}function P(A){const E=A.target;E.removeEventListener("dispose",P),b(E)}function D(A){const E=i.get(A);if(E.__webglInit===void 0)return;const z=A.source,q=h.get(z);if(q){const Z=q[E.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&x(A),Object.keys(q).length===0&&h.delete(z)}i.remove(A)}function x(A){const E=i.get(A);n.deleteTexture(E.__webglTexture);const z=A.source,q=h.get(z);delete q[E.__cacheKey],o.memory.textures--}function b(A){const E=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(E.__webglFramebuffer[q]))for(let Z=0;Z<E.__webglFramebuffer[q].length;Z++)n.deleteFramebuffer(E.__webglFramebuffer[q][Z]);else n.deleteFramebuffer(E.__webglFramebuffer[q]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[q])}else{if(Array.isArray(E.__webglFramebuffer))for(let q=0;q<E.__webglFramebuffer.length;q++)n.deleteFramebuffer(E.__webglFramebuffer[q]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let q=0;q<E.__webglColorRenderbuffer.length;q++)E.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[q]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const z=A.textures;for(let q=0,Z=z.length;q<Z;q++){const Q=i.get(z[q]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(z[q])}i.remove(A)}let N=0;function B(){N=0}function H(){const A=N;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),N+=1,A}function J(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function j(A,E){const z=i.get(A);if(A.isVideoTexture&&ot(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){const q=A.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(z,A,E);return}}e.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+E)}function $(A,E){const z=i.get(A);if(A.version>0&&z.__version!==A.version){st(z,A,E);return}e.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+E)}function et(A,E){const z=i.get(A);if(A.version>0&&z.__version!==A.version){st(z,A,E);return}e.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+E)}function W(A,E){const z=i.get(A);if(A.version>0&&z.__version!==A.version){xt(z,A,E);return}e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+E)}const vt={[wf]:n.REPEAT,[Ls]:n.CLAMP_TO_EDGE,[Af]:n.MIRRORED_REPEAT},Pt={[ki]:n.NEAREST,[Z1]:n.NEAREST_MIPMAP_NEAREST,[ul]:n.NEAREST_MIPMAP_LINEAR,[Ji]:n.LINEAR,[ru]:n.LINEAR_MIPMAP_NEAREST,[Us]:n.LINEAR_MIPMAP_LINEAR},At={[eM]:n.NEVER,[aM]:n.ALWAYS,[nM]:n.LESS,[q_]:n.LEQUAL,[iM]:n.EQUAL,[oM]:n.GEQUAL,[rM]:n.GREATER,[sM]:n.NOTEQUAL};function zt(A,E){if(E.type===gr&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Ji||E.magFilter===ru||E.magFilter===ul||E.magFilter===Us||E.minFilter===Ji||E.minFilter===ru||E.minFilter===ul||E.minFilter===Us)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,vt[E.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,vt[E.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,vt[E.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,Pt[E.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,Pt[E.minFilter]),E.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,At[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ki||E.minFilter!==ul&&E.minFilter!==Us||E.type===gr&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function pe(A,E){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",w));const q=E.source;let Z=h.get(q);Z===void 0&&(Z={},h.set(q,Z));const Q=J(E);if(Q!==A.__cacheKey){Z[Q]===void 0&&(Z[Q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Z[Q].usedTimes++;const St=Z[A.__cacheKey];St!==void 0&&(Z[A.__cacheKey].usedTimes--,St.usedTimes===0&&x(E)),A.__cacheKey=Q,A.__webglTexture=Z[Q].texture}return z}function st(A,E,z){let q=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(q=n.TEXTURE_3D);const Z=pe(A,E),Q=E.source;e.bindTexture(q,A.__webglTexture,n.TEXTURE0+z);const St=i.get(Q);if(Q.version!==St.__version||Z===!0){e.activeTexture(n.TEXTURE0+z);const _t=Ce.getPrimaries(Ce.workingColorSpace),wt=E.colorSpace===Wr?null:Ce.getPrimaries(E.colorSpace),qt=E.colorSpace===Wr||_t===wt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let mt=_(E.image,!1,r.maxTextureSize);mt=ht(E,mt);const Dt=s.convert(E.format,E.colorSpace),Bt=s.convert(E.type);let Wt=M(E.internalFormat,Dt,Bt,E.colorSpace,E.isVideoTexture);zt(q,E);let Ct;const ne=E.mipmaps,Jt=E.isVideoTexture!==!0,se=St.__version===void 0||Z===!0,V=Q.dataReady,It=R(E,mt);if(E.isDepthTexture)Wt=v(E.format===Xo,E.type),se&&(Jt?e.texStorage2D(n.TEXTURE_2D,1,Wt,mt.width,mt.height):e.texImage2D(n.TEXTURE_2D,0,Wt,mt.width,mt.height,0,Dt,Bt,null));else if(E.isDataTexture)if(ne.length>0){Jt&&se&&e.texStorage2D(n.TEXTURE_2D,It,Wt,ne[0].width,ne[0].height);for(let at=0,pt=ne.length;at<pt;at++)Ct=ne[at],Jt?V&&e.texSubImage2D(n.TEXTURE_2D,at,0,0,Ct.width,Ct.height,Dt,Bt,Ct.data):e.texImage2D(n.TEXTURE_2D,at,Wt,Ct.width,Ct.height,0,Dt,Bt,Ct.data);E.generateMipmaps=!1}else Jt?(se&&e.texStorage2D(n.TEXTURE_2D,It,Wt,mt.width,mt.height),V&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,mt.width,mt.height,Dt,Bt,mt.data)):e.texImage2D(n.TEXTURE_2D,0,Wt,mt.width,mt.height,0,Dt,Bt,mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Jt&&se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,It,Wt,ne[0].width,ne[0].height,mt.depth);for(let at=0,pt=ne.length;at<pt;at++)if(Ct=ne[at],E.format!==Fi)if(Dt!==null)if(Jt){if(V)if(E.layerUpdates.size>0){const Nt=jp(Ct.width,Ct.height,E.format,E.type);for(const Lt of E.layerUpdates){const ie=Ct.data.subarray(Lt*Nt/Ct.data.BYTES_PER_ELEMENT,(Lt+1)*Nt/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,Lt,Ct.width,Ct.height,1,Dt,ie)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,0,Ct.width,Ct.height,mt.depth,Dt,Ct.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,at,Wt,Ct.width,Ct.height,mt.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?V&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,0,Ct.width,Ct.height,mt.depth,Dt,Bt,Ct.data):e.texImage3D(n.TEXTURE_2D_ARRAY,at,Wt,Ct.width,Ct.height,mt.depth,0,Dt,Bt,Ct.data)}else{Jt&&se&&e.texStorage2D(n.TEXTURE_2D,It,Wt,ne[0].width,ne[0].height);for(let at=0,pt=ne.length;at<pt;at++)Ct=ne[at],E.format!==Fi?Dt!==null?Jt?V&&e.compressedTexSubImage2D(n.TEXTURE_2D,at,0,0,Ct.width,Ct.height,Dt,Ct.data):e.compressedTexImage2D(n.TEXTURE_2D,at,Wt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?V&&e.texSubImage2D(n.TEXTURE_2D,at,0,0,Ct.width,Ct.height,Dt,Bt,Ct.data):e.texImage2D(n.TEXTURE_2D,at,Wt,Ct.width,Ct.height,0,Dt,Bt,Ct.data)}else if(E.isDataArrayTexture)if(Jt){if(se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,It,Wt,mt.width,mt.height,mt.depth),V)if(E.layerUpdates.size>0){const at=jp(mt.width,mt.height,E.format,E.type);for(const pt of E.layerUpdates){const Nt=mt.data.subarray(pt*at/mt.data.BYTES_PER_ELEMENT,(pt+1)*at/mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,pt,mt.width,mt.height,1,Dt,Bt,Nt)}E.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,Dt,Bt,mt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Wt,mt.width,mt.height,mt.depth,0,Dt,Bt,mt.data);else if(E.isData3DTexture)Jt?(se&&e.texStorage3D(n.TEXTURE_3D,It,Wt,mt.width,mt.height,mt.depth),V&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,Dt,Bt,mt.data)):e.texImage3D(n.TEXTURE_3D,0,Wt,mt.width,mt.height,mt.depth,0,Dt,Bt,mt.data);else if(E.isFramebufferTexture){if(se)if(Jt)e.texStorage2D(n.TEXTURE_2D,It,Wt,mt.width,mt.height);else{let at=mt.width,pt=mt.height;for(let Nt=0;Nt<It;Nt++)e.texImage2D(n.TEXTURE_2D,Nt,Wt,at,pt,0,Dt,Bt,null),at>>=1,pt>>=1}}else if(ne.length>0){if(Jt&&se){const at=it(ne[0]);e.texStorage2D(n.TEXTURE_2D,It,Wt,at.width,at.height)}for(let at=0,pt=ne.length;at<pt;at++)Ct=ne[at],Jt?V&&e.texSubImage2D(n.TEXTURE_2D,at,0,0,Dt,Bt,Ct):e.texImage2D(n.TEXTURE_2D,at,Wt,Dt,Bt,Ct);E.generateMipmaps=!1}else if(Jt){if(se){const at=it(mt);e.texStorage2D(n.TEXTURE_2D,It,Wt,at.width,at.height)}V&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Dt,Bt,mt)}else e.texImage2D(n.TEXTURE_2D,0,Wt,Dt,Bt,mt);p(E)&&m(q),St.__version=Q.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function xt(A,E,z){if(E.image.length!==6)return;const q=pe(A,E),Z=E.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+z);const Q=i.get(Z);if(Z.version!==Q.__version||q===!0){e.activeTexture(n.TEXTURE0+z);const St=Ce.getPrimaries(Ce.workingColorSpace),_t=E.colorSpace===Wr?null:Ce.getPrimaries(E.colorSpace),wt=E.colorSpace===Wr||St===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const qt=E.isCompressedTexture||E.image[0].isCompressedTexture,mt=E.image[0]&&E.image[0].isDataTexture,Dt=[];for(let pt=0;pt<6;pt++)!qt&&!mt?Dt[pt]=_(E.image[pt],!0,r.maxCubemapSize):Dt[pt]=mt?E.image[pt].image:E.image[pt],Dt[pt]=ht(E,Dt[pt]);const Bt=Dt[0],Wt=s.convert(E.format,E.colorSpace),Ct=s.convert(E.type),ne=M(E.internalFormat,Wt,Ct,E.colorSpace),Jt=E.isVideoTexture!==!0,se=Q.__version===void 0||q===!0,V=Z.dataReady;let It=R(E,Bt);zt(n.TEXTURE_CUBE_MAP,E);let at;if(qt){Jt&&se&&e.texStorage2D(n.TEXTURE_CUBE_MAP,It,ne,Bt.width,Bt.height);for(let pt=0;pt<6;pt++){at=Dt[pt].mipmaps;for(let Nt=0;Nt<at.length;Nt++){const Lt=at[Nt];E.format!==Fi?Wt!==null?Jt?V&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Nt,0,0,Lt.width,Lt.height,Wt,Lt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Nt,ne,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Jt?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Nt,0,0,Lt.width,Lt.height,Wt,Ct,Lt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Nt,ne,Lt.width,Lt.height,0,Wt,Ct,Lt.data)}}}else{if(at=E.mipmaps,Jt&&se){at.length>0&&It++;const pt=it(Dt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,It,ne,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(mt){Jt?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Dt[pt].width,Dt[pt].height,Wt,Ct,Dt[pt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,ne,Dt[pt].width,Dt[pt].height,0,Wt,Ct,Dt[pt].data);for(let Nt=0;Nt<at.length;Nt++){const ie=at[Nt].image[pt].image;Jt?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Nt+1,0,0,ie.width,ie.height,Wt,Ct,ie.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Nt+1,ne,ie.width,ie.height,0,Wt,Ct,ie.data)}}else{Jt?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Wt,Ct,Dt[pt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,ne,Wt,Ct,Dt[pt]);for(let Nt=0;Nt<at.length;Nt++){const Lt=at[Nt];Jt?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Nt+1,0,0,Wt,Ct,Lt.image[pt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Nt+1,ne,Wt,Ct,Lt.image[pt])}}}p(E)&&m(n.TEXTURE_CUBE_MAP),Q.__version=Z.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function Ft(A,E,z,q,Z,Q){const St=s.convert(z.format,z.colorSpace),_t=s.convert(z.type),wt=M(z.internalFormat,St,_t,z.colorSpace),qt=i.get(E),mt=i.get(z);if(mt.__renderTarget=E,!qt.__hasExternalTextures){const Dt=Math.max(1,E.width>>Q),Bt=Math.max(1,E.height>>Q);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?e.texImage3D(Z,Q,wt,Dt,Bt,E.depth,0,St,_t,null):e.texImage2D(Z,Q,wt,Dt,Bt,0,St,_t,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),nt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,Z,mt.__webglTexture,0,K(E)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,Z,mt.__webglTexture,Q),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ct(A,E,z){if(n.bindRenderbuffer(n.RENDERBUFFER,A),E.depthBuffer){const q=E.depthTexture,Z=q&&q.isDepthTexture?q.type:null,Q=v(E.stencilBuffer,Z),St=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_t=K(E);nt(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_t,Q,E.width,E.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,_t,Q,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Q,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,St,n.RENDERBUFFER,A)}else{const q=E.textures;for(let Z=0;Z<q.length;Z++){const Q=q[Z],St=s.convert(Q.format,Q.colorSpace),_t=s.convert(Q.type),wt=M(Q.internalFormat,St,_t,Q.colorSpace),qt=K(E);z&&nt(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,qt,wt,E.width,E.height):nt(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,qt,wt,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,wt,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Vt(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(E.depthTexture);q.__renderTarget=E,(!q.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),j(E.depthTexture,0);const Z=q.__webglTexture,Q=K(E);if(E.depthTexture.format===Io)nt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(E.depthTexture.format===Xo)nt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Kt(A){const E=i.get(A),z=A.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==A.depthTexture){const q=A.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),q){const Z=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,q.removeEventListener("dispose",Z)};q.addEventListener("dispose",Z),E.__depthDisposeCallback=Z}E.__boundDepthTexture=q}if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Vt(E.__webglFramebuffer,A)}else if(z){E.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[q]),E.__webglDepthbuffer[q]===void 0)E.__webglDepthbuffer[q]=n.createRenderbuffer(),ct(E.__webglDepthbuffer[q],A,!1);else{const Z=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=E.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),ct(E.__webglDepthbuffer,A,!1);else{const q=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,Z)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Gt(A,E,z){const q=i.get(A);E!==void 0&&Ft(q.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Kt(A)}function ye(A){const E=A.texture,z=i.get(A),q=i.get(E);A.addEventListener("dispose",P);const Z=A.textures,Q=A.isWebGLCubeRenderTarget===!0,St=Z.length>1;if(St||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=E.version,o.memory.textures++),Q){z.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer[_t]=[];for(let wt=0;wt<E.mipmaps.length;wt++)z.__webglFramebuffer[_t][wt]=n.createFramebuffer()}else z.__webglFramebuffer[_t]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer=[];for(let _t=0;_t<E.mipmaps.length;_t++)z.__webglFramebuffer[_t]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(St)for(let _t=0,wt=Z.length;_t<wt;_t++){const qt=i.get(Z[_t]);qt.__webglTexture===void 0&&(qt.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&nt(A)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let _t=0;_t<Z.length;_t++){const wt=Z[_t];z.__webglColorRenderbuffer[_t]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[_t]);const qt=s.convert(wt.format,wt.colorSpace),mt=s.convert(wt.type),Dt=M(wt.internalFormat,qt,mt,wt.colorSpace,A.isXRRenderTarget===!0),Bt=K(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Bt,Dt,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,z.__webglColorRenderbuffer[_t])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),ct(z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),zt(n.TEXTURE_CUBE_MAP,E);for(let _t=0;_t<6;_t++)if(E.mipmaps&&E.mipmaps.length>0)for(let wt=0;wt<E.mipmaps.length;wt++)Ft(z.__webglFramebuffer[_t][wt],A,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt);else Ft(z.__webglFramebuffer[_t],A,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);p(E)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let _t=0,wt=Z.length;_t<wt;_t++){const qt=Z[_t],mt=i.get(qt);e.bindTexture(n.TEXTURE_2D,mt.__webglTexture),zt(n.TEXTURE_2D,qt),Ft(z.__webglFramebuffer,A,qt,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,0),p(qt)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let _t=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(_t=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(_t,q.__webglTexture),zt(_t,E),E.mipmaps&&E.mipmaps.length>0)for(let wt=0;wt<E.mipmaps.length;wt++)Ft(z.__webglFramebuffer[wt],A,E,n.COLOR_ATTACHMENT0,_t,wt);else Ft(z.__webglFramebuffer,A,E,n.COLOR_ATTACHMENT0,_t,0);p(E)&&m(_t),e.unbindTexture()}A.depthBuffer&&Kt(A)}function C(A){const E=A.textures;for(let z=0,q=E.length;z<q;z++){const Z=E[z];if(p(Z)){const Q=S(A),St=i.get(Z).__webglTexture;e.bindTexture(Q,St),m(Q),e.unbindTexture()}}}const F=[],T=[];function rt(A){if(A.samples>0){if(nt(A)===!1){const E=A.textures,z=A.width,q=A.height;let Z=n.COLOR_BUFFER_BIT;const Q=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,St=i.get(A),_t=E.length>1;if(_t)for(let wt=0;wt<E.length;wt++)e.bindFramebuffer(n.FRAMEBUFFER,St.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,St.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let wt=0;wt<E.length;wt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),_t){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,St.__webglColorRenderbuffer[wt]);const qt=i.get(E[wt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,qt,0)}n.blitFramebuffer(0,0,z,q,0,0,z,q,Z,n.NEAREST),l===!0&&(F.length=0,T.length=0,F.push(n.COLOR_ATTACHMENT0+wt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(F.push(Q),T.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,T)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,F))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_t)for(let wt=0;wt<E.length;wt++){e.bindFramebuffer(n.FRAMEBUFFER,St.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.RENDERBUFFER,St.__webglColorRenderbuffer[wt]);const qt=i.get(E[wt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,St.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.TEXTURE_2D,qt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const E=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function K(A){return Math.min(r.maxSamples,A.samples)}function nt(A){const E=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ot(A){const E=o.render.frame;c.get(A)!==E&&(c.set(A,E),A.update())}function ht(A,E){const z=A.colorSpace,q=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==Yo&&z!==Wr&&(Ce.getTransfer(z)===Ue?(q!==Fi||Z!==wr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),E}function it(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(u.width=A.naturalWidth||A.width,u.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(u.width=A.displayWidth,u.height=A.displayHeight):(u.width=A.width,u.height=A.height),u}this.allocateTextureUnit=H,this.resetTextureUnits=B,this.setTexture2D=j,this.setTexture2DArray=$,this.setTexture3D=et,this.setTextureCube=W,this.rebindTextures=Gt,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=C,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=Ft,this.useMultisampledRTT=nt}function Iw(n,t){function e(i,r=Wr){let s;const o=Ce.getTransfer(r);if(i===wr)return n.UNSIGNED_BYTE;if(i===Xh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Yh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===B_)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===O_)return n.BYTE;if(i===F_)return n.SHORT;if(i===$a)return n.UNSIGNED_SHORT;if(i===Wh)return n.INT;if(i===Hs)return n.UNSIGNED_INT;if(i===gr)return n.FLOAT;if(i===tl)return n.HALF_FLOAT;if(i===k_)return n.ALPHA;if(i===z_)return n.RGB;if(i===Fi)return n.RGBA;if(i===H_)return n.LUMINANCE;if(i===V_)return n.LUMINANCE_ALPHA;if(i===Io)return n.DEPTH_COMPONENT;if(i===Xo)return n.DEPTH_STENCIL;if(i===G_)return n.RED;if(i===qh)return n.RED_INTEGER;if(i===W_)return n.RG;if(i===$h)return n.RG_INTEGER;if(i===Kh)return n.RGBA_INTEGER;if(i===Gl||i===Wl||i===Xl||i===Yl)if(o===Ue)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Gl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Yl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Gl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Yl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Cf||i===Rf||i===Pf||i===Df)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Cf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Rf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Df)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===If||i===Lf||i===Uf)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===If||i===Lf)return o===Ue?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Uf)return o===Ue?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Nf||i===Of||i===Ff||i===Bf||i===kf||i===zf||i===Hf||i===Vf||i===Gf||i===Wf||i===Xf||i===Yf||i===qf||i===$f)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Nf)return o===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Of)return o===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ff)return o===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bf)return o===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===kf)return o===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zf)return o===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Hf)return o===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vf)return o===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Gf)return o===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wf)return o===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xf)return o===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yf)return o===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qf)return o===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$f)return o===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ql||i===Kf||i===jf)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===ql)return o===Ue?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Kf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===jf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===X_||i===Zf||i===Jf||i===Qf)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===ql)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Zf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Jf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Qf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Wo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const Lw={type:"move"};class zu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,i),m=this._getHandJoint(u,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),d=.02,g=.005;u.inputState.pinching&&h>d+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&h<=d-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new fn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Uw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Nw=`
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

}`;class Ow{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Yn,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new rs({vertexShader:Uw,fragmentShader:Nw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new te(new hn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fw extends $o{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,d=null,g=null;const _=new Ow,p=e.getContextAttributes();let m=null,S=null;const M=[],v=[],R=new Xt;let w=null;const P=new ti;P.viewport=new Oe;const D=new ti;D.viewport=new Oe;const x=[P,D],b=new iS;let N=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let xt=M[st];return xt===void 0&&(xt=new zu,M[st]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function(st){let xt=M[st];return xt===void 0&&(xt=new zu,M[st]=xt),xt.getGripSpace()},this.getHand=function(st){let xt=M[st];return xt===void 0&&(xt=new zu,M[st]=xt),xt.getHandSpace()};function H(st){const xt=v.indexOf(st.inputSource);if(xt===-1)return;const Ft=M[xt];Ft!==void 0&&(Ft.update(st.inputSource,st.frame,u||o),Ft.dispatchEvent({type:st.type,data:st.inputSource}))}function J(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",j);for(let st=0;st<M.length;st++){const xt=v[st];xt!==null&&(v[st]=null,M[st].disconnect(xt))}N=null,B=null,_.reset(),t.setRenderTarget(m),d=null,h=null,f=null,r=null,S=null,pe.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){s=st,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){a=st,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(st){u=st},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(st){if(r=st,r!==null){if(m=t.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",J),r.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(R),r.renderState.layers===void 0){const xt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,xt),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Vs(d.framebufferWidth,d.framebufferHeight,{format:Fi,type:wr,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let xt=null,Ft=null,ct=null;p.depth&&(ct=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=p.stencil?Xo:Io,Ft=p.stencil?Wo:Hs);const Vt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:s};f=new XRWebGLBinding(r,e),h=f.createProjectionLayer(Vt),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),S=new Vs(h.textureWidth,h.textureHeight,{format:Fi,type:wr,depthTexture:new rg(h.textureWidth,h.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),pe.setContext(r),pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(st){for(let xt=0;xt<st.removed.length;xt++){const Ft=st.removed[xt],ct=v.indexOf(Ft);ct>=0&&(v[ct]=null,M[ct].disconnect(Ft))}for(let xt=0;xt<st.added.length;xt++){const Ft=st.added[xt];let ct=v.indexOf(Ft);if(ct===-1){for(let Kt=0;Kt<M.length;Kt++)if(Kt>=v.length){v.push(Ft),ct=Kt;break}else if(v[Kt]===null){v[Kt]=Ft,ct=Kt;break}if(ct===-1)break}const Vt=M[ct];Vt&&Vt.connect(Ft)}}const $=new O,et=new O;function W(st,xt,Ft){$.setFromMatrixPosition(xt.matrixWorld),et.setFromMatrixPosition(Ft.matrixWorld);const ct=$.distanceTo(et),Vt=xt.projectionMatrix.elements,Kt=Ft.projectionMatrix.elements,Gt=Vt[14]/(Vt[10]-1),ye=Vt[14]/(Vt[10]+1),C=(Vt[9]+1)/Vt[5],F=(Vt[9]-1)/Vt[5],T=(Vt[8]-1)/Vt[0],rt=(Kt[8]+1)/Kt[0],K=Gt*T,nt=Gt*rt,ot=ct/(-T+rt),ht=ot*-T;if(xt.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(ht),st.translateZ(ot),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),Vt[10]===-1)st.projectionMatrix.copy(xt.projectionMatrix),st.projectionMatrixInverse.copy(xt.projectionMatrixInverse);else{const it=Gt+ot,A=ye+ot,E=K-ht,z=nt+(ct-ht),q=C*ye/A*it,Z=F*ye/A*it;st.projectionMatrix.makePerspective(E,z,q,Z,it,A),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function vt(st,xt){xt===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(xt.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(r===null)return;let xt=st.near,Ft=st.far;_.texture!==null&&(_.depthNear>0&&(xt=_.depthNear),_.depthFar>0&&(Ft=_.depthFar)),b.near=D.near=P.near=xt,b.far=D.far=P.far=Ft,(N!==b.near||B!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),N=b.near,B=b.far),P.layers.mask=st.layers.mask|2,D.layers.mask=st.layers.mask|4,b.layers.mask=P.layers.mask|D.layers.mask;const ct=st.parent,Vt=b.cameras;vt(b,ct);for(let Kt=0;Kt<Vt.length;Kt++)vt(Vt[Kt],ct);Vt.length===2?W(b,P,D):b.projectionMatrix.copy(P.projectionMatrix),Pt(st,b,ct)};function Pt(st,xt,Ft){Ft===null?st.matrix.copy(xt.matrixWorld):(st.matrix.copy(Ft.matrixWorld),st.matrix.invert(),st.matrix.multiply(xt.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(xt.projectionMatrix),st.projectionMatrixInverse.copy(xt.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=th*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(st){l=st,h!==null&&(h.fixedFoveation=st),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=st)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let At=null;function zt(st,xt){if(c=xt.getViewerPose(u||o),g=xt,c!==null){const Ft=c.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let ct=!1;Ft.length!==b.cameras.length&&(b.cameras.length=0,ct=!0);for(let Kt=0;Kt<Ft.length;Kt++){const Gt=Ft[Kt];let ye=null;if(d!==null)ye=d.getViewport(Gt);else{const F=f.getViewSubImage(h,Gt);ye=F.viewport,Kt===0&&(t.setRenderTargetTextures(S,F.colorTexture,h.ignoreDepthValues?void 0:F.depthStencilTexture),t.setRenderTarget(S))}let C=x[Kt];C===void 0&&(C=new ti,C.layers.enable(Kt),C.viewport=new Oe,x[Kt]=C),C.matrix.fromArray(Gt.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(Gt.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(ye.x,ye.y,ye.width,ye.height),Kt===0&&(b.matrix.copy(C.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ct===!0&&b.cameras.push(C)}const Vt=r.enabledFeatures;if(Vt&&Vt.includes("depth-sensing")){const Kt=f.getDepthInformation(Ft[0]);Kt&&Kt.isValid&&Kt.texture&&_.init(t,Kt,r.renderState)}}for(let Ft=0;Ft<M.length;Ft++){const ct=v[Ft],Vt=M[Ft];ct!==null&&Vt!==void 0&&Vt.update(ct,xt,u||o)}At&&At(st,xt),xt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:xt}),g=null}const pe=new ug;pe.setAnimationLoop(zt),this.setAnimationLoop=function(st){At=st},this.dispose=function(){}}}const bs=new nr,Bw=new We;function kw(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,tg(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,S,M,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),c(p,m)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&d(p,m,v)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,S,M):m.isSpriteMaterial?u(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===wn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===wn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=t.get(m),M=S.envMap,v=S.envMapRotation;M&&(p.envMap.value=M,bs.copy(v),bs.x*=-1,bs.y*=-1,bs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),p.envMapRotation.value.setFromMatrix4(Bw.makeRotationFromEuler(bs)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=M*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===wn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const S=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function zw(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,M){const v=M.program;i.uniformBlockBinding(S,v)}function u(S,M){let v=r[S.id];v===void 0&&(g(S),v=c(S),r[S.id]=v,S.addEventListener("dispose",p));const R=M.program;i.updateUBOMapping(S,R);const w=t.render.frame;s[S.id]!==w&&(h(S),s[S.id]=w)}function c(S){const M=f();S.__bindingPointIndex=M;const v=n.createBuffer(),R=S.__size,w=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,R,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,v),v}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const M=r[S.id],v=S.uniforms,R=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let w=0,P=v.length;w<P;w++){const D=Array.isArray(v[w])?v[w]:[v[w]];for(let x=0,b=D.length;x<b;x++){const N=D[x];if(d(N,w,x,R)===!0){const B=N.__offset,H=Array.isArray(N.value)?N.value:[N.value];let J=0;for(let j=0;j<H.length;j++){const $=H[j],et=_($);typeof $=="number"||typeof $=="boolean"?(N.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,B+J,N.__data)):$.isMatrix3?(N.__data[0]=$.elements[0],N.__data[1]=$.elements[1],N.__data[2]=$.elements[2],N.__data[3]=0,N.__data[4]=$.elements[3],N.__data[5]=$.elements[4],N.__data[6]=$.elements[5],N.__data[7]=0,N.__data[8]=$.elements[6],N.__data[9]=$.elements[7],N.__data[10]=$.elements[8],N.__data[11]=0):($.toArray(N.__data,J),J+=et.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(S,M,v,R){const w=S.value,P=M+"_"+v;if(R[P]===void 0)return typeof w=="number"||typeof w=="boolean"?R[P]=w:R[P]=w.clone(),!0;{const D=R[P];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return R[P]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function g(S){const M=S.uniforms;let v=0;const R=16;for(let P=0,D=M.length;P<D;P++){const x=Array.isArray(M[P])?M[P]:[M[P]];for(let b=0,N=x.length;b<N;b++){const B=x[b],H=Array.isArray(B.value)?B.value:[B.value];for(let J=0,j=H.length;J<j;J++){const $=H[J],et=_($),W=v%R,vt=W%et.boundary,Pt=W+vt;v+=vt,Pt!==0&&R-Pt<et.storage&&(v+=R-Pt),B.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=et.storage}}}const w=v%R;return w>0&&(v+=R-w),S.__size=v,S.__cache={},this}function _(S){const M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function p(S){const M=S.target;M.removeEventListener("dispose",p);const v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function m(){for(const S in r)n.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:u,dispose:m}}class mg{constructor(t={}){const{canvas:e=cM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,m=null;const S=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hi,this.toneMapping=Jr,this.toneMappingExposure=1;const v=this;let R=!1,w=0,P=0,D=null,x=-1,b=null;const N=new Oe,B=new Oe;let H=null;const J=new oe(0);let j=0,$=e.width,et=e.height,W=1,vt=null,Pt=null;const At=new Oe(0,0,$,et),zt=new Oe(0,0,$,et);let pe=!1;const st=new Qh;let xt=!1,Ft=!1;const ct=new We,Vt=new We,Kt=new O,Gt=new Oe,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let C=!1;function F(){return D===null?W:1}let T=i;function rt(y,k){return e.getContext(y,k)}try{const y={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Gh}`),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",Nt,!1),e.addEventListener("webglcontextcreationerror",Lt,!1),T===null){const k="webgl2";if(T=rt(k,y),T===null)throw rt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let K,nt,ot,ht,it,A,E,z,q,Z,Q,St,_t,wt,qt,mt,Dt,Bt,Wt,Ct,ne,Jt,se,V;function It(){K=new jE(T),K.init(),Jt=new Iw(T,K),nt=new WE(T,K,t,Jt),ot=new Pw(T,K),nt.reverseDepthBuffer&&h&&ot.buffers.depth.setReversed(!0),ht=new QE(T),it=new gw,A=new Dw(T,K,ot,it,nt,Jt,ht),E=new YE(v),z=new KE(v),q=new oS(T),se=new VE(T,q),Z=new ZE(T,q,ht,se),Q=new eT(T,Z,q,ht),Wt=new tT(T,nt,A),mt=new XE(it),St=new _w(v,E,z,K,nt,se,mt),_t=new kw(v,it),wt=new yw,qt=new Tw(K),Bt=new HE(v,E,z,ot,Q,d,l),Dt=new Cw(v,Q,nt),V=new zw(T,ht,nt,ot),Ct=new GE(T,K,ht),ne=new JE(T,K,ht),ht.programs=St.programs,v.capabilities=nt,v.extensions=K,v.properties=it,v.renderLists=wt,v.shadowMap=Dt,v.state=ot,v.info=ht}It();const at=new Fw(v,T);this.xr=at,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const y=K.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=K.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(y){y!==void 0&&(W=y,this.setSize($,et,!1))},this.getSize=function(y){return y.set($,et)},this.setSize=function(y,k,X=!0){if(at.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=y,et=k,e.width=Math.floor(y*W),e.height=Math.floor(k*W),X===!0&&(e.style.width=y+"px",e.style.height=k+"px"),this.setViewport(0,0,y,k)},this.getDrawingBufferSize=function(y){return y.set($*W,et*W).floor()},this.setDrawingBufferSize=function(y,k,X){$=y,et=k,W=X,e.width=Math.floor(y*X),e.height=Math.floor(k*X),this.setViewport(0,0,y,k)},this.getCurrentViewport=function(y){return y.copy(N)},this.getViewport=function(y){return y.copy(At)},this.setViewport=function(y,k,X,tt){y.isVector4?At.set(y.x,y.y,y.z,y.w):At.set(y,k,X,tt),ot.viewport(N.copy(At).multiplyScalar(W).round())},this.getScissor=function(y){return y.copy(zt)},this.setScissor=function(y,k,X,tt){y.isVector4?zt.set(y.x,y.y,y.z,y.w):zt.set(y,k,X,tt),ot.scissor(B.copy(zt).multiplyScalar(W).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(y){ot.setScissorTest(pe=y)},this.setOpaqueSort=function(y){vt=y},this.setTransparentSort=function(y){Pt=y},this.getClearColor=function(y){return y.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(y=!0,k=!0,X=!0){let tt=0;if(y){let G=!1;if(D!==null){const Tt=D.texture.format;G=Tt===Kh||Tt===$h||Tt===qh}if(G){const Tt=D.texture.type,Ot=Tt===wr||Tt===Hs||Tt===$a||Tt===Wo||Tt===Xh||Tt===Yh,kt=Bt.getClearColor(),Ht=Bt.getClearAlpha(),ae=kt.r,le=kt.g,Zt=kt.b;Ot?(g[0]=ae,g[1]=le,g[2]=Zt,g[3]=Ht,T.clearBufferuiv(T.COLOR,0,g)):(_[0]=ae,_[1]=le,_[2]=Zt,_[3]=Ht,T.clearBufferiv(T.COLOR,0,_))}else tt|=T.COLOR_BUFFER_BIT}k&&(tt|=T.DEPTH_BUFFER_BIT),X&&(tt|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",Nt,!1),e.removeEventListener("webglcontextcreationerror",Lt,!1),Bt.dispose(),wt.dispose(),qt.dispose(),it.dispose(),E.dispose(),z.dispose(),Q.dispose(),se.dispose(),V.dispose(),St.dispose(),at.dispose(),at.removeEventListener("sessionstart",qn),at.removeEventListener("sessionend",Rr),we.stop()};function pt(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Nt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const y=ht.autoReset,k=Dt.enabled,X=Dt.autoUpdate,tt=Dt.needsUpdate,G=Dt.type;It(),ht.autoReset=y,Dt.enabled=k,Dt.autoUpdate=X,Dt.needsUpdate=tt,Dt.type=G}function Lt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ie(y){const k=y.target;k.removeEventListener("dispose",ie),Le(k)}function Le(y){Ze(y),it.remove(y)}function Ze(y){const k=it.get(y).programs;k!==void 0&&(k.forEach(function(X){St.releaseProgram(X)}),y.isShaderMaterial&&St.releaseShaderCache(y))}this.renderBufferDirect=function(y,k,X,tt,G,Tt){k===null&&(k=ye);const Ot=G.isMesh&&G.matrixWorld.determinant()<0,kt=tn(y,k,X,tt,G);ot.setMaterial(tt,Ot);let Ht=X.index,ae=1;if(tt.wireframe===!0){if(Ht=Z.getWireframeAttribute(X),Ht===void 0)return;ae=2}const le=X.drawRange,Zt=X.attributes.position;let Me=le.start*ae,Ae=(le.start+le.count)*ae;Tt!==null&&(Me=Math.max(Me,Tt.start*ae),Ae=Math.min(Ae,(Tt.start+Tt.count)*ae)),Ht!==null?(Me=Math.max(Me,0),Ae=Math.min(Ae,Ht.count)):Zt!=null&&(Me=Math.max(Me,0),Ae=Math.min(Ae,Zt.count));const Je=Ae-Me;if(Je<0||Je===1/0)return;se.setup(G,tt,kt,X,Ht);let Ye,Ee=Ct;if(Ht!==null&&(Ye=q.get(Ht),Ee=ne,Ee.setIndex(Ye)),G.isMesh)tt.wireframe===!0?(ot.setLineWidth(tt.wireframeLinewidth*F()),Ee.setMode(T.LINES)):Ee.setMode(T.TRIANGLES);else if(G.isLine){let Qt=tt.linewidth;Qt===void 0&&(Qt=1),ot.setLineWidth(Qt*F()),G.isLineSegments?Ee.setMode(T.LINES):G.isLineLoop?Ee.setMode(T.LINE_LOOP):Ee.setMode(T.LINE_STRIP)}else G.isPoints?Ee.setMode(T.POINTS):G.isSprite&&Ee.setMode(T.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Ee.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))Ee.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Qt=G._multiDrawStarts,pn=G._multiDrawCounts,ge=G._multiDrawCount,mn=Ht?q.get(Ht).bytesPerElement:1,Pr=it.get(tt).currentProgram.getUniforms();for(let Fn=0;Fn<ge;Fn++)Pr.setValue(T,"_gl_DrawID",Fn),Ee.render(Qt[Fn]/mn,pn[Fn])}else if(G.isInstancedMesh)Ee.renderInstances(Me,Je,G.count);else if(X.isInstancedBufferGeometry){const Qt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,pn=Math.min(X.instanceCount,Qt);Ee.renderInstances(Me,Je,pn)}else Ee.render(Me,Je)};function be(y,k,X){y.transparent===!0&&y.side===xe&&y.forceSinglePass===!1?(y.side=wn,y.needsUpdate=!0,Si(y,k,X),y.side=Tr,y.needsUpdate=!0,Si(y,k,X),y.side=xe):Si(y,k,X)}this.compile=function(y,k,X=null){X===null&&(X=y),m=qt.get(X),m.init(k),M.push(m),X.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),y!==X&&y.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights();const tt=new Set;return y.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const Tt=G.material;if(Tt)if(Array.isArray(Tt))for(let Ot=0;Ot<Tt.length;Ot++){const kt=Tt[Ot];be(kt,X,G),tt.add(kt)}else be(Tt,X,G),tt.add(Tt)}),M.pop(),m=null,tt},this.compileAsync=function(y,k,X=null){const tt=this.compile(y,k,X);return new Promise(G=>{function Tt(){if(tt.forEach(function(Ot){it.get(Ot).currentProgram.isReady()&&tt.delete(Ot)}),tt.size===0){G(y);return}setTimeout(Tt,10)}K.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let an=null;function Te(y){an&&an(y)}function qn(){we.stop()}function Rr(){we.start()}const we=new ug;we.setAnimationLoop(Te),typeof self<"u"&&we.setContext(self),this.setAnimationLoop=function(y){an=y,at.setAnimationLoop(y),y===null?we.stop():we.start()},at.addEventListener("sessionstart",qn),at.addEventListener("sessionend",Rr),this.render=function(y,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(k),k=at.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,k,D),m=qt.get(y,M.length),m.init(k),M.push(m),Vt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),st.setFromProjectionMatrix(Vt),Ft=this.localClippingEnabled,xt=mt.init(this.clippingPlanes,Ft),p=wt.get(y,S.length),p.init(),S.push(p),at.enabled===!0&&at.isPresenting===!0){const Tt=v.xr.getDepthSensingMesh();Tt!==null&&jt(Tt,k,-1/0,v.sortObjects)}jt(y,k,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(vt,Pt),C=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,C&&Bt.addToRenderList(p,y),this.info.render.frame++,xt===!0&&mt.beginShadows();const X=m.state.shadowsArray;Dt.render(X,y,k),xt===!0&&mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const tt=p.opaque,G=p.transmissive;if(m.setupLights(),k.isArrayCamera){const Tt=k.cameras;if(G.length>0)for(let Ot=0,kt=Tt.length;Ot<kt;Ot++){const Ht=Tt[Ot];os(tt,G,y,Ht)}C&&Bt.render(y);for(let Ot=0,kt=Tt.length;Ot<kt;Ot++){const Ht=Tt[Ot];Xs(p,y,Ht,Ht.viewport)}}else G.length>0&&os(tt,G,y,k),C&&Bt.render(y),Xs(p,y,k);D!==null&&(A.updateMultisampleRenderTarget(D),A.updateRenderTargetMipmap(D)),y.isScene===!0&&y.onAfterRender(v,y,k),se.resetDefaultState(),x=-1,b=null,M.pop(),M.length>0?(m=M[M.length-1],xt===!0&&mt.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,S.pop(),S.length>0?p=S[S.length-1]:p=null};function jt(y,k,X,tt){if(y.visible===!1)return;if(y.layers.test(k.layers)){if(y.isGroup)X=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(k);else if(y.isLight)m.pushLight(y),y.castShadow&&m.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||st.intersectsSprite(y)){tt&&Gt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Vt);const Ot=Q.update(y),kt=y.material;kt.visible&&p.push(y,Ot,kt,X,Gt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||st.intersectsObject(y))){const Ot=Q.update(y),kt=y.material;if(tt&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Gt.copy(y.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),Gt.copy(Ot.boundingSphere.center)),Gt.applyMatrix4(y.matrixWorld).applyMatrix4(Vt)),Array.isArray(kt)){const Ht=Ot.groups;for(let ae=0,le=Ht.length;ae<le;ae++){const Zt=Ht[ae],Me=kt[Zt.materialIndex];Me&&Me.visible&&p.push(y,Ot,Me,X,Gt.z,Zt)}}else kt.visible&&p.push(y,Ot,kt,X,Gt.z,null)}}const Tt=y.children;for(let Ot=0,kt=Tt.length;Ot<kt;Ot++)jt(Tt[Ot],k,X,tt)}function Xs(y,k,X,tt){const G=y.opaque,Tt=y.transmissive,Ot=y.transparent;m.setupLightsView(X),xt===!0&&mt.setGlobalState(v.clippingPlanes,X),tt&&ot.viewport(N.copy(tt)),G.length>0&&Vi(G,k,X),Tt.length>0&&Vi(Tt,k,X),Ot.length>0&&Vi(Ot,k,X),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function os(y,k,X,tt){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[tt.id]===void 0&&(m.state.transmissionRenderTarget[tt.id]=new Vs(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?tl:wr,minFilter:Us,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace}));const Tt=m.state.transmissionRenderTarget[tt.id],Ot=tt.viewport||N;Tt.setSize(Ot.z,Ot.w);const kt=v.getRenderTarget();v.setRenderTarget(Tt),v.getClearColor(J),j=v.getClearAlpha(),j<1&&v.setClearColor(16777215,.5),v.clear(),C&&Bt.render(X);const Ht=v.toneMapping;v.toneMapping=Jr;const ae=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),m.setupLightsView(tt),xt===!0&&mt.setGlobalState(v.clippingPlanes,tt),Vi(y,X,tt),A.updateMultisampleRenderTarget(Tt),A.updateRenderTargetMipmap(Tt),K.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let Zt=0,Me=k.length;Zt<Me;Zt++){const Ae=k[Zt],Je=Ae.object,Ye=Ae.geometry,Ee=Ae.material,Qt=Ae.group;if(Ee.side===xe&&Je.layers.test(tt.layers)){const pn=Ee.side;Ee.side=wn,Ee.needsUpdate=!0,Ys(Je,X,tt,Ye,Ee,Qt),Ee.side=pn,Ee.needsUpdate=!0,le=!0}}le===!0&&(A.updateMultisampleRenderTarget(Tt),A.updateRenderTargetMipmap(Tt))}v.setRenderTarget(kt),v.setClearColor(J,j),ae!==void 0&&(tt.viewport=ae),v.toneMapping=Ht}function Vi(y,k,X){const tt=k.isScene===!0?k.overrideMaterial:null;for(let G=0,Tt=y.length;G<Tt;G++){const Ot=y[G],kt=Ot.object,Ht=Ot.geometry,ae=tt===null?Ot.material:tt,le=Ot.group;kt.layers.test(X.layers)&&Ys(kt,k,X,Ht,ae,le)}}function Ys(y,k,X,tt,G,Tt){y.onBeforeRender(v,k,X,tt,G,Tt),y.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),G.onBeforeRender(v,k,X,tt,y,Tt),G.transparent===!0&&G.side===xe&&G.forceSinglePass===!1?(G.side=wn,G.needsUpdate=!0,v.renderBufferDirect(X,k,tt,G,y,Tt),G.side=Tr,G.needsUpdate=!0,v.renderBufferDirect(X,k,tt,G,y,Tt),G.side=xe):v.renderBufferDirect(X,k,tt,G,y,Tt),y.onAfterRender(v,k,X,tt,G,Tt)}function Si(y,k,X){k.isScene!==!0&&(k=ye);const tt=it.get(y),G=m.state.lights,Tt=m.state.shadowsArray,Ot=G.state.version,kt=St.getParameters(y,G.state,Tt,k,X),Ht=St.getProgramCacheKey(kt);let ae=tt.programs;tt.environment=y.isMeshStandardMaterial?k.environment:null,tt.fog=k.fog,tt.envMap=(y.isMeshStandardMaterial?z:E).get(y.envMap||tt.environment),tt.envMapRotation=tt.environment!==null&&y.envMap===null?k.environmentRotation:y.envMapRotation,ae===void 0&&(y.addEventListener("dispose",ie),ae=new Map,tt.programs=ae);let le=ae.get(Ht);if(le!==void 0){if(tt.currentProgram===le&&tt.lightsStateVersion===Ot)return $s(y,kt),le}else kt.uniforms=St.getUniforms(y),y.onBeforeCompile(kt,v),le=St.acquireProgram(kt,Ht),ae.set(Ht,le),tt.uniforms=kt.uniforms;const Zt=tt.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Zt.clippingPlanes=mt.uniform),$s(y,kt),tt.needsLights=Jo(y),tt.lightsStateVersion=Ot,tt.needsLights&&(Zt.ambientLightColor.value=G.state.ambient,Zt.lightProbe.value=G.state.probe,Zt.directionalLights.value=G.state.directional,Zt.directionalLightShadows.value=G.state.directionalShadow,Zt.spotLights.value=G.state.spot,Zt.spotLightShadows.value=G.state.spotShadow,Zt.rectAreaLights.value=G.state.rectArea,Zt.ltc_1.value=G.state.rectAreaLTC1,Zt.ltc_2.value=G.state.rectAreaLTC2,Zt.pointLights.value=G.state.point,Zt.pointLightShadows.value=G.state.pointShadow,Zt.hemisphereLights.value=G.state.hemi,Zt.directionalShadowMap.value=G.state.directionalShadowMap,Zt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Zt.spotShadowMap.value=G.state.spotShadowMap,Zt.spotLightMatrix.value=G.state.spotLightMatrix,Zt.spotLightMap.value=G.state.spotLightMap,Zt.pointShadowMap.value=G.state.pointShadowMap,Zt.pointShadowMatrix.value=G.state.pointShadowMatrix),tt.currentProgram=le,tt.uniformsList=null,le}function qs(y){if(y.uniformsList===null){const k=y.currentProgram.getUniforms();y.uniformsList=Kl.seqWithValue(k.seq,y.uniforms)}return y.uniformsList}function $s(y,k){const X=it.get(y);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.batchingColor=k.batchingColor,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function tn(y,k,X,tt,G){k.isScene!==!0&&(k=ye),A.resetTextureUnits();const Tt=k.fog,Ot=tt.isMeshStandardMaterial?k.environment:null,kt=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Yo,Ht=(tt.isMeshStandardMaterial?z:E).get(tt.envMap||Ot),ae=tt.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,le=!!X.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Zt=!!X.morphAttributes.position,Me=!!X.morphAttributes.normal,Ae=!!X.morphAttributes.color;let Je=Jr;tt.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Je=v.toneMapping);const Ye=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ee=Ye!==void 0?Ye.length:0,Qt=it.get(tt),pn=m.state.lights;if(xt===!0&&(Ft===!0||y!==b)){const Cn=y===b&&tt.id===x;mt.setState(tt,y,Cn)}let ge=!1;tt.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==pn.state.version||Qt.outputColorSpace!==kt||G.isBatchedMesh&&Qt.batching===!1||!G.isBatchedMesh&&Qt.batching===!0||G.isBatchedMesh&&Qt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Qt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Qt.instancing===!1||!G.isInstancedMesh&&Qt.instancing===!0||G.isSkinnedMesh&&Qt.skinning===!1||!G.isSkinnedMesh&&Qt.skinning===!0||G.isInstancedMesh&&Qt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Qt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Qt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Qt.instancingMorph===!1&&G.morphTexture!==null||Qt.envMap!==Ht||tt.fog===!0&&Qt.fog!==Tt||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==mt.numPlanes||Qt.numIntersection!==mt.numIntersection)||Qt.vertexAlphas!==ae||Qt.vertexTangents!==le||Qt.morphTargets!==Zt||Qt.morphNormals!==Me||Qt.morphColors!==Ae||Qt.toneMapping!==Je||Qt.morphTargetsCount!==Ee)&&(ge=!0):(ge=!0,Qt.__version=tt.version);let mn=Qt.currentProgram;ge===!0&&(mn=Si(tt,k,G));let Pr=!1,Fn=!1,cs=!1;const Ve=mn.getUniforms(),Bn=Qt.uniforms;if(ot.useProgram(mn.program)&&(Pr=!0,Fn=!0,cs=!0),tt.id!==x&&(x=tt.id,Fn=!0),Pr||b!==y){ot.buffers.depth.getReversed()?(ct.copy(y.projectionMatrix),fM(ct),hM(ct),Ve.setValue(T,"projectionMatrix",ct)):Ve.setValue(T,"projectionMatrix",y.projectionMatrix),Ve.setValue(T,"viewMatrix",y.matrixWorldInverse);const kn=Ve.map.cameraPosition;kn!==void 0&&kn.setValue(T,Kt.setFromMatrixPosition(y.matrixWorld)),nt.logarithmicDepthBuffer&&Ve.setValue(T,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&Ve.setValue(T,"isOrthographic",y.isOrthographicCamera===!0),b!==y&&(b=y,Fn=!0,cs=!0)}if(G.isSkinnedMesh){Ve.setOptional(T,G,"bindMatrix"),Ve.setOptional(T,G,"bindMatrixInverse");const Cn=G.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),Ve.setValue(T,"boneTexture",Cn.boneTexture,A))}G.isBatchedMesh&&(Ve.setOptional(T,G,"batchingTexture"),Ve.setValue(T,"batchingTexture",G._matricesTexture,A),Ve.setOptional(T,G,"batchingIdTexture"),Ve.setValue(T,"batchingIdTexture",G._indirectTexture,A),Ve.setOptional(T,G,"batchingColorTexture"),G._colorsTexture!==null&&Ve.setValue(T,"batchingColorTexture",G._colorsTexture,A));const oi=X.morphAttributes;if((oi.position!==void 0||oi.normal!==void 0||oi.color!==void 0)&&Wt.update(G,X,mn),(Fn||Qt.receiveShadow!==G.receiveShadow)&&(Qt.receiveShadow=G.receiveShadow,Ve.setValue(T,"receiveShadow",G.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(Bn.envMap.value=Ht,Bn.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),tt.isMeshStandardMaterial&&tt.envMap===null&&k.environment!==null&&(Bn.envMapIntensity.value=k.environmentIntensity),Fn&&(Ve.setValue(T,"toneMappingExposure",v.toneMappingExposure),Qt.needsLights&&as(Bn,cs),Tt&&tt.fog===!0&&_t.refreshFogUniforms(Bn,Tt),_t.refreshMaterialUniforms(Bn,tt,W,et,m.state.transmissionRenderTarget[y.id]),Kl.upload(T,qs(Qt),Bn,A)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(Kl.upload(T,qs(Qt),Bn,A),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&Ve.setValue(T,"center",G.center),Ve.setValue(T,"modelViewMatrix",G.modelViewMatrix),Ve.setValue(T,"normalMatrix",G.normalMatrix),Ve.setValue(T,"modelMatrix",G.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const Cn=tt.uniformsGroups;for(let kn=0,rl=Cn.length;kn<rl;kn++){const Dr=Cn[kn];V.update(Dr,mn),V.bind(Dr,mn)}}return mn}function as(y,k){y.ambientLightColor.needsUpdate=k,y.lightProbe.needsUpdate=k,y.directionalLights.needsUpdate=k,y.directionalLightShadows.needsUpdate=k,y.pointLights.needsUpdate=k,y.pointLightShadows.needsUpdate=k,y.spotLights.needsUpdate=k,y.spotLightShadows.needsUpdate=k,y.rectAreaLights.needsUpdate=k,y.hemisphereLights.needsUpdate=k}function Jo(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(y,k,X){it.get(y.texture).__webglTexture=k,it.get(y.depthTexture).__webglTexture=X;const tt=it.get(y);tt.__hasExternalTextures=!0,tt.__autoAllocateDepthBuffer=X===void 0,tt.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),tt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,k){const X=it.get(y);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(y,k=0,X=0){D=y,w=k,P=X;let tt=!0,G=null,Tt=!1,Ot=!1;if(y){const Ht=it.get(y);if(Ht.__useDefaultFramebuffer!==void 0)ot.bindFramebuffer(T.FRAMEBUFFER,null),tt=!1;else if(Ht.__webglFramebuffer===void 0)A.setupRenderTarget(y);else if(Ht.__hasExternalTextures)A.rebindTextures(y,it.get(y.texture).__webglTexture,it.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Zt=y.depthTexture;if(Ht.__boundDepthTexture!==Zt){if(Zt!==null&&it.has(Zt)&&(y.width!==Zt.image.width||y.height!==Zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(y)}}const ae=y.texture;(ae.isData3DTexture||ae.isDataArrayTexture||ae.isCompressedArrayTexture)&&(Ot=!0);const le=it.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(le[k])?G=le[k][X]:G=le[k],Tt=!0):y.samples>0&&A.useMultisampledRTT(y)===!1?G=it.get(y).__webglMultisampledFramebuffer:Array.isArray(le)?G=le[X]:G=le,N.copy(y.viewport),B.copy(y.scissor),H=y.scissorTest}else N.copy(At).multiplyScalar(W).floor(),B.copy(zt).multiplyScalar(W).floor(),H=pe;if(ot.bindFramebuffer(T.FRAMEBUFFER,G)&&tt&&ot.drawBuffers(y,G),ot.viewport(N),ot.scissor(B),ot.setScissorTest(H),Tt){const Ht=it.get(y.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ht.__webglTexture,X)}else if(Ot){const Ht=it.get(y.texture),ae=k||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Ht.__webglTexture,X||0,ae)}x=-1},this.readRenderTargetPixels=function(y,k,X,tt,G,Tt,Ot){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=it.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ot!==void 0&&(kt=kt[Ot]),kt){ot.bindFramebuffer(T.FRAMEBUFFER,kt);try{const Ht=y.texture,ae=Ht.format,le=Ht.type;if(!nt.textureFormatReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=y.width-tt&&X>=0&&X<=y.height-G&&T.readPixels(k,X,tt,G,Jt.convert(ae),Jt.convert(le),Tt)}finally{const Ht=D!==null?it.get(D).__webglFramebuffer:null;ot.bindFramebuffer(T.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(y,k,X,tt,G,Tt,Ot){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=it.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ot!==void 0&&(kt=kt[Ot]),kt){const Ht=y.texture,ae=Ht.format,le=Ht.type;if(!nt.textureFormatReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=y.width-tt&&X>=0&&X<=y.height-G){ot.bindFramebuffer(T.FRAMEBUFFER,kt);const Zt=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Zt),T.bufferData(T.PIXEL_PACK_BUFFER,Tt.byteLength,T.STREAM_READ),T.readPixels(k,X,tt,G,Jt.convert(ae),Jt.convert(le),0);const Me=D!==null?it.get(D).__webglFramebuffer:null;ot.bindFramebuffer(T.FRAMEBUFFER,Me);const Ae=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await uM(T,Ae,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Zt),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,Tt),T.deleteBuffer(Zt),T.deleteSync(Ae),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,k=null,X=0){y.isTexture!==!0&&(_o("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,y=arguments[1]);const tt=Math.pow(2,-X),G=Math.floor(y.image.width*tt),Tt=Math.floor(y.image.height*tt),Ot=k!==null?k.x:0,kt=k!==null?k.y:0;A.setTexture2D(y,0),T.copyTexSubImage2D(T.TEXTURE_2D,X,0,0,Ot,kt,G,Tt),ot.unbindTexture()};const ls=T.createFramebuffer(),yt=T.createFramebuffer();this.copyTextureToTexture=function(y,k,X=null,tt=null,G=0,Tt=null){y.isTexture!==!0&&(_o("WebGLRenderer: copyTextureToTexture function signature has changed."),tt=arguments[0]||null,y=arguments[1],k=arguments[2],Tt=arguments[3]||0,X=null),Tt===null&&(G!==0?(_o("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=G,G=0):Tt=0);let Ot,kt,Ht,ae,le,Zt,Me,Ae,Je;const Ye=y.isCompressedTexture?y.mipmaps[Tt]:y.image;if(X!==null)Ot=X.max.x-X.min.x,kt=X.max.y-X.min.y,Ht=X.isBox3?X.max.z-X.min.z:1,ae=X.min.x,le=X.min.y,Zt=X.isBox3?X.min.z:0;else{const oi=Math.pow(2,-G);Ot=Math.floor(Ye.width*oi),kt=Math.floor(Ye.height*oi),y.isDataArrayTexture?Ht=Ye.depth:y.isData3DTexture?Ht=Math.floor(Ye.depth*oi):Ht=1,ae=0,le=0,Zt=0}tt!==null?(Me=tt.x,Ae=tt.y,Je=tt.z):(Me=0,Ae=0,Je=0);const Ee=Jt.convert(k.format),Qt=Jt.convert(k.type);let pn;k.isData3DTexture?(A.setTexture3D(k,0),pn=T.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(A.setTexture2DArray(k,0),pn=T.TEXTURE_2D_ARRAY):(A.setTexture2D(k,0),pn=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,k.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,k.unpackAlignment);const ge=T.getParameter(T.UNPACK_ROW_LENGTH),mn=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Pr=T.getParameter(T.UNPACK_SKIP_PIXELS),Fn=T.getParameter(T.UNPACK_SKIP_ROWS),cs=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,Ye.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Ye.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,ae),T.pixelStorei(T.UNPACK_SKIP_ROWS,le),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Zt);const Ve=y.isDataArrayTexture||y.isData3DTexture,Bn=k.isDataArrayTexture||k.isData3DTexture;if(y.isDepthTexture){const oi=it.get(y),Cn=it.get(k),kn=it.get(oi.__renderTarget),rl=it.get(Cn.__renderTarget);ot.bindFramebuffer(T.READ_FRAMEBUFFER,kn.__webglFramebuffer),ot.bindFramebuffer(T.DRAW_FRAMEBUFFER,rl.__webglFramebuffer);for(let Dr=0;Dr<Ht;Dr++)Ve&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,it.get(y).__webglTexture,G,Zt+Dr),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,it.get(k).__webglTexture,Tt,Je+Dr)),T.blitFramebuffer(ae,le,Ot,kt,Me,Ae,Ot,kt,T.DEPTH_BUFFER_BIT,T.NEAREST);ot.bindFramebuffer(T.READ_FRAMEBUFFER,null),ot.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(G!==0||y.isRenderTargetTexture||it.has(y)){const oi=it.get(y),Cn=it.get(k);ot.bindFramebuffer(T.READ_FRAMEBUFFER,ls),ot.bindFramebuffer(T.DRAW_FRAMEBUFFER,yt);for(let kn=0;kn<Ht;kn++)Ve?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,oi.__webglTexture,G,Zt+kn):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,oi.__webglTexture,G),Bn?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Cn.__webglTexture,Tt,Je+kn):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Cn.__webglTexture,Tt),G!==0?T.blitFramebuffer(ae,le,Ot,kt,Me,Ae,Ot,kt,T.COLOR_BUFFER_BIT,T.NEAREST):Bn?T.copyTexSubImage3D(pn,Tt,Me,Ae,Je+kn,ae,le,Ot,kt):T.copyTexSubImage2D(pn,Tt,Me,Ae,ae,le,Ot,kt);ot.bindFramebuffer(T.READ_FRAMEBUFFER,null),ot.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else Bn?y.isDataTexture||y.isData3DTexture?T.texSubImage3D(pn,Tt,Me,Ae,Je,Ot,kt,Ht,Ee,Qt,Ye.data):k.isCompressedArrayTexture?T.compressedTexSubImage3D(pn,Tt,Me,Ae,Je,Ot,kt,Ht,Ee,Ye.data):T.texSubImage3D(pn,Tt,Me,Ae,Je,Ot,kt,Ht,Ee,Qt,Ye):y.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,Tt,Me,Ae,Ot,kt,Ee,Qt,Ye.data):y.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,Tt,Me,Ae,Ye.width,Ye.height,Ee,Ye.data):T.texSubImage2D(T.TEXTURE_2D,Tt,Me,Ae,Ot,kt,Ee,Qt,Ye);T.pixelStorei(T.UNPACK_ROW_LENGTH,ge),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,mn),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Pr),T.pixelStorei(T.UNPACK_SKIP_ROWS,Fn),T.pixelStorei(T.UNPACK_SKIP_IMAGES,cs),Tt===0&&k.generateMipmaps&&T.generateMipmap(pn),ot.unbindTexture()},this.copyTextureToTexture3D=function(y,k,X=null,tt=null,G=0){return y.isTexture!==!0&&(_o("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,tt=arguments[1]||null,y=arguments[2],k=arguments[3],G=arguments[4]||0),_o('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,k,X,tt,G)},this.initRenderTarget=function(y){it.get(y).__webglFramebuffer===void 0&&A.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?A.setTextureCube(y,0):y.isData3DTexture?A.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?A.setTexture2DArray(y,0):A.setTexture2D(y,0),ot.unbindTexture()},this.resetState=function(){w=0,P=0,D=null,ot.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ce._getUnpackColorSpace()}}function Hw(n){const t=de([]);let e,i,r,s=new Xt,o=new Xt;const a=[{depth:-2,scale:6.1,name:"sky",title:"SKYFOLD MATTE",subtitle:"天幕底片 / 高空异象保留位",aspect:16/9,accent:"rgba(255, 231, 178, 0.92)"},{depth:-.4,scale:4.6,name:"boy",title:"SCALE FIGURE",subtitle:"远景尺度参照 / 人类尺寸锚点",aspect:4/5,accent:"rgba(144, 214, 255, 0.9)"},{depth:1.1,scale:3.9,name:"woman",title:"HERO SILHOUETTE",subtitle:"主角剪影保留位 / 第一眼情绪层",aspect:4/5,accent:"rgba(255, 216, 143, 0.92)"},{depth:2.5,scale:5.3,name:"grass",title:"WIND FOREGROUND",subtitle:"前景风场 / 速度线与遮挡层",aspect:21/9,accent:"rgba(255, 255, 255, 0.9)"}],l=()=>{e=new ig,i=new ti(55,window.innerWidth/window.innerHeight,.1,1e3),i.position.z=6,n.value&&(r=new mg({canvas:n.value,antialias:!0,alpha:!1}),r.setClearColor(328965,1),r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(window.devicePixelRatio),r.sortObjects=!0)},u=_=>{const p=document.createElement("canvas");p.width=1600,p.height=Math.round(p.width/_.aspect);const m=p.getContext("2d");if(!m)return new Hp(p);m.fillStyle="#050505",m.fillRect(0,0,p.width,p.height),m.strokeStyle="rgba(255,255,255,0.18)",m.lineWidth=4,m.strokeRect(28,28,p.width-56,p.height-56),m.strokeStyle=_.accent.replace("0.92","0.22").replace("0.9","0.22"),m.lineWidth=1.5,m.setLineDash([14,12]),m.strokeRect(58,58,p.width-116,p.height-116),m.setLineDash([]),m.fillStyle="rgba(255,255,255,0.035)";for(let M=0;M<4;M+=1)m.fillRect(88,124+M*26,p.width-176,6);m.fillStyle="rgba(255,255,255,0.22)",m.font='700 48px "Space Mono", monospace',m.fillText(_.title,88,200),m.fillStyle="rgba(255,255,255,0.14)",m.font='500 24px "Space Mono", monospace',m.fillText(_.subtitle,88,242),m.fillStyle="rgba(255,255,255,0.12)",m.font='400 18px "Space Mono", monospace',m.fillText(`LAYER / ${_.name.toUpperCase()} / DEPTH ${_.depth}`,88,p.height-84);const S=new Hp(p);return S.needsUpdate=!0,S},c=()=>{t.value.forEach((_,p)=>{const m=p%2===0?-1:1,S=_.material;Mt.killTweensOf(_.position),Mt.killTweensOf(_.rotation),Mt.killTweensOf(S),_.position.x=m*(11+p*2.2),_.position.y=p===0?-.35:p===3?.35:0,_.rotation.y=m*.9,_.rotation.z=m*.04,S.opacity=.12,Mt.to(_.position,{x:0,y:0,duration:1.6,delay:p*.16,ease:"power3.out"}),Mt.to(_.rotation,{y:0,z:0,duration:1.5,delay:p*.16,ease:"power2.out"}),Mt.to(S,{opacity:1,duration:1.1,delay:p*.16+.12,ease:"power2.inOut"})})},f=()=>{a.forEach((_,p)=>{const m=u(_),S=new hn(_.aspect*_.scale,_.scale),M=new he({map:m,transparent:!1,side:xe,color:new oe(1,1,1),depthWrite:!0}),v=new te(S,M);v.position.set(0,0,_.depth),v.userData.name=_.name,v.renderOrder=-_.depth,v.position.x=0,v.rotation.y=0,v.material.opacity=1,e&&e.add(v),t.value.push(v)}),requestAnimationFrame(()=>{c()})},h=()=>{requestAnimationFrame(h),s.x+=(o.x-s.x)*.08,s.y+=(o.y-s.y)*.08,t.value.forEach(S=>{const M=S.position.z*.5;S.position.x=s.x*M,S.position.y=-s.y*M});const _=t.value.find(S=>S.userData.name==="grass");_&&(_.rotation.z=Math.sin(Date.now()*.001)*.02);const p=t.value.find(S=>S.userData.name==="woman");p&&(p.rotation.z=Math.sin(Date.now()*8e-4)*.015);const m=t.value.find(S=>S.userData.name==="sky");m&&(m.position.x+=Math.sin(Date.now()*3e-4)*.001),r&&e&&i&&r.render(e,i)};return{initScene:l,loadLayers:f,playArchiveReveal:c,animate:h,onResize:()=>{!i||!r||(i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight))},updateMouseTarget:_=>{o.x=_.clientX/window.innerWidth-.5,o.y=_.clientY/window.innerHeight-.5},layers:t,scene:e,camera:i,renderer:r,mouse:s,targetMouse:o}}function Vw(n,t,e,i){return{onMouseMove:a=>{},onClick:a=>{const l=new cg,u=new Xt;u.x=a.clientX/window.innerWidth*2-1,u.y=-(a.clientY/window.innerHeight)*2+1,l.setFromCamera(u,i);const c=l.intersectObjects(e.value);if(c.length>0){const f=c[0].object,h=f.userData.name;Mt.timeline().to(f.scale,{x:1.1,y:1.1,z:1.1,duration:.2,ease:"power2.out"}).to(f.scale,{x:1,y:1,z:1,duration:.3,ease:"elastic.out(1, 0.5)"}),Mt.timeline().to(f.rotation,{z:Math.random()>.5?.1:-.1,duration:.2,ease:"power1.out"}).to(f.rotation,{z:0,duration:.4,ease:"elastic.out(1, 0.3)"});const d={woman:"展签 01 / 前景人物层。用于建立主视觉的第一眼情绪和风向。正式 CG 中她会被替换成进入 WERISS 的现场角色。",boy:"展签 02 / 远景陪体层。这个位置负责提供尺度参照，让山体和天空的压迫感有了可比较的人类尺寸。",grass:"展签 03 / 前景风场层。它不只是草，而是镜头前方的速度线。风一旦成立，整个画面就开始有叙事。",sky:"展签 04 / 天幕底片层。后续会叠加红脊、极光磁暴或 skyfold 光带，这里是所有关键 CG 的情绪起点。"};d[h]&&(t.value=d[h])}},startExplore:()=>{n.value=!0,Mt.timeline().to(i.position,{z:5.5,duration:2,ease:"power2.inOut"}).to(i.rotation,{z:.02,duration:.5,ease:"power1.inOut",yoyo:!0,repeat:1},"-=1");const a=e.value.find(l=>l.userData.name==="grass");a&&Mt.timeline().to(a.scale,{x:.7,y:.7,z:.7,duration:2,ease:"power2.inOut"}).to(a.position,{y:.5,duration:2,ease:"power2.inOut"},"-=2"),e.value.forEach((l,u)=>{l.userData.name!=="grass"&&Mt.to(l.position,{y:l.position.y+(Math.random()-.5)*.3,duration:2,ease:"power1.inOut",delay:u*.1})})}}}const Gw={class:"page-monet"},Ww={class:"glass-card"},Xw={class:"handwriting"},Yw={key:0,class:"branch-tree-stage"},qw={class:"branch-tree-plane"},$w={class:"tree-trunk-id"},Kw={class:"tree-choice-id"},jw={class:"tree-next-step"},Zw={class:"tree-choice-id"},Jw={__name:"MonetView",props:{active:{type:Boolean,required:!0}},setup(n){const t=n,e=de(null),i=de(!1),r=de(null),s=[{id:"ENTRY",title:"进入回响链接",note:"起点 / ECHO DESK 接入 WERISS。",x:50,y:84,kind:"root"},{id:"Ω-01",title:"红脊初判",note:"第一次判断风险基调。",x:50,y:208,kind:"event"},{id:"Ψ-02",title:"发光雾墙",note:"不管前一轮怎么选，都会汇入这一轮。",x:50,y:620,kind:"event"},{id:"Δ-03",title:"蓝裂口",note:"第二轮选择后，故事继续向下推进。",x:50,y:1020,kind:"event"},{id:"Λ-04",title:"双地图失真",note:"第三轮之后，路线重新汇入主干。",x:50,y:1420,kind:"event"},{id:"X-05",title:"天穹展开",note:"最后一轮主干事件，下一次分叉直接导向结局。",x:50,y:1820,kind:"event"}],o=[{id:"fork-a",x:50,y:310,label:"分叉 A",note:"第一次建议"},{id:"fork-b",x:50,y:710,label:"分叉 B",note:"雾墙抉择"},{id:"fork-c",x:50,y:1110,label:"分叉 C",note:"裂口抉择"},{id:"fork-d",x:50,y:1510,label:"分叉 D",note:"失真抉择"},{id:"fork-e",x:50,y:1910,label:"终局分叉",note:"结局入口"}],a=[{id:"A1",label:"高处确认",note:"稳住视野，风险较低。",next:"Ψ-02",x:22,y:420,tone:"calm"},{id:"A2",label:"继续逼近",note:"真相推进更快。",next:"Ψ-02",x:50,y:446,tone:"risk"},{id:"A3",label:"校准传感器",note:"先拿参数，再继续推进。",next:"Ψ-02",x:78,y:420,tone:"calm"},{id:"B1",label:"穿越雾墙",note:"直接冲进更深层画面。",next:"Δ-03",x:20,y:820,tone:"risk"},{id:"B2",label:"后撤保链",note:"优先维持稳定。",next:"Δ-03",x:50,y:846,tone:"calm"},{id:"B3",label:"横移找掩体",note:"保留中间态继续观察。",next:"Δ-03",x:80,y:820,tone:"calm"},{id:"C1",label:"沿边缘前进",note:"不直接下裂口。",next:"Λ-04",x:22,y:1220,tone:"calm"},{id:"C2",label:"直接下行",note:"进入深部奇观线。",next:"Λ-04",x:50,y:1246,tone:"reveal"},{id:"C3",label:"先放探针",note:"以更稳方式拿证据。",next:"Λ-04",x:78,y:1220,tone:"reveal"},{id:"D1",label:"盲走地形",note:"信脚下，不信地图。",next:"X-05",x:22,y:1620,tone:"calm"},{id:"D2",label:"锁旧地图",note:"真相更近，现实更薄。",next:"X-05",x:50,y:1646,tone:"risk"},{id:"D3",label:"切掉辅助层",note:"保链路，失去部分视野。",next:"X-05",x:78,y:1620,tone:"reveal"}],l=[{id:"E1",label:"返回",note:"生还结局 / 带回残缺记录。",x:22,y:2056},{id:"E2",label:"继续深入",note:"求真结局 / 链路逐步熄灭。",x:50,y:2072},{id:"E3",label:"原地维持链路",note:"回响结局 / 形成循环闭环。",x:78,y:2056}],{initScene:u,loadLayers:c,playArchiveReveal:f,animate:h,onResize:d,updateMouseTarget:g,layers:_,camera:p,renderer:m}=Hw(e),{onClick:S,startExplore:M}=Vw(i,r,_,p),v=()=>{i.value=!1,r.value=null,p&&(Mt.killTweensOf(p.position),Mt.killTweensOf(p.rotation),Mt.to(p.position,{z:6,duration:1.2,ease:"power2.inOut"}),Mt.to(p.rotation,{z:0,duration:.9,ease:"power2.out"})),_.value.forEach(w=>{Mt.killTweensOf(w.position),Mt.killTweensOf(w.scale),Mt.killTweensOf(w.rotation),Mt.to(w.position,{x:0,y:0,duration:.9,ease:"power2.out"}),Mt.to(w.scale,{x:1,y:1,z:1,duration:.9,ease:"power2.out"}),Mt.to(w.rotation,{z:0,duration:.9,ease:"power2.out"})}),Zn(()=>{const w=document.querySelector(".branch-tree-stage");w instanceof HTMLElement&&w.scrollTo({top:0,behavior:"smooth"})}),window.setTimeout(()=>{f()},80)},R=w=>{w.key==="Escape"&&i.value&&v()};return Za(()=>{var w;u(),c(),window.addEventListener("mousemove",g),(w=e.value)==null||w.addEventListener("click",S),window.addEventListener("resize",d),window.addEventListener("keydown",R),h()}),ui(()=>t.active,w=>{if(!w&&i.value){v();return}!w||i.value||window.setTimeout(()=>{f()},60)}),Ec(()=>{var w;window.removeEventListener("mousemove",g),(w=e.value)==null||w.removeEventListener("click",S),window.removeEventListener("resize",d),window.removeEventListener("keydown",R),m==null||m.dispose()}),(w,P)=>(Yt(),$t("div",Gw,[I("header",{class:Xe(["painting-header",{"fade-out":i.value}])},[P[2]||(P[2]=I("div",{class:"archive-kicker"},"WERISS // ECHO ARCHIVE",-1)),P[3]||(P[3]=I("h1",null,"关键 CG 陈列馆",-1)),P[4]||(P[4]=I("p",null,"展示主视觉分层、镜头定格与氛围样张。点击陈列层可以查看档案展签。",-1)),I("button",{onClick:P[0]||(P[0]=(...D)=>Rt(M)&&Rt(M)(...D)),class:"start-btn"},"进入陈列")],2),He(Xi,{name:"fade"},{default:Ni(()=>[r.value?(Yt(),$t("div",{key:0,class:"dialogue-box",onClick:P[1]||(P[1]=D=>r.value=null)},[I("div",Ww,[I("p",Xw,bt(r.value),1),P[5]||(P[5]=I("span",{class:"close-hint"},"点击收起展签",-1))])])):Dn("",!0)]),_:1}),I("canvas",{ref_key:"canvasEl",ref:e},null,512),He(Xi,{name:"tree"},{default:Ni(()=>[i.value?(Yt(),$t("section",Yw,[I("button",{class:"tree-exit-btn",onClick:v},"返回陈列入口"),P[8]||(P[8]=I("div",{class:"branch-tree-caption"},[I("div",{class:"branch-tree-kicker"},"TOP-DOWN BRANCH TREE"),I("h2",null,"WERISS 多叉树"),I("p",null,"从上往下读。每一次分叉都是一次建议，每一片叶子都是故事走向。")],-1)),I("div",qw,[P[6]||(P[6]=I("svg",{class:"branch-tree-svg",viewBox:"0 0 1000 2140",preserveAspectRatio:"none","aria-hidden":"true"},[I("defs",null,[I("linearGradient",{id:"branchTreeGlow",x1:"0%",y1:"0%",x2:"0%",y2:"100%"},[I("stop",{offset:"0%","stop-color":"rgba(255,247,222,0.95)"}),I("stop",{offset:"55%","stop-color":"rgba(255,221,162,0.88)"}),I("stop",{offset:"100%","stop-color":"rgba(214,168,88,0.42)"})]),I("filter",{id:"branchTreeBlur"},[I("feGaussianBlur",{stdDeviation:"4.5"})])]),I("path",{class:"branch-glow trunk-glow",d:"M500 88 L500 1940"}),I("path",{class:"branch-line trunk-line",d:"M500 88 L500 1940"}),I("path",{class:"branch-glow",d:"M500 310 C438 336 348 374 220 420"}),I("path",{class:"branch-glow",d:"M500 310 C490 344 490 382 500 446"}),I("path",{class:"branch-glow",d:"M500 310 C562 336 652 374 780 420"}),I("path",{class:"branch-line",d:"M500 310 C438 336 348 374 220 420"}),I("path",{class:"branch-line",d:"M500 310 C490 344 490 382 500 446"}),I("path",{class:"branch-line",d:"M500 310 C562 336 652 374 780 420"}),I("path",{class:"branch-return-glow",d:"M220 420 C308 470 392 534 500 620"}),I("path",{class:"branch-return-glow",d:"M500 446 C500 492 500 548 500 620"}),I("path",{class:"branch-return-glow",d:"M780 420 C692 470 608 534 500 620"}),I("path",{class:"branch-return-line",d:"M220 420 C308 470 392 534 500 620"}),I("path",{class:"branch-return-line",d:"M500 446 C500 492 500 548 500 620"}),I("path",{class:"branch-return-line",d:"M780 420 C692 470 608 534 500 620"}),I("path",{class:"branch-glow",d:"M500 710 C424 742 322 780 198 820"}),I("path",{class:"branch-glow",d:"M500 710 C490 744 490 782 500 846"}),I("path",{class:"branch-glow",d:"M500 710 C576 742 678 780 802 820"}),I("path",{class:"branch-line",d:"M500 710 C424 742 322 780 198 820"}),I("path",{class:"branch-line",d:"M500 710 C490 744 490 782 500 846"}),I("path",{class:"branch-line",d:"M500 710 C576 742 678 780 802 820"}),I("path",{class:"branch-return-glow",d:"M198 820 C292 876 386 946 500 1020"}),I("path",{class:"branch-return-glow",d:"M500 846 C500 894 500 946 500 1020"}),I("path",{class:"branch-return-glow",d:"M802 820 C708 876 614 946 500 1020"}),I("path",{class:"branch-return-line",d:"M198 820 C292 876 386 946 500 1020"}),I("path",{class:"branch-return-line",d:"M500 846 C500 894 500 946 500 1020"}),I("path",{class:"branch-return-line",d:"M802 820 C708 876 614 946 500 1020"}),I("path",{class:"branch-glow",d:"M500 1110 C432 1144 338 1182 222 1220"}),I("path",{class:"branch-glow",d:"M500 1110 C490 1144 490 1182 500 1246"}),I("path",{class:"branch-glow",d:"M500 1110 C568 1144 662 1182 778 1220"}),I("path",{class:"branch-line",d:"M500 1110 C432 1144 338 1182 222 1220"}),I("path",{class:"branch-line",d:"M500 1110 C490 1144 490 1182 500 1246"}),I("path",{class:"branch-line",d:"M500 1110 C568 1144 662 1182 778 1220"}),I("path",{class:"branch-return-glow",d:"M222 1220 C314 1276 402 1346 500 1420"}),I("path",{class:"branch-return-glow",d:"M500 1246 C500 1292 500 1346 500 1420"}),I("path",{class:"branch-return-glow",d:"M778 1220 C686 1276 598 1346 500 1420"}),I("path",{class:"branch-return-line",d:"M222 1220 C314 1276 402 1346 500 1420"}),I("path",{class:"branch-return-line",d:"M500 1246 C500 1292 500 1346 500 1420"}),I("path",{class:"branch-return-line",d:"M778 1220 C686 1276 598 1346 500 1420"}),I("path",{class:"branch-glow",d:"M500 1510 C432 1544 338 1582 222 1620"}),I("path",{class:"branch-glow",d:"M500 1510 C490 1544 490 1582 500 1646"}),I("path",{class:"branch-glow",d:"M500 1510 C568 1544 662 1582 778 1620"}),I("path",{class:"branch-line",d:"M500 1510 C432 1544 338 1582 222 1620"}),I("path",{class:"branch-line",d:"M500 1510 C490 1544 490 1582 500 1646"}),I("path",{class:"branch-line",d:"M500 1510 C568 1544 662 1582 778 1620"}),I("path",{class:"branch-return-glow",d:"M222 1620 C316 1680 404 1748 500 1820"}),I("path",{class:"branch-return-glow",d:"M500 1646 C500 1694 500 1748 500 1820"}),I("path",{class:"branch-return-glow",d:"M778 1620 C684 1680 596 1748 500 1820"}),I("path",{class:"branch-return-line",d:"M222 1620 C316 1680 404 1748 500 1820"}),I("path",{class:"branch-return-line",d:"M500 1646 C500 1694 500 1748 500 1820"}),I("path",{class:"branch-return-line",d:"M778 1620 C684 1680 596 1748 500 1820"}),I("path",{class:"branch-glow",d:"M500 1910 C422 1950 332 1992 222 2054"}),I("path",{class:"branch-glow",d:"M500 1910 C500 1952 500 1998 500 2072"}),I("path",{class:"branch-glow",d:"M500 1910 C578 1950 668 1992 778 2054"}),I("path",{class:"branch-line",d:"M500 1910 C422 1950 332 1992 222 2054"}),I("path",{class:"branch-line",d:"M500 1910 C500 1952 500 1998 500 2072"}),I("path",{class:"branch-line",d:"M500 1910 C578 1950 668 1992 778 2054"})],-1)),(Yt(),$t(Ne,null,In(s,D=>I("article",{key:D.id,class:Xe(["tree-trunk-node",`tree-trunk-${D.kind}`]),style:di({left:`${D.x}%`,top:`${D.y}px`})},[I("span",$w,bt(D.id),1),I("h3",null,bt(D.title),1),I("p",null,bt(D.note),1)],6)),64)),(Yt(),$t(Ne,null,In(o,D=>I("div",{key:D.id,class:"tree-fork-badge",style:di({left:`${D.x}%`,top:`${D.y}px`})},[I("span",null,bt(D.label),1),I("small",null,bt(D.note),1)],4)),64)),P[7]||(P[7]=I("div",{class:"tree-final-center-link","aria-hidden":"true"},null,-1)),(Yt(),$t(Ne,null,In(a,D=>I("article",{key:D.id,class:Xe(["tree-choice-node",`tree-choice-${D.tone}`]),style:di({left:`${D.x}%`,top:`${D.y}px`})},[I("span",Kw,bt(D.id),1),I("h4",null,bt(D.label),1),I("p",null,bt(D.note),1),I("div",jw,"导向 "+bt(D.next),1)],6)),64)),(Yt(),$t(Ne,null,In(l,D=>I("article",{key:D.id,class:"tree-ending-leaf",style:di({left:`${D.x}%`,top:`${D.y}px`})},[I("span",Zw,bt(D.id),1),I("h4",null,bt(D.label),1),I("p",null,bt(D.note),1)],4)),64))])])):Dn("",!0)]),_:1})]))}},Qw=Vh(Jw,[["__scopeId","data-v-e07f97c7"]]),va="X-05",tA="WINDOW OPEN",eA="NIA-7 requesting first advisory.",nA="LINK CLOSED",iA="Awaiting first signal.",rA={mode:"quake",title:"MOUNTAIN BREACH / AUTHORIZATION OPEN",body:"平静结束了。回响台已获准读取山脉全貌，第一道建议窗口正在形成。"},Mm=[{label:"ROLE",title:"你不是进入者",body:"你坐在 ECHO DESK 前，通过失真的远程链路观察 WERISS。山里的人不是你，你也不会替她迈出任何一步。",action:"知道了，继续"},{label:"ABILITY",title:"你唯一的能力是建议",body:"链路只会短暂打开几秒。你能做的只有在信息不完整时给出倾向，而不是命令。她会理解、误解，或者赌一把。",action:"继续授权"},{label:"COST",title:"每一次建议都会改写局势",body:"信任、风险和真相会被你的话推向不同方向。等你看见整座山的时候，平静也会一起结束。",action:"接入第一道建议窗口"}],sh={"Ω-01":{mode:"quake",title:"RED RIDGE / SURFACE FAILURE",body:"整条山脊在逆风震动，裂隙正在把视野撕开。这是你第一次看到 WERISS 真正移动。"},"Ψ-02":{mode:"storm",title:"LUMINOUS FRONT / CROSSWIND WALL",body:"发光雾墙压向峡谷，链路噪声开始翻倍。你给出的建议会决定她是穿过去，还是保住呼吸。"},"Δ-03":{mode:"fissure",title:"BLUE FISSURE / DEPTH OPEN",body:"雪幕被整面撕裂，裂口下方不是黑暗，而是一层正在发亮的深度。这里不该只是山表。"},"Λ-04":{mode:"magnetic",title:"DOUBLE MAP / SIGNAL DRIFT",body:"地形开始复制自己，HUD 和脚下给出两套完全不同的路线。你必须替她选一套现实。"},"X-05":{mode:"skyfold",title:"SKYFOLD / FINAL WINDOW",body:"高空像幕布一样展开，全部山脊同时发亮。最后一道窗口不会凭空制造命运，它只会替你们前面一路推出来的倾向签字。"}},sA={A1:{mode:"quake",title:"RIDGE STABILIZED",body:"镜头抬高后，裂纹从山体里蔓延出来。你让她先保住了视野，也让第一次震动有了轮廓。"},A2:{mode:"quake",title:"FORWARD PUSH",body:"山体换气声直接压进了链路。你把她推近了红脊，也把第一次风险抬高了。"},A3:{mode:"whiteout",title:"SENSOR CALIBRATION",body:"雪雾压暗了整个画面，只剩参数流和呼吸声。你让信息先于行动抵达。"},B1:{mode:"storm",title:"WALL BREACH",body:"她穿过了发光雾墙，镜头像被骤冷灼了一下。链路抖得更厉害，但前方被打开了。"},B2:{mode:"storm",title:"CONTROLLED RETREAT",body:"雾墙掠过山脊，风声盖住了脚步。你保住了链路稳定，但也看着原路被吞掉。"},B3:{mode:"storm",title:"COVER FOUND",body:"半塌石棚切开了风噪，镜头边缘仍在滴落雪水。你让她在灾变里争取到一次观察角度。"},C1:{mode:"fissure",title:"EDGE WALK",body:"裂口一直在镜头下方发蓝，你却命令她不去看。山体没有回答，但活路还在。"},C2:{mode:"fissure",title:"DESCENT",body:"镜头沉入裂口，地表被一道竖直光井取代。你不再只是看山脉，而是看山脉里面。"},C3:{mode:"fissure",title:"PROBE DROP",body:"探针掉进深度时，画面像被拉长了一瞬。数值在重复，说明下面不是正常空间。"},D1:{mode:"magnetic",title:"BLIND WALK",body:"她闭眼穿过噪声层，屏幕只剩几次短促闪烁。你让脚下地形暂时压过了错误地图。"},D2:{mode:"magnetic",title:"OLD MAP LOCK",body:"旧地图把镜头推向更亮的山脊，色差和雪花屏一起加重。真相更近，但现实更薄。"},D3:{mode:"magnetic",title:"OVERLAY KILLED",body:"辅助层熄灭后，画面黑了一瞬，只剩高度、心跳和你的链路还亮着。"},E1:{mode:"whiteout",title:"RETURN VECTOR",body:"风雪和天光一起压回镜头边缘。你放弃了最深处，把“活着回来”放到了真相前面。"},E2:{mode:"skyfold",title:"DEEP VECTOR",body:"高空彻底展开，山脊像一张反向星图。你让她继续往前，也接受了链路随时会断。"},E3:{mode:"skyfold",title:"HOLD VECTOR",body:"她停在回响最强的位置，画面像被整片天空按住。你没有撤离，也没有继续深入。"}},Uc=[{id:"Ω-01",position:{x:-7,y:2,z:8},event:{title:"RED RIDGE ASSESSMENT",subtitle:"FIELD UNIT NIA-7",message:'如果你真的能看到我的画面，先回答我。<br/>左边山脊后面那片发红的东西，像云，但它在逆风移动。<br/><span class="hl">我应该先看清它，还是先避开？</span>',analysis:{displayTitle:"红脊后面的红光，到底是什么",question:"你现在不是立刻指路，而是先判断这片红光究竟是天气、活物，还是设备误报。",briefing:"第一道窗口没有马上对你开放。红脊后的红光像天气，但它逆风移动，说明你先要判断它到底是“环境”还是“生物式回响”。",briefCards:[{label:"她看到了什么",text:"山脊后面有一大片发红的东西，看起来像云，但移动方向不对。"},{label:"现在危险在哪",text:"如果你把它当天气误判，NIA-7 可能会直接撞进它的推进边缘。"},{label:"你这一步先做什么",text:"先判断红光究竟是什么，再决定让她靠近、拉远还是原地不动。"}],objective:"比对风场、热源和回声，确认这片红光真正受什么规则支配。",howToPlay:["先点开线索卡，看看 NIA-7 回传了什么异常。","注意每张卡最后一句“这说明什么”，它会帮你翻译专业词。","读完至少两条线索后，再选择你认为最合理的解释。"],clues:[{id:"wind",title:"红光和风向是反着走的",tag:"FIELD LOG",summary:"风往西吹，但红光却在往东移动。",detail:"NIA-7 的风场记录显示阵风始终向西，速度稳定；只有红光边缘以恒定速度向东贴着山脊推进，说明它不受表层风向驱动。",whyItMatters:"这说明红光不像普通天气。真正的云雾通常会跟着风走。",focusTarget:"sun",sceneLabel:"红日",sceneAnchor:"red_sun"},{id:"thermal",title:"发热的位置总贴着山体褶皱",tag:"SENSOR",summary:"热像里最亮的地方没有飘开，而是在山体缝隙里反复亮起。",detail:"热像回传里最亮的区域没有在空中扩散，而是沿着山体裂隙周期性亮起，像是某种被地形束缚的脉冲。",whyItMatters:"这说明红光更像“山体里有什么在活动”，而不是天上的云层。",focusTarget:"sun",sceneLabel:"热痕",sceneAnchor:"ridge_vent"},{id:"echo",title:"山里每十五秒会传出一次低鸣",tag:"ARCHIVE",summary:"档案里记着一种每十五秒出现一次的低沉回声，它和红光移动节奏一致。",detail:"旧档案里记录过同频脉冲: 每十五秒一次，山体内部会传出低频换气声；红光每次位移都和这道脉冲同步。",whyItMatters:"这说明红光不是随机现象，它和山体内部某种规律活动绑在一起。",focusTarget:"sun",sceneLabel:"回声点",sceneAnchor:"echo_spine"}],hypotheses:[{id:"weather",label:"先把它当天气处理，让她顺着风躲开就行",detail:"如果这只是奇怪的红色云层，那最稳的做法就是别靠近，按风向避开。"},{id:"surface",label:"这更像贴着山体移动的东西，先拉远看清全貌再说",detail:"如果红光不是云，而是沿着山体活动的异常层，那现在最重要的是先看清它怎么移动。"},{id:"sensor",label:"先别管它，先当成设备误报，原地校准一轮再说",detail:"如果主要是传感器漂移，那没必要急着做判断，先让她停住校准。"}],solutionId:"surface",solutionFeedback:"你确认这不是普通天气，而是一层贴着山体移动的“呼吸层”。现在真正的问题不是跑不跑，而是先不要在贴脸距离做判断。",failureFeedback:"这个推断解释不了逆风位移和固定脉冲。链路噪声抬升了一格，你还需要更可靠的规则。",breakthroughTitle:"破局点 / 呼吸层不是云",breakthroughDetail:"红光由山体内部脉冲驱动，只会沿着地形褶皱推进。先获得高处视野，才有资格做第一次正式建议。"},choices:[{id:"A1",label:"退到高处，先确认整片视野",advisory:"Gain altitude and confirm the ridge line before moving.",reply:"收到。我先上切到高处。红光不是一个点，像一整片贴着山走的云墙。",effects:{trust:1,risk:-1}},{id:"A2",label:"继续靠近，我需要更多现场画面",advisory:"Close the distance. I need a better look at the red front.",reply:"你是真敢开口。行，我再往前二十米。地面开始轻震，像有什么东西在山体里换气。",effects:{truth:1,risk:1}},{id:"A3",label:"原地停留，先校准传感器",advisory:"Hold position and stabilize your sensors before moving.",reply:"校准完成。风场和温度都在跳，但频率很稳定。我把参数发回给你了。",effects:{trust:1,truth:1}}]}},{id:"Ψ-02",position:{x:0,y:3.5,z:1},event:{title:"MOVING CLOUD WALL",subtitle:"FIELD UNIT NIA-7",message:'不是云。是一整面在发光的雾墙，从峡谷对面横着压过来了。<br/>我能冲过去，也能后撤保链路。<br/><span class="hl">你给我一个更值的选项。</span>',analysis:{displayTitle:"雾墙逼近时，第三条路在哪里",question:"眼前看起来像只有“硬闯”或“后撤”两个选项，但你要先找出有没有更聪明的走法。",briefing:"雾墙已经接近，但真正的危险还不是“会不会撞上”，而是它会不会把链路和氧气一起掐断。你要先看懂它的移动规则。",briefCards:[{label:"她看到了什么",text:"一整面发光雾墙正在从峡谷对面横着压过来，像要把路整个堵死。"},{label:"现在危险在哪",text:"硬闯会迅速掉氧、掉链路，纯后撤又可能彻底失去观察机会。"},{label:"你这一步先做什么",text:"先判断有没有“既不硬闯也不白撤”的第三种路线。"}],objective:"分析雾墙的推进方式，判断它最怕的是正面对抗、原地等待，还是横向切出视角。",howToPlay:["先看地形、耗氧和速度三类线索。","重点找“有没有安全观察位”，而不是急着选冲还是退。","如果你能找出第三种路线，这关就算破局。"],clues:[{id:"shelter",title:"峡谷侧面有一段能挡风的石棚",tag:"TERRAIN",summary:"石棚后的噪声显著下降，但雾墙边缘仍在可视范围内。",detail:"地形扫描显示峡谷侧壁有一段半塌石棚。进入其背风面后，链路噪声下降 42%，同时仍能看到雾墙横移速度。",whyItMatters:"这说明你不一定非要硬闯。地形本身可能就是解法的一部分。",focusTarget:"storm",sceneLabel:"石棚",sceneAnchor:"stone_shelter"},{id:"oxygen",title:"直接冲进雾墙会让耗氧暴涨",tag:"BIOMETRIC",summary:"正面穿越雾墙时，耗氧会在一分钟内猛升。",detail:"模拟路径显示，一旦直接穿入雾墙核心，NIA-7 的耗氧和心率会同时抬升，链路掉帧概率也随之翻倍。",whyItMatters:"这说明“正面硬闯”虽然快，但代价非常高，很可能还没看清就先掉线。",focusTarget:"storm",sceneLabel:"雾墙",sceneAnchor:"storm_front"},{id:"velocity",title:"雾墙横着移动，其实没有看上去那么快",tag:"MOTION",summary:"雾墙横移比你预估的慢，说明它有可借的观察窗口。",detail:"测速日志表明雾墙的横移速度低于体感压迫。它看起来像“整面压来”，其实移动存在迟滞，横向绕行能抢出观察时间。",whyItMatters:"这说明还有抢时间的空间。问题不是“逃不掉”，而是“能不能找到更好的观察角度”。",focusTarget:"storm",sceneLabel:"扫频波",sceneAnchor:"crosswind_gap"}],hypotheses:[{id:"rush",label:"别想太多了，趁它还没压过来直接冲过去",detail:"这种判断把“时间差”看得最重要，赌的是她能在彻底失控前抢过去。"},{id:"retreat",label:"这段不值，直接撤，先把人和链路保住",detail:"如果这关没有更优解，那最稳的就是承认拿不到视角，立刻后撤。"},{id:"lateral",label:"先别冲也别退，绕到侧面找掩体再看它怎么动",detail:"这种判断默认“第三条路”存在，重点是借地形压住风险，再继续观察。"}],solutionId:"lateral",solutionFeedback:"你抓到了这关的核心: 雾墙最可怕的是让人误以为只能二选一。真正的活路，是借地形切出第三种观察位。",failureFeedback:"这个判断不是完全错，但它解释不了速度迟滞和石棚背风面的稳定窗口。你还没抓到真正的破局点。",breakthroughTitle:"关键掩体 / 背风观察位",breakthroughDetail:"半塌石棚能压住风噪，让 NIA-7 在不硬闯的前提下持续观察雾墙，这才会解锁更值的正式建议。"},delayMs:380,choices:[{id:"B1",label:"穿过去，抢时间拿画面",advisory:"Push through the wall before it closes. We need the view beyond it.",reply:"冲过去了。像从热水里穿到雪里，头盔差点掉线，但我看见前面有一条蓝色裂口。",effects:{truth:2,risk:2},obscured:!0},{id:"B2",label:"后撤，优先保住链路和体力",advisory:"Fall back. Keep the link stable and save your oxygen.",reply:"明白。我退回岩脊后面了。链路稳多了，但那道雾墙已经把原来的路盖住。",effects:{trust:1,risk:-1}},{id:"B3",label:"横向绕行，找掩体再观察",advisory:"Traverse laterally. Find cover and keep visual on the front.",reply:"我找到一段半塌的石棚，风声小了很多。墙体还在移动，但速度比我想的慢。",effects:{trust:1,truth:1}}]}},{id:"Δ-03",position:{x:7,y:2,z:7},event:{title:"SHEAR BREAK",subtitle:"FIELD UNIT NIA-7",message:'前面的雪坡塌了，不是普通雪崩，像整张白幕从山上被撕下来。<br/>裂口下面有一道发蓝的缝，我能下去。<br/><span class="hl">你要我绕，还是要我赌一把？</span>',analysis:{displayTitle:"蓝色裂口下面，是更深还是在循环",question:"这道裂口最危险的地方，可能不是太深，而是它会把人困在重复空间里。",briefing:"蓝裂口看起来像“往下走就能得到真相”，但回传深度却在重复。你得先判断它是空间异常，还是只是过深难测。",briefCards:[{label:"她看到了什么",text:"雪坡裂开后，下面露出一道发蓝的缝，看起来像通往更深处的入口。"},{label:"现在危险在哪",text:"如果它不是单纯的“很深”，而是在重复空间，下去的人可能会被困住。"},{label:"你这一步先做什么",text:"先确认裂口是在继续往下延伸，还是其实在原地循环折返。"}],objective:"利用深度、反光和探针回传，确认裂口下方到底在“延伸”，还是在“循环”。",howToPlay:["先看探针、光线和雪片轨迹三种信息。","不要被“往下走=更接近真相”这个直觉骗到。","如果多个线索都在说“它在重复自己”，那就别把它当普通深井。"],clues:[{id:"probe",title:"探针一直在掉，但读数总回到同一段",tag:"PROBE",summary:"探针一直在下坠，但读数周期性回到同一段高度。",detail:"回传数据里，探针的高度从未真正归零，却每隔数秒回到同一组深度区间，像是在重复穿过同一层空间切片。",whyItMatters:"这说明下面不只是“深”，而是很可能存在重复层。",focusTarget:"fissure",sceneLabel:"探针",sceneAnchor:"fissure_probe"},{id:"glare",title:"蓝光像在侧壁之间来回弹",tag:"VISUAL",summary:"蓝光不是从底部打上来，而是从侧壁之间互相反射。",detail:"增亮后的画面表明，蓝光并没有稳定光源点，而是沿着侧壁来回折返。这更像一个环状腔体，而不是单向深井。",whyItMatters:"这说明裂口内部结构不是直通到底，更像会把视野绕回来的封闭空间。",focusTarget:"fissure",sceneLabel:"蓝裂口",sceneAnchor:"fissure_core"},{id:"snowfall",title:"同一片雪在画面里出现了两次",tag:"MATERIAL",summary:"雪片掉入裂口后，在同一视野里出现了两次。",detail:"慢速回放里，一块雪幕残片落入裂口，五秒后又从更深处的同一画面边缘掠过，说明视野本身被折叠了。",whyItMatters:"这说明“往下”可能并没有真的离开原位，只是在同一个空间里循环。",focusTarget:"fissure",sceneLabel:"雪幕残片",sceneAnchor:"snow_loop"}],hypotheses:[{id:"pit",label:"它只是太深了，准备够了就能直接往下走",detail:"这个判断默认下面只是普通深井，异常都是因为太深、太亮、太难测。"},{id:"loop",label:"这地方不只是深，而是在重复自己，直接下去会被困住",detail:"如果裂口内部在循环折返，那“下去看看”反而是最容易被套住的做法。"},{id:"avalanche",label:"别被蓝光唬住了，当普通雪崩绕开就好",detail:"这种判断把异常都当成地质噪声，优先放弃分析，快速离开。"}],solutionId:"loop",solutionFeedback:"你看穿了蓝裂口真正的危险: 它诱导人把“更深”误判成“更接近真相”，其实先会困住人。",failureFeedback:"这个解释压不住重复深度和折返雪片。裂口最关键的不是亮，而是它在重复自己。",breakthroughTitle:"关键规则 / 深度在循环",breakthroughDetail:"裂口内部存在折返层，任何直接下行都可能进入重复切片。只有先确认边缘和探针结果，正式建议才有意义。"},choices:[{id:"C1",label:"别下裂口，沿边缘继续走",advisory:"Stay on the edge. Do not descend into the blue fissure.",reply:"收到。我贴边过去了。下面一直有像水一样的反光，但没有声音。",effects:{trust:1,risk:-1}},{id:"C2",label:"下去看蓝光来源，抓住窗口",advisory:"Descend into the fissure and identify the blue source.",reply:"我下来了。这里不是冰，是一层会发亮的碎石，像有人把星空砸碎铺在地上。",effects:{truth:2,risk:1}},{id:"C3",label:"先丢探针，再决定要不要下",advisory:"Deploy a probe first. I want the depth and temperature before you move.",reply:"探针下去了。回传深度不对，它像一直在往下掉，但读数又在重复同一段。",effects:{trust:1,truth:1}}]}},{id:"Λ-04",position:{x:-5,y:3,z:3},event:{title:"MAGNETIC STORM",subtitle:"FIELD UNIT NIA-7",message:'链路在跳。我收到你的字了，但顺序全乱。<br/>指南针开始绕圈，头盔 HUD 出现了两套地形。<br/><span class="hl">我该信地图，还是信脚下？</span>',analysis:{displayTitle:"两套地图打架时，什么才是真锚点",question:"这关不是选哪张地图更帅，而是先找出什么信息最不容易被磁暴篡改。",briefing:"这关最像《赌博默示录》式的陷阱: 两套地图都说得通，真正要分辨的是“谁在制造更高的信息税”。",briefCards:[{label:"她看到了什么",text:"指南针乱转，HUD 和脚下环境给出了两套完全不同的路线。"},{label:"现在危险在哪",text:"如果你信错了那套信息，NIA-7 可能会被直接带去断崖或错误山脊。"},{label:"你这一步先做什么",text:"先找出哪类信息最不容易被磁暴一起篡改，再决定该信什么。"}],objective:"判断旧地图、实时 HUD 和身体感知三者里，哪一套才是最不容易被磁暴操纵的锚点。",howToPlay:["先比较界面层、旧资料层和身体感知层。","重点不是“谁更完整”，而是“谁更不容易一起撒谎”。","如果某类信息在系统乱掉后还连续稳定，它就更可能是真锚点。"],clues:[{id:"hud",title:"界面上的字乱了，但心跳和海拔还连续",tag:"INTERFACE",summary:"文字顺序乱了，但海拔和心跳数值仍连续。",detail:"磁暴打乱了 HUD 的文本与箭头顺序，可海拔和心跳曲线依旧连续，这说明“抽象指令层”被污染得比“原始身体数据层”更重。",whyItMatters:"这说明越“解释型”的信息越容易出错，越原始的数据反而更可信。",focusTarget:"magnetic",sceneLabel:"信标",sceneAnchor:"hud_glitch"},{id:"oldmap",title:"旧地图能对上远山，却对不上脚下断崖",tag:"ARCHIVE",summary:"旧地图能对应远山亮起的位置，却对不上眼前断崖。",detail:"旧地图在宏观方向上没完全失真，但它把 NIA-7 当前所在的断崖标成了可通行山脊，说明它可能只保留了远距结构。",whyItMatters:"这说明旧地图不是完全假，但也不能直接拿来走脚下这一步。",focusTarget:"magnetic",sceneLabel:"旧地图",sceneAnchor:"old_map"},{id:"wind",title:"关掉辅助层后，坡度和横风会重新一致",tag:"BODY",summary:"闭掉辅助后，坡度和横风反馈会重新稳定。",detail:"身体传感器记录显示，只要关闭覆盖层，脚下坡度与横风方向会立刻恢复一致，而界面层仍继续漂移。",whyItMatters:"这说明脚下坡度和风向是最底层的真实信息，比地图更不容易被带偏。",focusTarget:"magnetic",sceneLabel:"体感向量",sceneAnchor:"body_vector"}],hypotheses:[{id:"hud",label:"还是信实时 HUD 吧，再乱也比旧资料新",detail:"这种判断把“实时”看得最重要，觉得系统迟早会自己纠正过来。"},{id:"oldmap",label:"别看现场乱成这样了，直接按旧地图走",detail:"如果你觉得旧档案比现场系统更可靠，那最简单的就是锁死旧地图。"},{id:"body",label:"先信脚下、风向和她自己的身体感觉，地图都往后放",detail:"这种判断认为最低层的身体感知最难一起出错，其它图层只能做参考。"}],solutionId:"body",solutionFeedback:"你找到这场磁暴里的最低层现实了。地图可以漂，字可以乱，但脚下坡度和横风不会一起替你撒谎。",failureFeedback:"这个判断还停留在“选哪张图”，但真正要找的是不容易被图层污染的锚点。",breakthroughTitle:"锚点 / 身体层真值",breakthroughDetail:"只保留心跳、高度、坡度和横风，才能在两套地图都开始争夺解释权时保住现实。"},delayMs:520,choices:[{id:"D1",label:"闭眼十秒，只按坡度和风向走",advisory:"Ignore the HUD. Count ten seconds and walk by slope and wind.",reply:"照做了。奇怪的是，一闭眼之后干扰反而小了。我像从一道缝里挤了出来。",effects:{trust:2}},{id:"D2",label:"相信旧地图，向北切过去",advisory:"Trust the old map and cut north before the storm thickens.",reply:"旧地图把我带到了一段断崖前。风很大，但我能看到更远的山脊全部亮起来了。",effects:{truth:1,risk:1},obscured:!0},{id:"D3",label:"关掉辅助系统，只保留心跳和高度",advisory:"Kill the overlays. Keep only heart rate, altitude, and the link.",reply:"辅助全关了。现在只剩你的链路和我自己的呼吸声。至少方向感回来了。",effects:{trust:1,risk:-1,truth:1}}]}},{id:"X-05",position:{x:4,y:5,z:16},event:{title:"SKYFOLD DECISION",subtitle:"FIELD UNIT NIA-7",message:'天不是在变暗，像有什么巨大的东西从高空展开了。<br/>所有山脊轮廓都亮起来，像一张地上的星图。<br/><span class="hl">如果我继续往前，链路会断；如果我现在回头，我可能带不走任何证据。</span>',analysis:{displayTitle:"终局不是重开一题，而是给前面的路线签字",question:"你最后要做的，不是临时赌一把，而是承认前面一路积累下来的倾向到底是什么。",briefing:"终局不是“看不看见”的问题，而是“把前面一路积累的倾向兑现成哪种结局”。你要先认清 skyfold 到底在向谁要代价。",briefCards:[{label:"她看到了什么",text:"高空像幕布一样展开，整片山脊同时发亮，终局已经开始收口。"},{label:"现在危险在哪",text:"继续前进、立刻回头、原地维持都要付代价，已经没有“白拿答案”的走法。"},{label:"你这一步先做什么",text:"先承认前面一路把路线推向了哪里，再决定最后这次要为哪种代价签字。"}],objective:"对照一路以来的链路代价，判断最后的破局点是抢最后一步、强行带人回、还是把人留在回响中心当锚点。",howToPlay:["回头看你前面一路把信任、风险和真相推向了哪里。","这关不会凭空给你标准答案，只会放大你之前的路线。","想清楚你愿意接受哪种代价，再进入最后一次正式建议。"],clues:[{id:"route",title:"前四轮选择已经把路线推向一种倾向",tag:"ROUTE",summary:"前四轮建议已经把路线推向某种稳定倾向。",detail:"链路回算显示，你的选择不是孤立按钮。前面累积下来的信任、风险和真相，已经把路线推成一条倾向明确的轨迹。",whyItMatters:"这说明终局不是新题，而是你前面一路选择的结果开始收束了。",focusTarget:"skyfold",sceneLabel:"路径信标",sceneAnchor:"route_beacon"},{id:"sky",title:"继续前进、立刻回头、原地维持，代价各不相同",tag:"EVENT",summary:"skyfold 会吞掉链路，但不会立刻吞掉“停在原地的锚点”。",detail:"展开曲线显示，继续深入会最先断掉链路；立刻回撤能保住人；原地维持则会让链路变成一个短暂稳定的锚点。",whyItMatters:"这说明三种终局不是简单对错，而是三种不同代价。",focusTarget:"skyfold",sceneLabel:"天幕裂缝",sceneAnchor:"sky_seam"},{id:"voice",title:"她最后问的不是路线，而是你愿意承认什么代价",tag:"FIELD",summary:"她不是单纯在问方向，而是在问你最后愿意让哪种代价落地。",detail:"末段语音里，她没有再追问路线细节，而是把“证据”“回头”“不断线”摆成同级选项，说明终局的关键是选择哪种代价被承认。",whyItMatters:"这说明你最后要做的是表态，而不是继续拖时间等标准答案出现。",focusTarget:"skyfold",sceneLabel:"末端回声",sceneAnchor:"final_voice"}],hypotheses:[{id:"proof",label:"别管前面了，就看现在这一下，哪里最刺激就选哪里",detail:"这种想法把终局当成一张新考卷，觉得最后一手可以推翻前面全部积累。"},{id:"vector",label:"先承认前面一路已经走成什么样了，再做最后签字",detail:"如果前面的选择已经把路线推向一种倾向，那最后这一手更像确认，而不是重开。"},{id:"delay",label:"再拖一会儿，等天幕自己把标准答案亮出来",detail:"这种判断希望用继续观察来逃避最后裁决，赌环境会替你做选择。"}],solutionId:"vector",solutionFeedback:"你抓住了无限流终局最重要的东西: 最后一扇门不是给你重新考试，而是让你为前面的路线签字。",failureFeedback:"终局已经不会再给你一套全新的标准解了。真正重要的是认清，这里只会兑现你前面一路累积下来的倾向。",breakthroughTitle:"终局破局点 / 为路线签字",breakthroughDetail:"skyfold 不制造命运，只放大代价。正式建议会根据你之前的路线倾向改写成不同版本。"},delayMs:760,choices:[{id:"E1",label:"返回。把人带回来比答案重要",advisory:"Return now. Bring yourself home before the sky closes.",reply:"收到。我转身了。你这次没让我看到最深处，但你把我从那里带了出来。",effects:{trust:2,risk:-2}},{id:"E2",label:"继续。把真相带到最深处",advisory:"Keep moving. I need you at the center before the link dies.",reply:"明白。我继续走。链路开始一段一段掉帧了，如果这次断了，就把我看到的记住。",effects:{truth:2,risk:2},obscured:!0},{id:"E3",label:"留在原地，保持链路直到回响结束",advisory:"Hold position. Keep the link alive and let the mountain finish speaking.",reply:"那我就留在这里。山脊全亮了，像在对齐什么。别断线，我还有最后几句要发给你。",effects:{trust:1,truth:1}}]}}],Hu=new Map(Uc.map(n=>[n.id,n.event])),oA=Uc.map(n=>n.id),aA={"Ω-01":2.8,"Ψ-02":3.1,"Δ-03":2.6,"Λ-04":2.9,"X-05":3.4};function lA({isExploring:n,routeMarkers:t}){const e=Na({trust:0,risk:0,truth:0}),i=de(null),r=de(null),s=de(null),o=de(nA),a=de(iA),l=de(null),u=de("calm"),c=de(null),f=de(null),h=de(!1),d=Na(Object.fromEntries(Uc.map(C=>[C.id,!1])));let g=null,_=null,p=null,m=null,S=[];const M=()=>{g&&clearTimeout(g),_&&clearTimeout(_),p&&clearTimeout(p),m&&clearTimeout(m),S.forEach(C=>clearTimeout(C)),g=null,_=null,p=null,m=null,S=[]},v=(C,F)=>C==="Ω-01"?["归档红脊呼吸层规则","回放 NIA-7 首次视野切片","展开第一道正式建议窗口"]:F==="storm"?["整理雾墙背风面线索","压低链路风噪","部署横向观察窗口"]:F==="fissure"?["复核裂口循环深度","锁定探针折返点","展开下行建议窗口"]:F==="magnetic"?["剥离受污染地图层","保留身体感知锚点","重建导航窗口"]:F==="skyfold"?["回算整条路线倾向","固定最终代价锚点","展开终局建议窗口"]:["整理现场线索","压低链路噪声","建立正式建议窗口"],R=()=>({trust:e.trust,risk:e.risk,truth:e.truth}),w=C=>{const F=C.trust*2-C.risk,T=C.truth*2+C.risk,rt=C.risk*2-C.trust-C.truth;let K="liminal";rt>=4&&C.risk>=C.truth+1?K="collapse":F>=T+2?K="return":T>=F+2&&(K="truth");const nt=K==="return"?"SAFE RETURN VECTOR":K==="collapse"?"PRESSURE VECTOR":K==="truth"||C.truth>=C.trust?"WITNESS VECTOR":"SAFE RETURN VECTOR";return{...C,bond:F,descent:T,strain:rt,dominant:K,vector:nt}},P=(C,F)=>F.dominant==="return"?`${C}<br/><span class="hl">她一路都在等你把“回来”说出口。现在这句话终于有了重量。</span>`:F.dominant==="truth"?`${C}<br/><span class="hl">你前面每一次逼近都把她推得更深。现在不是要不要看见，而是看见以后还能不能回来。</span>`:F.dominant==="collapse"?`${C}<br/><span class="hl">你们之前积累的高压还没退。这个窗口不是单纯的选择题，而是一次止损或失联的分界。</span>`:`${C}<br/><span class="hl">她对你的信任和对山的执念都还没压过对方。最后这句话会决定哪一边先落地。</span>`,D=(C,F)=>C.map(T=>{if(T.id==="E1"){if(F.dominant==="return")return{...T,label:"返回。把她完整带回来，结束这条已经够深的路线"};if(F.dominant==="truth")return{...T,label:"现在回头。承认你们已经看得够深了"};if(F.dominant==="collapse")return{...T,label:"强制返撤。趁链路还撑得住把她拉回来"}}if(T.id==="E2"){if(F.dominant==="truth")return{...T,label:"继续深入。把前面一路换来的真相走到底"};if(F.dominant==="return")return{...T,label:"违背前面的谨慎，赌最后一次逼近"};if(F.dominant==="collapse")return{...T,label:"继续硬压。接受她可能直接断在更深处"}}if(T.id==="E3"){if(F.dominant==="liminal")return{...T,label:"留在原地，把这条摇晃的链路撑到最后"};if(F.dominant==="return")return{...T,label:"先不撤离，停在原地把回程坐标钉死"};if(F.dominant==="truth")return{...T,label:"别再前进，留在回响中心守住最后一层画面"}}return T}),x=()=>oA.find(C=>!d[C])??null,b=(C,F=2600)=>{p&&clearTimeout(p),l.value=C,p=setTimeout(()=>{l.value=null},F)},N=()=>{e.trust=0,e.risk=0,e.truth=0},B=()=>{Object.keys(d).forEach(C=>{d[C]=!1})},H=()=>{M(),i.value=null,r.value=null,s.value=null,c.value=null,f.value=null,l.value=null,u.value="calm",h.value=!1,t.value=0,o.value=tA,a.value=eA,N(),B()},J=()=>{M(),i.value=null,r.value=null,s.value=null,c.value=null,f.value=null,l.value=null,u.value="calm",h.value=!1},j=()=>{s.value=0,h.value=!1},$=()=>s.value===null?!1:s.value<Mm.length-1?(s.value+=1,!1):(s.value=null,h.value=!0,a.value="NIA-7 awaiting your first instruction.",u.value="quake",b(rA,3e3),!0),et=(C,F=0)=>{e[C]=Math.max(0,e[C]+F)},W=(C,F)=>{const T=w(F);return C.id==="E1"?T.dominant==="return"||T.bond>=3?{code:"SAFE RETURN",vector:"SAFE RETURN VECTOR",title:"带回山风的人",summary:"NIA-7 离开了 WERISS。她没有带出全部答案，但她把这条链路和自己的呼吸一起带回来了。",body:"你前面给出的每一次谨慎都在替这句“回头”蓄力。归档里只留下了一段被反复擦除的地形记录，以及一句她拒绝解释的话: “你那天让我回头，所以我才确认，山后面真的还有路。”"}:{code:"FRACTURED RETURN",vector:T.vector,title:"折返时带着雪噪的人",summary:"NIA-7 最终回来了，但你们前面一路压出来的高压没有一并退去。她带回的是人，以及一段永远对不齐的记录。",body:"这不是轻松的生还。你在前半程把她推得太深，最后这句“回头”更像一次硬生生的折返。她回来后很久都不肯复盘，只说山里有些东西不是看见了就能带走的。"}:C.id==="E2"?T.dominant==="truth"&&T.truth>=4?{code:"FIRST ARRIVAL",vector:T.risk>=T.truth?"PRESSURE VECTOR":"WITNESS VECTOR",title:"先抵达的人",summary:"链路在最后几十秒里一段一段掉帧，你没有再收到她完整的声音，只剩一张不断重写的山脊星图。",body:"任务归档会把这次行动标成失败，但你知道那不是失败。那是一场到达。她继续向前，把真相送进了你再也无法跟上的深处。"}:{code:"WHITEOUT LOSS",vector:"PRESSURE VECTOR",title:"断在更深处的人",summary:"你让她继续往前，但前面几次高压和误判已经把这条路线磨到极限。最后留下的不是抵达，而是失联。",body:"归档只收到了几段碎裂的高度数据和一句被雪噪切断的话。你知道她确实走进去了，只是这一次，前面那些选择没有把路铺成“到达”，而是铺成了“消失”。"}:T.dominant==="liminal"&&T.trust>=2&&T.truth>=2?{code:"ECHO LOOP",vector:"WITNESS VECTOR",title:"另一端的人",summary:"NIA-7 没有继续，也没有返回。她把自己留在回响最强的那一层，只为了把链路再撑久一点。",body:"在连接熄灭前，你收到了最后一条短讯: “如果下一次你还会听见我，第一句别问我在哪里。先告诉我，左边那道山脊后面发红的东西，到底是什么。”"}:{code:"ANCHOR VIGIL",vector:T.vector,title:"留在风暴中心的人",summary:"她停在回响中心，不是为了永远留在那里，而是为了把你们前面一路没能确认的东西再钉牢一点。",body:"这是一个被前面所有犹豫和逼近共同推出来的停顿。她没有真正回来，也没有继续深入，只是把自己变成了链路最后的锚点，让这场行动以悬置而不是结论收尾。"}},vt=(C,F)=>{const T=Hu.get(C);if(!T||d[C]||!h.value)return;M(),i.value=null,f.value=null;const rt=sh[C];rt&&(u.value=rt.mode,b(rt,2400)),c.value={id:C,title:T.title,subtitle:T.subtitle,dist:F.toFixed(1),displayTitle:T.analysis.displayTitle,question:T.analysis.question,briefing:T.analysis.briefing,briefCards:T.analysis.briefCards,objective:T.analysis.objective,howToPlay:T.analysis.howToPlay,clues:T.analysis.clues,hypotheses:T.analysis.hypotheses,discoveredClueIds:[],attemptedHypothesisIds:[],selectedHypothesisId:null,breakthroughTitle:T.analysis.breakthroughTitle,breakthroughDetail:T.analysis.breakthroughDetail,progress:0,windowReady:!1,lastResult:"副本分析已打开。先调取线索，再判断这关真正的规则。"}},Pt=()=>{const C=x();if(!C){c.value=null;return}vt(C,aA[C]??3)},At=C=>{if(!c.value)return;const F=c.value.clues.find(K=>K.id===C);if(!F)return;const T=c.value.discoveredClueIds.includes(C),rt=T?c.value.discoveredClueIds:[...c.value.discoveredClueIds,C];c.value={...c.value,discoveredClueIds:rt,progress:rt.length,lastResult:T?F.detail:`${F.detail}${rt.length===c.value.clues.length?" 全部核心线索已归档，可以提交破局判断。":""}`}},zt=C=>{if(!c.value)return;const F=c.value.hypotheses.find(nt=>nt.id===C),T=Hu.get(c.value.id);if(!F||!T)return;if(c.value.discoveredClueIds.length<c.value.clues.length){c.value={...c.value,lastResult:"先把现场里的核心线索找齐。现在下判断还太早。"};return}const rt=T.analysis;if(C===rt.solutionId){c.value={...c.value,selectedHypothesisId:C,windowReady:!0,lastResult:`${rt.solutionFeedback} ${rt.breakthroughTitle}：${rt.breakthroughDetail}`};return}const K=c.value.attemptedHypothesisIds.includes(C);K||et("risk",1),c.value={...c.value,selectedHypothesisId:C,attemptedHypothesisIds:K?c.value.attemptedHypothesisIds:[...c.value.attemptedHypothesisIds,C],lastResult:`${rt.failureFeedback}${K?"":" 风险 +1。"}`}},pe=()=>{var nt;if(!c.value||!c.value.windowReady)return;const C=c.value,F=Hu.get(C.id);if(!F){c.value=null;return}c.value=null;const T=((nt=sh[C.id])==null?void 0:nt.mode)??"calm",rt=v(C.id,T),K=C.id==="Ω-01"?2200:1550;f.value={id:C.id,title:C.title,subtitle:C.subtitle,dist:C.dist,mode:T,lead:C.breakthroughTitle,steps:rt,stepIndex:0,progress:.12},rt.forEach((ot,ht)=>{const it=Math.round(K/rt.length*ht),A=setTimeout(()=>{!f.value||f.value.id!==C.id||(f.value={...f.value,stepIndex:ht,progress:Math.min(.3+(ht+1)/rt.length*.62,.96)})},it);S.push(A)}),m=setTimeout(()=>{const ot=C.discoveredClueIds.length,ht=C.id===va?w(R()):null;i.value={id:C.id,title:C.title,subtitle:C.subtitle,dist:C.dist,message:ht?P(F.message,ht):F.message,choices:(ht?D(F.choices,ht):F.choices).map(it=>({...it,obscured:it.obscured&&ot<C.clues.length})),stage:"choice"},f.value=null,m=null,S=[]},K)},st=C=>{if(!i.value||i.value.stage!=="choice")return null;const F=i.value.id,T=F===va?R():null;Object.entries(C.effects).forEach(([K,nt])=>{et(K,nt)}),d[F]=!0,o.value=C.id,a.value="READING SIGNAL...";const rt=sA[C.id];return rt&&(u.value=rt.mode,b(rt,2600)),i.value={...i.value,stage:"response",selectedChoice:C,reply:""},_=setTimeout(()=>{i.value&&(a.value=C.reply,i.value={...i.value,reply:C.reply},g=setTimeout(()=>{F===va&&T&&(r.value=W(C,T)),i.value=null,F!==va&&Pt()},3600))},900),F},xt=rn(()=>Object.values(d).filter(C=>!C).length),Ft=rn(()=>n.value?r.value?"LINK RESOLVED":s.value!==null?"ROLE BRIEFING":c.value?c.value.windowReady?"BREAKTHROUGH LOCKED":"CASE ANALYSIS":f.value?"WINDOW SYNC":i.value?"LIVE ADVISORY WINDOW":"LINK TRACKING":"LINK STANDBY"),ct=rn(()=>s.value===null?null:Mm[s.value]),Vt=rn(()=>w(R()).vector),Kt=rn(()=>[{label:"TRUST",value:e.trust},{label:"RISK",value:e.risk},{label:"TRUTH",value:e.truth}]),Gt=rn(()=>{if(c.value)return c.value.windowReady?`${c.value.id} READY`:`${c.value.id} CASE OPEN`;if(f.value)return`${f.value.id} WINDOW FORMING`;if(i.value)return`${i.value.id} LIVE`;const C=x();return C?`${C} READY`:"COMPLETE"}),ye=rn(()=>[`LINK::${n.value?"OPEN":"SEALED"}.............`,"FIELD_UNIT: NIA-7",`TRUST_INDEX: ${e.trust.toString().padStart(2,"0")}`,`RISK_VECTOR: ${e.risk.toString().padStart(2,"0")}`,`TRUTH_DEPTH: ${e.truth.toString().padStart(2,"0")}`,`ROUTE_MARKERS: ${t.value.toString().padStart(2,"0")}`,`CASE_FILE: ${Gt.value}`,`LAST_ADVICE: ${o.value}`,`FIELD_REPLY: ${a.value}`]);return{activeTransmission:i,advanceIntroBriefing:$,bufferingTransmission:f,completedSignals:d,dataLines:ye,dismissNarrative:J,endingPanel:r,environmentMode:u,inspectPendingClue:At,introBriefing:ct,introBriefingIndex:s,linkStatus:Ft,nextSignalLabel:Gt,openPendingTransmission:pe,pendingSignals:xt,pendingTransmission:c,resetSession:H,sceneCue:l,scheduleUpcomingSignal:Pt,sendAdvice:st,signalsArmed:h,startIntroBriefing:j,statDisplay:Kt,stats:e,submitPendingHypothesis:zt,vectorLabel:Vt}}const cA=120,uA=80,fA=40,hA=26;function dA({activeTransmission:n,analysisFocusTarget:t,canvasEl:e,completedSignals:i,isExploring:r,pendingTransmission:s,rippleEl:o,routeMarkers:a,sceneHotspots:l,environmentMode:u,sceneCue:c,signalsArmed:f,tourSpeed:h}){const d=Uc.map(U=>({id:U.id,pos:new O(U.position.x,U.position.y,U.position.z),triggered:!1,completed:!1}));let g,_,p,m=0,S,M,v=null,R,w,P,D,x,b,N,B,H,J=[],j,$,et=[],W,vt,Pt=[],At,zt=[],pe=[],st,xt=[],Ft=[],ct,Vt=[],Kt=[],Gt,ye,C=[],F,T=[],rt,K=[],nt,ot=[],ht=[],it,A=[],E=[],z,q=[],Z,Q=[],St,_t=[],wt,qt=[],mt,Dt,Bt,Wt=[],Ct=[],ne,Jt=0,se=null,V=0,It=null;const at=[],pt=new cg,Nt=new Xt,Lt=new oe(655365),ie=new oe(197125),Le=new oe(7854079),Ze=new oe(13378048),be=new O,an=new O,Te=new oe,qn=new O,Rr=new O,we={ridge:0,storm:0,fissure:0,magnetic:0,skyfold:0},jt={x:0,y:0,z:0,lookX:0,lookY:0,lookZ:0,fov:0},Xs={"Ω-01":{offset:new O(-4.8,2.8,4.4),lookOffset:new O(.4,1.1,-2.8),damping:.045,fov:58,wobbleX:.18,wobbleY:.08},"Ψ-02":{offset:new O(5.2,1.6,4.8),lookOffset:new O(-.8,.6,-2.4),damping:.06,fov:64,wobbleX:.35,wobbleY:.12},"Δ-03":{offset:new O(.7,-.9,2.2),lookOffset:new O(0,-1.4,-3.2),damping:.07,fov:71,wobbleX:.06,wobbleY:.05},"Λ-04":{offset:new O(-2.8,2.2,3.1),lookOffset:new O(1.2,.4,-2.6),damping:.055,fov:62,wobbleX:.24,wobbleY:.16},"X-05":{offset:new O(0,5.8,8.2),lookOffset:new O(0,4.4,-6),damping:.038,fov:72,wobbleX:.1,wobbleY:.05}},os={"Ω-01":{position:new O(-10.5,4.6,14.8),lookAt:new O(-6.8,2.2,7),fov:60,damping:.028},"Ψ-02":{position:new O(-4.4,3.8,10.4),lookAt:new O(0,2.8,1.2),fov:62,damping:.03},"Δ-03":{position:new O(3.8,3.2,9.4),lookAt:new O(7.2,1.4,7),fov:64,damping:.03},"Λ-04":{position:new O(-1.8,4.8,8.8),lookAt:new O(-5.1,2.9,3.2),fov:61,damping:.028},"X-05":{position:new O(.8,11.4,22.6),lookAt:new O(4.1,10.1,6.4),fov:78,damping:.024}},Vi=U=>{switch(U){case"quake":return{fogDensity:.024,fogColor:1378058,clearColor:262660,wireColor:16748349,sunColor:16734774,hazeOpacity:.14,shake:.1,cameraLift:.35,cameraPush:-.25,terrainGlow:16738863,ambientColor:2494733,keyColor:16743995,fillColor:12012080,dominionColor:16748349};case"storm":return{fogDensity:.031,fogColor:528666,clearColor:263947,wireColor:9560063,sunColor:11454975,hazeOpacity:.16,shake:.06,cameraLift:.18,cameraPush:-.45,terrainGlow:8179711,ambientColor:727592,keyColor:12445695,fillColor:4947623,dominionColor:10411263};case"fissure":return{fogDensity:.036,fogColor:132874,clearColor:131845,wireColor:7005183,sunColor:5164031,hazeOpacity:.18,shake:.08,cameraLift:-.8,cameraPush:-.95,terrainGlow:4575231,ambientColor:462872,keyColor:7924735,fillColor:2058119,dominionColor:6547711};case"whiteout":return{fogDensity:.044,fogColor:14410986,clearColor:11187908,wireColor:16055295,sunColor:15003384,hazeOpacity:.2,shake:.03,cameraLift:.15,cameraPush:-.1,terrainGlow:15332351,ambientColor:9740975,keyColor:16317439,fillColor:12438230,dominionColor:15003384};case"magnetic":return{fogDensity:.026,fogColor:459795,clearColor:196871,wireColor:16742391,sunColor:8118527,hazeOpacity:.13,shake:.12,cameraLift:.22,cameraPush:-.18,terrainGlow:16738280,ambientColor:1247518,keyColor:16742391,fillColor:6268871,dominionColor:16742391};case"skyfold":return{fogDensity:.016,fogColor:590607,clearColor:131333,wireColor:16766829,sunColor:16774067,hazeOpacity:.1,shake:.04,cameraLift:.65,cameraPush:.18,terrainGlow:16768393,ambientColor:2101786,keyColor:16773314,fillColor:14064966,dominionColor:16766829};default:return{fogDensity:.02,fogColor:655365,clearColor:197125,wireColor:7854079,sunColor:13378048,hazeOpacity:.09,shake:0,cameraLift:0,cameraPush:0,terrainGlow:8118527,ambientColor:2494747,keyColor:16737826,fillColor:12139810,dominionColor:8118527}}},Ys=U=>{var L;return(L=sh[U])==null?void 0:L.mode},Si=(U,L=1,Y=.12,gt=1.15,Et=3.2)=>{Mt.killTweensOf(we,U),Mt.set(we,{[U]:0}),Mt.timeline().to(we,{[U]:L,duration:gt,ease:"power3.out"}).to(we,{[U]:Y,duration:Et,ease:"sine.out"})},qs=U=>{switch(U){case"Ω-01":V=Math.max(V,.14),Si("ridge",1,.18,1,3.4),Mt.killTweensOf(jt),Mt.set(jt,{x:-2.6,y:1.6,z:4.8,lookY:.9,lookZ:-2.2,fov:-8}),Mt.timeline().to(jt,{x:.8,y:.2,z:-1.2,lookY:.2,lookZ:-.6,fov:4,duration:1.4,ease:"power3.out"}).to(jt,{x:0,y:0,z:0,lookX:0,lookY:0,lookZ:0,fov:0,duration:2.6,ease:"sine.out"});break;case"Ψ-02":V=Math.max(V,.1),Si("storm",1,.16,1.2,3.2),Mt.killTweensOf(jt),Mt.set(jt,{x:3.8,y:1.2,z:5.4,lookX:-1.1,lookY:.6,lookZ:-2.4,fov:-10}),Mt.timeline().to(jt,{x:-1.4,y:-.3,z:-1.6,lookX:.6,lookY:.15,lookZ:.4,fov:3,duration:1.5,ease:"power3.out"}).to(jt,{x:0,y:0,z:0,lookX:0,lookY:0,lookZ:0,fov:0,duration:2.4,ease:"sine.out"});break;case"Δ-03":V=Math.max(V,.16),Si("fissure",1,.14,.9,3.3),Mt.killTweensOf(jt),Mt.set(jt,{x:.4,y:4.2,z:6.2,lookY:-1.4,lookZ:-4.8,fov:-12}),Mt.timeline().to(jt,{x:0,y:-1.6,z:-2.1,lookY:.5,lookZ:-1.2,fov:5,duration:1.25,ease:"power4.out"}).to(jt,{x:0,y:0,z:0,lookX:0,lookY:0,lookZ:0,fov:0,duration:2.7,ease:"sine.out"});break;case"Λ-04":V=Math.max(V,.12),Si("magnetic",1,.16,1.1,3.4),Mt.killTweensOf(jt),Mt.set(jt,{x:-3.2,y:2.1,z:4.2,lookX:1.6,lookY:.3,lookZ:-2.1,fov:-9}),Mt.timeline().to(jt,{x:1.6,y:-.4,z:-1.8,lookX:-.9,lookY:.1,lookZ:.6,fov:4,duration:1.45,ease:"power3.out"}).to(jt,{x:0,y:0,z:0,lookX:0,lookY:0,lookZ:0,fov:0,duration:2.8,ease:"sine.out"});break;case"X-05":V=Math.max(V,.12),Si("skyfold",1,.22,1.45,4),Mt.killTweensOf(jt),Mt.set(jt,{x:0,y:7.5,z:11.4,lookY:4.2,lookZ:-6.4,fov:-16}),Mt.timeline().to(jt,{x:.3,y:-1.2,z:-3.8,lookY:1,lookZ:-1.5,fov:7,duration:1.8,ease:"power4.out"}).to(jt,{x:0,y:0,z:0,lookX:0,lookY:0,lookZ:0,fov:0,duration:3.2,ease:"sine.out"});break}},$s=(U,L)=>{const Y=U.material;if(Array.isArray(Y)){Y.forEach(gt=>{gt.transparent=!0,gt.opacity=L});return}Y.transparent=!0,Y.opacity=L},tn=(U,L)=>{U.visible=L>.01,U.traverse(Y=>{if(Y instanceof te&&$s(Y,L),Y instanceof Pl){const gt=Y.material;gt.transparent=!0,gt.opacity=L}})},as=()=>{var U;return((U=d.find(L=>!i[L.id]))==null?void 0:U.id)??va},Jo=(U,L)=>{let Y=0,gt=1,Et=1;const ft=[1,.52,.52*.52,.52*.52*.52,.52*.52*.52*.52].reduce((ce,bn)=>ce+bn,0);for(let ce=0;ce<5;ce+=1)Y+=Math.sin(U*Et*.4+Et)*Math.cos(L*Et*.35+Et*.7)*gt,Y+=Math.sin(U*Et*.7+Et*2.1)*Math.sin(L*Et*.6+Et*1.3)*gt*.5,gt*=.52,Et*=2.1;return Y/(ft*1.5)},ls=U=>{if(U.mesh){const L=U.mesh.material;L.color.set(8118527),L.opacity=.9,U.mesh.scale.setScalar(1)}if(U.ring){const L=U.ring.material;L.color.set(16762967),L.opacity=.35,U.ring.rotation.set(0,0,0)}if(U.light&&(U.light.color.set(8118527),U.light.intensity=2),U.beacon){const L=U.beacon.material;L.color.set(8118527),L.opacity=.14,U.beacon.scale.set(1,1,1)}if(U.halo){const L=U.halo.material;L.color.set(16762967),L.opacity=.18,U.halo.scale.setScalar(1)}},yt=U=>{if(U.mesh){const L=U.mesh.material;L.color.set(16762967),L.opacity=.75}if(U.ring){const L=U.ring.material;L.color.set(8118527),L.opacity=.18}if(U.light&&(U.light.color.set(16762967),U.light.intensity=.8),U.beacon){const L=U.beacon.material;L.color.set(16762967),L.opacity=.08}if(U.halo){const L=U.halo.material;L.color.set(8118527),L.opacity=.1}},y=U=>{const L=i[U.id];if(U.completed!==L){if(U.completed=L,U.completed){yt(U);return}ls(U)}},k=()=>{const U=new hn(fA,hA,cA,uA);U.rotateX(-Math.PI/2);const L=U.attributes.position;S=new Float32Array(L.count);for(let ft=0;ft<L.count;ft+=1){const ce=L.getX(ft),bn=L.getZ(ft),Pi=Math.exp(-((bn+2)**2)/40)*3.5,Ir=Jo(ce,bn)*4+Pi,ai=Math.max(Ir,-.5);L.setY(ft,ai),S[ft]=ai}U.computeVertexNormals();const Y=new Pu({color:3613717,roughness:.82,metalness:.06,emissive:new oe(2754568),emissiveIntensity:.62,side:Tr});Y.onBeforeCompile=ft=>{v=ft,ft.uniforms.uTerrainDominionColor={value:new oe(8118527)},ft.uniforms.uTerrainShadowColor={value:new oe(1248274)},ft.uniforms.uTerrainLightDir={value:new O(-.3,.88,-.34).normalize()},ft.uniforms.uTerrainTime={value:0},ft.uniforms.uTerrainContourStrength={value:.55},ft.vertexShader=ft.vertexShader.replace("#include <common>",`
          #include <common>
          varying vec3 vTerrainWorldPosition;
          varying vec3 vTerrainWorldNormal;
        `).replace("#include <worldpos_vertex>",`
          #include <worldpos_vertex>
          vTerrainWorldPosition = worldPosition.xyz;
          vTerrainWorldNormal = normalize(mat3(modelMatrix) * objectNormal);
        `),ft.fragmentShader=ft.fragmentShader.replace("#include <common>",`
          #include <common>
          uniform vec3 uTerrainDominionColor;
          uniform vec3 uTerrainShadowColor;
          uniform vec3 uTerrainLightDir;
          uniform float uTerrainTime;
          uniform float uTerrainContourStrength;
          varying vec3 vTerrainWorldPosition;
          varying vec3 vTerrainWorldNormal;
        `).replace("vec4 diffuseColor = vec4( diffuse, opacity );",`
          vec4 diffuseColor = vec4( diffuse, opacity );
          vec3 terrainUp = vec3(0.0, 1.0, 0.0);
          float terrainHeightMask = smoothstep(-1.2, 5.8, vTerrainWorldPosition.y);
          float terrainSlopeMask = 1.0 - clamp(dot(normalize(vTerrainWorldNormal), terrainUp), 0.0, 1.0);
          float terrainLightFacing = clamp(dot(normalize(vTerrainWorldNormal), normalize(uTerrainLightDir)), 0.0, 1.0);
          float terrainDirectionalShadow = pow(1.0 - terrainLightFacing, 1.4);
          float contourSpacing = 0.36;
          float contourCoord = (vTerrainWorldPosition.y + vTerrainWorldPosition.x * 0.045 - vTerrainWorldPosition.z * 0.03) / contourSpacing;
          float contourBand = abs(fract(contourCoord) - 0.5);
          float contourLine = 1.0 - smoothstep(0.18, 0.48, contourBand);
          float ridgeMask = smoothstep(-6.0, 8.0, -vTerrainWorldPosition.z);
          float viewRim = pow(1.0 - abs(dot(normalize(vViewPosition), normalize(vTerrainWorldNormal))), 1.8);
          float terrainValleyShadow = terrainSlopeMask * (0.42 + ridgeMask * 0.12) + terrainDirectionalShadow * 0.65;
          vec3 terrainShadowTint = mix(diffuseColor.rgb, uTerrainShadowColor, 0.34 + terrainValleyShadow * 0.52);
          vec3 terrainDominionTint = mix(terrainShadowTint, uTerrainDominionColor, terrainHeightMask * 0.18 + ridgeMask * 0.11);
          diffuseColor.rgb = mix(diffuseColor.rgb, terrainDominionTint, 0.64);
          diffuseColor.rgb += contourLine * (0.065 + uTerrainContourStrength * 0.09) * (0.3 + terrainSlopeMask * 0.9);
          diffuseColor.rgb += terrainHeightMask * 0.038;
          diffuseColor.rgb += viewRim * ridgeMask * 0.04;
        `)},Y.customProgramCacheKey=()=>"weriss-terrain-depth-v1",M=new te(U,Y),M.castShadow=!0,M.receiveShadow=!0,_.add(M);const gt=U.clone();R=new te(gt,new he({color:7854079,wireframe:!0,transparent:!0,opacity:.22})),_.add(R);const Et=U.clone(),ut=Et.attributes.position;for(let ft=0;ft<ut.count;ft+=1)ut.setY(ft,ut.getY(ft)-.08);Et.computeVertexNormals(),_.add(new te(Et,new he({color:16748349,wireframe:!0,transparent:!0,opacity:.07}))),w=new Yp(16737826,2.5),w.position.set(-9,22,-12),w.castShadow=!0,w.shadow.mapSize.set(2048,2048),w.shadow.bias=-35e-5,w.shadow.normalBias=.025,w.shadow.camera.near=1,w.shadow.camera.far=80,w.shadow.camera.left=-24,w.shadow.camera.right=24,w.shadow.camera.top=24,w.shadow.camera.bottom=-24,w.target.position.set(0,1.8,-4),_.add(w.target),_.add(w),P=new Yp(16724736,.95),P.position.set(12,4,18),_.add(P),D=new nS(3346722,1.05),_.add(D),x=new Lu(16757575,2.2,14),x.position.set(2,.5,2),_.add(x)},X=()=>{B=new te(new Ps(2.2,32,32),new he({color:13378048})),B.position.set(8,14,-25),_.add(B),H=new te(new Ps(3.2,32,32),new he({color:16724736,transparent:!0,opacity:.15,side:wn})),B.add(H),B.add(new te(new Ps(5.5,32,32),new he({color:6684689,transparent:!0,opacity:.07,side:wn}))),J=[];for(let U=0;U<12;U+=1){const L=U/12*Math.PI*2,Y=3+Math.random()*3,gt=new te(new hn(.15+Math.random()*.2,Y),new he({color:16720384,transparent:!0,opacity:.12+Math.random()*.1,side:xe}));gt.rotation.z=L,gt.position.set(Math.cos(L)*(2.8+Y/2),Math.sin(L)*(2.8+Y/2),0),J.push(gt),B.add(gt)}},tt=()=>{j=new te(new hn(200,30),new he({color:5570576,transparent:!0,opacity:.18,depthWrite:!1,side:xe})),j.rotation.x=Math.PI/2,j.position.set(0,.1,-10),_.add(j);const U=300,L=new Mn,Y=new Float32Array(U*3);for(let ft=0;ft<U;ft+=1)Y[ft*3]=(Math.random()-.5)*160,Y[ft*3+1]=Math.random()*40+5,Y[ft*3+2]=(Math.random()-.5)*80-15;L.setAttribute("position",new yi(Y,3)),_.add(new Pl(L,new $l({color:16765056,size:.1,transparent:!0,opacity:.16})));for(let ft=0;ft<6;ft+=1){const ce=[],bn=(Math.random()-.5)*16,Pi=(Math.random()-.5)*8-2;for(let ai=0;ai<=20;ai+=1){const Re=ai/20;ce.push(new O(bn+Math.sin(Re*Math.PI*3+ft)*Re*1.5,Re*(4+Math.random()*3),Pi+Math.cos(Re*Math.PI*2.5+ft*.7)*Re*1.2))}const Ir=new nh(ce);_.add(new te(new _c(Ir,30,.03+Math.random()*.04,6,!1),new he({color:ft%2===0?4521864:8913151,transparent:!0,opacity:.12+Math.random()*.1})))}const gt=420;N=new Float32Array(gt*3);const Et=new Mn,ut=new Float32Array(gt*3);for(let ft=0;ft<gt;ft+=1){const ce=(Math.random()-.5)*48,bn=Math.random()*16+1,Pi=(Math.random()-.5)*36-2;N[ft*3]=ce,N[ft*3+1]=bn,N[ft*3+2]=Pi,ut[ft*3]=ce,ut[ft*3+1]=bn,ut[ft*3+2]=Pi}Et.setAttribute("position",new yi(ut,3)),b=new Pl(Et,new $l({color:16758123,size:.16,transparent:!0,opacity:.26,depthWrite:!1})),_.add(b)},G=()=>{At=new fn,zt=[],pe=[];for(let U=0;U<10;U+=1){const L=U/10*Math.PI*2,Y=31+Math.sin(U*1.7)*3,gt=10+U%4*3.2+Math.random()*2.5,Et=new te(new jo(1.4+U%3*.35,gt,1.2+U%2*.4),new Pu({color:1183512,emissive:new oe(1379615),emissiveIntensity:.9,roughness:.84,metalness:.25,transparent:!0,opacity:.2}));Et.position.set(Math.cos(L)*Y,gt*.45,Math.sin(L)*Y-12),Et.rotation.y=L+Math.PI/2,Et.userData.baseY=Et.position.y,Et.castShadow=!0,Et.receiveShadow=!0,zt.push(Et),At.add(Et);const ut=new te(new hn(.16,gt*.6),new he({color:U%2===0?16762967:8118527,transparent:!0,opacity:.18,side:xe,depthWrite:!1}));ut.position.set(0,0,.72),Et.add(ut)}for(let U=0;U<4;U+=1){const L=new te(new Mo(20+U*3.6,.16+U*.03,10,90,Math.PI*(.8+U*.08)),new he({color:U%2===0?16766346:8118527,transparent:!0,opacity:.12,side:xe,depthWrite:!1}));L.rotation.x=Math.PI/2.25+U*.06,L.rotation.z=-.55+U*.34,L.position.set(-6+U*4.5,8+U*2.4,-24-U*3.5),pe.push(L),At.add(L)}At.visible=!0,_.add(At)},Tt=()=>{st=new fn,xt=[],Ft=[];for(let U=0;U<3;U+=1){const L=new hn(38+U*6,18+U*3,22,14),Y=L.attributes.position;for(let Et=0;Et<Y.count;Et+=1){const ut=Y.getX(Et),ft=Y.getY(Et);Y.setZ(Et,Math.sin(ut*.13+U)*1.8+Math.cos(ft*.18+U*.7)*1.2)}L.computeVertexNormals();const gt=new te(L,new he({color:U===1?16773304:8118527,transparent:!0,opacity:.1,side:xe,depthWrite:!1,blending:un}));gt.position.set(-10+U*10,14+U*3.4,-12-U*4),gt.rotation.x=-Math.PI/2.9-U*.08,gt.rotation.z=-.28+U*.22,xt.push(gt),st.add(gt)}for(let U=0;U<5;U+=1){const L=[],Y=-18+U*8;for(let ut=0;ut<=16;ut+=1){const ft=ut/16;L.push(new O(Y+Math.sin(ft*Math.PI*(1.2+U*.12))*(4+U*.6),5+ft*(18+U*1.8),-18-U*3.2+Math.cos(ft*Math.PI*1.4+U)*3.4))}const gt=new nh(L),Et=new te(new _c(gt,40,.08+U*.01,6,!1),new he({color:U%2===0?16769697:8118527,transparent:!0,opacity:.16,depthWrite:!1}));Ft.push(Et),st.add(Et)}st.visible=!0,_.add(st)},Ot=()=>{ct=new fn,Vt=[],Kt=[];for(let U=0;U<5;U+=1){const L=new te(new Mo(10.5+U*1.3,.08+U*.015,10,120,Math.PI*(.6+U*.15)),new he({color:U%2===0?16766829:12120575,transparent:!0,opacity:.12,side:xe,depthWrite:!1}));L.rotation.x=Math.PI/2.2+U*.1,L.rotation.z=U*.42,L.position.set(2,16+U*1.2,-18-U*2.2),Vt.push(L),ct.add(L)}for(let U=0;U<22;U+=1){const L=new te(new yo(.18+Math.random()*.35,0),new he({color:U%3===0?16773314:U%3===1?8118527:16762967,transparent:!0,opacity:.14,depthWrite:!1})),Y=U/22*Math.PI*2;L.position.set(Math.cos(Y)*(12+Math.random()*4),16+Math.sin(Y*1.7)*3.4,-18+Math.sin(Y)*(5+Math.random()*3)),L.userData.baseY=L.position.y,Kt.push(L),ct.add(L)}ct.visible=!0,_.add(ct)},kt=()=>{Gt=new fn,ye=new fn,C=[];const U=d.find(ut=>ut.id==="Ω-01");for(let ut=0;ut<3;ut+=1){const ft=new te(new hn(8+ut*1.8,1+ut*.4),new he({color:ut%2===0?16748349:16766346,transparent:!0,opacity:0,depthWrite:!1,side:xe,blending:un}));ft.rotation.x=-Math.PI/2,U&&ft.position.set(U.pos.x+ut*1.6,2.08+ut*.02,U.pos.z-3.8-ut*.9),ft.userData.baseX=ft.position.x,ft.rotation.z=-.26+ut*.12,C.push(ft),ye.add(ft)}Gt.add(ye),F=new fn,T=[];const L=d.find(ut=>ut.id==="Ψ-02");for(let ut=0;ut<3;ut+=1){const ft=new te(new hn(10+ut*2,2+ut*.7),new he({color:ut%2===0?10411263:15267839,transparent:!0,opacity:0,depthWrite:!1,side:xe,blending:un}));ft.rotation.x=-Math.PI/2,L&&ft.position.set(L.pos.x+ut*1.8,3.56+ut*.02,L.pos.z-2.8-ut*1.4),ft.userData.baseX=ft.position.x,ft.rotation.z=-.42+ut*.08,T.push(ft),F.add(ft)}Gt.add(F),rt=new fn,K=[];const Y=d.find(ut=>ut.id==="Δ-03");for(let ut=0;ut<3;ut+=1){const ft=new te(new hn(1.2+ut*.5,10+ut*2.4),new he({color:ut%2===0?6547711:11924223,transparent:!0,opacity:0,depthWrite:!1,side:xe,blending:un}));ft.rotation.x=-Math.PI/2,Y&&ft.position.set(Y.pos.x-.5+ut*.14,2.06+ut*.02,Y.pos.z-1.8),ft.rotation.z=.08+ut*.03,K.push(ft),rt.add(ft)}Gt.add(rt),nt=new fn,ot=[],ht=[];const gt=d.find(ut=>ut.id==="Λ-04");for(let ut=0;ut<3;ut+=1){const ft=new te(new xo(2.2+ut*1.1,2.5+ut*1.1,64),new he({color:ut%2===0?16742391:8118527,transparent:!0,opacity:0,depthWrite:!1,side:xe,blending:un}));ft.rotation.x=-Math.PI/2,gt&&ft.position.set(gt.pos.x,3.06+ut*.03,gt.pos.z),ot.push(ft),nt.add(ft)}for(let ut=0;ut<4;ut+=1){const ft=new te(new hn(5.5,.16),new he({color:ut%2===0?16742391:8118527,transparent:!0,opacity:0,depthWrite:!1,side:xe,blending:un}));ft.rotation.x=-Math.PI/2,ft.rotation.z=ut/4*Math.PI/2,gt&&ft.position.set(gt.pos.x,3.1+ut*.01,gt.pos.z),ht.push(ft),nt.add(ft)}Gt.add(nt),it=new fn,A=[],E=[];const Et=d.find(ut=>ut.id==="X-05");for(let ut=0;ut<3;ut+=1){const ft=new te(new xo(4.2+ut*2.2,4.55+ut*2.2,72),new he({color:ut%2===0?16769169:8118527,transparent:!0,opacity:0,depthWrite:!1,side:xe,blending:un}));ft.rotation.x=-Math.PI/2,Et&&ft.position.set(Et.pos.x,5.06+ut*.04,Et.pos.z-.4),A.push(ft),it.add(ft)}for(let ut=0;ut<6;ut+=1){const ft=new te(new hn(11,.18),new he({color:ut%2===0?16773314:16766829,transparent:!0,opacity:0,depthWrite:!1,side:xe,blending:un}));ft.rotation.x=-Math.PI/2,ft.rotation.z=ut/6*Math.PI,Et&&ft.position.set(Et.pos.x,5.12+ut*.01,Et.pos.z-.4),E.push(ft),it.add(ft)}Gt.add(it),Gt.visible=!0,_.add(Gt)},Ht=()=>{$=new fn,et=[];for(let U=0;U<3;U+=1){const L=new te(new hn(120,42+U*8),new he({color:U%2===0?16748349:8118527,transparent:!0,opacity:0,depthWrite:!1,side:xe,blending:un}));L.position.set(0,10+U*4,-30-U*12),L.rotation.x=-Math.PI/2.55-U*.05,et.push(L),$.add(L)}W=new te(new mc(34,96),new he({color:16748349,transparent:!0,opacity:0,depthWrite:!1,side:xe,blending:un})),W.rotation.x=-Math.PI/2,W.position.set(0,.18,-2),$.add(W),$.visible=!0,_.add($)},ae=()=>{vt=new fn,Pt=[],d.forEach((U,L)=>{const Y=new fn;Y.position.copy(U.pos),Y.position.y+=.06;const gt=new te(new xo(1.9,3.8,64),new he({color:16748349,transparent:!0,opacity:0,depthWrite:!1,side:xe,blending:un}));gt.rotation.x=-Math.PI/2,Y.add(gt);const Et=new te(new mc(5.8,72),new he({color:16748349,transparent:!0,opacity:0,depthWrite:!1,side:xe,blending:un}));Et.rotation.x=-Math.PI/2,Et.position.y=.02,Y.add(Et);const ut=new te(new Ia(.8,2.2,7.5,24,1,!0),new he({color:16748349,transparent:!0,opacity:0,depthWrite:!1,side:xe,blending:un}));ut.position.y=3.2,Y.add(ut);const ft=new te(new yo(.22+L*.01,0),new he({color:16766346,transparent:!0,opacity:0,depthWrite:!1,blending:un}));ft.position.set(2.2,1.6,.4),Y.add(ft);const ce=new te(new yo(.18+L*.01,0),new he({color:8118527,transparent:!0,opacity:0,depthWrite:!1,blending:un}));ce.position.set(-2.5,2.3,-.6),Y.add(ce);const bn=new Lu(16748349,0,14);bn.position.set(0,2.2,0),Y.add(bn),Pt.push({id:U.id,group:Y,halo:gt,bloom:Et,pillar:ut,moteA:ft,moteB:ce,light:bn}),vt.add(Y)}),vt.visible=!0,_.add(vt)},le=()=>{z=new fn,q=[];for(let U=0;U<3;U+=1){const L=new te(new hn(54,3.4+U*1.2,1,1),new he({color:U%2===0?8118527:16762967,transparent:!0,opacity:0,depthWrite:!1,side:xe,blending:un}));L.rotation.x=-Math.PI/2,L.position.set(0,.28+U*.08,10-U*8),q.push(L),z.add(L)}z.visible=!0,_.add(z)},Zt=()=>{wt=new fn,qt=[];for(let Y=0;Y<4;Y+=1){const gt=new te(new hn(6.5,10+Y*.7),new he({color:12445695,transparent:!0,opacity:0,depthWrite:!1,side:xe}));gt.position.set(-6+Y*4,4.5,-2-Y*1.8),gt.rotation.y=-.18+Y*.12,qt.push(gt),wt.add(gt)}mt=new te(new Ps(18,32,20,0,Math.PI),new he({color:9296127,transparent:!0,opacity:0,side:wn,depthWrite:!1})),mt.position.set(2,6,-12),wt.add(mt);const U=new Mn,L=new Float32Array(320*3);for(let Y=0;Y<320;Y+=1)L[Y*3]=(Math.random()-.5)*18,L[Y*3+1]=Math.random()*10+1,L[Y*3+2]=(Math.random()-.5)*14;U.setAttribute("position",new yi(L,3)),Dt=new Pl(U,new $l({color:15267839,size:.12,transparent:!0,opacity:0,depthWrite:!1})),wt.add(Dt),wt.visible=!1,_.add(wt)},Me=()=>{Z=new fn,Q=[],_t=[];const U=new hn(5.5,9,8,12);for(let Y=-1;Y<=1;Y+=2){const gt=new te(U,new Pu({color:1449252,emissive:new oe(663078),emissiveIntensity:1,transparent:!0,opacity:0,side:xe}));gt.position.set(Y*2.6,-.2,-1.8),gt.rotation.y=Y*.42,gt.rotation.x=-.06,gt.castShadow=!0,gt.receiveShadow=!0,Q.push(gt),Z.add(gt)}St=new te(new Ia(.22,1.05,11,18,1,!0),new he({color:6547711,transparent:!0,opacity:0,side:xe,depthWrite:!1})),St.position.set(0,-1.8,-3.2),Z.add(St);for(let Y=0;Y<18;Y+=1){const gt=new te(new yo(.12+Math.random()*.22,0),new he({color:Y%2===0?6547711:11924223,transparent:!0,opacity:0}));gt.position.set((Math.random()-.5)*2.8,-1.2+Math.random()*3.8,-2.4-Math.random()*3.8),gt.userData.baseY=gt.position.y,_t.push(gt),Z.add(gt)}Z.visible=!1;const L=d.find(Y=>Y.id==="Δ-03");L&&Z.position.copy(L.pos).add(new O(-.6,.3,-2.6)),_.add(Z)},Ae=()=>{Bt=new fn,Wt=[],Ct=[];for(let L=0;L<4;L+=1){const Y=new te(new Mo(8+L*1.6,.06+L*.01,10,120,Math.PI*1.2),new he({color:L%2===0?16769169:8118527,transparent:!0,opacity:0,side:xe}));Y.rotation.x=Math.PI/2.1+L*.08,Y.rotation.z=L*.35,Y.position.set(0,10+L*.9,-10-L*1.6),Wt.push(Y),Bt.add(Y)}for(let L=0;L<6;L+=1){const Y=new te(new hn(.18,8+Math.random()*4),new he({color:16773314,transparent:!0,opacity:0,depthWrite:!1,side:xe}));Y.position.set(-8+L*3.2,6+Math.random()*2,-8-Math.random()*4),Y.rotation.z=(Math.random()-.5)*.18,Ct.push(Y),Bt.add(Y)}Bt.visible=!1;const U=d.find(L=>L.id==="X-05");U&&Bt.position.copy(U.pos).add(new O(0,-1.4,0)),_.add(Bt)},Je=()=>{d.forEach(U=>{const L=new te(new Ps(.18,16,16),new he({color:8118527,transparent:!0,opacity:.9}));L.position.copy(U.pos),_.add(L),U.mesh=L;const Y=new te(new Mo(.35,.03,8,32),new he({color:16762967,transparent:!0,opacity:.35}));Y.position.copy(U.pos),_.add(Y),U.ring=Y;const gt=new te(new Ia(.08,.42,4.6,14,1,!0),new he({color:8118527,transparent:!0,opacity:.14,depthWrite:!1,side:xe,blending:un}));gt.position.copy(U.pos).add(new O(0,2.25,0)),_.add(gt),U.beacon=gt;const Et=new te(new xo(.65,1.25,40),new he({color:16762967,transparent:!0,opacity:.18,depthWrite:!1,side:xe,blending:un}));Et.rotation.x=-Math.PI/2,Et.position.copy(U.pos).add(new O(0,.08,0)),_.add(Et),U.halo=Et;const ut=new Lu(8118527,2,6);ut.position.copy(U.pos),_.add(ut),U.light=ut})},Ye=(U,L)=>{var ad,ld;const Y=Vi(U),gt=we.ridge,Et=we.storm,ut=we.fissure,ft=we.magnetic,ce=we.skyfold,bn=U==="storm"?.88:0,Pi=U==="fissure"?.94:0,Ir=U==="skyfold"?.92:0,ai=U==="quake"?.38:U==="magnetic"?.34:U==="skyfold"?.44:U==="storm"?.24:.18,Re=U==="storm"?.34:U==="whiteout"?.42:U==="skyfold"?.36:U==="magnetic"?.2:.12,ln=U==="skyfold"?.4:U==="magnetic"?.3:U==="quake"?.22:.14,$n=ai+gt*.26+ft*.16+ce*.1,ue=Re+Et*.26+ce*.16,Lr=ln+ft*.2+ce*.3,Qo=bn+Et*.12,us=Pi+ut*.12,sl=Ir+ce*.08,fs=(U==="quake"?.42:.08)+gt*.38,_n=(U==="storm"||U==="whiteout"?.46:.08)+Et*.34,Ks=(U==="fissure"?.52:.06)+ut*.42,Kn=(U==="magnetic"?.5:.06)+ft*.4,En=(U==="skyfold"?.58:.08)+ce*.44,Ur=Math.max(fs,_n,Ks,Kn,En),Nc=((ad=s.value)==null?void 0:ad.id)??((ld=n.value)==null?void 0:ld.id)??null;tn(At,$n),tn(st,ue),tn(ct,Lr),tn(Gt,Ur*.54),tn($,Ur*.2),tn(wt,Qo),tn(Z,us),tn(Bt,sl),et.forEach((lt,dt)=>{const ee=lt.material;ee.color.lerp(Te.set(Y.dominionColor),.1),ee.opacity=.012+Ur*(.03+dt*.014)+Math.sin(L*(.35+dt*.08)+dt)*.006,lt.position.x=Math.sin(L*.18+dt)*(2+Ur*6),lt.rotation.z=Math.sin(L*.12+dt*.5)*Ur*.05});const rd=W.material;if(rd.color.lerp(Te.set(Y.dominionColor),.1),rd.opacity=.01+Ur*.06+Math.sin(L*.42)*.006,W.scale.set(1+Ur*.08+Math.sin(L*.3)*.02,1+Ur*.08+Math.sin(L*.3)*.02,1),Pt.forEach((lt,dt)=>{const ee=Ys(lt.id),en=Vi(ee),Di=lt.id==="Ω-01"?fs+gt*.3:lt.id==="Ψ-02"?_n+Et*.3:lt.id==="Δ-03"?Ks+ut*.32:lt.id==="Λ-04"?Kn+ft*.3:lt.id==="X-05"?En+ce*.34:.12,na=Nc===lt.id?.22:0,nn=Math.min(1.25,Di+na),Oc=Nc===lt.id?Y.dominionColor:en.dominionColor,Fc=Nc===lt.id?Y.terrainGlow:en.terrainGlow;lt.group.visible=nn>.06;const cd=lt.halo.material;cd.color.lerp(Te.set(Oc),.1),cd.opacity=.012+nn*.08+Math.sin(L*1.2+dt)*.008,lt.halo.rotation.z+=.0012+nn*.0014,lt.halo.scale.setScalar(1+nn*.12+Math.sin(L*.5+dt)*.03);const ud=lt.bloom.material;ud.color.lerp(Te.set(Oc),.08),ud.opacity=.008+nn*.06+Math.sin(L*.8+dt*.7)*.006,lt.bloom.scale.setScalar(1+nn*.16+Math.sin(L*.4+dt)*.03);const fd=lt.pillar.material;fd.color.lerp(Te.set(Fc),.1),fd.opacity=.008+nn*.04+Math.sin(L*1.6+dt)*.005,lt.pillar.scale.set(1+nn*.08,1+nn*.14+Math.sin(L*.7+dt)*.04,1+nn*.08),lt.pillar.position.y=3.2+Math.sin(L*.9+dt)*.25+nn*.3;const hd=lt.moteA.material;hd.color.lerp(Te.set(Oc),.1),hd.opacity=.015+nn*.1,lt.moteA.position.x=Math.cos(L*.9+dt)*(1.8+nn*.8),lt.moteA.position.z=Math.sin(L*.9+dt)*(1.2+nn*.6),lt.moteA.position.y=1.7+Math.sin(L*1.4+dt)*.35+nn*.2,lt.moteA.rotation.x+=.016,lt.moteA.rotation.y+=.01;const dd=lt.moteB.material;dd.color.lerp(Te.set(Fc),.1),dd.opacity=.01+nn*.085,lt.moteB.position.x=Math.cos(-L*.7-dt*.6)*(2.4+nn*.7),lt.moteB.position.z=Math.sin(-L*.7-dt*.6)*(1.5+nn*.5),lt.moteB.position.y=2.3+Math.sin(L*1.1+dt*.4)*.4+nn*.26,lt.moteB.rotation.x+=.012,lt.moteB.rotation.z+=.014,lt.light.color.lerp(Te.set(Fc),.08),lt.light.intensity+=(.7+nn*3.4-lt.light.intensity)*.08,lt.light.distance=8+nn*5}),At.position.y=gt*1.4+ft*.55+ce*.35,At.scale.setScalar(1+gt*.05+ft*.04),At.rotation.y=Math.sin(L*.08)*.04+ft*.06,st.position.y=Et*1.8+ce*.7,st.scale.set(1+Et*.06,1+Et*.12+ce*.04,1+ce*.03),ct.position.y=ft*.7+ce*1.5,ct.scale.setScalar(1+ft*.08+ce*.16),wt.scale.set(1+Et*.08,1+Et*.18,1+Et*.08),Z.scale.set(1+ut*.12,1+ut*.28,1+ut*.12),Bt.scale.setScalar(1+ce*.16),zt.forEach((lt,dt)=>{lt.position.y=lt.userData.baseY+Math.sin(L*.22+dt*.7)*.12,lt.rotation.z=Math.sin(L*.18+dt)*(.01+Kn*.02),lt.rotation.x=Math.sin(L*.12+dt*.6)*Kn*.015;const ee=lt.material;ee.emissiveIntensity=.8+ai*1.3+fs*.6+Math.sin(L*(.9+fs*.4)+dt)*.08,ee.color.lerp(Te.set(U==="magnetic"?2036008:U==="skyfold"?1709089:1183512),.08);const en=lt.children[0];if(en){const Di=en.material;Di.opacity=.1+fs*.22+Kn*.12+Math.sin(L*1.4+dt)*.04,en.position.z=.72+Math.sin(L*.8+dt)*Kn*.08}}),pe.forEach((lt,dt)=>{lt.rotation.z+=7e-4+dt*12e-5+En*6e-4,lt.rotation.x=Math.PI/2.25+dt*.06+Math.sin(L*.45+dt)*(.02+fs*.015);const ee=lt.material;ee.opacity=.05+ai*.45+En*.08+Math.sin(L*(.8+En*.3)+dt)*.02}),xt.forEach((lt,dt)=>{lt.rotation.z=-.28+dt*.22+Math.sin(L*.32+dt)*(.05+_n*.06),lt.position.x=-10+dt*10+Math.sin(L*.24+dt*.6)*(.8+_n*1.4),lt.position.z=-12-dt*4+Math.cos(L*.28+dt)*_n*.9;const ee=lt.material;ee.opacity=.04+Re*(.4+dt*.12)+_n*.1+Math.sin(L*(.9+_n*.4)+dt)*.02}),Ft.forEach((lt,dt)=>{lt.rotation.y=Math.sin(L*.18+dt)*(.08+_n*.08),lt.rotation.z=Math.sin(L*.22+dt*.4)*En*.03;const ee=lt.material;ee.opacity=.06+Re*.5+_n*.1+Math.sin(L*.7+dt)*.025}),Vt.forEach((lt,dt)=>{lt.rotation.z+=.001+dt*18e-5+Kn*8e-4+En*.001,lt.rotation.x=Math.PI/2.2+dt*.1+Math.sin(L*.26+dt)*(.03+En*.04),lt.rotation.y=Math.sin(L*.18+dt*.7)*Kn*.08;const ee=lt.material;ee.opacity=.05+ln*.45+Kn*.08+En*.12+Math.sin(L*(1.1+En*.4)+dt)*.02}),Kt.forEach((lt,dt)=>{lt.rotation.x+=.006+dt*15e-5,lt.rotation.y+=.008+dt*12e-5,lt.position.y=lt.userData.baseY+Math.sin(L*.9+dt*.4)*(.28+En*.24),lt.position.x+=Math.sin(L*.32+dt)*Kn*.01;const ee=lt.material;ee.opacity=.04+ln*.4+Kn*.06+En*.1+Math.sin(L*1.4+dt)*.02}),Qo>.01){qt.forEach((en,Di)=>{en.position.x=-6+Di*4+Math.sin(L*1.8+Di)*(.25+_n*.4),en.position.y=4.2+Math.sin(L*2.4+Di*.3)*(.2+_n*.18),en.scale.x=1+_n*.08}),mt.rotation.y+=.002;const lt=mt.material;lt.opacity=.06+Math.sin(L*.9)*.025+Qo*.11+_n*.035;const dt=Dt.material;dt.opacity=.2+_n*.18+Math.sin(L*1.6)*.03,dt.size=.11+_n*.08,dt.color.lerp(Te.set(15726847),.08);const ee=Dt.geometry.attributes.position;for(let en=0;en<ee.count;en+=1){let Di=ee.getY(en)-(.22+_n*.08),na=ee.getX(en)+(.08+_n*.03);Di<-1&&(Di=11+Math.random()*3),na>10&&(na=-10),ee.setY(en,Di),ee.setX(en,na)}ee.needsUpdate=!0}if(us>.01){Q.forEach((dt,ee)=>{dt.rotation.y=(ee===0?-1:1)*(.42+Math.sin(L*.7+ee)*Ks*.06);const en=dt.material;en.emissiveIntensity=1+Ks*1.2+Math.sin(L*1.1+ee)*.1});const lt=St.material;lt.opacity=.28+Math.sin(L*2.4)*.08+us*.16+ut*.06,St.scale.y=1+Math.sin(L*1.6)*.06+ut*.16,_t.forEach((dt,ee)=>{dt.position.y=dt.userData.baseY+Math.sin(L*1.2+ee)*.22+ut*.35,dt.rotation.x+=.01+ee*4e-4,dt.rotation.y+=.02+ee*3e-4})}sl>.01&&(Wt.forEach((lt,dt)=>{lt.rotation.z+=.0015+dt*4e-4+ce*.0025,lt.rotation.x=Math.PI/2.1+dt*.08+Math.sin(L*.7+dt)*.02+ce*.02,lt.scale.setScalar(1+En*.06+Math.sin(L*.3+dt)*.01)}),Ct.forEach((lt,dt)=>{lt.position.y=6+dt*.18+Math.sin(L*1.5+dt*.5)*.28+ce*.55+En*.22,lt.scale.y=1+En*.08+Math.sin(L*.5+dt)*.02})),C.forEach((lt,dt)=>{const ee=lt.material;ee.opacity=.02+fs*(.14+dt*.05)+Math.sin(L*(1.1+dt*.2)+dt)*.015,lt.scale.x=1+gt*.12+Math.sin(L*.5+dt)*.03,lt.position.x=lt.userData.baseX+Math.sin(L*.24+dt)*.2}),T.forEach((lt,dt)=>{const ee=lt.material;ee.opacity=.02+_n*(.16+dt*.05)+Math.sin(L*1.5+dt)*.018,lt.position.x=lt.userData.baseX+Math.sin(L*.45+dt)*(.5+_n*.45),lt.scale.y=1+Et*.18+Math.sin(L*.72+dt)*.04}),K.forEach((lt,dt)=>{const ee=lt.material;ee.opacity=.03+Ks*(.18+dt*.05)+Math.sin(L*1.8+dt)*.02,lt.scale.y=1+ut*.25+Math.sin(L*.8+dt)*.06,lt.rotation.z=.08+dt*.03+Math.sin(L*.35+dt)*Ks*.02}),ot.forEach((lt,dt)=>{const ee=lt.material;ee.opacity=.02+Kn*(.14+dt*.04)+Math.sin(L*1.3+dt)*.015,lt.rotation.z+=.001+dt*2e-4+ft*.0014,lt.scale.setScalar(1+ft*.08+Math.sin(L*.6+dt)*.02)}),ht.forEach((lt,dt)=>{const ee=lt.material;ee.opacity=.02+Kn*.16+Math.sin(L*1.5+dt)*.014,lt.rotation.z+=Kn*6e-4*(dt%2===0?1:-1)}),A.forEach((lt,dt)=>{const ee=lt.material;ee.opacity=.03+En*(.16+dt*.05)+Math.sin(L*1.1+dt)*.016,lt.rotation.z+=.0012+dt*24e-5+ce*.0015,lt.scale.setScalar(1+ce*.1+Math.sin(L*.4+dt)*.02)}),E.forEach((lt,dt)=>{const ee=lt.material;ee.opacity=.02+En*.18+Math.sin(L*1.3+dt)*.014,lt.rotation.z+=8e-4*(dt%2===0?1:-1)+ce*6e-4,lt.scale.x=1+ce*.08});const sd=U==="storm"?.34:U==="fissure"?.3:U==="magnetic"?.26:U==="skyfold"?.4:U==="quake"?.22:.14,od=U==="storm"?10411263:U==="fissure"?6547711:U==="magnetic"?16742391:U==="skyfold"?16769169:U==="quake"?16748349:8118527;q.forEach((lt,dt)=>{const ee=lt.material;ee.color.lerp(Te.set(od),.08),ee.opacity+=(sd*(.5+dt*.2)-ee.opacity)*.08,lt.position.z=(L*(2.8+dt*.5)+dt*8)%30-15,lt.position.x=Math.sin(L*.45+dt)*4.5,lt.scale.x=.94+Math.sin(L*.7+dt*.8)*.06});const ta=b.material;ta.color.lerp(Te.set(od),.04),ta.opacity+=(.18+sd*.36-ta.opacity)*.06,ta.size+=((U==="skyfold"?.2:.16)-ta.size)*.08;const ea=b.geometry.attributes.position;for(let lt=0;lt<ea.count;lt+=1){const dt=N[lt*3],ee=N[lt*3+1],en=N[lt*3+2];ea.setX(lt,dt+Math.sin(L*.3+lt*.17)*1.1),ea.setY(lt,ee+Math.sin(L*.65+lt*.11)*.55),ea.setZ(lt,en+(L*(.85+lt%7*.04)+lt*.9)%28-14)}ea.needsUpdate=!0},Ee=(U,L)=>{const Y=d.find(Et=>Et.id===U),gt=Xs[U];return!Y||!gt?null:{position:be.copy(Y.pos).add(gt.offset).add(new O(Math.sin(L*.8+Y.pos.x)*gt.wobbleX,Math.sin(L*1.1+Y.pos.z)*gt.wobbleY,0)),lookAt:Y.pos.clone().add(gt.lookOffset),damping:gt.damping,fov:gt.fov}},Qt=(U,L)=>{const Y=os[U];return Y?{position:Y.position.clone().add(new O(Math.sin(L*.22+Y.position.x)*.18,Math.sin(L*.16+Y.position.z)*.08,Math.cos(L*.18+Y.position.y)*.12)),lookAt:Y.lookAt.clone().add(new O(Math.sin(L*.15)*.4,Math.sin(L*.12+.8)*.12,0)),damping:Y.damping*(.9+h.value*.15),fov:Y.fov}:null},pn=(U,L)=>{if(!p)return null;if(U==="sun"&&B)return{position:B.position.clone().add(new O(-2.4,.8,7.8)),lookAt:B.position.clone().add(new O(0,-.2,0)),damping:.08,fov:34};if(U==="storm"&&mt)return{position:mt.position.clone().add(new O(6.4,-1.6,7.8)),lookAt:mt.position.clone().add(new O(-.4,-1.1,2.6)),damping:.075,fov:42};if(U==="fissure"&&St){const Y=mn(St);return Y?{position:Y.clone().add(new O(2.1,1.1,5.4)),lookAt:Y.clone().add(new O(0,.3,-.8)),damping:.08,fov:36}:null}if(U==="magnetic"){const Y=d.find(gt=>gt.id==="Λ-04");return Y?{position:Y.pos.clone().add(new O(-3.6,2.2,3.2)),lookAt:Y.pos.clone().add(new O(.8,.3,-2.1)),damping:.07,fov:40}:null}if(U==="skyfold"&&Wt.length>0){const Y=mn(Wt[1]??Wt[0]);return Y?{position:Y.clone().add(new O(.4,1.8,10.5)),lookAt:Y.clone().add(new O(0,.2,-1.2)),damping:.06,fov:38}:null}return null},ge=U=>{var L;return((L=d.find(Y=>Y.id===U))==null?void 0:L.pos)??null},mn=(U,L)=>U?(U.getWorldPosition(Rr),Rr.clone().add(L??new O)):null,Pr=U=>{switch(U){case"red_sun":return(B==null?void 0:B.position.clone().add(new O(0,-.5,0)))??null;case"ridge_vent":{const L=ge("Ω-01");return(L==null?void 0:L.clone().add(new O(1.6,.9,-3.8)))??null}case"echo_spine":{const L=ge("Ω-01");return(L==null?void 0:L.clone().add(new O(-2.3,1.1,-1.3)))??null}case"storm_front":return(mt==null?void 0:mt.position.clone().add(new O(-.2,-2.6,5.2)))??null;case"stone_shelter":{const L=ge("Ψ-02");return(L==null?void 0:L.clone().add(new O(-1.8,.45,-1.2)))??null}case"crosswind_gap":{const L=ge("Ψ-02");return(L==null?void 0:L.clone().add(new O(2.4,1.8,-4.6)))??null}case"fissure_probe":{const L=ge("Δ-03");return(L==null?void 0:L.clone().add(new O(-.9,.4,.6)))??null}case"fissure_core":return mn(St,new O(0,3.1,0));case"snow_loop":return mn(St,new O(2.4,2.3,1.4));case"hud_glitch":{const L=ge("Λ-04");return(L==null?void 0:L.clone().add(new O(.8,1.5,.3)))??null}case"old_map":{const L=ge("Λ-04");return(L==null?void 0:L.clone().add(new O(-2.2,.35,-1.4)))??null}case"body_vector":{const L=ge("Λ-04");return(L==null?void 0:L.clone().add(new O(1.6,.9,1.7)))??null}case"route_beacon":return mn(Ct[3]??Ct[2],new O(0,1.1,0));case"sky_seam":return mn(Wt[1]??Wt[0],new O(-.2,.8,0));case"final_voice":return mn(Ct[1]??Ct[0],new O(.45,1.3,-.4));default:return null}},Fn=()=>{if(!l.value)return;if(!s.value||n.value||!g||!p){l.value.length&&(l.value=[]);return}const U=g.domElement.clientWidth,L=g.domElement.clientHeight,Y=s.value.clues.map(gt=>{var ft,ce;const Et=Pr(gt.sceneAnchor);if(!Et)return{clueId:gt.id,discovered:((ft=s.value)==null?void 0:ft.discoveredClueIds.includes(gt.id))??!1,label:gt.sceneLabel,x:-9999,y:-9999,visible:!1};qn.copy(Et).project(p);const ut=qn.z>-1&&qn.z<1&&qn.x>-1.08&&qn.x<1.08&&qn.y>-1.08&&qn.y<1.08;return{clueId:gt.id,discovered:((ce=s.value)==null?void 0:ce.discoveredClueIds.includes(gt.id))??!1,label:gt.sceneLabel,x:(qn.x+1)*.5*U,y:(1-qn.y)*.5*L,visible:ut}});l.value=Y},cs=()=>{var gt;if(!p||!M)return;const U=new O(p.position.x,40,p.position.z);pt.set(U,new O(0,-1,0));const Y=(((gt=pt.intersectObject(M,!1)[0])==null?void 0:gt.point.y)??0)+1.35;p.position.y<Y&&(p.position.y+=(Y-p.position.y)*.35)},Ve=()=>{if(!(!se||!o.value)){se.clearRect(0,0,o.value.width,o.value.height);for(let U=at.length-1;U>=0;U-=1){const L=at[U];if(L.r+=3.5,L.alpha-=.012,L.alpha<=0){at.splice(U,1);continue}se.beginPath(),se.arc(L.x,L.y,L.r,0,Math.PI*2),se.strokeStyle=`rgba(204, 26, 26, ${L.alpha})`,se.lineWidth=1.5,se.stroke(),se.beginPath(),se.arc(L.x,L.y,L.r*.6,0,Math.PI*2),se.strokeStyle=`rgba(34, 255, 100, ${L.alpha*.4})`,se.lineWidth=.8,se.stroke()}}},Bn=()=>{var Pi,Ir,ai;if(m=requestAnimationFrame(Bn),!g||!_||!p||!R||!M||!B||!H)return;const U=ne.getElapsedTime(),L=R.geometry.attributes.position,Y=M.geometry.attributes.position;for(let Re=0;Re<L.count;Re+=1){const ln=L.getX(Re),$n=L.getZ(Re),ue=Math.sin(ln*.4+U*.6)*.18+Math.sin($n*.55+U*.45)*.14+Math.sin((ln+$n)*.3+U*.8)*.1,Lr=S[Re]+ue;L.setY(Re,Lr),Y.setY(Re,Lr)}L.needsUpdate=!0,Y.needsUpdate=!0,R.geometry.computeVertexNormals(),M.geometry.computeVertexNormals();const gt=((Pi=s.value)==null?void 0:Pi.id)??((Ir=n.value)==null?void 0:Ir.id)??null;gt&&gt!==It&&(qs(gt),It=gt);const Et=((ai=c.value)==null?void 0:ai.mode)??u.value,ut=Vi(Et),ft=Et==="skyfold"?.9:Et==="fissure"?.78:Et==="storm"||Et==="whiteout"?.7:Et==="magnetic"?.74:Et==="quake"?.68:.34;V+=((c.value?ut.shake:0)-V)*.06,Lt.lerp(new oe(ut.fogColor),.04),ie.lerp(new oe(ut.clearColor),.04),Le.lerp(new oe(ut.wireColor),.06),Ze.lerp(new oe(ut.sunColor),.05),_.fog.color.copy(Lt),_.fog.density+=(ut.fogDensity-_.fog.density)*.05,g.setClearColor(ie,1),R.material.color.copy(Le),B.material.color.copy(Ze),H.material.color.copy(Ze),j.material.opacity+=(ut.hazeOpacity-j.material.opacity)*.04,j.material.color.lerp(Te.set(ut.dominionColor),.06);const ce=M.material;ce.emissive.lerp(Te.set(ut.terrainGlow),.08),ce.emissiveIntensity+=(.48+ft*.6-ce.emissiveIntensity)*.05,ce.color.lerp(Te.set(Et==="whiteout"?12766422:Et==="magnetic"?2826033:Et==="skyfold"?3745559:Et==="storm"?1910833:Et==="fissure"?1712166:Et==="quake"?4203288:3613717),.04),w.color.lerp(Te.set(ut.keyColor),.06),P.color.lerp(Te.set(ut.fillColor),.06),D.color.lerp(Te.set(ut.ambientColor),.05),x.color.lerp(Te.set(ut.terrainGlow),.06),w.intensity+=(2.45+ft*1.05-w.intensity)*.05,P.intensity+=(.38+ft*.18-P.intensity)*.05,D.intensity+=(.78+ft*.12-D.intensity)*.05,x.intensity+=(1.4+ft*.9-x.intensity)*.05,v&&(v.uniforms.uTerrainDominionColor.value.lerp(Te.set(ut.dominionColor),.08),v.uniforms.uTerrainShadowColor.value.lerp(Te.set(Et==="whiteout"?6910844:Et==="storm"?725273:Et==="fissure"?528662:Et==="magnetic"?1181975:Et==="skyfold"?1577485:Et==="quake"?1576204:1248274),.06),v.uniforms.uTerrainLightDir.value.set(w.position.x-w.target.position.x,w.position.y-w.target.position.y,w.position.z-w.target.position.z).normalize(),v.uniforms.uTerrainTime.value=U,v.uniforms.uTerrainContourStrength.value+=(.78+ft*.52-v.uniforms.uTerrainContourStrength.value)*.06),Ye(Et,U);const bn=1+Math.sin(U*1.2)*.03+Math.sin(U*3.7)*.01+V*.08;if(B.scale.setScalar(bn),H.material.opacity=.1+Math.sin(U*.8)*.06,J.forEach((Re,ln)=>{Re.material.opacity=.06+Math.sin(U*(1.5+ln*.4)+ln)*.08}),r.value){const Re=t.value?pn(t.value):null,ln=!Re&&n.value?Ee(n.value.id,U):null,$n=!Re&&!ln?Qt(as(),U):null;Re?(p.position.x+=(Re.position.x+jt.x-p.position.x)*Re.damping,p.position.y+=(Re.position.y+jt.y-p.position.y)*Re.damping,p.position.z+=(Re.position.z+jt.z-p.position.z)*Re.damping,p.fov+=(Re.fov+jt.fov-p.fov)*.06,p.updateProjectionMatrix(),an.copy(Re.lookAt).add(new O(jt.lookX,jt.lookY,jt.lookZ)),p.lookAt(an)):ln?(p.position.x+=(ln.position.x+jt.x-p.position.x)*ln.damping,p.position.y+=(ln.position.y+jt.y-p.position.y)*ln.damping,p.position.z+=(ln.position.z+jt.z-p.position.z)*ln.damping,p.fov+=(ln.fov+jt.fov-p.fov)*.05,p.updateProjectionMatrix(),an.copy(ln.lookAt).add(new O(jt.lookX,jt.lookY,jt.lookZ)),p.lookAt(an)):$n&&(p.position.x+=($n.position.x+jt.x-p.position.x)*$n.damping,p.position.y+=($n.position.y+ut.cameraLift*.35+jt.y-p.position.y)*$n.damping,p.position.z+=($n.position.z+ut.cameraPush*.35+jt.z-p.position.z)*$n.damping,p.fov+=($n.fov+jt.fov-p.fov)*.04,p.updateProjectionMatrix(),an.copy($n.lookAt).add(new O(jt.lookX,jt.lookY,jt.lookZ)),p.lookAt(an)),V>.01&&(p.position.x+=(Math.random()-.5)*V,p.position.y+=(Math.random()-.5)*V*.6),cs(),d.forEach(ue=>{if(!ue.mesh||!ue.light)return;y(ue);const Lr=ue.completed?.55+Math.sin(U*2.2+ue.pos.x)*.06:.72+Math.sin(U*3+ue.pos.x)*.22;if(ue.mesh.scale.setScalar(Lr),ue.light.intensity=ue.completed?.6+Math.sin(U*1.6+ue.pos.z)*.15:1.6+Math.sin(U*2.5+ue.pos.z)*.9,ue.ring&&(ue.ring.rotation.x+=.01,ue.ring.rotation.y+=.015),ue.beacon){const us=ue.beacon.material,sl=ue.completed?.08+Math.sin(U*1.4+ue.pos.z)*.02:ue.triggered?.34+Math.sin(U*3.8+ue.pos.x)*.08:.16+Math.sin(U*2.2+ue.pos.x)*.04;us.opacity=sl,ue.beacon.scale.y=ue.triggered?1.18:.94+Lr*.2,ue.beacon.position.y=ue.pos.y+2.15+Math.sin(U*1.6+ue.pos.z)*.12}if(ue.halo){const us=ue.halo.material;us.opacity=ue.completed?.08+Math.sin(U*1.2+ue.pos.x)*.02:ue.triggered?.24+Math.sin(U*3.2+ue.pos.z)*.06:.14+Math.sin(U*1.8+ue.pos.z)*.04,ue.halo.scale.setScalar(ue.triggered?1.18+Math.sin(U*2.8)*.06:1+Lr*.1),ue.halo.rotation.z+=ue.triggered?.01:.004}const Qo=p.position.distanceTo(ue.pos);ue.triggered=!ue.completed&&f.value&&!n.value&&Qo<3.5}),Ve(),Fn()}else l.value.length&&(l.value=[]),p.position.x+=(Jt*1.5-p.position.x)*.02,p.position.y=6+Math.sin(U*.3)*.3,p.fov+=(60-p.fov)*.05,p.updateProjectionMatrix(),p.lookAt(0,1+Math.sin(U*.2)*.2,0);g.render(_,p)};return{animateScene:Bn,disposeScene:()=>{cancelAnimationFrame(m),g==null||g.dispose()},flyToTourStart:()=>{p&&Mt.to(p.position,{x:-10,y:4,z:14,duration:1.2,ease:"power2.out"})},initScene:()=>{e.value&&(ne=new rS,g=new mg({canvas:e.value,antialias:!0,alpha:!1}),g.setSize(window.innerWidth,window.innerHeight),g.setPixelRatio(Math.min(window.devicePixelRatio,2)),g.setClearColor(197125,1),g.shadowMap.enabled=!0,g.shadowMap.type=I_,g.outputColorSpace=hi,g.toneMapping=U_,g.toneMappingExposure=.84,_=new ig,_.fog=new Jh(655365,.022),p=new ti(60,window.innerWidth/window.innerHeight,.1,200),p.position.set(0,6,18),p.lookAt(0,1,0),k(),X(),tt(),Ht(),ae(),G(),Tt(),Ot(),kt(),le(),Zt(),Me(),Ae(),Je())},initializeRippleCanvas:()=>{o.value&&(o.value.width=window.innerWidth,o.value.height=window.innerHeight,se=o.value.getContext("2d"))},onCanvasClick:U=>{if(!r.value||!f.value||!e.value||!p||!M||!g||(o.value&&at.push({x:U.clientX,y:U.clientY,r:0,maxR:120,alpha:.7}),Nt.set(U.clientX/window.innerWidth*2-1,-(U.clientY/window.innerHeight)*2+1),pt.setFromCamera(Nt,p),pt.intersectObject(M).length===0))return;a.value+=1;const Y=(Math.random()-.5)*.35,gt=(Math.random()-.5)*.2;Mt.timeline().to(p.position,{x:`+=${Y}`,y:`+=${gt}`,duration:.07,ease:"none"}).to(p.position,{x:`-=${Y*.8}`,y:`-=${gt*.8}`,duration:.07,ease:"none"}).to(p.position,{x:`+=${Y*.15}`,y:`+=${gt*.15}`,duration:.1,ease:"none"})},onMouseMove:U=>{Jt=(U.clientX/window.innerWidth-.5)*2},onResize:()=>{!p||!g||(p.aspect=window.innerWidth/window.innerHeight,p.updateProjectionMatrix(),g.setSize(window.innerWidth,window.innerHeight),o.value&&(o.value.width=window.innerWidth,o.value.height=window.innerHeight),l.value.length&&(l.value=[]))},playIntroSequence:()=>{p&&(V=.18,Mt.timeline().to(p.position,{x:-3,y:7.2,z:13,duration:.9,ease:"power2.out"}).to(p.position,{x:2.5,y:4.2,z:10.4,duration:1.4,ease:"power2.inOut"},"-=0.35").to(p.position,{x:-9.5,y:4.1,z:14.2,duration:1.1,ease:"power2.out"}))},resetSessionVisuals:()=>{at.length=0,V=0,It=null,we.ridge=0,we.storm=0,we.fissure=0,we.magnetic=0,we.skyfold=0,jt.x=0,jt.y=0,jt.z=0,jt.lookX=0,jt.lookY=0,jt.lookZ=0,jt.fov=0,l.value=[],tn($,0),tn(vt,0),tn(At,.18),tn(st,.12),tn(ct,.14),tn(Gt,0),tn(wt,0),tn(Z,0),tn(Bt,0),et.forEach((Y,gt)=>{const Et=Y.material;Et.opacity=0,Et.color.set(gt%2===0?16748349:8118527),Y.position.x=0,Y.rotation.z=0});const U=W.material;U.opacity=0,U.color.set(16748349),W.scale.set(1,1,1),Pt.forEach(Y=>{Y.group.visible=!1,Y.light.intensity=0,Y.light.distance=14,Y.halo.rotation.z=0,Y.halo.scale.set(1,1,1),Y.bloom.scale.set(1,1,1),Y.pillar.scale.set(1,1,1),Y.pillar.position.y=3.2,Y.halo.material.opacity=0,Y.bloom.material.opacity=0,Y.pillar.material.opacity=0,Y.moteA.material.opacity=0,Y.moteB.material.opacity=0,Y.halo.material.color.set(16748349),Y.bloom.material.color.set(16748349),Y.pillar.material.color.set(16748349),Y.moteA.material.color.set(16766346),Y.moteB.material.color.set(8118527),Y.moteA.position.set(2.2,1.6,.4),Y.moteB.position.set(-2.5,2.3,-.6)}),q.forEach(Y=>{const gt=Y.material;gt.opacity=0});const L=M.material;L.color.set(3613717),L.emissive.set(2754568),L.emissiveIntensity=.62,w.color.set(16737826),w.intensity=2.5,P.color.set(16724736),P.intensity=.95,D.color.set(3346722),D.intensity=1.05,x.color.set(16757575),x.intensity=2.2,v&&(v.uniforms.uTerrainDominionColor.value.set(8118527),v.uniforms.uTerrainShadowColor.value.set(1248274),v.uniforms.uTerrainLightDir.value.set(-.3,.88,-.34).normalize(),v.uniforms.uTerrainTime.value=0,v.uniforms.uTerrainContourStrength.value=.55),j.material.color.set(5570576),j.material.opacity=.18,d.forEach(Y=>{Y.triggered=!1,Y.completed=!1,ls(Y)})},resetTour:()=>{},returnCameraHome:()=>{p&&Mt.to(p.position,{x:0,y:6,z:18,duration:2,ease:"power3.inOut"})}}}const pA={key:2,class:"intro-transition"},mA={key:0,class:"analysis-focus-overlay"},_A={key:0,class:"scene-hotspot-layer"},gA=["onClick"],vA={class:"scene-hotspot-label"},yA={class:"scene-hotspot-state"},xA={class:"scene-hotspot-card-header"},MA={class:"scene-hotspot-card-kicker"},SA={class:"scene-hotspot-card-badge"},bA={class:"scene-hotspot-card-body"},EA={class:"scene-hotspot-copy-block"},TA={class:"scene-hotspot-copy-block"},wA={class:"scene-hotspot-copy-block scene-hotspot-copy-block-meaning"},AA={class:"cue-frame"},CA={class:"cue-title"},RA={class:"cue-body"},PA={class:"hud-status"},DA={class:"data-stream"},IA={class:"link-metrics"},LA={class:"metric-label"},UA={class:"metric-value"},NA={class:"tour-speed"},OA={class:"speed-val"},FA={key:0,class:"briefing-panel"},BA={class:"briefing-kicker"},kA={class:"briefing-title"},zA={class:"briefing-copy"},HA={class:"briefing-progress"},VA={class:"choice-copy"},GA={class:"prep-header"},WA={class:"prep-kicker"},XA={class:"prep-header-actions"},YA={class:"prep-dist"},qA={class:"prep-collapsed-title"},$A={class:"prep-collapsed-copy"},KA={class:"prep-system-title"},jA={class:"prep-title"},ZA={class:"prep-instruction"},JA={class:"analysis-status"},QA={class:"analysis-brief-grid"},t2={class:"analysis-brief-label"},e2={class:"analysis-brief-text"},n2={class:"analysis-question"},i2={class:"analysis-clue-empty"},r2={class:"analysis-clue-collection"},s2={class:"analysis-clue-status-label"},o2={class:"analysis-clue-status-state"},a2={class:"analysis-clue-collection analysis-clue-collection-compact"},l2={class:"analysis-clue-status-label"},c2={class:"analysis-status"},u2={class:"analysis-section"},f2={class:"prep-actions analysis-hypothesis-grid"},h2=["onClick"],d2={class:"analysis-card-title"},p2={class:"analysis-card-copy"},m2={key:0,class:"analysis-breakthrough"},_2={class:"analysis-breakthrough-title"},g2={class:"prep-result"},v2={class:"analysis-stage-actions analysis-stage-actions-split"},y2=["disabled"],x2={class:"buffer-header"},M2={class:"buffer-kicker"},S2={class:"buffer-dist"},b2={class:"buffer-title"},E2={class:"buffer-lead"},T2={class:"buffer-progress"},w2={class:"buffer-steps"},A2={class:"buffer-step-index"},C2={class:"signal-header"},R2={class:"signal-tag"},P2={class:"signal-dist"},D2={class:"signal-meta"},I2=["innerHTML"],L2={key:0,class:"choice-panel choice-panel-stage"},U2={key:0,class:"choice-semicircle"},N2=["onClick"],O2={class:"choice-sector-content"},F2={class:"choice-id"},B2={class:"choice-copy"},k2={key:1,class:"choice-table"},z2=["onClick"],H2={class:"choice-id"},V2={class:"choice-copy"},G2={key:1,class:"reply-panel"},W2={class:"outgoing-copy"},X2={class:"ending-header"},Y2={class:"ending-kicker"},q2={class:"ending-vector"},$2={class:"ending-title"},K2={class:"ending-summary"},j2={class:"ending-body"},Z2={class:"ending-stats"},J2={class:"ending-stat"},Q2={class:"ending-stat"},tC={class:"ending-stat"},eC={key:3,class:"click-hint"},nC=3,iC=pv({__name:"TechView",props:{active:{type:Boolean}},emits:["explore-mode"],setup(n,{emit:t}){const e=n,i=t,r=de(null),s=de(null),o=de(null),a=de(null),l=de(null),u=de(null),c=de(null),f=de(null),h=de(null),d=de(null),g=de(null),_=de(!1),p=de(!0),m=de(!1),S=de(1),M=de(0),v=de(!1),R=de(null),w=de(null),P=de("brief"),D=de(!1),x=de([]),b=de(null);let N=null,B=null;const{activeTransmission:H,advanceIntroBriefing:J,bufferingTransmission:j,completedSignals:$,dataLines:et,dismissNarrative:W,endingPanel:vt,environmentMode:Pt,introBriefing:At,introBriefingIndex:zt,inspectPendingClue:pe,linkStatus:st,openPendingTransmission:xt,pendingSignals:Ft,pendingTransmission:ct,nextSignalLabel:Vt,resetSession:Kt,scheduleUpcomingSignal:Gt,sceneCue:ye,sendAdvice:C,signalsArmed:F,startIntroBriefing:T,statDisplay:rt,stats:K,submitPendingHypothesis:nt,vectorLabel:ot}=lA({isExploring:_,routeMarkers:M}),{animateScene:ht,disposeScene:it,flyToTourStart:A,initScene:E,initializeRippleCanvas:z,onCanvasClick:q,onMouseMove:Z,onResize:Q,playIntroSequence:St,resetSessionVisuals:_t,resetTour:wt,returnCameraHome:qt}=dA({activeTransmission:H,analysisFocusTarget:R,canvasEl:r,completedSignals:$,isExploring:_,pendingTransmission:ct,environmentMode:Pt,rippleEl:a,routeMarkers:M,sceneHotspots:x,sceneCue:ye,signalsArmed:F,tourSpeed:S}),mt=rn(()=>`mode-${Pt.value}`),Dt=rn(()=>_.value?zt.value===null?1:[.12,.32,.58][zt.value]??.12:.04),Bt=rn(()=>Dt.value<1),Wt=rn(()=>_.value&&!vt.value),Ct=rn(()=>{var yt;return!!((yt=ct.value)!=null&&yt.windowReady)}),ne=rn(()=>{var yt;return((yt=ct.value)==null?void 0:yt.discoveredClueIds.length)??0}),Jt=rn(()=>ct.value?ct.value.discoveredClueIds.length>=ct.value.clues.length:!1),se=rn(()=>{var yt;return((yt=ct.value)==null?void 0:yt.clues.find(y=>y.id===w.value))??null}),V=rn(()=>{var yt;return((yt=ct.value)==null?void 0:yt.clues.find(y=>y.id===b.value))??null}),It=rn(()=>x.value.filter(yt=>yt.visible)),at=rn(()=>!!(_.value&&ct.value&&!H.value&&!j.value&&!At.value&&!vt.value)),pt=rn(()=>{const yt=8+Dt.value*60,y=Math.max(yt-18,0),k=Math.max(yt-8,0);return{background:`radial-gradient(circle at 50% 56%, rgba(3, 2, 5, 0) 0%, rgba(3, 2, 5, 0.05) ${y}%, rgba(3, 2, 5, 0.22) ${k}%, rgba(3, 2, 5, 0.68) ${yt}%, rgba(1, 1, 4, 0.98) 100%)`}}),Nt=rn(()=>{const yt=new Date;return`${yt.getFullYear()}.${String(yt.getMonth()+1).padStart(2,"0")}.${String(yt.getDate()).padStart(2,"0")}`}),Lt=(yt,y=7,k=4.2)=>{yt&&(Mt.killTweensOf(yt),Mt.fromTo(yt,{y:0,scale:1},{y:-y,scale:1.003,duration:k,repeat:-1,yoyo:!0,ease:"sine.inOut"}))},ie=()=>{if(!h.value)return;const yt=h.value.querySelectorAll(".analysis-guide, .analysis-brief-card, .analysis-question, .analysis-clue-page, .analysis-clue-empty, .analysis-clue-collection, .analysis-stage-actions, .analysis-status, .analysis-section, .analysis-breakthrough, .prep-result");yt.length&&(Mt.killTweensOf(yt),Mt.fromTo(yt,{autoAlpha:0,y:16,filter:"blur(8px)"},{autoAlpha:1,y:0,filter:"blur(0px)",duration:.52,ease:"power2.out",stagger:.045,clearProps:"filter"}))},Le=()=>{if(!h.value)return;const yt=h.value.querySelector(".analysis-scene-clue, .analysis-clue-empty");yt&&(Mt.killTweensOf(yt),Mt.fromTo(yt,{autoAlpha:0,y:18,rotateX:4,transformOrigin:"50% 0%"},{autoAlpha:1,y:0,rotateX:0,duration:.48,ease:"power2.out"}))},Ze=()=>{d.value&&(Mt.killTweensOf(d.value),Mt.fromTo(d.value,{autoAlpha:0,x:-18,y:10,filter:"blur(8px)"},{autoAlpha:1,x:0,y:0,filter:"blur(0px)",duration:.45,ease:"power2.out",clearProps:"filter"})),g.value&&(Mt.killTweensOf(g.value),Mt.fromTo(g.value,{autoAlpha:0,x:18,y:-6},{autoAlpha:1,x:0,y:0,duration:.42,delay:.06,ease:"power2.out"}))},be=()=>{p.value=!0,m.value=!1,Zn(()=>{s.value&&!_.value&&(Mt.killTweensOf(s.value),s.value.style.opacity="1",s.value.style.transform="translateY(0)"),o.value&&!_.value&&(Mt.killTweensOf(o.value),o.value.style.opacity="0",o.value.style.transform="translateY(20px)")})},an=()=>{N&&clearTimeout(N),B&&clearTimeout(B),v.value=!1,_.value=!1,W(),_t(),wt(),qt(),i("explore-mode",!1),be()},Te=()=>{_.value||(_.value=!0,i("explore-mode",!0),Kt(),_t(),wt(),T(),St(),s.value?(Mt.killTweensOf(s.value),Mt.to(s.value,{opacity:0,y:-30,duration:.8,ease:"power2.in",onComplete:()=>{_.value&&(p.value=!1)}})):p.value=!1,m.value=!0,Zn(()=>{o.value&&(Mt.killTweensOf(o.value),Mt.fromTo(o.value,{opacity:0,y:20},{opacity:1,y:0,duration:.8,delay:.6,ease:"power2.out"}))}))},qn=()=>{N&&clearTimeout(N),B&&clearTimeout(B),v.value=!0,N=setTimeout(()=>{J()&&(A(),Gt())},220),B=setTimeout(()=>{v.value=!1},620)},Rr=yt=>{C(yt)},we=()=>{R.value=null,w.value=null},jt=yt=>{w.value=yt.id,R.value=yt.focusTarget??null},Xs=(yt,y={})=>{var X;(((X=ct.value)==null?void 0:X.discoveredClueIds.includes(yt.id))??!1)||pe(yt.id),b.value=yt.id,y.focus?jt(yt):we()},os=()=>{P.value="brief",D.value=!1,b.value=null,we()},Vi=yt=>{Xs(yt)},Ys=yt=>{var k;const y=(k=ct.value)==null?void 0:k.clues.find(X=>X.id===yt);if(y){if(b.value===yt){b.value=null,we();return}P.value=Jt.value?"theory":"brief",Vi(y)}},Si=yt=>{const y=window.innerWidth,k=window.innerHeight,X=Math.min(320,y*.42),tt=yt.x+X>y-24,G=yt.y+260>k-24;return{left:tt?"auto":"0",right:tt?"0":"auto",top:G?"auto":"calc(100% + 10px)",bottom:G?"calc(100% + 10px)":"auto"}},qs=()=>{D.value=!D.value,D.value||Zn(()=>{ie(),Le()})},$s=yt=>{we(),nt(yt)},tn=()=>{we(),xt()},as=()=>{_.value&&(we(),_.value=!1,i("explore-mode",!1),W(),o.value?(Mt.killTweensOf(o.value),Mt.to(o.value,{opacity:0,y:20,duration:.5,ease:"power2.in",onComplete:()=>{_.value||(m.value=!1)}})):m.value=!1,p.value=!0,Zn(()=>{s.value&&(Mt.killTweensOf(s.value),Mt.fromTo(s.value,{opacity:0,y:-30},{opacity:1,y:0,duration:.8,delay:.3,ease:"power2.out"}))}),qt())},Jo=()=>{_.value&&(we(),Kt(),_t(),wt(),T(),St())},ls=yt=>{yt.key==="Escape"&&_.value&&as()};return ui(()=>e.active,yt=>{if(!yt){we(),an();return}yt&&be()},{immediate:!0}),ui(()=>{var yt;return((yt=ct.value)==null?void 0:yt.id)??null},yt=>{if(!yt){os(),l.value&&Mt.killTweensOf(l.value);return}os(),Zn(()=>{Lt(l.value,7,4.4),ie()})}),ui(()=>Jt.value,(yt,y)=>{!yt||yt===y||(P.value="theory",D.value=!1,we(),Zn(()=>{ie(),Le()}))}),ui(()=>b.value,(yt,y)=>{!yt||yt===y||Zn(()=>{Le()})}),ui(()=>D.value,yt=>{yt||Zn(()=>{ie()})}),ui(()=>{var yt;return((yt=j.value)==null?void 0:yt.id)??null},yt=>{if(!yt){u.value&&Mt.killTweensOf(u.value);return}Zn(()=>{Lt(u.value,5,3.8)})}),ui(()=>{var yt;return((yt=H.value)==null?void 0:yt.id)??null},yt=>{if(!yt){c.value&&Mt.killTweensOf(c.value);return}Zn(()=>{if(Lt(c.value,6,4),c.value){const y=c.value.querySelectorAll(".signal-header, .signal-meta, .signal-body, .choice-btn, .reply-panel, .signal-bar");Mt.killTweensOf(y),Mt.fromTo(y,{autoAlpha:0,y:18,filter:"blur(8px)"},{autoAlpha:1,y:0,filter:"blur(0px)",duration:.46,ease:"power2.out",stagger:.05,clearProps:"filter"})}})}),ui(()=>{var yt;return((yt=vt.value)==null?void 0:yt.code)??null},yt=>{if(!yt){f.value&&Mt.killTweensOf(f.value);return}Zn(()=>{if(Lt(f.value,4,4.8),f.value){const y=f.value.querySelectorAll(".ending-header, .ending-title, .ending-summary, .ending-body, .ending-stats, .ending-actions");Mt.killTweensOf(y),Mt.fromTo(y,{autoAlpha:0,y:22,filter:"blur(10px)"},{autoAlpha:1,y:0,filter:"blur(0px)",duration:.54,ease:"power2.out",stagger:.06,clearProps:"filter"})}})}),ui(()=>{var yt;return((yt=se.value)==null?void 0:yt.id)??null},yt=>{if(!yt){d.value&&Mt.killTweensOf(d.value),g.value&&Mt.killTweensOf(g.value);return}Zn(()=>{Ze()})}),Za(()=>{var yt;E(),ht(),window.addEventListener("mousemove",Z),window.addEventListener("resize",Q),window.addEventListener("keydown",ls),z(),(yt=r.value)==null||yt.addEventListener("click",q)}),Ec(()=>{var yt;N&&clearTimeout(N),B&&clearTimeout(B),Mt.killTweensOf([l.value,u.value,c.value,f.value,h.value,d.value,g.value]),window.removeEventListener("mousemove",Z),window.removeEventListener("resize",Q),window.removeEventListener("keydown",ls),(yt=r.value)==null||yt.removeEventListener("click",q),W(),it()}),(yt,y)=>(Yt(),$t("div",{class:Xe(["page-tech",mt.value])},[I("canvas",{ref_key:"canvasEl",ref:r,class:"scene-canvas"},null,512),Wt.value?(Yt(),$t("div",{key:0,class:Xe(["corner-matte",{"corner-matte-intro":Bt.value}])},null,2)):Dn("",!0),Bt.value?(Yt(),$t("div",{key:1,class:"intro-shroud",style:di(pt.value)},null,4)):Dn("",!0),v.value?(Yt(),$t("div",pA)):Dn("",!0),y[41]||(y[41]=I("div",{class:"scanline-overlay"},null,-1)),y[42]||(y[42]=I("div",{class:"chromatic-edge"},null,-1)),I("div",{class:Xe(["weather-overlay",mt.value])},null,2),y[43]||(y[43]=I("div",{class:"noise-overlay"},null,-1)),He(Xi,{name:"focus"},{default:Ni(()=>[se.value?(Yt(),$t("div",mA,[I("div",{ref_key:"focusCopyEl",ref:d,class:"analysis-focus-copy"},[y[2]||(y[2]=I("div",{class:"analysis-focus-kicker"},"镜头聚焦",-1)),I("strong",null,bt(se.value.title),1),I("span",null,bt(se.value.whyItMatters),1)],512),I("button",{ref_key:"focusCloseEl",ref:g,class:"analysis-focus-close",onClick:we}," 返回分析板 ",512)])):Dn("",!0)]),_:1}),He(Xi,{name:"hotspots"},{default:Ni(()=>[at.value?(Yt(),$t("div",_A,[(Yt(!0),$t(Ne,null,In(It.value,k=>{var X,tt,G;return Yt(),$t("div",{key:k.clueId,class:"scene-hotspot-cluster",style:di({left:`${k.x}px`,top:`${k.y}px`})},[I("button",{class:Xe(["scene-hotspot",{read:k.discovered,expanded:((X=V.value)==null?void 0:X.id)===k.clueId}]),onClick:Hy(Tt=>Ys(k.clueId),["stop"])},[y[3]||(y[3]=I("span",{class:"scene-hotspot-dot"},null,-1)),I("span",vA,bt(k.label),1),I("span",yA,bt(((tt=V.value)==null?void 0:tt.id)===k.clueId?"再次点击收起":k.discovered?"点击重看线索":"点击勘验"),1)],10,gA),((G=V.value)==null?void 0:G.id)===k.clueId?(Yt(),$t("div",{key:0,class:"scene-hotspot-card",style:di(Si(k))},[I("div",xA,[I("div",null,[I("div",MA,bt(V.value.tag),1),I("strong",null,bt(V.value.title),1)]),I("span",SA,bt(V.value.sceneLabel),1)]),I("div",bA,[I("div",EA,[y[4]||(y[4]=I("span",null,"你在现场看到",-1)),I("strong",null,bt(V.value.summary),1)]),I("div",TA,[y[5]||(y[5]=I("span",null,"系统归档结果",-1)),I("p",null,bt(V.value.detail),1)]),I("div",wA,[y[6]||(y[6]=I("span",null,"这条线索说明",-1)),I("p",null,bt(V.value.whyItMatters),1)])])],4)):Dn("",!0)],4)}),128))])):Dn("",!0)]),_:1}),He(Xi,{name:"cue"},{default:Ni(()=>[Rt(ye)&&!Rt(H)&&!Rt(ct)&&!Rt(j)&&!Rt(At)&&!Rt(vt)?(Yt(),$t("div",{key:0,class:Xe(["scene-cue",`cue-${Rt(ye).mode}`])},[y[8]||(y[8]=I("div",{class:"cue-weather"},null,-1)),I("div",AA,[y[7]||(y[7]=I("div",{class:"cue-kicker"},"FIELD SHIFT",-1)),I("h2",CA,bt(Rt(ye).title),1),I("p",RA,bt(Rt(ye).body),1)])],2)):Dn("",!0)]),_:1}),y[44]||(y[44]=I("div",{class:"hud-corner tl"},null,-1)),y[45]||(y[45]=I("div",{class:"hud-corner tr"},null,-1)),y[46]||(y[46]=I("div",{class:"hud-corner bl"},null,-1)),y[47]||(y[47]=I("div",{class:"hud-corner br"},null,-1)),I("div",PA,[I("div",null,[y[9]||(y[9]=I("span",{class:"status-dot"},null,-1)),po(bt(Rt(st)),1)]),I("div",null,bt(Nt.value),1),y[10]||(y[10]=I("div",null,"FIELD UNIT: NIA-7",-1)),I("div",null,"PENDING WINDOWS: "+bt(Rt(Ft)),1),I("div",null,"NEXT WINDOW: "+bt(Rt(Vt)),1),I("div",null,"VECTOR: "+bt(Rt(ot)),1)]),I("div",DA,[(Yt(!0),$t(Ne,null,In(Rt(et),(k,X)=>(Yt(),$t("div",{key:X,class:"data-line",style:di({animationDelay:`${X*.3}s`})},bt(k),5))),128))]),wo(I("div",{class:"tech-content",ref_key:"contentEl",ref:s},[y[12]||(y[12]=ny('<div class="tech-label" data-v-449345dc>// ECHO DESK · REMOTE ADVISORY LINK</div><h1 class="tech-title" data-text="WERISS" data-v-449345dc>WERISS</h1><div class="tech-tagline" data-v-449345dc><span class="tag-line" data-v-449345dc></span> YOU CANNOT ENTER, BUT YOUR WORDS ARRIVE FIRST </div><div class="tech-description" data-v-449345dc> 回响链路已重连。<br data-v-449345dc> 一名进入山脉的实地人员正在向你发送失真信号。<br data-v-449345dc><span class="red-text" data-v-449345dc>你只有几秒</span>决定她下一步该怎么走。 </div>',4)),I("button",{class:"tech-btn",onClick:Te},[...y[11]||(y[11]=[I("span",{class:"btn-bracket"},"[",-1),po(" LINK IN ",-1),I("span",{class:"btn-bracket"},"]",-1)])])],512),[[wa,p.value]]),wo(I("div",{class:"explore-hud",ref_key:"exploreHudEl",ref:o},[I("div",IA,[(Yt(!0),$t(Ne,null,In(Rt(rt),k=>(Yt(),$t("div",{key:k.label,class:"metric-chip"},[I("span",LA,bt(k.label),1),I("span",UA,bt(k.value),1)]))),128))]),I("div",NA,[y[13]||(y[13]=I("span",{class:"speed-label"},"CRUISE SPEED",-1)),wo(I("input",{type:"range",min:"0.2",max:"3",step:"0.1","onUpdate:modelValue":y[0]||(y[0]=k=>S.value=k),class:"speed-slider"},null,512),[[By,S.value,void 0,{number:!0}]]),I("span",OA,bt(S.value.toFixed(1))+"x",1)]),I("button",{class:"exit-btn",onClick:as},[...y[14]||(y[14]=[I("span",{class:"btn-bracket"},"[",-1),po(" EXIT ",-1),I("span",{class:"btn-bracket"},"]",-1)])])],512),[[wa,m.value]]),He(Xi,{name:"briefing"},{default:Ni(()=>[Rt(At)?(Yt(),$t("div",FA,[I("div",BA,"ROLE BRIEF / "+bt(Rt(At).label),1),I("h2",kA,bt(Rt(At).title),1),I("p",zA,bt(Rt(At).body),1),I("div",HA,[(Yt(),$t(Ne,null,In(nC,k=>I("span",{key:k,class:Xe(["progress-dot",{active:k-1===Rt(zt)}])},null,2)),64))]),I("button",{class:"choice-btn briefing-action",onClick:qn},[y[15]||(y[15]=I("span",{class:"choice-id"},"GO",-1)),I("span",VA,bt(Rt(At).action),1)])])):Dn("",!0)]),_:1}),He(Xi,{name:"prep"},{default:Ni(()=>[Rt(ct)&&!Rt(H)?(Yt(),$t("div",{key:0,ref_key:"prepPanelEl",ref:l,class:Xe(["prep-panel",{collapsed:D.value}])},[I("div",GA,[I("span",WA,"副本分析 / "+bt(Rt(ct).id),1),I("div",XA,[I("span",YA,"DIST "+bt(Rt(ct).dist)+"m",1),I("button",{class:"prep-collapse",onClick:qs},bt(D.value?"展开面板":"折叠面板"),1)])]),D.value?(Yt(),$t(Ne,{key:0},[I("div",qA,bt(Jt.value?"判断已解锁":`现场探索 ${ne.value}/${Rt(ct).clues.length}`),1),I("div",$A,bt(Jt.value?"线索已经找齐。展开面板，提交你对这关规则的判断。":"点场景里的标注物体，把这关的核心线索全部找出来。"),1)],64)):(Yt(),$t(Ne,{key:1},[I("div",KA,bt(Rt(ct).title),1),I("h2",jA,bt(Jt.value?"线索找齐了，开始做判断":Rt(ct).displayTitle),1),I("div",ZA,[y[16]||(y[16]=I("span",{class:"prep-instruction-label"},"这一关的目标",-1)),I("span",null,bt(Rt(ct).objective),1)]),Jt.value?(Yt(),$t("div",{key:1,ref_key:"analysisStageEl",ref:h,class:"analysis-stage-panel"},[y[28]||(y[28]=I("div",{class:"analysis-status"}," 现场线索已全部归档。现在可以提交你对这关规则的判断了。 ",-1)),I("div",a2,[(Yt(!0),$t(Ne,null,In(Rt(ct).clues,k=>(Yt(),$t("div",{key:k.id,class:"analysis-clue-status-card read"},[I("span",l2,bt(k.sceneLabel),1),I("strong",null,bt(k.title),1),y[22]||(y[22]=I("span",{class:"analysis-clue-status-state"},"已归档",-1))]))),128))]),I("div",c2,bt(Rt(ct).windowReady?"你已经找到破局点，可以直接进入正式建议。":"从下面选一个你最相信的解释。"),1),I("div",u2,[y[24]||(y[24]=I("div",{class:"analysis-section-title"},"你认为最合理的解释",-1)),y[25]||(y[25]=I("div",{class:"analysis-section-copy"}," 读完至少两条线索后，选一个你最相信的判断。选错会让风险 +1，但不会立刻卡死。 ",-1)),I("div",f2,[(Yt(!0),$t(Ne,null,In(Rt(ct).hypotheses,k=>(Yt(),$t("button",{key:k.id,class:Xe(["prep-action analysis-card analysis-hypothesis",{selected:Rt(ct).selectedHypothesisId===k.id,used:Rt(ct).attemptedHypothesisIds.includes(k.id)&&Rt(ct).selectedHypothesisId!==k.id}]),onClick:X=>$s(k.id)},[y[23]||(y[23]=I("span",{class:"analysis-card-tag"},"判断",-1)),I("span",d2,bt(k.label),1),I("span",p2,bt(k.detail),1)],10,h2))),128))])]),Rt(ct).windowReady?(Yt(),$t("div",m2,[y[26]||(y[26]=I("div",{class:"analysis-section-title"},"你找到的破局点",-1)),I("strong",_2,bt(Rt(ct).breakthroughTitle),1),I("span",null,bt(Rt(ct).breakthroughDetail),1)])):Dn("",!0),I("div",g2,[y[27]||(y[27]=I("span",{class:"prep-result-label"},"系统反馈",-1)),I("span",null,bt(Rt(ct).lastResult),1)]),I("div",v2,[I("button",{class:"prep-confirm analysis-secondary",onClick:y[1]||(y[1]=k=>D.value=!0)}," 先收起面板，再看一眼现场 "),I("button",{class:Xe(["prep-confirm",{ready:Ct.value}]),disabled:!Ct.value,onClick:tn},bt(Ct.value?"接入正式建议窗口":"先完成破局判断"),11,y2)])],512)):(Yt(),$t("div",{key:0,ref_key:"analysisStageEl",ref:h,class:"analysis-stage-panel"},[I("div",JA,[po(" 已归档线索 "+bt(ne.value)+"/"+bt(Rt(ct).clues.length)+" ",1),y[17]||(y[17]=I("span",{class:"analysis-status-divider"},"|",-1)),y[18]||(y[18]=po(" 点击场景里的标注对象，把线索一条条捞出来 ",-1))]),y[21]||(y[21]=I("div",{class:"analysis-guide"},[I("span",{class:"analysis-guide-title"},"现在怎么玩"),I("div",{class:"analysis-guide-step"},[I("span",{class:"analysis-guide-index"},"01"),I("span",null,"你可以先折叠右侧面板，再去点场景里带名字的对象。")]),I("div",{class:"analysis-guide-step"},[I("span",{class:"analysis-guide-index"},"02"),I("span",null,"每点中一个对象，系统就会把对应线索归档到这里。")]),I("div",{class:"analysis-guide-step"},[I("span",{class:"analysis-guide-index"},"03"),I("span",null,"全部线索找齐以后，判断面板才会开放。")])],-1)),I("div",QA,[(Yt(!0),$t(Ne,null,In(Rt(ct).briefCards,k=>(Yt(),$t("div",{key:k.label,class:"analysis-brief-card"},[I("span",t2,bt(k.label),1),I("strong",e2,bt(k.text),1)]))),128))]),I("div",n2,[y[19]||(y[19]=I("span",{class:"analysis-question-label"},"你这一步要先想清楚",-1)),I("strong",null,bt(Rt(ct).question),1)]),I("div",i2,[y[20]||(y[20]=I("span",{class:"analysis-clue-empty-kicker"},"现场待勘验",-1)),I("strong",null,bt(V.value?`已展开：${V.value.sceneLabel}`:"先去点场景里的标注对象。"),1),I("span",null,bt(V.value?"线索正文现在直接挂在场景标注旁边。再点一次同一个标注，就能把它收起来。":"例如红日、热痕、扫频波、信标这些都可以直接交互。线索会直接在对应标注旁边展开。"),1)]),I("div",r2,[(Yt(!0),$t(Ne,null,In(Rt(ct).clues,k=>{var X;return Yt(),$t("div",{key:k.id,class:Xe(["analysis-clue-status-card",{active:((X=V.value)==null?void 0:X.id)===k.id,read:Rt(ct).discoveredClueIds.includes(k.id)}])},[I("span",s2,bt(k.sceneLabel),1),I("strong",null,bt(k.title),1),I("span",o2,bt(Rt(ct).discoveredClueIds.includes(k.id)?"已归档":"等待勘验"),1)],2)}),128))])],512))],64))],2)):Dn("",!0)]),_:1}),He(Xi,{name:"buffer"},{default:Ni(()=>[Rt(j)&&!Rt(H)?(Yt(),$t("div",{key:0,ref_key:"bufferPanelEl",ref:u,class:Xe(["buffer-panel",`buffer-${Rt(j).mode}`])},[y[29]||(y[29]=I("div",{class:"buffer-grid"},null,-1)),I("div",x2,[I("span",M2,"WINDOW SYNC / "+bt(Rt(j).id),1),I("span",S2,"DIST "+bt(Rt(j).dist)+"m",1)]),I("h2",b2,bt(Rt(j).title),1),I("p",E2,bt(Rt(j).lead),1),I("div",T2,[I("div",{class:"buffer-progress-fill",style:di({transform:`scaleX(${Rt(j).progress})`})},null,4)]),I("div",w2,[(Yt(!0),$t(Ne,null,In(Rt(j).steps,(k,X)=>(Yt(),$t("div",{key:k,class:Xe(["buffer-step",{active:X===Rt(j).stepIndex,done:X<Rt(j).stepIndex}])},[I("span",A2,"0"+bt(X+1),1),I("span",null,bt(k),1)],2))),128))])],2)):Dn("",!0)]),_:1}),He(Xi,{name:"signal"},{default:Ni(()=>{var k;return[Rt(H)?(Yt(),$t("div",{key:0,ref_key:"commsPanelEl",ref:c,class:Xe(["comms-popup",{"comms-popup-choice":Rt(H).stage==="choice"}])},[I("div",C2,[I("span",R2,"// WINDOW_"+bt(Rt(H).id),1),I("span",P2,"DIST: "+bt(Rt(H).dist)+"m",1)]),I("div",D2,[I("div",null,bt(Rt(H).title),1),I("div",null,bt(Rt(H).subtitle),1)]),I("div",{class:"signal-body",innerHTML:Rt(H).message},null,8,I2),Rt(H).stage==="choice"?(Yt(),$t("div",L2,[y[32]||(y[32]=I("div",{class:"panel-label"},"TRANSMIT ADVICE",-1)),Rt(H).choices.length===3?(Yt(),$t("div",U2,[y[31]||(y[31]=I("div",{class:"choice-table choice-table-triad","aria-hidden":"true"},null,-1)),(Yt(!0),$t(Ne,null,In(Rt(H).choices,(X,tt)=>(Yt(),$t("button",{key:X.id,type:"button",class:Xe(["choice-btn choice-sector",[`choice-sector-${tt}`,{obscured:X.obscured}]]),onClick:G=>Rr(X)},[y[30]||(y[30]=I("span",{class:"choice-sector-surface","aria-hidden":"true"},null,-1)),I("span",O2,[I("span",F2,bt(X.id),1),I("span",B2,bt(X.label),1)])],10,N2))),128))])):(Yt(),$t("div",k2,[(Yt(!0),$t(Ne,null,In(Rt(H).choices,X=>(Yt(),$t("button",{key:X.id,type:"button",class:Xe(["choice-btn",{obscured:X.obscured}]),onClick:tt=>Rr(X)},[I("span",H2,bt(X.id),1),I("span",V2,bt(X.label),1)],10,z2))),128))]))])):(Yt(),$t("div",G2,[y[33]||(y[33]=I("div",{class:"panel-label"},"ADVICE SENT",-1)),I("div",W2,bt((k=Rt(H).selectedChoice)==null?void 0:k.advisory),1),y[34]||(y[34]=I("div",{class:"panel-label panel-label-reply"},"FIELD REPLY",-1)),I("div",{class:Xe(["incoming-copy",{pending:!Rt(H).reply}])},bt(Rt(H).reply||"NIA-7 is reading your signal..."),3)])),y[35]||(y[35]=I("div",{class:"signal-bar"},null,-1))],2)):Dn("",!0)]}),_:1}),He(Xi,{name:"ending"},{default:Ni(()=>[Rt(vt)?(Yt(),$t("div",{key:0,ref_key:"endingPanelEl",ref:f,class:"ending-panel"},[I("div",X2,[I("div",Y2,"ENDING / "+bt(Rt(vt).code),1),I("div",q2,bt(Rt(vt).vector),1)]),I("h2",$2,bt(Rt(vt).title),1),I("p",K2,bt(Rt(vt).summary),1),I("div",j2,bt(Rt(vt).body),1),I("div",Z2,[I("div",J2,[y[36]||(y[36]=I("span",null,"TRUST",-1)),I("strong",null,bt(Rt(K).trust),1)]),I("div",Q2,[y[37]||(y[37]=I("span",null,"RISK",-1)),I("strong",null,bt(Rt(K).risk),1)]),I("div",tC,[y[38]||(y[38]=I("span",null,"TRUTH",-1)),I("strong",null,bt(Rt(K).truth),1)])]),I("div",{class:"ending-actions"},[I("button",{class:"choice-btn ending-action",onClick:Jo},[...y[39]||(y[39]=[I("span",{class:"choice-id"},"R1",-1),I("span",{class:"choice-copy"},"重新接入链路，开始下一轮回响",-1)])]),I("button",{class:"choice-btn ending-action ending-action-muted",onClick:as},[...y[40]||(y[40]=[I("span",{class:"choice-id"},"R2",-1),I("span",{class:"choice-copy"},"关闭链路，返回封面",-1)])])])],512)):Dn("",!0)]),_:1}),_.value&&Rt(F)&&!Rt(H)&&!Rt(j)&&!Rt(vt)&&!Rt(At)?(Yt(),$t("div",eC," EXPLORE THE TAGGED OBJECTS OR DROP ROUTE MARKERS ")):Dn("",!0),I("canvas",{ref_key:"rippleEl",ref:a,class:"ripple-canvas"},null,512)],2))}}),rC=Vh(iC,[["__scopeId","data-v-449345dc"]]),sC=[{id:"monet",name:"CG 档案馆",icon:"ARC",code:"SEAL 01",description:"主视觉断面与命运展签",position:"9%"},{id:"tech",name:"回响链路",icon:"ECHO",code:"SEAL 02",description:"远程建议窗口与异响读数",position:"43%"}];function oC(){let n=null;return{switchToTech:()=>{const r=document.querySelector(".page-monet"),s=document.querySelector(".page-tech");n&&(clearTimeout(n),n=null),Mt.killTweensOf([r,s,".tech-label",".tech-title",".tech-tagline",".tech-description",".tech-btn",".hud-corner",".hud-status"]),r&&Mt.to(r,{opacity:0,duration:.5,ease:"power2.in"}),s&&(Mt.set(s,{display:"block"}),Mt.fromTo(s,{opacity:.72},{opacity:1,duration:.45,ease:"power2.out",overwrite:"auto"})),n=setTimeout(()=>{!s||s.offsetParent===null||(Mt.fromTo(".tech-label",{x:-24,opacity:0},{x:0,opacity:1,duration:.45,ease:"power2.out",overwrite:"auto"}),Mt.fromTo(".tech-title",{x:-40,opacity:0},{x:0,opacity:1,duration:.6,delay:.08,ease:"power3.out",overwrite:"auto"}),Mt.fromTo(".tech-tagline",{x:-24,opacity:0},{x:0,opacity:1,duration:.45,delay:.14,ease:"power2.out",overwrite:"auto"}),Mt.fromTo(".tech-description",{y:18,opacity:0},{y:0,opacity:1,duration:.45,delay:.2,ease:"power2.out",overwrite:"auto"}),Mt.fromTo(".tech-btn",{y:10,opacity:0},{y:0,opacity:1,duration:.35,delay:.26,ease:"power2.out",overwrite:"auto"}),Mt.fromTo(".hud-corner",{scale:.92,opacity:0},{scale:1,opacity:1,duration:.35,delay:.08,stagger:.06,ease:"power2.out",overwrite:"auto"}),Mt.fromTo(".hud-status",{y:-12,opacity:0},{y:0,opacity:1,duration:.35,delay:.12,ease:"power2.out",overwrite:"auto"}),n=null)},40)},switchToMonet:()=>{const r=document.querySelector(".page-monet");n&&(clearTimeout(n),n=null),Mt.killTweensOf([".tech-label",".tech-title",".tech-tagline",".tech-description",".tech-btn",".hud-corner",".hud-status"]),r&&Mt.to(r,{opacity:1,duration:.8,ease:"power2.out"})},animateBubbles:r=>{document.querySelectorAll(".bubble-item").forEach(o=>{const a=o.classList.contains("active"),l=o.querySelector(".bubble");l&&Mt.to(l,{scale:a?1.2:1,duration:.5,ease:"elastic.out(1, 0.5)"})})}}}function aC(){return{initHeaderAnimation:()=>{const e=document.querySelector(".painting-header");if(!e)return;const i=e.querySelector("h1"),r=e.querySelector("p"),s=e.querySelector(".start-btn");i&&Mt.from(i,{y:-50,opacity:0,duration:1,delay:.5,ease:"power3.out"}),r&&Mt.from(r,{y:-30,opacity:0,duration:1,delay:.8,ease:"power3.out"}),s&&(Mt.from(s,{scale:0,opacity:0,duration:.8,delay:1.2,ease:"back.out(1.7)"}),Mt.to(s,{y:-5,duration:1.5,ease:"power1.inOut",yoyo:!0,repeat:-1}))},initBubbleAnimation:()=>{setTimeout(()=>{document.querySelectorAll(".bubble-item").forEach((i,r)=>{Mt.set(i,{x:-150,opacity:0,scale:0}),Mt.to(i,{x:0,opacity:1,scale:1,duration:.8,delay:2+r*.2,ease:"elastic.out(1, 0.5)"})})},100)}}}const lC={__name:"App",setup(n){const t=de(null),e=de("tech"),i=de(sC),r=de(!1),{switchToTech:s,switchToMonet:o,animateBubbles:a}=oC(),{initHeaderAnimation:l,initBubbleAnimation:u}=aC(),c=h=>{h?Mt.to(".bubble-nav",{x:-120,opacity:0,duration:.7,ease:"power2.in",onComplete:()=>{r.value=!0}}):(r.value=!1,Mt.fromTo(".bubble-nav",{x:-120,opacity:0},{x:0,opacity:1,duration:.7,ease:"power2.out"}))},f=h=>{e.value!==h&&(e.value=h,a(h),h==="tech"?s():o())};return Za(()=>{l(),u()}),(h,d)=>(Yt(),$t("div",{class:Xe(["gallery-container",{"tech-mode":e.value==="tech"}]),ref_key:"container",ref:t},[wo(He(S1,{pages:i.value,currentPage:e.value,onPageChange:f},null,8,["pages","currentPage"]),[[wa,!r.value]]),wo(He(Qw,{active:e.value==="monet"},null,8,["active"]),[[wa,e.value==="monet"]]),wo(He(rC,{active:e.value==="tech",onExploreMode:c},null,8,["active"]),[[wa,e.value==="tech"]])],2))}},cC=Wy(lC);cC.mount("#app");
