var lp=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports);var E_=lp((R_,cp)=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=e(o);fetch(o.href,i)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ws(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const Ve={},zr=[],pn=()=>{},fp=()=>!1,Xi=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Us=n=>n.startsWith("onUpdate:"),Rt=Object.assign,Vs=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},hp=Object.prototype.hasOwnProperty,Be=(n,t)=>hp.call(n,t),xe=Array.isArray,Hr=n=>$i(n)==="[object Map]",Wl=n=>$i(n)==="[object Set]",Ee=n=>typeof n=="function",tt=n=>typeof n=="string",rr=n=>typeof n=="symbol",$e=n=>n!==null&&typeof n=="object",Ul=n=>($e(n)||Ee(n))&&Ee(n.then)&&Ee(n.catch),Vl=Object.prototype.toString,$i=n=>Vl.call(n),dp=n=>$i(n).slice(8,-1),zl=n=>$i(n)==="[object Object]",zs=n=>tt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,vo=Ws(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yi=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},pp=/-(\w)/g,Zn=Yi(n=>n.replace(pp,(t,e)=>e?e.toUpperCase():"")),vp=/\B([A-Z])/g,or=Yi(n=>n.replace(vp,"-$1").toLowerCase()),Hl=Yi(n=>n.charAt(0).toUpperCase()+n.slice(1)),xa=Yi(n=>n?`on${Hl(n)}`:""),$n=(n,t)=>!Object.is(n,t),pi=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},rs=(n,t,e,r=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:r,value:e})},os=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let uc;const Ji=()=>uc||(uc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Hs(n){if(xe(n)){const t={};for(let e=0;e<n.length;e++){const r=n[e],o=tt(r)?xp(r):Hs(r);if(o)for(const i in o)t[i]=o[i]}return t}else if(tt(n)||$e(n))return n}const mp=/;(?![^(]*\))/g,gp=/:([^]+)/,yp=/\/\*[^]*?\*\//g;function xp(n){const t={};return n.replace(yp,"").split(mp).forEach(e=>{if(e){const r=e.split(gp);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ro(n){let t="";if(tt(n))t=n;else if(xe(n))for(let e=0;e<n.length;e++){const r=Ro(n[e]);r&&(t+=r+" ")}else if($e(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const bp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wp=Ws(bp);function Gl(n){return!!n||n===""}const jl=n=>!!(n&&n.__v_isRef===!0),Mr=n=>tt(n)?n:n==null?"":xe(n)||$e(n)&&(n.toString===Vl||!Ee(n.toString))?jl(n)?Mr(n.value):JSON.stringify(n,ql,2):String(n),ql=(n,t)=>jl(t)?ql(n,t.value):Hr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[r,o],i)=>(e[ba(r,i)+" =>"]=o,e),{})}:Wl(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>ba(e))}:rr(t)?ba(t):$e(t)&&!xe(t)&&!zl(t)?String(t):t,ba=(n,t="")=>{var e;return rr(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let St;class _p{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=St,!t&&St&&(this.index=(St.scopes||(St.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=St;try{return St=this,t()}finally{St=e}}}on(){++this._on===1&&(this.prevScope=St,St=this)}off(){this._on>0&&--this._on===0&&(St=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let e,r;for(e=0,r=this.effects.length;e<r;e++)this.effects[e].stop();for(this.effects.length=0,e=0,r=this.cleanups.length;e<r;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function Cp(){return St}let ze;const wa=new WeakSet;class Kl{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,St&&St.active&&St.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,wa.has(this)&&(wa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||$l(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,cc(this),Yl(this);const t=ze,e=Qt;ze=this,Qt=!0;try{return this.fn()}finally{Jl(this),ze=t,Qt=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)qs(t);this.deps=this.depsTail=void 0,cc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?wa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){is(this)&&this.run()}get dirty(){return is(this)}}let Xl=0,mo,go;function $l(n,t=!1){if(n.flags|=8,t){n.next=go,go=n;return}n.next=mo,mo=n}function Gs(){Xl++}function js(){if(--Xl>0)return;if(go){let t=go;for(go=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;mo;){let t=mo;for(mo=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){n||(n=r)}t=e}}if(n)throw n}function Yl(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Jl(n){let t,e=n.depsTail,r=e;for(;r;){const o=r.prevDep;r.version===-1?(r===e&&(e=o),qs(r),Ep(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=o}n.deps=t,n.depsTail=e}function is(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ql(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Ql(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===So)||(n.globalVersion=So,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!is(n))))return;n.flags|=2;const t=n.dep,e=ze,r=Qt;ze=n,Qt=!0;try{Yl(n);const o=n.fn(n._value);(t.version===0||$n(o,n._value))&&(n.flags|=128,n._value=o,t.version++)}catch(o){throw t.version++,o}finally{ze=e,Qt=r,Jl(n),n.flags&=-3}}function qs(n,t=!1){const{dep:e,prevSub:r,nextSub:o}=n;if(r&&(r.nextSub=o,n.prevSub=void 0),o&&(o.prevSub=r,n.nextSub=void 0),e.subs===n&&(e.subs=r,!r&&e.computed)){e.computed.flags&=-5;for(let i=e.computed.deps;i;i=i.nextDep)qs(i,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function Ep(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let Qt=!0;const Zl=[];function Pn(){Zl.push(Qt),Qt=!1}function Mn(){const n=Zl.pop();Qt=n===void 0?!0:n}function cc(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=ze;ze=void 0;try{t()}finally{ze=e}}}let So=0;class Ip{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ks{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ze||!Qt||ze===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==ze)e=this.activeLink=new Ip(ze,this),ze.deps?(e.prevDep=ze.depsTail,ze.depsTail.nextDep=e,ze.depsTail=e):ze.deps=ze.depsTail=e,ef(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const r=e.nextDep;r.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=r),e.prevDep=ze.depsTail,e.nextDep=void 0,ze.depsTail.nextDep=e,ze.depsTail=e,ze.deps===e&&(ze.deps=r)}return e}trigger(t){this.version++,So++,this.notify(t)}notify(t){Gs();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{js()}}}function ef(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)ef(r)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const as=new WeakMap,yr=Symbol(""),ss=Symbol(""),ko=Symbol("");function vt(n,t,e){if(Qt&&ze){let r=as.get(n);r||as.set(n,r=new Map);let o=r.get(e);o||(r.set(e,o=new Ks),o.map=r,o.key=e),o.track()}}function Tn(n,t,e,r,o,i){const a=as.get(n);if(!a){So++;return}const s=u=>{u&&u.trigger()};if(Gs(),t==="clear")a.forEach(s);else{const u=xe(n),c=u&&zs(e);if(u&&e==="length"){const l=Number(r);a.forEach((f,h)=>{(h==="length"||h===ko||!rr(h)&&h>=l)&&s(f)})}else switch((e!==void 0||a.has(void 0))&&s(a.get(e)),c&&s(a.get(ko)),t){case"add":u?c&&s(a.get("length")):(s(a.get(yr)),Hr(n)&&s(a.get(ss)));break;case"delete":u||(s(a.get(yr)),Hr(n)&&s(a.get(ss)));break;case"set":Hr(n)&&s(a.get(yr));break}}js()}function Ar(n){const t=Oe(n);return t===n?t:(vt(t,"iterate",ko),Zt(n)?t:t.map(Ct))}function Xs(n){return vt(n=Oe(n),"iterate",ko),n}const Rp={__proto__:null,[Symbol.iterator](){return _a(this,Symbol.iterator,Ct)},concat(...n){return Ar(this).concat(...n.map(t=>xe(t)?Ar(t):t))},entries(){return _a(this,"entries",n=>(n[1]=Ct(n[1]),n))},every(n,t){return Rn(this,"every",n,t,void 0,arguments)},filter(n,t){return Rn(this,"filter",n,t,e=>e.map(Ct),arguments)},find(n,t){return Rn(this,"find",n,t,Ct,arguments)},findIndex(n,t){return Rn(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return Rn(this,"findLast",n,t,Ct,arguments)},findLastIndex(n,t){return Rn(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return Rn(this,"forEach",n,t,void 0,arguments)},includes(...n){return Ca(this,"includes",n)},indexOf(...n){return Ca(this,"indexOf",n)},join(n){return Ar(this).join(n)},lastIndexOf(...n){return Ca(this,"lastIndexOf",n)},map(n,t){return Rn(this,"map",n,t,void 0,arguments)},pop(){return so(this,"pop")},push(...n){return so(this,"push",n)},reduce(n,...t){return lc(this,"reduce",n,t)},reduceRight(n,...t){return lc(this,"reduceRight",n,t)},shift(){return so(this,"shift")},some(n,t){return Rn(this,"some",n,t,void 0,arguments)},splice(...n){return so(this,"splice",n)},toReversed(){return Ar(this).toReversed()},toSorted(n){return Ar(this).toSorted(n)},toSpliced(...n){return Ar(this).toSpliced(...n)},unshift(...n){return so(this,"unshift",n)},values(){return _a(this,"values",Ct)}};function _a(n,t,e){const r=Xs(n),o=r[t]();return r!==n&&!Zt(n)&&(o._next=o.next,o.next=()=>{const i=o._next();return i.value&&(i.value=e(i.value)),i}),o}const Sp=Array.prototype;function Rn(n,t,e,r,o,i){const a=Xs(n),s=a!==n&&!Zt(n),u=a[t];if(u!==Sp[t]){const f=u.apply(n,i);return s?Ct(f):f}let c=e;a!==n&&(s?c=function(f,h){return e.call(this,Ct(f),h,n)}:e.length>2&&(c=function(f,h){return e.call(this,f,h,n)}));const l=u.call(a,c,r);return s&&o?o(l):l}function lc(n,t,e,r){const o=Xs(n);let i=e;return o!==n&&(Zt(n)?e.length>3&&(i=function(a,s,u){return e.call(this,a,s,u,n)}):i=function(a,s,u){return e.call(this,a,Ct(s),u,n)}),o[t](i,...r)}function Ca(n,t,e){const r=Oe(n);vt(r,"iterate",ko);const o=r[t](...e);return(o===-1||o===!1)&&Qs(e[0])?(e[0]=Oe(e[0]),r[t](...e)):o}function so(n,t,e=[]){Pn(),Gs();const r=Oe(n)[t].apply(n,e);return js(),Mn(),r}const kp=Ws("__proto__,__v_isRef,__isVue"),tf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(rr));function Ap(n){rr(n)||(n=String(n));const t=Oe(this);return vt(t,"has",n),t.hasOwnProperty(n)}class nf{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,r){if(e==="__v_skip")return t.__v_skip;const o=this._isReadonly,i=this._isShallow;if(e==="__v_isReactive")return!o;if(e==="__v_isReadonly")return o;if(e==="__v_isShallow")return i;if(e==="__v_raw")return r===(o?i?Wp:sf:i?af:of).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const a=xe(t);if(!o){let u;if(a&&(u=Rp[e]))return u;if(e==="hasOwnProperty")return Ap}const s=Reflect.get(t,e,bt(t)?t:r);return(rr(e)?tf.has(e):kp(e))||(o||vt(t,"get",e),i)?s:bt(s)?a&&zs(e)?s:s.value:$e(s)?o?uf(s):Ys(s):s}}class rf extends nf{constructor(t=!1){super(!1,t)}set(t,e,r,o){let i=t[e];if(!this._isShallow){const u=br(i);if(!Zt(r)&&!br(r)&&(i=Oe(i),r=Oe(r)),!xe(t)&&bt(i)&&!bt(r))return u?!1:(i.value=r,!0)}const a=xe(t)&&zs(e)?Number(e)<t.length:Be(t,e),s=Reflect.set(t,e,r,bt(t)?t:o);return t===Oe(o)&&(a?$n(r,i)&&Tn(t,"set",e,r):Tn(t,"add",e,r)),s}deleteProperty(t,e){const r=Be(t,e);t[e];const o=Reflect.deleteProperty(t,e);return o&&r&&Tn(t,"delete",e,void 0),o}has(t,e){const r=Reflect.has(t,e);return(!rr(e)||!tf.has(e))&&vt(t,"has",e),r}ownKeys(t){return vt(t,"iterate",xe(t)?"length":yr),Reflect.ownKeys(t)}}class Dp extends nf{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Tp=new rf,Np=new Dp,Fp=new rf(!0),us=n=>n,Jo=n=>Reflect.getPrototypeOf(n);function Pp(n,t,e){return function(...r){const o=this.__v_raw,i=Oe(o),a=Hr(i),s=n==="entries"||n===Symbol.iterator&&a,u=n==="keys"&&a,c=o[n](...r),l=e?us:t?cs:Ct;return!t&&vt(i,"iterate",u?ss:yr),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:s?[l(f[0]),l(f[1])]:l(f),done:h}},[Symbol.iterator](){return this}}}}function Qo(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Mp(n,t){const e={get(o){const i=this.__v_raw,a=Oe(i),s=Oe(o);n||($n(o,s)&&vt(a,"get",o),vt(a,"get",s));const{has:u}=Jo(a),c=t?us:n?cs:Ct;if(u.call(a,o))return c(i.get(o));if(u.call(a,s))return c(i.get(s));i!==a&&i.get(o)},get size(){const o=this.__v_raw;return!n&&vt(Oe(o),"iterate",yr),Reflect.get(o,"size",o)},has(o){const i=this.__v_raw,a=Oe(i),s=Oe(o);return n||($n(o,s)&&vt(a,"has",o),vt(a,"has",s)),o===s?i.has(o):i.has(o)||i.has(s)},forEach(o,i){const a=this,s=a.__v_raw,u=Oe(s),c=t?us:n?cs:Ct;return!n&&vt(u,"iterate",yr),s.forEach((l,f)=>o.call(i,c(l),c(f),a))}};return Rt(e,n?{add:Qo("add"),set:Qo("set"),delete:Qo("delete"),clear:Qo("clear")}:{add(o){!t&&!Zt(o)&&!br(o)&&(o=Oe(o));const i=Oe(this);return Jo(i).has.call(i,o)||(i.add(o),Tn(i,"add",o,o)),this},set(o,i){!t&&!Zt(i)&&!br(i)&&(i=Oe(i));const a=Oe(this),{has:s,get:u}=Jo(a);let c=s.call(a,o);c||(o=Oe(o),c=s.call(a,o));const l=u.call(a,o);return a.set(o,i),c?$n(i,l)&&Tn(a,"set",o,i):Tn(a,"add",o,i),this},delete(o){const i=Oe(this),{has:a,get:s}=Jo(i);let u=a.call(i,o);u||(o=Oe(o),u=a.call(i,o)),s&&s.call(i,o);const c=i.delete(o);return u&&Tn(i,"delete",o,void 0),c},clear(){const o=Oe(this),i=o.size!==0,a=o.clear();return i&&Tn(o,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=Pp(o,n,t)}),e}function $s(n,t){const e=Mp(n,t);return(r,o,i)=>o==="__v_isReactive"?!n:o==="__v_isReadonly"?n:o==="__v_raw"?r:Reflect.get(Be(e,o)&&o in r?e:r,o,i)}const Op={get:$s(!1,!1)},Bp={get:$s(!1,!0)},Lp={get:$s(!0,!1)},of=new WeakMap,af=new WeakMap,sf=new WeakMap,Wp=new WeakMap;function Up(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Vp(n){return n.__v_skip||!Object.isExtensible(n)?0:Up(dp(n))}function Ys(n){return br(n)?n:Js(n,!1,Tp,Op,of)}function zp(n){return Js(n,!1,Fp,Bp,af)}function uf(n){return Js(n,!0,Np,Lp,sf)}function Js(n,t,e,r,o){if(!$e(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const i=Vp(n);if(i===0)return n;const a=o.get(n);if(a)return a;const s=new Proxy(n,i===2?r:e);return o.set(n,s),s}function yo(n){return br(n)?yo(n.__v_raw):!!(n&&n.__v_isReactive)}function br(n){return!!(n&&n.__v_isReadonly)}function Zt(n){return!!(n&&n.__v_isShallow)}function Qs(n){return n?!!n.__v_raw:!1}function Oe(n){const t=n&&n.__v_raw;return t?Oe(t):n}function Hp(n){return!Be(n,"__v_skip")&&Object.isExtensible(n)&&rs(n,"__v_skip",!0),n}const Ct=n=>$e(n)?Ys(n):n,cs=n=>$e(n)?uf(n):n;function bt(n){return n?n.__v_isRef===!0:!1}function $t(n){return Gp(n,!1)}function Gp(n,t){return bt(n)?n:new jp(n,t)}class jp{constructor(t,e){this.dep=new Ks,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:Oe(t),this._value=e?t:Ct(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,r=this.__v_isShallow||Zt(t)||br(t);t=r?t:Oe(t),$n(t,e)&&(this._rawValue=t,this._value=r?t:Ct(t),this.dep.trigger())}}function qp(n){return bt(n)?n.value:n}const Kp={get:(n,t,e)=>t==="__v_raw"?n:qp(Reflect.get(n,t,e)),set:(n,t,e,r)=>{const o=n[t];return bt(o)&&!bt(e)?(o.value=e,!0):Reflect.set(n,t,e,r)}};function cf(n){return yo(n)?n:new Proxy(n,Kp)}class Xp{constructor(t,e,r){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Ks(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=So-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ze!==this)return $l(this,!0),!0}get value(){const t=this.dep.track();return Ql(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function $p(n,t,e=!1){let r,o;return Ee(n)?r=n:(r=n.get,o=n.set),new Xp(r,o,e)}const Zo={},bi=new WeakMap;let fr;function Yp(n,t=!1,e=fr){if(e){let r=bi.get(e);r||bi.set(e,r=[]),r.push(n)}}function Jp(n,t,e=Ve){const{immediate:r,deep:o,once:i,scheduler:a,augmentJob:s,call:u}=e,c=y=>o?y:Zt(y)||o===!1||o===0?Nn(y,1):Nn(y);let l,f,h,d,p=!1,v=!1;if(bt(n)?(f=()=>n.value,p=Zt(n)):yo(n)?(f=()=>c(n),p=!0):xe(n)?(v=!0,p=n.some(y=>yo(y)||Zt(y)),f=()=>n.map(y=>{if(bt(y))return y.value;if(yo(y))return c(y);if(Ee(y))return u?u(y,2):y()})):Ee(n)?t?f=u?()=>u(n,2):n:f=()=>{if(h){Pn();try{h()}finally{Mn()}}const y=fr;fr=l;try{return u?u(n,3,[d]):n(d)}finally{fr=y}}:f=pn,t&&o){const y=f,w=o===!0?1/0:o;f=()=>Nn(y(),w)}const m=Cp(),g=()=>{l.stop(),m&&m.active&&Vs(m.effects,l)};if(i&&t){const y=t;t=(...w)=>{y(...w),g()}}let b=v?new Array(n.length).fill(Zo):Zo;const x=y=>{if(!(!(l.flags&1)||!l.dirty&&!y))if(t){const w=l.run();if(o||p||(v?w.some((_,k)=>$n(_,b[k])):$n(w,b))){h&&h();const _=fr;fr=l;try{const k=[w,b===Zo?void 0:v&&b[0]===Zo?[]:b,d];b=w,u?u(t,3,k):t(...k)}finally{fr=_}}}else l.run()};return s&&s(x),l=new Kl(f),l.scheduler=a?()=>a(x,!1):x,d=y=>Yp(y,!1,l),h=l.onStop=()=>{const y=bi.get(l);if(y){if(u)u(y,4);else for(const w of y)w();bi.delete(l)}},t?r?x(!0):b=l.run():a?a(x.bind(null,!0),!0):l.run(),g.pause=l.pause.bind(l),g.resume=l.resume.bind(l),g.stop=g,g}function Nn(n,t=1/0,e){if(t<=0||!$e(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),t--,bt(n))Nn(n.value,t,e);else if(xe(n))for(let r=0;r<n.length;r++)Nn(n[r],t,e);else if(Wl(n)||Hr(n))n.forEach(r=>{Nn(r,t,e)});else if(zl(n)){for(const r in n)Nn(n[r],t,e);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&Nn(n[r],t,e)}return n}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Wo(n,t,e,r){try{return r?n(...r):n()}catch(o){Qi(o,t,e)}}function xn(n,t,e,r){if(Ee(n)){const o=Wo(n,t,e,r);return o&&Ul(o)&&o.catch(i=>{Qi(i,t,e)}),o}if(xe(n)){const o=[];for(let i=0;i<n.length;i++)o.push(xn(n[i],t,e,r));return o}}function Qi(n,t,e,r=!0){const o=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||Ve;if(t){let s=t.parent;const u=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;s;){const l=s.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](n,u,c)===!1)return}s=s.parent}if(i){Pn(),Wo(i,null,10,[n,u,c]),Mn();return}}Qp(n,e,o,r,a)}function Qp(n,t,e,r=!0,o=!1){if(o)throw n;console.error(n)}const Et=[];let sn=-1;const Gr=[];let jn=null,Or=0;const lf=Promise.resolve();let wi=null;function Zp(n){const t=wi||lf;return n?t.then(this?n.bind(this):n):t}function ev(n){let t=sn+1,e=Et.length;for(;t<e;){const r=t+e>>>1,o=Et[r],i=Ao(o);i<n||i===n&&o.flags&2?t=r+1:e=r}return t}function Zs(n){if(!(n.flags&1)){const t=Ao(n),e=Et[Et.length-1];!e||!(n.flags&2)&&t>=Ao(e)?Et.push(n):Et.splice(ev(t),0,n),n.flags|=1,ff()}}function ff(){wi||(wi=lf.then(df))}function tv(n){xe(n)?Gr.push(...n):jn&&n.id===-1?jn.splice(Or+1,0,n):n.flags&1||(Gr.push(n),n.flags|=1),ff()}function fc(n,t,e=sn+1){for(;e<Et.length;e++){const r=Et[e];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;Et.splice(e,1),e--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function hf(n){if(Gr.length){const t=[...new Set(Gr)].sort((e,r)=>Ao(e)-Ao(r));if(Gr.length=0,jn){jn.push(...t);return}for(jn=t,Or=0;Or<jn.length;Or++){const e=jn[Or];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}jn=null,Or=0}}const Ao=n=>n.id==null?n.flags&2?-1:1/0:n.id;function df(n){try{for(sn=0;sn<Et.length;sn++){const t=Et[sn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Wo(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;sn<Et.length;sn++){const t=Et[sn];t&&(t.flags&=-2)}sn=-1,Et.length=0,hf(),wi=null,(Et.length||Gr.length)&&df()}}let qt=null,pf=null;function _i(n){const t=qt;return qt=n,pf=n&&n.type.__scopeId||null,t}function nv(n,t=qt,e){if(!t||n._n)return n;const r=(...o)=>{r._d&&bc(-1);const i=_i(t);let a;try{a=n(...o)}finally{_i(i),r._d&&bc(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function rv(n,t){if(qt===null)return n;const e=na(qt),r=n.dirs||(n.dirs=[]);for(let o=0;o<t.length;o++){let[i,a,s,u=Ve]=t[o];i&&(Ee(i)&&(i={mounted:i,updated:i}),i.deep&&Nn(a),r.push({dir:i,instance:e,value:a,oldValue:void 0,arg:s,modifiers:u}))}return n}function ur(n,t,e,r){const o=n.dirs,i=t&&t.dirs;for(let a=0;a<o.length;a++){const s=o[a];i&&(s.oldValue=i[a].value);let u=s.dir[r];u&&(Pn(),xn(u,e,8,[n.el,s,n,t]),Mn())}}const ov=Symbol("_vte"),iv=n=>n.__isTeleport;function eu(n,t){n.shapeFlag&6&&n.component?(n.transition=t,eu(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function vf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function xo(n,t,e,r,o=!1){if(xe(n)){n.forEach((p,v)=>xo(p,t&&(xe(t)?t[v]:t),e,r,o));return}if(bo(r)&&!o){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&xo(n,t,e,r.component.subTree);return}const i=r.shapeFlag&4?na(r.component):r.el,a=o?null:i,{i:s,r:u}=n,c=t&&t.r,l=s.refs===Ve?s.refs={}:s.refs,f=s.setupState,h=Oe(f),d=f===Ve?()=>!1:p=>Be(h,p);if(c!=null&&c!==u&&(tt(c)?(l[c]=null,d(c)&&(f[c]=null)):bt(c)&&(c.value=null)),Ee(u))Wo(u,s,12,[a,l]);else{const p=tt(u),v=bt(u);if(p||v){const m=()=>{if(n.f){const g=p?d(u)?f[u]:l[u]:u.value;o?xe(g)&&Vs(g,i):xe(g)?g.includes(i)||g.push(i):p?(l[u]=[i],d(u)&&(f[u]=l[u])):(u.value=[i],n.k&&(l[n.k]=u.value))}else p?(l[u]=a,d(u)&&(f[u]=a)):v&&(u.value=a,n.k&&(l[n.k]=a))};a?(m.id=-1,Pt(m,e)):m()}}}Ji().requestIdleCallback;Ji().cancelIdleCallback;const bo=n=>!!n.type.__asyncLoader,mf=n=>n.type.__isKeepAlive;function av(n,t){gf(n,"a",t)}function sv(n,t){gf(n,"da",t)}function gf(n,t,e=It){const r=n.__wdc||(n.__wdc=()=>{let o=e;for(;o;){if(o.isDeactivated)return;o=o.parent}return n()});if(Zi(t,r,e),e){let o=e.parent;for(;o&&o.parent;)mf(o.parent.vnode)&&uv(r,t,e,o),o=o.parent}}function uv(n,t,e,r){const o=Zi(t,n,r,!0);bf(()=>{Vs(r[t],o)},e)}function Zi(n,t,e=It,r=!1){if(e){const o=e[n]||(e[n]=[]),i=t.__weh||(t.__weh=(...a)=>{Pn();const s=Uo(e),u=xn(t,e,n,a);return s(),Mn(),u});return r?o.unshift(i):o.push(i),i}}const On=n=>(t,e=It)=>{(!To||n==="sp")&&Zi(n,(...r)=>t(...r),e)},cv=On("bm"),yf=On("m"),lv=On("bu"),fv=On("u"),xf=On("bum"),bf=On("um"),hv=On("sp"),dv=On("rtg"),pv=On("rtc");function vv(n,t=It){Zi("ec",n,t)}const mv=Symbol.for("v-ndc"),ls=n=>n?zf(n)?na(n):ls(n.parent):null,wo=Rt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ls(n.parent),$root:n=>ls(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>_f(n),$forceUpdate:n=>n.f||(n.f=()=>{Zs(n.update)}),$nextTick:n=>n.n||(n.n=Zp.bind(n.proxy)),$watch:n=>Lv.bind(n)}),Ea=(n,t)=>n!==Ve&&!n.__isScriptSetup&&Be(n,t),gv={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:r,data:o,props:i,accessCache:a,type:s,appContext:u}=n;let c;if(t[0]!=="$"){const d=a[t];if(d!==void 0)switch(d){case 1:return r[t];case 2:return o[t];case 4:return e[t];case 3:return i[t]}else{if(Ea(r,t))return a[t]=1,r[t];if(o!==Ve&&Be(o,t))return a[t]=2,o[t];if((c=n.propsOptions[0])&&Be(c,t))return a[t]=3,i[t];if(e!==Ve&&Be(e,t))return a[t]=4,e[t];fs&&(a[t]=0)}}const l=wo[t];let f,h;if(l)return t==="$attrs"&&vt(n.attrs,"get",""),l(n);if((f=s.__cssModules)&&(f=f[t]))return f;if(e!==Ve&&Be(e,t))return a[t]=4,e[t];if(h=u.config.globalProperties,Be(h,t))return h[t]},set({_:n},t,e){const{data:r,setupState:o,ctx:i}=n;return Ea(o,t)?(o[t]=e,!0):r!==Ve&&Be(r,t)?(r[t]=e,!0):Be(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(i[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:r,appContext:o,propsOptions:i}},a){let s;return!!e[a]||n!==Ve&&Be(n,a)||Ea(t,a)||(s=i[0])&&Be(s,a)||Be(r,a)||Be(wo,a)||Be(o.config.globalProperties,a)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:Be(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function hc(n){return xe(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let fs=!0;function yv(n){const t=_f(n),e=n.proxy,r=n.ctx;fs=!1,t.beforeCreate&&dc(t.beforeCreate,n,"bc");const{data:o,computed:i,methods:a,watch:s,provide:u,inject:c,created:l,beforeMount:f,mounted:h,beforeUpdate:d,updated:p,activated:v,deactivated:m,beforeDestroy:g,beforeUnmount:b,destroyed:x,unmounted:y,render:w,renderTracked:_,renderTriggered:k,errorCaptured:S,serverPrefetch:I,expose:E,inheritAttrs:F,components:N,directives:U,filters:V}=t;if(c&&xv(c,r,null),a)for(const L in a){const B=a[L];Ee(B)&&(r[L]=B.bind(e))}if(o){const L=o.call(e,e);$e(L)&&(n.data=Ys(L))}if(fs=!0,i)for(const L in i){const B=i[L],K=Ee(B)?B.bind(e,e):Ee(B.get)?B.get.bind(e,e):pn,Y=!Ee(B)&&Ee(B.set)?B.set.bind(e):pn,ne=am({get:K,set:Y});Object.defineProperty(r,L,{enumerable:!0,configurable:!0,get:()=>ne.value,set:oe=>ne.value=oe})}if(s)for(const L in s)wf(s[L],r,e,L);if(u){const L=Ee(u)?u.call(e):u;Reflect.ownKeys(L).forEach(B=>{Iv(B,L[B])})}l&&dc(l,n,"c");function H(L,B){xe(B)?B.forEach(K=>L(K.bind(e))):B&&L(B.bind(e))}if(H(cv,f),H(yf,h),H(lv,d),H(fv,p),H(av,v),H(sv,m),H(vv,S),H(pv,_),H(dv,k),H(xf,b),H(bf,y),H(hv,I),xe(E))if(E.length){const L=n.exposed||(n.exposed={});E.forEach(B=>{Object.defineProperty(L,B,{get:()=>e[B],set:K=>e[B]=K})})}else n.exposed||(n.exposed={});w&&n.render===pn&&(n.render=w),F!=null&&(n.inheritAttrs=F),N&&(n.components=N),U&&(n.directives=U),I&&vf(n)}function xv(n,t,e=pn){xe(n)&&(n=hs(n));for(const r in n){const o=n[r];let i;$e(o)?"default"in o?i=vi(o.from||r,o.default,!0):i=vi(o.from||r):i=vi(o),bt(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[r]=i}}function dc(n,t,e){xn(xe(n)?n.map(r=>r.bind(t.proxy)):n.bind(t.proxy),t,e)}function wf(n,t,e,r){let o=r.includes(".")?Mf(e,r):()=>e[r];if(tt(n)){const i=t[n];Ee(i)&&Ra(o,i)}else if(Ee(n))Ra(o,n.bind(e));else if($e(n))if(xe(n))n.forEach(i=>wf(i,t,e,r));else{const i=Ee(n.handler)?n.handler.bind(e):t[n.handler];Ee(i)&&Ra(o,i,n)}}function _f(n){const t=n.type,{mixins:e,extends:r}=t,{mixins:o,optionsCache:i,config:{optionMergeStrategies:a}}=n.appContext,s=i.get(t);let u;return s?u=s:!o.length&&!e&&!r?u=t:(u={},o.length&&o.forEach(c=>Ci(u,c,a,!0)),Ci(u,t,a)),$e(t)&&i.set(t,u),u}function Ci(n,t,e,r=!1){const{mixins:o,extends:i}=t;i&&Ci(n,i,e,!0),o&&o.forEach(a=>Ci(n,a,e,!0));for(const a in t)if(!(r&&a==="expose")){const s=bv[a]||e&&e[a];n[a]=s?s(n[a],t[a]):t[a]}return n}const bv={data:pc,props:vc,emits:vc,methods:po,computed:po,beforeCreate:_t,created:_t,beforeMount:_t,mounted:_t,beforeUpdate:_t,updated:_t,beforeDestroy:_t,beforeUnmount:_t,destroyed:_t,unmounted:_t,activated:_t,deactivated:_t,errorCaptured:_t,serverPrefetch:_t,components:po,directives:po,watch:_v,provide:pc,inject:wv};function pc(n,t){return t?n?function(){return Rt(Ee(n)?n.call(this,this):n,Ee(t)?t.call(this,this):t)}:t:n}function wv(n,t){return po(hs(n),hs(t))}function hs(n){if(xe(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function _t(n,t){return n?[...new Set([].concat(n,t))]:t}function po(n,t){return n?Rt(Object.create(null),n,t):t}function vc(n,t){return n?xe(n)&&xe(t)?[...new Set([...n,...t])]:Rt(Object.create(null),hc(n),hc(t??{})):t}function _v(n,t){if(!n)return t;if(!t)return n;const e=Rt(Object.create(null),n);for(const r in t)e[r]=_t(n[r],t[r]);return e}function Cf(){return{app:null,config:{isNativeTag:fp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cv=0;function Ev(n,t){return function(r,o=null){Ee(r)||(r=Rt({},r)),o!=null&&!$e(o)&&(o=null);const i=Cf(),a=new WeakSet,s=[];let u=!1;const c=i.app={_uid:Cv++,_component:r,_props:o,_container:null,_context:i,_instance:null,version:sm,get config(){return i.config},set config(l){},use(l,...f){return a.has(l)||(l&&Ee(l.install)?(a.add(l),l.install(c,...f)):Ee(l)&&(a.add(l),l(c,...f))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,f){return f?(i.components[l]=f,c):i.components[l]},directive(l,f){return f?(i.directives[l]=f,c):i.directives[l]},mount(l,f,h){if(!u){const d=c._ceVNode||vn(r,o);return d.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),n(d,l,h),u=!0,c._container=l,l.__vue_app__=c,na(d.component)}},onUnmount(l){s.push(l)},unmount(){u&&(xn(s,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(l,f){return i.provides[l]=f,c},runWithContext(l){const f=jr;jr=c;try{return l()}finally{jr=f}}};return c}}let jr=null;function Iv(n,t){if(It){let e=It.provides;const r=It.parent&&It.parent.provides;r===e&&(e=It.provides=Object.create(r)),e[n]=t}}function vi(n,t,e=!1){const r=It||qt;if(r||jr){let o=jr?jr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(o&&n in o)return o[n];if(arguments.length>1)return e&&Ee(t)?t.call(r&&r.proxy):t}}const Ef={},If=()=>Object.create(Ef),Rf=n=>Object.getPrototypeOf(n)===Ef;function Rv(n,t,e,r=!1){const o={},i=If();n.propsDefaults=Object.create(null),Sf(n,t,o,i);for(const a in n.propsOptions[0])a in o||(o[a]=void 0);e?n.props=r?o:zp(o):n.type.props?n.props=o:n.props=i,n.attrs=i}function Sv(n,t,e,r){const{props:o,attrs:i,vnode:{patchFlag:a}}=n,s=Oe(o),[u]=n.propsOptions;let c=!1;if((r||a>0)&&!(a&16)){if(a&8){const l=n.vnode.dynamicProps;for(let f=0;f<l.length;f++){let h=l[f];if(ea(n.emitsOptions,h))continue;const d=t[h];if(u)if(Be(i,h))d!==i[h]&&(i[h]=d,c=!0);else{const p=Zn(h);o[p]=ds(u,s,p,d,n,!1)}else d!==i[h]&&(i[h]=d,c=!0)}}}else{Sf(n,t,o,i)&&(c=!0);let l;for(const f in s)(!t||!Be(t,f)&&((l=or(f))===f||!Be(t,l)))&&(u?e&&(e[f]!==void 0||e[l]!==void 0)&&(o[f]=ds(u,s,f,void 0,n,!0)):delete o[f]);if(i!==s)for(const f in i)(!t||!Be(t,f))&&(delete i[f],c=!0)}c&&Tn(n.attrs,"set","")}function Sf(n,t,e,r){const[o,i]=n.propsOptions;let a=!1,s;if(t)for(let u in t){if(vo(u))continue;const c=t[u];let l;o&&Be(o,l=Zn(u))?!i||!i.includes(l)?e[l]=c:(s||(s={}))[l]=c:ea(n.emitsOptions,u)||(!(u in r)||c!==r[u])&&(r[u]=c,a=!0)}if(i){const u=Oe(e),c=s||Ve;for(let l=0;l<i.length;l++){const f=i[l];e[f]=ds(o,u,f,c[f],n,!Be(c,f))}}return a}function ds(n,t,e,r,o,i){const a=n[e];if(a!=null){const s=Be(a,"default");if(s&&r===void 0){const u=a.default;if(a.type!==Function&&!a.skipFactory&&Ee(u)){const{propsDefaults:c}=o;if(e in c)r=c[e];else{const l=Uo(o);r=c[e]=u.call(null,t),l()}}else r=u;o.ce&&o.ce._setProp(e,r)}a[0]&&(i&&!s?r=!1:a[1]&&(r===""||r===or(e))&&(r=!0))}return r}const kv=new WeakMap;function kf(n,t,e=!1){const r=e?kv:t.propsCache,o=r.get(n);if(o)return o;const i=n.props,a={},s=[];let u=!1;if(!Ee(n)){const l=f=>{u=!0;const[h,d]=kf(f,t,!0);Rt(a,h),d&&s.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}if(!i&&!u)return $e(n)&&r.set(n,zr),zr;if(xe(i))for(let l=0;l<i.length;l++){const f=Zn(i[l]);mc(f)&&(a[f]=Ve)}else if(i)for(const l in i){const f=Zn(l);if(mc(f)){const h=i[l],d=a[f]=xe(h)||Ee(h)?{type:h}:Rt({},h),p=d.type;let v=!1,m=!0;if(xe(p))for(let g=0;g<p.length;++g){const b=p[g],x=Ee(b)&&b.name;if(x==="Boolean"){v=!0;break}else x==="String"&&(m=!1)}else v=Ee(p)&&p.name==="Boolean";d[0]=v,d[1]=m,(v||Be(d,"default"))&&s.push(f)}}const c=[a,s];return $e(n)&&r.set(n,c),c}function mc(n){return n[0]!=="$"&&!vo(n)}const tu=n=>n[0]==="_"||n==="$stable",nu=n=>xe(n)?n.map(cn):[cn(n)],Av=(n,t,e)=>{if(t._n)return t;const r=nv((...o)=>nu(t(...o)),e);return r._c=!1,r},Af=(n,t,e)=>{const r=n._ctx;for(const o in n){if(tu(o))continue;const i=n[o];if(Ee(i))t[o]=Av(o,i,r);else if(i!=null){const a=nu(i);t[o]=()=>a}}},Df=(n,t)=>{const e=nu(t);n.slots.default=()=>e},Tf=(n,t,e)=>{for(const r in t)(e||!tu(r))&&(n[r]=t[r])},Dv=(n,t,e)=>{const r=n.slots=If();if(n.vnode.shapeFlag&32){const o=t.__;o&&rs(r,"__",o,!0);const i=t._;i?(Tf(r,t,e),e&&rs(r,"_",i,!0)):Af(t,r)}else t&&Df(n,t)},Tv=(n,t,e)=>{const{vnode:r,slots:o}=n;let i=!0,a=Ve;if(r.shapeFlag&32){const s=t._;s?e&&s===1?i=!1:Tf(o,t,e):(i=!t.$stable,Af(t,o)),a=t}else t&&(Df(n,t),a={default:1});if(i)for(const s in o)!tu(s)&&a[s]==null&&delete o[s]},Pt=jv;function Nv(n){return Fv(n)}function Fv(n,t){const e=Ji();e.__VUE__=!0;const{insert:r,remove:o,patchProp:i,createElement:a,createText:s,createComment:u,setText:c,setElementText:l,parentNode:f,nextSibling:h,setScopeId:d=pn,insertStaticContent:p}=n,v=(A,D,M,q=null,j=null,$=null,ee=void 0,Q=null,Z=!!D.dynamicChildren)=>{if(A===D)return;A&&!uo(A,D)&&(q=Re(A),oe(A,j,$,!0),A=null),D.patchFlag===-2&&(Z=!1,D.dynamicChildren=null);const{type:J,ref:ue,shapeFlag:te}=D;switch(J){case ta:m(A,D,M,q);break;case er:g(A,D,M,q);break;case mi:A==null&&b(D,M,q,ee);break;case Dn:N(A,D,M,q,j,$,ee,Q,Z);break;default:te&1?w(A,D,M,q,j,$,ee,Q,Z):te&6?U(A,D,M,q,j,$,ee,Q,Z):(te&64||te&128)&&J.process(A,D,M,q,j,$,ee,Q,Z,We)}ue!=null&&j?xo(ue,A&&A.ref,$,D||A,!D):ue==null&&A&&A.ref!=null&&xo(A.ref,null,$,A,!0)},m=(A,D,M,q)=>{if(A==null)r(D.el=s(D.children),M,q);else{const j=D.el=A.el;D.children!==A.children&&c(j,D.children)}},g=(A,D,M,q)=>{A==null?r(D.el=u(D.children||""),M,q):D.el=A.el},b=(A,D,M,q)=>{[A.el,A.anchor]=p(A.children,D,M,q,A.el,A.anchor)},x=({el:A,anchor:D},M,q)=>{let j;for(;A&&A!==D;)j=h(A),r(A,M,q),A=j;r(D,M,q)},y=({el:A,anchor:D})=>{let M;for(;A&&A!==D;)M=h(A),o(A),A=M;o(D)},w=(A,D,M,q,j,$,ee,Q,Z)=>{D.type==="svg"?ee="svg":D.type==="math"&&(ee="mathml"),A==null?_(D,M,q,j,$,ee,Q,Z):I(A,D,j,$,ee,Q,Z)},_=(A,D,M,q,j,$,ee,Q)=>{let Z,J;const{props:ue,shapeFlag:te,transition:ce,dirs:ve}=A;if(Z=A.el=a(A.type,$,ue&&ue.is,ue),te&8?l(Z,A.children):te&16&&S(A.children,Z,null,q,j,Ia(A,$),ee,Q),ve&&ur(A,null,q,"created"),k(Z,A,A.scopeId,ee,q),ue){for(const Pe in ue)Pe!=="value"&&!vo(Pe)&&i(Z,Pe,null,ue[Pe],$,q);"value"in ue&&i(Z,"value",null,ue.value,$),(J=ue.onVnodeBeforeMount)&&on(J,q,A)}ve&&ur(A,null,q,"beforeMount");const ke=Pv(j,ce);ke&&ce.beforeEnter(Z),r(Z,D,M),((J=ue&&ue.onVnodeMounted)||ke||ve)&&Pt(()=>{J&&on(J,q,A),ke&&ce.enter(Z),ve&&ur(A,null,q,"mounted")},j)},k=(A,D,M,q,j)=>{if(M&&d(A,M),q)for(let $=0;$<q.length;$++)d(A,q[$]);if(j){let $=j.subTree;if(D===$||Bf($.type)&&($.ssContent===D||$.ssFallback===D)){const ee=j.vnode;k(A,ee,ee.scopeId,ee.slotScopeIds,j.parent)}}},S=(A,D,M,q,j,$,ee,Q,Z=0)=>{for(let J=Z;J<A.length;J++){const ue=A[J]=Q?qn(A[J]):cn(A[J]);v(null,ue,D,M,q,j,$,ee,Q)}},I=(A,D,M,q,j,$,ee)=>{const Q=D.el=A.el;let{patchFlag:Z,dynamicChildren:J,dirs:ue}=D;Z|=A.patchFlag&16;const te=A.props||Ve,ce=D.props||Ve;let ve;if(M&&cr(M,!1),(ve=ce.onVnodeBeforeUpdate)&&on(ve,M,D,A),ue&&ur(D,A,M,"beforeUpdate"),M&&cr(M,!0),(te.innerHTML&&ce.innerHTML==null||te.textContent&&ce.textContent==null)&&l(Q,""),J?E(A.dynamicChildren,J,Q,M,q,Ia(D,j),$):ee||B(A,D,Q,null,M,q,Ia(D,j),$,!1),Z>0){if(Z&16)F(Q,te,ce,M,j);else if(Z&2&&te.class!==ce.class&&i(Q,"class",null,ce.class,j),Z&4&&i(Q,"style",te.style,ce.style,j),Z&8){const ke=D.dynamicProps;for(let Pe=0;Pe<ke.length;Pe++){const Ie=ke[Pe],it=te[Ie],dt=ce[Ie];(dt!==it||Ie==="value")&&i(Q,Ie,it,dt,j,M)}}Z&1&&A.children!==D.children&&l(Q,D.children)}else!ee&&J==null&&F(Q,te,ce,M,j);((ve=ce.onVnodeUpdated)||ue)&&Pt(()=>{ve&&on(ve,M,D,A),ue&&ur(D,A,M,"updated")},q)},E=(A,D,M,q,j,$,ee)=>{for(let Q=0;Q<D.length;Q++){const Z=A[Q],J=D[Q],ue=Z.el&&(Z.type===Dn||!uo(Z,J)||Z.shapeFlag&198)?f(Z.el):M;v(Z,J,ue,null,q,j,$,ee,!0)}},F=(A,D,M,q,j)=>{if(D!==M){if(D!==Ve)for(const $ in D)!vo($)&&!($ in M)&&i(A,$,D[$],null,j,q);for(const $ in M){if(vo($))continue;const ee=M[$],Q=D[$];ee!==Q&&$!=="value"&&i(A,$,Q,ee,j,q)}"value"in M&&i(A,"value",D.value,M.value,j)}},N=(A,D,M,q,j,$,ee,Q,Z)=>{const J=D.el=A?A.el:s(""),ue=D.anchor=A?A.anchor:s("");let{patchFlag:te,dynamicChildren:ce,slotScopeIds:ve}=D;ve&&(Q=Q?Q.concat(ve):ve),A==null?(r(J,M,q),r(ue,M,q),S(D.children||[],M,ue,j,$,ee,Q,Z)):te>0&&te&64&&ce&&A.dynamicChildren?(E(A.dynamicChildren,ce,M,j,$,ee,Q),(D.key!=null||j&&D===j.subTree)&&Nf(A,D,!0)):B(A,D,M,ue,j,$,ee,Q,Z)},U=(A,D,M,q,j,$,ee,Q,Z)=>{D.slotScopeIds=Q,A==null?D.shapeFlag&512?j.ctx.activate(D,M,q,ee,Z):V(D,M,q,j,$,ee,Z):z(A,D,Z)},V=(A,D,M,q,j,$,ee)=>{const Q=A.component=em(A,q,j);if(mf(A)&&(Q.ctx.renderer=We),tm(Q,!1,ee),Q.asyncDep){if(j&&j.registerDep(Q,H,ee),!A.el){const Z=Q.subTree=vn(er);g(null,Z,D,M)}}else H(Q,A,D,M,j,$,ee)},z=(A,D,M)=>{const q=D.component=A.component;if(Hv(A,D,M))if(q.asyncDep&&!q.asyncResolved){L(q,D,M);return}else q.next=D,q.update();else D.el=A.el,q.vnode=D},H=(A,D,M,q,j,$,ee)=>{const Q=()=>{if(A.isMounted){let{next:te,bu:ce,u:ve,parent:ke,vnode:Pe}=A;{const Ht=Ff(A);if(Ht){te&&(te.el=Pe.el,L(A,te,ee)),Ht.asyncDep.then(()=>{A.isUnmounted||Q()});return}}let Ie=te,it;cr(A,!1),te?(te.el=Pe.el,L(A,te,ee)):te=Pe,ce&&pi(ce),(it=te.props&&te.props.onVnodeBeforeUpdate)&&on(it,ke,te,Pe),cr(A,!0);const dt=yc(A),zt=A.subTree;A.subTree=dt,v(zt,dt,f(zt.el),Re(zt),A,j,$),te.el=dt.el,Ie===null&&Gv(A,dt.el),ve&&Pt(ve,j),(it=te.props&&te.props.onVnodeUpdated)&&Pt(()=>on(it,ke,te,Pe),j)}else{let te;const{el:ce,props:ve}=D,{bm:ke,m:Pe,parent:Ie,root:it,type:dt}=A,zt=bo(D);cr(A,!1),ke&&pi(ke),!zt&&(te=ve&&ve.onVnodeBeforeMount)&&on(te,Ie,D),cr(A,!0);{it.ce&&it.ce._def.shadowRoot!==!1&&it.ce._injectChildStyle(dt);const Ht=A.subTree=yc(A);v(null,Ht,M,q,A,j,$),D.el=Ht.el}if(Pe&&Pt(Pe,j),!zt&&(te=ve&&ve.onVnodeMounted)){const Ht=D;Pt(()=>on(te,Ie,Ht),j)}(D.shapeFlag&256||Ie&&bo(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&A.a&&Pt(A.a,j),A.isMounted=!0,D=M=q=null}};A.scope.on();const Z=A.effect=new Kl(Q);A.scope.off();const J=A.update=Z.run.bind(Z),ue=A.job=Z.runIfDirty.bind(Z);ue.i=A,ue.id=A.uid,Z.scheduler=()=>Zs(ue),cr(A,!0),J()},L=(A,D,M)=>{D.component=A;const q=A.vnode.props;A.vnode=D,A.next=null,Sv(A,D.props,q,M),Tv(A,D.children,M),Pn(),fc(A),Mn()},B=(A,D,M,q,j,$,ee,Q,Z=!1)=>{const J=A&&A.children,ue=A?A.shapeFlag:0,te=D.children,{patchFlag:ce,shapeFlag:ve}=D;if(ce>0){if(ce&128){Y(J,te,M,q,j,$,ee,Q,Z);return}else if(ce&256){K(J,te,M,q,j,$,ee,Q,Z);return}}ve&8?(ue&16&&be(J,j,$),te!==J&&l(M,te)):ue&16?ve&16?Y(J,te,M,q,j,$,ee,Q,Z):be(J,j,$,!0):(ue&8&&l(M,""),ve&16&&S(te,M,q,j,$,ee,Q,Z))},K=(A,D,M,q,j,$,ee,Q,Z)=>{A=A||zr,D=D||zr;const J=A.length,ue=D.length,te=Math.min(J,ue);let ce;for(ce=0;ce<te;ce++){const ve=D[ce]=Z?qn(D[ce]):cn(D[ce]);v(A[ce],ve,M,null,j,$,ee,Q,Z)}J>ue?be(A,j,$,!0,!1,te):S(D,M,q,j,$,ee,Q,Z,te)},Y=(A,D,M,q,j,$,ee,Q,Z)=>{let J=0;const ue=D.length;let te=A.length-1,ce=ue-1;for(;J<=te&&J<=ce;){const ve=A[J],ke=D[J]=Z?qn(D[J]):cn(D[J]);if(uo(ve,ke))v(ve,ke,M,null,j,$,ee,Q,Z);else break;J++}for(;J<=te&&J<=ce;){const ve=A[te],ke=D[ce]=Z?qn(D[ce]):cn(D[ce]);if(uo(ve,ke))v(ve,ke,M,null,j,$,ee,Q,Z);else break;te--,ce--}if(J>te){if(J<=ce){const ve=ce+1,ke=ve<ue?D[ve].el:q;for(;J<=ce;)v(null,D[J]=Z?qn(D[J]):cn(D[J]),M,ke,j,$,ee,Q,Z),J++}}else if(J>ce)for(;J<=te;)oe(A[J],j,$,!0),J++;else{const ve=J,ke=J,Pe=new Map;for(J=ke;J<=ce;J++){const ct=D[J]=Z?qn(D[J]):cn(D[J]);ct.key!=null&&Pe.set(ct.key,J)}let Ie,it=0;const dt=ce-ke+1;let zt=!1,Ht=0;const In=new Array(dt);for(J=0;J<dt;J++)In[J]=0;for(J=ve;J<=te;J++){const ct=A[J];if(it>=dt){oe(ct,j,$,!0);continue}let rn;if(ct.key!=null)rn=Pe.get(ct.key);else for(Ie=ke;Ie<=ce;Ie++)if(In[Ie-ke]===0&&uo(ct,D[Ie])){rn=Ie;break}rn===void 0?oe(ct,j,$,!0):(In[rn-ke]=J+1,rn>=Ht?Ht=rn:zt=!0,v(ct,D[rn],M,null,j,$,ee,Q,Z),it++)}const kr=zt?Mv(In):zr;for(Ie=kr.length-1,J=dt-1;J>=0;J--){const ct=ke+J,rn=D[ct],sc=ct+1<ue?D[ct+1].el:q;In[J]===0?v(null,rn,M,sc,j,$,ee,Q,Z):zt&&(Ie<0||J!==kr[Ie]?ne(rn,M,sc,2):Ie--)}}},ne=(A,D,M,q,j=null)=>{const{el:$,type:ee,transition:Q,children:Z,shapeFlag:J}=A;if(J&6){ne(A.component.subTree,D,M,q);return}if(J&128){A.suspense.move(D,M,q);return}if(J&64){ee.move(A,D,M,We);return}if(ee===Dn){r($,D,M);for(let te=0;te<Z.length;te++)ne(Z[te],D,M,q);r(A.anchor,D,M);return}if(ee===mi){x(A,D,M);return}if(q!==2&&J&1&&Q)if(q===0)Q.beforeEnter($),r($,D,M),Pt(()=>Q.enter($),j);else{const{leave:te,delayLeave:ce,afterLeave:ve}=Q,ke=()=>{A.ctx.isUnmounted?o($):r($,D,M)},Pe=()=>{te($,()=>{ke(),ve&&ve()})};ce?ce($,ke,Pe):Pe()}else r($,D,M)},oe=(A,D,M,q=!1,j=!1)=>{const{type:$,props:ee,ref:Q,children:Z,dynamicChildren:J,shapeFlag:ue,patchFlag:te,dirs:ce,cacheIndex:ve}=A;if(te===-2&&(j=!1),Q!=null&&(Pn(),xo(Q,null,M,A,!0),Mn()),ve!=null&&(D.renderCache[ve]=void 0),ue&256){D.ctx.deactivate(A);return}const ke=ue&1&&ce,Pe=!bo(A);let Ie;if(Pe&&(Ie=ee&&ee.onVnodeBeforeUnmount)&&on(Ie,D,A),ue&6)_e(A.component,M,q);else{if(ue&128){A.suspense.unmount(M,q);return}ke&&ur(A,null,D,"beforeUnmount"),ue&64?A.type.remove(A,D,M,We,q):J&&!J.hasOnce&&($!==Dn||te>0&&te&64)?be(J,D,M,!1,!0):($===Dn&&te&384||!j&&ue&16)&&be(Z,D,M),q&&pe(A)}(Pe&&(Ie=ee&&ee.onVnodeUnmounted)||ke)&&Pt(()=>{Ie&&on(Ie,D,A),ke&&ur(A,null,D,"unmounted")},M)},pe=A=>{const{type:D,el:M,anchor:q,transition:j}=A;if(D===Dn){we(M,q);return}if(D===mi){y(A);return}const $=()=>{o(M),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(A.shapeFlag&1&&j&&!j.persisted){const{leave:ee,delayLeave:Q}=j,Z=()=>ee(M,$);Q?Q(A.el,$,Z):Z()}else $()},we=(A,D)=>{let M;for(;A!==D;)M=h(A),o(A),A=M;o(D)},_e=(A,D,M)=>{const{bum:q,scope:j,job:$,subTree:ee,um:Q,m:Z,a:J,parent:ue,slots:{__:te}}=A;gc(Z),gc(J),q&&pi(q),ue&&xe(te)&&te.forEach(ce=>{ue.renderCache[ce]=void 0}),j.stop(),$&&($.flags|=8,oe(ee,A,D,M)),Q&&Pt(Q,D),Pt(()=>{A.isUnmounted=!0},D),D&&D.pendingBranch&&!D.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===D.pendingId&&(D.deps--,D.deps===0&&D.resolve())},be=(A,D,M,q=!1,j=!1,$=0)=>{for(let ee=$;ee<A.length;ee++)oe(A[ee],D,M,q,j)},Re=A=>{if(A.shapeFlag&6)return Re(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const D=h(A.anchor||A.el),M=D&&D[ov];return M?h(M):D};let Se=!1;const De=(A,D,M)=>{A==null?D._vnode&&oe(D._vnode,null,null,!0):v(D._vnode||null,A,D,null,null,null,M),D._vnode=A,Se||(Se=!0,fc(),hf(),Se=!1)},We={p:v,um:oe,m:ne,r:pe,mt:V,mc:S,pc:B,pbc:E,n:Re,o:n};return{render:De,hydrate:void 0,createApp:Ev(De)}}function Ia({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function cr({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Pv(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Nf(n,t,e=!1){const r=n.children,o=t.children;if(xe(r)&&xe(o))for(let i=0;i<r.length;i++){const a=r[i];let s=o[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=o[i]=qn(o[i]),s.el=a.el),!e&&s.patchFlag!==-2&&Nf(a,s)),s.type===ta&&(s.el=a.el),s.type===er&&!s.el&&(s.el=a.el)}}function Mv(n){const t=n.slice(),e=[0];let r,o,i,a,s;const u=n.length;for(r=0;r<u;r++){const c=n[r];if(c!==0){if(o=e[e.length-1],n[o]<c){t[r]=o,e.push(r);continue}for(i=0,a=e.length-1;i<a;)s=i+a>>1,n[e[s]]<c?i=s+1:a=s;c<n[e[i]]&&(i>0&&(t[r]=e[i-1]),e[i]=r)}}for(i=e.length,a=e[i-1];i-- >0;)e[i]=a,a=t[a];return e}function Ff(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ff(t)}function gc(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}const Ov=Symbol.for("v-scx"),Bv=()=>vi(Ov);function Ra(n,t,e){return Pf(n,t,e)}function Pf(n,t,e=Ve){const{immediate:r,deep:o,flush:i,once:a}=e,s=Rt({},e),u=t&&r||!t&&i!=="post";let c;if(To){if(i==="sync"){const d=Bv();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!u){const d=()=>{};return d.stop=pn,d.resume=pn,d.pause=pn,d}}const l=It;s.call=(d,p,v)=>xn(d,l,p,v);let f=!1;i==="post"?s.scheduler=d=>{Pt(d,l&&l.suspense)}:i!=="sync"&&(f=!0,s.scheduler=(d,p)=>{p?d():Zs(d)}),s.augmentJob=d=>{t&&(d.flags|=4),f&&(d.flags|=2,l&&(d.id=l.uid,d.i=l))};const h=Jp(n,t,s);return To&&(c?c.push(h):u&&h()),h}function Lv(n,t,e){const r=this.proxy,o=tt(n)?n.includes(".")?Mf(r,n):()=>r[n]:n.bind(r,r);let i;Ee(t)?i=t:(i=t.handler,e=t);const a=Uo(this),s=Pf(o,i.bind(r),e);return a(),s}function Mf(n,t){const e=t.split(".");return()=>{let r=n;for(let o=0;o<e.length&&r;o++)r=r[e[o]];return r}}const Wv=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Zn(t)}Modifiers`]||n[`${or(t)}Modifiers`];function Uv(n,t,...e){if(n.isUnmounted)return;const r=n.vnode.props||Ve;let o=e;const i=t.startsWith("update:"),a=i&&Wv(r,t.slice(7));a&&(a.trim&&(o=e.map(l=>tt(l)?l.trim():l)),a.number&&(o=e.map(os)));let s,u=r[s=xa(t)]||r[s=xa(Zn(t))];!u&&i&&(u=r[s=xa(or(t))]),u&&xn(u,n,6,o);const c=r[s+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[s])return;n.emitted[s]=!0,xn(c,n,6,o)}}function Of(n,t,e=!1){const r=t.emitsCache,o=r.get(n);if(o!==void 0)return o;const i=n.emits;let a={},s=!1;if(!Ee(n)){const u=c=>{const l=Of(c,t,!0);l&&(s=!0,Rt(a,l))};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}return!i&&!s?($e(n)&&r.set(n,null),null):(xe(i)?i.forEach(u=>a[u]=null):Rt(a,i),$e(n)&&r.set(n,a),a)}function ea(n,t){return!n||!Xi(t)?!1:(t=t.slice(2).replace(/Once$/,""),Be(n,t[0].toLowerCase()+t.slice(1))||Be(n,or(t))||Be(n,t))}function yc(n){const{type:t,vnode:e,proxy:r,withProxy:o,propsOptions:[i],slots:a,attrs:s,emit:u,render:c,renderCache:l,props:f,data:h,setupState:d,ctx:p,inheritAttrs:v}=n,m=_i(n);let g,b;try{if(e.shapeFlag&4){const y=o||r,w=y;g=cn(c.call(w,y,l,f,d,h,p)),b=s}else{const y=t;g=cn(y.length>1?y(f,{attrs:s,slots:a,emit:u}):y(f,null)),b=t.props?s:Vv(s)}}catch(y){_o.length=0,Qi(y,n,1),g=vn(er)}let x=g;if(b&&v!==!1){const y=Object.keys(b),{shapeFlag:w}=x;y.length&&w&7&&(i&&y.some(Us)&&(b=zv(b,i)),x=eo(x,b,!1,!0))}return e.dirs&&(x=eo(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(e.dirs):e.dirs),e.transition&&eu(x,e.transition),g=x,_i(m),g}const Vv=n=>{let t;for(const e in n)(e==="class"||e==="style"||Xi(e))&&((t||(t={}))[e]=n[e]);return t},zv=(n,t)=>{const e={};for(const r in n)(!Us(r)||!(r.slice(9)in t))&&(e[r]=n[r]);return e};function Hv(n,t,e){const{props:r,children:o,component:i}=n,{props:a,children:s,patchFlag:u}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&u>=0){if(u&1024)return!0;if(u&16)return r?xc(r,a,c):!!a;if(u&8){const l=t.dynamicProps;for(let f=0;f<l.length;f++){const h=l[f];if(a[h]!==r[h]&&!ea(c,h))return!0}}}else return(o||s)&&(!s||!s.$stable)?!0:r===a?!1:r?a?xc(r,a,c):!0:!!a;return!1}function xc(n,t,e){const r=Object.keys(t);if(r.length!==Object.keys(n).length)return!0;for(let o=0;o<r.length;o++){const i=r[o];if(t[i]!==n[i]&&!ea(e,i))return!0}return!1}function Gv({vnode:n,parent:t},e){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=t.vnode).el=e,t=t.parent;else break}}const Bf=n=>n.__isSuspense;function jv(n,t){t&&t.pendingBranch?xe(n)?t.effects.push(...n):t.effects.push(n):tv(n)}const Dn=Symbol.for("v-fgt"),ta=Symbol.for("v-txt"),er=Symbol.for("v-cmt"),mi=Symbol.for("v-stc"),_o=[];let Bt=null;function hr(n=!1){_o.push(Bt=n?null:[])}function qv(){_o.pop(),Bt=_o[_o.length-1]||null}let Do=1;function bc(n,t=!1){Do+=n,n<0&&Bt&&t&&(Bt.hasOnce=!0)}function Lf(n){return n.dynamicChildren=Do>0?Bt||zr:null,qv(),Do>0&&Bt&&Bt.push(n),n}function Dr(n,t,e,r,o,i){return Lf(Ue(n,t,e,r,o,i,!0))}function Kv(n,t,e,r,o){return Lf(vn(n,t,e,r,o,!0))}function Wf(n){return n?n.__v_isVNode===!0:!1}function uo(n,t){return n.type===t.type&&n.key===t.key}const Uf=({key:n})=>n??null,gi=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?tt(n)||bt(n)||Ee(n)?{i:qt,r:n,k:t,f:!!e}:n:null);function Ue(n,t=null,e=null,r=0,o=null,i=n===Dn?0:1,a=!1,s=!1){const u={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Uf(t),ref:t&&gi(t),scopeId:pf,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:qt};return s?(ru(u,e),i&128&&n.normalize(u)):e&&(u.shapeFlag|=tt(e)?8:16),Do>0&&!a&&Bt&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&Bt.push(u),u}const vn=Xv;function Xv(n,t=null,e=null,r=0,o=null,i=!1){if((!n||n===mv)&&(n=er),Wf(n)){const s=eo(n,t,!0);return e&&ru(s,e),Do>0&&!i&&Bt&&(s.shapeFlag&6?Bt[Bt.indexOf(n)]=s:Bt.push(s)),s.patchFlag=-2,s}if(im(n)&&(n=n.__vccOpts),t){t=$v(t);let{class:s,style:u}=t;s&&!tt(s)&&(t.class=Ro(s)),$e(u)&&(Qs(u)&&!xe(u)&&(u=Rt({},u)),t.style=Hs(u))}const a=tt(n)?1:Bf(n)?128:iv(n)?64:$e(n)?4:Ee(n)?2:0;return Ue(n,t,e,r,o,a,i,!0)}function $v(n){return n?Qs(n)||Rf(n)?Rt({},n):n:null}function eo(n,t,e=!1,r=!1){const{props:o,ref:i,patchFlag:a,children:s,transition:u}=n,c=t?Jv(o||{},t):o,l={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Uf(c),ref:t&&t.ref?e&&i?xe(i)?i.concat(gi(t)):[i,gi(t)]:gi(t):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:s,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Dn?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:u,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&eo(n.ssContent),ssFallback:n.ssFallback&&eo(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return u&&r&&eu(l,u.clone(l)),l}function Vf(n=" ",t=0){return vn(ta,null,n,t)}function Yv(n,t){const e=vn(mi,null,n);return e.staticCount=t,e}function wc(n="",t=!1){return t?(hr(),Kv(er,null,n)):vn(er,null,n)}function cn(n){return n==null||typeof n=="boolean"?vn(er):xe(n)?vn(Dn,null,n.slice()):Wf(n)?qn(n):vn(ta,null,String(n))}function qn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:eo(n)}function ru(n,t){let e=0;const{shapeFlag:r}=n;if(t==null)t=null;else if(xe(t))e=16;else if(typeof t=="object")if(r&65){const o=t.default;o&&(o._c&&(o._d=!1),ru(n,o()),o._c&&(o._d=!0));return}else{e=32;const o=t._;!o&&!Rf(t)?t._ctx=qt:o===3&&qt&&(qt.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else Ee(t)?(t={default:t,_ctx:qt},e=32):(t=String(t),r&64?(e=16,t=[Vf(t)]):e=8);n.children=t,n.shapeFlag|=e}function Jv(...n){const t={};for(let e=0;e<n.length;e++){const r=n[e];for(const o in r)if(o==="class")t.class!==r.class&&(t.class=Ro([t.class,r.class]));else if(o==="style")t.style=Hs([t.style,r.style]);else if(Xi(o)){const i=t[o],a=r[o];a&&i!==a&&!(xe(i)&&i.includes(a))&&(t[o]=i?[].concat(i,a):a)}else o!==""&&(t[o]=r[o])}return t}function on(n,t,e,r=null){xn(n,t,7,[e,r])}const Qv=Cf();let Zv=0;function em(n,t,e){const r=n.type,o=(t?t.appContext:n.appContext)||Qv,i={uid:Zv++,vnode:n,type:r,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new _p(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:kf(r,o),emitsOptions:Of(r,o),emit:null,emitted:null,propsDefaults:Ve,inheritAttrs:r.inheritAttrs,ctx:Ve,data:Ve,props:Ve,attrs:Ve,slots:Ve,refs:Ve,setupState:Ve,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Uv.bind(null,i),n.ce&&n.ce(i),i}let It=null,Ei,ps;{const n=Ji(),t=(e,r)=>{let o;return(o=n[e])||(o=n[e]=[]),o.push(r),i=>{o.length>1?o.forEach(a=>a(i)):o[0](i)}};Ei=t("__VUE_INSTANCE_SETTERS__",e=>It=e),ps=t("__VUE_SSR_SETTERS__",e=>To=e)}const Uo=n=>{const t=It;return Ei(n),n.scope.on(),()=>{n.scope.off(),Ei(t)}},_c=()=>{It&&It.scope.off(),Ei(null)};function zf(n){return n.vnode.shapeFlag&4}let To=!1;function tm(n,t=!1,e=!1){t&&ps(t);const{props:r,children:o}=n.vnode,i=zf(n);Rv(n,r,i,t),Dv(n,o,e||t);const a=i?nm(n,t):void 0;return t&&ps(!1),a}function nm(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,gv);const{setup:r}=e;if(r){Pn();const o=n.setupContext=r.length>1?om(n):null,i=Uo(n),a=Wo(r,n,0,[n.props,o]),s=Ul(a);if(Mn(),i(),(s||n.sp)&&!bo(n)&&vf(n),s){if(a.then(_c,_c),t)return a.then(u=>{Cc(n,u)}).catch(u=>{Qi(u,n,0)});n.asyncDep=a}else Cc(n,a)}else Hf(n)}function Cc(n,t,e){Ee(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:$e(t)&&(n.setupState=cf(t)),Hf(n)}function Hf(n,t,e){const r=n.type;n.render||(n.render=r.render||pn);{const o=Uo(n);Pn();try{yv(n)}finally{Mn(),o()}}}const rm={get(n,t){return vt(n,"get",""),n[t]}};function om(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,rm),slots:n.slots,emit:n.emit,expose:t}}function na(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(cf(Hp(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in wo)return wo[e](n)},has(t,e){return e in t||e in wo}})):n.proxy}function im(n){return Ee(n)&&"__vccOpts"in n}const am=(n,t)=>$p(n,t,To),sm="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let vs;const Ec=typeof window<"u"&&window.trustedTypes;if(Ec)try{vs=Ec.createPolicy("vue",{createHTML:n=>n})}catch{}const Gf=vs?n=>vs.createHTML(n):n=>n,um="http://www.w3.org/2000/svg",cm="http://www.w3.org/1998/Math/MathML",An=typeof document<"u"?document:null,Ic=An&&An.createElement("template"),lm={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,r)=>{const o=t==="svg"?An.createElementNS(um,n):t==="mathml"?An.createElementNS(cm,n):e?An.createElement(n,{is:e}):An.createElement(n);return n==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:n=>An.createTextNode(n),createComment:n=>An.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>An.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,r,o,i){const a=e?e.previousSibling:t.lastChild;if(o&&(o===i||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),e),!(o===i||!(o=o.nextSibling)););else{Ic.innerHTML=Gf(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const s=Ic.content;if(r==="svg"||r==="mathml"){const u=s.firstChild;for(;u.firstChild;)s.appendChild(u.firstChild);s.removeChild(u)}t.insertBefore(s,e)}return[a?a.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},fm=Symbol("_vtc");function hm(n,t,e){const r=n[fm];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const Rc=Symbol("_vod"),dm=Symbol("_vsh"),pm=Symbol(""),vm=/(^|;)\s*display\s*:/;function mm(n,t,e){const r=n.style,o=tt(e);let i=!1;if(e&&!o){if(t)if(tt(t))for(const a of t.split(";")){const s=a.slice(0,a.indexOf(":")).trim();e[s]==null&&yi(r,s,"")}else for(const a in t)e[a]==null&&yi(r,a,"");for(const a in e)a==="display"&&(i=!0),yi(r,a,e[a])}else if(o){if(t!==e){const a=r[pm];a&&(e+=";"+a),r.cssText=e,i=vm.test(e)}}else t&&n.removeAttribute("style");Rc in n&&(n[Rc]=i?r.display:"",n[dm]&&(r.display="none"))}const Sc=/\s*!important$/;function yi(n,t,e){if(xe(e))e.forEach(r=>yi(n,t,r));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const r=gm(n,t);Sc.test(e)?n.setProperty(or(r),e.replace(Sc,""),"important"):n[r]=e}}const kc=["Webkit","Moz","ms"],Sa={};function gm(n,t){const e=Sa[t];if(e)return e;let r=Zn(t);if(r!=="filter"&&r in n)return Sa[t]=r;r=Hl(r);for(let o=0;o<kc.length;o++){const i=kc[o]+r;if(i in n)return Sa[t]=i}return t}const Ac="http://www.w3.org/1999/xlink";function Dc(n,t,e,r,o,i=wp(t)){r&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Ac,t.slice(6,t.length)):n.setAttributeNS(Ac,t,e):e==null||i&&!Gl(e)?n.removeAttribute(t):n.setAttribute(t,i?"":rr(e)?String(e):e)}function Tc(n,t,e,r,o){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Gf(e):e);return}const i=n.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const s=i==="OPTION"?n.getAttribute("value")||"":n.value,u=e==null?n.type==="checkbox"?"on":"":String(e);(s!==u||!("_value"in n))&&(n.value=u),e==null&&n.removeAttribute(t),n._value=e;return}let a=!1;if(e===""||e==null){const s=typeof n[t];s==="boolean"?e=Gl(e):e==null&&s==="string"?(e="",a=!0):s==="number"&&(e=0,a=!0)}try{n[t]=e}catch{}a&&n.removeAttribute(o||t)}function Br(n,t,e,r){n.addEventListener(t,e,r)}function ym(n,t,e,r){n.removeEventListener(t,e,r)}const Nc=Symbol("_vei");function xm(n,t,e,r,o=null){const i=n[Nc]||(n[Nc]={}),a=i[t];if(r&&a)a.value=r;else{const[s,u]=bm(t);if(r){const c=i[t]=Cm(r,o);Br(n,s,c,u)}else a&&(ym(n,s,a,u),i[t]=void 0)}}const Fc=/(?:Once|Passive|Capture)$/;function bm(n){let t;if(Fc.test(n)){t={};let r;for(;r=n.match(Fc);)n=n.slice(0,n.length-r[0].length),t[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):or(n.slice(2)),t]}let ka=0;const wm=Promise.resolve(),_m=()=>ka||(wm.then(()=>ka=0),ka=Date.now());function Cm(n,t){const e=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=e.attached)return;xn(Em(r,e.value),t,5,[r])};return e.value=n,e.attached=_m(),e}function Em(n,t){if(xe(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(r=>o=>!o._stopped&&r&&r(o))}else return t}const Pc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Im=(n,t,e,r,o,i)=>{const a=o==="svg";t==="class"?hm(n,r,a):t==="style"?mm(n,e,r):Xi(t)?Us(t)||xm(n,t,e,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Rm(n,t,r,a))?(Tc(n,t,r),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Dc(n,t,r,a,i,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!tt(r))?Tc(n,Zn(t),r,i,t):(t==="true-value"?n._trueValue=r:t==="false-value"&&(n._falseValue=r),Dc(n,t,r,a))};function Rm(n,t,e,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in n&&Pc(t)&&Ee(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=n.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return Pc(t)&&tt(e)?!1:t in n}const Mc=n=>{const t=n.props["onUpdate:modelValue"]||!1;return xe(t)?e=>pi(t,e):t};function Sm(n){n.target.composing=!0}function Oc(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Aa=Symbol("_assign"),km={created(n,{modifiers:{lazy:t,trim:e,number:r}},o){n[Aa]=Mc(o);const i=r||o.props&&o.props.type==="number";Br(n,t?"change":"input",a=>{if(a.target.composing)return;let s=n.value;e&&(s=s.trim()),i&&(s=os(s)),n[Aa](s)}),e&&Br(n,"change",()=>{n.value=n.value.trim()}),t||(Br(n,"compositionstart",Sm),Br(n,"compositionend",Oc),Br(n,"change",Oc))},mounted(n,{value:t}){n.value=t??""},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:r,trim:o,number:i}},a){if(n[Aa]=Mc(a),n.composing)return;const s=(i||n.type==="number")&&!/^0\d/.test(n.value)?os(n.value):n.value,u=t??"";s!==u&&(document.activeElement===n&&n.type!=="range"&&(r&&t===e||o&&n.value.trim()===u)||(n.value=u))}},Am={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Dm=(n,t)=>{const e=n._withKeys||(n._withKeys={}),r=t.join(".");return e[r]||(e[r]=o=>{if(!("key"in o))return;const i=or(o.key);if(t.some(a=>a===i||Am[a]===i))return n(o)})},Tm=Rt({patchProp:Im},lm);let Bc;function Nm(){return Bc||(Bc=Nv(Tm))}const Fm=(...n)=>{const t=Nm().createApp(...n),{mount:e}=t;return t.mount=r=>{const o=Mm(r);if(!o)return;const i=t._component;!Ee(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const a=e(o,!1,Pm(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),a},t};function Pm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Mm(n){return tt(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var jf=function(n,t){return(jf=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var o in r)r.hasOwnProperty(o)&&(e[o]=r[o])})(n,t)};function tn(n,t){function e(){this.constructor=n}jf(n,t),n.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}function ae(n,t,e,r){return new(e||(e=Promise))(function(o,i){function a(c){try{u(r.next(c))}catch(l){i(l)}}function s(c){try{u(r.throw(c))}catch(l){i(l)}}function u(c){c.done?o(c.value):new e(function(l){l(c.value)}).then(a,s)}u((r=r.apply(n,[])).next())})}function se(n,t){var e,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function s(u){return function(c){return function(l){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,r&&(o=2&l[0]?r.return:l[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,l[1])).done)return o;switch(r=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return a.label++,{value:l[1],done:!1};case 5:a.label++,r=l[1],l=[0];continue;case 7:l=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){a=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){a.label=l[1];break}if(l[0]===6&&a.label<o[1]){a.label=o[1],o=l;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(l);break}o[2]&&a.ops.pop(),a.trys.pop();continue}l=t.call(n,a)}catch(f){l=[6,f],r=0}finally{e=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([u,c])}}}var Om=function(){function n(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.populateURLFlags()}return n.prototype.setPlatform=function(t,e){this.platform!=null&&console.warn("Platform "+this.platformName+" has already been set. Overwriting the platform with "+e+"."),this.platformName=t,this.platform=e},n.prototype.registerFlag=function(t,e,r){if(this.flagRegistry[t]={evaluationFn:e,setHook:r},this.urlFlags[t]!=null){var o=this.urlFlags[t];console.warn("Setting feature override from URL "+t+": "+o+"."),this.set(t,o)}},n.prototype.get=function(t){return t in this.flags?this.flags[t]:(this.flags[t]=this.evaluateFlag(t),this.flags[t])},n.prototype.getNumber=function(t){return this.get(t)},n.prototype.getBool=function(t){return this.get(t)},n.prototype.getFlags=function(){return this.flags},Object.defineProperty(n.prototype,"features",{get:function(){return this.flags},enumerable:!0,configurable:!0}),n.prototype.set=function(t,e){if(this.flagRegistry[t]==null)throw new Error("Cannot set flag "+t+" as it has not been registered.");this.flags[t]=e,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(e)},n.prototype.evaluateFlag=function(t){if(this.flagRegistry[t]==null)throw new Error("Cannot evaluate flag '"+t+"': no evaluation function found.");return this.flagRegistry[t].evaluationFn()},n.prototype.setFlags=function(t){this.flags=Object.assign({},t)},n.prototype.reset=function(){this.flags={},this.urlFlags={},this.populateURLFlags()},n.prototype.populateURLFlags=function(){var t=this;if(this.global!==void 0&&this.global.location!==void 0&&this.global.location.search!==void 0){var e,r,o=(e=this.global.location.search,r={},e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,function(i){for(var a=[],s=1;s<arguments.length;s++)a[s-1]=arguments[s];return Bm(r,a[0],a[1]),a.join("=")}),r);"tfjsflags"in o&&o.tfjsflags.split(",").forEach(function(i){var a=i.split(":"),s=a[0],u=a[1];t.urlFlags[s]=function(c,l){if((l=l.toLowerCase())==="true"||l==="false")return l==="true";if(""+ +l===l)return+l;throw new Error("Could not parse value flag value "+l+" for flag "+c+".")}(s,u)})}},n}();function Bm(n,t,e){n[decodeURIComponent(t)]=decodeURIComponent(e||"")}function G(){return qf}var qf=null,Ii=new Map,ms=new Map;function Kf(n,t){var e=$f(n,t);return Ii.get(e)}function Lm(n){return ms.get(n)}function Lc(n){for(var t=Ii.entries(),e=[];;){var r=t.next(),o=r.done,i=r.value;if(o)break;var a=i[0],s=i[1];a.split("_")[0]===n&&e.push(s)}return e}function Xf(n){var t=n.kernelName,e=n.backendName,r=$f(t,e);if(Ii.has(r))throw new Error("The kernel '"+t+"' for backend '"+e+"' is already registered");Ii.set(r,n)}function Wm(n){var t=n.kernelName;ms.has(t)&&console.warn("Overriding the gradient for '"+t+"'"),ms.set(t,n)}function $f(n,t){return t+"_"+n}function gs(n,t,e){return Math.max(n,Math.min(t,e))}function Yf(n){return n%2==0?n:n+1}function Um(n){for(var t=0,e=0;e<n.length;e++)t+=n[e];return t}function R(n,t){if(!n)throw new Error(typeof t=="string"?t:t())}function Le(n,t,e){e===void 0&&(e=""),R(st(n,t),function(){return e+" Shapes "+n+" and "+t+" must match"})}function io(n){R(n!=null,function(){return"The input to the tensor constructor must be a non-null value."})}function to(n,t,e){if(t===void 0&&(t=[]),e===void 0&&(e=!1),t==null&&(t=[]),Array.isArray(n)||mn(n)&&!e)for(var r=0;r<n.length;++r)to(n[r],t,e);else t.push(n);return t}function le(n){if(n.length===0)return 1;for(var t=n[0],e=1;e<n.length;e++)t*=n[e];return t}function st(n,t){if(n===t)return!0;if(n==null||t==null||n.length!==t.length)return!1;for(var e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0}function Ye(n){return n%1==0}function Vm(n){if(Math.tanh!=null)return Math.tanh(n);if(n===1/0)return 1;if(n===-1/0)return-1;var t=Math.exp(2*n);return(t-1)/(t+1)}function ys(n){var t=Math.ceil(Math.sqrt(n));return[t,Math.ceil(n/t)]}function qr(n,t){return t<=n.length?n:n+" ".repeat(t-n.length)}function Wc(n,t,e){return t===void 0&&(t=function(r){return 0}),new Promise(function(r,o){var i=0,a=function(){if(n())r();else{i++;var s=t(i);e!=null&&i>=e?o():setTimeout(a,s)}};a()})}function zm(n,t){for(var e=1,r=-1,o=0;o<n.length;++o)if(n[o]>=0)e*=n[o];else if(n[o]===-1){if(r!==-1)throw Error("Shapes can only have 1 implicit size. Found -1 at dim "+r+" and dim "+o);r=o}else if(n[o]<0)throw Error("Shapes can not be < 0. Found "+n[o]+" at dim "+o);if(r===-1){if(t>0&&t!==e)throw Error("Size("+t+") must match the product of shape "+n);return n}if(e===0)throw Error("Cannot infer the missing size in ["+n+"] when there are 0 elements");if(t%e!=0)throw Error("The implicit shape can't be a fractional number. Got "+t+" / "+e);var i=n.slice();return i[r]=t/e,i}function ot(n,t){var e=t.length;return R((n=n==null?t.map(function(r,o){return o}):[].concat(n)).every(function(r){return r>=-e&&r<e}),function(){return"All values in axis param must be in range [-"+e+", "+e+") but got axis "+n}),R(n.every(function(r){return Ye(r)}),function(){return"All values in axis param must be integers but got axis "+n}),n.map(function(r){return r<0?e+r:r})}function vr(n,t){for(var e=[],r=[],o=t!=null&&Array.isArray(t)&&t.length===0,i=t==null||o?null:ot(t,n).sort(),a=0,s=0;s<n.length;++s){if(i!=null){if(i[a]===s&&n[s]!==1)throw new Error("Can't squeeze axis "+s+" since its dim '"+n[s]+"' is not 1");(i[a]==null||i[a]>s)&&n[s]===1&&(e.push(n[s]),r.push(s)),i[a]<=s&&a++}n[s]!==1&&(e.push(n[s]),r.push(s))}return{newShape:e,keptDims:r}}function No(n,t){var e=null;if(n==null||n==="float32")e=new Float32Array(t);else if(n==="int32")e=new Int32Array(t);else{if(n!=="bool")throw new Error("Unknown data type "+n);e=new Uint8Array(t)}return e}function Ri(n,t){var e=null;if(n==null||n==="float32")e=new Float32Array(t);else if(n==="int32")e=new Int32Array(t);else if(n==="bool")e=new Uint8Array(t);else{if(n!=="string")throw new Error("Unknown data type "+n);e=new Array(t)}return e}function Hm(n,t){for(var e=0;e<n.length;e++){var r=n[e];if(isNaN(r)||!isFinite(r))throw Error("A tensor of type "+t+" being uploaded contains "+r+".")}}function Gm(n){return n==="bool"||n==="complex64"||n==="float32"||n==="int32"||n==="string"}function jm(n,t){return t!=="complex64"&&(t!=="float32"||n==="complex64")&&(t!=="int32"||n==="float32"||n==="complex64")&&(t!=="bool"||n!=="bool")}function mn(n){return n instanceof Float32Array||n instanceof Int32Array||n instanceof Uint8Array}function Jf(n){if(n==="float32"||n==="int32")return 4;if(n==="complex64")return 8;if(n==="bool")return 1;throw new Error("Unknown dtype "+n)}function qm(n){if(n==null)return 0;var t=0;return n.forEach(function(e){return t+=e.length}),t}function ou(n){return typeof n=="string"||n instanceof String}function Km(n){return typeof n=="boolean"}function Xm(n){return typeof n=="number"}function Vo(n){return Array.isArray(n)?Vo(n[0]):n instanceof Float32Array?"float32":n instanceof Int32Array||n instanceof Uint8Array?"int32":Xm(n)?"float32":ou(n)?"string":Km(n)?"bool":"float32"}function xs(n){return!!(n&&n.constructor&&n.call&&n.apply)}function bs(n,t){for(var e=t;e<n;++e)if(n%e==0)return e;return n}function gn(n){var t=n.length;if(t<2)return[];var e=new Array(t-1);e[t-2]=n[t-1];for(var r=t-3;r>=0;--r)e[r]=e[r+1]*n[r+1];return e}function Qf(n,t,e){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(n)&&(n=to(n)),e&&Hm(n,t),function(i,a){return i instanceof Float32Array&&a==="float32"||i instanceof Int32Array&&a==="int32"||i instanceof Uint8Array&&a==="bool"}(n,t))return n;if(t==null||t==="float32"||t==="complex64")return new Float32Array(n);if(t==="int32")return new Int32Array(n);if(t==="bool"){for(var r=new Uint8Array(n.length),o=0;o<r.length;++o)Math.round(n[o])!==0&&(r[o]=1);return r}throw new Error("Unknown data type "+t)}function Uc(n,t){if(n.length===0)return t[0];var e=n.reduce(function(r,o){return r*o});if(e===0)return[];if(e!==t.length)throw new Error("["+n+"] does not match the input size.");return function r(o,i,a){var s=new Array;if(i.length===1)for(var u=i[0],c=0;c<u;c++)s[c]=a[o+c];else{u=i[0];var l=i.slice(1),f=l.reduce(function(h,d){return h*d});for(c=0;c<u;c++)s[c]=r(o+c*f,l,a)}return s}(0,n,t)}function Zf(n,t){for(var e=zo(n,t),r=0;r<e.length;r++)e[r]=1;return e}function zo(n,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(n);if(t==="int32")return new Int32Array(n);if(t==="bool")return new Uint8Array(n);throw new Error("Unknown data type "+t)}function ln(){return G().platform.now()}function eh(n){n.forEach(function(t){R(Number.isInteger(t)&&t>=0,function(){return"Tensor must have a shape comprised of positive integers but got shape ["+n+"]."})})}function $m(n,t){return t===void 0&&(t="utf-8"),t=t||"utf-8",G().platform.encode(n,t)}function Si(n,t){return t===void 0&&(t="utf-8"),t=t||"utf-8",G().platform.decode(n,t)}function Vc(n,t,e){if(t===0)return 0;if(t===1)return n[0];for(var r=n[n.length-1],o=0;o<n.length-1;++o)r+=e[o]*n[o];return r}function Ym(n,t,e){if(t===0)return[];if(t===1)return[n];for(var r=new Array(t),o=0;o<r.length-1;++o)r[o]=Math.floor(n/e[o]),n-=r[o]*e[o];return r[r.length-1]=n,r}var Jm=function(){function n(t,e){this.backendTimer=t,this.logger=e,e==null&&(this.logger=new Qm)}return n.prototype.profileKernel=function(t,e,r){var o,i=this,a=this.backendTimer.time(function(){o=r()});return o.forEach(function(s){s.data().then(function(u){(function(c,l,f){if(l!=="float32")return!1;for(var h=0;h<c.length;h++){var d=c[h];if(isNaN(d)||!isFinite(d))return console.warn("Found "+d+" in the result of '"+f+"'"),!0}})(u,s.dtype,t),a.then(function(c){var l="";c.getExtraProfileInfo!=null&&(l=c.getExtraProfileInfo()),i.logger.logKernelProfile(t,s,u,c.kernelMs,e,l)})})}),o},n}(),Qm=function(){function n(){}return n.prototype.logKernelProfile=function(t,e,r,o,i,a){var s=typeof o=="number"?qr(o+"ms",9):o.error,u=qr(t,25),c=e.rank,l=e.size,f=qr(e.shape.toString(),14),h="";for(var d in i){var p=i[d].shape||e.shape,v=p.length;h+=d+": "+v+"D "+(v>0?p:"")+" "}console.log("%c"+u+"	%c"+s+"	%c"+c+"D "+f+"	%c"+l+"	%c"+h+"	%c"+a,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")},n}(),zc=20,co=3,Da=7;function Zm(n,t,e,r){var o=gn(t),i=function(c,l,f,h){var d=le(l),p=h[h.length-1],v=new Array(p).fill(0),m=l.length,g=f==="complex64"?fo(c):c;if(m>1)for(var b=0;b<d/p;b++)for(var x=b*p,y=0;y<p;y++)v[y]=Math.max(v[y],lo(g[x+y],0,f).length);return v}(n,t,e,o),a=t.length,s=function c(l,f,h,d,p,v){v===void 0&&(v=!0);var m=h==="complex64"?2:1,g=f[0],b=f.length;if(b===0)return h==="complex64"?[lo(fo(l)[0],0,h)]:h==="bool"?[th(l[0])]:[l[0].toString()];if(b===1){if(g>zc){var x=co*m,y=Array.from(l.slice(0,x)),w=Array.from(l.slice((g-co)*m,g*m));return h==="complex64"&&(y=fo(y),w=fo(w)),["["+y.map(function(z,H){return lo(z,p[H],h)}).join(", ")+", ..., "+w.map(function(z,H){return lo(z,p[g-co+H],h)}).join(", ")+"]"]}return["["+(h==="complex64"?fo(l):Array.from(l)).map(function(z,H){return lo(z,p[H],h)}).join(", ")+"]"]}var _=f.slice(1),k=d.slice(1),S=d[0]*m,I=[];if(g>zc){for(var E=0;E<co;E++){var F=(N=E*S)+S;I.push.apply(I,c(l.slice(N,F),_,h,k,p,!1))}for(I.push("..."),E=g-co;E<g;E++)F=(N=E*S)+S,I.push.apply(I,c(l.slice(N,F),_,h,k,p,E===g-1))}else for(E=0;E<g;E++){var N;F=(N=E*S)+S,I.push.apply(I,c(l.slice(N,F),_,h,k,p,E===g-1))}var U=b===2?",":"";for(I[0]="["+I[0]+U,E=1;E<I.length-1;E++)I[E]=" "+I[E]+U;var V=`,
`;for(E=2;E<b;E++)V+=`
`;return I[I.length-1]=" "+I[I.length-1]+"]"+(v?"":V),I}(n,t,e,o,i),u=["Tensor"];return r&&(u.push("  dtype: "+e),u.push("  rank: "+a),u.push("  shape: ["+t+"]"),u.push("  values:")),u.push(s.map(function(c){return"    "+c}).join(`
`)),u.join(`
`)}function lo(n,t,e){return qr(Array.isArray(n)?parseFloat(n[0].toFixed(Da))+" + "+parseFloat(n[1].toFixed(Da))+"j":ou(n)?"'"+n+"'":e==="bool"?th(n):parseFloat(n.toFixed(Da)).toString(),t)}function th(n){return n===0?"false":"true"}function fo(n){for(var t=[],e=0;e<n.length;e+=2)t.push([n[e],n[e+1]]);return t}var Fo=function(){function n(t,e,r){var o=this;if(this.dtype=e,this.shape=t.slice(),this.size=le(t),r!=null){var i=r.length;R(i===this.size,function(){return"Length of values '"+i+"' does not match the size inferred by the shape '"+o.size+"'."})}if(e==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=r||Ri(e,this.size),this.strides=gn(t)}return n.prototype.set=function(t){for(var e=this,r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];r.length===0&&(r=[0]),R(r.length===this.rank,function(){return"The number of provided coordinates ("+r.length+") must match the rank ("+e.rank+")"});var i=this.locToIndex(r);this.values[i]=t},n.prototype.get=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];t.length===0&&(t=[0]);for(var r=0,o=0,i=t;o<i.length;o++){var a=i[o];if(a<0||a>=this.shape[r]){var s="Requested out of range element at "+t+".   Buffer shape="+this.shape;throw new Error(s)}r++}for(var u=t[t.length-1],c=0;c<t.length-1;++c)u+=this.strides[c]*t[c];return this.values[u]},n.prototype.locToIndex=function(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];for(var e=t[t.length-1],r=0;r<t.length-1;++r)e+=this.strides[r]*t[r];return e},n.prototype.indexToLoc=function(t){if(this.rank===0)return[];if(this.rank===1)return[t];for(var e=new Array(this.shape.length),r=0;r<e.length-1;++r)e[r]=Math.floor(t/this.strides[r]),t-=e[r]*this.strides[r];return e[e.length-1]=t,e},Object.defineProperty(n.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),n.prototype.toTensor=function(){return fn().makeTensor(this.values,this.shape,this.dtype)},n}(),fn=null,W=null,nh=null,je=function(){function n(t,e,r,o){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=e||"float32",this.size=le(t),this.strides=gn(t),this.dataId=r,this.id=o,this.rankType=this.rank<5?this.rank.toString():"higher"}return n.prototype.flatten=function(){return this.throwIfDisposed(),this.as1D()},n.prototype.asScalar=function(){return this.throwIfDisposed(),R(this.size===1,function(){return"The array must have only 1 element."}),this.reshape([])},n.prototype.as1D=function(){return this.throwIfDisposed(),this.reshape([this.size])},n.prototype.as2D=function(t,e){return this.throwIfDisposed(),this.reshape([t,e])},n.prototype.as3D=function(t,e,r){return this.throwIfDisposed(),this.reshape([t,e,r])},n.prototype.as4D=function(t,e,r,o){return this.throwIfDisposed(),this.reshape([t,e,r,o])},n.prototype.as5D=function(t,e,r,o,i){return this.throwIfDisposed(),this.reshape([t,e,r,o,i])},n.prototype.asType=function(t){return this.throwIfDisposed(),W.cast(this,t)},Object.defineProperty(n.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),n.prototype.buffer=function(){return ae(this,void 0,void 0,function(){var t;return se(this,function(e){switch(e.label){case 0:return[4,this.data()];case 1:return t=e.sent(),[2,W.buffer(this.shape,this.dtype,t)]}})})},n.prototype.bufferSync=function(){return W.buffer(this.shape,this.dtype,this.dataSync())},n.prototype.array=function(){return ae(this,void 0,void 0,function(){var t;return se(this,function(e){switch(e.label){case 0:return[4,this.data()];case 1:return t=e.sent(),[2,Uc(this.shape,t)]}})})},n.prototype.arraySync=function(){return Uc(this.shape,this.dataSync())},n.prototype.data=function(){return ae(this,void 0,void 0,function(){var t,e;return se(this,function(r){switch(r.label){case 0:return this.throwIfDisposed(),t=fn().read(this.dataId),this.dtype!=="string"?[3,2]:[4,t];case 1:e=r.sent();try{return[2,e.map(function(o){return Si(o)})]}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}r.label=2;case 2:return[2,t]}})})},n.prototype.dataSync=function(){this.throwIfDisposed();var t=fn().readSync(this.dataId);if(this.dtype==="string")try{return t.map(function(e){return Si(e)})}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t},n.prototype.bytes=function(){return ae(this,void 0,void 0,function(){var t;return se(this,function(e){switch(e.label){case 0:return this.throwIfDisposed(),[4,fn().read(this.dataId)];case 1:return t=e.sent(),this.dtype==="string"?[2,t]:[2,new Uint8Array(t.buffer)]}})})},n.prototype.dispose=function(){this.isDisposed||(fn().disposeTensor(this),this.isDisposedInternal=!0)},Object.defineProperty(n.prototype,"isDisposed",{get:function(){return this.isDisposedInternal},enumerable:!0,configurable:!0}),n.prototype.throwIfDisposed=function(){if(this.isDisposed)throw new Error("Tensor is disposed.")},n.prototype.toFloat=function(){return this.asType("float32")},n.prototype.toInt=function(){return this.asType("int32")},n.prototype.toBool=function(){return this.asType("bool")},n.prototype.print=function(t){return t===void 0&&(t=!1),W.print(this,t)},n.prototype.reshape=function(t){return this.throwIfDisposed(),W.reshape(this,t)},n.prototype.reshapeAs=function(t){return this.throwIfDisposed(),this.reshape(t.shape)},n.prototype.expandDims=function(t){return t===void 0&&(t=0),W.expandDims(this,t)},n.prototype.cumsum=function(t,e,r){return t===void 0&&(t=0),e===void 0&&(e=!1),r===void 0&&(r=!1),W.cumsum(this,t,e,r)},n.prototype.squeeze=function(t){return this.throwIfDisposed(),W.squeeze(this,t)},n.prototype.clone=function(){return this.throwIfDisposed(),W.clone(this)},n.prototype.oneHot=function(t,e,r){return this.throwIfDisposed(),W.oneHot(this,t,e,r)},n.prototype.toString=function(t){return t===void 0&&(t=!1),Zm(this.dataSync(),this.shape,this.dtype,t)},n.prototype.tile=function(t){return this.throwIfDisposed(),W.tile(this,t)},n.prototype.gather=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),W.gather(this,t,e)},n.prototype.matMul=function(t,e,r){return e===void 0&&(e=!1),r===void 0&&(r=!1),this.throwIfDisposed(),W.matMul(this,t,e,r)},n.prototype.dot=function(t){return this.throwIfDisposed(),W.dot(this,t)},n.prototype.norm=function(t,e,r){return t===void 0&&(t="euclidean"),e===void 0&&(e=null),r===void 0&&(r=!1),this.throwIfDisposed(),W.norm(this,t,e,r)},n.prototype.slice=function(t,e){return this.throwIfDisposed(),W.slice(this,t,e)},n.prototype.reverse=function(t){return this.throwIfDisposed(),W.reverse(this,t)},n.prototype.concat=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),t instanceof n&&(t=[t]),W.concat([this].concat(t),e)},n.prototype.split=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),W.split(this,t,e)},n.prototype.stack=function(t,e){return e===void 0&&(e=0),W.stack([this,t],e)},n.prototype.unstack=function(t){return t===void 0&&(t=0),W.unstack(this,t)},n.prototype.pad=function(t,e){return e===void 0&&(e=0),W.pad(this,t,e)},n.prototype.batchNormalization=function(t,e,r,o,i){return r===void 0&&(r=.001),nh("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon"),this.batchNorm(t,e,i,o,r)},n.prototype.batchNorm=function(t,e,r,o,i){return i===void 0&&(i=.001),this.throwIfDisposed(),W.batchNorm(this,t,e,r,o,i)},n.prototype.all=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),W.all(this,t,e)},n.prototype.any=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),W.any(this,t,e)},n.prototype.logSumExp=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),W.logSumExp(this,t,e)},n.prototype.sum=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),W.sum(this,t,e)},n.prototype.prod=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),W.prod(this,t,e)},n.prototype.mean=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),W.mean(this,t,e)},n.prototype.min=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),W.min(this,t,e)},n.prototype.max=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),W.max(this,t,e)},n.prototype.argMin=function(t){return t===void 0&&(t=null),this.throwIfDisposed(),W.argMin(this,t)},n.prototype.argMax=function(t){return t===void 0&&(t=null),this.throwIfDisposed(),W.argMax(this,t)},n.prototype.cast=function(t){return this.throwIfDisposed(),W.cast(this,t)},n.prototype.add=function(t){return this.throwIfDisposed(),W.add(this,t)},n.prototype.addStrict=function(t){return this.throwIfDisposed(),W.addStrict(this,t)},n.prototype.atan2=function(t){return this.throwIfDisposed(),W.atan2(this,t)},n.prototype.sub=function(t){return this.throwIfDisposed(),W.sub(this,t)},n.prototype.subStrict=function(t){return this.throwIfDisposed(),W.subStrict(this,t)},n.prototype.pow=function(t){return this.throwIfDisposed(),W.pow(this,t)},n.prototype.powStrict=function(t){return this.throwIfDisposed(),W.powStrict(this,t)},n.prototype.mul=function(t){return this.throwIfDisposed(),W.mul(this,t)},n.prototype.mulStrict=function(t){return this.throwIfDisposed(),W.mulStrict(this,t)},n.prototype.div=function(t){return this.throwIfDisposed(),W.div(this,t)},n.prototype.divNoNan=function(t){return this.throwIfDisposed(),W.divNoNan(this,t)},n.prototype.floorDiv=function(t){return this.throwIfDisposed(),W.floorDiv(this,t)},n.prototype.divStrict=function(t){return this.throwIfDisposed(),W.divStrict(this,t)},n.prototype.minimum=function(t){return this.throwIfDisposed(),W.minimum(this,t)},n.prototype.minimumStrict=function(t){return this.throwIfDisposed(),W.minimumStrict(this,t)},n.prototype.maximum=function(t){return this.throwIfDisposed(),W.maximum(this,t)},n.prototype.maximumStrict=function(t){return this.throwIfDisposed(),W.maximumStrict(this,t)},n.prototype.mod=function(t){return this.throwIfDisposed(),W.mod(this,t)},n.prototype.modStrict=function(t){return this.throwIfDisposed(),W.modStrict(this,t)},n.prototype.squaredDifferenceStrict=function(t){return this.throwIfDisposed(),W.squaredDifferenceStrict(this,t)},n.prototype.transpose=function(t){return this.throwIfDisposed(),W.transpose(this,t)},n.prototype.notEqual=function(t){return this.throwIfDisposed(),W.notEqual(this,t)},n.prototype.notEqualStrict=function(t){return this.throwIfDisposed(),W.notEqualStrict(this,t)},n.prototype.less=function(t){return this.throwIfDisposed(),W.less(this,t)},n.prototype.lessStrict=function(t){return this.throwIfDisposed(),W.lessStrict(this,t)},n.prototype.equal=function(t){return this.throwIfDisposed(),W.equal(this,t)},n.prototype.equalStrict=function(t){return this.throwIfDisposed(),W.equalStrict(this,t)},n.prototype.lessEqual=function(t){return this.throwIfDisposed(),W.lessEqual(this,t)},n.prototype.lessEqualStrict=function(t){return this.throwIfDisposed(),W.lessEqualStrict(this,t)},n.prototype.greater=function(t){return this.throwIfDisposed(),W.greater(this,t)},n.prototype.greaterStrict=function(t){return this.throwIfDisposed(),W.greaterStrict(this,t)},n.prototype.greaterEqual=function(t){return this.throwIfDisposed(),W.greaterEqual(this,t)},n.prototype.greaterEqualStrict=function(t){return this.throwIfDisposed(),W.greaterEqualStrict(this,t)},n.prototype.logicalAnd=function(t){return this.throwIfDisposed(),W.logicalAnd(this,t)},n.prototype.logicalOr=function(t){return this.throwIfDisposed(),W.logicalOr(this,t)},n.prototype.logicalNot=function(){return this.throwIfDisposed(),W.logicalNot(this)},n.prototype.logicalXor=function(t){return this.throwIfDisposed(),W.logicalXor(this,t)},n.prototype.where=function(t,e){return this.throwIfDisposed(),W.where(t,this,e)},n.prototype.neg=function(){return this.throwIfDisposed(),W.neg(this)},n.prototype.ceil=function(){return this.throwIfDisposed(),W.ceil(this)},n.prototype.floor=function(){return this.throwIfDisposed(),W.floor(this)},n.prototype.sign=function(){return this.throwIfDisposed(),W.sign(this)},n.prototype.isNaN=function(){return this.throwIfDisposed(),W.isNaN(this)},n.prototype.isInf=function(){return this.throwIfDisposed(),W.isInf(this)},n.prototype.isFinite=function(){return this.throwIfDisposed(),W.isFinite(this)},n.prototype.exp=function(){return this.throwIfDisposed(),W.exp(this)},n.prototype.expm1=function(){return this.throwIfDisposed(),W.expm1(this)},n.prototype.log=function(){return this.throwIfDisposed(),W.log(this)},n.prototype.log1p=function(){return this.throwIfDisposed(),W.log1p(this)},n.prototype.sqrt=function(){return this.throwIfDisposed(),W.sqrt(this)},n.prototype.rsqrt=function(){return this.throwIfDisposed(),W.rsqrt(this)},n.prototype.square=function(){return this.throwIfDisposed(),W.square(this)},n.prototype.reciprocal=function(){return this.throwIfDisposed(),W.reciprocal(this)},n.prototype.abs=function(){return this.throwIfDisposed(),W.abs(this)},n.prototype.clipByValue=function(t,e){return this.throwIfDisposed(),W.clipByValue(this,t,e)},n.prototype.relu=function(){return this.throwIfDisposed(),W.relu(this)},n.prototype.relu6=function(){return this.throwIfDisposed(),W.relu6(this)},n.prototype.elu=function(){return this.throwIfDisposed(),W.elu(this)},n.prototype.selu=function(){return this.throwIfDisposed(),W.selu(this)},n.prototype.leakyRelu=function(t){return t===void 0&&(t=.2),this.throwIfDisposed(),W.leakyRelu(this,t)},n.prototype.prelu=function(t){return this.throwIfDisposed(),W.prelu(this,t)},n.prototype.sigmoid=function(){return this.throwIfDisposed(),W.sigmoid(this)},n.prototype.logSigmoid=function(){return this.throwIfDisposed(),W.logSigmoid(this)},n.prototype.softplus=function(){return this.throwIfDisposed(),W.softplus(this)},n.prototype.zerosLike=function(){return this.throwIfDisposed(),W.zerosLike(this)},n.prototype.onesLike=function(){return this.throwIfDisposed(),W.onesLike(this)},n.prototype.sin=function(){return this.throwIfDisposed(),W.sin(this)},n.prototype.cos=function(){return this.throwIfDisposed(),W.cos(this)},n.prototype.tan=function(){return this.throwIfDisposed(),W.tan(this)},n.prototype.asin=function(){return this.throwIfDisposed(),W.asin(this)},n.prototype.acos=function(){return this.throwIfDisposed(),W.acos(this)},n.prototype.atan=function(){return this.throwIfDisposed(),W.atan(this)},n.prototype.sinh=function(){return this.throwIfDisposed(),W.sinh(this)},n.prototype.cosh=function(){return this.throwIfDisposed(),W.cosh(this)},n.prototype.tanh=function(){return this.throwIfDisposed(),W.tanh(this)},n.prototype.asinh=function(){return this.throwIfDisposed(),W.asinh(this)},n.prototype.acosh=function(){return this.throwIfDisposed(),W.acosh(this)},n.prototype.atanh=function(){return this.throwIfDisposed(),W.atanh(this)},n.prototype.erf=function(){return this.throwIfDisposed(),W.erf(this)},n.prototype.round=function(){return this.throwIfDisposed(),W.round(this)},n.prototype.step=function(t){return t===void 0&&(t=0),this.throwIfDisposed(),W.step(this,t)},n.prototype.softmax=function(t){return t===void 0&&(t=-1),this.throwIfDisposed(),W.softmax(this,t)},n.prototype.logSoftmax=function(t){return t===void 0&&(t=-1),this.throwIfDisposed(),W.logSoftmax(this,t)},n.prototype.resizeBilinear=function(t,e){return e===void 0&&(e=!1),this.throwIfDisposed(),W.image.resizeBilinear(this,t,e)},n.prototype.resizeNearestNeighbor=function(t,e){return e===void 0&&(e=!1),this.throwIfDisposed(),W.image.resizeNearestNeighbor(this,t,e)},n.prototype.conv1d=function(t,e,r,o,i,a){return o===void 0&&(o="NWC"),i===void 0&&(i=1),this.throwIfDisposed(),W.conv1d(this,t,e,r,o,i,a)},n.prototype.conv2d=function(t,e,r,o,i,a){return o===void 0&&(o="NHWC"),i===void 0&&(i=[1,1]),this.throwIfDisposed(),W.conv2d(this,t,e,r,o,i,a)},n.prototype.conv2dTranspose=function(t,e,r,o,i){return this.throwIfDisposed(),W.conv2dTranspose(this,t,e,r,o,i)},n.prototype.depthwiseConv2D=function(t,e,r,o,i,a){return o===void 0&&(o="NHWC"),i===void 0&&(i=[1,1]),this.throwIfDisposed(),W.depthwiseConv2d(this,t,e,r,o,i,a)},n.prototype.separableConv2d=function(t,e,r,o,i,a){return i===void 0&&(i=[1,1]),a===void 0&&(a="NHWC"),this.throwIfDisposed(),W.separableConv2d(this,t,e,r,o,i,a)},n.prototype.avgPool=function(t,e,r,o){return this.throwIfDisposed(),W.avgPool(this,t,e,r,o)},n.prototype.maxPool=function(t,e,r,o){return this.throwIfDisposed(),W.maxPool(this,t,e,r,o)},n.prototype.localResponseNormalization=function(t,e,r,o){return t===void 0&&(t=5),e===void 0&&(e=1),r===void 0&&(r=1),o===void 0&&(o=.5),W.localResponseNormalization(this,t,e,r,o)},n.prototype.pool=function(t,e,r,o,i){return this.throwIfDisposed(),W.pool(this,t,e,r,o,i)},n.prototype.variable=function(t,e,r){return t===void 0&&(t=!0),this.throwIfDisposed(),fn().makeVariable(this,t,e,r)},n.prototype.unsortedSegmentSum=function(t,e){return this.throwIfDisposed(),W.unsortedSegmentSum(this,t,e)},n.prototype.batchToSpaceND=function(t,e){return this.throwIfDisposed(),W.batchToSpaceND(this,t,e)},n.prototype.spaceToBatchND=function(t,e){return this.throwIfDisposed(),W.spaceToBatchND(this,t,e)},n.prototype.topk=function(t,e){return t===void 0&&(t=1),e===void 0&&(e=!0),this.throwIfDisposed(),W.topk(this,t,e)},n.prototype.stridedSlice=function(t,e,r,o,i,a,s,u){return o===void 0&&(o=0),i===void 0&&(i=0),a===void 0&&(a=0),s===void 0&&(s=0),u===void 0&&(u=0),this.throwIfDisposed(),W.stridedSlice(this,t,e,r,o,i,a,s,u)},n.prototype.depthToSpace=function(t,e){return this.throwIfDisposed(),W.depthToSpace(this,t,e)},n.prototype.fft=function(){return this.throwIfDisposed(),W.spectral.fft(this)},n.prototype.ifft=function(){return this.throwIfDisposed(),W.spectral.ifft(this)},n.prototype.rfft=function(){return this.throwIfDisposed(),W.spectral.rfft(this)},n.prototype.irfft=function(){return this.throwIfDisposed(),W.spectral.irfft(this)},n}();Object.defineProperty(je,Symbol.hasInstance,{value:function(n){return!!n&&n.dataId!=null&&n.shape!=null&&n.dtype!=null}});var Hc,ws,_s,Cs,Es,no=function(n){function t(e,r,o,i){var a=n.call(this,e.shape,e.dtype,e.dataId,i)||this;return a.trainable=r,a.name=o,a}return tn(t,n),t.prototype.assign=function(e){if(e.dtype!==this.dtype)throw new Error("dtype of the new value ("+e.dtype+") and previous value ("+this.dtype+") must match");if(!st(e.shape,this.shape))throw new Error("shape of the new value ("+e.shape+") and previous value ("+this.shape+") must match");fn().disposeTensor(this),this.dataId=e.dataId,fn().incRef(this,null)},t.prototype.dispose=function(){fn().disposeVariable(this),this.isDisposedInternal=!0},t}(je);Object.defineProperty(no,Symbol.hasInstance,{value:function(n){return n instanceof je&&n.assign!=null&&n.assign instanceof Function}}),function(n){n.R0="R0",n.R1="R1",n.R2="R2",n.R3="R3",n.R4="R4",n.R5="R5",n.R6="R6"}(Hc||(Hc={})),function(n){n.float32="float32",n.int32="int32",n.bool="int32",n.complex64="complex64"}(ws||(ws={})),function(n){n.float32="float32",n.int32="int32",n.bool="bool",n.complex64="complex64"}(_s||(_s={})),function(n){n.float32="float32",n.int32="float32",n.bool="float32",n.complex64="complex64"}(Cs||(Cs={})),function(n){n.float32="complex64",n.int32="complex64",n.bool="complex64",n.complex64="complex64"}(Es||(Es={}));var eg={float32:Cs,int32:ws,bool:_s,complex64:Es};function ft(n,t){if(n==="string"||t==="string"){if(n==="string"&&t==="string")return"string";throw new Error("Can not upcast "+n+" with "+t)}return eg[n][t]}function Ta(n){return ft(n,"int32")}function Ke(n,t){if(n.dtype===t.dtype)return[n,t];var e=ft(n.dtype,t.dtype);return[n.cast(e),t.cast(e)]}function tg(n,t){R(n.dtype===t.dtype,function(){return"The dtypes of the first("+n.dtype+") and second("+t.dtype+") input must match"})}function rh(n){var t=[];return function e(r,o,i){if(r!=null){if(r instanceof je)return void o.push(r);if(a=r,!(!Array.isArray(a)&&typeof a!="object")){var a,s=r;for(var u in s){var c=s[u];i.has(c)||(i.add(c),e(c,o,i))}}}}(n,t,new Set),t}var Na,Gc=function(){function n(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null}}return n.prototype.dispose=function(){for(var t in this.registeredVariables)this.registeredVariables[t].dispose()},n}(),ng=function(){function n(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new Gc}return n.prototype.ready=function(){return ae(this,void 0,void 0,function(){var t,e,r;return se(this,function(o){switch(o.label){case 0:if(this.pendingBackendInit!=null)return[2,this.pendingBackendInit.then(function(){})];if(this.backendInstance!=null)return[2];t=this.getSortedBackends(),e=0,o.label=1;case 1:return e<t.length?(r=t[e],[4,this.initializeBackend(r).success]):[3,5];case 2:return o.sent()?[4,this.setBackend(r)]:[3,4];case 3:return o.sent(),[2];case 4:return e++,[3,1];case 5:throw new Error("Could not initialize any backends, all backend initializations failed.")}})})},Object.defineProperty(n.prototype,"backend",{get:function(){if(this.pendingBackendInit!=null)throw new Error("Backend '"+this.backendName+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");if(this.backendInstance==null){var t=this.initializeBackendsAndReturnBest(),e=t.name;if(t.asyncInit)throw new Error("The highest priority backend '"+e+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");this.setBackend(e)}return this.backendInstance},enumerable:!0,configurable:!0}),n.prototype.backendNames=function(){return Object.keys(this.registryFactory)},n.prototype.findBackend=function(t){return!(t in this.registry)&&(!(t in this.registryFactory)||this.initializeBackend(t).asyncInit)?null:this.registry[t]},n.prototype.findBackendFactory=function(t){return t in this.registryFactory?this.registryFactory[t].factory:null},n.prototype.registerBackend=function(t,e,r){return r===void 0&&(r=1),t in this.registryFactory?(console.warn(t+" backend was already registered. Reusing existing backend factory."),!1):(this.registryFactory[t]={factory:e,priority:r},!0)},n.prototype.setBackend=function(t){return ae(this,void 0,void 0,function(){var e,r,o;return se(this,function(i){switch(i.label){case 0:if(this.registryFactory[t]==null)throw new Error("Backend name '"+t+"' not found in registry");return this.backendName=t,this.registry[t]!=null?[3,4]:(this.backendInstance=null,e=this.initializeBackend(t),r=e.success,e.asyncInit?[4,r]:[3,2]);case 1:return o=i.sent(),[3,3];case 2:o=r,i.label=3;case 3:if(!o)return[2,!1];i.label=4;case 4:return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new Jm(this.backendInstance),[2,!0]}})})},n.prototype.setupRegisteredKernels=function(){var t=this;Lc(this.backendName).forEach(function(e){e.setupFunc!=null&&e.setupFunc(t.backendInstance)})},n.prototype.disposeRegisteredKernels=function(t){var e=this;Lc(t).forEach(function(r){r.disposeFunc!=null&&r.disposeFunc(e.registry[t])})},n.prototype.initializeBackend=function(t){var e=this,r=this.registryFactory[t];if(r==null)throw new Error("Cannot initialize backend "+t+", no registration found.");try{var o=r.factory();if(Promise.resolve(o)===o){var i=++this.pendingBackendInitId,a=o.then(function(s){return!(i<e.pendingBackendInitId)&&(e.registry[t]=s,e.pendingBackendInit=null,!0)}).catch(function(s){return!(i<e.pendingBackendInitId)&&(e.pendingBackendInit=null,console.warn("Initialization of backend "+t+" failed"),console.warn(s.stack||s.message),!1)});return this.pendingBackendInit=a,{success:a,asyncInit:!0}}return this.registry[t]=o,{success:!0,asyncInit:!1}}catch(s){return console.warn("Initialization of backend "+t+" failed"),console.warn(s.stack||s.message),{success:!1,asyncInit:!1}}},n.prototype.removeBackend=function(t){if(!(t in this.registryFactory))throw new Error(t+" backend not found in registry");this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)},n.prototype.getSortedBackends=function(){var t=this;if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort(function(e,r){return t.registryFactory[r].priority-t.registryFactory[e].priority})},n.prototype.initializeBackendsAndReturnBest=function(){for(var t=this.getSortedBackends(),e=0;e<t.length;e++){var r=t[e],o=this.initializeBackend(r),i=o.success,a=o.asyncInit;if(a||i)return{name:r,asyncInit:a}}throw new Error("Could not initialize any backends, all backend initializations failed.")},n.prototype.moveData=function(t,e){var r=this.state.tensorInfo.get(e),o=r.backend,i=this.readSync(e);o.disposeData(e),r.backend=t,t.move(e,i,r.shape,r.dtype),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++},n.prototype.tidy=function(t,e){var r,o=this,i=null;if(e==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");e=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof e!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");i=t}return this.scopedRun(function(){return o.startScope(i)},function(){return o.endScope(r)},function(){return(r=e())instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),r})},n.prototype.scopedRun=function(t,e,r){t();try{var o=r();return e(),o}catch(i){throw e(),i}},n.prototype.nextTensorId=function(){return n.nextTensorId++},n.prototype.nextVariableId=function(){return n.nextVariableId++},n.prototype.clone=function(t){var e=this.makeTensorFromDataId(t.dataId,t.shape,t.dtype),r={x:t};return this.addTapeNode(this.state.activeScope.name,r,[e],function(o){return{x:function(){return o.toFloat()}}},[]),e},n.prototype.runKernel=function(t,e,r,o,i){return this.runKernelFunc(null,e,null,t,r,o,i)},n.prototype.shouldCheckForMemLeaks=function(){return this.ENV.getBool("IS_TEST")},n.prototype.checkKernelForMemLeak=function(t,e,r){var o=this.backend.numDataIds(),i=0;r.forEach(function(u){i+=u.dtype==="complex64"?3:1});var a=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],s=o-e-i-a;if(s>0)throw new Error("Backend '"+this.backendName+"' has an internal memory leak ("+s+" data ids) after running '"+t+"'")},n.prototype.runKernelFunc=function(t,e,r,o,i,a,s){var u,c=this;a===void 0&&(a=[]),s===void 0&&(s=[]);var l=[],f=this.isTapeOn();o==null&&(o=this.state.activeScope!=null?this.state.activeScope.name:"");var h,d=function(b){f&&(l=b.map(function(x){return c.keep(c.clone(x))}))},p=this.state.numBytes,v=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);var m,g=Kf(o,this.backendName);return h=g!=null?function(){var b=c.backend.numDataIds();m=g.kernelFunc({inputs:e,attrs:i,backend:c.backend});var x=Array.isArray(m)?m:[m];c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(o,b,x);var y=x.map(function(_){var k=_.dataId,S=_.shape,I=_.dtype;return c.makeTensorFromDataId(k,S,I)}),w=y.filter(function(_,k){return s[k]});return d((a||[]).slice().concat(w)),y}:function(){var b=c.backend.numDataIds();m=c.tidy(function(){return t(c.backend,d)});var x=Array.isArray(m)?m:[m];return c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(o,b,x),x},this.scopedRun(function(){return c.state.kernelDepth++},function(){return c.state.kernelDepth--},function(){u=c.ENV.getBool("DEBUG")?c.profiler.profileKernel(o,e,function(){return h()}):h()}),f&&this.addTapeNode(o,e,u,r,l),this.state.profiling&&this.state.activeProfile.kernels.push({name:o,bytesAdded:this.state.numBytes-p,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-v,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(e).map(function(b){return e[b].shape}),outputShapes:u.map(function(b){return b.shape})}),Array.isArray(m)?u:u[0]},n.prototype.makeTensor=function(t,e,r,o){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");r=r||"float32",o=o||this.backend;var i=t;r==="string"&&ou(t[0])&&(i=t.map(function(l){return $m(l)}));var a=o.write(i,e,r),s=new je(e,r,a,this.nextTensorId());if(this.incRef(s,o),r==="string"){var u=this.state.tensorInfo.get(a),c=qm(i);this.state.numBytes+=c-u.bytes,u.bytes=c}return s},n.prototype.makeTensorFromDataId=function(t,e,r,o){var i=new je(e,r=r||"float32",t,this.nextTensorId());return this.incRef(i,o),i},n.prototype.makeVariable=function(t,e,r,o){e===void 0&&(e=!0),r=r||this.nextVariableId().toString(),o!=null&&o!==t.dtype&&(t=t.asType(o));var i=new no(t,e,r,this.nextTensorId());if(this.state.registeredVariables[i.name]!=null)throw new Error("Variable with name "+i.name+" was already registered");return this.state.registeredVariables[i.name]=i,this.incRef(i,this.backend),i},n.prototype.incRef=function(t,e){var r=this.state.tensorInfo.has(t.dataId)?this.state.tensorInfo.get(t.dataId).refCount:0;if(this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++,r===0){this.state.numDataBuffers++;var o=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(o=t.size*Jf(t.dtype)),this.state.tensorInfo.set(t.dataId,{backend:e||this.backend,dtype:t.dtype,shape:t.shape,bytes:o,refCount:0}),this.state.numBytes+=o}this.state.tensorInfo.get(t.dataId).refCount++,t instanceof no||this.track(t)},n.prototype.disposeTensor=function(t){if(this.state.tensorInfo.has(t.dataId)){this.state.numTensors--,t.dtype==="string"&&this.state.numStringTensors--;var e=this.state.tensorInfo.get(t.dataId);e.refCount<=1?(t.dtype!=="complex64"&&(this.state.numBytes-=e.bytes),this.state.numDataBuffers--,e.backend.disposeData(t.dataId),this.state.tensorInfo.delete(t.dataId)):this.state.tensorInfo.get(t.dataId).refCount--}},n.prototype.disposeVariables=function(){for(var t in this.state.registeredVariables){var e=this.state.registeredVariables[t];this.disposeVariable(e)}},n.prototype.disposeVariable=function(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]},n.prototype.memory=function(){var t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t},n.prototype.profile=function(t){return ae(this,void 0,void 0,function(){var e,r;return se(this,function(o){return this.state.profiling=!0,e=this.state.numBytes,r=this.state.numTensors,this.state.activeProfile.kernels=[],this.state.activeProfile.result=t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max.apply(Math,this.state.activeProfile.kernels.map(function(i){return i.totalBytesSnapshot})),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-r,[2,this.state.activeProfile]})})},n.prototype.isTapeOn=function(){return this.state.gradientDepth>0&&this.state.kernelDepth===0},n.prototype.addTapeNode=function(t,e,r,o,i){var a=this,s={id:this.state.nextTapeNodeId++,kernelName:t,inputs:e,outputs:r,saved:i},u=Lm(t);u!=null&&(o=u.gradFunc),o!=null&&(s.gradient=function(c){return c=c.map(function(l,f){if(l==null){var h=r[f],d=zo(h.size,h.dtype);return a.makeTensor(d,h.shape,h.dtype)}return l}),o(c.length>1?c:c[0],i)}),this.state.activeTape.push(s)},n.prototype.keep=function(t){return t.kept=!0,t},n.prototype.startTape=function(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++},n.prototype.endTape=function(){this.state.gradientDepth--},n.prototype.startScope=function(t){var e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(e.name=t),this.state.scopeStack.push(e),this.state.activeScope=e},n.prototype.endScope=function(t){for(var e=this,r=rh(t),o=new Set(r.map(function(u){return u.id})),i=0;i<this.state.activeScope.track.length;i++){var a=this.state.activeScope.track[i];a.kept||o.has(a.id)||a.dispose()}var s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],r.forEach(function(u){u.kept||u.scopeId!==s.id||e.track(u)})},n.prototype.gradients=function(t,e,r,o){var i=this;if(o===void 0&&(o=!1),R(e.length>0,function(){return"gradients() received an empty list of xs."}),r!=null&&r.dtype!=="float32")throw new Error("dy must have 'float32' dtype, but has '"+r.dtype+"'");var a=this.scopedRun(function(){return i.startTape()},function(){return i.endTape()},function(){return i.tidy("forward",t)});R(a instanceof je,function(){return"The result y returned by f() must be a tensor."});var s=function(u,c,l){for(var f={},h={},d=0;d<c.length;d++)f[c[d].id]=!0;for(d=0;d<u.length;d++){var p=(_=u[d]).inputs;for(var v in p){for(var m=p[v],g=!1,b=0;b<c.length;b++)if(f[m.id]){_.outputs.forEach(function(E){return f[E.id]=!0}),g=!0,h[_.id]=!0;break}if(g)break}}var x={};x[l.id]=!0;var y={};for(d=u.length-1;d>=0;d--)for(p=(_=u[d]).inputs,b=0;b<_.outputs.length;b++)if(x[_.outputs[b].id]){for(var v in p)x[p[v].id]=!0,y[_.id]=!0;break}var w=[];for(d=0;d<u.length;d++){var _;if(h[(_=u[d]).id]&&y[_.id]){var k={};for(var v in _.inputs){var S=_.inputs[v];f[S.id]&&(k[v]=S)}var I=Object.assign({},_);I.inputs=k,I.outputs=_.outputs,w.push(I)}}return w}(this.state.activeTape,e,a);if(!o&&s.length===0&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",function(){var u,c,l={};l[a.id]=r??(u=a.shape,c=Zf(le(u),"float32"),P.makeTensor(c,u,"float32")),function(h,d,p){for(var v=function(g){var b=d[g],x=[];if(b.outputs.forEach(function(k){var S=h[k.id];S!=null?x.push(S):x.push(null)}),b.gradient==null)throw new Error("Cannot compute gradient: gradient function not found for "+b.kernelName+".");var y=b.gradient(x),w=function(k){if(!(k in y))throw new Error("Cannot backprop through input "+k+". Available gradients found: "+Object.keys(y)+".");var S=p(function(){return y[k]()});if(S.dtype!=="float32")throw new Error("Error in gradient for op "+b.kernelName+". The gradient of input "+k+" must have 'float32' dtype, but has '"+S.dtype+"'");var I=b.inputs[k];if(!st(S.shape,I.shape))throw new Error("Error in gradient for op "+b.kernelName+". The gradient of input '"+k+"' has shape '"+S.shape+"', which does not match the shape of the input '"+I.shape+"'");if(h[I.id]==null)h[I.id]=S;else{var E=h[I.id];h[I.id]=E.add(S),E.dispose()}};for(var _ in b.inputs)w(_)},m=d.length-1;m>=0;m--)v(m)}(l,s,function(h){return i.tidy(h)});var f=e.map(function(h){return l[h.id]});return i.state.gradientDepth===0&&(i.state.activeTape.forEach(function(h){for(var d=0,p=h.saved;d<p.length;d++)p[d].dispose()}),i.state.activeTape=null),{value:a,grads:f}})},n.prototype.customGrad=function(t){var e=this;return R(xs(t),function(){return"The f passed in customGrad(f) must be a function."}),function(){for(var r,o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];R(o.every(function(s){return s instanceof je}),function(){return"The args passed in customGrad(f)(x1, x2,...) must all be tensors"});var a={};return o.forEach(function(s,u){a[u]=s}),e.runKernelFunc(function(s,u){return R((r=t.apply(void 0,o.concat([u]))).value instanceof je,function(){return"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"}),R(xs(r.gradFunc),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."}),r.value},a,function(s,u){var c=r.gradFunc(s,u),l=Array.isArray(c)?c:[c];R(l.length===o.length,function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."}),R(l.every(function(h){return h instanceof je}),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."});var f={};return l.forEach(function(h,d){f[d]=function(){return h}}),f})}},n.prototype.readSync=function(t){return this.state.tensorInfo.get(t).backend.readSync(t)},n.prototype.read=function(t){return this.state.tensorInfo.get(t).backend.read(t)},n.prototype.time=function(t){return ae(this,void 0,void 0,function(){var e,r;return se(this,function(o){switch(o.label){case 0:return e=ln(),[4,this.backend.time(t)];case 1:return(r=o.sent()).wallMs=ln()-e,[2,r]}})})},n.prototype.track=function(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t},Object.defineProperty(n.prototype,"registeredVariables",{get:function(){return this.state.registeredVariables},enumerable:!0,configurable:!0}),n.prototype.reset=function(){for(var t in this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new Gc,this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null},n.nextTensorId=0,n.nextVariableId=0,n}(),P=function(){var n=function(){if(Na==null){var e=void 0;if(typeof window<"u")e=window;else if(typeof global<"u")e=global;else if(typeof process<"u")e=process;else{if(typeof self>"u")throw new Error("Could not find a global object");e=self}Na=e}return Na}();if(n._tfengine==null){var t=new Om(n);n._tfengine=new ng(t)}return function(e){qf=e}(n._tfengine.ENV),fn=function(){return n._tfengine},n._tfengine}();function oh(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}var Sn=G();Sn.registerFlag("DEBUG",function(){return!1},function(n){n&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")}),Sn.registerFlag("IS_BROWSER",function(){return oh()}),Sn.registerFlag("IS_NODE",function(){return typeof process<"u"&&process.versions!==void 0&&process.versions.node!==void 0}),Sn.registerFlag("IS_CHROME",function(){return typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)}),Sn.registerFlag("PROD",function(){return!1}),Sn.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",function(){return Sn.getBool("DEBUG")}),Sn.registerFlag("DEPRECATION_WARNINGS_ENABLED",function(){return!0}),Sn.registerFlag("IS_TEST",function(){return!1});var Po,Lt,Ot,dr={},Fa={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function rg(n,t){dr[n]=t}function wn(n){n in dr||(dr[n]=function(e){if(e!==1&&e!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");var r=function(o){if(typeof OffscreenCanvas<"u"&&o===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}(e);return r.addEventListener("webglcontextlost",function(o){o.preventDefault(),delete dr[e]},!1),e===1?r.getContext("webgl",Fa)||r.getContext("experimental-webgl",Fa):r.getContext("webgl2",Fa)}(n));var t=dr[n];return t.isContextLost()?(delete dr[n],wn(n)):(t.disable(t.DEPTH_TEST),t.disable(t.STENCIL_TEST),t.disable(t.BLEND),t.disable(t.DITHER),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SAMPLE_COVERAGE),t.enable(t.SCISSOR_TEST),t.enable(t.CULL_FACE),t.cullFace(t.BACK),dr[n])}function ra(n,t){return[t,n]}function Co(n){var t=le(n);return ys(Math.ceil(t/4))}function Ho(n,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(n/2))]}function iu(n,t){var e,r,o,i,a,s,u,c,l,f=n;return G().getNumber("WEBGL_VERSION")===2?(e=f.R32F,r=f.R16F,o=f.RGBA16F,i=f.RGBA32F,a=f.RED,s=4,u=1,c=f.HALF_FLOAT,l=f.FLOAT):(e=n.RGBA,r=n.RGBA,o=n.RGBA,i=f.RGBA,a=n.RGBA,s=4,u=4,c=t!=null?t.HALF_FLOAT_OES:null,l=n.FLOAT),{internalFormatFloat:e,internalFormatHalfFloat:r,internalFormatPackedHalfFloat:o,internalFormatPackedFloat:i,textureFormatFloat:a,downloadTextureFormat:n.RGBA,downloadUnpackNumChannels:s,defaultNumChannels:u,textureTypeHalfFloat:c,textureTypeFloat:l}}function fe(n,t,e){var r=e();return t&&function(o){var i=o.getError();if(i!==o.NO_ERROR)throw new Error("WebGL Error: "+sg(o,i))}(n),r}(function(n){n[n.DENSE=0]="DENSE",n[n.SHARED_BATCH=1]="SHARED_BATCH"})(Po||(Po={})),function(n){n[n.RENDER=0]="RENDER",n[n.UPLOAD=1]="UPLOAD",n[n.PIXELS=2]="PIXELS",n[n.DOWNLOAD=3]="DOWNLOAD"}(Lt||(Lt={})),function(n){n[n.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",n[n.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",n[n.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",n[n.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",n[n.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"}(Ot||(Ot={}));var og=596e-10,ig=65504;function ag(n){return!!(G().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||n===0||og<Math.abs(n)&&Math.abs(n)<ig)}function sg(n,t){switch(t){case n.NO_ERROR:return"NO_ERROR";case n.INVALID_ENUM:return"INVALID_ENUM";case n.INVALID_VALUE:return"INVALID_VALUE";case n.INVALID_OPERATION:return"INVALID_OPERATION";case n.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case n.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case n.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return"Unknown error code "+t}}function ei(n,t,e){return Bn(n,t,function(){return n.getExtension(e)},'Extension "'+e+'" not supported on this browser.')}function ug(n,t,e){var r=Bn(n,t,function(){return n.createShader(n.VERTEX_SHADER)},"Unable to create vertex WebGLShader.");if(fe(n,t,function(){return n.shaderSource(r,e)}),fe(n,t,function(){return n.compileShader(r)}),n.getShaderParameter(r,n.COMPILE_STATUS)===!1)throw console.log(n.getShaderInfoLog(r)),new Error("Failed to compile vertex shader.");return r}function cg(n,t,e){var r=Bn(n,t,function(){return n.createShader(n.FRAGMENT_SHADER)},"Unable to create fragment WebGLShader.");if(fe(n,t,function(){return n.shaderSource(r,e)}),fe(n,t,function(){return n.compileShader(r)}),n.getShaderParameter(r,n.COMPILE_STATUS)===!1)throw function(o,i){var a=lg.exec(i);if(a==null)return console.log("Couldn't parse line number in error: "+i),void console.log(o);for(var s=+a[1],u=o.split(`
`),c=u.length.toString().length+2,l=u.map(function(m,g){return qr((g+1).toString(),c)+m}),f=0,h=0;h<l.length;h++)f=Math.max(l[h].length,f);var d=l.slice(0,s-1),p=l.slice(s-1,s),v=l.slice(s);console.log(d.join(`
`)),console.log(i.split(`
`)[0]),console.log("%c "+qr(p[0],f),"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(v.join(`
`))}(e,n.getShaderInfoLog(r)),new Error("Failed to compile fragment shader.");return r}var Pa,Ma,lg=/ERROR: [0-9]+:([0-9]+):/g;function fg(n,t){return Bn(n,t,function(){return n.createProgram()},"Unable to create WebGLProgram.")}function hg(n,t,e){if(fe(n,t,function(){return n.linkProgram(e)}),n.getProgramParameter(e,n.LINK_STATUS)===!1)throw console.log(n.getProgramInfoLog(e)),new Error("Failed to link vertex and fragment shaders.")}function Oa(n,t,e){if(fe(n,t,function(){return n.validateProgram(e)}),n.getProgramParameter(e,n.VALIDATE_STATUS)===!1)throw console.log(n.getProgramInfoLog(e)),new Error("Shader program validation failed.")}function dg(n,t,e){var r=Bn(n,t,function(){return n.createBuffer()},"Unable to create WebGLBuffer");return fe(n,t,function(){return n.bindBuffer(n.ARRAY_BUFFER,r)}),fe(n,t,function(){return n.bufferData(n.ARRAY_BUFFER,e,n.STATIC_DRAW)}),r}function pg(n,t,e){var r=Bn(n,t,function(){return n.createBuffer()},"Unable to create WebGLBuffer");return fe(n,t,function(){return n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,r)}),fe(n,t,function(){return n.bufferData(n.ELEMENT_ARRAY_BUFFER,e,n.STATIC_DRAW)}),r}function vg(n,t){return Bn(n,t,function(){return n.createTexture()},"Unable to create WebGLTexture.")}function mg(n,t){var e=G().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(n<=0||t<=0){var r="["+n+"x"+t+"]";throw new Error("Requested texture size "+r+" is invalid.")}if(n>e||t>e)throw r="["+n+"x"+t+"]",new Error("Requested texture size "+r+" greater than WebGL maximum on this browser / GPU "+("["+e+"x"+e+"]")+".")}function gg(n,t){return Bn(n,t,function(){return n.createFramebuffer()},"Unable to create WebGLFramebuffer.")}function jc(n,t,e,r,o,i,a,s){var u=n.getAttribLocation(e,r);return u!==-1&&(fe(n,t,function(){return n.bindBuffer(n.ARRAY_BUFFER,o)}),fe(n,t,function(){return n.vertexAttribPointer(u,i,n.FLOAT,!1,a,s)}),fe(n,t,function(){return n.enableVertexAttribArray(u)}),!0)}function yg(n,t,e,r){Cg(n,r),fe(n,t,function(){return n.activeTexture(n.TEXTURE0+r)}),fe(n,t,function(){return n.bindTexture(n.TEXTURE_2D,e)})}function xg(n,t,e,r){return Bn(n,t,function(){return n.getUniformLocation(e,r)},'uniform "'+r+'" not present in program.')}function bg(n,t,e){return n.getUniformLocation(t,e)}function wg(n,t,e,r,o,i){fe(n,t,function(){return yg(n,t,r,i)}),fe(n,t,function(){return n.uniform1i(o,i)})}function Ba(n,t,e,r){fe(n,t,function(){return n.bindFramebuffer(n.FRAMEBUFFER,r)}),fe(n,t,function(){return n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e,0)})}function qc(n,t,e){fe(n,t,function(){return n.bindFramebuffer(n.FRAMEBUFFER,e)}),fe(n,t,function(){return n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,null,0)})}function ti(n){var t=n.checkFramebufferStatus(n.FRAMEBUFFER);if(t!==n.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+_g(n,t))}function _g(n,t){switch(t){case n.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case n.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case n.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case n.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return"unknown error "+t}}function Bn(n,t,e,r){var o=fe(n,t,function(){return e()});if(o==null)throw new Error(r);return o}function Cg(n,t){var e=n.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,r=t+n.TEXTURE0;if(r<n.TEXTURE0||r>e)throw new Error("textureUnit must be in "+("[gl.TEXTURE0, gl.TEXTURE"+e+"]")+".")}function ki(n,t){return t===void 0&&(t=2),le(n.slice(0,n.length-t))}function Ai(n){if(n.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[n.length>1?n[n.length-2]:1,n[n.length-1]]}function La(n){var t=[1,1,1];return n.length===0||n.length===1&&n[0]===1||(t=[ki(n)].concat(Ai(n))),t}function Eg(n,t){var e;t===void 0&&(t=!1);var r=G().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(t&&(r*=2,(n=n.map(function(c,l){return l>=n.length-2?Yf(n[l]):n[l]})).length===1&&(n=[2,n[0]])),n.length!==2){var o=vr(n);n=o.newShape}var i=le(n);if(n.length<=1&&i<=r)return[1,i];if(n.length===2&&n[0]<=r&&n[1]<=r)return n;if(n.length===3&&n[0]*n[1]<=r&&n[2]<=r)return[n[0]*n[1],n[2]];if(n.length===3&&n[0]<=r&&n[1]*n[2]<=r)return[n[0],n[1]*n[2]];if(n.length===4&&n[0]*n[1]*n[2]<=r&&n[3]<=r)return[n[0]*n[1]*n[2],n[3]];if(n.length===4&&n[0]<=r&&n[1]*n[2]*n[3]<=r)return[n[0],n[1]*n[2]*n[3]];if(t){var a=ki(n),s=2,u=2;return n.length&&(s=(e=Ai(n))[0],u=e[1]),ys(i=a*(s/2)*(u/2)).map(function(c){return 2*c})}return ys(i)}function ni(n){return n%2==0}function ri(n,t){if(st(n=n.slice(-2),t=t.slice(-2))||!n.length||!t.length||n[0]===0||n[1]===0||t[0]===0||t[1]===0)return!0;if(n.length!==t.length){var e=n.slice(-1)[0],r=t.slice(-1)[0];if(e===r||ni(e)&&ni(r)&&(n[0]===1||t[0]===1))return!0}return n[1]===t[1]&&ni(n[0])&&ni(t[0])}function Ig(n){if(Pa==null){var t=wn(n);Pa=t.getParameter(t.MAX_TEXTURE_SIZE)}return Pa}function Rg(n){if(Ma==null){var t=wn(n);Ma=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,Ma)}function Sg(n){if(n===0)return 0;var t=wn(n);return Kt(t,"EXT_disjoint_timer_query_webgl2")&&n===2?2:Kt(t,"EXT_disjoint_timer_query")?1:0}function Kt(n,t){return n.getExtension(t)!=null}function Kc(n){try{if(wn(n)!=null)return!0}catch{return!1}return!1}function kg(n){if(n===0)return!1;var t=wn(n);if(n===1){if(!Kt(t,"OES_texture_float"))return!1}else if(!Kt(t,"EXT_color_buffer_float"))return!1;return Is(t)}function Ag(n){if(n===0)return!1;var t=wn(n);if(n!==1){if(Kt(t,"EXT_color_buffer_float"))return Is(t);if(Kt(t,"EXT_color_buffer_half_float")){var e=t.getExtension("EXT_color_buffer_half_float");return function(r,o){var i=iu(r,o),a=r.createTexture();r.bindTexture(r.TEXTURE_2D,a),r.texImage2D(r.TEXTURE_2D,0,i.internalFormatHalfFloat,1,1,0,i.textureFormatFloat,i.textureTypeHalfFloat,null);var s=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,s),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,a,0);var u=r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE;return r.bindTexture(r.TEXTURE_2D,null),r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(a),r.deleteFramebuffer(s),u}(t,e)}return!1}return!!Kt(t,"OES_texture_float")&&!!Kt(t,"WEBGL_color_buffer_float")&&Is(t)}function Is(n){var t=iu(n),e=n.createTexture();n.bindTexture(n.TEXTURE_2D,e),n.texImage2D(n.TEXTURE_2D,0,t.internalFormatFloat,1,1,0,t.textureFormatFloat,t.textureTypeFloat,null);var r=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,r),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e,0);var o=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(e),n.deleteFramebuffer(r),o}function Dg(n){return n===2&&wn(n).fenceSync!=null}var me=G();function ih(n){G().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(n+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function ie(n,t){return P.tidy(n,t)}function Tt(n){rh(n).forEach(function(t){return t.dispose()})}function Tg(n){return P.keep(n)}function Di(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];G().getBool("IS_TEST")||console.warn.apply(console,n)}function ir(n,t){var e=n;if(mn(n))return t==="string"?[]:[n.length];if(!Array.isArray(n))return[];for(var r=[];Array.isArray(e)||mn(e)&&t!=="string";)r.push(e.length),e=e[0];return Array.isArray(n)&&G().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&function o(i,a,s){if(s=s||[],!Array.isArray(i)&&!mn(i))return void R(a.length===0,function(){return"Element arr["+s.join("][")+"] is a primitive, but should be an array/TypedArray of "+a[0]+" elements"});R(a.length>0,function(){return"Element arr["+s.join("][")+"] should be a primitive, but is an array of "+i.length+" elements"}),R(i.length===a[0],function(){return"Element arr["+s.join("][")+"] should have "+a[0]+" elements, but has "+i.length+" elements"});for(var u=a.slice(1),c=0;c<i.length;++c)o(i[c],u,s.concat(c))}(n,r,[]),r}function Xc(n,t,e,r){if(n!=null&&(n!=="numeric"&&n!==t||n==="numeric"&&t==="string"))throw new Error("Argument '"+e+"' passed to '"+r+"' must be "+n+" tensor, but got "+t+" tensor")}function C(n,t,e,r){if(r===void 0&&(r="numeric"),n instanceof je)return Xc(r,n.dtype,t,e),n;var o=Vo(n);if(o!=="string"&&["bool","int32","float32"].indexOf(r)>=0&&(o=r),Xc(r,o,t,e),n==null||!mn(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string"){var i=n==null?"null":n.constructor.name;throw new Error("Argument '"+t+"' passed to '"+e+"' must be a Tensor or TensorLike, but got '"+i+"'")}var a=ir(n,o);mn(n)||Array.isArray(n)||(n=[n]);var s=o!=="string"?Qf(n,o,G().getBool("DEBUG")):to(n,[],!0);return P.makeTensor(s,a,o)}function Ti(n,t,e,r){if(r===void 0&&(r="numeric"),!Array.isArray(n))throw new Error("Argument "+t+" passed to "+e+" must be a `Tensor[]` or `TensorLike[]`");return n.map(function(o,i){return C(o,t+"["+i+"]",e)},r)}function ah(n,t){for(var e=0;e<n.length;++e)if(n[n.length-e-1]!==t-1-e)return!1;return!0}function Ng(n,t,e){for(var r=n.length+t.length,o=[],i=0,a=0,s=0;s<r;s++)e.indexOf(s)===-1?o.push(n[i++]):o.push(t[a++]);return o}function pt(n,t){for(var e=[],r=n.length,o=0;o<r;o++)t.indexOf(o)===-1&&e.push(n[o]);return[e,t.map(function(i){return n[i]})]}function Nt(n,t){return Ng(n,t.map(function(e){return 1}),t)}function Mt(n,t,e){R(ah(t,e),function(){return n+" supports only inner-most axes for now. Got axes "+t+" and rank-"+e+" input."})}function _n(n,t){if(ah(n,t))return null;for(var e=[],r=0;r<t;++r)n.indexOf(r)===-1&&e.push(r);return n.forEach(function(o){return e.push(o)}),e}function au(n){return n.map(function(t,e){return[e,t]}).sort(function(t,e){return t[1]-e[1]}).map(function(t){return t[0]})}function Cn(n,t){for(var e=[],r=t-n;r<t;++r)e.push(r);return e}function Fg(n,t){var e=n[0].length;n.forEach(function(o,i){R(o.length===e,function(){return"Error in concat"+e+"D: rank of tensors["+i+"] must be the same as the rank of the rest ("+e+")"})}),R(t>=0&&t<e,function(){return"Error in concat"+e+"D: axis must be between 0 and "+(e-1)+"."});var r=n[0];n.forEach(function(o,i){for(var a=0;a<e;a++)R(a===t||o[a]===r[a],function(){return"Error in concat"+e+"D: Shape of tensors["+i+"] ("+o+") does not match the shape of the rest ("+r+") along the non-concatenated axis "+i+"."})})}function ro(n,t){for(var e=n[0].slice(),r=1;r<n.length;r++)e[t]+=n[r][t];return e}function T(n){var t=Object.keys(n);if(t.length!==1)throw new Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with "+t.length+" keys.");var e=t[0],r=n[e];e.endsWith("_")&&(e=e.substring(0,e.length-1));var o=function(){for(var i=[],a=0;a<arguments.length;a++)i[a]=arguments[a];P.startScope(e);try{var s=r.apply(void 0,i);return s instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),P.endScope(s),s}catch(u){throw P.endScope(null),u}};return Object.defineProperty(o,"name",{value:e,configurable:!0}),o}me.registerFlag("HAS_WEBGL",function(){return me.getNumber("WEBGL_VERSION")>0}),me.registerFlag("WEBGL_VERSION",function(){return Kc(2)?2:Kc(1)?1:0}),me.registerFlag("WEBGL_BUFFER_SUPPORTED",function(){return me.get("WEBGL_VERSION")===2}),me.registerFlag("WEBGL_CPU_FORWARD",function(){return!0}),me.registerFlag("WEBGL_FORCE_F16_TEXTURES",function(){return!1}),me.registerFlag("WEBGL_PACK",function(){return me.getBool("HAS_WEBGL")}),me.registerFlag("WEBGL_PACK_NORMALIZATION",function(){return me.getBool("WEBGL_PACK")}),me.registerFlag("WEBGL_PACK_CLIP",function(){return me.getBool("WEBGL_PACK")}),me.registerFlag("WEBGL_PACK_DEPTHWISECONV",function(){return!1}),me.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",function(){return me.getBool("WEBGL_PACK")}),me.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",function(){return me.getBool("WEBGL_PACK")}),me.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",function(){return me.getBool("WEBGL_PACK")}),me.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",function(){return me.getBool("WEBGL_PACK")}),me.registerFlag("WEBGL_PACK_REDUCE",function(){return me.getBool("WEBGL_PACK")}),me.registerFlag("WEBGL_LAZILY_UNPACK",function(){return me.getBool("WEBGL_PACK")}),me.registerFlag("WEBGL_CONV_IM2COL",function(){return me.getBool("WEBGL_PACK")}),me.registerFlag("WEBGL_MAX_TEXTURE_SIZE",function(){return Ig(me.getNumber("WEBGL_VERSION"))}),me.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",function(){return Rg(me.getNumber("WEBGL_VERSION"))}),me.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",function(){var n=me.getNumber("WEBGL_VERSION");return n===0?0:Sg(n)}),me.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",function(){return me.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&(n=navigator.userAgent||navigator.vendor||window.opera,!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(n)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(n.substr(0,4))));var n}),me.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",function(){return kg(me.getNumber("WEBGL_VERSION"))}),me.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",function(){return!me.getBool("WEBGL_FORCE_F16_TEXTURES")&&me.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")}),me.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",function(){return Ag(me.getNumber("WEBGL_VERSION"))}),me.registerFlag("WEBGL_FENCE_API_ENABLED",function(){return Dg(me.getNumber("WEBGL_VERSION"))}),me.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",function(){return me.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0}),nh=ih;var lt=T({complex_:function(n,t){var e=C(n,"real","complex"),r=C(t,"imag","complex");return Le(e.shape,r.shape,"real and imag shapes, "+e.shape+" and "+r.shape+", must match in call to tf.complex()."),P.runKernelFunc(function(o){return o.complex(e,r)},{$real:e,$imag:r})}}),jt=T({real_:function(n){var t=C(n,"input","real");return P.runKernelFunc(function(e){return e.real(t)},{$input:t})}}),hn=T({imag_:function(n){var t=C(n,"input","imag");return P.runKernelFunc(function(e){return e.imag(t)},{$input:t})}});function ht(n,t,e){return ar(n,t,ir(n,e),e)}function ar(n,t,e,r){if(r==null&&(r=Vo(n)),r==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!mn(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){eh(t);var o=le(t),i=le(e);R(o===i,function(){return"Based on the provided shape, ["+t+"], the tensor should have "+o+" values but has "+i});for(var a=0;a<e.length;++a){var s=e[a],u=a!==e.length-1||s!==le(t.slice(a));R(e[a]===t[a]||!u,function(){return"Error creating a new Tensor. Inferred shape ("+e+") does not match the provided shape ("+t+"). "})}}return mn(n)||Array.isArray(n)||(n=[n]),t=t||e,n=r!=="string"?Qf(n,r,G().getBool("DEBUG")):to(n,[],!0),P.makeTensor(n,t,r)}function re(n,t){if((mn(n)&&t!=="string"||Array.isArray(n))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&mn(n)&&!(n instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return ar(n,[],[],t)}function Je(n,t){io(n);var e=ir(n,t);if(e.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return ar(n,null,e,t)}function Yn(n,t,e){if(io(n),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");var r=ir(n,e);if(r.length!==2&&r.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return ar(n,t,r,e)}function su(n,t,e){if(io(n),t!=null&&t.length!==3)throw new Error("tensor3d() requires shape to have three numbers");var r=ir(n,e);if(r.length!==3&&r.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return ar(n,t,r,e)}function kt(n,t,e){if(io(n),t!=null&&t.length!==4)throw new Error("tensor4d() requires shape to have four numbers");var r=ir(n,e);if(r.length!==4&&r.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return ar(n,t,r,e)}function Pg(n,t,e){if(io(n),t!=null&&t.length!==5)throw new Error("tensor5d() requires shape to have five numbers");var r=ir(n,e);if(r.length!==5&&r.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return ar(n,t,r,e)}function Mg(n,t,e){if(io(n),t!=null&&t.length!==6)throw new Error("tensor6d() requires shape to have six numbers");var r=ir(n,e);if(r.length!==6&&r.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return ar(n,t=t||r,r,e)}function Og(n,t,e,r){return t===void 0&&(t=!0),P.makeVariable(n,t,e,r)}function ao(n,t){if(t===void 0&&(t="float32"),t==="complex64"){var e=ao(n,"float32"),r=Ge(n,"float32");return lt(e,r)}var o=Zf(le(n),t);return P.makeTensor(o,n,t)}function Ge(n,t){if(t===void 0&&(t="float32"),t==="complex64"){var e=Ge(n,"float32"),r=Ge(n,"float32");return lt(e,r)}var o=zo(le(n),t);return P.makeTensor(o,n,t)}function yn(n,t,e){return P.runKernelFunc(function(r){return r.fill(n,t,e)},{})}function Bg(n,t,e){if(e<=0)throw new Error("The number of values should be positive.");return P.runKernelFunc(function(r){return r.linspace(n,t,e)},{})}function Ni(n,t,e,r){if(e===void 0&&(e=1),r===void 0&&(r="float32"),e===0)throw new Error("Cannot have a step of zero");if(n===t||n<t&&e<0||t<n&&e>1)return Ge([0],r);var o=zo(Math.abs(Math.ceil((t-n)/e)),r);t<n&&e===1&&(e=-1),o[0]=n;for(var i=1;i<o.length;i++)o[i]=o[i-1]+e;return Je(o,r)}var sh=T({onesLike_:function(n){var t=C(n,"x","onesLike");if(t.dtype==="complex64"){var e=sh(jt(t)),r=Fe(hn(t));return lt(e,r)}return P.runKernelFunc(function(o){return o.onesLike(t)},{$x:t},function(o,i){return{$x:function(){return Fe(o)}}})}}),Fe=T({zerosLike_:function(n){var t=C(n,"x","zerosLike");return P.runKernelFunc(function(e){return e.zerosLike(t)},{$x:t},function(e,r){return{$x:function(){return Fe(e)}}})}}),Ze=T({concat_:function(n,t){t===void 0&&(t=0),R(n.length>=1,function(){return"Pass at least one tensor to concat"});var e=Ti(n,"tensors","concat");e[0].dtype==="complex64"&&e.forEach(function(s){if(s.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype `+s.dtype+". ")}),t=ot(t,e[0].shape)[0];var r=ro(e.map(function(s){return s.shape}),t);if(le(r)===0)return ht([],r);if((e=e.filter(function(s){return s.size>0})).length===1)return e[0];var o=e.map(function(s){return s.shape});Fg(o,t);var i=e,a={axis:t};return P.runKernelFunc(function(s){return s.concat(e,t)},i,function(s){var u=o.map(function(c){return c[t]});return uu(s,u,t).map(function(c){return function(){return c}})},"Concat",a)}}),Lg=T({concat1d_:function(n){return Ze(n,0)}}),Wg=T({concat2d_:function(n,t){return Ze(n,t)}}),Ug=T({concat3d_:function(n,t){return Ze(n,t)}}),Vg=T({concat4d_:function(n,t){return Ze(n,t)}}),uu=T({split_:function(n,t,e){e===void 0&&(e=0);var r,o=C(n,"x","split");return e=ot(e,o.shape)[0],typeof t=="number"?(R(o.shape[e]%t==0,function(){return"Number of splits must evenly divide the axis."}),r=new Array(t).fill(o.shape[e]/t)):(R(o.shape[e]===t.reduce(function(i,a){return i+a}),function(){return"The sum of sizes must match the size of the axis dimension."}),r=t),P.runKernelFunc(function(i){return i.split(o,r,e)},{$x:o},function(i){return{$x:function(){return Ze(i,e)}}})}});function Cr(n,t){return n(t={exports:{}},t.exports),t.exports}var zg=Cr(function(n){(function(t,e,r){function o(s){var u,c=this,l=(u=4022871197,function(f){f=f.toString();for(var h=0;h<f.length;h++){var d=.02519603282416938*(u+=f.charCodeAt(h));d-=u=d>>>0,u=(d*=u)>>>0,u+=4294967296*(d-=u)}return 23283064365386963e-26*(u>>>0)});c.next=function(){var f=2091639*c.s0+23283064365386963e-26*c.c;return c.s0=c.s1,c.s1=c.s2,c.s2=f-(c.c=0|f)},c.c=1,c.s0=l(" "),c.s1=l(" "),c.s2=l(" "),c.s0-=l(s),c.s0<0&&(c.s0+=1),c.s1-=l(s),c.s1<0&&(c.s1+=1),c.s2-=l(s),c.s2<0&&(c.s2+=1),l=null}function i(s,u){return u.c=s.c,u.s0=s.s0,u.s1=s.s1,u.s2=s.s2,u}function a(s,u){var c=new o(s),l=u&&u.state,f=c.next;return f.int32=function(){return 4294967296*c.next()|0},f.double=function(){return f()+11102230246251565e-32*(2097152*f()|0)},f.quick=f,l&&(typeof l=="object"&&i(l,c),f.state=function(){return i(c,{})}),f}e&&e.exports?e.exports=a:this.alea=a})(0,n)}),Hg=Cr(function(n){(function(t,e,r){function o(s){var u=this,c="";u.x=0,u.y=0,u.z=0,u.w=0,u.next=function(){var f=u.x^u.x<<11;return u.x=u.y,u.y=u.z,u.z=u.w,u.w^=u.w>>>19^f^f>>>8},s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),u.next()}function i(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u}function a(s,u){var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(typeof l=="object"&&i(l,c),f.state=function(){return i(c,{})}),f}e&&e.exports?e.exports=a:this.xor128=a})(0,n)}),Gg=Cr(function(n){(function(t,e,r){function o(s){var u=this,c="";u.next=function(){var f=u.x^u.x>>>2;return u.x=u.y,u.y=u.z,u.z=u.w,u.w=u.v,(u.d=u.d+362437|0)+(u.v=u.v^u.v<<4^f^f<<1)|0},u.x=0,u.y=0,u.z=0,u.w=0,u.v=0,s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),l==c.length&&(u.d=u.x<<10^u.x>>>4),u.next()}function i(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u.v=s.v,u.d=s.d,u}function a(s,u){var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(typeof l=="object"&&i(l,c),f.state=function(){return i(c,{})}),f}e&&e.exports?e.exports=a:this.xorwow=a})(0,n)}),jg=Cr(function(n){(function(t,e,r){function o(s){var u=this;u.next=function(){var c,l,f=u.x,h=u.i;return c=f[h],l=(c^=c>>>7)^c<<24,l^=(c=f[h+1&7])^c>>>10,l^=(c=f[h+3&7])^c>>>3,l^=(c=f[h+4&7])^c<<7,c=f[h+7&7],l^=(c^=c<<13)^c<<9,f[h]=l,u.i=h+1&7,l},function(c,l){var f,h=[];if(l===(0|l))h[0]=l;else for(l=""+l,f=0;f<l.length;++f)h[7&f]=h[7&f]<<15^l.charCodeAt(f)+h[f+1&7]<<13;for(;h.length<8;)h.push(0);for(f=0;f<8&&h[f]===0;++f);for(f==8?h[7]=-1:h[f],c.x=h,c.i=0,f=256;f>0;--f)c.next()}(u,s)}function i(s,u){return u.x=s.x.slice(),u.i=s.i,u}function a(s,u){s==null&&(s=+new Date);var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(l.x&&i(l,c),f.state=function(){return i(c,{})}),f}e&&e.exports?e.exports=a:this.xorshift7=a})(0,n)}),qg=Cr(function(n){(function(t,e,r){function o(s){var u=this;u.next=function(){var c,l,f=u.w,h=u.X,d=u.i;return u.w=f=f+1640531527|0,l=h[d+34&127],c=h[d=d+1&127],l^=l<<13,c^=c<<17,l^=l>>>15,c^=c>>>12,l=h[d]=l^c,u.i=d,l+(f^f>>>16)|0},function(c,l){var f,h,d,p,v,m=[],g=128;for(l===(0|l)?(h=l,l=null):(l+="\0",h=0,g=Math.max(g,l.length)),d=0,p=-32;p<g;++p)l&&(h^=l.charCodeAt((p+32)%l.length)),p===0&&(v=h),h^=h<<10,h^=h>>>15,h^=h<<4,h^=h>>>13,p>=0&&(v=v+1640531527|0,d=(f=m[127&p]^=h+v)==0?d+1:0);for(d>=128&&(m[127&(l&&l.length||0)]=-1),d=127,p=512;p>0;--p)h=m[d+34&127],f=m[d=d+1&127],h^=h<<13,f^=f<<17,h^=h>>>15,f^=f>>>12,m[d]=h^f;c.w=v,c.X=m,c.i=d}(u,s)}function i(s,u){return u.i=s.i,u.w=s.w,u.X=s.X.slice(),u}function a(s,u){s==null&&(s=+new Date);var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(l.X&&i(l,c),f.state=function(){return i(c,{})}),f}e&&e.exports?e.exports=a:this.xor4096=a})(0,n)}),Kg=Cr(function(n){(function(t,e,r){function o(s){var u=this,c="";u.next=function(){var f=u.b,h=u.c,d=u.d,p=u.a;return f=f<<25^f>>>7^h,h=h-d|0,d=d<<24^d>>>8^p,p=p-f|0,u.b=f=f<<20^f>>>12^h,u.c=h=h-d|0,u.d=d<<16^h>>>16^p,u.a=p-f|0},u.a=0,u.b=0,u.c=-1640531527,u.d=1367130551,s===Math.floor(s)?(u.a=s/4294967296|0,u.b=0|s):c+=s;for(var l=0;l<c.length+20;l++)u.b^=0|c.charCodeAt(l),u.next()}function i(s,u){return u.a=s.a,u.b=s.b,u.c=s.c,u.d=s.d,u}function a(s,u){var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(typeof l=="object"&&i(l,c),f.state=function(){return i(c,{})}),f}e&&e.exports?e.exports=a:this.tychei=a})(0,n)}),pr=Cr(function(n){(function(t,e){var r,o=this,i=256,a=6,s="random",u=e.pow(i,a),c=e.pow(2,52),l=2*c,f=i-1;function h(g,b,x){var y=[],w=v(function S(I,E){var F,N=[],U=typeof I;if(E&&U=="object")for(F in I)try{N.push(S(I[F],E-1))}catch{}return N.length?N:U=="string"?I:I+"\0"}((b=b==1?{entropy:!0}:b||{}).entropy?[g,m(t)]:g??function(){try{var S;return r&&(S=r.randomBytes)?S=S(i):(S=new Uint8Array(i),(o.crypto||o.msCrypto).getRandomValues(S)),m(S)}catch{var I=o.navigator,E=I&&I.plugins;return[+new Date,o,E,o.screen,m(t)]}}(),3),y),_=new d(y),k=function(){for(var S=_.g(a),I=u,E=0;S<c;)S=(S+E)*i,I*=i,E=_.g(1);for(;S>=l;)S/=2,I/=2,E>>>=1;return(S+E)/I};return k.int32=function(){return 0|_.g(4)},k.quick=function(){return _.g(4)/4294967296},k.double=k,v(m(_.S),t),(b.pass||x||function(S,I,E,F){return F&&(F.S&&p(F,_),S.state=function(){return p(_,{})}),E?(e[s]=S,I):S})(k,w,"global"in b?b.global:this==e,b.state)}function d(g){var b,x=g.length,y=this,w=0,_=y.i=y.j=0,k=y.S=[];for(x||(g=[x++]);w<i;)k[w]=w++;for(w=0;w<i;w++)k[w]=k[_=f&_+g[w%x]+(b=k[w])],k[_]=b;(y.g=function(S){for(var I,E=0,F=y.i,N=y.j,U=y.S;S--;)I=U[F=f&F+1],E=E*i+U[f&(U[F]=U[N=f&N+I])+(U[N]=I)];return y.i=F,y.j=N,E})(i)}function p(g,b){return b.i=g.i,b.j=g.j,b.S=g.S.slice(),b}function v(g,b){for(var x,y=g+"",w=0;w<y.length;)b[f&w]=f&(x^=19*b[f&w])+y.charCodeAt(w++);return m(b)}function m(g){return String.fromCharCode.apply(0,g)}if(e["seed"+s]=h,v(e.random(),t),n.exports){n.exports=h;try{r=require("crypto")}catch{}}})([],Math)});pr.alea=zg,pr.xor128=Hg,pr.xorwow=Gg,pr.xorshift7=jg,pr.xor4096=qg,pr.tychei=Kg;var oa=pr.alea,cu=function(){function n(t,e,r,o,i){this.mean=t,this.stdDev=e,this.dtype=r,this.nextVal=NaN,this.truncated=o,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);var a=i||Math.random();this.random=oa(a.toString())}return n.prototype.nextValue=function(){if(!isNaN(this.nextVal)){var t=this.nextVal;return this.nextVal=NaN,t}for(var e,r,o=!1;!o;){var i=void 0,a=void 0,s=void 0;do s=(i=2*this.random()-1)*i+(a=2*this.random()-1)*a;while(s>=1||s===0);var u=Math.sqrt(-2*Math.log(s)/s);e=this.mean+this.stdDev*i*u,r=this.mean+this.stdDev*a*u,this.truncated&&!this.isValidTruncated(e)||(o=!0)}return this.truncated&&!this.isValidTruncated(r)||(this.nextVal=this.convertValue(r)),this.convertValue(e)},n.prototype.convertValue=function(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)},n.prototype.isValidTruncated=function(t){return t<=this.upper&&t>=this.lower},n}(),Xg=function(){function n(t,e,r,o){this.alpha=t,this.beta=1/e,this.dtype=r;var i=o||Math.random();this.randu=oa(i.toString()),this.randn=new cu(0,1,r,!1,this.randu()),this.d=t<1?t+2/3:t-1/3,this.c=1/Math.sqrt(9*this.d)}return n.prototype.nextValue=function(){for(var t,e,r,o,i,a;;){do o=this.randn.nextValue(),a=1+this.c*o;while(a<=0);if(a*=a*a,e=1-.331*(t=o*o)*t,r=.5*t+this.d*(1-a+Math.log(a)),(i=this.randu())<e||Math.log(i)<r)break}return a=1/this.beta*this.d*a,this.alpha<1&&(a*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(a)},n.prototype.convertValue=function(t){return this.dtype==="float32"?t:Math.round(t)},n}(),$g=function(){function n(t,e,r,o){var i=this;if(t===void 0&&(t=0),e===void 0&&(e=1),this.canReturnFloat=function(){return i.dtype==null||i.dtype==="float32"},this.min=t,this.range=e-t,this.dtype=r,o==null&&(o=Math.random()),typeof o=="number"&&(o=o.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error("The difference between "+t+" - "+e+" <= 1 and dtype is not float");this.random=oa(o)}return n.prototype.convertValue=function(t){return this.canReturnFloat()?t:Math.round(t)},n.prototype.nextValue=function(){return this.convertValue(this.min+this.range*this.random())},n}();function ye(n,t,e){return t===void 0&&(t="float32"),t=t||"float32",eh(n),new Fo(n,t,e)}function Yg(n,t){t===void 0&&(t=!1),console.log(n.toString(t))}var uh=T({batchToSpaceND_:function(n,t,e){var r=C(n,"x","batchToSpaceND"),o=t.reduce(function(i,a){return i*a});return R(r.rank>=1+t.length,function(){return"input rank is "+r.rank+" but should be > than blockShape.length "+t.length}),R(e.length===t.length,function(){return"crops.length is "+e.length+" but should be equal to blockShape.length  "+t.length}),R(r.shape[0]%o==0,function(){return"input tensor batch is "+r.shape[0]+" but is not divisible by the product of the elements of blockShape "+t.join(" * ")+" === "+o}),P.runKernelFunc(function(i){return i.batchToSpaceND(r,t,e)},{$x:r},function(i){return{$x:function(){return i.spaceToBatchND(t,e)}}})}}),Jg=T({broadcastTo_:function(n,t){var e=C(n,"broadcastTo","x"),r=e.shape;if(t.some(function(u){return!(u>0)||u%1!=0}))throw new Error("broadcastTo(): Invalid broadcast shape ["+t+"].");if(t.length<e.rank)throw new Error("broadcastTo(): shape.length="+t.length+" < input.rank="+e.rank+".");if(t.length>e.rank){for(var o=e.shape.slice();o.length<t.length;)o.unshift(1);e=e.reshape(o)}for(var i=Array.from(t),a=t.length-1;a>=0;a--)if(e.shape[a]===t[a])i[a]=1;else if(e.shape[a]!==1)throw new Error("broadcastTo(): ["+r+"] cannot be broadcast to ["+t+"].");var s=i.map(function(u,c){return u>1?c:-1}).filter(function(u){return u>=0});return s.length===0?e.clone():P.runKernelFunc(function(u){return u.tile(e,i)},{input:e},function(u){return{input:function(){return u.sum(s,!0)}}})}}),Qg=T({cast_:function(n,t){var e=C(n,"x","cast");if(!Gm(t))throw new Error("Failed to cast to unknown dtype "+t);if(t==="string"&&e.dtype!=="string"||t!=="string"&&e.dtype==="string")throw new Error("Only strings can be casted to strings");var r={dtype:t};return P.runKernelFunc(function(o){return o.cast(e,t)},{x:e},function(o){return{x:function(){return o.clone()}}},"Cast",r)}}),Zg=T({clone_:function(n){var t=C(n,"x","clone",null);return P.runKernelFunc(function(){return P.makeTensorFromDataId(t.dataId,t.shape,t.dtype)},{$x:t},function(e){return{$x:function(){return e.toFloat()}}})}}),ey=T({cumsum_:function(n,t,e,r){t===void 0&&(t=0),e===void 0&&(e=!1),r===void 0&&(r=!1);var o=C(n,"x","cumsum"),i=_n([t|=0],o.rank),a=o;i!=null&&(a=o.transpose(i));var s=Cn(1,o.rank)[0],u=P.runKernelFunc(function(c){return c.cumsum(a,s,e,r)},{permutedX:a},function(c){return{permutedX:function(){return c.cumsum(t,e,!r)}}});return i!=null&&(u=u.transpose(i)),u}}),ty=T({depthToSpace_:function(n,t,e){e===void 0&&(e="NHWC");var r=C(n,"x","depthToSpace"),o=e==="NHWC"?r.shape[1]:r.shape[2],i=e==="NHWC"?r.shape[2]:r.shape[3],a=e==="NHWC"?r.shape[3]:r.shape[1];return R(o*t>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+o+" and "+t+`  for depthToSpace with input shape
      `+r.shape}),R(i*t>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+i+" and "+t+` for depthToSpace with input shape
          `+r.shape}),R(a%(t*t)==0,function(){return"Dimension size must be evenly divisible by "+t*t+" but is "+a+" for depthToSpace with input shape "+r.shape}),P.runKernelFunc(function(s){return s.depthToSpace(r,t,e)},{$x:r})}}),Gt=T({expandDims_:function(n,t){t===void 0&&(t=0);var e=C(n,"x","expandDims",null);R(t<=e.rank,function(){return"Axis must be <= rank of the tensor"});var r=e.shape.slice();return t<0&&(R(-(e.rank+1)<=t,function(){return"Axis must be in the interval ["+-(e.rank+1)+", "+e.rank+"]"}),t=e.rank+t+1),r.splice(t,0,1),Jt(e,r)}}),ch=T({eye_:function(n,t,e,r){r===void 0&&(r="float32"),t==null&&(t=n);for(var o=ye([n,t],r),i=n<=t?n:t,a=0;a<i;++a)o.set(1,a,a);var s=o.toTensor().as2D(n,t);if(e==null)return s;if(e.length===1)return Kr(Gt(s,0),[e[0],1,1]);if(e.length===2)return Kr(Gt(Gt(s,0),0),[e[0],e[1],1,1]);if(e.length===3)return Kr(Gt(Gt(Gt(s,0),0),0),[e[0],e[1],e[2],1,1]);throw new Error("eye() currently supports only 1D and 2D batchShapes, but received "+e.length+"D.")}}),ny=T({multinomial_:function(n,t,e,r){r===void 0&&(r=!1);var o=C(n,"logits","multinomial"),i=o.size,a=o.rank;if(i<2)throw new Error("Error in multinomial: you need at least 2 outcomes, but got "+i+".");if(a>2)throw new Error("Rank of probabilities must be 1 or 2, but is "+a);e=e||Math.random();var s=a===1?o.as2D(1,-1):o,u=P.runKernelFunc(function(c){return c.multinomial(s,r,t,e)},{logits2D:s});return a===1?u.as1D():u}}),Rs=T({oneHot_:function(n,t,e,r){if(e===void 0&&(e=1),r===void 0&&(r=0),t<2)throw new Error("Error in oneHot: depth must be >=2, but it is "+t);var o=C(n,"indices","oneHot","int32"),i=o.shape.concat([t]);return o=o.flatten(),P.runKernelFunc(function(a){return a.oneHot(o,t,e,r)},{$indices:o},function(a){return{$indices:function(){return Ge(o.shape,"float32")}}}).reshape(i)}}),Er=T({pad_:function(n,t,e){e===void 0&&(e=0);var r=C(n,"x","pad");if(r.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");var o={paddings:t,constantValue:e};return P.runKernelFunc(function(i){return i.pad(r,t,e)},{x:r},function(i){var a=t.map(function(s){return s[0]});return{x:function(){return i.slice(a,r.shape)}}},"PadV2",o)}}),ry=T({pad1d_:function(n,t,e){return e===void 0&&(e=0),R(t.length===2,function(){return"Invalid number of paddings. Must be length of 2."}),Er(n,[t],e)}}),oy=T({pad2d_:function(n,t,e){return e===void 0&&(e=0),R(t.length===2&&t[0].length===2&&t[1].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),Er(n,t,e)}}),iy=T({pad3d_:function(n,t,e){return e===void 0&&(e=0),R(t.length===3&&t[0].length===2&&t[1].length===2&&t[2].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),Er(n,t,e)}}),ay=T({pad4d_:function(n,t,e){return e===void 0&&(e=0),R(t.length===4&&t[0].length===2&&t[1].length===2&&t[2].length===2&&t[3].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),Er(n,t,e)}}),sy=T({rand_:function(n,t,e){var r=le(n),o=null;if(e==null||e==="float32")o=new Float32Array(r);else if(e==="int32")o=new Int32Array(r);else{if(e!=="bool")throw new Error("Unknown data type "+e);o=new Uint8Array(r)}for(var i=0;i<r;i++)o[i]=t();return P.makeTensor(o,n,e)}}),uy=T({randomNormal_:function(n,t,e,r,o){if(t===void 0&&(t=0),e===void 0&&(e=1),r!=null&&r==="bool")throw new Error("Unsupported data type "+r);for(var i=new cu(t,e,r,!1,o),a=ye(n,r),s=0;s<a.values.length;s++)a.values[s]=i.nextValue();return a.toTensor()}}),cy=T({randomGamma_:function(n,t,e,r,o){if(e===void 0&&(e=1),r===void 0&&(r="float32"),e==null&&(e=1),r==null&&(r="float32"),r!=="float32"&&r!=="int32")throw new Error("Unsupported data type "+r);for(var i=new Xg(t,e,r,o),a=ye(n,r),s=0;s<a.values.length;s++)a.values[s]=i.nextValue();return a.toTensor()}}),lh=T({randomUniform_:function(n,t,e,r,o){t===void 0&&(t=0),e===void 0&&(e=1),r===void 0&&(r="float32");for(var i=ye(n,r),a=new $g(t,e,null,o),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),Jt=T({reshape_:function(n,t){var e=C(n,"x","reshape",null);t=zm(t,e.size),R(e.size===le(t),function(){return"new shape and old shape must have the same number of elements."});var r={shape:t};return P.runKernelFunc(function(o){return o.reshape(e,t)},{x:e},function(o){return{x:function(){return o.reshape(e.shape)}}},"Reshape",r)}}),fh=T({spaceToBatchND_:function(n,t,e){var r=C(n,"x","spaceToBatchND");return R(r.rank>=1+t.length,function(){return"input rank "+r.rank+" should be > than [blockShape] "+t.length}),R(e.length===t.length,function(){return"paddings.shape[0] "+e.length+" must be equal to [blockShape] "+t.length}),R(r.shape.reduce(function(o,i,a){return a>0&&a<=t.length?o&&(i+e[a-1][0]+e[a-1][1])%t[a-1]==0:o},!0),function(){return"input spatial dimensions "+r.shape.slice(1)+" with paddings "+e.toString()+" must be divisible by blockShapes "+t.toString()}),P.runKernelFunc(function(o){return o.spaceToBatchND(r,t,e)},{$x:r},function(o){return{$x:function(){return o.batchToSpaceND(t,e)}}})}}),hh=T({squeeze_:function(n,t){var e=C(n,"x","squeeze");return Jt(e,vr(e.shape,t).newShape)}}),Vt=T({stack_:function(n,t){t===void 0&&(t=0);var e=Ti(n,"tensors","stack");if(R(e.length>=1,function(){return"Pass at least one tensor to tf.stack"}),e.length===1)return e[0].expandDims(t);var r=e[0].rank,o=e[0].shape,i=e[0].dtype;R(t<=r,function(){return"Axis must be <= rank of the tensor"}),e.forEach(function(s){Le(o,s.shape,"All tensors passed to stack must have matching shapes")}),e.forEach(function(s){R(i===s.dtype,function(){return"All tensors passed to stack must have matching dtypes"})});var a=e.map(function(s){return s.expandDims(t)});return Ze(a,t)}}),Kr=T({tile_:function(n,t){var e=C(n,"x","tile",null);R(e.rank===t.length,function(){return"Error in transpose: rank of input "+e.rank+" must match length of reps "+t+"."});var r=[e],o={reps:t};return P.runKernelFunc(function(i,a){var s=i.tile(e,t);return a([e]),s},{x:e},function(i,a){var s=a[0];return{x:function(){var u=Fe(s);if(s.rank===1)for(var c=0;c<t[0];++c)u=u.add(i.slice([c*s.shape[0]],[s.shape[0]]));else if(s.rank===2)for(c=0;c<t[0];++c)for(var l=0;l<t[1];++l)u=u.add(i.slice([c*s.shape[0],l*s.shape[1]],[s.shape[0],s.shape[1]]));else if(s.rank===3)for(c=0;c<t[0];++c)for(l=0;l<t[1];++l)for(var f=0;f<t[2];++f)u=u.add(i.slice([c*s.shape[0],l*s.shape[1],f*s.shape[2]],[s.shape[0],s.shape[1],s.shape[2]]));else{if(s.rank!==4)throw new Error("Gradient for tile operation is not implemented for rank-"+s.rank+" tensors yet.");for(c=0;c<t[0];++c)for(l=0;l<t[1];++l)for(f=0;f<t[2];++f)for(var h=0;h<t[3];++h)u=u.add(i.slice([c*s.shape[0],l*s.shape[1],f*s.shape[2],h*s.shape[3]],[s.shape[0],s.shape[1],s.shape[2],s.shape[3]]))}return u}}},"Tile",o,r)}}),ly=T({truncatedNormal_:function(n,t,e,r,o){if(t===void 0&&(t=0),e===void 0&&(e=1),r!=null&&r==="bool")throw new Error("Unsupported data type "+r);for(var i=new cu(t,e,r,!0,o),a=ye(n,r),s=0;s<a.values.length;s++)a.values[s]=i.nextValue();return a.toTensor()}}),et=T({unstack_:function(n,t){t===void 0&&(t=0),t=t||0;var e=C(n,"x","unstack");R(t>=-e.shape.length&&t<e.shape.length,function(){return"Axis = "+t+" is not in [-"+e.shape.length+", "+e.shape.length+")"}),t<0&&(t+=e.shape.length);var r={axis:t};return P.runKernelFunc(function(o){return o.unstack(e,t)},{x:e},function(o){return{x:function(){return Vt(o,t)}}},"Unpack",r)}}),fy=function(n,t){return ae(this,void 0,void 0,function(){var e,r,o,i,a,s,u,c,l,f;return se(this,function(h){switch(h.label){case 0:return e=C(n,"x","setdiff1d"),r=C(t,"y","setdiff1d"),R(e.dtype===r.dtype,function(){return"x and y should have the same dtype, but got x ("+e.dtype+") and y ("+r.dtype+")."}),R(e.rank===1,function(){return"x should be 1D tensor, but got x ("+e.shape+")."}),R(r.rank===1,function(){return"y should be 1D tensor, but got y ("+r.shape+")."}),[4,e.data()];case 1:return o=h.sent(),[4,r.data()];case 2:for(i=h.sent(),a=new Set(i),s=0,l=0;l<o.length;l++)a.has(o[l])||s++;for(u=new Fo([s],e.dtype),c=new Fo([s],"int32"),l=0,f=0;l<o.length;l++)a.has(o[l])||(u.values[f]=o[l],c.values[f]=l,f++);return[2,[u.toTensor(),c.toTensor()]]}})})};function Fi(n,t,e,r){r===void 0&&(r=!0);var o=[];if(r)(o=o.concat(t.slice(0))).push(n[0]/e),o=o.concat(n.slice(1));else{o=o.concat(n[0]);for(var i=t.length,a=0;a<i;++a)o=o.concat([n[a+1]/t[a],t[a]]);o=o.concat(n.slice(i+1))}return o}function Pi(n,t,e){e===void 0&&(e=!0);var r=[];if(e){r.push(t);for(var o=t+1;o<n;++o)o<=2*t?(r.push(o),r.push(o-(t+1))):r.push(o)}else{var i=[],a=[];for(o=1;o<n;++o)o>=2*t+1||o%2==1?a.push(o):i.push(o);r.push.apply(r,i),r.push(0),r.push.apply(r,a)}return r}function Mi(n,t,e,r){r===void 0&&(r=!0);var o=[];r?o.push(n[0]/e):o.push(n[0]*e);for(var i=1;i<n.length;++i)i<=t.length?r?o.push(t[i-1]*n[i]):o.push(n[i]/t[i-1]):o.push(n[i]);return o}function dh(n,t){for(var e=[0],r=0;r<t;++r)e.push(n[r][0]);return e}function ph(n,t,e){for(var r=n.slice(0,1),o=0;o<e;++o)r.push(n[o+1]-t[o][0]-t[o][1]);return r}function vh(n,t){if(n.rank<1)throw new Error("tf.gatherND() expects the input to be rank 1 or higher, but the rank was "+n.rank+".");if(t.rank<1)throw new Error("tf.gatherND() expects the indices to be rank 1 or higher, but the rank was "+t.rank+".");if(t.dtype!=="int32")throw new Error("tf.gatherND() expects the indices to be int32 type, but the dtype was "+t.dtype+".");if(t.shape[t.rank-1]>n.rank)throw new Error("index innermost dimension length must be <= tensor rank; saw: "+t.shape[t.rank-1]+" vs. "+n.rank);if(n.size===0)throw new Error("Requested more than 0 entries, but input is empty. Input shape: "+n.shape+".");for(var e=t.shape,r=e[e.length-1],o=1,i=0;i<e.length-1;++i)o*=e[i];var a=n.shape,s=e.slice();s.pop();var u=1;for(i=r;i<n.rank;++i)u*=a[i],s.push(a[i]);var c=gn(n.shape).map(function(l){return l/u}).concat([1]).slice(0,r);return[s,o,u,c]}var mh=30;function Wa(n){return n<=mh?n:bs(n,Math.floor(Math.sqrt(n)))}function hy(n,t,e){var r=t.rank>1?t.shape[t.rank-1]:1,o=t.rank>1?t.rank-1:1,i="Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: "+e.shape+", indices.shape: "+t.shape+", shape: "+n+", sliceDim: "+r+", and batchDim: "+o+".";if(e.rank<o)throw new Error(i+" update.rank < "+o+". ");if(n.length<r+(e.rank-o))throw new Error(i+" Output shape length < "+(r+(e.rank-o)));if(e.rank!==o+n.length-r)throw new Error(i+" update.rank != "+(o+n.length-r));for(var a=0;a<o;++a)if(e.shape[a]!==t.shape[a])throw new Error(i+" updates.shape["+a+"] ("+e.shape[a]+") != indices.shape["+a+"] ("+t.shape[a]+").");for(a=0;a<e.rank-o;++a)if(e.shape[a+o]!==n[a+r])throw new Error(i+" updates.shape["+(a+o)+"] ("+e.shape[a+o]+") != shape["+(a+o)+"] ("+n[a+o]+")")}function dy(n,t,e){if(t.rank<1)throw new Error("tf.scatterND() expects the indices to be rank 1 or higher, but the rank was "+t.rank+".");if(n.rank<1)throw new Error("tf.scatterND() expects the updates to be rank 1 or higher, but the rank was "+n.rank+".");if(t.dtype!=="int32")throw new Error("The dtype of 'indices' should be int32, but got dtype: "+t.dtype);if(e.length<1)throw new Error("Output rank must be greater or equal to 1, but got shape: "+e);if(e.length===0){if(t.size===0)throw new Error("Indices specified for empty output. indices shape: "+t.shape);if(n.size===0)throw new Error("Updates specified for empty output. updates shape: "+n.shape)}hy(e,t,n)}function Oi(n,t,e){for(var r=t.shape.length,o=r>1?t.shape[r-1]:1,i=e.length,a=1,s=o;s<i;++s)a*=e[s];var u=o<1?1:o;return{sliceRank:o,numUpdates:le(t.shape)/u,sliceSize:a,strides:gn(e.slice(0,o)).concat([1]),outputSize:le(e)}}function py(n,t,e){R(n.rank===t.length,function(){return"Error in slice"+n.rank+"D: Length of begin "+t+" must match the rank of the array ("+n.rank+")."}),R(n.rank===e.length,function(){return"Error in slice"+n.rank+"D: Length of size "+e+" must match the rank of the array ("+n.rank+")."});for(var r=function(i){R(t[i]+e[i]<=n.shape[i],function(){return"Error in slice"+n.rank+"D: begin["+i+"] + size["+i+"] ("+(t[i]+e[i])+") would overflow input.shape["+i+"] ("+n.shape[i]+")"})},o=0;o<n.rank;++o)r(o)}function $c(n){for(var t=[],e=0;n>0;)1&n&&t.push(e),n/=2,e++;return t}function lu(n,t,e){for(var r=[],o=0;o<n.length;o++)r[o]=Math.ceil((t[o]-n[o])/e[o]);return r}function vy(n,t,e,r,o){var i=t[o],a=e[o]||1;(n&1<<o||i==null)&&(i=a>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);var s=r[o];return i<0&&(i+=s),i=gs(0,i,s-1)}function my(n,t,e,r,o){var i=t[o],a=e[o]||1;(n&1<<o||i==null)&&(i=a>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);var s=r[o];return i<0&&(i+=s),i=a>0?gs(0,i,s):gs(-1,i,s-1)}function gh(n,t,e){for(var r=e.length,o=0;o<e.length;o++)if(e[o]>1){r=o;break}for(o=r+1;o<e.length;o++)if(t[o]>0||e[o]!==n[o])return!1;return!0}function yh(n,t){for(var e=n.length>0?n[n.length-1]:1,r=0;r<n.length-1;r++)e+=n[r]*t[r];return e}function gy(n,t){R(xs(n),function(){return"The f passed in variableGrads(f) must be a function"}),R(t==null||Array.isArray(t)&&t.every(function(l){return l instanceof no}),function(){return"The varList passed in variableGrads(f, varList) must be an array of variables"});var e=t!=null;if(!e)for(var r in t=[],P.registeredVariables)t.push(P.registeredVariables[r]);var o=e?t.filter(function(l){return!l.trainable}):null,i=t.length;R((t=t.filter(function(l){return l.trainable})).length>0,function(){return"variableGrads() expects at least one of the input variables to be trainable, but none of the "+i+" variables is trainable."});var a=P.gradients(n,t,null,!0),s=a.value,u=a.grads;R(u.some(function(l){return l!=null}),function(){return"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."}),R(s.rank===0,function(){return"The f passed in variableGrads(f) must return a scalar, but it returned a rank-"+s.rank+" tensor"});var c={};return t.forEach(function(l,f){u[f]!=null&&(c[l.name]=u[f])}),o!=null&&o.forEach(function(l){return c[l.name]=null}),{value:s,grads:c}}function ia(n){return P.customGrad(n)}var Ln=T({softmax_:function(n,t){t===void 0&&(t=-1);var e=C(n,"logits","softmax","float32");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error("Softmax along a non-last dimension is not yet supported. Logits was rank "+e.rank+" and dim was "+t);return P.runKernelFunc(function(r,o){var i=r.softmax(e,t);return o([i]),i},{logits:e},function(r,o){var i=o[0],a=r.mul(i);return{logits:function(){return a.sub(a.sum([t],!0).mul(i))}}},"Softmax",{dim:t},[],[!0])}}),yy=T({logSoftmax_:function(n,t){t===void 0&&(t=-1);var e=C(n,"logits","logSoftmax");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error("Log Softmax along a non-last dimension is not yet supported. Logits was rank "+e.rank+" and axis was "+t);return ia(function(r,o){var i=r.max(t,!0),a=r.sub(i),s=a.toFloat().sub(a.exp().sum(t,!0).log());return o([s]),{value:s,gradFunc:function(u,c){var l=c[0].exp();return u.sub(u.sum(t,!0).mul(l))}}})(e)}}),xh=function(){function n(t,e){this.backend=t,this.dataMover=e,this.data=new WeakMap,this.dataIdsCount=0}return n.prototype.get=function(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)},n.prototype.set=function(t,e){this.dataIdsCount++,this.data.set(t,e)},n.prototype.has=function(t){return this.data.has(t)},n.prototype.delete=function(t){return this.dataIdsCount--,this.data.delete(t)},n.prototype.numDataIds=function(){return this.dataIdsCount},n}(),bh=function(){function n(){}return n.prototype.time=function(t){return O("time")},n.prototype.read=function(t){return O("read")},n.prototype.readSync=function(t){return O("readSync")},n.prototype.numDataIds=function(){return O("numDataIds")},n.prototype.disposeData=function(t){return O("disposeData")},n.prototype.write=function(t,e,r){return O("write")},n.prototype.move=function(t,e,r,o){return O("move")},n.prototype.memory=function(){return O("memory")},n.prototype.floatPrecision=function(){return O("floatPrecision")},n.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},n.prototype.batchMatMul=function(t,e,r,o){return O("batchMatMul")},n.prototype.fusedBatchMatMul=function(t){return t.a,t.b,t.transposeA,t.transposeB,t.bias,t.activation,t.preluActivationWeights,O("fusedBatchMatMul")},n.prototype.slice=function(t,e,r){return O("slice")},n.prototype.stridedSlice=function(t,e,r,o){return O("stridedSlice")},n.prototype.unstack=function(t,e){return O("unstack")},n.prototype.reverse=function(t,e){return O("reverse")},n.prototype.concat=function(t,e){return O("concat")},n.prototype.neg=function(t){return O("neg")},n.prototype.add=function(t,e){return O("add")},n.prototype.addN=function(t){return O("addN")},n.prototype.subtract=function(t,e){return O("subtract")},n.prototype.multiply=function(t,e){return O("multiply")},n.prototype.realDivide=function(t,e){return O("realDivide")},n.prototype.floorDiv=function(t,e){return O("floorDiv")},n.prototype.sum=function(t,e){return O("sum")},n.prototype.prod=function(t,e){return O("prod")},n.prototype.unsortedSegmentSum=function(t,e,r){return O("unsortedSegmentSum")},n.prototype.argMin=function(t,e){return O("argMin")},n.prototype.argMax=function(t,e){return O("argMax")},n.prototype.equal=function(t,e){return O("equal")},n.prototype.notEqual=function(t,e){return O("notEqual")},n.prototype.less=function(t,e){return O("less")},n.prototype.lessEqual=function(t,e){return O("lessEqual")},n.prototype.greater=function(t,e){return O("greater")},n.prototype.greaterEqual=function(t,e){return O("greaterEqual")},n.prototype.logicalNot=function(t){return O("logicalNot")},n.prototype.logicalAnd=function(t,e){return O("logicalAnd")},n.prototype.logicalOr=function(t,e){return O("logicalOr")},n.prototype.where=function(t){return O("where")},n.prototype.select=function(t,e,r){return O("select")},n.prototype.topk=function(t,e,r){return O("topk")},n.prototype.min=function(t,e){return O("min")},n.prototype.minimum=function(t,e){return O("minimum")},n.prototype.mod=function(t,e){return O("mod")},n.prototype.max=function(t,e){return O("max")},n.prototype.maximum=function(t,e){return O("maximum")},n.prototype.all=function(t,e){return O("all")},n.prototype.any=function(t,e){return O("any")},n.prototype.squaredDifference=function(t,e){return O("squaredDifference")},n.prototype.ceil=function(t){return O("ceil")},n.prototype.floor=function(t){return O("floor")},n.prototype.round=function(t){return O("round")},n.prototype.sign=function(t){return O("sign")},n.prototype.isNaN=function(t){return O("isNaN")},n.prototype.isInf=function(t){return O("isInf")},n.prototype.isFinite=function(t){return O("isFinite")},n.prototype.pow=function(t,e){return O("pow")},n.prototype.exp=function(t){return O("exp")},n.prototype.expm1=function(t){return O("expm1")},n.prototype.softmax=function(t,e){return O("softmax")},n.prototype.log=function(t){return O("log")},n.prototype.log1p=function(t){return O("log1p")},n.prototype.sqrt=function(t){return O("sqrt")},n.prototype.rsqrt=function(t){return O("rsqrt")},n.prototype.square=function(t){return O("square")},n.prototype.reciprocal=function(t){return O("reciprocal")},n.prototype.relu=function(t){return O("relu")},n.prototype.relu6=function(t){return O("relu6")},n.prototype.prelu=function(t,e){return O("prelu")},n.prototype.elu=function(t){return O("elu")},n.prototype.eluDer=function(t,e){return O("eluDer")},n.prototype.selu=function(t){return O("selu")},n.prototype.int=function(t){return O("int")},n.prototype.clip=function(t,e,r){return O("clip")},n.prototype.abs=function(t){return O("abs")},n.prototype.complexAbs=function(t){return O("complexAbs")},n.prototype.sigmoid=function(t){return O("sigmoid")},n.prototype.softplus=function(t){return O("softplus")},n.prototype.sin=function(t){return O("sin")},n.prototype.cos=function(t){return O("cos")},n.prototype.tan=function(t){return O("tan")},n.prototype.asin=function(t){return O("asin")},n.prototype.acos=function(t){return O("acos")},n.prototype.atan=function(t){return O("atan")},n.prototype.atan2=function(t,e){return O("atan2")},n.prototype.sinh=function(t){return O("sinh")},n.prototype.cosh=function(t){return O("cosh")},n.prototype.tanh=function(t){return O("tanh")},n.prototype.asinh=function(t){return O("asinh")},n.prototype.acosh=function(t){return O("acosh")},n.prototype.atanh=function(t){return O("atanh")},n.prototype.erf=function(t){return O("erf")},n.prototype.step=function(t,e){return O("step")},n.prototype.fusedConv2d=function(t){return t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights,O("fusedConv2d")},n.prototype.conv2d=function(t,e,r){return O("conv2d")},n.prototype.conv2dDerInput=function(t,e,r){return O("conv2dDerInput")},n.prototype.conv2dDerFilter=function(t,e,r){return O("conv2dDerFilter")},n.prototype.fusedDepthwiseConv2D=function(t){return t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights,O("fusedDepthwiseConv2D")},n.prototype.depthwiseConv2D=function(t,e,r){return O("depthwiseConv2D")},n.prototype.depthwiseConv2DDerInput=function(t,e,r){return O("depthwiseConv2DDerInput")},n.prototype.depthwiseConv2DDerFilter=function(t,e,r){return O("depthwiseConv2DDerFilter")},n.prototype.conv3d=function(t,e,r){return O("conv3d")},n.prototype.conv3dDerInput=function(t,e,r){return O("conv3dDerInput")},n.prototype.conv3dDerFilter=function(t,e,r){return O("conv3dDerFilter")},n.prototype.maxPool=function(t,e){return O("maxPool")},n.prototype.maxPoolBackprop=function(t,e,r,o){return O("maxPoolBackprop")},n.prototype.avgPool=function(t,e){return O("avgPool")},n.prototype.avgPoolBackprop=function(t,e,r){return O("avgPoolBackprop")},n.prototype.avgPool3d=function(t,e){return O("avgPool3d")},n.prototype.avgPool3dBackprop=function(t,e,r){return O("avgPool3dBackprop")},n.prototype.maxPool3d=function(t,e){return O("maxPool3d")},n.prototype.maxPool3dBackprop=function(t,e,r,o){return O("maxPool3dBackprop")},n.prototype.reshape=function(t,e){return O("reshape")},n.prototype.cast=function(t,e){return O("cast")},n.prototype.tile=function(t,e){return O("tile")},n.prototype.pad=function(t,e,r){return O("pad")},n.prototype.transpose=function(t,e){return O("transpose")},n.prototype.gather=function(t,e,r){return O("gather")},n.prototype.gatherND=function(t,e){return O("gatherND")},n.prototype.scatterND=function(t,e,r){return O("scatterND")},n.prototype.batchToSpaceND=function(t,e,r){return O("batchToSpaceND")},n.prototype.spaceToBatchND=function(t,e,r){return O("spaceToBatchND")},n.prototype.resizeBilinear=function(t,e,r,o){return O("resizeBilinear")},n.prototype.resizeBilinearBackprop=function(t,e,r){return O("resizeBilinearBackprop")},n.prototype.resizeNearestNeighbor=function(t,e,r,o){return O("resizeNearestNeighbor")},n.prototype.resizeNearestNeighborBackprop=function(t,e,r){return O("resizeNearestNeighborBackprop")},n.prototype.batchNormalization=function(t,e,r,o,i,a){return O("batchNormalization")},n.prototype.localResponseNormalization4D=function(t,e,r,o,i){return O("localResponseNormalization4D")},n.prototype.LRNGrad=function(t,e,r,o,i,a,s){return O("LRNGrad")},n.prototype.multinomial=function(t,e,r,o){return O("multinomial")},n.prototype.oneHot=function(t,e,r,o){return O("oneHot")},n.prototype.cumsum=function(t,e,r,o){return O("cumsum")},n.prototype.nonMaxSuppression=function(t,e,r,o,i){return O("nonMaxSuppression")},n.prototype.fft=function(t){return O("fft")},n.prototype.ifft=function(t){return O("ifft")},n.prototype.complex=function(t,e){return O("complex")},n.prototype.real=function(t){return O("real")},n.prototype.imag=function(t){return O("imag")},n.prototype.cropAndResize=function(t,e,r,o,i,a){return O("cropAndResize")},n.prototype.depthToSpace=function(t,e,r){return O("depthToSpace")},n.prototype.split=function(t,e,r){return O("split")},n.prototype.sparseToDense=function(t,e,r,o){return O("sparseToDense")},n.prototype.diag=function(t){return O("diag")},n.prototype.fill=function(t,e,r){return O("fill")},n.prototype.onesLike=function(t){return O("onesLike")},n.prototype.zerosLike=function(t){return O("zerosLike")},n.prototype.linspace=function(t,e,r){return O("linspace")},n.prototype.dispose=function(){return O("dispose")},n}();function O(n){throw new Error("'"+n+"' not yet implemented or not found in the registry. Did you forget to import the kernel?")}function Kn(n,t){for(var e=n.length,r=[],o=0;o<e;o++){var i=e-1-o,a=n[i]||1;(t[t.length-1-o]||1)>1&&a===1&&r.unshift(i)}return r}function nt(n,t){for(var e=[],r=0;r<t.length;r++){var o=n[n.length-r-1],i=t.length-r-1,a=t[i];(o==null||o===1&&a>1)&&e.unshift(i)}return e}function Te(n,t){for(var e=[],r=Math.max(n.length,t.length),o=0;o<r;o++){var i=n[n.length-o-1];i==null&&(i=1);var a=t[t.length-o-1];if(a==null&&(a=1),i===1)e.unshift(a);else if(a===1)e.unshift(i);else{if(i!==a)throw Error("Operands could not be broadcast together with shapes "+n+" and "+t+".");e.unshift(i)}}return e}function Mo(n,t,e,r,o,i,a){a===void 0&&(a="channelsLast");var s,u=Wi(t),c=u[0],l=u[1];if(a==="channelsLast")s=[c,l,n[3],n[3]];else{if(a!=="channelsFirst")throw new Error("Unknown dataFormat "+a);s=[c,l,n[1],n[1]]}return Ir(n,s,e,r,o,i,!1,a)}function Bi(n,t,e,r,o,i,a){a===void 0&&(a="NDHWC");var s,u,c=Ss(t),l=c[0],f=c[1],h=c[2];if(a==="NDHWC")u="channelsLast",s=[l,f,h,n[4],n[4]];else{if(a!=="NCDHW")throw new Error("Unknown dataFormat "+a);u="channelsFirst",s=[l,f,h,n[1],n[1]]}return Li(n,s,e,r,o,!1,u,i)}function Ir(n,t,e,r,o,i,a,s){a===void 0&&(a=!1),s===void 0&&(s="channelsLast");var u=[-1,-1,-1,-1],c=u[0],l=u[1],f=u[2],h=u[3];if(s==="channelsLast")c=n[0],l=n[1],f=n[2],h=n[3];else{if(s!=="channelsFirst")throw new Error("Unknown dataFormat "+s);c=n[0],h=n[1],l=n[2],f=n[3]}var d,p=t[0],v=t[1],m=t[3],g=Wi(e),b=g[0],x=g[1],y=Wi(r),w=y[0],_=y[1],k=Xr(p,w),S=Xr(v,_),I=function(V,z,H,L,B,K,Y,ne){var oe,pe,we;if(typeof V=="number"){oe={top:V,bottom:V,left:V,right:V,type:V===0?"VALID":"NUMBER"};var _e=function(Ne,A,D,M,q){M==null&&(M=wh(Ne,A,D));var j=Ne[0],$=Ne[1],ee=Eo((j-A+2*M)/D+1,q);R(Ye(ee),function(){return"The output # of rows ("+ee+") must be an integer. Change the stride and/or zero pad parameters"});var Q=Eo(($-A+2*M)/D+1,q);return R(Ye(Q),function(){return"The output # of columns ("+Q+") must be an integer. Change the stride and/or zero pad parameters"}),[ee,Q]}([z,H],K,L,V,ne);pe=_e[0],we=_e[1]}else if(V==="same"){pe=Math.ceil(z/L),we=Math.ceil(H/B);var be=Math.max(0,(pe-1)*L+K-z),Re=Math.max(0,(we-1)*B+Y-H),Se=Math.floor(be/2),De=be-Se,We=Math.floor(Re/2);oe={top:Se,bottom:De,left:We,right:Re-We,type:"SAME"}}else{if(V!=="valid")throw Error("Unknown padding parameter: "+V);oe={top:0,bottom:0,left:0,right:0,type:"VALID"},pe=Math.ceil((z-K+1)/L),we=Math.ceil((H-Y+1)/B)}return{padInfo:oe,outHeight:pe,outWidth:we}}(o,l,f,b,x,k,S,i),E=I.padInfo,F=I.outHeight,N=I.outWidth,U=a?m*h:m;return s==="channelsFirst"?d=[c,U,F,N]:s==="channelsLast"&&(d=[c,F,N,U]),{batchSize:c,dataFormat:s,inHeight:l,inWidth:f,inChannels:h,outHeight:F,outWidth:N,outChannels:U,padInfo:E,strideHeight:b,strideWidth:x,filterHeight:p,filterWidth:v,effectiveFilterHeight:k,effectiveFilterWidth:S,dilationHeight:w,dilationWidth:_,inShape:n,outShape:d,filterShape:t}}function Li(n,t,e,r,o,i,a,s){i===void 0&&(i=!1),a===void 0&&(a="channelsLast");var u=[-1,-1,-1,-1,-1],c=u[0],l=u[1],f=u[2],h=u[3],d=u[4];if(a==="channelsLast")c=n[0],l=n[1],f=n[2],h=n[3],d=n[4];else{if(a!=="channelsFirst")throw new Error("Unknown dataFormat "+a);c=n[0],d=n[1],l=n[2],f=n[3],h=n[4]}var p,v=t[0],m=t[1],g=t[2],b=t[4],x=Ss(e),y=x[0],w=x[1],_=x[2],k=Ss(r),S=k[0],I=k[1],E=k[2],F=Xr(v,S),N=Xr(m,I),U=Xr(g,E),V=function(Y,ne,oe,pe,we,_e,be,Re,Se,De,We){var Ne,A,D,M;if(typeof Y=="number"){Ne={top:Y,bottom:Y,left:Y,right:Y,front:Y,back:Y,type:Y===0?"VALID":"NUMBER"};var q=function(ce,ve,ke,Pe,Ie,it){Ie==null&&(Ie=wh(ce,ve,Pe));var dt=ce[0],zt=ce[1],Ht=ce[2],In=Eo((dt-ve+2*Ie)/Pe+1,it);R(Ye(In),function(){return"The output # of depths ("+In+") must be an integer. Change the stride and/or zero pad parameters"});var kr=Eo((zt-ve+2*Ie)/Pe+1,it);R(Ye(kr),function(){return"The output # of rows ("+kr+") must be an integer. Change the stride and/or zero pad parameters"});var ct=Eo((Ht-ve+2*Ie)/Pe+1,it);return R(Ye(ct),function(){return"The output # of columns ("+ct+") must be an integer. Change the stride and/or zero pad parameters"}),[In,kr,ct,ke]}([ne,oe,pe,1],Re,1,we,Y,We);A=q[0],D=q[1],M=q[2]}else if(Y==="same"){A=Math.ceil(ne/we),D=Math.ceil(oe/_e),M=Math.ceil(pe/be);var j=(A-1)*we+Re-ne,$=(D-1)*_e+Se-oe,ee=(M-1)*be+De-pe,Q=Math.floor(j/2),Z=j-Q,J=Math.floor($/2),ue=$-J,te=Math.floor(ee/2);Ne={top:J,bottom:ue,left:te,right:ee-te,front:Q,back:Z,type:"SAME"}}else{if(Y!=="valid")throw Error("Unknown padding parameter: "+Y);Ne={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},A=Math.ceil((ne-Re+1)/we),D=Math.ceil((oe-Se+1)/_e),M=Math.ceil((pe-De+1)/be)}return{padInfo:Ne,outDepth:A,outHeight:D,outWidth:M}}(o,l,f,h,y,w,_,F,N,U,s),z=V.padInfo,H=V.outDepth,L=V.outHeight,B=V.outWidth,K=i?b*d:b;return a==="channelsFirst"?p=[c,K,H,L,B]:a==="channelsLast"&&(p=[c,H,L,B,K]),{batchSize:c,dataFormat:a,inDepth:l,inHeight:f,inWidth:h,inChannels:d,outDepth:H,outHeight:L,outWidth:B,outChannels:K,padInfo:z,strideDepth:y,strideHeight:w,strideWidth:_,filterDepth:v,filterHeight:m,filterWidth:g,effectiveFilterDepth:F,effectiveFilterHeight:N,effectiveFilterWidth:U,dilationDepth:S,dilationHeight:I,dilationWidth:E,inShape:n,outShape:p,filterShape:t}}function wh(n,t,e,r){r===void 0&&(r=1);var o=Xr(t,r);return Math.floor((n[0]*(e-1)-e+o)/2)}function Wi(n){return typeof n=="number"?[n,n,n]:n.length===2?[n[0],n[1],1]:n}function Ss(n){return typeof n=="number"?[n,n,n]:n}function Xr(n,t){return t<=1?n:n+(n-1)*(t-1)}function Eo(n,t){if(!t)return n;switch(t){case"round":return Math.round(n);case"ceil":return Math.ceil(n);case"floor":return Math.floor(n);default:throw new Error("Unknown roundingMode "+t)}}function oo(n){var t=Wi(n),e=t[0],r=t[1],o=t[2];return e===1&&r===1&&o===1}function Ft(n,t){return oo(n)||oo(t)}function fu(n){if(n==="NHWC")return"channelsLast";if(n==="NCHW")return"channelsFirst";throw new Error("Unknown dataFormat "+n)}function _h(n,t,e){if(t==="complex64"){if(n.dtype==="complex64")return n.clone();var r=Ge(n.shape),o=n.toFloat(),i=e.complex(o,r);return r.dispose(),o.dispose(),i}if(!jm(n.dtype,t))return P.makeTensorFromDataId(n.dataId,n.shape,t);if(n.dtype==="complex64"){var a=e.real(n);return i=a.cast(t),a.dispose(),i}if(t==="int32")return e.int(n);if(t==="bool"){var s=re(0,n.dtype);return i=e.notEqual(n,s),s.dispose(),i}throw new Error("Error in Cast: failed to cast "+n.dtype+" to "+t)}function ks(n,t){return P.makeTensorFromDataId(n.dataId,t,n.dtype)}function Ch(n,t,e){var r=(t-n)/(e-1),o=zo(e,"float32");o[0]=n;for(var i=1;i<o.length;i++)o[i]=o[i-1]+r;return Je(o,"float32")}function As(n,t){if(n.length!==t.length)throw new Error("Cannot merge real and imag arrays of different lengths. real:"+n.length+", imag: "+t.length+".");for(var e=new Float32Array(2*n.length),r=0;r<e.length;r+=2)e[r]=n[r/2],e[r+1]=t[r/2];return e}function Yc(n,t){return{real:n[2*t],imag:n[2*t+1]}}function xy(n,t,e,r){n[2*r]=t,n[2*r+1]=e}function by(n,t,e){var r=(e?2:-2)*Math.PI*(n/t);return{real:Math.cos(r),imag:Math.sin(r)}}function wy(n,t,e){var r=function(i,a,s){return function(u,c,l){for(var f=0,h=u.length,d=0,p=!1;f<h;){var v=l(c,u[d=f+(h-f>>>1)]);v>0?f=d+1:(h=d,p=!v)}return p?f:-f-1}(i,a,s||_y)}(n,t,e),o=r<0?-(r+1):r;n.splice(o,0,t)}function _y(n,t){return n>t?1:n<t?-1:0}function hu(n,t,e,r,o){return Eh(n,t,e,r,o,0).selectedIndices}function du(n,t,e,r,o,i){var a=Eh(n,t,e,r,o,i);return a.numValidOutputs.dispose(),{selectedIndices:a.selectedIndices,selectedScores:a.selectedScores}}function Eh(n,t,e,r,o,i,a,s){s===void 0&&(s=!1);for(var u=Array.from(t).map(function(y,w){return{score:y,boxIndex:w,suppressBeginIndex:0}}).filter(function(y){return y.score>o}).sort(Jc),c=i>0?-.5/i:0,l=[],f=[];l.length<e&&u.length>0;){var h=u.pop(),d=h.score,p=h.boxIndex,v=h.suppressBeginIndex;if(d<o)break;for(var m=!1,g=l.length-1;g>=v;--g){var b=Cy(n,p,l[g]);if(b>=r){m=!0;break}if(h.score=h.score*Ey(r,c,b),h.score<=o)break}h.suppressBeginIndex=l.length,m||(h.score===d?(l.push(p),f.push(h.score)):h.score>o&&wy(u,h,Jc))}var x=l.length;return s&&(l.fill(0,x),f.fill(0,x)),{selectedIndices:Je(l,"int32"),selectedScores:Je(f,"float32"),numValidOutputs:re(x,"int32")}}function Cy(n,t,e){var r=n.subarray(4*t,4*t+4),o=n.subarray(4*e,4*e+4),i=Math.min(r[0],r[2]),a=Math.min(r[1],r[3]),s=Math.max(r[0],r[2]),u=Math.max(r[1],r[3]),c=Math.min(o[0],o[2]),l=Math.min(o[1],o[3]),f=Math.max(o[0],o[2]),h=Math.max(o[1],o[3]),d=(s-i)*(u-a),p=(f-c)*(h-l);if(d<=0||p<=0)return 0;var v=Math.max(i,c),m=Math.max(a,l),g=Math.min(s,f),b=Math.min(u,h),x=Math.max(g-v,0)*Math.max(b-m,0);return x/(d+p-x)}function Ey(n,t,e){var r=Math.exp(t*e*e);return e<=n?r:0}function Jc(n,t){return n.score-t.score||n.score===t.score&&t.boxIndex-n.boxIndex}function Ih(n,t,e){var r=new Array(n.rank).fill(0),o=n.shape.slice();return t.map(function(i){o[e]=i;var a=n.slice(r,o);return r[e]+=i,a})}function Rh(n,t){for(var e=new Array(n.rank),r=0;r<e.length;r++)e[r]=n.shape[r]*t[r];var o=ye(e,n.dtype);for(r=0;r<o.values.length;++r){for(var i=o.indexToLoc(r),a=new Array(n.rank),s=0;s<a.length;s++)a[s]=i[s]%n.shape[s];var u=n.locToIndex(a);o.values[r]=n.values[u]}return o.toTensor()}function Sh(n,t,e,r,o){for(var i=t[t.length-1],a=[n.length/i,i],s=a[0],u=a[1],c=No(e,s*r),l=No("int32",s*r),f=0;f<s;f++){for(var h=f*u,d=n.subarray(h,h+u),p=[],v=0;v<d.length;v++)p.push({value:d[v],index:v});p.sort(function(y,w){return w.value-y.value});var m=f*r,g=c.subarray(m,m+r),b=l.subarray(m,m+r);for(v=0;v<r;v++)g[v]=p[v].value,b[v]=p[v].index}var x=t.slice();return x[x.length-1]=r,[ht(c,x,e),ht(l,x,"int32")]}function pu(n,t){for(var e=[],r=0;r<t.length;r++)t[r]&&e.push(r);var o=ye(n,"int32"),i=ye([e.length,n.length],"int32");for(r=0;r<e.length;r++){var a=o.indexToLoc(e[r]),s=r*n.length;i.values.set(a,s)}return i.toTensor()}var Iy=function(n,t){this.outputShape=[],this.outputShape=n,this.variableNames=t.map(function(o,i){return"T"+i});var e=[];this.variableNames.forEach(function(o){e.push("float v"+o+" = get"+o+"AtOutCoords();")});var r=this.variableNames.map(function(o){return"v"+o}).join(" + ");this.userCode=`
      void main() {
        `+e.join(`
        `)+`

        float result = `+r+`;
        setOutput(result);
      }
    `},Ry=function(n,t){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n,this.variableNames=t.map(function(o,i){return"T"+i});var e=[];this.variableNames.forEach(function(o){e.push("vec4 v"+o+" = get"+o+"AtOutCoords();")});var r=this.variableNames.map(function(o){return"v"+o}).join(" + ");this.userCode=`
      void main() {
        `+e.join(`
        `)+`

        vec4 result = `+r+`;
        setOutput(result);
      }
    `},Sy=function(n,t,e){this.variableNames=["A"];var r=n.windowSize,o=n.batchSize,i=n.inSize,a=Math.ceil(i/r);e||this.variableNames.push("bestIndicesA"),this.outputShape=[o,a];var s=t==="max"?">":"<",u=e?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+r+`;

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < `+r+`; i++) {
          int inIdx = `+u+`;
          float candidate = getA(batch, inIdx);
          if (candidate `+s+` bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `};function kh(n,t){return["x","y","z","w","u","v"].slice(0,t).map(function(e){return n+"."+e})}function At(n,t){return t===1?[n]:kh(n,t)}function gt(){var n,t,e,r,o,i,a,s,u,c;return G().getNumber("WEBGL_VERSION")===2?(n="#version 300 es",t="in",e="out",r="in",o="texture",i="outputColor",a="out vec4 outputColor;",s=`
      bool isnan_custom(float val) {
        return (val > 0.0 || val < 0.0) ? false : val != 0.0;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `,u="",c=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(n="",t="attribute",e="varying",r="varying",o="texture2D",i="gl_FragColor",a="",s=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,u=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,c=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:n,attribute:t,varyingVs:e,varyingFs:r,texture2D:o,output:i,defineOutput:a,defineSpecialNaN:s,defineSpecialInf:u,defineRound:c}}function mr(n,t,e){e===void 0&&(e="index");var r=gn(t);return r.map(function(o,i){return"int "+n[i]+" = "+e+" / "+o+"; "+(i===r.length-1?"int "+n[i+1]+" = "+e+" - "+n[i]+" * "+o:"index -= "+n[i]+" * "+o)+";"}).join("")}function vu(n){var t=gn(n).map(function(e){return e.toString()});return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * `+t[0]+" + coords.y * "+t[1]+` + coords.z;
  }
`}var Ah=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;function ky(n,t,e,r){var o=[];n.forEach(function(d){var p=le(d.shapeInfo.logicalShape);d.shapeInfo.isUniform?o.push("uniform float "+d.name+(p>1?"["+p+"]":"")+";"):(o.push("uniform sampler2D "+d.name+";"),o.push("uniform int offset"+d.name+";"))});var i,a,s=o.join(`
`),u=n.map(function(d){return function(p,v,m){m===void 0&&(m=!1);var g="";g+=m?Dh(p):Lr(p);var b=p.shapeInfo.logicalShape,x=v.logicalShape;return b.length<=x.length&&(g+=m?function(y,w){var _,k=y.name,S=k.charAt(0).toUpperCase()+k.slice(1),I="get"+S+"AtOutCoords",E=y.shapeInfo.logicalShape.length,F=w.logicalShape.length,N=Kn(y.shapeInfo.logicalShape,w.logicalShape),U=He(F),V=F-E,z=["x","y","z","w","u","v"];_=E===0?"":F<2&&N.length>=1?"coords = 0;":N.map(function(oe){return"coords."+z[oe+V]+" = 0;"}).join(`
`);var H="";H=F<2&&E>0?"coords":y.shapeInfo.logicalShape.map(function(oe,pe){return"coords."+z[pe+V]}).join(", ");var L="return outputValue;",B=le(y.shapeInfo.logicalShape)===1,K=le(w.logicalShape)===1;if(E!==1||B||K){if(B&&!K)L=F===1?`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:`
        return vec4(outputValue.x);
      `;else if(N.length){var Y=E-2,ne=E-1;N.indexOf(Y)>-1&&N.indexOf(ne)>-1?L="return vec4(outputValue.x);":N.indexOf(Y)>-1?L="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":N.indexOf(ne)>-1&&(L="return vec4(outputValue.xx, outputValue.zz);")}}else L=`
      return vec4(outputValue.xy, outputValue.xy);
    `;return`
    vec4 `+I+`() {
      `+U+` coords = getOutputCoords();
      `+_+`
      vec4 outputValue = get`+S+"("+H+`);
      `+L+`
    }
  `}(p,v):function(y,w){var _=y.name,k=_.charAt(0).toUpperCase()+_.slice(1),S="get"+k+"AtOutCoords",I=w.texShape,E=y.shapeInfo.texShape,F=y.shapeInfo.logicalShape.length,N=w.logicalShape.length;if(!y.shapeInfo.isUniform&&F===N&&y.shapeInfo.flatOffset==null&&st(E,I))return`
      float `+S+`() {
        return sampleTexture(`+_+`, resultUV);
      }
    `;var U,V=He(N),z=Kn(y.shapeInfo.logicalShape,w.logicalShape),H=N-F,L=["x","y","z","w","u","v"];U=F===0?"":N<2&&z.length>=1?"coords = 0;":z.map(function(K){return"coords."+L[K+H]+" = 0;"}).join(`
`);var B="";return B=N<2&&F>0?"coords":y.shapeInfo.logicalShape.map(function(K,Y){return"coords."+L[Y+H]}).join(", "),`
    float `+S+`() {
      `+V+` coords = getOutputCoords();
      `+U+`
      return get`+k+"("+B+`);
    }
  `}(p,v)),g}(d,t,r)}).join(`
`),c=t.texShape,l=gt(),f=function(d){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return `+d.texture2D+`(textureSampler, uv).r;
    }
  `}(l),h=function(d){return d.version+`
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    `+d.varyingFs+` vec2 resultUV;
    `+d.defineOutput+`
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    `+d.defineSpecialNaN+`
    `+d.defineSpecialInf+`
    `+d.defineRound+`

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    `+Ay+`
    `+Dy+`
    `+Ty+`
  `}(l);return t.isPacked?(i=function(d,p){switch(d.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(y,w){var _=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)];return _[0]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * `+_[1]+`.0);
      }
    `:_[1]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * `+_[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+_[0]+", "+_[1]+`));
      return 2 * (resTexRC.x * `+_[1]+` + resTexRC.y);
    }
  `}(0,p);case 2:return function(y,w){var _=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)];if(st(y,w))return`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(`+_[0]+", "+_[1]+`));
      }
    `;var k=Math.ceil(y[1]/2);return`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+_[0]+", "+_[1]+`));

      int index = resTexRC.x * `+_[1]+` + resTexRC.y;
      int r = 2 * (index / `+k+`);
      int c = imod(index, `+k+`) * 2;

      return ivec2(r, c);
    }
  `}(d,p);case 3:return v=d,m=p,g=[Math.ceil(m[0]/2),Math.ceil(m[1]/2)],b=Math.ceil(v[2]/2),x=b*Math.ceil(v[1]/2),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+g[0]+", "+g[1]+`));
      int index = resTexRC.x * `+g[1]+` + resTexRC.y;

      int b = index / `+x+`;
      index -= b * `+x+`;

      int r = 2 * (index / `+b+`);
      int c = imod(index, `+b+`) * 2;

      return ivec3(b, r, c);
    }
  `;default:return function(y,w){for(var _=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)],k=Math.ceil(y[y.length-1]/2),S=k*Math.ceil(y[y.length-2]/2),I=S,E="",F="b, r, c",N=2;N<y.length-1;N++)I*=y[y.length-N-1],E=`
      int b`+N+" = index / "+I+`;
      index -= b`+N+" * "+I+`;
    `+E,F="b"+N+", "+F;return`
    ivec`+y.length+` getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+_[0]+", "+_[1]+`));
      int index = resTexRC.x * `+_[1]+` + resTexRC.y;

      `+E+`

      int b = index / `+S+`;
      index -= b * `+S+`;

      int r = 2 * (index / `+k+`);
      int c = imod(index, `+k+`) * 2;

      return ivec`+y.length+"("+F+`);
    }
  `}(d,p)}var v,m,g,b,x}(t.logicalShape,c),a=function(d){return`
    void setOutput(vec4 val) {
      `+d.output+` = val;
    }
  `}(l)):(i=function(d,p){switch(d.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(g,b){return b[0]===1?`
      int getOutputCoords() {
        return int(resultUV.x * `+b[1]+`.0);
      }
    `:b[1]===1?`
      int getOutputCoords() {
        return int(resultUV.y * `+b[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+b[0]+", "+b[1]+`));
      return resTexRC.x * `+b[1]+` + resTexRC.y;
    }
  `}(0,p);case 2:return function(g,b){return st(g,b)?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(`+b[0]+", "+b[1]+`));
      }
    `:g[1]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+b[0]+", "+b[1]+`));
        int index = resTexRC.x * `+b[1]+` + resTexRC.y;
        return ivec2(index, 0);
      }
    `:g[0]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+b[0]+", "+b[1]+`));
        int index = resTexRC.x * `+b[1]+` + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+b[0]+", "+b[1]+`));
      int index = resTexRC.x * `+b[1]+` + resTexRC.y;
      int r = index / `+g[1]+`;
      int c = index - r * `+g[1]+`;
      return ivec2(r, c);
    }
  `}(d,p);case 3:return v=p,m=mr(["r","c","d"],d),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+v[0]+", "+v[1]+`));
      int index = resTexRC.x * `+v[1]+` + resTexRC.y;
      `+m+`
      return ivec3(r, c, d);
    }
  `;case 4:return function(g,b){var x=mr(["r","c","d","d2"],g);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+b[0]+", "+b[1]+`));
      int index = resTexRC.x * `+b[1]+` + resTexRC.y;
      `+x+`
      return ivec4(r, c, d, d2);
    }
  `}(d,p);case 5:return function(g,b){var x=mr(["r","c","d","d2","d3"],g);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(`+b[0]+`,
                             `+b[1]+`));

      int index = resTexRC.x * `+b[1]+` + resTexRC.y;

      `+x+`

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}(d,p);case 6:return function(g,b){var x=mr(["r","c","d","d2","d3","d4"],g);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+b[0]+", "+b[1]+`));
      int index = resTexRC.x * `+b[1]+` + resTexRC.y;

      `+x+`

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}(d,p);default:throw new Error(d.length+"-D output sampling is not yet supported")}var v,m}(t.logicalShape,c),a=function(d){return`
    void setOutput(float val) {
      `+d.output+` = vec4(val, 0, 0, 0);
    }
  `}(l)),r&&(h+=Ny),[h,f,a,s,i,u,e].join(`
`)}function Lr(n){var t=n.shapeInfo.logicalShape;switch(t.length){case 0:return function(e){var r=e.name,o="get"+r.charAt(0).toUpperCase()+r.slice(1);if(e.shapeInfo.isUniform)return"float "+o+"() {return "+r+";}";var i=e.shapeInfo.texShape,a=i[0],s=i[1];if(a===1&&s===1)return`
      float `+o+`() {
        return sampleTexture(`+r+`, halfCR);
      }
    `;var u=e.shapeInfo.texShape,c=u[0],l=u[1],f=lr(r);return`
    float `+o+`() {
      vec2 uv = uvFromFlat(`+c+", "+l+", "+f+`);
      return sampleTexture(`+r+`, uv);
    }
  `}(n);case 1:return function(e){var r=e.name,o="get"+r.charAt(0).toUpperCase()+r.slice(1);if(e.shapeInfo.isUniform)return`
      float `+o+`(int index) {
        `+Tr(e)+`
      }
    `;var i=e.shapeInfo.texShape,a=i[0],s=i[1];if(s===1&&a===1)return`
      float `+o+`(int index) {
        return sampleTexture(`+r+`, halfCR);
      }
    `;var u=lr(r);return s===1?`
      float `+o+`(int index) {
        vec2 uv = vec2(0.5, (float(index + `+u+") + 0.5) / "+a+`.0);
        return sampleTexture(`+r+`, uv);
      }
    `:a===1?`
      float `+o+`(int index) {
        vec2 uv = vec2((float(index + `+u+") + 0.5) / "+s+`.0, 0.5);
        return sampleTexture(`+r+`, uv);
      }
    `:`
    float `+o+`(int index) {
      vec2 uv = uvFromFlat(`+a+", "+s+", index + "+u+`);
      return sampleTexture(`+r+`, uv);
    }
  `}(n);case 2:return function(e){var r=e.shapeInfo.logicalShape,o=e.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),a=e.shapeInfo.texShape;if(a!=null&&st(r,a)){var s=a[0],u=a[1];return`
    float `+i+`(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(`+u+".0, "+s+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `}var c=vr(r),l=c.newShape,f=c.keptDims,h=l;if(h.length<r.length){var d=Wr(e,h);return`
      `+Lr(d)+`
      float `+i+`(int row, int col) {
        return `+i+"("+Ur(["row","col"],f)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+i+`(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(`+r[1]+`, 1)));
        `+Tr(e)+`
      }
    `;var p=a[0],v=a[1],m=lr(o);return v===1?`
    float `+i+`(int row, int col) {
      float index = dot(vec3(row, col, `+m+"), vec3("+r[1]+`, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / `+p+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `:p===1?`
    float `+i+`(int row, int col) {
      float index = dot(vec3(row, col, `+m+"), vec3("+r[1]+`, 1, 1));
      vec2 uv = vec2((index + 0.5) / `+v+`.0, 0.5);
      return sampleTexture(`+o+`, uv);
    }
  `:`
  float `+i+`(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * `+r[1]+" + col + "+m+`;
    vec2 uv = uvFromFlat(`+p+", "+v+`, index);
    return sampleTexture(`+o+`, uv);
  }
`}(n);case 3:return function(e){var r=e.shapeInfo.logicalShape,o=e.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),a=r[1]*r[2],s=r[2],u=vr(r),c=u.newShape,l=u.keptDims,f=c;if(f.length<r.length){var h=Wr(e,f);return`
        `+Lr(h)+`
        float `+i+`(int row, int col, int depth) {
          return `+i+"("+Ur(["row","col","depth"],l)+`);
        }
      `}if(e.shapeInfo.isUniform)return`
      float `+i+`(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(`+a+", "+s+`, 1)));
        `+Tr(e)+`
      }
    `;var d=e.shapeInfo.texShape,p=d[0],v=d[1],m=e.shapeInfo.flatOffset;if(v===a&&m==null)return`
        float `+i+`(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(`+s+`, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(`+v+".0, "+p+`.0);
          return sampleTexture(`+o+`, uv);
        }
      `;if(v===s&&m==null)return`
    float `+i+`(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(`+r[1]+`, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+v+".0, "+p+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `;var g=lr(o);return`
      float `+i+`(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * `+a+" + col * "+s+" + depth + "+g+`;
        vec2 uv = uvFromFlat(`+p+", "+v+`, index);
        return sampleTexture(`+o+`, uv);
      }
  `}(n);case 4:return function(e){var r=e.shapeInfo.logicalShape,o=e.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),a=r[3],s=r[2]*a,u=r[1]*s,c=vr(r),l=c.newShape,f=c.keptDims;if(l.length<r.length){var h=Wr(e,l);return`
      `+Lr(h)+`
      float `+i+`(int row, int col, int depth, int depth2) {
        return `+i+"("+Ur(["row","col","depth","depth2"],f)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+i+`(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(`+u+", "+s+", "+a+`, 1)));
        `+Tr(e)+`
      }
    `;var d=e.shapeInfo.flatOffset,p=e.shapeInfo.texShape,v=p[0],m=p[1];if(m===u&&d==null)return`
      float `+i+`(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(`+s+", "+a+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+m+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(m===a&&d==null)return`
      float `+i+`(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(`+r[1]*r[2]+", "+r[2]+`, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+m+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var g=lr(o);return`
    float `+i+`(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+u+" + col * "+s+` +
          depth * `+a+` + depth2;
      vec2 uv = uvFromFlat(`+v+", "+m+", index + "+g+`);
      return sampleTexture(`+o+`, uv);
    }
  `}(n);case 5:return function(e){var r=e.shapeInfo.logicalShape,o=e.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),a=r[4],s=r[3]*a,u=r[2]*s,c=r[1]*u,l=vr(r),f=l.newShape,h=l.keptDims;if(f.length<r.length){var d=Wr(e,f);return`
      `+Lr(d)+`
      float `+i+`(int row, int col, int depth, int depth2, int depth3) {
        return `+i+"("+Ur(["row","col","depth","depth2","depth3"],h)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+i+`(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(`+c+", "+u+", "+s+", "+a+`)) +
          depth3;
        `+Tr(e)+`
      }
    `;var p=e.shapeInfo.flatOffset,v=e.shapeInfo.texShape,m=v[0],g=v[1];if(g===c&&p==null)return`
      float `+i+`(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(`+u+", "+s+", "+a+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+g+".0, "+m+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(g===a&&p==null)return`
      float `+i+`(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(`+r[1]*r[2]*r[3]+`,
               `+r[2]*r[3]+", "+r[3]+`, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+g+".0, "+m+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var b=lr(o);return`
    float `+i+`(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+c+" + col * "+u+" + depth * "+s+` +
          depth2 * `+a+" + depth3 + "+b+`;
      vec2 uv = uvFromFlat(`+m+", "+g+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `}(n);case 6:return function(e){var r=e.shapeInfo.logicalShape,o=e.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),a=vr(r),s=a.newShape,u=a.keptDims;if(s.length<r.length){var c=Wr(e,s);return`
      `+Lr(c)+`
      float `+i+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return `+i+"("+Ur(["row","col","depth","depth2","depth3","depth4"],u)+`);
      }
    `}var l=r[5],f=r[4]*l,h=r[3]*f,d=r[2]*h,p=r[1]*d;if(e.shapeInfo.isUniform)return`
      float `+i+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(`+p+", "+d+", "+h+", "+f+`)) +
          dot(
            vec2(depth3, depth4),
            vec2(`+l+`, 1)));
        `+Tr(e)+`
      }
    `;var v=e.shapeInfo.flatOffset,m=e.shapeInfo.texShape,g=m[0],b=m[1];if(b===p&&v==null)return`
      float `+i+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(`+d+", "+h+", "+f+", "+l+`)) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+b+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(b===l&&v==null)return`
      float `+i+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(`+r[1]*r[2]*r[3]*r[4]+`,
               `+r[2]*r[3]*r[4]+`,
               `+r[3]*r[4]+`,
               `+r[4]+`)) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+b+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var x=lr(o);return`
    float `+i+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+p+" + col * "+d+" + depth * "+h+` +
          depth2 * `+f+" + depth3 * "+l+" + depth4 + "+x+`;
      vec2 uv = uvFromFlat(`+g+", "+b+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `}(n);default:throw new Error(t.length+"-D input sampling is not yet supported")}}function Dh(n){var t,e,r;switch(n.shapeInfo.logicalShape.length){case 0:return t=n.name,e="get"+t.charAt(0).toUpperCase()+t.slice(1),r=gt(),`
    vec4 `+e+`() {
      return `+r.texture2D+"("+t+`, halfCR);
    }
  `;case 1:return function(o){var i=o.name,a="get"+i.charAt(0).toUpperCase()+i.slice(1),s=o.shapeInfo.texShape,u=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)],c=gt();return`
    vec4 `+a+`(int index) {
      vec2 uv = packedUVfrom1D(
        `+u[0]+", "+u[1]+`, index);
      return `+c.texture2D+"("+i+`, uv);
    }
  `}(n);case 2:return function(o){var i=o.shapeInfo.logicalShape,a=o.name,s="get"+a.charAt(0).toUpperCase()+a.slice(1),u=o.shapeInfo.texShape,c=u[0],l=u[1],f=gt();if(u!=null&&st(i,u))return`
      vec4 `+s+`(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(`+l+".0, "+c+`.0);

        return `+f.texture2D+"("+a+`, uv);
      }
    `;var h=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)],d=Math.ceil(i[1]/2);return`
    vec4 `+s+`(int row, int col) {
      vec2 uv = packedUVfrom2D(`+d+", "+h[0]+", "+h[1]+`, row, col);
      return `+f.texture2D+"("+a+`, uv);
    }
  `}(n);case 3:return function(o){var i=o.shapeInfo.logicalShape,a=o.name,s="get"+a.charAt(0).toUpperCase()+a.slice(1),u=o.shapeInfo.texShape,c=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)];if(i[0]===1){var l=i.slice(1),f=Wr(o,l);return`
        `+Dh(f)+`
        vec4 `+s+`(int b, int row, int col) {
          return `+s+"("+Ur(["b","row","col"],[1,2])+`);
        }
      `}var h=c[0],d=c[1],p=Math.ceil(i[2]/2),v=p*Math.ceil(i[1]/2),m=gt();return`
    vec4 `+s+`(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        `+h+", "+d+", "+v+", "+p+`, b, row, col);
      return `+m.texture2D+"("+a+`, uv);
    }
  `}(n);default:return function(o){for(var i=o.shapeInfo.logicalShape,a=i.length,s=o.name,u="get"+s.charAt(0).toUpperCase()+s.slice(1),c=o.shapeInfo.texShape,l=[Math.ceil(c[0]/2),Math.ceil(c[1]/2)],f=l[0],h=l[1],d=Math.ceil(i[a-1]/2),p=d*Math.ceil(i[a-2]/2),v="int b, int row, int col",m="b * "+p+" + (row / 2) * "+d+" + (col / 2)",g=2;g<a-1;g++)v="int b"+g+", "+v,p*=i[a-g-1],m="b"+g+" * "+p+" + "+m;var b=gt();return`
    vec4 `+u+"("+v+`) {
      int index = `+m+`;
      int texR = index / `+h+`;
      int texC = index - texR * `+h+`;
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+h+", "+f+`);
      return `+b.texture2D+"("+s+`, uv);
    }
  `}(n)}}var Ay=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,Dy=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,Ty=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,Ny=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function lr(n){return"offset"+n}function Tr(n){var t=n.name,e=le(n.shapeInfo.logicalShape);return e<2?"return "+t+";":`
    for (int i = 0; i < `+e+`; i++) {
      if (i == index) {
        return `+t+`[i];
      }
    }
  `}function He(n){if(n<=1)return"int";if(n===2)return"ivec2";if(n===3)return"ivec3";if(n===4)return"ivec4";if(n===5)return"ivec5";if(n===6)return"ivec6";throw Error("GPU for rank "+n+" is not yet supported")}function Wr(n,t){var e=JSON.parse(JSON.stringify(n));return e.shapeInfo.logicalShape=t,e}function Ur(n,t){return t.map(function(e){return n[e]}).join(", ")}var Fy=function(n,t,e,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,R(n.length>2,function(){return"Packed arg"+(e.charAt(0).toUpperCase()+e.slice(1))+" supports only inputs with rank above 2."});var o=n[n.length-1],i=Math.ceil(o/t);this.outputShape=n.slice(0,-1),i>1&&this.outputShape.push(i),r||this.variableNames.push("bestIndicesA");var a,s,u=this.outputShape,c=u.length,l=He(c),f=At("coords",c);if(i===1){var h=He(s=c+1);a=`
        `+h+" sourceLocR = "+h+"("+f.join()+`, 0);
        ++`+f[c-1]+`;
        `+h+" sourceLocG = "+h+"("+f.join()+`, 0);
        ++`+f[c-2]+`;
        `+h+" sourceLocA = "+h+"("+f.join()+`, 0);
        --`+f[c-1]+`;
        `+h+" sourceLocB = "+h+"("+f.join()+`, 0);
        --`+f[c-2]+";"}else s=c,a=`
        `+l+` sourceLocR = coords;
        ++`+f[c-1]+`;
        `+l+` sourceLocG = coords;
        ++`+f[c-2]+`;
        `+l+` sourceLocA = coords;
        --`+f[c-1]+`;
        `+l+` sourceLocB = coords;
        --`+f[c-2]+";";var d=["x","y","z","w","u","v"].slice(0,s),p="."+d[s-1],v=d.map(function(S){return"int "+S}),m=At("sourceLocR",s-1).concat("inIdx.r"),g=At("sourceLocG",s-1).concat("inIdx.g"),b=At("sourceLocB",s-1).concat("inIdx.b"),x=At("sourceLocA",s-1).concat("inIdx.a"),y=e==="max"?"greaterThan":"lessThan",w=r?"":`
          inIdx = round(vec4(getBestIndicesAChannel(`+m.join()+`),
                             getBestIndicesAChannel(`+g.join()+`),
                             getBestIndicesAChannel(`+b.join()+`),
                             getBestIndicesAChannel(`+x.join()+")));",_=`vec4(
            getAChannel(`+m.join()+`),
            hasNextCol ? getAChannel(`+g.join()+`) : 0.,
            hasNextRow ? getAChannel(`+b.join()+`) : 0.,
            hasNextRow && hasNextCol ? getAChannel(`+x.join()+") : 0.)",k=r?"":`
      float getBestIndicesAChannel(`+v.join()+`) {
        return getChannel(getBestIndicesA(`+d.join()+`),
                                          vec2(`+d.slice(-2).join()+`));
      }`;this.userCode=`
      float getAChannel(`+v.join()+`) {
        return getChannel(getA(`+d.join()+`),
                               vec2(`+d.slice(-2).join()+`));
      }
      `+k+`
      void main() {
        `+l+` coords = getOutputCoords();
        bool hasNextCol = `+f[c-1]+" < "+(u[c-1]-1)+`;
        bool hasNextRow = `+f[c-2]+" < "+(u[c-2]-1)+`;
        `+a+`
        ivec4 srcIdx = ivec4(sourceLocR`+p+", sourceLocG"+p+`,
          sourceLocB`+p+", sourceLocA"+p+") * "+t+`;
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = `+_+`;

        for (int i = 0; i < `+t+`; i++) {
          inIdx = srcIdx;
          `+w+`
          vec4 candidate = `+_+`;
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(`+y+`(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `},Py=function(n){this.variableNames=["dy"],this.outputShape=n.inShape;var t=n.filterHeight,e=n.filterWidth,r=n.strideHeight,o=n.strideWidth,i=n.dilationHeight,a=n.dilationWidth,s=n.effectiveFilterHeight,u=n.effectiveFilterWidth,c=s-1-n.padInfo.top,l=u-1-n.padInfo.left,f=1/(t*e);this.userCode=`
      const ivec2 pads = ivec2(`+c+", "+l+`);
      const float avgMultiplier = float(`+f+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+s+`;
            wR += `+i+`) {
          float dyR = float(dyRCorner + wR) / `+r+`.0;

          if (dyR < 0.0 || dyR >= `+n.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+u+`;
            wC+= `+a+`) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+n.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `},My=function(n){this.variableNames=["dy"],this.outputShape=n.inShape;var t=n.filterDepth,e=n.filterHeight,r=n.filterWidth,o=n.strideDepth,i=n.strideHeight,a=n.strideWidth,s=n.dilationDepth,u=n.dilationHeight,c=n.dilationWidth,l=n.effectiveFilterDepth,f=n.effectiveFilterHeight,h=n.effectiveFilterWidth,d=l-1-n.padInfo.front,p=f-1-n.padInfo.top,v=h-1-n.padInfo.left,m=1/(t*e*r);this.userCode=`
      const ivec3 pads = ivec3(`+d+", "+p+", "+v+`);
      const float avgMultiplier = float(`+m+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          float dyD = float(dyDCorner + wD) / `+o+`.0;

          if (dyD < 0.0 || dyD >= `+n.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+f+`;
              wR += `+u+`) {
            float dyR = float(dyRCorner + wR) / `+i+`.0;

            if (dyR < 0.0 || dyR >= `+n.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+h+`;
                wC += `+c+`) {
              float dyC = float(dyCCorner + wC) / `+a+`.0;

              if (dyC < 0.0 || dyC >= `+n.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `},Oy=function(n,t,e,r,o,i){this.outputShape=[],this.variableNames=["x","mean","variance"],Te(n,t),Te(n,e);var a="0.0";r!=null&&(Te(n,r),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");var s="1.0";o!=null&&(Te(n,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=n,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = `+a+`;
        float scale = `+s+`;
        float inv = scale * inversesqrt(variance + float(`+i+`));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `},By=function(n,t,e,r,o,i){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],Te(n,t),Te(n,e);var a="vec4(0.0)";r!=null&&(Te(n,r),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");var s="vec4(1.0)";o!=null&&(Te(n,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=n,this.userCode=`
      void main() {
        vec4 offset = `+a+`;
        vec4 scale = `+s+`;

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(`+i+`));

        setOutput((x - mean) * inv + offset);
      }
    `},Ly="return areal * breal - aimag * bimag;",Wy="return areal * bimag + aimag * breal;",Qc=function(n,t,e){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=Te(t,e),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        `+n+`
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `},Ua="return a + b;",Va="return a - b;",Zc="return a * b;",Th="return (a < 0.) ? b * a : a;",Xe=function(n,t,e){this.variableNames=["A","B"],this.outputShape=Te(t,e),this.userCode=`
      float binaryOperation(float a, float b) {
        `+n+`
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `},Nh=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`,kn=function(n,t,e,r){r===void 0&&(r=!1),this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=Te(t,e);var o=this.outputShape.length,i="";if(r)if(o===0||le(this.outputShape)===1)i=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(i=`
          `+He(o)+` coords = getOutputCoords();
        `,o===1)i+=`
            result.y = (coords + 1) >= `+this.outputShape[0]+` ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{var a=At("coords",o);i+=`
            bool nextRowOutOfBounds =
              (`+a[o-2]+" + 1) >= "+this.outputShape[o-2]+`;
            bool nextColOutOfBounds =
              (`+a[o-1]+" + 1) >= "+this.outputShape[o-1]+`;
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        `+n+`
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        `+i+`

        setOutput(result);
      }
    `},Uy=function(){function n(t){this.variableNames=["A"],this.outputShape=t,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}return n.prototype.getCustomSetupFunc=function(t,e){var r=this;return function(o,i){r.minLoc==null&&(r.minLoc=o.getUniformLocationNoThrow(i,"minVal"),r.maxLoc=o.getUniformLocationNoThrow(i,"maxVal")),o.gl.uniform1f(r.minLoc,t),o.gl.uniform1f(r.maxLoc,e)}},n}(),Vy=function(){function n(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}return n.prototype.getCustomSetupFunc=function(t,e){var r=this;return function(o,i){r.minLoc==null&&(r.minLoc=o.getUniformLocationNoThrow(i,"minVal"),r.maxLoc=o.getUniformLocationNoThrow(i,"maxVal")),o.gl.uniform1f(r.minLoc,t),o.gl.uniform1f(r.maxLoc,e)}},n}(),zy=function(n){this.variableNames=["real","imag"],this.outputShape=n,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `},Hy=function(n){this.outputShape=[],this.outputShape=ro(n,1),this.variableNames=n.map(function(s,u){return"T"+u});var t=new Array(n.length-1);t[0]=n[0][1];for(var e=1;e<t.length;e++)t[e]=t[e-1]+n[e][1];var r=["if (yC < "+t[0]+") setOutput(getT0(yR, yC));"];for(e=1;e<t.length;e++){var o=t[e-1];r.push("else if (yC < "+t[e]+") setOutput(getT"+e+"(yR, yC-"+o+"));")}var i=t.length,a=t[t.length-1];r.push("else setOutput(getT"+i+"(yR, yC-"+a+"));"),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        `+r.join(`
        `)+`
      }
    `},Gy=function(n,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=ro(n,t);var e=this.outputShape,r=e.length,o=He(r),i=At("coords",r),a=["x","y","z","w","u","v"].slice(0,r);this.variableNames=n.map(function(m,g){return"T"+g});var s=new Array(n.length-1);s[0]=n[0][t];for(var u=1;u<s.length;u++)s[u]=s[u-1]+n[u][t];var c=a[t],l=a.slice(-2),f=a.join(),h="if ("+c+" < "+s[0]+`) {
        return getChannel(
            getT0(`+f+"), vec2("+l.join()+`));
        }`;for(u=1;u<s.length;u++){var d=s[u-1];h+=`
        if (`+c+" < "+s[u]+"  && "+c+" >= "+s[u-1]+`) {
          return getChannel(
            getT`+u+"("+oi(a,c,d)+`),
            vec2(`+oi(l,c,d)+`));
        }`}var p=s.length,v=s[s.length-1];h+=`
        return getChannel(
          getT`+p+"("+oi(a,c,v)+`),
          vec2(`+oi(l,c,v)+"));",this.userCode=`
      float getValue(`+a.map(function(m){return"int "+m})+`) {
        `+h+`
      }

      void main() {
        `+o+` coords = getOutputCoords();
        vec4 result = vec4(getValue(`+i+`), 0., 0., 0.);

        `+i[r-1]+" = "+i[r-1]+` + 1;
        if (`+i[r-1]+" < "+e[r-1]+`) {
          result.g = getValue(`+i+`);
        }

        `+i[r-2]+" = "+i[r-2]+` + 1;
        if (`+i[r-2]+" < "+e[r-2]+`) {
          result.a = getValue(`+i+`);
        }

        `+i[r-1]+" = "+i[r-1]+` - 1;
        if (`+i[r-2]+" < "+e[r-2]+` &&
            `+i[r-1]+" < "+e[r-1]+`) {
          result.b = getValue(`+i+`);
        }
        setOutput(result);
      }
    `};function oi(n,t,e){var r=n.indexOf(t);return n.map(function(o,i){return i===r?o+" - "+e:o}).join()}var jy=function(n){this.variableNames=["x","dy"],this.outputShape=n.filterShape;var t=n.strideHeight,e=n.strideWidth,r=n.padInfo.top,o=n.padInfo.left,i=n.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < `+n.batchSize+`; b++) {
          for (int yR = 0; yR < `+n.outHeight+`; yR++) {
            int xR = wR + yR * `+t+" - "+r+`;

            if (xR < 0 || xR >= `+n.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+n.outWidth+`; yC++) {
              int xC = wC + yC * `+e+" - "+o+`;

              if (xC < 0 || xC >= `+n.inWidth+`) {
                continue;
              }

              if (`+i+`) {
                float dyValue = getDy(b, yR, yC, d2);
                float xValue = getX(b, xR, xC, d1);
                dotProd += (xValue * dyValue);
              } else {
                float dyValue = getDy(b, d2, yR, yC);
                float xValue = getX(b, d1, xR, xC);
                dotProd += (xValue * dyValue);
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},qy=function(n){this.variableNames=["dy","W"],this.outputShape=n.inShape;var t=n.filterHeight,e=n.filterWidth,r=n.strideHeight,o=n.strideWidth,i=n.dataFormat==="channelsLast",a=t-1-n.padInfo.top,s=e-1-n.padInfo.left,u=i?1:2,c=i?2:3,l=i?3:1;this.userCode=`
      const ivec2 pads = ivec2(`+a+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[`+l+`];

        ivec2 dyCorner = ivec2(coords[`+u+"], coords["+c+`]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+t+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+r+`.0;

          if (dyR < 0.0 || dyR >= `+n.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+t+` - 1 - wR;

          for (int wC = 0; wC < `+e+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+n.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+e+` - 1 - wC;

            for (int d2 = 0; d2 < `+n.outChannels+`; d2++) {

              if (`+i+`) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},Ky=function(n){this.variableNames=["x","dy"],this.outputShape=n.filterShape;var t=n.strideDepth,e=n.strideHeight,r=n.strideWidth,o=n.padInfo.front,i=n.padInfo.top,a=n.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < `+n.batchSize+`; b++) {
          for (int yF = 0; yF < `+n.outDepth+`; yF++) {
            int xF = wF + yF * `+t+" - "+o+`;

            if (xF < 0 || xF >= `+n.inDepth+`) {
              continue;
            }

            for (int yR = 0; yR < `+n.outHeight+`; yR++) {
              int xR = wR + yR * `+e+" - "+i+`;

              if (xR < 0 || xR >= `+n.inHeight+`) {
                continue;
              }

              for (int yC = 0; yC < `+n.outWidth+`; yC++) {
                int xC = wC + yC * `+r+" - "+a+`;

                if (xC < 0 || xC >= `+n.inWidth+`) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},Xy=function(n){this.variableNames=["dy","W"],this.outputShape=n.inShape;var t=n.filterDepth,e=n.filterHeight,r=n.filterWidth,o=n.strideDepth,i=n.strideHeight,a=n.strideWidth,s=t-1-n.padInfo.front,u=e-1-n.padInfo.top,c=r-1-n.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(`+s+", "+u+", "+c+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < `+t+`; wF++) {
          float dyF = float(dyFCorner + wF) / `+o+`.0;

          if (dyF < 0.0 || dyF >= `+n.outDepth+`.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = `+t+` - 1 - wF;

          for (int wR = 0; wR < `+e+`; wR++) {
            float dyR = float(dyRCorner + wR) / `+i+`.0;

            if (dyR < 0.0 || dyR >= `+n.outHeight+`.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = `+e+` - 1 - wR;

            for (int wC = 0; wC < `+r+`; wC++) {
              float dyC = float(dyCCorner + wC) / `+a+`.0;

              if (dyC < 0.0 || dyC >= `+n.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = `+r+` - 1 - wC;

              for (int d2 = 0; d2 < `+n.outChannels+`; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},$y=function(n){this.variableNames=["x","dy"],this.outputShape=n.filterShape;var t=n.strideHeight,e=n.strideWidth,r=n.padInfo.top,o=n.padInfo.left,i=n.outChannels/n.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * `+i+` + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < `+n.batchSize+`; b++) {
          for (int yR = 0; yR < `+n.outHeight+`; yR++) {
            int xR = wR + yR * `+t+" - "+r+`;

            if (xR < 0 || xR >= `+n.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+n.outWidth+`; yC++) {
              int xC = wC + yC * `+e+" - "+o+`;

              if (xC < 0 || xC >= `+n.inWidth+`) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `},Yy=function(n){this.variableNames=["dy","W"],this.outputShape=n.inShape;var t=n.filterHeight,e=n.filterWidth,r=n.strideHeight,o=n.strideWidth,i=t-1-n.padInfo.top,a=e-1-n.padInfo.left,s=n.outChannels/n.inChannels;this.userCode=`
      const ivec2 pads = ivec2(`+i+", "+a+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < `+t+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+r+`.0;

          if (dyR < 0.0 || dyR >= `+n.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+t+` - 1 - wR;

          for (int wC = 0; wC < `+e+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+n.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+e+` - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < `+s+`; dm++) {
              int d2 = d1 * `+s+` + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `},el=function(n,t,e,r){t===void 0&&(t=!1),e===void 0&&(e=null),r===void 0&&(r=!1),this.variableNames=["x","W"],this.outputShape=n.outShape;var o=n.padInfo.top,i=n.padInfo.left,a=n.strideHeight,s=n.strideWidth,u=n.dilationHeight,c=n.dilationWidth,l=n.filterHeight,f=n.filterWidth,h=4*Math.floor(n.inChannels/4),d=n.inChannels%4,p=n.dataFormat==="channelsLast",v=p?1:2,m=p?2:3,g=p?3:1,b="",x="";e&&(b=r?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`
          float activation(float x) {
            `+e+`
          }
        `,x="result = activation(result);");var y=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+b+`

      const ivec2 strides = ivec2(`+a+", "+s+`);
      const ivec2 pads = ivec2(`+o+", "+i+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[`+g+`];

        ivec2 xRCCorner =
            ivec2(coords[`+v+"], coords["+m+`]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+l+`; wR++) {
          int xR = xRCorner + wR * `+u+`;

          if (xR < 0 || xR >= `+n.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+f+`; wC++) {
            int xC = xCCorner + wC * `+c+`;

            if (xC < 0 || xC >= `+n.inWidth+`) {
              continue;
            }

            for (int d1 = 0; d1 < `+h+`; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (`+p+`) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (`+(d===1)+`) {

              if (`+p+`) {
                dotProd +=
                    getX(batch, xR, xC, `+h+`) *
                    getW(wR, wC, `+h+`, d2);
              } else {
                dotProd +=
                    getX(batch, `+h+`, xR, xC) *
                    getW(wR, wC, `+h+`, d2);
              }

            } else if (`+(d===2)+`) {
              vec2 wValues = vec2(
                getW(wR, wC, `+h+`, d2),
                getW(wR, wC, `+h+` + 1, d2)
              );

              if (`+p+`) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, `+h+`),
                  getX(batch, xR, xC, `+h+` + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, `+h+`, xR, xC),
                  getX(batch, `+h+` + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (`+(d===3)+`) {
              vec3 wValues = vec3(
                getW(wR, wC, `+h+`, d2),
                getW(wR, wC, `+h+` + 1, d2),
                getW(wR, wC, `+h+` + 2, d2)
              );

              if (`+p+`) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, `+h+`),
                  getX(batch, xR, xC, `+h+` + 1),
                  getX(batch, xR, xC, `+h+` + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, `+h+`, xR, xC),
                  getX(batch, `+h+` + 1, xR, xC),
                  getX(batch, `+h+` + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        `+y+`
        `+x+`
        setOutput(result);
      }
    `},Jy=function(n){this.variableNames=["x","W"],this.outputShape=n.outShape;var t=n.padInfo.front,e=n.padInfo.top,r=n.padInfo.left,o=n.strideDepth,i=n.strideHeight,a=n.strideWidth,s=n.dilationDepth,u=n.dilationHeight,c=n.dilationWidth,l=n.filterDepth,f=n.filterHeight,h=n.filterWidth,d=4*Math.floor(n.inChannels/4),p=n.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(`+o+", "+i+", "+a+`);
      const ivec3 pads = ivec3(`+t+", "+e+", "+r+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < `+l+`; wF++) {
          int xF = xFCorner + wF * `+s+`;

          if (xF < 0 || xF >= `+n.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+f+`; wR++) {
            int xR = xRCorner + wR * `+u+`;

            if (xR < 0 || xR >= `+n.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+h+`; wC++) {
              int xC = xCCorner + wC * `+c+`;

              if (xC < 0 || xC >= `+n.inWidth+`) {
                continue;
              }

              for (int d1 = 0; d1 < `+d+`; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (`+(p===1)+`) {
                dotProd +=
                  getX(batch, xF, xR, xC, `+d+`) *
                  getW(wF, wR, wC, `+d+`, d2);
              } else if (`+(p===2)+`) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, `+d+`),
                  getX(batch, xF, xR, xC, `+d+` + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, `+d+`, d2),
                  getW(wF, wR, wC, `+d+` + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (`+(p===3)+`) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, `+d+`),
                  getX(batch, xF, xR, xC, `+d+` + 1),
                  getX(batch, xF, xR, xC, `+d+` + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, `+d+`, d2),
                  getW(wF, wR, wC, `+d+` + 1, d2),
                  getW(wF, wR, wC, `+d+` + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},tl=function(n,t,e,r){t===void 0&&(t=!1),e===void 0&&(e=null),r===void 0&&(r=!1),this.variableNames=["x","W"],this.outputShape=n.outShape;var o=n.inHeight,i=n.inWidth,a=n.padInfo.top,s=n.padInfo.left,u=n.strideHeight,c=n.strideWidth,l=n.dilationHeight,f=n.dilationWidth,h=n.filterHeight,d=n.filterWidth,p=n.outChannels/n.inChannels,v="",m="";e&&(v=r?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`
          float activation(float x) {
            `+e+`
          }
        `,m="result = activation(result);");var g=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+v+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+a+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / `+p+`;
        int q = d2 - d1 * `+p+`;

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < `+h+`; wR++) {
          int xR = xRCorner + wR * `+l+`;

          if (xR < 0 || xR >= `+o+`) {
            continue;
          }

          for (int wC = 0; wC < `+d+`; wC++) {
            int xC = xCCorner + wC * `+f+`;

            if (xC < 0 || xC >= `+i+`) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        `+g+`
        `+m+`
        setOutput(result);
      }
    `},nl=function(n,t,e,r){t===void 0&&(t=!1),e===void 0&&(e=null),r===void 0&&(r=!1),this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n.outShape;for(var o=n.inHeight,i=n.inWidth,a=n.padInfo.top,s=n.padInfo.left,u=n.strideHeight,c=n.strideWidth,l=n.dilationHeight,f=n.dilationWidth,h=n.filterHeight,d=n.filterWidth,p=d,v="int xR; int xC; int xCOffset;",m=0;m<h;m++)for(var g=0;g<d;g++)v+=`
          vec4 xTexelR`+m+"C"+2*g+` = vec4(0.);
          vec4 wR`+m+"C"+g+` = vec4(0.);
          vec4 xR`+m+"C"+g+" = vec4(0.);";for(m=0;m<h;m++)for(var b=0;b<p;b++){if(v+=`
          xR = xRCorner + `+m*l+`;
          xC = xCCorner + `+(g=2*b)*f+`;
        `,c===1){if(g<d&&(v+=s%2==1?`
                xCOffset = xC + 1;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+i+`) {
                  xTexelR`+m+"C"+g+` = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+i+`) {
                    xTexelR`+m+"C"+g+`.zw = vec2(0.);
                  }
                } else {
                  xTexelR`+m+"C"+g+` = vec4(0.);
                }

                xCOffset = xC + 1 - 2;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+i+`) {
                  vec4 previous = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+i+`) {
                    previous.zw = vec2(0.);
                  }

                  xR`+m+"C"+g+" = vec4(previous.zw, xTexelR"+m+"C"+g+`.xy);
                } else {
                  xR`+m+"C"+g+" = vec4(0, 0, xTexelR"+m+"C"+g+`.xy);
                }
              `:`
                if(xR >= 0 && xR < `+o+" && xC >= 0 && xC < "+i+`) {
                  xTexelR`+m+"C"+g+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+m+"C"+g+` = vec4(0.);
                }

                xR`+m+"C"+g+" = xTexelR"+m+"C"+g+`;
              `,g+1<d)){var x=s%2==0?Yf(f):f;f%2==0&&s%2==1||f%2!=0&&s%2!=1?(v+=`
                  xCOffset = xC + `+s%2+" + "+x+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+i+`) {
                    xTexelR`+m+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                  }
                `,f>1&&(v+=`
                    xCOffset -= 2;
                    if(xR >= 0 && xR < `+o+` &&
                      xCOffset >= 0 && xCOffset < `+i+`) {
                      xTexelR`+m+"C"+g+` = getX(batch, xR, xCOffset, d1);
                    } else {
                      xTexelR`+m+"C"+g+` = vec4(0.);
                    }
                  `),v+=`
                  xR`+m+"C"+(g+1)+` = vec4(
                    xTexelR`+m+"C"+g+".zw, xTexelR"+m+"C"+(g+2)+`.xy);
                `):v+=`
                  xCOffset = xC + `+x+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+i+`) {
                    xTexelR`+m+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                  }

                  xR`+m+"C"+(g+1)+" = xTexelR"+m+"C"+(g+2)+`;
                `}}else g<d&&(v+=`
              if(xR >= 0 && xR < `+o+`) {
            `,s%2==1?(v+=`
                xCOffset = xC + 1 - `+c+`;
                if(xCOffset >= 0 && xCOffset < `+i+`) {
                  xTexelR`+m+"C"+g+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+m+"C"+g+` = vec4(0.);
                }

                if(xC + 1 >= 0 && xC + 1 < `+i+`) {
                  xTexelR`+m+"C"+(g+2)+` = getX(batch, xR, xC + 1, d1);
                } else {
                  xTexelR`+m+"C"+(g+2)+` = vec4(0.);
                }

                xR`+m+"C"+g+` = vec4(
                  xTexelR`+m+"C"+g+".zw, xTexelR"+m+"C"+(g+2)+`.zw);
              `,g+1<d&&(v+=`
                  vec4 final = vec4(0.);
                  xCOffset = xC + 1 + `+c+`;
                  if(xCOffset >= 0 && xCOffset < `+i+`) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xR`+m+"C"+(g+1)+" = vec4(xTexelR"+m+"C"+(g+2)+`.xy, final.xy);
                `)):(v+=`
                if(xC >= 0 && xC < `+i+`) {
                  xTexelR`+m+"C"+g+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+m+"C"+g+` = vec4(0.);
                }

                xCOffset = xC + `+c+`;
                if(xCOffset >= 0 && xCOffset < `+i+`) {
                  xTexelR`+m+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+m+"C"+(g+2)+` = vec4(0.);
                }

                xR`+m+"C"+g+` = vec4(
                  xTexelR`+m+"C"+g+".xy, xTexelR"+m+"C"+(g+2)+`.xy);
              `,g+1<d&&(v+=`
                  xR`+m+"C"+(g+1)+` = vec4(
                    xTexelR`+m+"C"+g+".zw, xTexelR"+m+"C"+(g+2)+`.zw);
                `)),v+="}");g<d&&(v+=`
            vec4 wTexelR`+m+"C"+g+" = getW("+m+", "+g+`, d1, q);
            wR`+m+"C"+g+" = vec4(wTexelR"+m+"C"+g+".xz, wTexelR"+m+"C"+g+`.xz);
          `,g+1<d&&(v+=`
              vec4 wTexelR`+m+"C"+(g+1)+" = getW("+m+", "+(g+1)+`, d1, q);
              wR`+m+"C"+(g+1)+` =
                vec4(wTexelR`+m+"C"+(g+1)+".xz, wTexelR"+m+"C"+(g+1)+".xz);"))}for(m=0;m<h;m++)for(g=0;g<d;g++)v+="dotProd += xR"+m+"C"+g+" * wR"+m+"C"+g+";";var y="",w="";e&&(y=r?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`vec4 activation(vec4 x) {
          `+e+`
        }`,w="result = activation(result);");var _=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+y+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+a+", "+s+`);

      void main() {

        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2;
        int q = 0;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        vec4 dotProd = vec4(0.);

        `+v+`

        vec4 result = dotProd;
        `+_+`
        `+w+`
        setOutput(result);
      }
    `},Qy=function(n,t,e,r,o){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];var i=n[0],a=n[1],s=n[2],u=n[3],c=t[0],l=e[0],f=e[1];this.outputShape=[c,l,f,u];var h=r==="bilinear"?1:0,d=[a-1+".0",s-1+".0"],p=d[0],v=d[1],m=l>1?[""+(a-1)/(l-1),"(y2-y1) * height_ratio","y1*"+p+" + float(y)*(height_scale)"]:["0.0","0.0","0.5 * (y1+y2) * "+p],g=m[0],b=m[1],x=m[2],y=f>1?[""+(s-1)/(f-1),"(x2-x1) * width_ratio","x1*"+v+" + float(x)*(width_scale)"]:["0.0","0.0","0.5 * (x1+x2) * "+v],w=y[0],_=y[1],k=y[2];this.userCode=`
      const float height_ratio = float(`+g+`);
      const float width_ratio = float(`+w+`);
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= `+i+`) {
          return;
        }

        float height_scale = `+b+`;
        float width_scale = `+_+`;

        float in_y = `+x+`;
        if( in_y < 0.0 || in_y > `+p+` ) {
          setOutput(float(`+o+`));
          return;
        }
        float in_x = `+k+`;
        if( in_x < 0.0 || in_x > `+v+` ) {
          setOutput(float(`+o+`));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(`+h+` == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `},Zy=function(n,t,e){this.variableNames=["x"],this.outputShape=n;var r=n.length,o=n[n.length-1],i=e?"<":">";this.userCode=`
      int getIndex(int i) {
        `+(e?"return "+o+" -i - 1;":"return i;")+`
      }

      void main() {
        `+He(r)+` coords = getOutputCoords();
        int end = `+rl(r,"coords")+`;
        float val = 0.0;
        for (int i = `+o+` - 1; i >= 0; i -= 1) {
          int idx = getIndex(i);
          if (idx `+i+` end) {
            continue;
          }
          if (idx == end && `+t+`) {
            continue;
          }
          `+rl(r,"coords")+` = idx;
          val += getX(`+function(a,s){if(a===1)return""+s;if(a===2)return s+".x, "+s+".y";if(a===3)return s+".x, "+s+".y, "+s+".z";if(a===4)return s+".x, "+s+".y, "+s+".z, "+s+".w";throw Error("Cumulative sum for rank "+a+" is not yet supported")}(r,"coords")+`);
        }
        setOutput(val);
      }
    `};function rl(n,t){if(n===1)return""+t;if(n===2)return t+".y";if(n===3)return t+".z";if(n===4)return t+".w";throw Error("Cumulative sum for rank "+n+" is not yet supported")}var e0=function(n){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=Po.DENSE;var t=Co(n),e=gt();this.outputShape=n,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+mr(["r","c","d"],n)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+t[0]+", "+t[1]+`));
        int index = 4 * (resTexRC.x * `+t[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        `+e.output+` = result;
      }
    `},t0=function(n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=Po.DENSE;var t=Co(n),e=gt();this.outputShape=n,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+mr(["r","c","d"],n)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+t[0]+", "+t[1]+`));
        int index = 4 * (resTexRC.x * `+t[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        `+e.output+` = result;
      }
    `},n0=function(){function n(t,e,r){this.variableNames=["x"],this.outputShape=[],this.outputShape=t,this.blockSize=e,this.dataFormat=r,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = `+this.getHeightCoordString()+`;
      int w = `+this.getWidthCoordString()+`;
      int d = `+this.getDepthCoordString()+`;

      int in_h = h / `+e+`;
      int offset_h = imod(h, `+e+`);
      int in_w = w / `+e+`;
      int offset_w = imod(w, `+e+`);
      int offset_d = (offset_h * `+e+` + offset_w) *
        `+this.getOutputDepthSize()+`;
      int in_d = d + offset_d;

      float result = `+this.getInputSamplingString()+`;
      setOutput(result);
    }
  `}return n.prototype.getHeightCoordString=function(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"},n.prototype.getWidthCoordString=function(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"},n.prototype.getDepthCoordString=function(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"},n.prototype.getOutputDepthSize=function(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]},n.prototype.getInputSamplingString=function(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"},n}(),r0=function(n){this.variableNames=["X"],this.outputShape=[n,n],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `},o0=function(n){this.variableNames=["A"],this.outTexUsage=Lt.DOWNLOAD;var t=gt();this.outputShape=n,this.userCode=`
      `+Ah+`

      void main() {
        float x = getAAtOutCoords();
        `+t.output+` = encode_float(x);
      }
    `},i0=function(n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=Lt.DOWNLOAD;var t=gt();this.outputShape=n,this.userCode=`
      `+Ah+`

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        `+t.output+` = encode_float(x);
      }
    `},a0=function(n,t,e){e===void 0&&(e=!1),this.variableNames=["A"];var r=gt(),o=t[0],i=t[1];this.outputShape=n;var a="result";e&&(a="floor(result * 255. + 0.5)"),this.userCode=`
      `+vu(n)+`

      void main() {
        ivec3 coords = getOutputCoords();

        int flatIndex = getFlatIndex(coords);
        int offset = imod(flatIndex, 4);

        flatIndex = idiv(flatIndex, 4, 1.);
        
        int r = flatIndex / `+i+`;
        int c = imod(flatIndex, `+i+`);
        vec2 uv = (vec2(c, r) + halfCR) / vec2(`+i+".0, "+o+`.0);
        vec4 values = `+r.texture2D+`(A, uv);

        float result;

        if(offset == 0) {
          result = values[0];
        } else if(offset == 1) {
          result = values[1];
        } else if(offset == 2) {
          result = values[2];
        } else {
          result = values[3];
        }

        `+r.output+" = vec4("+a+`, 0., 0., 0.);
      }
    `},s0=function(n,t,e){e===void 0&&(e=!1),this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var r=gt(),o=t[0],i=t[1];this.outputShape=n;var a="",s="result";e&&(s="floor(result * 255. + 0.5)");for(var u=0;u<=1;u++)for(var c=0;c<=1;c++){var l=2*u+c;a+=`
          localCoords = coords;
          if(localCoords[2] + `+c+" < "+n[2]+`) {
            localCoords[2] += `+c+`;
            if(localCoords[1] + `+u+" < "+n[1]+`) {
              localCoords[1] += `+u+`;

              flatIndex = getFlatIndex(localCoords);
              offset = imod(flatIndex, 4);

              flatIndex = idiv(flatIndex, 4, 1.);

              r = flatIndex / `+i+`;
              c = imod(flatIndex, `+i+`);
              uv = (vec2(c, r) + halfCR) / vec2(`+i+".0, "+o+`.0);
              values = `+r.texture2D+`(A, uv);

              if(offset == 0) {
                result[`+l+`] = values[0];
              } else if(offset == 1) {
                result[`+l+`] = values[1];
              } else if(offset == 2) {
                result[`+l+`] = values[2];
              } else {
                result[`+l+`] = values[3];
              }
            }
          }
        `}this.userCode=`
      `+vu(n)+`

      void main() {
        ivec3 coords = getOutputCoords();

        vec4 result = vec4(0.);
        int flatIndex, r, c, offset;
        ivec3 localCoords;
        vec2 uv;
        vec4 values;

        `+a+`

        `+r.output+" = "+s+`;
      }
    `},u0="return real * expR - imag * expI;",c0="return real * expI + imag * expR;",ol=function(n,t,e){this.variableNames=["real","imag"];var r=t[1];this.outputShape=t;var o=e?"2.0 * "+Math.PI:"-2.0 * "+Math.PI,i=e?r+".0":"1.0";this.userCode=`
      const float exponentMultiplier = `+o+`;

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        `+n+`
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(`+r+`);
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < `+r+`; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / `+i+`;
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `},l0=function(){function n(t,e){this.outputShape=[],this.variableNames=["x"],this.outputShape=t,this.userCode=`
      uniform float value;
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}return n.prototype.getCustomSetupFunc=function(t){var e=this;return function(r,o){e.valueLoc==null&&(e.valueLoc=r.getUniformLocationNoThrow(o,"value")),r.gl.uniform1f(e.valueLoc,t)}},n}(),f0=function(n,t,e){this.variableNames=["A","indices"];var r=n.slice();r[e]=t,this.outputShape=r,this.rank=r.length;var o=He(this.rank),i=function(a,s){var u=a.length;if(u>4)throw Error("Gather for rank "+u+" is not yet supported");if(u===1)return"int(getIndices(resRC))";for(var c=["resRC.x","resRC.y","resRC.z","resRC.w"],l=[],f=0;f<a.length;f++)f===s?l.push("int(getIndices("+c[f]+"))"):l.push(""+c[f]);return l.join()}(n,e);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+i+`));
      }
    `},h0=function(n,t,e){this.sliceDim=n,this.strides=t,this.variableNames=["x","indices"],this.outputShape=e;var r=He(t.length),o=He(e.length),i=this.sliceDim>1?"strides[j]":"strides";this.userCode=`
        `+r+" strides = "+r+"("+this.strides+`);
         void main() {
          `+o+` coords = getOutputCoords();
          int flattenIndex = 0;
          for (int j = 0; j < `+this.sliceDim+`; j++) {
            int index = round(getIndices(coords[0], j));
            flattenIndex += index * `+i+`;
          }
          setOutput(getX(flattenIndex, coords[1]));
        }
      `};function d0(n,t){var e=gt();return ug(n,t,e.version+`
    precision highp float;
    `+e.attribute+` vec3 clipSpacePos;
    `+e.attribute+` vec2 uv;
    `+e.varyingVs+` vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`)}function p0(n,t){return dg(n,t,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function v0(n,t){return pg(n,t,new Uint16Array([0,1,2,2,1,3]))}function Go(n,t,e,r,o,i,a){mg(e,r);var s=vg(n,t),u=n.TEXTURE_2D;return fe(n,t,function(){return n.bindTexture(u,s)}),fe(n,t,function(){return n.texParameteri(u,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE)}),fe(n,t,function(){return n.texParameteri(u,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}),fe(n,t,function(){return n.texParameteri(u,n.TEXTURE_MIN_FILTER,n.NEAREST)}),fe(n,t,function(){return n.texParameteri(u,n.TEXTURE_MAG_FILTER,n.NEAREST)}),fe(n,t,function(){return n.texImage2D(u,0,o,e,r,0,i,a,null)}),fe(n,t,function(){return n.bindTexture(n.TEXTURE_2D,null)}),s}function m0(n,t,e,r,o){var i=ra(e,r);return Go(n,t,i[0],i[1],o.internalFormatFloat,o.textureFormatFloat,n.FLOAT)}function g0(n,t,e,r,o){var i=ra(e,r);return Go(n,t,i[0],i[1],o.internalFormatHalfFloat,o.textureFormatFloat,o.textureTypeHalfFloat)}function y0(n,t,e,r,o){var i=ra(e,r);return Go(n,t,i[0],i[1],n.RGBA,n.RGBA,n.UNSIGNED_BYTE)}function x0(n,t,e,r,o){var i=Ho(e,r);return Go(n,t,i[0],i[1],o.internalFormatPackedFloat,n.RGBA,n.FLOAT)}function b0(n,t,e,r,o){var i=Ho(e,r);return Go(n,t,i[0],i[1],o.internalFormatPackedHalfFloat,n.RGBA,o.textureTypeHalfFloat)}function w0(n,t,e,r){return fe(n,t,function(){return n.bindBuffer(n.ARRAY_BUFFER,r)}),jc(n,t,e,"clipSpacePos",r,3,20,0)&&jc(n,t,e,"uv",r,2,20,12)}function _0(n,t,e,r,o,i,a){var s,u,c;fe(n,t,function(){return n.bindTexture(n.TEXTURE_2D,e)}),i instanceof Uint8Array?(s=new Uint8Array(r*o*4),u=n.UNSIGNED_BYTE,c=n.RGBA):(s=new Float32Array(r*o*4),u=n.FLOAT,c=a.internalFormatPackedFloat),s.set(i),fe(n,t,function(){return n.texImage2D(n.TEXTURE_2D,0,c,r,o,0,n.RGBA,u,s)}),fe(n,t,function(){return n.bindTexture(n.TEXTURE_2D,null)})}function C0(n,t,e,r){fe(n,t,function(){return n.bindTexture(n.TEXTURE_2D,e)}),r.data instanceof Uint8Array?fe(n,t,function(){return n.texImage2D(n.TEXTURE_2D,0,n.RGBA,r.width,r.height,0,n.RGBA,n.UNSIGNED_BYTE,r.data)}):fe(n,t,function(){return n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,r)}),fe(n,t,function(){return n.bindTexture(n.TEXTURE_2D,null)})}function E0(n,t,e,r,o){var i=n.createBuffer();fe(n,t,function(){return n.bindBuffer(n.PIXEL_PACK_BUFFER,i)});var a=16*e*r;return fe(n,t,function(){return n.bufferData(n.PIXEL_PACK_BUFFER,a,n.STREAM_READ)}),fe(n,t,function(){return n.readPixels(0,0,r,e,n.RGBA,n.FLOAT,0)}),fe(n,t,function(){return n.bindBuffer(n.PIXEL_PACK_BUFFER,null)}),i}function I0(n,t,e){var r=n,o=new Float32Array(e);return r.bindBuffer(r.PIXEL_PACK_BUFFER,t),r.getBufferSubData(r.PIXEL_PACK_BUFFER,0,o),r.bindBuffer(r.PIXEL_PACK_BUFFER,null),o}function R0(n,t,e,r,o){var i=ra(e,r),a=i[0],s=i[1],u=new Uint8Array(e*r*4);return fe(n,t,function(){return n.readPixels(0,0,a,s,o.downloadTextureFormat,n.UNSIGNED_BYTE,u)}),new Float32Array(u.buffer)}function S0(n,t,e,r,o,i,a,s){var u=n,c=new Float32Array(function(l,f){var h=Ho(l,f);return h[0]*h[1]*4}(i,a));return u.bindBuffer(u.PIXEL_PACK_BUFFER,t),u.getBufferSubData(u.PIXEL_PACK_BUFFER,0,c),u.bindBuffer(u.PIXEL_PACK_BUFFER,null),c}function k0(n,t,e,r){var o=new Float32Array(e*r*4);return fe(n,t,function(){return n.readPixels(0,0,r,e,n.RGBA,n.FLOAT,o)}),o}var A0=function(){function n(t){this.outputTexture=null,this.program=null,this.disposed=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[];var e=G().getNumber("WEBGL_VERSION");t!=null?(this.gl=t,rg(e,t)):this.gl=wn(e);var r="WEBGL_color_buffer_float";if(G().getNumber("WEBGL_VERSION")===1){if(this.textureFloatExtension=ei(this.gl,this.debug,"OES_texture_float"),Kt(this.gl,"OES_texture_half_float"))this.textureHalfFloatExtension=ei(this.gl,this.debug,"OES_texture_half_float");else if(G().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(r),Kt(this.gl,"EXT_color_buffer_half_float"))this.colorBufferHalfFloatExtension=ei(this.gl,this.debug,"EXT_color_buffer_half_float");else if(G().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(r="EXT_color_buffer_float",Kt(this.gl,r))this.colorBufferFloatExtension=this.gl.getExtension(r);else{if(!Kt(this.gl,"EXT_color_buffer_half_float"))throw new Error("GL context does not support color renderable floats");this.colorBufferHalfFloatExtension=this.gl.getExtension("EXT_color_buffer_half_float")}this.vertexBuffer=p0(this.gl,this.debug),this.indexBuffer=v0(this.gl,this.debug),this.framebuffer=gg(this.gl,this.debug),this.textureConfig=iu(this.gl,this.textureHalfFloatExtension)}return Object.defineProperty(n.prototype,"debug",{get:function(){return G().getBool("DEBUG")},enumerable:!0,configurable:!0}),n.prototype.dispose=function(){var t=this;if(!this.disposed){this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");var e=this.gl;fe(e,this.debug,function(){return e.finish()}),fe(e,this.debug,function(){return e.bindFramebuffer(e.FRAMEBUFFER,null)}),fe(e,this.debug,function(){return e.deleteFramebuffer(t.framebuffer)}),fe(e,this.debug,function(){return e.bindBuffer(e.ARRAY_BUFFER,null)}),fe(e,this.debug,function(){return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)}),fe(e,this.debug,function(){return e.deleteBuffer(t.indexBuffer)}),this.disposed=!0}},n.prototype.createFloat32MatrixTexture=function(t,e){return this.throwIfDisposed(),m0(this.gl,this.debug,t,e,this.textureConfig)},n.prototype.createFloat16MatrixTexture=function(t,e){return this.throwIfDisposed(),g0(this.gl,this.debug,t,e,this.textureConfig)},n.prototype.createUnsignedBytesMatrixTexture=function(t,e){return this.throwIfDisposed(),y0(this.gl,this.debug,t,e,this.textureConfig)},n.prototype.uploadPixelDataToTexture=function(t,e){this.throwIfDisposed(),C0(this.gl,this.debug,t,e)},n.prototype.uploadDenseMatrixToTexture=function(t,e,r,o){this.throwIfDisposed(),_0(this.gl,this.debug,t,e,r,o,this.textureConfig)},n.prototype.createFloat16PackedMatrixTexture=function(t,e){return this.throwIfDisposed(),b0(this.gl,this.debug,t,e,this.textureConfig)},n.prototype.createPackedMatrixTexture=function(t,e){return this.throwIfDisposed(),x0(this.gl,this.debug,t,e,this.textureConfig)},n.prototype.deleteMatrixTexture=function(t){var e=this;this.throwIfDisposed(),this.outputTexture===t&&(qc(this.gl,this.debug,this.framebuffer),this.outputTexture=null),fe(this.gl,this.debug,function(){return e.gl.deleteTexture(t)})},n.prototype.downloadByteEncodedFloatMatrixFromOutputTexture=function(t,e,r){var o=this;return this.downloadMatrixDriver(t,function(){return R0(o.gl,o.debug,e,r,o.textureConfig)})},n.prototype.downloadPackedMatrixFromBuffer=function(t,e,r,o,i,a){return S0(this.gl,t,0,0,0,i,a,this.textureConfig)},n.prototype.downloadFloat32MatrixFromBuffer=function(t,e){return I0(this.gl,t,e)},n.prototype.createBufferFromTexture=function(t,e,r){this.bindTextureToFrameBuffer(t);var o=E0(this.gl,this.debug,e,r,this.textureConfig);return this.unbindTextureToFrameBuffer(),o},n.prototype.createAndWaitForFence=function(){var t=this.createFence(this.gl);return this.pollFence(t)},n.prototype.createFence=function(t){var e,r,o=this;if(G().getBool("WEBGL_FENCE_API_ENABLED")){var i=t,a=i.fenceSync(i.SYNC_GPU_COMMANDS_COMPLETE,0);t.flush(),r=function(){var s=i.clientWaitSync(a,0,0);return s===i.ALREADY_SIGNALED||s===i.CONDITION_SATISFIED},e=a}else G().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(e=this.beginQuery(),this.endQuery(),r=function(){return o.isQueryAvailable(e,G().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}):r=function(){return!0};return{query:e,isFencePassed:r}},n.prototype.downloadMatrixFromPackedTexture=function(t,e,r){var o=this;return this.downloadMatrixDriver(t,function(){return k0(o.gl,o.debug,e,r)})},n.prototype.createProgram=function(t){this.throwIfDisposed();var e=this.gl,r=cg(e,this.debug,t),o=d0(e,this.debug),i=fg(e,this.debug);return fe(e,this.debug,function(){return e.attachShader(i,o)}),fe(e,this.debug,function(){return e.attachShader(i,r)}),hg(e,this.debug,i),this.debug&&Oa(e,this.debug,i),this.vertexAttrsAreBound||(this.setProgram(i),this.vertexAttrsAreBound=w0(e,this.debug,this.program,this.vertexBuffer)),i},n.prototype.deleteProgram=function(t){var e=this;this.throwIfDisposed(),t===this.program&&(this.program=null),t!=null&&fe(this.gl,this.debug,function(){return e.gl.deleteProgram(t)})},n.prototype.setProgram=function(t){var e=this;this.throwIfDisposed(),this.program=t,this.program!=null&&this.debug&&Oa(this.gl,this.debug,this.program),fe(this.gl,this.debug,function(){return e.gl.useProgram(t)})},n.prototype.getUniformLocation=function(t,e,r){return r===void 0&&(r=!0),this.throwIfDisposed(),r?xg(this.gl,this.debug,t,e):bg(this.gl,t,e)},n.prototype.getAttributeLocation=function(t,e){var r=this;return this.throwIfDisposed(),fe(this.gl,this.debug,function(){return r.gl.getAttribLocation(t,e)})},n.prototype.getUniformLocationNoThrow=function(t,e){return this.throwIfDisposed(),this.gl.getUniformLocation(t,e)},n.prototype.setInputMatrixTexture=function(t,e,r){this.throwIfDisposed(),this.throwIfNoProgram(),wg(this.gl,this.debug,this.program,t,e,r)},n.prototype.setOutputMatrixTexture=function(t,e,r){this.setOutputMatrixTextureDriver(t,r,e)},n.prototype.setOutputPackedMatrixTexture=function(t,e,r){this.throwIfDisposed();var o=Ho(e,r),i=o[0],a=o[1];this.setOutputMatrixTextureDriver(t,i,a)},n.prototype.setOutputMatrixWriteRegion=function(t,e,r,o){this.setOutputMatrixWriteRegionDriver(r,t,o,e)},n.prototype.setOutputPackedMatrixWriteRegion=function(t,e,r,o){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")},n.prototype.debugValidate=function(){this.program!=null&&Oa(this.gl,this.debug,this.program),ti(this.gl)},n.prototype.executeProgram=function(){this.throwIfDisposed(),this.throwIfNoProgram();var t=this.gl;this.debug&&this.debugValidate(),fe(t,this.debug,function(){return t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0)})},n.prototype.blockUntilAllProgramsCompleted=function(){var t=this;this.throwIfDisposed(),fe(this.gl,this.debug,function(){return t.gl.finish()})},n.prototype.getQueryTimerExtension=function(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=ei(this.gl,this.debug,G().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension},n.prototype.getQueryTimerExtensionWebGL2=function(){return this.getQueryTimerExtension()},n.prototype.getQueryTimerExtensionWebGL1=function(){return this.getQueryTimerExtension()},n.prototype.beginQuery=function(){if(G().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){var t=this.gl,e=this.getQueryTimerExtensionWebGL2(),r=t.createQuery();return t.beginQuery(e.TIME_ELAPSED_EXT,r),r}var o=this.getQueryTimerExtensionWebGL1(),i=o.createQueryEXT();return o.beginQueryEXT(o.TIME_ELAPSED_EXT,i),i},n.prototype.endQuery=function(){if(G().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")!==2){var t=this.getQueryTimerExtensionWebGL1();t.endQueryEXT(t.TIME_ELAPSED_EXT)}else{var e=this.gl,r=this.getQueryTimerExtensionWebGL2();e.endQuery(r.TIME_ELAPSED_EXT)}},n.prototype.waitForQueryAndGetTime=function(t){return ae(this,void 0,void 0,function(){var e=this;return se(this,function(r){switch(r.label){case 0:return[4,Wc(function(){return e.disposed||e.isQueryAvailable(t,G().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))})];case 1:return r.sent(),[2,this.getQueryTime(t,G().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))]}})})},n.prototype.getQueryTime=function(t,e){if(e===0)return null;if(e===2){var r=this.gl;return r.getQueryParameter(t,r.QUERY_RESULT)/1e6}var o=this.getQueryTimerExtensionWebGL1();return o.getQueryObjectEXT(t,o.QUERY_RESULT_EXT)/1e6},n.prototype.isQueryAvailable=function(t,e){if(e===0)return!0;if(e===2){var r=this.gl,o=this.getQueryTimerExtensionWebGL2(),i=r.getQueryParameter(t,r.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),i&&!this.disjoint}return i=(o=this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(t,o.QUERY_RESULT_AVAILABLE_EXT),this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),i&&!this.disjoint},n.prototype.pollFence=function(t){var e=this;return new Promise(function(r){e.addItemToPoll(function(){return t.isFencePassed()},function(){return r()})})},n.prototype.pollItems=function(){for(var t=function(r){for(var o=0;o<r.length&&r[o]();++o);return o-1}(this.itemsToPoll.map(function(r){return r.isDoneFn})),e=0;e<=t;++e)(0,this.itemsToPoll[e].resolveFn)();this.itemsToPoll=this.itemsToPoll.slice(t+1)},n.prototype.addItemToPoll=function(t,e){var r=this;this.itemsToPoll.push({isDoneFn:t,resolveFn:e}),this.itemsToPoll.length>1||Wc(function(){return r.pollItems(),r.itemsToPoll.length===0})},n.prototype.bindTextureToFrameBuffer=function(t){this.throwIfDisposed(),Ba(this.gl,this.debug,t,this.framebuffer),this.debug&&ti(this.gl)},n.prototype.unbindTextureToFrameBuffer=function(){this.outputTexture!=null?(Ba(this.gl,this.debug,this.outputTexture,this.framebuffer),this.debug&&ti(this.gl)):qc(this.gl,this.debug,this.framebuffer)},n.prototype.downloadMatrixDriver=function(t,e){this.bindTextureToFrameBuffer(t);var r=e();return this.unbindTextureToFrameBuffer(),r},n.prototype.setOutputMatrixTextureDriver=function(t,e,r){this.throwIfDisposed();var o=this.gl;Ba(o,this.debug,t,this.framebuffer),this.debug&&ti(o),this.outputTexture=t,fe(o,this.debug,function(){return o.viewport(0,0,e,r)}),fe(o,this.debug,function(){return o.scissor(0,0,e,r)})},n.prototype.setOutputMatrixWriteRegionDriver=function(t,e,r,o){var i=this;this.throwIfDisposed(),fe(this.gl,this.debug,function(){return i.gl.scissor(t,e,r,o)})},n.prototype.throwIfDisposed=function(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")},n.prototype.throwIfNoProgram=function(){if(this.program==null)throw new Error("No GPU program is currently set.")},n}();function il(n,t){if(n.length!==t.length)throw Error("Binary was compiled with "+n.length+" inputs, but was executed with "+t.length+" inputs");n.forEach(function(e,r){var o=e.logicalShape,i=t[r],a=i.shape;if(!st(o,a))throw Error("Binary was compiled with different shapes than the current args. Shapes "+o+" and "+a+" must match");if(!e.isUniform||!i.isUniform){var s=e.texShape,u=i.isUniform?null:i.texData.texShape;if(!st(s,u))throw Error("Binary was compiled with different texture shapes than the current args. Shape "+s+" and "+u+" must match")}})}var D0=function(n,t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n;for(var r=e.filterWidth,o=e.inChannels,i=e.strideWidth,a=e.strideHeight,s=e.padInfo,u=e.outWidth,c=e.dilationWidth,l=e.dilationHeight,f=e.dataFormat,h=s.left,d=s.top,p=o*r,v=gt(),m=f==="channelsLast",g=m?0:1,b=m?1:2,x="",y=0;y<=1;y++)for(var w=0;w<=1;w++)x+=`
          blockIndex = rc.y + `+w+`;
          pos = rc.x + `+y+`;

          if(blockIndex < `+n[1]+" && pos < "+n[0]+`) {
            offsetY = int(blockIndex / (`+u+")) * "+a+" - "+d+`;
            d0 = offsetY + `+l+" * (pos / "+p+`);

            if(d0 < `+t[g]+` && d0 >= 0) {

              offsetX = int(mod(float(blockIndex), `+u+".) * "+i+". - "+h+`.);
              d1 = offsetX + `+c+" * (int(mod(float(pos), "+p+".) / "+o+`.));

              if(d1 < `+t[b]+` && d1 >= 0) {

                ch = int(mod(float(pos), `+o+`.));

                if (`+m+`) {
                  innerDims = vec2(d1, ch);
                  result[`+(2*y+w)+`] = getChannel(
                    getA(d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[`+(2*y+w)+`] = getChannel(
                    getA(ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec2 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        `+x+`

        `+v.output+` = result;
      }
    `},T0=function(n,t,e,r,o){this.variableNames=["x"],this.outputShape=[];var i,a=t,s=n[3]-1;this.outputShape=n;var u="float("+e+") + float("+r+") * sum";i=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -`+a+"; j <= "+a+`; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  `+s+`) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * `+i+`;
        setOutput(val);
      }
    `},N0=function(n,t,e,r,o){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=n,this.depth=n[3],this.depthRadius=t,this.bias=e,this.alpha=r,this.beta=o,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < `+this.depth+`; ++d) {
          int depthBegin = int(max(0.0, float(d - `+t+`)));
          int depthEnd = int(min(float(`+this.depth+`),
              float(d + `+t+` + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = `+this.depth+`;

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(`+r+") * norm + float("+e+`);

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(`+r+`)
                * float(`+o+`)
                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * `+o+`);
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `},F0=function(n,t,e,r,o){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;var i,a=t,s=n[3]-1;this.outputShape=n;var u="float("+e+") + float("+r+") * sum";i=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < `+this.outputShape[3]+`;
        bool hasNextRow = c < `+this.outputShape[2]+`;

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - `+a+`;
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - `+a+"; j <= "+a+`; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(`+s+`));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * `+i+`;
        setOutput(result);
      }
    `},P0=function(n){this.variableNames=["dy","maxPos"],this.outputShape=n.inShape;var t=n.strideHeight,e=n.strideWidth,r=n.dilationHeight,o=n.effectiveFilterHeight,i=n.effectiveFilterWidth,a=o-1-n.padInfo.top,s=i-1-n.padInfo.left,u=o*i-1;this.userCode=`
      const ivec2 pads = ivec2(`+a+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+o+`;
          wR += `+r+`) {
          float dyR = float(dyRCorner + wR) / `+t+`.0;

          if (dyR < 0.0 || dyR >= `+n.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+i+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+e+`.0;

            if (dyC < 0.0 || dyC >= `+n.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = `+u+` - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * `+i+` + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `},M0=function(n){this.variableNames=["dy","maxPos"],this.outputShape=n.inShape;var t=n.strideDepth,e=n.strideHeight,r=n.strideWidth,o=n.dilationDepth,i=n.dilationHeight,a=n.dilationWidth,s=n.effectiveFilterDepth,u=n.effectiveFilterHeight,c=n.effectiveFilterWidth,l=s-1-n.padInfo.front,f=u-1-n.padInfo.top,h=c-1-n.padInfo.left,d=s*u*c-1;this.userCode=`
      const ivec3 pads = ivec3(`+l+", "+f+", "+h+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+s+`;
           wD += `+o+`) {
          float dyD = float(dyDCorner + wD) / `+t+`.0;

          if (dyD < 0.0 || dyD >= `+n.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+u+`;
              wR += `+i+`) {
            float dyR = float(dyRCorner + wR) / `+e+`.0;

            if (dyR < 0.0 || dyR >= `+n.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+c+`;
                wC += `+a+`) {
              float dyC = float(dyCCorner + wC) / `+r+`.0;

              if (dyC < 0.0 || dyC >= `+n.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = `+d+` -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * `+u+" * "+c+` +
                  wR * `+c+` + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `},za=function(n,t,e,r,o,i,a){e===void 0&&(e=!1),r===void 0&&(r=!1),o===void 0&&(o=!1),i===void 0&&(i=null),a===void 0&&(a=!1),this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t;var s=e?n[1]:n[2],u=Math.ceil(s/2),c=e?"i * 2, rc.y":"rc.y, i * 2",l=r?"rc.z, i * 2":"i * 2, rc.z",f=e?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],h=r?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"],d="",p="";i&&(d=a?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+i+`
        }`:`vec4 activation(vec4 x) {
          `+i+`
        }`,p="result = activation(result);");var v=o?"result += getBiasAtOutCoords();":"";o&&this.variableNames.push("bias"),a&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+d+`

      const float sharedDimension = `+u+`.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        for (int i = 0; i < `+u+`; i++) {
          vec4 a = getMatrixA(rc.x, `+c+`);
          vec4 b = getMatrixB(rc.x, `+l+`);

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (`+f[0]+" * "+h[0]+`);
          result += (`+f[1]+" * "+h[1]+`);
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        `+v+`

        `+p+`

        setOutput(result);
      }
    `},O0=function(){function n(t,e,r){this.variableNames=["probs"],this.outputShape=[t,r],this.userCode=`
      uniform float seed;

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < `+(e-1)+`; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(`+(e-1)+`));
      }
    `}return n.prototype.getCustomSetupFunc=function(t){var e=this;return function(r,o){e.seedLoc==null&&(e.seedLoc=r.getUniformLocation(o,"seed")),r.gl.uniform1f(e.seedLoc,t)}},n}(),B0=function(n,t,e,r){this.variableNames=["indices"],this.outputShape=[n,t],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(`+r+"), float("+e+`),
                      float(index == coords.y)));
      }
    `},L0=function(n){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=n;var t=n.length;if(t===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{var e=At("rc",t),r=He(t),o=function(s,u,c){if(s===1)return"rc > "+u[0];for(var l="",f=s-2;f<s;f++)l+=c[f]+" >= "+u[f],f<s-1&&(l+="||");return l}(t,n,e),i=function(s,u,c,l){if(s===1)return"";var f=l.slice(-2);return`
    int r = `+f[0]+`;
    int c = `+f[1]+`;
    int rp1 = r + 1;
    int cp1 = c + 1;

    bool cEdge = cp1 >= `+u+`;
    bool rEdge = rp1 >= `+c+`;
  `}(t,n[n.length-1],n[n.length-2],e),a=function(s,u){var c=s.length,l=function(f,h){for(var d=[],p=0;p<=1;p++)for(var v=0;v<=1;v++){for(var m=(p===0?"r":"rp1")+", "+(v===0?"c":"cp1"),g=2;g<f;g++)m=h[h.length-1-g]+","+m;d.push(m)}return d}(c,u);return c===1?`getA(rc),
            rc + 1 >= `+s[0]+` ? 0. : getA(rc + 1),
            0, 0`:"getA("+l[0]+`),
          cEdge ? 0. : getA(`+l[1]+`),
          rEdge ? 0. : getA(`+l[2]+`),
          rEdge || cEdge ? 0. : getA(`+l[3]+")"}(n,e);this.userCode=`
        void main() {
          `+r+` rc = getOutputCoords();

          if(`+o+`) {
            setOutput(vec4(0));
          } else {
            `+i+`

            setOutput(vec4(`+a+`));
          }
        }
      `}},W0=function(n,t,e){this.variableNames=["x"],this.outputShape=t.map(function(u,c){return u[0]+n[c]+u[1]});var r=n.length,o=He(r),i=t.map(function(u){return u[0]}).join(","),a=t.map(function(u,c){return u[0]+n[c]}).join(","),s=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,r);this.userCode=r!==1?`
      `+o+" start = "+o+"("+i+`);
      `+o+" end = "+o+"("+a+`);

      void main() {
        `+o+` outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(float(`+e+`));
        } else {
          `+o+` coords = outC - start;
          setOutput(getX(`+s+`));
        }
      }
    `:`
        int start = `+i+`;
        int end = `+a+`;

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(float(`+e+`));
          } else {
            setOutput(getX(outC - start));
          }
        }
      `},U0=function(n,t,e){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.map(function(m,g){return m[0]+n[g]+m[1]});for(var r=n.length,o=He(r),i=t.map(function(m){return m[0]}).join(","),a=t.map(function(m,g){return m[0]+n[g]}).join(","),s=At("rc",r),u=At("source",r),c=s[r-1]+" < "+this.outputShape[r-1],l=r===1?"source":"vec2("+u.slice(-2).join()+")",f=[o+" rc = outputLoc;",s[r-1]+` += 1;
       if(`+c+`) {
      `,r===1?"":`}
       rc = outputLoc;
       `+s[r-2]+` += 1;
       if(`+s[r-2]+" < "+this.outputShape[r-2]+") {",r===1?"":"  "+s[r-1]+` += 1;
         if(`+c+") {"],h=r===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))",d="",p=0,v=r===1?2:4;p<v;p++)d+=`
        `+f[p]+`
        if (`+h+`) {
          result[`+p+"] = float("+e+`);
        } else {
          `+o+` source = rc - start;
          result[`+p+"] = getChannel(getX("+u.join()+"), "+l+`);
        }
      `;d+=r===1?"} ":"}}",this.userCode=`
      const `+o+" start = "+o+"("+i+`);
      const `+o+" end = "+o+"("+a+`);

      void main() {
        `+o+` outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        `+d+`
        setOutput(result);
      }
    `},Ha=function(n,t,e){if(this.variableNames=["x"],t==="avg"&&e)throw new Error("Cannot compute positions for average pool.");var r=n.filterWidth,o=n.strideHeight,i=n.strideWidth,a=n.dilationHeight,s=n.dilationWidth,u=n.effectiveFilterHeight,c=n.effectiveFilterWidth,l=n.padInfo.top,f=n.padInfo.left;this.outputShape=n.outShape;var h=t==="avg",d="0.0";if(h||(d="-1.0 / 1e-20"),e)this.userCode=`
        const ivec2 strides = ivec2(`+o+", "+i+`);
        const ivec2 pads = ivec2(`+l+", "+f+`);

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < `+u+`;
              wR += `+a+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+n.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+c+`;
                wC += `+s+`) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= `+n.inWidth+`) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = wR * `+c+` + wC;
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var p=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="avg"&&(p="avgValue / count");var v=4*Math.floor(r/4),m=r%4,g=`
      if (`+h+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(`+o+", "+i+`);
      const ivec2 pads = ivec2(`+l+", "+f+`);
      const float initializationValue = `+d+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= `+n.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+d+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < `+u+`;
            wR += `+a+`) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= `+n.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+v+`; wC += 4) {
            int xC = xCCorner + wC * `+s+`;

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              getValue(batch, xR, xC + 3 * `+s+`, d)
            );

            `+g+`
          }

          int xC = xCCorner + `+v+`;
          if (`+(m===1)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            `+g+`
          } else if (`+(m===2)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              initializationValue,
              initializationValue
            );

            `+g+`
          } else if (`+(m===3)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              initializationValue
            );

            `+g+`
          }
        }
        setOutput(`+p+`);
      }
    `}},Ga=function(n,t,e){if(this.variableNames=["x"],t==="avg"&&e)throw new Error("Cannot compute positions for average pool.");var r=n.filterWidth,o=n.strideDepth,i=n.strideHeight,a=n.strideWidth,s=n.dilationDepth,u=n.dilationHeight,c=n.dilationWidth,l=n.effectiveFilterDepth,f=n.effectiveFilterHeight,h=n.effectiveFilterWidth,d=n.padInfo.front,p=n.padInfo.top,v=n.padInfo.left;this.outputShape=n.outShape;var m=t==="avg",g="0.0";if(m||(g="-1.0 / 1e-20"),e)this.userCode=`
        const ivec3 strides =
            ivec3(`+o+", "+i+", "+a+`);
        const ivec3 pads = ivec3(`+d+", "+p+", "+v+`);

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < `+l+`;
              wD += `+s+`) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= `+n.inDepth+`) {
              continue;
            }

            for (int wR = 0; wR < `+f+`;
                wR += `+u+`) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= `+n.inHeight+`) {
                continue;
              }

              for (int wC = 0; wC < `+h+`;
                  wC += `+c+`) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= `+n.inWidth+`) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition =
                      wD * `+f+" * "+h+` +
                      wR * `+h+` + wC;;
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var b=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="avg"&&(b="avgValue / count");var x=4*Math.floor(r/4),y=r%4,w=`
      if (`+m+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(`+o+", "+i+", "+a+`);
      const ivec3 pads = ivec3(`+d+", "+p+", "+v+`);
      const float initializationValue = `+g+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= `+n.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+g+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= `+n.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+f+`;
            wR += `+u+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+n.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+x+`; wC += 4) {
              int xC = xCCorner + wC * `+c+`;

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                getValue(batch, xD, xR, xC + 3 * `+c+`, ch)
              );

              `+w+`
            }

            int xC = xCCorner + `+x+`;
            if (`+(y===1)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              `+w+`
            } else if (`+(y===2)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                initializationValue,
                initializationValue
              );

              `+w+`
            } else if (`+(y===3)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                initializationValue
              );

              `+w+`
            }
          }
          setOutput(`+b+`);
        }
      }
    `}},V0=function(n,t){this.variableNames=["x"];var e=n.windowSize,r=n.batchSize,o=n.inSize,i=Math.ceil(o/e);this.outputShape=[r,i];var a="0.0",s="";t==="prod"?a="1.0":t==="min"?(a="1.0 / 1e-20",s="min"):t==="max"&&(a="-1.0 / 1e-20",s="max");var u=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="sum"?u="sumValue":t==="prod"?u="prodValue":t==="all"?u="allValue":t==="any"&&(u="anyValue");var c=4*Math.floor(e/4),l=e%4,f=`
      if (`+(t==="sum")+`) {
        sumValue += dot(values, ones);
      } else if (`+(t==="prod")+`) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = `+s+`(values, minMaxValue);
      }
    `,h="vec4";t==="all"?(a="1.0",f=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,h="bvec4"):t==="any"&&(a="0.0",f=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,h="bvec4");var d="";o%e>0&&(d=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = `+a+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        `+d+`
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+e+`;

        vec4 minMaxValue = vec4(`+a+`);
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < `+c+`; i += 4) {
          int inIdx = inOffset + i;
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          `+f+`
        }

        int inIdx = inOffset + `+c+`;
        if (`+(l===1)+`) {
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          `+f+`
        } else if (`+(l===2)+`) {
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          `+f+`
        } else if (`+(l===3)+`) {
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          `+f+`
        }
        setOutput(`+u+`);
      }
    `},z0=function(n,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n;for(var e="",r=0;r<4;r++){var o="thisRC = rc;";r%2==1&&(o+="thisRC.z += 1;"),r>1&&(o+="thisRC.y += 1;"),e+=`
        `+o+`
        `+(r>0?"if(thisRC.y < rows && thisRC.z < cols){":"")+`
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[`+r+`] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        `+(r>0?"}":"")+`
      `}this.userCode=`
      
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      `+mr(["r","c","d"],t)+`
      return ivec3(r, c, d);
    }
  
      `+vu(n)+`

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = `+n[1]+`;
        int cols = `+n[2]+`;

        `+e+`

        setOutput(result);
      }
    `},H0=function(n,t,e){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t.shape;var r=t.shape,o=r[1],i=r[2],a=n.shape,s=a[1],u=a[2],c=[e&&s>1?o-1:o,e&&u>1?i-1:i],l=[e&&s>1?s-1:s,e&&u>1?u-1:u],f=c[0]/l[0],h=c[1]/l[1],d=1/f,p=1/h,v=2*Math.ceil(d)+2,m=2*Math.ceil(p)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+f+`);
        const float widthScale = float(`+h+`);

        const float invHeightScale = float(`+d+`);
        const float invWidthScale = float(`+p+`);

        const int winHeight = int(`+v+`);
        const int winWidth = int(`+m+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), `+(o-1)+`.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), `+(i-1)+`.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},G0=function(n,t,e,r){this.variableNames=["A"],this.outputShape=[];var o=n[0],i=n[1],a=n[2],s=n[3];this.outputShape=[o,t,e,s];var u=[r&&t>1?i-1:i,r&&e>1?a-1:a],c=[r&&t>1?t-1:t,r&&e>1?e-1:e];this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+i+".0, "+a+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `},j0=function(n,t,e,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];var o=n[0],i=n[1],a=n[2],s=n[3];this.outputShape=[o,t,e,s];var u=[r&&t>1?i-1:i,r&&e>1?a-1:a],c=[r&&t>1?t-1:t,r&&e>1?e-1:e];this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`,
          `+u[1]/c[1]+`);
      const vec3 inputShapeRC = vec3(`+i+".0, "+a+`.0,
                                     `+a+`.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = vec3(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(sourceFracIndexRC);
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < `+(s-1)+`;
        bool hasNextRow = coords.z < `+(e-1)+`;

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `},q0=function(n,t,e){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t.shape;var r=t.shape,o=r[1],i=r[2],a=n.shape,s=a[1],u=a[2],c=[e&&s>1?o-1:o,e&&u>1?i-1:i],l=[e&&s>1?s-1:s,e&&u>1?u-1:u],f=c[0]/l[0],h=c[1]/l[1],d=1/f,p=1/h,v=2*Math.ceil(d)+2,m=2*Math.ceil(p)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+f+`);
        const float widthScale = float(`+h+`);

        const float invHeightScale = float(`+d+`);
        const float invWidthScale = float(`+p+`);

        const int winHeight = int(`+v+`);
        const int winWidth = int(`+m+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float sourceFracRow =
              float(`+c[0]+`) *
                (float(dyR) / float(`+l[0]+`));

            float sourceFracCol =
                float(`+c[1]+`) *
                  (float(dyC) / float(`+l[1]+`));

            int sourceNearestRow = int(min(
                float(int(`+o+`) - 1),
                `+e+` ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(`+i+`) - 1),
                `+e+` ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},K0=function(n,t,e,r){this.variableNames=["A"],this.outputShape=[];var o=n[0],i=n[1],a=n[2],s=n[3];this.outputShape=[o,t,e,s];var u=[r&&t>1?i-1:i,r&&e>1?a-1:a],c=[r&&t>1?t-1:t,r&&e>1?e-1:e],l=r?"0.5":"0.0";this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+i+".0, "+a+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + `+l+`)));

        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `},X0=function(n,t){this.variableNames=["x"];var e=n.length;if(e>4)throw new Error("WebGL backend: Reverse of rank-"+e+" tensor is not yet supported");if(this.outputShape=n,e!==1){var r=n.map(function(i,a){return function(s){return t.indexOf(s)!==-1&&n[s]!==1?n[s]+" - coords["+s+"] - 1":"coords["+s+"]"}(a)}).join(","),o=He(e);this.userCode=`
      void main() {
        `+o+` coords = getOutputCoords();
        setOutput(getX(`+r+`));
      }
    `}else this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(`+n[0]+` - coord - 1));
        }
      `},$0=function(n,t){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;var e=n.length;if(e>4)throw new Error("WebGL backend: Reverse of rank-"+e+" tensor is not yet supported");this.outputShape=n;var r=At("rc",e),o=r[e-1]+" + 1 < "+this.outputShape[e-1],i=r[e-2]+" + 1 < "+this.outputShape[e-2],a=He(e);function s(u){var c=n.map(function(l,f){return function(h,d){return t.indexOf(h)!==-1&&n[h]!==1?n[h]+" - "+d[h]+" - 1":""+d[h]}(f,u)});return"getChannel(getX("+c.join(",")+"), vec2("+c.slice(-2).join(",")+"))"}this.userCode=e===1?`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(`+n[0]+` - rc - 1),
            `+n[0]+` - rc - 1);
          if(`+o+`){
              result.g = getChannel(getX(`+n[0]+` - (rc  + 1) - 1),
                `+n[0]+` - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:`
        void main() {
          `+a+` rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = `+function(u){return s(u)}(r.slice())+`;
          if(`+o+`){
            result.g = `+function(u){return u[e-1]="("+u[e-1]+" + 1)",s(u)}(r.slice())+`;
          }
          if(`+i+`) {
            result.b = `+function(u){return u[e-2]="("+u[e-2]+" + 1)",s(u)}(r.slice())+`;
            if(`+o+`) {
              result.a = `+function(u){return u[e-1]="("+u[e-1]+" + 1)",u[e-2]="("+u[e-2]+" + 1)",s(u)}(r.slice())+`;
            }
          }
          setOutput(result);
        }
    `},al=function(n,t,e,r,o,i,a){this.variableNames=["updates","indices","defaultValue"],this.outputShape=i;var s=He(o.length),u=He(i.length),c="";e===1?c="i":e===2&&(c="i, j");var l="getIndices("+c+")",f="";r===1?f="i":r===2&&(f="i, coords[1]");var h="getUpdates("+f+")",d=t>1?"strides[j]":"strides";this.userCode=`
        `+s+" strides = "+s+"("+o+`);

        void main() {
          `+u+` coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < `+n+`; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < `+t+`; j++) {
              int index = round(`+l+`);
              flattenedIndex += index * `+d+`;
            }
            if (flattenedIndex == coords[0]) {
              sum += `+h+`;
              found = true;
            }
          }
          setOutput(mix(getDefaultValue(), sum, float(found)));
        }
      `},Y0=function(n,t){this.variableNames=["x","segmentIds"];var e=n.windowSize,r=n.batchSize,o=n.inSize,i=n.numSegments,a=i*Math.ceil(o/e);this.outputShape=[r,a];var s=4*Math.floor(e/4),u=e%4,c=`
        sumValue += dot(values, segFilter);
    `,l="";o%e>0&&(l=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `);var f="";o%e>0&&(f=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = 0.0;

      float getValue(int batch, int inIdx) {
        `+l+`
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        `+f+`
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          `+i+")) * float("+e+`));
        int currentSeg = int(mod(float(outIdx), float(`+i+`)));

        float sumValue = 0.0;

        for (int i = 0; i < `+s+`; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          `+c+`
        }

        int inIdx = inOffset + `+s+`;
        if (`+(u===1)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          `+c+`
        } else if (`+(u===2)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          `+c+`
        } else if (`+(u===3)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          `+c+`
        }
        setOutput(sumValue);
      }
    `},J0=function(n,t,e){var r,o;if(this.variableNames=["c","a","b"],this.outputShape=t,e>4)throw Error("Where for rank "+e+" is not yet supported");if(e===1)o="resRC",r="resRC";else{for(var i=["resRC.x","resRC.y","resRC.z","resRC.w"],a=[],s=[],u=0;u<t.length;u++)s.push(""+i[u]),u<n&&a.push(""+i[u]);r=a.join(),o=s.join()}var c=He(e);this.userCode=`
      void main() {
        `+c+` resRC = getOutputCoords();
        float cVal = getC(`+r+`);
        if (cVal >= 1.0) {
          setOutput(getA(`+o+`));
        } else {
          setOutput(getB(`+o+`));
        }
      }
    `},Q0=function(){function n(t){this.variableNames=["source"],this.outputShape=t,this.rank=t.length;var e,r=He(this.rank),o="uniform int start["+this.rank+"];",i=function(a){if(a===1)return"sourceLoc";if(a<=6)return ja.slice(0,a).map(function(s){return"sourceLoc."+s}).join(",");throw Error("Slicing for rank "+a+" is not yet supported")}(this.rank);e=`
        `+r+` sourceLoc;
        `+r+` coords = getOutputCoords();
        `+t.map(function(a,s){return"sourceLoc."+ja[s]+" = start["+s+"] + coords."+ja[s]+";"}).join(`
`)+`
      `,this.userCode=`
      `+o+`
      void main() {
        `+e+`
        setOutput(getSource(`+i+`));
      }
    `}return n.prototype.getCustomSetupFunc=function(t){var e=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(r,o){e.startLoc==null&&(e.startLoc=r.getUniformLocationNoThrow(o,"start"),e.startLoc==null)||r.gl.uniform1iv(e.startLoc,t)}},n}(),ja=["x","y","z","w","u","v"],Z0=function(){function n(t){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.rank=t.length;var e=He(this.rank),r=At("coords",this.rank),o=At("sourceLoc",this.rank),i=this.rank===1?"sourceLoc":"vec2("+o.slice(-2).join()+")",a="getChannel(getSource("+o.join()+"), "+i+")",s=`
      result.x = `+a+`;
      if (++`+r[this.rank-1]+" < "+t[this.rank-1]+`) {
        ++`+o[this.rank-1]+`;
        result.y = `+a+`;
        --`+o[this.rank-1]+`;
      }
    `,u=this.rank===1?"":`
      --`+r[this.rank-1]+`;
      if (++`+r[this.rank-2]+" < "+t[this.rank-2]+`) {
        ++`+o[this.rank-2]+`;
        result.z = `+a+`;
        if (++`+r[this.rank-1]+" < "+t[this.rank-1]+`) {
          ++`+o[this.rank-1]+`;
          result.w = `+a+`;
        }
      }
    `,c=this.rank<=4?`sourceLoc = coords +
            `+e+"("+t.map(function(l,f){return"start["+f+"]"}).join()+");":t.map(function(l,f){return o[f]+" = "+r[f]+" + start["+f+"];"}).join(`
`);this.userCode=`
      uniform int start[`+this.rank+`];
      void main() {
        `+e+` coords = getOutputCoords();
        `+e+` sourceLoc;
        `+c+`
        vec4 result = vec4(0.);
        `+s+`
        `+u+`
        setOutput(result);
      }
    `}return n.prototype.getCustomSetupFunc=function(t){var e=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(r,o){e.startLoc==null&&(e.startLoc=r.getUniformLocationNoThrow(o,"start"),e.startLoc==null)||r.gl.uniform1iv(e.startLoc,t)}},n}(),ex=function(n,t,e){this.variableNames=["x"],this.outputShape=e;var r=e.length,o=He(e.length),i=He(e.length),a="";if(r===1)a="coords * strides + begin";else{var s=0;a=e.map(function(u,c){return s++,e.length===1?"coords * strides["+c+"] + begin["+c+"]":"coords["+(s-1)+"] * strides["+c+"] + begin["+c+"]"}).join(",")}this.userCode=`
      `+o+" begin = "+o+"("+n+`);
      `+o+" strides = "+o+"("+t+`);

      void main() {
        `+i+` coords = getOutputCoords();
        setOutput(getX(`+a+`));
      }
    `},tx=function(){function n(t){this.gpgpu=t,this.numUsedTextures=0,this.numFreeTextures=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}return n.prototype.acquireTexture=function(t,e,r){var o,i=sl(e,r),a=ul(t,i,r);if(a in this.freeTextures||(this.freeTextures[a]=[]),a in this.usedTextures||(this.usedTextures[a]=[]),this.freeTextures[a].length>0){this.numFreeTextures--,this.numUsedTextures++,this.log();var s=this.freeTextures[a].shift();return this.usedTextures[a].push(s),s}return this.numUsedTextures++,this.log(),i===Ot.PACKED_2X2_FLOAT32?o=this.gpgpu.createPackedMatrixTexture(t[0],t[1]):i===Ot.PACKED_2X2_FLOAT16?o=this.gpgpu.createFloat16PackedMatrixTexture(t[0],t[1]):i===Ot.UNPACKED_FLOAT32?o=this.gpgpu.createFloat32MatrixTexture(t[0],t[1]):i===Ot.UNPACKED_FLOAT16?o=this.gpgpu.createFloat16MatrixTexture(t[0],t[1]):i===Ot.PACKED_4X1_UNSIGNED_BYTE&&(o=this.gpgpu.createUnsignedBytesMatrixTexture(t[0],t[1])),this.usedTextures[a].push(o),o},n.prototype.releaseTexture=function(t,e,r,o){if(this.freeTextures!=null){var i=ul(e,sl(r,o),o);i in this.freeTextures||(this.freeTextures[i]=[]),this.freeTextures[i].push(t),this.numFreeTextures++,this.numUsedTextures--;var a=this.usedTextures[i],s=a.indexOf(t);if(s<0)throw new Error("Cannot release a texture that was never provided by this texture manager");a.splice(s,1),this.log()}},n.prototype.log=function(){if(this.logEnabled){var t=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",this.numFreeTextures+" / "+this.numUsedTextures,"("+t+")")}},n.prototype.getNumUsedTextures=function(){return this.numUsedTextures},n.prototype.getNumFreeTextures=function(){return this.numFreeTextures},n.prototype.dispose=function(){var t=this;if(this.freeTextures!=null){for(var e in this.freeTextures)this.freeTextures[e].forEach(function(r){t.gpgpu.deleteMatrixTexture(r)});for(var e in this.usedTextures)this.usedTextures[e].forEach(function(o){t.gpgpu.deleteMatrixTexture(o)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0}},n}();function sl(n,t){if(n===Lt.UPLOAD)return Ot.PACKED_2X2_FLOAT32;if(n===Lt.RENDER||n==null)return function(e){return G().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?e?Ot.PACKED_2X2_FLOAT32:Ot.UNPACKED_FLOAT32:e?Ot.PACKED_2X2_FLOAT16:Ot.UNPACKED_FLOAT16}(t);if(n===Lt.DOWNLOAD||n===Lt.PIXELS)return Ot.PACKED_4X1_UNSIGNED_BYTE;throw new Error("Unknown logical texture type "+n)}function ul(n,t,e){return n[0]+"_"+n[1]+"_"+t+"_"+e}var nx=function(n,t){this.variableNames=["A"];for(var e=new Array(n.length),r=0;r<e.length;r++)e[r]=n[r]*t[r];this.outputShape=e,this.rank=e.length;var o=He(this.rank),i=function(a){var s=a.length;if(s>5)throw Error("Tile for rank "+s+" is not yet supported");if(s===1)return"imod(resRC, "+a[0]+")";for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],c=[],l=0;l<a.length;l++)c.push("imod("+u[l]+", "+a[l]+")");return c.join()}(n);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+i+`));
      }
    `},rx=function(n,t){this.variableNames=["A"];for(var e=new Array(n.length),r=0;r<e.length;r++)e[r]=n[t[r]];this.outputShape=e,this.rank=e.length;var o=He(this.rank),i=function(a){var s=a.length;if(s>6)throw Error("Transpose for rank "+s+" is not yet supported");for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],c=new Array(s),l=0;l<a.length;l++)c[a[l]]=u[l];return c.join()}(t);this.userCode=`
    void main() {
      `+o+` resRC = getOutputCoords();
      setOutput(getA(`+i+`));
    }
    `},ox=function(n,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;for(var e=new Array(n.length),r=0;r<e.length;r++)e[r]=n[t[r]];if(this.outputShape=e,this.rank=e.length,this.rank>6)throw Error("Packed transpose for rank "+this.rank+" is not yet supported.");var o=He(this.rank),i=kh("rc",this.rank),a=new Array(this.rank);for(r=0;r<t.length;r++)a[t[r]]=i[r];var s="vec2("+a.slice(-2).join()+")",u="++"+i[this.rank-1]+" < "+e[this.rank-1],c="getChannel(getA("+a.join()+"), "+s+")";this.userCode=`
    void main() {
      `+o+` rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = `+c+`;
      if(`+u+`) {
        result[1] = `+c+`;
      }
      --`+i[this.rank-1]+`;
      if(++`+i[this.rank-2]+" < "+e[this.rank-2]+`) {
        result[2] = `+c+`;
        if(`+u+`) {
          result[3] = `+c+`;
        }
      }
      setOutput(result);
    }
    `},mu=1.7580993408473768,gu=1.0507009873554805,Ce=function(n,t){this.variableNames=["A"],this.outputShape=n,this.userCode=`
      float unaryOperation(float x) {
        `+t+`
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `},nn="if (isnan(x)) return x;",ix="return x;",cl="return abs(x);",Fh=nn+`
  return (x < 0.0) ? 0.0 : x;
`,Ph=nn+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,Mh="return (x >= 0.0) ? x : (exp(x) - 1.0);",ax=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = `+mu+`;
  float scale = `+gu+`;
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,ll="return -x;",fl="return ceil(x);",hl="return floor(x);",dl="return exp(x);",pl="return exp(x) - 1.0;",sx=nn+`
  return sin(x);
`,ux=nn+`
  return cos(x);
`,cx=nn+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,lx=nn+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,fx=nn+`
  return atan(x);
`,hx=nn+"return log(x + sqrt(x * x + 1.0));",dx=nn+`
  if (x < 1.0) return NAN;
  return log(x + sqrt(x * x - 1.0));`,px=nn+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
  return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,ii="return x;",vx="return x;",Oh=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Bh=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Lh=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,ho=function(n,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n,this.userCode=`
      vec4 unaryOperation(vec4 x) {
        `+t+`
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `},mx=function(n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=n;var t=n.length,e=At("rc",t),r=He(t),o=function(s,u){if(s===1)return"rc";for(var c="",l=0;l<s;l++)c+=u[l],l<s-1&&(c+=",");return c}(t,e),i=e.slice(-2),a=t<=1?"rc":"vec2("+i.join(",")+")";this.userCode=`
      void main() {
        `+r+` rc = getOutputCoords();
        vec4 packedInput = getA(`+o+`);

        setOutput(getChannel(packedInput, `+a+`));
      }
    `},ai={};function si(n,t){if(t===void 0&&(t=!1),n==="linear")return t?vx:ix;if(n==="relu")return t?Oh:Fh;if(n==="elu")return t?Lh:Mh;if(n==="relu6")return t?Bh:Ph;if(n==="prelu")return t?Nh:Th;throw new Error("Activation "+n+" has not been implemented for the WebGL backend.")}var gx=600,yx=function(n){function t(e){var r,o=n.call(this)||this;if(o.pendingRead=new WeakMap,o.pendingDisposal=new WeakSet,o.dataRefCount=new WeakMap,o.numBytesInGPU=0,o.uploadWaitMs=0,o.downloadWaitMs=0,o.warnedAboutMemory=!1,o.pendingDeletes=0,o.disposed=!1,!G().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");if(e==null){var i=wn(G().getNumber("WEBGL_VERSION"));o.binaryCache=((r=G().getNumber("WEBGL_VERSION"))in ai||(ai[r]={}),ai[r]),o.gpgpu=new A0(i),o.canvas=i.canvas,o.gpgpuCreatedLocally=!0}else o.gpgpu=e,o.binaryCache={},o.gpgpuCreatedLocally=!1,o.canvas=e.gl.canvas;return o.textureManager=new tx(o.gpgpu),o.numMBBeforeWarning=G().global.screen==null?1024:G().global.screen.height*G().global.screen.width*window.devicePixelRatio*gx/1024/1024,o.texData=new xh(o,P),o}return tn(t,n),t.prototype.numDataIds=function(){return this.texData.numDataIds()+(this.cpuBackend?this.cpuBackend.numDataIds():0)-this.pendingDeletes},t.prototype.write=function(e,r,o){if(G().getBool("DEBUG")&&this.checkNumericalProblems(e),o==="complex64"&&e!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");var i={};return this.texData.set(i,{shape:r,dtype:o,values:e,usage:Lt.UPLOAD}),i},t.prototype.move=function(e,r,o,i){if(G().getBool("DEBUG")&&this.checkNumericalProblems(r),i==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(e,{shape:o,dtype:i,values:r,usage:Lt.UPLOAD})},t.prototype.readSync=function(e){var r=this.texData.get(e),o=r.values,i=r.dtype,a=r.complexTensors,s=r.slice,u=r.shape,c=r.isPacked;if(s!=null){var l=void 0;l=c?new ho(u,ii):new Ce(u,ii);var f=this.runWebGLProgram(l,[{dataId:e,shape:u,dtype:i}],i),h=this.readSync(f.dataId);return this.disposeData(f.dataId),h}if(o!=null)return this.convertAndCacheOnCPU(e);if(i==="string")return o;var d,p,v=this.activeTimers!=null;return v&&(d=ln()),i==="complex64"?p=As(a.real.dataSync(),a.imag.dataSync()):p=this.getValuesFromTexture(e),v&&(this.downloadWaitMs+=ln()-d),this.convertAndCacheOnCPU(e,p)},t.prototype.read=function(e){return ae(this,void 0,void 0,function(){var r,o,i,a,s,u,c,l,f,h,d,p,v,m,g,b,x,y,w,_,k,S;return se(this,function(I){switch(I.label){case 0:if(this.pendingRead.has(e))return r=this.pendingRead.get(e),[2,new Promise(function(E){return r.push(E)})];if(o=this.texData.get(e),i=o.values,a=o.shape,s=o.slice,u=o.dtype,c=o.complexTensors,l=o.isPacked,s!=null)return f=void 0,f=l?new ho(a,ii):new Ce(a,ii),h=this.runWebGLProgram(f,[{dataId:e,shape:a,dtype:u}],u),d=this.read(h.dataId),this.disposeData(h.dataId),[2,d];if(i!=null)return[2,this.convertAndCacheOnCPU(e)];if(!G().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&G().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");return p=null,u!=="complex64"&&G().get("WEBGL_BUFFER_SUPPORTED")&&(v=this.decode(e),m=this.texData.get(v.dataId),p=(S=this.gpgpu).createBufferFromTexture.apply(S,[m.texture].concat(Co(a)))),this.pendingRead.set(e,[]),u==="complex64"?[3,2]:[4,this.gpgpu.createAndWaitForFence()];case 1:I.sent(),I.label=2;case 2:return u!=="complex64"?[3,4]:[4,Promise.all([c.real.data(),c.imag.data()])];case 3:return b=I.sent(),x=b[0],y=b[1],g=As(x,y),[3,5];case 4:p==null?g=this.getValuesFromTexture(e):(w=le(a),g=this.gpgpu.downloadFloat32MatrixFromBuffer(p,w)),I.label=5;case 5:return v!=null&&this.disposeData(v.dataId),_=this.convertAndCacheOnCPU(e,g),k=this.pendingRead.get(e),this.pendingRead.delete(e),k.forEach(function(E){return E(_)}),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e),this.pendingDeletes--),[2,_]}})})},t.prototype.checkNumericalProblems=function(e){if(e!=null)for(var r=0;r<e.length;r++){var o=e[r];if(!ag(o))throw G().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error("The value "+o+" cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'"):Error("The value "+o+" cannot be represented on this device.")}},t.prototype.getValuesFromTexture=function(e){var r,o=this.texData.get(e),i=o.shape,a=o.dtype,s=o.isPacked,u=le(i);if(G().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){var c=this.decode(e),l=this.texData.get(c.dataId),f=(r=this.gpgpu).downloadMatrixFromPackedTexture.apply(r,[l.texture].concat(Co(i))).subarray(0,u);return this.disposeData(c.dataId),f}var h=G().getBool("WEBGL_PACK")&&s===!0,d=h?La(i):i,p=h?new i0(d):new o0(d),v=this.runWebGLProgram(p,[{shape:d,dtype:a,dataId:e}],"float32"),m=this.texData.get(v.dataId),g=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(m.texture,m.texShape[0],m.texShape[1]).subarray(0,u);return this.disposeData(v.dataId),g},t.prototype.time=function(e){return ae(this,void 0,void 0,function(){var r,o,i,a,s,u,c;return se(this,function(l){switch(l.label){case 0:return r=this.activeTimers,o=[],i=!1,this.programTimersStack==null?(this.programTimersStack=o,i=!0):this.activeTimers.push(o),this.activeTimers=o,e(),a=to(this.activeTimers.map(function(f){return f.query})).filter(function(f){return f!=null}),s=to(this.activeTimers.map(function(f){return f.name})).filter(function(f){return f!=null}),this.activeTimers=r,i&&(this.programTimersStack=null),u={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null},G().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[4,Promise.all(a)]:[3,2];case 1:return c=l.sent(),u.kernelMs=Um(c),u.getExtraProfileInfo=function(){return c.map(function(f,h){return{name:s[h],ms:f}}).map(function(f){return f.name+": "+f.ms}).join(", ")},[3,3];case 2:u.kernelMs={error:"WebGL query timers are not supported in this environment."},l.label=3;case 3:return this.uploadWaitMs=0,this.downloadWaitMs=0,[2,u]}})})},t.prototype.memory=function(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU}},t.prototype.startTimer=function(){return G().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:ln(),endMs:null}},t.prototype.endTimer=function(e){return G().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),e):(e.endMs=ln(),e)},t.prototype.getQueryTime=function(e){return ae(this,void 0,void 0,function(){var r;return se(this,function(o){return G().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[2,this.gpgpu.waitForQueryAndGetTime(e)]:[2,(r=e).endMs-r.startMs]})})},t.prototype.disposeData=function(e){if(!this.pendingDisposal.has(e)){if(this.pendingRead.has(e))return this.pendingDisposal.add(e),void this.pendingDeletes++;if(this.texData.has(e)){this.releaseGPUData(e);var r=this.texData.get(e).complexTensors;r!=null&&(r.real.dispose(),r.imag.dispose()),this.texData.delete(e)}}},t.prototype.releaseGPUData=function(e){var r=this.texData.get(e),o=r.texture,i=r.dtype,a=r.texShape,s=r.usage,u=r.isPacked,c=r.slice,l=c&&c.origDataId||e,f=this.dataRefCount.get(l);f>1?this.dataRefCount.set(l,f-1):(this.dataRefCount.delete(l),o!=null&&(this.numBytesInGPU-=this.computeBytes(a,i),this.textureManager.releaseTexture(o,a,s,u)));var h=this.texData.get(e);h.texture=null,h.texShape=null,h.isPacked=!1,h.slice=null},t.prototype.getTexture=function(e){return this.uploadToGPU(e),this.texData.get(e).texture},t.prototype.getDataInfo=function(e){return this.texData.get(e)},t.prototype.getCPUBackend=function(){return G().getBool("WEBGL_CPU_FORWARD")?(this.cpuBackend==null&&(this.cpuBackend=P.findBackend("cpu")),this.cpuBackend):null},t.prototype.shouldExecuteOnCPU=function(e,r){var o=this;return r===void 0&&(r=128),this.getCPUBackend()!=null&&e.every(function(i){return o.texData.get(i.dataId).texture==null&&i.size<r})},t.prototype.getGPGPUContext=function(){return this.gpgpu},t.prototype.complex=function(e,r){var o=this.makeOutput(e.shape,"complex64");return this.texData.get(o.dataId).complexTensors={real:P.keep(e.clone()),imag:P.keep(r.clone())},o},t.prototype.real=function(e){return this.texData.get(e.dataId).complexTensors.real.clone()},t.prototype.imag=function(e){return this.texData.get(e.dataId).complexTensors.imag.clone()},t.prototype.slice=function(e,r,o){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.slice(e,r,o);if(le(o)===0)return ht([],o,e.dtype);var i=this.texData.get(e.dataId).isPacked,a=gh(e.shape,r,o);if(i||!a){var s=G().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Z0(o):new Q0(o),u=s.getCustomSetupFunc(r);return this.compileAndRun(s,[e],null,u)}return this.uploadToGPU(e.dataId),this.shallowSlice(e,r,o)},t.prototype.shallowSlice=function(e,r,o){var i=this.texData.get(e.dataId),a=this.makeOutput(o,e.dtype),s=this.texData.get(a.dataId);Object.assign(s,i),s.shape=o,s.dtype=e.dtype;var u=yh(r,e.strides);i.slice&&(u+=i.slice.flatOffset),s.slice={flatOffset:u,origDataId:i.slice&&i.slice.origDataId||e.dataId};var c=this.dataRefCount.get(s.slice.origDataId)||1;return this.dataRefCount.set(s.slice.origDataId,c+1),a},t.prototype.stridedSlice=function(e,r,o,i){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.stridedSlice(e,r,o,i);var a=lu(r,o,i);if(a.some(function(u){return u===0}))return ht([],a);var s=new ex(r,i,a);return this.compileAndRun(s,[e])},t.prototype.reverse=function(e,r){var o=G().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new $0(e.shape,r):new X0(e.shape,r);return this.compileAndRun(o,[e])},t.prototype.concat=function(e,r){if(e[0].dtype==="complex64"){var o=e.map(function(d){return jt(d)}),i=e.map(function(d){return hn(d)});return lt(this.concat(o,r),this.concat(i,r))}if(this.shouldExecuteOnCPU(e))return this.cpuBackend.concat(e,r);if(e.length===1)return e[0];if(e.length>G().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){var a=Math.floor(e.length/2),s=this.concat(e.slice(0,a),r),u=this.concat(e.slice(a),r);return this.concat([s,u],r)}if(G().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&e[0].rank>1){var c=new Gy(e.map(function(d){return d.shape}),r);return this.compileAndRun(c,e)}var l=ro(e.map(function(d){return d.shape}),r),f=e.map(function(d){return d.as2D(-1,le(d.shape.slice(r)))}),h=new Hy(f.map(function(d){return d.shape}));return this.compileAndRun(h,f).reshape(l)},t.prototype.neg=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.neg(e);if(G().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,ll,e.dtype);var r=new Ce(e.shape,ll);return this.compileAndRun(r,[e])},t.prototype.batchMatMul=function(e,r,o,i){var a=o?e.shape[2]:e.shape[1],s=i?r.shape[1]:r.shape[2],u=o?e.shape[1]:e.shape[2],c=e.shape[0];if((a===1||s===1)&&u>1e3){o&&(e=e.transpose([0,2,1])),i&&(r=r.transpose([0,2,1]));var l=s===1?e:e.as3D(c,u,1),f=s===1?2:1,h=s===1?r.as3D(c,1,u):r;return this.multiply(l,h).sum(f,!0)}var d=ft(e.dtype,r.dtype),p=new za(e.shape,[c,a,s],o,i);return this.compileAndRun(p,[e,r],d)},t.prototype.fusedBatchMatMul=function(e){var r=e.a,o=e.b,i=e.transposeA,a=e.transposeB,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=i?r.shape[2]:r.shape[1],f=a?o.shape[1]:o.shape[2],h=r.shape[0],d=ft(r.dtype,o.dtype),p=s!=null,v=c!=null,m=u?si(u,!0):null,g=new za(r.shape,[h,l,f],i,a,p,m,v),b=[r,o];return s&&b.push(s),c&&b.push(c),this.compileAndRun(g,b,d)},t.prototype.multiply=function(e,r){if(e.dtype==="complex64"){var o=this.texData.get(e.dataId),i=this.texData.get(r.dataId),a=new Qc(Ly,e.shape,r.shape),s=new Qc(Wy,e.shape,r.shape),u=[this.makeComplexComponentTensorInfo(e,o.complexTensors.real),this.makeComplexComponentTensorInfo(e,o.complexTensors.imag),this.makeComplexComponentTensorInfo(r,i.complexTensors.real),this.makeComplexComponentTensorInfo(r,i.complexTensors.imag)],c=this.compileAndRun(a,u),l=this.compileAndRun(s,u),f=this.complex(c,l);return c.dispose(),l.dispose(),f}if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.multiply(e,r);if(G().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,Zc,e.dtype);var h=new Xe(Zc,e.shape,r.shape);return this.compileAndRun(h,[e,r],e.dtype)},t.prototype.batchNormalization=function(e,r,o,i,a,s){var u=[e,r,o],c=null;s!=null&&(c=s.shape,u.push(s));var l=null;if(a!=null&&(l=a.shape,u.push(a)),G().getBool("WEBGL_PACK_NORMALIZATION")){var f=new By(e.shape,r.shape,o.shape,c,l,i);return this.compileAndRun(f,u)}var h=new Oy(e.shape,r.shape,o.shape,c,l,i);return this.compileAndRun(h,u)},t.prototype.localResponseNormalization4D=function(e,r,o,i,a){var s=G().getBool("WEBGL_PACK_NORMALIZATION")?new F0(e.shape,r,o,i,a):new T0(e.shape,r,o,i,a);return this.compileAndRun(s,[e])},t.prototype.LRNGrad=function(e,r,o,i,a,s,u){var c=new N0(r.shape,i,a,s,u);return this.compileAndRun(c,[r,o,e])},t.prototype.tile=function(e,r){if(e.dtype==="string"){var o=this.readSync(e.dataId).map(function(a){return Si(a)});return Rh(ye(e.shape,e.dtype,o),r)}var i=new nx(e.shape,r);return this.compileAndRun(i,[e])},t.prototype.pad=function(e,r,o){var i=G().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new U0(e.shape,r,o):new W0(e.shape,r,o);return this.compileAndRun(i,[e])},t.prototype.transpose=function(e,r){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.transpose(e,r);var o=G().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new ox(e.shape,r):new rx(e.shape,r);return this.compileAndRun(o,[e])},t.prototype.gather=function(e,r,o){if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.gather(e,r,o);var i=new f0(e.shape,r.size,o);return this.compileAndRun(i,[e,r])},t.prototype.batchToSpaceND=function(e,r,o){R(e.rank<=4,function(){return"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet"});var i=r.reduce(function(f,h){return f*h}),a=Fi(e.shape,r,i),s=Pi(a.length,r.length),u=Mi(e.shape,r,i),c=dh(o,r.length),l=ph(u,o,r.length);return e.reshape(a).transpose(s).reshape(u).slice(c,l)},t.prototype.spaceToBatchND=function(e,r,o){R(e.rank<=4,function(){return"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet"});var i=r.reduce(function(h,d){return h*d}),a=[[0,0]];a.push.apply(a,o);for(var s=1+r.length;s<e.shape.length;++s)a.push([0,0]);var u=e.pad(a),c=Fi(u.shape,r,i,!1),l=Pi(c.length,r.length,!1),f=Mi(u.shape,r,i,!1);return u.reshape(c).transpose(l).reshape(f)},t.prototype.reduce=function(e,r,o){var i=e.shape[0],a=e.shape[1],s=Wa(a),u=new V0({windowSize:s,inSize:a,batchSize:i},r),c=this.compileAndRun(u,[e],o);return c.shape[1]===1?c:this.reduce(c,r,o)},t.prototype.argReduce=function(e,r,o){o===void 0&&(o=null);var i=e.shape[0],a=e.shape[1];o!=null&&(i=o.shape[0],a=o.shape[1]);var s=Wa(a),u=new Sy({windowSize:s,inSize:a,batchSize:i},r,o==null),c=[e];o!=null&&c.push(o);var l=this.compileAndRun(u,c,"int32");return l.shape[1]===1?l:this.argReduce(e,r,l)},t.prototype.argReducePacked=function(e,r,o){o===void 0&&(o=null);var i=o!=null?o.shape:e.shape,a=Wa(i[i.length-1]),s=new Fy(i,a,r,o==null),u=o==null?[e]:[e,o],c=this.compileAndRun(s,u,"int32");return c.rank===e.rank?this.argReducePacked(e,r,c):c},t.prototype.sum=function(e,r){Mt("sum",r,e.rank);var o=pt(e.shape,r),i=o[0],a=le(o[1]),s=e.as2D(-1,a),u=Ta(e.dtype);return this.reduce(s,"sum",u).reshape(i)},t.prototype.prod=function(e,r){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.prod(e,r);var o=pt(e.shape,r),i=o[0],a=le(o[1]),s=e.as2D(-1,a),u=Ta(e.dtype);return this.reduce(s,"prod",u).reshape(i)},t.prototype.unsortedSegmentSum=function(e,r,o){var i=0,a=_n([i],e.rank),s=e;a!=null&&(s=e.transpose(a),i=Cn(1,e.rank)[0]);var u=function(d,p,v){for(var m=[],g=d.length,b=0;b<g;b++)b!==p?m.push(d[b]):m.push(v);return m}(s.shape,i,o),c=le([s.shape[i]]),l=s.as2D(-1,c),f=Ta(e.dtype),h=this.segOpCompute(l,"unsortedSegmentSum",r,f,o).reshape(u);return a!=null&&(h=h.transpose(au(a))),h},t.prototype.segOpCompute=function(e,r,o,i,a){var s=e.shape[0],u=e.shape[1],c=function(h,d){var p,v=!1;for(h<=mh?(p=h,v=!0):p=bs(h,Math.floor(Math.sqrt(h)));!v;)p>d||p===h?v=!0:p=bs(h,p+1);return p}(u,a),l=new Y0({windowSize:c,inSize:u,batchSize:s,numSegments:a}),f=this.compileAndRun(l,[e,o],i);return f.shape[1]===a?f:(o=Ni(0,a).tile([u/c]),this.segOpCompute(f,r,o,i,a))},t.prototype.argMinMaxReduce=function(e,r,o){var i=[r];if(Mt("arg"+o.charAt(0).toUpperCase()+o.slice(1),i,e.rank),!G().getBool("WEBGL_PACK_REDUCE")||e.rank<=2){var a=pt(e.shape,i),s=a[0],u=le(a[1]),c=e.as2D(-1,u);return this.argReduce(c,o).reshape(s)}return this.argReducePacked(e,o)},t.prototype.argMin=function(e,r){return this.argMinMaxReduce(e,r,"min")},t.prototype.argMax=function(e,r){return this.argMinMaxReduce(e,r,"max")},t.prototype.cumsum=function(e,r,o,i){if(r!==e.rank-1)throw new Error("WebGL cumsum shader expects an inner-most axis="+(e.rank-1)+" but got axis="+r);var a=new Zy(e.shape,o,i);return this.compileAndRun(a,[e])},t.prototype.equal=function(e,r){if(G().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return vec4(equal(a, b));
`,"bool");var o=new Xe("return float(a == b);",e.shape,r.shape);return this.compileAndRun(o,[e,r],"bool")},t.prototype.notEqual=function(e,r){if(G().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return vec4(notEqual(a, b));
`,"bool");var o=new Xe("return float(a != b);",e.shape,r.shape);return this.compileAndRun(o,[e,r],"bool")},t.prototype.less=function(e,r){if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.less(e,r);if(G().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return vec4(lessThan(a, b));
`,"bool");var o=new Xe("return float(a < b);",e.shape,r.shape);return this.compileAndRun(o,[e,r],"bool")},t.prototype.lessEqual=function(e,r){if(G().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return vec4(lessThanEqual(a, b));
`,"bool");var o=new Xe("return float(a <= b);",e.shape,r.shape);return this.compileAndRun(o,[e,r],"bool")},t.prototype.greater=function(e,r){if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.greater(e,r);if(G().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return vec4(greaterThan(a, b));
`,"bool");var o=new Xe("return float(a > b);",e.shape,r.shape);return this.compileAndRun(o,[e,r],"bool")},t.prototype.greaterEqual=function(e,r){if(G().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return vec4(greaterThanEqual(a, b));
`,"bool");var o=new Xe("return float(a >= b);",e.shape,r.shape);return this.compileAndRun(o,[e,r],"bool")},t.prototype.logicalNot=function(e){var r=new Ce(e.shape,"return float(!(x >= 1.0));");return this.compileAndRun(r,[e])},t.prototype.logicalAnd=function(e,r){if(G().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,"bool");var o=new Xe("return float(a >= 1.0 && b >= 1.0);",e.shape,r.shape);return this.compileAndRun(o,[e,r],"bool")},t.prototype.logicalOr=function(e,r){if(G().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,"bool");var o=new Xe("return float(a >= 1.0 || b >= 1.0);",e.shape,r.shape);return this.compileAndRun(o,[e,r],"bool")},t.prototype.select=function(e,r,o){var i=new J0(e.rank,r.shape,r.rank);return this.compileAndRun(i,[e,r,o],ft(r.dtype,o.dtype))},t.prototype.where=function(e){Di("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");var r=e.dataSync();return pu(e.shape,r)},t.prototype.topk=function(e,r,o){return Sh(e.dataSync(),e.shape,e.dtype,r)},t.prototype.min=function(e,r){Mt("min",r,e.rank);var o=pt(e.shape,r),i=o[0],a=le(o[1]),s=e.as2D(-1,a);return this.reduce(s,"min",s.dtype).reshape(i)},t.prototype.minimum=function(e,r){if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.minimum(e,r);var o=G().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new kn(`
  vec4 result = vec4(min(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,r.shape):new Xe(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return min(a, b);
`,e.shape,r.shape);return this.compileAndRun(o,[e,r])},t.prototype.mod=function(e,r){var o=G().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new kn(`
  vec4 result = mod(a, b);
  vec4 isNaN = vec4(equal(b, vec4(0.0)));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,r.shape):new Xe(`if (b == 0.0) return NAN;
  return mod(a, b);`,e.shape,r.shape);return this.compileAndRun(o,[e,r])},t.prototype.max=function(e,r){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.max(e,r);Mt("max",r,e.rank);var o=pt(e.shape,r),i=o[0],a=le(o[1]),s=e.as2D(-1,a);return this.reduce(s,"max",s.dtype).reshape(i)},t.prototype.maximum=function(e,r){if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.maximum(e,r);var o=G().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new kn(`
  vec4 result = vec4(max(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,r.shape):new Xe(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return max(a, b);
`,e.shape,r.shape);return this.compileAndRun(o,[e,r])},t.prototype.all=function(e,r){Mt("all",r,e.rank);var o=pt(e.shape,r),i=o[0],a=le(o[1]),s=e.as2D(-1,a);return this.reduce(s,"all",s.dtype).reshape(i)},t.prototype.any=function(e,r){Mt("any",r,e.rank);var o=pt(e.shape,r),i=o[0],a=le(o[1]),s=e.as2D(-1,a);return this.reduce(s,"any",s.dtype).reshape(i)},t.prototype.realDivide=function(e,r){if(G().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,"float32",!0);var o=new Xe(`
if (a == b) {
  return 1.0;
};
return a / b;`,e.shape,r.shape);return this.compileAndRun(o,[e,r],"float32")},t.prototype.floorDiv=function(e,r){if(G().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,"int32");var o=new Xe(`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,e.shape,r.shape);return this.compileAndRun(o,[e,r],"int32")},t.prototype.add=function(e,r){if(e.dtype==="complex64"&&r.dtype==="complex64")return this.complexSeparableBinaryOp(e,r,Ua);if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.add(e,r);var o=ft(e.dtype,r.dtype);if(G().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,Ua,o);var i=new Xe(Ua,e.shape,r.shape);return this.compileAndRun(i,[e,r],o)},t.prototype.packedUnaryOp=function(e,r,o){var i=new ho(e.shape,r);return this.compileAndRun(i,[e],o)},t.prototype.packedBinaryOp=function(e,r,o,i,a){a===void 0&&(a=!1);var s=new kn(o,e.shape,r.shape,a);return this.compileAndRun(s,[e,r],i)},t.prototype.complexSeparableBinaryOp=function(e,r,o){var i=this,a=this.texData.get(e.dataId),s=this.texData.get(r.dataId),u=[[a.complexTensors.real,s.complexTensors.real],[a.complexTensors.imag,s.complexTensors.imag]].map(function(h){var d=h[0],p=h[1],v=i.makeComplexComponentTensorInfo(e,d),m=i.makeComplexComponentTensorInfo(r,p),g=new Xe(o,e.shape,r.shape);return i.compileAndRun(g,[v,m],ft(d.dtype,p.dtype))}),c=u[0],l=u[1],f=this.complex(c,l);return c.dispose(),l.dispose(),f},t.prototype.makeComplexComponentTensorInfo=function(e,r){return{dataId:r.dataId,dtype:r.dtype,shape:e.shape}},t.prototype.addN=function(e){if(e.length===1)return e[0];if(e.length>G().get("WEBGL_MAX_TEXTURES_IN_SHADER")){var r=Math.floor(e.length/2),o=this.addN(e.slice(0,r)),i=this.addN(e.slice(r));return this.addN([o,i])}var a=e.map(function(c){return c.dtype}).reduce(function(c,l){return ft(c,l)}),s=e.map(function(c){return c.shape}),u=G().getBool("WEBGL_PACK")?new Ry(e[0].shape,s):new Iy(e[0].shape,s);return this.compileAndRun(u,e,a)},t.prototype.subtract=function(e,r){if(e.dtype==="complex64"&&r.dtype==="complex64")return this.complexSeparableBinaryOp(e,r,Va);if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.subtract(e,r);var o=ft(e.dtype,r.dtype);if(G().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,Va,e.dtype);var i=new Xe(Va,e.shape,r.shape);return this.compileAndRun(i,[e,r],o)},t.prototype.pow=function(e,r){var o=G().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new kn(`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,r.shape):new Xe(`
if(a < 0.0 && floor(b) < b){
  return NAN;
}
if (b == 0.0) {
  return 1.0;
}
return (round(mod(b, 2.0)) != 1) ?
    pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,e.shape,r.shape),i=ft(e.dtype,r.dtype);return this.compileAndRun(o,[e,r],i)},t.prototype.ceil=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.ceil(e);if(G().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,fl,e.dtype);var r=new Ce(e.shape,fl);return this.compileAndRun(r,[e])},t.prototype.floor=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.floor(e);if(G().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,hl,e.dtype);var r=new Ce(e.shape,hl);return this.compileAndRun(r,[e])},t.prototype.sign=function(e){var r=new Ce(e.shape,`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`);return this.compileAndRun(r,[e])},t.prototype.isNaN=function(e){var r=new Ce(e.shape,"return float(isnan(x));");return this.compileAndRun(r,[e],"bool")},t.prototype.isInf=function(e){var r=new Ce(e.shape,"return float(isinf(x));");return this.compileAndRun(r,[e],"bool")},t.prototype.isFinite=function(e){var r=new Ce(e.shape,"return float(!isnan(x) && !isinf(x));");return this.compileAndRun(r,[e],"bool")},t.prototype.round=function(e){var r=new Ce(e.shape,`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`);return this.compileAndRun(r,[e])},t.prototype.exp=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.exp(e);if(G().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,dl,e.dtype);var r=new Ce(e.shape,dl);return this.compileAndRun(r,[e])},t.prototype.expm1=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.expm1(e);if(G().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,pl,e.dtype);var r=new Ce(e.shape,pl);return this.compileAndRun(r,[e])},t.prototype.softmax=function(e,r){var o=ot([r],e.shape),i=this.max(e,o),a=Nt(i.shape,o),s=this.subtract(e,i.reshape(a)),u=this.exp(s),c=this.sum(u,o).reshape(a);return this.realDivide(u,c)},t.prototype.log=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.log(e);if(G().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,`
  vec4 result = log(x);
  vec4 isNaN = vec4(lessThan(x, vec4(0.0)));
  result.r = isNaN.r == 1.0 ? NAN : result.r;
  result.g = isNaN.g == 1.0 ? NAN : result.g;
  result.b = isNaN.b == 1.0 ? NAN : result.b;
  result.a = isNaN.a == 1.0 ? NAN : result.a;

  return result;
`,e.dtype);var r=new Ce(e.shape,`if (x < 0.0) return NAN;
  return log(x);`);return this.compileAndRun(r,[e])},t.prototype.log1p=function(e){var r=new Ce(e.shape,"return log(1.0 + x);");return this.compileAndRun(r,[e])},t.prototype.sqrt=function(e){var r=new Ce(e.shape,"return sqrt(x);");return this.compileAndRun(r,[e])},t.prototype.rsqrt=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.rsqrt(e);var r=new Ce(e.shape,"return inversesqrt(x);");return this.compileAndRun(r,[e])},t.prototype.reciprocal=function(e){var r=new Ce(e.shape,"return 1.0 / x;");return this.compileAndRun(r,[e])},t.prototype.relu=function(e){var r;return r=G().getBool("WEBGL_PACK")?new ho(e.shape,Oh):new Ce(e.shape,Fh),this.compileAndRun(r,[e])},t.prototype.relu6=function(e){var r;return r=G().getBool("WEBGL_PACK")?new ho(e.shape,Bh):new Ce(e.shape,Ph),this.compileAndRun(r,[e])},t.prototype.prelu=function(e,r){var o=G().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new kn(Nh,e.shape,r.shape):new Xe(Th,e.shape,r.shape);return this.compileAndRun(o,[e,r])},t.prototype.elu=function(e){if(G().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Lh,e.dtype);var r=new Ce(e.shape,Mh);return this.compileAndRun(r,[e])},t.prototype.eluDer=function(e,r){var o=G().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new kn(`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,e.shape,r.shape):new Xe("return (b >= 1.0) ? a : a * (b + 1.0);",e.shape,r.shape);return this.compileAndRun(o,[e,r])},t.prototype.selu=function(e){var r=new Ce(e.shape,ax);return this.compileAndRun(r,[e])},t.prototype.int=function(e){var r=new Ce(e.shape,"return float(int(x));");return this.compileAndRun(r,[e],"int32")},t.prototype.clip=function(e,r,o){var i,a=(i=G().getBool("WEBGL_PACK_CLIP")?new Vy(e.shape):new Uy(e.shape)).getCustomSetupFunc(r,o);return this.compileAndRun(i,[e],null,a)},t.prototype.abs=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.abs(e);if(G().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,cl,e.dtype);var r=new Ce(e.shape,cl);return this.compileAndRun(r,[e])},t.prototype.complexAbs=function(e){var r=this.texData.get(e.dataId),o=new zy(e.shape),i=[this.makeComplexComponentTensorInfo(e,r.complexTensors.real),this.makeComplexComponentTensorInfo(e,r.complexTensors.imag)];return this.compileAndRun(o,i)},t.prototype.sigmoid=function(e){var r=new Ce(e.shape,"return 1.0 / (1.0 + exp(-1.0 * x));");return this.compileAndRun(r,[e])},t.prototype.softplus=function(e){var r=new Ce(e.shape,`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`);return this.compileAndRun(r,[e])},t.prototype.sin=function(e){var r=new Ce(e.shape,sx);return this.compileAndRun(r,[e])},t.prototype.cos=function(e){var r=new Ce(e.shape,ux);return this.compileAndRun(r,[e])},t.prototype.tan=function(e){var r=new Ce(e.shape,"return tan(x);");return this.compileAndRun(r,[e])},t.prototype.asin=function(e){var r=new Ce(e.shape,cx);return this.compileAndRun(r,[e])},t.prototype.acos=function(e){var r=new Ce(e.shape,lx);return this.compileAndRun(r,[e])},t.prototype.atan=function(e){var r=new Ce(e.shape,fx);return this.compileAndRun(r,[e])},t.prototype.atan2=function(e,r){var o=G().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new kn(`
  vec4 result = atan(a, b);
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,r.shape):new Xe(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return atan(a, b);
`,e.shape,r.shape);return this.compileAndRun(o,[e,r])},t.prototype.sinh=function(e){var r=new Ce(e.shape,`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`);return this.compileAndRun(r,[e])},t.prototype.cosh=function(e){var r=new Ce(e.shape,`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`);return this.compileAndRun(r,[e])},t.prototype.tanh=function(e){var r=new Ce(e.shape,`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`);return this.compileAndRun(r,[e])},t.prototype.asinh=function(e){var r=new Ce(e.shape,hx);return this.compileAndRun(r,[e])},t.prototype.acosh=function(e){var r=new Ce(e.shape,dx);return this.compileAndRun(r,[e])},t.prototype.atanh=function(e){var r=new Ce(e.shape,px);return this.compileAndRun(r,[e])},t.prototype.erf=function(e){var r=new Ce(e.shape,`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = 0.3275911;
  float a1 = 0.254829592;
  float a2 = -0.284496736;
  float a3 = 1.421413741;
  float a4 = -1.453152027;
  float a5 = 1.061405429;

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`);return this.compileAndRun(r,[e])},t.prototype.step=function(e,r){var o=new Ce(e.shape,function(i){return i===void 0&&(i=0),nn+`
    return x > 0.0 ? 1.0 : float(`+i+`);
  `}(r));return this.compileAndRun(o,[e])},t.prototype.conv2dByMatMul=function(e,r,o,i,a,s){var u=e.shape,c=this.texData.get(e.dataId),l=o.inChannels,f=u[0]*u[1]*u[2],h=o.outChannels,d=o.dataFormat==="channelsLast",p=(f===1||h===1)&&l>1e3,v=u[2]%2!=0&&!!c.isPacked;if(p||!G().getBool("WEBGL_LAZILY_UNPACK")||!G().getBool("WEBGL_PACK_BINARY_OPERATIONS")||!v){var m=d?u[0]*u[1]*u[2]:u[0]*u[2]*u[3],g=this.reshape(e,[1,m,o.inChannels]),b=this.reshape(r,[1,o.inChannels,o.outChannels]);return this.reshape(this.fusedBatchMatMul({a:g,b,transposeA:!1,transposeB:!1,bias:i,activation:a,preluActivationWeights:s}),o.outShape)}var x=d?u[0]*u[1]*(u[2]+1):u[0]*u[2]*(u[3]+1),y={dataId:e.dataId,shape:[1,x,o.inChannels],dtype:e.dtype},w=c.shape;c.shape=c.shape.slice(),c.shape[c.shape.length-2]++,R(ri(c.shape,y.shape),function(){return"packed reshape "+c.shape+" to "+y.shape+" isn't free"});var _=this.reshape(r,[1,o.inChannels,o.outChannels]),k=this.fusedBatchMatMul({a:y,b:_,transposeA:!1,transposeB:!1,bias:i,activation:a,preluActivationWeights:s}),S=this.texData.get(k.dataId);return R(S.isPacked,function(){return"batchMatMul result is expected to be packed"}),c.shape=w,S.shape=o.outShape,P.makeTensorFromDataId(k.dataId,o.outShape,k.dtype)},t.prototype.conv2dWithIm2Row=function(e,r,o,i,a,s){var u=o.filterWidth,c=o.filterHeight,l=o.inChannels,f=o.outWidth,h=o.outHeight,d=o.dataFormat==="channelsLast",p=u*c*l,v=h*f,m=[p,v],g=e.squeeze([0]),b=r.reshape([1,p,-1]),x=new D0(m,g.shape,o),y=this.compileAndRun(x,[g]).reshape([1,m[0],m[1]]),w=i!=null,_=s!=null,k=a?si(a,!0):null,S=new za(y.shape,[1,v,o.outChannels],!0,!1,w,k,_),I=[y,b];i&&I.push(i),_&&I.push(s);var E=this.compileAndRun(S,I);return d?E.reshape([1,h,f,o.outChannels]):E.reshape([1,o.outChannels,h,f])},t.prototype.fusedConv2d=function(e){var r=e.input,o=e.filter,i=e.convInfo,a=e.bias,s=e.activation,u=e.preluActivationWeights;if(i.filterHeight===1&&i.filterWidth===1&&i.dilationHeight===1&&i.dilationWidth===1&&i.strideHeight===1&&i.strideWidth===1&&(i.padInfo.type==="SAME"||i.padInfo.type==="VALID"))return this.conv2dByMatMul(r,o,i,a,s,u);if(G().getBool("WEBGL_CONV_IM2COL")&&r.shape[0]===1)return this.conv2dWithIm2Row(r,o,i,a,s,u);var c=a!=null,l=u!=null,f=s?si(s,!1):null,h=new el(i,c,f,l),d=[r,o];return a&&d.push(a),u&&d.push(u),this.compileAndRun(h,d)},t.prototype.conv2d=function(e,r,o){if(o.filterHeight===1&&o.filterWidth===1&&o.dilationHeight===1&&o.dilationWidth===1&&o.strideHeight===1&&o.strideWidth===1&&(o.padInfo.type==="SAME"||o.padInfo.type==="VALID"))return this.conv2dByMatMul(e,r,o);if(G().getBool("WEBGL_CONV_IM2COL")&&e.shape[0]===1)return this.conv2dWithIm2Row(e,r,o);var i=new el(o);return this.compileAndRun(i,[e,r])},t.prototype.conv2dDerInput=function(e,r,o){var i=new qy(o);return this.compileAndRun(i,[e,r])},t.prototype.conv2dDerFilter=function(e,r,o){var i=new jy(o);return this.compileAndRun(i,[e,r])},t.prototype.fusedDepthwiseConv2D=function(e){var r,o=e.input,i=e.filter,a=e.convInfo,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=G().getBool("WEBGL_PACK_DEPTHWISECONV")&&a.strideWidth<=2&&a.outChannels/a.inChannels==1,f=u?si(u,l):null,h=[o,i],d=s!=null,p=c!=null;return d&&h.push(s),p&&h.push(c),l?(r=new nl(a,d,f,p),this.compileAndRun(r,h)):(r=new tl(a,d,f,p),this.compileAndRun(r,h))},t.prototype.depthwiseConv2D=function(e,r,o){var i;return G().getBool("WEBGL_PACK_DEPTHWISECONV")&&o.strideWidth<=2&&o.outChannels/o.inChannels==1?(i=new nl(o),this.compileAndRun(i,[e,r])):(i=new tl(o),this.compileAndRun(i,[e,r]))},t.prototype.depthwiseConv2DDerInput=function(e,r,o){var i=new Yy(o);return this.compileAndRun(i,[e,r])},t.prototype.depthwiseConv2DDerFilter=function(e,r,o){var i=new $y(o);return this.compileAndRun(i,[e,r])},t.prototype.conv3d=function(e,r,o){var i=new Jy(o);return this.compileAndRun(i,[e,r])},t.prototype.conv3dDerInput=function(e,r,o){var i=new Xy(o);return this.compileAndRun(i,[e,r])},t.prototype.conv3dDerFilter=function(e,r,o){var i=new Ky(o);return this.compileAndRun(i,[e,r])},t.prototype.maxPool=function(e,r){var o=new Ha(r,"max",!1);return this.compileAndRun(o,[e])},t.prototype.avgPool=function(e,r){var o=new Ha(r,"avg",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.maxPoolBackprop=function(e,r,o,i){var a=new Ha(i,"max",!0),s=this.compileAndRun(a,[r]),u=new P0(i),c=this.compileAndRun(u,[e,s],r.dtype);return s.dispose(),c},t.prototype.avgPoolBackprop=function(e,r,o){var i=new Py(o);return this.compileAndRun(i,[e],r.dtype)},t.prototype.cast=function(e,r){return _h(e,r,this)},t.prototype.unstack=function(e,r){for(var o=e.shape[r],i=new Array(e.rank-1),a=0,s=0;s<e.rank;s++)s!==r&&(i[a++]=e.shape[s]);var u=new Array(e.rank).fill(0),c=e.shape.slice();c[r]=1;var l=new Array(o);for(s=0;s<l.length;s++)u[r]=s,l[s]=this.slice(e,u,c).reshape(i);return l},t.prototype.avgPool3d=function(e,r){var o=new Ga(r,"avg",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.avgPool3dBackprop=function(e,r,o){var i=new My(o);return this.compileAndRun(i,[e],r.dtype)},t.prototype.maxPool3d=function(e,r){var o=new Ga(r,"max",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.maxPool3dBackprop=function(e,r,o,i){var a=new Ga(i,"max",!0),s=this.compileAndRun(a,[r]),u=new M0(i),c=this.compileAndRun(u,[e,s],r.dtype);return s.dispose(),c},t.prototype.reshape=function(e,r){var o=this.texData.get(e.dataId);if(o.isPacked&&!ri(e.shape,r)&&(o.texture===null||!ri(o.shape,r))){var i=this.packedReshape(e,r);return P.makeTensorFromDataId(i.dataId,i.shape,i.dtype)}return ks(e,r)},t.prototype.resizeBilinear=function(e,r,o,i){var a=G().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new j0(e.shape,r,o,i):new G0(e.shape,r,o,i);return this.compileAndRun(a,[e],"float32")},t.prototype.resizeBilinearBackprop=function(e,r,o){var i=new H0(e,r,o);return this.compileAndRun(i,[e])},t.prototype.resizeNearestNeighbor=function(e,r,o,i){var a=new K0(e.shape,r,o,i);return this.compileAndRun(a,[e])},t.prototype.resizeNearestNeighborBackprop=function(e,r,o){var i=new q0(e,r,o);return this.compileAndRun(i,[e])},t.prototype.multinomial=function(e,r,o,i){var a=r?e:Ln(e),s=a.shape[0],u=a.shape[1],c=new O0(s,u,o),l=c.getCustomSetupFunc(i);return this.compileAndRun(c,[a],"int32",l)},t.prototype.oneHot=function(e,r,o,i){var a=new B0(e.size,r,o,i);return this.compileAndRun(a,[e])},t.prototype.diag=function(e){var r=new r0(e.size);return this.compileAndRun(r,[e])},t.prototype.nonMaxSuppression=function(e,r,o,i,a){return Di("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead"),hu(e.dataSync(),r.dataSync(),o,i,a)},t.prototype.cropAndResize=function(e,r,o,i,a,s){var u=new Qy(e.shape,r.shape,i,a,s);return this.compileAndRun(u,[e,r,o],"float32")},t.prototype.depthToSpace=function(e,r,o){R(r>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+r});var i=e.shape[0],a=o==="NHWC"?e.shape[1]:e.shape[2],s=o==="NHWC"?e.shape[2]:e.shape[3],u=o==="NHWC"?e.shape[3]:e.shape[1],c=a*r,l=s*r,f=u/(r*r),h=new n0(o==="NHWC"?[i,c,l,f]:[i,f,c,l],r,o);return this.compileAndRun(h,[e])},t.prototype.split=function(e,r,o){return Ih(e,r,o)},t.prototype.scatterND=function(e,r,o){var i=Oi(0,e,o),a=i.sliceRank,s=i.numUpdates,u=i.sliceSize,c=i.strides,l=i.outputSize,f=[l/u,u],h=e.reshape([s,a]),d=r.reshape([s,u]);if(l===0)return ks(ht([]),o);var p=re(0),v=new al(s,a,h.rank,d.rank,c,f);return this.compileAndRun(v,[d,h,p]).reshape(o)},t.prototype.sparseToDense=function(e,r,o,i){var a=Oi(0,e,o),s=a.sliceRank,u=a.numUpdates,c=a.strides,l=a.outputSize,f=new al(u,s,e.rank,r.rank,c,[l,1]);return this.compileAndRun(f,[r,e,i]).reshape(o)},t.prototype.fft=function(e){return this.fftImpl(e,!1)},t.prototype.ifft=function(e){return this.fftImpl(e,!0)},t.prototype.fftImpl=function(e,r){var o=this.texData.get(e.dataId),i=new ol(u0,e.shape,r),a=new ol(c0,e.shape,r),s=[this.makeComplexComponentTensorInfo(e,o.complexTensors.real),this.makeComplexComponentTensorInfo(e,o.complexTensors.imag)],u=this.compileAndRun(i,s),c=this.compileAndRun(a,s),l=this.complex(u,c).as2D(e.shape[0],e.shape[1]);return u.dispose(),c.dispose(),l},t.prototype.gatherND=function(e,r){var o=r.shape,i=o[o.length-1],a=vh(e,r),s=a[0],u=a[1],c=a[2],l=a[3],f=r.reshape([u,i]),h=e.reshape([e.size/c,c]),d=new h0(i,l,[u,c]);return this.compileAndRun(d,[h,f]).reshape(s)},t.prototype.fill=function(e,r,o){if((o=o||Vo(r))==="string"){var i=Ri(o,le(e));return i.fill(r),P.makeTensor(i,e,o,this)}var a=new l0(e,r),s=a.getCustomSetupFunc(r);return this.compileAndRun(a,[],o,s)},t.prototype.onesLike=function(e){if(e.dtype==="string")throw new Error("onesLike is not supported under string dtype");return this.fill(e.shape,1,e.dtype)},t.prototype.zerosLike=function(e){return this.fill(e.shape,e.dtype==="string"?"":0,e.dtype)},t.prototype.linspace=function(e,r,o){return Ch(e,r,o)},t.prototype.makeTensorInfo=function(e,r){var o=this.write(null,e,r);return this.texData.get(o).usage=null,{dataId:o,shape:e,dtype:r}},t.prototype.makeOutput=function(e,r){var o=this.makeTensorInfo(e,r).dataId;return P.makeTensorFromDataId(o,e,r,this)},t.prototype.unpackTensor=function(e){var r=new mx(e.shape);return this.runWebGLProgram(r,[e],e.dtype)},t.prototype.packTensor=function(e){var r=new L0(e.shape);return this.runWebGLProgram(r,[e],e.dtype,null,!0)},t.prototype.packedReshape=function(e,r){var o=[ki(e.shape)].concat(Ai(e.shape)),i={dtype:e.dtype,shape:o,dataId:e.dataId},a=[ki(r)].concat(Ai(r)),s=new z0(a,o),u=this.runWebGLProgram(s,[i],e.dtype,null,!0);return{dataId:u.dataId,shape:r,dtype:u.dtype}},t.prototype.decode=function(e){var r,o=this.texData.get(e),i=o.isPacked,a=o.shape,s=o.dtype,u=La(a);return r=i?new t0(u):new e0(u),{dtype:s,shape:a,dataId:this.runWebGLProgram(r,[{shape:u,dtype:s,dataId:e}],s,null,!0).dataId}},t.prototype.runWebGLProgram=function(e,r,o,i,a){var s=this;a===void 0&&(a=!1);var u=this.makeTensorInfo(e.outputShape,o),c=this.texData.get(u.dataId);if(e.packedOutput&&(c.isPacked=!0),e.outPackingScheme===Po.DENSE){var l=Co(e.outputShape);c.texShape=l.map(function(x){return 2*x})}if(e.outTexUsage!=null&&(c.usage=e.outTexUsage),le(u.shape)===0)return c.values=No(u.dtype,0),u;var f=[],h=r.map(function(x){if(x.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");var y=s.texData.get(x.dataId);if(y.texture==null){if(!e.packedInputs&&le(x.shape)<=G().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:x.shape,texData:null,isUniform:!0,uniformValues:y.values};e.packedInputs&&(y.isPacked=!0,y.shape=x.shape)}else if(!!y.isPacked!=!!e.packedInputs)x=y.isPacked?s.unpackTensor(x):s.packTensor(x),f.push(x),y=s.texData.get(x.dataId);else if(y.isPacked&&!ri(y.shape,x.shape)){var w=x,_=x.shape;x.shape=y.shape,x=s.packedReshape(x,_),f.push(x),y=s.texData.get(x.dataId),w.shape=_}return s.uploadToGPU(x.dataId),{shape:x.shape,texData:y,isUniform:!1}});this.uploadToGPU(u.dataId);var d,p={shape:u.shape,texData:c,isUniform:!1},v=function(x,y,w){var _="";y.concat(w).forEach(function(I){var E=I.texData!=null&&I.texData.slice!=null&&I.texData.slice.flatOffset>0,F=I.isUniform?"uniform":I.texData.texShape;_+=I.shape+"_"+F+"_"+E});var k=x.userCode,S=x.constructor.name;return S+="_"+_+"_"+k}(e,h,p),m=this.getAndSaveBinary(v,function(){return function(x,y,w,_){var k=y.userCode,S=w.map(function(B,K){var Y={logicalShape:B.shape,texShape:B.isUniform?null:B.texData.texShape,isUniform:B.isUniform,isPacked:!B.isUniform&&B.texData.isPacked,flatOffset:null};return B.texData!=null&&B.texData.slice!=null&&B.texData.slice.flatOffset>0&&(Y.flatOffset=B.texData.slice.flatOffset),{name:y.variableNames[K],shapeInfo:Y}}),I=S.map(function(B){return B.shapeInfo}),E={logicalShape:_.shape,texShape:_.texData.texShape,isUniform:!1,isPacked:_.texData.isPacked,flatOffset:null},F=ky(S,E,k,y.packedInputs),N=x.createProgram(F),U=null,V=x.getUniformLocation(N,"NAN",!1);G().getNumber("WEBGL_VERSION")===1&&(U=x.getUniformLocation(N,"INFINITY",!1));for(var z={},H=0;H<y.variableNames.length;H++){var L=y.variableNames[H];z[L]=x.getUniformLocation(N,L,!1),z["offset"+L]=x.getUniformLocation(N,"offset"+L,!1)}return{program:y,source:F,webGLProgram:N,uniformLocations:z,inShapeInfos:I,outShapeInfo:E,infLoc:U,nanLoc:V}}(s.gpgpu,e,h,p)}),g=this.activeTimers!=null;if(g&&(d=this.startTimer()),function(x,y,w,_,k){il(y.inShapeInfos,w),il([y.outShapeInfo],[_]);var S=_.texData.texture,I=_.texData.texShape;_.texData.isPacked?x.setOutputPackedMatrixTexture(S,I[0],I[1]):x.setOutputMatrixTexture(S,I[0],I[1]),x.setProgram(y.webGLProgram),G().getNumber("WEBGL_VERSION")===1&&y.infLoc!==null&&x.gl.uniform1f(y.infLoc,1/0),y.nanLoc!==null&&x.gl.uniform1f(y.nanLoc,NaN),w.forEach(function(E,F){var N=y.program.variableNames[F],U=y.uniformLocations[N],V=y.uniformLocations["offset"+N];if(U!=null)if(E.isUniform)if(le(E.shape)<2)x.gl.uniform1f(U,E.uniformValues[0]);else{var z=E.uniformValues;z instanceof Float32Array||(z=new Float32Array(z)),x.gl.uniform1fv(U,z)}else E.texData.slice!=null&&V!=null&&x.gl.uniform1i(V,E.texData.slice.flatOffset),x.setInputMatrixTexture(E.texData.texture,U,F)}),k!=null&&k(x,y.webGLProgram),x.executeProgram()}(this.gpgpu,m,h,p,i),f.forEach(function(x){return s.disposeData(x.dataId)}),g&&(d=this.endTimer(d),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(d)})),!G().getBool("WEBGL_LAZILY_UNPACK")&&c.isPacked&&a===!1){var b=this.unpackTensor(u);return this.disposeData(u.dataId),b}return u},t.prototype.compileAndRun=function(e,r,o,i,a){a===void 0&&(a=!1),o=o||r[0].dtype;var s=this.runWebGLProgram(e,r,o,i,a);return P.makeTensorFromDataId(s.dataId,s.shape,s.dtype)},t.prototype.getAndSaveBinary=function(e,r){return e in this.binaryCache||(this.binaryCache[e]=r()),this.binaryCache[e]},t.prototype.getTextureManager=function(){return this.textureManager},t.prototype.dispose=function(){var e=this;this.disposed||(G().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(function(r){e.gpgpu.deleteProgram(e.binaryCache[r].webGLProgram),delete e.binaryCache[r]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)},t.prototype.floatPrecision=function(){var e=this;return this.floatPrecisionValue==null&&(this.floatPrecisionValue=ie(function(){if(!G().get("WEBGL_RENDER_FLOAT32_ENABLED")){var r=G().getBool("DEBUG");G().set("DEBUG",!1);var o=e.abs(re(1e-8)).dataSync()[0];if(G().set("DEBUG",r),o>0)return 32}return 16})),this.floatPrecisionValue},t.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},t.prototype.uploadToGPU=function(e){var r,o=this.texData.get(e),i=o.shape,a=o.dtype,s=o.values,u=o.texture,c=o.usage,l=o.isPacked;if(u==null){var f,h=this.activeTimers!=null;h&&(f=ln());var d=o.texShape;if(d==null&&(d=Eg(i,l),o.texShape=d),s!=null){var p=La(i),v=void 0,m=d[1],g=d[0],b=s instanceof Uint8Array;l?(m=(r=Ho(d[0],d[1]))[0],g=r[1],v=new s0(p,[g,m],b)):v=new a0(p,[g,m],b);var x=this.makeTensorInfo([g,m],a);this.texData.get(x.dataId).usage=b?Lt.PIXELS:Lt.UPLOAD,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(x.dataId),m,g,s);var y=this.runWebGLProgram(v,[x],a,null,!0),w=this.texData.get(y.dataId);o.texture=w.texture,o.texShape=w.texShape,o.isPacked=w.isPacked,o.usage=w.usage,this.disposeData(x.dataId),this.texData.delete(y.dataId),o.values=null,h&&(this.uploadWaitMs+=ln()-f)}else{var _=this.acquireTexture(d,c,a,l);o.texture=_}}},t.prototype.convertAndCacheOnCPU=function(e,r){var o=this.texData.get(e),i=o.dtype;return this.releaseGPUData(e),r!=null&&(o.values=function(a,s){if(s==="float32"||s==="complex64")return a;if(s==="int32"||s==="bool"){for(var u=s==="int32"?new Int32Array(a.length):new Uint8Array(a.length),c=0;c<u.length;++c)u[c]=Math.round(a[c]);return u}throw new Error("Unknown dtype "+s)}(r,i)),o.values},t.prototype.acquireTexture=function(e,r,o,i){if(this.numBytesInGPU+=this.computeBytes(e,o),!this.warnedAboutMemory&&this.numBytesInGPU>1024*this.numMBBeforeWarning*1024){var a=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn("High memory usage in GPU: "+a+" MB, most likely due to a memory leak")}return this.textureManager.acquireTexture(e,r,i)},t.prototype.computeBytes=function(e,r){return e[0]*e[1]*Jf(r)},t}(bh);oh()&&P.registerBackend("webgl",function(){return new yx},2);var xx=T({square_:function(n){var t=C(n,"x","square"),e=[t];return P.runKernelFunc(function(r,o){return o([t]),r.square(t)},{x:t},null,"Square",{},e,[])}}),Oo="SquaredDifference",Wh=T({squaredDifference_:function(n,t){var e,r=C(n,"a","squaredDifference"),o=C(t,"b","squaredDifference");e=Ke(r,o),r=e[0],o=e[1],Te(r.shape,o.shape);var i={a:r,b:o},a=[r,o];return P.runKernelFunc(function(s,u){var c=s.squaredDifference(r,o);return u([r,o]),c},i,function(s,u){var c=u[0],l=u[1],f=re(2);return{a:function(){return s.mul(c.sub(l).mul(f))},b:function(){return s.mul(l.sub(c).mul(f))}}},Oo,{},a,[])}}),bx=T({abs_:function(n){var t=C(n,"x","abs");return t.dtype==="complex64"?P.runKernelFunc(function(e){return e.complexAbs(t)},{$x:t}):P.runKernelFunc(function(e,r){var o=e.abs(t);return r([t]),o},{x:t},function(e,r){var o=r[0];return{x:function(){return e.mul(o.toFloat().step(-1))}}},"Abs")}}),wx=T({acos_:function(n){var t=C(n,"x","acos");return P.runKernelFunc(function(e,r){var o=e.acos(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.divStrict(re(1).sub(o.toFloat().square()).sqrt()).neg()}}})}}),_x=T({acosh_:function(n){var t=C(n,"x","acosh");return P.runKernelFunc(function(e,r){var o=e.acosh(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.divStrict(o.toFloat().square().sub(1).sqrt())}}})}}),Cx=T({asin_:function(n){var t=C(n,"x","asin");return P.runKernelFunc(function(e,r){var o=e.asin(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.divStrict(re(1).sub(o.toFloat().square()).sqrt())}}})}}),Ex=T({asinh_:function(n){var t=C(n,"x","asinh");return P.runKernelFunc(function(e,r){var o=e.asinh(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.divStrict(re(1).add(o.toFloat().square()).sqrt())}}})}}),Ix=T({atan_:function(n){var t=C(n,"x","atan");return P.runKernelFunc(function(e,r){var o=e.atan(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.div(o.toFloat().square().add(1))}}})}}),Rx=T({atanh_:function(n){var t=C(n,"x","atanh");return P.runKernelFunc(function(e,r){var o=e.atanh(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.div(re(1).sub(o.toFloat().square()))}}})}}),Sx=T({ceil_:function(n){var t=C(n,"x","ceil");return P.runKernelFunc(function(e){return e.ceil(t)},{$x:t},function(e){return{$x:function(){return Fe(e)}}})}}),yu=T({clipByValue_:function(n,t,e){var r=C(n,"x","clipByValue");R(t<=e,function(){return"Error in clip: min ("+t+") must be less than or equal to max ("+e+")."});var o=[r],i={min:t,max:e};return P.runKernelFunc(function(a,s){var u=a.clip(r,t,e);return s([r]),u},{x:r},function(a,s){var u=s[0];return{x:function(){return a.where(u.greaterEqual(t).logicalAnd(u.lessEqual(e)),Fe(a))}}},"ClipByValue",i,o)}}),kx=T({cos_:function(n){var t=C(n,"x","cos"),e=[t];return P.runKernelFunc(function(r,o){var i=r.cos(t);return o([t]),i},{x:t},function(r,o){var i=o[0];return{x:function(){return i.toFloat().sin().neg().mul(r)}}},"Cos",{},e)}}),Ax=T({cosh_:function(n){var t=C(n,"x","cosh");return P.runKernelFunc(function(e,r){var o=e.cosh(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return o.toFloat().sinh().mulStrict(e)}}})}}),Dx=T({erf_:function(n){var t=C(n,"x","erf");return R(t.dtype==="int32"||t.dtype==="float32",function(){return"Input dtype must be `int32` or `float32`."}),t.dtype==="int32"&&(t=t.toFloat()),P.runKernelFunc(function(e,r){var o=e.erf(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.mul(o.square().neg().exp().mul(2/Math.sqrt(Math.PI)))}}})}}),Ds=T({exp_:function(n){var t=C(n,"x","exp");return P.runKernelFunc(function(e,r){var o=e.exp(t);return r([o]),o},{x:t},function(e,r){return{x:function(){return e.mulStrict(r[0])}}},"Exp",{},[],[!0])}}),Tx=T({expm1_:function(n){var t=C(n,"x","expm1");return P.runKernelFunc(function(e,r){var o=e.expm1(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.mul(o.exp())}}})}}),Nx=T({floor_:function(n){var t=C(n,"x","floor");return P.runKernelFunc(function(e){return e.floor(t)},{$x:t},function(e){return{$x:function(){return Fe(e)}}})}}),Fx=T({log_:function(n){var t=C(n,"x","log"),e=[t];return P.runKernelFunc(function(r,o){var i=r.log(t);return o([t]),i},{x:t},function(r,o){var i=o[0];return{x:function(){return r.div(i.toFloat())}}},"Log",{},e)}}),Px=T({log1p_:function(n){var t=C(n,"x","log1p");return P.runKernelFunc(function(e,r){var o=e.log1p(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.div(o.add(1))}}})}}),Mx=T({logSigmoid_:function(n){var t=C(n,"x","logSigmoid");return P.runKernelFunc(function(e,r){var o=e.softplus(t.neg()).neg();return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.mul(o.neg().sigmoid())}}})}}),Ui=T({neg_:function(n){var t=C(n,"x","neg"),e=[t];return P.runKernelFunc(function(r){return r.neg(t)},{x:t},function(r){return{x:function(){return r.neg()}}},"Neg",{},e)}}),Ox=T({reciprocal_:function(n){var t=C(n,"x","reciprocal");return P.runKernelFunc(function(e,r){var o=e.reciprocal(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.div(o.square().neg())}}})}}),Bx=T({round_:function(n){var t=C(n,"x","round");return P.runKernelFunc(function(e){return e.round(t)},{$x:t},function(e){return{$x:function(){return Fe(e)}}})}}),Uh=T({rsqrt_:function(n){var t=C(n,"x","rsqrt"),e=[t];return P.runKernelFunc(function(r,o){var i=r.rsqrt(t);return o([t]),i},{x:t},function(r,o){var i=o[0];return{x:function(){return r.div(i.pow(1.5).mul(2)).neg()}}},"Rsqrt",{},e)}}),Vh=T({sigmoid_:function(n){var t=C(n,"x","sigmoid");return P.runKernelFunc(function(e,r){var o=e.sigmoid(t);return r([o]),o},{x:t},function(e,r){var o=r[0];return{x:function(){return e.mul(o.mul(re(1).sub(o)))}}},"Sigmoid")}}),Lx=T({sign_:function(n){var t=C(n,"x","sign");return P.runKernelFunc(function(e){return e.sign(t)},{$x:t},function(e){return{$x:function(){return Fe(e)}}})}}),Wx=T({isNaN_:function(n){var t=C(n,"x","isNaN");return P.runKernelFunc(function(e){return e.isNaN(t)},{$x:t},function(e){return{$x:function(){return Fe(e)}}})}}),Ux=T({isInf_:function(n){var t=C(n,"x","isInf");return P.runKernelFunc(function(e){return e.isInf(t)},{$x:t},function(e){return{$x:function(){return Fe(e)}}})}}),Vx=T({isFinite_:function(n){var t=C(n,"x","isFinite");return P.runKernelFunc(function(e){return e.isFinite(t)},{$x:t},function(e){return{$x:function(){return Fe(e)}}})}}),zx=T({sin_:function(n){var t=C(n,"x","sin"),e=[t];return P.runKernelFunc(function(r,o){var i=r.sin(t);return o([t]),i},{x:t},function(r,o){var i=o[0];return{x:function(){return i.toFloat().cos().mul(r)}}},"Sin",{},e)}}),Hx=T({sinh_:function(n){var t=C(n,"x","sinh");return P.runKernelFunc(function(e,r){var o=e.sinh(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return o.toFloat().cosh().mulStrict(e)}}})}}),Gx=T({softplus_:function(n){var t=C(n,"x","softplus");return P.runKernelFunc(function(e,r){var o=e.softplus(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.mul(o.sigmoid())}}})}}),jx=T({sqrt_:function(n){var t=C(n,"x","sqrt");return P.runKernelFunc(function(e,r){var o=e.sqrt(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.div(o.toFloat().sqrt().mul(2))}}})}}),qx=T({step_:function(n,t){t===void 0&&(t=0);var e=C(n,"x","step");return P.runKernelFunc(function(r){return r.step(e,t)},{$x:e},function(r){return{$x:function(){return Fe(r)}}})}}),Kx=T({tan_:function(n){var t=C(n,"x","tan");return P.runKernelFunc(function(e,r){var o=e.tan(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.div(o.cos().square())}}})}}),Xx=T({tanh_:function(n){var t=C(n,"x","tanh");return P.runKernelFunc(function(e,r){var o=e.tanh(t);return r([o]),o},{x:t},function(e,r){var o=r[0];return{x:function(){return re(1).sub(o.square()).mulStrict(e)}}},"Tanh",{},null,[!0])}});function zh(n,t,e,r,o,i){var a,s,u=C(n,"x","batchNorm"),c=C(t,"mean","batchNorm"),l=C(e,"variance","batchNorm");return o!=null&&(a=C(o,"scale","batchNorm")),r!=null&&(s=C(r,"offset","batchNorm")),R(u.rank===2,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),R(c.rank===2||c.rank===1,function(){return"Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank "+c.rank+"."}),R(l.rank===2||l.rank===1,function(){return"Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank "+l.rank+"."}),a!=null&&R(a.rank===2||a.rank===1,function(){return"Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank "+a.rank+"."}),s!=null&&R(s.rank===2||s.rank===1,function(){return"Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank "+s.rank+"."}),jo(u,c,l,s,a,i)}function Hh(n,t,e,r,o,i){var a,s,u=C(n,"x","batchNorm"),c=C(t,"mean","batchNorm"),l=C(e,"variance","batchNorm");return o!=null&&(a=C(o,"scale","batchNorm")),r!=null&&(s=C(r,"offset","batchNorm")),R(u.rank===3,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),R(c.rank===3||c.rank===1,function(){return"Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank "+c.rank+"."}),R(l.rank===3||l.rank===1,function(){return"Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank "+l.rank+"."}),a!=null&&R(a.rank===3||a.rank===1,function(){return"Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank "+a.rank+"."}),s!=null&&R(s.rank===3||s.rank===1,function(){return"Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank "+s.rank+"."}),jo(u,c,l,s,a,i)}function Gh(n,t,e,r,o,i){var a,s,u=C(n,"x","batchNorm"),c=C(t,"mean","batchNorm"),l=C(e,"variance","batchNorm");return o!=null&&(a=C(o,"scale","batchNorm")),r!=null&&(s=C(r,"offset","batchNorm")),R(u.rank===4,function(){return"Error in batchNorm4D: x must be rank 4 but got rank "+u.rank+"."}),R(c.rank===4||c.rank===1,function(){return"Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank "+c.rank+"."}),R(l.rank===4||l.rank===1,function(){return"Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank "+l.rank+"."}),a!=null&&R(a.rank===4||a.rank===1,function(){return"Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank "+a.rank+"."}),s!=null&&R(s.rank===4||s.rank===1,function(){return"Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank "+s.rank+"."}),jo(u,c,l,s,a,i)}function jo(n,t,e,r,o,i){i==null&&(i=.001);var a,s,u,c=C(n,"x","batchNorm"),l=C(t,"mean","batchNorm"),f=C(e,"variance","batchNorm");o!=null&&(a=C(o,"scale","batchNorm")),r!=null&&(s=C(r,"offset","batchNorm")),R(l.rank===f.rank,function(){return"Batch normalization gradient requires mean and variance to have equal ranks."}),R(s==null||l.rank===s.rank,function(){return"Batch normalization gradient requires mean and offset to have equal ranks."}),R(a==null||l.rank===a.rank,function(){return"Batch normalization gradient requires mean and scale to have equal ranks."}),u=c.rank===0||c.rank===1?c.as4D(1,1,1,c.size):c.rank===2?c.as4D(1,1,c.shape[0],c.shape[1]):c.rank===3?c.as4D(1,c.shape[0],c.shape[1],c.shape[2]):c;var h=[c,l,f,a];return P.runKernelFunc(function(d,p){var v=d.batchNormalization(u,ui(l),ui(f),i,ui(a),ui(s));return p([c,l,f,a]),v},{x:c,mean:l,variance:f,scale:a,offset:s},function(d,p){var v=p,m=v[0],g=v[1],b=v[2],x=v[3],y=x??re(1),w=nt(g.shape,u.shape),_=[];if(g.rank===1){for(var k=0;k<u.shape.length-1;++k)_.push(u.shape[k]);_.push(1)}var S=m.sub(g),I=d.mul(y),E=Uh(b.add(re(i))),F=E.mul(E).mul(E).mul(re(-.5));return{x:function(){return g.rank===1?d.mul(Kr(E.as4D(1,1,1,g.shape[0]),_)).mul(y).reshape(m.shape):d.mul(E).mul(y).reshape(m.shape)},mean:function(){var N=E.mul(re(-1)).mul(I);return g.rank===1&&(N=N.sum(w)),N.reshape(g.shape)},variance:function(){var N=F.mul(S).mul(I);return g.rank===1&&(N=N.sum(w)),N.reshape(g.shape)},scale:function(){var N=S.mul(E),U=d.mul(N);return g.rank===1&&(U=U.sum(w)),U.reshape(g.shape)},offset:function(){var N=d;return g.rank===1&&(N=N.sum(w)),N.reshape(g.shape)}}},"BatchNormalization",{varianceEpsilon:i},h).reshape(c.shape)}function ui(n){return n==null?null:n.rank===0?n.as1D():n.rank===1?n:n.rank===2?n.as4D(1,1,n.shape[0],n.shape[1]):n.rank===3?n.as4D(1,n.shape[0],n.shape[1],n.shape[2]):n}function aa(){ih("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon")}var $x=T({batchNormalization2d_:function(n,t,e,r,o,i){return r===void 0&&(r=.001),aa(),zh(n,t,e,i,o,r)}}),Yx=T({batchNormalization3d_:function(n,t,e,r,o,i){return r===void 0&&(r=.001),aa(),Hh(n,t,e,i,o,r)}}),Jx=T({batchNormalization4d_:function(n,t,e,r,o,i){return r===void 0&&(r=.001),aa(),Gh(n,t,e,i,o,r)}}),Qx=T({batchNormalization_:function(n,t,e,r,o,i){return r===void 0&&(r=.001),aa(),jo(n,t,e,i,o,r)}}),jh=T({batchNorm_:jo}),Zx=T({batchNorm2d_:zh}),eb=T({batchNorm3d_:Hh}),tb=T({batchNorm4d_:Gh}),sa=T({logicalAnd_:function(n,t){var e=C(n,"a","logicalAnd","bool"),r=C(t,"b","logicalAnd","bool");return Te(e.shape,r.shape),P.runKernelFunc(function(o){return o.logicalAnd(e,r)},{a:e,b:r},null,"LogicalAnd")}}),nb=T({logicalNot_:function(n){var t=C(n,"x","logicalNot","bool");return P.runKernelFunc(function(e){return e.logicalNot(t)},{$x:t})}}),qh=T({logicalOr_:function(n,t){var e=C(n,"a","logicalOr","bool"),r=C(t,"b","logicalOr","bool");return Te(e.shape,r.shape),P.runKernelFunc(function(o){return o.logicalOr(e,r)},{$a:e,$b:r})}}),rb=T({logicalXor_:function(n,t){var e=C(n,"a","logicalXor","bool"),r=C(t,"b","logicalXor","bool");return Te(e.shape,r.shape),qh(n,t).logicalAnd(sa(n,t).logicalNot())}}),wr=T({where_:function(n,t,e){var r=C(t,"a","where"),o=C(e,"b","where"),i=C(n,"condition","where","bool");return Le(r.shape,o.shape,"Error in where: "),i.rank===1?R(i.shape[0]===r.shape[0],function(){return"The first dimension of `a` must match the size of `condition`."}):Le(i.shape,o.shape,"Error in where: "),P.runKernelFunc(function(a,s){var u=a.select(i,r,o);return s([i]),u},{$condition:i,$a:r,$b:o},function(a,s){var u=s[0];return{$condition:function(){return Fe(u).toFloat()},$a:function(){return a.mul(u.cast(a.dtype))},$b:function(){return a.mul(u.logicalNot().cast(a.dtype))}}})}}),Kh=function(n){return ae(this,void 0,void 0,function(){var t,e,r;return se(this,function(o){switch(o.label){case 0:return[4,(t=C(n,"condition","whereAsync","bool")).data()];case 1:return e=o.sent(),r=pu(t.shape,e),n!==t&&t.dispose(),[2,r]}})})},Ae=T({add_:function(n,t){var e,r=C(n,"a","add"),o=C(t,"b","add");e=Ke(r,o),r=e[0],o=e[1];var i=Te(r.shape,o.shape);return P.runKernelFunc(function(a){return a.add(r,o)},{a:r,b:o},function(a){return{a:function(){var s=a,u=nt(r.shape,i);return u.length>0&&(s=s.sum(u)),s.reshape(r.shape)},b:function(){var s=a,u=nt(o.shape,i);return u.length>0&&(s=s.sum(u)),s.reshape(o.shape)}}},"Add")}}),ob=T({addN_:function(n){R(Array.isArray(n),function(){return"The argument passed to tf.addN() must be a list of tensors"}),R(n.length>=1,function(){return"Must pass at least one tensor to tf.addN(), but got "+n.length});var t=n.map(function(o,i){return C(o,"tensors"+i,"addN")}),e=t[0];t.forEach(function(o){if(o.dtype!==e.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),t.forEach(function(o){if(!st(o.shape,e.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});var r=t;return P.runKernelFunc(function(o){return o.addN(t)},r,function(o){var i={};return t.forEach(function(a,s){i[s]=function(){return o.clone()}}),i},"AddN")}}),ib=T({addStrict_:function(n,t){var e=C(n,"a","addStrict"),r=C(t,"b","addStrict");return Le(e.shape,r.shape,"Error in addStrict: "),e.add(r)}}),ab=T({atan2_:function(n,t){var e,r=C(n,"a","atan2"),o=C(t,"b","atan2");e=Ke(r,o),r=e[0],o=e[1];var i=Te(r.shape,o.shape);return P.runKernelFunc(function(a,s){var u=a.atan2(r,o);return s([r,o]),u},{$a:r,$b:o},function(a,s){var u=s[0],c=s[1];return{$a:function(){var l=Ae(u.square(),c.square()),f=a.mul(c.div(l)),h=nt(u.shape,i);return h.length>0&&(f=f.sum(h)),f.reshape(u.shape)},$b:function(){var l=Ae(u.square(),c.square()),f=Ui(a.mul(u.div(l))),h=nt(c.shape,i);return h.length>0&&(f=f.sum(h)),f.reshape(c.shape)}}})}}),Yt=T({div_:function(n,t){var e,r=C(n,"a","div"),o=C(t,"b","div");if(e=Ke(r,o),r=e[0],o=e[1],r.dtype==="int32"&&o.dtype==="int32")return Xh(r,o);var i=Te(r.shape,o.shape);return P.runKernelFunc(function(a,s){var u=a.realDivide(r,o);return s([r,o]),u},{a:r,b:o},function(a,s){var u=s[0],c=s[1];return{a:function(){var l=a.div(c.toFloat()),f=nt(u.shape,i);return f.length>0?l.sum(f).reshape(u.shape):l},b:function(){var l=a.mul(u.toFloat()),f=nt(c.shape,i);f.length>0&&(l=l.sum(f).reshape(c.shape));var h=c.square();return l.div(h.toFloat()).neg()}}},"Div")}}),sb=T({divNoNan_:function(n,t){var e,r=C(n,"a","div"),o=C(t,"b","div");r=(e=Ke(r,o))[0],o=e[1];var i=Yt(r,o),a=Fe(i),s=o.equal(a);return wr(s,a,i)}}),ub=T({divStrict_:function(n,t){var e=C(n,"a","div"),r=C(t,"b","div");return Le(e.shape,r.shape,"Error in divideStrict: "),e.div(r)}}),Xh=T({floorDiv_:function(n,t){var e,r=C(n,"a","floorDiv"),o=C(t,"b","floorDiv");e=Ke(r,o),r=e[0],o=e[1];var i=Te(r.shape,o.shape);return P.runKernelFunc(function(a,s){var u=a.floorDiv(r,o);return s([r,o]),u},{a:r,b:o},function(a,s){var u=s[0],c=s[1];return{a:function(){var l=a.div(c.toFloat()),f=nt(u.shape,i);return f.length>0?l.sum(f).reshape(u.shape):l},b:function(){var l=a.mul(u.toFloat()),f=nt(c.shape,i);f.length>0&&(l=l.sum(f).reshape(c.shape));var h=c.square();return l.div(h.toFloat()).neg()}}},"FloorDiv")}}),xu=T({maximum_:function(n,t){var e,r=C(n,"a","maximum"),o=C(t,"b","maximum");return e=Ke(r,o),r=e[0],o=e[1],r.dtype==="bool"&&(r=r.toInt(),o=o.toInt()),Te(r.shape,o.shape),P.runKernelFunc(function(i,a){var s=i.maximum(r,o);return a([r,o]),s},{a:r,b:o},function(i,a){var s=a[0],u=a[1];return{a:function(){return i.mul(s.greaterEqual(u).toFloat())},b:function(){return i.mul(s.less(u).toFloat())}}},"Maximum")}}),cb=T({maximumStrict_:function(n,t){var e=C(n,"a","maximumStrict"),r=C(t,"b","maximumStrict");return Le(e.shape,r.shape,"Error in maximumStrict: "),e.maximum(r)}}),$h=T({minimum_:function(n,t){var e,r=C(n,"a","minimum"),o=C(t,"b","minimum");return e=Ke(r,o),r=e[0],o=e[1],r.dtype==="bool"&&(r=r.toInt(),o=o.toInt()),Te(r.shape,o.shape),P.runKernelFunc(function(i,a){var s=i.minimum(r,o);return a([r,o]),s},{a:r,b:o},function(i,a){var s=a[0],u=a[1];return{a:function(){return i.mul(s.lessEqual(u).toFloat())},b:function(){return i.mul(s.greater(u).toFloat())}}},"Minimum")}}),lb=T({minimumStrict_:function(n,t){var e=C(n,"a","minimumStrict"),r=C(t,"b","minimumStrict");return Le(e.shape,r.shape,"Error in minimumStrict: "),e.minimum(r)}}),fb=T({mod_:function(n,t){var e,r=C(n,"a","mod"),o=C(t,"b","mod");e=Ke(r,o),r=e[0],o=e[1];var i=Te(r.shape,o.shape);return P.runKernelFunc(function(a,s){var u=a.mod(r,o);return s([r,o]),u},{$a:r,$b:o},function(a,s){var u=s[0],c=s[1];return{$a:function(){var l=nt(u.shape,i);return l.length>0?a.sum(l).reshape(u.shape):a},$b:function(){var l=a.mul(u.div(c).floor().neg()),f=nt(c.shape,i);return f.length>0?l.sum(f).reshape(c.shape):l}}})}}),hb=T({modStrict_:function(n,t){var e=C(n,"a","modStrict"),r=C(t,"b","modStrict");return Le(e.shape,r.shape,"Error in modStrict: "),e.mod(r)}}),xt=T({mul_:function(n,t){var e,r=C(n,"a","mul"),o=C(t,"b","mul");e=Ke(r,o),r=e[0],o=e[1];var i=Te(r.shape,o.shape);return P.runKernelFunc(function(a,s){var u=a.multiply(r,o);return s([r,o]),u},{a:r,b:o},function(a,s){var u=s[0],c=s[1];return{a:function(){var l=a.mul(c.toFloat()),f=nt(u.shape,i);return f.length>0?l.sum(f).reshape(u.shape):l},b:function(){var l=a.mul(u.toFloat()),f=nt(c.shape,i);return f.length>0?l.sum(f).reshape(c.shape):l}}},"Mul")}}),db=T({mulStrict_:function(n,t){var e=C(n,"a","mul"),r=C(t,"b","mul");return Le(e.shape,r.shape,"Error in multiplyStrict: "),e.mul(r)}}),Vi=T({pow_:function(n,t){var e,r=C(n,"base","pow"),o=C(t,"exp","pow");e=Ke(r,o),r=e[0],o=e[1];var i=Te(r.shape,o.shape),a=[r,o];return P.runKernelFunc(function(s,u){var c=s.pow(r,o);return u([r,o,c]),c},{a:r,b:o},function(s,u){var c=u[0],l=u[1],f=u[2];return{a:function(){var h=l.toFloat(),d=s.mul(h.mul(c.pow(h.sub(re(1))))),p=nt(c.shape,i);return p.length>0&&(d=d.sum(p)),d.reshape(c.shape)},b:function(){var h=c.greater(0),d=c.log().where(h,Fe(c)),p=s.mul(f.mul(d)),v=nt(l.shape,i);return v.length>0&&(p=p.sum(v)),p.reshape(l.shape)}}},"Pow",{},a,[!0])}}),pb=T({powStrict_:function(n,t){return Le(n.shape,t.shape,"Error in powStrict: "),n.pow(t)}}),vb=T({squaredDifferenceStrict_:function(n,t){var e=C(n,"a","squaredDifferenceStrict"),r=C(t,"b","squaredDifferenceStrict");return Le(e.shape,r.shape,"Error in squaredDifferenceStrict: "),e.squaredDifference(r)}}),rt=T({sub_:function(n,t){var e,r=C(n,"a","sub"),o=C(t,"b","sub");e=Ke(r,o),r=e[0],o=e[1];var i=Te(r.shape,o.shape);return P.runKernelFunc(function(a){return a.subtract(r,o)},{a:r,b:o},function(a){return{a:function(){var s=a,u=nt(r.shape,i);return u.length>0&&(s=s.sum(u)),s.reshape(r.shape)},b:function(){var s=a,u=nt(o.shape,i);return u.length>0&&(s=s.sum(u)),s.neg().reshape(o.shape)}}},"Sub")}}),mb=T({subStrict_:function(n,t){var e=C(n,"a","subStrict"),r=C(t,"b","subStrict");return Le(e.shape,r.shape,"Error in subStrict: "),e.sub(r)}}),Yh=T({equal_:function(n,t){var e,r=C(n,"a","equal"),o=C(t,"b","equal");return e=Ke(r,o),r=e[0],o=e[1],Te(r.shape,o.shape),P.runKernelFunc(function(i){return i.equal(r,o)},{$a:r,$b:o})}}),gb=T({equalStrict_:function(n,t){var e=C(n,"a","equalStrict"),r=C(t,"b","equalStrict");return Le(e.shape,r.shape,"Error in equalStrict: "),e.equal(r)}}),yb=T({greater_:function(n,t){var e,r=C(n,"a","greater"),o=C(t,"b","greater");return e=Ke(r,o),r=e[0],o=e[1],Te(r.shape,o.shape),P.runKernelFunc(function(i){return i.greater(r,o)},{a:r,b:o},null,"Greater")}}),Jh=T({greaterEqual_:function(n,t){var e,r=C(n,"a","greaterEqual"),o=C(t,"b","greaterEqual");return e=Ke(r,o),r=e[0],o=e[1],Te(r.shape,o.shape),P.runKernelFunc(function(i,a){var s=i.greaterEqual(r,o);return a([r,o]),s},{a:r,b:o},function(i,a){var s=a[0],u=a[1];return{a:function(){return Fe(s)},b:function(){return Fe(u)}}},"GreaterEqual")}}),xb=T({greaterEqualStrict_:function(n,t){var e=C(n,"a","greaterEqualStrict"),r=C(t,"b","greaterEqualStrict");return Le(e.shape,r.shape,"Error in greaterEqualStrict: "),e.greaterEqual(r)}}),bb=T({greaterStrict_:function(n,t){var e=C(n,"a","greaterStrict"),r=C(t,"b","greaterStrict");return Le(e.shape,r.shape,"Error in greaterStrict: "),e.greater(r)}}),wb=T({less_:function(n,t){var e,r=C(n,"a","less"),o=C(t,"b","less");return e=Ke(r,o),r=e[0],o=e[1],Te(r.shape,o.shape),P.runKernelFunc(function(i){return i.less(r,o)},{a:r,b:o},null,"Less")}}),_b=T({lessEqual_:function(n,t){var e,r=C(n,"a","lessEqual"),o=C(t,"b","lessEqual");return e=Ke(r,o),r=e[0],o=e[1],Te(r.shape,o.shape),P.runKernelFunc(function(i,a){var s=i.lessEqual(r,o);return a([r,o]),s},{a:r,b:o},null,"LessEqual")}}),Cb=T({lessEqualStrict_:function(n,t){var e=C(n,"a","lessEqualStrict"),r=C(t,"b","lessEqualStrict");return Le(e.shape,r.shape,"Error in lessEqualStrict: "),e.lessEqual(r)}}),Eb=T({lessStrict_:function(n,t){var e=C(n,"a","lessStrict"),r=C(t,"b","lessStrict");return Le(e.shape,r.shape,"Error in lessStrict: "),e.less(r)}}),Ib=T({notEqual_:function(n,t){var e,r=C(n,"a","notEqual"),o=C(t,"b","notEqual");return e=Ke(r,o),r=e[0],o=e[1],Te(r.shape,o.shape),P.runKernelFunc(function(i){return i.notEqual(r,o)},{a:r,b:o},null,"NotEqual")}}),Rb=T({notEqualStrict_:function(n,t){var e=C(n,"a","notEqualStrict"),r=C(t,"b","notEqualStrict");return Le(e.shape,r.shape,"Error in notEqualStrict: "),e.notEqual(r)}});function vl(n,t){for(var e=[],r=n;r<t;++r)e.push(r);return e}function ml(n){for(var t=[],e=0;e<n.length;++e)for(var r=0;r<n[e].length;++r)t.push(n[e][r]);return t}var bu=T({gather_:function(n,t,e){e===void 0&&(e=0);var r=C(n,"x","gather"),o=C(t,"indices","gather","int32");e=ot(e,r.shape)[0];var i=function(a,s,u){for(var c=a.shape[u],l=[],f=1,h=1,d=0;d<u;d++)l.push(a.shape[d]),f*=a.shape[d];for(d=0;d<s.rank;d++)l.push(s.shape[d]);for(d=u+1;d<a.rank;d++)l.push(a.shape[d]),h*=a.shape[d];return{batchSize:f,sliceSize:h,dimSize:c,outputShape:l}}(r,o,e);return P.runKernelFunc(function(a,s){var u=a.gather(r,o.flatten(),e);return s([o]),u},{x:r,indices:o},function(a,s){var u=s[0];return{x:function(){var c=r.shape,l=u.size,f=c.slice(0,e),h=f.length,d=c.slice(e,c.length).slice(1),p=d.length,v=vl(0,h),m=vl(h+1,h+1+p),g=ml([f,[l],d]),b=a.reshape(g),x=u.reshape([l]),y=ml([[h],v,m]),w=b.transpose(y),_=Qh(w,x,r.shape[e]),k=au(y);return _=_.transpose(k)},indices:function(){return u}}},"Gather",{axis:e}).reshape(i.outputShape)}}),Qh=T({unsortedSegmentSum_:function(n,t,e){var r=C(n,"x","unsortedSegmentSum"),o=C(t,"segmentIds","unsortedSegmentSum","int32");return R(Ye(e),function(){return"numSegments must be of dtype int"}),P.runKernelFunc(function(i,a){var s=i.unsortedSegmentSum(r,o,e);return a([o]),s},{$x:r},function(i,a){var s=a[0];return{$x:function(){return function(u,c){for(var l=xu(c,Fe(c)),f=bu(u,l),h=Jh(c,re(0,"int32")),d=f.rank-h.rank,p=0;p<d;++p)h=Gt(h,p+1);h=sa(h,ao(f.shape,"bool"));var v=Fe(f);return wr(h,f,v)}(i,s)}}})}}),Sb=function(n,t,e){return ae(this,void 0,void 0,function(){var r,o,i,a,s,u,c,l,f,h,d,p,v;return se(this,function(m){switch(m.label){case 0:for(r=C(n,"tensor","boolMask"),o=C(t,"mask","boolMask","bool"),i=e??0,a=o.rank,s=r.shape,R(a>0,function(){return"mask cannot be scalar"}),Le(s.slice(i,i+a),o.shape,"mask's shape must match the first K dimensions of tensor's shape,"),u=1,c=i;c<i+a;c++)u*=s[c];return l=s.slice(0,i).concat([u],s.slice(i+a)),f=r.reshape(l),h=o.reshape([-1]),[4,Kh(h)];case 1:return d=m.sent(),p=d.squeeze([1]),v=bu(f,p,i),n!==r&&r.dispose(),t!==o&&o.dispose(),p.dispose(),f.dispose(),h.dispose(),d.dispose(),[2,v]}})})};function Zh(n,t,e,r,o,i,a){i===void 0&&(i="NHWC"),R(n.length===t.rank,function(){return"Length of inShape ("+n.length+") and rank of dy ("+t.rank+") must match"});var s=n,u=t,c=!1;t.rank===3&&(c=!0,u=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]),s=[1,n[0],n[1],n[2]]),R(s.length===4,function(){return"Error in conv2dDerInput: inShape must be length 4, but got length "+s.length+"."}),R(u.rank===4,function(){return"Error in conv2dDerInput: dy must be rank 4, but got rank "+u.rank}),R(e.rank===4,function(){return"Error in conv2dDerInput: filter must be rank 4, but got rank "+e.rank});var l=i==="NHWC"?s[3]:s[1],f=i==="NHWC"?u.shape[3]:u.shape[1];R(l===e.shape[2],function(){return"Error in conv2dDerInput: depth of input ("+l+") must match input depth for filter "+e.shape[2]+"."}),R(f===e.shape[3],function(){return"Error in conv2dDerInput: depth of output ("+f+") must match output depth for filter "+e.shape[3]+"."}),a!=null&&R(Ye(o),function(){return"Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var h=fu(i),d=Ir(s,e.shape,r,1,o,a,!1,h),p=P.runKernelFunc(function(v,m){var g=v.conv2dDerInput(u,e,d);return m([e,u]),g},{dy4D:u,filter:e},function(v,m){var g=m[0],b=m[1];return{dy4D:function(){return Xt(v,g,r,o,i,1,a)},filter:function(){return wu(v,b,g.shape,r,o,i,a)}}});return c?p.as3D(p.shape[1],p.shape[2],p.shape[3]):p}function qa(n){var t=function(i){return typeof i=="number"?[i,i,i]:i.length===2?[i[0],i[1],1]:i}(n),e=t[0],r=t[1],o=t[2];return e===1&&r===1&&o===1}function ed(n,t,e,r,o){R(n.length===t.rank,function(){return"Length of inShape ("+n.length+") and rank of dy ("+t.rank+") must match"});var i=n,a=t,s=!1;t.rank===4&&(s=!0,a=t.as5D(1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]),i=[1,n[0],n[1],n[2],n[3]]);var u=i[4],c=a.shape[4];R(i.length===5,function(){return"Error in conv3dDerInput: inShape must be length 5, but got length "+i.length+"."}),R(a.rank===5,function(){return"Error in conv3dDerInput: dy must be rank 5, but got rank "+a.rank}),R(e.rank===5,function(){return"Error in conv3dDerInput: filter must be rank 5, but got rank "+e.rank}),R(u===e.shape[3],function(){return"Error in conv3dDerInput: depth of input ("+u+") must match input depth for filter "+e.shape[3]+"."}),R(c===e.shape[4],function(){return"Error in conv3dDerInput: depth of output ("+c+") must match output depth for filter "+e.shape[4]+"."});var l=Li(i,e.shape,r,1,o),f=P.runKernelFunc(function(h){return h.conv3dDerInput(a,e,l)},{dy5D:a});return s?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}var kb=T({conv1d_:function(n,t,e,r,o,i,a){o===void 0&&(o="NWC"),i===void 0&&(i=1);var s=C(n,"x","conv1d"),u=C(t,"filter","conv1d"),c=s,l=!1;s.rank===2&&(l=!0,c=s.as3D(1,s.shape[0],s.shape[1])),R(c.rank===3,function(){return"Error in conv1d: input must be rank 3, but got rank "+c.rank+"."}),R(u.rank===3,function(){return"Error in conv1d: filter must be rank 3, but got rank "+u.rank+"."}),a!=null&&R(Ye(r),function(){return"Error in conv1d: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+r+"."}),R(c.shape[2]===u.shape[1],function(){return"Error in conv1d: depth of input ("+c.shape[2]+") must match input depth for filter "+u.shape[1]+"."}),R(Ft(e,i),function(){return"Error in conv1D: Either stride or dilation must be 1. Got stride "+e+" and dilation '"+i+"'"}),R(o==="NWC",function(){return"Error in conv1d: got dataFormat of "+o+" but only NWC is currently supported."});var f=u.as4D(1,u.shape[0],u.shape[1],u.shape[2]),h=c.as4D(c.shape[0],1,c.shape[1],c.shape[2]),d=Xt(h,f,[1,e],r,"NHWC",[1,i],a);return l?d.as2D(d.shape[2],d.shape[3]):d.as3D(d.shape[0],d.shape[2],d.shape[3])}}),Xt=T({conv2d_:function(n,t,e,r,o,i,a){o===void 0&&(o="NHWC"),i===void 0&&(i=[1,1]);var s=C(n,"x","conv2d"),u=C(t,"filter","conv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),R(c.rank===4,function(){return"Error in conv2d: input must be rank 4, but got rank "+c.rank+"."}),R(u.rank===4,function(){return"Error in conv2d: filter must be rank 4, but got rank "+u.rank+"."}),a!=null&&R(Ye(r),function(){return"Error in conv2d: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+r+"."});var f=o==="NHWC"?c.shape[3]:c.shape[1];R(f===u.shape[2],function(){return"Error in conv2d: depth of input ("+f+") must match input depth for filter "+u.shape[2]+"."}),R(Ft(e,i),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"});var h=fu(o),d=Ir(c.shape,u.shape,e,i,r,a,!1,h),p=[u,c],v=P.runKernelFunc(function(m,g){var b=m.conv2d(c,u,d);return g([u,c]),b},{x:c,filter:u},function(m,g){var b=g,x=b[0],y=b[1];return R(oo(i),function(){return"Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+i+"'"}),{x:function(){return td(y.shape,m,x,e,r,o)},filter:function(){return wu(y,m,x.shape,e,r,o)}}},"Conv2D",d,p);return l?v.as3D(v.shape[1],v.shape[2],v.shape[3]):v}}),Ab=T({conv3d_:function(n,t,e,r,o,i){o===void 0&&(o="NDHWC"),i===void 0&&(i=[1,1,1]);var a=C(n,"x","conv3d"),s=C(t,"filter","conv3d"),u=a,c=!1;a.rank===4&&(c=!0,u=a.as5D(1,a.shape[0],a.shape[1],a.shape[2],a.shape[3])),R(u.rank===5,function(){return"Error in conv3d: input must be rank 5, but got rank "+u.rank+"."}),R(s.rank===5,function(){return"Error in conv3d: filter must be rank 5, but got rank "+s.rank+"."}),R(u.shape[4]===s.shape[3],function(){return"Error in conv3d: depth of input ("+u.shape[4]+") must match input depth for filter "+s.shape[3]+"."}),R(function(h,d){return qa(h)||qa(d)}(e,i),function(){return"Error in conv3D: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"}),R(o==="NDHWC",function(){return"Error in conv3d: got dataFormat of "+o+" but only NDHWC is currently supported."});var l=Li(u.shape,s.shape,e,i,r),f=P.runKernelFunc(function(h,d){var p=h.conv3d(u,s,l);return d([u,s]),p},{x:u,$filter:s},function(h,d){R(qa(i),function(){return"Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+i+"'"});var p=d[0],v=d[1];return{x:function(){return ed(p.shape,h,v,e,r)},$filter:function(){return function(m,g,b,x,y){var w=m;m.rank===4&&(w=m.as5D(1,m.shape[0],m.shape[1],m.shape[2],m.shape[3]));var _=g;_.rank===4&&(_=g.as5D(1,g.shape[0],g.shape[1],g.shape[2],g.shape[3])),R(w.rank===5,function(){return"Error in conv3dDerFilter: input must be rank 5, but got shape "+w.shape+"."}),R(_.rank===5,function(){return"Error in conv3dDerFilter: dy must be rank 5, but got shape "+_.shape+"."}),R(b.length===5,function(){return"Error in conv3dDerFilter: filterShape must be length 5, but got "+b+"."}),R(w.shape[4]===b[3],function(){return"Error in conv3dDerFilter: depth of input "+w.shape[4]+") must match input depth in filter ("+b[3]+"."}),R(_.shape[4]===b[4],function(){return"Error in conv3dDerFilter: depth of dy ("+_.shape[4]+") must match output depth for filter ("+b[4]+")."});var k=Li(w.shape,b,x,1,y);return P.runKernelFunc(function(S){return S.conv3dDerFilter(w,_,k)},{x5D:w,dy5D:_})}(p,h,v.shape,e,r)}}});return c?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}}),wu=T({conv2dDerFilter_:function(n,t,e,r,o,i,a){i===void 0&&(i="NHWC");var s=n;n.rank===3&&(s=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]));var u=t;u.rank===3&&(u=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),R(s.rank===4,function(){return"Error in conv2dDerFilter: input must be rank 4, but got shape "+s.shape+"."}),R(u.rank===4,function(){return"Error in conv2dDerFilter: dy must be rank 4, but got shape "+u.shape+"."}),R(e.length===4,function(){return"Error in conv2dDerFilter: filterShape must be length 4, but got "+e+"."});var c=i==="NHWC"?s.shape[3]:s.shape[1],l=i==="NHWC"?u.shape[3]:u.shape[1];R(c===e[2],function(){return"Error in conv2dDerFilter: depth of input "+c+") must match input depth in filter ("+e[2]+"."}),R(l===e[3],function(){return"Error in conv2dDerFilter: depth of dy ("+l+") must match output depth for filter ("+e[3]+")."}),a!=null&&R(Ye(o),function(){return"Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var f=fu(i),h=Ir(s.shape,e,r,1,o,a,!1,f);return P.runKernelFunc(function(d){return d.conv2dDerFilter(s,u,h)},{x4D:s,dy4D:u})}}),td=T({conv2dDerInput_:Zh}),ua=T({depthwiseConv2d_:function(n,t,e,r,o,i,a){i===void 0&&(i=[1,1]);var s=C(n,"x","depthwiseConv2d"),u=C(t,"filter","depthwiseConv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),R(c.rank===4,function(){return"Error in depthwiseConv2d: input must be rank 4, but got rank "+c.rank+"."}),R(u.rank===4,function(){return"Error in depthwiseConv2d: filter must be rank 4, but got rank "+u.rank+"."}),R(c.shape[3]===u.shape[2],function(){return"Error in depthwiseConv2d: number of input channels ("+c.shape[3]+") must match the inChannels dimension in filter "+u.shape[2]+"."}),i==null&&(i=[1,1]),R(Ft(e,i),function(){return"Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"}),a!=null&&R(Ye(r),function(){return"Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+r+"."});var f=Ir(c.shape,u.shape,e,i,r,a,!0),h=[c,u],d=P.runKernelFunc(function(p,v){var m=p.depthwiseConv2D(c,u,f);return v([c,u]),m},{x:c,filter:u},function(p,v){R(oo(i),function(){return"Error in gradient of depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+i+"'"});var m=v[0],g=v[1];return{x:function(){return nd(m.shape,p,g,f)},filter:function(){return rd(m,p,g.shape,f)}}},"DepthwiseConv2dNative",f,h);return l?d.as3D(d.shape[1],d.shape[2],d.shape[3]):d}}),nd=T({depthwiseConv2dDerInput_:function(n,t,e,r){var o=t,i=!1;t.rank===3&&(i=!0,o=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]));var a=P.runKernelFunc(function(s){return s.depthwiseConv2DDerInput(o,e,r)},{dy4D:o});return i?a.as3D(a.shape[1],a.shape[2],a.shape[3]):a}}),rd=T({depthwiseConv2dDerFilter_:function(n,t,e,r){var o=n;n.rank===3&&(o=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]));var i=t;return i.rank===3&&(i=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),P.runKernelFunc(function(a){return a.depthwiseConv2DDerFilter(o,i,r)},{x4D:o,dy4D:i})}}),_u=T({separableConv2d_:function(n,t,e,r,o,i,a){i===void 0&&(i=[1,1]),a===void 0&&(a="NHWC");var s=C(n,"x","separableConv2d"),u=C(t,"depthwiseFilter","separableConv2d"),c=C(e,"pointwiseFilter","separableConv2d"),l=s,f=!1;if(s.rank===3&&(f=!0,l=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),a==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");R(l.rank===4,function(){return"Error in separableConv2d: input must be rank 4, but got rank "+l.rank+"."}),R(u.rank===4,function(){return"Error in separableConv2d: depthwise filter must be rank 4, but got rank "+u.rank+"."}),R(c.rank===4,function(){return"Error in separableConv2d: pointwise filter must be rank 4, but got rank "+u.rank+"."}),R(c.shape[0]===1,function(){return"Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got "+c.shape[0]+"."}),R(c.shape[1]===1,function(){return"Error in separableConv2d: the second dimension of pointwise filter must be 1, but got "+c.shape[1]+"."});var h=u.shape[2],d=u.shape[3];R(c.shape[2]===h*d,function(){return"Error in separableConv2d: the third dimension of pointwise filter must be "+h*d+", but got "+c.shape[2]+"."});var p=ua(l,u,r,o,a,i),v=Xt(p,c,1,"valid",a);return f?v.as3D(v.shape[1],v.shape[2],v.shape[3]):v}}),Db=T({conv2dTranspose_:function(n,t,e,r,o,i){return Zh(e,C(n,"x","conv2dTranspose"),C(t,"filter","conv2dTranspose"),r,o,"NHWC",i)}}),Tb=T({conv3dTranspose_:function(n,t,e,r,o){return ed(e,C(n,"x","conv3dTranspose"),C(t,"filter","conv3dTranspose"),r,o)}}),ca=T({matMul_:function(n,t,e,r){var o;e===void 0&&(e=!1),r===void 0&&(r=!1);var i=C(n,"a","matMul"),a=C(t,"b","matMul");o=Ke(i,a),i=o[0],a=o[1];var s=e?i.shape[i.rank-2]:i.shape[i.rank-1],u=r?a.shape[a.rank-1]:a.shape[a.rank-2],c=e?i.shape[i.rank-1]:i.shape[i.rank-2],l=r?a.shape[a.rank-2]:a.shape[a.rank-1],f=i.shape.slice(0,-2),h=a.shape.slice(0,-2),d=le(f),p=le(h);R(i.rank>=2&&a.rank>=2&&i.rank===a.rank,function(){return"Error in matMul: inputs must have the same rank of at least 2, got ranks "+i.rank+" and "+a.rank+"."}),R(st(f,h),function(){return"Error in matMul: outer dimensions ("+f+") and ("+h+") of Tensors with shapes "+i.shape+" and "+a.shape+" must match."}),R(s===u,function(){return"Error in matMul: inner shapes ("+s+") and ("+u+") of Tensors with shapes "+i.shape+" and "+a.shape+" and transposeA="+e+" and transposeB="+r+" must match."});var v=i.shape.slice(0,-2).concat([c,l]),m=e?i.as3D(d,s,c):i.as3D(d,c,s),g=r?a.as3D(p,l,u):a.as3D(p,u,l),b={transposeA:e,transposeB:r};return P.runKernelFunc(function(x,y){var w=x.batchMatMul(m,g,e,r);return y([m,g]),w},{a:m,b:g},function(x,y){var w=y,_=w[0],k=w[1];return e||r?!e&&r?{a:function(){return x.matMul(k,!1,!1)},b:function(){return x.matMul(_,!0,!1)}}:e&&!r?{a:function(){return k.matMul(x,!1,!0)},b:function(){return _.matMul(x,!1,!1)}}:{a:function(){return k.matMul(x,!0,!0)},b:function(){return x.matMul(_,!0,!0)}}:{a:function(){return x.matMul(k,!1,!0)},b:function(){return _.matMul(x,!0,!1)}}},"BatchMatMul",b).reshape(v)}}),Nb=T({dot_:function(n,t){var e=C(n,"t1","dot"),r=C(t,"t2","dot");R(!(e.rank!==1&&e.rank!==2||r.rank!==1&&r.rank!==2),function(){return"Error in dot: inputs must all be rank 1 or 2, but got ranks "+e.rank+" and "+r.rank+"."});var o=e.rank===1?e.size:e.shape[1],i=r.rank===1?r.size:r.shape[0];return R(o===i,function(){return"Error in dot: inner dimensions of inputs must match, but got "+o+" and "+i+"."}),e.rank===1&&r.rank===1?e.as2D(1,-1).matMul(r.as2D(-1,1)).asScalar():e.rank===1&&r.rank===2?e.as2D(1,-1).matMul(r.as2D(r.shape[0],r.shape[1])).as1D():e.rank===2&&r.rank===1?e.matMul(r.as2D(-1,1)).as1D():e.matMul(r.as2D(r.shape[0],r.shape[1]))}}),Fb=T({outerProduct_:function(n,t){var e=C(n,"v1","outerProduct"),r=C(t,"v2","outerProduct");return R(e.rank===1&&r.rank===1,function(){return"Error in outerProduct: inputs must be rank 1, but got ranks "+e.rank+" and "+r.rank+"."}),e.as2D(-1,1).matMul(r.as2D(1,-1))}}),qo=T({reverse_:function(n,t){var e=C(n,"x","reverse");if(e.rank===0)return e.clone();var r=ot(t,e.shape);return P.runKernelFunc(function(o){return o.reverse(e,r)},{$x:e},function(o){return{$x:function(){return o.reverse(r)}}}).reshapeAs(e)}}),Pb=T({reverse1d_:function(n){var t=C(n,"x","reverse");return R(t.rank===1,function(){return"Error in reverse1D: x must be rank 1 but got rank "+t.rank+"."}),qo(t,0)}}),Mb=T({reverse2d_:function(n,t){var e=C(n,"x","reverse");return R(e.rank===2,function(){return"Error in reverse2D: x must be rank 2 but got rank "+e.rank+"."}),qo(e,t)}}),Ob=T({reverse3d_:function(n,t){var e=C(n,"x","reverse");return R(e.rank===3,function(){return"Error in reverse3D: x must be rank 3 but got rank "+e.rank+"."}),qo(e,t)}}),Bb=T({reverse4d_:function(n,t){var e=C(n,"x","reverse");return R(e.rank===4,function(){return"Error in reverse4D: x must be rank 4 but got rank "+e.rank+"."}),qo(e,t)}});function od(n,t,e,r,o,i){var a=C(n,"x","maxPool"),s=a,u=!1;a.rank===3&&(u=!0,s=a.as4D(1,a.shape[0],a.shape[1],a.shape[2])),R(s.rank===4,function(){return"Error in maxPool: input must be rank 4 but got rank "+s.rank+"."}),R(Ft(e,r),function(){return"Error in maxPool: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+r+"'"}),i!=null&&R(Ye(o),function(){return"Error in maxPool: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var c=Mo(s.shape,t,e,r,o,i);if(c.filterWidth===1&&c.filterHeight===1&&st(c.inShape,c.outShape))return a.clone();var l=[s],f=P.runKernelFunc(function(h,d){var p=h.maxPool(s,c);return d([s,p]),p},{x:s},function(h,d){var p=d[0],v=d[1];return{x:function(){return function(m,g,b,x,y,w,_,k){var S=C(m,"dy","maxPoolBackprop"),I=C(g,"input","maxPoolBackprop"),E=C(b,"output","maxPoolBackprop");R(I.rank===S.rank,function(){return"Rank of input ("+I.rank+") does not match rank of dy ("+S.rank+")"}),R(Ft(y,w),function(){return"Error in maxPoolBackProp: Either strides or dilations must be 1. Got strides "+y+" and dilations '"+w+"'"}),R(S.rank===4,function(){return"Error in maxPoolBackprop: dy must be rank 4 but got rank "+S.rank+"."}),R(I.rank===4,function(){return"Error in maxPoolBackprop: input must be rank 4 but got rank "+I.rank+"."});var F=Mo(I.shape,x,y,w,_,k);return P.runKernelFunc(function(N){return N.maxPoolBackprop(S,I,E,F)},{$dy:S,$input:I})}(h,p,v,t,e,r,o)}}},"MaxPool",c,l);return u?f.as3D(f.shape[1],f.shape[2],f.shape[3]):f}function id(n,t,e,r,o,i){var a=C(n,"x","avgPool","float32");R(Ft(e,r),function(){return"Error in avgPool: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+r+"'"});var s=a,u=!1;a.rank===3&&(u=!0,s=a.as4D(1,a.shape[0],a.shape[1],a.shape[2])),R(s.rank===4,function(){return"Error in avgPool: x must be rank 4 but got rank "+s.rank+"."}),i!=null&&R(Ye(o),function(){return"Error in avgPool: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var c=Mo(s.shape,t,e,r,o,i);if(c.filterWidth===1&&c.filterHeight===1&&st(c.inShape,c.outShape))return a.clone();var l=P.runKernelFunc(function(f){return f.avgPool(s,c)},{x:s},function(f){return{x:function(){return function(h,d,p,v,m,g){var b=C(h,"dy","avgPoolBackprop"),x=C(d,"input","avgPoolBackprop");R(x.rank===b.rank,function(){return"Rank of input ("+x.rank+") does not match rank of dy ("+b.rank+")"}),R(Ft(v,m),function(){return"Error in avgPoolBackprop: Either strides or dilations must be 1. Got strides "+v+" and dilations '"+m+"'"});var y=x,w=b,_=!1;x.rank===3&&(_=!0,y=x.as4D(1,x.shape[0],x.shape[1],x.shape[2]),w=b.as4D(1,b.shape[0],b.shape[1],b.shape[2])),R(w.rank===4,function(){return"Error in avgPoolBackprop: dy must be rank 4 but got rank "+w.rank+"."}),R(y.rank===4,function(){return"Error in avgPoolBackprop: input must be rank 4 but got rank "+y.rank+"."});var k=Mo(y.shape,p,v,m,g),S=P.runKernelFunc(function(I){return I.avgPoolBackprop(w,y,k)},{dy4D:w,input4D:y});return _?S.as3D(S.shape[1],S.shape[2],S.shape[3]):S}(f,s,t,e,r,o)}}},"AvgPool",c);return l=l.cast(a.dtype),u?l.as3D(l.shape[1],l.shape[2],l.shape[3]):l}var at=T({maxPool_:function(n,t,e,r,o){return od(n,t,e,1,r,o)}}),Ko=T({avgPool_:function(n,t,e,r,o){return id(n,t,e,1,r,o)}}),Lb=T({pool_:function(n,t,e,r,o,i){o==null&&(o=[1,1]),i==null&&(i=1),r===0&&(r="valid");var a=C(n,"x","maxPool"),s=a,u=!1;a.rank===3&&(u=!0,s=a.as4D(1,a.shape[0],a.shape[1],a.shape[2])),R(Ft(i,o),function(){return"Error in pool: Either strides or dilations must be 1. Got strides "+i+" and dilations '"+o+"'"});var c,l=Mo(s.shape,t,i,o,r),f=[l.dilationHeight,l.dilationWidth];c=r==="same"?function(y,w){var _=y.map(function(I,E){return I+(I-1)*(w[E]-1)}).map(function(I){return I-1}),k=_.map(function(I){return Math.floor(I/2)}),S=_.map(function(I,E){return I-k[E]});return _.map(function(I,E){return[k[E],S[E]]})}([l.filterHeight,l.filterWidth],f):[[0,0],[0,0]];var h=f[0]===1&&f[1]===1,d=function(y,w,_){var k=_.map(function(V){return V[0]}),S=_.map(function(V){return V[1]}),I=y.concat(k,S),E=w.map(function(V,z){return(V-I[z]%V)%V}),F=S.map(function(V,z){return V+E[z]}),N=w.map(function(V,z){return[k[z],F[z]]}),U=w.map(function(V,z){return[0,E[z]]});return[N,U]}([l.inHeight,l.inWidth],f,c),p=d[0],v=d[1],m=h?r:"valid",g=h?s:fh(s,f,p),b=(e==="avg"?function(){return id(g,t,i,1,m)}:function(){return od(g,t,i,1,m)})(),x=h?b:uh(b,f,v);return u?x.as3D(x.shape[1],x.shape[2],x.shape[3]):x}}),Wb=T({maxPool3d_:function(n,t,e,r,o,i,a){i===void 0&&(i="NDHWC");var s=C(n,"x","maxPool3d"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),a==null&&(a=[1,1,1]),R(u.rank===5,function(){return"Error in maxPool3d: x must be rank 5 but got rank "+u.rank+"."}),R(i==="NDHWC",function(){return"Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of "+i}),R(Ft(e,a),function(){return"Error in maxPool3d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+a+"'"}),o!=null&&R(Ye(r),function(){return"Error in maxPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+r+"."});var l=Bi(u.shape,t,e,a,r,o,i),f=P.runKernelFunc(function(h,d){var p=h.maxPool3d(u,l);return d([u,p]),p},{x:u},function(h,d){var p=d[0],v=d[1];return{x:function(){return function(m,g,b,x,y,w,_,k){var S=C(m,"dy","maxPool3dBackprop"),I=C(g,"input","maxPool3dBackprop"),E=C(b,"output","maxPool3dBackprop"),F=S,N=I,U=E,V=!1;I.rank===4&&(V=!0,F=S.as5D(1,S.shape[0],S.shape[1],S.shape[2],S.shape[3]),N=I.as5D(1,I.shape[0],I.shape[1],I.shape[2],I.shape[3]),U=E.as5D(1,E.shape[0],E.shape[1],E.shape[2],E.shape[3])),R(F.rank===5,function(){return"Error in maxPool3dBackprop: dy must be rank 5 but got rank "+F.rank+"."}),R(N.rank===5,function(){return"Error in maxPool3dBackprop: input must be rank 5 but got rank "+N.rank+"."}),R(U.rank===5,function(){return"Error in maxPool3dBackprop: output must be rank 5 but got rank "+U.rank+"."}),w==null&&(w=[1,1,1]),R(Ft(y,w),function(){return"Error in maxPool3dBackprop: Either strides or dilations must be 1. Got strides "+y+" and dilations '"+w+"'"}),k!=null&&R(Ye(_),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+k+" but got pad "+_+"."});var z=Bi(N.shape,x,y,w,_,k),H=P.runKernelFunc(function(L){return L.maxPool3dBackprop(F,N,U,z)},{dy5D:F,input5D:N});return V?H.as4D(H.shape[1],H.shape[2],H.shape[3],H.shape[4]):H}(h,p,v,t,e,a,r,o)}}});return c?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}}),Ub=T({avgPool3d_:function(n,t,e,r,o,i,a){i===void 0&&(i="NDHWC");var s=C(n,"x","avgPool3d","float32"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),a==null&&(a=[1,1,1]),R(u.rank===5,function(){return"Error in avgPool3d: x must be rank 5 but got rank "+u.rank+"."}),R(i==="NDHWC",function(){return"Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of "+i}),R(Ft(e,a),function(){return"Error in avgPool3d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+a+"'"}),o!=null&&R(Ye(r),function(){return"Error in avgPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+r+"."});var l=Bi(u.shape,t,e,a,r,o,i),f=P.runKernelFunc(function(h){return h.avgPool3d(u,l)},{x:u},function(h){return{x:function(){return function(d,p,v,m,g,b,x){var y=C(d,"dy","avgPool3dBackprop"),w=C(p,"input","avgPool3dBackprop"),_=y,k=w,S=!1;w.rank===4&&(S=!0,_=y.as5D(1,y.shape[0],y.shape[1],y.shape[2],y.shape[3]),k=w.as5D(1,w.shape[0],w.shape[1],w.shape[2],w.shape[3])),R(_.rank===5,function(){return"Error in avgPool3dBackprop: dy must be rank 5 but got rank "+_.rank+"."}),R(k.rank===5,function(){return"Error in avgPool3dBackprop: input must be rank 5 but got rank "+k.rank+"."}),g==null&&(g=[1,1,1]),R(Ft(m,g),function(){return"Error in avgPool3dBackprop: Either strides or dilations must be 1. Got strides "+m+" and dilations '"+g+"'"}),x!=null&&R(Ye(b),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+x+" but got pad "+b+"."});var I=Bi(k.shape,v,m,g,b,x),E=P.runKernelFunc(function(F){return F.avgPool3dBackprop(_,k,I)},{dy5D:_,input5D:k});return S?E.as4D(E.shape[1],E.shape[2],E.shape[3],E.shape[4]):E}(h,u,t,e,a,r,o)}}});return f=f.cast(u.dtype),c?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}}),bn=T({slice_:function(n,t,e){var r,o,i=C(n,"x","slice");if(i.rank===0)throw new Error("Slicing scalar is not possible");(r=typeof t=="number"?[t].concat(new Array(i.rank-1).fill(0)):t.length<i.rank?t.concat(new Array(i.rank-t.length).fill(0)):t.slice()).forEach(function(u){R(u!==-1,function(){return"slice() does not support negative begin indexing."})}),o=(o=e==null?new Array(i.rank).fill(-1):typeof e=="number"?[e].concat(new Array(i.rank-1).fill(-1)):e.length<i.rank?e.concat(new Array(i.rank-e.length).fill(-1)):e).map(function(u,c){return u>=0?u:(R(u===-1,function(){return"Negative size values should be exactly -1 but got "+u+" for the slice() size at index "+c+"."}),i.shape[c]-r[c])}),py(i,r,o);var a=i.shape,s={begin:r,size:o};return P.runKernelFunc(function(u){return u.slice(i,r,o)},{x:i},function(u){for(var c=[],l=0;l<u.rank;l++)c.push([r[l],a[l]-r[l]-o[l]]);return{x:function(){return u.pad(c)}}},"Slice",s)}}),Vb=T({slice1d_:function(n,t,e){var r=C(n,"x","slice1d");return R(r.rank===1,function(){return"slice1d expects a rank-1 tensor, but got a rank-"+r.rank+" tensor"}),bn(r,[t],[e])}}),zb=T({slice2d_:function(n,t,e){var r=C(n,"x","slice2d");return R(r.rank===2,function(){return"slice2d expects a rank-2 tensor, but got a rank-"+r.rank+" tensor"}),bn(r,t,e)}}),ad=T({slice3d_:function(n,t,e){var r=C(n,"x","slice3d");return R(r.rank===3,function(){return"slice3d expects a rank-3 tensor, but got a rank-"+r.rank+" tensor"}),bn(r,t,e)}}),Hb=T({slice4d_:function(n,t,e){var r=C(n,"x","slice4d");return R(r.rank===4,function(){return"slice4d expects a rank-4 tensor, but got a rank-"+r.rank+" tensor"}),bn(r,t,e)}});function sd(n,t,e,r,o){return t.rank<e.rank&&(t=t.reshape(Nt(t.shape,r))),n.rank<e.rank&&(n=n.reshape(Nt(n.shape,r))),{x:function(){var i=n.mul(e.equal(t).cast(n.dtype));return o==null?i:i.transpose(o)}}}var Gb=T({all_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=C(n,"x","all","bool"),o=ot(t,r.shape),i=o,a=_n(i,r.rank);a!=null&&(r=r.transpose(a),i=Cn(i.length,r.rank));var s=P.runKernelFunc(function(c){return c.all(r,i)},{$x:r});if(e){var u=Nt(s.shape,o);return s.reshape(u)}return s}}),jb=T({any_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=C(n,"x","any","bool"),o=ot(t,r.shape),i=o,a=_n(i,r.rank);a!=null&&(r=r.transpose(a),i=Cn(i.length,r.rank));var s=P.runKernelFunc(function(c){return c.any(r,i)},{$x:r});if(e){var u=Nt(s.shape,o);return s.reshape(u)}return s}}),qb=T({argMax_:function(n,t){t===void 0&&(t=0);var e=C(n,"x","argMax");t==null&&(t=0);var r=ot(t,e.shape),o=_n(r,e.rank);o!=null&&(e=e.transpose(o),r=Cn(r.length,e.rank));var i={axis:r[0]},a=[e];return P.runKernelFunc(function(s,u){var c=s.argMax(e,r[0]);return u([e]),c},{x:e},function(s,u){var c=u[0];return{x:function(){return Fe(c)}}},"ArgMax",i,a)}}),Kb=T({argMin_:function(n,t){t===void 0&&(t=0);var e=C(n,"x","argMin");t==null&&(t=0);var r=ot(t,e.shape),o=_n(r,e.rank);return o!=null&&(e=e.transpose(o),r=Cn(r.length,e.rank)),P.runKernelFunc(function(i,a){var s=i.argMin(e,r[0]);return a([e]),s},{$x:e},function(i,a){var s=a[0];return{$x:function(){return Fe(s)}}})}}),Xb=T({logSumExp_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=C(n,"x","logSumExp"),o=ot(t,r.shape),i=r.max(o,!0),a=r.sub(i).exp().sum(o).log(),s=i.reshape(a.shape).add(a);if(e){var u=Nt(s.shape,o);return s.reshape(u)}return s}}),la=T({max_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=C(n,"x","max"),o=r,i=ot(t,r.shape),a=i,s=_n(a,r.rank);s!=null&&(r=r.transpose(s),a=Cn(a.length,r.rank));var u=[r],c=P.runKernelFunc(function(f,h){var d=f.max(r,a);return h([o,d]),d},{x:r},function(f,h){return sd(f,h[1],h[0],i,s)},"Max",{axes:a},u,[!0]);if(e){var l=Nt(c.shape,i);c=c.reshape(l)}return c}}),$b=T({mean_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=C(n,"x","mean"),o=ot(t,r.shape),i=le(pt(r.shape,o)[1]);return ia(function(a){var s=re(i);return{value:(s.dtype===a.dtype?a:a.cast(s.dtype)).div(s).sum(t,e),gradFunc:function(u){var c=a.shape.slice();return o.forEach(function(l){c[l]=1}),u.reshape(c).mul(ao(a.shape,"float32")).div(i)}}})(r)}}),Yb=T({min_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=C(n,"x","min"),o=r,i=ot(t,r.shape),a=i,s=_n(a,r.rank);s!=null&&(r=r.transpose(s),a=Cn(a.length,r.rank));var u=[r],c=P.runKernelFunc(function(f,h){var d=f.min(r,a);return h([o,d]),d},{x:r},function(f,h){return sd(f,h[1],h[0],i,s)},"Min",{axes:a},u,[!0]);if(e){var l=Nt(c.shape,i);c=c.reshape(l)}return c}}),Jb=T({moments_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=ot(t,(n=C(n,"x","moments")).shape),o=n.mean(r,e),i=o.shape;e||(i=Nt(o.shape,r));var a=n.toFloat().sub(o.reshape(i)).square();return{mean:o,variance:a.mean(r,e)}}}),ud=T({sum_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=C(n,"x","sum");r.dtype==="bool"&&(r=r.toInt());var o=ot(t,r.shape);return ia(function(i){var a=_n(o,i.rank),s=o,u=i;a!=null&&(u=i.transpose(a),s=Cn(s.length,i.rank));var c=function(d){var p=i.shape.slice();return o.forEach(function(v){p[v]=1}),d.reshape(p).mul(ao(i.shape,"float32"))},l={axes:s},f=P.runKernelFunc(function(d){return d.sum(u,s)},{x:u},function(d){return{x:function(){return c(d)}}},"Sum",l);if(e){var h=Nt(f.shape,o);f=f.reshape(h)}return{value:f,gradFunc:c}})(r)}}),Qb=T({prod_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=C(n,"x","prod");r.dtype==="bool"&&(r=r.toInt());var o=ot(t,r.shape),i=_n(o,r.rank),a=o,s=r;i!=null&&(s=r.transpose(i),a=Cn(a.length,r.rank));var u=P.runKernelFunc(function(l){return l.prod(s,a)},{permutedX:s});if(e){var c=Nt(u.shape,o);u=u.reshape(c)}return u}}),cd=T({elu_:function(n){var t=C(n,"x","elu");return P.runKernelFunc(function(e,r){var o=e.elu(t);return r([o]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return P.runKernelFunc(function(i){return i.eluDer(e,o)},{dy:e,y:o})}}})}}),Zb=T({leakyRelu_:function(n,t){t===void 0&&(t=.2);var e=C(n,"x","leakyRelu");return xu(re(t).mul(e),e)}}),ld=T({prelu_:function(n,t){var e=C(n,"x","prelu"),r=C(t,"alpha","prelu");return P.runKernelFunc(function(o,i){var a=o.prelu(e,r);return i([e,r]),a},{x:e,alpha:r},function(o,i){var a=i[0],s=i[1],u=a.greater(0);return{x:function(){return wr(u,o,o.mul(s))},alpha:function(){var c=wr(u,Fe(o),o.mul(a)),l=nt(s.shape,o.shape);return l.length>0&&(c=c.sum(l)),c.reshape(s.shape)}}},"Prelu")}}),qe=T({relu_:function(n){var t=C(n,"x","relu");return t.dtype==="bool"?t.toInt():P.runKernelFunc(function(e,r){var o=e.relu(t);return r([t]),o},{x:t},function(e,r){var o=r[0];return{x:function(){return e.mulStrict(o.step().toFloat())}}},"Relu")}}),fd=T({relu6_:function(n){var t=C(n,"x","relu6");return t.dtype==="bool"?t.toInt():P.runKernelFunc(function(e,r){var o=e.relu6(t);return r([t]),o},{x:t},function(e,r){var o=r[0],i=o.lessEqual(6).mul(o.step());return{x:function(){return e.mulStrict(i.toFloat())}}},"Relu6")}}),e1=T({selu_:function(n){var t=C(n,"x","selu");return P.runKernelFunc(function(e,r){var o=e.selu(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){var i=o.greater(re(0)),a=re(mu),s=re(gu),u=e.mul(s),c=e.mul(a).mul(o.toFloat().exp());return wr(i,u,c)}}})}}),tr=T({transpose_:function(n,t){var e=C(n,"x","transpose");if(t==null&&(t=e.shape.map(function(o,i){return i}).reverse()),R(e.rank===t.length,function(){return"Error in transpose: rank of input "+e.rank+" must match length of perm "+t+"."}),t.forEach(function(o){R(o>=0&&o<e.rank,function(){return"All entries in 'perm' must be between 0 and "+(e.rank-1)+" but got "+t})}),e.rank<=1)return e.clone();var r={perm:t};return P.runKernelFunc(function(o){return o.transpose(e,t)},{x:e},function(o){var i=au(t);return{x:function(){return o.transpose(i)}}},"Transpose",r)}}),t1=T({localResponseNormalization_:function(n,t,e,r,o){t===void 0&&(t=5),e===void 0&&(e=1),r===void 0&&(r=1),o===void 0&&(o=.5);var i=C(n,"x","localResponseNormalization");R(i.rank===4||i.rank===3,function(){return`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank `+i.rank+"."}),R(Ye(t),function(){return"Error in localResponseNormalization: depthRadius must be an integer but got depthRadius "+t+"."});var a=i,s=!1;i.rank===3&&(s=!0,a=i.as4D(1,i.shape[0],i.shape[1],i.shape[2]));var u=P.runKernelFunc(function(c,l){var f=c.localResponseNormalization4D(a,t,e,r,o);return l([a,f]),f},{x4D:a},function(c,l){var f=l[0],h=l[1];return{x4D:function(){return P.runKernelFunc(function(d){return d.LRNGrad(c,f,h,t,e,r,o)},{})}}});return s?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),hd=T({norm_:function(n,t,e,r){t===void 0&&(t="euclidean"),e===void 0&&(e=null),r===void 0&&(r=!1);var o=function s(u,c,l){if(l===void 0&&(l=null),u.rank===0)return u.abs();if(u.rank!==1&&l===null)return s(u.reshape([-1]),c,l);if(u.rank===1||typeof l=="number"||Array.isArray(l)&&l.length===1){if(c===1)return u.abs().sum(l);if(c===1/0)return u.abs().max(l);if(c===-1/0)return u.abs().min(l);if(c==="euclidean"||c===2)return u.abs().pow(re(2,"int32")).sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}if(Array.isArray(l)&&l.length===2){if(c===1)return u.abs().sum(l[0]).max(l[1]-1);if(c===1/0)return u.abs().sum(l[1]).max(l[0]);if(c===-1/0)return u.abs().sum(l[1]).min(l[0]);if(c==="fro"||c==="euclidean")return u.square().sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}throw new Error("Error in norm: invalid axis: "+l)}(n=C(n,"x","norm"),t,e),i=o.shape;if(r){var a=ot(e,n.shape);i=Nt(o.shape,a)}return o.reshape(i)}}),n1=T({basicLSTMCell_:function(n,t,e,r,o,i){var a=C(n,"forgetBias","basicLSTMCell"),s=C(t,"lstmKernel","basicLSTMCell"),u=C(e,"lstmBias","basicLSTMCell"),c=C(r,"data","basicLSTMCell"),l=C(o,"c","basicLSTMCell"),f=C(i,"h","basicLSTMCell"),h=c.concat(f,1).matMul(s).add(u),d=h.shape[0],p=h.shape[1]/4,v=[d,p],m=h.slice([0,0],v),g=h.slice([0,p],v),b=h.slice([0,2*p],v),x=h.slice([0,3*p],v),y=m.sigmoid().mulStrict(g.tanh()).addStrict(l.mulStrict(a.add(b).sigmoid())),w=y.tanh().mulStrict(x.sigmoid());return[y,w]}}),r1=T({multiRNNCell_:function(n,t,e,r){for(var o=C(t,"data","multiRNNCell"),i=Ti(e,"c","multiRNNCell"),a=Ti(r,"h","multiRNNCell"),s=o,u=[],c=0;c<n.length;c++){var l=n[c](s,i[c],a[c]);u.push(l[0]),u.push(l[1]),s=l[1]}var f=[],h=[];for(c=0;c<u.length;c+=2)f.push(u[c]),h.push(u[c+1]);return[f,h]}}),o1=T({movingAverage_:function(n,t,e,r,o){o===void 0&&(o=!0);var i=C(n,"v","movingAverage"),a=C(t,"x","movingAverage"),s=C(e,"decay","movingAverage");tg(i,a),R(st(i.shape,a.shape),function(){return"Shape mismatch in v and x"});var u=re(1),c=u.sub(s),l=a.sub(i).mul(c);if(o){R(r!=null,function(){return"When using zeroDebias: true, step is required."});var f=C(r,"step","movingAverage");l=l.div(u.sub(Vi(s,f)))}return i.add(l)}}),i1=T({stridedSlice_:function(n,t,e,r,o,i,a,s,u){if(o===void 0&&(o=0),i===void 0&&(i=0),a===void 0&&(a=0),s===void 0&&(s=0),u===void 0&&(u=0),r==null&&(r=new Array(t.length)),a!==0)throw new Error("ellipsis mask is not yet supported");var c=C(n,"x","stridedSlice"),l=$c(s),f=c.shape.slice();l.forEach(function(m){t[m]=0,e[m]=1,f.splice(m,0,1)}),c=c.reshape(f);for(var h=0;h<c.rank;h++)t[h]=vy(o,t,r,c.shape,h),e[h]=my(i,e,r,c.shape,h),r[h]=r[h]||1;var d=$c(u);d.forEach(function(m){e[m]=t[m]+1,r[m]=1});var p=lu(t,e,r),v=p.filter(function(m,g){return d.indexOf(g)===-1});return r.every(function(m){return m===1})?bn(c,t,p).reshape(v):P.runKernelFunc(function(m){return m.stridedSlice(c,t,e,r)},{$x:c}).reshape(v)}}),a1=T({topk_:function(n,t,e){t===void 0&&(t=1),e===void 0&&(e=!0);var r=C(n,"x","topk");if(r.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");var o=r.shape[r.shape.length-1];if(t>o)throw new Error("'k' passed to topk() must be <= the last dimension ("+o+") but got "+t);var i=P.runKernelFunc(function(a){return a.topk(r,t,e)},{$x:r});return{values:i[0],indices:i[1]}}}),s1=T({scatterND_:function(n,t,e){var r=C(n,"indices","scatterND","int32"),o=C(t,"updates","scatterND");return dy(o,r,e),P.runKernelFunc(function(i){return i.scatterND(r,o,e)},{indices:r,updates:o},null,"ScatterNd",{shape:e})}}),Cu=T({fft_:function(n){R(n.dtype==="complex64",function(){return"The dtype for tf.spectral.fft() must be complex64 but got "+n.dtype+"."});var t=n.shape[n.shape.length-1],e=n.size/t,r=n.as2D(e,t);return P.runKernelFunc(function(o){return o.fft(r)},{input:n}).reshape(n.shape)}}),zi=T({ifft_:function(n){R(n.dtype==="complex64",function(){return"The dtype for tf.spectral.ifft() must be complex64 but got "+n.dtype+"."});var t=n.shape[n.shape.length-1],e=n.size/t,r=n.as2D(e,t);return P.runKernelFunc(function(o){return o.ifft(r)},{input:n}).reshape(n.shape)}}),Eu=T({rfft_:function(n,t){R(n.dtype==="float32",function(){return"The dtype for rfft() must be real value but got "+n.dtype});var e,r=n.shape[n.shape.length-1],o=n.size/r;if(t!=null&&t<r){var i=n.shape.map(function(g){return 0}),a=n.shape.map(function(g){return g});a[n.shape.length-1]=t,e=n.slice(i,a),r=t}else if(t!=null&&t>r){var s=n.shape.map(function(g){return g});s[n.shape.length-1]=t-r,e=n.concat(Ge(s),n.shape.length-1),r=t}else e=n;var u=e.zerosLike(),c=lt(e,u).as2D(o,r),l=Cu(c),f=Math.floor(r/2)+1,h=jt(l),d=hn(l),p=h.split([f,r-f],h.shape.length-1),v=d.split([f,r-f],d.shape.length-1),m=e.shape.slice();return m[e.shape.length-1]=f,lt(p[0],v[0]).reshape(m)}}),dd=T({irfft_:function(n){var t=n.shape[n.shape.length-1],e=n.size/t;if(t<=2){var r=n.as2D(e,t),o=zi(r);return jt(o)}var i=[e,2*(t-1)],a=jt(n).as2D(e,t),s=hn(n).as2D(e,t),u=a.slice([0,1],[e,t-2]).reverse(1),c=s.slice([0,1],[e,t-2]).reverse(1).mul(re(-1)),l=a.concat(u,1),f=s.concat(c,1);return r=lt(l,f).as2D(i[0],i[1]),o=zi(r),jt(o)}}),u1=Object.freeze({fft:Cu,ifft:zi,rfft:Eu,irfft:dd}),c1=T({sparseToDense_:function(n,t,e,r){r===void 0&&(r=0);var o=C(n,"sparseIndices","sparseToDense","int32"),i=C(t,"sparseValues","sparseToDense"),a=C(r,"defaultValue","sparseToDense",i.dtype);return function(s,u,c,l){if(s.dtype!=="int32")throw new Error("tf.sparseToDense() expects the indices to be int32 type, but the dtype was "+s.dtype+".");if(s.rank>2)throw new Error("sparseIndices should be a scalar, vector, or matrix, but got shape "+s.shape+".");var f=s.rank>0?s.shape[0]:1,h=s.rank>1?s.shape[1]:1;if(c.length!==h)throw new Error("outputShape has incorrect number of elements:, "+c.length+", should be: "+h+".");var d=u.size;if(u.rank!==0&&(u.rank!==1||d!==f))throw new Error("sparseValues has incorrect shape "+u.shape+", should be [] or ["+f+"]");if(u.dtype!==l.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}(o,i,e,a),P.runKernelFunc(function(s){return s.sparseToDense(o,i,e,a)},{$sparseIndices:o,$sparseValues:i,$defaultValue:a})}}),l1=T({gatherND_:function(n,t){var e=C(t,"indices","gatherND","int32"),r=C(n,"x","gatherND");return P.runKernelFunc(function(o){return o.gatherND(r,e)},{x:r,indices:e},null,"GatherNd")}}),f1=T({diag_:function(n){var t=C(n,"x","diag").flatten(),e=n.shape.concat(n.shape);return P.runKernelFunc(function(r){return r.diag(t)},{$x:t}).reshape(e)}}),h1=T({dropout_:function(n,t,e,r){var o=C(n,"x","dropout");if(R(o.dtype==="float32",function(){return"x has to be a floating point tensor since it's going to be scaled, but got a "+o.dtype+" tensor instead."}),R(t>=0&&t<1,function(){return"rate must be a float in the range [0, 1), but got "+t+"."}),t===0)return n instanceof je?o.clone():o;var i=function(u,c){if(c==null)return u.shape.slice();if(st(u.shape,c))return c;if(u.shape.length===c.length){for(var l=[],f=0;f<u.shape.length;f++)c[f]==null&&u.shape[f]!=null?l.push(u.shape[f]):l.push(c[f]);return l}return c}(o,e),a=1-t,s=lh(i,0,1,"float32",r).add(a).floor().div(a);return o.mul(s)}});function pd(n,t,e){for(var r=1-n%2,o=new Float32Array(n),i=0;i<n;++i){var a=2*Math.PI*i/(n+r-1);o[i]=t-e*Math.cos(a)}return Je(o,"float32")}var Iu=T({hannWindow_:function(n){return pd(n,.5,.5)}}),vd=T({hammingWindow_:function(n){return pd(n,.54,.46)}}),Ru=T({frame_:function(n,t,e,r,o){r===void 0&&(r=!1),o===void 0&&(o=0);for(var i=0,a=[];i+t<=n.size;)a.push(bn(n,i,t)),i+=e;if(r)for(;i<n.size;){var s=i+t-n.size,u=Ze([bn(n,i,t-s),yn([s],o)]);a.push(u),i+=e}return a.length===0?Yn([],[0,t]):Ze(a).as2D(a.length,t)}}),md=T({stft_:function(n,t,e,r,o){var i;o===void 0&&(o=Iu),r==null&&(i=t,r=Math.floor(Math.pow(2,Math.ceil(Math.log(i)/Math.log(2)))));for(var a=Ru(n,t,e),s=xt(a,o(t)),u=[],c=0;c<a.shape[0];c++)u.push(Eu(s.slice([c,0],[1,t]),r));return Ze(u)}}),d1=Object.freeze({hannWindow:Iu,hammingWindow:vd,frame:Ru,stft:md}),yt,p1=function(n,t,e){return e===void 0&&(e=1),ae(this,void 0,void 0,function(){var r,o,i,a,s,u,c,l,f,h,d,p,v,m;return se(this,function(g){switch(g.label){case 0:return r=C(n,"predictions","inTopK"),o=C(t,"targets","inTopK"),R(r.rank>1,function(){return"inTopK() expects the predictions to be of rank 2 or higher, but got "+r.rank}),R(r.rank-1===o.rank,function(){return"predictions rank should be 1 larger than targets rank, but got predictions rank "+r.rank+" and targets rank "+o.rank}),Le(r.shape.slice(0,r.shape.length-1),o.shape,"predictions's shape should be align with the targets' shape, except the last dimension."),i=r.shape[r.shape.length-1],R(e>0&&e<=i,function(){return"'k' passed to inTopK() must be > 0 && <= the predictions last dimension ("+i+"), but got "+e}),[4,r.data()];case 1:return a=g.sent(),[4,o.data()];case 2:for(s=g.sent(),u=[a.length/i,i],l=u[1],f=No("bool",c=u[0]),h=0;h<c;h++){for(d=h*l,p=a.subarray(d,d+l),v=[],m=0;m<p.length;m++)v.push({value:p[m],index:m});for(v.sort(function(b,x){return x.value-b.value}),f[h]=0,m=0;m<e;m++)if(v[m].index===s[h]){f[h]=1;break}}return n!==r&&r.dispose(),t!==o&&o.dispose(),[2,ht(f,o.shape,"bool")]}})})};(function(n){n[n.NONE=0]="NONE",n[n.MEAN=1]="MEAN",n[n.SUM=2]="SUM",n[n.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(yt||(yt={}));var v1=T({absoluteDifference_:function(n,t,e,r){r===void 0&&(r=yt.SUM_BY_NONZERO_WEIGHTS);var o=C(n,"labels","absoluteDifference"),i=C(t,"predictions","absoluteDifference"),a=null;e!=null&&(a=C(e,"weights","absoluteDifference")),Le(o.shape,i.shape,"Error in absoluteDifference: ");var s=o.sub(i).abs();return Wn(s,a,r)}}),Wn=T({computeWeightedLoss_:function(n,t,e){e===void 0&&(e=yt.SUM_BY_NONZERO_WEIGHTS);var r=C(n,"losses","computeWeightedLoss"),o=null;t!=null&&(o=C(t,"weights","computeWeightedLoss"));var i=o==null?r:r.mul(o);if(e===yt.NONE)return i;if(e===yt.SUM)return i.sum();if(e===yt.MEAN){if(o==null)return i.mean();var a=r.size/o.size,s=i.sum().div(o.sum());return a>1?s.div(re(a)):s}if(e===yt.SUM_BY_NONZERO_WEIGHTS){if(o==null)return i.sum().div(re(r.size));var u=o.mul(ao(r.shape)).notEqual(re(0)).sum().toFloat();return i.sum().div(u)}throw Error("Unknown reduction: "+e)}}),m1=T({cosineDistance_:function(n,t,e,r,o){o===void 0&&(o=yt.SUM_BY_NONZERO_WEIGHTS);var i=C(n,"labels","cosineDistance"),a=C(t,"predictions","cosineDistance"),s=null;r!=null&&(s=C(r,"weights","cosineDistance")),Le(i.shape,a.shape,"Error in cosineDistance: ");var u=re(1).sub(i.mul(a).sum(e,!0));return Wn(u,s,o)}}),g1=T({hingeLoss_:function(n,t,e,r){r===void 0&&(r=yt.SUM_BY_NONZERO_WEIGHTS);var o=C(n,"labels","hingeLoss"),i=C(t,"predictions","hingeLoss"),a=null;e!=null&&(a=C(e,"weights","hingeLoss")),Le(o.shape,i.shape,"Error in hingeLoss: ");var s=re(1);o=re(2).mul(o).sub(s);var u=s.sub(o.mul(i)).relu();return Wn(u,a,r)}}),y1=T({huberLoss_:function(n,t,e,r,o){r===void 0&&(r=1),o===void 0&&(o=yt.SUM_BY_NONZERO_WEIGHTS);var i=C(n,"labels","huberLoss"),a=C(t,"predictions","huberLoss"),s=null;e!=null&&(s=C(e,"weights","huberLoss")),Le(i.shape,a.shape,"Error in huberLoss: ");var u=re(r),c=a.sub(i).abs(),l=$h(c,u),f=c.sub(l),h=re(.5).mul(l.square()).add(u.mul(f));return Wn(h,s,o)}}),x1=T({logLoss_:function(n,t,e,r,o){r===void 0&&(r=1e-7),o===void 0&&(o=yt.SUM_BY_NONZERO_WEIGHTS);var i=C(n,"labels","logLoss"),a=C(t,"predictions","logLoss"),s=null;e!=null&&(s=C(e,"weights","logLoss")),Le(i.shape,a.shape,"Error in logLoss: ");var u=re(1),c=re(r),l=i.mul(a.add(c).log()).neg().sub(u.sub(i).mul(u.sub(a).add(c).log()));return Wn(l,s,o)}}),b1=T({meanSquaredError_:function(n,t,e,r){r===void 0&&(r=yt.SUM_BY_NONZERO_WEIGHTS);var o=C(n,"labels","meanSquaredError"),i=C(t,"predictions","meanSquaredError"),a=null;e!=null&&(a=C(e,"weights","meanSquaredError")),Le(o.shape,i.shape,"Error in meanSquaredError: ");var s=o.squaredDifference(i);return Wn(s,a,r)}}),w1=T({sigmoidCrossEntropy_:function(n,t,e,r,o){r===void 0&&(r=0),o===void 0&&(o=yt.SUM_BY_NONZERO_WEIGHTS);var i=C(n,"multiClassLabels","sigmoidCrossEntropy"),a=C(t,"logits","sigmoidCrossEntropy"),s=null;if(e!=null&&(s=C(e,"weights","sigmoidCrossEntropy")),Le(i.shape,a.shape,"Error in sigmoidCrossEntropy: "),r>0){var u=re(r),c=re(1),l=re(.5);i=i.mul(c.sub(u)).add(l.mul(u))}var f=function(h,d){var p=C(h,"labels","sigmoidCrossEntropyWithLogits"),v=C(d,"logits","sigmoidCrossEntropyWithLogits");Le(p.shape,v.shape,"Error in sigmoidCrossEntropyWithLogits: ");var m=v.relu(),g=v.mul(p),b=v.abs().neg().exp().log1p();return m.sub(g).add(b)}(i,a);return Wn(f,s,o)}}),_1=T({softmaxCrossEntropy_:function(n,t,e,r,o){r===void 0&&(r=0),o===void 0&&(o=yt.SUM_BY_NONZERO_WEIGHTS);var i=C(n,"onehotLabels","softmaxCrossEntropy"),a=C(t,"logits","softmaxCrossEntropy"),s=null;if(e!=null&&(s=C(e,"weights","softmaxCrossEntropy")),Le(i.shape,a.shape,"Error in softmaxCrossEntropy: "),r>0){var u=re(r),c=re(1),l=re(i.shape[1]);i=i.mul(c.sub(u)).add(u.div(l))}var f=function(h,d,p){if(p===void 0&&(p=-1),p===-1&&(p=d.rank-1),p!==d.rank-1)throw Error("Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank "+d.rank+" and dim was "+p);return ia(function(v,m,g){var b=m.logSumExp([p],!0),x=m.toFloat().sub(b);return g([v,x]),{value:x.mul(v).neg().sum([p]),gradFunc:function(y,w){var _=w[0],k=w[1],S=Nt(y.shape,[p]);return[y.reshape(S).mul(_.toFloat().sub(k.exp())),y.reshape(S).mul(k.exp().sub(_.toFloat()))]}}})(h,d)}(i,a);return Wn(f,s,o)}}),C1=Object.freeze({get Reduction(){return yt},absoluteDifference:v1,computeWeightedLoss:Wn,cosineDistance:m1,hingeLoss:g1,huberLoss:y1,logLoss:x1,meanSquaredError:b1,sigmoidCrossEntropy:w1,softmaxCrossEntropy:_1});function gl(n,t){return t===void 0&&(t=!1),P.tidy(function(){if(n.shape.length!==2)throw new Error("qr2d() requires a 2D Tensor, but got a "+n.shape.length+"D Tensor.");for(var e=n.shape[0],r=n.shape[1],o=ch(e),i=n.clone(),a=Yn([[1]],[1,1]),s=a.clone(),u=e>=r?r:e,c=function(f){var h,d=i,p=s,v=o;h=P.tidy(function(){var m=i.slice([f,f],[e-f,1]),g=m.norm(),b=i.slice([f,f],[1,1]),x=Yn([[-1]]).where(b.greater(0),Yn([[1]])),y=b.sub(x.mul(g)),w=m.div(y);s=w.shape[0]===1?a.clone():a.concat(w.slice([1,0],[w.shape[0]-1,w.shape[1]]),0);var _=x.matMul(y).div(g).neg(),k=i.slice([f,0],[e-f,r]),S=_.mul(s);if(f===0)i=k.sub(S.matMul(s.transpose().matMul(k)));else{var I=k.sub(S.matMul(s.transpose().matMul(k)));i=i.slice([0,0],[f,r]).concat(I,0)}var E=o.slice([0,f],[e,o.shape[1]-f]);if(f===0)o=E.sub(E.matMul(s).matMul(S.transpose()));else{var F=E.sub(E.matMul(s).matMul(S.transpose()));o=o.slice([0,0],[e,f]).concat(F,1)}return[s,i,o]}),s=h[0],i=h[1],o=h[2],Tt([d,p,v])},l=0;l<u;++l)c(l);return!t&&e>r&&(o=o.slice([0,0],[e,r]),i=i.slice([0,0],[r,r])),[o,i]})}var E1=T({bandPart_:function(n,t,e){if(t%1!=0)throw new Error("bandPart(): numLower must be an integer, got "+t+".");if(e%1!=0)throw new Error("bandPart(): numUpper must be an integer, got "+e+".");var r=C(n,"a","bandPart");if(r.rank<2)throw new Error("bandPart(): Rank must be at least 2, got "+r.rank+".");var o=r.shape,i=r.shape.slice(-2),a=i[0],s=i[1];if(!(t<=a))throw new Error("bandPart(): numLower ("+t+") must not be greater than the number of rows ("+a+").");if(!(e<=s))throw new Error("bandPart(): numUpper ("+e+") must not be greater than the number of columns ("+s+").");t<0&&(t=a),e<0&&(e=s);var u=Ni(0,a,1,"int32").reshape([-1,1]),c=Ni(0,s,1,"int32"),l=rt(u,c),f=sa(l.lessEqual(re(+t,"int32")),l.greaterEqual(re(-e,"int32"))),h=Ge([a,s],r.dtype);return Vt(et(r.reshape([-1,a,s])).map(function(d){return wr(f,d,h)})).reshape(o)}}),I1=T({gramSchmidt_:function(n){var t;if(Array.isArray(n)){t=!1,R(n!=null&&n.length>0,function(){return"Gram-Schmidt process: input must not be null, undefined, or empty"});for(var e=n[0].shape[0],r=function(u){R(n[u].shape[0]===e,function(){return"Gram-Schmidt: Non-unique lengths found in the input vectors: ("+n[u].shape[0]+" vs. "+e+")"})},o=1;o<n.length;++o)r(o)}else t=!0,n=uu(n,n.shape[0],0).map(function(u){return hh(u,[0])});R(n.length<=n[0].shape[0],function(){return"Gram-Schmidt: Number of vectors ("+n.length+") exceeds number of dimensions ("+n[0].shape[0]+")."});var i=[],a=n,s=function(u){i.push(P.tidy(function(){var c=a[u];if(u>0)for(var l=0;l<u;++l){var f=ud(i[l].mulStrict(c)).mul(i[l]);c=c.sub(f)}return c.div(hd(c,"euclidean"))}))};for(o=0;o<n.length;++o)s(o);return t?Vt(i,0):i}}),R1=T({qr_:function(n,t){if(t===void 0&&(t=!1),n.rank<2)throw new Error("qr() requires input tensor to have a rank >= 2, but got rank "+n.rank);if(n.rank===2)return gl(n,t);var e=n.shape.slice(0,n.shape.length-2).reduce(function(a,s){return a*s}),r=et(n.reshape([e,n.shape[n.shape.length-2],n.shape[n.shape.length-1]]),0),o=[],i=[];return r.forEach(function(a){var s=gl(a,t),u=s[0],c=s[1];o.push(u),i.push(c)}),[Vt(o,0).reshape(n.shape),Vt(i,0).reshape(n.shape)]}}),S1=Object.freeze({bandPart:E1,gramSchmidt:I1,qr:R1});function fa(n,t,e,r,o,i){r==null&&(r=.5),o==null&&(o=Number.NEGATIVE_INFINITY),i==null&&(i=0);var a=n.shape[0];return e=Math.min(e,a),R(0<=r&&r<=1,function(){return"iouThreshold must be in [0, 1], but was '"+r+"'"}),R(n.rank===2,function(){return"boxes must be a 2D tensor, but was of rank '"+n.rank+"'"}),R(n.shape[1]===4,function(){return"boxes must have 4 columns, but 2nd dimension was "+n.shape[1]}),R(t.rank===1,function(){return"scores must be a 1D tensor"}),R(t.shape[0]===a,function(){return"scores has incompatible shape with boxes. Expected "+a+", but was "+t.shape[0]}),R(0<=i&&i<=1,function(){return"softNmsSigma must be in [0, 1], but was '"+i+"'"}),{maxOutputSize:e,iouThreshold:r,scoreThreshold:o,softNmsSigma:i}}var k1=T({resizeBilinear_:function(n,t,e){e===void 0&&(e=!1);var r=C(n,"images","resizeBilinear");R(r.rank===3||r.rank===4,function(){return"Error in resizeBilinear: x must be rank 3 or 4, but got rank "+r.rank+"."}),R(t.length===2,function(){return"Error in resizeBilinear: new shape must 2D, but got shape "+t+"."});var o=r,i=!1;r.rank===3&&(i=!0,o=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var a=t[0],s=t[1],u=P.runKernelFunc(function(c,l){return l([o]),c.resizeBilinear(o,a,s,e)},{x:o},function(c,l){return{x:function(){return P.runKernelFunc(function(f){return f.resizeBilinearBackprop(c,l[0],e)},{})}}},"ResizeBilinear",{alignCorners:e,newHeight:a,newWidth:s});return i?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),A1=T({resizeNearestNeighbor_:function(n,t,e){e===void 0&&(e=!1);var r=C(n,"images","resizeNearestNeighbor");R(r.rank===3||r.rank===4,function(){return"Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank "+r.rank+"."}),R(t.length===2,function(){return"Error in resizeNearestNeighbor: new shape must 2D, but got shape "+t+"."}),R(r.dtype==="float32"||r.dtype==="int32",function(){return"`images` must have `int32` or `float32` as dtype"});var o=r,i=!1;r.rank===3&&(i=!0,o=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var a=t[0],s=t[1],u=P.runKernelFunc(function(c,l){return l([o]),c.resizeNearestNeighbor(o,a,s,e)},{batchImages:o},function(c,l){return{batchImages:function(){return P.runKernelFunc(function(f){return f.resizeNearestNeighborBackprop(c,l[0],e)},{})}}});return i?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),D1=T({nonMaxSuppression_:function(n,t,e,r,o){r===void 0&&(r=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY);var i=C(n,"boxes","nonMaxSuppression"),a=C(t,"scores","nonMaxSuppression"),s=fa(i,a,e,r,o);e=s.maxOutputSize,r=s.iouThreshold,o=s.scoreThreshold;var u={maxOutputSize:e,iouThreshold:r,scoreThreshold:o};return P.runKernelFunc(function(c){return c.nonMaxSuppression(i,a,e,r,o)},{boxes:i,scores:a},null,"NonMaxSuppressionV3",u)}}),T1=function(n,t,e,r,o){return r===void 0&&(r=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),ae(this,void 0,void 0,function(){var i,a,s,u,c,l,f;return se(this,function(h){switch(h.label){case 0:return i=C(n,"boxes","nonMaxSuppressionAsync"),a=C(t,"scores","nonMaxSuppressionAsync"),s=fa(i,a,e,r,o),e=s.maxOutputSize,r=s.iouThreshold,o=s.scoreThreshold,[4,Promise.all([i.data(),a.data()])];case 1:return u=h.sent(),c=u[0],l=u[1],f=hu(c,l,e,r,o),i!==n&&i.dispose(),a!==t&&a.dispose(),[2,f]}})})},N1=T({nonMaxSuppressionWithScore_:function(n,t,e,r,o,i){r===void 0&&(r=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),i===void 0&&(i=0);var a=C(n,"boxes","nonMaxSuppression"),s=C(t,"scores","nonMaxSuppression"),u=fa(a,s,e,r,o,i),c={maxOutputSize:e=u.maxOutputSize,iouThreshold:r=u.iouThreshold,scoreThreshold:o=u.scoreThreshold,softNmsSigma:i=u.softNmsSigma},l=P.runKernel("NonMaxSuppressionV5",{boxes:a,scores:s},c);return{selectedIndices:l[0],selectedScores:l[1]}}}),F1=function(n,t,e,r,o,i){return r===void 0&&(r=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),i===void 0&&(i=0),ae(this,void 0,void 0,function(){var a,s,u,c,l,f,h;return se(this,function(d){switch(d.label){case 0:return a=C(n,"boxes","nonMaxSuppressionAsync"),s=C(t,"scores","nonMaxSuppressionAsync"),u=fa(a,s,e,r,o,i),e=u.maxOutputSize,r=u.iouThreshold,o=u.scoreThreshold,i=u.softNmsSigma,[4,Promise.all([a.data(),s.data()])];case 1:return c=d.sent(),l=c[0],f=c[1],h=du(l,f,e,r,o,i),a!==n&&a.dispose(),s!==t&&s.dispose(),[2,h]}})})},P1=T({cropAndResize_:function(n,t,e,r,o,i){var a=C(n,"image","cropAndResize"),s=C(t,"boxes","cropAndResize","float32"),u=C(e,"boxInd","cropAndResize","int32");o=o||"bilinear",i=i||0;var c=s.shape[0];return R(a.rank===4,function(){return"Error in cropAndResize: image must be rank 4,but got rank "+a.rank+"."}),R(s.rank===2&&s.shape[1]===4,function(){return"Error in cropAndResize: boxes must be have size ["+c+",4] but had shape "+s.shape+"."}),R(u.rank===1&&u.shape[0]===c,function(){return"Error in cropAndResize: boxInd must be have size ["+c+"] but had shape "+s.shape+"."}),R(r.length===2,function(){return"Error in cropAndResize: cropSize must be of length 2, but got length "+r.length+"."}),R(r[0]>=1&&r[1]>=1,function(){return"cropSize must be atleast [1,1], but was "+r}),R(o==="bilinear"||o==="nearest",function(){return"method must be bilinear or nearest, but was "+o}),P.runKernelFunc(function(l,f){return l.cropAndResize(a,s,u,r,o,i)},{images:a,boxes:s,boxInd:u},null,"CropAndResize",{method:o,extrapolationValue:i,cropSize:r})}}),Su=Object.freeze({resizeBilinear:k1,resizeNearestNeighbor:A1,nonMaxSuppression:D1,nonMaxSuppressionAsync:T1,nonMaxSuppressionWithScore:N1,nonMaxSuppressionWithScoreAsync:F1,cropAndResize:P1}),ku=function(n,t){return!(n>0)||t==="linear"},Au=function(n,t,e){if(e==null||e==="linear")return n;if(e==="relu")return n.mul(t.step());throw new Error("Gradient for activation "+e+" has not been implemented yet.")},Du=function(n,t){var e=t,r=nt(n.shape,t.shape);return r.length>0&&(e=e.sum(r)),e.reshape(n.shape)},Tu=function(n,t,e){if(t==="linear")return n;if(t==="relu")return qe(n);if(t==="elu")return cd(n);if(t==="relu6")return fd(n);if(t==="prelu")return ld(n,e);throw new Error("Unknown fused activation "+t+".")},M1=T({fusedMatMul_:function(n){var t,e=n.a,r=n.b,o=n.transposeA,i=o!==void 0&&o,a=n.transposeB,s=a!==void 0&&a,u=n.bias,c=n.activation,l=c===void 0?"linear":c,f=n.preluActivationWeights;if(ku(P.state.gradientDepth,l)===!1){var h=ca(e,r,i,s);return u!=null&&(h=Ae(h,u)),Tu(h,l,f)}var d=C(e,"a","fused matMul"),p=C(r,"b","fused matMul");t=Ke(d,p),d=t[0],p=t[1];var v=i?d.shape[d.rank-2]:d.shape[d.rank-1],m=s?p.shape[p.rank-1]:p.shape[p.rank-2],g=i?d.shape[d.rank-1]:d.shape[d.rank-2],b=s?p.shape[p.rank-2]:p.shape[p.rank-1],x=d.shape.slice(0,-2),y=p.shape.slice(0,-2),w=le(x),_=le(y);R(d.rank>=2&&p.rank>=2&&d.rank===p.rank,function(){return"Error in fused matMul: inputs must have the same rank of at least 2, got ranks "+d.rank+" and "+p.rank+"."}),R(st(x,y),function(){return"Error in fused matMul: outer dimensions ("+x+") and ("+y+") of Tensors with shapes "+d.shape+" and "+p.shape+" must match."}),R(v===m,function(){return"Error in fused matMul: inner shapes ("+v+") and ("+m+") of Tensors with shapes "+d.shape+" and "+p.shape+" and transposeA="+i+" and transposeB="+s+" must match."});var k,S,I=d.shape.slice(0,-2).concat([g,b]),E=i?d.as3D(w,v,g):d.as3D(w,g,v),F=s?p.as3D(_,b,m):p.as3D(_,m,b);u!=null&&Te(I,(k=Ke(k=C(u,"bias","fused matMul"),d)[0]).shape),f!=null&&(S=C(f,"prelu weights","fused matMul"));var N={a:E,b:F};u!=null&&(N.bias=k),f!=null&&(N.preluActivationWeights=S);var U=[E,F];return P.runKernelFunc(function(V,z){var H=V.fusedBatchMatMul({a:E,b:F,transposeA:i,transposeB:s,bias:k,activation:l,preluActivationWeights:S});return z([E,F,H]),H},N,function(V,z){var H=z[0],L=z[1],B=z[2],K=Au(V,B,l),Y={};return u!=null&&(Y={bias:function(){return Du(k,K)}}),Object.assign(i||s?!i&&s?{a:function(){return K.matMul(L,!1,!1)},b:function(){return K.matMul(H,!0,!1)}}:i&&!s?{a:function(){return L.matMul(K,!1,!0)},b:function(){return H.matMul(K,!1,!1)}}:{a:function(){return L.matMul(K,!0,!0)},b:function(){return K.matMul(H,!0,!0)}}:{a:function(){return K.matMul(L,!1,!0)},b:function(){return H.matMul(K,!0,!1)}},Y)},"_FusedMatMul",{transposeA:i,transposeB:s,activation:l},U,[!0]).reshape(I)}}),O1=T({fusedConv2d_:function(n){var t=n.x,e=n.filter,r=n.strides,o=n.pad,i=n.dataFormat,a=i===void 0?"NHWC":i,s=n.dilations,u=s===void 0?[1,1]:s,c=n.dimRoundingMode,l=n.bias,f=n.activation,h=f===void 0?"linear":f,d=n.preluActivationWeights;if(h=h||"linear",ku(P.state.gradientDepth,h)===!1){var p=Xt(t,e,r,o,a,u,c);return l!=null&&(p=Ae(p,l)),Tu(p,h,d)}var v=C(t,"x","conv2d"),m=C(e,"filter","conv2d"),g=v,b=!1;v.rank===3&&(b=!0,g=v.as4D(1,v.shape[0],v.shape[1],v.shape[2])),R(g.rank===4,function(){return"Error in fused conv2d: input must be rank 4, but got rank "+g.rank+"."}),R(m.rank===4,function(){return"Error in fused conv2d: filter must be rank 4, but got rank "+m.rank+"."}),c!=null&&R(Ye(o),function(){return"Error in fused conv2d: pad must be an integer when using, dimRoundingMode "+c+" but got pad "+o+"."}),R(g.shape[3]===m.shape[2],function(){return"Error in conv2d: depth of input ("+g.shape[3]+") must match input depth for filter "+m.shape[2]+"."}),R(Ft(r,u),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+r+" and dilations '"+u+"'"}),R(a==="NHWC",function(){return"Error in conv2d: got dataFormat of "+a+" but only NHWC is currently supported."});var x,y,w=Ir(g.shape,m.shape,r,u,o,c);l!=null&&(x=Ke(x=C(l,"bias","fused conv2d"),v)[0],Te(w.outShape,x.shape)),d!=null&&(y=C(d,"prelu weights","fused conv2d"));var _={x:g,filter:m};l!=null&&(_.bias=x),d!=null&&(_.preluActivationWeights=y);var k=[m,g],S=P.runKernelFunc(function(I,E){var F=I.fusedConv2d({input:g,filter:m,convInfo:w,bias:x,activation:h,preluActivationWeights:y});return E([m,g,F]),F},_,function(I,E){var F=E,N=F[0],U=F[1],V=F[2],z=Au(I,V,h);R(oo(u),function(){return"Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+u+"'"});var H={};return l!=null&&(H={bias:function(){return Du(x,z)}}),Object.assign({x:function(){return td(U.shape,z,N,r,o)},filter:function(){return wu(U,z,N.shape,r,o)}},H)},"FusedConv2D",{convInfo:w,activation:h},k,[!0]);return b?S.as3D(S.shape[1],S.shape[2],S.shape[3]):S}}),B1=T({fusedDepthwiseConv2d_:function(n){var t=n.x,e=n.filter,r=n.strides,o=n.pad,i=n.dataFormat,a=i===void 0?"NHWC":i,s=n.dilations,u=s===void 0?[1,1]:s,c=n.dimRoundingMode,l=n.bias,f=n.activation,h=f===void 0?"linear":f,d=n.preluActivationWeights;if(ku(P.state.gradientDepth,h)===!1){var p=ua(t,e,r,o,a,u,c);return l!=null&&(p=Ae(p,l)),Tu(p,h,d)}var v=C(t,"x","depthwiseConv2d"),m=C(e,"filter","depthwiseConv2d"),g=v,b=!1;v.rank===3&&(b=!0,g=v.as4D(1,v.shape[0],v.shape[1],v.shape[2])),R(g.rank===4,function(){return"Error in fused depthwiseConv2d: input must be rank 4, but got rank "+g.rank+"."}),R(m.rank===4,function(){return"Error in fused depthwiseConv2d: filter must be rank 4, but got rank "+m.rank+"."}),R(g.shape[3]===m.shape[2],function(){return"Error in fused depthwiseConv2d: number of input channels ("+g.shape[3]+") must match the inChannels dimension in filter "+m.shape[2]+"."}),u==null&&(u=[1,1]),R(Ft(r,u),function(){return"Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides "+r+" and dilations '"+u+"'"}),c!=null&&R(Ye(o),function(){return"Error in fused depthwiseConv2d: pad must be an integer when using dimRoundingMode "+c+" but got pad "+o+"."});var x,y,w=Ir(g.shape,m.shape,r,u,o,c,!0);l!=null&&(x=Ke(x=C(l,"bias","fused conv2d"),v)[0],Te(w.outShape,x.shape)),d!=null&&(y=C(d,"prelu weights","fused depthwiseConv2d"));var _={x:g,filter:m};l!=null&&(_.bias=x),d!=null&&(_.preluActivationWeights=y);var k=[m,g],S=P.runKernelFunc(function(I,E){var F=I.fusedDepthwiseConv2D({input:g,filter:m,convInfo:w,bias:x,activation:h,preluActivationWeights:y});return E([m,g,F]),F},_,function(I,E){R(oo(u),function(){return"Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+u+"'"});var F=E[0],N=E[1],U=E[2],V=Au(I,U,h),z={};return l!=null&&(z={bias:function(){return Du(x,V)}}),Object.assign({x:function(){return nd(N.shape,V,F,w)},filter:function(){return rd(N,V,F.shape,w)}},z)},"FusedDepthwiseConv2D",{convInfo:w,activation:h},k,[!0]);return b?S.as3D(S.shape[1],S.shape[2],S.shape[3]):S}}),L1=Object.freeze({matMul:M1,conv2d:O1,depthwiseConv2d:B1}),W1=Object.freeze({image:Su,linalg:S1,losses:C1,spectral:u1,fused:L1,signal:d1,square:xx,squaredDifference:Wh,conv1d:kb,conv2d:Xt,conv3d:Ab,depthwiseConv2d:ua,separableConv2d:_u,conv2dTranspose:Db,conv3dTranspose:Tb,op:T,batchNormalization2d:$x,batchNormalization3d:Yx,batchNormalization4d:Jx,batchNormalization:Qx,batchNorm:jh,batchNorm2d:Zx,batchNorm3d:eb,batchNorm4d:tb,booleanMaskAsync:Sb,complex:lt,real:jt,imag:hn,concat:Ze,concat1d:Lg,concat2d:Wg,concat3d:Ug,concat4d:Vg,split:uu,matMul:ca,dot:Nb,outerProduct:Fb,reverse:qo,reverse1d:Pb,reverse2d:Mb,reverse3d:Ob,reverse4d:Bb,maxPool:at,avgPool:Ko,pool:Lb,maxPool3d:Wb,avgPool3d:Ub,slice:bn,slice1d:Vb,slice2d:zb,slice3d:ad,slice4d:Hb,abs:bx,acos:wx,acosh:_x,asin:Cx,asinh:Ex,atan:Ix,atanh:Rx,ceil:Sx,clipByValue:yu,cos:kx,cosh:Ax,erf:Dx,exp:Ds,expm1:Tx,floor:Nx,log:Fx,log1p:Px,logSigmoid:Mx,neg:Ui,reciprocal:Ox,round:Bx,rsqrt:Uh,sigmoid:Vh,sign:Lx,isNaN:Wx,isInf:Ux,isFinite:Vx,sin:zx,sinh:Hx,softplus:Gx,sqrt:jx,step:qx,tan:Kx,tanh:Xx,all:Gb,any:jb,argMax:qb,argMin:Kb,logSumExp:Xb,max:la,mean:$b,min:Yb,moments:Jb,sum:ud,prod:Qb,equal:Yh,equalStrict:gb,greater:yb,greaterEqual:Jh,greaterEqualStrict:xb,greaterStrict:bb,less:wb,lessEqual:_b,lessEqualStrict:Cb,lessStrict:Eb,notEqual:Ib,notEqualStrict:Rb,add:Ae,addN:ob,addStrict:ib,atan2:ab,div:Yt,divNoNan:sb,divStrict:ub,floorDiv:Xh,maximum:xu,maximumStrict:cb,minimum:$h,minimumStrict:lb,mod:fb,modStrict:hb,mul:xt,mulStrict:db,pow:Vi,powStrict:pb,squaredDifferenceStrict:vb,sub:rt,subStrict:mb,elu:cd,leakyRelu:Zb,prelu:ld,relu:qe,relu6:fd,selu:e1,logicalAnd:sa,logicalNot:nb,logicalOr:qh,logicalXor:rb,where:wr,whereAsync:Kh,buffer:ye,print:Yg,batchToSpaceND:uh,broadcastTo:Jg,cast:Qg,clone:Zg,cumsum:ey,depthToSpace:ty,expandDims:Gt,eye:ch,multinomial:ny,oneHot:Rs,pad:Er,pad1d:ry,pad2d:oy,pad3d:iy,pad4d:ay,rand:sy,randomNormal:uy,randomGamma:cy,randomUniform:lh,reshape:Jt,spaceToBatchND:fh,squeeze:hh,stack:Vt,tile:Kr,truncatedNormal:ly,unstack:et,setdiff1dAsync:fy,fill:yn,linspace:Bg,ones:ao,range:Ni,scalar:re,tensor:ht,tensor1d:Je,tensor2d:Yn,tensor3d:su,tensor4d:kt,tensor5d:Pg,tensor6d:Mg,variable:Og,zeros:Ge,onesLike:sh,zerosLike:Fe,transpose:tr,softmax:Ln,logSoftmax:yy,localResponseNormalization:t1,norm:hd,gather:bu,unsortedSegmentSum:Qh,basicLSTMCell:n1,multiRNNCell:r1,movingAverage:o1,stridedSlice:i1,topk:a1,scatterND:s1,fft:Cu,ifft:zi,rfft:Eu,irfft:dd,sparseToDense:c1,gatherND:l1,diag:f1,dropout:h1,hannWindow:Iu,hammingWindow:vd,frame:Ru,stft:md,inTopKAsync:p1});function X(n,t){Array.isArray(n)||(n=[n]),n.forEach(function(e){e!=null&&R(e.dtype!=="complex64",function(){return t+" does not support complex64 tensors."})})}function Ka(n,t,e,r){if(e==="linear")return n.linear(t);if(e==="relu")return n.relu(t);if(e==="elu")return n.elu(t);if(e==="relu6")return n.relu6(t);if(e==="prelu")return n.prelu(t,r);throw new Error("Activation "+e+" has not been implemented for the CPU backend.")}var U1=function(n){function t(){var e=n.call(this)||this;return e.blockSize=48,e.firstUse=!0,e.data=new xh(e,P),e}return tn(t,n),t.prototype.write=function(e,r,o){this.firstUse&&(this.firstUse=!1,G().get("IS_NODE")&&Di(`
============================
Hi there 👋. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('@tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.
============================`));var i={};return this.data.set(i,{values:e,dtype:o}),i},t.prototype.move=function(e,r,o,i){this.data.set(e,{values:r,dtype:i})},t.prototype.numDataIds=function(){return this.data.numDataIds()},t.prototype.read=function(e){return ae(this,void 0,void 0,function(){return se(this,function(r){return[2,this.readSync(e)]})})},t.prototype.readSync=function(e){var r=this.data.get(e),o=r.dtype,i=r.complexTensors;return o==="complex64"?As(this.readSync(i.real.dataId),this.readSync(i.imag.dataId)):this.data.get(e).values},t.prototype.bufferSync=function(e){var r=this.readSync(e.dataId),o=r;if(e.dtype==="string")try{o=r.map(function(i){return Si(i)})}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return ye(e.shape,e.dtype,o)},t.prototype.makeOutput=function(e,r,o){var i=this.write(e,r,o);return P.makeTensorFromDataId(i,r,o,this)},t.prototype.disposeData=function(e){if(this.data.has(e)){var r=this.data.get(e).complexTensors;r!=null&&(r.real.dispose(),r.imag.dispose()),this.data.delete(e)}},t.prototype.time=function(e){return ae(this,void 0,void 0,function(){var r;return se(this,function(o){return r=ln(),e(),[2,{kernelMs:ln()-r}]})})},t.prototype.memory=function(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}},t.prototype.complex=function(e,r){var o=this.makeOutput(null,e.shape,"complex64");return this.data.get(o.dataId).complexTensors={real:P.keep(e.clone()),imag:P.keep(r.clone())},o},t.prototype.real=function(e){return this.data.get(e.dataId).complexTensors.real.clone()},t.prototype.imag=function(e){return this.data.get(e.dataId).complexTensors.imag.clone()},t.prototype.slice=function(e,r,o){if(X(e,"slice"),gh(e.shape,r,o)){var i=yh(r,e.strides),a=le(o);return ht(this.readSync(e.dataId).subarray(i,i+a),o,e.dtype)}for(var s=ye(o,e.dtype),u=this.bufferSync(e),c=0;c<s.size;++c){var l=s.indexToLoc(c).map(function(f,h){return f+r[h]});s.values[c]=u.get.apply(u,l)}return s.toTensor()},t.prototype.stridedSlice=function(e,r,o,i){X(e,"stridedSlice");var a=lu(r,o,i);if(a.some(function(d){return d===0}))return ht([],a);for(var s=ye(a,e.dtype),u=this.bufferSync(e),c=0;c<s.size;c++){for(var l=s.indexToLoc(c),f=new Array(l.length),h=0;h<f.length;h++)f[h]=l[h]*i[h]+r[h];s.set.apply(s,[u.get.apply(u,f)].concat(l))}return s.toTensor()},t.prototype.diag=function(e){for(var r=this.readSync(e.dataId),o=ye([e.size,e.size],e.dtype),i=o.values,a=0;a<r.length;a++)i[a*e.size+a]=r[a];return o.toTensor()},t.prototype.unstack=function(e,r){for(var o=e.shape[r],i=new Array(e.rank-1),a=0,s=0;s<e.rank;s++)s!==r&&(i[a++]=e.shape[s]);var u=new Array(e.rank).fill(0),c=e.shape.slice();c[r]=1;var l=new Array(o);for(s=0;s<l.length;s++)u[r]=s,l[s]=this.slice(e,u,c).reshape(i);return l},t.prototype.reverse=function(e,r){X(e,"reverse");for(var o=ye(e.shape,e.dtype),i=this.bufferSync(e),a=function(u){var c=o.indexToLoc(u),l=c.slice();r.forEach(function(f){return l[f]=e.shape[f]-1-l[f]}),o.set.apply(o,[i.get.apply(i,l)].concat(c))},s=0;s<o.size;s++)a(s);return o.toTensor()},t.prototype.concat=function(e,r){var o=this;if(e[0].dtype==="complex64"){var i=e.map(function(d){return jt(d)}),a=e.map(function(d){return hn(d)});return lt(this.concat(i,r),this.concat(a,r))}var s=e.map(function(d){var p=le(d.shape.slice(r));return d.as2D(-1,p)}),u=ro(s.map(function(d){return d.shape}),1),c=ye(u,e[0].dtype).values;if(s[0].shape[0]===1){var l=0;s.forEach(function(d){c.set(o.readSync(d.dataId),l),l+=d.size})}else{var f=0;s.forEach(function(d){for(var p=o.readSync(d.dataId),v=0,m=0;m<d.shape[0];++m)for(var g=m*u[1]+f,b=0;b<d.shape[1];++b)c[g+b]=p[v++];f+=d.shape[1]})}var h=ro(e.map(function(d){return d.shape}),r);return ht(c,h,e[0].dtype)},t.prototype.neg=function(e){return X(e,"neg"),this.multiply(re(-1),e)},t.prototype.add=function(e,r){return e.dtype==="complex64"||r.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),r.cast("complex64"),function(o,i,a,s){return{real:o+a,imag:i+s}}):this.broadcastedBinaryOp(e,r,ft(e.dtype,r.dtype),function(o,i){return o+i})},t.prototype.addN=function(e){var r=this;X(e,"addN");for(var o=e.map(function(l){return r.readSync(l.dataId)}),i=ye(e[0].shape,e[0].dtype),a=i.values,s=0;s<e.length;s++)for(var u=o[s],c=0;c<a.length;c++)a[c]+=u[c];return i.toTensor()},t.prototype.softmax=function(e,r){var o=ot([r],e.shape),i=this.max(e,o),a=Nt(i.shape,o),s=this.subtract(e,i.reshape(a)),u=this.exp(s),c=this.sum(u,o).reshape(a);return this.realDivide(u,c)},t.prototype.subtract=function(e,r){return e.dtype==="complex64"||r.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),r.cast("complex64"),function(o,i,a,s){return{real:o-a,imag:i-s}}):this.broadcastedBinaryOp(e,r,ft(e.dtype,r.dtype),function(o,i){return o-i})},t.prototype.pow=function(e,r){return X([e,r],"pow"),this.broadcastedBinaryOp(e,r,e.dtype,function(o,i){return Math.pow(o,i)})},t.prototype.batchMatMul=function(e,r,o,i){X([e,r],"matMul");for(var a=o?e.shape[1]:e.shape[2],s=o?e.shape[2]:e.shape[1],u=i?r.shape[1]:r.shape[2],c=e.shape[0],l=this.readSync(e.dataId),f=this.readSync(r.dataId),h=o?[e.strides[0],1,e.strides[1]]:[e.strides[0],e.strides[1],1],d=h[0],p=h[1],v=h[2],m=i?[1,r.strides[1],r.strides[0]]:[r.strides[1],1,r.strides[0]],g=m[0],b=m[1],x=m[2],y=s*u,w=ye([c,s,u],e.dtype),_=w.values,k=this.blockSize,S=0;S<c;S++)for(var I=0;I<s;I+=k)for(var E=0;E<u;E+=k)for(var F=0;F<a;F+=k)for(var N=Math.min(I+k,s),U=Math.min(E+k,u),V=Math.min(F+k,a),z=I;z<N;z++)for(var H=E;H<U;H++){for(var L=0,B=F;B<V;B++)L+=l[S*d+z*p+B*v]*f[B*g+H*b+S*x];_[S*y+(z*u+H)]+=L}return w.toTensor()},t.prototype.fusedBatchMatMul=function(e){var r=e.a,o=e.b,i=e.transposeA,a=e.transposeB,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=this.batchMatMul(r,o,i,a);return s&&(l=this.add(l,s)),u&&(l=Ka(this,l,u,c)),l},t.prototype.multiply=function(e,r){return e.dtype==="complex64"||r.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),r.cast("complex64"),function(o,i,a,s){return{real:o*a-i*s,imag:o*s+i*a}}):this.broadcastedBinaryOp(e,r,ft(e.dtype,r.dtype),function(o,i){return o*i})},t.prototype.realDivide=function(e,r){return X([e,r],"realDivide"),this.broadcastedBinaryOp(e,r,"float32",function(o,i){return o/i})},t.prototype.floorDiv=function(e,r){return X([e,r],"floorDiv"),this.broadcastedBinaryOp(e,r,"int32",function(o,i){return Math.floor(o/i)})},t.prototype.sum=function(e,r){X(e,"sum"),Mt("sum",r,e.rank);for(var o=pt(e.shape,r),i=o[0],a=o[1],s=Ge(i,ft(e.dtype,"int32")),u=le(a),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=0,p=0;p<u;++p)d+=l[h+p];c[f]=d}return s},t.prototype.prod=function(e,r){X(e,"sum");for(var o=pt(e.shape,r),i=o[0],a=o[1],s=Ge(i,ft(e.dtype,"int32")),u=le(a),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=1,p=0;p<u;++p)d*=l[h+p];c[f]=d}return s},t.prototype.unsortedSegmentSum=function(e,r,o){X(e,"unsortedSegmentSum");for(var i=[],a=e.rank-r.rank,s=0;s<a;++s)r=r.expandDims(s+1);for(s=0;s<o;++s){var u=re(s,"int32"),c=Yh(u,r).asType("float32").mul(e).sum(0);i.push(c)}return Vt(i)},t.prototype.argMin=function(e,r){X(e,"argMin");var o=[r];Mt("argMin",o,e.rank);for(var i=pt(e.shape,o),a=i[0],s=i[1],u=Ge(a,"int32"),c=le(s),l=this.readSync(u.dataId),f=this.readSync(e.dataId),h=0;h<l.length;++h){for(var d=h*c,p=f[d],v=0,m=0;m<c;++m){var g=f[d+m];g<p&&(p=g,v=m)}l[h]=v}return u},t.prototype.argMax=function(e,r){X(e,"argMax");var o=[r];Mt("argMax",o,e.rank);for(var i=pt(e.shape,o),a=i[0],s=i[1],u=Ge(a,"int32"),c=le(s),l=this.readSync(u.dataId),f=this.readSync(e.dataId),h=0;h<l.length;++h){for(var d=h*c,p=f[d],v=0,m=0;m<c;++m){var g=f[d+m];g>p&&(p=g,v=m)}l[h]=v}return u},t.prototype.cumsum=function(e,r,o,i){if(X(e,"cumsum"),r!==e.rank-1)throw new Error("backend.cumsum in CPU expects an inner-most axis="+(e.rank-1)+" but got axis="+r);for(var a=ft(e.dtype,"int32"),s=Ge(e.shape,a),u=this.readSync(s.dataId),c=this.readSync(e.dataId),l=e.shape[e.rank-1],f=i?function(m,g){return m+l-g-1}:function(m,g){return m+g},h=0;h<c.length;h+=l)for(var d=0;d<l;d++){var p=f(h,d);if(d===0)u[p]=o?0:c[p];else{var v=f(h,d-1);u[p]=o?c[v]+u[v]:c[p]+u[v]}}return s},t.prototype.equal=function(e,r){return X([e,r],"equal"),this.broadcastedBinaryOp(e,r,"bool",function(o,i){return o===i?1:0})},t.prototype.notEqual=function(e,r){return X([e,r],"notEqual"),this.broadcastedBinaryOp(e,r,"bool",function(o,i){return o!==i?1:0})},t.prototype.less=function(e,r){return X([e,r],"less"),this.broadcastedBinaryOp(e,r,"bool",function(o,i){return o<i?1:0})},t.prototype.lessEqual=function(e,r){return X([e,r],"lessEqual"),this.broadcastedBinaryOp(e,r,"bool",function(o,i){return o<=i?1:0})},t.prototype.greater=function(e,r){return X([e,r],"greater"),this.broadcastedBinaryOp(e,r,"bool",function(o,i){return o>i?1:0})},t.prototype.greaterEqual=function(e,r){return X([e,r],"greaterEqual"),this.broadcastedBinaryOp(e,r,"bool",function(o,i){return o>=i?1:0})},t.prototype.logicalNot=function(e){X(e,"logicalNot");for(var r=this.readSync(e.dataId),o=new Uint8Array(r.length),i=0;i<r.length;++i)o[i]=r[i]?0:1;return this.makeOutput(o,e.shape,"bool")},t.prototype.logicalAnd=function(e,r){return X([e,r],"logicalAnd"),this.broadcastedBinaryOp(e,r,"bool",function(o,i){return o&&i})},t.prototype.logicalOr=function(e,r){return X([e,r],"logicalOr"),this.broadcastedBinaryOp(e,r,"bool",function(o,i){return o||i})},t.prototype.select=function(e,r,o){X([e,r,o],"select");for(var i=this.readSync(e.dataId),a=this.readSync(r.dataId),s=this.readSync(o.dataId),u=Ge(r.shape,ft(r.dtype,o.dtype)),c=this.readSync(u.dataId),l=0,f=e.rank===0||e.rank>1||r.rank===1?1:le(r.shape.slice(1)),h=0;h<i.length;h++)for(var d=0;d<f;d++)i[h]===1?c[l++]=a[h]:c[l++]=s[h];return u},t.prototype.where=function(e){X([e],"where");var r=this.readSync(e.dataId);return pu(e.shape,r)},t.prototype.topk=function(e,r,o){return X(e,"topk"),Sh(this.readSync(e.dataId),e.shape,e.dtype,r)},t.prototype.min=function(e,r){X(e,"min"),Mt("min",r,e.rank);for(var o=pt(e.shape,r),i=o[0],a=o[1],s=Ge(i,e.dtype),u=le(a),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=l[h],p=0;p<u;++p){var v=l[h+p];v<d&&(d=v)}c[f]=d}return s},t.prototype.minimum=function(e,r){return X([e,r],"minimum"),this.broadcastedBinaryOp(e,r,e.dtype,function(o,i){return Math.min(o,i)})},t.prototype.mod=function(e,r){return X([e,r],"mod"),this.broadcastedBinaryOp(e,r,e.dtype,function(o,i){var a=o%i;return o<0&&i<0||o>=0&&i>=0?a:(a+i)%i})},t.prototype.max=function(e,r){X(e,"max"),Mt("max",r,e.rank);for(var o=pt(e.shape,r),i=o[0],a=o[1],s=Ge(i,e.dtype),u=le(a),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=l[h],p=0;p<u;++p){var v=l[h+p];v>d&&(d=v)}c[f]=d}return s},t.prototype.maximum=function(e,r){return X([e,r],"maximum"),this.broadcastedBinaryOp(e,r,e.dtype,function(o,i){return Math.max(o,i)})},t.prototype.all=function(e,r){X(e,"all"),Mt("all",r,e.rank);for(var o=pt(e.shape,r),i=o[0],a=o[1],s=Ge(i,e.dtype),u=le(a),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=l[h],p=0;p<u;++p){var v=l[h+p];d=d&&v}c[f]=d}return s},t.prototype.any=function(e,r){X(e,"any"),Mt("any",r,e.rank);for(var o=pt(e.shape,r),i=o[0],a=o[1],s=Ge(i,e.dtype),u=le(a),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=l[h],p=0;p<u;++p){var v=l[h+p];d=d||v}c[f]=d}return s},t.prototype.squaredDifference=function(e,r){return X([e,r],"squaredDifference"),this.broadcastedBinaryOp(e,r,e.dtype,function(o,i){var a=o-i;return a*a})},t.prototype.ceil=function(e){X(e,"ceil");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i)o[i]=Math.ceil(r[i]);return this.makeOutput(o,e.shape,"float32")},t.prototype.floor=function(e){X(e,"floor");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i)o[i]=Math.floor(r[i]);return this.makeOutput(o,e.shape,"float32")},t.prototype.sign=function(e){X(e,"x");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i)r[i]<0?o[i]=-1:r[i]>0?o[i]=1:o[i]=0;return this.makeOutput(o,e.shape,"float32")},t.prototype.isNaN=function(e){X(e,"x");for(var r=this.readSync(e.dataId),o=new Uint8Array(r.length),i=0;i<r.length;++i)Number.isNaN(r[i])&&(o[i]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.isInf=function(e){X(e,"x");for(var r=this.readSync(e.dataId),o=new Uint8Array(r.length),i=0;i<r.length;++i)Math.abs(r[i])===1/0&&(o[i]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.isFinite=function(e){X(e,"x");for(var r=this.readSync(e.dataId),o=new Uint8Array(r.length),i=0;i<r.length;++i)Number.isFinite(r[i])&&(o[i]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.round=function(e){X(e,"round");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i){var a=Math.floor(r[i]);r[i]-a<.5?o[i]=Math.floor(r[i]):r[i]-a>.5?o[i]=Math.ceil(r[i]):o[i]=a%2==0?a:a+1}return this.makeOutput(o,e.shape,"float32")},t.prototype.exp=function(e){X(e,"exp");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i)o[i]=Math.exp(r[i]);return this.makeOutput(o,e.shape,"float32")},t.prototype.expm1=function(e){X(e,"expm1");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i)o[i]=Math.expm1(r[i]);return this.makeOutput(o,e.shape,"float32")},t.prototype.log=function(e){X(e,"log");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i){var a=r[i];o[i]=Math.log(a)}return this.makeOutput(o,e.shape,"float32")},t.prototype.log1p=function(e){X(e,"log1p");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i){var a=r[i];o[i]=Math.log1p(a)}return this.makeOutput(o,e.shape,"float32")},t.prototype.sqrt=function(e){X(e,"sqrt");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i){var a=r[i];o[i]=Math.sqrt(a)}return this.makeOutput(o,e.shape,"float32")},t.prototype.rsqrt=function(e){X(e,"rsqrt");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i){var a=r[i];o[i]=1/Math.sqrt(a)}return this.makeOutput(o,e.shape,"float32")},t.prototype.reciprocal=function(e){X(e,"reciprocal");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i)o[i]=1/r[i];return this.makeOutput(o,e.shape,"float32")},t.prototype.linear=function(e){return e},t.prototype.relu=function(e){X(e,"relu");for(var r=Ge(e.shape,e.dtype),o=this.readSync(r.dataId),i=this.readSync(e.dataId),a=0;a<i.length;++a)o[a]=Math.max(0,i[a]);return r},t.prototype.relu6=function(e){X(e,"relu");for(var r=Ge(e.shape,e.dtype),o=this.readSync(r.dataId),i=this.readSync(e.dataId),a=0;a<i.length;++a)o[a]=Math.min(Math.max(0,i[a]),6);return r},t.prototype.prelu=function(e,r){return X([e,r],"prelu"),this.broadcastedBinaryOp(e,r,e.dtype,function(o,i){return o<0?i*o:o})},t.prototype.elu=function(e){X(e,"elu");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i){var a=o[i];r[i]=a>=0?a:Math.exp(a)-1}return this.makeOutput(r,e.shape,"float32")},t.prototype.eluDer=function(e,r){X([e,r],"eluDer");for(var o=new Float32Array(r.size),i=this.readSync(r.dataId),a=this.readSync(e.dataId),s=0;s<i.length;++s){var u=i[s];o[s]=u>=1?a[s]:a[s]*(u+1)}return this.makeOutput(o,r.shape,"float32")},t.prototype.selu=function(e){X(e,"selu");for(var r=mu,o=gu,i=new Float32Array(e.size),a=this.readSync(e.dataId),s=0;s<a.length;++s){var u=a[s];i[s]=u>=0?o*u:r*(Math.exp(u)-1)}return this.makeOutput(i,e.shape,"float32")},t.prototype.clip=function(e,r,o){X(e,"clip");for(var i=new Float32Array(e.size),a=this.readSync(e.dataId),s=0;s<a.length;++s){var u=a[s];i[s]=u>o?o:u<r?r:u}return this.makeOutput(i,e.shape,"float32")},t.prototype.abs=function(e){for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.abs(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.complexAbs=function(e){for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<e.size;++i){var a=o[2*i],s=o[2*i+1];r[i]=Math.hypot(a,s)}return this.makeOutput(r,e.shape,"float32")},t.prototype.int=function(e){X(e,"int");for(var r=new Int32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=o[i];return this.makeOutput(r,e.shape,"int32")},t.prototype.sigmoid=function(e){X(e,"sigmoid");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=1/(1+Math.exp(-o[i]));return this.makeOutput(r,e.shape,"float32")},t.prototype.softplus=function(e){X(e,"softplus");for(var r=Math.log(11920928955078125e-23)+2,o=new Float32Array(e.size),i=this.readSync(e.dataId),a=0;a<i.length;++a){var s=i[a]>-r,u=i[a]<r,c=Math.exp(i[a]),l=void 0;l=u?c:s?i[a]:Math.log(1+c),o[a]=l}return this.makeOutput(o,e.shape,"float32")},t.prototype.sin=function(e){X(e,"sin");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.sin(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.cos=function(e){X(e,"cos");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.cos(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.tan=function(e){X(e,"tan");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.tan(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.asin=function(e){X(e,"asin");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.asin(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.acos=function(e){X(e,"acos");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.acos(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.atan=function(e){X(e,"atan");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.atan(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.atan2=function(e,r){return X([e,r],"atan2"),this.broadcastedBinaryOp(e,r,e.dtype,function(o,i){return Math.atan2(o,i)})},t.prototype.sinh=function(e){X(e,"sinh");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.sinh(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.cosh=function(e){X(e,"cosh");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.cosh(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.tanh=function(e){X(e,"tanh");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Vm(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.asinh=function(e){X(e,"asinh");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.asinh(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.acosh=function(e){X(e,"acosh");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.acosh(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.atanh=function(e){X(e,"atanh");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.atanh(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.erf=function(e){X(e,"erf");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i){var a=Math.sign(o[i]),s=Math.abs(o[i]),u=1/(1+.3275911*s);r[i]=a*(1-((((1.061405429*u-1.453152027)*u+1.421413741)*u-.284496736)*u+.254829592)*u*Math.exp(-s*s))}return this.makeOutput(r,e.shape,"float32")},t.prototype.step=function(e,r){r===void 0&&(r=0),X(e,"step");for(var o=new Float32Array(e.size),i=this.readSync(e.dataId),a=0;a<i.length;++a){var s=i[a];isNaN(s)?o[a]=NaN:o[a]=s>0?1:r}return this.makeOutput(o,e.shape,"float32")},t.prototype.fusedConv2d=function(e){var r=e.input,o=e.filter,i=e.convInfo,a=e.bias,s=e.activation,u=e.preluActivationWeights,c=this.conv2d(r,o,i);return a&&(c=this.add(c,a)),s&&(c=Ka(this,c,s,u)),c},t.prototype.conv2d=function(e,r,o){X([e,r],"conv2d");for(var i=o.filterHeight,a=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,c=o.padInfo.left,l=o.padInfo.top,f=o.dataFormat==="channelsLast",h=ye(o.outShape,e.dtype),d=e.strides[0],p=f?e.strides[1]:e.strides[2],v=f?e.strides[2]:1,m=f?1:e.strides[1],g=h.strides[0],b=f?h.strides[1]:h.strides[2],x=f?h.strides[2]:1,y=f?1:h.strides[1],w=this.readSync(e.dataId),_=this.readSync(r.dataId),k=h.values,S=0;S<o.batchSize;++S)for(var I=S*d,E=S*g,F=0;F<o.outHeight;++F)for(var N=E+F*b,U=F*o.strideHeight-l,V=0;V<i;V++){var z=U+V*s;if(!(z<0||z>=o.inHeight))for(var H=V*r.strides[0],L=I+z*p,B=0;B<o.outWidth;++B)for(var K=N+B*x,Y=B*o.strideWidth-c,ne=0;ne<a;ne++){var oe=Y+ne*u;if(!(oe<0||oe>=o.inWidth))for(var pe=L+oe*v,we=H+ne*r.strides[1],_e=0;_e<o.inChannels;++_e){for(var be=w[pe+_e*m],Re=0;Re<o.outChannels;++Re)k[K+Re*y]+=be*_[we+Re];we+=o.outChannels}}}return h.toTensor()},t.prototype.conv3d=function(e,r,o){for(var i=o.filterDepth,a=o.filterHeight,s=o.filterWidth,u=o.dilationDepth,c=o.dilationHeight,l=o.dilationWidth,f=o.padInfo.front,h=o.padInfo.left,d=o.padInfo.top,p=ye(o.outShape,e.dtype),v=this.readSync(e.dataId),m=this.readSync(r.dataId),g=p.values,b=0;b<o.batchSize;++b)for(var x=b*e.strides[0],y=b*p.strides[0],w=0;w<o.outDepth;++w)for(var _=y+w*p.strides[1],k=w*o.strideDepth-f,S=0;S<i;S++){var I=k+S*u;if(!(I<0||I>=o.inDepth))for(var E=S*r.strides[0],F=x+I*e.strides[1],N=0;N<o.outHeight;++N)for(var U=_+N*p.strides[2],V=N*o.strideHeight-d,z=0;z<a;z++){var H=V+z*c;if(!(H<0||H>=o.inHeight))for(var L=E+z*r.strides[1],B=F+H*e.strides[2],K=0;K<o.outWidth;++K)for(var Y=U+K*o.outChannels,ne=K*o.strideWidth-h,oe=0;oe<s;oe++){var pe=ne+oe*l;if(!(pe<0||pe>=o.inWidth))for(var we=L+oe*r.strides[2],_e=B+pe*o.inChannels,be=we,Re=0;Re<o.inChannels;++Re){for(var Se=v[_e+Re],De=0;De<o.outChannels;++De)g[Y+De]+=Se*m[be+De];be+=o.outChannels}}}}return p.toTensor()},t.prototype.conv2dDerInput=function(e,r,o){X([e,r],"conv2dDerInput");for(var i=ye(o.inShape,"float32"),a=i.values,s=this.readSync(e.dataId),u=this.readSync(r.dataId),c=r.strides,l=c[0],f=c[1],h=c[2],d=o.batchSize,p=o.filterHeight,v=o.filterWidth,m=o.inChannels,g=o.inHeight,b=o.inWidth,x=o.outChannels,y=o.outHeight,w=o.outWidth,_=o.strideHeight,k=o.strideWidth,S=o.dataFormat,I=p-1-o.padInfo.top,E=v-1-o.padInfo.left,F=S==="channelsLast",N=i.strides[0],U=F?i.strides[1]:i.strides[2],V=F?i.strides[2]:1,z=F?1:i.strides[1],H=e.strides[0],L=F?e.strides[1]:e.strides[2],B=F?e.strides[2]:1,K=F?1:e.strides[1],Y=0;Y<d;++Y)for(var ne=0;ne<m;++ne)for(var oe=0;oe<g;++oe)for(var pe=oe-I,we=Math.max(0,Math.ceil(pe/_)),_e=Math.min(y,(p+pe)/_),be=0;be<b;++be){for(var Re=be-E,Se=Math.max(0,Math.ceil(Re/k)),De=Math.min(w,(v+Re)/k),We=0,Ne=we;Ne<_e;++Ne)for(var A=Ne*_-pe,D=Se;D<De;++D)for(var M=H*Y+L*Ne+B*D,q=l*(p-1-A)+f*(v-1-(D*k-Re))+h*ne,j=0;j<x;++j)We+=s[M+K*j]*u[q+j];a[N*Y+U*oe+V*be+z*ne]=We}return i.toTensor()},t.prototype.conv3dDerInput=function(e,r,o){for(var i=ye(o.inShape,"float32"),a=i.values,s=i.strides,u=s[0],c=s[1],l=s[2],f=s[3],h=this.readSync(e.dataId),d=e.strides,p=d[0],v=d[1],m=d[2],g=d[3],b=this.readSync(r.dataId),x=r.strides,y=x[0],w=x[1],_=x[2],k=x[3],S=o.batchSize,I=o.filterDepth,E=o.filterHeight,F=o.filterWidth,N=o.inChannels,U=o.inDepth,V=o.inHeight,z=o.inWidth,H=o.outChannels,L=o.outDepth,B=o.outHeight,K=o.outWidth,Y=o.strideDepth,ne=o.strideHeight,oe=o.strideWidth,pe=I-1-o.padInfo.front,we=E-1-o.padInfo.top,_e=F-1-o.padInfo.left,be=0;be<S;++be)for(var Re=0;Re<N;++Re)for(var Se=0;Se<U;++Se)for(var De=Se-pe,We=Math.max(0,Math.ceil(De/Y)),Ne=Math.min(L,(I+De)/Y),A=0;A<V;++A)for(var D=A-we,M=Math.max(0,Math.ceil(D/ne)),q=Math.min(B,(E+D)/ne),j=0;j<z;++j){for(var $=j-_e,ee=Math.max(0,Math.ceil($/oe)),Q=Math.min(K,(F+$)/oe),Z=0,J=We;J<Ne;++J)for(var ue=J*Y-De,te=M;te<q;++te)for(var ce=te*ne-D,ve=ee;ve<Q;++ve)for(var ke=p*be+v*J+m*te+g*ve,Pe=y*(I-1-ue)+w*(E-1-ce)+_*(F-1-(ve*oe-$))+k*Re,Ie=0;Ie<H;++Ie)Z+=h[ke+Ie]*b[Pe+Ie];a[u*be+c*Se+l*A+f*j+Re]=Z}return i.toTensor()},t.prototype.conv2dDerFilter=function(e,r,o){X([e,r],"conv2dDerFilter");for(var i=o.strideHeight,a=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=o.dataFormat==="channelsLast",l=ye(o.filterShape,"float32"),f=o.padInfo.left,h=o.padInfo.top,d=this.bufferSync(e),p=this.bufferSync(r),v=0;v<s;++v)for(var m=Math.max(0,Math.ceil((h-v)/i)),g=Math.min(o.outHeight,(o.inHeight+h-v)/i),b=0;b<u;++b)for(var x=Math.max(0,Math.ceil((f-b)/a)),y=Math.min(o.outWidth,(o.inWidth+f-b)/a),w=0;w<o.inChannels;++w)for(var _=0;_<o.outChannels;++_){for(var k=0,S=0;S<o.batchSize;++S)for(var I=m;I<g;++I)for(var E=v+I*i-h,F=x;F<y;++F){var N=b+F*a-f;k+=c?d.get(S,E,N,w)*p.get(S,I,F,_):d.get(S,w,E,N)*p.get(S,_,I,F)}l.set(k,v,b,w,_)}return l.toTensor()},t.prototype.conv3dDerFilter=function(e,r,o){for(var i=o.strideDepth,a=o.strideHeight,s=o.strideWidth,u=o.filterDepth,c=o.filterHeight,l=o.filterWidth,f=ye(o.filterShape,"float32"),h=f.values,d=f.strides,p=d[0],v=d[1],m=d[2],g=d[3],b=this.readSync(r.dataId),x=r.strides,y=x[0],w=x[1],_=x[2],k=x[3],S=this.readSync(e.dataId),I=e.strides,E=I[0],F=I[1],N=I[2],U=I[3],V=o.padInfo.front,z=o.padInfo.left,H=o.padInfo.top,L=0;L<u;++L)for(var B=Math.max(0,Math.ceil((V-L)/i)),K=Math.min(o.outDepth,(o.inDepth+V-L)/i),Y=L*p,ne=0;ne<c;++ne)for(var oe=Math.max(0,Math.ceil((H-ne)/a)),pe=Math.min(o.outHeight,(o.inHeight+H-ne)/a),we=ne*v+Y,_e=0;_e<l;++_e)for(var be=Math.max(0,Math.ceil((z-_e)/s)),Re=Math.min(o.outWidth,(o.inWidth+z-_e)/s),Se=_e*m+we,De=0;De<o.inChannels;++De)for(var We=De*g+Se,Ne=0;Ne<o.outChannels;++Ne){for(var A=0,D=0;D<o.batchSize;++D)for(var M=D*E,q=D*y,j=B;j<K;++j)for(var $=(L+j*i-V)*F+M,ee=j*w+q,Q=oe;Q<pe;++Q)for(var Z=(ne+Q*a-H)*N+$,J=Q*_+ee,ue=be;ue<Re;++ue){var te=ue*k+J;A+=S[(_e+ue*s-z)*U+Z+De]*b[te+Ne]}h[We+Ne]=A}return f.toTensor()},t.prototype.fusedDepthwiseConv2D=function(e){var r=e.input,o=e.filter,i=e.convInfo,a=e.bias,s=e.activation,u=e.preluActivationWeights,c=this.depthwiseConv2D(r,o,i);return a&&(c=this.add(c,a)),s&&(c=Ka(this,c,s,u)),c},t.prototype.depthwiseConv2D=function(e,r,o){X([e,r],"depthwiseConv2D");for(var i=o.filterHeight,a=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,c=o.padInfo.left,l=o.padInfo.top,f=o.outChannels/o.inChannels,h=ye(o.outShape,e.dtype),d=this.readSync(e.dataId),p=this.readSync(r.dataId),v=h.values,m=0;m<o.batchSize;++m)for(var g=m*e.strides[0],b=m*h.strides[0],x=0;x<o.outHeight;++x)for(var y=b+x*h.strides[1],w=x*o.strideHeight-c,_=0;_<i;++_){var k=w+_*s;if(!(k<0||k>=o.inHeight))for(var S=_*r.strides[0],I=g+k*e.strides[1],E=0;E<o.outWidth;++E)for(var F=y+E*h.strides[2],N=E*o.strideWidth-l,U=0;U<a;++U){var V=N+U*u;if(!(V<0||V>=o.inWidth))for(var z=S+U*r.strides[1],H=I+V*o.inChannels,L=F,B=z,K=0;K<o.inChannels;++K){for(var Y=d[H+K],ne=0;ne<f;++ne)v[L+ne]+=Y*p[B+ne];L+=f,B+=f}}}return h.toTensor()},t.prototype.depthwiseConv2DDerInput=function(e,r,o){X([e,r],"depthwiseConv2DDerInput");for(var i=ye(o.inShape,"float32"),a=i.values,s=i.strides,u=s[0],c=s[1],l=s[2],f=this.readSync(e.dataId),h=e.strides,d=h[0],p=h[1],v=h[2],m=this.readSync(r.dataId),g=r.strides,b=g[0],x=g[1],y=g[2],w=o.batchSize,_=o.filterHeight,k=o.filterWidth,S=o.inChannels,I=o.inHeight,E=o.inWidth,F=o.outChannels,N=o.outHeight,U=o.outWidth,V=o.strideHeight,z=o.strideWidth,H=_-1-o.padInfo.top,L=k-1-o.padInfo.left,B=F/S,K=0;K<w;++K)for(var Y=0;Y<S;++Y)for(var ne=0;ne<I;++ne)for(var oe=ne-H,pe=Math.max(0,Math.ceil(oe/V)),we=Math.min(N,(_+oe)/V),_e=0;_e<E;++_e){for(var be=_e-L,Re=Math.max(0,Math.ceil(be/z)),Se=Math.min(U,(k+be)/z),De=0,We=pe;We<we;++We)for(var Ne=We*V-oe,A=Re;A<Se;++A)for(var D=d*K+p*We+v*A,M=b*(_-1-Ne)+x*(k-1-(A*z-be))+y*Y,q=0;q<B;++q)De+=f[D+(Y*B+q)]*m[M+q];a[u*K+c*ne+l*_e+Y]=De}return i.toTensor()},t.prototype.depthwiseConv2DDerFilter=function(e,r,o){X([e,r],"depthwiseConv2DDerFilter");for(var i=o.strideHeight,a=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=ye(o.filterShape,"float32"),l=o.padInfo.left,f=o.padInfo.top,h=o.outChannels/o.inChannels,d=this.bufferSync(e),p=this.bufferSync(r),v=0;v<s;++v)for(var m=Math.max(0,Math.ceil((f-v)/i)),g=Math.min(o.outHeight,(o.inHeight+f-v)/i),b=0;b<u;++b)for(var x=Math.max(0,Math.ceil((l-b)/a)),y=Math.min(o.outWidth,(o.inWidth+l-b)/a),w=0;w<o.outChannels;++w){for(var _=Math.trunc(w/h),k=w%h,S=0,I=0;I<o.batchSize;++I)for(var E=m;E<g;++E)for(var F=v+E*i-f,N=x;N<y;++N){var U=b+N*a-l;S+=d.get(I,F,U,_)*p.get(I,E,N,w)}c.set(S,v,b,_,k)}return c.toTensor()},t.prototype.tile=function(e,r){return X(e,"tile"),Rh(this.bufferSync(e),r)},t.prototype.pad=function(e,r,o){X(e,"pad");var i=r.map(function(h,d){return h[0]+e.shape[d]+h[1]}),a=r.map(function(h){return h[0]}),s=this.bufferSync(e),u=ye(i,e.dtype);o!==0&&u.values.fill(o);for(var c=0;c<e.size;c++){var l=s.indexToLoc(c),f=l.map(function(h,d){return h+a[d]});u.set.apply(u,[s.get.apply(s,l)].concat(f))}return u.toTensor()},t.prototype.transpose=function(e,r){X(e,"transpose");for(var o=new Array(e.rank),i=0;i<o.length;i++)o[i]=e.shape[r[i]];var a=this.readSync(e.dataId),s=ye(o,e.dtype),u=this.bufferSync(e);for(i=0;i<e.size;++i){for(var c=u.indexToLoc(i),l=new Array(c.length),f=0;f<l.length;f++)l[f]=c[r[f]];var h=s.locToIndex(l);s.values[h]=a[i]}return s.toTensor()},t.prototype.gather=function(e,r,o){X([e,r],"gather");var i=e.shape.slice(),a=this.readSync(r.dataId);i[o]=a.length;for(var s=ye(i,e.dtype),u=this.bufferSync(e),c=0;c<s.size;++c){var l=s.indexToLoc(c),f=l.slice();f[o]=a[l[o]];var h=u.locToIndex(f);s.values[c]=u.values[h]}return s.toTensor()},t.prototype.batchToSpaceND=function(e,r,o){X([e],"batchToSpaceND");var i=r.reduce(function(f,h){return f*h}),a=Fi(e.shape,r,i),s=Pi(a.length,r.length),u=Mi(e.shape,r,i),c=dh(o,r.length),l=ph(u,o,r.length);return e.reshape(a).transpose(s).reshape(u).slice(c,l)},t.prototype.spaceToBatchND=function(e,r,o){X([e],"spaceToBatchND");var i=r.reduce(function(h,d){return h*d}),a=[[0,0]];a.push.apply(a,o);for(var s=1+r.length;s<e.shape.length;++s)a.push([0,0]);var u=e.pad(a),c=Fi(u.shape,r,i,!1),l=Pi(c.length,r.length,!1),f=Mi(u.shape,r,i,!1);return u.reshape(c).transpose(l).reshape(f)},t.prototype.pool=function(e,r,o){X(e,"pool");for(var i=r.strideHeight,a=r.strideWidth,s=r.dilationHeight,u=r.dilationWidth,c=r.effectiveFilterHeight,l=r.effectiveFilterWidth,f=r.padInfo.top,h=r.padInfo.left,d=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,p=this.readSync(e.dataId),v=ye(r.outShape,e.dtype),m=v.values,g=r.outShape[1]*r.outShape[2]*r.outShape[3],b=r.outShape[2]*r.outShape[3],x=r.outShape[3],y=0;y<r.batchSize;++y)for(var w=y*g,_=y*e.strides[0],k=0;k<r.inChannels;++k)for(var S=0;S<r.outHeight;++S)for(var I=S*i-f,E=Math.max(0,I),F=Math.min(r.inHeight,c+I),N=w+S*b,U=0;U<r.outWidth;++U){for(var V=U*a-h,z=Math.max(0,V),H=Math.min(r.inWidth,l+V),L=d,B=0,K=0,Y=E;Y<F;Y+=s){for(var ne=_+Y*e.strides[1],oe=z;oe<H;oe+=u){var pe=p[ne+oe*e.strides[2]+k];o==="max"&&pe>L?L=pe:o==="avg"&&(B+=pe,K++)}if(isNaN(L))break}m[N+U*x+k]=o==="avg"?B/K:L}return v.toTensor()},t.prototype.maxPool=function(e,r){return this.pool(e,r,"max")},t.prototype.maxPoolPositions=function(e,r){for(var o=ye(r.outShape,"int32"),i=r.strideHeight,a=r.strideWidth,s=r.dilationHeight,u=r.dilationWidth,c=r.effectiveFilterHeight,l=r.effectiveFilterWidth,f=r.padInfo.top,h=r.padInfo.left,d=this.bufferSync(e),p=0;p<r.batchSize;++p)for(var v=0;v<r.inChannels;++v)for(var m=0;m<r.outHeight;++m){for(var g=m*i-f,b=g;b<0;)b+=s;for(var x=Math.min(r.inHeight,c+g),y=0;y<r.outWidth;++y){for(var w=y*a-h,_=w;_<0;)_+=u;for(var k=Math.min(r.inWidth,l+w),S=Number.NEGATIVE_INFINITY,I=-1,E=b;E<x;E+=s)for(var F=E-g,N=_;N<k;N+=u){var U=N-w,V=d.get(p,E,N,v);V>S&&(S=V,I=F*l+U)}o.set(I,p,m,y,v)}}return o.toTensor()},t.prototype.maxPoolBackprop=function(e,r,o,i){X([r,o],"maxPoolBackprop");for(var a=this.maxPoolPositions(r,i),s=i.strideHeight,u=i.strideWidth,c=i.dilationHeight,l=i.dilationWidth,f=i.effectiveFilterHeight,h=i.effectiveFilterWidth,d=h-1-i.padInfo.left,p=f-1-i.padInfo.top,v=ye(r.shape,"float32"),m=this.bufferSync(a),g=this.bufferSync(e),b=0;b<i.batchSize;++b)for(var x=0;x<i.inChannels;++x)for(var y=0;y<i.inHeight;++y)for(var w=0;w<i.inWidth;++w){for(var _=y-p,k=w-d,S=0,I=0;I<f;I+=c){var E=(_+I)/s;if(!(E<0||E>=i.outHeight||Math.floor(E)!==E))for(var F=0;F<h;F+=l){var N=(k+F)/u;if(!(N<0||N>=i.outWidth||Math.floor(N)!==N)){var U=f*h-1-m.get(b,E,N,x)===I*h+F?1:0;U!==0&&(S+=g.get(b,E,N,x)*U)}}}v.set(S,b,y,w,x)}return v.toTensor()},t.prototype.avgPoolBackprop=function(e,r,o){X([e,r],"avgPoolBackprop");for(var i=o.strideHeight,a=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=o.dilationHeight,l=o.dilationWidth,f=o.effectiveFilterHeight,h=o.effectiveFilterWidth,d=h-1-o.padInfo.left,p=f-1-o.padInfo.top,v=ye(r.shape,"float32"),m=1/(s*u),g=this.bufferSync(e),b=0;b<o.batchSize;++b)for(var x=0;x<o.inChannels;++x)for(var y=0;y<o.inHeight;++y)for(var w=0;w<o.inWidth;++w){for(var _=y-p,k=w-d,S=0,I=0;I<f;I+=c){var E=(_+I)/i;if(!(E<0||E>=o.outHeight||Math.floor(E)!==E))for(var F=0;F<h;F+=l){var N=(k+F)/a;N<0||N>=o.outWidth||Math.floor(N)!==N||(S+=g.get(b,E,N,x))}}v.set(S*m,b,y,w,x)}return v.toTensor()},t.prototype.pool3d=function(e,r,o){X(e,"pool3d");for(var i=r.strideDepth,a=r.strideHeight,s=r.strideWidth,u=r.dilationDepth,c=r.dilationHeight,l=r.dilationWidth,f=r.effectiveFilterDepth,h=r.effectiveFilterHeight,d=r.effectiveFilterWidth,p=r.padInfo.front,v=r.padInfo.top,m=r.padInfo.left,g=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,b=this.readSync(e.dataId),x=ye(r.outShape,e.dtype),y=x.values,w=r.outShape[1]*r.outShape[2]*r.outShape[3]*r.outShape[4],_=r.outShape[2]*r.outShape[3]*r.outShape[4],k=r.outShape[3]*r.outShape[4],S=r.outShape[4],I=0;I<r.batchSize;++I)for(var E=I*w,F=I*e.strides[0],N=0;N<r.inChannels;++N)for(var U=0;U<r.outDepth;++U){for(var V=U*i-p,z=V;z<0;)z+=u;for(var H=Math.min(r.inDepth,f+V),L=E+U*_,B=0;B<r.outHeight;++B){for(var K=B*a-v,Y=K;Y<0;)Y+=c;for(var ne=Math.min(r.inHeight,h+K),oe=L+B*k,pe=0;pe<r.outWidth;++pe){for(var we=pe*s-m,_e=we;_e<0;)_e+=l;for(var be=Math.min(r.inWidth,d+we),Re=oe+pe*S,Se=g,De=0,We=0,Ne=z;Ne<H;Ne+=u){for(var A=F+Ne*e.strides[1],D=Y;D<ne;D+=c){for(var M=A+D*e.strides[2],q=_e;q<be;q+=l){var j=b[M+q*e.strides[3]+N];if(o==="max"&&j>Se?Se=j:o==="avg"&&(De+=j,We++),isNaN(Se))break}if(isNaN(Se))break}if(isNaN(Se))break}y[Re+N]=o==="avg"?De/We:Se}}}return x.toTensor()},t.prototype.avgPool3d=function(e,r){return X(e,"avgPool3d"),this.pool3d(e,r,"avg").toFloat()},t.prototype.avgPool3dBackprop=function(e,r,o){X([e,r],"avgPool3dBackprop");for(var i=o.strideDepth,a=o.strideHeight,s=o.strideWidth,u=o.filterDepth,c=o.filterHeight,l=o.filterWidth,f=o.dilationDepth,h=o.dilationHeight,d=o.dilationWidth,p=o.effectiveFilterDepth,v=o.effectiveFilterHeight,m=o.effectiveFilterWidth,g=p-1-o.padInfo.front,b=m-1-o.padInfo.left,x=v-1-o.padInfo.top,y=ye(r.shape,"float32"),w=1/(u*c*l),_=this.bufferSync(e),k=0;k<o.batchSize;++k)for(var S=0;S<o.inChannels;++S)for(var I=0;I<o.inDepth;++I)for(var E=0;E<o.inHeight;++E)for(var F=0;F<o.inWidth;++F){for(var N=I-g,U=E-x,V=F-b,z=0,H=0;H<p;H+=f){var L=(N+H)/i;if(!(L<0||L>=o.outDepth||Math.floor(L)!==L))for(var B=0;B<v;B+=h){var K=(U+B)/a;if(!(K<0||K>=o.outHeight||Math.floor(K)!==K))for(var Y=0;Y<m;Y+=d){var ne=(V+Y)/s;ne<0||ne>=o.outWidth||Math.floor(ne)!==ne||(z+=_.get(k,L,K,ne,S))}}}y.set(z*w,k,I,E,F,S)}return y.toTensor()},t.prototype.maxPool3d=function(e,r){return X(e,"maxPool3d"),this.pool3d(e,r,"max").toFloat()},t.prototype.maxPool3dPositions=function(e,r){for(var o=ye(r.outShape,"int32"),i=r.strideDepth,a=r.strideHeight,s=r.strideWidth,u=r.dilationDepth,c=r.dilationHeight,l=r.dilationWidth,f=r.effectiveFilterDepth,h=r.effectiveFilterHeight,d=r.effectiveFilterWidth,p=r.padInfo.front,v=r.padInfo.top,m=r.padInfo.left,g=this.bufferSync(e),b=0;b<r.batchSize;++b)for(var x=0;x<r.inChannels;++x)for(var y=0;y<r.outDepth;++y){for(var w=y*i-p,_=w;_<0;)_+=u;for(var k=Math.min(r.inDepth,f+w),S=0;S<r.outHeight;++S){for(var I=S*a-v,E=I;E<0;)E+=c;for(var F=Math.min(r.inHeight,h+I),N=0;N<r.outWidth;++N){for(var U=N*s-m,V=U;V<0;)V+=l;for(var z=Math.min(r.inWidth,d+U),H=Number.NEGATIVE_INFINITY,L=-1,B=_;B<k;B+=u)for(var K=B-w,Y=E;Y<F;Y+=c)for(var ne=Y-I,oe=V;oe<z;oe+=l){var pe=oe-U,we=g.get(b,B,Y,oe,x);we>=H&&(H=we,L=K*h*d+ne*h+pe)}o.set(L,b,y,S,N,x)}}}return o.toTensor()},t.prototype.maxPool3dBackprop=function(e,r,o,i){X([r,o],"maxPool3dBackprop");for(var a=this.maxPool3dPositions(r,i),s=i.strideDepth,u=i.strideHeight,c=i.strideWidth,l=i.dilationDepth,f=i.dilationHeight,h=i.dilationWidth,d=i.effectiveFilterDepth,p=i.effectiveFilterHeight,v=i.effectiveFilterWidth,m=d-1-i.padInfo.front,g=v-1-i.padInfo.left,b=p-1-i.padInfo.top,x=ye(r.shape,"float32"),y=this.bufferSync(a),w=this.bufferSync(e),_=0;_<i.batchSize;++_)for(var k=0;k<i.inChannels;++k)for(var S=0;S<i.inDepth;++S)for(var I=0;I<i.inHeight;++I)for(var E=0;E<i.inWidth;++E){for(var F=S-m,N=I-b,U=E-g,V=0,z=0;z<d;z+=l){var H=(F+z)/s;if(!(H<0||H>=i.outDepth||Math.floor(H)!==H))for(var L=0;L<p;L+=f){var B=(N+L)/u;if(!(B<0||B>=i.outHeight||Math.floor(B)!==B))for(var K=0;K<v;K+=h){var Y=(U+K)/c;if(!(Y<0||Y>=i.outWidth||Math.floor(Y)!==Y)){var ne=d*p*v-1-y.get(_,H,B,Y,k)===z*p*v+L*v+K?1:0;ne!==0&&(V+=w.get(_,H,B,Y,k)*ne)}}}}x.set(V,_,S,I,E,k)}return x.toTensor()},t.prototype.cast=function(e,r){return _h(e,r,this)},t.prototype.reshape=function(e,r){return ks(e,r)},t.prototype.avgPool=function(e,r){return X(e,"avgPool"),this.pool(e,r,"avg").toFloat()},t.prototype.resizeBilinear=function(e,r,o,i){X(e,"resizeBilinear");for(var a=e.shape,s=a[0],u=a[1],c=a[2],l=a[3],f=this.readSync(e.dataId),h=new Float32Array(le([s,r,o,l])),d=[i&&r>1?u-1:u,i&&o>1?c-1:c],p=[i&&r>1?r-1:r,i&&o>1?o-1:o],v=0,m=d[0]/p[0],g=d[1]/p[1],b=0;b<s;b++)for(var x=0;x<r;x++)for(var y=m*x,w=Math.floor(y),_=y-w,k=Math.min(u-1,Math.ceil(y)),S=b*e.strides[0]+w*e.strides[1],I=b*e.strides[0]+k*e.strides[1],E=0;E<o;E++)for(var F=g*E,N=Math.floor(F),U=F-N,V=Math.min(c-1,Math.ceil(F)),z=S+N*e.strides[2],H=I+N*e.strides[2],L=S+V*e.strides[2],B=I+V*e.strides[2],K=0;K<l;K++){var Y=f[z+K],ne=f[H+K],oe=Y+(f[L+K]-Y)*U,pe=oe+(ne+(f[B+K]-ne)*U-oe)*_;h[v++]=pe}return ht(h,[s,r,o,l])},t.prototype.resizeBilinearBackprop=function(e,r,o){X([e,r],"resizeBilinearBackprop");for(var i=r.shape,a=i[0],s=i[1],u=i[2],c=i[3],l=e.shape,f=l[1],h=l[2],d=new Float32Array(a*s*u*c),p=[o&&f>1?s-1:s,o&&h>1?u-1:u],v=[o&&f>1?f-1:f,o&&h>1?h-1:h],m=p[0]/v[0],g=p[1]/v[1],b=this.readSync(e.dataId),x=0,y=0;y<a;y++)for(var w=y*r.strides[0],_=0;_<f;_++)for(var k=_*m,S=Math.floor(k),I=Math.min(Math.ceil(k),s-1),E=w+S*r.strides[1],F=w+I*r.strides[1],N=k-S,U=1-N,V=0;V<h;V++)for(var z=V*g,H=Math.floor(z),L=Math.min(Math.ceil(z),u-1),B=z-H,K=1-B,Y=E+H*r.strides[2],ne=E+L*r.strides[2],oe=F+H*r.strides[2],pe=F+L*r.strides[2],we=U*K,_e=U*B,be=N*K,Re=N*B,Se=0;Se<c;Se++){var De=b[x++];d[Y+Se]+=De*we,d[ne+Se]+=De*_e,d[oe+Se]+=De*be,d[pe+Se]+=De*Re}return kt(d,[a,u,s,c],r.dtype)},t.prototype.resizeNearestNeighbor=function(e,r,o,i){X(e,"resizeNearestNeighbor");for(var a=e.shape,s=a[0],u=a[1],c=a[2],l=a[3],f=this.readSync(e.dataId),h=new Float32Array(s*r*o*l),d=[i&&r>1?u-1:u,i&&o>1?c-1:c],p=[i&&r>1?r-1:r,i&&o>1?o-1:o],v=d[0]/p[0],m=d[1]/p[1],g=0,b=0;b<s;b++)for(var x=b*e.strides[0],y=0;y<r;y++)for(var w=v*y,_=x+Math.min(u-1,i?Math.round(w):Math.floor(w))*e.strides[1],k=0;k<o;k++)for(var S=m*k,I=_+Math.min(c-1,i?Math.round(S):Math.floor(S))*e.strides[2],E=0;E<l;E++){var F=f[I+E];h[g++]=F}return ht(h,[s,r,o,l],e.dtype)},t.prototype.resizeNearestNeighborBackprop=function(e,r,o){X([e,r],"resizeNearestNeighborBackprop");for(var i=r.shape,a=i[0],s=i[1],u=i[2],c=i[3],l=e.shape,f=l[1],h=l[2],d=new Float32Array(a*s*u*c),p=this.readSync(e.dataId),v=[o&&f>1?s-1:s,o&&h>1?u-1:u],m=[o&&f>1?f-1:f,o&&h>1?h-1:h],g=v[0]/m[0],b=v[1]/m[1],x=1/g,y=1/b,w=2*Math.ceil(x)+2,_=2*Math.ceil(y)+2,k=0;k<a;k++)for(var S=k*r.strides[0],I=0;I<s;I++)for(var E=S+I*r.strides[1],F=Math.floor(I*x),N=Math.floor(F-w/2),U=0;U<u;U++)for(var V=E+U*r.strides[2],z=Math.floor(U*y),H=Math.floor(z-_/2),L=0;L<c;L++){for(var B=0,K=0;K<w;K++){var Y=K+N;if(!(Y<0||Y>=f)){var ne=S+Y*e.strides[1],oe=Y*g;if(I===Math.min(s-1,o?Math.round(oe):Math.floor(oe)))for(var pe=0;pe<_;pe++){var we=pe+H;if(!(we<0||we>=h)){var _e=ne+we*e.strides[2],be=we*b;U===Math.min(u-1,o?Math.round(be):Math.floor(be))&&(B+=p[_e+L])}}}}d[V+L]=B}return kt(d,r.shape,r.dtype)},t.prototype.batchNormalization=function(e,r,o,i,a,s){X([e,r,o,a,s],"batchNorm");for(var u=this.readSync(e.dataId),c=this.readSync(r.dataId),l=this.readSync(o.dataId),f=a?this.readSync(a.dataId):new Float32Array([1]),h=s?this.readSync(s.dataId):new Float32Array([0]),d=new Float32Array(u.length),p=h.length,v=f.length,m=l.length,g=c.length,b=0,x=0,y=0,w=0,_=0;_<u.length;++_)d[_]=h[b++]+(u[_]-c[x++])*f[y++]/Math.sqrt(l[w++]+i),b>=p&&(b=0),x>=g&&(x=0),y>=v&&(y=0),w>=m&&(w=0);return kt(d,e.shape)},t.prototype.localResponseNormalization4D=function(e,r,o,i,a){X(e,"localResponseNormalization4D");var s=e.shape[3],u=s-1,c=this.readSync(e.dataId),l=e.size,f=new Float32Array(l);function h(m){for(var g=m%s,b=m-g+Math.max(0,g-r),x=m-g+Math.min(g+r,u),y=0;b<=x;b++){var w=c[b];y+=w*w}return y}for(var d=0;d<l;d++){var p=h(d),v=c[d]*Math.pow(o+i*p,-a);f[d]=v}return kt(f,e.shape)},t.prototype.LRNGrad=function(e,r,o,i,a,s,u){X(e,"LRNGrad");for(var c=e.shape[3],l=this.readSync(e.dataId),f=this.readSync(r.dataId),h=this.readSync(o.dataId),d=new Float32Array(e.size),p=e.size,v=0;v<p;v++){for(var m=v%c,g=v-m+Math.max(0,m-i),b=v-m+Math.min(c,m+i+1),x=0,y=g;y<b;y++)x+=Math.pow(f[y],2);for(x=s*x+a,y=g;y<b;y++){var w=-2*s*u*f[y]*h[v]/x;v===y&&(w+=Math.pow(x,-u)),w*=l[v],d[y]+=w}}return kt(d,e.shape)},t.prototype.multinomial=function(e,r,o,i){X(e,"multinomial");for(var a=r?e:Ln(e),s=a.shape[0],u=a.shape[1],c=Ge([s,o],"int32"),l=this.readSync(c.dataId),f=this.readSync(a.dataId),h=0;h<s;++h){var d=h*u,p=new Float32Array(u-1);p[0]=f[d];for(var v=1;v<p.length;++v)p[v]=p[v-1]+f[d+v];for(var m=oa(i.toString()),g=h*o,b=0;b<o;++b){var x=m();l[g+b]=p.length;for(var y=0;y<p.length;y++)if(x<p[y]){l[g+b]=y;break}}}return c},t.prototype.oneHot=function(e,r,o,i){X(e,"oneHot");var a=new Float32Array(e.size*r);a.fill(i);for(var s=this.readSync(e.dataId),u=0;u<e.size;++u)s[u]>=0&&s[u]<r&&(a[u*r+s[u]]=o);return Yn(a,[e.size,r],"int32")},t.prototype.nonMaxSuppression=function(e,r,o,i,a){return X(e,"nonMaxSuppression"),hu(this.readSync(e.dataId),this.readSync(r.dataId),o,i,a)},t.prototype.fft=function(e){return this.fftBatch(e,!1)},t.prototype.ifft=function(e){return this.fftBatch(e,!0)},t.prototype.fftBatch=function(e,r){for(var o=e.shape[0],i=e.shape[1],a=ye(e.shape,"float32"),s=ye(e.shape,"float32"),u=jt(e).as2D(o,i),c=hn(e).as2D(o,i),l=0;l<o;l++)for(var f=u.slice([l,0],[1,i]),h=c.slice([l,0],[1,i]),d=lt(f,h),p=this.readSync(this.fftImpl(d,r).dataId),v=0;v<i;v++){var m=Yc(p,v);a.values[l*i+v]=m.real,s.values[l*i+v]=m.imag}return lt(a.toTensor(),s.toTensor()).as2D(o,i)},t.prototype.fftImpl=function(e,r){var o=e.as1D(),i=o.size;if(this.isExponentOf2(i)){var a=this.fftRadix2(o,i,r).as2D(e.shape[0],e.shape[1]);return r&&(a=lt(jt(a).div(re(i)),hn(a).div(re(i)))),a}var s=this.readSync(e.dataId),u=function(c){for(var l=new Float32Array(c.length/2),f=new Float32Array(c.length/2),h=0;h<c.length;h+=2)l[h/2]=c[h],f[h/2]=c[h+1];return{real:l,imag:f}}(this.fourierTransformByMatmul(s,i,r));return lt(u.real,u.imag).as2D(e.shape[0],e.shape[1])},t.prototype.isExponentOf2=function(e){return(e&e-1)==0},t.prototype.fftRadix2=function(e,r,o){if(r===1)return e;var i=this.readSync(e.dataId),a=r/2,s=function(g){for(var b=Math.ceil(g.length/4),x=new Float32Array(b),y=new Float32Array(b),w=0;w<g.length;w+=4)x[Math.floor(w/4)]=g[w],y[Math.floor(w/4)]=g[w+1];return{real:x,imag:y}}(i),u=lt(s.real,s.imag).as1D(),c=function(g){for(var b=Math.floor(g.length/4),x=new Float32Array(b),y=new Float32Array(b),w=2;w<g.length;w+=4)x[Math.floor(w/4)]=g[w],y[Math.floor(w/4)]=g[w+1];return{real:x,imag:y}}(i),l=lt(c.real,c.imag).as1D();u=this.fftRadix2(u,a,o),l=this.fftRadix2(l,a,o);var f=function(g,b){for(var x=new Float32Array(g/2),y=new Float32Array(g/2),w=0;w<Math.ceil(g/2);w++){var _=(b?2:-2)*Math.PI*(w/g);x[w]=Math.cos(_),y[w]=Math.sin(_)}return{real:x,imag:y}}(r,o),h=lt(f.real,f.imag).mul(l),d=u.add(h),p=u.sub(h),v=jt(d).concat(jt(p)),m=hn(d).concat(hn(p));return lt(v,m).as1D()},t.prototype.fourierTransformByMatmul=function(e,r,o){for(var i=new Float32Array(2*r),a=0;a<r;a++){for(var s=0,u=0,c=0;c<r;c++){var l=by(a*c,r,o),f=Yc(e,c);s+=f.real*l.real-f.imag*l.imag,u+=f.real*l.imag+f.imag*l.real}o&&(s/=r,u/=r),xy(i,s,u,a)}return i},t.prototype.depthToSpace=function(e,r,o){R(o==="NHWC",function(){return"Only NHWC dataFormat supported on CPU for depthToSpace. Got "+o}),R(r>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+r});for(var i=e.shape[0],a=e.shape[1],s=e.shape[2],u=e.shape[3],c=a*r,l=s*r,f=u/(r*r),h=this.readSync(e.dataId),d=new Float32Array(i*c*l*f),p=0,v=0;v<i;++v)for(var m=0;m<c;++m)for(var g=Math.floor(m/r),b=m%r,x=0;x<l;++x)for(var y=Math.floor(x/r),w=(b*r+x%r)*f,_=0;_<f;++_){var k=_+w+u*(y+s*(g+a*v));d[p++]=h[k]}return kt(d,[i,c,l,f])},t.prototype.broadcastedBinaryOp=function(e,r,o,i){var a=Te(e.shape,r.shape),s=ye(a,o),u=this.readSync(e.dataId),c=this.readSync(r.dataId),l=Kn(e.shape,a),f=Kn(r.shape,a),h=s.values;if(l.length+f.length===0)for(var d=0;d<h.length;++d)h[d]=i(u[d%u.length],c[d%c.length]);else{var p=this.bufferSync(e),v=this.bufferSync(r),m=function(g){var b=s.indexToLoc(g),x=b.slice(-e.rank);l.forEach(function(k){return x[k]=0});var y=p.locToIndex(x),w=b.slice(-r.rank);f.forEach(function(k){return w[k]=0});var _=v.locToIndex(w);h[g]=i(u[y],c[_])};for(d=0;d<h.length;++d)m(d)}return s.toTensor()},t.prototype.broadcastedBinaryComplexOp=function(e,r,o){var i=Te(e.shape,r.shape),a=ye(i,"float32"),s=ye(i,"float32"),u=this.readSync(e.dataId),c=this.readSync(r.dataId),l=Kn(e.shape,i),f=Kn(r.shape,i),h=a.values,d=s.values;if(l.length+f.length===0)for(var p=0;p<h.length;p++){var v=p%u.length,m=p%c.length,g=o(u[2*v],u[2*v+1],c[2*m],c[2*m+1]);h[p]=g.real,d[p]=g.imag}else{var b=this.bufferSync(this.data.get(e.dataId).complexTensors.real),x=this.bufferSync(this.data.get(r.dataId).complexTensors.real),y=function(w){var _=a.indexToLoc(w),k=_.slice(-e.rank);l.forEach(function(N){return k[N]=0});var S=b.locToIndex(k),I=_.slice(-r.rank);f.forEach(function(N){return I[N]=0});var E=x.locToIndex(I),F=o(u[2*S],u[2*S+1],c[2*E],c[2*E+1]);h[w]=F.real,d[w]=F.imag};for(p=0;p<h.length;p++)y(p)}return this.complex(a.toTensor(),s.toTensor())},t.prototype.split=function(e,r,o){return Ih(e,r,o)},t.prototype.dispose=function(){},t.prototype.floatPrecision=function(){return 32},t.prototype.epsilon=function(){return 1e-7},t.prototype.cropAndResize=function(e,r,o,i,a,s){for(var u=e.shape,c=u[0],l=u[1],f=u[2],h=u[3],d=r.shape[0],p=i[0],v=i[1],m=ye([d,p,v,h],"float32"),g=this.readSync(r.dataId),b=this.readSync(o.dataId),x=this.readSync(e.dataId),y=e.strides,w=m.strides,_=0;_<d;_++){var k=4*_,S=g[k],I=g[k+1],E=g[k+2],F=g[k+3],N=b[_];if(!(N>=c))for(var U=p>1?(E-S)*(l-1)/(p-1):0,V=v>1?(F-I)*(f-1)/(v-1):0,z=0;z<p;z++){var H=p>1?S*(l-1)+z*U:.5*(S+E)*(l-1);if(H<0||H>l-1)for(var L=0;L<v;L++)for(var B=0;B<h;B++){var K=B+L*w[2]+z*w[1]+_*w[0];m.values[K]=s}else if(a==="bilinear"){var Y=Math.floor(H),ne=Math.ceil(H),oe=H-Y;for(L=0;L<v;L++)if((Ne=v>1?I*(f-1)+L*V:.5*(I+F)*(f-1))<0||Ne>f-1)for(B=0;B<h;B++)K=B+L*w[2]+z*w[1]+_*w[0],m.values[K]=s;else{var pe=Math.floor(Ne),we=Math.ceil(Ne),_e=Ne-pe;for(B=0;B<h;B++){var be=x[K=B+pe*y[2]+Y*y[1]+N*y[0]],Re=x[K=B+we*y[2]+Y*y[1]+N*y[0]],Se=x[K=B+pe*y[2]+ne*y[1]+N*y[0]],De=be+(Re-be)*_e,We=Se+(x[K=B+we*y[2]+ne*y[1]+N*y[0]]-Se)*_e;K=B+L*w[2]+z*w[1]+_*w[0],m.values[K]=De+(We-De)*oe}}}else for(L=0;L<v;++L){var Ne;if((Ne=v>1?I*(f-1)+L*V:.5*(I+F)*(f-1))<0||Ne>f-1)for(B=0;B<h;B++)K=B+L*w[2]+z*w[1]+_*w[0],m.values[K]=s;else{var A=Math.round(Ne),D=Math.round(H);for(B=0;B<h;B++){var M=B+A*y[2]+D*y[1]+N*y[0],q=B+L*w[2]+z*w[1]+_*w[0];m.values[q]=x[M]}}}}}return m.toTensor()},t.prototype.sparseToDense=function(e,r,o,i){var a=Oi(0,e,o),s=a.sliceRank,u=a.numUpdates,c=a.sliceSize,l=a.strides,f=a.outputSize;return this.scatter(e,r,o,f,c,u,s,l,i,!1)},t.prototype.gatherND=function(e,r){var o=r.shape,i=o[o.length-1],a=vh(e,r),s=a[0],u=a[1],c=a[2],l=a[3];if(u===0)return ht([],s,e.dtype);for(var f=new Fo([u,c],e.dtype),h=this.readSync(r.dataId),d=this.readSync(e.dataId),p=0;p<u;p++){for(var v=[],m=0,g=0;g<i;g++){var b=h[p*i+g];m+=b*l[g],v.push(b)}if(m<0||m>=e.size/c)throw new Error("Invalid indices: "+v+" does not index into "+e.shape);for(var x=0;x<c;x++)f.values[p*c+x]=d[m*c+x]}return f.toTensor().reshape(s)},t.prototype.scatterND=function(e,r,o){var i=Oi(0,e,o),a=i.sliceRank,s=i.numUpdates,u=i.sliceSize,c=i.strides,l=i.outputSize,f=re(0);return this.scatter(e,r,o,l,u,s,a,c,f,!0)},t.prototype.fill=function(e,r,o){var i=Ri(o=o||Vo(r),le(e));return i.fill(r),P.makeTensor(i,e,o,this)},t.prototype.onesLike=function(e){if(e.dtype==="string")throw new Error("onesLike is not supported for string tensors");return this.fill(e.shape,1,e.dtype)},t.prototype.zerosLike=function(e){var r=Ri(e.dtype,le(e.shape));return this.makeOutput(r,e.shape,e.dtype)},t.prototype.linspace=function(e,r,o){return Ch(e,r,o)},t.prototype.scatter=function(e,r,o,i,a,s,u,c,l,f){var h=[i/a,a],d=this.readSync(e.dataId),p=this.readSync(r.dataId);if(i===0)return ht([],o,r.dtype);var v=new Fo(h,r.dtype);v.values.fill(this.readSync(l.dataId)[0]);for(var m=0;m<s;m++){for(var g=[],b=0,x=0;x<u;x++){var y=d[m*u+x];g.push(y),b+=y*c[x]}if(b<0||b>=i/a)throw new Error("Invalid indices: "+g+" does not index into "+o);for(var w=0;w<a;w++)f?v.values[b*a+w]+=p[m*a+w]:v.values[b*a+w]=r.rank===0?p[0]:p[m*a+w]}return v.toTensor().reshape(o)},t}(bh);P.registerBackend("cpu",function(){return new U1},1);for(var Xa=0,yl=[{kernelName:"NonMaxSuppressionV5",backendName:"cpu",kernelFunc:function(n){var t=n.inputs,e=n.backend,r=n.attrs,o=t,i=o.boxes,a=o.scores,s=r,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,f=s.softNmsSigma,h=e;X(i,"NonMaxSuppressionWithScore");var d=du(h.data.get(i.dataId).values,h.data.get(a.dataId).values,u,c,l,f);return[d.selectedIndices,d.selectedScores]}},{kernelName:"Square",backendName:"cpu",kernelFunc:function(n){var t=n.inputs,e=n.backend,r=t.x,o=e;X(r,"square");for(var i=o.data.get(r.dataId).values,a=new Float32Array(i.length),s=0;s<i.length;++s){var u=i[s];a[s]=u*u}return{dataId:o.write(a,r.shape,r.dtype),shape:r.shape,dtype:r.dtype}}},{kernelName:Oo,backendName:"cpu",kernelFunc:function(n){var t=n.inputs,e=n.backend,r=t,o=r.a,i=r.b,a=e;X([o,i],Oo);var s=a.data.get(o.dataId).values,u=a.data.get(i.dataId).values,c=function(h,d,p,v,m,g){var b=Te(h,d),x=b.length,y=gn(b),w=No(m,le(b)),_=h.length,k=d.length,S=gn(h),I=gn(d),E=Kn(h,b),F=Kn(d,b);if(E.length+F.length===0)for(var N=0;N<w.length;++N)w[N]=g(p[N%p.length],v[N%v.length]);else{var U=function(V){var z=Ym(V,x,y),H=z.slice(-_);E.forEach(function(Y){return H[Y]=0});var L=Vc(H,_,S),B=z.slice(-k);F.forEach(function(Y){return B[Y]=0});var K=Vc(B,k,I);w[V]=g(p[L],v[K])};for(N=0;N<w.length;++N)U(N)}return[w,b]}(o.shape,i.shape,s,u,o.dtype,function(h,d){var p=h-d;return p*p}),l=c[0],f=c[1];return{dataId:a.write(l,f,o.dtype),shape:f,dtype:o.dtype}}}];Xa<yl.length;Xa++)Xf(yl[Xa]);var Nr,V1=function(n){this.variableNames=["A"];var t=gt(),e=n[0],r=n[1];this.outputShape=n,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+r+".0, "+e+`.0);

        vec4 values = `+t.texture2D+`(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `},z1=function(n){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var t=gt(),e=n[0],r=n[1];this.outputShape=n,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(`+r+".0, "+e+`.0);
            vec4 values = `+t.texture2D+`(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        `+t.output+` = result;
      }
    `};for(var $a=0,xl=[{kernelName:"FromPixels",backendName:"webgl",kernelFunc:function(n){var t=n.inputs,e=n.backend,r=n.attrs,o=t.pixels,i=r.numChannels,a=typeof HTMLVideoElement<"u"&&o instanceof HTMLVideoElement,s=typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement,u=a?[o.videoWidth,o.videoHeight]:[o.width,o.height],c=u[0],l=u[1],f=[l,c],h=[l,c,i];(s||a)&&(Nr==null&&(Nr=document.createElement("canvas").getContext("2d")),Nr.canvas.width=c,Nr.canvas.height=l,Nr.drawImage(o,0,0,c,l),o=Nr.canvas);var d=e.makeTensorInfo(f,"int32");e.texData.get(d.dataId).usage=Lt.PIXELS,e.gpgpu.uploadPixelDataToTexture(e.getTexture(d.dataId),o);var p=G().getBool("WEBGL_PACK")?new z1(h):new V1(h),v=e.runWebGLProgram(p,[d],"int32");return e.disposeData(d.dataId),v}},{kernelName:"NonMaxSuppressionV5",backendName:"webgl",kernelFunc:function(n){var t=n.inputs,e=n.backend,r=n.attrs;Di("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");var o=t,i=o.boxes,a=o.scores,s=r,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,f=s.softNmsSigma,h=e,d=du(h.readSync(i.dataId),h.readSync(a.dataId),u,c,l,f);return[d.selectedIndices,d.selectedScores]}},{kernelName:"Square",backendName:"webgl",kernelFunc:function(n){var t=n.inputs,e=n.backend,r=t.x,o=e,i=new Ce(r.shape,"return x * x;");return o.runWebGLProgram(i,[r],r.dtype)}},{kernelName:Oo,backendName:"webgl",kernelFunc:function(n){var t=n.inputs,e=n.backend,r=t,o=r.a,i=r.b,a=e,s=G().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new kn("return (a - b) * (a - b);",o.shape,i.shape):new Xe("return (a - b) * (a - b);",o.shape,i.shape);return a.compileAndRun(s,[o,i])}}];$a<xl.length;$a++)Xf(xl[$a]);for(var Ya=0,bl=[{kernelName:"Square",gradFunc:function(n,t){var e=t[0];return{x:function(){return n.mul(e.toFloat().mul(2))}}}},{kernelName:Oo,gradFunc:function(n,t){var e=t[0],r=t[1],o=re(2);return{a:function(){return xt(n,xt(o,rt(e,r)))},b:function(){return xt(n,xt(o,rt(r,e)))}}}}];Ya<bl.length;Ya++)Wm(bl[Ya]);var H1=function(){function n(){}return n.prototype.fetch=function(t,e){return fetch(t,e)},n.prototype.now=function(){return performance.now()},n.prototype.encode=function(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error("Browser's encoder only supports utf-8, but got "+e);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)},n.prototype.decode=function(t,e){return new TextDecoder(e).decode(t)},n}();G().get("IS_BROWSER")&&G().setPlatform("browser",new H1);var Ja,G1=function(){return require("node-fetch")},j1=function(){function n(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}return n.prototype.fetch=function(t,e){return G().global.fetch!=null?G().global.fetch(t,e):(Ja==null&&(Ja=G1()),Ja(t,e))},n.prototype.now=function(){var t=process.hrtime();return 1e3*t[0]+t[1]/1e6},n.prototype.encode=function(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error("Node built-in encoder only supports utf-8, but got "+e);return this.textEncoder.encode(t)},n.prototype.decode=function(t,e){return t.length===0?"":new this.util.TextDecoder(e).decode(t)},n}();G().get("IS_NODE")&&G().setPlatform("node",new j1);var Ts={float32:4,int32:4,uint16:2,uint8:1,bool:1},Hi=4;function gd(n,t){for(var e={},r=0,o=function(s){var u=s.name,c=s.dtype,l=s.shape,f=le(l),h=void 0;if("quantization"in s){var d=s.quantization;if(d.dtype!=="uint8"&&d.dtype!=="uint16")throw new Error("Weight "+s.name+" has unknown quantization dtype "+d.dtype+". Supported quantization dtypes are: 'uint8' and 'uint16'.");var p=Ts[d.dtype],v=n.slice(r,r+f*p),m=d.dtype==="uint8"?new Uint8Array(v):new Uint16Array(v);if(c==="float32")h=Float32Array.from(m,function(_){return _*d.scale+d.min});else{if(c!=="int32")throw new Error("Unsupported dtype in weight '"+u+"': "+c);h=Int32Array.from(m,function(_){return Math.round(_*d.scale+d.min)})}r+=f*p}else if(c==="string"){var g=le(s.shape);h=[];for(var b=0;b<g;b++){var x=new Uint32Array(n.slice(r,r+Hi))[0];r+=Hi;var y=new Uint8Array(n.slice(r,r+x));h.push(y),r+=x}}else{var w=Ts[c];if(v=n.slice(r,r+f*w),c==="float32")h=new Float32Array(v);else if(c==="int32")h=new Int32Array(v);else{if(c!=="bool")throw new Error("Unsupported dtype in weight '"+u+"': "+c);h=new Uint8Array(v)}r+=f*w}e[u]=ht(h,l,c)},i=0,a=t;i<a.length;i++)o(a[i]);return e}function q1(n){if(n===null)throw new Error("Invalid input value: "+JSON.stringify(n));var t=0,e=[];n.forEach(function(i){if(t+=i.byteLength,e.push(i.byteLength===i.buffer.byteLength?i:new i.constructor(i)),!(i instanceof Float32Array||i instanceof Int32Array||i instanceof Uint8Array))throw new Error("Unsupported TypedArray subtype: "+i.constructor.name)});var r=new Uint8Array(t),o=0;return e.forEach(function(i){r.set(new Uint8Array(i.buffer),o),o+=i.byteLength}),r.buffer}var Ns=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function wl(n){return Ns?Buffer.byteLength(n):new Blob([n]).size}function Nu(n){var t=0;n.forEach(function(o){t+=o.byteLength});var e=new Uint8Array(t),r=0;return n.forEach(function(o){e.set(new Uint8Array(o),r),r+=o.byteLength}),e.buffer}function _l(n){for(n=n.trim();n.endsWith("/");)n=n.slice(0,n.length-1);var t=n.split("/");return t[t.length-1]}function Xo(n){if(n.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:n.modelTopology==null?0:wl(JSON.stringify(n.modelTopology)),weightSpecsBytes:n.weightSpecs==null?0:wl(JSON.stringify(n.weightSpecs)),weightDataBytes:n.weightData==null?0:n.weightData.byteLength}}var Wt=function(){function n(){this.saveRouters=[],this.loadRouters=[]}return n.getInstance=function(){return n.instance==null&&(n.instance=new n),n.instance},n.registerSaveRouter=function(t){n.getInstance().saveRouters.push(t)},n.registerLoadRouter=function(t){n.getInstance().loadRouters.push(t)},n.getSaveHandlers=function(t){return n.getHandlers(t,"save")},n.getLoadHandlers=function(t,e){return n.getHandlers(t,"load",e)},n.getHandlers=function(t,e,r){var o=[];return(e==="load"?n.getInstance().loadRouters:n.getInstance().saveRouters).forEach(function(i){var a=i(t,r);a!==null&&o.push(a)}),o},n}(),$r="://",Jn=function(){function n(){this.managers={}}return n.getInstance=function(){return n.instance==null&&(n.instance=new n),n.instance},n.registerManager=function(t,e){R(t!=null,function(){return"scheme must not be undefined or null."}),t.endsWith($r)&&(t=t.slice(0,t.indexOf($r))),R(t.length>0,function(){return"scheme must not be an empty string."});var r=n.getInstance();R(r.managers[t]==null,function(){return"A model store manager is already registered for scheme '"+t+"'."}),r.managers[t]=e},n.getManager=function(t){var e=this.getInstance().managers[t];if(e==null)throw new Error("Cannot find model manager for scheme '"+t+"'");return e},n.getSchemes=function(){return Object.keys(this.getInstance().managers)},n}();function xi(n){if(n.indexOf($r)===-1)throw new Error("The url string provided does not contain a scheme. Supported schemes are: "+Jn.getSchemes().join(","));return{scheme:n.split($r)[0],path:n.split($r)[1]}}function Cl(n,t,e){return e===void 0&&(e=!1),ae(this,void 0,void 0,function(){var r,o,i,a,s,u,c,l,f;return se(this,function(h){switch(h.label){case 0:return R(n!==t,function(){return"Old path and new path are the same: '"+n+"'"}),R((r=Wt.getLoadHandlers(n)).length>0,function(){return"Copying failed because no load handler is found for source URL "+n+"."}),R(r.length<2,function(){return"Copying failed because more than one ("+r.length+") load handlers for source URL "+n+"."}),o=r[0],R((i=Wt.getSaveHandlers(t)).length>0,function(){return"Copying failed because no save handler is found for destination URL "+t+"."}),R(i.length<2,function(){return"Copying failed because more than one ("+r.length+") save handlers for destination URL "+t+"."}),a=i[0],s=xi(n).scheme,u=xi(n).path,c=s===xi(n).scheme,[4,o.load()];case 1:return l=h.sent(),e&&c?[4,Jn.getManager(s).removeModel(u)]:[3,3];case 2:h.sent(),h.label=3;case 3:return[4,a.save(l)];case 4:return f=h.sent(),!e||c?[3,6]:[4,Jn.getManager(s).removeModel(u)];case 5:h.sent(),h.label=6;case 6:return[2,f.modelArtifactsInfo]}})})}var gr="models_store",Xn="model_info_store";function yd(){if(!G().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");var n=window||self,t=n.indexedDB||n.mozIndexedDB||n.webkitIndexedDB||n.msIndexedDB||n.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function Fs(n){var t=n.result;t.createObjectStore(gr,{keyPath:"modelPath"}),t.createObjectStore(Xn,{keyPath:"modelPath"})}var Yr=function(){function n(t){if(this.indexedDB=yd(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}return n.prototype.save=function(t){return ae(this,void 0,void 0,function(){return se(this,function(e){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return[2,this.databaseAction(this.modelPath,t)]})})},n.prototype.load=function(){return ae(this,void 0,void 0,function(){return se(this,function(t){return[2,this.databaseAction(this.modelPath)]})})},n.prototype.databaseAction=function(t,e){var r=this;return new Promise(function(o,i){var a=r.indexedDB.open("tensorflowjs",1);a.onupgradeneeded=function(){return Fs(a)},a.onsuccess=function(){var s=a.result;if(e==null){var u=s.transaction(gr,"readonly"),c=u.objectStore(gr).get(r.modelPath);c.onsuccess=function(){if(c.result==null)return s.close(),i(new Error("Cannot find model with path '"+r.modelPath+"' in IndexedDB."));o(c.result.modelArtifacts)},c.onerror=function(v){return s.close(),i(c.error)},u.oncomplete=function(){return s.close()}}else{var l,f=Xo(e),h=s.transaction(Xn,"readwrite"),d=h.objectStore(Xn),p=d.put({modelPath:r.modelPath,modelArtifactsInfo:f});p.onsuccess=function(){var v=(l=s.transaction(gr,"readwrite")).objectStore(gr).put({modelPath:r.modelPath,modelArtifacts:e,modelArtifactsInfo:f});v.onsuccess=function(){return o({modelArtifactsInfo:f})},v.onerror=function(m){var g=(d=h.objectStore(Xn)).delete(r.modelPath);g.onsuccess=function(){return s.close(),i(v.error)},g.onerror=function(b){return s.close(),i(v.error)}}},p.onerror=function(v){return s.close(),i(p.error)},h.oncomplete=function(){l==null?s.close():l.oncomplete=function(){return s.close()}}}},a.onerror=function(s){return i(a.error)}})},n.URL_SCHEME="indexeddb://",n}(),El=function(n){return G().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(Yr.URL_SCHEME)?(t=n.slice(Yr.URL_SCHEME.length),new Yr(t)):null;var t};Wt.registerSaveRouter(El),Wt.registerLoadRouter(El);var K1=function(){function n(){this.indexedDB=yd()}return n.prototype.listModels=function(){return ae(this,void 0,void 0,function(){var t=this;return se(this,function(e){return[2,new Promise(function(r,o){var i=t.indexedDB.open("tensorflowjs",1);i.onupgradeneeded=function(){return Fs(i)},i.onsuccess=function(){var a=i.result,s=a.transaction(Xn,"readonly"),u=s.objectStore(Xn).getAll();u.onsuccess=function(){for(var c={},l=0,f=u.result;l<f.length;l++){var h=f[l];c[h.modelPath]=h.modelArtifactsInfo}r(c)},u.onerror=function(c){return a.close(),o(u.error)},s.oncomplete=function(){return a.close()}},i.onerror=function(a){return o(i.error)}})]})})},n.prototype.removeModel=function(t){return ae(this,void 0,void 0,function(){var e=this;return se(this,function(r){var o;return t=(o=t).startsWith(Yr.URL_SCHEME)?o.slice(Yr.URL_SCHEME.length):o,[2,new Promise(function(i,a){var s=e.indexedDB.open("tensorflowjs",1);s.onupgradeneeded=function(){return Fs(s)},s.onsuccess=function(){var u,c=s.result,l=c.transaction(Xn,"readwrite"),f=l.objectStore(Xn),h=f.get(t);h.onsuccess=function(){if(h.result==null)return c.close(),a(new Error("Cannot find model with path '"+t+"' in IndexedDB."));var d=f.delete(t),p=function(){var v=(u=c.transaction(gr,"readwrite")).objectStore(gr).delete(t);v.onsuccess=function(){return i(h.result.modelArtifactsInfo)},v.onerror=function(m){return a(h.error)}};d.onsuccess=p,d.onerror=function(v){return p(),c.close(),a(h.error)}},h.onerror=function(d){return c.close(),a(h.error)},l.oncomplete=function(){u==null?c.close():u.oncomplete=function(){return c.close()}}},s.onerror=function(u){return a(s.error)}})]})})},n}();if(G().getBool("IS_BROWSER"))try{Jn.registerManager(Yr.URL_SCHEME,new K1)}catch{}var Fn="/",Vr="tensorflowjs_models",xd="info",X1="model_topology",$1="weight_specs",Y1="weight_data",J1="model_metadata";function bd(n){return{info:[Vr,n,xd].join(Fn),topology:[Vr,n,X1].join(Fn),weightSpecs:[Vr,n,$1].join(Fn),weightData:[Vr,n,Y1].join(Fn),modelMetadata:[Vr,n,J1].join(Fn)}}function Q1(n){var t=n.split(Fn);if(t.length<3)throw new Error("Invalid key format: "+n);return t.slice(1,t.length-1).join(Fn)}var Jr=function(){function n(t){if(!G().getBool("IS_BROWSER")||typeof window>"u"||window.localStorage===void 0)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=bd(this.modelPath)}return n.prototype.save=function(t){return ae(this,void 0,void 0,function(){var e,r,o;return se(this,function(i){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");e=JSON.stringify(t.modelTopology),r=JSON.stringify(t.weightSpecs),o=Xo(t);try{return this.LS.setItem(this.keys.info,JSON.stringify(o)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,r),this.LS.setItem(this.keys.weightData,function(a){if(Ns)return Buffer.from(a).toString("base64");for(var s=new Uint8Array(a),u="",c=0,l=s.length;c<l;c++)u+=String.fromCharCode(s[c]);return btoa(u)}(t.weightData)),this.LS.setItem(this.keys.modelMetadata,JSON.stringify({format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata})),[2,{modelArtifactsInfo:o}]}catch{throw this.LS.removeItem(this.keys.info),this.LS.removeItem(this.keys.topology),this.LS.removeItem(this.keys.weightSpecs),this.LS.removeItem(this.keys.weightData),this.LS.removeItem(this.keys.modelMetadata),new Error("Failed to save model '"+this.modelPath+"' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes="+o.modelTopologyBytes+", weightSpecsBytes="+o.weightSpecsBytes+", weightDataBytes="+o.weightDataBytes+".")}return[2]})})},n.prototype.load=function(){return ae(this,void 0,void 0,function(){var t,e,r,o,i,a,s;return se(this,function(u){if((t=JSON.parse(this.LS.getItem(this.keys.info)))==null)throw new Error("In local storage, there is no model with name '"+this.modelPath+"'");if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");if(e={},(r=JSON.parse(this.LS.getItem(this.keys.topology)))==null)throw new Error("In local storage, the topology of model '"+this.modelPath+"' is missing.");if(e.modelTopology=r,(o=JSON.parse(this.LS.getItem(this.keys.weightSpecs)))==null)throw new Error("In local storage, the weight specs of model '"+this.modelPath+"' are missing.");if(e.weightSpecs=o,(i=this.LS.getItem(this.keys.modelMetadata))!=null&&(a=JSON.parse(i),e.format=a.format,e.generatedBy=a.generatedBy,e.convertedBy=a.convertedBy,e.userDefinedMetadata=a.userDefinedMetadata),(s=this.LS.getItem(this.keys.weightData))==null)throw new Error("In local storage, the binary weight values of model '"+this.modelPath+"' are missing.");return e.weightData=function(c){if(Ns){var l=Buffer.from(c,"base64");return l.buffer.slice(l.byteOffset,l.byteOffset+l.byteLength)}for(var f=atob(c),h=new Uint8Array(f.length),d=0;d<f.length;++d)h.set([f.charCodeAt(d)],d);return h.buffer}(s),[2,e]})})},n.URL_SCHEME="localstorage://",n}(),Il=function(n){return G().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(Jr.URL_SCHEME)?(t=n.slice(Jr.URL_SCHEME.length),new Jr(t)):null;var t};Wt.registerSaveRouter(Il),Wt.registerLoadRouter(Il);var Z1=function(){function n(){R(G().getBool("IS_BROWSER"),function(){return"Current environment is not a web browser"}),R(typeof window>"u"||window.localStorage!==void 0,function(){return"Current browser does not appear to support localStorage"}),this.LS=window.localStorage}return n.prototype.listModels=function(){return ae(this,void 0,void 0,function(){var t,e,r,o,i,a;return se(this,function(s){for(t={},e=Vr+Fn,r=Fn+xd,o=0;o<this.LS.length;++o)(i=this.LS.key(o)).startsWith(e)&&i.endsWith(r)&&(a=Q1(i),t[a]=JSON.parse(this.LS.getItem(i)));return[2,t]})})},n.prototype.removeModel=function(t){return ae(this,void 0,void 0,function(){var e,r;return se(this,function(o){var i;if(t=(i=t).startsWith(Jr.URL_SCHEME)?i.slice(Jr.URL_SCHEME.length):i,e=bd(t),this.LS.getItem(e.info)==null)throw new Error("Cannot find model at path '"+t+"'");return r=JSON.parse(this.LS.getItem(e.info)),this.LS.removeItem(e.info),this.LS.removeItem(e.topology),this.LS.removeItem(e.weightSpecs),this.LS.removeItem(e.weightData),[2,r]})})},n}();if(G().getBool("IS_BROWSER"))try{Jn.registerManager(Jr.URL_SCHEME,new Z1)}catch{}var ew="model",tw=".json",nw=".weights.bin";function Rl(n){return new Promise(function(t){return setTimeout(t)}).then(n)}var Qa=function(){function n(t){if(!G().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(n.URL_SCHEME)&&(t=t.slice(n.URL_SCHEME.length)),t!=null&&t.length!==0||(t=ew),this.modelTopologyFileName=t+tw,this.weightDataFileName=t+nw}return n.prototype.save=function(t){return ae(this,void 0,void 0,function(){var e,r,o,i,a,s;return se(this,function(u){switch(u.label){case 0:if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");if(e=window.URL.createObjectURL(new Blob([t.weightData],{type:"application/octet-stream"})),!(t.modelTopology instanceof ArrayBuffer))return[3,1];throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");case 1:return r=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],o={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,weightsManifest:r},i=window.URL.createObjectURL(new Blob([JSON.stringify(o)],{type:"application/json"})),(a=this.jsonAnchor==null?document.createElement("a"):this.jsonAnchor).download=this.modelTopologyFileName,a.href=i,[4,Rl(function(){return a.dispatchEvent(new MouseEvent("click"))})];case 2:return u.sent(),t.weightData==null?[3,4]:((s=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor).download=this.weightDataFileName,s.href=e,[4,Rl(function(){return s.dispatchEvent(new MouseEvent("click"))})]);case 3:u.sent(),u.label=4;case 4:return[2,{modelArtifactsInfo:Xo(t)}]}})})},n.URL_SCHEME="downloads://",n}(),rw=function(){function n(t){if(t==null||t.length<1)throw new Error("When calling browserFiles, at least 1 file is required, but received "+t);this.files=t}return n.prototype.load=function(){return ae(this,void 0,void 0,function(){var t,e,r=this;return se(this,function(o){return t=this.files[0],e=this.files.slice(1),[2,new Promise(function(i,a){var s=new FileReader;s.onload=function(u){var c=JSON.parse(u.target.result),l=c.modelTopology;if(l!=null){e.length===0&&i({modelTopology:l});var f=c.weightsManifest;if(f!=null){var h;try{h=r.checkManifestAndWeightFiles(f,e)}catch(m){return void a(m)}var d=[],p=[],v=[];f.forEach(function(m){m.paths.forEach(function(g){p.push(g),v.push(null)}),d.push.apply(d,m.weights)}),f.forEach(function(m){m.paths.forEach(function(g){var b=new FileReader;b.onload=function(x){var y=x.target.result,w=p.indexOf(g);v[w]=y,v.indexOf(null)===-1&&i({modelTopology:l,weightSpecs:d,weightData:Nu(v),format:c.format,generatedBy:c.generatedBy,convertedBy:c.convertedBy,userDefinedMetadata:c.userDefinedMetadata})},b.onerror=function(x){return a("Failed to weights data from file of path '"+g+"'.")},b.readAsArrayBuffer(h[g])})})}else a(new Error("weightManifest field is missing from file "+t.name))}else a(new Error("modelTopology field is missing from file "+t.name))},s.onerror=function(u){return a("Failed to read model topology and weights manifest JSON from file '"+t.name+"'. BrowserFiles supports loading Keras-style tf.Model artifacts only.")},s.readAsText(t)})]})})},n.prototype.checkManifestAndWeightFiles=function(t,e){for(var r=[],o=e.map(function(u){return _l(u.name)}),i={},a=0,s=t;a<s.length;a++)s[a].paths.forEach(function(u){var c=_l(u);if(r.indexOf(c)!==-1)throw new Error("Duplicate file basename found in weights manifest: '"+c+"'");if(r.push(c),o.indexOf(c)===-1)throw new Error("Weight file with basename '"+c+"' is not provided.");i[u]=e[o.indexOf(c)]});if(r.length!==e.length)throw new Error("Mismatch in the number of files in weights manifest ("+r.length+") and the number of weight files provided ("+e.length+").");return i},n}();function Sl(n,t,e,r){(function(i){R(i!=null&&Array.isArray(i)&&i.length>0,function(){return"promises must be a none empty array"})})(n),function(i,a){R(i>=0&&i<=1,function(){return"Progress fraction must be in range [0, 1], but got startFraction "+i}),R(a>=0&&a<=1,function(){return"Progress fraction must be in range [0, 1], but got endFraction "+a}),R(a>=i,function(){return"startFraction must be no more than endFraction, but got startFraction "+i+" and endFraction "+a})}(e=e??0,r=r??1);var o=0;return Promise.all(n.map(function(i){return i.then(function(a){var s=e+ ++o/n.length*(r-e);return t(s),a}),i}))}function wd(n,t){return ae(this,void 0,void 0,function(){var e,r,o,i,a,s,u,c,l;return se(this,function(f){switch(f.label){case 0:return t==null&&(t={}),e=t.fetchFunc==null?G().platform.fetch:t.fetchFunc,r=n.map(function(h){return e(h,t.requestInit,{isBinary:!0})}),o=0,i=.5,t.onProgress!=null?[3,2]:[4,Promise.all(r)];case 1:return a=f.sent(),[3,4];case 2:return[4,Sl(r,t.onProgress,o,i)];case 3:a=f.sent(),f.label=4;case 4:return s=a.map(function(h){return h.arrayBuffer()}),u=.5,c=1,t.onProgress!=null?[3,6]:[4,Promise.all(s)];case 5:return l=f.sent(),[3,8];case 6:return[4,Sl(s,t.onProgress,u,c)];case 7:l=f.sent(),f.label=8;case 8:return[2,l]}})})}function kl(n){var t=this;return function(e,r,o){return r===void 0&&(r=""),ae(t,void 0,void 0,function(){var i,a,s,u,c,l,f,h,d,p;return se(this,function(v){switch(v.label){case 0:if(i=e.map(function(){return!1}),a={},s=o!=null?o.map(function(){return!1}):[],u=[],e.forEach(function(m,g){var b=0;m.weights.forEach(function(x){var y="quantization"in x?x.quantization.dtype:x.dtype,w=Ts[y]*le(x.shape),_=function(){i[g]=!0,a[g]==null&&(a[g]=[]),a[g].push({manifestEntry:x,groupOffset:b,sizeBytes:w})};o!=null?o.forEach(function(k,S){k===x.name&&(_(),s[S]=!0)}):_(),u.push(x.name),b+=w})}),!s.every(function(m){return m}))throw c=o.filter(function(m,g){return!s[g]}),new Error("Could not find weights in manifest with names: "+c.join(", ")+`. 
Manifest JSON has weights with names: `+u.join(", ")+".");return l=i.reduce(function(m,g,b){return g&&m.push(b),m},[]),f=[],l.forEach(function(m){e[m].paths.forEach(function(g){var b=r+(r.endsWith("/")?"":"/")+g;f.push(b)})}),[4,n(f)];case 1:return h=v.sent(),d={},p=0,l.forEach(function(m){for(var g=e[m].paths.length,b=0,x=0;x<g;x++)b+=h[p+x].byteLength;for(var y=new ArrayBuffer(b),w=new Uint8Array(y),_=0,k=0;k<g;k++){var S=new Uint8Array(h[p+k]);w.set(S,_),_+=S.byteLength}a[m].forEach(function(I){var E=gd(y.slice(I.groupOffset,I.groupOffset+I.sizeBytes),[I.manifestEntry]);for(var F in E)d[F]=E[F]}),p+=g}),[2,d]}})})}}Wt.registerSaveRouter(function(n){return G().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(Qa.URL_SCHEME)?function(t){return t===void 0&&(t="model"),new Qa(t)}(n.slice(Qa.URL_SCHEME.length)):null});var _d=function(){function n(t,e){if(this.DEFAULT_METHOD="POST",e==null&&(e={}),this.weightPathPrefix=e.weightPathPrefix,this.onProgress=e.onProgress,e.fetchFunc!=null?(R(typeof e.fetchFunc=="function",function(){return"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"}),this.fetch=e.fetchFunc):this.fetch=G().platform.fetch,R(t!=null&&t.length>0,function(){return"URL path for http must not be null, undefined or empty."}),Array.isArray(t)&&R(t.length===2,function(){return"URL paths for http must have a length of 2, (actual length is "+t.length+")."}),this.path=t,e.requestInit!=null&&e.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=e.requestInit||{}}return n.prototype.save=function(t){return ae(this,void 0,void 0,function(){var e,r,o,i;return se(this,function(a){switch(a.label){case 0:if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");return(e=Object.assign({method:this.DEFAULT_METHOD},this.requestInit)).body=new FormData,r=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],o={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata,weightsManifest:r},e.body.append("model.json",new Blob([JSON.stringify(o)],{type:"application/json"}),"model.json"),t.weightData!=null&&e.body.append("model.weights.bin",new Blob([t.weightData],{type:"application/octet-stream"}),"model.weights.bin"),[4,this.fetch(this.path,e)];case 1:if((i=a.sent()).ok)return[2,{modelArtifactsInfo:Xo(t),responses:[i]}];throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status "+i.status+".")}})})},n.prototype.load=function(){return ae(this,void 0,void 0,function(){var t,e,r,o,i,a,s,u,c,l,f,h;return se(this,function(d){switch(d.label){case 0:return[4,this.fetch(this.path,this.requestInit)];case 1:if(!(t=d.sent()).ok)throw new Error("Request to "+this.path+" failed with status code "+t.status+". Please verify this URL points to the model JSON of the model to load.");d.label=2;case 2:return d.trys.push([2,4,,5]),[4,t.json()];case 3:return e=d.sent(),[3,5];case 4:throw d.sent(),r="Failed to parse model JSON of response from "+this.path+".",this.path.endsWith(".pb")?r+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":r+=" Please make sure the server is serving valid JSON for this request.",new Error(r);case 5:if(o=e.modelTopology,i=e.weightsManifest,a=e.generatedBy,s=e.convertedBy,u=e.format,c=e.userDefinedMetadata,o==null&&i==null)throw new Error("The JSON from HTTP path "+this.path+" contains neither model topology or manifest for weights.");return i==null?[3,7]:[4,this.loadWeights(i)];case 6:h=d.sent(),l=h[0],f=h[1],d.label=7;case 7:return[2,{modelTopology:o,weightSpecs:l,weightData:f,userDefinedMetadata:c,generatedBy:a,convertedBy:s,format:u}]}})})},n.prototype.loadWeights=function(t){return ae(this,void 0,void 0,function(){var e,r,o,i,a,s,u,c,l,f,h;return se(this,function(d){switch(d.label){case 0:for(e=Array.isArray(this.path)?this.path[1]:this.path,r=function(p){var v=p.lastIndexOf("/"),m=p.lastIndexOf("?"),g=p.substring(0,v),b=m>v?p.substring(m):"";return[g+"/",b]}(e),o=r[0],i=r[1],a=this.weightPathPrefix||o,s=[],u=0,c=t;u<c.length;u++)l=c[u],s.push.apply(s,l.weights);return f=[],t.forEach(function(p){p.paths.forEach(function(v){f.push(a+v+i)})}),[4,wd(f,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress})];case 1:return h=d.sent(),[2,[s,Nu(h)]]}})})},n.URL_SCHEME_REGEX=/^https?:\/\//,n}();function Ps(n){return n.match(_d.URL_SCHEME_REGEX)!=null}var Al=function(n,t){return typeof fetch>"u"?null:(Array.isArray(n)?n.every(function(e){return Ps(e)}):Ps(n))?Ms(n,{onProgress:t}):null};function Ms(n,t){return new _d(n,t)}Wt.registerSaveRouter(Al),Wt.registerLoadRouter(Al);var Za=function(){function n(t){this.modelArtifacts=t}return n.prototype.load=function(){return ae(this,void 0,void 0,function(){return se(this,function(t){return[2,this.modelArtifacts]})})},n}(),ow=function(){function n(t){this.saveHandler=t}return n.prototype.save=function(t){return ae(this,void 0,void 0,function(){return se(this,function(e){return[2,this.saveHandler(t)]})})},n}(),Cd=Object.freeze({browserFiles:function(n){return new rw(n)},browserHTTPRequest:function(n,t){return Ms(n,t)},concatenateArrayBuffers:Nu,decodeWeights:gd,encodeWeights:function(n,t){return ae(this,void 0,void 0,function(){var e,r,o,i,a,s=this;return se(this,function(u){switch(u.label){case 0:for(e=[],r=[],o=Array.isArray(n)?n.map(function(c){return c.name}):Object.keys(n),i=function(c){var l=o[c],f=Array.isArray(n)?n[c].tensor:n[l];if(f.dtype!=="float32"&&f.dtype!=="int32"&&f.dtype!=="bool"&&f.dtype!=="string")throw new Error("Unsupported dtype in weight '"+l+"': "+f.dtype);var h={name:l,shape:f.shape,dtype:f.dtype};if(f.dtype==="string"){var d=new Promise(function(p){return ae(s,void 0,void 0,function(){var v,m,g,b,x,y,w;return se(this,function(_){switch(_.label){case 0:return[4,f.bytes()];case 1:for(v=_.sent(),m=v.reduce(function(k,S){return k+S.length},0)+Hi*v.length,g=new Uint8Array(m),b=0,x=0;x<v.length;x++)y=v[x],w=new Uint8Array(new Uint32Array([y.length]).buffer),g.set(w,b),b+=Hi,g.set(y,b),b+=y.length;return p(g),[2]}})})});r.push(d)}else r.push(f.data());t!=null&&(h.group=t),e.push(h)},a=0;a<o.length;++a)i(a);return[4,Promise.all(r)];case 1:return[2,{data:q1(u.sent()),specs:e}]}})})},fromMemory:function(n,t,e,r){return arguments.length===1?n.modelTopology!=null||n.weightSpecs!=null?new Za(n):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Za({modelTopology:n})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Za({modelTopology:n,weightSpecs:t,weightData:e,trainingConfig:r}))},getLoadHandlers:function(n,t){return Wt.getLoadHandlers(n,t)},getModelArtifactsInfoForJSON:Xo,getSaveHandlers:function(n){return Wt.getSaveHandlers(n)},http:Ms,isHTTPScheme:Ps,loadWeights:function(n,t,e,r){return t===void 0&&(t=""),ae(this,void 0,void 0,function(){return se(this,function(o){return[2,kl(function(i){return wd(i,{requestInit:r})})(n,t,e)]})})},registerLoadRouter:function(n){return Wt.registerLoadRouter(n)},registerSaveRouter:function(n){return Wt.registerSaveRouter(n)},weightsLoaderFactory:kl,withSaveHandler:function(n){return new ow(n)},copyModel:function(n,t){return ae(this,void 0,void 0,function(){return se(this,function(e){return[2,Cl(n,t,!1)]})})},listModels:function(){return ae(this,void 0,void 0,function(){var n,t,e,r,o,i,a;return se(this,function(s){switch(s.label){case 0:n=Jn.getSchemes(),t={},e=0,r=n,s.label=1;case 1:return e<r.length?(o=r[e],[4,Jn.getManager(o).listModels()]):[3,4];case 2:for(a in i=s.sent())t[o+$r+a]=i[a];s.label=3;case 3:return e++,[3,1];case 4:return[2,t]}})})},moveModel:function(n,t){return ae(this,void 0,void 0,function(){return se(this,function(e){return[2,Cl(n,t,!0)]})})},removeModel:function(n){return ae(this,void 0,void 0,function(){var t;return se(this,function(e){return t=xi(n),[2,Jn.getManager(t.scheme).removeModel(t.path)]})})}}),Fr;T({confusionMatrix_:function(n,t,e){var r=C(n,"labels","confusionMatrix"),o=C(t,"predictions","confusionMatrix");R(e==null||e>0&&Number.isInteger(e),function(){return"If provided, numClasses must be a positive integer, but got "+e}),R(r.rank===1,function(){return"Expected the rank of labels to be 1, but got "+r.rank}),R(o.rank===1,function(){return"Expected the rank of predictions to be 1, but got "+o.rank}),R(r.shape[0]===o.shape[0],function(){return"Mismatch in the number of examples: "+r.shape[0]+" vs. "+o.shape[0]+". Labels and predictions should have the same number of elements."}),R(e>0&&Number.isInteger(e),function(){return"numClasses is required to be a positive integer, but got "+e});var i=Rs(r.asType("int32"),e),a=Rs(o.asType("int32"),e);return i.transpose().matMul(a).asType("int32")}});var iw=T({fromPixels_:function(n,t){if(t===void 0&&(t=3),t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(n==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");var e=!1,r=!1,o=!1,i=!1,a=!1;if(n.data instanceof Uint8Array)e=!0;else if(typeof ImageData<"u"&&n instanceof ImageData)r=!0;else if(typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement)o=!0;else if(typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement)i=!0;else{if(n.getContext==null)throw new Error("pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was "+n.constructor.name);a=!0}if(o&&o&&n.readyState<2)throw new Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.");if(Kf("FromPixels",P.backendName)!=null)return P.runKernel("FromPixels",{pixels:n},{numChannels:t});var s,u,c=o?[n.videoWidth,n.videoHeight]:[n.width,n.height],l=c[0],f=c[1];if(a?s=n.getContext("2d").getImageData(0,0,l,f).data:r||e?s=n.data:(i||o)&&(Fr==null&&(Fr=document.createElement("canvas").getContext("2d")),Fr.canvas.width=l,Fr.canvas.height=f,Fr.drawImage(n,0,0,l,f),s=Fr.getImageData(0,0,l,f).data),t===4)u=new Int32Array(s);else{var h=l*f;u=new Int32Array(h*t);for(var d=0;d<h;d++)for(var p=0;p<t;++p)u[d*t+p]=s[4*d+p]}return su(u,[f,l,t],"int32")}}),Fu=Object.freeze({toPixels:function(n,t){return ae(this,void 0,void 0,function(){var e,r,o,i,a,s,u,c,l,f,h,d,p,v,m,g,b,x,y,w,_,k,S;return se(this,function(I){switch(I.label){case 0:if(e=C(n,"img","toPixels"),n instanceof je||(e=e.toInt()),e.rank!==2&&e.rank!==3)throw new Error("toPixels only supports rank 2 or 3 tensors, got rank "+e.rank+".");if(r=e.shape.slice(0,2),o=r[0],i=r[1],(a=e.rank===2?1:e.shape[2])>4||a===2)throw new Error("toPixels only supports depth of size 1, 3 or 4 but got "+a);return[4,e.data()];case 1:return s=I.sent(),u=e.min(),c=e.max(),[4,Promise.all([u.data(),c.data()])];case 2:if(l=I.sent(),f=l[0],h=l[1],d=f[0],p=h[0],u.dispose(),c.dispose(),e.dtype==="float32"){if(d<0||p>1)throw new Error("Tensor values for a float32 Tensor must be in the range [0 - 1] but got range ["+d+" - "+p+"].")}else{if(e.dtype!=="int32")throw new Error("Unsupported type for toPixels: "+e.dtype+". Please use float32 or int32 tensors.");if(d<0||p>255)throw new Error("Tensor values for a int32 Tensor must be in the range [0 - 255] but got range ["+d+" - "+p+"].")}for(v=e.dtype==="float32"?255:1,m=new Uint8ClampedArray(i*o*4),g=0;g<o*i;++g)b=void 0,x=void 0,y=void 0,w=void 0,a===1?(b=s[g]*v,x=s[g]*v,y=s[g]*v,w=255):a===3?(b=s[3*g]*v,x=s[3*g+1]*v,y=s[3*g+2]*v,w=255):a===4&&(b=s[4*g]*v,x=s[4*g+1]*v,y=s[4*g+2]*v,w=s[4*g+3]*v),m[(_=4*g)+0]=Math.round(b),m[_+1]=Math.round(x),m[_+2]=Math.round(y),m[_+3]=Math.round(w);return t!=null&&(t.width=i,t.height=o,k=t.getContext("2d"),S=new ImageData(m,i,o),k.putImageData(S,0,0)),e!==n&&e.dispose(),[2,m]}})})},fromPixels:iw}),aw=function(){function n(){}return n.prototype.getClassName=function(){return this.constructor.className},n.fromConfig=function(t,e){return new t(e)},n}(),sw=function(){function n(){this.classNameMap={}}return n.getMap=function(){return n.instance==null&&(n.instance=new n),n.instance},n.register=function(t){n.getMap().classNameMap[t.className]=[t,t.fromConfig]},n}();function Rr(n){R(n.className!=null,function(){return"Class being registered does not have the static className property defined."}),R(typeof n.className=="string",function(){return"className is required to be a string, but got type "+typeof n.className}),R(n.className.length>0,function(){return"Class being registered has an empty-string as its className, which is disallowed."}),sw.register(n)}var Sr=function(n){function t(){return n!==null&&n.apply(this,arguments)||this}return tn(t,n),t.prototype.minimize=function(e,r,o){r===void 0&&(r=!1);var i=this.computeGradients(e,o),a=i.value,s=i.grads;if(o!=null){var u=o.map(function(c){return{name:c.name,tensor:s[c.name]}});this.applyGradients(u)}else this.applyGradients(s);return Tt(s),r?a:(a.dispose(),null)},Object.defineProperty(t.prototype,"iterations",{get:function(){return this.iterations_==null&&(this.iterations_=0),this.iterations_},enumerable:!0,configurable:!0}),t.prototype.incrementIterations=function(){this.iterations_=this.iterations+1},t.prototype.computeGradients=function(e,r){return gy(e,r)},t.prototype.dispose=function(){this.iterations_!=null&&Tt(this.iterations_)},t.prototype.saveIterations=function(){return ae(this,void 0,void 0,function(){return se(this,function(e){return this.iterations_==null&&(this.iterations_=0),[2,{name:"iter",tensor:re(this.iterations_,"int32")}]})})},t.prototype.getWeights=function(){return ae(this,void 0,void 0,function(){return se(this,function(e){throw new Error("getWeights() is not implemented for this optimizer yet.")})})},t.prototype.setWeights=function(e){return ae(this,void 0,void 0,function(){return se(this,function(r){throw new Error("setWeights() is not implemented for this optimizer class "+this.getClassName())})})},t.prototype.extractIterations=function(e){return ae(this,void 0,void 0,function(){var r;return se(this,function(o){switch(o.label){case 0:return r=this,[4,e[0].tensor.data()];case 1:return r.iterations_=o.sent()[0],[2,e.slice(1)]}})})},t}(aw);Object.defineProperty(Sr,Symbol.hasInstance,{value:function(n){return n.minimize!=null&&n.computeGradients!=null&&n.applyGradients!=null}});var uw=function(n){function t(e,r,o){o===void 0&&(o=null);var i=n.call(this)||this;return i.learningRate=e,i.rho=r,i.epsilon=o,i.accumulatedGrads=[],i.accumulatedUpdates=[],o==null&&(i.epsilon=P.backend.epsilon()),i}return tn(t,n),t.prototype.applyGradients=function(e){var r=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,i){var a=P.registeredVariables[o];r.accumulatedGrads[i]==null&&(r.accumulatedGrads[i]={originalName:o+"/accum_grad",variable:ie(function(){return Fe(a).variable(!1)})}),r.accumulatedUpdates[i]==null&&(r.accumulatedUpdates[i]={originalName:o+"/accum_var",variable:ie(function(){return Fe(a).variable(!1)})});var s=Array.isArray(e)?e[i].tensor:e[o];if(s!=null){var u=r.accumulatedGrads[i].variable,c=r.accumulatedUpdates[i].variable;ie(function(){var l=u.mul(r.rho).add(s.square().mul(1-r.rho)),f=c.add(r.epsilon).sqrt().div(u.add(r.epsilon).sqrt()).mul(s),h=c.mul(r.rho).add(f.square().mul(1-r.rho));u.assign(l),c.assign(h);var d=f.mul(-r.learningRate).add(a);a.assign(d)})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedUpdates!=null&&(Tt(this.accumulatedGrads.map(function(e){return e.variable})),Tt(this.accumulatedUpdates.map(function(e){return e.variable})))},t.prototype.getWeights=function(){return ae(this,void 0,void 0,function(){var e;return se(this,function(r){switch(r.label){case 0:return e=this.accumulatedGrads.concat(this.accumulatedUpdates),[4,this.saveIterations()];case 1:return[2,[r.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(e){return ae(this,void 0,void 0,function(){var r;return se(this,function(o){switch(o.label){case 0:return[4,this.extractIterations(e)];case 1:return e=o.sent(),r=e.length/2,this.accumulatedGrads=e.slice(0,r).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),this.accumulatedUpdates=e.slice(r,2*r).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}},t.fromConfig=function(e,r){return new e(r.learningRate,r.rho,r.epsilon)},t.className="Adadelta",t}(Sr);Rr(uw);var cw=function(n){function t(e,r){r===void 0&&(r=.1);var o=n.call(this)||this;return o.learningRate=e,o.initialAccumulatorValue=r,o.accumulatedGrads=[],o}return tn(t,n),t.prototype.applyGradients=function(e){var r=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,i){var a=P.registeredVariables[o];r.accumulatedGrads[i]==null&&(r.accumulatedGrads[i]={originalName:o+"/accumulator",variable:ie(function(){return yn(a.shape,r.initialAccumulatorValue).variable(!1)})});var s=Array.isArray(e)?e[i].tensor:e[o];if(s!=null){var u=r.accumulatedGrads[i].variable;ie(function(){var c=u.add(s.square());u.assign(c);var l=s.div(c.add(P.backend.epsilon()).sqrt()).mul(-r.learningRate).add(a);a.assign(l)})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedGrads!=null&&Tt(this.accumulatedGrads.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return ae(this,void 0,void 0,function(){return se(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulatedGrads.map(function(r){return{name:r.originalName,tensor:r.variable}}))]}})})},t.prototype.setWeights=function(e){return ae(this,void 0,void 0,function(){return se(this,function(r){switch(r.label){case 0:return[4,this.extractIterations(e)];case 1:return e=r.sent(),this.accumulatedGrads=e.map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}},t.fromConfig=function(e,r){return new e(r.learningRate,r.initialAccumulatorValue)},t.className="Adagrad",t}(Sr);Rr(cw);var lw=function(n){function t(e,r,o,i){i===void 0&&(i=null);var a=n.call(this)||this;return a.learningRate=e,a.beta1=r,a.beta2=o,a.epsilon=i,a.accumulatedFirstMoment=[],a.accumulatedSecondMoment=[],ie(function(){a.accBeta1=re(r).variable(),a.accBeta2=re(o).variable()}),i==null&&(a.epsilon=P.backend.epsilon()),a}return tn(t,n),t.prototype.applyGradients=function(e){var r=this,o=Array.isArray(e)?e.map(function(i){return i.name}):Object.keys(e);ie(function(){var i=rt(1,r.accBeta1),a=rt(1,r.accBeta2);o.forEach(function(s,u){var c=P.registeredVariables[s];r.accumulatedFirstMoment[u]==null&&(r.accumulatedFirstMoment[u]={originalName:s+"/m",variable:ie(function(){return Fe(c).variable(!1)})}),r.accumulatedSecondMoment[u]==null&&(r.accumulatedSecondMoment[u]={originalName:s+"/v",variable:ie(function(){return Fe(c).variable(!1)})});var l=Array.isArray(e)?e[u].tensor:e[s];if(l!=null){var f=r.accumulatedFirstMoment[u].variable,h=r.accumulatedSecondMoment[u].variable,d=f.mul(r.beta1).add(l.mul(1-r.beta1)),p=h.mul(r.beta2).add(l.square().mul(1-r.beta2)),v=d.div(i),m=p.div(a);f.assign(d),h.assign(p);var g=v.div(m.sqrt().add(r.epsilon)).mul(-r.learningRate).add(c);c.assign(g)}}),r.accBeta1.assign(r.accBeta1.mul(r.beta1)),r.accBeta2.assign(r.accBeta2.mul(r.beta2))}),this.incrementIterations()},t.prototype.dispose=function(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&Tt(this.accumulatedFirstMoment.map(function(e){return e.variable})),this.accumulatedSecondMoment!=null&&Tt(this.accumulatedSecondMoment.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return ae(this,void 0,void 0,function(){var e;return se(this,function(r){switch(r.label){case 0:return e=this.accumulatedFirstMoment.concat(this.accumulatedSecondMoment),[4,this.saveIterations()];case 1:return[2,[r.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(e){return ae(this,void 0,void 0,function(){var r,o=this;return se(this,function(i){switch(i.label){case 0:return[4,this.extractIterations(e)];case 1:return e=i.sent(),ie(function(){o.accBeta1.assign(Vi(o.beta1,o.iterations_+1)),o.accBeta2.assign(Vi(o.beta2,o.iterations_+1))}),r=e.length/2,this.accumulatedFirstMoment=e.slice(0,r).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.accumulatedSecondMoment=e.slice(r,2*r).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}},t.fromConfig=function(e,r){return new e(r.learningRate,r.beta1,r.beta2,r.epsilon)},t.className="Adam",t}(Sr);Rr(lw);var fw=function(n){function t(e,r,o,i,a){i===void 0&&(i=null),a===void 0&&(a=0);var s=n.call(this)||this;return s.learningRate=e,s.beta1=r,s.beta2=o,s.epsilon=i,s.decay=a,s.accumulatedFirstMoment=[],s.accumulatedWeightedInfNorm=[],ie(function(){s.iteration=re(0).variable(),s.accBeta1=re(r).variable()}),i==null&&(s.epsilon=P.backend.epsilon()),s}return tn(t,n),t.prototype.applyGradients=function(e){var r=this,o=Array.isArray(e)?e.map(function(i){return i.name}):Object.keys(e);ie(function(){var i=rt(1,r.accBeta1),a=Yt(-r.learningRate,r.iteration.mul(r.decay).add(1));o.forEach(function(s,u){var c=P.registeredVariables[s];r.accumulatedFirstMoment[u]==null&&(r.accumulatedFirstMoment[u]={originalName:s+"/m",variable:Fe(c).variable(!1)}),r.accumulatedWeightedInfNorm[u]==null&&(r.accumulatedWeightedInfNorm[u]={originalName:s+"/v",variable:Fe(c).variable(!1)});var l=Array.isArray(e)?e[u].tensor:e[s];if(l!=null){var f=r.accumulatedFirstMoment[u].variable,h=r.accumulatedWeightedInfNorm[u].variable,d=f.mul(r.beta1).add(l.mul(1-r.beta1)),p=h.mul(r.beta2),v=l.abs(),m=p.maximum(v);f.assign(d),h.assign(m);var g=a.div(i).mul(d.div(m.add(r.epsilon))).add(c);c.assign(g)}}),r.iteration.assign(r.iteration.add(1)),r.accBeta1.assign(r.accBeta1.mul(r.beta1))}),this.incrementIterations()},t.prototype.dispose=function(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&Tt(this.accumulatedFirstMoment.map(function(e){return e.variable})),this.accumulatedWeightedInfNorm!=null&&Tt(this.accumulatedWeightedInfNorm.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return ae(this,void 0,void 0,function(){return se(this,function(e){throw new Error("getWeights() is not implemented for Adamax yet.")})})},t.prototype.setWeights=function(e){return ae(this,void 0,void 0,function(){return se(this,function(r){throw new Error("setWeights() is not implemented for Adamax yet.")})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}},t.fromConfig=function(e,r){return new e(r.learningRate,r.beta1,r.beta2,r.epsilon,r.decay)},t.className="Adamax",t}(Sr);Rr(fw);var Ed=function(n){function t(e){var r=n.call(this)||this;return r.learningRate=e,r.setLearningRate(e),r}return tn(t,n),t.prototype.applyGradients=function(e){var r=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,i){var a=Array.isArray(e)?e[i].tensor:e[o];if(a!=null){var s=P.registeredVariables[o];ie(function(){var u=r.c.mul(a).add(s);s.assign(u)})}}),this.incrementIterations()},t.prototype.setLearningRate=function(e){this.learningRate=e,this.c!=null&&this.c.dispose(),this.c=Tg(re(-e))},t.prototype.dispose=function(){this.c.dispose()},t.prototype.getWeights=function(){return ae(this,void 0,void 0,function(){return se(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()]]}})})},t.prototype.setWeights=function(e){return ae(this,void 0,void 0,function(){return se(this,function(r){switch(r.label){case 0:return[4,this.extractIterations(e)];case 1:if((e=r.sent()).length!==0)throw new Error("SGD optimizer does not have settable weights.");return[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate}},t.fromConfig=function(e,r){return new e(r.learningRate)},t.className="SGD",t}(Sr);Rr(Ed);var hw=function(n){function t(e,r,o){o===void 0&&(o=!1);var i=n.call(this,e)||this;return i.learningRate=e,i.momentum=r,i.useNesterov=o,i.accumulations=[],i.m=re(i.momentum),i}return tn(t,n),t.prototype.applyGradients=function(e){var r=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,i){var a=P.registeredVariables[o];r.accumulations[i]==null&&(r.accumulations[i]={originalName:o+"/momentum",variable:ie(function(){return Fe(a).variable(!1)})});var s=r.accumulations[i].variable,u=Array.isArray(e)?e[i].tensor:e[o];u!=null&&ie(function(){var c,l=r.m.mul(s).add(u);c=r.useNesterov?r.c.mul(u.add(l.mul(r.m))).add(a):r.c.mul(l).add(a),s.assign(l),a.assign(c)})}),this.incrementIterations()},t.prototype.dispose=function(){this.m.dispose(),this.accumulations!=null&&Tt(this.accumulations.map(function(e){return e.variable}))},t.prototype.setMomentum=function(e){this.momentum=e},t.prototype.getWeights=function(){return ae(this,void 0,void 0,function(){return se(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulations.map(function(r){return{name:r.originalName,tensor:r.variable}}))]}})})},t.prototype.setWeights=function(e){return ae(this,void 0,void 0,function(){return se(this,function(r){switch(r.label){case 0:return[4,this.extractIterations(e)];case 1:return e=r.sent(),this.accumulations=e.map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}},t.fromConfig=function(e,r){return new e(r.learningRate,r.momentum,r.useNesterov)},t.className="Momentum",t}(Ed);Rr(hw);var dw=function(n){function t(e,r,o,i,a){r===void 0&&(r=.9),o===void 0&&(o=0),i===void 0&&(i=null),a===void 0&&(a=!1);var s=n.call(this)||this;if(s.learningRate=e,s.decay=r,s.momentum=o,s.epsilon=i,s.accumulatedMeanSquares=[],s.accumulatedMoments=[],s.accumulatedMeanGrads=[],s.centered=a,i==null&&(s.epsilon=P.backend.epsilon()),e==null)throw new Error("learningRate for RMSPropOptimizer must be defined.");return s}return tn(t,n),t.prototype.applyGradients=function(e){var r=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,i){var a=P.registeredVariables[o];r.accumulatedMeanSquares[i]==null&&(r.accumulatedMeanSquares[i]={originalName:o+"/rms",variable:ie(function(){return Fe(a).variable(!1)})}),r.accumulatedMoments[i]==null&&(r.accumulatedMoments[i]={originalName:o+"/momentum",variable:ie(function(){return Fe(a).variable(!1)})}),r.accumulatedMeanGrads[i]==null&&r.centered&&(r.accumulatedMeanGrads[i]={originalName:o+"/mg",variable:ie(function(){return Fe(a).variable(!1)})});var s=Array.isArray(e)?e[i].tensor:e[o];if(s!=null){var u=r.accumulatedMeanSquares[i].variable,c=r.accumulatedMoments[i].variable;ie(function(){var l=u.mul(r.decay).add(s.square().mul(1-r.decay));if(r.centered){var f=r.accumulatedMeanGrads[i].variable,h=f.mul(r.decay).add(s.mul(1-r.decay)),d=c.mul(r.momentum).add(s.mul(r.learningRate).div(l.sub(h.square().add(r.epsilon)).sqrt()));u.assign(l),f.assign(h),c.assign(d);var p=a.sub(d);a.assign(p)}else{var v=u.mul(r.decay).add(s.square().mul(1-r.decay));d=c.mul(r.momentum).add(s.mul(r.learningRate).div(v.add(r.epsilon).sqrt())),u.assign(v),c.assign(d),p=a.sub(d),a.assign(p)}})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedMeanSquares!=null&&Tt(this.accumulatedMeanSquares.map(function(e){return e.variable})),this.accumulatedMeanGrads!=null&&this.centered&&Tt(this.accumulatedMeanGrads.map(function(e){return e.variable})),this.accumulatedMoments!=null&&Tt(this.accumulatedMoments.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return ae(this,void 0,void 0,function(){var e;return se(this,function(r){switch(r.label){case 0:return e=this.accumulatedMeanSquares.concat(this.accumulatedMoments),this.centered&&e.push.apply(e,this.accumulatedMeanGrads),[4,this.saveIterations()];case 1:return[2,[r.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(e){return ae(this,void 0,void 0,function(){var r;return se(this,function(o){switch(o.label){case 0:return[4,this.extractIterations(e)];case 1:return e=o.sent(),r=this.centered?e.length/3:e.length/2,this.accumulatedMeanSquares=e.slice(0,r).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),this.accumulatedMoments=e.slice(r,2*r).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),this.centered&&(this.accumulatedMeanGrads=e.slice(2*r,3*r).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}})),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}},t.fromConfig=function(e,r){return new e(r.learningRate,r.decay,r.momentum,r.epsilon,r.centered)},t.className="RMSProp",t}(Sr);Rr(dw);je.prototype.squaredDifference=function(n){return Wh(this,n)},W=W1;/*! *****************************************************************************
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
***************************************************************************** */var Os=function(n,t){return Os=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var o in r)r.hasOwnProperty(o)&&(e[o]=r[o])},Os(n,t)};function ge(n,t){Os(n,t);function e(){this.constructor=n}n.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var mt=function(){return mt=Object.assign||function(t){for(var e,r=1,o=arguments.length;r<o;r++){e=arguments[r];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},mt.apply(this,arguments)};function he(n,t,e,r){function o(i){return i instanceof e?i:new e(function(a){a(i)})}return new(e||(e=Promise))(function(i,a){function s(l){try{c(r.next(l))}catch(f){a(f)}}function u(l){try{c(r.throw(l))}catch(f){a(f)}}function c(l){l.done?i(l.value):o(l.value).then(s,u)}c((r=r.apply(n,[])).next())})}function de(n,t){var e={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(c){return function(l){return u([c,l])}}function u(c){if(r)throw new TypeError("Generator is already executing.");for(;e;)try{if(r=1,o&&(i=c[0]&2?o.return:c[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,c[1])).done)return i;switch(o=0,i&&(c=[c[0]&2,i.value]),c[0]){case 0:case 1:i=c;break;case 4:return e.label++,{value:c[1],done:!1};case 5:e.label++,o=c[1],c=[0];continue;case 7:c=e.ops.pop(),e.trys.pop();continue;default:if(i=e.trys,!(i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){e=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){e.label=c[1];break}if(c[0]===6&&e.label<i[1]){e.label=i[1],i=c;break}if(i&&e.label<i[2]){e.label=i[2],e.ops.push(c);break}i[2]&&e.ops.pop(),e.trys.pop();continue}c=t.call(n,e)}catch(l){c=[6,l],o=0}finally{r=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function Io(){for(var n=0,t=0,e=arguments.length;t<e;t++)n+=arguments[t].length;for(var r=Array(n),o=0,t=0;t<e;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)r[o]=i[a];return r}var Qr=function(){function n(t,e){if(!xr(t)||!xr(e))throw new Error("Dimensions.constructor - expected width and height to be valid numbers, instead have "+JSON.stringify({width:t,height:e}));this._width=t,this._height=e}return Object.defineProperty(n.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),n.prototype.reverse=function(){return new n(1/this.width,1/this.height)},n}();function ha(n,t){return n instanceof je&&n.shape.length===t}function pw(n){return ha(n,2)}function da(n){return ha(n,3)}function Qn(n){return ha(n,4)}function vw(n){return n%1!==0}function Dl(n){return n%2===0}function mw(n,t){t===void 0&&(t=2);var e=Math.pow(10,t);return Math.floor(n*e)/e}function Tl(n){return n&&n.width&&n.height}function gw(n,t){var e=n.width,r=n.height,o=t/Math.max(r,e);return new Qr(Math.round(e*o),Math.round(r*o))}function Pu(n){return n.reduce(function(t,e){return t.add(e)},new Me(0,0)).div(new Me(n.length,n.length))}function Bo(n,t,e){return Array(n).fill(0).map(function(r,o){return t+o*e})}function xr(n){return!!n&&n!==1/0&&n!==-1/0&&!isNaN(n)||n===0}function Nl(n){return xr(n)&&0<=n&&n<=1}var Me=function(){function n(t,e){this._x=t,this._y=e}return Object.defineProperty(n.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),n.prototype.add=function(t){return new n(this.x+t.x,this.y+t.y)},n.prototype.sub=function(t){return new n(this.x-t.x,this.y-t.y)},n.prototype.mul=function(t){return new n(this.x*t.x,this.y*t.y)},n.prototype.div=function(t){return new n(this.x/t.x,this.y/t.y)},n.prototype.abs=function(){return new n(Math.abs(this.x),Math.abs(this.y))},n.prototype.magnitude=function(){return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))},n.prototype.floor=function(){return new n(Math.floor(this.x),Math.floor(this.y))},n}(),nr=function(){function n(t,e){e===void 0&&(e=!0);var r=t||{},o=[r.left,r.top,r.right,r.bottom].every(xr),i=[r.x,r.y,r.width,r.height].every(xr);if(!i&&!o)throw new Error("Box.constructor - expected box to be IBoundingBox | IRect, instead have "+JSON.stringify(r));var a=i?[r.x,r.y,r.width,r.height]:[r.left,r.top,r.right-r.left,r.bottom-r.top],s=a[0],u=a[1],c=a[2],l=a[3];n.assertIsValidBox({x:s,y:u,width:c,height:l},"Box.constructor",e),this._x=s,this._y=u,this._width=c,this._height=l}return n.isRect=function(t){return!!t&&[t.x,t.y,t.width,t.height].every(xr)},n.assertIsValidBox=function(t,e,r){if(r===void 0&&(r=!1),!n.isRect(t))throw new Error(e+" - invalid box: "+JSON.stringify(t)+", expected object with properties x, y, width, height");if(!r&&(t.width<0||t.height<0))throw new Error(e+" - width ("+t.width+") and height ("+t.height+") must be positive numbers")},Object.defineProperty(n.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"left",{get:function(){return this.x},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"top",{get:function(){return this.y},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"right",{get:function(){return this.x+this.width},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"bottom",{get:function(){return this.y+this.height},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"area",{get:function(){return this.width*this.height},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"topLeft",{get:function(){return new Me(this.left,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"topRight",{get:function(){return new Me(this.right,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"bottomLeft",{get:function(){return new Me(this.left,this.bottom)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"bottomRight",{get:function(){return new Me(this.right,this.bottom)},enumerable:!0,configurable:!0}),n.prototype.round=function(){var t=[this.x,this.y,this.width,this.height].map(function(a){return Math.round(a)}),e=t[0],r=t[1],o=t[2],i=t[3];return new n({x:e,y:r,width:o,height:i})},n.prototype.floor=function(){var t=[this.x,this.y,this.width,this.height].map(function(a){return Math.floor(a)}),e=t[0],r=t[1],o=t[2],i=t[3];return new n({x:e,y:r,width:o,height:i})},n.prototype.toSquare=function(){var t=this,e=t.x,r=t.y,o=t.width,i=t.height,a=Math.abs(o-i);return o<i&&(e-=a/2,o+=a),i<o&&(r-=a/2,i+=a),new n({x:e,y:r,width:o,height:i})},n.prototype.rescale=function(t){var e=Tl(t)?t.width:t,r=Tl(t)?t.height:t;return new n({x:this.x*e,y:this.y*r,width:this.width*e,height:this.height*r})},n.prototype.pad=function(t,e){var r=[this.x-t/2,this.y-e/2,this.width+t,this.height+e],o=r[0],i=r[1],a=r[2],s=r[3];return new n({x:o,y:i,width:a,height:s})},n.prototype.clipAtImageBorders=function(t,e){var r=this,o=r.x,i=r.y,a=r.right,s=r.bottom,u=Math.max(o,0),c=Math.max(i,0),l=a-u,f=s-c,h=Math.min(l,t-u),d=Math.min(f,e-c);return new n({x:u,y:c,width:h,height:d}).floor()},n.prototype.shift=function(t,e){var r=this,o=r.width,i=r.height,a=this.x+t,s=this.y+e;return new n({x:a,y:s,width:o,height:i})},n.prototype.padAtBorders=function(t,e){var r=this.width+1,o=this.height+1,i=1,a=1,s=r,u=o,c=this.left,l=this.top,f=this.right,h=this.bottom;return f>e&&(s=-f+e+r,f=e),h>t&&(u=-h+t+o,h=t),c<1&&(u=2-c,c=1),l<1&&(u=2-l,l=1),{dy:a,edy:u,dx:i,edx:s,y:l,ey:h,x:c,ex:f,w:r,h:o}},n.prototype.calibrate=function(t){return new n({left:this.left+t.left*this.width,top:this.top+t.top*this.height,right:this.right+t.right*this.width,bottom:this.bottom+t.bottom*this.height}).toSquare().round()},n}(),pa=function(n){ge(t,n);function t(e,r,o,i,a){return a===void 0&&(a=!1),n.call(this,{left:e,top:r,right:o,bottom:i},a)||this}return t}(nr),Id=function(){function n(t,e,r,o,i){this._imageDims=new Qr(i.width,i.height),this._score=t,this._classScore=e,this._className=r,this._box=new nr(o).rescale(this._imageDims)}return Object.defineProperty(n.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"className",{get:function(){return this._className},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"box",{get:function(){return this._box},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"imageDims",{get:function(){return this._imageDims},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"imageWidth",{get:function(){return this.imageDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"imageHeight",{get:function(){return this.imageDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"relativeBox",{get:function(){return new nr(this._box).rescale(this.imageDims.reverse())},enumerable:!0,configurable:!0}),n.prototype.forSize=function(t,e){return new n(this.score,this.classScore,this.className,this.relativeBox,{width:t,height:e})},n}(),En=function(n){ge(t,n);function t(e,r,o){return n.call(this,e,e,"",r,o)||this}return t.prototype.forSize=function(e,r){var o=n.prototype.forSize.call(this,e,r),i=o.score,a=o.relativeBox,s=o.imageDims;return new t(i,a,s)},t}(Id);function yw(n,t,e){e===void 0&&(e=!0);var r=Math.max(0,Math.min(n.right,t.right)-Math.max(n.left,t.left)),o=Math.max(0,Math.min(n.bottom,t.bottom)-Math.max(n.top,t.top)),i=r*o;return e?i/(n.area+t.area-i):i/Math.min(n.area,t.area)}function xw(n){var t=n.map(function(s){return s.x}),e=n.map(function(s){return s.y}),r=t.reduce(function(s,u){return u<s?u:s},1/0),o=e.reduce(function(s,u){return u<s?u:s},1/0),i=t.reduce(function(s,u){return s<u?u:s},0),a=e.reduce(function(s,u){return s<u?u:s},0);return new pa(r,o,i,a)}function Lo(n,t,e,r){r===void 0&&(r=!0);for(var o=t.map(function(s,u){return{score:s,boxIndex:u}}).sort(function(s,u){return s.score-u.score}).map(function(s){return s.boxIndex}),i=[],a=function(){var s=o.pop();i.push(s);for(var u=o,c=[],l=0;l<u.length;l++){var f=u[l],h=n[s],d=n[f];c.push(yw(h,d,r))}o=o.filter(function(p,v){return c[v]<=e})};o.length>0;)a();return i}function $o(n,t){return ie(function(){var e=t[0],r=t[1],o=t[2],i=yn(Io(n.shape.slice(0,3),[1]),e),a=yn(Io(n.shape.slice(0,3),[1]),r),s=yn(Io(n.shape.slice(0,3),[1]),o),u=Ze([i,a,s],3);return rt(n,u)})}function bw(n,t){return t===void 0&&(t=!1),ie(function(){var e=n.shape.slice(1),r=e[0],o=e[1];if(r===o)return n;var i=Math.abs(r-o),a=Math.round(i*(t?.5:1)),s=r>o?2:1,u=function(d){var p=n.shape.slice();return p[s]=d,yn(p,0)},c=u(a),l=i-c.shape[s],f=t&&l?u(l):null,h=[f,n,c].filter(function(d){return!!d}).map(function(d){return d.toFloat()});return Ze(h,s)})}function es(n){return 1/(1+Math.exp(-n))}var Mu=function(n){ge(t,n);function t(e,r,o,i,a){return a===void 0&&(a=!1),n.call(this,{x:e,y:r,width:o,height:i},a)||this}return t}(nr),ww=.5,_w=.43,Cw=.45,Gi=function(){function n(t,e,r){r===void 0&&(r=new Me(0,0));var o=e.width,i=e.height;this._imgDims=new Qr(o,i),this._shift=r,this._positions=t.map(function(a){return a.mul(new Me(o,i)).add(r)})}return Object.defineProperty(n.prototype,"shift",{get:function(){return new Me(this._shift.x,this._shift.y)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"imageWidth",{get:function(){return this._imgDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"imageHeight",{get:function(){return this._imgDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"positions",{get:function(){return this._positions},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"relativePositions",{get:function(){var t=this;return this._positions.map(function(e){return e.sub(t._shift).div(new Me(t.imageWidth,t.imageHeight))})},enumerable:!0,configurable:!0}),n.prototype.forSize=function(t,e){return new this.constructor(this.relativePositions,{width:t,height:e})},n.prototype.shiftBy=function(t,e){return new this.constructor(this.relativePositions,this._imgDims,new Me(t,e))},n.prototype.shiftByPoint=function(t){return this.shiftBy(t.x,t.y)},n.prototype.align=function(t,e){if(e===void 0&&(e={}),t){var r=t instanceof En?t.box.floor():new nr(t);return this.shiftBy(r.x,r.y).align(null,e)}var o=Object.assign({},{useDlibAlignment:!1,minBoxPadding:.2},e),i=o.useDlibAlignment,a=o.minBoxPadding;return i?this.alignDlib():this.alignMinBbox(a)},n.prototype.alignDlib=function(){var t=this.getRefPointsForAlignment(),e=t[0],r=t[1],o=t[2],i=function(f){return o.sub(f).magnitude()},a=(i(e)+i(r))/2,s=Math.floor(a/Cw),u=Pu(t),c=Math.floor(Math.max(0,u.x-ww*s)),l=Math.floor(Math.max(0,u.y-_w*s));return new Mu(c,l,Math.min(s,this.imageWidth+c),Math.min(s,this.imageHeight+l))},n.prototype.alignMinBbox=function(t){var e=xw(this.positions);return e.pad(e.width*t,e.height*t)},n.prototype.getRefPointsForAlignment=function(){throw new Error("getRefPointsForAlignment not implemented by base class")},n}(),Ew=function(n){ge(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.getRefPointsForAlignment=function(){var e=this.positions;return[e[0],e[1],Pu([e[3],e[4]])]},t}(Gi),Iw=function(n){ge(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.getJawOutline=function(){return this.positions.slice(0,17)},t.prototype.getLeftEyeBrow=function(){return this.positions.slice(17,22)},t.prototype.getRightEyeBrow=function(){return this.positions.slice(22,27)},t.prototype.getNose=function(){return this.positions.slice(27,36)},t.prototype.getLeftEye=function(){return this.positions.slice(36,42)},t.prototype.getRightEye=function(){return this.positions.slice(42,48)},t.prototype.getMouth=function(){return this.positions.slice(48,68)},t.prototype.getRefPointsForAlignment=function(){return[this.getLeftEye(),this.getRightEye(),this.getMouth()].map(Pu)},t}(Gi),Fl=function(){function n(t,e){this._label=t,this._distance=e}return Object.defineProperty(n.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"distance",{get:function(){return this._distance},enumerable:!0,configurable:!0}),n.prototype.toString=function(t){return t===void 0&&(t=!0),""+this.label+(t?" ("+mw(this.distance)+")":"")},n}(),Pl=function(n){ge(t,n);function t(e,r){var o=n.call(this,e)||this;return o._label=r,o}return t.assertIsValidLabeledBox=function(e,r){if(nr.assertIsValidBox(e,r),!xr(e.label))throw new Error(r+" - expected property label ("+e.label+") to be a number")},Object.defineProperty(t.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),t}(nr),ci=function(){function n(t,e){if(typeof t!="string")throw new Error("LabeledFaceDescriptors - constructor expected label to be a string");if(!Array.isArray(e)||e.some(function(r){return!(r instanceof Float32Array)}))throw new Error("LabeledFaceDescriptors - constructor expected descriptors to be an array of Float32Array");this._label=t,this._descriptors=e}return Object.defineProperty(n.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"descriptors",{get:function(){return this._descriptors},enumerable:!0,configurable:!0}),n.prototype.toJSON=function(){return{label:this.label,descriptors:this.descriptors.map(function(t){return Array.from(t)})}},n.fromJSON=function(t){var e=t.descriptors.map(function(r){return new Float32Array(r)});return new n(t.label,e)},n}();(function(n){ge(t,n);function t(e,r,o,i){var a=n.call(this,e,r)||this;return a._score=o,a._classScore=i,a}return t.assertIsValidPredictedBox=function(e,r){if(Pl.assertIsValidLabeledBox(e,r),!Nl(e.score)||!Nl(e.classScore))throw new Error(r+" - expected properties score ("+e.score+") and ("+e.classScore+") to be a number between [0, 1]")},Object.defineProperty(t.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),t})(Pl);function Rw(n){return n.detection instanceof En}function Ou(n,t){var e={detection:t};return Object.assign({},n,e)}function Rd(){var n=window.fetch||function(){throw new Error("fetch - missing fetch implementation for browser environment")},t=function(){throw new Error("readFile - filesystem not available for browser environment")};return{Canvas:HTMLCanvasElement,CanvasRenderingContext2D,Image:HTMLImageElement,ImageData,Video:HTMLVideoElement,createCanvasElement:function(){return document.createElement("canvas")},createImageElement:function(){return document.createElement("img")},fetch:n,readFile:t}}function Sd(n){var t="";if(!n)try{n=require("fs")}catch(r){t=r.toString()}var e=n?function(r){return new Promise(function(o,i){n.readFile(r,function(a,s){return a?i(a):o(s)})})}:function(){throw new Error("readFile - failed to require fs in nodejs environment with error: "+t)};return{readFile:e}}function kd(){var n=global.Canvas||global.HTMLCanvasElement,t=global.Image||global.HTMLImageElement,e=function(){if(n)return new n;throw new Error("createCanvasElement - missing Canvas implementation for nodejs environment")},r=function(){if(t)return new t;throw new Error("createImageElement - missing Image implementation for nodejs environment")},o=global.fetch||function(){throw new Error("fetch - missing fetch implementation for nodejs environment")},i=Sd();return mt({Canvas:n||function(){function a(){}return a}(),CanvasRenderingContext2D:global.CanvasRenderingContext2D||function(){function a(){}return a}(),Image:t||function(){function a(){}return a}(),ImageData:global.ImageData||function(){function a(){}return a}(),Video:global.HTMLVideoElement||function(){function a(){}return a}(),createCanvasElement:e,createImageElement:r,fetch:o},i)}function Ad(){return typeof window=="object"&&typeof document<"u"&&typeof HTMLImageElement<"u"&&typeof HTMLCanvasElement<"u"&&typeof HTMLVideoElement<"u"&&typeof ImageData<"u"&&typeof CanvasRenderingContext2D<"u"}function Dd(){return typeof global=="object"&&typeof require=="function"&&typeof cp<"u"&&typeof process<"u"&&!!process.version}var Qe;function Sw(){if(!Qe)throw new Error("getEnv - environment is not defined, check isNodejs() and isBrowser()");return Qe}function Bs(n){Qe=n}function Bu(){Ad()&&Bs(Rd()),Dd()&&Bs(kd())}function kw(n){if(Qe||Bu(),!Qe)throw new Error("monkeyPatch - environment is not defined, check isNodejs() and isBrowser()");var t=n.Canvas,e=t===void 0?Qe.Canvas:t,r=n.Image,o=r===void 0?Qe.Image:r;Qe.Canvas=e,Qe.Image=o,Qe.createCanvasElement=n.createCanvasElement||function(){return new e},Qe.createImageElement=n.createImageElement||function(){return new o},Qe.ImageData=n.ImageData||Qe.ImageData,Qe.Video=n.Video||Qe.Video,Qe.fetch=n.fetch||Qe.fetch,Qe.readFile=n.readFile||Qe.readFile}var wt={getEnv:Sw,setEnv:Bs,initialize:Bu,createBrowserEnv:Rd,createFileSystem:Sd,createNodejsEnv:kd,monkeyPatch:kw,isBrowser:Ad,isNodejs:Dd};Bu();function Td(n){return!wt.isNodejs()&&typeof n=="string"?document.getElementById(n):n}function _r(n){var t=wt.getEnv(),e=t.Canvas,r=t.CanvasRenderingContext2D;if(n instanceof r)return n;var o=Td(n);if(!(o instanceof e))throw new Error("resolveContext2d - expected canvas to be of instance of Canvas");var i=o.getContext("2d");if(!i)throw new Error("resolveContext2d - canvas 2d context is null");return i}var Ml;(function(n){n.TOP_LEFT="TOP_LEFT",n.TOP_RIGHT="TOP_RIGHT",n.BOTTOM_LEFT="BOTTOM_LEFT",n.BOTTOM_RIGHT="BOTTOM_RIGHT"})(Ml||(Ml={}));function Nd(n){var t=wt.getEnv(),e=t.Image,r=t.Video;return n instanceof e&&n.complete||n instanceof r&&n.readyState>=3}function Aw(n){return new Promise(function(t,e){if(n instanceof wt.getEnv().Canvas||Nd(n))return t();function r(i){i.currentTarget&&(i.currentTarget.removeEventListener("load",r),i.currentTarget.removeEventListener("error",o),t(i))}function o(i){i.currentTarget&&(i.currentTarget.removeEventListener("load",r),i.currentTarget.removeEventListener("error",o),e(i))}n.addEventListener("load",r),n.addEventListener("error",o)})}function Fd(n){var t=wt.getEnv(),e=t.Image,r=t.Video;return n instanceof e?new Qr(n.naturalWidth,n.naturalHeight):n instanceof r?new Qr(n.videoWidth,n.videoHeight):new Qr(n.width,n.height)}function va(n){var t=n.width,e=n.height,r=wt.getEnv().createCanvasElement,o=r();return o.width=t,o.height=e,o}function Lu(n,t){var e=wt.getEnv().ImageData;if(!(n instanceof e)&&!Nd(n))throw new Error("createCanvasFromMedia - media has not finished loading yet");var r=Fd(n),o=r.width,i=r.height,a=va({width:o,height:i});return n instanceof e?_r(a).putImageData(n,0,0):_r(a).drawImage(n,0,0,o,i),a}function Dw(n,t){return he(this,void 0,void 0,function(){var e,r,o,i,a,s;return de(this,function(u){switch(u.label){case 0:return e=wt.getEnv().createCanvasElement(),r=n.shape.slice(Qn(n)?1:0),o=r[0],i=r[1],a=r[2],s=ie(function(){return n.as3D(o,i,a).toInt()}),[4,Fu.toPixels(s,e)];case 1:return u.sent(),s.dispose(),[2,e]}})})}function Ol(n){var t=wt.getEnv(),e=t.Image,r=t.Canvas,o=t.Video;return n instanceof e||n instanceof r||n instanceof o}function Tw(n,t,e){e===void 0&&(e=!1);var r=wt.getEnv(),o=r.Image,i=r.Canvas;if(!(n instanceof o||n instanceof i))throw new Error("imageToSquare - expected arg0 to be HTMLImageElement | HTMLCanvasElement");var a=Fd(n),s=t/Math.max(a.height,a.width),u=s*a.width,c=s*a.height,l=va({width:t,height:t}),f=n instanceof i?n:Lu(n),h=Math.abs(u-c)/2,d=e&&u<c?h:0,p=e&&c<u?h:0;return _r(l).drawImage(f,d,p,u,c),l}var ji=function(){function n(t,e){var r=this;if(e===void 0&&(e=!1),this._imageTensors=[],this._canvases=[],this._treatAsBatchInput=!1,this._inputDimensions=[],!Array.isArray(t))throw new Error("NetInput.constructor - expected inputs to be an Array of TResolvedNetInput or to be instanceof tf.Tensor4D, instead have "+t);this._treatAsBatchInput=e,this._batchSize=t.length,t.forEach(function(o,i){if(da(o)){r._imageTensors[i]=o,r._inputDimensions[i]=o.shape;return}if(Qn(o)){var a=o.shape[0];if(a!==1)throw new Error("NetInput - tf.Tensor4D with batchSize "+a+" passed, but not supported in input array");r._imageTensors[i]=o,r._inputDimensions[i]=o.shape.slice(1);return}var s=o instanceof wt.getEnv().Canvas?o:Lu(o);r._canvases[i]=s,r._inputDimensions[i]=[s.height,s.width,3]})}return Object.defineProperty(n.prototype,"imageTensors",{get:function(){return this._imageTensors},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"canvases",{get:function(){return this._canvases},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isBatchInput",{get:function(){return this.batchSize>1||this._treatAsBatchInput},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"batchSize",{get:function(){return this._batchSize},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"inputDimensions",{get:function(){return this._inputDimensions},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"reshapedInputDimensions",{get:function(){var t=this;return Bo(this.batchSize,0,1).map(function(e,r){return t.getReshapedInputDimensions(r)})},enumerable:!0,configurable:!0}),n.prototype.getInput=function(t){return this.canvases[t]||this.imageTensors[t]},n.prototype.getInputDimensions=function(t){return this._inputDimensions[t]},n.prototype.getInputHeight=function(t){return this._inputDimensions[t][0]},n.prototype.getInputWidth=function(t){return this._inputDimensions[t][1]},n.prototype.getReshapedInputDimensions=function(t){if(typeof this.inputSize!="number")throw new Error("getReshapedInputDimensions - inputSize not set, toBatchTensor has not been called yet");var e=this.getInputWidth(t),r=this.getInputHeight(t);return gw({width:e,height:r},this.inputSize)},n.prototype.toBatchTensor=function(t,e){var r=this;return e===void 0&&(e=!0),this._inputSize=t,ie(function(){var o=Bo(r.batchSize,0,1).map(function(a){var s=r.getInput(a);if(s instanceof je){var u=Qn(s)?s:s.expandDims();return u=bw(u,e),(u.shape[1]!==t||u.shape[2]!==t)&&(u=Su.resizeBilinear(u,[t,t])),u.as3D(t,t,3)}if(s instanceof wt.getEnv().Canvas)return Fu.fromPixels(Tw(s,t,e));throw new Error("toBatchTensor - at batchIdx "+a+", expected input to be instanceof tf.Tensor or instanceof HTMLCanvasElement, instead have "+s)}),i=Vt(o.map(function(a){return a.toFloat()})).as4D(r.batchSize,t,t,3);return i})},n}();function ut(n){return he(this,void 0,void 0,function(){var t,e,r;return de(this,function(o){switch(o.label){case 0:if(n instanceof ji)return[2,n];if(t=Array.isArray(n)?n:[n],!t.length)throw new Error("toNetInput - empty array passed as input");return e=function(i){return Array.isArray(n)?" at input index "+i+":":""},r=t.map(Td),r.forEach(function(i,a){if(!Ol(i)&&!da(i)&&!Qn(i))throw typeof t[a]=="string"?new Error("toNetInput -"+e(a)+" string passed, but could not resolve HTMLElement for element id "+t[a]):new Error("toNetInput -"+e(a)+" expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | tf.Tensor3D, or to be an element id");if(Qn(i)){var s=i.shape[0];if(s!==1)throw new Error("toNetInput -"+e(a)+" tf.Tensor4D with batchSize "+s+" passed, but not supported in input array")}}),[4,Promise.all(r.map(function(i){return Ol(i)&&Aw(i)}))];case 1:return o.sent(),[2,new ji(r,Array.isArray(n))]}})})}function Wu(n,t){return he(this,void 0,void 0,function(){var e,r,o,i,a,s,u;return de(this,function(c){switch(c.label){case 0:return e=wt.getEnv().Canvas,r=n,n instanceof e?[3,5]:[4,ut(n)];case 1:if(o=c.sent(),o.batchSize>1)throw new Error("extractFaces - batchSize > 1 not supported");return i=o.getInput(0),i instanceof e?(a=i,[3,4]):[3,2];case 2:return[4,Dw(i)];case 3:a=c.sent(),c.label=4;case 4:r=a,c.label=5;case 5:return s=_r(r),u=t.map(function(l){return l instanceof En?l.forSize(r.width,r.height).box.floor():l}).map(function(l){return l.clipAtImageBorders(r.width,r.height)}),[2,u.map(function(l){var f=l.x,h=l.y,d=l.width,p=l.height,v=va({width:d,height:p});return _r(v).putImageData(s.getImageData(f,h,d,p),0,0),v})]}})})}function Uu(n,t){return he(this,void 0,void 0,function(){return de(this,function(e){if(!da(n)&&!Qn(n))throw new Error("extractFaceTensors - expected image tensor to be 3D or 4D");if(Qn(n)&&n.shape[0]>1)throw new Error("extractFaceTensors - batchSize > 1 not supported");return[2,ie(function(){var r=n.shape.slice(Qn(n)?1:0),o=r[0],i=r[1],a=r[2],s=t.map(function(c){return c instanceof En?c.forSize(i,o).box:c}).map(function(c){return c.clipAtImageBorders(i,o)}),u=s.map(function(c){var l=c.x,f=c.y,h=c.width,d=c.height;return ad(n.as3D(o,i,a),[f,l,0],[d,h,a])});return u})]})})}function Nw(n,t){return he(this,void 0,void 0,function(){var e,r;return de(this,function(o){switch(o.label){case 0:return e=wt.getEnv().fetch,[4,e(n,t)];case 1:if(r=o.sent(),!(r.status<400))throw new Error("failed to fetch: ("+r.status+") "+r.statusText+", from url: "+r.url);return[2,r]}})})}function Fw(n){return he(this,void 0,void 0,function(){return de(this,function(t){switch(t.label){case 0:return[4,Nw(n)];case 1:return[2,t.sent().json()]}})})}function Pd(n,t){var e=t+"-weights_manifest.json";if(!n)return{modelBaseUri:"",manifestUri:e};if(n==="/")return{modelBaseUri:"/",manifestUri:"/"+e};var r=n.startsWith("http://")?"http://":n.startsWith("https://")?"https://":"";n=n.replace(r,"");var o=n.split("/").filter(function(s){return s}),i=n.endsWith(".json")?o[o.length-1]:e,a=r+(n.endsWith(".json")?o.slice(0,o.length-1):o).join("/");return a=n.startsWith("/")?"/"+a:a,{modelBaseUri:a,manifestUri:a==="/"?"/"+i:a+"/"+i}}function Pw(n,t){return he(this,void 0,void 0,function(){var e,r,o,i;return de(this,function(a){switch(a.label){case 0:return e=Pd(n,t),r=e.manifestUri,o=e.modelBaseUri,[4,Fw(r)];case 1:return i=a.sent(),[2,Cd.loadWeights(i,o)]}})})}var Un=function(){function n(t){this._name=t,this._params=void 0,this._paramMappings=[]}return Object.defineProperty(n.prototype,"params",{get:function(){return this._params},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"paramMappings",{get:function(){return this._paramMappings},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isLoaded",{get:function(){return!!this.params},enumerable:!0,configurable:!0}),n.prototype.getParamFromPath=function(t){var e=this.traversePropertyPath(t),r=e.obj,o=e.objProp;return r[o]},n.prototype.reassignParamFromPath=function(t,e){var r=this.traversePropertyPath(t),o=r.obj,i=r.objProp;o[i].dispose(),o[i]=e},n.prototype.getParamList=function(){var t=this;return this._paramMappings.map(function(e){var r=e.paramPath;return{path:r,tensor:t.getParamFromPath(r)}})},n.prototype.getTrainableParams=function(){return this.getParamList().filter(function(t){return t.tensor instanceof no})},n.prototype.getFrozenParams=function(){return this.getParamList().filter(function(t){return!(t.tensor instanceof no)})},n.prototype.variable=function(){var t=this;this.getFrozenParams().forEach(function(e){var r=e.path,o=e.tensor;t.reassignParamFromPath(r,o.variable())})},n.prototype.freeze=function(){var t=this;this.getTrainableParams().forEach(function(e){var r=e.path,o=e.tensor,i=ht(o.dataSync());o.dispose(),t.reassignParamFromPath(r,i)})},n.prototype.dispose=function(t){t===void 0&&(t=!0),this.getParamList().forEach(function(e){if(t&&e.tensor.isDisposed)throw new Error("param tensor has already been disposed for path "+e.path);e.tensor.dispose()}),this._params=void 0},n.prototype.serializeParams=function(){return new Float32Array(this.getParamList().map(function(t){var e=t.tensor;return Array.from(e.dataSync())}).reduce(function(t,e){return t.concat(e)}))},n.prototype.load=function(t){return he(this,void 0,void 0,function(){return de(this,function(e){switch(e.label){case 0:return t instanceof Float32Array?(this.extractWeights(t),[2]):[4,this.loadFromUri(t)];case 1:return e.sent(),[2]}})})},n.prototype.loadFromUri=function(t){return he(this,void 0,void 0,function(){var e;return de(this,function(r){switch(r.label){case 0:if(t&&typeof t!="string")throw new Error(this._name+".loadFromUri - expected model uri");return[4,Pw(t,this.getDefaultModelName())];case 1:return e=r.sent(),this.loadFromWeightMap(e),[2]}})})},n.prototype.loadFromDisk=function(t){return he(this,void 0,void 0,function(){var e,r,o,i,a,s,u,c,l,f;return de(this,function(h){switch(h.label){case 0:if(t&&typeof t!="string")throw new Error(this._name+".loadFromDisk - expected model file path");return e=wt.getEnv().readFile,r=Pd(t,this.getDefaultModelName()),o=r.manifestUri,i=r.modelBaseUri,a=function(d){return Promise.all(d.map(function(p){return e(p).then(function(v){return v.buffer})}))},s=Cd.weightsLoaderFactory(a),l=(c=JSON).parse,[4,e(o)];case 1:return u=l.apply(c,[h.sent().toString()]),[4,s(u,i)];case 2:return f=h.sent(),this.loadFromWeightMap(f),[2]}})})},n.prototype.loadFromWeightMap=function(t){var e=this.extractParamsFromWeigthMap(t),r=e.paramMappings,o=e.params;this._paramMappings=r,this._params=o},n.prototype.extractWeights=function(t){var e=this.extractParams(t),r=e.paramMappings,o=e.params;this._paramMappings=r,this._params=o},n.prototype.traversePropertyPath=function(t){if(!this.params)throw new Error("traversePropertyPath - model has no loaded params");var e=t.split("/").reduce(function(i,a){if(!i.nextObj.hasOwnProperty(a))throw new Error("traversePropertyPath - object does not have property "+a+", for path "+t);return{obj:i.nextObj,objProp:a,nextObj:i.nextObj[a]}},{nextObj:this.params}),r=e.obj,o=e.objProp;if(!r||!o||!(r[o]instanceof je))throw new Error("traversePropertyPath - parameter is not a tensor, for path "+t);return{obj:r,objProp:o}},n}();function Ut(n,t,e){return ie(function(){var r=_u(n,t.depthwise_filter,t.pointwise_filter,e,"same");return r=Ae(r,t.bias),r})}function ts(n,t,e){return e===void 0&&(e=!1),ie(function(){var r=qe(e?Ae(Xt(n,t.conv0.filters,[2,2],"same"),t.conv0.bias):Ut(n,t.conv0,[2,2])),o=Ut(r,t.conv1,[1,1]),i=qe(Ae(r,o)),a=Ut(i,t.conv2,[1,1]);return qe(Ae(r,Ae(o,a)))})}function li(n,t,e,r){return e===void 0&&(e=!1),r===void 0&&(r=!0),ie(function(){var o=qe(e?Ae(Xt(n,t.conv0.filters,r?[2,2]:[1,1],"same"),t.conv0.bias):Ut(n,t.conv0,r?[2,2]:[1,1])),i=Ut(o,t.conv1,[1,1]),a=qe(Ae(o,i)),s=Ut(a,t.conv2,[1,1]),u=qe(Ae(o,Ae(i,s))),c=Ut(u,t.conv3,[1,1]);return qe(Ae(o,Ae(i,Ae(s,c))))})}function en(n,t,e,r){return e===void 0&&(e="same"),r===void 0&&(r=!1),ie(function(){var o=Ae(Xt(n,t.filters,[1,1],e),t.bias);return r?qe(o):o})}function Vn(n,t){Object.keys(n).forEach(function(e){t.some(function(r){return r.originalPath===e})||n[e].dispose()})}function ma(n,t){return function(e,r,o,i){var a=kt(n(e*r*o*o),[o,o,e,r]),s=Je(n(r));return t.push({paramPath:i+"/filters"},{paramPath:i+"/bias"}),{filters:a,bias:s}}}function Vu(n,t){return function(e,r,o){var i=Yn(n(e*r),[e,r]),a=Je(n(r));return t.push({paramPath:o+"/weights"},{paramPath:o+"/bias"}),{weights:i,bias:a}}}var Md=function(){function n(t,e,r){this.depthwise_filter=t,this.pointwise_filter=e,this.bias=r}return n}();function zu(n,t){return function(e,r,o){var i=kt(n(9*e),[3,3,e,1]),a=kt(n(e*r),[1,1,e,r]),s=Je(n(r));return t.push({paramPath:o+"/depthwise_filter"},{paramPath:o+"/pointwise_filter"},{paramPath:o+"/bias"}),new Md(i,a,s)}}function Hu(n){return function(t){var e=n(t+"/depthwise_filter",4),r=n(t+"/pointwise_filter",4),o=n(t+"/bias",1);return new Md(e,r,o)}}function sr(n,t){return function(e,r,o){var i=n[e];if(!ha(i,r))throw new Error("expected weightMap["+e+"] to be a Tensor"+r+"D, instead have "+i);return t.push({originalPath:e,paramPath:o||e}),i}}function zn(n){var t=n;function e(o){var i=t.slice(0,o);return t=t.slice(o),i}function r(){return t}return{extractWeights:e,getRemainingWeights:r}}function Od(n,t){var e=ma(n,t),r=zu(n,t);function o(a,s,u,c){c===void 0&&(c=!1);var l=c?e(a,s,3,u+"/conv0"):r(a,s,u+"/conv0"),f=r(s,s,u+"/conv1"),h=r(s,s,u+"/conv2");return{conv0:l,conv1:f,conv2:h}}function i(a,s,u,c){c===void 0&&(c=!1);var l=o(a,s,u,c),f=l.conv0,h=l.conv1,d=l.conv2,p=r(s,s,u+"/conv3");return{conv0:f,conv1:h,conv2:d,conv3:p}}return{extractDenseBlock3Params:o,extractDenseBlock4Params:i}}function Mw(n){var t=[],e=zn(n),r=e.extractWeights,o=e.getRemainingWeights,i=Od(r,t).extractDenseBlock4Params,a=i(3,32,"dense0",!0),s=i(32,64,"dense1"),u=i(64,128,"dense2"),c=i(128,256,"dense3");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{dense0:a,dense1:s,dense2:u,dense3:c}}}function Bd(n){return function(t){var e=n(t+"/filters",4),r=n(t+"/bias",1);return{filters:e,bias:r}}}function Ld(n,t){var e=sr(n,t),r=Bd(e),o=Hu(e);function i(s,u){u===void 0&&(u=!1);var c=u?r(s+"/conv0"):o(s+"/conv0"),l=o(s+"/conv1"),f=o(s+"/conv2");return{conv0:c,conv1:l,conv2:f}}function a(s,u){u===void 0&&(u=!1);var c=u?r(s+"/conv0"):o(s+"/conv0"),l=o(s+"/conv1"),f=o(s+"/conv2"),h=o(s+"/conv3");return{conv0:c,conv1:l,conv2:f,conv3:h}}return{extractDenseBlock3Params:i,extractDenseBlock4Params:a}}function Ow(n){var t=[],e=Ld(n,t).extractDenseBlock4Params,r={dense0:e("dense0",!0),dense1:e("dense1"),dense2:e("dense2"),dense3:e("dense3")};return Vn(n,t),{params:r,paramMappings:t}}var Wd=function(n){ge(t,n);function t(){return n.call(this,"FaceFeatureExtractor")||this}return t.prototype.forwardInput=function(e){var r=this.params;if(!r)throw new Error("FaceFeatureExtractor - load model before inference");return ie(function(){var o=e.toBatchTensor(112,!0),i=[122.782,117.001,104.298],a=$o(o,i).div(re(255)),s=li(a,r.dense0,!0);return s=li(s,r.dense1),s=li(s,r.dense2),s=li(s,r.dense3),s=Ko(s,[7,7],[2,2],"valid"),s})},t.prototype.forward=function(e){return he(this,void 0,void 0,function(){var r;return de(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,ut(e)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"face_feature_extractor_model"},t.prototype.extractParamsFromWeigthMap=function(e){return Ow(e)},t.prototype.extractParams=function(e){return Mw(e)},t}(Un);function dn(n,t){return ie(function(){return Ae(ca(n,t.weights),t.bias)})}function Bw(n,t,e){var r=[],o=zn(n),i=o.extractWeights,a=o.getRemainingWeights,s=Vu(i,r),u=s(t,e,"fc");if(a().length!==0)throw new Error("weights remaing after extract: "+a().length);return{paramMappings:r,params:{fc:u}}}function Lw(n){var t=[],e=sr(n,t);function r(i){var a=e(i+"/weights",2),s=e(i+"/bias",1);return{weights:a,bias:s}}var o={fc:r("fc")};return Vn(n,t),{params:o,paramMappings:t}}function Ud(n){var t={},e={};return Object.keys(n).forEach(function(r){var o=r.startsWith("fc")?e:t;o[r]=n[r]}),{featureExtractorMap:t,classifierMap:e}}var Vd=function(n){ge(t,n);function t(e,r){var o=n.call(this,e)||this;return o._faceFeatureExtractor=r,o}return Object.defineProperty(t.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),t.prototype.runNet=function(e){var r=this,o=this.params;if(!o)throw new Error(this._name+" - load model before inference");return ie(function(){var i=e instanceof ji?r.faceFeatureExtractor.forwardInput(e):e;return dn(i.as2D(i.shape[0],-1),o.fc)})},t.prototype.dispose=function(e){e===void 0&&(e=!0),this.faceFeatureExtractor.dispose(e),n.prototype.dispose.call(this,e)},t.prototype.loadClassifierParams=function(e){var r=this.extractClassifierParams(e),o=r.params,i=r.paramMappings;this._params=o,this._paramMappings=i},t.prototype.extractClassifierParams=function(e){return Bw(e,this.getClassifierChannelsIn(),this.getClassifierChannelsOut())},t.prototype.extractParamsFromWeigthMap=function(e){var r=Ud(e),o=r.featureExtractorMap,i=r.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(o),Lw(i)},t.prototype.extractParams=function(e){var r=this.getClassifierChannelsIn(),o=this.getClassifierChannelsOut(),i=o*r+o,a=e.slice(0,e.length-i),s=e.slice(e.length-i);return this.faceFeatureExtractor.extractWeights(a),this.extractClassifierParams(s)},t}(Un),Bl=["neutral","happy","sad","angry","fearful","disgusted","surprised"],Ww=function(){function n(t){var e=this;if(t.length!==7)throw new Error("FaceExpressions.constructor - expected probabilities.length to be 7, have: "+t.length);Bl.forEach(function(r,o){e[r]=t[o]})}return n.prototype.asSortedArray=function(){var t=this;return Bl.map(function(e){return{expression:e,probability:t[e]}}).sort(function(e,r){return r.probability-e.probability})},n}(),Uw=function(n){ge(t,n);function t(e){return e===void 0&&(e=new Wd),n.call(this,"FaceExpressionNet",e)||this}return t.prototype.forwardInput=function(e){var r=this;return ie(function(){return Ln(r.runNet(e))})},t.prototype.forward=function(e){return he(this,void 0,void 0,function(){var r;return de(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,ut(e)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.predictExpressions=function(e){return he(this,void 0,void 0,function(){var r,o,i,a,s=this;return de(this,function(u){switch(u.label){case 0:return[4,ut(e)];case 1:return r=u.sent(),[4,this.forwardInput(r)];case 2:return o=u.sent(),[4,Promise.all(et(o).map(function(c){return he(s,void 0,void 0,function(){var l;return de(this,function(f){switch(f.label){case 0:return[4,c.data()];case 1:return l=f.sent(),c.dispose(),[2,l]}})})}))];case 3:return i=u.sent(),o.dispose(),a=i.map(function(c){return new Ww(c)}),[2,r.isBatchInput?a:a[0]]}})})},t.prototype.getDefaultModelName=function(){return"face_expression_model"},t.prototype.getClassifierChannelsIn=function(){return 256},t.prototype.getClassifierChannelsOut=function(){return 7},t}(Vd);function zd(n,t){var e={expressions:t};return Object.assign({},n,e)}function Vw(n){return Rw(n)&&n.landmarks instanceof Gi&&n.unshiftedLandmarks instanceof Gi&&n.alignedRect instanceof En}function Gu(n,t){var e=n.detection.box,r=t.shiftBy(e.x,e.y),o=r.align(),i=n.detection.imageDims,a=new En(n.detection.score,o.rescale(i.reverse()),i),s={landmarks:r,unshiftedLandmarks:t,alignedRect:a};return Object.assign({},n,s)}function zw(n,t){var e=ma(n,t),r=zu(n,t);function o(a,s,u){var c=r(a,s,u+"/separable_conv0"),l=r(s,s,u+"/separable_conv1"),f=e(a,s,1,u+"/expansion_conv");return{separable_conv0:c,separable_conv1:l,expansion_conv:f}}function i(a,s){var u=r(a,a,s+"/separable_conv0"),c=r(a,a,s+"/separable_conv1"),l=r(a,a,s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:e,extractSeparableConvParams:r,extractReductionBlockParams:o,extractMainBlockParams:i}}function Hw(n,t){var e=[],r=zn(n),o=r.extractWeights,i=r.getRemainingWeights,a=zw(o,e),s=a.extractConvParams,u=a.extractSeparableConvParams,c=a.extractReductionBlockParams,l=a.extractMainBlockParams,f=s(3,32,3,"entry_flow/conv_in"),h=c(32,64,"entry_flow/reduction_block_0"),d=c(64,128,"entry_flow/reduction_block_1"),p={conv_in:f,reduction_block_0:h,reduction_block_1:d},v={};Bo(t,0,1).forEach(function(x){v["main_block_"+x]=l(128,"middle_flow/main_block_"+x)});var m=c(128,256,"exit_flow/reduction_block"),g=u(256,512,"exit_flow/separable_conv"),b={reduction_block:m,separable_conv:g};if(i().length!==0)throw new Error("weights remaing after extract: "+i().length);return{paramMappings:e,params:{entry_flow:p,middle_flow:v,exit_flow:b}}}function Gw(n,t){var e=sr(n,t),r=Bd(e),o=Hu(e);function i(s){var u=o(s+"/separable_conv0"),c=o(s+"/separable_conv1"),l=r(s+"/expansion_conv");return{separable_conv0:u,separable_conv1:c,expansion_conv:l}}function a(s){var u=o(s+"/separable_conv0"),c=o(s+"/separable_conv1"),l=o(s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:r,extractSeparableConvParams:o,extractReductionBlockParams:i,extractMainBlockParams:a}}function jw(n,t){var e=[],r=Gw(n,e),o=r.extractConvParams,i=r.extractSeparableConvParams,a=r.extractReductionBlockParams,s=r.extractMainBlockParams,u=o("entry_flow/conv_in"),c=a("entry_flow/reduction_block_0"),l=a("entry_flow/reduction_block_1"),f={conv_in:u,reduction_block_0:c,reduction_block_1:l},h={};Bo(t,0,1).forEach(function(m){h["main_block_"+m]=s("middle_flow/main_block_"+m)});var d=a("exit_flow/reduction_block"),p=i("exit_flow/separable_conv"),v={reduction_block:d,separable_conv:p};return Vn(n,e),{params:{entry_flow:f,middle_flow:h,exit_flow:v},paramMappings:e}}function Hd(n,t,e){return Ae(Xt(n,t.filters,e,"same"),t.bias)}function ns(n,t,e){e===void 0&&(e=!0);var r=e?qe(n):n;return r=Ut(r,t.separable_conv0,[1,1]),r=Ut(qe(r),t.separable_conv1,[1,1]),r=at(r,[3,3],[2,2],"same"),r=Ae(r,Hd(n,t.expansion_conv,[2,2])),r}function qw(n,t){var e=Ut(qe(n),t.separable_conv0,[1,1]);return e=Ut(qe(e),t.separable_conv1,[1,1]),e=Ut(qe(e),t.separable_conv2,[1,1]),e=Ae(e,n),e}var Kw=function(n){ge(t,n);function t(e){var r=n.call(this,"TinyXception")||this;return r._numMainBlocks=e,r}return t.prototype.forwardInput=function(e){var r=this,o=this.params;if(!o)throw new Error("TinyXception - load model before inference");return ie(function(){var i=e.toBatchTensor(112,!0),a=[122.782,117.001,104.298],s=$o(i,a).div(re(256)),u=qe(Hd(s,o.entry_flow.conv_in,[2,2]));return u=ns(u,o.entry_flow.reduction_block_0,!1),u=ns(u,o.entry_flow.reduction_block_1),Bo(r._numMainBlocks,0,1).forEach(function(c){u=qw(u,o.middle_flow["main_block_"+c])}),u=ns(u,o.exit_flow.reduction_block),u=qe(Ut(u,o.exit_flow.separable_conv,[1,1])),u})},t.prototype.forward=function(e){return he(this,void 0,void 0,function(){var r;return de(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,ut(e)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"tiny_xception_model"},t.prototype.extractParamsFromWeigthMap=function(e){return jw(e,this._numMainBlocks)},t.prototype.extractParams=function(e){return Hw(e,this._numMainBlocks)},t}(Un);function Xw(n){var t=[],e=zn(n),r=e.extractWeights,o=e.getRemainingWeights,i=Vu(r,t),a=i(512,1,"fc/age"),s=i(512,2,"fc/gender");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{fc:{age:a,gender:s}}}}function $w(n){var t=[],e=sr(n,t);function r(i){var a=e(i+"/weights",2),s=e(i+"/bias",1);return{weights:a,bias:s}}var o={fc:{age:r("fc/age"),gender:r("fc/gender")}};return Vn(n,t),{params:o,paramMappings:t}}var qi;(function(n){n.FEMALE="female",n.MALE="male"})(qi||(qi={}));var Yw=function(n){ge(t,n);function t(e){e===void 0&&(e=new Kw(2));var r=n.call(this,"AgeGenderNet")||this;return r._faceFeatureExtractor=e,r}return Object.defineProperty(t.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),t.prototype.runNet=function(e){var r=this,o=this.params;if(!o)throw new Error(this._name+" - load model before inference");return ie(function(){var i=e instanceof ji?r.faceFeatureExtractor.forwardInput(e):e,a=Ko(i,[7,7],[2,2],"valid").as2D(i.shape[0],-1),s=dn(a,o.fc.age).as1D(),u=dn(a,o.fc.gender);return{age:s,gender:u}})},t.prototype.forwardInput=function(e){var r=this;return ie(function(){var o=r.runNet(e),i=o.age,a=o.gender;return{age:i,gender:Ln(a)}})},t.prototype.forward=function(e){return he(this,void 0,void 0,function(){var r;return de(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,ut(e)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.predictAgeAndGender=function(e){return he(this,void 0,void 0,function(){var r,o,i,a,s,u,c=this;return de(this,function(l){switch(l.label){case 0:return[4,ut(e)];case 1:return r=l.sent(),[4,this.forwardInput(r)];case 2:return o=l.sent(),i=et(o.age),a=et(o.gender),s=i.map(function(f,h){return{ageTensor:f,genderTensor:a[h]}}),[4,Promise.all(s.map(function(f){var h=f.ageTensor,d=f.genderTensor;return he(c,void 0,void 0,function(){var p,v,m,g,b;return de(this,function(x){switch(x.label){case 0:return[4,h.data()];case 1:return p=x.sent()[0],[4,d.data()];case 2:return v=x.sent()[0],m=v>.5,g=m?qi.MALE:qi.FEMALE,b=m?v:1-v,h.dispose(),d.dispose(),[2,{age:p,gender:g,genderProbability:b}]}})})}))];case 3:return u=l.sent(),o.age.dispose(),o.gender.dispose(),[2,r.isBatchInput?u:u[0]]}})})},t.prototype.getDefaultModelName=function(){return"age_gender_model"},t.prototype.dispose=function(e){e===void 0&&(e=!0),this.faceFeatureExtractor.dispose(e),n.prototype.dispose.call(this,e)},t.prototype.loadClassifierParams=function(e){var r=this.extractClassifierParams(e),o=r.params,i=r.paramMappings;this._params=o,this._paramMappings=i},t.prototype.extractClassifierParams=function(e){return Xw(e)},t.prototype.extractParamsFromWeigthMap=function(e){var r=Ud(e),o=r.featureExtractorMap,i=r.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(o),$w(i)},t.prototype.extractParams=function(e){var r=1539,o=e.slice(0,e.length-r),i=e.slice(e.length-r);return this.faceFeatureExtractor.extractWeights(o),this.extractClassifierParams(i)},t}(Un),Gd=function(n){ge(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.postProcess=function(e,r,o){var i=o.map(function(s){var u=s.width,c=s.height,l=r/Math.max(c,u);return{width:u*l,height:c*l}}),a=i.length;return ie(function(){var s=function(h,d){return Vt([yn([68],h),yn([68],d)],1).as2D(1,136).as1D()},u=function(h,d){var p=i[h],v=p.width,m=p.height;return d(v,m)?Math.abs(v-m)/2:0},c=function(h){return u(h,function(d,p){return d<p})},l=function(h){return u(h,function(d,p){return p<d})},f=e.mul(yn([a,136],r)).sub(Vt(Array.from(Array(a),function(h,d){return s(c(d),l(d))}))).div(Vt(Array.from(Array(a),function(h,d){return s(i[d].width,i[d].height)})));return f})},t.prototype.forwardInput=function(e){var r=this;return ie(function(){var o=r.runNet(e);return r.postProcess(o,e.inputSize,e.inputDimensions.map(function(i){var a=i[0],s=i[1];return{height:a,width:s}}))})},t.prototype.forward=function(e){return he(this,void 0,void 0,function(){var r;return de(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,ut(e)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.detectLandmarks=function(e){return he(this,void 0,void 0,function(){var r,o,i,a=this;return de(this,function(s){switch(s.label){case 0:return[4,ut(e)];case 1:return r=s.sent(),o=ie(function(){return et(a.forwardInput(r))}),[4,Promise.all(o.map(function(u,c){return he(a,void 0,void 0,function(){var l,f,h,d,p;return de(this,function(v){switch(v.label){case 0:return h=(f=Array).from,[4,u.data()];case 1:return l=h.apply(f,[v.sent()]),d=l.filter(function(m,g){return Dl(g)}),p=l.filter(function(m,g){return!Dl(g)}),[2,new Iw(Array(68).fill(0).map(function(m,g){return new Me(d[g],p[g])}),{height:r.getInputHeight(c),width:r.getInputWidth(c)})]}})})}))];case 2:return i=s.sent(),o.forEach(function(u){return u.dispose()}),[2,r.isBatchInput?i:i[0]]}})})},t.prototype.getClassifierChannelsOut=function(){return 136},t}(Vd),jd=function(n){ge(t,n);function t(e){return e===void 0&&(e=new Wd),n.call(this,"FaceLandmark68Net",e)||this}return t.prototype.getDefaultModelName=function(){return"face_landmark_68_model"},t.prototype.getClassifierChannelsIn=function(){return 256},t}(Gd);function Jw(n){var t=[],e=Ld(n,t).extractDenseBlock3Params,r={dense0:e("dense0",!0),dense1:e("dense1"),dense2:e("dense2")};return Vn(n,t),{params:r,paramMappings:t}}function Qw(n){var t=[],e=zn(n),r=e.extractWeights,o=e.getRemainingWeights,i=Od(r,t).extractDenseBlock3Params,a=i(3,32,"dense0",!0),s=i(32,64,"dense1"),u=i(64,128,"dense2");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{dense0:a,dense1:s,dense2:u}}}var Zw=function(n){ge(t,n);function t(){return n.call(this,"TinyFaceFeatureExtractor")||this}return t.prototype.forwardInput=function(e){var r=this.params;if(!r)throw new Error("TinyFaceFeatureExtractor - load model before inference");return ie(function(){var o=e.toBatchTensor(112,!0),i=[122.782,117.001,104.298],a=$o(o,i).div(re(255)),s=ts(a,r.dense0,!0);return s=ts(s,r.dense1),s=ts(s,r.dense2),s=Ko(s,[14,14],[2,2],"valid"),s})},t.prototype.forward=function(e){return he(this,void 0,void 0,function(){var r;return de(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,ut(e)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"face_feature_extractor_tiny_model"},t.prototype.extractParamsFromWeigthMap=function(e){return Jw(e)},t.prototype.extractParams=function(e){return Qw(e)},t}(Un),e2=function(n){ge(t,n);function t(e){return e===void 0&&(e=new Zw),n.call(this,"FaceLandmark68TinyNet",e)||this}return t.prototype.getDefaultModelName=function(){return"face_landmark_68_tiny_model"},t.prototype.getClassifierChannelsIn=function(){return 128},t}(Gd);(function(n){ge(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t})(jd);function t2(n,t){return Ae(xt(n,t.weights),t.biases)}function ju(n,t,e,r,o){o===void 0&&(o="same");var i=t.conv,a=i.filters,s=i.bias,u=Xt(n,a,e,o);return u=Ae(u,s),u=t2(u,t.scale),r?qe(u):u}function n2(n,t){return ju(n,t,[1,1],!0)}function qd(n,t){return ju(n,t,[1,1],!1)}function Kd(n,t){return ju(n,t,[2,2],!0,"valid")}function r2(n,t){function e(s,u,c){var l=n(s),f=l.length/(u*c*c);if(vw(f))throw new Error("depth has to be an integer: "+f+", weights.length: "+l.length+", numFilters: "+u+", filterSize: "+c);return ie(function(){return tr(kt(l,[u,f,c,c]),[2,3,1,0])})}function r(s,u,c,l){var f=e(s,u,c),h=Je(n(u));return t.push({paramPath:l+"/filters"},{paramPath:l+"/bias"}),{filters:f,bias:h}}function o(s,u){var c=Je(n(s)),l=Je(n(s));return t.push({paramPath:u+"/weights"},{paramPath:u+"/biases"}),{weights:c,biases:l}}function i(s,u,c,l){var f=r(s,u,c,l+"/conv"),h=o(u,l+"/scale");return{conv:f,scale:h}}function a(s,u,c,l,f){f===void 0&&(f=!1);var h=i((f?.5:1)*s,u,c,l+"/conv1"),d=i(s,u,c,l+"/conv2");return{conv1:h,conv2:d}}return{extractConvLayerParams:i,extractResidualLayerParams:a}}function o2(n){var t=zn(n),e=t.extractWeights,r=t.getRemainingWeights,o=[],i=r2(e,o),a=i.extractConvLayerParams,s=i.extractResidualLayerParams,u=a(4704,32,7,"conv32_down"),c=s(9216,32,3,"conv32_1"),l=s(9216,32,3,"conv32_2"),f=s(9216,32,3,"conv32_3"),h=s(36864,64,3,"conv64_down",!0),d=s(36864,64,3,"conv64_1"),p=s(36864,64,3,"conv64_2"),v=s(36864,64,3,"conv64_3"),m=s(147456,128,3,"conv128_down",!0),g=s(147456,128,3,"conv128_1"),b=s(147456,128,3,"conv128_2"),x=s(589824,256,3,"conv256_down",!0),y=s(589824,256,3,"conv256_1"),w=s(589824,256,3,"conv256_2"),_=s(589824,256,3,"conv256_down_out"),k=ie(function(){return tr(Yn(e(256*128),[128,256]),[1,0])});if(o.push({paramPath:"fc"}),r().length!==0)throw new Error("weights remaing after extract: "+r().length);var S={conv32_down:u,conv32_1:c,conv32_2:l,conv32_3:f,conv64_down:h,conv64_1:d,conv64_2:p,conv64_3:v,conv128_down:m,conv128_1:g,conv128_2:b,conv256_down:x,conv256_1:y,conv256_2:w,conv256_down_out:_,fc:k};return{params:S,paramMappings:o}}function i2(n,t){var e=sr(n,t);function r(a){var s=e(a+"/scale/weights",1),u=e(a+"/scale/biases",1);return{weights:s,biases:u}}function o(a){var s=e(a+"/conv/filters",4),u=e(a+"/conv/bias",1),c=r(a);return{conv:{filters:s,bias:u},scale:c}}function i(a){return{conv1:o(a+"/conv1"),conv2:o(a+"/conv2")}}return{extractConvLayerParams:o,extractResidualLayerParams:i}}function a2(n){var t=[],e=i2(n,t),r=e.extractConvLayerParams,o=e.extractResidualLayerParams,i=r("conv32_down"),a=o("conv32_1"),s=o("conv32_2"),u=o("conv32_3"),c=o("conv64_down"),l=o("conv64_1"),f=o("conv64_2"),h=o("conv64_3"),d=o("conv128_down"),p=o("conv128_1"),v=o("conv128_2"),m=o("conv256_down"),g=o("conv256_1"),b=o("conv256_2"),x=o("conv256_down_out"),y=n.fc;if(t.push({originalPath:"fc",paramPath:"fc"}),!pw(y))throw new Error("expected weightMap[fc] to be a Tensor2D, instead have "+y);var w={conv32_down:i,conv32_1:a,conv32_2:s,conv32_3:u,conv64_down:c,conv64_1:l,conv64_2:f,conv64_3:h,conv128_down:d,conv128_1:p,conv128_2:v,conv256_down:m,conv256_1:g,conv256_2:b,conv256_down_out:x,fc:y};return Vn(n,t),{params:w,paramMappings:t}}function an(n,t){var e=n2(n,t.conv1);return e=qd(e,t.conv2),e=Ae(e,n),e=qe(e),e}function fi(n,t){var e=Kd(n,t.conv1);e=qd(e,t.conv2);var r=Ko(n,2,2,"valid"),o=Ge(r.shape),i=r.shape[3]!==e.shape[3],a=r.shape[1]!==e.shape[1]||r.shape[2]!==e.shape[2];if(a){var s=Io(e.shape);s[1]=1;var u=Ge(s);e=Ze([e,u],1);var c=Io(e.shape);c[2]=1;var l=Ge(c);e=Ze([e,l],2)}return r=i?Ze([r,o],3):r,e=Ae(r,e),e=qe(e),e}var s2=function(n){ge(t,n);function t(){return n.call(this,"FaceRecognitionNet")||this}return t.prototype.forwardInput=function(e){var r=this.params;if(!r)throw new Error("FaceRecognitionNet - load model before inference");return ie(function(){var o=e.toBatchTensor(150,!0).toFloat(),i=[122.782,117.001,104.298],a=$o(o,i).div(re(256)),s=Kd(a,r.conv32_down);s=at(s,3,2,"valid"),s=an(s,r.conv32_1),s=an(s,r.conv32_2),s=an(s,r.conv32_3),s=fi(s,r.conv64_down),s=an(s,r.conv64_1),s=an(s,r.conv64_2),s=an(s,r.conv64_3),s=fi(s,r.conv128_down),s=an(s,r.conv128_1),s=an(s,r.conv128_2),s=fi(s,r.conv256_down),s=an(s,r.conv256_1),s=an(s,r.conv256_2),s=fi(s,r.conv256_down_out);var u=s.mean([1,2]),c=ca(u,r.fc);return c})},t.prototype.forward=function(e){return he(this,void 0,void 0,function(){var r;return de(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,ut(e)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.computeFaceDescriptor=function(e){return he(this,void 0,void 0,function(){var r,o,i,a=this;return de(this,function(s){switch(s.label){case 0:return[4,ut(e)];case 1:return r=s.sent(),o=ie(function(){return et(a.forwardInput(r))}),[4,Promise.all(o.map(function(u){return u.data()}))];case 2:return i=s.sent(),o.forEach(function(u){return u.dispose()}),[2,r.isBatchInput?i:i[0]]}})})},t.prototype.getDefaultModelName=function(){return"face_recognition_model"},t.prototype.extractParamsFromWeigthMap=function(e){return a2(e)},t.prototype.extractParams=function(e){return o2(e)},t}(Un);function Xd(n,t){var e={descriptor:t};return Object.assign({},n,e)}function $d(n,t){var e={age:t};return Object.assign({},n,e)}function Yd(n,t,e){var r={gender:t,genderProbability:e};return Object.assign({},n,r)}var Jd=function(){function n(t){var e=t===void 0?{}:t,r=e.minFaceSize,o=e.scaleFactor,i=e.maxNumScales,a=e.scoreThresholds,s=e.scaleSteps;if(this._name="MtcnnOptions",this._minFaceSize=r||20,this._scaleFactor=o||.709,this._maxNumScales=i||10,this._scoreThresholds=a||[.6,.7,.7],this._scaleSteps=s,typeof this._minFaceSize!="number"||this._minFaceSize<0)throw new Error(this._name+" - expected minFaceSize to be a number > 0");if(typeof this._scaleFactor!="number"||this._scaleFactor<=0||this._scaleFactor>=1)throw new Error(this._name+" - expected scaleFactor to be a number between 0 and 1");if(typeof this._maxNumScales!="number"||this._maxNumScales<0)throw new Error(this._name+" - expected maxNumScales to be a number > 0");if(!Array.isArray(this._scoreThresholds)||this._scoreThresholds.length!==3||this._scoreThresholds.some(function(u){return typeof u!="number"}))throw new Error(this._name+" - expected scoreThresholds to be an array of numbers of length 3");if(this._scaleSteps&&(!Array.isArray(this._scaleSteps)||this._scaleSteps.some(function(u){return typeof u!="number"})))throw new Error(this._name+" - expected scaleSteps to be an array of numbers")}return Object.defineProperty(n.prototype,"minFaceSize",{get:function(){return this._minFaceSize},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"scaleFactor",{get:function(){return this._scaleFactor},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"maxNumScales",{get:function(){return this._maxNumScales},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"scoreThresholds",{get:function(){return this._scoreThresholds},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"scaleSteps",{get:function(){return this._scaleSteps},enumerable:!0,configurable:!0}),n}();function u2(n,t){function e(u,c){var l=kt(n(9*u),[3,3,u,1]),f=Je(n(u)),h=Je(n(u)),d=Je(n(u)),p=Je(n(u));return t.push({paramPath:c+"/filters"},{paramPath:c+"/batch_norm_scale"},{paramPath:c+"/batch_norm_offset"},{paramPath:c+"/batch_norm_mean"},{paramPath:c+"/batch_norm_variance"}),{filters:l,batch_norm_scale:f,batch_norm_offset:h,batch_norm_mean:d,batch_norm_variance:p}}function r(u,c,l,f,h){var d=kt(n(u*c*l*l),[l,l,u,c]),p=Je(n(c));return t.push({paramPath:f+"/filters"},{paramPath:f+"/"+(h?"batch_norm_offset":"bias")}),{filters:d,bias:p}}function o(u,c,l,f){var h=r(u,c,l,f,!0),d=h.filters,p=h.bias;return{filters:d,batch_norm_offset:p}}function i(u,c,l){var f=e(u,l+"/depthwise_conv"),h=o(u,c,1,l+"/pointwise_conv");return{depthwise_conv:f,pointwise_conv:h}}function a(){var u=o(3,32,3,"mobilenetv1/conv_0"),c=i(32,64,"mobilenetv1/conv_1"),l=i(64,128,"mobilenetv1/conv_2"),f=i(128,128,"mobilenetv1/conv_3"),h=i(128,256,"mobilenetv1/conv_4"),d=i(256,256,"mobilenetv1/conv_5"),p=i(256,512,"mobilenetv1/conv_6"),v=i(512,512,"mobilenetv1/conv_7"),m=i(512,512,"mobilenetv1/conv_8"),g=i(512,512,"mobilenetv1/conv_9"),b=i(512,512,"mobilenetv1/conv_10"),x=i(512,512,"mobilenetv1/conv_11"),y=i(512,1024,"mobilenetv1/conv_12"),w=i(1024,1024,"mobilenetv1/conv_13");return{conv_0:u,conv_1:c,conv_2:l,conv_3:f,conv_4:h,conv_5:d,conv_6:p,conv_7:v,conv_8:m,conv_9:g,conv_10:b,conv_11:x,conv_12:y,conv_13:w}}function s(){var u=o(1024,256,1,"prediction_layer/conv_0"),c=o(256,512,3,"prediction_layer/conv_1"),l=o(512,128,1,"prediction_layer/conv_2"),f=o(128,256,3,"prediction_layer/conv_3"),h=o(256,128,1,"prediction_layer/conv_4"),d=o(128,256,3,"prediction_layer/conv_5"),p=o(256,64,1,"prediction_layer/conv_6"),v=o(64,128,3,"prediction_layer/conv_7"),m=r(512,12,1,"prediction_layer/box_predictor_0/box_encoding_predictor"),g=r(512,9,1,"prediction_layer/box_predictor_0/class_predictor"),b=r(1024,24,1,"prediction_layer/box_predictor_1/box_encoding_predictor"),x=r(1024,18,1,"prediction_layer/box_predictor_1/class_predictor"),y=r(512,24,1,"prediction_layer/box_predictor_2/box_encoding_predictor"),w=r(512,18,1,"prediction_layer/box_predictor_2/class_predictor"),_=r(256,24,1,"prediction_layer/box_predictor_3/box_encoding_predictor"),k=r(256,18,1,"prediction_layer/box_predictor_3/class_predictor"),S=r(256,24,1,"prediction_layer/box_predictor_4/box_encoding_predictor"),I=r(256,18,1,"prediction_layer/box_predictor_4/class_predictor"),E=r(128,24,1,"prediction_layer/box_predictor_5/box_encoding_predictor"),F=r(128,18,1,"prediction_layer/box_predictor_5/class_predictor"),N={box_encoding_predictor:m,class_predictor:g},U={box_encoding_predictor:b,class_predictor:x},V={box_encoding_predictor:y,class_predictor:w},z={box_encoding_predictor:_,class_predictor:k},H={box_encoding_predictor:S,class_predictor:I},L={box_encoding_predictor:E,class_predictor:F};return{conv_0:u,conv_1:c,conv_2:l,conv_3:f,conv_4:h,conv_5:d,conv_6:p,conv_7:v,box_predictor_0:N,box_predictor_1:U,box_predictor_2:V,box_predictor_3:z,box_predictor_4:H,box_predictor_5:L}}return{extractMobilenetV1Params:a,extractPredictionLayerParams:s}}function c2(n){var t=[],e=zn(n),r=e.extractWeights,o=e.getRemainingWeights,i=u2(r,t),a=i.extractMobilenetV1Params,s=i.extractPredictionLayerParams,u=a(),c=s(),l=su(r(5118*4),[1,5118,4]),f={extra_dim:l};if(t.push({paramPath:"output_layer/extra_dim"}),o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{params:{mobilenetv1:u,prediction_layer:c,output_layer:f},paramMappings:t}}function l2(n,t){var e=sr(n,t);function r(c,l,f){var h=e(c+"/Conv2d_"+l+"_pointwise/weights",4,f+"/filters"),d=e(c+"/Conv2d_"+l+"_pointwise/convolution_bn_offset",1,f+"/batch_norm_offset");return{filters:h,batch_norm_offset:d}}function o(c){var l="mobilenetv1/conv_"+c,f="MobilenetV1/Conv2d_"+c+"_depthwise",h=l+"/depthwise_conv",d=l+"/pointwise_conv",p=e(f+"/depthwise_weights",4,h+"/filters"),v=e(f+"/BatchNorm/gamma",1,h+"/batch_norm_scale"),m=e(f+"/BatchNorm/beta",1,h+"/batch_norm_offset"),g=e(f+"/BatchNorm/moving_mean",1,h+"/batch_norm_mean"),b=e(f+"/BatchNorm/moving_variance",1,h+"/batch_norm_variance");return{depthwise_conv:{filters:p,batch_norm_scale:v,batch_norm_offset:m,batch_norm_mean:g,batch_norm_variance:b},pointwise_conv:r("MobilenetV1",c,d)}}function i(){return{conv_0:r("MobilenetV1",0,"mobilenetv1/conv_0"),conv_1:o(1),conv_2:o(2),conv_3:o(3),conv_4:o(4),conv_5:o(5),conv_6:o(6),conv_7:o(7),conv_8:o(8),conv_9:o(9),conv_10:o(10),conv_11:o(11),conv_12:o(12),conv_13:o(13)}}function a(c,l){var f=e(c+"/weights",4,l+"/filters"),h=e(c+"/biases",1,l+"/bias");return{filters:f,bias:h}}function s(c){var l=a("Prediction/BoxPredictor_"+c+"/BoxEncodingPredictor","prediction_layer/box_predictor_"+c+"/box_encoding_predictor"),f=a("Prediction/BoxPredictor_"+c+"/ClassPredictor","prediction_layer/box_predictor_"+c+"/class_predictor");return{box_encoding_predictor:l,class_predictor:f}}function u(){return{conv_0:r("Prediction",0,"prediction_layer/conv_0"),conv_1:r("Prediction",1,"prediction_layer/conv_1"),conv_2:r("Prediction",2,"prediction_layer/conv_2"),conv_3:r("Prediction",3,"prediction_layer/conv_3"),conv_4:r("Prediction",4,"prediction_layer/conv_4"),conv_5:r("Prediction",5,"prediction_layer/conv_5"),conv_6:r("Prediction",6,"prediction_layer/conv_6"),conv_7:r("Prediction",7,"prediction_layer/conv_7"),box_predictor_0:s(0),box_predictor_1:s(1),box_predictor_2:s(2),box_predictor_3:s(3),box_predictor_4:s(4),box_predictor_5:s(5)}}return{extractMobilenetV1Params:i,extractPredictionLayerParams:u}}function f2(n){var t=[],e=l2(n,t),r=e.extractMobilenetV1Params,o=e.extractPredictionLayerParams,i=n["Output/extra_dim"];if(t.push({originalPath:"Output/extra_dim",paramPath:"output_layer/extra_dim"}),!da(i))throw new Error("expected weightMap['Output/extra_dim'] to be a Tensor3D, instead have "+i);var a={mobilenetv1:r(),prediction_layer:o(),output_layer:{extra_dim:i}};return Vn(n,t),{params:a,paramMappings:t}}function un(n,t,e){return ie(function(){var r=Xt(n,t.filters,e,"same");return r=Ae(r,t.batch_norm_offset),yu(r,0,6)})}var h2=.0010000000474974513;function d2(n,t,e){return ie(function(){var r=ua(n,t.filters,e,"same");return r=jh(r,t.batch_norm_mean,t.batch_norm_variance,t.batch_norm_offset,t.batch_norm_scale,h2),yu(r,0,6)})}function p2(n){return[2,4,6,12].some(function(t){return t===n})?[2,2]:[1,1]}function v2(n,t){return ie(function(){var e=null,r=un(n,t.conv_0,[2,2]),o=[t.conv_1,t.conv_2,t.conv_3,t.conv_4,t.conv_5,t.conv_6,t.conv_7,t.conv_8,t.conv_9,t.conv_10,t.conv_11,t.conv_12,t.conv_13];if(o.forEach(function(i,a){var s=a+1,u=p2(s);r=d2(r,i.depthwise_conv,u),r=un(r,i.pointwise_conv,[1,1]),s===11&&(e=r)}),e===null)throw new Error("mobileNetV1 - output of conv layer 11 is null");return{out:r,conv11:e}})}function m2(n,t,e,r,o){var i=n.shape[0],a=Math.min(e,i),s=t.map(function(l,f){return{score:l,boxIndex:f}}).filter(function(l){return l.score>o}).sort(function(l,f){return f.score-l.score}),u=function(l){return l<=r?1:0},c=[];return s.forEach(function(l){if(!(c.length>=a)){for(var f=l.score,h=c.length-1;h>=0;--h){var d=g2(n,l.boxIndex,c[h]);if(d!==0&&(l.score*=u(d),l.score<=o))break}f===l.score&&c.push(l.boxIndex)}}),c}function g2(n,t,e){var r=n.arraySync(),o=Math.min(r[t][0],r[t][2]),i=Math.min(r[t][1],r[t][3]),a=Math.max(r[t][0],r[t][2]),s=Math.max(r[t][1],r[t][3]),u=Math.min(r[e][0],r[e][2]),c=Math.min(r[e][1],r[e][3]),l=Math.max(r[e][0],r[e][2]),f=Math.max(r[e][1],r[e][3]),h=(a-o)*(s-i),d=(l-u)*(f-c);if(h<=0||d<=0)return 0;var p=Math.max(o,u),v=Math.max(i,c),m=Math.min(a,l),g=Math.min(s,f),b=Math.max(m-p,0)*Math.max(g-v,0);return b/(h+d-b)}function y2(n){var t=et(tr(n,[1,0])),e=[rt(t[2],t[0]),rt(t[3],t[1])],r=[Ae(t[0],Yt(e[0],re(2))),Ae(t[1],Yt(e[1],re(2)))];return{sizes:e,centers:r}}function x2(n,t){var e=y2(n),r=e.sizes,o=e.centers,i=et(tr(t,[1,0])),a=Yt(xt(Ds(Yt(i[2],re(5))),r[0]),re(2)),s=Ae(xt(Yt(i[0],re(10)),r[0]),o[0]),u=Yt(xt(Ds(Yt(i[3],re(5))),r[1]),re(2)),c=Ae(xt(Yt(i[1],re(10)),r[1]),o[1]);return tr(Vt([rt(s,a),rt(c,u),Ae(s,a),Ae(c,u)]),[1,0])}function b2(n,t,e){return ie(function(){var r=n.shape[0],o=x2(Jt(Kr(e.extra_dim,[r,1,1]),[-1,4]),Jt(n,[-1,4]));o=Jt(o,[r,o.shape[0]/r,4]);var i=Vh(bn(t,[0,0,1],[-1,-1,-1])),a=bn(i,[0,0,0],[-1,-1,1]);a=Jt(a,[r,a.shape[1]]);var s=et(o),u=et(a);return{boxes:s,scores:u}})}function Pr(n,t){return ie(function(){var e=n.shape[0],r=Jt(en(n,t.box_encoding_predictor),[e,-1,1,4]),o=Jt(en(n,t.class_predictor),[e,-1,3]);return{boxPredictionEncoding:r,classPrediction:o}})}function w2(n,t,e){return ie(function(){var r=un(n,e.conv_0,[1,1]),o=un(r,e.conv_1,[2,2]),i=un(o,e.conv_2,[1,1]),a=un(i,e.conv_3,[2,2]),s=un(a,e.conv_4,[1,1]),u=un(s,e.conv_5,[2,2]),c=un(u,e.conv_6,[1,1]),l=un(c,e.conv_7,[2,2]),f=Pr(t,e.box_predictor_0),h=Pr(n,e.box_predictor_1),d=Pr(o,e.box_predictor_2),p=Pr(a,e.box_predictor_3),v=Pr(u,e.box_predictor_4),m=Pr(l,e.box_predictor_5),g=Ze([f.boxPredictionEncoding,h.boxPredictionEncoding,d.boxPredictionEncoding,p.boxPredictionEncoding,v.boxPredictionEncoding,m.boxPredictionEncoding],1),b=Ze([f.classPrediction,h.classPrediction,d.classPrediction,p.classPrediction,v.classPrediction,m.classPrediction],1);return{boxPredictions:g,classPredictions:b}})}var ga=function(){function n(t){var e=t===void 0?{}:t,r=e.minConfidence,o=e.maxResults;if(this._name="SsdMobilenetv1Options",this._minConfidence=r||.5,this._maxResults=o||100,typeof this._minConfidence!="number"||this._minConfidence<=0||this._minConfidence>=1)throw new Error(this._name+" - expected minConfidence to be a number between 0 and 1");if(typeof this._maxResults!="number")throw new Error(this._name+" - expected maxResults to be a number")}return Object.defineProperty(n.prototype,"minConfidence",{get:function(){return this._minConfidence},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"maxResults",{get:function(){return this._maxResults},enumerable:!0,configurable:!0}),n}(),Qd=function(n){ge(t,n);function t(){return n.call(this,"SsdMobilenetv1")||this}return t.prototype.forwardInput=function(e){var r=this.params;if(!r)throw new Error("SsdMobilenetv1 - load model before inference");return ie(function(){var o=e.toBatchTensor(512,!1).toFloat(),i=rt(xt(o,re(.007843137718737125)),re(1)),a=v2(i,r.mobilenetv1),s=w2(a.out,a.conv11,r.prediction_layer),u=s.boxPredictions,c=s.classPredictions;return b2(u,c,r.output_layer)})},t.prototype.forward=function(e){return he(this,void 0,void 0,function(){var r;return de(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,ut(e)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.locateFaces=function(e,r){return r===void 0&&(r={}),he(this,void 0,void 0,function(){var o,i,a,s,u,c,l,f,h,d,p,v,m,g,b,x,y,w,_,k,S;return de(this,function(I){switch(I.label){case 0:return o=new ga(r),i=o.maxResults,a=o.minConfidence,[4,ut(e)];case 1:for(s=I.sent(),u=this.forwardInput(s),c=u.boxes,l=u.scores,f=c[0],h=l[0],d=1;d<c.length;d++)c[d].dispose(),l[d].dispose();return m=(v=Array).from,[4,h.data()];case 2:return p=m.apply(v,[I.sent()]),g=.5,b=m2(f,p,i,g,a),x=s.getReshapedInputDimensions(0),y=s.inputSize,w=y/x.width,_=y/x.height,k=f.arraySync(),S=b.map(function(E){var F=[Math.max(0,k[E][0]),Math.min(1,k[E][2])].map(function(L){return L*_}),N=F[0],U=F[1],V=[Math.max(0,k[E][1]),Math.min(1,k[E][3])].map(function(L){return L*w}),z=V[0],H=V[1];return new En(p[E],new Mu(z,N,H-z,U-N),{height:s.getInputHeight(0),width:s.getInputWidth(0)})}),f.dispose(),h.dispose(),[2,S]}})})},t.prototype.getDefaultModelName=function(){return"ssd_mobilenetv1_model"},t.prototype.extractParamsFromWeigthMap=function(e){return f2(e)},t.prototype.extractParams=function(e){return c2(e)},t}(Un);(function(n){ge(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t})(Qd);var _2=.4,C2=[new Me(.738768,.874946),new Me(2.42204,2.65704),new Me(4.30971,7.04493),new Me(10.246,4.59428),new Me(12.6868,11.8741)],E2=[new Me(1.603231,2.094468),new Me(6.041143,7.080126),new Me(2.882459,3.518061),new Me(4.266906,5.178857),new Me(9.041765,10.66308)],I2=[117.001,114.697,97.404],R2="tiny_yolov2_model",S2="tiny_yolov2_separable_conv_model",hi=function(n){return typeof n=="number"};function k2(n){if(!n)throw new Error("invalid config: "+n);if(typeof n.withSeparableConvs!="boolean")throw new Error("config.withSeparableConvs has to be a boolean, have: "+n.withSeparableConvs);if(!hi(n.iouThreshold)||n.iouThreshold<0||n.iouThreshold>1)throw new Error("config.iouThreshold has to be a number between [0, 1], have: "+n.iouThreshold);if(!Array.isArray(n.classes)||!n.classes.length||!n.classes.every(function(t){return typeof t=="string"}))throw new Error("config.classes has to be an array class names: string[], have: "+JSON.stringify(n.classes));if(!Array.isArray(n.anchors)||!n.anchors.length||!n.anchors.map(function(t){return t||{}}).every(function(t){return hi(t.x)&&hi(t.y)}))throw new Error("config.anchors has to be an array of { x: number, y: number }, have: "+JSON.stringify(n.anchors));if(n.meanRgb&&(!Array.isArray(n.meanRgb)||n.meanRgb.length!==3||!n.meanRgb.every(hi)))throw new Error("config.meanRgb has to be an array of shape [number, number, number], have: "+JSON.stringify(n.meanRgb))}function qu(n){return ie(function(){var t=xt(n,re(.10000000149011612));return Ae(qe(rt(n,t)),t)})}function Hn(n,t){return ie(function(){var e=Er(n,[[0,0],[1,1],[1,1],[0,0]]);return e=Xt(e,t.conv.filters,[1,1],"valid"),e=rt(e,t.bn.sub),e=xt(e,t.bn.truediv),e=Ae(e,t.conv.bias),qu(e)})}function Gn(n,t){return ie(function(){var e=Er(n,[[0,0],[1,1],[1,1],[0,0]]);return e=_u(e,t.depthwise_filter,t.pointwise_filter,[1,1],"valid"),e=Ae(e,t.bias),qu(e)})}function A2(n,t){var e=ma(n,t);function r(a,s){var u=Je(n(a)),c=Je(n(a));return t.push({paramPath:s+"/sub"},{paramPath:s+"/truediv"}),{sub:u,truediv:c}}function o(a,s,u){var c=e(a,s,3,u+"/conv"),l=r(s,u+"/bn");return{conv:c,bn:l}}var i=zu(n,t);return{extractConvParams:e,extractConvWithBatchNormParams:o,extractSeparableConvParams:i}}function D2(n,t,e,r){var o=zn(n),i=o.extractWeights,a=o.getRemainingWeights,s=[],u=A2(i,s),c=u.extractConvParams,l=u.extractConvWithBatchNormParams,f=u.extractSeparableConvParams,h;if(t.withSeparableConvs){var d=r[0],p=r[1],v=r[2],m=r[3],g=r[4],b=r[5],x=r[6],y=r[7],w=r[8],_=t.isFirstLayerConv2d?c(d,p,3,"conv0"):f(d,p,"conv0"),k=f(p,v,"conv1"),S=f(v,m,"conv2"),I=f(m,g,"conv3"),E=f(g,b,"conv4"),F=f(b,x,"conv5"),N=y?f(x,y,"conv6"):void 0,U=w?f(y,w,"conv7"):void 0,V=c(w||y||x,5*e,1,"conv8");h={conv0:_,conv1:k,conv2:S,conv3:I,conv4:E,conv5:F,conv6:N,conv7:U,conv8:V}}else{var d=r[0],p=r[1],v=r[2],m=r[3],g=r[4],b=r[5],x=r[6],y=r[7],w=r[8],_=l(d,p,"conv0"),k=l(p,v,"conv1"),S=l(v,m,"conv2"),I=l(m,g,"conv3"),E=l(g,b,"conv4"),F=l(b,x,"conv5"),N=l(x,y,"conv6"),U=l(y,w,"conv7"),V=c(w,5*e,1,"conv8");h={conv0:_,conv1:k,conv2:S,conv3:I,conv4:E,conv5:F,conv6:N,conv7:U,conv8:V}}if(a().length!==0)throw new Error("weights remaing after extract: "+a().length);return{params:h,paramMappings:s}}function T2(n,t){var e=sr(n,t);function r(s){var u=e(s+"/sub",1),c=e(s+"/truediv",1);return{sub:u,truediv:c}}function o(s){var u=e(s+"/filters",4),c=e(s+"/bias",1);return{filters:u,bias:c}}function i(s){var u=o(s+"/conv"),c=r(s+"/bn");return{conv:u,bn:c}}var a=Hu(e);return{extractConvParams:o,extractConvWithBatchNormParams:i,extractSeparableConvParams:a}}function N2(n,t){var e=[],r=T2(n,e),o=r.extractConvParams,i=r.extractConvWithBatchNormParams,a=r.extractSeparableConvParams,s;if(t.withSeparableConvs){var u=t.filterSizes&&t.filterSizes.length||9;s={conv0:t.isFirstLayerConv2d?o("conv0"):a("conv0"),conv1:a("conv1"),conv2:a("conv2"),conv3:a("conv3"),conv4:a("conv4"),conv5:a("conv5"),conv6:u>7?a("conv6"):void 0,conv7:u>8?a("conv7"):void 0,conv8:o("conv8")}}else s={conv0:i("conv0"),conv1:i("conv1"),conv2:i("conv2"),conv3:i("conv3"),conv4:i("conv4"),conv5:i("conv5"),conv6:i("conv6"),conv7:i("conv7"),conv8:o("conv8")};return Vn(n,e),{params:s,paramMappings:e}}var Ll;(function(n){n[n.XS=224]="XS",n[n.SM=320]="SM",n[n.MD=416]="MD",n[n.LG=608]="LG"})(Ll||(Ll={}));var Ku=function(){function n(t){var e=t===void 0?{}:t,r=e.inputSize,o=e.scoreThreshold;if(this._name="TinyYolov2Options",this._inputSize=r||416,this._scoreThreshold=o||.5,typeof this._inputSize!="number"||this._inputSize%32!==0)throw new Error(this._name+" - expected inputSize to be a number divisible by 32");if(typeof this._scoreThreshold!="number"||this._scoreThreshold<=0||this._scoreThreshold>=1)throw new Error(this._name+" - expected scoreThreshold to be a number between 0 and 1")}return Object.defineProperty(n.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"scoreThreshold",{get:function(){return this._scoreThreshold},enumerable:!0,configurable:!0}),n}(),Zd=function(n){ge(t,n);function t(e){var r=n.call(this,"TinyYolov2")||this;return k2(e),r._config=e,r}return Object.defineProperty(t.prototype,"config",{get:function(){return this._config},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"withClassScores",{get:function(){return this.config.withClassScores||this.config.classes.length>1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"boxEncodingSize",{get:function(){return 5+(this.withClassScores?this.config.classes.length:0)},enumerable:!0,configurable:!0}),t.prototype.runTinyYolov2=function(e,r){var o=Hn(e,r.conv0);return o=at(o,[2,2],[2,2],"same"),o=Hn(o,r.conv1),o=at(o,[2,2],[2,2],"same"),o=Hn(o,r.conv2),o=at(o,[2,2],[2,2],"same"),o=Hn(o,r.conv3),o=at(o,[2,2],[2,2],"same"),o=Hn(o,r.conv4),o=at(o,[2,2],[2,2],"same"),o=Hn(o,r.conv5),o=at(o,[2,2],[1,1],"same"),o=Hn(o,r.conv6),o=Hn(o,r.conv7),en(o,r.conv8,"valid",!1)},t.prototype.runMobilenet=function(e,r){var o=this.config.isFirstLayerConv2d?qu(en(e,r.conv0,"valid",!1)):Gn(e,r.conv0);return o=at(o,[2,2],[2,2],"same"),o=Gn(o,r.conv1),o=at(o,[2,2],[2,2],"same"),o=Gn(o,r.conv2),o=at(o,[2,2],[2,2],"same"),o=Gn(o,r.conv3),o=at(o,[2,2],[2,2],"same"),o=Gn(o,r.conv4),o=at(o,[2,2],[2,2],"same"),o=Gn(o,r.conv5),o=at(o,[2,2],[1,1],"same"),o=r.conv6?Gn(o,r.conv6):o,o=r.conv7?Gn(o,r.conv7):o,en(o,r.conv8,"valid",!1)},t.prototype.forwardInput=function(e,r){var o=this,i=this.params;if(!i)throw new Error("TinyYolov2 - load model before inference");return ie(function(){var a=e.toBatchTensor(r,!1).toFloat();return a=o.config.meanRgb?$o(a,o.config.meanRgb):a,a=a.div(re(256)),o.config.withSeparableConvs?o.runMobilenet(a,i):o.runTinyYolov2(a,i)})},t.prototype.forward=function(e,r){return he(this,void 0,void 0,function(){var o;return de(this,function(i){switch(i.label){case 0:return o=this.forwardInput,[4,ut(e)];case 1:return[4,o.apply(this,[i.sent(),r])];case 2:return[2,i.sent()]}})})},t.prototype.detect=function(e,r){return r===void 0&&(r={}),he(this,void 0,void 0,function(){var o,i,a,s,u,c,l,f,h,d,p,v,m,g,b=this;return de(this,function(x){switch(x.label){case 0:return o=new Ku(r),i=o.inputSize,a=o.scoreThreshold,[4,ut(e)];case 1:return s=x.sent(),[4,this.forwardInput(s,i)];case 2:return u=x.sent(),c=ie(function(){return et(u)[0].expandDims()}),l={width:s.getInputWidth(0),height:s.getInputHeight(0)},[4,this.extractBoxes(c,s.getReshapedInputDimensions(0),a)];case 3:return f=x.sent(),u.dispose(),c.dispose(),h=f.map(function(y){return y.box}),d=f.map(function(y){return y.score}),p=f.map(function(y){return y.classScore}),v=f.map(function(y){return b.config.classes[y.label]}),m=Lo(h.map(function(y){return y.rescale(i)}),d,this.config.iouThreshold,!0),g=m.map(function(y){return new Id(d[y],p[y],v[y],h[y],l)}),[2,g]}})})},t.prototype.getDefaultModelName=function(){return""},t.prototype.extractParamsFromWeigthMap=function(e){return N2(e,this.config)},t.prototype.extractParams=function(e){var r=this.config.filterSizes||t.DEFAULT_FILTER_SIZES,o=r?r.length:void 0;if(o!==7&&o!==8&&o!==9)throw new Error("TinyYolov2 - expected 7 | 8 | 9 convolutional filters, but found "+o+" filterSizes in config");return D2(e,this.config,this.boxEncodingSize,r)},t.prototype.extractBoxes=function(e,r,o){return he(this,void 0,void 0,function(){var i,a,s,u,c,l,f,h,d,p,v,m,g,b,x,y,w,_,k,S,I,E,F,N,U,V,z,H,L,B=this;return de(this,function(K){switch(K.label){case 0:return i=r.width,a=r.height,s=Math.max(i,a),u=s/i,c=s/a,l=e.shape[1],f=this.config.anchors.length,h=ie(function(){var Y=e.reshape([l,l,f,B.boxEncodingSize]),ne=Y.slice([0,0,0,0],[l,l,f,4]),oe=Y.slice([0,0,0,4],[l,l,f,1]),pe=B.withClassScores?Ln(Y.slice([0,0,0,5],[l,l,f,B.config.classes.length]),3):re(0);return[ne,oe,pe]}),d=h[0],p=h[1],v=h[2],m=[],[4,p.array()];case 1:return g=K.sent(),[4,d.array()];case 2:b=K.sent(),x=0,K.label=3;case 3:if(!(x<l))return[3,12];y=0,K.label=4;case 4:if(!(y<l))return[3,11];w=0,K.label=5;case 5:return w<f?(_=es(g[x][y][w][0]),!o||_>o?(k=(y+es(b[x][y][w][0]))/l*u,S=(x+es(b[x][y][w][1]))/l*c,I=Math.exp(b[x][y][w][2])*this.config.anchors[w].x/l*u,E=Math.exp(b[x][y][w][3])*this.config.anchors[w].y/l*c,F=k-I/2,N=S-E/2,U={row:x,col:y,anchor:w},this.withClassScores?[4,this.extractPredictedClass(v,U)]:[3,7]):[3,9]):[3,10];case 6:return L=K.sent(),[3,8];case 7:L={classScore:1,label:0},K.label=8;case 8:V=L,z=V.classScore,H=V.label,m.push(mt({box:new pa(F,N,F+I,N+E),score:_,classScore:_*z,label:H},U)),K.label=9;case 9:return w++,[3,5];case 10:return y++,[3,4];case 11:return x++,[3,3];case 12:return d.dispose(),p.dispose(),v.dispose(),[2,m]}})})},t.prototype.extractPredictedClass=function(e,r){return he(this,void 0,void 0,function(){var o,i,a,s;return de(this,function(u){switch(u.label){case 0:return o=r.row,i=r.col,a=r.anchor,[4,e.array()];case 1:return s=u.sent(),[2,Array(this.config.classes.length).fill(0).map(function(c,l){return s[o][i][a][l]}).map(function(c,l){return{classScore:c,label:l}}).reduce(function(c,l){return c.classScore>l.classScore?c:l})]}})})},t.DEFAULT_FILTER_SIZES=[3,16,32,64,128,256,512,1024,1024],t}(Un),F2=function(n){ge(t,n);function t(e){e===void 0&&(e=!0);var r=this,o=Object.assign({},{withSeparableConvs:e,iouThreshold:_2,classes:["face"]},e?{anchors:E2,meanRgb:I2}:{anchors:C2,withClassScores:!0});return r=n.call(this,o)||this,r}return Object.defineProperty(t.prototype,"withSeparableConvs",{get:function(){return this.config.withSeparableConvs},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),t.prototype.locateFaces=function(e,r){return he(this,void 0,void 0,function(){var o;return de(this,function(i){switch(i.label){case 0:return[4,this.detect(e,r)];case 1:return o=i.sent(),[2,o.map(function(a){return new En(a.score,a.relativeBox,{width:a.imageWidth,height:a.imageHeight})})]}})})},t.prototype.getDefaultModelName=function(){return this.withSeparableConvs?S2:R2},t.prototype.extractParamsFromWeigthMap=function(e){return n.prototype.extractParamsFromWeigthMap.call(this,e)},t}(Zd),ep=function(n){ge(t,n);function t(){var e=n!==null&&n.apply(this,arguments)||this;return e._name="TinyFaceDetectorOptions",e}return t}(Ku),Yo=function(){function n(){}return n.prototype.then=function(t){return he(this,void 0,void 0,function(){var e;return de(this,function(r){switch(r.label){case 0:return e=t,[4,this.run()];case 1:return[2,e.apply(void 0,[r.sent()])]}})})},n.prototype.run=function(){return he(this,void 0,void 0,function(){return de(this,function(t){throw new Error("ComposableTask - run is not implemented")})})},n}();function ya(n,t,e,r,o){return o===void 0&&(o=function(i){var a=i.alignedRect;return a}),he(this,void 0,void 0,function(){var i,a,s,u,c;return de(this,function(l){switch(l.label){case 0:return i=n.map(function(f){return Vw(f)?o(f):f.detection}),s=r,s?[3,5]:t instanceof je?[4,Uu(t,i)]:[3,2];case 1:return u=l.sent(),[3,4];case 2:return[4,Wu(t,i)];case 3:u=l.sent(),l.label=4;case 4:s=u,l.label=5;case 5:return a=s,[4,e(a)];case 6:return c=l.sent(),a.forEach(function(f){return f instanceof je&&f.dispose()}),[2,c]}})})}function Xu(n,t,e,r,o){return he(this,void 0,void 0,function(){var i=this;return de(this,function(a){return[2,ya([n],t,function(s){return he(i,void 0,void 0,function(){return de(this,function(u){return[2,e(s[0])]})})},r,o)]})})}function P2(n){return ie(function(){return Vt(et(n,3).reverse(),3)})}var di=2,Ki=12;function M2(n,t){var e=ma(n,t),r=Vu(n,t);function o(c,l){var f=Je(n(c));return t.push({paramPath:l}),f}function i(c,l,f){f===void 0&&(f=!1);var h=e(c[0],c[1],3,l+"/conv1"),d=o(c[1],l+"/prelu1_alpha"),p=e(c[1],c[2],3,l+"/conv2"),v=o(c[2],l+"/prelu2_alpha"),m=e(c[2],c[3],f?2:3,l+"/conv3"),g=o(c[3],l+"/prelu3_alpha");return{conv1:h,prelu1_alpha:d,conv2:p,prelu2_alpha:v,conv3:m,prelu3_alpha:g}}function a(){var c=i([3,10,16,32],"pnet"),l=e(32,2,1,"pnet/conv4_1"),f=e(32,4,1,"pnet/conv4_2");return mt(mt({},c),{conv4_1:l,conv4_2:f})}function s(){var c=i([3,28,48,64],"rnet",!0),l=r(576,128,"rnet/fc1"),f=o(128,"rnet/prelu4_alpha"),h=r(128,2,"rnet/fc2_1"),d=r(128,4,"rnet/fc2_2");return mt(mt({},c),{fc1:l,prelu4_alpha:f,fc2_1:h,fc2_2:d})}function u(){var c=i([3,32,64,64],"onet"),l=e(64,128,2,"onet/conv4"),f=o(128,"onet/prelu4_alpha"),h=r(1152,256,"onet/fc1"),d=o(256,"onet/prelu5_alpha"),p=r(256,2,"onet/fc2_1"),v=r(256,4,"onet/fc2_2"),m=r(256,10,"onet/fc2_3");return mt(mt({},c),{conv4:l,prelu4_alpha:f,fc1:h,prelu5_alpha:d,fc2_1:p,fc2_2:v,fc2_3:m})}return{extractPNetParams:a,extractRNetParams:s,extractONetParams:u}}function O2(n){var t=zn(n),e=t.extractWeights,r=t.getRemainingWeights,o=[],i=M2(e,o),a=i.extractPNetParams,s=i.extractRNetParams,u=i.extractONetParams,c=a(),l=s(),f=u();if(r().length!==0)throw new Error("weights remaing after extract: "+r().length);return{params:{pnet:c,rnet:l,onet:f},paramMappings:o}}function B2(n,t){var e=sr(n,t);function r(l){var f=e(l+"/weights",4,l+"/filters"),h=e(l+"/bias",1);return{filters:f,bias:h}}function o(l){var f=e(l+"/weights",2),h=e(l+"/bias",1);return{weights:f,bias:h}}function i(l){return e(l,1)}function a(l){var f=r(l+"/conv1"),h=i(l+"/prelu1_alpha"),d=r(l+"/conv2"),p=i(l+"/prelu2_alpha"),v=r(l+"/conv3"),m=i(l+"/prelu3_alpha");return{conv1:f,prelu1_alpha:h,conv2:d,prelu2_alpha:p,conv3:v,prelu3_alpha:m}}function s(){var l=a("pnet"),f=r("pnet/conv4_1"),h=r("pnet/conv4_2");return mt(mt({},l),{conv4_1:f,conv4_2:h})}function u(){var l=a("rnet"),f=o("rnet/fc1"),h=i("rnet/prelu4_alpha"),d=o("rnet/fc2_1"),p=o("rnet/fc2_2");return mt(mt({},l),{fc1:f,prelu4_alpha:h,fc2_1:d,fc2_2:p})}function c(){var l=a("onet"),f=r("onet/conv4"),h=i("onet/prelu4_alpha"),d=o("onet/fc1"),p=i("onet/prelu5_alpha"),v=o("onet/fc2_1"),m=o("onet/fc2_2"),g=o("onet/fc2_3");return mt(mt({},l),{conv4:f,prelu4_alpha:h,fc1:d,prelu5_alpha:p,fc2_1:v,fc2_2:m,fc2_3:g})}return{extractPNetParams:s,extractRNetParams:u,extractONetParams:c}}function L2(n){var t=[],e=B2(n,t),r=e.extractPNetParams,o=e.extractRNetParams,i=e.extractONetParams,a=r(),s=o(),u=i();return Vn(n,t),{params:{pnet:a,rnet:s,onet:u},paramMappings:t}}function Ls(n,t){var e=t[0],r=t[1];return{height:Math.floor(e*n),width:Math.floor(r*n)}}function W2(n,t,e){for(var r=e[0],o=e[1],i=Ki/n,a=[],s=Math.min(r,o)*i,u=0;s>=12;)a.push(i*Math.pow(t,u)),s=s*t,u+=1;return a}var $u=function(n){ge(t,n);function t(e,r,o,i){return n.call(this,{left:e,top:r,right:o,bottom:i},!0)||this}return t}(nr);function tp(n){return ie(function(){return xt(rt(n,re(127.5)),re(.0078125))})}function Zr(n,t){return ie(function(){return Ae(qe(n),xt(t,Ui(qe(Ui(n)))))})}function Yu(n,t,e){return e===void 0&&(e=!1),ie(function(){var r=en(n,t.conv1,"valid");return r=Zr(r,t.prelu1_alpha),r=at(r,e?[2,2]:[3,3],[2,2],"same"),r=en(r,t.conv2,"valid"),r=Zr(r,t.prelu2_alpha),r=e?r:at(r,[3,3],[2,2],"valid"),r=en(r,t.conv3,"valid"),r=Zr(r,t.prelu3_alpha),r})}function U2(n,t){return ie(function(){var e=Yu(n,t,!0),r=en(e,t.conv4_1,"valid"),o=Gt(la(r,3),3),i=Ln(rt(r,o),3),a=en(e,t.conv4_2,"valid");return{prob:i,regions:a}})}function V2(n,t){return ie(function(){var e=Ls(t,n.shape.slice(1)),r=e.height,o=e.width,i=Su.resizeBilinear(n,[r,o]),a=tp(i);return tr(a,[0,2,1,3])})}function z2(n,t,e,r){for(var o=[],i=n.arraySync(),a=0;a<n.shape[0];a++)for(var s=0;s<n.shape[1];s++)i[a][s]>=r&&o.push(new Me(s,a));var u=o.map(function(c){var l=new pa(Math.round((c.y*di+1)/e),Math.round((c.x*di+1)/e),Math.round((c.y*di+Ki)/e),Math.round((c.x*di+Ki)/e)),f=i[c.y][c.x],h=t.arraySync(),d=new $u(h[c.y][c.x][0],h[c.y][c.x][1],h[c.y][c.x][2],h[c.y][c.x][3]);return{cell:l,score:f,region:d}});return u}function H2(n,t,e,r,o){o.stage1=[];var i=t.map(function(h){return ie(function(){var d={scale:h},p=V2(n,h),v=Date.now(),m=U2(p,r),g=m.prob,b=m.regions;d.pnet=Date.now()-v;var x=et(et(g,3)[1])[0],y=et(b)[0];return{scoresTensor:x,regionsTensor:y,scale:h,statsForScale:d}})}),a=i.map(function(h){var d=h.scoresTensor,p=h.regionsTensor,v=h.scale,m=h.statsForScale,g=z2(d,p,v,e);if(d.dispose(),p.dispose(),!g.length)return o.stage1.push(m),[];var b=Date.now(),x=Lo(g.map(function(y){return y.cell}),g.map(function(y){return y.score}),.5);return m.nms=Date.now()-b,m.numBoxes=x.length,o.stage1.push(m),x.map(function(y){return g[y]})}),s=a.reduce(function(h,d){return h.concat(d)},[]),u=[],c=[];if(s.length>0){var l=Date.now(),f=Lo(s.map(function(h){return h.cell}),s.map(function(h){return h.score}),.7);o.stage1_nms=Date.now()-l,c=f.map(function(h){return s[h].score}),u=f.map(function(h){return s[h]}).map(function(h){var d=h.cell,p=h.region;return new pa(d.left+p.left*d.width,d.top+p.top*d.height,d.right+p.right*d.width,d.bottom+p.bottom*d.height).toSquare().round()})}return{boxes:u,scores:c}}function np(n,t,e){var r=e.width,o=e.height;return he(this,void 0,void 0,function(){var i,a,s,u=this;return de(this,function(c){switch(c.label){case 0:return i=_r(n),[4,Promise.all(t.map(function(l){return he(u,void 0,void 0,function(){var f,h,d,p,v,m,g,b;return de(this,function(x){return f=l.padAtBorders(n.height,n.width),h=f.y,d=f.ey,p=f.x,v=f.ex,m=p-1,g=h-1,b=i.getImageData(m,g,v-m,d-g),[2,wt.isNodejs()?Lu(b):createImageBitmap(b)]})})}))];case 1:return a=c.sent(),s=[],a.forEach(function(l){var f=va({width:r,height:o}),h=_r(f);h.drawImage(l,0,0,r,o);for(var d=h.getImageData(0,0,r,o).data,p=[],v=0;v<d.length;v+=4)p.push(d[v+2]),p.push(d[v+1]),p.push(d[v]);s.push(p)}),[2,s.map(function(l){var f=ie(function(){var h=tr(kt(l,[1,r,o,3]),[0,2,1,3]).toFloat();return tp(h)});return f})]}})})}function G2(n,t){return ie(function(){var e=Yu(n,t),r=Jt(e,[e.shape[0],t.fc1.weights.shape[0]]),o=dn(r,t.fc1),i=Zr(o,t.prelu4_alpha),a=dn(i,t.fc2_1),s=Gt(la(a,1),1),u=Ln(rt(a,s),1),c=dn(i,t.fc2_2),l=et(u,1)[1];return{scores:l,regions:c}})}function j2(n,t,e,r,o){return he(this,void 0,void 0,function(){var i,a,s,u,c,l,f,h,d,p,v,m,g,b;return de(this,function(x){switch(x.label){case 0:return i=Date.now(),[4,np(n,t,{width:24,height:24})];case 1:return a=x.sent(),o.stage2_extractImagePatches=Date.now()-i,i=Date.now(),s=a.map(function(y){var w=G2(y,r);return y.dispose(),w}),o.stage2_rnet=Date.now()-i,u=s.length>1?Ze(s.map(function(y){return y.scores})):s[0].scores,f=(l=Array).from,[4,u.data()];case 2:return c=f.apply(l,[x.sent()]),u.dispose(),h=c.map(function(y,w){return{score:y,idx:w}}).filter(function(y){return y.score>e}).map(function(y){var w=y.idx;return w}),d=h.map(function(y){return t[y]}),p=h.map(function(y){return c[y]}),v=[],m=[],d.length>0&&(i=Date.now(),g=Lo(d,p,.7),o.stage2_nms=Date.now()-i,b=g.map(function(y){var w=s[h[y]].regions.arraySync();return new $u(w[0][0],w[0][1],w[0][2],w[0][3])}),m=g.map(function(y){return p[y]}),v=g.map(function(y,w){return d[y].calibrate(b[w])})),s.forEach(function(y){y.regions.dispose(),y.scores.dispose()}),[2,{boxes:v,scores:m}]}})})}function q2(n,t){return ie(function(){var e=Yu(n,t);e=at(e,[2,2],[2,2],"same"),e=en(e,t.conv4,"valid"),e=Zr(e,t.prelu4_alpha);var r=Jt(e,[e.shape[0],t.fc1.weights.shape[0]]),o=dn(r,t.fc1),i=Zr(o,t.prelu5_alpha),a=dn(i,t.fc2_1),s=Gt(la(a,1),1),u=Ln(rt(a,s),1),c=dn(i,t.fc2_2),l=dn(i,t.fc2_3),f=et(u,1)[1];return{scores:f,regions:c,points:l}})}function K2(n,t,e,r,o){return he(this,void 0,void 0,function(){var i,a,s,u,c,l,f,h,d,p,v,m,g,b,x;return de(this,function(y){switch(y.label){case 0:return i=Date.now(),[4,np(n,t,{width:48,height:48})];case 1:return a=y.sent(),o.stage3_extractImagePatches=Date.now()-i,i=Date.now(),s=a.map(function(w){var _=q2(w,r);return w.dispose(),_}),o.stage3_onet=Date.now()-i,u=s.length>1?Ze(s.map(function(w){return w.scores})):s[0].scores,f=(l=Array).from,[4,u.data()];case 2:return c=f.apply(l,[y.sent()]),u.dispose(),h=c.map(function(w,_){return{score:w,idx:_}}).filter(function(w){return w.score>e}).map(function(w){var _=w.idx;return _}),d=h.map(function(w){var _=s[w].regions.arraySync();return new $u(_[0][0],_[0][1],_[0][2],_[0][3])}),p=h.map(function(w,_){return t[w].calibrate(d[_])}),v=h.map(function(w){return c[w]}),m=[],g=[],b=[],p.length>0&&(i=Date.now(),x=Lo(p,v,.7,!1),o.stage3_nms=Date.now()-i,m=x.map(function(w){return p[w]}),g=x.map(function(w){return v[w]}),b=x.map(function(w,_){return Array(5).fill(0).map(function(k,S){var I=s[w].points.arraySync();return new Me(I[0][S]*(m[_].width+1)+m[_].left,I[0][S+5]*(m[_].height+1)+m[_].top)})})),s.forEach(function(w){w.regions.dispose(),w.scores.dispose(),w.points.dispose()}),[2,{boxes:m,scores:g,points:b}]}})})}var X2=function(n){ge(t,n);function t(){return n.call(this,"Mtcnn")||this}return t.prototype.load=function(e){return he(this,void 0,void 0,function(){return de(this,function(r){return console.warn("mtcnn is deprecated and will be removed soon"),[2,n.prototype.load.call(this,e)]})})},t.prototype.loadFromDisk=function(e){return he(this,void 0,void 0,function(){return de(this,function(r){return console.warn("mtcnn is deprecated and will be removed soon"),[2,n.prototype.loadFromDisk.call(this,e)]})})},t.prototype.forwardInput=function(e,r){return r===void 0&&(r={}),he(this,void 0,void 0,function(){var o,i,a,s,u,c,l,f,h,d,p,v,m,g,b,x,y,w,_,k,S;return de(this,function(I){switch(I.label){case 0:if(o=this.params,!o)throw new Error("Mtcnn - load model before inference");if(i=e.canvases[0],!i)throw new Error("Mtcnn - inputCanvas is not defined, note that passing tensors into Mtcnn.forwardInput is not supported yet.");return a={},s=Date.now(),u=ie(function(){return P2(Gt(Fu.fromPixels(i)).toFloat())}),c=function(E){return u.dispose(),a.total=Date.now()-s,E},l=u.shape.slice(1),f=l[0],h=l[1],d=new Jd(r),p=d.minFaceSize,v=d.scaleFactor,m=d.maxNumScales,g=d.scoreThresholds,b=d.scaleSteps,x=(b||W2(p,v,[f,h])).filter(function(E){var F=Ls(E,[f,h]);return Math.min(F.width,F.height)>Ki}).slice(0,m),a.scales=x,a.pyramid=x.map(function(E){return Ls(E,[f,h])}),y=Date.now(),[4,H2(u,x,g[0],o.pnet,a)];case 1:return w=I.sent(),a.total_stage1=Date.now()-y,w.boxes.length?(a.stage2_numInputBoxes=w.boxes.length,y=Date.now(),[4,j2(i,w.boxes,g[1],o.rnet,a)]):[2,c({results:[],stats:a})];case 2:return _=I.sent(),a.total_stage2=Date.now()-y,_.boxes.length?(a.stage3_numInputBoxes=_.boxes.length,y=Date.now(),[4,K2(i,_.boxes,g[2],o.onet,a)]):[2,c({results:[],stats:a})];case 3:return k=I.sent(),a.total_stage3=Date.now()-y,S=k.boxes.map(function(E,F){return Gu(Ou({},new En(k.scores[F],new Mu(E.left/h,E.top/f,E.width/h,E.height/f),{height:f,width:h})),new Ew(k.points[F].map(function(N){return N.sub(new Me(E.left,E.top)).div(new Me(E.width,E.height))}),{width:E.width,height:E.height}))}),[2,c({results:S,stats:a})]}})})},t.prototype.forward=function(e,r){return r===void 0&&(r={}),he(this,void 0,void 0,function(){var o;return de(this,function(i){switch(i.label){case 0:return o=this.forwardInput,[4,ut(e)];case 1:return[4,o.apply(this,[i.sent(),r])];case 2:return[2,i.sent().results]}})})},t.prototype.forwardWithStats=function(e,r){return r===void 0&&(r={}),he(this,void 0,void 0,function(){var o;return de(this,function(i){switch(i.label){case 0:return o=this.forwardInput,[4,ut(e)];case 1:return[2,o.apply(this,[i.sent(),r])]}})})},t.prototype.getDefaultModelName=function(){return"mtcnn_model"},t.prototype.extractParamsFromWeigthMap=function(e){return L2(e)},t.prototype.extractParams=function(e){return O2(e)},t}(Un),$2=.4,Y2=[new Me(1.603231,2.094468),new Me(6.041143,7.080126),new Me(2.882459,3.518061),new Me(4.266906,5.178857),new Me(9.041765,10.66308)],J2=[117.001,114.697,97.404],Q2=function(n){ge(t,n);function t(){var e=this,r={withSeparableConvs:!0,iouThreshold:$2,classes:["face"],anchors:Y2,meanRgb:J2,isFirstLayerConv2d:!0,filterSizes:[3,16,32,64,128,256,512]};return e=n.call(this,r)||this,e}return Object.defineProperty(t.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),t.prototype.locateFaces=function(e,r){return he(this,void 0,void 0,function(){var o;return de(this,function(i){switch(i.label){case 0:return[4,this.detect(e,r)];case 1:return o=i.sent(),[2,o.map(function(a){return new En(a.score,a.relativeBox,{width:a.imageWidth,height:a.imageHeight})})]}})})},t.prototype.getDefaultModelName=function(){return"tiny_face_detector_model"},t.prototype.extractParamsFromWeigthMap=function(e){return n.prototype.extractParamsFromWeigthMap.call(this,e)},t}(Zd),Dt={ssdMobilenetv1:new Qd,tinyFaceDetector:new Q2,tinyYolov2:new F2,mtcnn:new X2,faceLandmark68Net:new jd,faceLandmark68TinyNet:new e2,faceRecognitionNet:new s2,faceExpressionNet:new Uw,ageGenderNet:new Yw},rp=function(n){ge(t,n);function t(e,r,o){var i=n.call(this)||this;return i.parentTask=e,i.input=r,i.extractedFaces=o,i}return t}(Yo),Ju=function(n){ge(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return he(this,void 0,void 0,function(){var e,r,o=this;return de(this,function(i){switch(i.label){case 0:return[4,this.parentTask];case 1:return e=i.sent(),[4,ya(e,this.input,function(a){return he(o,void 0,void 0,function(){return de(this,function(s){switch(s.label){case 0:return[4,Promise.all(a.map(function(u){return Dt.faceExpressionNet.predictExpressions(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return r=i.sent(),[2,e.map(function(a,s){return zd(a,r[s])})]}})})},t.prototype.withAgeAndGender=function(){return new tc(this,this.input)},t}(rp),Qu=function(n){ge(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return he(this,void 0,void 0,function(){var e,r;return de(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),e?[4,Xu(e,this.input,function(i){return Dt.faceExpressionNet.predictExpressions(i)},this.extractedFaces)]:[2];case 2:return r=o.sent(),[2,zd(e,r)]}})})},t.prototype.withAgeAndGender=function(){return new nc(this,this.input)},t}(rp),Zu=function(n){ge(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.withAgeAndGender=function(){return new rc(this,this.input)},t.prototype.withFaceDescriptors=function(){return new ic(this,this.input)},t}(Ju),ec=function(n){ge(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.withAgeAndGender=function(){return new oc(this,this.input)},t.prototype.withFaceDescriptor=function(){return new ac(this,this.input)},t}(Qu),op=function(n){ge(t,n);function t(e,r,o){var i=n.call(this)||this;return i.parentTask=e,i.input=r,i.extractedFaces=o,i}return t}(Yo),tc=function(n){ge(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return he(this,void 0,void 0,function(){var e,r,o=this;return de(this,function(i){switch(i.label){case 0:return[4,this.parentTask];case 1:return e=i.sent(),[4,ya(e,this.input,function(a){return he(o,void 0,void 0,function(){return de(this,function(s){switch(s.label){case 0:return[4,Promise.all(a.map(function(u){return Dt.ageGenderNet.predictAgeAndGender(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return r=i.sent(),[2,e.map(function(a,s){var u=r[s],c=u.age,l=u.gender,f=u.genderProbability;return $d(Yd(a,l,f),c)})]}})})},t.prototype.withFaceExpressions=function(){return new Ju(this,this.input)},t}(op),nc=function(n){ge(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return he(this,void 0,void 0,function(){var e,r,o,i,a;return de(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return e=s.sent(),e?[4,Xu(e,this.input,function(u){return Dt.ageGenderNet.predictAgeAndGender(u)},this.extractedFaces)]:[2];case 2:return r=s.sent(),o=r.age,i=r.gender,a=r.genderProbability,[2,$d(Yd(e,i,a),o)]}})})},t.prototype.withFaceExpressions=function(){return new Qu(this,this.input)},t}(op),rc=function(n){ge(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.withFaceExpressions=function(){return new Zu(this,this.input)},t.prototype.withFaceDescriptors=function(){return new ic(this,this.input)},t}(tc),oc=function(n){ge(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.withFaceExpressions=function(){return new ec(this,this.input)},t.prototype.withFaceDescriptor=function(){return new ac(this,this.input)},t}(nc),ip=function(n){ge(t,n);function t(e,r){var o=n.call(this)||this;return o.parentTask=e,o.input=r,o}return t}(Yo),ic=function(n){ge(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return he(this,void 0,void 0,function(){var e,r;return de(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),[4,ya(e,this.input,function(i){return Promise.all(i.map(function(a){return Dt.faceRecognitionNet.computeFaceDescriptor(a)}))},null,function(i){return i.landmarks.align(null,{useDlibAlignment:!0})})];case 2:return r=o.sent(),[2,r.map(function(i,a){return Xd(e[a],i)})]}})})},t.prototype.withFaceExpressions=function(){return new Zu(this,this.input)},t.prototype.withAgeAndGender=function(){return new rc(this,this.input)},t}(ip),ac=function(n){ge(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return he(this,void 0,void 0,function(){var e,r;return de(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),e?[4,Xu(e,this.input,function(i){return Dt.faceRecognitionNet.computeFaceDescriptor(i)},null,function(i){return i.landmarks.align(null,{useDlibAlignment:!0})})]:[2];case 2:return r=o.sent(),[2,Xd(e,r)]}})})},t.prototype.withFaceExpressions=function(){return new ec(this,this.input)},t.prototype.withAgeAndGender=function(){return new oc(this,this.input)},t}(ip),ap=function(n){ge(t,n);function t(e,r,o){var i=n.call(this)||this;return i.parentTask=e,i.input=r,i.useTinyLandmarkNet=o,i}return Object.defineProperty(t.prototype,"landmarkNet",{get:function(){return this.useTinyLandmarkNet?Dt.faceLandmark68TinyNet:Dt.faceLandmark68Net},enumerable:!0,configurable:!0}),t}(Yo),Z2=function(n){ge(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return he(this,void 0,void 0,function(){var e,r,o,i,a,s=this;return de(this,function(u){switch(u.label){case 0:return[4,this.parentTask];case 1:return e=u.sent(),r=e.map(function(c){return c.detection}),this.input instanceof je?[4,Uu(this.input,r)]:[3,3];case 2:return i=u.sent(),[3,5];case 3:return[4,Wu(this.input,r)];case 4:i=u.sent(),u.label=5;case 5:return o=i,[4,Promise.all(o.map(function(c){return s.landmarkNet.detectLandmarks(c)}))];case 6:return a=u.sent(),o.forEach(function(c){return c instanceof je&&c.dispose()}),[2,e.map(function(c,l){return Gu(c,a[l])})]}})})},t.prototype.withFaceExpressions=function(){return new Zu(this,this.input)},t.prototype.withAgeAndGender=function(){return new rc(this,this.input)},t.prototype.withFaceDescriptors=function(){return new ic(this,this.input)},t}(ap),e_=function(n){ge(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return he(this,void 0,void 0,function(){var e,r,o,i,a;return de(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return e=s.sent(),e?(r=e.detection,this.input instanceof je?[4,Uu(this.input,[r])]:[3,3]):[2];case 2:return i=s.sent(),[3,5];case 3:return[4,Wu(this.input,[r])];case 4:i=s.sent(),s.label=5;case 5:return o=i,[4,this.landmarkNet.detectLandmarks(o[0])];case 6:return a=s.sent(),o.forEach(function(u){return u instanceof je&&u.dispose()}),[2,Gu(e,a)]}})})},t.prototype.withFaceExpressions=function(){return new ec(this,this.input)},t.prototype.withAgeAndGender=function(){return new oc(this,this.input)},t.prototype.withFaceDescriptor=function(){return new ac(this,this.input)},t}(ap),sp=function(n){ge(t,n);function t(e,r){r===void 0&&(r=new ga);var o=n.call(this)||this;return o.input=e,o.options=r,o}return t}(Yo),up=function(n){ge(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return he(this,void 0,void 0,function(){var e,r,o,i;return de(this,function(a){switch(a.label){case 0:return e=this,r=e.input,o=e.options,o instanceof Jd?[4,Dt.mtcnn.forward(r,o)]:[3,2];case 1:return[2,a.sent().map(function(s){return s.detection})];case 2:if(i=o instanceof ep?function(s){return Dt.tinyFaceDetector.locateFaces(s,o)}:o instanceof ga?function(s){return Dt.ssdMobilenetv1.locateFaces(s,o)}:o instanceof Ku?function(s){return Dt.tinyYolov2.locateFaces(s,o)}:null,!i)throw new Error("detectFaces - expected options to be instance of TinyFaceDetectorOptions | SsdMobilenetv1Options | MtcnnOptions | TinyYolov2Options");return[2,i(r)]}})})},t.prototype.runAndExtendWithFaceDetections=function(){var e=this;return new Promise(function(r){return he(e,void 0,void 0,function(){var o;return de(this,function(i){switch(i.label){case 0:return[4,this.run()];case 1:return o=i.sent(),[2,r(o.map(function(a){return Ou({},a)}))]}})})})},t.prototype.withFaceLandmarks=function(e){return e===void 0&&(e=!1),new Z2(this.runAndExtendWithFaceDetections(),this.input,e)},t.prototype.withFaceExpressions=function(){return new Ju(this.runAndExtendWithFaceDetections(),this.input)},t.prototype.withAgeAndGender=function(){return new tc(this.runAndExtendWithFaceDetections(),this.input)},t}(sp);(function(n){ge(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return he(this,void 0,void 0,function(){var e,r;return de(this,function(o){switch(o.label){case 0:return[4,new up(this.input,this.options)];case 1:return e=o.sent(),r=e[0],e.forEach(function(i){i.score>r.score&&(r=i)}),[2,r]}})})},t.prototype.runAndExtendWithFaceDetection=function(){var e=this;return new Promise(function(r){return he(e,void 0,void 0,function(){var o;return de(this,function(i){switch(i.label){case 0:return[4,this.run()];case 1:return o=i.sent(),[2,r(o?Ou({},o):void 0)]}})})})},t.prototype.withFaceLandmarks=function(e){return e===void 0&&(e=!1),new e_(this.runAndExtendWithFaceDetection(),this.input,e)},t.prototype.withFaceExpressions=function(){return new Qu(this.runAndExtendWithFaceDetection(),this.input)},t.prototype.withAgeAndGender=function(){return new nc(this.runAndExtendWithFaceDetection(),this.input)},t})(sp);function t_(n,t){return t===void 0&&(t=new ga),new up(n,t)}function n_(n,t){if(n.length!==t.length)throw new Error("euclideanDistance: arr1.length !== arr2.length");var e=Array.from(n),r=Array.from(t);return Math.sqrt(e.map(function(o,i){return o-r[i]}).reduce(function(o,i){return o+Math.pow(i,2)},0))}(function(){function n(t,e){e===void 0&&(e=.6),this._distanceThreshold=e;var r=Array.isArray(t)?t:[t];if(!r.length)throw new Error("FaceRecognizer.constructor - expected atleast one input");var o=1,i=function(){return"person "+o++};this._labeledDescriptors=r.map(function(a){if(a instanceof ci)return a;if(a instanceof Float32Array)return new ci(i(),[a]);if(a.descriptor&&a.descriptor instanceof Float32Array)return new ci(i(),[a.descriptor]);throw new Error("FaceRecognizer.constructor - expected inputs to be of type LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array | Array<LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array>")})}return Object.defineProperty(n.prototype,"labeledDescriptors",{get:function(){return this._labeledDescriptors},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"distanceThreshold",{get:function(){return this._distanceThreshold},enumerable:!0,configurable:!0}),n.prototype.computeMeanDistance=function(t,e){return e.map(function(r){return n_(r,t)}).reduce(function(r,o){return r+o},0)/(e.length||1)},n.prototype.matchDescriptor=function(t){var e=this;return this.labeledDescriptors.map(function(r){var o=r.descriptors,i=r.label;return new Fl(i,e.computeMeanDistance(t,o))}).reduce(function(r,o){return r.distance<o.distance?r:o})},n.prototype.findBestMatch=function(t){var e=this.matchDescriptor(t);return e.distance<this.distanceThreshold?e:new Fl("unknown",e.distance)},n.prototype.toJSON=function(){return{distanceThreshold:this.distanceThreshold,labeledDescriptors:this.labeledDescriptors.map(function(t){return t.toJSON()})}},n.fromJSON=function(t){var e=t.labeledDescriptors.map(function(r){return ci.fromJSON(r)});return new n(e,t.distanceThreshold)},n})();const r_={class:"min-h-screen bg-black text-white flex flex-col"},o_={class:"fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md px-6 py-3 flex justify-between items-center"},i_={class:"text-sm"},a_={class:"flex-1 flex flex-col items-center justify-center p-6 text-center"},s_={class:"relative w-full max-w-md aspect-square mb-8 flex items-center justify-center"},u_={class:"relative w-[90%] h-[90%] rounded-full overflow-hidden"},c_={class:"absolute inset-0"},l_={class:"w-full h-full",viewBox:"0 0 100 100"},f_=["stroke-dasharray"],h_={class:"absolute -bottom-6 left-0 right-0 text-center text-white/80 text-sm"},d_={class:"flex flex-col w-full max-w-md gap-3"},p_=["disabled"],v_={key:0},m_={key:1,class:"flex items-center"},g_=["disabled"],y_={key:0,class:"fixed inset-0 bg-black/90 flex items-center justify-center p-6 z-50"},x_={class:"w-full max-w-sm bg-gray-900 rounded-2xl p-6"},b_={class:"mb-6"},w_=["disabled"],__={key:1,class:"fixed inset-0 bg-black/90 flex items-center justify-center z-50"},C_={__name:"App",setup(n){const t=$t(""),e=$t(""),r=$t(!1),o=$t(null),i=$t(null),a=$t(null),s=$t(!1),u=$t(null),c=$t([{name:"front",label:"正面"},{name:"left",label:"左轉"},{name:"right",label:"右轉"},{name:"up",label:"仰頭"},{name:"down",label:"低頭"}]),l=$t(c.value[0]),f=$t([]);let h=null;function d(){e.value.trim()&&(t.value=e.value.trim())}yf(async()=>{try{console.log("正在初始化相機...");const x=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:1280},height:{ideal:720},facingMode:"user"}});o.value.srcObject=x,await new Promise(w=>{o.value.onloadedmetadata=()=>{o.value.play().then(w).catch(console.error)}}),console.log("相機初始化完成，正在加載人臉檢測模型...");const y="/models";console.log("模型路徑:",y),await Promise.all([Dt.tinyFaceDetector.loadFromUri(y).then(()=>{console.log("TinyFaceDetector 模型加載完成")}),Dt.faceLandmark68Net.loadFromUri(y).then(()=>{console.log("FaceLandmark68Net 模型加載完成")})]),console.log("所有模型加載完成，開始人臉檢測循環"),v()}catch(x){console.error("初始化失敗:",x),b(`初始化失敗: ${x.message}`)}}),xf(()=>{p(),h&&cancelAnimationFrame(h)});function p(){var x;(x=o.value)!=null&&x.srcObject&&(o.value.srcObject.getTracks().forEach(y=>{y.stop(),y.enabled=!1}),o.value.srcObject=null)}async function v(){var y;if(!o.value||!a.value){console.log("等待 video 或 faceCanvas 元素準備就緒..."),h=requestAnimationFrame(v);return}if(o.value.videoWidth===0||o.value.videoHeight===0){console.log("等待視頻尺寸..."),h=requestAnimationFrame(v);return}const x=a.value.getContext("2d");a.value.width=o.value.videoWidth,a.value.height=o.value.videoHeight,x.clearRect(0,0,a.value.width,a.value.height);try{console.log("開始檢測人臉...");const w=new ep({inputSize:640,scoreThreshold:.3});console.log("檢測選項:",JSON.stringify(w));const _=await t_(o.value,w);if(console.log(`檢測到 ${_.length} 張人臉`),_&&_.length>0){console.log("檢測到人臉:",_);const k=_.reduce((V,z)=>{var Y,ne;const H=V.box||((Y=V.detection)==null?void 0:Y.box),L=z.box||((ne=z.detection)==null?void 0:ne.box);if(!H||!L)return console.warn("無效的檢測結果:",{prev:V,current:z}),z;const B=H.width*H.height,K=L.width*L.height;return B>K?V:z}),S=k.box||((y=k.detection)==null?void 0:y.box);if(!S){console.warn("無法獲取人臉框:",k),u.value=null;return}console.log("繪製人臉框:",S),x.strokeStyle="#10B981",x.lineWidth=3;const I=S.x,E=S.y,F=S.width,N=S.height,U=10;x.beginPath(),x.moveTo(I+U,E),x.lineTo(I+F-U,E),x.quadraticCurveTo(I+F,E,I+F,E+U),x.lineTo(I+F,E+N-U),x.quadraticCurveTo(I+F,E+N,I+F-U,E+N),x.lineTo(I+U,E+N),x.quadraticCurveTo(I,E+N,I,E+N-U),x.lineTo(I,E+U),x.quadraticCurveTo(I,E,I+U,E),x.closePath(),x.stroke(),u.value={detection:k,box:S}}else u.value=null}catch(w){console.error("人臉檢測錯誤:",w)}h=requestAnimationFrame(v)}async function m(){if(!t.value){b("請先輸入姓名");return}if(!u.value){b("未檢測到人臉");return}if(f.value.includes(l.value.name)){const x=c.value.find(y=>!f.value.includes(y.name));x&&(l.value=x);return}s.value=!0;try{i.value.width=o.value.videoWidth,i.value.height=o.value.videoHeight,i.value.getContext("2d").drawImage(o.value,0,0,i.value.width,i.value.height);const y=u.value.detection.box,w=document.createElement("canvas");w.width=y.width,w.height=y.height,w.getContext("2d").drawImage(i.value,y.x,y.y,y.width,y.height,0,0,y.width,y.height);const k=w.toDataURL("image/jpeg"),I=await(await fetch("https://082f-203-64-95-146.ngrok-free.app/upload",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:t.value,image:k,angle:l.value.name,face_box:{x:y.x,y:y.y,width:y.width,height:y.height}})})).json();if(I.success){f.value.includes(l.value.name)||f.value.push(l.value.name);const E=c.value.find(F=>!f.value.includes(F.name));E?l.value=E:r.value=!0}else throw new Error(I.message||"上傳失敗")}catch(x){console.error("上傳失敗:",x),b("上傳失敗: "+(x.message||"未知錯誤"))}finally{s.value=!1}}function g(){var x;(x=o.value)!=null&&x.srcObject&&o.value.srcObject.getTracks().forEach(y=>y.stop()),t.value="",e.value="",f.value=[],l.value=c.value[0],r.value=!1,a.value&&a.value.getContext("2d").clearRect(0,0,a.value.width,a.value.height),setTimeout(async()=>{try{const y=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:1280},height:{ideal:720},facingMode:"user"}});o.value.srcObject=y}catch{b("無法重新初始化相機")}},300)}function b(x){const y=document.createElement("div");y.className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap",y.textContent=x,document.body.appendChild(y),setTimeout(()=>y.remove(),3e3)}return(x,y)=>(hr(),Dr("div",r_,[Ue("div",o_,[y[1]||(y[1]=Ue("div",{class:"text-sm font-medium"},"人臉建檔",-1)),Ue("div",i_,Mr(f.value.length)+"/"+Mr(c.value.length),1)]),Ue("div",a_,[Ue("div",s_,[Ue("div",u_,[Ue("video",{ref_key:"video",ref:o,autoplay:"",playsinline:"",muted:"",class:"w-full h-full object-cover"},null,512),Ue("canvas",{ref_key:"canvas",ref:i,class:"hidden"},null,512),Ue("canvas",{ref_key:"faceCanvas",ref:a,class:"absolute inset-0 w-full h-full pointer-events-none"},null,512)]),Ue("div",c_,[(hr(),Dr("svg",l_,[y[2]||(y[2]=Ue("circle",{cx:"50",cy:"50",r:"47",fill:"none",stroke:"rgba(255, 255, 255, 0.2)","stroke-width":"4"},null,-1)),Ue("circle",{cx:"50",cy:"50",r:"47",fill:"none",stroke:"#10B981","stroke-width":"4","stroke-linecap":"round","stroke-dasharray":`${f.value.length/c.value.length*295.31}, 295.31`,transform:"rotate(-90 50 50)",class:"transition-all duration-500"},null,8,f_)]))]),Ue("div",h_," 進度: "+Mr(f.value.length)+" / "+Mr(c.value.length),1)]),Ue("div",d_,[Ue("button",{onClick:m,disabled:!t.value||s.value,class:Ro(["bg-green-500 hover:bg-green-600 text-white py-4 rounded-full font-medium text-lg flex items-center justify-center gap-2 transition-all",{"opacity-50":!t.value||s.value}])},[s.value?(hr(),Dr("span",m_,y[3]||(y[3]=[Ue("span",{class:"inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"},null,-1),Vf(" 處理中... ")]))):(hr(),Dr("span",v_,"拍攝 "+Mr(l.value.label),1))],10,p_),Ue("button",{onClick:g,class:Ro(["text-white/70 py-4 text-sm",{"opacity-50":f.value.length===0}]),disabled:f.value.length===0}," 重新開始 ",10,g_)])]),t.value?wc("",!0):(hr(),Dr("div",y_,[Ue("div",x_,[y[4]||(y[4]=Ue("h2",{class:"text-xl font-semibold mb-2"},"設置您的個人資料",-1)),y[5]||(y[5]=Ue("p",{class:"text-gray-400 mb-6"},"請輸入您的姓名以開始人臉建檔",-1)),Ue("div",b_,[rv(Ue("input",{"onUpdate:modelValue":y[0]||(y[0]=w=>e.value=w),type:"text",placeholder:"您的姓名",class:"w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500",onKeyup:Dm(d,["enter"]),autofocus:""},null,544),[[km,e.value]])]),Ue("button",{onClick:d,disabled:!e.value,class:"w-full bg-blue-500 text-white py-3 rounded-full font-medium disabled:opacity-50"}," 開始建檔 ",8,w_)])])),r.value?(hr(),Dr("div",__,[Ue("div",{class:"text-center p-6"},[y[6]||(y[6]=Yv('<div class="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"><svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div><h2 class="text-2xl font-semibold mb-2">建檔完成！</h2><p class="text-gray-400 mb-6">已成功建立您的人臉識別資料</p>',3)),Ue("button",{onClick:g,class:"bg-blue-500 text-white py-3 px-8 rounded-full font-medium"}," 完成 ")])])):wc("",!0)]))}};Fm(C_).mount("#app")});export default E_();
