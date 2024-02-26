/*! elementor - v3.15.0 - 31-07-2023 */
"use strict";(self.webpackChunkelementor=self.webpackChunkelementor||[]).push([["alert"],{"../assets/dev/js/frontend/handlers/alert.js":
/*!***************************************************!*\
  !*** ../assets/dev/js/frontend/handlers/alert.js ***!
  \***************************************************/(e,s)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;class t extends elementorModules.frontend.handlers.Base{getDefaultSettings(){return{selectors:{dismissButton:".elementor-alert-dismiss"}}}getDefaultElements(){const e=this.getSettings("selectors");return{$dismissButton:this.$element.find(e.dismissButton)}}bindEvents(){this.elements.$dismissButton.on("click",this.onDismissButtonClick.bind(this))}onDismissButtonClick(){this.$element.fadeOut()}}s.default=t}}]);
