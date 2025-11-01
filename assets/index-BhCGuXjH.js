(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function CA(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var NA={exports:{}},mf={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yO=Symbol.for("react.transitional.element"),vO=Symbol.for("react.fragment");function DA(t,e,n){var r=null;if(n!==void 0&&(r=""+n),e.key!==void 0&&(r=""+e.key),"key"in e){n={};for(var i in e)i!=="key"&&(n[i]=e[i])}else n=e;return e=n.ref,{$$typeof:yO,type:t,key:r,ref:e!==void 0?e:null,props:n}}mf.Fragment=vO;mf.jsx=DA;mf.jsxs=DA;NA.exports=mf;var E=NA.exports,xA={exports:{}},ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I_=Symbol.for("react.transitional.element"),EO=Symbol.for("react.portal"),TO=Symbol.for("react.fragment"),IO=Symbol.for("react.strict_mode"),bO=Symbol.for("react.profiler"),AO=Symbol.for("react.consumer"),wO=Symbol.for("react.context"),SO=Symbol.for("react.forward_ref"),RO=Symbol.for("react.suspense"),CO=Symbol.for("react.memo"),OA=Symbol.for("react.lazy"),NO=Symbol.for("react.activity"),$E=Symbol.iterator;function DO(t){return t===null||typeof t!="object"?null:(t=$E&&t[$E]||t["@@iterator"],typeof t=="function"?t:null)}var PA={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},MA=Object.assign,kA={};function Jo(t,e,n){this.props=t,this.context=e,this.refs=kA,this.updater=n||PA}Jo.prototype.isReactComponent={};Jo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Jo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function VA(){}VA.prototype=Jo.prototype;function b_(t,e,n){this.props=t,this.context=e,this.refs=kA,this.updater=n||PA}var A_=b_.prototype=new VA;A_.constructor=b_;MA(A_,Jo.prototype);A_.isPureReactComponent=!0;var QE=Array.isArray;function qp(){}var Ue={H:null,A:null,T:null,S:null},LA=Object.prototype.hasOwnProperty;function w_(t,e,n){var r=n.ref;return{$$typeof:I_,type:t,key:e,ref:r!==void 0?r:null,props:n}}function xO(t,e){return w_(t.type,e,t.props)}function S_(t){return typeof t=="object"&&t!==null&&t.$$typeof===I_}function OO(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var WE=/\/+/g;function Lm(t,e){return typeof t=="object"&&t!==null&&t.key!=null?OO(""+t.key):e.toString(36)}function PO(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(qp,qp):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function za(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"bigint":case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case I_:case EO:a=!0;break;case OA:return a=t._init,za(a(t._payload),e,n,r,i)}}if(a)return i=i(t),a=r===""?"."+Lm(t,0):r,QE(i)?(n="",a!=null&&(n=a.replace(WE,"$&/")+"/"),za(i,e,n,"",function(c){return c})):i!=null&&(S_(i)&&(i=xO(i,n+(i.key==null||t&&t.key===i.key?"":(""+i.key).replace(WE,"$&/")+"/")+a)),e.push(i)),1;a=0;var o=r===""?".":r+":";if(QE(t))for(var l=0;l<t.length;l++)r=t[l],s=o+Lm(r,l),a+=za(r,e,n,s,i);else if(l=DO(t),typeof l=="function")for(t=l.call(t),l=0;!(r=t.next()).done;)r=r.value,s=o+Lm(r,l++),a+=za(r,e,n,s,i);else if(s==="object"){if(typeof t.then=="function")return za(PO(t),e,n,r,i);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return a}function ph(t,e,n){if(t==null)return t;var r=[],i=0;return za(t,r,"","",function(s){return e.call(n,s,i++)}),r}function MO(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var XE=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},kO={map:ph,forEach:function(t,e,n){ph(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ph(t,function(){e++}),e},toArray:function(t){return ph(t,function(e){return e})||[]},only:function(t){if(!S_(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Activity=NO;ie.Children=kO;ie.Component=Jo;ie.Fragment=TO;ie.Profiler=bO;ie.PureComponent=b_;ie.StrictMode=IO;ie.Suspense=RO;ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ue;ie.__COMPILER_RUNTIME={__proto__:null,c:function(t){return Ue.H.useMemoCache(t)}};ie.cache=function(t){return function(){return t.apply(null,arguments)}};ie.cacheSignal=function(){return null};ie.cloneElement=function(t,e,n){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var r=MA({},t.props),i=t.key;if(e!=null)for(s in e.key!==void 0&&(i=""+e.key),e)!LA.call(e,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&e.ref===void 0||(r[s]=e[s]);var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){for(var a=Array(s),o=0;o<s;o++)a[o]=arguments[o+2];r.children=a}return w_(t.type,i,r)};ie.createContext=function(t){return t={$$typeof:wO,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:AO,_context:t},t};ie.createElement=function(t,e,n){var r,i={},s=null;if(e!=null)for(r in e.key!==void 0&&(s=""+e.key),e)LA.call(e,r)&&r!=="key"&&r!=="__self"&&r!=="__source"&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var o=Array(a),l=0;l<a;l++)o[l]=arguments[l+2];i.children=o}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return w_(t,s,i)};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:SO,render:t}};ie.isValidElement=S_;ie.lazy=function(t){return{$$typeof:OA,_payload:{_status:-1,_result:t},_init:MO}};ie.memo=function(t,e){return{$$typeof:CO,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=Ue.T,n={};Ue.T=n;try{var r=t(),i=Ue.S;i!==null&&i(n,r),typeof r=="object"&&r!==null&&typeof r.then=="function"&&r.then(qp,XE)}catch(s){XE(s)}finally{e!==null&&n.types!==null&&(e.types=n.types),Ue.T=e}};ie.unstable_useCacheRefresh=function(){return Ue.H.useCacheRefresh()};ie.use=function(t){return Ue.H.use(t)};ie.useActionState=function(t,e,n){return Ue.H.useActionState(t,e,n)};ie.useCallback=function(t,e){return Ue.H.useCallback(t,e)};ie.useContext=function(t){return Ue.H.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t,e){return Ue.H.useDeferredValue(t,e)};ie.useEffect=function(t,e){return Ue.H.useEffect(t,e)};ie.useEffectEvent=function(t){return Ue.H.useEffectEvent(t)};ie.useId=function(){return Ue.H.useId()};ie.useImperativeHandle=function(t,e,n){return Ue.H.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return Ue.H.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return Ue.H.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return Ue.H.useMemo(t,e)};ie.useOptimistic=function(t,e){return Ue.H.useOptimistic(t,e)};ie.useReducer=function(t,e,n){return Ue.H.useReducer(t,e,n)};ie.useRef=function(t){return Ue.H.useRef(t)};ie.useState=function(t){return Ue.H.useState(t)};ie.useSyncExternalStore=function(t,e,n){return Ue.H.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return Ue.H.useTransition()};ie.version="19.2.0";xA.exports=ie;var $=xA.exports;const VO=CA($);var UA={exports:{}},pf={},BA={exports:{}},FA={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(K,ne){var ee=K.length;K.push(ne);e:for(;0<ee;){var Re=ee-1>>>1,De=K[Re];if(0<i(De,ne))K[Re]=ne,K[ee]=De,ee=Re;else break e}}function n(K){return K.length===0?null:K[0]}function r(K){if(K.length===0)return null;var ne=K[0],ee=K.pop();if(ee!==ne){K[0]=ee;e:for(var Re=0,De=K.length,yi=De>>>1;Re<yi;){var Tt=2*(Re+1)-1,We=K[Tt],Vn=Tt+1,an=K[Vn];if(0>i(We,ee))Vn<De&&0>i(an,We)?(K[Re]=an,K[Vn]=ee,Re=Vn):(K[Re]=We,K[Tt]=ee,Re=Tt);else if(Vn<De&&0>i(an,ee))K[Re]=an,K[Vn]=ee,Re=Vn;else break e}}return ne}function i(K,ne){var ee=K.sortIndex-ne.sortIndex;return ee!==0?ee:K.id-ne.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],h=1,f=null,p=3,g=!1,S=!1,N=!1,P=!1,T=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;function D(K){for(var ne=n(c);ne!==null;){if(ne.callback===null)r(c);else if(ne.startTime<=K)r(c),ne.sortIndex=ne.expirationTime,e(l,ne);else break;ne=n(c)}}function U(K){if(N=!1,D(K),!S)if(n(l)!==null)S=!0,j||(j=!0,x());else{var ne=n(c);ne!==null&&Kt(U,ne.startTime-K)}}var j=!1,I=-1,y=5,b=-1;function w(){return P?!0:!(t.unstable_now()-b<y)}function C(){if(P=!1,j){var K=t.unstable_now();b=K;var ne=!0;try{e:{S=!1,N&&(N=!1,v(I),I=-1),g=!0;var ee=p;try{t:{for(D(K),f=n(l);f!==null&&!(f.expirationTime>K&&w());){var Re=f.callback;if(typeof Re=="function"){f.callback=null,p=f.priorityLevel;var De=Re(f.expirationTime<=K);if(K=t.unstable_now(),typeof De=="function"){f.callback=De,D(K),ne=!0;break t}f===n(l)&&r(l),D(K)}else r(l);f=n(l)}if(f!==null)ne=!0;else{var yi=n(c);yi!==null&&Kt(U,yi.startTime-K),ne=!1}}break e}finally{f=null,p=ee,g=!1}ne=void 0}}finally{ne?x():j=!1}}}var x;if(typeof A=="function")x=function(){A(C)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,vn=R.port2;R.port1.onmessage=C,x=function(){vn.postMessage(null)}}else x=function(){T(C,0)};function Kt(K,ne){I=T(function(){K(t.unstable_now())},ne)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(K){K.callback=null},t.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<K?Math.floor(1e3/K):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_next=function(K){switch(p){case 1:case 2:case 3:var ne=3;break;default:ne=p}var ee=p;p=ne;try{return K()}finally{p=ee}},t.unstable_requestPaint=function(){P=!0},t.unstable_runWithPriority=function(K,ne){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var ee=p;p=K;try{return ne()}finally{p=ee}},t.unstable_scheduleCallback=function(K,ne,ee){var Re=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?Re+ee:Re):ee=Re,K){case 1:var De=-1;break;case 2:De=250;break;case 5:De=1073741823;break;case 4:De=1e4;break;default:De=5e3}return De=ee+De,K={id:h++,callback:ne,priorityLevel:K,startTime:ee,expirationTime:De,sortIndex:-1},ee>Re?(K.sortIndex=ee,e(c,K),n(l)===null&&K===n(c)&&(N?(v(I),I=-1):N=!0,Kt(U,ee-Re))):(K.sortIndex=De,e(l,K),S||g||(S=!0,j||(j=!0,x()))),K},t.unstable_shouldYield=w,t.unstable_wrapCallback=function(K){var ne=p;return function(){var ee=p;p=ne;try{return K.apply(this,arguments)}finally{p=ee}}}})(FA);BA.exports=FA;var LO=BA.exports,jA={exports:{}},sn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var UO=$;function zA(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ai(){}var en={d:{f:Ai,r:function(){throw Error(zA(522))},D:Ai,C:Ai,L:Ai,m:Ai,X:Ai,S:Ai,M:Ai},p:0,findDOMNode:null},BO=Symbol.for("react.portal");function FO(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:BO,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}var uu=UO.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function gf(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}sn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=en;sn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(zA(299));return FO(t,e,null,n)};sn.flushSync=function(t){var e=uu.T,n=en.p;try{if(uu.T=null,en.p=2,t)return t()}finally{uu.T=e,en.p=n,en.d.f()}};sn.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,en.d.C(t,e))};sn.prefetchDNS=function(t){typeof t=="string"&&en.d.D(t)};sn.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var n=e.as,r=gf(n,e.crossOrigin),i=typeof e.integrity=="string"?e.integrity:void 0,s=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;n==="style"?en.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:s}):n==="script"&&en.d.X(t,{crossOrigin:r,integrity:i,fetchPriority:s,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};sn.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var n=gf(e.as,e.crossOrigin);en.d.M(t,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&en.d.M(t)};sn.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var n=e.as,r=gf(n,e.crossOrigin);en.d.L(t,n,{crossOrigin:r,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};sn.preloadModule=function(t,e){if(typeof t=="string")if(e){var n=gf(e.as,e.crossOrigin);en.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else en.d.m(t)};sn.requestFormReset=function(t){en.d.r(t)};sn.unstable_batchedUpdates=function(t,e){return t(e)};sn.useFormState=function(t,e,n){return uu.H.useFormState(t,e,n)};sn.useFormStatus=function(){return uu.H.useHostTransitionStatus()};sn.version="19.2.0";function qA(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qA)}catch(t){console.error(t)}}qA(),jA.exports=sn;var _f=jA.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vt=LO,GA=$,jO=_f;function L(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function HA(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function _c(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function KA(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function YA(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function JE(t){if(_c(t)!==t)throw Error(L(188))}function zO(t){var e=t.alternate;if(!e){if(e=_c(t),e===null)throw Error(L(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return JE(i),t;if(s===r)return JE(i),e;s=s.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,o=i.child;o;){if(o===n){a=!0,n=i,r=s;break}if(o===r){a=!0,r=i,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,r=i;break}if(o===r){a=!0,r=s,n=i;break}o=o.sibling}if(!a)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?t:e}function $A(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=$A(t),e!==null)return e;t=t.sibling}return null}var Be=Object.assign,qO=Symbol.for("react.element"),gh=Symbol.for("react.transitional.element"),Jl=Symbol.for("react.portal"),Wa=Symbol.for("react.fragment"),QA=Symbol.for("react.strict_mode"),Gp=Symbol.for("react.profiler"),WA=Symbol.for("react.consumer"),zr=Symbol.for("react.context"),R_=Symbol.for("react.forward_ref"),Hp=Symbol.for("react.suspense"),Kp=Symbol.for("react.suspense_list"),C_=Symbol.for("react.memo"),Ni=Symbol.for("react.lazy"),Yp=Symbol.for("react.activity"),GO=Symbol.for("react.memo_cache_sentinel"),ZE=Symbol.iterator;function Vl(t){return t===null||typeof t!="object"?null:(t=ZE&&t[ZE]||t["@@iterator"],typeof t=="function"?t:null)}var HO=Symbol.for("react.client.reference");function $p(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===HO?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Wa:return"Fragment";case Gp:return"Profiler";case QA:return"StrictMode";case Hp:return"Suspense";case Kp:return"SuspenseList";case Yp:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Jl:return"Portal";case zr:return t.displayName||"Context";case WA:return(t._context.displayName||"Context")+".Consumer";case R_:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case C_:return e=t.displayName||null,e!==null?e:$p(t.type)||"Memo";case Ni:e=t._payload,t=t._init;try{return $p(t(e))}catch{}}return null}var Zl=Array.isArray,te=GA.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ve=jO.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Gs={pending:!1,data:null,method:null,action:null},Qp=[],Xa=-1;function Cr(t){return{current:t}}function Rt(t){0>Xa||(t.current=Qp[Xa],Qp[Xa]=null,Xa--)}function Oe(t,e){Xa++,Qp[Xa]=t.current,t.current=e}var Er=Cr(null),Pu=Cr(null),Gi=Cr(null),gd=Cr(null);function _d(t,e){switch(Oe(Gi,e),Oe(Pu,t),Oe(Er,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?s0(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=s0(e),t=gR(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Rt(Er),Oe(Er,t)}function Ao(){Rt(Er),Rt(Pu),Rt(Gi)}function Wp(t){t.memoizedState!==null&&Oe(gd,t);var e=Er.current,n=gR(e,t.type);e!==n&&(Oe(Pu,t),Oe(Er,n))}function yd(t){Pu.current===t&&(Rt(Er),Rt(Pu)),gd.current===t&&(Rt(gd),Gu._currentValue=Gs)}var Um,eT;function Ds(t){if(Um===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Um=e&&e[1]||"",eT=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Um+t+eT}var Bm=!1;function Fm(t,e){if(!t||Bm)return"";Bm=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(e){var f=function(){throw Error()};if(Object.defineProperty(f.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(f,[])}catch(g){var p=g}Reflect.construct(t,[],f)}else{try{f.call()}catch(g){p=g}t.call(f.prototype)}}else{try{throw Error()}catch(g){p=g}(f=t())&&typeof f.catch=="function"&&f.catch(function(){})}}catch(g){if(g&&p&&typeof g.stack=="string")return[g.stack,p.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=r.DetermineComponentFrameRoot(),a=s[0],o=s[1];if(a&&o){var l=a.split(`
`),c=o.split(`
`);for(i=r=0;r<l.length&&!l[r].includes("DetermineComponentFrameRoot");)r++;for(;i<c.length&&!c[i].includes("DetermineComponentFrameRoot");)i++;if(r===l.length||i===c.length)for(r=l.length-1,i=c.length-1;1<=r&&0<=i&&l[r]!==c[i];)i--;for(;1<=r&&0<=i;r--,i--)if(l[r]!==c[i]){if(r!==1||i!==1)do if(r--,i--,0>i||l[r]!==c[i]){var h=`
`+l[r].replace(" at new "," at ");return t.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",t.displayName)),h}while(1<=r&&0<=i);break}}}finally{Bm=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?Ds(n):""}function KO(t,e){switch(t.tag){case 26:case 27:case 5:return Ds(t.type);case 16:return Ds("Lazy");case 13:return t.child!==e&&e!==null?Ds("Suspense Fallback"):Ds("Suspense");case 19:return Ds("SuspenseList");case 0:case 15:return Fm(t.type,!1);case 11:return Fm(t.type.render,!1);case 1:return Fm(t.type,!0);case 31:return Ds("Activity");default:return""}}function tT(t){try{var e="",n=null;do e+=KO(t,n),n=t,t=t.return;while(t);return e}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Xp=Object.prototype.hasOwnProperty,N_=vt.unstable_scheduleCallback,jm=vt.unstable_cancelCallback,YO=vt.unstable_shouldYield,$O=vt.unstable_requestPaint,Cn=vt.unstable_now,QO=vt.unstable_getCurrentPriorityLevel,XA=vt.unstable_ImmediatePriority,JA=vt.unstable_UserBlockingPriority,vd=vt.unstable_NormalPriority,WO=vt.unstable_LowPriority,ZA=vt.unstable_IdlePriority,XO=vt.log,JO=vt.unstable_setDisableYieldValue,yc=null,Nn=null;function Li(t){if(typeof XO=="function"&&JO(t),Nn&&typeof Nn.setStrictMode=="function")try{Nn.setStrictMode(yc,t)}catch{}}var Dn=Math.clz32?Math.clz32:t1,ZO=Math.log,e1=Math.LN2;function t1(t){return t>>>=0,t===0?32:31-(ZO(t)/e1|0)|0}var _h=256,yh=262144,vh=4194304;function xs(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function yf(t,e,n){var r=t.pendingLanes;if(r===0)return 0;var i=0,s=t.suspendedLanes,a=t.pingedLanes;t=t.warmLanes;var o=r&134217727;return o!==0?(r=o&~s,r!==0?i=xs(r):(a&=o,a!==0?i=xs(a):n||(n=o&~t,n!==0&&(i=xs(n))))):(o=r&~s,o!==0?i=xs(o):a!==0?i=xs(a):n||(n=r&~t,n!==0&&(i=xs(n)))),i===0?0:e!==0&&e!==i&&!(e&s)&&(s=i&-i,n=e&-e,s>=n||s===32&&(n&4194048)!==0)?e:i}function vc(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function n1(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ew(){var t=vh;return vh<<=1,!(vh&62914560)&&(vh=4194304),t}function zm(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ec(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function r1(t,e,n,r,i,s){var a=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var o=t.entanglements,l=t.expirationTimes,c=t.hiddenUpdates;for(n=a&~n;0<n;){var h=31-Dn(n),f=1<<h;o[h]=0,l[h]=-1;var p=c[h];if(p!==null)for(c[h]=null,h=0;h<p.length;h++){var g=p[h];g!==null&&(g.lane&=-536870913)}n&=~f}r!==0&&tw(t,r,0),s!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=s&~(a&~e))}function tw(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var r=31-Dn(e);t.entangledLanes|=e,t.entanglements[r]=t.entanglements[r]|1073741824|n&261930}function nw(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Dn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}function rw(t,e){var n=e&-e;return n=n&42?1:D_(n),n&(t.suspendedLanes|e)?0:n}function D_(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function x_(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function iw(){var t=ve.p;return t!==0?t:(t=window.event,t===void 0?32:RR(t.type))}function nT(t,e){var n=ve.p;try{return ve.p=t,e()}finally{ve.p=n}}var ps=Math.random().toString(36).slice(2),Ot="__reactFiber$"+ps,_n="__reactProps$"+ps,Zo="__reactContainer$"+ps,Jp="__reactEvents$"+ps,i1="__reactListeners$"+ps,s1="__reactHandles$"+ps,rT="__reactResources$"+ps,Tc="__reactMarker$"+ps;function O_(t){delete t[Ot],delete t[_n],delete t[Jp],delete t[i1],delete t[s1]}function Ja(t){var e=t[Ot];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Zo]||n[Ot]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=c0(t);t!==null;){if(n=t[Ot])return n;t=c0(t)}return e}t=n,n=t.parentNode}return null}function el(t){if(t=t[Ot]||t[Zo]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function eu(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(L(33))}function uo(t){var e=t[rT];return e||(e=t[rT]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function St(t){t[Tc]=!0}var sw=new Set,aw={};function _a(t,e){wo(t,e),wo(t+"Capture",e)}function wo(t,e){for(aw[t]=e,t=0;t<e.length;t++)sw.add(e[t])}var a1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),iT={},sT={};function o1(t){return Xp.call(sT,t)?!0:Xp.call(iT,t)?!1:a1.test(t)?sT[t]=!0:(iT[t]=!0,!1)}function zh(t,e,n){if(o1(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var r=e.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function Eh(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function Mr(t,e,n,r){if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+r)}}function Bn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ow(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function l1(t,e,n){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,s=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(a){n=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Zp(t){if(!t._valueTracker){var e=ow(t)?"checked":"value";t._valueTracker=l1(t,e,""+t[e])}}function lw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=ow(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ed(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var u1=/[\n"\\]/g;function zn(t){return t.replace(u1,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function eg(t,e,n,r,i,s,a,o){t.name="",a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"?t.type=a:t.removeAttribute("type"),e!=null?a==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Bn(e)):t.value!==""+Bn(e)&&(t.value=""+Bn(e)):a!=="submit"&&a!=="reset"||t.removeAttribute("value"),e!=null?tg(t,a,Bn(e)):n!=null?tg(t,a,Bn(n)):r!=null&&t.removeAttribute("value"),i==null&&s!=null&&(t.defaultChecked=!!s),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+Bn(o):t.removeAttribute("name")}function uw(t,e,n,r,i,s,a,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.type=s),e!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||e!=null)){Zp(t);return}n=n!=null?""+Bn(n):"",e=e!=null?""+Bn(e):n,o||e===t.value||(t.value=e),t.defaultValue=e}r=r??i,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=o?t.checked:!!r,t.defaultChecked=!!r,a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(t.name=a),Zp(t)}function tg(t,e,n){e==="number"&&Ed(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function co(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Bn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function cw(t,e,n){if(e!=null&&(e=""+Bn(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+Bn(n):""}function hw(t,e,n,r){if(e==null){if(r!=null){if(n!=null)throw Error(L(92));if(Zl(r)){if(1<r.length)throw Error(L(93));r=r[0]}n=r}n==null&&(n=""),e=n}n=Bn(e),t.defaultValue=n,r=t.textContent,r===n&&r!==""&&r!==null&&(t.value=r),Zp(t)}function So(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var c1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function aT(t,e,n){var r=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?r?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":r?t.setProperty(e,n):typeof n!="number"||n===0||c1.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function dw(t,e,n){if(e!=null&&typeof e!="object")throw Error(L(62));if(t=t.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||e!=null&&e.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var i in e)r=e[i],e.hasOwnProperty(i)&&n[i]!==r&&aT(t,i,r)}else for(var s in e)e.hasOwnProperty(s)&&aT(t,s,e[s])}function P_(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var h1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),d1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qh(t){return d1.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function qr(){}var ng=null;function M_(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Za=null,ho=null;function oT(t){var e=el(t);if(e&&(t=e.stateNode)){var n=t[_n]||null;e:switch(t=e.stateNode,e.type){case"input":if(eg(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+zn(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=r[_n]||null;if(!i)throw Error(L(90));eg(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<n.length;e++)r=n[e],r.form===t.form&&lw(r)}break e;case"textarea":cw(t,n.value,n.defaultValue);break e;case"select":e=n.value,e!=null&&co(t,!!n.multiple,e,!1)}}}var qm=!1;function fw(t,e,n){if(qm)return t(e,n);qm=!0;try{var r=t(e);return r}finally{if(qm=!1,(Za!==null||ho!==null)&&(Df(),Za&&(e=Za,t=ho,ho=Za=null,oT(e),t)))for(e=0;e<t.length;e++)oT(t[e])}}function Mu(t,e){var n=t.stateNode;if(n===null)return null;var r=n[_n]||null;if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(L(231,e,typeof n));return n}var ei=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rg=!1;if(ei)try{var Ll={};Object.defineProperty(Ll,"passive",{get:function(){rg=!0}}),window.addEventListener("test",Ll,Ll),window.removeEventListener("test",Ll,Ll)}catch{rg=!1}var Ui=null,k_=null,Gh=null;function mw(){if(Gh)return Gh;var t,e=k_,n=e.length,r,i="value"in Ui?Ui.value:Ui.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var a=n-t;for(r=1;r<=a&&e[n-r]===i[s-r];r++);return Gh=i.slice(t,1<r?1-r:void 0)}function Hh(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Th(){return!0}function lT(){return!1}function yn(t){function e(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Th:lT,this.isPropagationStopped=lT,this}return Be(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Th)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Th)},persist:function(){},isPersistent:Th}),e}var ya={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vf=yn(ya),Ic=Be({},ya,{view:0,detail:0}),f1=yn(Ic),Gm,Hm,Ul,Ef=Be({},Ic,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:V_,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ul&&(Ul&&t.type==="mousemove"?(Gm=t.screenX-Ul.screenX,Hm=t.screenY-Ul.screenY):Hm=Gm=0,Ul=t),Gm)},movementY:function(t){return"movementY"in t?t.movementY:Hm}}),uT=yn(Ef),m1=Be({},Ef,{dataTransfer:0}),p1=yn(m1),g1=Be({},Ic,{relatedTarget:0}),Km=yn(g1),_1=Be({},ya,{animationName:0,elapsedTime:0,pseudoElement:0}),y1=yn(_1),v1=Be({},ya,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),E1=yn(v1),T1=Be({},ya,{data:0}),cT=yn(T1),I1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},b1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},A1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function w1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=A1[t])?!!e[t]:!1}function V_(){return w1}var S1=Be({},Ic,{key:function(t){if(t.key){var e=I1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Hh(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?b1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:V_,charCode:function(t){return t.type==="keypress"?Hh(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Hh(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),R1=yn(S1),C1=Be({},Ef,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hT=yn(C1),N1=Be({},Ic,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:V_}),D1=yn(N1),x1=Be({},ya,{propertyName:0,elapsedTime:0,pseudoElement:0}),O1=yn(x1),P1=Be({},Ef,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),M1=yn(P1),k1=Be({},ya,{newState:0,oldState:0}),V1=yn(k1),L1=[9,13,27,32],L_=ei&&"CompositionEvent"in window,cu=null;ei&&"documentMode"in document&&(cu=document.documentMode);var U1=ei&&"TextEvent"in window&&!cu,pw=ei&&(!L_||cu&&8<cu&&11>=cu),dT=" ",fT=!1;function gw(t,e){switch(t){case"keyup":return L1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _w(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var eo=!1;function B1(t,e){switch(t){case"compositionend":return _w(e);case"keypress":return e.which!==32?null:(fT=!0,dT);case"textInput":return t=e.data,t===dT&&fT?null:t;default:return null}}function F1(t,e){if(eo)return t==="compositionend"||!L_&&gw(t,e)?(t=mw(),Gh=k_=Ui=null,eo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return pw&&e.locale!=="ko"?null:e.data;default:return null}}var j1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mT(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!j1[t.type]:e==="textarea"}function yw(t,e,n,r){Za?ho?ho.push(r):ho=[r]:Za=r,e=Ud(e,"onChange"),0<e.length&&(n=new vf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var hu=null,ku=null;function z1(t){fR(t,0)}function Tf(t){var e=eu(t);if(lw(e))return t}function pT(t,e){if(t==="change")return e}var vw=!1;if(ei){var Ym;if(ei){var $m="oninput"in document;if(!$m){var gT=document.createElement("div");gT.setAttribute("oninput","return;"),$m=typeof gT.oninput=="function"}Ym=$m}else Ym=!1;vw=Ym&&(!document.documentMode||9<document.documentMode)}function _T(){hu&&(hu.detachEvent("onpropertychange",Ew),ku=hu=null)}function Ew(t){if(t.propertyName==="value"&&Tf(ku)){var e=[];yw(e,ku,t,M_(t)),fw(z1,e)}}function q1(t,e,n){t==="focusin"?(_T(),hu=e,ku=n,hu.attachEvent("onpropertychange",Ew)):t==="focusout"&&_T()}function G1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Tf(ku)}function H1(t,e){if(t==="click")return Tf(e)}function K1(t,e){if(t==="input"||t==="change")return Tf(e)}function Y1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Pn=typeof Object.is=="function"?Object.is:Y1;function Vu(t,e){if(Pn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Xp.call(e,i)||!Pn(t[i],e[i]))return!1}return!0}function yT(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function vT(t,e){var n=yT(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yT(n)}}function Tw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Tw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Iw(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Ed(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ed(t.document)}return e}function U_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var $1=ei&&"documentMode"in document&&11>=document.documentMode,to=null,ig=null,du=null,sg=!1;function ET(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sg||to==null||to!==Ed(r)||(r=to,"selectionStart"in r&&U_(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),du&&Vu(du,r)||(du=r,r=Ud(ig,"onSelect"),0<r.length&&(e=new vf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=to)))}function Cs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var no={animationend:Cs("Animation","AnimationEnd"),animationiteration:Cs("Animation","AnimationIteration"),animationstart:Cs("Animation","AnimationStart"),transitionrun:Cs("Transition","TransitionRun"),transitionstart:Cs("Transition","TransitionStart"),transitioncancel:Cs("Transition","TransitionCancel"),transitionend:Cs("Transition","TransitionEnd")},Qm={},bw={};ei&&(bw=document.createElement("div").style,"AnimationEvent"in window||(delete no.animationend.animation,delete no.animationiteration.animation,delete no.animationstart.animation),"TransitionEvent"in window||delete no.transitionend.transition);function va(t){if(Qm[t])return Qm[t];if(!no[t])return t;var e=no[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in bw)return Qm[t]=e[n];return t}var Aw=va("animationend"),ww=va("animationiteration"),Sw=va("animationstart"),Q1=va("transitionrun"),W1=va("transitionstart"),X1=va("transitioncancel"),Rw=va("transitionend"),Cw=new Map,ag="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ag.push("scrollEnd");function sr(t,e){Cw.set(t,e),_a(e,[t])}var Td=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Un=[],ro=0,B_=0;function If(){for(var t=ro,e=B_=ro=0;e<t;){var n=Un[e];Un[e++]=null;var r=Un[e];Un[e++]=null;var i=Un[e];Un[e++]=null;var s=Un[e];if(Un[e++]=null,r!==null&&i!==null){var a=r.pending;a===null?i.next=i:(i.next=a.next,a.next=i),r.pending=i}s!==0&&Nw(n,i,s)}}function bf(t,e,n,r){Un[ro++]=t,Un[ro++]=e,Un[ro++]=n,Un[ro++]=r,B_|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function F_(t,e,n,r){return bf(t,e,n,r),Id(t)}function Ea(t,e){return bf(t,null,null,e),Id(t)}function Nw(t,e,n){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n);for(var i=!1,s=t.return;s!==null;)s.childLanes|=n,r=s.alternate,r!==null&&(r.childLanes|=n),s.tag===22&&(t=s.stateNode,t===null||t._visibility&1||(i=!0)),t=s,s=s.return;return t.tag===3?(s=t.stateNode,i&&e!==null&&(i=31-Dn(n),t=s.hiddenUpdates,r=t[i],r===null?t[i]=[e]:r.push(e),e.lane=n|536870912),s):null}function Id(t){if(50<Tu)throw Tu=0,Rg=null,Error(L(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var io={};function J1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(t,e,n,r){return new J1(t,e,n,r)}function j_(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Qr(t,e){var n=t.alternate;return n===null?(n=wn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function Dw(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Kh(t,e,n,r,i,s){var a=0;if(r=t,typeof t=="function")j_(t)&&(a=1);else if(typeof t=="string")a=r2(t,n,Er.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case Yp:return t=wn(31,n,e,i),t.elementType=Yp,t.lanes=s,t;case Wa:return Hs(n.children,i,s,e);case QA:a=8,i|=24;break;case Gp:return t=wn(12,n,e,i|2),t.elementType=Gp,t.lanes=s,t;case Hp:return t=wn(13,n,e,i),t.elementType=Hp,t.lanes=s,t;case Kp:return t=wn(19,n,e,i),t.elementType=Kp,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case zr:a=10;break e;case WA:a=9;break e;case R_:a=11;break e;case C_:a=14;break e;case Ni:a=16,r=null;break e}a=29,n=Error(L(130,t===null?"null":typeof t,"")),r=null}return e=wn(a,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Hs(t,e,n,r){return t=wn(7,t,r,e),t.lanes=n,t}function Wm(t,e,n){return t=wn(6,t,null,e),t.lanes=n,t}function xw(t){var e=wn(18,null,null,0);return e.stateNode=t,e}function Xm(t,e,n){return e=wn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var TT=new WeakMap;function qn(t,e){if(typeof t=="object"&&t!==null){var n=TT.get(t);return n!==void 0?n:(e={value:t,source:e,stack:tT(e)},TT.set(t,e),e)}return{value:t,source:e,stack:tT(e)}}var so=[],ao=0,bd=null,Lu=0,Fn=[],jn=0,ts=null,mr=1,pr="";function Br(t,e){so[ao++]=Lu,so[ao++]=bd,bd=t,Lu=e}function Ow(t,e,n){Fn[jn++]=mr,Fn[jn++]=pr,Fn[jn++]=ts,ts=t;var r=mr;t=pr;var i=32-Dn(r)-1;r&=~(1<<i),n+=1;var s=32-Dn(e)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,mr=1<<32-Dn(e)+i|n<<i|r,pr=s+t}else mr=1<<s|n<<i|r,pr=t}function z_(t){t.return!==null&&(Br(t,1),Ow(t,1,0))}function q_(t){for(;t===bd;)bd=so[--ao],so[ao]=null,Lu=so[--ao],so[ao]=null;for(;t===ts;)ts=Fn[--jn],Fn[jn]=null,pr=Fn[--jn],Fn[jn]=null,mr=Fn[--jn],Fn[jn]=null}function Pw(t,e){Fn[jn++]=mr,Fn[jn++]=pr,Fn[jn++]=ts,mr=e.id,pr=e.overflow,ts=t}var Pt=null,Ve=null,me=!1,Hi=null,Gn=!1,og=Error(L(519));function ns(t){var e=Error(L(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Uu(qn(e,t)),og}function IT(t){var e=t.stateNode,n=t.type,r=t.memoizedProps;switch(e[Ot]=t,e[_n]=r,n){case"dialog":le("cancel",e),le("close",e);break;case"iframe":case"object":case"embed":le("load",e);break;case"video":case"audio":for(n=0;n<zu.length;n++)le(zu[n],e);break;case"source":le("error",e);break;case"img":case"image":case"link":le("error",e),le("load",e);break;case"details":le("toggle",e);break;case"input":le("invalid",e),uw(e,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":le("invalid",e);break;case"textarea":le("invalid",e),hw(e,r.value,r.defaultValue,r.children)}n=r.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||r.suppressHydrationWarning===!0||pR(e.textContent,n)?(r.popover!=null&&(le("beforetoggle",e),le("toggle",e)),r.onScroll!=null&&le("scroll",e),r.onScrollEnd!=null&&le("scrollend",e),r.onClick!=null&&(e.onclick=qr),e=!0):e=!1,e||ns(t,!0)}function bT(t){for(Pt=t.return;Pt;)switch(Pt.tag){case 5:case 31:case 13:Gn=!1;return;case 27:case 3:Gn=!0;return;default:Pt=Pt.return}}function Ma(t){if(t!==Pt)return!1;if(!me)return bT(t),me=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Og(t.type,t.memoizedProps)),n=!n),n&&Ve&&ns(t),bT(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(L(317));Ve=u0(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(L(317));Ve=u0(t)}else e===27?(e=Ve,gs(t.type)?(t=Vg,Vg=null,Ve=t):Ve=e):Ve=Pt?$n(t.stateNode.nextSibling):null;return!0}function Zs(){Ve=Pt=null,me=!1}function Jm(){var t=Hi;return t!==null&&(cn===null?cn=t:cn.push.apply(cn,t),Hi=null),t}function Uu(t){Hi===null?Hi=[t]:Hi.push(t)}var lg=Cr(null),Ta=null,Gr=null;function xi(t,e,n){Oe(lg,e._currentValue),e._currentValue=n}function Wr(t){t._currentValue=lg.current,Rt(lg)}function ug(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function cg(t,e,n,r){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){var a=i.child;s=s.firstContext;e:for(;s!==null;){var o=s;s=i;for(var l=0;l<e.length;l++)if(o.context===e[l]){s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ug(s.return,n,t),r||(a=null);break e}s=o.next}}else if(i.tag===18){if(a=i.return,a===null)throw Error(L(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),ug(a,n,t),a=null}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}}function tl(t,e,n,r){t=null;for(var i=e,s=!1;i!==null;){if(!s){if(i.flags&524288)s=!0;else if(i.flags&262144)break}if(i.tag===10){var a=i.alternate;if(a===null)throw Error(L(387));if(a=a.memoizedProps,a!==null){var o=i.type;Pn(i.pendingProps.value,a.value)||(t!==null?t.push(o):t=[o])}}else if(i===gd.current){if(a=i.alternate,a===null)throw Error(L(387));a.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(Gu):t=[Gu])}i=i.return}t!==null&&cg(e,t,n,r),e.flags|=262144}function Ad(t){for(t=t.firstContext;t!==null;){if(!Pn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ea(t){Ta=t,Gr=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function kt(t){return Mw(Ta,t)}function Ih(t,e){return Ta===null&&ea(t),Mw(t,e)}function Mw(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Gr===null){if(t===null)throw Error(L(308));Gr=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Gr=Gr.next=e;return n}var Z1=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,r){t.push(r)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},eP=vt.unstable_scheduleCallback,tP=vt.unstable_NormalPriority,pt={$$typeof:zr,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function G_(){return{controller:new Z1,data:new Map,refCount:0}}function bc(t){t.refCount--,t.refCount===0&&eP(tP,function(){t.controller.abort()})}var fu=null,hg=0,Ro=0,fo=null;function nP(t,e){if(fu===null){var n=fu=[];hg=0,Ro=py(),fo={status:"pending",value:void 0,then:function(r){n.push(r)}}}return hg++,e.then(AT,AT),e}function AT(){if(--hg===0&&fu!==null){fo!==null&&(fo.status="fulfilled");var t=fu;fu=null,Ro=0,fo=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function rP(t,e){var n=[],r={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return t.then(function(){r.status="fulfilled",r.value=e;for(var i=0;i<n.length;i++)(0,n[i])(e)},function(i){for(r.status="rejected",r.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),r}var wT=te.S;te.S=function(t,e){$S=Cn(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&nP(t,e),wT!==null&&wT(t,e)};var Ks=Cr(null);function H_(){var t=Ks.current;return t!==null?t:Ne.pooledCache}function Yh(t,e){e===null?Oe(Ks,Ks.current):Oe(Ks,e.pool)}function kw(){var t=H_();return t===null?null:{parent:pt._currentValue,pool:t}}var nl=Error(L(460)),K_=Error(L(474)),Af=Error(L(542)),wd={then:function(){}};function ST(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Vw(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(qr,qr),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,CT(t),t;default:if(typeof e.status=="string")e.then(qr,qr);else{if(t=Ne,t!==null&&100<t.shellSuspendCounter)throw Error(L(482));t=e,t.status="pending",t.then(function(r){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=r}},function(r){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=r}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,CT(t),t}throw Ys=e,nl}}function Os(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ys=n,nl):n}}var Ys=null;function RT(){if(Ys===null)throw Error(L(459));var t=Ys;return Ys=null,t}function CT(t){if(t===nl||t===Af)throw Error(L(483))}var mo=null,Bu=0;function bh(t){var e=Bu;return Bu+=1,mo===null&&(mo=[]),Vw(mo,t,e)}function Bl(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Ah(t,e){throw e.$$typeof===qO?Error(L(525)):(t=Object.prototype.toString.call(e),Error(L(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Lw(t){function e(T,v){if(t){var A=T.deletions;A===null?(T.deletions=[v],T.flags|=16):A.push(v)}}function n(T,v){if(!t)return null;for(;v!==null;)e(T,v),v=v.sibling;return null}function r(T){for(var v=new Map;T!==null;)T.key!==null?v.set(T.key,T):v.set(T.index,T),T=T.sibling;return v}function i(T,v){return T=Qr(T,v),T.index=0,T.sibling=null,T}function s(T,v,A){return T.index=A,t?(A=T.alternate,A!==null?(A=A.index,A<v?(T.flags|=67108866,v):A):(T.flags|=67108866,v)):(T.flags|=1048576,v)}function a(T){return t&&T.alternate===null&&(T.flags|=67108866),T}function o(T,v,A,D){return v===null||v.tag!==6?(v=Wm(A,T.mode,D),v.return=T,v):(v=i(v,A),v.return=T,v)}function l(T,v,A,D){var U=A.type;return U===Wa?h(T,v,A.props.children,D,A.key):v!==null&&(v.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Ni&&Os(U)===v.type)?(v=i(v,A.props),Bl(v,A),v.return=T,v):(v=Kh(A.type,A.key,A.props,null,T.mode,D),Bl(v,A),v.return=T,v)}function c(T,v,A,D){return v===null||v.tag!==4||v.stateNode.containerInfo!==A.containerInfo||v.stateNode.implementation!==A.implementation?(v=Xm(A,T.mode,D),v.return=T,v):(v=i(v,A.children||[]),v.return=T,v)}function h(T,v,A,D,U){return v===null||v.tag!==7?(v=Hs(A,T.mode,D,U),v.return=T,v):(v=i(v,A),v.return=T,v)}function f(T,v,A){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Wm(""+v,T.mode,A),v.return=T,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case gh:return A=Kh(v.type,v.key,v.props,null,T.mode,A),Bl(A,v),A.return=T,A;case Jl:return v=Xm(v,T.mode,A),v.return=T,v;case Ni:return v=Os(v),f(T,v,A)}if(Zl(v)||Vl(v))return v=Hs(v,T.mode,A,null),v.return=T,v;if(typeof v.then=="function")return f(T,bh(v),A);if(v.$$typeof===zr)return f(T,Ih(T,v),A);Ah(T,v)}return null}function p(T,v,A,D){var U=v!==null?v.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return U!==null?null:o(T,v,""+A,D);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case gh:return A.key===U?l(T,v,A,D):null;case Jl:return A.key===U?c(T,v,A,D):null;case Ni:return A=Os(A),p(T,v,A,D)}if(Zl(A)||Vl(A))return U!==null?null:h(T,v,A,D,null);if(typeof A.then=="function")return p(T,v,bh(A),D);if(A.$$typeof===zr)return p(T,v,Ih(T,A),D);Ah(T,A)}return null}function g(T,v,A,D,U){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return T=T.get(A)||null,o(v,T,""+D,U);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case gh:return T=T.get(D.key===null?A:D.key)||null,l(v,T,D,U);case Jl:return T=T.get(D.key===null?A:D.key)||null,c(v,T,D,U);case Ni:return D=Os(D),g(T,v,A,D,U)}if(Zl(D)||Vl(D))return T=T.get(A)||null,h(v,T,D,U,null);if(typeof D.then=="function")return g(T,v,A,bh(D),U);if(D.$$typeof===zr)return g(T,v,A,Ih(v,D),U);Ah(v,D)}return null}function S(T,v,A,D){for(var U=null,j=null,I=v,y=v=0,b=null;I!==null&&y<A.length;y++){I.index>y?(b=I,I=null):b=I.sibling;var w=p(T,I,A[y],D);if(w===null){I===null&&(I=b);break}t&&I&&w.alternate===null&&e(T,I),v=s(w,v,y),j===null?U=w:j.sibling=w,j=w,I=b}if(y===A.length)return n(T,I),me&&Br(T,y),U;if(I===null){for(;y<A.length;y++)I=f(T,A[y],D),I!==null&&(v=s(I,v,y),j===null?U=I:j.sibling=I,j=I);return me&&Br(T,y),U}for(I=r(I);y<A.length;y++)b=g(I,T,y,A[y],D),b!==null&&(t&&b.alternate!==null&&I.delete(b.key===null?y:b.key),v=s(b,v,y),j===null?U=b:j.sibling=b,j=b);return t&&I.forEach(function(C){return e(T,C)}),me&&Br(T,y),U}function N(T,v,A,D){if(A==null)throw Error(L(151));for(var U=null,j=null,I=v,y=v=0,b=null,w=A.next();I!==null&&!w.done;y++,w=A.next()){I.index>y?(b=I,I=null):b=I.sibling;var C=p(T,I,w.value,D);if(C===null){I===null&&(I=b);break}t&&I&&C.alternate===null&&e(T,I),v=s(C,v,y),j===null?U=C:j.sibling=C,j=C,I=b}if(w.done)return n(T,I),me&&Br(T,y),U;if(I===null){for(;!w.done;y++,w=A.next())w=f(T,w.value,D),w!==null&&(v=s(w,v,y),j===null?U=w:j.sibling=w,j=w);return me&&Br(T,y),U}for(I=r(I);!w.done;y++,w=A.next())w=g(I,T,y,w.value,D),w!==null&&(t&&w.alternate!==null&&I.delete(w.key===null?y:w.key),v=s(w,v,y),j===null?U=w:j.sibling=w,j=w);return t&&I.forEach(function(x){return e(T,x)}),me&&Br(T,y),U}function P(T,v,A,D){if(typeof A=="object"&&A!==null&&A.type===Wa&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case gh:e:{for(var U=A.key;v!==null;){if(v.key===U){if(U=A.type,U===Wa){if(v.tag===7){n(T,v.sibling),D=i(v,A.props.children),D.return=T,T=D;break e}}else if(v.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Ni&&Os(U)===v.type){n(T,v.sibling),D=i(v,A.props),Bl(D,A),D.return=T,T=D;break e}n(T,v);break}else e(T,v);v=v.sibling}A.type===Wa?(D=Hs(A.props.children,T.mode,D,A.key),D.return=T,T=D):(D=Kh(A.type,A.key,A.props,null,T.mode,D),Bl(D,A),D.return=T,T=D)}return a(T);case Jl:e:{for(U=A.key;v!==null;){if(v.key===U)if(v.tag===4&&v.stateNode.containerInfo===A.containerInfo&&v.stateNode.implementation===A.implementation){n(T,v.sibling),D=i(v,A.children||[]),D.return=T,T=D;break e}else{n(T,v);break}else e(T,v);v=v.sibling}D=Xm(A,T.mode,D),D.return=T,T=D}return a(T);case Ni:return A=Os(A),P(T,v,A,D)}if(Zl(A))return S(T,v,A,D);if(Vl(A)){if(U=Vl(A),typeof U!="function")throw Error(L(150));return A=U.call(A),N(T,v,A,D)}if(typeof A.then=="function")return P(T,v,bh(A),D);if(A.$$typeof===zr)return P(T,v,Ih(T,A),D);Ah(T,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,v!==null&&v.tag===6?(n(T,v.sibling),D=i(v,A),D.return=T,T=D):(n(T,v),D=Wm(A,T.mode,D),D.return=T,T=D),a(T)):n(T,v)}return function(T,v,A,D){try{Bu=0;var U=P(T,v,A,D);return mo=null,U}catch(I){if(I===nl||I===Af)throw I;var j=wn(29,I,null,T.mode);return j.lanes=D,j.return=T,j}finally{}}}var ta=Lw(!0),Uw=Lw(!1),Di=!1;function Y_(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function dg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ki(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Yi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ye&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,e=Id(t),Nw(t,null,n),e}return bf(t,r,e,n),Id(t)}function mu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,nw(t,n)}}function Zm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,callbacks:r.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var fg=!1;function pu(){if(fg){var t=fo;if(t!==null)throw t}}function gu(t,e,n,r){fg=!1;var i=t.updateQueue;Di=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;a=0,h=c=l=null,o=s;do{var p=o.lane&-536870913,g=p!==o.lane;if(g?(de&p)===p:(r&p)===p){p!==0&&p===Ro&&(fg=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var S=t,N=o;p=e;var P=n;switch(N.tag){case 1:if(S=N.payload,typeof S=="function"){f=S.call(P,f,p);break e}f=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=N.payload,p=typeof S=="function"?S.call(P,f,p):S,p==null)break e;f=Be({},f,p);break e;case 2:Di=!0}}p=o.callback,p!==null&&(t.flags|=64,g&&(t.flags|=8192),g=i.callbacks,g===null?i.callbacks=[p]:g.push(p))}else g={lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=g,l=f):h=h.next=g,a|=p;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;g=o,o=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);h===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=h,s===null&&(i.shared.lanes=0),is|=a,t.lanes=a,t.memoizedState=f}}function Bw(t,e){if(typeof t!="function")throw Error(L(191,t));t.call(e)}function Fw(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)Bw(n[t],e)}var Co=Cr(null),Sd=Cr(0);function NT(t,e){t=ii,Oe(Sd,t),Oe(Co,e),ii=t|e.baseLanes}function mg(){Oe(Sd,ii),Oe(Co,Co.current)}function $_(){ii=Sd.current,Rt(Co),Rt(Sd)}var Mn=Cr(null),Yn=null;function Oi(t){var e=t.alternate;Oe(st,st.current&1),Oe(Mn,t),Yn===null&&(e===null||Co.current!==null||e.memoizedState!==null)&&(Yn=t)}function pg(t){Oe(st,st.current),Oe(Mn,t),Yn===null&&(Yn=t)}function jw(t){t.tag===22?(Oe(st,st.current),Oe(Mn,t),Yn===null&&(Yn=t)):Pi()}function Pi(){Oe(st,st.current),Oe(Mn,Mn.current)}function bn(t){Rt(Mn),Yn===t&&(Yn=null),Rt(st)}var st=Cr(0);function Rd(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Mg(n)||kg(n)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ti=0,se=null,we=null,ft=null,Cd=!1,po=!1,na=!1,Nd=0,Fu=0,go=null,iP=0;function Je(){throw Error(L(321))}function Q_(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Pn(t[n],e[n]))return!1;return!0}function W_(t,e,n,r,i,s){return ti=s,se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,te.H=t===null||t.memoizedState===null?yS:oy,na=!1,s=n(r,i),na=!1,po&&(s=qw(e,n,r,i)),zw(t),s}function zw(t){te.H=ju;var e=we!==null&&we.next!==null;if(ti=0,ft=we=se=null,Cd=!1,Fu=0,go=null,e)throw Error(L(300));t===null||gt||(t=t.dependencies,t!==null&&Ad(t)&&(gt=!0))}function qw(t,e,n,r){se=t;var i=0;do{if(po&&(go=null),Fu=0,po=!1,25<=i)throw Error(L(301));if(i+=1,ft=we=null,t.updateQueue!=null){var s=t.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}te.H=vS,s=e(n,r)}while(po);return s}function sP(){var t=te.H,e=t.useState()[0];return e=typeof e.then=="function"?Ac(e):e,t=t.useState()[0],(we!==null?we.memoizedState:null)!==t&&(se.flags|=1024),e}function X_(){var t=Nd!==0;return Nd=0,t}function J_(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function Z_(t){if(Cd){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Cd=!1}ti=0,ft=we=se=null,po=!1,Fu=Nd=0,go=null}function Wt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ft===null?se.memoizedState=ft=t:ft=ft.next=t,ft}function ot(){if(we===null){var t=se.alternate;t=t!==null?t.memoizedState:null}else t=we.next;var e=ft===null?se.memoizedState:ft.next;if(e!==null)ft=e,we=t;else{if(t===null)throw se.alternate===null?Error(L(467)):Error(L(310));we=t,t={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},ft===null?se.memoizedState=ft=t:ft=ft.next=t}return ft}function wf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ac(t){var e=Fu;return Fu+=1,go===null&&(go=[]),t=Vw(go,t,e),e=se,(ft===null?e.memoizedState:ft.next)===null&&(e=e.alternate,te.H=e===null||e.memoizedState===null?yS:oy),t}function Sf(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ac(t);if(t.$$typeof===zr)return kt(t)}throw Error(L(438,String(t)))}function ey(t){var e=null,n=se.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var r=se.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(e={data:r.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=wf(),se.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),r=0;r<t;r++)n[r]=GO;return e.index++,n}function ni(t,e){return typeof e=="function"?e(t):e}function $h(t){var e=ot();return ty(e,we,t)}function ty(t,e,n){var r=t.queue;if(r===null)throw Error(L(311));r.lastRenderedReducer=n;var i=t.baseQueue,s=r.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}e.baseQueue=i=s,r.pending=null}if(s=t.baseState,i===null)t.memoizedState=s;else{e=i.next;var o=a=null,l=null,c=e,h=!1;do{var f=c.lane&-536870913;if(f!==c.lane?(de&f)===f:(ti&f)===f){var p=c.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),f===Ro&&(h=!0);else if((ti&p)===p){c=c.next,p===Ro&&(h=!0);continue}else f={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,a=s):l=l.next=f,se.lanes|=p,is|=p;f=c.action,na&&n(s,f),s=c.hasEagerState?c.eagerState:n(s,f)}else p={lane:f,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,a=s):l=l.next=p,se.lanes|=f,is|=f;c=c.next}while(c!==null&&c!==e);if(l===null?a=s:l.next=o,!Pn(s,t.memoizedState)&&(gt=!0,h&&(n=fo,n!==null)))throw n;t.memoizedState=s,t.baseState=a,t.baseQueue=l,r.lastRenderedState=s}return i===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function ep(t){var e=ot(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=t(s,a.action),a=a.next;while(a!==i);Pn(s,e.memoizedState)||(gt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Gw(t,e,n){var r=se,i=ot(),s=me;if(s){if(n===void 0)throw Error(L(407));n=n()}else n=e();var a=!Pn((we||i).memoizedState,n);if(a&&(i.memoizedState=n,gt=!0),i=i.queue,ny(Yw.bind(null,r,i,t),[t]),i.getSnapshot!==e||a||ft!==null&&ft.memoizedState.tag&1){if(r.flags|=2048,No(9,{destroy:void 0},Kw.bind(null,r,i,n,e),null),Ne===null)throw Error(L(349));s||ti&127||Hw(r,e,n)}return n}function Hw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=se.updateQueue,e===null?(e=wf(),se.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Kw(t,e,n,r){e.value=n,e.getSnapshot=r,$w(e)&&Qw(t)}function Yw(t,e,n){return n(function(){$w(e)&&Qw(t)})}function $w(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Pn(t,n)}catch{return!0}}function Qw(t){var e=Ea(t,2);e!==null&&gn(e,t,2)}function gg(t){var e=Wt();if(typeof t=="function"){var n=t;if(t=n(),na){Li(!0);try{n()}finally{Li(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ni,lastRenderedState:t},e}function Ww(t,e,n,r){return t.baseState=n,ty(t,we,typeof r=="function"?r:ni)}function aP(t,e,n,r,i){if(Cf(t))throw Error(L(485));if(t=e.action,t!==null){var s={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(a){s.listeners.push(a)}};te.T!==null?n(!0):s.isTransition=!1,r(s),n=e.pending,n===null?(s.next=e.pending=s,Xw(e,s)):(s.next=n.next,e.pending=n.next=s)}}function Xw(t,e){var n=e.action,r=e.payload,i=t.state;if(e.isTransition){var s=te.T,a={};te.T=a;try{var o=n(i,r),l=te.S;l!==null&&l(a,o),DT(t,e,o)}catch(c){_g(t,e,c)}finally{s!==null&&a.types!==null&&(s.types=a.types),te.T=s}}else try{s=n(i,r),DT(t,e,s)}catch(c){_g(t,e,c)}}function DT(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(r){xT(t,e,r)},function(r){return _g(t,e,r)}):xT(t,e,n)}function xT(t,e,n){e.status="fulfilled",e.value=n,Jw(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,Xw(t,n)))}function _g(t,e,n){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do e.status="rejected",e.reason=n,Jw(e),e=e.next;while(e!==r)}t.action=null}function Jw(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Zw(t,e){return e}function OT(t,e){if(me){var n=Ne.formState;if(n!==null){e:{var r=se;if(me){if(Ve){t:{for(var i=Ve,s=Gn;i.nodeType!==8;){if(!s){i=null;break t}if(i=$n(i.nextSibling),i===null){i=null;break t}}s=i.data,i=s==="F!"||s==="F"?i:null}if(i){Ve=$n(i.nextSibling),r=i.data==="F!";break e}}ns(r)}r=!1}r&&(e=n[0])}}return n=Wt(),n.memoizedState=n.baseState=e,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zw,lastRenderedState:e},n.queue=r,n=pS.bind(null,se,r),r.dispatch=n,r=gg(!1),s=ay.bind(null,se,!1,r.queue),r=Wt(),i={state:e,dispatch:null,action:t,pending:null},r.queue=i,n=aP.bind(null,se,i,s,n),i.dispatch=n,r.memoizedState=t,[e,n,!1]}function PT(t){var e=ot();return eS(e,we,t)}function eS(t,e,n){if(e=ty(t,e,Zw)[0],t=$h(ni)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var r=Ac(e)}catch(a){throw a===nl?Af:a}else r=e;e=ot();var i=e.queue,s=i.dispatch;return n!==e.memoizedState&&(se.flags|=2048,No(9,{destroy:void 0},oP.bind(null,i,n),null)),[r,s,t]}function oP(t,e){t.action=e}function MT(t){var e=ot(),n=we;if(n!==null)return eS(e,n,t);ot(),e=e.memoizedState,n=ot();var r=n.queue.dispatch;return n.memoizedState=t,[e,r,!1]}function No(t,e,n,r){return t={tag:t,create:n,deps:r,inst:e,next:null},e=se.updateQueue,e===null&&(e=wf(),se.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t),t}function tS(){return ot().memoizedState}function Qh(t,e,n,r){var i=Wt();se.flags|=t,i.memoizedState=No(1|e,{destroy:void 0},n,r===void 0?null:r)}function Rf(t,e,n,r){var i=ot();r=r===void 0?null:r;var s=i.memoizedState.inst;we!==null&&r!==null&&Q_(r,we.memoizedState.deps)?i.memoizedState=No(e,s,n,r):(se.flags|=t,i.memoizedState=No(1|e,s,n,r))}function kT(t,e){Qh(8390656,8,t,e)}function ny(t,e){Rf(2048,8,t,e)}function lP(t){se.flags|=4;var e=se.updateQueue;if(e===null)e=wf(),se.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function nS(t){var e=ot().memoizedState;return lP({ref:e,nextImpl:t}),function(){if(ye&2)throw Error(L(440));return e.impl.apply(void 0,arguments)}}function rS(t,e){return Rf(4,2,t,e)}function iS(t,e){return Rf(4,4,t,e)}function sS(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function aS(t,e,n){n=n!=null?n.concat([t]):null,Rf(4,4,sS.bind(null,e,t),n)}function ry(){}function oS(t,e){var n=ot();e=e===void 0?null:e;var r=n.memoizedState;return e!==null&&Q_(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function lS(t,e){var n=ot();e=e===void 0?null:e;var r=n.memoizedState;if(e!==null&&Q_(e,r[1]))return r[0];if(r=t(),na){Li(!0);try{t()}finally{Li(!1)}}return n.memoizedState=[r,e],r}function iy(t,e,n){return n===void 0||ti&1073741824&&!(de&261930)?t.memoizedState=e:(t.memoizedState=n,t=WS(),se.lanes|=t,is|=t,n)}function uS(t,e,n,r){return Pn(n,e)?n:Co.current!==null?(t=iy(t,n,r),Pn(t,e)||(gt=!0),t):!(ti&42)||ti&1073741824&&!(de&261930)?(gt=!0,t.memoizedState=n):(t=WS(),se.lanes|=t,is|=t,e)}function cS(t,e,n,r,i){var s=ve.p;ve.p=s!==0&&8>s?s:8;var a=te.T,o={};te.T=o,ay(t,!1,e,n);try{var l=i(),c=te.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=rP(l,r);_u(t,e,h,xn(t))}else _u(t,e,r,xn(t))}catch(f){_u(t,e,{then:function(){},status:"rejected",reason:f},xn())}finally{ve.p=s,a!==null&&o.types!==null&&(a.types=o.types),te.T=a}}function uP(){}function yg(t,e,n,r){if(t.tag!==5)throw Error(L(476));var i=hS(t).queue;cS(t,i,e,Gs,n===null?uP:function(){return dS(t),n(r)})}function hS(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:Gs,baseState:Gs,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ni,lastRenderedState:Gs},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ni,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function dS(t){var e=hS(t);e.next===null&&(e=t.alternate.memoizedState),_u(t,e.next.queue,{},xn())}function sy(){return kt(Gu)}function fS(){return ot().memoizedState}function mS(){return ot().memoizedState}function cP(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=xn();t=Ki(n);var r=Yi(e,t,n);r!==null&&(gn(r,e,n),mu(r,e,n)),e={cache:G_()},t.payload=e;return}e=e.return}}function hP(t,e,n){var r=xn();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Cf(t)?gS(e,n):(n=F_(t,e,n,r),n!==null&&(gn(n,t,r),_S(n,e,r)))}function pS(t,e,n){var r=xn();_u(t,e,n,r)}function _u(t,e,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cf(t))gS(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(i.hasEagerState=!0,i.eagerState=o,Pn(o,a))return bf(t,e,i,0),Ne===null&&If(),!1}catch{}finally{}if(n=F_(t,e,i,r),n!==null)return gn(n,t,r),_S(n,e,r),!0}return!1}function ay(t,e,n,r){if(r={lane:2,revertLane:py(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Cf(t)){if(e)throw Error(L(479))}else e=F_(t,n,r,2),e!==null&&gn(e,t,2)}function Cf(t){var e=t.alternate;return t===se||e!==null&&e===se}function gS(t,e){po=Cd=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function _S(t,e,n){if(n&4194048){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,nw(t,n)}}var ju={readContext:kt,use:Sf,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je};ju.useEffectEvent=Je;var yS={readContext:kt,use:Sf,useCallback:function(t,e){return Wt().memoizedState=[t,e===void 0?null:e],t},useContext:kt,useEffect:kT,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Qh(4194308,4,sS.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Qh(4194308,4,t,e)},useInsertionEffect:function(t,e){Qh(4,2,t,e)},useMemo:function(t,e){var n=Wt();e=e===void 0?null:e;var r=t();if(na){Li(!0);try{t()}finally{Li(!1)}}return n.memoizedState=[r,e],r},useReducer:function(t,e,n){var r=Wt();if(n!==void 0){var i=n(e);if(na){Li(!0);try{n(e)}finally{Li(!1)}}}else i=e;return r.memoizedState=r.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},r.queue=t,t=t.dispatch=hP.bind(null,se,t),[r.memoizedState,t]},useRef:function(t){var e=Wt();return t={current:t},e.memoizedState=t},useState:function(t){t=gg(t);var e=t.queue,n=pS.bind(null,se,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:ry,useDeferredValue:function(t,e){var n=Wt();return iy(n,t,e)},useTransition:function(){var t=gg(!1);return t=cS.bind(null,se,t.queue,!0,!1),Wt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var r=se,i=Wt();if(me){if(n===void 0)throw Error(L(407));n=n()}else{if(n=e(),Ne===null)throw Error(L(349));de&127||Hw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,kT(Yw.bind(null,r,s,t),[t]),r.flags|=2048,No(9,{destroy:void 0},Kw.bind(null,r,s,n,e),null),n},useId:function(){var t=Wt(),e=Ne.identifierPrefix;if(me){var n=pr,r=mr;n=(r&~(1<<32-Dn(r)-1)).toString(32)+n,e="_"+e+"R_"+n,n=Nd++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=iP++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:sy,useFormState:OT,useActionState:OT,useOptimistic:function(t){var e=Wt();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=ay.bind(null,se,!0,n),n.dispatch=e,[t,e]},useMemoCache:ey,useCacheRefresh:function(){return Wt().memoizedState=cP.bind(null,se)},useEffectEvent:function(t){var e=Wt(),n={impl:t};return e.memoizedState=n,function(){if(ye&2)throw Error(L(440));return n.impl.apply(void 0,arguments)}}},oy={readContext:kt,use:Sf,useCallback:oS,useContext:kt,useEffect:ny,useImperativeHandle:aS,useInsertionEffect:rS,useLayoutEffect:iS,useMemo:lS,useReducer:$h,useRef:tS,useState:function(){return $h(ni)},useDebugValue:ry,useDeferredValue:function(t,e){var n=ot();return uS(n,we.memoizedState,t,e)},useTransition:function(){var t=$h(ni)[0],e=ot().memoizedState;return[typeof t=="boolean"?t:Ac(t),e]},useSyncExternalStore:Gw,useId:fS,useHostTransitionStatus:sy,useFormState:PT,useActionState:PT,useOptimistic:function(t,e){var n=ot();return Ww(n,we,t,e)},useMemoCache:ey,useCacheRefresh:mS};oy.useEffectEvent=nS;var vS={readContext:kt,use:Sf,useCallback:oS,useContext:kt,useEffect:ny,useImperativeHandle:aS,useInsertionEffect:rS,useLayoutEffect:iS,useMemo:lS,useReducer:ep,useRef:tS,useState:function(){return ep(ni)},useDebugValue:ry,useDeferredValue:function(t,e){var n=ot();return we===null?iy(n,t,e):uS(n,we.memoizedState,t,e)},useTransition:function(){var t=ep(ni)[0],e=ot().memoizedState;return[typeof t=="boolean"?t:Ac(t),e]},useSyncExternalStore:Gw,useId:fS,useHostTransitionStatus:sy,useFormState:MT,useActionState:MT,useOptimistic:function(t,e){var n=ot();return we!==null?Ww(n,we,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:ey,useCacheRefresh:mS};vS.useEffectEvent=nS;function tp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Be({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var vg={enqueueSetState:function(t,e,n){t=t._reactInternals;var r=xn(),i=Ki(r);i.payload=e,n!=null&&(i.callback=n),e=Yi(t,i,r),e!==null&&(gn(e,t,r),mu(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=xn(),i=Ki(r);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Yi(t,i,r),e!==null&&(gn(e,t,r),mu(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=xn(),r=Ki(n);r.tag=2,e!=null&&(r.callback=e),e=Yi(t,r,n),e!==null&&(gn(e,t,n),mu(e,t,n))}};function VT(t,e,n,r,i,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,a):e.prototype&&e.prototype.isPureReactComponent?!Vu(n,r)||!Vu(i,s):!0}function LT(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&vg.enqueueReplaceState(e,e.state,null)}function ra(t,e){var n=e;if("ref"in e){n={};for(var r in e)r!=="ref"&&(n[r]=e[r])}if(t=t.defaultProps){n===e&&(n=Be({},n));for(var i in t)n[i]===void 0&&(n[i]=t[i])}return n}function ES(t){Td(t)}function TS(t){console.error(t)}function IS(t){Td(t)}function Dd(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(r){setTimeout(function(){throw r})}}function UT(t,e,n){try{var r=t.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Eg(t,e,n){return n=Ki(n),n.tag=3,n.payload={element:null},n.callback=function(){Dd(t,e)},n}function bS(t){return t=Ki(t),t.tag=3,t}function AS(t,e,n,r){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var s=r.value;t.payload=function(){return i(s)},t.callback=function(){UT(e,n,r)}}var a=n.stateNode;a!==null&&typeof a.componentDidCatch=="function"&&(t.callback=function(){UT(e,n,r),typeof i!="function"&&($i===null?$i=new Set([this]):$i.add(this));var o=r.stack;this.componentDidCatch(r.value,{componentStack:o!==null?o:""})})}function dP(t,e,n,r,i){if(n.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(e=n.alternate,e!==null&&tl(e,n,i,!0),n=Mn.current,n!==null){switch(n.tag){case 31:case 13:return Yn===null?kd():n.alternate===null&&Ze===0&&(Ze=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===wd?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([r]):e.add(r),dp(t,r,i)),!1;case 22:return n.flags|=65536,r===wd?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([r]):n.add(r)),dp(t,r,i)),!1}throw Error(L(435,n.tag))}return dp(t,r,i),kd(),!1}if(me)return e=Mn.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=i,r!==og&&(t=Error(L(422),{cause:r}),Uu(qn(t,n)))):(r!==og&&(e=Error(L(423),{cause:r}),Uu(qn(e,n))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,r=qn(r,n),i=Eg(t.stateNode,r,i),Zm(t,i),Ze!==4&&(Ze=2)),!1;var s=Error(L(520),{cause:r});if(s=qn(s,n),Eu===null?Eu=[s]:Eu.push(s),Ze!==4&&(Ze=2),e===null)return!0;r=qn(r,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=i&-i,n.lanes|=t,t=Eg(n.stateNode,r,t),Zm(n,t),!1;case 1:if(e=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&($i===null||!$i.has(s))))return n.flags|=65536,i&=-i,n.lanes|=i,i=bS(i),AS(i,t,n,r),Zm(n,i),!1}n=n.return}while(n!==null);return!1}var ly=Error(L(461)),gt=!1;function Dt(t,e,n,r){e.child=t===null?Uw(e,null,n,r):ta(e,t.child,n,r)}function BT(t,e,n,r,i){n=n.render;var s=e.ref;if("ref"in r){var a={};for(var o in r)o!=="ref"&&(a[o]=r[o])}else a=r;return ea(e),r=W_(t,e,n,a,s,i),o=X_(),t!==null&&!gt?(J_(t,e,i),ri(t,e,i)):(me&&o&&z_(e),e.flags|=1,Dt(t,e,r,i),e.child)}function FT(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!j_(s)&&s.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=s,wS(t,e,s,r,i)):(t=Kh(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!uy(t,i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Vu,n(a,r)&&t.ref===e.ref)return ri(t,e,i)}return e.flags|=1,t=Qr(s,r),t.ref=e.ref,t.return=e,e.child=t}function wS(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Vu(s,r)&&t.ref===e.ref)if(gt=!1,e.pendingProps=r=s,uy(t,i))t.flags&131072&&(gt=!0);else return e.lanes=t.lanes,ri(t,e,i)}return Tg(t,e,n,r,i)}function SS(t,e,n,r){var i=r.children,s=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if(e.flags&128){if(s=s!==null?s.baseLanes|n:n,t!==null){for(r=e.child=t.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~s}else r=0,e.child=null;return jT(t,e,s,n,r)}if(n&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Yh(e,s!==null?s.cachePool:null),s!==null?NT(e,s):mg(),jw(e);else return r=e.lanes=536870912,jT(t,e,s!==null?s.baseLanes|n:n,n,r)}else s!==null?(Yh(e,s.cachePool),NT(e,s),Pi(),e.memoizedState=null):(t!==null&&Yh(e,null),mg(),Pi());return Dt(t,e,i,n),e.child}function tu(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function jT(t,e,n,r,i){var s=H_();return s=s===null?null:{parent:pt._currentValue,pool:s},e.memoizedState={baseLanes:n,cachePool:s},t!==null&&Yh(e,null),mg(),jw(e),t!==null&&tl(t,e,r,!0),e.childLanes=i,null}function Wh(t,e){return e=xd({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function zT(t,e,n){return ta(e,t.child,null,n),t=Wh(e,e.pendingProps),t.flags|=2,bn(e),e.memoizedState=null,t}function fP(t,e,n){var r=e.pendingProps,i=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(me){if(r.mode==="hidden")return t=Wh(e,r),e.lanes=536870912,tu(null,t);if(pg(e),(t=Ve)?(t=yR(t,Gn),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ts!==null?{id:mr,overflow:pr}:null,retryLane:536870912,hydrationErrors:null},n=xw(t),n.return=e,e.child=n,Pt=e,Ve=null)):t=null,t===null)throw ns(e);return e.lanes=536870912,null}return Wh(e,r)}var s=t.memoizedState;if(s!==null){var a=s.dehydrated;if(pg(e),i)if(e.flags&256)e.flags&=-257,e=zT(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(L(558));else if(gt||tl(t,e,n,!1),i=(n&t.childLanes)!==0,gt||i){if(r=Ne,r!==null&&(a=rw(r,n),a!==0&&a!==s.retryLane))throw s.retryLane=a,Ea(t,a),gn(r,t,a),ly;kd(),e=zT(t,e,n)}else t=s.treeContext,Ve=$n(a.nextSibling),Pt=e,me=!0,Hi=null,Gn=!1,t!==null&&Pw(e,t),e=Wh(e,r),e.flags|=4096;return e}return t=Qr(t.child,{mode:r.mode,children:r.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Xh(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(L(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function Tg(t,e,n,r,i){return ea(e),n=W_(t,e,n,r,void 0,i),r=X_(),t!==null&&!gt?(J_(t,e,i),ri(t,e,i)):(me&&r&&z_(e),e.flags|=1,Dt(t,e,n,i),e.child)}function qT(t,e,n,r,i,s){return ea(e),e.updateQueue=null,n=qw(e,r,n,i),zw(t),r=X_(),t!==null&&!gt?(J_(t,e,s),ri(t,e,s)):(me&&r&&z_(e),e.flags|=1,Dt(t,e,n,s),e.child)}function GT(t,e,n,r,i){if(ea(e),e.stateNode===null){var s=io,a=n.contextType;typeof a=="object"&&a!==null&&(s=kt(a)),s=new n(r,s),e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=vg,e.stateNode=s,s._reactInternals=e,s=e.stateNode,s.props=r,s.state=e.memoizedState,s.refs={},Y_(e),a=n.contextType,s.context=typeof a=="object"&&a!==null?kt(a):io,s.state=e.memoizedState,a=n.getDerivedStateFromProps,typeof a=="function"&&(tp(e,n,a,r),s.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(a=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),a!==s.state&&vg.enqueueReplaceState(s,s.state,null),gu(e,r,s,i),pu(),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!0}else if(t===null){s=e.stateNode;var o=e.memoizedProps,l=ra(n,o);s.props=l;var c=s.context,h=n.contextType;a=io,typeof h=="object"&&h!==null&&(a=kt(h));var f=n.getDerivedStateFromProps;h=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||c!==a)&&LT(e,s,r,a),Di=!1;var p=e.memoizedState;s.state=p,gu(e,r,s,i),pu(),c=e.memoizedState,o||p!==c||Di?(typeof f=="function"&&(tp(e,n,f,r),c=e.memoizedState),(l=Di||VT(e,n,l,r,p,c,a))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),s.props=r,s.state=c,s.context=a,r=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,dg(t,e),a=e.memoizedProps,h=ra(n,a),s.props=h,f=e.pendingProps,p=s.context,c=n.contextType,l=io,typeof c=="object"&&c!==null&&(l=kt(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||p!==l)&&LT(e,s,r,l),Di=!1,p=e.memoizedState,s.state=p,gu(e,r,s,i),pu();var g=e.memoizedState;a!==f||p!==g||Di||t!==null&&t.dependencies!==null&&Ad(t.dependencies)?(typeof o=="function"&&(tp(e,n,o,r),g=e.memoizedState),(h=Di||VT(e,n,h,r,p,g,l)||t!==null&&t.dependencies!==null&&Ad(t.dependencies))?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,g,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,g,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),s.props=r,s.state=g,s.context=l,r=h):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return s=r,Xh(t,e),r=(e.flags&128)!==0,s||r?(s=e.stateNode,n=r&&typeof n.getDerivedStateFromError!="function"?null:s.render(),e.flags|=1,t!==null&&r?(e.child=ta(e,t.child,null,i),e.child=ta(e,null,n,i)):Dt(t,e,n,i),e.memoizedState=s.state,t=e.child):t=ri(t,e,i),t}function HT(t,e,n,r){return Zs(),e.flags|=256,Dt(t,e,n,r),e.child}var np={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rp(t){return{baseLanes:t,cachePool:kw()}}function ip(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=Sn),t}function RS(t,e,n){var r=e.pendingProps,i=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(st.current&2)!==0),a&&(i=!0,e.flags&=-129),a=(e.flags&32)!==0,e.flags&=-33,t===null){if(me){if(i?Oi(e):Pi(),(t=Ve)?(t=yR(t,Gn),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ts!==null?{id:mr,overflow:pr}:null,retryLane:536870912,hydrationErrors:null},n=xw(t),n.return=e,e.child=n,Pt=e,Ve=null)):t=null,t===null)throw ns(e);return kg(t)?e.lanes=32:e.lanes=536870912,null}var o=r.children;return r=r.fallback,i?(Pi(),i=e.mode,o=xd({mode:"hidden",children:o},i),r=Hs(r,i,n,null),o.return=e,r.return=e,o.sibling=r,e.child=o,r=e.child,r.memoizedState=rp(n),r.childLanes=ip(t,a,n),e.memoizedState=np,tu(null,r)):(Oi(e),Ig(e,o))}var l=t.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(s)e.flags&256?(Oi(e),e.flags&=-257,e=sp(t,e,n)):e.memoizedState!==null?(Pi(),e.child=t.child,e.flags|=128,e=null):(Pi(),o=r.fallback,i=e.mode,r=xd({mode:"visible",children:r.children},i),o=Hs(o,i,n,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,ta(e,t.child,null,n),r=e.child,r.memoizedState=rp(n),r.childLanes=ip(t,a,n),e.memoizedState=np,e=tu(null,r));else if(Oi(e),kg(o)){if(a=o.nextSibling&&o.nextSibling.dataset,a)var c=a.dgst;a=c,r=Error(L(419)),r.stack="",r.digest=a,Uu({value:r,source:null,stack:null}),e=sp(t,e,n)}else if(gt||tl(t,e,n,!1),a=(n&t.childLanes)!==0,gt||a){if(a=Ne,a!==null&&(r=rw(a,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,Ea(t,r),gn(a,t,r),ly;Mg(o)||kd(),e=sp(t,e,n)}else Mg(o)?(e.flags|=192,e.child=t.child,e=null):(t=l.treeContext,Ve=$n(o.nextSibling),Pt=e,me=!0,Hi=null,Gn=!1,t!==null&&Pw(e,t),e=Ig(e,r.children),e.flags|=4096);return e}return i?(Pi(),o=r.fallback,i=e.mode,l=t.child,c=l.sibling,r=Qr(l,{mode:"hidden",children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=Qr(c,o):(o=Hs(o,i,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,tu(null,r),r=e.child,o=t.child.memoizedState,o===null?o=rp(n):(i=o.cachePool,i!==null?(l=pt._currentValue,i=i.parent!==l?{parent:l,pool:l}:i):i=kw(),o={baseLanes:o.baseLanes|n,cachePool:i}),r.memoizedState=o,r.childLanes=ip(t,a,n),e.memoizedState=np,tu(t.child,r)):(Oi(e),n=t.child,t=n.sibling,n=Qr(n,{mode:"visible",children:r.children}),n.return=e,n.sibling=null,t!==null&&(a=e.deletions,a===null?(e.deletions=[t],e.flags|=16):a.push(t)),e.child=n,e.memoizedState=null,n)}function Ig(t,e){return e=xd({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function xd(t,e){return t=wn(22,t,null,e),t.lanes=0,t}function sp(t,e,n){return ta(e,t.child,null,n),t=Ig(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function KT(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ug(t.return,e,n)}function ap(t,e,n,r,i,s){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:s}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i,a.treeForkCount=s)}function CS(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;r=r.children;var a=st.current,o=(a&2)!==0;if(o?(a=a&1|2,e.flags|=128):a&=1,Oe(st,a),Dt(t,e,r,n),r=me?Lu:0,!o&&t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&KT(t,n,e);else if(t.tag===19)KT(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Rd(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ap(e,!1,i,n,s,r);break;case"backwards":case"unstable_legacy-backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Rd(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ap(e,!0,n,null,s,r);break;case"together":ap(e,!1,null,null,void 0,r);break;default:e.memoizedState=null}return e.child}function ri(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),is|=e.lanes,!(n&e.childLanes))if(t!==null){if(tl(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(L(153));if(e.child!==null){for(t=e.child,n=Qr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Qr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function uy(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&Ad(t)))}function mP(t,e,n){switch(e.tag){case 3:_d(e,e.stateNode.containerInfo),xi(e,pt,t.memoizedState.cache),Zs();break;case 27:case 5:Wp(e);break;case 4:_d(e,e.stateNode.containerInfo);break;case 10:xi(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,pg(e),null;break;case 13:var r=e.memoizedState;if(r!==null)return r.dehydrated!==null?(Oi(e),e.flags|=128,null):n&e.child.childLanes?RS(t,e,n):(Oi(e),t=ri(t,e,n),t!==null?t.sibling:null);Oi(e);break;case 19:var i=(t.flags&128)!==0;if(r=(n&e.childLanes)!==0,r||(tl(t,e,n,!1),r=(n&e.childLanes)!==0),i){if(r)return CS(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Oe(st,st.current),r)break;return null;case 22:return e.lanes=0,SS(t,e,n,e.pendingProps);case 24:xi(e,pt,t.memoizedState.cache)}return ri(t,e,n)}function NS(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)gt=!0;else{if(!uy(t,n)&&!(e.flags&128))return gt=!1,mP(t,e,n);gt=!!(t.flags&131072)}else gt=!1,me&&e.flags&1048576&&Ow(e,Lu,e.index);switch(e.lanes=0,e.tag){case 16:e:{var r=e.pendingProps;if(t=Os(e.elementType),e.type=t,typeof t=="function")j_(t)?(r=ra(t,r),e.tag=1,e=GT(null,e,t,r,n)):(e.tag=0,e=Tg(null,e,t,r,n));else{if(t!=null){var i=t.$$typeof;if(i===R_){e.tag=11,e=BT(null,e,t,r,n);break e}else if(i===C_){e.tag=14,e=FT(null,e,t,r,n);break e}}throw e=$p(t)||t,Error(L(306,e,""))}}return e;case 0:return Tg(t,e,e.type,e.pendingProps,n);case 1:return r=e.type,i=ra(r,e.pendingProps),GT(t,e,r,i,n);case 3:e:{if(_d(e,e.stateNode.containerInfo),t===null)throw Error(L(387));r=e.pendingProps;var s=e.memoizedState;i=s.element,dg(t,e),gu(e,r,null,n);var a=e.memoizedState;if(r=a.cache,xi(e,pt,r),r!==s.cache&&cg(e,[pt],n,!0),pu(),r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){e=HT(t,e,r,n);break e}else if(r!==i){i=qn(Error(L(424)),e),Uu(i),e=HT(t,e,r,n);break e}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ve=$n(t.firstChild),Pt=e,me=!0,Hi=null,Gn=!0,n=Uw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Zs(),r===i){e=ri(t,e,n);break e}Dt(t,e,r,n)}e=e.child}return e;case 26:return Xh(t,e),t===null?(n=d0(e.type,null,e.pendingProps,null))?e.memoizedState=n:me||(n=e.type,t=e.pendingProps,r=Bd(Gi.current).createElement(n),r[Ot]=e,r[_n]=t,Vt(r,n,t),St(r),e.stateNode=r):e.memoizedState=d0(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Wp(e),t===null&&me&&(r=e.stateNode=vR(e.type,e.pendingProps,Gi.current),Pt=e,Gn=!0,i=Ve,gs(e.type)?(Vg=i,Ve=$n(r.firstChild)):Ve=i),Dt(t,e,e.pendingProps.children,n),Xh(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&me&&((i=r=Ve)&&(r=GP(r,e.type,e.pendingProps,Gn),r!==null?(e.stateNode=r,Pt=e,Ve=$n(r.firstChild),Gn=!1,i=!0):i=!1),i||ns(e)),Wp(e),i=e.type,s=e.pendingProps,a=t!==null?t.memoizedProps:null,r=s.children,Og(i,s)?r=null:a!==null&&Og(i,a)&&(e.flags|=32),e.memoizedState!==null&&(i=W_(t,e,sP,null,null,n),Gu._currentValue=i),Xh(t,e),Dt(t,e,r,n),e.child;case 6:return t===null&&me&&((t=n=Ve)&&(n=HP(n,e.pendingProps,Gn),n!==null?(e.stateNode=n,Pt=e,Ve=null,t=!0):t=!1),t||ns(e)),null;case 13:return RS(t,e,n);case 4:return _d(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ta(e,null,r,n):Dt(t,e,r,n),e.child;case 11:return BT(t,e,e.type,e.pendingProps,n);case 7:return Dt(t,e,e.pendingProps,n),e.child;case 8:return Dt(t,e,e.pendingProps.children,n),e.child;case 12:return Dt(t,e,e.pendingProps.children,n),e.child;case 10:return r=e.pendingProps,xi(e,e.type,r.value),Dt(t,e,r.children,n),e.child;case 9:return i=e.type._context,r=e.pendingProps.children,ea(e),i=kt(i),r=r(i),e.flags|=1,Dt(t,e,r,n),e.child;case 14:return FT(t,e,e.type,e.pendingProps,n);case 15:return wS(t,e,e.type,e.pendingProps,n);case 19:return CS(t,e,n);case 31:return fP(t,e,n);case 22:return SS(t,e,n,e.pendingProps);case 24:return ea(e),r=kt(pt),t===null?(i=H_(),i===null&&(i=Ne,s=G_(),i.pooledCache=s,s.refCount++,s!==null&&(i.pooledCacheLanes|=n),i=s),e.memoizedState={parent:r,cache:i},Y_(e),xi(e,pt,i)):(t.lanes&n&&(dg(t,e),gu(e,null,null,n),pu()),i=t.memoizedState,s=e.memoizedState,i.parent!==r?(i={parent:r,cache:r},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),xi(e,pt,r)):(r=s.cache,xi(e,pt,r),r!==i.cache&&cg(e,[pt],n,!0))),Dt(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(L(156,e.tag))}function kr(t){t.flags|=4}function op(t,e,n,r,i){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(i&335544128)===i)if(t.stateNode.complete)t.flags|=8192;else if(ZS())t.flags|=8192;else throw Ys=wd,K_}else t.flags&=-16777217}function YT(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!IR(e))if(ZS())t.flags|=8192;else throw Ys=wd,K_}function wh(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?ew():536870912,t.lanes|=e,Do|=e)}function Fl(t,e){if(!me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ke(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function pP(t,e,n){var r=e.pendingProps;switch(q_(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(e),null;case 1:return ke(e),null;case 3:return n=e.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),e.memoizedState.cache!==r&&(e.flags|=2048),Wr(pt),Ao(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Ma(e)?kr(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Jm())),ke(e),null;case 26:var i=e.type,s=e.memoizedState;return t===null?(kr(e),s!==null?(ke(e),YT(e,s)):(ke(e),op(e,i,null,r,n))):s?s!==t.memoizedState?(kr(e),ke(e),YT(e,s)):(ke(e),e.flags&=-16777217):(t=t.memoizedProps,t!==r&&kr(e),ke(e),op(e,i,t,r,n)),null;case 27:if(yd(e),n=Gi.current,i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&kr(e);else{if(!r){if(e.stateNode===null)throw Error(L(166));return ke(e),null}t=Er.current,Ma(e)?IT(e):(t=vR(i,r,n),e.stateNode=t,kr(e))}return ke(e),null;case 5:if(yd(e),i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&kr(e);else{if(!r){if(e.stateNode===null)throw Error(L(166));return ke(e),null}if(s=Er.current,Ma(e))IT(e);else{var a=Bd(Gi.current);switch(s){case 1:s=a.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:s=a.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":s=a.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":s=a.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":s=a.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof r.is=="string"?a.createElement("select",{is:r.is}):a.createElement("select"),r.multiple?s.multiple=!0:r.size&&(s.size=r.size);break;default:s=typeof r.is=="string"?a.createElement(i,{is:r.is}):a.createElement(i)}}s[Ot]=e,s[_n]=r;e:for(a=e.child;a!==null;){if(a.tag===5||a.tag===6)s.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}e.stateNode=s;e:switch(Vt(s,i,r),i){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&kr(e)}}return ke(e),op(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==r&&kr(e);else{if(typeof r!="string"&&e.stateNode===null)throw Error(L(166));if(t=Gi.current,Ma(e)){if(t=e.stateNode,n=e.memoizedProps,r=null,i=Pt,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}t[Ot]=e,t=!!(t.nodeValue===n||r!==null&&r.suppressHydrationWarning===!0||pR(t.nodeValue,n)),t||ns(e,!0)}else t=Bd(t).createTextNode(r),t[Ot]=e,e.stateNode=t}return ke(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(r=Ma(e),n!==null){if(t===null){if(!r)throw Error(L(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(L(557));t[Ot]=e}else Zs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ke(e),t=!1}else n=Jm(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(bn(e),e):(bn(e),null);if(e.flags&128)throw Error(L(558))}return ke(e),null;case 13:if(r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=Ma(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(L(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(L(317));i[Ot]=e}else Zs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ke(e),i=!1}else i=Jm(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(bn(e),e):(bn(e),null)}return bn(e),e.flags&128?(e.lanes=n,e):(n=r!==null,t=t!==null&&t.memoizedState!==null,n&&(r=e.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),s=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(s=r.memoizedState.cachePool.pool),s!==i&&(r.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),wh(e,e.updateQueue),ke(e),null);case 4:return Ao(),t===null&&gy(e.stateNode.containerInfo),ke(e),null;case 10:return Wr(e.type),ke(e),null;case 19:if(Rt(st),r=e.memoizedState,r===null)return ke(e),null;if(i=(e.flags&128)!==0,s=r.rendering,s===null)if(i)Fl(r,!1);else{if(Ze!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Rd(t),s!==null){for(e.flags|=128,Fl(r,!1),t=s.updateQueue,e.updateQueue=t,wh(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)Dw(n,t),n=n.sibling;return Oe(st,st.current&1|2),me&&Br(e,r.treeForkCount),e.child}t=t.sibling}r.tail!==null&&Cn()>Pd&&(e.flags|=128,i=!0,Fl(r,!1),e.lanes=4194304)}else{if(!i)if(t=Rd(s),t!==null){if(e.flags|=128,i=!0,t=t.updateQueue,e.updateQueue=t,wh(e,t),Fl(r,!0),r.tail===null&&r.tailMode==="hidden"&&!s.alternate&&!me)return ke(e),null}else 2*Cn()-r.renderingStartTime>Pd&&n!==536870912&&(e.flags|=128,i=!0,Fl(r,!1),e.lanes=4194304);r.isBackwards?(s.sibling=e.child,e.child=s):(t=r.last,t!==null?t.sibling=s:e.child=s,r.last=s)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=Cn(),t.sibling=null,n=st.current,Oe(st,i?n&1|2:n&1),me&&Br(e,r.treeForkCount),t):(ke(e),null);case 22:case 23:return bn(e),$_(),r=e.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(e.flags|=8192):r&&(e.flags|=8192),r?n&536870912&&!(e.flags&128)&&(ke(e),e.subtreeFlags&6&&(e.flags|=8192)):ke(e),n=e.updateQueue,n!==null&&wh(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),r=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),r!==n&&(e.flags|=2048),t!==null&&Rt(Ks),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Wr(pt),ke(e),null;case 25:return null;case 30:return null}throw Error(L(156,e.tag))}function gP(t,e){switch(q_(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Wr(pt),Ao(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return yd(e),null;case 31:if(e.memoizedState!==null){if(bn(e),e.alternate===null)throw Error(L(340));Zs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(bn(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(L(340));Zs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Rt(st),null;case 4:return Ao(),null;case 10:return Wr(e.type),null;case 22:case 23:return bn(e),$_(),t!==null&&Rt(Ks),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Wr(pt),null;case 25:return null;default:return null}}function DS(t,e){switch(q_(e),e.tag){case 3:Wr(pt),Ao();break;case 26:case 27:case 5:yd(e);break;case 4:Ao();break;case 31:e.memoizedState!==null&&bn(e);break;case 13:bn(e);break;case 19:Rt(st);break;case 10:Wr(e.type);break;case 22:case 23:bn(e),$_(),t!==null&&Rt(Ks);break;case 24:Wr(pt)}}function wc(t,e){try{var n=e.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var i=r.next;n=i;do{if((n.tag&t)===t){r=void 0;var s=n.create,a=n.inst;r=s(),a.destroy=r}n=n.next}while(n!==i)}}catch(o){Te(e,e.return,o)}}function rs(t,e,n){try{var r=e.updateQueue,i=r!==null?r.lastEffect:null;if(i!==null){var s=i.next;r=s;do{if((r.tag&t)===t){var a=r.inst,o=a.destroy;if(o!==void 0){a.destroy=void 0,i=e;var l=n,c=o;try{c()}catch(h){Te(i,l,h)}}}r=r.next}while(r!==s)}}catch(h){Te(e,e.return,h)}}function xS(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{Fw(e,n)}catch(r){Te(t,t.return,r)}}}function OS(t,e,n){n.props=ra(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(r){Te(t,e,r)}}function yu(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof n=="function"?t.refCleanup=n(r):n.current=r}}catch(i){Te(t,e,i)}}function gr(t,e){var n=t.ref,r=t.refCleanup;if(n!==null)if(typeof r=="function")try{r()}catch(i){Te(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){Te(t,e,i)}else n.current=null}function PS(t){var e=t.type,n=t.memoizedProps,r=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(i){Te(t,t.return,i)}}function lp(t,e,n){try{var r=t.stateNode;UP(r,t.type,n,e),r[_n]=e}catch(i){Te(t,t.return,i)}}function MS(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&gs(t.type)||t.tag===4}function up(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||MS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&gs(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function bg(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=qr));else if(r!==4&&(r===27&&gs(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(bg(t,e,n),t=t.sibling;t!==null;)bg(t,e,n),t=t.sibling}function Od(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(r===27&&gs(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(Od(t,e,n),t=t.sibling;t!==null;)Od(t,e,n),t=t.sibling}function kS(t){var e=t.stateNode,n=t.memoizedProps;try{for(var r=t.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Vt(e,r,n),e[Ot]=t,e[_n]=n}catch(s){Te(t,t.return,s)}}var Fr=!1,mt=!1,cp=!1,$T=typeof WeakSet=="function"?WeakSet:Set,At=null;function _P(t,e){if(t=t.containerInfo,Dg=qd,t=Iw(t),U_(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,h=0,f=t,p=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(o=a+i),f!==s||r!==0&&f.nodeType!==3||(l=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(g=f.firstChild)!==null;)p=f,f=g;for(;;){if(f===t)break t;if(p===n&&++c===i&&(o=a),p===s&&++h===r&&(l=a),(g=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=g}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(xg={focusedElem:t,selectionRange:n},qd=!1,At=e;At!==null;)if(e=At,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,At=t;else for(;At!==null;){switch(e=At,s=e.alternate,t=e.flags,e.tag){case 0:if(t&4&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)i=t[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if(t&1024&&s!==null){t=void 0,n=e,i=s.memoizedProps,s=s.memoizedState,r=n.stateNode;try{var S=ra(n.type,i);t=r.getSnapshotBeforeUpdate(S,s),r.__reactInternalSnapshotBeforeUpdate=t}catch(N){Te(n,n.return,N)}}break;case 3:if(t&1024){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)Pg(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Pg(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(L(163))}if(t=e.sibling,t!==null){t.return=e.return,At=t;break}At=e.return}}function VS(t,e,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Lr(t,n),r&4&&wc(5,n);break;case 1:if(Lr(t,n),r&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(a){Te(n,n.return,a)}else{var i=ra(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(a){Te(n,n.return,a)}}r&64&&xS(n),r&512&&yu(n,n.return);break;case 3:if(Lr(t,n),r&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{Fw(t,e)}catch(a){Te(n,n.return,a)}}break;case 27:e===null&&r&4&&kS(n);case 26:case 5:Lr(t,n),e===null&&r&4&&PS(n),r&512&&yu(n,n.return);break;case 12:Lr(t,n);break;case 31:Lr(t,n),r&4&&BS(t,n);break;case 13:Lr(t,n),r&4&&FS(t,n),r&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=SP.bind(null,n),KP(t,n))));break;case 22:if(r=n.memoizedState!==null||Fr,!r){e=e!==null&&e.memoizedState!==null||mt,i=Fr;var s=mt;Fr=r,(mt=e)&&!s?Ur(t,n,(n.subtreeFlags&8772)!==0):Lr(t,n),Fr=i,mt=s}break;case 30:break;default:Lr(t,n)}}function LS(t){var e=t.alternate;e!==null&&(t.alternate=null,LS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&O_(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var je=null,un=!1;function Vr(t,e,n){for(n=n.child;n!==null;)US(t,e,n),n=n.sibling}function US(t,e,n){if(Nn&&typeof Nn.onCommitFiberUnmount=="function")try{Nn.onCommitFiberUnmount(yc,n)}catch{}switch(n.tag){case 26:mt||gr(n,e),Vr(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:mt||gr(n,e);var r=je,i=un;gs(n.type)&&(je=n.stateNode,un=!1),Vr(t,e,n),Iu(n.stateNode),je=r,un=i;break;case 5:mt||gr(n,e);case 6:if(r=je,i=un,je=null,Vr(t,e,n),je=r,un=i,je!==null)if(un)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(n.stateNode)}catch(s){Te(n,e,s)}else try{je.removeChild(n.stateNode)}catch(s){Te(n,e,s)}break;case 18:je!==null&&(un?(t=je,o0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),Mo(t)):o0(je,n.stateNode));break;case 4:r=je,i=un,je=n.stateNode.containerInfo,un=!0,Vr(t,e,n),je=r,un=i;break;case 0:case 11:case 14:case 15:rs(2,n,e),mt||rs(4,n,e),Vr(t,e,n);break;case 1:mt||(gr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"&&OS(n,e,r)),Vr(t,e,n);break;case 21:Vr(t,e,n);break;case 22:mt=(r=mt)||n.memoizedState!==null,Vr(t,e,n),mt=r;break;default:Vr(t,e,n)}}function BS(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Mo(t)}catch(n){Te(e,e.return,n)}}}function FS(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Mo(t)}catch(n){Te(e,e.return,n)}}function yP(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new $T),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new $T),e;default:throw Error(L(435,t.tag))}}function Sh(t,e){var n=yP(t);e.forEach(function(r){if(!n.has(r)){n.add(r);var i=RP.bind(null,t,r);r.then(i,i)}})}function on(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r],s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 27:if(gs(o.type)){je=o.stateNode,un=!1;break e}break;case 5:je=o.stateNode,un=!1;break e;case 3:case 4:je=o.stateNode.containerInfo,un=!0;break e}o=o.return}if(je===null)throw Error(L(160));US(s,a,i),je=null,un=!1,s=i.alternate,s!==null&&(s.return=null),i.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)jS(e,t),e=e.sibling}var rr=null;function jS(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:on(e,t),ln(t),r&4&&(rs(3,t,t.return),wc(3,t),rs(5,t,t.return));break;case 1:on(e,t),ln(t),r&512&&(mt||n===null||gr(n,n.return)),r&64&&Fr&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var i=rr;if(on(e,t),ln(t),r&512&&(mt||n===null||gr(n,n.return)),r&4){var s=n!==null?n.memoizedState:null;if(r=t.memoizedState,n===null)if(r===null)if(t.stateNode===null){e:{r=t.type,n=t.memoizedProps,i=i.ownerDocument||i;t:switch(r){case"title":s=i.getElementsByTagName("title")[0],(!s||s[Tc]||s[Ot]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=i.createElement(r),i.head.insertBefore(s,i.querySelector("head > title"))),Vt(s,r,n),s[Ot]=t,St(s),r=s;break e;case"link":var a=m0("link","href",i).get(r+(n.href||""));if(a){for(var o=0;o<a.length;o++)if(s=a[o],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(o,1);break t}}s=i.createElement(r),Vt(s,r,n),i.head.appendChild(s);break;case"meta":if(a=m0("meta","content",i).get(r+(n.content||""))){for(o=0;o<a.length;o++)if(s=a[o],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(o,1);break t}}s=i.createElement(r),Vt(s,r,n),i.head.appendChild(s);break;default:throw Error(L(468,r))}s[Ot]=t,St(s),r=s}t.stateNode=r}else p0(i,t.type,t.stateNode);else t.stateNode=f0(i,r,t.memoizedProps);else s!==r?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,r===null?p0(i,t.type,t.stateNode):f0(i,r,t.memoizedProps)):r===null&&t.stateNode!==null&&lp(t,t.memoizedProps,n.memoizedProps)}break;case 27:on(e,t),ln(t),r&512&&(mt||n===null||gr(n,n.return)),n!==null&&r&4&&lp(t,t.memoizedProps,n.memoizedProps);break;case 5:if(on(e,t),ln(t),r&512&&(mt||n===null||gr(n,n.return)),t.flags&32){i=t.stateNode;try{So(i,"")}catch(S){Te(t,t.return,S)}}r&4&&t.stateNode!=null&&(i=t.memoizedProps,lp(t,i,n!==null?n.memoizedProps:i)),r&1024&&(cp=!0);break;case 6:if(on(e,t),ln(t),r&4){if(t.stateNode===null)throw Error(L(162));r=t.memoizedProps,n=t.stateNode;try{n.nodeValue=r}catch(S){Te(t,t.return,S)}}break;case 3:if(ed=null,i=rr,rr=Fd(e.containerInfo),on(e,t),rr=i,ln(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Mo(e.containerInfo)}catch(S){Te(t,t.return,S)}cp&&(cp=!1,zS(t));break;case 4:r=rr,rr=Fd(t.stateNode.containerInfo),on(e,t),ln(t),rr=r;break;case 12:on(e,t),ln(t);break;case 31:on(e,t),ln(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Sh(t,r)));break;case 13:on(e,t),ln(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Nf=Cn()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Sh(t,r)));break;case 22:i=t.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=Fr,h=mt;if(Fr=c||i,mt=h||l,on(e,t),mt=h,Fr=c,ln(t),r&8192)e:for(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(n===null||l||Fr||mt||Ps(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){l=n=e;try{if(s=l.stateNode,i)a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none";else{o=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty("display")?f.display:null;o.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(S){Te(l,l.return,S)}}}else if(e.tag===6){if(n===null){l=e;try{l.stateNode.nodeValue=i?"":l.memoizedProps}catch(S){Te(l,l.return,S)}}}else if(e.tag===18){if(n===null){l=e;try{var g=l.stateNode;i?l0(g,!0):l0(l.stateNode,!1)}catch(S){Te(l,l.return,S)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}r&4&&(r=t.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,Sh(t,n))));break;case 19:on(e,t),ln(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Sh(t,r)));break;case 30:break;case 21:break;default:on(e,t),ln(t)}}function ln(t){var e=t.flags;if(e&2){try{for(var n,r=t.return;r!==null;){if(MS(r)){n=r;break}r=r.return}if(n==null)throw Error(L(160));switch(n.tag){case 27:var i=n.stateNode,s=up(t);Od(t,s,i);break;case 5:var a=n.stateNode;n.flags&32&&(So(a,""),n.flags&=-33);var o=up(t);Od(t,o,a);break;case 3:case 4:var l=n.stateNode.containerInfo,c=up(t);bg(t,c,l);break;default:throw Error(L(161))}}catch(h){Te(t,t.return,h)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function zS(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;zS(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Lr(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)VS(t,e.alternate,e),e=e.sibling}function Ps(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:rs(4,e,e.return),Ps(e);break;case 1:gr(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&OS(e,e.return,n),Ps(e);break;case 27:Iu(e.stateNode);case 26:case 5:gr(e,e.return),Ps(e);break;case 22:e.memoizedState===null&&Ps(e);break;case 30:Ps(e);break;default:Ps(e)}t=t.sibling}}function Ur(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var r=e.alternate,i=t,s=e,a=s.flags;switch(s.tag){case 0:case 11:case 15:Ur(i,s,n),wc(4,s);break;case 1:if(Ur(i,s,n),r=s,i=r.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(c){Te(r,r.return,c)}if(r=s,i=r.updateQueue,i!==null){var o=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)Bw(l[i],o)}catch(c){Te(r,r.return,c)}}n&&a&64&&xS(s),yu(s,s.return);break;case 27:kS(s);case 26:case 5:Ur(i,s,n),n&&r===null&&a&4&&PS(s),yu(s,s.return);break;case 12:Ur(i,s,n);break;case 31:Ur(i,s,n),n&&a&4&&BS(i,s);break;case 13:Ur(i,s,n),n&&a&4&&FS(i,s);break;case 22:s.memoizedState===null&&Ur(i,s,n),yu(s,s.return);break;case 30:break;default:Ur(i,s,n)}e=e.sibling}}function cy(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&bc(n))}function hy(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&bc(t))}function nr(t,e,n,r){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)qS(t,e,n,r),e=e.sibling}function qS(t,e,n,r){var i=e.flags;switch(e.tag){case 0:case 11:case 15:nr(t,e,n,r),i&2048&&wc(9,e);break;case 1:nr(t,e,n,r);break;case 3:nr(t,e,n,r),i&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&bc(t)));break;case 12:if(i&2048){nr(t,e,n,r),t=e.stateNode;try{var s=e.memoizedProps,a=s.id,o=s.onPostCommit;typeof o=="function"&&o(a,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(l){Te(e,e.return,l)}}else nr(t,e,n,r);break;case 31:nr(t,e,n,r);break;case 13:nr(t,e,n,r);break;case 23:break;case 22:s=e.stateNode,a=e.alternate,e.memoizedState!==null?s._visibility&2?nr(t,e,n,r):vu(t,e):s._visibility&2?nr(t,e,n,r):(s._visibility|=2,qa(t,e,n,r,(e.subtreeFlags&10256)!==0||!1)),i&2048&&cy(a,e);break;case 24:nr(t,e,n,r),i&2048&&hy(e.alternate,e);break;default:nr(t,e,n,r)}}function qa(t,e,n,r,i){for(i=i&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var s=t,a=e,o=n,l=r,c=a.flags;switch(a.tag){case 0:case 11:case 15:qa(s,a,o,l,i),wc(8,a);break;case 23:break;case 22:var h=a.stateNode;a.memoizedState!==null?h._visibility&2?qa(s,a,o,l,i):vu(s,a):(h._visibility|=2,qa(s,a,o,l,i)),i&&c&2048&&cy(a.alternate,a);break;case 24:qa(s,a,o,l,i),i&&c&2048&&hy(a.alternate,a);break;default:qa(s,a,o,l,i)}e=e.sibling}}function vu(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,r=e,i=r.flags;switch(r.tag){case 22:vu(n,r),i&2048&&cy(r.alternate,r);break;case 24:vu(n,r),i&2048&&hy(r.alternate,r);break;default:vu(n,r)}e=e.sibling}}var nu=8192;function ka(t,e,n){if(t.subtreeFlags&nu)for(t=t.child;t!==null;)GS(t,e,n),t=t.sibling}function GS(t,e,n){switch(t.tag){case 26:ka(t,e,n),t.flags&nu&&t.memoizedState!==null&&i2(n,rr,t.memoizedState,t.memoizedProps);break;case 5:ka(t,e,n);break;case 3:case 4:var r=rr;rr=Fd(t.stateNode.containerInfo),ka(t,e,n),rr=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=nu,nu=16777216,ka(t,e,n),nu=r):ka(t,e,n));break;default:ka(t,e,n)}}function HS(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function jl(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var r=e[n];At=r,YS(r,t)}HS(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)KS(t),t=t.sibling}function KS(t){switch(t.tag){case 0:case 11:case 15:jl(t),t.flags&2048&&rs(9,t,t.return);break;case 3:jl(t);break;case 12:jl(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Jh(t)):jl(t);break;default:jl(t)}}function Jh(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var r=e[n];At=r,YS(r,t)}HS(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:rs(8,e,e.return),Jh(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,Jh(e));break;default:Jh(e)}t=t.sibling}}function YS(t,e){for(;At!==null;){var n=At;switch(n.tag){case 0:case 11:case 15:rs(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:bc(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,At=r;else e:for(n=t;At!==null;){r=At;var i=r.sibling,s=r.return;if(LS(r),r===n){At=null;break e}if(i!==null){i.return=s,At=i;break e}At=s}}}var vP={getCacheForType:function(t){var e=kt(pt),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return kt(pt).controller.signal}},EP=typeof WeakMap=="function"?WeakMap:Map,ye=0,Ne=null,ce=null,de=0,Ee=0,In=null,Bi=!1,rl=!1,dy=!1,ii=0,Ze=0,is=0,$s=0,fy=0,Sn=0,Do=0,Eu=null,cn=null,Ag=!1,Nf=0,$S=0,Pd=1/0,Md=null,$i=null,_t=0,Qi=null,xo=null,Xr=0,wg=0,Sg=null,QS=null,Tu=0,Rg=null;function xn(){return ye&2&&de!==0?de&-de:te.T!==null?py():iw()}function WS(){if(Sn===0)if(!(de&536870912)||me){var t=yh;yh<<=1,!(yh&3932160)&&(yh=262144),Sn=t}else Sn=536870912;return t=Mn.current,t!==null&&(t.flags|=32),Sn}function gn(t,e,n){(t===Ne&&(Ee===2||Ee===9)||t.cancelPendingCommit!==null)&&(Oo(t,0),Fi(t,de,Sn,!1)),Ec(t,n),(!(ye&2)||t!==Ne)&&(t===Ne&&(!(ye&2)&&($s|=n),Ze===4&&Fi(t,de,Sn,!1)),Nr(t))}function XS(t,e,n){if(ye&6)throw Error(L(327));var r=!n&&(e&127)===0&&(e&t.expiredLanes)===0||vc(t,e),i=r?bP(t,e):hp(t,e,!0),s=r;do{if(i===0){rl&&!r&&Fi(t,e,0,!1);break}else{if(n=t.current.alternate,s&&!TP(n)){i=hp(t,e,!1),s=!1;continue}if(i===2){if(s=e,t.errorRecoveryDisabledLanes&s)var a=0;else a=t.pendingLanes&-536870913,a=a!==0?a:a&536870912?536870912:0;if(a!==0){e=a;e:{var o=t;i=Eu;var l=o.current.memoizedState.isDehydrated;if(l&&(Oo(o,a).flags|=256),a=hp(o,a,!1),a!==2){if(dy&&!l){o.errorRecoveryDisabledLanes|=s,$s|=s,i=4;break e}s=cn,cn=i,s!==null&&(cn===null?cn=s:cn.push.apply(cn,s))}i=a}if(s=!1,i!==2)continue}}if(i===1){Oo(t,0),Fi(t,e,0,!0);break}e:{switch(r=t,s=i,s){case 0:case 1:throw Error(L(345));case 4:if((e&4194048)!==e)break;case 6:Fi(r,e,Sn,!Bi);break e;case 2:cn=null;break;case 3:case 5:break;default:throw Error(L(329))}if((e&62914560)===e&&(i=Nf+300-Cn(),10<i)){if(Fi(r,e,Sn,!Bi),yf(r,0,!0)!==0)break e;Xr=e,r.timeoutHandle=_R(QT.bind(null,r,n,cn,Md,Ag,e,Sn,$s,Do,Bi,s,"Throttled",-0,0),i);break e}QT(r,n,cn,Md,Ag,e,Sn,$s,Do,Bi,s,null,-0,0)}}break}while(!0);Nr(t)}function QT(t,e,n,r,i,s,a,o,l,c,h,f,p,g){if(t.timeoutHandle=-1,f=e.subtreeFlags,f&8192||(f&16785408)===16785408){f={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qr},GS(e,s,f);var S=(s&62914560)===s?Nf-Cn():(s&4194048)===s?$S-Cn():0;if(S=s2(f,S),S!==null){Xr=s,t.cancelPendingCommit=S(XT.bind(null,t,e,s,n,r,i,a,o,l,h,f,null,p,g)),Fi(t,s,a,!c);return}}XT(t,e,s,n,r,i,a,o,l)}function TP(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Pn(s(),i))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Fi(t,e,n,r){e&=~fy,e&=~$s,t.suspendedLanes|=e,t.pingedLanes&=~e,r&&(t.warmLanes|=e),r=t.expirationTimes;for(var i=e;0<i;){var s=31-Dn(i),a=1<<s;r[s]=-1,i&=~a}n!==0&&tw(t,n,e)}function Df(){return ye&6?!0:(Sc(0),!1)}function my(){if(ce!==null){if(Ee===0)var t=ce.return;else t=ce,Gr=Ta=null,Z_(t),mo=null,Bu=0,t=ce;for(;t!==null;)DS(t.alternate,t),t=t.return;ce=null}}function Oo(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,jP(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),Xr=0,my(),Ne=t,ce=n=Qr(t.current,null),de=e,Ee=0,In=null,Bi=!1,rl=vc(t,e),dy=!1,Do=Sn=fy=$s=is=Ze=0,cn=Eu=null,Ag=!1,e&8&&(e|=e&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=e;0<r;){var i=31-Dn(r),s=1<<i;e|=t[i],r&=~s}return ii=e,If(),n}function JS(t,e){se=null,te.H=ju,e===nl||e===Af?(e=RT(),Ee=3):e===K_?(e=RT(),Ee=4):Ee=e===ly?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,In=e,ce===null&&(Ze=1,Dd(t,qn(e,t.current)))}function ZS(){var t=Mn.current;return t===null?!0:(de&4194048)===de?Yn===null:(de&62914560)===de||de&536870912?t===Yn:!1}function eR(){var t=te.H;return te.H=ju,t===null?ju:t}function tR(){var t=te.A;return te.A=vP,t}function kd(){Ze=4,Bi||(de&4194048)!==de&&Mn.current!==null||(rl=!0),!(is&134217727)&&!($s&134217727)||Ne===null||Fi(Ne,de,Sn,!1)}function hp(t,e,n){var r=ye;ye|=2;var i=eR(),s=tR();(Ne!==t||de!==e)&&(Md=null,Oo(t,e)),e=!1;var a=Ze;e:do try{if(Ee!==0&&ce!==null){var o=ce,l=In;switch(Ee){case 8:my(),a=6;break e;case 3:case 2:case 9:case 6:Mn.current===null&&(e=!0);var c=Ee;if(Ee=0,In=null,oo(t,o,l,c),n&&rl){a=0;break e}break;default:c=Ee,Ee=0,In=null,oo(t,o,l,c)}}IP(),a=Ze;break}catch(h){JS(t,h)}while(!0);return e&&t.shellSuspendCounter++,Gr=Ta=null,ye=r,te.H=i,te.A=s,ce===null&&(Ne=null,de=0,If()),a}function IP(){for(;ce!==null;)nR(ce)}function bP(t,e){var n=ye;ye|=2;var r=eR(),i=tR();Ne!==t||de!==e?(Md=null,Pd=Cn()+500,Oo(t,e)):rl=vc(t,e);e:do try{if(Ee!==0&&ce!==null){e=ce;var s=In;t:switch(Ee){case 1:Ee=0,In=null,oo(t,e,s,1);break;case 2:case 9:if(ST(s)){Ee=0,In=null,WT(e);break}e=function(){Ee!==2&&Ee!==9||Ne!==t||(Ee=7),Nr(t)},s.then(e,e);break e;case 3:Ee=7;break e;case 4:Ee=5;break e;case 7:ST(s)?(Ee=0,In=null,WT(e)):(Ee=0,In=null,oo(t,e,s,7));break;case 5:var a=null;switch(ce.tag){case 26:a=ce.memoizedState;case 5:case 27:var o=ce;if(a?IR(a):o.stateNode.complete){Ee=0,In=null;var l=o.sibling;if(l!==null)ce=l;else{var c=o.return;c!==null?(ce=c,xf(c)):ce=null}break t}}Ee=0,In=null,oo(t,e,s,5);break;case 6:Ee=0,In=null,oo(t,e,s,6);break;case 8:my(),Ze=6;break e;default:throw Error(L(462))}}AP();break}catch(h){JS(t,h)}while(!0);return Gr=Ta=null,te.H=r,te.A=i,ye=n,ce!==null?0:(Ne=null,de=0,If(),Ze)}function AP(){for(;ce!==null&&!YO();)nR(ce)}function nR(t){var e=NS(t.alternate,t,ii);t.memoizedProps=t.pendingProps,e===null?xf(t):ce=e}function WT(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=qT(n,e,e.pendingProps,e.type,void 0,de);break;case 11:e=qT(n,e,e.pendingProps,e.type.render,e.ref,de);break;case 5:Z_(e);default:DS(n,e),e=ce=Dw(e,ii),e=NS(n,e,ii)}t.memoizedProps=t.pendingProps,e===null?xf(t):ce=e}function oo(t,e,n,r){Gr=Ta=null,Z_(e),mo=null,Bu=0;var i=e.return;try{if(dP(t,i,e,n,de)){Ze=1,Dd(t,qn(n,t.current)),ce=null;return}}catch(s){if(i!==null)throw ce=i,s;Ze=1,Dd(t,qn(n,t.current)),ce=null;return}e.flags&32768?(me||r===1?t=!0:rl||de&536870912?t=!1:(Bi=t=!0,(r===2||r===9||r===3||r===6)&&(r=Mn.current,r!==null&&r.tag===13&&(r.flags|=16384))),rR(e,t)):xf(e)}function xf(t){var e=t;do{if(e.flags&32768){rR(e,Bi);return}t=e.return;var n=pP(e.alternate,e,ii);if(n!==null){ce=n;return}if(e=e.sibling,e!==null){ce=e;return}ce=e=t}while(e!==null);Ze===0&&(Ze=5)}function rR(t,e){do{var n=gP(t.alternate,t);if(n!==null){n.flags&=32767,ce=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){ce=t;return}ce=t=n}while(t!==null);Ze=6,ce=null}function XT(t,e,n,r,i,s,a,o,l){t.cancelPendingCommit=null;do Of();while(_t!==0);if(ye&6)throw Error(L(327));if(e!==null){if(e===t.current)throw Error(L(177));if(s=e.lanes|e.childLanes,s|=B_,r1(t,n,s,a,o,l),t===Ne&&(ce=Ne=null,de=0),xo=e,Qi=t,Xr=n,wg=s,Sg=i,QS=r,e.subtreeFlags&10256||e.flags&10256?(t.callbackNode=null,t.callbackPriority=0,CP(vd,function(){return lR(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(e.flags&13878)!==0,e.subtreeFlags&13878||r){r=te.T,te.T=null,i=ve.p,ve.p=2,a=ye,ye|=4;try{_P(t,e,n)}finally{ye=a,ve.p=i,te.T=r}}_t=1,iR(),sR(),aR()}}function iR(){if(_t===1){_t=0;var t=Qi,e=xo,n=(e.flags&13878)!==0;if(e.subtreeFlags&13878||n){n=te.T,te.T=null;var r=ve.p;ve.p=2;var i=ye;ye|=4;try{jS(e,t);var s=xg,a=Iw(t.containerInfo),o=s.focusedElem,l=s.selectionRange;if(a!==o&&o&&o.ownerDocument&&Tw(o.ownerDocument.documentElement,o)){if(l!==null&&U_(o)){var c=l.start,h=l.end;if(h===void 0&&(h=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(h,o.value.length);else{var f=o.ownerDocument||document,p=f&&f.defaultView||window;if(p.getSelection){var g=p.getSelection(),S=o.textContent.length,N=Math.min(l.start,S),P=l.end===void 0?N:Math.min(l.end,S);!g.extend&&N>P&&(a=P,P=N,N=a);var T=vT(o,N),v=vT(o,P);if(T&&v&&(g.rangeCount!==1||g.anchorNode!==T.node||g.anchorOffset!==T.offset||g.focusNode!==v.node||g.focusOffset!==v.offset)){var A=f.createRange();A.setStart(T.node,T.offset),g.removeAllRanges(),N>P?(g.addRange(A),g.extend(v.node,v.offset)):(A.setEnd(v.node,v.offset),g.addRange(A))}}}}for(f=[],g=o;g=g.parentNode;)g.nodeType===1&&f.push({element:g,left:g.scrollLeft,top:g.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<f.length;o++){var D=f[o];D.element.scrollLeft=D.left,D.element.scrollTop=D.top}}qd=!!Dg,xg=Dg=null}finally{ye=i,ve.p=r,te.T=n}}t.current=e,_t=2}}function sR(){if(_t===2){_t=0;var t=Qi,e=xo,n=(e.flags&8772)!==0;if(e.subtreeFlags&8772||n){n=te.T,te.T=null;var r=ve.p;ve.p=2;var i=ye;ye|=4;try{VS(t,e.alternate,e)}finally{ye=i,ve.p=r,te.T=n}}_t=3}}function aR(){if(_t===4||_t===3){_t=0,$O();var t=Qi,e=xo,n=Xr,r=QS;e.subtreeFlags&10256||e.flags&10256?_t=5:(_t=0,xo=Qi=null,oR(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&($i=null),x_(n),e=e.stateNode,Nn&&typeof Nn.onCommitFiberRoot=="function")try{Nn.onCommitFiberRoot(yc,e,void 0,(e.current.flags&128)===128)}catch{}if(r!==null){e=te.T,i=ve.p,ve.p=2,te.T=null;try{for(var s=t.onRecoverableError,a=0;a<r.length;a++){var o=r[a];s(o.value,{componentStack:o.stack})}}finally{te.T=e,ve.p=i}}Xr&3&&Of(),Nr(t),i=t.pendingLanes,n&261930&&i&42?t===Rg?Tu++:(Tu=0,Rg=t):Tu=0,Sc(0)}}function oR(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,bc(e)))}function Of(){return iR(),sR(),aR(),lR()}function lR(){if(_t!==5)return!1;var t=Qi,e=wg;wg=0;var n=x_(Xr),r=te.T,i=ve.p;try{ve.p=32>n?32:n,te.T=null,n=Sg,Sg=null;var s=Qi,a=Xr;if(_t=0,xo=Qi=null,Xr=0,ye&6)throw Error(L(331));var o=ye;if(ye|=4,KS(s.current),qS(s,s.current,a,n),ye=o,Sc(0,!1),Nn&&typeof Nn.onPostCommitFiberRoot=="function")try{Nn.onPostCommitFiberRoot(yc,s)}catch{}return!0}finally{ve.p=i,te.T=r,oR(t,e)}}function JT(t,e,n){e=qn(n,e),e=Eg(t.stateNode,e,2),t=Yi(t,e,2),t!==null&&(Ec(t,2),Nr(t))}function Te(t,e,n){if(t.tag===3)JT(t,t,n);else for(;e!==null;){if(e.tag===3){JT(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($i===null||!$i.has(r))){t=qn(n,t),n=bS(2),r=Yi(e,n,2),r!==null&&(AS(n,r,e,t),Ec(r,2),Nr(r));break}}e=e.return}}function dp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new EP;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(dy=!0,i.add(n),t=wP.bind(null,t,e,n),e.then(t,t))}function wP(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,Ne===t&&(de&n)===n&&(Ze===4||Ze===3&&(de&62914560)===de&&300>Cn()-Nf?!(ye&2)&&Oo(t,0):fy|=n,Do===de&&(Do=0)),Nr(t)}function uR(t,e){e===0&&(e=ew()),t=Ea(t,e),t!==null&&(Ec(t,e),Nr(t))}function SP(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),uR(t,n)}function RP(t,e){var n=0;switch(t.tag){case 31:case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(L(314))}r!==null&&r.delete(e),uR(t,n)}function CP(t,e){return N_(t,e)}var Vd=null,Ga=null,Cg=!1,Ld=!1,fp=!1,ji=0;function Nr(t){t!==Ga&&t.next===null&&(Ga===null?Vd=Ga=t:Ga=Ga.next=t),Ld=!0,Cg||(Cg=!0,DP())}function Sc(t,e){if(!fp&&Ld){fp=!0;do for(var n=!1,r=Vd;r!==null;){if(t!==0){var i=r.pendingLanes;if(i===0)var s=0;else{var a=r.suspendedLanes,o=r.pingedLanes;s=(1<<31-Dn(42|t)+1)-1,s&=i&~(a&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,ZT(r,s))}else s=de,s=yf(r,r===Ne?s:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(s&3)||vc(r,s)||(n=!0,ZT(r,s));r=r.next}while(n);fp=!1}}function NP(){cR()}function cR(){Ld=Cg=!1;var t=0;ji!==0&&FP()&&(t=ji);for(var e=Cn(),n=null,r=Vd;r!==null;){var i=r.next,s=hR(r,e);s===0?(r.next=null,n===null?Vd=i:n.next=i,i===null&&(Ga=n)):(n=r,(t!==0||s&3)&&(Ld=!0)),r=i}_t!==0&&_t!==5||Sc(t),ji!==0&&(ji=0)}function hR(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes&-62914561;0<s;){var a=31-Dn(s),o=1<<a,l=i[a];l===-1?(!(o&n)||o&r)&&(i[a]=n1(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}if(e=Ne,n=de,n=yf(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,n===0||t===e&&(Ee===2||Ee===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&jm(r),t.callbackNode=null,t.callbackPriority=0;if(!(n&3)||vc(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(r!==null&&jm(r),x_(n)){case 2:case 8:n=JA;break;case 32:n=vd;break;case 268435456:n=ZA;break;default:n=vd}return r=dR.bind(null,t),n=N_(n,r),t.callbackPriority=e,t.callbackNode=n,e}return r!==null&&r!==null&&jm(r),t.callbackPriority=2,t.callbackNode=null,2}function dR(t,e){if(_t!==0&&_t!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(Of()&&t.callbackNode!==n)return null;var r=de;return r=yf(t,t===Ne?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(XS(t,r,e),hR(t,Cn()),t.callbackNode!=null&&t.callbackNode===n?dR.bind(null,t):null)}function ZT(t,e){if(Of())return null;XS(t,e,!0)}function DP(){zP(function(){ye&6?N_(XA,NP):cR()})}function py(){if(ji===0){var t=Ro;t===0&&(t=_h,_h<<=1,!(_h&261888)&&(_h=256)),ji=t}return ji}function e0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:qh(""+t)}function t0(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function xP(t,e,n,r,i){if(e==="submit"&&n&&n.stateNode===i){var s=e0((i[_n]||null).action),a=r.submitter;a&&(e=(e=a[_n]||null)?e0(e.formAction):a.getAttribute("formAction"),e!==null&&(s=e,a=null));var o=new vf("action","action",null,r,i);t.push({event:o,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ji!==0){var l=a?t0(i,a):new FormData(i);yg(n,{pending:!0,data:l,method:i.method,action:s},null,l)}}else typeof s=="function"&&(o.preventDefault(),l=a?t0(i,a):new FormData(i),yg(n,{pending:!0,data:l,method:i.method,action:s},s,l))},currentTarget:i}]})}}for(var mp=0;mp<ag.length;mp++){var pp=ag[mp],OP=pp.toLowerCase(),PP=pp[0].toUpperCase()+pp.slice(1);sr(OP,"on"+PP)}sr(Aw,"onAnimationEnd");sr(ww,"onAnimationIteration");sr(Sw,"onAnimationStart");sr("dblclick","onDoubleClick");sr("focusin","onFocus");sr("focusout","onBlur");sr(Q1,"onTransitionRun");sr(W1,"onTransitionStart");sr(X1,"onTransitionCancel");sr(Rw,"onTransitionEnd");wo("onMouseEnter",["mouseout","mouseover"]);wo("onMouseLeave",["mouseout","mouseover"]);wo("onPointerEnter",["pointerout","pointerover"]);wo("onPointerLeave",["pointerout","pointerover"]);_a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_a("onBeforeInput",["compositionend","keypress","textInput","paste"]);_a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),MP=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zu));function fR(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var a=r.length-1;0<=a;a--){var o=r[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&i.isPropagationStopped())break e;s=o,i.currentTarget=c;try{s(i)}catch(h){Td(h)}i.currentTarget=null,s=l}else for(a=0;a<r.length;a++){if(o=r[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&i.isPropagationStopped())break e;s=o,i.currentTarget=c;try{s(i)}catch(h){Td(h)}i.currentTarget=null,s=l}}}}function le(t,e){var n=e[Jp];n===void 0&&(n=e[Jp]=new Set);var r=t+"__bubble";n.has(r)||(mR(e,t,2,!1),n.add(r))}function gp(t,e,n){var r=0;e&&(r|=4),mR(n,t,r,e)}var Rh="_reactListening"+Math.random().toString(36).slice(2);function gy(t){if(!t[Rh]){t[Rh]=!0,sw.forEach(function(n){n!=="selectionchange"&&(MP.has(n)||gp(n,!1,t),gp(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Rh]||(e[Rh]=!0,gp("selectionchange",!1,e))}}function mR(t,e,n,r){switch(RR(e)){case 2:var i=l2;break;case 8:i=u2;break;default:i=Ey}n=i.bind(null,e,n,t),i=void 0,!rg||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function _p(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var o=r.stateNode.containerInfo;if(o===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&a.stateNode.containerInfo===i)return;a=a.return}for(;o!==null;){if(a=Ja(o),a===null)return;if(l=a.tag,l===5||l===6||l===26||l===27){r=s=a;continue e}o=o.parentNode}}r=r.return}fw(function(){var c=s,h=M_(n),f=[];e:{var p=Cw.get(t);if(p!==void 0){var g=vf,S=t;switch(t){case"keypress":if(Hh(n)===0)break e;case"keydown":case"keyup":g=R1;break;case"focusin":S="focus",g=Km;break;case"focusout":S="blur",g=Km;break;case"beforeblur":case"afterblur":g=Km;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=uT;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=p1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=D1;break;case Aw:case ww:case Sw:g=y1;break;case Rw:g=O1;break;case"scroll":case"scrollend":g=f1;break;case"wheel":g=M1;break;case"copy":case"cut":case"paste":g=E1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=hT;break;case"toggle":case"beforetoggle":g=V1}var N=(e&4)!==0,P=!N&&(t==="scroll"||t==="scrollend"),T=N?p!==null?p+"Capture":null:p;N=[];for(var v=c,A;v!==null;){var D=v;if(A=D.stateNode,D=D.tag,D!==5&&D!==26&&D!==27||A===null||T===null||(D=Mu(v,T),D!=null&&N.push(qu(v,D,A))),P)break;v=v.return}0<N.length&&(p=new g(p,S,null,n,h),f.push({event:p,listeners:N}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",p&&n!==ng&&(S=n.relatedTarget||n.fromElement)&&(Ja(S)||S[Zo]))break e;if((g||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,g?(S=n.relatedTarget||n.toElement,g=c,S=S?Ja(S):null,S!==null&&(P=_c(S),N=S.tag,S!==P||N!==5&&N!==27&&N!==6)&&(S=null)):(g=null,S=c),g!==S)){if(N=uT,D="onMouseLeave",T="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(N=hT,D="onPointerLeave",T="onPointerEnter",v="pointer"),P=g==null?p:eu(g),A=S==null?p:eu(S),p=new N(D,v+"leave",g,n,h),p.target=P,p.relatedTarget=A,D=null,Ja(h)===c&&(N=new N(T,v+"enter",S,n,h),N.target=A,N.relatedTarget=P,D=N),P=D,g&&S)t:{for(N=kP,T=g,v=S,A=0,D=T;D;D=N(D))A++;D=0;for(var U=v;U;U=N(U))D++;for(;0<A-D;)T=N(T),A--;for(;0<D-A;)v=N(v),D--;for(;A--;){if(T===v||v!==null&&T===v.alternate){N=T;break t}T=N(T),v=N(v)}N=null}else N=null;g!==null&&n0(f,p,g,N,!1),S!==null&&P!==null&&n0(f,P,S,N,!0)}}e:{if(p=c?eu(c):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var j=pT;else if(mT(p))if(vw)j=K1;else{j=G1;var I=q1}else g=p.nodeName,!g||g.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?c&&P_(c.elementType)&&(j=pT):j=H1;if(j&&(j=j(t,c))){yw(f,j,n,h);break e}I&&I(t,p,c),t==="focusout"&&c&&p.type==="number"&&c.memoizedProps.value!=null&&tg(p,"number",p.value)}switch(I=c?eu(c):window,t){case"focusin":(mT(I)||I.contentEditable==="true")&&(to=I,ig=c,du=null);break;case"focusout":du=ig=to=null;break;case"mousedown":sg=!0;break;case"contextmenu":case"mouseup":case"dragend":sg=!1,ET(f,n,h);break;case"selectionchange":if($1)break;case"keydown":case"keyup":ET(f,n,h)}var y;if(L_)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else eo?gw(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(pw&&n.locale!=="ko"&&(eo||b!=="onCompositionStart"?b==="onCompositionEnd"&&eo&&(y=mw()):(Ui=h,k_="value"in Ui?Ui.value:Ui.textContent,eo=!0)),I=Ud(c,b),0<I.length&&(b=new cT(b,t,null,n,h),f.push({event:b,listeners:I}),y?b.data=y:(y=_w(n),y!==null&&(b.data=y)))),(y=U1?B1(t,n):F1(t,n))&&(b=Ud(c,"onBeforeInput"),0<b.length&&(I=new cT("onBeforeInput","beforeinput",null,n,h),f.push({event:I,listeners:b}),I.data=y)),xP(f,t,c,n,h)}fR(f,e)})}function qu(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ud(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||s===null||(i=Mu(t,n),i!=null&&r.unshift(qu(t,i,s)),i=Mu(t,e),i!=null&&r.push(qu(t,i,s))),t.tag===3)return r;t=t.return}return[]}function kP(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function n0(t,e,n,r,i){for(var s=e._reactName,a=[];n!==null&&n!==r;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===r)break;o!==5&&o!==26&&o!==27||c===null||(l=c,i?(c=Mu(n,s),c!=null&&a.unshift(qu(n,c,l))):i||(c=Mu(n,s),c!=null&&a.push(qu(n,c,l)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var VP=/\r\n?/g,LP=/\u0000|\uFFFD/g;function r0(t){return(typeof t=="string"?t:""+t).replace(VP,`
`).replace(LP,"")}function pR(t,e){return e=r0(e),r0(t)===e}function Ae(t,e,n,r,i,s){switch(n){case"children":typeof r=="string"?e==="body"||e==="textarea"&&r===""||So(t,r):(typeof r=="number"||typeof r=="bigint")&&e!=="body"&&So(t,""+r);break;case"className":Eh(t,"class",r);break;case"tabIndex":Eh(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Eh(t,n,r);break;case"style":dw(t,r,s);break;case"data":if(e!=="object"){Eh(t,"data",r);break}case"src":case"href":if(r===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(n);break}r=qh(""+r),t.setAttribute(n,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(e!=="input"&&Ae(t,e,"name",i.name,i,null),Ae(t,e,"formEncType",i.formEncType,i,null),Ae(t,e,"formMethod",i.formMethod,i,null),Ae(t,e,"formTarget",i.formTarget,i,null)):(Ae(t,e,"encType",i.encType,i,null),Ae(t,e,"method",i.method,i,null),Ae(t,e,"target",i.target,i,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(n);break}r=qh(""+r),t.setAttribute(n,r);break;case"onClick":r!=null&&(t.onclick=qr);break;case"onScroll":r!=null&&le("scroll",t);break;case"onScrollEnd":r!=null&&le("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(L(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(L(60));t.innerHTML=n}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}n=qh(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(n,""+r):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":r===!0?t.setAttribute(n,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(n,r):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(n,r):t.removeAttribute(n);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(n):t.setAttribute(n,r);break;case"popover":le("beforetoggle",t),le("toggle",t),zh(t,"popover",r);break;case"xlinkActuate":Mr(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Mr(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Mr(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Mr(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Mr(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Mr(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Mr(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Mr(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Mr(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":zh(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=h1.get(n)||n,zh(t,n,r))}}function Ng(t,e,n,r,i,s){switch(n){case"style":dw(t,r,s);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(L(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(L(60));t.innerHTML=n}}break;case"children":typeof r=="string"?So(t,r):(typeof r=="number"||typeof r=="bigint")&&So(t,""+r);break;case"onScroll":r!=null&&le("scroll",t);break;case"onScrollEnd":r!=null&&le("scrollend",t);break;case"onClick":r!=null&&(t.onclick=qr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!aw.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),e=n.slice(2,i?n.length-7:void 0),s=t[_n]||null,s=s!=null?s[n]:null,typeof s=="function"&&t.removeEventListener(e,s,i),typeof r=="function")){typeof s!="function"&&s!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,r,i);break e}n in t?t[n]=r:r===!0?t.setAttribute(n,""):zh(t,n,r)}}}function Vt(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":le("error",t),le("load",t);var r=!1,i=!1,s;for(s in n)if(n.hasOwnProperty(s)){var a=n[s];if(a!=null)switch(s){case"src":r=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(L(137,e));default:Ae(t,e,s,a,n,null)}}i&&Ae(t,e,"srcSet",n.srcSet,n,null),r&&Ae(t,e,"src",n.src,n,null);return;case"input":le("invalid",t);var o=s=a=i=null,l=null,c=null;for(r in n)if(n.hasOwnProperty(r)){var h=n[r];if(h!=null)switch(r){case"name":i=h;break;case"type":a=h;break;case"checked":l=h;break;case"defaultChecked":c=h;break;case"value":s=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(L(137,e));break;default:Ae(t,e,r,h,n,null)}}uw(t,s,o,l,c,a,i,!1);return;case"select":le("invalid",t),r=a=s=null;for(i in n)if(n.hasOwnProperty(i)&&(o=n[i],o!=null))switch(i){case"value":s=o;break;case"defaultValue":a=o;break;case"multiple":r=o;default:Ae(t,e,i,o,n,null)}e=s,n=a,t.multiple=!!r,e!=null?co(t,!!r,e,!1):n!=null&&co(t,!!r,n,!0);return;case"textarea":le("invalid",t),s=i=r=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":r=o;break;case"defaultValue":i=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(L(91));break;default:Ae(t,e,a,o,n,null)}hw(t,r,i,s);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Ae(t,e,l,r,n,null)}return;case"dialog":le("beforetoggle",t),le("toggle",t),le("cancel",t),le("close",t);break;case"iframe":case"object":le("load",t);break;case"video":case"audio":for(r=0;r<zu.length;r++)le(zu[r],t);break;case"image":le("error",t),le("load",t);break;case"details":le("toggle",t);break;case"embed":case"source":case"link":le("error",t),le("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(r=n[c],r!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(L(137,e));default:Ae(t,e,c,r,n,null)}return;default:if(P_(e)){for(h in n)n.hasOwnProperty(h)&&(r=n[h],r!==void 0&&Ng(t,e,h,r,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(r=n[o],r!=null&&Ae(t,e,o,r,n,null))}function UP(t,e,n,r){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,s=null,a=null,o=null,l=null,c=null,h=null;for(g in n){var f=n[g];if(n.hasOwnProperty(g)&&f!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":l=f;default:r.hasOwnProperty(g)||Ae(t,e,g,null,r,f)}}for(var p in r){var g=r[p];if(f=n[p],r.hasOwnProperty(p)&&(g!=null||f!=null))switch(p){case"type":s=g;break;case"name":i=g;break;case"checked":c=g;break;case"defaultChecked":h=g;break;case"value":a=g;break;case"defaultValue":o=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(L(137,e));break;default:g!==f&&Ae(t,e,p,g,r,f)}}eg(t,a,o,l,c,h,s,i);return;case"select":g=a=o=p=null;for(s in n)if(l=n[s],n.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":g=l;default:r.hasOwnProperty(s)||Ae(t,e,s,null,r,l)}for(i in r)if(s=r[i],l=n[i],r.hasOwnProperty(i)&&(s!=null||l!=null))switch(i){case"value":p=s;break;case"defaultValue":o=s;break;case"multiple":a=s;default:s!==l&&Ae(t,e,i,s,r,l)}e=o,n=a,r=g,p!=null?co(t,!!n,p,!1):!!r!=!!n&&(e!=null?co(t,!!n,e,!0):co(t,!!n,n?[]:"",!1));return;case"textarea":g=p=null;for(o in n)if(i=n[o],n.hasOwnProperty(o)&&i!=null&&!r.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:Ae(t,e,o,null,r,i)}for(a in r)if(i=r[a],s=n[a],r.hasOwnProperty(a)&&(i!=null||s!=null))switch(a){case"value":p=i;break;case"defaultValue":g=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(L(91));break;default:i!==s&&Ae(t,e,a,i,r,s)}cw(t,p,g);return;case"option":for(var S in n)if(p=n[S],n.hasOwnProperty(S)&&p!=null&&!r.hasOwnProperty(S))switch(S){case"selected":t.selected=!1;break;default:Ae(t,e,S,null,r,p)}for(l in r)if(p=r[l],g=n[l],r.hasOwnProperty(l)&&p!==g&&(p!=null||g!=null))switch(l){case"selected":t.selected=p&&typeof p!="function"&&typeof p!="symbol";break;default:Ae(t,e,l,p,r,g)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var N in n)p=n[N],n.hasOwnProperty(N)&&p!=null&&!r.hasOwnProperty(N)&&Ae(t,e,N,null,r,p);for(c in r)if(p=r[c],g=n[c],r.hasOwnProperty(c)&&p!==g&&(p!=null||g!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(L(137,e));break;default:Ae(t,e,c,p,r,g)}return;default:if(P_(e)){for(var P in n)p=n[P],n.hasOwnProperty(P)&&p!==void 0&&!r.hasOwnProperty(P)&&Ng(t,e,P,void 0,r,p);for(h in r)p=r[h],g=n[h],!r.hasOwnProperty(h)||p===g||p===void 0&&g===void 0||Ng(t,e,h,p,r,g);return}}for(var T in n)p=n[T],n.hasOwnProperty(T)&&p!=null&&!r.hasOwnProperty(T)&&Ae(t,e,T,null,r,p);for(f in r)p=r[f],g=n[f],!r.hasOwnProperty(f)||p===g||p==null&&g==null||Ae(t,e,f,p,r,g)}function i0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function BP(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),r=0;r<n.length;r++){var i=n[r],s=i.transferSize,a=i.initiatorType,o=i.duration;if(s&&o&&i0(a)){for(a=0,o=i.responseEnd,r+=1;r<n.length;r++){var l=n[r],c=l.startTime;if(c>o)break;var h=l.transferSize,f=l.initiatorType;h&&i0(f)&&(l=l.responseEnd,a+=h*(l<o?1:(o-c)/(l-c)))}if(--r,e+=8*(s+a)/(i.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Dg=null,xg=null;function Bd(t){return t.nodeType===9?t:t.ownerDocument}function s0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function gR(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Og(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var yp=null;function FP(){var t=window.event;return t&&t.type==="popstate"?t===yp?!1:(yp=t,!0):(yp=null,!1)}var _R=typeof setTimeout=="function"?setTimeout:void 0,jP=typeof clearTimeout=="function"?clearTimeout:void 0,a0=typeof Promise=="function"?Promise:void 0,zP=typeof queueMicrotask=="function"?queueMicrotask:typeof a0<"u"?function(t){return a0.resolve(null).then(t).catch(qP)}:_R;function qP(t){setTimeout(function(){throw t})}function gs(t){return t==="head"}function o0(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"||n==="/&"){if(r===0){t.removeChild(i),Mo(e);return}r--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")r++;else if(n==="html")Iu(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,Iu(n);for(var s=n.firstChild;s;){var a=s.nextSibling,o=s.nodeName;s[Tc]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=a}}else n==="body"&&Iu(t.ownerDocument.body);n=i}while(n);Mo(e)}function l0(t,e){var n=t;t=0;do{var r=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=r}while(n)}function Pg(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Pg(n),O_(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function GP(t,e,n,r){for(;t.nodeType===1;){var i=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Tc])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(s=t.getAttribute("rel"),s==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(s!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(s=t.getAttribute("src"),(s!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&s&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var s=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===s)return t}else return t;if(t=$n(t.nextSibling),t===null)break}return null}function HP(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=$n(t.nextSibling),t===null))return null;return t}function yR(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=$n(t.nextSibling),t===null))return null;return t}function Mg(t){return t.data==="$?"||t.data==="$~"}function kg(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function KP(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var r=function(){e(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function $n(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Vg=null;function u0(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return $n(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function c0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function vR(t,e,n){switch(e=Bd(n),t){case"html":if(t=e.documentElement,!t)throw Error(L(452));return t;case"head":if(t=e.head,!t)throw Error(L(453));return t;case"body":if(t=e.body,!t)throw Error(L(454));return t;default:throw Error(L(451))}}function Iu(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);O_(t)}var Wn=new Map,h0=new Set;function Fd(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ci=ve.d;ve.d={f:YP,r:$P,D:QP,C:WP,L:XP,m:JP,X:e2,S:ZP,M:t2};function YP(){var t=ci.f(),e=Df();return t||e}function $P(t){var e=el(t);e!==null&&e.tag===5&&e.type==="form"?dS(e):ci.r(t)}var il=typeof document>"u"?null:document;function ER(t,e,n){var r=il;if(r&&typeof e=="string"&&e){var i=zn(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),h0.has(i)||(h0.add(i),t={rel:t,crossOrigin:n,href:e},r.querySelector(i)===null&&(e=r.createElement("link"),Vt(e,"link",t),St(e),r.head.appendChild(e)))}}function QP(t){ci.D(t),ER("dns-prefetch",t,null)}function WP(t,e){ci.C(t,e),ER("preconnect",t,e)}function XP(t,e,n){ci.L(t,e,n);var r=il;if(r&&t&&e){var i='link[rel="preload"][as="'+zn(e)+'"]';e==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+zn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+zn(n.imageSizes)+'"]')):i+='[href="'+zn(t)+'"]';var s=i;switch(e){case"style":s=Po(t);break;case"script":s=sl(t)}Wn.has(s)||(t=Be({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),Wn.set(s,t),r.querySelector(i)!==null||e==="style"&&r.querySelector(Rc(s))||e==="script"&&r.querySelector(Cc(s))||(e=r.createElement("link"),Vt(e,"link",t),St(e),r.head.appendChild(e)))}}function JP(t,e){ci.m(t,e);var n=il;if(n&&t){var r=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+zn(r)+'"][href="'+zn(t)+'"]',s=i;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=sl(t)}if(!Wn.has(s)&&(t=Be({rel:"modulepreload",href:t},e),Wn.set(s,t),n.querySelector(i)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Cc(s)))return}r=n.createElement("link"),Vt(r,"link",t),St(r),n.head.appendChild(r)}}}function ZP(t,e,n){ci.S(t,e,n);var r=il;if(r&&t){var i=uo(r).hoistableStyles,s=Po(t);e=e||"default";var a=i.get(s);if(!a){var o={loading:0,preload:null};if(a=r.querySelector(Rc(s)))o.loading=5;else{t=Be({rel:"stylesheet",href:t,"data-precedence":e},n),(n=Wn.get(s))&&_y(t,n);var l=a=r.createElement("link");St(l),Vt(l,"link",t),l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Zh(a,e,r)}a={type:"stylesheet",instance:a,count:1,state:o},i.set(s,a)}}}function e2(t,e){ci.X(t,e);var n=il;if(n&&t){var r=uo(n).hoistableScripts,i=sl(t),s=r.get(i);s||(s=n.querySelector(Cc(i)),s||(t=Be({src:t,async:!0},e),(e=Wn.get(i))&&yy(t,e),s=n.createElement("script"),St(s),Vt(s,"link",t),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},r.set(i,s))}}function t2(t,e){ci.M(t,e);var n=il;if(n&&t){var r=uo(n).hoistableScripts,i=sl(t),s=r.get(i);s||(s=n.querySelector(Cc(i)),s||(t=Be({src:t,async:!0,type:"module"},e),(e=Wn.get(i))&&yy(t,e),s=n.createElement("script"),St(s),Vt(s,"link",t),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},r.set(i,s))}}function d0(t,e,n,r){var i=(i=Gi.current)?Fd(i):null;if(!i)throw Error(L(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=Po(n.href),n=uo(i).hoistableStyles,r=n.get(e),r||(r={type:"style",instance:null,count:0,state:null},n.set(e,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Po(n.href);var s=uo(i).hoistableStyles,a=s.get(t);if(a||(i=i.ownerDocument||i,a={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(t,a),(s=i.querySelector(Rc(t)))&&!s._p&&(a.instance=s,a.state.loading=5),Wn.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Wn.set(t,n),s||n2(i,t,n,a.state))),e&&r===null)throw Error(L(528,""));return a}if(e&&r!==null)throw Error(L(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=sl(n),n=uo(i).hoistableScripts,r=n.get(e),r||(r={type:"script",instance:null,count:0,state:null},n.set(e,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(L(444,t))}}function Po(t){return'href="'+zn(t)+'"'}function Rc(t){return'link[rel="stylesheet"]['+t+"]"}function TR(t){return Be({},t,{"data-precedence":t.precedence,precedence:null})}function n2(t,e,n,r){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?r.loading=1:(e=t.createElement("link"),r.preload=e,e.addEventListener("load",function(){return r.loading|=1}),e.addEventListener("error",function(){return r.loading|=2}),Vt(e,"link",n),St(e),t.head.appendChild(e))}function sl(t){return'[src="'+zn(t)+'"]'}function Cc(t){return"script[async]"+t}function f0(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var r=t.querySelector('style[data-href~="'+zn(n.href)+'"]');if(r)return e.instance=r,St(r),r;var i=Be({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),St(r),Vt(r,"style",i),Zh(r,n.precedence,t),e.instance=r;case"stylesheet":i=Po(n.href);var s=t.querySelector(Rc(i));if(s)return e.state.loading|=4,e.instance=s,St(s),s;r=TR(n),(i=Wn.get(i))&&_y(r,i),s=(t.ownerDocument||t).createElement("link"),St(s);var a=s;return a._p=new Promise(function(o,l){a.onload=o,a.onerror=l}),Vt(s,"link",r),e.state.loading|=4,Zh(s,n.precedence,t),e.instance=s;case"script":return s=sl(n.src),(i=t.querySelector(Cc(s)))?(e.instance=i,St(i),i):(r=n,(i=Wn.get(s))&&(r=Be({},n),yy(r,i)),t=t.ownerDocument||t,i=t.createElement("script"),St(i),Vt(i,"link",r),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(L(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(r=e.instance,e.state.loading|=4,Zh(r,n.precedence,t));return e.instance}function Zh(t,e,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=r.length?r[r.length-1]:null,s=i,a=0;a<r.length;a++){var o=r[a];if(o.dataset.precedence===e)s=o;else if(s!==i)break}s?s.parentNode.insertBefore(t,s.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function _y(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function yy(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var ed=null;function m0(t,e,n){if(ed===null){var r=new Map,i=ed=new Map;i.set(n,r)}else i=ed,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(t))return r;for(r.set(t,null),n=n.getElementsByTagName(t),i=0;i<n.length;i++){var s=n[i];if(!(s[Tc]||s[Ot]||t==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var a=s.getAttribute(e)||"";a=t+a;var o=r.get(a);o?o.push(s):r.set(a,[s])}}return r}function p0(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function r2(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function IR(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}function i2(t,e,n,r){if(n.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var i=Po(r.href),s=e.querySelector(Rc(i));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=jd.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=s,St(s);return}s=e.ownerDocument||e,r=TR(r),(i=Wn.get(i))&&_y(r,i),s=s.createElement("link"),St(s);var a=s;a._p=new Promise(function(o,l){a.onload=o,a.onerror=l}),Vt(s,"link",r),n.instance=s}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&!(n.state.loading&3)&&(t.count++,n=jd.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var vp=0;function s2(t,e){return t.stylesheets&&t.count===0&&td(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var r=setTimeout(function(){if(t.stylesheets&&td(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4+e);0<t.imgBytes&&vp===0&&(vp=62500*BP());var i=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&td(t,t.stylesheets),t.unsuspend)){var s=t.unsuspend;t.unsuspend=null,s()}},(t.imgBytes>vp?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function jd(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)td(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var zd=null;function td(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,zd=new Map,e.forEach(a2,t),zd=null,jd.call(t))}function a2(t,e){if(!(e.state.loading&4)){var n=zd.get(t);if(n)var r=n.get(null);else{n=new Map,zd.set(t,n);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<i.length;s++){var a=i[s];(a.nodeName==="LINK"||a.getAttribute("media")!=="not all")&&(n.set(a.dataset.precedence,a),r=a)}r&&n.set(null,r)}i=e.instance,a=i.getAttribute("data-precedence"),s=n.get(a)||r,s===r&&n.set(null,i),n.set(a,i),this.count++,r=jd.bind(this),i.addEventListener("load",r),i.addEventListener("error",r),s?s.parentNode.insertBefore(i,s.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var Gu={$$typeof:zr,Provider:null,Consumer:null,_currentValue:Gs,_currentValue2:Gs,_threadCount:0};function o2(t,e,n,r,i,s,a,o,l){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=zm(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zm(0),this.hiddenUpdates=zm(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=s,this.onRecoverableError=a,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function bR(t,e,n,r,i,s,a,o,l,c,h,f){return t=new o2(t,e,n,a,l,c,h,f,o),e=1,s===!0&&(e|=24),s=wn(3,null,null,e),t.current=s,s.stateNode=t,e=G_(),e.refCount++,t.pooledCache=e,e.refCount++,s.memoizedState={element:r,isDehydrated:n,cache:e},Y_(s),t}function AR(t){return t?(t=io,t):io}function wR(t,e,n,r,i,s){i=AR(i),r.context===null?r.context=i:r.pendingContext=i,r=Ki(e),r.payload={element:n},s=s===void 0?null:s,s!==null&&(r.callback=s),n=Yi(t,r,e),n!==null&&(gn(n,t,e),mu(n,t,e))}function g0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function vy(t,e){g0(t,e),(t=t.alternate)&&g0(t,e)}function SR(t){if(t.tag===13||t.tag===31){var e=Ea(t,67108864);e!==null&&gn(e,t,67108864),vy(t,67108864)}}function _0(t){if(t.tag===13||t.tag===31){var e=xn();e=D_(e);var n=Ea(t,e);n!==null&&gn(n,t,e),vy(t,e)}}var qd=!0;function l2(t,e,n,r){var i=te.T;te.T=null;var s=ve.p;try{ve.p=2,Ey(t,e,n,r)}finally{ve.p=s,te.T=i}}function u2(t,e,n,r){var i=te.T;te.T=null;var s=ve.p;try{ve.p=8,Ey(t,e,n,r)}finally{ve.p=s,te.T=i}}function Ey(t,e,n,r){if(qd){var i=Lg(r);if(i===null)_p(t,e,r,Gd,n),y0(t,r);else if(h2(i,t,e,n,r))r.stopPropagation();else if(y0(t,r),e&4&&-1<c2.indexOf(t)){for(;i!==null;){var s=el(i);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var a=xs(s.pendingLanes);if(a!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;a;){var l=1<<31-Dn(a);o.entanglements[1]|=l,a&=~l}Nr(s),!(ye&6)&&(Pd=Cn()+500,Sc(0))}}break;case 31:case 13:o=Ea(s,2),o!==null&&gn(o,s,2),Df(),vy(s,2)}if(s=Lg(r),s===null&&_p(t,e,r,Gd,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else _p(t,e,r,null,n)}}function Lg(t){return t=M_(t),Ty(t)}var Gd=null;function Ty(t){if(Gd=null,t=Ja(t),t!==null){var e=_c(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=KA(e),t!==null)return t;t=null}else if(n===31){if(t=YA(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Gd=t,null}function RR(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(QO()){case XA:return 2;case JA:return 8;case vd:case WO:return 32;case ZA:return 268435456;default:return 32}default:return 32}}var Ug=!1,Wi=null,Xi=null,Ji=null,Hu=new Map,Ku=new Map,Mi=[],c2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function y0(t,e){switch(t){case"focusin":case"focusout":Wi=null;break;case"dragenter":case"dragleave":Xi=null;break;case"mouseover":case"mouseout":Ji=null;break;case"pointerover":case"pointerout":Hu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ku.delete(e.pointerId)}}function zl(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=el(e),e!==null&&SR(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function h2(t,e,n,r,i){switch(e){case"focusin":return Wi=zl(Wi,t,e,n,r,i),!0;case"dragenter":return Xi=zl(Xi,t,e,n,r,i),!0;case"mouseover":return Ji=zl(Ji,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Hu.set(s,zl(Hu.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ku.set(s,zl(Ku.get(s)||null,t,e,n,r,i)),!0}return!1}function CR(t){var e=Ja(t.target);if(e!==null){var n=_c(e);if(n!==null){if(e=n.tag,e===13){if(e=KA(n),e!==null){t.blockedOn=e,nT(t.priority,function(){_0(n)});return}}else if(e===31){if(e=YA(n),e!==null){t.blockedOn=e,nT(t.priority,function(){_0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function nd(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Lg(t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ng=r,n.target.dispatchEvent(r),ng=null}else return e=el(n),e!==null&&SR(e),t.blockedOn=n,!1;e.shift()}return!0}function v0(t,e,n){nd(t)&&n.delete(e)}function d2(){Ug=!1,Wi!==null&&nd(Wi)&&(Wi=null),Xi!==null&&nd(Xi)&&(Xi=null),Ji!==null&&nd(Ji)&&(Ji=null),Hu.forEach(v0),Ku.forEach(v0)}function Ch(t,e){t.blockedOn===e&&(t.blockedOn=null,Ug||(Ug=!0,vt.unstable_scheduleCallback(vt.unstable_NormalPriority,d2)))}var Nh=null;function E0(t){Nh!==t&&(Nh=t,vt.unstable_scheduleCallback(vt.unstable_NormalPriority,function(){Nh===t&&(Nh=null);for(var e=0;e<t.length;e+=3){var n=t[e],r=t[e+1],i=t[e+2];if(typeof r!="function"){if(Ty(r||n)===null)continue;break}var s=el(n);s!==null&&(t.splice(e,3),e-=3,yg(s,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Mo(t){function e(l){return Ch(l,t)}Wi!==null&&Ch(Wi,t),Xi!==null&&Ch(Xi,t),Ji!==null&&Ch(Ji,t),Hu.forEach(e),Ku.forEach(e);for(var n=0;n<Mi.length;n++){var r=Mi[n];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Mi.length&&(n=Mi[0],n.blockedOn===null);)CR(n),n.blockedOn===null&&Mi.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],s=n[r+1],a=i[_n]||null;if(typeof s=="function")a||E0(n);else if(a){var o=null;if(s&&s.hasAttribute("formAction")){if(i=s,a=s[_n]||null)o=a.formAction;else if(Ty(i)!==null)continue}else o=a.action;typeof o=="function"?n[r+1]=o:(n.splice(r,3),r-=3),E0(n)}}}function NR(){function t(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(a){return i=a})},focusReset:"manual",scroll:"manual"})}function e(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,i=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),i!==null&&(i(),i=null)}}}function Iy(t){this._internalRoot=t}Pf.prototype.render=Iy.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(L(409));var n=e.current,r=xn();wR(n,r,t,e,null,null)};Pf.prototype.unmount=Iy.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;wR(t.current,2,null,t,null,null),Df(),e[Zo]=null}};function Pf(t){this._internalRoot=t}Pf.prototype.unstable_scheduleHydration=function(t){if(t){var e=iw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Mi.length&&e!==0&&e<Mi[n].priority;n++);Mi.splice(n,0,t),n===0&&CR(t)}};var T0=GA.version;if(T0!=="19.2.0")throw Error(L(527,T0,"19.2.0"));ve.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(L(188)):(t=Object.keys(t).join(","),Error(L(268,t)));return t=zO(e),t=t!==null?$A(t):null,t=t===null?null:t.stateNode,t};var f2={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:te,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Dh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Dh.isDisabled&&Dh.supportsFiber)try{yc=Dh.inject(f2),Nn=Dh}catch{}}pf.createRoot=function(t,e){if(!HA(t))throw Error(L(299));var n=!1,r="",i=ES,s=TS,a=IS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(s=e.onCaughtError),e.onRecoverableError!==void 0&&(a=e.onRecoverableError)),e=bR(t,1,!1,null,null,n,r,null,i,s,a,NR),t[Zo]=e.current,gy(t),new Iy(e)};pf.hydrateRoot=function(t,e,n){if(!HA(t))throw Error(L(299));var r=!1,i="",s=ES,a=TS,o=IS,l=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(a=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),e=bR(t,1,!0,e,n??null,r,i,l,s,a,o,NR),e.context=AR(null),n=e.current,r=xn(),r=D_(r),i=Ki(r),i.callback=null,Yi(n,i,r),n=r,e.current.lanes=n,Ec(e,n),Nr(e),t[Zo]=e.current,gy(t),new Pf(e)};pf.version="19.2.0";function DR(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(DR)}catch(t){console.error(t)}}DR(),UA.exports=pf;var m2=UA.exports;const p2=CA(m2),g2="modulepreload",_2=function(t){return"/course-results.v2/"+t},I0={},xR=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(l=>{if(l=_2(l),l in I0)return;I0[l]=!0;const c=l.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":g2,c||(f.as="script"),f.crossOrigin="",f.href=l,o&&f.setAttribute("nonce",o),document.head.appendChild(f),c)return new Promise((p,g)=>{f.addEventListener("load",p),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 *//**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var b0;(function(t){t.OUTCOME_UNSPECIFIED="OUTCOME_UNSPECIFIED",t.OUTCOME_OK="OUTCOME_OK",t.OUTCOME_FAILED="OUTCOME_FAILED",t.OUTCOME_DEADLINE_EXCEEDED="OUTCOME_DEADLINE_EXCEEDED"})(b0||(b0={}));var A0;(function(t){t.LANGUAGE_UNSPECIFIED="LANGUAGE_UNSPECIFIED",t.PYTHON="PYTHON"})(A0||(A0={}));var w0;(function(t){t.SCHEDULING_UNSPECIFIED="SCHEDULING_UNSPECIFIED",t.SILENT="SILENT",t.WHEN_IDLE="WHEN_IDLE",t.INTERRUPT="INTERRUPT"})(w0||(w0={}));var S0;(function(t){t.TYPE_UNSPECIFIED="TYPE_UNSPECIFIED",t.STRING="STRING",t.NUMBER="NUMBER",t.INTEGER="INTEGER",t.BOOLEAN="BOOLEAN",t.ARRAY="ARRAY",t.OBJECT="OBJECT",t.NULL="NULL"})(S0||(S0={}));var R0;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.MODE_DYNAMIC="MODE_DYNAMIC"})(R0||(R0={}));var C0;(function(t){t.AUTH_TYPE_UNSPECIFIED="AUTH_TYPE_UNSPECIFIED",t.NO_AUTH="NO_AUTH",t.API_KEY_AUTH="API_KEY_AUTH",t.HTTP_BASIC_AUTH="HTTP_BASIC_AUTH",t.GOOGLE_SERVICE_ACCOUNT_AUTH="GOOGLE_SERVICE_ACCOUNT_AUTH",t.OAUTH="OAUTH",t.OIDC_AUTH="OIDC_AUTH"})(C0||(C0={}));var N0;(function(t){t.API_SPEC_UNSPECIFIED="API_SPEC_UNSPECIFIED",t.SIMPLE_SEARCH="SIMPLE_SEARCH",t.ELASTIC_SEARCH="ELASTIC_SEARCH"})(N0||(N0={}));var D0;(function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",t.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY",t.HARM_CATEGORY_IMAGE_HATE="HARM_CATEGORY_IMAGE_HATE",t.HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT="HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT",t.HARM_CATEGORY_IMAGE_HARASSMENT="HARM_CATEGORY_IMAGE_HARASSMENT",t.HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT="HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_JAILBREAK="HARM_CATEGORY_JAILBREAK"})(D0||(D0={}));var x0;(function(t){t.HARM_BLOCK_METHOD_UNSPECIFIED="HARM_BLOCK_METHOD_UNSPECIFIED",t.SEVERITY="SEVERITY",t.PROBABILITY="PROBABILITY"})(x0||(x0={}));var O0;(function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE",t.OFF="OFF"})(O0||(O0={}));var P0;(function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.LANGUAGE="LANGUAGE",t.OTHER="OTHER",t.BLOCKLIST="BLOCKLIST",t.PROHIBITED_CONTENT="PROHIBITED_CONTENT",t.SPII="SPII",t.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",t.IMAGE_SAFETY="IMAGE_SAFETY",t.UNEXPECTED_TOOL_CALL="UNEXPECTED_TOOL_CALL",t.IMAGE_PROHIBITED_CONTENT="IMAGE_PROHIBITED_CONTENT",t.NO_IMAGE="NO_IMAGE"})(P0||(P0={}));var M0;(function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"})(M0||(M0={}));var k0;(function(t){t.HARM_SEVERITY_UNSPECIFIED="HARM_SEVERITY_UNSPECIFIED",t.HARM_SEVERITY_NEGLIGIBLE="HARM_SEVERITY_NEGLIGIBLE",t.HARM_SEVERITY_LOW="HARM_SEVERITY_LOW",t.HARM_SEVERITY_MEDIUM="HARM_SEVERITY_MEDIUM",t.HARM_SEVERITY_HIGH="HARM_SEVERITY_HIGH"})(k0||(k0={}));var V0;(function(t){t.URL_RETRIEVAL_STATUS_UNSPECIFIED="URL_RETRIEVAL_STATUS_UNSPECIFIED",t.URL_RETRIEVAL_STATUS_SUCCESS="URL_RETRIEVAL_STATUS_SUCCESS",t.URL_RETRIEVAL_STATUS_ERROR="URL_RETRIEVAL_STATUS_ERROR",t.URL_RETRIEVAL_STATUS_PAYWALL="URL_RETRIEVAL_STATUS_PAYWALL",t.URL_RETRIEVAL_STATUS_UNSAFE="URL_RETRIEVAL_STATUS_UNSAFE"})(V0||(V0={}));var L0;(function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER",t.BLOCKLIST="BLOCKLIST",t.PROHIBITED_CONTENT="PROHIBITED_CONTENT",t.IMAGE_SAFETY="IMAGE_SAFETY",t.MODEL_ARMOR="MODEL_ARMOR",t.JAILBREAK="JAILBREAK"})(L0||(L0={}));var U0;(function(t){t.TRAFFIC_TYPE_UNSPECIFIED="TRAFFIC_TYPE_UNSPECIFIED",t.ON_DEMAND="ON_DEMAND",t.PROVISIONED_THROUGHPUT="PROVISIONED_THROUGHPUT"})(U0||(U0={}));var B0;(function(t){t.MODALITY_UNSPECIFIED="MODALITY_UNSPECIFIED",t.TEXT="TEXT",t.IMAGE="IMAGE",t.AUDIO="AUDIO"})(B0||(B0={}));var F0;(function(t){t.MEDIA_RESOLUTION_UNSPECIFIED="MEDIA_RESOLUTION_UNSPECIFIED",t.MEDIA_RESOLUTION_LOW="MEDIA_RESOLUTION_LOW",t.MEDIA_RESOLUTION_MEDIUM="MEDIA_RESOLUTION_MEDIUM",t.MEDIA_RESOLUTION_HIGH="MEDIA_RESOLUTION_HIGH"})(F0||(F0={}));var j0;(function(t){t.TUNING_MODE_UNSPECIFIED="TUNING_MODE_UNSPECIFIED",t.TUNING_MODE_FULL="TUNING_MODE_FULL",t.TUNING_MODE_PEFT_ADAPTER="TUNING_MODE_PEFT_ADAPTER"})(j0||(j0={}));var z0;(function(t){t.ADAPTER_SIZE_UNSPECIFIED="ADAPTER_SIZE_UNSPECIFIED",t.ADAPTER_SIZE_ONE="ADAPTER_SIZE_ONE",t.ADAPTER_SIZE_TWO="ADAPTER_SIZE_TWO",t.ADAPTER_SIZE_FOUR="ADAPTER_SIZE_FOUR",t.ADAPTER_SIZE_EIGHT="ADAPTER_SIZE_EIGHT",t.ADAPTER_SIZE_SIXTEEN="ADAPTER_SIZE_SIXTEEN",t.ADAPTER_SIZE_THIRTY_TWO="ADAPTER_SIZE_THIRTY_TWO"})(z0||(z0={}));var q0;(function(t){t.JOB_STATE_UNSPECIFIED="JOB_STATE_UNSPECIFIED",t.JOB_STATE_QUEUED="JOB_STATE_QUEUED",t.JOB_STATE_PENDING="JOB_STATE_PENDING",t.JOB_STATE_RUNNING="JOB_STATE_RUNNING",t.JOB_STATE_SUCCEEDED="JOB_STATE_SUCCEEDED",t.JOB_STATE_FAILED="JOB_STATE_FAILED",t.JOB_STATE_CANCELLING="JOB_STATE_CANCELLING",t.JOB_STATE_CANCELLED="JOB_STATE_CANCELLED",t.JOB_STATE_PAUSED="JOB_STATE_PAUSED",t.JOB_STATE_EXPIRED="JOB_STATE_EXPIRED",t.JOB_STATE_UPDATING="JOB_STATE_UPDATING",t.JOB_STATE_PARTIALLY_SUCCEEDED="JOB_STATE_PARTIALLY_SUCCEEDED"})(q0||(q0={}));var G0;(function(t){t.TUNING_TASK_UNSPECIFIED="TUNING_TASK_UNSPECIFIED",t.TUNING_TASK_I2V="TUNING_TASK_I2V",t.TUNING_TASK_T2V="TUNING_TASK_T2V"})(G0||(G0={}));var H0;(function(t){t.FEATURE_SELECTION_PREFERENCE_UNSPECIFIED="FEATURE_SELECTION_PREFERENCE_UNSPECIFIED",t.PRIORITIZE_QUALITY="PRIORITIZE_QUALITY",t.BALANCED="BALANCED",t.PRIORITIZE_COST="PRIORITIZE_COST"})(H0||(H0={}));var K0;(function(t){t.UNSPECIFIED="UNSPECIFIED",t.BLOCKING="BLOCKING",t.NON_BLOCKING="NON_BLOCKING"})(K0||(K0={}));var Y0;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.MODE_DYNAMIC="MODE_DYNAMIC"})(Y0||(Y0={}));var $0;(function(t){t.ENVIRONMENT_UNSPECIFIED="ENVIRONMENT_UNSPECIFIED",t.ENVIRONMENT_BROWSER="ENVIRONMENT_BROWSER"})($0||($0={}));var Q0;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.AUTO="AUTO",t.ANY="ANY",t.NONE="NONE",t.VALIDATED="VALIDATED"})(Q0||(Q0={}));var W0;(function(t){t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"})(W0||(W0={}));var X0;(function(t){t.DONT_ALLOW="DONT_ALLOW",t.ALLOW_ADULT="ALLOW_ADULT",t.ALLOW_ALL="ALLOW_ALL"})(X0||(X0={}));var J0;(function(t){t.auto="auto",t.en="en",t.ja="ja",t.ko="ko",t.hi="hi",t.zh="zh",t.pt="pt",t.es="es"})(J0||(J0={}));var Z0;(function(t){t.MASK_MODE_DEFAULT="MASK_MODE_DEFAULT",t.MASK_MODE_USER_PROVIDED="MASK_MODE_USER_PROVIDED",t.MASK_MODE_BACKGROUND="MASK_MODE_BACKGROUND",t.MASK_MODE_FOREGROUND="MASK_MODE_FOREGROUND",t.MASK_MODE_SEMANTIC="MASK_MODE_SEMANTIC"})(Z0||(Z0={}));var eI;(function(t){t.CONTROL_TYPE_DEFAULT="CONTROL_TYPE_DEFAULT",t.CONTROL_TYPE_CANNY="CONTROL_TYPE_CANNY",t.CONTROL_TYPE_SCRIBBLE="CONTROL_TYPE_SCRIBBLE",t.CONTROL_TYPE_FACE_MESH="CONTROL_TYPE_FACE_MESH"})(eI||(eI={}));var tI;(function(t){t.SUBJECT_TYPE_DEFAULT="SUBJECT_TYPE_DEFAULT",t.SUBJECT_TYPE_PERSON="SUBJECT_TYPE_PERSON",t.SUBJECT_TYPE_ANIMAL="SUBJECT_TYPE_ANIMAL",t.SUBJECT_TYPE_PRODUCT="SUBJECT_TYPE_PRODUCT"})(tI||(tI={}));var nI;(function(t){t.EDIT_MODE_DEFAULT="EDIT_MODE_DEFAULT",t.EDIT_MODE_INPAINT_REMOVAL="EDIT_MODE_INPAINT_REMOVAL",t.EDIT_MODE_INPAINT_INSERTION="EDIT_MODE_INPAINT_INSERTION",t.EDIT_MODE_OUTPAINT="EDIT_MODE_OUTPAINT",t.EDIT_MODE_CONTROLLED_EDITING="EDIT_MODE_CONTROLLED_EDITING",t.EDIT_MODE_STYLE="EDIT_MODE_STYLE",t.EDIT_MODE_BGSWAP="EDIT_MODE_BGSWAP",t.EDIT_MODE_PRODUCT_IMAGE="EDIT_MODE_PRODUCT_IMAGE"})(nI||(nI={}));var rI;(function(t){t.FOREGROUND="FOREGROUND",t.BACKGROUND="BACKGROUND",t.PROMPT="PROMPT",t.SEMANTIC="SEMANTIC",t.INTERACTIVE="INTERACTIVE"})(rI||(rI={}));var iI;(function(t){t.ASSET="ASSET",t.STYLE="STYLE"})(iI||(iI={}));var sI;(function(t){t.INSERT="INSERT",t.REMOVE="REMOVE",t.REMOVE_STATIC="REMOVE_STATIC",t.OUTPAINT="OUTPAINT"})(sI||(sI={}));var aI;(function(t){t.OPTIMIZED="OPTIMIZED",t.LOSSLESS="LOSSLESS"})(aI||(aI={}));var oI;(function(t){t.SUPERVISED_FINE_TUNING="SUPERVISED_FINE_TUNING",t.PREFERENCE_TUNING="PREFERENCE_TUNING"})(oI||(oI={}));var lI;(function(t){t.STATE_UNSPECIFIED="STATE_UNSPECIFIED",t.PROCESSING="PROCESSING",t.ACTIVE="ACTIVE",t.FAILED="FAILED"})(lI||(lI={}));var uI;(function(t){t.SOURCE_UNSPECIFIED="SOURCE_UNSPECIFIED",t.UPLOADED="UPLOADED",t.GENERATED="GENERATED"})(uI||(uI={}));var cI;(function(t){t.TURN_COMPLETE_REASON_UNSPECIFIED="TURN_COMPLETE_REASON_UNSPECIFIED",t.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",t.RESPONSE_REJECTED="RESPONSE_REJECTED",t.NEED_MORE_INPUT="NEED_MORE_INPUT"})(cI||(cI={}));var hI;(function(t){t.MODALITY_UNSPECIFIED="MODALITY_UNSPECIFIED",t.TEXT="TEXT",t.IMAGE="IMAGE",t.VIDEO="VIDEO",t.AUDIO="AUDIO",t.DOCUMENT="DOCUMENT"})(hI||(hI={}));var dI;(function(t){t.START_SENSITIVITY_UNSPECIFIED="START_SENSITIVITY_UNSPECIFIED",t.START_SENSITIVITY_HIGH="START_SENSITIVITY_HIGH",t.START_SENSITIVITY_LOW="START_SENSITIVITY_LOW"})(dI||(dI={}));var fI;(function(t){t.END_SENSITIVITY_UNSPECIFIED="END_SENSITIVITY_UNSPECIFIED",t.END_SENSITIVITY_HIGH="END_SENSITIVITY_HIGH",t.END_SENSITIVITY_LOW="END_SENSITIVITY_LOW"})(fI||(fI={}));var mI;(function(t){t.ACTIVITY_HANDLING_UNSPECIFIED="ACTIVITY_HANDLING_UNSPECIFIED",t.START_OF_ACTIVITY_INTERRUPTS="START_OF_ACTIVITY_INTERRUPTS",t.NO_INTERRUPTION="NO_INTERRUPTION"})(mI||(mI={}));var pI;(function(t){t.TURN_COVERAGE_UNSPECIFIED="TURN_COVERAGE_UNSPECIFIED",t.TURN_INCLUDES_ONLY_ACTIVITY="TURN_INCLUDES_ONLY_ACTIVITY",t.TURN_INCLUDES_ALL_INPUT="TURN_INCLUDES_ALL_INPUT"})(pI||(pI={}));var gI;(function(t){t.SCALE_UNSPECIFIED="SCALE_UNSPECIFIED",t.C_MAJOR_A_MINOR="C_MAJOR_A_MINOR",t.D_FLAT_MAJOR_B_FLAT_MINOR="D_FLAT_MAJOR_B_FLAT_MINOR",t.D_MAJOR_B_MINOR="D_MAJOR_B_MINOR",t.E_FLAT_MAJOR_C_MINOR="E_FLAT_MAJOR_C_MINOR",t.E_MAJOR_D_FLAT_MINOR="E_MAJOR_D_FLAT_MINOR",t.F_MAJOR_D_MINOR="F_MAJOR_D_MINOR",t.G_FLAT_MAJOR_E_FLAT_MINOR="G_FLAT_MAJOR_E_FLAT_MINOR",t.G_MAJOR_E_MINOR="G_MAJOR_E_MINOR",t.A_FLAT_MAJOR_F_MINOR="A_FLAT_MAJOR_F_MINOR",t.A_MAJOR_G_FLAT_MINOR="A_MAJOR_G_FLAT_MINOR",t.B_FLAT_MAJOR_G_MINOR="B_FLAT_MAJOR_G_MINOR",t.B_MAJOR_A_FLAT_MINOR="B_MAJOR_A_FLAT_MINOR"})(gI||(gI={}));var _I;(function(t){t.MUSIC_GENERATION_MODE_UNSPECIFIED="MUSIC_GENERATION_MODE_UNSPECIFIED",t.QUALITY="QUALITY",t.DIVERSITY="DIVERSITY",t.VOCALIZATION="VOCALIZATION"})(_I||(_I={}));var yI;(function(t){t.PLAYBACK_CONTROL_UNSPECIFIED="PLAYBACK_CONTROL_UNSPECIFIED",t.PLAY="PLAY",t.PAUSE="PAUSE",t.STOP="STOP",t.RESET_CONTEXT="RESET_CONTEXT"})(yI||(yI={}));/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var vI;(function(t){t.PAGED_ITEM_BATCH_JOBS="batchJobs",t.PAGED_ITEM_MODELS="models",t.PAGED_ITEM_TUNING_JOBS="tuningJobs",t.PAGED_ITEM_FILES="files",t.PAGED_ITEM_CACHED_CONTENTS="cachedContents",t.PAGED_ITEM_RAG_STORES="ragStores",t.PAGED_ITEM_DOCUMENTS="documents"})(vI||(vI={}));var EI={};/**
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
 */const OR=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},y2=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],a=t[n++],o=t[n++],l=((i&7)<<18|(s&63)<<12|(a&63)<<6|o&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},PR={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],a=i+1<t.length,o=a?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,h=s>>2,f=(s&3)<<4|o>>4;let p=(o&15)<<2|c>>6,g=c&63;l||(g=64,a||(p=64)),r.push(n[h],n[f],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(OR(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):y2(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],o=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||o==null||c==null||f==null)throw new v2;const p=s<<2|o>>4;if(r.push(p),c!==64){const g=o<<4&240|c>>2;if(r.push(g),f!==64){const S=c<<6&192|f;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class v2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const E2=function(t){const e=OR(t);return PR.encodeByteArray(e,!0)},Hd=function(t){return E2(t).replace(/\./g,"")},MR=function(t){try{return PR.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Kd(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!T2(n)||(t[n]=Kd(t[n],e[n]));return t}function T2(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
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
 */function kR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const I2=()=>kR().__FIREBASE_DEFAULTS__,b2=()=>{if(typeof process>"u"||typeof EI>"u")return;const t=EI.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},A2=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&MR(t[1]);return e&&JSON.parse(e)},by=()=>{try{return I2()||b2()||A2()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},VR=()=>{var t;return(t=by())===null||t===void 0?void 0:t.config},w2=t=>{var e;return(e=by())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class S2{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function LR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Hd(JSON.stringify(n)),Hd(JSON.stringify(a)),""].join(".")}/**
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
 */function $e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function R2(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($e())}function Ay(){var t;const e=(t=by())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function C2(){return typeof window<"u"||UR()}function UR(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function N2(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function BR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function wy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function FR(){const t=$e();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function jR(){return!Ay()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Yu(){try{return typeof indexedDB=="object"}catch{return!1}}function D2(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const x2="FirebaseError";class Gt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=x2,Object.setPrototypeOf(this,Gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ia.prototype.create)}}class Ia{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?O2(s,r):"Error",o=`${this.serviceName}: ${a} (${i}).`;return new Gt(i,o,r)}}function O2(t,e){return t.replace(P2,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const P2=/\{\$([^}]+)}/g;/**
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
 */function TI(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function M2(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $u(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],a=e[i];if(II(s)&&II(a)){if(!$u(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function II(t){return t!==null&&typeof t=="object"}/**
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
 */function al(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function lo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ru(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function zR(t,e){const n=new k2(t,e);return n.subscribe.bind(n)}class k2{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");V2(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ep),i.error===void 0&&(i.error=Ep),i.complete===void 0&&(i.complete=Ep);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function V2(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ep(){}/**
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
 */function W(t){return t&&t._delegate?t._delegate:t}class Xn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ms="[DEFAULT]";/**
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
 */class L2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new S2;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(B2(e))try{this.getOrInitializeService({instanceIdentifier:Ms})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ms){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ms){return this.instances.has(e)}getOptions(e=Ms){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(s);r===o&&a.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:U2(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ms){return this.component?this.component.multipleInstances?e:Ms:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function U2(t){return t===Ms?void 0:t}function B2(t){return t.instantiationMode==="EAGER"}/**
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
 */class qR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new L2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Sy=[];var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const GR={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},F2=ue.INFO,j2={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},z2=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=j2[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mf{constructor(e){this.name=e,this._logLevel=F2,this._logHandler=z2,this._userLogHandler=null,Sy.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?GR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}function q2(t){Sy.forEach(e=>{e.setLogLevel(t)})}function G2(t,e){for(const n of Sy){let r=null;e&&e.level&&(r=GR[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...a)=>{const o=a.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:ue[s].toLowerCase(),message:o,args:a,type:i.name})}}}const H2=(t,e)=>e.some(n=>t instanceof n);let bI,AI;function K2(){return bI||(bI=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Y2(){return AI||(AI=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const HR=new WeakMap,Bg=new WeakMap,KR=new WeakMap,Tp=new WeakMap,Ry=new WeakMap;function $2(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",a)},s=()=>{n(Zi(t.result)),i()},a=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&HR.set(n,t)}).catch(()=>{}),Ry.set(e,t),e}function Q2(t){if(Bg.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",a),t.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",a),t.addEventListener("abort",a)});Bg.set(t,e)}let Fg={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Bg.get(t);if(e==="objectStoreNames")return t.objectStoreNames||KR.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Zi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function W2(t){Fg=t(Fg)}function X2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ip(this),e,...n);return KR.set(r,e.sort?e.sort():[e]),Zi(r)}:Y2().includes(t)?function(...e){return t.apply(Ip(this),e),Zi(HR.get(this))}:function(...e){return Zi(t.apply(Ip(this),e))}}function J2(t){return typeof t=="function"?X2(t):(t instanceof IDBTransaction&&Q2(t),H2(t,K2())?new Proxy(t,Fg):t)}function Zi(t){if(t instanceof IDBRequest)return $2(t);if(Tp.has(t))return Tp.get(t);const e=J2(t);return e!==t&&(Tp.set(t,e),Ry.set(e,t)),e}const Ip=t=>Ry.get(t);function Z2(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(t,e),o=Zi(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Zi(a.result),l.oldVersion,l.newVersion,Zi(a.transaction),l)}),n&&a.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),o.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),o}const eM=["get","getKey","getAll","getAllKeys","count"],tM=["put","add","delete","clear"],bp=new Map;function wI(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bp.get(e))return bp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=tM.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||eM.includes(n)))return;const s=async function(a,...o){const l=this.transaction(a,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(o.shift())),(await Promise.all([c[n](...o),i&&l.done]))[0]};return bp.set(e,s),s}W2(t=>({...t,get:(e,n,r)=>wI(e,n)||t.get(e,n,r),has:(e,n)=>!!wI(e,n)||t.has(e,n)}));/**
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
 */class nM{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(rM(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function rM(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yd="@firebase/app",jg="0.10.13";/**
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
 */const si=new Mf("@firebase/app"),iM="@firebase/app-compat",sM="@firebase/analytics-compat",aM="@firebase/analytics",oM="@firebase/app-check-compat",lM="@firebase/app-check",uM="@firebase/auth",cM="@firebase/auth-compat",hM="@firebase/database",dM="@firebase/data-connect",fM="@firebase/database-compat",mM="@firebase/functions",pM="@firebase/functions-compat",gM="@firebase/installations",_M="@firebase/installations-compat",yM="@firebase/messaging",vM="@firebase/messaging-compat",EM="@firebase/performance",TM="@firebase/performance-compat",IM="@firebase/remote-config",bM="@firebase/remote-config-compat",AM="@firebase/storage",wM="@firebase/storage-compat",SM="@firebase/firestore",RM="@firebase/vertexai-preview",CM="@firebase/firestore-compat",NM="firebase",DM="10.14.1";/**
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
 */const ss="[DEFAULT]",xM={[Yd]:"fire-core",[iM]:"fire-core-compat",[aM]:"fire-analytics",[sM]:"fire-analytics-compat",[lM]:"fire-app-check",[oM]:"fire-app-check-compat",[uM]:"fire-auth",[cM]:"fire-auth-compat",[hM]:"fire-rtdb",[dM]:"fire-data-connect",[fM]:"fire-rtdb-compat",[mM]:"fire-fn",[pM]:"fire-fn-compat",[gM]:"fire-iid",[_M]:"fire-iid-compat",[yM]:"fire-fcm",[vM]:"fire-fcm-compat",[EM]:"fire-perf",[TM]:"fire-perf-compat",[IM]:"fire-rc",[bM]:"fire-rc-compat",[AM]:"fire-gcs",[wM]:"fire-gcs-compat",[SM]:"fire-fst",[CM]:"fire-fst-compat",[RM]:"fire-vertex","fire-js":"fire-js",[NM]:"fire-js-all"};/**
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
 */const as=new Map,ko=new Map,Vo=new Map;function Qu(t,e){try{t.container.addComponent(e)}catch(n){si.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function YR(t,e){t.container.addOrOverwriteComponent(e)}function ai(t){const e=t.name;if(Vo.has(e))return si.debug(`There were multiple attempts to register component ${e}.`),!1;Vo.set(e,t);for(const n of as.values())Qu(n,t);for(const n of ko.values())Qu(n,t);return!0}function $R(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function OM(t,e,n=ss){$R(t,e).clearInstance(n)}function QR(t){return t.options!==void 0}function et(t){return t.settings!==void 0}function PM(){Vo.clear()}/**
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
 */const MM={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qn=new Ia("app","Firebase",MM);/**
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
 */let WR=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qn.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
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
 */class kM extends WR{constructor(e,n,r,i){const s=n.automaticDataCollectionEnabled!==void 0?n.automaticDataCollectionEnabled:!1,a={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,a,i);else{const o=e;super(o.options,a,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},n),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,n.releaseOnDeref=void 0,On(Yd,jg,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Ny(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw Qn.create("server-app-deleted")}}/**
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
 */const hi=DM;function Cy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ss,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Qn.create("bad-app-name",{appName:String(i)});if(n||(n=VR()),!n)throw Qn.create("no-options");const s=as.get(i);if(s){if($u(n,s.options)&&$u(r,s.config))return s;throw Qn.create("duplicate-app",{appName:i})}const a=new qR(i);for(const l of Vo.values())a.addComponent(l);const o=new WR(n,r,a);return as.set(i,o),o}function VM(t,e){if(C2()&&!UR())throw Qn.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let n;QR(t)?n=t.options:n=t;const r=Object.assign(Object.assign({},e),n);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=c=>[...c].reduce((h,f)=>Math.imul(31,h)+f.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw Qn.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(r)),a=ko.get(s);if(a)return a.incRefCount(e.releaseOnDeref),a;const o=new qR(s);for(const c of Vo.values())o.addComponent(c);const l=new kM(n,e,s,o);return ko.set(s,l),l}function LM(t=ss){const e=as.get(t);if(!e&&t===ss&&VR())return Cy();if(!e)throw Qn.create("no-app",{appName:t});return e}function UM(){return Array.from(as.values())}async function Ny(t){let e=!1;const n=t.name;as.has(n)?(e=!0,as.delete(n)):ko.has(n)&&t.decRefCount()<=0&&(ko.delete(n),e=!0),e&&(await Promise.all(t.container.getProviders().map(r=>r.delete())),t.isDeleted=!0)}function On(t,e,n){var r;let i=(r=xM[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const o=[`Unable to register library "${i}" with version "${e}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&o.push("and"),a&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),si.warn(o.join(" "));return}ai(new Xn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function XR(t,e){if(t!==null&&typeof t!="function")throw Qn.create("invalid-log-argument");G2(t,e)}function JR(t){q2(t)}/**
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
 */const BM="firebase-heartbeat-database",FM=1,Wu="firebase-heartbeat-store";let Ap=null;function ZR(){return Ap||(Ap=Z2(BM,FM,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Wu)}catch(n){console.warn(n)}}}}).catch(t=>{throw Qn.create("idb-open",{originalErrorMessage:t.message})})),Ap}async function jM(t){try{const n=(await ZR()).transaction(Wu),r=await n.objectStore(Wu).get(eC(t));return await n.done,r}catch(e){if(e instanceof Gt)si.warn(e.message);else{const n=Qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});si.warn(n.message)}}}async function SI(t,e){try{const r=(await ZR()).transaction(Wu,"readwrite");await r.objectStore(Wu).put(e,eC(t)),await r.done}catch(n){if(n instanceof Gt)si.warn(n.message);else{const r=Qn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});si.warn(r.message)}}}function eC(t){return`${t.name}!${t.options.appId}`}/**
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
 */const zM=1024,qM=30*24*60*60*1e3;class GM{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new KM(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=RI();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const o=new Date(a.date).valueOf();return Date.now()-o<=qM}),this._storage.overwrite(this._heartbeatsCache))}catch(r){si.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=RI(),{heartbeatsToSend:r,unsentEntries:i}=HM(this._heartbeatsCache.heartbeats),s=Hd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return si.warn(n),""}}}function RI(){return new Date().toISOString().substring(0,10)}function HM(t,e=zM){const n=[];let r=t.slice();for(const i of t){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),CI(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),CI(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class KM{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yu()?D2().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await jM(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return SI(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return SI(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function CI(t){return Hd(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function YM(t){ai(new Xn("platform-logger",e=>new nM(e),"PRIVATE")),ai(new Xn("heartbeat",e=>new GM(e),"PRIVATE")),On(Yd,jg,t),On(Yd,jg,"esm2017"),On("fire-js","")}YM("");const $M=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Gt,SDK_VERSION:hi,_DEFAULT_ENTRY_NAME:ss,_addComponent:Qu,_addOrOverwriteComponent:YR,_apps:as,_clearComponents:PM,_components:Vo,_getProvider:$R,_isFirebaseApp:QR,_isFirebaseServerApp:et,_registerComponent:ai,_removeServiceInstance:OM,_serverApps:ko,deleteApp:Ny,getApp:LM,getApps:UM,initializeApp:Cy,initializeServerApp:VM,onLog:XR,registerVersion:On,setLogLevel:JR},Symbol.toStringTag,{value:"Module"}));/**
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
 */class QM{constructor(e,n){this._delegate=e,this.firebase=n,Qu(e,new Xn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Ny(this._delegate)))}_getService(e,n=ss){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=ss){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Qu(this._delegate,e)}_addOrOverwriteComponent(e){YR(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const WM={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},NI=new Ia("app-compat","Firebase",WM);/**
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
 */function XM(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:On,setLogLevel:JR,onLog:XR,apps:null,SDK_VERSION:hi,INTERNAL:{registerComponent:o,removeApp:r,useAsService:l,modularAPIs:$M}};n.default=n,Object.defineProperty(n,"apps",{get:a});function r(c){delete e[c]}function i(c){if(c=c||ss,!TI(e,c))throw NI.create("no-app",{appName:c});return e[c]}i.App=t;function s(c,h={}){const f=Cy(c,h);if(TI(e,f.name))return e[f.name];const p=new t(f,n);return e[f.name]=p,p}function a(){return Object.keys(e).map(c=>e[c])}function o(c){const h=c.name,f=h.replace("-compat","");if(ai(c)&&c.type==="PUBLIC"){const p=(g=i())=>{if(typeof g[f]!="function")throw NI.create("invalid-app-argument",{appName:h});return g[f]()};c.serviceProps!==void 0&&Kd(p,c.serviceProps),n[f]=p,t.prototype[f]=function(...g){return this._getService.bind(this,h).apply(this,c.multipleInstances?g:[])}}return c.type==="PUBLIC"?n[f]:null}function l(c,h){return h==="serverAuth"?null:h}return n}/**
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
 */function tC(){const t=XM(QM);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:tC,extendNamespace:e,createSubscribe:zR,ErrorFactory:Ia,deepExtend:Kd});function e(n){Kd(t,n)}return t}const JM=tC();/**
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
 */const DI=new Mf("@firebase/app-compat"),ZM="@firebase/app-compat",ek="0.2.43";/**
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
 */function tk(t){On(ZM,ek,t)}/**
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
 */try{const t=kR();if(t.firebase!==void 0){DI.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=t.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&DI.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const ar=JM;tk();var nk="firebase",rk="10.14.1";/**
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
 */ar.registerVersion(nk,rk,"app-compat");var xI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qs,nC;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,y){function b(){}b.prototype=y.prototype,I.D=y.prototype,I.prototype=new b,I.prototype.constructor=I,I.C=function(w,C,x){for(var R=Array(arguments.length-2),vn=2;vn<arguments.length;vn++)R[vn-2]=arguments[vn];return y.prototype[C].apply(w,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,y,b){b||(b=0);var w=Array(16);if(typeof y=="string")for(var C=0;16>C;++C)w[C]=y.charCodeAt(b++)|y.charCodeAt(b++)<<8|y.charCodeAt(b++)<<16|y.charCodeAt(b++)<<24;else for(C=0;16>C;++C)w[C]=y[b++]|y[b++]<<8|y[b++]<<16|y[b++]<<24;y=I.g[0],b=I.g[1],C=I.g[2];var x=I.g[3],R=y+(x^b&(C^x))+w[0]+3614090360&4294967295;y=b+(R<<7&4294967295|R>>>25),R=x+(C^y&(b^C))+w[1]+3905402710&4294967295,x=y+(R<<12&4294967295|R>>>20),R=C+(b^x&(y^b))+w[2]+606105819&4294967295,C=x+(R<<17&4294967295|R>>>15),R=b+(y^C&(x^y))+w[3]+3250441966&4294967295,b=C+(R<<22&4294967295|R>>>10),R=y+(x^b&(C^x))+w[4]+4118548399&4294967295,y=b+(R<<7&4294967295|R>>>25),R=x+(C^y&(b^C))+w[5]+1200080426&4294967295,x=y+(R<<12&4294967295|R>>>20),R=C+(b^x&(y^b))+w[6]+2821735955&4294967295,C=x+(R<<17&4294967295|R>>>15),R=b+(y^C&(x^y))+w[7]+4249261313&4294967295,b=C+(R<<22&4294967295|R>>>10),R=y+(x^b&(C^x))+w[8]+1770035416&4294967295,y=b+(R<<7&4294967295|R>>>25),R=x+(C^y&(b^C))+w[9]+2336552879&4294967295,x=y+(R<<12&4294967295|R>>>20),R=C+(b^x&(y^b))+w[10]+4294925233&4294967295,C=x+(R<<17&4294967295|R>>>15),R=b+(y^C&(x^y))+w[11]+2304563134&4294967295,b=C+(R<<22&4294967295|R>>>10),R=y+(x^b&(C^x))+w[12]+1804603682&4294967295,y=b+(R<<7&4294967295|R>>>25),R=x+(C^y&(b^C))+w[13]+4254626195&4294967295,x=y+(R<<12&4294967295|R>>>20),R=C+(b^x&(y^b))+w[14]+2792965006&4294967295,C=x+(R<<17&4294967295|R>>>15),R=b+(y^C&(x^y))+w[15]+1236535329&4294967295,b=C+(R<<22&4294967295|R>>>10),R=y+(C^x&(b^C))+w[1]+4129170786&4294967295,y=b+(R<<5&4294967295|R>>>27),R=x+(b^C&(y^b))+w[6]+3225465664&4294967295,x=y+(R<<9&4294967295|R>>>23),R=C+(y^b&(x^y))+w[11]+643717713&4294967295,C=x+(R<<14&4294967295|R>>>18),R=b+(x^y&(C^x))+w[0]+3921069994&4294967295,b=C+(R<<20&4294967295|R>>>12),R=y+(C^x&(b^C))+w[5]+3593408605&4294967295,y=b+(R<<5&4294967295|R>>>27),R=x+(b^C&(y^b))+w[10]+38016083&4294967295,x=y+(R<<9&4294967295|R>>>23),R=C+(y^b&(x^y))+w[15]+3634488961&4294967295,C=x+(R<<14&4294967295|R>>>18),R=b+(x^y&(C^x))+w[4]+3889429448&4294967295,b=C+(R<<20&4294967295|R>>>12),R=y+(C^x&(b^C))+w[9]+568446438&4294967295,y=b+(R<<5&4294967295|R>>>27),R=x+(b^C&(y^b))+w[14]+3275163606&4294967295,x=y+(R<<9&4294967295|R>>>23),R=C+(y^b&(x^y))+w[3]+4107603335&4294967295,C=x+(R<<14&4294967295|R>>>18),R=b+(x^y&(C^x))+w[8]+1163531501&4294967295,b=C+(R<<20&4294967295|R>>>12),R=y+(C^x&(b^C))+w[13]+2850285829&4294967295,y=b+(R<<5&4294967295|R>>>27),R=x+(b^C&(y^b))+w[2]+4243563512&4294967295,x=y+(R<<9&4294967295|R>>>23),R=C+(y^b&(x^y))+w[7]+1735328473&4294967295,C=x+(R<<14&4294967295|R>>>18),R=b+(x^y&(C^x))+w[12]+2368359562&4294967295,b=C+(R<<20&4294967295|R>>>12),R=y+(b^C^x)+w[5]+4294588738&4294967295,y=b+(R<<4&4294967295|R>>>28),R=x+(y^b^C)+w[8]+2272392833&4294967295,x=y+(R<<11&4294967295|R>>>21),R=C+(x^y^b)+w[11]+1839030562&4294967295,C=x+(R<<16&4294967295|R>>>16),R=b+(C^x^y)+w[14]+4259657740&4294967295,b=C+(R<<23&4294967295|R>>>9),R=y+(b^C^x)+w[1]+2763975236&4294967295,y=b+(R<<4&4294967295|R>>>28),R=x+(y^b^C)+w[4]+1272893353&4294967295,x=y+(R<<11&4294967295|R>>>21),R=C+(x^y^b)+w[7]+4139469664&4294967295,C=x+(R<<16&4294967295|R>>>16),R=b+(C^x^y)+w[10]+3200236656&4294967295,b=C+(R<<23&4294967295|R>>>9),R=y+(b^C^x)+w[13]+681279174&4294967295,y=b+(R<<4&4294967295|R>>>28),R=x+(y^b^C)+w[0]+3936430074&4294967295,x=y+(R<<11&4294967295|R>>>21),R=C+(x^y^b)+w[3]+3572445317&4294967295,C=x+(R<<16&4294967295|R>>>16),R=b+(C^x^y)+w[6]+76029189&4294967295,b=C+(R<<23&4294967295|R>>>9),R=y+(b^C^x)+w[9]+3654602809&4294967295,y=b+(R<<4&4294967295|R>>>28),R=x+(y^b^C)+w[12]+3873151461&4294967295,x=y+(R<<11&4294967295|R>>>21),R=C+(x^y^b)+w[15]+530742520&4294967295,C=x+(R<<16&4294967295|R>>>16),R=b+(C^x^y)+w[2]+3299628645&4294967295,b=C+(R<<23&4294967295|R>>>9),R=y+(C^(b|~x))+w[0]+4096336452&4294967295,y=b+(R<<6&4294967295|R>>>26),R=x+(b^(y|~C))+w[7]+1126891415&4294967295,x=y+(R<<10&4294967295|R>>>22),R=C+(y^(x|~b))+w[14]+2878612391&4294967295,C=x+(R<<15&4294967295|R>>>17),R=b+(x^(C|~y))+w[5]+4237533241&4294967295,b=C+(R<<21&4294967295|R>>>11),R=y+(C^(b|~x))+w[12]+1700485571&4294967295,y=b+(R<<6&4294967295|R>>>26),R=x+(b^(y|~C))+w[3]+2399980690&4294967295,x=y+(R<<10&4294967295|R>>>22),R=C+(y^(x|~b))+w[10]+4293915773&4294967295,C=x+(R<<15&4294967295|R>>>17),R=b+(x^(C|~y))+w[1]+2240044497&4294967295,b=C+(R<<21&4294967295|R>>>11),R=y+(C^(b|~x))+w[8]+1873313359&4294967295,y=b+(R<<6&4294967295|R>>>26),R=x+(b^(y|~C))+w[15]+4264355552&4294967295,x=y+(R<<10&4294967295|R>>>22),R=C+(y^(x|~b))+w[6]+2734768916&4294967295,C=x+(R<<15&4294967295|R>>>17),R=b+(x^(C|~y))+w[13]+1309151649&4294967295,b=C+(R<<21&4294967295|R>>>11),R=y+(C^(b|~x))+w[4]+4149444226&4294967295,y=b+(R<<6&4294967295|R>>>26),R=x+(b^(y|~C))+w[11]+3174756917&4294967295,x=y+(R<<10&4294967295|R>>>22),R=C+(y^(x|~b))+w[2]+718787259&4294967295,C=x+(R<<15&4294967295|R>>>17),R=b+(x^(C|~y))+w[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(C+(R<<21&4294967295|R>>>11))&4294967295,I.g[2]=I.g[2]+C&4294967295,I.g[3]=I.g[3]+x&4294967295}r.prototype.u=function(I,y){y===void 0&&(y=I.length);for(var b=y-this.blockSize,w=this.B,C=this.h,x=0;x<y;){if(C==0)for(;x<=b;)i(this,I,x),x+=this.blockSize;if(typeof I=="string"){for(;x<y;)if(w[C++]=I.charCodeAt(x++),C==this.blockSize){i(this,w),C=0;break}}else for(;x<y;)if(w[C++]=I[x++],C==this.blockSize){i(this,w),C=0;break}}this.h=C,this.o+=y},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;var b=8*this.o;for(y=I.length-8;y<I.length;++y)I[y]=b&255,b/=256;for(this.u(I),I=Array(16),y=b=0;4>y;++y)for(var w=0;32>w;w+=8)I[b++]=this.g[y]>>>w&255;return I};function s(I,y){var b=o;return Object.prototype.hasOwnProperty.call(b,I)?b[I]:b[I]=y(I)}function a(I,y){this.h=y;for(var b=[],w=!0,C=I.length-1;0<=C;C--){var x=I[C]|0;w&&x==y||(b[C]=x,w=!1)}this.g=b}var o={};function l(I){return-128<=I&&128>I?s(I,function(y){return new a([y|0],0>y?-1:0)}):new a([I|0],0>I?-1:0)}function c(I){if(isNaN(I)||!isFinite(I))return f;if(0>I)return P(c(-I));for(var y=[],b=1,w=0;I>=b;w++)y[w]=I/b|0,b*=4294967296;return new a(y,0)}function h(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return P(h(I.substring(1),y));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=c(Math.pow(y,8)),w=f,C=0;C<I.length;C+=8){var x=Math.min(8,I.length-C),R=parseInt(I.substring(C,C+x),y);8>x?(x=c(Math.pow(y,x)),w=w.j(x).add(c(R))):(w=w.j(b),w=w.add(c(R)))}return w}var f=l(0),p=l(1),g=l(16777216);t=a.prototype,t.m=function(){if(N(this))return-P(this).m();for(var I=0,y=1,b=0;b<this.g.length;b++){var w=this.i(b);I+=(0<=w?w:4294967296+w)*y,y*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(S(this))return"0";if(N(this))return"-"+P(this).toString(I);for(var y=c(Math.pow(I,6)),b=this,w="";;){var C=D(b,y).g;b=T(b,C.j(y));var x=((0<b.g.length?b.g[0]:b.h)>>>0).toString(I);if(b=C,S(b))return x+w;for(;6>x.length;)x="0"+x;w=x+w}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function S(I){if(I.h!=0)return!1;for(var y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function N(I){return I.h==-1}t.l=function(I){return I=T(this,I),N(I)?-1:S(I)?0:1};function P(I){for(var y=I.g.length,b=[],w=0;w<y;w++)b[w]=~I.g[w];return new a(b,~I.h).add(p)}t.abs=function(){return N(this)?P(this):this},t.add=function(I){for(var y=Math.max(this.g.length,I.g.length),b=[],w=0,C=0;C<=y;C++){var x=w+(this.i(C)&65535)+(I.i(C)&65535),R=(x>>>16)+(this.i(C)>>>16)+(I.i(C)>>>16);w=R>>>16,x&=65535,R&=65535,b[C]=R<<16|x}return new a(b,b[b.length-1]&-2147483648?-1:0)};function T(I,y){return I.add(P(y))}t.j=function(I){if(S(this)||S(I))return f;if(N(this))return N(I)?P(this).j(P(I)):P(P(this).j(I));if(N(I))return P(this.j(P(I)));if(0>this.l(g)&&0>I.l(g))return c(this.m()*I.m());for(var y=this.g.length+I.g.length,b=[],w=0;w<2*y;w++)b[w]=0;for(w=0;w<this.g.length;w++)for(var C=0;C<I.g.length;C++){var x=this.i(w)>>>16,R=this.i(w)&65535,vn=I.i(C)>>>16,Kt=I.i(C)&65535;b[2*w+2*C]+=R*Kt,v(b,2*w+2*C),b[2*w+2*C+1]+=x*Kt,v(b,2*w+2*C+1),b[2*w+2*C+1]+=R*vn,v(b,2*w+2*C+1),b[2*w+2*C+2]+=x*vn,v(b,2*w+2*C+2)}for(w=0;w<y;w++)b[w]=b[2*w+1]<<16|b[2*w];for(w=y;w<2*y;w++)b[w]=0;return new a(b,0)};function v(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function A(I,y){this.g=I,this.h=y}function D(I,y){if(S(y))throw Error("division by zero");if(S(I))return new A(f,f);if(N(I))return y=D(P(I),y),new A(P(y.g),P(y.h));if(N(y))return y=D(I,P(y)),new A(P(y.g),y.h);if(30<I.g.length){if(N(I)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var b=p,w=y;0>=w.l(I);)b=U(b),w=U(w);var C=j(b,1),x=j(w,1);for(w=j(w,2),b=j(b,2);!S(w);){var R=x.add(w);0>=R.l(I)&&(C=C.add(b),x=R),w=j(w,1),b=j(b,1)}return y=T(I,C.j(y)),new A(C,y)}for(C=f;0<=I.l(y);){for(b=Math.max(1,Math.floor(I.m()/y.m())),w=Math.ceil(Math.log(b)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),x=c(b),R=x.j(y);N(R)||0<R.l(I);)b-=w,x=c(b),R=x.j(y);S(x)&&(x=p),C=C.add(x),I=T(I,R)}return new A(C,I)}t.A=function(I){return D(this,I).h},t.and=function(I){for(var y=Math.max(this.g.length,I.g.length),b=[],w=0;w<y;w++)b[w]=this.i(w)&I.i(w);return new a(b,this.h&I.h)},t.or=function(I){for(var y=Math.max(this.g.length,I.g.length),b=[],w=0;w<y;w++)b[w]=this.i(w)|I.i(w);return new a(b,this.h|I.h)},t.xor=function(I){for(var y=Math.max(this.g.length,I.g.length),b=[],w=0;w<y;w++)b[w]=this.i(w)^I.i(w);return new a(b,this.h^I.h)};function U(I){for(var y=I.g.length+1,b=[],w=0;w<y;w++)b[w]=I.i(w)<<1|I.i(w-1)>>>31;return new a(b,I.h)}function j(I,y){var b=y>>5;y%=32;for(var w=I.g.length-b,C=[],x=0;x<w;x++)C[x]=0<y?I.i(x+b)>>>y|I.i(x+b+1)<<32-y:I.i(x+b);return new a(C,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,nC=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=c,a.fromString=h,Qs=a}).apply(typeof xI<"u"?xI:typeof self<"u"?self:typeof window<"u"?window:{});var xh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rC,iu,iC,rd,zg,sC,aC,oC;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,d,m){return u==Array.prototype||u==Object.prototype||(u[d]=m.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof xh=="object"&&xh];for(var d=0;d<u.length;++d){var m=u[d];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(u,d){if(d)e:{var m=r;u=u.split(".");for(var _=0;_<u.length-1;_++){var O=u[_];if(!(O in m))break e;m=m[O]}u=u[u.length-1],_=m[u],d=d(_),d!=_&&d!=null&&e(m,u,{configurable:!0,writable:!0,value:d})}}function s(u,d){u instanceof String&&(u+="");var m=0,_=!1,O={next:function(){if(!_&&m<u.length){var V=m++;return{value:d(V,u[V]),done:!1}}return _=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(u){return u||function(){return s(this,function(d,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},o=this||self;function l(u){var d=typeof u;return d=d!="object"?d:u?Array.isArray(u)?"array":d:"null",d=="array"||d=="object"&&typeof u.length=="number"}function c(u){var d=typeof u;return d=="object"&&u!=null||d=="function"}function h(u,d,m){return u.call.apply(u.bind,arguments)}function f(u,d,m){if(!u)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,_),u.apply(d,O)}}return function(){return u.apply(d,arguments)}}function p(u,d,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,p.apply(null,arguments)}function g(u,d){var m=Array.prototype.slice.call(arguments,1);return function(){var _=m.slice();return _.push.apply(_,arguments),u.apply(this,_)}}function S(u,d){function m(){}m.prototype=d.prototype,u.aa=d.prototype,u.prototype=new m,u.prototype.constructor=u,u.Qb=function(_,O,V){for(var q=Array(arguments.length-2),Ce=2;Ce<arguments.length;Ce++)q[Ce-2]=arguments[Ce];return d.prototype[O].apply(_,q)}}function N(u){const d=u.length;if(0<d){const m=Array(d);for(let _=0;_<d;_++)m[_]=u[_];return m}return[]}function P(u,d){for(let m=1;m<arguments.length;m++){const _=arguments[m];if(l(_)){const O=u.length||0,V=_.length||0;u.length=O+V;for(let q=0;q<V;q++)u[O+q]=_[q]}else u.push(_)}}class T{constructor(d,m){this.i=d,this.j=m,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function v(u){return/^[\s\xa0]*$/.test(u)}function A(){var u=o.navigator;return u&&(u=u.userAgent)?u:""}function D(u){return D[" "](u),u}D[" "]=function(){};var U=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function j(u,d,m){for(const _ in u)d.call(m,u[_],_,u)}function I(u,d){for(const m in u)d.call(void 0,u[m],m,u)}function y(u){const d={};for(const m in u)d[m]=u[m];return d}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(u,d){let m,_;for(let O=1;O<arguments.length;O++){_=arguments[O];for(m in _)u[m]=_[m];for(let V=0;V<b.length;V++)m=b[V],Object.prototype.hasOwnProperty.call(_,m)&&(u[m]=_[m])}}function C(u){var d=1;u=u.split(":");const m=[];for(;0<d&&u.length;)m.push(u.shift()),d--;return u.length&&m.push(u.join(":")),m}function x(u){o.setTimeout(()=>{throw u},0)}function R(){var u=Re;let d=null;return u.g&&(d=u.g,u.g=u.g.next,u.g||(u.h=null),d.next=null),d}class vn{constructor(){this.h=this.g=null}add(d,m){const _=Kt.get();_.set(d,m),this.h?this.h.next=_:this.g=_,this.h=_}}var Kt=new T(()=>new K,u=>u.reset());class K{constructor(){this.next=this.g=this.h=null}set(d,m){this.h=d,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let ne,ee=!1,Re=new vn,De=()=>{const u=o.Promise.resolve(void 0);ne=()=>{u.then(yi)}};var yi=()=>{for(var u;u=R();){try{u.h.call(u.g)}catch(m){x(m)}var d=Kt;d.j(u),100>d.h&&(d.h++,u.next=d.g,d.g=u)}ee=!1};function Tt(){this.s=this.s,this.C=this.C}Tt.prototype.s=!1,Tt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Tt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function We(u,d){this.type=u,this.g=this.target=d,this.defaultPrevented=!1}We.prototype.h=function(){this.defaultPrevented=!0};var Vn=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var u=!1,d=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const m=()=>{};o.addEventListener("test",m,d),o.removeEventListener("test",m,d)}catch{}return u}();function an(u,d){if(We.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var m=this.type=u.type,_=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=d,d=u.relatedTarget){if(U){e:{try{D(d.nodeName);var O=!0;break e}catch{}O=!1}O||(d=null)}}else m=="mouseover"?d=u.fromElement:m=="mouseout"&&(d=u.toElement);this.relatedTarget=d,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:ym[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&an.aa.h.call(this)}}S(an,We);var ym={2:"touch",3:"pen",4:"mouse"};an.prototype.h=function(){an.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var ct="closure_listenable_"+(1e6*Math.random()|0),vm=0;function Qc(u,d,m,_,O){this.listener=u,this.proxy=null,this.src=d,this.type=m,this.capture=!!_,this.ha=O,this.key=++vm,this.da=this.fa=!1}function Na(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Zn(u){this.src=u,this.g={},this.h=0}Zn.prototype.add=function(u,d,m,_,O){var V=u.toString();u=this.g[V],u||(u=this.g[V]=[],this.h++);var q=Dr(u,d,_,O);return-1<q?(d=u[q],m||(d.fa=!1)):(d=new Qc(d,this.src,V,!!_,O),d.fa=m,u.push(d)),d};function or(u,d){var m=d.type;if(m in u.g){var _=u.g[m],O=Array.prototype.indexOf.call(_,d,void 0),V;(V=0<=O)&&Array.prototype.splice.call(_,O,1),V&&(Na(d),u.g[m].length==0&&(delete u.g[m],u.h--))}}function Dr(u,d,m,_){for(var O=0;O<u.length;++O){var V=u[O];if(!V.da&&V.listener==d&&V.capture==!!m&&V.ha==_)return O}return-1}var bs="closure_lm_"+(1e6*Math.random()|0),vl={};function Wc(u,d,m,_,O){if(Array.isArray(d)){for(var V=0;V<d.length;V++)Wc(u,d[V],m,_,O);return null}return m=Z(m),u&&u[ct]?u.K(d,m,c(_)?!!_.capture:!1,O):Em(u,d,m,!1,_,O)}function Em(u,d,m,_,O,V){if(!d)throw Error("Invalid event type");var q=c(O)?!!O.capture:!!O,Ce=Tl(u);if(Ce||(u[bs]=Ce=new Zn(u)),m=Ce.add(d,m,_,q,V),m.proxy)return m;if(_=Tm(),m.proxy=_,_.src=u,_.listener=m,u.addEventListener)Vn||(O=q),O===void 0&&(O=!1),u.addEventListener(d.toString(),_,O);else if(u.attachEvent)u.attachEvent(Jc(d.toString()),_);else if(u.addListener&&u.removeListener)u.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return m}function Tm(){function u(m){return d.call(u.src,u.listener,m)}const d=Zc;return u}function Xc(u,d,m,_,O){if(Array.isArray(d))for(var V=0;V<d.length;V++)Xc(u,d[V],m,_,O);else _=c(_)?!!_.capture:!!_,m=Z(m),u&&u[ct]?(u=u.i,d=String(d).toString(),d in u.g&&(V=u.g[d],m=Dr(V,m,_,O),-1<m&&(Na(V[m]),Array.prototype.splice.call(V,m,1),V.length==0&&(delete u.g[d],u.h--)))):u&&(u=Tl(u))&&(d=u.g[d.toString()],u=-1,d&&(u=Dr(d,m,_,O)),(m=-1<u?d[u]:null)&&El(m))}function El(u){if(typeof u!="number"&&u&&!u.da){var d=u.src;if(d&&d[ct])or(d.i,u);else{var m=u.type,_=u.proxy;d.removeEventListener?d.removeEventListener(m,_,u.capture):d.detachEvent?d.detachEvent(Jc(m),_):d.addListener&&d.removeListener&&d.removeListener(_),(m=Tl(d))?(or(m,u),m.h==0&&(m.src=null,d[bs]=null)):Na(u)}}}function Jc(u){return u in vl?vl[u]:vl[u]="on"+u}function Zc(u,d){if(u.da)u=!0;else{d=new an(d,this);var m=u.listener,_=u.ha||u.src;u.fa&&El(u),u=m.call(_,d)}return u}function Tl(u){return u=u[bs],u instanceof Zn?u:null}var Il="__closure_events_fn_"+(1e9*Math.random()>>>0);function Z(u){return typeof u=="function"?u:(u[Il]||(u[Il]=function(d){return u.handleEvent(d)}),u[Il])}function X(){Tt.call(this),this.i=new Zn(this),this.M=this,this.F=null}S(X,Tt),X.prototype[ct]=!0,X.prototype.removeEventListener=function(u,d,m,_){Xc(this,u,d,m,_)};function oe(u,d){var m,_=u.F;if(_)for(m=[];_;_=_.F)m.push(_);if(u=u.M,_=d.type||d,typeof d=="string")d=new We(d,u);else if(d instanceof We)d.target=d.target||u;else{var O=d;d=new We(_,u),w(d,O)}if(O=!0,m)for(var V=m.length-1;0<=V;V--){var q=d.g=m[V];O=xe(q,_,!0,d)&&O}if(q=d.g=u,O=xe(q,_,!0,d)&&O,O=xe(q,_,!1,d)&&O,m)for(V=0;V<m.length;V++)q=d.g=m[V],O=xe(q,_,!1,d)&&O}X.prototype.N=function(){if(X.aa.N.call(this),this.i){var u=this.i,d;for(d in u.g){for(var m=u.g[d],_=0;_<m.length;_++)Na(m[_]);delete u.g[d],u.h--}}this.F=null},X.prototype.K=function(u,d,m,_){return this.i.add(String(u),d,!1,m,_)},X.prototype.L=function(u,d,m,_){return this.i.add(String(u),d,!0,m,_)};function xe(u,d,m,_){if(d=u.i.g[String(d)],!d)return!0;d=d.concat();for(var O=!0,V=0;V<d.length;++V){var q=d[V];if(q&&!q.da&&q.capture==m){var Ce=q.listener,Nt=q.ha||q.src;q.fa&&or(u.i,q),O=Ce.call(Nt,_)!==!1&&O}}return O&&!_.defaultPrevented}function Ke(u,d,m){if(typeof u=="function")m&&(u=p(u,m));else if(u&&typeof u.handleEvent=="function")u=p(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:o.setTimeout(u,d||0)}function It(u){u.g=Ke(()=>{u.g=null,u.i&&(u.i=!1,It(u))},u.l);const d=u.h;u.h=null,u.m.apply(null,d)}class En extends Tt{constructor(d,m){super(),this.m=d,this.l=m,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:It(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Yt(u){Tt.call(this),this.h=u,this.g={}}S(Yt,Tt);var vi=[];function As(u){j(u.g,function(d,m){this.g.hasOwnProperty(m)&&El(d)},u),u.g={}}Yt.prototype.N=function(){Yt.aa.N.call(this),As(this)},Yt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var er=o.JSON.stringify,Im=o.JSON.parse,oE=class{stringify(u){return o.JSON.stringify(u,void 0)}parse(u){return o.JSON.parse(u,void 0)}};function eh(){}eh.prototype.h=null;function bm(u){return u.h||(u.h=u.i())}function bl(){}var lr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Al(){We.call(this,"d")}S(Al,We);function wl(){We.call(this,"c")}S(wl,We);var be={},Bt=null;function xr(){return Bt=Bt||new X}be.La="serverreachability";function Ln(u){We.call(this,be.La,u)}S(Ln,We);function Ei(u){const d=xr();oe(d,new Ln(d))}be.STAT_EVENT="statevent";function Am(u,d){We.call(this,be.STAT_EVENT,u),this.stat=d}S(Am,We);function $t(u){const d=xr();oe(d,new Am(d,u))}be.Ma="timingevent";function lE(u,d){We.call(this,be.Ma,u),this.size=d}S(lE,We);function Sl(u,d){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){u()},d)}function Rl(){this.g=!0}Rl.prototype.xa=function(){this.g=!1};function Qx(u,d,m,_,O,V){u.info(function(){if(u.g)if(V)for(var q="",Ce=V.split("&"),Nt=0;Nt<Ce.length;Nt++){var ge=Ce[Nt].split("=");if(1<ge.length){var Ft=ge[0];ge=ge[1];var jt=Ft.split("_");q=2<=jt.length&&jt[1]=="type"?q+(Ft+"="+ge+"&"):q+(Ft+"=redacted&")}}else q=null;else q=V;return"XMLHTTP REQ ("+_+") [attempt "+O+"]: "+d+`
`+m+`
`+q})}function Wx(u,d,m,_,O,V,q){u.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+O+"]: "+d+`
`+m+`
`+V+" "+q})}function Da(u,d,m,_){u.info(function(){return"XMLHTTP TEXT ("+d+"): "+Jx(u,m)+(_?" "+_:"")})}function Xx(u,d){u.info(function(){return"TIMEOUT: "+d})}Rl.prototype.info=function(){};function Jx(u,d){if(!u.g)return d;if(!d)return null;try{var m=JSON.parse(d);if(m){for(u=0;u<m.length;u++)if(Array.isArray(m[u])){var _=m[u];if(!(2>_.length)){var O=_[1];if(Array.isArray(O)&&!(1>O.length)){var V=O[0];if(V!="noop"&&V!="stop"&&V!="close")for(var q=1;q<O.length;q++)O[q]=""}}}}return er(m)}catch{return d}}var th={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},uE={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},wm;function nh(){}S(nh,eh),nh.prototype.g=function(){return new XMLHttpRequest},nh.prototype.i=function(){return{}},wm=new nh;function Ti(u,d,m,_){this.j=u,this.i=d,this.l=m,this.R=_||1,this.U=new Yt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new cE}function cE(){this.i=null,this.g="",this.h=!1}var hE={},Sm={};function Rm(u,d,m){u.L=1,u.v=ah(Or(d)),u.m=m,u.P=!0,dE(u,null)}function dE(u,d){u.F=Date.now(),rh(u),u.A=Or(u.v);var m=u.A,_=u.R;Array.isArray(_)||(_=[String(_)]),SE(m.i,"t",_),u.C=0,m=u.j.J,u.h=new cE,u.g=GE(u.j,m?d:null,!u.m),0<u.O&&(u.M=new En(p(u.Y,u,u.g),u.O)),d=u.U,m=u.g,_=u.ca;var O="readystatechange";Array.isArray(O)||(O&&(vi[0]=O.toString()),O=vi);for(var V=0;V<O.length;V++){var q=Wc(m,O[V],_||d.handleEvent,!1,d.h||d);if(!q)break;d.g[q.key]=q}d=u.H?y(u.H):{},u.m?(u.u||(u.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,d)):(u.u="GET",u.g.ea(u.A,u.u,null,d)),Ei(),Qx(u.i,u.u,u.A,u.l,u.R,u.m)}Ti.prototype.ca=function(u){u=u.target;const d=this.M;d&&Pr(u)==3?d.j():this.Y(u)},Ti.prototype.Y=function(u){try{if(u==this.g)e:{const jt=Pr(this.g);var d=this.g.Ba();const Pa=this.g.Z();if(!(3>jt)&&(jt!=3||this.g&&(this.h.h||this.g.oa()||PE(this.g)))){this.J||jt!=4||d==7||(d==8||0>=Pa?Ei(3):Ei(2)),Cm(this);var m=this.g.Z();this.X=m;t:if(fE(this)){var _=PE(this.g);u="";var O=_.length,V=Pr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ws(this),Cl(this);var q="";break t}this.h.i=new o.TextDecoder}for(d=0;d<O;d++)this.h.h=!0,u+=this.h.i.decode(_[d],{stream:!(V&&d==O-1)});_.length=0,this.h.g+=u,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=m==200,Wx(this.i,this.u,this.A,this.l,this.R,jt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Ce,Nt=this.g;if((Ce=Nt.g?Nt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(Ce)){var ge=Ce;break t}}ge=null}if(m=ge)Da(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Nm(this,m);else{this.o=!1,this.s=3,$t(12),ws(this),Cl(this);break e}}if(this.P){m=!0;let tr;for(;!this.J&&this.C<q.length;)if(tr=Zx(this,q),tr==Sm){jt==4&&(this.s=4,$t(14),m=!1),Da(this.i,this.l,null,"[Incomplete Response]");break}else if(tr==hE){this.s=4,$t(15),Da(this.i,this.l,q,"[Invalid Chunk]"),m=!1;break}else Da(this.i,this.l,tr,null),Nm(this,tr);if(fE(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),jt!=4||q.length!=0||this.h.h||(this.s=1,$t(16),m=!1),this.o=this.o&&m,!m)Da(this.i,this.l,q,"[Invalid Chunked Response]"),ws(this),Cl(this);else if(0<q.length&&!this.W){this.W=!0;var Ft=this.j;Ft.g==this&&Ft.ba&&!Ft.M&&(Ft.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),km(Ft),Ft.M=!0,$t(11))}}else Da(this.i,this.l,q,null),Nm(this,q);jt==4&&ws(this),this.o&&!this.J&&(jt==4?FE(this.j,this):(this.o=!1,rh(this)))}else gO(this.g),m==400&&0<q.indexOf("Unknown SID")?(this.s=3,$t(12)):(this.s=0,$t(13)),ws(this),Cl(this)}}}catch{}finally{}};function fE(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Zx(u,d){var m=u.C,_=d.indexOf(`
`,m);return _==-1?Sm:(m=Number(d.substring(m,_)),isNaN(m)?hE:(_+=1,_+m>d.length?Sm:(d=d.slice(_,_+m),u.C=_+m,d)))}Ti.prototype.cancel=function(){this.J=!0,ws(this)};function rh(u){u.S=Date.now()+u.I,mE(u,u.I)}function mE(u,d){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Sl(p(u.ba,u),d)}function Cm(u){u.B&&(o.clearTimeout(u.B),u.B=null)}Ti.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Xx(this.i,this.A),this.L!=2&&(Ei(),$t(17)),ws(this),this.s=2,Cl(this)):mE(this,this.S-u)};function Cl(u){u.j.G==0||u.J||FE(u.j,u)}function ws(u){Cm(u);var d=u.M;d&&typeof d.ma=="function"&&d.ma(),u.M=null,As(u.U),u.g&&(d=u.g,u.g=null,d.abort(),d.ma())}function Nm(u,d){try{var m=u.j;if(m.G!=0&&(m.g==u||Dm(m.h,u))){if(!u.K&&Dm(m.h,u)&&m.G==3){try{var _=m.Da.g.parse(d)}catch{_=null}if(Array.isArray(_)&&_.length==3){var O=_;if(O[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<u.F)dh(m),ch(m);else break e;Mm(m),$t(18)}}else m.za=O[1],0<m.za-m.T&&37500>O[2]&&m.F&&m.v==0&&!m.C&&(m.C=Sl(p(m.Za,m),6e3));if(1>=_E(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else Rs(m,11)}else if((u.K||m.g==u)&&dh(m),!v(d))for(O=m.Da.g.parse(d),d=0;d<O.length;d++){let ge=O[d];if(m.T=ge[0],ge=ge[1],m.G==2)if(ge[0]=="c"){m.K=ge[1],m.ia=ge[2];const Ft=ge[3];Ft!=null&&(m.la=Ft,m.j.info("VER="+m.la));const jt=ge[4];jt!=null&&(m.Aa=jt,m.j.info("SVER="+m.Aa));const Pa=ge[5];Pa!=null&&typeof Pa=="number"&&0<Pa&&(_=1.5*Pa,m.L=_,m.j.info("backChannelRequestTimeoutMs_="+_)),_=m;const tr=u.g;if(tr){const mh=tr.g?tr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(mh){var V=_.h;V.g||mh.indexOf("spdy")==-1&&mh.indexOf("quic")==-1&&mh.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(xm(V,V.h),V.h=null))}if(_.D){const Vm=tr.g?tr.g.getResponseHeader("X-HTTP-Session-Id"):null;Vm&&(_.ya=Vm,Me(_.I,_.D,Vm))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-u.F,m.j.info("Handshake RTT: "+m.R+"ms")),_=m;var q=u;if(_.qa=qE(_,_.J?_.ia:null,_.W),q.K){yE(_.h,q);var Ce=q,Nt=_.L;Nt&&(Ce.I=Nt),Ce.B&&(Cm(Ce),rh(Ce)),_.g=q}else UE(_);0<m.i.length&&hh(m)}else ge[0]!="stop"&&ge[0]!="close"||Rs(m,7);else m.G==3&&(ge[0]=="stop"||ge[0]=="close"?ge[0]=="stop"?Rs(m,7):Pm(m):ge[0]!="noop"&&m.l&&m.l.ta(ge),m.v=0)}}Ei(4)}catch{}}var eO=class{constructor(u,d){this.g=u,this.map=d}};function pE(u){this.l=u||10,o.PerformanceNavigationTiming?(u=o.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function gE(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function _E(u){return u.h?1:u.g?u.g.size:0}function Dm(u,d){return u.h?u.h==d:u.g?u.g.has(d):!1}function xm(u,d){u.g?u.g.add(d):u.h=d}function yE(u,d){u.h&&u.h==d?u.h=null:u.g&&u.g.has(d)&&u.g.delete(d)}pE.prototype.cancel=function(){if(this.i=vE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function vE(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let d=u.i;for(const m of u.g.values())d=d.concat(m.D);return d}return N(u.i)}function tO(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var d=[],m=u.length,_=0;_<m;_++)d.push(u[_]);return d}d=[],m=0;for(_ in u)d[m++]=u[_];return d}function nO(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var d=[];u=u.length;for(var m=0;m<u;m++)d.push(m);return d}d=[],m=0;for(const _ in u)d[m++]=_;return d}}}function EE(u,d){if(u.forEach&&typeof u.forEach=="function")u.forEach(d,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,d,void 0);else for(var m=nO(u),_=tO(u),O=_.length,V=0;V<O;V++)d.call(void 0,_[V],m&&m[V],u)}var TE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rO(u,d){if(u){u=u.split("&");for(var m=0;m<u.length;m++){var _=u[m].indexOf("="),O=null;if(0<=_){var V=u[m].substring(0,_);O=u[m].substring(_+1)}else V=u[m];d(V,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Ss(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Ss){this.h=u.h,ih(this,u.j),this.o=u.o,this.g=u.g,sh(this,u.s),this.l=u.l;var d=u.i,m=new xl;m.i=d.i,d.g&&(m.g=new Map(d.g),m.h=d.h),IE(this,m),this.m=u.m}else u&&(d=String(u).match(TE))?(this.h=!1,ih(this,d[1]||"",!0),this.o=Nl(d[2]||""),this.g=Nl(d[3]||"",!0),sh(this,d[4]),this.l=Nl(d[5]||"",!0),IE(this,d[6]||"",!0),this.m=Nl(d[7]||"")):(this.h=!1,this.i=new xl(null,this.h))}Ss.prototype.toString=function(){var u=[],d=this.j;d&&u.push(Dl(d,bE,!0),":");var m=this.g;return(m||d=="file")&&(u.push("//"),(d=this.o)&&u.push(Dl(d,bE,!0),"@"),u.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&u.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&u.push("/"),u.push(Dl(m,m.charAt(0)=="/"?aO:sO,!0))),(m=this.i.toString())&&u.push("?",m),(m=this.m)&&u.push("#",Dl(m,lO)),u.join("")};function Or(u){return new Ss(u)}function ih(u,d,m){u.j=m?Nl(d,!0):d,u.j&&(u.j=u.j.replace(/:$/,""))}function sh(u,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);u.s=d}else u.s=null}function IE(u,d,m){d instanceof xl?(u.i=d,uO(u.i,u.h)):(m||(d=Dl(d,oO)),u.i=new xl(d,u.h))}function Me(u,d,m){u.i.set(d,m)}function ah(u){return Me(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Nl(u,d){return u?d?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Dl(u,d,m){return typeof u=="string"?(u=encodeURI(u).replace(d,iO),m&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function iO(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var bE=/[#\/\?@]/g,sO=/[#\?:]/g,aO=/[#\?]/g,oO=/[#\?@]/g,lO=/#/g;function xl(u,d){this.h=this.g=null,this.i=u||null,this.j=!!d}function Ii(u){u.g||(u.g=new Map,u.h=0,u.i&&rO(u.i,function(d,m){u.add(decodeURIComponent(d.replace(/\+/g," ")),m)}))}t=xl.prototype,t.add=function(u,d){Ii(this),this.i=null,u=xa(this,u);var m=this.g.get(u);return m||this.g.set(u,m=[]),m.push(d),this.h+=1,this};function AE(u,d){Ii(u),d=xa(u,d),u.g.has(d)&&(u.i=null,u.h-=u.g.get(d).length,u.g.delete(d))}function wE(u,d){return Ii(u),d=xa(u,d),u.g.has(d)}t.forEach=function(u,d){Ii(this),this.g.forEach(function(m,_){m.forEach(function(O){u.call(d,O,_,this)},this)},this)},t.na=function(){Ii(this);const u=Array.from(this.g.values()),d=Array.from(this.g.keys()),m=[];for(let _=0;_<d.length;_++){const O=u[_];for(let V=0;V<O.length;V++)m.push(d[_])}return m},t.V=function(u){Ii(this);let d=[];if(typeof u=="string")wE(this,u)&&(d=d.concat(this.g.get(xa(this,u))));else{u=Array.from(this.g.values());for(let m=0;m<u.length;m++)d=d.concat(u[m])}return d},t.set=function(u,d){return Ii(this),this.i=null,u=xa(this,u),wE(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[d]),this.h+=1,this},t.get=function(u,d){return u?(u=this.V(u),0<u.length?String(u[0]):d):d};function SE(u,d,m){AE(u,d),0<m.length&&(u.i=null,u.g.set(xa(u,d),N(m)),u.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],d=Array.from(this.g.keys());for(var m=0;m<d.length;m++){var _=d[m];const V=encodeURIComponent(String(_)),q=this.V(_);for(_=0;_<q.length;_++){var O=V;q[_]!==""&&(O+="="+encodeURIComponent(String(q[_]))),u.push(O)}}return this.i=u.join("&")};function xa(u,d){return d=String(d),u.j&&(d=d.toLowerCase()),d}function uO(u,d){d&&!u.j&&(Ii(u),u.i=null,u.g.forEach(function(m,_){var O=_.toLowerCase();_!=O&&(AE(this,_),SE(this,O,m))},u)),u.j=d}function cO(u,d){const m=new Rl;if(o.Image){const _=new Image;_.onload=g(bi,m,"TestLoadImage: loaded",!0,d,_),_.onerror=g(bi,m,"TestLoadImage: error",!1,d,_),_.onabort=g(bi,m,"TestLoadImage: abort",!1,d,_),_.ontimeout=g(bi,m,"TestLoadImage: timeout",!1,d,_),o.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=u}else d(!1)}function hO(u,d){const m=new Rl,_=new AbortController,O=setTimeout(()=>{_.abort(),bi(m,"TestPingServer: timeout",!1,d)},1e4);fetch(u,{signal:_.signal}).then(V=>{clearTimeout(O),V.ok?bi(m,"TestPingServer: ok",!0,d):bi(m,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(O),bi(m,"TestPingServer: error",!1,d)})}function bi(u,d,m,_,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),_(m)}catch{}}function dO(){this.g=new oE}function fO(u,d,m){const _=m||"";try{EE(u,function(O,V){let q=O;c(O)&&(q=er(O)),d.push(_+V+"="+encodeURIComponent(q))})}catch(O){throw d.push(_+"type="+encodeURIComponent("_badmap")),O}}function oh(u){this.l=u.Ub||null,this.j=u.eb||!1}S(oh,eh),oh.prototype.g=function(){return new lh(this.l,this.j)},oh.prototype.i=function(u){return function(){return u}}({});function lh(u,d){X.call(this),this.D=u,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(lh,X),t=lh.prototype,t.open=function(u,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=d,this.readyState=1,Pl(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(d.body=u),(this.D||o).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ol(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Pl(this)),this.g&&(this.readyState=3,Pl(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;RE(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function RE(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var d=u.value?u.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!u.done}))&&(this.response=this.responseText+=d)}u.done?Ol(this):Pl(this),this.readyState==3&&RE(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,Ol(this))},t.Qa=function(u){this.g&&(this.response=u,Ol(this))},t.ga=function(){this.g&&Ol(this)};function Ol(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Pl(u)}t.setRequestHeader=function(u,d){this.u.append(u,d)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],d=this.h.entries();for(var m=d.next();!m.done;)m=m.value,u.push(m[0]+": "+m[1]),m=d.next();return u.join(`\r
`)};function Pl(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(lh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function CE(u){let d="";return j(u,function(m,_){d+=_,d+=":",d+=m,d+=`\r
`}),d}function Om(u,d,m){e:{for(_ in m){var _=!1;break e}_=!0}_||(m=CE(m),typeof u=="string"?m!=null&&encodeURIComponent(String(m)):Me(u,d,m))}function Xe(u){X.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(Xe,X);var mO=/^https?$/i,pO=["POST","PUT"];t=Xe.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,d,m,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);d=d?d.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():wm.g(),this.v=this.o?bm(this.o):bm(wm),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(d,String(u),!0),this.B=!1}catch(V){NE(this,V);return}if(u=m||"",m=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var O in _)m.set(O,_[O]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const V of _.keys())m.set(V,_.get(V));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(m.keys()).find(V=>V.toLowerCase()=="content-type"),O=o.FormData&&u instanceof o.FormData,!(0<=Array.prototype.indexOf.call(pO,d,void 0))||_||O||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,q]of m)this.g.setRequestHeader(V,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{OE(this),this.u=!0,this.g.send(u),this.u=!1}catch(V){NE(this,V)}};function NE(u,d){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=d,u.m=5,DE(u),uh(u)}function DE(u){u.A||(u.A=!0,oe(u,"complete"),oe(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,oe(this,"complete"),oe(this,"abort"),uh(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),uh(this,!0)),Xe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?xE(this):this.bb())},t.bb=function(){xE(this)};function xE(u){if(u.h&&typeof a<"u"&&(!u.v[1]||Pr(u)!=4||u.Z()!=2)){if(u.u&&Pr(u)==4)Ke(u.Ea,0,u);else if(oe(u,"readystatechange"),Pr(u)==4){u.h=!1;try{const q=u.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var m;if(!(m=d)){var _;if(_=q===0){var O=String(u.D).match(TE)[1]||null;!O&&o.self&&o.self.location&&(O=o.self.location.protocol.slice(0,-1)),_=!mO.test(O?O.toLowerCase():"")}m=_}if(m)oe(u,"complete"),oe(u,"success");else{u.m=6;try{var V=2<Pr(u)?u.g.statusText:""}catch{V=""}u.l=V+" ["+u.Z()+"]",DE(u)}}finally{uh(u)}}}}function uh(u,d){if(u.g){OE(u);const m=u.g,_=u.v[0]?()=>{}:null;u.g=null,u.v=null,d||oe(u,"ready");try{m.onreadystatechange=_}catch{}}}function OE(u){u.I&&(o.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function Pr(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<Pr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var d=this.g.responseText;return u&&d.indexOf(u)==0&&(d=d.substring(u.length)),Im(d)}};function PE(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function gO(u){const d={};u=(u.g&&2<=Pr(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<u.length;_++){if(v(u[_]))continue;var m=C(u[_]);const O=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const V=d[O]||[];d[O]=V,V.push(m)}I(d,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ml(u,d,m){return m&&m.internalChannelParams&&m.internalChannelParams[u]||d}function ME(u){this.Aa=0,this.i=[],this.j=new Rl,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ml("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ml("baseRetryDelayMs",5e3,u),this.cb=Ml("retryDelaySeedMs",1e4,u),this.Wa=Ml("forwardChannelMaxRetries",2,u),this.wa=Ml("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new pE(u&&u.concurrentRequestLimit),this.Da=new dO,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=ME.prototype,t.la=8,t.G=1,t.connect=function(u,d,m,_){$t(0),this.W=u,this.H=d||{},m&&_!==void 0&&(this.H.OSID=m,this.H.OAID=_),this.F=this.X,this.I=qE(this,null,this.W),hh(this)};function Pm(u){if(kE(u),u.G==3){var d=u.U++,m=Or(u.I);if(Me(m,"SID",u.K),Me(m,"RID",d),Me(m,"TYPE","terminate"),kl(u,m),d=new Ti(u,u.j,d),d.L=2,d.v=ah(Or(m)),m=!1,o.navigator&&o.navigator.sendBeacon)try{m=o.navigator.sendBeacon(d.v.toString(),"")}catch{}!m&&o.Image&&(new Image().src=d.v,m=!0),m||(d.g=GE(d.j,null),d.g.ea(d.v)),d.F=Date.now(),rh(d)}zE(u)}function ch(u){u.g&&(km(u),u.g.cancel(),u.g=null)}function kE(u){ch(u),u.u&&(o.clearTimeout(u.u),u.u=null),dh(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&o.clearTimeout(u.s),u.s=null)}function hh(u){if(!gE(u.h)&&!u.s){u.s=!0;var d=u.Ga;ne||De(),ee||(ne(),ee=!0),Re.add(d,u),u.B=0}}function _O(u,d){return _E(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=d.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Sl(p(u.Ga,u,d),jE(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const O=new Ti(this,this.j,u);let V=this.o;if(this.S&&(V?(V=y(V),w(V,this.S)):V=this.S),this.m!==null||this.O||(O.H=V,V=null),this.P)e:{for(var d=0,m=0;m<this.i.length;m++){t:{var _=this.i[m];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(d+=_,4096<d){d=m;break e}if(d===4096||m===this.i.length-1){d=m+1;break e}}d=1e3}else d=1e3;d=LE(this,O,d),m=Or(this.I),Me(m,"RID",u),Me(m,"CVER",22),this.D&&Me(m,"X-HTTP-Session-Id",this.D),kl(this,m),V&&(this.O?d="headers="+encodeURIComponent(String(CE(V)))+"&"+d:this.m&&Om(m,this.m,V)),xm(this.h,O),this.Ua&&Me(m,"TYPE","init"),this.P?(Me(m,"$req",d),Me(m,"SID","null"),O.T=!0,Rm(O,m,null)):Rm(O,m,d),this.G=2}}else this.G==3&&(u?VE(this,u):this.i.length==0||gE(this.h)||VE(this))};function VE(u,d){var m;d?m=d.l:m=u.U++;const _=Or(u.I);Me(_,"SID",u.K),Me(_,"RID",m),Me(_,"AID",u.T),kl(u,_),u.m&&u.o&&Om(_,u.m,u.o),m=new Ti(u,u.j,m,u.B+1),u.m===null&&(m.H=u.o),d&&(u.i=d.D.concat(u.i)),d=LE(u,m,1e3),m.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),xm(u.h,m),Rm(m,_,d)}function kl(u,d){u.H&&j(u.H,function(m,_){Me(d,_,m)}),u.l&&EE({},function(m,_){Me(d,_,m)})}function LE(u,d,m){m=Math.min(u.i.length,m);var _=u.l?p(u.l.Na,u.l,u):null;e:{var O=u.i;let V=-1;for(;;){const q=["count="+m];V==-1?0<m?(V=O[0].g,q.push("ofs="+V)):V=0:q.push("ofs="+V);let Ce=!0;for(let Nt=0;Nt<m;Nt++){let ge=O[Nt].g;const Ft=O[Nt].map;if(ge-=V,0>ge)V=Math.max(0,O[Nt].g-100),Ce=!1;else try{fO(Ft,q,"req"+ge+"_")}catch{_&&_(Ft)}}if(Ce){_=q.join("&");break e}}}return u=u.i.splice(0,m),d.D=u,_}function UE(u){if(!u.g&&!u.u){u.Y=1;var d=u.Fa;ne||De(),ee||(ne(),ee=!0),Re.add(d,u),u.v=0}}function Mm(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Sl(p(u.Fa,u),jE(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,BE(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Sl(p(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,$t(10),ch(this),BE(this))};function km(u){u.A!=null&&(o.clearTimeout(u.A),u.A=null)}function BE(u){u.g=new Ti(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var d=Or(u.qa);Me(d,"RID","rpc"),Me(d,"SID",u.K),Me(d,"AID",u.T),Me(d,"CI",u.F?"0":"1"),!u.F&&u.ja&&Me(d,"TO",u.ja),Me(d,"TYPE","xmlhttp"),kl(u,d),u.m&&u.o&&Om(d,u.m,u.o),u.L&&(u.g.I=u.L);var m=u.g;u=u.ia,m.L=1,m.v=ah(Or(d)),m.m=null,m.P=!0,dE(m,u)}t.Za=function(){this.C!=null&&(this.C=null,ch(this),Mm(this),$t(19))};function dh(u){u.C!=null&&(o.clearTimeout(u.C),u.C=null)}function FE(u,d){var m=null;if(u.g==d){dh(u),km(u),u.g=null;var _=2}else if(Dm(u.h,d))m=d.D,yE(u.h,d),_=1;else return;if(u.G!=0){if(d.o)if(_==1){m=d.m?d.m.length:0,d=Date.now()-d.F;var O=u.B;_=xr(),oe(_,new lE(_,m)),hh(u)}else UE(u);else if(O=d.s,O==3||O==0&&0<d.X||!(_==1&&_O(u,d)||_==2&&Mm(u)))switch(m&&0<m.length&&(d=u.h,d.i=d.i.concat(m)),O){case 1:Rs(u,5);break;case 4:Rs(u,10);break;case 3:Rs(u,6);break;default:Rs(u,2)}}}function jE(u,d){let m=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(m*=2),m*d}function Rs(u,d){if(u.j.info("Error code "+d),d==2){var m=p(u.fb,u),_=u.Xa;const O=!_;_=new Ss(_||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||ih(_,"https"),ah(_),O?cO(_.toString(),m):hO(_.toString(),m)}else $t(2);u.G=0,u.l&&u.l.sa(d),zE(u),kE(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),$t(2)):(this.j.info("Failed to ping google.com"),$t(1))};function zE(u){if(u.G=0,u.ka=[],u.l){const d=vE(u.h);(d.length!=0||u.i.length!=0)&&(P(u.ka,d),P(u.ka,u.i),u.h.i.length=0,N(u.i),u.i.length=0),u.l.ra()}}function qE(u,d,m){var _=m instanceof Ss?Or(m):new Ss(m);if(_.g!="")d&&(_.g=d+"."+_.g),sh(_,_.s);else{var O=o.location;_=O.protocol,d=d?d+"."+O.hostname:O.hostname,O=+O.port;var V=new Ss(null);_&&ih(V,_),d&&(V.g=d),O&&sh(V,O),m&&(V.l=m),_=V}return m=u.D,d=u.ya,m&&d&&Me(_,m,d),Me(_,"VER",u.la),kl(u,_),_}function GE(u,d,m){if(d&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=u.Ca&&!u.pa?new Xe(new oh({eb:m})):new Xe(u.pa),d.Ha(u.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function HE(){}t=HE.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function fh(){}fh.prototype.g=function(u,d){return new Tn(u,d)};function Tn(u,d){X.call(this),this.g=new ME(d),this.l=u,this.h=d&&d.messageUrlParams||null,u=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(u?u["X-WebChannel-Content-Type"]=d.messageContentType:u={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(u?u["X-WebChannel-Client-Profile"]=d.va:u={"X-WebChannel-Client-Profile":d.va}),this.g.S=u,(u=d&&d.Sb)&&!v(u)&&(this.g.m=u),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!v(d)&&(this.g.D=d,u=this.h,u!==null&&d in u&&(u=this.h,d in u&&delete u[d])),this.j=new Oa(this)}S(Tn,X),Tn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Tn.prototype.close=function(){Pm(this.g)},Tn.prototype.o=function(u){var d=this.g;if(typeof u=="string"){var m={};m.__data__=u,u=m}else this.u&&(m={},m.__data__=er(u),u=m);d.i.push(new eO(d.Ya++,u)),d.G==3&&hh(d)},Tn.prototype.N=function(){this.g.l=null,delete this.j,Pm(this.g),delete this.g,Tn.aa.N.call(this)};function KE(u){Al.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var d=u.__sm__;if(d){e:{for(const m in d){u=m;break e}u=void 0}(this.i=u)&&(u=this.i,d=d!==null&&u in d?d[u]:void 0),this.data=d}else this.data=u}S(KE,Al);function YE(){wl.call(this),this.status=1}S(YE,wl);function Oa(u){this.g=u}S(Oa,HE),Oa.prototype.ua=function(){oe(this.g,"a")},Oa.prototype.ta=function(u){oe(this.g,new KE(u))},Oa.prototype.sa=function(u){oe(this.g,new YE)},Oa.prototype.ra=function(){oe(this.g,"b")},fh.prototype.createWebChannel=fh.prototype.g,Tn.prototype.send=Tn.prototype.o,Tn.prototype.open=Tn.prototype.m,Tn.prototype.close=Tn.prototype.close,oC=function(){return new fh},aC=function(){return xr()},sC=be,zg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},th.NO_ERROR=0,th.TIMEOUT=8,th.HTTP_ERROR=6,rd=th,uE.COMPLETE="complete",iC=uE,bl.EventType=lr,lr.OPEN="a",lr.CLOSE="b",lr.ERROR="c",lr.MESSAGE="d",X.prototype.listen=X.prototype.K,iu=bl,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,rC=Xe}).apply(typeof xh<"u"?xh:typeof self<"u"?self:typeof window<"u"?window:{});const OI="@firebase/firestore";/**
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
 */let wt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};wt.UNAUTHENTICATED=new wt(null),wt.GOOGLE_CREDENTIALS=new wt("google-credentials-uid"),wt.FIRST_PARTY=new wt("first-party-uid"),wt.MOCK_USER=new wt("mock-user");/**
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
 */let ol="10.14.0";/**
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
 */const os=new Mf("@firebase/firestore");function Ha(){return os.logLevel}function ik(t){os.setLogLevel(t)}function F(t,...e){if(os.logLevel<=ue.DEBUG){const n=e.map(Dy);os.debug(`Firestore (${ol}): ${t}`,...n)}}function at(t,...e){if(os.logLevel<=ue.ERROR){const n=e.map(Dy);os.error(`Firestore (${ol}): ${t}`,...n)}}function Ar(t,...e){if(os.logLevel<=ue.WARN){const n=e.map(Dy);os.warn(`Firestore (${ol}): ${t}`,...n)}}function Dy(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${ol}) INTERNAL ASSERTION FAILED: `+t;throw at(e),new Error(e)}function Q(t,e){t||Y()}function sk(t,e){t||Y()}function H(t,e){return t}/**
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
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Gt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Lt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class lC{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ak{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(wt.UNAUTHENTICATED))}shutdown(){}}class ok{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class lk{constructor(e){this.t=e,this.currentUser=wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Q(this.o===void 0);let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Lt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Lt,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},o=l=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>o(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?o(l):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Lt)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Q(typeof r.accessToken=="string"),new lC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Q(e===null||typeof e=="string"),new wt(e)}}class uk{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=wt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ck{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new uk(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dk{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Q(this.o===void 0);const r=s=>{s.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,F("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Q(typeof n.token=="string"),this.R=n.token,new hk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function fk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class uC{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=fk(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function re(t,e){return t<e?-1:t>e?1:0}function Lo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function cC(t){return t+"\0"}/**
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
 */class He{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new He(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new He(0,0))}static max(){return new J(new He(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Xu{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Xu.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Xu?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),a=n.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class he extends Xu{construct(e,n,r){return new he(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new he(n)}static emptyPath(){return new he([])}}const mk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qe extends Xu{construct(e,n,r){return new qe(e,n,r)}static isValidIdentifier(e){return mk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new qe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new B(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;i<e.length;){const o=e[i];if(o==="\\"){if(i+1===e.length)throw new B(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new B(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else o==="`"?(a=!a,i++):o!=="."||a?(r+=o,i++):(s(),i++)}if(s(),a)throw new B(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qe(n)}static emptyPath(){return new qe([])}}/**
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
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(he.fromString(e))}static fromName(e){return new G(he.fromString(e).popFirst(5))}static empty(){return new G(he.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&he.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return he.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new he(e.slice()))}}/**
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
 */class $d{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function qg(t){return t.fields.find(e=>e.kind===2)}function ks(t){return t.fields.filter(e=>e.kind!==2)}$d.UNKNOWN_ID=-1;class id{constructor(e,n){this.fieldPath=e,this.kind=n}}class Ju{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Ju(0,kn.min())}}function hC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new He(n+1,0):new He(n,r));return new kn(i,G.empty(),e)}function dC(t){return new kn(t.readTime,t.key,-1)}class kn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new kn(J.min(),G.empty(),-1)}static max(){return new kn(J.max(),G.empty(),-1)}}function xy(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:re(t.largestBatchId,e.largestBatchId))}/**
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
 */const fC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class mC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function _s(t){if(t.code!==k.FAILED_PRECONDITION||t.message!==fC)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,a=!1;e.forEach(o=>{++i,o.next(()=>{++s,a&&s===i&&n()},l=>r(l))}),a=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,a=new Array(s);let o=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(h=>{a[c]=h,++o,o===s&&r(a)},h=>i(h))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
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
 */class kf{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new Lt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new bu(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Oy(r.target.error);this.V.reject(new bu(e,i))}}static open(e,n,r,i){try{return new kf(n,e.transaction(i,r))}catch(s){throw new bu(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(F("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new gk(n)}}class Tr{constructor(e,n,r){this.name=e,this.version=n,this.p=r,Tr.S($e())===12.2&&at("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return F("SimpleDb","Removing database:",e),Vs(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Yu())return!1;if(Tr.v())return!0;const e=$e(),n=Tr.S(e),r=0<n&&n<10,i=pC(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(F("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const a=s.target.result;n(a)},i.onblocked=()=>{r(new bu(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const a=s.target.error;a.name==="VersionError"?r(new B(k.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):a.name==="InvalidStateError"?r(new B(k.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):r(new bu(e,a))},i.onupgradeneeded=s=>{F("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const a=s.target.result;this.p.O(a,i.transaction,s.oldVersion,this.version).next(()=>{F("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=n=>this.N(n)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let a=0;for(;;){++a;try{this.db=await this.M(e);const o=kf.open(this.db,e,s?"readonly":"readwrite",r),l=i(o).next(c=>(o.g(),c)).catch(c=>(o.abort(c),M.reject(c))).toPromise();return l.catch(()=>{}),await o.m,l}catch(o){const l=o,c=l.name!=="FirebaseError"&&a<3;if(F("SimpleDb","Transaction failed with error:",l.message,"Retrying:",c),this.close(),!c)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function pC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class pk{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Vs(this.B.delete())}}class bu extends B{constructor(e,n){super(k.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function ys(t){return t.name==="IndexedDbTransactionError"}class gk{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(F("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(F("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Vs(r)}add(e){return F("SimpleDb","ADD",this.store.name,e,e),Vs(this.store.add(e))}get(e){return Vs(this.store.get(e)).next(n=>(n===void 0&&(n=null),F("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return F("SimpleDb","DELETE",this.store.name,e),Vs(this.store.delete(e))}count(){return F("SimpleDb","COUNT",this.store.name),Vs(this.store.count())}U(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new M((a,o)=>{s.onerror=l=>{o(l.target.error)},s.onsuccess=l=>{a(l.target.result)}})}{const s=this.cursor(r),a=[];return this.W(s,(o,l)=>{a.push(l)}).next(()=>a)}}G(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new M((i,s)=>{r.onerror=a=>{s(a.target.error)},r.onsuccess=a=>{i(a.target.result)}})}j(e,n){F("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.H=!1;const i=this.cursor(r);return this.W(i,(s,a,o)=>o.delete())}J(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}Y(e){const n=this.cursor({});return new M((r,i)=>{n.onerror=s=>{const a=Oy(s.target.error);i(a)},n.onsuccess=s=>{const a=s.target.result;a?e(a.primaryKey,a.value).next(o=>{o?a.continue():r()}):r()}})}W(e,n){const r=[];return new M((i,s)=>{e.onerror=a=>{s(a.target.error)},e.onsuccess=a=>{const o=a.target.result;if(!o)return void i();const l=new pk(o),c=n(o.primaryKey,o.value,l);if(c instanceof M){const h=c.catch(f=>(l.done(),M.reject(f)));r.push(h)}l.isDone?i():l.K===null?o.continue():o.continue(l.K)}}).next(()=>M.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Vs(t){return new M((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Oy(r.target.error);n(i)}})}let PI=!1;function Oy(t){const e=Tr.S($e());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new B("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return PI||(PI=!0,setTimeout(()=>{throw r},0)),r}}return t}class _k{constructor(e,n){this.asyncQueue=e,this.Z=n,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){F("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{F("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(n){ys(n)?F("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",n):await _s(n)}await this.X(6e4)})}}class yk{constructor(e,n){this.localStore=e,this.persistence=n}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.te(n,e))}te(e,n){const r=new Set;let i=n,s=!0;return M.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(a=>{if(a!==null&&!r.has(a))return F("IndexBackfiller",`Processing collection: ${a}`),this.ne(e,a,i).next(o=>{i-=o,r.add(a)});s=!1})).next(()=>n-i)}ne(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const a=s.changes;return this.localStore.indexManager.updateIndexEntries(e,a).next(()=>this.re(i,s)).next(o=>(F("IndexBackfiller",`Updating offset: ${o}`),this.localStore.indexManager.updateCollectionGroup(e,n,o))).next(()=>a.size)}))}re(e,n){let r=e;return n.changes.forEach((i,s)=>{const a=dC(s);xy(a,r)>0&&(r=a)}),new kn(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class fn{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}fn.oe=-1;function Nc(t){return t==null}function Zu(t){return t===0&&1/t==-1/0}function gC(t){return typeof t=="number"&&Number.isInteger(t)&&!Zu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function tn(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=MI(e)),e=vk(t.get(n),e);return MI(e)}function vk(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function MI(t){return t+""}function _r(t){const e=t.length;if(Q(e>=2),e===2)return Q(t.charAt(0)===""&&t.charAt(1)===""),he.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const a=t.indexOf("",s);switch((a<0||a>n)&&Y(),t.charAt(a+1)){case"":const o=t.substring(s,a);let l;i.length===0?l=o:(i+=o,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,a),i+="\0";break;case"":i+=t.substring(s,a+1);break;default:Y()}s=a+2}return new he(r)}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const kI=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
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
 */function sd(t,e){return[t,tn(e)]}function _C(t,e,n){return[t,tn(e),n]}const Ek={},Tk=["prefixPath","collectionGroup","readTime","documentId"],Ik=["prefixPath","collectionGroup","documentId"],bk=["collectionGroup","readTime","prefixPath","documentId"],Ak=["canonicalId","targetId"],wk=["targetId","path"],Sk=["path","targetId"],Rk=["collectionId","parent"],Ck=["indexId","uid"],Nk=["uid","sequenceNumber"],Dk=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],xk=["indexId","uid","orderedDocumentKey"],Ok=["userId","collectionPath","documentId"],Pk=["userId","collectionPath","largestBatchId"],Mk=["userId","collectionGroup","largestBatchId"],yC=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],kk=[...yC,"documentOverlays"],vC=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],EC=vC,Py=[...EC,"indexConfiguration","indexState","indexEntries"],Vk=Py,Lk=[...Py,"globals"];/**
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
 */class Gg extends mC{constructor(e,n){super(),this._e=e,this.currentSequenceNumber=n}}function Et(t,e){const n=H(t);return Tr.F(n._e,e)}/**
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
 */function VI(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ba(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function TC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Pe{constructor(e,n){this.comparator=e,this.root=n||xt.EMPTY}insert(e,n){return new Pe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,xt.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Oh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Oh(this.root,e,this.comparator,!1)}getReverseIterator(){return new Oh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Oh(this.root,e,this.comparator,!0)}}class Oh{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??xt.RED,this.left=i??xt.EMPTY,this.right=s??xt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new xt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return xt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return xt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}xt.EMPTY=null,xt.RED=!0,xt.BLACK=!1;xt.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,r,i,s){return this}insert(e,n,r){return new xt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Se{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new LI(this.data.getIterator())}getIteratorFrom(e){return new LI(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Se)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Se(this.comparator);return n.data=e,n}}class LI{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Va(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class mn{constructor(e){this.fields=e,e.sort(qe.comparator)}static empty(){return new mn([])}unionWith(e){let n=new Se(qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new mn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Lo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class IC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function Uk(){return typeof atob<"u"}/**
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
 */class tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new IC("Invalid base64 string: "+s):s}}(e);return new tt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const Bk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function oi(t){if(Q(!!t),typeof t=="string"){let e=0;const n=Bk.exec(t);if(Q(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ls(t){return typeof t=="string"?tt.fromBase64String(t):tt.fromUint8Array(t)}/**
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
 */function Vf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function My(t){const e=t.mapValue.fields.__previous_value__;return Vf(e)?My(e):e}function ec(t){const e=oi(t.mapValue.fields.__local_write_time__.timestampValue);return new He(e.seconds,e.nanos)}/**
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
 */class Fk{constructor(e,n,r,i,s,a,o,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=o,this.longPollingOptions=l,this.useFetchStreams=c}}class us{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new us("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof us&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const zi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},ad={nullValue:"NULL_VALUE"};function ia(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Vf(t)?4:bC(t)?9007199254740991:Lf(t)?10:11:Y()}function wr(t,e){if(t===e)return!0;const n=ia(t);if(n!==ia(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ec(t).isEqual(ec(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=oi(i.timestampValue),o=oi(s.timestampValue);return a.seconds===o.seconds&&a.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ls(i.bytesValue).isEqual(ls(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ze(i.geoPointValue.latitude)===ze(s.geoPointValue.latitude)&&ze(i.geoPointValue.longitude)===ze(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ze(i.integerValue)===ze(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=ze(i.doubleValue),o=ze(s.doubleValue);return a===o?Zu(a)===Zu(o):isNaN(a)&&isNaN(o)}return!1}(t,e);case 9:return Lo(t.arrayValue.values||[],e.arrayValue.values||[],wr);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},o=s.mapValue.fields||{};if(VI(a)!==VI(o))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(o[l]===void 0||!wr(a[l],o[l])))return!1;return!0}(t,e);default:return Y()}}function tc(t,e){return(t.values||[]).find(n=>wr(n,e))!==void 0}function cs(t,e){if(t===e)return 0;const n=ia(t),r=ia(e);if(n!==r)return re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return re(t.booleanValue,e.booleanValue);case 2:return function(s,a){const o=ze(s.integerValue||s.doubleValue),l=ze(a.integerValue||a.doubleValue);return o<l?-1:o>l?1:o===l?0:isNaN(o)?isNaN(l)?0:-1:1}(t,e);case 3:return UI(t.timestampValue,e.timestampValue);case 4:return UI(ec(t),ec(e));case 5:return re(t.stringValue,e.stringValue);case 6:return function(s,a){const o=ls(s),l=ls(a);return o.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,a){const o=s.split("/"),l=a.split("/");for(let c=0;c<o.length&&c<l.length;c++){const h=re(o[c],l[c]);if(h!==0)return h}return re(o.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,a){const o=re(ze(s.latitude),ze(a.latitude));return o!==0?o:re(ze(s.longitude),ze(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return BI(t.arrayValue,e.arrayValue);case 10:return function(s,a){var o,l,c,h;const f=s.fields||{},p=a.fields||{},g=(o=f.value)===null||o===void 0?void 0:o.arrayValue,S=(l=p.value)===null||l===void 0?void 0:l.arrayValue,N=re(((c=g==null?void 0:g.values)===null||c===void 0?void 0:c.length)||0,((h=S==null?void 0:S.values)===null||h===void 0?void 0:h.length)||0);return N!==0?N:BI(g,S)}(t.mapValue,e.mapValue);case 11:return function(s,a){if(s===zi.mapValue&&a===zi.mapValue)return 0;if(s===zi.mapValue)return 1;if(a===zi.mapValue)return-1;const o=s.fields||{},l=Object.keys(o),c=a.fields||{},h=Object.keys(c);l.sort(),h.sort();for(let f=0;f<l.length&&f<h.length;++f){const p=re(l[f],h[f]);if(p!==0)return p;const g=cs(o[l[f]],c[h[f]]);if(g!==0)return g}return re(l.length,h.length)}(t.mapValue,e.mapValue);default:throw Y()}}function UI(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return re(t,e);const n=oi(t),r=oi(e),i=re(n.seconds,r.seconds);return i!==0?i:re(n.nanos,r.nanos)}function BI(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=cs(n[i],r[i]);if(s)return s}return re(n.length,r.length)}function Uo(t){return Hg(t)}function Hg(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=oi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ls(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Hg(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${Hg(n.fields[a])}`;return i+"}"}(t.mapValue):Y()}function sa(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Kg(t){return!!t&&"integerValue"in t}function nc(t){return!!t&&"arrayValue"in t}function FI(t){return!!t&&"nullValue"in t}function jI(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function od(t){return!!t&&"mapValue"in t}function Lf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Au(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ba(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Au(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Au(t.arrayValue.values[n]);return e}return Object.assign({},t)}function bC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const AC={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function jk(t){return"nullValue"in t?ad:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?sa(us.empty(),G.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?Lf(t)?AC:{mapValue:{}}:Y()}function zk(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?sa(us.empty(),G.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?AC:"mapValue"in t?Lf(t)?{mapValue:{}}:zi:Y()}function zI(t,e){const n=cs(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function qI(t,e){const n=cs(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class Mt{constructor(e){this.value=e}static empty(){return new Mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!od(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Au(n)}setAll(e){let n=qe.emptyPath(),r={},i=[];e.forEach((a,o)=>{if(!n.isImmediateParentOf(o)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=o.popLast()}a?r[o.lastSegment()]=Au(a):i.push(o.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());od(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return wr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];od(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ba(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Mt(Au(this.value))}}function wC(t){const e=[];return ba(t.fields,(n,r)=>{const i=new qe([n]);if(od(r)){const s=wC(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new mn(e)}/**
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
 */class Le{constructor(e,n,r,i,s,a,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=o}static newInvalidDocument(e){return new Le(e,0,J.min(),J.min(),J.min(),Mt.empty(),0)}static newFoundDocument(e,n,r,i){return new Le(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new Le(e,2,n,J.min(),J.min(),Mt.empty(),0)}static newUnknownDocument(e,n){return new Le(e,3,n,J.min(),J.min(),Mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Le&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Le(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class hs{constructor(e,n){this.position=e,this.inclusive=n}}function GI(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],a=t.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(a.referenceValue),n.key):r=cs(a,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function HI(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!wr(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class rc{constructor(e,n="asc"){this.field=e,this.dir=n}}function qk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class SC{}class fe extends SC{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Gk(e,n,r):n==="array-contains"?new Yk(e,r):n==="in"?new OC(e,r):n==="not-in"?new $k(e,r):n==="array-contains-any"?new Qk(e,r):new fe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Hk(e,r):new Kk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(cs(n,this.value)):n!==null&&ia(this.value)===ia(n)&&this.matchesComparison(cs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ie extends SC{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Ie(e,n)}matches(e){return Bo(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Bo(t){return t.op==="and"}function Yg(t){return t.op==="or"}function ky(t){return RC(t)&&Bo(t)}function RC(t){for(const e of t.filters)if(e instanceof Ie)return!1;return!0}function $g(t){if(t instanceof fe)return t.field.canonicalString()+t.op.toString()+Uo(t.value);if(ky(t))return t.filters.map(e=>$g(e)).join(",");{const e=t.filters.map(n=>$g(n)).join(",");return`${t.op}(${e})`}}function CC(t,e){return t instanceof fe?function(r,i){return i instanceof fe&&r.op===i.op&&r.field.isEqual(i.field)&&wr(r.value,i.value)}(t,e):t instanceof Ie?function(r,i){return i instanceof Ie&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,o)=>s&&CC(a,i.filters[o]),!0):!1}(t,e):void Y()}function NC(t,e){const n=t.filters.concat(e);return Ie.create(n,t.op)}function DC(t){return t instanceof fe?function(n){return`${n.field.canonicalString()} ${n.op} ${Uo(n.value)}`}(t):t instanceof Ie?function(n){return n.op.toString()+" {"+n.getFilters().map(DC).join(" ,")+"}"}(t):"Filter"}class Gk extends fe{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class Hk extends fe{constructor(e,n){super(e,"in",n),this.keys=xC("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Kk extends fe{constructor(e,n){super(e,"not-in",n),this.keys=xC("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function xC(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class Yk extends fe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return nc(n)&&tc(n.arrayValue,this.value)}}class OC extends fe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&tc(this.value.arrayValue,n)}}class $k extends fe{constructor(e,n){super(e,"not-in",n)}matches(e){if(tc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!tc(this.value.arrayValue,n)}}class Qk extends fe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!nc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>tc(this.value.arrayValue,r))}}/**
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
 */class Wk{constructor(e,n=null,r=[],i=[],s=null,a=null,o=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=o,this.ue=null}}function Qg(t,e=null,n=[],r=[],i=null,s=null,a=null){return new Wk(t,e,n,r,i,s,a)}function aa(t){const e=H(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>$g(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Nc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Uo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Uo(r)).join(",")),e.ue=n}return e.ue}function Dc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!qk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!CC(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!HI(t.startAt,e.startAt)&&HI(t.endAt,e.endAt)}function Qd(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Wd(t,e){return t.filters.filter(n=>n instanceof fe&&n.field.isEqual(e))}function KI(t,e,n){let r=ad,i=!0;for(const s of Wd(t,e)){let a=ad,o=!0;switch(s.op){case"<":case"<=":a=jk(s.value);break;case"==":case"in":case">=":a=s.value;break;case">":a=s.value,o=!1;break;case"!=":case"not-in":a=ad}zI({value:r,inclusive:i},{value:a,inclusive:o})<0&&(r=a,i=o)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const a=n.position[s];zI({value:r,inclusive:i},{value:a,inclusive:n.inclusive})<0&&(r=a,i=n.inclusive);break}}return{value:r,inclusive:i}}function YI(t,e,n){let r=zi,i=!0;for(const s of Wd(t,e)){let a=zi,o=!0;switch(s.op){case">=":case">":a=zk(s.value),o=!1;break;case"==":case"in":case"<=":a=s.value;break;case"<":a=s.value,o=!1;break;case"!=":case"not-in":a=zi}qI({value:r,inclusive:i},{value:a,inclusive:o})>0&&(r=a,i=o)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const a=n.position[s];qI({value:r,inclusive:i},{value:a,inclusive:n.inclusive})>0&&(r=a,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class di{constructor(e,n=null,r=[],i=[],s=null,a="F",o=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=o,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function PC(t,e,n,r,i,s,a,o){return new di(t,e,n,r,i,s,a,o)}function ll(t){return new di(t)}function $I(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Vy(t){return t.collectionGroup!==null}function _o(t){const e=H(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let o=new Se(qe.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(o=o.add(c.field))})}),o})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new rc(s,r))}),n.has(qe.keyField().canonicalString())||e.ce.push(new rc(qe.keyField(),r))}return e.ce}function nn(t){const e=H(t);return e.le||(e.le=Xk(e,_o(t))),e.le}function Xk(t,e){if(t.limitType==="F")return Qg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new rc(i.field,s)});const n=t.endAt?new hs(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new hs(t.startAt.position,t.startAt.inclusive):null;return Qg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Wg(t,e){const n=t.filters.concat([e]);return new di(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Xd(t,e,n){return new di(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function xc(t,e){return Dc(nn(t),nn(e))&&t.limitType===e.limitType}function MC(t){return`${aa(nn(t))}|lt:${t.limitType}`}function Ka(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>DC(i)).join(", ")}]`),Nc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Uo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Uo(i)).join(",")),`Target(${r})`}(nn(t))}; limitType=${t.limitType})`}function Oc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):G.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of _o(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(a,o,l){const c=GI(a,o,l);return a.inclusive?c<=0:c<0}(r.startAt,_o(r),i)||r.endAt&&!function(a,o,l){const c=GI(a,o,l);return a.inclusive?c>=0:c>0}(r.endAt,_o(r),i))}(t,e)}function kC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function VC(t){return(e,n)=>{let r=!1;for(const i of _o(t)){const s=Jk(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Jk(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(s,a,o){const l=a.data.field(s),c=o.data.field(s);return l!==null&&c!==null?cs(l,c):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
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
 */class vs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ba(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return TC(this.inner)}size(){return this.innerSize}}/**
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
 */const Zk=new Pe(G.comparator);function pn(){return Zk}const LC=new Pe(G.comparator);function su(...t){let e=LC;for(const n of t)e=e.insert(n.key,n);return e}function UC(t){let e=LC;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function yr(){return wu()}function BC(){return wu()}function wu(){return new vs(t=>t.toString(),(t,e)=>t.isEqual(e))}const eV=new Pe(G.comparator),tV=new Se(G.comparator);function ae(...t){let e=tV;for(const n of t)e=e.add(n);return e}const nV=new Se(re);function Ly(){return nV}/**
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
 */function Uy(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zu(e)?"-0":e}}function FC(t){return{integerValue:""+t}}function jC(t,e){return gC(e)?FC(e):Uy(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Uf{constructor(){this._=void 0}}function rV(t,e,n){return t instanceof Fo?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Vf(s)&&(s=My(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(n,e):t instanceof oa?qC(t,e):t instanceof la?GC(t,e):function(i,s){const a=zC(i,s),o=QI(a)+QI(i.Pe);return Kg(a)&&Kg(i.Pe)?FC(o):Uy(i.serializer,o)}(t,e)}function iV(t,e,n){return t instanceof oa?qC(t,e):t instanceof la?GC(t,e):n}function zC(t,e){return t instanceof jo?function(r){return Kg(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Fo extends Uf{}class oa extends Uf{constructor(e){super(),this.elements=e}}function qC(t,e){const n=HC(e);for(const r of t.elements)n.some(i=>wr(i,r))||n.push(r);return{arrayValue:{values:n}}}class la extends Uf{constructor(e){super(),this.elements=e}}function GC(t,e){let n=HC(e);for(const r of t.elements)n=n.filter(i=>!wr(i,r));return{arrayValue:{values:n}}}class jo extends Uf{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function QI(t){return ze(t.integerValue||t.doubleValue)}function HC(t){return nc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Pc{constructor(e,n){this.field=e,this.transform=n}}function sV(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof oa&&i instanceof oa||r instanceof la&&i instanceof la?Lo(r.elements,i.elements,wr):r instanceof jo&&i instanceof jo?wr(r.Pe,i.Pe):r instanceof Fo&&i instanceof Fo}(t.transform,e.transform)}class aV{constructor(e,n){this.version=e,this.transformResults=n}}class Ge{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ge}static exists(e){return new Ge(void 0,e)}static updateTime(e){return new Ge(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ld(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Bf{}function KC(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new cl(t.key,Ge.none()):new ul(t.key,t.data,Ge.none());{const n=t.data,r=Mt.empty();let i=new Se(qe.comparator);for(let s of e.fields)if(!i.has(s)){let a=n.field(s);a===null&&s.length>1&&(s=s.popLast(),a=n.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new fi(t.key,r,new mn(i.toArray()),Ge.none())}}function oV(t,e,n){t instanceof ul?function(i,s,a){const o=i.value.clone(),l=XI(i.fieldTransforms,s,a.transformResults);o.setAll(l),s.convertToFoundDocument(a.version,o).setHasCommittedMutations()}(t,e,n):t instanceof fi?function(i,s,a){if(!ld(i.precondition,s))return void s.convertToUnknownDocument(a.version);const o=XI(i.fieldTransforms,s,a.transformResults),l=s.data;l.setAll(YC(i)),l.setAll(o),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function Su(t,e,n,r){return t instanceof ul?function(s,a,o,l){if(!ld(s.precondition,a))return o;const c=s.value.clone(),h=JI(s.fieldTransforms,l,a);return c.setAll(h),a.convertToFoundDocument(a.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof fi?function(s,a,o,l){if(!ld(s.precondition,a))return o;const c=JI(s.fieldTransforms,l,a),h=a.data;return h.setAll(YC(s)),h.setAll(c),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,a,o){return ld(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):o}(t,e,n)}function lV(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=zC(r.transform,i||null);s!=null&&(n===null&&(n=Mt.empty()),n.set(r.field,s))}return n||null}function WI(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Lo(r,i,(s,a)=>sV(s,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ul extends Bf{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class fi extends Bf{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function YC(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function XI(t,e,n){const r=new Map;Q(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],a=s.transform,o=e.data.field(s.field);r.set(s.field,iV(a,o,n[i]))}return r}function JI(t,e,n){const r=new Map;for(const i of t){const s=i.transform,a=n.data.field(i.field);r.set(i.field,rV(s,a,e))}return r}class cl extends Bf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class By extends Bf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Fy{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&oV(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Su(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Su(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=BC();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let o=this.applyToLocalView(a,s.mutatedFields);o=n.has(i.key)?null:o;const l=KC(a,o);l!==null&&r.set(i.key,l),a.isValidDocument()||a.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ae())}isEqual(e){return this.batchId===e.batchId&&Lo(this.mutations,e.mutations,(n,r)=>WI(n,r))&&Lo(this.baseMutations,e.baseMutations,(n,r)=>WI(n,r))}}class jy{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Q(e.mutations.length===r.length);let i=function(){return eV}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new jy(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class zy{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class uV{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ht,pe;function $C(t){switch(t){default:return Y();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function QC(t){if(t===void 0)return at("GRPC error has no .code"),k.UNKNOWN;switch(t){case ht.OK:return k.OK;case ht.CANCELLED:return k.CANCELLED;case ht.UNKNOWN:return k.UNKNOWN;case ht.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case ht.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case ht.INTERNAL:return k.INTERNAL;case ht.UNAVAILABLE:return k.UNAVAILABLE;case ht.UNAUTHENTICATED:return k.UNAUTHENTICATED;case ht.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case ht.NOT_FOUND:return k.NOT_FOUND;case ht.ALREADY_EXISTS:return k.ALREADY_EXISTS;case ht.PERMISSION_DENIED:return k.PERMISSION_DENIED;case ht.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case ht.ABORTED:return k.ABORTED;case ht.OUT_OF_RANGE:return k.OUT_OF_RANGE;case ht.UNIMPLEMENTED:return k.UNIMPLEMENTED;case ht.DATA_LOSS:return k.DATA_LOSS;default:return Y()}}(pe=ht||(ht={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function WC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const cV=new Qs([4294967295,4294967295],0);function ZI(t){const e=WC().encode(t),n=new nC;return n.update(e),new Uint8Array(n.digest())}function eb(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Qs([n,r],0),new Qs([i,s],0)]}class qy{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new au(`Invalid padding: ${n}`);if(r<0)throw new au(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new au(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new au(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Qs.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Qs.fromNumber(r)));return i.compare(cV)===1&&(i=new Qs([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=ZI(e),[r,i]=eb(n);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new qy(s,i,n);return r.forEach(o=>a.insert(o)),a}insert(e){if(this.Ie===0)return;const n=ZI(e),[r,i]=eb(n);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);this.Ae(a)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class au extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Mc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,kc.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Mc(J.min(),i,new Pe(re),pn(),ae())}}class kc{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new kc(r,n,ae(),ae(),ae())}}/**
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
 */class ud{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class XC{constructor(e,n){this.targetId=e,this.me=n}}class JC{constructor(e,n,r=tt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class tb{constructor(){this.fe=0,this.ge=rb(),this.pe=tt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ae(),n=ae(),r=ae();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Y()}}),new kc(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=rb()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Q(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class hV{constructor(e){this.Le=e,this.Be=new Map,this.ke=pn(),this.qe=nb(),this.Qe=new Pe(re)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Qd(s))if(r===0){const a=new G(s.path);this.Ue(n,a,Le.newNoDocument(a,J.min()))}else Q(r===1);else{const a=this.Ye(n);if(a!==r){const o=this.Ze(e),l=o?this.Xe(o,e,a):1;if(l!==0){this.je(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let a,o;try{a=ls(r).toUint8Array()}catch(l){if(l instanceof IC)return Ar("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{o=new qy(a,i,s)}catch(l){return Ar(l instanceof au?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return o.Ie===0?null:o}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const a=this.Le.tt(),o=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(o)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,a)=>{const o=this.Je(a);if(o){if(s.current&&Qd(o.target)){const l=new G(o.target.path);this.ke.get(l)!==null||this.it(a,l)||this.Ue(a,l,Le.newNoDocument(l,e))}s.be&&(n.set(a,s.ve()),s.Ce())}});let r=ae();this.qe.forEach((s,a)=>{let o=!0;a.forEachWhile(l=>{const c=this.Je(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(o=!1,!1)}),o&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));const i=new Mc(e,n,this.Qe,this.ke,r);return this.ke=pn(),this.qe=nb(),this.Qe=new Pe(re),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new tb,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Se(re),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||F("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new tb),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function nb(){return new Pe(G.comparator)}function rb(){return new Pe(G.comparator)}const dV={asc:"ASCENDING",desc:"DESCENDING"},fV={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},mV={and:"AND",or:"OR"};class pV{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Xg(t,e){return t.useProto3Json||Nc(e)?e:{value:e}}function zo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ZC(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function gV(t,e){return zo(t,e.toTimestamp())}function lt(t){return Q(!!t),J.fromTimestamp(function(n){const r=oi(n);return new He(r.seconds,r.nanos)}(t))}function Gy(t,e){return Jg(t,e).canonicalString()}function Jg(t,e){const n=function(i){return new he(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function eN(t){const e=he.fromString(t);return Q(cN(e)),e}function ic(t,e){return Gy(t.databaseId,e.path)}function Ir(t,e){const n=eN(e);if(n.get(1)!==t.databaseId.projectId)throw new B(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(rN(n))}function tN(t,e){return Gy(t.databaseId,e)}function nN(t){const e=eN(t);return e.length===4?he.emptyPath():rN(e)}function Zg(t){return new he(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function rN(t){return Q(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ib(t,e,n){return{name:ic(t,e),fields:n.value.mapValue.fields}}function iN(t,e,n){const r=Ir(t,e.name),i=lt(e.updateTime),s=e.createTime?lt(e.createTime):J.min(),a=new Mt({mapValue:{fields:e.fields}}),o=Le.newFoundDocument(r,i,s,a);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function _V(t,e){return"found"in e?function(r,i){Q(!!i.found),i.found.name,i.found.updateTime;const s=Ir(r,i.found.name),a=lt(i.found.updateTime),o=i.found.createTime?lt(i.found.createTime):J.min(),l=new Mt({mapValue:{fields:i.found.fields}});return Le.newFoundDocument(s,a,o,l)}(t,e):"missing"in e?function(r,i){Q(!!i.missing),Q(!!i.readTime);const s=Ir(r,i.missing),a=lt(i.readTime);return Le.newNoDocument(s,a)}(t,e):Y()}function yV(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(Q(h===void 0||typeof h=="string"),tt.fromBase64String(h||"")):(Q(h===void 0||h instanceof Buffer||h instanceof Uint8Array),tt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,o=a&&function(c){const h=c.code===void 0?k.UNKNOWN:QC(c.code);return new B(h,c.message||"")}(a);n=new JC(r,i,s,o||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ir(t,r.document.name),s=lt(r.document.updateTime),a=r.document.createTime?lt(r.document.createTime):J.min(),o=new Mt({mapValue:{fields:r.document.fields}}),l=Le.newFoundDocument(i,s,a,o),c=r.targetIds||[],h=r.removedTargetIds||[];n=new ud(c,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ir(t,r.document),s=r.readTime?lt(r.readTime):J.min(),a=Le.newNoDocument(i,s),o=r.removedTargetIds||[];n=new ud([],o,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ir(t,r.document),s=r.removedTargetIds||[];n=new ud([],s,i,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new uV(i,s),o=r.targetId;n=new XC(o,a)}}return n}function sc(t,e){let n;if(e instanceof ul)n={update:ib(t,e.key,e.value)};else if(e instanceof cl)n={delete:ic(t,e.key)};else if(e instanceof fi)n={update:ib(t,e.key,e.data),updateMask:AV(e.fieldMask)};else{if(!(e instanceof By))return Y();n={verify:ic(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const o=a.transform;if(o instanceof Fo)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof oa)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof la)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof jo)return{fieldPath:a.field.canonicalString(),increment:o.Pe};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:gV(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y()}(t,e.precondition)),n}function e_(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?Ge.updateTime(lt(s.updateTime)):s.exists!==void 0?Ge.exists(s.exists):Ge.none()}(e.currentDocument):Ge.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(a,o){let l=null;if("setToServerValue"in o)Q(o.setToServerValue==="REQUEST_TIME"),l=new Fo;else if("appendMissingElements"in o){const h=o.appendMissingElements.values||[];l=new oa(h)}else if("removeAllFromArray"in o){const h=o.removeAllFromArray.values||[];l=new la(h)}else"increment"in o?l=new jo(a,o.increment):Y();const c=qe.fromServerFormat(o.fieldPath);return new Pc(c,l)}(t,i)):[];if(e.update){e.update.name;const i=Ir(t,e.update.name),s=new Mt({mapValue:{fields:e.update.fields}});if(e.updateMask){const a=function(l){const c=l.fieldPaths||[];return new mn(c.map(h=>qe.fromServerFormat(h)))}(e.updateMask);return new fi(i,s,a,n,r)}return new ul(i,s,n,r)}if(e.delete){const i=Ir(t,e.delete);return new cl(i,n)}if(e.verify){const i=Ir(t,e.verify);return new By(i,n)}return Y()}function vV(t,e){return t&&t.length>0?(Q(e!==void 0),t.map(n=>function(i,s){let a=i.updateTime?lt(i.updateTime):lt(s);return a.isEqual(J.min())&&(a=lt(s)),new aV(a,i.transformResults||[])}(n,e))):[]}function sN(t,e){return{documents:[tN(t,e.path)]}}function aN(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=tN(t,i);const s=function(c){if(c.length!==0)return uN(Ie.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const a=function(c){if(c.length!==0)return c.map(h=>function(p){return{field:Ya(p.field),direction:TV(p.dir)}}(h))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const o=Xg(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function oN(t){let e=nN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Q(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const p=lN(f);return p instanceof Ie&&ky(p)?p.getFilters():[p]}(n.where));let a=[];n.orderBy&&(a=function(f){return f.map(p=>function(S){return new rc($a(S.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(p))}(n.orderBy));let o=null;n.limit&&(o=function(f){let p;return p=typeof f=="object"?f.value:f,Nc(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(f){const p=!!f.before,g=f.values||[];return new hs(g,p)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const p=!f.before,g=f.values||[];return new hs(g,p)}(n.endAt)),PC(e,i,a,s,o,"F",l,c)}function EV(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function lN(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=$a(n.unaryFilter.field);return fe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=$a(n.unaryFilter.field);return fe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=$a(n.unaryFilter.field);return fe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=$a(n.unaryFilter.field);return fe.create(a,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(n){return fe.create($a(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ie.create(n.compositeFilter.filters.map(r=>lN(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(t):Y()}function TV(t){return dV[t]}function IV(t){return fV[t]}function bV(t){return mV[t]}function Ya(t){return{fieldPath:t.canonicalString()}}function $a(t){return qe.fromServerFormat(t.fieldPath)}function uN(t){return t instanceof fe?function(n){if(n.op==="=="){if(jI(n.value))return{unaryFilter:{field:Ya(n.field),op:"IS_NAN"}};if(FI(n.value))return{unaryFilter:{field:Ya(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(jI(n.value))return{unaryFilter:{field:Ya(n.field),op:"IS_NOT_NAN"}};if(FI(n.value))return{unaryFilter:{field:Ya(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ya(n.field),op:IV(n.op),value:n.value}}}(t):t instanceof Ie?function(n){const r=n.getFilters().map(i=>uN(i));return r.length===1?r[0]:{compositeFilter:{op:bV(n.op),filters:r}}}(t):Y()}function AV(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function cN(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Hr{constructor(e,n,r,i,s=J.min(),a=J.min(),o=tt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=o,this.expectedCount=l}withSequenceNumber(e){return new Hr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class hN{constructor(e){this.ct=e}}function wV(t,e){let n;if(e.document)n=iN(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=G.fromSegments(e.noDocument.path),i=ca(e.noDocument.readTime);n=Le.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return Y();{const r=G.fromSegments(e.unknownDocument.path),i=ca(e.unknownDocument.version);n=Le.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new He(i[0],i[1]);return J.fromTimestamp(s)}(e.readTime)),n}function sb(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Jd(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,a){return{name:ic(s,a.key),fields:a.data.value.mapValue.fields,updateTime:zo(s,a.version.toTimestamp()),createTime:zo(s,a.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:ua(e.version)};else{if(!e.isUnknownDocument())return Y();r.unknownDocument={path:n.path.toArray(),version:ua(e.version)}}return r}function Jd(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function ua(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function ca(t){const e=new He(t.seconds,t.nanoseconds);return J.fromTimestamp(e)}function Ls(t,e){const n=(e.baseMutations||[]).map(s=>e_(t.ct,s));for(let s=0;s<e.mutations.length-1;++s){const a=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const o=e.mutations[s+1];a.updateTransforms=o.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>e_(t.ct,s)),i=He.fromMillis(e.localWriteTimeMs);return new Fy(e.batchId,i,n,r)}function ou(t){const e=ca(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?ca(t.lastLimboFreeSnapshotVersion):J.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return Q(s.documents.length===1),nn(ll(nN(s.documents[0])))}(t.query):function(s){return nn(oN(s))}(t.query),new Hr(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,tt.fromBase64String(t.resumeToken))}function dN(t,e){const n=ua(e.snapshotVersion),r=ua(e.lastLimboFreeSnapshotVersion);let i;i=Qd(e.target)?sN(t.ct,e.target):aN(t.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:aa(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Hy(t){const e=oN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Xd(e,e.limit,"L"):e}function wp(t,e){return new zy(e.largestBatchId,e_(t.ct,e.overlayMutation))}function ab(t,e){const n=e.path.lastSegment();return[t,tn(e.path.popLast()),n]}function ob(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:ua(r.readTime),documentKey:tn(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class SV{getBundleMetadata(e,n){return lb(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:ca(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return lb(e).put(function(i){return{bundleId:i.id,createTime:ua(lt(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return ub(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:Hy(s.bundledQuery),readTime:ca(s.readTime)}}(r)})}saveNamedQuery(e,n){return ub(e).put(function(i){return{name:i.name,readTime:ua(lt(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function lb(t){return Et(t,"bundles")}function ub(t){return Et(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Ff{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new Ff(e,r)}getOverlay(e,n){return ql(e).get(ab(this.userId,n)).next(r=>r?wp(this.serializer,r):null)}getOverlays(e,n){const r=yr();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,a)=>{const o=new zy(n,a);i.push(this.ht(e,o))}),M.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(a=>i.add(tn(a.getCollectionPath())));const s=[];return i.forEach(a=>{const o=IDBKeyRange.bound([this.userId,a,r],[this.userId,a,r+1],!1,!0);s.push(ql(e).j("collectionPathOverlayIndex",o))}),M.waitFor(s)}getOverlaysForCollection(e,n,r){const i=yr(),s=tn(n),a=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return ql(e).U("collectionPathOverlayIndex",a).next(o=>{for(const l of o){const c=wp(this.serializer,l);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=yr();let a;const o=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return ql(e).J({index:"collectionGroupOverlayIndex",range:o},(l,c,h)=>{const f=wp(this.serializer,c);s.size()<i||f.largestBatchId===a?(s.set(f.getKey(),f),a=f.largestBatchId):h.done()}).next(()=>s)}ht(e,n){return ql(e).put(function(i,s,a){const[o,l,c]=ab(s,a.mutation.key);return{userId:s,collectionPath:l,documentId:c,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:sc(i.ct,a.mutation)}}(this.serializer,this.userId,n))}}function ql(t){return Et(t,"documentOverlays")}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class RV{Pt(e){return Et(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(n=>{const r=n==null?void 0:n.value;return r?tt.fromUint8Array(r):tt.EMPTY_BYTE_STRING})}setSessionToken(e,n){return this.Pt(e).put({name:"sessionToken",value:n.toUint8Array()})}}/**
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
 */class Us{constructor(){}It(e,n){this.Tt(e,n),n.Et()}Tt(e,n){if("nullValue"in e)this.dt(n,5);else if("booleanValue"in e)this.dt(n,10),n.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(n,15),n.At(ze(e.integerValue));else if("doubleValue"in e){const r=ze(e.doubleValue);isNaN(r)?this.dt(n,13):(this.dt(n,15),Zu(r)?n.At(0):n.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(n,20),typeof r=="string"&&(r=oi(r)),n.Rt(`${r.seconds||""}`),n.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,n),this.ft(n);else if("bytesValue"in e)this.dt(n,30),n.gt(ls(e.bytesValue)),this.ft(n);else if("referenceValue"in e)this.yt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(n,45),n.At(r.latitude||0),n.At(r.longitude||0)}else"mapValue"in e?bC(e)?this.dt(n,Number.MAX_SAFE_INTEGER):Lf(e)?this.wt(e.mapValue,n):(this.St(e.mapValue,n),this.ft(n)):"arrayValue"in e?(this.bt(e.arrayValue,n),this.ft(n)):Y()}Vt(e,n){this.dt(n,25),this.Dt(e,n)}Dt(e,n){n.Rt(e)}St(e,n){const r=e.fields||{};this.dt(n,55);for(const i of Object.keys(r))this.Vt(i,n),this.Tt(r[i],n)}wt(e,n){var r,i;const s=e.fields||{};this.dt(n,53);const a="value",o=((i=(r=s[a].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.dt(n,15),n.At(ze(o)),this.Vt(a,n),this.Tt(s[a],n)}bt(e,n){const r=e.values||[];this.dt(n,50);for(const i of r)this.Tt(i,n)}yt(e,n){this.dt(n,37),G.fromName(e).path.forEach(r=>{this.dt(n,60),this.Dt(r,n)})}dt(e,n){e.At(n)}ft(e){e.At(2)}}Us.vt=new Us;function CV(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function cb(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const a=CV(255&r[s]);if(i+=a,a!==8)break}return i}(t);return Math.ceil(e/8)}class NV{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ft(r.value),r=n.next();this.Mt()}xt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ot(r.value),r=n.next();this.Nt()}Lt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=n.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Bt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const i=n.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){const n=this.qt(e),r=cb(n);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}Kt(e){const n=this.qt(e),r=cb(n);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const n=function(s){const a=new DataView(new ArrayBuffer(8));return a.setFloat64(0,s,!1),new Uint8Array(a.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ft(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(n)}Ot(e){const n=255&e;n===0?(this.Gt(0),this.Gt(255)):n===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class DV{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class xV{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class Gl{constructor(){this.jt=new NV,this.Ht=new DV(this.jt),this.Jt=new xV(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Bs{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Zt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Bs(this.indexId,this.documentKey,this.arrayValue,r)}}function wi(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=hb(t.arrayValue,e.arrayValue),n!==0?n:(n=hb(t.directionalValue,e.directionalValue),n!==0?n:G.comparator(t.documentKey,e.documentKey)))}function hb(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class db{constructor(e){this.Xt=new Se((n,r)=>qe.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const n of e.filters){const r=n;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(Q(e.collectionGroup===this.collectionId),this.nn)return!1;const n=qg(e);if(n!==void 0&&!this.sn(n))return!1;const r=ks(e);let i=new Set,s=0,a=0;for(;s<r.length&&this.sn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Xt.size>0){const o=this.Xt.getIterator().getNext();if(!i.has(o.field.canonicalString())){const l=r[s];if(!this.on(o,l)||!this._n(this.en[a++],l))return!1}++s}for(;s<r.length;++s){const o=r[s];if(a>=this.en.length||!this._n(this.en[a++],o))return!1}return!0}an(){if(this.nn)return null;let e=new Se(qe.comparator);const n=[];for(const r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new id(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new id(r.field,0))}for(const r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new id(r.field,r.dir==="asc"?0:1)));return new $d($d.UNKNOWN_ID,this.collectionId,n,Ju.empty())}sn(e){for(const n of this.tn)if(this.on(n,e))return!0;return!1}on(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}_n(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */function fN(t){var e,n;if(Q(t instanceof fe||t instanceof Ie),t instanceof fe){if(t instanceof OC){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>fe.create(t.field,"==",s)))||[];return Ie.create(i,"or")}return t}const r=t.filters.map(i=>fN(i));return Ie.create(r,t.op)}function OV(t){if(t.getFilters().length===0)return[];const e=r_(fN(t));return Q(mN(e)),t_(e)||n_(e)?[e]:e.getFilters()}function t_(t){return t instanceof fe}function n_(t){return t instanceof Ie&&ky(t)}function mN(t){return t_(t)||n_(t)||function(n){if(n instanceof Ie&&Yg(n)){for(const r of n.getFilters())if(!t_(r)&&!n_(r))return!1;return!0}return!1}(t)}function r_(t){if(Q(t instanceof fe||t instanceof Ie),t instanceof fe)return t;if(t.filters.length===1)return r_(t.filters[0]);const e=t.filters.map(r=>r_(r));let n=Ie.create(e,t.op);return n=Zd(n),mN(n)?n:(Q(n instanceof Ie),Q(Bo(n)),Q(n.filters.length>1),n.filters.reduce((r,i)=>Ky(r,i)))}function Ky(t,e){let n;return Q(t instanceof fe||t instanceof Ie),Q(e instanceof fe||e instanceof Ie),n=t instanceof fe?e instanceof fe?function(i,s){return Ie.create([i,s],"and")}(t,e):fb(t,e):e instanceof fe?fb(e,t):function(i,s){if(Q(i.filters.length>0&&s.filters.length>0),Bo(i)&&Bo(s))return NC(i,s.getFilters());const a=Yg(i)?i:s,o=Yg(i)?s:i,l=a.filters.map(c=>Ky(c,o));return Ie.create(l,"or")}(t,e),Zd(n)}function fb(t,e){if(Bo(e))return NC(e,t.getFilters());{const n=e.filters.map(r=>Ky(t,r));return Ie.create(n,"or")}}function Zd(t){if(Q(t instanceof fe||t instanceof Ie),t instanceof fe)return t;const e=t.getFilters();if(e.length===1)return Zd(e[0]);if(RC(t))return t;const n=e.map(i=>Zd(i)),r=[];return n.forEach(i=>{i instanceof fe?r.push(i):i instanceof Ie&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:Ie.create(r,t.op)}/**
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
 */class PV{constructor(){this.un=new Yy}addToCollectionParentIndex(e,n){return this.un.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(kn.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(kn.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class Yy{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Se(he.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Se(he.comparator)).toArray()}}/**
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
 */const Ph=new Uint8Array(0);class MV{constructor(e,n){this.databaseId=n,this.cn=new Yy,this.ln=new vs(r=>aa(r),(r,i)=>Dc(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.cn.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.cn.add(n)});const s={collectionId:r,parent:tn(i)};return mb(e).put(s)}return M.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[cC(n),""],!1,!0);return mb(e).U(i).next(s=>{for(const a of s){if(a.collectionId!==n)break;r.push(_r(a.parent))}return r})}addFieldIndex(e,n){const r=Hl(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const a=Ua(e);return s.next(o=>{a.put(ob(o,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=Hl(e),i=Ua(e),s=La(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=Hl(e),r=La(e),i=Ua(e);return n.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,n){return M.forEach(this.hn(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new db(r).an();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=La(e);let i=!0;const s=new Map;return M.forEach(this.hn(n),a=>this.Pn(e,a).next(o=>{i&&(i=!!o),s.set(a,o)})).next(()=>{if(i){let a=ae();const o=[];return M.forEach(s,(l,c)=>{F("IndexedDbIndexManager",`Using index ${function(A){return`id=${A.indexId}|cg=${A.collectionGroup}|f=${A.fields.map(D=>`${D.fieldPath}:${D.kind}`).join(",")}`}(l)} to execute ${aa(n)}`);const h=function(A,D){const U=qg(D);if(U===void 0)return null;for(const j of Wd(A,U.fieldPath))switch(j.op){case"array-contains-any":return j.value.arrayValue.values||[];case"array-contains":return[j.value]}return null}(c,l),f=function(A,D){const U=new Map;for(const j of ks(D))for(const I of Wd(A,j.fieldPath))switch(I.op){case"==":case"in":U.set(j.fieldPath.canonicalString(),I.value);break;case"not-in":case"!=":return U.set(j.fieldPath.canonicalString(),I.value),Array.from(U.values())}return null}(c,l),p=function(A,D){const U=[];let j=!0;for(const I of ks(D)){const y=I.kind===0?KI(A,I.fieldPath,A.startAt):YI(A,I.fieldPath,A.startAt);U.push(y.value),j&&(j=y.inclusive)}return new hs(U,j)}(c,l),g=function(A,D){const U=[];let j=!0;for(const I of ks(D)){const y=I.kind===0?YI(A,I.fieldPath,A.endAt):KI(A,I.fieldPath,A.endAt);U.push(y.value),j&&(j=y.inclusive)}return new hs(U,j)}(c,l),S=this.In(l,c,p),N=this.In(l,c,g),P=this.Tn(l,c,f),T=this.En(l.indexId,h,S,p.inclusive,N,g.inclusive,P);return M.forEach(T,v=>r.G(v,n.limit).next(A=>{A.forEach(D=>{const U=G.fromSegments(D.documentKey);a.has(U)||(a=a.add(U),o.push(U))})}))}).next(()=>o)}return M.resolve(null)})}hn(e){let n=this.ln.get(e);return n||(e.filters.length===0?n=[e]:n=OV(Ie.create(e.filters,"and")).map(r=>Qg(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,n),n)}En(e,n,r,i,s,a,o){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),c=l/(n!=null?n.length:1),h=[];for(let f=0;f<l;++f){const p=n?this.dn(n[f/c]):Ph,g=this.An(e,p,r[f%c],i),S=this.Rn(e,p,s[f%c],a),N=o.map(P=>this.An(e,p,P,!0));h.push(...this.createRange(g,S,N))}return h}An(e,n,r,i){const s=new Bs(e,G.empty(),n,r);return i?s:s.Zt()}Rn(e,n,r,i){const s=new Bs(e,G.empty(),n,r);return i?s.Zt():s}Pn(e,n){const r=new db(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let a=null;for(const o of s)r.rn(o)&&(!a||o.fields.length>a.fields.length)&&(a=o);return a})}getIndexType(e,n){let r=2;const i=this.hn(n);return M.forEach(i,s=>this.Pn(e,s).next(a=>{a?r!==0&&a.fields.length<function(l){let c=new Se(qe.comparator),h=!1;for(const f of l.filters)for(const p of f.getFlattenedFilters())p.field.isKeyField()||(p.op==="array-contains"||p.op==="array-contains-any"?h=!0:c=c.add(p.field));for(const f of l.orderBy)f.field.isKeyField()||(c=c.add(f.field));return c.size+(h?1:0)}(s)&&(r=1):r=0})).next(()=>function(a){return a.limit!==null}(n)&&i.length>1&&r===2?1:r)}Vn(e,n){const r=new Gl;for(const i of ks(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const a=r.Yt(i.kind);Us.vt.It(s,a)}return r.zt()}dn(e){const n=new Gl;return Us.vt.It(e,n.Yt(0)),n.zt()}mn(e,n){const r=new Gl;return Us.vt.It(sa(this.databaseId,n),r.Yt(function(s){const a=ks(s);return a.length===0?0:a[a.length-1].kind}(e))),r.zt()}Tn(e,n,r){if(r===null)return[];let i=[];i.push(new Gl);let s=0;for(const a of ks(e)){const o=r[s++];for(const l of i)if(this.fn(n,a.fieldPath)&&nc(o))i=this.gn(i,a,o);else{const c=l.Yt(a.kind);Us.vt.It(o,c)}}return this.pn(i)}In(e,n,r){return this.Tn(e,n,r.position)}pn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].zt();return n}gn(e,n,r){const i=[...e],s=[];for(const a of r.arrayValue.values||[])for(const o of i){const l=new Gl;l.seed(o.zt()),Us.vt.It(a,l.Yt(n.kind)),s.push(l)}return s}fn(e,n){return!!e.filters.find(r=>r instanceof fe&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Hl(e),i=Ua(e);return(n?r.U("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.U()).next(s=>{const a=[];return M.forEach(s,o=>i.get([o.indexId,this.uid]).next(l=>{a.push(function(h,f){const p=f?new Ju(f.sequenceNumber,new kn(ca(f.readTime),new G(_r(f.documentKey)),f.largestBatchId)):Ju.empty(),g=h.fields.map(([S,N])=>new id(qe.fromServerFormat(S),N));return new $d(h.indexId,h.collectionGroup,g,p)}(o,l))})).next(()=>a)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:re(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=Hl(e),s=Ua(e);return this.yn(e).next(a=>i.U("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(o=>M.forEach(o,l=>s.put(ob(l.indexId,this.uid,a,r)))))}updateIndexEntries(e,n){const r=new Map;return M.forEach(n,(i,s)=>{const a=r.get(i.collectionGroup);return(a?M.resolve(a):this.getFieldIndexes(e,i.collectionGroup)).next(o=>(r.set(i.collectionGroup,o),M.forEach(o,l=>this.wn(e,i,l).next(c=>{const h=this.Sn(s,l);return c.isEqual(h)?M.resolve():this.bn(e,s,l,c,h)}))))})}Dn(e,n,r,i){return La(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(r,n.key),documentKey:n.key.path.toArray()})}vn(e,n,r,i){return La(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(r,n.key),n.key.path.toArray()])}wn(e,n,r){const i=La(e);let s=new Se(wi);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,n)])},(a,o)=>{s=s.add(new Bs(r.indexId,n,o.arrayValue,o.directionalValue))}).next(()=>s)}Sn(e,n){let r=new Se(wi);const i=this.Vn(n,e);if(i==null)return r;const s=qg(n);if(s!=null){const a=e.data.field(s.fieldPath);if(nc(a))for(const o of a.arrayValue.values||[])r=r.add(new Bs(n.indexId,e.key,this.dn(o),i))}else r=r.add(new Bs(n.indexId,e.key,Ph,i));return r}bn(e,n,r,i,s){F("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const a=[];return function(l,c,h,f,p){const g=l.getIterator(),S=c.getIterator();let N=Va(g),P=Va(S);for(;N||P;){let T=!1,v=!1;if(N&&P){const A=h(N,P);A<0?v=!0:A>0&&(T=!0)}else N!=null?v=!0:T=!0;T?(f(P),P=Va(S)):v?(p(N),N=Va(g)):(N=Va(g),P=Va(S))}}(i,s,wi,o=>{a.push(this.Dn(e,n,r,o))},o=>{a.push(this.vn(e,n,r,o))}),M.waitFor(a)}yn(e){let n=1;return Ua(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((a,o)=>wi(a,o)).filter((a,o,l)=>!o||wi(a,l[o-1])!==0);const i=[];i.push(e);for(const a of r){const o=wi(a,e),l=wi(a,n);if(o===0)i[0]=e.Zt();else if(o>0&&l<0)i.push(a),i.push(a.Zt());else if(l>0)break}i.push(n);const s=[];for(let a=0;a<i.length;a+=2){if(this.Cn(i[a],i[a+1]))return[];const o=[i[a].indexId,this.uid,i[a].arrayValue,i[a].directionalValue,Ph,[]],l=[i[a+1].indexId,this.uid,i[a+1].arrayValue,i[a+1].directionalValue,Ph,[]];s.push(IDBKeyRange.bound(o,l))}return s}Cn(e,n){return wi(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(pb)}getMinOffset(e,n){return M.mapArray(this.hn(n),r=>this.Pn(e,r).next(i=>i||Y())).next(pb)}}function mb(t){return Et(t,"collectionParents")}function La(t){return Et(t,"indexEntries")}function Hl(t){return Et(t,"indexConfiguration")}function Ua(t){return Et(t,"indexState")}function pb(t){Q(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;xy(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new kn(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const gb={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class hn{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new hn(e,hn.DEFAULT_COLLECTION_PERCENTILE,hn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function pN(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],a=IDBKeyRange.only(n.batchId);let o=0;const l=r.J({range:a},(h,f,p)=>(o++,p.delete()));s.push(l.next(()=>{Q(o===1)}));const c=[];for(const h of n.mutations){const f=_C(e,h.key.path,n.batchId);s.push(i.delete(f)),c.push(h.key)}return M.waitFor(s).next(()=>c)}function ef(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw Y();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */hn.DEFAULT_COLLECTION_PERCENTILE=10,hn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,hn.DEFAULT=new hn(41943040,hn.DEFAULT_COLLECTION_PERCENTILE,hn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),hn.DISABLED=new hn(-1,0,0);class jf{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Fn={}}static lt(e,n,r,i){Q(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new jf(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Si(e).J({index:"userMutationsIndex",range:r},(i,s,a)=>{n=!1,a.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=Qa(e),a=Si(e);return a.add({}).next(o=>{Q(typeof o=="number");const l=new Fy(o,n,r,i),c=function(g,S,N){const P=N.baseMutations.map(v=>sc(g.ct,v)),T=N.mutations.map(v=>sc(g.ct,v));return{userId:S,batchId:N.batchId,localWriteTimeMs:N.localWriteTime.toMillis(),baseMutations:P,mutations:T}}(this.serializer,this.userId,l),h=[];let f=new Se((p,g)=>re(p.canonicalString(),g.canonicalString()));for(const p of i){const g=_C(this.userId,p.key.path,o);f=f.add(p.key.path.popLast()),h.push(a.put(c)),h.push(s.put(g,Ek))}return f.forEach(p=>{h.push(this.indexManager.addToCollectionParentIndex(e,p))}),e.addOnCommittedListener(()=>{this.Fn[o]=l.keys()}),M.waitFor(h).next(()=>l)})}lookupMutationBatch(e,n){return Si(e).get(n).next(r=>r?(Q(r.userId===this.userId),Ls(this.serializer,r)):null)}Mn(e,n){return this.Fn[n]?M.resolve(this.Fn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Fn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Si(e).J({index:"userMutationsIndex",range:i},(a,o,l)=>{o.userId===this.userId&&(Q(o.batchId>=r),s=Ls(this.serializer,o)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Si(e).J({index:"userMutationsIndex",range:n,reverse:!0},(i,s,a)=>{r=s.batchId,a.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Si(e).U("userMutationsIndex",n).next(r=>r.map(i=>Ls(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=sd(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return Qa(e).J({range:i},(a,o,l)=>{const[c,h,f]=a,p=_r(h);if(c===this.userId&&n.path.isEqual(p))return Si(e).get(f).next(g=>{if(!g)throw Y();Q(g.userId===this.userId),s.push(Ls(this.serializer,g))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Se(re);const i=[];return n.forEach(s=>{const a=sd(this.userId,s.path),o=IDBKeyRange.lowerBound(a),l=Qa(e).J({range:o},(c,h,f)=>{const[p,g,S]=c,N=_r(g);p===this.userId&&s.path.isEqual(N)?r=r.add(S):f.done()});i.push(l)}),M.waitFor(i).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=sd(this.userId,r),a=IDBKeyRange.lowerBound(s);let o=new Se(re);return Qa(e).J({range:a},(l,c,h)=>{const[f,p,g]=l,S=_r(p);f===this.userId&&r.isPrefixOf(S)?S.length===i&&(o=o.add(g)):h.done()}).next(()=>this.xn(e,o))}xn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(Si(e).get(s).next(a=>{if(a===null)throw Y();Q(a.userId===this.userId),r.push(Ls(this.serializer,a))}))}),M.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return pN(e._e,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.On(n.batchId)}),M.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return M.resolve();const r=IDBKeyRange.lowerBound(function(a){return[a]}(this.userId)),i=[];return Qa(e).J({range:r},(s,a,o)=>{if(s[0]===this.userId){const l=_r(s[1]);i.push(l)}else o.done()}).next(()=>{Q(i.length===0)})})}containsKey(e,n){return gN(e,this.userId,n)}Nn(e){return _N(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function gN(t,e,n){const r=sd(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let a=!1;return Qa(t).J({range:s,H:!0},(o,l,c)=>{const[h,f,p]=o;h===e&&f===i&&(a=!0),c.done()}).next(()=>a)}function Si(t){return Et(t,"mutations")}function Qa(t){return Et(t,"documentMutations")}function _N(t){return Et(t,"mutationQueues")}/**
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
 */class ha{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ha(0)}static kn(){return new ha(-1)}}/**
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
 */class kV{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.qn(e).next(n=>{const r=new ha(n.highestTargetId);return n.highestTargetId=r.next(),this.Qn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(n=>J.fromTimestamp(new He(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.qn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.Qn(e,i)))}addTargetData(e,n){return this.Kn(e,n).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(n,r),this.Qn(e,r))))}updateTargetData(e,n){return this.Kn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>Ba(e).delete(n.targetId)).next(()=>this.qn(e)).next(r=>(Q(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return Ba(e).J((a,o)=>{const l=ou(o);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>M.waitFor(s)).next(()=>i)}forEachTarget(e,n){return Ba(e).J((r,i)=>{const s=ou(i);n(s)})}qn(e){return _b(e).get("targetGlobalKey").next(n=>(Q(n!==null),n))}Qn(e,n){return _b(e).put("targetGlobalKey",n)}Kn(e,n){return Ba(e).put(dN(this.serializer,n))}$n(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=aa(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Ba(e).J({range:i,index:"queryTargetsIndex"},(a,o,l)=>{const c=ou(o);Dc(n,c.target)&&(s=c,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=ki(e);return n.forEach(a=>{const o=tn(a.path);i.push(s.put({targetId:r,path:o})),i.push(this.referenceDelegate.addReference(e,r,a))}),M.waitFor(i)}removeMatchingKeys(e,n,r){const i=ki(e);return M.forEach(n,s=>{const a=tn(s.path);return M.waitFor([i.delete([r,a]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=ki(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=ki(e);let s=ae();return i.J({range:r,H:!0},(a,o,l)=>{const c=_r(a[1]),h=new G(c);s=s.add(h)}).next(()=>s)}containsKey(e,n){const r=tn(n.path),i=IDBKeyRange.bound([r],[cC(r)],!1,!0);let s=0;return ki(e).J({index:"documentTargetsIndex",H:!0,range:i},([a,o],l,c)=>{a!==0&&(s++,c.done())}).next(()=>s>0)}ot(e,n){return Ba(e).get(n).next(r=>r?ou(r):null)}}function Ba(t){return Et(t,"targets")}function _b(t){return Et(t,"targetGlobal")}function ki(t){return Et(t,"targetDocuments")}/**
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
 */function yb([t,e],[n,r]){const i=re(t,n);return i===0?re(e,r):i}class VV{constructor(e){this.Un=e,this.buffer=new Se(yb),this.Wn=0}Gn(){return++this.Wn}zn(e){const n=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();yb(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class LV{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){F("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ys(n)?F("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await _s(n)}await this.Hn(3e5)})}}class UV{constructor(e,n){this.Jn=e,this.params=n}calculateTargetCount(e,n){return this.Jn.Yn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(fn.oe);const r=new VV(n);return this.Jn.forEachTarget(e,i=>r.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>r.zn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(F("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(gb)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(F("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),gb):this.Xn(e,n))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,n){let r,i,s,a,o,l,c;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(F("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,a=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,o=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),Ha()<=ue.DEBUG&&F("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-h}ms
	Determined least recently used ${i} in `+(o-a)+`ms
	Removed ${s} targets in `+(l-o)+`ms
	Removed ${f} documents in `+(c-l)+`ms
Total Duration: ${c-h}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function BV(t,e){return new UV(t,e)}/**
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
 */class FV{constructor(e,n){this.db=e,this.garbageCollector=BV(this,n)}Yn(e){const n=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}er(e){let n=0;return this.Zn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Zn(e,n){return this.tr(e,(r,i)=>n(i))}addReference(e,n,r){return Mh(e,r)}removeReference(e,n,r){return Mh(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Mh(e,n)}nr(e,n){return function(i,s){let a=!1;return _N(i).Y(o=>gN(i,o,s).next(l=>(l&&(a=!0),M.resolve(!l)))).next(()=>a)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.tr(e,(a,o)=>{if(o<=n){const l=this.nr(e,a).next(c=>{if(!c)return s++,r.getEntry(e,a).next(()=>(r.removeEntry(a,J.min()),ki(e).delete(function(f){return[0,tn(f.path)]}(a))))});i.push(l)}}).next(()=>M.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Mh(e,n)}tr(e,n){const r=ki(e);let i,s=fn.oe;return r.J({index:"documentTargetsIndex"},([a,o],{path:l,sequenceNumber:c})=>{a===0?(s!==fn.oe&&n(new G(_r(i)),s),s=c,i=l):s=fn.oe}).next(()=>{s!==fn.oe&&n(new G(_r(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Mh(t,e){return ki(t).put(function(r,i){return{targetId:0,path:tn(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
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
 */class yN{constructor(){this.changes=new vs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Le.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class jV{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Ns(e).put(r)}removeEntry(e,n,r){return Ns(e).delete(function(s,a){const o=s.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],Jd(a),o[o.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.rr(e,r)))}getEntry(e,n){let r=Le.newInvalidDocument(n);return Ns(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Kl(n))},(i,s)=>{r=this.ir(n,s)}).next(()=>r)}sr(e,n){let r={size:0,document:Le.newInvalidDocument(n)};return Ns(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Kl(n))},(i,s)=>{r={document:this.ir(n,s),size:ef(s)}}).next(()=>r)}getEntries(e,n){let r=pn();return this._r(e,n,(i,s)=>{const a=this.ir(i,s);r=r.insert(i,a)}).next(()=>r)}ar(e,n){let r=pn(),i=new Pe(G.comparator);return this._r(e,n,(s,a)=>{const o=this.ir(s,a);r=r.insert(s,o),i=i.insert(s,ef(a))}).next(()=>({documents:r,ur:i}))}_r(e,n,r){if(n.isEmpty())return M.resolve();let i=new Se(Tb);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(Kl(i.first()),Kl(i.last())),a=i.getIterator();let o=a.getNext();return Ns(e).J({index:"documentKeyIndex",range:s},(l,c,h)=>{const f=G.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;o&&Tb(o,f)<0;)r(o,null),o=a.getNext();o&&o.isEqual(f)&&(r(o,c),o=a.hasNext()?a.getNext():null),o?h.$(Kl(o)):h.done()}).next(()=>{for(;o;)r(o,null),o=a.hasNext()?a.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const a=n.path,o=[a.popLast().toArray(),a.lastSegment(),Jd(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[a.popLast().toArray(),a.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Ns(e).U(IDBKeyRange.bound(o,l,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let h=pn();for(const f of c){const p=this.ir(G.fromSegments(f.prefixPath.concat(f.collectionGroup,f.documentId)),f);p.isFoundDocument()&&(Oc(n,p)||i.has(p.key))&&(h=h.insert(p.key,p))}return h})}getAllFromCollectionGroup(e,n,r,i){let s=pn();const a=Eb(n,r),o=Eb(n,kn.max());return Ns(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(a,o,!0)},(l,c,h)=>{const f=this.ir(G.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(f.key,f),s.size===i&&h.done()}).next(()=>s)}newChangeBuffer(e){return new zV(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return vb(e).get("remoteDocumentGlobalKey").next(n=>(Q(!!n),n))}rr(e,n){return vb(e).put("remoteDocumentGlobalKey",n)}ir(e,n){if(n){const r=wV(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(J.min())))return r}return Le.newInvalidDocument(e)}}function vN(t){return new jV(t)}class zV extends yN{constructor(e,n){super(),this.cr=e,this.trackRemovals=n,this.lr=new vs(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new Se((s,a)=>re(s.canonicalString(),a.canonicalString()));return this.changes.forEach((s,a)=>{const o=this.lr.get(s);if(n.push(this.cr.removeEntry(e,s,o.readTime)),a.isValidDocument()){const l=sb(this.cr.serializer,a);i=i.add(s.path.popLast());const c=ef(l);r+=c-o.size,n.push(this.cr.addEntry(e,s,l))}else if(r-=o.size,this.trackRemovals){const l=sb(this.cr.serializer,a.convertToNoDocument(J.min()));n.push(this.cr.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this.cr.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.cr.updateMetadata(e,r)),M.waitFor(n)}getFromCache(e,n){return this.cr.sr(e,n).next(r=>(this.lr.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.cr.ar(e,n).next(({documents:r,ur:i})=>(i.forEach((s,a)=>{this.lr.set(s,{size:a,readTime:r.get(s).readTime})}),r))}}function vb(t){return Et(t,"remoteDocumentGlobal")}function Ns(t){return Et(t,"remoteDocumentsV14")}function Kl(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Eb(t,e){const n=e.documentKey.path.toArray();return[t,Jd(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Tb(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=re(n[s],r[s]),i)return i;return i=re(n.length,r.length),i||(i=re(n[n.length-2],r[r.length-2]),i||re(n[n.length-1],r[r.length-1]))}/**
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
 *//**
 * @license
 * Copyright 2022 Google LLC
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
 */class qV{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class EN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Su(r.mutation,i,mn.empty(),He.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ae()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ae()){const i=yr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let a=su();return s.forEach((o,l)=>{a=a.insert(o,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=yr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ae()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,o)=>{n.set(a,o)})})}computeViews(e,n,r,i){let s=pn();const a=wu(),o=function(){return wu()}();return n.forEach((l,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof fi)?s=s.insert(c.key,c):h!==void 0?(a.set(c.key,h.mutation.getFieldMask()),Su(h.mutation,c,h.mutation.getFieldMask(),He.now())):a.set(c.key,mn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,h)=>a.set(c,h)),n.forEach((c,h)=>{var f;return o.set(c,new qV(h,(f=a.get(c))!==null&&f!==void 0?f:null))}),o))}recalculateAndSaveOverlays(e,n){const r=wu();let i=new Pe((a,o)=>a-o),s=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const o of a)o.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let h=r.get(l)||mn.empty();h=o.applyToLocalView(c,h),r.set(l,h);const f=(i.get(o.batchId)||ae()).add(l);i=i.insert(o.batchId,f)})}).next(()=>{const a=[],o=i.getReverseIterator();for(;o.hasNext();){const l=o.getNext(),c=l.key,h=l.value,f=BC();h.forEach(p=>{if(!s.has(p)){const g=KC(n.get(p),r.get(p));g!==null&&f.set(p,g),s=s.add(p)}}),a.push(this.documentOverlayCache.saveOverlays(e,c,f))}return M.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(a){return G.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Vy(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(yr());let o=-1,l=s;return a.next(c=>M.forEach(c,(h,f)=>(o<f.largestBatchId&&(o=f.largestBatchId),s.get(h)?M.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{l=l.insert(h,p)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,ae())).next(h=>({batchId:o,changes:UC(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let i=su();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let a=su();return this.indexManager.getCollectionParents(e,s).next(o=>M.forEach(o,l=>{const c=function(f,p){return new di(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((f,p)=>{a=a.insert(f,p)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(a=>{s.forEach((l,c)=>{const h=c.getKey();a.get(h)===null&&(a=a.insert(h,Le.newInvalidDocument(h)))});let o=su();return a.forEach((l,c)=>{const h=s.get(l);h!==void 0&&Su(h.mutation,c,mn.empty(),He.now()),Oc(n,c)&&(o=o.insert(l,c))}),o})}}/**
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
 */class GV{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return M.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:lt(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:Hy(i.bundledQuery),readTime:lt(i.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class HV{constructor(){this.overlays=new Pe(G.comparator),this.Ir=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=yr();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=yr(),s=n.length+1,a=new G(n.child("")),o=this.overlays.getIteratorFrom(a);for(;o.hasNext();){const l=o.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Pe((c,h)=>c-h);const a=this.overlays.getIterator();for(;a.hasNext();){const c=a.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=yr(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const o=yr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>o.set(c,h)),!(o.size()>=i)););return M.resolve(o)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new zy(n,r));let s=this.Ir.get(n);s===void 0&&(s=ae(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class KV{constructor(){this.sessionToken=tt.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class $y{constructor(){this.Tr=new Se(bt.Er),this.dr=new Se(bt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new bt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new bt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new G(new he([])),r=new bt(n,e),i=new bt(n,e+1),s=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),s.push(a.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new G(new he([])),r=new bt(n,e),i=new bt(n,e+1);let s=ae();return this.dr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const n=new bt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class bt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return G.comparator(e.key,n.key)||re(e.wr,n.wr)}static Ar(e,n){return re(e.wr,n.wr)||G.comparator(e.key,n.key)}}/**
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
 */class YV{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Se(bt.Er)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Fy(s,n,r,i);this.mutationQueue.push(a);for(const o of i)this.br=this.br.add(new bt(o.key,s)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return M.resolve(a)}lookupMutationBatch(e,n){return M.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new bt(n,0),i=new bt(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],a=>{const o=this.Dr(a.wr);s.push(o)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Se(re);return n.forEach(i=>{const s=new bt(i,0),a=new bt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,a],o=>{r=r.add(o.wr)})}),M.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const a=new bt(new G(s),0);let o=new Se(re);return this.br.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(o=o.add(l.wr)),!0)},a),M.resolve(this.Cr(o))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Q(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return M.forEach(n.mutations,i=>{const s=new bt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new bt(n,0),i=this.br.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class $V{constructor(e){this.Mr=e,this.docs=function(){return new Pe(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,a=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():Le.newInvalidDocument(n))}getEntries(e,n){let r=pn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Le.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=pn();const a=n.path,o=new G(a.child("")),l=this.docs.getIteratorFrom(o);for(;l.hasNext();){const{key:c,value:{document:h}}=l.getNext();if(!a.isPrefixOf(c.path))break;c.path.length>a.length+1||xy(dC(h),r)<=0||(i.has(h.key)||Oc(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Y()}Or(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new QV(this)}getSize(e){return M.resolve(this.size)}}class QV extends yN{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class WV{constructor(e){this.persistence=e,this.Nr=new vs(n=>aa(n),Dc),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Lr=0,this.Br=new $y,this.targetCount=0,this.kr=ha.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),M.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ha(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Kn(n),M.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((a,o)=>{o.sequenceNumber<=n&&r.get(o.targetId)===null&&(this.Nr.delete(a),s.push(this.removeMatchingKeysForTargetId(e,o.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.Br.containsKey(n))}}/**
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
 */class TN{constructor(e,n){this.qr={},this.overlays={},this.Qr=new fn(0),this.Kr=!1,this.Kr=!0,this.$r=new KV,this.referenceDelegate=e(this),this.Ur=new WV(this),this.indexManager=new PV,this.remoteDocumentCache=function(i){return new $V(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new hN(n),this.Gr=new GV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new HV,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new YV(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){F("MemoryPersistence","Starting transaction:",e);const i=new XV(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return M.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class XV extends mC{constructor(e){super(),this.currentSequenceNumber=e}}class zf{constructor(e){this.persistence=e,this.Jr=new $y,this.Yr=null}static Zr(e){return new zf(e)}get Xr(){if(this.Yr)return this.Yr;throw Y()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),M.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Xr,r=>{const i=G.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return M.or([()=>M.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class JV{constructor(e){this.serializer=e}O(e,n,r,i){const s=new kf("createOrUpgrade",n);r<1&&i>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",kI,{unique:!0}),l.createObjectStore("documentMutations")}(e),Ib(e),function(l){l.createObjectStore("remoteDocuments")}(e));let a=M.resolve();return r<3&&i>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),Ib(e)),a=a.next(()=>function(l){const c=l.store("targetGlobal"),h={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:J.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",h)}(s))),r<4&&i>=4&&(r!==0&&(a=a.next(()=>function(l,c){return c.store("mutations").U().next(h=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",kI,{unique:!0});const f=c.store("mutations"),p=h.map(g=>f.put(g));return M.waitFor(p)})}(e,s))),a=a.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(a=a.next(()=>this.ni(s))),r<6&&i>=6&&(a=a.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ri(s)))),r<7&&i>=7&&(a=a.next(()=>this.ii(s))),r<8&&i>=8&&(a=a.next(()=>this.si(e,s))),r<9&&i>=9&&(a=a.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(a=a.next(()=>this.oi(s))),r<11&&i>=11&&(a=a.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(a=a.next(()=>{(function(l){const c=l.createObjectStore("documentOverlays",{keyPath:Ok});c.createIndex("collectionPathOverlayIndex",Pk,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",Mk,{unique:!1})})(e)})),r<13&&i>=13&&(a=a.next(()=>function(l){const c=l.createObjectStore("remoteDocumentsV14",{keyPath:Tk});c.createIndex("documentKeyIndex",Ik),c.createIndex("collectionGroupIndex",bk)}(e)).next(()=>this._i(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(a=a.next(()=>this.ai(e,s))),r<15&&i>=15&&(a=a.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:Ck}).createIndex("sequenceNumberIndex",Nk,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:Dk}).createIndex("documentKeyIndex",xk,{unique:!1})}(e))),r<16&&i>=16&&(a=a.next(()=>{n.objectStore("indexState").clear()}).next(()=>{n.objectStore("indexEntries").clear()})),r<17&&i>=17&&(a=a.next(()=>{(function(l){l.createObjectStore("globals",{keyPath:"name"})})(e)})),a}ri(e){let n=0;return e.store("remoteDocuments").J((r,i)=>{n+=ef(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.U().next(i=>M.forEach(i,s=>{const a=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",a).next(o=>M.forEach(o,l=>{Q(l.userId===s.userId);const c=Ls(this.serializer,l);return pN(e,s.userId,c).next(()=>{})}))}))}ii(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.J((a,o)=>{const l=new he(a),c=function(f){return[0,tn(f)]}(l);s.push(n.get(c).next(h=>h?M.resolve():(f=>n.put({targetId:0,path:tn(f),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>M.waitFor(s))})}si(e,n){e.createObjectStore("collectionParents",{keyPath:Rk});const r=n.store("collectionParents"),i=new Yy,s=a=>{if(i.add(a)){const o=a.lastSegment(),l=a.popLast();return r.put({collectionId:o,parent:tn(l)})}};return n.store("remoteDocuments").J({H:!0},(a,o)=>{const l=new he(a);return s(l.popLast())}).next(()=>n.store("documentMutations").J({H:!0},([a,o,l],c)=>{const h=_r(o);return s(h.popLast())}))}oi(e){const n=e.store("targets");return n.J((r,i)=>{const s=ou(i),a=dN(this.serializer,s);return n.put(a)})}_i(e,n){const r=n.store("remoteDocuments"),i=[];return r.J((s,a)=>{const o=n.store("remoteDocumentsV14"),l=function(f){return f.document?new G(he.fromString(f.document.name).popFirst(5)):f.noDocument?G.fromSegments(f.noDocument.path):f.unknownDocument?G.fromSegments(f.unknownDocument.path):Y()}(a).path.toArray(),c={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:a.readTime||[0,0],unknownDocument:a.unknownDocument,noDocument:a.noDocument,document:a.document,hasCommittedMutations:!!a.hasCommittedMutations};i.push(o.put(c))}).next(()=>M.waitFor(i))}ai(e,n){const r=n.store("mutations"),i=vN(this.serializer),s=new TN(zf.Zr,this.serializer.ct);return r.U().next(a=>{const o=new Map;return a.forEach(l=>{var c;let h=(c=o.get(l.userId))!==null&&c!==void 0?c:ae();Ls(this.serializer,l).keys().forEach(f=>h=h.add(f)),o.set(l.userId,h)}),M.forEach(o,(l,c)=>{const h=new wt(c),f=Ff.lt(this.serializer,h),p=s.getIndexManager(h),g=jf.lt(h,this.serializer,p,s.referenceDelegate);return new EN(i,g,f,p).recalculateAndSaveOverlaysForDocumentKeys(new Gg(n,fn.oe),l).next()})})}}function Ib(t){t.createObjectStore("targetDocuments",{keyPath:wk}).createIndex("documentTargetsIndex",Sk,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Ak,{unique:!0}),t.createObjectStore("targetGlobal")}const Sp="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Qy{constructor(e,n,r,i,s,a,o,l,c,h,f=17){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.ui=s,this.window=a,this.document=o,this.ci=c,this.li=h,this.hi=f,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=p=>Promise.resolve(),!Qy.D())throw new B(k.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new FV(this,i),this.Ai=n+"main",this.serializer=new hN(l),this.Ri=new Tr(this.Ai,this.hi,new JV(this.serializer)),this.$r=new RV,this.Ur=new kV(this.referenceDelegate,this.serializer),this.remoteDocumentCache=vN(this.serializer),this.Gr=new SV,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,h===!1&&at("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new B(k.FAILED_PRECONDITION,Sp);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new fn(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>kh(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(n=>{n||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(n=>this.isPrimary&&!n?this.bi(e).next(()=>!1):!!n&&this.Di(e).next(()=>!0))).catch(e=>{if(ys(e))return F("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return F("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return Yl(e).get("owner").next(n=>M.resolve(this.vi(n)))}Ci(e){return kh(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=Et(n,"clientMetadata");return r.U().next(i=>{const s=this.xi(i,18e5),a=i.filter(o=>s.indexOf(o)===-1);return M.forEach(a,o=>r.delete(o.clientId)).next(()=>a)})}).catch(()=>[]);if(this.Vi)for(const n of e)this.Vi.removeItem(this.Oi(n.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?M.resolve(!0):Yl(e).get("owner").next(n=>{if(n!==null&&this.Mi(n.leaseTimestampMs,5e3)&&!this.Ni(n.ownerId)){if(this.vi(n)&&this.networkEnabled)return!0;if(!this.vi(n)){if(!n.allowTabSynchronization)throw new B(k.FAILED_PRECONDITION,Sp);return!1}}return!(!this.networkEnabled||!this.inForeground)||kh(e).U().next(r=>this.xi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,a=!this.inForeground&&i.inForeground,o=this.networkEnabled===i.networkEnabled;if(s||a&&o)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&F("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Gg(e,fn.oe);return this.bi(n).next(()=>this.Ci(n))}),this.Ri.close(),this.qi()}xi(e,n){return e.filter(r=>this.Mi(r.updateTimeMs,n)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>kh(e).U().next(n=>this.xi(n,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,n){return jf.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new MV(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Ff.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,n,r){F("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(l){return l===17?Lk:l===16?Vk:l===15?Py:l===14?EC:l===13?vC:l===12?kk:l===11?yC:void Y()}(this.hi);let a;return this.Ri.runTransaction(e,i,s,o=>(a=new Gg(o,this.Qr?this.Qr.next():fn.oe),n==="readwrite-primary"?this.wi(a).next(l=>!!l||this.Si(a)).next(l=>{if(!l)throw at(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new B(k.FAILED_PRECONDITION,fC);return r(a)}).next(l=>this.Di(a).next(()=>l)):this.Ki(a).next(()=>r(a)))).then(o=>(a.raiseOnCommittedEvent(),o))}Ki(e){return Yl(e).get("owner").next(n=>{if(n!==null&&this.Mi(n.leaseTimestampMs,5e3)&&!this.Ni(n.ownerId)&&!this.vi(n)&&!(this.li||this.allowTabSynchronization&&n.allowTabSynchronization))throw new B(k.FAILED_PRECONDITION,Sp)})}Di(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Yl(e).put("owner",n)}static D(){return Tr.D()}bi(e){const n=Yl(e);return n.get("owner").next(r=>this.vi(r)?(F("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):M.resolve())}Mi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(at(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const n=/(?:Version|Mobile)\/1[456]/;jR()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var n;try{const r=((n=this.Vi)===null||n===void 0?void 0:n.getItem(this.Oi(e)))!==null;return F("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return at("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){at("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Yl(t){return Et(t,"owner")}function kh(t){return Et(t,"clientMetadata")}function Wy(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class Xy{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ae(),i=ae();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Xy(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class ZV{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class IN{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return jR()?8:pC($e())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new ZV;return this.Xi(e,n,a).next(o=>{if(s.result=o,this.zi)return this.es(e,n,a,o.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Ha()<=ue.DEBUG&&F("QueryEngine","SDK will not create cache indexes for query:",Ka(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),M.resolve()):(Ha()<=ue.DEBUG&&F("QueryEngine","Query:",Ka(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Ha()<=ue.DEBUG&&F("QueryEngine","The SDK decides to create cache indexes for query:",Ka(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nn(n))):M.resolve())}Yi(e,n){if($I(n))return M.resolve(null);let r=nn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Xd(n,null,"F"),r=nn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=ae(...s);return this.Ji.getDocuments(e,a).next(o=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.ts(n,o);return this.ns(n,c,a,l.readTime)?this.Yi(e,Xd(n,null,"F")):this.rs(e,c,n,l)}))})))}Zi(e,n,r,i){return $I(n)||i.isEqual(J.min())?M.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const a=this.ts(n,s);return this.ns(n,a,r,i)?M.resolve(null):(Ha()<=ue.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ka(n)),this.rs(e,a,n,hC(i,-1)).next(o=>o))})}ts(e,n){let r=new Se(VC(e));return n.forEach((i,s)=>{Oc(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Ha()<=ue.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",Ka(n)),this.Ji.getDocumentsMatchingQuery(e,n,kn.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
 */class eL{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Pe(re),this._s=new vs(s=>aa(s),Dc),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new EN(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function bN(t,e,n,r){return new eL(t,e,n,r)}async function AN(t,e){const n=H(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],o=[];let l=ae();for(const c of i){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of s){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(c=>({hs:c,removedBatchIds:a,addedBatchIds:o}))})})}function tL(t,e){const n=H(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(o,l,c,h){const f=c.batch,p=f.keys();let g=M.resolve();return p.forEach(S=>{g=g.next(()=>h.getEntry(l,S)).next(N=>{const P=c.docVersions.get(S);Q(P!==null),N.version.compareTo(P)<0&&(f.applyToRemoteDocument(N,c),N.isValidDocument()&&(N.setReadTime(c.commitVersion),h.addEntry(N)))})}),g.next(()=>o.mutationQueue.removeMutationBatch(l,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let l=ae();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(l=l.add(o.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function wN(t){const e=H(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function nL(t,e){const n=H(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const o=[];e.targetChanges.forEach((h,f)=>{const p=i.get(f);if(!p)return;o.push(n.Ur.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(s,h.addedDocuments,f)));let g=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?g=g.withResumeToken(tt.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,r)),i=i.insert(f,g),function(N,P,T){return N.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(p,g,h)&&o.push(n.Ur.updateTargetData(s,g))});let l=pn(),c=ae();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),o.push(SN(s,a,e.documentUpdates).next(h=>{l=h.Ps,c=h.Is})),!r.isEqual(J.min())){const h=n.Ur.getLastRemoteSnapshotVersion(s).next(f=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));o.push(h)}return M.waitFor(o).next(()=>a.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.os=i,s))}function SN(t,e,n){let r=ae(),i=ae();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let a=pn();return n.forEach((o,l)=>{const c=s.get(o);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(o)),l.isNoDocument()&&l.version.isEqual(J.min())?(e.removeEntry(o,l.readTime),a=a.insert(o,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),a=a.insert(o,l)):F("LocalStore","Ignoring outdated watch update for ",o,". Current version:",c.version," Watch version:",l.version)}),{Ps:a,Is:i}})}function rL(t,e){const n=H(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function qo(t,e){const n=H(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.Ur.allocateTargetId(r).next(a=>(i=new Hr(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Go(t,e,n){const r=H(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!ys(a))throw a;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function tf(t,e,n){const r=H(t);let i=J.min(),s=ae();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,c,h){const f=H(l),p=f._s.get(h);return p!==void 0?M.resolve(f.os.get(p)):f.Ur.getTargetData(c,h)}(r,a,nn(e)).next(o=>{if(o)return i=o.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,o.targetId).next(l=>{s=l})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,n?i:J.min(),n?s:ae())).next(o=>(NN(r,kC(e),o),{documents:o,Ts:s})))}function RN(t,e){const n=H(t),r=H(n.Ur),i=n.os.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.ot(s,e).next(a=>a?a.target:null))}function CN(t,e){const n=H(t),r=n.us.get(e)||J.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.cs.getAllFromCollectionGroup(i,e,hC(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(NN(n,e,i),i))}function NN(t,e,n){let r=t.us.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}async function iL(t,e,n,r){const i=H(t);let s=ae(),a=pn();for(const c of n){const h=e.Es(c.metadata.name);c.document&&(s=s.add(h));const f=e.ds(c);f.setReadTime(e.As(c.metadata.readTime)),a=a.insert(h,f)}const o=i.cs.newChangeBuffer({trackRemovals:!0}),l=await qo(i,function(h){return nn(ll(he.fromString(`__bundle__/docs/${h}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",c=>SN(c,o,a).next(h=>(o.apply(c),h)).next(h=>i.Ur.removeMatchingKeysForTargetId(c,l.targetId).next(()=>i.Ur.addMatchingKeys(c,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(c,h.Ps,h.Is)).next(()=>h.Ps)))}async function sL(t,e,n=ae()){const r=await qo(t,nn(Hy(e.bundledQuery))),i=H(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const a=lt(e.readTime);if(r.snapshotVersion.compareTo(a)>=0)return i.Gr.saveNamedQuery(s,e);const o=r.withResumeToken(tt.EMPTY_BYTE_STRING,a);return i.os=i.os.insert(o.targetId,o),i.Ur.updateTargetData(s,o).next(()=>i.Ur.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Ur.addMatchingKeys(s,n,r.targetId)).next(()=>i.Gr.saveNamedQuery(s,e))})}function bb(t,e){return`firestore_clients_${t}_${e}`}function Ab(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Rp(t,e){return`firestore_targets_${t}_${e}`}class nf{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Rs(e,n,r){const i=JSON.parse(r);let s,a=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return a&&i.error&&(a=typeof i.error.message=="string"&&typeof i.error.code=="string",a&&(s=new B(i.error.code,i.error.message))),a?new nf(e,n,i.state,s):(at("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ru{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Rs(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new B(r.error.code,r.error.message))),s?new Ru(e,r.state,i):(at("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class rf{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Rs(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Ly();for(let a=0;i&&a<r.activeTargetIds.length;++a)i=gC(r.activeTargetIds[a]),s=s.add(r.activeTargetIds[a]);return i?new rf(e,s):(at("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class Jy{constructor(e,n){this.clientId=e,this.onlineState=n}static Rs(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new Jy(n.clientId,n.onlineState):(at("SharedClientState",`Failed to parse online state: ${e}`),null)}}class i_{constructor(){this.activeTargetIds=Ly()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Cp{constructor(e,n,r,i,s){this.window=e,this.ui=n,this.persistenceKey=r,this.ps=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new Pe(re),this.started=!1,this.bs=[];const a=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Ds=bb(this.persistenceKey,this.ps),this.vs=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new i_),this.Cs=new RegExp(`^firestore_clients_${a}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${a}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${a}_(\\d+)$`),this.xs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Os=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const r of e){if(r===this.ps)continue;const i=this.getItem(bb(this.persistenceKey,r));if(i){const s=rf.Rs(r,i);s&&(this.Ss=this.Ss.insert(s.clientId,s))}}this.Ns();const n=this.storage.getItem(this.xs);if(n){const r=this.Ls(n);r&&this.Bs(r)}for(const r of this.bs)this.ws(r);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let n=!1;return this.Ss.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,n,r){this.qs(e,n,r),this.Qs(e)}addLocalQueryTarget(e,n=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem(Rp(this.persistenceKey,e));if(i){const s=Ru.Rs(e,i);s&&(r=s.state)}}return n&&this.Ks.fs(e),this.Ns(),r}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Rp(this.persistenceKey,e))}updateQueryState(e,n,r){this.$s(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Qs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return F("SharedClientState","READ",e,n),n}setItem(e,n){F("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){F("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const n=e;if(n.storageArea===this.storage){if(F("SharedClientState","EVENT",n.key,n.newValue),n.key===this.Ds)return void at("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Cs.test(n.key)){if(n.newValue==null){const r=this.Gs(n.key);return this.zs(r,null)}{const r=this.js(n.key,n.newValue);if(r)return this.zs(r.clientId,r)}}else if(this.Fs.test(n.key)){if(n.newValue!==null){const r=this.Hs(n.key,n.newValue);if(r)return this.Js(r)}}else if(this.Ms.test(n.key)){if(n.newValue!==null){const r=this.Ys(n.key,n.newValue);if(r)return this.Zs(r)}}else if(n.key===this.xs){if(n.newValue!==null){const r=this.Ls(n.newValue);if(r)return this.Bs(r)}}else if(n.key===this.vs){const r=function(s){let a=fn.oe;if(s!=null)try{const o=JSON.parse(s);Q(typeof o=="number"),a=o}catch(o){at("SharedClientState","Failed to read sequence number from WebStorage",o)}return a}(n.newValue);r!==fn.oe&&this.sequenceNumberHandler(r)}else if(n.key===this.Os){const r=this.Xs(n.newValue);await Promise.all(r.map(i=>this.syncEngine.eo(i)))}}}else this.bs.push(n)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,n,r){const i=new nf(this.currentUser,e,n,r),s=Ab(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Vs())}Qs(e){const n=Ab(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Us(e){const n={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(n))}$s(e,n,r){const i=Rp(this.persistenceKey,e),s=new Ru(e,n,r);this.setItem(i,s.Vs())}Ws(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Os,n)}Gs(e){const n=this.Cs.exec(e);return n?n[1]:null}js(e,n){const r=this.Gs(e);return rf.Rs(r,n)}Hs(e,n){const r=this.Fs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return nf.Rs(new wt(s),i,n)}Ys(e,n){const r=this.Ms.exec(e),i=Number(r[1]);return Ru.Rs(i,n)}Ls(e){return Jy.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);F("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,n){const r=n?this.Ss.insert(e,n):this.Ss.remove(e),i=this.ks(this.Ss),s=this.ks(r),a=[],o=[];return s.forEach(l=>{i.has(l)||a.push(l)}),i.forEach(l=>{s.has(l)||o.push(l)}),this.syncEngine.io(a,o).then(()=>{this.Ss=r})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let n=Ly();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class DN{constructor(){this.so=new i_,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new i_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class aL{_o(e){}shutdown(){}}/**
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
 */class wb{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Vh=null;function Np(){return Vh===null?Vh=function(){return 268435456+Math.round(2147483648*Math.random())}():Vh++,"0x"+Vh.toString(16)}/**
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
 */const oL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class lL{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const zt="WebChannelConnection";class uL extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,a){const o=Np(),l=this.xo(n,r.toUriEncodedString());F("RestConnection",`Sending RPC '${n}' ${o}:`,l,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,a),this.No(n,l,c,i).then(h=>(F("RestConnection",`Received RPC '${n}' ${o}: `,h),h),h=>{throw Ar("RestConnection",`RPC '${n}' ${o} failed with error: `,h,"url: ",l,"request:",i),h})}Lo(n,r,i,s,a,o){return this.Mo(n,r,i,s,a)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ol}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>n[a]=s),i&&i.headers.forEach((s,a)=>n[a]=s)}xo(n,r){const i=oL[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Np();return new Promise((a,o)=>{const l=new rC;l.setWithCredentials(!0),l.listenOnce(iC.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case rd.NO_ERROR:const h=l.getResponseJson();F(zt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),a(h);break;case rd.TIMEOUT:F(zt,`RPC '${e}' ${s} timed out`),o(new B(k.DEADLINE_EXCEEDED,"Request time out"));break;case rd.HTTP_ERROR:const f=l.getStatus();if(F(zt,`RPC '${e}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const S=function(P){const T=P.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(T)>=0?T:k.UNKNOWN}(g.status);o(new B(S,g.message))}else o(new B(k.UNKNOWN,"Server responded with status "+l.getStatus()))}else o(new B(k.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{F(zt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);F(zt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=Np(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=oC(),o=aC(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");F(zt,`Creating RPC '${e}' stream ${i}: ${h}`,l);const f=a.createWebChannel(h,l);let p=!1,g=!1;const S=new lL({Io:P=>{g?F(zt,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(p||(F(zt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),F(zt,`RPC '${e}' stream ${i} sending:`,P),f.send(P))},To:()=>f.close()}),N=(P,T,v)=>{P.listen(T,A=>{try{v(A)}catch(D){setTimeout(()=>{throw D},0)}})};return N(f,iu.EventType.OPEN,()=>{g||(F(zt,`RPC '${e}' stream ${i} transport opened.`),S.yo())}),N(f,iu.EventType.CLOSE,()=>{g||(g=!0,F(zt,`RPC '${e}' stream ${i} transport closed`),S.So())}),N(f,iu.EventType.ERROR,P=>{g||(g=!0,Ar(zt,`RPC '${e}' stream ${i} transport errored:`,P),S.So(new B(k.UNAVAILABLE,"The operation could not be completed")))}),N(f,iu.EventType.MESSAGE,P=>{var T;if(!g){const v=P.data[0];Q(!!v);const A=v,D=A.error||((T=A[0])===null||T===void 0?void 0:T.error);if(D){F(zt,`RPC '${e}' stream ${i} received error:`,D);const U=D.status;let j=function(b){const w=ht[b];if(w!==void 0)return QC(w)}(U),I=D.message;j===void 0&&(j=k.INTERNAL,I="Unknown error status: "+U+" with message "+D.message),g=!0,S.So(new B(j,I)),f.close()}else F(zt,`RPC '${e}' stream ${i} received:`,v),S.bo(v)}}),N(o,sC.STAT_EVENT,P=>{P.stat===zg.PROXY?F(zt,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===zg.NOPROXY&&F(zt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}/**
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
 *//**
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
 */function xN(){return typeof window<"u"?window:null}function cd(){return typeof document<"u"?document:null}/**
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
 */function Vc(t){return new pV(t,!0)}/**
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
 */class Zy{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&F("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class ON{constructor(e,n,r,i,s,a,o,l){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=o,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Zy(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(at(n.toString()),at("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new B(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cL extends ON{constructor(e,n,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,a),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=yV(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?J.min():a.readTime?lt(a.readTime):J.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Zg(this.serializer),n.addTarget=function(s,a){let o;const l=a.target;if(o=Qd(l)?{documents:sN(s,l)}:{query:aN(s,l)._t},o.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){o.resumeToken=ZC(s,a.resumeToken);const c=Xg(s,a.expectedCount);c!==null&&(o.expectedCount=c)}else if(a.snapshotVersion.compareTo(J.min())>0){o.readTime=zo(s,a.snapshotVersion.toTimestamp());const c=Xg(s,a.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const r=EV(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Zg(this.serializer),n.removeTarget=e,this.a_(n)}}class hL extends ON{constructor(e,n,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,a),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Q(!!e.streamToken),this.lastStreamToken=e.streamToken,Q(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Q(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=vV(e.writeResults,e.commitTime),r=lt(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Zg(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>sc(this.serializer,r))};this.a_(n)}}/**
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
 */class dL extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new B(k.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(e,Jg(n,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(k.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,o])=>this.connection.Lo(e,Jg(n,r),i,a,o,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new B(k.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class fL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(at(n),this.D_=!1):F("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class mL{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(a=>{r.enqueueAndForget(async()=>{Es(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=H(l);c.L_.add(4),await hl(c),c.q_.set("Unknown"),c.L_.delete(4),await Lc(c)}(this))})}),this.q_=new fL(r,i)}}async function Lc(t){if(Es(t))for(const e of t.B_)await e(!0)}async function hl(t){for(const e of t.B_)await e(!1)}function qf(t,e){const n=H(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),nv(n)?tv(n):fl(n).r_()&&ev(n,e))}function Ho(t,e){const n=H(t),r=fl(n);n.N_.delete(e),r.r_()&&PN(n,e),n.N_.size===0&&(r.r_()?r.o_():Es(n)&&n.q_.set("Unknown"))}function ev(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}fl(t).A_(e)}function PN(t,e){t.Q_.xe(e),fl(t).R_(e)}function tv(t){t.Q_=new hV({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),fl(t).start(),t.q_.v_()}function nv(t){return Es(t)&&!fl(t).n_()&&t.N_.size>0}function Es(t){return H(t).L_.size===0}function MN(t){t.Q_=void 0}async function pL(t){t.q_.set("Online")}async function gL(t){t.N_.forEach((e,n)=>{ev(t,e)})}async function _L(t,e){MN(t),nv(t)?(t.q_.M_(e),tv(t)):t.q_.set("Unknown")}async function yL(t,e,n){if(t.q_.set("Online"),e instanceof JC&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const o of s.targetIds)i.N_.has(o)&&(await i.remoteSyncer.rejectListen(o,a),i.N_.delete(o),i.Q_.removeTarget(o))}(t,e)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await sf(t,r)}else if(e instanceof ud?t.Q_.Ke(e):e instanceof XC?t.Q_.He(e):t.Q_.We(e),!n.isEqual(J.min()))try{const r=await wN(t.localStore);n.compareTo(r)>=0&&await function(s,a){const o=s.Q_.rt(a);return o.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const h=s.N_.get(c);h&&s.N_.set(c,h.withResumeToken(l.resumeToken,a))}}),o.targetMismatches.forEach((l,c)=>{const h=s.N_.get(l);if(!h)return;s.N_.set(l,h.withResumeToken(tt.EMPTY_BYTE_STRING,h.snapshotVersion)),PN(s,l);const f=new Hr(h.target,l,c,h.sequenceNumber);ev(s,f)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await sf(t,r)}}async function sf(t,e,n){if(!ys(e))throw e;t.L_.add(1),await hl(t),t.q_.set("Offline"),n||(n=()=>wN(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Lc(t)})}function kN(t,e){return e().catch(n=>sf(t,n,e))}async function dl(t){const e=H(t),n=ds(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;vL(e);)try{const i=await rL(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,EL(e,i)}catch(i){await sf(e,i)}VN(e)&&LN(e)}function vL(t){return Es(t)&&t.O_.length<10}function EL(t,e){t.O_.push(e);const n=ds(t);n.r_()&&n.V_&&n.m_(e.mutations)}function VN(t){return Es(t)&&!ds(t).n_()&&t.O_.length>0}function LN(t){ds(t).start()}async function TL(t){ds(t).p_()}async function IL(t){const e=ds(t);for(const n of t.O_)e.m_(n.mutations)}async function bL(t,e,n){const r=t.O_.shift(),i=jy.from(r,e,n);await kN(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await dl(t)}async function AL(t,e){e&&ds(t).V_&&await async function(r,i){if(function(a){return $C(a)&&a!==k.ABORTED}(i.code)){const s=r.O_.shift();ds(r).s_(),await kN(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await dl(r)}}(t,e),VN(t)&&LN(t)}async function Sb(t,e){const n=H(t);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=Es(n);n.L_.add(3),await hl(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Lc(n)}async function s_(t,e){const n=H(t);e?(n.L_.delete(2),await Lc(n)):e||(n.L_.add(2),await hl(n),n.q_.set("Unknown"))}function fl(t){return t.K_||(t.K_=function(n,r,i){const s=H(n);return s.w_(),new cL(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:pL.bind(null,t),Ro:gL.bind(null,t),mo:_L.bind(null,t),d_:yL.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),nv(t)?tv(t):t.q_.set("Unknown")):(await t.K_.stop(),MN(t))})),t.K_}function ds(t){return t.U_||(t.U_=function(n,r,i){const s=H(n);return s.w_(),new hL(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:TL.bind(null,t),mo:AL.bind(null,t),f_:IL.bind(null,t),g_:bL.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await dl(t)):(await t.U_.stop(),t.O_.length>0&&(F("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class rv{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Lt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const a=Date.now()+r,o=new rv(e,n,a,i,s);return o.start(r),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ml(t,e){if(at("AsyncQueue",`${e}: ${t}`),ys(t))return new B(k.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class yo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=su(),this.sortedSet=new Pe(this.comparator)}static emptySet(e){return new yo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof yo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new yo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Rb{constructor(){this.W_=new Pe(G.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Y():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ko{constructor(e,n,r,i,s,a,o,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=o,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const a=[];return n.forEach(o=>{a.push({type:0,doc:o})}),new Ko(e,n,yo.emptySet(n),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class wL{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class SL{constructor(){this.queries=Cb(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=H(n),s=i.queries;i.queries=Cb(),s.forEach((a,o)=>{for(const l of o.j_)l.onError(r)})})(this,new B(k.ABORTED,"Firestore shutting down"))}}function Cb(){return new vs(t=>MC(t),xc)}async function iv(t,e){const n=H(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new wL,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(a){const o=ml(a,`Initialization of query '${Ka(e.query)}' failed`);return void e.onError(o)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&av(n)}async function sv(t,e){const n=H(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const a=s.j_.indexOf(e);a>=0&&(s.j_.splice(a,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function RL(t,e){const n=H(t);let r=!1;for(const i of e){const s=i.query,a=n.queries.get(s);if(a){for(const o of a.j_)o.X_(i)&&(r=!0);a.z_=i}}r&&av(n)}function CL(t,e,n){const r=H(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function av(t){t.Y_.forEach(e=>{e.next()})}var a_,Nb;(Nb=a_||(a_={})).ea="default",Nb.Cache="cache";class ov{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ko(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Ko.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==a_.Cache}}/**
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
 */class NL{constructor(e,n){this.aa=e,this.byteLength=n}ua(){return"metadata"in this.aa}}/**
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
 */class Db{constructor(e){this.serializer=e}Es(e){return Ir(this.serializer,e)}ds(e){return e.metadata.exists?iN(this.serializer,e.document,!1):Le.newNoDocument(this.Es(e.metadata.name),this.As(e.metadata.readTime))}As(e){return lt(e)}}class DL{constructor(e,n,r){this.ca=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=UN(e)}la(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.aa.namedQuery)this.queries.push(e.aa.namedQuery);else if(e.aa.documentMetadata){this.documents.push({metadata:e.aa.documentMetadata}),e.aa.documentMetadata.exists||++n;const r=he.fromString(e.aa.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.aa.document&&(this.documents[this.documents.length-1].document=e.aa.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}ha(e){const n=new Map,r=new Db(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Es(i.metadata.name);for(const a of i.metadata.queries){const o=(n.get(a)||ae()).add(s);n.set(a,o)}}return n}async complete(){const e=await iL(this.localStore,new Db(this.serializer),this.documents,this.ca.id),n=this.ha(this.documents);for(const r of this.queries)await sL(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Pa:this.collectionGroups,Ia:e}}}function UN(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class BN{constructor(e){this.key=e}}class FN{constructor(e){this.key=e}}class jN{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ae(),this.mutatedKeys=ae(),this.Aa=VC(e),this.Ra=new yo(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Rb,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,a=i,o=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const p=i.get(h),g=Oc(this.query,f)?f:null,S=!!p&&this.mutatedKeys.has(p.key),N=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let P=!1;p&&g?p.data.isEqual(g.data)?S!==N&&(r.track({type:3,doc:g}),P=!0):this.ga(p,g)||(r.track({type:2,doc:g}),P=!0,(l&&this.Aa(g,l)>0||c&&this.Aa(g,c)<0)&&(o=!0)):!p&&g?(r.track({type:0,doc:g}),P=!0):p&&!g&&(r.track({type:1,doc:p}),P=!0,(l||c)&&(o=!0)),P&&(g?(a=a.add(g),s=N?s.add(h):s.delete(h)):(a=a.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const h=this.query.limitType==="F"?a.last():a.first();a=a.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ra:a,fa:r,ns:o,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((h,f)=>function(g,S){const N=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return N(g)-N(S)}(h.type,f.type)||this.Aa(h.doc,f.doc)),this.pa(r),i=i!=null&&i;const o=n&&!i?this.ya():[],l=this.da.size===0&&this.current&&!i?1:0,c=l!==this.Ea;return this.Ea=l,a.length!==0||c?{snapshot:new Ko(this.query,e.Ra,s,a,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:o}:{wa:o}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Rb,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ae(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new FN(r))}),this.da.forEach(r=>{e.has(r)||n.push(new BN(r))}),n}ba(e){this.Ta=e.Ts,this.da=ae();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Ko.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class xL{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class OL{constructor(e){this.key=e,this.va=!1}}class PL{constructor(e,n,r,i,s,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new vs(o=>MC(o),xc),this.Ma=new Map,this.xa=new Set,this.Oa=new Pe(G.comparator),this.Na=new Map,this.La=new $y,this.Ba={},this.ka=new Map,this.qa=ha.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function ML(t,e,n=!0){const r=Gf(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await zN(r,e,n,!0),i}async function kL(t,e){const n=Gf(t);await zN(n,e,!0,!1)}async function zN(t,e,n,r){const i=await qo(t.localStore,nn(e)),s=i.targetId,a=t.sharedClientState.addLocalQueryTarget(s,n);let o;return r&&(o=await lv(t,e,s,a==="current",i.resumeToken)),t.isPrimaryClient&&n&&qf(t.remoteStore,i),o}async function lv(t,e,n,r,i){t.Ka=(f,p,g)=>async function(N,P,T,v){let A=P.view.ma(T);A.ns&&(A=await tf(N.localStore,P.query,!1).then(({documents:I})=>P.view.ma(I,A)));const D=v&&v.targetChanges.get(P.targetId),U=v&&v.targetMismatches.get(P.targetId)!=null,j=P.view.applyChanges(A,N.isPrimaryClient,D,U);return o_(N,P.targetId,j.wa),j.snapshot}(t,f,p,g);const s=await tf(t.localStore,e,!0),a=new jN(e,s.Ts),o=a.ma(s.documents),l=kc.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=a.applyChanges(o,t.isPrimaryClient,l);o_(t,n,c.wa);const h=new xL(e,n,a);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function VL(t,e,n){const r=H(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(a=>!xc(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Go(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Ho(r.remoteStore,i.targetId),Yo(r,i.targetId)}).catch(_s)):(Yo(r,i.targetId),await Go(r.localStore,i.targetId,!0))}async function LL(t,e){const n=H(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ho(n.remoteStore,r.targetId))}async function UL(t,e,n){const r=dv(t);try{const i=await function(a,o){const l=H(a),c=He.now(),h=o.reduce((g,S)=>g.add(S.key),ae());let f,p;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let S=pn(),N=ae();return l.cs.getEntries(g,h).next(P=>{S=P,S.forEach((T,v)=>{v.isValidDocument()||(N=N.add(T))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,S)).next(P=>{f=P;const T=[];for(const v of o){const A=lV(v,f.get(v.key).overlayedDocument);A!=null&&T.push(new fi(v.key,A,wC(A.value.mapValue),Ge.exists(!0)))}return l.mutationQueue.addMutationBatch(g,c,T,o)}).next(P=>{p=P;const T=P.applyToLocalDocumentSet(f,N);return l.documentOverlayCache.saveOverlays(g,P.batchId,T)})}).then(()=>({batchId:p.batchId,changes:UC(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,o,l){let c=a.Ba[a.currentUser.toKey()];c||(c=new Pe(re)),c=c.insert(o,l),a.Ba[a.currentUser.toKey()]=c}(r,i.batchId,n),await mi(r,i.changes),await dl(r.remoteStore)}catch(i){const s=ml(i,"Failed to persist write");n.reject(s)}}async function qN(t,e){const n=H(t);try{const r=await nL(n.localStore,e);e.targetChanges.forEach((i,s)=>{const a=n.Na.get(s);a&&(Q(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?Q(a.va):i.removedDocuments.size>0&&(Q(a.va),a.va=!1))}),await mi(n,r,e)}catch(r){await _s(r)}}function xb(t,e,n){const r=H(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,a)=>{const o=a.view.Z_(e);o.snapshot&&i.push(o.snapshot)}),function(a,o){const l=H(a);l.onlineState=o;let c=!1;l.queries.forEach((h,f)=>{for(const p of f.j_)p.Z_(o)&&(c=!0)}),c&&av(l)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function BL(t,e,n){const r=H(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let a=new Pe(G.comparator);a=a.insert(s,Le.newNoDocument(s,J.min()));const o=ae().add(s),l=new Mc(J.min(),new Map,new Pe(re),a,o);await qN(r,l),r.Oa=r.Oa.remove(s),r.Na.delete(e),hv(r)}else await Go(r.localStore,e,!1).then(()=>Yo(r,e,n)).catch(_s)}async function FL(t,e){const n=H(t),r=e.batch.batchId;try{const i=await tL(n.localStore,e);cv(n,r,null),uv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await mi(n,i)}catch(i){await _s(i)}}async function jL(t,e,n){const r=H(t);try{const i=await function(a,o){const l=H(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return l.mutationQueue.lookupMutationBatch(c,o).next(f=>(Q(f!==null),h=f.keys(),l.mutationQueue.removeMutationBatch(c,f))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,h,o)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>l.localDocuments.getDocuments(c,h))})}(r.localStore,e);cv(r,e,n),uv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await mi(r,i)}catch(i){await _s(i)}}async function zL(t,e){const n=H(t);Es(n.remoteStore)||F("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(a){const o=H(a);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",l=>o.mutationQueue.getHighestUnacknowledgedBatchId(l))}(n.localStore);if(r===-1)return void e.resolve();const i=n.ka.get(r)||[];i.push(e),n.ka.set(r,i)}catch(r){const i=ml(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function uv(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function cv(t,e,n){const r=H(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Yo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||GN(t,r)})}function GN(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Ho(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),hv(t))}function o_(t,e,n){for(const r of n)r instanceof BN?(t.La.addReference(r.key,e),qL(t,r)):r instanceof FN?(F("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||GN(t,r.key)):Y()}function qL(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(F("SyncEngine","New document in limbo: "+n),t.xa.add(r),hv(t))}function hv(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new G(he.fromString(e)),r=t.qa.next();t.Na.set(r,new OL(n)),t.Oa=t.Oa.insert(n,r),qf(t.remoteStore,new Hr(nn(ll(n.path)),r,"TargetPurposeLimboResolution",fn.oe))}}async function mi(t,e,n){const r=H(t),i=[],s=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((o,l)=>{a.push(r.Ka(l,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(c){i.push(c);const f=Xy.Wi(l.targetId,c);s.push(f)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(l,c){const h=H(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>M.forEach(c,p=>M.forEach(p.$i,g=>h.persistence.referenceDelegate.addReference(f,p.targetId,g)).next(()=>M.forEach(p.Ui,g=>h.persistence.referenceDelegate.removeReference(f,p.targetId,g)))))}catch(f){if(!ys(f))throw f;F("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const p=f.targetId;if(!f.fromCache){const g=h.os.get(p),S=g.snapshotVersion,N=g.withLastLimboFreeSnapshotVersion(S);h.os=h.os.insert(p,N)}}}(r.localStore,s))}async function GL(t,e){const n=H(t);if(!n.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const r=await AN(n.localStore,e);n.currentUser=e,function(s,a){s.ka.forEach(o=>{o.forEach(l=>{l.reject(new B(k.CANCELLED,a))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await mi(n,r.hs)}}function HL(t,e){const n=H(t),r=n.Na.get(e);if(r&&r.va)return ae().add(r.key);{let i=ae();const s=n.Ma.get(e);if(!s)return i;for(const a of s){const o=n.Fa.get(a);i=i.unionWith(o.view.Va)}return i}}async function KL(t,e){const n=H(t),r=await tf(n.localStore,e.query,!0),i=e.view.ba(r);return n.isPrimaryClient&&o_(n,e.targetId,i.wa),i}async function YL(t,e){const n=H(t);return CN(n.localStore,e).then(r=>mi(n,r))}async function $L(t,e,n,r){const i=H(t),s=await function(o,l){const c=H(o),h=H(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",f=>h.Mn(f,l).next(p=>p?c.localDocuments.getDocuments(f,p):M.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await dl(i.remoteStore):n==="acknowledged"||n==="rejected"?(cv(i,e,r||null),uv(i,e),function(o,l){H(H(o).mutationQueue).On(l)}(i.localStore,e)):Y(),await mi(i,s)):F("SyncEngine","Cannot apply mutation batch with id: "+e)}async function QL(t,e){const n=H(t);if(Gf(n),dv(n),e===!0&&n.Qa!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await Ob(n,r.toArray());n.Qa=!0,await s_(n.remoteStore,!0);for(const s of i)qf(n.remoteStore,s)}else if(e===!1&&n.Qa!==!1){const r=[];let i=Promise.resolve();n.Ma.forEach((s,a)=>{n.sharedClientState.isLocalQueryTarget(a)?r.push(a):i=i.then(()=>(Yo(n,a),Go(n.localStore,a,!0))),Ho(n.remoteStore,a)}),await i,await Ob(n,r),function(a){const o=H(a);o.Na.forEach((l,c)=>{Ho(o.remoteStore,c)}),o.La.pr(),o.Na=new Map,o.Oa=new Pe(G.comparator)}(n),n.Qa=!1,await s_(n.remoteStore,!1)}}async function Ob(t,e,n){const r=H(t),i=[],s=[];for(const a of e){let o;const l=r.Ma.get(a);if(l&&l.length!==0){o=await qo(r.localStore,nn(l[0]));for(const c of l){const h=r.Fa.get(c),f=await KL(r,h);f.snapshot&&s.push(f.snapshot)}}else{const c=await RN(r.localStore,a);o=await qo(r.localStore,c),await lv(r,HN(c),a,!1,o.resumeToken)}i.push(o)}return r.Ca.d_(s),i}function HN(t){return PC(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function WL(t){return function(n){return H(H(n).persistence).Qi()}(H(t).localStore)}async function XL(t,e,n,r){const i=H(t);if(i.Qa)return void F("SyncEngine","Ignoring unexpected query state notification.");const s=i.Ma.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const a=await CN(i.localStore,kC(s[0])),o=Mc.createSynthesizedRemoteEventForCurrentChange(e,n==="current",tt.EMPTY_BYTE_STRING);await mi(i,a,o);break}case"rejected":await Go(i.localStore,e,!0),Yo(i,e,r);break;default:Y()}}async function JL(t,e,n){const r=Gf(t);if(r.Qa){for(const i of e){if(r.Ma.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){F("SyncEngine","Adding an already active target "+i);continue}const s=await RN(r.localStore,i),a=await qo(r.localStore,s);await lv(r,HN(s),a.targetId,!1,a.resumeToken),qf(r.remoteStore,a)}for(const i of n)r.Ma.has(i)&&await Go(r.localStore,i,!1).then(()=>{Ho(r.remoteStore,i),Yo(r,i)}).catch(_s)}}function Gf(t){const e=H(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=qN.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=HL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=BL.bind(null,e),e.Ca.d_=RL.bind(null,e.eventManager),e.Ca.$a=CL.bind(null,e.eventManager),e}function dv(t){const e=H(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=FL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=jL.bind(null,e),e}function ZL(t,e,n){const r=H(t);(async function(s,a,o){try{const l=await a.getMetadata();if(await function(g,S){const N=H(g),P=lt(S.createTime);return N.persistence.runTransaction("hasNewerBundle","readonly",T=>N.Gr.getBundleMetadata(T,S.id)).then(T=>!!T&&T.createTime.compareTo(P)>=0)}(s.localStore,l))return await a.close(),o._completeWith(function(g){return{taskState:"Success",documentsLoaded:g.totalDocuments,bytesLoaded:g.totalBytes,totalDocuments:g.totalDocuments,totalBytes:g.totalBytes}}(l)),Promise.resolve(new Set);o._updateProgress(UN(l));const c=new DL(l,s.localStore,a.serializer);let h=await a.Ua();for(;h;){const p=await c.la(h);p&&o._updateProgress(p),h=await a.Ua()}const f=await c.complete();return await mi(s,f.Ia,void 0),await function(g,S){const N=H(g);return N.persistence.runTransaction("Save bundle","readwrite",P=>N.Gr.saveBundleMetadata(P,S))}(s.localStore,l),o._completeWith(f.progress),Promise.resolve(f.Pa)}catch(l){return Ar("SyncEngine",`Loading bundle failed with ${l}`),o._failWith(l),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class ac{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Vc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return bN(this.persistence,new IN,e.initialUser,this.serializer)}Ga(e){return new TN(zf.Zr,this.serializer)}Wa(e){return new DN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ac.provider={build:()=>new ac};class KN extends ac{constructor(e,n,r){super(),this.Ja=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await dv(this.Ja.syncEngine),await dl(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return bN(this.persistence,new IN,e.initialUser,this.serializer)}ja(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new LV(r,e.asyncQueue,n)}Ha(e,n){const r=new yk(n,this.persistence);return new _k(e.asyncQueue,r)}Ga(e){const n=Wy(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?hn.withCacheSize(this.cacheSizeBytes):hn.DEFAULT;return new Qy(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,xN(),cd(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new DN}}class eU extends KN{constructor(e,n){super(e,n,!1),this.Ja=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Ja.syncEngine;this.sharedClientState instanceof Cp&&(this.sharedClientState.syncEngine={no:$L.bind(null,n),ro:XL.bind(null,n),io:JL.bind(null,n),Qi:WL.bind(null,n),eo:YL.bind(null,n)},await this.sharedClientState.start()),await this.persistence.yi(async r=>{await QL(this.Ja.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Wa(e){const n=xN();if(!Cp.D(n))throw new B(k.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Wy(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Cp(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class oc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>xb(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=GL.bind(null,this.syncEngine),await s_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new SL}()}createDatastore(e){const n=Vc(e.databaseInfo.databaseId),r=function(s){return new uL(s)}(e.databaseInfo);return function(s,a,o,l){return new dL(s,a,o,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,a,o){return new mL(r,i,s,a,o)}(this.localStore,this.datastore,e.asyncQueue,n=>xb(this.syncEngine,n,0),function(){return wb.D()?new wb:new aL}())}createSyncEngine(e,n){return function(i,s,a,o,l,c,h){const f=new PL(i,s,a,o,l,c);return h&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=H(i);F("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await hl(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}oc.provider={build:()=>new oc};function Pb(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 *//**
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
 */class Hf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):at("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class tU{constructor(e,n){this.Xa=e,this.serializer=n,this.metadata=new Lt,this.buffer=new Uint8Array,this.eu=function(){return new TextDecoder("utf-8")}(),this.tu().then(r=>{r&&r.ua()?this.metadata.resolve(r.aa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.aa)}`))},r=>this.metadata.reject(r))}close(){return this.Xa.cancel()}async getMetadata(){return this.metadata.promise}async Ua(){return await this.getMetadata(),this.tu()}async tu(){const e=await this.nu();if(e===null)return null;const n=this.eu.decode(e),r=Number(n);isNaN(r)&&this.ru(`length string (${n}) is not valid number`);const i=await this.iu(r);return new NL(JSON.parse(i),e.length+r)}su(){return this.buffer.findIndex(e=>e===123)}async nu(){for(;this.su()<0&&!await this.ou(););if(this.buffer.length===0)return null;const e=this.su();e<0&&this.ru("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async iu(e){for(;this.buffer.length<e;)await this.ou()&&this.ru("Reached the end of bundle when more is expected.");const n=this.eu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}ru(e){throw this.Xa.cancel(),new Error(`Invalid bundle format: ${e}`)}async ou(){const e=await this.Xa.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class nU{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new B(k.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const a=H(i),o={documents:s.map(f=>ic(a.serializer,f))},l=await a.Lo("BatchGetDocuments",a.serializer.databaseId,he.emptyPath(),o,s.length),c=new Map;l.forEach(f=>{const p=_V(a.serializer,f);c.set(p.key.toString(),p)});const h=[];return s.forEach(f=>{const p=c.get(f.toString());Q(!!p),h.push(p)}),h}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new cl(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=G.fromPath(r);this.mutations.push(new By(i,this.precondition(i)))}),await async function(r,i){const s=H(r),a={writes:i.map(o=>sc(s.serializer,o))};await s.Mo("Commit",s.serializer.databaseId,he.emptyPath(),a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw Y();n=J.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new B(k.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(J.min())?Ge.exists(!1):Ge.updateTime(n):Ge.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(J.min()))throw new B(k.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ge.updateTime(n)}return Ge.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class rU{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this._u=r.maxAttempts,this.t_=new Zy(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const e=new nU(this.datastore),n=this.cu(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.lu(i)}))}).catch(r=>{this.lu(r)})})}cu(e){try{const n=this.updateFunction(e);return!Nc(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}lu(e){this._u>0&&this.hu(e)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(e)}hu(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!$C(n)}return!1}}/**
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
 */class iU{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=wt.UNAUTHENTICATED,this.clientId=uC.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{F("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(F("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Lt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ml(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Dp(t,e){t.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await AN(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Mb(t,e){t.asyncQueue.verifyOperationInProgress();const n=await fv(t);F("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Sb(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Sb(e.remoteStore,i)),t._onlineComponents=e}async function fv(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){F("FirestoreClient","Using user provided OfflineComponentProvider");try{await Dp(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===k.FAILED_PRECONDITION||i.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ar("Error using user provided cache. Falling back to memory cache: "+n),await Dp(t,new ac)}}else F("FirestoreClient","Using default OfflineComponentProvider"),await Dp(t,new ac);return t._offlineComponents}async function Kf(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(F("FirestoreClient","Using user provided OnlineComponentProvider"),await Mb(t,t._uninitializedComponentsProvider._online)):(F("FirestoreClient","Using default OnlineComponentProvider"),await Mb(t,new oc))),t._onlineComponents}function YN(t){return fv(t).then(e=>e.persistence)}function mv(t){return fv(t).then(e=>e.localStore)}function $N(t){return Kf(t).then(e=>e.remoteStore)}function pv(t){return Kf(t).then(e=>e.syncEngine)}function sU(t){return Kf(t).then(e=>e.datastore)}async function $o(t){const e=await Kf(t),n=e.eventManager;return n.onListen=ML.bind(null,e.syncEngine),n.onUnlisten=VL.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=kL.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=LL.bind(null,e.syncEngine),n}function aU(t){return t.asyncQueue.enqueue(async()=>{const e=await YN(t),n=await $N(t);return e.setNetworkEnabled(!0),function(i){const s=H(i);return s.L_.delete(0),Lc(s)}(n)})}function oU(t){return t.asyncQueue.enqueue(async()=>{const e=await YN(t),n=await $N(t);return e.setNetworkEnabled(!1),async function(i){const s=H(i);s.L_.add(0),await hl(s),s.q_.set("Offline")}(n)})}function lU(t,e){const n=new Lt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,a){try{const o=await function(c,h){const f=H(c);return f.persistence.runTransaction("read document","readonly",p=>f.localDocuments.getDocument(p,h))}(i,s);o.isFoundDocument()?a.resolve(o):o.isNoDocument()?a.resolve(null):a.reject(new B(k.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const l=ml(o,`Failed to get document '${s} from cache`);a.reject(l)}}(await mv(t),e,n)),n.promise}function QN(t,e,n={}){const r=new Lt;return t.asyncQueue.enqueueAndForget(async()=>function(s,a,o,l,c){const h=new Hf({next:p=>{h.Za(),a.enqueueAndForget(()=>sv(s,f));const g=p.docs.has(o);!g&&p.fromCache?c.reject(new B(k.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&p.fromCache&&l&&l.source==="server"?c.reject(new B(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new ov(ll(o.path),h,{includeMetadataChanges:!0,_a:!0});return iv(s,f)}(await $o(t),t.asyncQueue,e,n,r)),r.promise}function uU(t,e){const n=new Lt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,a){try{const o=await tf(i,s,!0),l=new jN(s,o.Ts),c=l.ma(o.documents),h=l.applyChanges(c,!1);a.resolve(h.snapshot)}catch(o){const l=ml(o,`Failed to execute query '${s} against cache`);a.reject(l)}}(await mv(t),e,n)),n.promise}function WN(t,e,n={}){const r=new Lt;return t.asyncQueue.enqueueAndForget(async()=>function(s,a,o,l,c){const h=new Hf({next:p=>{h.Za(),a.enqueueAndForget(()=>sv(s,f)),p.fromCache&&l.source==="server"?c.reject(new B(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new ov(o,h,{includeMetadataChanges:!0,_a:!0});return iv(s,f)}(await $o(t),t.asyncQueue,e,n,r)),r.promise}function cU(t,e){const n=new Hf(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){H(i).Y_.add(s),s.next()}(await $o(t),n)),()=>{n.Za(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){H(i).Y_.delete(s)}(await $o(t),n))}}function hU(t,e,n,r){const i=function(a,o){let l;return l=typeof a=="string"?WC().encode(a):a,function(h,f){return new tU(h,f)}(function(h,f){if(h instanceof Uint8Array)return Pb(h,f);if(h instanceof ArrayBuffer)return Pb(new Uint8Array(h),f);if(h instanceof ReadableStream)return h.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(l),o)}(n,Vc(e));t.asyncQueue.enqueueAndForget(async()=>{ZL(await pv(t),i,r)})}function dU(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){const s=H(r);return s.persistence.runTransaction("Get named query","readonly",a=>s.Gr.getNamedQuery(a,i))}(await mv(t),e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function XN(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const kb=new Map;/**
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
 */function gv(t,e,n){if(!n)throw new B(k.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function JN(t,e,n,r){if(e===!0&&r===!0)throw new B(k.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Vb(t){if(!G.isDocumentKey(t))throw new B(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Lb(t){if(G.isDocumentKey(t))throw new B(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Yf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function _e(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Yf(t);throw new B(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function ZN(t,e){if(e<=0)throw new B(k.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class Ub{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}JN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=XN((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new B(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new B(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new B(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Uc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ub({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ub(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ak;switch(r.type){case"firstParty":return new ck(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=kb.get(n);r&&(F("ComponentProvider","Removing Datastore"),kb.delete(n),r.terminate())}(this),Promise.resolve()}}function fU(t,e,n,r={}){var i;const s=(t=_e(t,Uc))._getSettings(),a=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&Ar("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let o,l;if(typeof r.mockUserToken=="string")o=r.mockUserToken,l=wt.MOCK_USER;else{o=LR(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new B(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new wt(c)}t._authCredentials=new ok(new lC(o,l))}}/**
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
 */let rn=class eD{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new eD(this.firestore,e,this._query)}},Ye=class tD{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new es(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new tD(this.firestore,e,this._key)}},es=class nD extends rn{constructor(e,n,r){super(e,n,ll(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ye(this.firestore,null,new G(e))}withConverter(e){return new nD(this.firestore,e,this._path)}};function rD(t,e,...n){if(t=W(t),gv("collection","path",e),t instanceof Uc){const r=he.fromString(e,...n);return Lb(r),new es(t,null,r)}{if(!(t instanceof Ye||t instanceof es))throw new B(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(he.fromString(e,...n));return Lb(r),new es(t.firestore,null,r)}}function mU(t,e){if(t=_e(t,Uc),gv("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new B(k.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new rn(t,null,function(r){return new di(he.emptyPath(),r)}(e))}function af(t,e,...n){if(t=W(t),arguments.length===1&&(e=uC.newId()),gv("doc","path",e),t instanceof Uc){const r=he.fromString(e,...n);return Vb(r),new Ye(t,null,new G(r))}{if(!(t instanceof Ye||t instanceof es))throw new B(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(he.fromString(e,...n));return Vb(r),new Ye(t.firestore,t instanceof es?t.converter:null,new G(r))}}function iD(t,e){return t=W(t),e=W(e),(t instanceof Ye||t instanceof es)&&(e instanceof Ye||e instanceof es)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function sD(t,e){return t=W(t),e=W(e),t instanceof rn&&e instanceof rn&&t.firestore===e.firestore&&xc(t._query,e._query)&&t.converter===e.converter}/**
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
 */class Bb{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Zy(this,"async_queue_retry"),this.Vu=()=>{const r=cd();r&&F("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=cd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=cd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Lt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ys(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(a){let o=a.message||"";return a.stack&&(o=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),o}(r);throw at("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=rv.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Y()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function l_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class pU{constructor(){this._progressObserver={},this._taskCompletionResolver=new Lt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const gU=-1;let ut=class extends Uc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Bb,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Bb(e),this._firestoreClient=void 0,await e}}};function Ht(t){if(t._terminated)throw new B(k.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||aD(t),t._firestoreClient}function aD(t){var e,n,r;const i=t._freezeSettings(),s=function(o,l,c,h){return new Fk(o,l,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,XN(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new iU(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(o){const l=o==null?void 0:o._online.build();return{_offline:o==null?void 0:o._offline.build(l),_online:l}}(t._componentsProvider))}function _U(t,e){Ar("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings();return oD(t,oc.provider,{build:r=>new KN(r,n.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function yU(t){Ar("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=t._freezeSettings();oD(t,oc.provider,{build:n=>new eU(n,e.cacheSizeBytes)})}function oD(t,e,n){if((t=_e(t,ut))._firestoreClient||t._terminated)throw new B(k.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(t._componentsProvider||t._getSettings().localCache)throw new B(k.FAILED_PRECONDITION,"SDK cache is already specified.");t._componentsProvider={_online:e,_offline:n},aD(t)}function vU(t){if(t._initialized&&!t._terminated)throw new B(k.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Lt;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!Tr.D())return Promise.resolve();const i=r+"main";await Tr.delete(i)}(Wy(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function EU(t){return function(n){const r=new Lt;return n.asyncQueue.enqueueAndForget(async()=>zL(await pv(n),r)),r.promise}(Ht(t=_e(t,ut)))}function TU(t){return aU(Ht(t=_e(t,ut)))}function IU(t){return oU(Ht(t=_e(t,ut)))}function bU(t,e){const n=Ht(t=_e(t,ut)),r=new pU;return hU(n,t._databaseId,e,r),r}function AU(t,e){return dU(Ht(t=_e(t,ut)),e).then(n=>n?new rn(t,null,n.query):null)}/**
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
 */class Sr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Sr(tt.fromBase64String(e))}catch(n){throw new B(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Sr(tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */let fs=class{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
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
 */let Aa=class{constructor(e){this._methodName=e}};/**
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
 */class $f{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class _v{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const wU=/^__.*__$/;class SU{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new fi(e,this.data,this.fieldMask,n,this.fieldTransforms):new ul(e,this.data,n,this.fieldTransforms)}}class lD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new fi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function uD(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class Qf{constructor(e,n,r,i,s,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Qf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return of(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(uD(this.Cu)&&wU.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class RU{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Vc(e)}Qu(e,n,r,i=!1){return new Qf({Cu:e,methodName:n,qu:r,path:qe.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function wa(t){const e=t._freezeSettings(),n=Vc(t._databaseId);return new RU(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Wf(t,e,n,r,i,s={}){const a=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);Av("Data must be an object, but it was:",a,r);const o=dD(r,a);let l,c;if(s.merge)l=new mn(a.fieldMask),c=a.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const p=u_(e,f,n);if(!a.contains(p))throw new B(k.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);mD(h,p)||h.push(p)}l=new mn(h),c=a.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=a.fieldTransforms;return new SU(new Mt(o),l,c)}class Bc extends Aa{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Bc}}function cD(t,e,n){return new Qf({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class yv extends Aa{_toFieldTransform(e){return new Pc(e.path,new Fo)}isEqual(e){return e instanceof yv}}class vv extends Aa{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=cD(this,e,!0),r=this.Ku.map(s=>Sa(s,n)),i=new oa(r);return new Pc(e.path,i)}isEqual(e){return e instanceof vv&&$u(this.Ku,e.Ku)}}class Ev extends Aa{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=cD(this,e,!0),r=this.Ku.map(s=>Sa(s,n)),i=new la(r);return new Pc(e.path,i)}isEqual(e){return e instanceof Ev&&$u(this.Ku,e.Ku)}}class Tv extends Aa{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new jo(e.serializer,jC(e.serializer,this.$u));return new Pc(e.path,n)}isEqual(e){return e instanceof Tv&&this.$u===e.$u}}function Iv(t,e,n,r){const i=t.Qu(1,e,n);Av("Data must be an object, but it was:",i,r);const s=[],a=Mt.empty();ba(r,(l,c)=>{const h=wv(e,l,n);c=W(c);const f=i.Nu(h);if(c instanceof Bc)s.push(h);else{const p=Sa(c,f);p!=null&&(s.push(h),a.set(h,p))}});const o=new mn(s);return new lD(a,o,i.fieldTransforms)}function bv(t,e,n,r,i,s){const a=t.Qu(1,e,n),o=[u_(e,r,n)],l=[i];if(s.length%2!=0)throw new B(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)o.push(u_(e,s[p])),l.push(s[p+1]);const c=[],h=Mt.empty();for(let p=o.length-1;p>=0;--p)if(!mD(c,o[p])){const g=o[p];let S=l[p];S=W(S);const N=a.Nu(g);if(S instanceof Bc)c.push(g);else{const P=Sa(S,N);P!=null&&(c.push(g),h.set(g,P))}}const f=new mn(c);return new lD(h,f,a.fieldTransforms)}function hD(t,e,n,r=!1){return Sa(n,t.Qu(r?4:3,e))}function Sa(t,e){if(fD(t=W(t)))return Av("Unsupported field value:",e,t),dD(t,e);if(t instanceof Aa)return function(r,i){if(!uD(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const o of r){let l=Sa(o,i.Lu(a));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),a++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=W(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return jC(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=He.fromDate(r);return{timestampValue:zo(i.serializer,s)}}if(r instanceof He){const s=new He(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:zo(i.serializer,s)}}if(r instanceof $f)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Sr)return{bytesValue:ZC(i.serializer,r._byteString)};if(r instanceof Ye){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Gy(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof _v)return function(a,o){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(l=>{if(typeof l!="number")throw o.Bu("VectorValues must only contain numeric values.");return Uy(o.serializer,l)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Yf(r)}`)}(t,e)}function dD(t,e){const n={};return TC(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ba(t,(r,i)=>{const s=Sa(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function fD(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof He||t instanceof $f||t instanceof Sr||t instanceof Ye||t instanceof Aa||t instanceof _v)}function Av(t,e,n){if(!fD(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Yf(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function u_(t,e,n){if((e=W(e))instanceof fs)return e._internalPath;if(typeof e=="string")return wv(t,e);throw of("Field path arguments must be of type string or ",t,!1,void 0,n)}const CU=new RegExp("[~\\*/\\[\\]]");function wv(t,e,n){if(e.search(CU)>=0)throw of(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new fs(...e.split("."))._internalPath}catch{throw of(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function of(t,e,n,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let o=`Function ${e}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new B(k.INVALID_ARGUMENT,o+t+l)}function mD(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class lc{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ye(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new NU(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Xf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class NU extends lc{data(){return super.data()}}function Xf(t,e){return typeof e=="string"?wv(t,e):e instanceof fs?e._internalPath:e._delegate._internalPath}/**
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
 */function pD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Sv{}class Fc extends Sv{}function Ri(t,e,...n){let r=[];e instanceof Sv&&r.push(e),r=r.concat(n),function(s){const a=s.filter(l=>l instanceof Rv).length,o=s.filter(l=>l instanceof Jf).length;if(a>1||a>0&&o>0)throw new B(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Jf extends Fc{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Jf(e,n,r)}_apply(e){const n=this._parse(e);return _D(e._query,n),new rn(e.firestore,e.converter,Wg(e._query,n))}_parse(e){const n=wa(e.firestore);return function(s,a,o,l,c,h,f){let p;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new B(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){jb(f,h);const g=[];for(const S of f)g.push(Fb(l,s,S));p={arrayValue:{values:g}}}else p=Fb(l,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||jb(f,h),p=hD(o,a,f,h==="in"||h==="not-in");return fe.create(c,h,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function DU(t,e,n){const r=e,i=Xf("where",t);return Jf._create(i,r,n)}class Rv extends Sv{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Rv(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ie.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let a=i;const o=s.getFlattenedFilters();for(const l of o)_D(a,l),a=Wg(a,l)}(e._query,n),new rn(e.firestore,e.converter,Wg(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Cv extends Fc{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Cv(e,n)}_apply(e){const n=function(i,s,a){if(i.startAt!==null)throw new B(k.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new B(k.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new rc(s,a)}(e._query,this._field,this._direction);return new rn(e.firestore,e.converter,function(i,s){const a=i.explicitOrderBy.concat([s]);return new di(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function xU(t,e="asc"){const n=e,r=Xf("orderBy",t);return Cv._create(r,n)}class Zf extends Fc{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Zf(e,n,r)}_apply(e){return new rn(e.firestore,e.converter,Xd(e._query,this._limit,this._limitType))}}function OU(t){return ZN("limit",t),Zf._create("limit",t,"F")}function PU(t){return ZN("limitToLast",t),Zf._create("limitToLast",t,"L")}class em extends Fc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new em(e,n,r)}_apply(e){const n=gD(e,this.type,this._docOrFields,this._inclusive);return new rn(e.firestore,e.converter,function(i,s){return new di(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function MU(...t){return em._create("startAt",t,!0)}function kU(...t){return em._create("startAfter",t,!1)}class tm extends Fc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new tm(e,n,r)}_apply(e){const n=gD(e,this.type,this._docOrFields,this._inclusive);return new rn(e.firestore,e.converter,function(i,s){return new di(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function VU(...t){return tm._create("endBefore",t,!1)}function LU(...t){return tm._create("endAt",t,!0)}function gD(t,e,n,r){if(n[0]=W(n[0]),n[0]instanceof lc)return function(s,a,o,l,c){if(!l)throw new B(k.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const h=[];for(const f of _o(s))if(f.field.isKeyField())h.push(sa(a,l.key));else{const p=l.data.field(f.field);if(Vf(p))throw new B(k.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(p===null){const g=f.field.canonicalString();throw new B(k.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${g}' (used as the orderBy) does not exist.`)}h.push(p)}return new hs(h,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=wa(t.firestore);return function(a,o,l,c,h,f){const p=a.explicitOrderBy;if(h.length>p.length)throw new B(k.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const g=[];for(let S=0;S<h.length;S++){const N=h[S];if(p[S].field.isKeyField()){if(typeof N!="string")throw new B(k.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof N}`);if(!Vy(a)&&N.indexOf("/")!==-1)throw new B(k.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${N}' contains a slash.`);const P=a.path.child(he.fromString(N));if(!G.isDocumentKey(P))throw new B(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${P}' is not because it contains an odd number of segments.`);const T=new G(P);g.push(sa(o,T))}else{const P=hD(l,c,N);g.push(P)}}return new hs(g,f)}(t._query,t.firestore._databaseId,i,e,n,r)}}function Fb(t,e,n){if(typeof(n=W(n))=="string"){if(n==="")throw new B(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Vy(e)&&n.indexOf("/")!==-1)throw new B(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(he.fromString(n));if(!G.isDocumentKey(r))throw new B(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return sa(t,new G(r))}if(n instanceof Ye)return sa(t,n._key);throw new B(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Yf(n)}.`)}function jb(t,e){if(!Array.isArray(t)||t.length===0)throw new B(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function _D(t,e){const n=function(i,s){for(const a of i)for(const o of a.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Nv{convertValue(e,n="none"){switch(ia(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ls(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Y()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ba(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>ze(a.doubleValue));return new _v(s)}convertGeoPoint(e){return new $f(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=My(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ec(e));default:return null}}convertTimestamp(e){const n=oi(e);return new He(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=he.fromString(e);Q(cN(r));const i=new us(r.get(1),r.get(3)),s=new G(r.popFirst(5));return i.isEqual(n)||at(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function nm(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class UU extends Nv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Sr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ye(this.firestore,null,n)}}/**
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
 */class js{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let li=class extends lc{constructor(e,n,r,i,s,a){super(e,n,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Cu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Xf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}},Cu=class extends li{data(e={}){return super.data(e)}},ms=class{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new js(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Cu(this._firestore,this._userDataWriter,r.key,r,new js(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(o=>{const l=new Cu(i._firestore,i._userDataWriter,o.doc.key,o.doc,new js(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);return o.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const l=new Cu(i._firestore,i._userDataWriter,o.doc.key,o.doc,new js(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return o.type!==0&&(c=a.indexOf(o.doc.key),a=a.delete(o.doc.key)),o.type!==1&&(a=a.add(o.doc),h=a.indexOf(o.doc.key)),{type:BU(o.type),doc:l,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}};function BU(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}function yD(t,e){return t instanceof li&&e instanceof li?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof ms&&e instanceof ms&&t._firestore===e._firestore&&sD(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
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
 */function FU(t){t=_e(t,Ye);const e=_e(t.firestore,ut);return QN(Ht(e),t._key).then(n=>Dv(e,t,n))}class Ra extends Nv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Sr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ye(this.firestore,null,n)}}function jU(t){t=_e(t,Ye);const e=_e(t.firestore,ut),n=Ht(e),r=new Ra(e);return lU(n,t._key).then(i=>new li(e,r,t._key,i,new js(i!==null&&i.hasLocalMutations,!0),t.converter))}function zU(t){t=_e(t,Ye);const e=_e(t.firestore,ut);return QN(Ht(e),t._key,{source:"server"}).then(n=>Dv(e,t,n))}function qU(t){t=_e(t,rn);const e=_e(t.firestore,ut),n=Ht(e),r=new Ra(e);return pD(t._query),WN(n,t._query).then(i=>new ms(e,r,t,i))}function GU(t){t=_e(t,rn);const e=_e(t.firestore,ut),n=Ht(e),r=new Ra(e);return uU(n,t._query).then(i=>new ms(e,r,t,i))}function HU(t){t=_e(t,rn);const e=_e(t.firestore,ut),n=Ht(e),r=new Ra(e);return WN(n,t._query,{source:"server"}).then(i=>new ms(e,r,t,i))}function zb(t,e,n){t=_e(t,Ye);const r=_e(t.firestore,ut),i=nm(t.converter,e,n);return jc(r,[Wf(wa(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Ge.none())])}function qb(t,e,n,...r){t=_e(t,Ye);const i=_e(t.firestore,ut),s=wa(i);let a;return a=typeof(e=W(e))=="string"||e instanceof fs?bv(s,"updateDoc",t._key,e,n,r):Iv(s,"updateDoc",t._key,e),jc(i,[a.toMutation(t._key,Ge.exists(!0))])}function KU(t){return jc(_e(t.firestore,ut),[new cl(t._key,Ge.none())])}function YU(t,e){const n=_e(t.firestore,ut),r=af(t),i=nm(t.converter,e);return jc(n,[Wf(wa(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Ge.exists(!1))]).then(()=>r)}function vD(t,...e){var n,r,i;t=W(t);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||l_(e[a])||(s=e[a],a++);const o={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(l_(e[a])){const f=e[a];e[a]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[a+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[a+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let l,c,h;if(t instanceof Ye)c=_e(t.firestore,ut),h=ll(t._key.path),l={next:f=>{e[a]&&e[a](Dv(c,t,f))},error:e[a+1],complete:e[a+2]};else{const f=_e(t,rn);c=_e(f.firestore,ut),h=f._query;const p=new Ra(c);l={next:g=>{e[a]&&e[a](new ms(c,p,f,g))},error:e[a+1],complete:e[a+2]},pD(t._query)}return function(p,g,S,N){const P=new Hf(N),T=new ov(g,P,S);return p.asyncQueue.enqueueAndForget(async()=>iv(await $o(p),T)),()=>{P.Za(),p.asyncQueue.enqueueAndForget(async()=>sv(await $o(p),T))}}(Ht(c),h,o,l)}function $U(t,e){return cU(Ht(t=_e(t,ut)),l_(e)?e:{next:e})}function jc(t,e){return function(r,i){const s=new Lt;return r.asyncQueue.enqueueAndForget(async()=>UL(await pv(r),i,s)),s.promise}(Ht(t),e)}function Dv(t,e,n){const r=n.docs.get(e._key),i=new Ra(t);return new li(t,i,e._key,r,new js(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const QU={maxAttempts:5};/**
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
 */let WU=class{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=wa(e)}set(e,n,r){this._verifyNotCommitted();const i=Vi(e,this._firestore),s=nm(i.converter,n,r),a=Wf(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(a.toMutation(i._key,Ge.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Vi(e,this._firestore);let a;return a=typeof(n=W(n))=="string"||n instanceof fs?bv(this._dataReader,"WriteBatch.update",s._key,n,r,i):Iv(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(a.toMutation(s._key,Ge.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Vi(e,this._firestore);return this._mutations=this._mutations.concat(new cl(n._key,Ge.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new B(k.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Vi(t,e){if((t=W(t)).firestore!==e)throw new B(k.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 *//**
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
 */let XU=class extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=wa(n)}get(n){const r=Vi(n,this._firestore),i=new UU(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return Y();const a=s[0];if(a.isFoundDocument())return new lc(this._firestore,i,a.key,a,r.converter);if(a.isNoDocument())return new lc(this._firestore,i,r._key,null,r.converter);throw Y()})}set(n,r,i){const s=Vi(n,this._firestore),a=nm(s.converter,r,i),o=Wf(this._dataReader,"Transaction.set",s._key,a,s.converter!==null,i);return this._transaction.set(s._key,o),this}update(n,r,i,...s){const a=Vi(n,this._firestore);let o;return o=typeof(r=W(r))=="string"||r instanceof fs?bv(this._dataReader,"Transaction.update",a._key,r,i,s):Iv(this._dataReader,"Transaction.update",a._key,r),this._transaction.update(a._key,o),this}delete(n){const r=Vi(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Vi(e,this._firestore),r=new Ra(this._firestore);return super.get(e).then(i=>new li(this._firestore,r,n._key,i._document,new js(!1,!1),n.converter))}};function JU(t,e,n){t=_e(t,ut);const r=Object.assign(Object.assign({},QU),n);return function(s){if(s.maxAttempts<1)throw new B(k.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,a,o){const l=new Lt;return s.asyncQueue.enqueueAndForget(async()=>{const c=await sU(s);new rU(s.asyncQueue,c,o,a,l).au()}),l.promise}(Ht(t),i=>e(new XU(t,i)),r)}/**
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
 */function ZU(){return new Bc("deleteField")}function e4(){return new yv("serverTimestamp")}function t4(...t){return new vv("arrayUnion",t)}function n4(...t){return new Ev("arrayRemove",t)}function r4(t){return new Tv("increment",t)}(function(e,n=!0){(function(i){ol=i})(hi),ai(new Xn("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),o=new ut(new lk(r.getProvider("auth-internal")),new dk(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new B(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new us(c.options.projectId,h)}(a,i),a);return s=Object.assign({useFetchStreams:n},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),On(OI,"4.7.3",e),On(OI,"4.7.3","esm2017")})();const i4="@firebase/firestore-compat",s4="0.3.38";/**
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
 */function xv(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new B("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function Gb(){if(typeof Uint8Array>"u")throw new B("unimplemented","Uint8Arrays are not available in this environment.")}function Hb(){if(!Uk())throw new B("unimplemented","Blobs are unavailable in Firestore in this environment.")}let ED=class c_{constructor(e){this._delegate=e}static fromBase64String(e){return Hb(),new c_(Sr.fromBase64String(e))}static fromUint8Array(e){return Gb(),new c_(Sr.fromUint8Array(e))}toBase64(){return Hb(),this._delegate.toBase64()}toUint8Array(){return Gb(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
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
 */function h_(t){return a4(t,["next","error","complete"])}function a4(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
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
 */class o4{enableIndexedDbPersistence(e,n){return _U(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return yU(e._delegate)}clearIndexedDbPersistence(e){return vU(e._delegate)}}class TD{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof us||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&Ar("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){fU(this._delegate,e,n,r)}enableNetwork(){return TU(this._delegate)}disableNetwork(){return IU(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,JN("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return EU(this._delegate)}onSnapshotsInSync(e){return $U(this._delegate,e)}get app(){if(!this._appCompat)throw new B("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Qo(this,rD(this._delegate,e))}catch(n){throw Jt(n,"collection()","Firestore.collection()")}}doc(e){try{return new Hn(this,af(this._delegate,e))}catch(n){throw Jt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Xt(this,mU(this._delegate,e))}catch(n){throw Jt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return JU(this._delegate,n=>e(new ID(this,n)))}batch(){return Ht(this._delegate),new bD(new WU(this._delegate,e=>jc(this._delegate,e)))}loadBundle(e){return bU(this._delegate,e)}namedQuery(e){return AU(this._delegate,e).then(n=>n?new Xt(this,n):null)}}class rm extends Nv{constructor(e){super(),this.firestore=e}convertBytes(e){return new ED(new Sr(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return Hn.forKey(n,this.firestore,null)}}function l4(t){ik(t)}class ID{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new rm(e)}get(e){const n=zs(e);return this._delegate.get(n).then(r=>new uc(this._firestore,new li(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=zs(e);return r?(xv("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=zs(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=zs(e);return this._delegate.delete(n),this}}class bD{constructor(e){this._delegate=e}set(e,n,r){const i=zs(e);return r?(xv("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=zs(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=zs(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class da{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new Cu(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new cc(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=da.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new da(e,new rm(e),n),i.set(n,s)),s}}da.INSTANCES=new WeakMap;class Hn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new rm(e)}static forPath(e,n,r){if(e.length%2!==0)throw new B("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Hn(n,new Ye(n._delegate,r,new G(e)))}static forKey(e,n,r){return new Hn(n,new Ye(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Qo(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Qo(this.firestore,rD(this._delegate,e))}catch(n){throw Jt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=W(e),e instanceof Ye?iD(this._delegate,e):!1}set(e,n){n=xv("DocumentReference.set",n);try{return n?zb(this._delegate,e,n):zb(this._delegate,e)}catch(r){throw Jt(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?qb(this._delegate,e):qb(this._delegate,e,n,...r)}catch(i){throw Jt(i,"updateDoc()","DocumentReference.update()")}}delete(){return KU(this._delegate)}onSnapshot(...e){const n=AD(e),r=wD(e,i=>new uc(this.firestore,new li(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return vD(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=jU(this._delegate):(e==null?void 0:e.source)==="server"?n=zU(this._delegate):n=FU(this._delegate),n.then(r=>new uc(this.firestore,new li(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Hn(this.firestore,e?this._delegate.withConverter(da.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Jt(t,e,n){return t.message=t.message.replace(e,n),t}function AD(t){for(const e of t)if(typeof e=="object"&&!h_(e))return e;return{}}function wD(t,e){var n,r;let i;return h_(t[0])?i=t[0]:h_(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class uc{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new Hn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return yD(this._delegate,e._delegate)}}class cc extends uc{data(e){const n=this._delegate.data(e);return this._delegate._converter||sk(n!==void 0),n}}class Xt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new rm(e)}where(e,n,r){try{return new Xt(this.firestore,Ri(this._delegate,DU(e,n,r)))}catch(i){throw Jt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new Xt(this.firestore,Ri(this._delegate,xU(e,n)))}catch(r){throw Jt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Xt(this.firestore,Ri(this._delegate,OU(e)))}catch(n){throw Jt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new Xt(this.firestore,Ri(this._delegate,PU(e)))}catch(n){throw Jt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Xt(this.firestore,Ri(this._delegate,MU(...e)))}catch(n){throw Jt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Xt(this.firestore,Ri(this._delegate,kU(...e)))}catch(n){throw Jt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Xt(this.firestore,Ri(this._delegate,VU(...e)))}catch(n){throw Jt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Xt(this.firestore,Ri(this._delegate,LU(...e)))}catch(n){throw Jt(n,"endAt()","Query.endAt()")}}isEqual(e){return sD(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=GU(this._delegate):(e==null?void 0:e.source)==="server"?n=HU(this._delegate):n=qU(this._delegate),n.then(r=>new d_(this.firestore,new ms(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=AD(e),r=wD(e,i=>new d_(this.firestore,new ms(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return vD(this._delegate,n,r)}withConverter(e){return new Xt(this.firestore,e?this._delegate.withConverter(da.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class u4{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new cc(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class d_{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new Xt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new cc(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new u4(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new cc(this._firestore,r))})}isEqual(e){return yD(this._delegate,e._delegate)}}class Qo extends Xt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Hn(this.firestore,e):null}doc(e){try{return e===void 0?new Hn(this.firestore,af(this._delegate)):new Hn(this.firestore,af(this._delegate,e))}catch(n){throw Jt(n,"doc()","CollectionReference.doc()")}}add(e){return YU(this._delegate,e).then(n=>new Hn(this.firestore,n))}isEqual(e){return iD(this._delegate,e._delegate)}withConverter(e){return new Qo(this.firestore,e?this._delegate.withConverter(da.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function zs(t){return _e(t,Ye)}/**
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
 */class Ov{constructor(...e){this._delegate=new fs(...e)}static documentId(){return new Ov(qe.keyField().canonicalString())}isEqual(e){return e=W(e),e instanceof fs?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class Fs{constructor(e){this._delegate=e}static serverTimestamp(){const e=e4();return e._methodName="FieldValue.serverTimestamp",new Fs(e)}static delete(){const e=ZU();return e._methodName="FieldValue.delete",new Fs(e)}static arrayUnion(...e){const n=t4(...e);return n._methodName="FieldValue.arrayUnion",new Fs(n)}static arrayRemove(...e){const n=n4(...e);return n._methodName="FieldValue.arrayRemove",new Fs(n)}static increment(e){const n=r4(e);return n._methodName="FieldValue.increment",new Fs(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const c4={Firestore:TD,GeoPoint:$f,Timestamp:He,Blob:ED,Transaction:ID,WriteBatch:bD,DocumentReference:Hn,DocumentSnapshot:uc,Query:Xt,QueryDocumentSnapshot:cc,QuerySnapshot:d_,CollectionReference:Qo,FieldPath:Ov,FieldValue:Fs,setLogLevel:l4,CACHE_SIZE_UNLIMITED:gU};function h4(t,e){t.INTERNAL.registerComponent(new Xn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},c4)))}/**
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
 */function d4(t){h4(t,(e,n)=>new TD(e,n,new o4)),t.registerVersion(i4,s4)}d4(ar);/**
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
 */const SD="firebasestorage.googleapis.com",RD="storageBucket",f4=2*60*1e3,m4=10*60*1e3,p4=1e3;/**
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
 */class Qe extends Gt{constructor(e,n,r=0){super(xp(e),`Firebase Storage: ${n} (${xp(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Qe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return xp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Fe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Fe||(Fe={}));function xp(t){return"storage/"+t}function Pv(){const t="An unknown error occurred, please check the error payload for server response.";return new Qe(Fe.UNKNOWN,t)}function g4(t){return new Qe(Fe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function _4(t){return new Qe(Fe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function y4(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Qe(Fe.UNAUTHENTICATED,t)}function v4(){return new Qe(Fe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function E4(t){return new Qe(Fe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function CD(){return new Qe(Fe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ND(){return new Qe(Fe.CANCELED,"User canceled the upload/download.")}function T4(t){return new Qe(Fe.INVALID_URL,"Invalid URL '"+t+"'.")}function I4(t){return new Qe(Fe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function b4(){return new Qe(Fe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+RD+"' property when initializing the app?")}function DD(){return new Qe(Fe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function A4(){return new Qe(Fe.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function w4(){return new Qe(Fe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function S4(t){return new Qe(Fe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function vo(t){return new Qe(Fe.INVALID_ARGUMENT,t)}function xD(){return new Qe(Fe.APP_DELETED,"The Firebase app was deleted.")}function OD(t){return new Qe(Fe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Nu(t,e){return new Qe(Fe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function $l(t){throw new Qe(Fe.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class qt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=qt.makeFromUrl(e,n)}catch{return new qt(e,"")}if(r.path==="")return r;throw I4(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const a="(/(.*))?$",o=new RegExp("^gs://"+i+a,"i"),l={bucket:1,path:3};function c(D){D.path_=decodeURIComponent(D.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${f}/${h}/b/${i}/o${p}`,"i"),S={bucket:1,path:3},N=n===SD?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",T=new RegExp(`^https?://${N}/${i}/${P}`,"i"),A=[{regex:o,indices:l,postModify:s},{regex:g,indices:S,postModify:c},{regex:T,indices:{bucket:1,path:2},postModify:c}];for(let D=0;D<A.length;D++){const U=A[D],j=U.regex.exec(e);if(j){const I=j[U.indices.bucket];let y=j[U.indices.path];y||(y=""),r=new qt(I,y),U.postModify(r);break}}if(r==null)throw T4(e);return r}}class R4{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function C4(t,e,n){let r=1,i=null,s=null,a=!1,o=0;function l(){return o===2}let c=!1;function h(...P){c||(c=!0,e.apply(null,P))}function f(P){i=setTimeout(()=>{i=null,t(g,l())},P)}function p(){s&&clearTimeout(s)}function g(P,...T){if(c){p();return}if(P){p(),h.call(null,P,...T);return}if(l()||a){p(),h.call(null,P,...T);return}r<64&&(r*=2);let A;o===1?(o=2,A=0):A=(r+Math.random())*1e3,f(A)}let S=!1;function N(P){S||(S=!0,p(),!c&&(i!==null?(P||(o=2),clearTimeout(i),f(0)):P||(o=1)))}return f(0),s=setTimeout(()=>{a=!0,N(!0)},n),N}function N4(t){t(!1)}/**
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
 */function D4(t){return t!==void 0}function x4(t){return typeof t=="function"}function O4(t){return typeof t=="object"&&!Array.isArray(t)}function im(t){return typeof t=="string"||t instanceof String}function Kb(t){return Mv()&&t instanceof Blob}function Mv(){return typeof Blob<"u"}function f_(t,e,n,r){if(r<e)throw vo(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw vo(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Ts(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function PD(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Ws;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ws||(Ws={}));/**
 * @license
 * Copyright 2022 Google LLC
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
 */function MD(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class P4{constructor(e,n,r,i,s,a,o,l,c,h,f,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=a,this.callback_=o,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=f,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,S)=>{this.resolve_=g,this.reject_=S,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Lh(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const a=o=>{const l=o.loaded,c=o.lengthComputable?o.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(a),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(a),this.pendingConnection_=null;const o=s.getErrorCode()===Ws.NO_ERROR,l=s.getStatus();if(!o||MD(l,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===Ws.ABORT;r(!1,new Lh(!1,null,h));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new Lh(c,s))})},n=(r,i)=>{const s=this.resolve_,a=this.reject_,o=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(o,o.getResponse());D4(l)?s(l):s()}catch(l){a(l)}else if(o!==null){const l=Pv();l.serverResponse=o.getErrorText(),this.errorCallback_?a(this.errorCallback_(o,l)):a(l)}else if(i.canceled){const l=this.appDelete_?xD():ND();a(l)}else{const l=CD();a(l)}};this.canceled_?n(!1,new Lh(!1,null,!0)):this.backoffId_=C4(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&N4(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Lh{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function M4(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function k4(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function V4(t,e){e&&(t["X-Firebase-GMPID"]=e)}function L4(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function U4(t,e,n,r,i,s,a=!0){const o=PD(t.urlParams),l=t.url+o,c=Object.assign({},t.headers);return V4(c,e),M4(c,n),k4(c,s),L4(c,r),new P4(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,a)}/**
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
 */function B4(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function F4(...t){const e=B4();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Mv())return new Blob(t);throw new Qe(Fe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function j4(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function z4(t){if(typeof atob>"u")throw S4("base-64");return atob(t)}/**
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
 */const Kn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Op{constructor(e,n){this.data=e,this.contentType=n||null}}function kD(t,e){switch(t){case Kn.RAW:return new Op(VD(e));case Kn.BASE64:case Kn.BASE64URL:return new Op(LD(t,e));case Kn.DATA_URL:return new Op(G4(e),H4(e))}throw Pv()}function VD(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,a=t.charCodeAt(++n);r=65536|(s&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function q4(t){let e;try{e=decodeURIComponent(t)}catch{throw Nu(Kn.DATA_URL,"Malformed data URL.")}return VD(e)}function LD(t,e){switch(t){case Kn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Nu(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Kn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Nu(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=z4(e)}catch(i){throw i.message.includes("polyfill")?i:Nu(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class UD{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Nu(Kn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=K4(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function G4(t){const e=new UD(t);return e.base64?LD(Kn.BASE64,e.rest):q4(e.rest)}function H4(t){return new UD(t).contentType}function K4(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class jr{constructor(e,n){let r=0,i="";Kb(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Kb(this.data_)){const r=this.data_,i=j4(r,e,n);return i===null?null:new jr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new jr(r,!0)}}static getBlob(...e){if(Mv()){const n=e.map(r=>r instanceof jr?r.data_:r);return new jr(F4.apply(null,n))}else{const n=e.map(a=>im(a)?kD(Kn.RAW,a).data:a.data_);let r=0;n.forEach(a=>{r+=a.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(a=>{for(let o=0;o<a.length;o++)i[s++]=a[o]}),new jr(i,!0)}}uploadData(){return this.data_}}/**
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
 */function kv(t){let e;try{e=JSON.parse(t)}catch{return null}return O4(e)?e:null}/**
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
 */function Y4(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function $4(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function BD(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function Q4(t,e){return e}class Qt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||Q4}}let Uh=null;function W4(t){return!im(t)||t.length<2?t:BD(t)}function sm(){if(Uh)return Uh;const t=[];t.push(new Qt("bucket")),t.push(new Qt("generation")),t.push(new Qt("metageneration")),t.push(new Qt("name","fullPath",!0));function e(s,a){return W4(a)}const n=new Qt("name");n.xform=e,t.push(n);function r(s,a){return a!==void 0?Number(a):a}const i=new Qt("size");return i.xform=r,t.push(i),t.push(new Qt("timeCreated")),t.push(new Qt("updated")),t.push(new Qt("md5Hash",null,!0)),t.push(new Qt("cacheControl",null,!0)),t.push(new Qt("contentDisposition",null,!0)),t.push(new Qt("contentEncoding",null,!0)),t.push(new Qt("contentLanguage",null,!0)),t.push(new Qt("contentType",null,!0)),t.push(new Qt("metadata","customMetadata",!0)),Uh=t,Uh}function X4(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new qt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function J4(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const a=n[s];r[a.local]=a.xform(r,e[a.server])}return X4(r,t),r}function FD(t,e,n){const r=kv(e);return r===null?null:J4(t,r,n)}function Z4(t,e,n,r){const i=kv(e);if(i===null||!im(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const a=encodeURIComponent;return s.split(",").map(c=>{const h=t.bucket,f=t.fullPath,p="/b/"+a(h)+"/o/"+a(f),g=Ts(p,n,r),S=PD({alt:"media",token:c});return g+S})[0]}function Vv(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
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
 */const Yb="prefixes",$b="items";function eB(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[Yb])for(const i of n[Yb]){const s=i.replace(/\/$/,""),a=t._makeStorageReference(new qt(e,s));r.prefixes.push(a)}if(n[$b])for(const i of n[$b]){const s=t._makeStorageReference(new qt(e,i.name));r.items.push(s)}return r}function tB(t,e,n){const r=kv(n);return r===null?null:eB(t,e,r)}class pi{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function br(t){if(!t)throw Pv()}function am(t,e){function n(r,i){const s=FD(t,i,e);return br(s!==null),s}return n}function nB(t,e){function n(r,i){const s=tB(t,e,i);return br(s!==null),s}return n}function rB(t,e){function n(r,i){const s=FD(t,i,e);return br(s!==null),Z4(s,i,t.host,t._protocol)}return n}function pl(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=v4():i=y4():n.getStatus()===402?i=_4(t.bucket):n.getStatus()===403?i=E4(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function om(t){const e=pl(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=g4(t.path)),s.serverResponse=i.serverResponse,s}return n}function jD(t,e,n){const r=e.fullServerUrl(),i=Ts(r,t.host,t._protocol),s="GET",a=t.maxOperationRetryTime,o=new pi(i,s,am(t,n),a);return o.errorHandler=om(e),o}function iB(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const a=e.bucketOnlyServerUrl(),o=Ts(a,t.host,t._protocol),l="GET",c=t.maxOperationRetryTime,h=new pi(o,l,nB(t,e.bucket),c);return h.urlParams=s,h.errorHandler=pl(e),h}function sB(t,e,n){const r=e.fullServerUrl(),i=Ts(r,t.host,t._protocol),s="GET",a=t.maxOperationRetryTime,o=new pi(i,s,rB(t,n),a);return o.errorHandler=om(e),o}function aB(t,e,n,r){const i=e.fullServerUrl(),s=Ts(i,t.host,t._protocol),a="PATCH",o=Vv(n,r),l={"Content-Type":"application/json; charset=utf-8"},c=t.maxOperationRetryTime,h=new pi(s,a,am(t,r),c);return h.headers=l,h.body=o,h.errorHandler=om(e),h}function oB(t,e){const n=e.fullServerUrl(),r=Ts(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function a(l,c){}const o=new pi(r,i,a,s);return o.successCodes=[200,204],o.errorHandler=om(e),o}function lB(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function zD(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=lB(null,e)),r}function uB(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function o(){let A="";for(let D=0;D<2;D++)A=A+Math.random().toString().slice(2);return A}const l=o();a["Content-Type"]="multipart/related; boundary="+l;const c=zD(e,r,i),h=Vv(c,n),f="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,p=`\r
--`+l+"--",g=jr.getBlob(f,r,p);if(g===null)throw DD();const S={name:c.fullPath},N=Ts(s,t.host,t._protocol),P="POST",T=t.maxUploadRetryTime,v=new pi(N,P,am(t,n),T);return v.urlParams=S,v.headers=a,v.body=g.uploadData(),v.errorHandler=pl(e),v}class lf{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function Lv(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{br(!1)}return br(!!n&&(e||["active"]).indexOf(n)!==-1),n}function cB(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),a=zD(e,r,i),o={name:a.fullPath},l=Ts(s,t.host,t._protocol),c="POST",h={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":a.contentType,"Content-Type":"application/json; charset=utf-8"},f=Vv(a,n),p=t.maxUploadRetryTime;function g(N){Lv(N);let P;try{P=N.getResponseHeader("X-Goog-Upload-URL")}catch{br(!1)}return br(im(P)),P}const S=new pi(l,c,g,p);return S.urlParams=o,S.headers=h,S.body=f,S.errorHandler=pl(e),S}function hB(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(c){const h=Lv(c,["active","final"]);let f=null;try{f=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{br(!1)}f||br(!1);const p=Number(f);return br(!isNaN(p)),new lf(p,r.size(),h==="final")}const a="POST",o=t.maxUploadRetryTime,l=new pi(n,a,s,o);return l.headers=i,l.errorHandler=pl(e),l}const Qb=256*1024;function dB(t,e,n,r,i,s,a,o){const l=new lf(0,0);if(a?(l.current=a.current,l.total=a.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw A4();const c=l.total-l.current;let h=c;i>0&&(h=Math.min(h,i));const f=l.current,p=f+h;let g="";h===0?g="finalize":c===h?g="upload, finalize":g="upload";const S={"X-Goog-Upload-Command":g,"X-Goog-Upload-Offset":`${l.current}`},N=r.slice(f,p);if(N===null)throw DD();function P(D,U){const j=Lv(D,["active","final"]),I=l.current+h,y=r.size();let b;return j==="final"?b=am(e,s)(D,U):b=null,new lf(I,y,j==="final",b)}const T="POST",v=e.maxUploadRetryTime,A=new pi(n,T,P,v);return A.headers=S,A.body=N.uploadData(),A.progressCallback=o||null,A.errorHandler=pl(t),A}/**
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
 */const fB={STATE_CHANGED:"state_changed"},Zt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Pp(t){switch(t){case"running":case"pausing":case"canceling":return Zt.RUNNING;case"paused":return Zt.PAUSED;case"success":return Zt.SUCCESS;case"canceled":return Zt.CANCELED;case"error":return Zt.ERROR;default:return Zt.ERROR}}/**
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
 */class mB{constructor(e,n,r){if(x4(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
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
 */function Fa(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class pB{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ws.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ws.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ws.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw $l("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw $l("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw $l("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw $l("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw $l("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class gB extends pB{initXhr(){this.xhr_.responseType="text"}}function ur(){return new gB}/**
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
 */class qD{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=sm(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(Fe.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(MD(i.status,[]))if(s)i=CD();else{this.sleepTime=Math.max(this.sleepTime*2,p4),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(Fe.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=cB(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,ur,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=hB(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,ur,n,r);this._request=s,s.getPromise().then(a=>{a=a,this._request=void 0,this._updateProgress(a.current),this._needToFetchStatus=!1,a.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Qb*this._chunkMultiplier,n=new lf(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let a;try{a=dB(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const o=this._ref.storage._makeRequest(a,ur,i,s,!1);this._request=o,o.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Qb*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=jD(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,ur,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=uB(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,ur,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=ND(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Pp(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new mB(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Pp(this._state)){case Zt.SUCCESS:Fa(this._resolve.bind(null,this.snapshot))();break;case Zt.CANCELED:case Zt.ERROR:const n=this._reject;Fa(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Pp(this._state)){case Zt.RUNNING:case Zt.PAUSED:e.next&&Fa(e.next.bind(e,this.snapshot))();break;case Zt.SUCCESS:e.complete&&Fa(e.complete.bind(e))();break;case Zt.CANCELED:case Zt.ERROR:e.error&&Fa(e.error.bind(e,this._error))();break;default:e.error&&Fa(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class fa{constructor(e,n){this._service=e,n instanceof qt?this._location=n:this._location=qt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new fa(e,n)}get root(){const e=new qt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return BD(this._location.path)}get storage(){return this._service}get parent(){const e=Y4(this._location.path);if(e===null)return null;const n=new qt(this._location.bucket,e);return new fa(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw OD(e)}}function _B(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new qD(t,new jr(e),n)}function yB(t){const e={prefixes:[],items:[]};return GD(t,e).then(()=>e)}async function GD(t,e,n){const i=await HD(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await GD(t,e,i.nextPageToken)}function HD(t,e){e!=null&&typeof e.maxResults=="number"&&f_("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=iB(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,ur)}function vB(t){t._throwIfRoot("getMetadata");const e=jD(t.storage,t._location,sm());return t.storage.makeRequestWithTokens(e,ur)}function EB(t,e){t._throwIfRoot("updateMetadata");const n=aB(t.storage,t._location,e,sm());return t.storage.makeRequestWithTokens(n,ur)}function TB(t){t._throwIfRoot("getDownloadURL");const e=sB(t.storage,t._location,sm());return t.storage.makeRequestWithTokens(e,ur).then(n=>{if(n===null)throw w4();return n})}function IB(t){t._throwIfRoot("deleteObject");const e=oB(t.storage,t._location);return t.storage.makeRequestWithTokens(e,ur)}function KD(t,e){const n=$4(t._location.path,e),r=new qt(t._location.bucket,n);return new fa(t.storage,r)}/**
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
 */function bB(t){return/^[A-Za-z]+:\/\//.test(t)}function AB(t,e){return new fa(t,e)}function YD(t,e){if(t instanceof Uv){const n=t;if(n._bucket==null)throw b4();const r=new fa(n,n._bucket);return e!=null?YD(r,e):r}else return e!==void 0?KD(t,e):t}function wB(t,e){if(e&&bB(e)){if(t instanceof Uv)return AB(t,e);throw vo("To use ref(service, url), the first argument must be a Storage instance.")}else return YD(t,e)}function Wb(t,e){const n=e==null?void 0:e[RD];return n==null?null:qt.makeFromBucketSpec(n,t)}function SB(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:LR(i,t.app.options.projectId))}class Uv{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=SD,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=f4,this._maxUploadRetryTime=m4,this._requests=new Set,i!=null?this._bucket=qt.makeFromBucketSpec(i,this._host):this._bucket=Wb(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=qt.makeFromBucketSpec(this._url,e):this._bucket=Wb(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){f_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){f_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new fa(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new R4(xD());{const a=U4(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Xb="@firebase/storage",Jb="0.13.2";/**
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
 */const RB="storage";function CB(t,e,n){return t=W(t),_B(t,e,n)}function NB(t){return t=W(t),vB(t)}function DB(t,e){return t=W(t),EB(t,e)}function xB(t,e){return t=W(t),HD(t,e)}function OB(t){return t=W(t),yB(t)}function PB(t){return t=W(t),TB(t)}function MB(t){return t=W(t),IB(t)}function Zb(t,e){return t=W(t),wB(t,e)}function kB(t,e){return KD(t,e)}function VB(t,e,n,r={}){SB(t,e,n,r)}function LB(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Uv(n,r,i,e,hi)}function UB(){ai(new Xn(RB,LB,"PUBLIC").setMultipleInstances(!0)),On(Xb,Jb,""),On(Xb,Jb,"esm2017")}UB();/**
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
 */class Bh{constructor(e,n,r){this._delegate=e,this.task=n,this.ref=r}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
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
 */class eA{constructor(e,n){this._delegate=e,this._ref=n,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Bh(this._delegate.snapshot,this,this._ref)}then(e,n){return this._delegate.then(r=>{if(e)return e(new Bh(r,this,this._ref))},n)}on(e,n,r,i){let s;return n&&(typeof n=="function"?s=a=>n(new Bh(a,this,this._ref)):s={next:n.next?a=>n.next(new Bh(a,this,this._ref)):void 0,complete:n.complete||void 0,error:n.error||void 0}),this._delegate.on(e,s,r||void 0,i||void 0)}}class tA{constructor(e,n){this._delegate=e,this._service=n}get prefixes(){return this._delegate.prefixes.map(e=>new Jr(e,this._service))}get items(){return this._delegate.items.map(e=>new Jr(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,n){this._delegate=e,this.storage=n}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const n=kB(this._delegate,e);return new Jr(n,this.storage)}get root(){return new Jr(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new Jr(e,this.storage)}put(e,n){return this._throwIfRoot("put"),new eA(CB(this._delegate,e,n),this)}putString(e,n=Kn.RAW,r){this._throwIfRoot("putString");const i=kD(n,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),new eA(new qD(this._delegate,new jr(i.data,!0),s),this)}listAll(){return OB(this._delegate).then(e=>new tA(e,this.storage))}list(e){return xB(this._delegate,e||void 0).then(n=>new tA(n,this.storage))}getMetadata(){return NB(this._delegate)}updateMetadata(e){return DB(this._delegate,e)}getDownloadURL(){return PB(this._delegate)}delete(){return this._throwIfRoot("delete"),MB(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw OD(e)}}/**
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
 */class $D{constructor(e,n){this.app=e,this._delegate=n}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(nA(e))throw vo("ref() expected a child path but got a URL, use refFromURL instead.");return new Jr(Zb(this._delegate,e),this)}refFromURL(e){if(!nA(e))throw vo("refFromURL() expected a full URL but got a child path, use ref() instead.");try{qt.makeFromUrl(e,this._delegate.host)}catch{throw vo("refFromUrl() expected a valid full URL but got an invalid one.")}return new Jr(Zb(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,n,r={}){VB(this._delegate,e,n,r)}}function nA(t){return/^[A-Za-z]+:\/\//.test(t)}const BB="@firebase/storage-compat",FB="0.3.12";/**
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
 */const jB="storage-compat";function zB(t,{instanceIdentifier:e}){const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("storage").getImmediate({identifier:e});return new $D(n,r)}function qB(t){const e={TaskState:Zt,TaskEvent:fB,StringFormat:Kn,Storage:$D,Reference:Jr};t.INTERNAL.registerComponent(new Xn(jB,zB,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),t.registerVersion(BB,FB)}qB(ar);function Bv(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const Ql={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},ja={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function GB(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function QD(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const HB=GB,KB=QD,WD=new Ia("auth","Firebase",QD());/**
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
 */const uf=new Mf("@firebase/auth");function YB(t,...e){uf.logLevel<=ue.WARN&&uf.warn(`Auth (${hi}): ${t}`,...e)}function hd(t,...e){uf.logLevel<=ue.ERROR&&uf.error(`Auth (${hi}): ${t}`,...e)}/**
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
 */function Ut(t,...e){throw jv(t,...e)}function yt(t,...e){return jv(t,...e)}function Fv(t,e,n){const r=Object.assign(Object.assign({},KB()),{[e]:n});return new Ia("auth","Firebase",r).create(e,{appName:t.name})}function Ct(t){return Fv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function gl(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ut(t,"argument-error"),Fv(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function jv(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return WD.create(t,...e)}function z(t,e,...n){if(!t)throw jv(e,...n)}function vr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw hd(e),new Error(e)}function ir(t,e){t||vr(e)}/**
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
 */function hc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function zv(){return rA()==="http:"||rA()==="https:"}function rA(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function $B(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zv()||BR()||"connection"in navigator)?navigator.onLine:!0}function QB(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class zc{constructor(e,n){this.shortDelay=e,this.longDelay=n,ir(n>e,"Short delay should be less than long delay!"),this.isMobile=R2()||wy()}get(){return $B()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function qv(t,e){ir(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class XD{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const WB={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const XB=new zc(3e4,6e4);function rt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function it(t,e,n,r,i={}){return JD(t,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const o=al(Object.assign({key:t.config.apiKey},a)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},s);return N2()||(c.referrerPolicy="no-referrer"),XD.fetch()(ZD(t,t.config.apiHost,n,o),c)})}async function JD(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},WB),e);try{const i=new ZB(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw lu(t,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const o=s.ok?a.errorMessage:a.error.message,[l,c]=o.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw lu(t,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw lu(t,"email-already-in-use",a);if(l==="USER_DISABLED")throw lu(t,"user-disabled",a);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Fv(t,h,c);Ut(t,h)}}catch(i){if(i instanceof Gt)throw i;Ut(t,"network-request-failed",{message:String(i)})}}async function gi(t,e,n,r,i={}){const s=await it(t,e,n,r,i);return"mfaPendingCredential"in s&&Ut(t,"multi-factor-auth-required",{_serverResponse:s}),s}function ZD(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?qv(t.config,i):`${t.config.apiScheme}://${i}`}function JB(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ZB{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(yt(this.auth,"network-request-failed")),XB.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function lu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=yt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */function iA(t){return t!==void 0&&t.getResponse!==void 0}function sA(t){return t!==void 0&&t.enterprise!==void 0}class e3{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return JB(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
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
 */async function t3(t){return(await it(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function n3(t,e){return it(t,"GET","/v2/recaptchaConfig",rt(t,e))}/**
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
 */async function r3(t,e){return it(t,"POST","/v1/accounts:delete",e)}async function i3(t,e){return it(t,"POST","/v1/accounts:update",e)}async function ex(t,e){return it(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Du(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function s3(t,e=!1){const n=W(t),r=await n.getIdToken(e),i=lm(r);z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Du(Mp(i.auth_time)),issuedAtTime:Du(Mp(i.iat)),expirationTime:Du(Mp(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Mp(t){return Number(t)*1e3}function lm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return hd("JWT malformed, contained fewer than 3 sections"),null;try{const i=MR(n);return i?JSON.parse(i):(hd("Failed to decode base64 JWT payload"),null)}catch(i){return hd("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function aA(t){const e=lm(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ui(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Gt&&a3(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function a3({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class o3{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class m_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Du(this.lastLoginAt),this.creationTime=Du(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function dc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ui(t,ex(n,{idToken:r}));z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?tx(s.providerUserInfo):[],o=u3(t.providerData,a),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),h=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new m_(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function l3(t){const e=W(t);await dc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function u3(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function tx(t){return t.map(e=>{var{providerId:n}=e,r=Bv(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function c3(t,e){const n=await JD(t,{},async()=>{const r=al({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,a=ZD(t,i,"/v1/token",`key=${s}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",XD.fetch()(a,{method:"POST",headers:o,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function h3(t,e){return it(t,"POST","/v2/accounts:revokeToken",rt(t,e))}/**
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
 */class Eo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):aA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){z(e.length!==0,"internal-error");const n=aA(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await c3(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new Eo;return r&&(z(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Eo,this.toJSON())}_performRefresh(){return vr("not implemented")}}/**
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
 */function Ci(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Kr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Bv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new o3(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new m_(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ui(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return s3(this,e)}reload(){return l3(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Kr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await dc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(et(this.auth.app))return Promise.reject(Ct(this.auth));const e=await this.getIdToken();return await ui(this,r3(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,a,o,l,c,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,S=(a=n.photoURL)!==null&&a!==void 0?a:void 0,N=(o=n.tenantId)!==null&&o!==void 0?o:void 0,P=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:A,emailVerified:D,isAnonymous:U,providerData:j,stsTokenManager:I}=n;z(A&&I,e,"internal-error");const y=Eo.fromJSON(this.name,I);z(typeof A=="string",e,"internal-error"),Ci(f,e.name),Ci(p,e.name),z(typeof D=="boolean",e,"internal-error"),z(typeof U=="boolean",e,"internal-error"),Ci(g,e.name),Ci(S,e.name),Ci(N,e.name),Ci(P,e.name),Ci(T,e.name),Ci(v,e.name);const b=new Kr({uid:A,auth:e,email:p,emailVerified:D,displayName:f,isAnonymous:U,photoURL:S,phoneNumber:g,tenantId:N,stsTokenManager:y,createdAt:T,lastLoginAt:v});return j&&Array.isArray(j)&&(b.providerData=j.map(w=>Object.assign({},w))),P&&(b._redirectEventId=P),b}static async _fromIdTokenResponse(e,n,r=!1){const i=new Eo;i.updateFromServerResponse(n);const s=new Kr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await dc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];z(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?tx(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),o=new Eo;o.updateFromIdToken(r);const l=new Kr({uid:i.localId,auth:e,stsTokenManager:o,isAnonymous:a}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new m_(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const oA=new Map;function Rn(t){ir(t instanceof Function,"Expected a class definition");let e=oA.get(t);return e?(ir(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,oA.set(t,e),e)}/**
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
 */class nx{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}nx.type="NONE";const Wo=nx;/**
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
 */function Xs(t,e,n){return`firebase:${t}:${e}:${n}`}class To{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Xs(this.userKey,i.apiKey,s),this.fullPersistenceKey=Xs("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Kr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new To(Rn(Wo),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Rn(Wo);const a=Xs(r,e.config.apiKey,e.name);let o=null;for(const c of n)try{const h=await c._get(a);if(h){const f=Kr._fromJSON(e,h);c!==s&&(o=f),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new To(s,e,r):(s=l[0],o&&await s._set(a,o.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(a)}catch{}})),new To(s,e,r))}}/**
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
 */function lA(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ax(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rx(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ox(e))return"Blackberry";if(lx(e))return"Webos";if(ix(e))return"Safari";if((e.includes("chrome/")||sx(e))&&!e.includes("edge/"))return"Chrome";if(qc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function rx(t=$e()){return/firefox\//i.test(t)}function ix(t=$e()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function sx(t=$e()){return/crios\//i.test(t)}function ax(t=$e()){return/iemobile/i.test(t)}function qc(t=$e()){return/android/i.test(t)}function ox(t=$e()){return/blackberry/i.test(t)}function lx(t=$e()){return/webos/i.test(t)}function Gc(t=$e()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function d3(t=$e()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function f3(t=$e()){var e;return Gc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function m3(){return FR()&&document.documentMode===10}function ux(t=$e()){return Gc(t)||qc(t)||lx(t)||ox(t)||/windows phone/i.test(t)||ax(t)}/**
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
 */function cx(t,e=[]){let n;switch(t){case"Browser":n=lA($e());break;case"Worker":n=`${lA($e())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${hi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class p3{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((a,o)=>{try{const l=e(s);a(l)}catch(l){o(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function g3(t,e={}){return it(t,"GET","/v2/passwordPolicy",rt(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const _3=6;class y3{constructor(e){var n,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:_3,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,a,o;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(o=l.containsNonAlphanumericCharacter)!==null&&o!==void 0?o:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class v3{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uA(this),this.idTokenSubscription=new uA(this),this.beforeStateQueue=new p3(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=WD,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await To.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ex(this,{idToken:e}),r=await Kr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(et(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(o,o))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,o=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===o)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await dc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=QB()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(et(this.app))return Promise.reject(Ct(this));const n=e?W(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return et(this.app)?Promise.reject(Ct(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return et(this.app)?Promise.reject(Ct(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Rn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await g3(this),n=new y3(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ia("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await h3(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rn(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await To.create(this,[Rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(o,this,"internal-error"),o.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{a=!0,l()}}else{const l=e.addObserver(n);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cx(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&YB(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function nt(t){return W(t)}class uA{constructor(e){this.auth=e,this.observer=null,this.addObserver=zR(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Hc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function E3(t){Hc=t}function Gv(t){return Hc.loadJS(t)}function T3(){return Hc.recaptchaV2Script}function I3(){return Hc.recaptchaEnterpriseScript}function b3(){return Hc.gapiScript}function hx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const A3="recaptcha-enterprise",w3="NO_RECAPTCHA";class S3{constructor(e){this.type=A3,this.auth=nt(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,o)=>{n3(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)o(new Error("recaptcha Enterprise site key undefined"));else{const c=new e3(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,a(c.siteKey)}}).catch(l=>{o(l)})})}function i(s,a,o){const l=window.grecaptcha;sA(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{a(c)}).catch(()=>{a(w3)})}):o(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(o=>{if(!n&&sA(window.grecaptcha))i(o,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=I3();l.length!==0&&(l+=o),Gv(l).then(()=>{i(o,s,a)}).catch(c=>{a(c)})}}).catch(o=>{a(o)})})}}async function cA(t,e,n,r=!1){const i=new S3(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function fc(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await cA(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await cA(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(s)})}function R3(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function C3(t,e,n){const r=nt(t);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=dx(e),{host:a,port:o}=N3(e),l=o===null?"":`:${o}`;r.config.emulator={url:`${s}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||D3()}function dx(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function N3(t){const e=dx(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:hA(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:hA(a)}}}function hA(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function D3(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class _l{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vr("not implemented")}_getIdTokenResponse(e){return vr("not implemented")}_linkToIdToken(e,n){return vr("not implemented")}_getReauthenticationResolver(e){return vr("not implemented")}}/**
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
 */async function fx(t,e){return it(t,"POST","/v1/accounts:resetPassword",rt(t,e))}async function x3(t,e){return it(t,"POST","/v1/accounts:update",e)}async function O3(t,e){return it(t,"POST","/v1/accounts:signUp",e)}async function P3(t,e){return it(t,"POST","/v1/accounts:update",rt(t,e))}/**
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
 */async function M3(t,e){return gi(t,"POST","/v1/accounts:signInWithPassword",rt(t,e))}async function um(t,e){return it(t,"POST","/v1/accounts:sendOobCode",rt(t,e))}async function k3(t,e){return um(t,e)}async function V3(t,e){return um(t,e)}async function L3(t,e){return um(t,e)}async function U3(t,e){return um(t,e)}/**
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
 */async function B3(t,e){return gi(t,"POST","/v1/accounts:signInWithEmailLink",rt(t,e))}async function F3(t,e){return gi(t,"POST","/v1/accounts:signInWithEmailLink",rt(t,e))}/**
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
 */class mc extends _l{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new mc(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new mc(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fc(e,n,"signInWithPassword",M3);case"emailLink":return B3(e,{email:this._email,oobCode:this._password});default:Ut(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fc(e,r,"signUpPassword",O3);case"emailLink":return F3(e,{idToken:n,email:this._email,oobCode:this._password});default:Ut(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Zr(t,e){return gi(t,"POST","/v1/accounts:signInWithIdp",rt(t,e))}/**
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
 */const j3="http://localhost";class Rr extends _l{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Rr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ut("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Bv(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Rr(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Zr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Zr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Zr(e,n)}buildRequest(){const e={requestUri:j3,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=al(n)}return e}}/**
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
 */async function z3(t,e){return it(t,"POST","/v1/accounts:sendVerificationCode",rt(t,e))}async function q3(t,e){return gi(t,"POST","/v1/accounts:signInWithPhoneNumber",rt(t,e))}async function G3(t,e){const n=await gi(t,"POST","/v1/accounts:signInWithPhoneNumber",rt(t,e));if(n.temporaryProof)throw lu(t,"account-exists-with-different-credential",n);return n}const H3={USER_NOT_FOUND:"user-not-found"};async function K3(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return gi(t,"POST","/v1/accounts:signInWithPhoneNumber",rt(t,n),H3)}/**
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
 */class Js extends _l{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Js({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Js({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return q3(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return G3(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return K3(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Js({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function Y3(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $3(t){const e=lo(ru(t)).link,n=e?lo(ru(e)).deep_link_id:null,r=lo(ru(t)).deep_link_id;return(r?lo(ru(r)).link:null)||r||n||e||t}class cm{constructor(e){var n,r,i,s,a,o;const l=lo(ru(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,f=Y3((i=l.mode)!==null&&i!==void 0?i:null);z(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=l.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(o=l.tenantId)!==null&&o!==void 0?o:null}static parseLink(e){const n=$3(e);try{return new cm(n)}catch{return null}}}/**
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
 */class Is{constructor(){this.providerId=Is.PROVIDER_ID}static credential(e,n){return mc._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=cm.parseLink(n);return z(r,"argument-error"),mc._fromEmailAndCode(e,r.code,r.tenantId)}}Is.PROVIDER_ID="password";Is.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Is.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class _i{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class yl extends _i{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Io extends yl{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return z("providerId"in n&&"signInMethod"in n,"argument-error"),Rr._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return z(e.idToken||e.accessToken,"argument-error"),Rr._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Io.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Io.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:a,providerId:o}=e;if(!r&&!i&&!n&&!s||!o)return null;try{return new Io(o)._credential({idToken:n,accessToken:r,nonce:a,pendingToken:s})}catch{return null}}}/**
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
 */class cr extends yl{constructor(){super("facebook.com")}static credential(e){return Rr._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.FACEBOOK_SIGN_IN_METHOD="facebook.com";cr.PROVIDER_ID="facebook.com";/**
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
 */class hr extends yl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Rr._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return hr.credential(n,r)}catch{return null}}}hr.GOOGLE_SIGN_IN_METHOD="google.com";hr.PROVIDER_ID="google.com";/**
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
 */class dr extends yl{constructor(){super("github.com")}static credential(e){return Rr._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dr.credential(e.oauthAccessToken)}catch{return null}}}dr.GITHUB_SIGN_IN_METHOD="github.com";dr.PROVIDER_ID="github.com";/**
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
 */const Q3="http://localhost";class Xo extends _l{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Zr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Zr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Zr(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new Xo(r,s)}static _create(e,n){return new Xo(e,n)}buildRequest(){return{requestUri:Q3,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const W3="saml.";class cf extends _i{constructor(e){z(e.startsWith(W3),"argument-error"),super(e)}static credentialFromResult(e){return cf.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return cf.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Xo.fromJSON(e);return z(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Xo._create(r,n)}catch{return null}}}/**
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
 */class fr extends yl{constructor(){super("twitter.com")}static credential(e,n){return Rr._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return fr.credential(n,r)}catch{return null}}}fr.TWITTER_SIGN_IN_METHOD="twitter.com";fr.PROVIDER_ID="twitter.com";/**
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
 */async function mx(t,e){return gi(t,"POST","/v1/accounts:signUp",rt(t,e))}/**
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
 */class Jn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Kr._fromIdTokenResponse(e,r,i),a=dA(r);return new Jn({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=dA(r);return new Jn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function dA(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function X3(t){var e;if(et(t.app))return Promise.reject(Ct(t));const n=nt(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Jn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await mx(n,{returnSecureToken:!0}),i=await Jn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class hf extends Gt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,hf.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new hf(e,n,r,i)}}function px(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?hf._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function gx(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function J3(t,e){const n=W(t);await hm(!0,n,e);const{providerUserInfo:r}=await i3(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=gx(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Hv(t,e,n=!1){const r=await ui(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Jn._forOperation(t,"link",r)}async function hm(t,e,n){await dc(e);const r=gx(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";z(r.has(n)===t,e.auth,i)}/**
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
 */async function _x(t,e,n=!1){const{auth:r}=t;if(et(r.app))return Promise.reject(Ct(r));const i="reauthenticate";try{const s=await ui(t,px(r,i,e,t),n);z(s.idToken,r,"internal-error");const a=lm(s.idToken);z(a,r,"internal-error");const{sub:o}=a;return z(t.uid===o,r,"user-mismatch"),Jn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ut(r,"user-mismatch"),s}}/**
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
 */async function yx(t,e,n=!1){if(et(t.app))return Promise.reject(Ct(t));const r="signIn",i=await px(t,r,e),s=await Jn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function dm(t,e){return yx(nt(t),e)}async function vx(t,e){const n=W(t);return await hm(!1,n,e.providerId),Hv(n,e)}async function Ex(t,e){return _x(W(t),e)}/**
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
 */async function Z3(t,e){return gi(t,"POST","/v1/accounts:signInWithCustomToken",rt(t,e))}/**
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
 */async function eF(t,e){if(et(t.app))return Promise.reject(Ct(t));const n=nt(t),r=await Z3(n,{token:e,returnSecureToken:!0}),i=await Jn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class Kc{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Kv._fromServerResponse(e,n):"totpInfo"in n?Yv._fromServerResponse(e,n):Ut(e,"internal-error")}}class Kv extends Kc{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Kv(n)}}class Yv extends Kc{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Yv(n)}}/**
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
 */function fm(t,e,n){var r;z(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),z(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(z(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(z(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function $v(t){const e=nt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function tF(t,e,n){const r=nt(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&fm(r,i,n),await fc(r,i,"getOobCode",V3)}async function nF(t,e,n){await fx(W(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&$v(t),r})}async function rF(t,e){await P3(W(t),{oobCode:e})}async function Tx(t,e){const n=W(t),r=await fx(n,{oobCode:e}),i=r.requestType;switch(z(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":z(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":z(r.mfaInfo,n,"internal-error");default:z(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Kc._fromServerResponse(nt(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function iF(t,e){const{data:n}=await Tx(W(t),e);return n.email}async function sF(t,e,n){if(et(t.app))return Promise.reject(Ct(t));const r=nt(t),a=await fc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",mx).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&$v(t),l}),o=await Jn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(o.user),o}function aF(t,e,n){return et(t.app)?Promise.reject(Ct(t)):dm(W(t),Is.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&$v(t),r})}/**
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
 */async function oF(t,e,n){const r=nt(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(a,o){z(o.handleCodeInApp,r,"argument-error"),o&&fm(r,a,o)}s(i,n),await fc(r,i,"getOobCode",L3)}function lF(t,e){const n=cm.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function uF(t,e,n){if(et(t.app))return Promise.reject(Ct(t));const r=W(t),i=Is.credentialWithLink(e,n||hc());return z(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),dm(r,i)}/**
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
 */async function cF(t,e){return it(t,"POST","/v1/accounts:createAuthUri",rt(t,e))}/**
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
 */async function hF(t,e){const n=zv()?hc():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await cF(W(t),r);return i||[]}async function dF(t,e){const n=W(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&fm(n.auth,i,e);const{email:s}=await k3(n.auth,i);s!==t.email&&await t.reload()}async function fF(t,e,n){const r=W(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&fm(r.auth,s,n);const{email:a}=await U3(r.auth,s);a!==t.email&&await t.reload()}/**
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
 */async function mF(t,e){return it(t,"POST","/v1/accounts:update",e)}/**
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
 */async function pF(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=W(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},a=await ui(r,mF(r.auth,s));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const o=r.providerData.find(({providerId:l})=>l==="password");o&&(o.displayName=r.displayName,o.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function gF(t,e){const n=W(t);return et(n.auth.app)?Promise.reject(Ct(n.auth)):Ix(n,e,null)}function _F(t,e){return Ix(W(t),null,e)}async function Ix(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const a=await ui(t,x3(r,s));await t._updateTokensIfNecessary(a,!0)}/**
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
 */function yF(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const a=(n=(e=lm(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(a){const o=a!=="anonymous"&&a!=="custom"?a:null;return new bo(s,o)}}if(!r)return null;switch(r){case"facebook.com":return new vF(s,i);case"github.com":return new EF(s,i);case"google.com":return new TF(s,i);case"twitter.com":return new IF(s,i,t.screenName||null);case"custom":case"anonymous":return new bo(s,null);default:return new bo(s,r,i)}}class bo{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class bx extends bo{constructor(e,n,r,i){super(e,n,r),this.username=i}}class vF extends bo{constructor(e,n){super(e,"facebook.com",n)}}class EF extends bx{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class TF extends bo{constructor(e,n){super(e,"google.com",n)}}class IF extends bx{constructor(e,n,r){super(e,"twitter.com",n,r)}}function bF(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:yF(n)}/**
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
 */class qs{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new qs("enroll",e,n)}static _fromMfaPendingCredential(e){return new qs("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return qs._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return qs._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Qv{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=nt(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(o=>Kc._fromServerResponse(r,o));z(i.mfaPendingCredential,r,"internal-error");const a=qs._fromMfaPendingCredential(i.mfaPendingCredential);return new Qv(a,s,async o=>{const l=await o._process(r,a);delete i.mfaInfo,delete i.mfaPendingCredential;const c=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const h=await Jn._fromIdTokenResponse(r,n.operationType,c);return await r._updateCurrentUser(h.user),h;case"reauthenticate":return z(n.user,r,"internal-error"),Jn._forOperation(n.user,n.operationType,c);default:Ut(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function AF(t,e){var n;const r=W(t),i=e;return z(e.customData.operationType,r,"argument-error"),z((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Qv._fromError(r,i)}/**
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
 */function wF(t,e){return it(t,"POST","/v2/accounts/mfaEnrollment:start",rt(t,e))}function SF(t,e){return it(t,"POST","/v2/accounts/mfaEnrollment:finalize",rt(t,e))}function RF(t,e){return it(t,"POST","/v2/accounts/mfaEnrollment:withdraw",rt(t,e))}class Wv{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Kc._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Wv(e)}async getSession(){return qs._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await ui(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await ui(this.user,RF(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const kp=new WeakMap;function CF(t){const e=W(t);return kp.has(e)||kp.set(e,Wv._fromUser(e)),kp.get(e)}const df="__sak";/**
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
 */class Ax{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(df,"1"),this.storage.removeItem(df),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const NF=1e3,DF=10;class wx extends Ax{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ux(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,o,l)=>{this.notifyListeners(a,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);m3()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,DF):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},NF)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}wx.type="LOCAL";const Xv=wx;/**
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
 */class Sx extends Ax{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Sx.type="SESSION";const ma=Sx;/**
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
 */function xF(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class mm{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new mm(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const o=Array.from(a).map(async c=>c(n.origin,s)),l=await xF(o);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}mm.receivers=[];/**
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
 */function Yc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class OF{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((o,l)=>{const c=Yc("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(p.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function dt(){return window}function PF(t){dt().location.href=t}/**
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
 */function Jv(){return typeof dt().WorkerGlobalScope<"u"&&typeof dt().importScripts=="function"}async function MF(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kF(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function VF(){return Jv()?self:null}/**
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
 */const Rx="firebaseLocalStorageDb",LF=1,ff="firebaseLocalStorage",Cx="fbase_key";class $c{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function pm(t,e){return t.transaction([ff],e?"readwrite":"readonly").objectStore(ff)}function UF(){const t=indexedDB.deleteDatabase(Rx);return new $c(t).toPromise()}function p_(){const t=indexedDB.open(Rx,LF);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ff,{keyPath:Cx})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ff)?e(r):(r.close(),await UF(),e(await p_()))})})}async function fA(t,e,n){const r=pm(t,!0).put({[Cx]:e,value:n});return new $c(r).toPromise()}async function BF(t,e){const n=pm(t,!1).get(e),r=await new $c(n).toPromise();return r===void 0?null:r.value}function mA(t,e){const n=pm(t,!0).delete(e);return new $c(n).toPromise()}const FF=800,jF=3;class Nx{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await p_(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>jF)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Jv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=mm._getInstance(VF()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await MF(),!this.activeServiceWorker)return;this.sender=new OF(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kF()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await p_();return await fA(e,df,"1"),await mA(e,df),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>fA(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>BF(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>mA(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=pm(i,!1).getAll();return new $c(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),FF)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Nx.type="LOCAL";const pc=Nx;/**
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
 */function zF(t,e){return it(t,"POST","/v2/accounts/mfaSignIn:start",rt(t,e))}function qF(t,e){return it(t,"POST","/v2/accounts/mfaSignIn:finalize",rt(t,e))}/**
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
 */const GF=500,HF=6e4,Fh=1e12;class KF{constructor(e){this.auth=e,this.counter=Fh,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new YF(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Fh;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Fh;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Fh;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class YF{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;z(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=$F(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},HF)},GF))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function $F(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const Vp=hx("rcb"),QF=new zc(3e4,6e4);class WF{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=dt().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return z(XF(n),e,"argument-error"),this.shouldResolveImmediately(n)&&iA(dt().grecaptcha)?Promise.resolve(dt().grecaptcha):new Promise((r,i)=>{const s=dt().setTimeout(()=>{i(yt(e,"network-request-failed"))},QF.get());dt()[Vp]=()=>{dt().clearTimeout(s),delete dt()[Vp];const o=dt().grecaptcha;if(!o||!iA(o)){i(yt(e,"internal-error"));return}const l=o.render;o.render=(c,h)=>{const f=l(c,h);return this.counter++,f},this.hostLanguage=n,r(o)};const a=`${T3()}?${al({onload:Vp,render:"explicit",hl:n})}`;Gv(a).catch(()=>{clearTimeout(s),i(yt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=dt().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function XF(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class JF{async load(e){return new KF(e)}clearedOneInstance(){}}/**
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
 */const Dx="recaptcha",ZF={theme:"light",type:"image"};let e6=class{constructor(e,n,r=Object.assign({},ZF)){this.parameters=r,this.type=Dx,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=nt(e),this.isInvisible=this.parameters.size==="invisible",z(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;z(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new JF:new WF,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=a=>{a&&(this.tokenChangeListeners.delete(s),i(a))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){z(!this.parameters.sitekey,this.auth,"argument-error"),z(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),z(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=dt()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){z(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){z(zv()&&!Jv(),this.auth,"internal-error"),await t6(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await t3(this.auth);z(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return z(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function t6(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class Zv{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Js._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function n6(t,e,n){if(et(t.app))return Promise.reject(Ct(t));const r=nt(t),i=await gm(r,e,W(n));return new Zv(i,s=>dm(r,s))}async function r6(t,e,n){const r=W(t);await hm(!1,r,"phone");const i=await gm(r.auth,e,W(n));return new Zv(i,s=>vx(r,s))}async function i6(t,e,n){const r=W(t);if(et(r.auth.app))return Promise.reject(Ct(r.auth));const i=await gm(r.auth,e,W(n));return new Zv(i,s=>Ex(r,s))}async function gm(t,e,n){var r;const i=await n.verify();try{z(typeof i=="string",t,"argument-error"),z(n.type===Dx,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const a=s.session;if("phoneNumber"in s)return z(a.type==="enroll",t,"internal-error"),(await wF(t,{idToken:a.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{z(a.type==="signin",t,"internal-error");const o=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return z(o,t,"missing-multi-factor-info"),(await zF(t,{mfaPendingCredential:a.credential,mfaEnrollmentId:o,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:a}=await z3(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return a}}finally{n._reset()}}async function s6(t,e){const n=W(t);if(et(n.auth.app))return Promise.reject(Ct(n.auth));await Hv(n,e)}/**
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
 */let pa=class dd{constructor(e){this.providerId=dd.PROVIDER_ID,this.auth=nt(e)}verifyPhoneNumber(e,n){return gm(this.auth,e,W(n))}static credential(e,n){return Js._fromVerification(e,n)}static credentialFromResult(e){const n=e;return dd.credentialFromTaggedObject(n)}static credentialFromError(e){return dd.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Js._fromTokenResponse(n,r):null}};pa.PROVIDER_ID="phone";pa.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Ca(t,e){return e?Rn(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class eE extends _l{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Zr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Zr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function a6(t){return yx(t.auth,new eE(t),t.bypassAuthState)}function o6(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),_x(n,new eE(t),t.bypassAuthState)}async function l6(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),Hv(n,new eE(t),t.bypassAuthState)}/**
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
 */class xx{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:o}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return a6;case"linkViaPopup":case"linkViaRedirect":return l6;case"reauthViaPopup":case"reauthViaRedirect":return o6;default:Ut(this.auth,"internal-error")}}resolve(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const u6=new zc(2e3,1e4);async function c6(t,e,n){if(et(t.app))return Promise.reject(yt(t,"operation-not-supported-in-this-environment"));const r=nt(t);gl(t,e,_i);const i=Ca(r,n);return new Yr(r,"signInViaPopup",e,i).executeNotNull()}async function h6(t,e,n){const r=W(t);if(et(r.auth.app))return Promise.reject(yt(r.auth,"operation-not-supported-in-this-environment"));gl(r.auth,e,_i);const i=Ca(r.auth,n);return new Yr(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function d6(t,e,n){const r=W(t);gl(r.auth,e,_i);const i=Ca(r.auth,n);return new Yr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Yr extends xx{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Yr.currentPopupAction&&Yr.currentPopupAction.cancel(),Yr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){ir(this.filter.length===1,"Popup operations only handle one event");const e=Yc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(yt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(yt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,u6.get())};e()}}Yr.currentPopupAction=null;/**
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
 */const f6="pendingRedirect",xu=new Map;class m6 extends xx{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=xu.get(this.auth._key());if(!e){try{const r=await p6(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}xu.set(this.auth._key(),e)}return this.bypassAuthState||xu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function p6(t,e){const n=Px(e),r=Ox(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function tE(t,e){return Ox(t)._set(Px(e),"true")}function g6(){xu.clear()}function nE(t,e){xu.set(t._key(),e)}function Ox(t){return Rn(t._redirectPersistence)}function Px(t){return Xs(f6,t.config.apiKey,t.name)}/**
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
 */function _6(t,e,n){return y6(t,e,n)}async function y6(t,e,n){if(et(t.app))return Promise.reject(Ct(t));const r=nt(t);gl(t,e,_i),await r._initializationPromise;const i=Ca(r,n);return await tE(i,r),i._openRedirect(r,e,"signInViaRedirect")}function v6(t,e,n){return E6(t,e,n)}async function E6(t,e,n){const r=W(t);if(gl(r.auth,e,_i),et(r.auth.app))return Promise.reject(Ct(r.auth));await r.auth._initializationPromise;const i=Ca(r.auth,n);await tE(i,r.auth);const s=await Mx(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function T6(t,e,n){return I6(t,e,n)}async function I6(t,e,n){const r=W(t);gl(r.auth,e,_i),await r.auth._initializationPromise;const i=Ca(r.auth,n);await hm(!1,r,e.providerId),await tE(i,r.auth);const s=await Mx(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function b6(t,e){return await nt(t)._initializationPromise,_m(t,e,!1)}async function _m(t,e,n=!1){if(et(t.app))return Promise.reject(Ct(t));const r=nt(t),i=Ca(r,e),a=await new m6(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}async function Mx(t){const e=Yc(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const A6=10*60*1e3;class kx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!w6(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Vx(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(yt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=A6&&this.cachedEventUids.clear(),this.cachedEventUids.has(pA(e))}saveEventToCache(e){this.cachedEventUids.add(pA(e)),this.lastProcessedEventTime=Date.now()}}function pA(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Vx({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function w6(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vx(t);default:return!1}}/**
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
 */async function Lx(t,e={}){return it(t,"GET","/v1/projects",e)}/**
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
 */const S6=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,R6=/^https?/;async function C6(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Lx(t);for(const n of e)try{if(N6(n))return}catch{}Ut(t,"unauthorized-domain")}function N6(t){const e=hc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!R6.test(n))return!1;if(S6.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const D6=new zc(3e4,6e4);function gA(){const t=dt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function x6(t){return new Promise((e,n)=>{var r,i,s;function a(){gA(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gA(),n(yt(t,"network-request-failed"))},timeout:D6.get()})}if(!((i=(r=dt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=dt().gapi)===null||s===void 0)&&s.load)a();else{const o=hx("iframefcb");return dt()[o]=()=>{gapi.load?a():n(yt(t,"network-request-failed"))},Gv(`${b3()}?onload=${o}`).catch(l=>n(l))}}).catch(e=>{throw fd=null,e})}let fd=null;function O6(t){return fd=fd||x6(t),fd}/**
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
 */const P6=new zc(5e3,15e3),M6="__/auth/iframe",k6="emulator/auth/iframe",V6={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},L6=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function U6(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?qv(e,k6):`https://${t.config.authDomain}/${M6}`,r={apiKey:e.apiKey,appName:t.name,v:hi},i=L6.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${al(r).slice(1)}`}async function B6(t){const e=await O6(t),n=dt().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:U6(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:V6,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=yt(t,"network-request-failed"),o=dt().setTimeout(()=>{s(a)},P6.get());function l(){dt().clearTimeout(o),i(r)}r.ping(l).then(l,()=>{s(a)})}))}/**
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
 */const F6={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},j6=500,z6=600,q6="_blank",G6="http://localhost";class _A{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function H6(t,e,n,r=j6,i=z6){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const l=Object.assign(Object.assign({},F6),{width:r.toString(),height:i.toString(),top:s,left:a}),c=$e().toLowerCase();n&&(o=sx(c)?q6:n),rx(c)&&(e=e||G6,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[g,S])=>`${p}${g}=${S},`,"");if(f3(c)&&o!=="_self")return K6(e||"",o),new _A(null);const f=window.open(e||"",o,h);z(f,t,"popup-blocked");try{f.focus()}catch{}return new _A(f)}function K6(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Y6="__/auth/handler",$6="emulator/auth/handler",Q6=encodeURIComponent("fac");async function g_(t,e,n,r,i,s){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:hi,eventId:i};if(e instanceof _i){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",M2(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries(s||{}))a[h]=f}if(e instanceof yl){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(a.scopes=h.join(","))}t.tenantId&&(a.tid=t.tenantId);const o=a;for(const h of Object.keys(o))o[h]===void 0&&delete o[h];const l=await t._getAppCheckToken(),c=l?`#${Q6}=${encodeURIComponent(l)}`:"";return`${W6(t)}?${al(o).slice(1)}${c}`}function W6({config:t}){return t.emulator?qv(t,$6):`https://${t.authDomain}/${Y6}`}/**
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
 */const Lp="webStorageSupport";class X6{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ma,this._completeRedirectFn=_m,this._overrideRedirectResult=nE}async _openPopup(e,n,r,i){var s;ir((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await g_(e,n,r,hc(),i);return H6(e,a,Yc())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await g_(e,n,r,hc(),i);return PF(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ir(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await B6(e),r=new kx(e);return n.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Lp,{type:Lp},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Lp];a!==void 0&&n(!!a),Ut(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=C6(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ux()||ix()||Gc()}}const J6=X6;class Z6{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return vr("unexpected MultiFactorSessionType")}}}class rE extends Z6{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new rE(e)}_finalizeEnroll(e,n,r){return SF(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return qF(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Ux{constructor(){}static assertion(e){return rE._fromCredential(e)}}Ux.FACTOR_ID="phone";var yA="@firebase/auth",vA="1.7.9";/**
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
 */class ej{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function tj(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function nj(t){ai(new Xn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=r.options;z(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cx(t)},c=new v3(r,i,s,l);return R3(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ai(new Xn("auth-internal",e=>{const n=nt(e.getProvider("auth").getImmediate());return(r=>new ej(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),On(yA,vA,tj(t)),On(yA,vA,"esm2017")}/**
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
 */const rj=5*60;w2("authIdTokenMaxAge");function ij(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}E3({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=yt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",ij().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});nj("Browser");/**
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
 */function ga(){return window}/**
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
 */const sj=2e3;async function aj(t,e,n){var r;const{BuildInfo:i}=ga();ir(e.sessionId,"AuthEvent did not contain a session ID");const s=await hj(e.sessionId),a={};return Gc()?a.ibi=i.packageName:qc()?a.apn=i.packageName:Ut(t,"operation-not-supported-in-this-environment"),i.displayName&&(a.appDisplayName=i.displayName),a.sessionId=s,g_(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,a)}async function oj(t){const{BuildInfo:e}=ga(),n={};Gc()?n.iosBundleId=e.packageName:qc()?n.androidPackageName=e.packageName:Ut(t,"operation-not-supported-in-this-environment"),await Lx(t,n)}function lj(t){const{cordova:e}=ga();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,d3()?"_blank":"_system","location=yes"),n(i)})})}async function uj(t,e,n){const{cordova:r}=ga();let i=()=>{};try{await new Promise((s,a)=>{let o=null;function l(){var f;s();const p=(f=r.plugins.browsertab)===null||f===void 0?void 0:f.close;typeof p=="function"&&p(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function c(){o||(o=window.setTimeout(()=>{a(yt(t,"redirect-cancelled-by-user"))},sj))}function h(){(document==null?void 0:document.visibilityState)==="visible"&&c()}e.addPassiveListener(l),document.addEventListener("resume",c,!1),qc()&&document.addEventListener("visibilitychange",h,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",h,!1),o&&window.clearTimeout(o)}})}finally{i()}}function cj(t){var e,n,r,i,s,a,o,l,c,h;const f=ga();z(typeof((e=f==null?void 0:f.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),z(typeof((n=f==null?void 0:f.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),z(typeof((s=(i=(r=f==null?void 0:f.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),z(typeof((l=(o=(a=f==null?void 0:f.cordova)===null||a===void 0?void 0:a.plugins)===null||o===void 0?void 0:o.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),z(typeof((h=(c=f==null?void 0:f.cordova)===null||c===void 0?void 0:c.InAppBrowser)===null||h===void 0?void 0:h.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function hj(t){const e=dj(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function dj(t){if(ir(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const fj=20;class mj extends kx{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function pj(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:yj(),postBody:null,tenantId:t.tenantId,error:yt(t,"no-auth-event")}}function gj(t,e){return __()._set(y_(t),e)}async function EA(t){const e=await __()._get(y_(t));return e&&await __()._remove(y_(t)),e}function _j(t,e){var n,r;const i=Ej(e);if(i.includes("/__/auth/callback")){const s=md(i),a=s.firebaseError?vj(decodeURIComponent(s.firebaseError)):null,o=(r=(n=a==null?void 0:a.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=o?yt(o):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function yj(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<fj;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function __(){return Rn(Xv)}function y_(t){return Xs("authEvent",t.config.apiKey,t.name)}function vj(t){try{return JSON.parse(t)}catch{return null}}function Ej(t){const e=md(t),n=e.link?decodeURIComponent(e.link):void 0,r=md(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return md(i).link||i||r||n||t}function md(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return lo(n.join("?"))}/**
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
 */const Tj=500;class Ij{constructor(){this._redirectPersistence=ma,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=_m,this._overrideRedirectResult=nE}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new mj(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Ut(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){cj(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),g6(),await this._originValidation(e);const a=pj(e,r,i);await gj(e,a);const o=await aj(e,a,n),l=await lj(o);return uj(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=oj(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=ga(),a=setTimeout(async()=>{await EA(e),n.onEvent(TA())},Tj),o=async h=>{clearTimeout(a);const f=await EA(e);let p=null;f&&(h!=null&&h.url)&&(p=_j(f,h.url)),n.onEvent(p||TA())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,o);const l=i,c=`${s.packageName.toLowerCase()}://`;ga().handleOpenURL=async h=>{if(h.toLowerCase().startsWith(c)&&o({url:h}),typeof l=="function")try{l(h)}catch(f){console.error(f)}}}}const bj=Ij;function TA(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:yt("no-auth-event")}}/**
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
 */function Aj(t,e){nt(t)._logFramework(e)}var wj="@firebase/auth-compat",Sj="0.5.14";/**
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
 */const Rj=1e3;function Ou(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function Cj(){return Ou()==="http:"||Ou()==="https:"}function Bx(t=$e()){return!!((Ou()==="file:"||Ou()==="ionic:"||Ou()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function Nj(){return wy()||Ay()}function Dj(){return FR()&&(document==null?void 0:document.documentMode)===11}function xj(t=$e()){return/Edge\/\d+/.test(t)}function Oj(t=$e()){return Dj()||xj(t)}function Fx(){try{const t=self.localStorage,e=Yc();if(t)return t.setItem(e,"1"),t.removeItem(e),Oj()?Yu():!0}catch{return iE()&&Yu()}return!1}function iE(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Up(){return(Cj()||BR()||Bx())&&!Nj()&&Fx()&&!iE()}function jx(){return Bx()&&typeof document<"u"}async function Pj(){return jx()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},Rj);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function Mj(){return typeof window<"u"?window:null}/**
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
 */const An={LOCAL:"local",NONE:"none",SESSION:"session"},Wl=z,zx="persistence";function kj(t,e){if(Wl(Object.values(An).includes(e),t,"invalid-persistence-type"),wy()){Wl(e!==An.SESSION,t,"unsupported-persistence-type");return}if(Ay()){Wl(e===An.NONE,t,"unsupported-persistence-type");return}if(iE()){Wl(e===An.NONE||e===An.LOCAL&&Yu(),t,"unsupported-persistence-type");return}Wl(e===An.NONE||Fx(),t,"unsupported-persistence-type")}async function v_(t){await t._initializationPromise;const e=qx(),n=Xs(zx,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function Vj(t,e){const n=qx();if(!n)return[];const r=Xs(zx,t,e);switch(n.getItem(r)){case An.NONE:return[Wo];case An.LOCAL:return[pc,ma];case An.SESSION:return[ma];default:return[]}}function qx(){var t;try{return((t=Mj())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
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
 */const Lj=z;class qi{constructor(){this.browserResolver=Rn(J6),this.cordovaResolver=Rn(bj),this.underlyingResolver=null,this._redirectPersistence=ma,this._completeRedirectFn=_m,this._overrideRedirectResult=nE}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return jx()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return Lj(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await Pj();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function Gx(t){return t.unwrap()}function Uj(t){return t.wrapped()}/**
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
 */function Bj(t){return Hx(t)}function Fj(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new jj(t,AF(t,e))}else if(r){const i=Hx(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function Hx(t){const{_tokenResponse:e}=t instanceof Gt?t.customData:t;if(!e)return null;if(!(t instanceof Gt)&&"temporaryProof"in e&&"phoneNumber"in e)return pa.credentialFromResult(t);const n=e.providerId;if(!n||n===Ql.PASSWORD)return null;let r;switch(n){case Ql.GOOGLE:r=hr;break;case Ql.FACEBOOK:r=cr;break;case Ql.GITHUB:r=dr;break;case Ql.TWITTER:r=fr;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:a,pendingToken:o,nonce:l}=e;return!s&&!a&&!i&&!o?null:o?n.startsWith("saml.")?Xo._create(n,o):Rr._fromParams({providerId:n,signInMethod:n,pendingToken:o,idToken:i,accessToken:s}):new Io(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof Gt?r.credentialFromError(t):r.credentialFromResult(t)}function dn(t,e){return e.catch(n=>{throw n instanceof Gt&&Fj(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:Bj(n),additionalUserInfo:bF(n),user:$r.getOrCreate(i)}})}async function E_(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>dn(t,n.confirm(r))}}class jj{constructor(e,n){this.resolver=n,this.auth=Uj(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return dn(Gx(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class $r{constructor(e){this._delegate=e,this.multiFactor=CF(e)}static getOrCreate(e){return $r.USER_MAP.has(e)||$r.USER_MAP.set(e,new $r(e)),$r.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return dn(this.auth,vx(this._delegate,e))}async linkWithPhoneNumber(e,n){return E_(this.auth,r6(this._delegate,e,n))}async linkWithPopup(e){return dn(this.auth,d6(this._delegate,e,qi))}async linkWithRedirect(e){return await v_(nt(this.auth)),T6(this._delegate,e,qi)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return dn(this.auth,Ex(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return E_(this.auth,i6(this._delegate,e,n))}reauthenticateWithPopup(e){return dn(this.auth,h6(this._delegate,e,qi))}async reauthenticateWithRedirect(e){return await v_(nt(this.auth)),v6(this._delegate,e,qi)}sendEmailVerification(e){return dF(this._delegate,e)}async unlink(e){return await J3(this._delegate,e),this}updateEmail(e){return gF(this._delegate,e)}updatePassword(e){return _F(this._delegate,e)}updatePhoneNumber(e){return s6(this._delegate,e)}updateProfile(e){return pF(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return fF(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}$r.USER_MAP=new WeakMap;/**
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
 */const Xl=z;class T_{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Xl(r,"invalid-api-key",{appName:e.name}),Xl(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?qi:void 0;this._delegate=n.initialize({options:{persistence:zj(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(HB),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?$r.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){C3(this._delegate,e,n)}applyActionCode(e){return rF(this._delegate,e)}checkActionCode(e){return Tx(this._delegate,e)}confirmPasswordReset(e,n){return nF(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return dn(this._delegate,sF(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return hF(this._delegate,e)}isSignInWithEmailLink(e){return lF(this._delegate,e)}async getRedirectResult(){Xl(Up(),this._delegate,"operation-not-supported-in-this-environment");const e=await b6(this._delegate,qi);return e?dn(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){Aj(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:a}=IA(e,n,r);return this._delegate.onAuthStateChanged(i,s,a)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:a}=IA(e,n,r);return this._delegate.onIdTokenChanged(i,s,a)}sendSignInLinkToEmail(e,n){return oF(this._delegate,e,n)}sendPasswordResetEmail(e,n){return tF(this._delegate,e,n||void 0)}async setPersistence(e){kj(this._delegate,e);let n;switch(e){case An.SESSION:n=ma;break;case An.LOCAL:n=await Rn(pc)._isAvailable()?pc:Xv;break;case An.NONE:n=Wo;break;default:return Ut("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return dn(this._delegate,X3(this._delegate))}signInWithCredential(e){return dn(this._delegate,dm(this._delegate,e))}signInWithCustomToken(e){return dn(this._delegate,eF(this._delegate,e))}signInWithEmailAndPassword(e,n){return dn(this._delegate,aF(this._delegate,e,n))}signInWithEmailLink(e,n){return dn(this._delegate,uF(this._delegate,e,n))}signInWithPhoneNumber(e,n){return E_(this._delegate,n6(this._delegate,e,n))}async signInWithPopup(e){return Xl(Up(),this._delegate,"operation-not-supported-in-this-environment"),dn(this._delegate,c6(this._delegate,e,qi))}async signInWithRedirect(e){return Xl(Up(),this._delegate,"operation-not-supported-in-this-environment"),await v_(this._delegate),_6(this._delegate,e,qi)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return iF(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}T_.Persistence=An;function IA(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:a=>i(a&&$r.getOrCreate(a)),error:e,complete:n}}function zj(t,e){const n=Vj(t,e);if(typeof self<"u"&&!n.includes(pc)&&n.push(pc),typeof window<"u")for(const r of[Xv,ma])n.includes(r)||n.push(r);return n.includes(Wo)||n.push(Wo),n}/**
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
 */class sE{constructor(){this.providerId="phone",this._delegate=new pa(Gx(ar.auth()))}static credential(e,n){return pa.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}sE.PHONE_SIGN_IN_METHOD=pa.PHONE_SIGN_IN_METHOD;sE.PROVIDER_ID=pa.PROVIDER_ID;/**
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
 */const qj=z;class Gj{constructor(e,n,r=ar.app()){var i;qj((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new e6(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const Hj="auth-compat";function Kj(t){t.INTERNAL.registerComponent(new Xn(Hj,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new T_(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:ja.EMAIL_SIGNIN,PASSWORD_RESET:ja.PASSWORD_RESET,RECOVER_EMAIL:ja.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:ja.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:ja.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:ja.VERIFY_EMAIL}},EmailAuthProvider:Is,FacebookAuthProvider:cr,GithubAuthProvider:dr,GoogleAuthProvider:hr,OAuthProvider:Io,SAMLAuthProvider:cf,PhoneAuthProvider:sE,PhoneMultiFactorGenerator:Ux,RecaptchaVerifier:Gj,TwitterAuthProvider:fr,Auth:T_,AuthCredential:_l,Error:Gt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(wj,Sj)}Kj(ar);const Yj={apiKey:"AIzaSyC7ep2vb7UhYTAVZAj78WR2iQcRH_JNxQg",authDomain:"course-results-jesus.firebaseapp.com",projectId:"course-results-jesus",storageBucket:"course-results-jesus.appspot.com",messagingSenderId:"683397242327",appId:"1:683397242327:web:880331411333ec502a7f92",measurementId:"G-MEC27E63R5"};ar.initializeApp(Yj);const jh=ar.firestore();ar.storage();const Bp=ar.auth(),pd=()=>E.jsx("div",{className:"animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"}),bA=[{text:"لأَنَّهُ حَيْثُمَا اجْتَمَعَ اثْنَانِ أَوْ ثَلاَثَةٌ بِاسْمِي فَهُنَاكَ أَكُونُ فِي وَسْطِهِمْ",reference:"متى 18: 20"},{text:"أَسْتَطِيعُ كُلَّ شَيْءٍ فِي الْمَسِيحِ الَّذِي يُقَوِِّينِي.",reference:"فيلبي 4: 13"},{text:"اَلرَّبُّ رَاعِيَّ فَلاَ يُعْوِزُنِي شَيْءٌ.",reference:"مزمور 23: 1"},{text:"فِي الْعَالَمِ سَيَكُونُ لَكُمْ ضِيقٌ، وَلكِنْ ثِقُوا: أَنَا قَدْ غَلَبْتُ الْعَالَمَ.",reference:"يوحنا 16: 33"},{text:"لاَ تَخَفْ لأَنِّي مَعَكَ. لاَ تَتَلَفَّتْ لأَنِّي إِلهُكَ. قَدْ أَيَّدْتُكَ وَأَعَنْتُكَ وَعَضَدْتُكَ بِيَمِينِ بِرِّي.",reference:"إشعياء 41: 10"}],$j=()=>E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-gray-400 dark:text-gray-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 012-2h2a2 2 0 012 2v1m-4 0h4"})}),Qj=()=>{const[t,e]=$.useState({text:"",reference:""});return $.useEffect(()=>{const n=Math.floor(Math.random()*bA.length);e(bA[n])},[]),t.text?E.jsxs("div",{className:"w-full mt-10 pt-6 border-t border-[var(--card-border-rgba)] text-center",children:[E.jsx("h3",{className:"text-sm font-bold text-[rgb(var(--color-primary-light-text-rgb))]/90 mb-2 tracking-widest uppercase",children:"آية اليوم"}),E.jsxs("blockquote",{className:"text-white/80 text-lg",style:{fontFamily:"'Amiri', serif"},children:[E.jsxs("p",{children:['"',t.text,'"']}),E.jsxs("footer",{className:"mt-2 text-xs text-white/50",children:["(",t.reference,")"]})]})]}):null},Wj=({query:t,setQuery:e,onSearch:n,isLoading:r,error:i,onShowTutorial:s})=>{const a=o=>{o.preventDefault(),n()};return E.jsx("div",{className:"w-full flex items-center justify-center p-4",children:E.jsxs("div",{className:"relative w-full max-w-lg bg-[var(--card-bg-light-rgba)] dark:bg-[var(--card-bg-dark-rgba)] backdrop-blur-[var(--card-backdrop-blur)] rounded-2xl p-10 md:p-14 shadow-2xl border border-[var(--card-border-rgba)] text-center animate-fade-in-up",children:[E.jsx("h2",{className:"text-3xl lg:text-4xl font-bold text-white mb-3",style:{fontFamily:"'El Messiri', sans-serif"},children:"استعلم عن نتيجتك"}),E.jsx("p",{className:"text-white/80 mb-8 max-w-md mx-auto",children:"أدخل الكود الخاص بك وهو رقم العضوية الكنسية ."}),E.jsxs("form",{onSubmit:a,className:"w-full max-w-sm mx-auto",children:[E.jsxs("div",{className:"relative mb-4",children:[E.jsx("div",{className:"absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none",children:E.jsx($j,{})}),E.jsx("input",{type:"text",value:t,onChange:o=>e(o.target.value),placeholder:"الكود ( رقم العضوية الكنسية)",className:"w-full px-4 py-4 pr-12 text-lg text-[var(--main-text-color-light)] dark:text-white bg-white/80 dark:bg-white/10 border-2 border-transparent focus:bg-white dark:focus:bg-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary-rgb))] transition-all duration-300",disabled:r})]}),E.jsx("button",{type:"submit",className:"w-full px-8 py-4 bg-[rgb(var(--color-primary-rgb))] hover:bg-[rgb(var(--color-primary-accent-rgb))] text-white font-bold text-lg rounded-xl focus:outline-none focus:ring-4 focus:ring-[rgb(var(--color-primary-rgb))]/50 disabled:bg-[rgb(var(--color-primary-accent-rgb))] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/30",disabled:r,children:r?E.jsx(pd,{}):"بحث"})]}),i&&E.jsx("p",{className:"text-red-300 bg-red-900/50 p-2 rounded-md mt-4 font-semibold",children:i}),E.jsx("div",{className:"mt-8",children:E.jsxs("button",{onClick:s,className:"flex items-center justify-center gap-2 text-sm text-[rgb(var(--color-primary-light-text-rgb))] hover:text-white font-semibold hover:underline",children:[E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"شرح طريقة الاستخدام"]})}),E.jsx(Qj,{})]})})},Xj="https://i.postimg.cc/y8htBK2y/1.png",aE=({className:t,alt:e="شعار كنيسة القديس بولس الرسول",style:n})=>E.jsx("img",{src:Xj,alt:e,className:t,style:n}),Jj=t=>t>=90?"ممتاز":t>=80?"جيد جدًا":t>=70?"جيد":t>=60?"مقبول":"ناجح",AA={gold:{border:"#D4AF37",text:"#5D4037",header:"#4A2C2A",background:"#FDFBF5",frameAccent:"#EADCB3"},blue:{border:"#4A90E2",text:"#004085",header:"#002752",background:"#F0F8FF",frameAccent:"#B0C4DE"},green:{border:"#2E7D32",text:"#1B5E20",header:"#003300",background:"#F5FFF5",frameAccent:"#A5D6A7"},maroon:{border:"#880E4F",text:"#560027",header:"#4A001F",background:"#FFF5F8",frameAccent:"#F48FB1"}},Zj=({result:t,fontFamily:e,colorScheme:n,certificateDesign:r,fontColor:i,certificateRef:s,certificateTexts:a})=>{const o=AA[n]||AA.gold,c=((g,S)=>{const N={textShadow:"1px 1px 3px rgba(0, 0, 0, 0.25)"};if(S==="default")return{...N,color:g};switch(S){case"shinyGold":return{...N,color:"#B8860B"};case"royalBlue":return{...N,color:"#4169E1"};case"emeraldGreen":return{...N,color:"#2ECC71"};case"deepMaroon":return{...N,color:"#AD1457"};default:return{...N,color:g}}})(o.header,i),h={color:o.text},f=e==="'Amiri', serif"?"text-base sm:text-xl md:text-2xl leading-relaxed":"text-sm sm:text-lg md:text-xl leading-relaxed",p=({children:g})=>{const S="pt-0 pb-4 sm:pb-6 px-4 sm:px-6";switch(r){case"nader":case"rare":return E.jsx("div",{style:{backgroundImage:"url('https://i.postimg.cc/Fs1d8n0C/2.png')",backgroundSize:"100% 100%",backgroundRepeat:"no-repeat",backgroundPosition:"center"},className:"h-full flex flex-col pt-8 pb-6 px-10 sm:pt-10 sm:pb-8 sm:px-12",children:g});case"nader_new_ar":return E.jsx("div",{style:{backgroundImage:"url('https://i.postimg.cc/28Q2tymW/6.png')",backgroundSize:"100% 100%",backgroundRepeat:"no-repeat",backgroundPosition:"center"},className:"h-full flex flex-col pt-8 pb-6 px-10 sm:pt-10 sm:pb-8 sm:px-12",children:g});case"nader_new_en":return E.jsx("div",{style:{backgroundImage:"url('https://i.postimg.cc/hjJgzp5P/5.png')",backgroundSize:"100% 100%",backgroundRepeat:"no-repeat",backgroundPosition:"center"},className:"h-full flex flex-col pt-8 pb-6 px-10 sm:pt-10 sm:pb-8 sm:px-12",children:g});case"modern":return E.jsx("div",{style:{padding:"8px",border:`2px solid ${o.border}`},className:"h-full flex flex-col",children:E.jsx("div",{style:{border:`6px solid ${o.frameAccent}`},className:`h-full flex flex-col ${S}`,children:g})});case"formal":return E.jsx("div",{style:{padding:"4px",border:`1px solid ${o.border}`},className:"h-full flex flex-col",children:E.jsx("div",{style:{padding:"4px",border:`4px solid ${o.border}`},className:"h-full flex flex-col",children:E.jsx("div",{style:{border:`1px solid ${o.border}`},className:`h-full flex flex-col ${S}`,children:g})})});case"vintage":return E.jsx("div",{style:{padding:"4px",border:`1px solid ${o.frameAccent}`},className:"h-full flex flex-col",children:E.jsx("div",{style:{padding:"8px",border:`6px groove ${o.border}`},className:"h-full flex flex-col",children:E.jsx("div",{style:{border:`1px solid ${o.frameAccent}`},className:`h-full flex flex-col ${S}`,children:g})})});case"classic":default:return E.jsx("div",{style:{padding:"12px",border:`12px double ${o.border}`},className:`h-full flex flex-col ${S}`,children:g})}};return a.bodyLine2.replace(a.bodyLine3,t.courseName),E.jsx("div",{ref:s,className:"w-full max-w-5xl bg-white shadow-lg flex flex-col",style:{backgroundColor:o.background,aspectRatio:"297 / 210"},children:E.jsx(p,{children:E.jsxs("div",{className:"w-full h-full relative",children:[E.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundImage:"url('https://i.postimg.cc/3NwDhXRv/image.png')",backgroundSize:"35%",backgroundPosition:"center 65%",backgroundRepeat:"no-repeat",opacity:.1}}),E.jsxs("div",{className:"w-full h-full flex flex-col text-center",style:{fontFamily:e,position:"relative"},children:[E.jsxs("header",{className:"flex flex-row items-start justify-between gap-x-4 mb-2 sm:mb-4 md:mb-6 px-1 md:px-4",children:[E.jsx("img",{src:"https://i.postimg.cc/7YGfNYTP/Add-a-new-certificate-design-option-called-minimalist-with-a-simple-clean-border-and-minimal-deco.png",alt:"شعار مجتمع يسوع",className:"w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain flex-shrink-0"}),E.jsxs("div",{className:"text-center mt-0 sm:mt-2 md:mt-3",children:[E.jsx("h2",{className:"text-2xl sm:text-3xl md:text-5xl font-extrabold",style:{...c,fontFamily:"'Cairo', sans-serif"},children:a.mainTitle}),E.jsx("p",{className:"text-xs sm:text-base md:text-lg mt-5 sm:mt-6 font-semibold",style:{...h,fontFamily:"'Cairo', sans-serif"},children:a.subTitle1}),E.jsx("p",{className:"text-xs sm:text-base md:text-lg mt-1 font-semibold",style:{...h,fontFamily:"'Cairo', sans-serif"},children:a.subTitle2})]}),E.jsx(aE,{className:"w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain flex-shrink-0"})]}),E.jsxs("main",{className:"flex-grow flex flex-col items-center justify-center px-1 md:px-4",children:[E.jsx("p",{className:"mt-1 sm:mt-2 md:mt-4 text-xs sm:text-base md:text-lg",style:h,children:a.introLine}),E.jsx("h3",{className:"my-1 sm:my-2 md:my-4 text-xl sm:text-3xl md:text-4xl font-bold",style:{...c,fontFamily:e},children:t.name}),E.jsxs("p",{className:f,style:h,children:[a.bodyLine1," ",E.jsx("strong",{style:c,children:t.service})," ",a.bodyLine2," ",E.jsx("strong",{style:c,children:a.bodyLine3})," ",a.bodyLine4]}),E.jsxs("p",{className:`${f} mt-2 text-center`,style:h,children:[a.bodyLine5," ",E.jsx("strong",{style:c,children:typeof t.score=="number"?Jj(t.score):"ناجح"}),"."]})]}),E.jsxs("footer",{className:"mt-auto pt-2 sm:pt-4 md:pt-8 pb-4 sm:pb-6 md:pb-8 px-2 sm:px-4 md:px-8 flex justify-between items-center w-full",children:[E.jsxs("div",{className:"text-center",children:[E.jsx("p",{className:"text-[10px] sm:text-sm md:text-base font-semibold",style:h,children:a.patronageTitle}),E.jsx("p",{className:"text-[10px] sm:text-sm md:text-base whitespace-pre-wrap",style:h,children:a.patronName})]}),E.jsxs("div",{className:"text-center",children:[E.jsx("p",{className:"text-[10px] sm:text-sm md:text-base font-semibold",style:h,children:a.responsiblePriestTitle}),E.jsx("div",{className:"border-t mt-8 sm:mt-10 w-20 sm:w-32 md:w-44",style:{borderColor:o.text}})]})]})]})]})})})},e5={"'Noto Naskh Arabic', serif":"نسخ (Naskh)","'Cairo', sans-serif":"نادر (Cairo)","'Amiri', serif":"أميري (Amiri)","'El Messiri', sans-serif":"المسيري (El Messiri)","'Dancing Script', cursive":"Dancing Script","'Lobster', cursive":"Lobster"},t5={gold:"ذهبي وبني",blue:"أزرق ووميض",green:"أخضر وذهبي",maroon:"عنابي وذهبي"},n5={default:"لون التصميم الافتراضي",shinyGold:"ذهبي",royalBlue:"أزرق ملكي",emeraldGreen:"أخضر زمردي",deepMaroon:"عنابي غامق"},r5={classic:"كلاسيكي (مزدوج)",modern:"حديث (بسيط)",formal:"رسمي (متعدد)",vintage:"عتيق (زخارف قديمة)",rare:"الإطار الذهبي",nader_new_ar:"نادر",nader_new_en:"Nader"},i5=({fontFamily:t,setFontFamily:e,colorScheme:n,setColorScheme:r,certificateDesign:i,setCertificateDesign:s,fontColor:a,setFontColor:o})=>E.jsx("div",{className:"w-full max-w-5xl mb-6 bg-gray-50/80 backdrop-blur-sm p-4 rounded-lg border border-gray-200 shadow-sm",children:E.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:[E.jsxs("div",{children:[E.jsx("label",{htmlFor:"font-family",className:"block text-sm font-medium text-gray-700 mb-1",children:"نوع خط الاسم"}),E.jsx("select",{id:"font-family",value:t,onChange:l=>e(l.target.value),className:"w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500",children:Object.entries(e5).map(([l,c])=>E.jsx("option",{value:l,style:{fontFamily:l},children:c},l))})]}),E.jsxs("div",{children:[E.jsx("label",{htmlFor:"color-scheme",className:"block text-sm font-medium text-gray-700 mb-1",children:"نظام الألوان"}),E.jsx("select",{id:"color-scheme",value:n,onChange:l=>r(l.target.value),className:"w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500",children:Object.entries(t5).map(([l,c])=>E.jsx("option",{value:l,children:c},l))})]}),E.jsxs("div",{children:[E.jsx("label",{htmlFor:"font-color",className:"block text-sm font-medium text-gray-700 mb-1",children:"لون الخط"}),E.jsx("select",{id:"font-color",value:a,onChange:l=>o(l.target.value),className:"w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500",children:Object.entries(n5).map(([l,c])=>E.jsx("option",{value:l,children:c},l))})]}),E.jsxs("div",{children:[E.jsx("label",{htmlFor:"certificate-design",className:"block text-sm font-medium text-gray-700 mb-1",children:"تصميم الإطار"}),E.jsx("select",{id:"certificate-design",value:i,onChange:l=>s(l.target.value),className:"w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500",children:Object.entries(r5).map(([l,c])=>E.jsx("option",{value:l,children:c},l))})]})]})}),s5=({certData:t,onBackToResult:e,certificateTexts:n,customStyles:r})=>{const[i,s]=$.useState("'Noto Naskh Arabic', serif"),[a,o]=$.useState("blue"),[l,c]=$.useState("vintage"),[h,f]=$.useState("default"),[p,g]=$.useState(!1),[S,N]=$.useState(!1),{paperSize:P,qualityScale:T}=r,v=$.useRef(null),A={...n,bodyLine3:t.courseName},D=()=>{const j=v.current;if(!j||!window.html2canvas||!window.jspdf){alert("لا يمكن تحميل الشهادة الآن، يرجى المحاولة مرة أخرى.");return}g(!0);const{jsPDF:I}=window.jspdf;window.html2canvas(j,{scale:T,useCORS:!0,backgroundColor:null}).then(y=>{const b=y.toDataURL("image/png"),w=new I({orientation:"landscape",unit:"px",format:P}),C=w.internal.pageSize.getWidth(),x=w.internal.pageSize.getHeight();w.addImage(b,"PNG",0,0,C,x),w.save(`شهادة-${t.name}.pdf`)}).catch(y=>{console.error("Error generating PDF:",y),alert("حدث خطأ أثناء إنشاء ملف PDF.")}).finally(()=>{g(!1)})},U=()=>{const j=v.current;if(!j||!window.html2canvas){alert("لا يمكن حفظ الشهادة كصورة الآن، يرجى المحاولة مرة أخرى.");return}N(!0),window.html2canvas(j,{scale:T,useCORS:!0,backgroundColor:null}).then(I=>{const y=document.createElement("a");y.href=I.toDataURL("image/png"),y.download=`شهادة-${t.name}.png`,document.body.appendChild(y),y.click(),document.body.removeChild(y)}).catch(I=>{console.error("Error generating image:",I),alert("حدث خطأ أثناء إنشاء الصورة.")}).finally(()=>{N(!1)})};return E.jsxs("div",{className:"flex flex-col items-center w-full",children:[E.jsx("div",{className:"no-print w-full",children:E.jsx(i5,{fontFamily:i,setFontFamily:s,colorScheme:a,setColorScheme:o,certificateDesign:l,setCertificateDesign:c,fontColor:h,setFontColor:f})}),E.jsx("div",{id:"certificate-print-area",className:"w-full mt-4 sm:mt-6",children:E.jsx(Zj,{result:{name:t.name,service:t.service,score:t.score,courseName:t.courseName},fontFamily:i,colorScheme:a,certificateDesign:l,fontColor:h,certificateRef:v,certificateTexts:A})}),E.jsxs("div",{className:"flex flex-col sm:flex-row justify-center items-center gap-4 mt-4 sm:mt-6 w-full max-w-5xl no-print",children:[E.jsx("button",{onClick:D,disabled:p||S,className:"w-full sm:w-auto bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 transition-transform transform hover:scale-105 disabled:bg-green-300 disabled:cursor-wait",children:p?"جاري التحميل...":"حفظ الشهادة PDF"}),E.jsx("button",{onClick:U,disabled:p||S,className:"w-full sm:w-auto bg-sky-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-75 transition-transform transform hover:scale-105 disabled:bg-sky-300 disabled:cursor-wait",children:S?"جاري الحفظ...":"حفظ الشهادة كصورة"}),E.jsx("button",{onClick:e,className:"w-full sm:w-auto bg-gray-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition-transform transform hover:scale-105",children:"العودة للنتيجة"})]})]})},wA=()=>E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"1.5",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0m-7.072 0L3 21m18-9a9 9 0 11-18 0 9 9 0 0118 0z"})}),a5=()=>E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),Kx=({className:t="h-6 w-6"})=>E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 012-2h2a2 2 0 012 2v1m-4 0h4"})}),o5=()=>E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 text-slate-300 dark:text-slate-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),l5=()=>E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"1.5",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})}),u5=()=>E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"1.5",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.52 4.674c.3.921-.755 1.688-1.54 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976-2.888c-.784.57-1.838-.197-1.539-1.118l1.52-4.674a1 1 0 00-.363-1.118L2.98 9.11c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.52-4.674z"})}),c5=()=>E.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"1.5",children:[E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 14l9-5-9-5-9 5 9 5z"}),E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"}),E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 14v6m-4-3v3m8-3v3"})]}),SA=["bg-blue-500 text-white","bg-emerald-500 text-white","bg-amber-500 text-black","bg-rose-500 text-white","bg-violet-500 text-white","bg-cyan-500 text-white","bg-fuchsia-500 text-white","bg-lime-600 text-white","bg-teal-500 text-white","bg-orange-500 text-white","bg-indigo-500 text-white","bg-pink-500 text-white"],h5=t=>{let e=0;for(let r=0;r<t.length;r++)e=t.charCodeAt(r)+((e<<5)-e);const n=Math.abs(e%SA.length);return SA[n]},gc="bg-[var(--card-bg-light-rgba)] dark:bg-[var(--card-bg-dark-rgba)] backdrop-blur-[var(--card-backdrop-blur)] rounded-2xl shadow-lg border-2",Yx=t=>t==="غائب"||t===0?{grade:"غائب",borderColor:"border-red-500",bgColor:"bg-red-500",textColor:"text-red-300",pointColor:"fill-red-500"}:t>=90?{grade:"ممتاز",borderColor:"border-green-500",bgColor:"bg-green-500",textColor:"text-green-300",pointColor:"fill-green-400"}:t>=80?{grade:"جيد جداً",borderColor:"border-sky-500",bgColor:"bg-sky-500",textColor:"text-sky-300",pointColor:"fill-sky-400"}:t>=70?{grade:"جيد",borderColor:"border-amber-500",bgColor:"bg-amber-500",textColor:"text-amber-300",pointColor:"fill-amber-400"}:t>=60?{grade:"مقبول",borderColor:"border-orange-500",bgColor:"bg-orange-500",textColor:"text-orange-300",pointColor:"fill-orange-400"}:{grade:"ناجح",borderColor:"border-slate-500",bgColor:"bg-slate-500",textColor:"text-slate-300",pointColor:"fill-slate-400"},d5=({services:t,onSelect:e,onClose:n})=>_f.createPortal(E.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300",onClick:n,children:E.jsxs("div",{className:"bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl w-full max-w-lg m-4 animate-fade-in-up",onClick:r=>r.stopPropagation(),role:"dialog","aria-modal":"true","aria-labelledby":"service-select-title",children:[E.jsx("h3",{id:"service-select-title",className:"text-xl font-bold text-[var(--main-text-color-light)] dark:text-[var(--main-text-color-dark)] mb-2",children:"اختر الخدمة للشهادة"}),E.jsx("p",{className:"text-slate-600 dark:text-slate-300 mb-6",children:"لقد وجدنا أنك تخدم في أكثر من خدمة. يرجى اختيار اسم الخدمة التي ترغب في ظهورها على شهادة التقدير."}),E.jsx("div",{className:"space-y-3 max-h-60 overflow-y-auto pr-2",children:t.map(r=>E.jsxs("button",{onClick:()=>e(r),className:"w-full text-right px-4 py-3 bg-gray-50 dark:bg-slate-700 text-[var(--main-text-color-light)] dark:text-[var(--main-text-color-dark)] font-semibold rounded-lg hover:bg-[rgb(var(--color-primary-light-rgb))] hover:text-[rgb(var(--color-primary-dark-text-rgb))] dark:hover:bg-slate-600 transition-all duration-200 flex items-center gap-3 border border-gray-200 dark:border-slate-600",children:[E.jsx(o5,{}),E.jsx("span",{children:r})]},r))})]})}),document.body),Fp=({icon:t,value:e,label:n,valueLabel:r,borderColorClass:i})=>E.jsxs("div",{className:`${gc} border-l-8 border-b-8 ${i} p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`,children:[E.jsx("div",{className:"text-white",children:t}),E.jsxs("p",{className:"text-4xl font-bold text-white mt-2",children:[e,E.jsx("span",{className:"text-xl text-white/80",children:r})]}),E.jsx("p",{className:"text-sm text-white/80 mt-1",children:n})]}),f5=({result:t,onInitiateCertificate:e})=>{const{grade:n,borderColor:r,bgColor:i,textColor:s}=Yx(t.score),a=Math.round(t.attendance<=1?t.attendance*100:t.attendance);return E.jsxs("div",{className:`${gc} border-l-8 border-b-8 ${r} p-6 mb-6`,children:[E.jsxs("div",{className:"flex justify-between items-center mb-4",children:[E.jsx("h3",{className:`text-xl font-bold text-white px-4 py-1.5 rounded-lg ${i}`,children:t.courseName}),E.jsx("span",{className:`font-bold text-lg text-white ${i} px-4 py-1.5 rounded-full`,children:n})]}),E.jsxs("div",{className:"grid grid-cols-2 gap-4 items-center my-6",children:[E.jsxs("div",{className:"text-center",children:[E.jsx("p",{className:"text-slate-200 font-semibold text-base",children:"الحاضر"}),E.jsxs("p",{className:"text-white font-bold text-3xl mt-1",children:[a,"%"]}),E.jsx("div",{className:"w-full bg-gray-200/20 rounded-full h-2.5 mt-2",children:E.jsx("div",{className:`${i} h-2.5 rounded-full`,style:{width:`${a}%`}})})]}),E.jsxs("div",{className:"text-center",children:[E.jsx("p",{className:"text-slate-200 font-semibold text-base",children:"الدرجة"}),t.score!=="غائب"?E.jsxs("p",{className:"text-white font-bold text-3xl mt-1",children:[E.jsx("span",{className:s,children:t.score}),E.jsx("span",{className:"text-white/70",children:" / 100"})]}):E.jsx("p",{className:`text-3xl font-bold mt-1 ${s}`,children:"غائب"})]})]}),t.score!=="غائب"&&E.jsx("div",{className:"text-center mt-6",children:E.jsx("button",{onClick:()=>e(t),className:"px-8 py-3 bg-[rgb(var(--color-primary-rgb))] text-white font-bold rounded-lg hover:bg-[rgb(var(--color-primary-accent-rgb))] transition-transform transform hover:scale-105 shadow-lg",children:"إصدار الشهادة"})})]})},m5=({profile:t,onGenerateMessage:e,motivationalMessage:n,isMessageLoading:r,onGenerateAdvice:i,spiritualAdvice:s,isAdviceLoading:a,onGenerateSpecialMessage:o,specialMessage:l,isSpecialMessageLoading:c})=>{const h=r||a||c,f=l||s||n,p=$.useMemo(()=>{if(!t||!t.results||t.results.length===0)return!1;const g=[...t.results].sort((N,P)=>P.year-N.year)[0];return g?(typeof g.attendance=="number"?g.attendance<=1?g.attendance*100:g.attendance:0)<50:!1},[t]);return E.jsxs("div",{className:`my-8 ${gc} border-transparent p-6`,children:[E.jsxs("h3",{className:"text-xl font-bold text-white dark:text-slate-100 mb-6 text-center flex items-center justify-center gap-3",children:[E.jsx(wA,{}),"المرشد الروحي الذكي"]}),E.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[E.jsxs("button",{onClick:e,disabled:h,className:"w-full flex items-center justify-center gap-2 px-4 py-3 bg-amber-500/80 text-white font-semibold rounded-lg hover:bg-amber-600 transition disabled:opacity-50 disabled:cursor-not-allowed",children:[r?E.jsx(pd,{}):E.jsx(wA,{}),E.jsx("span",{children:"رسالة تشجيع"})]}),E.jsxs("button",{onClick:i,disabled:h,className:"w-full flex items-center justify-center gap-2 px-4 py-3 bg-teal-500/80 text-white font-semibold rounded-lg hover:bg-teal-600 transition disabled:opacity-50 disabled:cursor-not-allowed",children:[a?E.jsx(pd,{}):E.jsx(a5,{}),E.jsx("span",{children:"نصيحة روحية"})]}),p&&E.jsxs("button",{onClick:o,disabled:h,className:"w-full md:col-span-2 flex items-center justify-center gap-2 px-4 py-3 bg-rose-500/80 text-white font-semibold rounded-lg hover:bg-rose-600 transition disabled:opacity-50 disabled:cursor-not-allowed",children:[c?E.jsx(pd,{}):E.jsx(Kx,{className:"h-5 w-5"}),E.jsx("span",{children:"رسالة شخصية"})]})]}),E.jsx("div",{className:"mt-6 pt-6 border-t border-[var(--card-border-rgba)]",children:E.jsx("div",{className:"min-h-[10rem] flex items-center justify-center text-center",children:h?E.jsxs("div",{className:"flex flex-col items-center justify-center",role:"status",children:[E.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-slate-500"}),E.jsx("p",{className:"text-slate-400 mt-3 text-sm",children:"المرشد الذكي يفكر..."})]}):f?E.jsx("blockquote",{className:"relative w-full animate-fade-in-up",children:E.jsx("p",{className:"text-lg md:text-xl text-white dark:text-slate-100 leading-loose whitespace-pre-wrap",style:{fontFamily:"'Amiri', serif"},children:f})}):E.jsx("p",{className:"text-slate-300 dark:text-slate-400",children:"اختر إحدى الخيارات أعلاه لاكتشاف رسالة ملهمة أو نصيحة روحية."})})})]})},p5=({results:t})=>{const[e,n]=$.useState(null),r=$.useMemo(()=>t.map(T=>({...T,score:T.score==="غائب"?0:T.score})).filter(T=>typeof T.score=="number").sort((T,v)=>v.year-T.year||v.courseName.localeCompare(T.courseName)),[t]);if(r.length<2)return E.jsx("p",{className:"text-center text-slate-400 py-8",children:"تحتاج إلى نتيجتين على الأقل لعرض رحلة الصعود."});const i=800,s=400,a={top:50,right:60,bottom:80,left:40},o=i-a.left-a.right,l=s-a.top-a.bottom,c=T=>a.left+o-T/(r.length-1)*o,h=T=>a.top+l-T/100*l,f=r.map((T,v)=>`${v===0?"M":"L"} ${c(v)} ${h(T.score)}`).join(" "),p=`${f} L ${c(r.length-1)} ${s-a.bottom} L ${c(0)} ${s-a.bottom} Z`,g=[{score:100,label:"100"},{score:90,label:"ممتاز"},{score:80,label:"جيد جداً"},{score:70,label:"جيد"},{score:60,label:"مقبول"},{score:0,label:"0"}],S=r[0],N=S?c(0):0,P=S?h(S.score):0;return E.jsx("div",{className:"w-full overflow-x-auto py-4 flex justify-start",children:E.jsxs("svg",{viewBox:`0 0 ${i} ${s}`,className:"min-w-[${width}px] font-sans",onClick:()=>n(null),children:[E.jsxs("defs",{children:[E.jsxs("linearGradient",{id:"pathGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[E.jsx("stop",{offset:"0%",stopColor:"rgb(var(--color-primary-accent-rgb))"}),E.jsx("stop",{offset:"100%",stopColor:"rgb(var(--color-primary-rgb))"})]}),E.jsxs("linearGradient",{id:"areaGradient",x1:"0",y1:"0",x2:"0",y2:"1",children:[E.jsx("stop",{offset:"0%",stopColor:"rgb(var(--color-primary-accent-rgb))",stopOpacity:"0.1"}),E.jsx("stop",{offset:"100%",stopColor:"rgb(var(--color-primary-rgb))",stopOpacity:"0.01"})]})]}),E.jsx("path",{d:"M0 300 C 150 200, 250 350, 400 250 S 550 150, 700 220 L 800 180 V 400 H 0 Z",fill:"rgba(100, 116, 139, 0.05)"}),g.map(({score:T,label:v})=>E.jsxs("g",{children:[E.jsx("line",{x1:a.left,y1:h(T),x2:i-a.right,y2:h(T),stroke:"rgba(148, 163, 179, 0.6)",strokeWidth:"1",strokeDasharray:"4 4"}),E.jsx("text",{x:i-a.right+8,y:h(T)+4,fill:"rgb(148, 163, 179)",className:"text-xs font-semibold",children:v})]},T)),E.jsx("path",{d:p,fill:"url(#areaGradient)"}),E.jsx("path",{d:f,fill:"none",stroke:"url(#pathGradient)",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",className:"animate-draw-line"}),r.map((T,v)=>{const{pointColor:A}=Yx(T.score);return E.jsxs("g",{onClick:D=>{D.stopPropagation(),n(e===v?null:v)},children:[E.jsx("circle",{cx:c(v),cy:h(T.score),r:"12",fill:"transparent",className:"cursor-pointer"}),E.jsx("circle",{cx:c(v),cy:h(T.score),r:e===v?8:5,className:`${A} stroke-slate-800/50 transition-all duration-200 cursor-pointer`,strokeWidth:"2"})]},v)}),E.jsxs("g",{transform:`translate(${N}, ${P})`,children:[E.jsx("circle",{cx:"0",cy:"-14",r:"4",fill:"white"}),E.jsx("path",{d:"M -5 -12 L 5 -12 L 0 -4 Z",fill:"white"})]}),e!==null&&(()=>{const T=r[e],v=c(e),A=h(T.score),D=`${T.courseName} (${T.year})  |  ${T.score}/100`,U=D.length*6.5+20,j=36,I=10;let y=A-20,b=-j;y+b<I&&(y=A+20,b=0);let w=-U/2;if(v+w+U>i-I){const C=v+w+U-(i-I);w-=C}if(v+w<I){const C=I-(v+w);w+=C}return E.jsxs("g",{transform:`translate(${v}, ${y})`,className:"pointer-events-none",children:[E.jsx("rect",{x:w,y:b,width:U,height:j,rx:"10",fill:"rgba(30, 41, 59, 0.95)",stroke:"rgba(255,255,255,0.2)",strokeWidth:"1"}),E.jsx("text",{x:w+U/2,y:b+j/2,textAnchor:"middle",alignmentBaseline:"middle",fill:"white",className:"text-xs font-bold",style:{direction:"rtl"},children:D})]})})()]})})},g5=t=>{const{profile:e,onShowCertificate:n,onNewSearch:r}=t,[i,s]=$.useState(null),{servant:a,results:o}=e,l=$.useMemo(()=>{if(!o||o.length===0)return{avgAttendance:0,avgScore:0,attendedCourses:0,totalCourses:0};const g=o.reduce((D,U)=>{const j=typeof U.attendance=="number"?U.attendance:0,I=j<=1?j*100:j;return D+I},0),S=Math.round(g/o.length),N=o.filter(D=>typeof D.score=="number"),P=N.reduce((D,U)=>D+U.score,0),T=N.length>0?Math.round(P/N.length):0,v=N.length,A=o.length;return{avgAttendance:S,avgScore:T,attendedCourses:v,totalCourses:A}},[o]);$.useEffect(()=>(!!i?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[i]);const h=[...$.useMemo(()=>{const g=new Set;return o.filter(S=>{const N=`${S.courseName}|${S.year}`;return g.has(N)?!1:(g.add(N),!0)})},[o])].sort((g,S)=>S.year-g.year),f=g=>{const S=(Array.isArray(a.allServices)&&a.allServices.length>0?a.allServices:[a.primaryService]).filter(Boolean);S.length>1?s(g):n({name:a.name,service:S[0]||"خدمة غير محددة",courseName:g.courseName,score:g.score})},p=g=>{i&&n({name:a.name,service:g,courseName:i.courseName,score:i.score}),s(null)};return E.jsxs("div",{className:"animate-fade-in-up p-4 w-full max-w-4xl mx-auto",children:[i&&E.jsx(d5,{services:(Array.isArray(a.allServices)&&a.allServices.length>0?a.allServices:[a.primaryService]).filter(Boolean),onSelect:p,onClose:()=>s(null)}),E.jsxs("div",{className:`${gc} border-transparent p-6 mb-8 flex items-center justify-between gap-6`,children:[E.jsx("div",{className:"flex-shrink-0",children:E.jsx("img",{src:a.avatarUrl||"https://i.postimg.cc/9XJjqvFn/tsmym-bdwn-ʿnwan.png",alt:`صورة ${a.name}`,className:"w-32 h-32 rounded-full object-cover border-4 border-white/20 shadow-lg"})}),E.jsxs("div",{className:"flex-grow text-right",children:[E.jsx("h2",{className:"text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent",style:{fontFamily:"'El Messiri', sans-serif"},children:a.name}),E.jsxs("div",{className:"inline-flex items-center gap-2 mt-3 bg-[rgb(var(--color-primary-rgb))] text-white px-4 py-2 rounded-full text-lg font-semibold",children:[E.jsx(Kx,{className:"h-6 w-6"}),E.jsxs("span",{children:["الكود: ",a.code]})]}),E.jsx("div",{className:"flex flex-wrap items-center justify-end gap-2 mt-4",children:(Array.isArray(a.allServices)&&a.allServices.length>0?a.allServices:[a.primaryService]).filter(Boolean).map(g=>E.jsx("span",{className:`px-4 py-1.5 text-base font-semibold rounded-full ${h5(g)}`,children:g},g))})]})]}),E.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-12",children:[E.jsx(Fp,{icon:E.jsx(l5,{}),value:`${l.avgAttendance}`,valueLabel:"%",label:"متوسط الحضور",borderColorClass:"border-sky-400"}),E.jsx(Fp,{icon:E.jsx(u5,{}),value:`${l.avgScore}`,valueLabel:"/100",label:"متوسط الدرجات",borderColorClass:"border-amber-400"}),E.jsx(Fp,{icon:E.jsx(c5,{}),value:`${l.attendedCourses}/${l.totalCourses}`,label:"كورسات تم حضورها",borderColorClass:"border-emerald-400"})]}),h.map((g,S)=>E.jsx("div",{style:{animationDelay:`${S*100}ms`},children:E.jsx(f5,{result:g,onInitiateCertificate:f})},`${g.courseName}-${g.year}`)),E.jsxs("div",{className:`${gc} border-transparent p-6 mt-12`,children:[E.jsx("h3",{className:"text-2xl font-bold text-white dark:text-slate-100 mb-4 text-center",children:"رحلة الصعود"}),E.jsx("p",{className:"text-center text-lg text-slate-100 max-w-2xl mx-auto mb-6",children:"هذا الرسم يصور رحلتك التعليمية عبر الكورسات. كل نقطة مضيئة تمثل إنجازاً في كورس معين. حرك مؤشر الفأرة فوق النقاط (أو المسها على شاشة الموبايل) لاكتشاف اسم الكورس ودرجتك. الصعود يعكس تقدمك، والهبوط قد يشير إلى غياب أو تحدٍ واجهته."}),E.jsx(p5,{results:e.results})]}),E.jsx(m5,{...t}),E.jsx("div",{className:"text-center",children:E.jsxs("button",{onClick:r,className:"mt-12 px-6 py-3 bg-[var(--card-bg-light-rgba)] dark:bg-[var(--card-bg-dark-rgba)] text-white font-semibold rounded-lg hover:bg-black/20 dark:hover:bg-black/30 backdrop-blur-md border border-[var(--card-border-rgba)] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 mx-auto",children:[E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 19l-7-7m0 0l7-7m-7 7h18"})}),E.jsx("span",{children:"بحث جديد"})]})})]})},_5=({onClose:t,onLogin:e,isLoggingIn:n,loginError:r})=>{const[i,s]=$.useState(""),[a,o]=$.useState("");$.useEffect(()=>{const c=localStorage.getItem("loginEmail");c&&s(c)},[]);const l=c=>{c.preventDefault(),e(i,a)};return _f.createPortal(E.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300",children:E.jsxs("div",{className:"bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm m-4 animate-fade-in-up",role:"dialog","aria-modal":"true","aria-labelledby":"login-modal-title",children:[E.jsxs("div",{className:"text-center",children:[E.jsx(aE,{className:"w-24 h-24 object-contain mx-auto mb-4"}),E.jsx("h3",{id:"login-modal-title",className:"text-xl font-bold text-slate-800",children:"دخول المسؤولين"}),E.jsx("p",{className:"text-slate-600 mb-6",children:"يرجى تسجيل الدخول للوصول إلى لوحة التحكم."})]}),E.jsxs("form",{onSubmit:l,noValidate:!0,children:[E.jsxs("div",{className:"space-y-4",children:[E.jsxs("div",{children:[E.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"البريد الإلكتروني"}),E.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,value:i,onChange:c=>s(c.target.value),className:"w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"})]}),E.jsxs("div",{children:[E.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"كلمة السر"}),E.jsx("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,value:a,onChange:c=>o(c.target.value),className:"w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"})]})]}),r&&E.jsx("p",{className:"text-red-500 mt-4 text-sm font-semibold text-center",role:"alert",children:r}),E.jsxs("div",{className:"flex justify-end items-center gap-4 mt-8",children:[E.jsx("button",{type:"button",onClick:t,disabled:n,className:"px-5 py-2 bg-gray-100 text-slate-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50",children:"إلغاء"}),E.jsx("button",{type:"submit",disabled:n||!i||!a,className:"w-28 px-5 py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors disabled:bg-indigo-300 disabled:cursor-wait flex justify-center items-center",children:n?E.jsx("div",{className:"animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"}):"دخول"})]})]})]})}),document.body)},y5={success:E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-green-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),error:E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-red-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})}),info:E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-blue-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})},v5={success:"bg-green-50 border-green-200 dark:bg-green-900/30 dark:border-green-700",error:"bg-red-50 border-red-200 dark:bg-red-900/30 dark:border-red-700",info:"bg-blue-50 border-blue-200 dark:bg-blue-900/30 dark:border-blue-700"},E5={success:"text-gray-800 dark:text-green-200",error:"text-gray-800 dark:text-red-200",info:"text-gray-800 dark:text-blue-200"},T5=({message:t,type:e,onDismiss:n})=>{const[r,i]=$.useState(!1);$.useEffect(()=>{const a=setTimeout(()=>{i(!0);const o=setTimeout(n,300);return()=>clearTimeout(o)},4e3);return()=>clearTimeout(a)},[n]);const s=()=>{i(!0),setTimeout(n,300)};return E.jsxs("div",{className:`
        w-full max-w-sm p-4 rounded-xl shadow-lg border flex items-start gap-4 transition-all duration-300 ease-in-out
        ${v5[e]}
        ${r?"opacity-0 -translate-x-full":"opacity-100 translate-x-0"}
      `,style:{animation:"toast-in-left 0.5s ease"},children:[E.jsx("div",{className:"flex-shrink-0",children:y5[e]}),E.jsx("div",{className:"flex-grow",children:E.jsx("p",{className:`text-sm font-semibold ${E5[e]}`,children:t})}),E.jsx("button",{onClick:s,className:"text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 flex-shrink-0",children:E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]})},$x=$.createContext(void 0),j5=()=>{const t=$.useContext($x);if(!t)throw new Error("useToast must be used within a ToastProvider");return t},I5=({children:t})=>{const[e,n]=$.useState([]),r=$.useCallback((s,a)=>{const o=Date.now();n(l=>[...l,{id:o,message:s,type:a}])},[]),i=$.useCallback(s=>{n(a=>a.filter(o=>o.id!==s))},[]);return E.jsxs($x.Provider,{value:{addToast:r},children:[t,_f.createPortal(E.jsx("div",{className:"fixed top-5 left-5 z-[100] w-full max-w-sm space-y-3",children:e.map(s=>E.jsx(T5,{message:s.message,type:s.type,onDismiss:()=>i(s.id)},s.id))}),document.body)]})},b5=$.lazy(()=>xR(()=>import("./AdminView-BMXvkNx0.js"),[])),A5=$.lazy(()=>xR(()=>import("./TutorialModal-Zz6LTBmx.js"),[])),jp=(t,e)=>{console.error("Error during content generation:",t),e("عفواً، خدمة الرسائل الذكية غير متاحة حالياً بسبب مشكلة في الإعدادات. يرجى التواصل مع مسؤول الخدمة.")},zp="https://i.postimg.cc/4yWkhPNC/0c86e3d51827469990f639e43138f4ba.jpg",w5=()=>{const[t,e]=$.useState(""),[n,r]=$.useState(null),[i,s]=$.useState(!1),[a,o]=$.useState(""),[l,c]=$.useState(null),[h,f]=$.useState(""),[p,g]=$.useState(!1),[S,N]=$.useState(""),[P,T]=$.useState(!1),[v,A]=$.useState(""),[D,U]=$.useState(!1),[j,I]=$.useState(!1),[y,b]=$.useState(!0),[w,C]=$.useState(!1),[x,R]=$.useState(!1),[vn,Kt]=$.useState(""),[K,ne]=$.useState(!1),[ee,Re]=$.useState(()=>typeof window<"u"&&localStorage.getItem("theme")||"indigo"),[De,yi]=$.useState(()=>typeof window<"u"?localStorage.getItem("darkMode")==="true":!1),[Tt,We]=$.useState(()=>typeof window<"u"&&localStorage.getItem("backgroundUrl")||zp),Vn=["https://i.postimg.cc/Sx5hC2FK/2642ef1dd290b3ad3d2a1193e3110ae0.jpg","https://i.postimg.cc/Y043yK6L/fd3ab396167b3ee5ec021a44cf182f7d.jpg","https://i.postimg.cc/CLBPcD76/d4d5bd701ebd58c342ef9f74886e2cbc.jpg",zp],[an,ym]=$.useState(()=>{if(typeof window<"u"){const Z=localStorage.getItem("backgroundGallery");return Z?JSON.parse(Z):Vn}return Vn}),[ct,vm]=$.useState(()=>{const Z=typeof window<"u"?localStorage.getItem("customStyles"):null,X={cardOpacity:.2,cardBlur:16,cardBorderOpacity:.2,mainTextBrightness:1,cardColor:"#000000",mainTextColorLight:"#374151",mainTextColorDark:"#e2e8f0",primaryColor:"#4f46e5",paperSize:"a4",qualityScale:3};return Z?{...X,...JSON.parse(Z)}:X}),[Qc,Na]=$.useState({mainTitle:"شهادة تقدير",subTitle1:"الأمانة العامة لكنيسة القديس بولس بالعبور",subTitle2:"إجتماع الخدام العام",introLine:"بكل الحب والتقدير تتشرف الأمانة العامة للخدمة بمنح هذه الشهادة الي",bodyLine1:"الخادم في",bodyLine2:"وذلك لاجتيازه بنجاح",bodyLine3:"كورس مجتمع يسوع",bodyLine4:"لخدام وخادمات الكنيسة",bodyLine5:"بتقدير عام",patronageTitle:"تحت رعاية",patronName:`القمص روفائيل الأنبا بيشوي
النائب البابوي لمدينة العبور`,responsiblePriestTitle:"الأب الكاهن المسئول"}),{ai:Zn,apiKeyError:or}=$.useMemo(()=>(console.error("Gemini API Key is missing."),{ai:null,apiKeyError:"عفواً، خدمة الرسائل الذكية غير متاحة حالياً بسبب مشكلة في الإعدادات. يرجى التواصل مع مسؤول الخدمة."}),[]),Dr=Z=>{const X=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(Z);return X?`${parseInt(X[1],16)} ${parseInt(X[2],16)} ${parseInt(X[3],16)}`:null},bs=(Z,X)=>{let oe=parseInt(Z.substring(1,3),16),xe=parseInt(Z.substring(3,5),16),Ke=parseInt(Z.substring(5,7),16);const It=X/100;X>0?(oe=Math.round(oe+(255-oe)*It),xe=Math.round(xe+(255-xe)*It),Ke=Math.round(Ke+(255-Ke)*It)):(oe=Math.round(oe*(1+It)),xe=Math.round(xe*(1+It)),Ke=Math.round(Ke*(1+It)));const En=Yt=>("00"+Math.max(0,Math.min(255,Yt)).toString(16)).slice(-2);return`#${En(oe)}${En(xe)}${En(Ke)}`};$.useEffect(()=>{const Z=Bp.onAuthStateChanged(X=>{I(!!X),b(!1)});return()=>Z()},[]),$.useEffect(()=>(w||K?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[w,K]),$.useEffect(()=>{document.documentElement.classList.remove("theme-indigo","theme-teal","theme-rose","theme-purple","theme-green","theme-amber","theme-cyan","theme-lime"),ee&&(document.documentElement.classList.add(`theme-${ee}`),localStorage.setItem("theme",ee))},[ee]),$.useEffect(()=>{const Z=window.document.documentElement;De?(Z.classList.add("dark"),localStorage.setItem("darkMode","true")):(Z.classList.remove("dark"),localStorage.setItem("darkMode","false"))},[De]),$.useEffect(()=>{localStorage.setItem("backgroundUrl",Tt)},[Tt]),$.useEffect(()=>{localStorage.setItem("backgroundGallery",JSON.stringify(an))},[an]),$.useEffect(()=>{const Z=document.documentElement,X=Dr(ct.cardColor)||"0 0 0";Z.style.setProperty("--card-bg-light-rgba",`rgba(${X.replace(/ /g,",")}, ${ct.cardOpacity*.5})`),Z.style.setProperty("--card-bg-dark-rgba",`rgba(${X.replace(/ /g,",")}, ${ct.cardOpacity})`),Z.style.setProperty("--card-backdrop-blur",`${ct.cardBlur}px`),Z.style.setProperty("--card-border-rgba",`rgba(255, 255, 255, ${ct.cardBorderOpacity})`),Z.style.setProperty("--main-text-color-light",ct.mainTextColorLight),Z.style.setProperty("--main-text-color-dark",ct.mainTextColorDark);const oe=Dr(ct.primaryColor);if(oe){Z.style.setProperty("--color-primary-rgb",oe);const xe=bs(ct.primaryColor,-10),Ke=Dr(xe);Ke&&Z.style.setProperty("--color-primary-accent-rgb",Ke);const It=bs(ct.primaryColor,90),En=Dr(It);En&&Z.style.setProperty("--color-primary-light-rgb",En),Z.style.setProperty("--color-primary-dark-text-rgb",oe);const Yt=bs(ct.primaryColor,20),vi=Dr(Yt);vi&&Z.style.setProperty("--color-primary-light-text-rgb",vi)}localStorage.setItem("customStyles",JSON.stringify(ct))},[ct]);const vl=$.useCallback(async()=>{if(!t.trim()){o("يرجى إدخال الكود أو رقم الموبايل"),r(null);return}s(!0),o(""),r(null);const Z={searchedId:t,timestamp:ar.firestore.FieldValue.serverTimestamp(),foundCode:"",foundName:""};try{const X=t.trim();if(X.startsWith("0")){o("لم يتم العثور على خادم بهذا الكود"),s(!1);return}const oe=jh.collection("servants");let xe=null,Ke=null;if(isNaN(Number(X))){o("البحث بالاسم غير مدعوم حالياً. يرجى استخدام الكود أو رقم الموبايل."),s(!1);return}else{const It=await oe.doc(X).get();if(It.exists)xe=It.data(),Ke=It.id;else{let En,Yt;X.startsWith("0")?(En=X,Yt=X.substring(1)):(En="0"+X,Yt=X);const vi=parseInt(Yt,10),As=await oe.where("mobileNumber","in",[En,Yt,vi]).limit(1).get();if(!As.empty){const er=As.docs[0];xe=er.data(),Ke=er.id}}}if(xe&&Ke){Z.foundCode=Ke,Z.foundName=xe.name;const It=parseInt(Ke,10),As=(await jh.collection("courseResults").where("servantCode","in",[Ke,It]).get()).docs.map(be=>be.data()),er=new Map;for(const be of As){const Bt=`${be.courseName}|${be.year}`,xr=er.get(Bt);if(!xr)er.set(Bt,be);else{const Ln=xr.score==="غائب"?-1:xr.score;(be.score==="غائب"?-1:be.score)>Ln&&er.set(Bt,be)}}const Im=Array.from(er.values()),bl=(await jh.collection("evaluations").where("servantCode","in",[Ke,It]).get()).docs.map(be=>{const Bt=be.data();if(Bt.scores&&typeof Bt.overallAverage=="number")return{id:be.id,...Bt};const Ln=(Bt.rating||0)*20,Ei={spiritualLife:Ln,commitment:Ln,preparationAndDelivery:Ln,relationshipWithPeers:Ln,relationshipWithCongregation:Ln,personalGrowth:Ln};return{id:be.id,servantCode:Bt.servantCode,serviceName:Bt.serviceName,year:Bt.year,evaluatorName:Bt.evaluatorName,scores:Ei,overallAverage:Ln,generalNotes:Bt.notes}}),lr=new Set;Array.isArray(xe.allServices)&&xe.allServices.length>0?xe.allServices.forEach(be=>{be&&be.trim()&&lr.add(be.trim())}):(xe.primaryService&&xe.primaryService.trim()&&lr.add(xe.primaryService.trim()),bl.forEach(be=>{be.serviceName&&be.serviceName.trim()&&lr.add(be.serviceName.trim())}));const Al=Array.from(lr),wl={...xe,code:Ke,allServices:Al};r({servant:wl,results:Im,evaluations:bl})}else r(null),o("لم يتم العثور على خادم بهذا الكود")}catch(X){console.error("Error searching Firestore:",X),X.code==="permission-denied"?o("خطأ في الأذونات. لا يمكن الوصول إلى قاعدة البيانات. يرجى مراجعة مسؤول الخدمة."):o("حدث خطأ أثناء البحث. يرجى المحاولة مرة أخرى.")}finally{if(s(!1),Z.foundCode)try{await jh.collection("queryLogs").add(Z)}catch(X){console.error("Error writing to query log:",X)}}},[t]),Wc=()=>{e(""),r(null),c(null),o(""),f(""),N(""),A("")},Em=Z=>{c(Z)},Tm=async()=>{if(!n)return;if(g(!0),f(""),N(""),A(""),or||!Zn){f(or),g(!1);return}const Z=n.results.find(X=>X.score!=="غائب");try{const X=`اكتب رسالة تشجيعية وملهمة قصيرة (سطرين أو ثلاثة) ذات طابع مسيحي لـ "${n.servant.name}" الذي يخدم في كنيسة القديس بولس بالعبور. ${Z?`وكانت إحدى درجاته في أحد الكورسات هي ${Z.score} من 100.`:""}`,oe=await Zn.models.generateContent({model:"gemini-2.5-flash",contents:X});f(oe.text)}catch(X){jp(X,f)}finally{g(!1)}},Xc=async()=>{if(n){if(T(!0),N(""),f(""),A(""),or||!Zn){N(or),T(!1);return}try{const Z=`اكتب نصيحة روحية قصيرة (من 3 إلى 5 أسطر) للخادم الروحي "${n.servant.name}"، مستوحاة من تعاليم وكتابات قداسة البابا شنودة الثالث عن الخدمة والخدام.`,X=await Zn.models.generateContent({model:"gemini-2.5-flash",contents:Z});N(X.text)}catch(Z){jp(Z,N)}finally{T(!1)}}},El=async()=>{if(n){if(U(!0),A(""),f(""),N(""),or||!Zn){A(or),U(!1);return}try{const Z=n.servant.name,X=Z.split(" ")[0],oe=`اكتب رسالة شخصية ذات طابع مسيحي روحي إلى ${Z}.
        يجب أن تبدأ الرسالة بمخاطبة ${Z} مباشرة.
        يجب أن تذكر اسمه الأول، "${X}"، مرتين في متن الرسالة.
        الرسالة يجب أن تحثه بلطف ومحبة على أهمية الحضور والمشاركة في اجتماعات الكورس القادمة، وتؤكد على أن وجوده ومشاركته يضيفان قيمة كبيرة للمجموعة وأن الجميع يفتقده.
        الرسالة يجب ألا تزيد عن 12 سطراً.
        مهم جداً: لا تقم بإضافة أي خاتمة أو توقيع في نهاية الرسالة، فقط محتوى الرسالة نفسها.`,Ke=(await Zn.models.generateContent({model:"gemini-2.5-flash",contents:oe})).text.trim()+`

راعي الامانة العامة / أبونا يوسيف سيدهم`;A(Ke)}catch(Z){jp(Z,A)}finally{U(!1)}}},Jc=async(Z,X)=>{R(!0),Kt("");try{await Bp.signInWithEmailAndPassword(Z,X),localStorage.setItem("loginEmail",Z),C(!1)}catch(oe){oe.code==="auth/user-not-found"||oe.code==="auth/wrong-password"||oe.code==="auth/invalid-credential"?Kt("البريد الإلكتروني أو كلمة السر غير صحيحة."):oe.code==="auth/network-request-failed"?Kt("حدث خطأ في الشبكة. يرجى التحقق من اتصالك بالإنترنت والمحاولة مرة أخرى."):Kt("حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى."),console.error("Login failed:",oe)}finally{R(!1)}},Zc=async()=>{await Bp.signOut()},Tl=()=>l?E.jsx(s5,{certData:l,onBackToResult:()=>c(null),certificateTexts:Qc,customStyles:ct}):n?E.jsx(g5,{profile:n,onShowCertificate:Em,onGenerateMessage:Tm,motivationalMessage:h,isMessageLoading:p,onGenerateAdvice:Xc,spiritualAdvice:S,isAdviceLoading:P,onGenerateSpecialMessage:El,specialMessage:v,isSpecialMessageLoading:D,onNewSearch:Wc}):E.jsx(Wj,{query:t,setQuery:e,onSearch:vl,isLoading:i,error:a,onShowTutorial:()=>ne(!0)}),Il=E.jsx("main",{className:"w-full max-w-7xl mx-auto flex-grow flex items-center justify-center",children:E.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"})});return E.jsx(I5,{children:E.jsxs("div",{className:"relative min-h-screen bg-gray-100 text-[var(--main-text-color-light)] flex flex-col items-center p-4 transition-colors duration-300",children:[E.jsx("div",{className:"absolute inset-0 bg-cover bg-center bg-fixed",style:{backgroundImage:`url('${Tt}')`}}),E.jsx("div",{className:`absolute inset-0 bg-black/75 transition-opacity duration-500 ${De?"opacity-100":"opacity-0"} pointer-events-none`}),E.jsxs("div",{className:"relative z-10 w-full flex flex-col flex-grow items-center dark:text-[var(--main-text-color-dark)]",children:[E.jsxs("header",{className:"w-full max-w-7xl mx-auto text-center py-8 no-print",children:[E.jsx(aE,{className:"w-40 h-40 object-contain mx-auto",alt:"شعار كنيسة القديس بولس الرسول بالعبور"}),E.jsx("h1",{className:"text-3xl md:text-4xl font-bold text-white [text-shadow:_0_2px_4px_rgb(0_0_0_/_40%)] dark:text-[rgb(var(--color-primary-light-text-rgb))] mt-4",children:"كنيسة القديس بولس الرسول بالعبور"}),E.jsx("p",{className:"text-2xl text-slate-100 [text-shadow:_0_2px_4px_rgb(0_0_0_/_40%)] dark:text-slate-300 mt-1",children:"الأمانة العامة للخدمة"}),E.jsx("p",{className:"text-xl text-slate-200 [text-shadow:_0_2px_4px_rgb(0_0_0_/_40%)] dark:text-slate-400 mt-2",children:"استعلام عن نتائج الكورسات وإصدار شهادات التقدير"})]}),j?E.jsx($.Suspense,{fallback:Il,children:E.jsx(b5,{onLogout:Zc,certificateTexts:Qc,setCertificateTexts:Na,setTheme:Re,isDarkMode:De,setIsDarkMode:yi,customStyles:ct,setCustomStyles:vm,setBackgroundUrl:We,backgroundUrl:Tt,backgroundGallery:an,setBackgroundGallery:ym})}):E.jsx("main",{className:"w-full max-w-7xl mx-auto flex-grow flex items-center justify-center",children:Tl()}),w&&E.jsx(_5,{onClose:()=>C(!1),onLogin:Jc,isLoggingIn:x,loginError:vn}),K&&E.jsx($.Suspense,{fallback:null,children:E.jsx(A5,{onClose:()=>ne(!1)})}),E.jsxs("footer",{className:"w-full text-center p-4 text-slate-200 [text-shadow:_0_1px_2px_rgb(0_0_0_/_30%)] dark:text-slate-400 mt-8 no-print",children:[E.jsxs("p",{children:["© ",new Date().getFullYear()," كنيسة القديس بولس الرسول بالعبور. كل الحقوق محفوظة."]}),!y&&E.jsx("div",{className:"flex justify-center items-center gap-4",children:j?E.jsx("button",{onClick:Zc,className:"mt-2 text-slate-200 hover:text-white dark:text-slate-400 dark:hover:text-slate-200 underline text-sm",children:"خروج"}):E.jsx("button",{onClick:()=>{Kt(""),C(!0)},className:"mt-2 text-transparent hover:text-slate-200 dark:hover:text-slate-200 underline text-sm",children:"لوحة تحكم"})})]})]})]})})},RA=document.getElementById("root");RA&&p2.createRoot(RA).render(E.jsx(VO.StrictMode,{children:E.jsx(w5,{})}));export{_f as a,zp as b,jh as d,E as j,$ as r,j5 as u};
