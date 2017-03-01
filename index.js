'use strict';

module.exports = function(source) {
  this.cacheable && this.cacheable();

  if (typeof source === "string") {
    // javascript doesn't have negative lookbehind
    // so we have to reverse the string
    var sreverse = function(s) {
      var r = '';
      for (var i = s.length - 1; i >= 0; i--) {
        r += s[i];
      }
      return r;
    }

    // ignore identifiers and floating point with reversed lookahead
    var re = /([0-7]+)0(?![a-zA-Z0-9$_.]|[+-][eE][0-9]*[.]?[0-9]+|[eE][0-9]*[.]?[0-9]+)/;

    var lines = sreverse(source).split('\n');
    var fixed = [];
    for (var i = 0; i < lines.length; i++)
    {
      var line = lines[i] + '\n';
      while (re.test(line)) {
        line = line.replace(re, '$1o0');
      }
      fixed.push(line);
    }
    
    source = sreverse(fixed.join(''));
  }

  return source;
}
