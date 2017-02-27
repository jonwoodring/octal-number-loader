module.exports = function(source) {
  this.cacheable && this.cacheable();
  // I this possibly could still match an exponent
  // in a floating point: 1e-05
  while ((typeof source === "string") && (/([^a-zA-Z0-9$_.]|^)0[0-7]+([^a-zA-Z0-9$_.]|$)/.test(source))) {
    source = source.replace(/([^a-zA-Z0-9$_.]|^)(0)([0-7]+)([^a-zA-Z0-9$_.]|$)/, '$1$2o$3$4')
  }
  return source;
}
