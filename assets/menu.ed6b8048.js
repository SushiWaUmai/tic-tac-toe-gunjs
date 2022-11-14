import{d as y,e as f,l as w,c as i,i as x,j as k,t as u,S,M as v}from"./index.fae669f3.js";import{a as C,c as D,M,L as I}from"./layout.6bff2fca.js";let b;const U=new Uint8Array(16);function G(){if(!b&&(b=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!b))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return b(U)}const n=[];for(let e=0;e<256;++e)n.push((e+256).toString(16).slice(1));function j(e,t=0){return(n[e[t+0]]+n[e[t+1]]+n[e[t+2]]+n[e[t+3]]+"-"+n[e[t+4]]+n[e[t+5]]+"-"+n[e[t+6]]+n[e[t+7]]+"-"+n[e[t+8]]+n[e[t+9]]+"-"+n[e[t+10]]+n[e[t+11]]+n[e[t+12]]+n[e[t+13]]+n[e[t+14]]+n[e[t+15]]).toLowerCase()}const N=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),_={randomUUID:N};function E(e,t,o){if(_.randomUUID&&!t&&!e)return _.randomUUID();e=e||{};const r=e.random||(e.rng||G)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){o=o||0;for(let a=0;a<16;++a)t[o+a]=r[a];return t}return j(r)}const R=u('<span class="block text-red-500"></span>'),T=u('<form><span class="flex justify-between items-center flex-col sm:flex-row gap-x-2"><label for="creategameinput">Game ID (leave blank for random)</label><input id="creategameinput" type="text" class="px-2 rounded border-green border-2 w-[max(80vw, 20rem)]"></span><button class="modal-btn hover-scale bg-lavender mt-2 px-3 py-1 float-left">Back</button><button class="modal-btn hover-scale bg-terra mt-2 px-3 py-1 float-right">Create</button></form>'),V=e=>{const[t,o]=f(void 0),r=w();let a;return i(M,{backgroundClass:"animate-fadein",foregroundClass:"animate-popin",cancel:()=>e.setMenu("main"),get children(){const c=T.cloneNode(!0),d=c.firstChild,$=d.firstChild,m=$.nextSibling,s=d.nextSibling,h=s.nextSibling,p=a;return typeof p=="function"?p(m):a=m,x(c,i(k,{when:t!==void 0,get children(){const l=R.cloneNode(!0);return x(l,t),l}}),s),s.$$click=async l=>{l.preventDefault(),e.setMenu("main")},h.$$click=async l=>{l.preventDefault();const g=a?.value||E();if(!await C(g))await D(g);else{o("Game already exists!");return}r(`game/?id=${g}`)},c}})};y(["click"]);const J=u('<span class="block text-red-500"></span>'),L=u('<form><span class="flex justify-between items-center flex-col sm:flex-row gap-x-2"><label for="joingameinput">Game ID</label><input id="joingameinput" type="text" class="px-2 rounded border-green border-2 w-[max(80vw, 20rem)]"></span><button class="modal-btn hover-scale bg-lavender mt-2 border-green border-2 px-3 py-1 rounded float-left">Back</button><button class="modal-btn hover-scale bg-terra mt-2 px-3 py-1 float-right">Join</button></form>'),B=e=>{const[t,o]=f(void 0),r=w();let a;return i(M,{backgroundClass:"animate-fadein",foregroundClass:"animate-popin",cancel:()=>e.setMenu("main"),get children(){const c=L.cloneNode(!0),d=c.firstChild,$=d.firstChild,m=$.nextSibling,s=d.nextSibling,h=s.nextSibling,p=a;return typeof p=="function"?p(m):a=m,x(c,i(k,{when:t!==void 0,get children(){const l=J.cloneNode(!0);return x(l,t),l}}),s),s.$$click=async l=>{l.preventDefault(),e.setMenu("main")},h.$$click=async l=>{if(l.preventDefault(),a?.value){if(!await C(a.value)){o("Game does not exist!");return}r(`game/?id=${a.value}`)}else{o("Enter a Game ID");return}},c}})};y(["click"]);const A=u('<h1 class="text-3xl text-center">Welcome to Tic Tac Toe!</h1>'),H=u('<div class="m-2 flex gap-x-3"><button class="btn hover-shadow border-4 my-4 py-2 px-4">Create Game</button><button class="btn hover-shadow border-4 my-4 py-2 px-4">Join Game</button></div>'),F=()=>{const[e,t]=f("main");return i(I,{get children(){return[A.cloneNode(!0),(()=>{const o=H.cloneNode(!0),r=o.firstChild,a=r.nextSibling;return r.$$click=()=>t("create"),a.$$click=()=>t("join"),o})(),i(S,{get children(){return[i(v,{get when(){return e()==="create"},get children(){return i(V,{setMenu:t})}}),i(v,{get when(){return e()==="join"},get children(){return i(B,{setMenu:t})}})]}})]}})};y(["click"]);export{F as default};
