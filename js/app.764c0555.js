(function(e){function t(t){for(var r,a,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({users:"users"}[e]||e)+"."+{users:"ec90cbd0"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={users:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({users:"users"}[e]||e)+"."+{users:"4eb8fc22"}[e]+".css",o=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===r||u===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],p.parentNode.removeChild(p),n(i)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vuetify-admin-console/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"21bb":function(e,t,n){"use strict";var r=n("d63f"),a=n.n(r);a.a},2918:function(e,t,n){"use strict";var r=n("f28f"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-navigation-drawer",{attrs:{temporary:"",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("div",{staticClass:"title py-4 pl-6 text--secondary"},[e._v(" Vuetify Admin ")]),n("v-list",{staticClass:"mt-4",attrs:{dense:""}},e._l(e.nav,(function(t){return n("v-list-item",{key:t.title,attrs:{to:t.to}},[n("v-list-item-icon",[n("v-icon",[e._v(e._s(t.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.title))])],1)],1)})),1)],1),n("v-app-bar",{attrs:{app:"",color:"primary",dark:"",flat:""}},[n("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),n("v-toolbar-title",{staticClass:"mr-8",staticStyle:{opacity:".87"}},[e._v("Vuetify Admin")]),n("v-text-field",{staticClass:"hidden-sm-and-down",attrs:{flat:"","solo-inverted":"","hide-details":"","prepend-inner-icon":"mdi-magnify",label:"Pesquise usuários, grupos ou configurações"}}),n("v-spacer")],1),n("v-content",[n("v-sheet",{staticClass:"body-2 d-flex align-center black--text pl-5",attrs:{height:"32",elevation:"4"}},[e._v(" Admin Console ")]),n("router-view")],1)],1)},o=[],i={name:"App",data:function(){return{drawer:!1,nav:[{title:"Pessoal",icon:"mdi-home",to:"/"},{title:"Painel de controle",icon:"mdi-view-dashboard",to:"/dashboard"},{title:"Usuários",icon:"mdi-account",to:{name:"users"}}]}},methods:{nop:function(){}}},s=i,c=n("2877"),l=n("6544"),u=n.n(l),d=n("7496"),p=n("40dc"),f=n("5bc1"),m=n("a75b"),v=n("132d"),h=n("8860"),g=n("da13"),b=n("5d23"),y=n("34c3"),w=n("f774"),_=n("8dd9"),C=n("2fa4"),V=n("8654"),x=n("2a7f"),k=Object(c["a"])(s,a,o,!1,null,null,null),S=k.exports;u()(k,{VApp:d["a"],VAppBar:p["a"],VAppBarNavIcon:f["a"],VContent:m["a"],VIcon:v["a"],VList:h["a"],VListItem:g["a"],VListItemContent:b["a"],VListItemIcon:y["a"],VListItemTitle:b["b"],VNavigationDrawer:w["a"],VSheet:_["a"],VSpacer:C["a"],VTextField:V["a"],VToolbarTitle:x["a"]});n("d3b7");var A=n("8c4f"),O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",{staticClass:"home-panels-grid"},e._l(e.cards,(function(t){return n("v-col",{key:t.title,staticClass:"d-flex flex-column align-center",class:{"home-panels-grid__col--custom-col":e.$vuetify.breakpoint.lgAndUp},attrs:{cols:"2"}},[n("panel-card",{attrs:{icon:t.icon,title:t.title,description:t.description,action:t.action}})],1)})),1)],1)},P=[],j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"panel-card",on:{click:function(t){return e.$router.push(e.action)}}},[n("img",{attrs:{src:e.icon,alt:e.title,width:"48",height:"48"}}),n("div",{staticClass:"panel-card__title subtitle-2"},[e._v(e._s(e.title))]),n("div",{staticClass:"panel-card__description caption text--secondary"},[e._v(e._s(e.description))])])},E=[],T={props:{icon:String,title:String,description:String,action:null}},L=T,I=(n("2918"),Object(c["a"])(L,j,E,!1,null,null,null)),N=I.exports,$={name:"home",components:{PanelCard:N},data:function(){return{cards:[{icon:"//www.gstatic.com/apps/cpanel/resources/img/dashboard-googblue-48.png",title:"Painel de controle",description:"Ver insights relevantes sobre sua organização",action:"/"},{icon:"//www.gstatic.com/apps/cpanel/resources/img/people-quantum-48.svg",title:"Usuários",description:"Adicionar ou gerenciar usuários",action:{name:"users"}}]}}},B=$,q=(n("21bb"),n("62ad")),M=n("a523"),U=n("0fd9"),D=Object(c["a"])(B,O,P,!1,null,null,null),F=D.exports;u()(D,{VCol:q["a"],VContainer:M["a"],VRow:U["a"]}),r["a"].use(A["a"]);var J=[{path:"/",name:"home",component:F},{path:"/users",name:"users",component:function(){return n.e("users").then(n.bind(null,"ed81"))}}],z=new A["a"]({base:"/vuetify-admin-console/",routes:J}),H=z,K=n("2f62");r["a"].use(K["a"]);var R=new K["a"].Store({state:{},mutations:{},actions:{},modules:{}}),G=n("f309");r["a"].use(G["a"]);var Q=new G["a"]({theme:{themes:{light:{primary:"#3367d6"}}}});r["a"].config.productionTip=!1,new r["a"]({router:H,store:R,vuetify:Q,render:function(e){return e(S)}}).$mount("#app")},d63f:function(e,t,n){},f28f:function(e,t,n){}});
//# sourceMappingURL=app.764c0555.js.map