wp.customize.controlConstructor["kirki-typography"]=wp.customize.Control.extend({ready:function(){"use strict";var e,t,i,n=this,a=n.selector+" .font-family select",s=n.selector+" .variant select",r=n.selector+" .subsets select",l=n.selector+" .text-transform select",o=!1,u=!1,c={};_.each(n.params.default,(function(e,t){!1!==e&&(c[t]=e,void 0!==n.setting._value[t]&&(c[t]=n.setting._value[t]))})),_.each(n.setting._value,(function(e,t){void 0!==c[t]&&void 0!==c[t]||(c[t]=e)})),t=function(t,i,a){var l,v,f,h="variant"===i?s:r,d=!1,p={};void 0!==jQuery(h).selectize()[0]&&jQuery(h).selectize()[0].selectize.destroy(),_.each(kirkiAllFonts,(function(e,n){t===e.family&&(void 0!==e.isStandard&&!0===e.isStandard&&(d=!0),"variant"===i?p=e.variants:"subsets"===i&&(p=e.subsets))})),!1!==d&&"subsets"===i||(null===a?("variant"===i?_.each(p,(function(t){void 0!==t.id?e=c.variant:("regular","regular"===t.id?o=!0:!1===u&&(u=t.id))})):"subsets"===i&&(v={},_.each(p,(function(e){null!==c.subsets&&_.each(c.subsets,(function(t){void 0!==e&&t===e.id&&(v[t]=t)}))})),0!==v.length&&(f=jQuery.map(v,(function(e,t){return[e]})),e=f)),l=void 0!==e?e:!1!==o?"regular":u):l=a,jQuery(h).selectize({maxItems:"variant"===i?1:null,valueField:"id",labelField:"label",searchField:["label"],options:p,items:"variant"===i?[l]:l,create:!1,plugins:"variant"===i?"":["remove_button"],render:{item:function(e,t){return"<div>"+t(e.label)+"</div>"},option:function(e,t){return"<div>"+t(e.label)+"</div>"}}}).data("selectize")),!0===d?n.container.find(".hide-on-standard-fonts").css("display","none"):2>p.length?n.container.find(".kirki-"+i+"-wrapper").css("display","none"):n.container.find(".kirki-"+i+"-wrapper").css("display","block")},jQuery(a).selectize({options:kirkiAllFonts,items:[n.setting._value["font-family"]],persist:!1,maxItems:1,valueField:"family",labelField:"label",searchField:["family","label","subsets"],create:!1,render:{item:function(e,t){return"<div>"+t(e.label)+"</div>"},option:function(e,t){return"<div>"+t(e.label)+"</div>"}}}),t(c["font-family"],"variant",c.variant),t(c["font-family"],"subsets",c.subsets),this.container.on("change",".font-family select",(function(){c["font-family"]=jQuery(this).val(),n.saveValue(c),t(jQuery(this).val(),"variant",null),t(jQuery(this).val(),"subsets",null),wp.customize.previewer.refresh()})),this.container.on("change",".variant select",(function(){c.variant=jQuery(this).val(),n.saveValue(c),wp.customize.previewer.refresh()})),this.container.on("change",".subsets select",(function(){c.subsets=jQuery(this).val(),n.saveValue(c),wp.customize.previewer.refresh()})),this.container.on("change keyup paste",".font-size input",(function(){c["font-size"]=jQuery(this).val(),n.saveValue(c)})),this.container.on("change keyup paste",".line-height input",(function(){c["line-height"]=jQuery(this).val(),n.saveValue(c)})),this.container.on("change keyup paste",".letter-spacing input",(function(){c["letter-spacing"]=jQuery(this).val(),n.saveValue(c)})),this.container.on("change",".text-align input",(function(){c["text-align"]=jQuery(this).val(),n.saveValue(c)})),jQuery(l).selectize(),this.container.on("change",".text-transform select",(function(){c["text-transform"]=jQuery(this).val(),n.saveValue(c)})),(i=this.container.find(".kirki-color-control")).wpColorPicker({change:function(){setTimeout((function(){c.color=i.val(),n.saveValue(c)}),100)}})},saveValue:function(e){"use strict";var t={};_.each(e,(function(e,i){t[i]=e})),this.setting.set(t)}});
