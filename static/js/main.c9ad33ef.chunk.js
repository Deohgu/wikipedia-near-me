(this["webpackJsonpwikipedia-near-me"]=this["webpackJsonpwikipedia-near-me"]||[]).push([[0],{25:function(e,t,n){e.exports=n(34)},34:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(10),o=n.n(c),i=(n(30),n(7)),u=n.n(i),s=n(8),p=n(18),f=n(11),l=n(12);function m(){var e=Object(f.a)(["\n  body {\n    margin: 0;\n    font-family: Arial, Helvetica, sans-serif;\n  }\n"]);return m=function(){return e},e}var h=Object(l.a)(m()),g=n(5),b=n.n(g),d=n(38),v=n(35),j=n(37),w=n(36);function O(){var e=Object(f.a)(["\n  width: 100vw;\n  height: 100vh;\n"]);return O=function(){return e},e}var k=Object(l.b)(w.a)(O()),y=b.a.icon({iconUrl:"https://image.flaticon.com/icons/svg/49/49360.svg",iconSize:[35,35],popupAnchor:[0,-20]}),E=function(e){return a.a.createElement(k,{center:e.coords,zoom:e.zoom},a.a.createElement(d.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),void 0!==e.articles?e.articles.map((function(e,t){return a.a.createElement(v.a,{position:[e.lat,e.lon],key:"coords"+t,icon:y},a.a.createElement(j.a,null,a.a.createElement("a",{href:"https://en.wikipedia.org/wiki/"+e.title},e.title)))})):null)},x=function(){var e=Object(s.a)(u.a.mark((function e(t){var n,r,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n="https://en.wikipedia.org/w/api.php?action=query&format=json&list=geosearch&gscoord=".concat(t,"&gsradius=10000&gslimit=10&gsnamespace=0&origin=*"),"15.925994%7C-37.193399"===t){e.next=10;break}return e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:return a=e.sent,c=a.query.geosearch,e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(r.useState)([]),t=Object(p.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)([15.925994,-37.193399]),i=Object(p.a)(o,2),f=i[0],l=i[1],m=Object(r.useState)(15),g=Object(p.a)(m,1)[0];return Object(r.useEffect)((function(){setTimeout((function(){(function(){var e=Object(s.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=function(){navigator.geolocation.getCurrentPosition(n)},n=function(e){l([e.coords.latitude,e.coords.longitude])},t();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),1e3)}),[]),Object(r.useEffect)((function(){(function(){var e=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(f[0]+"%7C"+f[1]);case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[f]),a.a.createElement(a.a.Fragment,null,a.a.createElement(h,null),a.a.createElement(E,{articles:n,coords:f,zoom:g}))};o.a.render(a.a.createElement(z,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.c9ad33ef.chunk.js.map