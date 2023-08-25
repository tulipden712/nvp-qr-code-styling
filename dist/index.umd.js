(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.foo = {}));
}(this, (function (exports) { 'use strict';

  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _regeneratorRuntime() {
    _regeneratorRuntime = function () {
      return e;
    };
    var t,
      e = {},
      r = Object.prototype,
      n = r.hasOwnProperty,
      o = Object.defineProperty || function (t, e, r) {
        t[e] = r.value;
      },
      i = "function" == typeof Symbol ? Symbol : {},
      a = i.iterator || "@@iterator",
      c = i.asyncIterator || "@@asyncIterator",
      u = i.toStringTag || "@@toStringTag";
    function define(t, e, r) {
      return Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), t[e];
    }
    try {
      define({}, "");
    } catch (t) {
      define = function (t, e, r) {
        return t[e] = r;
      };
    }
    function wrap(t, e, r, n) {
      var i = e && e.prototype instanceof Generator ? e : Generator,
        a = Object.create(i.prototype),
        c = new Context(n || []);
      return o(a, "_invoke", {
        value: makeInvokeMethod(t, r, c)
      }), a;
    }
    function tryCatch(t, e, r) {
      try {
        return {
          type: "normal",
          arg: t.call(e, r)
        };
      } catch (t) {
        return {
          type: "throw",
          arg: t
        };
      }
    }
    e.wrap = wrap;
    var h = "suspendedStart",
      l = "suspendedYield",
      f = "executing",
      s = "completed",
      y = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var p = {};
    define(p, a, function () {
      return this;
    });
    var d = Object.getPrototypeOf,
      v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    function defineIteratorMethods(t) {
      ["next", "throw", "return"].forEach(function (e) {
        define(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }
    function AsyncIterator(t, e) {
      function invoke(r, o, i, a) {
        var c = tryCatch(t[r], t, o);
        if ("throw" !== c.type) {
          var u = c.arg,
            h = u.value;
          return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
            invoke("next", t, i, a);
          }, function (t) {
            invoke("throw", t, i, a);
          }) : e.resolve(h).then(function (t) {
            u.value = t, i(u);
          }, function (t) {
            return invoke("throw", t, i, a);
          });
        }
        a(c.arg);
      }
      var r;
      o(this, "_invoke", {
        value: function (t, n) {
          function callInvokeWithMethodAndArg() {
            return new e(function (e, r) {
              invoke(t, n, e, r);
            });
          }
          return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(e, r, n) {
      var o = h;
      return function (i, a) {
        if (o === f) throw new Error("Generator is already running");
        if (o === s) {
          if ("throw" === i) throw a;
          return {
            value: t,
            done: !0
          };
        }
        for (n.method = i, n.arg = a;;) {
          var c = n.delegate;
          if (c) {
            var u = maybeInvokeDelegate(c, n);
            if (u) {
              if (u === y) continue;
              return u;
            }
          }
          if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
            if (o === h) throw o = s, n.arg;
            n.dispatchException(n.arg);
          } else "return" === n.method && n.abrupt("return", n.arg);
          o = f;
          var p = tryCatch(e, r, n);
          if ("normal" === p.type) {
            if (o = n.done ? s : l, p.arg === y) continue;
            return {
              value: p.arg,
              done: n.done
            };
          }
          "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
        }
      };
    }
    function maybeInvokeDelegate(e, r) {
      var n = r.method,
        o = e.iterator[n];
      if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
      var i = tryCatch(o, e.iterator, r.arg);
      if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
      var a = i.arg;
      return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
    }
    function pushTryEntry(t) {
      var e = {
        tryLoc: t[0]
      };
      1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }
    function resetTryEntry(t) {
      var e = t.completion || {};
      e.type = "normal", delete e.arg, t.completion = e;
    }
    function Context(t) {
      this.tryEntries = [{
        tryLoc: "root"
      }], t.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(e) {
      if (e || "" === e) {
        var r = e[a];
        if (r) return r.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var o = -1,
            i = function next() {
              for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
              return next.value = t, next.done = !0, next;
            };
          return i.next = i;
        }
      }
      throw new TypeError(typeof e + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0
    }), o(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
      var e = "function" == typeof t && t.constructor;
      return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
    }, e.mark = function (t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
    }, e.awrap = function (t) {
      return {
        __await: t
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
      return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new AsyncIterator(wrap(t, r, n, o), i);
      return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
        return t.done ? t.value : a.next();
      });
    }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
      return this;
    }), define(g, "toString", function () {
      return "[object Generator]";
    }), e.keys = function (t) {
      var e = Object(t),
        r = [];
      for (var n in e) r.push(n);
      return r.reverse(), function next() {
        for (; r.length;) {
          var t = r.pop();
          if (t in e) return next.value = t, next.done = !1, next;
        }
        return next.done = !0, next;
      };
    }, e.values = values, Context.prototype = {
      constructor: Context,
      reset: function (e) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      },
      stop: function () {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function (e) {
        if (this.done) throw e;
        var r = this;
        function handle(n, o) {
          return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i.completion;
          if ("root" === i.tryLoc) return handle("end");
          if (i.tryLoc <= this.prev) {
            var c = n.call(i, "catchLoc"),
              u = n.call(i, "finallyLoc");
            if (c && u) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            } else if (c) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            } else {
              if (!u) throw new Error("try statement without catch or finally");
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            }
          }
        }
      },
      abrupt: function (t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r];
          if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
            var i = o;
            break;
          }
        }
        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
        var a = i ? i.completion : {};
        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
      },
      complete: function (t, e) {
        if ("throw" === t.type) throw t.arg;
        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
      },
      finish: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
        }
      },
      catch: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.tryLoc === t) {
            var n = r.completion;
            if ("throw" === n.type) {
              var o = n.arg;
              resetTryEntry(r);
            }
            return o;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (e, r, n) {
        return this.delegate = {
          iterator: values(e),
          resultName: r,
          nextLoc: n
        }, "next" === this.method && (this.arg = t), y;
      }
    }, e;
  }
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
        args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  var modes = {
    numeric: "Numeric",
    alphanumeric: "Alphanumeric",
    byte: "Byte",
    kanji: "Kanji"
  };

  function getMode(data) {
    switch (true) {
      case /^[0-9]*$/.test(data):
        return modes.numeric;
      case /^[0-9A-Z $%*+\-./:]*$/.test(data):
        return modes.alphanumeric;
      default:
        return modes.byte;
    }
  }

  var isObject = function isObject(obj) {
    return !!obj && _typeof(obj) === "object" && !Array.isArray(obj);
  };
  function mergeDeep(target) {
    for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      sources[_key - 1] = arguments[_key];
    }
    if (!sources.length) return target;
    var source = sources.shift();
    if (source === undefined || !isObject(target) || !isObject(source)) return target;
    target = _objectSpread2({}, target);
    Object.keys(source).forEach(function (key) {
      var targetValue = target[key];
      var sourceValue = source[key];
      if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
        target[key] = sourceValue;
      } else if (isObject(targetValue) && isObject(sourceValue)) {
        target[key] = mergeDeep(Object.assign({}, targetValue), sourceValue);
      } else {
        target[key] = sourceValue;
      }
    });
    return mergeDeep.apply(void 0, [target].concat(sources));
  }

  function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function calculateImageSize(_ref) {
    var originalHeight = _ref.originalHeight,
      originalWidth = _ref.originalWidth,
      maxHiddenDots = _ref.maxHiddenDots,
      maxHiddenAxisDots = _ref.maxHiddenAxisDots,
      dotSize = _ref.dotSize;
    var hideDots = {
      x: 0,
      y: 0
    };
    var imageSize = {
      x: 0,
      y: 0
    };
    if (originalHeight <= 0 || originalWidth <= 0 || maxHiddenDots <= 0 || dotSize <= 0) {
      return {
        height: 0,
        width: 0,
        hideYDots: 0,
        hideXDots: 0
      };
    }
    var k = originalHeight / originalWidth;
    //Getting the maximum possible axis hidden dots
    hideDots.x = Math.floor(Math.sqrt(maxHiddenDots / k));
    //The count of hidden dot's can't be less than 1
    if (hideDots.x <= 0) hideDots.x = 1;
    //Check the limit of the maximum allowed axis hidden dots
    if (maxHiddenAxisDots && maxHiddenAxisDots < hideDots.x) hideDots.x = maxHiddenAxisDots;
    //The count of dots should be odd
    if (hideDots.x % 2 === 0) hideDots.x--;
    imageSize.x = hideDots.x * dotSize;
    //Calculate opposite axis hidden dots based on axis value.
    //The value will be odd.
    //We use ceil to prevent dots covering by the image.
    hideDots.y = 1 + 2 * Math.ceil((hideDots.x * k - 1) / 2);
    imageSize.y = Math.round(imageSize.x * k);
    //If the result dots count is bigger than max - then decrease size and calculate again
    if (hideDots.y * hideDots.x > maxHiddenDots || maxHiddenAxisDots && maxHiddenAxisDots < hideDots.y) {
      if (maxHiddenAxisDots && maxHiddenAxisDots < hideDots.y) {
        hideDots.y = maxHiddenAxisDots;
        if (hideDots.y % 2 === 0) hideDots.x--;
      } else {
        hideDots.y -= 2;
      }
      imageSize.y = hideDots.y * dotSize;
      hideDots.x = 1 + 2 * Math.ceil((hideDots.y / k - 1) / 2);
      imageSize.x = Math.round(imageSize.y / k);
    }
    return {
      height: imageSize.y,
      width: imageSize.x,
      hideYDots: hideDots.y,
      hideXDots: hideDots.x
    };
  }

  var errorCorrectionPercents = {
    L: 0.07,
    M: 0.15,
    Q: 0.25,
    H: 0.3
  };

  var dotTypes = {
    dots: "dots",
    rounded: "rounded",
    classy: "classy",
    classyRounded: "classy-rounded",
    square: "square",
    extraRounded: "extra-rounded"
  };

  var QRDot = /*#__PURE__*/function () {
    function QRDot(_ref) {
      var context = _ref.context,
        type = _ref.type;
      _classCallCheck(this, QRDot);
      this._context = void 0;
      this._type = void 0;
      this._context = context;
      this._type = type;
    }
    _createClass(QRDot, [{
      key: "draw",
      value: function draw(x, y, size, getNeighbor) {
        var context = this._context;
        var type = this._type;
        var drawFunction;
        switch (type) {
          case dotTypes.dots:
            drawFunction = this._drawDot;
            break;
          case dotTypes.classy:
            drawFunction = this._drawClassy;
            break;
          case dotTypes.classyRounded:
            drawFunction = this._drawClassyRounded;
            break;
          case dotTypes.rounded:
            drawFunction = this._drawRounded;
            break;
          case dotTypes.extraRounded:
            drawFunction = this._drawExtraRounded;
            break;
          case dotTypes.square:
          default:
            drawFunction = this._drawSquare;
        }
        drawFunction.call(this, {
          x: x,
          y: y,
          size: size,
          context: context,
          getNeighbor: getNeighbor
        });
      }
    }, {
      key: "_rotateFigure",
      value: function _rotateFigure(_ref2) {
        var x = _ref2.x,
          y = _ref2.y,
          size = _ref2.size,
          context = _ref2.context,
          _ref2$rotation = _ref2.rotation,
          rotation = _ref2$rotation === void 0 ? 0 : _ref2$rotation,
          draw = _ref2.draw;
        var cx = x + size / 2;
        var cy = y + size / 2;
        context.translate(cx, cy);
        rotation && context.rotate(rotation);
        draw();
        context.closePath();
        rotation && context.rotate(-rotation);
        context.translate(-cx, -cy);
      }
    }, {
      key: "_basicDot",
      value: function _basicDot(args) {
        var size = args.size,
          context = args.context;
        this._rotateFigure(_objectSpread2(_objectSpread2({}, args), {}, {
          draw: function draw() {
            context.arc(0, 0, size / 2, 0, Math.PI * 2);
          }
        }));
      }
    }, {
      key: "_basicSquare",
      value: function _basicSquare(args) {
        var size = args.size,
          context = args.context;
        this._rotateFigure(_objectSpread2(_objectSpread2({}, args), {}, {
          draw: function draw() {
            context.rect(-size / 2, -size / 2, size, size);
          }
        }));
      }
      //if rotation === 0 - right side is rounded
    }, {
      key: "_basicSideRounded",
      value: function _basicSideRounded(args) {
        var size = args.size,
          context = args.context;
        this._rotateFigure(_objectSpread2(_objectSpread2({}, args), {}, {
          draw: function draw() {
            context.arc(0, 0, size / 2, -Math.PI / 2, Math.PI / 2);
            context.lineTo(-size / 2, size / 2);
            context.lineTo(-size / 2, -size / 2);
            context.lineTo(0, -size / 2);
          }
        }));
      }
      //if rotation === 0 - top right corner is rounded
    }, {
      key: "_basicCornerRounded",
      value: function _basicCornerRounded(args) {
        var size = args.size,
          context = args.context;
        this._rotateFigure(_objectSpread2(_objectSpread2({}, args), {}, {
          draw: function draw() {
            context.arc(0, 0, size / 2, -Math.PI / 2, 0);
            context.lineTo(size / 2, size / 2);
            context.lineTo(-size / 2, size / 2);
            context.lineTo(-size / 2, -size / 2);
            context.lineTo(0, -size / 2);
          }
        }));
      }
      //if rotation === 0 - top right corner is rounded
    }, {
      key: "_basicCornerExtraRounded",
      value: function _basicCornerExtraRounded(args) {
        var size = args.size,
          context = args.context;
        this._rotateFigure(_objectSpread2(_objectSpread2({}, args), {}, {
          draw: function draw() {
            context.arc(-size / 2, size / 2, size, -Math.PI / 2, 0);
            context.lineTo(-size / 2, size / 2);
            context.lineTo(-size / 2, -size / 2);
          }
        }));
      }
    }, {
      key: "_basicCornersRounded",
      value: function _basicCornersRounded(args) {
        var size = args.size,
          context = args.context;
        this._rotateFigure(_objectSpread2(_objectSpread2({}, args), {}, {
          draw: function draw() {
            context.arc(0, 0, size / 2, -Math.PI / 2, 0);
            context.lineTo(size / 2, size / 2);
            context.lineTo(0, size / 2);
            context.arc(0, 0, size / 2, Math.PI / 2, Math.PI);
            context.lineTo(-size / 2, -size / 2);
            context.lineTo(0, -size / 2);
          }
        }));
      }
    }, {
      key: "_basicCornersExtraRounded",
      value: function _basicCornersExtraRounded(args) {
        var size = args.size,
          context = args.context;
        this._rotateFigure(_objectSpread2(_objectSpread2({}, args), {}, {
          draw: function draw() {
            context.arc(-size / 2, size / 2, size, -Math.PI / 2, 0);
            context.arc(size / 2, -size / 2, size, Math.PI / 2, Math.PI);
          }
        }));
      }
    }, {
      key: "_drawDot",
      value: function _drawDot(_ref3) {
        var x = _ref3.x,
          y = _ref3.y,
          size = _ref3.size,
          context = _ref3.context;
        this._basicDot({
          x: x,
          y: y,
          size: size,
          context: context,
          rotation: 0
        });
      }
    }, {
      key: "_drawSquare",
      value: function _drawSquare(_ref4) {
        var x = _ref4.x,
          y = _ref4.y,
          size = _ref4.size,
          context = _ref4.context;
        this._basicSquare({
          x: x,
          y: y,
          size: size,
          context: context,
          rotation: 0
        });
      }
    }, {
      key: "_drawRounded",
      value: function _drawRounded(_ref5) {
        var x = _ref5.x,
          y = _ref5.y,
          size = _ref5.size,
          context = _ref5.context,
          getNeighbor = _ref5.getNeighbor;
        var leftNeighbor = getNeighbor ? +getNeighbor(-1, 0) : 0;
        var rightNeighbor = getNeighbor ? +getNeighbor(1, 0) : 0;
        var topNeighbor = getNeighbor ? +getNeighbor(0, -1) : 0;
        var bottomNeighbor = getNeighbor ? +getNeighbor(0, 1) : 0;
        var neighborsCount = leftNeighbor + rightNeighbor + topNeighbor + bottomNeighbor;
        if (neighborsCount === 0) {
          this._basicDot({
            x: x,
            y: y,
            size: size,
            context: context,
            rotation: 0
          });
          return;
        }
        if (neighborsCount > 2 || leftNeighbor && rightNeighbor || topNeighbor && bottomNeighbor) {
          this._basicSquare({
            x: x,
            y: y,
            size: size,
            context: context,
            rotation: 0
          });
          return;
        }
        if (neighborsCount === 2) {
          var rotation = 0;
          if (leftNeighbor && topNeighbor) {
            rotation = Math.PI / 2;
          } else if (topNeighbor && rightNeighbor) {
            rotation = Math.PI;
          } else if (rightNeighbor && bottomNeighbor) {
            rotation = -Math.PI / 2;
          }
          this._basicCornerRounded({
            x: x,
            y: y,
            size: size,
            context: context,
            rotation: rotation
          });
          return;
        }
        if (neighborsCount === 1) {
          var _rotation = 0;
          if (topNeighbor) {
            _rotation = Math.PI / 2;
          } else if (rightNeighbor) {
            _rotation = Math.PI;
          } else if (bottomNeighbor) {
            _rotation = -Math.PI / 2;
          }
          this._basicSideRounded({
            x: x,
            y: y,
            size: size,
            context: context,
            rotation: _rotation
          });
          return;
        }
      }
    }, {
      key: "_drawExtraRounded",
      value: function _drawExtraRounded(_ref6) {
        var x = _ref6.x,
          y = _ref6.y,
          size = _ref6.size,
          context = _ref6.context,
          getNeighbor = _ref6.getNeighbor;
        var leftNeighbor = getNeighbor ? +getNeighbor(-1, 0) : 0;
        var rightNeighbor = getNeighbor ? +getNeighbor(1, 0) : 0;
        var topNeighbor = getNeighbor ? +getNeighbor(0, -1) : 0;
        var bottomNeighbor = getNeighbor ? +getNeighbor(0, 1) : 0;
        var neighborsCount = leftNeighbor + rightNeighbor + topNeighbor + bottomNeighbor;
        if (neighborsCount === 0) {
          this._basicDot({
            x: x,
            y: y,
            size: size,
            context: context,
            rotation: 0
          });
          return;
        }
        if (neighborsCount > 2 || leftNeighbor && rightNeighbor || topNeighbor && bottomNeighbor) {
          this._basicSquare({
            x: x,
            y: y,
            size: size,
            context: context,
            rotation: 0
          });
          return;
        }
        if (neighborsCount === 2) {
          var rotation = 0;
          if (leftNeighbor && topNeighbor) {
            rotation = Math.PI / 2;
          } else if (topNeighbor && rightNeighbor) {
            rotation = Math.PI;
          } else if (rightNeighbor && bottomNeighbor) {
            rotation = -Math.PI / 2;
          }
          this._basicCornerExtraRounded({
            x: x,
            y: y,
            size: size,
            context: context,
            rotation: rotation
          });
          return;
        }
        if (neighborsCount === 1) {
          var _rotation2 = 0;
          if (topNeighbor) {
            _rotation2 = Math.PI / 2;
          } else if (rightNeighbor) {
            _rotation2 = Math.PI;
          } else if (bottomNeighbor) {
            _rotation2 = -Math.PI / 2;
          }
          this._basicSideRounded({
            x: x,
            y: y,
            size: size,
            context: context,
            rotation: _rotation2
          });
          return;
        }
      }
    }, {
      key: "_drawClassy",
      value: function _drawClassy(_ref7) {
        var x = _ref7.x,
          y = _ref7.y,
          size = _ref7.size,
          context = _ref7.context,
          getNeighbor = _ref7.getNeighbor;
        var leftNeighbor = getNeighbor ? +getNeighbor(-1, 0) : 0;
        var rightNeighbor = getNeighbor ? +getNeighbor(1, 0) : 0;
        var topNeighbor = getNeighbor ? +getNeighbor(0, -1) : 0;
        var bottomNeighbor = getNeighbor ? +getNeighbor(0, 1) : 0;
        var neighborsCount = leftNeighbor + rightNeighbor + topNeighbor + bottomNeighbor;
        if (neighborsCount === 0) {
          this._basicCornersRounded({
            x: x,
            y: y,
            size: size,
            context: context,
            rotation: Math.PI / 2
          });
          return;
        }
        if (!leftNeighbor && !topNeighbor) {
          this._basicCornerRounded({
            x: x,
            y: y,
            size: size,
            context: context,
            rotation: -Math.PI / 2
          });
          return;
        }
        if (!rightNeighbor && !bottomNeighbor) {
          this._basicCornerRounded({
            x: x,
            y: y,
            size: size,
            context: context,
            rotation: Math.PI / 2
          });
          return;
        }
        this._basicSquare({
          x: x,
          y: y,
          size: size,
          context: context,
          rotation: 0
        });
      }
    }, {
      key: "_drawClassyRounded",
      value: function _drawClassyRounded(_ref8) {
        var x = _ref8.x,
          y = _ref8.y,
          size = _ref8.size,
          context = _ref8.context,
          getNeighbor = _ref8.getNeighbor;
        var leftNeighbor = getNeighbor ? +getNeighbor(-1, 0) : 0;
        var rightNeighbor = getNeighbor ? +getNeighbor(1, 0) : 0;
        var topNeighbor = getNeighbor ? +getNeighbor(0, -1) : 0;
        var bottomNeighbor = getNeighbor ? +getNeighbor(0, 1) : 0;
        var neighborsCount = leftNeighbor + rightNeighbor + topNeighbor + bottomNeighbor;
        if (neighborsCount === 0) {
          this._basicCornersRounded({
            x: x,
            y: y,
            size: size,
            context: context,
            rotation: Math.PI / 2
          });
          return;
        }
        if (!leftNeighbor && !topNeighbor) {
          this._basicCornerExtraRounded({
            x: x,
            y: y,
            size: size,
            context: context,
            rotation: -Math.PI / 2
          });
          return;
        }
        if (!rightNeighbor && !bottomNeighbor) {
          this._basicCornerExtraRounded({
            x: x,
            y: y,
            size: size,
            context: context,
            rotation: Math.PI / 2
          });
          return;
        }
        this._basicSquare({
          x: x,
          y: y,
          size: size,
          context: context,
          rotation: 0
        });
      }
    }]);
    return QRDot;
  }();

  var cornerSquareTypes = {
    dot: "dot",
    square: "square",
    extraRounded: "extra-rounded"
  };

  var QRCornerSquare = /*#__PURE__*/function () {
    function QRCornerSquare(_ref) {
      var context = _ref.context,
        type = _ref.type;
      _classCallCheck(this, QRCornerSquare);
      this._context = void 0;
      this._type = void 0;
      this._context = context;
      this._type = type;
    }
    _createClass(QRCornerSquare, [{
      key: "draw",
      value: function draw(x, y, size, rotation) {
        var context = this._context;
        var type = this._type;
        var drawFunction;
        switch (type) {
          case cornerSquareTypes.square:
            drawFunction = this._drawSquare;
            break;
          case cornerSquareTypes.extraRounded:
            drawFunction = this._drawExtraRounded;
            break;
          case cornerSquareTypes.dot:
          default:
            drawFunction = this._drawDot;
        }
        drawFunction.call(this, {
          x: x,
          y: y,
          size: size,
          context: context,
          rotation: rotation
        });
      }
    }, {
      key: "_rotateFigure",
      value: function _rotateFigure(_ref2) {
        var x = _ref2.x,
          y = _ref2.y,
          size = _ref2.size,
          context = _ref2.context,
          _ref2$rotation = _ref2.rotation,
          rotation = _ref2$rotation === void 0 ? 0 : _ref2$rotation,
          draw = _ref2.draw;
        var cx = x + size / 2;
        var cy = y + size / 2;
        context.translate(cx, cy);
        rotation && context.rotate(rotation);
        draw();
        context.closePath();
        rotation && context.rotate(-rotation);
        context.translate(-cx, -cy);
      }
    }, {
      key: "_basicDot",
      value: function _basicDot(args) {
        var size = args.size,
          context = args.context;
        var dotSize = size / 7;
        this._rotateFigure(_objectSpread2(_objectSpread2({}, args), {}, {
          draw: function draw() {
            context.arc(0, 0, size / 2, 0, Math.PI * 2);
            context.arc(0, 0, size / 2 - dotSize, 0, Math.PI * 2);
          }
        }));
      }
    }, {
      key: "_basicSquare",
      value: function _basicSquare(args) {
        var size = args.size,
          context = args.context;
        var dotSize = size / 7;
        this._rotateFigure(_objectSpread2(_objectSpread2({}, args), {}, {
          draw: function draw() {
            context.rect(-size / 2, -size / 2, size, size);
            context.rect(-size / 2 + dotSize, -size / 2 + dotSize, size - 2 * dotSize, size - 2 * dotSize);
          }
        }));
      }
    }, {
      key: "_basicExtraRounded",
      value: function _basicExtraRounded(args) {
        var size = args.size,
          context = args.context;
        var dotSize = size / 7;
        this._rotateFigure(_objectSpread2(_objectSpread2({}, args), {}, {
          draw: function draw() {
            context.arc(-dotSize, -dotSize, 2.5 * dotSize, Math.PI, -Math.PI / 2);
            context.lineTo(dotSize, -3.5 * dotSize);
            context.arc(dotSize, -dotSize, 2.5 * dotSize, -Math.PI / 2, 0);
            context.lineTo(3.5 * dotSize, -dotSize);
            context.arc(dotSize, dotSize, 2.5 * dotSize, 0, Math.PI / 2);
            context.lineTo(-dotSize, 3.5 * dotSize);
            context.arc(-dotSize, dotSize, 2.5 * dotSize, Math.PI / 2, Math.PI);
            context.lineTo(-3.5 * dotSize, -dotSize);
            context.arc(-dotSize, -dotSize, 1.5 * dotSize, Math.PI, -Math.PI / 2);
            context.lineTo(dotSize, -2.5 * dotSize);
            context.arc(dotSize, -dotSize, 1.5 * dotSize, -Math.PI / 2, 0);
            context.lineTo(2.5 * dotSize, -dotSize);
            context.arc(dotSize, dotSize, 1.5 * dotSize, 0, Math.PI / 2);
            context.lineTo(-dotSize, 2.5 * dotSize);
            context.arc(-dotSize, dotSize, 1.5 * dotSize, Math.PI / 2, Math.PI);
            context.lineTo(-2.5 * dotSize, -dotSize);
          }
        }));
      }
    }, {
      key: "_drawDot",
      value: function _drawDot(_ref3) {
        var x = _ref3.x,
          y = _ref3.y,
          size = _ref3.size,
          context = _ref3.context,
          rotation = _ref3.rotation;
        this._basicDot({
          x: x,
          y: y,
          size: size,
          context: context,
          rotation: rotation
        });
      }
    }, {
      key: "_drawSquare",
      value: function _drawSquare(_ref4) {
        var x = _ref4.x,
          y = _ref4.y,
          size = _ref4.size,
          context = _ref4.context,
          rotation = _ref4.rotation;
        this._basicSquare({
          x: x,
          y: y,
          size: size,
          context: context,
          rotation: rotation
        });
      }
    }, {
      key: "_drawExtraRounded",
      value: function _drawExtraRounded(_ref5) {
        var x = _ref5.x,
          y = _ref5.y,
          size = _ref5.size,
          context = _ref5.context,
          rotation = _ref5.rotation;
        this._basicExtraRounded({
          x: x,
          y: y,
          size: size,
          context: context,
          rotation: rotation
        });
      }
    }]);
    return QRCornerSquare;
  }();

  var cornerDotTypes = {
    dot: "dot",
    square: "square"
  };

  var QRCornerDot = /*#__PURE__*/function () {
    function QRCornerDot(_ref) {
      var context = _ref.context,
        type = _ref.type;
      _classCallCheck(this, QRCornerDot);
      this._context = void 0;
      this._type = void 0;
      this._context = context;
      this._type = type;
    }
    _createClass(QRCornerDot, [{
      key: "draw",
      value: function draw(x, y, size, rotation) {
        var context = this._context;
        var type = this._type;
        var drawFunction;
        switch (type) {
          case cornerDotTypes.square:
            drawFunction = this._drawSquare;
            break;
          case cornerDotTypes.dot:
          default:
            drawFunction = this._drawDot;
        }
        drawFunction.call(this, {
          x: x,
          y: y,
          size: size,
          context: context,
          rotation: rotation
        });
      }
    }, {
      key: "_rotateFigure",
      value: function _rotateFigure(_ref2) {
        var x = _ref2.x,
          y = _ref2.y,
          size = _ref2.size,
          context = _ref2.context,
          _ref2$rotation = _ref2.rotation,
          rotation = _ref2$rotation === void 0 ? 0 : _ref2$rotation,
          draw = _ref2.draw;
        var cx = x + size / 2;
        var cy = y + size / 2;
        context.translate(cx, cy);
        rotation && context.rotate(rotation);
        draw();
        context.closePath();
        rotation && context.rotate(-rotation);
        context.translate(-cx, -cy);
      }
    }, {
      key: "_basicDot",
      value: function _basicDot(args) {
        var size = args.size,
          context = args.context;
        this._rotateFigure(_objectSpread2(_objectSpread2({}, args), {}, {
          draw: function draw() {
            context.arc(0, 0, size / 2, 0, Math.PI * 2);
          }
        }));
      }
    }, {
      key: "_basicSquare",
      value: function _basicSquare(args) {
        var size = args.size,
          context = args.context;
        this._rotateFigure(_objectSpread2(_objectSpread2({}, args), {}, {
          draw: function draw() {
            context.rect(-size / 2, -size / 2, size, size);
          }
        }));
      }
    }, {
      key: "_drawDot",
      value: function _drawDot(_ref3) {
        var x = _ref3.x,
          y = _ref3.y,
          size = _ref3.size,
          context = _ref3.context,
          rotation = _ref3.rotation;
        this._basicDot({
          x: x,
          y: y,
          size: size,
          context: context,
          rotation: rotation
        });
      }
    }, {
      key: "_drawSquare",
      value: function _drawSquare(_ref4) {
        var x = _ref4.x,
          y = _ref4.y,
          size = _ref4.size,
          context = _ref4.context,
          rotation = _ref4.rotation;
        this._basicSquare({
          x: x,
          y: y,
          size: size,
          context: context,
          rotation: rotation
        });
      }
    }]);
    return QRCornerDot;
  }();

  var gradientTypes = {
    radial: "radial",
    linear: "linear"
  };

  var squareMask = [[1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1]];
  var dotMask = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];
  var QRCanvas = /*#__PURE__*/function () {
    //TODO don't pass all options to this class
    function QRCanvas(options) {
      _classCallCheck(this, QRCanvas);
      this._canvas = void 0;
      this._options = void 0;
      this._qr = void 0;
      this._image = void 0;
      this._canvas = document.createElement("canvas");
      this._canvas.width = options.width;
      this._canvas.height = options.height;
      this._options = options;
    }
    _createClass(QRCanvas, [{
      key: "context",
      get: function get() {
        return this._canvas.getContext("2d");
      }
    }, {
      key: "width",
      get: function get() {
        return this._canvas.width;
      }
    }, {
      key: "height",
      get: function get() {
        return this._canvas.height;
      }
    }, {
      key: "getCanvas",
      value: function getCanvas() {
        return this._canvas;
      }
    }, {
      key: "clear",
      value: function clear() {
        var canvasContext = this.context;
        if (canvasContext) {
          canvasContext.clearRect(0, 0, this._canvas.width, this._canvas.height);
        }
      }
    }, {
      key: "drawQR",
      value: function () {
        var _drawQR = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(qr) {
          var _this = this;
          var count, minSize, dotSize, drawImageSize, _this$_options, imageOptions, qrOptions, coverLevel, maxHiddenDots;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                count = qr.getModuleCount();
                minSize = Math.min(this._options.width, this._options.height) - this._options.margin * 2;
                dotSize = Math.floor(minSize / count);
                drawImageSize = {
                  hideXDots: 0,
                  hideYDots: 0,
                  width: 0,
                  height: 0
                };
                this._qr = qr;
                if (!this._options.image) {
                  _context.next = 14;
                  break;
                }
                _context.next = 8;
                return this.loadImage();
              case 8:
                if (this._image) {
                  _context.next = 10;
                  break;
                }
                return _context.abrupt("return");
              case 10:
                _this$_options = this._options, imageOptions = _this$_options.imageOptions, qrOptions = _this$_options.qrOptions;
                coverLevel = imageOptions.imageSize * errorCorrectionPercents[qrOptions.errorCorrectionLevel];
                maxHiddenDots = Math.floor(coverLevel * count * count);
                drawImageSize = calculateImageSize({
                  originalWidth: this._image.width,
                  originalHeight: this._image.height,
                  maxHiddenDots: maxHiddenDots,
                  maxHiddenAxisDots: count - 14,
                  dotSize: dotSize
                });
              case 14:
                this.clear();
                this.drawBackground();
                this.drawDots(function (i, j) {
                  var _squareMask$i, _squareMask, _squareMask$i2, _dotMask$i, _dotMask, _dotMask$i2;
                  if (_this._options.imageOptions.hideBackgroundDots) {
                    if (i >= (count - drawImageSize.hideXDots) / 2 && i < (count + drawImageSize.hideXDots) / 2 && j >= (count - drawImageSize.hideYDots) / 2 && j < (count + drawImageSize.hideYDots) / 2) {
                      return false;
                    }
                  }
                  if (((_squareMask$i = squareMask[i]) === null || _squareMask$i === void 0 ? void 0 : _squareMask$i[j]) || ((_squareMask = squareMask[i - count + 7]) === null || _squareMask === void 0 ? void 0 : _squareMask[j]) || ((_squareMask$i2 = squareMask[i]) === null || _squareMask$i2 === void 0 ? void 0 : _squareMask$i2[j - count + 7])) {
                    return false;
                  }
                  if (((_dotMask$i = dotMask[i]) === null || _dotMask$i === void 0 ? void 0 : _dotMask$i[j]) || ((_dotMask = dotMask[i - count + 7]) === null || _dotMask === void 0 ? void 0 : _dotMask[j]) || ((_dotMask$i2 = dotMask[i]) === null || _dotMask$i2 === void 0 ? void 0 : _dotMask$i2[j - count + 7])) {
                    return false;
                  }
                  return true;
                });
                this.drawCorners();
                if (this._options.image) {
                  this.drawImage({
                    width: drawImageSize.width,
                    height: drawImageSize.height,
                    count: count,
                    dotSize: dotSize
                  });
                }
              case 19:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
        function drawQR(_x) {
          return _drawQR.apply(this, arguments);
        }
        return drawQR;
      }()
    }, {
      key: "drawBackground",
      value: function drawBackground() {
        var canvasContext = this.context;
        var options = this._options;
        if (canvasContext) {
          if (options.backgroundOptions.gradient) {
            var gradientOptions = options.backgroundOptions.gradient;
            var gradient = this._createGradient({
              context: canvasContext,
              options: gradientOptions,
              additionalRotation: 0,
              x: 0,
              y: 0,
              size: this._canvas.width > this._canvas.height ? this._canvas.width : this._canvas.height
            });
            gradientOptions.colorStops.forEach(function (_ref) {
              var offset = _ref.offset,
                color = _ref.color;
              gradient.addColorStop(offset, color);
            });
            canvasContext.fillStyle = gradient;
          } else if (options.backgroundOptions.color) {
            canvasContext.fillStyle = options.backgroundOptions.color;
          }
          canvasContext.fillRect(0, 0, this._canvas.width, this._canvas.height);
        }
      }
    }, {
      key: "drawDots",
      value: function drawDots(filter) {
        var _this2 = this;
        if (!this._qr) {
          throw "QR code is not defined";
        }
        var canvasContext = this.context;
        if (!canvasContext) {
          throw "QR code is not defined";
        }
        var options = this._options;
        var count = this._qr.getModuleCount();
        if (count > options.width || count > options.height) {
          throw "The canvas is too small.";
        }
        var minSize = Math.min(options.width, options.height) - options.margin * 2;
        var dotSize = Math.floor(minSize / count);
        var xBeginning = Math.floor((options.width - count * dotSize) / 2);
        var yBeginning = Math.floor((options.height - count * dotSize) / 2);
        var dot = new QRDot({
          context: canvasContext,
          type: options.dotsOptions.type
        });
        canvasContext.beginPath();
        var _loop = function _loop(i) {
          var _loop2 = function _loop2(j) {
              if (filter && !filter(i, j)) {
                return 0; // continue
              }
              if (!_this2._qr.isDark(i, j)) {
                return 0; // continue
              }
              dot.draw(xBeginning + i * dotSize, yBeginning + j * dotSize, dotSize, function (xOffset, yOffset) {
                if (i + xOffset < 0 || j + yOffset < 0 || i + xOffset >= count || j + yOffset >= count) return false;
                if (filter && !filter(i + xOffset, j + yOffset)) return false;
                return !!_this2._qr && _this2._qr.isDark(i + xOffset, j + yOffset);
              });
            },
            _ret;
          for (var j = 0; j < count; j++) {
            _ret = _loop2(j);
            if (_ret === 0) continue;
          }
        };
        for (var i = 0; i < count; i++) {
          _loop(i);
        }
        if (options.dotsOptions.gradient) {
          var gradientOptions = options.dotsOptions.gradient;
          var gradient = this._createGradient({
            context: canvasContext,
            options: gradientOptions,
            additionalRotation: 0,
            x: xBeginning,
            y: yBeginning,
            size: count * dotSize
          });
          gradientOptions.colorStops.forEach(function (_ref2) {
            var offset = _ref2.offset,
              color = _ref2.color;
            gradient.addColorStop(offset, color);
          });
          canvasContext.fillStyle = canvasContext.strokeStyle = gradient;
        } else if (options.dotsOptions.color) {
          canvasContext.fillStyle = canvasContext.strokeStyle = options.dotsOptions.color;
        }
        canvasContext.fill("evenodd");
      }
    }, {
      key: "drawCorners",
      value: function drawCorners(filter) {
        var _this3 = this;
        if (!this._qr) {
          throw "QR code is not defined";
        }
        var canvasContext = this.context;
        if (!canvasContext) {
          throw "QR code is not defined";
        }
        var options = this._options;
        var count = this._qr.getModuleCount();
        var minSize = Math.min(options.width, options.height) - options.margin * 2;
        var dotSize = Math.floor(minSize / count);
        var cornersSquareSize = dotSize * 7;
        var cornersDotSize = dotSize * 3;
        var xBeginning = Math.floor((options.width - count * dotSize) / 2);
        var yBeginning = Math.floor((options.height - count * dotSize) / 2);
        [[0, 0, 0], [1, 0, Math.PI / 2], [0, 1, -Math.PI / 2]].forEach(function (_ref3) {
          var _options$cornersSquar, _options$cornersSquar3, _options$cornersSquar4, _options$cornersDotOp, _options$cornersDotOp3, _options$cornersDotOp4;
          var _ref4 = _slicedToArray(_ref3, 3),
            column = _ref4[0],
            row = _ref4[1],
            rotation = _ref4[2];
          if (filter && !filter(column, row)) {
            return;
          }
          var x = xBeginning + column * dotSize * (count - 7);
          var y = yBeginning + row * dotSize * (count - 7);
          if ((_options$cornersSquar = options.cornersSquareOptions) === null || _options$cornersSquar === void 0 ? void 0 : _options$cornersSquar.type) {
            var _options$cornersSquar2;
            var cornersSquare = new QRCornerSquare({
              context: canvasContext,
              type: (_options$cornersSquar2 = options.cornersSquareOptions) === null || _options$cornersSquar2 === void 0 ? void 0 : _options$cornersSquar2.type
            });
            canvasContext.beginPath();
            cornersSquare.draw(x, y, cornersSquareSize, rotation);
          } else {
            var dot = new QRDot({
              context: canvasContext,
              type: options.dotsOptions.type
            });
            canvasContext.beginPath();
            var _loop3 = function _loop3(i) {
              var _loop4 = function _loop4(j) {
                var _squareMask$i3;
                if (!((_squareMask$i3 = squareMask[i]) === null || _squareMask$i3 === void 0 ? void 0 : _squareMask$i3[j])) {
                  return 1; // continue
                }
                dot.draw(x + i * dotSize, y + j * dotSize, dotSize, function (xOffset, yOffset) {
                  var _squareMask2;
                  return !!((_squareMask2 = squareMask[i + xOffset]) === null || _squareMask2 === void 0 ? void 0 : _squareMask2[j + yOffset]);
                });
              };
              for (var j = 0; j < squareMask[i].length; j++) {
                if (_loop4(j)) continue;
              }
            };
            for (var i = 0; i < squareMask.length; i++) {
              _loop3(i);
            }
          }
          if ((_options$cornersSquar3 = options.cornersSquareOptions) === null || _options$cornersSquar3 === void 0 ? void 0 : _options$cornersSquar3.gradient) {
            var gradientOptions = options.cornersSquareOptions.gradient;
            var gradient = _this3._createGradient({
              context: canvasContext,
              options: gradientOptions,
              additionalRotation: rotation,
              x: x,
              y: y,
              size: cornersSquareSize
            });
            gradientOptions.colorStops.forEach(function (_ref5) {
              var offset = _ref5.offset,
                color = _ref5.color;
              gradient.addColorStop(offset, color);
            });
            canvasContext.fillStyle = canvasContext.strokeStyle = gradient;
          } else if ((_options$cornersSquar4 = options.cornersSquareOptions) === null || _options$cornersSquar4 === void 0 ? void 0 : _options$cornersSquar4.color) {
            canvasContext.fillStyle = canvasContext.strokeStyle = options.cornersSquareOptions.color;
          }
          canvasContext.fill("evenodd");
          if ((_options$cornersDotOp = options.cornersDotOptions) === null || _options$cornersDotOp === void 0 ? void 0 : _options$cornersDotOp.type) {
            var _options$cornersDotOp2;
            var cornersDot = new QRCornerDot({
              context: canvasContext,
              type: (_options$cornersDotOp2 = options.cornersDotOptions) === null || _options$cornersDotOp2 === void 0 ? void 0 : _options$cornersDotOp2.type
            });
            canvasContext.beginPath();
            cornersDot.draw(x + dotSize * 2, y + dotSize * 2, cornersDotSize, rotation);
          } else {
            var _dot = new QRDot({
              context: canvasContext,
              type: options.dotsOptions.type
            });
            canvasContext.beginPath();
            var _loop5 = function _loop5(_i) {
              var _loop6 = function _loop6(j) {
                var _dotMask$_i;
                if (!((_dotMask$_i = dotMask[_i]) === null || _dotMask$_i === void 0 ? void 0 : _dotMask$_i[j])) {
                  return 1; // continue
                }
                _dot.draw(x + _i * dotSize, y + j * dotSize, dotSize, function (xOffset, yOffset) {
                  var _dotMask2;
                  return !!((_dotMask2 = dotMask[_i + xOffset]) === null || _dotMask2 === void 0 ? void 0 : _dotMask2[j + yOffset]);
                });
              };
              for (var j = 0; j < dotMask[_i].length; j++) {
                if (_loop6(j)) continue;
              }
            };
            for (var _i = 0; _i < dotMask.length; _i++) {
              _loop5(_i);
            }
          }
          if ((_options$cornersDotOp3 = options.cornersDotOptions) === null || _options$cornersDotOp3 === void 0 ? void 0 : _options$cornersDotOp3.gradient) {
            var _gradientOptions = options.cornersDotOptions.gradient;
            var _gradient = _this3._createGradient({
              context: canvasContext,
              options: _gradientOptions,
              additionalRotation: rotation,
              x: x + dotSize * 2,
              y: y + dotSize * 2,
              size: cornersDotSize
            });
            _gradientOptions.colorStops.forEach(function (_ref6) {
              var offset = _ref6.offset,
                color = _ref6.color;
              _gradient.addColorStop(offset, color);
            });
            canvasContext.fillStyle = canvasContext.strokeStyle = _gradient;
          } else if ((_options$cornersDotOp4 = options.cornersDotOptions) === null || _options$cornersDotOp4 === void 0 ? void 0 : _options$cornersDotOp4.color) {
            canvasContext.fillStyle = canvasContext.strokeStyle = options.cornersDotOptions.color;
          }
          canvasContext.fill("evenodd");
        });
      }
    }, {
      key: "loadImage",
      value: function loadImage() {
        var _this4 = this;
        return new Promise(function (resolve, reject) {
          var options = _this4._options;
          var image = new Image();
          if (!options.image) {
            return reject("Image is not defined");
          }
          if (typeof options.imageOptions.crossOrigin === "string") {
            image.crossOrigin = options.imageOptions.crossOrigin;
          }
          _this4._image = image;
          image.onload = function () {
            resolve();
          };
          image.src = options.image;
        });
      }
    }, {
      key: "drawImage",
      value: function drawImage(_ref7) {
        var width = _ref7.width,
          height = _ref7.height,
          count = _ref7.count,
          dotSize = _ref7.dotSize;
        var canvasContext = this.context;
        if (!canvasContext) {
          throw "canvasContext is not defined";
        }
        if (!this._image) {
          throw "image is not defined";
        }
        var options = this._options;
        var xBeginning = Math.floor((options.width - count * dotSize) / 2);
        var yBeginning = Math.floor((options.height - count * dotSize) / 2);
        var dx = xBeginning + options.imageOptions.margin + (count * dotSize - width) / 2;
        var dy = yBeginning + options.imageOptions.margin + (count * dotSize - height) / 2;
        var dw = width - options.imageOptions.margin * 2;
        var dh = height - options.imageOptions.margin * 2;
        canvasContext.drawImage(this._image, dx, dy, dw < 0 ? 0 : dw, dh < 0 ? 0 : dh);
      }
    }, {
      key: "_createGradient",
      value: function _createGradient(_ref8) {
        var context = _ref8.context,
          options = _ref8.options,
          additionalRotation = _ref8.additionalRotation,
          x = _ref8.x,
          y = _ref8.y,
          size = _ref8.size;
        var gradient;
        if (options.type === gradientTypes.radial) {
          gradient = context.createRadialGradient(x + size / 2, y + size / 2, 0, x + size / 2, y + size / 2, size / 2);
        } else {
          var rotation = ((options.rotation || 0) + additionalRotation) % (2 * Math.PI);
          var positiveRotation = (rotation + 2 * Math.PI) % (2 * Math.PI);
          var x0 = x + size / 2;
          var y0 = y + size / 2;
          var x1 = x + size / 2;
          var y1 = y + size / 2;
          if (positiveRotation >= 0 && positiveRotation <= 0.25 * Math.PI || positiveRotation > 1.75 * Math.PI && positiveRotation <= 2 * Math.PI) {
            x0 = x0 - size / 2;
            y0 = y0 - size / 2 * Math.tan(rotation);
            x1 = x1 + size / 2;
            y1 = y1 + size / 2 * Math.tan(rotation);
          } else if (positiveRotation > 0.25 * Math.PI && positiveRotation <= 0.75 * Math.PI) {
            y0 = y0 - size / 2;
            x0 = x0 - size / 2 / Math.tan(rotation);
            y1 = y1 + size / 2;
            x1 = x1 + size / 2 / Math.tan(rotation);
          } else if (positiveRotation > 0.75 * Math.PI && positiveRotation <= 1.25 * Math.PI) {
            x0 = x0 + size / 2;
            y0 = y0 + size / 2 * Math.tan(rotation);
            x1 = x1 - size / 2;
            y1 = y1 - size / 2 * Math.tan(rotation);
          } else if (positiveRotation > 1.25 * Math.PI && positiveRotation <= 1.75 * Math.PI) {
            y0 = y0 + size / 2;
            x0 = x0 + size / 2 / Math.tan(rotation);
            y1 = y1 - size / 2;
            x1 = x1 - size / 2 / Math.tan(rotation);
          }
          gradient = context.createLinearGradient(Math.round(x0), Math.round(y0), Math.round(x1), Math.round(y1));
        }
        return gradient;
      }
    }]);
    return QRCanvas;
  }();

  var QRDot$1 = /*#__PURE__*/function () {
    function QRDot(_ref) {
      var svg = _ref.svg,
        type = _ref.type;
      _classCallCheck(this, QRDot);
      this._element = void 0;
      this._svg = void 0;
      this._type = void 0;
      this._svg = svg;
      this._type = type;
    }
    _createClass(QRDot, [{
      key: "draw",
      value: function draw(x, y, size, getNeighbor) {
        var type = this._type;
        var drawFunction;
        switch (type) {
          case dotTypes.dots:
            drawFunction = this._drawDot;
            break;
          case dotTypes.classy:
            drawFunction = this._drawClassy;
            break;
          case dotTypes.classyRounded:
            drawFunction = this._drawClassyRounded;
            break;
          case dotTypes.rounded:
            drawFunction = this._drawRounded;
            break;
          case dotTypes.extraRounded:
            drawFunction = this._drawExtraRounded;
            break;
          case dotTypes.square:
          default:
            drawFunction = this._drawSquare;
        }
        drawFunction.call(this, {
          x: x,
          y: y,
          size: size,
          getNeighbor: getNeighbor
        });
      }
    }, {
      key: "_rotateFigure",
      value: function _rotateFigure(_ref2) {
        var _this$_element;
        var x = _ref2.x,
          y = _ref2.y,
          size = _ref2.size,
          _ref2$rotation = _ref2.rotation,
          rotation = _ref2$rotation === void 0 ? 0 : _ref2$rotation,
          draw = _ref2.draw;
        var cx = x + size / 2;
        var cy = y + size / 2;
        draw();
        (_this$_element = this._element) === null || _this$_element === void 0 ? void 0 : _this$_element.setAttribute("transform", "rotate(".concat(180 * rotation / Math.PI, ",").concat(cx, ",").concat(cy, ")"));
      }
    }, {
      key: "_basicDot",
      value: function _basicDot(args) {
        var _this = this;
        var size = args.size,
          x = args.x,
          y = args.y;
        this._rotateFigure(_objectSpread2(_objectSpread2({}, args), {}, {
          draw: function draw() {
            _this._element = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            _this._element.setAttribute("cx", String(x + size / 2));
            _this._element.setAttribute("cy", String(y + size / 2));
            _this._element.setAttribute("r", String(size / 2));
          }
        }));
      }
    }, {
      key: "_basicSquare",
      value: function _basicSquare(args) {
        var _this2 = this;
        var size = args.size,
          x = args.x,
          y = args.y;
        this._rotateFigure(_objectSpread2(_objectSpread2({}, args), {}, {
          draw: function draw() {
            _this2._element = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            _this2._element.setAttribute("x", String(x));
            _this2._element.setAttribute("y", String(y));
            _this2._element.setAttribute("width", String(size));
            _this2._element.setAttribute("height", String(size));
          }
        }));
      }
      //if rotation === 0 - right side is rounded
    }, {
      key: "_basicSideRounded",
      value: function _basicSideRounded(args) {
        var _this3 = this;
        var size = args.size,
          x = args.x,
          y = args.y;
        this._rotateFigure(_objectSpread2(_objectSpread2({}, args), {}, {
          draw: function draw() {
            _this3._element = document.createElementNS("http://www.w3.org/2000/svg", "path");
            _this3._element.setAttribute("d", "M ".concat(x, " ").concat(y) + //go to top left position
            "v ".concat(size) + //draw line to left bottom corner
            "h ".concat(size / 2) + //draw line to left bottom corner + half of size right
            "a ".concat(size / 2, " ").concat(size / 2, ", 0, 0, 0, 0 ").concat(-size) // draw rounded corner
            );
          }
        }));
      }
      //if rotation === 0 - top right corner is rounded
    }, {
      key: "_basicCornerRounded",
      value: function _basicCornerRounded(args) {
        var _this4 = this;
        var size = args.size,
          x = args.x,
          y = args.y;
        this._rotateFigure(_objectSpread2(_objectSpread2({}, args), {}, {
          draw: function draw() {
            _this4._element = document.createElementNS("http://www.w3.org/2000/svg", "path");
            _this4._element.setAttribute("d", "M ".concat(x, " ").concat(y) + //go to top left position
            "v ".concat(size) + //draw line to left bottom corner
            "h ".concat(size) + //draw line to right bottom corner
            "v ".concat(-size / 2) + //draw line to right bottom corner + half of size top
            "a ".concat(size / 2, " ").concat(size / 2, ", 0, 0, 0, ").concat(-size / 2, " ").concat(-size / 2) // draw rounded corner
            );
          }
        }));
      }
      //if rotation === 0 - top right corner is rounded
    }, {
      key: "_basicCornerExtraRounded",
      value: function _basicCornerExtraRounded(args) {
        var _this5 = this;
        var size = args.size,
          x = args.x,
          y = args.y;
        this._rotateFigure(_objectSpread2(_objectSpread2({}, args), {}, {
          draw: function draw() {
            _this5._element = document.createElementNS("http://www.w3.org/2000/svg", "path");
            _this5._element.setAttribute("d", "M ".concat(x, " ").concat(y) + //go to top left position
            "v ".concat(size) + //draw line to left bottom corner
            "h ".concat(size) + //draw line to right bottom corner
            "a ".concat(size, " ").concat(size, ", 0, 0, 0, ").concat(-size, " ").concat(-size) // draw rounded top right corner
            );
          }
        }));
      }
      //if rotation === 0 - left bottom and right top corners are rounded
    }, {
      key: "_basicCornersRounded",
      value: function _basicCornersRounded(args) {
        var _this6 = this;
        var size = args.size,
          x = args.x,
          y = args.y;
        this._rotateFigure(_objectSpread2(_objectSpread2({}, args), {}, {
          draw: function draw() {
            _this6._element = document.createElementNS("http://www.w3.org/2000/svg", "path");
            _this6._element.setAttribute("d", "M ".concat(x, " ").concat(y) + //go to left top position
            "v ".concat(size / 2) + //draw line to left top corner + half of size bottom
            "a ".concat(size / 2, " ").concat(size / 2, ", 0, 0, 0, ").concat(size / 2, " ").concat(size / 2) + // draw rounded left bottom corner
            "h ".concat(size / 2) + //draw line to right bottom corner
            "v ".concat(-size / 2) + //draw line to right bottom corner + half of size top
            "a ".concat(size / 2, " ").concat(size / 2, ", 0, 0, 0, ").concat(-size / 2, " ").concat(-size / 2) // draw rounded right top corner
            );
          }
        }));
      }
    }, {
      key: "_drawDot",
      value: function _drawDot(_ref3) {
        var x = _ref3.x,
          y = _ref3.y,
          size = _ref3.size;
        this._basicDot({
          x: x,
          y: y,
          size: size,
          rotation: 0
        });
      }
    }, {
      key: "_drawSquare",
      value: function _drawSquare(_ref4) {
        var x = _ref4.x,
          y = _ref4.y,
          size = _ref4.size;
        this._basicSquare({
          x: x,
          y: y,
          size: size,
          rotation: 0
        });
      }
    }, {
      key: "_drawRounded",
      value: function _drawRounded(_ref5) {
        var x = _ref5.x,
          y = _ref5.y,
          size = _ref5.size,
          getNeighbor = _ref5.getNeighbor;
        var leftNeighbor = getNeighbor ? +getNeighbor(-1, 0) : 0;
        var rightNeighbor = getNeighbor ? +getNeighbor(1, 0) : 0;
        var topNeighbor = getNeighbor ? +getNeighbor(0, -1) : 0;
        var bottomNeighbor = getNeighbor ? +getNeighbor(0, 1) : 0;
        var neighborsCount = leftNeighbor + rightNeighbor + topNeighbor + bottomNeighbor;
        if (neighborsCount === 0) {
          this._basicDot({
            x: x,
            y: y,
            size: size,
            rotation: 0
          });
          return;
        }
        if (neighborsCount > 2 || leftNeighbor && rightNeighbor || topNeighbor && bottomNeighbor) {
          this._basicSquare({
            x: x,
            y: y,
            size: size,
            rotation: 0
          });
          return;
        }
        if (neighborsCount === 2) {
          var rotation = 0;
          if (leftNeighbor && topNeighbor) {
            rotation = Math.PI / 2;
          } else if (topNeighbor && rightNeighbor) {
            rotation = Math.PI;
          } else if (rightNeighbor && bottomNeighbor) {
            rotation = -Math.PI / 2;
          }
          this._basicCornerRounded({
            x: x,
            y: y,
            size: size,
            rotation: rotation
          });
          return;
        }
        if (neighborsCount === 1) {
          var _rotation = 0;
          if (topNeighbor) {
            _rotation = Math.PI / 2;
          } else if (rightNeighbor) {
            _rotation = Math.PI;
          } else if (bottomNeighbor) {
            _rotation = -Math.PI / 2;
          }
          this._basicSideRounded({
            x: x,
            y: y,
            size: size,
            rotation: _rotation
          });
          return;
        }
      }
    }, {
      key: "_drawExtraRounded",
      value: function _drawExtraRounded(_ref6) {
        var x = _ref6.x,
          y = _ref6.y,
          size = _ref6.size,
          getNeighbor = _ref6.getNeighbor;
        var leftNeighbor = getNeighbor ? +getNeighbor(-1, 0) : 0;
        var rightNeighbor = getNeighbor ? +getNeighbor(1, 0) : 0;
        var topNeighbor = getNeighbor ? +getNeighbor(0, -1) : 0;
        var bottomNeighbor = getNeighbor ? +getNeighbor(0, 1) : 0;
        var neighborsCount = leftNeighbor + rightNeighbor + topNeighbor + bottomNeighbor;
        if (neighborsCount === 0) {
          this._basicDot({
            x: x,
            y: y,
            size: size,
            rotation: 0
          });
          return;
        }
        if (neighborsCount > 2 || leftNeighbor && rightNeighbor || topNeighbor && bottomNeighbor) {
          this._basicSquare({
            x: x,
            y: y,
            size: size,
            rotation: 0
          });
          return;
        }
        if (neighborsCount === 2) {
          var rotation = 0;
          if (leftNeighbor && topNeighbor) {
            rotation = Math.PI / 2;
          } else if (topNeighbor && rightNeighbor) {
            rotation = Math.PI;
          } else if (rightNeighbor && bottomNeighbor) {
            rotation = -Math.PI / 2;
          }
          this._basicCornerExtraRounded({
            x: x,
            y: y,
            size: size,
            rotation: rotation
          });
          return;
        }
        if (neighborsCount === 1) {
          var _rotation2 = 0;
          if (topNeighbor) {
            _rotation2 = Math.PI / 2;
          } else if (rightNeighbor) {
            _rotation2 = Math.PI;
          } else if (bottomNeighbor) {
            _rotation2 = -Math.PI / 2;
          }
          this._basicSideRounded({
            x: x,
            y: y,
            size: size,
            rotation: _rotation2
          });
          return;
        }
      }
    }, {
      key: "_drawClassy",
      value: function _drawClassy(_ref7) {
        var x = _ref7.x,
          y = _ref7.y,
          size = _ref7.size,
          getNeighbor = _ref7.getNeighbor;
        var leftNeighbor = getNeighbor ? +getNeighbor(-1, 0) : 0;
        var rightNeighbor = getNeighbor ? +getNeighbor(1, 0) : 0;
        var topNeighbor = getNeighbor ? +getNeighbor(0, -1) : 0;
        var bottomNeighbor = getNeighbor ? +getNeighbor(0, 1) : 0;
        var neighborsCount = leftNeighbor + rightNeighbor + topNeighbor + bottomNeighbor;
        if (neighborsCount === 0) {
          this._basicCornersRounded({
            x: x,
            y: y,
            size: size,
            rotation: Math.PI / 2
          });
          return;
        }
        if (!leftNeighbor && !topNeighbor) {
          this._basicCornerRounded({
            x: x,
            y: y,
            size: size,
            rotation: -Math.PI / 2
          });
          return;
        }
        if (!rightNeighbor && !bottomNeighbor) {
          this._basicCornerRounded({
            x: x,
            y: y,
            size: size,
            rotation: Math.PI / 2
          });
          return;
        }
        this._basicSquare({
          x: x,
          y: y,
          size: size,
          rotation: 0
        });
      }
    }, {
      key: "_drawClassyRounded",
      value: function _drawClassyRounded(_ref8) {
        var x = _ref8.x,
          y = _ref8.y,
          size = _ref8.size,
          getNeighbor = _ref8.getNeighbor;
        var leftNeighbor = getNeighbor ? +getNeighbor(-1, 0) : 0;
        var rightNeighbor = getNeighbor ? +getNeighbor(1, 0) : 0;
        var topNeighbor = getNeighbor ? +getNeighbor(0, -1) : 0;
        var bottomNeighbor = getNeighbor ? +getNeighbor(0, 1) : 0;
        var neighborsCount = leftNeighbor + rightNeighbor + topNeighbor + bottomNeighbor;
        if (neighborsCount === 0) {
          this._basicCornersRounded({
            x: x,
            y: y,
            size: size,
            rotation: Math.PI / 2
          });
          return;
        }
        if (!leftNeighbor && !topNeighbor) {
          this._basicCornerExtraRounded({
            x: x,
            y: y,
            size: size,
            rotation: -Math.PI / 2
          });
          return;
        }
        if (!rightNeighbor && !bottomNeighbor) {
          this._basicCornerExtraRounded({
            x: x,
            y: y,
            size: size,
            rotation: Math.PI / 2
          });
          return;
        }
        this._basicSquare({
          x: x,
          y: y,
          size: size,
          rotation: 0
        });
      }
    }]);
    return QRDot;
  }();

  var QRCornerSquare$1 = /*#__PURE__*/function () {
    function QRCornerSquare(_ref) {
      var svg = _ref.svg,
        type = _ref.type;
      _classCallCheck(this, QRCornerSquare);
      this._element = void 0;
      this._svg = void 0;
      this._type = void 0;
      this._svg = svg;
      this._type = type;
    }
    _createClass(QRCornerSquare, [{
      key: "draw",
      value: function draw(x, y, size, rotation) {
        var type = this._type;
        var drawFunction;
        switch (type) {
          case cornerSquareTypes.square:
            drawFunction = this._drawSquare;
            break;
          case cornerSquareTypes.extraRounded:
            drawFunction = this._drawExtraRounded;
            break;
          case cornerSquareTypes.dot:
          default:
            drawFunction = this._drawDot;
        }
        drawFunction.call(this, {
          x: x,
          y: y,
          size: size,
          rotation: rotation
        });
      }
    }, {
      key: "_rotateFigure",
      value: function _rotateFigure(_ref2) {
        var _this$_element;
        var x = _ref2.x,
          y = _ref2.y,
          size = _ref2.size,
          _ref2$rotation = _ref2.rotation,
          rotation = _ref2$rotation === void 0 ? 0 : _ref2$rotation,
          draw = _ref2.draw;
        var cx = x + size / 2;
        var cy = y + size / 2;
        draw();
        (_this$_element = this._element) === null || _this$_element === void 0 ? void 0 : _this$_element.setAttribute("transform", "rotate(".concat(180 * rotation / Math.PI, ",").concat(cx, ",").concat(cy, ")"));
      }
    }, {
      key: "_basicDot",
      value: function _basicDot(args) {
        var _this = this;
        var size = args.size,
          x = args.x,
          y = args.y;
        var dotSize = size / 7;
        this._rotateFigure(_objectSpread2(_objectSpread2({}, args), {}, {
          draw: function draw() {
            _this._element = document.createElementNS("http://www.w3.org/2000/svg", "path");
            _this._element.setAttribute("clip-rule", "evenodd");
            _this._element.setAttribute("d", "M ".concat(x + size / 2, " ").concat(y) + // M cx, y //  Move to top of ring
            "a ".concat(size / 2, " ").concat(size / 2, " 0 1 0 0.1 0") + // a outerRadius, outerRadius, 0, 1, 0, 1, 0 // Draw outer arc, but don't close it
            "z" + // Z // Close the outer shape
            "m 0 ".concat(dotSize) + // m -1 outerRadius-innerRadius // Move to top point of inner radius
            "a ".concat(size / 2 - dotSize, " ").concat(size / 2 - dotSize, " 0 1 1 -0.1 0") + // a innerRadius, innerRadius, 0, 1, 1, -1, 0 // Draw inner arc, but don't close it
            "Z" // Z // Close the inner ring. Actually will still work without, but inner ring will have one unit missing in stroke
            );
          }
        }));
      }
    }, {
      key: "_basicSquare",
      value: function _basicSquare(args) {
        var _this2 = this;
        var size = args.size,
          x = args.x,
          y = args.y;
        var dotSize = size / 7;
        this._rotateFigure(_objectSpread2(_objectSpread2({}, args), {}, {
          draw: function draw() {
            _this2._element = document.createElementNS("http://www.w3.org/2000/svg", "path");
            _this2._element.setAttribute("clip-rule", "evenodd");
            _this2._element.setAttribute("d", "M ".concat(x, " ").concat(y) + "v ".concat(size) + "h ".concat(size) + "v ".concat(-size) + "z" + "M ".concat(x + dotSize, " ").concat(y + dotSize) + "h ".concat(size - 2 * dotSize) + "v ".concat(size - 2 * dotSize) + "h ".concat(-size + 2 * dotSize) + "z");
          }
        }));
      }
    }, {
      key: "_basicExtraRounded",
      value: function _basicExtraRounded(args) {
        var _this3 = this;
        var size = args.size,
          x = args.x,
          y = args.y;
        var dotSize = size / 7;
        this._rotateFigure(_objectSpread2(_objectSpread2({}, args), {}, {
          draw: function draw() {
            _this3._element = document.createElementNS("http://www.w3.org/2000/svg", "path");
            _this3._element.setAttribute("clip-rule", "evenodd");
            _this3._element.setAttribute("d", "M ".concat(x, " ").concat(y + 2.5 * dotSize) + "v ".concat(2 * dotSize) + "a ".concat(2.5 * dotSize, " ").concat(2.5 * dotSize, ", 0, 0, 0, ").concat(dotSize * 2.5, " ").concat(dotSize * 2.5) + "h ".concat(2 * dotSize) + "a ".concat(2.5 * dotSize, " ").concat(2.5 * dotSize, ", 0, 0, 0, ").concat(dotSize * 2.5, " ").concat(-dotSize * 2.5) + "v ".concat(-2 * dotSize) + "a ".concat(2.5 * dotSize, " ").concat(2.5 * dotSize, ", 0, 0, 0, ").concat(-dotSize * 2.5, " ").concat(-dotSize * 2.5) + "h ".concat(-2 * dotSize) + "a ".concat(2.5 * dotSize, " ").concat(2.5 * dotSize, ", 0, 0, 0, ").concat(-dotSize * 2.5, " ").concat(dotSize * 2.5) + "M ".concat(x + 2.5 * dotSize, " ").concat(y + dotSize) + "h ".concat(2 * dotSize) + "a ".concat(1.5 * dotSize, " ").concat(1.5 * dotSize, ", 0, 0, 1, ").concat(dotSize * 1.5, " ").concat(dotSize * 1.5) + "v ".concat(2 * dotSize) + "a ".concat(1.5 * dotSize, " ").concat(1.5 * dotSize, ", 0, 0, 1, ").concat(-dotSize * 1.5, " ").concat(dotSize * 1.5) + "h ".concat(-2 * dotSize) + "a ".concat(1.5 * dotSize, " ").concat(1.5 * dotSize, ", 0, 0, 1, ").concat(-dotSize * 1.5, " ").concat(-dotSize * 1.5) + "v ".concat(-2 * dotSize) + "a ".concat(1.5 * dotSize, " ").concat(1.5 * dotSize, ", 0, 0, 1, ").concat(dotSize * 1.5, " ").concat(-dotSize * 1.5));
          }
        }));
      }
    }, {
      key: "_drawDot",
      value: function _drawDot(_ref3) {
        var x = _ref3.x,
          y = _ref3.y,
          size = _ref3.size,
          rotation = _ref3.rotation;
        this._basicDot({
          x: x,
          y: y,
          size: size,
          rotation: rotation
        });
      }
    }, {
      key: "_drawSquare",
      value: function _drawSquare(_ref4) {
        var x = _ref4.x,
          y = _ref4.y,
          size = _ref4.size,
          rotation = _ref4.rotation;
        this._basicSquare({
          x: x,
          y: y,
          size: size,
          rotation: rotation
        });
      }
    }, {
      key: "_drawExtraRounded",
      value: function _drawExtraRounded(_ref5) {
        var x = _ref5.x,
          y = _ref5.y,
          size = _ref5.size,
          rotation = _ref5.rotation;
        this._basicExtraRounded({
          x: x,
          y: y,
          size: size,
          rotation: rotation
        });
      }
    }]);
    return QRCornerSquare;
  }();

  var QRCornerDot$1 = /*#__PURE__*/function () {
    function QRCornerDot(_ref) {
      var svg = _ref.svg,
        type = _ref.type;
      _classCallCheck(this, QRCornerDot);
      this._element = void 0;
      this._svg = void 0;
      this._type = void 0;
      this._svg = svg;
      this._type = type;
    }
    _createClass(QRCornerDot, [{
      key: "draw",
      value: function draw(x, y, size, rotation) {
        var type = this._type;
        var drawFunction;
        switch (type) {
          case cornerDotTypes.square:
            drawFunction = this._drawSquare;
            break;
          case cornerDotTypes.dot:
          default:
            drawFunction = this._drawDot;
        }
        drawFunction.call(this, {
          x: x,
          y: y,
          size: size,
          rotation: rotation
        });
      }
    }, {
      key: "_rotateFigure",
      value: function _rotateFigure(_ref2) {
        var _this$_element;
        var x = _ref2.x,
          y = _ref2.y,
          size = _ref2.size,
          _ref2$rotation = _ref2.rotation,
          rotation = _ref2$rotation === void 0 ? 0 : _ref2$rotation,
          draw = _ref2.draw;
        var cx = x + size / 2;
        var cy = y + size / 2;
        draw();
        (_this$_element = this._element) === null || _this$_element === void 0 ? void 0 : _this$_element.setAttribute("transform", "rotate(".concat(180 * rotation / Math.PI, ",").concat(cx, ",").concat(cy, ")"));
      }
    }, {
      key: "_basicDot",
      value: function _basicDot(args) {
        var _this = this;
        var size = args.size,
          x = args.x,
          y = args.y;
        this._rotateFigure(_objectSpread2(_objectSpread2({}, args), {}, {
          draw: function draw() {
            _this._element = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            _this._element.setAttribute("cx", String(x + size / 2));
            _this._element.setAttribute("cy", String(y + size / 2));
            _this._element.setAttribute("r", String(size / 2));
          }
        }));
      }
    }, {
      key: "_basicSquare",
      value: function _basicSquare(args) {
        var _this2 = this;
        var size = args.size,
          x = args.x,
          y = args.y;
        this._rotateFigure(_objectSpread2(_objectSpread2({}, args), {}, {
          draw: function draw() {
            _this2._element = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            _this2._element.setAttribute("x", String(x));
            _this2._element.setAttribute("y", String(y));
            _this2._element.setAttribute("width", String(size));
            _this2._element.setAttribute("height", String(size));
          }
        }));
      }
    }, {
      key: "_drawDot",
      value: function _drawDot(_ref3) {
        var x = _ref3.x,
          y = _ref3.y,
          size = _ref3.size,
          rotation = _ref3.rotation;
        this._basicDot({
          x: x,
          y: y,
          size: size,
          rotation: rotation
        });
      }
    }, {
      key: "_drawSquare",
      value: function _drawSquare(_ref4) {
        var x = _ref4.x,
          y = _ref4.y,
          size = _ref4.size,
          rotation = _ref4.rotation;
        this._basicSquare({
          x: x,
          y: y,
          size: size,
          rotation: rotation
        });
      }
    }]);
    return QRCornerDot;
  }();

  var squareMask$1 = [[1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1]];
  var dotMask$1 = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];
  var QRSVG = /*#__PURE__*/function () {
    //TODO don't pass all options to this class
    function QRSVG(options) {
      _classCallCheck(this, QRSVG);
      this._element = void 0;
      this._defs = void 0;
      this._dotsClipPath = void 0;
      this._cornersSquareClipPath = void 0;
      this._cornersDotClipPath = void 0;
      this._options = void 0;
      this._qr = void 0;
      this._image = void 0;
      this._element = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      this._element.setAttribute("width", String(options.width));
      this._element.setAttribute("height", String(options.height));
      this._defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
      this._element.appendChild(this._defs);
      this._options = options;
    }
    _createClass(QRSVG, [{
      key: "width",
      get: function get() {
        return this._options.width;
      }
    }, {
      key: "height",
      get: function get() {
        return this._options.height;
      }
    }, {
      key: "getElement",
      value: function getElement() {
        return this._element;
      }
    }, {
      key: "clear",
      value: function clear() {
        var _oldElement$parentNod;
        var oldElement = this._element;
        this._element = oldElement.cloneNode(false);
        oldElement === null || oldElement === void 0 ? void 0 : (_oldElement$parentNod = oldElement.parentNode) === null || _oldElement$parentNod === void 0 ? void 0 : _oldElement$parentNod.replaceChild(this._element, oldElement);
        this._defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
        this._element.appendChild(this._defs);
      }
    }, {
      key: "drawQR",
      value: function () {
        var _drawQR = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(qr) {
          var _this = this;
          var count, minSize, dotSize, drawImageSize, _this$_options, imageOptions, qrOptions, coverLevel, maxHiddenDots;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                count = qr.getModuleCount();
                minSize = Math.min(this._options.width, this._options.height) - this._options.margin * 2;
                dotSize = Math.floor(minSize / count);
                drawImageSize = {
                  hideXDots: 0,
                  hideYDots: 0,
                  width: 0,
                  height: 0
                };
                this._qr = qr;
                if (!this._options.image) {
                  _context.next = 14;
                  break;
                }
                _context.next = 8;
                return this.loadImage();
              case 8:
                if (this._image) {
                  _context.next = 10;
                  break;
                }
                return _context.abrupt("return");
              case 10:
                _this$_options = this._options, imageOptions = _this$_options.imageOptions, qrOptions = _this$_options.qrOptions;
                coverLevel = imageOptions.imageSize * errorCorrectionPercents[qrOptions.errorCorrectionLevel];
                maxHiddenDots = Math.floor(coverLevel * count * count);
                drawImageSize = calculateImageSize({
                  originalWidth: this._image.width,
                  originalHeight: this._image.height,
                  maxHiddenDots: maxHiddenDots,
                  maxHiddenAxisDots: count - 14,
                  dotSize: dotSize
                });
              case 14:
                this.clear();
                this.drawBackground();
                this.drawDots(function (i, j) {
                  var _squareMask$i, _squareMask, _squareMask$i2, _dotMask$i, _dotMask, _dotMask$i2;
                  if (_this._options.imageOptions.hideBackgroundDots) {
                    if (i >= (count - drawImageSize.hideXDots) / 2 && i < (count + drawImageSize.hideXDots) / 2 && j >= (count - drawImageSize.hideYDots) / 2 && j < (count + drawImageSize.hideYDots) / 2) {
                      return false;
                    }
                  }
                  if (((_squareMask$i = squareMask$1[i]) === null || _squareMask$i === void 0 ? void 0 : _squareMask$i[j]) || ((_squareMask = squareMask$1[i - count + 7]) === null || _squareMask === void 0 ? void 0 : _squareMask[j]) || ((_squareMask$i2 = squareMask$1[i]) === null || _squareMask$i2 === void 0 ? void 0 : _squareMask$i2[j - count + 7])) {
                    return false;
                  }
                  if (((_dotMask$i = dotMask$1[i]) === null || _dotMask$i === void 0 ? void 0 : _dotMask$i[j]) || ((_dotMask = dotMask$1[i - count + 7]) === null || _dotMask === void 0 ? void 0 : _dotMask[j]) || ((_dotMask$i2 = dotMask$1[i]) === null || _dotMask$i2 === void 0 ? void 0 : _dotMask$i2[j - count + 7])) {
                    return false;
                  }
                  return true;
                });
                this.drawCorners();
                if (this._options.image) {
                  this.drawImage({
                    width: drawImageSize.width,
                    height: drawImageSize.height,
                    count: count,
                    dotSize: dotSize
                  });
                }
              case 19:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
        function drawQR(_x) {
          return _drawQR.apply(this, arguments);
        }
        return drawQR;
      }()
    }, {
      key: "drawBackground",
      value: function drawBackground() {
        var element = this._element;
        var options = this._options;
        if (element) {
          var _options$backgroundOp, _options$backgroundOp2;
          var gradientOptions = (_options$backgroundOp = options.backgroundOptions) === null || _options$backgroundOp === void 0 ? void 0 : _options$backgroundOp.gradient;
          var color = (_options$backgroundOp2 = options.backgroundOptions) === null || _options$backgroundOp2 === void 0 ? void 0 : _options$backgroundOp2.color;
          if (gradientOptions || color) {
            this._createColor({
              options: gradientOptions,
              color: color,
              additionalRotation: 0,
              x: 0,
              y: 0,
              height: options.height,
              width: options.width,
              name: "background-color"
            });
          }
        }
      }
    }, {
      key: "drawDots",
      value: function drawDots(filter) {
        var _options$dotsOptions,
          _this2 = this;
        if (!this._qr) {
          throw "QR code is not defined";
        }
        var options = this._options;
        var count = this._qr.getModuleCount();
        if (count > options.width || count > options.height) {
          throw "The canvas is too small.";
        }
        var minSize = Math.min(options.width, options.height) - options.margin * 2;
        var dotSize = Math.floor(minSize / count);
        var xBeginning = Math.floor((options.width - count * dotSize) / 2);
        var yBeginning = Math.floor((options.height - count * dotSize) / 2);
        var dot = new QRDot$1({
          svg: this._element,
          type: options.dotsOptions.type
        });
        this._dotsClipPath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
        this._dotsClipPath.setAttribute("id", "clip-path-dot-color");
        this._defs.appendChild(this._dotsClipPath);
        this._createColor({
          options: (_options$dotsOptions = options.dotsOptions) === null || _options$dotsOptions === void 0 ? void 0 : _options$dotsOptions.gradient,
          color: options.dotsOptions.color,
          additionalRotation: 0,
          x: xBeginning,
          y: yBeginning,
          height: count * dotSize,
          width: count * dotSize,
          name: "dot-color"
        });
        var _loop = function _loop(i) {
          var _loop2 = function _loop2(j) {
              var _this2$_qr;
              if (filter && !filter(i, j)) {
                return 0; // continue
              }
              if (!((_this2$_qr = _this2._qr) === null || _this2$_qr === void 0 ? void 0 : _this2$_qr.isDark(i, j))) {
                return 0; // continue
              }
              dot.draw(xBeginning + i * dotSize, yBeginning + j * dotSize, dotSize, function (xOffset, yOffset) {
                if (i + xOffset < 0 || j + yOffset < 0 || i + xOffset >= count || j + yOffset >= count) return false;
                if (filter && !filter(i + xOffset, j + yOffset)) return false;
                return !!_this2._qr && _this2._qr.isDark(i + xOffset, j + yOffset);
              });
              if (dot._element && _this2._dotsClipPath) {
                _this2._dotsClipPath.appendChild(dot._element);
              }
            },
            _ret;
          for (var j = 0; j < count; j++) {
            _ret = _loop2(j);
            if (_ret === 0) continue;
          }
        };
        for (var i = 0; i < count; i++) {
          _loop(i);
        }
      }
    }, {
      key: "drawCorners",
      value: function drawCorners() {
        var _this3 = this;
        if (!this._qr) {
          throw "QR code is not defined";
        }
        var element = this._element;
        var options = this._options;
        if (!element) {
          throw "Element code is not defined";
        }
        var count = this._qr.getModuleCount();
        var minSize = Math.min(options.width, options.height) - options.margin * 2;
        var dotSize = Math.floor(minSize / count);
        var cornersSquareSize = dotSize * 7;
        var cornersDotSize = dotSize * 3;
        var xBeginning = Math.floor((options.width - count * dotSize) / 2);
        var yBeginning = Math.floor((options.height - count * dotSize) / 2);
        [[0, 0, 0], [1, 0, Math.PI / 2], [0, 1, -Math.PI / 2]].forEach(function (_ref) {
          var _options$cornersSquar, _options$cornersSquar2, _options$cornersSquar5, _options$cornersDotOp, _options$cornersDotOp2, _options$cornersDotOp5;
          var _ref2 = _slicedToArray(_ref, 3),
            column = _ref2[0],
            row = _ref2[1],
            rotation = _ref2[2];
          var x = xBeginning + column * dotSize * (count - 7);
          var y = yBeginning + row * dotSize * (count - 7);
          var cornersSquareClipPath = _this3._dotsClipPath;
          var cornersDotClipPath = _this3._dotsClipPath;
          if (((_options$cornersSquar = options.cornersSquareOptions) === null || _options$cornersSquar === void 0 ? void 0 : _options$cornersSquar.gradient) || ((_options$cornersSquar2 = options.cornersSquareOptions) === null || _options$cornersSquar2 === void 0 ? void 0 : _options$cornersSquar2.color)) {
            var _options$cornersSquar3, _options$cornersSquar4;
            cornersSquareClipPath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
            cornersSquareClipPath.setAttribute("id", "clip-path-corners-square-color-".concat(column, "-").concat(row));
            _this3._defs.appendChild(cornersSquareClipPath);
            _this3._cornersSquareClipPath = _this3._cornersDotClipPath = cornersDotClipPath = cornersSquareClipPath;
            _this3._createColor({
              options: (_options$cornersSquar3 = options.cornersSquareOptions) === null || _options$cornersSquar3 === void 0 ? void 0 : _options$cornersSquar3.gradient,
              color: (_options$cornersSquar4 = options.cornersSquareOptions) === null || _options$cornersSquar4 === void 0 ? void 0 : _options$cornersSquar4.color,
              additionalRotation: rotation,
              x: x,
              y: y,
              height: cornersSquareSize,
              width: cornersSquareSize,
              name: "corners-square-color-".concat(column, "-").concat(row)
            });
          }
          if ((_options$cornersSquar5 = options.cornersSquareOptions) === null || _options$cornersSquar5 === void 0 ? void 0 : _options$cornersSquar5.type) {
            var cornersSquare = new QRCornerSquare$1({
              svg: _this3._element,
              type: options.cornersSquareOptions.type
            });
            cornersSquare.draw(x, y, cornersSquareSize, rotation);
            if (cornersSquare._element && cornersSquareClipPath) {
              cornersSquareClipPath.appendChild(cornersSquare._element);
            }
          } else {
            var dot = new QRDot$1({
              svg: _this3._element,
              type: options.dotsOptions.type
            });
            var _loop3 = function _loop3(i) {
              var _loop4 = function _loop4(j) {
                var _squareMask$i3;
                if (!((_squareMask$i3 = squareMask$1[i]) === null || _squareMask$i3 === void 0 ? void 0 : _squareMask$i3[j])) {
                  return 1; // continue
                }
                dot.draw(x + i * dotSize, y + j * dotSize, dotSize, function (xOffset, yOffset) {
                  var _squareMask2;
                  return !!((_squareMask2 = squareMask$1[i + xOffset]) === null || _squareMask2 === void 0 ? void 0 : _squareMask2[j + yOffset]);
                });
                if (dot._element && cornersSquareClipPath) {
                  cornersSquareClipPath.appendChild(dot._element);
                }
              };
              for (var j = 0; j < squareMask$1[i].length; j++) {
                if (_loop4(j)) continue;
              }
            };
            for (var i = 0; i < squareMask$1.length; i++) {
              _loop3(i);
            }
          }
          if (((_options$cornersDotOp = options.cornersDotOptions) === null || _options$cornersDotOp === void 0 ? void 0 : _options$cornersDotOp.gradient) || ((_options$cornersDotOp2 = options.cornersDotOptions) === null || _options$cornersDotOp2 === void 0 ? void 0 : _options$cornersDotOp2.color)) {
            var _options$cornersDotOp3, _options$cornersDotOp4;
            cornersDotClipPath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
            cornersDotClipPath.setAttribute("id", "clip-path-corners-dot-color-".concat(column, "-").concat(row));
            _this3._defs.appendChild(cornersDotClipPath);
            _this3._cornersDotClipPath = cornersDotClipPath;
            _this3._createColor({
              options: (_options$cornersDotOp3 = options.cornersDotOptions) === null || _options$cornersDotOp3 === void 0 ? void 0 : _options$cornersDotOp3.gradient,
              color: (_options$cornersDotOp4 = options.cornersDotOptions) === null || _options$cornersDotOp4 === void 0 ? void 0 : _options$cornersDotOp4.color,
              additionalRotation: rotation,
              x: x + dotSize * 2,
              y: y + dotSize * 2,
              height: cornersDotSize,
              width: cornersDotSize,
              name: "corners-dot-color-".concat(column, "-").concat(row)
            });
          }
          if ((_options$cornersDotOp5 = options.cornersDotOptions) === null || _options$cornersDotOp5 === void 0 ? void 0 : _options$cornersDotOp5.type) {
            var cornersDot = new QRCornerDot$1({
              svg: _this3._element,
              type: options.cornersDotOptions.type
            });
            cornersDot.draw(x + dotSize * 2, y + dotSize * 2, cornersDotSize, rotation);
            if (cornersDot._element && cornersDotClipPath) {
              cornersDotClipPath.appendChild(cornersDot._element);
            }
          } else {
            var _dot = new QRDot$1({
              svg: _this3._element,
              type: options.dotsOptions.type
            });
            var _loop5 = function _loop5(_i) {
              var _loop6 = function _loop6(j) {
                var _dotMask$_i;
                if (!((_dotMask$_i = dotMask$1[_i]) === null || _dotMask$_i === void 0 ? void 0 : _dotMask$_i[j])) {
                  return 1; // continue
                }
                _dot.draw(x + _i * dotSize, y + j * dotSize, dotSize, function (xOffset, yOffset) {
                  var _dotMask2;
                  return !!((_dotMask2 = dotMask$1[_i + xOffset]) === null || _dotMask2 === void 0 ? void 0 : _dotMask2[j + yOffset]);
                });
                if (_dot._element && cornersDotClipPath) {
                  cornersDotClipPath.appendChild(_dot._element);
                }
              };
              for (var j = 0; j < dotMask$1[_i].length; j++) {
                if (_loop6(j)) continue;
              }
            };
            for (var _i = 0; _i < dotMask$1.length; _i++) {
              _loop5(_i);
            }
          }
        });
      }
    }, {
      key: "loadImage",
      value: function loadImage() {
        var _this4 = this;
        return new Promise(function (resolve, reject) {
          var options = _this4._options;
          var image = new Image();
          if (!options.image) {
            return reject("Image is not defined");
          }
          if (typeof options.imageOptions.crossOrigin === "string") {
            image.crossOrigin = options.imageOptions.crossOrigin;
          }
          _this4._image = image;
          image.onload = function () {
            resolve();
          };
          image.src = options.image;
        });
      }
    }, {
      key: "drawImage",
      value: function drawImage(_ref3) {
        var width = _ref3.width,
          height = _ref3.height,
          count = _ref3.count,
          dotSize = _ref3.dotSize;
        var options = this._options;
        var xBeginning = Math.floor((options.width - count * dotSize) / 2);
        var yBeginning = Math.floor((options.height - count * dotSize) / 2);
        var dx = xBeginning + options.imageOptions.margin + (count * dotSize - width) / 2;
        var dy = yBeginning + options.imageOptions.margin + (count * dotSize - height) / 2;
        var dw = width - options.imageOptions.margin * 2;
        var dh = height - options.imageOptions.margin * 2;
        var image = document.createElementNS("http://www.w3.org/2000/svg", "image");
        image.setAttribute("href", options.image || "");
        image.setAttribute("x", String(dx));
        image.setAttribute("y", String(dy));
        image.setAttribute("width", "".concat(dw, "px"));
        image.setAttribute("height", "".concat(dh, "px"));
        this._element.appendChild(image);
      }
    }, {
      key: "_createColor",
      value: function _createColor(_ref4) {
        var options = _ref4.options,
          color = _ref4.color,
          additionalRotation = _ref4.additionalRotation,
          x = _ref4.x,
          y = _ref4.y,
          height = _ref4.height,
          width = _ref4.width,
          name = _ref4.name;
        var size = width > height ? width : height;
        var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("x", String(x));
        rect.setAttribute("y", String(y));
        rect.setAttribute("height", String(height));
        rect.setAttribute("width", String(width));
        rect.setAttribute("clip-path", "url('#clip-path-".concat(name, "')"));
        if (options) {
          var gradient;
          if (options.type === gradientTypes.radial) {
            gradient = document.createElementNS("http://www.w3.org/2000/svg", "radialGradient");
            gradient.setAttribute("id", name);
            gradient.setAttribute("gradientUnits", "userSpaceOnUse");
            gradient.setAttribute("fx", String(x + width / 2));
            gradient.setAttribute("fy", String(y + height / 2));
            gradient.setAttribute("cx", String(x + width / 2));
            gradient.setAttribute("cy", String(y + height / 2));
            gradient.setAttribute("r", String(size / 2));
          } else {
            var rotation = ((options.rotation || 0) + additionalRotation) % (2 * Math.PI);
            var positiveRotation = (rotation + 2 * Math.PI) % (2 * Math.PI);
            var x0 = x + width / 2;
            var y0 = y + height / 2;
            var x1 = x + width / 2;
            var y1 = y + height / 2;
            if (positiveRotation >= 0 && positiveRotation <= 0.25 * Math.PI || positiveRotation > 1.75 * Math.PI && positiveRotation <= 2 * Math.PI) {
              x0 = x0 - width / 2;
              y0 = y0 - height / 2 * Math.tan(rotation);
              x1 = x1 + width / 2;
              y1 = y1 + height / 2 * Math.tan(rotation);
            } else if (positiveRotation > 0.25 * Math.PI && positiveRotation <= 0.75 * Math.PI) {
              y0 = y0 - height / 2;
              x0 = x0 - width / 2 / Math.tan(rotation);
              y1 = y1 + height / 2;
              x1 = x1 + width / 2 / Math.tan(rotation);
            } else if (positiveRotation > 0.75 * Math.PI && positiveRotation <= 1.25 * Math.PI) {
              x0 = x0 + width / 2;
              y0 = y0 + height / 2 * Math.tan(rotation);
              x1 = x1 - width / 2;
              y1 = y1 - height / 2 * Math.tan(rotation);
            } else if (positiveRotation > 1.25 * Math.PI && positiveRotation <= 1.75 * Math.PI) {
              y0 = y0 + height / 2;
              x0 = x0 + width / 2 / Math.tan(rotation);
              y1 = y1 - height / 2;
              x1 = x1 - width / 2 / Math.tan(rotation);
            }
            gradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
            gradient.setAttribute("id", name);
            gradient.setAttribute("gradientUnits", "userSpaceOnUse");
            gradient.setAttribute("x1", String(Math.round(x0)));
            gradient.setAttribute("y1", String(Math.round(y0)));
            gradient.setAttribute("x2", String(Math.round(x1)));
            gradient.setAttribute("y2", String(Math.round(y1)));
          }
          options.colorStops.forEach(function (_ref5) {
            var offset = _ref5.offset,
              color = _ref5.color;
            var stop = document.createElementNS("http://www.w3.org/2000/svg", "stop");
            stop.setAttribute("offset", "".concat(100 * offset, "%"));
            stop.setAttribute("stop-color", color);
            gradient.appendChild(stop);
          });
          rect.setAttribute("fill", "url('#".concat(name, "')"));
          this._defs.appendChild(gradient);
        } else if (color) {
          rect.setAttribute("fill", color);
        }
        this._element.appendChild(rect);
      }
    }]);
    return QRSVG;
  }();

  var drawTypes = {
    canvas: "canvas",
    svg: "svg"
  };

  var qrTypes = {};
  for (var type = 0; type <= 40; type++) {
    qrTypes[type] = type;
  }

  var errorCorrectionLevels = {
    L: "L",
    M: "M",
    Q: "Q",
    H: "H"
  };

  var defaultOptions = {
    type: drawTypes.canvas,
    width: 300,
    height: 300,
    data: "",
    margin: 0,
    qrOptions: {
      typeNumber: qrTypes[0],
      mode: undefined,
      errorCorrectionLevel: errorCorrectionLevels.Q
    },
    imageOptions: {
      hideBackgroundDots: true,
      imageSize: 0.4,
      crossOrigin: undefined,
      margin: 0
    },
    dotsOptions: {
      type: "square",
      color: "#000"
    },
    backgroundOptions: {
      color: "#fff"
    }
  };

  function sanitizeGradient(gradient) {
    var newGradient = _objectSpread2({}, gradient);
    if (!newGradient.colorStops || !newGradient.colorStops.length) {
      throw "Field 'colorStops' is required in gradient";
    }
    if (newGradient.rotation) {
      newGradient.rotation = Number(newGradient.rotation);
    } else {
      newGradient.rotation = 0;
    }
    newGradient.colorStops = newGradient.colorStops.map(function (colorStop) {
      return _objectSpread2(_objectSpread2({}, colorStop), {}, {
        offset: Number(colorStop.offset)
      });
    });
    return newGradient;
  }
  function sanitizeOptions(options) {
    var newOptions = _objectSpread2({}, options);
    newOptions.width = Number(newOptions.width);
    newOptions.height = Number(newOptions.height);
    newOptions.margin = Number(newOptions.margin);
    newOptions.imageOptions = _objectSpread2(_objectSpread2({}, newOptions.imageOptions), {}, {
      hideBackgroundDots: Boolean(newOptions.imageOptions.hideBackgroundDots),
      imageSize: Number(newOptions.imageOptions.imageSize),
      margin: Number(newOptions.imageOptions.margin)
    });
    if (newOptions.margin > Math.min(newOptions.width, newOptions.height)) {
      newOptions.margin = Math.min(newOptions.width, newOptions.height);
    }
    newOptions.dotsOptions = _objectSpread2({}, newOptions.dotsOptions);
    if (newOptions.dotsOptions.gradient) {
      newOptions.dotsOptions.gradient = sanitizeGradient(newOptions.dotsOptions.gradient);
    }
    if (newOptions.cornersSquareOptions) {
      newOptions.cornersSquareOptions = _objectSpread2({}, newOptions.cornersSquareOptions);
      if (newOptions.cornersSquareOptions.gradient) {
        newOptions.cornersSquareOptions.gradient = sanitizeGradient(newOptions.cornersSquareOptions.gradient);
      }
    }
    if (newOptions.cornersDotOptions) {
      newOptions.cornersDotOptions = _objectSpread2({}, newOptions.cornersDotOptions);
      if (newOptions.cornersDotOptions.gradient) {
        newOptions.cornersDotOptions.gradient = sanitizeGradient(newOptions.cornersDotOptions.gradient);
      }
    }
    if (newOptions.backgroundOptions) {
      newOptions.backgroundOptions = _objectSpread2({}, newOptions.backgroundOptions);
      if (newOptions.backgroundOptions.gradient) {
        newOptions.backgroundOptions.gradient = sanitizeGradient(newOptions.backgroundOptions.gradient);
      }
    }
    return newOptions;
  }

  function createCommonjsModule(fn, basedir, module) {
  	return module = {
  		path: basedir,
  		exports: {},
  		require: function (path, base) {
  			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
  		}
  	}, fn(module, module.exports), module.exports;
  }

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
  }

  var qrcode_1 = createCommonjsModule(function (module, exports) {
  //---------------------------------------------------------------------
  //
  // QR Code Generator for JavaScript
  //
  // Copyright (c) 2009 Kazuhiko Arase
  //
  // URL: http://www.d-project.com/
  //
  // Licensed under the MIT license:
  //  http://www.opensource.org/licenses/mit-license.php
  //
  // The word 'QR Code' is registered trademark of
  // DENSO WAVE INCORPORATED
  //  http://www.denso-wave.com/qrcode/faqpatent-e.html
  //
  //---------------------------------------------------------------------

  var qrcode = function() {

    //---------------------------------------------------------------------
    // qrcode
    //---------------------------------------------------------------------

    /**
     * qrcode
     * @param typeNumber 1 to 40
     * @param errorCorrectionLevel 'L','M','Q','H'
     */
    var qrcode = function(typeNumber, errorCorrectionLevel) {

      var PAD0 = 0xEC;
      var PAD1 = 0x11;

      var _typeNumber = typeNumber;
      var _errorCorrectionLevel = QRErrorCorrectionLevel[errorCorrectionLevel];
      var _modules = null;
      var _moduleCount = 0;
      var _dataCache = null;
      var _dataList = [];

      var _this = {};

      var makeImpl = function(test, maskPattern) {

        _moduleCount = _typeNumber * 4 + 17;
        _modules = function(moduleCount) {
          var modules = new Array(moduleCount);
          for (var row = 0; row < moduleCount; row += 1) {
            modules[row] = new Array(moduleCount);
            for (var col = 0; col < moduleCount; col += 1) {
              modules[row][col] = null;
            }
          }
          return modules;
        }(_moduleCount);

        setupPositionProbePattern(0, 0);
        setupPositionProbePattern(_moduleCount - 7, 0);
        setupPositionProbePattern(0, _moduleCount - 7);
        setupPositionAdjustPattern();
        setupTimingPattern();
        setupTypeInfo(test, maskPattern);

        if (_typeNumber >= 7) {
          setupTypeNumber(test);
        }

        if (_dataCache == null) {
          _dataCache = createData(_typeNumber, _errorCorrectionLevel, _dataList);
        }

        mapData(_dataCache, maskPattern);
      };

      var setupPositionProbePattern = function(row, col) {

        for (var r = -1; r <= 7; r += 1) {

          if (row + r <= -1 || _moduleCount <= row + r) continue;

          for (var c = -1; c <= 7; c += 1) {

            if (col + c <= -1 || _moduleCount <= col + c) continue;

            if ( (0 <= r && r <= 6 && (c == 0 || c == 6) )
                || (0 <= c && c <= 6 && (r == 0 || r == 6) )
                || (2 <= r && r <= 4 && 2 <= c && c <= 4) ) {
              _modules[row + r][col + c] = true;
            } else {
              _modules[row + r][col + c] = false;
            }
          }
        }
      };

      var getBestMaskPattern = function() {

        var minLostPoint = 0;
        var pattern = 0;

        for (var i = 0; i < 8; i += 1) {

          makeImpl(true, i);

          var lostPoint = QRUtil.getLostPoint(_this);

          if (i == 0 || minLostPoint > lostPoint) {
            minLostPoint = lostPoint;
            pattern = i;
          }
        }

        return pattern;
      };

      var setupTimingPattern = function() {

        for (var r = 8; r < _moduleCount - 8; r += 1) {
          if (_modules[r][6] != null) {
            continue;
          }
          _modules[r][6] = (r % 2 == 0);
        }

        for (var c = 8; c < _moduleCount - 8; c += 1) {
          if (_modules[6][c] != null) {
            continue;
          }
          _modules[6][c] = (c % 2 == 0);
        }
      };

      var setupPositionAdjustPattern = function() {

        var pos = QRUtil.getPatternPosition(_typeNumber);

        for (var i = 0; i < pos.length; i += 1) {

          for (var j = 0; j < pos.length; j += 1) {

            var row = pos[i];
            var col = pos[j];

            if (_modules[row][col] != null) {
              continue;
            }

            for (var r = -2; r <= 2; r += 1) {

              for (var c = -2; c <= 2; c += 1) {

                if (r == -2 || r == 2 || c == -2 || c == 2
                    || (r == 0 && c == 0) ) {
                  _modules[row + r][col + c] = true;
                } else {
                  _modules[row + r][col + c] = false;
                }
              }
            }
          }
        }
      };

      var setupTypeNumber = function(test) {

        var bits = QRUtil.getBCHTypeNumber(_typeNumber);

        for (var i = 0; i < 18; i += 1) {
          var mod = (!test && ( (bits >> i) & 1) == 1);
          _modules[Math.floor(i / 3)][i % 3 + _moduleCount - 8 - 3] = mod;
        }

        for (var i = 0; i < 18; i += 1) {
          var mod = (!test && ( (bits >> i) & 1) == 1);
          _modules[i % 3 + _moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
        }
      };

      var setupTypeInfo = function(test, maskPattern) {

        var data = (_errorCorrectionLevel << 3) | maskPattern;
        var bits = QRUtil.getBCHTypeInfo(data);

        // vertical
        for (var i = 0; i < 15; i += 1) {

          var mod = (!test && ( (bits >> i) & 1) == 1);

          if (i < 6) {
            _modules[i][8] = mod;
          } else if (i < 8) {
            _modules[i + 1][8] = mod;
          } else {
            _modules[_moduleCount - 15 + i][8] = mod;
          }
        }

        // horizontal
        for (var i = 0; i < 15; i += 1) {

          var mod = (!test && ( (bits >> i) & 1) == 1);

          if (i < 8) {
            _modules[8][_moduleCount - i - 1] = mod;
          } else if (i < 9) {
            _modules[8][15 - i - 1 + 1] = mod;
          } else {
            _modules[8][15 - i - 1] = mod;
          }
        }

        // fixed module
        _modules[_moduleCount - 8][8] = (!test);
      };

      var mapData = function(data, maskPattern) {

        var inc = -1;
        var row = _moduleCount - 1;
        var bitIndex = 7;
        var byteIndex = 0;
        var maskFunc = QRUtil.getMaskFunction(maskPattern);

        for (var col = _moduleCount - 1; col > 0; col -= 2) {

          if (col == 6) col -= 1;

          while (true) {

            for (var c = 0; c < 2; c += 1) {

              if (_modules[row][col - c] == null) {

                var dark = false;

                if (byteIndex < data.length) {
                  dark = ( ( (data[byteIndex] >>> bitIndex) & 1) == 1);
                }

                var mask = maskFunc(row, col - c);

                if (mask) {
                  dark = !dark;
                }

                _modules[row][col - c] = dark;
                bitIndex -= 1;

                if (bitIndex == -1) {
                  byteIndex += 1;
                  bitIndex = 7;
                }
              }
            }

            row += inc;

            if (row < 0 || _moduleCount <= row) {
              row -= inc;
              inc = -inc;
              break;
            }
          }
        }
      };

      var createBytes = function(buffer, rsBlocks) {

        var offset = 0;

        var maxDcCount = 0;
        var maxEcCount = 0;

        var dcdata = new Array(rsBlocks.length);
        var ecdata = new Array(rsBlocks.length);

        for (var r = 0; r < rsBlocks.length; r += 1) {

          var dcCount = rsBlocks[r].dataCount;
          var ecCount = rsBlocks[r].totalCount - dcCount;

          maxDcCount = Math.max(maxDcCount, dcCount);
          maxEcCount = Math.max(maxEcCount, ecCount);

          dcdata[r] = new Array(dcCount);

          for (var i = 0; i < dcdata[r].length; i += 1) {
            dcdata[r][i] = 0xff & buffer.getBuffer()[i + offset];
          }
          offset += dcCount;

          var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
          var rawPoly = qrPolynomial(dcdata[r], rsPoly.getLength() - 1);

          var modPoly = rawPoly.mod(rsPoly);
          ecdata[r] = new Array(rsPoly.getLength() - 1);
          for (var i = 0; i < ecdata[r].length; i += 1) {
            var modIndex = i + modPoly.getLength() - ecdata[r].length;
            ecdata[r][i] = (modIndex >= 0)? modPoly.getAt(modIndex) : 0;
          }
        }

        var totalCodeCount = 0;
        for (var i = 0; i < rsBlocks.length; i += 1) {
          totalCodeCount += rsBlocks[i].totalCount;
        }

        var data = new Array(totalCodeCount);
        var index = 0;

        for (var i = 0; i < maxDcCount; i += 1) {
          for (var r = 0; r < rsBlocks.length; r += 1) {
            if (i < dcdata[r].length) {
              data[index] = dcdata[r][i];
              index += 1;
            }
          }
        }

        for (var i = 0; i < maxEcCount; i += 1) {
          for (var r = 0; r < rsBlocks.length; r += 1) {
            if (i < ecdata[r].length) {
              data[index] = ecdata[r][i];
              index += 1;
            }
          }
        }

        return data;
      };

      var createData = function(typeNumber, errorCorrectionLevel, dataList) {

        var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectionLevel);

        var buffer = qrBitBuffer();

        for (var i = 0; i < dataList.length; i += 1) {
          var data = dataList[i];
          buffer.put(data.getMode(), 4);
          buffer.put(data.getLength(), QRUtil.getLengthInBits(data.getMode(), typeNumber) );
          data.write(buffer);
        }

        // calc num max data.
        var totalDataCount = 0;
        for (var i = 0; i < rsBlocks.length; i += 1) {
          totalDataCount += rsBlocks[i].dataCount;
        }

        if (buffer.getLengthInBits() > totalDataCount * 8) {
          throw 'code length overflow. ('
            + buffer.getLengthInBits()
            + '>'
            + totalDataCount * 8
            + ')';
        }

        // end code
        if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
          buffer.put(0, 4);
        }

        // padding
        while (buffer.getLengthInBits() % 8 != 0) {
          buffer.putBit(false);
        }

        // padding
        while (true) {

          if (buffer.getLengthInBits() >= totalDataCount * 8) {
            break;
          }
          buffer.put(PAD0, 8);

          if (buffer.getLengthInBits() >= totalDataCount * 8) {
            break;
          }
          buffer.put(PAD1, 8);
        }

        return createBytes(buffer, rsBlocks);
      };

      _this.addData = function(data, mode) {

        mode = mode || 'Byte';

        var newData = null;

        switch(mode) {
        case 'Numeric' :
          newData = qrNumber(data);
          break;
        case 'Alphanumeric' :
          newData = qrAlphaNum(data);
          break;
        case 'Byte' :
          newData = qr8BitByte(data);
          break;
        case 'Kanji' :
          newData = qrKanji(data);
          break;
        default :
          throw 'mode:' + mode;
        }

        _dataList.push(newData);
        _dataCache = null;
      };

      _this.isDark = function(row, col) {
        if (row < 0 || _moduleCount <= row || col < 0 || _moduleCount <= col) {
          throw row + ',' + col;
        }
        return _modules[row][col];
      };

      _this.getModuleCount = function() {
        return _moduleCount;
      };

      _this.make = function() {
        if (_typeNumber < 1) {
          var typeNumber = 1;

          for (; typeNumber < 40; typeNumber++) {
            var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, _errorCorrectionLevel);
            var buffer = qrBitBuffer();

            for (var i = 0; i < _dataList.length; i++) {
              var data = _dataList[i];
              buffer.put(data.getMode(), 4);
              buffer.put(data.getLength(), QRUtil.getLengthInBits(data.getMode(), typeNumber) );
              data.write(buffer);
            }

            var totalDataCount = 0;
            for (var i = 0; i < rsBlocks.length; i++) {
              totalDataCount += rsBlocks[i].dataCount;
            }

            if (buffer.getLengthInBits() <= totalDataCount * 8) {
              break;
            }
          }

          _typeNumber = typeNumber;
        }

        makeImpl(false, getBestMaskPattern() );
      };

      _this.createTableTag = function(cellSize, margin) {

        cellSize = cellSize || 2;
        margin = (typeof margin == 'undefined')? cellSize * 4 : margin;

        var qrHtml = '';

        qrHtml += '<table style="';
        qrHtml += ' border-width: 0px; border-style: none;';
        qrHtml += ' border-collapse: collapse;';
        qrHtml += ' padding: 0px; margin: ' + margin + 'px;';
        qrHtml += '">';
        qrHtml += '<tbody>';

        for (var r = 0; r < _this.getModuleCount(); r += 1) {

          qrHtml += '<tr>';

          for (var c = 0; c < _this.getModuleCount(); c += 1) {
            qrHtml += '<td style="';
            qrHtml += ' border-width: 0px; border-style: none;';
            qrHtml += ' border-collapse: collapse;';
            qrHtml += ' padding: 0px; margin: 0px;';
            qrHtml += ' width: ' + cellSize + 'px;';
            qrHtml += ' height: ' + cellSize + 'px;';
            qrHtml += ' background-color: ';
            qrHtml += _this.isDark(r, c)? '#000000' : '#ffffff';
            qrHtml += ';';
            qrHtml += '"/>';
          }

          qrHtml += '</tr>';
        }

        qrHtml += '</tbody>';
        qrHtml += '</table>';

        return qrHtml;
      };

      _this.createSvgTag = function(cellSize, margin, alt, title) {

        var opts = {};
        if (typeof arguments[0] == 'object') {
          // Called by options.
          opts = arguments[0];
          // overwrite cellSize and margin.
          cellSize = opts.cellSize;
          margin = opts.margin;
          alt = opts.alt;
          title = opts.title;
        }

        cellSize = cellSize || 2;
        margin = (typeof margin == 'undefined')? cellSize * 4 : margin;

        // Compose alt property surrogate
        alt = (typeof alt === 'string') ? {text: alt} : alt || {};
        alt.text = alt.text || null;
        alt.id = (alt.text) ? alt.id || 'qrcode-description' : null;

        // Compose title property surrogate
        title = (typeof title === 'string') ? {text: title} : title || {};
        title.text = title.text || null;
        title.id = (title.text) ? title.id || 'qrcode-title' : null;

        var size = _this.getModuleCount() * cellSize + margin * 2;
        var c, mc, r, mr, qrSvg='', rect;

        rect = 'l' + cellSize + ',0 0,' + cellSize +
          ' -' + cellSize + ',0 0,-' + cellSize + 'z ';

        qrSvg += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"';
        qrSvg += !opts.scalable ? ' width="' + size + 'px" height="' + size + 'px"' : '';
        qrSvg += ' viewBox="0 0 ' + size + ' ' + size + '" ';
        qrSvg += ' preserveAspectRatio="xMinYMin meet"';
        qrSvg += (title.text || alt.text) ? ' role="img" aria-labelledby="' +
            escapeXml([title.id, alt.id].join(' ').trim() ) + '"' : '';
        qrSvg += '>';
        qrSvg += (title.text) ? '<title id="' + escapeXml(title.id) + '">' +
            escapeXml(title.text) + '</title>' : '';
        qrSvg += (alt.text) ? '<description id="' + escapeXml(alt.id) + '">' +
            escapeXml(alt.text) + '</description>' : '';
        qrSvg += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>';
        qrSvg += '<path d="';

        for (r = 0; r < _this.getModuleCount(); r += 1) {
          mr = r * cellSize + margin;
          for (c = 0; c < _this.getModuleCount(); c += 1) {
            if (_this.isDark(r, c) ) {
              mc = c*cellSize+margin;
              qrSvg += 'M' + mc + ',' + mr + rect;
            }
          }
        }

        qrSvg += '" stroke="transparent" fill="black"/>';
        qrSvg += '</svg>';

        return qrSvg;
      };

      _this.createDataURL = function(cellSize, margin) {

        cellSize = cellSize || 2;
        margin = (typeof margin == 'undefined')? cellSize * 4 : margin;

        var size = _this.getModuleCount() * cellSize + margin * 2;
        var min = margin;
        var max = size - margin;

        return createDataURL(size, size, function(x, y) {
          if (min <= x && x < max && min <= y && y < max) {
            var c = Math.floor( (x - min) / cellSize);
            var r = Math.floor( (y - min) / cellSize);
            return _this.isDark(r, c)? 0 : 1;
          } else {
            return 1;
          }
        } );
      };

      _this.createImgTag = function(cellSize, margin, alt) {

        cellSize = cellSize || 2;
        margin = (typeof margin == 'undefined')? cellSize * 4 : margin;

        var size = _this.getModuleCount() * cellSize + margin * 2;

        var img = '';
        img += '<img';
        img += '\u0020src="';
        img += _this.createDataURL(cellSize, margin);
        img += '"';
        img += '\u0020width="';
        img += size;
        img += '"';
        img += '\u0020height="';
        img += size;
        img += '"';
        if (alt) {
          img += '\u0020alt="';
          img += escapeXml(alt);
          img += '"';
        }
        img += '/>';

        return img;
      };

      var escapeXml = function(s) {
        var escaped = '';
        for (var i = 0; i < s.length; i += 1) {
          var c = s.charAt(i);
          switch(c) {
          case '<': escaped += '&lt;'; break;
          case '>': escaped += '&gt;'; break;
          case '&': escaped += '&amp;'; break;
          case '"': escaped += '&quot;'; break;
          default : escaped += c; break;
          }
        }
        return escaped;
      };

      var _createHalfASCII = function(margin) {
        var cellSize = 1;
        margin = (typeof margin == 'undefined')? cellSize * 2 : margin;

        var size = _this.getModuleCount() * cellSize + margin * 2;
        var min = margin;
        var max = size - margin;

        var y, x, r1, r2, p;

        var blocks = {
          '██': '█',
          '█ ': '▀',
          ' █': '▄',
          '  ': ' '
        };

        var blocksLastLineNoMargin = {
          '██': '▀',
          '█ ': '▀',
          ' █': ' ',
          '  ': ' '
        };

        var ascii = '';
        for (y = 0; y < size; y += 2) {
          r1 = Math.floor((y - min) / cellSize);
          r2 = Math.floor((y + 1 - min) / cellSize);
          for (x = 0; x < size; x += 1) {
            p = '█';

            if (min <= x && x < max && min <= y && y < max && _this.isDark(r1, Math.floor((x - min) / cellSize))) {
              p = ' ';
            }

            if (min <= x && x < max && min <= y+1 && y+1 < max && _this.isDark(r2, Math.floor((x - min) / cellSize))) {
              p += ' ';
            }
            else {
              p += '█';
            }

            // Output 2 characters per pixel, to create full square. 1 character per pixels gives only half width of square.
            ascii += (margin < 1 && y+1 >= max) ? blocksLastLineNoMargin[p] : blocks[p];
          }

          ascii += '\n';
        }

        if (size % 2 && margin > 0) {
          return ascii.substring(0, ascii.length - size - 1) + Array(size+1).join('▀');
        }

        return ascii.substring(0, ascii.length-1);
      };

      _this.createASCII = function(cellSize, margin) {
        cellSize = cellSize || 1;

        if (cellSize < 2) {
          return _createHalfASCII(margin);
        }

        cellSize -= 1;
        margin = (typeof margin == 'undefined')? cellSize * 2 : margin;

        var size = _this.getModuleCount() * cellSize + margin * 2;
        var min = margin;
        var max = size - margin;

        var y, x, r, p;

        var white = Array(cellSize+1).join('██');
        var black = Array(cellSize+1).join('  ');

        var ascii = '';
        var line = '';
        for (y = 0; y < size; y += 1) {
          r = Math.floor( (y - min) / cellSize);
          line = '';
          for (x = 0; x < size; x += 1) {
            p = 1;

            if (min <= x && x < max && min <= y && y < max && _this.isDark(r, Math.floor((x - min) / cellSize))) {
              p = 0;
            }

            // Output 2 characters per pixel, to create full square. 1 character per pixels gives only half width of square.
            line += p ? white : black;
          }

          for (r = 0; r < cellSize; r += 1) {
            ascii += line + '\n';
          }
        }

        return ascii.substring(0, ascii.length-1);
      };

      _this.renderTo2dContext = function(context, cellSize) {
        cellSize = cellSize || 2;
        var length = _this.getModuleCount();
        for (var row = 0; row < length; row++) {
          for (var col = 0; col < length; col++) {
            context.fillStyle = _this.isDark(row, col) ? 'black' : 'white';
            context.fillRect(row * cellSize, col * cellSize, cellSize, cellSize);
          }
        }
      };

      return _this;
    };

    //---------------------------------------------------------------------
    // qrcode.stringToBytes
    //---------------------------------------------------------------------

    qrcode.stringToBytesFuncs = {
      'default' : function(s) {
        var bytes = [];
        for (var i = 0; i < s.length; i += 1) {
          var c = s.charCodeAt(i);
          bytes.push(c & 0xff);
        }
        return bytes;
      }
    };

    qrcode.stringToBytes = qrcode.stringToBytesFuncs['default'];

    //---------------------------------------------------------------------
    // qrcode.createStringToBytes
    //---------------------------------------------------------------------

    /**
     * @param unicodeData base64 string of byte array.
     * [16bit Unicode],[16bit Bytes], ...
     * @param numChars
     */
    qrcode.createStringToBytes = function(unicodeData, numChars) {

      // create conversion map.

      var unicodeMap = function() {

        var bin = base64DecodeInputStream(unicodeData);
        var read = function() {
          var b = bin.read();
          if (b == -1) throw 'eof';
          return b;
        };

        var count = 0;
        var unicodeMap = {};
        while (true) {
          var b0 = bin.read();
          if (b0 == -1) break;
          var b1 = read();
          var b2 = read();
          var b3 = read();
          var k = String.fromCharCode( (b0 << 8) | b1);
          var v = (b2 << 8) | b3;
          unicodeMap[k] = v;
          count += 1;
        }
        if (count != numChars) {
          throw count + ' != ' + numChars;
        }

        return unicodeMap;
      }();

      var unknownChar = '?'.charCodeAt(0);

      return function(s) {
        var bytes = [];
        for (var i = 0; i < s.length; i += 1) {
          var c = s.charCodeAt(i);
          if (c < 128) {
            bytes.push(c);
          } else {
            var b = unicodeMap[s.charAt(i)];
            if (typeof b == 'number') {
              if ( (b & 0xff) == b) {
                // 1byte
                bytes.push(b);
              } else {
                // 2bytes
                bytes.push(b >>> 8);
                bytes.push(b & 0xff);
              }
            } else {
              bytes.push(unknownChar);
            }
          }
        }
        return bytes;
      };
    };

    //---------------------------------------------------------------------
    // QRMode
    //---------------------------------------------------------------------

    var QRMode = {
      MODE_NUMBER :    1 << 0,
      MODE_ALPHA_NUM : 1 << 1,
      MODE_8BIT_BYTE : 1 << 2,
      MODE_KANJI :     1 << 3
    };

    //---------------------------------------------------------------------
    // QRErrorCorrectionLevel
    //---------------------------------------------------------------------

    var QRErrorCorrectionLevel = {
      L : 1,
      M : 0,
      Q : 3,
      H : 2
    };

    //---------------------------------------------------------------------
    // QRMaskPattern
    //---------------------------------------------------------------------

    var QRMaskPattern = {
      PATTERN000 : 0,
      PATTERN001 : 1,
      PATTERN010 : 2,
      PATTERN011 : 3,
      PATTERN100 : 4,
      PATTERN101 : 5,
      PATTERN110 : 6,
      PATTERN111 : 7
    };

    //---------------------------------------------------------------------
    // QRUtil
    //---------------------------------------------------------------------

    var QRUtil = function() {

      var PATTERN_POSITION_TABLE = [
        [],
        [6, 18],
        [6, 22],
        [6, 26],
        [6, 30],
        [6, 34],
        [6, 22, 38],
        [6, 24, 42],
        [6, 26, 46],
        [6, 28, 50],
        [6, 30, 54],
        [6, 32, 58],
        [6, 34, 62],
        [6, 26, 46, 66],
        [6, 26, 48, 70],
        [6, 26, 50, 74],
        [6, 30, 54, 78],
        [6, 30, 56, 82],
        [6, 30, 58, 86],
        [6, 34, 62, 90],
        [6, 28, 50, 72, 94],
        [6, 26, 50, 74, 98],
        [6, 30, 54, 78, 102],
        [6, 28, 54, 80, 106],
        [6, 32, 58, 84, 110],
        [6, 30, 58, 86, 114],
        [6, 34, 62, 90, 118],
        [6, 26, 50, 74, 98, 122],
        [6, 30, 54, 78, 102, 126],
        [6, 26, 52, 78, 104, 130],
        [6, 30, 56, 82, 108, 134],
        [6, 34, 60, 86, 112, 138],
        [6, 30, 58, 86, 114, 142],
        [6, 34, 62, 90, 118, 146],
        [6, 30, 54, 78, 102, 126, 150],
        [6, 24, 50, 76, 102, 128, 154],
        [6, 28, 54, 80, 106, 132, 158],
        [6, 32, 58, 84, 110, 136, 162],
        [6, 26, 54, 82, 110, 138, 166],
        [6, 30, 58, 86, 114, 142, 170]
      ];
      var G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0);
      var G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0);
      var G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1);

      var _this = {};

      var getBCHDigit = function(data) {
        var digit = 0;
        while (data != 0) {
          digit += 1;
          data >>>= 1;
        }
        return digit;
      };

      _this.getBCHTypeInfo = function(data) {
        var d = data << 10;
        while (getBCHDigit(d) - getBCHDigit(G15) >= 0) {
          d ^= (G15 << (getBCHDigit(d) - getBCHDigit(G15) ) );
        }
        return ( (data << 10) | d) ^ G15_MASK;
      };

      _this.getBCHTypeNumber = function(data) {
        var d = data << 12;
        while (getBCHDigit(d) - getBCHDigit(G18) >= 0) {
          d ^= (G18 << (getBCHDigit(d) - getBCHDigit(G18) ) );
        }
        return (data << 12) | d;
      };

      _this.getPatternPosition = function(typeNumber) {
        return PATTERN_POSITION_TABLE[typeNumber - 1];
      };

      _this.getMaskFunction = function(maskPattern) {

        switch (maskPattern) {

        case QRMaskPattern.PATTERN000 :
          return function(i, j) { return (i + j) % 2 == 0; };
        case QRMaskPattern.PATTERN001 :
          return function(i, j) { return i % 2 == 0; };
        case QRMaskPattern.PATTERN010 :
          return function(i, j) { return j % 3 == 0; };
        case QRMaskPattern.PATTERN011 :
          return function(i, j) { return (i + j) % 3 == 0; };
        case QRMaskPattern.PATTERN100 :
          return function(i, j) { return (Math.floor(i / 2) + Math.floor(j / 3) ) % 2 == 0; };
        case QRMaskPattern.PATTERN101 :
          return function(i, j) { return (i * j) % 2 + (i * j) % 3 == 0; };
        case QRMaskPattern.PATTERN110 :
          return function(i, j) { return ( (i * j) % 2 + (i * j) % 3) % 2 == 0; };
        case QRMaskPattern.PATTERN111 :
          return function(i, j) { return ( (i * j) % 3 + (i + j) % 2) % 2 == 0; };

        default :
          throw 'bad maskPattern:' + maskPattern;
        }
      };

      _this.getErrorCorrectPolynomial = function(errorCorrectLength) {
        var a = qrPolynomial([1], 0);
        for (var i = 0; i < errorCorrectLength; i += 1) {
          a = a.multiply(qrPolynomial([1, QRMath.gexp(i)], 0) );
        }
        return a;
      };

      _this.getLengthInBits = function(mode, type) {

        if (1 <= type && type < 10) {

          // 1 - 9

          switch(mode) {
          case QRMode.MODE_NUMBER    : return 10;
          case QRMode.MODE_ALPHA_NUM : return 9;
          case QRMode.MODE_8BIT_BYTE : return 8;
          case QRMode.MODE_KANJI     : return 8;
          default :
            throw 'mode:' + mode;
          }

        } else if (type < 27) {

          // 10 - 26

          switch(mode) {
          case QRMode.MODE_NUMBER    : return 12;
          case QRMode.MODE_ALPHA_NUM : return 11;
          case QRMode.MODE_8BIT_BYTE : return 16;
          case QRMode.MODE_KANJI     : return 10;
          default :
            throw 'mode:' + mode;
          }

        } else if (type < 41) {

          // 27 - 40

          switch(mode) {
          case QRMode.MODE_NUMBER    : return 14;
          case QRMode.MODE_ALPHA_NUM : return 13;
          case QRMode.MODE_8BIT_BYTE : return 16;
          case QRMode.MODE_KANJI     : return 12;
          default :
            throw 'mode:' + mode;
          }

        } else {
          throw 'type:' + type;
        }
      };

      _this.getLostPoint = function(qrcode) {

        var moduleCount = qrcode.getModuleCount();

        var lostPoint = 0;

        // LEVEL1

        for (var row = 0; row < moduleCount; row += 1) {
          for (var col = 0; col < moduleCount; col += 1) {

            var sameCount = 0;
            var dark = qrcode.isDark(row, col);

            for (var r = -1; r <= 1; r += 1) {

              if (row + r < 0 || moduleCount <= row + r) {
                continue;
              }

              for (var c = -1; c <= 1; c += 1) {

                if (col + c < 0 || moduleCount <= col + c) {
                  continue;
                }

                if (r == 0 && c == 0) {
                  continue;
                }

                if (dark == qrcode.isDark(row + r, col + c) ) {
                  sameCount += 1;
                }
              }
            }

            if (sameCount > 5) {
              lostPoint += (3 + sameCount - 5);
            }
          }
        }
        // LEVEL2

        for (var row = 0; row < moduleCount - 1; row += 1) {
          for (var col = 0; col < moduleCount - 1; col += 1) {
            var count = 0;
            if (qrcode.isDark(row, col) ) count += 1;
            if (qrcode.isDark(row + 1, col) ) count += 1;
            if (qrcode.isDark(row, col + 1) ) count += 1;
            if (qrcode.isDark(row + 1, col + 1) ) count += 1;
            if (count == 0 || count == 4) {
              lostPoint += 3;
            }
          }
        }

        // LEVEL3

        for (var row = 0; row < moduleCount; row += 1) {
          for (var col = 0; col < moduleCount - 6; col += 1) {
            if (qrcode.isDark(row, col)
                && !qrcode.isDark(row, col + 1)
                &&  qrcode.isDark(row, col + 2)
                &&  qrcode.isDark(row, col + 3)
                &&  qrcode.isDark(row, col + 4)
                && !qrcode.isDark(row, col + 5)
                &&  qrcode.isDark(row, col + 6) ) {
              lostPoint += 40;
            }
          }
        }

        for (var col = 0; col < moduleCount; col += 1) {
          for (var row = 0; row < moduleCount - 6; row += 1) {
            if (qrcode.isDark(row, col)
                && !qrcode.isDark(row + 1, col)
                &&  qrcode.isDark(row + 2, col)
                &&  qrcode.isDark(row + 3, col)
                &&  qrcode.isDark(row + 4, col)
                && !qrcode.isDark(row + 5, col)
                &&  qrcode.isDark(row + 6, col) ) {
              lostPoint += 40;
            }
          }
        }

        // LEVEL4

        var darkCount = 0;

        for (var col = 0; col < moduleCount; col += 1) {
          for (var row = 0; row < moduleCount; row += 1) {
            if (qrcode.isDark(row, col) ) {
              darkCount += 1;
            }
          }
        }

        var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
        lostPoint += ratio * 10;

        return lostPoint;
      };

      return _this;
    }();

    //---------------------------------------------------------------------
    // QRMath
    //---------------------------------------------------------------------

    var QRMath = function() {

      var EXP_TABLE = new Array(256);
      var LOG_TABLE = new Array(256);

      // initialize tables
      for (var i = 0; i < 8; i += 1) {
        EXP_TABLE[i] = 1 << i;
      }
      for (var i = 8; i < 256; i += 1) {
        EXP_TABLE[i] = EXP_TABLE[i - 4]
          ^ EXP_TABLE[i - 5]
          ^ EXP_TABLE[i - 6]
          ^ EXP_TABLE[i - 8];
      }
      for (var i = 0; i < 255; i += 1) {
        LOG_TABLE[EXP_TABLE[i] ] = i;
      }

      var _this = {};

      _this.glog = function(n) {

        if (n < 1) {
          throw 'glog(' + n + ')';
        }

        return LOG_TABLE[n];
      };

      _this.gexp = function(n) {

        while (n < 0) {
          n += 255;
        }

        while (n >= 256) {
          n -= 255;
        }

        return EXP_TABLE[n];
      };

      return _this;
    }();

    //---------------------------------------------------------------------
    // qrPolynomial
    //---------------------------------------------------------------------

    function qrPolynomial(num, shift) {

      if (typeof num.length == 'undefined') {
        throw num.length + '/' + shift;
      }

      var _num = function() {
        var offset = 0;
        while (offset < num.length && num[offset] == 0) {
          offset += 1;
        }
        var _num = new Array(num.length - offset + shift);
        for (var i = 0; i < num.length - offset; i += 1) {
          _num[i] = num[i + offset];
        }
        return _num;
      }();

      var _this = {};

      _this.getAt = function(index) {
        return _num[index];
      };

      _this.getLength = function() {
        return _num.length;
      };

      _this.multiply = function(e) {

        var num = new Array(_this.getLength() + e.getLength() - 1);

        for (var i = 0; i < _this.getLength(); i += 1) {
          for (var j = 0; j < e.getLength(); j += 1) {
            num[i + j] ^= QRMath.gexp(QRMath.glog(_this.getAt(i) ) + QRMath.glog(e.getAt(j) ) );
          }
        }

        return qrPolynomial(num, 0);
      };

      _this.mod = function(e) {

        if (_this.getLength() - e.getLength() < 0) {
          return _this;
        }

        var ratio = QRMath.glog(_this.getAt(0) ) - QRMath.glog(e.getAt(0) );

        var num = new Array(_this.getLength() );
        for (var i = 0; i < _this.getLength(); i += 1) {
          num[i] = _this.getAt(i);
        }

        for (var i = 0; i < e.getLength(); i += 1) {
          num[i] ^= QRMath.gexp(QRMath.glog(e.getAt(i) ) + ratio);
        }

        // recursive call
        return qrPolynomial(num, 0).mod(e);
      };

      return _this;
    }
    //---------------------------------------------------------------------
    // QRRSBlock
    //---------------------------------------------------------------------

    var QRRSBlock = function() {

      var RS_BLOCK_TABLE = [

        // L
        // M
        // Q
        // H

        // 1
        [1, 26, 19],
        [1, 26, 16],
        [1, 26, 13],
        [1, 26, 9],

        // 2
        [1, 44, 34],
        [1, 44, 28],
        [1, 44, 22],
        [1, 44, 16],

        // 3
        [1, 70, 55],
        [1, 70, 44],
        [2, 35, 17],
        [2, 35, 13],

        // 4
        [1, 100, 80],
        [2, 50, 32],
        [2, 50, 24],
        [4, 25, 9],

        // 5
        [1, 134, 108],
        [2, 67, 43],
        [2, 33, 15, 2, 34, 16],
        [2, 33, 11, 2, 34, 12],

        // 6
        [2, 86, 68],
        [4, 43, 27],
        [4, 43, 19],
        [4, 43, 15],

        // 7
        [2, 98, 78],
        [4, 49, 31],
        [2, 32, 14, 4, 33, 15],
        [4, 39, 13, 1, 40, 14],

        // 8
        [2, 121, 97],
        [2, 60, 38, 2, 61, 39],
        [4, 40, 18, 2, 41, 19],
        [4, 40, 14, 2, 41, 15],

        // 9
        [2, 146, 116],
        [3, 58, 36, 2, 59, 37],
        [4, 36, 16, 4, 37, 17],
        [4, 36, 12, 4, 37, 13],

        // 10
        [2, 86, 68, 2, 87, 69],
        [4, 69, 43, 1, 70, 44],
        [6, 43, 19, 2, 44, 20],
        [6, 43, 15, 2, 44, 16],

        // 11
        [4, 101, 81],
        [1, 80, 50, 4, 81, 51],
        [4, 50, 22, 4, 51, 23],
        [3, 36, 12, 8, 37, 13],

        // 12
        [2, 116, 92, 2, 117, 93],
        [6, 58, 36, 2, 59, 37],
        [4, 46, 20, 6, 47, 21],
        [7, 42, 14, 4, 43, 15],

        // 13
        [4, 133, 107],
        [8, 59, 37, 1, 60, 38],
        [8, 44, 20, 4, 45, 21],
        [12, 33, 11, 4, 34, 12],

        // 14
        [3, 145, 115, 1, 146, 116],
        [4, 64, 40, 5, 65, 41],
        [11, 36, 16, 5, 37, 17],
        [11, 36, 12, 5, 37, 13],

        // 15
        [5, 109, 87, 1, 110, 88],
        [5, 65, 41, 5, 66, 42],
        [5, 54, 24, 7, 55, 25],
        [11, 36, 12, 7, 37, 13],

        // 16
        [5, 122, 98, 1, 123, 99],
        [7, 73, 45, 3, 74, 46],
        [15, 43, 19, 2, 44, 20],
        [3, 45, 15, 13, 46, 16],

        // 17
        [1, 135, 107, 5, 136, 108],
        [10, 74, 46, 1, 75, 47],
        [1, 50, 22, 15, 51, 23],
        [2, 42, 14, 17, 43, 15],

        // 18
        [5, 150, 120, 1, 151, 121],
        [9, 69, 43, 4, 70, 44],
        [17, 50, 22, 1, 51, 23],
        [2, 42, 14, 19, 43, 15],

        // 19
        [3, 141, 113, 4, 142, 114],
        [3, 70, 44, 11, 71, 45],
        [17, 47, 21, 4, 48, 22],
        [9, 39, 13, 16, 40, 14],

        // 20
        [3, 135, 107, 5, 136, 108],
        [3, 67, 41, 13, 68, 42],
        [15, 54, 24, 5, 55, 25],
        [15, 43, 15, 10, 44, 16],

        // 21
        [4, 144, 116, 4, 145, 117],
        [17, 68, 42],
        [17, 50, 22, 6, 51, 23],
        [19, 46, 16, 6, 47, 17],

        // 22
        [2, 139, 111, 7, 140, 112],
        [17, 74, 46],
        [7, 54, 24, 16, 55, 25],
        [34, 37, 13],

        // 23
        [4, 151, 121, 5, 152, 122],
        [4, 75, 47, 14, 76, 48],
        [11, 54, 24, 14, 55, 25],
        [16, 45, 15, 14, 46, 16],

        // 24
        [6, 147, 117, 4, 148, 118],
        [6, 73, 45, 14, 74, 46],
        [11, 54, 24, 16, 55, 25],
        [30, 46, 16, 2, 47, 17],

        // 25
        [8, 132, 106, 4, 133, 107],
        [8, 75, 47, 13, 76, 48],
        [7, 54, 24, 22, 55, 25],
        [22, 45, 15, 13, 46, 16],

        // 26
        [10, 142, 114, 2, 143, 115],
        [19, 74, 46, 4, 75, 47],
        [28, 50, 22, 6, 51, 23],
        [33, 46, 16, 4, 47, 17],

        // 27
        [8, 152, 122, 4, 153, 123],
        [22, 73, 45, 3, 74, 46],
        [8, 53, 23, 26, 54, 24],
        [12, 45, 15, 28, 46, 16],

        // 28
        [3, 147, 117, 10, 148, 118],
        [3, 73, 45, 23, 74, 46],
        [4, 54, 24, 31, 55, 25],
        [11, 45, 15, 31, 46, 16],

        // 29
        [7, 146, 116, 7, 147, 117],
        [21, 73, 45, 7, 74, 46],
        [1, 53, 23, 37, 54, 24],
        [19, 45, 15, 26, 46, 16],

        // 30
        [5, 145, 115, 10, 146, 116],
        [19, 75, 47, 10, 76, 48],
        [15, 54, 24, 25, 55, 25],
        [23, 45, 15, 25, 46, 16],

        // 31
        [13, 145, 115, 3, 146, 116],
        [2, 74, 46, 29, 75, 47],
        [42, 54, 24, 1, 55, 25],
        [23, 45, 15, 28, 46, 16],

        // 32
        [17, 145, 115],
        [10, 74, 46, 23, 75, 47],
        [10, 54, 24, 35, 55, 25],
        [19, 45, 15, 35, 46, 16],

        // 33
        [17, 145, 115, 1, 146, 116],
        [14, 74, 46, 21, 75, 47],
        [29, 54, 24, 19, 55, 25],
        [11, 45, 15, 46, 46, 16],

        // 34
        [13, 145, 115, 6, 146, 116],
        [14, 74, 46, 23, 75, 47],
        [44, 54, 24, 7, 55, 25],
        [59, 46, 16, 1, 47, 17],

        // 35
        [12, 151, 121, 7, 152, 122],
        [12, 75, 47, 26, 76, 48],
        [39, 54, 24, 14, 55, 25],
        [22, 45, 15, 41, 46, 16],

        // 36
        [6, 151, 121, 14, 152, 122],
        [6, 75, 47, 34, 76, 48],
        [46, 54, 24, 10, 55, 25],
        [2, 45, 15, 64, 46, 16],

        // 37
        [17, 152, 122, 4, 153, 123],
        [29, 74, 46, 14, 75, 47],
        [49, 54, 24, 10, 55, 25],
        [24, 45, 15, 46, 46, 16],

        // 38
        [4, 152, 122, 18, 153, 123],
        [13, 74, 46, 32, 75, 47],
        [48, 54, 24, 14, 55, 25],
        [42, 45, 15, 32, 46, 16],

        // 39
        [20, 147, 117, 4, 148, 118],
        [40, 75, 47, 7, 76, 48],
        [43, 54, 24, 22, 55, 25],
        [10, 45, 15, 67, 46, 16],

        // 40
        [19, 148, 118, 6, 149, 119],
        [18, 75, 47, 31, 76, 48],
        [34, 54, 24, 34, 55, 25],
        [20, 45, 15, 61, 46, 16]
      ];

      var qrRSBlock = function(totalCount, dataCount) {
        var _this = {};
        _this.totalCount = totalCount;
        _this.dataCount = dataCount;
        return _this;
      };

      var _this = {};

      var getRsBlockTable = function(typeNumber, errorCorrectionLevel) {

        switch(errorCorrectionLevel) {
        case QRErrorCorrectionLevel.L :
          return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
        case QRErrorCorrectionLevel.M :
          return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
        case QRErrorCorrectionLevel.Q :
          return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
        case QRErrorCorrectionLevel.H :
          return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
        default :
          return undefined;
        }
      };

      _this.getRSBlocks = function(typeNumber, errorCorrectionLevel) {

        var rsBlock = getRsBlockTable(typeNumber, errorCorrectionLevel);

        if (typeof rsBlock == 'undefined') {
          throw 'bad rs block @ typeNumber:' + typeNumber +
              '/errorCorrectionLevel:' + errorCorrectionLevel;
        }

        var length = rsBlock.length / 3;

        var list = [];

        for (var i = 0; i < length; i += 1) {

          var count = rsBlock[i * 3 + 0];
          var totalCount = rsBlock[i * 3 + 1];
          var dataCount = rsBlock[i * 3 + 2];

          for (var j = 0; j < count; j += 1) {
            list.push(qrRSBlock(totalCount, dataCount) );
          }
        }

        return list;
      };

      return _this;
    }();

    //---------------------------------------------------------------------
    // qrBitBuffer
    //---------------------------------------------------------------------

    var qrBitBuffer = function() {

      var _buffer = [];
      var _length = 0;

      var _this = {};

      _this.getBuffer = function() {
        return _buffer;
      };

      _this.getAt = function(index) {
        var bufIndex = Math.floor(index / 8);
        return ( (_buffer[bufIndex] >>> (7 - index % 8) ) & 1) == 1;
      };

      _this.put = function(num, length) {
        for (var i = 0; i < length; i += 1) {
          _this.putBit( ( (num >>> (length - i - 1) ) & 1) == 1);
        }
      };

      _this.getLengthInBits = function() {
        return _length;
      };

      _this.putBit = function(bit) {

        var bufIndex = Math.floor(_length / 8);
        if (_buffer.length <= bufIndex) {
          _buffer.push(0);
        }

        if (bit) {
          _buffer[bufIndex] |= (0x80 >>> (_length % 8) );
        }

        _length += 1;
      };

      return _this;
    };

    //---------------------------------------------------------------------
    // qrNumber
    //---------------------------------------------------------------------

    var qrNumber = function(data) {

      var _mode = QRMode.MODE_NUMBER;
      var _data = data;

      var _this = {};

      _this.getMode = function() {
        return _mode;
      };

      _this.getLength = function(buffer) {
        return _data.length;
      };

      _this.write = function(buffer) {

        var data = _data;

        var i = 0;

        while (i + 2 < data.length) {
          buffer.put(strToNum(data.substring(i, i + 3) ), 10);
          i += 3;
        }

        if (i < data.length) {
          if (data.length - i == 1) {
            buffer.put(strToNum(data.substring(i, i + 1) ), 4);
          } else if (data.length - i == 2) {
            buffer.put(strToNum(data.substring(i, i + 2) ), 7);
          }
        }
      };

      var strToNum = function(s) {
        var num = 0;
        for (var i = 0; i < s.length; i += 1) {
          num = num * 10 + chatToNum(s.charAt(i) );
        }
        return num;
      };

      var chatToNum = function(c) {
        if ('0' <= c && c <= '9') {
          return c.charCodeAt(0) - '0'.charCodeAt(0);
        }
        throw 'illegal char :' + c;
      };

      return _this;
    };

    //---------------------------------------------------------------------
    // qrAlphaNum
    //---------------------------------------------------------------------

    var qrAlphaNum = function(data) {

      var _mode = QRMode.MODE_ALPHA_NUM;
      var _data = data;

      var _this = {};

      _this.getMode = function() {
        return _mode;
      };

      _this.getLength = function(buffer) {
        return _data.length;
      };

      _this.write = function(buffer) {

        var s = _data;

        var i = 0;

        while (i + 1 < s.length) {
          buffer.put(
            getCode(s.charAt(i) ) * 45 +
            getCode(s.charAt(i + 1) ), 11);
          i += 2;
        }

        if (i < s.length) {
          buffer.put(getCode(s.charAt(i) ), 6);
        }
      };

      var getCode = function(c) {

        if ('0' <= c && c <= '9') {
          return c.charCodeAt(0) - '0'.charCodeAt(0);
        } else if ('A' <= c && c <= 'Z') {
          return c.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
        } else {
          switch (c) {
          case ' ' : return 36;
          case '$' : return 37;
          case '%' : return 38;
          case '*' : return 39;
          case '+' : return 40;
          case '-' : return 41;
          case '.' : return 42;
          case '/' : return 43;
          case ':' : return 44;
          default :
            throw 'illegal char :' + c;
          }
        }
      };

      return _this;
    };

    //---------------------------------------------------------------------
    // qr8BitByte
    //---------------------------------------------------------------------

    var qr8BitByte = function(data) {

      var _mode = QRMode.MODE_8BIT_BYTE;
      var _bytes = qrcode.stringToBytes(data);

      var _this = {};

      _this.getMode = function() {
        return _mode;
      };

      _this.getLength = function(buffer) {
        return _bytes.length;
      };

      _this.write = function(buffer) {
        for (var i = 0; i < _bytes.length; i += 1) {
          buffer.put(_bytes[i], 8);
        }
      };

      return _this;
    };

    //---------------------------------------------------------------------
    // qrKanji
    //---------------------------------------------------------------------

    var qrKanji = function(data) {

      var _mode = QRMode.MODE_KANJI;

      var stringToBytes = qrcode.stringToBytesFuncs['SJIS'];
      if (!stringToBytes) {
        throw 'sjis not supported.';
      }
      !function(c, code) {
        // self test for sjis support.
        var test = stringToBytes(c);
        if (test.length != 2 || ( (test[0] << 8) | test[1]) != code) {
          throw 'sjis not supported.';
        }
      }('\u53cb', 0x9746);

      var _bytes = stringToBytes(data);

      var _this = {};

      _this.getMode = function() {
        return _mode;
      };

      _this.getLength = function(buffer) {
        return ~~(_bytes.length / 2);
      };

      _this.write = function(buffer) {

        var data = _bytes;

        var i = 0;

        while (i + 1 < data.length) {

          var c = ( (0xff & data[i]) << 8) | (0xff & data[i + 1]);

          if (0x8140 <= c && c <= 0x9FFC) {
            c -= 0x8140;
          } else if (0xE040 <= c && c <= 0xEBBF) {
            c -= 0xC140;
          } else {
            throw 'illegal char at ' + (i + 1) + '/' + c;
          }

          c = ( (c >>> 8) & 0xff) * 0xC0 + (c & 0xff);

          buffer.put(c, 13);

          i += 2;
        }

        if (i < data.length) {
          throw 'illegal char at ' + (i + 1);
        }
      };

      return _this;
    };

    //=====================================================================
    // GIF Support etc.
    //

    //---------------------------------------------------------------------
    // byteArrayOutputStream
    //---------------------------------------------------------------------

    var byteArrayOutputStream = function() {

      var _bytes = [];

      var _this = {};

      _this.writeByte = function(b) {
        _bytes.push(b & 0xff);
      };

      _this.writeShort = function(i) {
        _this.writeByte(i);
        _this.writeByte(i >>> 8);
      };

      _this.writeBytes = function(b, off, len) {
        off = off || 0;
        len = len || b.length;
        for (var i = 0; i < len; i += 1) {
          _this.writeByte(b[i + off]);
        }
      };

      _this.writeString = function(s) {
        for (var i = 0; i < s.length; i += 1) {
          _this.writeByte(s.charCodeAt(i) );
        }
      };

      _this.toByteArray = function() {
        return _bytes;
      };

      _this.toString = function() {
        var s = '';
        s += '[';
        for (var i = 0; i < _bytes.length; i += 1) {
          if (i > 0) {
            s += ',';
          }
          s += _bytes[i];
        }
        s += ']';
        return s;
      };

      return _this;
    };

    //---------------------------------------------------------------------
    // base64EncodeOutputStream
    //---------------------------------------------------------------------

    var base64EncodeOutputStream = function() {

      var _buffer = 0;
      var _buflen = 0;
      var _length = 0;
      var _base64 = '';

      var _this = {};

      var writeEncoded = function(b) {
        _base64 += String.fromCharCode(encode(b & 0x3f) );
      };

      var encode = function(n) {
        if (n < 0) ; else if (n < 26) {
          return 0x41 + n;
        } else if (n < 52) {
          return 0x61 + (n - 26);
        } else if (n < 62) {
          return 0x30 + (n - 52);
        } else if (n == 62) {
          return 0x2b;
        } else if (n == 63) {
          return 0x2f;
        }
        throw 'n:' + n;
      };

      _this.writeByte = function(n) {

        _buffer = (_buffer << 8) | (n & 0xff);
        _buflen += 8;
        _length += 1;

        while (_buflen >= 6) {
          writeEncoded(_buffer >>> (_buflen - 6) );
          _buflen -= 6;
        }
      };

      _this.flush = function() {

        if (_buflen > 0) {
          writeEncoded(_buffer << (6 - _buflen) );
          _buffer = 0;
          _buflen = 0;
        }

        if (_length % 3 != 0) {
          // padding
          var padlen = 3 - _length % 3;
          for (var i = 0; i < padlen; i += 1) {
            _base64 += '=';
          }
        }
      };

      _this.toString = function() {
        return _base64;
      };

      return _this;
    };

    //---------------------------------------------------------------------
    // base64DecodeInputStream
    //---------------------------------------------------------------------

    var base64DecodeInputStream = function(str) {

      var _str = str;
      var _pos = 0;
      var _buffer = 0;
      var _buflen = 0;

      var _this = {};

      _this.read = function() {

        while (_buflen < 8) {

          if (_pos >= _str.length) {
            if (_buflen == 0) {
              return -1;
            }
            throw 'unexpected end of file./' + _buflen;
          }

          var c = _str.charAt(_pos);
          _pos += 1;

          if (c == '=') {
            _buflen = 0;
            return -1;
          } else if (c.match(/^\s$/) ) {
            // ignore if whitespace.
            continue;
          }

          _buffer = (_buffer << 6) | decode(c.charCodeAt(0) );
          _buflen += 6;
        }

        var n = (_buffer >>> (_buflen - 8) ) & 0xff;
        _buflen -= 8;
        return n;
      };

      var decode = function(c) {
        if (0x41 <= c && c <= 0x5a) {
          return c - 0x41;
        } else if (0x61 <= c && c <= 0x7a) {
          return c - 0x61 + 26;
        } else if (0x30 <= c && c <= 0x39) {
          return c - 0x30 + 52;
        } else if (c == 0x2b) {
          return 62;
        } else if (c == 0x2f) {
          return 63;
        } else {
          throw 'c:' + c;
        }
      };

      return _this;
    };

    //---------------------------------------------------------------------
    // gifImage (B/W)
    //---------------------------------------------------------------------

    var gifImage = function(width, height) {

      var _width = width;
      var _height = height;
      var _data = new Array(width * height);

      var _this = {};

      _this.setPixel = function(x, y, pixel) {
        _data[y * _width + x] = pixel;
      };

      _this.write = function(out) {

        //---------------------------------
        // GIF Signature

        out.writeString('GIF87a');

        //---------------------------------
        // Screen Descriptor

        out.writeShort(_width);
        out.writeShort(_height);

        out.writeByte(0x80); // 2bit
        out.writeByte(0);
        out.writeByte(0);

        //---------------------------------
        // Global Color Map

        // black
        out.writeByte(0x00);
        out.writeByte(0x00);
        out.writeByte(0x00);

        // white
        out.writeByte(0xff);
        out.writeByte(0xff);
        out.writeByte(0xff);

        //---------------------------------
        // Image Descriptor

        out.writeString(',');
        out.writeShort(0);
        out.writeShort(0);
        out.writeShort(_width);
        out.writeShort(_height);
        out.writeByte(0);

        //---------------------------------
        // Local Color Map

        //---------------------------------
        // Raster Data

        var lzwMinCodeSize = 2;
        var raster = getLZWRaster(lzwMinCodeSize);

        out.writeByte(lzwMinCodeSize);

        var offset = 0;

        while (raster.length - offset > 255) {
          out.writeByte(255);
          out.writeBytes(raster, offset, 255);
          offset += 255;
        }

        out.writeByte(raster.length - offset);
        out.writeBytes(raster, offset, raster.length - offset);
        out.writeByte(0x00);

        //---------------------------------
        // GIF Terminator
        out.writeString(';');
      };

      var bitOutputStream = function(out) {

        var _out = out;
        var _bitLength = 0;
        var _bitBuffer = 0;

        var _this = {};

        _this.write = function(data, length) {

          if ( (data >>> length) != 0) {
            throw 'length over';
          }

          while (_bitLength + length >= 8) {
            _out.writeByte(0xff & ( (data << _bitLength) | _bitBuffer) );
            length -= (8 - _bitLength);
            data >>>= (8 - _bitLength);
            _bitBuffer = 0;
            _bitLength = 0;
          }

          _bitBuffer = (data << _bitLength) | _bitBuffer;
          _bitLength = _bitLength + length;
        };

        _this.flush = function() {
          if (_bitLength > 0) {
            _out.writeByte(_bitBuffer);
          }
        };

        return _this;
      };

      var getLZWRaster = function(lzwMinCodeSize) {

        var clearCode = 1 << lzwMinCodeSize;
        var endCode = (1 << lzwMinCodeSize) + 1;
        var bitLength = lzwMinCodeSize + 1;

        // Setup LZWTable
        var table = lzwTable();

        for (var i = 0; i < clearCode; i += 1) {
          table.add(String.fromCharCode(i) );
        }
        table.add(String.fromCharCode(clearCode) );
        table.add(String.fromCharCode(endCode) );

        var byteOut = byteArrayOutputStream();
        var bitOut = bitOutputStream(byteOut);

        // clear code
        bitOut.write(clearCode, bitLength);

        var dataIndex = 0;

        var s = String.fromCharCode(_data[dataIndex]);
        dataIndex += 1;

        while (dataIndex < _data.length) {

          var c = String.fromCharCode(_data[dataIndex]);
          dataIndex += 1;

          if (table.contains(s + c) ) {

            s = s + c;

          } else {

            bitOut.write(table.indexOf(s), bitLength);

            if (table.size() < 0xfff) {

              if (table.size() == (1 << bitLength) ) {
                bitLength += 1;
              }

              table.add(s + c);
            }

            s = c;
          }
        }

        bitOut.write(table.indexOf(s), bitLength);

        // end code
        bitOut.write(endCode, bitLength);

        bitOut.flush();

        return byteOut.toByteArray();
      };

      var lzwTable = function() {

        var _map = {};
        var _size = 0;

        var _this = {};

        _this.add = function(key) {
          if (_this.contains(key) ) {
            throw 'dup key:' + key;
          }
          _map[key] = _size;
          _size += 1;
        };

        _this.size = function() {
          return _size;
        };

        _this.indexOf = function(key) {
          return _map[key];
        };

        _this.contains = function(key) {
          return typeof _map[key] != 'undefined';
        };

        return _this;
      };

      return _this;
    };

    var createDataURL = function(width, height, getPixel) {
      var gif = gifImage(width, height);
      for (var y = 0; y < height; y += 1) {
        for (var x = 0; x < width; x += 1) {
          gif.setPixel(x, y, getPixel(x, y) );
        }
      }

      var b = byteArrayOutputStream();
      gif.write(b);

      var base64 = base64EncodeOutputStream();
      var bytes = b.toByteArray();
      for (var i = 0; i < bytes.length; i += 1) {
        base64.writeByte(bytes[i]);
      }
      base64.flush();

      return 'data:image/gif;base64,' + base64;
    };

    //---------------------------------------------------------------------
    // returns qrcode function.

    return qrcode;
  }();

  // multibyte support
  !function() {

    qrcode.stringToBytesFuncs['UTF-8'] = function(s) {
      // http://stackoverflow.com/questions/18729405/how-to-convert-utf8-string-to-byte-array
      function toUTF8Array(str) {
        var utf8 = [];
        for (var i=0; i < str.length; i++) {
          var charcode = str.charCodeAt(i);
          if (charcode < 0x80) utf8.push(charcode);
          else if (charcode < 0x800) {
            utf8.push(0xc0 | (charcode >> 6),
                0x80 | (charcode & 0x3f));
          }
          else if (charcode < 0xd800 || charcode >= 0xe000) {
            utf8.push(0xe0 | (charcode >> 12),
                0x80 | ((charcode>>6) & 0x3f),
                0x80 | (charcode & 0x3f));
          }
          // surrogate pair
          else {
            i++;
            // UTF-16 encodes 0x10000-0x10FFFF by
            // subtracting 0x10000 and splitting the
            // 20 bits of 0x0-0xFFFFF into two halves
            charcode = 0x10000 + (((charcode & 0x3ff)<<10)
              | (str.charCodeAt(i) & 0x3ff));
            utf8.push(0xf0 | (charcode >>18),
                0x80 | ((charcode>>12) & 0x3f),
                0x80 | ((charcode>>6) & 0x3f),
                0x80 | (charcode & 0x3f));
          }
        }
        return utf8;
      }
      return toUTF8Array(s);
    };

  }();

  (function (factory) {
    {
        module.exports = factory();
    }
  }(function () {
      return qrcode;
  }));
  });

  var QRCodeStyling = /*#__PURE__*/function () {
    function QRCodeStyling(options) {
      _classCallCheck(this, QRCodeStyling);
      this._options = void 0;
      this._container = void 0;
      this._canvas = void 0;
      this._svg = void 0;
      this._qr = void 0;
      this._canvasDrawingPromise = void 0;
      this._svgDrawingPromise = void 0;
      this._options = options ? sanitizeOptions(mergeDeep(defaultOptions, options)) : defaultOptions;
      this.update();
    }
    _createClass(QRCodeStyling, [{
      key: "_getQRStylingElement",
      value: function () {
        var _getQRStylingElement2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var extension,
            promise,
            svg,
            _promise,
            canvas,
            _args = arguments;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                extension = _args.length > 0 && _args[0] !== undefined ? _args[0] : "png";
                if (this._qr) {
                  _context.next = 3;
                  break;
                }
                throw "QR code is empty";
              case 3:
                if (!(extension.toLowerCase() === "svg")) {
                  _context.next = 10;
                  break;
                }
                if (this._svg && this._svgDrawingPromise) {
                  svg = this._svg;
                  promise = this._svgDrawingPromise;
                } else {
                  svg = new QRSVG(this._options);
                  promise = svg.drawQR(this._qr);
                }
                _context.next = 7;
                return promise;
              case 7:
                return _context.abrupt("return", svg);
              case 10:
                if (this._canvas && this._canvasDrawingPromise) {
                  canvas = this._canvas;
                  _promise = this._canvasDrawingPromise;
                } else {
                  canvas = new QRCanvas(this._options);
                  _promise = canvas.drawQR(this._qr);
                }
                _context.next = 13;
                return _promise;
              case 13:
                return _context.abrupt("return", canvas);
              case 14:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
        function _getQRStylingElement() {
          return _getQRStylingElement2.apply(this, arguments);
        }
        return _getQRStylingElement;
      }()
    }, {
      key: "update",
      value: function update(options) {
        QRCodeStyling._clearContainer(this._container);
        this._options = options ? sanitizeOptions(mergeDeep(this._options, options)) : this._options;
        if (!this._options.data) {
          return;
        }
        this._qr = qrcode_1(this._options.qrOptions.typeNumber, this._options.qrOptions.errorCorrectionLevel);
        this._qr.addData(this._options.data, this._options.qrOptions.mode || getMode(this._options.data));
        this._qr.make();
        if (this._options.type === drawTypes.canvas) {
          this._canvas = new QRCanvas(this._options);
          this._canvasDrawingPromise = this._canvas.drawQR(this._qr);
          this._svgDrawingPromise = undefined;
          this._svg = undefined;
        } else {
          this._svg = new QRSVG(this._options);
          this._svgDrawingPromise = this._svg.drawQR(this._qr);
          this._canvasDrawingPromise = undefined;
          this._canvas = undefined;
        }
        this.append(this._container);
      }
    }, {
      key: "append",
      value: function append(container) {
        if (!container) {
          return;
        }
        if (typeof container.appendChild !== "function") {
          throw "Container should be a single DOM node";
        }
        if (this._options.type === drawTypes.canvas) {
          if (this._canvas) {
            container.appendChild(this._canvas.getCanvas());
          }
        } else {
          if (this._svg) {
            container.appendChild(this._svg.getElement());
          }
        }
        this._container = container;
      }
    }, {
      key: "getRawData",
      value: function () {
        var _getRawData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          var extension,
            element,
            serializer,
            source,
            _args2 = arguments;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                extension = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : "png";
                if (this._qr) {
                  _context2.next = 3;
                  break;
                }
                throw "QR code is empty";
              case 3:
                _context2.next = 5;
                return this._getQRStylingElement(extension);
              case 5:
                element = _context2.sent;
                if (!(extension.toLowerCase() === "svg")) {
                  _context2.next = 12;
                  break;
                }
                serializer = new XMLSerializer();
                source = serializer.serializeToString(element.getElement());
                return _context2.abrupt("return", new Blob(['<?xml version="1.0" standalone="no"?>\r\n' + source], {
                  type: "image/svg+xml"
                }));
              case 12:
                return _context2.abrupt("return", new Promise(function (resolve) {
                  return element.getCanvas().toBlob(resolve, "image/".concat(extension), 1);
                }));
              case 13:
              case "end":
                return _context2.stop();
            }
          }, _callee2, this);
        }));
        function getRawData() {
          return _getRawData.apply(this, arguments);
        }
        return getRawData;
      }()
    }, {
      key: "download",
      value: function () {
        var _download = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(downloadOptions) {
          var extension, name, element, serializer, source, url, _url;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                if (this._qr) {
                  _context3.next = 2;
                  break;
                }
                throw "QR code is empty";
              case 2:
                extension = "png";
                name = "qr"; //TODO remove deprecated code in the v2
                if (typeof downloadOptions === "string") {
                  extension = downloadOptions;
                  console.warn("Extension is deprecated as argument for 'download' method, please pass object { name: '...', extension: '...' } as argument");
                } else if (_typeof(downloadOptions) === "object" && downloadOptions !== null) {
                  if (downloadOptions.name) {
                    name = downloadOptions.name;
                  }
                  if (downloadOptions.extension) {
                    extension = downloadOptions.extension;
                  }
                }
                _context3.next = 7;
                return this._getQRStylingElement(extension);
              case 7:
                element = _context3.sent;
                if (extension.toLowerCase() === "svg") {
                  serializer = new XMLSerializer();
                  source = serializer.serializeToString(element.getElement());
                  source = '<?xml version="1.0" standalone="no"?>\r\n' + source;
                  url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);
                  downloadURI(url, "".concat(name, ".svg"));
                } else {
                  _url = element.getCanvas().toDataURL("image/".concat(extension));
                  downloadURI(_url, "".concat(name, ".").concat(extension));
                }
              case 9:
              case "end":
                return _context3.stop();
            }
          }, _callee3, this);
        }));
        function download(_x) {
          return _download.apply(this, arguments);
        }
        return download;
      }()
    }], [{
      key: "_clearContainer",
      value: function _clearContainer(container) {
        if (container) {
          container.innerHTML = "";
        }
      }
    }]);
    return QRCodeStyling;
  }();

  exports.cornerDotTypes = cornerDotTypes;
  exports.cornerSquareTypes = cornerSquareTypes;
  exports.default = QRCodeStyling;
  exports.dotTypes = dotTypes;
  exports.drawTypes = drawTypes;
  exports.errorCorrectionLevels = errorCorrectionLevels;
  exports.errorCorrectionPercents = errorCorrectionPercents;
  exports.modes = modes;
  exports.qrTypes = qrTypes;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
