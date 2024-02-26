!function(){"use strict";var e={"./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/function(e,t,n){var o=n(/*! react-dom */"react-dom"),r=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;t.createRoot=function(e,t){r.usingClientEntryPoint=!0;try{return o.createRoot(e,t)}finally{r.usingClientEntryPoint=!1}},t.hydrateRoot=function(e,t,n){r.usingClientEntryPoint=!0;try{return o.hydrateRoot(e,t,n)}finally{r.usingClientEntryPoint=!1}}},react:
/*!************************!*\
  !*** external "React" ***!
  \************************/function(e){e.exports=window.React},"react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/function(e){e.exports=window.ReactDOM},"@elementor/editor-documents":
/*!********************************************************************!*\
  !*** external ["__UNSTABLE__elementorPackages","editorDocuments"] ***!
  \********************************************************************/function(e){e.exports=window.__UNSTABLE__elementorPackages.editorDocuments},"@elementor/editor-v1-adapters":
/*!*********************************************************************!*\
  !*** external ["__UNSTABLE__elementorPackages","editorV1Adapters"] ***!
  \*********************************************************************/function(e){e.exports=window.__UNSTABLE__elementorPackages.editorV1Adapters},"@elementor/locations":
/*!**************************************************************!*\
  !*** external ["__UNSTABLE__elementorPackages","locations"] ***!
  \**************************************************************/function(e){e.exports=window.__UNSTABLE__elementorPackages.locations},"@elementor/store":
/*!**********************************************************!*\
  !*** external ["__UNSTABLE__elementorPackages","store"] ***!
  \**********************************************************/function(e){e.exports=window.__UNSTABLE__elementorPackages.store},"@elementor/ui":
/*!*******************************************************!*\
  !*** external ["__UNSTABLE__elementorPackages","ui"] ***!
  \*******************************************************/function(e){e.exports=window.__UNSTABLE__elementorPackages.ui},"@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/function(e){e.exports=window.wp.i18n}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};!function(){
/*!*******************************************************!*\
  !*** ./node_modules/@elementor/editor/dist/index.mjs ***!
  \*******************************************************/
n.r(o),n.d(o,{init:function(){return p},injectIntoTop:function(){return m}});var e=n(/*! @elementor/locations */"@elementor/locations"),t=n(/*! react */"react"),r=n(/*! react-dom */"react-dom"),i=n(/*! react-dom/client */"./node_modules/react-dom/client.js"),c=n(/*! @wordpress/i18n */"@wordpress/i18n"),s=n(/*! @elementor/editor-documents */"@elementor/editor-documents"),u=n(/*! @elementor/ui */"@elementor/ui"),a=n(/*! @elementor/store */"@elementor/store"),l=n(/*! @elementor/editor-v1-adapters */"@elementor/editor-v1-adapters"),{Slot:d,inject:m}=(0,e.createLocation)();function _(){return function(){const e=(0,s.useActiveDocument)(),n=(0,s.useHostDocument)(),o=e&&"kit"!==e.type.value?e:n;(0,t.useEffect)((()=>{if(void 0===o?.title)return;const e=(0,c.__)('Edit "%s" with Elementor',"elementor").replace("%s",o.title);window.document.title=e}),[o?.title])}(),t.createElement(d,null)}function f(){return window.elementor?.getPreferences?.("ui_theme")||"auto"}function E({children:e}){const n=function(){const[e,n]=(0,t.useState)((()=>f()));return(0,t.useEffect)((()=>(0,l.listenTo)((0,l.v1ReadyEvent)(),(()=>n(f())))),[]),(0,t.useEffect)((()=>(0,l.listenTo)((0,l.commandEndEvent)("document/elements/settings"),(e=>{const t=e;t.args?.settings&&"ui_theme"in t.args.settings&&n(f())}))),[]),e}();return t.createElement(u.ThemeProvider,{colorScheme:n},e)}function p(e){const n=(0,a.createStore)();(0,l.dispatchReadyEvent)(),function(e,t){let n;try{const o=(0,i.createRoot)(t);n=()=>{o.render(e)}}catch(o){n=()=>{r.render(e,t)}}n()}(t.createElement(a.StoreProvider,{store:n},t.createElement(u.DirectionProvider,{rtl:(0,c.isRTL)()},t.createElement(E,null,t.createElement(_,null)))),e)}}(),(window.__UNSTABLE__elementorPackages=window.__UNSTABLE__elementorPackages||{}).editor=o}();
