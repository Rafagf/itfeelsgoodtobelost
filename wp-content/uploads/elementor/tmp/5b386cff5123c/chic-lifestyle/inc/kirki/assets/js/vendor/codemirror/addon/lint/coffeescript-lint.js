!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}((function(e){"use strict";e.registerHelper("lint","coffeescript",(function(o){var r,t,i=[];try{for(var s=coffeelint.lint(o),n=0;n<s.length;n++)r=s[n],t=void 0,t=r.lineNumber,i.push({from:e.Pos(t-1,0),to:e.Pos(t,0),severity:r.level,message:r.message})}catch(o){i.push({from:e.Pos(o.location.first_line,0),to:e.Pos(o.location.last_line,o.location.last_column),severity:"error",message:o.message})}return i}))}));
