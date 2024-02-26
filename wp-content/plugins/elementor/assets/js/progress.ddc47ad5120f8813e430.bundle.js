/*! elementor - v3.15.0 - 31-07-2023 */
"use strict";(self.webpackChunkelementor=self.webpackChunkelementor||[]).push([["progress"],{"../assets/dev/js/frontend/handlers/progress.js":
/*!******************************************************!*\
  !*** ../assets/dev/js/frontend/handlers/progress.js ***!
  \******************************************************/(e,s)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;class t extends elementorModules.frontend.handlers.Base{getDefaultSettings(){return{selectors:{progressNumber:".elementor-progress-bar"}}}getDefaultElements(){const e=this.getSettings("selectors");return{$progressNumber:this.$element.find(e.progressNumber)}}onInit(){super.onInit(),elementorFrontend.waypoint(this.elements.$progressNumber,(()=>{const e=this.elements.$progressNumber;e.css("width",e.data("max")+"%")}))}}s.default=t}}]);
