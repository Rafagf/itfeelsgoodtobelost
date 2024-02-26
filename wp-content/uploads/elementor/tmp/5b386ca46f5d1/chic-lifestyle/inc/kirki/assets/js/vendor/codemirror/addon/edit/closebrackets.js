!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}((function(e){var t={pairs:"()[]{}''\"\"",triples:"",explode:"[]{}"},n=e.Pos;function r(e,n){return"pairs"==n&&"string"==typeof e?e:"object"==typeof e&&null!=e[n]?e[n]:t[n]}e.defineOption("autoCloseBrackets",!1,(function(t,n,r){r&&r!=e.Init&&(t.removeKeyMap(a),t.state.closeBrackets=null),n&&(t.state.closeBrackets=n,t.addKeyMap(a))}));for(var i=t.pairs+"`",a={Backspace:function(t){var i=l(t);if(!i||t.getOption("disableInput"))return e.Pass;for(var a=r(i,"pairs"),o=t.listSelections(),s=0;s<o.length;s++){if(!o[s].empty())return e.Pass;var c=h(t,o[s].head);if(!c||a.indexOf(c)%2!=0)return e.Pass}for(s=o.length-1;s>=0;s--){var f=o[s].head;t.replaceRange("",n(f.line,f.ch-1),n(f.line,f.ch+1))}},Enter:function(t){var n=l(t),i=n&&r(n,"explode");if(!i||t.getOption("disableInput"))return e.Pass;for(var a=t.listSelections(),o=0;o<a.length;o++){if(!a[o].empty())return e.Pass;var s=h(t,a[o].head);if(!s||i.indexOf(s)%2!=0)return e.Pass}t.operation((function(){t.replaceSelection("\n\n",null),t.execCommand("goCharLeft"),a=t.listSelections();for(var e=0;e<a.length;e++){var n=a[e].head.line;t.indentLine(n,null,!0),t.indentLine(n+1,null,!0)}}))}},o=0;o<i.length;o++)a["'"+i.charAt(o)+"'"]=s(i.charAt(o));function s(t){return function(i){return function(t,i){var a=l(t);if(!a||t.getOption("disableInput"))return e.Pass;var o=r(a,"pairs"),s=o.indexOf(i);if(-1==s)return e.Pass;for(var h,d=r(a,"triples"),g=o.charAt(s+1)==i,p=t.listSelections(),v=s%2==0,m=0;m<p.length;m++){var b,x=p[m],C=x.head,P=t.getRange(C,n(C.line,C.ch+1));if(v&&!x.empty())b="surround";else if(!g&&v||P!=i)if(g&&C.ch>1&&d.indexOf(i)>=0&&t.getRange(n(C.line,C.ch-2),C)==i+i&&(C.ch<=2||t.getRange(n(C.line,C.ch-3),n(C.line,C.ch-2))!=i))b="addFour";else if(g){if(e.isWordChar(P)||!u(t,C,i))return e.Pass;b="both"}else{if(!v||t.getLine(C.line).length!=C.ch&&!f(P,o)&&!/\s/.test(P))return e.Pass;b="both"}else b=d.indexOf(i)>=0&&t.getRange(C,n(C.line,C.ch+3))==i+i+i?"skipThree":"skip";if(h){if(h!=b)return e.Pass}else h=b}var S=s%2?o.charAt(s-1):i,k=s%2?i:o.charAt(s+1);t.operation((function(){if("skip"==h)t.execCommand("goCharRight");else if("skipThree"==h)for(var e=0;e<3;e++)t.execCommand("goCharRight");else if("surround"==h){var n=t.getSelections();for(e=0;e<n.length;e++)n[e]=S+n[e]+k;t.replaceSelections(n,"around"),n=t.listSelections().slice();for(e=0;e<n.length;e++)n[e]=c(n[e]);t.setSelections(n)}else"both"==h?(t.replaceSelection(S+k,null),t.triggerElectric(S+k),t.execCommand("goCharLeft")):"addFour"==h&&(t.replaceSelection(S+S+S+S,"before"),t.execCommand("goCharRight"))}))}(i,t)}}function l(e){var t=e.state.closeBrackets;return t?e.getModeAt(e.getCursor()).closeBrackets||t:null}function c(t){var r=e.cmpPos(t.anchor,t.head)>0;return{anchor:new n(t.anchor.line,t.anchor.ch+(r?-1:1)),head:new n(t.head.line,t.head.ch+(r?1:-1))}}function f(e,t){var n=t.lastIndexOf(e);return n>-1&&n%2==1}function h(e,t){var r=e.getRange(n(t.line,t.ch-1),n(t.line,t.ch+1));return 2==r.length?r:null}function u(t,n,r){var i=t.getLine(n.line),a=t.getTokenAt(n);if(/\bstring2?\b/.test(a.type))return!1;var o=new e.StringStream(i.slice(0,n.ch)+r+i.slice(n.ch),4);for(o.pos=o.start=a.start;;){var s=t.getMode().token(o,a.state);if(o.pos>=n.ch+1)return/\bstring2?\b/.test(s);o.start=o.pos}}}));
