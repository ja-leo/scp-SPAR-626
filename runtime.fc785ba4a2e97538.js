(()=>{"use strict";var e,v={},m={};function a(e){var t=m[e];if(void 0!==t)return t.exports;var c=m[e]={exports:{}};return v[e].call(c.exports,c,c.exports,a),c.exports}a.m=v,e=[],a.O=(t,c,d,b)=>{if(!c){var r=1/0;for(f=0;f<e.length;f++){for(var[c,d,b]=e[f],l=!0,n=0;n<c.length;n++)(!1&b||r>=b)&&Object.keys(a.O).every(p=>a.O[p](c[n]))?c.splice(n--,1):(l=!1,b<r&&(r=b));if(l){e.splice(f--,1);var o=d();void 0!==o&&(t=o)}}return t}b=b||0;for(var f=e.length;f>0&&e[f-1][2]>b;f--)e[f]=e[f-1];e[f]=[c,d,b]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var c in t)a.o(t,c)&&!a.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:t[c]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce((t,c)=>(a.f[c](e,t),t),[])),a.u=e=>(8592===e?"common":e)+"."+{514:"62ac6a0d9d17660b",883:"dc717f8847ba9709",1484:"0e7508a49f27766b",1617:"83d3a2a71ee4f89c",1652:"448f42078acbd390",1780:"1310ec7d50f01274",1884:"7531a2326a3f3856",1901:"16d7ca4860941964",1956:"a3f327eb8ebfb1f8",1989:"1138f5a6472b06b0",2033:"e9fe36b742b18b03",2680:"5bf3e80bc59f1f89",2795:"f7a30b68b7061760",2979:"f0bebd23a6f01be3",3004:"d76657999af681c3",3695:"3ba7f12e265548b2",3874:"8a7e06ae1c5814a0",4124:"b89c3c5240ec37d1",4369:"507ffb37d921bced",4393:"52ea97a741d68ea9",4412:"cd55a718044d63bb",4445:"0a8083c292c0c99a",4537:"3870013c768f3615",5033:"bb2de99914a153a5",5196:"3a36bb1046ddd901",5212:"e9725e23f897ffba",5249:"69bd770a818a24a2",5726:"ae02b9fb0029ea0c",5768:"e6c35e43ef10903f",5811:"8b3112c5d4999868",5968:"b7f6031ada2ede3a",5983:"6d77b8beb18616ae",6123:"0a616731fa04180b",6255:"671436b86317ea53",6307:"d33453e12a77ce97",6729:"a85c75cc176d7d7e",6748:"336af36460d9e708",7540:"f7b251ef46af0694",7547:"cbace11efc2f41d9",7677:"448d55b256caf3b7",7859:"9fcba7dd50ec965c",7866:"4c5bdfc2fe77992c",8066:"60e2ac988b9f803c",8095:"fbf9f4d3a66bc642",8204:"15e1a538e1dc857b",8438:"66aa95254d4195f9",8585:"ea831776772695ee",8592:"18ba28d86eaa8d52",8616:"78c239ccf53a9ec4",8850:"31bdfac62c290256",8977:"574930edb6be499a",9015:"a2b4a30a0cb7e91e",9326:"fb5c6d50b8d65714",9328:"e60c9380049902a1",9574:"ba66e68cfe6af66f",9814:"cec14a1bcc8a3b94",9921:"bd53d3cb8e9228c1",9995:"047ed4243993fe74"}[e]+".js",a.miniCssF=e=>{},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="scales-doc-site:";a.l=(c,d,b,f)=>{if(e[c])e[c].push(d);else{var r,l;if(void 0!==b)for(var n=document.getElementsByTagName("script"),o=0;o<n.length;o++){var i=n[o];if(i.getAttribute("src")==c||i.getAttribute("data-webpack")==t+b){r=i;break}}r||(l=!0,(r=document.createElement("script")).type="module",r.charset="utf-8",r.timeout=120,a.nc&&r.setAttribute("nonce",a.nc),r.setAttribute("data-webpack",t+b),r.src=a.tu(c)),e[c]=[d];var u=(_,p)=>{r.onerror=r.onload=null,clearTimeout(s);var g=e[c];if(delete e[c],r.parentNode&&r.parentNode.removeChild(r),g&&g.forEach(h=>h(p)),_)return _(p)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=u.bind(null,r.onerror),r.onload=u.bind(null,r.onload),l&&document.head.appendChild(r)}}})(),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.tt=()=>(void 0===e&&(e={createScriptURL:t=>t},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),a.tu=e=>a.tt().createScriptURL(e),a.p="",(()=>{var e={3666:0};a.f.j=(d,b)=>{var f=a.o(e,d)?e[d]:void 0;if(0!==f)if(f)b.push(f[2]);else if(3666!=d){var r=new Promise((i,u)=>f=e[d]=[i,u]);b.push(f[2]=r);var l=a.p+a.u(d),n=new Error;a.l(l,i=>{if(a.o(e,d)&&(0!==(f=e[d])&&(e[d]=void 0),f)){var u=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.src;n.message="Loading chunk "+d+" failed.\n("+u+": "+s+")",n.name="ChunkLoadError",n.type=u,n.request=s,f[1](n)}},"chunk-"+d,d)}else e[d]=0},a.O.j=d=>0===e[d];var t=(d,b)=>{var n,o,[f,r,l]=b,i=0;if(f.some(s=>0!==e[s])){for(n in r)a.o(r,n)&&(a.m[n]=r[n]);if(l)var u=l(a)}for(d&&d(b);i<f.length;i++)a.o(e,o=f[i])&&e[o]&&e[o][0](),e[o]=0;return a.O(u)},c=self.webpackChunkscales_doc_site=self.webpackChunkscales_doc_site||[];c.forEach(t.bind(null,0)),c.push=t.bind(null,c.push.bind(c))})()})();