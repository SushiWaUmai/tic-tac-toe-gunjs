if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const f=e=>i(e,t),a={module:{uri:t},exports:o,require:f};s[t]=Promise.all(n.map((e=>a[e]||f(e)))).then((e=>(r(...e),o)))}}define(["./workbox-ab24e45d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.566bb04b.js",revision:null},{url:"assets/index.bd607a3a.css",revision:null},{url:"index.html",revision:"a81df12a05ca207363d3a784a842e2af"},{url:"registerSW.js",revision:"4b465dfecb650a4766a6df9f6a72024f"},{url:"assets/icons/manifest-icon-192.maskable.png",revision:"d6cb7818dff97ce7da007fa744d4739e"},{url:"assets/icons/manifest-icon-512.maskable.png",revision:"b4814f7fb489fa58f73e5cbef15e2189"},{url:"manifest.webmanifest",revision:"bb47083b11eef45b6eccea73e6e3570e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
