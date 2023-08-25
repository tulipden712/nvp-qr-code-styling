var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
import cornerSquareTypes from "../../../constants/cornerSquareTypes";
var QRCornerSquare = /** @class */function () {
  function QRCornerSquare(_a) {
    var svg = _a.svg,
      type = _a.type;
    this._svg = svg;
    this._type = type;
  }
  QRCornerSquare.prototype.draw = function (x, y, size, rotation) {
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
  };
  QRCornerSquare.prototype._rotateFigure = function (_a) {
    var _b;
    var x = _a.x,
      y = _a.y,
      size = _a.size,
      _c = _a.rotation,
      rotation = _c === void 0 ? 0 : _c,
      draw = _a.draw;
    var cx = x + size / 2;
    var cy = y + size / 2;
    draw();
    (_b = this._element) === null || _b === void 0 ? void 0 : _b.setAttribute("transform", "rotate(".concat(180 * rotation / Math.PI, ",").concat(cx, ",").concat(cy, ")"));
  };
  QRCornerSquare.prototype._basicDot = function (args) {
    var _this = this;
    var size = args.size,
      x = args.x,
      y = args.y;
    var dotSize = size / 7;
    this._rotateFigure(__assign(__assign({}, args), {
      draw: function draw() {
        _this._element = document.createElementNS("http://www.w3.org/2000/svg", "path");
        _this._element.setAttribute("clip-rule", "evenodd");
        _this._element.setAttribute("d", "M ".concat(x + size / 2, " ").concat(y) +
        // M cx, y //  Move to top of ring
        "a ".concat(size / 2, " ").concat(size / 2, " 0 1 0 0.1 0") +
        // a outerRadius, outerRadius, 0, 1, 0, 1, 0 // Draw outer arc, but don't close it
        "z" +
        // Z // Close the outer shape
        "m 0 ".concat(dotSize) +
        // m -1 outerRadius-innerRadius // Move to top point of inner radius
        "a ".concat(size / 2 - dotSize, " ").concat(size / 2 - dotSize, " 0 1 1 -0.1 0") +
        // a innerRadius, innerRadius, 0, 1, 1, -1, 0 // Draw inner arc, but don't close it
        "Z" // Z // Close the inner ring. Actually will still work without, but inner ring will have one unit missing in stroke
        );
      }
    }));
  };

  QRCornerSquare.prototype._basicSquare = function (args) {
    var _this = this;
    var size = args.size,
      x = args.x,
      y = args.y;
    var dotSize = size / 7;
    this._rotateFigure(__assign(__assign({}, args), {
      draw: function draw() {
        _this._element = document.createElementNS("http://www.w3.org/2000/svg", "path");
        _this._element.setAttribute("clip-rule", "evenodd");
        _this._element.setAttribute("d", "M ".concat(x, " ").concat(y) + "v ".concat(size) + "h ".concat(size) + "v ".concat(-size) + "z" + "M ".concat(x + dotSize, " ").concat(y + dotSize) + "h ".concat(size - 2 * dotSize) + "v ".concat(size - 2 * dotSize) + "h ".concat(-size + 2 * dotSize) + "z");
      }
    }));
  };
  QRCornerSquare.prototype._basicExtraRounded = function (args) {
    var _this = this;
    var size = args.size,
      x = args.x,
      y = args.y;
    var dotSize = size / 7;
    this._rotateFigure(__assign(__assign({}, args), {
      draw: function draw() {
        _this._element = document.createElementNS("http://www.w3.org/2000/svg", "path");
        _this._element.setAttribute("clip-rule", "evenodd");
        _this._element.setAttribute("d", "M ".concat(x, " ").concat(y + 2.5 * dotSize) + "v ".concat(2 * dotSize) + "a ".concat(2.5 * dotSize, " ").concat(2.5 * dotSize, ", 0, 0, 0, ").concat(dotSize * 2.5, " ").concat(dotSize * 2.5) + "h ".concat(2 * dotSize) + "a ".concat(2.5 * dotSize, " ").concat(2.5 * dotSize, ", 0, 0, 0, ").concat(dotSize * 2.5, " ").concat(-dotSize * 2.5) + "v ".concat(-2 * dotSize) + "a ".concat(2.5 * dotSize, " ").concat(2.5 * dotSize, ", 0, 0, 0, ").concat(-dotSize * 2.5, " ").concat(-dotSize * 2.5) + "h ".concat(-2 * dotSize) + "a ".concat(2.5 * dotSize, " ").concat(2.5 * dotSize, ", 0, 0, 0, ").concat(-dotSize * 2.5, " ").concat(dotSize * 2.5) + "M ".concat(x + 2.5 * dotSize, " ").concat(y + dotSize) + "h ".concat(2 * dotSize) + "a ".concat(1.5 * dotSize, " ").concat(1.5 * dotSize, ", 0, 0, 1, ").concat(dotSize * 1.5, " ").concat(dotSize * 1.5) + "v ".concat(2 * dotSize) + "a ".concat(1.5 * dotSize, " ").concat(1.5 * dotSize, ", 0, 0, 1, ").concat(-dotSize * 1.5, " ").concat(dotSize * 1.5) + "h ".concat(-2 * dotSize) + "a ".concat(1.5 * dotSize, " ").concat(1.5 * dotSize, ", 0, 0, 1, ").concat(-dotSize * 1.5, " ").concat(-dotSize * 1.5) + "v ".concat(-2 * dotSize) + "a ".concat(1.5 * dotSize, " ").concat(1.5 * dotSize, ", 0, 0, 1, ").concat(dotSize * 1.5, " ").concat(-dotSize * 1.5));
      }
    }));
  };
  QRCornerSquare.prototype._drawDot = function (_a) {
    var x = _a.x,
      y = _a.y,
      size = _a.size,
      rotation = _a.rotation;
    this._basicDot({
      x: x,
      y: y,
      size: size,
      rotation: rotation
    });
  };
  QRCornerSquare.prototype._drawSquare = function (_a) {
    var x = _a.x,
      y = _a.y,
      size = _a.size,
      rotation = _a.rotation;
    this._basicSquare({
      x: x,
      y: y,
      size: size,
      rotation: rotation
    });
  };
  QRCornerSquare.prototype._drawExtraRounded = function (_a) {
    var x = _a.x,
      y = _a.y,
      size = _a.size,
      rotation = _a.rotation;
    this._basicExtraRounded({
      x: x,
      y: y,
      size: size,
      rotation: rotation
    });
  };
  return QRCornerSquare;
}();
export default QRCornerSquare;