!function(){var t=CodeMirror.getMode({tabSize:4,indentUnit:2},"haml");function e(e){test.mode(e,t,Array.prototype.slice.call(arguments,1))}e("elementName","[tag %h1] Hey There"),e("oneElementPerLine","[tag %h1] Hey There %h2"),e("idSelector","[tag %h1][attribute #test] Hey There"),e("classSelector","[tag %h1][attribute .hello] Hey There"),e("docType","[tag !!! XML]"),e("comment","[comment / Hello WORLD]"),e("notComment","[tag %h1] This is not a / comment "),e("attributes",'[tag %a]([variable title][operator =][string "test"]){[atom :title] [operator =>] [string "test"]}'),e("htmlCode","[tag&bracket <][tag h1][tag&bracket >]Title[tag&bracket </][tag h1][tag&bracket >]"),e("rubyBlock","[operator =][variable-2 @item]"),e("selectorRubyBlock","[tag %a.selector=] [variable-2 @item]"),e("nestedRubyBlock","[tag %a]",'   [operator =][variable puts] [string "test"]'),e("multilinePlaintext","[tag %p]","  Hello,","  World"),e("multilineRuby","[tag %p]","  [comment -# this is a comment]","     [comment and this is a comment too]","  Date/Time","  [operator -] [variable now] [operator =] [tag DateTime][operator .][property now]","  [tag %strong=] [variable now]",'  [operator -] [keyword if] [variable now] [operator >] [tag DateTime][operator .][property parse]([string "December 31, 2006"])','     [operator =][string "Happy"]','     [operator =][string "Belated"]','     [operator =][string "Birthday"]'),e("multilineComment","[comment /]","  [comment Multiline]","  [comment Comment]"),e("hamlComment","[comment -# this is a comment]"),e("multilineHamlComment","[comment -# this is a comment]","   [comment and this is a comment too]"),e("multilineHTMLComment","[comment \x3c!--]","  [comment what a comment]","  [comment --\x3e]"),e("hamlAfterRubyTag","[attribute .block]","  [tag %strong=] [variable now]","  [attribute .test]","     [operator =][variable now]","  [attribute .right]"),e("stretchedRuby",'[operator =] [variable puts] [string "Hello"],','   [string "World"]'),e("interpolationInHashAttribute",'[tag %div]{[atom :id] [operator =>] [string "#{][variable test][string }_#{][variable ting][string }"]} test'),e("interpolationInHTMLAttribute",'[tag %div]([variable title][operator =][string "#{][variable test][string }_#{][variable ting]()[string }"]) Test')}();
