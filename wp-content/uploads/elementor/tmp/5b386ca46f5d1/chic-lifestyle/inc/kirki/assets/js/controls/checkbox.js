wp.customize.controlConstructor["kirki-checkbox"]=wp.customize.Control.extend({ready:function(){"use strict";var t=this,e=t.setting._value;this.container.on("change","input",(function(){e=!!jQuery(this).is(":checked"),t.setting.set(e)}))}});
