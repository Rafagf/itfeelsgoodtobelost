!function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror"),require("./searchcursor"),require("../scroll/annotatescrollbar")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","./searchcursor","../scroll/annotatescrollbar"],t):t(CodeMirror)}((function(t){"use strict";function e(t,e,i,o){this.cm=t,this.options=o;var a={listenForChanges:!1};for(var n in o)a[n]=o[n];a.className||(a.className="CodeMirror-search-match"),this.annotation=t.annotateScrollbar(a),this.query=e,this.caseFold=i,this.gap={from:t.firstLine(),to:t.lastLine()+1},this.matches=[],this.update=null,this.findMatches(),this.annotation.update(this.matches);var s=this;t.on("change",this.changeHandler=function(t,e){s.onChange(e)})}t.defineExtension("showMatchesOnScrollbar",(function(t,i,o){return"string"==typeof o&&(o={className:o}),o||(o={}),new e(this,t,i,o)}));function i(t,e,i){return t<=e?t:Math.max(e,t+i)}e.prototype.findMatches=function(){if(this.gap){for(var e=0;e<this.matches.length;e++){if((a=this.matches[e]).from.line>=this.gap.to)break;a.to.line>=this.gap.from&&this.matches.splice(e--,1)}for(var i=this.cm.getSearchCursor(this.query,t.Pos(this.gap.from,0),this.caseFold),o=this.options&&this.options.maxMatches||1e3;i.findNext();){var a;if((a={from:i.from(),to:i.to()}).from.line>=this.gap.to)break;if(this.matches.splice(e++,0,a),this.matches.length>o)break}this.gap=null}},e.prototype.onChange=function(e){var o=e.from.line,a=t.changeEnd(e).line,n=a-e.to.line;if(this.gap?(this.gap.from=Math.min(i(this.gap.from,o,n),e.from.line),this.gap.to=Math.max(i(this.gap.to,o,n),e.from.line)):this.gap={from:e.from.line,to:a+1},n)for(var s=0;s<this.matches.length;s++){var r=this.matches[s],h=i(r.from.line,o,n);h!=r.from.line&&(r.from=t.Pos(h,r.from.ch));var c=i(r.to.line,o,n);c!=r.to.line&&(r.to=t.Pos(c,r.to.ch))}clearTimeout(this.update);var f=this;this.update=setTimeout((function(){f.updateAfterChange()}),250)},e.prototype.updateAfterChange=function(){this.findMatches(),this.annotation.update(this.matches)},e.prototype.clear=function(){this.cm.off("change",this.changeHandler),this.annotation.clear()}}));
