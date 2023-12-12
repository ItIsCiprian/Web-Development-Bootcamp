(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{714:
/*!*****************************************************!*\
  !*** ./src/components/RemoveButton/RemoveButton.js ***!
  \*****************************************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,n){"use strict";var a=n(/*! @babel/runtime-corejs3/helpers/toConsumableArray */721),r=n.n(a),l=n(/*! react */0),o=n.n(l),i=(n(/*! core-js/modules/es.array.join.js */326),n(/*! @babel/runtime-corejs3/core-js/instance/filter */42)),c=n.n(i),u=n(/*! @babel/runtime-corejs3/core-js/instance/concat */54),s=n.n(u),m=n(/*! @redwoodjs/router */8),b=n(/*! @heroicons/react/solid */722),d=function(e,t,n){var a,l,o=c()(a=r()(t)).call(a,(function(t){return t!==e.id})),i=1==o.length?s()(l="/".concat(n,"/")).call(l,o[0]):o.length>1?m.routes.multiselect({id:n,ids:o.join(",")}):m.routes.home();return i};t.a=function(e){var t=e.item,n=e.hover,a=e.ids,r=e.type;return n&&n.id==t.id?o.a.createElement(m.Link,{to:d(t,a,r)},o.a.createElement(b.a,{className:"inline-block w-5 h-5 ml-1 -mt-1 text-gray-400 hover:text-tg-blue-darker"})):o.a.createElement(o.a.Fragment,null)}},720:
/*!*****************************************************************!*\
  !*** ./src/components/SubmarineCableList/SubmarineCableList.js ***!
  \*****************************************************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,n){"use strict";var a=n(/*! @babel/runtime-corejs3/helpers/slicedToArray */38),r=n.n(a),l=(n(/*! core-js/modules/es.function.name.js */325),n(/*! @babel/runtime-corejs3/core-js/instance/concat */54)),o=n.n(l),i=n(/*! @babel/runtime-corejs3/core-js/instance/map */19),c=n.n(i),u=n(/*! react */0),s=n.n(u),m=n(/*! @redwoodjs/router */8),b=n(/*! ../../contexts/MapContext/MapContext */122),d=n(/*! ../RemoveButton/RemoveButton */714);t.a=function(e){var t=e.submarineCables,n=e.xl,a=e.ids,l=e.toggleLandingTooltip,i=e.rfs,f=e.group_by_rfs,p=Object(u.useState)(null),g=r()(p,2),v=g[0],E=g[1],x=Object(u.useContext)(b.a);return Object(u.useEffect)((function(){if(v){var e,t,n=x.getSubmarineCableCentroid(v.id+"-0"),a=x.getSubmarineCableColor(v.id+"-0");x.openInfoWindowHover({position:n,content:o()(e=o()(t='<div class="cable tooltip" style="background-color:'.concat(a,";border-top-color:")).call(t,a,';">')).call(e,v.name,'<div class="tooltip-pointer"></div></div>')})}else x.infoWindowHover.close();l&&l(!v||null)}),[v]),n?s.a.createElement(s.a.Fragment,null,c()(t).call(t,(function(e){return s.a.createElement(m.Link,{key:e.id,to:m.routes.submarineCable({id:e.id}),onMouseEnter:function(){return E(e)},onMouseLeave:function(){return E(null)},className:"block bg-gray-50 text-black hover:bg-gray-150 hover:text-black py-2 px-8 border-b border-gray-200"},e.name)}))):s.a.createElement(s.a.Fragment,null,s.a.createElement("h3",null,a?"Selection":f?"RFS "+("null"!=i?i:"n.a."):"Submarine Cables"),s.a.createElement("ul",null,c()(t).call(t,(function(e){return s.a.createElement("li",{key:e.id,onMouseEnter:function(){return E(e)},onMouseLeave:function(){return E(null)}},s.a.createElement(m.Link,{to:m.routes.submarineCable({id:e.id}),className:"text-tg-blue hover:text-tg-blue-darker"},e.name,!i&&e.is_planned?s.a.createElement("span",{className:"inline-block align-middle ml-1 -mt-1 px-1.5 rounded-full border border-gray-400 text-xs text-gray-500"},e.rfs_year):""),a&&s.a.createElement(d.a,{item:e,hover:v,ids:a,type:"submarine-cable"}))}))))}},770:
/*!****************************************!*\
  !*** ./src/pages/HomePage/HomePage.js ***!
  \****************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./src/Routes.js (referenced with import()) */function(e,t,n){"use strict";n.r(t);n(/*! core-js/modules/es.regexp.exec.js */99),n(/*! core-js/modules/es.string.replace.js */231);var a=n(/*! react */0),r=n.n(a),l=n(/*! react-fetch-hook */64),o=n.n(l),i=n(/*! @redwoodjs/router */8),c=n(/*! ../../contexts/MapContext/MapContext */122),u=n(/*! ../../components/SubmarineCableList/SubmarineCableList */720);t.default=function(){var e=Object(i.useLocation)().hash;if(e)return r.a.createElement(i.Redirect,{to:e.replace("#","")});var t=o()("/api/v3/cable/all.json").data;return Object(a.useContext)(c.a).resetMap(),t?r.a.createElement("div",null,r.a.createElement("h2",{className:"text-base px-8 py-2 pt-4"},"Submarine Cables"),r.a.createElement(u.a,{submarineCables:t,xl:!0})):r.a.createElement(r.a.Fragment,null)}}}]);