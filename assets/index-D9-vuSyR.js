(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Qu(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const be={},Rs=[],xi=()=>{},vp=()=>!1,ml=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),tf=n=>n.startsWith("onUpdate:"),We=Object.assign,ef=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},xg=Object.prototype.hasOwnProperty,_e=(n,t)=>xg.call(n,t),Gt=Array.isArray,Ps=n=>Ko(n)==="[object Map]",xp=n=>Ko(n)==="[object Set]",sh=n=>Ko(n)==="[object Date]",Jt=n=>typeof n=="function",Be=n=>typeof n=="string",yi=n=>typeof n=="symbol",ge=n=>n!==null&&typeof n=="object",yp=n=>(ge(n)||Jt(n))&&Jt(n.then)&&Jt(n.catch),Mp=Object.prototype.toString,Ko=n=>Mp.call(n),yg=n=>Ko(n).slice(8,-1),Sp=n=>Ko(n)==="[object Object]",nf=n=>Be(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,xo=Qu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_l=n=>{const t=Object.create(null);return(e=>t[e]||(t[e]=n(e)))},Mg=/-\w/g,mr=_l(n=>n.replace(Mg,t=>t.slice(1).toUpperCase())),Sg=/\B([A-Z])/g,rs=_l(n=>n.replace(Sg,"-$1").toLowerCase()),Ep=_l(n=>n.charAt(0).toUpperCase()+n.slice(1)),Il=_l(n=>n?`on${Ep(n)}`:""),ur=(n,t)=>!Object.is(n,t),Na=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Tp=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},rf=n=>{const t=parseFloat(n);return isNaN(t)?n:t},Eg=n=>{const t=Be(n)?Number(n):NaN;return isNaN(t)?n:t};let oh;const gl=()=>oh||(oh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Kr(n){if(Gt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],r=Be(i)?wg(i):Kr(i);if(r)for(const s in r)t[s]=r[s]}return t}else if(Be(n)||ge(n))return n}const Tg=/;(?![^(]*\))/g,bg=/:([^]+)/,Ag=/\/\*[^]*?\*\//g;function wg(n){const t={};return n.replace(Ag,"").split(Tg).forEach(e=>{if(e){const i=e.split(bg);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Ge(n){let t="";if(Be(n))t=n;else if(Gt(n))for(let e=0;e<n.length;e++){const i=Ge(n[e]);i&&(t+=i+" ")}else if(ge(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const Cg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Rg=Qu(Cg);function bp(n){return!!n||n===""}function Pg(n,t){if(n.length!==t.length)return!1;let e=!0;for(let i=0;e&&i<n.length;i++)e=sf(n[i],t[i]);return e}function sf(n,t){if(n===t)return!0;let e=sh(n),i=sh(t);if(e||i)return e&&i?n.getTime()===t.getTime():!1;if(e=yi(n),i=yi(t),e||i)return n===t;if(e=Gt(n),i=Gt(t),e||i)return e&&i?Pg(n,t):!1;if(e=ge(n),i=ge(t),e||i){if(!e||!i)return!1;const r=Object.keys(n).length,s=Object.keys(t).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!sf(n[o],t[o]))return!1}}return String(n)===String(t)}const Ap=n=>!!(n&&n.__v_isRef===!0),Ht=n=>Be(n)?n:n==null?"":Gt(n)||ge(n)&&(n.toString===Mp||!Jt(n.toString))?Ap(n)?Ht(n.value):JSON.stringify(n,wp,2):String(n),wp=(n,t)=>Ap(t)?wp(n,t.value):Ps(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,r],s)=>(e[Ul(i,s)+" =>"]=r,e),{})}:xp(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Ul(e))}:yi(t)?Ul(t):ge(t)&&!Gt(t)&&!Sp(t)?String(t):t,Ul=(n,t="")=>{var e;return yi(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let yn;class Dg{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=yn,!t&&yn&&(this.index=(yn.scopes||(yn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=yn;try{return yn=this,t()}finally{yn=e}}}on(){++this._on===1&&(this.prevScope=yn,yn=this)}off(){this._on>0&&--this._on===0&&(yn=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Lg(){return yn}let Ae;const Nl=new WeakSet;class Cp{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,yn&&yn.active&&yn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Nl.has(this)&&(Nl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Pp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ah(this),Dp(this);const t=Ae,e=si;Ae=this,si=!0;try{return this.fn()}finally{Lp(this),Ae=t,si=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)lf(t);this.deps=this.depsTail=void 0,ah(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Nl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Fc(this)&&this.run()}get dirty(){return Fc(this)}}let Rp=0,yo,Mo;function Pp(n,t=!1){if(n.flags|=8,t){n.next=Mo,Mo=n;return}n.next=yo,yo=n}function of(){Rp++}function af(){if(--Rp>0)return;if(Mo){let t=Mo;for(Mo=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;yo;){let t=yo;for(yo=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Dp(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Lp(n){let t,e=n.depsTail,i=e;for(;i;){const r=i.prevDep;i.version===-1?(i===e&&(e=r),lf(i),Ig(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=t,n.depsTail=e}function Fc(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ip(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Ip(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Lo)||(n.globalVersion=Lo,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Fc(n))))return;n.flags|=2;const t=n.dep,e=Ae,i=si;Ae=n,si=!0;try{Dp(n);const r=n.fn(n._value);(t.version===0||ur(r,n._value))&&(n.flags|=128,n._value=r,t.version++)}catch(r){throw t.version++,r}finally{Ae=e,si=i,Lp(n),n.flags&=-3}}function lf(n,t=!1){const{dep:e,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let s=e.computed.deps;s;s=s.nextDep)lf(s,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function Ig(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let si=!0;const Up=[];function ki(){Up.push(si),si=!1}function Vi(){const n=Up.pop();si=n===void 0?!0:n}function ah(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=Ae;Ae=void 0;try{t()}finally{Ae=e}}}let Lo=0;class Ug{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class cf{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Ae||!si||Ae===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==Ae)e=this.activeLink=new Ug(Ae,this),Ae.deps?(e.prevDep=Ae.depsTail,Ae.depsTail.nextDep=e,Ae.depsTail=e):Ae.deps=Ae.depsTail=e,Np(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=Ae.depsTail,e.nextDep=void 0,Ae.depsTail.nextDep=e,Ae.depsTail=e,Ae.deps===e&&(Ae.deps=i)}return e}trigger(t){this.version++,Lo++,this.notify(t)}notify(t){of();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{af()}}}function Np(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Np(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Bc=new WeakMap,jr=Symbol(""),zc=Symbol(""),Io=Symbol("");function rn(n,t,e){if(si&&Ae){let i=Bc.get(n);i||Bc.set(n,i=new Map);let r=i.get(e);r||(i.set(e,r=new cf),r.map=i,r.key=e),r.track()}}function Ni(n,t,e,i,r,s){const o=Bc.get(n);if(!o){Lo++;return}const a=l=>{l&&l.trigger()};if(of(),t==="clear")o.forEach(a);else{const l=Gt(n),u=l&&nf(e);if(l&&e==="length"){const c=Number(i);o.forEach((f,h)=>{(h==="length"||h===Io||!yi(h)&&h>=c)&&a(f)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),u&&a(o.get(Io)),t){case"add":l?u&&a(o.get("length")):(a(o.get(jr)),Ps(n)&&a(o.get(zc)));break;case"delete":l||(a(o.get(jr)),Ps(n)&&a(o.get(zc)));break;case"set":Ps(n)&&a(o.get(jr));break}}af()}function as(n){const t=he(n);return t===n?t:(rn(t,"iterate",Io),$n(n)?t:t.map(ai))}function vl(n){return rn(n=he(n),"iterate",Io),n}function ir(n,t){return Hi(n)?zs(Zr(n)?ai(t):t):ai(t)}const Ng={__proto__:null,[Symbol.iterator](){return Ol(this,Symbol.iterator,n=>ir(this,n))},concat(...n){return as(this).concat(...n.map(t=>Gt(t)?as(t):t))},entries(){return Ol(this,"entries",n=>(n[1]=ir(this,n[1]),n))},every(n,t){return Ei(this,"every",n,t,void 0,arguments)},filter(n,t){return Ei(this,"filter",n,t,e=>e.map(i=>ir(this,i)),arguments)},find(n,t){return Ei(this,"find",n,t,e=>ir(this,e),arguments)},findIndex(n,t){return Ei(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return Ei(this,"findLast",n,t,e=>ir(this,e),arguments)},findLastIndex(n,t){return Ei(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return Ei(this,"forEach",n,t,void 0,arguments)},includes(...n){return Fl(this,"includes",n)},indexOf(...n){return Fl(this,"indexOf",n)},join(n){return as(this).join(n)},lastIndexOf(...n){return Fl(this,"lastIndexOf",n)},map(n,t){return Ei(this,"map",n,t,void 0,arguments)},pop(){return io(this,"pop")},push(...n){return io(this,"push",n)},reduce(n,...t){return lh(this,"reduce",n,t)},reduceRight(n,...t){return lh(this,"reduceRight",n,t)},shift(){return io(this,"shift")},some(n,t){return Ei(this,"some",n,t,void 0,arguments)},splice(...n){return io(this,"splice",n)},toReversed(){return as(this).toReversed()},toSorted(n){return as(this).toSorted(n)},toSpliced(...n){return as(this).toSpliced(...n)},unshift(...n){return io(this,"unshift",n)},values(){return Ol(this,"values",n=>ir(this,n))}};function Ol(n,t,e){const i=vl(n),r=i[t]();return i!==n&&!$n(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=e(s.value)),s}),r}const Og=Array.prototype;function Ei(n,t,e,i,r,s){const o=vl(n),a=o!==n&&!$n(n),l=o[t];if(l!==Og[t]){const f=l.apply(n,s);return a?ai(f):f}let u=e;o!==n&&(a?u=function(f,h){return e.call(this,ir(n,f),h,n)}:e.length>2&&(u=function(f,h){return e.call(this,f,h,n)}));const c=l.call(o,u,i);return a&&r?r(c):c}function lh(n,t,e,i){const r=vl(n);let s=e;return r!==n&&($n(n)?e.length>3&&(s=function(o,a,l){return e.call(this,o,a,l,n)}):s=function(o,a,l){return e.call(this,o,ir(n,a),l,n)}),r[t](s,...i)}function Fl(n,t,e){const i=he(n);rn(i,"iterate",Io);const r=i[t](...e);return(r===-1||r===!1)&&hf(e[0])?(e[0]=he(e[0]),i[t](...e)):r}function io(n,t,e=[]){ki(),of();const i=he(n)[t].apply(n,e);return af(),Vi(),i}const Fg=Qu("__proto__,__v_isRef,__isVue"),Op=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(yi));function Bg(n){yi(n)||(n=String(n));const t=he(this);return rn(t,"has",n),t.hasOwnProperty(n)}class Fp{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const r=this._isReadonly,s=this._isShallow;if(e==="__v_isReactive")return!r;if(e==="__v_isReadonly")return r;if(e==="__v_isShallow")return s;if(e==="__v_raw")return i===(r?s?$g:Vp:s?kp:zp).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Gt(t);if(!r){let l;if(o&&(l=Ng[e]))return l;if(e==="hasOwnProperty")return Bg}const a=Reflect.get(t,e,on(t)?t:i);if((yi(e)?Op.has(e):Fg(e))||(r||rn(t,"get",e),s))return a;if(on(a)){const l=o&&nf(e)?a:a.value;return r&&ge(l)?Vc(l):l}return ge(a)?r?Vc(a):Uo(a):a}}class Bp extends Fp{constructor(t=!1){super(!1,t)}set(t,e,i,r){let s=t[e];const o=Gt(t)&&nf(e);if(!this._isShallow){const u=Hi(s);if(!$n(i)&&!Hi(i)&&(s=he(s),i=he(i)),!o&&on(s)&&!on(i))return u||(s.value=i),!0}const a=o?Number(e)<t.length:_e(t,e),l=Reflect.set(t,e,i,on(t)?t:r);return t===he(r)&&(a?ur(i,s)&&Ni(t,"set",e,i):Ni(t,"add",e,i)),l}deleteProperty(t,e){const i=_e(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&i&&Ni(t,"delete",e,void 0),r}has(t,e){const i=Reflect.has(t,e);return(!yi(e)||!Op.has(e))&&rn(t,"has",e),i}ownKeys(t){return rn(t,"iterate",Gt(t)?"length":jr),Reflect.ownKeys(t)}}class zg extends Fp{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const kg=new Bp,Vg=new zg,Hg=new Bp(!0);const kc=n=>n,aa=n=>Reflect.getPrototypeOf(n);function Gg(n,t,e){return function(...i){const r=this.__v_raw,s=he(r),o=Ps(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,u=r[n](...i),c=e?kc:t?zs:ai;return!t&&rn(s,"iterate",l?zc:jr),We(Object.create(u),{next(){const{value:f,done:h}=u.next();return h?{value:f,done:h}:{value:a?[c(f[0]),c(f[1])]:c(f),done:h}}})}}function la(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Wg(n,t){const e={get(r){const s=this.__v_raw,o=he(s),a=he(r);n||(ur(r,a)&&rn(o,"get",r),rn(o,"get",a));const{has:l}=aa(o),u=t?kc:n?zs:ai;if(l.call(o,r))return u(s.get(r));if(l.call(o,a))return u(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&rn(he(r),"iterate",jr),r.size},has(r){const s=this.__v_raw,o=he(s),a=he(r);return n||(ur(r,a)&&rn(o,"has",r),rn(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=he(a),u=t?kc:n?zs:ai;return!n&&rn(l,"iterate",jr),a.forEach((c,f)=>r.call(s,u(c),u(f),o))}};return We(e,n?{add:la("add"),set:la("set"),delete:la("delete"),clear:la("clear")}:{add(r){!t&&!$n(r)&&!Hi(r)&&(r=he(r));const s=he(this);return aa(s).has.call(s,r)||(s.add(r),Ni(s,"add",r,r)),this},set(r,s){!t&&!$n(s)&&!Hi(s)&&(s=he(s));const o=he(this),{has:a,get:l}=aa(o);let u=a.call(o,r);u||(r=he(r),u=a.call(o,r));const c=l.call(o,r);return o.set(r,s),u?ur(s,c)&&Ni(o,"set",r,s):Ni(o,"add",r,s),this},delete(r){const s=he(this),{has:o,get:a}=aa(s);let l=o.call(s,r);l||(r=he(r),l=o.call(s,r)),a&&a.call(s,r);const u=s.delete(r);return l&&Ni(s,"delete",r,void 0),u},clear(){const r=he(this),s=r.size!==0,o=r.clear();return s&&Ni(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=Gg(r,n,t)}),e}function uf(n,t){const e=Wg(n,t);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(_e(e,r)&&r in i?e:i,r,s)}const Xg={get:uf(!1,!1)},qg={get:uf(!1,!0)},Yg={get:uf(!0,!1)};const zp=new WeakMap,kp=new WeakMap,Vp=new WeakMap,$g=new WeakMap;function Kg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function jg(n){return n.__v_skip||!Object.isExtensible(n)?0:Kg(yg(n))}function Uo(n){return Hi(n)?n:ff(n,!1,kg,Xg,zp)}function Zg(n){return ff(n,!1,Hg,qg,kp)}function Vc(n){return ff(n,!0,Vg,Yg,Vp)}function ff(n,t,e,i,r){if(!ge(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const s=jg(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:e);return r.set(n,a),a}function Zr(n){return Hi(n)?Zr(n.__v_raw):!!(n&&n.__v_isReactive)}function Hi(n){return!!(n&&n.__v_isReadonly)}function $n(n){return!!(n&&n.__v_isShallow)}function hf(n){return n?!!n.__v_raw:!1}function he(n){const t=n&&n.__v_raw;return t?he(t):n}function Jg(n){return!_e(n,"__v_skip")&&Object.isExtensible(n)&&Tp(n,"__v_skip",!0),n}const ai=n=>ge(n)?Uo(n):n,zs=n=>ge(n)?Vc(n):n;function on(n){return n?n.__v_isRef===!0:!1}function Me(n){return Qg(n,!1)}function Qg(n,t){return on(n)?n:new t0(n,t)}class t0{constructor(t,e){this.dep=new cf,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:he(t),this._value=e?t:ai(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||$n(t)||Hi(t);t=i?t:he(t),ur(t,e)&&(this._rawValue=t,this._value=i?t:ai(t),this.dep.trigger())}}function Rt(n){return on(n)?n.value:n}const e0={get:(n,t,e)=>t==="__v_raw"?n:Rt(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const r=n[t];return on(r)&&!on(e)?(r.value=e,!0):Reflect.set(n,t,e,i)}};function Hp(n){return Zr(n)?n:new Proxy(n,e0)}class n0{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new cf(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Lo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ae!==this)return Pp(this,!0),!0}get value(){const t=this.dep.track();return Ip(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function i0(n,t,e=!1){let i,r;return Jt(n)?i=n:(i=n.get,r=n.set),new n0(i,r,e)}const ca={},ja=new WeakMap;let Or;function r0(n,t=!1,e=Or){if(e){let i=ja.get(e);i||ja.set(e,i=[]),i.push(n)}}function s0(n,t,e=be){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=e,u=v=>r?v:$n(v)||r===!1||r===0?Oi(v,1):Oi(v);let c,f,h,d,_=!1,g=!1;if(on(n)?(f=()=>n.value,_=$n(n)):Zr(n)?(f=()=>u(n),_=!0):Gt(n)?(g=!0,_=n.some(v=>Zr(v)||$n(v)),f=()=>n.map(v=>{if(on(v))return v.value;if(Zr(v))return u(v);if(Jt(v))return l?l(v,2):v()})):Jt(n)?t?f=l?()=>l(n,2):n:f=()=>{if(h){ki();try{h()}finally{Vi()}}const v=Or;Or=c;try{return l?l(n,3,[d]):n(d)}finally{Or=v}}:f=xi,t&&r){const v=f,w=r===!0?1/0:r;f=()=>Oi(v(),w)}const m=Lg(),p=()=>{c.stop(),m&&m.active&&ef(m.effects,c)};if(s&&t){const v=t;t=(...w)=>{v(...w),p()}}let M=g?new Array(n.length).fill(ca):ca;const y=v=>{if(!(!(c.flags&1)||!c.dirty&&!v))if(t){const w=c.run();if(r||_||(g?w.some((b,R)=>ur(b,M[R])):ur(w,M))){h&&h();const b=Or;Or=c;try{const R=[w,M===ca?void 0:g&&M[0]===ca?[]:M,d];M=w,l?l(t,3,R):t(...R)}finally{Or=b}}}else c.run()};return a&&a(y),c=new Cp(f),c.scheduler=o?()=>o(y,!1):y,d=v=>r0(v,!1,c),h=c.onStop=()=>{const v=ja.get(c);if(v){if(l)l(v,4);else for(const w of v)w();ja.delete(c)}},t?i?y(!0):M=c.run():o?o(y.bind(null,!0),!0):c.run(),p.pause=c.pause.bind(c),p.resume=c.resume.bind(c),p.stop=p,p}function Oi(n,t=1/0,e){if(t<=0||!ge(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,on(n))Oi(n.value,t,e);else if(Gt(n))for(let i=0;i<n.length;i++)Oi(n[i],t,e);else if(xp(n)||Ps(n))n.forEach(i=>{Oi(i,t,e)});else if(Sp(n)){for(const i in n)Oi(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Oi(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function jo(n,t,e,i){try{return i?n(...i):n()}catch(r){xl(r,t,e)}}function li(n,t,e,i){if(Jt(n)){const r=jo(n,t,e,i);return r&&yp(r)&&r.catch(s=>{xl(s,t,e)}),r}if(Gt(n)){const r=[];for(let s=0;s<n.length;s++)r.push(li(n[s],t,e,i));return r}}function xl(n,t,e,i=!0){const r=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||be;if(t){let a=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const c=a.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](n,l,u)===!1)return}a=a.parent}if(s){ki(),jo(s,null,10,[n,l,u]),Vi();return}}o0(n,e,r,i,o)}function o0(n,t,e,i=!0,r=!1){if(r)throw n;console.error(n)}const fn=[];let fi=-1;const Ds=[];let rr=null,Es=0;const Gp=Promise.resolve();let Za=null;function a0(n){const t=Za||Gp;return n?t.then(this?n.bind(this):n):t}function l0(n){let t=fi+1,e=fn.length;for(;t<e;){const i=t+e>>>1,r=fn[i],s=No(r);s<n||s===n&&r.flags&2?t=i+1:e=i}return t}function df(n){if(!(n.flags&1)){const t=No(n),e=fn[fn.length-1];!e||!(n.flags&2)&&t>=No(e)?fn.push(n):fn.splice(l0(t),0,n),n.flags|=1,Wp()}}function Wp(){Za||(Za=Gp.then(qp))}function c0(n){Gt(n)?Ds.push(...n):rr&&n.id===-1?rr.splice(Es+1,0,n):n.flags&1||(Ds.push(n),n.flags|=1),Wp()}function ch(n,t,e=fi+1){for(;e<fn.length;e++){const i=fn[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;fn.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Xp(n){if(Ds.length){const t=[...new Set(Ds)].sort((e,i)=>No(e)-No(i));if(Ds.length=0,rr){rr.push(...t);return}for(rr=t,Es=0;Es<rr.length;Es++){const e=rr[Es];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}rr=null,Es=0}}const No=n=>n.id==null?n.flags&2?-1:1/0:n.id;function qp(n){try{for(fi=0;fi<fn.length;fi++){const t=fn[fi];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),jo(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;fi<fn.length;fi++){const t=fn[fi];t&&(t.flags&=-2)}fi=-1,fn.length=0,Xp(),Za=null,(fn.length||Ds.length)&&qp()}}let Xn=null,Yp=null;function Ja(n){const t=Xn;return Xn=n,Yp=n&&n.type.__scopeId||null,t}function sr(n,t=Xn,e){if(!t||n._n)return n;const i=(...r)=>{i._d&&el(-1);const s=Ja(t);let o;try{o=n(...r)}finally{Ja(s),i._d&&el(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function So(n,t){if(Xn===null)return n;const e=bl(Xn),i=n.dirs||(n.dirs=[]);for(let r=0;r<t.length;r++){let[s,o,a,l=be]=t[r];s&&(Jt(s)&&(s={mounted:s,updated:s}),s.deep&&Oi(o),i.push({dir:s,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Tr(n,t,e,i){const r=n.dirs,s=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(ki(),li(l,e,8,[n.el,a,n,t]),Vi())}}function u0(n,t){if(dn){let e=dn.provides;const i=dn.parent&&dn.parent.provides;i===e&&(e=dn.provides=Object.create(i)),e[n]=t}}function Oa(n,t,e=!1){const i=Tm();if(i||Ls){let r=Ls?Ls._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return e&&Jt(t)?t.call(i&&i.proxy):t}}const f0=Symbol.for("v-scx"),h0=()=>Oa(f0);function Bl(n,t,e){return $p(n,t,e)}function $p(n,t,e=be){const{immediate:i,deep:r,flush:s,once:o}=e,a=We({},e),l=t&&i||!t&&s!=="post";let u;if(Bo){if(s==="sync"){const d=h0();u=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=xi,d.resume=xi,d.pause=xi,d}}const c=dn;a.call=(d,_,g)=>li(d,c,_,g);let f=!1;s==="post"?a.scheduler=d=>{xn(d,c&&c.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(d,_)=>{_?d():df(d)}),a.augmentJob=d=>{t&&(d.flags|=4),f&&(d.flags|=2,c&&(d.id=c.uid,d.i=c))};const h=s0(n,t,a);return Bo&&(u?u.push(h):l&&h()),h}function d0(n,t,e){const i=this.proxy,r=Be(n)?n.includes(".")?Kp(i,n):()=>i[n]:n.bind(i,i);let s;Jt(t)?s=t:(s=t.handler,e=t);const o=Jo(this),a=$p(r,s.bind(i),e);return o(),a}function Kp(n,t){const e=t.split(".");return()=>{let i=n;for(let r=0;r<e.length&&i;r++)i=i[e[r]];return i}}const p0=Symbol("_vte"),jp=n=>n.__isTeleport,hi=Symbol("_leaveCb"),ro=Symbol("_enterCb");function m0(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Zo(()=>{n.isMounted=!0}),rm(()=>{n.isUnmounting=!0}),n}const Vn=[Function,Array],Zp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Vn,onEnter:Vn,onAfterEnter:Vn,onEnterCancelled:Vn,onBeforeLeave:Vn,onLeave:Vn,onAfterLeave:Vn,onLeaveCancelled:Vn,onBeforeAppear:Vn,onAppear:Vn,onAfterAppear:Vn,onAppearCancelled:Vn},Jp=n=>{const t=n.subTree;return t.component?Jp(t.component):t},_0={name:"BaseTransition",props:Zp,setup(n,{slots:t}){const e=Tm(),i=m0();return()=>{const r=t.default&&em(t.default(),!0);if(!r||!r.length)return;const s=Qp(r),o=he(n),{mode:a}=o;if(i.isLeaving)return zl(s);const l=uh(s);if(!l)return zl(s);let u=Hc(l,o,i,e,f=>u=f);l.type!==hn&&Oo(l,u);let c=e.subTree&&uh(e.subTree);if(c&&c.type!==hn&&!Vr(c,l)&&Jp(e).type!==hn){let f=Hc(c,o,i,e);if(Oo(c,f),a==="out-in"&&l.type!==hn)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,e.job.flags&8||e.update(),delete f.afterLeave,c=void 0},zl(s);a==="in-out"&&l.type!==hn?f.delayLeave=(h,d,_)=>{const g=tm(i,c);g[String(c.key)]=c,h[hi]=()=>{d(),h[hi]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{_(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return s}}};function Qp(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==hn){t=e;break}}return t}const g0=_0;function tm(n,t){const{leavingVNodes:e}=n;let i=e.get(t.type);return i||(i=Object.create(null),e.set(t.type,i)),i}function Hc(n,t,e,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:h,onLeave:d,onAfterLeave:_,onLeaveCancelled:g,onBeforeAppear:m,onAppear:p,onAfterAppear:M,onAppearCancelled:y}=t,v=String(n.key),w=tm(e,n),b=(x,S)=>{x&&li(x,i,9,S)},R=(x,S)=>{const L=S[1];b(x,S),Gt(x)?x.every(I=>I.length<=1)&&L():x.length<=1&&L()},P={mode:o,persisted:a,beforeEnter(x){let S=l;if(!e.isMounted)if(s)S=m||l;else return;x[hi]&&x[hi](!0);const L=w[v];L&&Vr(n,L)&&L.el[hi]&&L.el[hi](),b(S,[x])},enter(x){if(w[v]===n)return;let S=u,L=c,I=f;if(!e.isMounted)if(s)S=p||u,L=M||c,I=y||f;else return;let F=!1;x[ro]=Y=>{F||(F=!0,Y?b(I,[x]):b(L,[x]),P.delayedLeave&&P.delayedLeave(),x[ro]=void 0)};const X=x[ro].bind(null,!1);S?R(S,[x,X]):X()},leave(x,S){const L=String(n.key);if(x[ro]&&x[ro](!0),e.isUnmounting)return S();b(h,[x]);let I=!1;x[hi]=X=>{I||(I=!0,S(),X?b(g,[x]):b(_,[x]),x[hi]=void 0,w[L]===n&&delete w[L])};const F=x[hi].bind(null,!1);w[L]=n,d?R(d,[x,F]):F()},clone(x){const S=Hc(x,t,e,i,r);return r&&r(S),S}};return P}function zl(n){if(yl(n))return n=_r(n),n.children=null,n}function uh(n){if(!yl(n))return jp(n.type)&&n.children?Qp(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&Jt(e.default))return e.default()}}function Oo(n,t){n.shapeFlag&6&&n.component?(n.transition=t,Oo(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function em(n,t=!1,e){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=e==null?o.key:String(e)+String(o.key!=null?o.key:s);o.type===$e?(o.patchFlag&128&&r++,i=i.concat(em(o.children,t,a))):(t||o.type!==hn)&&i.push(a!=null?_r(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function v0(n,t){return Jt(n)?We({name:n.name},t,{setup:n}):n}function nm(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function fh(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const Qa=new WeakMap;function Eo(n,t,e,i,r=!1){if(Gt(n)){n.forEach((g,m)=>Eo(g,t&&(Gt(t)?t[m]:t),e,i,r));return}if(To(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Eo(n,t,e,i.component.subTree);return}const s=i.shapeFlag&4?bl(i.component):i.el,o=r?null:s,{i:a,r:l}=n,u=t&&t.r,c=a.refs===be?a.refs={}:a.refs,f=a.setupState,h=he(f),d=f===be?vp:g=>fh(c,g)?!1:_e(h,g),_=(g,m)=>!(m&&fh(c,m));if(u!=null&&u!==l){if(hh(t),Be(u))c[u]=null,d(u)&&(f[u]=null);else if(on(u)){const g=t;_(u,g.k)&&(u.value=null),g.k&&(c[g.k]=null)}}if(Jt(l))jo(l,a,12,[o,c]);else{const g=Be(l),m=on(l);if(g||m){const p=()=>{if(n.f){const M=g?d(l)?f[l]:c[l]:_()||!n.k?l.value:c[n.k];if(r)Gt(M)&&ef(M,s);else if(Gt(M))M.includes(s)||M.push(s);else if(g)c[l]=[s],d(l)&&(f[l]=c[l]);else{const y=[s];_(l,n.k)&&(l.value=y),n.k&&(c[n.k]=y)}}else g?(c[l]=o,d(l)&&(f[l]=o)):m&&(_(l,n.k)&&(l.value=o),n.k&&(c[n.k]=o))};if(o){const M=()=>{p(),Qa.delete(n)};M.id=-1,Qa.set(n,M),xn(M,e)}else hh(n),p()}}}function hh(n){const t=Qa.get(n);t&&(t.flags|=8,Qa.delete(n))}gl().requestIdleCallback;gl().cancelIdleCallback;const To=n=>!!n.type.__asyncLoader,yl=n=>n.type.__isKeepAlive;function x0(n,t){im(n,"a",t)}function y0(n,t){im(n,"da",t)}function im(n,t,e=dn){const i=n.__wdc||(n.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Ml(t,i,e),e){let r=e.parent;for(;r&&r.parent;)yl(r.parent.vnode)&&M0(i,t,e,r),r=r.parent}}function M0(n,t,e,i){const r=Ml(t,n,i,!0);Sl(()=>{ef(i[t],r)},e)}function Ml(n,t,e=dn,i=!1){if(e){const r=e[n]||(e[n]=[]),s=t.__weh||(t.__weh=(...o)=>{ki();const a=Jo(e),l=li(t,e,n,o);return a(),Vi(),l});return i?r.unshift(s):r.push(s),s}}const Yi=n=>(t,e=dn)=>{(!Bo||n==="sp")&&Ml(n,(...i)=>t(...i),e)},S0=Yi("bm"),Zo=Yi("m"),E0=Yi("bu"),T0=Yi("u"),rm=Yi("bum"),Sl=Yi("um"),b0=Yi("sp"),A0=Yi("rtg"),w0=Yi("rtc");function C0(n,t=dn){Ml("ec",n,t)}const R0=Symbol.for("v-ndc");function nr(n,t,e,i){let r;const s=e,o=Gt(n);if(o||Be(n)){const a=o&&Zr(n);let l=!1,u=!1;a&&(l=!$n(n),u=Hi(n),n=vl(n)),r=new Array(n.length);for(let c=0,f=n.length;c<f;c++)r[c]=t(l?u?zs(ai(n[c])):ai(n[c]):n[c],c,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=t(a+1,a,void 0,s)}else if(ge(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>t(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];r[l]=t(n[c],c,l,s)}}else r=[];return r}const Gc=n=>n?bm(n)?bl(n):Gc(n.parent):null,bo=We(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Gc(n.parent),$root:n=>Gc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>om(n),$forceUpdate:n=>n.f||(n.f=()=>{df(n.update)}),$nextTick:n=>n.n||(n.n=a0.bind(n.proxy)),$watch:n=>d0.bind(n)}),kl=(n,t)=>n!==be&&!n.__isScriptSetup&&_e(n,t),P0={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const h=o[t];if(h!==void 0)switch(h){case 1:return i[t];case 2:return r[t];case 4:return e[t];case 3:return s[t]}else{if(kl(i,t))return o[t]=1,i[t];if(r!==be&&_e(r,t))return o[t]=2,r[t];if(_e(s,t))return o[t]=3,s[t];if(e!==be&&_e(e,t))return o[t]=4,e[t];Wc&&(o[t]=0)}}const u=bo[t];let c,f;if(u)return t==="$attrs"&&rn(n.attrs,"get",""),u(n);if((c=a.__cssModules)&&(c=c[t]))return c;if(e!==be&&_e(e,t))return o[t]=4,e[t];if(f=l.config.globalProperties,_e(f,t))return f[t]},set({_:n},t,e){const{data:i,setupState:r,ctx:s}=n;return kl(r,t)?(r[t]=e,!0):i!==be&&_e(i,t)?(i[t]=e,!0):_e(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(s[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(e[a]||n!==be&&a[0]!=="$"&&_e(n,a)||kl(t,a)||_e(s,a)||_e(i,a)||_e(bo,a)||_e(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:_e(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function dh(n){return Gt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Wc=!0;function D0(n){const t=om(n),e=n.proxy,i=n.ctx;Wc=!1,t.beforeCreate&&ph(t.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:f,mounted:h,beforeUpdate:d,updated:_,activated:g,deactivated:m,beforeDestroy:p,beforeUnmount:M,destroyed:y,unmounted:v,render:w,renderTracked:b,renderTriggered:R,errorCaptured:P,serverPrefetch:x,expose:S,inheritAttrs:L,components:I,directives:F,filters:X}=t;if(u&&L0(u,i,null),o)for(const $ in o){const V=o[$];Jt(V)&&(i[$]=V.bind(e))}if(r){const $=r.call(e,e);ge($)&&(n.data=Uo($))}if(Wc=!0,s)for(const $ in s){const V=s[$],vt=Jt(V)?V.bind(e,e):Jt(V.get)?V.get.bind(e,e):xi,gt=!Jt(V)&&Jt(V.set)?V.set.bind(e):xi,St=Mn({get:vt,set:gt});Object.defineProperty(i,$,{enumerable:!0,configurable:!0,get:()=>St.value,set:Lt=>St.value=Lt})}if(a)for(const $ in a)sm(a[$],i,e,$);if(l){const $=Jt(l)?l.call(e):l;Reflect.ownKeys($).forEach(V=>{u0(V,$[V])})}c&&ph(c,n,"c");function W($,V){Gt(V)?V.forEach(vt=>$(vt.bind(e))):V&&$(V.bind(e))}if(W(S0,f),W(Zo,h),W(E0,d),W(T0,_),W(x0,g),W(y0,m),W(C0,P),W(w0,b),W(A0,R),W(rm,M),W(Sl,v),W(b0,x),Gt(S))if(S.length){const $=n.exposed||(n.exposed={});S.forEach(V=>{Object.defineProperty($,V,{get:()=>e[V],set:vt=>e[V]=vt,enumerable:!0})})}else n.exposed||(n.exposed={});w&&n.render===xi&&(n.render=w),L!=null&&(n.inheritAttrs=L),I&&(n.components=I),F&&(n.directives=F),x&&nm(n)}function L0(n,t,e=xi){Gt(n)&&(n=Xc(n));for(const i in n){const r=n[i];let s;ge(r)?"default"in r?s=Oa(r.from||i,r.default,!0):s=Oa(r.from||i):s=Oa(r),on(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[i]=s}}function ph(n,t,e){li(Gt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function sm(n,t,e,i){let r=i.includes(".")?Kp(e,i):()=>e[i];if(Be(n)){const s=t[n];Jt(s)&&Bl(r,s)}else if(Jt(n))Bl(r,n.bind(e));else if(ge(n))if(Gt(n))n.forEach(s=>sm(s,t,e,i));else{const s=Jt(n.handler)?n.handler.bind(e):t[n.handler];Jt(s)&&Bl(r,s,n)}}function om(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(t);let l;return a?l=a:!r.length&&!e&&!i?l=t:(l={},r.length&&r.forEach(u=>tl(l,u,o,!0)),tl(l,t,o)),ge(t)&&s.set(t,l),l}function tl(n,t,e,i=!1){const{mixins:r,extends:s}=t;s&&tl(n,s,e,!0),r&&r.forEach(o=>tl(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=I0[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const I0={data:mh,props:_h,emits:_h,methods:mo,computed:mo,beforeCreate:cn,created:cn,beforeMount:cn,mounted:cn,beforeUpdate:cn,updated:cn,beforeDestroy:cn,beforeUnmount:cn,destroyed:cn,unmounted:cn,activated:cn,deactivated:cn,errorCaptured:cn,serverPrefetch:cn,components:mo,directives:mo,watch:N0,provide:mh,inject:U0};function mh(n,t){return t?n?function(){return We(Jt(n)?n.call(this,this):n,Jt(t)?t.call(this,this):t)}:t:n}function U0(n,t){return mo(Xc(n),Xc(t))}function Xc(n){if(Gt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function cn(n,t){return n?[...new Set([].concat(n,t))]:t}function mo(n,t){return n?We(Object.create(null),n,t):t}function _h(n,t){return n?Gt(n)&&Gt(t)?[...new Set([...n,...t])]:We(Object.create(null),dh(n),dh(t??{})):t}function N0(n,t){if(!n)return t;if(!t)return n;const e=We(Object.create(null),n);for(const i in t)e[i]=cn(n[i],t[i]);return e}function am(){return{app:null,config:{isNativeTag:vp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let O0=0;function F0(n,t){return function(i,r=null){Jt(i)||(i=We({},i)),r!=null&&!ge(r)&&(r=null);const s=am(),o=new WeakSet,a=[];let l=!1;const u=s.app={_uid:O0++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:gv,get config(){return s.config},set config(c){},use(c,...f){return o.has(c)||(c&&Jt(c.install)?(o.add(c),c.install(u,...f)):Jt(c)&&(o.add(c),c(u,...f))),u},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),u},component(c,f){return f?(s.components[c]=f,u):s.components[c]},directive(c,f){return f?(s.directives[c]=f,u):s.directives[c]},mount(c,f,h){if(!l){const d=u._ceVNode||Re(i,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(d,c,h),l=!0,u._container=c,c.__vue_app__=u,bl(d.component)}},onUnmount(c){a.push(c)},unmount(){l&&(li(a,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(c,f){return s.provides[c]=f,u},runWithContext(c){const f=Ls;Ls=u;try{return c()}finally{Ls=f}}};return u}}let Ls=null;const B0=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${mr(t)}Modifiers`]||n[`${rs(t)}Modifiers`];function z0(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||be;let r=e;const s=t.startsWith("update:"),o=s&&B0(i,t.slice(7));o&&(o.trim&&(r=e.map(c=>Be(c)?c.trim():c)),o.number&&(r=e.map(rf)));let a,l=i[a=Il(t)]||i[a=Il(mr(t))];!l&&s&&(l=i[a=Il(rs(t))]),l&&li(l,n,6,r);const u=i[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,li(u,n,6,r)}}const k0=new WeakMap;function lm(n,t,e=!1){const i=e?k0:t.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Jt(n)){const l=u=>{const c=lm(u,t,!0);c&&(a=!0,We(o,c))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(ge(n)&&i.set(n,null),null):(Gt(s)?s.forEach(l=>o[l]=null):We(o,s),ge(n)&&i.set(n,o),o)}function El(n,t){return!n||!ml(t)?!1:(t=t.slice(2).replace(/Once$/,""),_e(n,t[0].toLowerCase()+t.slice(1))||_e(n,rs(t))||_e(n,t))}function gh(n){const{type:t,vnode:e,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:f,data:h,setupState:d,ctx:_,inheritAttrs:g}=n,m=Ja(n);let p,M;try{if(e.shapeFlag&4){const v=r||i,w=v;p=pi(u.call(w,v,c,f,d,h,_)),M=a}else{const v=t;p=pi(v.length>1?v(f,{attrs:a,slots:o,emit:l}):v(f,null)),M=t.props?a:V0(a)}}catch(v){Ao.length=0,xl(v,n,1),p=Re(hn)}let y=p;if(M&&g!==!1){const v=Object.keys(M),{shapeFlag:w}=y;v.length&&w&7&&(s&&v.some(tf)&&(M=H0(M,s)),y=_r(y,M,!1,!0))}return e.dirs&&(y=_r(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(e.dirs):e.dirs),e.transition&&Oo(y,e.transition),p=y,Ja(m),p}const V0=n=>{let t;for(const e in n)(e==="class"||e==="style"||ml(e))&&((t||(t={}))[e]=n[e]);return t},H0=(n,t)=>{const e={};for(const i in n)(!tf(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function G0(n,t,e){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?vh(i,o,u):!!o;if(l&8){const c=t.dynamicProps;for(let f=0;f<c.length;f++){const h=c[f];if(cm(o,i,h)&&!El(u,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?vh(i,o,u):!0:!!o;return!1}function vh(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(cm(t,n,s)&&!El(e,s))return!0}return!1}function cm(n,t,e){const i=n[e],r=t[e];return e==="style"&&ge(i)&&ge(r)?!sf(i,r):i!==r}function W0({vnode:n,parent:t},e){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=t.vnode).el=e,t=t.parent;else break}}const um={},fm=()=>Object.create(um),hm=n=>Object.getPrototypeOf(n)===um;function X0(n,t,e,i=!1){const r={},s=fm();n.propsDefaults=Object.create(null),dm(n,t,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);e?n.props=i?r:Zg(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function q0(n,t,e,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=he(r),[l]=n.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const c=n.vnode.dynamicProps;for(let f=0;f<c.length;f++){let h=c[f];if(El(n.emitsOptions,h))continue;const d=t[h];if(l)if(_e(s,h))d!==s[h]&&(s[h]=d,u=!0);else{const _=mr(h);r[_]=qc(l,a,_,d,n,!1)}else d!==s[h]&&(s[h]=d,u=!0)}}}else{dm(n,t,r,s)&&(u=!0);let c;for(const f in a)(!t||!_e(t,f)&&((c=rs(f))===f||!_e(t,c)))&&(l?e&&(e[f]!==void 0||e[c]!==void 0)&&(r[f]=qc(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!t||!_e(t,f))&&(delete s[f],u=!0)}u&&Ni(n.attrs,"set","")}function dm(n,t,e,i){const[r,s]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(xo(l))continue;const u=t[l];let c;r&&_e(r,c=mr(l))?!s||!s.includes(c)?e[c]=u:(a||(a={}))[c]=u:El(n.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,o=!0)}if(s){const l=he(e),u=a||be;for(let c=0;c<s.length;c++){const f=s[c];e[f]=qc(r,l,f,u[f],n,!_e(u,f))}}return o}function qc(n,t,e,i,r,s){const o=n[e];if(o!=null){const a=_e(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Jt(l)){const{propsDefaults:u}=r;if(e in u)i=u[e];else{const c=Jo(r);i=u[e]=l.call(null,t),c()}}else i=l;r.ce&&r.ce._setProp(e,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===rs(e))&&(i=!0))}return i}const Y0=new WeakMap;function pm(n,t,e=!1){const i=e?Y0:t.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Jt(n)){const c=f=>{l=!0;const[h,d]=pm(f,t,!0);We(o,h),d&&a.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}if(!s&&!l)return ge(n)&&i.set(n,Rs),Rs;if(Gt(s))for(let c=0;c<s.length;c++){const f=mr(s[c]);xh(f)&&(o[f]=be)}else if(s)for(const c in s){const f=mr(c);if(xh(f)){const h=s[c],d=o[f]=Gt(h)||Jt(h)?{type:h}:We({},h),_=d.type;let g=!1,m=!0;if(Gt(_))for(let p=0;p<_.length;++p){const M=_[p],y=Jt(M)&&M.name;if(y==="Boolean"){g=!0;break}else y==="String"&&(m=!1)}else g=Jt(_)&&_.name==="Boolean";d[0]=g,d[1]=m,(g||_e(d,"default"))&&a.push(f)}}const u=[o,a];return ge(n)&&i.set(n,u),u}function xh(n){return n[0]!=="$"&&!xo(n)}const pf=n=>n==="_"||n==="_ctx"||n==="$stable",mf=n=>Gt(n)?n.map(pi):[pi(n)],$0=(n,t,e)=>{if(t._n)return t;const i=sr((...r)=>mf(t(...r)),e);return i._c=!1,i},mm=(n,t,e)=>{const i=n._ctx;for(const r in n){if(pf(r))continue;const s=n[r];if(Jt(s))t[r]=$0(r,s,i);else if(s!=null){const o=mf(s);t[r]=()=>o}}},_m=(n,t)=>{const e=mf(t);n.slots.default=()=>e},gm=(n,t,e)=>{for(const i in t)(e||!pf(i))&&(n[i]=t[i])},K0=(n,t,e)=>{const i=n.slots=fm();if(n.vnode.shapeFlag&32){const r=t._;r?(gm(i,t,e),e&&Tp(i,"_",r,!0)):mm(t,i)}else t&&_m(n,t)},j0=(n,t,e)=>{const{vnode:i,slots:r}=n;let s=!0,o=be;if(i.shapeFlag&32){const a=t._;a?e&&a===1?s=!1:gm(r,t,e):(s=!t.$stable,mm(t,r)),o=t}else t&&(_m(n,t),o={default:1});if(s)for(const a in r)!pf(a)&&o[a]==null&&delete r[a]},xn=ev;function Z0(n){return J0(n)}function J0(n,t){const e=gl();e.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:h,setScopeId:d=xi,insertStaticContent:_}=n,g=(D,O,A,lt=null,Q=null,et=null,nt=void 0,ut=null,tt=!!O.dynamicChildren)=>{if(D===O)return;D&&!Vr(D,O)&&(lt=pt(D),Lt(D,Q,et,!0),D=null),O.patchFlag===-2&&(tt=!1,O.dynamicChildren=null);const{type:T,ref:E,shapeFlag:N}=O;switch(T){case Tl:m(D,O,A,lt);break;case hn:p(D,O,A,lt);break;case Fa:D==null&&M(O,A,lt,nt);break;case $e:I(D,O,A,lt,Q,et,nt,ut,tt);break;default:N&1?w(D,O,A,lt,Q,et,nt,ut,tt):N&6?F(D,O,A,lt,Q,et,nt,ut,tt):(N&64||N&128)&&T.process(D,O,A,lt,Q,et,nt,ut,tt,Bt)}E!=null&&Q?Eo(E,D&&D.ref,et,O||D,!O):E==null&&D&&D.ref!=null&&Eo(D.ref,null,et,D,!0)},m=(D,O,A,lt)=>{if(D==null)i(O.el=a(O.children),A,lt);else{const Q=O.el=D.el;O.children!==D.children&&u(Q,O.children)}},p=(D,O,A,lt)=>{D==null?i(O.el=l(O.children||""),A,lt):O.el=D.el},M=(D,O,A,lt)=>{[D.el,D.anchor]=_(D.children,O,A,lt,D.el,D.anchor)},y=({el:D,anchor:O},A,lt)=>{let Q;for(;D&&D!==O;)Q=h(D),i(D,A,lt),D=Q;i(O,A,lt)},v=({el:D,anchor:O})=>{let A;for(;D&&D!==O;)A=h(D),r(D),D=A;r(O)},w=(D,O,A,lt,Q,et,nt,ut,tt)=>{if(O.type==="svg"?nt="svg":O.type==="math"&&(nt="mathml"),D==null)b(O,A,lt,Q,et,nt,ut,tt);else{const T=D.el&&D.el._isVueCE?D.el:null;try{T&&T._beginPatch(),x(D,O,Q,et,nt,ut,tt)}finally{T&&T._endPatch()}}},b=(D,O,A,lt,Q,et,nt,ut)=>{let tt,T;const{props:E,shapeFlag:N,transition:G,dirs:K}=D;if(tt=D.el=o(D.type,et,E&&E.is,E),N&8?c(tt,D.children):N&16&&P(D.children,tt,null,lt,Q,Vl(D,et),nt,ut),K&&Tr(D,null,lt,"created"),R(tt,D,D.scopeId,nt,lt),E){for(const Mt in E)Mt!=="value"&&!xo(Mt)&&s(tt,Mt,null,E[Mt],et,lt);"value"in E&&s(tt,"value",null,E.value,et),(T=E.onVnodeBeforeMount)&&ui(T,lt,D)}K&&Tr(D,null,lt,"beforeMount");const q=Q0(Q,G);q&&G.beforeEnter(tt),i(tt,O,A),((T=E&&E.onVnodeMounted)||q||K)&&xn(()=>{T&&ui(T,lt,D),q&&G.enter(tt),K&&Tr(D,null,lt,"mounted")},Q)},R=(D,O,A,lt,Q)=>{if(A&&d(D,A),lt)for(let et=0;et<lt.length;et++)d(D,lt[et]);if(Q){let et=Q.subTree;if(O===et||Mm(et.type)&&(et.ssContent===O||et.ssFallback===O)){const nt=Q.vnode;R(D,nt,nt.scopeId,nt.slotScopeIds,Q.parent)}}},P=(D,O,A,lt,Q,et,nt,ut,tt=0)=>{for(let T=tt;T<D.length;T++){const E=D[T]=ut?Ii(D[T]):pi(D[T]);g(null,E,O,A,lt,Q,et,nt,ut)}},x=(D,O,A,lt,Q,et,nt)=>{const ut=O.el=D.el;let{patchFlag:tt,dynamicChildren:T,dirs:E}=O;tt|=D.patchFlag&16;const N=D.props||be,G=O.props||be;let K;if(A&&br(A,!1),(K=G.onVnodeBeforeUpdate)&&ui(K,A,O,D),E&&Tr(O,D,A,"beforeUpdate"),A&&br(A,!0),(N.innerHTML&&G.innerHTML==null||N.textContent&&G.textContent==null)&&c(ut,""),T?S(D.dynamicChildren,T,ut,A,lt,Vl(O,Q),et):nt||V(D,O,ut,null,A,lt,Vl(O,Q),et,!1),tt>0){if(tt&16)L(ut,N,G,A,Q);else if(tt&2&&N.class!==G.class&&s(ut,"class",null,G.class,Q),tt&4&&s(ut,"style",N.style,G.style,Q),tt&8){const q=O.dynamicProps;for(let Mt=0;Mt<q.length;Mt++){const ht=q[Mt],dt=N[ht],ct=G[ht];(ct!==dt||ht==="value")&&s(ut,ht,dt,ct,Q,A)}}tt&1&&D.children!==O.children&&c(ut,O.children)}else!nt&&T==null&&L(ut,N,G,A,Q);((K=G.onVnodeUpdated)||E)&&xn(()=>{K&&ui(K,A,O,D),E&&Tr(O,D,A,"updated")},lt)},S=(D,O,A,lt,Q,et,nt)=>{for(let ut=0;ut<O.length;ut++){const tt=D[ut],T=O[ut],E=tt.el&&(tt.type===$e||!Vr(tt,T)||tt.shapeFlag&198)?f(tt.el):A;g(tt,T,E,null,lt,Q,et,nt,!0)}},L=(D,O,A,lt,Q)=>{if(O!==A){if(O!==be)for(const et in O)!xo(et)&&!(et in A)&&s(D,et,O[et],null,Q,lt);for(const et in A){if(xo(et))continue;const nt=A[et],ut=O[et];nt!==ut&&et!=="value"&&s(D,et,ut,nt,Q,lt)}"value"in A&&s(D,"value",O.value,A.value,Q)}},I=(D,O,A,lt,Q,et,nt,ut,tt)=>{const T=O.el=D?D.el:a(""),E=O.anchor=D?D.anchor:a("");let{patchFlag:N,dynamicChildren:G,slotScopeIds:K}=O;K&&(ut=ut?ut.concat(K):K),D==null?(i(T,A,lt),i(E,A,lt),P(O.children||[],A,E,Q,et,nt,ut,tt)):N>0&&N&64&&G&&D.dynamicChildren&&D.dynamicChildren.length===G.length?(S(D.dynamicChildren,G,A,Q,et,nt,ut),(O.key!=null||Q&&O===Q.subTree)&&vm(D,O,!0)):V(D,O,A,E,Q,et,nt,ut,tt)},F=(D,O,A,lt,Q,et,nt,ut,tt)=>{O.slotScopeIds=ut,D==null?O.shapeFlag&512?Q.ctx.activate(O,A,lt,nt,tt):X(O,A,lt,Q,et,nt,tt):Y(D,O,tt)},X=(D,O,A,lt,Q,et,nt)=>{const ut=D.component=uv(D,lt,Q);if(yl(D)&&(ut.ctx.renderer=Bt),fv(ut,!1,nt),ut.asyncDep){if(Q&&Q.registerDep(ut,W,nt),!D.el){const tt=ut.subTree=Re(hn);p(null,tt,O,A),D.placeholder=tt.el}}else W(ut,D,O,A,Q,et,nt)},Y=(D,O,A)=>{const lt=O.component=D.component;if(G0(D,O,A))if(lt.asyncDep&&!lt.asyncResolved){$(lt,O,A);return}else lt.next=O,lt.update();else O.el=D.el,lt.vnode=O},W=(D,O,A,lt,Q,et,nt)=>{const ut=()=>{if(D.isMounted){let{next:N,bu:G,u:K,parent:q,vnode:Mt}=D;{const xt=xm(D);if(xt){N&&(N.el=Mt.el,$(D,N,nt)),xt.asyncDep.then(()=>{xn(()=>{D.isUnmounted||T()},Q)});return}}let ht=N,dt;br(D,!1),N?(N.el=Mt.el,$(D,N,nt)):N=Mt,G&&Na(G),(dt=N.props&&N.props.onVnodeBeforeUpdate)&&ui(dt,q,N,Mt),br(D,!0);const ct=gh(D),st=D.subTree;D.subTree=ct,g(st,ct,f(st.el),pt(st),D,Q,et),N.el=ct.el,ht===null&&W0(D,ct.el),K&&xn(K,Q),(dt=N.props&&N.props.onVnodeUpdated)&&xn(()=>ui(dt,q,N,Mt),Q)}else{let N;const{el:G,props:K}=O,{bm:q,m:Mt,parent:ht,root:dt,type:ct}=D,st=To(O);br(D,!1),q&&Na(q),!st&&(N=K&&K.onVnodeBeforeMount)&&ui(N,ht,O),br(D,!0);{dt.ce&&dt.ce._hasShadowRoot()&&dt.ce._injectChildStyle(ct);const xt=D.subTree=gh(D);g(null,xt,A,lt,D,Q,et),O.el=xt.el}if(Mt&&xn(Mt,Q),!st&&(N=K&&K.onVnodeMounted)){const xt=O;xn(()=>ui(N,ht,xt),Q)}(O.shapeFlag&256||ht&&To(ht.vnode)&&ht.vnode.shapeFlag&256)&&D.a&&xn(D.a,Q),D.isMounted=!0,O=A=lt=null}};D.scope.on();const tt=D.effect=new Cp(ut);D.scope.off();const T=D.update=tt.run.bind(tt),E=D.job=tt.runIfDirty.bind(tt);E.i=D,E.id=D.uid,tt.scheduler=()=>df(E),br(D,!0),T()},$=(D,O,A)=>{O.component=D;const lt=D.vnode.props;D.vnode=O,D.next=null,q0(D,O.props,lt,A),j0(D,O.children,A),ki(),ch(D),Vi()},V=(D,O,A,lt,Q,et,nt,ut,tt=!1)=>{const T=D&&D.children,E=D?D.shapeFlag:0,N=O.children,{patchFlag:G,shapeFlag:K}=O;if(G>0){if(G&128){gt(T,N,A,lt,Q,et,nt,ut,tt);return}else if(G&256){vt(T,N,A,lt,Q,et,nt,ut,tt);return}}K&8?(E&16&&at(T,Q,et),N!==T&&c(A,N)):E&16?K&16?gt(T,N,A,lt,Q,et,nt,ut,tt):at(T,Q,et,!0):(E&8&&c(A,""),K&16&&P(N,A,lt,Q,et,nt,ut,tt))},vt=(D,O,A,lt,Q,et,nt,ut,tt)=>{D=D||Rs,O=O||Rs;const T=D.length,E=O.length,N=Math.min(T,E);let G;for(G=0;G<N;G++){const K=O[G]=tt?Ii(O[G]):pi(O[G]);g(D[G],K,A,null,Q,et,nt,ut,tt)}T>E?at(D,Q,et,!0,!1,N):P(O,A,lt,Q,et,nt,ut,tt,N)},gt=(D,O,A,lt,Q,et,nt,ut,tt)=>{let T=0;const E=O.length;let N=D.length-1,G=E-1;for(;T<=N&&T<=G;){const K=D[T],q=O[T]=tt?Ii(O[T]):pi(O[T]);if(Vr(K,q))g(K,q,A,null,Q,et,nt,ut,tt);else break;T++}for(;T<=N&&T<=G;){const K=D[N],q=O[G]=tt?Ii(O[G]):pi(O[G]);if(Vr(K,q))g(K,q,A,null,Q,et,nt,ut,tt);else break;N--,G--}if(T>N){if(T<=G){const K=G+1,q=K<E?O[K].el:lt;for(;T<=G;)g(null,O[T]=tt?Ii(O[T]):pi(O[T]),A,q,Q,et,nt,ut,tt),T++}}else if(T>G)for(;T<=N;)Lt(D[T],Q,et,!0),T++;else{const K=T,q=T,Mt=new Map;for(T=q;T<=G;T++){const Et=O[T]=tt?Ii(O[T]):pi(O[T]);Et.key!=null&&Mt.set(Et.key,T)}let ht,dt=0;const ct=G-q+1;let st=!1,xt=0;const Ot=new Array(ct);for(T=0;T<ct;T++)Ot[T]=0;for(T=K;T<=N;T++){const Et=D[T];if(dt>=ct){Lt(Et,Q,et,!0);continue}let Xt;if(Et.key!=null)Xt=Mt.get(Et.key);else for(ht=q;ht<=G;ht++)if(Ot[ht-q]===0&&Vr(Et,O[ht])){Xt=ht;break}Xt===void 0?Lt(Et,Q,et,!0):(Ot[Xt-q]=T+1,Xt>=xt?xt=Xt:st=!0,g(Et,O[Xt],A,null,Q,et,nt,ut,tt),dt++)}const Vt=st?tv(Ot):Rs;for(ht=Vt.length-1,T=ct-1;T>=0;T--){const Et=q+T,Xt=O[Et],Yt=O[Et+1],de=Et+1<E?Yt.el||ym(Yt):lt;Ot[T]===0?g(null,Xt,A,de,Q,et,nt,ut,tt):st&&(ht<0||T!==Vt[ht]?St(Xt,A,de,2):ht--)}}},St=(D,O,A,lt,Q=null)=>{const{el:et,type:nt,transition:ut,children:tt,shapeFlag:T}=D;if(T&6){St(D.component.subTree,O,A,lt);return}if(T&128){D.suspense.move(O,A,lt);return}if(T&64){nt.move(D,O,A,Bt);return}if(nt===$e){i(et,O,A);for(let N=0;N<tt.length;N++)St(tt[N],O,A,lt);i(D.anchor,O,A);return}if(nt===Fa){y(D,O,A);return}if(lt!==2&&T&1&&ut)if(lt===0)ut.beforeEnter(et),i(et,O,A),xn(()=>ut.enter(et),Q);else{const{leave:N,delayLeave:G,afterLeave:K}=ut,q=()=>{D.ctx.isUnmounted?r(et):i(et,O,A)},Mt=()=>{et._isLeaving&&et[hi](!0),N(et,()=>{q(),K&&K()})};G?G(et,q,Mt):Mt()}else i(et,O,A)},Lt=(D,O,A,lt=!1,Q=!1)=>{const{type:et,props:nt,ref:ut,children:tt,dynamicChildren:T,shapeFlag:E,patchFlag:N,dirs:G,cacheIndex:K}=D;if(N===-2&&(Q=!1),ut!=null&&(ki(),Eo(ut,null,A,D,!0),Vi()),K!=null&&(O.renderCache[K]=void 0),E&256){O.ctx.deactivate(D);return}const q=E&1&&G,Mt=!To(D);let ht;if(Mt&&(ht=nt&&nt.onVnodeBeforeUnmount)&&ui(ht,O,D),E&6)_t(D.component,A,lt);else{if(E&128){D.suspense.unmount(A,lt);return}q&&Tr(D,null,O,"beforeUnmount"),E&64?D.type.remove(D,O,A,Bt,lt):T&&!T.hasOnce&&(et!==$e||N>0&&N&64)?at(T,O,A,!1,!0):(et===$e&&N&384||!Q&&E&16)&&at(tt,O,A),lt&&Qt(D)}(Mt&&(ht=nt&&nt.onVnodeUnmounted)||q)&&xn(()=>{ht&&ui(ht,O,D),q&&Tr(D,null,O,"unmounted")},A)},Qt=D=>{const{type:O,el:A,anchor:lt,transition:Q}=D;if(O===$e){it(A,lt);return}if(O===Fa){v(D);return}const et=()=>{r(A),Q&&!Q.persisted&&Q.afterLeave&&Q.afterLeave()};if(D.shapeFlag&1&&Q&&!Q.persisted){const{leave:nt,delayLeave:ut}=Q,tt=()=>nt(A,et);ut?ut(D.el,et,tt):tt()}else et()},it=(D,O)=>{let A;for(;D!==O;)A=h(D),r(D),D=A;r(O)},_t=(D,O,A)=>{const{bum:lt,scope:Q,job:et,subTree:nt,um:ut,m:tt,a:T}=D;yh(tt),yh(T),lt&&Na(lt),Q.stop(),et&&(et.flags|=8,Lt(nt,D,O,A)),ut&&xn(ut,O),xn(()=>{D.isUnmounted=!0},O)},at=(D,O,A,lt=!1,Q=!1,et=0)=>{for(let nt=et;nt<D.length;nt++)Lt(D[nt],O,A,lt,Q)},pt=D=>{if(D.shapeFlag&6)return pt(D.component.subTree);if(D.shapeFlag&128)return D.suspense.next();const O=h(D.anchor||D.el),A=O&&O[p0];return A?h(A):O};let wt=!1;const Dt=(D,O,A)=>{let lt;D==null?O._vnode&&(Lt(O._vnode,null,null,!0),lt=O._vnode.component):g(O._vnode||null,D,O,null,null,null,A),O._vnode=D,wt||(wt=!0,ch(lt),Xp(),wt=!1)},Bt={p:g,um:Lt,m:St,r:Qt,mt:X,mc:P,pc:V,pbc:S,n:pt,o:n};return{render:Dt,hydrate:void 0,createApp:F0(Dt)}}function Vl({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function br({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Q0(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function vm(n,t,e=!1){const i=n.children,r=t.children;if(Gt(i)&&Gt(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Ii(r[s]),a.el=o.el),!e&&a.patchFlag!==-2&&vm(o,a)),a.type===Tl&&(a.patchFlag===-1&&(a=r[s]=Ii(a)),a.el=o.el),a.type===hn&&!a.el&&(a.el=o.el)}}function tv(n){const t=n.slice(),e=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const u=n[i];if(u!==0){if(r=e[e.length-1],n[r]<u){t[i]=r,e.push(i);continue}for(s=0,o=e.length-1;s<o;)a=s+o>>1,n[e[a]]<u?s=a+1:o=a;u<n[e[s]]&&(s>0&&(t[i]=e[s-1]),e[s]=i)}}for(s=e.length,o=e[s-1];s-- >0;)e[s]=o,o=t[o];return e}function xm(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:xm(t)}function yh(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function ym(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?ym(t.subTree):null}const Mm=n=>n.__isSuspense;function ev(n,t){t&&t.pendingBranch?Gt(n)?t.effects.push(...n):t.effects.push(n):c0(n)}const $e=Symbol.for("v-fgt"),Tl=Symbol.for("v-txt"),hn=Symbol.for("v-cmt"),Fa=Symbol.for("v-stc"),Ao=[];let In=null;function ce(n=!1){Ao.push(In=n?null:[])}function nv(){Ao.pop(),In=Ao[Ao.length-1]||null}let Fo=1;function el(n,t=!1){Fo+=n,n<0&&In&&t&&(In.hasOnce=!0)}function Sm(n){return n.dynamicChildren=Fo>0?In||Rs:null,nv(),Fo>0&&In&&In.push(n),n}function fe(n,t,e,i,r,s){return Sm(rt(n,t,e,i,r,s,!0))}function iv(n,t,e,i,r){return Sm(Re(n,t,e,i,r,!0))}function nl(n){return n?n.__v_isVNode===!0:!1}function Vr(n,t){return n.type===t.type&&n.key===t.key}const Em=({key:n})=>n??null,Ba=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?Be(n)||on(n)||Jt(n)?{i:Xn,r:n,k:t,f:!!e}:n:null);function rt(n,t=null,e=null,i=0,r=null,s=n===$e?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Em(t),ref:t&&Ba(t),scopeId:Yp,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Xn};return a?(_f(l,e),s&128&&n.normalize(l)):e&&(l.shapeFlag|=Be(e)?8:16),Fo>0&&!o&&In&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&In.push(l),l}const Re=rv;function rv(n,t=null,e=null,i=0,r=null,s=!1){if((!n||n===R0)&&(n=hn),nl(n)){const a=_r(n,t,!0);return e&&_f(a,e),Fo>0&&!s&&In&&(a.shapeFlag&6?In[In.indexOf(n)]=a:In.push(a)),a.patchFlag=-2,a}if(mv(n)&&(n=n.__vccOpts),t){t=sv(t);let{class:a,style:l}=t;a&&!Be(a)&&(t.class=Ge(a)),ge(l)&&(hf(l)&&!Gt(l)&&(l=We({},l)),t.style=Kr(l))}const o=Be(n)?1:Mm(n)?128:jp(n)?64:ge(n)?4:Jt(n)?2:0;return rt(n,t,e,i,r,o,s,!0)}function sv(n){return n?hf(n)||hm(n)?We({},n):n:null}function _r(n,t,e=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,u=t?av(r||{},t):r,c={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&Em(u),ref:t&&t.ref?e&&s?Gt(s)?s.concat(Ba(t)):[s,Ba(t)]:Ba(t):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==$e?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&_r(n.ssContent),ssFallback:n.ssFallback&&_r(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Oo(c,l.clone(c)),c}function za(n=" ",t=0){return Re(Tl,null,n,t)}function ov(n,t){const e=Re(Fa,null,n);return e.staticCount=t,e}function ei(n="",t=!1){return t?(ce(),iv(hn,null,n)):Re(hn,null,n)}function pi(n){return n==null||typeof n=="boolean"?Re(hn):Gt(n)?Re($e,null,n.slice()):nl(n)?Ii(n):Re(Tl,null,String(n))}function Ii(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:_r(n)}function _f(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Gt(t))e=16;else if(typeof t=="object")if(i&65){const r=t.default;r&&(r._c&&(r._d=!1),_f(n,r()),r._c&&(r._d=!0));return}else{e=32;const r=t._;!r&&!hm(t)?t._ctx=Xn:r===3&&Xn&&(Xn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else Jt(t)?(t={default:t,_ctx:Xn},e=32):(t=String(t),i&64?(e=16,t=[za(t)]):e=8);n.children=t,n.shapeFlag|=e}function av(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const r in i)if(r==="class")t.class!==i.class&&(t.class=Ge([t.class,i.class]));else if(r==="style")t.style=Kr([t.style,i.style]);else if(ml(r)){const s=t[r],o=i[r];o&&s!==o&&!(Gt(s)&&s.includes(o))&&(t[r]=s?[].concat(s,o):o)}else r!==""&&(t[r]=i[r])}return t}function ui(n,t,e,i=null){li(n,t,7,[e,i])}const lv=am();let cv=0;function uv(n,t,e){const i=n.type,r=(t?t.appContext:n.appContext)||lv,s={uid:cv++,vnode:n,type:i,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Dg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pm(i,r),emitsOptions:lm(i,r),emit:null,emitted:null,propsDefaults:be,inheritAttrs:i.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=z0.bind(null,s),n.ce&&n.ce(s),s}let dn=null;const Tm=()=>dn||Xn;let il,Yc;{const n=gl(),t=(e,i)=>{let r;return(r=n[e])||(r=n[e]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};il=t("__VUE_INSTANCE_SETTERS__",e=>dn=e),Yc=t("__VUE_SSR_SETTERS__",e=>Bo=e)}const Jo=n=>{const t=dn;return il(n),n.scope.on(),()=>{n.scope.off(),il(t)}},Mh=()=>{dn&&dn.scope.off(),il(null)};function bm(n){return n.vnode.shapeFlag&4}let Bo=!1;function fv(n,t=!1,e=!1){t&&Yc(t);const{props:i,children:r}=n.vnode,s=bm(n);X0(n,i,s,t),K0(n,r,e||t);const o=s?hv(n,t):void 0;return t&&Yc(!1),o}function hv(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,P0);const{setup:i}=e;if(i){ki();const r=n.setupContext=i.length>1?pv(n):null,s=Jo(n),o=jo(i,n,0,[n.props,r]),a=yp(o);if(Vi(),s(),(a||n.sp)&&!To(n)&&nm(n),a){if(o.then(Mh,Mh),t)return o.then(l=>{Sh(n,l)}).catch(l=>{xl(l,n,0)});n.asyncDep=o}else Sh(n,o)}else Am(n)}function Sh(n,t,e){Jt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:ge(t)&&(n.setupState=Hp(t)),Am(n)}function Am(n,t,e){const i=n.type;n.render||(n.render=i.render||xi);{const r=Jo(n);ki();try{D0(n)}finally{Vi(),r()}}}const dv={get(n,t){return rn(n,"get",""),n[t]}};function pv(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,dv),slots:n.slots,emit:n.emit,expose:t}}function bl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Hp(Jg(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in bo)return bo[e](n)},has(t,e){return e in t||e in bo}})):n.proxy}function mv(n){return Jt(n)&&"__vccOpts"in n}const Mn=(n,t)=>i0(n,t,Bo);function _v(n,t,e){try{el(-1);const i=arguments.length;return i===2?ge(t)&&!Gt(t)?nl(t)?Re(n,null,[t]):Re(n,t):Re(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&nl(e)&&(e=[e]),Re(n,t,e))}finally{el(1)}}const gv="3.5.29";/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $c;const Eh=typeof window<"u"&&window.trustedTypes;if(Eh)try{$c=Eh.createPolicy("vue",{createHTML:n=>n})}catch{}const wm=$c?n=>$c.createHTML(n):n=>n,vv="http://www.w3.org/2000/svg",xv="http://www.w3.org/1998/Math/MathML",Di=typeof document<"u"?document:null,Th=Di&&Di.createElement("template"),yv={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const r=t==="svg"?Di.createElementNS(vv,n):t==="mathml"?Di.createElementNS(xv,n):e?Di.createElement(n,{is:e}):Di.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Di.createTextNode(n),createComment:n=>Di.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Di.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,r,s){const o=e?e.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),e),!(r===s||!(r=r.nextSibling)););else{Th.innerHTML=wm(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Th.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},Ki="transition",so="animation",zo=Symbol("_vtc"),Cm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Mv=We({},Zp,Cm),Sv=n=>(n.displayName="Transition",n.props=Mv,n),Fr=Sv((n,{slots:t})=>_v(g0,Ev(n),t)),Ar=(n,t=[])=>{Gt(n)?n.forEach(e=>e(...t)):n&&n(...t)},bh=n=>n?Gt(n)?n.some(t=>t.length>1):n.length>1:!1;function Ev(n){const t={};for(const I in n)I in Cm||(t[I]=n[I]);if(n.css===!1)return t;const{name:e="v",type:i,duration:r,enterFromClass:s=`${e}-enter-from`,enterActiveClass:o=`${e}-enter-active`,enterToClass:a=`${e}-enter-to`,appearFromClass:l=s,appearActiveClass:u=o,appearToClass:c=a,leaveFromClass:f=`${e}-leave-from`,leaveActiveClass:h=`${e}-leave-active`,leaveToClass:d=`${e}-leave-to`}=n,_=Tv(r),g=_&&_[0],m=_&&_[1],{onBeforeEnter:p,onEnter:M,onEnterCancelled:y,onLeave:v,onLeaveCancelled:w,onBeforeAppear:b=p,onAppear:R=M,onAppearCancelled:P=y}=t,x=(I,F,X,Y)=>{I._enterCancelled=Y,wr(I,F?c:a),wr(I,F?u:o),X&&X()},S=(I,F)=>{I._isLeaving=!1,wr(I,f),wr(I,d),wr(I,h),F&&F()},L=I=>(F,X)=>{const Y=I?R:M,W=()=>x(F,I,X);Ar(Y,[F,W]),Ah(()=>{wr(F,I?l:s),Ti(F,I?c:a),bh(Y)||wh(F,i,g,W)})};return We(t,{onBeforeEnter(I){Ar(p,[I]),Ti(I,s),Ti(I,o)},onBeforeAppear(I){Ar(b,[I]),Ti(I,l),Ti(I,u)},onEnter:L(!1),onAppear:L(!0),onLeave(I,F){I._isLeaving=!0;const X=()=>S(I,F);Ti(I,f),I._enterCancelled?(Ti(I,h),Ph(I)):(Ph(I),Ti(I,h)),Ah(()=>{I._isLeaving&&(wr(I,f),Ti(I,d),bh(v)||wh(I,i,m,X))}),Ar(v,[I,X])},onEnterCancelled(I){x(I,!1,void 0,!0),Ar(y,[I])},onAppearCancelled(I){x(I,!0,void 0,!0),Ar(P,[I])},onLeaveCancelled(I){S(I),Ar(w,[I])}})}function Tv(n){if(n==null)return null;if(ge(n))return[Hl(n.enter),Hl(n.leave)];{const t=Hl(n);return[t,t]}}function Hl(n){return Eg(n)}function Ti(n,t){t.split(/\s+/).forEach(e=>e&&n.classList.add(e)),(n[zo]||(n[zo]=new Set)).add(t)}function wr(n,t){t.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const e=n[zo];e&&(e.delete(t),e.size||(n[zo]=void 0))}function Ah(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let bv=0;function wh(n,t,e,i){const r=n._endId=++bv,s=()=>{r===n._endId&&i()};if(e!=null)return setTimeout(s,e);const{type:o,timeout:a,propCount:l}=Av(n,t);if(!o)return i();const u=o+"end";let c=0;const f=()=>{n.removeEventListener(u,h),s()},h=d=>{d.target===n&&++c>=l&&f()};setTimeout(()=>{c<l&&f()},a+1),n.addEventListener(u,h)}function Av(n,t){const e=window.getComputedStyle(n),i=_=>(e[_]||"").split(", "),r=i(`${Ki}Delay`),s=i(`${Ki}Duration`),o=Ch(r,s),a=i(`${so}Delay`),l=i(`${so}Duration`),u=Ch(a,l);let c=null,f=0,h=0;t===Ki?o>0&&(c=Ki,f=o,h=s.length):t===so?u>0&&(c=so,f=u,h=l.length):(f=Math.max(o,u),c=f>0?o>u?Ki:so:null,h=c?c===Ki?s.length:l.length:0);const d=c===Ki&&/\b(?:transform|all)(?:,|$)/.test(i(`${Ki}Property`).toString());return{type:c,timeout:f,propCount:h,hasTransform:d}}function Ch(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((e,i)=>Rh(e)+Rh(n[i])))}function Rh(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Ph(n){return(n?n.ownerDocument:document).body.offsetHeight}function wv(n,t,e){const i=n[zo];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const rl=Symbol("_vod"),Rm=Symbol("_vsh"),Gl={name:"show",beforeMount(n,{value:t},{transition:e}){n[rl]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):oo(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),oo(n,!0),i.enter(n)):i.leave(n,()=>{oo(n,!1)}):oo(n,t))},beforeUnmount(n,{value:t}){oo(n,t)}};function oo(n,t){n.style.display=t?n[rl]:"none",n[Rm]=!t}const Cv=Symbol(""),Rv=/(?:^|;)\s*display\s*:/;function Pv(n,t,e){const i=n.style,r=Be(e);let s=!1;if(e&&!r){if(t)if(Be(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&ka(i,a,"")}else for(const o in t)e[o]==null&&ka(i,o,"");for(const o in e)o==="display"&&(s=!0),ka(i,o,e[o])}else if(r){if(t!==e){const o=i[Cv];o&&(e+=";"+o),i.cssText=e,s=Rv.test(e)}}else t&&n.removeAttribute("style");rl in n&&(n[rl]=s?i.display:"",n[Rm]&&(i.display="none"))}const Dh=/\s*!important$/;function ka(n,t,e){if(Gt(e))e.forEach(i=>ka(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=Dv(n,t);Dh.test(e)?n.setProperty(rs(i),e.replace(Dh,""),"important"):n[i]=e}}const Lh=["Webkit","Moz","ms"],Wl={};function Dv(n,t){const e=Wl[t];if(e)return e;let i=mr(t);if(i!=="filter"&&i in n)return Wl[t]=i;i=Ep(i);for(let r=0;r<Lh.length;r++){const s=Lh[r]+i;if(s in n)return Wl[t]=s}return t}const Ih="http://www.w3.org/1999/xlink";function Uh(n,t,e,i,r,s=Rg(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Ih,t.slice(6,t.length)):n.setAttributeNS(Ih,t,e):e==null||s&&!bp(e)?n.removeAttribute(t):n.setAttribute(t,s?"":yi(e)?String(e):e)}function Nh(n,t,e,i,r){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?wm(e):e);return}const s=n.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=bp(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(r||t)}function Ts(n,t,e,i){n.addEventListener(t,e,i)}function Lv(n,t,e,i){n.removeEventListener(t,e,i)}const Oh=Symbol("_vei");function Iv(n,t,e,i,r=null){const s=n[Oh]||(n[Oh]={}),o=s[t];if(i&&o)o.value=i;else{const[a,l]=Uv(t);if(i){const u=s[t]=Fv(i,r);Ts(n,a,u,l)}else o&&(Lv(n,a,o,l),s[t]=void 0)}}const Fh=/(?:Once|Passive|Capture)$/;function Uv(n){let t;if(Fh.test(n)){t={};let i;for(;i=n.match(Fh);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):rs(n.slice(2)),t]}let Xl=0;const Nv=Promise.resolve(),Ov=()=>Xl||(Nv.then(()=>Xl=0),Xl=Date.now());function Fv(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;li(Bv(i,e.value),t,5,[i])};return e.value=n,e.attached=Ov(),e}function Bv(n,t){if(Gt(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>r=>!r._stopped&&i&&i(r))}else return t}const Bh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,zv=(n,t,e,i,r,s)=>{const o=r==="svg";t==="class"?wv(n,i,o):t==="style"?Pv(n,e,i):ml(t)?tf(t)||Iv(n,t,e,i,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):kv(n,t,i,o))?(Nh(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Uh(n,t,i,o,s,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!Be(i))?Nh(n,mr(t),i,s,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),Uh(n,t,i,o))};function kv(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&Bh(t)&&Jt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Bh(t)&&Be(e)?!1:t in n}const zh=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Gt(t)?e=>Na(t,e):t};function Vv(n){n.target.composing=!0}function kh(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ql=Symbol("_assign");function Vh(n,t,e){return t&&(n=n.trim()),e&&(n=rf(n)),n}const Pm={created(n,{modifiers:{lazy:t,trim:e,number:i}},r){n[ql]=zh(r);const s=i||r.props&&r.props.type==="number";Ts(n,t?"change":"input",o=>{o.target.composing||n[ql](Vh(n.value,e,s))}),(e||s)&&Ts(n,"change",()=>{n.value=Vh(n.value,e,s)}),t||(Ts(n,"compositionstart",Vv),Ts(n,"compositionend",kh),Ts(n,"change",kh))},mounted(n,{value:t}){n.value=t??""},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:r,number:s}},o){if(n[ql]=zh(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?rf(n.value):n.value,l=t??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&t===e||r&&n.value.trim()===l)||(n.value=l))}},Hv=We({patchProp:zv},yv);let Hh;function Gv(){return Hh||(Hh=Z0(Hv))}const Wv=((...n)=>{const t=Gv().createApp(...n),{mount:e}=t;return t.mount=i=>{const r=qv(i);if(!r)return;const s=t._component;!Jt(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=e(r,!1,Xv(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t});function Xv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function qv(n){return Be(n)?document.querySelector(n):n}function Li(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Dm(n,t){n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var On={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ks={duration:.5,overwrite:!1,delay:0},gf,Je,Pe,qn=1e8,Te=1/qn,Kc=Math.PI*2,Yv=Kc/4,$v=0,Lm=Math.sqrt,Kv=Math.cos,jv=Math.sin,Ke=function(t){return typeof t=="string"},Ne=function(t){return typeof t=="function"},Gi=function(t){return typeof t=="number"},vf=function(t){return typeof t>"u"},Mi=function(t){return typeof t=="object"},En=function(t){return t!==!1},xf=function(){return typeof window<"u"},ua=function(t){return Ne(t)||Ke(t)},Im=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},an=Array.isArray,Zv=/random\([^)]+\)/g,Jv=/,\s*/g,Gh=/(?:-?\.?\d|\.)+/gi,Um=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,As=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Yl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Nm=/[+-]=-?[.\d]+/,Qv=/[^,'"\[\]\s]+/gi,tx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Le,di,jc,yf,Fn={},sl={},Om,Fm=function(t){return(sl=Vs(t,Fn))&&wn},Mf=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ko=function(t,e){return!e&&console.warn(t)},Bm=function(t,e){return t&&(Fn[t]=e)&&sl&&(sl[t]=e)||Fn},Vo=function(){return 0},ex={suppressEvents:!0,isStart:!0,kill:!1},Va={suppressEvents:!0,kill:!1},nx={suppressEvents:!0},Sf={},fr=[],Zc={},zm,Dn={},$l={},Wh=30,Ha=[],Ef="",Tf=function(t){var e=t[0],i,r;if(Mi(e)||Ne(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(r=Ha.length;r--&&!Ha[r].targetTest(e););i=Ha[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new c_(t[r],i)))||t.splice(r,1);return t},Jr=function(t){return t._gsap||Tf(Yn(t))[0]._gsap},km=function(t,e,i){return(i=t[e])&&Ne(i)?t[e]():vf(i)&&t.getAttribute&&t.getAttribute(e)||i},Tn=function(t,e){return(t=t.split(",")).forEach(e)||t},Fe=function(t){return Math.round(t*1e5)/1e5||0},De=function(t){return Math.round(t*1e7)/1e7||0},Is=function(t,e){var i=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+r:i==="-"?t-r:i==="*"?t*r:t/r},ix=function(t,e){for(var i=e.length,r=0;t.indexOf(e[r])<0&&++r<i;);return r<i},ol=function(){var t=fr.length,e=fr.slice(0),i,r;for(Zc={},fr.length=0,i=0;i<t;i++)r=e[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},bf=function(t){return!!(t._initted||t._startAt||t.add)},Vm=function(t,e,i,r){fr.length&&!Je&&ol(),t.render(e,i,!!(Je&&e<0&&bf(t))),fr.length&&!Je&&ol()},Hm=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Qv).length<2?e:Ke(t)?t.trim():t},Gm=function(t){return t},Bn=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},rx=function(t){return function(e,i){for(var r in i)r in e||r==="duration"&&t||r==="ease"||(e[r]=i[r])}},Vs=function(t,e){for(var i in e)t[i]=e[i];return t},Xh=function n(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=Mi(e[i])?n(t[i]||(t[i]={}),e[i]):e[i]);return t},al=function(t,e){var i={},r;for(r in t)r in e||(i[r]=t[r]);return i},wo=function(t){var e=t.parent||Le,i=t.keyframes?rx(an(t.keyframes)):Bn;if(En(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},sx=function(t,e){for(var i=t.length,r=i===e.length;r&&i--&&t[i]===e[i];);return i<0},Wm=function(t,e,i,r,s){var o=t[r],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[r]=e,e._prev=o,e.parent=e._dp=t,e},Al=function(t,e,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=e._prev,o=e._next;s?s._next=o:t[i]===e&&(t[i]=o),o?o._prev=s:t[r]===e&&(t[r]=s),e._next=e._prev=e.parent=null},gr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Qr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},ox=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Jc=function(t,e,i,r){return t._startAt&&(Je?t._startAt.revert(Va):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},ax=function n(t){return!t||t._ts&&n(t.parent)},qh=function(t){return t._repeat?Hs(t._tTime,t=t.duration()+t._rDelay)*t:0},Hs=function(t,e){var i=Math.floor(t=De(t/e));return t&&i===t?i-1:i},ll=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},wl=function(t){return t._end=De(t._start+(t._tDur/Math.abs(t._ts||t._rts||Te)||0))},Cl=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=De(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),wl(t),i._dirty||Qr(i,t)),t},Xm=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=ll(t.rawTime(),e),(!e._dur||Qo(0,e.totalDuration(),i)-e._tTime>Te)&&e.render(i,!0)),Qr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-Te}},_i=function(t,e,i,r){return e.parent&&gr(e),e._start=De((Gi(i)?i:i||t!==Le?Gn(t,i,e):t._time)+e._delay),e._end=De(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Wm(t,e,"_first","_last",t._sort?"_start":0),Qc(e)||(t._recent=e),r||Xm(t,e),t._ts<0&&Cl(t,t._tTime),t},qm=function(t,e){return(Fn.ScrollTrigger||Mf("scrollTrigger",e))&&Fn.ScrollTrigger.create(e,t)},Ym=function(t,e,i,r,s){if(wf(t,e,s),!t._initted)return 1;if(!i&&t._pt&&!Je&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&zm!==Ln.frame)return fr.push(t),t._lazy=[s,r],1},lx=function n(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||n(e))},Qc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},cx=function(t,e,i,r){var s=t.ratio,o=e<0||!e&&(!t._start&&lx(t)&&!(!t._initted&&Qc(t))||(t._ts<0||t._dp._ts<0)&&!Qc(t))?0:1,a=t._rDelay,l=0,u,c,f;if(a&&t._repeat&&(l=Qo(0,t._tDur,e),c=Hs(l,a),t._yoyo&&c&1&&(o=1-o),c!==Hs(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||Je||r||t._zTime===Te||!e&&t._zTime){if(!t._initted&&Ym(t,e,r,i,l))return;for(f=t._zTime,t._zTime=e||(i?Te:0),i||(i=e&&!f),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,u=t._pt;u;)u.r(o,u.d),u=u._next;e<0&&Jc(t,e,i,!0),t._onUpdate&&!i&&Un(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&Un(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&gr(t,1),!i&&!Je&&(Un(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},ux=function(t,e,i){var r;if(i>e)for(r=t._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},Gs=function(t,e,i,r){var s=t._repeat,o=De(e)||0,a=t._tTime/t._tDur;return a&&!r&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:De(o*(s+1)+t._rDelay*s):o,a>0&&!r&&Cl(t,t._tTime=t._tDur*a),t.parent&&wl(t),i||Qr(t.parent,t),t},Yh=function(t){return t instanceof pn?Qr(t):Gs(t,t._dur)},fx={_start:0,endTime:Vo,totalDuration:Vo},Gn=function n(t,e,i){var r=t.labels,s=t._recent||fx,o=t.duration()>=qn?s.endTime(!1):t._dur,a,l,u;return Ke(e)&&(isNaN(e)||e in r)?(l=e.charAt(0),u=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(e in r||(r[e]=o),r[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),u&&i&&(l=l/100*(an(i)?i[0]:i).totalDuration()),a>1?n(t,e.substr(0,a-1),i)+l:o+l)):e==null?o:+e},Co=function(t,e,i){var r=Gi(e[1]),s=(r?2:1)+(t<2?0:1),o=e[s],a,l;if(r&&(o.duration=e[1]),o.parent=i,t){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=En(l.vars.inherit)&&l.parent;o.immediateRender=En(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Ve(e[0],o,e[s+1])},Mr=function(t,e){return t||t===0?e(t):e},Qo=function(t,e,i){return i<t?t:i>e?e:i},sn=function(t,e){return!Ke(t)||!(e=tx.exec(t))?"":e[1]},hx=function(t,e,i){return Mr(i,function(r){return Qo(t,e,r)})},tu=[].slice,$m=function(t,e){return t&&Mi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Mi(t[0]))&&!t.nodeType&&t!==di},dx=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(r){var s;return Ke(r)&&!e||$m(r,1)?(s=i).push.apply(s,Yn(r)):i.push(r)})||i},Yn=function(t,e,i){return Pe&&!e&&Pe.selector?Pe.selector(t):Ke(t)&&!i&&(jc||!Ws())?tu.call((e||yf).querySelectorAll(t),0):an(t)?dx(t,i):$m(t)?tu.call(t,0):t?[t]:[]},eu=function(t){return t=Yn(t)[0]||ko("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return Yn(e,i.querySelectorAll?i:i===t?ko("Invalid scope")||yf.createElement("div"):t)}},Km=function(t){return t.sort(function(){return .5-Math.random()})},jm=function(t){if(Ne(t))return t;var e=Mi(t)?t:{each:t},i=ts(e.ease),r=e.from||0,s=parseFloat(e.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=e.axis,c=r,f=r;return Ke(r)?c=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],f=r[1]),function(h,d,_){var g=(_||e).length,m=o[g],p,M,y,v,w,b,R,P,x;if(!m){if(x=e.grid==="auto"?0:(e.grid||[1,qn])[1],!x){for(R=-qn;R<(R=_[x++].getBoundingClientRect().left)&&x<g;);x<g&&x--}for(m=o[g]=[],p=l?Math.min(x,g)*c-.5:r%x,M=x===qn?0:l?g*f/x-.5:r/x|0,R=0,P=qn,b=0;b<g;b++)y=b%x-p,v=M-(b/x|0),m[b]=w=u?Math.abs(u==="y"?v:y):Lm(y*y+v*v),w>R&&(R=w),w<P&&(P=w);r==="random"&&Km(m),m.max=R-P,m.min=P,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(x>g?g-1:u?u==="y"?g/x:x:Math.max(x,g/x))||0)*(r==="edges"?-1:1),m.b=g<0?s-g:s,m.u=sn(e.amount||e.each)||0,i=i&&g<0?o_(i):i}return g=(m[h]-m.min)/m.max||0,De(m.b+(i?i(g):g)*m.v)+m.u}},nu=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var r=De(Math.round(parseFloat(i)/t)*t*e);return(r-r%1)/e+(Gi(i)?0:sn(i))}},Zm=function(t,e){var i=an(t),r,s;return!i&&Mi(t)&&(r=i=t.radius||qn,t.values?(t=Yn(t.values),(s=!Gi(t[0]))&&(r*=r)):t=nu(t.increment)),Mr(e,i?Ne(t)?function(o){return s=t(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=qn,c=0,f=t.length,h,d;f--;)s?(h=t[f].x-a,d=t[f].y-l,h=h*h+d*d):h=Math.abs(t[f]-a),h<u&&(u=h,c=f);return c=!r||u<=r?t[c]:o,s||c===o||Gi(o)?c:c+sn(o)}:nu(t))},Jm=function(t,e,i,r){return Mr(an(t)?!e:i===!0?!!(i=0):!r,function(){return an(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*r)/r})},px=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(r){return e.reduce(function(s,o){return o(s)},r)}},mx=function(t,e){return function(i){return t(parseFloat(i))+(e||sn(i))}},_x=function(t,e,i){return t_(t,e,0,1,i)},Qm=function(t,e,i){return Mr(i,function(r){return t[~~e(r)]})},gx=function n(t,e,i){var r=e-t;return an(t)?Qm(t,n(0,t.length),e):Mr(i,function(s){return(r+(s-t)%r)%r+t})},vx=function n(t,e,i){var r=e-t,s=r*2;return an(t)?Qm(t,n(0,t.length-1),e):Mr(i,function(o){return o=(s+(o-t)%s)%s||0,t+(o>r?s-o:o)})},Ho=function(t){return t.replace(Zv,function(e){var i=e.indexOf("[")+1,r=e.substring(i||7,i?e.indexOf("]"):e.length-1).split(Jv);return Jm(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},t_=function(t,e,i,r,s){var o=e-t,a=r-i;return Mr(s,function(l){return i+((l-t)/o*a||0)})},xx=function n(t,e,i,r){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=Ke(t),a={},l,u,c,f,h;if(i===!0&&(r=1)&&(i=null),o)t={p:t},e={p:e};else if(an(t)&&!an(e)){for(c=[],f=t.length,h=f-2,u=1;u<f;u++)c.push(n(t[u-1],t[u]));f--,s=function(_){_*=f;var g=Math.min(h,~~_);return c[g](_-g)},i=e}else r||(t=Vs(an(t)?[]:{},t));if(!c){for(l in e)Af.call(a,t,l,"get",e[l]);s=function(_){return Pf(_,a)||(o?t.p:t)}}}return Mr(i,s)},$h=function(t,e,i){var r=t.labels,s=qn,o,a,l;for(o in r)a=r[o]-e,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Un=function(t,e,i){var r=t.vars,s=r[e],o=Pe,a=t._ctx,l,u,c;if(s)return l=r[e+"Params"],u=r.callbackScope||t,i&&fr.length&&ol(),a&&(Pe=a),c=l?s.apply(u,l):s.call(u),Pe=o,c},_o=function(t){return gr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Je),t.progress()<1&&Un(t,"onInterrupt"),t},ws,e_=[],n_=function(t){if(t)if(t=!t.name&&t.default||t,xf()||t.headless){var e=t.name,i=Ne(t),r=e&&!i&&t.init?function(){this._props=[]}:t,s={init:Vo,render:Pf,add:Af,kill:Nx,modifier:Ux,rawVars:0},o={targetTest:0,get:0,getSetter:Rf,aliases:{},register:0};if(Ws(),t!==r){if(Dn[e])return;Bn(r,Bn(al(t,s),o)),Vs(r.prototype,Vs(s,al(t,o))),Dn[r.prop=e]=r,t.targetTest&&(Ha.push(r),Sf[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Bm(e,r),t.register&&t.register(wn,r,bn)}else e_.push(t)},Ee=255,go={aqua:[0,Ee,Ee],lime:[0,Ee,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ee],navy:[0,0,128],white:[Ee,Ee,Ee],olive:[128,128,0],yellow:[Ee,Ee,0],orange:[Ee,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ee,0,0],pink:[Ee,192,203],cyan:[0,Ee,Ee],transparent:[Ee,Ee,Ee,0]},Kl=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*Ee+.5|0},i_=function(t,e,i){var r=t?Gi(t)?[t>>16,t>>8&Ee,t&Ee]:0:go.black,s,o,a,l,u,c,f,h,d,_;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),go[t])r=go[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&Ee,r&Ee,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&Ee,t&Ee]}else if(t.substr(0,3)==="hsl"){if(r=_=t.match(Gh),!e)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=Kl(l+1/3,s,o),r[1]=Kl(l,s,o),r[2]=Kl(l-1/3,s,o);else if(~t.indexOf("="))return r=t.match(Um),i&&r.length<4&&(r[3]=1),r}else r=t.match(Gh)||go.transparent;r=r.map(Number)}return e&&!_&&(s=r[0]/Ee,o=r[1]/Ee,a=r[2]/Ee,f=Math.max(s,o,a),h=Math.min(s,o,a),c=(f+h)/2,f===h?l=u=0:(d=f-h,u=c>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},r_=function(t){var e=[],i=[],r=-1;return t.split(hr).forEach(function(s){var o=s.match(As)||[];e.push.apply(e,o),i.push(r+=o.length+1)}),e.c=i,e},Kh=function(t,e,i){var r="",s=(t+r).match(hr),o=e?"hsla(":"rgba(",a=0,l,u,c,f;if(!s)return t;if(s=s.map(function(h){return(h=i_(h,e,1))&&o+(e?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(c=r_(t),l=i.c,l.join(r)!==c.c.join(r)))for(u=t.replace(hr,"1").split(As),f=u.length-1;a<f;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=t.split(hr),f=u.length-1;a<f;a++)r+=u[a]+s[a];return r+u[f]},hr=(function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in go)n+="|"+t+"\\b";return new RegExp(n+")","gi")})(),yx=/hsl[a]?\(/,s_=function(t){var e=t.join(" "),i;if(hr.lastIndex=0,hr.test(e))return i=yx.test(e),t[1]=Kh(t[1],i),t[0]=Kh(t[0],i,r_(t[1])),!0},Go,Ln=(function(){var n=Date.now,t=500,e=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,f,h,d,_=function g(m){var p=n()-r,M=m===!0,y,v,w,b;if((p>t||p<0)&&(i+=p-e),r+=p,w=r-i,y=w-o,(y>0||M)&&(b=++f.frame,h=w-f.time*1e3,f.time=w=w/1e3,o+=y+(y>=s?4:s-y),v=1),M||(l=u(g)),v)for(d=0;d<a.length;d++)a[d](w,h,b,m)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){Om&&(!jc&&xf()&&(di=jc=window,yf=di.document||{},Fn.gsap=wn,(di.gsapVersions||(di.gsapVersions=[])).push(wn.version),Fm(sl||di.GreenSockGlobals||!di.gsap&&di||{}),e_.forEach(n_)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),u=c||function(m){return setTimeout(m,o-f.time*1e3+1|0)},Go=1,_(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Go=0,u=Vo},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,M){var y=p?function(v,w,b,R){m(v,w,b,R),f.remove(y)}:m;return f.remove(m),a[M?"unshift":"push"](y),Ws(),y},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},f})(),Ws=function(){return!Go&&Ln.wake()},se={},Mx=/^[\d.\-M][\d.\-,\s]/,Sx=/["']/g,Ex=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),e[r]=isNaN(u)?u.replace(Sx,"").trim():+u,r=l.substr(a+1).trim();return e},Tx=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<i?t.indexOf(")",i+1):i)},bx=function(t){var e=(t+"").split("("),i=se[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[Ex(e[1])]:Tx(t).split(",").map(Hm)):se._CE&&Mx.test(t)?se._CE("",t):i},o_=function(t){return function(e){return 1-t(1-e)}},a_=function n(t,e){for(var i=t._first,r;i;)i instanceof pn?n(i,e):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==e&&(i.timeline?n(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next},ts=function(t,e){return t&&(Ne(t)?t:se[t]||bx(t))||e},ss=function(t,e,i,r){i===void 0&&(i=function(l){return 1-e(1-l)}),r===void 0&&(r=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:i,easeInOut:r},o;return Tn(t,function(a){se[a]=Fn[a]=s,se[o=a.toLowerCase()]=i;for(var l in s)se[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=se[a+"."+l]=s[l]}),s},l_=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},jl=function n(t,e,i){var r=e>=1?e:1,s=(i||(t?.3:.45))/(e<1?e:1),o=s/Kc*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*jv((c-o)*s)+1},l=t==="out"?a:t==="in"?function(u){return 1-a(1-u)}:l_(a);return s=Kc/s,l.config=function(u,c){return n(t,u,c)},l},Zl=function n(t,e){e===void 0&&(e=1.70158);var i=function(o){return o?--o*o*((e+1)*o+e)+1:0},r=t==="out"?i:t==="in"?function(s){return 1-i(1-s)}:l_(i);return r.config=function(s){return n(t,s)},r};Tn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,t){var e=t<5?t+1:t;ss(n+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});se.Linear.easeNone=se.none=se.Linear.easeIn;ss("Elastic",jl("in"),jl("out"),jl());(function(n,t){var e=1/t,i=2*e,r=2.5*e,s=function(a){return a<e?n*a*a:a<i?n*Math.pow(a-1.5/t,2)+.75:a<r?n*(a-=2.25/t)*a+.9375:n*Math.pow(a-2.625/t,2)+.984375};ss("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ss("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});ss("Circ",function(n){return-(Lm(1-n*n)-1)});ss("Sine",function(n){return n===1?1:-Kv(n*Yv)+1});ss("Back",Zl("in"),Zl("out"),Zl());se.SteppedEase=se.steps=Fn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,r=t+(e?0:1),s=e?1:0,o=1-Te;return function(a){return((r*Qo(0,o,a)|0)+s)*i}}};ks.ease=se["quad.out"];Tn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Ef+=n+","+n+"Params,"});var c_=function(t,e){this.id=$v++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:km,this.set=e?e.getSetter:Rf},Wo=(function(){function n(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Gs(this,+e.duration,1,1),this.data=e.data,Pe&&(this._ctx=Pe,Pe.data.push(this)),Go||Ln.wake()}var t=n.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,Gs(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,r){if(Ws(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Cl(this,i),!s._dp||s.parent||Xm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&_i(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Te||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Vm(this,i,r)),this},t.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+qh(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},t.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+qh(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Hs(this._tTime,s)+1:1},t.timeScale=function(i,r){if(!arguments.length)return this._rts===-Te?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?ll(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Te?0:this._rts,this.totalTime(Qo(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),wl(this),ox(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ws(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Te&&(this._tTime-=Te)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=De(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&_i(r,this,this._start-this._delay),this}return this._start},t.endTime=function(i){return this._start+(En(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ll(r.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=nx);var r=Je;return Je=i,bf(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Je=r,this},t.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Yh(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Yh(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,r){return this.totalTime(Gn(this,i),En(r))},t.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,En(r)),this._dur||(this._zTime=-Te),this},t.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},t.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Te:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Te,this},t.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Te)},t.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},t.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Ne(i)?i:Gm,l=function(){var c=r.then;r.then=null,s&&s(),Ne(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},t.kill=function(){_o(this)},n})();Bn(Wo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Te,_prom:0,_ps:!1,_rts:1});var pn=(function(n){Dm(t,n);function t(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=En(i.sortChildren),Le&&_i(i.parent||Le,Li(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&qm(Li(s),i.scrollTrigger),s}var e=t.prototype;return e.to=function(r,s,o){return Co(0,arguments,this),this},e.from=function(r,s,o){return Co(1,arguments,this),this},e.fromTo=function(r,s,o,a){return Co(2,arguments,this),this},e.set=function(r,s,o){return s.duration=0,s.parent=this,wo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ve(r,s,Gn(this,o),1),this},e.call=function(r,s,o){return _i(this,Ve.delayedCall(0,r,s),o)},e.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new Ve(r,o,Gn(this,l)),this},e.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,wo(o).immediateRender=En(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},e.staggerFromTo=function(r,s,o,a,l,u,c,f){return a.startAt=o,wo(a).immediateRender=En(a.immediateRender),this.staggerTo(r,s,a,l,u,c,f)},e.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:De(r),f=this._zTime<0!=r<0&&(this._initted||!u),h,d,_,g,m,p,M,y,v,w,b,R;if(this!==Le&&c>l&&r>=0&&(c=l),c!==this._tTime||o||f){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),h=c,v=this._start,y=this._ts,p=!y,f&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(b=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(h=De(c%m),c===l?(g=this._repeat,h=u):(w=De(c/m),g=~~w,g&&g===w&&(h=u,g--),h>u&&(h=u)),w=Hs(this._tTime,m),!a&&this._tTime&&w!==g&&this._tTime-w*m-this._dur<=0&&(w=g),b&&g&1&&(h=u-h,R=1),g!==w&&!this._lock){var P=b&&w&1,x=P===(b&&g&1);if(g<w&&(P=!P),a=P?0:c%u?u:c,this._lock=1,this.render(a||(R?0:De(g*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Un(this,"onRepeat"),this.vars.repeatRefresh&&!R&&(this.invalidate()._lock=1,w=g),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,x&&(this._lock=2,a=P?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!R&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;a_(this,R)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=ux(this,De(a),De(h)),M&&(c-=h-(h=M._start))),this._tTime=c,this._time=h,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!w&&(Un(this,"onStart"),this._tTime!==c))return this;if(h>=a&&r>=0)for(d=this._first;d;){if(_=d._next,(d._act||h>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!p){M=0,_&&(c+=this._zTime=-Te);break}}d=_}else{d=this._last;for(var S=r<0?r:h;d;){if(_=d._prev,(d._act||S<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(S-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(S-d._start)*d._ts,s,o||Je&&bf(d)),h!==this._time||!this._ts&&!p){M=0,_&&(c+=this._zTime=S?-Te:Te);break}}d=_}}if(M&&!s&&(this.pause(),M.render(h>=a?0:-Te)._zTime=h>=a?1:-1,this._ts))return this._start=v,wl(this),this.render(r,s,o);this._onUpdate&&!s&&Un(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(v===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&gr(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Un(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,s){var o=this;if(Gi(s)||(s=Gn(this,s,r)),!(r instanceof Wo)){if(an(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Ke(r))return this.addLabel(r,s);if(Ne(r))r=Ve.delayedCall(0,r);else return this}return this!==r?_i(this,r,s):this},e.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-qn);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof Ve?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},e.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},e.remove=function(r){return Ke(r)?this.removeLabel(r):Ne(r)?this.killTweensOf(r):(r.parent===this&&Al(this,r),r===this._recent&&(this._recent=this._last),Qr(this))},e.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=De(Ln.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},e.addLabel=function(r,s){return this.labels[r]=Gn(this,s),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,s,o){var a=Ve.delayedCall(0,s||Vo,o);return a.data="isPause",this._hasPause=1,_i(this,a,Gn(this,r))},e.removePause=function(r){var s=this._first;for(r=Gn(this,r);s;)s._start===r&&s.data==="isPause"&&gr(s),s=s._next},e.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)ar!==a[l]&&a[l].kill(r,s);return this},e.getTweensOf=function(r,s){for(var o=[],a=Yn(r),l=this._first,u=Gi(s),c;l;)l instanceof Ve?ix(l._targets,a)&&(u?(!ar||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},e.tweenTo=function(r,s){s=s||{};var o=this,a=Gn(o,r),l=s,u=l.startAt,c=l.onStart,f=l.onStartParams,h=l.immediateRender,d,_=Ve.to(o,Bn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||Te,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());_._dur!==m&&Gs(_,m,0,1).render(_._time,!0,!0),d=1}c&&c.apply(_,f||[])}},s));return h?_.render(0):_},e.tweenFromTo=function(r,s,o){return this.tweenTo(s,Bn({startAt:{time:Gn(this,r)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),$h(this,Gn(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),$h(this,Gn(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Te)},e.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=De(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return Qr(this)},e.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Qr(this)},e.totalDuration=function(r){var s=0,o=this,a=o._last,l=qn,u,c,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,_i(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=De(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;Gs(o,o===Le&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(r){if(Le._ts&&(Vm(Le,ll(r,Le)),zm=Ln.frame),Ln.frame>=Wh){Wh+=On.autoSleep||120;var s=Le._first;if((!s||!s._ts)&&On.autoSleep&&Ln._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Ln.sleep()}}},t})(Wo);Bn(pn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Ax=function(t,e,i,r,s,o,a){var l=new bn(this._pt,t,e,0,1,m_,null,s),u=0,c=0,f,h,d,_,g,m,p,M;for(l.b=i,l.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=Ho(r)),o&&(M=[i,r],o(M,t,e),i=M[0],r=M[1]),h=i.match(Yl)||[];f=Yl.exec(r);)_=f[0],g=r.substring(u,f.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==h[c++]&&(m=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:g||c===1?g:",",s:m,c:_.charAt(1)==="="?Is(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},u=Yl.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(Nm.test(r)||p)&&(l.e=0),this._pt=l,l},Af=function(t,e,i,r,s,o,a,l,u,c){Ne(r)&&(r=r(s||0,t,o));var f=t[e],h=i!=="get"?i:Ne(f)?u?t[e.indexOf("set")||!Ne(t["get"+e.substr(3)])?e:"get"+e.substr(3)](u):t[e]():f,d=Ne(f)?u?Dx:d_:Cf,_;if(Ke(r)&&(~r.indexOf("random(")&&(r=Ho(r)),r.charAt(1)==="="&&(_=Is(h,r)+(sn(h)||0),(_||_===0)&&(r=_))),!c||h!==r||iu)return!isNaN(h*r)&&r!==""?(_=new bn(this._pt,t,e,+h||0,r-(h||0),typeof f=="boolean"?Ix:p_,0,d),u&&(_.fp=u),a&&_.modifier(a,this,t),this._pt=_):(!f&&!(e in t)&&Mf(e,r),Ax.call(this,t,e,h,r,d,l||On.stringFilter,u))},wx=function(t,e,i,r,s){if(Ne(t)&&(t=Ro(t,s,e,i,r)),!Mi(t)||t.style&&t.nodeType||an(t)||Im(t))return Ke(t)?Ro(t,s,e,i,r):t;var o={},a;for(a in t)o[a]=Ro(t[a],s,e,i,r);return o},u_=function(t,e,i,r,s,o){var a,l,u,c;if(Dn[t]&&(a=new Dn[t]).init(s,a.rawVars?e[t]:wx(e[t],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new bn(i._pt,s,t,0,1,a.render,a,0,a.priority),i!==ws))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},ar,iu,wf=function n(t,e,i){var r=t.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,f=r.yoyoEase,h=r.keyframes,d=r.autoRevert,_=t._dur,g=t._startAt,m=t._targets,p=t.parent,M=p&&p.data==="nested"?p.vars.targets:m,y=t._overwrite==="auto"&&!gf,v=t.timeline,w,b,R,P,x,S,L,I,F,X,Y,W,$;if(v&&(!h||!s)&&(s="none"),t._ease=ts(s,ks.ease),t._yEase=f?o_(ts(f===!0?s:f,ks.ease)):0,f&&t._yoyo&&!t._repeat&&(f=t._yEase,t._yEase=t._ease,t._ease=f),t._from=!v&&!!r.runBackwards,!v||h&&!r.stagger){if(I=m[0]?Jr(m[0]).harness:0,W=I&&r[I.prop],w=al(r,Sf),g&&(g._zTime<0&&g.progress(1),e<0&&c&&a&&!d?g.render(-1,!0):g.revert(c&&_?Va:ex),g._lazy=0),o){if(gr(t._startAt=Ve.set(m,Bn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&En(l),startAt:null,delay:0,onUpdate:u&&function(){return Un(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Je||!a&&!d)&&t._startAt.revert(Va),a&&_&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(c&&_&&!g){if(e&&(a=!1),R=Bn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&En(l),immediateRender:a,stagger:0,parent:p},w),W&&(R[I.prop]=W),gr(t._startAt=Ve.set(m,R)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Je?t._startAt.revert(Va):t._startAt.render(-1,!0)),t._zTime=e,!a)n(t._startAt,Te,Te);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&En(l)||l&&!_,b=0;b<m.length;b++){if(x=m[b],L=x._gsap||Tf(m)[b]._gsap,t._ptLookup[b]=X={},Zc[L.id]&&fr.length&&ol(),Y=M===m?b:M.indexOf(x),I&&(F=new I).init(x,W||w,t,Y,M)!==!1&&(t._pt=P=new bn(t._pt,x,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(V){X[V]=P}),F.priority&&(S=1)),!I||W)for(R in w)Dn[R]&&(F=u_(R,w,t,Y,x,M))?F.priority&&(S=1):X[R]=P=Af.call(t,x,R,"get",w[R],Y,M,0,r.stringFilter);t._op&&t._op[b]&&t.kill(x,t._op[b]),y&&t._pt&&(ar=t,Le.killTweensOf(x,X,t.globalTime(e)),$=!t.parent,ar=0),t._pt&&l&&(Zc[L.id]=1)}S&&__(t),t._onInit&&t._onInit(t)}t._onUpdate=u,t._initted=(!t._op||t._pt)&&!$,h&&e<=0&&v.render(qn,!0,!0)},Cx=function(t,e,i,r,s,o,a,l){var u=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,f,h,d;if(!u)for(u=t._ptCache[e]=[],h=t._ptLookup,d=t._targets.length;d--;){if(c=h[d][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return iu=1,t.vars[e]="+=0",wf(t,a),iu=0,l?ko(e+" not eligible for reset"):1;u.push(c)}for(d=u.length;d--;)f=u[d],c=f._pt||f,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,f.e&&(f.e=Fe(i)+sn(f.e)),f.b&&(f.b=c.s+sn(f.b))},Rx=function(t,e){var i=t[0]?Jr(t[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return e;s=Vs({},e);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Px=function(t,e,i,r){var s=e.ease||r||"power1.inOut",o,a;if(an(e))a=i[t]||(i[t]=[]),e.forEach(function(l,u){return a.push({t:u/(e.length-1)*100,v:l,e:s})});else for(o in e)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Ro=function(t,e,i,r,s){return Ne(t)?t.call(e,i,r,s):Ke(t)&&~t.indexOf("random(")?Ho(t):t},f_=Ef+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",h_={};Tn(f_+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return h_[n]=1});var Ve=(function(n){Dm(t,n);function t(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:wo(r))||this;var l=a.vars,u=l.duration,c=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,M=r.parent||Le,y=(an(i)||Im(i)?Gi(i[0]):"length"in r)?[i]:Yn(i),v,w,b,R,P,x,S,L;if(a._targets=y.length?Tf(y):ko("GSAP target "+i+" not found. https://gsap.com",!On.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||h||ua(u)||ua(c)){if(r=a.vars,v=a.timeline=new pn({data:"nested",defaults:g||{},targets:M&&M.data==="nested"?M.vars.targets:y}),v.kill(),v.parent=v._dp=Li(a),v._start=0,h||ua(u)||ua(c)){if(R=y.length,S=h&&jm(h),Mi(h))for(P in h)~f_.indexOf(P)&&(L||(L={}),L[P]=h[P]);for(w=0;w<R;w++)b=al(r,h_),b.stagger=0,p&&(b.yoyoEase=p),L&&Vs(b,L),x=y[w],b.duration=+Ro(u,Li(a),w,x,y),b.delay=(+Ro(c,Li(a),w,x,y)||0)-a._delay,!h&&R===1&&b.delay&&(a._delay=c=b.delay,a._start+=c,b.delay=0),v.to(x,b,S?S(w,x,y):0),v._ease=se.none;v.duration()?u=c=0:a.timeline=0}else if(_){wo(Bn(v.vars.defaults,{ease:"none"})),v._ease=ts(_.ease||r.ease||"none");var I=0,F,X,Y;if(an(_))_.forEach(function(W){return v.to(y,W,">")}),v.duration();else{b={};for(P in _)P==="ease"||P==="easeEach"||Px(P,_[P],b,_.easeEach);for(P in b)for(F=b[P].sort(function(W,$){return W.t-$.t}),I=0,w=0;w<F.length;w++)X=F[w],Y={ease:X.e,duration:(X.t-(w?F[w-1].t:0))/100*u},Y[P]=X.v,v.to(y,Y,I),I+=Y.duration;v.duration()<u&&v.to({},{duration:u-v.duration()})}}u||a.duration(u=v.duration())}else a.timeline=0;return d===!0&&!gf&&(ar=Li(a),Le.killTweensOf(y),ar=0),_i(M,Li(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!u&&!_&&a._start===De(M._time)&&En(f)&&ax(Li(a))&&M.data!=="nested")&&(a._tTime=-Te,a.render(Math.max(0,-c)||0)),m&&qm(Li(a),m),a}var e=t.prototype;return e.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,f=r>l-Te&&!c?l:r<Te?0:r,h,d,_,g,m,p,M,y,v;if(!u)cx(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(h=f,y=this.timeline,this._repeat){if(g=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(g*100+r,s,o);if(h=De(f%g),f===l?(_=this._repeat,h=u):(m=De(f/g),_=~~m,_&&_===m?(h=u,_--):h>u&&(h=u)),p=this._yoyo&&_&1,p&&(v=this._yEase,h=u-h),m=Hs(this._tTime,g),h===a&&!o&&this._initted&&_===m)return this._tTime=f,this;_!==m&&(y&&this._yEase&&a_(y,p),this.vars.repeatRefresh&&!p&&!this._lock&&h!==g&&this._initted&&(this._lock=o=1,this.render(De(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Ym(this,c?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(v||this._ease)(h/u),this._from&&(this.ratio=M=1-M),!a&&f&&!s&&!m&&(Un(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;y&&y.render(r<0?r:y._dur*y._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&Jc(this,r,s,o),Un(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&Un(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(c&&!this._onUpdate&&Jc(this,r,!0,!0),(r||!u)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&gr(this,1),!s&&!(c&&!a)&&(f||a||p)&&(Un(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},e.resetTo=function(r,s,o,a,l){Go||Ln.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||wf(this,u),c=this._ease(u/this._dur),Cx(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(Cl(this,0),this.parent||Wm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?_o(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Je),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,ar&&ar.vars.overwrite!==!0)._first||_o(this),this.parent&&o!==this.timeline.totalDuration()&&Gs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Yn(r):a,u=this._ptLookup,c=this._pt,f,h,d,_,g,m,p;if((!s||s==="all")&&sx(a,l))return s==="all"&&(this._pt=0),_o(this);for(f=this._op=this._op||[],s!=="all"&&(Ke(s)&&(g={},Tn(s,function(M){return g[M]=1}),s=g),s=Rx(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){h=u[p],s==="all"?(f[p]=s,_=h,d={}):(d=f[p]=f[p]||{},_=s);for(g in _)m=h&&h[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Al(this,m,"_pt"),delete h[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&c&&_o(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return Co(1,arguments)},t.delayedCall=function(r,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(r,s,o){return Co(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,o){return Le.killTweensOf(r,s,o)},t})(Wo);Bn(Ve.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Tn("staggerTo,staggerFrom,staggerFromTo",function(n){Ve[n]=function(){var t=new pn,e=tu.call(arguments,0);return e.splice(n==="staggerFromTo"?5:4,0,0),t[n].apply(t,e)}});var Cf=function(t,e,i){return t[e]=i},d_=function(t,e,i){return t[e](i)},Dx=function(t,e,i,r){return t[e](r.fp,i)},Lx=function(t,e,i){return t.setAttribute(e,i)},Rf=function(t,e){return Ne(t[e])?d_:vf(t[e])&&t.setAttribute?Lx:Cf},p_=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Ix=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},m_=function(t,e){var i=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+r,i=i._next;r+=e.c}e.set(e.t,e.p,r,e)},Pf=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},Ux=function(t,e,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(t,e,i),s=o},Nx=function(t){for(var e=this._pt,i,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?Al(this,e,"_pt"):e.dep||(i=1),e=r;return!i},Ox=function(t,e,i,r){r.mSet(t,e,r.m.call(r.tween,i,r.mt),r)},__=function(t){for(var e=t._pt,i,r,s,o;e;){for(i=e._next,r=s;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:o)?e._prev._next=e:s=e,(e._next=r)?r._prev=e:o=e,e=i}t._pt=s},bn=(function(){function n(e,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||p_,this.d=l||this,this.set=u||Cf,this.pr=c||0,this._next=e,e&&(e._prev=this)}var t=n.prototype;return t.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=Ox,this.m=i,this.mt=s,this.tween=r},n})();Tn(Ef+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Sf[n]=1});Fn.TweenMax=Fn.TweenLite=Ve;Fn.TimelineLite=Fn.TimelineMax=pn;Le=new pn({sortChildren:!1,defaults:ks,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});On.stringFilter=s_;var es=[],Ga={},Fx=[],jh=0,Bx=0,Jl=function(t){return(Ga[t]||Fx).map(function(e){return e()})},ru=function(){var t=Date.now(),e=[];t-jh>2&&(Jl("matchMediaInit"),es.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=di.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&e.push(i))}),Jl("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),jh=t,Jl("matchMedia"))},g_=(function(){function n(e,i){this.selector=i&&eu(i),this.data=[],this._r=[],this.isReverted=!1,this.id=Bx++,e&&this.add(e)}var t=n.prototype;return t.add=function(i,r,s){Ne(i)&&(s=r,r=i,i=Ne);var o=this,a=function(){var u=Pe,c=o.selector,f;return u&&u!==o&&u.data.push(o),s&&(o.selector=eu(s)),Pe=o,f=r.apply(o,arguments),Ne(f)&&o._r.push(f),Pe=u,o.selector=c,o.isReverted=!1,f};return o.last=a,i===Ne?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},t.ignore=function(i){var r=Pe;Pe=null,i(this),Pe=r},t.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Ve&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,r){var s=this;if(i?(function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,f){return f.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof pn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Ve)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=es.length;o--;)es[o].id===this.id&&es.splice(o,1)},t.revert=function(i){this.kill(i||{})},n})(),zx=(function(){function n(e){this.contexts=[],this.scope=e,Pe&&Pe.data.push(this)}var t=n.prototype;return t.add=function(i,r,s){Mi(i)||(i={matches:i});var o=new g_(0,s||this.scope),a=o.conditions={},l,u,c;Pe&&!o.selector&&(o.selector=Pe.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=di.matchMedia(i[u]),l&&(es.indexOf(o)<0&&es.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(ru):l.addEventListener("change",ru)));return c&&r(o,function(f){return o.add(null,f)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n})(),cl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(r){return n_(r)})},timeline:function(t){return new pn(t)},getTweensOf:function(t,e){return Le.getTweensOf(t,e)},getProperty:function(t,e,i,r){Ke(t)&&(t=Yn(t)[0]);var s=Jr(t||{}).get,o=i?Gm:Hm;return i==="native"&&(i=""),t&&(e?o((Dn[e]&&Dn[e].get||s)(t,e,i,r)):function(a,l,u){return o((Dn[a]&&Dn[a].get||s)(t,a,l,u))})},quickSetter:function(t,e,i){if(t=Yn(t),t.length>1){var r=t.map(function(c){return wn.quickSetter(c,e,i)}),s=r.length;return function(c){for(var f=s;f--;)r[f](c)}}t=t[0]||{};var o=Dn[e],a=Jr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,u=o?function(c){var f=new o;ws._pt=0,f.init(t,i?c+i:c,ws,0,[t]),f.render(1,f),ws._pt&&Pf(1,ws)}:a.set(t,l);return o?u:function(c){return u(t,l,i?c+i:c,a,1)}},quickTo:function(t,e,i){var r,s=wn.to(t,Bn((r={},r[e]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(e,l,u,c)};return o.tween=s,o},isTweening:function(t){return Le.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ts(t.ease,ks.ease)),Xh(ks,t||{})},config:function(t){return Xh(On,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,r=t.plugins,s=t.defaults,o=t.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Dn[a]&&!Fn[a]&&ko(e+" effect requires "+a+" plugin.")}),$l[e]=function(a,l,u){return i(Yn(a),Bn(l||{},s),u)},o&&(pn.prototype[e]=function(a,l,u){return this.add($l[e](a,Mi(l)?l:(u=l)&&{},this),u)})},registerEase:function(t,e){se[t]=ts(e)},parseEase:function(t,e){return arguments.length?ts(t,e):se},getById:function(t){return Le.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new pn(t),r,s;for(i.smoothChildTiming=En(t.smoothChildTiming),Le.remove(i),i._dp=0,i._time=i._tTime=Le._time,r=Le._first;r;)s=r._next,(e||!(!r._dur&&r instanceof Ve&&r.vars.onComplete===r._targets[0]))&&_i(i,r,r._start-r._delay),r=s;return _i(Le,i,0),i},context:function(t,e){return t?new g_(t,e):Pe},matchMedia:function(t){return new zx(t)},matchMediaRefresh:function(){return es.forEach(function(t){var e=t.conditions,i,r;for(r in e)e[r]&&(e[r]=!1,i=1);i&&t.revert()})||ru()},addEventListener:function(t,e){var i=Ga[t]||(Ga[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=Ga[t],r=i&&i.indexOf(e);r>=0&&i.splice(r,1)},utils:{wrap:gx,wrapYoyo:vx,distribute:jm,random:Jm,snap:Zm,normalize:_x,getUnit:sn,clamp:hx,splitColor:i_,toArray:Yn,selector:eu,mapRange:t_,pipe:px,unitize:mx,interpolate:xx,shuffle:Km},install:Fm,effects:$l,ticker:Ln,updateRoot:pn.updateRoot,plugins:Dn,globalTimeline:Le,core:{PropTween:bn,globals:Bm,Tween:Ve,Timeline:pn,Animation:Wo,getCache:Jr,_removeLinkedListItem:Al,reverting:function(){return Je},context:function(t){return t&&Pe&&(Pe.data.push(t),t._ctx=Pe),Pe},suppressOverwrites:function(t){return gf=t}}};Tn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return cl[n]=Ve[n]});Ln.add(pn.updateRoot);ws=cl.to({},{duration:0});var kx=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},Vx=function(t,e){var i=t._targets,r,s,o;for(r in e)for(s=i.length;s--;)o=t._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=kx(o,r)),o&&o.modifier&&o.modifier(e[r],t,i[s],r))},Ql=function(t,e){return{name:t,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(Ke(s)&&(l={},Tn(s,function(c){return l[c]=1}),s=l),e){l={};for(u in s)l[u]=e(s[u]);s=l}Vx(a,s)}}}},wn=cl.registerPlugin({name:"attr",init:function(t,e,i,r,s){var o,a,l;this.tween=i;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var i=e._pt;i;)Je?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},Ql("roundProps",nu),Ql("modifiers"),Ql("snap",Zm))||cl;Ve.version=pn.version=wn.version="3.14.2";Om=1;xf()&&Ws();se.Power0;se.Power1;se.Power2;se.Power3;se.Power4;se.Linear;se.Quad;se.Cubic;se.Quart;se.Quint;se.Strong;se.Elastic;se.Back;se.SteppedEase;se.Bounce;se.Sine;se.Expo;se.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Zh,lr,Us,Df,Xr,Jh,Lf,Hx=function(){return typeof window<"u"},Wi={},Br=180/Math.PI,Ns=Math.PI/180,ls=Math.atan2,Qh=1e8,If=/([A-Z])/g,Gx=/(left|right|width|margin|padding|x)/i,Wx=/[\s,\(]\S/,gi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},su=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Xx=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},qx=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Yx=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},$x=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},v_=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},x_=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Kx=function(t,e,i){return t.style[e]=i},jx=function(t,e,i){return t.style.setProperty(e,i)},Zx=function(t,e,i){return t._gsap[e]=i},Jx=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},Qx=function(t,e,i,r,s){var o=t._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},ty=function(t,e,i,r,s){var o=t._gsap;o[e]=i,o.renderTransform(s,o)},Ie="transform",An=Ie+"Origin",ey=function n(t,e){var i=this,r=this.target,s=r.style,o=r._gsap;if(t in Wi&&s){if(this.tfm=this.tfm||{},t!=="transform")t=gi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return i.tfm[a]=Ui(r,a)}):this.tfm[t]=o.x?o[t]:Ui(r,t),t===An&&(this.tfm.zOrigin=o.zOrigin);else return gi.transform.split(",").forEach(function(a){return n.call(i,a,e)});if(this.props.indexOf(Ie)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(An,e,"")),t=Ie}(s||e)&&this.props.push(t,e,s[t])},y_=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},ny=function(){var t=this.props,e=this.target,i=e.style,r=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?i[t[s]]=t[s+2]:i.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(If,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Lf(),(!s||!s.isStart)&&!i[Ie]&&(y_(i),r.zOrigin&&i[An]&&(i[An]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},M_=function(t,e){var i={target:t,props:[],revert:ny,save:ey};return t._gsap||wn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(r){return i.save(r)}),i},S_,ou=function(t,e){var i=lr.createElementNS?lr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):lr.createElement(t);return i&&i.style?i:lr.createElement(t)},Nn=function n(t,e,i){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(If,"-$1").toLowerCase())||r.getPropertyValue(e)||!i&&n(t,Xs(e)||e,1)||""},td="O,Moz,ms,Ms,Webkit".split(","),Xs=function(t,e,i){var r=e||Xr,s=r.style,o=5;if(t in s&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(td[o]+t in s););return o<0?null:(o===3?"ms":o>=0?td[o]:"")+t},au=function(){Hx()&&window.document&&(Zh=window,lr=Zh.document,Us=lr.documentElement,Xr=ou("div")||{style:{}},ou("div"),Ie=Xs(Ie),An=Ie+"Origin",Xr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",S_=!!Xs("perspective"),Lf=wn.core.reverting,Df=1)},ed=function(t){var e=t.ownerSVGElement,i=ou("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=t.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Us.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Us.removeChild(i),s},nd=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},E_=function(t){var e,i;try{e=t.getBBox()}catch{e=ed(t),i=1}return e&&(e.width||e.height)||i||(e=ed(t)),e&&!e.width&&!e.x&&!e.y?{x:+nd(t,["x","cx","x1"])||0,y:+nd(t,["y","cy","y1"])||0,width:0,height:0}:e},T_=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&E_(t))},vr=function(t,e){if(e){var i=t.style,r;e in Wi&&e!==An&&(e=Ie),i.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(r==="--"?e:e.replace(If,"-$1").toLowerCase())):i.removeAttribute(e)}},cr=function(t,e,i,r,s,o){var a=new bn(t._pt,e,i,0,1,o?x_:v_);return t._pt=a,a.b=r,a.e=s,t._props.push(i),a},id={deg:1,rad:1,turn:1},iy={grid:1,flex:1},xr=function n(t,e,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=Xr.style,l=Gx.test(e),u=t.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",d=r==="%",_,g,m,p;if(r===o||!s||id[r]||id[o])return s;if(o!=="px"&&!h&&(s=n(t,e,i,"px")),p=t.getCTM&&T_(t),(d||o==="%")&&(Wi[e]||~e.indexOf("adius")))return _=p?t.getBBox()[l?"width":"height"]:t[c],Fe(d?s/_*f:s/100*_);if(a[l?"width":"height"]=f+(h?o:r),g=r!=="rem"&&~e.indexOf("adius")||r==="em"&&t.appendChild&&!u?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===lr||!g.appendChild)&&(g=lr.body),m=g._gsap,m&&d&&m.width&&l&&m.time===Ln.time&&!m.uncache)return Fe(s/m.width*f);if(d&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=f+r,_=t[c],M?t.style[e]=M:vr(t,e)}else(d||o==="%")&&!iy[Nn(g,"display")]&&(a.position=Nn(t,"position")),g===t&&(a.position="static"),g.appendChild(Xr),_=Xr[c],g.removeChild(Xr),a.position="absolute";return l&&d&&(m=Jr(g),m.time=Ln.time,m.width=g[c]),Fe(h?_*s/f:_&&s?f/_*s:0)},Ui=function(t,e,i,r){var s;return Df||au(),e in gi&&e!=="transform"&&(e=gi[e],~e.indexOf(",")&&(e=e.split(",")[0])),Wi[e]&&e!=="transform"?(s=qo(t,r),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:fl(Nn(t,An))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=ul[e]&&ul[e](t,e,i)||Nn(t,e)||km(t,e)||(e==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?xr(t,e,s,i)+i:s},ry=function(t,e,i,r){if(!i||i==="none"){var s=Xs(e,t,1),o=s&&Nn(t,s,1);o&&o!==i?(e=s,i=o):e==="borderColor"&&(i=Nn(t,"borderTopColor"))}var a=new bn(this._pt,t.style,e,0,1,m_),l=0,u=0,c,f,h,d,_,g,m,p,M,y,v,w;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Nn(t,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=t.style[e],t.style[e]=r,r=Nn(t,e)||r,g?t.style[e]=g:vr(t,e)),c=[i,r],s_(c),i=c[0],r=c[1],h=i.match(As)||[],w=r.match(As)||[],w.length){for(;f=As.exec(r);)m=f[0],M=r.substring(l,f.index),_?_=(_+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(_=1),m!==(g=h[u++]||"")&&(d=parseFloat(g)||0,v=g.substr((d+"").length),m.charAt(1)==="="&&(m=Is(d,m)+v),p=parseFloat(m),y=m.substr((p+"").length),l=As.lastIndex-y.length,y||(y=y||On.units[e]||v,l===r.length&&(r+=y,a.e+=y)),v!==y&&(d=xr(t,e,g,y)||0),a._pt={_next:a._pt,p:M||u===1?M:",",s:d,c:p-d,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=e==="display"&&r==="none"?x_:v_;return Nm.test(r)&&(a.e=0),this._pt=a,a},rd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},sy=function(t){var e=t.split(" "),i=e[0],r=e[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(t=i,i=r,r=t),e[0]=rd[i]||i,e[1]=rd[r]||r,e.join(" ")},oy=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,r=i.style,s=e.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],Wi[a]&&(l=1,a=a==="transformOrigin"?An:Ie),vr(i,a);l&&(vr(i,Ie),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",qo(i,1),o.uncache=1,y_(r)))}},ul={clearProps:function(t,e,i,r,s){if(s.data!=="isFromStart"){var o=t._pt=new bn(t._pt,e,i,0,0,oy);return o.u=r,o.pr=-10,o.tween=s,t._props.push(i),1}}},Xo=[1,0,0,1,0,0],b_={},A_=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},sd=function(t){var e=Nn(t,Ie);return A_(e)?Xo:e.substr(7).match(Um).map(Fe)},Uf=function(t,e){var i=t._gsap||Jr(t),r=t.style,s=sd(t),o,a,l,u;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Xo:s):(s===Xo&&!t.offsetParent&&t!==Us&&!i.svg&&(l=r.display,r.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(u=1,a=t.nextElementSibling,Us.appendChild(t)),s=sd(t),l?r.display=l:vr(t,"display"),u&&(a?o.insertBefore(t,a):o?o.appendChild(t):Us.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},lu=function(t,e,i,r,s,o){var a=t._gsap,l=s||Uf(t,!0),u=a.xOrigin||0,c=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],_=l[1],g=l[2],m=l[3],p=l[4],M=l[5],y=e.split(" "),v=parseFloat(y[0])||0,w=parseFloat(y[1])||0,b,R,P,x;i?l!==Xo&&(R=d*m-_*g)&&(P=v*(m/R)+w*(-g/R)+(g*M-m*p)/R,x=v*(-_/R)+w*(d/R)-(d*M-_*p)/R,v=P,w=x):(b=E_(t),v=b.x+(~y[0].indexOf("%")?v/100*b.width:v),w=b.y+(~(y[1]||y[0]).indexOf("%")?w/100*b.height:w)),r||r!==!1&&a.smooth?(p=v-u,M=w-c,a.xOffset=f+(p*d+M*g)-p,a.yOffset=h+(p*_+M*m)-M):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=w,a.smooth=!!r,a.origin=e,a.originIsAbsolute=!!i,t.style[An]="0px 0px",o&&(cr(o,a,"xOrigin",u,v),cr(o,a,"yOrigin",c,w),cr(o,a,"xOffset",f,a.xOffset),cr(o,a,"yOffset",h,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+w)},qo=function(t,e){var i=t._gsap||new c_(t);if("x"in i&&!e&&!i.uncache)return i;var r=t.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(t),u=Nn(t,An)||"0",c,f,h,d,_,g,m,p,M,y,v,w,b,R,P,x,S,L,I,F,X,Y,W,$,V,vt,gt,St,Lt,Qt,it,_t;return c=f=h=g=m=p=M=y=v=0,d=_=1,i.svg=!!(t.getCTM&&T_(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Ie]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ie]!=="none"?l[Ie]:"")),r.scale=r.rotate=r.translate="none"),R=Uf(t,i.svg),i.svg&&(i.uncache?(V=t.getBBox(),u=i.xOrigin-V.x+"px "+(i.yOrigin-V.y)+"px",$=""):$=!e&&t.getAttribute("data-svg-origin"),lu(t,$||u,!!$||i.originIsAbsolute,i.smooth!==!1,R)),w=i.xOrigin||0,b=i.yOrigin||0,R!==Xo&&(L=R[0],I=R[1],F=R[2],X=R[3],c=Y=R[4],f=W=R[5],R.length===6?(d=Math.sqrt(L*L+I*I),_=Math.sqrt(X*X+F*F),g=L||I?ls(I,L)*Br:0,M=F||X?ls(F,X)*Br+g:0,M&&(_*=Math.abs(Math.cos(M*Ns))),i.svg&&(c-=w-(w*L+b*F),f-=b-(w*I+b*X))):(_t=R[6],Qt=R[7],gt=R[8],St=R[9],Lt=R[10],it=R[11],c=R[12],f=R[13],h=R[14],P=ls(_t,Lt),m=P*Br,P&&(x=Math.cos(-P),S=Math.sin(-P),$=Y*x+gt*S,V=W*x+St*S,vt=_t*x+Lt*S,gt=Y*-S+gt*x,St=W*-S+St*x,Lt=_t*-S+Lt*x,it=Qt*-S+it*x,Y=$,W=V,_t=vt),P=ls(-F,Lt),p=P*Br,P&&(x=Math.cos(-P),S=Math.sin(-P),$=L*x-gt*S,V=I*x-St*S,vt=F*x-Lt*S,it=X*S+it*x,L=$,I=V,F=vt),P=ls(I,L),g=P*Br,P&&(x=Math.cos(P),S=Math.sin(P),$=L*x+I*S,V=Y*x+W*S,I=I*x-L*S,W=W*x-Y*S,L=$,Y=V),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),d=Fe(Math.sqrt(L*L+I*I+F*F)),_=Fe(Math.sqrt(W*W+_t*_t)),P=ls(Y,W),M=Math.abs(P)>2e-4?P*Br:0,v=it?1/(it<0?-it:it):0),i.svg&&($=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!A_(Nn(t,Ie)),$&&t.setAttribute("transform",$))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(d*=-1,M+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,M+=M<=0?180:-180)),e=e||i.uncache,i.x=c-((i.xPercent=c&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-c)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=Fe(d),i.scaleY=Fe(_),i.rotation=Fe(g)+a,i.rotationX=Fe(m)+a,i.rotationY=Fe(p)+a,i.skewX=M+a,i.skewY=y+a,i.transformPerspective=v+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!e&&i.zOrigin||0)&&(r[An]=fl(u)),i.xOffset=i.yOffset=0,i.force3D=On.force3D,i.renderTransform=i.svg?ly:S_?w_:ay,i.uncache=0,i},fl=function(t){return(t=t.split(" "))[0]+" "+t[1]},tc=function(t,e,i){var r=sn(e);return Fe(parseFloat(e)+parseFloat(xr(t,"x",i+"px",r)))+r},ay=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,w_(t,e)},Cr="0deg",ao="0px",Rr=") ",w_=function(t,e){var i=e||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,f=i.rotationX,h=i.skewX,d=i.skewY,_=i.scaleX,g=i.scaleY,m=i.transformPerspective,p=i.force3D,M=i.target,y=i.zOrigin,v="",w=p==="auto"&&t&&t!==1||p===!0;if(y&&(f!==Cr||c!==Cr)){var b=parseFloat(c)*Ns,R=Math.sin(b),P=Math.cos(b),x;b=parseFloat(f)*Ns,x=Math.cos(b),o=tc(M,o,R*x*-y),a=tc(M,a,-Math.sin(b)*-y),l=tc(M,l,P*x*-y+y)}m!==ao&&(v+="perspective("+m+Rr),(r||s)&&(v+="translate("+r+"%, "+s+"%) "),(w||o!==ao||a!==ao||l!==ao)&&(v+=l!==ao||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Rr),u!==Cr&&(v+="rotate("+u+Rr),c!==Cr&&(v+="rotateY("+c+Rr),f!==Cr&&(v+="rotateX("+f+Rr),(h!==Cr||d!==Cr)&&(v+="skew("+h+", "+d+Rr),(_!==1||g!==1)&&(v+="scale("+_+", "+g+Rr),M.style[Ie]=v||"translate(0, 0)"},ly=function(t,e){var i=e||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,f=i.scaleX,h=i.scaleY,d=i.target,_=i.xOrigin,g=i.yOrigin,m=i.xOffset,p=i.yOffset,M=i.forceCSS,y=parseFloat(o),v=parseFloat(a),w,b,R,P,x;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Ns,u*=Ns,w=Math.cos(l)*f,b=Math.sin(l)*f,R=Math.sin(l-u)*-h,P=Math.cos(l-u)*h,u&&(c*=Ns,x=Math.tan(u-c),x=Math.sqrt(1+x*x),R*=x,P*=x,c&&(x=Math.tan(c),x=Math.sqrt(1+x*x),w*=x,b*=x)),w=Fe(w),b=Fe(b),R=Fe(R),P=Fe(P)):(w=f,P=h,b=R=0),(y&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(y=xr(d,"x",o,"px"),v=xr(d,"y",a,"px")),(_||g||m||p)&&(y=Fe(y+_-(_*w+g*R)+m),v=Fe(v+g-(_*b+g*P)+p)),(r||s)&&(x=d.getBBox(),y=Fe(y+r/100*x.width),v=Fe(v+s/100*x.height)),x="matrix("+w+","+b+","+R+","+P+","+y+","+v+")",d.setAttribute("transform",x),M&&(d.style[Ie]=x)},cy=function(t,e,i,r,s){var o=360,a=Ke(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Br:1),u=l-r,c=r+u+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),f==="cw"&&u<0?u=(u+o*Qh)%o-~~(u/o)*o:f==="ccw"&&u>0&&(u=(u-o*Qh)%o-~~(u/o)*o)),t._pt=h=new bn(t._pt,e,i,r,u,Xx),h.e=c,h.u="deg",t._props.push(i),h},od=function(t,e){for(var i in e)t[i]=e[i];return t},uy=function(t,e,i){var r=od({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,f,h,d,_;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[Ie]=e,a=qo(i,1),vr(i,Ie),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Ie],o[Ie]=e,a=qo(i,1),o[Ie]=u);for(l in Wi)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(d=sn(u),_=sn(c),f=d!==_?xr(i,l,u,_):parseFloat(u),h=parseFloat(c),t._pt=new bn(t._pt,a,l,f,h-f,su),t._pt.u=_||0,t._props.push(l));od(a,r)};Tn("padding,margin,Width,Radius",function(n,t){var e="Top",i="Right",r="Bottom",s="Left",o=(t<3?[e,i,r,s]:[e+s,e+i,r+i,r+s]).map(function(a){return t<2?n+a:"border"+a+n});ul[t>1?"border"+n:n]=function(a,l,u,c,f){var h,d;if(arguments.length<4)return h=o.map(function(_){return Ui(a,_,u)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(c+"").split(" "),d={},o.forEach(function(_,g){return d[_]=h[g]=h[g]||h[(g-1)/2|0]}),a.init(l,d,f)}});var C_={name:"css",register:au,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,r,s){var o=this._props,a=t.style,l=i.vars.startAt,u,c,f,h,d,_,g,m,p,M,y,v,w,b,R,P,x;Df||au(),this.styles=this.styles||M_(t),P=this.styles.props,this.tween=i;for(g in e)if(g!=="autoRound"&&(c=e[g],!(Dn[g]&&u_(g,e,i,r,t,s)))){if(d=typeof c,_=ul[g],d==="function"&&(c=c.call(i,r,t,s),d=typeof c),d==="string"&&~c.indexOf("random(")&&(c=Ho(c)),_)_(this,t,g,c,i)&&(R=1);else if(g.substr(0,2)==="--")u=(getComputedStyle(t).getPropertyValue(g)+"").trim(),c+="",hr.lastIndex=0,hr.test(u)||(m=sn(u),p=sn(c),p?m!==p&&(u=xr(t,g,u,p)+p):m&&(c+=m)),this.add(a,"setProperty",u,c,r,s,0,0,g),o.push(g),P.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(u=typeof l[g]=="function"?l[g].call(i,r,t,s):l[g],Ke(u)&&~u.indexOf("random(")&&(u=Ho(u)),sn(u+"")||u==="auto"||(u+=On.units[g]||sn(Ui(t,g))||""),(u+"").charAt(1)==="="&&(u=Ui(t,g))):u=Ui(t,g),h=parseFloat(u),M=d==="string"&&c.charAt(1)==="="&&c.substr(0,2),M&&(c=c.substr(2)),f=parseFloat(c),g in gi&&(g==="autoAlpha"&&(h===1&&Ui(t,"visibility")==="hidden"&&f&&(h=0),P.push("visibility",0,a.visibility),cr(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=gi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),y=g in Wi,y){if(this.styles.save(g),x=c,d==="string"&&c.substring(0,6)==="var(--"){if(c=Nn(t,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var S=t.style.perspective;t.style.perspective=c,c=Nn(t,"perspective"),S?t.style.perspective=S:vr(t,"perspective")}f=parseFloat(c)}if(v||(w=t._gsap,w.renderTransform&&!e.parseTransform||qo(t,e.parseTransform),b=e.smoothOrigin!==!1&&w.smooth,v=this._pt=new bn(this._pt,a,Ie,0,1,w.renderTransform,w,0,-1),v.dep=1),g==="scale")this._pt=new bn(this._pt,w,"scaleY",w.scaleY,(M?Is(w.scaleY,M+f):f)-w.scaleY||0,su),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(An,0,a[An]),c=sy(c),w.svg?lu(t,c,0,b,0,this):(p=parseFloat(c.split(" ")[2])||0,p!==w.zOrigin&&cr(this,w,"zOrigin",w.zOrigin,p),cr(this,a,g,fl(u),fl(c)));continue}else if(g==="svgOrigin"){lu(t,c,1,b,0,this);continue}else if(g in b_){cy(this,w,g,h,M?Is(h,M+c):c);continue}else if(g==="smoothOrigin"){cr(this,w,"smooth",w.smooth,c);continue}else if(g==="force3D"){w[g]=c;continue}else if(g==="transform"){uy(this,c,t);continue}}else g in a||(g=Xs(g)||g);if(y||(f||f===0)&&(h||h===0)&&!Wx.test(c)&&g in a)m=(u+"").substr((h+"").length),f||(f=0),p=sn(c)||(g in On.units?On.units[g]:m),m!==p&&(h=xr(t,g,u,p)),this._pt=new bn(this._pt,y?w:a,g,h,(M?Is(h,M+f):f)-h,!y&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?$x:su),this._pt.u=p||0,y&&x!==c?(this._pt.b=u,this._pt.e=x,this._pt.r=Yx):m!==p&&p!=="%"&&(this._pt.b=u,this._pt.r=qx);else if(g in a)ry.call(this,t,g,u,M?M+c:c);else if(g in t)this.add(t,g,u||t[g],M?M+c:c,r,s);else if(g!=="parseTransform"){Mf(g,c);continue}y||(g in a?P.push(g,0,a[g]):typeof t[g]=="function"?P.push(g,2,t[g]()):P.push(g,1,u||t[g])),o.push(g)}}R&&__(this)},render:function(t,e){if(e.tween._time||!Lf())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:Ui,aliases:gi,getSetter:function(t,e,i){var r=gi[e];return r&&r.indexOf(",")<0&&(e=r),e in Wi&&e!==An&&(t._gsap.x||Ui(t,"x"))?i&&Jh===i?e==="scale"?Jx:Zx:(Jh=i||{})&&(e==="scale"?Qx:ty):t.style&&!vf(t.style[e])?Kx:~e.indexOf("-")?jx:Rf(t,e)},core:{_removeProperty:vr,_getMatrix:Uf}};wn.utils.checkPrefix=Xs;wn.core.getStyleSaver=M_;(function(n,t,e,i){var r=Tn(n+","+t+","+e,function(s){Wi[s]=1});Tn(t,function(s){On.units[s]="deg",b_[s]=1}),gi[r[13]]=n+","+t,Tn(i,function(s){var o=s.split(":");gi[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Tn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){On.units[n]="px"});wn.registerPlugin(C_);var ne=wn.registerPlugin(C_)||wn;ne.core.Tween;const Nf=(n,t)=>{const e=n.__vccOpts||n;for(const[i,r]of t)e[i]=r;return e},fy={class:"bubble-nav"},hy=["onClick"],dy={class:"bubble"},py={class:"bubble-icon"},my={class:"bubble-label"},_y={__name:"BubbleNav",props:{pages:{type:Array,required:!0},currentPage:{type:String,required:!0}},emits:["page-change"],setup(n){return(t,e)=>(ce(),fe("nav",fy,[e[1]||(e[1]=rt("svg",{class:"nav-curve",viewBox:"0 0 100 400",preserveAspectRatio:"none"},[rt("path",{d:"M 50 30 Q 80 100, 50 170 Q 20 240, 50 310",fill:"none",stroke:"rgba(255, 255, 255, 0.3)","stroke-width":"2",class:"curve-path"})],-1)),(ce(!0),fe($e,null,nr(n.pages,(i,r)=>(ce(),fe("div",{key:i.id,class:Ge(["bubble-item",{active:n.currentPage===i.id}]),style:Kr({top:i.position}),onClick:s=>t.$emit("page-change",i.id)},[rt("div",dy,[rt("div",py,Ht(i.icon),1),e[0]||(e[0]=rt("div",{class:"bubble-glow"},null,-1))]),rt("div",my,Ht(i.name),1)],14,hy))),128))]))}},gy=Nf(_y,[["__scopeId","data-v-b4b834a3"]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Of="171",vy=0,ad=1,xy=2,R_=1,yy=2,Pi=3,Xi=0,Qe=1,Ze=2,dr=0,Os=1,ld=2,cd=3,ud=4,My=5,Hr=100,Sy=101,Ey=102,Ty=103,by=104,Ay=200,wy=201,Cy=202,Ry=203,cu=204,uu=205,Py=206,Dy=207,Ly=208,Iy=209,Uy=210,Ny=211,Oy=212,Fy=213,By=214,fu=0,hu=1,du=2,qs=3,pu=4,mu=5,_u=6,gu=7,P_=0,zy=1,ky=2,pr=0,Vy=1,Hy=2,Gy=3,Wy=4,Xy=5,qy=6,Yy=7,D_=300,Ys=301,$s=302,vu=303,xu=304,Rl=306,yu=1e3,qr=1001,Mu=1002,oi=1003,$y=1004,fa=1005,vi=1006,ec=1007,Yr=1008,qi=1009,L_=1010,I_=1011,Yo=1012,Ff=1013,ns=1014,Fi=1015,ta=1016,Bf=1017,zf=1018,Ks=1020,U_=35902,N_=1021,O_=1022,ri=1023,F_=1024,B_=1025,Fs=1026,js=1027,z_=1028,kf=1029,k_=1030,Vf=1031,Hf=1033,Wa=33776,Xa=33777,qa=33778,Ya=33779,Su=35840,Eu=35841,Tu=35842,bu=35843,Au=36196,wu=37492,Cu=37496,Ru=37808,Pu=37809,Du=37810,Lu=37811,Iu=37812,Uu=37813,Nu=37814,Ou=37815,Fu=37816,Bu=37817,zu=37818,ku=37819,Vu=37820,Hu=37821,$a=36492,Gu=36494,Wu=36495,V_=36283,Xu=36284,qu=36285,Yu=36286,Ky=3200,jy=3201,H_=0,Zy=1,or="",Wn="srgb",Zs="srgb-linear",hl="linear",ye="srgb",cs=7680,fd=519,Jy=512,Qy=513,tM=514,G_=515,eM=516,nM=517,iM=518,rM=519,hd=35044,dd="300 es",Bi=2e3,dl=2001;class Qs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nc=Math.PI/180,$u=180/Math.PI;function ea(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]+"-"+en[t&255]+en[t>>8&255]+"-"+en[t>>16&15|64]+en[t>>24&255]+"-"+en[e&63|128]+en[e>>8&255]+"-"+en[e>>16&255]+en[e>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function re(n,t,e){return Math.max(t,Math.min(e,n))}function sM(n,t){return(n%t+t)%t}function ic(n,t,e){return(1-e)*n+e*t}function lo(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function vn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ft{constructor(t=0,e=0){Ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class te{constructor(t,e,i,r,s,o,a,l,u){te.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,u)}set(t,e,i,r,s,o,a,l,u){const c=this.elements;return c[0]=t,c[1]=r,c[2]=a,c[3]=e,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],d=i[5],_=i[8],g=r[0],m=r[3],p=r[6],M=r[1],y=r[4],v=r[7],w=r[2],b=r[5],R=r[8];return s[0]=o*g+a*M+l*w,s[3]=o*m+a*y+l*b,s[6]=o*p+a*v+l*R,s[1]=u*g+c*M+f*w,s[4]=u*m+c*y+f*b,s[7]=u*p+c*v+f*R,s[2]=h*g+d*M+_*w,s[5]=h*m+d*y+_*b,s[8]=h*p+d*v+_*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8];return e*o*c-e*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8],f=c*o-a*u,h=a*l-c*s,d=u*s-o*l,_=e*f+i*h+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=f*g,t[1]=(r*u-c*i)*g,t[2]=(a*i-r*o)*g,t[3]=h*g,t[4]=(c*e-r*l)*g,t[5]=(r*s-a*e)*g,t[6]=d*g,t[7]=(i*l-u*e)*g,t[8]=(o*e-i*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+t,-r*u,r*l,-r*(-u*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(rc.makeScale(t,e)),this}rotate(t){return this.premultiply(rc.makeRotation(-t)),this}translate(t,e){return this.premultiply(rc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const rc=new te;function W_(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function $o(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function oM(){const n=$o("canvas");return n.style.display="block",n}const pd={};function bs(n){n in pd||(pd[n]=!0,console.warn(n))}function aM(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function lM(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function cM(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const md=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_d=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uM(){const n={enabled:!0,workingColorSpace:Zs,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ye&&(r.r=zi(r.r),r.g=zi(r.g),r.b=zi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ye&&(r.r=Bs(r.r),r.g=Bs(r.g),r.b=Bs(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===or?hl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Zs]:{primaries:t,whitePoint:i,transfer:hl,toXYZ:md,fromXYZ:_d,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Wn},outputColorSpaceConfig:{drawingBufferColorSpace:Wn}},[Wn]:{primaries:t,whitePoint:i,transfer:ye,toXYZ:md,fromXYZ:_d,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Wn}}}),n}const ue=uM();function zi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Bs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let us;class fM{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{us===void 0&&(us=$o("canvas")),us.width=t.width,us.height=t.height;const i=us.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=us}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=$o("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=zi(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(zi(e[i]/255)*255):e[i]=zi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let hM=0;class X_{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=ea(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(sc(r[o].image)):s.push(sc(r[o]))}else s=sc(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function sc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?fM.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dM=0;class mn extends Qs{constructor(t=mn.DEFAULT_IMAGE,e=mn.DEFAULT_MAPPING,i=qr,r=qr,s=vi,o=Yr,a=ri,l=qi,u=mn.DEFAULT_ANISOTROPY,c=or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=ea(),this.name="",this.source=new X_(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==D_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yu:t.x=t.x-Math.floor(t.x);break;case qr:t.x=t.x<0?0:1;break;case Mu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yu:t.y=t.y-Math.floor(t.y);break;case qr:t.y=t.y<0?0:1;break;case Mu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=D_;mn.DEFAULT_ANISOTROPY=1;class Se{constructor(t=0,e=0,i=0,r=1){Se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,u=l[0],c=l[4],f=l[8],h=l[1],d=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+g)<.1&&Math.abs(_+m)<.1&&Math.abs(u+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(u+1)/2,v=(d+1)/2,w=(p+1)/2,b=(c+h)/4,R=(f+g)/4,P=(_+m)/4;return y>v&&y>w?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=b/i,s=R/i):v>w?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=b/r,s=P/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=R/s,r=P/s),this.set(i,r,s,e),this}let M=Math.sqrt((m-_)*(m-_)+(f-g)*(f-g)+(h-c)*(h-c));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(f-g)/M,this.z=(h-c)/M,this.w=Math.acos((u+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pM extends Qs{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new mn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new X_(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class is extends pM{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class q_ extends mn{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=oi,this.minFilter=oi,this.wrapR=qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class mM extends mn{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=oi,this.minFilter=oi,this.wrapR=qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class na{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[o+0],d=s[o+1],_=s[o+2],g=s[o+3];if(a===0){t[e+0]=l,t[e+1]=u,t[e+2]=c,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=d,t[e+2]=_,t[e+3]=g;return}if(f!==g||l!==h||u!==d||c!==_){let m=1-a;const p=l*h+u*d+c*_+f*g,M=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const w=Math.sqrt(y),b=Math.atan2(w,p*M);m=Math.sin(m*b)/w,a=Math.sin(a*b)/w}const v=a*M;if(l=l*m+h*v,u=u*m+d*v,c=c*m+_*v,f=f*m+g*v,m===1-a){const w=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=w,u*=w,c*=w,f*=w}}t[e]=l,t[e+1]=u,t[e+2]=c,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],h=s[o+1],d=s[o+2],_=s[o+3];return t[e]=a*_+c*f+l*d-u*h,t[e+1]=l*_+c*h+u*f-a*d,t[e+2]=u*_+c*d+a*h-l*f,t[e+3]=c*_-a*f-l*h-u*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),h=l(i/2),d=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*d*_,this._y=u*d*f-h*c*_,this._z=u*c*_+h*d*f,this._w=u*c*f-h*d*_;break;case"YXZ":this._x=h*c*f+u*d*_,this._y=u*d*f-h*c*_,this._z=u*c*_-h*d*f,this._w=u*c*f+h*d*_;break;case"ZXY":this._x=h*c*f-u*d*_,this._y=u*d*f+h*c*_,this._z=u*c*_+h*d*f,this._w=u*c*f-h*d*_;break;case"ZYX":this._x=h*c*f-u*d*_,this._y=u*d*f+h*c*_,this._z=u*c*_-h*d*f,this._w=u*c*f+h*d*_;break;case"YZX":this._x=h*c*f+u*d*_,this._y=u*d*f+h*c*_,this._z=u*c*_-h*d*f,this._w=u*c*f-h*d*_;break;case"XZY":this._x=h*c*f-u*d*_,this._y=u*d*f-h*c*_,this._z=u*c*_+h*d*f,this._w=u*c*f+h*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],u=e[2],c=e[6],f=e[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(c-l)*d,this._y=(s-u)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(c-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+u)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-u)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+c)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+u)/d,this._y=(l+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,u=e._z,c=e._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-e)*c)/u,h=Math.sin(e*c)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,i=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,u=2*(o*r-a*i),c=2*(a*e-s*r),f=2*(s*i-o*e);return this.x=e+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return oc.copy(this).projectOnVector(t),this.sub(oc)}reflect(t){return this.sub(oc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oc=new U,gd=new na;class ia{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Jn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Jn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Jn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Jn):Jn.fromBufferAttribute(s,o),Jn.applyMatrix4(t.matrixWorld),this.expandByPoint(Jn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ha.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ha.copy(i.boundingBox)),ha.applyMatrix4(t.matrixWorld),this.union(ha)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Jn),Jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(co),da.subVectors(this.max,co),fs.subVectors(t.a,co),hs.subVectors(t.b,co),ds.subVectors(t.c,co),ji.subVectors(hs,fs),Zi.subVectors(ds,hs),Pr.subVectors(fs,ds);let e=[0,-ji.z,ji.y,0,-Zi.z,Zi.y,0,-Pr.z,Pr.y,ji.z,0,-ji.x,Zi.z,0,-Zi.x,Pr.z,0,-Pr.x,-ji.y,ji.x,0,-Zi.y,Zi.x,0,-Pr.y,Pr.x,0];return!ac(e,fs,hs,ds,da)||(e=[1,0,0,0,1,0,0,0,1],!ac(e,fs,hs,ds,da))?!1:(pa.crossVectors(ji,Zi),e=[pa.x,pa.y,pa.z],ac(e,fs,hs,ds,da))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Jn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Jn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const bi=[new U,new U,new U,new U,new U,new U,new U,new U],Jn=new U,ha=new ia,fs=new U,hs=new U,ds=new U,ji=new U,Zi=new U,Pr=new U,co=new U,da=new U,pa=new U,Dr=new U;function ac(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Dr.fromArray(n,s);const a=r.x*Math.abs(Dr.x)+r.y*Math.abs(Dr.y)+r.z*Math.abs(Dr.z),l=t.dot(Dr),u=e.dot(Dr),c=i.dot(Dr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const _M=new ia,uo=new U,lc=new U;class Pl{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):_M.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;uo.subVectors(t,this.center);const e=uo.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(uo,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(lc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(uo.copy(t.center).add(lc)),this.expandByPoint(uo.copy(t.center).sub(lc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ai=new U,cc=new U,ma=new U,Ji=new U,uc=new U,_a=new U,fc=new U;class Gf{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ai.copy(this.origin).addScaledVector(this.direction,e),Ai.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){cc.copy(t).add(e).multiplyScalar(.5),ma.copy(e).sub(t).normalize(),Ji.copy(this.origin).sub(cc);const s=t.distanceTo(e)*.5,o=-this.direction.dot(ma),a=Ji.dot(this.direction),l=-Ji.dot(ma),u=Ji.lengthSq(),c=Math.abs(1-o*o);let f,h,d,_;if(c>0)if(f=o*l-a,h=o*a-l,_=s*c,f>=0)if(h>=-_)if(h<=_){const g=1/c;f*=g,h*=g,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+u;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+u):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(cc).addScaledVector(ma,h),d}intersectSphere(t,e){Ai.subVectors(t.center,this.origin);const i=Ai.dot(this.direction),r=Ai.dot(Ai)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(t.min.x-h.x)*u,r=(t.max.x-h.x)*u):(i=(t.max.x-h.x)*u,r=(t.min.x-h.x)*u),c>=0?(s=(t.min.y-h.y)*c,o=(t.max.y-h.y)*c):(s=(t.max.y-h.y)*c,o=(t.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Ai)!==null}intersectTriangle(t,e,i,r,s){uc.subVectors(e,t),_a.subVectors(i,t),fc.crossVectors(uc,_a);let o=this.direction.dot(fc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ji.subVectors(this.origin,t);const l=a*this.direction.dot(_a.crossVectors(Ji,_a));if(l<0)return null;const u=a*this.direction.dot(uc.cross(Ji));if(u<0||l+u>o)return null;const c=-a*Ji.dot(fc);return c<0?null:this.at(c/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class we{constructor(t,e,i,r,s,o,a,l,u,c,f,h,d,_,g,m){we.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,u,c,f,h,d,_,g,m)}set(t,e,i,r,s,o,a,l,u,c,f,h,d,_,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=u,p[6]=c,p[10]=f,p[14]=h,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new we().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/ps.setFromMatrixColumn(t,0).length(),s=1/ps.setFromMatrixColumn(t,1).length(),o=1/ps.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=o*c,d=o*f,_=a*c,g=a*f;e[0]=l*c,e[4]=-l*f,e[8]=u,e[1]=d+_*u,e[5]=h-g*u,e[9]=-a*l,e[2]=g-h*u,e[6]=_+d*u,e[10]=o*l}else if(t.order==="YXZ"){const h=l*c,d=l*f,_=u*c,g=u*f;e[0]=h+g*a,e[4]=_*a-d,e[8]=o*u,e[1]=o*f,e[5]=o*c,e[9]=-a,e[2]=d*a-_,e[6]=g+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*c,d=l*f,_=u*c,g=u*f;e[0]=h-g*a,e[4]=-o*f,e[8]=_+d*a,e[1]=d+_*a,e[5]=o*c,e[9]=g-h*a,e[2]=-o*u,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*c,d=o*f,_=a*c,g=a*f;e[0]=l*c,e[4]=_*u-d,e[8]=h*u+g,e[1]=l*f,e[5]=g*u+h,e[9]=d*u-_,e[2]=-u,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,d=o*u,_=a*l,g=a*u;e[0]=l*c,e[4]=g-h*f,e[8]=_*f+d,e[1]=f,e[5]=o*c,e[9]=-a*c,e[2]=-u*c,e[6]=d*f+_,e[10]=h-g*f}else if(t.order==="XZY"){const h=o*l,d=o*u,_=a*l,g=a*u;e[0]=l*c,e[4]=-f,e[8]=u*c,e[1]=h*f+g,e[5]=o*c,e[9]=d*f-_,e[2]=_*f-d,e[6]=a*c,e[10]=g*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gM,t,vM)}lookAt(t,e,i){const r=this.elements;return Rn.subVectors(t,e),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Qi.crossVectors(i,Rn),Qi.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Qi.crossVectors(i,Rn)),Qi.normalize(),ga.crossVectors(Rn,Qi),r[0]=Qi.x,r[4]=ga.x,r[8]=Rn.x,r[1]=Qi.y,r[5]=ga.y,r[9]=Rn.y,r[2]=Qi.z,r[6]=ga.z,r[10]=Rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],d=i[13],_=i[2],g=i[6],m=i[10],p=i[14],M=i[3],y=i[7],v=i[11],w=i[15],b=r[0],R=r[4],P=r[8],x=r[12],S=r[1],L=r[5],I=r[9],F=r[13],X=r[2],Y=r[6],W=r[10],$=r[14],V=r[3],vt=r[7],gt=r[11],St=r[15];return s[0]=o*b+a*S+l*X+u*V,s[4]=o*R+a*L+l*Y+u*vt,s[8]=o*P+a*I+l*W+u*gt,s[12]=o*x+a*F+l*$+u*St,s[1]=c*b+f*S+h*X+d*V,s[5]=c*R+f*L+h*Y+d*vt,s[9]=c*P+f*I+h*W+d*gt,s[13]=c*x+f*F+h*$+d*St,s[2]=_*b+g*S+m*X+p*V,s[6]=_*R+g*L+m*Y+p*vt,s[10]=_*P+g*I+m*W+p*gt,s[14]=_*x+g*F+m*$+p*St,s[3]=M*b+y*S+v*X+w*V,s[7]=M*R+y*L+v*Y+w*vt,s[11]=M*P+y*I+v*W+w*gt,s[15]=M*x+y*F+v*$+w*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],u=t[13],c=t[2],f=t[6],h=t[10],d=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*d-i*l*d)+g*(+e*l*d-e*u*h+s*o*h-r*o*d+r*u*c-s*l*c)+m*(+e*u*f-e*a*d-s*o*f+i*o*d+s*a*c-i*u*c)+p*(-r*a*c-e*l*f+e*a*h+r*o*f-i*o*h+i*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8],f=t[9],h=t[10],d=t[11],_=t[12],g=t[13],m=t[14],p=t[15],M=f*m*u-g*h*u+g*l*d-a*m*d-f*l*p+a*h*p,y=_*h*u-c*m*u-_*l*d+o*m*d+c*l*p-o*h*p,v=c*g*u-_*f*u+_*a*d-o*g*d-c*a*p+o*f*p,w=_*f*l-c*g*l-_*a*h+o*g*h+c*a*m-o*f*m,b=e*M+i*y+r*v+s*w;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/b;return t[0]=M*R,t[1]=(g*h*s-f*m*s-g*r*d+i*m*d+f*r*p-i*h*p)*R,t[2]=(a*m*s-g*l*s+g*r*u-i*m*u-a*r*p+i*l*p)*R,t[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*d-i*l*d)*R,t[4]=y*R,t[5]=(c*m*s-_*h*s+_*r*d-e*m*d-c*r*p+e*h*p)*R,t[6]=(_*l*s-o*m*s-_*r*u+e*m*u+o*r*p-e*l*p)*R,t[7]=(o*h*s-c*l*s+c*r*u-e*h*u-o*r*d+e*l*d)*R,t[8]=v*R,t[9]=(_*f*s-c*g*s-_*i*d+e*g*d+c*i*p-e*f*p)*R,t[10]=(o*g*s-_*a*s+_*i*u-e*g*u-o*i*p+e*a*p)*R,t[11]=(c*a*s-o*f*s-c*i*u+e*f*u+o*i*d-e*a*d)*R,t[12]=w*R,t[13]=(c*g*r-_*f*r+_*i*h-e*g*h-c*i*m+e*f*m)*R,t[14]=(_*a*r-o*g*r-_*i*l+e*g*l+o*i*m-e*a*m)*R,t[15]=(o*f*r-c*a*r+c*i*l-e*f*l-o*i*h+e*a*h)*R,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,u=s+s,c=o+o,f=a+a,h=s*u,d=s*c,_=s*f,g=o*c,m=o*f,p=a*f,M=l*u,y=l*c,v=l*f,w=i.x,b=i.y,R=i.z;return r[0]=(1-(g+p))*w,r[1]=(d+v)*w,r[2]=(_-y)*w,r[3]=0,r[4]=(d-v)*b,r[5]=(1-(h+p))*b,r[6]=(m+M)*b,r[7]=0,r[8]=(_+y)*R,r[9]=(m-M)*R,r[10]=(1-(h+g))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=ps.set(r[0],r[1],r[2]).length();const o=ps.set(r[4],r[5],r[6]).length(),a=ps.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Qn.copy(this);const u=1/s,c=1/o,f=1/a;return Qn.elements[0]*=u,Qn.elements[1]*=u,Qn.elements[2]*=u,Qn.elements[4]*=c,Qn.elements[5]*=c,Qn.elements[6]*=c,Qn.elements[8]*=f,Qn.elements[9]*=f,Qn.elements[10]*=f,e.setFromRotationMatrix(Qn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=Bi){const l=this.elements,u=2*s/(e-t),c=2*s/(i-r),f=(e+t)/(e-t),h=(i+r)/(i-r);let d,_;if(a===Bi)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===dl)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=Bi){const l=this.elements,u=1/(e-t),c=1/(i-r),f=1/(o-s),h=(e+t)*u,d=(i+r)*c;let _,g;if(a===Bi)_=(o+s)*f,g=-2*f;else if(a===dl)_=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const ps=new U,Qn=new we,gM=new U(0,0,0),vM=new U(1,1,1),Qi=new U,ga=new U,Rn=new U,vd=new we,xd=new na;class Si{constructor(t=0,e=0,i=0,r=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-re(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-re(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return vd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xd.setFromEuler(this),this.setFromQuaternion(xd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class Wf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let xM=0;const yd=new U,ms=new na,wi=new we,va=new U,fo=new U,yM=new U,MM=new na,Md=new U(1,0,0),Sd=new U(0,1,0),Ed=new U(0,0,1),Td={type:"added"},SM={type:"removed"},_s={type:"childadded",child:null},hc={type:"childremoved",child:null};class tn extends Qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=ea(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const t=new U,e=new Si,i=new na,r=new U(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new we},normalMatrix:{value:new te}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.multiply(ms),this}rotateOnWorldAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.premultiply(ms),this}rotateX(t){return this.rotateOnAxis(Md,t)}rotateY(t){return this.rotateOnAxis(Sd,t)}rotateZ(t){return this.rotateOnAxis(Ed,t)}translateOnAxis(t,e){return yd.copy(t).applyQuaternion(this.quaternion),this.position.add(yd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Md,t)}translateY(t){return this.translateOnAxis(Sd,t)}translateZ(t){return this.translateOnAxis(Ed,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?va.copy(t):va.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(fo,va,this.up):wi.lookAt(va,fo,this.up),this.quaternion.setFromRotationMatrix(wi),r&&(wi.extractRotation(r.matrixWorld),ms.setFromRotationMatrix(wi),this.quaternion.premultiply(ms.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Td),_s.child=t,this.dispatchEvent(_s),_s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(SM),hc.child=t,this.dispatchEvent(hc),hc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wi.multiply(t.parent.matrixWorld)),t.applyMatrix4(wi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Td),_s.child=t,this.dispatchEvent(_s),_s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fo,t,yM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fo,MM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),u=o(t.textures),c=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}tn.DEFAULT_UP=new U(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ti=new U,Ci=new U,dc=new U,Ri=new U,gs=new U,vs=new U,bd=new U,pc=new U,mc=new U,_c=new U,gc=new Se,vc=new Se,xc=new Se;class ii{constructor(t=new U,e=new U,i=new U){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),ti.subVectors(t,e),r.cross(ti);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){ti.subVectors(r,e),Ci.subVectors(i,e),dc.subVectors(t,e);const o=ti.dot(ti),a=ti.dot(Ci),l=ti.dot(dc),u=Ci.dot(Ci),c=Ci.dot(dc),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(u*l-a*c)*h,_=(o*c-a*l)*h;return s.set(1-d-_,_,d)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(t,e,i,r,s,o,a,l){return this.getBarycoord(t,e,i,r,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ri.x),l.addScaledVector(o,Ri.y),l.addScaledVector(a,Ri.z),l)}static getInterpolatedAttribute(t,e,i,r,s,o){return gc.setScalar(0),vc.setScalar(0),xc.setScalar(0),gc.fromBufferAttribute(t,e),vc.fromBufferAttribute(t,i),xc.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(gc,s.x),o.addScaledVector(vc,s.y),o.addScaledVector(xc,s.z),o}static isFrontFacing(t,e,i,r){return ti.subVectors(i,e),Ci.subVectors(t,e),ti.cross(Ci).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ti.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),ti.cross(Ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ii.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ii.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return ii.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return ii.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ii.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;gs.subVectors(r,i),vs.subVectors(s,i),pc.subVectors(t,i);const l=gs.dot(pc),u=vs.dot(pc);if(l<=0&&u<=0)return e.copy(i);mc.subVectors(t,r);const c=gs.dot(mc),f=vs.dot(mc);if(c>=0&&f<=c)return e.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),e.copy(i).addScaledVector(gs,o);_c.subVectors(t,s);const d=gs.dot(_c),_=vs.dot(_c);if(_>=0&&d<=_)return e.copy(s);const g=d*u-l*_;if(g<=0&&u>=0&&_<=0)return a=u/(u-_),e.copy(i).addScaledVector(vs,a);const m=c*_-d*f;if(m<=0&&f-c>=0&&d-_>=0)return bd.subVectors(s,r),a=(f-c)/(f-c+(d-_)),e.copy(r).addScaledVector(bd,a);const p=1/(m+g+h);return o=g*p,a=h*p,e.copy(i).addScaledVector(gs,o).addScaledVector(vs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Y_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},xa={h:0,s:0,l:0};function yc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Zt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Wn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=ue.workingColorSpace){return this.r=t,this.g=e,this.b=i,ue.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=ue.workingColorSpace){if(t=sM(t,1),e=re(e,0,1),i=re(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=yc(o,s,t+1/3),this.g=yc(o,s,t),this.b=yc(o,s,t-1/3)}return ue.toWorkingColorSpace(this,r),this}setStyle(t,e=Wn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Wn){const i=Y_[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zi(t.r),this.g=zi(t.g),this.b=zi(t.b),this}copyLinearToSRGB(t){return this.r=Bs(t.r),this.g=Bs(t.g),this.b=Bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Wn){return ue.fromWorkingColorSpace(nn.copy(this),t),Math.round(re(nn.r*255,0,255))*65536+Math.round(re(nn.g*255,0,255))*256+Math.round(re(nn.b*255,0,255))}getHexString(t=Wn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.fromWorkingColorSpace(nn.copy(this),e);const i=nn.r,r=nn.g,s=nn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return t.h=l,t.s=u,t.l=c,t}getRGB(t,e=ue.workingColorSpace){return ue.fromWorkingColorSpace(nn.copy(this),e),t.r=nn.r,t.g=nn.g,t.b=nn.b,t}getStyle(t=Wn){ue.fromWorkingColorSpace(nn.copy(this),t);const e=nn.r,i=nn.g,r=nn.b;return t!==Wn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(tr),this.setHSL(tr.h+t,tr.s+e,tr.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(tr),t.getHSL(xa);const i=ic(tr.h,xa.h,e),r=ic(tr.s,xa.s,e),s=ic(tr.l,xa.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new Zt;Zt.NAMES=Y_;let EM=0;class to extends Qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:EM++}),this.uuid=ea(),this.name="",this.type="Material",this.blending=Os,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cu,this.blendDst=uu,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(i.blending=this.blending),this.side!==Xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==cu&&(i.blendSrc=this.blendSrc),this.blendDst!==uu&&(i.blendDst=this.blendDst),this.blendEquation!==Hr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==qs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class He extends to{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=P_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ke=new U,ya=new Ft;class Kn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=hd,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ya.fromBufferAttribute(this,e),ya.applyMatrix3(t),this.setXY(e,ya.x,ya.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=lo(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=vn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=lo(e,this.array)),e}setX(t,e){return this.normalized&&(e=vn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=lo(e,this.array)),e}setY(t,e){return this.normalized&&(e=vn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=lo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=vn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=lo(e,this.array)),e}setW(t,e){return this.normalized&&(e=vn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=vn(e,this.array),i=vn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=vn(e,this.array),i=vn(i,this.array),r=vn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=vn(e,this.array),i=vn(i,this.array),r=vn(r,this.array),s=vn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==hd&&(t.usage=this.usage),t}}class $_ extends Kn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class K_ extends Kn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Oe extends Kn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let TM=0;const Hn=new we,Mc=new tn,xs=new U,Pn=new ia,ho=new ia,Ye=new U;class _n extends Qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=ea(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(W_(t)?K_:$_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new te().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Hn.makeRotationFromQuaternion(t),this.applyMatrix4(Hn),this}rotateX(t){return Hn.makeRotationX(t),this.applyMatrix4(Hn),this}rotateY(t){return Hn.makeRotationY(t),this.applyMatrix4(Hn),this}rotateZ(t){return Hn.makeRotationZ(t),this.applyMatrix4(Hn),this}translate(t,e,i){return Hn.makeTranslation(t,e,i),this.applyMatrix4(Hn),this}scale(t,e,i){return Hn.makeScale(t,e,i),this.applyMatrix4(Hn),this}lookAt(t){return Mc.lookAt(t),Mc.updateMatrix(),this.applyMatrix4(Mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Oe(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ia);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ye.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Ye),Ye.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Ye)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];ho.setFromBufferAttribute(a),this.morphTargetsRelative?(Ye.addVectors(Pn.min,ho.min),Pn.expandByPoint(Ye),Ye.addVectors(Pn.max,ho.max),Pn.expandByPoint(Ye)):(Pn.expandByPoint(ho.min),Pn.expandByPoint(ho.max))}Pn.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Ye.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Ye));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Ye.fromBufferAttribute(a,u),l&&(xs.fromBufferAttribute(t,u),Ye.add(xs)),r=Math.max(r,i.distanceToSquared(Ye))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new U,l[P]=new U;const u=new U,c=new U,f=new U,h=new Ft,d=new Ft,_=new Ft,g=new U,m=new U;function p(P,x,S){u.fromBufferAttribute(i,P),c.fromBufferAttribute(i,x),f.fromBufferAttribute(i,S),h.fromBufferAttribute(s,P),d.fromBufferAttribute(s,x),_.fromBufferAttribute(s,S),c.sub(u),f.sub(u),d.sub(h),_.sub(h);const L=1/(d.x*_.y-_.x*d.y);isFinite(L)&&(g.copy(c).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(L),m.copy(f).multiplyScalar(d.x).addScaledVector(c,-_.x).multiplyScalar(L),a[P].add(g),a[x].add(g),a[S].add(g),l[P].add(m),l[x].add(m),l[S].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let P=0,x=M.length;P<x;++P){const S=M[P],L=S.start,I=S.count;for(let F=L,X=L+I;F<X;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const y=new U,v=new U,w=new U,b=new U;function R(P){w.fromBufferAttribute(r,P),b.copy(w);const x=a[P];y.copy(x),y.sub(w.multiplyScalar(w.dot(x))).normalize(),v.crossVectors(b,x);const L=v.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,L)}for(let P=0,x=M.length;P<x;++P){const S=M[P],L=S.start,I=S.count;for(let F=L,X=L+I;F<X;F+=3)R(t.getX(F+0)),R(t.getX(F+1)),R(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new U,s=new U,o=new U,a=new U,l=new U,u=new U,c=new U,f=new U;if(t)for(let h=0,d=t.count;h<d;h+=3){const _=t.getX(h+0),g=t.getX(h+1),m=t.getX(h+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,d=e.count;h<d;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ye.fromBufferAttribute(t,e),Ye.normalize(),t.setXYZ(e,Ye.x,Ye.y,Ye.z)}toNonIndexed(){function t(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let d=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*c;for(let p=0;p<c;p++)h[_++]=u[d++]}return new Kn(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _n,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=t(l,i);e.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],d=t(h,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const u=i[l];t.data.attributes[l]=u.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const d=u[f];c.push(d.toJSON(t.data))}c.length>0&&(r[l]=c,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(e))}const s=t.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,d=f.length;h<d;h++)c.push(f[h].clone(e));this.morphAttributes[u]=c}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ad=new we,Lr=new Gf,Ma=new Pl,wd=new U,Sa=new U,Ea=new U,Ta=new U,Sc=new U,ba=new U,Cd=new U,Aa=new U;class xe extends tn{constructor(t=new _n,e=new He){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){ba.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(Sc.fromBufferAttribute(f,t),o?ba.addScaledVector(Sc,c):ba.addScaledVector(Sc.sub(e),c))}e.add(ba)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ma.copy(i.boundingSphere),Ma.applyMatrix4(s),Lr.copy(t.ray).recast(t.near),!(Ma.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(Ma,wd)===null||Lr.origin.distanceToSquared(wd)>(t.far-t.near)**2))&&(Ad.copy(s).invert(),Lr.copy(t.ray).applyMatrix4(Ad),!(i.boundingBox!==null&&Lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Lr)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const m=h[_],p=o[m.materialIndex],M=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,w=y;v<w;v+=3){const b=a.getX(v),R=a.getX(v+1),P=a.getX(v+2);r=wa(this,p,t,i,u,c,f,b,R,P),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const M=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);r=wa(this,o,t,i,u,c,f,M,y,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const m=h[_],p=o[m.materialIndex],M=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,w=y;v<w;v+=3){const b=v,R=v+1,P=v+2;r=wa(this,p,t,i,u,c,f,b,R,P),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const M=m,y=m+1,v=m+2;r=wa(this,o,t,i,u,c,f,M,y,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function bM(n,t,e,i,r,s,o,a){let l;if(t.side===Qe?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===Xi,a),l===null)return null;Aa.copy(a),Aa.applyMatrix4(n.matrixWorld);const u=e.ray.origin.distanceTo(Aa);return u<e.near||u>e.far?null:{distance:u,point:Aa.clone(),object:n}}function wa(n,t,e,i,r,s,o,a,l,u){n.getVertexPosition(a,Sa),n.getVertexPosition(l,Ea),n.getVertexPosition(u,Ta);const c=bM(n,t,e,i,Sa,Ea,Ta,Cd);if(c){const f=new U;ii.getBarycoord(Cd,Sa,Ea,Ta,f),r&&(c.uv=ii.getInterpolatedAttribute(r,a,l,u,f,new Ft)),s&&(c.uv1=ii.getInterpolatedAttribute(s,a,l,u,f,new Ft)),o&&(c.normal=ii.getInterpolatedAttribute(o,a,l,u,f,new U),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new U,materialIndex:0};ii.getNormal(Sa,Ea,Ta,h.normal),c.face=h,c.barycoord=f}return c}class ra extends _n{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,i,e,t,o,s,0),_("z","y","x",1,-1,i,e,-t,o,s,1),_("x","z","y",1,1,t,i,e,r,o,2),_("x","z","y",1,-1,t,i,-e,r,o,3),_("x","y","z",1,-1,t,e,i,r,s,4),_("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Oe(u,3)),this.setAttribute("normal",new Oe(c,3)),this.setAttribute("uv",new Oe(f,2));function _(g,m,p,M,y,v,w,b,R,P,x){const S=v/R,L=w/P,I=v/2,F=w/2,X=b/2,Y=R+1,W=P+1;let $=0,V=0;const vt=new U;for(let gt=0;gt<W;gt++){const St=gt*L-F;for(let Lt=0;Lt<Y;Lt++){const Qt=Lt*S-I;vt[g]=Qt*M,vt[m]=St*y,vt[p]=X,u.push(vt.x,vt.y,vt.z),vt[g]=0,vt[m]=0,vt[p]=b>0?1:-1,c.push(vt.x,vt.y,vt.z),f.push(Lt/R),f.push(1-gt/P),$+=1}}for(let gt=0;gt<P;gt++)for(let St=0;St<R;St++){const Lt=h+St+Y*gt,Qt=h+St+Y*(gt+1),it=h+(St+1)+Y*(gt+1),_t=h+(St+1)+Y*gt;l.push(Lt,Qt,_t),l.push(Qt,it,_t),V+=6}a.addGroup(d,V,x),d+=V,h+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ra(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Js(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function un(n){const t={};for(let e=0;e<n.length;e++){const i=Js(n[e]);for(const r in i)t[r]=i[r]}return t}function AM(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function j_(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}const wM={clone:Js,merge:un};var CM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yr extends to{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=CM,this.fragmentShader=RM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Js(t.uniforms),this.uniformsGroups=AM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Z_ extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=Bi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const er=new U,Rd=new Ft,Pd=new Ft;class Sn extends Z_{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=$u*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(nc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $u*2*Math.atan(Math.tan(nc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(er.x,er.y).multiplyScalar(-t/er.z),er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(er.x,er.y).multiplyScalar(-t/er.z)}getViewSize(t,e){return this.getViewBounds(t,Rd,Pd),e.subVectors(Pd,Rd)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(nc*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ys=-90,Ms=1;class PM extends tn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Sn(ys,Ms,t,e);r.layers=this.layers,this.add(r);const s=new Sn(ys,Ms,t,e);s.layers=this.layers,this.add(s);const o=new Sn(ys,Ms,t,e);o.layers=this.layers,this.add(o);const a=new Sn(ys,Ms,t,e);a.layers=this.layers,this.add(a);const l=new Sn(ys,Ms,t,e);l.layers=this.layers,this.add(l);const u=new Sn(ys,Ms,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,l]=e;for(const u of e)this.remove(u);if(t===Bi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===dl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,u),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,r),t.render(e,c),t.setRenderTarget(f,h,d),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class J_ extends mn{constructor(t,e,i,r,s,o,a,l,u,c){t=t!==void 0?t:[],e=e!==void 0?e:Ys,super(t,e,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class DM extends is{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new J_(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:vi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ra(5,5,5),s=new yr({name:"CubemapFromEquirect",uniforms:Js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qe,blending:dr});s.uniforms.tEquirect.value=e;const o=new xe(r,s),a=e.minFilter;return e.minFilter===Yr&&(e.minFilter=vi),new PM(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}class Xf{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Zt(t),this.density=e}clone(){return new Xf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Q_ extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Ec=new U,LM=new U,IM=new te;class zr{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Ec.subVectors(i,e).cross(LM.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ec),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||IM.getNormalMatrix(t),r=this.coplanarPoint(Ec).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ir=new Pl,Ca=new U;class qf{constructor(t=new zr,e=new zr,i=new zr,r=new zr,s=new zr,o=new zr){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Bi){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],d=r[8],_=r[9],g=r[10],m=r[11],p=r[12],M=r[13],y=r[14],v=r[15];if(i[0].setComponents(l-s,h-u,m-d,v-p).normalize(),i[1].setComponents(l+s,h+u,m+d,v+p).normalize(),i[2].setComponents(l+o,h+c,m+_,v+M).normalize(),i[3].setComponents(l-o,h-c,m-_,v-M).normalize(),i[4].setComponents(l-a,h-f,m-g,v-y).normalize(),e===Bi)i[5].setComponents(l+a,h+f,m+g,v+y).normalize();else if(e===dl)i[5].setComponents(a,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ir.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ir.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(t){return Ir.center.set(0,0,0),Ir.radius=.7071067811865476,Ir.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Ca.x=r.normal.x>0?t.max.x:t.min.x,Ca.y=r.normal.y>0?t.max.y:t.min.y,Ca.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ca)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ku extends to{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Dd=new we,ju=new Gf,Ra=new Pl,Pa=new U;class Tc extends tn{constructor(t=new _n,e=new Ku){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ra.copy(i.boundingSphere),Ra.applyMatrix4(r),Ra.radius+=s,t.ray.intersectsSphere(Ra)===!1)return;Dd.copy(r).invert(),ju.copy(t.ray).applyMatrix4(Dd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let _=h,g=d;_<g;_++){const m=u.getX(_);Pa.fromBufferAttribute(f,m),Ld(Pa,m,l,r,t,e,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let _=h,g=d;_<g;_++)Pa.fromBufferAttribute(f,_),Ld(Pa,_,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ld(n,t,e,i,r,s,o){const a=ju.distanceSqToPoint(n);if(a<e){const l=new U;ju.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class $r extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class tg extends mn{constructor(t,e,i,r,s,o,a,l,u,c=Fs){if(c!==Fs&&c!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Fs&&(i=ns),i===void 0&&c===js&&(i=Ks),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:oi,this.minFilter=l!==void 0?l:oi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class $i{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),s+=i.distanceTo(r),e.push(s),r=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let r=0;const s=i.length;let o;e?o=e:o=t*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const c=i[r],h=i[r+1]-c,d=(o-c)/h;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new Ft:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new U,r=[],s=[],o=[],a=new U,l=new we;for(let d=0;d<=t;d++){const _=d/t;r[d]=this.getTangentAt(_,new U)}s[0]=new U,o[0]=new U;let u=Number.MAX_VALUE;const c=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),f<=u&&(u=f,i.set(0,1,0)),h<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(re(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,_))}o[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos(re(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let _=1;_<=t;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],d*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class eg extends $i{constructor(t=0,e=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Ft){const i=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=u-this.aY;l=h*c-d*f+this.aX,u=h*f+d*c+this.aY}return i.set(l,u)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class UM extends eg{constructor(t,e,i,r,s,o){super(t,e,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Yf(){let n=0,t=0,e=0,i=0;function r(s,o,a,l){n=s,t=a,e=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,c,f){let h=(o-s)/u-(a-s)/(u+c)+(a-o)/c,d=(a-o)/c-(l-o)/(c+f)+(l-a)/f;h*=c,d*=c,r(o,a,h,d)},calc:function(s){const o=s*s,a=o*s;return n+t*s+e*o+i*a}}}const Da=new U,bc=new Yf,Ac=new Yf,wc=new Yf;class ng extends $i{constructor(t=[],e=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=r}getPoint(t,e=new U){const i=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,c;this.closed||a>0?u=r[(a-1)%s]:(Da.subVectors(r[0],r[1]).add(r[0]),u=Da);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?c=r[(a+2)%s]:(Da.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=Da),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(c),d);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),bc.initNonuniformCatmullRom(u.x,f.x,h.x,c.x,_,g,m),Ac.initNonuniformCatmullRom(u.y,f.y,h.y,c.y,_,g,m),wc.initNonuniformCatmullRom(u.z,f.z,h.z,c.z,_,g,m)}else this.curveType==="catmullrom"&&(bc.initCatmullRom(u.x,f.x,h.x,c.x,this.tension),Ac.initCatmullRom(u.y,f.y,h.y,c.y,this.tension),wc.initCatmullRom(u.z,f.z,h.z,c.z,this.tension));return i.set(bc.calc(l),Ac.calc(l),wc.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new U().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Id(n,t,e,i,r){const s=(i-t)*.5,o=(r-e)*.5,a=n*n,l=n*a;return(2*e-2*i+s+o)*l+(-3*e+3*i-2*s-o)*a+s*n+e}function NM(n,t){const e=1-n;return e*e*t}function OM(n,t){return 2*(1-n)*n*t}function FM(n,t){return n*n*t}function Po(n,t,e,i){return NM(n,t)+OM(n,e)+FM(n,i)}function BM(n,t){const e=1-n;return e*e*e*t}function zM(n,t){const e=1-n;return 3*e*e*n*t}function kM(n,t){return 3*(1-n)*n*n*t}function VM(n,t){return n*n*n*t}function Do(n,t,e,i,r){return BM(n,t)+zM(n,e)+kM(n,i)+VM(n,r)}class HM extends $i{constructor(t=new Ft,e=new Ft,i=new Ft,r=new Ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new Ft){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Do(t,r.x,s.x,o.x,a.x),Do(t,r.y,s.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class GM extends $i{constructor(t=new U,e=new U,i=new U,r=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new U){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Do(t,r.x,s.x,o.x,a.x),Do(t,r.y,s.y,o.y,a.y),Do(t,r.z,s.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class WM extends $i{constructor(t=new Ft,e=new Ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ft){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class XM extends $i{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class qM extends $i{constructor(t=new Ft,e=new Ft,i=new Ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Ft){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(Po(t,r.x,s.x,o.x),Po(t,r.y,s.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ig extends $i{constructor(t=new U,e=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new U){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(Po(t,r.x,s.x,o.x),Po(t,r.y,s.y,o.y),Po(t,r.z,s.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class YM extends $i{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ft){const i=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],c=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(Id(a,l.x,u.x,c.x,f.x),Id(a,l.y,u.y,c.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new Ft().fromArray(r))}return this}}var $M=Object.freeze({__proto__:null,ArcCurve:UM,CatmullRomCurve3:ng,CubicBezierCurve:HM,CubicBezierCurve3:GM,EllipseCurve:eg,LineCurve:WM,LineCurve3:XM,QuadraticBezierCurve:qM,QuadraticBezierCurve3:ig,SplineCurve:YM});class $f extends _n{constructor(t=1,e=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const c=[],f=[],h=[],d=[];let _=0;const g=[],m=i/2;let p=0;M(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(c),this.setAttribute("position",new Oe(f,3)),this.setAttribute("normal",new Oe(h,3)),this.setAttribute("uv",new Oe(d,2));function M(){const v=new U,w=new U;let b=0;const R=(e-t)/i;for(let P=0;P<=s;P++){const x=[],S=P/s,L=S*(e-t)+t;for(let I=0;I<=r;I++){const F=I/r,X=F*l+a,Y=Math.sin(X),W=Math.cos(X);w.x=L*Y,w.y=-S*i+m,w.z=L*W,f.push(w.x,w.y,w.z),v.set(Y,R,W).normalize(),h.push(v.x,v.y,v.z),d.push(F,1-S),x.push(_++)}g.push(x)}for(let P=0;P<r;P++)for(let x=0;x<s;x++){const S=g[x][P],L=g[x+1][P],I=g[x+1][P+1],F=g[x][P+1];(t>0||x!==0)&&(c.push(S,L,F),b+=3),(e>0||x!==s-1)&&(c.push(L,I,F),b+=3)}u.addGroup(p,b,0),p+=b}function y(v){const w=_,b=new Ft,R=new U;let P=0;const x=v===!0?t:e,S=v===!0?1:-1;for(let I=1;I<=r;I++)f.push(0,m*S,0),h.push(0,S,0),d.push(.5,.5),_++;const L=_;for(let I=0;I<=r;I++){const X=I/r*l+a,Y=Math.cos(X),W=Math.sin(X);R.x=x*W,R.y=m*S,R.z=x*Y,f.push(R.x,R.y,R.z),h.push(0,S,0),b.x=Y*.5+.5,b.y=W*.5*S+.5,d.push(b.x,b.y),_++}for(let I=0;I<r;I++){const F=w+I,X=L+I;v===!0?c.push(X,X+1,F):c.push(X+1,X,F),P+=3}u.addGroup(p,P,v===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $f(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Kf extends _n{constructor(t=[],e=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:r};const s=[],o=[];a(r),u(i),c(),this.setAttribute("position",new Oe(s,3)),this.setAttribute("normal",new Oe(s.slice(),3)),this.setAttribute("uv",new Oe(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const y=new U,v=new U,w=new U;for(let b=0;b<e.length;b+=3)d(e[b+0],y),d(e[b+1],v),d(e[b+2],w),l(y,v,w,M)}function l(M,y,v,w){const b=w+1,R=[];for(let P=0;P<=b;P++){R[P]=[];const x=M.clone().lerp(v,P/b),S=y.clone().lerp(v,P/b),L=b-P;for(let I=0;I<=L;I++)I===0&&P===b?R[P][I]=x:R[P][I]=x.clone().lerp(S,I/L)}for(let P=0;P<b;P++)for(let x=0;x<2*(b-P)-1;x++){const S=Math.floor(x/2);x%2===0?(h(R[P][S+1]),h(R[P+1][S]),h(R[P][S])):(h(R[P][S+1]),h(R[P+1][S+1]),h(R[P+1][S]))}}function u(M){const y=new U;for(let v=0;v<s.length;v+=3)y.x=s[v+0],y.y=s[v+1],y.z=s[v+2],y.normalize().multiplyScalar(M),s[v+0]=y.x,s[v+1]=y.y,s[v+2]=y.z}function c(){const M=new U;for(let y=0;y<s.length;y+=3){M.x=s[y+0],M.y=s[y+1],M.z=s[y+2];const v=m(M)/2/Math.PI+.5,w=p(M)/Math.PI+.5;o.push(v,1-w)}_(),f()}function f(){for(let M=0;M<o.length;M+=6){const y=o[M+0],v=o[M+2],w=o[M+4],b=Math.max(y,v,w),R=Math.min(y,v,w);b>.9&&R<.1&&(y<.2&&(o[M+0]+=1),v<.2&&(o[M+2]+=1),w<.2&&(o[M+4]+=1))}}function h(M){s.push(M.x,M.y,M.z)}function d(M,y){const v=M*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function _(){const M=new U,y=new U,v=new U,w=new U,b=new Ft,R=new Ft,P=new Ft;for(let x=0,S=0;x<s.length;x+=9,S+=6){M.set(s[x+0],s[x+1],s[x+2]),y.set(s[x+3],s[x+4],s[x+5]),v.set(s[x+6],s[x+7],s[x+8]),b.set(o[S+0],o[S+1]),R.set(o[S+2],o[S+3]),P.set(o[S+4],o[S+5]),w.copy(M).add(y).add(v).divideScalar(3);const L=m(w);g(b,S+0,M,L),g(R,S+2,y,L),g(P,S+4,v,L)}}function g(M,y,v,w){w<0&&M.x===1&&(o[y]=M.x-1),v.x===0&&v.z===0&&(o[y]=w/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kf(t.vertices,t.indices,t.radius,t.details)}}class jf extends Kf{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new jf(t.radius,t.detail)}}class ni extends _n{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=t/a,h=e/l,d=[],_=[],g=[],m=[];for(let p=0;p<c;p++){const M=p*h-o;for(let y=0;y<u;y++){const v=y*f-s;_.push(v,-M,0),g.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const y=M+u*p,v=M+u*(p+1),w=M+1+u*(p+1),b=M+1+u*p;d.push(y,v,b),d.push(v,w,b)}this.setIndex(d),this.setAttribute("position",new Oe(_,3)),this.setAttribute("normal",new Oe(g,3)),this.setAttribute("uv",new Oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ni(t.width,t.height,t.widthSegments,t.heightSegments)}}class Gr extends _n{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],f=new U,h=new U,d=[],_=[],g=[],m=[];for(let p=0;p<=i;p++){const M=[],y=p/i;let v=0;p===0&&o===0?v=.5/e:p===i&&l===Math.PI&&(v=-.5/e);for(let w=0;w<=e;w++){const b=w/e;f.x=-t*Math.cos(r+b*s)*Math.sin(o+y*a),f.y=t*Math.cos(o+y*a),f.z=t*Math.sin(r+b*s)*Math.sin(o+y*a),_.push(f.x,f.y,f.z),h.copy(f).normalize(),g.push(h.x,h.y,h.z),m.push(b+v,1-y),M.push(u++)}c.push(M)}for(let p=0;p<i;p++)for(let M=0;M<e;M++){const y=c[p][M+1],v=c[p][M],w=c[p+1][M],b=c[p+1][M+1];(p!==0||o>0)&&d.push(y,v,b),(p!==i-1||l<Math.PI)&&d.push(v,w,b)}this.setIndex(d),this.setAttribute("position",new Oe(_,3)),this.setAttribute("normal",new Oe(g,3)),this.setAttribute("uv",new Oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class pl extends _n{constructor(t=1,e=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],u=[],c=new U,f=new U,h=new U;for(let d=0;d<=i;d++)for(let _=0;_<=r;_++){const g=_/r*s,m=d/i*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(g),f.y=(t+e*Math.cos(m))*Math.sin(g),f.z=e*Math.sin(m),a.push(f.x,f.y,f.z),c.x=t*Math.cos(g),c.y=t*Math.sin(g),h.subVectors(f,c).normalize(),l.push(h.x,h.y,h.z),u.push(_/r),u.push(d/i)}for(let d=1;d<=i;d++)for(let _=1;_<=r;_++){const g=(r+1)*d+_-1,m=(r+1)*(d-1)+_-1,p=(r+1)*(d-1)+_,M=(r+1)*d+_;o.push(g,m,M),o.push(m,p,M)}this.setIndex(o),this.setAttribute("position",new Oe(a,3)),this.setAttribute("normal",new Oe(l,3)),this.setAttribute("uv",new Oe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pl(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Zf extends _n{constructor(t=new ig(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),e=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:r,closed:s};const o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new U,l=new U,u=new Ft;let c=new U;const f=[],h=[],d=[],_=[];g(),this.setIndex(_),this.setAttribute("position",new Oe(f,3)),this.setAttribute("normal",new Oe(h,3)),this.setAttribute("uv",new Oe(d,2));function g(){for(let y=0;y<e;y++)m(y);m(s===!1?e:0),M(),p()}function m(y){c=t.getPointAt(y/e,c);const v=o.normals[y],w=o.binormals[y];for(let b=0;b<=r;b++){const R=b/r*Math.PI*2,P=Math.sin(R),x=-Math.cos(R);l.x=x*v.x+P*w.x,l.y=x*v.y+P*w.y,l.z=x*v.z+P*w.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=c.x+i*l.x,a.y=c.y+i*l.y,a.z=c.z+i*l.z,f.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=e;y++)for(let v=1;v<=r;v++){const w=(r+1)*(y-1)+(v-1),b=(r+1)*y+(v-1),R=(r+1)*y+v,P=(r+1)*(y-1)+v;_.push(w,b,P),_.push(b,R,P)}}function M(){for(let y=0;y<=e;y++)for(let v=0;v<=r;v++)u.x=y/e,u.y=v/r,d.push(u.x,u.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Zf(new $M[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Ud extends to{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=H_,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class KM extends to{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ky,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class jM extends to{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Nd={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class ZM{constructor(t,e,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,h=u.length;f<h;f+=2){const d=u[f],_=u[f+1];if(d.global&&(d.lastIndex=0),d.test(c))return _}return null}}}const JM=new ZM;class Jf{constructor(t){this.manager=t!==void 0?t:JM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Jf.DEFAULT_MATERIAL_NAME="__DEFAULT";class QM extends Jf{constructor(t){super(t)}load(t,e,i,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Nd.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=$o("img");function l(){c(),Nd.add(t,this),e&&e(this),s.manager.itemEnd(t)}function u(f){c(),r&&r(f),s.manager.itemError(t),s.manager.itemEnd(t)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class tS extends Jf{constructor(t){super(t)}load(t,e,i,r){const s=new mn,o=new QM(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},i,r),s}}class Qf extends tn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Cc=new we,Od=new U,Fd=new U;class rg{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qf,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Od.setFromMatrixPosition(t.matrixWorld),e.position.copy(Od),Fd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Fd),e.updateMatrixWorld(),Cc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Cc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Bd=new we,po=new U,Rc=new U;class eS extends rg{constructor(){super(new Sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ft(4,2),this._viewportCount=6,this._viewports=[new Se(2,1,1,1),new Se(0,1,1,1),new Se(3,1,1,1),new Se(1,1,1,1),new Se(3,0,1,1),new Se(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,r=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),po.setFromMatrixPosition(t.matrixWorld),i.position.copy(po),Rc.copy(i.position),Rc.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Rc),i.updateMatrixWorld(),r.makeTranslation(-po.x,-po.y,-po.z),Bd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bd)}}class zd extends Qf{constructor(t,e,i=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new eS}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class sg extends Z_{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class nS extends rg{constructor(){super(new sg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class kd extends Qf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new nS}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class iS extends Qf{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class rS extends Sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class sS{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Vd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Vd(){return performance.now()}const Hd=new we;class og{constructor(t,e,i=0,r=1/0){this.ray=new Gf(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new Wf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Hd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hd),this}intersectObject(t,e=!0,i=[]){return Zu(t,this,i,e),i.sort(Gd),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)Zu(t[r],this,i,e);return i.sort(Gd),i}}function Gd(n,t){return n.distance-t.distance}function Zu(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)Zu(s[o],t,e,!0)}}function Wd(n,t,e,i){const r=oS(i);switch(e){case N_:return n*t;case F_:return n*t;case B_:return n*t*2;case z_:return n*t/r.components*r.byteLength;case kf:return n*t/r.components*r.byteLength;case k_:return n*t*2/r.components*r.byteLength;case Vf:return n*t*2/r.components*r.byteLength;case O_:return n*t*3/r.components*r.byteLength;case ri:return n*t*4/r.components*r.byteLength;case Hf:return n*t*4/r.components*r.byteLength;case Wa:case Xa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case qa:case Ya:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Eu:case bu:return Math.max(n,16)*Math.max(t,8)/4;case Su:case Tu:return Math.max(n,8)*Math.max(t,8)/2;case Au:case wu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Cu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ru:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Pu:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Du:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Lu:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Iu:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Uu:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Nu:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ou:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Fu:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Bu:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case zu:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ku:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Vu:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Hu:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case $a:case Gu:case Wu:return Math.ceil(n/4)*Math.ceil(t/4)*16;case V_:case Xu:return Math.ceil(n/4)*Math.ceil(t/4)*8;case qu:case Yu:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function oS(n){switch(n){case qi:case L_:return{byteLength:1,components:1};case Yo:case I_:case ta:return{byteLength:2,components:1};case Bf:case zf:return{byteLength:2,components:4};case ns:case Ff:case Fi:return{byteLength:4,components:1};case U_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Of}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Of);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ag(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function aS(n){const t=new WeakMap;function e(a,l){const u=a.array,c=a.usage,f=u.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,u,c),a.onUploadCallback();let d;if(u instanceof Float32Array)d=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)d=n.SHORT;else if(u instanceof Uint32Array)d=n.UNSIGNED_INT;else if(u instanceof Int32Array)d=n.INT;else if(u instanceof Int8Array)d=n.BYTE;else if(u instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:d,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l.updateRanges;if(n.bindBuffer(u,a),f.length===0)n.bufferSubData(u,0,c);else{f.sort((d,_)=>d.start-_.start);let h=0;for(let d=1;d<f.length;d++){const _=f[h],g=f[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++h,f[h]=g)}f.length=h+1;for(let d=0,_=f.length;d<_;d++){const g=f[d];n.bufferSubData(u,g.start*c.BYTES_PER_ELEMENT,c,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=t.get(a);if(u===void 0)t.set(a,e(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var lS=`#ifdef USE_ALPHAHASH
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
#endif`,ES=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,TS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,AS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wS=`#if defined( USE_COLOR_ALPHA )
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
} // validated`,LS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,BS="gl_FragColor = linearToOutputTexel( gl_FragColor );",zS=`vec4 LinearTransferOETF( in vec4 value ) {
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
#endif`,VS=`#ifdef USE_ENVMAP
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
#endif`,tE=`#ifdef USE_ENVMAP
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
#endif`,eE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sE=`PhysicalMaterial material;
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
#endif`,oE=`struct PhysicalMaterial {
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
}`,aE=`
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
#endif`,lE=`#if defined( RE_IndirectDiffuse )
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
#endif`,cE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_E=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gE=`#if defined( USE_POINTS_UV )
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
#endif`,vE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ME=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,SE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,EE=`#ifdef USE_MORPHTARGETS
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
#endif`,TE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,AE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,PE=`#ifdef USE_NORMALMAP
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
#endif`,DE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,LE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,UE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,OE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,FE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,BE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,VE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,HE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,GE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,WE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,XE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qE=`float getShadowMask() {
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
}`,YE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$E=`#ifdef USE_SKINNING
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
#endif`,KE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jE=`#ifdef USE_SKINNING
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
#endif`,ZE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,JE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,QE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,eT=`#ifdef USE_TRANSMISSION
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
#endif`,nT=`#ifdef USE_TRANSMISSION
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
#endif`,iT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const aT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lT=`uniform sampler2D t2D;
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
}`,cT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dT=`#include <common>
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
}`,pT=`#if DEPTH_PACKING == 3200
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
}`,mT=`#define DISTANCE
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
}`,_T=`#define DISTANCE
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
}`,gT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xT=`uniform float scale;
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
}`,yT=`uniform vec3 diffuse;
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
}`,MT=`#include <common>
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
}`,ST=`uniform vec3 diffuse;
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
}`,ET=`#define LAMBERT
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
}`,TT=`#define LAMBERT
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
}`,bT=`#define MATCAP
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
}`,AT=`#define MATCAP
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
}`,wT=`#define NORMAL
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
}`,CT=`#define NORMAL
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
}`,RT=`#define PHONG
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
}`,PT=`#define PHONG
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
}`,DT=`#define STANDARD
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
}`,LT=`#define STANDARD
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
}`,IT=`#define TOON
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
}`,UT=`#define TOON
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
}`,NT=`uniform float size;
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
}`,OT=`uniform vec3 diffuse;
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
}`,FT=`#include <common>
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
}`,BT=`uniform vec3 color;
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
}`,zT=`uniform float rotation;
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
}`,kT=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:lS,alphahash_pars_fragment:cS,alphamap_fragment:uS,alphamap_pars_fragment:fS,alphatest_fragment:hS,alphatest_pars_fragment:dS,aomap_fragment:pS,aomap_pars_fragment:mS,batching_pars_vertex:_S,batching_vertex:gS,begin_vertex:vS,beginnormal_vertex:xS,bsdfs:yS,iridescence_fragment:MS,bumpmap_pars_fragment:SS,clipping_planes_fragment:ES,clipping_planes_pars_fragment:TS,clipping_planes_pars_vertex:bS,clipping_planes_vertex:AS,color_fragment:wS,color_pars_fragment:CS,color_pars_vertex:RS,color_vertex:PS,common:DS,cube_uv_reflection_fragment:LS,defaultnormal_vertex:IS,displacementmap_pars_vertex:US,displacementmap_vertex:NS,emissivemap_fragment:OS,emissivemap_pars_fragment:FS,colorspace_fragment:BS,colorspace_pars_fragment:zS,envmap_fragment:kS,envmap_common_pars_fragment:VS,envmap_pars_fragment:HS,envmap_pars_vertex:GS,envmap_physical_pars_fragment:tE,envmap_vertex:WS,fog_vertex:XS,fog_pars_vertex:qS,fog_fragment:YS,fog_pars_fragment:$S,gradientmap_pars_fragment:KS,lightmap_pars_fragment:jS,lights_lambert_fragment:ZS,lights_lambert_pars_fragment:JS,lights_pars_begin:QS,lights_toon_fragment:eE,lights_toon_pars_fragment:nE,lights_phong_fragment:iE,lights_phong_pars_fragment:rE,lights_physical_fragment:sE,lights_physical_pars_fragment:oE,lights_fragment_begin:aE,lights_fragment_maps:lE,lights_fragment_end:cE,logdepthbuf_fragment:uE,logdepthbuf_pars_fragment:fE,logdepthbuf_pars_vertex:hE,logdepthbuf_vertex:dE,map_fragment:pE,map_pars_fragment:mE,map_particle_fragment:_E,map_particle_pars_fragment:gE,metalnessmap_fragment:vE,metalnessmap_pars_fragment:xE,morphinstance_vertex:yE,morphcolor_vertex:ME,morphnormal_vertex:SE,morphtarget_pars_vertex:EE,morphtarget_vertex:TE,normal_fragment_begin:bE,normal_fragment_maps:AE,normal_pars_fragment:wE,normal_pars_vertex:CE,normal_vertex:RE,normalmap_pars_fragment:PE,clearcoat_normal_fragment_begin:DE,clearcoat_normal_fragment_maps:LE,clearcoat_pars_fragment:IE,iridescence_pars_fragment:UE,opaque_fragment:NE,packing:OE,premultiplied_alpha_fragment:FE,project_vertex:BE,dithering_fragment:zE,dithering_pars_fragment:kE,roughnessmap_fragment:VE,roughnessmap_pars_fragment:HE,shadowmap_pars_fragment:GE,shadowmap_pars_vertex:WE,shadowmap_vertex:XE,shadowmask_pars_fragment:qE,skinbase_vertex:YE,skinning_pars_vertex:$E,skinning_vertex:KE,skinnormal_vertex:jE,specularmap_fragment:ZE,specularmap_pars_fragment:JE,tonemapping_fragment:QE,tonemapping_pars_fragment:tT,transmission_fragment:eT,transmission_pars_fragment:nT,uv_pars_fragment:iT,uv_pars_vertex:rT,uv_vertex:sT,worldpos_vertex:oT,background_vert:aT,background_frag:lT,backgroundCube_vert:cT,backgroundCube_frag:uT,cube_vert:fT,cube_frag:hT,depth_vert:dT,depth_frag:pT,distanceRGBA_vert:mT,distanceRGBA_frag:_T,equirect_vert:gT,equirect_frag:vT,linedashed_vert:xT,linedashed_frag:yT,meshbasic_vert:MT,meshbasic_frag:ST,meshlambert_vert:ET,meshlambert_frag:TT,meshmatcap_vert:bT,meshmatcap_frag:AT,meshnormal_vert:wT,meshnormal_frag:CT,meshphong_vert:RT,meshphong_frag:PT,meshphysical_vert:DT,meshphysical_frag:LT,meshtoon_vert:IT,meshtoon_frag:UT,points_vert:NT,points_frag:OT,shadow_vert:FT,shadow_frag:BT,sprite_vert:zT,sprite_frag:kT},bt={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},mi={basic:{uniforms:un([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:un([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:un([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:un([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:un([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:un([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:un([bt.points,bt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:un([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:un([bt.common,bt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:un([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:un([bt.sprite,bt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:un([bt.common,bt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:un([bt.lights,bt.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};mi.physical={uniforms:un([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};const La={r:0,b:0,g:0},Ur=new Si,VT=new we;function HT(n,t,e,i,r,s,o){const a=new Zt(0);let l=s===!0?0:1,u,c,f=null,h=0,d=null;function _(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function g(y){let v=!1;const w=_(y);w===null?p(a,l):w&&w.isColor&&(p(w,1),v=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,v){const w=_(v);w&&(w.isCubeTexture||w.mapping===Rl)?(c===void 0&&(c=new xe(new ra(1,1,1),new yr({name:"BackgroundCubeMaterial",uniforms:Js(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Ur.copy(v.backgroundRotation),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),c.material.uniforms.envMap.value=w,c.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(VT.makeRotationFromEuler(Ur)),c.material.toneMapped=ue.getTransfer(w.colorSpace)!==ye,(f!==w||h!==w.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=w,h=w.version,d=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(u===void 0&&(u=new xe(new ni(2,2),new yr({name:"BackgroundMaterial",uniforms:Js(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=w,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=ue.getTransfer(w.colorSpace)!==ye,w.matrixAutoUpdate===!0&&w.updateMatrix(),u.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||h!==w.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=w,h=w.version,d=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null))}function p(y,v){y.getRGB(La,j_(n)),i.buffers.color.setClear(La.r,La.g,La.b,v,o)}function M(){c!==void 0&&(c.geometry.dispose(),c.material.dispose()),u!==void 0&&(u.geometry.dispose(),u.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:g,addToRenderList:m,dispose:M}}function GT(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,L,I,F,X){let Y=!1;const W=f(F,I,L);s!==W&&(s=W,u(s.object)),Y=d(S,F,I,X),Y&&_(S,F,I,X),X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,v(S,L,I,F),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return n.createVertexArray()}function u(S){return n.bindVertexArray(S)}function c(S){return n.deleteVertexArray(S)}function f(S,L,I){const F=I.wireframe===!0;let X=i[S.id];X===void 0&&(X={},i[S.id]=X);let Y=X[L.id];Y===void 0&&(Y={},X[L.id]=Y);let W=Y[F];return W===void 0&&(W=h(l()),Y[F]=W),W}function h(S){const L=[],I=[],F=[];for(let X=0;X<e;X++)L[X]=0,I[X]=0,F[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:I,attributeDivisors:F,object:S,attributes:{},index:null}}function d(S,L,I,F){const X=s.attributes,Y=L.attributes;let W=0;const $=I.getAttributes();for(const V in $)if($[V].location>=0){const gt=X[V];let St=Y[V];if(St===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(St=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(St=S.instanceColor)),gt===void 0||gt.attribute!==St||St&&gt.data!==St.data)return!0;W++}return s.attributesNum!==W||s.index!==F}function _(S,L,I,F){const X={},Y=L.attributes;let W=0;const $=I.getAttributes();for(const V in $)if($[V].location>=0){let gt=Y[V];gt===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(gt=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(gt=S.instanceColor));const St={};St.attribute=gt,gt&&gt.data&&(St.data=gt.data),X[V]=St,W++}s.attributes=X,s.attributesNum=W,s.index=F}function g(){const S=s.newAttributes;for(let L=0,I=S.length;L<I;L++)S[L]=0}function m(S){p(S,0)}function p(S,L){const I=s.newAttributes,F=s.enabledAttributes,X=s.attributeDivisors;I[S]=1,F[S]===0&&(n.enableVertexAttribArray(S),F[S]=1),X[S]!==L&&(n.vertexAttribDivisor(S,L),X[S]=L)}function M(){const S=s.newAttributes,L=s.enabledAttributes;for(let I=0,F=L.length;I<F;I++)L[I]!==S[I]&&(n.disableVertexAttribArray(I),L[I]=0)}function y(S,L,I,F,X,Y,W){W===!0?n.vertexAttribIPointer(S,L,I,X,Y):n.vertexAttribPointer(S,L,I,F,X,Y)}function v(S,L,I,F){g();const X=F.attributes,Y=I.getAttributes(),W=L.defaultAttributeValues;for(const $ in Y){const V=Y[$];if(V.location>=0){let vt=X[$];if(vt===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(vt=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(vt=S.instanceColor)),vt!==void 0){const gt=vt.normalized,St=vt.itemSize,Lt=t.get(vt);if(Lt===void 0)continue;const Qt=Lt.buffer,it=Lt.type,_t=Lt.bytesPerElement,at=it===n.INT||it===n.UNSIGNED_INT||vt.gpuType===Ff;if(vt.isInterleavedBufferAttribute){const pt=vt.data,wt=pt.stride,Dt=vt.offset;if(pt.isInstancedInterleavedBuffer){for(let Bt=0;Bt<V.locationSize;Bt++)p(V.location+Bt,pt.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Bt=0;Bt<V.locationSize;Bt++)m(V.location+Bt);n.bindBuffer(n.ARRAY_BUFFER,Qt);for(let Bt=0;Bt<V.locationSize;Bt++)y(V.location+Bt,St/V.locationSize,it,gt,wt*_t,(Dt+St/V.locationSize*Bt)*_t,at)}else{if(vt.isInstancedBufferAttribute){for(let pt=0;pt<V.locationSize;pt++)p(V.location+pt,vt.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let pt=0;pt<V.locationSize;pt++)m(V.location+pt);n.bindBuffer(n.ARRAY_BUFFER,Qt);for(let pt=0;pt<V.locationSize;pt++)y(V.location+pt,St/V.locationSize,it,gt,St*_t,St/V.locationSize*pt*_t,at)}}else if(W!==void 0){const gt=W[$];if(gt!==void 0)switch(gt.length){case 2:n.vertexAttrib2fv(V.location,gt);break;case 3:n.vertexAttrib3fv(V.location,gt);break;case 4:n.vertexAttrib4fv(V.location,gt);break;default:n.vertexAttrib1fv(V.location,gt)}}}}M()}function w(){P();for(const S in i){const L=i[S];for(const I in L){const F=L[I];for(const X in F)c(F[X].object),delete F[X];delete L[I]}delete i[S]}}function b(S){if(i[S.id]===void 0)return;const L=i[S.id];for(const I in L){const F=L[I];for(const X in F)c(F[X].object),delete F[X];delete L[I]}delete i[S.id]}function R(S){for(const L in i){const I=i[L];if(I[S.id]===void 0)continue;const F=I[S.id];for(const X in F)c(F[X].object),delete F[X];delete I[S.id]}}function P(){x(),o=!0,s!==r&&(s=r,u(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:x,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:m,disableUnusedAttributes:M}}function WT(n,t,e){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),e.update(c,i,1)}function o(u,c,f){f!==0&&(n.drawArraysInstanced(i,u,c,f),e.update(c,i,f))}function a(u,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let d=0;for(let _=0;_<f;_++)d+=c[_];e.update(d,i,1)}function l(u,c,f,h){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<u.length;_++)o(u[_],c[_],h[_]);else{d.multiDrawArraysInstancedWEBGL(i,u,0,c,0,h,0,f);let _=0;for(let g=0;g<f;g++)_+=c[g]*h[g];e.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function XT(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==ri&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const P=R===ta&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==qi&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Fi&&!P)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=_>0,b=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:w,maxSamples:b}}function qT(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new zr,a=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=c(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?c(null):u();else{const M=s?0:i,y=M*4;let v=p.clippingState||null;l.value=v,v=c(_,h,y,d);for(let w=0;w!==y;++w)v[w]=e[w];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(f,h,d,_){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=d+g*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=d;y!==g;++y,v+=4)o.copy(f[y]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function YT(n){let t=new WeakMap;function e(o,a){return a===vu?o.mapping=Ys:a===xu&&(o.mapping=$s),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===vu||a===xu)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new DM(l.height);return u.fromEquirectangularTexture(n,o),t.set(o,u),o.addEventListener("dispose",r),e(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const Cs=4,Xd=[.125,.215,.35,.446,.526,.582],Wr=20,Pc=new sg,qd=new Zt;let Dc=null,Lc=0,Ic=0,Uc=!1;const kr=(1+Math.sqrt(5))/2,Ss=1/kr,Yd=[new U(-kr,Ss,0),new U(kr,Ss,0),new U(-Ss,0,kr),new U(Ss,0,kr),new U(0,kr,-Ss),new U(0,kr,Ss),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class $d{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){Dc=this._renderer.getRenderTarget(),Lc=this._renderer.getActiveCubeFace(),Ic=this._renderer.getActiveMipmapLevel(),Uc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Dc,Lc,Ic),this._renderer.xr.enabled=Uc,t.scissorTest=!1,Ia(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ys||t.mapping===$s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Dc=this._renderer.getRenderTarget(),Lc=this._renderer.getActiveCubeFace(),Ic=this._renderer.getActiveMipmapLevel(),Uc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:vi,minFilter:vi,generateMipmaps:!1,type:ta,format:ri,colorSpace:Zs,depthBuffer:!1},r=Kd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kd(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$T(s)),this._blurMaterial=KT(s,t,e)}return r}_compileMaterial(t){const e=new xe(this._lodPlanes[0],t);this._renderer.compile(e,Pc)}_sceneToCubeUV(t,e,i,r){const a=new Sn(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(qd),c.toneMapping=pr,c.autoClear=!1;const d=new He({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1}),_=new xe(new ra,d);let g=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,g=!0):(d.color.copy(qd),g=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(u[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,u[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,u[p]));const y=this._cubeSize;Ia(r,M*y,p>2?y:0,y,y),c.setRenderTarget(r),g&&c.render(_,a),c.render(t,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=h,c.autoClear=f,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Ys||t.mapping===$s;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jd());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new xe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Ia(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Pc)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Yd[(r-s-1)%Yd.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new xe(this._lodPlanes[r],u),h=u.uniforms,d=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Wr-1),g=s/_,m=isFinite(s)?1+Math.floor(c*g):Wr;m>Wr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wr}`);const p=[];let M=0;for(let R=0;R<Wr;++R){const P=R/g,x=Math.exp(-P*P/2);p.push(x),R===0?M+=x:R<m&&(M+=2*x)}for(let R=0;R<p.length;R++)p[R]=p[R]/M;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=_,h.mipInt.value=y-i;const v=this._sizeLods[r],w=3*v*(r>y-Cs?r-y+Cs:0),b=4*(this._cubeSize-v);Ia(e,w,b,3*v,2*v),l.setRenderTarget(e),l.render(f,Pc)}}function $T(n){const t=[],e=[],i=[];let r=n;const s=n-Cs+1+Xd.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-Cs?l=Xd[o-n+Cs-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],d=6,_=6,g=3,m=2,p=1,M=new Float32Array(g*_*d),y=new Float32Array(m*_*d),v=new Float32Array(p*_*d);for(let b=0;b<d;b++){const R=b%3*2/3-1,P=b>2?0:-1,x=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];M.set(x,g*_*b),y.set(h,m*_*b);const S=[b,b,b,b,b,b];v.set(S,p*_*b)}const w=new _n;w.setAttribute("position",new Kn(M,g)),w.setAttribute("uv",new Kn(y,m)),w.setAttribute("faceIndex",new Kn(v,p)),t.push(w),r>Cs&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Kd(n,t,e){const i=new is(n,t,e);return i.texture.mapping=Rl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ia(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function KT(n,t,e){const i=new Float32Array(Wr),r=new U(0,1,0);return new yr({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:th(),fragmentShader:`

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
		`,blending:dr,depthTest:!1,depthWrite:!1})}function jd(){return new yr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:th(),fragmentShader:`

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
		`,blending:dr,depthTest:!1,depthWrite:!1})}function Zd(){return new yr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function th(){return`

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
	`}function jT(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===vu||l===xu,c=l===Ys||l===$s;if(u||c){let f=t.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new $d(n)),f=u?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return u&&d&&d.height>0||c&&d&&r(d)?(e===null&&(e=new $d(n)),f=u?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function ZT(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&bs("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function JT(n,t,e,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const _ in h.attributes)t.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(t.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)t.update(h[d],n.ARRAY_BUFFER)}function u(f){const h=[],d=f.index,_=f.attributes.position;let g=0;if(d!==null){const M=d.array;g=d.version;for(let y=0,v=M.length;y<v;y+=3){const w=M[y+0],b=M[y+1],R=M[y+2];h.push(w,b,b,R,R,w)}}else if(_!==void 0){const M=_.array;g=_.version;for(let y=0,v=M.length/3-1;y<v;y+=3){const w=y+0,b=y+1,R=y+2;h.push(w,b,b,R,R,w)}}else return;const m=new(W_(h)?K_:$_)(h,1);m.version=g;const p=s.get(f);p&&t.remove(p),s.set(f,m)}function c(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function QT(n,t,e){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,s,h*o),e.update(d,i,1)}function u(h,d,_){_!==0&&(n.drawElementsInstanced(i,d,s,h*o,_),e.update(d,i,_))}function c(h,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];e.update(m,i,1)}function f(h,d,_,g){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)u(h[p]/o,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,g,0,_);let p=0;for(let M=0;M<_;M++)p+=d[M]*g[M];e.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function tb(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function eb(n,t,e){const i=new WeakMap,r=new Se;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let S=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var d=S;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;_===!0&&(v=1),g===!0&&(v=2),m===!0&&(v=3);let w=a.attributes.position.count*v,b=1;w>t.maxTextureSize&&(b=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const R=new Float32Array(w*b*4*f),P=new q_(R,w,b,f);P.type=Fi,P.needsUpdate=!0;const x=v*4;for(let L=0;L<f;L++){const I=p[L],F=M[L],X=y[L],Y=w*b*4*L;for(let W=0;W<I.count;W++){const $=W*x;_===!0&&(r.fromBufferAttribute(I,W),R[Y+$+0]=r.x,R[Y+$+1]=r.y,R[Y+$+2]=r.z,R[Y+$+3]=0),g===!0&&(r.fromBufferAttribute(F,W),R[Y+$+4]=r.x,R[Y+$+5]=r.y,R[Y+$+6]=r.z,R[Y+$+7]=0),m===!0&&(r.fromBufferAttribute(X,W),R[Y+$+8]=r.x,R[Y+$+9]=r.y,R[Y+$+10]=r.z,R[Y+$+11]=X.itemSize===4?r.w:1)}}h={count:f,texture:P,size:new Ft(w,b)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let _=0;for(let m=0;m<u.length;m++)_+=u[m];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function nb(n,t,e,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=t.get(l,c);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:s,dispose:o}}const lg=new mn,Jd=new tg(1,1),cg=new q_,ug=new mM,fg=new J_,Qd=[],tp=[],ep=new Float32Array(16),np=new Float32Array(9),ip=new Float32Array(4);function eo(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Qd[r];if(s===void 0&&(s=new Float32Array(r),Qd[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function Xe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function qe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Dl(n,t){let e=tp[t];e===void 0&&(e=new Int32Array(t),tp[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function ib(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function rb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;n.uniform2fv(this.addr,t),qe(e,t)}}function sb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Xe(e,t))return;n.uniform3fv(this.addr,t),qe(e,t)}}function ob(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;n.uniform4fv(this.addr,t),qe(e,t)}}function ab(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Xe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,i))return;ip.set(i),n.uniformMatrix2fv(this.addr,!1,ip),qe(e,i)}}function lb(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Xe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,i))return;np.set(i),n.uniformMatrix3fv(this.addr,!1,np),qe(e,i)}}function cb(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Xe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,i))return;ep.set(i),n.uniformMatrix4fv(this.addr,!1,ep),qe(e,i)}}function ub(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function fb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;n.uniform2iv(this.addr,t),qe(e,t)}}function hb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;n.uniform3iv(this.addr,t),qe(e,t)}}function db(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;n.uniform4iv(this.addr,t),qe(e,t)}}function pb(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function mb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;n.uniform2uiv(this.addr,t),qe(e,t)}}function _b(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;n.uniform3uiv(this.addr,t),qe(e,t)}}function gb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;n.uniform4uiv(this.addr,t),qe(e,t)}}function vb(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Jd.compareFunction=G_,s=Jd):s=lg,e.setTexture2D(t||s,r)}function xb(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||ug,r)}function yb(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||fg,r)}function Mb(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||cg,r)}function Sb(n){switch(n){case 5126:return ib;case 35664:return rb;case 35665:return sb;case 35666:return ob;case 35674:return ab;case 35675:return lb;case 35676:return cb;case 5124:case 35670:return ub;case 35667:case 35671:return fb;case 35668:case 35672:return hb;case 35669:case 35673:return db;case 5125:return pb;case 36294:return mb;case 36295:return _b;case 36296:return gb;case 35678:case 36198:case 36298:case 36306:case 35682:return vb;case 35679:case 36299:case 36307:return xb;case 35680:case 36300:case 36308:case 36293:return yb;case 36289:case 36303:case 36311:case 36292:return Mb}}function Eb(n,t){n.uniform1fv(this.addr,t)}function Tb(n,t){const e=eo(t,this.size,2);n.uniform2fv(this.addr,e)}function bb(n,t){const e=eo(t,this.size,3);n.uniform3fv(this.addr,e)}function Ab(n,t){const e=eo(t,this.size,4);n.uniform4fv(this.addr,e)}function wb(n,t){const e=eo(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Cb(n,t){const e=eo(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Rb(n,t){const e=eo(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Pb(n,t){n.uniform1iv(this.addr,t)}function Db(n,t){n.uniform2iv(this.addr,t)}function Lb(n,t){n.uniform3iv(this.addr,t)}function Ib(n,t){n.uniform4iv(this.addr,t)}function Ub(n,t){n.uniform1uiv(this.addr,t)}function Nb(n,t){n.uniform2uiv(this.addr,t)}function Ob(n,t){n.uniform3uiv(this.addr,t)}function Fb(n,t){n.uniform4uiv(this.addr,t)}function Bb(n,t,e){const i=this.cache,r=t.length,s=Dl(e,r);Xe(i,s)||(n.uniform1iv(this.addr,s),qe(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||lg,s[o])}function zb(n,t,e){const i=this.cache,r=t.length,s=Dl(e,r);Xe(i,s)||(n.uniform1iv(this.addr,s),qe(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||ug,s[o])}function kb(n,t,e){const i=this.cache,r=t.length,s=Dl(e,r);Xe(i,s)||(n.uniform1iv(this.addr,s),qe(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||fg,s[o])}function Vb(n,t,e){const i=this.cache,r=t.length,s=Dl(e,r);Xe(i,s)||(n.uniform1iv(this.addr,s),qe(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||cg,s[o])}function Hb(n){switch(n){case 5126:return Eb;case 35664:return Tb;case 35665:return bb;case 35666:return Ab;case 35674:return wb;case 35675:return Cb;case 35676:return Rb;case 5124:case 35670:return Pb;case 35667:case 35671:return Db;case 35668:case 35672:return Lb;case 35669:case 35673:return Ib;case 5125:return Ub;case 36294:return Nb;case 36295:return Ob;case 36296:return Fb;case 35678:case 36198:case 36298:case 36306:case 35682:return Bb;case 35679:case 36299:case 36307:return zb;case 35680:case 36300:case 36308:case 36293:return kb;case 36289:case 36303:case 36311:case 36292:return Vb}}class Gb{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Sb(e.type)}}class Wb{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Hb(e.type)}}class Xb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const Nc=/(\w+)(\])?(\[|\.)?/g;function rp(n,t){n.seq.push(t),n.map[t.id]=t}function qb(n,t,e){const i=n.name,r=i.length;for(Nc.lastIndex=0;;){const s=Nc.exec(i),o=Nc.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){rp(e,u===void 0?new Gb(a,n,t):new Wb(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new Xb(a),rp(e,f)),e=f}}}class Ka{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);qb(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function sp(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Yb=37297;let $b=0;function Kb(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const op=new te;function jb(n){ue._getMatrix(op,ue.workingColorSpace,n);const t=`mat3( ${op.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(n)){case hl:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function ap(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Kb(n.getShaderSource(t),o)}else return r}function Zb(n,t){const e=jb(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Jb(n,t){let e;switch(t){case Vy:e="Linear";break;case Hy:e="Reinhard";break;case Gy:e="Cineon";break;case Wy:e="ACESFilmic";break;case qy:e="AgX";break;case Yy:e="Neutral";break;case Xy:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ua=new U;function Qb(){ue.getLuminanceCoefficients(Ua);const n=Ua.x.toFixed(4),t=Ua.y.toFixed(4),e=Ua.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function t1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vo).join(`
`)}function e1(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function n1(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function vo(n){return n!==""}function lp(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cp(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const i1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ju(n){return n.replace(i1,s1)}const r1=new Map;function s1(n,t){let e=ee[t];if(e===void 0){const i=r1.get(t);if(i!==void 0)e=ee[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ju(e)}const o1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function up(n){return n.replace(o1,a1)}function a1(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function fp(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function l1(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===R_?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===yy?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Pi&&(t="SHADOWMAP_TYPE_VSM"),t}function c1(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ys:case $s:t="ENVMAP_TYPE_CUBE";break;case Rl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function u1(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case $s:t="ENVMAP_MODE_REFRACTION";break}return t}function f1(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case P_:t="ENVMAP_BLENDING_MULTIPLY";break;case zy:t="ENVMAP_BLENDING_MIX";break;case ky:t="ENVMAP_BLENDING_ADD";break}return t}function h1(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function d1(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=l1(e),u=c1(e),c=u1(e),f=f1(e),h=h1(e),d=t1(e),_=e1(s),g=r.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(vo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(vo).join(`
`),p.length>0&&(p+=`
`)):(m=[fp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vo).join(`
`),p=[fp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pr?"#define TONE_MAPPING":"",e.toneMapping!==pr?ee.tonemapping_pars_fragment:"",e.toneMapping!==pr?Jb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,Zb("linearToOutputTexel",e.outputColorSpace),Qb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vo).join(`
`)),o=Ju(o),o=lp(o,e),o=cp(o,e),a=Ju(a),a=lp(a,e),a=cp(a,e),o=up(o),a=up(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===dd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===dd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=M+m+o,v=M+p+a,w=sp(r,r.VERTEX_SHADER,y),b=sp(r,r.FRAGMENT_SHADER,v);r.attachShader(g,w),r.attachShader(g,b),e.index0AttributeName!==void 0?r.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function R(L){if(n.debug.checkShaderErrors){const I=r.getProgramInfoLog(g).trim(),F=r.getShaderInfoLog(w).trim(),X=r.getShaderInfoLog(b).trim();let Y=!0,W=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,w,b);else{const $=ap(r,w,"vertex"),V=ap(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+I+`
`+$+`
`+V)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(F===""||X==="")&&(W=!1);W&&(L.diagnostics={runnable:Y,programLog:I,vertexShader:{log:F,prefix:m},fragmentShader:{log:X,prefix:p}})}r.deleteShader(w),r.deleteShader(b),P=new Ka(r,g),x=n1(r,g)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let x;this.getAttributes=function(){return x===void 0&&R(this),x};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(g,Yb)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$b++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=b,this}let p1=0;class m1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new _1(t),e.set(t,i)),i}}class _1{constructor(t){this.id=p1++,this.code=t,this.usedTimes=0}}function g1(n,t,e,i,r,s,o){const a=new Wf,l=new m1,u=new Set,c=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return u.add(x),x===0?"uv":`uv${x}`}function m(x,S,L,I,F){const X=I.fog,Y=F.geometry,W=x.isMeshStandardMaterial?I.environment:null,$=(x.isMeshStandardMaterial?e:t).get(x.envMap||W),V=$&&$.mapping===Rl?$.image.height:null,vt=_[x.type];x.precision!==null&&(d=r.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const gt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,St=gt!==void 0?gt.length:0;let Lt=0;Y.morphAttributes.position!==void 0&&(Lt=1),Y.morphAttributes.normal!==void 0&&(Lt=2),Y.morphAttributes.color!==void 0&&(Lt=3);let Qt,it,_t,at;if(vt){const Ut=mi[vt];Qt=Ut.vertexShader,it=Ut.fragmentShader}else Qt=x.vertexShader,it=x.fragmentShader,l.update(x),_t=l.getVertexShaderID(x),at=l.getFragmentShaderID(x);const pt=n.getRenderTarget(),wt=n.state.buffers.depth.getReversed(),Dt=F.isInstancedMesh===!0,Bt=F.isBatchedMesh===!0,oe=!!x.map,D=!!x.matcap,O=!!$,A=!!x.aoMap,lt=!!x.lightMap,Q=!!x.bumpMap,et=!!x.normalMap,nt=!!x.displacementMap,ut=!!x.emissiveMap,tt=!!x.metalnessMap,T=!!x.roughnessMap,E=x.anisotropy>0,N=x.clearcoat>0,G=x.dispersion>0,K=x.iridescence>0,q=x.sheen>0,Mt=x.transmission>0,ht=E&&!!x.anisotropyMap,dt=N&&!!x.clearcoatMap,ct=N&&!!x.clearcoatNormalMap,st=N&&!!x.clearcoatRoughnessMap,xt=K&&!!x.iridescenceMap,Ot=K&&!!x.iridescenceThicknessMap,Vt=q&&!!x.sheenColorMap,Et=q&&!!x.sheenRoughnessMap,Xt=!!x.specularMap,Yt=!!x.specularColorMap,de=!!x.specularIntensityMap,z=Mt&&!!x.transmissionMap,At=Mt&&!!x.thicknessMap,ot=!!x.gradientMap,ft=!!x.alphaMap,Pt=x.alphaTest>0,B=!!x.alphaHash,j=!!x.extensions;let mt=pr;x.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(mt=n.toneMapping);const Tt={shaderID:vt,shaderType:x.type,shaderName:x.name,vertexShader:Qt,fragmentShader:it,defines:x.defines,customVertexShaderID:_t,customFragmentShaderID:at,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Bt,batchingColor:Bt&&F._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&F.instanceColor!==null,instancingMorph:Dt&&F.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:pt===null?n.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:Zs,alphaToCoverage:!!x.alphaToCoverage,map:oe,matcap:D,envMap:O,envMapMode:O&&$.mapping,envMapCubeUVHeight:V,aoMap:A,lightMap:lt,bumpMap:Q,normalMap:et,displacementMap:h&&nt,emissiveMap:ut,normalMapObjectSpace:et&&x.normalMapType===Zy,normalMapTangentSpace:et&&x.normalMapType===H_,metalnessMap:tt,roughnessMap:T,anisotropy:E,anisotropyMap:ht,clearcoat:N,clearcoatMap:dt,clearcoatNormalMap:ct,clearcoatRoughnessMap:st,dispersion:G,iridescence:K,iridescenceMap:xt,iridescenceThicknessMap:Ot,sheen:q,sheenColorMap:Vt,sheenRoughnessMap:Et,specularMap:Xt,specularColorMap:Yt,specularIntensityMap:de,transmission:Mt,transmissionMap:z,thicknessMap:At,gradientMap:ot,opaque:x.transparent===!1&&x.blending===Os&&x.alphaToCoverage===!1,alphaMap:ft,alphaTest:Pt,alphaHash:B,combine:x.combine,mapUv:oe&&g(x.map.channel),aoMapUv:A&&g(x.aoMap.channel),lightMapUv:lt&&g(x.lightMap.channel),bumpMapUv:Q&&g(x.bumpMap.channel),normalMapUv:et&&g(x.normalMap.channel),displacementMapUv:nt&&g(x.displacementMap.channel),emissiveMapUv:ut&&g(x.emissiveMap.channel),metalnessMapUv:tt&&g(x.metalnessMap.channel),roughnessMapUv:T&&g(x.roughnessMap.channel),anisotropyMapUv:ht&&g(x.anisotropyMap.channel),clearcoatMapUv:dt&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ct&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Et&&g(x.sheenRoughnessMap.channel),specularMapUv:Xt&&g(x.specularMap.channel),specularColorMapUv:Yt&&g(x.specularColorMap.channel),specularIntensityMapUv:de&&g(x.specularIntensityMap.channel),transmissionMapUv:z&&g(x.transmissionMap.channel),thicknessMapUv:At&&g(x.thicknessMap.channel),alphaMapUv:ft&&g(x.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(et||E),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Y.attributes.uv&&(oe||ft),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:wt,skinning:F.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Lt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:mt,decodeVideoTexture:oe&&x.map.isVideoTexture===!0&&ue.getTransfer(x.map.colorSpace)===ye,decodeVideoTextureEmissive:ut&&x.emissiveMap.isVideoTexture===!0&&ue.getTransfer(x.emissiveMap.colorSpace)===ye,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ze,flipSided:x.side===Qe,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:j&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(j&&x.extensions.multiDraw===!0||Bt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Tt.vertexUv1s=u.has(1),Tt.vertexUv2s=u.has(2),Tt.vertexUv3s=u.has(3),u.clear(),Tt}function p(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)S.push(L),S.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(M(S,x),y(S,x),S.push(n.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function M(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function y(x,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),x.push(a.mask)}function v(x){const S=_[x.type];let L;if(S){const I=mi[S];L=wM.clone(I.uniforms)}else L=x.uniforms;return L}function w(x,S){let L;for(let I=0,F=c.length;I<F;I++){const X=c[I];if(X.cacheKey===S){L=X,++L.usedTimes;break}}return L===void 0&&(L=new d1(n,S,x,s),c.push(L)),L}function b(x){if(--x.usedTimes===0){const S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),x.destroy()}}function R(x){l.remove(x)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:w,releaseProgram:b,releaseShaderCache:R,programs:c,dispose:P}}function v1(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function x1(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function hp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function dp(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(f,h,d,_,g,m){let p=n[t];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},n[t]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=g,p.group=m),t++,p}function a(f,h,d,_,g,m){const p=o(f,h,d,_,g,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):e.push(p)}function l(f,h,d,_,g,m){const p=o(f,h,d,_,g,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):e.unshift(p)}function u(f,h){e.length>1&&e.sort(f||x1),i.length>1&&i.sort(h||hp),r.length>1&&r.sort(h||hp)}function c(){for(let f=t,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function y1(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new dp,n.set(i,[o])):r>=s.length?(o=new dp,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function M1(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Zt};break;case"SpotLight":e={position:new U,direction:new U,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new U,halfWidth:new U,halfHeight:new U};break}return n[t.id]=e,e}}}function S1(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let E1=0;function T1(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function b1(n){const t=new M1,e=S1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new U);const r=new U,s=new we,o=new we;function a(u){let c=0,f=0,h=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let d=0,_=0,g=0,m=0,p=0,M=0,y=0,v=0,w=0,b=0,R=0;u.sort(T1);for(let x=0,S=u.length;x<S;x++){const L=u[x],I=L.color,F=L.intensity,X=L.distance,Y=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)c+=I.r*F,f+=I.g*F,h+=I.b*F;else if(L.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(L.sh.coefficients[W],F);R++}else if(L.isDirectionalLight){const W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const $=L.shadow,V=e.get(L);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,i.directionalShadow[d]=V,i.directionalShadowMap[d]=Y,i.directionalShadowMatrix[d]=L.shadow.matrix,M++}i.directional[d]=W,d++}else if(L.isSpotLight){const W=t.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(I).multiplyScalar(F),W.distance=X,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,i.spot[g]=W;const $=L.shadow;if(L.map&&(i.spotLightMap[w]=L.map,w++,$.updateMatrices(L),L.castShadow&&b++),i.spotLightMatrix[g]=$.matrix,L.castShadow){const V=e.get(L);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,i.spotShadow[g]=V,i.spotShadowMap[g]=Y,v++}g++}else if(L.isRectAreaLight){const W=t.get(L);W.color.copy(I).multiplyScalar(F),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=W,m++}else if(L.isPointLight){const W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){const $=L.shadow,V=e.get(L);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,V.shadowCameraNear=$.camera.near,V.shadowCameraFar=$.camera.far,i.pointShadow[_]=V,i.pointShadowMap[_]=Y,i.pointShadowMatrix[_]=L.shadow.matrix,y++}i.point[_]=W,_++}else if(L.isHemisphereLight){const W=t.get(L);W.skyColor.copy(L.color).multiplyScalar(F),W.groundColor.copy(L.groundColor).multiplyScalar(F),i.hemi[p]=W,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=bt.LTC_FLOAT_1,i.rectAreaLTC2=bt.LTC_FLOAT_2):(i.rectAreaLTC1=bt.LTC_HALF_1,i.rectAreaLTC2=bt.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=h;const P=i.hash;(P.directionalLength!==d||P.pointLength!==_||P.spotLength!==g||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==M||P.numPointShadows!==y||P.numSpotShadows!==v||P.numSpotMaps!==w||P.numLightProbes!==R)&&(i.directional.length=d,i.spot.length=g,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+w-b,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=R,P.directionalLength=d,P.pointLength=_,P.spotLength=g,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=M,P.numPointShadows=y,P.numSpotShadows=v,P.numSpotMaps=w,P.numLightProbes=R,i.version=E1++)}function l(u,c){let f=0,h=0,d=0,_=0,g=0;const m=c.matrixWorldInverse;for(let p=0,M=u.length;p<M;p++){const y=u[p];if(y.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),f++}else if(y.isSpotLight){const v=i.spot[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const v=i.rectArea[_];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const v=i.point[h];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const v=i.hemi[g];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function pp(n){const t=new b1(n),e=[],i=[];function r(c){u.camera=c,e.length=0,i.length=0}function s(c){e.push(c)}function o(c){i.push(c)}function a(){t.setup(e)}function l(c){t.setupView(e,c)}const u={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function A1(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new pp(n),t.set(r,[a])):s>=o.length?(a=new pp(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const w1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C1=`uniform sampler2D shadow_pass;
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
}`;function R1(n,t,e){let i=new qf;const r=new Ft,s=new Ft,o=new Se,a=new KM({depthPacking:jy}),l=new jM,u={},c=e.maxTextureSize,f={[Xi]:Qe,[Qe]:Xi,[Ze]:Ze},h=new yr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:w1,fragmentShader:C1}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new _n;_.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new xe(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=R_;let p=this.type;this.render=function(b,R,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const x=n.getRenderTarget(),S=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),I=n.state;I.setBlending(dr),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const F=p!==Pi&&this.type===Pi,X=p===Pi&&this.type!==Pi;for(let Y=0,W=b.length;Y<W;Y++){const $=b[Y],V=$.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const vt=V.getFrameExtents();if(r.multiply(vt),s.copy(V.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/vt.x),r.x=s.x*vt.x,V.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/vt.y),r.y=s.y*vt.y,V.mapSize.y=s.y)),V.map===null||F===!0||X===!0){const St=this.type!==Pi?{minFilter:oi,magFilter:oi}:{};V.map!==null&&V.map.dispose(),V.map=new is(r.x,r.y,St),V.map.texture.name=$.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const gt=V.getViewportCount();for(let St=0;St<gt;St++){const Lt=V.getViewport(St);o.set(s.x*Lt.x,s.y*Lt.y,s.x*Lt.z,s.y*Lt.w),I.viewport(o),V.updateMatrices($,St),i=V.getFrustum(),v(R,P,V.camera,$,this.type)}V.isPointLightShadow!==!0&&this.type===Pi&&M(V,P),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(x,S,L)};function M(b,R){const P=t.update(g);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new is(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(R,null,P,h,g,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(R,null,P,d,g,null)}function y(b,R,P,x){let S=null;const L=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)S=L;else if(S=P.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const I=S.uuid,F=R.uuid;let X=u[I];X===void 0&&(X={},u[I]=X);let Y=X[F];Y===void 0&&(Y=S.clone(),X[F]=Y,R.addEventListener("dispose",w)),S=Y}if(S.visible=R.visible,S.wireframe=R.wireframe,x===Pi?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:f[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const I=n.properties.get(S);I.light=P}return S}function v(b,R,P,x,S){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===Pi)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const F=t.update(b),X=b.material;if(Array.isArray(X)){const Y=F.groups;for(let W=0,$=Y.length;W<$;W++){const V=Y[W],vt=X[V.materialIndex];if(vt&&vt.visible){const gt=y(b,vt,x,S);b.onBeforeShadow(n,b,R,P,F,gt,V),n.renderBufferDirect(P,null,F,gt,b,V),b.onAfterShadow(n,b,R,P,F,gt,V)}}}else if(X.visible){const Y=y(b,X,x,S);b.onBeforeShadow(n,b,R,P,F,Y,null),n.renderBufferDirect(P,null,F,Y,b,null),b.onAfterShadow(n,b,R,P,F,Y,null)}}const I=b.children;for(let F=0,X=I.length;F<X;F++)v(I[F],R,P,x,S)}function w(b){b.target.removeEventListener("dispose",w);for(const P in u){const x=u[P],S=b.target.uuid;S in x&&(x[S].dispose(),delete x[S])}}}const P1={[fu]:hu,[du]:_u,[pu]:gu,[qs]:mu,[hu]:fu,[_u]:du,[gu]:pu,[mu]:qs};function D1(n,t){function e(){let z=!1;const At=new Se;let ot=null;const ft=new Se(0,0,0,0);return{setMask:function(Pt){ot!==Pt&&!z&&(n.colorMask(Pt,Pt,Pt,Pt),ot=Pt)},setLocked:function(Pt){z=Pt},setClear:function(Pt,B,j,mt,Tt){Tt===!0&&(Pt*=mt,B*=mt,j*=mt),At.set(Pt,B,j,mt),ft.equals(At)===!1&&(n.clearColor(Pt,B,j,mt),ft.copy(At))},reset:function(){z=!1,ot=null,ft.set(-1,0,0,0)}}}function i(){let z=!1,At=!1,ot=null,ft=null,Pt=null;return{setReversed:function(B){if(At!==B){const j=t.get("EXT_clip_control");At?j.clipControlEXT(j.LOWER_LEFT_EXT,j.ZERO_TO_ONE_EXT):j.clipControlEXT(j.LOWER_LEFT_EXT,j.NEGATIVE_ONE_TO_ONE_EXT);const mt=Pt;Pt=null,this.setClear(mt)}At=B},getReversed:function(){return At},setTest:function(B){B?pt(n.DEPTH_TEST):wt(n.DEPTH_TEST)},setMask:function(B){ot!==B&&!z&&(n.depthMask(B),ot=B)},setFunc:function(B){if(At&&(B=P1[B]),ft!==B){switch(B){case fu:n.depthFunc(n.NEVER);break;case hu:n.depthFunc(n.ALWAYS);break;case du:n.depthFunc(n.LESS);break;case qs:n.depthFunc(n.LEQUAL);break;case pu:n.depthFunc(n.EQUAL);break;case mu:n.depthFunc(n.GEQUAL);break;case _u:n.depthFunc(n.GREATER);break;case gu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ft=B}},setLocked:function(B){z=B},setClear:function(B){Pt!==B&&(At&&(B=1-B),n.clearDepth(B),Pt=B)},reset:function(){z=!1,ot=null,ft=null,Pt=null,At=!1}}}function r(){let z=!1,At=null,ot=null,ft=null,Pt=null,B=null,j=null,mt=null,Tt=null;return{setTest:function(Ut){z||(Ut?pt(n.STENCIL_TEST):wt(n.STENCIL_TEST))},setMask:function(Ut){At!==Ut&&!z&&(n.stencilMask(Ut),At=Ut)},setFunc:function(Ut,ve,ie){(ot!==Ut||ft!==ve||Pt!==ie)&&(n.stencilFunc(Ut,ve,ie),ot=Ut,ft=ve,Pt=ie)},setOp:function(Ut,ve,ie){(B!==Ut||j!==ve||mt!==ie)&&(n.stencilOp(Ut,ve,ie),B=Ut,j=ve,mt=ie)},setLocked:function(Ut){z=Ut},setClear:function(Ut){Tt!==Ut&&(n.clearStencil(Ut),Tt=Ut)},reset:function(){z=!1,At=null,ot=null,ft=null,Pt=null,B=null,j=null,mt=null,Tt=null}}}const s=new e,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},f={},h=new WeakMap,d=[],_=null,g=!1,m=null,p=null,M=null,y=null,v=null,w=null,b=null,R=new Zt(0,0,0),P=0,x=!1,S=null,L=null,I=null,F=null,X=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,$=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=$>=1):V.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=$>=2);let vt=null,gt={};const St=n.getParameter(n.SCISSOR_BOX),Lt=n.getParameter(n.VIEWPORT),Qt=new Se().fromArray(St),it=new Se().fromArray(Lt);function _t(z,At,ot,ft){const Pt=new Uint8Array(4),B=n.createTexture();n.bindTexture(z,B),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let j=0;j<ot;j++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(At,0,n.RGBA,1,1,ft,0,n.RGBA,n.UNSIGNED_BYTE,Pt):n.texImage2D(At+j,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Pt);return B}const at={};at[n.TEXTURE_2D]=_t(n.TEXTURE_2D,n.TEXTURE_2D,1),at[n.TEXTURE_CUBE_MAP]=_t(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[n.TEXTURE_2D_ARRAY]=_t(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),at[n.TEXTURE_3D]=_t(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pt(n.DEPTH_TEST),o.setFunc(qs),Q(!1),et(ad),pt(n.CULL_FACE),A(dr);function pt(z){c[z]!==!0&&(n.enable(z),c[z]=!0)}function wt(z){c[z]!==!1&&(n.disable(z),c[z]=!1)}function Dt(z,At){return f[z]!==At?(n.bindFramebuffer(z,At),f[z]=At,z===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=At),z===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=At),!0):!1}function Bt(z,At){let ot=d,ft=!1;if(z){ot=h.get(At),ot===void 0&&(ot=[],h.set(At,ot));const Pt=z.textures;if(ot.length!==Pt.length||ot[0]!==n.COLOR_ATTACHMENT0){for(let B=0,j=Pt.length;B<j;B++)ot[B]=n.COLOR_ATTACHMENT0+B;ot.length=Pt.length,ft=!0}}else ot[0]!==n.BACK&&(ot[0]=n.BACK,ft=!0);ft&&n.drawBuffers(ot)}function oe(z){return _!==z?(n.useProgram(z),_=z,!0):!1}const D={[Hr]:n.FUNC_ADD,[Sy]:n.FUNC_SUBTRACT,[Ey]:n.FUNC_REVERSE_SUBTRACT};D[Ty]=n.MIN,D[by]=n.MAX;const O={[Ay]:n.ZERO,[wy]:n.ONE,[Cy]:n.SRC_COLOR,[cu]:n.SRC_ALPHA,[Uy]:n.SRC_ALPHA_SATURATE,[Ly]:n.DST_COLOR,[Py]:n.DST_ALPHA,[Ry]:n.ONE_MINUS_SRC_COLOR,[uu]:n.ONE_MINUS_SRC_ALPHA,[Iy]:n.ONE_MINUS_DST_COLOR,[Dy]:n.ONE_MINUS_DST_ALPHA,[Ny]:n.CONSTANT_COLOR,[Oy]:n.ONE_MINUS_CONSTANT_COLOR,[Fy]:n.CONSTANT_ALPHA,[By]:n.ONE_MINUS_CONSTANT_ALPHA};function A(z,At,ot,ft,Pt,B,j,mt,Tt,Ut){if(z===dr){g===!0&&(wt(n.BLEND),g=!1);return}if(g===!1&&(pt(n.BLEND),g=!0),z!==My){if(z!==m||Ut!==x){if((p!==Hr||v!==Hr)&&(n.blendEquation(n.FUNC_ADD),p=Hr,v=Hr),Ut)switch(z){case Os:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ld:n.blendFunc(n.ONE,n.ONE);break;case cd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ud:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Os:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ld:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case cd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ud:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}M=null,y=null,w=null,b=null,R.set(0,0,0),P=0,m=z,x=Ut}return}Pt=Pt||At,B=B||ot,j=j||ft,(At!==p||Pt!==v)&&(n.blendEquationSeparate(D[At],D[Pt]),p=At,v=Pt),(ot!==M||ft!==y||B!==w||j!==b)&&(n.blendFuncSeparate(O[ot],O[ft],O[B],O[j]),M=ot,y=ft,w=B,b=j),(mt.equals(R)===!1||Tt!==P)&&(n.blendColor(mt.r,mt.g,mt.b,Tt),R.copy(mt),P=Tt),m=z,x=!1}function lt(z,At){z.side===Ze?wt(n.CULL_FACE):pt(n.CULL_FACE);let ot=z.side===Qe;At&&(ot=!ot),Q(ot),z.blending===Os&&z.transparent===!1?A(dr):A(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),s.setMask(z.colorWrite);const ft=z.stencilWrite;a.setTest(ft),ft&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),ut(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?pt(n.SAMPLE_ALPHA_TO_COVERAGE):wt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Q(z){S!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),S=z)}function et(z){z!==vy?(pt(n.CULL_FACE),z!==L&&(z===ad?n.cullFace(n.BACK):z===xy?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):wt(n.CULL_FACE),L=z}function nt(z){z!==I&&(W&&n.lineWidth(z),I=z)}function ut(z,At,ot){z?(pt(n.POLYGON_OFFSET_FILL),(F!==At||X!==ot)&&(n.polygonOffset(At,ot),F=At,X=ot)):wt(n.POLYGON_OFFSET_FILL)}function tt(z){z?pt(n.SCISSOR_TEST):wt(n.SCISSOR_TEST)}function T(z){z===void 0&&(z=n.TEXTURE0+Y-1),vt!==z&&(n.activeTexture(z),vt=z)}function E(z,At,ot){ot===void 0&&(vt===null?ot=n.TEXTURE0+Y-1:ot=vt);let ft=gt[ot];ft===void 0&&(ft={type:void 0,texture:void 0},gt[ot]=ft),(ft.type!==z||ft.texture!==At)&&(vt!==ot&&(n.activeTexture(ot),vt=ot),n.bindTexture(z,At||at[z]),ft.type=z,ft.texture=At)}function N(){const z=gt[vt];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function G(){try{n.compressedTexImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function K(){try{n.compressedTexImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function q(){try{n.texSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Mt(){try{n.texSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ht(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function dt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ct(){try{n.texStorage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function st(){try{n.texStorage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xt(){try{n.texImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ot(){try{n.texImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Vt(z){Qt.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),Qt.copy(z))}function Et(z){it.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),it.copy(z))}function Xt(z,At){let ot=u.get(At);ot===void 0&&(ot=new WeakMap,u.set(At,ot));let ft=ot.get(z);ft===void 0&&(ft=n.getUniformBlockIndex(At,z.name),ot.set(z,ft))}function Yt(z,At){const ft=u.get(At).get(z);l.get(At)!==ft&&(n.uniformBlockBinding(At,ft,z.__bindingPointIndex),l.set(At,ft))}function de(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},vt=null,gt={},f={},h=new WeakMap,d=[],_=null,g=!1,m=null,p=null,M=null,y=null,v=null,w=null,b=null,R=new Zt(0,0,0),P=0,x=!1,S=null,L=null,I=null,F=null,X=null,Qt.set(0,0,n.canvas.width,n.canvas.height),it.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:pt,disable:wt,bindFramebuffer:Dt,drawBuffers:Bt,useProgram:oe,setBlending:A,setMaterial:lt,setFlipSided:Q,setCullFace:et,setLineWidth:nt,setPolygonOffset:ut,setScissorTest:tt,activeTexture:T,bindTexture:E,unbindTexture:N,compressedTexImage2D:G,compressedTexImage3D:K,texImage2D:xt,texImage3D:Ot,updateUBOMapping:Xt,uniformBlockBinding:Yt,texStorage2D:ct,texStorage3D:st,texSubImage2D:q,texSubImage3D:Mt,compressedTexSubImage2D:ht,compressedTexSubImage3D:dt,scissor:Vt,viewport:Et,reset:de}}function L1(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ft,c=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,E){return d?new OffscreenCanvas(T,E):$o("canvas")}function g(T,E,N){let G=1;const K=tt(T);if((K.width>N||K.height>N)&&(G=N/Math.max(K.width,K.height)),G<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const q=Math.floor(G*K.width),Mt=Math.floor(G*K.height);f===void 0&&(f=_(q,Mt));const ht=E?_(q,Mt):f;return ht.width=q,ht.height=Mt,ht.getContext("2d").drawImage(T,0,0,q,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+q+"x"+Mt+")."),ht}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){n.generateMipmap(T)}function M(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(T,E,N,G,K=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=E;if(E===n.RED&&(N===n.FLOAT&&(q=n.R32F),N===n.HALF_FLOAT&&(q=n.R16F),N===n.UNSIGNED_BYTE&&(q=n.R8)),E===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(q=n.R8UI),N===n.UNSIGNED_SHORT&&(q=n.R16UI),N===n.UNSIGNED_INT&&(q=n.R32UI),N===n.BYTE&&(q=n.R8I),N===n.SHORT&&(q=n.R16I),N===n.INT&&(q=n.R32I)),E===n.RG&&(N===n.FLOAT&&(q=n.RG32F),N===n.HALF_FLOAT&&(q=n.RG16F),N===n.UNSIGNED_BYTE&&(q=n.RG8)),E===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(q=n.RG8UI),N===n.UNSIGNED_SHORT&&(q=n.RG16UI),N===n.UNSIGNED_INT&&(q=n.RG32UI),N===n.BYTE&&(q=n.RG8I),N===n.SHORT&&(q=n.RG16I),N===n.INT&&(q=n.RG32I)),E===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(q=n.RGB8UI),N===n.UNSIGNED_SHORT&&(q=n.RGB16UI),N===n.UNSIGNED_INT&&(q=n.RGB32UI),N===n.BYTE&&(q=n.RGB8I),N===n.SHORT&&(q=n.RGB16I),N===n.INT&&(q=n.RGB32I)),E===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),N===n.UNSIGNED_INT&&(q=n.RGBA32UI),N===n.BYTE&&(q=n.RGBA8I),N===n.SHORT&&(q=n.RGBA16I),N===n.INT&&(q=n.RGBA32I)),E===n.RGB&&N===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),E===n.RGBA){const Mt=K?hl:ue.getTransfer(G);N===n.FLOAT&&(q=n.RGBA32F),N===n.HALF_FLOAT&&(q=n.RGBA16F),N===n.UNSIGNED_BYTE&&(q=Mt===ye?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function v(T,E){let N;return T?E===null||E===ns||E===Ks?N=n.DEPTH24_STENCIL8:E===Fi?N=n.DEPTH32F_STENCIL8:E===Yo&&(N=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ns||E===Ks?N=n.DEPTH_COMPONENT24:E===Fi?N=n.DEPTH_COMPONENT32F:E===Yo&&(N=n.DEPTH_COMPONENT16),N}function w(T,E){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==oi&&T.minFilter!==vi?Math.log2(Math.max(E.width,E.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?E.mipmaps.length:1}function b(T){const E=T.target;E.removeEventListener("dispose",b),P(E),E.isVideoTexture&&c.delete(E)}function R(T){const E=T.target;E.removeEventListener("dispose",R),S(E)}function P(T){const E=i.get(T);if(E.__webglInit===void 0)return;const N=T.source,G=h.get(N);if(G){const K=G[E.__cacheKey];K.usedTimes--,K.usedTimes===0&&x(T),Object.keys(G).length===0&&h.delete(N)}i.remove(T)}function x(T){const E=i.get(T);n.deleteTexture(E.__webglTexture);const N=T.source,G=h.get(N);delete G[E.__cacheKey],o.memory.textures--}function S(T){const E=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(E.__webglFramebuffer[G]))for(let K=0;K<E.__webglFramebuffer[G].length;K++)n.deleteFramebuffer(E.__webglFramebuffer[G][K]);else n.deleteFramebuffer(E.__webglFramebuffer[G]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[G])}else{if(Array.isArray(E.__webglFramebuffer))for(let G=0;G<E.__webglFramebuffer.length;G++)n.deleteFramebuffer(E.__webglFramebuffer[G]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let G=0;G<E.__webglColorRenderbuffer.length;G++)E.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[G]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const N=T.textures;for(let G=0,K=N.length;G<K;G++){const q=i.get(N[G]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(N[G])}i.remove(T)}let L=0;function I(){L=0}function F(){const T=L;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),L+=1,T}function X(T){const E=[];return E.push(T.wrapS),E.push(T.wrapT),E.push(T.wrapR||0),E.push(T.magFilter),E.push(T.minFilter),E.push(T.anisotropy),E.push(T.internalFormat),E.push(T.format),E.push(T.type),E.push(T.generateMipmaps),E.push(T.premultiplyAlpha),E.push(T.flipY),E.push(T.unpackAlignment),E.push(T.colorSpace),E.join()}function Y(T,E){const N=i.get(T);if(T.isVideoTexture&&nt(T),T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){const G=T.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(N,T,E);return}}e.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+E)}function W(T,E){const N=i.get(T);if(T.version>0&&N.__version!==T.version){it(N,T,E);return}e.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+E)}function $(T,E){const N=i.get(T);if(T.version>0&&N.__version!==T.version){it(N,T,E);return}e.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+E)}function V(T,E){const N=i.get(T);if(T.version>0&&N.__version!==T.version){_t(N,T,E);return}e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+E)}const vt={[yu]:n.REPEAT,[qr]:n.CLAMP_TO_EDGE,[Mu]:n.MIRRORED_REPEAT},gt={[oi]:n.NEAREST,[$y]:n.NEAREST_MIPMAP_NEAREST,[fa]:n.NEAREST_MIPMAP_LINEAR,[vi]:n.LINEAR,[ec]:n.LINEAR_MIPMAP_NEAREST,[Yr]:n.LINEAR_MIPMAP_LINEAR},St={[Jy]:n.NEVER,[rM]:n.ALWAYS,[Qy]:n.LESS,[G_]:n.LEQUAL,[tM]:n.EQUAL,[iM]:n.GEQUAL,[eM]:n.GREATER,[nM]:n.NOTEQUAL};function Lt(T,E){if(E.type===Fi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===vi||E.magFilter===ec||E.magFilter===fa||E.magFilter===Yr||E.minFilter===vi||E.minFilter===ec||E.minFilter===fa||E.minFilter===Yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,vt[E.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,vt[E.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,vt[E.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,gt[E.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,gt[E.minFilter]),E.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,St[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===oi||E.minFilter!==fa&&E.minFilter!==Yr||E.type===Fi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Qt(T,E){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,E.addEventListener("dispose",b));const G=E.source;let K=h.get(G);K===void 0&&(K={},h.set(G,K));const q=X(E);if(q!==T.__cacheKey){K[q]===void 0&&(K[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),K[q].usedTimes++;const Mt=K[T.__cacheKey];Mt!==void 0&&(K[T.__cacheKey].usedTimes--,Mt.usedTimes===0&&x(E)),T.__cacheKey=q,T.__webglTexture=K[q].texture}return N}function it(T,E,N){let G=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(G=n.TEXTURE_3D);const K=Qt(T,E),q=E.source;e.bindTexture(G,T.__webglTexture,n.TEXTURE0+N);const Mt=i.get(q);if(q.version!==Mt.__version||K===!0){e.activeTexture(n.TEXTURE0+N);const ht=ue.getPrimaries(ue.workingColorSpace),dt=E.colorSpace===or?null:ue.getPrimaries(E.colorSpace),ct=E.colorSpace===or||ht===dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let st=g(E.image,!1,r.maxTextureSize);st=ut(E,st);const xt=s.convert(E.format,E.colorSpace),Ot=s.convert(E.type);let Vt=y(E.internalFormat,xt,Ot,E.colorSpace,E.isVideoTexture);Lt(G,E);let Et;const Xt=E.mipmaps,Yt=E.isVideoTexture!==!0,de=Mt.__version===void 0||K===!0,z=q.dataReady,At=w(E,st);if(E.isDepthTexture)Vt=v(E.format===js,E.type),de&&(Yt?e.texStorage2D(n.TEXTURE_2D,1,Vt,st.width,st.height):e.texImage2D(n.TEXTURE_2D,0,Vt,st.width,st.height,0,xt,Ot,null));else if(E.isDataTexture)if(Xt.length>0){Yt&&de&&e.texStorage2D(n.TEXTURE_2D,At,Vt,Xt[0].width,Xt[0].height);for(let ot=0,ft=Xt.length;ot<ft;ot++)Et=Xt[ot],Yt?z&&e.texSubImage2D(n.TEXTURE_2D,ot,0,0,Et.width,Et.height,xt,Ot,Et.data):e.texImage2D(n.TEXTURE_2D,ot,Vt,Et.width,Et.height,0,xt,Ot,Et.data);E.generateMipmaps=!1}else Yt?(de&&e.texStorage2D(n.TEXTURE_2D,At,Vt,st.width,st.height),z&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,st.width,st.height,xt,Ot,st.data)):e.texImage2D(n.TEXTURE_2D,0,Vt,st.width,st.height,0,xt,Ot,st.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Yt&&de&&e.texStorage3D(n.TEXTURE_2D_ARRAY,At,Vt,Xt[0].width,Xt[0].height,st.depth);for(let ot=0,ft=Xt.length;ot<ft;ot++)if(Et=Xt[ot],E.format!==ri)if(xt!==null)if(Yt){if(z)if(E.layerUpdates.size>0){const Pt=Wd(Et.width,Et.height,E.format,E.type);for(const B of E.layerUpdates){const j=Et.data.subarray(B*Pt/Et.data.BYTES_PER_ELEMENT,(B+1)*Pt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ot,0,0,B,Et.width,Et.height,1,xt,j)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ot,0,0,0,Et.width,Et.height,st.depth,xt,Et.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ot,Vt,Et.width,Et.height,st.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?z&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ot,0,0,0,Et.width,Et.height,st.depth,xt,Ot,Et.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ot,Vt,Et.width,Et.height,st.depth,0,xt,Ot,Et.data)}else{Yt&&de&&e.texStorage2D(n.TEXTURE_2D,At,Vt,Xt[0].width,Xt[0].height);for(let ot=0,ft=Xt.length;ot<ft;ot++)Et=Xt[ot],E.format!==ri?xt!==null?Yt?z&&e.compressedTexSubImage2D(n.TEXTURE_2D,ot,0,0,Et.width,Et.height,xt,Et.data):e.compressedTexImage2D(n.TEXTURE_2D,ot,Vt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?z&&e.texSubImage2D(n.TEXTURE_2D,ot,0,0,Et.width,Et.height,xt,Ot,Et.data):e.texImage2D(n.TEXTURE_2D,ot,Vt,Et.width,Et.height,0,xt,Ot,Et.data)}else if(E.isDataArrayTexture)if(Yt){if(de&&e.texStorage3D(n.TEXTURE_2D_ARRAY,At,Vt,st.width,st.height,st.depth),z)if(E.layerUpdates.size>0){const ot=Wd(st.width,st.height,E.format,E.type);for(const ft of E.layerUpdates){const Pt=st.data.subarray(ft*ot/st.data.BYTES_PER_ELEMENT,(ft+1)*ot/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ft,st.width,st.height,1,xt,Ot,Pt)}E.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,xt,Ot,st.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Vt,st.width,st.height,st.depth,0,xt,Ot,st.data);else if(E.isData3DTexture)Yt?(de&&e.texStorage3D(n.TEXTURE_3D,At,Vt,st.width,st.height,st.depth),z&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,xt,Ot,st.data)):e.texImage3D(n.TEXTURE_3D,0,Vt,st.width,st.height,st.depth,0,xt,Ot,st.data);else if(E.isFramebufferTexture){if(de)if(Yt)e.texStorage2D(n.TEXTURE_2D,At,Vt,st.width,st.height);else{let ot=st.width,ft=st.height;for(let Pt=0;Pt<At;Pt++)e.texImage2D(n.TEXTURE_2D,Pt,Vt,ot,ft,0,xt,Ot,null),ot>>=1,ft>>=1}}else if(Xt.length>0){if(Yt&&de){const ot=tt(Xt[0]);e.texStorage2D(n.TEXTURE_2D,At,Vt,ot.width,ot.height)}for(let ot=0,ft=Xt.length;ot<ft;ot++)Et=Xt[ot],Yt?z&&e.texSubImage2D(n.TEXTURE_2D,ot,0,0,xt,Ot,Et):e.texImage2D(n.TEXTURE_2D,ot,Vt,xt,Ot,Et);E.generateMipmaps=!1}else if(Yt){if(de){const ot=tt(st);e.texStorage2D(n.TEXTURE_2D,At,Vt,ot.width,ot.height)}z&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,xt,Ot,st)}else e.texImage2D(n.TEXTURE_2D,0,Vt,xt,Ot,st);m(E)&&p(G),Mt.__version=q.version,E.onUpdate&&E.onUpdate(E)}T.__version=E.version}function _t(T,E,N){if(E.image.length!==6)return;const G=Qt(T,E),K=E.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+N);const q=i.get(K);if(K.version!==q.__version||G===!0){e.activeTexture(n.TEXTURE0+N);const Mt=ue.getPrimaries(ue.workingColorSpace),ht=E.colorSpace===or?null:ue.getPrimaries(E.colorSpace),dt=E.colorSpace===or||Mt===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const ct=E.isCompressedTexture||E.image[0].isCompressedTexture,st=E.image[0]&&E.image[0].isDataTexture,xt=[];for(let ft=0;ft<6;ft++)!ct&&!st?xt[ft]=g(E.image[ft],!0,r.maxCubemapSize):xt[ft]=st?E.image[ft].image:E.image[ft],xt[ft]=ut(E,xt[ft]);const Ot=xt[0],Vt=s.convert(E.format,E.colorSpace),Et=s.convert(E.type),Xt=y(E.internalFormat,Vt,Et,E.colorSpace),Yt=E.isVideoTexture!==!0,de=q.__version===void 0||G===!0,z=K.dataReady;let At=w(E,Ot);Lt(n.TEXTURE_CUBE_MAP,E);let ot;if(ct){Yt&&de&&e.texStorage2D(n.TEXTURE_CUBE_MAP,At,Xt,Ot.width,Ot.height);for(let ft=0;ft<6;ft++){ot=xt[ft].mipmaps;for(let Pt=0;Pt<ot.length;Pt++){const B=ot[Pt];E.format!==ri?Vt!==null?Yt?z&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Pt,0,0,B.width,B.height,Vt,B.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Pt,Xt,B.width,B.height,0,B.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Pt,0,0,B.width,B.height,Vt,Et,B.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Pt,Xt,B.width,B.height,0,Vt,Et,B.data)}}}else{if(ot=E.mipmaps,Yt&&de){ot.length>0&&At++;const ft=tt(xt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,At,Xt,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(st){Yt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,xt[ft].width,xt[ft].height,Vt,Et,xt[ft].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,Xt,xt[ft].width,xt[ft].height,0,Vt,Et,xt[ft].data);for(let Pt=0;Pt<ot.length;Pt++){const j=ot[Pt].image[ft].image;Yt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Pt+1,0,0,j.width,j.height,Vt,Et,j.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Pt+1,Xt,j.width,j.height,0,Vt,Et,j.data)}}else{Yt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Vt,Et,xt[ft]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,Xt,Vt,Et,xt[ft]);for(let Pt=0;Pt<ot.length;Pt++){const B=ot[Pt];Yt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Pt+1,0,0,Vt,Et,B.image[ft]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Pt+1,Xt,Vt,Et,B.image[ft])}}}m(E)&&p(n.TEXTURE_CUBE_MAP),q.__version=K.version,E.onUpdate&&E.onUpdate(E)}T.__version=E.version}function at(T,E,N,G,K,q){const Mt=s.convert(N.format,N.colorSpace),ht=s.convert(N.type),dt=y(N.internalFormat,Mt,ht,N.colorSpace),ct=i.get(E),st=i.get(N);if(st.__renderTarget=E,!ct.__hasExternalTextures){const xt=Math.max(1,E.width>>q),Ot=Math.max(1,E.height>>q);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?e.texImage3D(K,q,dt,xt,Ot,E.depth,0,Mt,ht,null):e.texImage2D(K,q,dt,xt,Ot,0,Mt,ht,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),et(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,K,st.__webglTexture,0,Q(E)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,K,st.__webglTexture,q),e.bindFramebuffer(n.FRAMEBUFFER,null)}function pt(T,E,N){if(n.bindRenderbuffer(n.RENDERBUFFER,T),E.depthBuffer){const G=E.depthTexture,K=G&&G.isDepthTexture?G.type:null,q=v(E.stencilBuffer,K),Mt=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=Q(E);et(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ht,q,E.width,E.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,ht,q,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,q,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Mt,n.RENDERBUFFER,T)}else{const G=E.textures;for(let K=0;K<G.length;K++){const q=G[K],Mt=s.convert(q.format,q.colorSpace),ht=s.convert(q.type),dt=y(q.internalFormat,Mt,ht,q.colorSpace),ct=Q(E);N&&et(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,dt,E.width,E.height):et(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,dt,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,dt,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function wt(T,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=i.get(E.depthTexture);G.__renderTarget=E,(!G.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Y(E.depthTexture,0);const K=G.__webglTexture,q=Q(E);if(E.depthTexture.format===Fs)et(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(E.depthTexture.format===js)et(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Dt(T){const E=i.get(T),N=T.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==T.depthTexture){const G=T.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),G){const K=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,G.removeEventListener("dispose",K)};G.addEventListener("dispose",K),E.__depthDisposeCallback=K}E.__boundDepthTexture=G}if(T.depthTexture&&!E.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");wt(E.__webglFramebuffer,T)}else if(N){E.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[G]),E.__webglDepthbuffer[G]===void 0)E.__webglDepthbuffer[G]=n.createRenderbuffer(),pt(E.__webglDepthbuffer[G],T,!1);else{const K=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=E.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,q)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),pt(E.__webglDepthbuffer,T,!1);else{const G=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,K)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Bt(T,E,N){const G=i.get(T);E!==void 0&&at(G.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&Dt(T)}function oe(T){const E=T.texture,N=i.get(T),G=i.get(E);T.addEventListener("dispose",R);const K=T.textures,q=T.isWebGLCubeRenderTarget===!0,Mt=K.length>1;if(Mt||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=E.version,o.memory.textures++),q){N.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(E.mipmaps&&E.mipmaps.length>0){N.__webglFramebuffer[ht]=[];for(let dt=0;dt<E.mipmaps.length;dt++)N.__webglFramebuffer[ht][dt]=n.createFramebuffer()}else N.__webglFramebuffer[ht]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){N.__webglFramebuffer=[];for(let ht=0;ht<E.mipmaps.length;ht++)N.__webglFramebuffer[ht]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(Mt)for(let ht=0,dt=K.length;ht<dt;ht++){const ct=i.get(K[ht]);ct.__webglTexture===void 0&&(ct.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&et(T)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ht=0;ht<K.length;ht++){const dt=K[ht];N.__webglColorRenderbuffer[ht]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[ht]);const ct=s.convert(dt.format,dt.colorSpace),st=s.convert(dt.type),xt=y(dt.internalFormat,ct,st,dt.colorSpace,T.isXRRenderTarget===!0),Ot=Q(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ot,xt,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,N.__webglColorRenderbuffer[ht])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),pt(N.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),Lt(n.TEXTURE_CUBE_MAP,E);for(let ht=0;ht<6;ht++)if(E.mipmaps&&E.mipmaps.length>0)for(let dt=0;dt<E.mipmaps.length;dt++)at(N.__webglFramebuffer[ht][dt],T,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,dt);else at(N.__webglFramebuffer[ht],T,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(E)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let ht=0,dt=K.length;ht<dt;ht++){const ct=K[ht],st=i.get(ct);e.bindTexture(n.TEXTURE_2D,st.__webglTexture),Lt(n.TEXTURE_2D,ct),at(N.__webglFramebuffer,T,ct,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,0),m(ct)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let ht=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ht=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ht,G.__webglTexture),Lt(ht,E),E.mipmaps&&E.mipmaps.length>0)for(let dt=0;dt<E.mipmaps.length;dt++)at(N.__webglFramebuffer[dt],T,E,n.COLOR_ATTACHMENT0,ht,dt);else at(N.__webglFramebuffer,T,E,n.COLOR_ATTACHMENT0,ht,0);m(E)&&p(ht),e.unbindTexture()}T.depthBuffer&&Dt(T)}function D(T){const E=T.textures;for(let N=0,G=E.length;N<G;N++){const K=E[N];if(m(K)){const q=M(T),Mt=i.get(K).__webglTexture;e.bindTexture(q,Mt),p(q),e.unbindTexture()}}}const O=[],A=[];function lt(T){if(T.samples>0){if(et(T)===!1){const E=T.textures,N=T.width,G=T.height;let K=n.COLOR_BUFFER_BIT;const q=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Mt=i.get(T),ht=E.length>1;if(ht)for(let dt=0;dt<E.length;dt++)e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let dt=0;dt<E.length;dt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),ht){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[dt]);const ct=i.get(E[dt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ct,0)}n.blitFramebuffer(0,0,N,G,0,0,N,G,K,n.NEAREST),l===!0&&(O.length=0,A.length=0,O.push(n.COLOR_ATTACHMENT0+dt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(O.push(q),A.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,A)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,O))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ht)for(let dt=0;dt<E.length;dt++){e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[dt]);const ct=i.get(E[dt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,ct,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const E=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function Q(T){return Math.min(r.maxSamples,T.samples)}function et(T){const E=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function nt(T){const E=o.render.frame;c.get(T)!==E&&(c.set(T,E),T.update())}function ut(T,E){const N=T.colorSpace,G=T.format,K=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||N!==Zs&&N!==or&&(ue.getTransfer(N)===ye?(G!==ri||K!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),E}function tt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(u.width=T.naturalWidth||T.width,u.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(u.width=T.displayWidth,u.height=T.displayHeight):(u.width=T.width,u.height=T.height),u}this.allocateTextureUnit=F,this.resetTextureUnits=I,this.setTexture2D=Y,this.setTexture2DArray=W,this.setTexture3D=$,this.setTextureCube=V,this.rebindTextures=Bt,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=at,this.useMultisampledRTT=et}function I1(n,t){function e(i,r=or){let s;const o=ue.getTransfer(r);if(i===qi)return n.UNSIGNED_BYTE;if(i===Bf)return n.UNSIGNED_SHORT_4_4_4_4;if(i===zf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===U_)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===L_)return n.BYTE;if(i===I_)return n.SHORT;if(i===Yo)return n.UNSIGNED_SHORT;if(i===Ff)return n.INT;if(i===ns)return n.UNSIGNED_INT;if(i===Fi)return n.FLOAT;if(i===ta)return n.HALF_FLOAT;if(i===N_)return n.ALPHA;if(i===O_)return n.RGB;if(i===ri)return n.RGBA;if(i===F_)return n.LUMINANCE;if(i===B_)return n.LUMINANCE_ALPHA;if(i===Fs)return n.DEPTH_COMPONENT;if(i===js)return n.DEPTH_STENCIL;if(i===z_)return n.RED;if(i===kf)return n.RED_INTEGER;if(i===k_)return n.RG;if(i===Vf)return n.RG_INTEGER;if(i===Hf)return n.RGBA_INTEGER;if(i===Wa||i===Xa||i===qa||i===Ya)if(o===ye)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Wa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Wa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ya)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Su||i===Eu||i===Tu||i===bu)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Su)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Eu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Tu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===bu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Au||i===wu||i===Cu)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Au||i===wu)return o===ye?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Cu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ru||i===Pu||i===Du||i===Lu||i===Iu||i===Uu||i===Nu||i===Ou||i===Fu||i===Bu||i===zu||i===ku||i===Vu||i===Hu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ru)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Pu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Du)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Lu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Iu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Uu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ou)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ku)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Hu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$a||i===Gu||i===Wu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===$a)return o===ye?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===V_||i===Xu||i===qu||i===Yu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===$a)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Xu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===qu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ks?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const U1={type:"move"};class Oc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $r,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $r,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $r,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,i),p=this._getHandJoint(u,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),d=.02,_=.005;u.inputState.pinching&&h>d+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&h<=d-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(U1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new $r;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const N1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,O1=`
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

}`;class F1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new mn,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new yr({vertexShader:N1,fragmentShader:O1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xe(new ni(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class B1 extends Qs{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,d=null,_=null;const g=new F1,m=e.getContextAttributes();let p=null,M=null;const y=[],v=[],w=new Ft;let b=null;const R=new Sn;R.viewport=new Se;const P=new Sn;P.viewport=new Se;const x=[R,P],S=new rS;let L=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let _t=y[it];return _t===void 0&&(_t=new Oc,y[it]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(it){let _t=y[it];return _t===void 0&&(_t=new Oc,y[it]=_t),_t.getGripSpace()},this.getHand=function(it){let _t=y[it];return _t===void 0&&(_t=new Oc,y[it]=_t),_t.getHandSpace()};function F(it){const _t=v.indexOf(it.inputSource);if(_t===-1)return;const at=y[_t];at!==void 0&&(at.update(it.inputSource,it.frame,u||o),at.dispatchEvent({type:it.type,data:it.inputSource}))}function X(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",Y);for(let it=0;it<y.length;it++){const _t=v[it];_t!==null&&(v[it]=null,y[it].disconnect(_t))}L=null,I=null,g.reset(),t.setRenderTarget(p),d=null,h=null,f=null,r=null,M=null,Qt.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){s=it,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){a=it,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(it){u=it},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(it){if(r=it,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",X),r.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(w),r.renderState.layers===void 0){const _t={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,_t),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new is(d.framebufferWidth,d.framebufferHeight,{format:ri,type:qi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let _t=null,at=null,pt=null;m.depth&&(pt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=m.stencil?js:Fs,at=m.stencil?Ks:ns);const wt={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:s};f=new XRWebGLBinding(r,e),h=f.createProjectionLayer(wt),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),M=new is(h.textureWidth,h.textureHeight,{format:ri,type:qi,depthTexture:new tg(h.textureWidth,h.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Qt.setContext(r),Qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Y(it){for(let _t=0;_t<it.removed.length;_t++){const at=it.removed[_t],pt=v.indexOf(at);pt>=0&&(v[pt]=null,y[pt].disconnect(at))}for(let _t=0;_t<it.added.length;_t++){const at=it.added[_t];let pt=v.indexOf(at);if(pt===-1){for(let Dt=0;Dt<y.length;Dt++)if(Dt>=v.length){v.push(at),pt=Dt;break}else if(v[Dt]===null){v[Dt]=at,pt=Dt;break}if(pt===-1)break}const wt=y[pt];wt&&wt.connect(at)}}const W=new U,$=new U;function V(it,_t,at){W.setFromMatrixPosition(_t.matrixWorld),$.setFromMatrixPosition(at.matrixWorld);const pt=W.distanceTo($),wt=_t.projectionMatrix.elements,Dt=at.projectionMatrix.elements,Bt=wt[14]/(wt[10]-1),oe=wt[14]/(wt[10]+1),D=(wt[9]+1)/wt[5],O=(wt[9]-1)/wt[5],A=(wt[8]-1)/wt[0],lt=(Dt[8]+1)/Dt[0],Q=Bt*A,et=Bt*lt,nt=pt/(-A+lt),ut=nt*-A;if(_t.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(ut),it.translateZ(nt),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),wt[10]===-1)it.projectionMatrix.copy(_t.projectionMatrix),it.projectionMatrixInverse.copy(_t.projectionMatrixInverse);else{const tt=Bt+nt,T=oe+nt,E=Q-ut,N=et+(pt-ut),G=D*oe/T*tt,K=O*oe/T*tt;it.projectionMatrix.makePerspective(E,N,G,K,tt,T),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function vt(it,_t){_t===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(_t.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(r===null)return;let _t=it.near,at=it.far;g.texture!==null&&(g.depthNear>0&&(_t=g.depthNear),g.depthFar>0&&(at=g.depthFar)),S.near=P.near=R.near=_t,S.far=P.far=R.far=at,(L!==S.near||I!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,I=S.far),R.layers.mask=it.layers.mask|2,P.layers.mask=it.layers.mask|4,S.layers.mask=R.layers.mask|P.layers.mask;const pt=it.parent,wt=S.cameras;vt(S,pt);for(let Dt=0;Dt<wt.length;Dt++)vt(wt[Dt],pt);wt.length===2?V(S,R,P):S.projectionMatrix.copy(R.projectionMatrix),gt(it,S,pt)};function gt(it,_t,at){at===null?it.matrix.copy(_t.matrixWorld):(it.matrix.copy(at.matrixWorld),it.matrix.invert(),it.matrix.multiply(_t.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(_t.projectionMatrix),it.projectionMatrixInverse.copy(_t.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=$u*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(it){l=it,h!==null&&(h.fixedFoveation=it),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=it)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(S)};let St=null;function Lt(it,_t){if(c=_t.getViewerPose(u||o),_=_t,c!==null){const at=c.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let pt=!1;at.length!==S.cameras.length&&(S.cameras.length=0,pt=!0);for(let Dt=0;Dt<at.length;Dt++){const Bt=at[Dt];let oe=null;if(d!==null)oe=d.getViewport(Bt);else{const O=f.getViewSubImage(h,Bt);oe=O.viewport,Dt===0&&(t.setRenderTargetTextures(M,O.colorTexture,h.ignoreDepthValues?void 0:O.depthStencilTexture),t.setRenderTarget(M))}let D=x[Dt];D===void 0&&(D=new Sn,D.layers.enable(Dt),D.viewport=new Se,x[Dt]=D),D.matrix.fromArray(Bt.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(Bt.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(oe.x,oe.y,oe.width,oe.height),Dt===0&&(S.matrix.copy(D.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),pt===!0&&S.cameras.push(D)}const wt=r.enabledFeatures;if(wt&&wt.includes("depth-sensing")){const Dt=f.getDepthInformation(at[0]);Dt&&Dt.isValid&&Dt.texture&&g.init(t,Dt,r.renderState)}}for(let at=0;at<y.length;at++){const pt=v[at],wt=y[at];pt!==null&&wt!==void 0&&wt.update(pt,_t,u||o)}St&&St(it,_t),_t.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_t}),_=null}const Qt=new ag;Qt.setAnimationLoop(Lt),this.setAnimationLoop=function(it){St=it},this.dispose=function(){}}}const Nr=new Si,z1=new we;function k1(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,j_(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,M,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),c(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,y):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),y=M.envMap,v=M.envMapRotation;y&&(m.envMap.value=y,Nr.copy(v),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),m.envMapRotation.value.setFromMatrix4(z1.makeRotationFromEuler(Nr)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function V1(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){const v=y.program;i.uniformBlockBinding(M,v)}function u(M,y){let v=r[M.id];v===void 0&&(_(M),v=c(M),r[M.id]=v,M.addEventListener("dispose",m));const w=y.program;i.updateUBOMapping(M,w);const b=t.render.frame;s[M.id]!==b&&(h(M),s[M.id]=b)}function c(M){const y=f();M.__bindingPointIndex=y;const v=n.createBuffer(),w=M.__size,b=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,w,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,v),v}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const y=r[M.id],v=M.uniforms,w=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let b=0,R=v.length;b<R;b++){const P=Array.isArray(v[b])?v[b]:[v[b]];for(let x=0,S=P.length;x<S;x++){const L=P[x];if(d(L,b,x,w)===!0){const I=L.__offset,F=Array.isArray(L.value)?L.value:[L.value];let X=0;for(let Y=0;Y<F.length;Y++){const W=F[Y],$=g(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,I+X,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,X),X+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,y,v,w){const b=M.value,R=y+"_"+v;if(w[R]===void 0)return typeof b=="number"||typeof b=="boolean"?w[R]=b:w[R]=b.clone(),!0;{const P=w[R];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return w[R]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function _(M){const y=M.uniforms;let v=0;const w=16;for(let R=0,P=y.length;R<P;R++){const x=Array.isArray(y[R])?y[R]:[y[R]];for(let S=0,L=x.length;S<L;S++){const I=x[S],F=Array.isArray(I.value)?I.value:[I.value];for(let X=0,Y=F.length;X<Y;X++){const W=F[X],$=g(W),V=v%w,vt=V%$.boundary,gt=V+vt;v+=vt,gt!==0&&w-gt<$.storage&&(v+=w-gt),I.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=v,v+=$.storage}}}const b=v%w;return b>0&&(v+=w-b),M.__size=v,M.__cache={},this}function g(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){const y=M.target;y.removeEventListener("dispose",m);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(const M in r)n.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:u,dispose:p}}class hg{constructor(t={}){const{canvas:e=oM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const M=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wn,this.toneMapping=pr,this.toneMappingExposure=1;const v=this;let w=!1,b=0,R=0,P=null,x=-1,S=null;const L=new Se,I=new Se;let F=null;const X=new Zt(0);let Y=0,W=e.width,$=e.height,V=1,vt=null,gt=null;const St=new Se(0,0,W,$),Lt=new Se(0,0,W,$);let Qt=!1;const it=new qf;let _t=!1,at=!1;const pt=new we,wt=new we,Dt=new U,Bt=new Se,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let D=!1;function O(){return P===null?V:1}let A=i;function lt(C,k){return e.getContext(C,k)}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Of}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",Pt,!1),e.addEventListener("webglcontextcreationerror",B,!1),A===null){const k="webgl2";if(A=lt(k,C),A===null)throw lt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Q,et,nt,ut,tt,T,E,N,G,K,q,Mt,ht,dt,ct,st,xt,Ot,Vt,Et,Xt,Yt,de,z;function At(){Q=new ZT(A),Q.init(),Yt=new I1(A,Q),et=new XT(A,Q,t,Yt),nt=new D1(A,Q),et.reverseDepthBuffer&&h&&nt.buffers.depth.setReversed(!0),ut=new tb(A),tt=new v1,T=new L1(A,Q,nt,tt,et,Yt,ut),E=new YT(v),N=new jT(v),G=new aS(A),de=new GT(A,G),K=new JT(A,G,ut,de),q=new nb(A,K,G,ut),Vt=new eb(A,et,T),st=new qT(tt),Mt=new g1(v,E,N,Q,et,de,st),ht=new k1(v,tt),dt=new y1,ct=new A1(Q),Ot=new HT(v,E,N,nt,q,d,l),xt=new R1(v,q,et),z=new V1(A,ut,et,nt),Et=new WT(A,Q,ut),Xt=new QT(A,Q,ut),ut.programs=Mt.programs,v.capabilities=et,v.extensions=Q,v.properties=tt,v.renderLists=dt,v.shadowMap=xt,v.state=nt,v.info=ut}At();const ot=new B1(v,A);this.xr=ot,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const C=Q.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Q.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(C){C!==void 0&&(V=C,this.setSize(W,$,!1))},this.getSize=function(C){return C.set(W,$)},this.setSize=function(C,k,Z=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=C,$=k,e.width=Math.floor(C*V),e.height=Math.floor(k*V),Z===!0&&(e.style.width=C+"px",e.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(W*V,$*V).floor()},this.setDrawingBufferSize=function(C,k,Z){W=C,$=k,V=Z,e.width=Math.floor(C*Z),e.height=Math.floor(k*Z),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(L)},this.getViewport=function(C){return C.copy(St)},this.setViewport=function(C,k,Z,J){C.isVector4?St.set(C.x,C.y,C.z,C.w):St.set(C,k,Z,J),nt.viewport(L.copy(St).multiplyScalar(V).round())},this.getScissor=function(C){return C.copy(Lt)},this.setScissor=function(C,k,Z,J){C.isVector4?Lt.set(C.x,C.y,C.z,C.w):Lt.set(C,k,Z,J),nt.scissor(I.copy(Lt).multiplyScalar(V).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(C){nt.setScissorTest(Qt=C)},this.setOpaqueSort=function(C){vt=C},this.setTransparentSort=function(C){gt=C},this.getClearColor=function(C){return C.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(C=!0,k=!0,Z=!0){let J=0;if(C){let H=!1;if(P!==null){const yt=P.texture.format;H=yt===Hf||yt===Vf||yt===kf}if(H){const yt=P.texture.type,Ct=yt===qi||yt===ns||yt===Yo||yt===Ks||yt===Bf||yt===zf,It=Ot.getClearColor(),Nt=Ot.getClearAlpha(),qt=It.r,jt=It.g,zt=It.b;Ct?(_[0]=qt,_[1]=jt,_[2]=zt,_[3]=Nt,A.clearBufferuiv(A.COLOR,0,_)):(g[0]=qt,g[1]=jt,g[2]=zt,g[3]=Nt,A.clearBufferiv(A.COLOR,0,g))}else J|=A.COLOR_BUFFER_BIT}k&&(J|=A.DEPTH_BUFFER_BIT),Z&&(J|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",Pt,!1),e.removeEventListener("webglcontextcreationerror",B,!1),Ot.dispose(),dt.dispose(),ct.dispose(),tt.dispose(),E.dispose(),N.dispose(),q.dispose(),de.dispose(),z.dispose(),Mt.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",Wt),ot.removeEventListener("sessionend",$t),Kt.stop()};function ft(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const C=ut.autoReset,k=xt.enabled,Z=xt.autoUpdate,J=xt.needsUpdate,H=xt.type;At(),ut.autoReset=C,xt.enabled=k,xt.autoUpdate=Z,xt.needsUpdate=J,xt.type=H}function B(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function j(C){const k=C.target;k.removeEventListener("dispose",j),mt(k)}function mt(C){Tt(C),tt.remove(C)}function Tt(C){const k=tt.get(C).programs;k!==void 0&&(k.forEach(function(Z){Mt.releaseProgram(Z)}),C.isShaderMaterial&&Mt.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,Z,J,H,yt){k===null&&(k=oe);const Ct=H.isMesh&&H.matrixWorld.determinant()<0,It=pg(C,k,Z,J,H);nt.setMaterial(J,Ct);let Nt=Z.index,qt=1;if(J.wireframe===!0){if(Nt=K.getWireframeAttribute(Z),Nt===void 0)return;qt=2}const jt=Z.drawRange,zt=Z.attributes.position;let ae=jt.start*qt,pe=(jt.start+jt.count)*qt;yt!==null&&(ae=Math.max(ae,yt.start*qt),pe=Math.min(pe,(yt.start+yt.count)*qt)),Nt!==null?(ae=Math.max(ae,0),pe=Math.min(pe,Nt.count)):zt!=null&&(ae=Math.max(ae,0),pe=Math.min(pe,zt.count));const ze=pe-ae;if(ze<0||ze===1/0)return;de.setup(H,J,It,Z,Nt);let Ue,le=Et;if(Nt!==null&&(Ue=G.get(Nt),le=Xt,le.setIndex(Ue)),H.isMesh)J.wireframe===!0?(nt.setLineWidth(J.wireframeLinewidth*O()),le.setMode(A.LINES)):le.setMode(A.TRIANGLES);else if(H.isLine){let kt=J.linewidth;kt===void 0&&(kt=1),nt.setLineWidth(kt*O()),H.isLineSegments?le.setMode(A.LINES):H.isLineLoop?le.setMode(A.LINE_LOOP):le.setMode(A.LINE_STRIP)}else H.isPoints?le.setMode(A.POINTS):H.isSprite&&le.setMode(A.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)le.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))le.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const kt=H._multiDrawStarts,je=H._multiDrawCounts,me=H._multiDrawCount,Zn=Nt?G.get(Nt).bytesPerElement:1,os=tt.get(J).currentProgram.getUniforms();for(let Cn=0;Cn<me;Cn++)os.setValue(A,"_gl_DrawID",Cn),le.render(kt[Cn]/Zn,je[Cn])}else if(H.isInstancedMesh)le.renderInstances(ae,ze,H.count);else if(Z.isInstancedBufferGeometry){const kt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,je=Math.min(Z.instanceCount,kt);le.renderInstances(ae,ze,je)}else le.render(ae,ze)};function Ut(C,k,Z){C.transparent===!0&&C.side===Ze&&C.forceSinglePass===!1?(C.side=Qe,C.needsUpdate=!0,oa(C,k,Z),C.side=Xi,C.needsUpdate=!0,oa(C,k,Z),C.side=Ze):oa(C,k,Z)}this.compile=function(C,k,Z=null){Z===null&&(Z=C),p=ct.get(Z),p.init(k),y.push(p),Z.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),C!==Z&&C.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const J=new Set;return C.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const yt=H.material;if(yt)if(Array.isArray(yt))for(let Ct=0;Ct<yt.length;Ct++){const It=yt[Ct];Ut(It,Z,H),J.add(It)}else Ut(yt,Z,H),J.add(yt)}),y.pop(),p=null,J},this.compileAsync=function(C,k,Z=null){const J=this.compile(C,k,Z);return new Promise(H=>{function yt(){if(J.forEach(function(Ct){tt.get(Ct).currentProgram.isReady()&&J.delete(Ct)}),J.size===0){H(C);return}setTimeout(yt,10)}Q.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let ve=null;function ie(C){ve&&ve(C)}function Wt(){Kt.stop()}function $t(){Kt.start()}const Kt=new ag;Kt.setAnimationLoop(ie),typeof self<"u"&&Kt.setContext(self),this.setAnimationLoop=function(C){ve=C,ot.setAnimationLoop(C),C===null?Kt.stop():Kt.start()},ot.addEventListener("sessionstart",Wt),ot.addEventListener("sessionend",$t),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(k),k=ot.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,k,P),p=ct.get(C,y.length),p.init(k),y.push(p),wt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),it.setFromProjectionMatrix(wt),at=this.localClippingEnabled,_t=st.init(this.clippingPlanes,at),m=dt.get(C,M.length),m.init(),M.push(m),ot.enabled===!0&&ot.isPresenting===!0){const yt=v.xr.getDepthSensingMesh();yt!==null&&ci(yt,k,-1/0,v.sortObjects)}ci(C,k,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(vt,gt),D=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,D&&Ot.addToRenderList(m,C),this.info.render.frame++,_t===!0&&st.beginShadows();const Z=p.state.shadowsArray;xt.render(Z,C,k),_t===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=m.opaque,H=m.transmissive;if(p.setupLights(),k.isArrayCamera){const yt=k.cameras;if(H.length>0)for(let Ct=0,It=yt.length;Ct<It;Ct++){const Nt=yt[Ct];sa(J,H,C,Nt)}D&&Ot.render(C);for(let Ct=0,It=yt.length;Ct<It;Ct++){const Nt=yt[Ct];jn(m,C,Nt,Nt.viewport)}}else H.length>0&&sa(J,H,C,k),D&&Ot.render(C),jn(m,C,k);P!==null&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),C.isScene===!0&&C.onAfterRender(v,C,k),de.resetDefaultState(),x=-1,S=null,y.pop(),y.length>0?(p=y[y.length-1],_t===!0&&st.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function ci(C,k,Z,J){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)Z=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||it.intersectsSprite(C)){J&&Bt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(wt);const Ct=q.update(C),It=C.material;It.visible&&m.push(C,Ct,It,Z,Bt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||it.intersectsObject(C))){const Ct=q.update(C),It=C.material;if(J&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Bt.copy(C.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Bt.copy(Ct.boundingSphere.center)),Bt.applyMatrix4(C.matrixWorld).applyMatrix4(wt)),Array.isArray(It)){const Nt=Ct.groups;for(let qt=0,jt=Nt.length;qt<jt;qt++){const zt=Nt[qt],ae=It[zt.materialIndex];ae&&ae.visible&&m.push(C,Ct,ae,Z,Bt.z,zt)}}else It.visible&&m.push(C,Ct,It,Z,Bt.z,null)}}const yt=C.children;for(let Ct=0,It=yt.length;Ct<It;Ct++)ci(yt[Ct],k,Z,J)}function jn(C,k,Z,J){const H=C.opaque,yt=C.transmissive,Ct=C.transparent;p.setupLightsView(Z),_t===!0&&st.setGlobalState(v.clippingPlanes,Z),J&&nt.viewport(L.copy(J)),H.length>0&&Sr(H,k,Z),yt.length>0&&Sr(yt,k,Z),Ct.length>0&&Sr(Ct,k,Z),nt.buffers.depth.setTest(!0),nt.buffers.depth.setMask(!0),nt.buffers.color.setMask(!0),nt.setPolygonOffset(!1)}function sa(C,k,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new is(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?ta:qi,minFilter:Yr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ue.workingColorSpace}));const yt=p.state.transmissionRenderTarget[J.id],Ct=J.viewport||L;yt.setSize(Ct.z,Ct.w);const It=v.getRenderTarget();v.setRenderTarget(yt),v.getClearColor(X),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),D&&Ot.render(Z);const Nt=v.toneMapping;v.toneMapping=pr;const qt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),_t===!0&&st.setGlobalState(v.clippingPlanes,J),Sr(C,Z,J),T.updateMultisampleRenderTarget(yt),T.updateRenderTargetMipmap(yt),Q.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let zt=0,ae=k.length;zt<ae;zt++){const pe=k[zt],ze=pe.object,Ue=pe.geometry,le=pe.material,kt=pe.group;if(le.side===Ze&&ze.layers.test(J.layers)){const je=le.side;le.side=Qe,le.needsUpdate=!0,nh(ze,Z,J,Ue,le,kt),le.side=je,le.needsUpdate=!0,jt=!0}}jt===!0&&(T.updateMultisampleRenderTarget(yt),T.updateRenderTargetMipmap(yt))}v.setRenderTarget(It),v.setClearColor(X,Y),qt!==void 0&&(J.viewport=qt),v.toneMapping=Nt}function Sr(C,k,Z){const J=k.isScene===!0?k.overrideMaterial:null;for(let H=0,yt=C.length;H<yt;H++){const Ct=C[H],It=Ct.object,Nt=Ct.geometry,qt=J===null?Ct.material:J,jt=Ct.group;It.layers.test(Z.layers)&&nh(It,k,Z,Nt,qt,jt)}}function nh(C,k,Z,J,H,yt){C.onBeforeRender(v,k,Z,J,H,yt),C.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),H.onBeforeRender(v,k,Z,J,C,yt),H.transparent===!0&&H.side===Ze&&H.forceSinglePass===!1?(H.side=Qe,H.needsUpdate=!0,v.renderBufferDirect(Z,k,J,H,C,yt),H.side=Xi,H.needsUpdate=!0,v.renderBufferDirect(Z,k,J,H,C,yt),H.side=Ze):v.renderBufferDirect(Z,k,J,H,C,yt),C.onAfterRender(v,k,Z,J,H,yt)}function oa(C,k,Z){k.isScene!==!0&&(k=oe);const J=tt.get(C),H=p.state.lights,yt=p.state.shadowsArray,Ct=H.state.version,It=Mt.getParameters(C,H.state,yt,k,Z),Nt=Mt.getProgramCacheKey(It);let qt=J.programs;J.environment=C.isMeshStandardMaterial?k.environment:null,J.fog=k.fog,J.envMap=(C.isMeshStandardMaterial?N:E).get(C.envMap||J.environment),J.envMapRotation=J.environment!==null&&C.envMap===null?k.environmentRotation:C.envMapRotation,qt===void 0&&(C.addEventListener("dispose",j),qt=new Map,J.programs=qt);let jt=qt.get(Nt);if(jt!==void 0){if(J.currentProgram===jt&&J.lightsStateVersion===Ct)return rh(C,It),jt}else It.uniforms=Mt.getUniforms(C),C.onBeforeCompile(It,v),jt=Mt.acquireProgram(It,Nt),qt.set(Nt,jt),J.uniforms=It.uniforms;const zt=J.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(zt.clippingPlanes=st.uniform),rh(C,It),J.needsLights=_g(C),J.lightsStateVersion=Ct,J.needsLights&&(zt.ambientLightColor.value=H.state.ambient,zt.lightProbe.value=H.state.probe,zt.directionalLights.value=H.state.directional,zt.directionalLightShadows.value=H.state.directionalShadow,zt.spotLights.value=H.state.spot,zt.spotLightShadows.value=H.state.spotShadow,zt.rectAreaLights.value=H.state.rectArea,zt.ltc_1.value=H.state.rectAreaLTC1,zt.ltc_2.value=H.state.rectAreaLTC2,zt.pointLights.value=H.state.point,zt.pointLightShadows.value=H.state.pointShadow,zt.hemisphereLights.value=H.state.hemi,zt.directionalShadowMap.value=H.state.directionalShadowMap,zt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,zt.spotShadowMap.value=H.state.spotShadowMap,zt.spotLightMatrix.value=H.state.spotLightMatrix,zt.spotLightMap.value=H.state.spotLightMap,zt.pointShadowMap.value=H.state.pointShadowMap,zt.pointShadowMatrix.value=H.state.pointShadowMatrix),J.currentProgram=jt,J.uniformsList=null,jt}function ih(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=Ka.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function rh(C,k){const Z=tt.get(C);Z.outputColorSpace=k.outputColorSpace,Z.batching=k.batching,Z.batchingColor=k.batchingColor,Z.instancing=k.instancing,Z.instancingColor=k.instancingColor,Z.instancingMorph=k.instancingMorph,Z.skinning=k.skinning,Z.morphTargets=k.morphTargets,Z.morphNormals=k.morphNormals,Z.morphColors=k.morphColors,Z.morphTargetsCount=k.morphTargetsCount,Z.numClippingPlanes=k.numClippingPlanes,Z.numIntersection=k.numClipIntersection,Z.vertexAlphas=k.vertexAlphas,Z.vertexTangents=k.vertexTangents,Z.toneMapping=k.toneMapping}function pg(C,k,Z,J,H){k.isScene!==!0&&(k=oe),T.resetTextureUnits();const yt=k.fog,Ct=J.isMeshStandardMaterial?k.environment:null,It=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Zs,Nt=(J.isMeshStandardMaterial?N:E).get(J.envMap||Ct),qt=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,jt=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),zt=!!Z.morphAttributes.position,ae=!!Z.morphAttributes.normal,pe=!!Z.morphAttributes.color;let ze=pr;J.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ze=v.toneMapping);const Ue=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,le=Ue!==void 0?Ue.length:0,kt=tt.get(J),je=p.state.lights;if(_t===!0&&(at===!0||C!==S)){const ln=C===S&&J.id===x;st.setState(J,C,ln)}let me=!1;J.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==je.state.version||kt.outputColorSpace!==It||H.isBatchedMesh&&kt.batching===!1||!H.isBatchedMesh&&kt.batching===!0||H.isBatchedMesh&&kt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&kt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&kt.instancing===!1||!H.isInstancedMesh&&kt.instancing===!0||H.isSkinnedMesh&&kt.skinning===!1||!H.isSkinnedMesh&&kt.skinning===!0||H.isInstancedMesh&&kt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&kt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&kt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&kt.instancingMorph===!1&&H.morphTexture!==null||kt.envMap!==Nt||J.fog===!0&&kt.fog!==yt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==st.numPlanes||kt.numIntersection!==st.numIntersection)||kt.vertexAlphas!==qt||kt.vertexTangents!==jt||kt.morphTargets!==zt||kt.morphNormals!==ae||kt.morphColors!==pe||kt.toneMapping!==ze||kt.morphTargetsCount!==le)&&(me=!0):(me=!0,kt.__version=J.version);let Zn=kt.currentProgram;me===!0&&(Zn=oa(J,k,H));let os=!1,Cn=!1,no=!1;const Ce=Zn.getUniforms(),zn=kt.uniforms;if(nt.useProgram(Zn.program)&&(os=!0,Cn=!0,no=!0),J.id!==x&&(x=J.id,Cn=!0),os||S!==C){nt.buffers.depth.getReversed()?(pt.copy(C.projectionMatrix),lM(pt),cM(pt),Ce.setValue(A,"projectionMatrix",pt)):Ce.setValue(A,"projectionMatrix",C.projectionMatrix),Ce.setValue(A,"viewMatrix",C.matrixWorldInverse);const gn=Ce.map.cameraPosition;gn!==void 0&&gn.setValue(A,Dt.setFromMatrixPosition(C.matrixWorld)),et.logarithmicDepthBuffer&&Ce.setValue(A,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ce.setValue(A,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,Cn=!0,no=!0)}if(H.isSkinnedMesh){Ce.setOptional(A,H,"bindMatrix"),Ce.setOptional(A,H,"bindMatrixInverse");const ln=H.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Ce.setValue(A,"boneTexture",ln.boneTexture,T))}H.isBatchedMesh&&(Ce.setOptional(A,H,"batchingTexture"),Ce.setValue(A,"batchingTexture",H._matricesTexture,T),Ce.setOptional(A,H,"batchingIdTexture"),Ce.setValue(A,"batchingIdTexture",H._indirectTexture,T),Ce.setOptional(A,H,"batchingColorTexture"),H._colorsTexture!==null&&Ce.setValue(A,"batchingColorTexture",H._colorsTexture,T));const kn=Z.morphAttributes;if((kn.position!==void 0||kn.normal!==void 0||kn.color!==void 0)&&Vt.update(H,Z,Zn),(Cn||kt.receiveShadow!==H.receiveShadow)&&(kt.receiveShadow=H.receiveShadow,Ce.setValue(A,"receiveShadow",H.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(zn.envMap.value=Nt,zn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&k.environment!==null&&(zn.envMapIntensity.value=k.environmentIntensity),Cn&&(Ce.setValue(A,"toneMappingExposure",v.toneMappingExposure),kt.needsLights&&mg(zn,no),yt&&J.fog===!0&&ht.refreshFogUniforms(zn,yt),ht.refreshMaterialUniforms(zn,J,V,$,p.state.transmissionRenderTarget[C.id]),Ka.upload(A,ih(kt),zn,T)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Ka.upload(A,ih(kt),zn,T),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ce.setValue(A,"center",H.center),Ce.setValue(A,"modelViewMatrix",H.modelViewMatrix),Ce.setValue(A,"normalMatrix",H.normalMatrix),Ce.setValue(A,"modelMatrix",H.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const ln=J.uniformsGroups;for(let gn=0,Ll=ln.length;gn<Ll;gn++){const Er=ln[gn];z.update(Er,Zn),z.bind(Er,Zn)}}return Zn}function mg(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function _g(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(C,k,Z){tt.get(C.texture).__webglTexture=k,tt.get(C.depthTexture).__webglTexture=Z;const J=tt.get(C);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,k){const Z=tt.get(C);Z.__webglFramebuffer=k,Z.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(C,k=0,Z=0){P=C,b=k,R=Z;let J=!0,H=null,yt=!1,Ct=!1;if(C){const Nt=tt.get(C);if(Nt.__useDefaultFramebuffer!==void 0)nt.bindFramebuffer(A.FRAMEBUFFER,null),J=!1;else if(Nt.__webglFramebuffer===void 0)T.setupRenderTarget(C);else if(Nt.__hasExternalTextures)T.rebindTextures(C,tt.get(C.texture).__webglTexture,tt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const zt=C.depthTexture;if(Nt.__boundDepthTexture!==zt){if(zt!==null&&tt.has(zt)&&(C.width!==zt.image.width||C.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(C)}}const qt=C.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Ct=!0);const jt=tt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(jt[k])?H=jt[k][Z]:H=jt[k],yt=!0):C.samples>0&&T.useMultisampledRTT(C)===!1?H=tt.get(C).__webglMultisampledFramebuffer:Array.isArray(jt)?H=jt[Z]:H=jt,L.copy(C.viewport),I.copy(C.scissor),F=C.scissorTest}else L.copy(St).multiplyScalar(V).floor(),I.copy(Lt).multiplyScalar(V).floor(),F=Qt;if(nt.bindFramebuffer(A.FRAMEBUFFER,H)&&J&&nt.drawBuffers(C,H),nt.viewport(L),nt.scissor(I),nt.setScissorTest(F),yt){const Nt=tt.get(C.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+k,Nt.__webglTexture,Z)}else if(Ct){const Nt=tt.get(C.texture),qt=k||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,Nt.__webglTexture,Z||0,qt)}x=-1},this.readRenderTargetPixels=function(C,k,Z,J,H,yt,Ct){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=tt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ct!==void 0&&(It=It[Ct]),It){nt.bindFramebuffer(A.FRAMEBUFFER,It);try{const Nt=C.texture,qt=Nt.format,jt=Nt.type;if(!et.textureFormatReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-J&&Z>=0&&Z<=C.height-H&&A.readPixels(k,Z,J,H,Yt.convert(qt),Yt.convert(jt),yt)}finally{const Nt=P!==null?tt.get(P).__webglFramebuffer:null;nt.bindFramebuffer(A.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(C,k,Z,J,H,yt,Ct){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=tt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ct!==void 0&&(It=It[Ct]),It){const Nt=C.texture,qt=Nt.format,jt=Nt.type;if(!et.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=C.width-J&&Z>=0&&Z<=C.height-H){nt.bindFramebuffer(A.FRAMEBUFFER,It);const zt=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,zt),A.bufferData(A.PIXEL_PACK_BUFFER,yt.byteLength,A.STREAM_READ),A.readPixels(k,Z,J,H,Yt.convert(qt),Yt.convert(jt),0);const ae=P!==null?tt.get(P).__webglFramebuffer:null;nt.bindFramebuffer(A.FRAMEBUFFER,ae);const pe=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await aM(A,pe,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,zt),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,yt),A.deleteBuffer(zt),A.deleteSync(pe),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,k=null,Z=0){C.isTexture!==!0&&(bs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,C=arguments[1]);const J=Math.pow(2,-Z),H=Math.floor(C.image.width*J),yt=Math.floor(C.image.height*J),Ct=k!==null?k.x:0,It=k!==null?k.y:0;T.setTexture2D(C,0),A.copyTexSubImage2D(A.TEXTURE_2D,Z,0,0,Ct,It,H,yt),nt.unbindTexture()};const gg=A.createFramebuffer(),vg=A.createFramebuffer();this.copyTextureToTexture=function(C,k,Z=null,J=null,H=0,yt=null){C.isTexture!==!0&&(bs("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,C=arguments[1],k=arguments[2],yt=arguments[3]||0,Z=null),yt===null&&(H!==0?(bs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),yt=H,H=0):yt=0);let Ct,It,Nt,qt,jt,zt,ae,pe,ze;const Ue=C.isCompressedTexture?C.mipmaps[yt]:C.image;if(Z!==null)Ct=Z.max.x-Z.min.x,It=Z.max.y-Z.min.y,Nt=Z.isBox3?Z.max.z-Z.min.z:1,qt=Z.min.x,jt=Z.min.y,zt=Z.isBox3?Z.min.z:0;else{const kn=Math.pow(2,-H);Ct=Math.floor(Ue.width*kn),It=Math.floor(Ue.height*kn),C.isDataArrayTexture?Nt=Ue.depth:C.isData3DTexture?Nt=Math.floor(Ue.depth*kn):Nt=1,qt=0,jt=0,zt=0}J!==null?(ae=J.x,pe=J.y,ze=J.z):(ae=0,pe=0,ze=0);const le=Yt.convert(k.format),kt=Yt.convert(k.type);let je;k.isData3DTexture?(T.setTexture3D(k,0),je=A.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(T.setTexture2DArray(k,0),je=A.TEXTURE_2D_ARRAY):(T.setTexture2D(k,0),je=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,k.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,k.unpackAlignment);const me=A.getParameter(A.UNPACK_ROW_LENGTH),Zn=A.getParameter(A.UNPACK_IMAGE_HEIGHT),os=A.getParameter(A.UNPACK_SKIP_PIXELS),Cn=A.getParameter(A.UNPACK_SKIP_ROWS),no=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,Ue.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Ue.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,qt),A.pixelStorei(A.UNPACK_SKIP_ROWS,jt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,zt);const Ce=C.isDataArrayTexture||C.isData3DTexture,zn=k.isDataArrayTexture||k.isData3DTexture;if(C.isDepthTexture){const kn=tt.get(C),ln=tt.get(k),gn=tt.get(kn.__renderTarget),Ll=tt.get(ln.__renderTarget);nt.bindFramebuffer(A.READ_FRAMEBUFFER,gn.__webglFramebuffer),nt.bindFramebuffer(A.DRAW_FRAMEBUFFER,Ll.__webglFramebuffer);for(let Er=0;Er<Nt;Er++)Ce&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,tt.get(C).__webglTexture,H,zt+Er),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,tt.get(k).__webglTexture,yt,ze+Er)),A.blitFramebuffer(qt,jt,Ct,It,ae,pe,Ct,It,A.DEPTH_BUFFER_BIT,A.NEAREST);nt.bindFramebuffer(A.READ_FRAMEBUFFER,null),nt.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(H!==0||C.isRenderTargetTexture||tt.has(C)){const kn=tt.get(C),ln=tt.get(k);nt.bindFramebuffer(A.READ_FRAMEBUFFER,gg),nt.bindFramebuffer(A.DRAW_FRAMEBUFFER,vg);for(let gn=0;gn<Nt;gn++)Ce?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,kn.__webglTexture,H,zt+gn):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,kn.__webglTexture,H),zn?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ln.__webglTexture,yt,ze+gn):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,ln.__webglTexture,yt),H!==0?A.blitFramebuffer(qt,jt,Ct,It,ae,pe,Ct,It,A.COLOR_BUFFER_BIT,A.NEAREST):zn?A.copyTexSubImage3D(je,yt,ae,pe,ze+gn,qt,jt,Ct,It):A.copyTexSubImage2D(je,yt,ae,pe,qt,jt,Ct,It);nt.bindFramebuffer(A.READ_FRAMEBUFFER,null),nt.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else zn?C.isDataTexture||C.isData3DTexture?A.texSubImage3D(je,yt,ae,pe,ze,Ct,It,Nt,le,kt,Ue.data):k.isCompressedArrayTexture?A.compressedTexSubImage3D(je,yt,ae,pe,ze,Ct,It,Nt,le,Ue.data):A.texSubImage3D(je,yt,ae,pe,ze,Ct,It,Nt,le,kt,Ue):C.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,yt,ae,pe,Ct,It,le,kt,Ue.data):C.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,yt,ae,pe,Ue.width,Ue.height,le,Ue.data):A.texSubImage2D(A.TEXTURE_2D,yt,ae,pe,Ct,It,le,kt,Ue);A.pixelStorei(A.UNPACK_ROW_LENGTH,me),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Zn),A.pixelStorei(A.UNPACK_SKIP_PIXELS,os),A.pixelStorei(A.UNPACK_SKIP_ROWS,Cn),A.pixelStorei(A.UNPACK_SKIP_IMAGES,no),yt===0&&k.generateMipmaps&&A.generateMipmap(je),nt.unbindTexture()},this.copyTextureToTexture3D=function(C,k,Z=null,J=null,H=0){return C.isTexture!==!0&&(bs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,J=arguments[1]||null,C=arguments[2],k=arguments[3],H=arguments[4]||0),bs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,k,Z,J,H)},this.initRenderTarget=function(C){tt.get(C).__webglFramebuffer===void 0&&T.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?T.setTextureCube(C,0):C.isData3DTexture?T.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?T.setTexture2DArray(C,0):T.setTexture2D(C,0),nt.unbindTexture()},this.resetState=function(){b=0,R=0,P=null,nt.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}}function H1(n){const t=Me([]);let e,i,r,s=new Ft,o=new Ft;const a=()=>{e=new Q_,i=new Sn(55,window.innerWidth/window.innerHeight,.1,1e3),i.position.z=6,n.value&&(r=new hg({canvas:n.value,antialias:!0,alpha:!1}),r.setClearColor(15659763,1),r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(window.devicePixelRatio),r.sortObjects=!0)},l=()=>{const h=new tS,d="/gallery-toy/";[{url:`${d}sky.png`,depth:-2,scale:6,name:"sky"},{url:`${d}boy.png`,depth:-.5,scale:4.5,name:"boy"},{url:`${d}lady-removebg-preview.png`,depth:1,scale:3.8,name:"woman"},{url:`${d}grass-removebg-preview.png`,depth:2.5,scale:5,name:"grass"}].forEach((g,m)=>{h.load(g.url,p=>{const M=p.image,y=M.width/M.height,v=new ni(y*g.scale,g.scale),w=new He({map:p,transparent:!0,side:Ze,color:new Zt(1,1,1),alphaTest:.1,depthWrite:!0}),b=new xe(v,w);b.position.set(0,0,g.depth),b.userData.name=g.name,b.renderOrder=-g.depth,b.position.x=m%2===0?-15:15,b.rotation.y=m%2===0?-Math.PI/4:Math.PI/4,b.material.opacity=0,e&&e.add(b),t.value.push(b),console.log(`✓ 加载成功: ${g.name} (${M.width}x${M.height})`),ne.to(b.position,{x:0,duration:1.5,delay:m*.3,ease:"power3.out"}),ne.to(b.rotation,{y:0,duration:1.5,delay:m*.3,ease:"power2.out"}),ne.to(b.material,{opacity:1,duration:1,delay:m*.3+.5,ease:"power2.inOut"})},void 0,p=>{console.error(`✗ 加载失败: ${g.url}`,p)})})},u=()=>{requestAnimationFrame(u),s.x+=(o.x-s.x)*.08,s.y+=(o.y-s.y)*.08,t.value.forEach(g=>{const m=g.position.z*.5;g.position.x=s.x*m,g.position.y=-s.y*m});const h=t.value.find(g=>g.userData.name==="grass");h&&(h.rotation.z=Math.sin(Date.now()*.001)*.02);const d=t.value.find(g=>g.userData.name==="woman");d&&(d.rotation.z=Math.sin(Date.now()*8e-4)*.015);const _=t.value.find(g=>g.userData.name==="sky");_&&(_.position.x+=Math.sin(Date.now()*3e-4)*.001),r&&e&&i&&r.render(e,i)};return{initScene:a,loadLayers:l,animate:u,onResize:()=>{!i||!r||(i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight))},updateMouseTarget:h=>{o.x=h.clientX/window.innerWidth-.5,o.y=h.clientY/window.innerHeight-.5},layers:t,scene:e,camera:i,renderer:r,mouse:s,targetMouse:o}}function G1(n,t,e,i,r){return{onMouseMove:u=>{},onClick:u=>{const c=new og,f=new Ft;f.x=u.clientX/window.innerWidth*2-1,f.y=-(u.clientY/window.innerHeight)*2+1,c.setFromCamera(f,r);const h=c.intersectObjects(i.value);if(h.length>0){const d=h[0].object,_=d.userData.name;ne.timeline().to(d.scale,{x:1.1,y:1.1,z:1.1,duration:.2,ease:"power2.out"}).to(d.scale,{x:1,y:1,z:1,duration:.3,ease:"elastic.out(1, 0.5)"}),ne.timeline().to(d.rotation,{z:Math.random()>.5?.1:-.1,duration:.2,ease:"power1.out"}).to(d.rotation,{z:0,duration:.4,ease:"elastic.out(1, 0.3)"});const g={woman:'"克劳德总是在风起时按下快门（画笔），他说这层面纱捕捉到了光的灵魂。"',boy:"这是让（Jean），莫奈的长子。在那个夏天，他始终在草坡的那头好奇地看着。",grass:"这片草地生长在阿让特伊的山坡上，那里的每一缕风都带着塞纳河的气息。",sky:"1875年的天空，那时印象派还被世人嘲笑，但莫奈坚信光影的魔法终将被认可。"};g[_]&&(t.value=g[_])}},startExplore:()=>{n.value=!0,ne.timeline().to(r.position,{z:5.5,duration:2,ease:"power2.inOut"}).to(r.rotation,{z:.02,duration:.5,ease:"power1.inOut",yoyo:!0,repeat:1},"-=1");const u=i.value.find(c=>c.userData.name==="grass");u&&ne.timeline().to(u.scale,{x:.7,y:.7,z:.7,duration:2,ease:"power2.inOut"}).to(u.position,{y:.5,duration:2,ease:"power2.inOut"},"-=2"),i.value.forEach((c,f)=>{c.userData.name!=="grass"&&ne.to(c.position,{y:c.position.y+(Math.random()-.5)*.3,duration:2,ease:"power1.inOut",delay:f*.1})})},toggleGrayscale:()=>{e.value=!e.value,i.value.forEach((u,c)=>{const f=u.material;ne.to(f.color,{r:e.value?.3:1,g:e.value?.3:1,b:e.value?.3:1,duration:1.5,delay:c*.1,ease:"power2.inOut"}),e.value?ne.to(u.rotation,{z:(Math.random()-.5)*.05,duration:1,delay:c*.1,ease:"power1.inOut"}):ne.to(u.rotation,{z:0,duration:1,delay:c*.1,ease:"power1.inOut"})})}}}const W1={class:"page-monet"},X1={class:"glass-card"},q1={class:"handwriting"},Y1={class:"control-group"},$1={__name:"MonetView",setup(n){const t=Me(null),e=Me(!1),i=Me(null),r=Me(!1),s=Me(1),{initScene:o,loadLayers:a,animate:l,onResize:u,updateMouseTarget:c,layers:f,camera:h,renderer:d}=H1(t),{onClick:_,startExplore:g,toggleGrayscale:m}=G1(e,i,r,f,h);return Zo(()=>{o(),a(),window.addEventListener("mousemove",c),window.addEventListener("click",_),window.addEventListener("resize",u),l()}),Sl(()=>{window.removeEventListener("mousemove",c),window.removeEventListener("click",_),window.removeEventListener("resize",u),d==null||d.dispose()}),(p,M)=>(ce(),fe("div",W1,[rt("header",{class:Ge(["painting-header",{"fade-out":e.value}])},[M[4]||(M[4]=rt("h1",null,"画中世界",-1)),M[5]||(M[5]=rt("p",null,"克劳德·莫奈 - 《撑阳伞的女人》",-1)),rt("button",{onClick:M[0]||(M[0]=(...y)=>Rt(g)&&Rt(g)(...y)),class:"start-btn"},"进入画作")],2),Re(Fr,{name:"fade"},{default:sr(()=>[i.value?(ce(),fe("div",{key:0,class:"dialogue-box",onClick:M[1]||(M[1]=y=>i.value=null)},[rt("div",X1,[rt("p",q1,Ht(i.value),1),M[6]||(M[6]=rt("span",{class:"close-hint"},"点击关闭",-1))])])):ei("",!0)]),_:1}),rt("canvas",{ref_key:"canvasEl",ref:t},null,512),rt("div",{class:Ge(["bottom-bar",{"fade-in":e.value}])},[rt("div",Y1,[M[7]||(M[7]=rt("label",null,"光影流动",-1)),So(rt("input",{type:"range","onUpdate:modelValue":M[2]||(M[2]=y=>s.value=y),min:"0",max:"2",step:"0.1"},null,512),[[Pm,s.value]])]),rt("button",{onClick:M[3]||(M[3]=(...y)=>Rt(m)&&Rt(m)(...y)),class:"mode-btn"},Ht(r.value?"恢复色彩":"1875年记忆"),1)],2)]))}},K1=Nf($1,[["__scopeId","data-v-435b0af6"]]),dg="X-05",j1="WINDOW OPEN",Z1="NIA-7 requesting first advisory.",J1="LINK CLOSED",Q1="Awaiting first signal.",tA={mode:"quake",title:"MOUNTAIN BREACH / AUTHORIZATION OPEN",body:"平静结束了。回响台已获准读取山脉全貌，第一道建议窗口正在形成。"},mp=[{label:"ROLE",title:"你不是进入者",body:"你坐在 ECHO DESK 前，通过失真的远程链路观察 WERISS。山里的人不是你，你也不会替她迈出任何一步。",action:"知道了，继续"},{label:"ABILITY",title:"你唯一的能力是建议",body:"链路只会短暂打开几秒。你能做的只有在信息不完整时给出倾向，而不是命令。她会理解、误解，或者赌一把。",action:"继续授权"},{label:"COST",title:"每一次建议都会改写局势",body:"信任、风险和真相会被你的话推向不同方向。等你看见整座山的时候，平静也会一起结束。",action:"接入第一道建议窗口"}],_p={"Ω-01":{mode:"quake",title:"RED RIDGE / SURFACE FAILURE",body:"整条山脊在逆风震动，裂隙正在把视野撕开。这是你第一次看到 WERISS 真正移动。"},"Ψ-02":{mode:"storm",title:"LUMINOUS FRONT / CROSSWIND WALL",body:"发光雾墙压向峡谷，链路噪声开始翻倍。你给出的建议会决定她是穿过去，还是保住呼吸。"},"Δ-03":{mode:"fissure",title:"BLUE FISSURE / DEPTH OPEN",body:"雪幕被整面撕裂，裂口下方不是黑暗，而是一层正在发亮的深度。这里不该只是山表。"},"Λ-04":{mode:"magnetic",title:"DOUBLE MAP / SIGNAL DRIFT",body:"地形开始复制自己，HUD 和脚下给出两套完全不同的路线。你必须替她选一套现实。"},"X-05":{mode:"skyfold",title:"SKYFOLD / FINAL WINDOW",body:"高空像幕布一样展开，全部山脊同时发亮。最后一次建议会决定她带回人，还是带回真相。"}},eA={A1:{mode:"quake",title:"RIDGE STABILIZED",body:"镜头抬高后，裂纹从山体里蔓延出来。你让她先保住了视野，也让第一次震动有了轮廓。"},A2:{mode:"quake",title:"FORWARD PUSH",body:"山体换气声直接压进了链路。你把她推近了红脊，也把第一次风险抬高了。"},A3:{mode:"whiteout",title:"SENSOR CALIBRATION",body:"雪雾压暗了整个画面，只剩参数流和呼吸声。你让信息先于行动抵达。"},B1:{mode:"storm",title:"WALL BREACH",body:"她穿过了发光雾墙，镜头像被骤冷灼了一下。链路抖得更厉害，但前方被打开了。"},B2:{mode:"storm",title:"CONTROLLED RETREAT",body:"雾墙掠过山脊，风声盖住了脚步。你保住了链路稳定，但也看着原路被吞掉。"},B3:{mode:"storm",title:"COVER FOUND",body:"半塌石棚切开了风噪，镜头边缘仍在滴落雪水。你让她在灾变里争取到一次观察角度。"},C1:{mode:"fissure",title:"EDGE WALK",body:"裂口一直在镜头下方发蓝，你却命令她不去看。山体没有回答，但活路还在。"},C2:{mode:"fissure",title:"DESCENT",body:"镜头沉入裂口，地表被一道竖直光井取代。你不再只是看山脉，而是看山脉里面。"},C3:{mode:"fissure",title:"PROBE DROP",body:"探针掉进深度时，画面像被拉长了一瞬。数值在重复，说明下面不是正常空间。"},D1:{mode:"magnetic",title:"BLIND WALK",body:"她闭眼穿过噪声层，屏幕只剩几次短促闪烁。你让脚下地形暂时压过了错误地图。"},D2:{mode:"magnetic",title:"OLD MAP LOCK",body:"旧地图把镜头推向更亮的山脊，色差和雪花屏一起加重。真相更近，但现实更薄。"},D3:{mode:"magnetic",title:"OVERLAY KILLED",body:"辅助层熄灭后，画面黑了一瞬，只剩高度、心跳和你的链路还亮着。"},E1:{mode:"whiteout",title:"RETURN VECTOR",body:"风雪和天光一起压回镜头边缘。你放弃了最深处，把“活着回来”放到了真相前面。"},E2:{mode:"skyfold",title:"DEEP VECTOR",body:"高空彻底展开，山脊像一张反向星图。你让她继续往前，也接受了链路随时会断。"},E3:{mode:"skyfold",title:"HOLD VECTOR",body:"她停在回响最强的位置，画面像被整片天空按住。你没有撤离，也没有继续深入。"}},eh=[{id:"Ω-01",position:{x:-7,y:2,z:8},event:{title:"RED RIDGE ASSESSMENT",subtitle:"FIELD UNIT NIA-7",message:'如果你真的能看到我的画面，先回答我。<br/>左边山脊后面那片发红的东西，像云，但它在逆风移动。<br/><span class="hl">我应该先看清它，还是先避开？</span>',choices:[{id:"A1",label:"退到高处，先确认整片视野",advisory:"Gain altitude and confirm the ridge line before moving.",reply:"收到。我先上切到高处。红光不是一个点，像一整片贴着山走的云墙。",effects:{trust:1,risk:-1}},{id:"A2",label:"继续靠近，我需要更多现场画面",advisory:"Close the distance. I need a better look at the red front.",reply:"你是真敢开口。行，我再往前二十米。地面开始轻震，像有什么东西在山体里换气。",effects:{truth:1,risk:1}},{id:"A3",label:"原地停留，先校准传感器",advisory:"Hold position and stabilize your sensors before moving.",reply:"校准完成。风场和温度都在跳，但频率很稳定。我把参数发回给你了。",effects:{trust:1,truth:1}}]}},{id:"Ψ-02",position:{x:0,y:3.5,z:1},event:{title:"MOVING CLOUD WALL",subtitle:"FIELD UNIT NIA-7",message:'不是云。是一整面在发光的雾墙，从峡谷对面横着压过来了。<br/>我能冲过去，也能后撤保链路。<br/><span class="hl">你给我一个更值的选项。</span>',delayMs:380,choices:[{id:"B1",label:"穿过去，抢时间拿画面",advisory:"Push through the wall before it closes. We need the view beyond it.",reply:"冲过去了。像从热水里穿到雪里，头盔差点掉线，但我看见前面有一条蓝色裂口。",effects:{truth:2,risk:2},obscured:!0},{id:"B2",label:"后撤，优先保住链路和体力",advisory:"Fall back. Keep the link stable and save your oxygen.",reply:"明白。我退回岩脊后面了。链路稳多了，但那道雾墙已经把原来的路盖住。",effects:{trust:1,risk:-1}},{id:"B3",label:"横向绕行，找掩体再观察",advisory:"Traverse laterally. Find cover and keep visual on the front.",reply:"我找到一段半塌的石棚，风声小了很多。墙体还在移动，但速度比我想的慢。",effects:{trust:1,truth:1}}]}},{id:"Δ-03",position:{x:7,y:2,z:7},event:{title:"SHEAR BREAK",subtitle:"FIELD UNIT NIA-7",message:'前面的雪坡塌了，不是普通雪崩，像整张白幕从山上被撕下来。<br/>裂口下面有一道发蓝的缝，我能下去。<br/><span class="hl">你要我绕，还是要我赌一把？</span>',choices:[{id:"C1",label:"别下裂口，沿边缘继续走",advisory:"Stay on the edge. Do not descend into the blue fissure.",reply:"收到。我贴边过去了。下面一直有像水一样的反光，但没有声音。",effects:{trust:1,risk:-1}},{id:"C2",label:"下去看蓝光来源，抓住窗口",advisory:"Descend into the fissure and identify the blue source.",reply:"我下来了。这里不是冰，是一层会发亮的碎石，像有人把星空砸碎铺在地上。",effects:{truth:2,risk:1}},{id:"C3",label:"先丢探针，再决定要不要下",advisory:"Deploy a probe first. I want the depth and temperature before you move.",reply:"探针下去了。回传深度不对，它像一直在往下掉，但读数又在重复同一段。",effects:{trust:1,truth:1}}]}},{id:"Λ-04",position:{x:-5,y:3,z:3},event:{title:"MAGNETIC STORM",subtitle:"FIELD UNIT NIA-7",message:'链路在跳。我收到你的字了，但顺序全乱。<br/>指南针开始绕圈，头盔 HUD 出现了两套地形。<br/><span class="hl">我该信地图，还是信脚下？</span>',delayMs:520,choices:[{id:"D1",label:"闭眼十秒，只按坡度和风向走",advisory:"Ignore the HUD. Count ten seconds and walk by slope and wind.",reply:"照做了。奇怪的是，一闭眼之后干扰反而小了。我像从一道缝里挤了出来。",effects:{trust:2}},{id:"D2",label:"相信旧地图，向北切过去",advisory:"Trust the old map and cut north before the storm thickens.",reply:"旧地图把我带到了一段断崖前。风很大，但我能看到更远的山脊全部亮起来了。",effects:{truth:1,risk:1},obscured:!0},{id:"D3",label:"关掉辅助系统，只保留心跳和高度",advisory:"Kill the overlays. Keep only heart rate, altitude, and the link.",reply:"辅助全关了。现在只剩你的链路和我自己的呼吸声。至少方向感回来了。",effects:{trust:1,risk:-1,truth:1}}]}},{id:"X-05",position:{x:4,y:5,z:16},event:{title:"SKYFOLD DECISION",subtitle:"FIELD UNIT NIA-7",message:'天不是在变暗，像有什么巨大的东西从高空展开了。<br/>所有山脊轮廓都亮起来，像一张地上的星图。<br/><span class="hl">如果我继续往前，链路会断；如果我现在回头，我可能带不走任何证据。</span>',delayMs:760,choices:[{id:"E1",label:"返回。把人带回来比答案重要",advisory:"Return now. Bring yourself home before the sky closes.",reply:"收到。我转身了。你这次没让我看到最深处，但你把我从那里带了出来。",effects:{trust:2,risk:-2}},{id:"E2",label:"继续。把真相带到最深处",advisory:"Keep moving. I need you at the center before the link dies.",reply:"明白。我继续走。链路开始一段一段掉帧了，如果这次断了，就把我看到的记住。",effects:{truth:2,risk:2},obscured:!0},{id:"E3",label:"留在原地，保持链路直到回响结束",advisory:"Hold position. Keep the link alive and let the mountain finish speaking.",reply:"那我就留在这里。山脊全亮了，像在对齐什么。别断线，我还有最后几句要发给你。",effects:{trust:1,truth:1}}]}}],gp=new Map(eh.map(n=>[n.id,n.event])),nA={quake:1600,storm:1800,fissure:2e3,whiteout:1700,magnetic:2200,skyfold:2400};function iA({isExploring:n,routeMarkers:t}){const e=Uo({trust:0,risk:0,truth:0}),i=Me(null),r=Me(null),s=Me(null),o=Me(J1),a=Me(Q1),l=Me(null),u=Me("calm"),c=Me(null),f=Me(null),h=Me(!1),d=Uo(Object.fromEntries(eh.map(at=>[at.id,!1])));let _=null,g=null,m=null,p=null,M=null,y=[];const v=()=>{_&&clearTimeout(_),g&&clearTimeout(g),m&&clearTimeout(m),p&&clearTimeout(p),M&&clearTimeout(M),y.forEach(at=>clearTimeout(at)),_=null,g=null,m=null,p=null,M=null,y=[]},w=(at,pt)=>at==="Ω-01"?["扫描红脊附近的地形回声","调取 NIA-7 首段现场片段","重组第一道建议窗口"]:pt==="storm"?["压低风噪通道","过滤发光雾墙雪噪","锁定建议窗口"]:pt==="fissure"?["提取裂口深度回波","压住过曝蓝光","重组下行窗口"]:pt==="magnetic"?["清理重复地形图层","同步残留相位","恢复窗口文本"]:pt==="skyfold"?["校准高空星图偏移","固定最终链路锚点","展开最后一道窗口"]:["校准链路噪声","调取现场片段","建立建议窗口"],b=at=>at==="storm"?[{id:"stabilize",label:"稳定链路增益",result:"风噪被压低了一些，语音边缘更清楚了。"},{id:"sweep",label:"扫频过滤雪噪",result:"高频雪噪被剔除了，画面不再整片发白。"},{id:"route",label:"重标记前方路径",result:"你给她补了一条临时路径线，前方轮廓短暂稳定。"}]:at==="fissure"?[{id:"depth",label:"校准深度回波",result:"裂缝边缘的深度回波开始成形。"},{id:"exposure",label:"压低裂口炫光",result:"过曝被压下去，底部轮廓露出来了一点。"},{id:"anchor",label:"固定链路锚点",result:"你把信号锚在裂口边缘，掉帧没那么严重了。"}]:at==="magnetic"?[{id:"phase",label:"重同步相位",result:"两套地形开始偶尔重合，错误地图不再一直覆盖。"},{id:"checksum",label:"校验旧地图层",result:"一部分失真的图层被识别成旧回响。"},{id:"trim",label:"裁掉噪声通道",result:"只剩几个核心参数还在跳动，但链路更稳了。"}]:at==="skyfold"?[{id:"align",label:"对齐天幕坐标",result:"高空光带不再整片错位，星图边缘开始成形。"},{id:"pulse",label:"发送定位脉冲",result:"回响回来了一个清晰峰值，你抓住了它。"},{id:"shield",label:"压住失真外溢",result:"链路边缘没那么撕裂了，最后一条窗口更稳。"}]:[{id:"stabilize",label:"稳定链路",result:"底噪降下去了一点，信号更像一条完整线路了。"},{id:"scan",label:"扫一遍场景",result:"轮廓线短暂变亮，你多拿到了一点现场信息。"},{id:"route",label:"标记临时路径",result:"系统接受了你的标记，前方区域不再完全模糊。"}],R=()=>{e.trust=0,e.risk=0,e.truth=0},P=()=>{Object.keys(d).forEach(at=>{d[at]=!1})},x=()=>{v(),i.value=null,r.value=null,s.value=null,c.value=null,f.value=null,l.value=null,u.value="calm",h.value=!1,t.value=0,o.value=j1,a.value=Z1,R(),P()},S=()=>{v(),i.value=null,r.value=null,s.value=null,c.value=null,f.value=null,l.value=null,u.value="calm",h.value=!1},L=(at,pt=2600)=>{m&&clearTimeout(m),l.value=at,m=setTimeout(()=>{l.value=null},pt)},I=()=>{s.value=0,h.value=!1},F=()=>s.value===null?!1:s.value<mp.length-1?(s.value+=1,!1):(s.value=null,h.value=!0,a.value="NIA-7 awaiting your first instruction.",u.value="quake",L(tA,3e3),!0),X=(at,pt=0)=>{e[at]=Math.max(0,e[at]+pt)},Y=at=>at.id==="E1"?{code:"SAFE RETURN",vector:"SAFE RETURN VECTOR",title:"带回山风的人",summary:"NIA-7 离开了 WERISS。她没有带出全部答案，但她把这条链路和自己的呼吸一起带回来了。",body:"归档里只留下了一段被反复擦除的地形记录，以及一句她拒绝解释的话: “你那天让我回头，所以我才确认，山后面真的还有路。”"}:at.id==="E2"?{code:"FIRST ARRIVAL",vector:e.risk>=e.truth?"PRESSURE VECTOR":"WITNESS VECTOR",title:"先抵达的人",summary:"链路在最后几十秒里一段一段掉帧，你没有再收到她完整的声音，只剩一张不断重写的山脊星图。",body:"任务归档会把这次行动标成失败，但你知道那不是失败。那是一场到达。她继续向前，把真相送进了你再也无法跟上的深处。"}:{code:"ECHO LOOP",vector:"WITNESS VECTOR",title:"另一端的人",summary:"NIA-7 没有继续，也没有返回。她把自己留在回响最强的那一层，只为了把链路再撑久一点。",body:"在连接熄灭前，你收到了最后一条短讯: “如果下一次你还会听见我，第一句别问我在哪里。先告诉我，左边那道山脊后面发红的东西，到底是什么。”"},W=(at,pt)=>{const wt=gp.get(at);if(!wt||d[at]||!h.value)return;v();const Dt=_p[at],Bt=Dt?nA[Dt.mode]:1400;Dt&&(u.value=Dt.mode,L(Dt,2200)),c.value={id:at,title:wt.title,subtitle:wt.subtitle,dist:pt.toFixed(1),prompt:Dt?`链路正在穿过 ${Dt.title}，先做一点预热工作。`:"第一道回响正在成形，先把链路稳住。",progress:0,windowReady:!1,actions:b((Dt==null?void 0:Dt.mode)??"calm"),usedActions:[],lastResult:"正式建议窗口还没建立。先做一次链路预热。"};const oe=()=>{!c.value||c.value.id!==at||(c.value={...c.value,windowReady:!0,lastResult:c.value.progress>0?"窗口已经稳定。你可以接入正式建议。":"窗口已经稳定，但你最好先做一次链路预热。"})},D=Math.max(wt.delayMs??0,Bt);p=setTimeout(oe,D)},$=()=>{var oe;if(!c.value||!c.value.windowReady||c.value.progress<1)return;const at=c.value,pt=gp.get(at.id);if(!pt){c.value=null;return}c.value=null;const wt=((oe=_p[at.id])==null?void 0:oe.mode)??"calm",Dt=w(at.id,wt),Bt=at.id==="Ω-01"?2200:1550;f.value={id:at.id,title:at.title,subtitle:at.subtitle,dist:at.dist,mode:wt,lead:at.id==="Ω-01"?"正在检索首道回响片段":"正在调取现场数据",steps:Dt,stepIndex:0,progress:.12},Dt.forEach((D,O)=>{const A=Math.round(Bt/Dt.length*O),lt=setTimeout(()=>{!f.value||f.value.id!==at.id||(f.value={...f.value,stepIndex:O,progress:Math.min(.3+(O+1)/Dt.length*.62,.96)})},A);y.push(lt)}),M=setTimeout(()=>{const D=at.progress;i.value={id:at.id,title:at.title,subtitle:at.subtitle,dist:at.dist,message:pt.message,choices:pt.choices.map(O=>({...O,obscured:O.obscured&&D<2})),stage:"choice"},f.value=null,M=null,y=[]},Bt)},V=at=>{if(!c.value)return;const pt=c.value.actions.find(wt=>wt.id===at);!pt||c.value.usedActions.includes(at)||(c.value={...c.value,progress:Math.min(3,c.value.progress+1),usedActions:[...c.value.usedActions,at],lastResult:c.value.windowReady?`${pt.result} 正式窗口已稳定，可以接入。`:`${pt.result} 正式窗口还在生成。`})},vt=at=>{if(!i.value||i.value.stage!=="choice")return null;const pt=i.value.id;Object.entries(at.effects).forEach(([Dt,Bt])=>{X(Dt,Bt)}),d[pt]=!0,o.value=at.id,a.value="READING SIGNAL...";const wt=eA[at.id];return wt&&(u.value=wt.mode,L(wt,2600)),i.value={...i.value,stage:"response",selectedChoice:at,reply:""},g=setTimeout(()=>{i.value&&(a.value=at.reply,i.value={...i.value,reply:at.reply},_=setTimeout(()=>{pt===dg&&(r.value=Y(at)),i.value=null},3600))},900),pt},gt=Mn(()=>Object.values(d).filter(at=>!at).length),St=Mn(()=>n.value?r.value?"LINK RESOLVED":s.value!==null?"ROLE BRIEFING":f.value?"WINDOW SYNC":i.value?"LIVE ADVISORY WINDOW":"LINK TRACKING":"LINK STANDBY"),Lt=Mn(()=>s.value===null?null:mp[s.value]),Qt=Mn(()=>e.truth>=e.trust&&e.truth>=e.risk+1?"WITNESS VECTOR":e.risk>e.trust?"PRESSURE VECTOR":"SAFE RETURN VECTOR"),it=Mn(()=>[{label:"TRUST",value:e.trust},{label:"RISK",value:e.risk},{label:"TRUTH",value:e.truth}]),_t=Mn(()=>[`LINK::${n.value?"OPEN":"SEALED"}.............`,"FIELD_UNIT: NIA-7",`TRUST_INDEX: ${e.trust.toString().padStart(2,"0")}`,`RISK_VECTOR: ${e.risk.toString().padStart(2,"0")}`,`TRUTH_DEPTH: ${e.truth.toString().padStart(2,"0")}`,`ROUTE_MARKERS: ${t.value.toString().padStart(2,"0")}`,`LAST_ADVICE: ${o.value}`,`FIELD_REPLY: ${a.value}`]);return{activeTransmission:i,advanceIntroBriefing:F,completedSignals:d,dataLines:_t,dismissNarrative:S,endingPanel:r,introBriefing:Lt,introBriefingIndex:s,linkStatus:St,bufferingTransmission:f,openTransmission:W,pendingSignals:gt,pendingTransmission:c,openPendingTransmission:$,performPrepAction:V,resetSession:x,environmentMode:u,sceneCue:l,sendAdvice:vt,signalsArmed:h,startIntroBriefing:I,statDisplay:it,stats:e,triggerSceneCue:L,vectorLabel:Qt}}const rA=120,sA=80,oA=40,aA=26;function lA({activeTransmission:n,canvasEl:t,completedSignals:e,isExploring:i,onSignalTrigger:r,rippleEl:s,routeMarkers:o,environmentMode:a,sceneCue:l,signalsArmed:u,tourSpeed:c}){const f=eh.map(B=>({id:B.id,pos:new U(B.position.x,B.position.y,B.position.z),triggered:!1,completed:!1}));let h,d,_,g=0,m,p,M,y,v,w=[],b,R,P=[],x,S=[],L,I=[],F,X,Y,W=[],$=[],V,vt=0,gt=null,St=0;const Lt=[],Qt=new og,it=new Ft,_t=new Zt(655365),at=new Zt(197125),pt=new Zt(7854079),wt=new Zt(13378048),Dt=new U,Bt={"Ω-01":{offset:new U(-4.8,2.8,4.4),lookOffset:new U(.4,1.1,-2.8),damping:.045,fov:58,wobbleX:.18,wobbleY:.08},"Ψ-02":{offset:new U(5.2,1.6,4.8),lookOffset:new U(-.8,.6,-2.4),damping:.06,fov:64,wobbleX:.35,wobbleY:.12},"Δ-03":{offset:new U(.7,-.9,2.2),lookOffset:new U(0,-1.4,-3.2),damping:.07,fov:71,wobbleX:.06,wobbleY:.05},"Λ-04":{offset:new U(-2.8,2.2,3.1),lookOffset:new U(1.2,.4,-2.6),damping:.055,fov:62,wobbleX:.24,wobbleY:.16},"X-05":{offset:new U(0,5.8,8.2),lookOffset:new U(0,4.4,-6),damping:.038,fov:72,wobbleX:.1,wobbleY:.05}},oe={"Ω-01":{position:new U(-10.5,4.6,14.8),lookAt:new U(-6.8,2.2,7),fov:60,damping:.028},"Ψ-02":{position:new U(-4.4,3.8,10.4),lookAt:new U(0,2.8,1.2),fov:62,damping:.03},"Δ-03":{position:new U(3.8,3.2,9.4),lookAt:new U(7.2,1.4,7),fov:64,damping:.03},"Λ-04":{position:new U(-1.8,4.8,8.8),lookAt:new U(-5.1,2.9,3.2),fov:61,damping:.028},"X-05":{position:new U(1.2,6.6,16.4),lookAt:new U(4,4.4,10),fov:68,damping:.024}},D=B=>{switch(B){case"quake":return{fogDensity:.028,fogColor:1378058,clearColor:262660,wireColor:16748349,sunColor:16734774,hazeOpacity:.28,shake:.1,cameraLift:.35,cameraPush:-.25};case"storm":return{fogDensity:.036,fogColor:528666,clearColor:263947,wireColor:9560063,sunColor:11454975,hazeOpacity:.34,shake:.06,cameraLift:.18,cameraPush:-.45};case"fissure":return{fogDensity:.044,fogColor:132874,clearColor:131845,wireColor:7005183,sunColor:5164031,hazeOpacity:.42,shake:.08,cameraLift:-.8,cameraPush:-.95};case"whiteout":return{fogDensity:.052,fogColor:14410986,clearColor:11187908,wireColor:16055295,sunColor:15003384,hazeOpacity:.5,shake:.03,cameraLift:.15,cameraPush:-.1};case"magnetic":return{fogDensity:.03,fogColor:459795,clearColor:196871,wireColor:16742391,sunColor:8118527,hazeOpacity:.22,shake:.12,cameraLift:.22,cameraPush:-.18};case"skyfold":return{fogDensity:.018,fogColor:590607,clearColor:131333,wireColor:16766829,sunColor:16774067,hazeOpacity:.16,shake:.04,cameraLift:.65,cameraPush:.18};default:return{fogDensity:.022,fogColor:655365,clearColor:197125,wireColor:7854079,sunColor:13378048,hazeOpacity:.18,shake:0,cameraLift:0,cameraPush:0}}},O=(B,j)=>{const mt=B.material;if(Array.isArray(mt)){mt.forEach(Tt=>{Tt.transparent=!0,Tt.opacity=j});return}mt.transparent=!0,mt.opacity=j},A=(B,j)=>{B.visible=j>.01,B.traverse(mt=>{if(mt instanceof xe&&O(mt,j),mt instanceof Tc){const Tt=mt.material;Tt.transparent=!0,Tt.opacity=j}})},lt=()=>{var B;return((B=f.find(j=>!e[j.id]))==null?void 0:B.id)??dg},Q=(B,j)=>{let mt=0,Tt=1,Ut=1;const ie=[1,.52,.52*.52,.52*.52*.52,.52*.52*.52*.52].reduce((Wt,$t)=>Wt+$t,0);for(let Wt=0;Wt<5;Wt+=1)mt+=Math.sin(B*Ut*.4+Ut)*Math.cos(j*Ut*.35+Ut*.7)*Tt,mt+=Math.sin(B*Ut*.7+Ut*2.1)*Math.sin(j*Ut*.6+Ut*1.3)*Tt*.5,Tt*=.52,Ut*=2.1;return mt/(ie*1.5)},et=B=>{if(B.mesh){const j=B.mesh.material;j.color.set(8118527),j.opacity=.9,B.mesh.scale.setScalar(1)}if(B.ring){const j=B.ring.material;j.color.set(16762967),j.opacity=.35,B.ring.rotation.set(0,0,0)}B.light&&(B.light.color.set(8118527),B.light.intensity=2)},nt=B=>{if(B.mesh){const j=B.mesh.material;j.color.set(16762967),j.opacity=.75}if(B.ring){const j=B.ring.material;j.color.set(8118527),j.opacity=.18}B.light&&(B.light.color.set(16762967),B.light.intensity=.8)},ut=B=>{const j=e[B.id];if(B.completed!==j){if(B.completed=j,B.completed){nt(B);return}et(B)}},tt=()=>{const B=new ni(oA,aA,rA,sA);B.rotateX(-Math.PI/2);const j=B.attributes.position;m=new Float32Array(j.count);for(let $t=0;$t<j.count;$t+=1){const Kt=j.getX($t),ci=j.getZ($t),jn=Math.exp(-((ci+2)**2)/40)*3.5,sa=Q(Kt,ci)*4+jn,Sr=Math.max(sa,-.5);j.setY($t,Sr),m[$t]=Sr}B.computeVertexNormals(),p=new xe(B,new Ud({color:3613717,roughness:.9,metalness:.15,emissive:new Zt(2754568),emissiveIntensity:1.2,side:Xi})),p.receiveShadow=!0,d.add(p);const mt=B.clone();M=new xe(mt,new He({color:7854079,wireframe:!0,transparent:!0,opacity:.32})),d.add(M);const Tt=B.clone(),Ut=Tt.attributes.position;for(let $t=0;$t<Ut.count;$t+=1)Ut.setY($t,Ut.getY($t)-.08);Tt.computeVertexNormals(),d.add(new xe(Tt,new He({color:16748349,wireframe:!0,transparent:!0,opacity:.07})));const ve=new kd(16737826,2.5);ve.position.set(0,20,-15),ve.castShadow=!0,d.add(ve);const ie=new kd(16724736,1.4);ie.position.set(0,5,20),d.add(ie),d.add(new iS(3346722,2.5));const Wt=new zd(16757575,8,20);Wt.position.set(2,.5,2),d.add(Wt)},T=()=>{y=new xe(new Gr(2.2,32,32),new He({color:13378048})),y.position.set(8,14,-25),d.add(y),v=new xe(new Gr(3.2,32,32),new He({color:16724736,transparent:!0,opacity:.15,side:Qe})),y.add(v),y.add(new xe(new Gr(5.5,32,32),new He({color:6684689,transparent:!0,opacity:.07,side:Qe}))),w=[];for(let B=0;B<12;B+=1){const j=B/12*Math.PI*2,mt=3+Math.random()*3,Tt=new xe(new ni(.15+Math.random()*.2,mt),new He({color:16720384,transparent:!0,opacity:.12+Math.random()*.1,side:Ze}));Tt.rotation.z=j,Tt.position.set(Math.cos(j)*(2.8+mt/2),Math.sin(j)*(2.8+mt/2),0),w.push(Tt),y.add(Tt)}},E=()=>{b=new xe(new ni(200,30),new He({color:5570576,transparent:!0,opacity:.18,depthWrite:!1,side:Ze})),b.rotation.x=Math.PI/2,b.position.set(0,.1,-10),d.add(b);const B=300,j=new _n,mt=new Float32Array(B*3);for(let Tt=0;Tt<B;Tt+=1)mt[Tt*3]=(Math.random()-.5)*160,mt[Tt*3+1]=Math.random()*40+5,mt[Tt*3+2]=(Math.random()-.5)*80-15;j.setAttribute("position",new Kn(mt,3)),d.add(new Tc(j,new Ku({color:16765056,size:.1,transparent:!0,opacity:.5})));for(let Tt=0;Tt<6;Tt+=1){const Ut=[],ve=(Math.random()-.5)*16,ie=(Math.random()-.5)*8-2;for(let $t=0;$t<=20;$t+=1){const Kt=$t/20;Ut.push(new U(ve+Math.sin(Kt*Math.PI*3+Tt)*Kt*1.5,Kt*(4+Math.random()*3),ie+Math.cos(Kt*Math.PI*2.5+Tt*.7)*Kt*1.2))}const Wt=new ng(Ut);d.add(new xe(new Zf(Wt,30,.03+Math.random()*.04,6,!1),new He({color:Tt%2===0?4521864:8913151,transparent:!0,opacity:.25+Math.random()*.2})))}},N=()=>{L=new $r,I=[];for(let mt=0;mt<4;mt+=1){const Tt=new xe(new ni(6.5,10+mt*.7),new He({color:12445695,transparent:!0,opacity:0,depthWrite:!1,side:Ze}));Tt.position.set(-6+mt*4,4.5,-2-mt*1.8),Tt.rotation.y=-.18+mt*.12,I.push(Tt),L.add(Tt)}F=new xe(new Gr(18,32,20,0,Math.PI),new He({color:9296127,transparent:!0,opacity:0,side:Qe,depthWrite:!1})),F.position.set(2,6,-12),L.add(F);const B=new _n,j=new Float32Array(320*3);for(let mt=0;mt<320;mt+=1)j[mt*3]=(Math.random()-.5)*18,j[mt*3+1]=Math.random()*10+1,j[mt*3+2]=(Math.random()-.5)*14;B.setAttribute("position",new Kn(j,3)),X=new Tc(B,new Ku({color:15267839,size:.12,transparent:!0,opacity:0,depthWrite:!1})),L.add(X),L.visible=!1,d.add(L)},G=()=>{R=new $r,P=[],S=[];const B=new ni(5.5,9,8,12);for(let j=-1;j<=1;j+=2){const mt=new xe(B,new Ud({color:1449252,emissive:new Zt(663078),emissiveIntensity:1,transparent:!0,opacity:0,side:Ze}));mt.position.set(j*2.6,-.2,-1.8),mt.rotation.y=j*.42,mt.rotation.x=-.06,P.push(mt),R.add(mt)}x=new xe(new $f(.22,1.05,11,18,1,!0),new He({color:6547711,transparent:!0,opacity:0,side:Ze,depthWrite:!1})),x.position.set(0,-1.8,-3.2),R.add(x);for(let j=0;j<18;j+=1){const mt=new xe(new jf(.12+Math.random()*.22,0),new He({color:j%2===0?6547711:11924223,transparent:!0,opacity:0}));mt.position.set((Math.random()-.5)*2.8,-1.2+Math.random()*3.8,-2.4-Math.random()*3.8),S.push(mt),R.add(mt)}R.visible=!1,d.add(R)},K=()=>{Y=new $r,W=[],$=[];for(let B=0;B<4;B+=1){const j=new xe(new pl(8+B*1.6,.06+B*.01,10,120,Math.PI*1.2),new He({color:B%2===0?16769169:8118527,transparent:!0,opacity:0,side:Ze}));j.rotation.x=Math.PI/2.1+B*.08,j.rotation.z=B*.35,j.position.set(0,10+B*.9,-10-B*1.6),W.push(j),Y.add(j)}for(let B=0;B<6;B+=1){const j=new xe(new ni(.18,8+Math.random()*4),new He({color:16773314,transparent:!0,opacity:0,depthWrite:!1,side:Ze}));j.position.set(-8+B*3.2,6+Math.random()*2,-8-Math.random()*4),j.rotation.z=(Math.random()-.5)*.18,$.push(j),Y.add(j)}Y.visible=!1,d.add(Y)},q=()=>{f.forEach(B=>{const j=new xe(new Gr(.18,16,16),new He({color:8118527,transparent:!0,opacity:.9}));j.position.copy(B.pos),d.add(j),B.mesh=j;const mt=new xe(new pl(.35,.03,8,32),new He({color:16762967,transparent:!0,opacity:.35}));mt.position.copy(B.pos),d.add(mt),B.ring=mt;const Tt=new zd(8118527,2,6);Tt.position.copy(B.pos),d.add(Tt),B.light=Tt})},Mt=(B,j)=>{const mt=B==="storm"?.88:0,Tt=B==="fissure"?.94:0,Ut=B==="skyfold"?.92:0;if(A(L,mt),A(R,Tt),A(Y,Ut),mt>.01){I.forEach((Wt,$t)=>{Wt.position.x=-6+$t*4+Math.sin(j*1.8+$t)*.25,Wt.position.y=4.2+Math.sin(j*2.4+$t*.3)*.2}),F.rotation.y+=.002;const ve=F.material;ve.opacity=.1+Math.sin(j*.9)*.04+mt*.18;const ie=X.geometry.attributes.position;for(let Wt=0;Wt<ie.count;Wt+=1){let $t=ie.getY(Wt)-.22,Kt=ie.getX(Wt)+.08;$t<-1&&($t=11+Math.random()*3),Kt>10&&(Kt=-10),ie.setY(Wt,$t),ie.setX(Wt,Kt)}ie.needsUpdate=!0}if(Tt>.01){const ve=x.material;ve.opacity=.28+Math.sin(j*2.4)*.08+Tt*.16,x.scale.y=1+Math.sin(j*1.6)*.06,S.forEach((ie,Wt)=>{ie.position.y+=Math.sin(j*1.2+Wt)*.002,ie.rotation.x+=.01+Wt*4e-4,ie.rotation.y+=.02+Wt*3e-4})}Ut>.01&&(W.forEach((ve,ie)=>{ve.rotation.z+=.0015+ie*4e-4,ve.rotation.x=Math.PI/2.1+ie*.08+Math.sin(j*.7+ie)*.02}),$.forEach((ve,ie)=>{ve.position.y=6+ie*.18+Math.sin(j*1.5+ie*.5)*.28}))},ht=(B,j)=>{const mt=f.find(Ut=>Ut.id===B),Tt=Bt[B];return!mt||!Tt?null:{position:Dt.copy(mt.pos).add(Tt.offset).add(new U(Math.sin(j*.8+mt.pos.x)*Tt.wobbleX,Math.sin(j*1.1+mt.pos.z)*Tt.wobbleY,0)),lookAt:mt.pos.clone().add(Tt.lookOffset),damping:Tt.damping,fov:Tt.fov}},dt=(B,j)=>{const mt=oe[B];return mt?{position:mt.position.clone().add(new U(Math.sin(j*.22+mt.position.x)*.18,Math.sin(j*.16+mt.position.z)*.08,Math.cos(j*.18+mt.position.y)*.12)),lookAt:mt.lookAt.clone().add(new U(Math.sin(j*.15)*.4,Math.sin(j*.12+.8)*.12,0)),damping:mt.damping*(.9+c.value*.15),fov:mt.fov}:null},ct=()=>{var Tt;if(!_||!p)return;const B=new U(_.position.x,40,_.position.z);Qt.set(B,new U(0,-1,0));const mt=(((Tt=Qt.intersectObject(p,!1)[0])==null?void 0:Tt.point.y)??0)+1.35;_.position.y<mt&&(_.position.y+=(mt-_.position.y)*.35)},st=()=>{if(!(!gt||!s.value)){gt.clearRect(0,0,s.value.width,s.value.height);for(let B=Lt.length-1;B>=0;B-=1){const j=Lt[B];if(j.r+=3.5,j.alpha-=.012,j.alpha<=0){Lt.splice(B,1);continue}gt.beginPath(),gt.arc(j.x,j.y,j.r,0,Math.PI*2),gt.strokeStyle=`rgba(204, 26, 26, ${j.alpha})`,gt.lineWidth=1.5,gt.stroke(),gt.beginPath(),gt.arc(j.x,j.y,j.r*.6,0,Math.PI*2),gt.strokeStyle=`rgba(34, 255, 100, ${j.alpha*.4})`,gt.lineWidth=.8,gt.stroke()}}},xt=()=>{var ie;if(g=requestAnimationFrame(xt),!h||!d||!_||!M||!p||!y||!v)return;const B=V.getElapsedTime(),j=M.geometry.attributes.position,mt=p.geometry.attributes.position;for(let Wt=0;Wt<j.count;Wt+=1){const $t=j.getX(Wt),Kt=j.getZ(Wt),ci=Math.sin($t*.4+B*.6)*.18+Math.sin(Kt*.55+B*.45)*.14+Math.sin(($t+Kt)*.3+B*.8)*.1,jn=m[Wt]+ci;j.setY(Wt,jn),mt.setY(Wt,jn)}j.needsUpdate=!0,mt.needsUpdate=!0,M.geometry.computeVertexNormals(),p.geometry.computeVertexNormals();const Tt=((ie=l.value)==null?void 0:ie.mode)??a.value,Ut=D(Tt);St+=((l.value?Ut.shake:0)-St)*.06,_t.lerp(new Zt(Ut.fogColor),.04),at.lerp(new Zt(Ut.clearColor),.04),pt.lerp(new Zt(Ut.wireColor),.06),wt.lerp(new Zt(Ut.sunColor),.05),d.fog.color.copy(_t),d.fog.density+=(Ut.fogDensity-d.fog.density)*.05,h.setClearColor(at,1),M.material.color.copy(pt),y.material.color.copy(wt),v.material.color.copy(wt),b.material.opacity+=(Ut.hazeOpacity-b.material.opacity)*.04,Mt(Tt,B);const ve=1+Math.sin(B*1.2)*.03+Math.sin(B*3.7)*.01+St*.08;if(y.scale.setScalar(ve),v.material.opacity=.1+Math.sin(B*.8)*.06,w.forEach((Wt,$t)=>{Wt.material.opacity=.06+Math.sin(B*(1.5+$t*.4)+$t)*.08}),i.value){const Wt=n.value?ht(n.value.id,B):null,$t=Wt?null:dt(lt(),B);Wt?(_.position.x+=(Wt.position.x-_.position.x)*Wt.damping,_.position.y+=(Wt.position.y-_.position.y)*Wt.damping,_.position.z+=(Wt.position.z-_.position.z)*Wt.damping,_.fov+=(Wt.fov-_.fov)*.05,_.updateProjectionMatrix(),_.lookAt(Wt.lookAt)):$t&&(_.position.x+=($t.position.x-_.position.x)*$t.damping,_.position.y+=($t.position.y+Ut.cameraLift*.35-_.position.y)*$t.damping,_.position.z+=($t.position.z+Ut.cameraPush*.35-_.position.z)*$t.damping,_.fov+=($t.fov-_.fov)*.04,_.updateProjectionMatrix(),_.lookAt($t.lookAt)),St>.01&&(_.position.x+=(Math.random()-.5)*St,_.position.y+=(Math.random()-.5)*St*.6),ct(),f.forEach(Kt=>{if(!Kt.mesh||!Kt.light)return;ut(Kt);const ci=Kt.completed?.55+Math.sin(B*2.2+Kt.pos.x)*.06:.72+Math.sin(B*3+Kt.pos.x)*.22;Kt.mesh.scale.setScalar(ci),Kt.light.intensity=Kt.completed?.6+Math.sin(B*1.6+Kt.pos.z)*.15:1.6+Math.sin(B*2.5+Kt.pos.z)*.9,Kt.ring&&(Kt.ring.rotation.x+=.01,Kt.ring.rotation.y+=.015);const jn=_.position.distanceTo(Kt.pos);!Kt.completed&&u.value&&!n.value&&!Kt.triggered&&jn<3.5&&(Kt.triggered=!0,r(Kt.id,jn)),Kt.triggered&&jn>6&&(Kt.triggered=!1)}),st()}else _.position.x+=(vt*1.5-_.position.x)*.02,_.position.y=6+Math.sin(B*.3)*.3,_.fov+=(60-_.fov)*.05,_.updateProjectionMatrix(),_.lookAt(0,1+Math.sin(B*.2)*.2,0);h.render(d,_)};return{animateScene:xt,disposeScene:()=>{cancelAnimationFrame(g),h==null||h.dispose()},flyToTourStart:()=>{_&&ne.to(_.position,{x:-10,y:4,z:14,duration:1.2,ease:"power2.out"})},initScene:()=>{t.value&&(V=new sS,h=new hg({canvas:t.value,antialias:!0,alpha:!1}),h.setSize(window.innerWidth,window.innerHeight),h.setPixelRatio(Math.min(window.devicePixelRatio,2)),h.setClearColor(197125,1),h.shadowMap.enabled=!0,d=new Q_,d.fog=new Xf(655365,.022),_=new Sn(60,window.innerWidth/window.innerHeight,.1,200),_.position.set(0,6,18),_.lookAt(0,1,0),tt(),T(),E(),N(),G(),K(),q())},initializeRippleCanvas:()=>{s.value&&(s.value.width=window.innerWidth,s.value.height=window.innerHeight,gt=s.value.getContext("2d"))},onCanvasClick:B=>{if(!i.value||!u.value||!t.value||!_||!p||!h||(s.value&&Lt.push({x:B.clientX,y:B.clientY,r:0,maxR:120,alpha:.7}),it.set(B.clientX/window.innerWidth*2-1,-(B.clientY/window.innerHeight)*2+1),Qt.setFromCamera(it,_),Qt.intersectObject(p).length===0))return;o.value+=1;const mt=(Math.random()-.5)*.35,Tt=(Math.random()-.5)*.2;ne.timeline().to(_.position,{x:`+=${mt}`,y:`+=${Tt}`,duration:.07,ease:"none"}).to(_.position,{x:`-=${mt*.8}`,y:`-=${Tt*.8}`,duration:.07,ease:"none"}).to(_.position,{x:`+=${mt*.15}`,y:`+=${Tt*.15}`,duration:.1,ease:"none"})},onMouseMove:B=>{vt=(B.clientX/window.innerWidth-.5)*2},onResize:()=>{!_||!h||(_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight),s.value&&(s.value.width=window.innerWidth,s.value.height=window.innerHeight))},playIntroSequence:()=>{_&&(St=.18,ne.timeline().to(_.position,{x:-3,y:7.2,z:13,duration:.9,ease:"power2.out"}).to(_.position,{x:2.5,y:4.2,z:10.4,duration:1.4,ease:"power2.inOut"},"-=0.35").to(_.position,{x:-9.5,y:4.1,z:14.2,duration:1.1,ease:"power2.out"}))},resetSessionVisuals:()=>{Lt.length=0,St=0,A(L,0),A(R,0),A(Y,0),f.forEach(B=>{B.triggered=!1,B.completed=!1,et(B)})},resetTour:()=>{},returnCameraHome:()=>{_&&ne.to(_.position,{x:0,y:6,z:18,duration:2,ease:"power3.inOut"})}}}const cA={key:2,class:"intro-transition"},uA={class:"cue-frame"},fA={class:"cue-title"},hA={class:"cue-body"},dA={class:"hud-status"},pA={class:"data-stream"},mA={class:"link-metrics"},_A={class:"metric-label"},gA={class:"metric-value"},vA={class:"tour-speed"},xA={class:"speed-val"},yA={key:0,class:"briefing-panel"},MA={class:"briefing-kicker"},SA={class:"briefing-title"},EA={class:"briefing-copy"},TA={class:"briefing-progress"},bA={class:"choice-copy"},AA={key:0,class:"prep-panel"},wA={class:"prep-header"},CA={class:"prep-kicker"},RA={class:"prep-dist"},PA={class:"prep-title"},DA={class:"prep-body"},LA={class:"prep-progress"},IA={class:"prep-instruction"},UA={class:"prep-actions"},NA=["disabled","onClick"],OA={class:"prep-result"},FA=["disabled"],BA={class:"buffer-header"},zA={class:"buffer-kicker"},kA={class:"buffer-dist"},VA={class:"buffer-title"},HA={class:"buffer-lead"},GA={class:"buffer-progress"},WA={class:"buffer-steps"},XA={class:"buffer-step-index"},qA={key:0,class:"comms-popup"},YA={class:"signal-header"},$A={class:"signal-tag"},KA={class:"signal-dist"},jA={class:"signal-meta"},ZA=["innerHTML"],JA={key:0,class:"choice-panel"},QA=["onClick"],tw={class:"choice-id"},ew={class:"choice-copy"},nw={key:1,class:"reply-panel"},iw={class:"outgoing-copy"},rw={key:0,class:"ending-panel"},sw={class:"ending-header"},ow={class:"ending-kicker"},aw={class:"ending-vector"},lw={class:"ending-title"},cw={class:"ending-summary"},uw={class:"ending-body"},fw={class:"ending-stats"},hw={class:"ending-stat"},dw={class:"ending-stat"},pw={class:"ending-stat"},mw={key:3,class:"click-hint"},_w=3,gw=v0({__name:"TechView",emits:["explore-mode"],setup(n,{emit:t}){const e=t,i=Me(null),r=Me(null),s=Me(null),o=Me(null),a=Me(!1),l=Me(1),u=Me(0),c=Me(!1);let f=null,h=null,d=null;const{activeTransmission:_,advanceIntroBriefing:g,bufferingTransmission:m,completedSignals:p,dataLines:M,dismissNarrative:y,endingPanel:v,environmentMode:w,introBriefing:b,introBriefingIndex:R,linkStatus:P,openTransmission:x,openPendingTransmission:S,pendingSignals:L,pendingTransmission:I,performPrepAction:F,resetSession:X,sceneCue:Y,sendAdvice:W,signalsArmed:$,startIntroBriefing:V,statDisplay:vt,stats:gt,vectorLabel:St}=iA({isExploring:a,routeMarkers:u}),{animateScene:Lt,disposeScene:Qt,flyToTourStart:it,initScene:_t,initializeRippleCanvas:at,onCanvasClick:pt,onMouseMove:wt,onResize:Dt,playIntroSequence:Bt,resetSessionVisuals:oe,resetTour:D,returnCameraHome:O}=lA({activeTransmission:_,canvasEl:i,completedSignals:p,isExploring:a,onSignalTrigger:x,environmentMode:w,rippleEl:o,routeMarkers:u,sceneCue:Y,signalsArmed:$,tourSpeed:l}),A=Mn(()=>`mode-${w.value}`),lt=Mn(()=>a.value?R.value===null?1:[.12,.32,.58][R.value]??.12:.04),Q=Mn(()=>lt.value<1),et=Mn(()=>a.value&&!v.value),nt=Mn(()=>{var dt,ct;return!!((dt=I.value)!=null&&dt.windowReady)&&(((ct=I.value)==null?void 0:ct.progress)??0)>0}),ut=Mn(()=>{const dt=8+lt.value*60,ct=Math.max(dt-18,0),st=Math.max(dt-8,0);return{background:`radial-gradient(circle at 50% 56%, rgba(3, 2, 5, 0) 0%, rgba(3, 2, 5, 0.05) ${ct}%, rgba(3, 2, 5, 0.22) ${st}%, rgba(3, 2, 5, 0.68) ${dt}%, rgba(1, 1, 4, 0.98) 100%)`}}),tt=Mn(()=>{const dt=new Date;return`${dt.getFullYear()}.${String(dt.getMonth()+1).padStart(2,"0")}.${String(dt.getDate()).padStart(2,"0")}`}),T=()=>{a.value||(a.value=!0,e("explore-mode",!0),X(),oe(),D(),V(),Bt(),ne.to(r.value,{opacity:0,y:-30,duration:.8,ease:"power2.in",onComplete:()=>{r.value&&(r.value.style.display="none")}}),s.value&&(s.value.style.display="flex",ne.fromTo(s.value,{opacity:0,y:20},{opacity:1,y:0,duration:.8,delay:.6,ease:"power2.out"})))},E=()=>{f&&clearTimeout(f),h&&clearTimeout(h),d&&clearTimeout(d),c.value=!0,f=setTimeout(()=>{g()&&(it(),d=setTimeout(()=>{x("Ω-01",2.8)},2850))},220),h=setTimeout(()=>{c.value=!1},620)},N=dt=>{W(dt)},G=dt=>{F(dt)},K=()=>{S()},q=()=>{a.value&&(a.value=!1,e("explore-mode",!1),y(),ne.to(s.value,{opacity:0,y:20,duration:.5,ease:"power2.in",onComplete:()=>{s.value&&(s.value.style.display="none")}}),r.value&&(r.value.style.display="flex",ne.fromTo(r.value,{opacity:0,y:-30},{opacity:1,y:0,duration:.8,delay:.3,ease:"power2.out"})),O())},Mt=()=>{a.value&&(X(),oe(),D(),V(),Bt())},ht=dt=>{dt.key==="Escape"&&a.value&&q()};return Zo(()=>{var dt;_t(),Lt(),window.addEventListener("mousemove",wt),window.addEventListener("resize",Dt),window.addEventListener("keydown",ht),at(),(dt=i.value)==null||dt.addEventListener("click",pt)}),Sl(()=>{var dt;f&&clearTimeout(f),h&&clearTimeout(h),d&&clearTimeout(d),window.removeEventListener("mousemove",wt),window.removeEventListener("resize",Dt),window.removeEventListener("keydown",ht),(dt=i.value)==null||dt.removeEventListener("click",pt),y(),Qt()}),(dt,ct)=>(ce(),fe("div",{class:Ge(["page-tech",A.value])},[rt("canvas",{ref_key:"canvasEl",ref:i,class:"scene-canvas"},null,512),et.value?(ce(),fe("div",{key:0,class:Ge(["corner-matte",{"corner-matte-intro":Q.value}])},null,2)):ei("",!0),Q.value?(ce(),fe("div",{key:1,class:"intro-shroud",style:Kr(ut.value)},null,4)):ei("",!0),c.value?(ce(),fe("div",cA)):ei("",!0),ct[21]||(ct[21]=rt("div",{class:"scanline-overlay"},null,-1)),ct[22]||(ct[22]=rt("div",{class:"chromatic-edge"},null,-1)),rt("div",{class:Ge(["weather-overlay",A.value])},null,2),ct[23]||(ct[23]=rt("div",{class:"noise-overlay"},null,-1)),Re(Fr,{name:"cue"},{default:sr(()=>[Rt(Y)&&!Rt(_)&&!Rt(b)&&!Rt(v)?(ce(),fe("div",{key:0,class:Ge(["scene-cue",`cue-${Rt(Y).mode}`])},[ct[2]||(ct[2]=rt("div",{class:"cue-weather"},null,-1)),rt("div",uA,[ct[1]||(ct[1]=rt("div",{class:"cue-kicker"},"FIELD SHIFT",-1)),rt("h2",fA,Ht(Rt(Y).title),1),rt("p",hA,Ht(Rt(Y).body),1)])],2)):ei("",!0)]),_:1}),ct[24]||(ct[24]=rt("div",{class:"hud-corner tl"},null,-1)),ct[25]||(ct[25]=rt("div",{class:"hud-corner tr"},null,-1)),ct[26]||(ct[26]=rt("div",{class:"hud-corner bl"},null,-1)),ct[27]||(ct[27]=rt("div",{class:"hud-corner br"},null,-1)),rt("div",dA,[rt("div",null,[ct[3]||(ct[3]=rt("span",{class:"status-dot"},null,-1)),za(Ht(Rt(P)),1)]),rt("div",null,Ht(tt.value),1),ct[4]||(ct[4]=rt("div",null,"FIELD UNIT: NIA-7",-1)),rt("div",null,"PENDING WINDOWS: "+Ht(Rt(L)),1),rt("div",null,"VECTOR: "+Ht(Rt(St)),1)]),rt("div",pA,[(ce(!0),fe($e,null,nr(Rt(M),(st,xt)=>(ce(),fe("div",{key:xt,class:"data-line",style:Kr({animationDelay:`${xt*.3}s`})},Ht(st),5))),128))]),rt("div",{class:"tech-content",ref_key:"contentEl",ref:r},[ct[6]||(ct[6]=ov('<div class="tech-label" data-v-9893d463>// ECHO DESK · REMOTE ADVISORY LINK</div><h1 class="tech-title" data-text="WERISS" data-v-9893d463>WERISS</h1><div class="tech-tagline" data-v-9893d463><span class="tag-line" data-v-9893d463></span> YOU CANNOT ENTER, BUT YOUR WORDS ARRIVE FIRST </div><div class="tech-description" data-v-9893d463> 回响链路已重连。<br data-v-9893d463> 一名进入山脉的实地人员正在向你发送失真信号。<br data-v-9893d463><span class="red-text" data-v-9893d463>你只有几秒</span>决定她下一步该怎么走。 </div>',4)),rt("button",{class:"tech-btn",onClick:T},[...ct[5]||(ct[5]=[rt("span",{class:"btn-bracket"},"[",-1),za(" LINK IN ",-1),rt("span",{class:"btn-bracket"},"]",-1)])])],512),rt("div",{class:"explore-hud",ref_key:"exploreHudEl",ref:s},[rt("div",mA,[(ce(!0),fe($e,null,nr(Rt(vt),st=>(ce(),fe("div",{key:st.label,class:"metric-chip"},[rt("span",_A,Ht(st.label),1),rt("span",gA,Ht(st.value),1)]))),128))]),rt("div",vA,[ct[7]||(ct[7]=rt("span",{class:"speed-label"},"CRUISE SPEED",-1)),So(rt("input",{type:"range",min:"0.2",max:"3",step:"0.1","onUpdate:modelValue":ct[0]||(ct[0]=st=>l.value=st),class:"speed-slider"},null,512),[[Pm,l.value,void 0,{number:!0}]]),rt("span",xA,Ht(l.value.toFixed(1))+"x",1)]),rt("button",{class:"exit-btn",onClick:q},[...ct[8]||(ct[8]=[rt("span",{class:"btn-bracket"},"[",-1),za(" EXIT ",-1),rt("span",{class:"btn-bracket"},"]",-1)])])],512),Re(Fr,{name:"briefing"},{default:sr(()=>[Rt(b)?(ce(),fe("div",yA,[rt("div",MA,"ROLE BRIEF / "+Ht(Rt(b).label),1),rt("h2",SA,Ht(Rt(b).title),1),rt("p",EA,Ht(Rt(b).body),1),rt("div",TA,[(ce(),fe($e,null,nr(_w,st=>rt("span",{key:st,class:Ge(["progress-dot",{active:st-1===Rt(R)}])},null,2)),64))]),rt("button",{class:"choice-btn briefing-action",onClick:E},[ct[9]||(ct[9]=rt("span",{class:"choice-id"},"GO",-1)),rt("span",bA,Ht(Rt(b).action),1)])])):ei("",!0)]),_:1}),Re(Fr,{name:"prep"},{default:sr(()=>[Rt(I)&&!Rt(_)?(ce(),fe("div",AA,[rt("div",wA,[rt("span",CA,"LINK PREP / "+Ht(Rt(I).id),1),rt("span",RA,"DIST "+Ht(Rt(I).dist)+"m",1)]),rt("h2",PA,Ht(Rt(I).title),1),rt("p",DA,Ht(Rt(I).prompt),1),rt("div",LA,[(ce(),fe($e,null,nr(3,st=>rt("span",{key:st,class:Ge(["prep-dot",{active:st<=Rt(I).progress}])},null,2)),64))]),rt("div",IA,[ct[10]||(ct[10]=rt("span",{class:"prep-instruction-label"},"WINDOW STATUS",-1)),rt("span",null,Ht(Rt(I).windowReady?"正式窗口已稳定，完成至少 1 次预热后即可接入。":"正式窗口还在生成，先做一次链路预热。"),1)]),rt("div",UA,[(ce(!0),fe($e,null,nr(Rt(I).actions,st=>(ce(),fe("button",{key:st.id,class:Ge(["prep-action",{used:Rt(I).usedActions.includes(st.id)}]),disabled:Rt(I).usedActions.includes(st.id),onClick:xt=>G(st.id)},Ht(st.label),11,NA))),128))]),rt("div",OA,Ht(Rt(I).lastResult),1),rt("button",{class:Ge(["prep-confirm",{ready:nt.value}]),disabled:!nt.value,onClick:K},Ht(nt.value?"接入正式建议窗口":"等待链路稳定"),11,FA)])):ei("",!0)]),_:1}),Re(Fr,{name:"buffer"},{default:sr(()=>[Rt(m)&&!Rt(_)?(ce(),fe("div",{key:0,class:Ge(["buffer-panel",`buffer-${Rt(m).mode}`])},[ct[11]||(ct[11]=rt("div",{class:"buffer-grid"},null,-1)),rt("div",BA,[rt("span",zA,"WINDOW SYNC / "+Ht(Rt(m).id),1),rt("span",kA,"DIST "+Ht(Rt(m).dist)+"m",1)]),rt("h2",VA,Ht(Rt(m).title),1),rt("p",HA,Ht(Rt(m).lead),1),rt("div",GA,[rt("div",{class:"buffer-progress-fill",style:Kr({transform:`scaleX(${Rt(m).progress})`})},null,4)]),rt("div",WA,[(ce(!0),fe($e,null,nr(Rt(m).steps,(st,xt)=>(ce(),fe("div",{key:st,class:Ge(["buffer-step",{active:xt===Rt(m).stepIndex,done:xt<Rt(m).stepIndex}])},[rt("span",XA,"0"+Ht(xt+1),1),rt("span",null,Ht(st),1)],2))),128))])],2)):ei("",!0)]),_:1}),Re(Fr,{name:"signal"},{default:sr(()=>{var st;return[Rt(_)?(ce(),fe("div",qA,[rt("div",YA,[rt("span",$A,"// WINDOW_"+Ht(Rt(_).id),1),rt("span",KA,"DIST: "+Ht(Rt(_).dist)+"m",1)]),rt("div",jA,[rt("div",null,Ht(Rt(_).title),1),rt("div",null,Ht(Rt(_).subtitle),1)]),rt("div",{class:"signal-body",innerHTML:Rt(_).message},null,8,ZA),Rt(_).stage==="choice"?(ce(),fe("div",JA,[ct[12]||(ct[12]=rt("div",{class:"panel-label"},"TRANSMIT ADVICE",-1)),(ce(!0),fe($e,null,nr(Rt(_).choices,xt=>(ce(),fe("button",{key:xt.id,class:Ge(["choice-btn",{obscured:xt.obscured}]),onClick:Ot=>N(xt)},[rt("span",tw,Ht(xt.id),1),rt("span",ew,Ht(xt.label),1)],10,QA))),128))])):(ce(),fe("div",nw,[ct[13]||(ct[13]=rt("div",{class:"panel-label"},"ADVICE SENT",-1)),rt("div",iw,Ht((st=Rt(_).selectedChoice)==null?void 0:st.advisory),1),ct[14]||(ct[14]=rt("div",{class:"panel-label panel-label-reply"},"FIELD REPLY",-1)),rt("div",{class:Ge(["incoming-copy",{pending:!Rt(_).reply}])},Ht(Rt(_).reply||"NIA-7 is reading your signal..."),3)])),ct[15]||(ct[15]=rt("div",{class:"signal-bar"},null,-1))])):ei("",!0)]}),_:1}),Re(Fr,{name:"ending"},{default:sr(()=>[Rt(v)?(ce(),fe("div",rw,[rt("div",sw,[rt("div",ow,"ENDING / "+Ht(Rt(v).code),1),rt("div",aw,Ht(Rt(v).vector),1)]),rt("h2",lw,Ht(Rt(v).title),1),rt("p",cw,Ht(Rt(v).summary),1),rt("div",uw,Ht(Rt(v).body),1),rt("div",fw,[rt("div",hw,[ct[16]||(ct[16]=rt("span",null,"TRUST",-1)),rt("strong",null,Ht(Rt(gt).trust),1)]),rt("div",dw,[ct[17]||(ct[17]=rt("span",null,"RISK",-1)),rt("strong",null,Ht(Rt(gt).risk),1)]),rt("div",pw,[ct[18]||(ct[18]=rt("span",null,"TRUTH",-1)),rt("strong",null,Ht(Rt(gt).truth),1)])]),rt("div",{class:"ending-actions"},[rt("button",{class:"choice-btn ending-action",onClick:Mt},[...ct[19]||(ct[19]=[rt("span",{class:"choice-id"},"R1",-1),rt("span",{class:"choice-copy"},"重新接入链路，开始下一轮回响",-1)])]),rt("button",{class:"choice-btn ending-action ending-action-muted",onClick:q},[...ct[20]||(ct[20]=[rt("span",{class:"choice-id"},"R2",-1),rt("span",{class:"choice-copy"},"关闭链路，返回封面",-1)])])])])):ei("",!0)]),_:1}),a.value&&Rt($)&&!Rt(_)&&!Rt(m)&&!Rt(v)&&!Rt(b)?(ce(),fe("div",mw," CLICK TERRAIN TO DROP ROUTE MARKERS ")):ei("",!0),rt("canvas",{ref_key:"rippleEl",ref:o,class:"ripple-canvas"},null,512)],2))}}),vw=Nf(gw,[["__scopeId","data-v-9893d463"]]),xw=[{id:"monet",name:"印象派",icon:"🎨",position:"5%"},{id:"tech",name:"科技",icon:"⚡",position:"35%"}];function yw(){return{switchToTech:()=>{const i=document.querySelector(".page-monet"),r=document.querySelector(".page-tech");i&&ne.to(i,{opacity:0,duration:.5,ease:"power2.in"}),setTimeout(()=>{r&&ne.set(r,{display:"block"}),ne.from(".tech-label",{x:-50,opacity:0,duration:.8,delay:.2,ease:"power3.out"}),ne.from(".tech-title",{x:-100,opacity:0,duration:1,delay:.4,ease:"power3.out"}),ne.from(".tech-tagline",{x:-50,opacity:0,duration:.8,delay:.6,ease:"power3.out"}),ne.from(".tech-description",{y:30,opacity:0,duration:.8,delay:.8,ease:"power3.out"}),ne.from(".tech-btn",{scale:0,opacity:0,duration:.6,delay:1,ease:"back.out(1.7)"}),ne.from(".hud-corner",{scale:0,opacity:0,duration:.6,delay:.3,stagger:.1,ease:"back.out(1.5)"}),ne.from(".hud-status",{y:-20,opacity:0,duration:.6,delay:.5,ease:"power2.out"})},500)},switchToMonet:()=>{const i=document.querySelector(".page-monet");i&&ne.to(i,{opacity:1,duration:.8,ease:"power2.out"})},animateBubbles:i=>{document.querySelectorAll(".bubble-item").forEach(s=>{const o=s.classList.contains("active"),a=s.querySelector(".bubble");a&&ne.to(a,{scale:o?1.2:1,duration:.5,ease:"elastic.out(1, 0.5)"})})}}}function Mw(){return{initHeaderAnimation:()=>{const e=document.querySelector(".painting-header");if(!e)return;const i=e.querySelector("h1"),r=e.querySelector("p"),s=e.querySelector(".start-btn");i&&ne.from(i,{y:-50,opacity:0,duration:1,delay:.5,ease:"power3.out"}),r&&ne.from(r,{y:-30,opacity:0,duration:1,delay:.8,ease:"power3.out"}),s&&(ne.from(s,{scale:0,opacity:0,duration:.8,delay:1.2,ease:"back.out(1.7)"}),ne.to(s,{y:-5,duration:1.5,ease:"power1.inOut",yoyo:!0,repeat:-1}))},initBubbleAnimation:()=>{setTimeout(()=>{document.querySelectorAll(".bubble-item").forEach((i,r)=>{ne.set(i,{x:-150,opacity:0,scale:0}),ne.to(i,{x:0,opacity:1,scale:1,duration:.8,delay:2+r*.2,ease:"elastic.out(1, 0.5)"})})},100)}}}const Sw={__name:"App",setup(n){const t=Me(null),e=Me("tech"),i=Me(xw),r=Me(!1),{switchToTech:s,switchToMonet:o,animateBubbles:a}=yw(),{initHeaderAnimation:l,initBubbleAnimation:u}=Mw(),c=h=>{h?ne.to(".bubble-nav",{x:-120,opacity:0,duration:.7,ease:"power2.in",onComplete:()=>{r.value=!0}}):(r.value=!1,ne.fromTo(".bubble-nav",{x:-120,opacity:0},{x:0,opacity:1,duration:.7,ease:"power2.out"}))},f=h=>{e.value!==h&&(e.value=h,a(h),h==="tech"?s():o())};return Zo(()=>{l(),u()}),(h,d)=>(ce(),fe("div",{class:Ge(["gallery-container",{"tech-mode":e.value==="tech"}]),ref_key:"container",ref:t},[So(Re(gy,{pages:i.value,currentPage:e.value,onPageChange:f},null,8,["pages","currentPage"]),[[Gl,!r.value]]),So(Re(K1,null,null,512),[[Gl,e.value==="monet"]]),So(Re(vw,{onExploreMode:c},null,512),[[Gl,e.value==="tech"]])],2))}},Ew=Wv(Sw);Ew.mount("#app");
