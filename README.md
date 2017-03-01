# a webpack loader for octal numbers #

Octal numbers like 00001 will be changed to 0o0001.

This is because strict mode babel does not allow them. See:
https://github.com/lukehoban/es6features#binary-and-octal-literals

In my webpack config, I only use it on particular files that are troublesome.

```js
{
  test: /tar[\\\/].*\.js$/,
  loader: 'babel-loader!octal-number-loader'
}
```

Notes
=====

- It should correctly handle identifiers and floating point numbers now.

---

Use as you see fit, I claim no copyright over this.

![CC0-1.0](https://licensebuttons.net/p/zero/1.0/88x31.png)
