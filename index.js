module.exports = function(source) {
  this.cacheable && this.cacheable();
  while ((typeof source === "string") && (/\b0[0-7]+\b/.test(source))) {
    source = source.replace(/\b0([0-7]+)\b/, '0o$1');
  }
  return source;
}
