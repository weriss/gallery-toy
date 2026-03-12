(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function rf(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const be={},As=[],yi=()=>{},Mp=()=>!1,xl=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),sf=n=>n.startsWith("onUpdate:"),We=Object.assign,of=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},xg=Object.prototype.hasOwnProperty,ge=(n,t)=>xg.call(n,t),Xt=Array.isArray,Cs=n=>Jo(n)==="[object Map]",Sp=n=>Jo(n)==="[object Set]",ah=n=>Jo(n)==="[object Date]",Jt=n=>typeof n=="function",ze=n=>typeof n=="string",Mi=n=>typeof n=="symbol",ve=n=>n!==null&&typeof n=="object",Ep=n=>(ve(n)||Jt(n))&&Jt(n.then)&&Jt(n.catch),bp=Object.prototype.toString,Jo=n=>bp.call(n),yg=n=>Jo(n).slice(8,-1),Tp=n=>Jo(n)==="[object Object]",af=n=>ze(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Mo=rf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),yl=n=>{const t=Object.create(null);return(e=>t[e]||(t[e]=n(e)))},Mg=/-\w/g,_r=yl(n=>n.replace(Mg,t=>t.slice(1).toUpperCase())),Sg=/\B([A-Z])/g,ns=yl(n=>n.replace(Sg,"-$1").toLowerCase()),wp=yl(n=>n.charAt(0).toUpperCase()+n.slice(1)),zl=yl(n=>n?`on${wp(n)}`:""),fr=(n,t)=>!Object.is(n,t),Ba=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Ap=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},lf=n=>{const t=parseFloat(n);return isNaN(t)?n:t},Eg=n=>{const t=ze(n)?Number(n):NaN;return isNaN(t)?n:t};let lh;const Ml=()=>lh||(lh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ri(n){if(Xt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],r=ze(i)?Ag(i):ri(i);if(r)for(const s in r)t[s]=r[s]}return t}else if(ze(n)||ve(n))return n}const bg=/;(?![^(]*\))/g,Tg=/:([^]+)/,wg=/\/\*[^]*?\*\//g;function Ag(n){const t={};return n.replace(wg,"").split(bg).forEach(e=>{if(e){const i=e.split(Tg);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Fe(n){let t="";if(ze(n))t=n;else if(Xt(n))for(let e=0;e<n.length;e++){const i=Fe(n[e]);i&&(t+=i+" ")}else if(ve(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const Cg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Rg=rf(Cg);function Cp(n){return!!n||n===""}function Pg(n,t){if(n.length!==t.length)return!1;let e=!0;for(let i=0;e&&i<n.length;i++)e=cf(n[i],t[i]);return e}function cf(n,t){if(n===t)return!0;let e=ah(n),i=ah(t);if(e||i)return e&&i?n.getTime()===t.getTime():!1;if(e=Mi(n),i=Mi(t),e||i)return n===t;if(e=Xt(n),i=Xt(t),e||i)return e&&i?Pg(n,t):!1;if(e=ve(n),i=ve(t),e||i){if(!e||!i)return!1;const r=Object.keys(n).length,s=Object.keys(t).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!cf(n[o],t[o]))return!1}}return String(n)===String(t)}const Rp=n=>!!(n&&n.__v_isRef===!0),Lt=n=>ze(n)?n:n==null?"":Xt(n)||ve(n)&&(n.toString===bp||!Jt(n.toString))?Rp(n)?Lt(n.value):JSON.stringify(n,Pp,2):String(n),Pp=(n,t)=>Rp(t)?Pp(n,t.value):Cs(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,r],s)=>(e[kl(i,s)+" =>"]=r,e),{})}:Sp(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>kl(e))}:Mi(t)?kl(t):ve(t)&&!Xt(t)&&!Tp(t)?String(t):t,kl=(n,t="")=>{var e;return Mi(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Mn;class Dg{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Mn,!t&&Mn&&(this.index=(Mn.scopes||(Mn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=Mn;try{return Mn=this,t()}finally{Mn=e}}}on(){++this._on===1&&(this.prevScope=Mn,Mn=this)}off(){this._on>0&&--this._on===0&&(Mn=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Lg(){return Mn}let Te;const Vl=new WeakSet;class Dp{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Mn&&Mn.active&&Mn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Vl.has(this)&&(Vl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ip(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ch(this),Up(this);const t=Te,e=oi;Te=this,oi=!0;try{return this.fn()}finally{Np(this),Te=t,oi=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)hf(t);this.deps=this.depsTail=void 0,ch(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Vl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Vc(this)&&this.run()}get dirty(){return Vc(this)}}let Lp=0,So,Eo;function Ip(n,t=!1){if(n.flags|=8,t){n.next=Eo,Eo=n;return}n.next=So,So=n}function uf(){Lp++}function ff(){if(--Lp>0)return;if(Eo){let t=Eo;for(Eo=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;So;){let t=So;for(So=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Up(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Np(n){let t,e=n.depsTail,i=e;for(;i;){const r=i.prevDep;i.version===-1?(i===e&&(e=r),hf(i),Ig(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=t,n.depsTail=e}function Vc(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Op(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Op(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Oo)||(n.globalVersion=Oo,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Vc(n))))return;n.flags|=2;const t=n.dep,e=Te,i=oi;Te=n,oi=!0;try{Up(n);const r=n.fn(n._value);(t.version===0||fr(r,n._value))&&(n.flags|=128,n._value=r,t.version++)}catch(r){throw t.version++,r}finally{Te=e,oi=i,Np(n),n.flags&=-3}}function hf(n,t=!1){const{dep:e,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let s=e.computed.deps;s;s=s.nextDep)hf(s,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function Ig(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let oi=!0;const Fp=[];function Hi(){Fp.push(oi),oi=!1}function Gi(){const n=Fp.pop();oi=n===void 0?!0:n}function ch(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=Te;Te=void 0;try{t()}finally{Te=e}}}let Oo=0;class Ug{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class df{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Te||!oi||Te===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==Te)e=this.activeLink=new Ug(Te,this),Te.deps?(e.prevDep=Te.depsTail,Te.depsTail.nextDep=e,Te.depsTail=e):Te.deps=Te.depsTail=e,Bp(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=Te.depsTail,e.nextDep=void 0,Te.depsTail.nextDep=e,Te.depsTail=e,Te.deps===e&&(Te.deps=i)}return e}trigger(t){this.version++,Oo++,this.notify(t)}notify(t){uf();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{ff()}}}function Bp(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Bp(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Hc=new WeakMap,$r=Symbol(""),Gc=Symbol(""),Fo=Symbol("");function nn(n,t,e){if(oi&&Te){let i=Hc.get(n);i||Hc.set(n,i=new Map);let r=i.get(e);r||(i.set(e,r=new df),r.map=i,r.key=e),r.track()}}function Fi(n,t,e,i,r,s){const o=Hc.get(n);if(!o){Oo++;return}const a=l=>{l&&l.trigger()};if(uf(),t==="clear")o.forEach(a);else{const l=Xt(n),u=l&&af(e);if(l&&e==="length"){const c=Number(i);o.forEach((f,h)=>{(h==="length"||h===Fo||!Mi(h)&&h>=c)&&a(f)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),u&&a(o.get(Fo)),t){case"add":l?u&&a(o.get("length")):(a(o.get($r)),Cs(n)&&a(o.get(Gc)));break;case"delete":l||(a(o.get($r)),Cs(n)&&a(o.get(Gc)));break;case"set":Cs(n)&&a(o.get($r));break}}ff()}function ss(n){const t=de(n);return t===n?t:(nn(t,"iterate",Fo),jn(n)?t:t.map(li))}function Sl(n){return nn(n=de(n),"iterate",Fo),n}function rr(n,t){return Wi(n)?Bs(Kr(n)?li(t):t):li(t)}const Ng={__proto__:null,[Symbol.iterator](){return Hl(this,Symbol.iterator,n=>rr(this,n))},concat(...n){return ss(this).concat(...n.map(t=>Xt(t)?ss(t):t))},entries(){return Hl(this,"entries",n=>(n[1]=rr(this,n[1]),n))},every(n,t){return bi(this,"every",n,t,void 0,arguments)},filter(n,t){return bi(this,"filter",n,t,e=>e.map(i=>rr(this,i)),arguments)},find(n,t){return bi(this,"find",n,t,e=>rr(this,e),arguments)},findIndex(n,t){return bi(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return bi(this,"findLast",n,t,e=>rr(this,e),arguments)},findLastIndex(n,t){return bi(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return bi(this,"forEach",n,t,void 0,arguments)},includes(...n){return Gl(this,"includes",n)},indexOf(...n){return Gl(this,"indexOf",n)},join(n){return ss(this).join(n)},lastIndexOf(...n){return Gl(this,"lastIndexOf",n)},map(n,t){return bi(this,"map",n,t,void 0,arguments)},pop(){return ro(this,"pop")},push(...n){return ro(this,"push",n)},reduce(n,...t){return uh(this,"reduce",n,t)},reduceRight(n,...t){return uh(this,"reduceRight",n,t)},shift(){return ro(this,"shift")},some(n,t){return bi(this,"some",n,t,void 0,arguments)},splice(...n){return ro(this,"splice",n)},toReversed(){return ss(this).toReversed()},toSorted(n){return ss(this).toSorted(n)},toSpliced(...n){return ss(this).toSpliced(...n)},unshift(...n){return ro(this,"unshift",n)},values(){return Hl(this,"values",n=>rr(this,n))}};function Hl(n,t,e){const i=Sl(n),r=i[t]();return i!==n&&!jn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=e(s.value)),s}),r}const Og=Array.prototype;function bi(n,t,e,i,r,s){const o=Sl(n),a=o!==n&&!jn(n),l=o[t];if(l!==Og[t]){const f=l.apply(n,s);return a?li(f):f}let u=e;o!==n&&(a?u=function(f,h){return e.call(this,rr(n,f),h,n)}:e.length>2&&(u=function(f,h){return e.call(this,f,h,n)}));const c=l.call(o,u,i);return a&&r?r(c):c}function uh(n,t,e,i){const r=Sl(n);let s=e;return r!==n&&(jn(n)?e.length>3&&(s=function(o,a,l){return e.call(this,o,a,l,n)}):s=function(o,a,l){return e.call(this,o,rr(n,a),l,n)}),r[t](s,...i)}function Gl(n,t,e){const i=de(n);nn(i,"iterate",Fo);const r=i[t](...e);return(r===-1||r===!1)&&_f(e[0])?(e[0]=de(e[0]),i[t](...e)):r}function ro(n,t,e=[]){Hi(),uf();const i=de(n)[t].apply(n,e);return ff(),Gi(),i}const Fg=rf("__proto__,__v_isRef,__isVue"),zp=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Mi));function Bg(n){Mi(n)||(n=String(n));const t=de(this);return nn(t,"has",n),t.hasOwnProperty(n)}class kp{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const r=this._isReadonly,s=this._isShallow;if(e==="__v_isReactive")return!r;if(e==="__v_isReadonly")return r;if(e==="__v_isShallow")return s;if(e==="__v_raw")return i===(r?s?$g:Wp:s?Gp:Hp).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Xt(t);if(!r){let l;if(o&&(l=Ng[e]))return l;if(e==="hasOwnProperty")return Bg}const a=Reflect.get(t,e,sn(t)?t:i);if((Mi(e)?zp.has(e):Fg(e))||(r||nn(t,"get",e),s))return a;if(sn(a)){const l=o&&af(e)?a:a.value;return r&&ve(l)?Xc(l):l}return ve(a)?r?Xc(a):Bo(a):a}}class Vp extends kp{constructor(t=!1){super(!1,t)}set(t,e,i,r){let s=t[e];const o=Xt(t)&&af(e);if(!this._isShallow){const u=Wi(s);if(!jn(i)&&!Wi(i)&&(s=de(s),i=de(i)),!o&&sn(s)&&!sn(i))return u||(s.value=i),!0}const a=o?Number(e)<t.length:ge(t,e),l=Reflect.set(t,e,i,sn(t)?t:r);return t===de(r)&&(a?fr(i,s)&&Fi(t,"set",e,i):Fi(t,"add",e,i)),l}deleteProperty(t,e){const i=ge(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&i&&Fi(t,"delete",e,void 0),r}has(t,e){const i=Reflect.has(t,e);return(!Mi(e)||!zp.has(e))&&nn(t,"has",e),i}ownKeys(t){return nn(t,"iterate",Xt(t)?"length":$r),Reflect.ownKeys(t)}}class zg extends kp{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const kg=new Vp,Vg=new zg,Hg=new Vp(!0);const Wc=n=>n,ua=n=>Reflect.getPrototypeOf(n);function Gg(n,t,e){return function(...i){const r=this.__v_raw,s=de(r),o=Cs(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,u=r[n](...i),c=e?Wc:t?Bs:li;return!t&&nn(s,"iterate",l?Gc:$r),We(Object.create(u),{next(){const{value:f,done:h}=u.next();return h?{value:f,done:h}:{value:a?[c(f[0]),c(f[1])]:c(f),done:h}}})}}function fa(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Wg(n,t){const e={get(r){const s=this.__v_raw,o=de(s),a=de(r);n||(fr(r,a)&&nn(o,"get",r),nn(o,"get",a));const{has:l}=ua(o),u=t?Wc:n?Bs:li;if(l.call(o,r))return u(s.get(r));if(l.call(o,a))return u(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&nn(de(r),"iterate",$r),r.size},has(r){const s=this.__v_raw,o=de(s),a=de(r);return n||(fr(r,a)&&nn(o,"has",r),nn(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=de(a),u=t?Wc:n?Bs:li;return!n&&nn(l,"iterate",$r),a.forEach((c,f)=>r.call(s,u(c),u(f),o))}};return We(e,n?{add:fa("add"),set:fa("set"),delete:fa("delete"),clear:fa("clear")}:{add(r){!t&&!jn(r)&&!Wi(r)&&(r=de(r));const s=de(this);return ua(s).has.call(s,r)||(s.add(r),Fi(s,"add",r,r)),this},set(r,s){!t&&!jn(s)&&!Wi(s)&&(s=de(s));const o=de(this),{has:a,get:l}=ua(o);let u=a.call(o,r);u||(r=de(r),u=a.call(o,r));const c=l.call(o,r);return o.set(r,s),u?fr(s,c)&&Fi(o,"set",r,s):Fi(o,"add",r,s),this},delete(r){const s=de(this),{has:o,get:a}=ua(s);let l=o.call(s,r);l||(r=de(r),l=o.call(s,r)),a&&a.call(s,r);const u=s.delete(r);return l&&Fi(s,"delete",r,void 0),u},clear(){const r=de(this),s=r.size!==0,o=r.clear();return s&&Fi(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=Gg(r,n,t)}),e}function pf(n,t){const e=Wg(n,t);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(ge(e,r)&&r in i?e:i,r,s)}const Xg={get:pf(!1,!1)},qg={get:pf(!1,!0)},Yg={get:pf(!0,!1)};const Hp=new WeakMap,Gp=new WeakMap,Wp=new WeakMap,$g=new WeakMap;function Kg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function jg(n){return n.__v_skip||!Object.isExtensible(n)?0:Kg(yg(n))}function Bo(n){return Wi(n)?n:mf(n,!1,kg,Xg,Hp)}function Zg(n){return mf(n,!1,Hg,qg,Gp)}function Xc(n){return mf(n,!0,Vg,Yg,Wp)}function mf(n,t,e,i,r){if(!ve(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const s=jg(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:e);return r.set(n,a),a}function Kr(n){return Wi(n)?Kr(n.__v_raw):!!(n&&n.__v_isReactive)}function Wi(n){return!!(n&&n.__v_isReadonly)}function jn(n){return!!(n&&n.__v_isShallow)}function _f(n){return n?!!n.__v_raw:!1}function de(n){const t=n&&n.__v_raw;return t?de(t):n}function Jg(n){return!ge(n,"__v_skip")&&Object.isExtensible(n)&&Ap(n,"__v_skip",!0),n}const li=n=>ve(n)?Bo(n):n,Bs=n=>ve(n)?Xc(n):n;function sn(n){return n?n.__v_isRef===!0:!1}function pe(n){return Qg(n,!1)}function Qg(n,t){return sn(n)?n:new t0(n,t)}class t0{constructor(t,e){this.dep=new df,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:de(t),this._value=e?t:li(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||jn(t)||Wi(t);t=i?t:de(t),fr(t,e)&&(this._rawValue=t,this._value=i?t:li(t),this.dep.trigger())}}function Rt(n){return sn(n)?n.value:n}const e0={get:(n,t,e)=>t==="__v_raw"?n:Rt(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const r=n[t];return sn(r)&&!sn(e)?(r.value=e,!0):Reflect.set(n,t,e,i)}};function Xp(n){return Kr(n)?n:new Proxy(n,e0)}class n0{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new df(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Oo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Te!==this)return Ip(this,!0),!0}get value(){const t=this.dep.track();return Op(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function i0(n,t,e=!1){let i,r;return Jt(n)?i=n:(i=n.get,r=n.set),new n0(i,r,e)}const ha={},Qa=new WeakMap;let Or;function r0(n,t=!1,e=Or){if(e){let i=Qa.get(e);i||Qa.set(e,i=[]),i.push(n)}}function s0(n,t,e=be){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=e,u=v=>r?v:jn(v)||r===!1||r===0?Bi(v,1):Bi(v);let c,f,h,d,g=!1,_=!1;if(sn(n)?(f=()=>n.value,g=jn(n)):Kr(n)?(f=()=>u(n),g=!0):Xt(n)?(_=!0,g=n.some(v=>Kr(v)||jn(v)),f=()=>n.map(v=>{if(sn(v))return v.value;if(Kr(v))return u(v);if(Jt(v))return l?l(v,2):v()})):Jt(n)?t?f=l?()=>l(n,2):n:f=()=>{if(h){Hi();try{h()}finally{Gi()}}const v=Or;Or=c;try{return l?l(n,3,[d]):n(d)}finally{Or=v}}:f=yi,t&&r){const v=f,A=r===!0?1/0:r;f=()=>Bi(v(),A)}const m=Lg(),p=()=>{c.stop(),m&&m.active&&of(m.effects,c)};if(s&&t){const v=t;t=(...A)=>{v(...A),p()}}let y=_?new Array(n.length).fill(ha):ha;const M=v=>{if(!(!(c.flags&1)||!c.dirty&&!v))if(t){const A=c.run();if(r||g||(_?A.some((T,w)=>fr(T,y[w])):fr(A,y))){h&&h();const T=Or;Or=c;try{const w=[A,y===ha?void 0:_&&y[0]===ha?[]:y,d];y=A,l?l(t,3,w):t(...w)}finally{Or=T}}}else c.run()};return a&&a(M),c=new Dp(f),c.scheduler=o?()=>o(M,!1):M,d=v=>r0(v,!1,c),h=c.onStop=()=>{const v=Qa.get(c);if(v){if(l)l(v,4);else for(const A of v)A();Qa.delete(c)}},t?i?M(!0):y=c.run():o?o(M.bind(null,!0),!0):c.run(),p.pause=c.pause.bind(c),p.resume=c.resume.bind(c),p.stop=p,p}function Bi(n,t=1/0,e){if(t<=0||!ve(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,sn(n))Bi(n.value,t,e);else if(Xt(n))for(let i=0;i<n.length;i++)Bi(n[i],t,e);else if(Sp(n)||Cs(n))n.forEach(i=>{Bi(i,t,e)});else if(Tp(n)){for(const i in n)Bi(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Bi(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Qo(n,t,e,i){try{return i?n(...i):n()}catch(r){El(r,t,e)}}function ci(n,t,e,i){if(Jt(n)){const r=Qo(n,t,e,i);return r&&Ep(r)&&r.catch(s=>{El(s,t,e)}),r}if(Xt(n)){const r=[];for(let s=0;s<n.length;s++)r.push(ci(n[s],t,e,i));return r}}function El(n,t,e,i=!0){const r=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||be;if(t){let a=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const c=a.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](n,l,u)===!1)return}a=a.parent}if(s){Hi(),Qo(s,null,10,[n,l,u]),Gi();return}}o0(n,e,r,i,o)}function o0(n,t,e,i=!0,r=!1){if(r)throw n;console.error(n)}const fn=[];let hi=-1;const Rs=[];let sr=null,Ms=0;const qp=Promise.resolve();let tl=null;function bo(n){const t=tl||qp;return n?t.then(this?n.bind(this):n):t}function a0(n){let t=hi+1,e=fn.length;for(;t<e;){const i=t+e>>>1,r=fn[i],s=zo(r);s<n||s===n&&r.flags&2?t=i+1:e=i}return t}function gf(n){if(!(n.flags&1)){const t=zo(n),e=fn[fn.length-1];!e||!(n.flags&2)&&t>=zo(e)?fn.push(n):fn.splice(a0(t),0,n),n.flags|=1,Yp()}}function Yp(){tl||(tl=qp.then(Kp))}function l0(n){Xt(n)?Rs.push(...n):sr&&n.id===-1?sr.splice(Ms+1,0,n):n.flags&1||(Rs.push(n),n.flags|=1),Yp()}function fh(n,t,e=hi+1){for(;e<fn.length;e++){const i=fn[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;fn.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function $p(n){if(Rs.length){const t=[...new Set(Rs)].sort((e,i)=>zo(e)-zo(i));if(Rs.length=0,sr){sr.push(...t);return}for(sr=t,Ms=0;Ms<sr.length;Ms++){const e=sr[Ms];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}sr=null,Ms=0}}const zo=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Kp(n){try{for(hi=0;hi<fn.length;hi++){const t=fn[hi];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Qo(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;hi<fn.length;hi++){const t=fn[hi];t&&(t.flags&=-2)}hi=-1,fn.length=0,$p(),tl=null,(fn.length||Rs.length)&&Kp()}}let Yn=null,jp=null;function el(n){const t=Yn;return Yn=n,jp=n&&n.type.__scopeId||null,t}function Ui(n,t=Yn,e){if(!t||n._n)return n;const i=(...r)=>{i._d&&rl(-1);const s=el(t);let o;try{o=n(...r)}finally{el(s),i._d&&rl(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ps(n,t){if(Yn===null)return n;const e=Pl(Yn),i=n.dirs||(n.dirs=[]);for(let r=0;r<t.length;r++){let[s,o,a,l=be]=t[r];s&&(Jt(s)&&(s={mounted:s,updated:s}),s.deep&&Bi(o),i.push({dir:s,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function br(n,t,e,i){const r=n.dirs,s=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Hi(),ci(l,e,8,[n.el,a,n,t]),Gi())}}function c0(n,t){if(dn){let e=dn.provides;const i=dn.parent&&dn.parent.provides;i===e&&(e=dn.provides=Object.create(i)),e[n]=t}}function za(n,t,e=!1){const i=wm();if(i||Ds){let r=Ds?Ds._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return e&&Jt(t)?t.call(i&&i.proxy):t}}const u0=Symbol.for("v-scx"),f0=()=>za(u0);function To(n,t,e){return Zp(n,t,e)}function Zp(n,t,e=be){const{immediate:i,deep:r,flush:s,once:o}=e,a=We({},e),l=t&&i||!t&&s!=="post";let u;if(Ho){if(s==="sync"){const d=f0();u=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=yi,d.resume=yi,d.pause=yi,d}}const c=dn;a.call=(d,g,_)=>ci(d,c,g,_);let f=!1;s==="post"?a.scheduler=d=>{yn(d,c&&c.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(d,g)=>{g?d():gf(d)}),a.augmentJob=d=>{t&&(d.flags|=4),f&&(d.flags|=2,c&&(d.id=c.uid,d.i=c))};const h=s0(n,t,a);return Ho&&(u?u.push(h):l&&h()),h}function h0(n,t,e){const i=this.proxy,r=ze(n)?n.includes(".")?Jp(i,n):()=>i[n]:n.bind(i,i);let s;Jt(t)?s=t:(s=t.handler,e=t);const o=ta(this),a=Zp(r,s.bind(i),e);return o(),a}function Jp(n,t){const e=t.split(".");return()=>{let i=n;for(let r=0;r<e.length&&i;r++)i=i[e[r]];return i}}const d0=Symbol("_vte"),Qp=n=>n.__isTeleport,di=Symbol("_leaveCb"),so=Symbol("_enterCb");function p0(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Js(()=>{n.isMounted=!0}),wl(()=>{n.isUnmounting=!0}),n}const Vn=[Function,Array],tm={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Vn,onEnter:Vn,onAfterEnter:Vn,onEnterCancelled:Vn,onBeforeLeave:Vn,onLeave:Vn,onAfterLeave:Vn,onLeaveCancelled:Vn,onBeforeAppear:Vn,onAppear:Vn,onAfterAppear:Vn,onAppearCancelled:Vn},em=n=>{const t=n.subTree;return t.component?em(t.component):t},m0={name:"BaseTransition",props:tm,setup(n,{slots:t}){const e=wm(),i=p0();return()=>{const r=t.default&&rm(t.default(),!0);if(!r||!r.length)return;const s=nm(r),o=de(n),{mode:a}=o;if(i.isLeaving)return Wl(s);const l=hh(s);if(!l)return Wl(s);let u=qc(l,o,i,e,f=>u=f);l.type!==hn&&ko(l,u);let c=e.subTree&&hh(e.subTree);if(c&&c.type!==hn&&!kr(c,l)&&em(e).type!==hn){let f=qc(c,o,i,e);if(ko(c,f),a==="out-in"&&l.type!==hn)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,e.job.flags&8||e.update(),delete f.afterLeave,c=void 0},Wl(s);a==="in-out"&&l.type!==hn?f.delayLeave=(h,d,g)=>{const _=im(i,c);_[String(c.key)]=c,h[di]=()=>{d(),h[di]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{g(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return s}}};function nm(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==hn){t=e;break}}return t}const _0=m0;function im(n,t){const{leavingVNodes:e}=n;let i=e.get(t.type);return i||(i=Object.create(null),e.set(t.type,i)),i}function qc(n,t,e,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:h,onLeave:d,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:m,onAppear:p,onAfterAppear:y,onAppearCancelled:M}=t,v=String(n.key),A=im(e,n),T=(x,S)=>{x&&ci(x,i,9,S)},w=(x,S)=>{const L=S[1];T(x,S),Xt(x)?x.every(U=>U.length<=1)&&L():x.length<=1&&L()},C={mode:o,persisted:a,beforeEnter(x){let S=l;if(!e.isMounted)if(s)S=m||l;else return;x[di]&&x[di](!0);const L=A[v];L&&kr(n,L)&&L.el[di]&&L.el[di](),T(S,[x])},enter(x){if(A[v]===n)return;let S=u,L=c,U=f;if(!e.isMounted)if(s)S=p||u,L=y||c,U=M||f;else return;let z=!1;x[so]=J=>{z||(z=!0,J?T(U,[x]):T(L,[x]),C.delayedLeave&&C.delayedLeave(),x[so]=void 0)};const K=x[so].bind(null,!1);S?w(S,[x,K]):K()},leave(x,S){const L=String(n.key);if(x[so]&&x[so](!0),e.isUnmounting)return S();T(h,[x]);let U=!1;x[di]=K=>{U||(U=!0,S(),K?T(_,[x]):T(g,[x]),x[di]=void 0,A[L]===n&&delete A[L])};const z=x[di].bind(null,!1);A[L]=n,d?w(d,[x,z]):z()},clone(x){const S=qc(x,t,e,i,r);return r&&r(S),S}};return C}function Wl(n){if(bl(n))return n=gr(n),n.children=null,n}function hh(n){if(!bl(n))return Qp(n.type)&&n.children?nm(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&Jt(e.default))return e.default()}}function ko(n,t){n.shapeFlag&6&&n.component?(n.transition=t,ko(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function rm(n,t=!1,e){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=e==null?o.key:String(e)+String(o.key!=null?o.key:s);o.type===Ue?(o.patchFlag&128&&r++,i=i.concat(rm(o.children,t,a))):(t||o.type!==hn)&&i.push(a!=null?gr(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function g0(n,t){return Jt(n)?We({name:n.name},t,{setup:n}):n}function sm(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function dh(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const nl=new WeakMap;function wo(n,t,e,i,r=!1){if(Xt(n)){n.forEach((_,m)=>wo(_,t&&(Xt(t)?t[m]:t),e,i,r));return}if(Ao(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&wo(n,t,e,i.component.subTree);return}const s=i.shapeFlag&4?Pl(i.component):i.el,o=r?null:s,{i:a,r:l}=n,u=t&&t.r,c=a.refs===be?a.refs={}:a.refs,f=a.setupState,h=de(f),d=f===be?Mp:_=>dh(c,_)?!1:ge(h,_),g=(_,m)=>!(m&&dh(c,m));if(u!=null&&u!==l){if(ph(t),ze(u))c[u]=null,d(u)&&(f[u]=null);else if(sn(u)){const _=t;g(u,_.k)&&(u.value=null),_.k&&(c[_.k]=null)}}if(Jt(l))Qo(l,a,12,[o,c]);else{const _=ze(l),m=sn(l);if(_||m){const p=()=>{if(n.f){const y=_?d(l)?f[l]:c[l]:g()||!n.k?l.value:c[n.k];if(r)Xt(y)&&of(y,s);else if(Xt(y))y.includes(s)||y.push(s);else if(_)c[l]=[s],d(l)&&(f[l]=c[l]);else{const M=[s];g(l,n.k)&&(l.value=M),n.k&&(c[n.k]=M)}}else _?(c[l]=o,d(l)&&(f[l]=o)):m&&(g(l,n.k)&&(l.value=o),n.k&&(c[n.k]=o))};if(o){const y=()=>{p(),nl.delete(n)};y.id=-1,nl.set(n,y),yn(y,e)}else ph(n),p()}}}function ph(n){const t=nl.get(n);t&&(t.flags|=8,nl.delete(n))}Ml().requestIdleCallback;Ml().cancelIdleCallback;const Ao=n=>!!n.type.__asyncLoader,bl=n=>n.type.__isKeepAlive;function v0(n,t){om(n,"a",t)}function x0(n,t){om(n,"da",t)}function om(n,t,e=dn){const i=n.__wdc||(n.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Tl(t,i,e),e){let r=e.parent;for(;r&&r.parent;)bl(r.parent.vnode)&&y0(i,t,e,r),r=r.parent}}function y0(n,t,e,i){const r=Tl(t,n,i,!0);Al(()=>{of(i[t],r)},e)}function Tl(n,t,e=dn,i=!1){if(e){const r=e[n]||(e[n]=[]),s=t.__weh||(t.__weh=(...o)=>{Hi();const a=ta(e),l=ci(t,e,n,o);return a(),Gi(),l});return i?r.unshift(s):r.push(s),s}}const Ki=n=>(t,e=dn)=>{(!Ho||n==="sp")&&Tl(n,(...i)=>t(...i),e)},M0=Ki("bm"),Js=Ki("m"),S0=Ki("bu"),E0=Ki("u"),wl=Ki("bum"),Al=Ki("um"),b0=Ki("sp"),T0=Ki("rtg"),w0=Ki("rtc");function A0(n,t=dn){Tl("ec",n,t)}const C0=Symbol.for("v-ndc");function Xn(n,t,e,i){let r;const s=e,o=Xt(n);if(o||ze(n)){const a=o&&Kr(n);let l=!1,u=!1;a&&(l=!jn(n),u=Wi(n),n=Sl(n)),r=new Array(n.length);for(let c=0,f=n.length;c<f;c++)r[c]=t(l?u?Bs(li(n[c])):li(n[c]):n[c],c,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=t(a+1,a,void 0,s)}else if(ve(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>t(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];r[l]=t(n[c],c,l,s)}}else r=[];return r}const Yc=n=>n?Am(n)?Pl(n):Yc(n.parent):null,Co=We(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Yc(n.parent),$root:n=>Yc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>lm(n),$forceUpdate:n=>n.f||(n.f=()=>{gf(n.update)}),$nextTick:n=>n.n||(n.n=bo.bind(n.proxy)),$watch:n=>h0.bind(n)}),Xl=(n,t)=>n!==be&&!n.__isScriptSetup&&ge(n,t),R0={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const h=o[t];if(h!==void 0)switch(h){case 1:return i[t];case 2:return r[t];case 4:return e[t];case 3:return s[t]}else{if(Xl(i,t))return o[t]=1,i[t];if(r!==be&&ge(r,t))return o[t]=2,r[t];if(ge(s,t))return o[t]=3,s[t];if(e!==be&&ge(e,t))return o[t]=4,e[t];$c&&(o[t]=0)}}const u=Co[t];let c,f;if(u)return t==="$attrs"&&nn(n.attrs,"get",""),u(n);if((c=a.__cssModules)&&(c=c[t]))return c;if(e!==be&&ge(e,t))return o[t]=4,e[t];if(f=l.config.globalProperties,ge(f,t))return f[t]},set({_:n},t,e){const{data:i,setupState:r,ctx:s}=n;return Xl(r,t)?(r[t]=e,!0):i!==be&&ge(i,t)?(i[t]=e,!0):ge(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(s[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(e[a]||n!==be&&a[0]!=="$"&&ge(n,a)||Xl(t,a)||ge(s,a)||ge(i,a)||ge(Co,a)||ge(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:ge(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function mh(n){return Xt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let $c=!0;function P0(n){const t=lm(n),e=n.proxy,i=n.ctx;$c=!1,t.beforeCreate&&_h(t.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:y,destroyed:M,unmounted:v,render:A,renderTracked:T,renderTriggered:w,errorCaptured:C,serverPrefetch:x,expose:S,inheritAttrs:L,components:U,directives:z,filters:K}=t;if(u&&D0(u,i,null),o)for(const j in o){const G=o[j];Jt(G)&&(i[j]=G.bind(e))}if(r){const j=r.call(e,e);ve(j)&&(n.data=Bo(j))}if($c=!0,s)for(const j in s){const G=s[j],pt=Jt(G)?G.bind(e,e):Jt(G.get)?G.get.bind(e,e):yi,vt=!Jt(G)&&Jt(G.set)?G.set.bind(e):yi,St=un({get:pt,set:vt});Object.defineProperty(i,j,{enumerable:!0,configurable:!0,get:()=>St.value,set:Pt=>St.value=Pt})}if(a)for(const j in a)am(a[j],i,e,j);if(l){const j=Jt(l)?l.call(e):l;Reflect.ownKeys(j).forEach(G=>{c0(G,j[G])})}c&&_h(c,n,"c");function $(j,G){Xt(G)?G.forEach(pt=>j(pt.bind(e))):G&&j(G.bind(e))}if($(M0,f),$(Js,h),$(S0,d),$(E0,g),$(v0,_),$(x0,m),$(A0,C),$(w0,T),$(T0,w),$(wl,y),$(Al,v),$(b0,x),Xt(S))if(S.length){const j=n.exposed||(n.exposed={});S.forEach(G=>{Object.defineProperty(j,G,{get:()=>e[G],set:pt=>e[G]=pt,enumerable:!0})})}else n.exposed||(n.exposed={});A&&n.render===yi&&(n.render=A),L!=null&&(n.inheritAttrs=L),U&&(n.components=U),z&&(n.directives=z),x&&sm(n)}function D0(n,t,e=yi){Xt(n)&&(n=Kc(n));for(const i in n){const r=n[i];let s;ve(r)?"default"in r?s=za(r.from||i,r.default,!0):s=za(r.from||i):s=za(r),sn(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[i]=s}}function _h(n,t,e){ci(Xt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function am(n,t,e,i){let r=i.includes(".")?Jp(e,i):()=>e[i];if(ze(n)){const s=t[n];Jt(s)&&To(r,s)}else if(Jt(n))To(r,n.bind(e));else if(ve(n))if(Xt(n))n.forEach(s=>am(s,t,e,i));else{const s=Jt(n.handler)?n.handler.bind(e):t[n.handler];Jt(s)&&To(r,s,n)}}function lm(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(t);let l;return a?l=a:!r.length&&!e&&!i?l=t:(l={},r.length&&r.forEach(u=>il(l,u,o,!0)),il(l,t,o)),ve(t)&&s.set(t,l),l}function il(n,t,e,i=!1){const{mixins:r,extends:s}=t;s&&il(n,s,e,!0),r&&r.forEach(o=>il(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=L0[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const L0={data:gh,props:vh,emits:vh,methods:_o,computed:_o,beforeCreate:ln,created:ln,beforeMount:ln,mounted:ln,beforeUpdate:ln,updated:ln,beforeDestroy:ln,beforeUnmount:ln,destroyed:ln,unmounted:ln,activated:ln,deactivated:ln,errorCaptured:ln,serverPrefetch:ln,components:_o,directives:_o,watch:U0,provide:gh,inject:I0};function gh(n,t){return t?n?function(){return We(Jt(n)?n.call(this,this):n,Jt(t)?t.call(this,this):t)}:t:n}function I0(n,t){return _o(Kc(n),Kc(t))}function Kc(n){if(Xt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function ln(n,t){return n?[...new Set([].concat(n,t))]:t}function _o(n,t){return n?We(Object.create(null),n,t):t}function vh(n,t){return n?Xt(n)&&Xt(t)?[...new Set([...n,...t])]:We(Object.create(null),mh(n),mh(t??{})):t}function U0(n,t){if(!n)return t;if(!t)return n;const e=We(Object.create(null),n);for(const i in t)e[i]=ln(n[i],t[i]);return e}function cm(){return{app:null,config:{isNativeTag:Mp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let N0=0;function O0(n,t){return function(i,r=null){Jt(i)||(i=We({},i)),r!=null&&!ve(r)&&(r=null);const s=cm(),o=new WeakSet,a=[];let l=!1;const u=s.app={_uid:N0++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:_v,get config(){return s.config},set config(c){},use(c,...f){return o.has(c)||(c&&Jt(c.install)?(o.add(c),c.install(u,...f)):Jt(c)&&(o.add(c),c(u,...f))),u},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),u},component(c,f){return f?(s.components[c]=f,u):s.components[c]},directive(c,f){return f?(s.directives[c]=f,u):s.directives[c]},mount(c,f,h){if(!l){const d=u._ceVNode||Ae(i,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(d,c,h),l=!0,u._container=c,c.__vue_app__=u,Pl(d.component)}},onUnmount(c){a.push(c)},unmount(){l&&(ci(a,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(c,f){return s.provides[c]=f,u},runWithContext(c){const f=Ds;Ds=u;try{return c()}finally{Ds=f}}};return u}}let Ds=null;const F0=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${_r(t)}Modifiers`]||n[`${ns(t)}Modifiers`];function B0(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||be;let r=e;const s=t.startsWith("update:"),o=s&&F0(i,t.slice(7));o&&(o.trim&&(r=e.map(c=>ze(c)?c.trim():c)),o.number&&(r=e.map(lf)));let a,l=i[a=zl(t)]||i[a=zl(_r(t))];!l&&s&&(l=i[a=zl(ns(t))]),l&&ci(l,n,6,r);const u=i[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,ci(u,n,6,r)}}const z0=new WeakMap;function um(n,t,e=!1){const i=e?z0:t.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Jt(n)){const l=u=>{const c=um(u,t,!0);c&&(a=!0,We(o,c))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(ve(n)&&i.set(n,null),null):(Xt(s)?s.forEach(l=>o[l]=null):We(o,s),ve(n)&&i.set(n,o),o)}function Cl(n,t){return!n||!xl(t)?!1:(t=t.slice(2).replace(/Once$/,""),ge(n,t[0].toLowerCase()+t.slice(1))||ge(n,ns(t))||ge(n,t))}function xh(n){const{type:t,vnode:e,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:f,data:h,setupState:d,ctx:g,inheritAttrs:_}=n,m=el(n);let p,y;try{if(e.shapeFlag&4){const v=r||i,A=v;p=mi(u.call(A,v,c,f,d,h,g)),y=a}else{const v=t;p=mi(v.length>1?v(f,{attrs:a,slots:o,emit:l}):v(f,null)),y=t.props?a:k0(a)}}catch(v){Ro.length=0,El(v,n,1),p=Ae(hn)}let M=p;if(y&&_!==!1){const v=Object.keys(y),{shapeFlag:A}=M;v.length&&A&7&&(s&&v.some(sf)&&(y=V0(y,s)),M=gr(M,y,!1,!0))}return e.dirs&&(M=gr(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(e.dirs):e.dirs),e.transition&&ko(M,e.transition),p=M,el(m),p}const k0=n=>{let t;for(const e in n)(e==="class"||e==="style"||xl(e))&&((t||(t={}))[e]=n[e]);return t},V0=(n,t)=>{const e={};for(const i in n)(!sf(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function H0(n,t,e){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?yh(i,o,u):!!o;if(l&8){const c=t.dynamicProps;for(let f=0;f<c.length;f++){const h=c[f];if(fm(o,i,h)&&!Cl(u,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?yh(i,o,u):!0:!!o;return!1}function yh(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(fm(t,n,s)&&!Cl(e,s))return!0}return!1}function fm(n,t,e){const i=n[e],r=t[e];return e==="style"&&ve(i)&&ve(r)?!cf(i,r):i!==r}function G0({vnode:n,parent:t},e){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=t.vnode).el=e,t=t.parent;else break}}const hm={},dm=()=>Object.create(hm),pm=n=>Object.getPrototypeOf(n)===hm;function W0(n,t,e,i=!1){const r={},s=dm();n.propsDefaults=Object.create(null),mm(n,t,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);e?n.props=i?r:Zg(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function X0(n,t,e,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=de(r),[l]=n.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const c=n.vnode.dynamicProps;for(let f=0;f<c.length;f++){let h=c[f];if(Cl(n.emitsOptions,h))continue;const d=t[h];if(l)if(ge(s,h))d!==s[h]&&(s[h]=d,u=!0);else{const g=_r(h);r[g]=jc(l,a,g,d,n,!1)}else d!==s[h]&&(s[h]=d,u=!0)}}}else{mm(n,t,r,s)&&(u=!0);let c;for(const f in a)(!t||!ge(t,f)&&((c=ns(f))===f||!ge(t,c)))&&(l?e&&(e[f]!==void 0||e[c]!==void 0)&&(r[f]=jc(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!t||!ge(t,f))&&(delete s[f],u=!0)}u&&Fi(n.attrs,"set","")}function mm(n,t,e,i){const[r,s]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(Mo(l))continue;const u=t[l];let c;r&&ge(r,c=_r(l))?!s||!s.includes(c)?e[c]=u:(a||(a={}))[c]=u:Cl(n.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,o=!0)}if(s){const l=de(e),u=a||be;for(let c=0;c<s.length;c++){const f=s[c];e[f]=jc(r,l,f,u[f],n,!ge(u,f))}}return o}function jc(n,t,e,i,r,s){const o=n[e];if(o!=null){const a=ge(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Jt(l)){const{propsDefaults:u}=r;if(e in u)i=u[e];else{const c=ta(r);i=u[e]=l.call(null,t),c()}}else i=l;r.ce&&r.ce._setProp(e,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===ns(e))&&(i=!0))}return i}const q0=new WeakMap;function _m(n,t,e=!1){const i=e?q0:t.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Jt(n)){const c=f=>{l=!0;const[h,d]=_m(f,t,!0);We(o,h),d&&a.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}if(!s&&!l)return ve(n)&&i.set(n,As),As;if(Xt(s))for(let c=0;c<s.length;c++){const f=_r(s[c]);Mh(f)&&(o[f]=be)}else if(s)for(const c in s){const f=_r(c);if(Mh(f)){const h=s[c],d=o[f]=Xt(h)||Jt(h)?{type:h}:We({},h),g=d.type;let _=!1,m=!0;if(Xt(g))for(let p=0;p<g.length;++p){const y=g[p],M=Jt(y)&&y.name;if(M==="Boolean"){_=!0;break}else M==="String"&&(m=!1)}else _=Jt(g)&&g.name==="Boolean";d[0]=_,d[1]=m,(_||ge(d,"default"))&&a.push(f)}}const u=[o,a];return ve(n)&&i.set(n,u),u}function Mh(n){return n[0]!=="$"&&!Mo(n)}const vf=n=>n==="_"||n==="_ctx"||n==="$stable",xf=n=>Xt(n)?n.map(mi):[mi(n)],Y0=(n,t,e)=>{if(t._n)return t;const i=Ui((...r)=>xf(t(...r)),e);return i._c=!1,i},gm=(n,t,e)=>{const i=n._ctx;for(const r in n){if(vf(r))continue;const s=n[r];if(Jt(s))t[r]=Y0(r,s,i);else if(s!=null){const o=xf(s);t[r]=()=>o}}},vm=(n,t)=>{const e=xf(t);n.slots.default=()=>e},xm=(n,t,e)=>{for(const i in t)(e||!vf(i))&&(n[i]=t[i])},$0=(n,t,e)=>{const i=n.slots=dm();if(n.vnode.shapeFlag&32){const r=t._;r?(xm(i,t,e),e&&Ap(i,"_",r,!0)):gm(t,i)}else t&&vm(n,t)},K0=(n,t,e)=>{const{vnode:i,slots:r}=n;let s=!0,o=be;if(i.shapeFlag&32){const a=t._;a?e&&a===1?s=!1:xm(r,t,e):(s=!t.$stable,gm(t,r)),o=t}else t&&(vm(n,t),o={default:1});if(s)for(const a in r)!vf(a)&&o[a]==null&&delete r[a]},yn=tv;function j0(n){return Z0(n)}function Z0(n,t){const e=Ml();e.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:h,setScopeId:d=yi,insertStaticContent:g}=n,_=(D,B,R,ut=null,Z=null,nt=null,rt=void 0,ft=null,tt=!!B.dynamicChildren)=>{if(D===B)return;D&&!kr(D,B)&&(ut=yt(D),Pt(D,Z,nt,!0),D=null),B.patchFlag===-2&&(tt=!1,B.dynamicChildren=null);const{type:b,ref:E,shapeFlag:O}=B;switch(b){case Rl:m(D,B,R,ut);break;case hn:p(D,B,R,ut);break;case ka:D==null&&y(B,R,ut,rt);break;case Ue:U(D,B,R,ut,Z,nt,rt,ft,tt);break;default:O&1?A(D,B,R,ut,Z,nt,rt,ft,tt):O&6?z(D,B,R,ut,Z,nt,rt,ft,tt):(O&64||O&128)&&b.process(D,B,R,ut,Z,nt,rt,ft,tt,Wt)}E!=null&&Z?wo(E,D&&D.ref,nt,B||D,!B):E==null&&D&&D.ref!=null&&wo(D.ref,null,nt,D,!0)},m=(D,B,R,ut)=>{if(D==null)i(B.el=a(B.children),R,ut);else{const Z=B.el=D.el;B.children!==D.children&&u(Z,B.children)}},p=(D,B,R,ut)=>{D==null?i(B.el=l(B.children||""),R,ut):B.el=D.el},y=(D,B,R,ut)=>{[D.el,D.anchor]=g(D.children,B,R,ut,D.el,D.anchor)},M=({el:D,anchor:B},R,ut)=>{let Z;for(;D&&D!==B;)Z=h(D),i(D,R,ut),D=Z;i(B,R,ut)},v=({el:D,anchor:B})=>{let R;for(;D&&D!==B;)R=h(D),r(D),D=R;r(B)},A=(D,B,R,ut,Z,nt,rt,ft,tt)=>{if(B.type==="svg"?rt="svg":B.type==="math"&&(rt="mathml"),D==null)T(B,R,ut,Z,nt,rt,ft,tt);else{const b=D.el&&D.el._isVueCE?D.el:null;try{b&&b._beginPatch(),x(D,B,Z,nt,rt,ft,tt)}finally{b&&b._endPatch()}}},T=(D,B,R,ut,Z,nt,rt,ft)=>{let tt,b;const{props:E,shapeFlag:O,transition:Y,dirs:I}=D;if(tt=D.el=o(D.type,nt,E&&E.is,E),O&8?c(tt,D.children):O&16&&C(D.children,tt,null,ut,Z,ql(D,nt),rt,ft),I&&br(D,null,ut,"created"),w(tt,D,D.scopeId,rt,ut),E){for(const ot in E)ot!=="value"&&!Mo(ot)&&s(tt,ot,null,E[ot],nt,ut);"value"in E&&s(tt,"value",null,E.value,nt),(b=E.onVnodeBeforeMount)&&fi(b,ut,D)}I&&br(D,null,ut,"beforeMount");const k=J0(Z,Y);k&&Y.beforeEnter(tt),i(tt,B,R),((b=E&&E.onVnodeMounted)||k||I)&&yn(()=>{b&&fi(b,ut,D),k&&Y.enter(tt),I&&br(D,null,ut,"mounted")},Z)},w=(D,B,R,ut,Z)=>{if(R&&d(D,R),ut)for(let nt=0;nt<ut.length;nt++)d(D,ut[nt]);if(Z){let nt=Z.subTree;if(B===nt||Em(nt.type)&&(nt.ssContent===B||nt.ssFallback===B)){const rt=Z.vnode;w(D,rt,rt.scopeId,rt.slotScopeIds,Z.parent)}}},C=(D,B,R,ut,Z,nt,rt,ft,tt=0)=>{for(let b=tt;b<D.length;b++){const E=D[b]=ft?Ni(D[b]):mi(D[b]);_(null,E,B,R,ut,Z,nt,rt,ft)}},x=(D,B,R,ut,Z,nt,rt)=>{const ft=B.el=D.el;let{patchFlag:tt,dynamicChildren:b,dirs:E}=B;tt|=D.patchFlag&16;const O=D.props||be,Y=B.props||be;let I;if(R&&Tr(R,!1),(I=Y.onVnodeBeforeUpdate)&&fi(I,R,B,D),E&&br(B,D,R,"beforeUpdate"),R&&Tr(R,!0),(O.innerHTML&&Y.innerHTML==null||O.textContent&&Y.textContent==null)&&c(ft,""),b?S(D.dynamicChildren,b,ft,R,ut,ql(B,Z),nt):rt||G(D,B,ft,null,R,ut,ql(B,Z),nt,!1),tt>0){if(tt&16)L(ft,O,Y,R,Z);else if(tt&2&&O.class!==Y.class&&s(ft,"class",null,Y.class,Z),tt&4&&s(ft,"style",O.style,Y.style,Z),tt&8){const k=B.dynamicProps;for(let ot=0;ot<k.length;ot++){const at=k[ot],_t=O[at],Ut=Y[at];(Ut!==_t||at==="value")&&s(ft,at,_t,Ut,Z,R)}}tt&1&&D.children!==B.children&&c(ft,B.children)}else!rt&&b==null&&L(ft,O,Y,R,Z);((I=Y.onVnodeUpdated)||E)&&yn(()=>{I&&fi(I,R,B,D),E&&br(B,D,R,"updated")},ut)},S=(D,B,R,ut,Z,nt,rt)=>{for(let ft=0;ft<B.length;ft++){const tt=D[ft],b=B[ft],E=tt.el&&(tt.type===Ue||!kr(tt,b)||tt.shapeFlag&198)?f(tt.el):R;_(tt,b,E,null,ut,Z,nt,rt,!0)}},L=(D,B,R,ut,Z)=>{if(B!==R){if(B!==be)for(const nt in B)!Mo(nt)&&!(nt in R)&&s(D,nt,B[nt],null,Z,ut);for(const nt in R){if(Mo(nt))continue;const rt=R[nt],ft=B[nt];rt!==ft&&nt!=="value"&&s(D,nt,ft,rt,Z,ut)}"value"in R&&s(D,"value",B.value,R.value,Z)}},U=(D,B,R,ut,Z,nt,rt,ft,tt)=>{const b=B.el=D?D.el:a(""),E=B.anchor=D?D.anchor:a("");let{patchFlag:O,dynamicChildren:Y,slotScopeIds:I}=B;I&&(ft=ft?ft.concat(I):I),D==null?(i(b,R,ut),i(E,R,ut),C(B.children||[],R,E,Z,nt,rt,ft,tt)):O>0&&O&64&&Y&&D.dynamicChildren&&D.dynamicChildren.length===Y.length?(S(D.dynamicChildren,Y,R,Z,nt,rt,ft),(B.key!=null||Z&&B===Z.subTree)&&ym(D,B,!0)):G(D,B,R,E,Z,nt,rt,ft,tt)},z=(D,B,R,ut,Z,nt,rt,ft,tt)=>{B.slotScopeIds=ft,D==null?B.shapeFlag&512?Z.ctx.activate(B,R,ut,rt,tt):K(B,R,ut,Z,nt,rt,tt):J(D,B,tt)},K=(D,B,R,ut,Z,nt,rt)=>{const ft=D.component=cv(D,ut,Z);if(bl(D)&&(ft.ctx.renderer=Wt),uv(ft,!1,rt),ft.asyncDep){if(Z&&Z.registerDep(ft,$,rt),!D.el){const tt=ft.subTree=Ae(hn);p(null,tt,B,R),D.placeholder=tt.el}}else $(ft,D,B,R,Z,nt,rt)},J=(D,B,R)=>{const ut=B.component=D.component;if(H0(D,B,R))if(ut.asyncDep&&!ut.asyncResolved){j(ut,B,R);return}else ut.next=B,ut.update();else B.el=D.el,ut.vnode=B},$=(D,B,R,ut,Z,nt,rt)=>{const ft=()=>{if(D.isMounted){let{next:O,bu:Y,u:I,parent:k,vnode:ot}=D;{const xt=Mm(D);if(xt){O&&(O.el=ot.el,j(D,O,rt)),xt.asyncDep.then(()=>{yn(()=>{D.isUnmounted||b()},Z)});return}}let at=O,_t;Tr(D,!1),O?(O.el=ot.el,j(D,O,rt)):O=ot,Y&&Ba(Y),(_t=O.props&&O.props.onVnodeBeforeUpdate)&&fi(_t,k,O,ot),Tr(D,!0);const Ut=xh(D),ht=D.subTree;D.subTree=Ut,_(ht,Ut,f(ht.el),yt(ht),D,Z,nt),O.el=Ut.el,at===null&&G0(D,Ut.el),I&&yn(I,Z),(_t=O.props&&O.props.onVnodeUpdated)&&yn(()=>fi(_t,k,O,ot),Z)}else{let O;const{el:Y,props:I}=B,{bm:k,m:ot,parent:at,root:_t,type:Ut}=D,ht=Ao(B);Tr(D,!1),k&&Ba(k),!ht&&(O=I&&I.onVnodeBeforeMount)&&fi(O,at,B),Tr(D,!0);{_t.ce&&_t.ce._hasShadowRoot()&&_t.ce._injectChildStyle(Ut);const xt=D.subTree=xh(D);_(null,xt,R,ut,D,Z,nt),B.el=xt.el}if(ot&&yn(ot,Z),!ht&&(O=I&&I.onVnodeMounted)){const xt=B;yn(()=>fi(O,at,xt),Z)}(B.shapeFlag&256||at&&Ao(at.vnode)&&at.vnode.shapeFlag&256)&&D.a&&yn(D.a,Z),D.isMounted=!0,B=R=ut=null}};D.scope.on();const tt=D.effect=new Dp(ft);D.scope.off();const b=D.update=tt.run.bind(tt),E=D.job=tt.runIfDirty.bind(tt);E.i=D,E.id=D.uid,tt.scheduler=()=>gf(E),Tr(D,!0),b()},j=(D,B,R)=>{B.component=D;const ut=D.vnode.props;D.vnode=B,D.next=null,X0(D,B.props,ut,R),K0(D,B.children,R),Hi(),fh(D),Gi()},G=(D,B,R,ut,Z,nt,rt,ft,tt=!1)=>{const b=D&&D.children,E=D?D.shapeFlag:0,O=B.children,{patchFlag:Y,shapeFlag:I}=B;if(Y>0){if(Y&128){vt(b,O,R,ut,Z,nt,rt,ft,tt);return}else if(Y&256){pt(b,O,R,ut,Z,nt,rt,ft,tt);return}}I&8?(E&16&&Ct(b,Z,nt),O!==b&&c(R,O)):E&16?I&16?vt(b,O,R,ut,Z,nt,rt,ft,tt):Ct(b,Z,nt,!0):(E&8&&c(R,""),I&16&&C(O,R,ut,Z,nt,rt,ft,tt))},pt=(D,B,R,ut,Z,nt,rt,ft,tt)=>{D=D||As,B=B||As;const b=D.length,E=B.length,O=Math.min(b,E);let Y;for(Y=0;Y<O;Y++){const I=B[Y]=tt?Ni(B[Y]):mi(B[Y]);_(D[Y],I,R,null,Z,nt,rt,ft,tt)}b>E?Ct(D,Z,nt,!0,!1,O):C(B,R,ut,Z,nt,rt,ft,tt,O)},vt=(D,B,R,ut,Z,nt,rt,ft,tt)=>{let b=0;const E=B.length;let O=D.length-1,Y=E-1;for(;b<=O&&b<=Y;){const I=D[b],k=B[b]=tt?Ni(B[b]):mi(B[b]);if(kr(I,k))_(I,k,R,null,Z,nt,rt,ft,tt);else break;b++}for(;b<=O&&b<=Y;){const I=D[O],k=B[Y]=tt?Ni(B[Y]):mi(B[Y]);if(kr(I,k))_(I,k,R,null,Z,nt,rt,ft,tt);else break;O--,Y--}if(b>O){if(b<=Y){const I=Y+1,k=I<E?B[I].el:ut;for(;b<=Y;)_(null,B[b]=tt?Ni(B[b]):mi(B[b]),R,k,Z,nt,rt,ft,tt),b++}}else if(b>Y)for(;b<=O;)Pt(D[b],Z,nt,!0),b++;else{const I=b,k=b,ot=new Map;for(b=k;b<=Y;b++){const it=B[b]=tt?Ni(B[b]):mi(B[b]);it.key!=null&&ot.set(it.key,b)}let at,_t=0;const Ut=Y-k+1;let ht=!1,xt=0;const It=new Array(Ut);for(b=0;b<Ut;b++)It[b]=0;for(b=I;b<=O;b++){const it=D[b];if(_t>=Ut){Pt(it,Z,nt,!0);continue}let Tt;if(it.key!=null)Tt=ot.get(it.key);else for(at=k;at<=Y;at++)if(It[at-k]===0&&kr(it,B[at])){Tt=at;break}Tt===void 0?Pt(it,Z,nt,!0):(It[Tt-k]=b+1,Tt>=xt?xt=Tt:ht=!0,_(it,B[Tt],R,null,Z,nt,rt,ft,tt),_t++)}const Et=ht?Q0(It):As;for(at=Et.length-1,b=Ut-1;b>=0;b--){const it=k+b,Tt=B[it],Ot=B[it+1],he=it+1<E?Ot.el||Sm(Ot):ut;It[b]===0?_(null,Tt,R,he,Z,nt,rt,ft,tt):ht&&(at<0||b!==Et[at]?St(Tt,R,he,2):at--)}}},St=(D,B,R,ut,Z=null)=>{const{el:nt,type:rt,transition:ft,children:tt,shapeFlag:b}=D;if(b&6){St(D.component.subTree,B,R,ut);return}if(b&128){D.suspense.move(B,R,ut);return}if(b&64){rt.move(D,B,R,Wt);return}if(rt===Ue){i(nt,B,R);for(let O=0;O<tt.length;O++)St(tt[O],B,R,ut);i(D.anchor,B,R);return}if(rt===ka){M(D,B,R);return}if(ut!==2&&b&1&&ft)if(ut===0)ft.beforeEnter(nt),i(nt,B,R),yn(()=>ft.enter(nt),Z);else{const{leave:O,delayLeave:Y,afterLeave:I}=ft,k=()=>{D.ctx.isUnmounted?r(nt):i(nt,B,R)},ot=()=>{nt._isLeaving&&nt[di](!0),O(nt,()=>{k(),I&&I()})};Y?Y(nt,k,ot):ot()}else i(nt,B,R)},Pt=(D,B,R,ut=!1,Z=!1)=>{const{type:nt,props:rt,ref:ft,children:tt,dynamicChildren:b,shapeFlag:E,patchFlag:O,dirs:Y,cacheIndex:I}=D;if(O===-2&&(Z=!1),ft!=null&&(Hi(),wo(ft,null,R,D,!0),Gi()),I!=null&&(B.renderCache[I]=void 0),E&256){B.ctx.deactivate(D);return}const k=E&1&&Y,ot=!Ao(D);let at;if(ot&&(at=rt&&rt.onVnodeBeforeUnmount)&&fi(at,B,D),E&6)mt(D.component,R,ut);else{if(E&128){D.suspense.unmount(R,ut);return}k&&br(D,null,B,"beforeUnmount"),E&64?D.type.remove(D,B,R,Wt,ut):b&&!b.hasOnce&&(nt!==Ue||O>0&&O&64)?Ct(b,B,R,!1,!0):(nt===Ue&&O&384||!Z&&E&16)&&Ct(tt,B,R),ut&&Qt(D)}(ot&&(at=rt&&rt.onVnodeUnmounted)||k)&&yn(()=>{at&&fi(at,B,D),k&&br(D,null,B,"unmounted")},R)},Qt=D=>{const{type:B,el:R,anchor:ut,transition:Z}=D;if(B===Ue){st(R,ut);return}if(B===ka){v(D);return}const nt=()=>{r(R),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(D.shapeFlag&1&&Z&&!Z.persisted){const{leave:rt,delayLeave:ft}=Z,tt=()=>rt(R,nt);ft?ft(D.el,nt,tt):tt()}else nt()},st=(D,B)=>{let R;for(;D!==B;)R=h(D),r(D),D=R;r(B)},mt=(D,B,R)=>{const{bum:ut,scope:Z,job:nt,subTree:rt,um:ft,m:tt,a:b}=D;Sh(tt),Sh(b),ut&&Ba(ut),Z.stop(),nt&&(nt.flags|=8,Pt(rt,D,B,R)),ft&&yn(ft,B),yn(()=>{D.isUnmounted=!0},B)},Ct=(D,B,R,ut=!1,Z=!1,nt=0)=>{for(let rt=nt;rt<D.length;rt++)Pt(D[rt],B,R,ut,Z)},yt=D=>{if(D.shapeFlag&6)return yt(D.component.subTree);if(D.shapeFlag&128)return D.suspense.next();const B=h(D.anchor||D.el),R=B&&B[d0];return R?h(R):B};let Bt=!1;const kt=(D,B,R)=>{let ut;D==null?B._vnode&&(Pt(B._vnode,null,null,!0),ut=B._vnode.component):_(B._vnode||null,D,B,null,null,null,R),B._vnode=D,Bt||(Bt=!0,fh(ut),$p(),Bt=!1)},Wt={p:_,um:Pt,m:St,r:Qt,mt:K,mc:C,pc:G,pbc:S,n:yt,o:n};return{render:kt,hydrate:void 0,createApp:O0(kt)}}function ql({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Tr({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function J0(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function ym(n,t,e=!1){const i=n.children,r=t.children;if(Xt(i)&&Xt(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Ni(r[s]),a.el=o.el),!e&&a.patchFlag!==-2&&ym(o,a)),a.type===Rl&&(a.patchFlag===-1&&(a=r[s]=Ni(a)),a.el=o.el),a.type===hn&&!a.el&&(a.el=o.el)}}function Q0(n){const t=n.slice(),e=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const u=n[i];if(u!==0){if(r=e[e.length-1],n[r]<u){t[i]=r,e.push(i);continue}for(s=0,o=e.length-1;s<o;)a=s+o>>1,n[e[a]]<u?s=a+1:o=a;u<n[e[s]]&&(s>0&&(t[i]=e[s-1]),e[s]=i)}}for(s=e.length,o=e[s-1];s-- >0;)e[s]=o,o=t[o];return e}function Mm(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Mm(t)}function Sh(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function Sm(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?Sm(t.subTree):null}const Em=n=>n.__isSuspense;function tv(n,t){t&&t.pendingBranch?Xt(n)?t.effects.push(...n):t.effects.push(n):l0(n)}const Ue=Symbol.for("v-fgt"),Rl=Symbol.for("v-txt"),hn=Symbol.for("v-cmt"),ka=Symbol.for("v-stc"),Ro=[];let In=null;function ie(n=!1){Ro.push(In=n?null:[])}function ev(){Ro.pop(),In=Ro[Ro.length-1]||null}let Vo=1;function rl(n,t=!1){Vo+=n,n<0&&In&&t&&(In.hasOnce=!0)}function bm(n){return n.dynamicChildren=Vo>0?In||As:null,ev(),Vo>0&&In&&In.push(n),n}function se(n,t,e,i,r,s){return bm(F(n,t,e,i,r,s,!0))}function nv(n,t,e,i,r){return bm(Ae(n,t,e,i,r,!0))}function sl(n){return n?n.__v_isVNode===!0:!1}function kr(n,t){return n.type===t.type&&n.key===t.key}const Tm=({key:n})=>n??null,Va=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?ze(n)||sn(n)||Jt(n)?{i:Yn,r:n,k:t,f:!!e}:n:null);function F(n,t=null,e=null,i=0,r=null,s=n===Ue?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Tm(t),ref:t&&Va(t),scopeId:jp,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Yn};return a?(yf(l,e),s&128&&n.normalize(l)):e&&(l.shapeFlag|=ze(e)?8:16),Vo>0&&!o&&In&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&In.push(l),l}const Ae=iv;function iv(n,t=null,e=null,i=0,r=null,s=!1){if((!n||n===C0)&&(n=hn),sl(n)){const a=gr(n,t,!0);return e&&yf(a,e),Vo>0&&!s&&In&&(a.shapeFlag&6?In[In.indexOf(n)]=a:In.push(a)),a.patchFlag=-2,a}if(pv(n)&&(n=n.__vccOpts),t){t=rv(t);let{class:a,style:l}=t;a&&!ze(a)&&(t.class=Fe(a)),ve(l)&&(_f(l)&&!Xt(l)&&(l=We({},l)),t.style=ri(l))}const o=ze(n)?1:Em(n)?128:Qp(n)?64:ve(n)?4:Jt(n)?2:0;return F(n,t,e,i,r,o,s,!0)}function rv(n){return n?_f(n)||pm(n)?We({},n):n:null}function gr(n,t,e=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,u=t?ov(r||{},t):r,c={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&Tm(u),ref:t&&t.ref?e&&s?Xt(s)?s.concat(Va(t)):[s,Va(t)]:Va(t):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Ue?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&gr(n.ssContent),ssFallback:n.ssFallback&&gr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&ko(c,l.clone(c)),c}function Ha(n=" ",t=0){return Ae(Rl,null,n,t)}function sv(n,t){const e=Ae(ka,null,n);return e.staticCount=t,e}function Gn(n="",t=!1){return t?(ie(),nv(hn,null,n)):Ae(hn,null,n)}function mi(n){return n==null||typeof n=="boolean"?Ae(hn):Xt(n)?Ae(Ue,null,n.slice()):sl(n)?Ni(n):Ae(Rl,null,String(n))}function Ni(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:gr(n)}function yf(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Xt(t))e=16;else if(typeof t=="object")if(i&65){const r=t.default;r&&(r._c&&(r._d=!1),yf(n,r()),r._c&&(r._d=!0));return}else{e=32;const r=t._;!r&&!pm(t)?t._ctx=Yn:r===3&&Yn&&(Yn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else Jt(t)?(t={default:t,_ctx:Yn},e=32):(t=String(t),i&64?(e=16,t=[Ha(t)]):e=8);n.children=t,n.shapeFlag|=e}function ov(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const r in i)if(r==="class")t.class!==i.class&&(t.class=Fe([t.class,i.class]));else if(r==="style")t.style=ri([t.style,i.style]);else if(xl(r)){const s=t[r],o=i[r];o&&s!==o&&!(Xt(s)&&s.includes(o))&&(t[r]=s?[].concat(s,o):o)}else r!==""&&(t[r]=i[r])}return t}function fi(n,t,e,i=null){ci(n,t,7,[e,i])}const av=cm();let lv=0;function cv(n,t,e){const i=n.type,r=(t?t.appContext:n.appContext)||av,s={uid:lv++,vnode:n,type:i,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Dg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_m(i,r),emitsOptions:um(i,r),emit:null,emitted:null,propsDefaults:be,inheritAttrs:i.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=B0.bind(null,s),n.ce&&n.ce(s),s}let dn=null;const wm=()=>dn||Yn;let ol,Zc;{const n=Ml(),t=(e,i)=>{let r;return(r=n[e])||(r=n[e]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};ol=t("__VUE_INSTANCE_SETTERS__",e=>dn=e),Zc=t("__VUE_SSR_SETTERS__",e=>Ho=e)}const ta=n=>{const t=dn;return ol(n),n.scope.on(),()=>{n.scope.off(),ol(t)}},Eh=()=>{dn&&dn.scope.off(),ol(null)};function Am(n){return n.vnode.shapeFlag&4}let Ho=!1;function uv(n,t=!1,e=!1){t&&Zc(t);const{props:i,children:r}=n.vnode,s=Am(n);W0(n,i,s,t),$0(n,r,e||t);const o=s?fv(n,t):void 0;return t&&Zc(!1),o}function fv(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,R0);const{setup:i}=e;if(i){Hi();const r=n.setupContext=i.length>1?dv(n):null,s=ta(n),o=Qo(i,n,0,[n.props,r]),a=Ep(o);if(Gi(),s(),(a||n.sp)&&!Ao(n)&&sm(n),a){if(o.then(Eh,Eh),t)return o.then(l=>{bh(n,l)}).catch(l=>{El(l,n,0)});n.asyncDep=o}else bh(n,o)}else Cm(n)}function bh(n,t,e){Jt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:ve(t)&&(n.setupState=Xp(t)),Cm(n)}function Cm(n,t,e){const i=n.type;n.render||(n.render=i.render||yi);{const r=ta(n);Hi();try{P0(n)}finally{Gi(),r()}}}const hv={get(n,t){return nn(n,"get",""),n[t]}};function dv(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,hv),slots:n.slots,emit:n.emit,expose:t}}function Pl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Xp(Jg(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Co)return Co[e](n)},has(t,e){return e in t||e in Co}})):n.proxy}function pv(n){return Jt(n)&&"__vccOpts"in n}const un=(n,t)=>i0(n,t,Ho);function mv(n,t,e){try{rl(-1);const i=arguments.length;return i===2?ve(t)&&!Xt(t)?sl(t)?Ae(n,null,[t]):Ae(n,t):Ae(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&sl(e)&&(e=[e]),Ae(n,t,e))}finally{rl(1)}}const _v="3.5.29";/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Jc;const Th=typeof window<"u"&&window.trustedTypes;if(Th)try{Jc=Th.createPolicy("vue",{createHTML:n=>n})}catch{}const Rm=Jc?n=>Jc.createHTML(n):n=>n,gv="http://www.w3.org/2000/svg",vv="http://www.w3.org/1998/Math/MathML",Li=typeof document<"u"?document:null,wh=Li&&Li.createElement("template"),xv={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const r=t==="svg"?Li.createElementNS(gv,n):t==="mathml"?Li.createElementNS(vv,n):e?Li.createElement(n,{is:e}):Li.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Li.createTextNode(n),createComment:n=>Li.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Li.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,r,s){const o=e?e.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),e),!(r===s||!(r=r.nextSibling)););else{wh.innerHTML=Rm(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=wh.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},Zi="transition",oo="animation",Go=Symbol("_vtc"),Pm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},yv=We({},tm,Pm),Mv=n=>(n.displayName="Transition",n.props=yv,n),or=Mv((n,{slots:t})=>mv(_0,Sv(n),t)),wr=(n,t=[])=>{Xt(n)?n.forEach(e=>e(...t)):n&&n(...t)},Ah=n=>n?Xt(n)?n.some(t=>t.length>1):n.length>1:!1;function Sv(n){const t={};for(const U in n)U in Pm||(t[U]=n[U]);if(n.css===!1)return t;const{name:e="v",type:i,duration:r,enterFromClass:s=`${e}-enter-from`,enterActiveClass:o=`${e}-enter-active`,enterToClass:a=`${e}-enter-to`,appearFromClass:l=s,appearActiveClass:u=o,appearToClass:c=a,leaveFromClass:f=`${e}-leave-from`,leaveActiveClass:h=`${e}-leave-active`,leaveToClass:d=`${e}-leave-to`}=n,g=Ev(r),_=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:y,onEnterCancelled:M,onLeave:v,onLeaveCancelled:A,onBeforeAppear:T=p,onAppear:w=y,onAppearCancelled:C=M}=t,x=(U,z,K,J)=>{U._enterCancelled=J,Ar(U,z?c:a),Ar(U,z?u:o),K&&K()},S=(U,z)=>{U._isLeaving=!1,Ar(U,f),Ar(U,d),Ar(U,h),z&&z()},L=U=>(z,K)=>{const J=U?w:y,$=()=>x(z,U,K);wr(J,[z,$]),Ch(()=>{Ar(z,U?l:s),Ti(z,U?c:a),Ah(J)||Rh(z,i,_,$)})};return We(t,{onBeforeEnter(U){wr(p,[U]),Ti(U,s),Ti(U,o)},onBeforeAppear(U){wr(T,[U]),Ti(U,l),Ti(U,u)},onEnter:L(!1),onAppear:L(!0),onLeave(U,z){U._isLeaving=!0;const K=()=>S(U,z);Ti(U,f),U._enterCancelled?(Ti(U,h),Lh(U)):(Lh(U),Ti(U,h)),Ch(()=>{U._isLeaving&&(Ar(U,f),Ti(U,d),Ah(v)||Rh(U,i,m,K))}),wr(v,[U,K])},onEnterCancelled(U){x(U,!1,void 0,!0),wr(M,[U])},onAppearCancelled(U){x(U,!0,void 0,!0),wr(C,[U])},onLeaveCancelled(U){S(U),wr(A,[U])}})}function Ev(n){if(n==null)return null;if(ve(n))return[Yl(n.enter),Yl(n.leave)];{const t=Yl(n);return[t,t]}}function Yl(n){return Eg(n)}function Ti(n,t){t.split(/\s+/).forEach(e=>e&&n.classList.add(e)),(n[Go]||(n[Go]=new Set)).add(t)}function Ar(n,t){t.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const e=n[Go];e&&(e.delete(t),e.size||(n[Go]=void 0))}function Ch(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let bv=0;function Rh(n,t,e,i){const r=n._endId=++bv,s=()=>{r===n._endId&&i()};if(e!=null)return setTimeout(s,e);const{type:o,timeout:a,propCount:l}=Tv(n,t);if(!o)return i();const u=o+"end";let c=0;const f=()=>{n.removeEventListener(u,h),s()},h=d=>{d.target===n&&++c>=l&&f()};setTimeout(()=>{c<l&&f()},a+1),n.addEventListener(u,h)}function Tv(n,t){const e=window.getComputedStyle(n),i=g=>(e[g]||"").split(", "),r=i(`${Zi}Delay`),s=i(`${Zi}Duration`),o=Ph(r,s),a=i(`${oo}Delay`),l=i(`${oo}Duration`),u=Ph(a,l);let c=null,f=0,h=0;t===Zi?o>0&&(c=Zi,f=o,h=s.length):t===oo?u>0&&(c=oo,f=u,h=l.length):(f=Math.max(o,u),c=f>0?o>u?Zi:oo:null,h=c?c===Zi?s.length:l.length:0);const d=c===Zi&&/\b(?:transform|all)(?:,|$)/.test(i(`${Zi}Property`).toString());return{type:c,timeout:f,propCount:h,hasTransform:d}}function Ph(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((e,i)=>Dh(e)+Dh(n[i])))}function Dh(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Lh(n){return(n?n.ownerDocument:document).body.offsetHeight}function wv(n,t,e){const i=n[Go];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const al=Symbol("_vod"),Dm=Symbol("_vsh"),Po={name:"show",beforeMount(n,{value:t},{transition:e}){n[al]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):ao(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),ao(n,!0),i.enter(n)):i.leave(n,()=>{ao(n,!1)}):ao(n,t))},beforeUnmount(n,{value:t}){ao(n,t)}};function ao(n,t){n.style.display=t?n[al]:"none",n[Dm]=!t}const Av=Symbol(""),Cv=/(?:^|;)\s*display\s*:/;function Rv(n,t,e){const i=n.style,r=ze(e);let s=!1;if(e&&!r){if(t)if(ze(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&Ga(i,a,"")}else for(const o in t)e[o]==null&&Ga(i,o,"");for(const o in e)o==="display"&&(s=!0),Ga(i,o,e[o])}else if(r){if(t!==e){const o=i[Av];o&&(e+=";"+o),i.cssText=e,s=Cv.test(e)}}else t&&n.removeAttribute("style");al in n&&(n[al]=s?i.display:"",n[Dm]&&(i.display="none"))}const Ih=/\s*!important$/;function Ga(n,t,e){if(Xt(e))e.forEach(i=>Ga(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=Pv(n,t);Ih.test(e)?n.setProperty(ns(i),e.replace(Ih,""),"important"):n[i]=e}}const Uh=["Webkit","Moz","ms"],$l={};function Pv(n,t){const e=$l[t];if(e)return e;let i=_r(t);if(i!=="filter"&&i in n)return $l[t]=i;i=wp(i);for(let r=0;r<Uh.length;r++){const s=Uh[r]+i;if(s in n)return $l[t]=s}return t}const Nh="http://www.w3.org/1999/xlink";function Oh(n,t,e,i,r,s=Rg(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Nh,t.slice(6,t.length)):n.setAttributeNS(Nh,t,e):e==null||s&&!Cp(e)?n.removeAttribute(t):n.setAttribute(t,s?"":Mi(e)?String(e):e)}function Fh(n,t,e,i,r){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Rm(e):e);return}const s=n.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=Cp(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(r||t)}function Ss(n,t,e,i){n.addEventListener(t,e,i)}function Dv(n,t,e,i){n.removeEventListener(t,e,i)}const Bh=Symbol("_vei");function Lv(n,t,e,i,r=null){const s=n[Bh]||(n[Bh]={}),o=s[t];if(i&&o)o.value=i;else{const[a,l]=Iv(t);if(i){const u=s[t]=Ov(i,r);Ss(n,a,u,l)}else o&&(Dv(n,a,o,l),s[t]=void 0)}}const zh=/(?:Once|Passive|Capture)$/;function Iv(n){let t;if(zh.test(n)){t={};let i;for(;i=n.match(zh);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ns(n.slice(2)),t]}let Kl=0;const Uv=Promise.resolve(),Nv=()=>Kl||(Uv.then(()=>Kl=0),Kl=Date.now());function Ov(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;ci(Fv(i,e.value),t,5,[i])};return e.value=n,e.attached=Nv(),e}function Fv(n,t){if(Xt(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>r=>!r._stopped&&i&&i(r))}else return t}const kh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Bv=(n,t,e,i,r,s)=>{const o=r==="svg";t==="class"?wv(n,i,o):t==="style"?Rv(n,e,i):xl(t)?sf(t)||Lv(n,t,e,i,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):zv(n,t,i,o))?(Fh(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Oh(n,t,i,o,s,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!ze(i))?Fh(n,_r(t),i,s,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),Oh(n,t,i,o))};function zv(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&kh(t)&&Jt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return kh(t)&&ze(e)?!1:t in n}const Vh=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Xt(t)?e=>Ba(t,e):t};function kv(n){n.target.composing=!0}function Hh(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const jl=Symbol("_assign");function Gh(n,t,e){return t&&(n=n.trim()),e&&(n=lf(n)),n}const Vv={created(n,{modifiers:{lazy:t,trim:e,number:i}},r){n[jl]=Vh(r);const s=i||r.props&&r.props.type==="number";Ss(n,t?"change":"input",o=>{o.target.composing||n[jl](Gh(n.value,e,s))}),(e||s)&&Ss(n,"change",()=>{n.value=Gh(n.value,e,s)}),t||(Ss(n,"compositionstart",kv),Ss(n,"compositionend",Hh),Ss(n,"change",Hh))},mounted(n,{value:t}){n.value=t??""},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:r,number:s}},o){if(n[jl]=Vh(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?lf(n.value):n.value,l=t??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&t===e||r&&n.value.trim()===l)||(n.value=l))}},Hv=We({patchProp:Bv},xv);let Wh;function Gv(){return Wh||(Wh=j0(Hv))}const Wv=((...n)=>{const t=Gv().createApp(...n),{mount:e}=t;return t.mount=i=>{const r=qv(i);if(!r)return;const s=t._component;!Jt(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=e(r,!1,Xv(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t});function Xv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function qv(n){return ze(n)?document.querySelector(n):n}function Ii(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Lm(n,t){n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var On={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},zs={duration:.5,overwrite:!1,delay:0},Mf,Ze,Re,$n=1e8,Ee=1/$n,Qc=Math.PI*2,Yv=Qc/4,$v=0,Im=Math.sqrt,Kv=Math.cos,jv=Math.sin,$e=function(t){return typeof t=="string"},Ne=function(t){return typeof t=="function"},Xi=function(t){return typeof t=="number"},Sf=function(t){return typeof t>"u"},Si=function(t){return typeof t=="object"},En=function(t){return t!==!1},Ef=function(){return typeof window<"u"},da=function(t){return Ne(t)||$e(t)},Um=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},on=Array.isArray,Zv=/random\([^)]+\)/g,Jv=/,\s*/g,Xh=/(?:-?\.?\d|\.)+/gi,Nm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,bs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Zl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Om=/[+-]=-?[.\d]+/,Qv=/[^,'"\[\]\s]+/gi,tx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,De,pi,tu,bf,Fn={},ll={},Fm,Bm=function(t){return(ll=ks(t,Fn))&&An},Tf=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Wo=function(t,e){return!e&&console.warn(t)},zm=function(t,e){return t&&(Fn[t]=e)&&ll&&(ll[t]=e)||Fn},Xo=function(){return 0},ex={suppressEvents:!0,isStart:!0,kill:!1},Wa={suppressEvents:!0,kill:!1},nx={suppressEvents:!0},wf={},hr=[],eu={},km,Dn={},Jl={},qh=30,Xa=[],Af="",Cf=function(t){var e=t[0],i,r;if(Si(e)||Ne(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(r=Xa.length;r--&&!Xa[r].targetTest(e););i=Xa[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new u_(t[r],i)))||t.splice(r,1);return t},jr=function(t){return t._gsap||Cf(Kn(t))[0]._gsap},Vm=function(t,e,i){return(i=t[e])&&Ne(i)?t[e]():Sf(i)&&t.getAttribute&&t.getAttribute(e)||i},bn=function(t,e){return(t=t.split(",")).forEach(e)||t},Be=function(t){return Math.round(t*1e5)/1e5||0},Pe=function(t){return Math.round(t*1e7)/1e7||0},Ls=function(t,e){var i=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+r:i==="-"?t-r:i==="*"?t*r:t/r},ix=function(t,e){for(var i=e.length,r=0;t.indexOf(e[r])<0&&++r<i;);return r<i},cl=function(){var t=hr.length,e=hr.slice(0),i,r;for(eu={},hr.length=0,i=0;i<t;i++)r=e[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Rf=function(t){return!!(t._initted||t._startAt||t.add)},Hm=function(t,e,i,r){hr.length&&!Ze&&cl(),t.render(e,i,!!(Ze&&e<0&&Rf(t))),hr.length&&!Ze&&cl()},Gm=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Qv).length<2?e:$e(t)?t.trim():t},Wm=function(t){return t},Bn=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},rx=function(t){return function(e,i){for(var r in i)r in e||r==="duration"&&t||r==="ease"||(e[r]=i[r])}},ks=function(t,e){for(var i in e)t[i]=e[i];return t},Yh=function n(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=Si(e[i])?n(t[i]||(t[i]={}),e[i]):e[i]);return t},ul=function(t,e){var i={},r;for(r in t)r in e||(i[r]=t[r]);return i},Do=function(t){var e=t.parent||De,i=t.keyframes?rx(on(t.keyframes)):Bn;if(En(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},sx=function(t,e){for(var i=t.length,r=i===e.length;r&&i--&&t[i]===e[i];);return i<0},Xm=function(t,e,i,r,s){var o=t[r],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[r]=e,e._prev=o,e.parent=e._dp=t,e},Dl=function(t,e,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=e._prev,o=e._next;s?s._next=o:t[i]===e&&(t[i]=o),o?o._prev=s:t[r]===e&&(t[r]=s),e._next=e._prev=e.parent=null},vr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Zr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},ox=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},nu=function(t,e,i,r){return t._startAt&&(Ze?t._startAt.revert(Wa):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},ax=function n(t){return!t||t._ts&&n(t.parent)},$h=function(t){return t._repeat?Vs(t._tTime,t=t.duration()+t._rDelay)*t:0},Vs=function(t,e){var i=Math.floor(t=Pe(t/e));return t&&i===t?i-1:i},fl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Ll=function(t){return t._end=Pe(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ee)||0))},Il=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=Pe(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Ll(t),i._dirty||Zr(i,t)),t},qm=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=fl(t.rawTime(),e),(!e._dur||ea(0,e.totalDuration(),i)-e._tTime>Ee)&&e.render(i,!0)),Zr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-Ee}},gi=function(t,e,i,r){return e.parent&&vr(e),e._start=Pe((Xi(i)?i:i||t!==De?Wn(t,i,e):t._time)+e._delay),e._end=Pe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Xm(t,e,"_first","_last",t._sort?"_start":0),iu(e)||(t._recent=e),r||qm(t,e),t._ts<0&&Il(t,t._tTime),t},Ym=function(t,e){return(Fn.ScrollTrigger||Tf("scrollTrigger",e))&&Fn.ScrollTrigger.create(e,t)},$m=function(t,e,i,r,s){if(Df(t,e,s),!t._initted)return 1;if(!i&&t._pt&&!Ze&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&km!==Ln.frame)return hr.push(t),t._lazy=[s,r],1},lx=function n(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||n(e))},iu=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},cx=function(t,e,i,r){var s=t.ratio,o=e<0||!e&&(!t._start&&lx(t)&&!(!t._initted&&iu(t))||(t._ts<0||t._dp._ts<0)&&!iu(t))?0:1,a=t._rDelay,l=0,u,c,f;if(a&&t._repeat&&(l=ea(0,t._tDur,e),c=Vs(l,a),t._yoyo&&c&1&&(o=1-o),c!==Vs(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||Ze||r||t._zTime===Ee||!e&&t._zTime){if(!t._initted&&$m(t,e,r,i,l))return;for(f=t._zTime,t._zTime=e||(i?Ee:0),i||(i=e&&!f),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,u=t._pt;u;)u.r(o,u.d),u=u._next;e<0&&nu(t,e,i,!0),t._onUpdate&&!i&&Un(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&Un(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&vr(t,1),!i&&!Ze&&(Un(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},ux=function(t,e,i){var r;if(i>e)for(r=t._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},Hs=function(t,e,i,r){var s=t._repeat,o=Pe(e)||0,a=t._tTime/t._tDur;return a&&!r&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Pe(o*(s+1)+t._rDelay*s):o,a>0&&!r&&Il(t,t._tTime=t._tDur*a),t.parent&&Ll(t),i||Zr(t.parent,t),t},Kh=function(t){return t instanceof pn?Zr(t):Hs(t,t._dur)},fx={_start:0,endTime:Xo,totalDuration:Xo},Wn=function n(t,e,i){var r=t.labels,s=t._recent||fx,o=t.duration()>=$n?s.endTime(!1):t._dur,a,l,u;return $e(e)&&(isNaN(e)||e in r)?(l=e.charAt(0),u=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(e in r||(r[e]=o),r[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),u&&i&&(l=l/100*(on(i)?i[0]:i).totalDuration()),a>1?n(t,e.substr(0,a-1),i)+l:o+l)):e==null?o:+e},Lo=function(t,e,i){var r=Xi(e[1]),s=(r?2:1)+(t<2?0:1),o=e[s],a,l;if(r&&(o.duration=e[1]),o.parent=i,t){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=En(l.vars.inherit)&&l.parent;o.immediateRender=En(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new He(e[0],o,e[s+1])},Sr=function(t,e){return t||t===0?e(t):e},ea=function(t,e,i){return i<t?t:i>e?e:i},rn=function(t,e){return!$e(t)||!(e=tx.exec(t))?"":e[1]},hx=function(t,e,i){return Sr(i,function(r){return ea(t,e,r)})},ru=[].slice,Km=function(t,e){return t&&Si(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Si(t[0]))&&!t.nodeType&&t!==pi},dx=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(r){var s;return $e(r)&&!e||Km(r,1)?(s=i).push.apply(s,Kn(r)):i.push(r)})||i},Kn=function(t,e,i){return Re&&!e&&Re.selector?Re.selector(t):$e(t)&&!i&&(tu||!Gs())?ru.call((e||bf).querySelectorAll(t),0):on(t)?dx(t,i):Km(t)?ru.call(t,0):t?[t]:[]},su=function(t){return t=Kn(t)[0]||Wo("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return Kn(e,i.querySelectorAll?i:i===t?Wo("Invalid scope")||bf.createElement("div"):t)}},jm=function(t){return t.sort(function(){return .5-Math.random()})},Zm=function(t){if(Ne(t))return t;var e=Si(t)?t:{each:t},i=Jr(e.ease),r=e.from||0,s=parseFloat(e.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=e.axis,c=r,f=r;return $e(r)?c=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],f=r[1]),function(h,d,g){var _=(g||e).length,m=o[_],p,y,M,v,A,T,w,C,x;if(!m){if(x=e.grid==="auto"?0:(e.grid||[1,$n])[1],!x){for(w=-$n;w<(w=g[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(m=o[_]=[],p=l?Math.min(x,_)*c-.5:r%x,y=x===$n?0:l?_*f/x-.5:r/x|0,w=0,C=$n,T=0;T<_;T++)M=T%x-p,v=y-(T/x|0),m[T]=A=u?Math.abs(u==="y"?v:M):Im(M*M+v*v),A>w&&(w=A),A<C&&(C=A);r==="random"&&jm(m),m.max=w-C,m.min=C,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(x>_?_-1:u?u==="y"?_/x:x:Math.max(x,_/x))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=rn(e.amount||e.each)||0,i=i&&_<0?a_(i):i}return _=(m[h]-m.min)/m.max||0,Pe(m.b+(i?i(_):_)*m.v)+m.u}},ou=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var r=Pe(Math.round(parseFloat(i)/t)*t*e);return(r-r%1)/e+(Xi(i)?0:rn(i))}},Jm=function(t,e){var i=on(t),r,s;return!i&&Si(t)&&(r=i=t.radius||$n,t.values?(t=Kn(t.values),(s=!Xi(t[0]))&&(r*=r)):t=ou(t.increment)),Sr(e,i?Ne(t)?function(o){return s=t(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=$n,c=0,f=t.length,h,d;f--;)s?(h=t[f].x-a,d=t[f].y-l,h=h*h+d*d):h=Math.abs(t[f]-a),h<u&&(u=h,c=f);return c=!r||u<=r?t[c]:o,s||c===o||Xi(o)?c:c+rn(o)}:ou(t))},Qm=function(t,e,i,r){return Sr(on(t)?!e:i===!0?!!(i=0):!r,function(){return on(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*r)/r})},px=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(r){return e.reduce(function(s,o){return o(s)},r)}},mx=function(t,e){return function(i){return t(parseFloat(i))+(e||rn(i))}},_x=function(t,e,i){return e_(t,e,0,1,i)},t_=function(t,e,i){return Sr(i,function(r){return t[~~e(r)]})},gx=function n(t,e,i){var r=e-t;return on(t)?t_(t,n(0,t.length),e):Sr(i,function(s){return(r+(s-t)%r)%r+t})},vx=function n(t,e,i){var r=e-t,s=r*2;return on(t)?t_(t,n(0,t.length-1),e):Sr(i,function(o){return o=(s+(o-t)%s)%s||0,t+(o>r?s-o:o)})},qo=function(t){return t.replace(Zv,function(e){var i=e.indexOf("[")+1,r=e.substring(i||7,i?e.indexOf("]"):e.length-1).split(Jv);return Qm(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},e_=function(t,e,i,r,s){var o=e-t,a=r-i;return Sr(s,function(l){return i+((l-t)/o*a||0)})},xx=function n(t,e,i,r){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=$e(t),a={},l,u,c,f,h;if(i===!0&&(r=1)&&(i=null),o)t={p:t},e={p:e};else if(on(t)&&!on(e)){for(c=[],f=t.length,h=f-2,u=1;u<f;u++)c.push(n(t[u-1],t[u]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return c[_](g-_)},i=e}else r||(t=ks(on(t)?[]:{},t));if(!c){for(l in e)Pf.call(a,t,l,"get",e[l]);s=function(g){return Uf(g,a)||(o?t.p:t)}}}return Sr(i,s)},jh=function(t,e,i){var r=t.labels,s=$n,o,a,l;for(o in r)a=r[o]-e,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Un=function(t,e,i){var r=t.vars,s=r[e],o=Re,a=t._ctx,l,u,c;if(s)return l=r[e+"Params"],u=r.callbackScope||t,i&&hr.length&&cl(),a&&(Re=a),c=l?s.apply(u,l):s.call(u),Re=o,c},go=function(t){return vr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ze),t.progress()<1&&Un(t,"onInterrupt"),t},Ts,n_=[],i_=function(t){if(t)if(t=!t.name&&t.default||t,Ef()||t.headless){var e=t.name,i=Ne(t),r=e&&!i&&t.init?function(){this._props=[]}:t,s={init:Xo,render:Uf,add:Pf,kill:Nx,modifier:Ux,rawVars:0},o={targetTest:0,get:0,getSetter:If,aliases:{},register:0};if(Gs(),t!==r){if(Dn[e])return;Bn(r,Bn(ul(t,s),o)),ks(r.prototype,ks(s,ul(t,o))),Dn[r.prop=e]=r,t.targetTest&&(Xa.push(r),wf[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}zm(e,r),t.register&&t.register(An,r,Tn)}else n_.push(t)},Se=255,vo={aqua:[0,Se,Se],lime:[0,Se,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Se],navy:[0,0,128],white:[Se,Se,Se],olive:[128,128,0],yellow:[Se,Se,0],orange:[Se,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Se,0,0],pink:[Se,192,203],cyan:[0,Se,Se],transparent:[Se,Se,Se,0]},Ql=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*Se+.5|0},r_=function(t,e,i){var r=t?Xi(t)?[t>>16,t>>8&Se,t&Se]:0:vo.black,s,o,a,l,u,c,f,h,d,g;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),vo[t])r=vo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&Se,r&Se,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&Se,t&Se]}else if(t.substr(0,3)==="hsl"){if(r=g=t.match(Xh),!e)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=Ql(l+1/3,s,o),r[1]=Ql(l,s,o),r[2]=Ql(l-1/3,s,o);else if(~t.indexOf("="))return r=t.match(Nm),i&&r.length<4&&(r[3]=1),r}else r=t.match(Xh)||vo.transparent;r=r.map(Number)}return e&&!g&&(s=r[0]/Se,o=r[1]/Se,a=r[2]/Se,f=Math.max(s,o,a),h=Math.min(s,o,a),c=(f+h)/2,f===h?l=u=0:(d=f-h,u=c>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},s_=function(t){var e=[],i=[],r=-1;return t.split(dr).forEach(function(s){var o=s.match(bs)||[];e.push.apply(e,o),i.push(r+=o.length+1)}),e.c=i,e},Zh=function(t,e,i){var r="",s=(t+r).match(dr),o=e?"hsla(":"rgba(",a=0,l,u,c,f;if(!s)return t;if(s=s.map(function(h){return(h=r_(h,e,1))&&o+(e?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(c=s_(t),l=i.c,l.join(r)!==c.c.join(r)))for(u=t.replace(dr,"1").split(bs),f=u.length-1;a<f;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=t.split(dr),f=u.length-1;a<f;a++)r+=u[a]+s[a];return r+u[f]},dr=(function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in vo)n+="|"+t+"\\b";return new RegExp(n+")","gi")})(),yx=/hsl[a]?\(/,o_=function(t){var e=t.join(" "),i;if(dr.lastIndex=0,dr.test(e))return i=yx.test(e),t[1]=Zh(t[1],i),t[0]=Zh(t[0],i,s_(t[1])),!0},Yo,Ln=(function(){var n=Date.now,t=500,e=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,f,h,d,g=function _(m){var p=n()-r,y=m===!0,M,v,A,T;if((p>t||p<0)&&(i+=p-e),r+=p,A=r-i,M=A-o,(M>0||y)&&(T=++f.frame,h=A-f.time*1e3,f.time=A=A/1e3,o+=M+(M>=s?4:s-M),v=1),y||(l=u(_)),v)for(d=0;d<a.length;d++)a[d](A,h,T,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){Fm&&(!tu&&Ef()&&(pi=tu=window,bf=pi.document||{},Fn.gsap=An,(pi.gsapVersions||(pi.gsapVersions=[])).push(An.version),Bm(ll||pi.GreenSockGlobals||!pi.gsap&&pi||{}),n_.forEach(i_)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),u=c||function(m){return setTimeout(m,o-f.time*1e3+1|0)},Yo=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Yo=0,u=Xo},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,y){var M=p?function(v,A,T,w){m(v,A,T,w),f.remove(M)}:m;return f.remove(m),a[y?"unshift":"push"](M),Gs(),M},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},f})(),Gs=function(){return!Yo&&Ln.wake()},ae={},Mx=/^[\d.\-M][\d.\-,\s]/,Sx=/["']/g,Ex=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),e[r]=isNaN(u)?u.replace(Sx,"").trim():+u,r=l.substr(a+1).trim();return e},bx=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<i?t.indexOf(")",i+1):i)},Tx=function(t){var e=(t+"").split("("),i=ae[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[Ex(e[1])]:bx(t).split(",").map(Gm)):ae._CE&&Mx.test(t)?ae._CE("",t):i},a_=function(t){return function(e){return 1-t(1-e)}},l_=function n(t,e){for(var i=t._first,r;i;)i instanceof pn?n(i,e):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==e&&(i.timeline?n(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next},Jr=function(t,e){return t&&(Ne(t)?t:ae[t]||Tx(t))||e},is=function(t,e,i,r){i===void 0&&(i=function(l){return 1-e(1-l)}),r===void 0&&(r=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:i,easeInOut:r},o;return bn(t,function(a){ae[a]=Fn[a]=s,ae[o=a.toLowerCase()]=i;for(var l in s)ae[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ae[a+"."+l]=s[l]}),s},c_=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},tc=function n(t,e,i){var r=e>=1?e:1,s=(i||(t?.3:.45))/(e<1?e:1),o=s/Qc*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*jv((c-o)*s)+1},l=t==="out"?a:t==="in"?function(u){return 1-a(1-u)}:c_(a);return s=Qc/s,l.config=function(u,c){return n(t,u,c)},l},ec=function n(t,e){e===void 0&&(e=1.70158);var i=function(o){return o?--o*o*((e+1)*o+e)+1:0},r=t==="out"?i:t==="in"?function(s){return 1-i(1-s)}:c_(i);return r.config=function(s){return n(t,s)},r};bn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,t){var e=t<5?t+1:t;is(n+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});ae.Linear.easeNone=ae.none=ae.Linear.easeIn;is("Elastic",tc("in"),tc("out"),tc());(function(n,t){var e=1/t,i=2*e,r=2.5*e,s=function(a){return a<e?n*a*a:a<i?n*Math.pow(a-1.5/t,2)+.75:a<r?n*(a-=2.25/t)*a+.9375:n*Math.pow(a-2.625/t,2)+.984375};is("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);is("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});is("Circ",function(n){return-(Im(1-n*n)-1)});is("Sine",function(n){return n===1?1:-Kv(n*Yv)+1});is("Back",ec("in"),ec("out"),ec());ae.SteppedEase=ae.steps=Fn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,r=t+(e?0:1),s=e?1:0,o=1-Ee;return function(a){return((r*ea(0,o,a)|0)+s)*i}}};zs.ease=ae["quad.out"];bn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Af+=n+","+n+"Params,"});var u_=function(t,e){this.id=$v++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Vm,this.set=e?e.getSetter:If},$o=(function(){function n(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Hs(this,+e.duration,1,1),this.data=e.data,Re&&(this._ctx=Re,Re.data.push(this)),Yo||Ln.wake()}var t=n.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,Hs(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,r){if(Gs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Il(this,i),!s._dp||s.parent||qm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&gi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Ee||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Hm(this,i,r)),this},t.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+$h(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},t.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+$h(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Vs(this._tTime,s)+1:1},t.timeScale=function(i,r){if(!arguments.length)return this._rts===-Ee?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?fl(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Ee?0:this._rts,this.totalTime(ea(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Ll(this),ox(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Gs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ee&&(this._tTime-=Ee)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=Pe(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&gi(r,this,this._start-this._delay),this}return this._start},t.endTime=function(i){return this._start+(En(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?fl(r.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=nx);var r=Ze;return Ze=i,Rf(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Ze=r,this},t.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Kh(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Kh(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,r){return this.totalTime(Wn(this,i),En(r))},t.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,En(r)),this._dur||(this._zTime=-Ee),this},t.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},t.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Ee:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ee,this},t.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Ee)},t.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},t.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Ne(i)?i:Wm,l=function(){var c=r.then;r.then=null,s&&s(),Ne(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},t.kill=function(){go(this)},n})();Bn($o.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ee,_prom:0,_ps:!1,_rts:1});var pn=(function(n){Lm(t,n);function t(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=En(i.sortChildren),De&&gi(i.parent||De,Ii(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Ym(Ii(s),i.scrollTrigger),s}var e=t.prototype;return e.to=function(r,s,o){return Lo(0,arguments,this),this},e.from=function(r,s,o){return Lo(1,arguments,this),this},e.fromTo=function(r,s,o,a){return Lo(2,arguments,this),this},e.set=function(r,s,o){return s.duration=0,s.parent=this,Do(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new He(r,s,Wn(this,o),1),this},e.call=function(r,s,o){return gi(this,He.delayedCall(0,r,s),o)},e.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new He(r,o,Wn(this,l)),this},e.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Do(o).immediateRender=En(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},e.staggerFromTo=function(r,s,o,a,l,u,c,f){return a.startAt=o,Do(a).immediateRender=En(a.immediateRender),this.staggerTo(r,s,a,l,u,c,f)},e.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Pe(r),f=this._zTime<0!=r<0&&(this._initted||!u),h,d,g,_,m,p,y,M,v,A,T,w;if(this!==De&&c>l&&r>=0&&(c=l),c!==this._tTime||o||f){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),h=c,v=this._start,M=this._ts,p=!M,f&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(h=Pe(c%m),c===l?(_=this._repeat,h=u):(A=Pe(c/m),_=~~A,_&&_===A&&(h=u,_--),h>u&&(h=u)),A=Vs(this._tTime,m),!a&&this._tTime&&A!==_&&this._tTime-A*m-this._dur<=0&&(A=_),T&&_&1&&(h=u-h,w=1),_!==A&&!this._lock){var C=T&&A&1,x=C===(T&&_&1);if(_<A&&(C=!C),a=C?0:c%u?u:c,this._lock=1,this.render(a||(w?0:Pe(_*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Un(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,A=_),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,x&&(this._lock=2,a=C?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;l_(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=ux(this,Pe(a),Pe(h)),y&&(c-=h-(h=y._start))),this._tTime=c,this._time=h,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!A&&(Un(this,"onStart"),this._tTime!==c))return this;if(h>=a&&r>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!p){y=0,g&&(c+=this._zTime=-Ee);break}}d=g}else{d=this._last;for(var S=r<0?r:h;d;){if(g=d._prev,(d._act||S<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(S-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(S-d._start)*d._ts,s,o||Ze&&Rf(d)),h!==this._time||!this._ts&&!p){y=0,g&&(c+=this._zTime=S?-Ee:Ee);break}}d=g}}if(y&&!s&&(this.pause(),y.render(h>=a?0:-Ee)._zTime=h>=a?1:-1,this._ts))return this._start=v,Ll(this),this.render(r,s,o);this._onUpdate&&!s&&Un(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(v===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&vr(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Un(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,s){var o=this;if(Xi(s)||(s=Wn(this,s,r)),!(r instanceof $o)){if(on(r))return r.forEach(function(a){return o.add(a,s)}),this;if($e(r))return this.addLabel(r,s);if(Ne(r))r=He.delayedCall(0,r);else return this}return this!==r?gi(this,r,s):this},e.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-$n);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof He?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},e.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},e.remove=function(r){return $e(r)?this.removeLabel(r):Ne(r)?this.killTweensOf(r):(r.parent===this&&Dl(this,r),r===this._recent&&(this._recent=this._last),Zr(this))},e.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Pe(Ln.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},e.addLabel=function(r,s){return this.labels[r]=Wn(this,s),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,s,o){var a=He.delayedCall(0,s||Xo,o);return a.data="isPause",this._hasPause=1,gi(this,a,Wn(this,r))},e.removePause=function(r){var s=this._first;for(r=Wn(this,r);s;)s._start===r&&s.data==="isPause"&&vr(s),s=s._next},e.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)lr!==a[l]&&a[l].kill(r,s);return this},e.getTweensOf=function(r,s){for(var o=[],a=Kn(r),l=this._first,u=Xi(s),c;l;)l instanceof He?ix(l._targets,a)&&(u?(!lr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},e.tweenTo=function(r,s){s=s||{};var o=this,a=Wn(o,r),l=s,u=l.startAt,c=l.onStart,f=l.onStartParams,h=l.immediateRender,d,g=He.to(o,Bn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||Ee,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());g._dur!==m&&Hs(g,m,0,1).render(g._time,!0,!0),d=1}c&&c.apply(g,f||[])}},s));return h?g.render(0):g},e.tweenFromTo=function(r,s,o){return this.tweenTo(s,Bn({startAt:{time:Wn(this,r)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),jh(this,Wn(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),jh(this,Wn(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Ee)},e.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=Pe(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return Zr(this)},e.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Zr(this)},e.totalDuration=function(r){var s=0,o=this,a=o._last,l=$n,u,c,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,gi(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=Pe(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;Hs(o,o===De&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(r){if(De._ts&&(Hm(De,fl(r,De)),km=Ln.frame),Ln.frame>=qh){qh+=On.autoSleep||120;var s=De._first;if((!s||!s._ts)&&On.autoSleep&&Ln._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Ln.sleep()}}},t})($o);Bn(pn.prototype,{_lock:0,_hasPause:0,_forcing:0});var wx=function(t,e,i,r,s,o,a){var l=new Tn(this._pt,t,e,0,1,__,null,s),u=0,c=0,f,h,d,g,_,m,p,y;for(l.b=i,l.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=qo(r)),o&&(y=[i,r],o(y,t,e),i=y[0],r=y[1]),h=i.match(Zl)||[];f=Zl.exec(r);)g=f[0],_=r.substring(u,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==h[c++]&&(m=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:_||c===1?_:",",s:m,c:g.charAt(1)==="="?Ls(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},u=Zl.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(Om.test(r)||p)&&(l.e=0),this._pt=l,l},Pf=function(t,e,i,r,s,o,a,l,u,c){Ne(r)&&(r=r(s||0,t,o));var f=t[e],h=i!=="get"?i:Ne(f)?u?t[e.indexOf("set")||!Ne(t["get"+e.substr(3)])?e:"get"+e.substr(3)](u):t[e]():f,d=Ne(f)?u?Dx:p_:Lf,g;if($e(r)&&(~r.indexOf("random(")&&(r=qo(r)),r.charAt(1)==="="&&(g=Ls(h,r)+(rn(h)||0),(g||g===0)&&(r=g))),!c||h!==r||au)return!isNaN(h*r)&&r!==""?(g=new Tn(this._pt,t,e,+h||0,r-(h||0),typeof f=="boolean"?Ix:m_,0,d),u&&(g.fp=u),a&&g.modifier(a,this,t),this._pt=g):(!f&&!(e in t)&&Tf(e,r),wx.call(this,t,e,h,r,d,l||On.stringFilter,u))},Ax=function(t,e,i,r,s){if(Ne(t)&&(t=Io(t,s,e,i,r)),!Si(t)||t.style&&t.nodeType||on(t)||Um(t))return $e(t)?Io(t,s,e,i,r):t;var o={},a;for(a in t)o[a]=Io(t[a],s,e,i,r);return o},f_=function(t,e,i,r,s,o){var a,l,u,c;if(Dn[t]&&(a=new Dn[t]).init(s,a.rawVars?e[t]:Ax(e[t],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new Tn(i._pt,s,t,0,1,a.render,a,0,a.priority),i!==Ts))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},lr,au,Df=function n(t,e,i){var r=t.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,f=r.yoyoEase,h=r.keyframes,d=r.autoRevert,g=t._dur,_=t._startAt,m=t._targets,p=t.parent,y=p&&p.data==="nested"?p.vars.targets:m,M=t._overwrite==="auto"&&!Mf,v=t.timeline,A,T,w,C,x,S,L,U,z,K,J,$,j;if(v&&(!h||!s)&&(s="none"),t._ease=Jr(s,zs.ease),t._yEase=f?a_(Jr(f===!0?s:f,zs.ease)):0,f&&t._yoyo&&!t._repeat&&(f=t._yEase,t._yEase=t._ease,t._ease=f),t._from=!v&&!!r.runBackwards,!v||h&&!r.stagger){if(U=m[0]?jr(m[0]).harness:0,$=U&&r[U.prop],A=ul(r,wf),_&&(_._zTime<0&&_.progress(1),e<0&&c&&a&&!d?_.render(-1,!0):_.revert(c&&g?Wa:ex),_._lazy=0),o){if(vr(t._startAt=He.set(m,Bn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&En(l),startAt:null,delay:0,onUpdate:u&&function(){return Un(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ze||!a&&!d)&&t._startAt.revert(Wa),a&&g&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(c&&g&&!_){if(e&&(a=!1),w=Bn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&En(l),immediateRender:a,stagger:0,parent:p},A),$&&(w[U.prop]=$),vr(t._startAt=He.set(m,w)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ze?t._startAt.revert(Wa):t._startAt.render(-1,!0)),t._zTime=e,!a)n(t._startAt,Ee,Ee);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&En(l)||l&&!g,T=0;T<m.length;T++){if(x=m[T],L=x._gsap||Cf(m)[T]._gsap,t._ptLookup[T]=K={},eu[L.id]&&hr.length&&cl(),J=y===m?T:y.indexOf(x),U&&(z=new U).init(x,$||A,t,J,y)!==!1&&(t._pt=C=new Tn(t._pt,x,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(G){K[G]=C}),z.priority&&(S=1)),!U||$)for(w in A)Dn[w]&&(z=f_(w,A,t,J,x,y))?z.priority&&(S=1):K[w]=C=Pf.call(t,x,w,"get",A[w],J,y,0,r.stringFilter);t._op&&t._op[T]&&t.kill(x,t._op[T]),M&&t._pt&&(lr=t,De.killTweensOf(x,K,t.globalTime(e)),j=!t.parent,lr=0),t._pt&&l&&(eu[L.id]=1)}S&&g_(t),t._onInit&&t._onInit(t)}t._onUpdate=u,t._initted=(!t._op||t._pt)&&!j,h&&e<=0&&v.render($n,!0,!0)},Cx=function(t,e,i,r,s,o,a,l){var u=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,f,h,d;if(!u)for(u=t._ptCache[e]=[],h=t._ptLookup,d=t._targets.length;d--;){if(c=h[d][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return au=1,t.vars[e]="+=0",Df(t,a),au=0,l?Wo(e+" not eligible for reset"):1;u.push(c)}for(d=u.length;d--;)f=u[d],c=f._pt||f,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,f.e&&(f.e=Be(i)+rn(f.e)),f.b&&(f.b=c.s+rn(f.b))},Rx=function(t,e){var i=t[0]?jr(t[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return e;s=ks({},e);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Px=function(t,e,i,r){var s=e.ease||r||"power1.inOut",o,a;if(on(e))a=i[t]||(i[t]=[]),e.forEach(function(l,u){return a.push({t:u/(e.length-1)*100,v:l,e:s})});else for(o in e)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Io=function(t,e,i,r,s){return Ne(t)?t.call(e,i,r,s):$e(t)&&~t.indexOf("random(")?qo(t):t},h_=Af+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",d_={};bn(h_+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return d_[n]=1});var He=(function(n){Lm(t,n);function t(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Do(r))||this;var l=a.vars,u=l.duration,c=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,y=r.parent||De,M=(on(i)||Um(i)?Xi(i[0]):"length"in r)?[i]:Kn(i),v,A,T,w,C,x,S,L;if(a._targets=M.length?Cf(M):Wo("GSAP target "+i+" not found. https://gsap.com",!On.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||h||da(u)||da(c)){if(r=a.vars,v=a.timeline=new pn({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:M}),v.kill(),v.parent=v._dp=Ii(a),v._start=0,h||da(u)||da(c)){if(w=M.length,S=h&&Zm(h),Si(h))for(C in h)~h_.indexOf(C)&&(L||(L={}),L[C]=h[C]);for(A=0;A<w;A++)T=ul(r,d_),T.stagger=0,p&&(T.yoyoEase=p),L&&ks(T,L),x=M[A],T.duration=+Io(u,Ii(a),A,x,M),T.delay=(+Io(c,Ii(a),A,x,M)||0)-a._delay,!h&&w===1&&T.delay&&(a._delay=c=T.delay,a._start+=c,T.delay=0),v.to(x,T,S?S(A,x,M):0),v._ease=ae.none;v.duration()?u=c=0:a.timeline=0}else if(g){Do(Bn(v.vars.defaults,{ease:"none"})),v._ease=Jr(g.ease||r.ease||"none");var U=0,z,K,J;if(on(g))g.forEach(function($){return v.to(M,$,">")}),v.duration();else{T={};for(C in g)C==="ease"||C==="easeEach"||Px(C,g[C],T,g.easeEach);for(C in T)for(z=T[C].sort(function($,j){return $.t-j.t}),U=0,A=0;A<z.length;A++)K=z[A],J={ease:K.e,duration:(K.t-(A?z[A-1].t:0))/100*u},J[C]=K.v,v.to(M,J,U),U+=J.duration;v.duration()<u&&v.to({},{duration:u-v.duration()})}}u||a.duration(u=v.duration())}else a.timeline=0;return d===!0&&!Mf&&(lr=Ii(a),De.killTweensOf(M),lr=0),gi(y,Ii(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!u&&!g&&a._start===Pe(y._time)&&En(f)&&ax(Ii(a))&&y.data!=="nested")&&(a._tTime=-Ee,a.render(Math.max(0,-c)||0)),m&&Ym(Ii(a),m),a}var e=t.prototype;return e.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,f=r>l-Ee&&!c?l:r<Ee?0:r,h,d,g,_,m,p,y,M,v;if(!u)cx(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(h=f,M=this.timeline,this._repeat){if(_=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(_*100+r,s,o);if(h=Pe(f%_),f===l?(g=this._repeat,h=u):(m=Pe(f/_),g=~~m,g&&g===m?(h=u,g--):h>u&&(h=u)),p=this._yoyo&&g&1,p&&(v=this._yEase,h=u-h),m=Vs(this._tTime,_),h===a&&!o&&this._initted&&g===m)return this._tTime=f,this;g!==m&&(M&&this._yEase&&l_(M,p),this.vars.repeatRefresh&&!p&&!this._lock&&h!==_&&this._initted&&(this._lock=o=1,this.render(Pe(_*g),!0).invalidate()._lock=0))}if(!this._initted){if($m(this,c?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(v||this._ease)(h/u),this._from&&(this.ratio=y=1-y),!a&&f&&!s&&!m&&(Un(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;M&&M.render(r<0?r:M._dur*M._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&nu(this,r,s,o),Un(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Un(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(c&&!this._onUpdate&&nu(this,r,!0,!0),(r||!u)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&vr(this,1),!s&&!(c&&!a)&&(f||a||p)&&(Un(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},e.resetTo=function(r,s,o,a,l){Yo||Ln.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Df(this,u),c=this._ease(u/this._dur),Cx(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(Il(this,0),this.parent||Xm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?go(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ze),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,lr&&lr.vars.overwrite!==!0)._first||go(this),this.parent&&o!==this.timeline.totalDuration()&&Hs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Kn(r):a,u=this._ptLookup,c=this._pt,f,h,d,g,_,m,p;if((!s||s==="all")&&sx(a,l))return s==="all"&&(this._pt=0),go(this);for(f=this._op=this._op||[],s!=="all"&&($e(s)&&(_={},bn(s,function(y){return _[y]=1}),s=_),s=Rx(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){h=u[p],s==="all"?(f[p]=s,g=h,d={}):(d=f[p]=f[p]||{},g=s);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Dl(this,m,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&c&&go(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return Lo(1,arguments)},t.delayedCall=function(r,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(r,s,o){return Lo(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,o){return De.killTweensOf(r,s,o)},t})($o);Bn(He.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});bn("staggerTo,staggerFrom,staggerFromTo",function(n){He[n]=function(){var t=new pn,e=ru.call(arguments,0);return e.splice(n==="staggerFromTo"?5:4,0,0),t[n].apply(t,e)}});var Lf=function(t,e,i){return t[e]=i},p_=function(t,e,i){return t[e](i)},Dx=function(t,e,i,r){return t[e](r.fp,i)},Lx=function(t,e,i){return t.setAttribute(e,i)},If=function(t,e){return Ne(t[e])?p_:Sf(t[e])&&t.setAttribute?Lx:Lf},m_=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Ix=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},__=function(t,e){var i=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+r,i=i._next;r+=e.c}e.set(e.t,e.p,r,e)},Uf=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},Ux=function(t,e,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(t,e,i),s=o},Nx=function(t){for(var e=this._pt,i,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?Dl(this,e,"_pt"):e.dep||(i=1),e=r;return!i},Ox=function(t,e,i,r){r.mSet(t,e,r.m.call(r.tween,i,r.mt),r)},g_=function(t){for(var e=t._pt,i,r,s,o;e;){for(i=e._next,r=s;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:o)?e._prev._next=e:s=e,(e._next=r)?r._prev=e:o=e,e=i}t._pt=s},Tn=(function(){function n(e,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||m_,this.d=l||this,this.set=u||Lf,this.pr=c||0,this._next=e,e&&(e._prev=this)}var t=n.prototype;return t.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=Ox,this.m=i,this.mt=s,this.tween=r},n})();bn(Af+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return wf[n]=1});Fn.TweenMax=Fn.TweenLite=He;Fn.TimelineLite=Fn.TimelineMax=pn;De=new pn({sortChildren:!1,defaults:zs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});On.stringFilter=o_;var Qr=[],qa={},Fx=[],Jh=0,Bx=0,nc=function(t){return(qa[t]||Fx).map(function(e){return e()})},lu=function(){var t=Date.now(),e=[];t-Jh>2&&(nc("matchMediaInit"),Qr.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=pi.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&e.push(i))}),nc("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Jh=t,nc("matchMedia"))},v_=(function(){function n(e,i){this.selector=i&&su(i),this.data=[],this._r=[],this.isReverted=!1,this.id=Bx++,e&&this.add(e)}var t=n.prototype;return t.add=function(i,r,s){Ne(i)&&(s=r,r=i,i=Ne);var o=this,a=function(){var u=Re,c=o.selector,f;return u&&u!==o&&u.data.push(o),s&&(o.selector=su(s)),Re=o,f=r.apply(o,arguments),Ne(f)&&o._r.push(f),Re=u,o.selector=c,o.isReverted=!1,f};return o.last=a,i===Ne?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},t.ignore=function(i){var r=Re;Re=null,i(this),Re=r},t.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof He&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,r){var s=this;if(i?(function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,f){return f.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof pn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof He)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Qr.length;o--;)Qr[o].id===this.id&&Qr.splice(o,1)},t.revert=function(i){this.kill(i||{})},n})(),zx=(function(){function n(e){this.contexts=[],this.scope=e,Re&&Re.data.push(this)}var t=n.prototype;return t.add=function(i,r,s){Si(i)||(i={matches:i});var o=new v_(0,s||this.scope),a=o.conditions={},l,u,c;Re&&!o.selector&&(o.selector=Re.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=pi.matchMedia(i[u]),l&&(Qr.indexOf(o)<0&&Qr.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(lu):l.addEventListener("change",lu)));return c&&r(o,function(f){return o.add(null,f)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n})(),hl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(r){return i_(r)})},timeline:function(t){return new pn(t)},getTweensOf:function(t,e){return De.getTweensOf(t,e)},getProperty:function(t,e,i,r){$e(t)&&(t=Kn(t)[0]);var s=jr(t||{}).get,o=i?Wm:Gm;return i==="native"&&(i=""),t&&(e?o((Dn[e]&&Dn[e].get||s)(t,e,i,r)):function(a,l,u){return o((Dn[a]&&Dn[a].get||s)(t,a,l,u))})},quickSetter:function(t,e,i){if(t=Kn(t),t.length>1){var r=t.map(function(c){return An.quickSetter(c,e,i)}),s=r.length;return function(c){for(var f=s;f--;)r[f](c)}}t=t[0]||{};var o=Dn[e],a=jr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,u=o?function(c){var f=new o;Ts._pt=0,f.init(t,i?c+i:c,Ts,0,[t]),f.render(1,f),Ts._pt&&Uf(1,Ts)}:a.set(t,l);return o?u:function(c){return u(t,l,i?c+i:c,a,1)}},quickTo:function(t,e,i){var r,s=An.to(t,Bn((r={},r[e]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(e,l,u,c)};return o.tween=s,o},isTweening:function(t){return De.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Jr(t.ease,zs.ease)),Yh(zs,t||{})},config:function(t){return Yh(On,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,r=t.plugins,s=t.defaults,o=t.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Dn[a]&&!Fn[a]&&Wo(e+" effect requires "+a+" plugin.")}),Jl[e]=function(a,l,u){return i(Kn(a),Bn(l||{},s),u)},o&&(pn.prototype[e]=function(a,l,u){return this.add(Jl[e](a,Si(l)?l:(u=l)&&{},this),u)})},registerEase:function(t,e){ae[t]=Jr(e)},parseEase:function(t,e){return arguments.length?Jr(t,e):ae},getById:function(t){return De.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new pn(t),r,s;for(i.smoothChildTiming=En(t.smoothChildTiming),De.remove(i),i._dp=0,i._time=i._tTime=De._time,r=De._first;r;)s=r._next,(e||!(!r._dur&&r instanceof He&&r.vars.onComplete===r._targets[0]))&&gi(i,r,r._start-r._delay),r=s;return gi(De,i,0),i},context:function(t,e){return t?new v_(t,e):Re},matchMedia:function(t){return new zx(t)},matchMediaRefresh:function(){return Qr.forEach(function(t){var e=t.conditions,i,r;for(r in e)e[r]&&(e[r]=!1,i=1);i&&t.revert()})||lu()},addEventListener:function(t,e){var i=qa[t]||(qa[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=qa[t],r=i&&i.indexOf(e);r>=0&&i.splice(r,1)},utils:{wrap:gx,wrapYoyo:vx,distribute:Zm,random:Qm,snap:Jm,normalize:_x,getUnit:rn,clamp:hx,splitColor:r_,toArray:Kn,selector:su,mapRange:e_,pipe:px,unitize:mx,interpolate:xx,shuffle:jm},install:Bm,effects:Jl,ticker:Ln,updateRoot:pn.updateRoot,plugins:Dn,globalTimeline:De,core:{PropTween:Tn,globals:zm,Tween:He,Timeline:pn,Animation:$o,getCache:jr,_removeLinkedListItem:Dl,reverting:function(){return Ze},context:function(t){return t&&Re&&(Re.data.push(t),t._ctx=Re),Re},suppressOverwrites:function(t){return Mf=t}}};bn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return hl[n]=He[n]});Ln.add(pn.updateRoot);Ts=hl.to({},{duration:0});var kx=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},Vx=function(t,e){var i=t._targets,r,s,o;for(r in e)for(s=i.length;s--;)o=t._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=kx(o,r)),o&&o.modifier&&o.modifier(e[r],t,i[s],r))},ic=function(t,e){return{name:t,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if($e(s)&&(l={},bn(s,function(c){return l[c]=1}),s=l),e){l={};for(u in s)l[u]=e(s[u]);s=l}Vx(a,s)}}}},An=hl.registerPlugin({name:"attr",init:function(t,e,i,r,s){var o,a,l;this.tween=i;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var i=e._pt;i;)Ze?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},ic("roundProps",ou),ic("modifiers"),ic("snap",Jm))||hl;He.version=pn.version=An.version="3.14.2";Fm=1;Ef()&&Gs();ae.Power0;ae.Power1;ae.Power2;ae.Power3;ae.Power4;ae.Linear;ae.Quad;ae.Cubic;ae.Quart;ae.Quint;ae.Strong;ae.Elastic;ae.Back;ae.SteppedEase;ae.Bounce;ae.Sine;ae.Expo;ae.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Qh,cr,Is,Nf,Wr,td,Of,Hx=function(){return typeof window<"u"},qi={},Fr=180/Math.PI,Us=Math.PI/180,os=Math.atan2,ed=1e8,Ff=/([A-Z])/g,Gx=/(left|right|width|margin|padding|x)/i,Wx=/[\s,\(]\S/,vi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},cu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Xx=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},qx=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Yx=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},$x=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},x_=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},y_=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Kx=function(t,e,i){return t.style[e]=i},jx=function(t,e,i){return t.style.setProperty(e,i)},Zx=function(t,e,i){return t._gsap[e]=i},Jx=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},Qx=function(t,e,i,r,s){var o=t._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},ty=function(t,e,i,r,s){var o=t._gsap;o[e]=i,o.renderTransform(s,o)},Le="transform",wn=Le+"Origin",ey=function n(t,e){var i=this,r=this.target,s=r.style,o=r._gsap;if(t in qi&&s){if(this.tfm=this.tfm||{},t!=="transform")t=vi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return i.tfm[a]=Oi(r,a)}):this.tfm[t]=o.x?o[t]:Oi(r,t),t===wn&&(this.tfm.zOrigin=o.zOrigin);else return vi.transform.split(",").forEach(function(a){return n.call(i,a,e)});if(this.props.indexOf(Le)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(wn,e,"")),t=Le}(s||e)&&this.props.push(t,e,s[t])},M_=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},ny=function(){var t=this.props,e=this.target,i=e.style,r=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?i[t[s]]=t[s+2]:i.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Ff,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Of(),(!s||!s.isStart)&&!i[Le]&&(M_(i),r.zOrigin&&i[wn]&&(i[wn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},S_=function(t,e){var i={target:t,props:[],revert:ny,save:ey};return t._gsap||An.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(r){return i.save(r)}),i},E_,uu=function(t,e){var i=cr.createElementNS?cr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):cr.createElement(t);return i&&i.style?i:cr.createElement(t)},Nn=function n(t,e,i){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(Ff,"-$1").toLowerCase())||r.getPropertyValue(e)||!i&&n(t,Ws(e)||e,1)||""},nd="O,Moz,ms,Ms,Webkit".split(","),Ws=function(t,e,i){var r=e||Wr,s=r.style,o=5;if(t in s&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(nd[o]+t in s););return o<0?null:(o===3?"ms":o>=0?nd[o]:"")+t},fu=function(){Hx()&&window.document&&(Qh=window,cr=Qh.document,Is=cr.documentElement,Wr=uu("div")||{style:{}},uu("div"),Le=Ws(Le),wn=Le+"Origin",Wr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",E_=!!Ws("perspective"),Of=An.core.reverting,Nf=1)},id=function(t){var e=t.ownerSVGElement,i=uu("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=t.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Is.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Is.removeChild(i),s},rd=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},b_=function(t){var e,i;try{e=t.getBBox()}catch{e=id(t),i=1}return e&&(e.width||e.height)||i||(e=id(t)),e&&!e.width&&!e.x&&!e.y?{x:+rd(t,["x","cx","x1"])||0,y:+rd(t,["y","cy","y1"])||0,width:0,height:0}:e},T_=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&b_(t))},xr=function(t,e){if(e){var i=t.style,r;e in qi&&e!==wn&&(e=Le),i.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(r==="--"?e:e.replace(Ff,"-$1").toLowerCase())):i.removeAttribute(e)}},ur=function(t,e,i,r,s,o){var a=new Tn(t._pt,e,i,0,1,o?y_:x_);return t._pt=a,a.b=r,a.e=s,t._props.push(i),a},sd={deg:1,rad:1,turn:1},iy={grid:1,flex:1},yr=function n(t,e,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=Wr.style,l=Gx.test(e),u=t.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",d=r==="%",g,_,m,p;if(r===o||!s||sd[r]||sd[o])return s;if(o!=="px"&&!h&&(s=n(t,e,i,"px")),p=t.getCTM&&T_(t),(d||o==="%")&&(qi[e]||~e.indexOf("adius")))return g=p?t.getBBox()[l?"width":"height"]:t[c],Be(d?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(h?o:r),_=r!=="rem"&&~e.indexOf("adius")||r==="em"&&t.appendChild&&!u?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===cr||!_.appendChild)&&(_=cr.body),m=_._gsap,m&&d&&m.width&&l&&m.time===Ln.time&&!m.uncache)return Be(s/m.width*f);if(d&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=f+r,g=t[c],y?t.style[e]=y:xr(t,e)}else(d||o==="%")&&!iy[Nn(_,"display")]&&(a.position=Nn(t,"position")),_===t&&(a.position="static"),_.appendChild(Wr),g=Wr[c],_.removeChild(Wr),a.position="absolute";return l&&d&&(m=jr(_),m.time=Ln.time,m.width=_[c]),Be(h?g*s/f:g&&s?f/g*s:0)},Oi=function(t,e,i,r){var s;return Nf||fu(),e in vi&&e!=="transform"&&(e=vi[e],~e.indexOf(",")&&(e=e.split(",")[0])),qi[e]&&e!=="transform"?(s=jo(t,r),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:pl(Nn(t,wn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=dl[e]&&dl[e](t,e,i)||Nn(t,e)||Vm(t,e)||(e==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?yr(t,e,s,i)+i:s},ry=function(t,e,i,r){if(!i||i==="none"){var s=Ws(e,t,1),o=s&&Nn(t,s,1);o&&o!==i?(e=s,i=o):e==="borderColor"&&(i=Nn(t,"borderTopColor"))}var a=new Tn(this._pt,t.style,e,0,1,__),l=0,u=0,c,f,h,d,g,_,m,p,y,M,v,A;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Nn(t,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=t.style[e],t.style[e]=r,r=Nn(t,e)||r,_?t.style[e]=_:xr(t,e)),c=[i,r],o_(c),i=c[0],r=c[1],h=i.match(bs)||[],A=r.match(bs)||[],A.length){for(;f=bs.exec(r);)m=f[0],y=r.substring(l,f.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),m!==(_=h[u++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),m.charAt(1)==="="&&(m=Ls(d,m)+v),p=parseFloat(m),M=m.substr((p+"").length),l=bs.lastIndex-M.length,M||(M=M||On.units[e]||v,l===r.length&&(r+=M,a.e+=M)),v!==M&&(d=yr(t,e,_,M)||0),a._pt={_next:a._pt,p:y||u===1?y:",",s:d,c:p-d,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=e==="display"&&r==="none"?y_:x_;return Om.test(r)&&(a.e=0),this._pt=a,a},od={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},sy=function(t){var e=t.split(" "),i=e[0],r=e[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(t=i,i=r,r=t),e[0]=od[i]||i,e[1]=od[r]||r,e.join(" ")},oy=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,r=i.style,s=e.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],qi[a]&&(l=1,a=a==="transformOrigin"?wn:Le),xr(i,a);l&&(xr(i,Le),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",jo(i,1),o.uncache=1,M_(r)))}},dl={clearProps:function(t,e,i,r,s){if(s.data!=="isFromStart"){var o=t._pt=new Tn(t._pt,e,i,0,0,oy);return o.u=r,o.pr=-10,o.tween=s,t._props.push(i),1}}},Ko=[1,0,0,1,0,0],w_={},A_=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},ad=function(t){var e=Nn(t,Le);return A_(e)?Ko:e.substr(7).match(Nm).map(Be)},Bf=function(t,e){var i=t._gsap||jr(t),r=t.style,s=ad(t),o,a,l,u;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ko:s):(s===Ko&&!t.offsetParent&&t!==Is&&!i.svg&&(l=r.display,r.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(u=1,a=t.nextElementSibling,Is.appendChild(t)),s=ad(t),l?r.display=l:xr(t,"display"),u&&(a?o.insertBefore(t,a):o?o.appendChild(t):Is.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},hu=function(t,e,i,r,s,o){var a=t._gsap,l=s||Bf(t,!0),u=a.xOrigin||0,c=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],y=l[5],M=e.split(" "),v=parseFloat(M[0])||0,A=parseFloat(M[1])||0,T,w,C,x;i?l!==Ko&&(w=d*m-g*_)&&(C=v*(m/w)+A*(-_/w)+(_*y-m*p)/w,x=v*(-g/w)+A*(d/w)-(d*y-g*p)/w,v=C,A=x):(T=b_(t),v=T.x+(~M[0].indexOf("%")?v/100*T.width:v),A=T.y+(~(M[1]||M[0]).indexOf("%")?A/100*T.height:A)),r||r!==!1&&a.smooth?(p=v-u,y=A-c,a.xOffset=f+(p*d+y*_)-p,a.yOffset=h+(p*g+y*m)-y):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=A,a.smooth=!!r,a.origin=e,a.originIsAbsolute=!!i,t.style[wn]="0px 0px",o&&(ur(o,a,"xOrigin",u,v),ur(o,a,"yOrigin",c,A),ur(o,a,"xOffset",f,a.xOffset),ur(o,a,"yOffset",h,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+A)},jo=function(t,e){var i=t._gsap||new u_(t);if("x"in i&&!e&&!i.uncache)return i;var r=t.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(t),u=Nn(t,wn)||"0",c,f,h,d,g,_,m,p,y,M,v,A,T,w,C,x,S,L,U,z,K,J,$,j,G,pt,vt,St,Pt,Qt,st,mt;return c=f=h=_=m=p=y=M=v=0,d=g=1,i.svg=!!(t.getCTM&&T_(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Le]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Le]!=="none"?l[Le]:"")),r.scale=r.rotate=r.translate="none"),w=Bf(t,i.svg),i.svg&&(i.uncache?(G=t.getBBox(),u=i.xOrigin-G.x+"px "+(i.yOrigin-G.y)+"px",j=""):j=!e&&t.getAttribute("data-svg-origin"),hu(t,j||u,!!j||i.originIsAbsolute,i.smooth!==!1,w)),A=i.xOrigin||0,T=i.yOrigin||0,w!==Ko&&(L=w[0],U=w[1],z=w[2],K=w[3],c=J=w[4],f=$=w[5],w.length===6?(d=Math.sqrt(L*L+U*U),g=Math.sqrt(K*K+z*z),_=L||U?os(U,L)*Fr:0,y=z||K?os(z,K)*Fr+_:0,y&&(g*=Math.abs(Math.cos(y*Us))),i.svg&&(c-=A-(A*L+T*z),f-=T-(A*U+T*K))):(mt=w[6],Qt=w[7],vt=w[8],St=w[9],Pt=w[10],st=w[11],c=w[12],f=w[13],h=w[14],C=os(mt,Pt),m=C*Fr,C&&(x=Math.cos(-C),S=Math.sin(-C),j=J*x+vt*S,G=$*x+St*S,pt=mt*x+Pt*S,vt=J*-S+vt*x,St=$*-S+St*x,Pt=mt*-S+Pt*x,st=Qt*-S+st*x,J=j,$=G,mt=pt),C=os(-z,Pt),p=C*Fr,C&&(x=Math.cos(-C),S=Math.sin(-C),j=L*x-vt*S,G=U*x-St*S,pt=z*x-Pt*S,st=K*S+st*x,L=j,U=G,z=pt),C=os(U,L),_=C*Fr,C&&(x=Math.cos(C),S=Math.sin(C),j=L*x+U*S,G=J*x+$*S,U=U*x-L*S,$=$*x-J*S,L=j,J=G),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=Be(Math.sqrt(L*L+U*U+z*z)),g=Be(Math.sqrt($*$+mt*mt)),C=os(J,$),y=Math.abs(C)>2e-4?C*Fr:0,v=st?1/(st<0?-st:st):0),i.svg&&(j=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!A_(Nn(t,Le)),j&&t.setAttribute("transform",j))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),e=e||i.uncache,i.x=c-((i.xPercent=c&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-c)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=Be(d),i.scaleY=Be(g),i.rotation=Be(_)+a,i.rotationX=Be(m)+a,i.rotationY=Be(p)+a,i.skewX=y+a,i.skewY=M+a,i.transformPerspective=v+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!e&&i.zOrigin||0)&&(r[wn]=pl(u)),i.xOffset=i.yOffset=0,i.force3D=On.force3D,i.renderTransform=i.svg?ly:E_?C_:ay,i.uncache=0,i},pl=function(t){return(t=t.split(" "))[0]+" "+t[1]},rc=function(t,e,i){var r=rn(e);return Be(parseFloat(e)+parseFloat(yr(t,"x",i+"px",r)))+r},ay=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,C_(t,e)},Cr="0deg",lo="0px",Rr=") ",C_=function(t,e){var i=e||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,f=i.rotationX,h=i.skewX,d=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,p=i.force3D,y=i.target,M=i.zOrigin,v="",A=p==="auto"&&t&&t!==1||p===!0;if(M&&(f!==Cr||c!==Cr)){var T=parseFloat(c)*Us,w=Math.sin(T),C=Math.cos(T),x;T=parseFloat(f)*Us,x=Math.cos(T),o=rc(y,o,w*x*-M),a=rc(y,a,-Math.sin(T)*-M),l=rc(y,l,C*x*-M+M)}m!==lo&&(v+="perspective("+m+Rr),(r||s)&&(v+="translate("+r+"%, "+s+"%) "),(A||o!==lo||a!==lo||l!==lo)&&(v+=l!==lo||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Rr),u!==Cr&&(v+="rotate("+u+Rr),c!==Cr&&(v+="rotateY("+c+Rr),f!==Cr&&(v+="rotateX("+f+Rr),(h!==Cr||d!==Cr)&&(v+="skew("+h+", "+d+Rr),(g!==1||_!==1)&&(v+="scale("+g+", "+_+Rr),y.style[Le]=v||"translate(0, 0)"},ly=function(t,e){var i=e||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,f=i.scaleX,h=i.scaleY,d=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,p=i.yOffset,y=i.forceCSS,M=parseFloat(o),v=parseFloat(a),A,T,w,C,x;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Us,u*=Us,A=Math.cos(l)*f,T=Math.sin(l)*f,w=Math.sin(l-u)*-h,C=Math.cos(l-u)*h,u&&(c*=Us,x=Math.tan(u-c),x=Math.sqrt(1+x*x),w*=x,C*=x,c&&(x=Math.tan(c),x=Math.sqrt(1+x*x),A*=x,T*=x)),A=Be(A),T=Be(T),w=Be(w),C=Be(C)):(A=f,C=h,T=w=0),(M&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(M=yr(d,"x",o,"px"),v=yr(d,"y",a,"px")),(g||_||m||p)&&(M=Be(M+g-(g*A+_*w)+m),v=Be(v+_-(g*T+_*C)+p)),(r||s)&&(x=d.getBBox(),M=Be(M+r/100*x.width),v=Be(v+s/100*x.height)),x="matrix("+A+","+T+","+w+","+C+","+M+","+v+")",d.setAttribute("transform",x),y&&(d.style[Le]=x)},cy=function(t,e,i,r,s){var o=360,a=$e(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Fr:1),u=l-r,c=r+u+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),f==="cw"&&u<0?u=(u+o*ed)%o-~~(u/o)*o:f==="ccw"&&u>0&&(u=(u-o*ed)%o-~~(u/o)*o)),t._pt=h=new Tn(t._pt,e,i,r,u,Xx),h.e=c,h.u="deg",t._props.push(i),h},ld=function(t,e){for(var i in e)t[i]=e[i];return t},uy=function(t,e,i){var r=ld({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,f,h,d,g;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[Le]=e,a=jo(i,1),xr(i,Le),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Le],o[Le]=e,a=jo(i,1),o[Le]=u);for(l in qi)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(d=rn(u),g=rn(c),f=d!==g?yr(i,l,u,g):parseFloat(u),h=parseFloat(c),t._pt=new Tn(t._pt,a,l,f,h-f,cu),t._pt.u=g||0,t._props.push(l));ld(a,r)};bn("padding,margin,Width,Radius",function(n,t){var e="Top",i="Right",r="Bottom",s="Left",o=(t<3?[e,i,r,s]:[e+s,e+i,r+i,r+s]).map(function(a){return t<2?n+a:"border"+a+n});dl[t>1?"border"+n:n]=function(a,l,u,c,f){var h,d;if(arguments.length<4)return h=o.map(function(g){return Oi(a,g,u)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(c+"").split(" "),d={},o.forEach(function(g,_){return d[g]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,d,f)}});var R_={name:"css",register:fu,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,r,s){var o=this._props,a=t.style,l=i.vars.startAt,u,c,f,h,d,g,_,m,p,y,M,v,A,T,w,C,x;Nf||fu(),this.styles=this.styles||S_(t),C=this.styles.props,this.tween=i;for(_ in e)if(_!=="autoRound"&&(c=e[_],!(Dn[_]&&f_(_,e,i,r,t,s)))){if(d=typeof c,g=dl[_],d==="function"&&(c=c.call(i,r,t,s),d=typeof c),d==="string"&&~c.indexOf("random(")&&(c=qo(c)),g)g(this,t,_,c,i)&&(w=1);else if(_.substr(0,2)==="--")u=(getComputedStyle(t).getPropertyValue(_)+"").trim(),c+="",dr.lastIndex=0,dr.test(u)||(m=rn(u),p=rn(c),p?m!==p&&(u=yr(t,_,u,p)+p):m&&(c+=m)),this.add(a,"setProperty",u,c,r,s,0,0,_),o.push(_),C.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(u=typeof l[_]=="function"?l[_].call(i,r,t,s):l[_],$e(u)&&~u.indexOf("random(")&&(u=qo(u)),rn(u+"")||u==="auto"||(u+=On.units[_]||rn(Oi(t,_))||""),(u+"").charAt(1)==="="&&(u=Oi(t,_))):u=Oi(t,_),h=parseFloat(u),y=d==="string"&&c.charAt(1)==="="&&c.substr(0,2),y&&(c=c.substr(2)),f=parseFloat(c),_ in vi&&(_==="autoAlpha"&&(h===1&&Oi(t,"visibility")==="hidden"&&f&&(h=0),C.push("visibility",0,a.visibility),ur(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=vi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in qi,M){if(this.styles.save(_),x=c,d==="string"&&c.substring(0,6)==="var(--"){if(c=Nn(t,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var S=t.style.perspective;t.style.perspective=c,c=Nn(t,"perspective"),S?t.style.perspective=S:xr(t,"perspective")}f=parseFloat(c)}if(v||(A=t._gsap,A.renderTransform&&!e.parseTransform||jo(t,e.parseTransform),T=e.smoothOrigin!==!1&&A.smooth,v=this._pt=new Tn(this._pt,a,Le,0,1,A.renderTransform,A,0,-1),v.dep=1),_==="scale")this._pt=new Tn(this._pt,A,"scaleY",A.scaleY,(y?Ls(A.scaleY,y+f):f)-A.scaleY||0,cu),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(wn,0,a[wn]),c=sy(c),A.svg?hu(t,c,0,T,0,this):(p=parseFloat(c.split(" ")[2])||0,p!==A.zOrigin&&ur(this,A,"zOrigin",A.zOrigin,p),ur(this,a,_,pl(u),pl(c)));continue}else if(_==="svgOrigin"){hu(t,c,1,T,0,this);continue}else if(_ in w_){cy(this,A,_,h,y?Ls(h,y+c):c);continue}else if(_==="smoothOrigin"){ur(this,A,"smooth",A.smooth,c);continue}else if(_==="force3D"){A[_]=c;continue}else if(_==="transform"){uy(this,c,t);continue}}else _ in a||(_=Ws(_)||_);if(M||(f||f===0)&&(h||h===0)&&!Wx.test(c)&&_ in a)m=(u+"").substr((h+"").length),f||(f=0),p=rn(c)||(_ in On.units?On.units[_]:m),m!==p&&(h=yr(t,_,u,p)),this._pt=new Tn(this._pt,M?A:a,_,h,(y?Ls(h,y+f):f)-h,!M&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?$x:cu),this._pt.u=p||0,M&&x!==c?(this._pt.b=u,this._pt.e=x,this._pt.r=Yx):m!==p&&p!=="%"&&(this._pt.b=u,this._pt.r=qx);else if(_ in a)ry.call(this,t,_,u,y?y+c:c);else if(_ in t)this.add(t,_,u||t[_],y?y+c:c,r,s);else if(_!=="parseTransform"){Tf(_,c);continue}M||(_ in a?C.push(_,0,a[_]):typeof t[_]=="function"?C.push(_,2,t[_]()):C.push(_,1,u||t[_])),o.push(_)}}w&&g_(this)},render:function(t,e){if(e.tween._time||!Of())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:Oi,aliases:vi,getSetter:function(t,e,i){var r=vi[e];return r&&r.indexOf(",")<0&&(e=r),e in qi&&e!==wn&&(t._gsap.x||Oi(t,"x"))?i&&td===i?e==="scale"?Jx:Zx:(td=i||{})&&(e==="scale"?Qx:ty):t.style&&!Sf(t.style[e])?Kx:~e.indexOf("-")?jx:If(t,e)},core:{_removeProperty:xr,_getMatrix:Bf}};An.utils.checkPrefix=Ws;An.core.getStyleSaver=S_;(function(n,t,e,i){var r=bn(n+","+t+","+e,function(s){qi[s]=1});bn(t,function(s){On.units[s]="deg",w_[s]=1}),vi[r[13]]=n+","+t,bn(i,function(s){var o=s.split(":");vi[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");bn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){On.units[n]="px"});An.registerPlugin(R_);var Ft=An.registerPlugin(R_)||An;Ft.core.Tween;const zf=(n,t)=>{const e=n.__vccOpts||n;for(const[i,r]of t)e[i]=r;return e},fy=["aria-hidden"],hy={class:"nav-toggle-copy"},dy=["onClick"],py={class:"bubble"},my={class:"bubble-copy"},_y={class:"bubble-code"},gy={class:"bubble-label"},vy={class:"bubble-description"},xy={class:"bubble-icon"},yy={class:"bubble-index"},My={__name:"BubbleNav",props:{pages:{type:Array,required:!0},currentPage:{type:String,required:!0}},emits:["page-change"],setup(n){const t=pe(!0);let e=null;const i=()=>{e&&(window.clearTimeout(e),e=null)},r=()=>{i(),t.value=!1},s=()=>{i(),e=window.setTimeout(()=>{t.value=!0},900)};return wl(()=>{i()}),(o,a)=>(ie(),se("nav",{class:Fe(["bubble-nav",{"is-collapsed":t.value}]),"aria-label":"Section navigation",onMouseenter:r,onMouseleave:s,onFocusin:r,onFocusout:s},[F("div",{class:"nav-toggle","aria-hidden":(!t.value).toString()},[F("span",hy,Lt(t.value?"OPEN":"RITE"),1)],8,fy),a[3]||(a[3]=F("div",{class:"nav-shell"},null,-1)),a[4]||(a[4]=F("div",{class:"nav-axis"},[F("span",{class:"axis-label"},"RITUAL INDEX")],-1)),(ie(!0),se(Ue,null,Xn(n.pages,(l,u)=>(ie(),se("div",{key:l.id,class:Fe(["bubble-item",{active:n.currentPage===l.id}]),style:ri({top:l.position}),onClick:c=>o.$emit("page-change",l.id)},[a[2]||(a[2]=F("div",{class:"item-connector","aria-hidden":"true"},null,-1)),F("div",py,[a[0]||(a[0]=F("div",{class:"bubble-crest","aria-hidden":"true"},[F("span",{class:"crest-core"}),F("span",{class:"crest-ring"})],-1)),F("div",my,[F("div",_y,Lt(l.code),1),F("div",gy,Lt(l.name),1),F("div",vy,Lt(l.description),1)]),F("div",xy,Lt(l.icon),1),F("div",yy,"0"+Lt(u+1),1),a[1]||(a[1]=F("div",{class:"bubble-glow"},null,-1))])],14,dy))),128))],34))}},Sy=zf(My,[["__scopeId","data-v-b9cacc50"]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kf="171",Ey=0,cd=1,by=2,P_=1,Ty=2,Di=3,Yi=0,Je=1,je=2,pr=0,Ns=1,ud=2,fd=3,hd=4,wy=5,Vr=100,Ay=101,Cy=102,Ry=103,Py=104,Dy=200,Ly=201,Iy=202,Uy=203,du=204,pu=205,Ny=206,Oy=207,Fy=208,By=209,zy=210,ky=211,Vy=212,Hy=213,Gy=214,mu=0,_u=1,gu=2,Xs=3,vu=4,xu=5,yu=6,Mu=7,D_=0,Wy=1,Xy=2,mr=0,qy=1,Yy=2,$y=3,Ky=4,jy=5,Zy=6,Jy=7,L_=300,qs=301,Ys=302,Su=303,Eu=304,Ul=306,bu=1e3,Xr=1001,Tu=1002,ai=1003,Qy=1004,pa=1005,xi=1006,sc=1007,qr=1008,$i=1009,I_=1010,U_=1011,Zo=1012,Vf=1013,ts=1014,zi=1015,na=1016,Hf=1017,Gf=1018,$s=1020,N_=35902,O_=1021,F_=1022,si=1023,B_=1024,z_=1025,Os=1026,Ks=1027,k_=1028,Wf=1029,V_=1030,Xf=1031,qf=1033,Ya=33776,$a=33777,Ka=33778,ja=33779,wu=35840,Au=35841,Cu=35842,Ru=35843,Pu=36196,Du=37492,Lu=37496,Iu=37808,Uu=37809,Nu=37810,Ou=37811,Fu=37812,Bu=37813,zu=37814,ku=37815,Vu=37816,Hu=37817,Gu=37818,Wu=37819,Xu=37820,qu=37821,Za=36492,Yu=36494,$u=36495,H_=36283,Ku=36284,ju=36285,Zu=36286,tM=3200,eM=3201,G_=0,nM=1,ar="",qn="srgb",js="srgb-linear",ml="linear",ye="srgb",as=7680,dd=519,iM=512,rM=513,sM=514,W_=515,oM=516,aM=517,lM=518,cM=519,pd=35044,md="300 es",ki=2e3,_l=2001;class Qs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],oc=Math.PI/180,Ju=180/Math.PI;function ia(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function re(n,t,e){return Math.max(t,Math.min(e,n))}function uM(n,t){return(n%t+t)%t}function ac(n,t,e){return(1-e)*n+e*t}function co(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function xn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class zt{constructor(t=0,e=0){zt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class te{constructor(t,e,i,r,s,o,a,l,u){te.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,u)}set(t,e,i,r,s,o,a,l,u){const c=this.elements;return c[0]=t,c[1]=r,c[2]=a,c[3]=e,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],d=i[5],g=i[8],_=r[0],m=r[3],p=r[6],y=r[1],M=r[4],v=r[7],A=r[2],T=r[5],w=r[8];return s[0]=o*_+a*y+l*A,s[3]=o*m+a*M+l*T,s[6]=o*p+a*v+l*w,s[1]=u*_+c*y+f*A,s[4]=u*m+c*M+f*T,s[7]=u*p+c*v+f*w,s[2]=h*_+d*y+g*A,s[5]=h*m+d*M+g*T,s[8]=h*p+d*v+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8];return e*o*c-e*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8],f=c*o-a*u,h=a*l-c*s,d=u*s-o*l,g=e*f+i*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(r*u-c*i)*_,t[2]=(a*i-r*o)*_,t[3]=h*_,t[4]=(c*e-r*l)*_,t[5]=(r*s-a*e)*_,t[6]=d*_,t[7]=(i*l-u*e)*_,t[8]=(o*e-i*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+t,-r*u,r*l,-r*(-u*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(lc.makeScale(t,e)),this}rotate(t){return this.premultiply(lc.makeRotation(-t)),this}translate(t,e){return this.premultiply(lc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const lc=new te;function X_(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function gl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function fM(){const n=gl("canvas");return n.style.display="block",n}const _d={};function Es(n){n in _d||(_d[n]=!0,console.warn(n))}function hM(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function dM(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function pM(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const gd=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vd=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mM(){const n={enabled:!0,workingColorSpace:js,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ye&&(r.r=Vi(r.r),r.g=Vi(r.g),r.b=Vi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ye&&(r.r=Fs(r.r),r.g=Fs(r.g),r.b=Fs(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ar?ml:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[js]:{primaries:t,whitePoint:i,transfer:ml,toXYZ:gd,fromXYZ:vd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:qn},outputColorSpaceConfig:{drawingBufferColorSpace:qn}},[qn]:{primaries:t,whitePoint:i,transfer:ye,toXYZ:gd,fromXYZ:vd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:qn}}}),n}const ue=mM();function Vi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Fs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ls;class _M{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ls===void 0&&(ls=gl("canvas")),ls.width=t.width,ls.height=t.height;const i=ls.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ls}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=gl("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Vi(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Vi(e[i]/255)*255):e[i]=Vi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let gM=0;class q_{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=ia(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(cc(r[o].image)):s.push(cc(r[o]))}else s=cc(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function cc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?_M.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vM=0;class mn extends Qs{constructor(t=mn.DEFAULT_IMAGE,e=mn.DEFAULT_MAPPING,i=Xr,r=Xr,s=xi,o=qr,a=si,l=$i,u=mn.DEFAULT_ANISOTROPY,c=ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=ia(),this.name="",this.source=new q_(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==L_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bu:t.x=t.x-Math.floor(t.x);break;case Xr:t.x=t.x<0?0:1;break;case Tu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bu:t.y=t.y-Math.floor(t.y);break;case Xr:t.y=t.y<0?0:1;break;case Tu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=L_;mn.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,e=0,i=0,r=1){Me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,u=l[0],c=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(u+1)/2,v=(d+1)/2,A=(p+1)/2,T=(c+h)/4,w=(f+_)/4,C=(g+m)/4;return M>v&&M>A?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=T/i,s=w/i):v>A?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=T/r,s=C/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=w/s,r=C/s),this.set(i,r,s,e),this}let y=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-c)*(h-c));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(f-_)/y,this.z=(h-c)/y,this.w=Math.acos((u+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xM extends Qs{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new mn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new q_(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class es extends xM{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Y_ extends mn{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=ai,this.minFilter=ai,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yM extends mn{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=ai,this.minFilter=ai,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ra{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=u,t[e+2]=c,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(f!==_||l!==h||u!==d||c!==g){let m=1-a;const p=l*h+u*d+c*g+f*_,y=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const A=Math.sqrt(M),T=Math.atan2(A,p*y);m=Math.sin(m*T)/A,a=Math.sin(a*T)/A}const v=a*y;if(l=l*m+h*v,u=u*m+d*v,c=c*m+g*v,f=f*m+_*v,m===1-a){const A=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=A,u*=A,c*=A,f*=A}}t[e]=l,t[e+1]=u,t[e+2]=c,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+c*f+l*d-u*h,t[e+1]=l*g+c*h+u*f-a*d,t[e+2]=u*g+c*d+a*h-l*f,t[e+3]=c*g-a*f-l*h-u*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),h=l(i/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*d*g,this._y=u*d*f-h*c*g,this._z=u*c*g+h*d*f,this._w=u*c*f-h*d*g;break;case"YXZ":this._x=h*c*f+u*d*g,this._y=u*d*f-h*c*g,this._z=u*c*g-h*d*f,this._w=u*c*f+h*d*g;break;case"ZXY":this._x=h*c*f-u*d*g,this._y=u*d*f+h*c*g,this._z=u*c*g+h*d*f,this._w=u*c*f-h*d*g;break;case"ZYX":this._x=h*c*f-u*d*g,this._y=u*d*f+h*c*g,this._z=u*c*g-h*d*f,this._w=u*c*f+h*d*g;break;case"YZX":this._x=h*c*f+u*d*g,this._y=u*d*f+h*c*g,this._z=u*c*g-h*d*f,this._w=u*c*f-h*d*g;break;case"XZY":this._x=h*c*f-u*d*g,this._y=u*d*f-h*c*g,this._z=u*c*g+h*d*f,this._w=u*c*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],u=e[2],c=e[6],f=e[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(c-l)*d,this._y=(s-u)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(c-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+u)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-u)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+c)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+u)/d,this._y=(l+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,u=e._z,c=e._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-e)*c)/u,h=Math.sin(e*c)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,i=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,u=2*(o*r-a*i),c=2*(a*e-s*r),f=2*(s*i-o*e);return this.x=e+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return uc.copy(this).projectOnVector(t),this.sub(uc)}reflect(t){return this.sub(uc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uc=new N,xd=new ra;class sa{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Qn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Qn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Qn):Qn.fromBufferAttribute(s,o),Qn.applyMatrix4(t.matrixWorld),this.expandByPoint(Qn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ma.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ma.copy(i.boundingBox)),ma.applyMatrix4(t.matrixWorld),this.union(ma)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qn),Qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(uo),_a.subVectors(this.max,uo),cs.subVectors(t.a,uo),us.subVectors(t.b,uo),fs.subVectors(t.c,uo),Ji.subVectors(us,cs),Qi.subVectors(fs,us),Pr.subVectors(cs,fs);let e=[0,-Ji.z,Ji.y,0,-Qi.z,Qi.y,0,-Pr.z,Pr.y,Ji.z,0,-Ji.x,Qi.z,0,-Qi.x,Pr.z,0,-Pr.x,-Ji.y,Ji.x,0,-Qi.y,Qi.x,0,-Pr.y,Pr.x,0];return!fc(e,cs,us,fs,_a)||(e=[1,0,0,0,1,0,0,0,1],!fc(e,cs,us,fs,_a))?!1:(ga.crossVectors(Ji,Qi),e=[ga.x,ga.y,ga.z],fc(e,cs,us,fs,_a))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const wi=[new N,new N,new N,new N,new N,new N,new N,new N],Qn=new N,ma=new sa,cs=new N,us=new N,fs=new N,Ji=new N,Qi=new N,Pr=new N,uo=new N,_a=new N,ga=new N,Dr=new N;function fc(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Dr.fromArray(n,s);const a=r.x*Math.abs(Dr.x)+r.y*Math.abs(Dr.y)+r.z*Math.abs(Dr.z),l=t.dot(Dr),u=e.dot(Dr),c=i.dot(Dr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const MM=new sa,fo=new N,hc=new N;class Nl{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):MM.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fo.subVectors(t,this.center);const e=fo.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(fo,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fo.copy(t.center).add(hc)),this.expandByPoint(fo.copy(t.center).sub(hc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ai=new N,dc=new N,va=new N,tr=new N,pc=new N,xa=new N,mc=new N;class Yf{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ai.copy(this.origin).addScaledVector(this.direction,e),Ai.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){dc.copy(t).add(e).multiplyScalar(.5),va.copy(e).sub(t).normalize(),tr.copy(this.origin).sub(dc);const s=t.distanceTo(e)*.5,o=-this.direction.dot(va),a=tr.dot(this.direction),l=-tr.dot(va),u=tr.lengthSq(),c=Math.abs(1-o*o);let f,h,d,g;if(c>0)if(f=o*l-a,h=o*a-l,g=s*c,f>=0)if(h>=-g)if(h<=g){const _=1/c;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+u;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+u):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(dc).addScaledVector(va,h),d}intersectSphere(t,e){Ai.subVectors(t.center,this.origin);const i=Ai.dot(this.direction),r=Ai.dot(Ai)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(t.min.x-h.x)*u,r=(t.max.x-h.x)*u):(i=(t.max.x-h.x)*u,r=(t.min.x-h.x)*u),c>=0?(s=(t.min.y-h.y)*c,o=(t.max.y-h.y)*c):(s=(t.max.y-h.y)*c,o=(t.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Ai)!==null}intersectTriangle(t,e,i,r,s){pc.subVectors(e,t),xa.subVectors(i,t),mc.crossVectors(pc,xa);let o=this.direction.dot(mc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;tr.subVectors(this.origin,t);const l=a*this.direction.dot(xa.crossVectors(tr,xa));if(l<0)return null;const u=a*this.direction.dot(pc.cross(tr));if(u<0||l+u>o)return null;const c=-a*tr.dot(mc);return c<0?null:this.at(c/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class we{constructor(t,e,i,r,s,o,a,l,u,c,f,h,d,g,_,m){we.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,u,c,f,h,d,g,_,m)}set(t,e,i,r,s,o,a,l,u,c,f,h,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=u,p[6]=c,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new we().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/hs.setFromMatrixColumn(t,0).length(),s=1/hs.setFromMatrixColumn(t,1).length(),o=1/hs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=o*c,d=o*f,g=a*c,_=a*f;e[0]=l*c,e[4]=-l*f,e[8]=u,e[1]=d+g*u,e[5]=h-_*u,e[9]=-a*l,e[2]=_-h*u,e[6]=g+d*u,e[10]=o*l}else if(t.order==="YXZ"){const h=l*c,d=l*f,g=u*c,_=u*f;e[0]=h+_*a,e[4]=g*a-d,e[8]=o*u,e[1]=o*f,e[5]=o*c,e[9]=-a,e[2]=d*a-g,e[6]=_+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*c,d=l*f,g=u*c,_=u*f;e[0]=h-_*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*c,e[9]=_-h*a,e[2]=-o*u,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*c,d=o*f,g=a*c,_=a*f;e[0]=l*c,e[4]=g*u-d,e[8]=h*u+_,e[1]=l*f,e[5]=_*u+h,e[9]=d*u-g,e[2]=-u,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,d=o*u,g=a*l,_=a*u;e[0]=l*c,e[4]=_-h*f,e[8]=g*f+d,e[1]=f,e[5]=o*c,e[9]=-a*c,e[2]=-u*c,e[6]=d*f+g,e[10]=h-_*f}else if(t.order==="XZY"){const h=o*l,d=o*u,g=a*l,_=a*u;e[0]=l*c,e[4]=-f,e[8]=u*c,e[1]=h*f+_,e[5]=o*c,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*c,e[10]=_*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(SM,t,EM)}lookAt(t,e,i){const r=this.elements;return Rn.subVectors(t,e),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),er.crossVectors(i,Rn),er.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),er.crossVectors(i,Rn)),er.normalize(),ya.crossVectors(Rn,er),r[0]=er.x,r[4]=ya.x,r[8]=Rn.x,r[1]=er.y,r[5]=ya.y,r[9]=Rn.y,r[2]=er.z,r[6]=ya.z,r[10]=Rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],y=i[3],M=i[7],v=i[11],A=i[15],T=r[0],w=r[4],C=r[8],x=r[12],S=r[1],L=r[5],U=r[9],z=r[13],K=r[2],J=r[6],$=r[10],j=r[14],G=r[3],pt=r[7],vt=r[11],St=r[15];return s[0]=o*T+a*S+l*K+u*G,s[4]=o*w+a*L+l*J+u*pt,s[8]=o*C+a*U+l*$+u*vt,s[12]=o*x+a*z+l*j+u*St,s[1]=c*T+f*S+h*K+d*G,s[5]=c*w+f*L+h*J+d*pt,s[9]=c*C+f*U+h*$+d*vt,s[13]=c*x+f*z+h*j+d*St,s[2]=g*T+_*S+m*K+p*G,s[6]=g*w+_*L+m*J+p*pt,s[10]=g*C+_*U+m*$+p*vt,s[14]=g*x+_*z+m*j+p*St,s[3]=y*T+M*S+v*K+A*G,s[7]=y*w+M*L+v*J+A*pt,s[11]=y*C+M*U+v*$+A*vt,s[15]=y*x+M*z+v*j+A*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],u=t[13],c=t[2],f=t[6],h=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*d-i*l*d)+_*(+e*l*d-e*u*h+s*o*h-r*o*d+r*u*c-s*l*c)+m*(+e*u*f-e*a*d-s*o*f+i*o*d+s*a*c-i*u*c)+p*(-r*a*c-e*l*f+e*a*h+r*o*f-i*o*h+i*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8],f=t[9],h=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],y=f*m*u-_*h*u+_*l*d-a*m*d-f*l*p+a*h*p,M=g*h*u-c*m*u-g*l*d+o*m*d+c*l*p-o*h*p,v=c*_*u-g*f*u+g*a*d-o*_*d-c*a*p+o*f*p,A=g*f*l-c*_*l-g*a*h+o*_*h+c*a*m-o*f*m,T=e*y+i*M+r*v+s*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return t[0]=y*w,t[1]=(_*h*s-f*m*s-_*r*d+i*m*d+f*r*p-i*h*p)*w,t[2]=(a*m*s-_*l*s+_*r*u-i*m*u-a*r*p+i*l*p)*w,t[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*d-i*l*d)*w,t[4]=M*w,t[5]=(c*m*s-g*h*s+g*r*d-e*m*d-c*r*p+e*h*p)*w,t[6]=(g*l*s-o*m*s-g*r*u+e*m*u+o*r*p-e*l*p)*w,t[7]=(o*h*s-c*l*s+c*r*u-e*h*u-o*r*d+e*l*d)*w,t[8]=v*w,t[9]=(g*f*s-c*_*s-g*i*d+e*_*d+c*i*p-e*f*p)*w,t[10]=(o*_*s-g*a*s+g*i*u-e*_*u-o*i*p+e*a*p)*w,t[11]=(c*a*s-o*f*s-c*i*u+e*f*u+o*i*d-e*a*d)*w,t[12]=A*w,t[13]=(c*_*r-g*f*r+g*i*h-e*_*h-c*i*m+e*f*m)*w,t[14]=(g*a*r-o*_*r-g*i*l+e*_*l+o*i*m-e*a*m)*w,t[15]=(o*f*r-c*a*r+c*i*l-e*f*l-o*i*h+e*a*h)*w,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,u=s+s,c=o+o,f=a+a,h=s*u,d=s*c,g=s*f,_=o*c,m=o*f,p=a*f,y=l*u,M=l*c,v=l*f,A=i.x,T=i.y,w=i.z;return r[0]=(1-(_+p))*A,r[1]=(d+v)*A,r[2]=(g-M)*A,r[3]=0,r[4]=(d-v)*T,r[5]=(1-(h+p))*T,r[6]=(m+y)*T,r[7]=0,r[8]=(g+M)*w,r[9]=(m-y)*w,r[10]=(1-(h+_))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=hs.set(r[0],r[1],r[2]).length();const o=hs.set(r[4],r[5],r[6]).length(),a=hs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],ti.copy(this);const u=1/s,c=1/o,f=1/a;return ti.elements[0]*=u,ti.elements[1]*=u,ti.elements[2]*=u,ti.elements[4]*=c,ti.elements[5]*=c,ti.elements[6]*=c,ti.elements[8]*=f,ti.elements[9]*=f,ti.elements[10]*=f,e.setFromRotationMatrix(ti),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=ki){const l=this.elements,u=2*s/(e-t),c=2*s/(i-r),f=(e+t)/(e-t),h=(i+r)/(i-r);let d,g;if(a===ki)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===_l)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=ki){const l=this.elements,u=1/(e-t),c=1/(i-r),f=1/(o-s),h=(e+t)*u,d=(i+r)*c;let g,_;if(a===ki)g=(o+s)*f,_=-2*f;else if(a===_l)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const hs=new N,ti=new we,SM=new N(0,0,0),EM=new N(1,1,1),er=new N,ya=new N,Rn=new N,yd=new we,Md=new ra;class Ei{constructor(t=0,e=0,i=0,r=Ei.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-re(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-re(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return yd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Md.setFromEuler(this),this.setFromQuaternion(Md,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ei.DEFAULT_ORDER="XYZ";class $f{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let bM=0;const Sd=new N,ds=new ra,Ci=new we,Ma=new N,ho=new N,TM=new N,wM=new ra,Ed=new N(1,0,0),bd=new N(0,1,0),Td=new N(0,0,1),wd={type:"added"},AM={type:"removed"},ps={type:"childadded",child:null},_c={type:"childremoved",child:null};class Qe extends Qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=ia(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qe.DEFAULT_UP.clone();const t=new N,e=new Ei,i=new ra,r=new N(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new we},normalMatrix:{value:new te}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=Qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $f,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ds.setFromAxisAngle(t,e),this.quaternion.multiply(ds),this}rotateOnWorldAxis(t,e){return ds.setFromAxisAngle(t,e),this.quaternion.premultiply(ds),this}rotateX(t){return this.rotateOnAxis(Ed,t)}rotateY(t){return this.rotateOnAxis(bd,t)}rotateZ(t){return this.rotateOnAxis(Td,t)}translateOnAxis(t,e){return Sd.copy(t).applyQuaternion(this.quaternion),this.position.add(Sd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ed,t)}translateY(t){return this.translateOnAxis(bd,t)}translateZ(t){return this.translateOnAxis(Td,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ma.copy(t):Ma.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(ho,Ma,this.up):Ci.lookAt(Ma,ho,this.up),this.quaternion.setFromRotationMatrix(Ci),r&&(Ci.extractRotation(r.matrixWorld),ds.setFromRotationMatrix(Ci),this.quaternion.premultiply(ds.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wd),ps.child=t,this.dispatchEvent(ps),ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(AM),_c.child=t,this.dispatchEvent(_c),_c.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wd),ps.child=t,this.dispatchEvent(ps),ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,t,TM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,wM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),u=o(t.textures),c=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Qe.DEFAULT_UP=new N(0,1,0);Qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ei=new N,Ri=new N,gc=new N,Pi=new N,ms=new N,_s=new N,Ad=new N,vc=new N,xc=new N,yc=new N,Mc=new Me,Sc=new Me,Ec=new Me;class ii{constructor(t=new N,e=new N,i=new N){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),ei.subVectors(t,e),r.cross(ei);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){ei.subVectors(r,e),Ri.subVectors(i,e),gc.subVectors(t,e);const o=ei.dot(ei),a=ei.dot(Ri),l=ei.dot(gc),u=Ri.dot(Ri),c=Ri.dot(gc),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(u*l-a*c)*h,g=(o*c-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(t,e,i,r,s,o,a,l){return this.getBarycoord(t,e,i,r,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pi.x),l.addScaledVector(o,Pi.y),l.addScaledVector(a,Pi.z),l)}static getInterpolatedAttribute(t,e,i,r,s,o){return Mc.setScalar(0),Sc.setScalar(0),Ec.setScalar(0),Mc.fromBufferAttribute(t,e),Sc.fromBufferAttribute(t,i),Ec.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Mc,s.x),o.addScaledVector(Sc,s.y),o.addScaledVector(Ec,s.z),o}static isFrontFacing(t,e,i,r){return ei.subVectors(i,e),Ri.subVectors(t,e),ei.cross(Ri).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ei.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),ei.cross(Ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ii.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ii.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return ii.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return ii.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ii.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;ms.subVectors(r,i),_s.subVectors(s,i),vc.subVectors(t,i);const l=ms.dot(vc),u=_s.dot(vc);if(l<=0&&u<=0)return e.copy(i);xc.subVectors(t,r);const c=ms.dot(xc),f=_s.dot(xc);if(c>=0&&f<=c)return e.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),e.copy(i).addScaledVector(ms,o);yc.subVectors(t,s);const d=ms.dot(yc),g=_s.dot(yc);if(g>=0&&d<=g)return e.copy(s);const _=d*u-l*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),e.copy(i).addScaledVector(_s,a);const m=c*g-d*f;if(m<=0&&f-c>=0&&d-g>=0)return Ad.subVectors(s,r),a=(f-c)/(f-c+(d-g)),e.copy(r).addScaledVector(Ad,a);const p=1/(m+_+h);return o=_*p,a=h*p,e.copy(i).addScaledVector(ms,o).addScaledVector(_s,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const $_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},Sa={h:0,s:0,l:0};function bc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Zt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=ue.workingColorSpace){return this.r=t,this.g=e,this.b=i,ue.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=ue.workingColorSpace){if(t=uM(t,1),e=re(e,0,1),i=re(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=bc(o,s,t+1/3),this.g=bc(o,s,t),this.b=bc(o,s,t-1/3)}return ue.toWorkingColorSpace(this,r),this}setStyle(t,e=qn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qn){const i=$_[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vi(t.r),this.g=Vi(t.g),this.b=Vi(t.b),this}copyLinearToSRGB(t){return this.r=Fs(t.r),this.g=Fs(t.g),this.b=Fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qn){return ue.fromWorkingColorSpace(en.copy(this),t),Math.round(re(en.r*255,0,255))*65536+Math.round(re(en.g*255,0,255))*256+Math.round(re(en.b*255,0,255))}getHexString(t=qn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.fromWorkingColorSpace(en.copy(this),e);const i=en.r,r=en.g,s=en.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return t.h=l,t.s=u,t.l=c,t}getRGB(t,e=ue.workingColorSpace){return ue.fromWorkingColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=qn){ue.fromWorkingColorSpace(en.copy(this),t);const e=en.r,i=en.g,r=en.b;return t!==qn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(nr),this.setHSL(nr.h+t,nr.s+e,nr.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(nr),t.getHSL(Sa);const i=ac(nr.h,Sa.h,e),r=ac(nr.s,Sa.s,e),s=ac(nr.l,Sa.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new Zt;Zt.NAMES=$_;let CM=0;class to extends Qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=ia(),this.name="",this.type="Material",this.blending=Ns,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=du,this.blendDst=pu,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(i.blending=this.blending),this.side!==Yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==du&&(i.blendSrc=this.blendSrc),this.blendDst!==pu&&(i.blendDst=this.blendDst),this.blendEquation!==Vr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(i.stencilFail=this.stencilFail),this.stencilZFail!==as&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ge extends to{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=D_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ve=new N,Ea=new zt;class Zn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=pd,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ea.fromBufferAttribute(this,e),Ea.applyMatrix3(t),this.setXY(e,Ea.x,Ea.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix3(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=co(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=xn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=co(e,this.array)),e}setX(t,e){return this.normalized&&(e=xn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=co(e,this.array)),e}setY(t,e){return this.normalized&&(e=xn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=co(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=co(e,this.array)),e}setW(t,e){return this.normalized&&(e=xn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=xn(e,this.array),i=xn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=xn(e,this.array),i=xn(i,this.array),r=xn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=xn(e,this.array),i=xn(i,this.array),r=xn(r,this.array),s=xn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==pd&&(t.usage=this.usage),t}}class K_ extends Zn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class j_ extends Zn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Oe extends Zn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let RM=0;const Hn=new we,Tc=new Qe,gs=new N,Pn=new sa,po=new sa,Ye=new N;class _n extends Qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:RM++}),this.uuid=ia(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(X_(t)?j_:K_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new te().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Hn.makeRotationFromQuaternion(t),this.applyMatrix4(Hn),this}rotateX(t){return Hn.makeRotationX(t),this.applyMatrix4(Hn),this}rotateY(t){return Hn.makeRotationY(t),this.applyMatrix4(Hn),this}rotateZ(t){return Hn.makeRotationZ(t),this.applyMatrix4(Hn),this}translate(t,e,i){return Hn.makeTranslation(t,e,i),this.applyMatrix4(Hn),this}scale(t,e,i){return Hn.makeScale(t,e,i),this.applyMatrix4(Hn),this}lookAt(t){return Tc.lookAt(t),Tc.updateMatrix(),this.applyMatrix4(Tc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Oe(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ye.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Ye),Ye.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Ye)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];po.setFromBufferAttribute(a),this.morphTargetsRelative?(Ye.addVectors(Pn.min,po.min),Pn.expandByPoint(Ye),Ye.addVectors(Pn.max,po.max),Pn.expandByPoint(Ye)):(Pn.expandByPoint(po.min),Pn.expandByPoint(po.max))}Pn.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Ye.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Ye));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Ye.fromBufferAttribute(a,u),l&&(gs.fromBufferAttribute(t,u),Ye.add(gs)),r=Math.max(r,i.distanceToSquared(Ye))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new N,l[C]=new N;const u=new N,c=new N,f=new N,h=new zt,d=new zt,g=new zt,_=new N,m=new N;function p(C,x,S){u.fromBufferAttribute(i,C),c.fromBufferAttribute(i,x),f.fromBufferAttribute(i,S),h.fromBufferAttribute(s,C),d.fromBufferAttribute(s,x),g.fromBufferAttribute(s,S),c.sub(u),f.sub(u),d.sub(h),g.sub(h);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(L),m.copy(f).multiplyScalar(d.x).addScaledVector(c,-g.x).multiplyScalar(L),a[C].add(_),a[x].add(_),a[S].add(_),l[C].add(m),l[x].add(m),l[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let C=0,x=y.length;C<x;++C){const S=y[C],L=S.start,U=S.count;for(let z=L,K=L+U;z<K;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const M=new N,v=new N,A=new N,T=new N;function w(C){A.fromBufferAttribute(r,C),T.copy(A);const x=a[C];M.copy(x),M.sub(A.multiplyScalar(A.dot(x))).normalize(),v.crossVectors(T,x);const L=v.dot(l[C])<0?-1:1;o.setXYZW(C,M.x,M.y,M.z,L)}for(let C=0,x=y.length;C<x;++C){const S=y[C],L=S.start,U=S.count;for(let z=L,K=L+U;z<K;z+=3)w(t.getX(z+0)),w(t.getX(z+1)),w(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,u=new N,c=new N,f=new N;if(t)for(let h=0,d=t.count;h<d;h+=3){const g=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,d=e.count;h<d;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ye.fromBufferAttribute(t,e),Ye.normalize(),t.setXYZ(e,Ye.x,Ye.y,Ye.z)}toNonIndexed(){function t(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*c;for(let p=0;p<c;p++)h[g++]=u[d++]}return new Zn(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _n,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=t(l,i);e.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],d=t(h,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const u=i[l];t.data.attributes[l]=u.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const d=u[f];c.push(d.toJSON(t.data))}c.length>0&&(r[l]=c,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(e))}const s=t.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,d=f.length;h<d;h++)c.push(f[h].clone(e));this.morphAttributes[u]=c}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cd=new we,Lr=new Yf,ba=new Nl,Rd=new N,Ta=new N,wa=new N,Aa=new N,wc=new N,Ca=new N,Pd=new N,Ra=new N;class xe extends Qe{constructor(t=new _n,e=new Ge){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Ca.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(wc.fromBufferAttribute(f,t),o?Ca.addScaledVector(wc,c):Ca.addScaledVector(wc.sub(e),c))}e.add(Ca)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ba.copy(i.boundingSphere),ba.applyMatrix4(s),Lr.copy(t.ray).recast(t.near),!(ba.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(ba,Rd)===null||Lr.origin.distanceToSquared(Rd)>(t.far-t.near)**2))&&(Cd.copy(s).invert(),Lr.copy(t.ray).applyMatrix4(Cd),!(i.boundingBox!==null&&Lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Lr)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,A=M;v<A;v+=3){const T=a.getX(v),w=a.getX(v+1),C=a.getX(v+2);r=Pa(this,p,t,i,u,c,f,T,w,C),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);r=Pa(this,o,t,i,u,c,f,y,M,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,A=M;v<A;v+=3){const T=v,w=v+1,C=v+2;r=Pa(this,p,t,i,u,c,f,T,w,C),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=m,M=m+1,v=m+2;r=Pa(this,o,t,i,u,c,f,y,M,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function PM(n,t,e,i,r,s,o,a){let l;if(t.side===Je?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===Yi,a),l===null)return null;Ra.copy(a),Ra.applyMatrix4(n.matrixWorld);const u=e.ray.origin.distanceTo(Ra);return u<e.near||u>e.far?null:{distance:u,point:Ra.clone(),object:n}}function Pa(n,t,e,i,r,s,o,a,l,u){n.getVertexPosition(a,Ta),n.getVertexPosition(l,wa),n.getVertexPosition(u,Aa);const c=PM(n,t,e,i,Ta,wa,Aa,Pd);if(c){const f=new N;ii.getBarycoord(Pd,Ta,wa,Aa,f),r&&(c.uv=ii.getInterpolatedAttribute(r,a,l,u,f,new zt)),s&&(c.uv1=ii.getInterpolatedAttribute(s,a,l,u,f,new zt)),o&&(c.normal=ii.getInterpolatedAttribute(o,a,l,u,f,new N),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new N,materialIndex:0};ii.getNormal(Ta,wa,Aa,h.normal),c.face=h,c.barycoord=f}return c}class oa extends _n{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,e,t,o,s,0),g("z","y","x",1,-1,i,e,-t,o,s,1),g("x","z","y",1,1,t,i,e,r,o,2),g("x","z","y",1,-1,t,i,-e,r,o,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Oe(u,3)),this.setAttribute("normal",new Oe(c,3)),this.setAttribute("uv",new Oe(f,2));function g(_,m,p,y,M,v,A,T,w,C,x){const S=v/w,L=A/C,U=v/2,z=A/2,K=T/2,J=w+1,$=C+1;let j=0,G=0;const pt=new N;for(let vt=0;vt<$;vt++){const St=vt*L-z;for(let Pt=0;Pt<J;Pt++){const Qt=Pt*S-U;pt[_]=Qt*y,pt[m]=St*M,pt[p]=K,u.push(pt.x,pt.y,pt.z),pt[_]=0,pt[m]=0,pt[p]=T>0?1:-1,c.push(pt.x,pt.y,pt.z),f.push(Pt/w),f.push(1-vt/C),j+=1}}for(let vt=0;vt<C;vt++)for(let St=0;St<w;St++){const Pt=h+St+J*vt,Qt=h+St+J*(vt+1),st=h+(St+1)+J*(vt+1),mt=h+(St+1)+J*vt;l.push(Pt,Qt,mt),l.push(Qt,st,mt),G+=6}a.addGroup(d,G,x),d+=G,h+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oa(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Zs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function cn(n){const t={};for(let e=0;e<n.length;e++){const i=Zs(n[e]);for(const r in i)t[r]=i[r]}return t}function DM(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Z_(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}const LM={clone:Zs,merge:cn};var IM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,UM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mr extends to{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=IM,this.fragmentShader=UM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zs(t.uniforms),this.uniformsGroups=DM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class J_ extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=ki}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ir=new N,Dd=new zt,Ld=new zt;class Sn extends J_{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ju*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(oc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ju*2*Math.atan(Math.tan(oc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ir.x,ir.y).multiplyScalar(-t/ir.z),ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ir.x,ir.y).multiplyScalar(-t/ir.z)}getViewSize(t,e){return this.getViewBounds(t,Dd,Ld),e.subVectors(Ld,Dd)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(oc*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const vs=-90,xs=1;class NM extends Qe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Sn(vs,xs,t,e);r.layers=this.layers,this.add(r);const s=new Sn(vs,xs,t,e);s.layers=this.layers,this.add(s);const o=new Sn(vs,xs,t,e);o.layers=this.layers,this.add(o);const a=new Sn(vs,xs,t,e);a.layers=this.layers,this.add(a);const l=new Sn(vs,xs,t,e);l.layers=this.layers,this.add(l);const u=new Sn(vs,xs,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,l]=e;for(const u of e)this.remove(u);if(t===ki)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===_l)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,u),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,r),t.render(e,c),t.setRenderTarget(f,h,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Q_ extends mn{constructor(t,e,i,r,s,o,a,l,u,c){t=t!==void 0?t:[],e=e!==void 0?e:qs,super(t,e,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class OM extends es{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Q_(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:xi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new oa(5,5,5),s=new Mr({name:"CubemapFromEquirect",uniforms:Zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Je,blending:pr});s.uniforms.tEquirect.value=e;const o=new xe(r,s),a=e.minFilter;return e.minFilter===qr&&(e.minFilter=xi),new NM(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}class Kf{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Zt(t),this.density=e}clone(){return new Kf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class tg extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Ac=new N,FM=new N,BM=new te;class Br{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Ac.subVectors(i,e).cross(FM.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ac),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||BM.getNormalMatrix(t),r=this.coplanarPoint(Ac).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ir=new Nl,Da=new N;class jf{constructor(t=new Br,e=new Br,i=new Br,r=new Br,s=new Br,o=new Br){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ki){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],d=r[8],g=r[9],_=r[10],m=r[11],p=r[12],y=r[13],M=r[14],v=r[15];if(i[0].setComponents(l-s,h-u,m-d,v-p).normalize(),i[1].setComponents(l+s,h+u,m+d,v+p).normalize(),i[2].setComponents(l+o,h+c,m+g,v+y).normalize(),i[3].setComponents(l-o,h-c,m-g,v-y).normalize(),i[4].setComponents(l-a,h-f,m-_,v-M).normalize(),e===ki)i[5].setComponents(l+a,h+f,m+_,v+M).normalize();else if(e===_l)i[5].setComponents(a,f,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ir.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ir.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(t){return Ir.center.set(0,0,0),Ir.radius=.7071067811865476,Ir.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Da.x=r.normal.x>0?t.max.x:t.min.x,Da.y=r.normal.y>0?t.max.y:t.min.y,Da.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Da)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qu extends to{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Id=new we,tf=new Yf,La=new Nl,Ia=new N;class Cc extends Qe{constructor(t=new _n,e=new Qu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),La.copy(i.boundingSphere),La.applyMatrix4(r),La.radius+=s,t.ray.intersectsSphere(La)===!1)return;Id.copy(r).invert(),tf.copy(t.ray).applyMatrix4(Id);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=h,_=d;g<_;g++){const m=u.getX(g);Ia.fromBufferAttribute(f,m),Ud(Ia,m,l,r,t,e,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,_=d;g<_;g++)Ia.fromBufferAttribute(f,g),Ud(Ia,g,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ud(n,t,e,i,r,s,o){const a=tf.distanceSqToPoint(n);if(a<e){const l=new N;tf.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Yr extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Nd extends mn{constructor(t,e,i,r,s,o,a,l,u){super(t,e,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class eg extends mn{constructor(t,e,i,r,s,o,a,l,u,c=Os){if(c!==Os&&c!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Os&&(i=ts),i===void 0&&c===Ks&&(i=$s),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ai,this.minFilter=l!==void 0?l:ai,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class ji{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),s+=i.distanceTo(r),e.push(s),r=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let r=0;const s=i.length;let o;e?o=e:o=t*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const c=i[r],h=i[r+1]-c,d=(o-c)/h;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new zt:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new N,r=[],s=[],o=[],a=new N,l=new we;for(let d=0;d<=t;d++){const g=d/t;r[d]=this.getTangentAt(g,new N)}s[0]=new N,o[0]=new N;let u=Number.MAX_VALUE;const c=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),f<=u&&(u=f,i.set(0,1,0)),h<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(re(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos(re(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ng extends ji{constructor(t=0,e=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new zt){const i=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=u-this.aY;l=h*c-d*f+this.aX,u=h*f+d*c+this.aY}return i.set(l,u)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class zM extends ng{constructor(t,e,i,r,s,o){super(t,e,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Zf(){let n=0,t=0,e=0,i=0;function r(s,o,a,l){n=s,t=a,e=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,c,f){let h=(o-s)/u-(a-s)/(u+c)+(a-o)/c,d=(a-o)/c-(l-o)/(c+f)+(l-a)/f;h*=c,d*=c,r(o,a,h,d)},calc:function(s){const o=s*s,a=o*s;return n+t*s+e*o+i*a}}}const Ua=new N,Rc=new Zf,Pc=new Zf,Dc=new Zf;class ig extends ji{constructor(t=[],e=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=r}getPoint(t,e=new N){const i=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,c;this.closed||a>0?u=r[(a-1)%s]:(Ua.subVectors(r[0],r[1]).add(r[0]),u=Ua);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?c=r[(a+2)%s]:(Ua.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=Ua),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(u.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(c),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Rc.initNonuniformCatmullRom(u.x,f.x,h.x,c.x,g,_,m),Pc.initNonuniformCatmullRom(u.y,f.y,h.y,c.y,g,_,m),Dc.initNonuniformCatmullRom(u.z,f.z,h.z,c.z,g,_,m)}else this.curveType==="catmullrom"&&(Rc.initCatmullRom(u.x,f.x,h.x,c.x,this.tension),Pc.initCatmullRom(u.y,f.y,h.y,c.y,this.tension),Dc.initCatmullRom(u.z,f.z,h.z,c.z,this.tension));return i.set(Rc.calc(l),Pc.calc(l),Dc.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new N().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Od(n,t,e,i,r){const s=(i-t)*.5,o=(r-e)*.5,a=n*n,l=n*a;return(2*e-2*i+s+o)*l+(-3*e+3*i-2*s-o)*a+s*n+e}function kM(n,t){const e=1-n;return e*e*t}function VM(n,t){return 2*(1-n)*n*t}function HM(n,t){return n*n*t}function Uo(n,t,e,i){return kM(n,t)+VM(n,e)+HM(n,i)}function GM(n,t){const e=1-n;return e*e*e*t}function WM(n,t){const e=1-n;return 3*e*e*n*t}function XM(n,t){return 3*(1-n)*n*n*t}function qM(n,t){return n*n*n*t}function No(n,t,e,i,r){return GM(n,t)+WM(n,e)+XM(n,i)+qM(n,r)}class YM extends ji{constructor(t=new zt,e=new zt,i=new zt,r=new zt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new zt){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(No(t,r.x,s.x,o.x,a.x),No(t,r.y,s.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class $M extends ji{constructor(t=new N,e=new N,i=new N,r=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new N){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(No(t,r.x,s.x,o.x,a.x),No(t,r.y,s.y,o.y,a.y),No(t,r.z,s.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class KM extends ji{constructor(t=new zt,e=new zt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new zt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new zt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jM extends ji{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ZM extends ji{constructor(t=new zt,e=new zt,i=new zt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new zt){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(Uo(t,r.x,s.x,o.x),Uo(t,r.y,s.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rg extends ji{constructor(t=new N,e=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new N){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(Uo(t,r.x,s.x,o.x),Uo(t,r.y,s.y,o.y),Uo(t,r.z,s.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class JM extends ji{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new zt){const i=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],c=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(Od(a,l.x,u.x,c.x,f.x),Od(a,l.y,u.y,c.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new zt().fromArray(r))}return this}}var QM=Object.freeze({__proto__:null,ArcCurve:zM,CatmullRomCurve3:ig,CubicBezierCurve:YM,CubicBezierCurve3:$M,EllipseCurve:ng,LineCurve:KM,LineCurve3:jM,QuadraticBezierCurve:ZM,QuadraticBezierCurve3:rg,SplineCurve:JM});class Jf extends _n{constructor(t=1,e=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const c=[],f=[],h=[],d=[];let g=0;const _=[],m=i/2;let p=0;y(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(c),this.setAttribute("position",new Oe(f,3)),this.setAttribute("normal",new Oe(h,3)),this.setAttribute("uv",new Oe(d,2));function y(){const v=new N,A=new N;let T=0;const w=(e-t)/i;for(let C=0;C<=s;C++){const x=[],S=C/s,L=S*(e-t)+t;for(let U=0;U<=r;U++){const z=U/r,K=z*l+a,J=Math.sin(K),$=Math.cos(K);A.x=L*J,A.y=-S*i+m,A.z=L*$,f.push(A.x,A.y,A.z),v.set(J,w,$).normalize(),h.push(v.x,v.y,v.z),d.push(z,1-S),x.push(g++)}_.push(x)}for(let C=0;C<r;C++)for(let x=0;x<s;x++){const S=_[x][C],L=_[x+1][C],U=_[x+1][C+1],z=_[x][C+1];(t>0||x!==0)&&(c.push(S,L,z),T+=3),(e>0||x!==s-1)&&(c.push(L,U,z),T+=3)}u.addGroup(p,T,0),p+=T}function M(v){const A=g,T=new zt,w=new N;let C=0;const x=v===!0?t:e,S=v===!0?1:-1;for(let U=1;U<=r;U++)f.push(0,m*S,0),h.push(0,S,0),d.push(.5,.5),g++;const L=g;for(let U=0;U<=r;U++){const K=U/r*l+a,J=Math.cos(K),$=Math.sin(K);w.x=x*$,w.y=m*S,w.z=x*J,f.push(w.x,w.y,w.z),h.push(0,S,0),T.x=J*.5+.5,T.y=$*.5*S+.5,d.push(T.x,T.y),g++}for(let U=0;U<r;U++){const z=A+U,K=L+U;v===!0?c.push(K,K+1,z):c.push(K+1,K,z),C+=3}u.addGroup(p,C,v===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jf(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qf extends _n{constructor(t=[],e=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:r};const s=[],o=[];a(r),u(i),c(),this.setAttribute("position",new Oe(s,3)),this.setAttribute("normal",new Oe(s.slice(),3)),this.setAttribute("uv",new Oe(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const M=new N,v=new N,A=new N;for(let T=0;T<e.length;T+=3)d(e[T+0],M),d(e[T+1],v),d(e[T+2],A),l(M,v,A,y)}function l(y,M,v,A){const T=A+1,w=[];for(let C=0;C<=T;C++){w[C]=[];const x=y.clone().lerp(v,C/T),S=M.clone().lerp(v,C/T),L=T-C;for(let U=0;U<=L;U++)U===0&&C===T?w[C][U]=x:w[C][U]=x.clone().lerp(S,U/L)}for(let C=0;C<T;C++)for(let x=0;x<2*(T-C)-1;x++){const S=Math.floor(x/2);x%2===0?(h(w[C][S+1]),h(w[C+1][S]),h(w[C][S])):(h(w[C][S+1]),h(w[C+1][S+1]),h(w[C+1][S]))}}function u(y){const M=new N;for(let v=0;v<s.length;v+=3)M.x=s[v+0],M.y=s[v+1],M.z=s[v+2],M.normalize().multiplyScalar(y),s[v+0]=M.x,s[v+1]=M.y,s[v+2]=M.z}function c(){const y=new N;for(let M=0;M<s.length;M+=3){y.x=s[M+0],y.y=s[M+1],y.z=s[M+2];const v=m(y)/2/Math.PI+.5,A=p(y)/Math.PI+.5;o.push(v,1-A)}g(),f()}function f(){for(let y=0;y<o.length;y+=6){const M=o[y+0],v=o[y+2],A=o[y+4],T=Math.max(M,v,A),w=Math.min(M,v,A);T>.9&&w<.1&&(M<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),A<.2&&(o[y+4]+=1))}}function h(y){s.push(y.x,y.y,y.z)}function d(y,M){const v=y*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function g(){const y=new N,M=new N,v=new N,A=new N,T=new zt,w=new zt,C=new zt;for(let x=0,S=0;x<s.length;x+=9,S+=6){y.set(s[x+0],s[x+1],s[x+2]),M.set(s[x+3],s[x+4],s[x+5]),v.set(s[x+6],s[x+7],s[x+8]),T.set(o[S+0],o[S+1]),w.set(o[S+2],o[S+3]),C.set(o[S+4],o[S+5]),A.copy(y).add(M).add(v).divideScalar(3);const L=m(A);_(T,S+0,y,L),_(w,S+2,M,L),_(C,S+4,v,L)}}function _(y,M,v,A){A<0&&y.x===1&&(o[M]=y.x-1),v.x===0&&v.z===0&&(o[M]=A/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qf(t.vertices,t.indices,t.radius,t.details)}}class th extends Qf{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new th(t.radius,t.detail)}}class ni extends _n{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=t/a,h=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<c;p++){const y=p*h-o;for(let M=0;M<u;M++){const v=M*f-s;g.push(v,-y,0),_.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const M=y+u*p,v=y+u*(p+1),A=y+1+u*(p+1),T=y+1+u*p;d.push(M,v,T),d.push(v,A,T)}this.setIndex(d),this.setAttribute("position",new Oe(g,3)),this.setAttribute("normal",new Oe(_,3)),this.setAttribute("uv",new Oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ni(t.width,t.height,t.widthSegments,t.heightSegments)}}class Hr extends _n{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],f=new N,h=new N,d=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const y=[],M=p/i;let v=0;p===0&&o===0?v=.5/e:p===i&&l===Math.PI&&(v=-.5/e);for(let A=0;A<=e;A++){const T=A/e;f.x=-t*Math.cos(r+T*s)*Math.sin(o+M*a),f.y=t*Math.cos(o+M*a),f.z=t*Math.sin(r+T*s)*Math.sin(o+M*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),m.push(T+v,1-M),y.push(u++)}c.push(y)}for(let p=0;p<i;p++)for(let y=0;y<e;y++){const M=c[p][y+1],v=c[p][y],A=c[p+1][y],T=c[p+1][y+1];(p!==0||o>0)&&d.push(M,v,T),(p!==i-1||l<Math.PI)&&d.push(v,A,T)}this.setIndex(d),this.setAttribute("position",new Oe(g,3)),this.setAttribute("normal",new Oe(_,3)),this.setAttribute("uv",new Oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class vl extends _n{constructor(t=1,e=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],u=[],c=new N,f=new N,h=new N;for(let d=0;d<=i;d++)for(let g=0;g<=r;g++){const _=g/r*s,m=d/i*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(_),f.y=(t+e*Math.cos(m))*Math.sin(_),f.z=e*Math.sin(m),a.push(f.x,f.y,f.z),c.x=t*Math.cos(_),c.y=t*Math.sin(_),h.subVectors(f,c).normalize(),l.push(h.x,h.y,h.z),u.push(g/r),u.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=r;g++){const _=(r+1)*d+g-1,m=(r+1)*(d-1)+g-1,p=(r+1)*(d-1)+g,y=(r+1)*d+g;o.push(_,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new Oe(a,3)),this.setAttribute("normal",new Oe(l,3)),this.setAttribute("uv",new Oe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vl(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class eh extends _n{constructor(t=new rg(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:r,closed:s};const o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new N,l=new N,u=new zt;let c=new N;const f=[],h=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Oe(f,3)),this.setAttribute("normal",new Oe(h,3)),this.setAttribute("uv",new Oe(d,2));function _(){for(let M=0;M<e;M++)m(M);m(s===!1?e:0),y(),p()}function m(M){c=t.getPointAt(M/e,c);const v=o.normals[M],A=o.binormals[M];for(let T=0;T<=r;T++){const w=T/r*Math.PI*2,C=Math.sin(w),x=-Math.cos(w);l.x=x*v.x+C*A.x,l.y=x*v.y+C*A.y,l.z=x*v.z+C*A.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=c.x+i*l.x,a.y=c.y+i*l.y,a.z=c.z+i*l.z,f.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=e;M++)for(let v=1;v<=r;v++){const A=(r+1)*(M-1)+(v-1),T=(r+1)*M+(v-1),w=(r+1)*M+v,C=(r+1)*(M-1)+v;g.push(A,T,C),g.push(T,w,C)}}function y(){for(let M=0;M<=e;M++)for(let v=0;v<=r;v++)u.x=M/e,u.y=v/r,d.push(u.x,u.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new eh(new QM[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Fd extends to{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=G_,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class tS extends to{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class eS extends to{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class nh extends Qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Lc=new we,Bd=new N,zd=new N;class sg{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jf,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Bd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bd),zd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(zd),e.updateMatrixWorld(),Lc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Lc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const kd=new we,mo=new N,Ic=new N;class nS extends sg{constructor(){super(new Sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new zt(4,2),this._viewportCount=6,this._viewports=[new Me(2,1,1,1),new Me(0,1,1,1),new Me(3,1,1,1),new Me(1,1,1,1),new Me(3,0,1,1),new Me(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,r=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),mo.setFromMatrixPosition(t.matrixWorld),i.position.copy(mo),Ic.copy(i.position),Ic.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Ic),i.updateMatrixWorld(),r.makeTranslation(-mo.x,-mo.y,-mo.z),kd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kd)}}class Vd extends nh{constructor(t,e,i=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new nS}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class og extends J_{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class iS extends sg{constructor(){super(new og(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hd extends nh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.shadow=new iS}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class rS extends nh{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class sS extends Sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class oS{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Gd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Gd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Gd(){return performance.now()}const Wd=new we;class ag{constructor(t,e,i=0,r=1/0){this.ray=new Yf(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new $f,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Wd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wd),this}intersectObject(t,e=!0,i=[]){return ef(t,this,i,e),i.sort(Xd),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)ef(t[r],this,i,e);return i.sort(Xd),i}}function Xd(n,t){return n.distance-t.distance}function ef(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)ef(s[o],t,e,!0)}}function qd(n,t,e,i){const r=aS(i);switch(e){case O_:return n*t;case B_:return n*t;case z_:return n*t*2;case k_:return n*t/r.components*r.byteLength;case Wf:return n*t/r.components*r.byteLength;case V_:return n*t*2/r.components*r.byteLength;case Xf:return n*t*2/r.components*r.byteLength;case F_:return n*t*3/r.components*r.byteLength;case si:return n*t*4/r.components*r.byteLength;case qf:return n*t*4/r.components*r.byteLength;case Ya:case $a:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ka:case ja:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Au:case Ru:return Math.max(n,16)*Math.max(t,8)/4;case wu:case Cu:return Math.max(n,8)*Math.max(t,8)/2;case Pu:case Du:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Lu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Iu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Uu:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Nu:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ou:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Fu:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Bu:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case zu:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ku:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Vu:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Hu:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Gu:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Wu:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Xu:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case qu:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Za:case Yu:case $u:return Math.ceil(n/4)*Math.ceil(t/4)*16;case H_:case Ku:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ju:case Zu:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function aS(n){switch(n){case $i:case I_:return{byteLength:1,components:1};case Zo:case U_:case na:return{byteLength:2,components:1};case Hf:case Gf:return{byteLength:2,components:4};case ts:case Vf:case zi:return{byteLength:4,components:1};case N_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kf);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function lg(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function lS(n){const t=new WeakMap;function e(a,l){const u=a.array,c=a.usage,f=u.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,u,c),a.onUploadCallback();let d;if(u instanceof Float32Array)d=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)d=n.SHORT;else if(u instanceof Uint32Array)d=n.UNSIGNED_INT;else if(u instanceof Int32Array)d=n.INT;else if(u instanceof Int8Array)d=n.BYTE;else if(u instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:d,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l.updateRanges;if(n.bindBuffer(u,a),f.length===0)n.bufferSubData(u,0,c);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];n.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=t.get(a);if(u===void 0)t.set(a,e(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var cS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uS=`#ifdef USE_ALPHAHASH
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
#endif`,fS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mS=`#ifdef USE_AOMAP
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
#endif`,_S=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gS=`#ifdef USE_BATCHING
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
#endif`,vS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,MS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,SS=`#ifdef USE_IRIDESCENCE
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
#endif`,ES=`#ifdef USE_BUMPMAP
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
#endif`,TS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,AS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,CS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,RS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,PS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,DS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,LS=`#define PI 3.141592653589793
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
#endif`,US=`vec3 transformedNormal = objectNormal;
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
#endif`,NS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,OS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,BS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zS="gl_FragColor = linearToOutputTexel( gl_FragColor );",kS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,VS=`#ifdef USE_ENVMAP
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
	
#endif`,GS=`#ifdef USE_ENVMAP
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
#endif`,WS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,XS=`#ifdef USE_ENVMAP
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
#endif`,qS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,YS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$S=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,KS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jS=`#ifdef USE_GRADIENTMAP
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
}`,ZS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,JS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,QS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,t1=`uniform bool receiveShadow;
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
#endif`,e1=`#ifdef USE_ENVMAP
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
#endif`,n1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,i1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,r1=`BlinnPhongMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,o1=`PhysicalMaterial material;
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
#endif`,a1=`struct PhysicalMaterial {
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
}`,l1=`
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
#endif`,c1=`#if defined( RE_IndirectDiffuse )
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
#endif`,u1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,f1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,h1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,m1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,v1=`#if defined( USE_POINTS_UV )
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
#endif`,x1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,y1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,M1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E1=`#ifdef USE_MORPHNORMALS
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
#endif`,T1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,A1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,C1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,D1=`#ifdef USE_NORMALMAP
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
#endif`,L1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,I1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,U1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,N1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,O1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,F1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,B1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,z1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,V1=`#ifdef DITHERING
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
#endif`,G1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,W1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,X1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Y1=`float getShadowMask() {
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
}`,$1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,K1=`#ifdef USE_SKINNING
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
#endif`,j1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Z1=`#ifdef USE_SKINNING
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
#endif`,J1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Q1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nE=`#ifdef USE_TRANSMISSION
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
#endif`,iE=`#ifdef USE_TRANSMISSION
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
#endif`,rE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cE=`uniform sampler2D t2D;
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
}`,uE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pE=`#include <common>
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
}`,mE=`#if DEPTH_PACKING == 3200
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
}`,_E=`#define DISTANCE
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
}`,gE=`#define DISTANCE
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
}`,vE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yE=`uniform float scale;
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
}`,ME=`uniform vec3 diffuse;
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
}`,SE=`#include <common>
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
}`,EE=`uniform vec3 diffuse;
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
}`,bE=`#define LAMBERT
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
}`,TE=`#define LAMBERT
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
}`,wE=`#define MATCAP
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
}`,AE=`#define MATCAP
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
}`,CE=`#define NORMAL
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
}`,RE=`#define NORMAL
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
}`,PE=`#define PHONG
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
}`,DE=`#define PHONG
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
}`,LE=`#define STANDARD
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
}`,IE=`#define STANDARD
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
}`,UE=`#define TOON
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
}`,NE=`#define TOON
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
}`,OE=`uniform float size;
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
}`,FE=`uniform vec3 diffuse;
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
}`,BE=`#include <common>
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
}`,zE=`uniform vec3 color;
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
}`,kE=`uniform float rotation;
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
}`,VE=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:cS,alphahash_pars_fragment:uS,alphamap_fragment:fS,alphamap_pars_fragment:hS,alphatest_fragment:dS,alphatest_pars_fragment:pS,aomap_fragment:mS,aomap_pars_fragment:_S,batching_pars_vertex:gS,batching_vertex:vS,begin_vertex:xS,beginnormal_vertex:yS,bsdfs:MS,iridescence_fragment:SS,bumpmap_pars_fragment:ES,clipping_planes_fragment:bS,clipping_planes_pars_fragment:TS,clipping_planes_pars_vertex:wS,clipping_planes_vertex:AS,color_fragment:CS,color_pars_fragment:RS,color_pars_vertex:PS,color_vertex:DS,common:LS,cube_uv_reflection_fragment:IS,defaultnormal_vertex:US,displacementmap_pars_vertex:NS,displacementmap_vertex:OS,emissivemap_fragment:FS,emissivemap_pars_fragment:BS,colorspace_fragment:zS,colorspace_pars_fragment:kS,envmap_fragment:VS,envmap_common_pars_fragment:HS,envmap_pars_fragment:GS,envmap_pars_vertex:WS,envmap_physical_pars_fragment:e1,envmap_vertex:XS,fog_vertex:qS,fog_pars_vertex:YS,fog_fragment:$S,fog_pars_fragment:KS,gradientmap_pars_fragment:jS,lightmap_pars_fragment:ZS,lights_lambert_fragment:JS,lights_lambert_pars_fragment:QS,lights_pars_begin:t1,lights_toon_fragment:n1,lights_toon_pars_fragment:i1,lights_phong_fragment:r1,lights_phong_pars_fragment:s1,lights_physical_fragment:o1,lights_physical_pars_fragment:a1,lights_fragment_begin:l1,lights_fragment_maps:c1,lights_fragment_end:u1,logdepthbuf_fragment:f1,logdepthbuf_pars_fragment:h1,logdepthbuf_pars_vertex:d1,logdepthbuf_vertex:p1,map_fragment:m1,map_pars_fragment:_1,map_particle_fragment:g1,map_particle_pars_fragment:v1,metalnessmap_fragment:x1,metalnessmap_pars_fragment:y1,morphinstance_vertex:M1,morphcolor_vertex:S1,morphnormal_vertex:E1,morphtarget_pars_vertex:b1,morphtarget_vertex:T1,normal_fragment_begin:w1,normal_fragment_maps:A1,normal_pars_fragment:C1,normal_pars_vertex:R1,normal_vertex:P1,normalmap_pars_fragment:D1,clearcoat_normal_fragment_begin:L1,clearcoat_normal_fragment_maps:I1,clearcoat_pars_fragment:U1,iridescence_pars_fragment:N1,opaque_fragment:O1,packing:F1,premultiplied_alpha_fragment:B1,project_vertex:z1,dithering_fragment:k1,dithering_pars_fragment:V1,roughnessmap_fragment:H1,roughnessmap_pars_fragment:G1,shadowmap_pars_fragment:W1,shadowmap_pars_vertex:X1,shadowmap_vertex:q1,shadowmask_pars_fragment:Y1,skinbase_vertex:$1,skinning_pars_vertex:K1,skinning_vertex:j1,skinnormal_vertex:Z1,specularmap_fragment:J1,specularmap_pars_fragment:Q1,tonemapping_fragment:tE,tonemapping_pars_fragment:eE,transmission_fragment:nE,transmission_pars_fragment:iE,uv_pars_fragment:rE,uv_pars_vertex:sE,uv_vertex:oE,worldpos_vertex:aE,background_vert:lE,background_frag:cE,backgroundCube_vert:uE,backgroundCube_frag:fE,cube_vert:hE,cube_frag:dE,depth_vert:pE,depth_frag:mE,distanceRGBA_vert:_E,distanceRGBA_frag:gE,equirect_vert:vE,equirect_frag:xE,linedashed_vert:yE,linedashed_frag:ME,meshbasic_vert:SE,meshbasic_frag:EE,meshlambert_vert:bE,meshlambert_frag:TE,meshmatcap_vert:wE,meshmatcap_frag:AE,meshnormal_vert:CE,meshnormal_frag:RE,meshphong_vert:PE,meshphong_frag:DE,meshphysical_vert:LE,meshphysical_frag:IE,meshtoon_vert:UE,meshtoon_frag:NE,points_vert:OE,points_frag:FE,shadow_vert:BE,shadow_frag:zE,sprite_vert:kE,sprite_frag:VE},bt={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},_i={basic:{uniforms:cn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:cn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:cn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:cn([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:cn([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:cn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:cn([bt.points,bt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:cn([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:cn([bt.common,bt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:cn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:cn([bt.sprite,bt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:cn([bt.common,bt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:cn([bt.lights,bt.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};_i.physical={uniforms:cn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};const Na={r:0,b:0,g:0},Ur=new Ei,HE=new we;function GE(n,t,e,i,r,s,o){const a=new Zt(0);let l=s===!0?0:1,u,c,f=null,h=0,d=null;function g(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function _(M){let v=!1;const A=g(M);A===null?p(a,l):A&&A.isColor&&(p(A,1),v=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(M,v){const A=g(v);A&&(A.isCubeTexture||A.mapping===Ul)?(c===void 0&&(c=new xe(new oa(1,1,1),new Mr({name:"BackgroundCubeMaterial",uniforms:Zs(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Ur.copy(v.backgroundRotation),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),c.material.uniforms.envMap.value=A,c.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(HE.makeRotationFromEuler(Ur)),c.material.toneMapped=ue.getTransfer(A.colorSpace)!==ye,(f!==A||h!==A.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=A,h=A.version,d=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):A&&A.isTexture&&(u===void 0&&(u=new xe(new ni(2,2),new Mr({name:"BackgroundMaterial",uniforms:Zs(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=A,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=ue.getTransfer(A.colorSpace)!==ye,A.matrixAutoUpdate===!0&&A.updateMatrix(),u.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||h!==A.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=A,h=A.version,d=n.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null))}function p(M,v){M.getRGB(Na,Z_(n)),i.buffers.color.setClear(Na.r,Na.g,Na.b,v,o)}function y(){c!==void 0&&(c.geometry.dispose(),c.material.dispose()),u!==void 0&&(u.geometry.dispose(),u.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:_,addToRenderList:m,dispose:y}}function WE(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,L,U,z,K){let J=!1;const $=f(z,U,L);s!==$&&(s=$,u(s.object)),J=d(S,z,U,K),J&&g(S,z,U,K),K!==null&&t.update(K,n.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,v(S,L,U,z),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function l(){return n.createVertexArray()}function u(S){return n.bindVertexArray(S)}function c(S){return n.deleteVertexArray(S)}function f(S,L,U){const z=U.wireframe===!0;let K=i[S.id];K===void 0&&(K={},i[S.id]=K);let J=K[L.id];J===void 0&&(J={},K[L.id]=J);let $=J[z];return $===void 0&&($=h(l()),J[z]=$),$}function h(S){const L=[],U=[],z=[];for(let K=0;K<e;K++)L[K]=0,U[K]=0,z[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:z,object:S,attributes:{},index:null}}function d(S,L,U,z){const K=s.attributes,J=L.attributes;let $=0;const j=U.getAttributes();for(const G in j)if(j[G].location>=0){const vt=K[G];let St=J[G];if(St===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(St=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(St=S.instanceColor)),vt===void 0||vt.attribute!==St||St&&vt.data!==St.data)return!0;$++}return s.attributesNum!==$||s.index!==z}function g(S,L,U,z){const K={},J=L.attributes;let $=0;const j=U.getAttributes();for(const G in j)if(j[G].location>=0){let vt=J[G];vt===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(vt=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(vt=S.instanceColor));const St={};St.attribute=vt,vt&&vt.data&&(St.data=vt.data),K[G]=St,$++}s.attributes=K,s.attributesNum=$,s.index=z}function _(){const S=s.newAttributes;for(let L=0,U=S.length;L<U;L++)S[L]=0}function m(S){p(S,0)}function p(S,L){const U=s.newAttributes,z=s.enabledAttributes,K=s.attributeDivisors;U[S]=1,z[S]===0&&(n.enableVertexAttribArray(S),z[S]=1),K[S]!==L&&(n.vertexAttribDivisor(S,L),K[S]=L)}function y(){const S=s.newAttributes,L=s.enabledAttributes;for(let U=0,z=L.length;U<z;U++)L[U]!==S[U]&&(n.disableVertexAttribArray(U),L[U]=0)}function M(S,L,U,z,K,J,$){$===!0?n.vertexAttribIPointer(S,L,U,K,J):n.vertexAttribPointer(S,L,U,z,K,J)}function v(S,L,U,z){_();const K=z.attributes,J=U.getAttributes(),$=L.defaultAttributeValues;for(const j in J){const G=J[j];if(G.location>=0){let pt=K[j];if(pt===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(pt=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(pt=S.instanceColor)),pt!==void 0){const vt=pt.normalized,St=pt.itemSize,Pt=t.get(pt);if(Pt===void 0)continue;const Qt=Pt.buffer,st=Pt.type,mt=Pt.bytesPerElement,Ct=st===n.INT||st===n.UNSIGNED_INT||pt.gpuType===Vf;if(pt.isInterleavedBufferAttribute){const yt=pt.data,Bt=yt.stride,kt=pt.offset;if(yt.isInstancedInterleavedBuffer){for(let Wt=0;Wt<G.locationSize;Wt++)p(G.location+Wt,yt.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Wt=0;Wt<G.locationSize;Wt++)m(G.location+Wt);n.bindBuffer(n.ARRAY_BUFFER,Qt);for(let Wt=0;Wt<G.locationSize;Wt++)M(G.location+Wt,St/G.locationSize,st,vt,Bt*mt,(kt+St/G.locationSize*Wt)*mt,Ct)}else{if(pt.isInstancedBufferAttribute){for(let yt=0;yt<G.locationSize;yt++)p(G.location+yt,pt.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let yt=0;yt<G.locationSize;yt++)m(G.location+yt);n.bindBuffer(n.ARRAY_BUFFER,Qt);for(let yt=0;yt<G.locationSize;yt++)M(G.location+yt,St/G.locationSize,st,vt,St*mt,St/G.locationSize*yt*mt,Ct)}}else if($!==void 0){const vt=$[j];if(vt!==void 0)switch(vt.length){case 2:n.vertexAttrib2fv(G.location,vt);break;case 3:n.vertexAttrib3fv(G.location,vt);break;case 4:n.vertexAttrib4fv(G.location,vt);break;default:n.vertexAttrib1fv(G.location,vt)}}}}y()}function A(){C();for(const S in i){const L=i[S];for(const U in L){const z=L[U];for(const K in z)c(z[K].object),delete z[K];delete L[U]}delete i[S]}}function T(S){if(i[S.id]===void 0)return;const L=i[S.id];for(const U in L){const z=L[U];for(const K in z)c(z[K].object),delete z[K];delete L[U]}delete i[S.id]}function w(S){for(const L in i){const U=i[L];if(U[S.id]===void 0)continue;const z=U[S.id];for(const K in z)c(z[K].object),delete z[K];delete U[S.id]}}function C(){x(),o=!0,s!==r&&(s=r,u(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:x,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function XE(n,t,e){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),e.update(c,i,1)}function o(u,c,f){f!==0&&(n.drawArraysInstanced(i,u,c,f),e.update(c,i,f))}function a(u,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let d=0;for(let g=0;g<f;g++)d+=c[g];e.update(d,i,1)}function l(u,c,f,h){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<u.length;g++)o(u[g],c[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(i,u,0,c,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=c[_]*h[_];e.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function qE(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==si&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const C=w===na&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==$i&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==zi&&!C)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:A,maxSamples:T}}function YE(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new Br,a=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=c(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?c(null):u();else{const y=s?0:i,M=y*4;let v=p.clippingState||null;l.value=v,v=c(g,h,M,d);for(let A=0;A!==M;++A)v[A]=e[A];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,v=d;M!==_;++M,v+=4)o.copy(f[M]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function $E(n){let t=new WeakMap;function e(o,a){return a===Su?o.mapping=qs:a===Eu&&(o.mapping=Ys),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Su||a===Eu)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new OM(l.height);return u.fromEquirectangularTexture(n,o),t.set(o,u),o.addEventListener("dispose",r),e(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const ws=4,Yd=[.125,.215,.35,.446,.526,.582],Gr=20,Uc=new og,$d=new Zt;let Nc=null,Oc=0,Fc=0,Bc=!1;const zr=(1+Math.sqrt(5))/2,ys=1/zr,Kd=[new N(-zr,ys,0),new N(zr,ys,0),new N(-ys,0,zr),new N(ys,0,zr),new N(0,zr,-ys),new N(0,zr,ys),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class jd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){Nc=this._renderer.getRenderTarget(),Oc=this._renderer.getActiveCubeFace(),Fc=this._renderer.getActiveMipmapLevel(),Bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Nc,Oc,Fc),this._renderer.xr.enabled=Bc,t.scissorTest=!1,Oa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qs||t.mapping===Ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Nc=this._renderer.getRenderTarget(),Oc=this._renderer.getActiveCubeFace(),Fc=this._renderer.getActiveMipmapLevel(),Bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:na,format:si,colorSpace:js,depthBuffer:!1},r=Zd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zd(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=KE(s)),this._blurMaterial=jE(s,t,e)}return r}_compileMaterial(t){const e=new xe(this._lodPlanes[0],t);this._renderer.compile(e,Uc)}_sceneToCubeUV(t,e,i,r){const a=new Sn(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor($d),c.toneMapping=mr,c.autoClear=!1;const d=new Ge({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),g=new xe(new oa,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy($d),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(u[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,u[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,u[p]));const M=this._cubeSize;Oa(r,y*M,p>2?M:0,M,M),c.setRenderTarget(r),_&&c.render(g,a),c.render(t,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=h,c.autoClear=f,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===qs||t.mapping===Ys;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jd());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new xe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Oa(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Uc)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Kd[(r-s-1)%Kd.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new xe(this._lodPlanes[r],u),h=u.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Gr-1),_=s/g,m=isFinite(s)?1+Math.floor(c*_):Gr;m>Gr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gr}`);const p=[];let y=0;for(let w=0;w<Gr;++w){const C=w/_,x=Math.exp(-C*C/2);p.push(x),w===0?y+=x:w<m&&(y+=2*x)}for(let w=0;w<p.length;w++)p[w]=p[w]/y;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-i;const v=this._sizeLods[r],A=3*v*(r>M-ws?r-M+ws:0),T=4*(this._cubeSize-v);Oa(e,A,T,3*v,2*v),l.setRenderTarget(e),l.render(f,Uc)}}function KE(n){const t=[],e=[],i=[];let r=n;const s=n-ws+1+Yd.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-ws?l=Yd[o-n+ws-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],d=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*d),M=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let T=0;T<d;T++){const w=T%3*2/3-1,C=T>2?0:-1,x=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];y.set(x,_*g*T),M.set(h,m*g*T);const S=[T,T,T,T,T,T];v.set(S,p*g*T)}const A=new _n;A.setAttribute("position",new Zn(y,_)),A.setAttribute("uv",new Zn(M,m)),A.setAttribute("faceIndex",new Zn(v,p)),t.push(A),r>ws&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Zd(n,t,e){const i=new es(n,t,e);return i.texture.mapping=Ul,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Oa(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function jE(n,t,e){const i=new Float32Array(Gr),r=new N(0,1,0);return new Mr({name:"SphericalGaussianBlur",defines:{n:Gr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ih(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Jd(){return new Mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ih(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Qd(){return new Mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function ih(){return`

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
	`}function ZE(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Su||l===Eu,c=l===qs||l===Ys;if(u||c){let f=t.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new jd(n)),f=u?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return u&&d&&d.height>0||c&&d&&r(d)?(e===null&&(e=new jd(n)),f=u?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function JE(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&Es("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function QE(n,t,e,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(t.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)t.update(h[d],n.ARRAY_BUFFER)}function u(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let M=0,v=y.length;M<v;M+=3){const A=y[M+0],T=y[M+1],w=y[M+2];h.push(A,T,T,w,w,A)}}else if(g!==void 0){const y=g.array;_=g.version;for(let M=0,v=y.length/3-1;M<v;M+=3){const A=M+0,T=M+1,w=M+2;h.push(A,T,T,w,w,A)}}else return;const m=new(X_(h)?j_:K_)(h,1);m.version=_;const p=s.get(f);p&&t.remove(p),s.set(f,m)}function c(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function tb(n,t,e){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,s,h*o),e.update(d,i,1)}function u(h,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,h*o,g),e.update(d,i,g))}function c(h,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,i,1)}function f(h,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)u(h[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=d[y]*_[y];e.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function eb(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function nb(n,t,e){const i=new WeakMap,r=new Me;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let S=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var d=S;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let A=a.attributes.position.count*v,T=1;A>t.maxTextureSize&&(T=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const w=new Float32Array(A*T*4*f),C=new Y_(w,A,T,f);C.type=zi,C.needsUpdate=!0;const x=v*4;for(let L=0;L<f;L++){const U=p[L],z=y[L],K=M[L],J=A*T*4*L;for(let $=0;$<U.count;$++){const j=$*x;g===!0&&(r.fromBufferAttribute(U,$),w[J+j+0]=r.x,w[J+j+1]=r.y,w[J+j+2]=r.z,w[J+j+3]=0),_===!0&&(r.fromBufferAttribute(z,$),w[J+j+4]=r.x,w[J+j+5]=r.y,w[J+j+6]=r.z,w[J+j+7]=0),m===!0&&(r.fromBufferAttribute(K,$),w[J+j+8]=r.x,w[J+j+9]=r.y,w[J+j+10]=r.z,w[J+j+11]=K.itemSize===4?r.w:1)}}h={count:f,texture:C,size:new zt(A,T)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function ib(n,t,e,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=t.get(l,c);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:s,dispose:o}}const cg=new mn,tp=new eg(1,1),ug=new Y_,fg=new yM,hg=new Q_,ep=[],np=[],ip=new Float32Array(16),rp=new Float32Array(9),sp=new Float32Array(4);function eo(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=ep[r];if(s===void 0&&(s=new Float32Array(r),ep[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function Xe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function qe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ol(n,t){let e=np[t];e===void 0&&(e=new Int32Array(t),np[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function rb(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function sb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;n.uniform2fv(this.addr,t),qe(e,t)}}function ob(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Xe(e,t))return;n.uniform3fv(this.addr,t),qe(e,t)}}function ab(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;n.uniform4fv(this.addr,t),qe(e,t)}}function lb(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Xe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,i))return;sp.set(i),n.uniformMatrix2fv(this.addr,!1,sp),qe(e,i)}}function cb(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Xe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,i))return;rp.set(i),n.uniformMatrix3fv(this.addr,!1,rp),qe(e,i)}}function ub(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Xe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,i))return;ip.set(i),n.uniformMatrix4fv(this.addr,!1,ip),qe(e,i)}}function fb(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function hb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;n.uniform2iv(this.addr,t),qe(e,t)}}function db(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;n.uniform3iv(this.addr,t),qe(e,t)}}function pb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;n.uniform4iv(this.addr,t),qe(e,t)}}function mb(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function _b(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;n.uniform2uiv(this.addr,t),qe(e,t)}}function gb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;n.uniform3uiv(this.addr,t),qe(e,t)}}function vb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;n.uniform4uiv(this.addr,t),qe(e,t)}}function xb(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(tp.compareFunction=W_,s=tp):s=cg,e.setTexture2D(t||s,r)}function yb(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||fg,r)}function Mb(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||hg,r)}function Sb(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||ug,r)}function Eb(n){switch(n){case 5126:return rb;case 35664:return sb;case 35665:return ob;case 35666:return ab;case 35674:return lb;case 35675:return cb;case 35676:return ub;case 5124:case 35670:return fb;case 35667:case 35671:return hb;case 35668:case 35672:return db;case 35669:case 35673:return pb;case 5125:return mb;case 36294:return _b;case 36295:return gb;case 36296:return vb;case 35678:case 36198:case 36298:case 36306:case 35682:return xb;case 35679:case 36299:case 36307:return yb;case 35680:case 36300:case 36308:case 36293:return Mb;case 36289:case 36303:case 36311:case 36292:return Sb}}function bb(n,t){n.uniform1fv(this.addr,t)}function Tb(n,t){const e=eo(t,this.size,2);n.uniform2fv(this.addr,e)}function wb(n,t){const e=eo(t,this.size,3);n.uniform3fv(this.addr,e)}function Ab(n,t){const e=eo(t,this.size,4);n.uniform4fv(this.addr,e)}function Cb(n,t){const e=eo(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Rb(n,t){const e=eo(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Pb(n,t){const e=eo(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Db(n,t){n.uniform1iv(this.addr,t)}function Lb(n,t){n.uniform2iv(this.addr,t)}function Ib(n,t){n.uniform3iv(this.addr,t)}function Ub(n,t){n.uniform4iv(this.addr,t)}function Nb(n,t){n.uniform1uiv(this.addr,t)}function Ob(n,t){n.uniform2uiv(this.addr,t)}function Fb(n,t){n.uniform3uiv(this.addr,t)}function Bb(n,t){n.uniform4uiv(this.addr,t)}function zb(n,t,e){const i=this.cache,r=t.length,s=Ol(e,r);Xe(i,s)||(n.uniform1iv(this.addr,s),qe(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||cg,s[o])}function kb(n,t,e){const i=this.cache,r=t.length,s=Ol(e,r);Xe(i,s)||(n.uniform1iv(this.addr,s),qe(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||fg,s[o])}function Vb(n,t,e){const i=this.cache,r=t.length,s=Ol(e,r);Xe(i,s)||(n.uniform1iv(this.addr,s),qe(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||hg,s[o])}function Hb(n,t,e){const i=this.cache,r=t.length,s=Ol(e,r);Xe(i,s)||(n.uniform1iv(this.addr,s),qe(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||ug,s[o])}function Gb(n){switch(n){case 5126:return bb;case 35664:return Tb;case 35665:return wb;case 35666:return Ab;case 35674:return Cb;case 35675:return Rb;case 35676:return Pb;case 5124:case 35670:return Db;case 35667:case 35671:return Lb;case 35668:case 35672:return Ib;case 35669:case 35673:return Ub;case 5125:return Nb;case 36294:return Ob;case 36295:return Fb;case 36296:return Bb;case 35678:case 36198:case 36298:case 36306:case 35682:return zb;case 35679:case 36299:case 36307:return kb;case 35680:case 36300:case 36308:case 36293:return Vb;case 36289:case 36303:case 36311:case 36292:return Hb}}class Wb{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Eb(e.type)}}class Xb{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Gb(e.type)}}class qb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const zc=/(\w+)(\])?(\[|\.)?/g;function op(n,t){n.seq.push(t),n.map[t.id]=t}function Yb(n,t,e){const i=n.name,r=i.length;for(zc.lastIndex=0;;){const s=zc.exec(i),o=zc.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){op(e,u===void 0?new Wb(a,n,t):new Xb(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new qb(a),op(e,f)),e=f}}}class Ja{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);Yb(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function ap(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const $b=37297;let Kb=0;function jb(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const lp=new te;function Zb(n){ue._getMatrix(lp,ue.workingColorSpace,n);const t=`mat3( ${lp.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(n)){case ml:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function cp(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+jb(n.getShaderSource(t),o)}else return r}function Jb(n,t){const e=Zb(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Qb(n,t){let e;switch(t){case qy:e="Linear";break;case Yy:e="Reinhard";break;case $y:e="Cineon";break;case Ky:e="ACESFilmic";break;case Zy:e="AgX";break;case Jy:e="Neutral";break;case jy:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Fa=new N;function tT(){ue.getLuminanceCoefficients(Fa);const n=Fa.x.toFixed(4),t=Fa.y.toFixed(4),e=Fa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eT(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xo).join(`
`)}function nT(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function iT(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function xo(n){return n!==""}function up(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fp(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const rT=/^[ \t]*#include +<([\w\d./]+)>/gm;function nf(n){return n.replace(rT,oT)}const sT=new Map;function oT(n,t){let e=ee[t];if(e===void 0){const i=sT.get(t);if(i!==void 0)e=ee[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return nf(e)}const aT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hp(n){return n.replace(aT,lT)}function lT(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function dp(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function cT(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===P_?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ty?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Di&&(t="SHADOWMAP_TYPE_VSM"),t}function uT(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case qs:case Ys:t="ENVMAP_TYPE_CUBE";break;case Ul:t="ENVMAP_TYPE_CUBE_UV";break}return t}function fT(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ys:t="ENVMAP_MODE_REFRACTION";break}return t}function hT(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case D_:t="ENVMAP_BLENDING_MULTIPLY";break;case Wy:t="ENVMAP_BLENDING_MIX";break;case Xy:t="ENVMAP_BLENDING_ADD";break}return t}function dT(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function pT(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=cT(e),u=uT(e),c=fT(e),f=hT(e),h=dT(e),d=eT(e),g=nT(s),_=r.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(xo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(xo).join(`
`),p.length>0&&(p+=`
`)):(m=[dp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xo).join(`
`),p=[dp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mr?"#define TONE_MAPPING":"",e.toneMapping!==mr?ee.tonemapping_pars_fragment:"",e.toneMapping!==mr?Qb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,Jb("linearToOutputTexel",e.outputColorSpace),tT(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xo).join(`
`)),o=nf(o),o=up(o,e),o=fp(o,e),a=nf(a),a=up(a,e),a=fp(a,e),o=hp(o),a=hp(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===md?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===md?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=y+m+o,v=y+p+a,A=ap(r,r.VERTEX_SHADER,M),T=ap(r,r.FRAGMENT_SHADER,v);r.attachShader(_,A),r.attachShader(_,T),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(L){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(_).trim(),z=r.getShaderInfoLog(A).trim(),K=r.getShaderInfoLog(T).trim();let J=!0,$=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,A,T);else{const j=cp(r,A,"vertex"),G=cp(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+U+`
`+j+`
`+G)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(z===""||K==="")&&($=!1);$&&(L.diagnostics={runnable:J,programLog:U,vertexShader:{log:z,prefix:m},fragmentShader:{log:K,prefix:p}})}r.deleteShader(A),r.deleteShader(T),C=new Ja(r,_),x=iT(r,_)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let x;this.getAttributes=function(){return x===void 0&&w(this),x};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,$b)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Kb++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=T,this}let mT=0;class _T{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new gT(t),e.set(t,i)),i}}class gT{constructor(t){this.id=mT++,this.code=t,this.usedTimes=0}}function vT(n,t,e,i,r,s,o){const a=new $f,l=new _T,u=new Set,c=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return u.add(x),x===0?"uv":`uv${x}`}function m(x,S,L,U,z){const K=U.fog,J=z.geometry,$=x.isMeshStandardMaterial?U.environment:null,j=(x.isMeshStandardMaterial?e:t).get(x.envMap||$),G=j&&j.mapping===Ul?j.image.height:null,pt=g[x.type];x.precision!==null&&(d=r.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const vt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,St=vt!==void 0?vt.length:0;let Pt=0;J.morphAttributes.position!==void 0&&(Pt=1),J.morphAttributes.normal!==void 0&&(Pt=2),J.morphAttributes.color!==void 0&&(Pt=3);let Qt,st,mt,Ct;if(pt){const Yt=_i[pt];Qt=Yt.vertexShader,st=Yt.fragmentShader}else Qt=x.vertexShader,st=x.fragmentShader,l.update(x),mt=l.getVertexShaderID(x),Ct=l.getFragmentShaderID(x);const yt=n.getRenderTarget(),Bt=n.state.buffers.depth.getReversed(),kt=z.isInstancedMesh===!0,Wt=z.isBatchedMesh===!0,fe=!!x.map,D=!!x.matcap,B=!!j,R=!!x.aoMap,ut=!!x.lightMap,Z=!!x.bumpMap,nt=!!x.normalMap,rt=!!x.displacementMap,ft=!!x.emissiveMap,tt=!!x.metalnessMap,b=!!x.roughnessMap,E=x.anisotropy>0,O=x.clearcoat>0,Y=x.dispersion>0,I=x.iridescence>0,k=x.sheen>0,ot=x.transmission>0,at=E&&!!x.anisotropyMap,_t=O&&!!x.clearcoatMap,Ut=O&&!!x.clearcoatNormalMap,ht=O&&!!x.clearcoatRoughnessMap,xt=I&&!!x.iridescenceMap,It=I&&!!x.iridescenceThicknessMap,Et=k&&!!x.sheenColorMap,it=k&&!!x.sheenRoughnessMap,Tt=!!x.specularMap,Ot=!!x.specularColorMap,he=!!x.specularIntensityMap,H=ot&&!!x.transmissionMap,wt=ot&&!!x.thicknessMap,lt=!!x.gradientMap,dt=!!x.alphaMap,V=x.alphaTest>0,W=!!x.alphaHash,ct=!!x.extensions;let Mt=mr;x.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(Mt=n.toneMapping);const qt={shaderID:pt,shaderType:x.type,shaderName:x.name,vertexShader:Qt,fragmentShader:st,defines:x.defines,customVertexShaderID:mt,customFragmentShaderID:Ct,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Wt,batchingColor:Wt&&z._colorsTexture!==null,instancing:kt,instancingColor:kt&&z.instanceColor!==null,instancingMorph:kt&&z.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:yt===null?n.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:js,alphaToCoverage:!!x.alphaToCoverage,map:fe,matcap:D,envMap:B,envMapMode:B&&j.mapping,envMapCubeUVHeight:G,aoMap:R,lightMap:ut,bumpMap:Z,normalMap:nt,displacementMap:h&&rt,emissiveMap:ft,normalMapObjectSpace:nt&&x.normalMapType===nM,normalMapTangentSpace:nt&&x.normalMapType===G_,metalnessMap:tt,roughnessMap:b,anisotropy:E,anisotropyMap:at,clearcoat:O,clearcoatMap:_t,clearcoatNormalMap:Ut,clearcoatRoughnessMap:ht,dispersion:Y,iridescence:I,iridescenceMap:xt,iridescenceThicknessMap:It,sheen:k,sheenColorMap:Et,sheenRoughnessMap:it,specularMap:Tt,specularColorMap:Ot,specularIntensityMap:he,transmission:ot,transmissionMap:H,thicknessMap:wt,gradientMap:lt,opaque:x.transparent===!1&&x.blending===Ns&&x.alphaToCoverage===!1,alphaMap:dt,alphaTest:V,alphaHash:W,combine:x.combine,mapUv:fe&&_(x.map.channel),aoMapUv:R&&_(x.aoMap.channel),lightMapUv:ut&&_(x.lightMap.channel),bumpMapUv:Z&&_(x.bumpMap.channel),normalMapUv:nt&&_(x.normalMap.channel),displacementMapUv:rt&&_(x.displacementMap.channel),emissiveMapUv:ft&&_(x.emissiveMap.channel),metalnessMapUv:tt&&_(x.metalnessMap.channel),roughnessMapUv:b&&_(x.roughnessMap.channel),anisotropyMapUv:at&&_(x.anisotropyMap.channel),clearcoatMapUv:_t&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:It&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:it&&_(x.sheenRoughnessMap.channel),specularMapUv:Tt&&_(x.specularMap.channel),specularColorMapUv:Ot&&_(x.specularColorMap.channel),specularIntensityMapUv:he&&_(x.specularIntensityMap.channel),transmissionMapUv:H&&_(x.transmissionMap.channel),thicknessMapUv:wt&&_(x.thicknessMap.channel),alphaMapUv:dt&&_(x.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(nt||E),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!J.attributes.uv&&(fe||dt),fog:!!K,useFog:x.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Bt,skinning:z.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Pt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Mt,decodeVideoTexture:fe&&x.map.isVideoTexture===!0&&ue.getTransfer(x.map.colorSpace)===ye,decodeVideoTextureEmissive:ft&&x.emissiveMap.isVideoTexture===!0&&ue.getTransfer(x.emissiveMap.colorSpace)===ye,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===je,flipSided:x.side===Je,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ct&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&x.extensions.multiDraw===!0||Wt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return qt.vertexUv1s=u.has(1),qt.vertexUv2s=u.has(2),qt.vertexUv3s=u.has(3),u.clear(),qt}function p(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)S.push(L),S.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(y(S,x),M(S,x),S.push(n.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function y(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function M(x,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),x.push(a.mask)}function v(x){const S=g[x.type];let L;if(S){const U=_i[S];L=LM.clone(U.uniforms)}else L=x.uniforms;return L}function A(x,S){let L;for(let U=0,z=c.length;U<z;U++){const K=c[U];if(K.cacheKey===S){L=K,++L.usedTimes;break}}return L===void 0&&(L=new pT(n,S,x,s),c.push(L)),L}function T(x){if(--x.usedTimes===0){const S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),x.destroy()}}function w(x){l.remove(x)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:A,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:C}}function xT(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function yT(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function pp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function mp(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(f,h,d,g,_,m){let p=n[t];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[t]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),t++,p}function a(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):e.push(p)}function l(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):e.unshift(p)}function u(f,h){e.length>1&&e.sort(f||yT),i.length>1&&i.sort(h||pp),r.length>1&&r.sort(h||pp)}function c(){for(let f=t,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function MT(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new mp,n.set(i,[o])):r>=s.length?(o=new mp,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function ST(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Zt};break;case"SpotLight":e={position:new N,direction:new N,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new N,halfWidth:new N,halfHeight:new N};break}return n[t.id]=e,e}}}function ET(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let bT=0;function TT(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function wT(n){const t=new ST,e=ET(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new N);const r=new N,s=new we,o=new we;function a(u){let c=0,f=0,h=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,y=0,M=0,v=0,A=0,T=0,w=0;u.sort(TT);for(let x=0,S=u.length;x<S;x++){const L=u[x],U=L.color,z=L.intensity,K=L.distance,J=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)c+=U.r*z,f+=U.g*z,h+=U.b*z;else if(L.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(L.sh.coefficients[$],z);w++}else if(L.isDirectionalLight){const $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const j=L.shadow,G=e.get(L);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,i.directionalShadow[d]=G,i.directionalShadowMap[d]=J,i.directionalShadowMatrix[d]=L.shadow.matrix,y++}i.directional[d]=$,d++}else if(L.isSpotLight){const $=t.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(U).multiplyScalar(z),$.distance=K,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,i.spot[_]=$;const j=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,j.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[_]=j.matrix,L.castShadow){const G=e.get(L);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=J,v++}_++}else if(L.isRectAreaLight){const $=t.get(L);$.color.copy(U).multiplyScalar(z),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=$,m++}else if(L.isPointLight){const $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),$.distance=L.distance,$.decay=L.decay,L.castShadow){const j=L.shadow,G=e.get(L);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,G.shadowCameraNear=j.camera.near,G.shadowCameraFar=j.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=J,i.pointShadowMatrix[g]=L.shadow.matrix,M++}i.point[g]=$,g++}else if(L.isHemisphereLight){const $=t.get(L);$.skyColor.copy(L.color).multiplyScalar(z),$.groundColor.copy(L.groundColor).multiplyScalar(z),i.hemi[p]=$,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=bt.LTC_FLOAT_1,i.rectAreaLTC2=bt.LTC_FLOAT_2):(i.rectAreaLTC1=bt.LTC_HALF_1,i.rectAreaLTC2=bt.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=h;const C=i.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==y||C.numPointShadows!==M||C.numSpotShadows!==v||C.numSpotMaps!==A||C.numLightProbes!==w)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=v+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=w,C.directionalLength=d,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=y,C.numPointShadows=M,C.numSpotShadows=v,C.numSpotMaps=A,C.numLightProbes=w,i.version=bT++)}function l(u,c){let f=0,h=0,d=0,g=0,_=0;const m=c.matrixWorldInverse;for(let p=0,y=u.length;p<y;p++){const M=u[p];if(M.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),f++}else if(M.isSpotLight){const v=i.spot[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const v=i.point[h];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),h++}else if(M.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function _p(n){const t=new wT(n),e=[],i=[];function r(c){u.camera=c,e.length=0,i.length=0}function s(c){e.push(c)}function o(c){i.push(c)}function a(){t.setup(e)}function l(c){t.setupView(e,c)}const u={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function AT(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new _p(n),t.set(r,[a])):s>=o.length?(a=new _p(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const CT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RT=`uniform sampler2D shadow_pass;
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
}`;function PT(n,t,e){let i=new jf;const r=new zt,s=new zt,o=new Me,a=new tS({depthPacking:eM}),l=new eS,u={},c=e.maxTextureSize,f={[Yi]:Je,[Je]:Yi,[je]:je},h=new Mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:CT,fragmentShader:RT}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new _n;g.setAttribute("position",new Zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new xe(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=P_;let p=this.type;this.render=function(T,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const x=n.getRenderTarget(),S=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),U=n.state;U.setBlending(pr),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const z=p!==Di&&this.type===Di,K=p===Di&&this.type!==Di;for(let J=0,$=T.length;J<$;J++){const j=T[J],G=j.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const pt=G.getFrameExtents();if(r.multiply(pt),s.copy(G.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/pt.x),r.x=s.x*pt.x,G.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/pt.y),r.y=s.y*pt.y,G.mapSize.y=s.y)),G.map===null||z===!0||K===!0){const St=this.type!==Di?{minFilter:ai,magFilter:ai}:{};G.map!==null&&G.map.dispose(),G.map=new es(r.x,r.y,St),G.map.texture.name=j.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const vt=G.getViewportCount();for(let St=0;St<vt;St++){const Pt=G.getViewport(St);o.set(s.x*Pt.x,s.y*Pt.y,s.x*Pt.z,s.y*Pt.w),U.viewport(o),G.updateMatrices(j,St),i=G.getFrustum(),v(w,C,G.camera,j,this.type)}G.isPointLightShadow!==!0&&this.type===Di&&y(G,C),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(x,S,L)};function y(T,w){const C=t.update(_);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new es(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(w,null,C,h,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(w,null,C,d,_,null)}function M(T,w,C,x){let S=null;const L=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)S=L;else if(S=C.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const U=S.uuid,z=w.uuid;let K=u[U];K===void 0&&(K={},u[U]=K);let J=K[z];J===void 0&&(J=S.clone(),K[z]=J,w.addEventListener("dispose",A)),S=J}if(S.visible=w.visible,S.wireframe=w.wireframe,x===Di?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:f[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const U=n.properties.get(S);U.light=C}return S}function v(T,w,C,x,S){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Di)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const z=t.update(T),K=T.material;if(Array.isArray(K)){const J=z.groups;for(let $=0,j=J.length;$<j;$++){const G=J[$],pt=K[G.materialIndex];if(pt&&pt.visible){const vt=M(T,pt,x,S);T.onBeforeShadow(n,T,w,C,z,vt,G),n.renderBufferDirect(C,null,z,vt,T,G),T.onAfterShadow(n,T,w,C,z,vt,G)}}}else if(K.visible){const J=M(T,K,x,S);T.onBeforeShadow(n,T,w,C,z,J,null),n.renderBufferDirect(C,null,z,J,T,null),T.onAfterShadow(n,T,w,C,z,J,null)}}const U=T.children;for(let z=0,K=U.length;z<K;z++)v(U[z],w,C,x,S)}function A(T){T.target.removeEventListener("dispose",A);for(const C in u){const x=u[C],S=T.target.uuid;S in x&&(x[S].dispose(),delete x[S])}}}const DT={[mu]:_u,[gu]:yu,[vu]:Mu,[Xs]:xu,[_u]:mu,[yu]:gu,[Mu]:vu,[xu]:Xs};function LT(n,t){function e(){let H=!1;const wt=new Me;let lt=null;const dt=new Me(0,0,0,0);return{setMask:function(V){lt!==V&&!H&&(n.colorMask(V,V,V,V),lt=V)},setLocked:function(V){H=V},setClear:function(V,W,ct,Mt,qt){qt===!0&&(V*=Mt,W*=Mt,ct*=Mt),wt.set(V,W,ct,Mt),dt.equals(wt)===!1&&(n.clearColor(V,W,ct,Mt),dt.copy(wt))},reset:function(){H=!1,lt=null,dt.set(-1,0,0,0)}}}function i(){let H=!1,wt=!1,lt=null,dt=null,V=null;return{setReversed:function(W){if(wt!==W){const ct=t.get("EXT_clip_control");wt?ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.ZERO_TO_ONE_EXT):ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.NEGATIVE_ONE_TO_ONE_EXT);const Mt=V;V=null,this.setClear(Mt)}wt=W},getReversed:function(){return wt},setTest:function(W){W?yt(n.DEPTH_TEST):Bt(n.DEPTH_TEST)},setMask:function(W){lt!==W&&!H&&(n.depthMask(W),lt=W)},setFunc:function(W){if(wt&&(W=DT[W]),dt!==W){switch(W){case mu:n.depthFunc(n.NEVER);break;case _u:n.depthFunc(n.ALWAYS);break;case gu:n.depthFunc(n.LESS);break;case Xs:n.depthFunc(n.LEQUAL);break;case vu:n.depthFunc(n.EQUAL);break;case xu:n.depthFunc(n.GEQUAL);break;case yu:n.depthFunc(n.GREATER);break;case Mu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}dt=W}},setLocked:function(W){H=W},setClear:function(W){V!==W&&(wt&&(W=1-W),n.clearDepth(W),V=W)},reset:function(){H=!1,lt=null,dt=null,V=null,wt=!1}}}function r(){let H=!1,wt=null,lt=null,dt=null,V=null,W=null,ct=null,Mt=null,qt=null;return{setTest:function(Yt){H||(Yt?yt(n.STENCIL_TEST):Bt(n.STENCIL_TEST))},setMask:function(Yt){wt!==Yt&&!H&&(n.stencilMask(Yt),wt=Yt)},setFunc:function(Yt,ne,Vt){(lt!==Yt||dt!==ne||V!==Vt)&&(n.stencilFunc(Yt,ne,Vt),lt=Yt,dt=ne,V=Vt)},setOp:function(Yt,ne,Vt){(W!==Yt||ct!==ne||Mt!==Vt)&&(n.stencilOp(Yt,ne,Vt),W=Yt,ct=ne,Mt=Vt)},setLocked:function(Yt){H=Yt},setClear:function(Yt){qt!==Yt&&(n.clearStencil(Yt),qt=Yt)},reset:function(){H=!1,wt=null,lt=null,dt=null,V=null,W=null,ct=null,Mt=null,qt=null}}}const s=new e,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,y=null,M=null,v=null,A=null,T=null,w=new Zt(0,0,0),C=0,x=!1,S=null,L=null,U=null,z=null,K=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,j=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(G)[1]),$=j>=1):G.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),$=j>=2);let pt=null,vt={};const St=n.getParameter(n.SCISSOR_BOX),Pt=n.getParameter(n.VIEWPORT),Qt=new Me().fromArray(St),st=new Me().fromArray(Pt);function mt(H,wt,lt,dt){const V=new Uint8Array(4),W=n.createTexture();n.bindTexture(H,W),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ct=0;ct<lt;ct++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(wt,0,n.RGBA,1,1,dt,0,n.RGBA,n.UNSIGNED_BYTE,V):n.texImage2D(wt+ct,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,V);return W}const Ct={};Ct[n.TEXTURE_2D]=mt(n.TEXTURE_2D,n.TEXTURE_2D,1),Ct[n.TEXTURE_CUBE_MAP]=mt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ct[n.TEXTURE_2D_ARRAY]=mt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ct[n.TEXTURE_3D]=mt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),yt(n.DEPTH_TEST),o.setFunc(Xs),Z(!1),nt(cd),yt(n.CULL_FACE),R(pr);function yt(H){c[H]!==!0&&(n.enable(H),c[H]=!0)}function Bt(H){c[H]!==!1&&(n.disable(H),c[H]=!1)}function kt(H,wt){return f[H]!==wt?(n.bindFramebuffer(H,wt),f[H]=wt,H===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=wt),H===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=wt),!0):!1}function Wt(H,wt){let lt=d,dt=!1;if(H){lt=h.get(wt),lt===void 0&&(lt=[],h.set(wt,lt));const V=H.textures;if(lt.length!==V.length||lt[0]!==n.COLOR_ATTACHMENT0){for(let W=0,ct=V.length;W<ct;W++)lt[W]=n.COLOR_ATTACHMENT0+W;lt.length=V.length,dt=!0}}else lt[0]!==n.BACK&&(lt[0]=n.BACK,dt=!0);dt&&n.drawBuffers(lt)}function fe(H){return g!==H?(n.useProgram(H),g=H,!0):!1}const D={[Vr]:n.FUNC_ADD,[Ay]:n.FUNC_SUBTRACT,[Cy]:n.FUNC_REVERSE_SUBTRACT};D[Ry]=n.MIN,D[Py]=n.MAX;const B={[Dy]:n.ZERO,[Ly]:n.ONE,[Iy]:n.SRC_COLOR,[du]:n.SRC_ALPHA,[zy]:n.SRC_ALPHA_SATURATE,[Fy]:n.DST_COLOR,[Ny]:n.DST_ALPHA,[Uy]:n.ONE_MINUS_SRC_COLOR,[pu]:n.ONE_MINUS_SRC_ALPHA,[By]:n.ONE_MINUS_DST_COLOR,[Oy]:n.ONE_MINUS_DST_ALPHA,[ky]:n.CONSTANT_COLOR,[Vy]:n.ONE_MINUS_CONSTANT_COLOR,[Hy]:n.CONSTANT_ALPHA,[Gy]:n.ONE_MINUS_CONSTANT_ALPHA};function R(H,wt,lt,dt,V,W,ct,Mt,qt,Yt){if(H===pr){_===!0&&(Bt(n.BLEND),_=!1);return}if(_===!1&&(yt(n.BLEND),_=!0),H!==wy){if(H!==m||Yt!==x){if((p!==Vr||v!==Vr)&&(n.blendEquation(n.FUNC_ADD),p=Vr,v=Vr),Yt)switch(H){case Ns:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ud:n.blendFunc(n.ONE,n.ONE);break;case fd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Ns:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ud:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case fd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}y=null,M=null,A=null,T=null,w.set(0,0,0),C=0,m=H,x=Yt}return}V=V||wt,W=W||lt,ct=ct||dt,(wt!==p||V!==v)&&(n.blendEquationSeparate(D[wt],D[V]),p=wt,v=V),(lt!==y||dt!==M||W!==A||ct!==T)&&(n.blendFuncSeparate(B[lt],B[dt],B[W],B[ct]),y=lt,M=dt,A=W,T=ct),(Mt.equals(w)===!1||qt!==C)&&(n.blendColor(Mt.r,Mt.g,Mt.b,qt),w.copy(Mt),C=qt),m=H,x=!1}function ut(H,wt){H.side===je?Bt(n.CULL_FACE):yt(n.CULL_FACE);let lt=H.side===Je;wt&&(lt=!lt),Z(lt),H.blending===Ns&&H.transparent===!1?R(pr):R(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),s.setMask(H.colorWrite);const dt=H.stencilWrite;a.setTest(dt),dt&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ft(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?yt(n.SAMPLE_ALPHA_TO_COVERAGE):Bt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Z(H){S!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),S=H)}function nt(H){H!==Ey?(yt(n.CULL_FACE),H!==L&&(H===cd?n.cullFace(n.BACK):H===by?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Bt(n.CULL_FACE),L=H}function rt(H){H!==U&&($&&n.lineWidth(H),U=H)}function ft(H,wt,lt){H?(yt(n.POLYGON_OFFSET_FILL),(z!==wt||K!==lt)&&(n.polygonOffset(wt,lt),z=wt,K=lt)):Bt(n.POLYGON_OFFSET_FILL)}function tt(H){H?yt(n.SCISSOR_TEST):Bt(n.SCISSOR_TEST)}function b(H){H===void 0&&(H=n.TEXTURE0+J-1),pt!==H&&(n.activeTexture(H),pt=H)}function E(H,wt,lt){lt===void 0&&(pt===null?lt=n.TEXTURE0+J-1:lt=pt);let dt=vt[lt];dt===void 0&&(dt={type:void 0,texture:void 0},vt[lt]=dt),(dt.type!==H||dt.texture!==wt)&&(pt!==lt&&(n.activeTexture(lt),pt=lt),n.bindTexture(H,wt||Ct[H]),dt.type=H,dt.texture=wt)}function O(){const H=vt[pt];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Y(){try{n.compressedTexImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function I(){try{n.compressedTexImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function k(){try{n.texSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ot(){try{n.texSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function at(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function _t(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ut(){try{n.texStorage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ht(){try{n.texStorage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function xt(){try{n.texImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function It(){try{n.texImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Et(H){Qt.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),Qt.copy(H))}function it(H){st.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),st.copy(H))}function Tt(H,wt){let lt=u.get(wt);lt===void 0&&(lt=new WeakMap,u.set(wt,lt));let dt=lt.get(H);dt===void 0&&(dt=n.getUniformBlockIndex(wt,H.name),lt.set(H,dt))}function Ot(H,wt){const dt=u.get(wt).get(H);l.get(wt)!==dt&&(n.uniformBlockBinding(wt,dt,H.__bindingPointIndex),l.set(wt,dt))}function he(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},pt=null,vt={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,y=null,M=null,v=null,A=null,T=null,w=new Zt(0,0,0),C=0,x=!1,S=null,L=null,U=null,z=null,K=null,Qt.set(0,0,n.canvas.width,n.canvas.height),st.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:yt,disable:Bt,bindFramebuffer:kt,drawBuffers:Wt,useProgram:fe,setBlending:R,setMaterial:ut,setFlipSided:Z,setCullFace:nt,setLineWidth:rt,setPolygonOffset:ft,setScissorTest:tt,activeTexture:b,bindTexture:E,unbindTexture:O,compressedTexImage2D:Y,compressedTexImage3D:I,texImage2D:xt,texImage3D:It,updateUBOMapping:Tt,uniformBlockBinding:Ot,texStorage2D:Ut,texStorage3D:ht,texSubImage2D:k,texSubImage3D:ot,compressedTexSubImage2D:at,compressedTexSubImage3D:_t,scissor:Et,viewport:it,reset:he}}function IT(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new zt,c=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,E){return d?new OffscreenCanvas(b,E):gl("canvas")}function _(b,E,O){let Y=1;const I=tt(b);if((I.width>O||I.height>O)&&(Y=O/Math.max(I.width,I.height)),Y<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const k=Math.floor(Y*I.width),ot=Math.floor(Y*I.height);f===void 0&&(f=g(k,ot));const at=E?g(k,ot):f;return at.width=k,at.height=ot,at.getContext("2d").drawImage(b,0,0,k,ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+k+"x"+ot+")."),at}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){n.generateMipmap(b)}function y(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(b,E,O,Y,I=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let k=E;if(E===n.RED&&(O===n.FLOAT&&(k=n.R32F),O===n.HALF_FLOAT&&(k=n.R16F),O===n.UNSIGNED_BYTE&&(k=n.R8)),E===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(k=n.R8UI),O===n.UNSIGNED_SHORT&&(k=n.R16UI),O===n.UNSIGNED_INT&&(k=n.R32UI),O===n.BYTE&&(k=n.R8I),O===n.SHORT&&(k=n.R16I),O===n.INT&&(k=n.R32I)),E===n.RG&&(O===n.FLOAT&&(k=n.RG32F),O===n.HALF_FLOAT&&(k=n.RG16F),O===n.UNSIGNED_BYTE&&(k=n.RG8)),E===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(k=n.RG8UI),O===n.UNSIGNED_SHORT&&(k=n.RG16UI),O===n.UNSIGNED_INT&&(k=n.RG32UI),O===n.BYTE&&(k=n.RG8I),O===n.SHORT&&(k=n.RG16I),O===n.INT&&(k=n.RG32I)),E===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(k=n.RGB8UI),O===n.UNSIGNED_SHORT&&(k=n.RGB16UI),O===n.UNSIGNED_INT&&(k=n.RGB32UI),O===n.BYTE&&(k=n.RGB8I),O===n.SHORT&&(k=n.RGB16I),O===n.INT&&(k=n.RGB32I)),E===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(k=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(k=n.RGBA16UI),O===n.UNSIGNED_INT&&(k=n.RGBA32UI),O===n.BYTE&&(k=n.RGBA8I),O===n.SHORT&&(k=n.RGBA16I),O===n.INT&&(k=n.RGBA32I)),E===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(k=n.RGB9_E5),E===n.RGBA){const ot=I?ml:ue.getTransfer(Y);O===n.FLOAT&&(k=n.RGBA32F),O===n.HALF_FLOAT&&(k=n.RGBA16F),O===n.UNSIGNED_BYTE&&(k=ot===ye?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(k=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(k=n.RGB5_A1)}return(k===n.R16F||k===n.R32F||k===n.RG16F||k===n.RG32F||k===n.RGBA16F||k===n.RGBA32F)&&t.get("EXT_color_buffer_float"),k}function v(b,E){let O;return b?E===null||E===ts||E===$s?O=n.DEPTH24_STENCIL8:E===zi?O=n.DEPTH32F_STENCIL8:E===Zo&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ts||E===$s?O=n.DEPTH_COMPONENT24:E===zi?O=n.DEPTH_COMPONENT32F:E===Zo&&(O=n.DEPTH_COMPONENT16),O}function A(b,E){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==ai&&b.minFilter!==xi?Math.log2(Math.max(E.width,E.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?E.mipmaps.length:1}function T(b){const E=b.target;E.removeEventListener("dispose",T),C(E),E.isVideoTexture&&c.delete(E)}function w(b){const E=b.target;E.removeEventListener("dispose",w),S(E)}function C(b){const E=i.get(b);if(E.__webglInit===void 0)return;const O=b.source,Y=h.get(O);if(Y){const I=Y[E.__cacheKey];I.usedTimes--,I.usedTimes===0&&x(b),Object.keys(Y).length===0&&h.delete(O)}i.remove(b)}function x(b){const E=i.get(b);n.deleteTexture(E.__webglTexture);const O=b.source,Y=h.get(O);delete Y[E.__cacheKey],o.memory.textures--}function S(b){const E=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(E.__webglFramebuffer[Y]))for(let I=0;I<E.__webglFramebuffer[Y].length;I++)n.deleteFramebuffer(E.__webglFramebuffer[Y][I]);else n.deleteFramebuffer(E.__webglFramebuffer[Y]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[Y])}else{if(Array.isArray(E.__webglFramebuffer))for(let Y=0;Y<E.__webglFramebuffer.length;Y++)n.deleteFramebuffer(E.__webglFramebuffer[Y]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Y=0;Y<E.__webglColorRenderbuffer.length;Y++)E.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[Y]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const O=b.textures;for(let Y=0,I=O.length;Y<I;Y++){const k=i.get(O[Y]);k.__webglTexture&&(n.deleteTexture(k.__webglTexture),o.memory.textures--),i.remove(O[Y])}i.remove(b)}let L=0;function U(){L=0}function z(){const b=L;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),L+=1,b}function K(b){const E=[];return E.push(b.wrapS),E.push(b.wrapT),E.push(b.wrapR||0),E.push(b.magFilter),E.push(b.minFilter),E.push(b.anisotropy),E.push(b.internalFormat),E.push(b.format),E.push(b.type),E.push(b.generateMipmaps),E.push(b.premultiplyAlpha),E.push(b.flipY),E.push(b.unpackAlignment),E.push(b.colorSpace),E.join()}function J(b,E){const O=i.get(b);if(b.isVideoTexture&&rt(b),b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){const Y=b.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(O,b,E);return}}e.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+E)}function $(b,E){const O=i.get(b);if(b.version>0&&O.__version!==b.version){st(O,b,E);return}e.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+E)}function j(b,E){const O=i.get(b);if(b.version>0&&O.__version!==b.version){st(O,b,E);return}e.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+E)}function G(b,E){const O=i.get(b);if(b.version>0&&O.__version!==b.version){mt(O,b,E);return}e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+E)}const pt={[bu]:n.REPEAT,[Xr]:n.CLAMP_TO_EDGE,[Tu]:n.MIRRORED_REPEAT},vt={[ai]:n.NEAREST,[Qy]:n.NEAREST_MIPMAP_NEAREST,[pa]:n.NEAREST_MIPMAP_LINEAR,[xi]:n.LINEAR,[sc]:n.LINEAR_MIPMAP_NEAREST,[qr]:n.LINEAR_MIPMAP_LINEAR},St={[iM]:n.NEVER,[cM]:n.ALWAYS,[rM]:n.LESS,[W_]:n.LEQUAL,[sM]:n.EQUAL,[lM]:n.GEQUAL,[oM]:n.GREATER,[aM]:n.NOTEQUAL};function Pt(b,E){if(E.type===zi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===xi||E.magFilter===sc||E.magFilter===pa||E.magFilter===qr||E.minFilter===xi||E.minFilter===sc||E.minFilter===pa||E.minFilter===qr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,pt[E.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,pt[E.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,pt[E.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,vt[E.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,vt[E.minFilter]),E.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,St[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ai||E.minFilter!==pa&&E.minFilter!==qr||E.type===zi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");n.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Qt(b,E){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,E.addEventListener("dispose",T));const Y=E.source;let I=h.get(Y);I===void 0&&(I={},h.set(Y,I));const k=K(E);if(k!==b.__cacheKey){I[k]===void 0&&(I[k]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),I[k].usedTimes++;const ot=I[b.__cacheKey];ot!==void 0&&(I[b.__cacheKey].usedTimes--,ot.usedTimes===0&&x(E)),b.__cacheKey=k,b.__webglTexture=I[k].texture}return O}function st(b,E,O){let Y=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Y=n.TEXTURE_3D);const I=Qt(b,E),k=E.source;e.bindTexture(Y,b.__webglTexture,n.TEXTURE0+O);const ot=i.get(k);if(k.version!==ot.__version||I===!0){e.activeTexture(n.TEXTURE0+O);const at=ue.getPrimaries(ue.workingColorSpace),_t=E.colorSpace===ar?null:ue.getPrimaries(E.colorSpace),Ut=E.colorSpace===ar||at===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);let ht=_(E.image,!1,r.maxTextureSize);ht=ft(E,ht);const xt=s.convert(E.format,E.colorSpace),It=s.convert(E.type);let Et=M(E.internalFormat,xt,It,E.colorSpace,E.isVideoTexture);Pt(Y,E);let it;const Tt=E.mipmaps,Ot=E.isVideoTexture!==!0,he=ot.__version===void 0||I===!0,H=k.dataReady,wt=A(E,ht);if(E.isDepthTexture)Et=v(E.format===Ks,E.type),he&&(Ot?e.texStorage2D(n.TEXTURE_2D,1,Et,ht.width,ht.height):e.texImage2D(n.TEXTURE_2D,0,Et,ht.width,ht.height,0,xt,It,null));else if(E.isDataTexture)if(Tt.length>0){Ot&&he&&e.texStorage2D(n.TEXTURE_2D,wt,Et,Tt[0].width,Tt[0].height);for(let lt=0,dt=Tt.length;lt<dt;lt++)it=Tt[lt],Ot?H&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,it.width,it.height,xt,It,it.data):e.texImage2D(n.TEXTURE_2D,lt,Et,it.width,it.height,0,xt,It,it.data);E.generateMipmaps=!1}else Ot?(he&&e.texStorage2D(n.TEXTURE_2D,wt,Et,ht.width,ht.height),H&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ht.width,ht.height,xt,It,ht.data)):e.texImage2D(n.TEXTURE_2D,0,Et,ht.width,ht.height,0,xt,It,ht.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ot&&he&&e.texStorage3D(n.TEXTURE_2D_ARRAY,wt,Et,Tt[0].width,Tt[0].height,ht.depth);for(let lt=0,dt=Tt.length;lt<dt;lt++)if(it=Tt[lt],E.format!==si)if(xt!==null)if(Ot){if(H)if(E.layerUpdates.size>0){const V=qd(it.width,it.height,E.format,E.type);for(const W of E.layerUpdates){const ct=it.data.subarray(W*V/it.data.BYTES_PER_ELEMENT,(W+1)*V/it.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,W,it.width,it.height,1,xt,ct)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,0,it.width,it.height,ht.depth,xt,it.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,lt,Et,it.width,it.height,ht.depth,0,it.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?H&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,0,it.width,it.height,ht.depth,xt,It,it.data):e.texImage3D(n.TEXTURE_2D_ARRAY,lt,Et,it.width,it.height,ht.depth,0,xt,It,it.data)}else{Ot&&he&&e.texStorage2D(n.TEXTURE_2D,wt,Et,Tt[0].width,Tt[0].height);for(let lt=0,dt=Tt.length;lt<dt;lt++)it=Tt[lt],E.format!==si?xt!==null?Ot?H&&e.compressedTexSubImage2D(n.TEXTURE_2D,lt,0,0,it.width,it.height,xt,it.data):e.compressedTexImage2D(n.TEXTURE_2D,lt,Et,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?H&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,it.width,it.height,xt,It,it.data):e.texImage2D(n.TEXTURE_2D,lt,Et,it.width,it.height,0,xt,It,it.data)}else if(E.isDataArrayTexture)if(Ot){if(he&&e.texStorage3D(n.TEXTURE_2D_ARRAY,wt,Et,ht.width,ht.height,ht.depth),H)if(E.layerUpdates.size>0){const lt=qd(ht.width,ht.height,E.format,E.type);for(const dt of E.layerUpdates){const V=ht.data.subarray(dt*lt/ht.data.BYTES_PER_ELEMENT,(dt+1)*lt/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,dt,ht.width,ht.height,1,xt,It,V)}E.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,xt,It,ht.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Et,ht.width,ht.height,ht.depth,0,xt,It,ht.data);else if(E.isData3DTexture)Ot?(he&&e.texStorage3D(n.TEXTURE_3D,wt,Et,ht.width,ht.height,ht.depth),H&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,xt,It,ht.data)):e.texImage3D(n.TEXTURE_3D,0,Et,ht.width,ht.height,ht.depth,0,xt,It,ht.data);else if(E.isFramebufferTexture){if(he)if(Ot)e.texStorage2D(n.TEXTURE_2D,wt,Et,ht.width,ht.height);else{let lt=ht.width,dt=ht.height;for(let V=0;V<wt;V++)e.texImage2D(n.TEXTURE_2D,V,Et,lt,dt,0,xt,It,null),lt>>=1,dt>>=1}}else if(Tt.length>0){if(Ot&&he){const lt=tt(Tt[0]);e.texStorage2D(n.TEXTURE_2D,wt,Et,lt.width,lt.height)}for(let lt=0,dt=Tt.length;lt<dt;lt++)it=Tt[lt],Ot?H&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,xt,It,it):e.texImage2D(n.TEXTURE_2D,lt,Et,xt,It,it);E.generateMipmaps=!1}else if(Ot){if(he){const lt=tt(ht);e.texStorage2D(n.TEXTURE_2D,wt,Et,lt.width,lt.height)}H&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,xt,It,ht)}else e.texImage2D(n.TEXTURE_2D,0,Et,xt,It,ht);m(E)&&p(Y),ot.__version=k.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function mt(b,E,O){if(E.image.length!==6)return;const Y=Qt(b,E),I=E.source;e.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+O);const k=i.get(I);if(I.version!==k.__version||Y===!0){e.activeTexture(n.TEXTURE0+O);const ot=ue.getPrimaries(ue.workingColorSpace),at=E.colorSpace===ar?null:ue.getPrimaries(E.colorSpace),_t=E.colorSpace===ar||ot===at?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Ut=E.isCompressedTexture||E.image[0].isCompressedTexture,ht=E.image[0]&&E.image[0].isDataTexture,xt=[];for(let dt=0;dt<6;dt++)!Ut&&!ht?xt[dt]=_(E.image[dt],!0,r.maxCubemapSize):xt[dt]=ht?E.image[dt].image:E.image[dt],xt[dt]=ft(E,xt[dt]);const It=xt[0],Et=s.convert(E.format,E.colorSpace),it=s.convert(E.type),Tt=M(E.internalFormat,Et,it,E.colorSpace),Ot=E.isVideoTexture!==!0,he=k.__version===void 0||Y===!0,H=I.dataReady;let wt=A(E,It);Pt(n.TEXTURE_CUBE_MAP,E);let lt;if(Ut){Ot&&he&&e.texStorage2D(n.TEXTURE_CUBE_MAP,wt,Tt,It.width,It.height);for(let dt=0;dt<6;dt++){lt=xt[dt].mipmaps;for(let V=0;V<lt.length;V++){const W=lt[V];E.format!==si?Et!==null?Ot?H&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,V,0,0,W.width,W.height,Et,W.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,V,Tt,W.width,W.height,0,W.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?H&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,V,0,0,W.width,W.height,Et,it,W.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,V,Tt,W.width,W.height,0,Et,it,W.data)}}}else{if(lt=E.mipmaps,Ot&&he){lt.length>0&&wt++;const dt=tt(xt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,wt,Tt,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(ht){Ot?H&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,xt[dt].width,xt[dt].height,Et,it,xt[dt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,Tt,xt[dt].width,xt[dt].height,0,Et,it,xt[dt].data);for(let V=0;V<lt.length;V++){const ct=lt[V].image[dt].image;Ot?H&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,V+1,0,0,ct.width,ct.height,Et,it,ct.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,V+1,Tt,ct.width,ct.height,0,Et,it,ct.data)}}else{Ot?H&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Et,it,xt[dt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,Tt,Et,it,xt[dt]);for(let V=0;V<lt.length;V++){const W=lt[V];Ot?H&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,V+1,0,0,Et,it,W.image[dt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,V+1,Tt,Et,it,W.image[dt])}}}m(E)&&p(n.TEXTURE_CUBE_MAP),k.__version=I.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function Ct(b,E,O,Y,I,k){const ot=s.convert(O.format,O.colorSpace),at=s.convert(O.type),_t=M(O.internalFormat,ot,at,O.colorSpace),Ut=i.get(E),ht=i.get(O);if(ht.__renderTarget=E,!Ut.__hasExternalTextures){const xt=Math.max(1,E.width>>k),It=Math.max(1,E.height>>k);I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?e.texImage3D(I,k,_t,xt,It,E.depth,0,ot,at,null):e.texImage2D(I,k,_t,xt,It,0,ot,at,null)}e.bindFramebuffer(n.FRAMEBUFFER,b),nt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,I,ht.__webglTexture,0,Z(E)):(I===n.TEXTURE_2D||I>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&I<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,I,ht.__webglTexture,k),e.bindFramebuffer(n.FRAMEBUFFER,null)}function yt(b,E,O){if(n.bindRenderbuffer(n.RENDERBUFFER,b),E.depthBuffer){const Y=E.depthTexture,I=Y&&Y.isDepthTexture?Y.type:null,k=v(E.stencilBuffer,I),ot=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=Z(E);nt(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,at,k,E.width,E.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,at,k,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,k,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ot,n.RENDERBUFFER,b)}else{const Y=E.textures;for(let I=0;I<Y.length;I++){const k=Y[I],ot=s.convert(k.format,k.colorSpace),at=s.convert(k.type),_t=M(k.internalFormat,ot,at,k.colorSpace),Ut=Z(E);O&&nt(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ut,_t,E.width,E.height):nt(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ut,_t,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,_t,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Bt(b,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,b),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(E.depthTexture);Y.__renderTarget=E,(!Y.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),J(E.depthTexture,0);const I=Y.__webglTexture,k=Z(E);if(E.depthTexture.format===Os)nt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,I,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,I,0);else if(E.depthTexture.format===Ks)nt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,I,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,I,0);else throw new Error("Unknown depthTexture format")}function kt(b){const E=i.get(b),O=b.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==b.depthTexture){const Y=b.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Y){const I=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Y.removeEventListener("dispose",I)};Y.addEventListener("dispose",I),E.__depthDisposeCallback=I}E.__boundDepthTexture=Y}if(b.depthTexture&&!E.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Bt(E.__webglFramebuffer,b)}else if(O){E.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[Y]),E.__webglDepthbuffer[Y]===void 0)E.__webglDepthbuffer[Y]=n.createRenderbuffer(),yt(E.__webglDepthbuffer[Y],b,!1);else{const I=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=E.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,I,n.RENDERBUFFER,k)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),yt(E.__webglDepthbuffer,b,!1);else{const Y=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,I=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,I),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,I)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Wt(b,E,O){const Y=i.get(b);E!==void 0&&Ct(Y.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&kt(b)}function fe(b){const E=b.texture,O=i.get(b),Y=i.get(E);b.addEventListener("dispose",w);const I=b.textures,k=b.isWebGLCubeRenderTarget===!0,ot=I.length>1;if(ot||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=E.version,o.memory.textures++),k){O.__webglFramebuffer=[];for(let at=0;at<6;at++)if(E.mipmaps&&E.mipmaps.length>0){O.__webglFramebuffer[at]=[];for(let _t=0;_t<E.mipmaps.length;_t++)O.__webglFramebuffer[at][_t]=n.createFramebuffer()}else O.__webglFramebuffer[at]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){O.__webglFramebuffer=[];for(let at=0;at<E.mipmaps.length;at++)O.__webglFramebuffer[at]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(ot)for(let at=0,_t=I.length;at<_t;at++){const Ut=i.get(I[at]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&nt(b)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let at=0;at<I.length;at++){const _t=I[at];O.__webglColorRenderbuffer[at]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[at]);const Ut=s.convert(_t.format,_t.colorSpace),ht=s.convert(_t.type),xt=M(_t.internalFormat,Ut,ht,_t.colorSpace,b.isXRRenderTarget===!0),It=Z(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,It,xt,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,O.__webglColorRenderbuffer[at])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),yt(O.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(k){e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Pt(n.TEXTURE_CUBE_MAP,E);for(let at=0;at<6;at++)if(E.mipmaps&&E.mipmaps.length>0)for(let _t=0;_t<E.mipmaps.length;_t++)Ct(O.__webglFramebuffer[at][_t],b,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,_t);else Ct(O.__webglFramebuffer[at],b,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(E)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ot){for(let at=0,_t=I.length;at<_t;at++){const Ut=I[at],ht=i.get(Ut);e.bindTexture(n.TEXTURE_2D,ht.__webglTexture),Pt(n.TEXTURE_2D,Ut),Ct(O.__webglFramebuffer,b,Ut,n.COLOR_ATTACHMENT0+at,n.TEXTURE_2D,0),m(Ut)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let at=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(at=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(at,Y.__webglTexture),Pt(at,E),E.mipmaps&&E.mipmaps.length>0)for(let _t=0;_t<E.mipmaps.length;_t++)Ct(O.__webglFramebuffer[_t],b,E,n.COLOR_ATTACHMENT0,at,_t);else Ct(O.__webglFramebuffer,b,E,n.COLOR_ATTACHMENT0,at,0);m(E)&&p(at),e.unbindTexture()}b.depthBuffer&&kt(b)}function D(b){const E=b.textures;for(let O=0,Y=E.length;O<Y;O++){const I=E[O];if(m(I)){const k=y(b),ot=i.get(I).__webglTexture;e.bindTexture(k,ot),p(k),e.unbindTexture()}}}const B=[],R=[];function ut(b){if(b.samples>0){if(nt(b)===!1){const E=b.textures,O=b.width,Y=b.height;let I=n.COLOR_BUFFER_BIT;const k=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=i.get(b),at=E.length>1;if(at)for(let _t=0;_t<E.length;_t++)e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let _t=0;_t<E.length;_t++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(I|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(I|=n.STENCIL_BUFFER_BIT)),at){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ot.__webglColorRenderbuffer[_t]);const Ut=i.get(E[_t]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ut,0)}n.blitFramebuffer(0,0,O,Y,0,0,O,Y,I,n.NEAREST),l===!0&&(B.length=0,R.length=0,B.push(n.COLOR_ATTACHMENT0+_t),b.depthBuffer&&b.resolveDepthBuffer===!1&&(B.push(k),R.push(k),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,R)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,B))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),at)for(let _t=0;_t<E.length;_t++){e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,ot.__webglColorRenderbuffer[_t]);const Ut=i.get(E[_t]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,Ut,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const E=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function Z(b){return Math.min(r.maxSamples,b.samples)}function nt(b){const E=i.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function rt(b){const E=o.render.frame;c.get(b)!==E&&(c.set(b,E),b.update())}function ft(b,E){const O=b.colorSpace,Y=b.format,I=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==js&&O!==ar&&(ue.getTransfer(O)===ye?(Y!==si||I!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),E}function tt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(u.width=b.naturalWidth||b.width,u.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(u.width=b.displayWidth,u.height=b.displayHeight):(u.width=b.width,u.height=b.height),u}this.allocateTextureUnit=z,this.resetTextureUnits=U,this.setTexture2D=J,this.setTexture2DArray=$,this.setTexture3D=j,this.setTextureCube=G,this.rebindTextures=Wt,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=nt}function UT(n,t){function e(i,r=ar){let s;const o=ue.getTransfer(r);if(i===$i)return n.UNSIGNED_BYTE;if(i===Hf)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Gf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===N_)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===I_)return n.BYTE;if(i===U_)return n.SHORT;if(i===Zo)return n.UNSIGNED_SHORT;if(i===Vf)return n.INT;if(i===ts)return n.UNSIGNED_INT;if(i===zi)return n.FLOAT;if(i===na)return n.HALF_FLOAT;if(i===O_)return n.ALPHA;if(i===F_)return n.RGB;if(i===si)return n.RGBA;if(i===B_)return n.LUMINANCE;if(i===z_)return n.LUMINANCE_ALPHA;if(i===Os)return n.DEPTH_COMPONENT;if(i===Ks)return n.DEPTH_STENCIL;if(i===k_)return n.RED;if(i===Wf)return n.RED_INTEGER;if(i===V_)return n.RG;if(i===Xf)return n.RG_INTEGER;if(i===qf)return n.RGBA_INTEGER;if(i===Ya||i===$a||i===Ka||i===ja)if(o===ye)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ya)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===$a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ya)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===$a)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ka)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ja)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===wu||i===Au||i===Cu||i===Ru)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===wu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Au)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Cu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ru)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Pu||i===Du||i===Lu)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Pu||i===Du)return o===ye?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Lu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Iu||i===Uu||i===Nu||i===Ou||i===Fu||i===Bu||i===zu||i===ku||i===Vu||i===Hu||i===Gu||i===Wu||i===Xu||i===qu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Iu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Uu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Nu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ou)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ku)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Gu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===qu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Za||i===Yu||i===$u)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Za)return o===ye?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Yu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$u)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===H_||i===Ku||i===ju||i===Zu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Za)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ku)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ju)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$s?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const NT={type:"move"};class kc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),p=this._getHandJoint(u,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),d=.02,g=.005;u.inputState.pinching&&h>d+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&h<=d-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(NT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Yr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const OT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FT=`
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

}`;class BT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new mn,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Mr({vertexShader:OT,fragmentShader:FT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xe(new ni(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zT extends Qs{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,d=null,g=null;const _=new BT,m=e.getContextAttributes();let p=null,y=null;const M=[],v=[],A=new zt;let T=null;const w=new Sn;w.viewport=new Me;const C=new Sn;C.viewport=new Me;const x=[w,C],S=new sS;let L=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let mt=M[st];return mt===void 0&&(mt=new kc,M[st]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(st){let mt=M[st];return mt===void 0&&(mt=new kc,M[st]=mt),mt.getGripSpace()},this.getHand=function(st){let mt=M[st];return mt===void 0&&(mt=new kc,M[st]=mt),mt.getHandSpace()};function z(st){const mt=v.indexOf(st.inputSource);if(mt===-1)return;const Ct=M[mt];Ct!==void 0&&(Ct.update(st.inputSource,st.frame,u||o),Ct.dispatchEvent({type:st.type,data:st.inputSource}))}function K(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",J);for(let st=0;st<M.length;st++){const mt=v[st];mt!==null&&(v[st]=null,M[st].disconnect(mt))}L=null,U=null,_.reset(),t.setRenderTarget(p),d=null,h=null,f=null,r=null,y=null,Qt.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){s=st,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){a=st,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(st){u=st},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(st){if(r=st,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",K),r.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(A),r.renderState.layers===void 0){const mt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,mt),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new es(d.framebufferWidth,d.framebufferHeight,{format:si,type:$i,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let mt=null,Ct=null,yt=null;m.depth&&(yt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=m.stencil?Ks:Os,Ct=m.stencil?$s:ts);const Bt={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:s};f=new XRWebGLBinding(r,e),h=f.createProjectionLayer(Bt),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new es(h.textureWidth,h.textureHeight,{format:si,type:$i,depthTexture:new eg(h.textureWidth,h.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Qt.setContext(r),Qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function J(st){for(let mt=0;mt<st.removed.length;mt++){const Ct=st.removed[mt],yt=v.indexOf(Ct);yt>=0&&(v[yt]=null,M[yt].disconnect(Ct))}for(let mt=0;mt<st.added.length;mt++){const Ct=st.added[mt];let yt=v.indexOf(Ct);if(yt===-1){for(let kt=0;kt<M.length;kt++)if(kt>=v.length){v.push(Ct),yt=kt;break}else if(v[kt]===null){v[kt]=Ct,yt=kt;break}if(yt===-1)break}const Bt=M[yt];Bt&&Bt.connect(Ct)}}const $=new N,j=new N;function G(st,mt,Ct){$.setFromMatrixPosition(mt.matrixWorld),j.setFromMatrixPosition(Ct.matrixWorld);const yt=$.distanceTo(j),Bt=mt.projectionMatrix.elements,kt=Ct.projectionMatrix.elements,Wt=Bt[14]/(Bt[10]-1),fe=Bt[14]/(Bt[10]+1),D=(Bt[9]+1)/Bt[5],B=(Bt[9]-1)/Bt[5],R=(Bt[8]-1)/Bt[0],ut=(kt[8]+1)/kt[0],Z=Wt*R,nt=Wt*ut,rt=yt/(-R+ut),ft=rt*-R;if(mt.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(ft),st.translateZ(rt),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),Bt[10]===-1)st.projectionMatrix.copy(mt.projectionMatrix),st.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const tt=Wt+rt,b=fe+rt,E=Z-ft,O=nt+(yt-ft),Y=D*fe/b*tt,I=B*fe/b*tt;st.projectionMatrix.makePerspective(E,O,Y,I,tt,b),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function pt(st,mt){mt===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(mt.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(r===null)return;let mt=st.near,Ct=st.far;_.texture!==null&&(_.depthNear>0&&(mt=_.depthNear),_.depthFar>0&&(Ct=_.depthFar)),S.near=C.near=w.near=mt,S.far=C.far=w.far=Ct,(L!==S.near||U!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,U=S.far),w.layers.mask=st.layers.mask|2,C.layers.mask=st.layers.mask|4,S.layers.mask=w.layers.mask|C.layers.mask;const yt=st.parent,Bt=S.cameras;pt(S,yt);for(let kt=0;kt<Bt.length;kt++)pt(Bt[kt],yt);Bt.length===2?G(S,w,C):S.projectionMatrix.copy(w.projectionMatrix),vt(st,S,yt)};function vt(st,mt,Ct){Ct===null?st.matrix.copy(mt.matrixWorld):(st.matrix.copy(Ct.matrixWorld),st.matrix.invert(),st.matrix.multiply(mt.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(mt.projectionMatrix),st.projectionMatrixInverse.copy(mt.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=Ju*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(st){l=st,h!==null&&(h.fixedFoveation=st),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=st)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let St=null;function Pt(st,mt){if(c=mt.getViewerPose(u||o),g=mt,c!==null){const Ct=c.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let yt=!1;Ct.length!==S.cameras.length&&(S.cameras.length=0,yt=!0);for(let kt=0;kt<Ct.length;kt++){const Wt=Ct[kt];let fe=null;if(d!==null)fe=d.getViewport(Wt);else{const B=f.getViewSubImage(h,Wt);fe=B.viewport,kt===0&&(t.setRenderTargetTextures(y,B.colorTexture,h.ignoreDepthValues?void 0:B.depthStencilTexture),t.setRenderTarget(y))}let D=x[kt];D===void 0&&(D=new Sn,D.layers.enable(kt),D.viewport=new Me,x[kt]=D),D.matrix.fromArray(Wt.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(Wt.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(fe.x,fe.y,fe.width,fe.height),kt===0&&(S.matrix.copy(D.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),yt===!0&&S.cameras.push(D)}const Bt=r.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")){const kt=f.getDepthInformation(Ct[0]);kt&&kt.isValid&&kt.texture&&_.init(t,kt,r.renderState)}}for(let Ct=0;Ct<M.length;Ct++){const yt=v[Ct],Bt=M[Ct];yt!==null&&Bt!==void 0&&Bt.update(yt,mt,u||o)}St&&St(st,mt),mt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:mt}),g=null}const Qt=new lg;Qt.setAnimationLoop(Pt),this.setAnimationLoop=function(st){St=st},this.dispose=function(){}}}const Nr=new Ei,kT=new we;function VT(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Z_(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,y,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),c(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,M):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Je&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Je&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),M=y.envMap,v=y.envMapRotation;M&&(m.envMap.value=M,Nr.copy(v),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),m.envMapRotation.value.setFromMatrix4(kT.makeRotationFromEuler(Nr)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Je&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function HT(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){const v=M.program;i.uniformBlockBinding(y,v)}function u(y,M){let v=r[y.id];v===void 0&&(g(y),v=c(y),r[y.id]=v,y.addEventListener("dispose",m));const A=M.program;i.updateUBOMapping(y,A);const T=t.render.frame;s[y.id]!==T&&(h(y),s[y.id]=T)}function c(y){const M=f();y.__bindingPointIndex=M;const v=n.createBuffer(),A=y.__size,T=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,A,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,v),v}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const M=r[y.id],v=y.uniforms,A=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let T=0,w=v.length;T<w;T++){const C=Array.isArray(v[T])?v[T]:[v[T]];for(let x=0,S=C.length;x<S;x++){const L=C[x];if(d(L,T,x,A)===!0){const U=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let K=0;for(let J=0;J<z.length;J++){const $=z[J],j=_($);typeof $=="number"||typeof $=="boolean"?(L.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,U+K,L.__data)):$.isMatrix3?(L.__data[0]=$.elements[0],L.__data[1]=$.elements[1],L.__data[2]=$.elements[2],L.__data[3]=0,L.__data[4]=$.elements[3],L.__data[5]=$.elements[4],L.__data[6]=$.elements[5],L.__data[7]=0,L.__data[8]=$.elements[6],L.__data[9]=$.elements[7],L.__data[10]=$.elements[8],L.__data[11]=0):($.toArray(L.__data,K),K+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(y,M,v,A){const T=y.value,w=M+"_"+v;if(A[w]===void 0)return typeof T=="number"||typeof T=="boolean"?A[w]=T:A[w]=T.clone(),!0;{const C=A[w];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return A[w]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function g(y){const M=y.uniforms;let v=0;const A=16;for(let w=0,C=M.length;w<C;w++){const x=Array.isArray(M[w])?M[w]:[M[w]];for(let S=0,L=x.length;S<L;S++){const U=x[S],z=Array.isArray(U.value)?U.value:[U.value];for(let K=0,J=z.length;K<J;K++){const $=z[K],j=_($),G=v%A,pt=G%j.boundary,vt=G+pt;v+=pt,vt!==0&&A-vt<j.storage&&(v+=A-vt),U.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=j.storage}}}const T=v%A;return T>0&&(v+=A-T),y.__size=v,y.__cache={},this}function _(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function m(y){const M=y.target;M.removeEventListener("dispose",m);const v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function p(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:u,dispose:p}}class dg{constructor(t={}){const{canvas:e=fM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qn,this.toneMapping=mr,this.toneMappingExposure=1;const v=this;let A=!1,T=0,w=0,C=null,x=-1,S=null;const L=new Me,U=new Me;let z=null;const K=new Zt(0);let J=0,$=e.width,j=e.height,G=1,pt=null,vt=null;const St=new Me(0,0,$,j),Pt=new Me(0,0,$,j);let Qt=!1;const st=new jf;let mt=!1,Ct=!1;const yt=new we,Bt=new we,kt=new N,Wt=new Me,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let D=!1;function B(){return C===null?G:1}let R=i;function ut(P,X){return e.getContext(P,X)}try{const P={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${kf}`),e.addEventListener("webglcontextlost",dt,!1),e.addEventListener("webglcontextrestored",V,!1),e.addEventListener("webglcontextcreationerror",W,!1),R===null){const X="webgl2";if(R=ut(X,P),R===null)throw ut(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Z,nt,rt,ft,tt,b,E,O,Y,I,k,ot,at,_t,Ut,ht,xt,It,Et,it,Tt,Ot,he,H;function wt(){Z=new JE(R),Z.init(),Ot=new UT(R,Z),nt=new qE(R,Z,t,Ot),rt=new LT(R,Z),nt.reverseDepthBuffer&&h&&rt.buffers.depth.setReversed(!0),ft=new eb(R),tt=new xT,b=new IT(R,Z,rt,tt,nt,Ot,ft),E=new $E(v),O=new ZE(v),Y=new lS(R),he=new WE(R,Y),I=new QE(R,Y,ft,he),k=new ib(R,I,Y,ft),Et=new nb(R,nt,b),ht=new YE(tt),ot=new vT(v,E,O,Z,nt,he,ht),at=new VT(v,tt),_t=new MT,Ut=new AT(Z),It=new GE(v,E,O,rt,k,d,l),xt=new PT(v,k,nt),H=new HT(R,ft,nt,rt),it=new XE(R,Z,ft),Tt=new tb(R,Z,ft),ft.programs=ot.programs,v.capabilities=nt,v.extensions=Z,v.properties=tt,v.renderLists=_t,v.shadowMap=xt,v.state=rt,v.info=ft}wt();const lt=new zT(v,R);this.xr=lt,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const P=Z.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Z.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(P){P!==void 0&&(G=P,this.setSize($,j,!1))},this.getSize=function(P){return P.set($,j)},this.setSize=function(P,X,Q=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=P,j=X,e.width=Math.floor(P*G),e.height=Math.floor(X*G),Q===!0&&(e.style.width=P+"px",e.style.height=X+"px"),this.setViewport(0,0,P,X)},this.getDrawingBufferSize=function(P){return P.set($*G,j*G).floor()},this.setDrawingBufferSize=function(P,X,Q){$=P,j=X,G=Q,e.width=Math.floor(P*Q),e.height=Math.floor(X*Q),this.setViewport(0,0,P,X)},this.getCurrentViewport=function(P){return P.copy(L)},this.getViewport=function(P){return P.copy(St)},this.setViewport=function(P,X,Q,et){P.isVector4?St.set(P.x,P.y,P.z,P.w):St.set(P,X,Q,et),rt.viewport(L.copy(St).multiplyScalar(G).round())},this.getScissor=function(P){return P.copy(Pt)},this.setScissor=function(P,X,Q,et){P.isVector4?Pt.set(P.x,P.y,P.z,P.w):Pt.set(P,X,Q,et),rt.scissor(U.copy(Pt).multiplyScalar(G).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(P){rt.setScissorTest(Qt=P)},this.setOpaqueSort=function(P){pt=P},this.setTransparentSort=function(P){vt=P},this.getClearColor=function(P){return P.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(P=!0,X=!0,Q=!0){let et=0;if(P){let q=!1;if(C!==null){const gt=C.texture.format;q=gt===qf||gt===Xf||gt===Wf}if(q){const gt=C.texture.type,At=gt===$i||gt===ts||gt===Zo||gt===$s||gt===Hf||gt===Gf,Dt=It.getClearColor(),Nt=It.getClearAlpha(),$t=Dt.r,jt=Dt.g,Ht=Dt.b;At?(g[0]=$t,g[1]=jt,g[2]=Ht,g[3]=Nt,R.clearBufferuiv(R.COLOR,0,g)):(_[0]=$t,_[1]=jt,_[2]=Ht,_[3]=Nt,R.clearBufferiv(R.COLOR,0,_))}else et|=R.COLOR_BUFFER_BIT}X&&(et|=R.DEPTH_BUFFER_BIT),Q&&(et|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",dt,!1),e.removeEventListener("webglcontextrestored",V,!1),e.removeEventListener("webglcontextcreationerror",W,!1),It.dispose(),_t.dispose(),Ut.dispose(),tt.dispose(),E.dispose(),O.dispose(),k.dispose(),he.dispose(),H.dispose(),ot.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",Kt),lt.removeEventListener("sessionend",oe),gn.stop()};function dt(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const P=ft.autoReset,X=xt.enabled,Q=xt.autoUpdate,et=xt.needsUpdate,q=xt.type;wt(),ft.autoReset=P,xt.enabled=X,xt.autoUpdate=Q,xt.needsUpdate=et,xt.type=q}function W(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ct(P){const X=P.target;X.removeEventListener("dispose",ct),Mt(X)}function Mt(P){qt(P),tt.remove(P)}function qt(P){const X=tt.get(P).programs;X!==void 0&&(X.forEach(function(Q){ot.releaseProgram(Q)}),P.isShaderMaterial&&ot.releaseShaderCache(P))}this.renderBufferDirect=function(P,X,Q,et,q,gt){X===null&&(X=fe);const At=q.isMesh&&q.matrixWorld.determinant()<0,Dt=pg(P,X,Q,et,q);rt.setMaterial(et,At);let Nt=Q.index,$t=1;if(et.wireframe===!0){if(Nt=I.getWireframeAttribute(Q),Nt===void 0)return;$t=2}const jt=Q.drawRange,Ht=Q.attributes.position;let le=jt.start*$t,me=(jt.start+jt.count)*$t;gt!==null&&(le=Math.max(le,gt.start*$t),me=Math.min(me,(gt.start+gt.count)*$t)),Nt!==null?(le=Math.max(le,0),me=Math.min(me,Nt.count)):Ht!=null&&(le=Math.max(le,0),me=Math.min(me,Ht.count));const ke=me-le;if(ke<0||ke===1/0)return;he.setup(q,et,Dt,Q,Nt);let Ie,ce=it;if(Nt!==null&&(Ie=Y.get(Nt),ce=Tt,ce.setIndex(Ie)),q.isMesh)et.wireframe===!0?(rt.setLineWidth(et.wireframeLinewidth*B()),ce.setMode(R.LINES)):ce.setMode(R.TRIANGLES);else if(q.isLine){let Gt=et.linewidth;Gt===void 0&&(Gt=1),rt.setLineWidth(Gt*B()),q.isLineSegments?ce.setMode(R.LINES):q.isLineLoop?ce.setMode(R.LINE_LOOP):ce.setMode(R.LINE_STRIP)}else q.isPoints?ce.setMode(R.POINTS):q.isSprite&&ce.setMode(R.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)ce.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(Z.get("WEBGL_multi_draw"))ce.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Gt=q._multiDrawStarts,Ke=q._multiDrawCounts,_e=q._multiDrawCount,Jn=Nt?Y.get(Nt).bytesPerElement:1,rs=tt.get(et).currentProgram.getUniforms();for(let Cn=0;Cn<_e;Cn++)rs.setValue(R,"_gl_DrawID",Cn),ce.render(Gt[Cn]/Jn,Ke[Cn])}else if(q.isInstancedMesh)ce.renderInstances(le,ke,q.count);else if(Q.isInstancedBufferGeometry){const Gt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ke=Math.min(Q.instanceCount,Gt);ce.renderInstances(le,ke,Ke)}else ce.render(le,ke)};function Yt(P,X,Q){P.transparent===!0&&P.side===je&&P.forceSinglePass===!1?(P.side=Je,P.needsUpdate=!0,ca(P,X,Q),P.side=Yi,P.needsUpdate=!0,ca(P,X,Q),P.side=je):ca(P,X,Q)}this.compile=function(P,X,Q=null){Q===null&&(Q=P),p=Ut.get(Q),p.init(X),M.push(p),Q.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),P!==Q&&P.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights();const et=new Set;return P.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const gt=q.material;if(gt)if(Array.isArray(gt))for(let At=0;At<gt.length;At++){const Dt=gt[At];Yt(Dt,Q,q),et.add(Dt)}else Yt(gt,Q,q),et.add(gt)}),M.pop(),p=null,et},this.compileAsync=function(P,X,Q=null){const et=this.compile(P,X,Q);return new Promise(q=>{function gt(){if(et.forEach(function(At){tt.get(At).currentProgram.isReady()&&et.delete(At)}),et.size===0){q(P);return}setTimeout(gt,10)}Z.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let ne=null;function Vt(P){ne&&ne(P)}function Kt(){gn.stop()}function oe(){gn.start()}const gn=new lg;gn.setAnimationLoop(Vt),typeof self<"u"&&gn.setContext(self),this.setAnimationLoop=function(P){ne=P,lt.setAnimationLoop(P),P===null?gn.stop():gn.start()},lt.addEventListener("sessionstart",Kt),lt.addEventListener("sessionend",oe),this.render=function(P,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(X),X=lt.getCamera()),P.isScene===!0&&P.onBeforeRender(v,P,X,C),p=Ut.get(P,M.length),p.init(X),M.push(p),Bt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),st.setFromProjectionMatrix(Bt),Ct=this.localClippingEnabled,mt=ht.init(this.clippingPlanes,Ct),m=_t.get(P,y.length),m.init(),y.push(m),lt.enabled===!0&&lt.isPresenting===!0){const gt=v.xr.getDepthSensingMesh();gt!==null&&ui(gt,X,-1/0,v.sortObjects)}ui(P,X,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(pt,vt),D=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,D&&It.addToRenderList(m,P),this.info.render.frame++,mt===!0&&ht.beginShadows();const Q=p.state.shadowsArray;xt.render(Q,P,X),mt===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const et=m.opaque,q=m.transmissive;if(p.setupLights(),X.isArrayCamera){const gt=X.cameras;if(q.length>0)for(let At=0,Dt=gt.length;At<Dt;At++){const Nt=gt[At];no(et,q,P,Nt)}D&&It.render(P);for(let At=0,Dt=gt.length;At<Dt;At++){const Nt=gt[At];aa(m,P,Nt,Nt.viewport)}}else q.length>0&&no(et,q,P,X),D&&It.render(P),aa(m,P,X);C!==null&&(b.updateMultisampleRenderTarget(C),b.updateRenderTargetMipmap(C)),P.isScene===!0&&P.onAfterRender(v,P,X),he.resetDefaultState(),x=-1,S=null,M.pop(),M.length>0?(p=M[M.length-1],mt===!0&&ht.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function ui(P,X,Q,et){if(P.visible===!1)return;if(P.layers.test(X.layers)){if(P.isGroup)Q=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(X);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||st.intersectsSprite(P)){et&&Wt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Bt);const At=k.update(P),Dt=P.material;Dt.visible&&m.push(P,At,Dt,Q,Wt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||st.intersectsObject(P))){const At=k.update(P),Dt=P.material;if(et&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Wt.copy(P.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),Wt.copy(At.boundingSphere.center)),Wt.applyMatrix4(P.matrixWorld).applyMatrix4(Bt)),Array.isArray(Dt)){const Nt=At.groups;for(let $t=0,jt=Nt.length;$t<jt;$t++){const Ht=Nt[$t],le=Dt[Ht.materialIndex];le&&le.visible&&m.push(P,At,le,Q,Wt.z,Ht)}}else Dt.visible&&m.push(P,At,Dt,Q,Wt.z,null)}}const gt=P.children;for(let At=0,Dt=gt.length;At<Dt;At++)ui(gt[At],X,Q,et)}function aa(P,X,Q,et){const q=P.opaque,gt=P.transmissive,At=P.transparent;p.setupLightsView(Q),mt===!0&&ht.setGlobalState(v.clippingPlanes,Q),et&&rt.viewport(L.copy(et)),q.length>0&&la(q,X,Q),gt.length>0&&la(gt,X,Q),At.length>0&&la(At,X,Q),rt.buffers.depth.setTest(!0),rt.buffers.depth.setMask(!0),rt.buffers.color.setMask(!0),rt.setPolygonOffset(!1)}function no(P,X,Q,et){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[et.id]===void 0&&(p.state.transmissionRenderTarget[et.id]=new es(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float")?na:$i,minFilter:qr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ue.workingColorSpace}));const gt=p.state.transmissionRenderTarget[et.id],At=et.viewport||L;gt.setSize(At.z,At.w);const Dt=v.getRenderTarget();v.setRenderTarget(gt),v.getClearColor(K),J=v.getClearAlpha(),J<1&&v.setClearColor(16777215,.5),v.clear(),D&&It.render(Q);const Nt=v.toneMapping;v.toneMapping=mr;const $t=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),p.setupLightsView(et),mt===!0&&ht.setGlobalState(v.clippingPlanes,et),la(P,Q,et),b.updateMultisampleRenderTarget(gt),b.updateRenderTargetMipmap(gt),Z.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let Ht=0,le=X.length;Ht<le;Ht++){const me=X[Ht],ke=me.object,Ie=me.geometry,ce=me.material,Gt=me.group;if(ce.side===je&&ke.layers.test(et.layers)){const Ke=ce.side;ce.side=Je,ce.needsUpdate=!0,rh(ke,Q,et,Ie,ce,Gt),ce.side=Ke,ce.needsUpdate=!0,jt=!0}}jt===!0&&(b.updateMultisampleRenderTarget(gt),b.updateRenderTargetMipmap(gt))}v.setRenderTarget(Dt),v.setClearColor(K,J),$t!==void 0&&(et.viewport=$t),v.toneMapping=Nt}function la(P,X,Q){const et=X.isScene===!0?X.overrideMaterial:null;for(let q=0,gt=P.length;q<gt;q++){const At=P[q],Dt=At.object,Nt=At.geometry,$t=et===null?At.material:et,jt=At.group;Dt.layers.test(Q.layers)&&rh(Dt,X,Q,Nt,$t,jt)}}function rh(P,X,Q,et,q,gt){P.onBeforeRender(v,X,Q,et,q,gt),P.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),q.onBeforeRender(v,X,Q,et,P,gt),q.transparent===!0&&q.side===je&&q.forceSinglePass===!1?(q.side=Je,q.needsUpdate=!0,v.renderBufferDirect(Q,X,et,q,P,gt),q.side=Yi,q.needsUpdate=!0,v.renderBufferDirect(Q,X,et,q,P,gt),q.side=je):v.renderBufferDirect(Q,X,et,q,P,gt),P.onAfterRender(v,X,Q,et,q,gt)}function ca(P,X,Q){X.isScene!==!0&&(X=fe);const et=tt.get(P),q=p.state.lights,gt=p.state.shadowsArray,At=q.state.version,Dt=ot.getParameters(P,q.state,gt,X,Q),Nt=ot.getProgramCacheKey(Dt);let $t=et.programs;et.environment=P.isMeshStandardMaterial?X.environment:null,et.fog=X.fog,et.envMap=(P.isMeshStandardMaterial?O:E).get(P.envMap||et.environment),et.envMapRotation=et.environment!==null&&P.envMap===null?X.environmentRotation:P.envMapRotation,$t===void 0&&(P.addEventListener("dispose",ct),$t=new Map,et.programs=$t);let jt=$t.get(Nt);if(jt!==void 0){if(et.currentProgram===jt&&et.lightsStateVersion===At)return oh(P,Dt),jt}else Dt.uniforms=ot.getUniforms(P),P.onBeforeCompile(Dt,v),jt=ot.acquireProgram(Dt,Nt),$t.set(Nt,jt),et.uniforms=Dt.uniforms;const Ht=et.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ht.clippingPlanes=ht.uniform),oh(P,Dt),et.needsLights=_g(P),et.lightsStateVersion=At,et.needsLights&&(Ht.ambientLightColor.value=q.state.ambient,Ht.lightProbe.value=q.state.probe,Ht.directionalLights.value=q.state.directional,Ht.directionalLightShadows.value=q.state.directionalShadow,Ht.spotLights.value=q.state.spot,Ht.spotLightShadows.value=q.state.spotShadow,Ht.rectAreaLights.value=q.state.rectArea,Ht.ltc_1.value=q.state.rectAreaLTC1,Ht.ltc_2.value=q.state.rectAreaLTC2,Ht.pointLights.value=q.state.point,Ht.pointLightShadows.value=q.state.pointShadow,Ht.hemisphereLights.value=q.state.hemi,Ht.directionalShadowMap.value=q.state.directionalShadowMap,Ht.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ht.spotShadowMap.value=q.state.spotShadowMap,Ht.spotLightMatrix.value=q.state.spotLightMatrix,Ht.spotLightMap.value=q.state.spotLightMap,Ht.pointShadowMap.value=q.state.pointShadowMap,Ht.pointShadowMatrix.value=q.state.pointShadowMatrix),et.currentProgram=jt,et.uniformsList=null,jt}function sh(P){if(P.uniformsList===null){const X=P.currentProgram.getUniforms();P.uniformsList=Ja.seqWithValue(X.seq,P.uniforms)}return P.uniformsList}function oh(P,X){const Q=tt.get(P);Q.outputColorSpace=X.outputColorSpace,Q.batching=X.batching,Q.batchingColor=X.batchingColor,Q.instancing=X.instancing,Q.instancingColor=X.instancingColor,Q.instancingMorph=X.instancingMorph,Q.skinning=X.skinning,Q.morphTargets=X.morphTargets,Q.morphNormals=X.morphNormals,Q.morphColors=X.morphColors,Q.morphTargetsCount=X.morphTargetsCount,Q.numClippingPlanes=X.numClippingPlanes,Q.numIntersection=X.numClipIntersection,Q.vertexAlphas=X.vertexAlphas,Q.vertexTangents=X.vertexTangents,Q.toneMapping=X.toneMapping}function pg(P,X,Q,et,q){X.isScene!==!0&&(X=fe),b.resetTextureUnits();const gt=X.fog,At=et.isMeshStandardMaterial?X.environment:null,Dt=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:js,Nt=(et.isMeshStandardMaterial?O:E).get(et.envMap||At),$t=et.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,jt=!!Q.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Ht=!!Q.morphAttributes.position,le=!!Q.morphAttributes.normal,me=!!Q.morphAttributes.color;let ke=mr;et.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ke=v.toneMapping);const Ie=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ce=Ie!==void 0?Ie.length:0,Gt=tt.get(et),Ke=p.state.lights;if(mt===!0&&(Ct===!0||P!==S)){const an=P===S&&et.id===x;ht.setState(et,P,an)}let _e=!1;et.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==Ke.state.version||Gt.outputColorSpace!==Dt||q.isBatchedMesh&&Gt.batching===!1||!q.isBatchedMesh&&Gt.batching===!0||q.isBatchedMesh&&Gt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Gt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Gt.instancing===!1||!q.isInstancedMesh&&Gt.instancing===!0||q.isSkinnedMesh&&Gt.skinning===!1||!q.isSkinnedMesh&&Gt.skinning===!0||q.isInstancedMesh&&Gt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Gt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Gt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Gt.instancingMorph===!1&&q.morphTexture!==null||Gt.envMap!==Nt||et.fog===!0&&Gt.fog!==gt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==ht.numPlanes||Gt.numIntersection!==ht.numIntersection)||Gt.vertexAlphas!==$t||Gt.vertexTangents!==jt||Gt.morphTargets!==Ht||Gt.morphNormals!==le||Gt.morphColors!==me||Gt.toneMapping!==ke||Gt.morphTargetsCount!==ce)&&(_e=!0):(_e=!0,Gt.__version=et.version);let Jn=Gt.currentProgram;_e===!0&&(Jn=ca(et,X,q));let rs=!1,Cn=!1,io=!1;const Ce=Jn.getUniforms(),zn=Gt.uniforms;if(rt.useProgram(Jn.program)&&(rs=!0,Cn=!0,io=!0),et.id!==x&&(x=et.id,Cn=!0),rs||S!==P){rt.buffers.depth.getReversed()?(yt.copy(P.projectionMatrix),dM(yt),pM(yt),Ce.setValue(R,"projectionMatrix",yt)):Ce.setValue(R,"projectionMatrix",P.projectionMatrix),Ce.setValue(R,"viewMatrix",P.matrixWorldInverse);const vn=Ce.map.cameraPosition;vn!==void 0&&vn.setValue(R,kt.setFromMatrixPosition(P.matrixWorld)),nt.logarithmicDepthBuffer&&Ce.setValue(R,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Ce.setValue(R,"isOrthographic",P.isOrthographicCamera===!0),S!==P&&(S=P,Cn=!0,io=!0)}if(q.isSkinnedMesh){Ce.setOptional(R,q,"bindMatrix"),Ce.setOptional(R,q,"bindMatrixInverse");const an=q.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Ce.setValue(R,"boneTexture",an.boneTexture,b))}q.isBatchedMesh&&(Ce.setOptional(R,q,"batchingTexture"),Ce.setValue(R,"batchingTexture",q._matricesTexture,b),Ce.setOptional(R,q,"batchingIdTexture"),Ce.setValue(R,"batchingIdTexture",q._indirectTexture,b),Ce.setOptional(R,q,"batchingColorTexture"),q._colorsTexture!==null&&Ce.setValue(R,"batchingColorTexture",q._colorsTexture,b));const kn=Q.morphAttributes;if((kn.position!==void 0||kn.normal!==void 0||kn.color!==void 0)&&Et.update(q,Q,Jn),(Cn||Gt.receiveShadow!==q.receiveShadow)&&(Gt.receiveShadow=q.receiveShadow,Ce.setValue(R,"receiveShadow",q.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(zn.envMap.value=Nt,zn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),et.isMeshStandardMaterial&&et.envMap===null&&X.environment!==null&&(zn.envMapIntensity.value=X.environmentIntensity),Cn&&(Ce.setValue(R,"toneMappingExposure",v.toneMappingExposure),Gt.needsLights&&mg(zn,io),gt&&et.fog===!0&&at.refreshFogUniforms(zn,gt),at.refreshMaterialUniforms(zn,et,G,j,p.state.transmissionRenderTarget[P.id]),Ja.upload(R,sh(Gt),zn,b)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(Ja.upload(R,sh(Gt),zn,b),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Ce.setValue(R,"center",q.center),Ce.setValue(R,"modelViewMatrix",q.modelViewMatrix),Ce.setValue(R,"normalMatrix",q.normalMatrix),Ce.setValue(R,"modelMatrix",q.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){const an=et.uniformsGroups;for(let vn=0,Bl=an.length;vn<Bl;vn++){const Er=an[vn];H.update(Er,Jn),H.bind(Er,Jn)}}return Jn}function mg(P,X){P.ambientLightColor.needsUpdate=X,P.lightProbe.needsUpdate=X,P.directionalLights.needsUpdate=X,P.directionalLightShadows.needsUpdate=X,P.pointLights.needsUpdate=X,P.pointLightShadows.needsUpdate=X,P.spotLights.needsUpdate=X,P.spotLightShadows.needsUpdate=X,P.rectAreaLights.needsUpdate=X,P.hemisphereLights.needsUpdate=X}function _g(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(P,X,Q){tt.get(P.texture).__webglTexture=X,tt.get(P.depthTexture).__webglTexture=Q;const et=tt.get(P);et.__hasExternalTextures=!0,et.__autoAllocateDepthBuffer=Q===void 0,et.__autoAllocateDepthBuffer||Z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),et.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,X){const Q=tt.get(P);Q.__webglFramebuffer=X,Q.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(P,X=0,Q=0){C=P,T=X,w=Q;let et=!0,q=null,gt=!1,At=!1;if(P){const Nt=tt.get(P);if(Nt.__useDefaultFramebuffer!==void 0)rt.bindFramebuffer(R.FRAMEBUFFER,null),et=!1;else if(Nt.__webglFramebuffer===void 0)b.setupRenderTarget(P);else if(Nt.__hasExternalTextures)b.rebindTextures(P,tt.get(P.texture).__webglTexture,tt.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Ht=P.depthTexture;if(Nt.__boundDepthTexture!==Ht){if(Ht!==null&&tt.has(Ht)&&(P.width!==Ht.image.width||P.height!==Ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(P)}}const $t=P.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(At=!0);const jt=tt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(jt[X])?q=jt[X][Q]:q=jt[X],gt=!0):P.samples>0&&b.useMultisampledRTT(P)===!1?q=tt.get(P).__webglMultisampledFramebuffer:Array.isArray(jt)?q=jt[Q]:q=jt,L.copy(P.viewport),U.copy(P.scissor),z=P.scissorTest}else L.copy(St).multiplyScalar(G).floor(),U.copy(Pt).multiplyScalar(G).floor(),z=Qt;if(rt.bindFramebuffer(R.FRAMEBUFFER,q)&&et&&rt.drawBuffers(P,q),rt.viewport(L),rt.scissor(U),rt.setScissorTest(z),gt){const Nt=tt.get(P.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+X,Nt.__webglTexture,Q)}else if(At){const Nt=tt.get(P.texture),$t=X||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Nt.__webglTexture,Q||0,$t)}x=-1},this.readRenderTargetPixels=function(P,X,Q,et,q,gt,At){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=tt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&At!==void 0&&(Dt=Dt[At]),Dt){rt.bindFramebuffer(R.FRAMEBUFFER,Dt);try{const Nt=P.texture,$t=Nt.format,jt=Nt.type;if(!nt.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=P.width-et&&Q>=0&&Q<=P.height-q&&R.readPixels(X,Q,et,q,Ot.convert($t),Ot.convert(jt),gt)}finally{const Nt=C!==null?tt.get(C).__webglFramebuffer:null;rt.bindFramebuffer(R.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(P,X,Q,et,q,gt,At){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=tt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&At!==void 0&&(Dt=Dt[At]),Dt){const Nt=P.texture,$t=Nt.format,jt=Nt.type;if(!nt.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=P.width-et&&Q>=0&&Q<=P.height-q){rt.bindFramebuffer(R.FRAMEBUFFER,Dt);const Ht=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Ht),R.bufferData(R.PIXEL_PACK_BUFFER,gt.byteLength,R.STREAM_READ),R.readPixels(X,Q,et,q,Ot.convert($t),Ot.convert(jt),0);const le=C!==null?tt.get(C).__webglFramebuffer:null;rt.bindFramebuffer(R.FRAMEBUFFER,le);const me=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await hM(R,me,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Ht),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,gt),R.deleteBuffer(Ht),R.deleteSync(me),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,X=null,Q=0){P.isTexture!==!0&&(Es("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,P=arguments[1]);const et=Math.pow(2,-Q),q=Math.floor(P.image.width*et),gt=Math.floor(P.image.height*et),At=X!==null?X.x:0,Dt=X!==null?X.y:0;b.setTexture2D(P,0),R.copyTexSubImage2D(R.TEXTURE_2D,Q,0,0,At,Dt,q,gt),rt.unbindTexture()};const gg=R.createFramebuffer(),vg=R.createFramebuffer();this.copyTextureToTexture=function(P,X,Q=null,et=null,q=0,gt=null){P.isTexture!==!0&&(Es("WebGLRenderer: copyTextureToTexture function signature has changed."),et=arguments[0]||null,P=arguments[1],X=arguments[2],gt=arguments[3]||0,Q=null),gt===null&&(q!==0?(Es("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),gt=q,q=0):gt=0);let At,Dt,Nt,$t,jt,Ht,le,me,ke;const Ie=P.isCompressedTexture?P.mipmaps[gt]:P.image;if(Q!==null)At=Q.max.x-Q.min.x,Dt=Q.max.y-Q.min.y,Nt=Q.isBox3?Q.max.z-Q.min.z:1,$t=Q.min.x,jt=Q.min.y,Ht=Q.isBox3?Q.min.z:0;else{const kn=Math.pow(2,-q);At=Math.floor(Ie.width*kn),Dt=Math.floor(Ie.height*kn),P.isDataArrayTexture?Nt=Ie.depth:P.isData3DTexture?Nt=Math.floor(Ie.depth*kn):Nt=1,$t=0,jt=0,Ht=0}et!==null?(le=et.x,me=et.y,ke=et.z):(le=0,me=0,ke=0);const ce=Ot.convert(X.format),Gt=Ot.convert(X.type);let Ke;X.isData3DTexture?(b.setTexture3D(X,0),Ke=R.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(b.setTexture2DArray(X,0),Ke=R.TEXTURE_2D_ARRAY):(b.setTexture2D(X,0),Ke=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,X.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,X.unpackAlignment);const _e=R.getParameter(R.UNPACK_ROW_LENGTH),Jn=R.getParameter(R.UNPACK_IMAGE_HEIGHT),rs=R.getParameter(R.UNPACK_SKIP_PIXELS),Cn=R.getParameter(R.UNPACK_SKIP_ROWS),io=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Ie.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ie.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,$t),R.pixelStorei(R.UNPACK_SKIP_ROWS,jt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ht);const Ce=P.isDataArrayTexture||P.isData3DTexture,zn=X.isDataArrayTexture||X.isData3DTexture;if(P.isDepthTexture){const kn=tt.get(P),an=tt.get(X),vn=tt.get(kn.__renderTarget),Bl=tt.get(an.__renderTarget);rt.bindFramebuffer(R.READ_FRAMEBUFFER,vn.__webglFramebuffer),rt.bindFramebuffer(R.DRAW_FRAMEBUFFER,Bl.__webglFramebuffer);for(let Er=0;Er<Nt;Er++)Ce&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,tt.get(P).__webglTexture,q,Ht+Er),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,tt.get(X).__webglTexture,gt,ke+Er)),R.blitFramebuffer($t,jt,At,Dt,le,me,At,Dt,R.DEPTH_BUFFER_BIT,R.NEAREST);rt.bindFramebuffer(R.READ_FRAMEBUFFER,null),rt.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(q!==0||P.isRenderTargetTexture||tt.has(P)){const kn=tt.get(P),an=tt.get(X);rt.bindFramebuffer(R.READ_FRAMEBUFFER,gg),rt.bindFramebuffer(R.DRAW_FRAMEBUFFER,vg);for(let vn=0;vn<Nt;vn++)Ce?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,kn.__webglTexture,q,Ht+vn):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,kn.__webglTexture,q),zn?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,an.__webglTexture,gt,ke+vn):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,an.__webglTexture,gt),q!==0?R.blitFramebuffer($t,jt,At,Dt,le,me,At,Dt,R.COLOR_BUFFER_BIT,R.NEAREST):zn?R.copyTexSubImage3D(Ke,gt,le,me,ke+vn,$t,jt,At,Dt):R.copyTexSubImage2D(Ke,gt,le,me,$t,jt,At,Dt);rt.bindFramebuffer(R.READ_FRAMEBUFFER,null),rt.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else zn?P.isDataTexture||P.isData3DTexture?R.texSubImage3D(Ke,gt,le,me,ke,At,Dt,Nt,ce,Gt,Ie.data):X.isCompressedArrayTexture?R.compressedTexSubImage3D(Ke,gt,le,me,ke,At,Dt,Nt,ce,Ie.data):R.texSubImage3D(Ke,gt,le,me,ke,At,Dt,Nt,ce,Gt,Ie):P.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,gt,le,me,At,Dt,ce,Gt,Ie.data):P.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,gt,le,me,Ie.width,Ie.height,ce,Ie.data):R.texSubImage2D(R.TEXTURE_2D,gt,le,me,At,Dt,ce,Gt,Ie);R.pixelStorei(R.UNPACK_ROW_LENGTH,_e),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Jn),R.pixelStorei(R.UNPACK_SKIP_PIXELS,rs),R.pixelStorei(R.UNPACK_SKIP_ROWS,Cn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,io),gt===0&&X.generateMipmaps&&R.generateMipmap(Ke),rt.unbindTexture()},this.copyTextureToTexture3D=function(P,X,Q=null,et=null,q=0){return P.isTexture!==!0&&(Es("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,et=arguments[1]||null,P=arguments[2],X=arguments[3],q=arguments[4]||0),Es('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,X,Q,et,q)},this.initRenderTarget=function(P){tt.get(P).__webglFramebuffer===void 0&&b.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?b.setTextureCube(P,0):P.isData3DTexture?b.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?b.setTexture2DArray(P,0):b.setTexture2D(P,0),rt.unbindTexture()},this.resetState=function(){T=0,w=0,C=null,rt.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}}function GT(n){const t=pe([]);let e,i,r,s=new zt,o=new zt;const a=[{depth:-2,scale:6.1,name:"sky",title:"SKYFOLD MATTE",subtitle:"天幕底片 / 高空异象保留位",aspect:16/9,accent:"rgba(255, 231, 178, 0.92)"},{depth:-.4,scale:4.6,name:"boy",title:"SCALE FIGURE",subtitle:"远景尺度参照 / 人类尺寸锚点",aspect:4/5,accent:"rgba(144, 214, 255, 0.9)"},{depth:1.1,scale:3.9,name:"woman",title:"HERO SILHOUETTE",subtitle:"主角剪影保留位 / 第一眼情绪层",aspect:4/5,accent:"rgba(255, 216, 143, 0.92)"},{depth:2.5,scale:5.3,name:"grass",title:"WIND FOREGROUND",subtitle:"前景风场 / 速度线与遮挡层",aspect:21/9,accent:"rgba(255, 255, 255, 0.9)"}],l=()=>{e=new tg,i=new Sn(55,window.innerWidth/window.innerHeight,.1,1e3),i.position.z=6,n.value&&(r=new dg({canvas:n.value,antialias:!0,alpha:!1}),r.setClearColor(328965,1),r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(window.devicePixelRatio),r.sortObjects=!0)},u=_=>{const m=document.createElement("canvas");m.width=1600,m.height=Math.round(m.width/_.aspect);const p=m.getContext("2d");if(!p)return new Nd(m);p.fillStyle="#050505",p.fillRect(0,0,m.width,m.height),p.strokeStyle="rgba(255,255,255,0.18)",p.lineWidth=4,p.strokeRect(28,28,m.width-56,m.height-56),p.strokeStyle=_.accent.replace("0.92","0.22").replace("0.9","0.22"),p.lineWidth=1.5,p.setLineDash([14,12]),p.strokeRect(58,58,m.width-116,m.height-116),p.setLineDash([]),p.fillStyle="rgba(255,255,255,0.035)";for(let M=0;M<4;M+=1)p.fillRect(88,124+M*26,m.width-176,6);p.fillStyle="rgba(255,255,255,0.22)",p.font='700 48px "Space Mono", monospace',p.fillText(_.title,88,200),p.fillStyle="rgba(255,255,255,0.14)",p.font='500 24px "Space Mono", monospace',p.fillText(_.subtitle,88,242),p.fillStyle="rgba(255,255,255,0.12)",p.font='400 18px "Space Mono", monospace',p.fillText(`LAYER / ${_.name.toUpperCase()} / DEPTH ${_.depth}`,88,m.height-84);const y=new Nd(m);return y.needsUpdate=!0,y},c=()=>{t.value.forEach((_,m)=>{const p=m%2===0?-1:1,y=_.material;Ft.killTweensOf(_.position),Ft.killTweensOf(_.rotation),Ft.killTweensOf(y),_.position.x=p*(11+m*2.2),_.position.y=m===0?-.35:m===3?.35:0,_.rotation.y=p*.9,_.rotation.z=p*.04,y.opacity=.12,Ft.to(_.position,{x:0,y:0,duration:1.6,delay:m*.16,ease:"power3.out"}),Ft.to(_.rotation,{y:0,z:0,duration:1.5,delay:m*.16,ease:"power2.out"}),Ft.to(y,{opacity:1,duration:1.1,delay:m*.16+.12,ease:"power2.inOut"})})},f=()=>{a.forEach((_,m)=>{const p=u(_),y=new ni(_.aspect*_.scale,_.scale),M=new Ge({map:p,transparent:!1,side:je,color:new Zt(1,1,1),depthWrite:!0}),v=new xe(y,M);v.position.set(0,0,_.depth),v.userData.name=_.name,v.renderOrder=-_.depth,v.position.x=0,v.rotation.y=0,v.material.opacity=1,e&&e.add(v),t.value.push(v)}),requestAnimationFrame(()=>{c()})},h=()=>{requestAnimationFrame(h),s.x+=(o.x-s.x)*.08,s.y+=(o.y-s.y)*.08,t.value.forEach(y=>{const M=y.position.z*.5;y.position.x=s.x*M,y.position.y=-s.y*M});const _=t.value.find(y=>y.userData.name==="grass");_&&(_.rotation.z=Math.sin(Date.now()*.001)*.02);const m=t.value.find(y=>y.userData.name==="woman");m&&(m.rotation.z=Math.sin(Date.now()*8e-4)*.015);const p=t.value.find(y=>y.userData.name==="sky");p&&(p.position.x+=Math.sin(Date.now()*3e-4)*.001),r&&e&&i&&r.render(e,i)};return{initScene:l,loadLayers:f,playArchiveReveal:c,animate:h,onResize:()=>{!i||!r||(i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight))},updateMouseTarget:_=>{o.x=_.clientX/window.innerWidth-.5,o.y=_.clientY/window.innerHeight-.5},layers:t,scene:e,camera:i,renderer:r,mouse:s,targetMouse:o}}function WT(n,t,e,i){return{onMouseMove:a=>{},onClick:a=>{const l=new ag,u=new zt;u.x=a.clientX/window.innerWidth*2-1,u.y=-(a.clientY/window.innerHeight)*2+1,l.setFromCamera(u,i);const c=l.intersectObjects(e.value);if(c.length>0){const f=c[0].object,h=f.userData.name;Ft.timeline().to(f.scale,{x:1.1,y:1.1,z:1.1,duration:.2,ease:"power2.out"}).to(f.scale,{x:1,y:1,z:1,duration:.3,ease:"elastic.out(1, 0.5)"}),Ft.timeline().to(f.rotation,{z:Math.random()>.5?.1:-.1,duration:.2,ease:"power1.out"}).to(f.rotation,{z:0,duration:.4,ease:"elastic.out(1, 0.3)"});const d={woman:"展签 01 / 前景人物层。用于建立主视觉的第一眼情绪和风向。正式 CG 中她会被替换成进入 WERISS 的现场角色。",boy:"展签 02 / 远景陪体层。这个位置负责提供尺度参照，让山体和天空的压迫感有了可比较的人类尺寸。",grass:"展签 03 / 前景风场层。它不只是草，而是镜头前方的速度线。风一旦成立，整个画面就开始有叙事。",sky:"展签 04 / 天幕底片层。后续会叠加红脊、极光磁暴或 skyfold 光带，这里是所有关键 CG 的情绪起点。"};d[h]&&(t.value=d[h])}},startExplore:()=>{n.value=!0,Ft.timeline().to(i.position,{z:5.5,duration:2,ease:"power2.inOut"}).to(i.rotation,{z:.02,duration:.5,ease:"power1.inOut",yoyo:!0,repeat:1},"-=1");const a=e.value.find(l=>l.userData.name==="grass");a&&Ft.timeline().to(a.scale,{x:.7,y:.7,z:.7,duration:2,ease:"power2.inOut"}).to(a.position,{y:.5,duration:2,ease:"power2.inOut"},"-=2"),e.value.forEach((l,u)=>{l.userData.name!=="grass"&&Ft.to(l.position,{y:l.position.y+(Math.random()-.5)*.3,duration:2,ease:"power1.inOut",delay:u*.1})})}}}const XT={class:"page-monet"},qT={class:"glass-card"},YT={class:"handwriting"},$T={key:0,class:"branch-tree-stage"},KT={class:"branch-tree-plane"},jT={class:"tree-trunk-id"},ZT={class:"tree-choice-id"},JT={class:"tree-next-step"},QT={class:"tree-choice-id"},tw={__name:"MonetView",props:{active:{type:Boolean,required:!0}},setup(n){const t=n,e=pe(null),i=pe(!1),r=pe(null),s=[{id:"ENTRY",title:"进入回响链接",note:"起点 / ECHO DESK 接入 WERISS。",x:50,y:84,kind:"root"},{id:"Ω-01",title:"红脊初判",note:"第一次判断风险基调。",x:50,y:208,kind:"event"},{id:"Ψ-02",title:"发光雾墙",note:"不管前一轮怎么选，都会汇入这一轮。",x:50,y:620,kind:"event"},{id:"Δ-03",title:"蓝裂口",note:"第二轮选择后，故事继续向下推进。",x:50,y:1020,kind:"event"},{id:"Λ-04",title:"双地图失真",note:"第三轮之后，路线重新汇入主干。",x:50,y:1420,kind:"event"},{id:"X-05",title:"天穹展开",note:"最后一轮主干事件，下一次分叉直接导向结局。",x:50,y:1820,kind:"event"}],o=[{id:"fork-a",x:50,y:310,label:"分叉 A",note:"第一次建议"},{id:"fork-b",x:50,y:710,label:"分叉 B",note:"雾墙抉择"},{id:"fork-c",x:50,y:1110,label:"分叉 C",note:"裂口抉择"},{id:"fork-d",x:50,y:1510,label:"分叉 D",note:"失真抉择"},{id:"fork-e",x:50,y:1910,label:"终局分叉",note:"结局入口"}],a=[{id:"A1",label:"高处确认",note:"稳住视野，风险较低。",next:"Ψ-02",x:22,y:420,tone:"calm"},{id:"A2",label:"继续逼近",note:"真相推进更快。",next:"Ψ-02",x:50,y:446,tone:"risk"},{id:"A3",label:"校准传感器",note:"先拿参数，再继续推进。",next:"Ψ-02",x:78,y:420,tone:"calm"},{id:"B1",label:"穿越雾墙",note:"直接冲进更深层画面。",next:"Δ-03",x:20,y:820,tone:"risk"},{id:"B2",label:"后撤保链",note:"优先维持稳定。",next:"Δ-03",x:50,y:846,tone:"calm"},{id:"B3",label:"横移找掩体",note:"保留中间态继续观察。",next:"Δ-03",x:80,y:820,tone:"calm"},{id:"C1",label:"沿边缘前进",note:"不直接下裂口。",next:"Λ-04",x:22,y:1220,tone:"calm"},{id:"C2",label:"直接下行",note:"进入深部奇观线。",next:"Λ-04",x:50,y:1246,tone:"reveal"},{id:"C3",label:"先放探针",note:"以更稳方式拿证据。",next:"Λ-04",x:78,y:1220,tone:"reveal"},{id:"D1",label:"盲走地形",note:"信脚下，不信地图。",next:"X-05",x:22,y:1620,tone:"calm"},{id:"D2",label:"锁旧地图",note:"真相更近，现实更薄。",next:"X-05",x:50,y:1646,tone:"risk"},{id:"D3",label:"切掉辅助层",note:"保链路，失去部分视野。",next:"X-05",x:78,y:1620,tone:"reveal"}],l=[{id:"E1",label:"返回",note:"生还结局 / 带回残缺记录。",x:22,y:2056},{id:"E2",label:"继续深入",note:"求真结局 / 链路逐步熄灭。",x:50,y:2072},{id:"E3",label:"原地维持链路",note:"回响结局 / 形成循环闭环。",x:78,y:2056}],{initScene:u,loadLayers:c,playArchiveReveal:f,animate:h,onResize:d,updateMouseTarget:g,layers:_,camera:m,renderer:p}=GT(e),{onClick:y,startExplore:M}=WT(i,r,_,m),v=()=>{i.value=!1,r.value=null,m&&(Ft.killTweensOf(m.position),Ft.killTweensOf(m.rotation),Ft.to(m.position,{z:6,duration:1.2,ease:"power2.inOut"}),Ft.to(m.rotation,{z:0,duration:.9,ease:"power2.out"})),_.value.forEach(T=>{Ft.killTweensOf(T.position),Ft.killTweensOf(T.scale),Ft.killTweensOf(T.rotation),Ft.to(T.position,{x:0,y:0,duration:.9,ease:"power2.out"}),Ft.to(T.scale,{x:1,y:1,z:1,duration:.9,ease:"power2.out"}),Ft.to(T.rotation,{z:0,duration:.9,ease:"power2.out"})}),bo(()=>{const T=document.querySelector(".branch-tree-stage");T instanceof HTMLElement&&T.scrollTo({top:0,behavior:"smooth"})}),window.setTimeout(()=>{f()},80)},A=T=>{T.key==="Escape"&&i.value&&v()};return Js(()=>{var T;u(),c(),window.addEventListener("mousemove",g),(T=e.value)==null||T.addEventListener("click",y),window.addEventListener("resize",d),window.addEventListener("keydown",A),h()}),To(()=>t.active,T=>{if(!T&&i.value){v();return}!T||i.value||window.setTimeout(()=>{f()},60)}),Al(()=>{var T;window.removeEventListener("mousemove",g),(T=e.value)==null||T.removeEventListener("click",y),window.removeEventListener("resize",d),window.removeEventListener("keydown",A),p==null||p.dispose()}),(T,w)=>(ie(),se("div",XT,[F("header",{class:Fe(["painting-header",{"fade-out":i.value}])},[w[2]||(w[2]=F("div",{class:"archive-kicker"},"WERISS // ECHO ARCHIVE",-1)),w[3]||(w[3]=F("h1",null,"关键 CG 陈列馆",-1)),w[4]||(w[4]=F("p",null,"展示主视觉分层、镜头定格与氛围样张。点击陈列层可以查看档案展签。",-1)),F("button",{onClick:w[0]||(w[0]=(...C)=>Rt(M)&&Rt(M)(...C)),class:"start-btn"},"进入陈列")],2),Ae(or,{name:"fade"},{default:Ui(()=>[r.value?(ie(),se("div",{key:0,class:"dialogue-box",onClick:w[1]||(w[1]=C=>r.value=null)},[F("div",qT,[F("p",YT,Lt(r.value),1),w[5]||(w[5]=F("span",{class:"close-hint"},"点击收起展签",-1))])])):Gn("",!0)]),_:1}),F("canvas",{ref_key:"canvasEl",ref:e},null,512),Ae(or,{name:"tree"},{default:Ui(()=>[i.value?(ie(),se("section",$T,[F("button",{class:"tree-exit-btn",onClick:v},"返回陈列入口"),w[8]||(w[8]=F("div",{class:"branch-tree-caption"},[F("div",{class:"branch-tree-kicker"},"TOP-DOWN BRANCH TREE"),F("h2",null,"WERISS 多叉树"),F("p",null,"从上往下读。每一次分叉都是一次建议，每一片叶子都是故事走向。")],-1)),F("div",KT,[w[6]||(w[6]=F("svg",{class:"branch-tree-svg",viewBox:"0 0 1000 2140",preserveAspectRatio:"none","aria-hidden":"true"},[F("defs",null,[F("linearGradient",{id:"branchTreeGlow",x1:"0%",y1:"0%",x2:"0%",y2:"100%"},[F("stop",{offset:"0%","stop-color":"rgba(255,247,222,0.95)"}),F("stop",{offset:"55%","stop-color":"rgba(255,221,162,0.88)"}),F("stop",{offset:"100%","stop-color":"rgba(214,168,88,0.42)"})]),F("filter",{id:"branchTreeBlur"},[F("feGaussianBlur",{stdDeviation:"4.5"})])]),F("path",{class:"branch-glow trunk-glow",d:"M500 88 L500 1940"}),F("path",{class:"branch-line trunk-line",d:"M500 88 L500 1940"}),F("path",{class:"branch-glow",d:"M500 310 C438 336 348 374 220 420"}),F("path",{class:"branch-glow",d:"M500 310 C490 344 490 382 500 446"}),F("path",{class:"branch-glow",d:"M500 310 C562 336 652 374 780 420"}),F("path",{class:"branch-line",d:"M500 310 C438 336 348 374 220 420"}),F("path",{class:"branch-line",d:"M500 310 C490 344 490 382 500 446"}),F("path",{class:"branch-line",d:"M500 310 C562 336 652 374 780 420"}),F("path",{class:"branch-return-glow",d:"M220 420 C308 470 392 534 500 620"}),F("path",{class:"branch-return-glow",d:"M500 446 C500 492 500 548 500 620"}),F("path",{class:"branch-return-glow",d:"M780 420 C692 470 608 534 500 620"}),F("path",{class:"branch-return-line",d:"M220 420 C308 470 392 534 500 620"}),F("path",{class:"branch-return-line",d:"M500 446 C500 492 500 548 500 620"}),F("path",{class:"branch-return-line",d:"M780 420 C692 470 608 534 500 620"}),F("path",{class:"branch-glow",d:"M500 710 C424 742 322 780 198 820"}),F("path",{class:"branch-glow",d:"M500 710 C490 744 490 782 500 846"}),F("path",{class:"branch-glow",d:"M500 710 C576 742 678 780 802 820"}),F("path",{class:"branch-line",d:"M500 710 C424 742 322 780 198 820"}),F("path",{class:"branch-line",d:"M500 710 C490 744 490 782 500 846"}),F("path",{class:"branch-line",d:"M500 710 C576 742 678 780 802 820"}),F("path",{class:"branch-return-glow",d:"M198 820 C292 876 386 946 500 1020"}),F("path",{class:"branch-return-glow",d:"M500 846 C500 894 500 946 500 1020"}),F("path",{class:"branch-return-glow",d:"M802 820 C708 876 614 946 500 1020"}),F("path",{class:"branch-return-line",d:"M198 820 C292 876 386 946 500 1020"}),F("path",{class:"branch-return-line",d:"M500 846 C500 894 500 946 500 1020"}),F("path",{class:"branch-return-line",d:"M802 820 C708 876 614 946 500 1020"}),F("path",{class:"branch-glow",d:"M500 1110 C432 1144 338 1182 222 1220"}),F("path",{class:"branch-glow",d:"M500 1110 C490 1144 490 1182 500 1246"}),F("path",{class:"branch-glow",d:"M500 1110 C568 1144 662 1182 778 1220"}),F("path",{class:"branch-line",d:"M500 1110 C432 1144 338 1182 222 1220"}),F("path",{class:"branch-line",d:"M500 1110 C490 1144 490 1182 500 1246"}),F("path",{class:"branch-line",d:"M500 1110 C568 1144 662 1182 778 1220"}),F("path",{class:"branch-return-glow",d:"M222 1220 C314 1276 402 1346 500 1420"}),F("path",{class:"branch-return-glow",d:"M500 1246 C500 1292 500 1346 500 1420"}),F("path",{class:"branch-return-glow",d:"M778 1220 C686 1276 598 1346 500 1420"}),F("path",{class:"branch-return-line",d:"M222 1220 C314 1276 402 1346 500 1420"}),F("path",{class:"branch-return-line",d:"M500 1246 C500 1292 500 1346 500 1420"}),F("path",{class:"branch-return-line",d:"M778 1220 C686 1276 598 1346 500 1420"}),F("path",{class:"branch-glow",d:"M500 1510 C432 1544 338 1582 222 1620"}),F("path",{class:"branch-glow",d:"M500 1510 C490 1544 490 1582 500 1646"}),F("path",{class:"branch-glow",d:"M500 1510 C568 1544 662 1582 778 1620"}),F("path",{class:"branch-line",d:"M500 1510 C432 1544 338 1582 222 1620"}),F("path",{class:"branch-line",d:"M500 1510 C490 1544 490 1582 500 1646"}),F("path",{class:"branch-line",d:"M500 1510 C568 1544 662 1582 778 1620"}),F("path",{class:"branch-return-glow",d:"M222 1620 C316 1680 404 1748 500 1820"}),F("path",{class:"branch-return-glow",d:"M500 1646 C500 1694 500 1748 500 1820"}),F("path",{class:"branch-return-glow",d:"M778 1620 C684 1680 596 1748 500 1820"}),F("path",{class:"branch-return-line",d:"M222 1620 C316 1680 404 1748 500 1820"}),F("path",{class:"branch-return-line",d:"M500 1646 C500 1694 500 1748 500 1820"}),F("path",{class:"branch-return-line",d:"M778 1620 C684 1680 596 1748 500 1820"}),F("path",{class:"branch-glow",d:"M500 1910 C422 1950 332 1992 222 2054"}),F("path",{class:"branch-glow",d:"M500 1910 C500 1952 500 1998 500 2072"}),F("path",{class:"branch-glow",d:"M500 1910 C578 1950 668 1992 778 2054"}),F("path",{class:"branch-line",d:"M500 1910 C422 1950 332 1992 222 2054"}),F("path",{class:"branch-line",d:"M500 1910 C500 1952 500 1998 500 2072"}),F("path",{class:"branch-line",d:"M500 1910 C578 1950 668 1992 778 2054"})],-1)),(ie(),se(Ue,null,Xn(s,C=>F("article",{key:C.id,class:Fe(["tree-trunk-node",`tree-trunk-${C.kind}`]),style:ri({left:`${C.x}%`,top:`${C.y}px`})},[F("span",jT,Lt(C.id),1),F("h3",null,Lt(C.title),1),F("p",null,Lt(C.note),1)],6)),64)),(ie(),se(Ue,null,Xn(o,C=>F("div",{key:C.id,class:"tree-fork-badge",style:ri({left:`${C.x}%`,top:`${C.y}px`})},[F("span",null,Lt(C.label),1),F("small",null,Lt(C.note),1)],4)),64)),w[7]||(w[7]=F("div",{class:"tree-final-center-link","aria-hidden":"true"},null,-1)),(ie(),se(Ue,null,Xn(a,C=>F("article",{key:C.id,class:Fe(["tree-choice-node",`tree-choice-${C.tone}`]),style:ri({left:`${C.x}%`,top:`${C.y}px`})},[F("span",ZT,Lt(C.id),1),F("h4",null,Lt(C.label),1),F("p",null,Lt(C.note),1),F("div",JT,"导向 "+Lt(C.next),1)],6)),64)),(ie(),se(Ue,null,Xn(l,C=>F("article",{key:C.id,class:"tree-ending-leaf",style:ri({left:`${C.x}%`,top:`${C.y}px`})},[F("span",QT,Lt(C.id),1),F("h4",null,Lt(C.label),1),F("p",null,Lt(C.note),1)],4)),64))])])):Gn("",!0)]),_:1})]))}},ew=zf(tw,[["__scopeId","data-v-e07f97c7"]]),yo="X-05",nw="WINDOW OPEN",iw="NIA-7 requesting first advisory.",rw="LINK CLOSED",sw="Awaiting first signal.",ow={mode:"quake",title:"MOUNTAIN BREACH / AUTHORIZATION OPEN",body:"平静结束了。回响台已获准读取山脉全貌，第一道建议窗口正在形成。"},gp=[{label:"ROLE",title:"你不是进入者",body:"你坐在 ECHO DESK 前，通过失真的远程链路观察 WERISS。山里的人不是你，你也不会替她迈出任何一步。",action:"知道了，继续"},{label:"ABILITY",title:"你唯一的能力是建议",body:"链路只会短暂打开几秒。你能做的只有在信息不完整时给出倾向，而不是命令。她会理解、误解，或者赌一把。",action:"继续授权"},{label:"COST",title:"每一次建议都会改写局势",body:"信任、风险和真相会被你的话推向不同方向。等你看见整座山的时候，平静也会一起结束。",action:"接入第一道建议窗口"}],vp={"Ω-01":{mode:"quake",title:"RED RIDGE / SURFACE FAILURE",body:"整条山脊在逆风震动，裂隙正在把视野撕开。这是你第一次看到 WERISS 真正移动。"},"Ψ-02":{mode:"storm",title:"LUMINOUS FRONT / CROSSWIND WALL",body:"发光雾墙压向峡谷，链路噪声开始翻倍。你给出的建议会决定她是穿过去，还是保住呼吸。"},"Δ-03":{mode:"fissure",title:"BLUE FISSURE / DEPTH OPEN",body:"雪幕被整面撕裂，裂口下方不是黑暗，而是一层正在发亮的深度。这里不该只是山表。"},"Λ-04":{mode:"magnetic",title:"DOUBLE MAP / SIGNAL DRIFT",body:"地形开始复制自己，HUD 和脚下给出两套完全不同的路线。你必须替她选一套现实。"},"X-05":{mode:"skyfold",title:"SKYFOLD / FINAL WINDOW",body:"高空像幕布一样展开，全部山脊同时发亮。最后一道窗口不会凭空制造命运，它只会替你们前面一路推出来的倾向签字。"}},aw={A1:{mode:"quake",title:"RIDGE STABILIZED",body:"镜头抬高后，裂纹从山体里蔓延出来。你让她先保住了视野，也让第一次震动有了轮廓。"},A2:{mode:"quake",title:"FORWARD PUSH",body:"山体换气声直接压进了链路。你把她推近了红脊，也把第一次风险抬高了。"},A3:{mode:"whiteout",title:"SENSOR CALIBRATION",body:"雪雾压暗了整个画面，只剩参数流和呼吸声。你让信息先于行动抵达。"},B1:{mode:"storm",title:"WALL BREACH",body:"她穿过了发光雾墙，镜头像被骤冷灼了一下。链路抖得更厉害，但前方被打开了。"},B2:{mode:"storm",title:"CONTROLLED RETREAT",body:"雾墙掠过山脊，风声盖住了脚步。你保住了链路稳定，但也看着原路被吞掉。"},B3:{mode:"storm",title:"COVER FOUND",body:"半塌石棚切开了风噪，镜头边缘仍在滴落雪水。你让她在灾变里争取到一次观察角度。"},C1:{mode:"fissure",title:"EDGE WALK",body:"裂口一直在镜头下方发蓝，你却命令她不去看。山体没有回答，但活路还在。"},C2:{mode:"fissure",title:"DESCENT",body:"镜头沉入裂口，地表被一道竖直光井取代。你不再只是看山脉，而是看山脉里面。"},C3:{mode:"fissure",title:"PROBE DROP",body:"探针掉进深度时，画面像被拉长了一瞬。数值在重复，说明下面不是正常空间。"},D1:{mode:"magnetic",title:"BLIND WALK",body:"她闭眼穿过噪声层，屏幕只剩几次短促闪烁。你让脚下地形暂时压过了错误地图。"},D2:{mode:"magnetic",title:"OLD MAP LOCK",body:"旧地图把镜头推向更亮的山脊，色差和雪花屏一起加重。真相更近，但现实更薄。"},D3:{mode:"magnetic",title:"OVERLAY KILLED",body:"辅助层熄灭后，画面黑了一瞬，只剩高度、心跳和你的链路还亮着。"},E1:{mode:"whiteout",title:"RETURN VECTOR",body:"风雪和天光一起压回镜头边缘。你放弃了最深处，把“活着回来”放到了真相前面。"},E2:{mode:"skyfold",title:"DEEP VECTOR",body:"高空彻底展开，山脊像一张反向星图。你让她继续往前，也接受了链路随时会断。"},E3:{mode:"skyfold",title:"HOLD VECTOR",body:"她停在回响最强的位置，画面像被整片天空按住。你没有撤离，也没有继续深入。"}},Fl=[{id:"Ω-01",position:{x:-7,y:2,z:8},event:{title:"RED RIDGE ASSESSMENT",subtitle:"FIELD UNIT NIA-7",message:'如果你真的能看到我的画面，先回答我。<br/>左边山脊后面那片发红的东西，像云，但它在逆风移动。<br/><span class="hl">我应该先看清它，还是先避开？</span>',choices:[{id:"A1",label:"退到高处，先确认整片视野",advisory:"Gain altitude and confirm the ridge line before moving.",reply:"收到。我先上切到高处。红光不是一个点，像一整片贴着山走的云墙。",effects:{trust:1,risk:-1}},{id:"A2",label:"继续靠近，我需要更多现场画面",advisory:"Close the distance. I need a better look at the red front.",reply:"你是真敢开口。行，我再往前二十米。地面开始轻震，像有什么东西在山体里换气。",effects:{truth:1,risk:1}},{id:"A3",label:"原地停留，先校准传感器",advisory:"Hold position and stabilize your sensors before moving.",reply:"校准完成。风场和温度都在跳，但频率很稳定。我把参数发回给你了。",effects:{trust:1,truth:1}}]}},{id:"Ψ-02",position:{x:0,y:3.5,z:1},event:{title:"MOVING CLOUD WALL",subtitle:"FIELD UNIT NIA-7",message:'不是云。是一整面在发光的雾墙，从峡谷对面横着压过来了。<br/>我能冲过去，也能后撤保链路。<br/><span class="hl">你给我一个更值的选项。</span>',delayMs:380,choices:[{id:"B1",label:"穿过去，抢时间拿画面",advisory:"Push through the wall before it closes. We need the view beyond it.",reply:"冲过去了。像从热水里穿到雪里，头盔差点掉线，但我看见前面有一条蓝色裂口。",effects:{truth:2,risk:2},obscured:!0},{id:"B2",label:"后撤，优先保住链路和体力",advisory:"Fall back. Keep the link stable and save your oxygen.",reply:"明白。我退回岩脊后面了。链路稳多了，但那道雾墙已经把原来的路盖住。",effects:{trust:1,risk:-1}},{id:"B3",label:"横向绕行，找掩体再观察",advisory:"Traverse laterally. Find cover and keep visual on the front.",reply:"我找到一段半塌的石棚，风声小了很多。墙体还在移动，但速度比我想的慢。",effects:{trust:1,truth:1}}]}},{id:"Δ-03",position:{x:7,y:2,z:7},event:{title:"SHEAR BREAK",subtitle:"FIELD UNIT NIA-7",message:'前面的雪坡塌了，不是普通雪崩，像整张白幕从山上被撕下来。<br/>裂口下面有一道发蓝的缝，我能下去。<br/><span class="hl">你要我绕，还是要我赌一把？</span>',choices:[{id:"C1",label:"别下裂口，沿边缘继续走",advisory:"Stay on the edge. Do not descend into the blue fissure.",reply:"收到。我贴边过去了。下面一直有像水一样的反光，但没有声音。",effects:{trust:1,risk:-1}},{id:"C2",label:"下去看蓝光来源，抓住窗口",advisory:"Descend into the fissure and identify the blue source.",reply:"我下来了。这里不是冰，是一层会发亮的碎石，像有人把星空砸碎铺在地上。",effects:{truth:2,risk:1}},{id:"C3",label:"先丢探针，再决定要不要下",advisory:"Deploy a probe first. I want the depth and temperature before you move.",reply:"探针下去了。回传深度不对，它像一直在往下掉，但读数又在重复同一段。",effects:{trust:1,truth:1}}]}},{id:"Λ-04",position:{x:-5,y:3,z:3},event:{title:"MAGNETIC STORM",subtitle:"FIELD UNIT NIA-7",message:'链路在跳。我收到你的字了，但顺序全乱。<br/>指南针开始绕圈，头盔 HUD 出现了两套地形。<br/><span class="hl">我该信地图，还是信脚下？</span>',delayMs:520,choices:[{id:"D1",label:"闭眼十秒，只按坡度和风向走",advisory:"Ignore the HUD. Count ten seconds and walk by slope and wind.",reply:"照做了。奇怪的是，一闭眼之后干扰反而小了。我像从一道缝里挤了出来。",effects:{trust:2}},{id:"D2",label:"相信旧地图，向北切过去",advisory:"Trust the old map and cut north before the storm thickens.",reply:"旧地图把我带到了一段断崖前。风很大，但我能看到更远的山脊全部亮起来了。",effects:{truth:1,risk:1},obscured:!0},{id:"D3",label:"关掉辅助系统，只保留心跳和高度",advisory:"Kill the overlays. Keep only heart rate, altitude, and the link.",reply:"辅助全关了。现在只剩你的链路和我自己的呼吸声。至少方向感回来了。",effects:{trust:1,risk:-1,truth:1}}]}},{id:"X-05",position:{x:4,y:5,z:16},event:{title:"SKYFOLD DECISION",subtitle:"FIELD UNIT NIA-7",message:'天不是在变暗，像有什么巨大的东西从高空展开了。<br/>所有山脊轮廓都亮起来，像一张地上的星图。<br/><span class="hl">如果我继续往前，链路会断；如果我现在回头，我可能带不走任何证据。</span>',delayMs:760,choices:[{id:"E1",label:"返回。把人带回来比答案重要",advisory:"Return now. Bring yourself home before the sky closes.",reply:"收到。我转身了。你这次没让我看到最深处，但你把我从那里带了出来。",effects:{trust:2,risk:-2}},{id:"E2",label:"继续。把真相带到最深处",advisory:"Keep moving. I need you at the center before the link dies.",reply:"明白。我继续走。链路开始一段一段掉帧了，如果这次断了，就把我看到的记住。",effects:{truth:2,risk:2},obscured:!0},{id:"E3",label:"留在原地，保持链路直到回响结束",advisory:"Hold position. Keep the link alive and let the mountain finish speaking.",reply:"那我就留在这里。山脊全亮了，像在对齐什么。别断线，我还有最后几句要发给你。",effects:{trust:1,truth:1}}]}}],xp=new Map(Fl.map(n=>[n.id,n.event])),lw=Fl.map(n=>n.id),yp=6500,cw={"Ω-01":2.8,"Ψ-02":3.1,"Δ-03":2.6,"Λ-04":2.9,"X-05":3.4},uw={quake:1600,storm:1800,fissure:2e3,whiteout:1700,magnetic:2200,skyfold:2400};function fw({isExploring:n,routeMarkers:t}){const e=Bo({trust:0,risk:0,truth:0}),i=pe(null),r=pe(null),s=pe(null),o=pe(rw),a=pe(sw),l=pe(null),u=pe("calm"),c=pe(null),f=pe(null),h=pe(!1),d=pe(null),g=pe(0),_=Bo(Object.fromEntries(Fl.map(I=>[I.id,!1])));let m=null,p=null,y=null,M=null,v=null,A=[],T=null,w=null,C=0,x=0;const S=()=>{m&&clearTimeout(m),p&&clearTimeout(p),y&&clearTimeout(y),M&&clearTimeout(M),v&&clearTimeout(v),T&&clearTimeout(T),w&&clearInterval(w),A.forEach(I=>clearTimeout(I)),m=null,p=null,y=null,M=null,v=null,T=null,w=null,C=0,x=0,A=[]},L=(I,k)=>I==="Ω-01"?["扫描红脊附近的地形回声","调取 NIA-7 首段现场片段","重组第一道建议窗口"]:k==="storm"?["压低风噪通道","过滤发光雾墙雪噪","锁定建议窗口"]:k==="fissure"?["提取裂口深度回波","压住过曝蓝光","重组下行窗口"]:k==="magnetic"?["清理重复地形图层","同步残留相位","恢复窗口文本"]:k==="skyfold"?["校准高空星图偏移","固定最终链路锚点","展开最后一道窗口"]:["校准链路噪声","调取现场片段","建立建议窗口"],U=I=>I==="storm"?[{id:"stabilize",label:"稳定链路增益",result:"风噪被压低了一些，语音边缘更清楚了。"},{id:"sweep",label:"扫频过滤雪噪",result:"高频雪噪被剔除了，画面不再整片发白。"},{id:"route",label:"重标记前方路径",result:"你给她补了一条临时路径线，前方轮廓短暂稳定。"}]:I==="fissure"?[{id:"depth",label:"校准深度回波",result:"裂缝边缘的深度回波开始成形。"},{id:"exposure",label:"压低裂口炫光",result:"过曝被压下去，底部轮廓露出来了一点。"},{id:"anchor",label:"固定链路锚点",result:"你把信号锚在裂口边缘，掉帧没那么严重了。"}]:I==="magnetic"?[{id:"phase",label:"重同步相位",result:"两套地形开始偶尔重合，错误地图不再一直覆盖。"},{id:"checksum",label:"校验旧地图层",result:"一部分失真的图层被识别成旧回响。"},{id:"trim",label:"裁掉噪声通道",result:"只剩几个核心参数还在跳动，但链路更稳了。"}]:I==="skyfold"?[{id:"align",label:"对齐天幕坐标",result:"高空光带不再整片错位，星图边缘开始成形。"},{id:"pulse",label:"发送定位脉冲",result:"回响回来了一个清晰峰值，你抓住了它。"},{id:"shield",label:"压住失真外溢",result:"链路边缘没那么撕裂了，最后一条窗口更稳。"}]:[{id:"stabilize",label:"稳定链路",result:"底噪降下去了一点，信号更像一条完整线路了。"},{id:"scan",label:"扫一遍场景",result:"轮廓线短暂变亮，你多拿到了一点现场信息。"},{id:"route",label:"标记临时路径",result:"系统接受了你的标记，前方区域不再完全模糊。"}],z=()=>({trust:e.trust,risk:e.risk,truth:e.truth}),K=I=>{const k=I.trust*2-I.risk,ot=I.truth*2+I.risk,at=I.risk*2-I.trust-I.truth;let _t="liminal";at>=4&&I.risk>=I.truth+1?_t="collapse":k>=ot+2?_t="return":ot>=k+2&&(_t="truth");const Ut=_t==="return"?"SAFE RETURN VECTOR":_t==="collapse"?"PRESSURE VECTOR":_t==="truth"||I.truth>=I.trust?"WITNESS VECTOR":"SAFE RETURN VECTOR";return{...I,bond:k,descent:ot,strain:at,dominant:_t,vector:Ut}},J=(I,k)=>k.dominant==="return"?`${I}<br/><span class="hl">她一路都在等你把“回来”说出口。现在这句话终于有了重量。</span>`:k.dominant==="truth"?`${I}<br/><span class="hl">你前面每一次逼近都把她推得更深。现在不是要不要看见，而是看见以后还能不能回来。</span>`:k.dominant==="collapse"?`${I}<br/><span class="hl">你们之前积累的高压还没退。这个窗口不是单纯的选择题，而是一次止损或失联的分界。</span>`:`${I}<br/><span class="hl">她对你的信任和对山的执念都还没压过对方。最后这句话会决定哪一边先落地。</span>`,$=(I,k)=>I.map(ot=>{if(ot.id==="E1"){if(k.dominant==="return")return{...ot,label:"返回。把她完整带回来，结束这条已经够深的路线"};if(k.dominant==="truth")return{...ot,label:"现在回头。承认你们已经看得够深了"};if(k.dominant==="collapse")return{...ot,label:"强制返撤。趁链路还撑得住把她拉回来"}}if(ot.id==="E2"){if(k.dominant==="truth")return{...ot,label:"继续深入。把前面一路换来的真相走到底"};if(k.dominant==="return")return{...ot,label:"违背前面的谨慎，赌最后一次逼近"};if(k.dominant==="collapse")return{...ot,label:"继续硬压。接受她可能直接断在更深处"}}if(ot.id==="E3"){if(k.dominant==="liminal")return{...ot,label:"留在原地，把这条摇晃的链路撑到最后"};if(k.dominant==="return")return{...ot,label:"先不撤离，停在原地把回程坐标钉死"};if(k.dominant==="truth")return{...ot,label:"别再前进，留在回响中心守住最后一层画面"}}return ot}),j=()=>lw.find(I=>!_[I])??null,G=()=>{T&&clearTimeout(T),w&&clearInterval(w),T=null,w=null,C=0,x=0,d.value=null,g.value=0},pt=I=>{G(),R(I,cw[I]??3)},vt=(I,k=yp)=>{if(!(!h.value||r.value||i.value||c.value||f.value)){if(typeof document<"u"&&document.hidden){d.value=I,g.value=k,x=k;return}T&&clearTimeout(T),w&&clearInterval(w),d.value=I,g.value=k,x=0,C=Date.now()+k,w=setInterval(()=>{g.value=Math.max(0,C-Date.now())},100),T=setTimeout(()=>{pt(I)},k)}},St=(I=yp)=>{const k=j();if(!k){G();return}vt(k,I)},Pt=()=>{!d.value||!C||(x=Math.max(0,C-Date.now()),T&&clearTimeout(T),w&&clearInterval(w),T=null,w=null,C=0,g.value=x)},Qt=()=>{!d.value||!x||vt(d.value,x)},st=()=>{if(!(typeof document>"u")){if(document.hidden){Pt();return}Qt()}},mt=()=>{e.trust=0,e.risk=0,e.truth=0},Ct=()=>{Object.keys(_).forEach(I=>{_[I]=!1})},yt=()=>{S(),G(),i.value=null,r.value=null,s.value=null,c.value=null,f.value=null,l.value=null,u.value="calm",h.value=!1,t.value=0,o.value=nw,a.value=iw,mt(),Ct()},Bt=()=>{S(),G(),i.value=null,r.value=null,s.value=null,c.value=null,f.value=null,l.value=null,u.value="calm",h.value=!1},kt=(I,k=2600)=>{y&&clearTimeout(y),l.value=I,y=setTimeout(()=>{l.value=null},k)},Wt=()=>{s.value=0,h.value=!1},fe=()=>s.value===null?!1:s.value<gp.length-1?(s.value+=1,!1):(s.value=null,h.value=!0,a.value="NIA-7 awaiting your first instruction.",u.value="quake",kt(ow,3e3),!0),D=(I,k=0)=>{e[I]=Math.max(0,e[I]+k)},B=(I,k)=>{const ot=K(k);return I.id==="E1"?ot.dominant==="return"||ot.bond>=3?{code:"SAFE RETURN",vector:"SAFE RETURN VECTOR",title:"带回山风的人",summary:"NIA-7 离开了 WERISS。她没有带出全部答案，但她把这条链路和自己的呼吸一起带回来了。",body:"你前面给出的每一次谨慎都在替这句“回头”蓄力。归档里只留下了一段被反复擦除的地形记录，以及一句她拒绝解释的话: “你那天让我回头，所以我才确认，山后面真的还有路。”"}:{code:"FRACTURED RETURN",vector:ot.vector,title:"折返时带着雪噪的人",summary:"NIA-7 最终回来了，但你们前面一路压出来的高压没有一并退去。她带回的是人，以及一段永远对不齐的记录。",body:"这不是轻松的生还。你在前半程把她推得太深，最后这句“回头”更像一次硬生生的折返。她回来后很久都不肯复盘，只说山里有些东西不是看见了就能带走的。"}:I.id==="E2"?ot.dominant==="truth"&&ot.truth>=4?{code:"FIRST ARRIVAL",vector:ot.risk>=ot.truth?"PRESSURE VECTOR":"WITNESS VECTOR",title:"先抵达的人",summary:"链路在最后几十秒里一段一段掉帧，你没有再收到她完整的声音，只剩一张不断重写的山脊星图。",body:"任务归档会把这次行动标成失败，但你知道那不是失败。那是一场到达。她继续向前，把真相送进了你再也无法跟上的深处。"}:{code:"WHITEOUT LOSS",vector:"PRESSURE VECTOR",title:"断在更深处的人",summary:"你让她继续往前，但前面几次高压和误判已经把这条路线磨到极限。最后留下的不是抵达，而是失联。",body:"归档只收到了几段碎裂的高度数据和一句被雪噪切断的话。你知道她确实走进去了，只是这一次，前面那些选择没有把路铺成“到达”，而是铺成了“消失”。"}:ot.dominant==="liminal"&&ot.trust>=2&&ot.truth>=2?{code:"ECHO LOOP",vector:"WITNESS VECTOR",title:"另一端的人",summary:"NIA-7 没有继续，也没有返回。她把自己留在回响最强的那一层，只为了把链路再撑久一点。",body:"在连接熄灭前，你收到了最后一条短讯: “如果下一次你还会听见我，第一句别问我在哪里。先告诉我，左边那道山脊后面发红的东西，到底是什么。”"}:{code:"ANCHOR VIGIL",vector:ot.vector,title:"留在风暴中心的人",summary:"她停在回响中心，不是为了永远留在那里，而是为了把你们前面一路没能确认的东西再钉牢一点。",body:"这是一个被前面所有犹豫和逼近共同推出来的停顿。她没有真正回来，也没有继续深入，只是把自己变成了链路最后的锚点，让这场行动以悬置而不是结论收尾。"}},R=(I,k)=>{const ot=xp.get(I);if(!ot||_[I]||!h.value)return;S(),G();const at=vp[I],_t=at?uw[at.mode]:1400;at&&(u.value=at.mode,kt(at,2200)),c.value={id:I,title:ot.title,subtitle:ot.subtitle,dist:k.toFixed(1),prompt:at?`链路正在穿过 ${at.title}，先做一点预热工作。`:"第一道回响正在成形，先把链路稳住。",progress:0,windowReady:!1,actions:U((at==null?void 0:at.mode)??"calm"),usedActions:[],lastResult:"正式建议窗口还没建立。先做一次链路预热。"};const Ut=()=>{!c.value||c.value.id!==I||(c.value={...c.value,windowReady:!0,lastResult:c.value.progress>0?"窗口已经稳定。你可以接入正式建议。":"窗口已经稳定，但你最好先做一次链路预热。"})},ht=Math.max(ot.delayMs??0,_t);M=setTimeout(Ut,ht)},ut=()=>{var Ut;if(!c.value||!c.value.windowReady||c.value.progress<1)return;const I=c.value,k=xp.get(I.id);if(!k){c.value=null;return}c.value=null;const ot=((Ut=vp[I.id])==null?void 0:Ut.mode)??"calm",at=L(I.id,ot),_t=I.id==="Ω-01"?2200:1550;f.value={id:I.id,title:I.title,subtitle:I.subtitle,dist:I.dist,mode:ot,lead:I.id==="Ω-01"?"正在检索首道回响片段":"正在调取现场数据",steps:at,stepIndex:0,progress:.12},at.forEach((ht,xt)=>{const It=Math.round(_t/at.length*xt),Et=setTimeout(()=>{!f.value||f.value.id!==I.id||(f.value={...f.value,stepIndex:xt,progress:Math.min(.3+(xt+1)/at.length*.62,.96)})},It);A.push(Et)}),v=setTimeout(()=>{const ht=I.progress,xt=I.id===yo?K(z()):null;i.value={id:I.id,title:I.title,subtitle:I.subtitle,dist:I.dist,message:xt?J(k.message,xt):k.message,choices:(xt?$(k.choices,xt):k.choices).map(It=>({...It,obscured:It.obscured&&ht<2})),stage:"choice"},f.value=null,v=null,A=[]},_t)},Z=I=>{if(!c.value)return;const k=c.value.actions.find(ot=>ot.id===I);!k||c.value.usedActions.includes(I)||(c.value={...c.value,progress:Math.min(3,c.value.progress+1),usedActions:[...c.value.usedActions,I],lastResult:c.value.windowReady?`${k.result} 正式窗口已稳定，可以接入。`:`${k.result} 正式窗口还在生成。`})},nt=I=>{if(!i.value||i.value.stage!=="choice")return null;const k=i.value.id,ot=k===yo?z():null;Object.entries(I.effects).forEach(([_t,Ut])=>{D(_t,Ut)}),_[k]=!0,o.value=I.id,a.value="READING SIGNAL...";const at=aw[I.id];return at&&(u.value=at.mode,kt(at,2600)),i.value={...i.value,stage:"response",selectedChoice:I,reply:""},p=setTimeout(()=>{i.value&&(a.value=I.reply,i.value={...i.value,reply:I.reply},m=setTimeout(()=>{k===yo&&ot&&(r.value=B(I,ot)),i.value=null,k!==yo&&St()},3600))},900),k},rt=un(()=>Object.values(_).filter(I=>!I).length),ft=un(()=>n.value?r.value?"LINK RESOLVED":s.value!==null?"ROLE BRIEFING":f.value?"WINDOW SYNC":i.value?"LIVE ADVISORY WINDOW":"LINK TRACKING":"LINK STANDBY"),tt=un(()=>s.value===null?null:gp[s.value]),b=un(()=>K(z()).vector),E=un(()=>[{label:"TRUST",value:e.trust},{label:"RISK",value:e.risk},{label:"TRUTH",value:e.truth}]),O=un(()=>{if(!d.value)return"STANDBY";const I=Math.ceil(g.value/1e3);return`${d.value} IN ${I.toString().padStart(2,"0")}s`}),Y=un(()=>[`LINK::${n.value?"OPEN":"SEALED"}.............`,"FIELD_UNIT: NIA-7",`TRUST_INDEX: ${e.trust.toString().padStart(2,"0")}`,`RISK_VECTOR: ${e.risk.toString().padStart(2,"0")}`,`TRUTH_DEPTH: ${e.truth.toString().padStart(2,"0")}`,`ROUTE_MARKERS: ${t.value.toString().padStart(2,"0")}`,`NEXT_WINDOW: ${O.value}`,`LAST_ADVICE: ${o.value}`,`FIELD_REPLY: ${a.value}`]);return Js(()=>{typeof document<"u"&&document.addEventListener("visibilitychange",st)}),wl(()=>{typeof document<"u"&&document.removeEventListener("visibilitychange",st),G()}),{activeTransmission:i,advanceIntroBriefing:fe,completedSignals:_,dataLines:Y,dismissNarrative:Bt,endingPanel:r,introBriefing:tt,introBriefingIndex:s,linkStatus:ft,bufferingTransmission:f,openTransmission:R,pendingSignals:rt,pendingTransmission:c,nextSignalCountdownMs:g,nextSignalLabel:O,openPendingTransmission:ut,scheduleUpcomingSignal:St,performPrepAction:Z,resetSession:yt,environmentMode:u,sceneCue:l,sendAdvice:nt,signalsArmed:h,startIntroBriefing:Wt,statDisplay:E,stats:e,triggerSceneCue:kt,vectorLabel:b}}const hw=120,dw=80,pw=40,mw=26;function _w({activeTransmission:n,canvasEl:t,completedSignals:e,isExploring:i,rippleEl:r,routeMarkers:s,environmentMode:o,sceneCue:a,signalsArmed:l,tourSpeed:u}){const c=Fl.map(V=>({id:V.id,pos:new N(V.position.x,V.position.y,V.position.z),triggered:!1,completed:!1}));let f,h,d,g=0,_,m,p,y,M,v=[],A,T,w=[],C,x=[],S,L=[],U,z,K,J=[],$=[],j,G=0,pt=null,vt=0;const St=[],Pt=new ag,Qt=new zt,st=new Zt(655365),mt=new Zt(197125),Ct=new Zt(7854079),yt=new Zt(13378048),Bt=new N,kt={"Ω-01":{offset:new N(-4.8,2.8,4.4),lookOffset:new N(.4,1.1,-2.8),damping:.045,fov:58,wobbleX:.18,wobbleY:.08},"Ψ-02":{offset:new N(5.2,1.6,4.8),lookOffset:new N(-.8,.6,-2.4),damping:.06,fov:64,wobbleX:.35,wobbleY:.12},"Δ-03":{offset:new N(.7,-.9,2.2),lookOffset:new N(0,-1.4,-3.2),damping:.07,fov:71,wobbleX:.06,wobbleY:.05},"Λ-04":{offset:new N(-2.8,2.2,3.1),lookOffset:new N(1.2,.4,-2.6),damping:.055,fov:62,wobbleX:.24,wobbleY:.16},"X-05":{offset:new N(0,5.8,8.2),lookOffset:new N(0,4.4,-6),damping:.038,fov:72,wobbleX:.1,wobbleY:.05}},Wt={"Ω-01":{position:new N(-10.5,4.6,14.8),lookAt:new N(-6.8,2.2,7),fov:60,damping:.028},"Ψ-02":{position:new N(-4.4,3.8,10.4),lookAt:new N(0,2.8,1.2),fov:62,damping:.03},"Δ-03":{position:new N(3.8,3.2,9.4),lookAt:new N(7.2,1.4,7),fov:64,damping:.03},"Λ-04":{position:new N(-1.8,4.8,8.8),lookAt:new N(-5.1,2.9,3.2),fov:61,damping:.028},"X-05":{position:new N(1.2,6.6,16.4),lookAt:new N(4,4.4,10),fov:68,damping:.024}},fe=V=>{switch(V){case"quake":return{fogDensity:.028,fogColor:1378058,clearColor:262660,wireColor:16748349,sunColor:16734774,hazeOpacity:.28,shake:.1,cameraLift:.35,cameraPush:-.25};case"storm":return{fogDensity:.036,fogColor:528666,clearColor:263947,wireColor:9560063,sunColor:11454975,hazeOpacity:.34,shake:.06,cameraLift:.18,cameraPush:-.45};case"fissure":return{fogDensity:.044,fogColor:132874,clearColor:131845,wireColor:7005183,sunColor:5164031,hazeOpacity:.42,shake:.08,cameraLift:-.8,cameraPush:-.95};case"whiteout":return{fogDensity:.052,fogColor:14410986,clearColor:11187908,wireColor:16055295,sunColor:15003384,hazeOpacity:.5,shake:.03,cameraLift:.15,cameraPush:-.1};case"magnetic":return{fogDensity:.03,fogColor:459795,clearColor:196871,wireColor:16742391,sunColor:8118527,hazeOpacity:.22,shake:.12,cameraLift:.22,cameraPush:-.18};case"skyfold":return{fogDensity:.018,fogColor:590607,clearColor:131333,wireColor:16766829,sunColor:16774067,hazeOpacity:.16,shake:.04,cameraLift:.65,cameraPush:.18};default:return{fogDensity:.022,fogColor:655365,clearColor:197125,wireColor:7854079,sunColor:13378048,hazeOpacity:.18,shake:0,cameraLift:0,cameraPush:0}}},D=(V,W)=>{const ct=V.material;if(Array.isArray(ct)){ct.forEach(Mt=>{Mt.transparent=!0,Mt.opacity=W});return}ct.transparent=!0,ct.opacity=W},B=(V,W)=>{V.visible=W>.01,V.traverse(ct=>{if(ct instanceof xe&&D(ct,W),ct instanceof Cc){const Mt=ct.material;Mt.transparent=!0,Mt.opacity=W}})},R=()=>{var V;return((V=c.find(W=>!e[W.id]))==null?void 0:V.id)??yo},ut=(V,W)=>{let ct=0,Mt=1,qt=1;const ne=[1,.52,.52*.52,.52*.52*.52,.52*.52*.52*.52].reduce((Vt,Kt)=>Vt+Kt,0);for(let Vt=0;Vt<5;Vt+=1)ct+=Math.sin(V*qt*.4+qt)*Math.cos(W*qt*.35+qt*.7)*Mt,ct+=Math.sin(V*qt*.7+qt*2.1)*Math.sin(W*qt*.6+qt*1.3)*Mt*.5,Mt*=.52,qt*=2.1;return ct/(ne*1.5)},Z=V=>{if(V.mesh){const W=V.mesh.material;W.color.set(8118527),W.opacity=.9,V.mesh.scale.setScalar(1)}if(V.ring){const W=V.ring.material;W.color.set(16762967),W.opacity=.35,V.ring.rotation.set(0,0,0)}V.light&&(V.light.color.set(8118527),V.light.intensity=2)},nt=V=>{if(V.mesh){const W=V.mesh.material;W.color.set(16762967),W.opacity=.75}if(V.ring){const W=V.ring.material;W.color.set(8118527),W.opacity=.18}V.light&&(V.light.color.set(16762967),V.light.intensity=.8)},rt=V=>{const W=e[V.id];if(V.completed!==W){if(V.completed=W,V.completed){nt(V);return}Z(V)}},ft=()=>{const V=new ni(pw,mw,hw,dw);V.rotateX(-Math.PI/2);const W=V.attributes.position;_=new Float32Array(W.count);for(let Kt=0;Kt<W.count;Kt+=1){const oe=W.getX(Kt),gn=W.getZ(Kt),ui=Math.exp(-((gn+2)**2)/40)*3.5,aa=ut(oe,gn)*4+ui,no=Math.max(aa,-.5);W.setY(Kt,no),_[Kt]=no}V.computeVertexNormals(),m=new xe(V,new Fd({color:3613717,roughness:.9,metalness:.15,emissive:new Zt(2754568),emissiveIntensity:1.2,side:Yi})),m.receiveShadow=!0,h.add(m);const ct=V.clone();p=new xe(ct,new Ge({color:7854079,wireframe:!0,transparent:!0,opacity:.32})),h.add(p);const Mt=V.clone(),qt=Mt.attributes.position;for(let Kt=0;Kt<qt.count;Kt+=1)qt.setY(Kt,qt.getY(Kt)-.08);Mt.computeVertexNormals(),h.add(new xe(Mt,new Ge({color:16748349,wireframe:!0,transparent:!0,opacity:.07})));const Yt=new Hd(16737826,2.5);Yt.position.set(0,20,-15),Yt.castShadow=!0,h.add(Yt);const ne=new Hd(16724736,1.4);ne.position.set(0,5,20),h.add(ne),h.add(new rS(3346722,2.5));const Vt=new Vd(16757575,8,20);Vt.position.set(2,.5,2),h.add(Vt)},tt=()=>{y=new xe(new Hr(2.2,32,32),new Ge({color:13378048})),y.position.set(8,14,-25),h.add(y),M=new xe(new Hr(3.2,32,32),new Ge({color:16724736,transparent:!0,opacity:.15,side:Je})),y.add(M),y.add(new xe(new Hr(5.5,32,32),new Ge({color:6684689,transparent:!0,opacity:.07,side:Je}))),v=[];for(let V=0;V<12;V+=1){const W=V/12*Math.PI*2,ct=3+Math.random()*3,Mt=new xe(new ni(.15+Math.random()*.2,ct),new Ge({color:16720384,transparent:!0,opacity:.12+Math.random()*.1,side:je}));Mt.rotation.z=W,Mt.position.set(Math.cos(W)*(2.8+ct/2),Math.sin(W)*(2.8+ct/2),0),v.push(Mt),y.add(Mt)}},b=()=>{A=new xe(new ni(200,30),new Ge({color:5570576,transparent:!0,opacity:.18,depthWrite:!1,side:je})),A.rotation.x=Math.PI/2,A.position.set(0,.1,-10),h.add(A);const V=300,W=new _n,ct=new Float32Array(V*3);for(let Mt=0;Mt<V;Mt+=1)ct[Mt*3]=(Math.random()-.5)*160,ct[Mt*3+1]=Math.random()*40+5,ct[Mt*3+2]=(Math.random()-.5)*80-15;W.setAttribute("position",new Zn(ct,3)),h.add(new Cc(W,new Qu({color:16765056,size:.1,transparent:!0,opacity:.5})));for(let Mt=0;Mt<6;Mt+=1){const qt=[],Yt=(Math.random()-.5)*16,ne=(Math.random()-.5)*8-2;for(let Kt=0;Kt<=20;Kt+=1){const oe=Kt/20;qt.push(new N(Yt+Math.sin(oe*Math.PI*3+Mt)*oe*1.5,oe*(4+Math.random()*3),ne+Math.cos(oe*Math.PI*2.5+Mt*.7)*oe*1.2))}const Vt=new ig(qt);h.add(new xe(new eh(Vt,30,.03+Math.random()*.04,6,!1),new Ge({color:Mt%2===0?4521864:8913151,transparent:!0,opacity:.25+Math.random()*.2})))}},E=()=>{S=new Yr,L=[];for(let ct=0;ct<4;ct+=1){const Mt=new xe(new ni(6.5,10+ct*.7),new Ge({color:12445695,transparent:!0,opacity:0,depthWrite:!1,side:je}));Mt.position.set(-6+ct*4,4.5,-2-ct*1.8),Mt.rotation.y=-.18+ct*.12,L.push(Mt),S.add(Mt)}U=new xe(new Hr(18,32,20,0,Math.PI),new Ge({color:9296127,transparent:!0,opacity:0,side:Je,depthWrite:!1})),U.position.set(2,6,-12),S.add(U);const V=new _n,W=new Float32Array(320*3);for(let ct=0;ct<320;ct+=1)W[ct*3]=(Math.random()-.5)*18,W[ct*3+1]=Math.random()*10+1,W[ct*3+2]=(Math.random()-.5)*14;V.setAttribute("position",new Zn(W,3)),z=new Cc(V,new Qu({color:15267839,size:.12,transparent:!0,opacity:0,depthWrite:!1})),S.add(z),S.visible=!1,h.add(S)},O=()=>{T=new Yr,w=[],x=[];const V=new ni(5.5,9,8,12);for(let W=-1;W<=1;W+=2){const ct=new xe(V,new Fd({color:1449252,emissive:new Zt(663078),emissiveIntensity:1,transparent:!0,opacity:0,side:je}));ct.position.set(W*2.6,-.2,-1.8),ct.rotation.y=W*.42,ct.rotation.x=-.06,w.push(ct),T.add(ct)}C=new xe(new Jf(.22,1.05,11,18,1,!0),new Ge({color:6547711,transparent:!0,opacity:0,side:je,depthWrite:!1})),C.position.set(0,-1.8,-3.2),T.add(C);for(let W=0;W<18;W+=1){const ct=new xe(new th(.12+Math.random()*.22,0),new Ge({color:W%2===0?6547711:11924223,transparent:!0,opacity:0}));ct.position.set((Math.random()-.5)*2.8,-1.2+Math.random()*3.8,-2.4-Math.random()*3.8),x.push(ct),T.add(ct)}T.visible=!1,h.add(T)},Y=()=>{K=new Yr,J=[],$=[];for(let V=0;V<4;V+=1){const W=new xe(new vl(8+V*1.6,.06+V*.01,10,120,Math.PI*1.2),new Ge({color:V%2===0?16769169:8118527,transparent:!0,opacity:0,side:je}));W.rotation.x=Math.PI/2.1+V*.08,W.rotation.z=V*.35,W.position.set(0,10+V*.9,-10-V*1.6),J.push(W),K.add(W)}for(let V=0;V<6;V+=1){const W=new xe(new ni(.18,8+Math.random()*4),new Ge({color:16773314,transparent:!0,opacity:0,depthWrite:!1,side:je}));W.position.set(-8+V*3.2,6+Math.random()*2,-8-Math.random()*4),W.rotation.z=(Math.random()-.5)*.18,$.push(W),K.add(W)}K.visible=!1,h.add(K)},I=()=>{c.forEach(V=>{const W=new xe(new Hr(.18,16,16),new Ge({color:8118527,transparent:!0,opacity:.9}));W.position.copy(V.pos),h.add(W),V.mesh=W;const ct=new xe(new vl(.35,.03,8,32),new Ge({color:16762967,transparent:!0,opacity:.35}));ct.position.copy(V.pos),h.add(ct),V.ring=ct;const Mt=new Vd(8118527,2,6);Mt.position.copy(V.pos),h.add(Mt),V.light=Mt})},k=(V,W)=>{const ct=V==="storm"?.88:0,Mt=V==="fissure"?.94:0,qt=V==="skyfold"?.92:0;if(B(S,ct),B(T,Mt),B(K,qt),ct>.01){L.forEach((Vt,Kt)=>{Vt.position.x=-6+Kt*4+Math.sin(W*1.8+Kt)*.25,Vt.position.y=4.2+Math.sin(W*2.4+Kt*.3)*.2}),U.rotation.y+=.002;const Yt=U.material;Yt.opacity=.1+Math.sin(W*.9)*.04+ct*.18;const ne=z.geometry.attributes.position;for(let Vt=0;Vt<ne.count;Vt+=1){let Kt=ne.getY(Vt)-.22,oe=ne.getX(Vt)+.08;Kt<-1&&(Kt=11+Math.random()*3),oe>10&&(oe=-10),ne.setY(Vt,Kt),ne.setX(Vt,oe)}ne.needsUpdate=!0}if(Mt>.01){const Yt=C.material;Yt.opacity=.28+Math.sin(W*2.4)*.08+Mt*.16,C.scale.y=1+Math.sin(W*1.6)*.06,x.forEach((ne,Vt)=>{ne.position.y+=Math.sin(W*1.2+Vt)*.002,ne.rotation.x+=.01+Vt*4e-4,ne.rotation.y+=.02+Vt*3e-4})}qt>.01&&(J.forEach((Yt,ne)=>{Yt.rotation.z+=.0015+ne*4e-4,Yt.rotation.x=Math.PI/2.1+ne*.08+Math.sin(W*.7+ne)*.02}),$.forEach((Yt,ne)=>{Yt.position.y=6+ne*.18+Math.sin(W*1.5+ne*.5)*.28}))},ot=(V,W)=>{const ct=c.find(qt=>qt.id===V),Mt=kt[V];return!ct||!Mt?null:{position:Bt.copy(ct.pos).add(Mt.offset).add(new N(Math.sin(W*.8+ct.pos.x)*Mt.wobbleX,Math.sin(W*1.1+ct.pos.z)*Mt.wobbleY,0)),lookAt:ct.pos.clone().add(Mt.lookOffset),damping:Mt.damping,fov:Mt.fov}},at=(V,W)=>{const ct=Wt[V];return ct?{position:ct.position.clone().add(new N(Math.sin(W*.22+ct.position.x)*.18,Math.sin(W*.16+ct.position.z)*.08,Math.cos(W*.18+ct.position.y)*.12)),lookAt:ct.lookAt.clone().add(new N(Math.sin(W*.15)*.4,Math.sin(W*.12+.8)*.12,0)),damping:ct.damping*(.9+u.value*.15),fov:ct.fov}:null},_t=()=>{var Mt;if(!d||!m)return;const V=new N(d.position.x,40,d.position.z);Pt.set(V,new N(0,-1,0));const ct=(((Mt=Pt.intersectObject(m,!1)[0])==null?void 0:Mt.point.y)??0)+1.35;d.position.y<ct&&(d.position.y+=(ct-d.position.y)*.35)},Ut=()=>{if(!(!pt||!r.value)){pt.clearRect(0,0,r.value.width,r.value.height);for(let V=St.length-1;V>=0;V-=1){const W=St[V];if(W.r+=3.5,W.alpha-=.012,W.alpha<=0){St.splice(V,1);continue}pt.beginPath(),pt.arc(W.x,W.y,W.r,0,Math.PI*2),pt.strokeStyle=`rgba(204, 26, 26, ${W.alpha})`,pt.lineWidth=1.5,pt.stroke(),pt.beginPath(),pt.arc(W.x,W.y,W.r*.6,0,Math.PI*2),pt.strokeStyle=`rgba(34, 255, 100, ${W.alpha*.4})`,pt.lineWidth=.8,pt.stroke()}}},ht=()=>{var ne;if(g=requestAnimationFrame(ht),!f||!h||!d||!p||!m||!y||!M)return;const V=j.getElapsedTime(),W=p.geometry.attributes.position,ct=m.geometry.attributes.position;for(let Vt=0;Vt<W.count;Vt+=1){const Kt=W.getX(Vt),oe=W.getZ(Vt),gn=Math.sin(Kt*.4+V*.6)*.18+Math.sin(oe*.55+V*.45)*.14+Math.sin((Kt+oe)*.3+V*.8)*.1,ui=_[Vt]+gn;W.setY(Vt,ui),ct.setY(Vt,ui)}W.needsUpdate=!0,ct.needsUpdate=!0,p.geometry.computeVertexNormals(),m.geometry.computeVertexNormals();const Mt=((ne=a.value)==null?void 0:ne.mode)??o.value,qt=fe(Mt);vt+=((a.value?qt.shake:0)-vt)*.06,st.lerp(new Zt(qt.fogColor),.04),mt.lerp(new Zt(qt.clearColor),.04),Ct.lerp(new Zt(qt.wireColor),.06),yt.lerp(new Zt(qt.sunColor),.05),h.fog.color.copy(st),h.fog.density+=(qt.fogDensity-h.fog.density)*.05,f.setClearColor(mt,1),p.material.color.copy(Ct),y.material.color.copy(yt),M.material.color.copy(yt),A.material.opacity+=(qt.hazeOpacity-A.material.opacity)*.04,k(Mt,V);const Yt=1+Math.sin(V*1.2)*.03+Math.sin(V*3.7)*.01+vt*.08;if(y.scale.setScalar(Yt),M.material.opacity=.1+Math.sin(V*.8)*.06,v.forEach((Vt,Kt)=>{Vt.material.opacity=.06+Math.sin(V*(1.5+Kt*.4)+Kt)*.08}),i.value){const Vt=n.value?ot(n.value.id,V):null,Kt=Vt?null:at(R(),V);Vt?(d.position.x+=(Vt.position.x-d.position.x)*Vt.damping,d.position.y+=(Vt.position.y-d.position.y)*Vt.damping,d.position.z+=(Vt.position.z-d.position.z)*Vt.damping,d.fov+=(Vt.fov-d.fov)*.05,d.updateProjectionMatrix(),d.lookAt(Vt.lookAt)):Kt&&(d.position.x+=(Kt.position.x-d.position.x)*Kt.damping,d.position.y+=(Kt.position.y+qt.cameraLift*.35-d.position.y)*Kt.damping,d.position.z+=(Kt.position.z+qt.cameraPush*.35-d.position.z)*Kt.damping,d.fov+=(Kt.fov-d.fov)*.04,d.updateProjectionMatrix(),d.lookAt(Kt.lookAt)),vt>.01&&(d.position.x+=(Math.random()-.5)*vt,d.position.y+=(Math.random()-.5)*vt*.6),_t(),c.forEach(oe=>{if(!oe.mesh||!oe.light)return;rt(oe);const gn=oe.completed?.55+Math.sin(V*2.2+oe.pos.x)*.06:.72+Math.sin(V*3+oe.pos.x)*.22;oe.mesh.scale.setScalar(gn),oe.light.intensity=oe.completed?.6+Math.sin(V*1.6+oe.pos.z)*.15:1.6+Math.sin(V*2.5+oe.pos.z)*.9,oe.ring&&(oe.ring.rotation.x+=.01,oe.ring.rotation.y+=.015);const ui=d.position.distanceTo(oe.pos);oe.triggered=!oe.completed&&l.value&&!n.value&&ui<3.5}),Ut()}else d.position.x+=(G*1.5-d.position.x)*.02,d.position.y=6+Math.sin(V*.3)*.3,d.fov+=(60-d.fov)*.05,d.updateProjectionMatrix(),d.lookAt(0,1+Math.sin(V*.2)*.2,0);f.render(h,d)};return{animateScene:ht,disposeScene:()=>{cancelAnimationFrame(g),f==null||f.dispose()},flyToTourStart:()=>{d&&Ft.to(d.position,{x:-10,y:4,z:14,duration:1.2,ease:"power2.out"})},initScene:()=>{t.value&&(j=new oS,f=new dg({canvas:t.value,antialias:!0,alpha:!1}),f.setSize(window.innerWidth,window.innerHeight),f.setPixelRatio(Math.min(window.devicePixelRatio,2)),f.setClearColor(197125,1),f.shadowMap.enabled=!0,h=new tg,h.fog=new Kf(655365,.022),d=new Sn(60,window.innerWidth/window.innerHeight,.1,200),d.position.set(0,6,18),d.lookAt(0,1,0),ft(),tt(),b(),E(),O(),Y(),I())},initializeRippleCanvas:()=>{r.value&&(r.value.width=window.innerWidth,r.value.height=window.innerHeight,pt=r.value.getContext("2d"))},onCanvasClick:V=>{if(!i.value||!l.value||!t.value||!d||!m||!f||(r.value&&St.push({x:V.clientX,y:V.clientY,r:0,maxR:120,alpha:.7}),Qt.set(V.clientX/window.innerWidth*2-1,-(V.clientY/window.innerHeight)*2+1),Pt.setFromCamera(Qt,d),Pt.intersectObject(m).length===0))return;s.value+=1;const ct=(Math.random()-.5)*.35,Mt=(Math.random()-.5)*.2;Ft.timeline().to(d.position,{x:`+=${ct}`,y:`+=${Mt}`,duration:.07,ease:"none"}).to(d.position,{x:`-=${ct*.8}`,y:`-=${Mt*.8}`,duration:.07,ease:"none"}).to(d.position,{x:`+=${ct*.15}`,y:`+=${Mt*.15}`,duration:.1,ease:"none"})},onMouseMove:V=>{G=(V.clientX/window.innerWidth-.5)*2},onResize:()=>{!d||!f||(d.aspect=window.innerWidth/window.innerHeight,d.updateProjectionMatrix(),f.setSize(window.innerWidth,window.innerHeight),r.value&&(r.value.width=window.innerWidth,r.value.height=window.innerHeight))},playIntroSequence:()=>{d&&(vt=.18,Ft.timeline().to(d.position,{x:-3,y:7.2,z:13,duration:.9,ease:"power2.out"}).to(d.position,{x:2.5,y:4.2,z:10.4,duration:1.4,ease:"power2.inOut"},"-=0.35").to(d.position,{x:-9.5,y:4.1,z:14.2,duration:1.1,ease:"power2.out"}))},resetSessionVisuals:()=>{St.length=0,vt=0,B(S,0),B(T,0),B(K,0),c.forEach(V=>{V.triggered=!1,V.completed=!1,Z(V)})},resetTour:()=>{},returnCameraHome:()=>{d&&Ft.to(d.position,{x:0,y:6,z:18,duration:2,ease:"power3.inOut"})}}}const gw={key:2,class:"intro-transition"},vw={class:"cue-frame"},xw={class:"cue-title"},yw={class:"cue-body"},Mw={class:"hud-status"},Sw={class:"data-stream"},Ew={class:"link-metrics"},bw={class:"metric-label"},Tw={class:"metric-value"},ww={class:"tour-speed"},Aw={class:"speed-val"},Cw={key:0,class:"briefing-panel"},Rw={class:"briefing-kicker"},Pw={class:"briefing-title"},Dw={class:"briefing-copy"},Lw={class:"briefing-progress"},Iw={class:"choice-copy"},Uw={key:0,class:"prep-panel"},Nw={class:"prep-header"},Ow={class:"prep-kicker"},Fw={class:"prep-dist"},Bw={class:"prep-title"},zw={class:"prep-body"},kw={class:"prep-progress"},Vw={class:"prep-instruction"},Hw={class:"prep-actions"},Gw=["disabled","onClick"],Ww={class:"prep-result"},Xw=["disabled"],qw={class:"buffer-header"},Yw={class:"buffer-kicker"},$w={class:"buffer-dist"},Kw={class:"buffer-title"},jw={class:"buffer-lead"},Zw={class:"buffer-progress"},Jw={class:"buffer-steps"},Qw={class:"buffer-step-index"},tA={key:0,class:"comms-popup"},eA={class:"signal-header"},nA={class:"signal-tag"},iA={class:"signal-dist"},rA={class:"signal-meta"},sA=["innerHTML"],oA={key:0,class:"choice-panel"},aA=["onClick"],lA={class:"choice-id"},cA={class:"choice-copy"},uA={key:1,class:"reply-panel"},fA={class:"outgoing-copy"},hA={key:0,class:"ending-panel"},dA={class:"ending-header"},pA={class:"ending-kicker"},mA={class:"ending-vector"},_A={class:"ending-title"},gA={class:"ending-summary"},vA={class:"ending-body"},xA={class:"ending-stats"},yA={class:"ending-stat"},MA={class:"ending-stat"},SA={class:"ending-stat"},EA={key:3,class:"click-hint"},bA=3,TA=g0({__name:"TechView",props:{active:{type:Boolean}},emits:["explore-mode"],setup(n,{emit:t}){const e=n,i=t,r=pe(null),s=pe(null),o=pe(null),a=pe(null),l=pe(!1),u=pe(!0),c=pe(!1),f=pe(1),h=pe(0),d=pe(!1);let g=null,_=null;const{activeTransmission:m,advanceIntroBriefing:p,bufferingTransmission:y,completedSignals:M,dataLines:v,dismissNarrative:A,endingPanel:T,environmentMode:w,introBriefing:C,introBriefingIndex:x,linkStatus:S,openPendingTransmission:L,pendingSignals:U,pendingTransmission:z,nextSignalLabel:K,performPrepAction:J,resetSession:$,scheduleUpcomingSignal:j,sceneCue:G,sendAdvice:pt,signalsArmed:vt,startIntroBriefing:St,statDisplay:Pt,stats:Qt,vectorLabel:st}=fw({isExploring:l,routeMarkers:h}),{animateScene:mt,disposeScene:Ct,flyToTourStart:yt,initScene:Bt,initializeRippleCanvas:kt,onCanvasClick:Wt,onMouseMove:fe,onResize:D,playIntroSequence:B,resetSessionVisuals:R,resetTour:ut,returnCameraHome:Z}=_w({activeTransmission:m,canvasEl:r,completedSignals:M,isExploring:l,environmentMode:w,rippleEl:a,routeMarkers:h,sceneCue:G,signalsArmed:vt,tourSpeed:f}),nt=un(()=>`mode-${w.value}`),rt=un(()=>l.value?x.value===null?1:[.12,.32,.58][x.value]??.12:.04),ft=un(()=>rt.value<1),tt=un(()=>l.value&&!T.value),b=un(()=>{var Et,it;return!!((Et=z.value)!=null&&Et.windowReady)&&(((it=z.value)==null?void 0:it.progress)??0)>0}),E=un(()=>{const Et=8+rt.value*60,it=Math.max(Et-18,0),Tt=Math.max(Et-8,0);return{background:`radial-gradient(circle at 50% 56%, rgba(3, 2, 5, 0) 0%, rgba(3, 2, 5, 0.05) ${it}%, rgba(3, 2, 5, 0.22) ${Tt}%, rgba(3, 2, 5, 0.68) ${Et}%, rgba(1, 1, 4, 0.98) 100%)`}}),O=un(()=>{const Et=new Date;return`${Et.getFullYear()}.${String(Et.getMonth()+1).padStart(2,"0")}.${String(Et.getDate()).padStart(2,"0")}`}),Y=()=>{u.value=!0,c.value=!1,bo(()=>{s.value&&!l.value&&(Ft.killTweensOf(s.value),s.value.style.opacity="1",s.value.style.transform="translateY(0)"),o.value&&!l.value&&(Ft.killTweensOf(o.value),o.value.style.opacity="0",o.value.style.transform="translateY(20px)")})},I=()=>{g&&clearTimeout(g),_&&clearTimeout(_),d.value=!1,l.value=!1,A(),R(),ut(),Z(),i("explore-mode",!1),Y()},k=()=>{l.value||(l.value=!0,i("explore-mode",!0),$(),R(),ut(),St(),B(),s.value?(Ft.killTweensOf(s.value),Ft.to(s.value,{opacity:0,y:-30,duration:.8,ease:"power2.in",onComplete:()=>{l.value&&(u.value=!1)}})):u.value=!1,c.value=!0,bo(()=>{o.value&&(Ft.killTweensOf(o.value),Ft.fromTo(o.value,{opacity:0,y:20},{opacity:1,y:0,duration:.8,delay:.6,ease:"power2.out"}))}))},ot=()=>{g&&clearTimeout(g),_&&clearTimeout(_),d.value=!0,g=setTimeout(()=>{p()&&(yt(),j())},220),_=setTimeout(()=>{d.value=!1},620)},at=Et=>{pt(Et)},_t=Et=>{J(Et)},Ut=()=>{L()},ht=()=>{l.value&&(l.value=!1,i("explore-mode",!1),A(),o.value?(Ft.killTweensOf(o.value),Ft.to(o.value,{opacity:0,y:20,duration:.5,ease:"power2.in",onComplete:()=>{l.value||(c.value=!1)}})):c.value=!1,u.value=!0,bo(()=>{s.value&&(Ft.killTweensOf(s.value),Ft.fromTo(s.value,{opacity:0,y:-30},{opacity:1,y:0,duration:.8,delay:.3,ease:"power2.out"}))}),Z())},xt=()=>{l.value&&($(),R(),ut(),St(),B())},It=Et=>{Et.key==="Escape"&&l.value&&ht()};return To(()=>e.active,Et=>{if(!Et){I();return}Et&&Y()},{immediate:!0}),Js(()=>{var Et;Bt(),mt(),window.addEventListener("mousemove",fe),window.addEventListener("resize",D),window.addEventListener("keydown",It),kt(),(Et=r.value)==null||Et.addEventListener("click",Wt)}),Al(()=>{var Et;g&&clearTimeout(g),_&&clearTimeout(_),window.removeEventListener("mousemove",fe),window.removeEventListener("resize",D),window.removeEventListener("keydown",It),(Et=r.value)==null||Et.removeEventListener("click",Wt),A(),Ct()}),(Et,it)=>(ie(),se("div",{class:Fe(["page-tech",nt.value])},[F("canvas",{ref_key:"canvasEl",ref:r,class:"scene-canvas"},null,512),tt.value?(ie(),se("div",{key:0,class:Fe(["corner-matte",{"corner-matte-intro":ft.value}])},null,2)):Gn("",!0),ft.value?(ie(),se("div",{key:1,class:"intro-shroud",style:ri(E.value)},null,4)):Gn("",!0),d.value?(ie(),se("div",gw)):Gn("",!0),it[21]||(it[21]=F("div",{class:"scanline-overlay"},null,-1)),it[22]||(it[22]=F("div",{class:"chromatic-edge"},null,-1)),F("div",{class:Fe(["weather-overlay",nt.value])},null,2),it[23]||(it[23]=F("div",{class:"noise-overlay"},null,-1)),Ae(or,{name:"cue"},{default:Ui(()=>[Rt(G)&&!Rt(m)&&!Rt(C)&&!Rt(T)?(ie(),se("div",{key:0,class:Fe(["scene-cue",`cue-${Rt(G).mode}`])},[it[2]||(it[2]=F("div",{class:"cue-weather"},null,-1)),F("div",vw,[it[1]||(it[1]=F("div",{class:"cue-kicker"},"FIELD SHIFT",-1)),F("h2",xw,Lt(Rt(G).title),1),F("p",yw,Lt(Rt(G).body),1)])],2)):Gn("",!0)]),_:1}),it[24]||(it[24]=F("div",{class:"hud-corner tl"},null,-1)),it[25]||(it[25]=F("div",{class:"hud-corner tr"},null,-1)),it[26]||(it[26]=F("div",{class:"hud-corner bl"},null,-1)),it[27]||(it[27]=F("div",{class:"hud-corner br"},null,-1)),F("div",Mw,[F("div",null,[it[3]||(it[3]=F("span",{class:"status-dot"},null,-1)),Ha(Lt(Rt(S)),1)]),F("div",null,Lt(O.value),1),it[4]||(it[4]=F("div",null,"FIELD UNIT: NIA-7",-1)),F("div",null,"PENDING WINDOWS: "+Lt(Rt(U)),1),F("div",null,"NEXT WINDOW: "+Lt(Rt(K)),1),F("div",null,"VECTOR: "+Lt(Rt(st)),1)]),F("div",Sw,[(ie(!0),se(Ue,null,Xn(Rt(v),(Tt,Ot)=>(ie(),se("div",{key:Ot,class:"data-line",style:ri({animationDelay:`${Ot*.3}s`})},Lt(Tt),5))),128))]),Ps(F("div",{class:"tech-content",ref_key:"contentEl",ref:s},[it[6]||(it[6]=sv('<div class="tech-label" data-v-d54ed54e>// ECHO DESK · REMOTE ADVISORY LINK</div><h1 class="tech-title" data-text="WERISS" data-v-d54ed54e>WERISS</h1><div class="tech-tagline" data-v-d54ed54e><span class="tag-line" data-v-d54ed54e></span> YOU CANNOT ENTER, BUT YOUR WORDS ARRIVE FIRST </div><div class="tech-description" data-v-d54ed54e> 回响链路已重连。<br data-v-d54ed54e> 一名进入山脉的实地人员正在向你发送失真信号。<br data-v-d54ed54e><span class="red-text" data-v-d54ed54e>你只有几秒</span>决定她下一步该怎么走。 </div>',4)),F("button",{class:"tech-btn",onClick:k},[...it[5]||(it[5]=[F("span",{class:"btn-bracket"},"[",-1),Ha(" LINK IN ",-1),F("span",{class:"btn-bracket"},"]",-1)])])],512),[[Po,u.value]]),Ps(F("div",{class:"explore-hud",ref_key:"exploreHudEl",ref:o},[F("div",Ew,[(ie(!0),se(Ue,null,Xn(Rt(Pt),Tt=>(ie(),se("div",{key:Tt.label,class:"metric-chip"},[F("span",bw,Lt(Tt.label),1),F("span",Tw,Lt(Tt.value),1)]))),128))]),F("div",ww,[it[7]||(it[7]=F("span",{class:"speed-label"},"CRUISE SPEED",-1)),Ps(F("input",{type:"range",min:"0.2",max:"3",step:"0.1","onUpdate:modelValue":it[0]||(it[0]=Tt=>f.value=Tt),class:"speed-slider"},null,512),[[Vv,f.value,void 0,{number:!0}]]),F("span",Aw,Lt(f.value.toFixed(1))+"x",1)]),F("button",{class:"exit-btn",onClick:ht},[...it[8]||(it[8]=[F("span",{class:"btn-bracket"},"[",-1),Ha(" EXIT ",-1),F("span",{class:"btn-bracket"},"]",-1)])])],512),[[Po,c.value]]),Ae(or,{name:"briefing"},{default:Ui(()=>[Rt(C)?(ie(),se("div",Cw,[F("div",Rw,"ROLE BRIEF / "+Lt(Rt(C).label),1),F("h2",Pw,Lt(Rt(C).title),1),F("p",Dw,Lt(Rt(C).body),1),F("div",Lw,[(ie(),se(Ue,null,Xn(bA,Tt=>F("span",{key:Tt,class:Fe(["progress-dot",{active:Tt-1===Rt(x)}])},null,2)),64))]),F("button",{class:"choice-btn briefing-action",onClick:ot},[it[9]||(it[9]=F("span",{class:"choice-id"},"GO",-1)),F("span",Iw,Lt(Rt(C).action),1)])])):Gn("",!0)]),_:1}),Ae(or,{name:"prep"},{default:Ui(()=>[Rt(z)&&!Rt(m)?(ie(),se("div",Uw,[F("div",Nw,[F("span",Ow,"LINK PREP / "+Lt(Rt(z).id),1),F("span",Fw,"DIST "+Lt(Rt(z).dist)+"m",1)]),F("h2",Bw,Lt(Rt(z).title),1),F("p",zw,Lt(Rt(z).prompt),1),F("div",kw,[(ie(),se(Ue,null,Xn(3,Tt=>F("span",{key:Tt,class:Fe(["prep-dot",{active:Tt<=Rt(z).progress}])},null,2)),64))]),F("div",Vw,[it[10]||(it[10]=F("span",{class:"prep-instruction-label"},"WINDOW STATUS",-1)),F("span",null,Lt(Rt(z).windowReady?"正式窗口已稳定，完成至少 1 次预热后即可接入。":"正式窗口还在生成，先做一次链路预热。"),1)]),F("div",Hw,[(ie(!0),se(Ue,null,Xn(Rt(z).actions,Tt=>(ie(),se("button",{key:Tt.id,class:Fe(["prep-action",{used:Rt(z).usedActions.includes(Tt.id)}]),disabled:Rt(z).usedActions.includes(Tt.id),onClick:Ot=>_t(Tt.id)},Lt(Tt.label),11,Gw))),128))]),F("div",Ww,Lt(Rt(z).lastResult),1),F("button",{class:Fe(["prep-confirm",{ready:b.value}]),disabled:!b.value,onClick:Ut},Lt(b.value?"接入正式建议窗口":"等待链路稳定"),11,Xw)])):Gn("",!0)]),_:1}),Ae(or,{name:"buffer"},{default:Ui(()=>[Rt(y)&&!Rt(m)?(ie(),se("div",{key:0,class:Fe(["buffer-panel",`buffer-${Rt(y).mode}`])},[it[11]||(it[11]=F("div",{class:"buffer-grid"},null,-1)),F("div",qw,[F("span",Yw,"WINDOW SYNC / "+Lt(Rt(y).id),1),F("span",$w,"DIST "+Lt(Rt(y).dist)+"m",1)]),F("h2",Kw,Lt(Rt(y).title),1),F("p",jw,Lt(Rt(y).lead),1),F("div",Zw,[F("div",{class:"buffer-progress-fill",style:ri({transform:`scaleX(${Rt(y).progress})`})},null,4)]),F("div",Jw,[(ie(!0),se(Ue,null,Xn(Rt(y).steps,(Tt,Ot)=>(ie(),se("div",{key:Tt,class:Fe(["buffer-step",{active:Ot===Rt(y).stepIndex,done:Ot<Rt(y).stepIndex}])},[F("span",Qw,"0"+Lt(Ot+1),1),F("span",null,Lt(Tt),1)],2))),128))])],2)):Gn("",!0)]),_:1}),Ae(or,{name:"signal"},{default:Ui(()=>{var Tt;return[Rt(m)?(ie(),se("div",tA,[F("div",eA,[F("span",nA,"// WINDOW_"+Lt(Rt(m).id),1),F("span",iA,"DIST: "+Lt(Rt(m).dist)+"m",1)]),F("div",rA,[F("div",null,Lt(Rt(m).title),1),F("div",null,Lt(Rt(m).subtitle),1)]),F("div",{class:"signal-body",innerHTML:Rt(m).message},null,8,sA),Rt(m).stage==="choice"?(ie(),se("div",oA,[it[12]||(it[12]=F("div",{class:"panel-label"},"TRANSMIT ADVICE",-1)),(ie(!0),se(Ue,null,Xn(Rt(m).choices,Ot=>(ie(),se("button",{key:Ot.id,class:Fe(["choice-btn",{obscured:Ot.obscured}]),onClick:he=>at(Ot)},[F("span",lA,Lt(Ot.id),1),F("span",cA,Lt(Ot.label),1)],10,aA))),128))])):(ie(),se("div",uA,[it[13]||(it[13]=F("div",{class:"panel-label"},"ADVICE SENT",-1)),F("div",fA,Lt((Tt=Rt(m).selectedChoice)==null?void 0:Tt.advisory),1),it[14]||(it[14]=F("div",{class:"panel-label panel-label-reply"},"FIELD REPLY",-1)),F("div",{class:Fe(["incoming-copy",{pending:!Rt(m).reply}])},Lt(Rt(m).reply||"NIA-7 is reading your signal..."),3)])),it[15]||(it[15]=F("div",{class:"signal-bar"},null,-1))])):Gn("",!0)]}),_:1}),Ae(or,{name:"ending"},{default:Ui(()=>[Rt(T)?(ie(),se("div",hA,[F("div",dA,[F("div",pA,"ENDING / "+Lt(Rt(T).code),1),F("div",mA,Lt(Rt(T).vector),1)]),F("h2",_A,Lt(Rt(T).title),1),F("p",gA,Lt(Rt(T).summary),1),F("div",vA,Lt(Rt(T).body),1),F("div",xA,[F("div",yA,[it[16]||(it[16]=F("span",null,"TRUST",-1)),F("strong",null,Lt(Rt(Qt).trust),1)]),F("div",MA,[it[17]||(it[17]=F("span",null,"RISK",-1)),F("strong",null,Lt(Rt(Qt).risk),1)]),F("div",SA,[it[18]||(it[18]=F("span",null,"TRUTH",-1)),F("strong",null,Lt(Rt(Qt).truth),1)])]),F("div",{class:"ending-actions"},[F("button",{class:"choice-btn ending-action",onClick:xt},[...it[19]||(it[19]=[F("span",{class:"choice-id"},"R1",-1),F("span",{class:"choice-copy"},"重新接入链路，开始下一轮回响",-1)])]),F("button",{class:"choice-btn ending-action ending-action-muted",onClick:ht},[...it[20]||(it[20]=[F("span",{class:"choice-id"},"R2",-1),F("span",{class:"choice-copy"},"关闭链路，返回封面",-1)])])])])):Gn("",!0)]),_:1}),l.value&&Rt(vt)&&!Rt(m)&&!Rt(y)&&!Rt(T)&&!Rt(C)?(ie(),se("div",EA," CLICK TERRAIN TO DROP ROUTE MARKERS ")):Gn("",!0),F("canvas",{ref_key:"rippleEl",ref:a,class:"ripple-canvas"},null,512)],2))}}),wA=zf(TA,[["__scopeId","data-v-d54ed54e"]]),AA=[{id:"monet",name:"CG 档案馆",icon:"ARC",code:"SEAL 01",description:"主视觉断面与命运展签",position:"9%"},{id:"tech",name:"回响链路",icon:"ECHO",code:"SEAL 02",description:"远程建议窗口与异响读数",position:"43%"}];function CA(){let n=null;return{switchToTech:()=>{const r=document.querySelector(".page-monet"),s=document.querySelector(".page-tech");n&&(clearTimeout(n),n=null),Ft.killTweensOf([r,s,".tech-label",".tech-title",".tech-tagline",".tech-description",".tech-btn",".hud-corner",".hud-status"]),r&&Ft.to(r,{opacity:0,duration:.5,ease:"power2.in"}),s&&(Ft.set(s,{display:"block"}),Ft.fromTo(s,{opacity:.72},{opacity:1,duration:.45,ease:"power2.out",overwrite:"auto"})),n=setTimeout(()=>{!s||s.offsetParent===null||(Ft.fromTo(".tech-label",{x:-24,opacity:0},{x:0,opacity:1,duration:.45,ease:"power2.out",overwrite:"auto"}),Ft.fromTo(".tech-title",{x:-40,opacity:0},{x:0,opacity:1,duration:.6,delay:.08,ease:"power3.out",overwrite:"auto"}),Ft.fromTo(".tech-tagline",{x:-24,opacity:0},{x:0,opacity:1,duration:.45,delay:.14,ease:"power2.out",overwrite:"auto"}),Ft.fromTo(".tech-description",{y:18,opacity:0},{y:0,opacity:1,duration:.45,delay:.2,ease:"power2.out",overwrite:"auto"}),Ft.fromTo(".tech-btn",{y:10,opacity:0},{y:0,opacity:1,duration:.35,delay:.26,ease:"power2.out",overwrite:"auto"}),Ft.fromTo(".hud-corner",{scale:.92,opacity:0},{scale:1,opacity:1,duration:.35,delay:.08,stagger:.06,ease:"power2.out",overwrite:"auto"}),Ft.fromTo(".hud-status",{y:-12,opacity:0},{y:0,opacity:1,duration:.35,delay:.12,ease:"power2.out",overwrite:"auto"}),n=null)},40)},switchToMonet:()=>{const r=document.querySelector(".page-monet");n&&(clearTimeout(n),n=null),Ft.killTweensOf([".tech-label",".tech-title",".tech-tagline",".tech-description",".tech-btn",".hud-corner",".hud-status"]),r&&Ft.to(r,{opacity:1,duration:.8,ease:"power2.out"})},animateBubbles:r=>{document.querySelectorAll(".bubble-item").forEach(o=>{const a=o.classList.contains("active"),l=o.querySelector(".bubble");l&&Ft.to(l,{scale:a?1.2:1,duration:.5,ease:"elastic.out(1, 0.5)"})})}}}function RA(){return{initHeaderAnimation:()=>{const e=document.querySelector(".painting-header");if(!e)return;const i=e.querySelector("h1"),r=e.querySelector("p"),s=e.querySelector(".start-btn");i&&Ft.from(i,{y:-50,opacity:0,duration:1,delay:.5,ease:"power3.out"}),r&&Ft.from(r,{y:-30,opacity:0,duration:1,delay:.8,ease:"power3.out"}),s&&(Ft.from(s,{scale:0,opacity:0,duration:.8,delay:1.2,ease:"back.out(1.7)"}),Ft.to(s,{y:-5,duration:1.5,ease:"power1.inOut",yoyo:!0,repeat:-1}))},initBubbleAnimation:()=>{setTimeout(()=>{document.querySelectorAll(".bubble-item").forEach((i,r)=>{Ft.set(i,{x:-150,opacity:0,scale:0}),Ft.to(i,{x:0,opacity:1,scale:1,duration:.8,delay:2+r*.2,ease:"elastic.out(1, 0.5)"})})},100)}}}const PA={__name:"App",setup(n){const t=pe(null),e=pe("tech"),i=pe(AA),r=pe(!1),{switchToTech:s,switchToMonet:o,animateBubbles:a}=CA(),{initHeaderAnimation:l,initBubbleAnimation:u}=RA(),c=h=>{h?Ft.to(".bubble-nav",{x:-120,opacity:0,duration:.7,ease:"power2.in",onComplete:()=>{r.value=!0}}):(r.value=!1,Ft.fromTo(".bubble-nav",{x:-120,opacity:0},{x:0,opacity:1,duration:.7,ease:"power2.out"}))},f=h=>{e.value!==h&&(e.value=h,a(h),h==="tech"?s():o())};return Js(()=>{l(),u()}),(h,d)=>(ie(),se("div",{class:Fe(["gallery-container",{"tech-mode":e.value==="tech"}]),ref_key:"container",ref:t},[Ps(Ae(Sy,{pages:i.value,currentPage:e.value,onPageChange:f},null,8,["pages","currentPage"]),[[Po,!r.value]]),Ps(Ae(ew,{active:e.value==="monet"},null,8,["active"]),[[Po,e.value==="monet"]]),Ps(Ae(wA,{active:e.value==="tech",onExploreMode:c},null,8,["active"]),[[Po,e.value==="tech"]])],2))}},DA=Wv(PA);DA.mount("#app");
