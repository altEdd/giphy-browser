(this["webpackJsonpgiphy-browser"]=this["webpackJsonpgiphy-browser"]||[]).push([[0],[,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),i=n(6),s=n.n(i),o=(n(12),n(2));n(13),n(14);var u=function(t){var e=Object(c.useState)(""),n=Object(o.a)(e,2),r=n[0],i=n[1];return Object(a.jsx)("div",{className:"search-bar",children:Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t.onSearch(r)},children:[Object(a.jsx)("input",{className:"search-bar-input",name:"search-bar",placeholder:"Search Giphy...",type:"text",value:r,onChange:function(t){return i(t.currentTarget.value)}}),Object(a.jsx)("input",{className:"search-bar-btn search-bar-btn-search",type:"submit",value:" \ud83d\udd0d "}),Object(a.jsx)("input",{className:"search-bar-btn search-bar-btn-clear",type:"button",value:" \u274c ",onClick:function(){i(""),t.onSearch("")}})]})})},l=n(3),f=n.n(l),p=n(4),h=(n(16),"0FN4Q05kFTNZTyNkHLHw4kXG7epp4mvt"),b="https://api.giphy.com/v1/gifs/trending",j="https://api.giphy.com/v1/gifs/search";function d(t){return m.apply(this,arguments)}function m(){return(m=Object(p.a)(f.a.mark((function t(e){var n,a,c,r,i,s,o,u;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.limit,a=e.offset,(c=new URLSearchParams).append("api_key",h),c.append("limit",n.toString()),c.append("offset",a.toString()),r="".concat(b,"?").concat(c),t.prev=6,t.next=9,fetch(r);case 9:return i=t.sent,t.next=12,i.json();case 12:return s=t.sent,o=s.data,u=s.pagination,t.abrupt("return",{data:o,pagination:u});case 17:throw t.prev=17,t.t0=t.catch(6),t.t0;case 20:case"end":return t.stop()}}),t,null,[[6,17]])})))).apply(this,arguments)}function v(){return(v=Object(p.a)(f.a.mark((function t(e){var n,a,c,r,i,s,o;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.q,(a=new URLSearchParams).append("api_key",h),a.append("q",n),c="".concat(j,"?").concat(a),t.prev=5,t.next=8,fetch(c);case 8:return r=t.sent,t.next=11,r.json();case 11:return i=t.sent,s=i.data,o=i.pagination,t.abrupt("return",{data:s,pagination:o});case 16:throw t.prev=16,t.t0=t.catch(5),t.t0;case 19:case"end":return t.stop()}}),t,null,[[5,16]])})))).apply(this,arguments)}var O=function(t){var e=Object(c.useState)(!1),n=Object(o.a)(e,2),r=n[0],i=n[1],s=Object(c.useState)([]),u=Object(o.a)(s,2),l=u[0],h=u[1],b=Object(c.useState)(!1),j=Object(o.a)(b,2),m=j[0],O=j[1],g=24,x=Object(c.useState)({limit:g,offset:0}),w=Object(o.a)(x,2),y=w[0],S=w[1],k=Object(c.useState)(!1),N=Object(o.a)(k,2),E=N[0],C=N[1],F=Object(c.useState)(null),L=Object(o.a)(F,2),T=L[0],H=L[1];function P(t){window.innerHeight+document.documentElement.scrollTop+200>=document.documentElement.offsetHeight&&O(!0)}return Object(c.useEffect)((function(){var t=!0;function e(){return(e=Object(p.a)(f.a.mark((function e(){var n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d({limit:g,offset:0});case 3:n=e.sent,a=n.data,t&&(h(a),S({limit:48,offset:g}),window.addEventListener("scroll",P)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert("There was an error loading gifs from giphy: ".concat(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),function(){t=!1,window.removeEventListener("scroll",P)}}),[]),Object(c.useEffect)((function(){m&&C(!0)}),[m]),Object(c.useEffect)((function(){if(r&&C(!1),!r&&E){var t={limit:y.limit+g,offset:y.offset+g};d(t).then((function(e){var n=e.data;C(!1),O(!1);var a=l.concat(n.filter((function(t){return-1===l.findIndex((function(e){return e.id===t.id}))})));h(a),S(t)})).catch((function(t){console.error(t)}))}}),[E]),Object(c.useEffect)((function(){var e=t.searchQuery;""!==e?function(t){return v.apply(this,arguments)}({q:e}).then((function(t){var e=t.data;h(e)})).catch((function(t){console.error(t)})).finally((function(){i(!0)})):""===e&&(i(!1),h([]),S({limit:g,offset:0}),C(!0))}),[t]),Object(a.jsxs)("div",{className:"giphs-wrap",children:[Object(a.jsx)("div",{className:"giphs",children:l.map((function(t){return Object(a.jsxs)("div",{className:"giph",onClick:function(e){e.preventDefault(),H(t)},children:[Object(a.jsx)("img",{src:t.images.fixed_height_downsampled.url,alt:t.slug}),Object(a.jsx)("div",{className:"title",children:t.title})]},t.id)}))}),null!==T&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"giph-modal-overlay",onClick:function(){return H(null)}}),Object(a.jsxs)("div",{className:"giph-modal",children:[Object(a.jsxs)("div",{className:"giph-modal-close",onClick:function(){return H(null)},children:["\u274c"," "]}),Object(a.jsx)("img",{src:T.images.original.url,alt:T.slug})]})]})]})};var g=function(){var t=Object(c.useState)(""),e=Object(o.a)(t,2),n=e[0],r=e[1];return Object(a.jsxs)("div",{className:"app",children:[Object(a.jsx)(u,{onSearch:function(t){return r(t)}}),Object(a.jsx)(O,{searchQuery:n})]})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root")),x()}],[[17,1,2]]]);
//# sourceMappingURL=main.e52c9124.chunk.js.map