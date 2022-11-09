(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();const p={},Ce=(e,t)=>e===t,$e=Symbol("solid-proxy"),pe=Symbol("solid-track"),U={equals:Ce};let Ne=ge;const _=1,G=2,ue={owned:null,cleanups:null,context:null,owner:null};var g=null;let v=null,a=null,m=null,E=null,J=0;function K(e,t){const n=a,s=g,i=e.length===0,r=i?ue:{owned:null,cleanups:null,context:null,owner:t||s},o=i?e:()=>e(()=>j(()=>Z(r)));g=r,a=null;try{return F(o,!0)}finally{a=n,g=s}}function z(e,t){t=t?Object.assign({},U,t):U;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.value)),ae(n,i));return[fe.bind(n),s]}function S(e,t,n){const s=de(e,t,!1,_);W(s)}function L(e,t,n){n=n?Object.assign({},U,n):U;const s=de(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,W(s),fe.bind(s)}function j(e){let t,n=a;return a=null,t=e(),a=n,t}function ve(e){return g===null||(g.cleanups===null?g.cleanups=[e]:g.cleanups.push(e)),e}function Ee(e){const t=L(e),n=L(()=>Q(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}function fe(){const e=v;if(this.sources&&(this.state||e))if(this.state===_||e)W(this);else{const t=m;m=null,F(()=>H(this),!1),m=t}if(a){const t=this.observers?this.observers.length:0;a.sources?(a.sources.push(this),a.sourceSlots.push(t)):(a.sources=[this],a.sourceSlots=[t]),this.observers?(this.observers.push(a),this.observerSlots.push(a.sources.length-1)):(this.observers=[a],this.observerSlots=[a.sources.length-1])}return this.value}function ae(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&F(()=>{for(let i=0;i<e.observers.length;i+=1){const r=e.observers[i],o=v&&v.running;o&&v.disposed.has(r),(o&&!r.tState||!o&&!r.state)&&(r.pure?m.push(r):E.push(r),r.observers&&me(r)),o||(r.state=_)}if(m.length>1e6)throw m=[],new Error},!1)),t}function W(e){if(!e.fn)return;Z(e);const t=g,n=a,s=J;a=g=e,Se(e,e.value,s),a=n,g=t}function Se(e,t,n){let s;try{s=e.fn(t)}catch(i){e.pure&&(e.state=_),ye(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?ae(e,s):e.value=s,e.updatedAt=n)}function de(e,t,n,s=_,i){const r={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:g,context:null,pure:n};return g===null||g!==ue&&(g.owned?g.owned.push(r):g.owned=[r]),r}function he(e){const t=v;if(e.state===0||t)return;if(e.state===G||t)return H(e);if(e.suspense&&j(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<J);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===_||t)W(e);else if(e.state===G||t){const i=m;m=null,F(()=>H(e,n[0]),!1),m=i}}function F(e,t){if(m)return e();let n=!1;t||(m=[]),E?n=!0:E=[],J++;try{const s=e();return Le(n),s}catch(s){m||(E=null),ye(s)}}function Le(e){if(m&&(ge(m),m=null),e)return;const t=E;E=null,t.length&&F(()=>Ne(t),!1)}function ge(e){for(let t=0;t<e.length;t++)he(e[t])}function H(e,t){const n=v;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===_||n?i!==t&&he(i):(i.state===G||n)&&H(i,t))}}function me(e){const t=v;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=G,s.pure?m.push(s):E.push(s),s.observers&&me(s))}}function Z(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const r=i.pop(),o=n.observerSlots.pop();s<i.length&&(r.sourceSlots[o]=s,i[s]=r,n.observerSlots[s]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)Z(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function _e(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function ye(e){throw e=_e(e),e}function Q(e){if(typeof e=="function"&&!e.length)return Q(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=Q(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}const ke=Symbol("fallback");function ne(e){for(let t=0;t<e.length;t++)e[t]()}function Te(e,t,n={}){let s=[],i=[],r=[],o=0,l=t.length>1?[]:null;return ve(()=>ne(r)),()=>{let f=e()||[],u,c;return f[pe],j(()=>{let d=f.length,b,N,B,I,P,x,A,$,T;if(d===0)o!==0&&(ne(r),r=[],s=[],i=[],o=0,l&&(l=[])),n.fallback&&(s=[ke],i[0]=K(Ae=>(r[0]=Ae,n.fallback())),o=1);else if(o===0){for(i=new Array(d),c=0;c<d;c++)s[c]=f[c],i[c]=K(y);o=d}else{for(B=new Array(d),I=new Array(d),l&&(P=new Array(d)),x=0,A=Math.min(o,d);x<A&&s[x]===f[x];x++);for(A=o-1,$=d-1;A>=x&&$>=x&&s[A]===f[$];A--,$--)B[$]=i[A],I[$]=r[A],l&&(P[$]=l[A]);for(b=new Map,N=new Array($+1),c=$;c>=x;c--)T=f[c],u=b.get(T),N[c]=u===void 0?-1:u,b.set(T,c);for(u=x;u<=A;u++)T=s[u],c=b.get(T),c!==void 0&&c!==-1?(B[c]=i[u],I[c]=r[u],l&&(P[c]=l[u]),c=N[c],b.set(T,c)):r[u]();for(c=x;c<d;c++)c in B?(i[c]=B[c],r[c]=I[c],l&&(l[c]=P[c],l[c](c))):i[c]=K(y);i=i.slice(0,o=d),s=f.slice(0)}return i});function y(d){if(r[c]=d,l){const[b,N]=z(c);return l[c]=N,t(f[c],b)}return t(f[c])}}}function h(e,t){return j(()=>e(t||{}))}function q(){return!0}const Me={get(e,t,n){return t===$e?n:e.get(t)},has(e,t){return e.has(t)},set:q,deleteProperty:q,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:q,deleteProperty:q}},ownKeys(e){return e.keys()}};function X(e){return(e=typeof e=="function"?e():e)==null?{}:e}function Oe(...e){return new Proxy({get(t){for(let n=e.length-1;n>=0;n--){const s=X(e[n])[t];if(s!==void 0)return s}},has(t){for(let n=e.length-1;n>=0;n--)if(t in X(e[n]))return!0;return!1},keys(){const t=[];for(let n=0;n<e.length;n++)t.push(...Object.keys(X(e[n])));return[...new Set(t)]}},Me)}function Be(e){const t="fallback"in e&&{fallback:()=>e.fallback};return L(Te(()=>e.each,e.children,t||void 0))}function we(e){let t=!1,n=!1;const s=Ee(()=>e.children),i=L(()=>{let r=s();Array.isArray(r)||(r=[r]);for(let o=0;o<r.length;o++){const l=r[o].when;if(l)return n=!!r[o].keyed,[o,l,r[o]]}return[-1]},void 0,{equals:(r,o)=>r[0]===o[0]&&(t?r[1]===o[1]:!r[1]==!o[1])&&r[2]===o[2]});return L(()=>{const[r,o,l]=i();if(r<0)return e.fallback;const f=l.children,u=typeof f=="function"&&f.length>0;return t=n||u,u?j(()=>f(o)):f})}function D(e){return e}const De=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],je=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...De]),Fe=new Set(["innerHTML","textContent","innerText","children"]),Ie={className:"class",htmlFor:"for"},se={class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"},Pe=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),qe={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Ke(e,t){return L(e,void 0,t?void 0:{equals:t})}function Re(e,t,n){let s=n.length,i=t.length,r=s,o=0,l=0,f=t[i-1].nextSibling,u=null;for(;o<i||l<r;){if(t[o]===n[l]){o++,l++;continue}for(;t[i-1]===n[r-1];)i--,r--;if(i===o){const c=r<s?l?n[l-1].nextSibling:n[r-l]:f;for(;l<r;)e.insertBefore(n[l++],c)}else if(r===l)for(;o<i;)(!u||!u.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[r-1]&&n[l]===t[i-1]){const c=t[--i].nextSibling;e.insertBefore(n[l++],t[o++].nextSibling),e.insertBefore(n[--r],c),t[i]=n[r]}else{if(!u){u=new Map;let y=l;for(;y<r;)u.set(n[y],y++)}const c=u.get(t[o]);if(c!=null)if(l<c&&c<r){let y=o,d=1,b;for(;++y<i&&y<r&&!((b=u.get(t[y]))==null||b!==c+d);)d++;if(d>c-l){const N=t[o];for(;l<c;)e.insertBefore(n[l++],N)}else e.replaceChild(n[l++],t[o++])}else o++;else t[o++].remove()}}}const ie="_$DX_DELEGATE";function Ue(e,t,n){let s;return K(i=>{s=i,t===document?e():C(t,e(),t.firstChild?null:void 0,n)}),()=>{s(),t.textContent=""}}function k(e,t,n){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function ee(e,t=window.document){const n=t[ie]||(t[ie]=new Set);for(let s=0,i=e.length;s<i;s++){const r=e[s];n.has(r)||(n.add(r),t.addEventListener(r,Qe))}}function R(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Ge(e,t,n,s){s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s)}function He(e,t){t==null?e.removeAttribute("class"):e.className=t}function te(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const i=n[0];e.addEventListener(t,n[0]=r=>i.call(e,n[1],r))}else e.addEventListener(t,n)}function We(e,t,n={}){const s=Object.keys(t||{}),i=Object.keys(n);let r,o;for(r=0,o=i.length;r<o;r++){const l=i[r];!l||l==="undefined"||t[l]||(re(e,l,!1),delete n[l])}for(r=0,o=s.length;r<o;r++){const l=s[r],f=!!t[l];!l||l==="undefined"||n[l]===f||!f||(re(e,l,!0),n[l]=f)}return n}function be(e,t,n={}){const s=e.style,i=typeof n=="string";if(t==null&&i||typeof t=="string")return s.cssText=t;i&&(s.cssText=void 0,n={}),t||(t={});let r,o;for(o in n)t[o]==null&&s.removeProperty(o),delete n[o];for(o in t)r=t[o],r!==n[o]&&(s.setProperty(o,r),n[o]=r);return n}function Xe(e,t,n,s){typeof t=="function"?S(i=>oe(e,t(),i,n,s)):oe(e,t,void 0,n,s)}function C(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return O(e,t,s,n);S(i=>O(e,t(),i,n),s)}function Ve(e,t,n,s,i={},r=!1){t||(t={});for(const o in i)if(!(o in t)){if(o==="children")continue;le(e,o,null,i[o],n,r)}for(const o in t){if(o==="children"){s||O(e,t.children);continue}const l=t[o];i[o]=le(e,o,l,i[o],n,r)}}function ze(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function re(e,t,n){const s=t.trim().split(/\s+/);for(let i=0,r=s.length;i<r;i++)e.classList.toggle(s[i],n)}function le(e,t,n,s,i,r){let o,l,f;if(t==="style")return be(e,n,s);if(t==="classList")return We(e,n,s);if(n===s)return s;if(t==="ref")r||n(e);else if(t.slice(0,3)==="on:"){const u=t.slice(3);s&&e.removeEventListener(u,s),n&&e.addEventListener(u,n)}else if(t.slice(0,10)==="oncapture:"){const u=t.slice(10);s&&e.removeEventListener(u,s,!0),n&&e.addEventListener(u,n,!0)}else if(t.slice(0,2)==="on"){const u=t.slice(2).toLowerCase(),c=Pe.has(u);if(!c&&s){const y=Array.isArray(s)?s[0]:s;e.removeEventListener(u,y)}(c||n)&&(te(e,u,n,c),c&&ee([u]))}else if((f=Fe.has(t))||!i&&(se[t]||(l=je.has(t)))||(o=e.nodeName.includes("-")))t==="class"||t==="className"?He(e,n):o&&!l&&!f?e[ze(t)]=n:e[se[t]||t]=n;else{const u=i&&t.indexOf(":")>-1&&qe[t.split(":")[0]];u?Ge(e,u,t,n):R(e,Ie[t]||t,n)}return n}function Qe(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),p.registry&&!p.done&&(p.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>s.remove()));n!==null;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s.call(n,i,e):s.call(n,e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function oe(e,t,n={},s,i){return t||(t={}),!i&&"children"in t&&S(()=>n.children=O(e,t.children,n.children)),t.ref&&t.ref(e),S(()=>Ve(e,t,s,!0,n,!0)),n}function O(e,t,n,s,i){for(p.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const r=typeof t,o=s!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,r==="string"||r==="number"){if(p.context)return n;if(r==="number"&&(t=t.toString()),o){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=M(e,n,s,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||r==="boolean"){if(p.context)return n;n=M(e,n,s)}else{if(r==="function")return S(()=>{let l=t();for(;typeof l=="function";)l=l();n=O(e,l,n,s)}),()=>n;if(Array.isArray(t)){const l=[],f=n&&Array.isArray(n);if(Y(l,t,n,i))return S(()=>n=O(e,l,n,s,!0)),()=>n;if(p.context){if(!l.length)return n;for(let u=0;u<l.length;u++)if(l[u].parentNode)return n=l}if(l.length===0){if(n=M(e,n,s),o)return n}else f?n.length===0?ce(e,l,s):Re(e,n,l):(n&&M(e),ce(e,l));n=l}else if(t instanceof Node){if(p.context&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=M(e,n,s,t);M(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Y(e,t,n,s){let i=!1;for(let r=0,o=t.length;r<o;r++){let l=t[r],f=n&&n[r];if(l instanceof Node)e.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))i=Y(e,l,f)||i;else if(typeof l=="function")if(s){for(;typeof l=="function";)l=l();i=Y(e,Array.isArray(l)?l:[l],f)||i}else e.push(l),i=!0;else{const u=String(l);f&&f.nodeType===3&&f.data===u?e.push(f):e.push(document.createTextNode(u))}}return i}function ce(e,t,n){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function M(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let r=!1;for(let o=t.length-1;o>=0;o--){const l=t[o];if(i!==l){const f=l.parentNode===e;!r&&!o?f?e.replaceChild(i,l):e.insertBefore(i,n):f&&l.remove()}else r=!0}}else e.insertBefore(i,n);return[i]}const Ye=!1;var w=(e=>(e[e.None=0]="None",e[e.Cross=1]="Cross",e[e.Circle=2]="Circle",e[e.Draw=3]="Draw",e))(w||{});const Je=e=>{switch(e){case 2:return 1;case 1:return 2}return 0},Ze=e=>{const t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]];for(let s of t){const[i,r,o]=s;if(e[i]!==0&&e[i]===e[r]&&e[i]==e[o])return e[i]}let n=!0;for(let s of e)s===0&&(n=!1);return n?3:0},et=k('<svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg"></svg>'),tt=k("<title></title>");function xe(e,t){const n=Oe(e.a,t);return(()=>{const s=et.cloneNode(!0);return Xe(s,n,!0,!0),C(s,()=>Ye,null),C(s,(()=>{const i=Ke(()=>!!t.title,!0);return()=>i()&&(()=>{const r=tt.cloneNode(!0);return C(r,()=>t.title),r})()})(),null),S(i=>{const r=e.a.stroke,o={...t.style,overflow:"visible",color:t.color||"currentColor"},l=t.size||"1em",f=t.size||"1em",u=e.c;return r!==i._v$&&R(s,"stroke",i._v$=r),i._v$2=be(s,o,i._v$2),l!==i._v$3&&R(s,"height",i._v$3=l),f!==i._v$4&&R(s,"width",i._v$4=f),u!==i._v$5&&(s.innerHTML=i._v$5=u),i},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),s})()}function nt(e){return xe({a:{viewBox:"0 0 512 512"},c:'<path d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"/>'},e)}function st(e){return xe({a:{viewBox:"0 0 384 512"},c:'<path d="M376.6 427.5c11.31 13.58 9.484 33.75-4.094 45.06a31.894 31.894 0 01-20.47 7.422c-9.172 0-18.27-3.922-24.59-11.52L192 305.1 56.6 467.6c-6.328 7.594-15.42 11.52-24.59 11.52a31.907 31.907 0 01-20.47-7.422c-13.58-11.31-15.41-31.48-4.094-45.06l142.9-171.5L7.422 84.5C-3.891 70.92-2.063 50.75 11.52 39.44c13.56-11.34 33.73-9.516 45.06 4.094L192 206 327.4 43.5c11.3-13.58 31.48-15.42 45.06-4.094 13.58 11.31 15.41 31.48 4.094 45.06l-142.9 171.5L376.6 427.5z"/>'},e)}const it=k('<div class="bg-gray-300 rounded min-w-[8rem] min-h-[8rem] md:min-w-[12rem] md:min-h-[12rem] lg:min-w-[16rem] lg:min-h-[16rem] m-2 flex justify-center items-center"></div>'),rt=e=>(()=>{const t=it.cloneNode(!0);return te(t,"click",e.onClick,!0),C(t,h(we,{get fallback(){return[]},get children(){return[h(D,{get when(){return e.state===w.Cross},get children(){return h(st,{class:"text-[6rem] md:text-[8rem] lg:text-[12rem]"})}}),h(D,{get when(){return e.state===w.Circle},get children(){return h(nt,{class:"text-[6rem] md:text-[8rem] lg:text-[12rem]"})}})]}})),t})();ee(["click"]);const lt=k('<div class="absolute inset-0 flex justify-center items-center"><div class="rounded bg-gray-100 px-8 py-5"></div></div>'),ot=e=>(()=>{const t=lt.cloneNode(!0),n=t.firstChild;return C(n,()=>e.children),t})(),ct=k('<div class="flex flex-col"><h3 class="m-3 text-4xl text-center"></h3><span class="py-2 px-3 rounded bg-gray-300 m-auto cursor-pointer">Restart Game</span></div>'),V=e=>h(ot,{get children(){const t=ct.cloneNode(!0),n=t.firstChild,s=n.nextSibling;return C(n,()=>e.result),te(s,"click",e.restartGame,!0),t}});ee(["click"]);const ut=k('<div><div class="grid grid-cols-3 grid-rows-3"></div></div>'),ft=()=>{const[e,t]=z(Array.from({length:9},()=>w.None)),[n,s]=z(w.Circle),i=L(()=>Ze(e())),r=l=>{let f=e(),u=n();f[l]===w.None&&(f[l]=u,t([...f]),u=Je(u),s(u))},o=()=>{t(Array.from({length:9},()=>w.None)),s(w.Circle)};return(()=>{const l=ut.cloneNode(!0),f=l.firstChild;return C(f,h(Be,{get each(){return e()},children:(u,c)=>h(rt,{state:u,onClick:()=>r(c())})})),C(l,h(we,{get children(){return[h(D,{get when(){return i()===w.Circle},get children(){return h(V,{restartGame:o,result:"Winner: Circle"})}}),h(D,{get when(){return i()===w.Cross},get children(){return h(V,{restartGame:o,result:"Winner: Cross"})}}),h(D,{get when(){return i()===w.Draw},get children(){return h(V,{restartGame:o,result:"Draw"})}})]}}),null),l})()},at=k('<div><div class="absolute inset-0 flex justify-center items-center"></div></div>'),dt=()=>(()=>{const e=at.cloneNode(!0),t=e.firstChild;return C(t,h(ft,{})),e})();Ue(()=>h(dt,{}),document.getElementById("root"));
