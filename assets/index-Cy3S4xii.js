(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Qu(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const be={},Rs=[],yi=()=>{},gp=()=>!1,ml=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),tf=n=>n.startsWith("onUpdate:"),Xe=Object.assign,ef=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},vg=Object.prototype.hasOwnProperty,_e=(n,t)=>vg.call(n,t),Gt=Array.isArray,Ps=n=>$o(n)==="[object Map]",vp=n=>$o(n)==="[object Set]",rh=n=>$o(n)==="[object Date]",Jt=n=>typeof n=="function",ze=n=>typeof n=="string",Mi=n=>typeof n=="symbol",ge=n=>n!==null&&typeof n=="object",xp=n=>(ge(n)||Jt(n))&&Jt(n.then)&&Jt(n.catch),yp=Object.prototype.toString,$o=n=>yp.call(n),xg=n=>$o(n).slice(8,-1),Mp=n=>$o(n)==="[object Object]",nf=n=>ze(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,xo=Qu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_l=n=>{const t=Object.create(null);return(e=>t[e]||(t[e]=n(e)))},yg=/-\w/g,mr=_l(n=>n.replace(yg,t=>t.slice(1).toUpperCase())),Mg=/\B([A-Z])/g,rs=_l(n=>n.replace(Mg,"-$1").toLowerCase()),Sp=_l(n=>n.charAt(0).toUpperCase()+n.slice(1)),Il=_l(n=>n?`on${Sp(n)}`:""),ur=(n,t)=>!Object.is(n,t),Ua=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Ep=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},rf=n=>{const t=parseFloat(n);return isNaN(t)?n:t},Sg=n=>{const t=ze(n)?Number(n):NaN;return isNaN(t)?n:t};let sh;const gl=()=>sh||(sh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Kr(n){if(Gt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],r=ze(i)?Ag(i):Kr(i);if(r)for(const s in r)t[s]=r[s]}return t}else if(ze(n)||ge(n))return n}const Eg=/;(?![^(]*\))/g,Tg=/:([^]+)/,bg=/\/\*[^]*?\*\//g;function Ag(n){const t={};return n.replace(bg,"").split(Eg).forEach(e=>{if(e){const i=e.split(Tg);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Fe(n){let t="";if(ze(n))t=n;else if(Gt(n))for(let e=0;e<n.length;e++){const i=Fe(n[e]);i&&(t+=i+" ")}else if(ge(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const wg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Cg=Qu(wg);function Tp(n){return!!n||n===""}function Rg(n,t){if(n.length!==t.length)return!1;let e=!0;for(let i=0;e&&i<n.length;i++)e=sf(n[i],t[i]);return e}function sf(n,t){if(n===t)return!0;let e=rh(n),i=rh(t);if(e||i)return e&&i?n.getTime()===t.getTime():!1;if(e=Mi(n),i=Mi(t),e||i)return n===t;if(e=Gt(n),i=Gt(t),e||i)return e&&i?Rg(n,t):!1;if(e=ge(n),i=ge(t),e||i){if(!e||!i)return!1;const r=Object.keys(n).length,s=Object.keys(t).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!sf(n[o],t[o]))return!1}}return String(n)===String(t)}const bp=n=>!!(n&&n.__v_isRef===!0),Bt=n=>ze(n)?n:n==null?"":Gt(n)||ge(n)&&(n.toString===yp||!Jt(n.toString))?bp(n)?Bt(n.value):JSON.stringify(n,Ap,2):String(n),Ap=(n,t)=>bp(t)?Ap(n,t.value):Ps(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,r],s)=>(e[Ul(i,s)+" =>"]=r,e),{})}:vp(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Ul(e))}:Mi(t)?Ul(t):ge(t)&&!Gt(t)&&!Mp(t)?String(t):t,Ul=(n,t="")=>{var e;return Mi(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let yn;class Pg{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=yn,!t&&yn&&(this.index=(yn.scopes||(yn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=yn;try{return yn=this,t()}finally{yn=e}}}on(){++this._on===1&&(this.prevScope=yn,yn=this)}off(){this._on>0&&--this._on===0&&(yn=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Dg(){return yn}let Ae;const Nl=new WeakSet;class wp{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,yn&&yn.active&&yn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Nl.has(this)&&(Nl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Rp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,oh(this),Pp(this);const t=Ae,e=si;Ae=this,si=!0;try{return this.fn()}finally{Dp(this),Ae=t,si=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)lf(t);this.deps=this.depsTail=void 0,oh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Nl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Fc(this)&&this.run()}get dirty(){return Fc(this)}}let Cp=0,yo,Mo;function Rp(n,t=!1){if(n.flags|=8,t){n.next=Mo,Mo=n;return}n.next=yo,yo=n}function of(){Cp++}function af(){if(--Cp>0)return;if(Mo){let t=Mo;for(Mo=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;yo;){let t=yo;for(yo=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Pp(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Dp(n){let t,e=n.depsTail,i=e;for(;i;){const r=i.prevDep;i.version===-1?(i===e&&(e=r),lf(i),Lg(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=t,n.depsTail=e}function Fc(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Lp(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Lp(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Lo)||(n.globalVersion=Lo,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Fc(n))))return;n.flags|=2;const t=n.dep,e=Ae,i=si;Ae=n,si=!0;try{Pp(n);const r=n.fn(n._value);(t.version===0||ur(r,n._value))&&(n.flags|=128,n._value=r,t.version++)}catch(r){throw t.version++,r}finally{Ae=e,si=i,Dp(n),n.flags&=-3}}function lf(n,t=!1){const{dep:e,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let s=e.computed.deps;s;s=s.nextDep)lf(s,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function Lg(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let si=!0;const Ip=[];function Vi(){Ip.push(si),si=!1}function Hi(){const n=Ip.pop();si=n===void 0?!0:n}function oh(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=Ae;Ae=void 0;try{t()}finally{Ae=e}}}let Lo=0;class Ig{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class cf{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Ae||!si||Ae===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==Ae)e=this.activeLink=new Ig(Ae,this),Ae.deps?(e.prevDep=Ae.depsTail,Ae.depsTail.nextDep=e,Ae.depsTail=e):Ae.deps=Ae.depsTail=e,Up(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=Ae.depsTail,e.nextDep=void 0,Ae.depsTail.nextDep=e,Ae.depsTail=e,Ae.deps===e&&(Ae.deps=i)}return e}trigger(t){this.version++,Lo++,this.notify(t)}notify(t){of();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{af()}}}function Up(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Up(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Bc=new WeakMap,jr=Symbol(""),zc=Symbol(""),Io=Symbol("");function rn(n,t,e){if(si&&Ae){let i=Bc.get(n);i||Bc.set(n,i=new Map);let r=i.get(e);r||(i.set(e,r=new cf),r.map=i,r.key=e),r.track()}}function Oi(n,t,e,i,r,s){const o=Bc.get(n);if(!o){Lo++;return}const a=l=>{l&&l.trigger()};if(of(),t==="clear")o.forEach(a);else{const l=Gt(n),u=l&&nf(e);if(l&&e==="length"){const c=Number(i);o.forEach((f,h)=>{(h==="length"||h===Io||!Mi(h)&&h>=c)&&a(f)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),u&&a(o.get(Io)),t){case"add":l?u&&a(o.get("length")):(a(o.get(jr)),Ps(n)&&a(o.get(zc)));break;case"delete":l||(a(o.get(jr)),Ps(n)&&a(o.get(zc)));break;case"set":Ps(n)&&a(o.get(jr));break}}af()}function as(n){const t=he(n);return t===n?t:(rn(t,"iterate",Io),$n(n)?t:t.map(ai))}function vl(n){return rn(n=he(n),"iterate",Io),n}function ir(n,t){return Gi(n)?zs(Zr(n)?ai(t):t):ai(t)}const Ug={__proto__:null,[Symbol.iterator](){return Ol(this,Symbol.iterator,n=>ir(this,n))},concat(...n){return as(this).concat(...n.map(t=>Gt(t)?as(t):t))},entries(){return Ol(this,"entries",n=>(n[1]=ir(this,n[1]),n))},every(n,t){return Ti(this,"every",n,t,void 0,arguments)},filter(n,t){return Ti(this,"filter",n,t,e=>e.map(i=>ir(this,i)),arguments)},find(n,t){return Ti(this,"find",n,t,e=>ir(this,e),arguments)},findIndex(n,t){return Ti(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return Ti(this,"findLast",n,t,e=>ir(this,e),arguments)},findLastIndex(n,t){return Ti(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return Ti(this,"forEach",n,t,void 0,arguments)},includes(...n){return Fl(this,"includes",n)},indexOf(...n){return Fl(this,"indexOf",n)},join(n){return as(this).join(n)},lastIndexOf(...n){return Fl(this,"lastIndexOf",n)},map(n,t){return Ti(this,"map",n,t,void 0,arguments)},pop(){return io(this,"pop")},push(...n){return io(this,"push",n)},reduce(n,...t){return ah(this,"reduce",n,t)},reduceRight(n,...t){return ah(this,"reduceRight",n,t)},shift(){return io(this,"shift")},some(n,t){return Ti(this,"some",n,t,void 0,arguments)},splice(...n){return io(this,"splice",n)},toReversed(){return as(this).toReversed()},toSorted(n){return as(this).toSorted(n)},toSpliced(...n){return as(this).toSpliced(...n)},unshift(...n){return io(this,"unshift",n)},values(){return Ol(this,"values",n=>ir(this,n))}};function Ol(n,t,e){const i=vl(n),r=i[t]();return i!==n&&!$n(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=e(s.value)),s}),r}const Ng=Array.prototype;function Ti(n,t,e,i,r,s){const o=vl(n),a=o!==n&&!$n(n),l=o[t];if(l!==Ng[t]){const f=l.apply(n,s);return a?ai(f):f}let u=e;o!==n&&(a?u=function(f,h){return e.call(this,ir(n,f),h,n)}:e.length>2&&(u=function(f,h){return e.call(this,f,h,n)}));const c=l.call(o,u,i);return a&&r?r(c):c}function ah(n,t,e,i){const r=vl(n);let s=e;return r!==n&&($n(n)?e.length>3&&(s=function(o,a,l){return e.call(this,o,a,l,n)}):s=function(o,a,l){return e.call(this,o,ir(n,a),l,n)}),r[t](s,...i)}function Fl(n,t,e){const i=he(n);rn(i,"iterate",Io);const r=i[t](...e);return(r===-1||r===!1)&&hf(e[0])?(e[0]=he(e[0]),i[t](...e)):r}function io(n,t,e=[]){Vi(),of();const i=he(n)[t].apply(n,e);return af(),Hi(),i}const Og=Qu("__proto__,__v_isRef,__isVue"),Np=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Mi));function Fg(n){Mi(n)||(n=String(n));const t=he(this);return rn(t,"has",n),t.hasOwnProperty(n)}class Op{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const r=this._isReadonly,s=this._isShallow;if(e==="__v_isReactive")return!r;if(e==="__v_isReadonly")return r;if(e==="__v_isShallow")return s;if(e==="__v_raw")return i===(r?s?Yg:kp:s?zp:Bp).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Gt(t);if(!r){let l;if(o&&(l=Ug[e]))return l;if(e==="hasOwnProperty")return Fg}const a=Reflect.get(t,e,on(t)?t:i);if((Mi(e)?Np.has(e):Og(e))||(r||rn(t,"get",e),s))return a;if(on(a)){const l=o&&nf(e)?a:a.value;return r&&ge(l)?Vc(l):l}return ge(a)?r?Vc(a):Uo(a):a}}class Fp extends Op{constructor(t=!1){super(!1,t)}set(t,e,i,r){let s=t[e];const o=Gt(t)&&nf(e);if(!this._isShallow){const u=Gi(s);if(!$n(i)&&!Gi(i)&&(s=he(s),i=he(i)),!o&&on(s)&&!on(i))return u||(s.value=i),!0}const a=o?Number(e)<t.length:_e(t,e),l=Reflect.set(t,e,i,on(t)?t:r);return t===he(r)&&(a?ur(i,s)&&Oi(t,"set",e,i):Oi(t,"add",e,i)),l}deleteProperty(t,e){const i=_e(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&i&&Oi(t,"delete",e,void 0),r}has(t,e){const i=Reflect.has(t,e);return(!Mi(e)||!Np.has(e))&&rn(t,"has",e),i}ownKeys(t){return rn(t,"iterate",Gt(t)?"length":jr),Reflect.ownKeys(t)}}class Bg extends Op{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const zg=new Fp,kg=new Bg,Vg=new Fp(!0);const kc=n=>n,oa=n=>Reflect.getPrototypeOf(n);function Hg(n,t,e){return function(...i){const r=this.__v_raw,s=he(r),o=Ps(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,u=r[n](...i),c=e?kc:t?zs:ai;return!t&&rn(s,"iterate",l?zc:jr),Xe(Object.create(u),{next(){const{value:f,done:h}=u.next();return h?{value:f,done:h}:{value:a?[c(f[0]),c(f[1])]:c(f),done:h}}})}}function aa(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Gg(n,t){const e={get(r){const s=this.__v_raw,o=he(s),a=he(r);n||(ur(r,a)&&rn(o,"get",r),rn(o,"get",a));const{has:l}=oa(o),u=t?kc:n?zs:ai;if(l.call(o,r))return u(s.get(r));if(l.call(o,a))return u(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&rn(he(r),"iterate",jr),r.size},has(r){const s=this.__v_raw,o=he(s),a=he(r);return n||(ur(r,a)&&rn(o,"has",r),rn(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=he(a),u=t?kc:n?zs:ai;return!n&&rn(l,"iterate",jr),a.forEach((c,f)=>r.call(s,u(c),u(f),o))}};return Xe(e,n?{add:aa("add"),set:aa("set"),delete:aa("delete"),clear:aa("clear")}:{add(r){!t&&!$n(r)&&!Gi(r)&&(r=he(r));const s=he(this);return oa(s).has.call(s,r)||(s.add(r),Oi(s,"add",r,r)),this},set(r,s){!t&&!$n(s)&&!Gi(s)&&(s=he(s));const o=he(this),{has:a,get:l}=oa(o);let u=a.call(o,r);u||(r=he(r),u=a.call(o,r));const c=l.call(o,r);return o.set(r,s),u?ur(s,c)&&Oi(o,"set",r,s):Oi(o,"add",r,s),this},delete(r){const s=he(this),{has:o,get:a}=oa(s);let l=o.call(s,r);l||(r=he(r),l=o.call(s,r)),a&&a.call(s,r);const u=s.delete(r);return l&&Oi(s,"delete",r,void 0),u},clear(){const r=he(this),s=r.size!==0,o=r.clear();return s&&Oi(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=Hg(r,n,t)}),e}function uf(n,t){const e=Gg(n,t);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(_e(e,r)&&r in i?e:i,r,s)}const Wg={get:uf(!1,!1)},Xg={get:uf(!1,!0)},qg={get:uf(!0,!1)};const Bp=new WeakMap,zp=new WeakMap,kp=new WeakMap,Yg=new WeakMap;function $g(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Kg(n){return n.__v_skip||!Object.isExtensible(n)?0:$g(xg(n))}function Uo(n){return Gi(n)?n:ff(n,!1,zg,Wg,Bp)}function jg(n){return ff(n,!1,Vg,Xg,zp)}function Vc(n){return ff(n,!0,kg,qg,kp)}function ff(n,t,e,i,r){if(!ge(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const s=Kg(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:e);return r.set(n,a),a}function Zr(n){return Gi(n)?Zr(n.__v_raw):!!(n&&n.__v_isReactive)}function Gi(n){return!!(n&&n.__v_isReadonly)}function $n(n){return!!(n&&n.__v_isShallow)}function hf(n){return n?!!n.__v_raw:!1}function he(n){const t=n&&n.__v_raw;return t?he(t):n}function Zg(n){return!_e(n,"__v_skip")&&Object.isExtensible(n)&&Ep(n,"__v_skip",!0),n}const ai=n=>ge(n)?Uo(n):n,zs=n=>ge(n)?Vc(n):n;function on(n){return n?n.__v_isRef===!0:!1}function Me(n){return Jg(n,!1)}function Jg(n,t){return on(n)?n:new Qg(n,t)}class Qg{constructor(t,e){this.dep=new cf,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:he(t),this._value=e?t:ai(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||$n(t)||Gi(t);t=i?t:he(t),ur(t,e)&&(this._rawValue=t,this._value=i?t:ai(t),this.dep.trigger())}}function Rt(n){return on(n)?n.value:n}const t0={get:(n,t,e)=>t==="__v_raw"?n:Rt(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const r=n[t];return on(r)&&!on(e)?(r.value=e,!0):Reflect.set(n,t,e,i)}};function Vp(n){return Zr(n)?n:new Proxy(n,t0)}class e0{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new cf(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Lo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ae!==this)return Rp(this,!0),!0}get value(){const t=this.dep.track();return Lp(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function n0(n,t,e=!1){let i,r;return Jt(n)?i=n:(i=n.get,r=n.set),new e0(i,r,e)}const la={},Ka=new WeakMap;let Or;function i0(n,t=!1,e=Or){if(e){let i=Ka.get(e);i||Ka.set(e,i=[]),i.push(n)}}function r0(n,t,e=be){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=e,u=v=>r?v:$n(v)||r===!1||r===0?Fi(v,1):Fi(v);let c,f,h,d,m=!1,g=!1;if(on(n)?(f=()=>n.value,m=$n(n)):Zr(n)?(f=()=>u(n),m=!0):Gt(n)?(g=!0,m=n.some(v=>Zr(v)||$n(v)),f=()=>n.map(v=>{if(on(v))return v.value;if(Zr(v))return u(v);if(Jt(v))return l?l(v,2):v()})):Jt(n)?t?f=l?()=>l(n,2):n:f=()=>{if(h){Vi();try{h()}finally{Hi()}}const v=Or;Or=c;try{return l?l(n,3,[d]):n(d)}finally{Or=v}}:f=yi,t&&r){const v=f,b=r===!0?1/0:r;f=()=>Fi(v(),b)}const _=Dg(),p=()=>{c.stop(),_&&_.active&&ef(_.effects,c)};if(s&&t){const v=t;t=(...b)=>{v(...b),p()}}let M=g?new Array(n.length).fill(la):la;const x=v=>{if(!(!(c.flags&1)||!c.dirty&&!v))if(t){const b=c.run();if(r||m||(g?b.some((w,R)=>ur(w,M[R])):ur(b,M))){h&&h();const w=Or;Or=c;try{const R=[b,M===la?void 0:g&&M[0]===la?[]:M,d];M=b,l?l(t,3,R):t(...R)}finally{Or=w}}}else c.run()};return a&&a(x),c=new wp(f),c.scheduler=o?()=>o(x,!1):x,d=v=>i0(v,!1,c),h=c.onStop=()=>{const v=Ka.get(c);if(v){if(l)l(v,4);else for(const b of v)b();Ka.delete(c)}},t?i?x(!0):M=c.run():o?o(x.bind(null,!0),!0):c.run(),p.pause=c.pause.bind(c),p.resume=c.resume.bind(c),p.stop=p,p}function Fi(n,t=1/0,e){if(t<=0||!ge(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,on(n))Fi(n.value,t,e);else if(Gt(n))for(let i=0;i<n.length;i++)Fi(n[i],t,e);else if(vp(n)||Ps(n))n.forEach(i=>{Fi(i,t,e)});else if(Mp(n)){for(const i in n)Fi(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Fi(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ko(n,t,e,i){try{return i?n(...i):n()}catch(r){xl(r,t,e)}}function li(n,t,e,i){if(Jt(n)){const r=Ko(n,t,e,i);return r&&xp(r)&&r.catch(s=>{xl(s,t,e)}),r}if(Gt(n)){const r=[];for(let s=0;s<n.length;s++)r.push(li(n[s],t,e,i));return r}}function xl(n,t,e,i=!0){const r=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||be;if(t){let a=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const c=a.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](n,l,u)===!1)return}a=a.parent}if(s){Vi(),Ko(s,null,10,[n,l,u]),Hi();return}}s0(n,e,r,i,o)}function s0(n,t,e,i=!0,r=!1){if(r)throw n;console.error(n)}const fn=[];let fi=-1;const Ds=[];let rr=null,Es=0;const Hp=Promise.resolve();let ja=null;function o0(n){const t=ja||Hp;return n?t.then(this?n.bind(this):n):t}function a0(n){let t=fi+1,e=fn.length;for(;t<e;){const i=t+e>>>1,r=fn[i],s=No(r);s<n||s===n&&r.flags&2?t=i+1:e=i}return t}function df(n){if(!(n.flags&1)){const t=No(n),e=fn[fn.length-1];!e||!(n.flags&2)&&t>=No(e)?fn.push(n):fn.splice(a0(t),0,n),n.flags|=1,Gp()}}function Gp(){ja||(ja=Hp.then(Xp))}function l0(n){Gt(n)?Ds.push(...n):rr&&n.id===-1?rr.splice(Es+1,0,n):n.flags&1||(Ds.push(n),n.flags|=1),Gp()}function lh(n,t,e=fi+1){for(;e<fn.length;e++){const i=fn[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;fn.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Wp(n){if(Ds.length){const t=[...new Set(Ds)].sort((e,i)=>No(e)-No(i));if(Ds.length=0,rr){rr.push(...t);return}for(rr=t,Es=0;Es<rr.length;Es++){const e=rr[Es];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}rr=null,Es=0}}const No=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Xp(n){try{for(fi=0;fi<fn.length;fi++){const t=fn[fi];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Ko(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;fi<fn.length;fi++){const t=fn[fi];t&&(t.flags&=-2)}fi=-1,fn.length=0,Wp(),ja=null,(fn.length||Ds.length)&&Xp()}}let Xn=null,qp=null;function Za(n){const t=Xn;return Xn=n,qp=n&&n.type.__scopeId||null,t}function sr(n,t=Xn,e){if(!t||n._n)return n;const i=(...r)=>{i._d&&tl(-1);const s=Za(t);let o;try{o=n(...r)}finally{Za(s),i._d&&tl(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function So(n,t){if(Xn===null)return n;const e=bl(Xn),i=n.dirs||(n.dirs=[]);for(let r=0;r<t.length;r++){let[s,o,a,l=be]=t[r];s&&(Jt(s)&&(s={mounted:s,updated:s}),s.deep&&Fi(o),i.push({dir:s,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Tr(n,t,e,i){const r=n.dirs,s=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Vi(),li(l,e,8,[n.el,a,n,t]),Hi())}}function c0(n,t){if(dn){let e=dn.provides;const i=dn.parent&&dn.parent.provides;i===e&&(e=dn.provides=Object.create(i)),e[n]=t}}function Na(n,t,e=!1){const i=Em();if(i||Ls){let r=Ls?Ls._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return e&&Jt(t)?t.call(i&&i.proxy):t}}const u0=Symbol.for("v-scx"),f0=()=>Na(u0);function Bl(n,t,e){return Yp(n,t,e)}function Yp(n,t,e=be){const{immediate:i,deep:r,flush:s,once:o}=e,a=Xe({},e),l=t&&i||!t&&s!=="post";let u;if(Bo){if(s==="sync"){const d=f0();u=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=yi,d.resume=yi,d.pause=yi,d}}const c=dn;a.call=(d,m,g)=>li(d,c,m,g);let f=!1;s==="post"?a.scheduler=d=>{xn(d,c&&c.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(d,m)=>{m?d():df(d)}),a.augmentJob=d=>{t&&(d.flags|=4),f&&(d.flags|=2,c&&(d.id=c.uid,d.i=c))};const h=r0(n,t,a);return Bo&&(u?u.push(h):l&&h()),h}function h0(n,t,e){const i=this.proxy,r=ze(n)?n.includes(".")?$p(i,n):()=>i[n]:n.bind(i,i);let s;Jt(t)?s=t:(s=t.handler,e=t);const o=Zo(this),a=Yp(r,s.bind(i),e);return o(),a}function $p(n,t){const e=t.split(".");return()=>{let i=n;for(let r=0;r<e.length&&i;r++)i=i[e[r]];return i}}const d0=Symbol("_vte"),Kp=n=>n.__isTeleport,hi=Symbol("_leaveCb"),ro=Symbol("_enterCb");function p0(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return jo(()=>{n.isMounted=!0}),im(()=>{n.isUnmounting=!0}),n}const Vn=[Function,Array],jp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Vn,onEnter:Vn,onAfterEnter:Vn,onEnterCancelled:Vn,onBeforeLeave:Vn,onLeave:Vn,onAfterLeave:Vn,onLeaveCancelled:Vn,onBeforeAppear:Vn,onAppear:Vn,onAfterAppear:Vn,onAppearCancelled:Vn},Zp=n=>{const t=n.subTree;return t.component?Zp(t.component):t},m0={name:"BaseTransition",props:jp,setup(n,{slots:t}){const e=Em(),i=p0();return()=>{const r=t.default&&tm(t.default(),!0);if(!r||!r.length)return;const s=Jp(r),o=he(n),{mode:a}=o;if(i.isLeaving)return zl(s);const l=ch(s);if(!l)return zl(s);let u=Hc(l,o,i,e,f=>u=f);l.type!==hn&&Oo(l,u);let c=e.subTree&&ch(e.subTree);if(c&&c.type!==hn&&!Vr(c,l)&&Zp(e).type!==hn){let f=Hc(c,o,i,e);if(Oo(c,f),a==="out-in"&&l.type!==hn)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,e.job.flags&8||e.update(),delete f.afterLeave,c=void 0},zl(s);a==="in-out"&&l.type!==hn?f.delayLeave=(h,d,m)=>{const g=Qp(i,c);g[String(c.key)]=c,h[hi]=()=>{d(),h[hi]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{m(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return s}}};function Jp(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==hn){t=e;break}}return t}const _0=m0;function Qp(n,t){const{leavingVNodes:e}=n;let i=e.get(t.type);return i||(i=Object.create(null),e.set(t.type,i)),i}function Hc(n,t,e,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:h,onLeave:d,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:_,onAppear:p,onAfterAppear:M,onAppearCancelled:x}=t,v=String(n.key),b=Qp(e,n),w=(y,S)=>{y&&li(y,i,9,S)},R=(y,S)=>{const L=S[1];w(y,S),Gt(y)?y.every(I=>I.length<=1)&&L():y.length<=1&&L()},P={mode:o,persisted:a,beforeEnter(y){let S=l;if(!e.isMounted)if(s)S=_||l;else return;y[hi]&&y[hi](!0);const L=b[v];L&&Vr(n,L)&&L.el[hi]&&L.el[hi](),w(S,[y])},enter(y){if(b[v]===n)return;let S=u,L=c,I=f;if(!e.isMounted)if(s)S=p||u,L=M||c,I=x||f;else return;let F=!1;y[ro]=Y=>{F||(F=!0,Y?w(I,[y]):w(L,[y]),P.delayedLeave&&P.delayedLeave(),y[ro]=void 0)};const X=y[ro].bind(null,!1);S?R(S,[y,X]):X()},leave(y,S){const L=String(n.key);if(y[ro]&&y[ro](!0),e.isUnmounting)return S();w(h,[y]);let I=!1;y[hi]=X=>{I||(I=!0,S(),X?w(g,[y]):w(m,[y]),y[hi]=void 0,b[L]===n&&delete b[L])};const F=y[hi].bind(null,!1);b[L]=n,d?R(d,[y,F]):F()},clone(y){const S=Hc(y,t,e,i,r);return r&&r(S),S}};return P}function zl(n){if(yl(n))return n=_r(n),n.children=null,n}function ch(n){if(!yl(n))return Kp(n.type)&&n.children?Jp(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&Jt(e.default))return e.default()}}function Oo(n,t){n.shapeFlag&6&&n.component?(n.transition=t,Oo(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function tm(n,t=!1,e){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=e==null?o.key:String(e)+String(o.key!=null?o.key:s);o.type===Ge?(o.patchFlag&128&&r++,i=i.concat(tm(o.children,t,a))):(t||o.type!==hn)&&i.push(a!=null?_r(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function g0(n,t){return Jt(n)?Xe({name:n.name},t,{setup:n}):n}function em(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function uh(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const Ja=new WeakMap;function Eo(n,t,e,i,r=!1){if(Gt(n)){n.forEach((g,_)=>Eo(g,t&&(Gt(t)?t[_]:t),e,i,r));return}if(To(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Eo(n,t,e,i.component.subTree);return}const s=i.shapeFlag&4?bl(i.component):i.el,o=r?null:s,{i:a,r:l}=n,u=t&&t.r,c=a.refs===be?a.refs={}:a.refs,f=a.setupState,h=he(f),d=f===be?gp:g=>uh(c,g)?!1:_e(h,g),m=(g,_)=>!(_&&uh(c,_));if(u!=null&&u!==l){if(fh(t),ze(u))c[u]=null,d(u)&&(f[u]=null);else if(on(u)){const g=t;m(u,g.k)&&(u.value=null),g.k&&(c[g.k]=null)}}if(Jt(l))Ko(l,a,12,[o,c]);else{const g=ze(l),_=on(l);if(g||_){const p=()=>{if(n.f){const M=g?d(l)?f[l]:c[l]:m()||!n.k?l.value:c[n.k];if(r)Gt(M)&&ef(M,s);else if(Gt(M))M.includes(s)||M.push(s);else if(g)c[l]=[s],d(l)&&(f[l]=c[l]);else{const x=[s];m(l,n.k)&&(l.value=x),n.k&&(c[n.k]=x)}}else g?(c[l]=o,d(l)&&(f[l]=o)):_&&(m(l,n.k)&&(l.value=o),n.k&&(c[n.k]=o))};if(o){const M=()=>{p(),Ja.delete(n)};M.id=-1,Ja.set(n,M),xn(M,e)}else fh(n),p()}}}function fh(n){const t=Ja.get(n);t&&(t.flags|=8,Ja.delete(n))}gl().requestIdleCallback;gl().cancelIdleCallback;const To=n=>!!n.type.__asyncLoader,yl=n=>n.type.__isKeepAlive;function v0(n,t){nm(n,"a",t)}function x0(n,t){nm(n,"da",t)}function nm(n,t,e=dn){const i=n.__wdc||(n.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Ml(t,i,e),e){let r=e.parent;for(;r&&r.parent;)yl(r.parent.vnode)&&y0(i,t,e,r),r=r.parent}}function y0(n,t,e,i){const r=Ml(t,n,i,!0);Sl(()=>{ef(i[t],r)},e)}function Ml(n,t,e=dn,i=!1){if(e){const r=e[n]||(e[n]=[]),s=t.__weh||(t.__weh=(...o)=>{Vi();const a=Zo(e),l=li(t,e,n,o);return a(),Hi(),l});return i?r.unshift(s):r.push(s),s}}const $i=n=>(t,e=dn)=>{(!Bo||n==="sp")&&Ml(n,(...i)=>t(...i),e)},M0=$i("bm"),jo=$i("m"),S0=$i("bu"),E0=$i("u"),im=$i("bum"),Sl=$i("um"),T0=$i("sp"),b0=$i("rtg"),A0=$i("rtc");function w0(n,t=dn){Ml("ec",n,t)}const C0=Symbol.for("v-ndc");function di(n,t,e,i){let r;const s=e,o=Gt(n);if(o||ze(n)){const a=o&&Zr(n);let l=!1,u=!1;a&&(l=!$n(n),u=Gi(n),n=vl(n)),r=new Array(n.length);for(let c=0,f=n.length;c<f;c++)r[c]=t(l?u?zs(ai(n[c])):ai(n[c]):n[c],c,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=t(a+1,a,void 0,s)}else if(ge(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>t(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];r[l]=t(n[c],c,l,s)}}else r=[];return r}const Gc=n=>n?Tm(n)?bl(n):Gc(n.parent):null,bo=Xe(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Gc(n.parent),$root:n=>Gc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>sm(n),$forceUpdate:n=>n.f||(n.f=()=>{df(n.update)}),$nextTick:n=>n.n||(n.n=o0.bind(n.proxy)),$watch:n=>h0.bind(n)}),kl=(n,t)=>n!==be&&!n.__isScriptSetup&&_e(n,t),R0={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const h=o[t];if(h!==void 0)switch(h){case 1:return i[t];case 2:return r[t];case 4:return e[t];case 3:return s[t]}else{if(kl(i,t))return o[t]=1,i[t];if(r!==be&&_e(r,t))return o[t]=2,r[t];if(_e(s,t))return o[t]=3,s[t];if(e!==be&&_e(e,t))return o[t]=4,e[t];Wc&&(o[t]=0)}}const u=bo[t];let c,f;if(u)return t==="$attrs"&&rn(n.attrs,"get",""),u(n);if((c=a.__cssModules)&&(c=c[t]))return c;if(e!==be&&_e(e,t))return o[t]=4,e[t];if(f=l.config.globalProperties,_e(f,t))return f[t]},set({_:n},t,e){const{data:i,setupState:r,ctx:s}=n;return kl(r,t)?(r[t]=e,!0):i!==be&&_e(i,t)?(i[t]=e,!0):_e(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(s[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(e[a]||n!==be&&a[0]!=="$"&&_e(n,a)||kl(t,a)||_e(s,a)||_e(i,a)||_e(bo,a)||_e(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:_e(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function hh(n){return Gt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Wc=!0;function P0(n){const t=sm(n),e=n.proxy,i=n.ctx;Wc=!1,t.beforeCreate&&dh(t.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:f,mounted:h,beforeUpdate:d,updated:m,activated:g,deactivated:_,beforeDestroy:p,beforeUnmount:M,destroyed:x,unmounted:v,render:b,renderTracked:w,renderTriggered:R,errorCaptured:P,serverPrefetch:y,expose:S,inheritAttrs:L,components:I,directives:F,filters:X}=t;if(u&&D0(u,i,null),o)for(const K in o){const V=o[K];Jt(V)&&(i[K]=V.bind(e))}if(r){const K=r.call(e,e);ge(K)&&(n.data=Uo(K))}if(Wc=!0,s)for(const K in s){const V=s[K],vt=Jt(V)?V.bind(e,e):Jt(V.get)?V.get.bind(e,e):yi,gt=!Jt(V)&&Jt(V.set)?V.set.bind(e):yi,St=Mn({get:vt,set:gt});Object.defineProperty(i,K,{enumerable:!0,configurable:!0,get:()=>St.value,set:Lt=>St.value=Lt})}if(a)for(const K in a)rm(a[K],i,e,K);if(l){const K=Jt(l)?l.call(e):l;Reflect.ownKeys(K).forEach(V=>{c0(V,K[V])})}c&&dh(c,n,"c");function W(K,V){Gt(V)?V.forEach(vt=>K(vt.bind(e))):V&&K(V.bind(e))}if(W(M0,f),W(jo,h),W(S0,d),W(E0,m),W(v0,g),W(x0,_),W(w0,P),W(A0,w),W(b0,R),W(im,M),W(Sl,v),W(T0,y),Gt(S))if(S.length){const K=n.exposed||(n.exposed={});S.forEach(V=>{Object.defineProperty(K,V,{get:()=>e[V],set:vt=>e[V]=vt,enumerable:!0})})}else n.exposed||(n.exposed={});b&&n.render===yi&&(n.render=b),L!=null&&(n.inheritAttrs=L),I&&(n.components=I),F&&(n.directives=F),y&&em(n)}function D0(n,t,e=yi){Gt(n)&&(n=Xc(n));for(const i in n){const r=n[i];let s;ge(r)?"default"in r?s=Na(r.from||i,r.default,!0):s=Na(r.from||i):s=Na(r),on(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[i]=s}}function dh(n,t,e){li(Gt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function rm(n,t,e,i){let r=i.includes(".")?$p(e,i):()=>e[i];if(ze(n)){const s=t[n];Jt(s)&&Bl(r,s)}else if(Jt(n))Bl(r,n.bind(e));else if(ge(n))if(Gt(n))n.forEach(s=>rm(s,t,e,i));else{const s=Jt(n.handler)?n.handler.bind(e):t[n.handler];Jt(s)&&Bl(r,s,n)}}function sm(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(t);let l;return a?l=a:!r.length&&!e&&!i?l=t:(l={},r.length&&r.forEach(u=>Qa(l,u,o,!0)),Qa(l,t,o)),ge(t)&&s.set(t,l),l}function Qa(n,t,e,i=!1){const{mixins:r,extends:s}=t;s&&Qa(n,s,e,!0),r&&r.forEach(o=>Qa(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=L0[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const L0={data:ph,props:mh,emits:mh,methods:mo,computed:mo,beforeCreate:cn,created:cn,beforeMount:cn,mounted:cn,beforeUpdate:cn,updated:cn,beforeDestroy:cn,beforeUnmount:cn,destroyed:cn,unmounted:cn,activated:cn,deactivated:cn,errorCaptured:cn,serverPrefetch:cn,components:mo,directives:mo,watch:U0,provide:ph,inject:I0};function ph(n,t){return t?n?function(){return Xe(Jt(n)?n.call(this,this):n,Jt(t)?t.call(this,this):t)}:t:n}function I0(n,t){return mo(Xc(n),Xc(t))}function Xc(n){if(Gt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function cn(n,t){return n?[...new Set([].concat(n,t))]:t}function mo(n,t){return n?Xe(Object.create(null),n,t):t}function mh(n,t){return n?Gt(n)&&Gt(t)?[...new Set([...n,...t])]:Xe(Object.create(null),hh(n),hh(t??{})):t}function U0(n,t){if(!n)return t;if(!t)return n;const e=Xe(Object.create(null),n);for(const i in t)e[i]=cn(n[i],t[i]);return e}function om(){return{app:null,config:{isNativeTag:gp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let N0=0;function O0(n,t){return function(i,r=null){Jt(i)||(i=Xe({},i)),r!=null&&!ge(r)&&(r=null);const s=om(),o=new WeakSet,a=[];let l=!1;const u=s.app={_uid:N0++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:_v,get config(){return s.config},set config(c){},use(c,...f){return o.has(c)||(c&&Jt(c.install)?(o.add(c),c.install(u,...f)):Jt(c)&&(o.add(c),c(u,...f))),u},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),u},component(c,f){return f?(s.components[c]=f,u):s.components[c]},directive(c,f){return f?(s.directives[c]=f,u):s.directives[c]},mount(c,f,h){if(!l){const d=u._ceVNode||Re(i,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(d,c,h),l=!0,u._container=c,c.__vue_app__=u,bl(d.component)}},onUnmount(c){a.push(c)},unmount(){l&&(li(a,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(c,f){return s.provides[c]=f,u},runWithContext(c){const f=Ls;Ls=u;try{return c()}finally{Ls=f}}};return u}}let Ls=null;const F0=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${mr(t)}Modifiers`]||n[`${rs(t)}Modifiers`];function B0(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||be;let r=e;const s=t.startsWith("update:"),o=s&&F0(i,t.slice(7));o&&(o.trim&&(r=e.map(c=>ze(c)?c.trim():c)),o.number&&(r=e.map(rf)));let a,l=i[a=Il(t)]||i[a=Il(mr(t))];!l&&s&&(l=i[a=Il(rs(t))]),l&&li(l,n,6,r);const u=i[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,li(u,n,6,r)}}const z0=new WeakMap;function am(n,t,e=!1){const i=e?z0:t.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Jt(n)){const l=u=>{const c=am(u,t,!0);c&&(a=!0,Xe(o,c))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(ge(n)&&i.set(n,null),null):(Gt(s)?s.forEach(l=>o[l]=null):Xe(o,s),ge(n)&&i.set(n,o),o)}function El(n,t){return!n||!ml(t)?!1:(t=t.slice(2).replace(/Once$/,""),_e(n,t[0].toLowerCase()+t.slice(1))||_e(n,rs(t))||_e(n,t))}function _h(n){const{type:t,vnode:e,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:f,data:h,setupState:d,ctx:m,inheritAttrs:g}=n,_=Za(n);let p,M;try{if(e.shapeFlag&4){const v=r||i,b=v;p=mi(u.call(b,v,c,f,d,h,m)),M=a}else{const v=t;p=mi(v.length>1?v(f,{attrs:a,slots:o,emit:l}):v(f,null)),M=t.props?a:k0(a)}}catch(v){Ao.length=0,xl(v,n,1),p=Re(hn)}let x=p;if(M&&g!==!1){const v=Object.keys(M),{shapeFlag:b}=x;v.length&&b&7&&(s&&v.some(tf)&&(M=V0(M,s)),x=_r(x,M,!1,!0))}return e.dirs&&(x=_r(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(e.dirs):e.dirs),e.transition&&Oo(x,e.transition),p=x,Za(_),p}const k0=n=>{let t;for(const e in n)(e==="class"||e==="style"||ml(e))&&((t||(t={}))[e]=n[e]);return t},V0=(n,t)=>{const e={};for(const i in n)(!tf(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function H0(n,t,e){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?gh(i,o,u):!!o;if(l&8){const c=t.dynamicProps;for(let f=0;f<c.length;f++){const h=c[f];if(lm(o,i,h)&&!El(u,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?gh(i,o,u):!0:!!o;return!1}function gh(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(lm(t,n,s)&&!El(e,s))return!0}return!1}function lm(n,t,e){const i=n[e],r=t[e];return e==="style"&&ge(i)&&ge(r)?!sf(i,r):i!==r}function G0({vnode:n,parent:t},e){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=t.vnode).el=e,t=t.parent;else break}}const cm={},um=()=>Object.create(cm),fm=n=>Object.getPrototypeOf(n)===cm;function W0(n,t,e,i=!1){const r={},s=um();n.propsDefaults=Object.create(null),hm(n,t,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);e?n.props=i?r:jg(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function X0(n,t,e,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=he(r),[l]=n.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const c=n.vnode.dynamicProps;for(let f=0;f<c.length;f++){let h=c[f];if(El(n.emitsOptions,h))continue;const d=t[h];if(l)if(_e(s,h))d!==s[h]&&(s[h]=d,u=!0);else{const m=mr(h);r[m]=qc(l,a,m,d,n,!1)}else d!==s[h]&&(s[h]=d,u=!0)}}}else{hm(n,t,r,s)&&(u=!0);let c;for(const f in a)(!t||!_e(t,f)&&((c=rs(f))===f||!_e(t,c)))&&(l?e&&(e[f]!==void 0||e[c]!==void 0)&&(r[f]=qc(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!t||!_e(t,f))&&(delete s[f],u=!0)}u&&Oi(n.attrs,"set","")}function hm(n,t,e,i){const[r,s]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(xo(l))continue;const u=t[l];let c;r&&_e(r,c=mr(l))?!s||!s.includes(c)?e[c]=u:(a||(a={}))[c]=u:El(n.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,o=!0)}if(s){const l=he(e),u=a||be;for(let c=0;c<s.length;c++){const f=s[c];e[f]=qc(r,l,f,u[f],n,!_e(u,f))}}return o}function qc(n,t,e,i,r,s){const o=n[e];if(o!=null){const a=_e(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Jt(l)){const{propsDefaults:u}=r;if(e in u)i=u[e];else{const c=Zo(r);i=u[e]=l.call(null,t),c()}}else i=l;r.ce&&r.ce._setProp(e,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===rs(e))&&(i=!0))}return i}const q0=new WeakMap;function dm(n,t,e=!1){const i=e?q0:t.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Jt(n)){const c=f=>{l=!0;const[h,d]=dm(f,t,!0);Xe(o,h),d&&a.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}if(!s&&!l)return ge(n)&&i.set(n,Rs),Rs;if(Gt(s))for(let c=0;c<s.length;c++){const f=mr(s[c]);vh(f)&&(o[f]=be)}else if(s)for(const c in s){const f=mr(c);if(vh(f)){const h=s[c],d=o[f]=Gt(h)||Jt(h)?{type:h}:Xe({},h),m=d.type;let g=!1,_=!0;if(Gt(m))for(let p=0;p<m.length;++p){const M=m[p],x=Jt(M)&&M.name;if(x==="Boolean"){g=!0;break}else x==="String"&&(_=!1)}else g=Jt(m)&&m.name==="Boolean";d[0]=g,d[1]=_,(g||_e(d,"default"))&&a.push(f)}}const u=[o,a];return ge(n)&&i.set(n,u),u}function vh(n){return n[0]!=="$"&&!xo(n)}const pf=n=>n==="_"||n==="_ctx"||n==="$stable",mf=n=>Gt(n)?n.map(mi):[mi(n)],Y0=(n,t,e)=>{if(t._n)return t;const i=sr((...r)=>mf(t(...r)),e);return i._c=!1,i},pm=(n,t,e)=>{const i=n._ctx;for(const r in n){if(pf(r))continue;const s=n[r];if(Jt(s))t[r]=Y0(r,s,i);else if(s!=null){const o=mf(s);t[r]=()=>o}}},mm=(n,t)=>{const e=mf(t);n.slots.default=()=>e},_m=(n,t,e)=>{for(const i in t)(e||!pf(i))&&(n[i]=t[i])},$0=(n,t,e)=>{const i=n.slots=um();if(n.vnode.shapeFlag&32){const r=t._;r?(_m(i,t,e),e&&Ep(i,"_",r,!0)):pm(t,i)}else t&&mm(n,t)},K0=(n,t,e)=>{const{vnode:i,slots:r}=n;let s=!0,o=be;if(i.shapeFlag&32){const a=t._;a?e&&a===1?s=!1:_m(r,t,e):(s=!t.$stable,pm(t,r)),o=t}else t&&(mm(n,t),o={default:1});if(s)for(const a in r)!pf(a)&&o[a]==null&&delete r[a]},xn=tv;function j0(n){return Z0(n)}function Z0(n,t){const e=gl();e.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:h,setScopeId:d=yi,insertStaticContent:m}=n,g=(D,O,A,lt=null,tt=null,nt=null,it=void 0,ut=null,et=!!O.dynamicChildren)=>{if(D===O)return;D&&!Vr(D,O)&&(lt=pt(D),Lt(D,tt,nt,!0),D=null),O.patchFlag===-2&&(et=!1,O.dynamicChildren=null);const{type:T,ref:E,shapeFlag:N}=O;switch(T){case Tl:_(D,O,A,lt);break;case hn:p(D,O,A,lt);break;case Oa:D==null&&M(O,A,lt,it);break;case Ge:I(D,O,A,lt,tt,nt,it,ut,et);break;default:N&1?b(D,O,A,lt,tt,nt,it,ut,et):N&6?F(D,O,A,lt,tt,nt,it,ut,et):(N&64||N&128)&&T.process(D,O,A,lt,tt,nt,it,ut,et,zt)}E!=null&&tt?Eo(E,D&&D.ref,nt,O||D,!O):E==null&&D&&D.ref!=null&&Eo(D.ref,null,nt,D,!0)},_=(D,O,A,lt)=>{if(D==null)i(O.el=a(O.children),A,lt);else{const tt=O.el=D.el;O.children!==D.children&&u(tt,O.children)}},p=(D,O,A,lt)=>{D==null?i(O.el=l(O.children||""),A,lt):O.el=D.el},M=(D,O,A,lt)=>{[D.el,D.anchor]=m(D.children,O,A,lt,D.el,D.anchor)},x=({el:D,anchor:O},A,lt)=>{let tt;for(;D&&D!==O;)tt=h(D),i(D,A,lt),D=tt;i(O,A,lt)},v=({el:D,anchor:O})=>{let A;for(;D&&D!==O;)A=h(D),r(D),D=A;r(O)},b=(D,O,A,lt,tt,nt,it,ut,et)=>{if(O.type==="svg"?it="svg":O.type==="math"&&(it="mathml"),D==null)w(O,A,lt,tt,nt,it,ut,et);else{const T=D.el&&D.el._isVueCE?D.el:null;try{T&&T._beginPatch(),y(D,O,tt,nt,it,ut,et)}finally{T&&T._endPatch()}}},w=(D,O,A,lt,tt,nt,it,ut)=>{let et,T;const{props:E,shapeFlag:N,transition:G,dirs:j}=D;if(et=D.el=o(D.type,nt,E&&E.is,E),N&8?c(et,D.children):N&16&&P(D.children,et,null,lt,tt,Vl(D,nt),it,ut),j&&Tr(D,null,lt,"created"),R(et,D,D.scopeId,it,lt),E){for(const Mt in E)Mt!=="value"&&!xo(Mt)&&s(et,Mt,null,E[Mt],nt,lt);"value"in E&&s(et,"value",null,E.value,nt),(T=E.onVnodeBeforeMount)&&ui(T,lt,D)}j&&Tr(D,null,lt,"beforeMount");const q=J0(tt,G);q&&G.beforeEnter(et),i(et,O,A),((T=E&&E.onVnodeMounted)||q||j)&&xn(()=>{T&&ui(T,lt,D),q&&G.enter(et),j&&Tr(D,null,lt,"mounted")},tt)},R=(D,O,A,lt,tt)=>{if(A&&d(D,A),lt)for(let nt=0;nt<lt.length;nt++)d(D,lt[nt]);if(tt){let nt=tt.subTree;if(O===nt||ym(nt.type)&&(nt.ssContent===O||nt.ssFallback===O)){const it=tt.vnode;R(D,it,it.scopeId,it.slotScopeIds,tt.parent)}}},P=(D,O,A,lt,tt,nt,it,ut,et=0)=>{for(let T=et;T<D.length;T++){const E=D[T]=ut?Ui(D[T]):mi(D[T]);g(null,E,O,A,lt,tt,nt,it,ut)}},y=(D,O,A,lt,tt,nt,it)=>{const ut=O.el=D.el;let{patchFlag:et,dynamicChildren:T,dirs:E}=O;et|=D.patchFlag&16;const N=D.props||be,G=O.props||be;let j;if(A&&br(A,!1),(j=G.onVnodeBeforeUpdate)&&ui(j,A,O,D),E&&Tr(O,D,A,"beforeUpdate"),A&&br(A,!0),(N.innerHTML&&G.innerHTML==null||N.textContent&&G.textContent==null)&&c(ut,""),T?S(D.dynamicChildren,T,ut,A,lt,Vl(O,tt),nt):it||V(D,O,ut,null,A,lt,Vl(O,tt),nt,!1),et>0){if(et&16)L(ut,N,G,A,tt);else if(et&2&&N.class!==G.class&&s(ut,"class",null,G.class,tt),et&4&&s(ut,"style",N.style,G.style,tt),et&8){const q=O.dynamicProps;for(let Mt=0;Mt<q.length;Mt++){const ht=q[Mt],dt=N[ht],ct=G[ht];(ct!==dt||ht==="value")&&s(ut,ht,dt,ct,tt,A)}}et&1&&D.children!==O.children&&c(ut,O.children)}else!it&&T==null&&L(ut,N,G,A,tt);((j=G.onVnodeUpdated)||E)&&xn(()=>{j&&ui(j,A,O,D),E&&Tr(O,D,A,"updated")},lt)},S=(D,O,A,lt,tt,nt,it)=>{for(let ut=0;ut<O.length;ut++){const et=D[ut],T=O[ut],E=et.el&&(et.type===Ge||!Vr(et,T)||et.shapeFlag&198)?f(et.el):A;g(et,T,E,null,lt,tt,nt,it,!0)}},L=(D,O,A,lt,tt)=>{if(O!==A){if(O!==be)for(const nt in O)!xo(nt)&&!(nt in A)&&s(D,nt,O[nt],null,tt,lt);for(const nt in A){if(xo(nt))continue;const it=A[nt],ut=O[nt];it!==ut&&nt!=="value"&&s(D,nt,ut,it,tt,lt)}"value"in A&&s(D,"value",O.value,A.value,tt)}},I=(D,O,A,lt,tt,nt,it,ut,et)=>{const T=O.el=D?D.el:a(""),E=O.anchor=D?D.anchor:a("");let{patchFlag:N,dynamicChildren:G,slotScopeIds:j}=O;j&&(ut=ut?ut.concat(j):j),D==null?(i(T,A,lt),i(E,A,lt),P(O.children||[],A,E,tt,nt,it,ut,et)):N>0&&N&64&&G&&D.dynamicChildren&&D.dynamicChildren.length===G.length?(S(D.dynamicChildren,G,A,tt,nt,it,ut),(O.key!=null||tt&&O===tt.subTree)&&gm(D,O,!0)):V(D,O,A,E,tt,nt,it,ut,et)},F=(D,O,A,lt,tt,nt,it,ut,et)=>{O.slotScopeIds=ut,D==null?O.shapeFlag&512?tt.ctx.activate(O,A,lt,it,et):X(O,A,lt,tt,nt,it,et):Y(D,O,et)},X=(D,O,A,lt,tt,nt,it)=>{const ut=D.component=cv(D,lt,tt);if(yl(D)&&(ut.ctx.renderer=zt),uv(ut,!1,it),ut.asyncDep){if(tt&&tt.registerDep(ut,W,it),!D.el){const et=ut.subTree=Re(hn);p(null,et,O,A),D.placeholder=et.el}}else W(ut,D,O,A,tt,nt,it)},Y=(D,O,A)=>{const lt=O.component=D.component;if(H0(D,O,A))if(lt.asyncDep&&!lt.asyncResolved){K(lt,O,A);return}else lt.next=O,lt.update();else O.el=D.el,lt.vnode=O},W=(D,O,A,lt,tt,nt,it)=>{const ut=()=>{if(D.isMounted){let{next:N,bu:G,u:j,parent:q,vnode:Mt}=D;{const xt=vm(D);if(xt){N&&(N.el=Mt.el,K(D,N,it)),xt.asyncDep.then(()=>{xn(()=>{D.isUnmounted||T()},tt)});return}}let ht=N,dt;br(D,!1),N?(N.el=Mt.el,K(D,N,it)):N=Mt,G&&Ua(G),(dt=N.props&&N.props.onVnodeBeforeUpdate)&&ui(dt,q,N,Mt),br(D,!0);const ct=_h(D),st=D.subTree;D.subTree=ct,g(st,ct,f(st.el),pt(st),D,tt,nt),N.el=ct.el,ht===null&&G0(D,ct.el),j&&xn(j,tt),(dt=N.props&&N.props.onVnodeUpdated)&&xn(()=>ui(dt,q,N,Mt),tt)}else{let N;const{el:G,props:j}=O,{bm:q,m:Mt,parent:ht,root:dt,type:ct}=D,st=To(O);br(D,!1),q&&Ua(q),!st&&(N=j&&j.onVnodeBeforeMount)&&ui(N,ht,O),br(D,!0);{dt.ce&&dt.ce._hasShadowRoot()&&dt.ce._injectChildStyle(ct);const xt=D.subTree=_h(D);g(null,xt,A,lt,D,tt,nt),O.el=xt.el}if(Mt&&xn(Mt,tt),!st&&(N=j&&j.onVnodeMounted)){const xt=O;xn(()=>ui(N,ht,xt),tt)}(O.shapeFlag&256||ht&&To(ht.vnode)&&ht.vnode.shapeFlag&256)&&D.a&&xn(D.a,tt),D.isMounted=!0,O=A=lt=null}};D.scope.on();const et=D.effect=new wp(ut);D.scope.off();const T=D.update=et.run.bind(et),E=D.job=et.runIfDirty.bind(et);E.i=D,E.id=D.uid,et.scheduler=()=>df(E),br(D,!0),T()},K=(D,O,A)=>{O.component=D;const lt=D.vnode.props;D.vnode=O,D.next=null,X0(D,O.props,lt,A),K0(D,O.children,A),Vi(),lh(D),Hi()},V=(D,O,A,lt,tt,nt,it,ut,et=!1)=>{const T=D&&D.children,E=D?D.shapeFlag:0,N=O.children,{patchFlag:G,shapeFlag:j}=O;if(G>0){if(G&128){gt(T,N,A,lt,tt,nt,it,ut,et);return}else if(G&256){vt(T,N,A,lt,tt,nt,it,ut,et);return}}j&8?(E&16&&at(T,tt,nt),N!==T&&c(A,N)):E&16?j&16?gt(T,N,A,lt,tt,nt,it,ut,et):at(T,tt,nt,!0):(E&8&&c(A,""),j&16&&P(N,A,lt,tt,nt,it,ut,et))},vt=(D,O,A,lt,tt,nt,it,ut,et)=>{D=D||Rs,O=O||Rs;const T=D.length,E=O.length,N=Math.min(T,E);let G;for(G=0;G<N;G++){const j=O[G]=et?Ui(O[G]):mi(O[G]);g(D[G],j,A,null,tt,nt,it,ut,et)}T>E?at(D,tt,nt,!0,!1,N):P(O,A,lt,tt,nt,it,ut,et,N)},gt=(D,O,A,lt,tt,nt,it,ut,et)=>{let T=0;const E=O.length;let N=D.length-1,G=E-1;for(;T<=N&&T<=G;){const j=D[T],q=O[T]=et?Ui(O[T]):mi(O[T]);if(Vr(j,q))g(j,q,A,null,tt,nt,it,ut,et);else break;T++}for(;T<=N&&T<=G;){const j=D[N],q=O[G]=et?Ui(O[G]):mi(O[G]);if(Vr(j,q))g(j,q,A,null,tt,nt,it,ut,et);else break;N--,G--}if(T>N){if(T<=G){const j=G+1,q=j<E?O[j].el:lt;for(;T<=G;)g(null,O[T]=et?Ui(O[T]):mi(O[T]),A,q,tt,nt,it,ut,et),T++}}else if(T>G)for(;T<=N;)Lt(D[T],tt,nt,!0),T++;else{const j=T,q=T,Mt=new Map;for(T=q;T<=G;T++){const Et=O[T]=et?Ui(O[T]):mi(O[T]);Et.key!=null&&Mt.set(Et.key,T)}let ht,dt=0;const ct=G-q+1;let st=!1,xt=0;const Ot=new Array(ct);for(T=0;T<ct;T++)Ot[T]=0;for(T=j;T<=N;T++){const Et=D[T];if(dt>=ct){Lt(Et,tt,nt,!0);continue}let Xt;if(Et.key!=null)Xt=Mt.get(Et.key);else for(ht=q;ht<=G;ht++)if(Ot[ht-q]===0&&Vr(Et,O[ht])){Xt=ht;break}Xt===void 0?Lt(Et,tt,nt,!0):(Ot[Xt-q]=T+1,Xt>=xt?xt=Xt:st=!0,g(Et,O[Xt],A,null,tt,nt,it,ut,et),dt++)}const Ht=st?Q0(Ot):Rs;for(ht=Ht.length-1,T=ct-1;T>=0;T--){const Et=q+T,Xt=O[Et],Yt=O[Et+1],de=Et+1<E?Yt.el||xm(Yt):lt;Ot[T]===0?g(null,Xt,A,de,tt,nt,it,ut,et):st&&(ht<0||T!==Ht[ht]?St(Xt,A,de,2):ht--)}}},St=(D,O,A,lt,tt=null)=>{const{el:nt,type:it,transition:ut,children:et,shapeFlag:T}=D;if(T&6){St(D.component.subTree,O,A,lt);return}if(T&128){D.suspense.move(O,A,lt);return}if(T&64){it.move(D,O,A,zt);return}if(it===Ge){i(nt,O,A);for(let N=0;N<et.length;N++)St(et[N],O,A,lt);i(D.anchor,O,A);return}if(it===Oa){x(D,O,A);return}if(lt!==2&&T&1&&ut)if(lt===0)ut.beforeEnter(nt),i(nt,O,A),xn(()=>ut.enter(nt),tt);else{const{leave:N,delayLeave:G,afterLeave:j}=ut,q=()=>{D.ctx.isUnmounted?r(nt):i(nt,O,A)},Mt=()=>{nt._isLeaving&&nt[hi](!0),N(nt,()=>{q(),j&&j()})};G?G(nt,q,Mt):Mt()}else i(nt,O,A)},Lt=(D,O,A,lt=!1,tt=!1)=>{const{type:nt,props:it,ref:ut,children:et,dynamicChildren:T,shapeFlag:E,patchFlag:N,dirs:G,cacheIndex:j}=D;if(N===-2&&(tt=!1),ut!=null&&(Vi(),Eo(ut,null,A,D,!0),Hi()),j!=null&&(O.renderCache[j]=void 0),E&256){O.ctx.deactivate(D);return}const q=E&1&&G,Mt=!To(D);let ht;if(Mt&&(ht=it&&it.onVnodeBeforeUnmount)&&ui(ht,O,D),E&6)_t(D.component,A,lt);else{if(E&128){D.suspense.unmount(A,lt);return}q&&Tr(D,null,O,"beforeUnmount"),E&64?D.type.remove(D,O,A,zt,lt):T&&!T.hasOnce&&(nt!==Ge||N>0&&N&64)?at(T,O,A,!1,!0):(nt===Ge&&N&384||!tt&&E&16)&&at(et,O,A),lt&&Qt(D)}(Mt&&(ht=it&&it.onVnodeUnmounted)||q)&&xn(()=>{ht&&ui(ht,O,D),q&&Tr(D,null,O,"unmounted")},A)},Qt=D=>{const{type:O,el:A,anchor:lt,transition:tt}=D;if(O===Ge){rt(A,lt);return}if(O===Oa){v(D);return}const nt=()=>{r(A),tt&&!tt.persisted&&tt.afterLeave&&tt.afterLeave()};if(D.shapeFlag&1&&tt&&!tt.persisted){const{leave:it,delayLeave:ut}=tt,et=()=>it(A,nt);ut?ut(D.el,nt,et):et()}else nt()},rt=(D,O)=>{let A;for(;D!==O;)A=h(D),r(D),D=A;r(O)},_t=(D,O,A)=>{const{bum:lt,scope:tt,job:nt,subTree:it,um:ut,m:et,a:T}=D;xh(et),xh(T),lt&&Ua(lt),tt.stop(),nt&&(nt.flags|=8,Lt(it,D,O,A)),ut&&xn(ut,O),xn(()=>{D.isUnmounted=!0},O)},at=(D,O,A,lt=!1,tt=!1,nt=0)=>{for(let it=nt;it<D.length;it++)Lt(D[it],O,A,lt,tt)},pt=D=>{if(D.shapeFlag&6)return pt(D.component.subTree);if(D.shapeFlag&128)return D.suspense.next();const O=h(D.anchor||D.el),A=O&&O[d0];return A?h(A):O};let wt=!1;const Dt=(D,O,A)=>{let lt;D==null?O._vnode&&(Lt(O._vnode,null,null,!0),lt=O._vnode.component):g(O._vnode||null,D,O,null,null,null,A),O._vnode=D,wt||(wt=!0,lh(lt),Wp(),wt=!1)},zt={p:g,um:Lt,m:St,r:Qt,mt:X,mc:P,pc:V,pbc:S,n:pt,o:n};return{render:Dt,hydrate:void 0,createApp:O0(Dt)}}function Vl({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function br({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function J0(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function gm(n,t,e=!1){const i=n.children,r=t.children;if(Gt(i)&&Gt(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Ui(r[s]),a.el=o.el),!e&&a.patchFlag!==-2&&gm(o,a)),a.type===Tl&&(a.patchFlag===-1&&(a=r[s]=Ui(a)),a.el=o.el),a.type===hn&&!a.el&&(a.el=o.el)}}function Q0(n){const t=n.slice(),e=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const u=n[i];if(u!==0){if(r=e[e.length-1],n[r]<u){t[i]=r,e.push(i);continue}for(s=0,o=e.length-1;s<o;)a=s+o>>1,n[e[a]]<u?s=a+1:o=a;u<n[e[s]]&&(s>0&&(t[i]=e[s-1]),e[s]=i)}}for(s=e.length,o=e[s-1];s-- >0;)e[s]=o,o=t[o];return e}function vm(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:vm(t)}function xh(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function xm(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?xm(t.subTree):null}const ym=n=>n.__isSuspense;function tv(n,t){t&&t.pendingBranch?Gt(n)?t.effects.push(...n):t.effects.push(n):l0(n)}const Ge=Symbol.for("v-fgt"),Tl=Symbol.for("v-txt"),hn=Symbol.for("v-cmt"),Oa=Symbol.for("v-stc"),Ao=[];let In=null;function se(n=!1){Ao.push(In=n?null:[])}function ev(){Ao.pop(),In=Ao[Ao.length-1]||null}let Fo=1;function tl(n,t=!1){Fo+=n,n<0&&In&&t&&(In.hasOnce=!0)}function Mm(n){return n.dynamicChildren=Fo>0?In||Rs:null,ev(),Fo>0&&In&&In.push(n),n}function le(n,t,e,i,r,s){return Mm($(n,t,e,i,r,s,!0))}function nv(n,t,e,i,r){return Mm(Re(n,t,e,i,r,!0))}function el(n){return n?n.__v_isVNode===!0:!1}function Vr(n,t){return n.type===t.type&&n.key===t.key}const Sm=({key:n})=>n??null,Fa=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?ze(n)||on(n)||Jt(n)?{i:Xn,r:n,k:t,f:!!e}:n:null);function $(n,t=null,e=null,i=0,r=null,s=n===Ge?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Sm(t),ref:t&&Fa(t),scopeId:qp,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Xn};return a?(_f(l,e),s&128&&n.normalize(l)):e&&(l.shapeFlag|=ze(e)?8:16),Fo>0&&!o&&In&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&In.push(l),l}const Re=iv;function iv(n,t=null,e=null,i=0,r=null,s=!1){if((!n||n===C0)&&(n=hn),el(n)){const a=_r(n,t,!0);return e&&_f(a,e),Fo>0&&!s&&In&&(a.shapeFlag&6?In[In.indexOf(n)]=a:In.push(a)),a.patchFlag=-2,a}if(pv(n)&&(n=n.__vccOpts),t){t=rv(t);let{class:a,style:l}=t;a&&!ze(a)&&(t.class=Fe(a)),ge(l)&&(hf(l)&&!Gt(l)&&(l=Xe({},l)),t.style=Kr(l))}const o=ze(n)?1:ym(n)?128:Kp(n)?64:ge(n)?4:Jt(n)?2:0;return $(n,t,e,i,r,o,s,!0)}function rv(n){return n?hf(n)||fm(n)?Xe({},n):n:null}function _r(n,t,e=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,u=t?ov(r||{},t):r,c={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&Sm(u),ref:t&&t.ref?e&&s?Gt(s)?s.concat(Fa(t)):[s,Fa(t)]:Fa(t):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Ge?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&_r(n.ssContent),ssFallback:n.ssFallback&&_r(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Oo(c,l.clone(c)),c}function Ba(n=" ",t=0){return Re(Tl,null,n,t)}function sv(n,t){const e=Re(Oa,null,n);return e.staticCount=t,e}function ei(n="",t=!1){return t?(se(),nv(hn,null,n)):Re(hn,null,n)}function mi(n){return n==null||typeof n=="boolean"?Re(hn):Gt(n)?Re(Ge,null,n.slice()):el(n)?Ui(n):Re(Tl,null,String(n))}function Ui(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:_r(n)}function _f(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Gt(t))e=16;else if(typeof t=="object")if(i&65){const r=t.default;r&&(r._c&&(r._d=!1),_f(n,r()),r._c&&(r._d=!0));return}else{e=32;const r=t._;!r&&!fm(t)?t._ctx=Xn:r===3&&Xn&&(Xn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else Jt(t)?(t={default:t,_ctx:Xn},e=32):(t=String(t),i&64?(e=16,t=[Ba(t)]):e=8);n.children=t,n.shapeFlag|=e}function ov(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const r in i)if(r==="class")t.class!==i.class&&(t.class=Fe([t.class,i.class]));else if(r==="style")t.style=Kr([t.style,i.style]);else if(ml(r)){const s=t[r],o=i[r];o&&s!==o&&!(Gt(s)&&s.includes(o))&&(t[r]=s?[].concat(s,o):o)}else r!==""&&(t[r]=i[r])}return t}function ui(n,t,e,i=null){li(n,t,7,[e,i])}const av=om();let lv=0;function cv(n,t,e){const i=n.type,r=(t?t.appContext:n.appContext)||av,s={uid:lv++,vnode:n,type:i,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Pg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:dm(i,r),emitsOptions:am(i,r),emit:null,emitted:null,propsDefaults:be,inheritAttrs:i.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=B0.bind(null,s),n.ce&&n.ce(s),s}let dn=null;const Em=()=>dn||Xn;let nl,Yc;{const n=gl(),t=(e,i)=>{let r;return(r=n[e])||(r=n[e]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};nl=t("__VUE_INSTANCE_SETTERS__",e=>dn=e),Yc=t("__VUE_SSR_SETTERS__",e=>Bo=e)}const Zo=n=>{const t=dn;return nl(n),n.scope.on(),()=>{n.scope.off(),nl(t)}},yh=()=>{dn&&dn.scope.off(),nl(null)};function Tm(n){return n.vnode.shapeFlag&4}let Bo=!1;function uv(n,t=!1,e=!1){t&&Yc(t);const{props:i,children:r}=n.vnode,s=Tm(n);W0(n,i,s,t),$0(n,r,e||t);const o=s?fv(n,t):void 0;return t&&Yc(!1),o}function fv(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,R0);const{setup:i}=e;if(i){Vi();const r=n.setupContext=i.length>1?dv(n):null,s=Zo(n),o=Ko(i,n,0,[n.props,r]),a=xp(o);if(Hi(),s(),(a||n.sp)&&!To(n)&&em(n),a){if(o.then(yh,yh),t)return o.then(l=>{Mh(n,l)}).catch(l=>{xl(l,n,0)});n.asyncDep=o}else Mh(n,o)}else bm(n)}function Mh(n,t,e){Jt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:ge(t)&&(n.setupState=Vp(t)),bm(n)}function bm(n,t,e){const i=n.type;n.render||(n.render=i.render||yi);{const r=Zo(n);Vi();try{P0(n)}finally{Hi(),r()}}}const hv={get(n,t){return rn(n,"get",""),n[t]}};function dv(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,hv),slots:n.slots,emit:n.emit,expose:t}}function bl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Vp(Zg(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in bo)return bo[e](n)},has(t,e){return e in t||e in bo}})):n.proxy}function pv(n){return Jt(n)&&"__vccOpts"in n}const Mn=(n,t)=>n0(n,t,Bo);function mv(n,t,e){try{tl(-1);const i=arguments.length;return i===2?ge(t)&&!Gt(t)?el(t)?Re(n,null,[t]):Re(n,t):Re(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&el(e)&&(e=[e]),Re(n,t,e))}finally{tl(1)}}const _v="3.5.29";/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $c;const Sh=typeof window<"u"&&window.trustedTypes;if(Sh)try{$c=Sh.createPolicy("vue",{createHTML:n=>n})}catch{}const Am=$c?n=>$c.createHTML(n):n=>n,gv="http://www.w3.org/2000/svg",vv="http://www.w3.org/1998/Math/MathML",Li=typeof document<"u"?document:null,Eh=Li&&Li.createElement("template"),xv={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const r=t==="svg"?Li.createElementNS(gv,n):t==="mathml"?Li.createElementNS(vv,n):e?Li.createElement(n,{is:e}):Li.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Li.createTextNode(n),createComment:n=>Li.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Li.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,r,s){const o=e?e.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),e),!(r===s||!(r=r.nextSibling)););else{Eh.innerHTML=Am(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Eh.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},ji="transition",so="animation",zo=Symbol("_vtc"),wm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},yv=Xe({},jp,wm),Mv=n=>(n.displayName="Transition",n.props=yv,n),Fr=Mv((n,{slots:t})=>mv(_0,Sv(n),t)),Ar=(n,t=[])=>{Gt(n)?n.forEach(e=>e(...t)):n&&n(...t)},Th=n=>n?Gt(n)?n.some(t=>t.length>1):n.length>1:!1;function Sv(n){const t={};for(const I in n)I in wm||(t[I]=n[I]);if(n.css===!1)return t;const{name:e="v",type:i,duration:r,enterFromClass:s=`${e}-enter-from`,enterActiveClass:o=`${e}-enter-active`,enterToClass:a=`${e}-enter-to`,appearFromClass:l=s,appearActiveClass:u=o,appearToClass:c=a,leaveFromClass:f=`${e}-leave-from`,leaveActiveClass:h=`${e}-leave-active`,leaveToClass:d=`${e}-leave-to`}=n,m=Ev(r),g=m&&m[0],_=m&&m[1],{onBeforeEnter:p,onEnter:M,onEnterCancelled:x,onLeave:v,onLeaveCancelled:b,onBeforeAppear:w=p,onAppear:R=M,onAppearCancelled:P=x}=t,y=(I,F,X,Y)=>{I._enterCancelled=Y,wr(I,F?c:a),wr(I,F?u:o),X&&X()},S=(I,F)=>{I._isLeaving=!1,wr(I,f),wr(I,d),wr(I,h),F&&F()},L=I=>(F,X)=>{const Y=I?R:M,W=()=>y(F,I,X);Ar(Y,[F,W]),bh(()=>{wr(F,I?l:s),bi(F,I?c:a),Th(Y)||Ah(F,i,g,W)})};return Xe(t,{onBeforeEnter(I){Ar(p,[I]),bi(I,s),bi(I,o)},onBeforeAppear(I){Ar(w,[I]),bi(I,l),bi(I,u)},onEnter:L(!1),onAppear:L(!0),onLeave(I,F){I._isLeaving=!0;const X=()=>S(I,F);bi(I,f),I._enterCancelled?(bi(I,h),Rh(I)):(Rh(I),bi(I,h)),bh(()=>{I._isLeaving&&(wr(I,f),bi(I,d),Th(v)||Ah(I,i,_,X))}),Ar(v,[I,X])},onEnterCancelled(I){y(I,!1,void 0,!0),Ar(x,[I])},onAppearCancelled(I){y(I,!0,void 0,!0),Ar(P,[I])},onLeaveCancelled(I){S(I),Ar(b,[I])}})}function Ev(n){if(n==null)return null;if(ge(n))return[Hl(n.enter),Hl(n.leave)];{const t=Hl(n);return[t,t]}}function Hl(n){return Sg(n)}function bi(n,t){t.split(/\s+/).forEach(e=>e&&n.classList.add(e)),(n[zo]||(n[zo]=new Set)).add(t)}function wr(n,t){t.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const e=n[zo];e&&(e.delete(t),e.size||(n[zo]=void 0))}function bh(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Tv=0;function Ah(n,t,e,i){const r=n._endId=++Tv,s=()=>{r===n._endId&&i()};if(e!=null)return setTimeout(s,e);const{type:o,timeout:a,propCount:l}=bv(n,t);if(!o)return i();const u=o+"end";let c=0;const f=()=>{n.removeEventListener(u,h),s()},h=d=>{d.target===n&&++c>=l&&f()};setTimeout(()=>{c<l&&f()},a+1),n.addEventListener(u,h)}function bv(n,t){const e=window.getComputedStyle(n),i=m=>(e[m]||"").split(", "),r=i(`${ji}Delay`),s=i(`${ji}Duration`),o=wh(r,s),a=i(`${so}Delay`),l=i(`${so}Duration`),u=wh(a,l);let c=null,f=0,h=0;t===ji?o>0&&(c=ji,f=o,h=s.length):t===so?u>0&&(c=so,f=u,h=l.length):(f=Math.max(o,u),c=f>0?o>u?ji:so:null,h=c?c===ji?s.length:l.length:0);const d=c===ji&&/\b(?:transform|all)(?:,|$)/.test(i(`${ji}Property`).toString());return{type:c,timeout:f,propCount:h,hasTransform:d}}function wh(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((e,i)=>Ch(e)+Ch(n[i])))}function Ch(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Rh(n){return(n?n.ownerDocument:document).body.offsetHeight}function Av(n,t,e){const i=n[zo];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const il=Symbol("_vod"),Cm=Symbol("_vsh"),Gl={name:"show",beforeMount(n,{value:t},{transition:e}){n[il]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):oo(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),oo(n,!0),i.enter(n)):i.leave(n,()=>{oo(n,!1)}):oo(n,t))},beforeUnmount(n,{value:t}){oo(n,t)}};function oo(n,t){n.style.display=t?n[il]:"none",n[Cm]=!t}const wv=Symbol(""),Cv=/(?:^|;)\s*display\s*:/;function Rv(n,t,e){const i=n.style,r=ze(e);let s=!1;if(e&&!r){if(t)if(ze(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&za(i,a,"")}else for(const o in t)e[o]==null&&za(i,o,"");for(const o in e)o==="display"&&(s=!0),za(i,o,e[o])}else if(r){if(t!==e){const o=i[wv];o&&(e+=";"+o),i.cssText=e,s=Cv.test(e)}}else t&&n.removeAttribute("style");il in n&&(n[il]=s?i.display:"",n[Cm]&&(i.display="none"))}const Ph=/\s*!important$/;function za(n,t,e){if(Gt(e))e.forEach(i=>za(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=Pv(n,t);Ph.test(e)?n.setProperty(rs(i),e.replace(Ph,""),"important"):n[i]=e}}const Dh=["Webkit","Moz","ms"],Wl={};function Pv(n,t){const e=Wl[t];if(e)return e;let i=mr(t);if(i!=="filter"&&i in n)return Wl[t]=i;i=Sp(i);for(let r=0;r<Dh.length;r++){const s=Dh[r]+i;if(s in n)return Wl[t]=s}return t}const Lh="http://www.w3.org/1999/xlink";function Ih(n,t,e,i,r,s=Cg(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Lh,t.slice(6,t.length)):n.setAttributeNS(Lh,t,e):e==null||s&&!Tp(e)?n.removeAttribute(t):n.setAttribute(t,s?"":Mi(e)?String(e):e)}function Uh(n,t,e,i,r){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Am(e):e);return}const s=n.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=Tp(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(r||t)}function Ts(n,t,e,i){n.addEventListener(t,e,i)}function Dv(n,t,e,i){n.removeEventListener(t,e,i)}const Nh=Symbol("_vei");function Lv(n,t,e,i,r=null){const s=n[Nh]||(n[Nh]={}),o=s[t];if(i&&o)o.value=i;else{const[a,l]=Iv(t);if(i){const u=s[t]=Ov(i,r);Ts(n,a,u,l)}else o&&(Dv(n,a,o,l),s[t]=void 0)}}const Oh=/(?:Once|Passive|Capture)$/;function Iv(n){let t;if(Oh.test(n)){t={};let i;for(;i=n.match(Oh);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):rs(n.slice(2)),t]}let Xl=0;const Uv=Promise.resolve(),Nv=()=>Xl||(Uv.then(()=>Xl=0),Xl=Date.now());function Ov(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;li(Fv(i,e.value),t,5,[i])};return e.value=n,e.attached=Nv(),e}function Fv(n,t){if(Gt(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>r=>!r._stopped&&i&&i(r))}else return t}const Fh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Bv=(n,t,e,i,r,s)=>{const o=r==="svg";t==="class"?Av(n,i,o):t==="style"?Rv(n,e,i):ml(t)?tf(t)||Lv(n,t,e,i,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):zv(n,t,i,o))?(Uh(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Ih(n,t,i,o,s,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!ze(i))?Uh(n,mr(t),i,s,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),Ih(n,t,i,o))};function zv(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&Fh(t)&&Jt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Fh(t)&&ze(e)?!1:t in n}const Bh=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Gt(t)?e=>Ua(t,e):t};function kv(n){n.target.composing=!0}function zh(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ql=Symbol("_assign");function kh(n,t,e){return t&&(n=n.trim()),e&&(n=rf(n)),n}const Rm={created(n,{modifiers:{lazy:t,trim:e,number:i}},r){n[ql]=Bh(r);const s=i||r.props&&r.props.type==="number";Ts(n,t?"change":"input",o=>{o.target.composing||n[ql](kh(n.value,e,s))}),(e||s)&&Ts(n,"change",()=>{n.value=kh(n.value,e,s)}),t||(Ts(n,"compositionstart",kv),Ts(n,"compositionend",zh),Ts(n,"change",zh))},mounted(n,{value:t}){n.value=t??""},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:r,number:s}},o){if(n[ql]=Bh(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?rf(n.value):n.value,l=t??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&t===e||r&&n.value.trim()===l)||(n.value=l))}},Vv=Xe({patchProp:Bv},xv);let Vh;function Hv(){return Vh||(Vh=j0(Vv))}const Gv=((...n)=>{const t=Hv().createApp(...n),{mount:e}=t;return t.mount=i=>{const r=Xv(i);if(!r)return;const s=t._component;!Jt(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=e(r,!1,Wv(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t});function Wv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Xv(n){return ze(n)?document.querySelector(n):n}function Ii(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Pm(n,t){n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var On={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ks={duration:.5,overwrite:!1,delay:0},gf,Je,Pe,qn=1e8,Te=1/qn,Kc=Math.PI*2,qv=Kc/4,Yv=0,Dm=Math.sqrt,$v=Math.cos,Kv=Math.sin,Ke=function(t){return typeof t=="string"},Ne=function(t){return typeof t=="function"},Wi=function(t){return typeof t=="number"},vf=function(t){return typeof t>"u"},Si=function(t){return typeof t=="object"},En=function(t){return t!==!1},xf=function(){return typeof window<"u"},ca=function(t){return Ne(t)||Ke(t)},Lm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},an=Array.isArray,jv=/random\([^)]+\)/g,Zv=/,\s*/g,Hh=/(?:-?\.?\d|\.)+/gi,Im=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,As=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Yl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Um=/[+-]=-?[.\d]+/,Jv=/[^,'"\[\]\s]+/gi,Qv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Le,pi,jc,yf,Fn={},rl={},Nm,Om=function(t){return(rl=Vs(t,Fn))&&wn},Mf=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ko=function(t,e){return!e&&console.warn(t)},Fm=function(t,e){return t&&(Fn[t]=e)&&rl&&(rl[t]=e)||Fn},Vo=function(){return 0},tx={suppressEvents:!0,isStart:!0,kill:!1},ka={suppressEvents:!0,kill:!1},ex={suppressEvents:!0},Sf={},fr=[],Zc={},Bm,Dn={},$l={},Gh=30,Va=[],Ef="",Tf=function(t){var e=t[0],i,r;if(Si(e)||Ne(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(r=Va.length;r--&&!Va[r].targetTest(e););i=Va[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new l_(t[r],i)))||t.splice(r,1);return t},Jr=function(t){return t._gsap||Tf(Yn(t))[0]._gsap},zm=function(t,e,i){return(i=t[e])&&Ne(i)?t[e]():vf(i)&&t.getAttribute&&t.getAttribute(e)||i},Tn=function(t,e){return(t=t.split(",")).forEach(e)||t},Be=function(t){return Math.round(t*1e5)/1e5||0},De=function(t){return Math.round(t*1e7)/1e7||0},Is=function(t,e){var i=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+r:i==="-"?t-r:i==="*"?t*r:t/r},nx=function(t,e){for(var i=e.length,r=0;t.indexOf(e[r])<0&&++r<i;);return r<i},sl=function(){var t=fr.length,e=fr.slice(0),i,r;for(Zc={},fr.length=0,i=0;i<t;i++)r=e[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},bf=function(t){return!!(t._initted||t._startAt||t.add)},km=function(t,e,i,r){fr.length&&!Je&&sl(),t.render(e,i,!!(Je&&e<0&&bf(t))),fr.length&&!Je&&sl()},Vm=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Jv).length<2?e:Ke(t)?t.trim():t},Hm=function(t){return t},Bn=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},ix=function(t){return function(e,i){for(var r in i)r in e||r==="duration"&&t||r==="ease"||(e[r]=i[r])}},Vs=function(t,e){for(var i in e)t[i]=e[i];return t},Wh=function n(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=Si(e[i])?n(t[i]||(t[i]={}),e[i]):e[i]);return t},ol=function(t,e){var i={},r;for(r in t)r in e||(i[r]=t[r]);return i},wo=function(t){var e=t.parent||Le,i=t.keyframes?ix(an(t.keyframes)):Bn;if(En(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},rx=function(t,e){for(var i=t.length,r=i===e.length;r&&i--&&t[i]===e[i];);return i<0},Gm=function(t,e,i,r,s){var o=t[r],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[r]=e,e._prev=o,e.parent=e._dp=t,e},Al=function(t,e,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=e._prev,o=e._next;s?s._next=o:t[i]===e&&(t[i]=o),o?o._prev=s:t[r]===e&&(t[r]=s),e._next=e._prev=e.parent=null},gr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Qr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},sx=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Jc=function(t,e,i,r){return t._startAt&&(Je?t._startAt.revert(ka):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},ox=function n(t){return!t||t._ts&&n(t.parent)},Xh=function(t){return t._repeat?Hs(t._tTime,t=t.duration()+t._rDelay)*t:0},Hs=function(t,e){var i=Math.floor(t=De(t/e));return t&&i===t?i-1:i},al=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},wl=function(t){return t._end=De(t._start+(t._tDur/Math.abs(t._ts||t._rts||Te)||0))},Cl=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=De(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),wl(t),i._dirty||Qr(i,t)),t},Wm=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=al(t.rawTime(),e),(!e._dur||Jo(0,e.totalDuration(),i)-e._tTime>Te)&&e.render(i,!0)),Qr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-Te}},gi=function(t,e,i,r){return e.parent&&gr(e),e._start=De((Wi(i)?i:i||t!==Le?Gn(t,i,e):t._time)+e._delay),e._end=De(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Gm(t,e,"_first","_last",t._sort?"_start":0),Qc(e)||(t._recent=e),r||Wm(t,e),t._ts<0&&Cl(t,t._tTime),t},Xm=function(t,e){return(Fn.ScrollTrigger||Mf("scrollTrigger",e))&&Fn.ScrollTrigger.create(e,t)},qm=function(t,e,i,r,s){if(wf(t,e,s),!t._initted)return 1;if(!i&&t._pt&&!Je&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Bm!==Ln.frame)return fr.push(t),t._lazy=[s,r],1},ax=function n(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||n(e))},Qc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},lx=function(t,e,i,r){var s=t.ratio,o=e<0||!e&&(!t._start&&ax(t)&&!(!t._initted&&Qc(t))||(t._ts<0||t._dp._ts<0)&&!Qc(t))?0:1,a=t._rDelay,l=0,u,c,f;if(a&&t._repeat&&(l=Jo(0,t._tDur,e),c=Hs(l,a),t._yoyo&&c&1&&(o=1-o),c!==Hs(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||Je||r||t._zTime===Te||!e&&t._zTime){if(!t._initted&&qm(t,e,r,i,l))return;for(f=t._zTime,t._zTime=e||(i?Te:0),i||(i=e&&!f),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,u=t._pt;u;)u.r(o,u.d),u=u._next;e<0&&Jc(t,e,i,!0),t._onUpdate&&!i&&Un(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&Un(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&gr(t,1),!i&&!Je&&(Un(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},cx=function(t,e,i){var r;if(i>e)for(r=t._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},Gs=function(t,e,i,r){var s=t._repeat,o=De(e)||0,a=t._tTime/t._tDur;return a&&!r&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:De(o*(s+1)+t._rDelay*s):o,a>0&&!r&&Cl(t,t._tTime=t._tDur*a),t.parent&&wl(t),i||Qr(t.parent,t),t},qh=function(t){return t instanceof pn?Qr(t):Gs(t,t._dur)},ux={_start:0,endTime:Vo,totalDuration:Vo},Gn=function n(t,e,i){var r=t.labels,s=t._recent||ux,o=t.duration()>=qn?s.endTime(!1):t._dur,a,l,u;return Ke(e)&&(isNaN(e)||e in r)?(l=e.charAt(0),u=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(e in r||(r[e]=o),r[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),u&&i&&(l=l/100*(an(i)?i[0]:i).totalDuration()),a>1?n(t,e.substr(0,a-1),i)+l:o+l)):e==null?o:+e},Co=function(t,e,i){var r=Wi(e[1]),s=(r?2:1)+(t<2?0:1),o=e[s],a,l;if(r&&(o.duration=e[1]),o.parent=i,t){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=En(l.vars.inherit)&&l.parent;o.immediateRender=En(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new He(e[0],o,e[s+1])},Mr=function(t,e){return t||t===0?e(t):e},Jo=function(t,e,i){return i<t?t:i>e?e:i},sn=function(t,e){return!Ke(t)||!(e=Qv.exec(t))?"":e[1]},fx=function(t,e,i){return Mr(i,function(r){return Jo(t,e,r)})},tu=[].slice,Ym=function(t,e){return t&&Si(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Si(t[0]))&&!t.nodeType&&t!==pi},hx=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(r){var s;return Ke(r)&&!e||Ym(r,1)?(s=i).push.apply(s,Yn(r)):i.push(r)})||i},Yn=function(t,e,i){return Pe&&!e&&Pe.selector?Pe.selector(t):Ke(t)&&!i&&(jc||!Ws())?tu.call((e||yf).querySelectorAll(t),0):an(t)?hx(t,i):Ym(t)?tu.call(t,0):t?[t]:[]},eu=function(t){return t=Yn(t)[0]||ko("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return Yn(e,i.querySelectorAll?i:i===t?ko("Invalid scope")||yf.createElement("div"):t)}},$m=function(t){return t.sort(function(){return .5-Math.random()})},Km=function(t){if(Ne(t))return t;var e=Si(t)?t:{each:t},i=ts(e.ease),r=e.from||0,s=parseFloat(e.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=e.axis,c=r,f=r;return Ke(r)?c=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],f=r[1]),function(h,d,m){var g=(m||e).length,_=o[g],p,M,x,v,b,w,R,P,y;if(!_){if(y=e.grid==="auto"?0:(e.grid||[1,qn])[1],!y){for(R=-qn;R<(R=m[y++].getBoundingClientRect().left)&&y<g;);y<g&&y--}for(_=o[g]=[],p=l?Math.min(y,g)*c-.5:r%y,M=y===qn?0:l?g*f/y-.5:r/y|0,R=0,P=qn,w=0;w<g;w++)x=w%y-p,v=M-(w/y|0),_[w]=b=u?Math.abs(u==="y"?v:x):Dm(x*x+v*v),b>R&&(R=b),b<P&&(P=b);r==="random"&&$m(_),_.max=R-P,_.min=P,_.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(y>g?g-1:u?u==="y"?g/y:y:Math.max(y,g/y))||0)*(r==="edges"?-1:1),_.b=g<0?s-g:s,_.u=sn(e.amount||e.each)||0,i=i&&g<0?s_(i):i}return g=(_[h]-_.min)/_.max||0,De(_.b+(i?i(g):g)*_.v)+_.u}},nu=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var r=De(Math.round(parseFloat(i)/t)*t*e);return(r-r%1)/e+(Wi(i)?0:sn(i))}},jm=function(t,e){var i=an(t),r,s;return!i&&Si(t)&&(r=i=t.radius||qn,t.values?(t=Yn(t.values),(s=!Wi(t[0]))&&(r*=r)):t=nu(t.increment)),Mr(e,i?Ne(t)?function(o){return s=t(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=qn,c=0,f=t.length,h,d;f--;)s?(h=t[f].x-a,d=t[f].y-l,h=h*h+d*d):h=Math.abs(t[f]-a),h<u&&(u=h,c=f);return c=!r||u<=r?t[c]:o,s||c===o||Wi(o)?c:c+sn(o)}:nu(t))},Zm=function(t,e,i,r){return Mr(an(t)?!e:i===!0?!!(i=0):!r,function(){return an(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*r)/r})},dx=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(r){return e.reduce(function(s,o){return o(s)},r)}},px=function(t,e){return function(i){return t(parseFloat(i))+(e||sn(i))}},mx=function(t,e,i){return Qm(t,e,0,1,i)},Jm=function(t,e,i){return Mr(i,function(r){return t[~~e(r)]})},_x=function n(t,e,i){var r=e-t;return an(t)?Jm(t,n(0,t.length),e):Mr(i,function(s){return(r+(s-t)%r)%r+t})},gx=function n(t,e,i){var r=e-t,s=r*2;return an(t)?Jm(t,n(0,t.length-1),e):Mr(i,function(o){return o=(s+(o-t)%s)%s||0,t+(o>r?s-o:o)})},Ho=function(t){return t.replace(jv,function(e){var i=e.indexOf("[")+1,r=e.substring(i||7,i?e.indexOf("]"):e.length-1).split(Zv);return Zm(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},Qm=function(t,e,i,r,s){var o=e-t,a=r-i;return Mr(s,function(l){return i+((l-t)/o*a||0)})},vx=function n(t,e,i,r){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=Ke(t),a={},l,u,c,f,h;if(i===!0&&(r=1)&&(i=null),o)t={p:t},e={p:e};else if(an(t)&&!an(e)){for(c=[],f=t.length,h=f-2,u=1;u<f;u++)c.push(n(t[u-1],t[u]));f--,s=function(m){m*=f;var g=Math.min(h,~~m);return c[g](m-g)},i=e}else r||(t=Vs(an(t)?[]:{},t));if(!c){for(l in e)Af.call(a,t,l,"get",e[l]);s=function(m){return Pf(m,a)||(o?t.p:t)}}}return Mr(i,s)},Yh=function(t,e,i){var r=t.labels,s=qn,o,a,l;for(o in r)a=r[o]-e,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Un=function(t,e,i){var r=t.vars,s=r[e],o=Pe,a=t._ctx,l,u,c;if(s)return l=r[e+"Params"],u=r.callbackScope||t,i&&fr.length&&sl(),a&&(Pe=a),c=l?s.apply(u,l):s.call(u),Pe=o,c},_o=function(t){return gr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Je),t.progress()<1&&Un(t,"onInterrupt"),t},ws,t_=[],e_=function(t){if(t)if(t=!t.name&&t.default||t,xf()||t.headless){var e=t.name,i=Ne(t),r=e&&!i&&t.init?function(){this._props=[]}:t,s={init:Vo,render:Pf,add:Af,kill:Ux,modifier:Ix,rawVars:0},o={targetTest:0,get:0,getSetter:Rf,aliases:{},register:0};if(Ws(),t!==r){if(Dn[e])return;Bn(r,Bn(ol(t,s),o)),Vs(r.prototype,Vs(s,ol(t,o))),Dn[r.prop=e]=r,t.targetTest&&(Va.push(r),Sf[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Fm(e,r),t.register&&t.register(wn,r,bn)}else t_.push(t)},Ee=255,go={aqua:[0,Ee,Ee],lime:[0,Ee,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ee],navy:[0,0,128],white:[Ee,Ee,Ee],olive:[128,128,0],yellow:[Ee,Ee,0],orange:[Ee,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ee,0,0],pink:[Ee,192,203],cyan:[0,Ee,Ee],transparent:[Ee,Ee,Ee,0]},Kl=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*Ee+.5|0},n_=function(t,e,i){var r=t?Wi(t)?[t>>16,t>>8&Ee,t&Ee]:0:go.black,s,o,a,l,u,c,f,h,d,m;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),go[t])r=go[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&Ee,r&Ee,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&Ee,t&Ee]}else if(t.substr(0,3)==="hsl"){if(r=m=t.match(Hh),!e)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=Kl(l+1/3,s,o),r[1]=Kl(l,s,o),r[2]=Kl(l-1/3,s,o);else if(~t.indexOf("="))return r=t.match(Im),i&&r.length<4&&(r[3]=1),r}else r=t.match(Hh)||go.transparent;r=r.map(Number)}return e&&!m&&(s=r[0]/Ee,o=r[1]/Ee,a=r[2]/Ee,f=Math.max(s,o,a),h=Math.min(s,o,a),c=(f+h)/2,f===h?l=u=0:(d=f-h,u=c>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},i_=function(t){var e=[],i=[],r=-1;return t.split(hr).forEach(function(s){var o=s.match(As)||[];e.push.apply(e,o),i.push(r+=o.length+1)}),e.c=i,e},$h=function(t,e,i){var r="",s=(t+r).match(hr),o=e?"hsla(":"rgba(",a=0,l,u,c,f;if(!s)return t;if(s=s.map(function(h){return(h=n_(h,e,1))&&o+(e?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(c=i_(t),l=i.c,l.join(r)!==c.c.join(r)))for(u=t.replace(hr,"1").split(As),f=u.length-1;a<f;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=t.split(hr),f=u.length-1;a<f;a++)r+=u[a]+s[a];return r+u[f]},hr=(function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in go)n+="|"+t+"\\b";return new RegExp(n+")","gi")})(),xx=/hsl[a]?\(/,r_=function(t){var e=t.join(" "),i;if(hr.lastIndex=0,hr.test(e))return i=xx.test(e),t[1]=$h(t[1],i),t[0]=$h(t[0],i,i_(t[1])),!0},Go,Ln=(function(){var n=Date.now,t=500,e=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,f,h,d,m=function g(_){var p=n()-r,M=_===!0,x,v,b,w;if((p>t||p<0)&&(i+=p-e),r+=p,b=r-i,x=b-o,(x>0||M)&&(w=++f.frame,h=b-f.time*1e3,f.time=b=b/1e3,o+=x+(x>=s?4:s-x),v=1),M||(l=u(g)),v)for(d=0;d<a.length;d++)a[d](b,h,w,_)};return f={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(_){return h/(1e3/(_||60))},wake:function(){Nm&&(!jc&&xf()&&(pi=jc=window,yf=pi.document||{},Fn.gsap=wn,(pi.gsapVersions||(pi.gsapVersions=[])).push(wn.version),Om(rl||pi.GreenSockGlobals||!pi.gsap&&pi||{}),t_.forEach(e_)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),u=c||function(_){return setTimeout(_,o-f.time*1e3+1|0)},Go=1,m(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Go=0,u=Vo},lagSmoothing:function(_,p){t=_||1/0,e=Math.min(p||33,t)},fps:function(_){s=1e3/(_||240),o=f.time*1e3+s},add:function(_,p,M){var x=p?function(v,b,w,R){_(v,b,w,R),f.remove(x)}:_;return f.remove(_),a[M?"unshift":"push"](x),Ws(),x},remove:function(_,p){~(p=a.indexOf(_))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},f})(),Ws=function(){return!Go&&Ln.wake()},oe={},yx=/^[\d.\-M][\d.\-,\s]/,Mx=/["']/g,Sx=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),e[r]=isNaN(u)?u.replace(Mx,"").trim():+u,r=l.substr(a+1).trim();return e},Ex=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<i?t.indexOf(")",i+1):i)},Tx=function(t){var e=(t+"").split("("),i=oe[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[Sx(e[1])]:Ex(t).split(",").map(Vm)):oe._CE&&yx.test(t)?oe._CE("",t):i},s_=function(t){return function(e){return 1-t(1-e)}},o_=function n(t,e){for(var i=t._first,r;i;)i instanceof pn?n(i,e):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==e&&(i.timeline?n(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next},ts=function(t,e){return t&&(Ne(t)?t:oe[t]||Tx(t))||e},ss=function(t,e,i,r){i===void 0&&(i=function(l){return 1-e(1-l)}),r===void 0&&(r=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:i,easeInOut:r},o;return Tn(t,function(a){oe[a]=Fn[a]=s,oe[o=a.toLowerCase()]=i;for(var l in s)oe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=oe[a+"."+l]=s[l]}),s},a_=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},jl=function n(t,e,i){var r=e>=1?e:1,s=(i||(t?.3:.45))/(e<1?e:1),o=s/Kc*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*Kv((c-o)*s)+1},l=t==="out"?a:t==="in"?function(u){return 1-a(1-u)}:a_(a);return s=Kc/s,l.config=function(u,c){return n(t,u,c)},l},Zl=function n(t,e){e===void 0&&(e=1.70158);var i=function(o){return o?--o*o*((e+1)*o+e)+1:0},r=t==="out"?i:t==="in"?function(s){return 1-i(1-s)}:a_(i);return r.config=function(s){return n(t,s)},r};Tn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,t){var e=t<5?t+1:t;ss(n+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});oe.Linear.easeNone=oe.none=oe.Linear.easeIn;ss("Elastic",jl("in"),jl("out"),jl());(function(n,t){var e=1/t,i=2*e,r=2.5*e,s=function(a){return a<e?n*a*a:a<i?n*Math.pow(a-1.5/t,2)+.75:a<r?n*(a-=2.25/t)*a+.9375:n*Math.pow(a-2.625/t,2)+.984375};ss("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ss("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});ss("Circ",function(n){return-(Dm(1-n*n)-1)});ss("Sine",function(n){return n===1?1:-$v(n*qv)+1});ss("Back",Zl("in"),Zl("out"),Zl());oe.SteppedEase=oe.steps=Fn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,r=t+(e?0:1),s=e?1:0,o=1-Te;return function(a){return((r*Jo(0,o,a)|0)+s)*i}}};ks.ease=oe["quad.out"];Tn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Ef+=n+","+n+"Params,"});var l_=function(t,e){this.id=Yv++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:zm,this.set=e?e.getSetter:Rf},Wo=(function(){function n(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Gs(this,+e.duration,1,1),this.data=e.data,Pe&&(this._ctx=Pe,Pe.data.push(this)),Go||Ln.wake()}var t=n.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,Gs(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,r){if(Ws(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Cl(this,i),!s._dp||s.parent||Wm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&gi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Te||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),km(this,i,r)),this},t.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Xh(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},t.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Xh(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Hs(this._tTime,s)+1:1},t.timeScale=function(i,r){if(!arguments.length)return this._rts===-Te?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?al(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Te?0:this._rts,this.totalTime(Jo(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),wl(this),sx(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ws(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Te&&(this._tTime-=Te)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=De(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&gi(r,this,this._start-this._delay),this}return this._start},t.endTime=function(i){return this._start+(En(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?al(r.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=ex);var r=Je;return Je=i,bf(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Je=r,this},t.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,qh(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,qh(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,r){return this.totalTime(Gn(this,i),En(r))},t.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,En(r)),this._dur||(this._zTime=-Te),this},t.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},t.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Te:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Te,this},t.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Te)},t.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},t.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Ne(i)?i:Hm,l=function(){var c=r.then;r.then=null,s&&s(),Ne(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},t.kill=function(){_o(this)},n})();Bn(Wo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Te,_prom:0,_ps:!1,_rts:1});var pn=(function(n){Pm(t,n);function t(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=En(i.sortChildren),Le&&gi(i.parent||Le,Ii(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Xm(Ii(s),i.scrollTrigger),s}var e=t.prototype;return e.to=function(r,s,o){return Co(0,arguments,this),this},e.from=function(r,s,o){return Co(1,arguments,this),this},e.fromTo=function(r,s,o,a){return Co(2,arguments,this),this},e.set=function(r,s,o){return s.duration=0,s.parent=this,wo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new He(r,s,Gn(this,o),1),this},e.call=function(r,s,o){return gi(this,He.delayedCall(0,r,s),o)},e.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new He(r,o,Gn(this,l)),this},e.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,wo(o).immediateRender=En(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},e.staggerFromTo=function(r,s,o,a,l,u,c,f){return a.startAt=o,wo(a).immediateRender=En(a.immediateRender),this.staggerTo(r,s,a,l,u,c,f)},e.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:De(r),f=this._zTime<0!=r<0&&(this._initted||!u),h,d,m,g,_,p,M,x,v,b,w,R;if(this!==Le&&c>l&&r>=0&&(c=l),c!==this._tTime||o||f){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),h=c,v=this._start,x=this._ts,p=!x,f&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,_=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(_*100+r,s,o);if(h=De(c%_),c===l?(g=this._repeat,h=u):(b=De(c/_),g=~~b,g&&g===b&&(h=u,g--),h>u&&(h=u)),b=Hs(this._tTime,_),!a&&this._tTime&&b!==g&&this._tTime-b*_-this._dur<=0&&(b=g),w&&g&1&&(h=u-h,R=1),g!==b&&!this._lock){var P=w&&b&1,y=P===(w&&g&1);if(g<b&&(P=!P),a=P?0:c%u?u:c,this._lock=1,this.render(a||(R?0:De(g*_)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Un(this,"onRepeat"),this.vars.repeatRefresh&&!R&&(this.invalidate()._lock=1,b=g),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,y&&(this._lock=2,a=P?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!R&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;o_(this,R)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=cx(this,De(a),De(h)),M&&(c-=h-(h=M._start))),this._tTime=c,this._time=h,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!b&&(Un(this,"onStart"),this._tTime!==c))return this;if(h>=a&&r>=0)for(d=this._first;d;){if(m=d._next,(d._act||h>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!p){M=0,m&&(c+=this._zTime=-Te);break}}d=m}else{d=this._last;for(var S=r<0?r:h;d;){if(m=d._prev,(d._act||S<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(S-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(S-d._start)*d._ts,s,o||Je&&bf(d)),h!==this._time||!this._ts&&!p){M=0,m&&(c+=this._zTime=S?-Te:Te);break}}d=m}}if(M&&!s&&(this.pause(),M.render(h>=a?0:-Te)._zTime=h>=a?1:-1,this._ts))return this._start=v,wl(this),this.render(r,s,o);this._onUpdate&&!s&&Un(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&gr(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Un(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,s){var o=this;if(Wi(s)||(s=Gn(this,s,r)),!(r instanceof Wo)){if(an(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Ke(r))return this.addLabel(r,s);if(Ne(r))r=He.delayedCall(0,r);else return this}return this!==r?gi(this,r,s):this},e.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-qn);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof He?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},e.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},e.remove=function(r){return Ke(r)?this.removeLabel(r):Ne(r)?this.killTweensOf(r):(r.parent===this&&Al(this,r),r===this._recent&&(this._recent=this._last),Qr(this))},e.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=De(Ln.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},e.addLabel=function(r,s){return this.labels[r]=Gn(this,s),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,s,o){var a=He.delayedCall(0,s||Vo,o);return a.data="isPause",this._hasPause=1,gi(this,a,Gn(this,r))},e.removePause=function(r){var s=this._first;for(r=Gn(this,r);s;)s._start===r&&s.data==="isPause"&&gr(s),s=s._next},e.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)ar!==a[l]&&a[l].kill(r,s);return this},e.getTweensOf=function(r,s){for(var o=[],a=Yn(r),l=this._first,u=Wi(s),c;l;)l instanceof He?nx(l._targets,a)&&(u?(!ar||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},e.tweenTo=function(r,s){s=s||{};var o=this,a=Gn(o,r),l=s,u=l.startAt,c=l.onStart,f=l.onStartParams,h=l.immediateRender,d,m=He.to(o,Bn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||Te,onStart:function(){if(o.pause(),!d){var _=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());m._dur!==_&&Gs(m,_,0,1).render(m._time,!0,!0),d=1}c&&c.apply(m,f||[])}},s));return h?m.render(0):m},e.tweenFromTo=function(r,s,o){return this.tweenTo(s,Bn({startAt:{time:Gn(this,r)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),Yh(this,Gn(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),Yh(this,Gn(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Te)},e.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=De(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return Qr(this)},e.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Qr(this)},e.totalDuration=function(r){var s=0,o=this,a=o._last,l=qn,u,c,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,gi(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=De(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;Gs(o,o===Le&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(r){if(Le._ts&&(km(Le,al(r,Le)),Bm=Ln.frame),Ln.frame>=Gh){Gh+=On.autoSleep||120;var s=Le._first;if((!s||!s._ts)&&On.autoSleep&&Ln._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Ln.sleep()}}},t})(Wo);Bn(pn.prototype,{_lock:0,_hasPause:0,_forcing:0});var bx=function(t,e,i,r,s,o,a){var l=new bn(this._pt,t,e,0,1,p_,null,s),u=0,c=0,f,h,d,m,g,_,p,M;for(l.b=i,l.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=Ho(r)),o&&(M=[i,r],o(M,t,e),i=M[0],r=M[1]),h=i.match(Yl)||[];f=Yl.exec(r);)m=f[0],g=r.substring(u,f.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),m!==h[c++]&&(_=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:g||c===1?g:",",s:_,c:m.charAt(1)==="="?Is(_,m)-_:parseFloat(m)-_,m:d&&d<4?Math.round:0},u=Yl.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(Um.test(r)||p)&&(l.e=0),this._pt=l,l},Af=function(t,e,i,r,s,o,a,l,u,c){Ne(r)&&(r=r(s||0,t,o));var f=t[e],h=i!=="get"?i:Ne(f)?u?t[e.indexOf("set")||!Ne(t["get"+e.substr(3)])?e:"get"+e.substr(3)](u):t[e]():f,d=Ne(f)?u?Px:h_:Cf,m;if(Ke(r)&&(~r.indexOf("random(")&&(r=Ho(r)),r.charAt(1)==="="&&(m=Is(h,r)+(sn(h)||0),(m||m===0)&&(r=m))),!c||h!==r||iu)return!isNaN(h*r)&&r!==""?(m=new bn(this._pt,t,e,+h||0,r-(h||0),typeof f=="boolean"?Lx:d_,0,d),u&&(m.fp=u),a&&m.modifier(a,this,t),this._pt=m):(!f&&!(e in t)&&Mf(e,r),bx.call(this,t,e,h,r,d,l||On.stringFilter,u))},Ax=function(t,e,i,r,s){if(Ne(t)&&(t=Ro(t,s,e,i,r)),!Si(t)||t.style&&t.nodeType||an(t)||Lm(t))return Ke(t)?Ro(t,s,e,i,r):t;var o={},a;for(a in t)o[a]=Ro(t[a],s,e,i,r);return o},c_=function(t,e,i,r,s,o){var a,l,u,c;if(Dn[t]&&(a=new Dn[t]).init(s,a.rawVars?e[t]:Ax(e[t],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new bn(i._pt,s,t,0,1,a.render,a,0,a.priority),i!==ws))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},ar,iu,wf=function n(t,e,i){var r=t.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,f=r.yoyoEase,h=r.keyframes,d=r.autoRevert,m=t._dur,g=t._startAt,_=t._targets,p=t.parent,M=p&&p.data==="nested"?p.vars.targets:_,x=t._overwrite==="auto"&&!gf,v=t.timeline,b,w,R,P,y,S,L,I,F,X,Y,W,K;if(v&&(!h||!s)&&(s="none"),t._ease=ts(s,ks.ease),t._yEase=f?s_(ts(f===!0?s:f,ks.ease)):0,f&&t._yoyo&&!t._repeat&&(f=t._yEase,t._yEase=t._ease,t._ease=f),t._from=!v&&!!r.runBackwards,!v||h&&!r.stagger){if(I=_[0]?Jr(_[0]).harness:0,W=I&&r[I.prop],b=ol(r,Sf),g&&(g._zTime<0&&g.progress(1),e<0&&c&&a&&!d?g.render(-1,!0):g.revert(c&&m?ka:tx),g._lazy=0),o){if(gr(t._startAt=He.set(_,Bn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&En(l),startAt:null,delay:0,onUpdate:u&&function(){return Un(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Je||!a&&!d)&&t._startAt.revert(ka),a&&m&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(c&&m&&!g){if(e&&(a=!1),R=Bn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&En(l),immediateRender:a,stagger:0,parent:p},b),W&&(R[I.prop]=W),gr(t._startAt=He.set(_,R)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Je?t._startAt.revert(ka):t._startAt.render(-1,!0)),t._zTime=e,!a)n(t._startAt,Te,Te);else if(!e)return}for(t._pt=t._ptCache=0,l=m&&En(l)||l&&!m,w=0;w<_.length;w++){if(y=_[w],L=y._gsap||Tf(_)[w]._gsap,t._ptLookup[w]=X={},Zc[L.id]&&fr.length&&sl(),Y=M===_?w:M.indexOf(y),I&&(F=new I).init(y,W||b,t,Y,M)!==!1&&(t._pt=P=new bn(t._pt,y,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(V){X[V]=P}),F.priority&&(S=1)),!I||W)for(R in b)Dn[R]&&(F=c_(R,b,t,Y,y,M))?F.priority&&(S=1):X[R]=P=Af.call(t,y,R,"get",b[R],Y,M,0,r.stringFilter);t._op&&t._op[w]&&t.kill(y,t._op[w]),x&&t._pt&&(ar=t,Le.killTweensOf(y,X,t.globalTime(e)),K=!t.parent,ar=0),t._pt&&l&&(Zc[L.id]=1)}S&&m_(t),t._onInit&&t._onInit(t)}t._onUpdate=u,t._initted=(!t._op||t._pt)&&!K,h&&e<=0&&v.render(qn,!0,!0)},wx=function(t,e,i,r,s,o,a,l){var u=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,f,h,d;if(!u)for(u=t._ptCache[e]=[],h=t._ptLookup,d=t._targets.length;d--;){if(c=h[d][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return iu=1,t.vars[e]="+=0",wf(t,a),iu=0,l?ko(e+" not eligible for reset"):1;u.push(c)}for(d=u.length;d--;)f=u[d],c=f._pt||f,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,f.e&&(f.e=Be(i)+sn(f.e)),f.b&&(f.b=c.s+sn(f.b))},Cx=function(t,e){var i=t[0]?Jr(t[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return e;s=Vs({},e);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Rx=function(t,e,i,r){var s=e.ease||r||"power1.inOut",o,a;if(an(e))a=i[t]||(i[t]=[]),e.forEach(function(l,u){return a.push({t:u/(e.length-1)*100,v:l,e:s})});else for(o in e)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Ro=function(t,e,i,r,s){return Ne(t)?t.call(e,i,r,s):Ke(t)&&~t.indexOf("random(")?Ho(t):t},u_=Ef+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",f_={};Tn(u_+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return f_[n]=1});var He=(function(n){Pm(t,n);function t(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:wo(r))||this;var l=a.vars,u=l.duration,c=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,m=l.keyframes,g=l.defaults,_=l.scrollTrigger,p=l.yoyoEase,M=r.parent||Le,x=(an(i)||Lm(i)?Wi(i[0]):"length"in r)?[i]:Yn(i),v,b,w,R,P,y,S,L;if(a._targets=x.length?Tf(x):ko("GSAP target "+i+" not found. https://gsap.com",!On.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,m||h||ca(u)||ca(c)){if(r=a.vars,v=a.timeline=new pn({data:"nested",defaults:g||{},targets:M&&M.data==="nested"?M.vars.targets:x}),v.kill(),v.parent=v._dp=Ii(a),v._start=0,h||ca(u)||ca(c)){if(R=x.length,S=h&&Km(h),Si(h))for(P in h)~u_.indexOf(P)&&(L||(L={}),L[P]=h[P]);for(b=0;b<R;b++)w=ol(r,f_),w.stagger=0,p&&(w.yoyoEase=p),L&&Vs(w,L),y=x[b],w.duration=+Ro(u,Ii(a),b,y,x),w.delay=(+Ro(c,Ii(a),b,y,x)||0)-a._delay,!h&&R===1&&w.delay&&(a._delay=c=w.delay,a._start+=c,w.delay=0),v.to(y,w,S?S(b,y,x):0),v._ease=oe.none;v.duration()?u=c=0:a.timeline=0}else if(m){wo(Bn(v.vars.defaults,{ease:"none"})),v._ease=ts(m.ease||r.ease||"none");var I=0,F,X,Y;if(an(m))m.forEach(function(W){return v.to(x,W,">")}),v.duration();else{w={};for(P in m)P==="ease"||P==="easeEach"||Rx(P,m[P],w,m.easeEach);for(P in w)for(F=w[P].sort(function(W,K){return W.t-K.t}),I=0,b=0;b<F.length;b++)X=F[b],Y={ease:X.e,duration:(X.t-(b?F[b-1].t:0))/100*u},Y[P]=X.v,v.to(x,Y,I),I+=Y.duration;v.duration()<u&&v.to({},{duration:u-v.duration()})}}u||a.duration(u=v.duration())}else a.timeline=0;return d===!0&&!gf&&(ar=Ii(a),Le.killTweensOf(x),ar=0),gi(M,Ii(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!u&&!m&&a._start===De(M._time)&&En(f)&&ox(Ii(a))&&M.data!=="nested")&&(a._tTime=-Te,a.render(Math.max(0,-c)||0)),_&&Xm(Ii(a),_),a}var e=t.prototype;return e.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,f=r>l-Te&&!c?l:r<Te?0:r,h,d,m,g,_,p,M,x,v;if(!u)lx(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(h=f,x=this.timeline,this._repeat){if(g=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(g*100+r,s,o);if(h=De(f%g),f===l?(m=this._repeat,h=u):(_=De(f/g),m=~~_,m&&m===_?(h=u,m--):h>u&&(h=u)),p=this._yoyo&&m&1,p&&(v=this._yEase,h=u-h),_=Hs(this._tTime,g),h===a&&!o&&this._initted&&m===_)return this._tTime=f,this;m!==_&&(x&&this._yEase&&o_(x,p),this.vars.repeatRefresh&&!p&&!this._lock&&h!==g&&this._initted&&(this._lock=o=1,this.render(De(g*m),!0).invalidate()._lock=0))}if(!this._initted){if(qm(this,c?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==_))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(v||this._ease)(h/u),this._from&&(this.ratio=M=1-M),!a&&f&&!s&&!_&&(Un(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;x&&x.render(r<0?r:x._dur*x._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&Jc(this,r,s,o),Un(this,"onUpdate")),this._repeat&&m!==_&&this.vars.onRepeat&&!s&&this.parent&&Un(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(c&&!this._onUpdate&&Jc(this,r,!0,!0),(r||!u)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&gr(this,1),!s&&!(c&&!a)&&(f||a||p)&&(Un(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},e.resetTo=function(r,s,o,a,l){Go||Ln.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||wf(this,u),c=this._ease(u/this._dur),wx(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(Cl(this,0),this.parent||Gm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?_o(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Je),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,ar&&ar.vars.overwrite!==!0)._first||_o(this),this.parent&&o!==this.timeline.totalDuration()&&Gs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Yn(r):a,u=this._ptLookup,c=this._pt,f,h,d,m,g,_,p;if((!s||s==="all")&&rx(a,l))return s==="all"&&(this._pt=0),_o(this);for(f=this._op=this._op||[],s!=="all"&&(Ke(s)&&(g={},Tn(s,function(M){return g[M]=1}),s=g),s=Cx(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){h=u[p],s==="all"?(f[p]=s,m=h,d={}):(d=f[p]=f[p]||{},m=s);for(g in m)_=h&&h[g],_&&((!("kill"in _.d)||_.d.kill(g)===!0)&&Al(this,_,"_pt"),delete h[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&c&&_o(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return Co(1,arguments)},t.delayedCall=function(r,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(r,s,o){return Co(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,o){return Le.killTweensOf(r,s,o)},t})(Wo);Bn(He.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Tn("staggerTo,staggerFrom,staggerFromTo",function(n){He[n]=function(){var t=new pn,e=tu.call(arguments,0);return e.splice(n==="staggerFromTo"?5:4,0,0),t[n].apply(t,e)}});var Cf=function(t,e,i){return t[e]=i},h_=function(t,e,i){return t[e](i)},Px=function(t,e,i,r){return t[e](r.fp,i)},Dx=function(t,e,i){return t.setAttribute(e,i)},Rf=function(t,e){return Ne(t[e])?h_:vf(t[e])&&t.setAttribute?Dx:Cf},d_=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Lx=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},p_=function(t,e){var i=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+r,i=i._next;r+=e.c}e.set(e.t,e.p,r,e)},Pf=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},Ix=function(t,e,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(t,e,i),s=o},Ux=function(t){for(var e=this._pt,i,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?Al(this,e,"_pt"):e.dep||(i=1),e=r;return!i},Nx=function(t,e,i,r){r.mSet(t,e,r.m.call(r.tween,i,r.mt),r)},m_=function(t){for(var e=t._pt,i,r,s,o;e;){for(i=e._next,r=s;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:o)?e._prev._next=e:s=e,(e._next=r)?r._prev=e:o=e,e=i}t._pt=s},bn=(function(){function n(e,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||d_,this.d=l||this,this.set=u||Cf,this.pr=c||0,this._next=e,e&&(e._prev=this)}var t=n.prototype;return t.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=Nx,this.m=i,this.mt=s,this.tween=r},n})();Tn(Ef+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Sf[n]=1});Fn.TweenMax=Fn.TweenLite=He;Fn.TimelineLite=Fn.TimelineMax=pn;Le=new pn({sortChildren:!1,defaults:ks,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});On.stringFilter=r_;var es=[],Ha={},Ox=[],Kh=0,Fx=0,Jl=function(t){return(Ha[t]||Ox).map(function(e){return e()})},ru=function(){var t=Date.now(),e=[];t-Kh>2&&(Jl("matchMediaInit"),es.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=pi.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&e.push(i))}),Jl("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Kh=t,Jl("matchMedia"))},__=(function(){function n(e,i){this.selector=i&&eu(i),this.data=[],this._r=[],this.isReverted=!1,this.id=Fx++,e&&this.add(e)}var t=n.prototype;return t.add=function(i,r,s){Ne(i)&&(s=r,r=i,i=Ne);var o=this,a=function(){var u=Pe,c=o.selector,f;return u&&u!==o&&u.data.push(o),s&&(o.selector=eu(s)),Pe=o,f=r.apply(o,arguments),Ne(f)&&o._r.push(f),Pe=u,o.selector=c,o.isReverted=!1,f};return o.last=a,i===Ne?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},t.ignore=function(i){var r=Pe;Pe=null,i(this),Pe=r},t.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof He&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,r){var s=this;if(i?(function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,f){return f.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof pn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof He)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=es.length;o--;)es[o].id===this.id&&es.splice(o,1)},t.revert=function(i){this.kill(i||{})},n})(),Bx=(function(){function n(e){this.contexts=[],this.scope=e,Pe&&Pe.data.push(this)}var t=n.prototype;return t.add=function(i,r,s){Si(i)||(i={matches:i});var o=new __(0,s||this.scope),a=o.conditions={},l,u,c;Pe&&!o.selector&&(o.selector=Pe.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=pi.matchMedia(i[u]),l&&(es.indexOf(o)<0&&es.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(ru):l.addEventListener("change",ru)));return c&&r(o,function(f){return o.add(null,f)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n})(),ll={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(r){return e_(r)})},timeline:function(t){return new pn(t)},getTweensOf:function(t,e){return Le.getTweensOf(t,e)},getProperty:function(t,e,i,r){Ke(t)&&(t=Yn(t)[0]);var s=Jr(t||{}).get,o=i?Hm:Vm;return i==="native"&&(i=""),t&&(e?o((Dn[e]&&Dn[e].get||s)(t,e,i,r)):function(a,l,u){return o((Dn[a]&&Dn[a].get||s)(t,a,l,u))})},quickSetter:function(t,e,i){if(t=Yn(t),t.length>1){var r=t.map(function(c){return wn.quickSetter(c,e,i)}),s=r.length;return function(c){for(var f=s;f--;)r[f](c)}}t=t[0]||{};var o=Dn[e],a=Jr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,u=o?function(c){var f=new o;ws._pt=0,f.init(t,i?c+i:c,ws,0,[t]),f.render(1,f),ws._pt&&Pf(1,ws)}:a.set(t,l);return o?u:function(c){return u(t,l,i?c+i:c,a,1)}},quickTo:function(t,e,i){var r,s=wn.to(t,Bn((r={},r[e]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(e,l,u,c)};return o.tween=s,o},isTweening:function(t){return Le.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ts(t.ease,ks.ease)),Wh(ks,t||{})},config:function(t){return Wh(On,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,r=t.plugins,s=t.defaults,o=t.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Dn[a]&&!Fn[a]&&ko(e+" effect requires "+a+" plugin.")}),$l[e]=function(a,l,u){return i(Yn(a),Bn(l||{},s),u)},o&&(pn.prototype[e]=function(a,l,u){return this.add($l[e](a,Si(l)?l:(u=l)&&{},this),u)})},registerEase:function(t,e){oe[t]=ts(e)},parseEase:function(t,e){return arguments.length?ts(t,e):oe},getById:function(t){return Le.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new pn(t),r,s;for(i.smoothChildTiming=En(t.smoothChildTiming),Le.remove(i),i._dp=0,i._time=i._tTime=Le._time,r=Le._first;r;)s=r._next,(e||!(!r._dur&&r instanceof He&&r.vars.onComplete===r._targets[0]))&&gi(i,r,r._start-r._delay),r=s;return gi(Le,i,0),i},context:function(t,e){return t?new __(t,e):Pe},matchMedia:function(t){return new Bx(t)},matchMediaRefresh:function(){return es.forEach(function(t){var e=t.conditions,i,r;for(r in e)e[r]&&(e[r]=!1,i=1);i&&t.revert()})||ru()},addEventListener:function(t,e){var i=Ha[t]||(Ha[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=Ha[t],r=i&&i.indexOf(e);r>=0&&i.splice(r,1)},utils:{wrap:_x,wrapYoyo:gx,distribute:Km,random:Zm,snap:jm,normalize:mx,getUnit:sn,clamp:fx,splitColor:n_,toArray:Yn,selector:eu,mapRange:Qm,pipe:dx,unitize:px,interpolate:vx,shuffle:$m},install:Om,effects:$l,ticker:Ln,updateRoot:pn.updateRoot,plugins:Dn,globalTimeline:Le,core:{PropTween:bn,globals:Fm,Tween:He,Timeline:pn,Animation:Wo,getCache:Jr,_removeLinkedListItem:Al,reverting:function(){return Je},context:function(t){return t&&Pe&&(Pe.data.push(t),t._ctx=Pe),Pe},suppressOverwrites:function(t){return gf=t}}};Tn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return ll[n]=He[n]});Ln.add(pn.updateRoot);ws=ll.to({},{duration:0});var zx=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},kx=function(t,e){var i=t._targets,r,s,o;for(r in e)for(s=i.length;s--;)o=t._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=zx(o,r)),o&&o.modifier&&o.modifier(e[r],t,i[s],r))},Ql=function(t,e){return{name:t,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(Ke(s)&&(l={},Tn(s,function(c){return l[c]=1}),s=l),e){l={};for(u in s)l[u]=e(s[u]);s=l}kx(a,s)}}}},wn=ll.registerPlugin({name:"attr",init:function(t,e,i,r,s){var o,a,l;this.tween=i;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var i=e._pt;i;)Je?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},Ql("roundProps",nu),Ql("modifiers"),Ql("snap",jm))||ll;He.version=pn.version=wn.version="3.14.2";Nm=1;xf()&&Ws();oe.Power0;oe.Power1;oe.Power2;oe.Power3;oe.Power4;oe.Linear;oe.Quad;oe.Cubic;oe.Quart;oe.Quint;oe.Strong;oe.Elastic;oe.Back;oe.SteppedEase;oe.Bounce;oe.Sine;oe.Expo;oe.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var jh,lr,Us,Df,Xr,Zh,Lf,Vx=function(){return typeof window<"u"},Xi={},Br=180/Math.PI,Ns=Math.PI/180,ls=Math.atan2,Jh=1e8,If=/([A-Z])/g,Hx=/(left|right|width|margin|padding|x)/i,Gx=/[\s,\(]\S/,vi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},su=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Wx=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Xx=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},qx=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Yx=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},g_=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},v_=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},$x=function(t,e,i){return t.style[e]=i},Kx=function(t,e,i){return t.style.setProperty(e,i)},jx=function(t,e,i){return t._gsap[e]=i},Zx=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},Jx=function(t,e,i,r,s){var o=t._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},Qx=function(t,e,i,r,s){var o=t._gsap;o[e]=i,o.renderTransform(s,o)},Ie="transform",An=Ie+"Origin",ty=function n(t,e){var i=this,r=this.target,s=r.style,o=r._gsap;if(t in Xi&&s){if(this.tfm=this.tfm||{},t!=="transform")t=vi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return i.tfm[a]=Ni(r,a)}):this.tfm[t]=o.x?o[t]:Ni(r,t),t===An&&(this.tfm.zOrigin=o.zOrigin);else return vi.transform.split(",").forEach(function(a){return n.call(i,a,e)});if(this.props.indexOf(Ie)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(An,e,"")),t=Ie}(s||e)&&this.props.push(t,e,s[t])},x_=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},ey=function(){var t=this.props,e=this.target,i=e.style,r=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?i[t[s]]=t[s+2]:i.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(If,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Lf(),(!s||!s.isStart)&&!i[Ie]&&(x_(i),r.zOrigin&&i[An]&&(i[An]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},y_=function(t,e){var i={target:t,props:[],revert:ey,save:ty};return t._gsap||wn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(r){return i.save(r)}),i},M_,ou=function(t,e){var i=lr.createElementNS?lr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):lr.createElement(t);return i&&i.style?i:lr.createElement(t)},Nn=function n(t,e,i){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(If,"-$1").toLowerCase())||r.getPropertyValue(e)||!i&&n(t,Xs(e)||e,1)||""},Qh="O,Moz,ms,Ms,Webkit".split(","),Xs=function(t,e,i){var r=e||Xr,s=r.style,o=5;if(t in s&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Qh[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Qh[o]:"")+t},au=function(){Vx()&&window.document&&(jh=window,lr=jh.document,Us=lr.documentElement,Xr=ou("div")||{style:{}},ou("div"),Ie=Xs(Ie),An=Ie+"Origin",Xr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",M_=!!Xs("perspective"),Lf=wn.core.reverting,Df=1)},td=function(t){var e=t.ownerSVGElement,i=ou("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=t.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Us.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Us.removeChild(i),s},ed=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},S_=function(t){var e,i;try{e=t.getBBox()}catch{e=td(t),i=1}return e&&(e.width||e.height)||i||(e=td(t)),e&&!e.width&&!e.x&&!e.y?{x:+ed(t,["x","cx","x1"])||0,y:+ed(t,["y","cy","y1"])||0,width:0,height:0}:e},E_=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&S_(t))},vr=function(t,e){if(e){var i=t.style,r;e in Xi&&e!==An&&(e=Ie),i.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(r==="--"?e:e.replace(If,"-$1").toLowerCase())):i.removeAttribute(e)}},cr=function(t,e,i,r,s,o){var a=new bn(t._pt,e,i,0,1,o?v_:g_);return t._pt=a,a.b=r,a.e=s,t._props.push(i),a},nd={deg:1,rad:1,turn:1},ny={grid:1,flex:1},xr=function n(t,e,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=Xr.style,l=Hx.test(e),u=t.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",d=r==="%",m,g,_,p;if(r===o||!s||nd[r]||nd[o])return s;if(o!=="px"&&!h&&(s=n(t,e,i,"px")),p=t.getCTM&&E_(t),(d||o==="%")&&(Xi[e]||~e.indexOf("adius")))return m=p?t.getBBox()[l?"width":"height"]:t[c],Be(d?s/m*f:s/100*m);if(a[l?"width":"height"]=f+(h?o:r),g=r!=="rem"&&~e.indexOf("adius")||r==="em"&&t.appendChild&&!u?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===lr||!g.appendChild)&&(g=lr.body),_=g._gsap,_&&d&&_.width&&l&&_.time===Ln.time&&!_.uncache)return Be(s/_.width*f);if(d&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=f+r,m=t[c],M?t.style[e]=M:vr(t,e)}else(d||o==="%")&&!ny[Nn(g,"display")]&&(a.position=Nn(t,"position")),g===t&&(a.position="static"),g.appendChild(Xr),m=Xr[c],g.removeChild(Xr),a.position="absolute";return l&&d&&(_=Jr(g),_.time=Ln.time,_.width=g[c]),Be(h?m*s/f:m&&s?f/m*s:0)},Ni=function(t,e,i,r){var s;return Df||au(),e in vi&&e!=="transform"&&(e=vi[e],~e.indexOf(",")&&(e=e.split(",")[0])),Xi[e]&&e!=="transform"?(s=qo(t,r),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:ul(Nn(t,An))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=cl[e]&&cl[e](t,e,i)||Nn(t,e)||zm(t,e)||(e==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?xr(t,e,s,i)+i:s},iy=function(t,e,i,r){if(!i||i==="none"){var s=Xs(e,t,1),o=s&&Nn(t,s,1);o&&o!==i?(e=s,i=o):e==="borderColor"&&(i=Nn(t,"borderTopColor"))}var a=new bn(this._pt,t.style,e,0,1,p_),l=0,u=0,c,f,h,d,m,g,_,p,M,x,v,b;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Nn(t,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=t.style[e],t.style[e]=r,r=Nn(t,e)||r,g?t.style[e]=g:vr(t,e)),c=[i,r],r_(c),i=c[0],r=c[1],h=i.match(As)||[],b=r.match(As)||[],b.length){for(;f=As.exec(r);)_=f[0],M=r.substring(l,f.index),m?m=(m+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(m=1),_!==(g=h[u++]||"")&&(d=parseFloat(g)||0,v=g.substr((d+"").length),_.charAt(1)==="="&&(_=Is(d,_)+v),p=parseFloat(_),x=_.substr((p+"").length),l=As.lastIndex-x.length,x||(x=x||On.units[e]||v,l===r.length&&(r+=x,a.e+=x)),v!==x&&(d=xr(t,e,g,x)||0),a._pt={_next:a._pt,p:M||u===1?M:",",s:d,c:p-d,m:m&&m<4||e==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=e==="display"&&r==="none"?v_:g_;return Um.test(r)&&(a.e=0),this._pt=a,a},id={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ry=function(t){var e=t.split(" "),i=e[0],r=e[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(t=i,i=r,r=t),e[0]=id[i]||i,e[1]=id[r]||r,e.join(" ")},sy=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,r=i.style,s=e.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],Xi[a]&&(l=1,a=a==="transformOrigin"?An:Ie),vr(i,a);l&&(vr(i,Ie),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",qo(i,1),o.uncache=1,x_(r)))}},cl={clearProps:function(t,e,i,r,s){if(s.data!=="isFromStart"){var o=t._pt=new bn(t._pt,e,i,0,0,sy);return o.u=r,o.pr=-10,o.tween=s,t._props.push(i),1}}},Xo=[1,0,0,1,0,0],T_={},b_=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},rd=function(t){var e=Nn(t,Ie);return b_(e)?Xo:e.substr(7).match(Im).map(Be)},Uf=function(t,e){var i=t._gsap||Jr(t),r=t.style,s=rd(t),o,a,l,u;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Xo:s):(s===Xo&&!t.offsetParent&&t!==Us&&!i.svg&&(l=r.display,r.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(u=1,a=t.nextElementSibling,Us.appendChild(t)),s=rd(t),l?r.display=l:vr(t,"display"),u&&(a?o.insertBefore(t,a):o?o.appendChild(t):Us.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},lu=function(t,e,i,r,s,o){var a=t._gsap,l=s||Uf(t,!0),u=a.xOrigin||0,c=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],m=l[1],g=l[2],_=l[3],p=l[4],M=l[5],x=e.split(" "),v=parseFloat(x[0])||0,b=parseFloat(x[1])||0,w,R,P,y;i?l!==Xo&&(R=d*_-m*g)&&(P=v*(_/R)+b*(-g/R)+(g*M-_*p)/R,y=v*(-m/R)+b*(d/R)-(d*M-m*p)/R,v=P,b=y):(w=S_(t),v=w.x+(~x[0].indexOf("%")?v/100*w.width:v),b=w.y+(~(x[1]||x[0]).indexOf("%")?b/100*w.height:b)),r||r!==!1&&a.smooth?(p=v-u,M=b-c,a.xOffset=f+(p*d+M*g)-p,a.yOffset=h+(p*m+M*_)-M):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=b,a.smooth=!!r,a.origin=e,a.originIsAbsolute=!!i,t.style[An]="0px 0px",o&&(cr(o,a,"xOrigin",u,v),cr(o,a,"yOrigin",c,b),cr(o,a,"xOffset",f,a.xOffset),cr(o,a,"yOffset",h,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+b)},qo=function(t,e){var i=t._gsap||new l_(t);if("x"in i&&!e&&!i.uncache)return i;var r=t.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(t),u=Nn(t,An)||"0",c,f,h,d,m,g,_,p,M,x,v,b,w,R,P,y,S,L,I,F,X,Y,W,K,V,vt,gt,St,Lt,Qt,rt,_t;return c=f=h=g=_=p=M=x=v=0,d=m=1,i.svg=!!(t.getCTM&&E_(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Ie]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ie]!=="none"?l[Ie]:"")),r.scale=r.rotate=r.translate="none"),R=Uf(t,i.svg),i.svg&&(i.uncache?(V=t.getBBox(),u=i.xOrigin-V.x+"px "+(i.yOrigin-V.y)+"px",K=""):K=!e&&t.getAttribute("data-svg-origin"),lu(t,K||u,!!K||i.originIsAbsolute,i.smooth!==!1,R)),b=i.xOrigin||0,w=i.yOrigin||0,R!==Xo&&(L=R[0],I=R[1],F=R[2],X=R[3],c=Y=R[4],f=W=R[5],R.length===6?(d=Math.sqrt(L*L+I*I),m=Math.sqrt(X*X+F*F),g=L||I?ls(I,L)*Br:0,M=F||X?ls(F,X)*Br+g:0,M&&(m*=Math.abs(Math.cos(M*Ns))),i.svg&&(c-=b-(b*L+w*F),f-=w-(b*I+w*X))):(_t=R[6],Qt=R[7],gt=R[8],St=R[9],Lt=R[10],rt=R[11],c=R[12],f=R[13],h=R[14],P=ls(_t,Lt),_=P*Br,P&&(y=Math.cos(-P),S=Math.sin(-P),K=Y*y+gt*S,V=W*y+St*S,vt=_t*y+Lt*S,gt=Y*-S+gt*y,St=W*-S+St*y,Lt=_t*-S+Lt*y,rt=Qt*-S+rt*y,Y=K,W=V,_t=vt),P=ls(-F,Lt),p=P*Br,P&&(y=Math.cos(-P),S=Math.sin(-P),K=L*y-gt*S,V=I*y-St*S,vt=F*y-Lt*S,rt=X*S+rt*y,L=K,I=V,F=vt),P=ls(I,L),g=P*Br,P&&(y=Math.cos(P),S=Math.sin(P),K=L*y+I*S,V=Y*y+W*S,I=I*y-L*S,W=W*y-Y*S,L=K,Y=V),_&&Math.abs(_)+Math.abs(g)>359.9&&(_=g=0,p=180-p),d=Be(Math.sqrt(L*L+I*I+F*F)),m=Be(Math.sqrt(W*W+_t*_t)),P=ls(Y,W),M=Math.abs(P)>2e-4?P*Br:0,v=rt?1/(rt<0?-rt:rt):0),i.svg&&(K=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!b_(Nn(t,Ie)),K&&t.setAttribute("transform",K))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(d*=-1,M+=g<=0?180:-180,g+=g<=0?180:-180):(m*=-1,M+=M<=0?180:-180)),e=e||i.uncache,i.x=c-((i.xPercent=c&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-c)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=Be(d),i.scaleY=Be(m),i.rotation=Be(g)+a,i.rotationX=Be(_)+a,i.rotationY=Be(p)+a,i.skewX=M+a,i.skewY=x+a,i.transformPerspective=v+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!e&&i.zOrigin||0)&&(r[An]=ul(u)),i.xOffset=i.yOffset=0,i.force3D=On.force3D,i.renderTransform=i.svg?ay:M_?A_:oy,i.uncache=0,i},ul=function(t){return(t=t.split(" "))[0]+" "+t[1]},tc=function(t,e,i){var r=sn(e);return Be(parseFloat(e)+parseFloat(xr(t,"x",i+"px",r)))+r},oy=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,A_(t,e)},Cr="0deg",ao="0px",Rr=") ",A_=function(t,e){var i=e||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,f=i.rotationX,h=i.skewX,d=i.skewY,m=i.scaleX,g=i.scaleY,_=i.transformPerspective,p=i.force3D,M=i.target,x=i.zOrigin,v="",b=p==="auto"&&t&&t!==1||p===!0;if(x&&(f!==Cr||c!==Cr)){var w=parseFloat(c)*Ns,R=Math.sin(w),P=Math.cos(w),y;w=parseFloat(f)*Ns,y=Math.cos(w),o=tc(M,o,R*y*-x),a=tc(M,a,-Math.sin(w)*-x),l=tc(M,l,P*y*-x+x)}_!==ao&&(v+="perspective("+_+Rr),(r||s)&&(v+="translate("+r+"%, "+s+"%) "),(b||o!==ao||a!==ao||l!==ao)&&(v+=l!==ao||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Rr),u!==Cr&&(v+="rotate("+u+Rr),c!==Cr&&(v+="rotateY("+c+Rr),f!==Cr&&(v+="rotateX("+f+Rr),(h!==Cr||d!==Cr)&&(v+="skew("+h+", "+d+Rr),(m!==1||g!==1)&&(v+="scale("+m+", "+g+Rr),M.style[Ie]=v||"translate(0, 0)"},ay=function(t,e){var i=e||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,f=i.scaleX,h=i.scaleY,d=i.target,m=i.xOrigin,g=i.yOrigin,_=i.xOffset,p=i.yOffset,M=i.forceCSS,x=parseFloat(o),v=parseFloat(a),b,w,R,P,y;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Ns,u*=Ns,b=Math.cos(l)*f,w=Math.sin(l)*f,R=Math.sin(l-u)*-h,P=Math.cos(l-u)*h,u&&(c*=Ns,y=Math.tan(u-c),y=Math.sqrt(1+y*y),R*=y,P*=y,c&&(y=Math.tan(c),y=Math.sqrt(1+y*y),b*=y,w*=y)),b=Be(b),w=Be(w),R=Be(R),P=Be(P)):(b=f,P=h,w=R=0),(x&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(x=xr(d,"x",o,"px"),v=xr(d,"y",a,"px")),(m||g||_||p)&&(x=Be(x+m-(m*b+g*R)+_),v=Be(v+g-(m*w+g*P)+p)),(r||s)&&(y=d.getBBox(),x=Be(x+r/100*y.width),v=Be(v+s/100*y.height)),y="matrix("+b+","+w+","+R+","+P+","+x+","+v+")",d.setAttribute("transform",y),M&&(d.style[Ie]=y)},ly=function(t,e,i,r,s){var o=360,a=Ke(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Br:1),u=l-r,c=r+u+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),f==="cw"&&u<0?u=(u+o*Jh)%o-~~(u/o)*o:f==="ccw"&&u>0&&(u=(u-o*Jh)%o-~~(u/o)*o)),t._pt=h=new bn(t._pt,e,i,r,u,Wx),h.e=c,h.u="deg",t._props.push(i),h},sd=function(t,e){for(var i in e)t[i]=e[i];return t},cy=function(t,e,i){var r=sd({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,f,h,d,m;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[Ie]=e,a=qo(i,1),vr(i,Ie),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Ie],o[Ie]=e,a=qo(i,1),o[Ie]=u);for(l in Xi)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(d=sn(u),m=sn(c),f=d!==m?xr(i,l,u,m):parseFloat(u),h=parseFloat(c),t._pt=new bn(t._pt,a,l,f,h-f,su),t._pt.u=m||0,t._props.push(l));sd(a,r)};Tn("padding,margin,Width,Radius",function(n,t){var e="Top",i="Right",r="Bottom",s="Left",o=(t<3?[e,i,r,s]:[e+s,e+i,r+i,r+s]).map(function(a){return t<2?n+a:"border"+a+n});cl[t>1?"border"+n:n]=function(a,l,u,c,f){var h,d;if(arguments.length<4)return h=o.map(function(m){return Ni(a,m,u)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(c+"").split(" "),d={},o.forEach(function(m,g){return d[m]=h[g]=h[g]||h[(g-1)/2|0]}),a.init(l,d,f)}});var w_={name:"css",register:au,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,r,s){var o=this._props,a=t.style,l=i.vars.startAt,u,c,f,h,d,m,g,_,p,M,x,v,b,w,R,P,y;Df||au(),this.styles=this.styles||y_(t),P=this.styles.props,this.tween=i;for(g in e)if(g!=="autoRound"&&(c=e[g],!(Dn[g]&&c_(g,e,i,r,t,s)))){if(d=typeof c,m=cl[g],d==="function"&&(c=c.call(i,r,t,s),d=typeof c),d==="string"&&~c.indexOf("random(")&&(c=Ho(c)),m)m(this,t,g,c,i)&&(R=1);else if(g.substr(0,2)==="--")u=(getComputedStyle(t).getPropertyValue(g)+"").trim(),c+="",hr.lastIndex=0,hr.test(u)||(_=sn(u),p=sn(c),p?_!==p&&(u=xr(t,g,u,p)+p):_&&(c+=_)),this.add(a,"setProperty",u,c,r,s,0,0,g),o.push(g),P.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(u=typeof l[g]=="function"?l[g].call(i,r,t,s):l[g],Ke(u)&&~u.indexOf("random(")&&(u=Ho(u)),sn(u+"")||u==="auto"||(u+=On.units[g]||sn(Ni(t,g))||""),(u+"").charAt(1)==="="&&(u=Ni(t,g))):u=Ni(t,g),h=parseFloat(u),M=d==="string"&&c.charAt(1)==="="&&c.substr(0,2),M&&(c=c.substr(2)),f=parseFloat(c),g in vi&&(g==="autoAlpha"&&(h===1&&Ni(t,"visibility")==="hidden"&&f&&(h=0),P.push("visibility",0,a.visibility),cr(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=vi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in Xi,x){if(this.styles.save(g),y=c,d==="string"&&c.substring(0,6)==="var(--"){if(c=Nn(t,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var S=t.style.perspective;t.style.perspective=c,c=Nn(t,"perspective"),S?t.style.perspective=S:vr(t,"perspective")}f=parseFloat(c)}if(v||(b=t._gsap,b.renderTransform&&!e.parseTransform||qo(t,e.parseTransform),w=e.smoothOrigin!==!1&&b.smooth,v=this._pt=new bn(this._pt,a,Ie,0,1,b.renderTransform,b,0,-1),v.dep=1),g==="scale")this._pt=new bn(this._pt,b,"scaleY",b.scaleY,(M?Is(b.scaleY,M+f):f)-b.scaleY||0,su),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(An,0,a[An]),c=ry(c),b.svg?lu(t,c,0,w,0,this):(p=parseFloat(c.split(" ")[2])||0,p!==b.zOrigin&&cr(this,b,"zOrigin",b.zOrigin,p),cr(this,a,g,ul(u),ul(c)));continue}else if(g==="svgOrigin"){lu(t,c,1,w,0,this);continue}else if(g in T_){ly(this,b,g,h,M?Is(h,M+c):c);continue}else if(g==="smoothOrigin"){cr(this,b,"smooth",b.smooth,c);continue}else if(g==="force3D"){b[g]=c;continue}else if(g==="transform"){cy(this,c,t);continue}}else g in a||(g=Xs(g)||g);if(x||(f||f===0)&&(h||h===0)&&!Gx.test(c)&&g in a)_=(u+"").substr((h+"").length),f||(f=0),p=sn(c)||(g in On.units?On.units[g]:_),_!==p&&(h=xr(t,g,u,p)),this._pt=new bn(this._pt,x?b:a,g,h,(M?Is(h,M+f):f)-h,!x&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?Yx:su),this._pt.u=p||0,x&&y!==c?(this._pt.b=u,this._pt.e=y,this._pt.r=qx):_!==p&&p!=="%"&&(this._pt.b=u,this._pt.r=Xx);else if(g in a)iy.call(this,t,g,u,M?M+c:c);else if(g in t)this.add(t,g,u||t[g],M?M+c:c,r,s);else if(g!=="parseTransform"){Mf(g,c);continue}x||(g in a?P.push(g,0,a[g]):typeof t[g]=="function"?P.push(g,2,t[g]()):P.push(g,1,u||t[g])),o.push(g)}}R&&m_(this)},render:function(t,e){if(e.tween._time||!Lf())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:Ni,aliases:vi,getSetter:function(t,e,i){var r=vi[e];return r&&r.indexOf(",")<0&&(e=r),e in Xi&&e!==An&&(t._gsap.x||Ni(t,"x"))?i&&Zh===i?e==="scale"?Zx:jx:(Zh=i||{})&&(e==="scale"?Jx:Qx):t.style&&!vf(t.style[e])?$x:~e.indexOf("-")?Kx:Rf(t,e)},core:{_removeProperty:vr,_getMatrix:Uf}};wn.utils.checkPrefix=Xs;wn.core.getStyleSaver=y_;(function(n,t,e,i){var r=Tn(n+","+t+","+e,function(s){Xi[s]=1});Tn(t,function(s){On.units[s]="deg",T_[s]=1}),vi[r[13]]=n+","+t,Tn(i,function(s){var o=s.split(":");vi[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Tn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){On.units[n]="px"});wn.registerPlugin(w_);var ne=wn.registerPlugin(w_)||wn;ne.core.Tween;const Nf=(n,t)=>{const e=n.__vccOpts||n;for(const[i,r]of t)e[i]=r;return e},uy={class:"bubble-nav"},fy=["onClick"],hy={class:"bubble"},dy={class:"bubble-icon"},py={class:"bubble-label"},my={__name:"BubbleNav",props:{pages:{type:Array,required:!0},currentPage:{type:String,required:!0}},emits:["page-change"],setup(n){return(t,e)=>(se(),le("nav",uy,[e[1]||(e[1]=$("svg",{class:"nav-curve",viewBox:"0 0 100 400",preserveAspectRatio:"none"},[$("path",{d:"M 50 30 Q 80 100, 50 170 Q 20 240, 50 310",fill:"none",stroke:"rgba(255, 255, 255, 0.3)","stroke-width":"2",class:"curve-path"})],-1)),(se(!0),le(Ge,null,di(n.pages,(i,r)=>(se(),le("div",{key:i.id,class:Fe(["bubble-item",{active:n.currentPage===i.id}]),style:Kr({top:i.position}),onClick:s=>t.$emit("page-change",i.id)},[$("div",hy,[$("div",dy,Bt(i.icon),1),e[0]||(e[0]=$("div",{class:"bubble-glow"},null,-1))]),$("div",py,Bt(i.name),1)],14,fy))),128))]))}},_y=Nf(my,[["__scopeId","data-v-b4b834a3"]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Of="171",gy=0,od=1,vy=2,C_=1,xy=2,Di=3,qi=0,Qe=1,Ze=2,dr=0,Os=1,ad=2,ld=3,cd=4,yy=5,Hr=100,My=101,Sy=102,Ey=103,Ty=104,by=200,Ay=201,wy=202,Cy=203,cu=204,uu=205,Ry=206,Py=207,Dy=208,Ly=209,Iy=210,Uy=211,Ny=212,Oy=213,Fy=214,fu=0,hu=1,du=2,qs=3,pu=4,mu=5,_u=6,gu=7,R_=0,By=1,zy=2,pr=0,ky=1,Vy=2,Hy=3,Gy=4,Wy=5,Xy=6,qy=7,P_=300,Ys=301,$s=302,vu=303,xu=304,Rl=306,yu=1e3,qr=1001,Mu=1002,oi=1003,Yy=1004,ua=1005,xi=1006,ec=1007,Yr=1008,Yi=1009,D_=1010,L_=1011,Yo=1012,Ff=1013,ns=1014,Bi=1015,Qo=1016,Bf=1017,zf=1018,Ks=1020,I_=35902,U_=1021,N_=1022,ri=1023,O_=1024,F_=1025,Fs=1026,js=1027,B_=1028,kf=1029,z_=1030,Vf=1031,Hf=1033,Ga=33776,Wa=33777,Xa=33778,qa=33779,Su=35840,Eu=35841,Tu=35842,bu=35843,Au=36196,wu=37492,Cu=37496,Ru=37808,Pu=37809,Du=37810,Lu=37811,Iu=37812,Uu=37813,Nu=37814,Ou=37815,Fu=37816,Bu=37817,zu=37818,ku=37819,Vu=37820,Hu=37821,Ya=36492,Gu=36494,Wu=36495,k_=36283,Xu=36284,qu=36285,Yu=36286,$y=3200,Ky=3201,V_=0,jy=1,or="",Wn="srgb",Zs="srgb-linear",fl="linear",ye="srgb",cs=7680,ud=519,Zy=512,Jy=513,Qy=514,H_=515,tM=516,eM=517,nM=518,iM=519,fd=35044,hd="300 es",zi=2e3,hl=2001;class Qs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nc=Math.PI/180,$u=180/Math.PI;function ta(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]+"-"+en[t&255]+en[t>>8&255]+"-"+en[t>>16&15|64]+en[t>>24&255]+"-"+en[e&63|128]+en[e>>8&255]+"-"+en[e>>16&255]+en[e>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function re(n,t,e){return Math.max(t,Math.min(e,n))}function rM(n,t){return(n%t+t)%t}function ic(n,t,e){return(1-e)*n+e*t}function lo(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function vn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ft{constructor(t=0,e=0){Ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class te{constructor(t,e,i,r,s,o,a,l,u){te.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,u)}set(t,e,i,r,s,o,a,l,u){const c=this.elements;return c[0]=t,c[1]=r,c[2]=a,c[3]=e,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],d=i[5],m=i[8],g=r[0],_=r[3],p=r[6],M=r[1],x=r[4],v=r[7],b=r[2],w=r[5],R=r[8];return s[0]=o*g+a*M+l*b,s[3]=o*_+a*x+l*w,s[6]=o*p+a*v+l*R,s[1]=u*g+c*M+f*b,s[4]=u*_+c*x+f*w,s[7]=u*p+c*v+f*R,s[2]=h*g+d*M+m*b,s[5]=h*_+d*x+m*w,s[8]=h*p+d*v+m*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8];return e*o*c-e*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8],f=c*o-a*u,h=a*l-c*s,d=u*s-o*l,m=e*f+i*h+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return t[0]=f*g,t[1]=(r*u-c*i)*g,t[2]=(a*i-r*o)*g,t[3]=h*g,t[4]=(c*e-r*l)*g,t[5]=(r*s-a*e)*g,t[6]=d*g,t[7]=(i*l-u*e)*g,t[8]=(o*e-i*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+t,-r*u,r*l,-r*(-u*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(rc.makeScale(t,e)),this}rotate(t){return this.premultiply(rc.makeRotation(-t)),this}translate(t,e){return this.premultiply(rc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const rc=new te;function G_(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function dl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function sM(){const n=dl("canvas");return n.style.display="block",n}const dd={};function bs(n){n in dd||(dd[n]=!0,console.warn(n))}function oM(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function aM(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function lM(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const pd=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),md=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cM(){const n={enabled:!0,workingColorSpace:Zs,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ye&&(r.r=ki(r.r),r.g=ki(r.g),r.b=ki(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ye&&(r.r=Bs(r.r),r.g=Bs(r.g),r.b=Bs(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===or?fl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Zs]:{primaries:t,whitePoint:i,transfer:fl,toXYZ:pd,fromXYZ:md,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Wn},outputColorSpaceConfig:{drawingBufferColorSpace:Wn}},[Wn]:{primaries:t,whitePoint:i,transfer:ye,toXYZ:pd,fromXYZ:md,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Wn}}}),n}const fe=cM();function ki(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Bs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let us;class uM{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{us===void 0&&(us=dl("canvas")),us.width=t.width,us.height=t.height;const i=us.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=us}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=dl("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ki(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ki(e[i]/255)*255):e[i]=ki(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let fM=0;class W_{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fM++}),this.uuid=ta(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(sc(r[o].image)):s.push(sc(r[o]))}else s=sc(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function sc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?uM.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hM=0;class mn extends Qs{constructor(t=mn.DEFAULT_IMAGE,e=mn.DEFAULT_MAPPING,i=qr,r=qr,s=xi,o=Yr,a=ri,l=Yi,u=mn.DEFAULT_ANISOTROPY,c=or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=ta(),this.name="",this.source=new W_(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==P_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yu:t.x=t.x-Math.floor(t.x);break;case qr:t.x=t.x<0?0:1;break;case Mu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yu:t.y=t.y-Math.floor(t.y);break;case qr:t.y=t.y<0?0:1;break;case Mu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=P_;mn.DEFAULT_ANISOTROPY=1;class Se{constructor(t=0,e=0,i=0,r=1){Se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,u=l[0],c=l[4],f=l[8],h=l[1],d=l[5],m=l[9],g=l[2],_=l[6],p=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-g)<.01&&Math.abs(m-_)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+g)<.1&&Math.abs(m+_)<.1&&Math.abs(u+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(u+1)/2,v=(d+1)/2,b=(p+1)/2,w=(c+h)/4,R=(f+g)/4,P=(m+_)/4;return x>v&&x>b?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=w/i,s=R/i):v>b?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=w/r,s=P/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=R/s,r=P/s),this.set(i,r,s,e),this}let M=Math.sqrt((_-m)*(_-m)+(f-g)*(f-g)+(h-c)*(h-c));return Math.abs(M)<.001&&(M=1),this.x=(_-m)/M,this.y=(f-g)/M,this.z=(h-c)/M,this.w=Math.acos((u+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dM extends Qs{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new mn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new W_(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class is extends dM{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class X_ extends mn{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=oi,this.minFilter=oi,this.wrapR=qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class pM extends mn{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=oi,this.minFilter=oi,this.wrapR=qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ea{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[o+0],d=s[o+1],m=s[o+2],g=s[o+3];if(a===0){t[e+0]=l,t[e+1]=u,t[e+2]=c,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=d,t[e+2]=m,t[e+3]=g;return}if(f!==g||l!==h||u!==d||c!==m){let _=1-a;const p=l*h+u*d+c*m+f*g,M=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const b=Math.sqrt(x),w=Math.atan2(b,p*M);_=Math.sin(_*w)/b,a=Math.sin(a*w)/b}const v=a*M;if(l=l*_+h*v,u=u*_+d*v,c=c*_+m*v,f=f*_+g*v,_===1-a){const b=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=b,u*=b,c*=b,f*=b}}t[e]=l,t[e+1]=u,t[e+2]=c,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],h=s[o+1],d=s[o+2],m=s[o+3];return t[e]=a*m+c*f+l*d-u*h,t[e+1]=l*m+c*h+u*f-a*d,t[e+2]=u*m+c*d+a*h-l*f,t[e+3]=c*m-a*f-l*h-u*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),h=l(i/2),d=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*d*m,this._y=u*d*f-h*c*m,this._z=u*c*m+h*d*f,this._w=u*c*f-h*d*m;break;case"YXZ":this._x=h*c*f+u*d*m,this._y=u*d*f-h*c*m,this._z=u*c*m-h*d*f,this._w=u*c*f+h*d*m;break;case"ZXY":this._x=h*c*f-u*d*m,this._y=u*d*f+h*c*m,this._z=u*c*m+h*d*f,this._w=u*c*f-h*d*m;break;case"ZYX":this._x=h*c*f-u*d*m,this._y=u*d*f+h*c*m,this._z=u*c*m-h*d*f,this._w=u*c*f+h*d*m;break;case"YZX":this._x=h*c*f+u*d*m,this._y=u*d*f+h*c*m,this._z=u*c*m-h*d*f,this._w=u*c*f-h*d*m;break;case"XZY":this._x=h*c*f-u*d*m,this._y=u*d*f-h*c*m,this._z=u*c*m+h*d*f,this._w=u*c*f+h*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],u=e[2],c=e[6],f=e[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(c-l)*d,this._y=(s-u)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(c-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+u)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-u)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+c)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+u)/d,this._y=(l+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,u=e._z,c=e._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-e)*c)/u,h=Math.sin(e*c)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,i=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_d.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_d.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,u=2*(o*r-a*i),c=2*(a*e-s*r),f=2*(s*i-o*e);return this.x=e+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return oc.copy(this).projectOnVector(t),this.sub(oc)}reflect(t){return this.sub(oc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oc=new U,_d=new ea;class na{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Jn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Jn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Jn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Jn):Jn.fromBufferAttribute(s,o),Jn.applyMatrix4(t.matrixWorld),this.expandByPoint(Jn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fa.copy(i.boundingBox)),fa.applyMatrix4(t.matrixWorld),this.union(fa)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Jn),Jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(co),ha.subVectors(this.max,co),fs.subVectors(t.a,co),hs.subVectors(t.b,co),ds.subVectors(t.c,co),Zi.subVectors(hs,fs),Ji.subVectors(ds,hs),Pr.subVectors(fs,ds);let e=[0,-Zi.z,Zi.y,0,-Ji.z,Ji.y,0,-Pr.z,Pr.y,Zi.z,0,-Zi.x,Ji.z,0,-Ji.x,Pr.z,0,-Pr.x,-Zi.y,Zi.x,0,-Ji.y,Ji.x,0,-Pr.y,Pr.x,0];return!ac(e,fs,hs,ds,ha)||(e=[1,0,0,0,1,0,0,0,1],!ac(e,fs,hs,ds,ha))?!1:(da.crossVectors(Zi,Ji),e=[da.x,da.y,da.z],ac(e,fs,hs,ds,ha))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Jn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Jn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ai=[new U,new U,new U,new U,new U,new U,new U,new U],Jn=new U,fa=new na,fs=new U,hs=new U,ds=new U,Zi=new U,Ji=new U,Pr=new U,co=new U,ha=new U,da=new U,Dr=new U;function ac(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Dr.fromArray(n,s);const a=r.x*Math.abs(Dr.x)+r.y*Math.abs(Dr.y)+r.z*Math.abs(Dr.z),l=t.dot(Dr),u=e.dot(Dr),c=i.dot(Dr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const mM=new na,uo=new U,lc=new U;class Pl{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):mM.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;uo.subVectors(t,this.center);const e=uo.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(uo,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(lc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(uo.copy(t.center).add(lc)),this.expandByPoint(uo.copy(t.center).sub(lc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wi=new U,cc=new U,pa=new U,Qi=new U,uc=new U,ma=new U,fc=new U;class Gf{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=wi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wi.copy(this.origin).addScaledVector(this.direction,e),wi.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){cc.copy(t).add(e).multiplyScalar(.5),pa.copy(e).sub(t).normalize(),Qi.copy(this.origin).sub(cc);const s=t.distanceTo(e)*.5,o=-this.direction.dot(pa),a=Qi.dot(this.direction),l=-Qi.dot(pa),u=Qi.lengthSq(),c=Math.abs(1-o*o);let f,h,d,m;if(c>0)if(f=o*l-a,h=o*a-l,m=s*c,f>=0)if(h>=-m)if(h<=m){const g=1/c;f*=g,h*=g,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+u;else h<=-m?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+u):h<=m?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(cc).addScaledVector(pa,h),d}intersectSphere(t,e){wi.subVectors(t.center,this.origin);const i=wi.dot(this.direction),r=wi.dot(wi)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(t.min.x-h.x)*u,r=(t.max.x-h.x)*u):(i=(t.max.x-h.x)*u,r=(t.min.x-h.x)*u),c>=0?(s=(t.min.y-h.y)*c,o=(t.max.y-h.y)*c):(s=(t.max.y-h.y)*c,o=(t.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,wi)!==null}intersectTriangle(t,e,i,r,s){uc.subVectors(e,t),ma.subVectors(i,t),fc.crossVectors(uc,ma);let o=this.direction.dot(fc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qi.subVectors(this.origin,t);const l=a*this.direction.dot(ma.crossVectors(Qi,ma));if(l<0)return null;const u=a*this.direction.dot(uc.cross(Qi));if(u<0||l+u>o)return null;const c=-a*Qi.dot(fc);return c<0?null:this.at(c/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class we{constructor(t,e,i,r,s,o,a,l,u,c,f,h,d,m,g,_){we.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,u,c,f,h,d,m,g,_)}set(t,e,i,r,s,o,a,l,u,c,f,h,d,m,g,_){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=u,p[6]=c,p[10]=f,p[14]=h,p[3]=d,p[7]=m,p[11]=g,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new we().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/ps.setFromMatrixColumn(t,0).length(),s=1/ps.setFromMatrixColumn(t,1).length(),o=1/ps.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=o*c,d=o*f,m=a*c,g=a*f;e[0]=l*c,e[4]=-l*f,e[8]=u,e[1]=d+m*u,e[5]=h-g*u,e[9]=-a*l,e[2]=g-h*u,e[6]=m+d*u,e[10]=o*l}else if(t.order==="YXZ"){const h=l*c,d=l*f,m=u*c,g=u*f;e[0]=h+g*a,e[4]=m*a-d,e[8]=o*u,e[1]=o*f,e[5]=o*c,e[9]=-a,e[2]=d*a-m,e[6]=g+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*c,d=l*f,m=u*c,g=u*f;e[0]=h-g*a,e[4]=-o*f,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*c,e[9]=g-h*a,e[2]=-o*u,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*c,d=o*f,m=a*c,g=a*f;e[0]=l*c,e[4]=m*u-d,e[8]=h*u+g,e[1]=l*f,e[5]=g*u+h,e[9]=d*u-m,e[2]=-u,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,d=o*u,m=a*l,g=a*u;e[0]=l*c,e[4]=g-h*f,e[8]=m*f+d,e[1]=f,e[5]=o*c,e[9]=-a*c,e[2]=-u*c,e[6]=d*f+m,e[10]=h-g*f}else if(t.order==="XZY"){const h=o*l,d=o*u,m=a*l,g=a*u;e[0]=l*c,e[4]=-f,e[8]=u*c,e[1]=h*f+g,e[5]=o*c,e[9]=d*f-m,e[2]=m*f-d,e[6]=a*c,e[10]=g*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_M,t,gM)}lookAt(t,e,i){const r=this.elements;return Rn.subVectors(t,e),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),tr.crossVectors(i,Rn),tr.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),tr.crossVectors(i,Rn)),tr.normalize(),_a.crossVectors(Rn,tr),r[0]=tr.x,r[4]=_a.x,r[8]=Rn.x,r[1]=tr.y,r[5]=_a.y,r[9]=Rn.y,r[2]=tr.z,r[6]=_a.z,r[10]=Rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],d=i[13],m=i[2],g=i[6],_=i[10],p=i[14],M=i[3],x=i[7],v=i[11],b=i[15],w=r[0],R=r[4],P=r[8],y=r[12],S=r[1],L=r[5],I=r[9],F=r[13],X=r[2],Y=r[6],W=r[10],K=r[14],V=r[3],vt=r[7],gt=r[11],St=r[15];return s[0]=o*w+a*S+l*X+u*V,s[4]=o*R+a*L+l*Y+u*vt,s[8]=o*P+a*I+l*W+u*gt,s[12]=o*y+a*F+l*K+u*St,s[1]=c*w+f*S+h*X+d*V,s[5]=c*R+f*L+h*Y+d*vt,s[9]=c*P+f*I+h*W+d*gt,s[13]=c*y+f*F+h*K+d*St,s[2]=m*w+g*S+_*X+p*V,s[6]=m*R+g*L+_*Y+p*vt,s[10]=m*P+g*I+_*W+p*gt,s[14]=m*y+g*F+_*K+p*St,s[3]=M*w+x*S+v*X+b*V,s[7]=M*R+x*L+v*Y+b*vt,s[11]=M*P+x*I+v*W+b*gt,s[15]=M*y+x*F+v*K+b*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],u=t[13],c=t[2],f=t[6],h=t[10],d=t[14],m=t[3],g=t[7],_=t[11],p=t[15];return m*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*d-i*l*d)+g*(+e*l*d-e*u*h+s*o*h-r*o*d+r*u*c-s*l*c)+_*(+e*u*f-e*a*d-s*o*f+i*o*d+s*a*c-i*u*c)+p*(-r*a*c-e*l*f+e*a*h+r*o*f-i*o*h+i*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8],f=t[9],h=t[10],d=t[11],m=t[12],g=t[13],_=t[14],p=t[15],M=f*_*u-g*h*u+g*l*d-a*_*d-f*l*p+a*h*p,x=m*h*u-c*_*u-m*l*d+o*_*d+c*l*p-o*h*p,v=c*g*u-m*f*u+m*a*d-o*g*d-c*a*p+o*f*p,b=m*f*l-c*g*l-m*a*h+o*g*h+c*a*_-o*f*_,w=e*M+i*x+r*v+s*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return t[0]=M*R,t[1]=(g*h*s-f*_*s-g*r*d+i*_*d+f*r*p-i*h*p)*R,t[2]=(a*_*s-g*l*s+g*r*u-i*_*u-a*r*p+i*l*p)*R,t[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*d-i*l*d)*R,t[4]=x*R,t[5]=(c*_*s-m*h*s+m*r*d-e*_*d-c*r*p+e*h*p)*R,t[6]=(m*l*s-o*_*s-m*r*u+e*_*u+o*r*p-e*l*p)*R,t[7]=(o*h*s-c*l*s+c*r*u-e*h*u-o*r*d+e*l*d)*R,t[8]=v*R,t[9]=(m*f*s-c*g*s-m*i*d+e*g*d+c*i*p-e*f*p)*R,t[10]=(o*g*s-m*a*s+m*i*u-e*g*u-o*i*p+e*a*p)*R,t[11]=(c*a*s-o*f*s-c*i*u+e*f*u+o*i*d-e*a*d)*R,t[12]=b*R,t[13]=(c*g*r-m*f*r+m*i*h-e*g*h-c*i*_+e*f*_)*R,t[14]=(m*a*r-o*g*r-m*i*l+e*g*l+o*i*_-e*a*_)*R,t[15]=(o*f*r-c*a*r+c*i*l-e*f*l-o*i*h+e*a*h)*R,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,u=s+s,c=o+o,f=a+a,h=s*u,d=s*c,m=s*f,g=o*c,_=o*f,p=a*f,M=l*u,x=l*c,v=l*f,b=i.x,w=i.y,R=i.z;return r[0]=(1-(g+p))*b,r[1]=(d+v)*b,r[2]=(m-x)*b,r[3]=0,r[4]=(d-v)*w,r[5]=(1-(h+p))*w,r[6]=(_+M)*w,r[7]=0,r[8]=(m+x)*R,r[9]=(_-M)*R,r[10]=(1-(h+g))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=ps.set(r[0],r[1],r[2]).length();const o=ps.set(r[4],r[5],r[6]).length(),a=ps.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Qn.copy(this);const u=1/s,c=1/o,f=1/a;return Qn.elements[0]*=u,Qn.elements[1]*=u,Qn.elements[2]*=u,Qn.elements[4]*=c,Qn.elements[5]*=c,Qn.elements[6]*=c,Qn.elements[8]*=f,Qn.elements[9]*=f,Qn.elements[10]*=f,e.setFromRotationMatrix(Qn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=zi){const l=this.elements,u=2*s/(e-t),c=2*s/(i-r),f=(e+t)/(e-t),h=(i+r)/(i-r);let d,m;if(a===zi)d=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===hl)d=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=zi){const l=this.elements,u=1/(e-t),c=1/(i-r),f=1/(o-s),h=(e+t)*u,d=(i+r)*c;let m,g;if(a===zi)m=(o+s)*f,g=-2*f;else if(a===hl)m=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const ps=new U,Qn=new we,_M=new U(0,0,0),gM=new U(1,1,1),tr=new U,_a=new U,Rn=new U,gd=new we,vd=new ea;class Ei{constructor(t=0,e=0,i=0,r=Ei.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-re(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-re(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return gd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vd.setFromEuler(this),this.setFromQuaternion(vd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ei.DEFAULT_ORDER="XYZ";class Wf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vM=0;const xd=new U,ms=new ea,Ci=new we,ga=new U,fo=new U,xM=new U,yM=new ea,yd=new U(1,0,0),Md=new U(0,1,0),Sd=new U(0,0,1),Ed={type:"added"},MM={type:"removed"},_s={type:"childadded",child:null},hc={type:"childremoved",child:null};class tn extends Qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=ta(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const t=new U,e=new Ei,i=new ea,r=new U(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new we},normalMatrix:{value:new te}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.multiply(ms),this}rotateOnWorldAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.premultiply(ms),this}rotateX(t){return this.rotateOnAxis(yd,t)}rotateY(t){return this.rotateOnAxis(Md,t)}rotateZ(t){return this.rotateOnAxis(Sd,t)}translateOnAxis(t,e){return xd.copy(t).applyQuaternion(this.quaternion),this.position.add(xd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yd,t)}translateY(t){return this.translateOnAxis(Md,t)}translateZ(t){return this.translateOnAxis(Sd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ga.copy(t):ga.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(fo,ga,this.up):Ci.lookAt(ga,fo,this.up),this.quaternion.setFromRotationMatrix(Ci),r&&(Ci.extractRotation(r.matrixWorld),ms.setFromRotationMatrix(Ci),this.quaternion.premultiply(ms.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ed),_s.child=t,this.dispatchEvent(_s),_s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(MM),hc.child=t,this.dispatchEvent(hc),hc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ed),_s.child=t,this.dispatchEvent(_s),_s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fo,t,xM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fo,yM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),u=o(t.textures),c=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}tn.DEFAULT_UP=new U(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ti=new U,Ri=new U,dc=new U,Pi=new U,gs=new U,vs=new U,Td=new U,pc=new U,mc=new U,_c=new U,gc=new Se,vc=new Se,xc=new Se;class ii{constructor(t=new U,e=new U,i=new U){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),ti.subVectors(t,e),r.cross(ti);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){ti.subVectors(r,e),Ri.subVectors(i,e),dc.subVectors(t,e);const o=ti.dot(ti),a=ti.dot(Ri),l=ti.dot(dc),u=Ri.dot(Ri),c=Ri.dot(dc),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(u*l-a*c)*h,m=(o*c-a*l)*h;return s.set(1-d-m,m,d)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(t,e,i,r,s,o,a,l){return this.getBarycoord(t,e,i,r,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pi.x),l.addScaledVector(o,Pi.y),l.addScaledVector(a,Pi.z),l)}static getInterpolatedAttribute(t,e,i,r,s,o){return gc.setScalar(0),vc.setScalar(0),xc.setScalar(0),gc.fromBufferAttribute(t,e),vc.fromBufferAttribute(t,i),xc.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(gc,s.x),o.addScaledVector(vc,s.y),o.addScaledVector(xc,s.z),o}static isFrontFacing(t,e,i,r){return ti.subVectors(i,e),Ri.subVectors(t,e),ti.cross(Ri).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ti.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),ti.cross(Ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ii.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ii.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return ii.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return ii.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ii.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;gs.subVectors(r,i),vs.subVectors(s,i),pc.subVectors(t,i);const l=gs.dot(pc),u=vs.dot(pc);if(l<=0&&u<=0)return e.copy(i);mc.subVectors(t,r);const c=gs.dot(mc),f=vs.dot(mc);if(c>=0&&f<=c)return e.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),e.copy(i).addScaledVector(gs,o);_c.subVectors(t,s);const d=gs.dot(_c),m=vs.dot(_c);if(m>=0&&d<=m)return e.copy(s);const g=d*u-l*m;if(g<=0&&u>=0&&m<=0)return a=u/(u-m),e.copy(i).addScaledVector(vs,a);const _=c*m-d*f;if(_<=0&&f-c>=0&&d-m>=0)return Td.subVectors(s,r),a=(f-c)/(f-c+(d-m)),e.copy(r).addScaledVector(Td,a);const p=1/(_+g+h);return o=g*p,a=h*p,e.copy(i).addScaledVector(gs,o).addScaledVector(vs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const q_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={h:0,s:0,l:0},va={h:0,s:0,l:0};function yc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Zt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Wn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=fe.workingColorSpace){return this.r=t,this.g=e,this.b=i,fe.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=fe.workingColorSpace){if(t=rM(t,1),e=re(e,0,1),i=re(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=yc(o,s,t+1/3),this.g=yc(o,s,t),this.b=yc(o,s,t-1/3)}return fe.toWorkingColorSpace(this,r),this}setStyle(t,e=Wn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Wn){const i=q_[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ki(t.r),this.g=ki(t.g),this.b=ki(t.b),this}copyLinearToSRGB(t){return this.r=Bs(t.r),this.g=Bs(t.g),this.b=Bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Wn){return fe.fromWorkingColorSpace(nn.copy(this),t),Math.round(re(nn.r*255,0,255))*65536+Math.round(re(nn.g*255,0,255))*256+Math.round(re(nn.b*255,0,255))}getHexString(t=Wn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.fromWorkingColorSpace(nn.copy(this),e);const i=nn.r,r=nn.g,s=nn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return t.h=l,t.s=u,t.l=c,t}getRGB(t,e=fe.workingColorSpace){return fe.fromWorkingColorSpace(nn.copy(this),e),t.r=nn.r,t.g=nn.g,t.b=nn.b,t}getStyle(t=Wn){fe.fromWorkingColorSpace(nn.copy(this),t);const e=nn.r,i=nn.g,r=nn.b;return t!==Wn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(er),this.setHSL(er.h+t,er.s+e,er.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(er),t.getHSL(va);const i=ic(er.h,va.h,e),r=ic(er.s,va.s,e),s=ic(er.l,va.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new Zt;Zt.NAMES=q_;let SM=0;class to extends Qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:SM++}),this.uuid=ta(),this.name="",this.type="Material",this.blending=Os,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cu,this.blendDst=uu,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ud,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(i.blending=this.blending),this.side!==qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==cu&&(i.blendSrc=this.blendSrc),this.blendDst!==uu&&(i.blendDst=this.blendDst),this.blendEquation!==Hr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==qs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ud&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class We extends to{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=R_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ve=new U,xa=new Ft;class Kn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=fd,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)xa.fromBufferAttribute(this,e),xa.applyMatrix3(t),this.setXY(e,xa.x,xa.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix3(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=lo(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=vn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=lo(e,this.array)),e}setX(t,e){return this.normalized&&(e=vn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=lo(e,this.array)),e}setY(t,e){return this.normalized&&(e=vn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=lo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=vn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=lo(e,this.array)),e}setW(t,e){return this.normalized&&(e=vn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=vn(e,this.array),i=vn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=vn(e,this.array),i=vn(i,this.array),r=vn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=vn(e,this.array),i=vn(i,this.array),r=vn(r,this.array),s=vn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fd&&(t.usage=this.usage),t}}class Y_ extends Kn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class $_ extends Kn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Oe extends Kn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let EM=0;const Hn=new we,Mc=new tn,xs=new U,Pn=new na,ho=new na,$e=new U;class _n extends Qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:EM++}),this.uuid=ta(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(G_(t)?$_:Y_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new te().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Hn.makeRotationFromQuaternion(t),this.applyMatrix4(Hn),this}rotateX(t){return Hn.makeRotationX(t),this.applyMatrix4(Hn),this}rotateY(t){return Hn.makeRotationY(t),this.applyMatrix4(Hn),this}rotateZ(t){return Hn.makeRotationZ(t),this.applyMatrix4(Hn),this}translate(t,e,i){return Hn.makeTranslation(t,e,i),this.applyMatrix4(Hn),this}scale(t,e,i){return Hn.makeScale(t,e,i),this.applyMatrix4(Hn),this}lookAt(t){return Mc.lookAt(t),Mc.updateMatrix(),this.applyMatrix4(Mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Oe(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new na);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];ho.setFromBufferAttribute(a),this.morphTargetsRelative?($e.addVectors(Pn.min,ho.min),Pn.expandByPoint($e),$e.addVectors(Pn.max,ho.max),Pn.expandByPoint($e)):(Pn.expandByPoint(ho.min),Pn.expandByPoint(ho.max))}Pn.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)$e.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared($e));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)$e.fromBufferAttribute(a,u),l&&(xs.fromBufferAttribute(t,u),$e.add(xs)),r=Math.max(r,i.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new U,l[P]=new U;const u=new U,c=new U,f=new U,h=new Ft,d=new Ft,m=new Ft,g=new U,_=new U;function p(P,y,S){u.fromBufferAttribute(i,P),c.fromBufferAttribute(i,y),f.fromBufferAttribute(i,S),h.fromBufferAttribute(s,P),d.fromBufferAttribute(s,y),m.fromBufferAttribute(s,S),c.sub(u),f.sub(u),d.sub(h),m.sub(h);const L=1/(d.x*m.y-m.x*d.y);isFinite(L)&&(g.copy(c).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(L),_.copy(f).multiplyScalar(d.x).addScaledVector(c,-m.x).multiplyScalar(L),a[P].add(g),a[y].add(g),a[S].add(g),l[P].add(_),l[y].add(_),l[S].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let P=0,y=M.length;P<y;++P){const S=M[P],L=S.start,I=S.count;for(let F=L,X=L+I;F<X;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const x=new U,v=new U,b=new U,w=new U;function R(P){b.fromBufferAttribute(r,P),w.copy(b);const y=a[P];x.copy(y),x.sub(b.multiplyScalar(b.dot(y))).normalize(),v.crossVectors(w,y);const L=v.dot(l[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,L)}for(let P=0,y=M.length;P<y;++P){const S=M[P],L=S.start,I=S.count;for(let F=L,X=L+I;F<X;F+=3)R(t.getX(F+0)),R(t.getX(F+1)),R(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new U,s=new U,o=new U,a=new U,l=new U,u=new U,c=new U,f=new U;if(t)for(let h=0,d=t.count;h<d;h+=3){const m=t.getX(h+0),g=t.getX(h+1),_=t.getX(h+2);r.fromBufferAttribute(e,m),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,_),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,g),u.fromBufferAttribute(i,_),a.add(c),l.add(c),u.add(c),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(_,u.x,u.y,u.z)}else for(let h=0,d=e.count;h<d;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let d=0,m=0;for(let g=0,_=l.length;g<_;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*c;for(let p=0;p<c;p++)h[m++]=u[d++]}return new Kn(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _n,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=t(l,i);e.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],d=t(h,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const u=i[l];t.data.attributes[l]=u.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const d=u[f];c.push(d.toJSON(t.data))}c.length>0&&(r[l]=c,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(e))}const s=t.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,d=f.length;h<d;h++)c.push(f[h].clone(e));this.morphAttributes[u]=c}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bd=new we,Lr=new Gf,ya=new Pl,Ad=new U,Ma=new U,Sa=new U,Ea=new U,Sc=new U,Ta=new U,wd=new U,ba=new U;class xe extends tn{constructor(t=new _n,e=new We){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Ta.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(Sc.fromBufferAttribute(f,t),o?Ta.addScaledVector(Sc,c):Ta.addScaledVector(Sc.sub(e),c))}e.add(Ta)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ya.copy(i.boundingSphere),ya.applyMatrix4(s),Lr.copy(t.ray).recast(t.near),!(ya.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(ya,Ad)===null||Lr.origin.distanceToSquared(Ad)>(t.far-t.near)**2))&&(bd.copy(s).invert(),Lr.copy(t.ray).applyMatrix4(bd),!(i.boundingBox!==null&&Lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Lr)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,g=h.length;m<g;m++){const _=h[m],p=o[_.materialIndex],M=Math.max(_.start,d.start),x=Math.min(a.count,Math.min(_.start+_.count,d.start+d.count));for(let v=M,b=x;v<b;v+=3){const w=a.getX(v),R=a.getX(v+1),P=a.getX(v+2);r=Aa(this,p,t,i,u,c,f,w,R,P),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=_.materialIndex,e.push(r))}}else{const m=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let _=m,p=g;_<p;_+=3){const M=a.getX(_),x=a.getX(_+1),v=a.getX(_+2);r=Aa(this,o,t,i,u,c,f,M,x,v),r&&(r.faceIndex=Math.floor(_/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,g=h.length;m<g;m++){const _=h[m],p=o[_.materialIndex],M=Math.max(_.start,d.start),x=Math.min(l.count,Math.min(_.start+_.count,d.start+d.count));for(let v=M,b=x;v<b;v+=3){const w=v,R=v+1,P=v+2;r=Aa(this,p,t,i,u,c,f,w,R,P),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=_.materialIndex,e.push(r))}}else{const m=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let _=m,p=g;_<p;_+=3){const M=_,x=_+1,v=_+2;r=Aa(this,o,t,i,u,c,f,M,x,v),r&&(r.faceIndex=Math.floor(_/3),e.push(r))}}}}function TM(n,t,e,i,r,s,o,a){let l;if(t.side===Qe?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===qi,a),l===null)return null;ba.copy(a),ba.applyMatrix4(n.matrixWorld);const u=e.ray.origin.distanceTo(ba);return u<e.near||u>e.far?null:{distance:u,point:ba.clone(),object:n}}function Aa(n,t,e,i,r,s,o,a,l,u){n.getVertexPosition(a,Ma),n.getVertexPosition(l,Sa),n.getVertexPosition(u,Ea);const c=TM(n,t,e,i,Ma,Sa,Ea,wd);if(c){const f=new U;ii.getBarycoord(wd,Ma,Sa,Ea,f),r&&(c.uv=ii.getInterpolatedAttribute(r,a,l,u,f,new Ft)),s&&(c.uv1=ii.getInterpolatedAttribute(s,a,l,u,f,new Ft)),o&&(c.normal=ii.getInterpolatedAttribute(o,a,l,u,f,new U),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new U,materialIndex:0};ii.getNormal(Ma,Sa,Ea,h.normal),c.face=h,c.barycoord=f}return c}class ia extends _n{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,d=0;m("z","y","x",-1,-1,i,e,t,o,s,0),m("z","y","x",1,-1,i,e,-t,o,s,1),m("x","z","y",1,1,t,i,e,r,o,2),m("x","z","y",1,-1,t,i,-e,r,o,3),m("x","y","z",1,-1,t,e,i,r,s,4),m("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Oe(u,3)),this.setAttribute("normal",new Oe(c,3)),this.setAttribute("uv",new Oe(f,2));function m(g,_,p,M,x,v,b,w,R,P,y){const S=v/R,L=b/P,I=v/2,F=b/2,X=w/2,Y=R+1,W=P+1;let K=0,V=0;const vt=new U;for(let gt=0;gt<W;gt++){const St=gt*L-F;for(let Lt=0;Lt<Y;Lt++){const Qt=Lt*S-I;vt[g]=Qt*M,vt[_]=St*x,vt[p]=X,u.push(vt.x,vt.y,vt.z),vt[g]=0,vt[_]=0,vt[p]=w>0?1:-1,c.push(vt.x,vt.y,vt.z),f.push(Lt/R),f.push(1-gt/P),K+=1}}for(let gt=0;gt<P;gt++)for(let St=0;St<R;St++){const Lt=h+St+Y*gt,Qt=h+St+Y*(gt+1),rt=h+(St+1)+Y*(gt+1),_t=h+(St+1)+Y*gt;l.push(Lt,Qt,_t),l.push(Qt,rt,_t),V+=6}a.addGroup(d,V,y),d+=V,h+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ia(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Js(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function un(n){const t={};for(let e=0;e<n.length;e++){const i=Js(n[e]);for(const r in i)t[r]=i[r]}return t}function bM(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function K_(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fe.workingColorSpace}const AM={clone:Js,merge:un};var wM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,CM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yr extends to{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wM,this.fragmentShader=CM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Js(t.uniforms),this.uniformsGroups=bM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class j_ extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=zi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const nr=new U,Cd=new Ft,Rd=new Ft;class Sn extends j_{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=$u*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(nc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $u*2*Math.atan(Math.tan(nc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(nr.x,nr.y).multiplyScalar(-t/nr.z),nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(nr.x,nr.y).multiplyScalar(-t/nr.z)}getViewSize(t,e){return this.getViewBounds(t,Cd,Rd),e.subVectors(Rd,Cd)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(nc*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ys=-90,Ms=1;class RM extends tn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Sn(ys,Ms,t,e);r.layers=this.layers,this.add(r);const s=new Sn(ys,Ms,t,e);s.layers=this.layers,this.add(s);const o=new Sn(ys,Ms,t,e);o.layers=this.layers,this.add(o);const a=new Sn(ys,Ms,t,e);a.layers=this.layers,this.add(a);const l=new Sn(ys,Ms,t,e);l.layers=this.layers,this.add(l);const u=new Sn(ys,Ms,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,l]=e;for(const u of e)this.remove(u);if(t===zi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===hl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,u),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,r),t.render(e,c),t.setRenderTarget(f,h,d),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Z_ extends mn{constructor(t,e,i,r,s,o,a,l,u,c){t=t!==void 0?t:[],e=e!==void 0?e:Ys,super(t,e,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class PM extends is{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Z_(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:xi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ia(5,5,5),s=new yr({name:"CubemapFromEquirect",uniforms:Js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qe,blending:dr});s.uniforms.tEquirect.value=e;const o=new xe(r,s),a=e.minFilter;return e.minFilter===Yr&&(e.minFilter=xi),new RM(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}class Xf{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Zt(t),this.density=e}clone(){return new Xf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class J_ extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Ec=new U,DM=new U,LM=new te;class zr{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Ec.subVectors(i,e).cross(DM.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ec),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||LM.getNormalMatrix(t),r=this.coplanarPoint(Ec).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ir=new Pl,wa=new U;class qf{constructor(t=new zr,e=new zr,i=new zr,r=new zr,s=new zr,o=new zr){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=zi){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],d=r[8],m=r[9],g=r[10],_=r[11],p=r[12],M=r[13],x=r[14],v=r[15];if(i[0].setComponents(l-s,h-u,_-d,v-p).normalize(),i[1].setComponents(l+s,h+u,_+d,v+p).normalize(),i[2].setComponents(l+o,h+c,_+m,v+M).normalize(),i[3].setComponents(l-o,h-c,_-m,v-M).normalize(),i[4].setComponents(l-a,h-f,_-g,v-x).normalize(),e===zi)i[5].setComponents(l+a,h+f,_+g,v+x).normalize();else if(e===hl)i[5].setComponents(a,f,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ir.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ir.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(t){return Ir.center.set(0,0,0),Ir.radius=.7071067811865476,Ir.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(wa.x=r.normal.x>0?t.max.x:t.min.x,wa.y=r.normal.y>0?t.max.y:t.min.y,wa.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(wa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ku extends to{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Pd=new we,ju=new Gf,Ca=new Pl,Ra=new U;class Tc extends tn{constructor(t=new _n,e=new Ku){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ca.copy(i.boundingSphere),Ca.applyMatrix4(r),Ca.radius+=s,t.ray.intersectsSphere(Ca)===!1)return;Pd.copy(r).invert(),ju.copy(t.ray).applyMatrix4(Pd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=h,g=d;m<g;m++){const _=u.getX(m);Ra.fromBufferAttribute(f,_),Dd(Ra,_,l,r,t,e,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let m=h,g=d;m<g;m++)Ra.fromBufferAttribute(f,m),Dd(Ra,m,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Dd(n,t,e,i,r,s,o){const a=ju.distanceSqToPoint(n);if(a<e){const l=new U;ju.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class $r extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Ld extends mn{constructor(t,e,i,r,s,o,a,l,u){super(t,e,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Q_ extends mn{constructor(t,e,i,r,s,o,a,l,u,c=Fs){if(c!==Fs&&c!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Fs&&(i=ns),i===void 0&&c===js&&(i=Ks),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:oi,this.minFilter=l!==void 0?l:oi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Ki{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),s+=i.distanceTo(r),e.push(s),r=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let r=0;const s=i.length;let o;e?o=e:o=t*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const c=i[r],h=i[r+1]-c,d=(o-c)/h;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new Ft:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new U,r=[],s=[],o=[],a=new U,l=new we;for(let d=0;d<=t;d++){const m=d/t;r[d]=this.getTangentAt(m,new U)}s[0]=new U,o[0]=new U;let u=Number.MAX_VALUE;const c=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),f<=u&&(u=f,i.set(0,1,0)),h<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(re(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos(re(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let m=1;m<=t;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],d*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class tg extends Ki{constructor(t=0,e=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Ft){const i=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=u-this.aY;l=h*c-d*f+this.aX,u=h*f+d*c+this.aY}return i.set(l,u)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class IM extends tg{constructor(t,e,i,r,s,o){super(t,e,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Yf(){let n=0,t=0,e=0,i=0;function r(s,o,a,l){n=s,t=a,e=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,c,f){let h=(o-s)/u-(a-s)/(u+c)+(a-o)/c,d=(a-o)/c-(l-o)/(c+f)+(l-a)/f;h*=c,d*=c,r(o,a,h,d)},calc:function(s){const o=s*s,a=o*s;return n+t*s+e*o+i*a}}}const Pa=new U,bc=new Yf,Ac=new Yf,wc=new Yf;class eg extends Ki{constructor(t=[],e=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=r}getPoint(t,e=new U){const i=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,c;this.closed||a>0?u=r[(a-1)%s]:(Pa.subVectors(r[0],r[1]).add(r[0]),u=Pa);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?c=r[(a+2)%s]:(Pa.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=Pa),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(c),d);g<1e-4&&(g=1),m<1e-4&&(m=g),_<1e-4&&(_=g),bc.initNonuniformCatmullRom(u.x,f.x,h.x,c.x,m,g,_),Ac.initNonuniformCatmullRom(u.y,f.y,h.y,c.y,m,g,_),wc.initNonuniformCatmullRom(u.z,f.z,h.z,c.z,m,g,_)}else this.curveType==="catmullrom"&&(bc.initCatmullRom(u.x,f.x,h.x,c.x,this.tension),Ac.initCatmullRom(u.y,f.y,h.y,c.y,this.tension),wc.initCatmullRom(u.z,f.z,h.z,c.z,this.tension));return i.set(bc.calc(l),Ac.calc(l),wc.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new U().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Id(n,t,e,i,r){const s=(i-t)*.5,o=(r-e)*.5,a=n*n,l=n*a;return(2*e-2*i+s+o)*l+(-3*e+3*i-2*s-o)*a+s*n+e}function UM(n,t){const e=1-n;return e*e*t}function NM(n,t){return 2*(1-n)*n*t}function OM(n,t){return n*n*t}function Po(n,t,e,i){return UM(n,t)+NM(n,e)+OM(n,i)}function FM(n,t){const e=1-n;return e*e*e*t}function BM(n,t){const e=1-n;return 3*e*e*n*t}function zM(n,t){return 3*(1-n)*n*n*t}function kM(n,t){return n*n*n*t}function Do(n,t,e,i,r){return FM(n,t)+BM(n,e)+zM(n,i)+kM(n,r)}class VM extends Ki{constructor(t=new Ft,e=new Ft,i=new Ft,r=new Ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new Ft){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Do(t,r.x,s.x,o.x,a.x),Do(t,r.y,s.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class HM extends Ki{constructor(t=new U,e=new U,i=new U,r=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new U){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Do(t,r.x,s.x,o.x,a.x),Do(t,r.y,s.y,o.y,a.y),Do(t,r.z,s.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class GM extends Ki{constructor(t=new Ft,e=new Ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ft){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class WM extends Ki{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class XM extends Ki{constructor(t=new Ft,e=new Ft,i=new Ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Ft){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(Po(t,r.x,s.x,o.x),Po(t,r.y,s.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ng extends Ki{constructor(t=new U,e=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new U){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(Po(t,r.x,s.x,o.x),Po(t,r.y,s.y,o.y),Po(t,r.z,s.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class qM extends Ki{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ft){const i=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],c=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(Id(a,l.x,u.x,c.x,f.x),Id(a,l.y,u.y,c.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new Ft().fromArray(r))}return this}}var YM=Object.freeze({__proto__:null,ArcCurve:IM,CatmullRomCurve3:eg,CubicBezierCurve:VM,CubicBezierCurve3:HM,EllipseCurve:tg,LineCurve:GM,LineCurve3:WM,QuadraticBezierCurve:XM,QuadraticBezierCurve3:ng,SplineCurve:qM});class $f extends _n{constructor(t=1,e=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const c=[],f=[],h=[],d=[];let m=0;const g=[],_=i/2;let p=0;M(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(c),this.setAttribute("position",new Oe(f,3)),this.setAttribute("normal",new Oe(h,3)),this.setAttribute("uv",new Oe(d,2));function M(){const v=new U,b=new U;let w=0;const R=(e-t)/i;for(let P=0;P<=s;P++){const y=[],S=P/s,L=S*(e-t)+t;for(let I=0;I<=r;I++){const F=I/r,X=F*l+a,Y=Math.sin(X),W=Math.cos(X);b.x=L*Y,b.y=-S*i+_,b.z=L*W,f.push(b.x,b.y,b.z),v.set(Y,R,W).normalize(),h.push(v.x,v.y,v.z),d.push(F,1-S),y.push(m++)}g.push(y)}for(let P=0;P<r;P++)for(let y=0;y<s;y++){const S=g[y][P],L=g[y+1][P],I=g[y+1][P+1],F=g[y][P+1];(t>0||y!==0)&&(c.push(S,L,F),w+=3),(e>0||y!==s-1)&&(c.push(L,I,F),w+=3)}u.addGroup(p,w,0),p+=w}function x(v){const b=m,w=new Ft,R=new U;let P=0;const y=v===!0?t:e,S=v===!0?1:-1;for(let I=1;I<=r;I++)f.push(0,_*S,0),h.push(0,S,0),d.push(.5,.5),m++;const L=m;for(let I=0;I<=r;I++){const X=I/r*l+a,Y=Math.cos(X),W=Math.sin(X);R.x=y*W,R.y=_*S,R.z=y*Y,f.push(R.x,R.y,R.z),h.push(0,S,0),w.x=Y*.5+.5,w.y=W*.5*S+.5,d.push(w.x,w.y),m++}for(let I=0;I<r;I++){const F=b+I,X=L+I;v===!0?c.push(X,X+1,F):c.push(X+1,X,F),P+=3}u.addGroup(p,P,v===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $f(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Kf extends _n{constructor(t=[],e=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:r};const s=[],o=[];a(r),u(i),c(),this.setAttribute("position",new Oe(s,3)),this.setAttribute("normal",new Oe(s.slice(),3)),this.setAttribute("uv",new Oe(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const x=new U,v=new U,b=new U;for(let w=0;w<e.length;w+=3)d(e[w+0],x),d(e[w+1],v),d(e[w+2],b),l(x,v,b,M)}function l(M,x,v,b){const w=b+1,R=[];for(let P=0;P<=w;P++){R[P]=[];const y=M.clone().lerp(v,P/w),S=x.clone().lerp(v,P/w),L=w-P;for(let I=0;I<=L;I++)I===0&&P===w?R[P][I]=y:R[P][I]=y.clone().lerp(S,I/L)}for(let P=0;P<w;P++)for(let y=0;y<2*(w-P)-1;y++){const S=Math.floor(y/2);y%2===0?(h(R[P][S+1]),h(R[P+1][S]),h(R[P][S])):(h(R[P][S+1]),h(R[P+1][S+1]),h(R[P+1][S]))}}function u(M){const x=new U;for(let v=0;v<s.length;v+=3)x.x=s[v+0],x.y=s[v+1],x.z=s[v+2],x.normalize().multiplyScalar(M),s[v+0]=x.x,s[v+1]=x.y,s[v+2]=x.z}function c(){const M=new U;for(let x=0;x<s.length;x+=3){M.x=s[x+0],M.y=s[x+1],M.z=s[x+2];const v=_(M)/2/Math.PI+.5,b=p(M)/Math.PI+.5;o.push(v,1-b)}m(),f()}function f(){for(let M=0;M<o.length;M+=6){const x=o[M+0],v=o[M+2],b=o[M+4],w=Math.max(x,v,b),R=Math.min(x,v,b);w>.9&&R<.1&&(x<.2&&(o[M+0]+=1),v<.2&&(o[M+2]+=1),b<.2&&(o[M+4]+=1))}}function h(M){s.push(M.x,M.y,M.z)}function d(M,x){const v=M*3;x.x=t[v+0],x.y=t[v+1],x.z=t[v+2]}function m(){const M=new U,x=new U,v=new U,b=new U,w=new Ft,R=new Ft,P=new Ft;for(let y=0,S=0;y<s.length;y+=9,S+=6){M.set(s[y+0],s[y+1],s[y+2]),x.set(s[y+3],s[y+4],s[y+5]),v.set(s[y+6],s[y+7],s[y+8]),w.set(o[S+0],o[S+1]),R.set(o[S+2],o[S+3]),P.set(o[S+4],o[S+5]),b.copy(M).add(x).add(v).divideScalar(3);const L=_(b);g(w,S+0,M,L),g(R,S+2,x,L),g(P,S+4,v,L)}}function g(M,x,v,b){b<0&&M.x===1&&(o[x]=M.x-1),v.x===0&&v.z===0&&(o[x]=b/2/Math.PI+.5)}function _(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kf(t.vertices,t.indices,t.radius,t.details)}}class jf extends Kf{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new jf(t.radius,t.detail)}}class ni extends _n{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=t/a,h=e/l,d=[],m=[],g=[],_=[];for(let p=0;p<c;p++){const M=p*h-o;for(let x=0;x<u;x++){const v=x*f-s;m.push(v,-M,0),g.push(0,0,1),_.push(x/a),_.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const x=M+u*p,v=M+u*(p+1),b=M+1+u*(p+1),w=M+1+u*p;d.push(x,v,w),d.push(v,b,w)}this.setIndex(d),this.setAttribute("position",new Oe(m,3)),this.setAttribute("normal",new Oe(g,3)),this.setAttribute("uv",new Oe(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ni(t.width,t.height,t.widthSegments,t.heightSegments)}}class Gr extends _n{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],f=new U,h=new U,d=[],m=[],g=[],_=[];for(let p=0;p<=i;p++){const M=[],x=p/i;let v=0;p===0&&o===0?v=.5/e:p===i&&l===Math.PI&&(v=-.5/e);for(let b=0;b<=e;b++){const w=b/e;f.x=-t*Math.cos(r+w*s)*Math.sin(o+x*a),f.y=t*Math.cos(o+x*a),f.z=t*Math.sin(r+w*s)*Math.sin(o+x*a),m.push(f.x,f.y,f.z),h.copy(f).normalize(),g.push(h.x,h.y,h.z),_.push(w+v,1-x),M.push(u++)}c.push(M)}for(let p=0;p<i;p++)for(let M=0;M<e;M++){const x=c[p][M+1],v=c[p][M],b=c[p+1][M],w=c[p+1][M+1];(p!==0||o>0)&&d.push(x,v,w),(p!==i-1||l<Math.PI)&&d.push(v,b,w)}this.setIndex(d),this.setAttribute("position",new Oe(m,3)),this.setAttribute("normal",new Oe(g,3)),this.setAttribute("uv",new Oe(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class pl extends _n{constructor(t=1,e=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],u=[],c=new U,f=new U,h=new U;for(let d=0;d<=i;d++)for(let m=0;m<=r;m++){const g=m/r*s,_=d/i*Math.PI*2;f.x=(t+e*Math.cos(_))*Math.cos(g),f.y=(t+e*Math.cos(_))*Math.sin(g),f.z=e*Math.sin(_),a.push(f.x,f.y,f.z),c.x=t*Math.cos(g),c.y=t*Math.sin(g),h.subVectors(f,c).normalize(),l.push(h.x,h.y,h.z),u.push(m/r),u.push(d/i)}for(let d=1;d<=i;d++)for(let m=1;m<=r;m++){const g=(r+1)*d+m-1,_=(r+1)*(d-1)+m-1,p=(r+1)*(d-1)+m,M=(r+1)*d+m;o.push(g,_,M),o.push(_,p,M)}this.setIndex(o),this.setAttribute("position",new Oe(a,3)),this.setAttribute("normal",new Oe(l,3)),this.setAttribute("uv",new Oe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pl(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Zf extends _n{constructor(t=new ng(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),e=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:r,closed:s};const o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new U,l=new U,u=new Ft;let c=new U;const f=[],h=[],d=[],m=[];g(),this.setIndex(m),this.setAttribute("position",new Oe(f,3)),this.setAttribute("normal",new Oe(h,3)),this.setAttribute("uv",new Oe(d,2));function g(){for(let x=0;x<e;x++)_(x);_(s===!1?e:0),M(),p()}function _(x){c=t.getPointAt(x/e,c);const v=o.normals[x],b=o.binormals[x];for(let w=0;w<=r;w++){const R=w/r*Math.PI*2,P=Math.sin(R),y=-Math.cos(R);l.x=y*v.x+P*b.x,l.y=y*v.y+P*b.y,l.z=y*v.z+P*b.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=c.x+i*l.x,a.y=c.y+i*l.y,a.z=c.z+i*l.z,f.push(a.x,a.y,a.z)}}function p(){for(let x=1;x<=e;x++)for(let v=1;v<=r;v++){const b=(r+1)*(x-1)+(v-1),w=(r+1)*x+(v-1),R=(r+1)*x+v,P=(r+1)*(x-1)+v;m.push(b,w,P),m.push(w,R,P)}}function M(){for(let x=0;x<=e;x++)for(let v=0;v<=r;v++)u.x=x/e,u.y=v/r,d.push(u.x,u.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Zf(new YM[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Ud extends to{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=V_,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $M extends to{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$y,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class KM extends to{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Jf extends tn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Cc=new we,Nd=new U,Od=new U;class ig{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qf,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Nd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Nd),Od.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Od),e.updateMatrixWorld(),Cc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Cc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Fd=new we,po=new U,Rc=new U;class jM extends ig{constructor(){super(new Sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ft(4,2),this._viewportCount=6,this._viewports=[new Se(2,1,1,1),new Se(0,1,1,1),new Se(3,1,1,1),new Se(1,1,1,1),new Se(3,0,1,1),new Se(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,r=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),po.setFromMatrixPosition(t.matrixWorld),i.position.copy(po),Rc.copy(i.position),Rc.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Rc),i.updateMatrixWorld(),r.makeTranslation(-po.x,-po.y,-po.z),Fd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fd)}}class Bd extends Jf{constructor(t,e,i=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new jM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class rg extends j_{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class ZM extends ig{constructor(){super(new rg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zd extends Jf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new ZM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class JM extends Jf{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class QM extends Sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class tS{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=kd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=kd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function kd(){return performance.now()}const Vd=new we;class sg{constructor(t,e,i=0,r=1/0){this.ray=new Gf(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new Wf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Vd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vd),this}intersectObject(t,e=!0,i=[]){return Zu(t,this,i,e),i.sort(Hd),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)Zu(t[r],this,i,e);return i.sort(Hd),i}}function Hd(n,t){return n.distance-t.distance}function Zu(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)Zu(s[o],t,e,!0)}}function Gd(n,t,e,i){const r=eS(i);switch(e){case U_:return n*t;case O_:return n*t;case F_:return n*t*2;case B_:return n*t/r.components*r.byteLength;case kf:return n*t/r.components*r.byteLength;case z_:return n*t*2/r.components*r.byteLength;case Vf:return n*t*2/r.components*r.byteLength;case N_:return n*t*3/r.components*r.byteLength;case ri:return n*t*4/r.components*r.byteLength;case Hf:return n*t*4/r.components*r.byteLength;case Ga:case Wa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Xa:case qa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Eu:case bu:return Math.max(n,16)*Math.max(t,8)/4;case Su:case Tu:return Math.max(n,8)*Math.max(t,8)/2;case Au:case wu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Cu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ru:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Pu:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Du:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Lu:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Iu:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Uu:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Nu:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ou:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Fu:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Bu:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case zu:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ku:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Vu:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Hu:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ya:case Gu:case Wu:return Math.ceil(n/4)*Math.ceil(t/4)*16;case k_:case Xu:return Math.ceil(n/4)*Math.ceil(t/4)*8;case qu:case Yu:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function eS(n){switch(n){case Yi:case D_:return{byteLength:1,components:1};case Yo:case L_:case Qo:return{byteLength:2,components:1};case Bf:case zf:return{byteLength:2,components:4};case ns:case Ff:case Bi:return{byteLength:4,components:1};case I_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Of}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Of);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function og(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function nS(n){const t=new WeakMap;function e(a,l){const u=a.array,c=a.usage,f=u.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,u,c),a.onUploadCallback();let d;if(u instanceof Float32Array)d=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)d=n.SHORT;else if(u instanceof Uint32Array)d=n.UNSIGNED_INT;else if(u instanceof Int32Array)d=n.INT;else if(u instanceof Int8Array)d=n.BYTE;else if(u instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:d,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l.updateRanges;if(n.bindBuffer(u,a),f.length===0)n.bufferSubData(u,0,c);else{f.sort((d,m)=>d.start-m.start);let h=0;for(let d=1;d<f.length;d++){const m=f[h],g=f[d];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++h,f[h]=g)}f.length=h+1;for(let d=0,m=f.length;d<m;d++){const g=f[d];n.bufferSubData(u,g.start*c.BYTES_PER_ELEMENT,c,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=t.get(a);if(u===void 0)t.set(a,e(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var iS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rS=`#ifdef USE_ALPHAHASH
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
#endif`,sS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cS=`#ifdef USE_AOMAP
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
#endif`,uS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fS=`#ifdef USE_BATCHING
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
#endif`,hS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_S=`#ifdef USE_IRIDESCENCE
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
#endif`,gS=`#ifdef USE_BUMPMAP
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
#endif`,vS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,MS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,SS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ES=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,TS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,AS=`#define PI 3.141592653589793
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
} // validated`,wS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,CS=`vec3 transformedNormal = objectNormal;
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
#endif`,RS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,PS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,DS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,LS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,IS="gl_FragColor = linearToOutputTexel( gl_FragColor );",US=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,NS=`#ifdef USE_ENVMAP
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
#endif`,OS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,FS=`#ifdef USE_ENVMAP
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
#endif`,BS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zS=`#ifdef USE_ENVMAP
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
#endif`,kS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,VS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,HS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,WS=`#ifdef USE_GRADIENTMAP
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
}`,XS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,YS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$S=`uniform bool receiveShadow;
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
#endif`,KS=`#ifdef USE_ENVMAP
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
#endif`,jS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ZS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,JS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,QS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tE=`PhysicalMaterial material;
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
#endif`,eE=`struct PhysicalMaterial {
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
}`,nE=`
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
#endif`,iE=`#if defined( RE_IndirectDiffuse )
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
#endif`,rE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hE=`#if defined( USE_POINTS_UV )
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
#endif`,dE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_E=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vE=`#ifdef USE_MORPHTARGETS
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
#endif`,xE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ME=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,SE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bE=`#ifdef USE_NORMALMAP
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
#endif`,AE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,CE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,RE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,PE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,DE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,LE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,IE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,UE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,OE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,FE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,BE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,VE=`float getShadowMask() {
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
}`,HE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GE=`#ifdef USE_SKINNING
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
#endif`,WE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,XE=`#ifdef USE_SKINNING
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
#endif`,qE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,YE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$E=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,KE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jE=`#ifdef USE_TRANSMISSION
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
#endif`,ZE=`#ifdef USE_TRANSMISSION
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
#endif`,JE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iT=`uniform sampler2D t2D;
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
}`,rT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,oT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lT=`#include <common>
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
}`,cT=`#if DEPTH_PACKING == 3200
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
}`,uT=`#define DISTANCE
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
}`,fT=`#define DISTANCE
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
}`,hT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pT=`uniform float scale;
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
}`,mT=`uniform vec3 diffuse;
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
}`,_T=`#include <common>
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
}`,gT=`uniform vec3 diffuse;
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
}`,vT=`#define LAMBERT
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
}`,xT=`#define LAMBERT
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
}`,yT=`#define MATCAP
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
}`,MT=`#define MATCAP
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
}`,ST=`#define NORMAL
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
}`,ET=`#define NORMAL
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
}`,TT=`#define PHONG
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
}`,bT=`#define PHONG
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
}`,AT=`#define STANDARD
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
}`,wT=`#define STANDARD
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
}`,CT=`#define TOON
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
}`,RT=`#define TOON
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
}`,PT=`uniform float size;
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
}`,DT=`uniform vec3 diffuse;
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
}`,LT=`#include <common>
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
}`,IT=`uniform vec3 color;
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
}`,UT=`uniform float rotation;
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
}`,NT=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:iS,alphahash_pars_fragment:rS,alphamap_fragment:sS,alphamap_pars_fragment:oS,alphatest_fragment:aS,alphatest_pars_fragment:lS,aomap_fragment:cS,aomap_pars_fragment:uS,batching_pars_vertex:fS,batching_vertex:hS,begin_vertex:dS,beginnormal_vertex:pS,bsdfs:mS,iridescence_fragment:_S,bumpmap_pars_fragment:gS,clipping_planes_fragment:vS,clipping_planes_pars_fragment:xS,clipping_planes_pars_vertex:yS,clipping_planes_vertex:MS,color_fragment:SS,color_pars_fragment:ES,color_pars_vertex:TS,color_vertex:bS,common:AS,cube_uv_reflection_fragment:wS,defaultnormal_vertex:CS,displacementmap_pars_vertex:RS,displacementmap_vertex:PS,emissivemap_fragment:DS,emissivemap_pars_fragment:LS,colorspace_fragment:IS,colorspace_pars_fragment:US,envmap_fragment:NS,envmap_common_pars_fragment:OS,envmap_pars_fragment:FS,envmap_pars_vertex:BS,envmap_physical_pars_fragment:KS,envmap_vertex:zS,fog_vertex:kS,fog_pars_vertex:VS,fog_fragment:HS,fog_pars_fragment:GS,gradientmap_pars_fragment:WS,lightmap_pars_fragment:XS,lights_lambert_fragment:qS,lights_lambert_pars_fragment:YS,lights_pars_begin:$S,lights_toon_fragment:jS,lights_toon_pars_fragment:ZS,lights_phong_fragment:JS,lights_phong_pars_fragment:QS,lights_physical_fragment:tE,lights_physical_pars_fragment:eE,lights_fragment_begin:nE,lights_fragment_maps:iE,lights_fragment_end:rE,logdepthbuf_fragment:sE,logdepthbuf_pars_fragment:oE,logdepthbuf_pars_vertex:aE,logdepthbuf_vertex:lE,map_fragment:cE,map_pars_fragment:uE,map_particle_fragment:fE,map_particle_pars_fragment:hE,metalnessmap_fragment:dE,metalnessmap_pars_fragment:pE,morphinstance_vertex:mE,morphcolor_vertex:_E,morphnormal_vertex:gE,morphtarget_pars_vertex:vE,morphtarget_vertex:xE,normal_fragment_begin:yE,normal_fragment_maps:ME,normal_pars_fragment:SE,normal_pars_vertex:EE,normal_vertex:TE,normalmap_pars_fragment:bE,clearcoat_normal_fragment_begin:AE,clearcoat_normal_fragment_maps:wE,clearcoat_pars_fragment:CE,iridescence_pars_fragment:RE,opaque_fragment:PE,packing:DE,premultiplied_alpha_fragment:LE,project_vertex:IE,dithering_fragment:UE,dithering_pars_fragment:NE,roughnessmap_fragment:OE,roughnessmap_pars_fragment:FE,shadowmap_pars_fragment:BE,shadowmap_pars_vertex:zE,shadowmap_vertex:kE,shadowmask_pars_fragment:VE,skinbase_vertex:HE,skinning_pars_vertex:GE,skinning_vertex:WE,skinnormal_vertex:XE,specularmap_fragment:qE,specularmap_pars_fragment:YE,tonemapping_fragment:$E,tonemapping_pars_fragment:KE,transmission_fragment:jE,transmission_pars_fragment:ZE,uv_pars_fragment:JE,uv_pars_vertex:QE,uv_vertex:tT,worldpos_vertex:eT,background_vert:nT,background_frag:iT,backgroundCube_vert:rT,backgroundCube_frag:sT,cube_vert:oT,cube_frag:aT,depth_vert:lT,depth_frag:cT,distanceRGBA_vert:uT,distanceRGBA_frag:fT,equirect_vert:hT,equirect_frag:dT,linedashed_vert:pT,linedashed_frag:mT,meshbasic_vert:_T,meshbasic_frag:gT,meshlambert_vert:vT,meshlambert_frag:xT,meshmatcap_vert:yT,meshmatcap_frag:MT,meshnormal_vert:ST,meshnormal_frag:ET,meshphong_vert:TT,meshphong_frag:bT,meshphysical_vert:AT,meshphysical_frag:wT,meshtoon_vert:CT,meshtoon_frag:RT,points_vert:PT,points_frag:DT,shadow_vert:LT,shadow_frag:IT,sprite_vert:UT,sprite_frag:NT},bt={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},_i={basic:{uniforms:un([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:un([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:un([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:un([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:un([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:un([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:un([bt.points,bt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:un([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:un([bt.common,bt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:un([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:un([bt.sprite,bt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:un([bt.common,bt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:un([bt.lights,bt.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};_i.physical={uniforms:un([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};const Da={r:0,b:0,g:0},Ur=new Ei,OT=new we;function FT(n,t,e,i,r,s,o){const a=new Zt(0);let l=s===!0?0:1,u,c,f=null,h=0,d=null;function m(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?e:t).get(v)),v}function g(x){let v=!1;const b=m(x);b===null?p(a,l):b&&b.isColor&&(p(b,1),v=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(x,v){const b=m(v);b&&(b.isCubeTexture||b.mapping===Rl)?(c===void 0&&(c=new xe(new ia(1,1,1),new yr({name:"BackgroundCubeMaterial",uniforms:Js(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Ur.copy(v.backgroundRotation),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),c.material.uniforms.envMap.value=b,c.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(OT.makeRotationFromEuler(Ur)),c.material.toneMapped=fe.getTransfer(b.colorSpace)!==ye,(f!==b||h!==b.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=b,h=b.version,d=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(u===void 0&&(u=new xe(new ni(2,2),new yr({name:"BackgroundMaterial",uniforms:Js(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=b,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=fe.getTransfer(b.colorSpace)!==ye,b.matrixAutoUpdate===!0&&b.updateMatrix(),u.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||h!==b.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=b,h=b.version,d=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null))}function p(x,v){x.getRGB(Da,K_(n)),i.buffers.color.setClear(Da.r,Da.g,Da.b,v,o)}function M(){c!==void 0&&(c.geometry.dispose(),c.material.dispose()),u!==void 0&&(u.geometry.dispose(),u.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:g,addToRenderList:_,dispose:M}}function BT(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,L,I,F,X){let Y=!1;const W=f(F,I,L);s!==W&&(s=W,u(s.object)),Y=d(S,F,I,X),Y&&m(S,F,I,X),X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,v(S,L,I,F),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return n.createVertexArray()}function u(S){return n.bindVertexArray(S)}function c(S){return n.deleteVertexArray(S)}function f(S,L,I){const F=I.wireframe===!0;let X=i[S.id];X===void 0&&(X={},i[S.id]=X);let Y=X[L.id];Y===void 0&&(Y={},X[L.id]=Y);let W=Y[F];return W===void 0&&(W=h(l()),Y[F]=W),W}function h(S){const L=[],I=[],F=[];for(let X=0;X<e;X++)L[X]=0,I[X]=0,F[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:I,attributeDivisors:F,object:S,attributes:{},index:null}}function d(S,L,I,F){const X=s.attributes,Y=L.attributes;let W=0;const K=I.getAttributes();for(const V in K)if(K[V].location>=0){const gt=X[V];let St=Y[V];if(St===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(St=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(St=S.instanceColor)),gt===void 0||gt.attribute!==St||St&&gt.data!==St.data)return!0;W++}return s.attributesNum!==W||s.index!==F}function m(S,L,I,F){const X={},Y=L.attributes;let W=0;const K=I.getAttributes();for(const V in K)if(K[V].location>=0){let gt=Y[V];gt===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(gt=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(gt=S.instanceColor));const St={};St.attribute=gt,gt&&gt.data&&(St.data=gt.data),X[V]=St,W++}s.attributes=X,s.attributesNum=W,s.index=F}function g(){const S=s.newAttributes;for(let L=0,I=S.length;L<I;L++)S[L]=0}function _(S){p(S,0)}function p(S,L){const I=s.newAttributes,F=s.enabledAttributes,X=s.attributeDivisors;I[S]=1,F[S]===0&&(n.enableVertexAttribArray(S),F[S]=1),X[S]!==L&&(n.vertexAttribDivisor(S,L),X[S]=L)}function M(){const S=s.newAttributes,L=s.enabledAttributes;for(let I=0,F=L.length;I<F;I++)L[I]!==S[I]&&(n.disableVertexAttribArray(I),L[I]=0)}function x(S,L,I,F,X,Y,W){W===!0?n.vertexAttribIPointer(S,L,I,X,Y):n.vertexAttribPointer(S,L,I,F,X,Y)}function v(S,L,I,F){g();const X=F.attributes,Y=I.getAttributes(),W=L.defaultAttributeValues;for(const K in Y){const V=Y[K];if(V.location>=0){let vt=X[K];if(vt===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(vt=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(vt=S.instanceColor)),vt!==void 0){const gt=vt.normalized,St=vt.itemSize,Lt=t.get(vt);if(Lt===void 0)continue;const Qt=Lt.buffer,rt=Lt.type,_t=Lt.bytesPerElement,at=rt===n.INT||rt===n.UNSIGNED_INT||vt.gpuType===Ff;if(vt.isInterleavedBufferAttribute){const pt=vt.data,wt=pt.stride,Dt=vt.offset;if(pt.isInstancedInterleavedBuffer){for(let zt=0;zt<V.locationSize;zt++)p(V.location+zt,pt.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let zt=0;zt<V.locationSize;zt++)_(V.location+zt);n.bindBuffer(n.ARRAY_BUFFER,Qt);for(let zt=0;zt<V.locationSize;zt++)x(V.location+zt,St/V.locationSize,rt,gt,wt*_t,(Dt+St/V.locationSize*zt)*_t,at)}else{if(vt.isInstancedBufferAttribute){for(let pt=0;pt<V.locationSize;pt++)p(V.location+pt,vt.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let pt=0;pt<V.locationSize;pt++)_(V.location+pt);n.bindBuffer(n.ARRAY_BUFFER,Qt);for(let pt=0;pt<V.locationSize;pt++)x(V.location+pt,St/V.locationSize,rt,gt,St*_t,St/V.locationSize*pt*_t,at)}}else if(W!==void 0){const gt=W[K];if(gt!==void 0)switch(gt.length){case 2:n.vertexAttrib2fv(V.location,gt);break;case 3:n.vertexAttrib3fv(V.location,gt);break;case 4:n.vertexAttrib4fv(V.location,gt);break;default:n.vertexAttrib1fv(V.location,gt)}}}}M()}function b(){P();for(const S in i){const L=i[S];for(const I in L){const F=L[I];for(const X in F)c(F[X].object),delete F[X];delete L[I]}delete i[S]}}function w(S){if(i[S.id]===void 0)return;const L=i[S.id];for(const I in L){const F=L[I];for(const X in F)c(F[X].object),delete F[X];delete L[I]}delete i[S.id]}function R(S){for(const L in i){const I=i[L];if(I[S.id]===void 0)continue;const F=I[S.id];for(const X in F)c(F[X].object),delete F[X];delete I[S.id]}}function P(){y(),o=!0,s!==r&&(s=r,u(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:y,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:_,disableUnusedAttributes:M}}function zT(n,t,e){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),e.update(c,i,1)}function o(u,c,f){f!==0&&(n.drawArraysInstanced(i,u,c,f),e.update(c,i,f))}function a(u,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let d=0;for(let m=0;m<f;m++)d+=c[m];e.update(d,i,1)}function l(u,c,f,h){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<u.length;m++)o(u[m],c[m],h[m]);else{d.multiDrawArraysInstancedWEBGL(i,u,0,c,0,h,0,f);let m=0;for(let g=0;g<f;g++)m+=c[g]*h[g];e.update(m,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function kT(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==ri&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const P=R===Qo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Yi&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Bi&&!P)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=m>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:b,maxSamples:w}}function VT(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new zr,a=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=c(f,h,0)},this.setState=function(f,h,d){const m=f.clippingPlanes,g=f.clipIntersection,_=f.clipShadows,p=n.get(f);if(!r||m===null||m.length===0||s&&!_)s?c(null):u();else{const M=s?0:i,x=M*4;let v=p.clippingState||null;l.value=v,v=c(m,h,x,d);for(let b=0;b!==x;++b)v[b]=e[b];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(f,h,d,m){const g=f!==null?f.length:0;let _=null;if(g!==0){if(_=l.value,m!==!0||_===null){const p=d+g*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(_===null||_.length<p)&&(_=new Float32Array(p));for(let x=0,v=d;x!==g;++x,v+=4)o.copy(f[x]).applyMatrix4(M,a),o.normal.toArray(_,v),_[v+3]=o.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,_}}function HT(n){let t=new WeakMap;function e(o,a){return a===vu?o.mapping=Ys:a===xu&&(o.mapping=$s),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===vu||a===xu)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new PM(l.height);return u.fromEquirectangularTexture(n,o),t.set(o,u),o.addEventListener("dispose",r),e(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const Cs=4,Wd=[.125,.215,.35,.446,.526,.582],Wr=20,Pc=new rg,Xd=new Zt;let Dc=null,Lc=0,Ic=0,Uc=!1;const kr=(1+Math.sqrt(5))/2,Ss=1/kr,qd=[new U(-kr,Ss,0),new U(kr,Ss,0),new U(-Ss,0,kr),new U(Ss,0,kr),new U(0,kr,-Ss),new U(0,kr,Ss),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Yd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){Dc=this._renderer.getRenderTarget(),Lc=this._renderer.getActiveCubeFace(),Ic=this._renderer.getActiveMipmapLevel(),Uc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Dc,Lc,Ic),this._renderer.xr.enabled=Uc,t.scissorTest=!1,La(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ys||t.mapping===$s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Dc=this._renderer.getRenderTarget(),Lc=this._renderer.getActiveCubeFace(),Ic=this._renderer.getActiveMipmapLevel(),Uc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:Qo,format:ri,colorSpace:Zs,depthBuffer:!1},r=$d(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$d(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=GT(s)),this._blurMaterial=WT(s,t,e)}return r}_compileMaterial(t){const e=new xe(this._lodPlanes[0],t);this._renderer.compile(e,Pc)}_sceneToCubeUV(t,e,i,r){const a=new Sn(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(Xd),c.toneMapping=pr,c.autoClear=!1;const d=new We({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1}),m=new xe(new ia,d);let g=!1;const _=t.background;_?_.isColor&&(d.color.copy(_),t.background=null,g=!0):(d.color.copy(Xd),g=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(u[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,u[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,u[p]));const x=this._cubeSize;La(r,M*x,p>2?x:0,x,x),c.setRenderTarget(r),g&&c.render(m,a),c.render(t,a)}m.geometry.dispose(),m.material.dispose(),c.toneMapping=h,c.autoClear=f,t.background=_}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Ys||t.mapping===$s;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=jd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kd());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new xe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;La(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Pc)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=qd[(r-s-1)%qd.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new xe(this._lodPlanes[r],u),h=u.uniforms,d=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Wr-1),g=s/m,_=isFinite(s)?1+Math.floor(c*g):Wr;_>Wr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Wr}`);const p=[];let M=0;for(let R=0;R<Wr;++R){const P=R/g,y=Math.exp(-P*P/2);p.push(y),R===0?M+=y:R<_&&(M+=2*y)}for(let R=0;R<p.length;R++)p[R]=p[R]/M;h.envMap.value=t.texture,h.samples.value=_,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=m,h.mipInt.value=x-i;const v=this._sizeLods[r],b=3*v*(r>x-Cs?r-x+Cs:0),w=4*(this._cubeSize-v);La(e,b,w,3*v,2*v),l.setRenderTarget(e),l.render(f,Pc)}}function GT(n){const t=[],e=[],i=[];let r=n;const s=n-Cs+1+Wd.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-Cs?l=Wd[o-n+Cs-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],d=6,m=6,g=3,_=2,p=1,M=new Float32Array(g*m*d),x=new Float32Array(_*m*d),v=new Float32Array(p*m*d);for(let w=0;w<d;w++){const R=w%3*2/3-1,P=w>2?0:-1,y=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];M.set(y,g*m*w),x.set(h,_*m*w);const S=[w,w,w,w,w,w];v.set(S,p*m*w)}const b=new _n;b.setAttribute("position",new Kn(M,g)),b.setAttribute("uv",new Kn(x,_)),b.setAttribute("faceIndex",new Kn(v,p)),t.push(b),r>Cs&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function $d(n,t,e){const i=new is(n,t,e);return i.texture.mapping=Rl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function La(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function WT(n,t,e){const i=new Float32Array(Wr),r=new U(0,1,0);return new yr({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Qf(),fragmentShader:`

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
		`,blending:dr,depthTest:!1,depthWrite:!1})}function Kd(){return new yr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qf(),fragmentShader:`

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
		`,blending:dr,depthTest:!1,depthWrite:!1})}function jd(){return new yr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function Qf(){return`

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
	`}function XT(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===vu||l===xu,c=l===Ys||l===$s;if(u||c){let f=t.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new Yd(n)),f=u?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return u&&d&&d.height>0||c&&d&&r(d)?(e===null&&(e=new Yd(n)),f=u?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function qT(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&bs("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function YT(n,t,e,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const m in h.attributes)t.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(t.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)t.update(h[d],n.ARRAY_BUFFER)}function u(f){const h=[],d=f.index,m=f.attributes.position;let g=0;if(d!==null){const M=d.array;g=d.version;for(let x=0,v=M.length;x<v;x+=3){const b=M[x+0],w=M[x+1],R=M[x+2];h.push(b,w,w,R,R,b)}}else if(m!==void 0){const M=m.array;g=m.version;for(let x=0,v=M.length/3-1;x<v;x+=3){const b=x+0,w=x+1,R=x+2;h.push(b,w,w,R,R,b)}}else return;const _=new(G_(h)?$_:Y_)(h,1);_.version=g;const p=s.get(f);p&&t.remove(p),s.set(f,_)}function c(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function $T(n,t,e){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,s,h*o),e.update(d,i,1)}function u(h,d,m){m!==0&&(n.drawElementsInstanced(i,d,s,h*o,m),e.update(d,i,m))}function c(h,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,m);let _=0;for(let p=0;p<m;p++)_+=d[p];e.update(_,i,1)}function f(h,d,m,g){if(m===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<h.length;p++)u(h[p]/o,d[p],g[p]);else{_.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,g,0,m);let p=0;for(let M=0;M<m;M++)p+=d[M]*g[M];e.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function KT(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function jT(n,t,e){const i=new WeakMap,r=new Se;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let S=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var d=S;h!==void 0&&h.texture.dispose();const m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;m===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let b=a.attributes.position.count*v,w=1;b>t.maxTextureSize&&(w=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const R=new Float32Array(b*w*4*f),P=new X_(R,b,w,f);P.type=Bi,P.needsUpdate=!0;const y=v*4;for(let L=0;L<f;L++){const I=p[L],F=M[L],X=x[L],Y=b*w*4*L;for(let W=0;W<I.count;W++){const K=W*y;m===!0&&(r.fromBufferAttribute(I,W),R[Y+K+0]=r.x,R[Y+K+1]=r.y,R[Y+K+2]=r.z,R[Y+K+3]=0),g===!0&&(r.fromBufferAttribute(F,W),R[Y+K+4]=r.x,R[Y+K+5]=r.y,R[Y+K+6]=r.z,R[Y+K+7]=0),_===!0&&(r.fromBufferAttribute(X,W),R[Y+K+8]=r.x,R[Y+K+9]=r.y,R[Y+K+10]=r.z,R[Y+K+11]=X.itemSize===4?r.w:1)}}h={count:f,texture:P,size:new Ft(b,w)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let m=0;for(let _=0;_<u.length;_++)m+=u[_];const g=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function ZT(n,t,e,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=t.get(l,c);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:s,dispose:o}}const ag=new mn,Zd=new Q_(1,1),lg=new X_,cg=new pM,ug=new Z_,Jd=[],Qd=[],tp=new Float32Array(16),ep=new Float32Array(9),np=new Float32Array(4);function eo(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Jd[r];if(s===void 0&&(s=new Float32Array(r),Jd[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function qe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ye(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Dl(n,t){let e=Qd[t];e===void 0&&(e=new Int32Array(t),Qd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function JT(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function QT(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2fv(this.addr,t),Ye(e,t)}}function tb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;n.uniform3fv(this.addr,t),Ye(e,t)}}function eb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4fv(this.addr,t),Ye(e,t)}}function nb(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,i))return;np.set(i),n.uniformMatrix2fv(this.addr,!1,np),Ye(e,i)}}function ib(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,i))return;ep.set(i),n.uniformMatrix3fv(this.addr,!1,ep),Ye(e,i)}}function rb(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,i))return;tp.set(i),n.uniformMatrix4fv(this.addr,!1,tp),Ye(e,i)}}function sb(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function ob(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2iv(this.addr,t),Ye(e,t)}}function ab(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;n.uniform3iv(this.addr,t),Ye(e,t)}}function lb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4iv(this.addr,t),Ye(e,t)}}function cb(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function ub(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2uiv(this.addr,t),Ye(e,t)}}function fb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;n.uniform3uiv(this.addr,t),Ye(e,t)}}function hb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4uiv(this.addr,t),Ye(e,t)}}function db(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Zd.compareFunction=H_,s=Zd):s=ag,e.setTexture2D(t||s,r)}function pb(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||cg,r)}function mb(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||ug,r)}function _b(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||lg,r)}function gb(n){switch(n){case 5126:return JT;case 35664:return QT;case 35665:return tb;case 35666:return eb;case 35674:return nb;case 35675:return ib;case 35676:return rb;case 5124:case 35670:return sb;case 35667:case 35671:return ob;case 35668:case 35672:return ab;case 35669:case 35673:return lb;case 5125:return cb;case 36294:return ub;case 36295:return fb;case 36296:return hb;case 35678:case 36198:case 36298:case 36306:case 35682:return db;case 35679:case 36299:case 36307:return pb;case 35680:case 36300:case 36308:case 36293:return mb;case 36289:case 36303:case 36311:case 36292:return _b}}function vb(n,t){n.uniform1fv(this.addr,t)}function xb(n,t){const e=eo(t,this.size,2);n.uniform2fv(this.addr,e)}function yb(n,t){const e=eo(t,this.size,3);n.uniform3fv(this.addr,e)}function Mb(n,t){const e=eo(t,this.size,4);n.uniform4fv(this.addr,e)}function Sb(n,t){const e=eo(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Eb(n,t){const e=eo(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Tb(n,t){const e=eo(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function bb(n,t){n.uniform1iv(this.addr,t)}function Ab(n,t){n.uniform2iv(this.addr,t)}function wb(n,t){n.uniform3iv(this.addr,t)}function Cb(n,t){n.uniform4iv(this.addr,t)}function Rb(n,t){n.uniform1uiv(this.addr,t)}function Pb(n,t){n.uniform2uiv(this.addr,t)}function Db(n,t){n.uniform3uiv(this.addr,t)}function Lb(n,t){n.uniform4uiv(this.addr,t)}function Ib(n,t,e){const i=this.cache,r=t.length,s=Dl(e,r);qe(i,s)||(n.uniform1iv(this.addr,s),Ye(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||ag,s[o])}function Ub(n,t,e){const i=this.cache,r=t.length,s=Dl(e,r);qe(i,s)||(n.uniform1iv(this.addr,s),Ye(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||cg,s[o])}function Nb(n,t,e){const i=this.cache,r=t.length,s=Dl(e,r);qe(i,s)||(n.uniform1iv(this.addr,s),Ye(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||ug,s[o])}function Ob(n,t,e){const i=this.cache,r=t.length,s=Dl(e,r);qe(i,s)||(n.uniform1iv(this.addr,s),Ye(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||lg,s[o])}function Fb(n){switch(n){case 5126:return vb;case 35664:return xb;case 35665:return yb;case 35666:return Mb;case 35674:return Sb;case 35675:return Eb;case 35676:return Tb;case 5124:case 35670:return bb;case 35667:case 35671:return Ab;case 35668:case 35672:return wb;case 35669:case 35673:return Cb;case 5125:return Rb;case 36294:return Pb;case 36295:return Db;case 36296:return Lb;case 35678:case 36198:case 36298:case 36306:case 35682:return Ib;case 35679:case 36299:case 36307:return Ub;case 35680:case 36300:case 36308:case 36293:return Nb;case 36289:case 36303:case 36311:case 36292:return Ob}}class Bb{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=gb(e.type)}}class zb{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Fb(e.type)}}class kb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const Nc=/(\w+)(\])?(\[|\.)?/g;function ip(n,t){n.seq.push(t),n.map[t.id]=t}function Vb(n,t,e){const i=n.name,r=i.length;for(Nc.lastIndex=0;;){const s=Nc.exec(i),o=Nc.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){ip(e,u===void 0?new Bb(a,n,t):new zb(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new kb(a),ip(e,f)),e=f}}}class $a{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);Vb(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function rp(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Hb=37297;let Gb=0;function Wb(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const sp=new te;function Xb(n){fe._getMatrix(sp,fe.workingColorSpace,n);const t=`mat3( ${sp.elements.map(e=>e.toFixed(4))} )`;switch(fe.getTransfer(n)){case fl:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function op(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Wb(n.getShaderSource(t),o)}else return r}function qb(n,t){const e=Xb(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Yb(n,t){let e;switch(t){case ky:e="Linear";break;case Vy:e="Reinhard";break;case Hy:e="Cineon";break;case Gy:e="ACESFilmic";break;case Xy:e="AgX";break;case qy:e="Neutral";break;case Wy:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ia=new U;function $b(){fe.getLuminanceCoefficients(Ia);const n=Ia.x.toFixed(4),t=Ia.y.toFixed(4),e=Ia.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vo).join(`
`)}function jb(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Zb(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function vo(n){return n!==""}function ap(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lp(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Jb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ju(n){return n.replace(Jb,t1)}const Qb=new Map;function t1(n,t){let e=ee[t];if(e===void 0){const i=Qb.get(t);if(i!==void 0)e=ee[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ju(e)}const e1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cp(n){return n.replace(e1,n1)}function n1(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function up(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function i1(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===C_?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===xy?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Di&&(t="SHADOWMAP_TYPE_VSM"),t}function r1(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ys:case $s:t="ENVMAP_TYPE_CUBE";break;case Rl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function s1(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case $s:t="ENVMAP_MODE_REFRACTION";break}return t}function o1(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case R_:t="ENVMAP_BLENDING_MULTIPLY";break;case By:t="ENVMAP_BLENDING_MIX";break;case zy:t="ENVMAP_BLENDING_ADD";break}return t}function a1(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function l1(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=i1(e),u=r1(e),c=s1(e),f=o1(e),h=a1(e),d=Kb(e),m=jb(s),g=r.createProgram();let _,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(vo).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(vo).join(`
`),p.length>0&&(p+=`
`)):(_=[up(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vo).join(`
`),p=[up(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pr?"#define TONE_MAPPING":"",e.toneMapping!==pr?ee.tonemapping_pars_fragment:"",e.toneMapping!==pr?Yb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,qb("linearToOutputTexel",e.outputColorSpace),$b(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vo).join(`
`)),o=Ju(o),o=ap(o,e),o=lp(o,e),a=Ju(a),a=ap(a,e),a=lp(a,e),o=cp(o),a=cp(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",e.glslVersion===hd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===hd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=M+_+o,v=M+p+a,b=rp(r,r.VERTEX_SHADER,x),w=rp(r,r.FRAGMENT_SHADER,v);r.attachShader(g,b),r.attachShader(g,w),e.index0AttributeName!==void 0?r.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function R(L){if(n.debug.checkShaderErrors){const I=r.getProgramInfoLog(g).trim(),F=r.getShaderInfoLog(b).trim(),X=r.getShaderInfoLog(w).trim();let Y=!0,W=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,b,w);else{const K=op(r,b,"vertex"),V=op(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+I+`
`+K+`
`+V)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(F===""||X==="")&&(W=!1);W&&(L.diagnostics={runnable:Y,programLog:I,vertexShader:{log:F,prefix:_},fragmentShader:{log:X,prefix:p}})}r.deleteShader(b),r.deleteShader(w),P=new $a(r,g),y=Zb(r,g)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(g,Hb)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Gb++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=w,this}let c1=0;class u1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new f1(t),e.set(t,i)),i}}class f1{constructor(t){this.id=c1++,this.code=t,this.usedTimes=0}}function h1(n,t,e,i,r,s,o){const a=new Wf,l=new u1,u=new Set,c=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return u.add(y),y===0?"uv":`uv${y}`}function _(y,S,L,I,F){const X=I.fog,Y=F.geometry,W=y.isMeshStandardMaterial?I.environment:null,K=(y.isMeshStandardMaterial?e:t).get(y.envMap||W),V=K&&K.mapping===Rl?K.image.height:null,vt=m[y.type];y.precision!==null&&(d=r.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const gt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,St=gt!==void 0?gt.length:0;let Lt=0;Y.morphAttributes.position!==void 0&&(Lt=1),Y.morphAttributes.normal!==void 0&&(Lt=2),Y.morphAttributes.color!==void 0&&(Lt=3);let Qt,rt,_t,at;if(vt){const Ut=_i[vt];Qt=Ut.vertexShader,rt=Ut.fragmentShader}else Qt=y.vertexShader,rt=y.fragmentShader,l.update(y),_t=l.getVertexShaderID(y),at=l.getFragmentShaderID(y);const pt=n.getRenderTarget(),wt=n.state.buffers.depth.getReversed(),Dt=F.isInstancedMesh===!0,zt=F.isBatchedMesh===!0,ae=!!y.map,D=!!y.matcap,O=!!K,A=!!y.aoMap,lt=!!y.lightMap,tt=!!y.bumpMap,nt=!!y.normalMap,it=!!y.displacementMap,ut=!!y.emissiveMap,et=!!y.metalnessMap,T=!!y.roughnessMap,E=y.anisotropy>0,N=y.clearcoat>0,G=y.dispersion>0,j=y.iridescence>0,q=y.sheen>0,Mt=y.transmission>0,ht=E&&!!y.anisotropyMap,dt=N&&!!y.clearcoatMap,ct=N&&!!y.clearcoatNormalMap,st=N&&!!y.clearcoatRoughnessMap,xt=j&&!!y.iridescenceMap,Ot=j&&!!y.iridescenceThicknessMap,Ht=q&&!!y.sheenColorMap,Et=q&&!!y.sheenRoughnessMap,Xt=!!y.specularMap,Yt=!!y.specularColorMap,de=!!y.specularIntensityMap,z=Mt&&!!y.transmissionMap,At=Mt&&!!y.thicknessMap,ot=!!y.gradientMap,ft=!!y.alphaMap,Pt=y.alphaTest>0,B=!!y.alphaHash,Z=!!y.extensions;let mt=pr;y.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(mt=n.toneMapping);const Tt={shaderID:vt,shaderType:y.type,shaderName:y.name,vertexShader:Qt,fragmentShader:rt,defines:y.defines,customVertexShaderID:_t,customFragmentShaderID:at,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:zt,batchingColor:zt&&F._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&F.instanceColor!==null,instancingMorph:Dt&&F.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:pt===null?n.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:Zs,alphaToCoverage:!!y.alphaToCoverage,map:ae,matcap:D,envMap:O,envMapMode:O&&K.mapping,envMapCubeUVHeight:V,aoMap:A,lightMap:lt,bumpMap:tt,normalMap:nt,displacementMap:h&&it,emissiveMap:ut,normalMapObjectSpace:nt&&y.normalMapType===jy,normalMapTangentSpace:nt&&y.normalMapType===V_,metalnessMap:et,roughnessMap:T,anisotropy:E,anisotropyMap:ht,clearcoat:N,clearcoatMap:dt,clearcoatNormalMap:ct,clearcoatRoughnessMap:st,dispersion:G,iridescence:j,iridescenceMap:xt,iridescenceThicknessMap:Ot,sheen:q,sheenColorMap:Ht,sheenRoughnessMap:Et,specularMap:Xt,specularColorMap:Yt,specularIntensityMap:de,transmission:Mt,transmissionMap:z,thicknessMap:At,gradientMap:ot,opaque:y.transparent===!1&&y.blending===Os&&y.alphaToCoverage===!1,alphaMap:ft,alphaTest:Pt,alphaHash:B,combine:y.combine,mapUv:ae&&g(y.map.channel),aoMapUv:A&&g(y.aoMap.channel),lightMapUv:lt&&g(y.lightMap.channel),bumpMapUv:tt&&g(y.bumpMap.channel),normalMapUv:nt&&g(y.normalMap.channel),displacementMapUv:it&&g(y.displacementMap.channel),emissiveMapUv:ut&&g(y.emissiveMap.channel),metalnessMapUv:et&&g(y.metalnessMap.channel),roughnessMapUv:T&&g(y.roughnessMap.channel),anisotropyMapUv:ht&&g(y.anisotropyMap.channel),clearcoatMapUv:dt&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:ct&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Et&&g(y.sheenRoughnessMap.channel),specularMapUv:Xt&&g(y.specularMap.channel),specularColorMapUv:Yt&&g(y.specularColorMap.channel),specularIntensityMapUv:de&&g(y.specularIntensityMap.channel),transmissionMapUv:z&&g(y.transmissionMap.channel),thicknessMapUv:At&&g(y.thicknessMap.channel),alphaMapUv:ft&&g(y.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(nt||E),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Y.attributes.uv&&(ae||ft),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:wt,skinning:F.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Lt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:mt,decodeVideoTexture:ae&&y.map.isVideoTexture===!0&&fe.getTransfer(y.map.colorSpace)===ye,decodeVideoTextureEmissive:ut&&y.emissiveMap.isVideoTexture===!0&&fe.getTransfer(y.emissiveMap.colorSpace)===ye,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ze,flipSided:y.side===Qe,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Z&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Z&&y.extensions.multiDraw===!0||zt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Tt.vertexUv1s=u.has(1),Tt.vertexUv2s=u.has(2),Tt.vertexUv3s=u.has(3),u.clear(),Tt}function p(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)S.push(L),S.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(M(S,y),x(S,y),S.push(n.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function M(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function x(y,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),y.push(a.mask)}function v(y){const S=m[y.type];let L;if(S){const I=_i[S];L=AM.clone(I.uniforms)}else L=y.uniforms;return L}function b(y,S){let L;for(let I=0,F=c.length;I<F;I++){const X=c[I];if(X.cacheKey===S){L=X,++L.usedTimes;break}}return L===void 0&&(L=new l1(n,S,y,s),c.push(L)),L}function w(y){if(--y.usedTimes===0){const S=c.indexOf(y);c[S]=c[c.length-1],c.pop(),y.destroy()}}function R(y){l.remove(y)}function P(){l.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:v,acquireProgram:b,releaseProgram:w,releaseShaderCache:R,programs:c,dispose:P}}function d1(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function p1(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function fp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function hp(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(f,h,d,m,g,_){let p=n[t];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:m,renderOrder:f.renderOrder,z:g,group:_},n[t]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=m,p.renderOrder=f.renderOrder,p.z=g,p.group=_),t++,p}function a(f,h,d,m,g,_){const p=o(f,h,d,m,g,_);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):e.push(p)}function l(f,h,d,m,g,_){const p=o(f,h,d,m,g,_);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):e.unshift(p)}function u(f,h){e.length>1&&e.sort(f||p1),i.length>1&&i.sort(h||fp),r.length>1&&r.sort(h||fp)}function c(){for(let f=t,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function m1(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new hp,n.set(i,[o])):r>=s.length?(o=new hp,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function _1(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Zt};break;case"SpotLight":e={position:new U,direction:new U,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new U,halfWidth:new U,halfHeight:new U};break}return n[t.id]=e,e}}}function g1(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let v1=0;function x1(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function y1(n){const t=new _1,e=g1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new U);const r=new U,s=new we,o=new we;function a(u){let c=0,f=0,h=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let d=0,m=0,g=0,_=0,p=0,M=0,x=0,v=0,b=0,w=0,R=0;u.sort(x1);for(let y=0,S=u.length;y<S;y++){const L=u[y],I=L.color,F=L.intensity,X=L.distance,Y=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)c+=I.r*F,f+=I.g*F,h+=I.b*F;else if(L.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(L.sh.coefficients[W],F);R++}else if(L.isDirectionalLight){const W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const K=L.shadow,V=e.get(L);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,i.directionalShadow[d]=V,i.directionalShadowMap[d]=Y,i.directionalShadowMatrix[d]=L.shadow.matrix,M++}i.directional[d]=W,d++}else if(L.isSpotLight){const W=t.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(I).multiplyScalar(F),W.distance=X,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,i.spot[g]=W;const K=L.shadow;if(L.map&&(i.spotLightMap[b]=L.map,b++,K.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[g]=K.matrix,L.castShadow){const V=e.get(L);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,i.spotShadow[g]=V,i.spotShadowMap[g]=Y,v++}g++}else if(L.isRectAreaLight){const W=t.get(L);W.color.copy(I).multiplyScalar(F),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),i.rectArea[_]=W,_++}else if(L.isPointLight){const W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){const K=L.shadow,V=e.get(L);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,V.shadowCameraNear=K.camera.near,V.shadowCameraFar=K.camera.far,i.pointShadow[m]=V,i.pointShadowMap[m]=Y,i.pointShadowMatrix[m]=L.shadow.matrix,x++}i.point[m]=W,m++}else if(L.isHemisphereLight){const W=t.get(L);W.skyColor.copy(L.color).multiplyScalar(F),W.groundColor.copy(L.groundColor).multiplyScalar(F),i.hemi[p]=W,p++}}_>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=bt.LTC_FLOAT_1,i.rectAreaLTC2=bt.LTC_FLOAT_2):(i.rectAreaLTC1=bt.LTC_HALF_1,i.rectAreaLTC2=bt.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=h;const P=i.hash;(P.directionalLength!==d||P.pointLength!==m||P.spotLength!==g||P.rectAreaLength!==_||P.hemiLength!==p||P.numDirectionalShadows!==M||P.numPointShadows!==x||P.numSpotShadows!==v||P.numSpotMaps!==b||P.numLightProbes!==R)&&(i.directional.length=d,i.spot.length=g,i.rectArea.length=_,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=v+b-w,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,P.directionalLength=d,P.pointLength=m,P.spotLength=g,P.rectAreaLength=_,P.hemiLength=p,P.numDirectionalShadows=M,P.numPointShadows=x,P.numSpotShadows=v,P.numSpotMaps=b,P.numLightProbes=R,i.version=v1++)}function l(u,c){let f=0,h=0,d=0,m=0,g=0;const _=c.matrixWorldInverse;for(let p=0,M=u.length;p<M;p++){const x=u[p];if(x.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(_),f++}else if(x.isSpotLight){const v=i.spot[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(_),v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(_),d++}else if(x.isRectAreaLight){const v=i.rectArea[m];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(_),o.identity(),s.copy(x.matrixWorld),s.premultiply(_),o.extractRotation(s),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(x.isPointLight){const v=i.point[h];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(_),h++}else if(x.isHemisphereLight){const v=i.hemi[g];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(_),g++}}}return{setup:a,setupView:l,state:i}}function dp(n){const t=new y1(n),e=[],i=[];function r(c){u.camera=c,e.length=0,i.length=0}function s(c){e.push(c)}function o(c){i.push(c)}function a(){t.setup(e)}function l(c){t.setupView(e,c)}const u={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function M1(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new dp(n),t.set(r,[a])):s>=o.length?(a=new dp(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const S1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,E1=`uniform sampler2D shadow_pass;
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
}`;function T1(n,t,e){let i=new qf;const r=new Ft,s=new Ft,o=new Se,a=new $M({depthPacking:Ky}),l=new KM,u={},c=e.maxTextureSize,f={[qi]:Qe,[Qe]:qi,[Ze]:Ze},h=new yr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:S1,fragmentShader:E1}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const m=new _n;m.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new xe(m,h),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=C_;let p=this.type;this.render=function(w,R,P){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||w.length===0)return;const y=n.getRenderTarget(),S=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),I=n.state;I.setBlending(dr),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const F=p!==Di&&this.type===Di,X=p===Di&&this.type!==Di;for(let Y=0,W=w.length;Y<W;Y++){const K=w[Y],V=K.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const vt=V.getFrameExtents();if(r.multiply(vt),s.copy(V.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/vt.x),r.x=s.x*vt.x,V.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/vt.y),r.y=s.y*vt.y,V.mapSize.y=s.y)),V.map===null||F===!0||X===!0){const St=this.type!==Di?{minFilter:oi,magFilter:oi}:{};V.map!==null&&V.map.dispose(),V.map=new is(r.x,r.y,St),V.map.texture.name=K.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const gt=V.getViewportCount();for(let St=0;St<gt;St++){const Lt=V.getViewport(St);o.set(s.x*Lt.x,s.y*Lt.y,s.x*Lt.z,s.y*Lt.w),I.viewport(o),V.updateMatrices(K,St),i=V.getFrustum(),v(R,P,V.camera,K,this.type)}V.isPointLightShadow!==!0&&this.type===Di&&M(V,P),V.needsUpdate=!1}p=this.type,_.needsUpdate=!1,n.setRenderTarget(y,S,L)};function M(w,R){const P=t.update(g);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new is(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(R,null,P,h,g,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(R,null,P,d,g,null)}function x(w,R,P,y){let S=null;const L=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)S=L;else if(S=P.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const I=S.uuid,F=R.uuid;let X=u[I];X===void 0&&(X={},u[I]=X);let Y=X[F];Y===void 0&&(Y=S.clone(),X[F]=Y,R.addEventListener("dispose",b)),S=Y}if(S.visible=R.visible,S.wireframe=R.wireframe,y===Di?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:f[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const I=n.properties.get(S);I.light=P}return S}function v(w,R,P,y,S){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Di)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const F=t.update(w),X=w.material;if(Array.isArray(X)){const Y=F.groups;for(let W=0,K=Y.length;W<K;W++){const V=Y[W],vt=X[V.materialIndex];if(vt&&vt.visible){const gt=x(w,vt,y,S);w.onBeforeShadow(n,w,R,P,F,gt,V),n.renderBufferDirect(P,null,F,gt,w,V),w.onAfterShadow(n,w,R,P,F,gt,V)}}}else if(X.visible){const Y=x(w,X,y,S);w.onBeforeShadow(n,w,R,P,F,Y,null),n.renderBufferDirect(P,null,F,Y,w,null),w.onAfterShadow(n,w,R,P,F,Y,null)}}const I=w.children;for(let F=0,X=I.length;F<X;F++)v(I[F],R,P,y,S)}function b(w){w.target.removeEventListener("dispose",b);for(const P in u){const y=u[P],S=w.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}const b1={[fu]:hu,[du]:_u,[pu]:gu,[qs]:mu,[hu]:fu,[_u]:du,[gu]:pu,[mu]:qs};function A1(n,t){function e(){let z=!1;const At=new Se;let ot=null;const ft=new Se(0,0,0,0);return{setMask:function(Pt){ot!==Pt&&!z&&(n.colorMask(Pt,Pt,Pt,Pt),ot=Pt)},setLocked:function(Pt){z=Pt},setClear:function(Pt,B,Z,mt,Tt){Tt===!0&&(Pt*=mt,B*=mt,Z*=mt),At.set(Pt,B,Z,mt),ft.equals(At)===!1&&(n.clearColor(Pt,B,Z,mt),ft.copy(At))},reset:function(){z=!1,ot=null,ft.set(-1,0,0,0)}}}function i(){let z=!1,At=!1,ot=null,ft=null,Pt=null;return{setReversed:function(B){if(At!==B){const Z=t.get("EXT_clip_control");At?Z.clipControlEXT(Z.LOWER_LEFT_EXT,Z.ZERO_TO_ONE_EXT):Z.clipControlEXT(Z.LOWER_LEFT_EXT,Z.NEGATIVE_ONE_TO_ONE_EXT);const mt=Pt;Pt=null,this.setClear(mt)}At=B},getReversed:function(){return At},setTest:function(B){B?pt(n.DEPTH_TEST):wt(n.DEPTH_TEST)},setMask:function(B){ot!==B&&!z&&(n.depthMask(B),ot=B)},setFunc:function(B){if(At&&(B=b1[B]),ft!==B){switch(B){case fu:n.depthFunc(n.NEVER);break;case hu:n.depthFunc(n.ALWAYS);break;case du:n.depthFunc(n.LESS);break;case qs:n.depthFunc(n.LEQUAL);break;case pu:n.depthFunc(n.EQUAL);break;case mu:n.depthFunc(n.GEQUAL);break;case _u:n.depthFunc(n.GREATER);break;case gu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ft=B}},setLocked:function(B){z=B},setClear:function(B){Pt!==B&&(At&&(B=1-B),n.clearDepth(B),Pt=B)},reset:function(){z=!1,ot=null,ft=null,Pt=null,At=!1}}}function r(){let z=!1,At=null,ot=null,ft=null,Pt=null,B=null,Z=null,mt=null,Tt=null;return{setTest:function(Ut){z||(Ut?pt(n.STENCIL_TEST):wt(n.STENCIL_TEST))},setMask:function(Ut){At!==Ut&&!z&&(n.stencilMask(Ut),At=Ut)},setFunc:function(Ut,ve,ie){(ot!==Ut||ft!==ve||Pt!==ie)&&(n.stencilFunc(Ut,ve,ie),ot=Ut,ft=ve,Pt=ie)},setOp:function(Ut,ve,ie){(B!==Ut||Z!==ve||mt!==ie)&&(n.stencilOp(Ut,ve,ie),B=Ut,Z=ve,mt=ie)},setLocked:function(Ut){z=Ut},setClear:function(Ut){Tt!==Ut&&(n.clearStencil(Ut),Tt=Ut)},reset:function(){z=!1,At=null,ot=null,ft=null,Pt=null,B=null,Z=null,mt=null,Tt=null}}}const s=new e,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},f={},h=new WeakMap,d=[],m=null,g=!1,_=null,p=null,M=null,x=null,v=null,b=null,w=null,R=new Zt(0,0,0),P=0,y=!1,S=null,L=null,I=null,F=null,X=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,K=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=K>=2);let vt=null,gt={};const St=n.getParameter(n.SCISSOR_BOX),Lt=n.getParameter(n.VIEWPORT),Qt=new Se().fromArray(St),rt=new Se().fromArray(Lt);function _t(z,At,ot,ft){const Pt=new Uint8Array(4),B=n.createTexture();n.bindTexture(z,B),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Z=0;Z<ot;Z++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(At,0,n.RGBA,1,1,ft,0,n.RGBA,n.UNSIGNED_BYTE,Pt):n.texImage2D(At+Z,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Pt);return B}const at={};at[n.TEXTURE_2D]=_t(n.TEXTURE_2D,n.TEXTURE_2D,1),at[n.TEXTURE_CUBE_MAP]=_t(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[n.TEXTURE_2D_ARRAY]=_t(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),at[n.TEXTURE_3D]=_t(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pt(n.DEPTH_TEST),o.setFunc(qs),tt(!1),nt(od),pt(n.CULL_FACE),A(dr);function pt(z){c[z]!==!0&&(n.enable(z),c[z]=!0)}function wt(z){c[z]!==!1&&(n.disable(z),c[z]=!1)}function Dt(z,At){return f[z]!==At?(n.bindFramebuffer(z,At),f[z]=At,z===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=At),z===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=At),!0):!1}function zt(z,At){let ot=d,ft=!1;if(z){ot=h.get(At),ot===void 0&&(ot=[],h.set(At,ot));const Pt=z.textures;if(ot.length!==Pt.length||ot[0]!==n.COLOR_ATTACHMENT0){for(let B=0,Z=Pt.length;B<Z;B++)ot[B]=n.COLOR_ATTACHMENT0+B;ot.length=Pt.length,ft=!0}}else ot[0]!==n.BACK&&(ot[0]=n.BACK,ft=!0);ft&&n.drawBuffers(ot)}function ae(z){return m!==z?(n.useProgram(z),m=z,!0):!1}const D={[Hr]:n.FUNC_ADD,[My]:n.FUNC_SUBTRACT,[Sy]:n.FUNC_REVERSE_SUBTRACT};D[Ey]=n.MIN,D[Ty]=n.MAX;const O={[by]:n.ZERO,[Ay]:n.ONE,[wy]:n.SRC_COLOR,[cu]:n.SRC_ALPHA,[Iy]:n.SRC_ALPHA_SATURATE,[Dy]:n.DST_COLOR,[Ry]:n.DST_ALPHA,[Cy]:n.ONE_MINUS_SRC_COLOR,[uu]:n.ONE_MINUS_SRC_ALPHA,[Ly]:n.ONE_MINUS_DST_COLOR,[Py]:n.ONE_MINUS_DST_ALPHA,[Uy]:n.CONSTANT_COLOR,[Ny]:n.ONE_MINUS_CONSTANT_COLOR,[Oy]:n.CONSTANT_ALPHA,[Fy]:n.ONE_MINUS_CONSTANT_ALPHA};function A(z,At,ot,ft,Pt,B,Z,mt,Tt,Ut){if(z===dr){g===!0&&(wt(n.BLEND),g=!1);return}if(g===!1&&(pt(n.BLEND),g=!0),z!==yy){if(z!==_||Ut!==y){if((p!==Hr||v!==Hr)&&(n.blendEquation(n.FUNC_ADD),p=Hr,v=Hr),Ut)switch(z){case Os:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ad:n.blendFunc(n.ONE,n.ONE);break;case ld:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Os:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ad:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ld:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}M=null,x=null,b=null,w=null,R.set(0,0,0),P=0,_=z,y=Ut}return}Pt=Pt||At,B=B||ot,Z=Z||ft,(At!==p||Pt!==v)&&(n.blendEquationSeparate(D[At],D[Pt]),p=At,v=Pt),(ot!==M||ft!==x||B!==b||Z!==w)&&(n.blendFuncSeparate(O[ot],O[ft],O[B],O[Z]),M=ot,x=ft,b=B,w=Z),(mt.equals(R)===!1||Tt!==P)&&(n.blendColor(mt.r,mt.g,mt.b,Tt),R.copy(mt),P=Tt),_=z,y=!1}function lt(z,At){z.side===Ze?wt(n.CULL_FACE):pt(n.CULL_FACE);let ot=z.side===Qe;At&&(ot=!ot),tt(ot),z.blending===Os&&z.transparent===!1?A(dr):A(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),s.setMask(z.colorWrite);const ft=z.stencilWrite;a.setTest(ft),ft&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),ut(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?pt(n.SAMPLE_ALPHA_TO_COVERAGE):wt(n.SAMPLE_ALPHA_TO_COVERAGE)}function tt(z){S!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),S=z)}function nt(z){z!==gy?(pt(n.CULL_FACE),z!==L&&(z===od?n.cullFace(n.BACK):z===vy?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):wt(n.CULL_FACE),L=z}function it(z){z!==I&&(W&&n.lineWidth(z),I=z)}function ut(z,At,ot){z?(pt(n.POLYGON_OFFSET_FILL),(F!==At||X!==ot)&&(n.polygonOffset(At,ot),F=At,X=ot)):wt(n.POLYGON_OFFSET_FILL)}function et(z){z?pt(n.SCISSOR_TEST):wt(n.SCISSOR_TEST)}function T(z){z===void 0&&(z=n.TEXTURE0+Y-1),vt!==z&&(n.activeTexture(z),vt=z)}function E(z,At,ot){ot===void 0&&(vt===null?ot=n.TEXTURE0+Y-1:ot=vt);let ft=gt[ot];ft===void 0&&(ft={type:void 0,texture:void 0},gt[ot]=ft),(ft.type!==z||ft.texture!==At)&&(vt!==ot&&(n.activeTexture(ot),vt=ot),n.bindTexture(z,At||at[z]),ft.type=z,ft.texture=At)}function N(){const z=gt[vt];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function G(){try{n.compressedTexImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function j(){try{n.compressedTexImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function q(){try{n.texSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Mt(){try{n.texSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ht(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function dt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ct(){try{n.texStorage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function st(){try{n.texStorage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xt(){try{n.texImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ot(){try{n.texImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ht(z){Qt.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),Qt.copy(z))}function Et(z){rt.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),rt.copy(z))}function Xt(z,At){let ot=u.get(At);ot===void 0&&(ot=new WeakMap,u.set(At,ot));let ft=ot.get(z);ft===void 0&&(ft=n.getUniformBlockIndex(At,z.name),ot.set(z,ft))}function Yt(z,At){const ft=u.get(At).get(z);l.get(At)!==ft&&(n.uniformBlockBinding(At,ft,z.__bindingPointIndex),l.set(At,ft))}function de(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},vt=null,gt={},f={},h=new WeakMap,d=[],m=null,g=!1,_=null,p=null,M=null,x=null,v=null,b=null,w=null,R=new Zt(0,0,0),P=0,y=!1,S=null,L=null,I=null,F=null,X=null,Qt.set(0,0,n.canvas.width,n.canvas.height),rt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:pt,disable:wt,bindFramebuffer:Dt,drawBuffers:zt,useProgram:ae,setBlending:A,setMaterial:lt,setFlipSided:tt,setCullFace:nt,setLineWidth:it,setPolygonOffset:ut,setScissorTest:et,activeTexture:T,bindTexture:E,unbindTexture:N,compressedTexImage2D:G,compressedTexImage3D:j,texImage2D:xt,texImage3D:Ot,updateUBOMapping:Xt,uniformBlockBinding:Yt,texStorage2D:ct,texStorage3D:st,texSubImage2D:q,texSubImage3D:Mt,compressedTexSubImage2D:ht,compressedTexSubImage3D:dt,scissor:Ht,viewport:Et,reset:de}}function w1(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ft,c=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,E){return d?new OffscreenCanvas(T,E):dl("canvas")}function g(T,E,N){let G=1;const j=et(T);if((j.width>N||j.height>N)&&(G=N/Math.max(j.width,j.height)),G<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const q=Math.floor(G*j.width),Mt=Math.floor(G*j.height);f===void 0&&(f=m(q,Mt));const ht=E?m(q,Mt):f;return ht.width=q,ht.height=Mt,ht.getContext("2d").drawImage(T,0,0,q,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+q+"x"+Mt+")."),ht}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function _(T){return T.generateMipmaps}function p(T){n.generateMipmap(T)}function M(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(T,E,N,G,j=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=E;if(E===n.RED&&(N===n.FLOAT&&(q=n.R32F),N===n.HALF_FLOAT&&(q=n.R16F),N===n.UNSIGNED_BYTE&&(q=n.R8)),E===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(q=n.R8UI),N===n.UNSIGNED_SHORT&&(q=n.R16UI),N===n.UNSIGNED_INT&&(q=n.R32UI),N===n.BYTE&&(q=n.R8I),N===n.SHORT&&(q=n.R16I),N===n.INT&&(q=n.R32I)),E===n.RG&&(N===n.FLOAT&&(q=n.RG32F),N===n.HALF_FLOAT&&(q=n.RG16F),N===n.UNSIGNED_BYTE&&(q=n.RG8)),E===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(q=n.RG8UI),N===n.UNSIGNED_SHORT&&(q=n.RG16UI),N===n.UNSIGNED_INT&&(q=n.RG32UI),N===n.BYTE&&(q=n.RG8I),N===n.SHORT&&(q=n.RG16I),N===n.INT&&(q=n.RG32I)),E===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(q=n.RGB8UI),N===n.UNSIGNED_SHORT&&(q=n.RGB16UI),N===n.UNSIGNED_INT&&(q=n.RGB32UI),N===n.BYTE&&(q=n.RGB8I),N===n.SHORT&&(q=n.RGB16I),N===n.INT&&(q=n.RGB32I)),E===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),N===n.UNSIGNED_INT&&(q=n.RGBA32UI),N===n.BYTE&&(q=n.RGBA8I),N===n.SHORT&&(q=n.RGBA16I),N===n.INT&&(q=n.RGBA32I)),E===n.RGB&&N===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),E===n.RGBA){const Mt=j?fl:fe.getTransfer(G);N===n.FLOAT&&(q=n.RGBA32F),N===n.HALF_FLOAT&&(q=n.RGBA16F),N===n.UNSIGNED_BYTE&&(q=Mt===ye?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function v(T,E){let N;return T?E===null||E===ns||E===Ks?N=n.DEPTH24_STENCIL8:E===Bi?N=n.DEPTH32F_STENCIL8:E===Yo&&(N=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ns||E===Ks?N=n.DEPTH_COMPONENT24:E===Bi?N=n.DEPTH_COMPONENT32F:E===Yo&&(N=n.DEPTH_COMPONENT16),N}function b(T,E){return _(T)===!0||T.isFramebufferTexture&&T.minFilter!==oi&&T.minFilter!==xi?Math.log2(Math.max(E.width,E.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?E.mipmaps.length:1}function w(T){const E=T.target;E.removeEventListener("dispose",w),P(E),E.isVideoTexture&&c.delete(E)}function R(T){const E=T.target;E.removeEventListener("dispose",R),S(E)}function P(T){const E=i.get(T);if(E.__webglInit===void 0)return;const N=T.source,G=h.get(N);if(G){const j=G[E.__cacheKey];j.usedTimes--,j.usedTimes===0&&y(T),Object.keys(G).length===0&&h.delete(N)}i.remove(T)}function y(T){const E=i.get(T);n.deleteTexture(E.__webglTexture);const N=T.source,G=h.get(N);delete G[E.__cacheKey],o.memory.textures--}function S(T){const E=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(E.__webglFramebuffer[G]))for(let j=0;j<E.__webglFramebuffer[G].length;j++)n.deleteFramebuffer(E.__webglFramebuffer[G][j]);else n.deleteFramebuffer(E.__webglFramebuffer[G]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[G])}else{if(Array.isArray(E.__webglFramebuffer))for(let G=0;G<E.__webglFramebuffer.length;G++)n.deleteFramebuffer(E.__webglFramebuffer[G]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let G=0;G<E.__webglColorRenderbuffer.length;G++)E.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[G]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const N=T.textures;for(let G=0,j=N.length;G<j;G++){const q=i.get(N[G]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(N[G])}i.remove(T)}let L=0;function I(){L=0}function F(){const T=L;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),L+=1,T}function X(T){const E=[];return E.push(T.wrapS),E.push(T.wrapT),E.push(T.wrapR||0),E.push(T.magFilter),E.push(T.minFilter),E.push(T.anisotropy),E.push(T.internalFormat),E.push(T.format),E.push(T.type),E.push(T.generateMipmaps),E.push(T.premultiplyAlpha),E.push(T.flipY),E.push(T.unpackAlignment),E.push(T.colorSpace),E.join()}function Y(T,E){const N=i.get(T);if(T.isVideoTexture&&it(T),T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){const G=T.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{rt(N,T,E);return}}e.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+E)}function W(T,E){const N=i.get(T);if(T.version>0&&N.__version!==T.version){rt(N,T,E);return}e.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+E)}function K(T,E){const N=i.get(T);if(T.version>0&&N.__version!==T.version){rt(N,T,E);return}e.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+E)}function V(T,E){const N=i.get(T);if(T.version>0&&N.__version!==T.version){_t(N,T,E);return}e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+E)}const vt={[yu]:n.REPEAT,[qr]:n.CLAMP_TO_EDGE,[Mu]:n.MIRRORED_REPEAT},gt={[oi]:n.NEAREST,[Yy]:n.NEAREST_MIPMAP_NEAREST,[ua]:n.NEAREST_MIPMAP_LINEAR,[xi]:n.LINEAR,[ec]:n.LINEAR_MIPMAP_NEAREST,[Yr]:n.LINEAR_MIPMAP_LINEAR},St={[Zy]:n.NEVER,[iM]:n.ALWAYS,[Jy]:n.LESS,[H_]:n.LEQUAL,[Qy]:n.EQUAL,[nM]:n.GEQUAL,[tM]:n.GREATER,[eM]:n.NOTEQUAL};function Lt(T,E){if(E.type===Bi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===xi||E.magFilter===ec||E.magFilter===ua||E.magFilter===Yr||E.minFilter===xi||E.minFilter===ec||E.minFilter===ua||E.minFilter===Yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,vt[E.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,vt[E.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,vt[E.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,gt[E.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,gt[E.minFilter]),E.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,St[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===oi||E.minFilter!==ua&&E.minFilter!==Yr||E.type===Bi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Qt(T,E){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,E.addEventListener("dispose",w));const G=E.source;let j=h.get(G);j===void 0&&(j={},h.set(G,j));const q=X(E);if(q!==T.__cacheKey){j[q]===void 0&&(j[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),j[q].usedTimes++;const Mt=j[T.__cacheKey];Mt!==void 0&&(j[T.__cacheKey].usedTimes--,Mt.usedTimes===0&&y(E)),T.__cacheKey=q,T.__webglTexture=j[q].texture}return N}function rt(T,E,N){let G=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(G=n.TEXTURE_3D);const j=Qt(T,E),q=E.source;e.bindTexture(G,T.__webglTexture,n.TEXTURE0+N);const Mt=i.get(q);if(q.version!==Mt.__version||j===!0){e.activeTexture(n.TEXTURE0+N);const ht=fe.getPrimaries(fe.workingColorSpace),dt=E.colorSpace===or?null:fe.getPrimaries(E.colorSpace),ct=E.colorSpace===or||ht===dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let st=g(E.image,!1,r.maxTextureSize);st=ut(E,st);const xt=s.convert(E.format,E.colorSpace),Ot=s.convert(E.type);let Ht=x(E.internalFormat,xt,Ot,E.colorSpace,E.isVideoTexture);Lt(G,E);let Et;const Xt=E.mipmaps,Yt=E.isVideoTexture!==!0,de=Mt.__version===void 0||j===!0,z=q.dataReady,At=b(E,st);if(E.isDepthTexture)Ht=v(E.format===js,E.type),de&&(Yt?e.texStorage2D(n.TEXTURE_2D,1,Ht,st.width,st.height):e.texImage2D(n.TEXTURE_2D,0,Ht,st.width,st.height,0,xt,Ot,null));else if(E.isDataTexture)if(Xt.length>0){Yt&&de&&e.texStorage2D(n.TEXTURE_2D,At,Ht,Xt[0].width,Xt[0].height);for(let ot=0,ft=Xt.length;ot<ft;ot++)Et=Xt[ot],Yt?z&&e.texSubImage2D(n.TEXTURE_2D,ot,0,0,Et.width,Et.height,xt,Ot,Et.data):e.texImage2D(n.TEXTURE_2D,ot,Ht,Et.width,Et.height,0,xt,Ot,Et.data);E.generateMipmaps=!1}else Yt?(de&&e.texStorage2D(n.TEXTURE_2D,At,Ht,st.width,st.height),z&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,st.width,st.height,xt,Ot,st.data)):e.texImage2D(n.TEXTURE_2D,0,Ht,st.width,st.height,0,xt,Ot,st.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Yt&&de&&e.texStorage3D(n.TEXTURE_2D_ARRAY,At,Ht,Xt[0].width,Xt[0].height,st.depth);for(let ot=0,ft=Xt.length;ot<ft;ot++)if(Et=Xt[ot],E.format!==ri)if(xt!==null)if(Yt){if(z)if(E.layerUpdates.size>0){const Pt=Gd(Et.width,Et.height,E.format,E.type);for(const B of E.layerUpdates){const Z=Et.data.subarray(B*Pt/Et.data.BYTES_PER_ELEMENT,(B+1)*Pt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ot,0,0,B,Et.width,Et.height,1,xt,Z)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ot,0,0,0,Et.width,Et.height,st.depth,xt,Et.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ot,Ht,Et.width,Et.height,st.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?z&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ot,0,0,0,Et.width,Et.height,st.depth,xt,Ot,Et.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ot,Ht,Et.width,Et.height,st.depth,0,xt,Ot,Et.data)}else{Yt&&de&&e.texStorage2D(n.TEXTURE_2D,At,Ht,Xt[0].width,Xt[0].height);for(let ot=0,ft=Xt.length;ot<ft;ot++)Et=Xt[ot],E.format!==ri?xt!==null?Yt?z&&e.compressedTexSubImage2D(n.TEXTURE_2D,ot,0,0,Et.width,Et.height,xt,Et.data):e.compressedTexImage2D(n.TEXTURE_2D,ot,Ht,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?z&&e.texSubImage2D(n.TEXTURE_2D,ot,0,0,Et.width,Et.height,xt,Ot,Et.data):e.texImage2D(n.TEXTURE_2D,ot,Ht,Et.width,Et.height,0,xt,Ot,Et.data)}else if(E.isDataArrayTexture)if(Yt){if(de&&e.texStorage3D(n.TEXTURE_2D_ARRAY,At,Ht,st.width,st.height,st.depth),z)if(E.layerUpdates.size>0){const ot=Gd(st.width,st.height,E.format,E.type);for(const ft of E.layerUpdates){const Pt=st.data.subarray(ft*ot/st.data.BYTES_PER_ELEMENT,(ft+1)*ot/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ft,st.width,st.height,1,xt,Ot,Pt)}E.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,xt,Ot,st.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ht,st.width,st.height,st.depth,0,xt,Ot,st.data);else if(E.isData3DTexture)Yt?(de&&e.texStorage3D(n.TEXTURE_3D,At,Ht,st.width,st.height,st.depth),z&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,xt,Ot,st.data)):e.texImage3D(n.TEXTURE_3D,0,Ht,st.width,st.height,st.depth,0,xt,Ot,st.data);else if(E.isFramebufferTexture){if(de)if(Yt)e.texStorage2D(n.TEXTURE_2D,At,Ht,st.width,st.height);else{let ot=st.width,ft=st.height;for(let Pt=0;Pt<At;Pt++)e.texImage2D(n.TEXTURE_2D,Pt,Ht,ot,ft,0,xt,Ot,null),ot>>=1,ft>>=1}}else if(Xt.length>0){if(Yt&&de){const ot=et(Xt[0]);e.texStorage2D(n.TEXTURE_2D,At,Ht,ot.width,ot.height)}for(let ot=0,ft=Xt.length;ot<ft;ot++)Et=Xt[ot],Yt?z&&e.texSubImage2D(n.TEXTURE_2D,ot,0,0,xt,Ot,Et):e.texImage2D(n.TEXTURE_2D,ot,Ht,xt,Ot,Et);E.generateMipmaps=!1}else if(Yt){if(de){const ot=et(st);e.texStorage2D(n.TEXTURE_2D,At,Ht,ot.width,ot.height)}z&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,xt,Ot,st)}else e.texImage2D(n.TEXTURE_2D,0,Ht,xt,Ot,st);_(E)&&p(G),Mt.__version=q.version,E.onUpdate&&E.onUpdate(E)}T.__version=E.version}function _t(T,E,N){if(E.image.length!==6)return;const G=Qt(T,E),j=E.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+N);const q=i.get(j);if(j.version!==q.__version||G===!0){e.activeTexture(n.TEXTURE0+N);const Mt=fe.getPrimaries(fe.workingColorSpace),ht=E.colorSpace===or?null:fe.getPrimaries(E.colorSpace),dt=E.colorSpace===or||Mt===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const ct=E.isCompressedTexture||E.image[0].isCompressedTexture,st=E.image[0]&&E.image[0].isDataTexture,xt=[];for(let ft=0;ft<6;ft++)!ct&&!st?xt[ft]=g(E.image[ft],!0,r.maxCubemapSize):xt[ft]=st?E.image[ft].image:E.image[ft],xt[ft]=ut(E,xt[ft]);const Ot=xt[0],Ht=s.convert(E.format,E.colorSpace),Et=s.convert(E.type),Xt=x(E.internalFormat,Ht,Et,E.colorSpace),Yt=E.isVideoTexture!==!0,de=q.__version===void 0||G===!0,z=j.dataReady;let At=b(E,Ot);Lt(n.TEXTURE_CUBE_MAP,E);let ot;if(ct){Yt&&de&&e.texStorage2D(n.TEXTURE_CUBE_MAP,At,Xt,Ot.width,Ot.height);for(let ft=0;ft<6;ft++){ot=xt[ft].mipmaps;for(let Pt=0;Pt<ot.length;Pt++){const B=ot[Pt];E.format!==ri?Ht!==null?Yt?z&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Pt,0,0,B.width,B.height,Ht,B.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Pt,Xt,B.width,B.height,0,B.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Pt,0,0,B.width,B.height,Ht,Et,B.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Pt,Xt,B.width,B.height,0,Ht,Et,B.data)}}}else{if(ot=E.mipmaps,Yt&&de){ot.length>0&&At++;const ft=et(xt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,At,Xt,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(st){Yt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,xt[ft].width,xt[ft].height,Ht,Et,xt[ft].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,Xt,xt[ft].width,xt[ft].height,0,Ht,Et,xt[ft].data);for(let Pt=0;Pt<ot.length;Pt++){const Z=ot[Pt].image[ft].image;Yt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Pt+1,0,0,Z.width,Z.height,Ht,Et,Z.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Pt+1,Xt,Z.width,Z.height,0,Ht,Et,Z.data)}}else{Yt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Ht,Et,xt[ft]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,Xt,Ht,Et,xt[ft]);for(let Pt=0;Pt<ot.length;Pt++){const B=ot[Pt];Yt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Pt+1,0,0,Ht,Et,B.image[ft]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Pt+1,Xt,Ht,Et,B.image[ft])}}}_(E)&&p(n.TEXTURE_CUBE_MAP),q.__version=j.version,E.onUpdate&&E.onUpdate(E)}T.__version=E.version}function at(T,E,N,G,j,q){const Mt=s.convert(N.format,N.colorSpace),ht=s.convert(N.type),dt=x(N.internalFormat,Mt,ht,N.colorSpace),ct=i.get(E),st=i.get(N);if(st.__renderTarget=E,!ct.__hasExternalTextures){const xt=Math.max(1,E.width>>q),Ot=Math.max(1,E.height>>q);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?e.texImage3D(j,q,dt,xt,Ot,E.depth,0,Mt,ht,null):e.texImage2D(j,q,dt,xt,Ot,0,Mt,ht,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),nt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,j,st.__webglTexture,0,tt(E)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,j,st.__webglTexture,q),e.bindFramebuffer(n.FRAMEBUFFER,null)}function pt(T,E,N){if(n.bindRenderbuffer(n.RENDERBUFFER,T),E.depthBuffer){const G=E.depthTexture,j=G&&G.isDepthTexture?G.type:null,q=v(E.stencilBuffer,j),Mt=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=tt(E);nt(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ht,q,E.width,E.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,ht,q,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,q,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Mt,n.RENDERBUFFER,T)}else{const G=E.textures;for(let j=0;j<G.length;j++){const q=G[j],Mt=s.convert(q.format,q.colorSpace),ht=s.convert(q.type),dt=x(q.internalFormat,Mt,ht,q.colorSpace),ct=tt(E);N&&nt(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,dt,E.width,E.height):nt(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,dt,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,dt,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function wt(T,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=i.get(E.depthTexture);G.__renderTarget=E,(!G.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Y(E.depthTexture,0);const j=G.__webglTexture,q=tt(E);if(E.depthTexture.format===Fs)nt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(E.depthTexture.format===js)nt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Dt(T){const E=i.get(T),N=T.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==T.depthTexture){const G=T.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),G){const j=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,G.removeEventListener("dispose",j)};G.addEventListener("dispose",j),E.__depthDisposeCallback=j}E.__boundDepthTexture=G}if(T.depthTexture&&!E.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");wt(E.__webglFramebuffer,T)}else if(N){E.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[G]),E.__webglDepthbuffer[G]===void 0)E.__webglDepthbuffer[G]=n.createRenderbuffer(),pt(E.__webglDepthbuffer[G],T,!1);else{const j=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=E.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,q)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),pt(E.__webglDepthbuffer,T,!1);else{const G=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,j)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function zt(T,E,N){const G=i.get(T);E!==void 0&&at(G.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&Dt(T)}function ae(T){const E=T.texture,N=i.get(T),G=i.get(E);T.addEventListener("dispose",R);const j=T.textures,q=T.isWebGLCubeRenderTarget===!0,Mt=j.length>1;if(Mt||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=E.version,o.memory.textures++),q){N.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(E.mipmaps&&E.mipmaps.length>0){N.__webglFramebuffer[ht]=[];for(let dt=0;dt<E.mipmaps.length;dt++)N.__webglFramebuffer[ht][dt]=n.createFramebuffer()}else N.__webglFramebuffer[ht]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){N.__webglFramebuffer=[];for(let ht=0;ht<E.mipmaps.length;ht++)N.__webglFramebuffer[ht]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(Mt)for(let ht=0,dt=j.length;ht<dt;ht++){const ct=i.get(j[ht]);ct.__webglTexture===void 0&&(ct.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&nt(T)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ht=0;ht<j.length;ht++){const dt=j[ht];N.__webglColorRenderbuffer[ht]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[ht]);const ct=s.convert(dt.format,dt.colorSpace),st=s.convert(dt.type),xt=x(dt.internalFormat,ct,st,dt.colorSpace,T.isXRRenderTarget===!0),Ot=tt(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ot,xt,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,N.__webglColorRenderbuffer[ht])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),pt(N.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),Lt(n.TEXTURE_CUBE_MAP,E);for(let ht=0;ht<6;ht++)if(E.mipmaps&&E.mipmaps.length>0)for(let dt=0;dt<E.mipmaps.length;dt++)at(N.__webglFramebuffer[ht][dt],T,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,dt);else at(N.__webglFramebuffer[ht],T,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);_(E)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let ht=0,dt=j.length;ht<dt;ht++){const ct=j[ht],st=i.get(ct);e.bindTexture(n.TEXTURE_2D,st.__webglTexture),Lt(n.TEXTURE_2D,ct),at(N.__webglFramebuffer,T,ct,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,0),_(ct)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let ht=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ht=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ht,G.__webglTexture),Lt(ht,E),E.mipmaps&&E.mipmaps.length>0)for(let dt=0;dt<E.mipmaps.length;dt++)at(N.__webglFramebuffer[dt],T,E,n.COLOR_ATTACHMENT0,ht,dt);else at(N.__webglFramebuffer,T,E,n.COLOR_ATTACHMENT0,ht,0);_(E)&&p(ht),e.unbindTexture()}T.depthBuffer&&Dt(T)}function D(T){const E=T.textures;for(let N=0,G=E.length;N<G;N++){const j=E[N];if(_(j)){const q=M(T),Mt=i.get(j).__webglTexture;e.bindTexture(q,Mt),p(q),e.unbindTexture()}}}const O=[],A=[];function lt(T){if(T.samples>0){if(nt(T)===!1){const E=T.textures,N=T.width,G=T.height;let j=n.COLOR_BUFFER_BIT;const q=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Mt=i.get(T),ht=E.length>1;if(ht)for(let dt=0;dt<E.length;dt++)e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let dt=0;dt<E.length;dt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),ht){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[dt]);const ct=i.get(E[dt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ct,0)}n.blitFramebuffer(0,0,N,G,0,0,N,G,j,n.NEAREST),l===!0&&(O.length=0,A.length=0,O.push(n.COLOR_ATTACHMENT0+dt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(O.push(q),A.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,A)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,O))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ht)for(let dt=0;dt<E.length;dt++){e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[dt]);const ct=i.get(E[dt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,ct,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const E=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function tt(T){return Math.min(r.maxSamples,T.samples)}function nt(T){const E=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function it(T){const E=o.render.frame;c.get(T)!==E&&(c.set(T,E),T.update())}function ut(T,E){const N=T.colorSpace,G=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||N!==Zs&&N!==or&&(fe.getTransfer(N)===ye?(G!==ri||j!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),E}function et(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(u.width=T.naturalWidth||T.width,u.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(u.width=T.displayWidth,u.height=T.displayHeight):(u.width=T.width,u.height=T.height),u}this.allocateTextureUnit=F,this.resetTextureUnits=I,this.setTexture2D=Y,this.setTexture2DArray=W,this.setTexture3D=K,this.setTextureCube=V,this.rebindTextures=zt,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=at,this.useMultisampledRTT=nt}function C1(n,t){function e(i,r=or){let s;const o=fe.getTransfer(r);if(i===Yi)return n.UNSIGNED_BYTE;if(i===Bf)return n.UNSIGNED_SHORT_4_4_4_4;if(i===zf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===I_)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===D_)return n.BYTE;if(i===L_)return n.SHORT;if(i===Yo)return n.UNSIGNED_SHORT;if(i===Ff)return n.INT;if(i===ns)return n.UNSIGNED_INT;if(i===Bi)return n.FLOAT;if(i===Qo)return n.HALF_FLOAT;if(i===U_)return n.ALPHA;if(i===N_)return n.RGB;if(i===ri)return n.RGBA;if(i===O_)return n.LUMINANCE;if(i===F_)return n.LUMINANCE_ALPHA;if(i===Fs)return n.DEPTH_COMPONENT;if(i===js)return n.DEPTH_STENCIL;if(i===B_)return n.RED;if(i===kf)return n.RED_INTEGER;if(i===z_)return n.RG;if(i===Vf)return n.RG_INTEGER;if(i===Hf)return n.RGBA_INTEGER;if(i===Ga||i===Wa||i===Xa||i===qa)if(o===ye)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ga)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ga)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Su||i===Eu||i===Tu||i===bu)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Su)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Eu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Tu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===bu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Au||i===wu||i===Cu)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Au||i===wu)return o===ye?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Cu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ru||i===Pu||i===Du||i===Lu||i===Iu||i===Uu||i===Nu||i===Ou||i===Fu||i===Bu||i===zu||i===ku||i===Vu||i===Hu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ru)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Pu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Du)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Lu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Iu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Uu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ou)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ku)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Hu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ya||i===Gu||i===Wu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Ya)return o===ye?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===k_||i===Xu||i===qu||i===Yu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ya)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Xu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===qu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ks?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const R1={type:"move"};class Oc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $r,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $r,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $r,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(const g of t.hand.values()){const _=e.getJointPose(g,i),p=this._getHandJoint(u,g);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),d=.02,m=.005;u.inputState.pinching&&h>d+m?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&h<=d-m&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(R1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new $r;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const P1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,D1=`
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

}`;class L1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new mn,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new yr({vertexShader:P1,fragmentShader:D1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xe(new ni(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class I1 extends Qs{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,d=null,m=null;const g=new L1,_=e.getContextAttributes();let p=null,M=null;const x=[],v=[],b=new Ft;let w=null;const R=new Sn;R.viewport=new Se;const P=new Sn;P.viewport=new Se;const y=[R,P],S=new QM;let L=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(rt){let _t=x[rt];return _t===void 0&&(_t=new Oc,x[rt]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(rt){let _t=x[rt];return _t===void 0&&(_t=new Oc,x[rt]=_t),_t.getGripSpace()},this.getHand=function(rt){let _t=x[rt];return _t===void 0&&(_t=new Oc,x[rt]=_t),_t.getHandSpace()};function F(rt){const _t=v.indexOf(rt.inputSource);if(_t===-1)return;const at=x[_t];at!==void 0&&(at.update(rt.inputSource,rt.frame,u||o),at.dispatchEvent({type:rt.type,data:rt.inputSource}))}function X(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",Y);for(let rt=0;rt<x.length;rt++){const _t=v[rt];_t!==null&&(v[rt]=null,x[rt].disconnect(_t))}L=null,I=null,g.reset(),t.setRenderTarget(p),d=null,h=null,f=null,r=null,M=null,Qt.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(rt){s=rt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(rt){a=rt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(rt){u=rt},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(rt){if(r=rt,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",X),r.addEventListener("inputsourceschange",Y),_.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(b),r.renderState.layers===void 0){const _t={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,_t),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new is(d.framebufferWidth,d.framebufferHeight,{format:ri,type:Yi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let _t=null,at=null,pt=null;_.depth&&(pt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=_.stencil?js:Fs,at=_.stencil?Ks:ns);const wt={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:s};f=new XRWebGLBinding(r,e),h=f.createProjectionLayer(wt),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),M=new is(h.textureWidth,h.textureHeight,{format:ri,type:Yi,depthTexture:new Q_(h.textureWidth,h.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Qt.setContext(r),Qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Y(rt){for(let _t=0;_t<rt.removed.length;_t++){const at=rt.removed[_t],pt=v.indexOf(at);pt>=0&&(v[pt]=null,x[pt].disconnect(at))}for(let _t=0;_t<rt.added.length;_t++){const at=rt.added[_t];let pt=v.indexOf(at);if(pt===-1){for(let Dt=0;Dt<x.length;Dt++)if(Dt>=v.length){v.push(at),pt=Dt;break}else if(v[Dt]===null){v[Dt]=at,pt=Dt;break}if(pt===-1)break}const wt=x[pt];wt&&wt.connect(at)}}const W=new U,K=new U;function V(rt,_t,at){W.setFromMatrixPosition(_t.matrixWorld),K.setFromMatrixPosition(at.matrixWorld);const pt=W.distanceTo(K),wt=_t.projectionMatrix.elements,Dt=at.projectionMatrix.elements,zt=wt[14]/(wt[10]-1),ae=wt[14]/(wt[10]+1),D=(wt[9]+1)/wt[5],O=(wt[9]-1)/wt[5],A=(wt[8]-1)/wt[0],lt=(Dt[8]+1)/Dt[0],tt=zt*A,nt=zt*lt,it=pt/(-A+lt),ut=it*-A;if(_t.matrixWorld.decompose(rt.position,rt.quaternion,rt.scale),rt.translateX(ut),rt.translateZ(it),rt.matrixWorld.compose(rt.position,rt.quaternion,rt.scale),rt.matrixWorldInverse.copy(rt.matrixWorld).invert(),wt[10]===-1)rt.projectionMatrix.copy(_t.projectionMatrix),rt.projectionMatrixInverse.copy(_t.projectionMatrixInverse);else{const et=zt+it,T=ae+it,E=tt-ut,N=nt+(pt-ut),G=D*ae/T*et,j=O*ae/T*et;rt.projectionMatrix.makePerspective(E,N,G,j,et,T),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert()}}function vt(rt,_t){_t===null?rt.matrixWorld.copy(rt.matrix):rt.matrixWorld.multiplyMatrices(_t.matrixWorld,rt.matrix),rt.matrixWorldInverse.copy(rt.matrixWorld).invert()}this.updateCamera=function(rt){if(r===null)return;let _t=rt.near,at=rt.far;g.texture!==null&&(g.depthNear>0&&(_t=g.depthNear),g.depthFar>0&&(at=g.depthFar)),S.near=P.near=R.near=_t,S.far=P.far=R.far=at,(L!==S.near||I!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,I=S.far),R.layers.mask=rt.layers.mask|2,P.layers.mask=rt.layers.mask|4,S.layers.mask=R.layers.mask|P.layers.mask;const pt=rt.parent,wt=S.cameras;vt(S,pt);for(let Dt=0;Dt<wt.length;Dt++)vt(wt[Dt],pt);wt.length===2?V(S,R,P):S.projectionMatrix.copy(R.projectionMatrix),gt(rt,S,pt)};function gt(rt,_t,at){at===null?rt.matrix.copy(_t.matrixWorld):(rt.matrix.copy(at.matrixWorld),rt.matrix.invert(),rt.matrix.multiply(_t.matrixWorld)),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.updateMatrixWorld(!0),rt.projectionMatrix.copy(_t.projectionMatrix),rt.projectionMatrixInverse.copy(_t.projectionMatrixInverse),rt.isPerspectiveCamera&&(rt.fov=$u*2*Math.atan(1/rt.projectionMatrix.elements[5]),rt.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(rt){l=rt,h!==null&&(h.fixedFoveation=rt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=rt)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(S)};let St=null;function Lt(rt,_t){if(c=_t.getViewerPose(u||o),m=_t,c!==null){const at=c.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let pt=!1;at.length!==S.cameras.length&&(S.cameras.length=0,pt=!0);for(let Dt=0;Dt<at.length;Dt++){const zt=at[Dt];let ae=null;if(d!==null)ae=d.getViewport(zt);else{const O=f.getViewSubImage(h,zt);ae=O.viewport,Dt===0&&(t.setRenderTargetTextures(M,O.colorTexture,h.ignoreDepthValues?void 0:O.depthStencilTexture),t.setRenderTarget(M))}let D=y[Dt];D===void 0&&(D=new Sn,D.layers.enable(Dt),D.viewport=new Se,y[Dt]=D),D.matrix.fromArray(zt.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(zt.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(ae.x,ae.y,ae.width,ae.height),Dt===0&&(S.matrix.copy(D.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),pt===!0&&S.cameras.push(D)}const wt=r.enabledFeatures;if(wt&&wt.includes("depth-sensing")){const Dt=f.getDepthInformation(at[0]);Dt&&Dt.isValid&&Dt.texture&&g.init(t,Dt,r.renderState)}}for(let at=0;at<x.length;at++){const pt=v[at],wt=x[at];pt!==null&&wt!==void 0&&wt.update(pt,_t,u||o)}St&&St(rt,_t),_t.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_t}),m=null}const Qt=new og;Qt.setAnimationLoop(Lt),this.setAnimationLoop=function(rt){St=rt},this.dispose=function(){}}}const Nr=new Ei,U1=new we;function N1(n,t){function e(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function i(_,p){p.color.getRGB(_.fogColor.value,K_(n)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function r(_,p,M,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(_,p):p.isMeshToonMaterial?(s(_,p),f(_,p)):p.isMeshPhongMaterial?(s(_,p),c(_,p)):p.isMeshStandardMaterial?(s(_,p),h(_,p),p.isMeshPhysicalMaterial&&d(_,p,v)):p.isMeshMatcapMaterial?(s(_,p),m(_,p)):p.isMeshDepthMaterial?s(_,p):p.isMeshDistanceMaterial?(s(_,p),g(_,p)):p.isMeshNormalMaterial?s(_,p):p.isLineBasicMaterial?(o(_,p),p.isLineDashedMaterial&&a(_,p)):p.isPointsMaterial?l(_,p,M,x):p.isSpriteMaterial?u(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,e(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,e(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===Qe&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,e(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===Qe&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,e(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,e(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);const M=t.get(p),x=M.envMap,v=M.envMapRotation;x&&(_.envMap.value=x,Nr.copy(v),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),_.envMapRotation.value.setFromMatrix4(U1.makeRotationFromEuler(Nr)),_.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,_.aoMapTransform))}function o(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,e(p.map,_.mapTransform))}function a(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function l(_,p,M,x){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*M,_.scale.value=x*.5,p.map&&(_.map.value=p.map,e(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function u(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,e(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function c(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function f(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function h(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function d(_,p,M){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qe&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=M.texture,_.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,_.specularIntensityMapTransform))}function m(_,p){p.matcap&&(_.matcap.value=p.matcap)}function g(_,p){const M=t.get(p).light;_.referencePosition.value.setFromMatrixPosition(M.matrixWorld),_.nearDistance.value=M.shadow.camera.near,_.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function O1(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){const v=x.program;i.uniformBlockBinding(M,v)}function u(M,x){let v=r[M.id];v===void 0&&(m(M),v=c(M),r[M.id]=v,M.addEventListener("dispose",_));const b=x.program;i.updateUBOMapping(M,b);const w=t.render.frame;s[M.id]!==w&&(h(M),s[M.id]=w)}function c(M){const x=f();M.__bindingPointIndex=x;const v=n.createBuffer(),b=M.__size,w=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,b,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,v),v}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const x=r[M.id],v=M.uniforms,b=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let w=0,R=v.length;w<R;w++){const P=Array.isArray(v[w])?v[w]:[v[w]];for(let y=0,S=P.length;y<S;y++){const L=P[y];if(d(L,w,y,b)===!0){const I=L.__offset,F=Array.isArray(L.value)?L.value:[L.value];let X=0;for(let Y=0;Y<F.length;Y++){const W=F[Y],K=g(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,I+X,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,X),X+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,x,v,b){const w=M.value,R=x+"_"+v;if(b[R]===void 0)return typeof w=="number"||typeof w=="boolean"?b[R]=w:b[R]=w.clone(),!0;{const P=b[R];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return b[R]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function m(M){const x=M.uniforms;let v=0;const b=16;for(let R=0,P=x.length;R<P;R++){const y=Array.isArray(x[R])?x[R]:[x[R]];for(let S=0,L=y.length;S<L;S++){const I=y[S],F=Array.isArray(I.value)?I.value:[I.value];for(let X=0,Y=F.length;X<Y;X++){const W=F[X],K=g(W),V=v%b,vt=V%K.boundary,gt=V+vt;v+=vt,gt!==0&&b-gt<K.storage&&(v+=b-gt),I.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=v,v+=K.storage}}}const w=v%b;return w>0&&(v+=b-w),M.__size=v,M.__cache={},this}function g(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function _(M){const x=M.target;x.removeEventListener("dispose",_);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const M in r)n.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:u,dispose:p}}class fg{constructor(t={}){const{canvas:e=sM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const M=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wn,this.toneMapping=pr,this.toneMappingExposure=1;const v=this;let b=!1,w=0,R=0,P=null,y=-1,S=null;const L=new Se,I=new Se;let F=null;const X=new Zt(0);let Y=0,W=e.width,K=e.height,V=1,vt=null,gt=null;const St=new Se(0,0,W,K),Lt=new Se(0,0,W,K);let Qt=!1;const rt=new qf;let _t=!1,at=!1;const pt=new we,wt=new we,Dt=new U,zt=new Se,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let D=!1;function O(){return P===null?V:1}let A=i;function lt(C,k){return e.getContext(C,k)}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Of}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",Pt,!1),e.addEventListener("webglcontextcreationerror",B,!1),A===null){const k="webgl2";if(A=lt(k,C),A===null)throw lt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let tt,nt,it,ut,et,T,E,N,G,j,q,Mt,ht,dt,ct,st,xt,Ot,Ht,Et,Xt,Yt,de,z;function At(){tt=new qT(A),tt.init(),Yt=new C1(A,tt),nt=new kT(A,tt,t,Yt),it=new A1(A,tt),nt.reverseDepthBuffer&&h&&it.buffers.depth.setReversed(!0),ut=new KT(A),et=new d1,T=new w1(A,tt,it,et,nt,Yt,ut),E=new HT(v),N=new XT(v),G=new nS(A),de=new BT(A,G),j=new YT(A,G,ut,de),q=new ZT(A,j,G,ut),Ht=new jT(A,nt,T),st=new VT(et),Mt=new h1(v,E,N,tt,nt,de,st),ht=new N1(v,et),dt=new m1,ct=new M1(tt),Ot=new FT(v,E,N,it,q,d,l),xt=new T1(v,q,nt),z=new O1(A,ut,nt,it),Et=new zT(A,tt,ut),Xt=new $T(A,tt,ut),ut.programs=Mt.programs,v.capabilities=nt,v.extensions=tt,v.properties=et,v.renderLists=dt,v.shadowMap=xt,v.state=it,v.info=ut}At();const ot=new I1(v,A);this.xr=ot,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const C=tt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=tt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(C){C!==void 0&&(V=C,this.setSize(W,K,!1))},this.getSize=function(C){return C.set(W,K)},this.setSize=function(C,k,J=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=C,K=k,e.width=Math.floor(C*V),e.height=Math.floor(k*V),J===!0&&(e.style.width=C+"px",e.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(W*V,K*V).floor()},this.setDrawingBufferSize=function(C,k,J){W=C,K=k,V=J,e.width=Math.floor(C*J),e.height=Math.floor(k*J),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(L)},this.getViewport=function(C){return C.copy(St)},this.setViewport=function(C,k,J,Q){C.isVector4?St.set(C.x,C.y,C.z,C.w):St.set(C,k,J,Q),it.viewport(L.copy(St).multiplyScalar(V).round())},this.getScissor=function(C){return C.copy(Lt)},this.setScissor=function(C,k,J,Q){C.isVector4?Lt.set(C.x,C.y,C.z,C.w):Lt.set(C,k,J,Q),it.scissor(I.copy(Lt).multiplyScalar(V).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(C){it.setScissorTest(Qt=C)},this.setOpaqueSort=function(C){vt=C},this.setTransparentSort=function(C){gt=C},this.getClearColor=function(C){return C.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(C=!0,k=!0,J=!0){let Q=0;if(C){let H=!1;if(P!==null){const yt=P.texture.format;H=yt===Hf||yt===Vf||yt===kf}if(H){const yt=P.texture.type,Ct=yt===Yi||yt===ns||yt===Yo||yt===Ks||yt===Bf||yt===zf,It=Ot.getClearColor(),Nt=Ot.getClearAlpha(),qt=It.r,jt=It.g,kt=It.b;Ct?(m[0]=qt,m[1]=jt,m[2]=kt,m[3]=Nt,A.clearBufferuiv(A.COLOR,0,m)):(g[0]=qt,g[1]=jt,g[2]=kt,g[3]=Nt,A.clearBufferiv(A.COLOR,0,g))}else Q|=A.COLOR_BUFFER_BIT}k&&(Q|=A.DEPTH_BUFFER_BIT),J&&(Q|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",Pt,!1),e.removeEventListener("webglcontextcreationerror",B,!1),Ot.dispose(),dt.dispose(),ct.dispose(),et.dispose(),E.dispose(),N.dispose(),q.dispose(),de.dispose(),z.dispose(),Mt.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",Wt),ot.removeEventListener("sessionend",$t),Kt.stop()};function ft(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const C=ut.autoReset,k=xt.enabled,J=xt.autoUpdate,Q=xt.needsUpdate,H=xt.type;At(),ut.autoReset=C,xt.enabled=k,xt.autoUpdate=J,xt.needsUpdate=Q,xt.type=H}function B(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Z(C){const k=C.target;k.removeEventListener("dispose",Z),mt(k)}function mt(C){Tt(C),et.remove(C)}function Tt(C){const k=et.get(C).programs;k!==void 0&&(k.forEach(function(J){Mt.releaseProgram(J)}),C.isShaderMaterial&&Mt.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,J,Q,H,yt){k===null&&(k=ae);const Ct=H.isMesh&&H.matrixWorld.determinant()<0,It=dg(C,k,J,Q,H);it.setMaterial(Q,Ct);let Nt=J.index,qt=1;if(Q.wireframe===!0){if(Nt=j.getWireframeAttribute(J),Nt===void 0)return;qt=2}const jt=J.drawRange,kt=J.attributes.position;let ce=jt.start*qt,pe=(jt.start+jt.count)*qt;yt!==null&&(ce=Math.max(ce,yt.start*qt),pe=Math.min(pe,(yt.start+yt.count)*qt)),Nt!==null?(ce=Math.max(ce,0),pe=Math.min(pe,Nt.count)):kt!=null&&(ce=Math.max(ce,0),pe=Math.min(pe,kt.count));const ke=pe-ce;if(ke<0||ke===1/0)return;de.setup(H,Q,It,J,Nt);let Ue,ue=Et;if(Nt!==null&&(Ue=G.get(Nt),ue=Xt,ue.setIndex(Ue)),H.isMesh)Q.wireframe===!0?(it.setLineWidth(Q.wireframeLinewidth*O()),ue.setMode(A.LINES)):ue.setMode(A.TRIANGLES);else if(H.isLine){let Vt=Q.linewidth;Vt===void 0&&(Vt=1),it.setLineWidth(Vt*O()),H.isLineSegments?ue.setMode(A.LINES):H.isLineLoop?ue.setMode(A.LINE_LOOP):ue.setMode(A.LINE_STRIP)}else H.isPoints?ue.setMode(A.POINTS):H.isSprite&&ue.setMode(A.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)ue.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))ue.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Vt=H._multiDrawStarts,je=H._multiDrawCounts,me=H._multiDrawCount,Zn=Nt?G.get(Nt).bytesPerElement:1,os=et.get(Q).currentProgram.getUniforms();for(let Cn=0;Cn<me;Cn++)os.setValue(A,"_gl_DrawID",Cn),ue.render(Vt[Cn]/Zn,je[Cn])}else if(H.isInstancedMesh)ue.renderInstances(ce,ke,H.count);else if(J.isInstancedBufferGeometry){const Vt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,je=Math.min(J.instanceCount,Vt);ue.renderInstances(ce,ke,je)}else ue.render(ce,ke)};function Ut(C,k,J){C.transparent===!0&&C.side===Ze&&C.forceSinglePass===!1?(C.side=Qe,C.needsUpdate=!0,sa(C,k,J),C.side=qi,C.needsUpdate=!0,sa(C,k,J),C.side=Ze):sa(C,k,J)}this.compile=function(C,k,J=null){J===null&&(J=C),p=ct.get(J),p.init(k),x.push(p),J.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),C!==J&&C.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const Q=new Set;return C.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const yt=H.material;if(yt)if(Array.isArray(yt))for(let Ct=0;Ct<yt.length;Ct++){const It=yt[Ct];Ut(It,J,H),Q.add(It)}else Ut(yt,J,H),Q.add(yt)}),x.pop(),p=null,Q},this.compileAsync=function(C,k,J=null){const Q=this.compile(C,k,J);return new Promise(H=>{function yt(){if(Q.forEach(function(Ct){et.get(Ct).currentProgram.isReady()&&Q.delete(Ct)}),Q.size===0){H(C);return}setTimeout(yt,10)}tt.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let ve=null;function ie(C){ve&&ve(C)}function Wt(){Kt.stop()}function $t(){Kt.start()}const Kt=new og;Kt.setAnimationLoop(ie),typeof self<"u"&&Kt.setContext(self),this.setAnimationLoop=function(C){ve=C,ot.setAnimationLoop(C),C===null?Kt.stop():Kt.start()},ot.addEventListener("sessionstart",Wt),ot.addEventListener("sessionend",$t),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(k),k=ot.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,k,P),p=ct.get(C,x.length),p.init(k),x.push(p),wt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),rt.setFromProjectionMatrix(wt),at=this.localClippingEnabled,_t=st.init(this.clippingPlanes,at),_=dt.get(C,M.length),_.init(),M.push(_),ot.enabled===!0&&ot.isPresenting===!0){const yt=v.xr.getDepthSensingMesh();yt!==null&&ci(yt,k,-1/0,v.sortObjects)}ci(C,k,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(vt,gt),D=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,D&&Ot.addToRenderList(_,C),this.info.render.frame++,_t===!0&&st.beginShadows();const J=p.state.shadowsArray;xt.render(J,C,k),_t===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=_.opaque,H=_.transmissive;if(p.setupLights(),k.isArrayCamera){const yt=k.cameras;if(H.length>0)for(let Ct=0,It=yt.length;Ct<It;Ct++){const Nt=yt[Ct];ra(Q,H,C,Nt)}D&&Ot.render(C);for(let Ct=0,It=yt.length;Ct<It;Ct++){const Nt=yt[Ct];jn(_,C,Nt,Nt.viewport)}}else H.length>0&&ra(Q,H,C,k),D&&Ot.render(C),jn(_,C,k);P!==null&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),C.isScene===!0&&C.onAfterRender(v,C,k),de.resetDefaultState(),y=-1,S=null,x.pop(),x.length>0?(p=x[x.length-1],_t===!0&&st.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?_=M[M.length-1]:_=null};function ci(C,k,J,Q){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)J=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||rt.intersectsSprite(C)){Q&&zt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(wt);const Ct=q.update(C),It=C.material;It.visible&&_.push(C,Ct,It,J,zt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||rt.intersectsObject(C))){const Ct=q.update(C),It=C.material;if(Q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),zt.copy(C.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),zt.copy(Ct.boundingSphere.center)),zt.applyMatrix4(C.matrixWorld).applyMatrix4(wt)),Array.isArray(It)){const Nt=Ct.groups;for(let qt=0,jt=Nt.length;qt<jt;qt++){const kt=Nt[qt],ce=It[kt.materialIndex];ce&&ce.visible&&_.push(C,Ct,ce,J,zt.z,kt)}}else It.visible&&_.push(C,Ct,It,J,zt.z,null)}}const yt=C.children;for(let Ct=0,It=yt.length;Ct<It;Ct++)ci(yt[Ct],k,J,Q)}function jn(C,k,J,Q){const H=C.opaque,yt=C.transmissive,Ct=C.transparent;p.setupLightsView(J),_t===!0&&st.setGlobalState(v.clippingPlanes,J),Q&&it.viewport(L.copy(Q)),H.length>0&&Sr(H,k,J),yt.length>0&&Sr(yt,k,J),Ct.length>0&&Sr(Ct,k,J),it.buffers.depth.setTest(!0),it.buffers.depth.setMask(!0),it.buffers.color.setMask(!0),it.setPolygonOffset(!1)}function ra(C,k,J,Q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Q.id]===void 0&&(p.state.transmissionRenderTarget[Q.id]=new is(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?Qo:Yi,minFilter:Yr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:fe.workingColorSpace}));const yt=p.state.transmissionRenderTarget[Q.id],Ct=Q.viewport||L;yt.setSize(Ct.z,Ct.w);const It=v.getRenderTarget();v.setRenderTarget(yt),v.getClearColor(X),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),D&&Ot.render(J);const Nt=v.toneMapping;v.toneMapping=pr;const qt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),p.setupLightsView(Q),_t===!0&&st.setGlobalState(v.clippingPlanes,Q),Sr(C,J,Q),T.updateMultisampleRenderTarget(yt),T.updateRenderTargetMipmap(yt),tt.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let kt=0,ce=k.length;kt<ce;kt++){const pe=k[kt],ke=pe.object,Ue=pe.geometry,ue=pe.material,Vt=pe.group;if(ue.side===Ze&&ke.layers.test(Q.layers)){const je=ue.side;ue.side=Qe,ue.needsUpdate=!0,eh(ke,J,Q,Ue,ue,Vt),ue.side=je,ue.needsUpdate=!0,jt=!0}}jt===!0&&(T.updateMultisampleRenderTarget(yt),T.updateRenderTargetMipmap(yt))}v.setRenderTarget(It),v.setClearColor(X,Y),qt!==void 0&&(Q.viewport=qt),v.toneMapping=Nt}function Sr(C,k,J){const Q=k.isScene===!0?k.overrideMaterial:null;for(let H=0,yt=C.length;H<yt;H++){const Ct=C[H],It=Ct.object,Nt=Ct.geometry,qt=Q===null?Ct.material:Q,jt=Ct.group;It.layers.test(J.layers)&&eh(It,k,J,Nt,qt,jt)}}function eh(C,k,J,Q,H,yt){C.onBeforeRender(v,k,J,Q,H,yt),C.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),H.onBeforeRender(v,k,J,Q,C,yt),H.transparent===!0&&H.side===Ze&&H.forceSinglePass===!1?(H.side=Qe,H.needsUpdate=!0,v.renderBufferDirect(J,k,Q,H,C,yt),H.side=qi,H.needsUpdate=!0,v.renderBufferDirect(J,k,Q,H,C,yt),H.side=Ze):v.renderBufferDirect(J,k,Q,H,C,yt),C.onAfterRender(v,k,J,Q,H,yt)}function sa(C,k,J){k.isScene!==!0&&(k=ae);const Q=et.get(C),H=p.state.lights,yt=p.state.shadowsArray,Ct=H.state.version,It=Mt.getParameters(C,H.state,yt,k,J),Nt=Mt.getProgramCacheKey(It);let qt=Q.programs;Q.environment=C.isMeshStandardMaterial?k.environment:null,Q.fog=k.fog,Q.envMap=(C.isMeshStandardMaterial?N:E).get(C.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&C.envMap===null?k.environmentRotation:C.envMapRotation,qt===void 0&&(C.addEventListener("dispose",Z),qt=new Map,Q.programs=qt);let jt=qt.get(Nt);if(jt!==void 0){if(Q.currentProgram===jt&&Q.lightsStateVersion===Ct)return ih(C,It),jt}else It.uniforms=Mt.getUniforms(C),C.onBeforeCompile(It,v),jt=Mt.acquireProgram(It,Nt),qt.set(Nt,jt),Q.uniforms=It.uniforms;const kt=Q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(kt.clippingPlanes=st.uniform),ih(C,It),Q.needsLights=mg(C),Q.lightsStateVersion=Ct,Q.needsLights&&(kt.ambientLightColor.value=H.state.ambient,kt.lightProbe.value=H.state.probe,kt.directionalLights.value=H.state.directional,kt.directionalLightShadows.value=H.state.directionalShadow,kt.spotLights.value=H.state.spot,kt.spotLightShadows.value=H.state.spotShadow,kt.rectAreaLights.value=H.state.rectArea,kt.ltc_1.value=H.state.rectAreaLTC1,kt.ltc_2.value=H.state.rectAreaLTC2,kt.pointLights.value=H.state.point,kt.pointLightShadows.value=H.state.pointShadow,kt.hemisphereLights.value=H.state.hemi,kt.directionalShadowMap.value=H.state.directionalShadowMap,kt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,kt.spotShadowMap.value=H.state.spotShadowMap,kt.spotLightMatrix.value=H.state.spotLightMatrix,kt.spotLightMap.value=H.state.spotLightMap,kt.pointShadowMap.value=H.state.pointShadowMap,kt.pointShadowMatrix.value=H.state.pointShadowMatrix),Q.currentProgram=jt,Q.uniformsList=null,jt}function nh(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=$a.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function ih(C,k){const J=et.get(C);J.outputColorSpace=k.outputColorSpace,J.batching=k.batching,J.batchingColor=k.batchingColor,J.instancing=k.instancing,J.instancingColor=k.instancingColor,J.instancingMorph=k.instancingMorph,J.skinning=k.skinning,J.morphTargets=k.morphTargets,J.morphNormals=k.morphNormals,J.morphColors=k.morphColors,J.morphTargetsCount=k.morphTargetsCount,J.numClippingPlanes=k.numClippingPlanes,J.numIntersection=k.numClipIntersection,J.vertexAlphas=k.vertexAlphas,J.vertexTangents=k.vertexTangents,J.toneMapping=k.toneMapping}function dg(C,k,J,Q,H){k.isScene!==!0&&(k=ae),T.resetTextureUnits();const yt=k.fog,Ct=Q.isMeshStandardMaterial?k.environment:null,It=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Zs,Nt=(Q.isMeshStandardMaterial?N:E).get(Q.envMap||Ct),qt=Q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,jt=!!J.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),kt=!!J.morphAttributes.position,ce=!!J.morphAttributes.normal,pe=!!J.morphAttributes.color;let ke=pr;Q.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ke=v.toneMapping);const Ue=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ue=Ue!==void 0?Ue.length:0,Vt=et.get(Q),je=p.state.lights;if(_t===!0&&(at===!0||C!==S)){const ln=C===S&&Q.id===y;st.setState(Q,C,ln)}let me=!1;Q.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==je.state.version||Vt.outputColorSpace!==It||H.isBatchedMesh&&Vt.batching===!1||!H.isBatchedMesh&&Vt.batching===!0||H.isBatchedMesh&&Vt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Vt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Vt.instancing===!1||!H.isInstancedMesh&&Vt.instancing===!0||H.isSkinnedMesh&&Vt.skinning===!1||!H.isSkinnedMesh&&Vt.skinning===!0||H.isInstancedMesh&&Vt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Vt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Vt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Vt.instancingMorph===!1&&H.morphTexture!==null||Vt.envMap!==Nt||Q.fog===!0&&Vt.fog!==yt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==st.numPlanes||Vt.numIntersection!==st.numIntersection)||Vt.vertexAlphas!==qt||Vt.vertexTangents!==jt||Vt.morphTargets!==kt||Vt.morphNormals!==ce||Vt.morphColors!==pe||Vt.toneMapping!==ke||Vt.morphTargetsCount!==ue)&&(me=!0):(me=!0,Vt.__version=Q.version);let Zn=Vt.currentProgram;me===!0&&(Zn=sa(Q,k,H));let os=!1,Cn=!1,no=!1;const Ce=Zn.getUniforms(),zn=Vt.uniforms;if(it.useProgram(Zn.program)&&(os=!0,Cn=!0,no=!0),Q.id!==y&&(y=Q.id,Cn=!0),os||S!==C){it.buffers.depth.getReversed()?(pt.copy(C.projectionMatrix),aM(pt),lM(pt),Ce.setValue(A,"projectionMatrix",pt)):Ce.setValue(A,"projectionMatrix",C.projectionMatrix),Ce.setValue(A,"viewMatrix",C.matrixWorldInverse);const gn=Ce.map.cameraPosition;gn!==void 0&&gn.setValue(A,Dt.setFromMatrixPosition(C.matrixWorld)),nt.logarithmicDepthBuffer&&Ce.setValue(A,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Ce.setValue(A,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,Cn=!0,no=!0)}if(H.isSkinnedMesh){Ce.setOptional(A,H,"bindMatrix"),Ce.setOptional(A,H,"bindMatrixInverse");const ln=H.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Ce.setValue(A,"boneTexture",ln.boneTexture,T))}H.isBatchedMesh&&(Ce.setOptional(A,H,"batchingTexture"),Ce.setValue(A,"batchingTexture",H._matricesTexture,T),Ce.setOptional(A,H,"batchingIdTexture"),Ce.setValue(A,"batchingIdTexture",H._indirectTexture,T),Ce.setOptional(A,H,"batchingColorTexture"),H._colorsTexture!==null&&Ce.setValue(A,"batchingColorTexture",H._colorsTexture,T));const kn=J.morphAttributes;if((kn.position!==void 0||kn.normal!==void 0||kn.color!==void 0)&&Ht.update(H,J,Zn),(Cn||Vt.receiveShadow!==H.receiveShadow)&&(Vt.receiveShadow=H.receiveShadow,Ce.setValue(A,"receiveShadow",H.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(zn.envMap.value=Nt,zn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&k.environment!==null&&(zn.envMapIntensity.value=k.environmentIntensity),Cn&&(Ce.setValue(A,"toneMappingExposure",v.toneMappingExposure),Vt.needsLights&&pg(zn,no),yt&&Q.fog===!0&&ht.refreshFogUniforms(zn,yt),ht.refreshMaterialUniforms(zn,Q,V,K,p.state.transmissionRenderTarget[C.id]),$a.upload(A,nh(Vt),zn,T)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&($a.upload(A,nh(Vt),zn,T),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Ce.setValue(A,"center",H.center),Ce.setValue(A,"modelViewMatrix",H.modelViewMatrix),Ce.setValue(A,"normalMatrix",H.normalMatrix),Ce.setValue(A,"modelMatrix",H.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const ln=Q.uniformsGroups;for(let gn=0,Ll=ln.length;gn<Ll;gn++){const Er=ln[gn];z.update(Er,Zn),z.bind(Er,Zn)}}return Zn}function pg(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function mg(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(C,k,J){et.get(C.texture).__webglTexture=k,et.get(C.depthTexture).__webglTexture=J;const Q=et.get(C);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=J===void 0,Q.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,k){const J=et.get(C);J.__webglFramebuffer=k,J.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(C,k=0,J=0){P=C,w=k,R=J;let Q=!0,H=null,yt=!1,Ct=!1;if(C){const Nt=et.get(C);if(Nt.__useDefaultFramebuffer!==void 0)it.bindFramebuffer(A.FRAMEBUFFER,null),Q=!1;else if(Nt.__webglFramebuffer===void 0)T.setupRenderTarget(C);else if(Nt.__hasExternalTextures)T.rebindTextures(C,et.get(C.texture).__webglTexture,et.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const kt=C.depthTexture;if(Nt.__boundDepthTexture!==kt){if(kt!==null&&et.has(kt)&&(C.width!==kt.image.width||C.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(C)}}const qt=C.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Ct=!0);const jt=et.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(jt[k])?H=jt[k][J]:H=jt[k],yt=!0):C.samples>0&&T.useMultisampledRTT(C)===!1?H=et.get(C).__webglMultisampledFramebuffer:Array.isArray(jt)?H=jt[J]:H=jt,L.copy(C.viewport),I.copy(C.scissor),F=C.scissorTest}else L.copy(St).multiplyScalar(V).floor(),I.copy(Lt).multiplyScalar(V).floor(),F=Qt;if(it.bindFramebuffer(A.FRAMEBUFFER,H)&&Q&&it.drawBuffers(C,H),it.viewport(L),it.scissor(I),it.setScissorTest(F),yt){const Nt=et.get(C.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+k,Nt.__webglTexture,J)}else if(Ct){const Nt=et.get(C.texture),qt=k||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,Nt.__webglTexture,J||0,qt)}y=-1},this.readRenderTargetPixels=function(C,k,J,Q,H,yt,Ct){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=et.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ct!==void 0&&(It=It[Ct]),It){it.bindFramebuffer(A.FRAMEBUFFER,It);try{const Nt=C.texture,qt=Nt.format,jt=Nt.type;if(!nt.textureFormatReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-Q&&J>=0&&J<=C.height-H&&A.readPixels(k,J,Q,H,Yt.convert(qt),Yt.convert(jt),yt)}finally{const Nt=P!==null?et.get(P).__webglFramebuffer:null;it.bindFramebuffer(A.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(C,k,J,Q,H,yt,Ct){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=et.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ct!==void 0&&(It=It[Ct]),It){const Nt=C.texture,qt=Nt.format,jt=Nt.type;if(!nt.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=C.width-Q&&J>=0&&J<=C.height-H){it.bindFramebuffer(A.FRAMEBUFFER,It);const kt=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,kt),A.bufferData(A.PIXEL_PACK_BUFFER,yt.byteLength,A.STREAM_READ),A.readPixels(k,J,Q,H,Yt.convert(qt),Yt.convert(jt),0);const ce=P!==null?et.get(P).__webglFramebuffer:null;it.bindFramebuffer(A.FRAMEBUFFER,ce);const pe=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await oM(A,pe,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,kt),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,yt),A.deleteBuffer(kt),A.deleteSync(pe),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,k=null,J=0){C.isTexture!==!0&&(bs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,C=arguments[1]);const Q=Math.pow(2,-J),H=Math.floor(C.image.width*Q),yt=Math.floor(C.image.height*Q),Ct=k!==null?k.x:0,It=k!==null?k.y:0;T.setTexture2D(C,0),A.copyTexSubImage2D(A.TEXTURE_2D,J,0,0,Ct,It,H,yt),it.unbindTexture()};const _g=A.createFramebuffer(),gg=A.createFramebuffer();this.copyTextureToTexture=function(C,k,J=null,Q=null,H=0,yt=null){C.isTexture!==!0&&(bs("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,C=arguments[1],k=arguments[2],yt=arguments[3]||0,J=null),yt===null&&(H!==0?(bs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),yt=H,H=0):yt=0);let Ct,It,Nt,qt,jt,kt,ce,pe,ke;const Ue=C.isCompressedTexture?C.mipmaps[yt]:C.image;if(J!==null)Ct=J.max.x-J.min.x,It=J.max.y-J.min.y,Nt=J.isBox3?J.max.z-J.min.z:1,qt=J.min.x,jt=J.min.y,kt=J.isBox3?J.min.z:0;else{const kn=Math.pow(2,-H);Ct=Math.floor(Ue.width*kn),It=Math.floor(Ue.height*kn),C.isDataArrayTexture?Nt=Ue.depth:C.isData3DTexture?Nt=Math.floor(Ue.depth*kn):Nt=1,qt=0,jt=0,kt=0}Q!==null?(ce=Q.x,pe=Q.y,ke=Q.z):(ce=0,pe=0,ke=0);const ue=Yt.convert(k.format),Vt=Yt.convert(k.type);let je;k.isData3DTexture?(T.setTexture3D(k,0),je=A.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(T.setTexture2DArray(k,0),je=A.TEXTURE_2D_ARRAY):(T.setTexture2D(k,0),je=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,k.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,k.unpackAlignment);const me=A.getParameter(A.UNPACK_ROW_LENGTH),Zn=A.getParameter(A.UNPACK_IMAGE_HEIGHT),os=A.getParameter(A.UNPACK_SKIP_PIXELS),Cn=A.getParameter(A.UNPACK_SKIP_ROWS),no=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,Ue.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Ue.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,qt),A.pixelStorei(A.UNPACK_SKIP_ROWS,jt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,kt);const Ce=C.isDataArrayTexture||C.isData3DTexture,zn=k.isDataArrayTexture||k.isData3DTexture;if(C.isDepthTexture){const kn=et.get(C),ln=et.get(k),gn=et.get(kn.__renderTarget),Ll=et.get(ln.__renderTarget);it.bindFramebuffer(A.READ_FRAMEBUFFER,gn.__webglFramebuffer),it.bindFramebuffer(A.DRAW_FRAMEBUFFER,Ll.__webglFramebuffer);for(let Er=0;Er<Nt;Er++)Ce&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,et.get(C).__webglTexture,H,kt+Er),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,et.get(k).__webglTexture,yt,ke+Er)),A.blitFramebuffer(qt,jt,Ct,It,ce,pe,Ct,It,A.DEPTH_BUFFER_BIT,A.NEAREST);it.bindFramebuffer(A.READ_FRAMEBUFFER,null),it.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(H!==0||C.isRenderTargetTexture||et.has(C)){const kn=et.get(C),ln=et.get(k);it.bindFramebuffer(A.READ_FRAMEBUFFER,_g),it.bindFramebuffer(A.DRAW_FRAMEBUFFER,gg);for(let gn=0;gn<Nt;gn++)Ce?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,kn.__webglTexture,H,kt+gn):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,kn.__webglTexture,H),zn?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ln.__webglTexture,yt,ke+gn):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,ln.__webglTexture,yt),H!==0?A.blitFramebuffer(qt,jt,Ct,It,ce,pe,Ct,It,A.COLOR_BUFFER_BIT,A.NEAREST):zn?A.copyTexSubImage3D(je,yt,ce,pe,ke+gn,qt,jt,Ct,It):A.copyTexSubImage2D(je,yt,ce,pe,qt,jt,Ct,It);it.bindFramebuffer(A.READ_FRAMEBUFFER,null),it.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else zn?C.isDataTexture||C.isData3DTexture?A.texSubImage3D(je,yt,ce,pe,ke,Ct,It,Nt,ue,Vt,Ue.data):k.isCompressedArrayTexture?A.compressedTexSubImage3D(je,yt,ce,pe,ke,Ct,It,Nt,ue,Ue.data):A.texSubImage3D(je,yt,ce,pe,ke,Ct,It,Nt,ue,Vt,Ue):C.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,yt,ce,pe,Ct,It,ue,Vt,Ue.data):C.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,yt,ce,pe,Ue.width,Ue.height,ue,Ue.data):A.texSubImage2D(A.TEXTURE_2D,yt,ce,pe,Ct,It,ue,Vt,Ue);A.pixelStorei(A.UNPACK_ROW_LENGTH,me),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Zn),A.pixelStorei(A.UNPACK_SKIP_PIXELS,os),A.pixelStorei(A.UNPACK_SKIP_ROWS,Cn),A.pixelStorei(A.UNPACK_SKIP_IMAGES,no),yt===0&&k.generateMipmaps&&A.generateMipmap(je),it.unbindTexture()},this.copyTextureToTexture3D=function(C,k,J=null,Q=null,H=0){return C.isTexture!==!0&&(bs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,Q=arguments[1]||null,C=arguments[2],k=arguments[3],H=arguments[4]||0),bs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,k,J,Q,H)},this.initRenderTarget=function(C){et.get(C).__webglFramebuffer===void 0&&T.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?T.setTextureCube(C,0):C.isData3DTexture?T.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?T.setTexture2DArray(C,0):T.setTexture2D(C,0),it.unbindTexture()},this.resetState=function(){w=0,R=0,P=null,it.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=fe._getDrawingBufferColorSpace(t),e.unpackColorSpace=fe._getUnpackColorSpace()}}function F1(n){const t=Me([]);let e,i,r,s=new Ft,o=new Ft;const a=()=>{e=new J_,i=new Sn(55,window.innerWidth/window.innerHeight,.1,1e3),i.position.z=6,n.value&&(r=new fg({canvas:n.value,antialias:!0,alpha:!1}),r.setClearColor(328965,1),r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(window.devicePixelRatio),r.sortObjects=!0)},l=d=>{const m=document.createElement("canvas");m.width=1600,m.height=Math.round(m.width/d.aspect);const g=m.getContext("2d");if(!g)return new Ld(m);g.fillStyle="#050505",g.fillRect(0,0,m.width,m.height),g.strokeStyle="rgba(255,255,255,0.86)",g.lineWidth=6,g.strokeRect(28,28,m.width-56,m.height-56),g.strokeStyle=d.accent,g.lineWidth=2,g.setLineDash([18,14]),g.strokeRect(58,58,m.width-116,m.height-116),g.setLineDash([]),g.fillStyle="rgba(255,255,255,0.08)";for(let p=0;p<5;p+=1)g.fillRect(88,140+p*36,m.width-176,10);g.fillStyle="#ffffff",g.font='700 110px "Space Mono", monospace',g.fillText(d.title,88,210),g.fillStyle="rgba(255,255,255,0.78)",g.font='500 44px "Space Mono", monospace',g.fillText(d.subtitle,88,288),g.fillStyle="rgba(255,255,255,0.62)",g.font='400 32px "Space Mono", monospace',g.fillText(`LAYER / ${d.name.toUpperCase()} / DEPTH ${d.depth}`,88,m.height-118),g.fillText("BLACK MATTE PLACEHOLDER / REPLACE WITH KEY CG ASSET",88,m.height-72);const _=new Ld(m);return _.needsUpdate=!0,_},u=()=>{[{depth:-2,scale:6.1,name:"sky",title:"SKYFOLD MATTE",subtitle:"天幕底片 / 高空异象保留位",aspect:1.7777777777777777,accent:"rgba(255, 231, 178, 0.92)"},{depth:-.4,scale:4.6,name:"boy",title:"SCALE FIGURE",subtitle:"远景尺度参照 / 人类尺寸锚点",aspect:.8,accent:"rgba(144, 214, 255, 0.9)"},{depth:1.1,scale:3.9,name:"woman",title:"HERO SILHOUETTE",subtitle:"主角剪影保留位 / 第一眼情绪层",aspect:.8,accent:"rgba(255, 216, 143, 0.92)"},{depth:2.5,scale:5.3,name:"grass",title:"WIND FOREGROUND",subtitle:"前景风场 / 速度线与遮挡层",aspect:2.3333333333333335,accent:"rgba(255, 255, 255, 0.9)"}].forEach((m,g)=>{const _=l(m),p=new ni(m.aspect*m.scale,m.scale),M=new We({map:_,transparent:!1,side:Ze,color:new Zt(1,1,1),depthWrite:!0}),x=new xe(p,M);x.position.set(0,0,m.depth),x.userData.name=m.name,x.renderOrder=-m.depth,x.position.x=g%2===0?-15:15,x.rotation.y=g%2===0?-Math.PI/4:Math.PI/4,x.material.opacity=0,e&&e.add(x),t.value.push(x),ne.to(x.position,{x:0,duration:1.5,delay:g*.3,ease:"power3.out"}),ne.to(x.rotation,{y:0,duration:1.5,delay:g*.3,ease:"power2.out"}),ne.to(x.material,{opacity:1,duration:1,delay:g*.3+.5,ease:"power2.inOut"})})},c=()=>{requestAnimationFrame(c),s.x+=(o.x-s.x)*.08,s.y+=(o.y-s.y)*.08,t.value.forEach(_=>{const p=_.position.z*.5;_.position.x=s.x*p,_.position.y=-s.y*p});const d=t.value.find(_=>_.userData.name==="grass");d&&(d.rotation.z=Math.sin(Date.now()*.001)*.02);const m=t.value.find(_=>_.userData.name==="woman");m&&(m.rotation.z=Math.sin(Date.now()*8e-4)*.015);const g=t.value.find(_=>_.userData.name==="sky");g&&(g.position.x+=Math.sin(Date.now()*3e-4)*.001),r&&e&&i&&r.render(e,i)};return{initScene:a,loadLayers:u,animate:c,onResize:()=>{!i||!r||(i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight))},updateMouseTarget:d=>{o.x=d.clientX/window.innerWidth-.5,o.y=d.clientY/window.innerHeight-.5},layers:t,scene:e,camera:i,renderer:r,mouse:s,targetMouse:o}}function B1(n,t,e,i,r){return{onMouseMove:u=>{},onClick:u=>{const c=new sg,f=new Ft;f.x=u.clientX/window.innerWidth*2-1,f.y=-(u.clientY/window.innerHeight)*2+1,c.setFromCamera(f,r);const h=c.intersectObjects(i.value);if(h.length>0){const d=h[0].object,m=d.userData.name;ne.timeline().to(d.scale,{x:1.1,y:1.1,z:1.1,duration:.2,ease:"power2.out"}).to(d.scale,{x:1,y:1,z:1,duration:.3,ease:"elastic.out(1, 0.5)"}),ne.timeline().to(d.rotation,{z:Math.random()>.5?.1:-.1,duration:.2,ease:"power1.out"}).to(d.rotation,{z:0,duration:.4,ease:"elastic.out(1, 0.3)"});const g={woman:"展签 01 / 前景人物层。用于建立主视觉的第一眼情绪和风向。正式 CG 中她会被替换成进入 WERISS 的现场角色。",boy:"展签 02 / 远景陪体层。这个位置负责提供尺度参照，让山体和天空的压迫感有了可比较的人类尺寸。",grass:"展签 03 / 前景风场层。它不只是草，而是镜头前方的速度线。风一旦成立，整个画面就开始有叙事。",sky:"展签 04 / 天幕底片层。后续会叠加红脊、极光磁暴或 skyfold 光带，这里是所有关键 CG 的情绪起点。"};g[m]&&(t.value=g[m])}},startExplore:()=>{n.value=!0,ne.timeline().to(r.position,{z:5.5,duration:2,ease:"power2.inOut"}).to(r.rotation,{z:.02,duration:.5,ease:"power1.inOut",yoyo:!0,repeat:1},"-=1");const u=i.value.find(c=>c.userData.name==="grass");u&&ne.timeline().to(u.scale,{x:.7,y:.7,z:.7,duration:2,ease:"power2.inOut"}).to(u.position,{y:.5,duration:2,ease:"power2.inOut"},"-=2"),i.value.forEach((c,f)=>{c.userData.name!=="grass"&&ne.to(c.position,{y:c.position.y+(Math.random()-.5)*.3,duration:2,ease:"power1.inOut",delay:f*.1})})},toggleGrayscale:()=>{e.value=!e.value,i.value.forEach((u,c)=>{const f=u.material;ne.to(f.color,{r:e.value?.3:1,g:e.value?.3:1,b:e.value?.3:1,duration:1.5,delay:c*.1,ease:"power2.inOut"}),e.value?ne.to(u.rotation,{z:(Math.random()-.5)*.05,duration:1,delay:c*.1,ease:"power1.inOut"}):ne.to(u.rotation,{z:0,duration:1,delay:c*.1,ease:"power1.inOut"})})}}}const z1={class:"page-monet"},k1={class:"glass-card"},V1={class:"handwriting"},H1={class:"story-tree"},G1={class:"story-node-head"},W1={class:"story-node-id"},X1={class:"story-node-type"},q1={class:"story-trigger"},Y1={class:"story-branches"},$1={class:"control-group"},K1={__name:"MonetView",setup(n){const t=Me(null),e=Me(!1),i=Me(null),r=Me(!1),s=Me(1),o=[{id:"Ω-01",type:"OPENING",title:"红脊初判",summary:"第一道建议窗口，建立玩家与 NIA-7 的关系，也决定第一轮风险基调。",trigger:"看到逆风红光后，判断是先保视野、先逼近，还是先校准。",tone:"neutral",paths:[{label:"高处确认",outcome:"信任上升，进入更稳的观测线。"},{label:"继续逼近",outcome:"真相推进更快，但风险同步上升。"},{label:"校准传感器",outcome:"获得更多参数，为后续失真节点减压。"}]},{id:"Ψ-02",type:"PRESSURE",title:"发光雾墙",summary:"第一轮强压分支点，决定你是优先抢画面，还是保链路。",trigger:"雾墙压进峡谷时，必须在穿越、后撤和绕掩体之间二选一。",tone:"danger",paths:[{label:"穿越雾墙",outcome:"触发更深层画面，进入裂缝线。"},{label:"后撤保链",outcome:"维持稳定，为安全回返线蓄力。"},{label:"横移找掩体",outcome:"保留中间态，可继续观测也可转撤离。"}]},{id:"Δ-03",type:"DISCOVERY",title:"蓝裂口",summary:"故事第一次从山表转向山体内部，视觉与叙事尺度一起下沉。",trigger:"雪坡断裂后，是否下到裂口内部，是求真线的核心触发契机。",tone:"reveal",paths:[{label:"沿边缘前进",outcome:"保住生路线，但错过深部真相。"},{label:"直接下行",outcome:"进入深层空间与更强的镜头奇观。"},{label:"先放探针",outcome:"以更稳的方式拿到异常证据。"}]},{id:"Λ-04",type:"DISTORTION",title:"双地图失真",summary:"现实与回响地图同时存在，玩家开始为“哪一层才是真的”负责。",trigger:"磁暴到来时，旧地图、脚下坡度和 HUD 各自给出不同方向。",tone:"danger",paths:[{label:"盲走脚下地形",outcome:"偏生还，减少误导。"},{label:"锁旧地图",outcome:"更逼近真相，但现实变薄。"},{label:"切掉辅助层",outcome:"保链路但失去部分视野。"}]},{id:"X-05",type:"ENDING",title:"天穹展开 / 最终决断",summary:"最后一次建议窗口，所有前序选择在这里收束为结局。",trigger:"高空展开后，决定让她返回、继续深入，或停在回响中心维持链路。",tone:"final",paths:[{label:"返回",outcome:"生还结局，带回残缺记录。"},{label:"继续深入",outcome:"求真结局，链路逐步熄灭。"},{label:"原地维持链路",outcome:"回响循环结局，形成闭环。"}]}],{initScene:a,loadLayers:l,animate:u,onResize:c,updateMouseTarget:f,layers:h,camera:d,renderer:m}=F1(t),{onClick:g,startExplore:_,toggleGrayscale:p}=B1(e,i,r,h,d);return jo(()=>{a(),l(),window.addEventListener("mousemove",f),window.addEventListener("click",g),window.addEventListener("resize",c),u()}),Sl(()=>{window.removeEventListener("mousemove",f),window.removeEventListener("click",g),window.removeEventListener("resize",c),m==null||m.dispose()}),(M,x)=>(se(),le("div",z1,[$("header",{class:Fe(["painting-header",{"fade-out":e.value}])},[x[4]||(x[4]=$("div",{class:"archive-kicker"},"WERISS // ECHO ARCHIVE",-1)),x[5]||(x[5]=$("h1",null,"关键 CG 陈列馆",-1)),x[6]||(x[6]=$("p",null,"展示主视觉分层、镜头定格与氛围样张。点击陈列层可以查看档案展签。",-1)),$("button",{onClick:x[0]||(x[0]=(...v)=>Rt(_)&&Rt(_)(...v)),class:"start-btn"},"进入陈列")],2),Re(Fr,{name:"fade"},{default:sr(()=>[i.value?(se(),le("div",{key:0,class:"dialogue-box",onClick:x[1]||(x[1]=v=>i.value=null)},[$("div",k1,[$("p",V1,Bt(i.value),1),x[7]||(x[7]=$("span",{class:"close-hint"},"点击收起展签",-1))])])):ei("",!0)]),_:1}),$("canvas",{ref_key:"canvasEl",ref:t},null,512),$("aside",{class:Fe(["story-archive",{"story-archive-live":e.value}])},[x[10]||(x[10]=$("div",{class:"story-kicker"},"BRANCH MAP",-1)),x[11]||(x[11]=$("h2",{class:"story-title"},"WERISS 故事树",-1)),x[12]||(x[12]=$("p",{class:"story-copy"},"按窗口推进主线，并在关键节点分化出不同的结果。每条分支都标记了触发契机。",-1)),$("div",H1,[(se(),le(Ge,null,di(o,v=>$("article",{key:v.id,class:Fe(["story-node",`story-node-${v.tone}`])},[$("div",G1,[$("span",W1,Bt(v.id),1),$("span",X1,Bt(v.type),1)]),$("h3",null,Bt(v.title),1),$("p",null,Bt(v.summary),1),$("div",q1,[x[8]||(x[8]=$("span",{class:"story-trigger-label"},"触发契机",-1)),$("span",null,Bt(v.trigger),1)]),$("div",Y1,[(se(!0),le(Ge,null,di(v.paths,b=>(se(),le("div",{key:b.label,class:"story-branch"},[x[9]||(x[9]=$("span",{class:"story-branch-arrow"},"↳",-1)),$("div",null,[$("strong",null,Bt(b.label),1),$("span",null,Bt(b.outcome),1)])]))),128))])],2)),64))])],2),$("div",{class:Fe(["bottom-bar",{"fade-in":e.value}])},[$("div",$1,[x[13]||(x[13]=$("label",null,"景框呼吸",-1)),So($("input",{type:"range","onUpdate:modelValue":x[2]||(x[2]=v=>s.value=v),min:"0",max:"2",step:"0.1"},null,512),[[Rm,s.value]])]),$("button",{onClick:x[3]||(x[3]=(...v)=>Rt(p)&&Rt(p)(...v)),class:"mode-btn"},Bt(r.value?"恢复成片":"切换制作批注"),1)],2)]))}},j1=Nf(K1,[["__scopeId","data-v-7ac6dd38"]]),hg="X-05",Z1="WINDOW OPEN",J1="NIA-7 requesting first advisory.",Q1="LINK CLOSED",tA="Awaiting first signal.",eA={mode:"quake",title:"MOUNTAIN BREACH / AUTHORIZATION OPEN",body:"平静结束了。回响台已获准读取山脉全貌，第一道建议窗口正在形成。"},pp=[{label:"ROLE",title:"你不是进入者",body:"你坐在 ECHO DESK 前，通过失真的远程链路观察 WERISS。山里的人不是你，你也不会替她迈出任何一步。",action:"知道了，继续"},{label:"ABILITY",title:"你唯一的能力是建议",body:"链路只会短暂打开几秒。你能做的只有在信息不完整时给出倾向，而不是命令。她会理解、误解，或者赌一把。",action:"继续授权"},{label:"COST",title:"每一次建议都会改写局势",body:"信任、风险和真相会被你的话推向不同方向。等你看见整座山的时候，平静也会一起结束。",action:"接入第一道建议窗口"}],mp={"Ω-01":{mode:"quake",title:"RED RIDGE / SURFACE FAILURE",body:"整条山脊在逆风震动，裂隙正在把视野撕开。这是你第一次看到 WERISS 真正移动。"},"Ψ-02":{mode:"storm",title:"LUMINOUS FRONT / CROSSWIND WALL",body:"发光雾墙压向峡谷，链路噪声开始翻倍。你给出的建议会决定她是穿过去，还是保住呼吸。"},"Δ-03":{mode:"fissure",title:"BLUE FISSURE / DEPTH OPEN",body:"雪幕被整面撕裂，裂口下方不是黑暗，而是一层正在发亮的深度。这里不该只是山表。"},"Λ-04":{mode:"magnetic",title:"DOUBLE MAP / SIGNAL DRIFT",body:"地形开始复制自己，HUD 和脚下给出两套完全不同的路线。你必须替她选一套现实。"},"X-05":{mode:"skyfold",title:"SKYFOLD / FINAL WINDOW",body:"高空像幕布一样展开，全部山脊同时发亮。最后一次建议会决定她带回人，还是带回真相。"}},nA={A1:{mode:"quake",title:"RIDGE STABILIZED",body:"镜头抬高后，裂纹从山体里蔓延出来。你让她先保住了视野，也让第一次震动有了轮廓。"},A2:{mode:"quake",title:"FORWARD PUSH",body:"山体换气声直接压进了链路。你把她推近了红脊，也把第一次风险抬高了。"},A3:{mode:"whiteout",title:"SENSOR CALIBRATION",body:"雪雾压暗了整个画面，只剩参数流和呼吸声。你让信息先于行动抵达。"},B1:{mode:"storm",title:"WALL BREACH",body:"她穿过了发光雾墙，镜头像被骤冷灼了一下。链路抖得更厉害，但前方被打开了。"},B2:{mode:"storm",title:"CONTROLLED RETREAT",body:"雾墙掠过山脊，风声盖住了脚步。你保住了链路稳定，但也看着原路被吞掉。"},B3:{mode:"storm",title:"COVER FOUND",body:"半塌石棚切开了风噪，镜头边缘仍在滴落雪水。你让她在灾变里争取到一次观察角度。"},C1:{mode:"fissure",title:"EDGE WALK",body:"裂口一直在镜头下方发蓝，你却命令她不去看。山体没有回答，但活路还在。"},C2:{mode:"fissure",title:"DESCENT",body:"镜头沉入裂口，地表被一道竖直光井取代。你不再只是看山脉，而是看山脉里面。"},C3:{mode:"fissure",title:"PROBE DROP",body:"探针掉进深度时，画面像被拉长了一瞬。数值在重复，说明下面不是正常空间。"},D1:{mode:"magnetic",title:"BLIND WALK",body:"她闭眼穿过噪声层，屏幕只剩几次短促闪烁。你让脚下地形暂时压过了错误地图。"},D2:{mode:"magnetic",title:"OLD MAP LOCK",body:"旧地图把镜头推向更亮的山脊，色差和雪花屏一起加重。真相更近，但现实更薄。"},D3:{mode:"magnetic",title:"OVERLAY KILLED",body:"辅助层熄灭后，画面黑了一瞬，只剩高度、心跳和你的链路还亮着。"},E1:{mode:"whiteout",title:"RETURN VECTOR",body:"风雪和天光一起压回镜头边缘。你放弃了最深处，把“活着回来”放到了真相前面。"},E2:{mode:"skyfold",title:"DEEP VECTOR",body:"高空彻底展开，山脊像一张反向星图。你让她继续往前，也接受了链路随时会断。"},E3:{mode:"skyfold",title:"HOLD VECTOR",body:"她停在回响最强的位置，画面像被整片天空按住。你没有撤离，也没有继续深入。"}},th=[{id:"Ω-01",position:{x:-7,y:2,z:8},event:{title:"RED RIDGE ASSESSMENT",subtitle:"FIELD UNIT NIA-7",message:'如果你真的能看到我的画面，先回答我。<br/>左边山脊后面那片发红的东西，像云，但它在逆风移动。<br/><span class="hl">我应该先看清它，还是先避开？</span>',choices:[{id:"A1",label:"退到高处，先确认整片视野",advisory:"Gain altitude and confirm the ridge line before moving.",reply:"收到。我先上切到高处。红光不是一个点，像一整片贴着山走的云墙。",effects:{trust:1,risk:-1}},{id:"A2",label:"继续靠近，我需要更多现场画面",advisory:"Close the distance. I need a better look at the red front.",reply:"你是真敢开口。行，我再往前二十米。地面开始轻震，像有什么东西在山体里换气。",effects:{truth:1,risk:1}},{id:"A3",label:"原地停留，先校准传感器",advisory:"Hold position and stabilize your sensors before moving.",reply:"校准完成。风场和温度都在跳，但频率很稳定。我把参数发回给你了。",effects:{trust:1,truth:1}}]}},{id:"Ψ-02",position:{x:0,y:3.5,z:1},event:{title:"MOVING CLOUD WALL",subtitle:"FIELD UNIT NIA-7",message:'不是云。是一整面在发光的雾墙，从峡谷对面横着压过来了。<br/>我能冲过去，也能后撤保链路。<br/><span class="hl">你给我一个更值的选项。</span>',delayMs:380,choices:[{id:"B1",label:"穿过去，抢时间拿画面",advisory:"Push through the wall before it closes. We need the view beyond it.",reply:"冲过去了。像从热水里穿到雪里，头盔差点掉线，但我看见前面有一条蓝色裂口。",effects:{truth:2,risk:2},obscured:!0},{id:"B2",label:"后撤，优先保住链路和体力",advisory:"Fall back. Keep the link stable and save your oxygen.",reply:"明白。我退回岩脊后面了。链路稳多了，但那道雾墙已经把原来的路盖住。",effects:{trust:1,risk:-1}},{id:"B3",label:"横向绕行，找掩体再观察",advisory:"Traverse laterally. Find cover and keep visual on the front.",reply:"我找到一段半塌的石棚，风声小了很多。墙体还在移动，但速度比我想的慢。",effects:{trust:1,truth:1}}]}},{id:"Δ-03",position:{x:7,y:2,z:7},event:{title:"SHEAR BREAK",subtitle:"FIELD UNIT NIA-7",message:'前面的雪坡塌了，不是普通雪崩，像整张白幕从山上被撕下来。<br/>裂口下面有一道发蓝的缝，我能下去。<br/><span class="hl">你要我绕，还是要我赌一把？</span>',choices:[{id:"C1",label:"别下裂口，沿边缘继续走",advisory:"Stay on the edge. Do not descend into the blue fissure.",reply:"收到。我贴边过去了。下面一直有像水一样的反光，但没有声音。",effects:{trust:1,risk:-1}},{id:"C2",label:"下去看蓝光来源，抓住窗口",advisory:"Descend into the fissure and identify the blue source.",reply:"我下来了。这里不是冰，是一层会发亮的碎石，像有人把星空砸碎铺在地上。",effects:{truth:2,risk:1}},{id:"C3",label:"先丢探针，再决定要不要下",advisory:"Deploy a probe first. I want the depth and temperature before you move.",reply:"探针下去了。回传深度不对，它像一直在往下掉，但读数又在重复同一段。",effects:{trust:1,truth:1}}]}},{id:"Λ-04",position:{x:-5,y:3,z:3},event:{title:"MAGNETIC STORM",subtitle:"FIELD UNIT NIA-7",message:'链路在跳。我收到你的字了，但顺序全乱。<br/>指南针开始绕圈，头盔 HUD 出现了两套地形。<br/><span class="hl">我该信地图，还是信脚下？</span>',delayMs:520,choices:[{id:"D1",label:"闭眼十秒，只按坡度和风向走",advisory:"Ignore the HUD. Count ten seconds and walk by slope and wind.",reply:"照做了。奇怪的是，一闭眼之后干扰反而小了。我像从一道缝里挤了出来。",effects:{trust:2}},{id:"D2",label:"相信旧地图，向北切过去",advisory:"Trust the old map and cut north before the storm thickens.",reply:"旧地图把我带到了一段断崖前。风很大，但我能看到更远的山脊全部亮起来了。",effects:{truth:1,risk:1},obscured:!0},{id:"D3",label:"关掉辅助系统，只保留心跳和高度",advisory:"Kill the overlays. Keep only heart rate, altitude, and the link.",reply:"辅助全关了。现在只剩你的链路和我自己的呼吸声。至少方向感回来了。",effects:{trust:1,risk:-1,truth:1}}]}},{id:"X-05",position:{x:4,y:5,z:16},event:{title:"SKYFOLD DECISION",subtitle:"FIELD UNIT NIA-7",message:'天不是在变暗，像有什么巨大的东西从高空展开了。<br/>所有山脊轮廓都亮起来，像一张地上的星图。<br/><span class="hl">如果我继续往前，链路会断；如果我现在回头，我可能带不走任何证据。</span>',delayMs:760,choices:[{id:"E1",label:"返回。把人带回来比答案重要",advisory:"Return now. Bring yourself home before the sky closes.",reply:"收到。我转身了。你这次没让我看到最深处，但你把我从那里带了出来。",effects:{trust:2,risk:-2}},{id:"E2",label:"继续。把真相带到最深处",advisory:"Keep moving. I need you at the center before the link dies.",reply:"明白。我继续走。链路开始一段一段掉帧了，如果这次断了，就把我看到的记住。",effects:{truth:2,risk:2},obscured:!0},{id:"E3",label:"留在原地，保持链路直到回响结束",advisory:"Hold position. Keep the link alive and let the mountain finish speaking.",reply:"那我就留在这里。山脊全亮了，像在对齐什么。别断线，我还有最后几句要发给你。",effects:{trust:1,truth:1}}]}}],_p=new Map(th.map(n=>[n.id,n.event])),iA={quake:1600,storm:1800,fissure:2e3,whiteout:1700,magnetic:2200,skyfold:2400};function rA({isExploring:n,routeMarkers:t}){const e=Uo({trust:0,risk:0,truth:0}),i=Me(null),r=Me(null),s=Me(null),o=Me(Q1),a=Me(tA),l=Me(null),u=Me("calm"),c=Me(null),f=Me(null),h=Me(!1),d=Uo(Object.fromEntries(th.map(at=>[at.id,!1])));let m=null,g=null,_=null,p=null,M=null,x=[];const v=()=>{m&&clearTimeout(m),g&&clearTimeout(g),_&&clearTimeout(_),p&&clearTimeout(p),M&&clearTimeout(M),x.forEach(at=>clearTimeout(at)),m=null,g=null,_=null,p=null,M=null,x=[]},b=(at,pt)=>at==="Ω-01"?["扫描红脊附近的地形回声","调取 NIA-7 首段现场片段","重组第一道建议窗口"]:pt==="storm"?["压低风噪通道","过滤发光雾墙雪噪","锁定建议窗口"]:pt==="fissure"?["提取裂口深度回波","压住过曝蓝光","重组下行窗口"]:pt==="magnetic"?["清理重复地形图层","同步残留相位","恢复窗口文本"]:pt==="skyfold"?["校准高空星图偏移","固定最终链路锚点","展开最后一道窗口"]:["校准链路噪声","调取现场片段","建立建议窗口"],w=at=>at==="storm"?[{id:"stabilize",label:"稳定链路增益",result:"风噪被压低了一些，语音边缘更清楚了。"},{id:"sweep",label:"扫频过滤雪噪",result:"高频雪噪被剔除了，画面不再整片发白。"},{id:"route",label:"重标记前方路径",result:"你给她补了一条临时路径线，前方轮廓短暂稳定。"}]:at==="fissure"?[{id:"depth",label:"校准深度回波",result:"裂缝边缘的深度回波开始成形。"},{id:"exposure",label:"压低裂口炫光",result:"过曝被压下去，底部轮廓露出来了一点。"},{id:"anchor",label:"固定链路锚点",result:"你把信号锚在裂口边缘，掉帧没那么严重了。"}]:at==="magnetic"?[{id:"phase",label:"重同步相位",result:"两套地形开始偶尔重合，错误地图不再一直覆盖。"},{id:"checksum",label:"校验旧地图层",result:"一部分失真的图层被识别成旧回响。"},{id:"trim",label:"裁掉噪声通道",result:"只剩几个核心参数还在跳动，但链路更稳了。"}]:at==="skyfold"?[{id:"align",label:"对齐天幕坐标",result:"高空光带不再整片错位，星图边缘开始成形。"},{id:"pulse",label:"发送定位脉冲",result:"回响回来了一个清晰峰值，你抓住了它。"},{id:"shield",label:"压住失真外溢",result:"链路边缘没那么撕裂了，最后一条窗口更稳。"}]:[{id:"stabilize",label:"稳定链路",result:"底噪降下去了一点，信号更像一条完整线路了。"},{id:"scan",label:"扫一遍场景",result:"轮廓线短暂变亮，你多拿到了一点现场信息。"},{id:"route",label:"标记临时路径",result:"系统接受了你的标记，前方区域不再完全模糊。"}],R=()=>{e.trust=0,e.risk=0,e.truth=0},P=()=>{Object.keys(d).forEach(at=>{d[at]=!1})},y=()=>{v(),i.value=null,r.value=null,s.value=null,c.value=null,f.value=null,l.value=null,u.value="calm",h.value=!1,t.value=0,o.value=Z1,a.value=J1,R(),P()},S=()=>{v(),i.value=null,r.value=null,s.value=null,c.value=null,f.value=null,l.value=null,u.value="calm",h.value=!1},L=(at,pt=2600)=>{_&&clearTimeout(_),l.value=at,_=setTimeout(()=>{l.value=null},pt)},I=()=>{s.value=0,h.value=!1},F=()=>s.value===null?!1:s.value<pp.length-1?(s.value+=1,!1):(s.value=null,h.value=!0,a.value="NIA-7 awaiting your first instruction.",u.value="quake",L(eA,3e3),!0),X=(at,pt=0)=>{e[at]=Math.max(0,e[at]+pt)},Y=at=>at.id==="E1"?{code:"SAFE RETURN",vector:"SAFE RETURN VECTOR",title:"带回山风的人",summary:"NIA-7 离开了 WERISS。她没有带出全部答案，但她把这条链路和自己的呼吸一起带回来了。",body:"归档里只留下了一段被反复擦除的地形记录，以及一句她拒绝解释的话: “你那天让我回头，所以我才确认，山后面真的还有路。”"}:at.id==="E2"?{code:"FIRST ARRIVAL",vector:e.risk>=e.truth?"PRESSURE VECTOR":"WITNESS VECTOR",title:"先抵达的人",summary:"链路在最后几十秒里一段一段掉帧，你没有再收到她完整的声音，只剩一张不断重写的山脊星图。",body:"任务归档会把这次行动标成失败，但你知道那不是失败。那是一场到达。她继续向前，把真相送进了你再也无法跟上的深处。"}:{code:"ECHO LOOP",vector:"WITNESS VECTOR",title:"另一端的人",summary:"NIA-7 没有继续，也没有返回。她把自己留在回响最强的那一层，只为了把链路再撑久一点。",body:"在连接熄灭前，你收到了最后一条短讯: “如果下一次你还会听见我，第一句别问我在哪里。先告诉我，左边那道山脊后面发红的东西，到底是什么。”"},W=(at,pt)=>{const wt=_p.get(at);if(!wt||d[at]||!h.value)return;v();const Dt=mp[at],zt=Dt?iA[Dt.mode]:1400;Dt&&(u.value=Dt.mode,L(Dt,2200)),c.value={id:at,title:wt.title,subtitle:wt.subtitle,dist:pt.toFixed(1),prompt:Dt?`链路正在穿过 ${Dt.title}，先做一点预热工作。`:"第一道回响正在成形，先把链路稳住。",progress:0,windowReady:!1,actions:w((Dt==null?void 0:Dt.mode)??"calm"),usedActions:[],lastResult:"正式建议窗口还没建立。先做一次链路预热。"};const ae=()=>{!c.value||c.value.id!==at||(c.value={...c.value,windowReady:!0,lastResult:c.value.progress>0?"窗口已经稳定。你可以接入正式建议。":"窗口已经稳定，但你最好先做一次链路预热。"})},D=Math.max(wt.delayMs??0,zt);p=setTimeout(ae,D)},K=()=>{var ae;if(!c.value||!c.value.windowReady||c.value.progress<1)return;const at=c.value,pt=_p.get(at.id);if(!pt){c.value=null;return}c.value=null;const wt=((ae=mp[at.id])==null?void 0:ae.mode)??"calm",Dt=b(at.id,wt),zt=at.id==="Ω-01"?2200:1550;f.value={id:at.id,title:at.title,subtitle:at.subtitle,dist:at.dist,mode:wt,lead:at.id==="Ω-01"?"正在检索首道回响片段":"正在调取现场数据",steps:Dt,stepIndex:0,progress:.12},Dt.forEach((D,O)=>{const A=Math.round(zt/Dt.length*O),lt=setTimeout(()=>{!f.value||f.value.id!==at.id||(f.value={...f.value,stepIndex:O,progress:Math.min(.3+(O+1)/Dt.length*.62,.96)})},A);x.push(lt)}),M=setTimeout(()=>{const D=at.progress;i.value={id:at.id,title:at.title,subtitle:at.subtitle,dist:at.dist,message:pt.message,choices:pt.choices.map(O=>({...O,obscured:O.obscured&&D<2})),stage:"choice"},f.value=null,M=null,x=[]},zt)},V=at=>{if(!c.value)return;const pt=c.value.actions.find(wt=>wt.id===at);!pt||c.value.usedActions.includes(at)||(c.value={...c.value,progress:Math.min(3,c.value.progress+1),usedActions:[...c.value.usedActions,at],lastResult:c.value.windowReady?`${pt.result} 正式窗口已稳定，可以接入。`:`${pt.result} 正式窗口还在生成。`})},vt=at=>{if(!i.value||i.value.stage!=="choice")return null;const pt=i.value.id;Object.entries(at.effects).forEach(([Dt,zt])=>{X(Dt,zt)}),d[pt]=!0,o.value=at.id,a.value="READING SIGNAL...";const wt=nA[at.id];return wt&&(u.value=wt.mode,L(wt,2600)),i.value={...i.value,stage:"response",selectedChoice:at,reply:""},g=setTimeout(()=>{i.value&&(a.value=at.reply,i.value={...i.value,reply:at.reply},m=setTimeout(()=>{pt===hg&&(r.value=Y(at)),i.value=null},3600))},900),pt},gt=Mn(()=>Object.values(d).filter(at=>!at).length),St=Mn(()=>n.value?r.value?"LINK RESOLVED":s.value!==null?"ROLE BRIEFING":f.value?"WINDOW SYNC":i.value?"LIVE ADVISORY WINDOW":"LINK TRACKING":"LINK STANDBY"),Lt=Mn(()=>s.value===null?null:pp[s.value]),Qt=Mn(()=>e.truth>=e.trust&&e.truth>=e.risk+1?"WITNESS VECTOR":e.risk>e.trust?"PRESSURE VECTOR":"SAFE RETURN VECTOR"),rt=Mn(()=>[{label:"TRUST",value:e.trust},{label:"RISK",value:e.risk},{label:"TRUTH",value:e.truth}]),_t=Mn(()=>[`LINK::${n.value?"OPEN":"SEALED"}.............`,"FIELD_UNIT: NIA-7",`TRUST_INDEX: ${e.trust.toString().padStart(2,"0")}`,`RISK_VECTOR: ${e.risk.toString().padStart(2,"0")}`,`TRUTH_DEPTH: ${e.truth.toString().padStart(2,"0")}`,`ROUTE_MARKERS: ${t.value.toString().padStart(2,"0")}`,`LAST_ADVICE: ${o.value}`,`FIELD_REPLY: ${a.value}`]);return{activeTransmission:i,advanceIntroBriefing:F,completedSignals:d,dataLines:_t,dismissNarrative:S,endingPanel:r,introBriefing:Lt,introBriefingIndex:s,linkStatus:St,bufferingTransmission:f,openTransmission:W,pendingSignals:gt,pendingTransmission:c,openPendingTransmission:K,performPrepAction:V,resetSession:y,environmentMode:u,sceneCue:l,sendAdvice:vt,signalsArmed:h,startIntroBriefing:I,statDisplay:rt,stats:e,triggerSceneCue:L,vectorLabel:Qt}}const sA=120,oA=80,aA=40,lA=26;function cA({activeTransmission:n,canvasEl:t,completedSignals:e,isExploring:i,onSignalTrigger:r,rippleEl:s,routeMarkers:o,environmentMode:a,sceneCue:l,signalsArmed:u,tourSpeed:c}){const f=th.map(B=>({id:B.id,pos:new U(B.position.x,B.position.y,B.position.z),triggered:!1,completed:!1}));let h,d,m,g=0,_,p,M,x,v,b=[],w,R,P=[],y,S=[],L,I=[],F,X,Y,W=[],K=[],V,vt=0,gt=null,St=0;const Lt=[],Qt=new sg,rt=new Ft,_t=new Zt(655365),at=new Zt(197125),pt=new Zt(7854079),wt=new Zt(13378048),Dt=new U,zt={"Ω-01":{offset:new U(-4.8,2.8,4.4),lookOffset:new U(.4,1.1,-2.8),damping:.045,fov:58,wobbleX:.18,wobbleY:.08},"Ψ-02":{offset:new U(5.2,1.6,4.8),lookOffset:new U(-.8,.6,-2.4),damping:.06,fov:64,wobbleX:.35,wobbleY:.12},"Δ-03":{offset:new U(.7,-.9,2.2),lookOffset:new U(0,-1.4,-3.2),damping:.07,fov:71,wobbleX:.06,wobbleY:.05},"Λ-04":{offset:new U(-2.8,2.2,3.1),lookOffset:new U(1.2,.4,-2.6),damping:.055,fov:62,wobbleX:.24,wobbleY:.16},"X-05":{offset:new U(0,5.8,8.2),lookOffset:new U(0,4.4,-6),damping:.038,fov:72,wobbleX:.1,wobbleY:.05}},ae={"Ω-01":{position:new U(-10.5,4.6,14.8),lookAt:new U(-6.8,2.2,7),fov:60,damping:.028},"Ψ-02":{position:new U(-4.4,3.8,10.4),lookAt:new U(0,2.8,1.2),fov:62,damping:.03},"Δ-03":{position:new U(3.8,3.2,9.4),lookAt:new U(7.2,1.4,7),fov:64,damping:.03},"Λ-04":{position:new U(-1.8,4.8,8.8),lookAt:new U(-5.1,2.9,3.2),fov:61,damping:.028},"X-05":{position:new U(1.2,6.6,16.4),lookAt:new U(4,4.4,10),fov:68,damping:.024}},D=B=>{switch(B){case"quake":return{fogDensity:.028,fogColor:1378058,clearColor:262660,wireColor:16748349,sunColor:16734774,hazeOpacity:.28,shake:.1,cameraLift:.35,cameraPush:-.25};case"storm":return{fogDensity:.036,fogColor:528666,clearColor:263947,wireColor:9560063,sunColor:11454975,hazeOpacity:.34,shake:.06,cameraLift:.18,cameraPush:-.45};case"fissure":return{fogDensity:.044,fogColor:132874,clearColor:131845,wireColor:7005183,sunColor:5164031,hazeOpacity:.42,shake:.08,cameraLift:-.8,cameraPush:-.95};case"whiteout":return{fogDensity:.052,fogColor:14410986,clearColor:11187908,wireColor:16055295,sunColor:15003384,hazeOpacity:.5,shake:.03,cameraLift:.15,cameraPush:-.1};case"magnetic":return{fogDensity:.03,fogColor:459795,clearColor:196871,wireColor:16742391,sunColor:8118527,hazeOpacity:.22,shake:.12,cameraLift:.22,cameraPush:-.18};case"skyfold":return{fogDensity:.018,fogColor:590607,clearColor:131333,wireColor:16766829,sunColor:16774067,hazeOpacity:.16,shake:.04,cameraLift:.65,cameraPush:.18};default:return{fogDensity:.022,fogColor:655365,clearColor:197125,wireColor:7854079,sunColor:13378048,hazeOpacity:.18,shake:0,cameraLift:0,cameraPush:0}}},O=(B,Z)=>{const mt=B.material;if(Array.isArray(mt)){mt.forEach(Tt=>{Tt.transparent=!0,Tt.opacity=Z});return}mt.transparent=!0,mt.opacity=Z},A=(B,Z)=>{B.visible=Z>.01,B.traverse(mt=>{if(mt instanceof xe&&O(mt,Z),mt instanceof Tc){const Tt=mt.material;Tt.transparent=!0,Tt.opacity=Z}})},lt=()=>{var B;return((B=f.find(Z=>!e[Z.id]))==null?void 0:B.id)??hg},tt=(B,Z)=>{let mt=0,Tt=1,Ut=1;const ie=[1,.52,.52*.52,.52*.52*.52,.52*.52*.52*.52].reduce((Wt,$t)=>Wt+$t,0);for(let Wt=0;Wt<5;Wt+=1)mt+=Math.sin(B*Ut*.4+Ut)*Math.cos(Z*Ut*.35+Ut*.7)*Tt,mt+=Math.sin(B*Ut*.7+Ut*2.1)*Math.sin(Z*Ut*.6+Ut*1.3)*Tt*.5,Tt*=.52,Ut*=2.1;return mt/(ie*1.5)},nt=B=>{if(B.mesh){const Z=B.mesh.material;Z.color.set(8118527),Z.opacity=.9,B.mesh.scale.setScalar(1)}if(B.ring){const Z=B.ring.material;Z.color.set(16762967),Z.opacity=.35,B.ring.rotation.set(0,0,0)}B.light&&(B.light.color.set(8118527),B.light.intensity=2)},it=B=>{if(B.mesh){const Z=B.mesh.material;Z.color.set(16762967),Z.opacity=.75}if(B.ring){const Z=B.ring.material;Z.color.set(8118527),Z.opacity=.18}B.light&&(B.light.color.set(16762967),B.light.intensity=.8)},ut=B=>{const Z=e[B.id];if(B.completed!==Z){if(B.completed=Z,B.completed){it(B);return}nt(B)}},et=()=>{const B=new ni(aA,lA,sA,oA);B.rotateX(-Math.PI/2);const Z=B.attributes.position;_=new Float32Array(Z.count);for(let $t=0;$t<Z.count;$t+=1){const Kt=Z.getX($t),ci=Z.getZ($t),jn=Math.exp(-((ci+2)**2)/40)*3.5,ra=tt(Kt,ci)*4+jn,Sr=Math.max(ra,-.5);Z.setY($t,Sr),_[$t]=Sr}B.computeVertexNormals(),p=new xe(B,new Ud({color:3613717,roughness:.9,metalness:.15,emissive:new Zt(2754568),emissiveIntensity:1.2,side:qi})),p.receiveShadow=!0,d.add(p);const mt=B.clone();M=new xe(mt,new We({color:7854079,wireframe:!0,transparent:!0,opacity:.32})),d.add(M);const Tt=B.clone(),Ut=Tt.attributes.position;for(let $t=0;$t<Ut.count;$t+=1)Ut.setY($t,Ut.getY($t)-.08);Tt.computeVertexNormals(),d.add(new xe(Tt,new We({color:16748349,wireframe:!0,transparent:!0,opacity:.07})));const ve=new zd(16737826,2.5);ve.position.set(0,20,-15),ve.castShadow=!0,d.add(ve);const ie=new zd(16724736,1.4);ie.position.set(0,5,20),d.add(ie),d.add(new JM(3346722,2.5));const Wt=new Bd(16757575,8,20);Wt.position.set(2,.5,2),d.add(Wt)},T=()=>{x=new xe(new Gr(2.2,32,32),new We({color:13378048})),x.position.set(8,14,-25),d.add(x),v=new xe(new Gr(3.2,32,32),new We({color:16724736,transparent:!0,opacity:.15,side:Qe})),x.add(v),x.add(new xe(new Gr(5.5,32,32),new We({color:6684689,transparent:!0,opacity:.07,side:Qe}))),b=[];for(let B=0;B<12;B+=1){const Z=B/12*Math.PI*2,mt=3+Math.random()*3,Tt=new xe(new ni(.15+Math.random()*.2,mt),new We({color:16720384,transparent:!0,opacity:.12+Math.random()*.1,side:Ze}));Tt.rotation.z=Z,Tt.position.set(Math.cos(Z)*(2.8+mt/2),Math.sin(Z)*(2.8+mt/2),0),b.push(Tt),x.add(Tt)}},E=()=>{w=new xe(new ni(200,30),new We({color:5570576,transparent:!0,opacity:.18,depthWrite:!1,side:Ze})),w.rotation.x=Math.PI/2,w.position.set(0,.1,-10),d.add(w);const B=300,Z=new _n,mt=new Float32Array(B*3);for(let Tt=0;Tt<B;Tt+=1)mt[Tt*3]=(Math.random()-.5)*160,mt[Tt*3+1]=Math.random()*40+5,mt[Tt*3+2]=(Math.random()-.5)*80-15;Z.setAttribute("position",new Kn(mt,3)),d.add(new Tc(Z,new Ku({color:16765056,size:.1,transparent:!0,opacity:.5})));for(let Tt=0;Tt<6;Tt+=1){const Ut=[],ve=(Math.random()-.5)*16,ie=(Math.random()-.5)*8-2;for(let $t=0;$t<=20;$t+=1){const Kt=$t/20;Ut.push(new U(ve+Math.sin(Kt*Math.PI*3+Tt)*Kt*1.5,Kt*(4+Math.random()*3),ie+Math.cos(Kt*Math.PI*2.5+Tt*.7)*Kt*1.2))}const Wt=new eg(Ut);d.add(new xe(new Zf(Wt,30,.03+Math.random()*.04,6,!1),new We({color:Tt%2===0?4521864:8913151,transparent:!0,opacity:.25+Math.random()*.2})))}},N=()=>{L=new $r,I=[];for(let mt=0;mt<4;mt+=1){const Tt=new xe(new ni(6.5,10+mt*.7),new We({color:12445695,transparent:!0,opacity:0,depthWrite:!1,side:Ze}));Tt.position.set(-6+mt*4,4.5,-2-mt*1.8),Tt.rotation.y=-.18+mt*.12,I.push(Tt),L.add(Tt)}F=new xe(new Gr(18,32,20,0,Math.PI),new We({color:9296127,transparent:!0,opacity:0,side:Qe,depthWrite:!1})),F.position.set(2,6,-12),L.add(F);const B=new _n,Z=new Float32Array(320*3);for(let mt=0;mt<320;mt+=1)Z[mt*3]=(Math.random()-.5)*18,Z[mt*3+1]=Math.random()*10+1,Z[mt*3+2]=(Math.random()-.5)*14;B.setAttribute("position",new Kn(Z,3)),X=new Tc(B,new Ku({color:15267839,size:.12,transparent:!0,opacity:0,depthWrite:!1})),L.add(X),L.visible=!1,d.add(L)},G=()=>{R=new $r,P=[],S=[];const B=new ni(5.5,9,8,12);for(let Z=-1;Z<=1;Z+=2){const mt=new xe(B,new Ud({color:1449252,emissive:new Zt(663078),emissiveIntensity:1,transparent:!0,opacity:0,side:Ze}));mt.position.set(Z*2.6,-.2,-1.8),mt.rotation.y=Z*.42,mt.rotation.x=-.06,P.push(mt),R.add(mt)}y=new xe(new $f(.22,1.05,11,18,1,!0),new We({color:6547711,transparent:!0,opacity:0,side:Ze,depthWrite:!1})),y.position.set(0,-1.8,-3.2),R.add(y);for(let Z=0;Z<18;Z+=1){const mt=new xe(new jf(.12+Math.random()*.22,0),new We({color:Z%2===0?6547711:11924223,transparent:!0,opacity:0}));mt.position.set((Math.random()-.5)*2.8,-1.2+Math.random()*3.8,-2.4-Math.random()*3.8),S.push(mt),R.add(mt)}R.visible=!1,d.add(R)},j=()=>{Y=new $r,W=[],K=[];for(let B=0;B<4;B+=1){const Z=new xe(new pl(8+B*1.6,.06+B*.01,10,120,Math.PI*1.2),new We({color:B%2===0?16769169:8118527,transparent:!0,opacity:0,side:Ze}));Z.rotation.x=Math.PI/2.1+B*.08,Z.rotation.z=B*.35,Z.position.set(0,10+B*.9,-10-B*1.6),W.push(Z),Y.add(Z)}for(let B=0;B<6;B+=1){const Z=new xe(new ni(.18,8+Math.random()*4),new We({color:16773314,transparent:!0,opacity:0,depthWrite:!1,side:Ze}));Z.position.set(-8+B*3.2,6+Math.random()*2,-8-Math.random()*4),Z.rotation.z=(Math.random()-.5)*.18,K.push(Z),Y.add(Z)}Y.visible=!1,d.add(Y)},q=()=>{f.forEach(B=>{const Z=new xe(new Gr(.18,16,16),new We({color:8118527,transparent:!0,opacity:.9}));Z.position.copy(B.pos),d.add(Z),B.mesh=Z;const mt=new xe(new pl(.35,.03,8,32),new We({color:16762967,transparent:!0,opacity:.35}));mt.position.copy(B.pos),d.add(mt),B.ring=mt;const Tt=new Bd(8118527,2,6);Tt.position.copy(B.pos),d.add(Tt),B.light=Tt})},Mt=(B,Z)=>{const mt=B==="storm"?.88:0,Tt=B==="fissure"?.94:0,Ut=B==="skyfold"?.92:0;if(A(L,mt),A(R,Tt),A(Y,Ut),mt>.01){I.forEach((Wt,$t)=>{Wt.position.x=-6+$t*4+Math.sin(Z*1.8+$t)*.25,Wt.position.y=4.2+Math.sin(Z*2.4+$t*.3)*.2}),F.rotation.y+=.002;const ve=F.material;ve.opacity=.1+Math.sin(Z*.9)*.04+mt*.18;const ie=X.geometry.attributes.position;for(let Wt=0;Wt<ie.count;Wt+=1){let $t=ie.getY(Wt)-.22,Kt=ie.getX(Wt)+.08;$t<-1&&($t=11+Math.random()*3),Kt>10&&(Kt=-10),ie.setY(Wt,$t),ie.setX(Wt,Kt)}ie.needsUpdate=!0}if(Tt>.01){const ve=y.material;ve.opacity=.28+Math.sin(Z*2.4)*.08+Tt*.16,y.scale.y=1+Math.sin(Z*1.6)*.06,S.forEach((ie,Wt)=>{ie.position.y+=Math.sin(Z*1.2+Wt)*.002,ie.rotation.x+=.01+Wt*4e-4,ie.rotation.y+=.02+Wt*3e-4})}Ut>.01&&(W.forEach((ve,ie)=>{ve.rotation.z+=.0015+ie*4e-4,ve.rotation.x=Math.PI/2.1+ie*.08+Math.sin(Z*.7+ie)*.02}),K.forEach((ve,ie)=>{ve.position.y=6+ie*.18+Math.sin(Z*1.5+ie*.5)*.28}))},ht=(B,Z)=>{const mt=f.find(Ut=>Ut.id===B),Tt=zt[B];return!mt||!Tt?null:{position:Dt.copy(mt.pos).add(Tt.offset).add(new U(Math.sin(Z*.8+mt.pos.x)*Tt.wobbleX,Math.sin(Z*1.1+mt.pos.z)*Tt.wobbleY,0)),lookAt:mt.pos.clone().add(Tt.lookOffset),damping:Tt.damping,fov:Tt.fov}},dt=(B,Z)=>{const mt=ae[B];return mt?{position:mt.position.clone().add(new U(Math.sin(Z*.22+mt.position.x)*.18,Math.sin(Z*.16+mt.position.z)*.08,Math.cos(Z*.18+mt.position.y)*.12)),lookAt:mt.lookAt.clone().add(new U(Math.sin(Z*.15)*.4,Math.sin(Z*.12+.8)*.12,0)),damping:mt.damping*(.9+c.value*.15),fov:mt.fov}:null},ct=()=>{var Tt;if(!m||!p)return;const B=new U(m.position.x,40,m.position.z);Qt.set(B,new U(0,-1,0));const mt=(((Tt=Qt.intersectObject(p,!1)[0])==null?void 0:Tt.point.y)??0)+1.35;m.position.y<mt&&(m.position.y+=(mt-m.position.y)*.35)},st=()=>{if(!(!gt||!s.value)){gt.clearRect(0,0,s.value.width,s.value.height);for(let B=Lt.length-1;B>=0;B-=1){const Z=Lt[B];if(Z.r+=3.5,Z.alpha-=.012,Z.alpha<=0){Lt.splice(B,1);continue}gt.beginPath(),gt.arc(Z.x,Z.y,Z.r,0,Math.PI*2),gt.strokeStyle=`rgba(204, 26, 26, ${Z.alpha})`,gt.lineWidth=1.5,gt.stroke(),gt.beginPath(),gt.arc(Z.x,Z.y,Z.r*.6,0,Math.PI*2),gt.strokeStyle=`rgba(34, 255, 100, ${Z.alpha*.4})`,gt.lineWidth=.8,gt.stroke()}}},xt=()=>{var ie;if(g=requestAnimationFrame(xt),!h||!d||!m||!M||!p||!x||!v)return;const B=V.getElapsedTime(),Z=M.geometry.attributes.position,mt=p.geometry.attributes.position;for(let Wt=0;Wt<Z.count;Wt+=1){const $t=Z.getX(Wt),Kt=Z.getZ(Wt),ci=Math.sin($t*.4+B*.6)*.18+Math.sin(Kt*.55+B*.45)*.14+Math.sin(($t+Kt)*.3+B*.8)*.1,jn=_[Wt]+ci;Z.setY(Wt,jn),mt.setY(Wt,jn)}Z.needsUpdate=!0,mt.needsUpdate=!0,M.geometry.computeVertexNormals(),p.geometry.computeVertexNormals();const Tt=((ie=l.value)==null?void 0:ie.mode)??a.value,Ut=D(Tt);St+=((l.value?Ut.shake:0)-St)*.06,_t.lerp(new Zt(Ut.fogColor),.04),at.lerp(new Zt(Ut.clearColor),.04),pt.lerp(new Zt(Ut.wireColor),.06),wt.lerp(new Zt(Ut.sunColor),.05),d.fog.color.copy(_t),d.fog.density+=(Ut.fogDensity-d.fog.density)*.05,h.setClearColor(at,1),M.material.color.copy(pt),x.material.color.copy(wt),v.material.color.copy(wt),w.material.opacity+=(Ut.hazeOpacity-w.material.opacity)*.04,Mt(Tt,B);const ve=1+Math.sin(B*1.2)*.03+Math.sin(B*3.7)*.01+St*.08;if(x.scale.setScalar(ve),v.material.opacity=.1+Math.sin(B*.8)*.06,b.forEach((Wt,$t)=>{Wt.material.opacity=.06+Math.sin(B*(1.5+$t*.4)+$t)*.08}),i.value){const Wt=n.value?ht(n.value.id,B):null,$t=Wt?null:dt(lt(),B);Wt?(m.position.x+=(Wt.position.x-m.position.x)*Wt.damping,m.position.y+=(Wt.position.y-m.position.y)*Wt.damping,m.position.z+=(Wt.position.z-m.position.z)*Wt.damping,m.fov+=(Wt.fov-m.fov)*.05,m.updateProjectionMatrix(),m.lookAt(Wt.lookAt)):$t&&(m.position.x+=($t.position.x-m.position.x)*$t.damping,m.position.y+=($t.position.y+Ut.cameraLift*.35-m.position.y)*$t.damping,m.position.z+=($t.position.z+Ut.cameraPush*.35-m.position.z)*$t.damping,m.fov+=($t.fov-m.fov)*.04,m.updateProjectionMatrix(),m.lookAt($t.lookAt)),St>.01&&(m.position.x+=(Math.random()-.5)*St,m.position.y+=(Math.random()-.5)*St*.6),ct(),f.forEach(Kt=>{if(!Kt.mesh||!Kt.light)return;ut(Kt);const ci=Kt.completed?.55+Math.sin(B*2.2+Kt.pos.x)*.06:.72+Math.sin(B*3+Kt.pos.x)*.22;Kt.mesh.scale.setScalar(ci),Kt.light.intensity=Kt.completed?.6+Math.sin(B*1.6+Kt.pos.z)*.15:1.6+Math.sin(B*2.5+Kt.pos.z)*.9,Kt.ring&&(Kt.ring.rotation.x+=.01,Kt.ring.rotation.y+=.015);const jn=m.position.distanceTo(Kt.pos);!Kt.completed&&u.value&&!n.value&&!Kt.triggered&&jn<3.5&&(Kt.triggered=!0,r(Kt.id,jn)),Kt.triggered&&jn>6&&(Kt.triggered=!1)}),st()}else m.position.x+=(vt*1.5-m.position.x)*.02,m.position.y=6+Math.sin(B*.3)*.3,m.fov+=(60-m.fov)*.05,m.updateProjectionMatrix(),m.lookAt(0,1+Math.sin(B*.2)*.2,0);h.render(d,m)};return{animateScene:xt,disposeScene:()=>{cancelAnimationFrame(g),h==null||h.dispose()},flyToTourStart:()=>{m&&ne.to(m.position,{x:-10,y:4,z:14,duration:1.2,ease:"power2.out"})},initScene:()=>{t.value&&(V=new tS,h=new fg({canvas:t.value,antialias:!0,alpha:!1}),h.setSize(window.innerWidth,window.innerHeight),h.setPixelRatio(Math.min(window.devicePixelRatio,2)),h.setClearColor(197125,1),h.shadowMap.enabled=!0,d=new J_,d.fog=new Xf(655365,.022),m=new Sn(60,window.innerWidth/window.innerHeight,.1,200),m.position.set(0,6,18),m.lookAt(0,1,0),et(),T(),E(),N(),G(),j(),q())},initializeRippleCanvas:()=>{s.value&&(s.value.width=window.innerWidth,s.value.height=window.innerHeight,gt=s.value.getContext("2d"))},onCanvasClick:B=>{if(!i.value||!u.value||!t.value||!m||!p||!h||(s.value&&Lt.push({x:B.clientX,y:B.clientY,r:0,maxR:120,alpha:.7}),rt.set(B.clientX/window.innerWidth*2-1,-(B.clientY/window.innerHeight)*2+1),Qt.setFromCamera(rt,m),Qt.intersectObject(p).length===0))return;o.value+=1;const mt=(Math.random()-.5)*.35,Tt=(Math.random()-.5)*.2;ne.timeline().to(m.position,{x:`+=${mt}`,y:`+=${Tt}`,duration:.07,ease:"none"}).to(m.position,{x:`-=${mt*.8}`,y:`-=${Tt*.8}`,duration:.07,ease:"none"}).to(m.position,{x:`+=${mt*.15}`,y:`+=${Tt*.15}`,duration:.1,ease:"none"})},onMouseMove:B=>{vt=(B.clientX/window.innerWidth-.5)*2},onResize:()=>{!m||!h||(m.aspect=window.innerWidth/window.innerHeight,m.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight),s.value&&(s.value.width=window.innerWidth,s.value.height=window.innerHeight))},playIntroSequence:()=>{m&&(St=.18,ne.timeline().to(m.position,{x:-3,y:7.2,z:13,duration:.9,ease:"power2.out"}).to(m.position,{x:2.5,y:4.2,z:10.4,duration:1.4,ease:"power2.inOut"},"-=0.35").to(m.position,{x:-9.5,y:4.1,z:14.2,duration:1.1,ease:"power2.out"}))},resetSessionVisuals:()=>{Lt.length=0,St=0,A(L,0),A(R,0),A(Y,0),f.forEach(B=>{B.triggered=!1,B.completed=!1,nt(B)})},resetTour:()=>{},returnCameraHome:()=>{m&&ne.to(m.position,{x:0,y:6,z:18,duration:2,ease:"power3.inOut"})}}}const uA={key:2,class:"intro-transition"},fA={class:"cue-frame"},hA={class:"cue-title"},dA={class:"cue-body"},pA={class:"hud-status"},mA={class:"data-stream"},_A={class:"link-metrics"},gA={class:"metric-label"},vA={class:"metric-value"},xA={class:"tour-speed"},yA={class:"speed-val"},MA={key:0,class:"briefing-panel"},SA={class:"briefing-kicker"},EA={class:"briefing-title"},TA={class:"briefing-copy"},bA={class:"briefing-progress"},AA={class:"choice-copy"},wA={key:0,class:"prep-panel"},CA={class:"prep-header"},RA={class:"prep-kicker"},PA={class:"prep-dist"},DA={class:"prep-title"},LA={class:"prep-body"},IA={class:"prep-progress"},UA={class:"prep-instruction"},NA={class:"prep-actions"},OA=["disabled","onClick"],FA={class:"prep-result"},BA=["disabled"],zA={class:"buffer-header"},kA={class:"buffer-kicker"},VA={class:"buffer-dist"},HA={class:"buffer-title"},GA={class:"buffer-lead"},WA={class:"buffer-progress"},XA={class:"buffer-steps"},qA={class:"buffer-step-index"},YA={key:0,class:"comms-popup"},$A={class:"signal-header"},KA={class:"signal-tag"},jA={class:"signal-dist"},ZA={class:"signal-meta"},JA=["innerHTML"],QA={key:0,class:"choice-panel"},tw=["onClick"],ew={class:"choice-id"},nw={class:"choice-copy"},iw={key:1,class:"reply-panel"},rw={class:"outgoing-copy"},sw={key:0,class:"ending-panel"},ow={class:"ending-header"},aw={class:"ending-kicker"},lw={class:"ending-vector"},cw={class:"ending-title"},uw={class:"ending-summary"},fw={class:"ending-body"},hw={class:"ending-stats"},dw={class:"ending-stat"},pw={class:"ending-stat"},mw={class:"ending-stat"},_w={key:3,class:"click-hint"},gw=3,vw=g0({__name:"TechView",emits:["explore-mode"],setup(n,{emit:t}){const e=t,i=Me(null),r=Me(null),s=Me(null),o=Me(null),a=Me(!1),l=Me(1),u=Me(0),c=Me(!1);let f=null,h=null,d=null;const{activeTransmission:m,advanceIntroBriefing:g,bufferingTransmission:_,completedSignals:p,dataLines:M,dismissNarrative:x,endingPanel:v,environmentMode:b,introBriefing:w,introBriefingIndex:R,linkStatus:P,openTransmission:y,openPendingTransmission:S,pendingSignals:L,pendingTransmission:I,performPrepAction:F,resetSession:X,sceneCue:Y,sendAdvice:W,signalsArmed:K,startIntroBriefing:V,statDisplay:vt,stats:gt,vectorLabel:St}=rA({isExploring:a,routeMarkers:u}),{animateScene:Lt,disposeScene:Qt,flyToTourStart:rt,initScene:_t,initializeRippleCanvas:at,onCanvasClick:pt,onMouseMove:wt,onResize:Dt,playIntroSequence:zt,resetSessionVisuals:ae,resetTour:D,returnCameraHome:O}=cA({activeTransmission:m,canvasEl:i,completedSignals:p,isExploring:a,onSignalTrigger:y,environmentMode:b,rippleEl:o,routeMarkers:u,sceneCue:Y,signalsArmed:K,tourSpeed:l}),A=Mn(()=>`mode-${b.value}`),lt=Mn(()=>a.value?R.value===null?1:[.12,.32,.58][R.value]??.12:.04),tt=Mn(()=>lt.value<1),nt=Mn(()=>a.value&&!v.value),it=Mn(()=>{var dt,ct;return!!((dt=I.value)!=null&&dt.windowReady)&&(((ct=I.value)==null?void 0:ct.progress)??0)>0}),ut=Mn(()=>{const dt=8+lt.value*60,ct=Math.max(dt-18,0),st=Math.max(dt-8,0);return{background:`radial-gradient(circle at 50% 56%, rgba(3, 2, 5, 0) 0%, rgba(3, 2, 5, 0.05) ${ct}%, rgba(3, 2, 5, 0.22) ${st}%, rgba(3, 2, 5, 0.68) ${dt}%, rgba(1, 1, 4, 0.98) 100%)`}}),et=Mn(()=>{const dt=new Date;return`${dt.getFullYear()}.${String(dt.getMonth()+1).padStart(2,"0")}.${String(dt.getDate()).padStart(2,"0")}`}),T=()=>{a.value||(a.value=!0,e("explore-mode",!0),X(),ae(),D(),V(),zt(),ne.to(r.value,{opacity:0,y:-30,duration:.8,ease:"power2.in",onComplete:()=>{r.value&&(r.value.style.display="none")}}),s.value&&(s.value.style.display="flex",ne.fromTo(s.value,{opacity:0,y:20},{opacity:1,y:0,duration:.8,delay:.6,ease:"power2.out"})))},E=()=>{f&&clearTimeout(f),h&&clearTimeout(h),d&&clearTimeout(d),c.value=!0,f=setTimeout(()=>{g()&&(rt(),d=setTimeout(()=>{y("Ω-01",2.8)},2850))},220),h=setTimeout(()=>{c.value=!1},620)},N=dt=>{W(dt)},G=dt=>{F(dt)},j=()=>{S()},q=()=>{a.value&&(a.value=!1,e("explore-mode",!1),x(),ne.to(s.value,{opacity:0,y:20,duration:.5,ease:"power2.in",onComplete:()=>{s.value&&(s.value.style.display="none")}}),r.value&&(r.value.style.display="flex",ne.fromTo(r.value,{opacity:0,y:-30},{opacity:1,y:0,duration:.8,delay:.3,ease:"power2.out"})),O())},Mt=()=>{a.value&&(X(),ae(),D(),V(),zt())},ht=dt=>{dt.key==="Escape"&&a.value&&q()};return jo(()=>{var dt;_t(),Lt(),window.addEventListener("mousemove",wt),window.addEventListener("resize",Dt),window.addEventListener("keydown",ht),at(),(dt=i.value)==null||dt.addEventListener("click",pt)}),Sl(()=>{var dt;f&&clearTimeout(f),h&&clearTimeout(h),d&&clearTimeout(d),window.removeEventListener("mousemove",wt),window.removeEventListener("resize",Dt),window.removeEventListener("keydown",ht),(dt=i.value)==null||dt.removeEventListener("click",pt),x(),Qt()}),(dt,ct)=>(se(),le("div",{class:Fe(["page-tech",A.value])},[$("canvas",{ref_key:"canvasEl",ref:i,class:"scene-canvas"},null,512),nt.value?(se(),le("div",{key:0,class:Fe(["corner-matte",{"corner-matte-intro":tt.value}])},null,2)):ei("",!0),tt.value?(se(),le("div",{key:1,class:"intro-shroud",style:Kr(ut.value)},null,4)):ei("",!0),c.value?(se(),le("div",uA)):ei("",!0),ct[21]||(ct[21]=$("div",{class:"scanline-overlay"},null,-1)),ct[22]||(ct[22]=$("div",{class:"chromatic-edge"},null,-1)),$("div",{class:Fe(["weather-overlay",A.value])},null,2),ct[23]||(ct[23]=$("div",{class:"noise-overlay"},null,-1)),Re(Fr,{name:"cue"},{default:sr(()=>[Rt(Y)&&!Rt(m)&&!Rt(w)&&!Rt(v)?(se(),le("div",{key:0,class:Fe(["scene-cue",`cue-${Rt(Y).mode}`])},[ct[2]||(ct[2]=$("div",{class:"cue-weather"},null,-1)),$("div",fA,[ct[1]||(ct[1]=$("div",{class:"cue-kicker"},"FIELD SHIFT",-1)),$("h2",hA,Bt(Rt(Y).title),1),$("p",dA,Bt(Rt(Y).body),1)])],2)):ei("",!0)]),_:1}),ct[24]||(ct[24]=$("div",{class:"hud-corner tl"},null,-1)),ct[25]||(ct[25]=$("div",{class:"hud-corner tr"},null,-1)),ct[26]||(ct[26]=$("div",{class:"hud-corner bl"},null,-1)),ct[27]||(ct[27]=$("div",{class:"hud-corner br"},null,-1)),$("div",pA,[$("div",null,[ct[3]||(ct[3]=$("span",{class:"status-dot"},null,-1)),Ba(Bt(Rt(P)),1)]),$("div",null,Bt(et.value),1),ct[4]||(ct[4]=$("div",null,"FIELD UNIT: NIA-7",-1)),$("div",null,"PENDING WINDOWS: "+Bt(Rt(L)),1),$("div",null,"VECTOR: "+Bt(Rt(St)),1)]),$("div",mA,[(se(!0),le(Ge,null,di(Rt(M),(st,xt)=>(se(),le("div",{key:xt,class:"data-line",style:Kr({animationDelay:`${xt*.3}s`})},Bt(st),5))),128))]),$("div",{class:"tech-content",ref_key:"contentEl",ref:r},[ct[6]||(ct[6]=sv('<div class="tech-label" data-v-9893d463>// ECHO DESK · REMOTE ADVISORY LINK</div><h1 class="tech-title" data-text="WERISS" data-v-9893d463>WERISS</h1><div class="tech-tagline" data-v-9893d463><span class="tag-line" data-v-9893d463></span> YOU CANNOT ENTER, BUT YOUR WORDS ARRIVE FIRST </div><div class="tech-description" data-v-9893d463> 回响链路已重连。<br data-v-9893d463> 一名进入山脉的实地人员正在向你发送失真信号。<br data-v-9893d463><span class="red-text" data-v-9893d463>你只有几秒</span>决定她下一步该怎么走。 </div>',4)),$("button",{class:"tech-btn",onClick:T},[...ct[5]||(ct[5]=[$("span",{class:"btn-bracket"},"[",-1),Ba(" LINK IN ",-1),$("span",{class:"btn-bracket"},"]",-1)])])],512),$("div",{class:"explore-hud",ref_key:"exploreHudEl",ref:s},[$("div",_A,[(se(!0),le(Ge,null,di(Rt(vt),st=>(se(),le("div",{key:st.label,class:"metric-chip"},[$("span",gA,Bt(st.label),1),$("span",vA,Bt(st.value),1)]))),128))]),$("div",xA,[ct[7]||(ct[7]=$("span",{class:"speed-label"},"CRUISE SPEED",-1)),So($("input",{type:"range",min:"0.2",max:"3",step:"0.1","onUpdate:modelValue":ct[0]||(ct[0]=st=>l.value=st),class:"speed-slider"},null,512),[[Rm,l.value,void 0,{number:!0}]]),$("span",yA,Bt(l.value.toFixed(1))+"x",1)]),$("button",{class:"exit-btn",onClick:q},[...ct[8]||(ct[8]=[$("span",{class:"btn-bracket"},"[",-1),Ba(" EXIT ",-1),$("span",{class:"btn-bracket"},"]",-1)])])],512),Re(Fr,{name:"briefing"},{default:sr(()=>[Rt(w)?(se(),le("div",MA,[$("div",SA,"ROLE BRIEF / "+Bt(Rt(w).label),1),$("h2",EA,Bt(Rt(w).title),1),$("p",TA,Bt(Rt(w).body),1),$("div",bA,[(se(),le(Ge,null,di(gw,st=>$("span",{key:st,class:Fe(["progress-dot",{active:st-1===Rt(R)}])},null,2)),64))]),$("button",{class:"choice-btn briefing-action",onClick:E},[ct[9]||(ct[9]=$("span",{class:"choice-id"},"GO",-1)),$("span",AA,Bt(Rt(w).action),1)])])):ei("",!0)]),_:1}),Re(Fr,{name:"prep"},{default:sr(()=>[Rt(I)&&!Rt(m)?(se(),le("div",wA,[$("div",CA,[$("span",RA,"LINK PREP / "+Bt(Rt(I).id),1),$("span",PA,"DIST "+Bt(Rt(I).dist)+"m",1)]),$("h2",DA,Bt(Rt(I).title),1),$("p",LA,Bt(Rt(I).prompt),1),$("div",IA,[(se(),le(Ge,null,di(3,st=>$("span",{key:st,class:Fe(["prep-dot",{active:st<=Rt(I).progress}])},null,2)),64))]),$("div",UA,[ct[10]||(ct[10]=$("span",{class:"prep-instruction-label"},"WINDOW STATUS",-1)),$("span",null,Bt(Rt(I).windowReady?"正式窗口已稳定，完成至少 1 次预热后即可接入。":"正式窗口还在生成，先做一次链路预热。"),1)]),$("div",NA,[(se(!0),le(Ge,null,di(Rt(I).actions,st=>(se(),le("button",{key:st.id,class:Fe(["prep-action",{used:Rt(I).usedActions.includes(st.id)}]),disabled:Rt(I).usedActions.includes(st.id),onClick:xt=>G(st.id)},Bt(st.label),11,OA))),128))]),$("div",FA,Bt(Rt(I).lastResult),1),$("button",{class:Fe(["prep-confirm",{ready:it.value}]),disabled:!it.value,onClick:j},Bt(it.value?"接入正式建议窗口":"等待链路稳定"),11,BA)])):ei("",!0)]),_:1}),Re(Fr,{name:"buffer"},{default:sr(()=>[Rt(_)&&!Rt(m)?(se(),le("div",{key:0,class:Fe(["buffer-panel",`buffer-${Rt(_).mode}`])},[ct[11]||(ct[11]=$("div",{class:"buffer-grid"},null,-1)),$("div",zA,[$("span",kA,"WINDOW SYNC / "+Bt(Rt(_).id),1),$("span",VA,"DIST "+Bt(Rt(_).dist)+"m",1)]),$("h2",HA,Bt(Rt(_).title),1),$("p",GA,Bt(Rt(_).lead),1),$("div",WA,[$("div",{class:"buffer-progress-fill",style:Kr({transform:`scaleX(${Rt(_).progress})`})},null,4)]),$("div",XA,[(se(!0),le(Ge,null,di(Rt(_).steps,(st,xt)=>(se(),le("div",{key:st,class:Fe(["buffer-step",{active:xt===Rt(_).stepIndex,done:xt<Rt(_).stepIndex}])},[$("span",qA,"0"+Bt(xt+1),1),$("span",null,Bt(st),1)],2))),128))])],2)):ei("",!0)]),_:1}),Re(Fr,{name:"signal"},{default:sr(()=>{var st;return[Rt(m)?(se(),le("div",YA,[$("div",$A,[$("span",KA,"// WINDOW_"+Bt(Rt(m).id),1),$("span",jA,"DIST: "+Bt(Rt(m).dist)+"m",1)]),$("div",ZA,[$("div",null,Bt(Rt(m).title),1),$("div",null,Bt(Rt(m).subtitle),1)]),$("div",{class:"signal-body",innerHTML:Rt(m).message},null,8,JA),Rt(m).stage==="choice"?(se(),le("div",QA,[ct[12]||(ct[12]=$("div",{class:"panel-label"},"TRANSMIT ADVICE",-1)),(se(!0),le(Ge,null,di(Rt(m).choices,xt=>(se(),le("button",{key:xt.id,class:Fe(["choice-btn",{obscured:xt.obscured}]),onClick:Ot=>N(xt)},[$("span",ew,Bt(xt.id),1),$("span",nw,Bt(xt.label),1)],10,tw))),128))])):(se(),le("div",iw,[ct[13]||(ct[13]=$("div",{class:"panel-label"},"ADVICE SENT",-1)),$("div",rw,Bt((st=Rt(m).selectedChoice)==null?void 0:st.advisory),1),ct[14]||(ct[14]=$("div",{class:"panel-label panel-label-reply"},"FIELD REPLY",-1)),$("div",{class:Fe(["incoming-copy",{pending:!Rt(m).reply}])},Bt(Rt(m).reply||"NIA-7 is reading your signal..."),3)])),ct[15]||(ct[15]=$("div",{class:"signal-bar"},null,-1))])):ei("",!0)]}),_:1}),Re(Fr,{name:"ending"},{default:sr(()=>[Rt(v)?(se(),le("div",sw,[$("div",ow,[$("div",aw,"ENDING / "+Bt(Rt(v).code),1),$("div",lw,Bt(Rt(v).vector),1)]),$("h2",cw,Bt(Rt(v).title),1),$("p",uw,Bt(Rt(v).summary),1),$("div",fw,Bt(Rt(v).body),1),$("div",hw,[$("div",dw,[ct[16]||(ct[16]=$("span",null,"TRUST",-1)),$("strong",null,Bt(Rt(gt).trust),1)]),$("div",pw,[ct[17]||(ct[17]=$("span",null,"RISK",-1)),$("strong",null,Bt(Rt(gt).risk),1)]),$("div",mw,[ct[18]||(ct[18]=$("span",null,"TRUTH",-1)),$("strong",null,Bt(Rt(gt).truth),1)])]),$("div",{class:"ending-actions"},[$("button",{class:"choice-btn ending-action",onClick:Mt},[...ct[19]||(ct[19]=[$("span",{class:"choice-id"},"R1",-1),$("span",{class:"choice-copy"},"重新接入链路，开始下一轮回响",-1)])]),$("button",{class:"choice-btn ending-action ending-action-muted",onClick:q},[...ct[20]||(ct[20]=[$("span",{class:"choice-id"},"R2",-1),$("span",{class:"choice-copy"},"关闭链路，返回封面",-1)])])])])):ei("",!0)]),_:1}),a.value&&Rt(K)&&!Rt(m)&&!Rt(_)&&!Rt(v)&&!Rt(w)?(se(),le("div",_w," CLICK TERRAIN TO DROP ROUTE MARKERS ")):ei("",!0),$("canvas",{ref_key:"rippleEl",ref:o,class:"ripple-canvas"},null,512)],2))}}),xw=Nf(vw,[["__scopeId","data-v-9893d463"]]),yw=[{id:"monet",name:"CG 档案馆",icon:"🖼️",position:"5%"},{id:"tech",name:"回响链路",icon:"📡",position:"35%"}];function Mw(){return{switchToTech:()=>{const i=document.querySelector(".page-monet"),r=document.querySelector(".page-tech");i&&ne.to(i,{opacity:0,duration:.5,ease:"power2.in"}),setTimeout(()=>{r&&ne.set(r,{display:"block"}),ne.from(".tech-label",{x:-50,opacity:0,duration:.8,delay:.2,ease:"power3.out"}),ne.from(".tech-title",{x:-100,opacity:0,duration:1,delay:.4,ease:"power3.out"}),ne.from(".tech-tagline",{x:-50,opacity:0,duration:.8,delay:.6,ease:"power3.out"}),ne.from(".tech-description",{y:30,opacity:0,duration:.8,delay:.8,ease:"power3.out"}),ne.from(".tech-btn",{scale:0,opacity:0,duration:.6,delay:1,ease:"back.out(1.7)"}),ne.from(".hud-corner",{scale:0,opacity:0,duration:.6,delay:.3,stagger:.1,ease:"back.out(1.5)"}),ne.from(".hud-status",{y:-20,opacity:0,duration:.6,delay:.5,ease:"power2.out"})},500)},switchToMonet:()=>{const i=document.querySelector(".page-monet");i&&ne.to(i,{opacity:1,duration:.8,ease:"power2.out"})},animateBubbles:i=>{document.querySelectorAll(".bubble-item").forEach(s=>{const o=s.classList.contains("active"),a=s.querySelector(".bubble");a&&ne.to(a,{scale:o?1.2:1,duration:.5,ease:"elastic.out(1, 0.5)"})})}}}function Sw(){return{initHeaderAnimation:()=>{const e=document.querySelector(".painting-header");if(!e)return;const i=e.querySelector("h1"),r=e.querySelector("p"),s=e.querySelector(".start-btn");i&&ne.from(i,{y:-50,opacity:0,duration:1,delay:.5,ease:"power3.out"}),r&&ne.from(r,{y:-30,opacity:0,duration:1,delay:.8,ease:"power3.out"}),s&&(ne.from(s,{scale:0,opacity:0,duration:.8,delay:1.2,ease:"back.out(1.7)"}),ne.to(s,{y:-5,duration:1.5,ease:"power1.inOut",yoyo:!0,repeat:-1}))},initBubbleAnimation:()=>{setTimeout(()=>{document.querySelectorAll(".bubble-item").forEach((i,r)=>{ne.set(i,{x:-150,opacity:0,scale:0}),ne.to(i,{x:0,opacity:1,scale:1,duration:.8,delay:2+r*.2,ease:"elastic.out(1, 0.5)"})})},100)}}}const Ew={__name:"App",setup(n){const t=Me(null),e=Me("tech"),i=Me(yw),r=Me(!1),{switchToTech:s,switchToMonet:o,animateBubbles:a}=Mw(),{initHeaderAnimation:l,initBubbleAnimation:u}=Sw(),c=h=>{h?ne.to(".bubble-nav",{x:-120,opacity:0,duration:.7,ease:"power2.in",onComplete:()=>{r.value=!0}}):(r.value=!1,ne.fromTo(".bubble-nav",{x:-120,opacity:0},{x:0,opacity:1,duration:.7,ease:"power2.out"}))},f=h=>{e.value!==h&&(e.value=h,a(h),h==="tech"?s():o())};return jo(()=>{l(),u()}),(h,d)=>(se(),le("div",{class:Fe(["gallery-container",{"tech-mode":e.value==="tech"}]),ref_key:"container",ref:t},[So(Re(_y,{pages:i.value,currentPage:e.value,onPageChange:f},null,8,["pages","currentPage"]),[[Gl,!r.value]]),So(Re(j1,null,null,512),[[Gl,e.value==="monet"]]),So(Re(xw,{onExploreMode:c},null,512),[[Gl,e.value==="tech"]])],2))}},Tw=Gv(Ew);Tw.mount("#app");
