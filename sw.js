if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let l={};const t=e=>n(e,a),o={module:{uri:a},exports:l,require:t};s[a]=Promise.all(i.map((e=>o[e]||t(e)))).then((e=>(r(...e),l)))}}define(["./workbox-2a7312b8"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/About.8b62136d.add719c3.js",revision:null},{url:"assets/apple-icon-180.e5f4633b.e5f4633b.png",revision:null},{url:"assets/Contact.578c5936.19d9caa5.js",revision:null},{url:"assets/favicon-196.307a4d2e.307a4d2e.png",revision:null},{url:"assets/Home.546f7539.a6915195.js",revision:null},{url:"assets/index.16f6fa7a.js",revision:null},{url:"assets/index.6e3d2801.css",revision:null},{url:"assets/Services.5b2ca2f7.58e899e3.js",revision:null},{url:"assets/vendor.97c7eddd.1f834349.js",revision:null},{url:"index.html",revision:"9c8b81dac150f4f77902e529d97ac43e"},{url:"manifest.webmanifest",revision:"d9e92b404069e5ddaa2c0437ca76b912"},{url:"manifest-icon-192.maskable.png",revision:"a50ae676ad4a372fd60bbc6c1b056c90"},{url:"manifest-icon-512.maskable.png",revision:"84c285aa43355c4c954a269c453470ed"},{url:"manifest.webmanifest",revision:"d9e92b404069e5ddaa2c0437ca76b912"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute("https://fakestoreapi.com/products",new e.NetworkFirst,"GET")}));
