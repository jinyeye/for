(function(e){function t(t){for(var a,r,o=t[0],u=t[1],s=t[2],l=0,f=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&f.push(c[r][0]),c[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);h&&h(t);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var o=n[r];0!==c[o]&&(a=!1)}a&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},c={app:0},i=[];function o(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-06e1572c":"e7337035","chunk-15d10eef":"fa2af9ed","chunk-3b83641c":"8cb60556","chunk-669e5854":"90d60c5d","chunk-cd9a175a":"eaf00c11","chunk-e87edf9a":"6232a4b7","chunk-fd104c4a":"a121066f"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-06e1572c":1,"chunk-15d10eef":1,"chunk-3b83641c":1,"chunk-669e5854":1,"chunk-cd9a175a":1,"chunk-e87edf9a":1,"chunk-fd104c4a":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-06e1572c":"ad46d334","chunk-15d10eef":"fd403904","chunk-3b83641c":"18b9cb06","chunk-669e5854":"e82a86eb","chunk-cd9a175a":"0d3fce13","chunk-e87edf9a":"ce6faa06","chunk-fd104c4a":"c05c4651"}[e]+".css",c=u.p+a,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var s=i[o],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===c))return t()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){s=f[o],l=s.getAttribute("data-href");if(l===a||l===c)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var a=t&&t.target&&t.target.src||c,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],h.parentNode.removeChild(h),n(i)},h.href=c;var d=document.getElementsByTagName("head")[0];d.appendChild(h)})).then((function(){r[e]=0})));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=o(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(h);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}c[e]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var h=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2395:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},c=[],i={},o=i,u=(n("7c55"),n("2877")),s=Object(u["a"])(o,r,c,!1,null,null,null),l=s.exports,f=n("8c4f"),h=(n("d3b7"),[{path:"/discover",name:"Discover",component:function(){return n.e("chunk-e87edf9a").then(n.bind(null,"2f64"))},children:[{path:"ranking",name:"Ranking",component:function(e){return n.e("chunk-15d10eef").then(function(){var t=[n("646a")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"songSheet",name:"SongSheet",component:function(e){return n.e("chunk-06e1572c").then(function(){var t=[n("2111")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"ggg",name:"Ggg",component:function(e){return n.e("chunk-fd104c4a").then(function(){var t=[n("7df1")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"tuijian",name:"Tuijian",component:function(e){return n.e("chunk-669e5854").then(function(){var t=[n("6423")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"songdetail",name:"SongDetail",component:function(e){return n.e("chunk-cd9a175a").then(function(){var t=[n("f338")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"single",name:"Single",component:function(e){return n.e("chunk-3b83641c").then(function(){var t=[n("4c1a")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]},{path:"*",redirect:{name:"Tuijian"}}]);a["default"].use(f["a"]);var d=new f["a"]({routes:h}),p=n("2f62"),m=(n("fb6a"),n("b0c0"),{all:{url:"",table:[]},data:{datas:[]}}),v={},b={},g={setPrint:function(e,t){e.all=t},tableData:function(e,t){e.data=t},musiccl:function(){var e=this;this.musicUrl=this.print.url,this.tableData=this.print.table,this.musicImg=this.tableData.al.picUrl,this.musicName=this.tableData.name,this.time=new Date(this.tableData.dt).toTimeString().substr(3,5),this.totalTime=1*this.time.slice(3,5)+60*this.time.slice(1,2),this.musicarname=this.tableData.ar[0].name;var t=setInterval((function(){e.miaos>=9?(e.miaos=0,e.miao+=1,e.miao>=6&&(e.miao=0,e.fen+=1,e.fen==e.time.slice(1,2)&&e.miaos==e.time.slice(3,4)&&e.miao==e.time.slice(4,5)&&clearInterval(t))):e.miaos++}),1e3);if(1==this.active)clearInterval(timer),clearInterval(t),this.$refs.audio.pause(),this.active=!this.active;else{var n=setInterval((function(){e.progress<99?e.progress++:(clearInterval(t),e.miaos=0,e.miao=0,e.fen=0,clearInterval(n),e.progress=0)}),this.totalTime/100*1e3);this.$refs.audio.play(),this.active=!this.active}}},k={namespaced:!0,state:m,getters:v,actions:b,mutations:g};a["default"].use(p["b"]);var y=new p["b"].Store({modules:{print:k}}),w=n("bc3a"),S=n.n(w),j=n("a7fe"),O=n.n(j),T=n("5c96"),D=n.n(T),P=(n("0fae"),n("1c67")),_=n.n(P);a["default"].use(O.a,S.a),a["default"].use(D.a),a["default"].use(_.a),S.a.defaults.baseURL="http://music.kele8.cn",a["default"].prototype.$axios=S.a,a["default"].config.productionTip=!1,new a["default"]({router:d,store:y,render:function(e){return e(l)}}).$mount("#app")},"7c55":function(e,t,n){"use strict";var a=n("2395"),r=n.n(a);r.a}});
//# sourceMappingURL=app.7511f2ae.js.map